// Chapter hub (design spec 7.4, 7.5). One chapter, six sections as its navigation:
//   Understand (what you can do, notes by skill, key terms and flashcards, worked examples, the lesson), Visualise (diagrams),
//   Explore (experiments and labs), Play (games), Practise (fresh questions, the question bank, the practice sheet), Master (quiz,
//   skill check, mock test, formula sheet). A section with nothing in it for this chapter is left out (no dead tabs).
// Routes: #/chapter/{c}/{subject}/{chapter}[/{section}[/lesson|/terms]]. Old tab names redirect (see LEGACY).
// The lesson (#/chapter/.../understand/lesson) runs on its own, without the hero or the section navigation.

(() => {
  const { D, cls, FORMULA_LABEL, TERMS_LABEL, topbar, chapterNumber, quizRound, cardKey, findChapter, notFound, writtenHTML, quizItems, genItems } = Views._;

  // [id, label, icon, colour]. Colour tokens: blue Understand / Visualise / Practise, green Explore, purple Play, amber Master.
  const SECTIONS = [
    ["understand", "Understand", "notes", "var(--ink-learn)"],
    ["visualise", "Visualise", "eye", "var(--ink-learn)"],
    ["explore", "Explore", "bolt", "var(--ink-explore)"],
    ["play", "Play", "game", "var(--ink-play)"],
    ["practise", "Practise", "practice", "var(--ink-learn)"],
    ["master", "Master", "target", "var(--ink-challenge)"],
  ];
  // The tab names the chapter page used before the hub -> [section, part].
  const LEGACY = {
    notes: ["understand"],
    lesson: ["understand", "lesson"],
    guided: ["understand", "lesson"],
    flashcards: ["understand", "terms"],
    cards: ["understand", "terms"],
    practice: ["practise"],
    quiz: ["master"],
  };
  const SHORT = { 1: "Easy", 2: "Medium", 3: "Hard" };
  const MOCK_ROUND = 15;

  // What the learner is doing in Master besides the chapter quiz: { base, type: "mock" | "obj", obj }.
  let masterMode = null;

  const young = (c) => ["1-2", "3-5"].includes(App.band(c));
  const norm = (s) => plain(String(s)).trim().toLowerCase().replace(/\s+/g, " ");

  function labsFor(c, subj, ch) {
    try {
      if (typeof Labs !== "undefined" && typeof Labs.forChapter === "function") {
        const list = Labs.forChapter(c, subj, ch);
        return Array.isArray(list) ? list : [];
      }
    } catch (e) {}
    return [];
  }

  // Shows the first `n` items and puts the rest behind "Show more" (young classes see fewer items at a time).
  function limit(items, n, wrap = "stack") {
    if (!n || items.length <= n + 1) return items.join("");
    return `${items.slice(0, n).join("")}<details class="more"><summary class="btn">${t("Show {n} more", { n: items.length - n })}</summary><div class="${wrap}" style="margin-top:14px">${items.slice(n).join("")}</div></details>`;
  }

  // ---------- chapter ----------

  function chapter([c, subjectId, chapterId, section, sub]) {
    c = Number(c);
    const f = findChapter(c, subjectId, chapterId);
    if (!f) return notFound();
    const { subj, chs, idx, ch } = f;
    const k = Store.key(c, subj.id, ch.id);
    const base = `#/chapter/${c}/${subj.id}/${ch.id}`;
    const bank = D.practiceFor(c, subj.id, ch.id);
    const guided = Guided.available(c, subj.id, ch.id);

    const diagrams = D.diagramsFor(c, subj.id, ch.id);
    const sims = typeof Sims !== "undefined" ? Sims.cards(c, subj, ch) : "";
    const labs = labsFor(c, subj, ch);
    const have = {
      understand: true,
      visualise: diagrams.length > 0,
      explore: !!sims || labs.length > 0,
      play: Games.availableFor(c, subj, ch).length > 0,
      practise: !!((ch.examples && ch.examples.length) || (ch.qa && ch.qa.length) || bank.written.length || bank.mcq.length || Gen.forChapter(c, subj.id, ch.id).length),
      master: true,
    };

    // Old tab names, and sections this chapter doesn't have, redirect.
    if (section && LEGACY[section]) {
      let [to, part] = LEGACY[section];
      if (section === "notes" && App.openSim && have.explore) to = "explore"; // Explore's "Open experiment" link
      return { redirect: `${base}/${have[to] ? to : "understand"}${part ? "/" + part : ""}` };
    }
    if (section && !have[section]) return { redirect: `${base}/understand` };
    section = section || "understand";
    if (masterMode && (masterMode.base !== base || section !== "master")) masterMode = null;

    const r = Store.chapter(k);
    const marked = Store.isBookmarked(k);
    const back = c === cls() ? `#/subject/${subj.id}` : "#/";
    const isYoung = young(c);

    // The lesson player: focused, with its own exit. Progress is saved by the lesson on every step.
    if (section === "understand" && sub === "lesson") {
      if (!guided) return { redirect: `${base}/understand` };
      return {
        title: `${t("Lesson")} · ${ch.title}`,
        html: `<div class="lesson-focus" style="--c:${subj.color}">
          <div class="lesson-bar">
            <span class="hub-ic">${SubjectIcons.html(subj, { size: 22 })}</span>
            <div class="grow"><div class="eyebrow">${t("Lesson")} · ${esc(subj.short)}</div><h1 class="lesson-title">${esc(ch.title)}</h1></div>
            <a class="btn" href="${base}/understand" data-act="exit-lesson">${icon("x")} ${t("Exit lesson")}</a>
          </div>
          <p class="tiny muted lesson-save">${t("Your place is saved. Exit any time and pick up again from Understand.")}</p>
          <div id="guided-mount"></div>
        </div>`,
        mount(el) {
          Store.opened(k);
          Guided.mount(el.querySelector("#guided-mount"), { c, subj, chs, idx, ch });
        },
      };
    }

    const visible = SECTIONS.filter(([id]) => have[id]);
    let body = "";
    if (section === "understand") body = understandSection(c, subj, ch, r, base, guided, isYoung);
    else if (section === "visualise") body = visualiseSection(c, subj, diagrams);
    else if (section === "explore") body = exploreSection(sims, labs);
    else if (section === "play") body = Views.playTab(c, subj, ch);
    else if (section === "practise") body = practiseSection(c, subj, ch, bank, isYoung);
    else body = masterSection(c, subj, ch, base, r);

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
          <div class="eyebrow"><span class="hub-ic">${SubjectIcons.html(subj, { size: 20 })}</span> ${t("Class {c} · {section} · Chapter {n}", { c, section: esc(ch.section), n: chapterNumber(chs, idx) })}</div>
          <h1>${esc(ch.title)}</h1>
          <p>${rich(ch.summary)}</p>
          ${r.done || r.best != null ? `<div class="row wrap" style="margin-top:12px">${r.done ? `<span class="pill good">${t("✓ Complete")}</span>` : ""}${r.best != null ? `<span class="pill accent">${t("Best quiz score {n}%", { n: r.best })}</span>` : ""}</div>` : ""}
        </div>
        <div class="hub">
          <nav class="tabs hub-nav no-print" aria-label="${t("Chapter sections")}">${visible
            .map(([id, label, ic, tone]) => `<a href="${base}/${id}" class="sec-${id} ${id === section ? "active" : ""}" style="--sec:${tone}" ${id === section ? 'aria-current="page"' : ""}>${icon(ic)}<span>${t(label)}</span></a>`)
            .join("")}</nav>
          <div id="tab" class="hub-body sec-body-${section}" style="--c:${subj.color}">${body}</div>
        </div>
        ${pager}`,
      mount(el) {
        Store.opened(k);
        // Arriving from Explore: open the experiment that was chosen.
        if (App.openSim) {
          const box = section === "explore" && el.querySelector(`[data-sim="${App.openSim}"]`);
          if (box) {
            box.open = true;
            setTimeout(() => box.scrollIntoView({ block: "start" }), 0);
          }
          App.openSim = null;
        }
        el.onclick = (e) => {
          const b = e.target.closest("[data-act]");
          const a = e.target.closest("a[href]");
          // Leaving a skill check or the mock test: back to the Master page.
          if (masterMode && a && a.getAttribute("href") === `${base}/master`) {
            masterMode = null;
            e.preventDefault();
            return App.render({ keepScroll: true });
          }
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
          } else if (b.dataset.act === "mock" || b.dataset.act === "check") {
            masterMode = { base, type: b.dataset.act === "mock" ? "mock" : "obj", obj: b.dataset.obj || null };
            App.render({ keepScroll: true });
          }
        };
        if (section === "understand") {
          if (ch.terms.length)
            Cards.mount(el.querySelector("#cards-mount"), { cards: ch.terms.map((x) => ({ key: cardKey(c, subj.id, ch, x), front: x.term, back: x.meaning })) });
          if (sub === "terms") setTimeout(() => el.querySelector("#terms") && el.querySelector("#terms").scrollIntoView({ block: "start" }), 0);
        }
        if (section === "practise") mountPractice(el, c, subj, ch);
        if (section === "master") mountMaster(el, c, subj, ch, base);
      },
    };
  }

  // ---------- Understand ----------

  const ERROR_NOTE = {
    slip: "Small slips keep creeping in here. Check each step before you answer.",
    sign: "Watch the plus and minus signs here.",
    scale: "Check place value and powers of ten here.",
    method: "Re-read how the method works here, then try again.",
  };

  // "What you can do": the chapter's objectives, each with where the student is (js/mastery.js). Colour is never the only signal.
  function objectivesPanel(rows) {
    if (!rows.length) return "";
    const done = rows.filter((r) => r.state === "mastered").length;
    const mistakes = rows.flatMap((r) => r.objective.mistakes);
    return `<section class="card obj-panel no-print" aria-labelledby="obj-h">
      <h2 id="obj-h">${t("What you can do")}</h2>
      <p class="small muted">${t("{a} of {b} skills mastered for now. Quizzes, the lesson and games all count.", { a: done, b: rows.length })}</p>
      <ul class="obj-list">${rows
        .map((r) => {
          const e = r.assess.error;
          return `<li><span class="obj-text">${esc(r.objective.text)}</span>${Learn.stateChip(r.state)}${e.confidence === "repeated" && ERROR_NOTE[e.kind] ? `<p class="obj-note">${t(ERROR_NOTE[e.kind])}</p>` : ""}</li>`;
        })
        .join("")}</ul>
      ${mistakes.length ? `<details class="obj-mistakes"><summary>${t("Mistakes to watch for")}</summary><ul>${mistakes.map((m) => `<li>${esc(m.text)} <em>${esc(m.fix)}</em></li>`).join("")}</ul></details>` : ""}
    </section>`;
  }

  // Notes grouped under the skill they teach. Chapters whose skills are only derived from the headings keep a plain list.
  function notesHTML(c, subj, ch, rows, isYoung) {
    const noteCard = (n) => `<article class="card note"><h3>${esc(n.heading)}</h3><ul>${n.points.map((p) => `<li>${rich(p)}${Speech.btn(c, subj.id, p)}</li>`).join("")}</ul></article>`;
    const written = rows.filter((r) => !r.objective.derived);
    if (!written.length) return `<div class="stack">${limit(ch.notes.map(noteCard), isYoung ? 3 : 0)}</div>`;
    const used = new Set();
    const groups = [];
    for (const r of written) {
      const heads = r.objective.topics.map(norm);
      const ns = ch.notes.filter((n, i) => !used.has(i) && heads.includes(norm(n.heading)));
      ns.forEach((n) => used.add(ch.notes.indexOf(n)));
      if (ns.length) groups.push({ r, ns });
    }
    const rest = ch.notes.filter((n, i) => !used.has(i));
    if (!groups.length) return `<div class="stack">${limit(ch.notes.map(noteCard), isYoung ? 3 : 0)}</div>`;
    const groupHTML = groups.map(
      ({ r, ns }) => `<section class="obj-group" aria-label="${esc(r.objective.text)}">
        <h3 class="obj-group-h"><span>${esc(r.objective.text)}</span>${Learn.stateChip(r.state)}</h3>
        <div class="stack">${ns.map(noteCard).join("")}</div></section>`
    );
    if (rest.length) groupHTML.push(`<section class="obj-group"><h3 class="obj-group-h"><span>${t("More notes")}</span></h3><div class="stack">${rest.map(noteCard).join("")}</div></section>`);
    return `<div class="stack">${limit(groupHTML, isYoung ? 2 : 0)}</div>`;
  }

  function termsHTML(c, subj, ch, isYoung) {
    const rowHTML = (x) => `<div><dt>${rich(x.term)}${Speech.btn(c, subj.id, `${x.term}. ${x.meaning}`)}</dt><dd>${rich(x.meaning)}</dd></div>`;
    const n = isYoung ? 5 : 0;
    const first = n && ch.terms.length > n + 1 ? ch.terms.slice(0, n) : ch.terms;
    const more = first === ch.terms ? [] : ch.terms.slice(n);
    return `<section class="card" id="terms" tabindex="-1"><h3 class="sec-h">${t(TERMS_LABEL[subj.id] || "Key terms")}</h3>
      <dl class="terms">${first.map(rowHTML).join("")}</dl>
      ${more.length ? `<details class="more"><summary class="btn">${t("Show {n} more", { n: more.length })}</summary><dl class="terms" style="margin-top:14px">${more.map(rowHTML).join("")}</dl></details>` : ""}
      <h3 class="sec-h" style="margin-top:20px">${icon("cards")} ${t("Flashcards")}</h3>
      <div id="cards-mount"></div></section>`;
  }

  function examplesHTML(ch, isYoung) {
    if (!ch.examples || !ch.examples.length) return "";
    const cards = ch.examples.map(
      (ex, i) => `<article class="card example">
        <p class="q"><span class="tag">${t("Example {n}", { n: i + 1 })}</span>${rich(ex.q)}</p>
        <details class="reveal"><summary>${t("Show solution")}</summary>
          <ol class="steps">${ex.steps.map((s) => `<li>${rich(s)}</li>`).join("")}</ol>
          <div class="answer">${rich(ex.answer)}</div>
        </details>
      </article>`
    );
    return `<h2 class="block-title">${t("Worked examples")}</h2><div class="stack">${limit(cards, isYoung ? 2 : 0)}</div>`;
  }

  function understandSection(c, subj, ch, r, base, guided, isYoung) {
    const rows = Learn.chapterStates(c, subj.id, ch);
    return `
      ${lessonEntry(c, subj, ch, base, guided)}
      ${objectivesPanel(rows)}
      ${notesHTML(c, subj, ch, rows, isYoung)}
      ${ch.terms.length ? `<div class="stack" style="margin-top:14px">${termsHTML(c, subj, ch, isYoung)}</div>` : ""}
      ${examplesHTML(ch, isYoung)}
      ${Guided.teachCard(c, subj, ch)}
      <div class="done-row no-print">
        <button class="btn ${r.done ? "good" : ""}" data-act="done">${icon("check")} ${r.done ? t("Completed") : t("Mark as complete")}</button>
        <a class="btn primary" href="${base}/master">${t("Take the quiz")} ${icon("arrow")}</a>
      </div>`;
  }

  // The "Start lesson" entry (js/guided.js draws the card; the lesson itself opens on its own page).
  const lessonEntry = (c, subj, ch, base, guided) => (guided ? Guided.card(c, subj, ch, base) : "");

  // ---------- Visualise ----------

  function visualiseSection(c, subj, diagrams) {
    return `<p class="small muted sec-lead">${t("Pictures and diagrams for this chapter. Look first, then read the caption.")}</p>
      <div class="stack">${diagrams
        .map(
          (d) => `<figure class="card diagram"><h3>${esc(d.title)}${Speech.btn(c, subj.id, `${d.title}. ${d.caption || ""}`)}</h3><div class="diagram-art" role="img" aria-label="${esc(d.title)}">${d.svg}</div>${d.caption ? `<figcaption>${rich(d.caption)}</figcaption>` : ""}</figure>`
        )
        .join("")}</div>`;
  }

  // ---------- Explore ----------

  function exploreSection(sims, labs) {
    const labCards = labs
      .map((l) => {
        const title = l.title || l.name || "";
        const sub = l.blurb || l.desc || l.sub || l.text || "";
        const href = l.href || (l.id ? `#/explore/${l.id}` : "");
        const ic = l.icon && typeof ICONS !== "undefined" && ICONS[l.icon] ? l.icon : "bolt";
        const inner = `<span class="ti">${icon(ic)}</span><span class="grow"><strong>${esc(typeof title === "string" ? title : "")}</strong>${sub ? `<span class="small muted" style="display:block">${esc(sub)}</span>` : ""}</span>${href ? icon("arrow") : ""}`;
        return href ? `<a class="card row lab-card" href="${esc(href)}" style="gap:12px">${inner}</a>` : `<div class="card row lab-card" style="gap:12px">${inner}</div>`;
      })
      .join("");
    return `<p class="small muted sec-lead">${t("Change something, watch what happens, then explain it.")}</p><div class="stack">${sims}${labCards}</div>`;
  }

  // ---------- Practise ----------

  function practiseSection(c, subj, ch, bank, isYoung) {
    const sheet = `#/worksheet/${c}/${subj.id}?ch=${ch.id}`;
    let h = `<div class="card row no-print" style="gap:12px;margin-bottom:6px">
      <div class="grow"><strong>${t("Practice sheet")}</strong><div class="small muted">${t("A printable sheet for this chapter, with an answer key. A new set every time.")}</div></div>
      <a class="btn primary" href="${sheet}">${icon("print")} ${t("Make sheet")}</a></div>`;
    if (Gen.forChapter(c, subj.id, ch.id).length)
      h += `<h2 class="block-title">${t("Fresh questions")} <span class="count">${t("new numbers every time, with worked steps")}</span></h2>
        <div id="gen-mount"></div>`;
    if (quizItems(c, subj, ch).length > 4) h += `<h2 class="block-title">${t("Question bank")} <span class="count">${t("by level")}</span></h2><div id="bank-mount"></div>`;
    if (ch.qa && ch.qa.length) {
      const qa = ch.qa.map((x) => `<details class="card qa"><summary><span>${rich(x.q)}</span></summary><div class="a">${rich(x.a)}</div></details>`);
      h += `<h2 class="block-title">${t("Important questions")}</h2>
        <p class="small muted" style="margin:-4px 2px 12px">${t("Try answering in your head or notebook first, then tap to check.")}</p>
        <div class="stack">${limit(qa, isYoung ? 3 : 0)}</div>`;
    }
    if (bank.written.length) h += writtenHTML(bank.written);
    return h;
  }

  function mountPractice(el, c, subj, ch) {
    const gen = el.querySelector("#gen-mount");
    if (gen) {
      const draw = () => {
        const qs = Gen.questions(c, subj.id, ch.id, 5, Date.now());
        gen.innerHTML = `<div class="stack">${qs
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
      gen.onclick = (e) => {
        if (e.target.closest("[data-act=regen]")) {
          e.stopPropagation();
          draw();
        }
      };
    }
    const box = el.querySelector("#bank-mount");
    if (box) {
      const all = quizItems(c, subj, ch);
      const lv = (q) => q.level || 2;
      const levels = [1, 2, 3].filter((n) => all.some((q) => lv(q) === n));
      let cur = levels.includes(2) ? 2 : levels[0];
      const draw = () => {
        const list = all.filter((q) => lv(q) === cur).slice(0, 8);
        box.innerHTML = `<div class="chips" role="group" aria-label="${t("Level")}">${levels
          .map((n) => `<button class="chip ${n === cur ? "on" : ""}" data-lvl="${n}" aria-pressed="${n === cur}">${t(SHORT[n])}</button>`)
          .join("")}</div>
          <div class="stack" style="margin-top:12px">${list
            .map(
              (q) => `<details class="card qa"><summary><span>${rich(q.q)}</span></summary><div class="a"><ul class="bank-opts">${q.options.map((o) => `<li>${rich(o)}</li>`).join("")}</ul><div class="answer">${rich(q.options[q.answer])}</div>${q.explain ? `<p class="small">${rich(q.explain)}</p>` : ""}</div></details>`
            )
            .join("")}</div>`;
      };
      draw();
      box.onclick = (e) => {
        const b = e.target.closest("[data-lvl]");
        if (!b) return;
        e.stopPropagation();
        cur = Number(b.dataset.lvl);
        draw();
        const again = box.querySelector(`[data-lvl="${cur}"]`);
        if (again) again.focus({ preventScroll: true });
      };
    }
  }

  // ---------- Master ----------

  // Skills that have at least two questions, for the one-skill check.
  function checkable(c, subj, ch) {
    const rows = Learn.chapterStates(c, subj.id, ch);
    if (rows.length < 2) return [];
    const items = quizItems(c, subj, ch);
    const by = {};
    items.forEach((q) => {
      const o = Objectives.forQuestion(c, subj.id, ch, q);
      if (o) (by[o.id] = by[o.id] || []).push(q);
    });
    return rows.filter((r) => (by[r.objective.id] || []).length >= 2).map((r) => ({ r, items: by[r.objective.id] }));
  }

  function masterSection(c, subj, ch, base, rec) {
    if (masterMode) {
      const o = masterMode.type === "obj" ? Learn.chapterStates(c, subj.id, ch).find((x) => x.objective.id === masterMode.obj) : null;
      return `<p class="small muted sec-lead">${masterMode.type === "mock" ? t("Chapter mock test: timed, no hints, answers at the end.") : t("Skill check: {skill}", { skill: o ? esc(o.objective.text) : "" })}</p><div id="mode-mount"></div>`;
    }
    const checks = checkable(c, subj, ch);
    const rows = Learn.chapterStates(c, subj.id, ch);
    const mockOk = quizItems(c, subj, ch).length >= 5;
    const formulas = ch.formulas && ch.formulas.length ? ch.formulas : null;
    return `<h2 class="block-title">${t("Chapter quiz")}</h2><div id="quiz-mount"></div>
      ${rows.length ? `<h2 class="block-title">${t("Your skills")}</h2><ul class="card obj-list master-skills">${rows.map((x) => `<li><span class="obj-text">${esc(x.objective.text)}</span>${Learn.stateChip(x.state)}</li>`).join("")}</ul>` : ""}
      ${
        checks.length
          ? `<h2 class="block-title">${t("Check one skill")}</h2><p class="small muted" style="margin:-4px 2px 12px">${t("A few questions on just one skill from this chapter.")}</p>
        <div class="stack">${checks.map(({ r, items }) => `<button class="card row skill-check" data-act="check" data-obj="${esc(r.objective.id)}" style="gap:12px;text-align:left"><span class="grow obj-text">${esc(r.objective.text)}</span>${Learn.stateChip(r.state)}<span class="btn">${t("Check skill")}</span></button>`).join("")}</div>`
          : ""
      }
      ${
        mockOk
          ? `<h2 class="block-title">${t("Chapter mock test")}</h2><div class="card row no-print" style="gap:12px"><div class="grow"><strong>${t("Mock test for this chapter")}</strong><div class="small muted">${t("{n} questions, timed, like the real exam. Answers at the end.", { n: MOCK_ROUND })}</div></div><button class="btn primary" data-act="mock">${t("Start")}</button></div>`
          : ""
      }
      ${
        formulas
          ? `<h2 class="block-title">${Views._.sheetLabel(subj.id)}</h2><section class="card formula-box"><h3>${icon("formula")} ${t(FORMULA_LABEL[subj.id])}</h3><ul>${formulas.map((f) => `<li>${rich(f)}</li>`).join("")}</ul><p style="margin-top:12px"><a class="btn" href="#/sheet/${subj.id}">${icon("print")} ${t("Open the whole {label}", { label: Views._.sheetLabel(subj.id).toLowerCase() })}</a></p></section>`
          : ""
      }`;
  }

  function mountMaster(el, c, subj, ch, base) {
    const title = `${subj.short} · ${ch.title}`;
    if (masterMode) {
      const mount = el.querySelector("#mode-mount");
      if (masterMode.type === "mock") {
        const opts = () => {
          const items = shuffle([...shuffle(quizItems(c, subj, ch)).slice(0, MOCK_ROUND - 2), ...genItems(c, subj, ch, 2)]).slice(0, MOCK_ROUND);
          return { title: `${t("Mock test")} · ${ch.title}`, items, seconds: items.length * 60, instant: false, showFrom: true, record: { subject: subj.id, cls: c, kind: "test", timed: true }, backHref: `${base}/master`, backLabel: "Back to Master", retry: () => opts() };
        };
        return Quiz.mount(mount, opts());
      }
      const row = checkable(c, subj, ch).find((x) => x.r.objective.id === masterMode.obj);
      const opts = () => ({ title, items: shuffle(row ? row.items : []).slice(0, 5), instant: true, record: { subject: subj.id, cls: c, kind: "practice" }, backHref: `${base}/master`, backLabel: "Back to Master", retry: () => opts() });
      return Quiz.mount(mount, opts());
    }
    const opts = () => ({
      title,
      items: quizRound(c, subj, ch),
      instant: true,
      record: { subject: subj.id, cls: c, kind: "chapter", chapterKey: Store.key(c, subj.id, ch.id) },
      backHref: `${base}/understand`,
      backLabel: "Back to notes",
      retry: () => opts(),
    });
    Quiz.mount(el.querySelector("#quiz-mount"), opts());
  }

  Object.assign(Views, { chapter });
})();
