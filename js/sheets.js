// Printable practice sheets: a maker (#/sheets) to pick chapters and question types, and the sheet itself
// (#/worksheet/{class}/{subject}?ch=…&m=…). A sheet number seeds the choice of questions, so "Sheet 3"
// is always the same sheet (handy for a class) and the next number is always a new one.

const Sheets = (() => {
  const D = StudyData;
  const cls = () => Store.state.profile.cls;

  // Remembered while the app is open.
  const cfg = { subject: null, chapters: null, m: 10, s: 5, l: 2, g: 5, d: 0, k: 1 };

  const COUNTS = { m: [0, 5, 10, 15, 20, 30], s: [0, 3, 5, 8, 10], l: [0, 1, 2, 3, 5], g: [0, 5, 10, 15, 20] };
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
  function sources(c, subj, chs, d) {
    return chs.map((ch) => {
      const bank = D.practiceFor(c, subj.id, ch.id);
      const written = [
        ...bank.written,
        ...(ch.qa || []).map((x) => ({ ...x, marks: 3 })),
        ...(ch.examples || []).map((x) => ({ q: x.q, a: [...x.steps, x.answer].join("\n"), marks: 3 })),
      ];
      return {
        ch,
        mcq: Views.ui.quizItems(c, subj, ch).filter((q) => levelOk(q, d)),
        short: written.filter((x) => (x.marks || 3) <= 3),
        long: written.filter((x) => (x.marks || 3) >= 4),
        gen: Gen.forChapter(c, subj.id, ch.id).length,
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
    };
  }

  const query = (o) => `ch=${(o.ch || []).join(",")}&m=${o.m}&s=${o.s}&l=${o.l}&g=${o.g}&d=${o.d}&k=${o.k}&n=${o.n}`;

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
        box.onclick = (e) => {
          const b = e.target.closest("[data-subj],[data-set],[data-act]");
          if (!b) return;
          if (b.dataset.subj) {
            cfg.subject = b.dataset.subj;
            cfg.chapters = null;
            // The new subject may still need to load: go through the router, which shows "Loading…" meanwhile.
            if (!D.subjectsLoaded(c, [cfg.subject]) || !D.practiceLoaded(c, cfg.subject))
              return location.hash === "#/sheets" ? App.render({ keepScroll: true }) : (location.hash = "#/sheets");
          } else if (b.dataset.set) {
            const [k, v] = b.dataset.set.split(":");
            cfg[k] = Number(v);
          } else if (b.dataset.act === "all") cfg.chapters = null;
          else if (b.dataset.act === "none") cfg.chapters = [];
          else if (b.dataset.act === "make") {
            const chs = cfg.chapters || D.chapters(c, cfg.subject).map((x) => x.id);
            location.hash = `#/worksheet/${c}/${cfg.subject}?${query({ ...cfg, ch: chs, n: 1 })}`;
            return;
          } else return;
          draw();
        };
        box.onchange = (e) => {
          if (e.target.dataset.ch !== undefined) cfg.chapters = [...box.querySelectorAll("[data-ch]")].filter((x) => x.checked).map((x) => x.dataset.ch);
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
    const src = sources(c, subj, all.filter((ch) => sel.includes(ch.id)), cfg.d);
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
    const total = Math.min(cfg.m, have.m) + Math.min(cfg.s, have.s) + Math.min(cfg.l, have.l) + (have.g ? cfg.g : 0);

    return `<div class="stack">
      <div class="card"><strong>${t("Subject")}</strong><div class="chips" style="margin-top:10px">${subs
        .map((s) => `<button class="chip ${s.id === subj.id ? "on" : ""}" data-subj="${s.id}">${SubjectIcons.html(s)} ${esc(s.short)}</button>`)
        .join("")}</div></div>
      <div class="card">
        <div class="row"><strong class="grow">${t("Chapters")}</strong><span class="small muted">${t("{a} of {b} selected", { a: sel.length, b: all.length })}</span></div>
        <div class="row" style="margin-top:8px"><button class="chip" data-act="all">${t("Select all")}</button><button class="chip" data-act="none">${t("Clear")}</button></div>
        <div class="check-list">${all
          .map((ch) => `<label><input type="checkbox" data-ch="${ch.id}" ${sel.includes(ch.id) ? "checked" : ""}><span>${esc(ch.title)}</span></label>`)
          .join("")}</div>
      </div>
      ${row("m", t("Multiple choice"), t("1 mark each"))}
      ${row("s", t("Short answer"), t("1–3 marks each, with space to write"))}
      ${row("l", t("Long answer"), t("4–5 marks each"))}
      ${row("g", subj.id === "maths" ? t("Maths problems") : t("Numericals"), t("Same formulas, different numbers on every sheet, with worked answers"))}
      <div class="card"><strong>${t("Difficulty of MCQs")}</strong><div class="chips" style="margin-top:10px">${LEVELS.map(([v, l]) => `<button class="chip ${cfg.d === v ? "on" : ""}" data-set="d:${v}">${t(l)}</button>`).join("")}</div></div>
      <div class="card"><label class="switch"><span><strong>${t("Answer key")}</strong><br><span class="small muted">${t("Printed on a separate page at the end")}</span></span><input type="checkbox" id="key" ${cfg.k ? "checked" : ""}></label></div>
      <button class="btn primary block" data-act="make" ${sel.length && total ? "" : "disabled"}>${icon("print")} ${t("Make sheet · {n} {n:question|questions}", { n: total })}</button>
    </div>`;
  }

  // ---------- the sheet ----------

  function worksheet([c, subjectId, q]) {
    c = Number(c);
    const subj = D.subject(subjectId);
    const all = D.chapters(c, subjectId);
    if (!subj || !all.length) return Views.ui.notFound();
    const o = parse(q);
    const chs = o.ch ? all.filter((ch) => o.ch.includes(ch.id)) : all;
    if (!chs.length) return Views.ui.notFound();
    if (!o.ch) o.ch = chs.map((x) => x.id);

    const classLine = t("Class {n} · {subject}", { n: c, subject: esc(subj.name) });
    return sheetPage({
      o,
      src: sources(c, subj, chs, o.d).map((x) => ({ ...x, c, sid: subjectId })),
      // Same settings + same sheet number = same sheet.
      seedKey: `${c}/${subjectId}/${query({ ...o, n: 0 })}`,
      subjectId,
      base: `#/worksheet/${c}/${subjectId}?`,
      back: `#/sheets/${subjectId}`,
      title: t("{subject} practice sheet {n}", { subject: subj.short, n: o.n }),
      barTitle: t("{subject} · Sheet {n}", { subject: subj.short, n: o.n }),
      classLine,
      chNames: chs.length === all.length ? t("All chapters") : chs.map((x) => x.title).join(", "),
      footer: t("Pocket Class India · Class {c} {subject} · Sheet {n}", { c, subject: esc(subj.name), n: o.n }),
      query,
    });
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
  function sheetPage({ o, src, seedKey, subjectId, base, back, title, barTitle, classLine, chNames, footer, query }) {
    const R = Gen.rng(hash(seedKey) ^ Math.imul(o.n, 2654435761));
    const pick = (k, count) => spread(src.map((x) => seededShuffle(x[k], R)), count);
    const mcq = pick("mcq", o.m).map((it) => ({ ...it, order: it.keepOrder ? [0, 1, 2, 3] : seededShuffle([0, 1, 2, 3], R) }));
    const short = pick("short", o.s);
    const long = pick("long", o.l);
    const genCh = src.filter((x) => x.gen);
    const gen = genCh.length
      ? spread(genCh.map((x) => { const seed = Math.floor(R.next() * 2 ** 31); return x.genQs ? x.genQs(o.g, seed) : Gen.questions(x.c, x.sid, x.ch.id, o.g, seed); }), o.g)
      : [];

    const sections = [];
    let num = 0;
    const marksOf = (x) => x.marks || 3;
    if (mcq.length) sections.push({ title: t("Multiple choice"), note: t("1 mark each"), marks: mcq.length, html: mcqHTML(mcq, () => ++num) });
    if (short.length) sections.push({ title: t("Short answer questions"), note: "", marks: short.reduce((a, x) => a + marksOf(x), 0), html: writtenHTML(short, () => ++num) });
    if (long.length) sections.push({ title: t("Long answer questions"), note: "", marks: long.reduce((a, x) => a + marksOf(x), 0), html: writtenHTML(long, () => ++num) });
    if (gen.length) sections.push({ title: subjectId === "maths" ? t("Problems") : t("Numericals"), note: t("2 marks each · show your working"), marks: gen.length * 2, html: genHTML(gen, () => ++num) });
    const total = sections.reduce((a, x) => a + x.marks, 0);
    const minutes = Math.max(10, Math.round((total * 1.5) / 5) * 5);

    // Answer key, numbered the same way.
    let k = 0;
    const key = [];
    mcq.forEach((it) => key.push(`<li value="${++k}"><strong>(${"abcd"[it.order.indexOf(it.answer)]})</strong> ${rich(it.options[it.answer])}</li>`));
    [...short, ...long].forEach((x) => key.push(`<li value="${++k}">${rich(x.a)}</li>`));
    gen.forEach((x) => key.push(`<li value="${++k}"><strong>${rich(x.options[0])}</strong><br><span class="ws-steps">${x.steps.map(rich).join("<br>")}</span></li>`));

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
            <div class="ws-title"><strong>${t("Practice Sheet {n}", { n: o.n })}</strong><span>${classLine}</span></div>
            <div class="ws-chapters">${esc(chNames)}</div>
            <div class="ws-fields"><span>${t("Name:")} <i></i></span><span>${t("Roll no.:")} <i></i></span><span>${t("Date:")} <i></i></span></div>
            <div class="ws-meta"><span>${t("Maximum marks: {n}", { n: total })}</span><span>${t("Suggested time: {n} min", { n: minutes })}</span><span>${t("Marks scored: ______ / {n}", { n: total })}</span></div>
          </header>
          ${sections
            .map(
              (sec, i) => `<section class="ws-sec">
                <h2>${t("Section {l} · {title}", { l: "ABCD"[i], title: sec.title })}<span>${sec.note ? sec.note + " · " : ""}${t("{n} {n:mark|marks}", { n: sec.marks })}</span></h2>
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
        (it) => `<li value="${next()}">${picHTML(it)}<div class="ws-q">${rich(it.q)}</div>
          <ol class="ws-opts" type="a">${it.order.map((i) => `<li>${rich(it.options[i])}</li>`).join("")}</ol></li>`
      )
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
