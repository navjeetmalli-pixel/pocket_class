// Board-style sample papers for Classes 9–12 (#/papers, #/paper/{class}/{subject}?n=…).
// Each paper follows the section pattern of the subject's board exam and is drawn from the practice banks,
// so paper 1, 2, 3… are all different but the same number always gives the same paper.

const Papers = (() => {
  const D = StudyData;
  const CLASSES = [9, 10, 11, 12];
  // Language papers are built round unseen passages and set texts, which the banks don't model.
  const LANGUAGES = ["english", "hindi", "punjabi", "englishpb", "hindipb"];

  // Sections in exam order: kind, how many, marks each, how many get an internal choice ("OR").
  // Kinds: mcq, ar (assertion–reason), w2, w3, w5 (written by marks), case (case/source-based, 4 marks).
  const S = (title, kind, n, marks, or = 0) => ({ title, kind, n, marks, or });
  function pattern(c, s) {
    const senior = c >= 11;
    if (senior && ["physics", "chemistry", "biology"].includes(s))
      return { total: 70, sections: [S("Multiple choice", "mcq", 12, 1), S("Assertion–reason", "ar", 4, 1), S("Very short answer", "w2", 5, 2, 1), S("Short answer", "w3", 7, 3, 1), S("Case-based", "case", 2, 4), S("Long answer", "w5", 3, 5, 3)] };
    if (["science", "sciencepb"].includes(s))
      return { total: 80, sections: [S("Multiple choice", "mcq", 16, 1), S("Assertion–reason", "ar", 4, 1), S("Very short answer", "w2", 6, 2, 2), S("Short answer", "w3", 7, 3, 2), S("Long answer", "w5", 3, 5, 3), S("Case-based", "case", 3, 4)] };
    if (["sst", "sstpb"].includes(s))
      return { total: 75, note: "The board paper also has a 5-mark map question; practise it on an outline map.", sections: [S("Multiple choice", "mcq", 18, 1), S("Assertion–reason", "ar", 2, 1), S("Very short answer", "w2", 4, 2, 1), S("Short answer", "w3", 5, 3, 2), S("Long answer", "w5", 4, 5, 4), S("Source/case-based", "case", 3, 4)] };
    // Maths and the other subjects share the 80-mark pattern.
    return { total: 80, sections: [S("Multiple choice", "mcq", 18, 1), S("Assertion–reason", "ar", 2, 1), S("Very short answer", "w2", 5, 2, 2), S("Short answer", "w3", 6, 3, 2), S("Long answer", "w5", 4, 5, 2), S("Case-based", "case", 3, 4)] };
  }

  const kindOf = (x) => (x.type === "case" ? "case" : x.marks >= 5 ? "w5" : x.marks === 4 ? "case" : x.marks === 3 ? "w3" : x.marks === 2 ? "w2" : null);

  // Question pools per chapter, keyed by kind.
  function pools(c, subj) {
    return D.chapters(c, subj.id).map((ch) => {
      const p = { mcq: [], ar: [], w2: [], w3: [], w5: [], case: [] };
      for (const q of Views.ui.quizItems(c, subj, ch)) (q.keepOrder ? p.ar : p.mcq).push(q);
      for (const w of D.practiceFor(c, subj.id, ch.id).written) {
        const k = kindOf(w);
        if (k) p[k].push(w);
      }
      return p;
    });
  }

  // A paper needs the practice bank's written questions, so subjects without one are left out.
  const available = (c, s) => CLASSES.includes(c) && !LANGUAGES.includes(s) && D.chapters(c, s).length > 0 && D.practiceFiles(c, s).length > 0;

  function shuffle(list, R) {
    const a = list.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(R.next() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  // Draws `count` items of one kind, taking chapters in a shuffled rotation so the paper covers the syllabus.
  // Each item remembers its chapter's leftover list, so an internal choice can come from the same chapter.
  function draw(groups, kind, count, R) {
    const lists = shuffle(groups.map((g) => shuffle(g[kind], R)), R);
    const out = [];
    let added = true;
    while (out.length < count && added) {
      added = false;
      for (const l of lists)
        if (l.length && out.length < count) {
          out.push({ item: l.shift(), rest: l });
          added = true;
        }
    }
    return out;
  }

  // ---------- list ----------

  function list() {
    const c = Store.state.profile.cls;
    const subs = D.subjectsFor(c).filter((s) => available(c, s.id));
    const { topbar, emptyState } = Views.ui;
    const body = !CLASSES.includes(c)
      ? emptyState("📄", t("Sample papers are for Classes 9 to 12. For your class, try a mock test or a practice sheet."))
      : !subs.length
        ? emptyState("📄", t("No subjects with sample papers yet."))
        : `<div class="stack">${subs
            .map((s) => {
              const p = pattern(c, s.id);
              return `<a class="card row" href="#/paper/${c}/${s.id}?n=1">
                <span class="subj-ico" style="background:${s.color}22">${SubjectIcons.html(s)}</span>
                <span class="grow"><strong>${esc(s.name)}</strong><br><span class="small muted">${t("{marks} marks · 3 hours · sections {list}", { marks: p.total, list: "ABCDEF".slice(0, p.sections.length).split("").join(", ") })}</span></span>
                ${icon("next")}</a>`;
            })
            .join("")}</div>`;
    return {
      title: t("Sample papers"),
      html: `${topbar(t("Sample papers"), "#/learn")}<p class="small muted" style="margin:-6px 2px 14px">${t("Class {n} · Full papers in the board-exam pattern", { n: c })}</p>
        <p class="small muted" style="margin:-6px 2px 16px">${t("Each paper has the board's sections, marks and internal choices, with a marking scheme. Every paper number is different. Language papers (reading passages and set texts) aren't included.")}</p>
        ${body}`,
    };
  }

  // ---------- one paper ----------

  function paper([c, subjectId, q]) {
    c = Number(c);
    const subj = D.subject(subjectId);
    if (!subj || !available(c, subjectId)) return Views.ui.notFound();
    const params = new URLSearchParams(q || "");
    const n = Math.max(1, Number(params.get("n")) || 1);
    const showKey = params.get("k") === "1";
    const R = Gen.rng(hash(`paper/${c}/${subjectId}`) ^ Math.imul(n, 2654435761));
    const groups = pools(c, subj);
    const pat = pattern(c, subjectId);

    // Assertion–reason items fall back to ordinary MCQs when a subject has none.
    let num = 0;
    const sections = [];
    for (const sec of pat.sections) {
      const kind = sec.kind;
      let items = draw(groups, kind, sec.n, R);
      if (kind === "ar" && items.length < sec.n) items = items.concat(draw(groups, "mcq", sec.n - items.length, R));
      const qs = items.map(({ item, rest }, i) => ({ no: ++num, main: item, alt: i < sec.or && rest.length ? rest.shift() : null }));
      if (qs.length) sections.push({ ...sec, qs });
    }
    const total = sections.reduce((a, s) => a + s.qs.length * s.marks, 0);
    const letter = (i) => "ABCDEF"[i];

    const optOrder = (it) => (it.keepOrder ? [0, 1, 2, 3] : shuffle([0, 1, 2, 3], R));
    const qHTML = (it, marks) =>
      it.options
        ? ((it._order = optOrder(it)), `<div class="ws-q">${rich(it.q)}</div><ol class="ws-opts" type="a">${it._order.map((i) => `<li>${rich(it.options[i])}</li>`).join("")}</ol>`)
        : `<div class="ws-q">${rich(it.q)}<span class="ws-marks">[${marks}]</span></div>`;

    const body = sections
      .map(
        (sec, i) => `<section class="ws-sec">
          <h2>${t("Section {l} · {title}", { l: letter(i), title: t(sec.title) })}<span>${t("{a} × {b} = {c} marks", { a: sec.qs.length, b: sec.marks, c: sec.qs.length * sec.marks })}</span></h2>
          <ol class="ws-list">${sec.qs
            .map(
              (x) => `<li value="${x.no}">${qHTML(x.main, sec.marks)}${
                x.alt ? `<div class="paper-or">${t("OR")}</div>${qHTML(x.alt, sec.marks)}` : ""
              }</li>`
            )
            .join("")}</ol></section>`
      )
      .join("");

    const ans = (it) => (it.options ? `<strong>(${"abcd"[it._order.indexOf(it.answer)]})</strong> ${rich(it.options[it.answer])}` : rich(it.a));
    const key = sections
      .map(
        (sec, i) => `<h3 class="paper-key-h">${t("Section {l}", { l: letter(i) })}</h3><ol class="ws-answers">${sec.qs
          .map((x) => `<li value="${x.no}">${ans(x.main)} <span class="muted">(${sec.marks})</span>${x.alt ? `<div class="paper-or">${t("OR")}</div>${ans(x.alt)}` : ""}</li>`)
          .join("")}</ol>`
      )
      .join("");

    const base = `#/paper/${c}/${subjectId}?`;
    const ors = sections.reduce((a, s) => a + s.qs.filter((x) => x.alt).length, 0);
    const instructions = [
      t("This paper has {s} sections, {a} to {b}, and {n} questions. All questions are compulsory.", { s: sections.length, a: letter(0), b: letter(sections.length - 1), n: num }),
      ...sections.map((s, i) => t("Section {l} has {n} {kind} {n:question|questions} of {m} {m:mark|marks} each.", { l: letter(i), n: s.qs.length, kind: t(s.title).toLowerCase(), m: s.marks })),
      ors ? t("There is an internal choice in {n} {n:question|questions}; attempt only one of the alternatives.", { n: ors }) : "",
      pat.note ? t(pat.note) : "",
    ].filter(Boolean);

    return {
      title: t("{subject} sample paper {n}", { subject: subj.short, n }),
      html: `
        ${Views.ui.topbar(t("{subject} · Paper {n}", { subject: subj.short, n }), "#/papers")}
        <div class="ws-toolbar no-print">
          <a class="btn" href="${base}n=${n - 1}" ${n > 1 ? "" : 'aria-disabled="true" tabindex="-1" style="opacity:.45;pointer-events:none"'}>${icon("back")} ${t("Paper {n}", { n: Math.max(1, n - 1) })}</a>
          <a class="btn" href="${base}n=${n + 1}">${t("New paper")} ${icon("next")}</a>
          <button class="btn primary" onclick="printPage()">${icon("print")} ${t("Print")}</button>
          <label class="ws-keytoggle"><input type="checkbox" id="paper-key" ${showKey ? "checked" : ""}> ${t("Marking scheme")}</label>
        </div>
        <article class="ws">
          <header class="ws-head">
            <div class="ws-title"><strong>${t("Sample Paper {n}", { n })}</strong><span>${t("Class {n} · {subject}", { n: c, subject: esc(subj.name) })}</span></div>
            <div class="ws-meta"><span>${t("Time allowed: 3 hours")}</span><span>${t("Maximum marks: {n}", { n: total })}</span></div>
            <div class="ws-fields"><span>${t("Name:")} <i></i></span><span>${t("Roll no.:")} <i></i></span></div>
            <div class="paper-instr"><strong>${t("General instructions")}</strong><ol>${instructions.map((t) => `<li>${esc(t)}</li>`).join("")}</ol></div>
          </header>
          ${body}
          <footer class="ws-foot">${t("Pocket Class India · Class {c} {subject} · Sample Paper {n} · board-style practice paper, not an official board paper", { c, subject: esc(subj.name), n })}</footer>
        </article>
        <article class="ws ws-key" ${showKey ? "" : "hidden"}>
          <header class="ws-head"><div class="ws-title"><strong>${t("Marking scheme · Paper {n}", { n })}</strong><span>${t("Class {n} · {subject}", { n: c, subject: esc(subj.name) })}</span></div></header>
          ${key}
        </article>`,
      mount(el) {
        const t = el.querySelector("#paper-key");
        t.onchange = () => {
          el.querySelector(".ws-key").hidden = !t.checked;
          history.replaceState(null, "", `${base}n=${n}${t.checked ? "&k=1" : ""}`);
        };
      },
    };
  }

  return { list, paper, CLASSES };
})();
