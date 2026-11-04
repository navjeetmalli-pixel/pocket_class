// Shared pieces of the screens in js/views/. Creates the global Views object; every other
// file in js/views/ adds its screens with Object.assign(Views, {...}) and shares private helpers via Views._.
// Views.ui is the small public set that sheets.js and papers.js use.

const Views = (() => {
  const D = StudyData;
  const cls = () => Store.state.profile.cls;

  const FORMULA_LABEL = {
    maths: "Formulas & theorems",
    science: "Formulas, laws & equations",
    sst: "Key dates & facts",
    english: "Quick reference",
    hindi: "याद रखें",
    punjabi: "ਯਾਦ ਰੱਖੋ",
    evs: "Remember",
    physics: "Formulas & laws",
    chemistry: "Formulas, reactions & laws",
    biology: "Key facts",
    accountancy: "Formats & formulas",
    business: "Key points",
    economics: "Formulas & key points",
    history: "Key dates & facts",
    geography: "Key facts & figures",
    polsci: "Key facts",
    sstpb: "Key dates & facts",
    englishpb: "Quick reference",
    hindipb: "याद रखें",
    phc: "ਮੁੱਖ ਤੱਥ / Key facts",
  };
  const SHEET_LABEL = {
    maths: "Formula sheet",
    physics: "Formula sheet",
    chemistry: "Formula sheet",
    economics: "Formula sheet",
    accountancy: "Formula sheet",
    science: "Formula sheet",
    history: "Key dates",
    sstpb: "Key dates",
    phc: "Key dates",
  };
  const sheetLabel = (id) => t(SHEET_LABEL[id] || (["english", "hindi", "punjabi", "englishpb", "hindipb"].includes(id) ? "Quick reference" : "Key facts"));
  const TERMS_LABEL = { hindi: "मुख्य शब्द", hindipb: "मुख्य शब्द", punjabi: "ਮੁੱਖ ਸ਼ਬਦ" };

  function boardPicker(current) {
    return `<div class="seg" role="group" aria-label="${t("Board")}">${Object.entries({ cbse: "CBSE / NCERT", pseb: "PSEB (Punjab Board)" })
      .map(([v, l]) => `<button data-board="${v}" class="${current === v ? "on" : ""}">${t(l)}</button>`)
      .join("")}</div>`;
  }

  // Shown to PSEB students in a class whose PSEB books aren't in the app yet.
  function boardNote(c) {
    if (D.hasBoardContent(c)) return "";
    return `<div class="card small" style="background:color-mix(in srgb, var(--gold) 14%, var(--surface))">
      <strong>${t("PSEB books for Class {n} aren't in the app yet.", { n: c })}</strong> ${t("You're seeing the CBSE / NCERT version. Many topics overlap with PSEB (especially Maths and Science), but follow your PSEB book. PSEB content is ready for Class 10.")}</div>`;
  }

  // ---------- shared pieces ----------

  function topbar(title, back, extra = "") {
    return `<header class="topbar">
      <a class="icon-btn" href="${back}" aria-label="${t("Back")}">${icon("back")}</a>
      <h1 class="topbar-title">${esc(title)}</h1>${extra}
    </header>`;
  }

  function pageHead(title, sub, extra = "") {
    return `<div class="home-head"><div class="grow"><h1>${esc(title)}</h1>${sub ? `<div class="sub">${esc(sub)}</div>` : ""}</div>${extra}</div>`;
  }

  function subjectStats(c, id) {
    const chs = D.chapters(c, id);
    let done = 0;
    let sum = 0;
    let n = 0;
    chs.forEach((ch) => {
      const r = Store.chapter(Store.key(c, id, ch.id));
      if (r.done) done++;
      if (r.best != null) {
        sum += r.best;
        n++;
      }
    });
    return { total: chs.length, done, avg: n ? Math.round(sum / n) : null };
  }

  // Chapters are grouped by section when each section is one continuous block (SST, languages).
  // Maths and Science interleave sections, so they stay in NCERT order with a section tag.
  function isGrouped(chs) {
    const secs = [...new Set(chs.map((c) => c.section))];
    if (secs.length < 2) return false;
    return secs.every((sec) => {
      const idx = chs.map((c, i) => (c.section === sec ? i : -1)).filter((i) => i >= 0);
      return idx[idx.length - 1] - idx[0] === idx.length - 1;
    });
  }

  function chapterNumber(chs, i) {
    if (!isGrouped(chs)) return i + 1;
    return chs.slice(0, i + 1).filter((c) => c.section === chs[i].section).length;
  }

  function chapterRow(c, subj, ch, num, tag) {
    const k = Store.key(c, subj.id, ch.id);
    const r = Store.chapter(k);
    const score = r.best != null ? `<span class="pill ${r.best >= 60 ? "good" : "bad"}">${r.best}%</span>` : "";
    return `<a class="card chapter-row" data-sec="${esc(ch.section)}" href="#/chapter/${c}/${subj.id}/${ch.id}" style="--c:${subj.color}">
      <span class="ch-num ${r.done ? "done" : ""}">${r.done ? icon("check") : num}</span>
      <span class="ch-body">
        ${tag ? `<span class="ch-tag">${esc(tag)}</span>` : ""}
        <span class="ch-title">${esc(ch.title)}</span>
        <span class="ch-sum">${esc(plain(ch.summary))}</span>
      </span>
      ${score}
    </a>`;
  }

  // Every saved MCQ for a chapter: its own quiz plus the extra practice bank (when loaded).
  function quizItems(c, subj, ch, own = false) {
    const from = `${subj.short} · ${ch.title}`;
    const list = own ? ch.quiz : [...ch.quiz, ...D.practiceFor(c, subj.id, ch.id).mcq];
    return list.map((q) => ({ ...q, ref: { key: `${Store.key(c, subj.id, ch.id)}/${questionId(q)}`, from, cls: c, subject: subj.id, chapter: ch.id } }));
  }

  // Fresh number-changing questions (maths and physics chapters only).
  function genItems(c, subj, ch, count, seed = Date.now()) {
    const from = `${subj.short} · ${ch.title}`;
    return Gen.questions(c, subj.id, ch.id, count, seed).map((q) => ({ ...q, ref: { key: null, from, cls: c, subject: subj.id, chapter: ch.id } }));
  }

  // One chapter quiz round: 10 saved questions plus a few generated ones, different every time.
  const QUIZ_ROUND = 10;
  function quizRound(c, subj, ch) {
    return shuffle([...shuffle(quizItems(c, subj, ch)).slice(0, QUIZ_ROUND), ...genItems(c, subj, ch, 3)]);
  }

  const cardKey = (c, subjectId, ch, t) => `${Store.key(c, subjectId, ch.id)}/${itemId("t", t.term)}`;

  function findChapter(c, subjectId, chapterId) {
    const subj = D.subject(subjectId);
    const chs = D.chapters(c, subjectId);
    const idx = chs.findIndex((x) => x.id === chapterId);
    return subj && idx >= 0 ? { subj, chs, idx, ch: chs[idx] } : null;
  }

  function emptyState(emoji, text) {
    return `<div class="card empty"><div class="big">${emoji}</div>${text}</div>`;
  }

  function notFound() {
    return { html: `${topbar(t("Not found"), "#/")}${emptyState("🧭", t("We couldn't find that page."))}` };
  }

  // ---------- onboarding and settings ----------

  function classGrid(current) {
    return `<div class="class-pick class-grid" role="group" aria-label="${t("Class")}">${D.classes
      .map((n) => `<button data-cls="${n}" class="${n === current ? "on" : ""}" aria-label="${t("Class {n}", { n })}"><span class="n">${n}</span></button>`)
      .join("")}</div>`;
  }

  // English | ਪੰਜਾਬੀ | हिंदी. Language names are always shown in their own script.
  function langSwitch() {
    return `<div class="seg" role="group" aria-label="${t("Language")}">${LANGS.map(([v, l]) => `<button data-lang="${v}" lang="${v}" class="${currentLang() === v ? "on" : ""}">${l}</button>`).join("")}</div>`;
  }

  // Written questions grouped by marks, like a board paper.
  function writtenHTML(list) {
    const groups = {};
    list.forEach((x) => (groups[x.marks || 3] = groups[x.marks || 3] || []).push(x));
    return Object.keys(groups)
      .sort((a, b) => a - b)
      .map(
        (m) => `<h2 class="block-title">${t("{m}-mark {n:question|questions}", { m, n: groups[m].length })} <span class="count">${groups[m].length}</span></h2>
        <div class="stack">${groups[m]
          .map((x) => `<details class="card qa"><summary><span>${rich(x.q)}</span></summary><div class="a">${rich(x.a)}</div></details>`)
          .join("")}</div>`
      )
      .join("");
  }

  const ui = { topbar, pageHead, emptyState, notFound, quizItems, genItems, findChapter, writtenHTML };
  // Helpers shared between the files in js/views/ (not for use outside them).
  const _ = { D, cls, boardPicker, boardNote, sheetLabel, FORMULA_LABEL, TERMS_LABEL, topbar, pageHead, subjectStats, isGrouped, chapterNumber, chapterRow, quizItems, genItems, quizRound, cardKey, findChapter, emptyState, notFound, classGrid, langSwitch, writtenHTML };

  return { ui, _, notFound };
})();
