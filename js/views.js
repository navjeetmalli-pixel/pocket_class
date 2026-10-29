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
  const sheetLabel = (id) => SHEET_LABEL[id] || (["english", "hindi", "punjabi", "englishpb", "hindipb"].includes(id) ? "Quick reference" : "Key facts");
  const TERMS_LABEL = { hindi: "मुख्य शब्द", hindipb: "मुख्य शब्द", punjabi: "ਮੁੱਖ ਸ਼ਬਦ" };

  function boardPicker(current) {
    return `<div class="seg" role="group" aria-label="Board">${Object.entries({ cbse: "CBSE / NCERT", pseb: "PSEB (Punjab Board)" })
      .map(([v, l]) => `<button data-board="${v}" class="${current === v ? "on" : ""}">${l}</button>`)
      .join("")}</div>`;
  }

  // Shown to PSEB students in a class whose PSEB books aren't in the app yet.
  function boardNote(c) {
    if (D.hasBoardContent(c)) return "";
    return `<div class="card small" style="background:color-mix(in srgb, var(--gold) 14%, var(--surface))">
      <strong>PSEB books for Class ${c} aren't in the app yet.</strong> You're seeing the CBSE / NCERT version.
      Many topics overlap with PSEB (especially Maths and Science), but follow your PSEB book. PSEB content is ready for Class 10.</div>`;
  }

  // ---------- shared pieces ----------

  function topbar(title, back, extra = "") {
    return `<header class="topbar">
      <a class="icon-btn" href="${back}" aria-label="Back">${icon("back")}</a>
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
    return list.map((q) => ({ ...q, ref: { key: `${Store.key(c, subj.id, ch.id)}/${questionId(q)}`, from } }));
  }

  // Fresh number-changing questions (maths and physics chapters only).
  function genItems(c, subj, ch, count, seed = Date.now()) {
    const from = `${subj.short} · ${ch.title}`;
    return Gen.questions(c, subj.id, ch.id, count, seed).map((q) => ({ ...q, ref: { key: null, from } }));
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
    return { html: `${topbar("Not found", "#/")}${emptyState("🧭", "We couldn't find that page.")}` };
  }

  // ---------- onboarding ----------

  function classGrid(current) {
    return `<div class="class-pick class-grid" role="group" aria-label="Class">${D.classes
      .map((n) => `<button data-cls="${n}" class="${n === current ? "on" : ""}" aria-label="Class ${n}"><span class="n">${n}</span></button>`)
      .join("")}</div>`;
  }

  function onboarding() {
    let pick = null;
    let board = "cbse";
    return {
      title: "Welcome",
      html: `
        <div class="onboard">
          <div class="brand"><span class="brand-mark">P</span>Pocket Class India</div>
          <div>
            <h1>Your study partner from Class 1 to 12</h1>
            <p class="muted" style="margin-top:10px">Notes, flashcards, quizzes and mock tests for every main subject, from Class 1 maths to Class 12 physics, accountancy and history. Follows the NCERT syllabus and works offline.</p>
          </div>
          <div class="field">
            <label for="ob-name">What should we call you?</label>
            <input id="ob-name" class="input" placeholder="Your name (optional)" autocomplete="given-name" maxlength="30">
          </div>
          <div class="field">
            <label>Which class are you in?</label>
            ${classGrid(pick)}
          </div>
          <div class="field">
            <label>Which board?</label>
            ${boardPicker(board)}
          </div>
          <button class="btn primary block" data-act="start" disabled>Start studying ${icon("arrow")}</button>
        </div>`,
      mount(el) {
        el.onclick = (e) => {
          const b = e.target.closest("[data-cls],[data-board],[data-act]");
          if (!b) return;
          if (b.dataset.cls) {
            pick = Number(b.dataset.cls);
            el.querySelectorAll("[data-cls]").forEach((x) => x.classList.toggle("on", x === b));
            el.querySelector('[data-act="start"]').disabled = false;
          } else if (b.dataset.board) {
            board = b.dataset.board;
            el.querySelectorAll("[data-board]").forEach((x) => x.classList.toggle("on", x === b));
          } else if (pick) {
            Store.setProfile(el.querySelector("#ob-name").value, pick, board);
            location.hash = "#/";
            App.render();
          }
        };
      },
    };
  }

  // ---------- home ----------

  function home() {
    const st = Store.state;
    const c = cls();
    const hr = new Date().getHours();
    const greet = hr < 12 ? "Good morning" : hr < 17 ? "Good afternoon" : "Good evening";

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
          <div class="grow"><div class="k">Continue where you left off · ${esc(f.subj.name)}</div><div class="t">${esc(f.ch.title)}</div></div>
          <span class="go">${icon("arrow")}</span></a>`;
    }

    const card = (s) => {
        const x = subjectStats(c, s.id);
        return `<a class="card subject-card" href="#/subject/${s.id}" style="--c:${s.color}">
          <span class="subject-icon">${s.icon}</span>
          <span class="subject-name">${esc(s.name)}</span>
          <span class="subject-hi">${esc(s.native)}</span>
          <span class="bar"><i style="width:${pct(x.done, x.total)}%"></i></span>
          <span class="subject-meta">${x.total ? `${x.done} / ${x.total} chapters` : "Coming soon"}</span>
        </a>`;
    };
    const list = D.subjectsFor(c);
    const subjects =
      c >= 11
        ? [...new Set(list.map((s) => s.stream))]
            .map((st) => `<h3 class="stream-label">${esc(st)}</h3><div class="subject-grid">${list.filter((s) => s.stream === st).map(card).join("")}</div>`)
            .join("")
        : `<div class="subject-grid">${list.map(card).join("")}</div>`;

    const mistakes = Store.mistakesFor(c).length;
    const tool = (href, ic, t, sub) =>
      `<a class="card tool" href="${href}"><span class="ti">${icon(ic)}</span><span class="tt">${t}</span><span class="ts">${sub}</span></a>`;

    return {
      html: `
        <div class="home-head">
          <div class="grow">
            <h1>Namaste${st.profile.name ? `, ${esc(st.profile.name)}` : ""} 🙏</h1>
            <div class="sub">${greet} · Class ${c} · ${st.profile.board === "pseb" ? "PSEB" : "CBSE"}</div>
          </div>
          <a class="icon-btn" href="#/search" aria-label="Search">${icon("search")}</a>
          <a class="icon-btn" href="#/settings" aria-label="Settings">${icon("settings")}</a>
        </div>
        <div class="stats">
          <div class="card stat"><div class="v">🔥 ${Store.streak()}</div><div class="l">day streak</div></div>
          <div class="card stat"><div class="v">${done}<span class="muted small">/${total}</span></div><div class="l">chapters done</div></div>
          <div class="card stat"><div class="v">${avg === null ? "–" : avg + "%"}</div><div class="l">quiz average</div></div>
        </div>
        ${boardNote(c)}
        ${cont}
        <h2 class="block-title">Subjects</h2>
        ${subjects}
        <h2 class="block-title">Study tools</h2>
        <div class="tools">
          ${tool("#/test", "test", "Mock test", "Timed test across chapters")}
          ${tool("#/revise/mistakes", "target", "My mistakes", mistakes ? `${mistakes} question${mistakes > 1 ? "s" : ""} to fix` : "Nothing to fix yet")}
          ${tool("#/timer", "timer", "Focus timer", "Study in 25-minute blocks")}
          ${tool("#/revise", "formula", "Formula sheets", "Quick revision lists")}
          ${tool("#/sheets", "print", "Practice sheets", "Make and print your own")}
        </div>
        ${qotdHTML(c)}`,
      mount(el) {
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
    return qotdItem(c) ? `<h2 class="block-title">Question of the day</h2>${qotdCard(c)}` : "";
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
        : `<div class="feedback ${picked === it.answer ? "good" : "bad"}"><div class="h">${picked === it.answer ? "Correct! 🎉 Come back tomorrow for a new one." : "Not quite. It's been added to My mistakes."}</div>${rich(it.explain)}</div>`;
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
        ? `Follows the PSEB syllabus: ${books}.`
        : `Follows the NCERT book${sy.books.length > 1 ? "s" : ""} ${books} (${esc(sy.board)}).`,
      "older-book": `Follows the older NCERT book${sy.books.length > 1 ? "s" : ""} ${books}.`,
      topic: "Topic-based revision.",
    }[sy.match];
    const review = sy.reviewed ? `Checked by a teacher (${esc(String(sy.reviewed).slice(0, 10))}).` : "Not yet checked by a teacher, so compare with your textbook.";
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
    if (!chs.length) list = `<div class="mt">${emptyState("📚", `Chapters for Class ${c} ${esc(subj.name)} are coming soon.`)}</div>`;
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
        ? `<div class="chips scroll mt" role="group" aria-label="Filter by section">
            <button class="chip on" data-filter="">All</button>
            ${sections.map((s) => `<button class="chip" data-filter="${esc(s)}">${esc(s)}</button>`).join("")}
          </div>`
        : "";

    return {
      title: subj.name,
      html: `
        ${topbar(subj.name, "#/")}
        <div class="hero" style="--c:${subj.color}">
          <div class="eyebrow">Class ${c} · ${esc(subj.native)}</div>
          <h1>${subj.icon} ${esc(subj.name)}</h1>
          <p>${x.done} of ${x.total} chapters complete${x.avg != null ? ` · average quiz score ${x.avg}%` : ""}</p>
          <span class="bar"><i style="width:${pct(x.done, x.total)}%"></i></span>
          ${
            chs.length
              ? `<div class="hero-actions">
                  <a class="btn" href="#/test/${id}">${icon("test")} Subject test</a>
                  <a class="btn" href="#/cards/${id}">${icon("cards")} Flashcards</a>
                  <a class="btn" href="#/sheet/${id}">${icon("formula")} ${sheetLabel(id)}</a>
                  <a class="btn" href="#/sheets/${id}">${icon("print")} Practice sheets</a>
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
    const tabs = [["notes", "Notes", "notes"], ["cards", "Flashcards", "cards"], hasPractice && ["practice", "Practice", "practice"], ["quiz", "Quiz", "quiz"]].filter(Boolean);
    if (!tabs.some((t) => t[0] === tab)) tab = "notes";

    const r = Store.chapter(k);
    const marked = Store.isBookmarked(k);
    const back = c === cls() ? `#/subject/${subj.id}` : "#/";

    let body = "";
    if (tab === "notes") body = notesTab(subj, ch, r, base);
    else if (tab === "practice") body = practiceTab(c, subj, ch, bank);
    else body = `<div id="${tab}-mount"></div>`;

    const prev = chs[idx - 1];
    const next = chs[idx + 1];
    const pager = `<div class="pager no-print">
      ${prev ? `<a class="card" href="#/chapter/${c}/${subj.id}/${prev.id}"><div class="k">← Previous</div><div class="t">${esc(prev.title)}</div></a>` : "<span class='grow'></span>"}
      ${next ? `<a class="card next" href="#/chapter/${c}/${subj.id}/${next.id}"><div class="k">Next →</div><div class="t">${esc(next.title)}</div></a>` : "<span class='grow'></span>"}
    </div>`;

    return {
      title: ch.title,
      html: `
        ${topbar(subj.name, back, `<button class="icon-btn ${marked ? "on" : ""}" data-act="bookmark" aria-label="Bookmark this chapter" aria-pressed="${marked}">${icon("bookmark")}</button>`)}
        <div class="hero" style="--c:${subj.color}">
          <div class="eyebrow">Class ${c} · ${esc(ch.section)} · Chapter ${chapterNumber(chs, idx)}</div>
          <h1>${esc(ch.title)}</h1>
          <p>${rich(ch.summary)}</p>
          ${r.done || r.best != null ? `<div class="row wrap" style="margin-top:12px">${r.done ? '<span class="pill good">✓ Complete</span>' : ""}${r.best != null ? `<span class="pill accent">Best quiz score ${r.best}%</span>` : ""}</div>` : ""}
        </div>
        <nav class="tabs" aria-label="Chapter sections">${tabs
          .map(([id, label, ic]) => `<a href="${base}/${id}" class="${id === tab ? "active" : ""}" ${id === tab ? 'aria-current="page"' : ""}>${icon(ic)}${label}</a>`)
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
            toast(on ? "Saved to bookmarks" : "Removed from bookmarks");
          } else if (b.dataset.act === "done") {
            Store.setDone(k, !Store.chapter(k).done);
            toast(Store.chapter(k).done ? "Chapter marked complete ✓" : "Marked as not complete");
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
        if (tab === "cards")
          Cards.mount(el.querySelector("#cards-mount"), {
            cards: ch.terms.map((t) => ({ key: cardKey(c, subj.id, ch, t), front: t.term, back: t.meaning })),
          });
      },
    };
  }

  function notesTab(subj, ch, r, base) {
    const notes = ch.notes
      .map((n) => `<article class="card note"><h3>${esc(n.heading)}</h3><ul>${n.points.map((p) => `<li>${rich(p)}</li>`).join("")}</ul></article>`)
      .join("");
    const formulas =
      ch.formulas && ch.formulas.length
        ? `<section class="card formula-box"><h3>${icon("formula")} ${FORMULA_LABEL[subj.id]}</h3><ul>${ch.formulas.map((f) => `<li>${rich(f)}</li>`).join("")}</ul></section>`
        : "";
    const terms = `<section class="card"><h3 style="font-size:17px;font-weight:750;margin-bottom:12px">${TERMS_LABEL[subj.id] || "Key terms"}</h3>
      <dl class="terms">${ch.terms.map((t) => `<div><dt>${rich(t.term)}</dt><dd>${rich(t.meaning)}</dd></div>`).join("")}</dl></section>`;
    return `
      <div class="stack">${notes}${formulas}${terms}</div>
      <div class="done-row no-print">
        <button class="btn ${r.done ? "good" : ""}" data-act="done">${icon("check")} ${r.done ? "Completed" : "Mark as complete"}</button>
        <a class="btn primary" href="${base}/quiz">Take the quiz ${icon("arrow")}</a>
      </div>`;
  }

  // Written questions grouped by marks, like a board paper.
  function writtenHTML(list) {
    const groups = {};
    list.forEach((x) => (groups[x.marks || 3] = groups[x.marks || 3] || []).push(x));
    return Object.keys(groups)
      .sort((a, b) => a - b)
      .map(
        (m) => `<h2 class="block-title">${m}-mark question${groups[m].length > 1 ? "s" : ""} <span class="count">${groups[m].length}</span></h2>
        <div class="stack">${groups[m]
          .map((x) => `<details class="card qa"><summary><span>${rich(x.q)}</span></summary><div class="a">${rich(x.a)}</div></details>`)
          .join("")}</div>`
      )
      .join("");
  }

  function practiceTab(c, subj, ch, bank) {
    const sheet = `#/worksheet/${c}/${subj.id}?ch=${ch.id}`;
    let h = `<div class="card row no-print" style="gap:12px;margin-bottom:6px">
      <div class="grow"><strong>Practice sheet</strong><div class="small muted">A printable sheet for this chapter, with an answer key. A new set every time.</div></div>
      <a class="btn primary" href="${sheet}">${icon("print")} Make sheet</a></div>`;
    if (Gen.forChapter(c, subj.id, ch.id).length)
      h += `<h2 class="block-title">Fresh questions <span class="count">new numbers every time</span></h2>
        <div id="gen-mount"></div>`;
    if (ch.examples && ch.examples.length)
      h += `<h2 class="block-title">Solved examples</h2><div class="stack">${ch.examples
        .map(
          (ex, i) => `<article class="card example">
            <p class="q"><span class="tag">Example ${i + 1}</span>${rich(ex.q)}</p>
            <details class="reveal"><summary>Show solution</summary>
              <ol class="steps">${ex.steps.map((s) => `<li>${rich(s)}</li>`).join("")}</ol>
              <div class="answer">${rich(ex.answer)}</div>
            </details>
          </article>`
        )
        .join("")}</div>`;
    if (ch.qa && ch.qa.length)
      h += `<h2 class="block-title">Important questions</h2>
        <p class="small muted" style="margin:-4px 2px 12px">Try answering in your head or notebook first, then tap to check.</p>
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
            <p class="q"><span class="tag">Q${i + 1}</span>${rich(q.q)}</p>
            <details class="reveal"><summary>Show answer</summary>
              <ol class="steps">${q.steps.map((st) => `<li>${rich(st)}</li>`).join("")}</ol>
              <div class="answer">${rich(q.options[0])}</div>
            </details></article>`
        )
        .join("")}</div>
        <button class="btn block mt" data-act="regen">${icon("reset")} New questions</button>`;
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
      title: "Mock test",
      html: `${pageHead("Mock test", `Class ${c} · Practise like the real exam`)}<div id="setup"></div>`,
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
    if (!withContent.length) return emptyState("📚", "No chapters are available yet.");
    if (testCfg.subject !== "all" && !withContent.some((s) => s.id === testCfg.subject)) testCfg.subject = "all";

    const pool = testPool(c).reduce((a, g) => a + g.length, 0);
    const count = Math.min(testCfg.count, pool);
    const chips = [`<button class="chip ${testCfg.subject === "all" ? "on" : ""}" data-subj="all">All subjects</button>`]
      .concat(withContent.map((s) => `<button class="chip ${testCfg.subject === s.id ? "on" : ""}" data-subj="${s.id}">${s.icon} ${esc(s.short)}</button>`))
      .join("");

    let chapterPick = "";
    if (testCfg.subject !== "all") {
      const chs = D.chapters(c, testCfg.subject);
      const sel = testCfg.chapters || chs.map((x) => x.id);
      chapterPick = `<div class="card">
        <div class="row"><strong class="grow">Chapters</strong><span class="small muted">${sel.length} of ${chs.length} selected</span></div>
        <div class="row" style="margin-top:8px"><button class="chip" data-act="all">Select all</button><button class="chip" data-act="none">Clear</button></div>
        <div class="check-list">${chs
          .map((ch) => `<label><input type="checkbox" data-ch="${ch.id}" ${sel.includes(ch.id) ? "checked" : ""}><span>${esc(ch.title)}</span></label>`)
          .join("")}</div>
      </div>`;
    }

    const past = Store.state.history.filter((h) => h.kind === "test" && h.cls === c).slice(0, 5);

    return `<div class="stack">
      <div class="card"><strong>Subject</strong><div class="chips" style="margin-top:10px">${chips}</div></div>
      ${chapterPick}
      <div class="card">
        <strong>Number of questions</strong>
        <div class="chips" style="margin-top:10px">${[10, 20, 30, 50].map((n) => `<button class="chip ${testCfg.count === n ? "on" : ""}" data-count="${n}">${n}</button>`).join("")}</div>
        ${pool < testCfg.count ? `<p class="small muted" style="margin-top:8px">Only ${pool} questions available for this selection.</p>` : ""}
      </div>
      <div class="card"><label class="switch"><span><strong>Timer</strong><br><span class="small muted">1 minute per question, auto-submits when time runs out</span></span><input type="checkbox" id="timed" ${testCfg.timed ? "checked" : ""}></label></div>
      <button class="btn primary block" data-act="start" ${count ? "" : "disabled"}>Start test · ${count} questions${testCfg.timed ? ` · ${count} min` : ""}</button>
    </div>
    ${
      past.length
        ? `<h2 class="block-title">Recent tests</h2><div class="card">${past
            .map(
              (h) => `<div class="history-row"><div class="grow"><div style="font-weight:620">${esc(h.title)}</div><div class="tiny muted">${relDate(h.at)}</div></div>
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
    const title = subj ? `${subj.short} test` : "Mixed test";
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
      : `<div class="card small muted">Tap the ${icon("bookmark").replace('class="i"', 'class="i" style="width:16px;height:16px;vertical-align:-3px"')} on any chapter to save it here for quick revision.</div>`;

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
      return `${known} of ${all} cards known`;
    };

    return {
      title: "Revise",
      html: `
        ${pageHead("Revise", "Fix mistakes, skim formula sheets and drill flashcards")}
        <div class="card row" style="gap:16px">
          <div class="ch-num" style="width:52px;height:52px;font-size:22px;background:var(--bad-soft);color:var(--bad)">${mistakes}</div>
          <div class="grow"><strong>My mistakes</strong><div class="small muted">${mistakes ? "Questions you got wrong. Get them right to clear them." : "Questions you get wrong in quizzes show up here."}</div></div>
          <a class="btn primary" href="#/revise/mistakes" ${mistakes ? "" : "disabled"}>Practise</a>
        </div>
        <h2 class="block-title">Bookmarked chapters</h2>
        ${bookmarks}
        <a class="card row" href="#/sheets" style="gap:16px;margin-top:12px">
          <div class="ch-num" style="width:52px;height:52px">${icon("print")}</div>
          <div class="grow"><strong>Practice sheets</strong><div class="small muted">Pick chapters and question types, then print with an answer key.</div></div>
          ${icon("next")}</a>
        <h2 class="block-title">Formula &amp; fact sheets</h2>
        ${subjectLinks("#/sheet/", (s) => sheetLabel(s.id) + " for every chapter")}
        <h2 class="block-title">Flashcard decks</h2>
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
      title: "My mistakes",
      html: `${topbar("My mistakes", "#/revise")}${
        items.length ? `<p class="small muted" style="margin:-6px 2px 14px">Answer correctly to remove a question from this list.</p><div id="quiz-mount"></div>` : emptyState("✨", "No mistakes to fix. Take a chapter quiz or mock test and any wrong answers will appear here.")
      }`,
      mount(el) {
        if (!items.length) return;
        Quiz.mount(el.querySelector("#quiz-mount"), {
          title: "Mistakes practice",
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
        ${topbar(`${subj.short} · ${sheetLabel(id)}`, "#/revise", `<button class="icon-btn" onclick="printPage()" aria-label="Print">${icon("print")}</button>`)}
        <p class="small muted" style="margin:-6px 2px 16px">Class ${c} · ${FORMULA_LABEL[id]} from every chapter, in one place.</p>
        ${
          chs.length
            ? `<div class="stack" style="--c:${subj.color}">${chs
                .map(
                  (ch) => `<section class="card formula-box">
                    <h3><a href="#/chapter/${c}/${id}/${ch.id}">${esc(ch.title)}</a></h3>
                    <ul>${ch.formulas.map((f) => `<li>${rich(f)}</li>`).join("")}</ul></section>`
                )
                .join("")}</div>`
            : emptyState("📄", "Nothing here yet.")
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
      title: `${subj.short} flashcards`,
      html: `
        ${topbar(`${subj.short} flashcards`, "#/revise")}
        <div class="chips" style="margin-bottom:14px">
          <button class="chip on" data-deck="all">All cards (${cards.length})</button>
          <button class="chip" data-deck="learning">Not known yet (${cards.filter((x) => Store.state.cards[x.key] !== "known").length})</button>
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
      title: "Focus timer",
      html: `
        ${pageHead("Focus timer", "Study in focused blocks with short breaks")}
        <div class="card timer-wrap">
          <div class="seg" style="width:100%;max-width:420px" role="group" aria-label="Timer mode">
            ${Object.entries(Focus.MODES).map(([m, v]) => `<button data-mode="${m}">${v.label}</button>`).join("")}
          </div>
          <div class="timer-ring">
            <svg viewBox="0 0 240 240" aria-hidden="true"><circle class="track" cx="120" cy="120" r="${R}"/><circle class="prog" cx="120" cy="120" r="${R}" stroke-dasharray="${C}" stroke-dashoffset="0"/></svg>
            <div class="read"><div class="time" data-time role="timer"></div><div class="mode" data-modelabel></div></div>
          </div>
          <div class="timer-controls">
            <button class="btn primary" data-act="toggle"></button>
            <button class="btn" data-act="reset">${icon("reset")} Reset</button>
          </div>
          <div data-lens class="center">
            <div class="small muted" style="margin-bottom:8px">Focus length</div>
            <div class="chips" style="justify-content:center">${[15, 25, 45, 60].map((m) => `<button class="chip" data-len="${m}">${m} min</button>`).join("")}</div>
          </div>
        </div>
        <div class="stats mt">
          <div class="card stat"><div class="v" data-rounds></div><div class="l">sessions now</div></div>
          <div class="card stat"><div class="v">${minutesLabel(Store.state.focusMin)}</div><div class="l">total focus</div></div>
          <div class="card stat"><div class="v">🔥 ${Store.streak()}</div><div class="l">day streak</div></div>
        </div>
        <h2 class="block-title">How it works</h2>
        <div class="card note"><ul>
          <li>Pick one chapter and put your phone on silent. Start the timer.</li>
          <li>Study only that chapter until the bell. No social media!</li>
          <li>Take a 5-minute break: stretch, drink water, rest your eyes.</li>
          <li>After 4 focus sessions, take a longer 15-minute break.</li>
        </ul></div>`,
      mount(el) {
        const ring = el.querySelector(".prog");
        const update = () => {
          if (!el.isConnected) return off();
          el.querySelector("[data-time]").textContent = clock(Focus.left);
          el.querySelector("[data-modelabel]").textContent = Focus.running ? Focus.MODES[Focus.mode].label : Focus.left === Focus.total ? "Ready" : "Paused";
          ring.style.strokeDashoffset = C * (1 - Focus.left / Focus.total);
          ring.style.stroke = Focus.mode === "focus" ? "var(--accent)" : "var(--good)";
          el.querySelector('[data-act="toggle"]').innerHTML = Focus.running ? `${icon("pause")} Pause` : `${icon("play")} Start`;
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
      return { label: d.toLocaleDateString("en-IN", { weekday: "short" }), min: x.min, today: i === 6 };
    });
    const week = days.reduce((a, d) => a + d.min, 0);
    const max = Math.max(30, ...days.map((d) => d.min));
    const quizzes = st.history.filter((h) => h.cls === c);
    const activeDays = Object.values(st.days).filter((d) => d.acts > 0 || d.min > 0).length;

    const subj = D.subjectsFor(c)
      .map((s) => {
        const x = subjectStats(c, s.id);
        return `<div style="--c:${s.color}">
          <div class="top"><span><strong>${s.icon} ${esc(s.name)}</strong></span><span class="muted">${x.done}/${x.total} chapters${x.avg != null ? ` · ${x.avg}% avg` : ""}</span></div>
          <span class="bar"><i style="width:${pct(x.done, x.total)}%"></i></span>
        </div>`;
      })
      .join("");

    const hist = quizzes.slice(0, 12);
    return {
      title: "Progress",
      html: `
        ${pageHead("Your progress", `Class ${c} · ${activeDays} study day${activeDays === 1 ? "" : "s"} so far`)}
        <div class="stats-4">
          <div class="card stat"><div class="v">🔥 ${Store.streak()}</div><div class="l">day streak</div></div>
          <div class="card stat"><div class="v">${minutesLabel(week)}</div><div class="l">studied this week</div></div>
          <div class="card stat"><div class="v">${minutesLabel(st.focusMin)}</div><div class="l">focus timer</div></div>
          <div class="card stat"><div class="v">${quizzes.length}</div><div class="l">quizzes &amp; tests</div></div>
        </div>
        <h2 class="block-title">This week</h2>
        <div class="card">
          <div class="week" role="img" aria-label="Minutes studied each day this week">${days
            .map(
              (d) => `<div class="day"><span class="m">${d.min ? d.min + "m" : ""}</span>
                <span class="col ${d.min ? "" : "zero"}" style="height:${Math.max(4, (d.min / max) * 100)}%"></span>
                <span class="d" style="${d.today ? "color:var(--accent)" : ""}">${d.today ? "Today" : d.label}</span></div>`
            )
            .join("")}</div>
          <p class="tiny muted" style="margin-top:10px">Minutes you were actively using the app.</p>
        </div>
        <h2 class="block-title">Subjects</h2>
        <div class="card subj-progress">${subj}</div>
        <h2 class="block-title">Recent quizzes</h2>
        ${
          hist.length
            ? `<div class="card">${hist
                .map(
                  (h) => `<div class="history-row">
                    <div class="grow"><div style="font-weight:620">${esc(h.title)}</div><div class="tiny muted">${relDate(h.at)} · ${h.kind === "test" ? "Mock test" : h.kind === "practice" ? "Mistakes practice" : "Chapter quiz"}</div></div>
                    <span class="pill ${pct(h.score, h.total) >= 60 ? "good" : "bad"}">${h.score}/${h.total}</span></div>`
                )
                .join("")}</div>`
            : emptyState("📝", "Take your first chapter quiz to see your scores here.")
        }`,
    };
  }

  // ---------- search ----------

  function search() {
    return {
      title: "Search",
      html: `
        ${topbar("Search", "#/")}
        <div class="search-box">${icon("search")}<input class="input" id="q" type="search" placeholder="Search chapters, topics, terms…" autocomplete="off" aria-label="Search"></div>
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
    if (q.length < 2) return `<p class="small muted center">Type at least 2 letters: a chapter name, a topic or a key term.</p>`;
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
    if (!hits.length) return emptyState("🔍", `No results for “${esc(raw.trim())}” in Class ${c}.`);
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

  function settings() {
    const st = Store.state;
    const seg = (name, items, val) =>
      `<div class="seg" role="group">${items.map(([v, l]) => `<button data-${name}="${v}" class="${String(val) === String(v) ? "on" : ""}">${l}</button>`).join("")}</div>`;
    return {
      title: "Settings",
      html: `
        ${topbar("Settings", "#/")}
        <div class="stack">
          <div class="card stack">
            <div class="field"><label for="name">Your name</label><input id="name" class="input" value="${esc(st.profile.name)}" maxlength="30" placeholder="Your name"></div>
            <div class="field"><label>Class</label>${classGrid(st.profile.cls)}</div>
            <div class="field"><label>Board</label>${boardPicker(st.profile.board || "cbse")}</div>
            <div class="field"><label>Appearance</label>${seg("theme", [["system", "Auto"], ["light", "Light"], ["dark", "Dark"]], st.theme)}</div>
          </div>
          <div class="card">
            <strong>Install on your phone</strong>
            <ul class="small muted" style="margin:8px 0 0;padding-left:20px">
              <li><strong>Android (Chrome):</strong> tap ⋮ menu → <em>Add to Home screen</em> or <em>Install app</em>.</li>
              <li><strong>iPhone (Safari):</strong> tap Share → <em>Add to Home Screen</em>.</li>
              <li>After the first visit it works without internet.</li>
            </ul>
          </div>
          <div class="card stack">
            <div><strong>Back up progress</strong><div class="small muted">Progress is saved only in this browser. Save a backup file before clearing browser data or moving to a new phone, then restore it there.</div></div>
            <div class="row" style="gap:10px;flex-wrap:wrap">
              <button class="btn" data-act="backup">${icon("download")} Save backup</button>
              <button class="btn" data-act="restore">${icon("upload")} Restore backup</button>
              <input type="file" id="restore" accept=".json,application/json" hidden>
            </div>
          </div>
          ${Native.is ? "" : `<div class="card row">
            <div class="grow"><strong>Save every class for offline</strong><div class="small muted" id="offline-status">Your own class is saved automatically. Use this if brothers or sisters share this phone (about 17 MB).</div></div>
            <button class="btn" data-act="offline-all">Save all</button>
          </div>`}
          <div class="card row">
            <div class="grow"><strong>Reset progress</strong><div class="small muted">Clears scores, streaks, bookmarks and mistakes on this device.</div></div>
            <button class="btn bad" data-act="reset">Reset</button>
          </div>
          <div class="card small muted">
            <strong style="color:var(--text)">About Pocket Class India</strong><br>
            Notes, quizzes and tests are written for the CBSE / NCERT and PSEB syllabi, Classes 1 to 12. Each subject page says whether it follows the current NCERT book, an older one, or is arranged by topic.
            Punjabi covers grammar and writing skills for CBSE and PSEB students. The content has not yet been checked by teachers,
            so use it for revision alongside your textbook, and check with your teacher if anything looks different from your book.
            Your progress is stored only on this device.
          </div>
        </div>`,
      mount(el) {
        el.querySelector("#restore").onchange = (e) => {
          const file = e.target.files[0];
          if (!file) return;
          file.text().then((text) => {
            if (!confirm("Replace the progress on this device with this backup?")) return;
            if (!Store.importData(text)) return toast("That file isn't a Pocket Class backup");
            App.applyTheme();
            toast("Progress restored");
            if (location.hash === "#/") App.render();
            else location.hash = "#/";
          });
        };
        el.querySelector("#name").onchange = (e) => {
          Store.setProfile(e.target.value, st.profile.cls);
          toast("Name saved");
        };
        el.onclick = (e) => {
          const b = e.target.closest("[data-cls],[data-board],[data-theme],[data-act]");
          if (!b) return;
          if (b.dataset.board) {
            if (b.dataset.board === (st.profile.board || "cbse")) return;
            Store.setBoard(b.dataset.board);
            toast(`Switched to ${D.boards[b.dataset.board]}`);
            location.hash = "#/";
            return;
          } else if (b.dataset.cls) {
            if (Number(b.dataset.cls) === st.profile.cls) return;
            Store.setClass(Number(b.dataset.cls));
            toast(`Switched to Class ${b.dataset.cls}`);
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
            if (!confirm("Reset all your progress on this device? This can't be undone.")) return;
            Store.reset();
            toast("Progress reset");
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
      status.textContent = `Saving… ${Math.round((done / urls.length) * 100)}%`;
    }
    btn.disabled = false;
    status.textContent = failed ? `${failed} files couldn't be saved. Check your connection and try again.` : "All classes are saved on this device and work offline.";
  }

  // Shared with sheets.js.
  const ui = { topbar, pageHead, emptyState, notFound, quizItems, genItems, findChapter, writtenHTML };

  return { ui, onboarding, home, subject, chapter, testSetup, testRun, revise, mistakes, sheet, subjectCards, timer, progress, search, settings, notFound };
})();
