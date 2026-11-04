// Every screen of the app. Each view returns { html, mount(el), title } (or { redirect }).
// app.js puts the html into <main> and then calls mount to wire up buttons.

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
    return list.map((q) => ({ ...q, ref: { key: `${Store.key(c, subj.id, ch.id)}/${questionId(q)}`, from, cls: c, subject: subj.id } }));
  }

  // Fresh number-changing questions (maths and physics chapters only).
  function genItems(c, subj, ch, count, seed = Date.now()) {
    const from = `${subj.short} · ${ch.title}`;
    return Gen.questions(c, subj.id, ch.id, count, seed).map((q) => ({ ...q, ref: { key: null, from, cls: c, subject: subj.id } }));
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

  // ---------- onboarding ----------

  function classGrid(current) {
    return `<div class="class-pick class-grid" role="group" aria-label="${t("Class")}">${D.classes
      .map((n) => `<button data-cls="${n}" class="${n === current ? "on" : ""}" aria-label="${t("Class {n}", { n })}"><span class="n">${n}</span></button>`)
      .join("")}</div>`;
  }

  // What the student has picked so far on the first screen.
  const onboardChoices = { name: "", pick: null, board: "cbse" };

  // English | ਪੰਜਾਬੀ | हिंदी. Language names are always shown in their own script.
  function langSwitch() {
    return `<div class="seg" role="group" aria-label="${t("Language")}">${LANGS.map(([v, l]) => `<button data-lang="${v}" lang="${v}" class="${currentLang() === v ? "on" : ""}">${l}</button>`).join("")}</div>`;
  }

  function onboarding() {
    // Kept outside the screen so choosing a language (which redraws it) doesn't lose what was already picked.
    const ob = onboardChoices;
    return {
      title: t("Welcome"),
      html: `
        <div class="onboard">
          ${langSwitch()}
          <div class="brand"><span class="brand-mark">P</span>Pocket Class India</div>
          <div>
            <h1>${t("Your study partner from Class 1 to 12")}</h1>
            <p class="muted" style="margin-top:10px">${t("Notes, flashcards, quizzes and mock tests for every main subject, from Class 1 maths to Class 12 physics, accountancy and history. Follows the CBSE / NCERT and PSEB (Punjab Board) syllabi and works offline.")}</p>
          </div>
          <div class="field">
            <label for="ob-name">${t("What should we call you?")}</label>
            <input id="ob-name" class="input" value="${esc(ob.name)}" placeholder="${t("Your name (optional)")}" autocomplete="given-name" maxlength="30">
          </div>
          <div class="field">
            <label>${t("Which class are you in?")}</label>
            ${classGrid(ob.pick)}
          </div>
          <div class="field">
            <label>${t("Which board?")}</label>
            ${boardPicker(ob.board)}
          </div>
          <button class="btn primary block" data-act="start" ${ob.pick ? "" : "disabled"}>${t("Start studying")} ${icon("arrow")}</button>
        </div>`,
      mount(el) {
        el.querySelector("#ob-name").oninput = (e) => (ob.name = e.target.value);
        el.onclick = (e) => {
          const b = e.target.closest("[data-lang],[data-cls],[data-board],[data-act]");
          if (!b) return;
          if (b.dataset.lang) {
            Store.setLang(b.dataset.lang);
            applyLang();
            App.render();
          } else if (b.dataset.cls) {
            ob.pick = Number(b.dataset.cls);
            el.querySelectorAll("[data-cls]").forEach((x) => x.classList.toggle("on", x === b));
            el.querySelector('[data-act="start"]').disabled = false;
          } else if (b.dataset.board) {
            ob.board = b.dataset.board;
            el.querySelectorAll("[data-board]").forEach((x) => x.classList.toggle("on", x === b));
          } else if (ob.pick) {
            Store.setProfile(el.querySelector("#ob-name").value, ob.pick, ob.board);
            location.hash = "#/";
            App.render();
          }
        };
      },
    };
  }

  // ---------- home ----------

  // ---------- spaced revision ----------
  const agoLabel = (days) => (days === 0 ? t("today") : days === 1 ? t("yesterday") : days < 30 ? t("{n} days ago", { n: days }) : t("a month or more ago"));

  // Due chapters of the student's class that still exist in the content.
  function dueList(c) {
    return Store.due(c)
      .map((e) => {
        const k = Store.parseKey(e.key);
        const f = findChapter(c, k.subject, k.chapterId);
        return f ? { ...e, subj: f.subj, ch: f.ch } : null;
      })
      .filter(Boolean);
  }

  function dueRows(c, list) {
    return `<div class="list">${list
      .map(
        (e) => `<a class="card chapter-row" href="#/revise/due/${e.subj.id}/${e.ch.id}" style="--c:${e.subj.color}">
          <span class="ch-num">${e.subj.icon}</span>
          <span class="ch-body"><span class="ch-title">${esc(e.ch.title)}</span>
            <span class="ch-sum">${esc(e.subj.short)} · ${agoLabel(e.days)}${e.mistakes ? ` · ${t("{n} {n:mistake|mistakes}", { n: e.mistakes })}` : ""}</span></span>
          ${icon("next")}</a>`
      )
      .join("")}</div>`;
  }

  // Home-screen card: up to three due chapters and a button to revise them all in one round.
  function dueCard(c) {
    const list = dueList(c);
    if (!list.length) return "";
    return `<section class="card due mt">
      <div class="row" style="margin-bottom:12px"><strong class="grow">${t("Due today")}</strong><span class="pill accent">${t("{n} {n:chapter|chapters}", { n: list.length })}</span></div>
      <p class="small muted" style="margin:-6px 0 12px">${t("Chapters come back after 1, 3, 7, 14 and 30 days so what you learned stays learned.")}</p>
      ${dueRows(c, list.slice(0, 3))}
      ${list.length > 1 ? `<a class="btn primary block mt" href="#/revise/due">${t("Revise all {n}", { n: list.length })} ${icon("arrow")}</a>` : ""}
    </section>`;
  }

  // One revision round: the chapter's open mistakes plus fresh questions. With no chapter given,
  // every due chapter in one mixed round, so the student also practises choosing the method.
  function dueRound([subjectId, chapterId]) {
    const c = cls();
    const single = subjectId && findChapter(c, subjectId, chapterId);
    const list = single ? [{ subj: single.subj, ch: single.ch }] : dueList(c);
    if (subjectId && !single) return notFound();
    const per = single ? 8 : Math.max(3, Math.min(6, Math.floor(20 / Math.max(list.length, 1))));
    const items = [];
    const keys = [];
    for (const { subj, ch } of list) {
      const k = Store.key(c, subj.id, ch.id);
      keys.push(k);
      const all = quizItems(c, subj, ch);
      const wrong = all.filter((it) => Store.state.mistakes[it.ref.key]);
      const fresh = shuffle(all.filter((it) => !Store.state.mistakes[it.ref.key]));
      const gen = genItems(c, subj, ch, 2);
      items.push(...shuffle([...wrong.slice(0, per), ...fresh, ...gen].slice(0, per)));
    }
    const title = single ? t("Revision · {name}", { name: single.ch.title }) : t("Revision · due chapters");
    return {
      title: t("Revision"),
      html: `${topbar(title, "#/revise")}${
        items.length
          ? `<p class="small muted" style="margin:-6px 2px 14px">${single ? t("Your mistakes from this chapter first, then fresh questions.") : t("Questions from every chapter that is due, mixed together.")}</p><div id="quiz-mount"></div>`
          : emptyState("✅", t("Nothing is due right now. Chapters come back here a day after you study them, then after 3, 7, 14 and 30 days."))
      }`,
      mount(el) {
        if (!items.length) return;
        Quiz.mount(el.querySelector("#quiz-mount"), {
          title,
          items: shuffle(items),
          instant: true,
          showFrom: !single,
          record: single ? { subject: single.subj.id, cls: c, kind: "revision", chapterKey: keys[0] } : { subject: "all", cls: c, kind: "revision", chapterKeys: keys },
          backHref: "#/",
          backLabel: "Home",
          retry: () => null,
        });
      },
    };
  }

  // ---------- students sharing the device ----------
  const studentName = (stu, i) => stu.name || t("Student {n}", { n: i + 1 });

  // Switches to another student and starts from their Home page.
  function goToStudent(id) {
    Store.switchStudent(id);
    if (location.hash === "#/" || location.hash === "") App.render();
    else location.hash = "#/";
  }

  // Shown on Home when 2 or more students use the device.
  function studentSwitcher() {
    const list = Store.students();
    if (list.length < 2) return "";
    const cur = list.findIndex((x) => x.id === Store.currentId);
    return `<label class="stud-switch"><span class="av">${esc([...studentName(list[cur], cur)][0].toUpperCase())}</span>
      <select aria-label="${t("Student")}">${list.map((x, i) => `<option value="${x.id}" ${x.id === Store.currentId ? "selected" : ""}>${esc(studentName(x, i))}</option>`).join("")}</select></label>`;
  }

  function mountStudentSwitcher(el) {
    const sel = el.querySelector(".stud-switch select");
    if (sel) sel.onchange = () => goToStudent(sel.value);
  }

  function home() {
    const st = Store.state;
    const c = cls();
    const hr = new Date().getHours();
    const greet = hr < 12 ? t("Good morning") : hr < 17 ? t("Good afternoon") : t("Good evening");

    let done = 0;
    let total = 0;
    D.subjectsFor(c).forEach((s) => {
      const x = subjectStats(c, s.id);
      done += x.done;
      total += x.total;
    });
    const recent = st.history.filter((h) => h.cls === c).slice(0, 20);
    const avg = recent.length ? Math.round(recent.reduce((a, h) => a + pct(h.score, h.total), 0) / recent.length) : null;

    let cont = "";
    if (st.last) {
      const k = Store.parseKey(st.last);
      const f = k.cls === c && findChapter(c, k.subject, k.chapterId);
      if (f)
        cont = `<a class="card continue mt" href="#/chapter/${c}/${f.subj.id}/${f.ch.id}">
          <div class="grow"><div class="k">${t("Continue where you left off")} · ${esc(f.subj.name)}</div><div class="t">${esc(f.ch.title)}</div></div>
          <span class="go">${icon("arrow")}</span></a>`;
    }

    const card = (s) => {
        const x = subjectStats(c, s.id);
        return `<a class="card subject-card" href="#/subject/${s.id}" style="--c:${s.color}">
          <span class="subject-icon">${s.icon}</span>
          <span class="subject-name">${esc(s.name)}</span>
          <span class="subject-hi">${esc(s.native)}</span>
          <span class="bar"><i style="width:${pct(x.done, x.total)}%"></i></span>
          <span class="subject-meta">${x.total ? t("{done} / {total} chapters", { done: x.done, total: x.total }) : t("Coming soon")}</span>
        </a>`;
    };
    const list = D.subjectsFor(c);
    const subjects =
      c >= 11
        ? [...new Set(list.map((s) => s.stream))]
            .map((st) => `<h3 class="stream-label">${esc(t(st))}</h3><div class="subject-grid">${list.filter((s) => s.stream === st).map(card).join("")}</div>`)
            .join("")
        : `<div class="subject-grid">${list.map(card).join("")}</div>`;

    const mistakes = Store.mistakesFor(c).length;
    const tool = (href, ic, t, sub) =>
      `<a class="card tool" href="${href}"><span class="ti">${icon(ic)}</span><span class="tt">${t}</span><span class="ts">${sub}</span></a>`;

    return {
      html: `
        <div class="home-head">
          <div class="grow">
            ${studentSwitcher()}
            <h1>${t("Namaste")}${st.profile.name ? `, ${esc(st.profile.name)}` : ""} 🙏</h1>
            <div class="sub">${greet} · ${t("Class {n}", { n: c })} · ${st.profile.board === "pseb" ? "PSEB" : "CBSE"}</div>
          </div>
          <a class="icon-btn" href="#/search" aria-label="${t("Search")}">${icon("search")}</a>
          <a class="icon-btn" href="#/settings" aria-label="${t("Settings")}">${icon("settings")}</a>
        </div>
        <div class="stats">
          <div class="card stat"><div class="v">🔥 ${Store.streak()}</div><div class="l">${t("day streak")}</div></div>
          <div class="card stat"><div class="v">${done}<span class="muted small">/${total}</span></div><div class="l">${t("chapters done")}</div></div>
          <div class="card stat"><div class="v">${avg === null ? "–" : avg + "%"}</div><div class="l">${t("quiz average")}</div></div>
        </div>
        ${boardNote(c)}
        ${dueCard(c)}
        ${cont}
        <h2 class="block-title">${t("Subjects")}</h2>
        ${subjects}
        <h2 class="block-title">${t("Study tools")}</h2>
        <div class="tools">
          ${tool("#/test", "test", t("Mock test"), t("Timed test across chapters"))}
          ${tool("#/revise/mistakes", "target", t("My mistakes"), mistakes ? t("{n} {n:question|questions} to fix", { n: mistakes }) : t("Nothing to fix yet"))}
          ${tool("#/timer", "timer", t("Focus timer"), t("Study in 25-minute blocks"))}
          ${tool("#/revise", "formula", t("Formula sheets"), t("Quick revision lists"))}
          ${tool("#/sheets", "print", t("Practice sheets"), t("Make and print your own"))}
          ${Papers.CLASSES.includes(c) ? tool("#/papers", "test", t("Sample papers"), t("Full board-pattern papers")) : ""}
        </div>
        ${qotdHTML(c)}`,
      mount(el) {
        mountStudentSwitcher(el);
        const q = el.querySelector("#qotd");
        if (q)
          q.onclick = (e) => {
            const b = e.target.closest("[data-qotd]");
            if (!b) return;
            const it = qotdItem(c);
            const picked = Number(b.dataset.qotd);
            if (picked === it.answer) Store.clearMistake(it.ref.key);
            else Store.addMistake(it.ref.key);
            Store.setQotd(picked);
            App.render({ keepScroll: true });
          };
      },
    };
  }

  function qotdItem(c) {
    const pool = [];
    D.subjectsFor(c).forEach((s) => D.chapters(c, s.id).forEach((ch) => pool.push(...quizItems(c, s, ch, true))));
    return pool.length ? pool[hash(dayKey() + "/" + c) % pool.length] : null;
  }

  function qotdHTML(c) {
    return qotdItem(c) ? `<h2 class="block-title">${t("Question of the day")}</h2>${qotdCard(c)}` : "";
  }

  function qotdCard(c) {
    const it = qotdItem(c);
    const st = Store.state.qotd;
    const picked = st && st.day === dayKey() ? st.picked : null;
    const opts = it.options
      .map((o, i) => {
        let k = "option";
        if (picked !== null) {
          k += " locked";
          if (i === it.answer) k += " correct";
          else if (i === picked) k += " wrong";
        }
        return `<button class="${k}" data-qotd="${i}"><span class="letter">${"ABCD"[i]}</span><span>${rich(o)}</span></button>`;
      })
      .join("");
    const fb =
      picked === null
        ? ""
        : `<div class="feedback ${picked === it.answer ? "good" : "bad"}"><div class="h">${picked === it.answer ? t("Correct! 🎉 Come back tomorrow for a new one.") : t("Not quite. It's been added to My mistakes.")}</div>${rich(it.explain)}</div>`;
    return `<div class="card qotd" id="qotd">
      <div class="quiz-from">${esc(it.ref.from)}</div>
      <div class="quiz-q" style="margin:8px 0 0">${rich(it.q)}</div>
      <div class="options">${opts}</div>${fb}
    </div>`;
  }

  // ---------- subject ----------

  // Tells the student what the chapters follow, so nobody mistakes topic notes for their textbook.
  function syllabusLine(c, id) {
    const sy = D.syllabus(c, id);
    if (!sy) return "";
    const books = sy.books.map((b) => `<em>${esc(b)}</em>`).join(", ");
    const what = {
      textbook: sy.board === "PSEB"
        ? t("Follows the PSEB syllabus: {books}.", { books })
        : t("Follows the NCERT {n:book|books} {books} ({board}).", { n: sy.books.length, books, board: esc(sy.board) }),
      "older-book": t("Follows the older NCERT {n:book|books} {books}.", { n: sy.books.length, books }),
      topic: t("Topic-based revision."),
    }[sy.match];
    const review = sy.reviewed ? t("Checked by a teacher ({date}).", { date: esc(String(sy.reviewed).slice(0, 10)) }) : t("Not yet checked by a teacher, so compare with your textbook.");
    return `<p class="syllabus-line ${sy.match}">${what} ${sy.note ? esc(sy.note) + " " : ""}${review}</p>`;
  }

  function subject([id]) {
    const subj = D.subject(id);
    if (!subj) return notFound();
    const c = cls();
    const chs = D.chapters(c, id);
    const x = subjectStats(c, id);
    const sections = [...new Set(chs.map((ch) => ch.section))];
    const grouped = isGrouped(chs);

    let list;
    if (!chs.length) list = `<div class="mt">${emptyState("📚", t("Chapters for Class {n} {subject} are coming soon.", { n: c, subject: esc(subj.name) }))}</div>`;
    else if (grouped)
      list = sections
        .map((sec) => {
          const items = chs.filter((ch) => ch.section === sec);
          return `<div data-sec="${esc(sec)}">
            <h2 class="section-label">${esc(sec)} <span class="count">${items.length}</span></h2>
            <div class="list">${items.map((ch, i) => chapterRow(c, subj, ch, i + 1)).join("")}</div>
          </div>`;
        })
        .join("");
    else list = `<div class="list mt">${chs.map((ch, i) => chapterRow(c, subj, ch, i + 1, sections.length > 1 ? ch.section : "")).join("")}</div>`;

    const filters =
      sections.length > 1
        ? `<div class="chips scroll mt" role="group" aria-label="${t("Filter by section")}">
            <button class="chip on" data-filter="">${t("All")}</button>
            ${sections.map((s) => `<button class="chip" data-filter="${esc(s)}">${esc(s)}</button>`).join("")}
          </div>`
        : "";

    return {
      title: subj.name,
      html: `
        ${topbar(subj.name, "#/")}
        <div class="hero" style="--c:${subj.color}">
          <div class="eyebrow">${t("Class {n}", { n: c })} · ${esc(subj.native)}</div>
          <h1>${subj.icon} ${esc(subj.name)}</h1>
          <p>${t("{done} of {total} chapters complete", { done: x.done, total: x.total })}${x.avg != null ? ` · ${t("average quiz score {n}%", { n: x.avg })}` : ""}</p>
          <span class="bar"><i style="width:${pct(x.done, x.total)}%"></i></span>
          ${
            chs.length
              ? `<div class="hero-actions">
                  <a class="btn" href="#/test/${id}">${icon("test")} ${t("Subject test")}</a>
                  <a class="btn" href="#/cards/${id}">${icon("cards")} ${t("Flashcards")}</a>
                  <a class="btn" href="#/sheet/${id}">${icon("formula")} ${sheetLabel(id)}</a>
                  <a class="btn" href="#/sheets/${id}">${icon("print")} ${t("Practice sheets")}</a>
                </div>`
              : ""
          }
        </div>
        ${syllabusLine(c, id)}
        ${filters}
        ${list}`,
      mount(el) {
        el.onclick = (e) => {
          const b = e.target.closest("[data-filter]");
          if (!b) return;
          const f = b.dataset.filter;
          el.querySelectorAll("[data-filter]").forEach((x) => x.classList.toggle("on", x === b));
          el.querySelectorAll("[data-sec]").forEach((node) => {
            node.hidden = f !== "" && node.dataset.sec !== f;
          });
        };
      },
    };
  }

  // ---------- chapter ----------

  function chapter([c, subjectId, chapterId, tab]) {
    c = Number(c);
    const f = findChapter(c, subjectId, chapterId);
    if (!f) return notFound();
    const { subj, chs, idx, ch } = f;
    const k = Store.key(c, subj.id, ch.id);
    const base = `#/chapter/${c}/${subj.id}/${ch.id}`;
    const bank = D.practiceFor(c, subj.id, ch.id);
    const hasPractice = (ch.examples && ch.examples.length) || (ch.qa && ch.qa.length) || bank.written.length || Gen.forChapter(c, subj.id, ch.id).length;
    const guided = Guided.available(c, subj.id, ch.id);
    const tabs = [["notes", "Notes", "notes"], guided && ["guided", "Lesson", "play"], ["cards", "Flashcards", "cards"], hasPractice && ["practice", "Practice", "practice"], ["quiz", "Quiz", "quiz"]].filter(Boolean);
    if (!tabs.some((t) => t[0] === tab)) tab = "notes";

    const r = Store.chapter(k);
    const marked = Store.isBookmarked(k);
    const back = c === cls() ? `#/subject/${subj.id}` : "#/";

    let body = "";
    if (tab === "notes") body = notesTab(c, subj, ch, r, base);
    else if (tab === "practice") body = practiceTab(c, subj, ch, bank);
    else body = `<div id="${tab}-mount"></div>`;

    const prev = chs[idx - 1];
    const next = chs[idx + 1];
    const pager = `<div class="pager no-print">
      ${prev ? `<a class="card" href="#/chapter/${c}/${subj.id}/${prev.id}"><div class="k">${t("← Previous")}</div><div class="t">${esc(prev.title)}</div></a>` : "<span class='grow'></span>"}
      ${next ? `<a class="card next" href="#/chapter/${c}/${subj.id}/${next.id}"><div class="k">${t("Next →")}</div><div class="t">${esc(next.title)}</div></a>` : "<span class='grow'></span>"}
    </div>`;

    return {
      title: ch.title,
      html: `
        ${topbar(subj.name, back, `<button class="icon-btn ${marked ? "on" : ""}" data-act="bookmark" aria-label="${t("Bookmark this chapter")}" aria-pressed="${marked}">${icon("bookmark")}</button>`)}
        <div class="hero" style="--c:${subj.color}">
          <div class="eyebrow">${t("Class {c} · {section} · Chapter {n}", { c, section: esc(ch.section), n: chapterNumber(chs, idx) })}</div>
          <h1>${esc(ch.title)}</h1>
          <p>${rich(ch.summary)}</p>
          ${r.done || r.best != null ? `<div class="row wrap" style="margin-top:12px">${r.done ? `<span class="pill good">${t("✓ Complete")}</span>` : ""}${r.best != null ? `<span class="pill accent">${t("Best quiz score {n}%", { n: r.best })}</span>` : ""}</div>` : ""}
        </div>
        <nav class="tabs" aria-label="${t("Chapter sections")}">${tabs
          .map(([id, label, ic]) => `<a href="${base}/${id}" class="${id === tab ? "active" : ""}" ${id === tab ? 'aria-current="page"' : ""}>${icon(ic)}${t(label)}</a>`)
          .join("")}</nav>
        <div id="tab" style="--c:${subj.color}">${body}</div>
        ${pager}`,
      mount(el) {
        Store.opened(k);
        el.onclick = (e) => {
          const b = e.target.closest("[data-act]");
          if (!b) return;
          if (b.dataset.act === "bookmark") {
            const on = Store.toggleBookmark(k);
            b.classList.toggle("on", on);
            b.setAttribute("aria-pressed", on);
            toast(on ? t("Saved to bookmarks") : t("Removed from bookmarks"));
          } else if (b.dataset.act === "done") {
            Store.setDone(k, !Store.chapter(k).done);
            toast(Store.chapter(k).done ? t("Chapter marked complete ✓") : t("Marked as not complete"));
            App.render({ keepScroll: true });
          }
        };
        if (tab === "quiz") {
          const opts = () => ({
            title: `${subj.short} · ${ch.title}`,
            items: quizRound(c, subj, ch),
            instant: true,
            record: { subject: subj.id, cls: c, kind: "chapter", chapterKey: k },
            backHref: `${base}/notes`,
            backLabel: "Back to notes",
            retry: () => opts(),
          });
          Quiz.mount(el.querySelector("#quiz-mount"), opts());
        }
        if (tab === "practice") mountGenerated(el, c, subj, ch);
        if (tab === "guided") Guided.mount(el.querySelector("#guided-mount"), { c, subj, chs, idx, ch });
        if (tab === "cards")
          Cards.mount(el.querySelector("#cards-mount"), {
            cards: ch.terms.map((t) => ({ key: cardKey(c, subj.id, ch, t), front: t.term, back: t.meaning })),
          });
      },
    };
  }

  function notesTab(c, subj, ch, r, base) {
    const notes = ch.notes
      .map((n) => `<article class="card note"><h3>${esc(n.heading)}</h3><ul>${n.points.map((p) => `<li>${rich(p)}${Speech.btn(c, subj.id, p)}</li>`).join("")}</ul></article>`)
      .join("");
    const formulas =
      ch.formulas && ch.formulas.length
        ? `<section class="card formula-box"><h3>${icon("formula")} ${t(FORMULA_LABEL[subj.id])}</h3><ul>${ch.formulas.map((f) => `<li>${rich(f)}</li>`).join("")}</ul></section>`
        : "";
    const figs = D.diagramsFor(c, subj.id, ch.id)
      .map((d) => `<figure class="card diagram"><h3>${esc(d.title)}</h3><div class="diagram-art">${d.svg}</div>${d.caption ? `<figcaption>${rich(d.caption)}</figcaption>` : ""}</figure>`)
      .join("");
    const terms = `<section class="card"><h3 style="font-size:17px;font-weight:750;margin-bottom:12px">${t(TERMS_LABEL[subj.id] || "Key terms")}</h3>
      <dl class="terms">${ch.terms.map((x) => `<div><dt>${rich(x.term)}${Speech.btn(c, subj.id, `${x.term}. ${x.meaning}`)}</dt><dd>${rich(x.meaning)}</dd></div>`).join("")}</dl></section>`;
    return `
      ${Guided.card(c, subj, ch, base)}
      <div class="stack">${notes}${figs}${formulas}${terms}</div>
      <div class="done-row no-print">
        <button class="btn ${r.done ? "good" : ""}" data-act="done">${icon("check")} ${r.done ? t("Completed") : t("Mark as complete")}</button>
        <a class="btn primary" href="${base}/quiz">${t("Take the quiz")} ${icon("arrow")}</a>
      </div>`;
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

  function practiceTab(c, subj, ch, bank) {
    const sheet = `#/worksheet/${c}/${subj.id}?ch=${ch.id}`;
    let h = `<div class="card row no-print" style="gap:12px;margin-bottom:6px">
      <div class="grow"><strong>${t("Practice sheet")}</strong><div class="small muted">${t("A printable sheet for this chapter, with an answer key. A new set every time.")}</div></div>
      <a class="btn primary" href="${sheet}">${icon("print")} ${t("Make sheet")}</a></div>`;
    if (Gen.forChapter(c, subj.id, ch.id).length)
      h += `<h2 class="block-title">${t("Fresh questions")} <span class="count">${t("new numbers every time")}</span></h2>
        <div id="gen-mount"></div>`;
    if (ch.examples && ch.examples.length)
      h += `<h2 class="block-title">${t("Solved examples")}</h2><div class="stack">${ch.examples
        .map(
          (ex, i) => `<article class="card example">
            <p class="q"><span class="tag">${t("Example {n}", { n: i + 1 })}</span>${rich(ex.q)}</p>
            <details class="reveal"><summary>${t("Show solution")}</summary>
              <ol class="steps">${ex.steps.map((s) => `<li>${rich(s)}</li>`).join("")}</ol>
              <div class="answer">${rich(ex.answer)}</div>
            </details>
          </article>`
        )
        .join("")}</div>`;
    if (ch.qa && ch.qa.length)
      h += `<h2 class="block-title">${t("Important questions")}</h2>
        <p class="small muted" style="margin:-4px 2px 12px">${t("Try answering in your head or notebook first, then tap to check.")}</p>
        <div class="stack">${ch.qa
          .map((x) => `<details class="card qa"><summary><span>${rich(x.q)}</span></summary><div class="a">${rich(x.a)}</div></details>`)
          .join("")}</div>`;
    if (bank.written.length) h += writtenHTML(bank.written);
    return h;
  }

  function mountGenerated(el, c, subj, ch) {
    const box = el.querySelector("#gen-mount");
    if (!box) return;
    const draw = () => {
      const qs = Gen.questions(c, subj.id, ch.id, 5, Date.now());
      box.innerHTML = `<div class="stack">${qs
        .map(
          (q, i) => `<article class="card example">
            <p class="q"><span class="tag">${t("Q{n}", { n: i + 1 })}</span>${rich(q.q)}</p>
            <details class="reveal"><summary>${t("Show answer")}</summary>
              <ol class="steps">${q.steps.map((st) => `<li>${rich(st)}</li>`).join("")}</ol>
              <div class="answer">${rich(q.options[0])}</div>
            </details></article>`
        )
        .join("")}</div>
        <button class="btn block mt" data-act="regen">${icon("reset")} ${t("New questions")}</button>`;
    };
    draw();
    box.onclick = (e) => {
      if (e.target.closest("[data-act=regen]")) {
        e.stopPropagation();
        draw();
      }
    };
  }

  // ---------- mock test ----------

  // Remembered while the app is open, so "New test" keeps the last choices.
  const testCfg = { subject: "all", chapters: null, count: 20, timed: true };

  function testPool(c) {
    const subs = testCfg.subject === "all" ? D.subjectsFor(c) : [D.subject(testCfg.subject)];
    const groups = [];
    subs.forEach((s) =>
      D.chapters(c, s.id).forEach((ch) => {
        if (testCfg.subject !== "all" && testCfg.chapters && !testCfg.chapters.includes(ch.id)) return;
        groups.push(shuffle([...quizItems(c, s, ch), ...genItems(c, s, ch, 2)]));
      })
    );
    return groups;
  }

  // Round-robin across chapters so a test covers as many chapters as possible.
  function buildTest(c) {
    const groups = shuffle(testPool(c));
    const items = [];
    let added = true;
    while (items.length < testCfg.count && added) {
      added = false;
      for (const g of groups) {
        if (g.length && items.length < testCfg.count) {
          items.push(g.pop());
          added = true;
        }
      }
    }
    return shuffle(items);
  }

  function testSetup([pre]) {
    const c = cls();
    if (pre && D.subject(pre) && testCfg.subject !== pre) {
      testCfg.subject = pre;
      testCfg.chapters = null;
    }
    return {
      title: t("Mock test"),
      html: `${pageHead(t("Mock test"), t("Class {n} · Practise like the real exam", { n: c }))}<div id="setup"></div>`,
      mount(el) {
        const box = el.querySelector("#setup");
        const draw = () => (box.innerHTML = setupHTML(c));
        draw();
        box.onclick = (e) => {
          const b = e.target.closest("[data-subj],[data-count],[data-act]");
          if (!b) return;
          if (b.dataset.subj) {
            testCfg.subject = b.dataset.subj;
            testCfg.chapters = null;
          } else if (b.dataset.count) testCfg.count = Number(b.dataset.count);
          else if (b.dataset.act === "all") testCfg.chapters = null;
          else if (b.dataset.act === "none") testCfg.chapters = [];
          else if (b.dataset.act === "start") return startTest(c);
          else return;
          draw();
        };
        box.onchange = (e) => {
          if (e.target.dataset.ch !== undefined) {
            testCfg.chapters = [...box.querySelectorAll("[data-ch]")].filter((x) => x.checked).map((x) => x.dataset.ch);
            draw();
          } else if (e.target.id === "timed") {
            testCfg.timed = e.target.checked;
            draw();
          }
        };
      },
    };
  }

  function setupHTML(c) {
    const withContent = D.subjectsFor(c).filter((s) => D.chapters(c, s.id).length);
    if (!withContent.length) return emptyState("📚", t("No chapters are available yet."));
    if (testCfg.subject !== "all" && !withContent.some((s) => s.id === testCfg.subject)) testCfg.subject = "all";

    const pool = testPool(c).reduce((a, g) => a + g.length, 0);
    const count = Math.min(testCfg.count, pool);
    const chips = [`<button class="chip ${testCfg.subject === "all" ? "on" : ""}" data-subj="all">${t("All subjects")}</button>`]
      .concat(withContent.map((s) => `<button class="chip ${testCfg.subject === s.id ? "on" : ""}" data-subj="${s.id}">${s.icon} ${esc(s.short)}</button>`))
      .join("");

    let chapterPick = "";
    if (testCfg.subject !== "all") {
      const chs = D.chapters(c, testCfg.subject);
      const sel = testCfg.chapters || chs.map((x) => x.id);
      chapterPick = `<div class="card">
        <div class="row"><strong class="grow">${t("Chapters")}</strong><span class="small muted">${t("{a} of {b} selected", { a: sel.length, b: chs.length })}</span></div>
        <div class="row" style="margin-top:8px"><button class="chip" data-act="all">${t("Select all")}</button><button class="chip" data-act="none">${t("Clear")}</button></div>
        <div class="check-list">${chs
          .map((ch) => `<label><input type="checkbox" data-ch="${ch.id}" ${sel.includes(ch.id) ? "checked" : ""}><span>${esc(ch.title)}</span></label>`)
          .join("")}</div>
      </div>`;
    }

    const past = Store.state.history.filter((h) => h.kind === "test" && h.cls === c).slice(0, 5);

    return `<div class="stack">
      <div class="card"><strong>${t("Subject")}</strong><div class="chips" style="margin-top:10px">${chips}</div></div>
      ${chapterPick}
      <div class="card">
        <strong>${t("Number of questions")}</strong>
        <div class="chips" style="margin-top:10px">${[10, 20, 30, 50].map((n) => `<button class="chip ${testCfg.count === n ? "on" : ""}" data-count="${n}">${n}</button>`).join("")}</div>
        ${pool < testCfg.count ? `<p class="small muted" style="margin-top:8px">${t("Only {n} questions available for this selection.", { n: pool })}</p>` : ""}
      </div>
      <div class="card"><label class="switch"><span><strong>${t("Timer")}</strong><br><span class="small muted">${t("1 minute per question, auto-submits when time runs out")}</span></span><input type="checkbox" id="timed" ${testCfg.timed ? "checked" : ""}></label></div>
      <button class="btn primary block" data-act="start" ${count ? "" : "disabled"}>${t("Start test · {n} questions", { n: count })}${testCfg.timed ? ` · ${t("{n} min", { n: count })}` : ""}</button>
    </div>
    ${
      past.length
        ? `<h2 class="block-title">${t("Recent tests")}</h2><div class="card">${past
            .map(
              (h) => `<div class="history-row"><div class="grow"><div style="font-weight:620">${esc(t(h.title))}</div><div class="tiny muted">${relDate(h.at)}</div></div>
              <span class="pill ${pct(h.score, h.total) >= 60 ? "good" : "bad"}">${h.score}/${h.total}</span></div>`
            )
            .join("")}</div>`
        : ""
    }`;
  }

  function startTest(c) {
    const items = buildTest(c);
    if (!items.length) return;
    const subj = testCfg.subject === "all" ? null : D.subject(testCfg.subject);
    const title = subj ? t("{subject} test", { subject: subj.short }) : t("Mixed test");
    App.pendingTest = {
      title,
      items,
      seconds: testCfg.timed ? items.length * 60 : null,
      record: { subject: subj ? subj.id : "all", cls: c, kind: "test" },
      showFrom: true,
      backHref: "#/test",
      backLabel: "New test",
      retry: () => {
        const fresh = buildTest(c);
        return { ...App.pendingTest, items: fresh, seconds: testCfg.timed ? fresh.length * 60 : null };
      },
    };
    location.hash = "#/test/run";
  }

  function testRun() {
    const t = App.pendingTest;
    if (!t) return { redirect: "#/test" };
    return {
      title: t.title,
      html: `${topbar(t.title, "#/test")}<div id="quiz-mount"></div>`,
      mount(el) {
        Quiz.mount(el.querySelector("#quiz-mount"), { ...t, instant: false });
      },
    };
  }

  // ---------- revise ----------

  function revise() {
    const c = cls();
    const mistakes = Store.mistakesFor(c).length;
    const marks = Store.state.bookmarks.map((k) => Store.parseKey(k)).filter((k) => k.cls === c);
    const withContent = D.subjectsFor(c).filter((s) => D.chapters(c, s.id).length);

    const bookmarks = marks.length
      ? `<div class="list">${marks
          .map((k) => {
            const f = findChapter(c, k.subject, k.chapterId);
            return f ? chapterRow(c, f.subj, f.ch, f.subj.icon, f.subj.name) : "";
          })
          .join("")}</div>`
      : `<div class="card small muted">${t("Tap the {icon} on any chapter to save it here for quick revision.", { icon: icon("bookmark").replace('class="i"', 'class="i" style="width:16px;height:16px;vertical-align:-3px"') })}</div>`;

    const subjectLinks = (hrefBase, label) =>
      `<div class="list">${withContent
        .map(
          (s) => `<a class="card chapter-row" href="${hrefBase}${s.id}" style="--c:${s.color}">
            <span class="ch-num">${s.icon}</span>
            <span class="ch-body"><span class="ch-title">${esc(s.name)}</span><span class="ch-sum">${esc(label(s))}</span></span>
            ${icon("next")}</a>`
        )
        .join("")}</div>`;

    const cardCount = (s) => {
      const chs = D.chapters(c, s.id);
      const all = chs.reduce((a, ch) => a + ch.terms.length, 0);
      const known = chs.reduce((a, ch) => a + ch.terms.filter((t) => Store.state.cards[cardKey(c, s.id, ch, t)] === "known").length, 0);
      return t("{known} of {all} cards known", { known, all });
    };

    return {
      title: t("Revise"),
      html: `
        ${pageHead(t("Revise"), t("Fix mistakes, skim formula sheets and drill flashcards"))}
        <div class="card row" style="gap:16px">
          <div class="ch-num" style="width:52px;height:52px;font-size:22px;background:var(--bad-soft);color:var(--bad)">${mistakes}</div>
          <div class="grow"><strong>${t("My mistakes")}</strong><div class="small muted">${mistakes ? t("Questions you got wrong. Get them right to clear them.") : t("Questions you get wrong in quizzes show up here.")}</div></div>
          <a class="btn primary" href="#/revise/mistakes" ${mistakes ? "" : "disabled"}>${t("Practise")}</a>
        </div>
        <h2 class="block-title">${t("Due today")}</h2>
        ${(() => {
          const list = dueList(c);
          return list.length
            ? `${dueRows(c, list)}${list.length > 1 ? `<a class="btn primary block mt" href="#/revise/due">${t("Revise all {n}", { n: list.length })} ${icon("arrow")}</a>` : ""}`
            : `<div class="card small muted">${t("Chapters come back here a day after you study them, then after 3, 7, 14 and 30 days.")}</div>`;
        })()}
        <h2 class="block-title">${t("Bookmarked chapters")}</h2>
        ${bookmarks}
        <a class="card row" href="#/sheets" style="gap:16px;margin-top:12px">
          <div class="ch-num" style="width:52px;height:52px">${icon("print")}</div>
          <div class="grow"><strong>${t("Practice sheets")}</strong><div class="small muted">${t("Pick chapters and question types, then print with an answer key.")}</div></div>
          ${icon("next")}</a>
        <h2 class="block-title">${t("Formula &amp; fact sheets")}</h2>
        ${subjectLinks("#/sheet/", (s) => t("{label} for every chapter", { label: sheetLabel(s.id) }))}
        <h2 class="block-title">${t("Flashcard decks")}</h2>
        ${subjectLinks("#/cards/", cardCount)}`,
    };
  }

  function mistakes() {
    const c = cls();
    const items = Store.mistakesFor(c)
      .map((qk) => {
        const k = Store.parseKey(qk);
        const f = findChapter(c, k.subject, k.chapterId);
        return f ? quizItems(c, f.subj, f.ch).find((it) => it.ref.key === qk) : null;
      })
      .filter(Boolean);
    return {
      title: t("My mistakes"),
      html: `${topbar(t("My mistakes"), "#/revise")}${
        items.length ? `<p class="small muted" style="margin:-6px 2px 14px">${t("Answer correctly to remove a question from this list.")}</p><div id="quiz-mount"></div>` : emptyState("✨", t("No mistakes to fix. Take a chapter quiz or mock test and any wrong answers will appear here."))
      }`,
      mount(el) {
        if (!items.length) return;
        Quiz.mount(el.querySelector("#quiz-mount"), {
          title: t("Mistakes practice"),
          items: shuffle(items).slice(0, 20),
          instant: true,
          showFrom: true,
          record: { subject: "all", cls: c, kind: "practice" },
          backHref: "#/revise",
          backLabel: "Back to Revise",
          // Re-render the route so questions answered correctly drop out of the list.
          retry: () => null,
        });
      },
    };
  }

  function sheet([id]) {
    const subj = D.subject(id);
    if (!subj) return notFound();
    const c = cls();
    const chs = D.chapters(c, id).filter((ch) => ch.formulas && ch.formulas.length);
    return {
      title: `${subj.short} ${sheetLabel(id)}`,
      html: `
        ${topbar(`${subj.short} · ${sheetLabel(id)}`, "#/revise", `<button class="icon-btn" onclick="printPage()" aria-label="${t("Print")}">${icon("print")}</button>`)}
        <p class="small muted" style="margin:-6px 2px 16px">${t("Class {n} · {label} from every chapter, in one place.", { n: c, label: t(FORMULA_LABEL[id]) })}</p>
        ${
          chs.length
            ? `<div class="stack" style="--c:${subj.color}">${chs
                .map(
                  (ch) => `<section class="card formula-box">
                    <h3><a href="#/chapter/${c}/${id}/${ch.id}">${esc(ch.title)}</a></h3>
                    <ul>${ch.formulas.map((f) => `<li>${rich(f)}</li>`).join("")}</ul></section>`
                )
                .join("")}</div>`
            : emptyState("📄", t("Nothing here yet."))
        }`,
    };
  }

  function subjectCards([id]) {
    const subj = D.subject(id);
    if (!subj) return notFound();
    const c = cls();
    const cards = [];
    D.chapters(c, id).forEach((ch) =>
      ch.terms.forEach((t) => cards.push({ key: cardKey(c, id, ch, t), front: t.term, back: t.meaning, from: ch.title }))
    );
    return {
      title: t("{subject} flashcards", { subject: subj.short }),
      html: `
        ${topbar(t("{subject} flashcards", { subject: subj.short }), "#/revise")}
        <div class="chips" style="margin-bottom:14px">
          <button class="chip on" data-deck="all">${t("All cards ({n})", { n: cards.length })}</button>
          <button class="chip" data-deck="learning">${t("Not known yet ({n})", { n: cards.filter((x) => Store.state.cards[x.key] !== "known").length })}</button>
        </div>
        <div id="cards-mount" style="--c:${subj.color}"></div>`,
      mount(el) {
        const box = el.querySelector("#cards-mount");
        Cards.mount(box, { cards: shuffle(cards) });
        el.querySelectorAll("[data-deck]").forEach(
          (b) =>
            (b.onclick = () => {
              el.querySelectorAll("[data-deck]").forEach((x) => x.classList.toggle("on", x === b));
              const deck = b.dataset.deck === "all" ? cards : cards.filter((x) => Store.state.cards[x.key] !== "known");
              Cards.mount(box, { cards: shuffle(deck) });
            })
        );
      },
    };
  }

  // ---------- timer ----------

  function timer() {
    const R = 104;
    const C = 2 * Math.PI * R;
    return {
      title: t("Focus timer"),
      html: `
        ${pageHead(t("Focus timer"), t("Study in focused blocks with short breaks"))}
        <div class="card timer-wrap">
          <div class="seg" style="width:100%;max-width:420px" role="group" aria-label="${t("Timer mode")}">
            ${Object.entries(Focus.MODES).map(([m, v]) => `<button data-mode="${m}">${t(v.label)}</button>`).join("")}
          </div>
          <div class="timer-ring">
            <svg viewBox="0 0 240 240" aria-hidden="true"><circle class="track" cx="120" cy="120" r="${R}"/><circle class="prog" cx="120" cy="120" r="${R}" stroke-dasharray="${C}" stroke-dashoffset="0"/></svg>
            <div class="read"><div class="time" data-time role="timer"></div><div class="mode" data-modelabel></div></div>
          </div>
          <div class="timer-controls">
            <button class="btn primary" data-act="toggle"></button>
            <button class="btn" data-act="reset">${icon("reset")} ${t("Reset")}</button>
          </div>
          <div data-lens class="center">
            <div class="small muted" style="margin-bottom:8px">${t("Focus length")}</div>
            <div class="chips" style="justify-content:center">${[15, 25, 45, 60].map((m) => `<button class="chip" data-len="${m}">${t("{n} min", { n: m })}</button>`).join("")}</div>
          </div>
        </div>
        <div class="stats mt">
          <div class="card stat"><div class="v" data-rounds></div><div class="l">${t("sessions now")}</div></div>
          <div class="card stat"><div class="v">${minutesLabel(Store.state.focusMin)}</div><div class="l">${t("total focus")}</div></div>
          <div class="card stat"><div class="v">🔥 ${Store.streak()}</div><div class="l">${t("day streak")}</div></div>
        </div>
        <h2 class="block-title">${t("How it works")}</h2>
        <div class="card note"><ul>
          <li>${t("Pick one chapter and put your phone on silent. Start the timer.")}</li>
          <li>${t("Study only that chapter until the bell. No social media!")}</li>
          <li>${t("Take a 5-minute break: stretch, drink water, rest your eyes.")}</li>
          <li>${t("After 4 focus sessions, take a longer 15-minute break.")}</li>
        </ul></div>`,
      mount(el) {
        const ring = el.querySelector(".prog");
        const update = () => {
          if (!el.isConnected) return off();
          el.querySelector("[data-time]").textContent = clock(Focus.left);
          el.querySelector("[data-modelabel]").textContent = Focus.running ? t(Focus.MODES[Focus.mode].label) : Focus.left === Focus.total ? t("Ready") : t("Paused");
          ring.style.strokeDashoffset = C * (1 - Focus.left / Focus.total);
          ring.style.stroke = Focus.mode === "focus" ? "var(--accent)" : "var(--good)";
          el.querySelector('[data-act="toggle"]').innerHTML = Focus.running ? `${icon("pause")} ${t("Pause")}` : `${icon("play")} ${t("Start")}`;
          el.querySelectorAll("[data-mode]").forEach((b) => b.classList.toggle("on", b.dataset.mode === Focus.mode));
          el.querySelector("[data-lens]").hidden = Focus.mode !== "focus" || Focus.running || Focus.left !== Focus.total;
          el.querySelectorAll("[data-len]").forEach((b) => b.classList.toggle("on", Number(b.dataset.len) === Store.state.focusLen));
          el.querySelector("[data-rounds]").textContent = Focus.rounds;
        };
        const off = Focus.on(update);
        update();
        el.onclick = (e) => {
          const b = e.target.closest("[data-act],[data-mode],[data-len]");
          if (!b) return;
          if (b.dataset.mode) Focus.setMode(b.dataset.mode);
          else if (b.dataset.len) {
            Store.setFocusLen(Number(b.dataset.len));
            Focus.reset();
          } else if (b.dataset.act === "toggle") Focus.running ? Focus.pause() : Focus.start();
          else if (b.dataset.act === "reset") Focus.reset();
        };
      },
    };
  }

  // ---------- progress ----------

  function progress() {
    const st = Store.state;
    const c = cls();
    const days = [...Array(7)].map((_, i) => {
      const d = daysAgo(6 - i);
      const x = st.days[dayKey(d)] || { min: 0 };
      return { label: weekdayShort(d), min: x.min, today: i === 6 };
    });
    const week = days.reduce((a, d) => a + d.min, 0);
    const max = Math.max(30, ...days.map((d) => d.min));
    const quizzes = st.history.filter((h) => h.cls === c);
    const activeDays = Object.values(st.days).filter((d) => d.acts > 0 || d.min > 0).length;

    const subj = D.subjectsFor(c)
      .map((s) => {
        const x = subjectStats(c, s.id);
        return `<div style="--c:${s.color}">
          <div class="top"><span><strong>${s.icon} ${esc(s.name)}</strong></span><span class="muted">${t("{done}/{total} chapters", { done: x.done, total: x.total })}${x.avg != null ? ` · ${t("{n}% avg", { n: x.avg })}` : ""}</span></div>
          <span class="bar"><i style="width:${pct(x.done, x.total)}%"></i></span>
        </div>`;
      })
      .join("");

    const hist = quizzes.slice(0, 12);
    return {
      title: t("Progress"),
      html: `
        ${pageHead(t("Your progress"), t("Class {n} · {days} study {days:day|days} so far", { n: c, days: activeDays }))}
        <div class="stats-4">
          <div class="card stat"><div class="v">🔥 ${Store.streak()}</div><div class="l">${t("day streak")}</div></div>
          <div class="card stat"><div class="v">${minutesLabel(week)}</div><div class="l">${t("studied this week")}</div></div>
          <div class="card stat"><div class="v">${minutesLabel(st.focusMin)}</div><div class="l">${t("focus timer")}</div></div>
          <div class="card stat"><div class="v">${quizzes.length}</div><div class="l">${t("quizzes &amp; tests")}</div></div>
        </div>
        <h2 class="block-title">${t("This week")}</h2>
        <div class="card">
          <div class="week" role="img" aria-label="${t("Minutes studied each day this week")}">${days
            .map(
              (d) => `<div class="day"><span class="m">${d.min ? t("{n}m", { n: d.min }) : ""}</span>
                <span class="col ${d.min ? "" : "zero"}" style="height:${Math.max(4, (d.min / max) * 100)}%"></span>
                <span class="d" style="${d.today ? "color:var(--accent)" : ""}">${d.today ? t("Today") : d.label}</span></div>`
            )
            .join("")}</div>
          <p class="tiny muted" style="margin-top:10px">${t("Minutes you were actively using the app.")}</p>
        </div>
        <h2 class="block-title">${t("Subjects")}</h2>
        <div class="card subj-progress">${subj}</div>
        <a class="card row mt" href="#/parent"><span class="grow"><strong>${t("For parents")}</strong><span class="small muted" style="display:block">${t("A one-page summary of the week to show or print.")}</span></span>${icon("next")}</a>
        <h2 class="block-title">${t("Recent quizzes")}</h2>
        ${
          hist.length
            ? `<div class="card">${hist
                .map(
                  (h) => `<div class="history-row">
                    <div class="grow"><div style="font-weight:620">${esc(t(h.title))}</div><div class="tiny muted">${relDate(h.at)} · ${h.kind === "test" ? t("Mock test") : h.kind === "practice" ? t("Mistakes practice") : h.kind === "guided" ? t("Guided lesson") : h.kind === "revision" ? t("Revision") : t("Chapter quiz")}</div></div>
                    <span class="pill ${pct(h.score, h.total) >= 60 ? "good" : "bad"}">${h.score}/${h.total}</span></div>`
                )
                .join("")}</div>`
            : emptyState("📝", t("Take your first chapter quiz to see your scores here."))
        }`,
    };
  }

  // ---------- for parents ----------

  // One printable page for the current student, built only from what the app already keeps.
  function parent() {
    const st = Store.state;
    const c = cls();
    const days = [...Array(7)].map((_, i) => {
      const d = daysAgo(6 - i);
      return { label: i === 6 ? t("Today") : `${weekdayShort(d)} ${dateShort(d)}`, min: (st.days[dayKey(d)] || { min: 0 }).min };
    });
    const week = days.reduce((a, d) => a + d.min, 0);
    const max = Math.max(30, ...days.map((d) => d.min));

    const all = st.history.filter((h) => h.cls === c);
    const avg = all.length ? Math.round(all.reduce((a, h) => a + pct(h.score, h.total), 0) / all.length) : null;
    const tests = all.filter((h) => h.kind === "test").slice(0, 5);

    // Lowest quiz accuracy, from chapters where at least 5 questions were answered.
    const weak = Object.entries(st.acc)
      .map(([k, [right, asked]]) => ({ k, right, asked, p: pct(right, asked), pk: Store.parseKey(k) }))
      .filter((x) => x.pk.cls === c && x.asked >= 5 && x.p < 100)
      .map((x) => ({ ...x, f: findChapter(c, x.pk.subject, x.pk.chapterId) }))
      .filter((x) => x.f)
      .sort((a, b) => a.p - b.p || b.asked - a.asked)
      .slice(0, 5);

    const subjects = D.subjectsFor(c)
      .map((s) => ({ s, x: subjectStats(c, s.id) }))
      .filter((r) => r.x.total)
      .map(
        ({ s, x }) => `<div style="--c:${s.color}">
          <div class="top"><span><strong>${s.icon} ${esc(s.name)}</strong></span><span class="muted">${t("{done}/{total} chapters", { done: x.done, total: x.total })}</span></div>
          <span class="bar"><i style="width:${pct(x.done, x.total)}%"></i></span></div>`
      )
      .join("");

    const mistakes = Store.mistakesFor(c).length;
    const due = dueList(c);
    const name = st.profile.name || t("Student");
    return {
      title: t("For parents"),
      html: `
        ${topbar(t("For parents"), "#/progress", `<button class="icon-btn" onclick="printPage()" aria-label="${t("Print")}">${icon("print")}</button>`)}
        <p class="small muted" style="margin:-6px 2px 16px"><strong style="color:var(--text)">${esc(name)}</strong> · ${t("Class {n}", { n: c })} · ${st.profile.board === "pseb" ? "PSEB" : "CBSE"} · ${dateShort(new Date())}</p>
        <div class="stats-4">
          <div class="card stat"><div class="v">🔥 ${Store.streak()}</div><div class="l">${t("day streak")}</div></div>
          <div class="card stat"><div class="v">${minutesLabel(week)}</div><div class="l">${t("studied this week")}</div></div>
          <div class="card stat"><div class="v">${avg === null ? "–" : avg + "%"}</div><div class="l">${t("quiz average")}</div></div>
          <div class="card stat"><div class="v">${mistakes}</div><div class="l">${t("open mistakes")}</div></div>
        </div>
        <h2 class="block-title">${t("Study time, last 7 days")}</h2>
        <div class="card stack">${days
          .map((d) => `<div class="top row"><span style="width:96px">${esc(d.label)}</span><span class="bar grow"><i style="width:${d.min ? Math.max(3, pct(d.min, max)) : 0}%"></i></span><span class="muted" style="width:56px;text-align:right">${d.min ? minutesLabel(d.min) : "–"}</span></div>`)
          .join("")}
          <div class="row" style="border-top:1px solid var(--border);padding-top:10px"><strong class="grow">${t("Total")}</strong><strong>${minutesLabel(week)}</strong></div>
        </div>
        <h2 class="block-title">${t("Chapters completed")}</h2>
        <div class="card subj-progress">${subjects || `<span class="muted">${t("Nothing here yet.")}</span>`}</div>
        <h2 class="block-title">${t("Mock test scores")}</h2>
        ${
          tests.length
            ? `<div class="card">${tests
                .map(
                  (h) => `<div class="history-row"><div class="grow"><div style="font-weight:620">${esc(t(h.title))}</div><div class="tiny muted">${relDate(h.at)}</div></div>
                    <span class="pill ${pct(h.score, h.total) >= 60 ? "good" : "bad"}">${h.score}/${h.total} · ${pct(h.score, h.total)}%</span></div>`
                )
                .join("")}</div>`
            : `<div class="card small muted">${t("No mock tests taken yet.")}</div>`
        }
        <h2 class="block-title">${t("Chapters to work on")}</h2>
        ${
          weak.length
            ? `<p class="small muted" style="margin:-4px 2px 12px">${t("Lowest quiz accuracy, from chapters with at least 5 questions answered.")}</p>
              <div class="list">${weak
                .map(
                  (x) => `<a class="card chapter-row" href="#/chapter/${c}/${x.f.subj.id}/${x.f.ch.id}/quiz" style="--c:${x.f.subj.color}">
                    <span class="ch-num">${x.f.subj.icon}</span>
                    <span class="ch-body"><span class="ch-title">${esc(x.f.ch.title)}</span><span class="ch-sum">${esc(x.f.subj.short)} · ${t("{n}% right of {a} answers", { n: x.p, a: x.asked })}</span></span>${icon("next")}</a>`
                )
                .join("")}</div>`
            : `<div class="card small muted">${t("Answer quiz questions in a few chapters to see which ones need more practice.")}</div>`
        }
        <h2 class="block-title">${t("Open mistakes")}</h2>
        <a class="card row" href="#/revise/mistakes"><span class="grow">${mistakes ? t("{n} {n:question|questions} to fix", { n: mistakes }) : t("Nothing to fix yet")}</span>${icon("next")}</a>
        <h2 class="block-title">${t("Due for revision")}</h2>
        ${due.length ? dueRows(c, due.slice(0, 8)) : `<div class="card small muted">${t("Nothing is due for revision.")}</div>`}`,
    };
  }

  // ---------- search ----------

  function search() {
    return {
      title: t("Search"),
      html: `
        ${topbar(t("Search"), "#/")}
        <div class="search-box">${icon("search")}<input class="input" id="q" type="search" placeholder="${t("Search chapters, topics, terms…")}" autocomplete="off" aria-label="${t("Search")}"></div>
        <div id="results" class="list mt"></div>`,
      mount(el) {
        const input = el.querySelector("#q");
        const out = el.querySelector("#results");
        const draw = () => (out.innerHTML = searchResults(input.value));
        input.oninput = draw;
        input.value = App.lastSearch || "";
        draw();
        input.addEventListener("input", () => (App.lastSearch = input.value));
        setTimeout(() => input.focus(), 50);
      },
    };
  }

  function snippet(text, q) {
    const t = plain(text);
    const i = t.toLowerCase().indexOf(q);
    if (i < 0) return esc(t.slice(0, 120));
    const start = Math.max(0, i - 50);
    const end = Math.min(t.length, i + q.length + 70);
    return `${start ? "…" : ""}${esc(t.slice(start, i))}<mark>${esc(t.slice(i, i + q.length))}</mark>${esc(t.slice(i + q.length, end))}${end < t.length ? "…" : ""}`;
  }

  function searchResults(raw) {
    const q = raw.trim().toLowerCase();
    if (q.length < 2) return `<p class="small muted center">${t("Type at least 2 letters: a chapter name, a topic or a key term.")}</p>`;
    const c = cls();
    const hits = [];
    D.subjectsFor(c).forEach((s) =>
      D.chapters(c, s.id).forEach((ch) => {
        let score = 0;
        let snip = null;
        const has = (t) => plain(t).toLowerCase().includes(q);
        if (has(ch.title)) score += 10;
        if (has(ch.section)) score += 2;
        const texts = [ch.summary];
        ch.notes.forEach((n) => {
          if (has(n.heading)) score += 4;
          texts.push(n.heading, ...n.points);
        });
        ch.terms.forEach((t) => {
          if (has(t.term)) score += 5;
          texts.push(`${t.term}: ${t.meaning}`);
        });
        (ch.formulas || []).forEach((f) => texts.push(f));
        texts.forEach((t) => {
          if (has(t)) {
            score += 1;
            if (!snip) snip = snippet(t, q);
          }
        });
        if (score) hits.push({ s, ch, score, snip });
      })
    );
    hits.sort((a, b) => b.score - a.score);
    if (!hits.length) return emptyState("🔍", t("No results for “{q}” in Class {n}.", { q: esc(raw.trim()), n: c }));
    return hits
      .slice(0, 30)
      .map(
        ({ s, ch, snip }) => `<a class="card chapter-row" href="#/chapter/${c}/${s.id}/${ch.id}" style="--c:${s.color}">
          <span class="ch-num">${s.icon}</span>
          <span class="ch-body"><span class="ch-tag">${esc(s.short)} · ${esc(ch.section)}</span><span class="ch-title">${esc(ch.title)}</span>
          ${snip ? `<span class="small muted" style="margin-top:2px">${snip}</span>` : ""}</span></a>`
      )
      .join("");
  }

  // ---------- settings ----------

  function studentsCard() {
    const list = Store.students();
    const rows = list
      .map((x, i) => {
        const cur = x.id === Store.currentId;
        return `<div class="stud-row" data-id="${x.id}">
          <span class="av">${esc([...studentName(x, i)][0].toUpperCase())}</span>
          <div class="grow"><input class="input" data-rename value="${esc(x.name)}" placeholder="${esc(studentName(x, i))}" maxlength="30" aria-label="${t("Student name")}">
            <div class="tiny muted" style="margin-top:2px">${t("Class {n}", { n: x.cls })} · ${x.board === "pseb" ? "PSEB" : "CBSE"}</div></div>
          ${cur ? `<span class="pill accent">${t("Current")}</span>` : `<button class="btn" data-switch>${t("Switch")}</button>`}
          ${list.length > 1 ? `<button class="btn bad" data-del>${t("Delete")}</button>` : ""}
        </div>`;
      })
      .join("");
    return `<div class="card stack" id="students">
      <div><strong>${t("Students")}</strong><div class="small muted">${t("Brothers and sisters can share this device. Each student has their own progress, mistakes and streak.")}</div></div>
      ${rows}
      <div class="stud-add">
        <input class="input" id="new-name" maxlength="30" placeholder="${t("Student name")}" aria-label="${t("Student name")}">
        <select class="input" id="new-cls" aria-label="${t("Class")}">${D.classes.map((n) => `<option value="${n}">${t("Class {n}", { n })}</option>`).join("")}</select>
        <select class="input" id="new-board" aria-label="${t("Board")}"><option value="cbse">CBSE / NCERT</option><option value="pseb">PSEB</option></select>
        <button class="btn primary" data-add>${t("Add a student")}</button>
      </div>
    </div>`;
  }

  function mountStudents(el) {
    const box = el.querySelector("#students");
    box.onchange = (e) => {
      const row = e.target.closest("[data-rename]");
      if (!row) return;
      Store.renameStudent(row.closest(".stud-row").dataset.id, row.value);
      toast(t("Name saved"));
      App.render({ keepScroll: true });
    };
    box.onclick = (e) => {
      const b = e.target.closest("[data-switch],[data-del],[data-add]");
      if (!b) return;
      e.stopPropagation(); // the page's own click handler is for the other settings
      const row = b.closest(".stud-row");
      const list = Store.students();
      if (b.hasAttribute("data-switch")) {
        const x = list.find((s) => s.id === row.dataset.id);
        goToStudent(row.dataset.id);
        toast(t("Switched to {name}", { name: studentName(x, list.indexOf(x)) }));
      } else if (b.hasAttribute("data-del")) {
        const i = list.findIndex((s) => s.id === row.dataset.id);
        const name = studentName(list[i], i);
        if (!confirm(t("Delete {name} and all their progress? This can't be undone.", { name }))) return;
        Store.deleteStudent(row.dataset.id);
        toast(t("{name} deleted", { name }));
        App.render({ keepScroll: true });
      } else {
        const name = box.querySelector("#new-name").value;
        Store.addStudent(name, Number(box.querySelector("#new-cls").value), box.querySelector("#new-board").value);
        const n = Store.students().length;
        toast(t("Switched to {name}", { name: name.trim() || t("Student {n}", { n }) }));
        location.hash = "#/";
      }
    };
  }

  // Phone apps only: a web page can't show a notification while it is closed.
  function reminderCard() {
    if (!Reminder.available()) return "";
    const r = Store.state.reminder;
    return `<div class="card stack" id="reminder">
      <div><strong>${t("Daily reminder")}</strong><div class="small muted">${t("A notification each day at the time you choose, to remind you to practise. It works without internet and nothing leaves your phone.")}</div></div>
      <div class="row" style="gap:12px;flex-wrap:wrap">
        <div class="seg" role="group" aria-label="${t("Daily reminder")}">
          <button data-rem="on" class="${r.on ? "on" : ""}">${t("On")}</button>
          <button data-rem="off" class="${r.on ? "" : "on"}">${t("Off")}</button>
        </div>
        ${r.on ? `<input type="time" class="input" id="rem-time" value="${esc(r.time)}" style="width:auto" aria-label="${t("Reminder time")}">` : ""}
      </div>
    </div>`;
  }

  function mountReminder(el) {
    const box = el.querySelector("#reminder");
    if (!box) return;
    box.onclick = async (e) => {
      const b = e.target.closest("[data-rem]");
      if (!b) return;
      e.stopPropagation();
      const r = Store.state.reminder;
      if (b.dataset.rem === "on" && !r.on) {
        if (await Reminder.enable(r.time)) {
          Store.setReminder(true, r.time);
          toast(t("Reminder set for {time}", { time: r.time }));
        } else toast(t("Notifications are turned off for this app. Allow them in your phone's settings to use reminders."));
      } else if (b.dataset.rem === "off" && r.on) {
        await Reminder.cancel();
        Store.setReminder(false, r.time);
        toast(t("Reminder turned off"));
      }
      App.render({ keepScroll: true });
    };
    const time = box.querySelector("#rem-time");
    if (time)
      time.onchange = async () => {
        if (!time.value) return;
        Store.setReminder(true, time.value);
        await Reminder.schedule(time.value);
        toast(t("Reminder set for {time}", { time: time.value }));
      };
  }

  function settings() {
    const st = Store.state;
    const seg = (name, items, val) =>
      `<div class="seg" role="group">${items.map(([v, l]) => `<button data-${name}="${v}" class="${String(val) === String(v) ? "on" : ""}">${t(l)}</button>`).join("")}</div>`;
    return {
      title: t("Settings"),
      html: `
        ${topbar(t("Settings"), "#/")}
        <div class="stack">
          <div class="card stack">
            <div class="field"><label for="name">${t("Your name")}</label><input id="name" class="input" value="${esc(st.profile.name)}" maxlength="30" placeholder="${t("Your name")}"></div>
            <div class="field"><label>${t("Class")}</label>${classGrid(st.profile.cls)}</div>
            <div class="field"><label>${t("Board")}</label>${boardPicker(st.profile.board || "cbse")}</div>
            <div class="field"><label>${t("App language")}</label>${langSwitch()}</div>
            <div class="field"><label>${t("Appearance")}</label>${seg("theme", [["system", "Auto"], ["light", "Light"], ["dark", "Dark"]], st.theme)}</div>
          </div>
          ${studentsCard()}
          ${reminderCard()}
          <a class="card row" href="#/parent"><span class="grow"><strong>${t("For parents")}</strong><span class="small muted" style="display:block">${t("A one-page summary of the week to show or print.")}</span></span>${icon("next")}</a>
          ${Native.is ? "" : `<div class="card">
            <strong>${t("Install on your phone")}</strong>
            <ul class="small muted" style="margin:8px 0 0;padding-left:20px">
              <li>${t("<strong>Android (Chrome):</strong> tap ⋮ menu → <em>Add to Home screen</em> or <em>Install app</em>.")}</li>
              <li>${t("<strong>iPhone (Safari):</strong> tap Share → <em>Add to Home Screen</em>.")}</li>
              <li>${t("After the first visit it works without internet.")}</li>
            </ul>
          </div>`}
          <div class="card stack">
            <div><strong>${t("Back up progress")}</strong><div class="small muted">${Native.is ? t("Progress is saved only on this phone. Save a backup file before deleting the app or moving to a new phone, then restore it there.") : t("Progress is saved only in this browser. Save a backup file before clearing browser data or moving to a new phone, then restore it there.")}</div></div>
            <div class="row" style="gap:10px;flex-wrap:wrap">
              <button class="btn" data-act="backup">${icon("download")} ${t("Save backup")}</button>
              <button class="btn" data-act="restore">${icon("upload")} ${t("Restore backup")}</button>
              <input type="file" id="restore" accept=".json,application/json" hidden>
            </div>
          </div>
          ${Native.is ? "" : `<div class="card row">
            <div class="grow"><strong>${t("Save every class for offline")}</strong><div class="small muted" id="offline-status">${t("Your own class is saved automatically. Use this if brothers or sisters share this phone (about 17 MB).")}</div></div>
            <button class="btn" data-act="offline-all">${t("Save all")}</button>
          </div>`}
          <div class="card row">
            <div class="grow"><strong>${t("Reset progress")}</strong><div class="small muted">${t("Clears this student's scores, streaks, bookmarks and mistakes.")}</div></div>
            <button class="btn bad" data-act="reset">${t("Reset")}</button>
          </div>
          <div class="card small muted">
            <strong style="color:var(--text)">${t("About Pocket Class India")}</strong><br>
            ${t("Notes, quizzes and tests are written for the CBSE / NCERT and PSEB syllabi, Classes 1 to 12. Each subject page says whether it follows the current NCERT book, an older one, or is arranged by topic. Punjabi covers grammar and writing skills for CBSE and PSEB students. The content has not yet been checked by teachers, so use it for revision alongside your textbook, and check with your teacher if anything looks different from your book. Your progress is stored only on this device.")}
          </div>
        </div>`,
      mount(el) {
        mountStudents(el);
        mountReminder(el);
        el.querySelector("#restore").onchange = (e) => {
          const file = e.target.files[0];
          if (!file) return;
          file.text().then((text) => {
            if (!confirm(t("Replace the progress on this device with this backup?"))) return;
            if (!Store.importData(text)) return toast(t("That file isn't a Pocket Class backup"));
            App.applyTheme();
            applyLang();
            toast(t("Progress restored"));
            if (location.hash === "#/") App.render();
            else location.hash = "#/";
          });
        };
        el.querySelector("#name").onchange = (e) => {
          Store.setProfile(e.target.value, st.profile.cls);
          toast(t("Name saved"));
        };
        el.onclick = (e) => {
          const b = e.target.closest("[data-lang],[data-cls],[data-board],[data-theme],[data-act]");
          if (!b) return;
          if (b.dataset.lang) {
            if (b.dataset.lang === currentLang()) return;
            Store.setLang(b.dataset.lang);
            applyLang();
          } else if (b.dataset.board) {
            if (b.dataset.board === (st.profile.board || "cbse")) return;
            Store.setBoard(b.dataset.board);
            toast(t("Switched to {name}", { name: D.boards[b.dataset.board] }));
            location.hash = "#/";
            return;
          } else if (b.dataset.cls) {
            if (Number(b.dataset.cls) === st.profile.cls) return;
            Store.setClass(Number(b.dataset.cls));
            toast(t("Switched to Class {n}", { n: b.dataset.cls }));
            // Start the new class from Home so nothing from the old class is left on screen.
            location.hash = "#/";
            return;
          } else if (b.dataset.act === "backup") {
            saveTextFile(`pocket-class-progress-${dayKey()}.json`, Store.exportData()).catch(() => {});
            return;
          } else if (b.dataset.act === "offline-all") {
            saveAllOffline(el.querySelector("#offline-status"), b);
            return;
          } else if (b.dataset.act === "restore") {
            el.querySelector("#restore").click();
            return;
          } else if (b.dataset.theme) {
            Store.setTheme(b.dataset.theme);
            App.applyTheme();
          } else if (b.dataset.act === "reset") {
            if (!confirm(t("Reset all of this student's progress? This can't be undone."))) return;
            Store.reset();
            toast(t("Progress reset"));
          }
          App.render({ keepScroll: true });
        };
      },
    };
  }

  // Fetches every class's files through the service worker, which keeps a copy of each one.
  async function saveAllOffline(status, btn) {
    const urls = D.classes.flatMap((c) => [...D.files(c), ...D.practiceFiles(c)]);
    btn.disabled = true;
    let done = 0, failed = 0;
    for (let i = 0; i < urls.length; i += 6) {
      await Promise.all(urls.slice(i, i + 6).map((u) => fetch(u, { cache: "no-cache" }).then((r) => { if (!r.ok) failed++; }).catch(() => failed++)));
      done = Math.min(i + 6, urls.length);
      status.textContent = t("Saving… {n}%", { n: Math.round((done / urls.length) * 100) });
    }
    btn.disabled = false;
    status.textContent = failed ? t("{n} files couldn't be saved. Check your connection and try again.", { n: failed }) : t("All classes are saved on this device and work offline.");
  }

  // Shared with sheets.js.
  const ui = { topbar, pageHead, emptyState, notFound, quizItems, genItems, findChapter, writtenHTML };

  return { ui, onboarding, home, subject, chapter, testSetup, testRun, revise, mistakes, dueRound, sheet, subjectCards, timer, progress, parent, search, settings, notFound };
})();
