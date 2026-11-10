// Printable practice sheets: a maker (#/sheets) to pick chapters and question types, and the sheet itself
// (#/worksheet/{class}/{subject}?ch=…&m=…). A sheet number seeds the choice of questions, so "Sheet 3"
// is always the same sheet (handy for a class) and the next number is always a new one.

const Sheets = (() => {
  const D = StudyData;
  const cls = () => Store.state.profile.cls;

  // Remembered while the app is open.
  const cfg = { subject: null, chapters: null, m: 10, s: 5, l: 2, g: 5, d: 0, k: 1, b: 0, x: 0, f: 0, w: 0, dt: 0, pic: [], pn: 4, o: "" };

  // One-tap sheets: the settings each preset fills in (counts are capped by what the chosen chapters have).
  const PRESETS = {
    quick: { label: "10-minute practice", hint: "5 multiple choice, 2 short answers and a few true or false", set: { m: 5, s: 2, l: 0, g: 0, d: 0, b: 0, x: 0, f: 5, w: 0, dt: 0 } },
    exam: { label: "Exam practice", hint: "A full paper: multiple choice, short and long answers, and numericals where the subject has them", set: { m: 20, s: 8, l: 3, g: 5, d: 0, b: 0, x: 0, f: 0, w: 0, dt: 0 } },
    challenge: { label: "Challenge sheet", hint: "Hard multiple choice and long answers", set: { m: 10, s: 0, l: 3, g: 5, d: 3, b: 0, x: 0, f: 0, w: 0, dt: 0 } },
    weak: { label: "My weak chapters", hint: "Chapters with open mistakes or a quiz score under 60%", set: { m: 15, s: 5, l: 1, g: 5, d: 0, b: 0, x: 0, f: 5, w: 0, dt: 0 } },
  };
  // This subject's chapters with an open mistake or a best quiz score under 60%.
  function weakChapters(c, sid) {
    const withMistakes = new Set(Store.mistakesFor(c).map(Store.parseKey).filter((k) => k.cls === c && k.subject === sid).map((k) => k.chapterId));
    return D.chapters(c, sid)
      .filter((ch) => {
        const r = Store.chapter(Store.key(c, sid, ch.id));
        return withMistakes.has(ch.id) || (r && r.best != null && r.attempts && r.best < 60);
      })
      .map((ch) => ch.id);
  }

  const COUNTS = { m: [0, 5, 10, 15, 20, 30], s: [0, 3, 5, 8, 10], l: [0, 1, 2, 3, 5], g: [0, 5, 10, 15, 20], b: [0, 5, 8, 10, 15], x: [0, 1, 2, 3], f: [0, 5, 8, 10, 15], w: [0, 5, 8, 10], dt: [0, 5, 8, 10] };
  // The sections made from the chapter's own terms, notes and timelines (js/derive.js): sheet key -> Derive kinds, and the least a chapter set needs.
  const DERIVED = { b: { kinds: ["blank"], min: 3 }, x: { kinds: ["match"], min: 1 }, f: { kinds: ["tf"], min: 3 }, w: { kinds: ["meaning"], min: 3 }, dt: { kinds: ["when", "first"], min: 3 } };
  // Picture worksheets (Classes 1 to 3): the types, in the order they print.
  const PIC_TYPES = ["count", "add", "which", "odd", "clock", "frac"];
  const LANG_SUBJECTS = { hindi: "Hi", hindipb: "Hi", punjabi: "Pa" };
  const LEVELS = [[0, "Mixed"], [1, "Easy"], [2, "Medium"], [3, "Hard"]];

  function seededShuffle(list, R) {
    const a = list.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(R.next() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  // Takes `count` items, spreading them across chapters in turn.
  function spread(groups, count) {
    const out = [];
    let added = true;
    while (out.length < count && added) {
      added = false;
      for (const g of groups)
        if (g.length && out.length < count) {
          out.push(g.shift());
          added = true;
        }
    }
    return out;
  }

  const levelOk = (q, d) => !d || (q.level ? q.level === d : d === 2);

  // Everything a sheet could draw on, per chapter.
  // `obj` (optional): keep only the questions of that learning objective (js/objectives.js), for a one-skill sheet.
  function sources(c, subj, chs, d, obj) {
    const mine = (ch) => (q) => !obj || (typeof Objectives !== "undefined" && (Objectives.forQuestion(c, subj.id, ch, q) || {}).id === obj);
    return chs.map((ch) => {
      const bank = D.practiceFor(c, subj.id, ch.id);
      const written = [
        ...bank.written,
        ...(ch.qa || []).map((x) => ({ ...x, marks: 3 })),
        ...(ch.examples || []).map((x) => ({ q: x.q, a: [...x.steps, x.answer].join("\n"), marks: 3 })),
      ];
      const ok = mine(ch);
      return {
        ch,
        mcq: Views.ui.quizItems(c, subj, ch).filter((q) => levelOk(q, d) && ok(q)),
        short: written.filter((x) => (x.marks || 3) <= 3 && ok(x)),
        long: written.filter((x) => (x.marks || 3) >= 4 && ok(x)),
        gen: obj ? 0 : Gen.forChapter(c, subj.id, ch.id).length,
      };
    });
  }

  function parse(query) {
    const p = new URLSearchParams(query || "");
    const num = (k, def) => (p.has(k) ? Math.max(0, Math.min(50, Number(p.get(k)) || 0)) : def);
    return {
      ch: p.get("ch") ? p.get("ch").split(",") : null,
      m: num("m", 10),
      s: num("s", 5),
      l: num("l", 2),
      g: num("g", 5),
      d: num("d", 0),
      k: p.get("k") === "0" ? 0 : 1,
      n: Math.max(1, Number(p.get("n")) || 1),
      b: num("b", 0),
      x: num("x", 0),
      f: num("f", 0),
      w: num("w", 0),
      dt: num("dt", 0),
      rev: p.get("rev") === "1" ? 1 : 0,
      pic: p.get("pic") ? p.get("pic").split(",").filter((x) => PIC_TYPES.includes(x)) : [],
      pn: Math.max(2, Math.min(8, Number(p.get("pn")) || 4)),
      o: /^[\w-]{1,80}$/.test(p.get("o") || "") ? p.get("o") : "",
    };
  }

  // The newer settings are added only when they are used, so an old link gives the same address (and the same sheet) as before.
  const query = (o) =>
    `ch=${(o.ch || []).join(",")}&m=${o.m}&s=${o.s}&l=${o.l}&g=${o.g}&d=${o.d}&k=${o.k}&n=${o.n}` +
    ["b", "x", "f", "w", "dt"].map((k) => (o[k] ? `&${k}=${o[k]}` : "")).join("") +
    (o.rev ? "&rev=1" : "") +
    (o.pic && o.pic.length ? `&pic=${o.pic.join(",")}&pn=${o.pn || 4}` : "") +
    (o.o ? `&o=${o.o}` : "");

  // ---------- picture worksheets (Classes 1 to 3) ----------

  const PIC_LABEL = {
    count: () => t("Count and write"),
    add: () => t("Add the pictures"),
    which: () => t("Circle the right picture"),
    odd: () => t("Odd one out"),
    clock: () => t("What time is it?"),
    frac: () => t("Colour the fraction"),
  };

  // The kinds that can be made for this class and subject. Hindi and Punjabi sheets keep their language: only "circle the
  // right picture" has words in those, so it is the only one offered there.
  function picTypes(c, sid) {
    if (c > 3 || typeof Pics === "undefined") return [];
    if (LANG_SUBJECTS[sid]) return ["which"];
    return PIC_TYPES.filter((k) => (k === "clock" ? c >= 2 : k === "frac" ? c === 3 : true));
  }

  const picSvg = (name, size = 100) => Pics.svg(Pics.item(name, { x: size / 2, y: size / 2, s: size * 0.88 }), { w: size, h: size, label: name });

  // `n` different questions from one generator.
  function picQuestions(gen, n, R) {
    const out = [];
    const seen = new Set();
    for (let i = 0; i < n * 6 && out.length < n; i++) {
      const q = Gen.make(gen, Math.floor(R.next() * 2 ** 31));
      const id = q && JSON.stringify([q.q, q.options, q.picOf && Object.keys(q.picOf)]);
      if (q && !seen.has(id)) {
        seen.add(id);
        out.push(q);
      }
    }
    return out;
  }

  // Four pictures to circle one of: [{ name, word, right }] in a seeded order.
  function picChoices(q, R) {
    const rightWord = q.options[0];
    const opts = Object.keys(q.picOf).map((word) => ({ word, name: q.picOf[word], right: word === rightWord }));
    return seededShuffle(opts, R);
  }

  function picSheet(c, subj, o) {
    const types = picTypes(c, subj.id).filter((k) => o.pic.includes(k));
    if (!types.length) return Views.ui.notFound();
    const lang = LANG_SUBJECTS[subj.id] || "";
    const seedKey = `${c}/${subj.id}/pic/${types.join(",")}/${o.pn}`;
    const R = Gen.rng(hash(seedKey) ^ Math.imul(o.n, 2654435761));
    const base = `#/worksheet/${c}/${subj.id}?`;
    const mk = (n) => query({ ...o, ch: [], n });
    let num = 0;
    const secs = [];
    const key = [];
    const box = '<span class="pw-box"></span>';

    for (const kind of types) {
      let items = [];
      let html = "";
      let note = "";
      if (kind === "count") {
        items = picQuestions(c === 3 ? "picCount20" : "picCount", o.pn, R);
        note = t("Count the pictures. Write the number in the box.");
        html = items.map((q) => `<li value="${++num}" class="pw-item pw-row"><span class="pw-n">${num}</span><div class="pw-art">${q.pic}</div><div class="pw-side"><div class="pw-q">${esc(q.q.split(". ")[0])}.</div><div class="pw-ans">${box}</div></div></li>`).join("");
        items.forEach((q) => key.push(`<li value="${num - items.length + 1 + items.indexOf(q)}"><strong>${esc(q.options[0])}</strong></li>`));
      } else if (kind === "add") {
        items = picQuestions(c === 1 ? "picAdd" : "picAdd2", o.pn, R);
        note = t("Add the pictures. Write the answer in the box.");
        html = items.map((q) => `<li value="${++num}" class="pw-item pw-row"><span class="pw-n">${num}</span><div class="pw-art">${q.pic}</div><div class="pw-side"><div class="pw-q">${esc(q.q)}</div><div class="pw-ans">${box} + ${box} = ${box}</div></div></li>`).join("");
        items.forEach((q, i) => key.push(`<li value="${num - items.length + 1 + i}"><strong>${esc(q.options[0])}</strong> <span class="ws-steps">${esc(q.steps[q.steps.length - 1])}</span></li>`));
      } else if (kind === "which" || kind === "odd") {
        const gen = kind === "odd" ? "picOdd" : "picWhich" + lang;
        items = picQuestions(gen, o.pn, R);
        note = kind === "odd" ? t("Circle the picture that is different.") : t("Circle the right picture.");
        const first = num + 1;
        html = items
          .map((q, i) => {
            const ch = picChoices(q, R);
            key.push(`<li value="${first + i}"><strong>${t("Picture {n}", { n: ch.findIndex((x) => x.right) + 1 })}</strong> <span class="ws-steps">${esc(q.options[0])}</span></li>`);
            return `<li value="${++num}" class="pw-item"><span class="pw-n">${num}</span><div class="pw-q">${esc(q.q)}</div><div class="pw-choices">${ch.map((x, j) => `<div class="pw-choice"><i>${j + 1}</i>${picSvg(x.name, 110)}</div>`).join("")}</div></li>`;
          })
          .join("");
      } else if (kind === "clock") {
        items = picQuestions(c === 2 ? "picClock2" : "picClock", o.pn, R);
        note = t("Look at the clock. Write the time.");
        const first = num + 1;
        html = items.map((q, i) => { key.push(`<li value="${first + i}"><strong>${esc(q.options[0])}</strong></li>`); return `<li value="${++num}" class="pw-item pw-row"><span class="pw-n">${num}</span><div class="pw-art pw-clock">${q.pic}</div><div class="pw-side"><div class="pw-q">${t("What time does the clock show?")}</div><div class="pw-ans">${t("The time is")} <span class="pw-line"></span></div></div></li>`; }).join("");
      } else if (kind === "frac") {
        note = t("Colour the parts to show the fraction.");
        const shapes = seededShuffle(["roti", "pizza", "bar", "square", "circle"], R);
        const first = num + 1;
        html = Array.from({ length: o.pn }, (_, i) => {
          const d = [2, 3, 4, 5, 6, 8][Math.floor(R.next() * 6)];
          let k = 1 + Math.floor(R.next() * (d - 1));
          if (d === 2) k = 1;
          const shape = shapes[i % shapes.length];
          const art = Pics.svg(Pics.fraction({ x: 100, y: 100, s: 190, shape, parts: d, shaded: 0 }), { w: 200, h: 200, label: t("A shape split into {n} equal parts", { n: d }) });
          key.push(`<li value="${first + i}">${t("Any {a} of the {b} equal parts coloured.", { a: k, b: d })} <strong>${k}/${d}</strong></li>`);
          return `<li value="${++num}" class="pw-item pw-row"><span class="pw-n">${num}</span><div class="pw-art pw-frac">${art}</div><div class="pw-side"><div class="pw-q">${t("Colour")}</div><div class="pw-fraction"><b>${k}</b><i></i><b>${d}</b></div></div></li>`;
        }).join("");
      }
      secs.push({ title: PIC_LABEL[kind](), note, html: `<ol class="ws-list pw-list">${html}</ol>` });
    }

    const classLine = t("Class {n} · {subject}", { n: c, subject: esc(subj.name) });
    return {
      title: t("Picture worksheet {n}", { n: o.n }),
      html: `
        ${Views.ui.topbar(t("Picture worksheet {n}", { n: o.n }), `#/sheets/${subj.id}`)}
        <div class="ws-toolbar no-print">
          <a class="btn" href="${base}${mk(Math.max(1, o.n - 1))}" ${o.n > 1 ? "" : 'aria-disabled="true" tabindex="-1" style="opacity:.45;pointer-events:none"'}>${icon("back")} ${t("Sheet {n}", { n: Math.max(1, o.n - 1) })}</a>
          <a class="btn" href="${base}${mk(o.n + 1)}">${t("New sheet")} ${icon("next")}</a>
          <button class="btn primary" onclick="printPage()">${icon("print")} ${t("Print")}</button>
          <label class="ws-keytoggle"><input type="checkbox" id="ws-key" ${o.k ? "checked" : ""}> ${t("Answer key")}</label>
        </div>
        <article class="ws ws-pics">
          <header class="ws-head">
            <div class="ws-title"><strong>${t("Picture Worksheet {n}", { n: o.n })}</strong><span>${classLine}</span></div>
            <div class="ws-fields"><span>${t("Name:")} <i></i></span><span>${t("Date:")} <i></i></span></div>
          </header>
          ${secs.map((sec, i) => `<section class="ws-sec"><h2>${"ABCDEF"[i]}. ${sec.title}</h2><p class="pw-note">${sec.note}</p>${sec.html}</section>`).join("")}
          <footer class="ws-foot">${t("Pocket Class India · Class {c} {subject} · Sheet {n}", { c, subject: esc(subj.name), n: o.n })}</footer>
        </article>
        <article class="ws ws-key" ${o.k ? "" : "hidden"}>
          <header class="ws-head"><div class="ws-title"><strong>${t("Answer key · Sheet {n}", { n: o.n })}</strong><span>${classLine}</span></div></header>
          <ol class="ws-answers">${key.join("")}</ol>
        </article>`,
      mount(el) {
        const tg = el.querySelector("#ws-key");
        if (tg)
          tg.onchange = () => {
            const k2 = el.querySelector(".ws-key");
            if (k2) k2.hidden = !tg.checked;
            history.replaceState(null, "", `${base}${query({ ...o, ch: [], k: tg.checked ? 1 : 0 })}`);
          };
      },
    };
  }

  // ---------- derived questions (js/derive.js) ----------

  const kindCache = new Map();
  // How many questions of each kind a chapter can give: { blank: 6, match: 2, … }. Empty when Derive isn't there.
  function chapterKinds(c, sid, ch) {
    if (typeof Derive === "undefined" || !Derive.kinds) return {};
    const key = `${c}/${sid}/${ch.id}`;
    if (!kindCache.has(key)) {
      let raw = {};
      try {
        raw = Derive.kinds(c, sid, ch.id) || {};
      } catch (e) {}
      const out = {};
      if (Array.isArray(raw)) raw.forEach((r) => { if (Array.isArray(r)) out[r[0]] = Number(r[1]) || 0; else if (r && r.kind) out[r.kind] = Number(r.count ?? r.n) || 0; else if (typeof r === "string") out[r] = 1; });
      else Object.keys(raw).forEach((k) => { out[k] = Number(typeof raw[k] === "object" && raw[k] ? raw[k].count ?? raw[k].n : raw[k]) || 0; });
      kindCache.set(key, out);
    }
    return kindCache.get(key);
  }

  // "When" and "first" questions need the timeline file. It loads after the page shows, then the page is drawn again.
  function withTimelines() {
    if (typeof Derive === "undefined" || !Derive.load || StudyData.timelinesLoaded()) return;
    Promise.resolve(Derive.load())
      .then(() => {
        kindCache.clear();
        if (/^#\/(?:sheets|worksheet)\b/.test(location.hash)) App.render({ keepScroll: true });
      })
      .catch(() => {});
  }

  // The totals over some chapters, per sheet key (b, x, f, w, dt).
  function derivedCounts(c, sid, chs) {
    const out = {};
    Object.keys(DERIVED).forEach((k) => (out[k] = 0));
    chs.forEach((ch) => {
      const kc = chapterKinds(c, sid, ch);
      Object.keys(DERIVED).forEach((k) => DERIVED[k].kinds.forEach((kind) => (out[k] += kc[kind] || 0)));
    });
    return out;
  }

  // `count` derived items of some kinds, spread over the chapters in turn.
  function derivedGroups(src, kinds, count, R) {
    if (typeof Derive === "undefined" || !count) return [];
    const groups = src
      .filter((x) => x.c && x.sid && !x.genQs)
      .map((x) => {
        let items = [];
        try {
          items = Derive.forChapter(x.c, x.sid, x.ch.id, { kinds, count: Math.min(30, Math.ceil(count / src.length) * 2 + 2), seed: Math.floor(R.next() * 2 ** 31) }) || [];
        } catch (e) {}
        return seededShuffle(items.filter((it) => kinds.includes(it.kind)), R);
      });
    return groups;
  }

  // ---------- maker ----------

  // The subject the maker page will show, so the router can load it first.
  function makerSubject(pre) {
    const c = cls();
    const subs = D.subjectsFor(c).filter((s) => D.chapters(c, s.id).length);
    const ok = (id) => subs.some((s) => s.id === id);
    return ok(pre) ? pre : ok(cfg.subject) ? cfg.subject : subs[0] ? subs[0].id : null;
  }

  function maker([pre]) {
    const c = cls();
    const subs = D.subjectsFor(c).filter((s) => D.chapters(c, s.id).length);
    if (pre && subs.some((s) => s.id === pre) && cfg.subject !== pre) {
      cfg.subject = pre;
      cfg.chapters = null;
    }
    if (!subs.some((s) => s.id === cfg.subject)) {
      cfg.subject = subs[0] ? subs[0].id : null;
      cfg.chapters = null;
    }
    const { topbar, emptyState } = Views.ui;
    return {
      title: t("Practice sheets"),
      html: `${topbar(t("Practice sheets"), "#/learn")}
        <p class="small muted" style="margin:-6px 2px 16px">${t("Choose chapters and question types. Every sheet has an answer key, and there's always a new sheet with different questions.")}</p>
        ${subs.length ? `<div id="maker"></div>` : emptyState("learn", t("No chapters are available yet."), { href: "#/learn", label: t("Learn") })}`,
      mount(el) {
        const box = el.querySelector("#maker");
        if (!box) return;
        const draw = () => (box.innerHTML = makerHTML(c, subs));
        draw();
        withTimelines();
        box.onclick = (e) => {
          const b = e.target.closest("[data-subj],[data-set],[data-act],[data-pictype],[data-preset],[data-obj]");
          if (!b) return;
          if (b.dataset.preset) {
            const pr = PRESETS[b.dataset.preset];
            const chs = b.dataset.preset === "weak" ? weakChapters(c, cfg.subject) : cfg.chapters || D.chapters(c, cfg.subject).map((x) => x.id);
            if (!chs.length) return;
            location.hash = `#/worksheet/${c}/${cfg.subject}?${query({ ...cfg, ...pr.set, ch: chs, pic: [], n: 1, o: "", k: cfg.k })}`;
            return;
          } else if (b.dataset.obj !== undefined) {
            cfg.o = b.dataset.obj;
          } else if (b.dataset.subj) {
            cfg.subject = b.dataset.subj;
            cfg.chapters = null;
            cfg.o = "";
            // The new subject may still need to load: go through the router, which shows "Loading…" meanwhile.
            if (!D.subjectsLoaded(c, [cfg.subject]) || !D.practiceLoaded(c, cfg.subject))
              return location.hash === "#/sheets" ? App.render({ keepScroll: true }) : (location.hash = "#/sheets");
          } else if (b.dataset.set) {
            const [k, v] = b.dataset.set.split(":");
            cfg[k] = Number(v);
          } else if (b.dataset.pictype) {
            const k = b.dataset.pictype;
            cfg.pic = cfg.pic.includes(k) ? cfg.pic.filter((x) => x !== k) : PIC_TYPES.filter((x) => x === k || cfg.pic.includes(x));
          } else if (b.dataset.act === "all") (cfg.chapters = null), (cfg.o = "");
          else if (b.dataset.act === "none") (cfg.chapters = []), (cfg.o = "");
          else if (b.dataset.act === "make") {
            const chs = cfg.chapters || D.chapters(c, cfg.subject).map((x) => x.id);
            location.hash = `#/worksheet/${c}/${cfg.subject}?${query({ ...cfg, ch: chs, pic: [], n: 1, o: chs.length === 1 ? cfg.o : "" })}`;
            return;
          } else if (b.dataset.act === "pics") {
            const types = picTypes(c, cfg.subject).filter((k) => cfg.pic.includes(k));
            location.hash = `#/worksheet/${c}/${cfg.subject}?${query({ ...cfg, ch: [], m: 0, s: 0, l: 0, g: 0, b: 0, x: 0, f: 0, w: 0, dt: 0, pic: types, n: 1 })}`;
            return;
          } else if (b.dataset.act === "rev" || b.dataset.act === "revsel") {
            const all = D.chapters(c, cfg.subject);
            const sel = cfg.chapters || all.map((x) => x.id);
            const done = all.filter((ch) => Store.chapter(Store.key(c, cfg.subject, ch.id)).done).map((x) => x.id);
            const chs = b.dataset.act === "rev" ? done : sel;
            const n = chs.length;
            const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));
            const derived = typeof Derive !== "undefined";
            location.hash = `#/worksheet/${c}/${cfg.subject}?${query({ ch: chs, m: clamp(n * 2, 8, 20), s: clamp(n, 4, 8), l: 0, g: 0, d: 0, k: 1, b: derived ? clamp(n, 5, 10) : 0, f: derived ? clamp(n, 5, 10) : 0, x: 0, w: 0, dt: 0, rev: 1, pic: [], n: 1 })}`;
            return;
          } else return;
          draw();
        };
        box.onchange = (e) => {
          if (e.target.dataset.ch !== undefined) {
            cfg.chapters = [...box.querySelectorAll("[data-ch]")].filter((x) => x.checked).map((x) => x.dataset.ch);
            cfg.o = "";
          }
          else if (e.target.id === "key") cfg.k = e.target.checked ? 1 : 0;
          draw();
        };
      },
    };
  }

  function makerHTML(c, subs) {
    const subj = D.subject(cfg.subject);
    const all = D.chapters(c, subj.id);
    const sel = cfg.chapters || all.map((x) => x.id);
    const one = sel.length === 1 ? all.find((ch) => ch.id === sel[0]) : null;
    const objs = one && typeof Objectives !== "undefined" ? Objectives.forChapter(c, subj.id, one) : [];
    if (!objs.some((x) => x.id === cfg.o)) cfg.o = "";
    const src = sources(c, subj, all.filter((ch) => sel.includes(ch.id)), cfg.d, cfg.o);
    const have = {
      m: src.reduce((a, x) => a + x.mcq.length, 0),
      s: src.reduce((a, x) => a + x.short.length, 0),
      l: src.reduce((a, x) => a + x.long.length, 0),
      g: src.some((x) => x.gen) ? Infinity : 0,
    };
    const row = (k, label, hint) => {
      if (k === "g" && !have.g) return "";
      const avail = have[k] === Infinity ? t("unlimited, new numbers every sheet") : t("{n} available", { n: have[k] });
      return `<div class="card">
        <div class="row"><strong class="grow">${label}</strong><span class="small muted">${avail}</span></div>
        <div class="small muted">${hint}</div>
        <div class="chips" style="margin-top:10px">${COUNTS[k]
          .map((v) => `<button class="chip ${cfg[k] === v ? "on" : ""}" data-set="${k}:${v}" ${v > have[k] && v ? "disabled" : ""}>${v}</button>`)
          .join("")}</div></div>`;
    };
    const dv = derivedCounts(c, subj.id, all.filter((ch) => sel.includes(ch.id)));
    const total =
      Math.min(cfg.m, have.m) + Math.min(cfg.s, have.s) + Math.min(cfg.l, have.l) + (have.g ? cfg.g : 0) +
      Object.keys(DERIVED).reduce((a, k) => a + (dv[k] >= DERIVED[k].min ? Math.min(cfg[k], k === "x" ? 99 : dv[k]) * (k === "x" ? 4 : 1) : 0), 0);
    const drow = (k, label, hint) => {
      if (!(dv[k] >= DERIVED[k].min)) return "";
      const avail = t("{n} available", { n: dv[k] });
      return `<div class="card">
        <div class="row"><strong class="grow">${label}</strong><span class="small muted">${avail}</span></div>
        <div class="small muted">${hint}</div>
        <div class="chips" style="margin-top:10px">${COUNTS[k].map((v) => `<button class="chip ${cfg[k] === v ? "on" : ""}" data-set="${k}:${v}" ${v > dv[k] && v ? "disabled" : ""}>${v}</button>`).join("")}</div></div>`;
    };
    const doneN = all.filter((ch) => Store.chapter(Store.key(c, subj.id, ch.id)).done).length;
    const revCard = `<div class="card" data-testid="rev-card">
        <strong>${t("Revision paper")}</strong>
        <div class="small muted">${t("One tap makes a mixed sheet from several chapters: multiple choice, fill in the blanks, true or false and short answers, a few from each chapter.")}</div>
        <div class="row" style="margin-top:10px;flex-wrap:wrap">
          ${doneN >= 1 ? `<button class="btn" data-act="rev">${icon("print")} ${t("Chapters done so far ({n})", { n: doneN })}</button>` : ""}
          <button class="btn" data-act="revsel" ${sel.length >= 2 ? "" : "disabled"}>${icon("print")} ${t("Selected chapters ({n})", { n: sel.length })}</button>
        </div></div>`;
    const ptypes = picTypes(c, subj.id);
    const picCard = c <= 3 && ptypes.length ? `<div class="card" data-testid="pic-card">
        <strong>${t("Picture worksheet")}</strong>
        <div class="small muted">${t("Big, friendly pages with pictures to count, add, circle and colour. Pick the kinds you want.")}</div>
        <div class="chips" style="margin-top:10px">${ptypes.map((k) => `<button class="chip ${cfg.pic.includes(k) ? "on" : ""}" data-pictype="${k}" aria-pressed="${cfg.pic.includes(k)}">${PIC_LABEL[k]()}</button>`).join("")}</div>
        <div class="small muted" style="margin-top:10px">${t("Pictures of each kind")}</div>
        <div class="chips" style="margin-top:6px">${[2, 3, 4, 6].map((v) => `<button class="chip ${cfg.pn === v ? "on" : ""}" data-set="pn:${v}">${v}</button>`).join("")}</div>
        <button class="btn primary block" style="margin-top:12px" data-act="pics" ${ptypes.some((k) => cfg.pic.includes(k)) ? "" : "disabled"}>${icon("print")} ${t("Make picture worksheet")}</button></div>` : "";

    const weakN = weakChapters(c, subj.id).length;
    const presetCard = `<div class="card" data-testid="preset-card">
        <strong>${t("Quick sheets")}</strong>
        <div class="small muted">${t("One tap makes a sheet from the chapters selected below.")}</div>
        <div class="preset-grid">${Object.entries(PRESETS)
          .map(([k, p]) => {
            const off = k === "weak" ? !weakN : !sel.length;
            return `<button class="preset" data-preset="${k}" ${off ? "disabled" : ""}><strong>${icon("print")} ${t(p.label)}${k === "weak" && weakN ? ` (${weakN})` : ""}</strong><span class="small muted">${k === "weak" && !weakN ? t("Nothing to fix yet") : t(p.hint)}</span></button>`;
          })
          .join("")}</div></div>`;
    const skillCard = objs.length > 1
      ? `<div class="card" data-testid="skill-card"><strong>${t("One skill only")}</strong>
          <div class="small muted">${t("Keep only the questions about one skill of this chapter.")}</div>
          <div class="chips" style="margin-top:10px"><button class="chip ${cfg.o ? "" : "on"}" data-obj="">${t("All skills")}</button>${objs.map((x) => `<button class="chip ${cfg.o === x.id ? "on" : ""}" data-obj="${x.id}">${esc(x.text.replace(/^Understand: /, ""))}</button>`).join("")}</div></div>`
      : "";
    return `<div class="stack">
      <div class="card"><strong>${t("Subject")}</strong><div class="chips" style="margin-top:10px">${subs
        .map((s) => `<button class="chip ${s.id === subj.id ? "on" : ""}" data-subj="${s.id}">${SubjectIcons.html(s)} ${esc(s.short)}</button>`)
        .join("")}</div></div>
      ${presetCard}
      <div class="card">
        <div class="row"><strong class="grow">${t("Chapters")}</strong><span class="small muted">${t("{a} of {b} selected", { a: sel.length, b: all.length })}</span></div>
        <div class="row" style="margin-top:8px"><button class="chip" data-act="all">${t("Select all")}</button><button class="chip" data-act="none">${t("Clear")}</button></div>
        <div class="check-list">${all
          .map((ch) => `<label><input type="checkbox" data-ch="${ch.id}" ${sel.includes(ch.id) ? "checked" : ""}><span>${esc(ch.title)}</span></label>`)
          .join("")}</div>
      </div>
      ${skillCard}
      ${row("m", t("Multiple choice"), t("1 mark each"))}
      ${row("s", t("Short answer"), t("1–3 marks each, with space to write"))}
      ${row("l", t("Long answer"), t("4–5 marks each"))}
      ${row("g", subj.id === "maths" ? t("Maths problems") : t("Numericals"), t("Same formulas, different numbers on every sheet, with worked answers"))}
      ${drow("w", t("Word meanings"), t("Pick the meaning of a word from the chapter, 1 mark each"))}
      ${drow("b", t("Fill in the blanks"), t("A sentence from the chapter with a line to write on, and a word box"))}
      ${drow("x", t("Match the following"), t("Two columns to join up: 4 to 6 pairs each"))}
      ${drow("f", t("True or false"), t("Statements to circle True or False, 1 mark each"))}
      ${drow("dt", t("Dates and order"), t("What happened when, and what came first"))}
      <div class="card"><strong>${t("Difficulty of MCQs")}</strong><div class="chips" style="margin-top:10px">${LEVELS.map(([v, l]) => `<button class="chip ${cfg.d === v ? "on" : ""}" data-set="d:${v}">${t(l)}</button>`).join("")}</div></div>
      <div class="card"><label class="switch"><span><strong>${t("Answer key")}</strong><br><span class="small muted">${t("Printed on a separate page at the end")}</span></span><input type="checkbox" id="key" ${cfg.k ? "checked" : ""}></label></div>
      <button class="btn primary block" data-act="make" ${sel.length && total ? "" : "disabled"}>${icon("print")} ${t("Make sheet · {n} {n:question|questions}", { n: total })}</button>
      ${revCard}
      ${picCard}
    </div>`;
  }

  // ---------- the sheet ----------

  function worksheet([c, subjectId, q]) {
    c = Number(c);
    const subj = D.subject(subjectId);
    const all = D.chapters(c, subjectId);
    if (!subj || !all.length) return Views.ui.notFound();
    const o = parse(q);
    if (o.pic.length && c <= 3) return picSheet(c, subj, o);
    const chs = o.ch ? all.filter((ch) => o.ch.includes(ch.id)) : all;
    if (!chs.length) return Views.ui.notFound();
    if (!o.ch) o.ch = chs.map((x) => x.id);

    const classLine = t("Class {n} · {subject}", { n: c, subject: esc(subj.name) });
    return sheetPage({
      o,
      src: sources(c, subj, chs, o.d, chs.length === 1 ? o.o : "").map((x) => ({ ...x, c, sid: subjectId })),
      // Same settings + same sheet number = same sheet.
      seedKey: `${c}/${subjectId}/${query({ ...o, n: 0 })}`,
      subjectId,
      base: `#/worksheet/${c}/${subjectId}?`,
      back: `#/sheets/${subjectId}`,
      title: o.rev ? t("Revision sheet: {subject}, chapters {range}", { subject: subj.short, range: rangeOf(all, chs) }) : t("{subject} practice sheet {n}", { subject: subj.short, n: o.n }),
      barTitle: o.rev ? t("Revision sheet: {subject}, chapters {range}", { subject: subj.short, range: rangeOf(all, chs) }) : t("{subject} · Sheet {n}", { subject: subj.short, n: o.n }),
      heading: o.rev ? t("Revision sheet: {subject}, chapters {range}", { subject: esc(subj.short), range: rangeOf(all, chs) }) : null,
      classLine,
      chNames: (chs.length === all.length ? t("All chapters") : chs.map((x) => x.title).join(", ")) + skillName(c, subj, chs, o.o),
      footer: t("Pocket Class India · Class {c} {subject} · Sheet {n}", { c, subject: esc(subj.name), n: o.n }),
      query,
    });
  }

  // " · Skill: …" for a one-skill sheet, else "".
  function skillName(c, subj, chs, obj) {
    if (!obj || chs.length !== 1 || typeof Objectives === "undefined") return "";
    const x = Objectives.forChapter(c, subj.id, chs[0]).find((y) => y.id === obj);
    return x ? ` · ${t("Skill: {name}", { name: esc(x.text.replace(/^Understand: /, "")) })}` : "";
  }

  // "1–6" or "1–3, 5, 8–9": the chapters' numbers in the subject, as ranges.
  function rangeOf(all, chs) {
    const nums = chs.map((ch) => all.indexOf(ch) + 1).filter((x) => x > 0).sort((a, b) => a - b);
    const parts = [];
    for (let i = 0; i < nums.length; ) {
      let j = i;
      while (j + 1 < nums.length && nums[j + 1] === nums[j] + 1) j++;
      parts.push(j > i ? `${nums[i]}–${nums[j]}` : `${nums[i]}`);
      i = j + 1;
    }
    return parts.join(", ");
  }

  // A worksheet for one level of Practice by topic (#/pathsheet/{subject}/{topic}/{level}): questions from the level's own
  // chapter and the chapters it uses, in any class. Sheet numbers work as above.
  function levelSheet([subjectId, topicId, levelId, q]) {
    const model = Views.levelModel(subjectId, topicId, levelId);
    if (!model) return Views.ui.notFound();
    const dflt = new URLSearchParams("m=10&s=3&l=1&g=4");
    for (const [k, v] of new URLSearchParams(q || "")) dflt.set(k, v);
    const o = parse(dflt.toString());
    const lq = (x) => `m=${x.m}&s=${x.s}&l=${x.l}&g=${x.g}&k=${x.k}&n=${x.n}`;
    const src = model.sources.flatMap((s) => sources(s.cls, s.subj, [s.ch], 0).map((x) => ({ ...x, c: s.cls, sid: s.subj.id, gen: 0 })));
    if (model.gens.length) src.push({ ch: { id: "gens", title: model.level.title }, mcq: [], short: [], long: [], gen: 1, genQs: (n, seed) => Gen.fromNames(model.gens, n, seed) });
    const label = `${model.subjectName} · ${model.topic.title} · ${t("Level {n}", { n: model.level.level })}`;
    return sheetPage({
      o,
      src,
      seedKey: `path/${subjectId}/${levelId}/${lq({ ...o, n: 0 })}`,
      subjectId,
      base: `#/pathsheet/${subjectId}/${topicId}/${levelId}?`,
      back: `#/paths/${subjectId}/${topicId}/${levelId}`,
      title: t("{subject} practice sheet {n}", { subject: model.level.title, n: o.n }),
      barTitle: t("{subject} · Sheet {n}", { subject: model.level.title, n: o.n }),
      classLine: esc(label),
      chNames: model.level.title,
      footer: t("Pocket Class India · {subject} · Sheet {n}", { subject: esc(label), n: o.n }),
      query: lq,
    });
  }

  // The page for any sheet. `src` lists what to draw on: { ch, mcq, short, long, gen (count), c, sid, genQs? } per source.
  function sheetPage({ o, src, seedKey, subjectId, base, back, title, barTitle, classLine, chNames, footer, query, heading }) {
    const R = Gen.rng(hash(seedKey) ^ Math.imul(o.n, 2654435761));
    const pick = (k, count) => spread(src.map((x) => seededShuffle(x[k], R)), count);
    const mcq = pick("mcq", o.m).map((it) => ({ ...it, order: it.keepOrder ? [0, 1, 2, 3] : seededShuffle([0, 1, 2, 3], R) }));
    const short = pick("short", o.s);
    const long = pick("long", o.l);
    const genCh = src.filter((x) => x.gen);
    const gen = genCh.length
      ? spread(genCh.map((x) => { const seed = Math.floor(R.next() * 2 ** 31); return x.genQs ? x.genQs(o.g, seed) : Gen.questions(x.c, x.sid, x.ch.id, o.g, seed); }), o.g)
      : [];

    // The sections made from the chapters' terms, notes and timelines. Each has its own random stream, so changing one count
    // doesn't reshuffle the others.
    const rng = (k) => Gen.rng(hash(`${seedKey}#${k}`) ^ Math.imul(o.n, 40503));
    const withOrder = (R2) => (it) => ({ ...it, order: seededShuffle([0, 1, 2, 3], R2) });
    const drawn = (k, kinds, count) => {
      const R2 = rng(k);
      return { R2, items: count ? spread(derivedGroups(src, kinds, count, R2), count) : [] };
    };
    const dMeaning = drawn("w", ["meaning"], o.w);
    const meaning = dMeaning.items.map(withOrder(dMeaning.R2));
    const dBlank = drawn("b", ["blank"], o.b);
    const blanks = dBlank.items.map(withOrder(dBlank.R2));
    const wordBox = seededShuffle([...new Set(blanks.map((it) => it.options[it.answer]))], dBlank.R2);
    const dMatch = drawn("x", ["match"], o.x);
    const matches = dMatch.items
      .filter((it) => Array.isArray(it.pairs) && it.pairs.length >= 3)
      .map((it) => {
        const right = seededShuffle(it.pairs.map((_, i) => i), dMatch.R2); // right[j] = the pair whose meaning is shown in place j
        return { ...it, right };
      });
    let tfs = [];
    if (o.f) {
      const R2 = rng("f");
      const all = derivedGroups(src, ["tf"], o.f * 2, R2);
      const yes = spread(all.map((g) => g.filter((it) => it.tf)), Math.ceil(o.f / 2));
      const no = spread(all.map((g) => g.filter((it) => !it.tf)), Math.floor(o.f / 2));
      let rest = [...all.flat()].filter((it) => !yes.includes(it) && !no.includes(it));
      const want = Math.min(o.f, yes.length + no.length + rest.length);
      tfs = [...yes, ...no];
      while (tfs.length < want && rest.length) tfs.push(rest.shift());
      tfs = seededShuffle(tfs, R2);
    }
    const dDates = drawn("dt", ["when", "first"], o.dt);
    const dates = dDates.items.map(withOrder(dDates.R2));

    const sections = [];
    let num = 0;
    const marksOf = (x) => x.marks || 3;
    if (mcq.length) sections.push({ title: t("Multiple choice"), note: t("1 mark each"), marks: mcq.length, html: mcqHTML(mcq, () => ++num) });
    if (short.length) sections.push({ title: t("Short answer questions"), note: "", marks: short.reduce((a, x) => a + marksOf(x), 0), html: writtenHTML(short, () => ++num) });
    if (long.length) sections.push({ title: t("Long answer questions"), note: "", marks: long.reduce((a, x) => a + marksOf(x), 0), html: writtenHTML(long, () => ++num) });
    if (gen.length) sections.push({ title: subjectId === "maths" ? t("Problems") : t("Numericals"), note: t("2 marks each · show your working"), marks: gen.length * 2, html: genHTML(gen, () => ++num) });
    if (meaning.length) sections.push({ title: t("Word meanings"), note: t("1 mark each"), marks: meaning.length, html: mcqHTML(meaning, () => ++num) });
    if (blanks.length) sections.push({ title: t("Fill in the blanks"), note: t("Choose from the word box"), marks: blanks.length, html: blanksHTML(blanks, wordBox, () => ++num) });
    if (matches.length) sections.push({ title: t("Match the following"), note: t("Write the letter in the bracket"), marks: matches.reduce((a, x) => a + x.pairs.length, 0), html: matchHTML(matches, () => ++num) });
    if (tfs.length) sections.push({ title: t("True or false"), note: t("Circle the right one"), marks: tfs.length, html: tfHTML(tfs, () => ++num) });
    if (dates.length) sections.push({ title: t("Dates and order"), note: t("1 mark each"), marks: dates.length, html: mcqHTML(dates, () => ++num) });
    const total = sections.reduce((a, x) => a + x.marks, 0);
    const minutes = Math.max(10, Math.round((total * 1.5) / 5) * 5);

    // Answer key, numbered the same way.
    let k = 0;
    const key = [];
    mcq.forEach((it) => key.push(`<li value="${++k}"><strong>(${"abcd"[it.order.indexOf(it.answer)]})</strong> ${rich(it.options[it.answer])}</li>`));
    [...short, ...long].forEach((x) => key.push(`<li value="${++k}">${rich(x.a)}</li>`));
    gen.forEach((x) => key.push(`<li value="${++k}"><strong>${rich(x.options[0])}</strong><br><span class="ws-steps">${x.steps.map(rich).join("<br>")}</span></li>`));
    const keyOf = (it) => `<strong>(${"abcd"[it.order.indexOf(it.answer)]})</strong> ${rich(it.options[it.answer])}`;
    meaning.forEach((it) => key.push(`<li value="${++k}">${keyOf(it)}</li>`));
    blanks.forEach((it) => key.push(`<li value="${++k}"><strong>${rich(it.options[it.answer])}</strong>${it.explain ? `<br><span class="ws-steps">${rich(it.explain)}</span>` : ""}</li>`));
    matches.forEach((it) => key.push(`<li value="${++k}" class="ws-matchkey"><strong>${it.pairs.map((_, i) => `${i + 1}-${"abcdefgh"[it.right.indexOf(i)]}`).join(", ")}</strong></li>`));
    tfs.forEach((it) => key.push(`<li value="${++k}"><strong>${it.tf ? t("True") : t("False")}</strong>${it.explain ? `<br><span class="ws-steps">${rich(it.explain)}</span>` : ""}</li>`));
    dates.forEach((it) => key.push(`<li value="${++k}">${keyOf(it)}</li>`));

    const empty = !sections.length;

    return {
      title,
      html: `
        ${Views.ui.topbar(barTitle, back)}
        <div class="ws-toolbar no-print">
          <a class="btn" href="${base}${query({ ...o, n: o.n - 1 })}" ${o.n > 1 ? "" : 'aria-disabled="true" tabindex="-1" style="opacity:.45;pointer-events:none"'}>${icon("back")} ${t("Sheet {n}", { n: Math.max(1, o.n - 1) })}</a>
          <a class="btn" href="${base}${query({ ...o, n: o.n + 1 })}">${t("New sheet")} ${icon("next")}</a>
          <button class="btn primary" onclick="printPage()" ${empty ? "disabled" : ""}>${icon("print")} ${t("Print")}</button>
          <label class="ws-keytoggle"><input type="checkbox" id="ws-key" ${o.k ? "checked" : ""}> ${t("Answer key")}</label>
        </div>
        ${
          empty
            ? Views.ui.emptyState("notes", t("No questions match these settings. Go back and pick more chapters or question types."))
            : `<article class="ws">
          <header class="ws-head">
            <div class="ws-title"><strong>${heading || t("Practice Sheet {n}", { n: o.n })}</strong><span>${classLine}</span></div>
            <div class="ws-chapters">${esc(chNames)}</div>
            <div class="ws-fields"><span>${t("Name:")} <i></i></span><span>${t("Roll no.:")} <i></i></span><span>${t("Date:")} <i></i></span></div>
            <div class="ws-meta"><span>${t("Maximum marks: {n}", { n: total })}</span><span>${t("Suggested time: {n} min", { n: minutes })}</span><span>${t("Marks scored: ______ / {n}", { n: total })}</span></div>
          </header>
          ${sections
            .map(
              (sec, i) => `<section class="ws-sec">
                <h2>${t("Section {l} · {title}", { l: "ABCDEFGHIJKL"[i], title: sec.title })}<span>${sec.note ? sec.note + " · " : ""}${t("{n} {n:mark|marks}", { n: sec.marks })}</span></h2>
                ${sec.html}</section>`
            )
            .join("")}
          <footer class="ws-foot">${footer}</footer>
        </article>
        <article class="ws ws-key" ${o.k ? "" : "hidden"}>
          <header class="ws-head"><div class="ws-title"><strong>${t("Answer key · Sheet {n}", { n: o.n })}</strong><span>${classLine}</span></div></header>
          <ol class="ws-answers">${key.join("")}</ol>
        </article>`
        }`,
      mount(el) {
        if (o.dt) withTimelines();
        const t = el.querySelector("#ws-key");
        if (t)
          t.onchange = () => {
            const k2 = el.querySelector(".ws-key");
            if (k2) k2.hidden = !t.checked;
            history.replaceState(null, "", `${base}${query({ ...o, k: t.checked ? 1 : 0 })}`);
          };
      },
    };
  }

  function mcqHTML(items, next) {
    return `<ol class="ws-list">${items
      .map(
        (it) => {
          const pa = picAnswers(it);
          return `<li value="${next()}">${picHTML(it)}<div class="ws-q">${rich(it.q)}</div>
          <ol class="ws-opts${pa ? " ws-pic-opts" : ""}" type="a">${it.order.map((i) => `<li>${pa ? `<span class="ws-pic">${pa[i].svg}</span>` : ""}${rich(it.options[i])}</li>`).join("")}</ol></li>`;
        }
      )
      .join("")}</ol>`;
  }

  // Fill in the blanks: a word box first (the missing words, shuffled), then each sentence with a line to write on.
  function blanksHTML(items, words, next) {
    return `<div class="ws-wordbox" aria-label="${t("Word box")}">${words.map((w) => `<span>${rich(w)}</span>`).join("")}</div>
      <ol class="ws-list">${items.map((it) => `<li value="${next()}"><div class="ws-q ws-blanks">${rich(it.q).replace(/_{3,}/g, '<span class="ws-blank"></span>')}</div></li>`).join("")}</ol>`;
  }

  // Match the following: A (numbered, with a bracket for the letter) beside B (lettered, shuffled).
  function matchHTML(items, next) {
    return `<ol class="ws-list">${items
      .map(
        (it) => `<li value="${next()}"><div class="ws-q"><strong>${t("Match column A with column B.")}</strong></div>
        <div class="ws-match"><div class="ws-match-head"><b>${t("Column A")}</b><b>${t("Column B")}</b></div>${it.pairs
          .map((p, i) => `<div class="ws-match-row"><span class="ws-match-a"><span class="ws-bracket">(&nbsp;&nbsp;&nbsp;&nbsp;)</span> ${i + 1}. ${rich(p[0])}</span><span class="ws-match-b">${"abcdefgh"[i]}. ${rich(it.pairs[it.right[i]][1])}</span></div>`)
          .join("")}</div></li>`
      )
      .join("")}</ol>`;
  }

  function tfHTML(items, next) {
    return `<ol class="ws-list">${items
      .map((it) => `<li value="${next()}"><div class="ws-q ws-tf"><span>${rich(it.q)}</span><span class="ws-circle"><b>${t("True")}</b><b>${t("False")}</b></span></div></li>`)
      .join("")}</ol>`;
  }

  // Ruled lines to write on: more for more marks.
  const lines = (marks) => `<div class="ws-lines">${"<i></i>".repeat(Math.min(12, 1 + marks * 2))}</div>`;

  function writtenHTML(items, next) {
    return `<ol class="ws-list">${items
      .map((x) => `<li value="${next()}"><div class="ws-q">${rich(x.q)}<span class="ws-marks">[${x.marks || 3}]</span></div>${lines(x.marks || 3)}</li>`)
      .join("")}</ol>`;
  }

  function genHTML(items, next) {
    return `<ol class="ws-list">${items.map((x) => `<li value="${next()}">${picHTML(x)}<div class="ws-q">${rich(x.q)}</div><div class="ws-work"></div></li>`).join("")}</ol>`;
  }

  return { maker, makerSubject, worksheet, levelSheet };
})();
