// Offline packs (#/offline, website only; the phone apps already contain everything): choose a board, classes and
// subjects, save them with progress and size, see which classes are saved, and retry files that failed.
// Files go into the service worker's data cache ("pocket-class-data", see sw.js), which app updates keep.

(() => {
  const DATA_CACHE = "pocket-class-data";
  const KEY = "vidya:packs"; // { "cbse/9": { at, files, failed } }: when each class was last saved (this device)
  const read = () => {
    try {
      return JSON.parse(localStorage.getItem(KEY)) || {};
    } catch (e) {
      return {};
    }
  };
  const write = (x) => {
    try {
      localStorage.setItem(KEY, JSON.stringify(x));
    } catch (e) {
      /* storage full or blocked */
    }
  };

  const D = StudyData;
  const sel = { board: null, classes: null, subjects: null }; // subjects: null = every subject (only chosen with one class)
  let job = null; // { total, done, bytes, failed: [url], running }

  // The registry answers for the current board; for another board, switch for the moment of the question.
  function withBoard(b, fn) {
    const prev = D.board;
    D.setBoard(b);
    try {
      return fn();
    } finally {
      D.setBoard(prev);
    }
  }
  const subjectsOf = (b, c) => withBoard(b, () => D.subjectsFor(c));
  function classFiles(b, c, ids) {
    return withBoard(b, () => [D.indexFile(c), ...D.files(c, ids || undefined).filter((f) => !f.endsWith("index.js")), ...D.practiceFiles(c, ids || undefined), ...(D.hasObjectiveFile(c) ? [D.objectivesFile(c)] : [])]);
  }
  // Files every pack shares: Practice by topic, the timelines and the key-term glossary.
  const shared = () => [...D.PATH_SUBJECTS.filter((id) => !D.locked(id)).map(D.pathFile), D.timelinesFile, D.glossaryFile];
  const mb = (bytes) => (bytes / 1048576).toFixed(bytes < 10485760 ? 1 : 0);
  const supported = () => typeof caches !== "undefined" && location.protocol.startsWith("http");

  async function savedCount(urls) {
    const c = await caches.open(DATA_CACHE);
    const hits = await Promise.all(urls.map((u) => c.match(u, { ignoreSearch: true })));
    return hits.filter(Boolean).length;
  }

  async function download(urls, onStep) {
    const c = await caches.open(DATA_CACHE);
    job = { total: urls.length, done: 0, bytes: 0, failed: [], running: true };
    for (let i = 0; i < urls.length; i += 6) {
      await Promise.all(
        urls.slice(i, i + 6).map(async (u) => {
          try {
            const r = await fetch(u, { cache: "no-cache" });
            if (!r.ok) throw new Error(r.status);
            job.bytes += (await r.clone().blob()).size;
            await c.put(u, r);
          } catch (e) {
            job.failed.push(u);
          }
        })
      );
      job.done = Math.min(i + 6, urls.length);
      onStep();
    }
    job.running = false;
    onStep();
  }

  function offline() {
    const { topbar } = Views._;
    const p = Store.state.profile;
    if (!sel.board) sel.board = p.board === "pseb" ? "pseb" : "cbse";
    if (!sel.classes) sel.classes = D.classes.includes(p.cls) ? [p.cls] : [];
    if (Native.is || !supported())
      return {
        title: t("Offline packs"),
        html: `${topbar(t("Offline packs"), "#/settings")}<div class="card small muted">${Native.is ? t("This app already has every class and subject. Nothing needs to be downloaded.") : t("This browser can't save files for offline use.")}</div>`,
      };
    return {
      title: t("Offline packs"),
      html: `${topbar(t("Offline packs"), "#/settings")}
        <p class="small muted" style="margin:-6px 2px 16px">${t("Choose what to keep on this device. Saved classes open without internet, and app updates keep them.")}</p>
        <div id="packs"></div>`,
      mount(el) {
        const box = el.querySelector("#packs");
        const draw = () => {
          box.innerHTML = packsHTML();
          refreshStatus(box);
        };
        draw();
        box.onclick = (e) => {
          const b = e.target.closest("[data-board],[data-cls],[data-act]");
          if (!b || (job && job.running)) return;
          if (b.dataset.board) {
            sel.board = b.dataset.board;
            sel.subjects = null;
          } else if (b.dataset.cls) {
            const c = Number(b.dataset.cls);
            sel.classes = sel.classes.includes(c) ? sel.classes.filter((x) => x !== c) : [...sel.classes, c].sort((a, z) => a - z);
            sel.subjects = null;
          } else if (b.dataset.act === "all-classes") {
            sel.classes = sel.classes.length === D.classes.length ? [] : D.classes.slice();
            sel.subjects = null;
          } else if (b.dataset.act === "save" || b.dataset.act === "retry") {
            const urls = b.dataset.act === "retry" ? job.failed.slice() : chosenFiles();
            const step = () => (box.querySelector("#pack-progress").innerHTML = progressHTML());
            draw();
            download(urls, step).then(() => {
              if (b.dataset.act === "save") {
                const rec = read();
                sel.classes.forEach((c) => (rec[`${sel.board}/${c}`] = { at: Date.now(), failed: job.failed.length }));
                write(rec);
              }
              toast(job.failed.length ? t("{n} files couldn't be saved. Check your connection and try again.", { n: job.failed.length }) : t("Saved for offline use"));
              draw();
            });
            return;
          } else return;
          draw();
        };
        box.onchange = (e) => {
          if (e.target.dataset.subj === undefined) return;
          sel.subjects = [...box.querySelectorAll("[data-subj]")].filter((x) => x.checked).map((x) => x.dataset.subj);
          draw();
        };
      },
    };
  }

  function chosenFiles() {
    const ids = sel.classes.length === 1 ? sel.subjects : null;
    return [...new Set([...sel.classes.flatMap((c) => classFiles(sel.board, c, ids)), ...shared()])];
  }

  function progressHTML() {
    if (!job) return "";
    const pc = job.total ? Math.round((job.done / job.total) * 100) : 100;
    return `<div class="meter" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${pc}"><i style="width:${pc}%"></i></div>
      <p class="small ${job.failed.length && !job.running ? "" : "muted"}" role="status">${
        job.running
          ? t("Saving… {n}%", { n: pc }) + ` · ${t("{mb} MB", { mb: mb(job.bytes) })}`
          : job.failed.length
            ? t("{n} files couldn't be saved. Check your connection and try again.", { n: job.failed.length })
            : t("Done: {n} files, {mb} MB.", { n: job.total, mb: mb(job.bytes) })
      }</p>
      ${!job.running && job.failed.length ? `<button class="btn" data-act="retry">${icon("reset")} ${t("Try again")}</button>` : ""}`;
  }

  function packsHTML() {
    const one = sel.classes.length === 1 ? sel.classes[0] : null;
    const subs = one ? subjectsOf(sel.board, one) : [];
    const picked = sel.subjects || subs.map((s) => s.id);
    const files = chosenFiles();
    const busy = job && job.running;
    const rec = read();
    return `<div class="stack">
      <div class="card"><strong>${t("Board")}</strong><div class="chips" style="margin-top:10px">${Object.entries(D.boards)
        .map(([id, name]) => `<button class="chip ${sel.board === id ? "on" : ""}" data-board="${id}" aria-pressed="${sel.board === id}">${esc(name)}</button>`)
        .join("")}</div></div>
      <div class="card"><div class="row"><strong class="grow">${t("Classes")}</strong><button class="chip" data-act="all-classes">${sel.classes.length === D.classes.length ? t("Clear") : t("Select all")}</button></div>
        <div class="chips" style="margin-top:10px">${D.classes
          .map((c) => `<button class="chip ${sel.classes.includes(c) ? "on" : ""}" data-cls="${c}" aria-pressed="${sel.classes.includes(c)}">${t("Class {n}", { n: c })}</button>`)
          .join("")}</div></div>
      ${one ? `<div class="card"><strong>${t("Subjects")}</strong><div class="check-list">${subs
        .map((s) => `<label><input type="checkbox" data-subj="${s.id}" ${picked.includes(s.id) ? "checked" : ""}><span>${esc(s.name)}</span></label>`)
        .join("")}</div></div>` : sel.classes.length > 1 ? `<div class="card small muted">${t("Every subject of the chosen classes is saved. Pick one class to choose subjects.")}</div>` : ""}
      <div class="card">
        <button class="btn primary block" data-act="save" ${sel.classes.length && (!one || picked.length) && !busy ? "" : "disabled"}>${icon("download")} ${t("Save for offline · {n} files", { n: files.length })}</button>
        <div id="pack-progress" style="margin-top:10px">${progressHTML()}</div>
      </div>
      <h2 class="block-title">${t("On this device")}</h2>
      <div class="card"><ul class="pack-status">${D.classes
        .map((c) => {
          const r = rec[`${sel.board}/${c}`];
          return `<li data-status="${c}"><span class="grow">${t("Class {n}", { n: c })}</span><span class="small muted" data-st>…</span>${r ? `<span class="tiny muted">${t("saved {date}", { date: dateShort(new Date(r.at)) })}</span>` : ""}</li>`;
        })
        .join("")}</ul></div>
    </div>`;
  }

  // Fills in "Saved", "Partly saved (n of m)" or "Not saved" for each class of the board, from the data cache.
  function refreshStatus(box) {
    const b = sel.board;
    D.classes.forEach(async (c) => {
      const urls = classFiles(b, c, null);
      const n = await savedCount(urls);
      const li = box.querySelector(`[data-status="${c}"] [data-st]`);
      if (!li || sel.board !== b) return;
      li.textContent = n >= urls.length ? t("Saved") : n ? t("Partly saved ({a} of {b} files)", { a: n, b: urls.length }) : t("Not saved");
      li.closest("li").dataset.state = n >= urls.length ? "saved" : n ? "partial" : "none";
    });
  }

  Object.assign(Views, { offline });
})();
