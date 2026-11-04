// Practice by topic: subject -> topic -> a ladder of levels (Level 0 up to advanced), built from chapters that already exist
// in other classes (data/paths/{subject}.js, see CONTENT_GUIDE.md). Routes:
//   #/paths                              the four subjects
//   #/paths/{subject}                    its topics, with progress
//   #/paths/{subject}/{topic}            the ladder: locked / unlocked / mastered levels, "Find my level"
//   #/paths/{subject}/{topic}/{level}    notes, a worked example and 10 practice questions (80% masters the level)
//   #/paths/{subject}/{topic}/find-my-level   the starting check
//   #/pathsheet/{subject}/{topic}/{level}     a printable worksheet (js/sheets.js)
// Progress is saved per student (Store.pathTopic / recordLevel / setPathStart).

(() => {
  const { D, cls, topbar, pageHead, emptyState, notFound, quizItems } = Views._;

  const SET = 10; // questions in one round
  const passPct = () => Math.round(Mastery.config.pathPass * 100); // percent that masters a level (js/mastery.js)
  const CHECK_ID = "find-my-level";

  const levelName = (n) => t("Level {n}", { n });
  const href = (...parts) => "#/paths/" + parts.join("/");

  // ---------- the model of one level ----------

  // Everything a level draws on for this student: its own chapter and the chapters it names (for the student's board),
  // each as { cls, subj, ch }, plus the names of the generators that fit.
  function levelModel(subjectId, topicId, levelId) {
    const path = D.path(subjectId);
    const topic = path && path.topics.find((x) => x.id === topicId);
    const idx = topic ? topic.levels.findIndex((x) => x.id === levelId) : -1;
    if (idx < 0) return null;
    const level = topic.levels[idx];
    const sources = [];
    if (level.own) sources.push({ cls: 0, subj: D.subject(D.PATH_PREFIX + subjectId), ch: level.own, own: true });
    for (const r of (level.from || []).filter(D.refActive)) {
      const subj = D.subject(r.subject);
      const ch = D.hasFull(r.cls, r.subject) && D.chapters(r.cls, r.subject).find((c) => c.id === r.chapter);
      if (subj && ch) sources.push({ cls: r.cls, subj, ch });
    }
    const gens = [...new Set([...sources.filter((s) => !s.own).flatMap((s) => Gen.forChapter(s.cls, s.subj.id, s.ch.id)), ...(level.gens || [])])];
    return { subjectId, subjectName: D.subject(subjectId).name, path, topic, idx, level, sources, gens };
  }

  // The { cls, subject } pairs whose files a level needs.
  const levelPairs = (level) => (level.from || []).filter(D.refActive).map((r) => ({ cls: r.cls, subject: r.subject }));

  // What the router must load before drawing path pages (see needs in js/app.js): the path files, then the chapter files.
  function pathNeeds(p) {
    const m = p.match(/^paths\/(\w+)(?:\/([\w-]+))?(?:\/([\w-]+))?$/) || p.match(/^pathsheet\/(\w+)\/([\w-]+)\/([\w-]+)/) || p.match(/^play\/level\/(\w+)\/([\w-]+)\/([\w-]+)/);
    if (!m || !D.PATH_SUBJECTS.includes(m[1])) return null;
    const out = { paths: [m[1]], pairs: [] };
    const path = D.path(m[1]);
    const topic = path && path.topics.find((x) => x.id === m[2]);
    if (!topic || !m[3]) return out;
    out.pairs = m[3] === CHECK_ID ? topic.levels.flatMap((l) => levelPairs(l)) : levelPairs(topic.levels.find((l) => l.id === m[3]) || {});
    return out;
  }

  // ---------- progress ----------

  // "mastered" | "open" | "locked" for level number `i` of a topic. A level is open when it is the first, when the starting
  // check placed the student at or above it, or when the one before it is mastered.
  function levelState(subjectId, topic, i) {
    const T = Store.pathTopic(subjectId, topic.id);
    if ((T.levels[topic.levels[i].id] || {}).mastered) return "mastered";
    return i === 0 || i <= T.start || (T.levels[topic.levels[i - 1].id] || {}).mastered ? "open" : "locked";
  }
  const masteredIn = (subjectId, topic) => topic.levels.filter((l, i) => levelState(subjectId, topic, i) === "mastered").length;
  // The level to work on next: the first one that is open and not mastered.
  const nextIndex = (subjectId, topic) => {
    const i = topic.levels.findIndex((l, j) => levelState(subjectId, topic, j) === "open");
    return i < 0 ? topic.levels.length - 1 : i;
  };

  // ---------- questions ----------

  // Where a made-up question belongs for the learning record: the chapter (of the level's sources) whose generators made it.
  function genRef(m, q, from) {
    const src = m.sources.find((x) => !x.own && Gen.forChapter(x.cls, x.subj.id, x.ch.id).includes(q.gen)) || m.sources.find((x) => !x.own) || m.sources[0];
    if (!src) return { key: null, from, cls: cls(), subject: m.subjectId, path: true };
    return { key: null, from, cls: src.cls, subject: src.subj.id, chapter: src.ch.id, path: true };
  }

  const easy = (it) => it.level || 2;

  // 10 questions: saved ones from every source (spread across them) plus a few made-up ones where generators fit,
  // arranged from easy to hard. Wrong answers are kept in My mistakes (saved questions only).
  function buildSet(m, count = SET) {
    const from = `${m.subjectName} · ${m.level.title}`;
    const saved = m.sources.map((s) => shuffle(quizItems(s.cls, s.subj, s.ch)).map((it) => ({ ...it, ref: { ...it.ref, path: true } })));
    const total = saved.reduce((a, g) => a + g.length, 0);
    const nGen = m.gens.length ? Math.min(count, Math.max(count - total, Math.min(3, Math.floor(count * 0.3)))) : 0;
    const picked = [];
    for (let again = true; again && picked.length < count - nGen; ) {
      again = false;
      for (const g of saved)
        if (g.length && picked.length < count - nGen) {
          picked.push(g.shift());
          again = true;
        }
    }
    const gen = Gen.fromNames(m.gens, nGen, (Date.now() + Math.floor(Math.random() * 1e6)) >>> 0).map((q) => ({ ...q, ref: genRef(m, q, from) }));
    // Keep a stable sort by difficulty after a shuffle, so the order inside a difficulty changes every time.
    return shuffle([...picked, ...gen]).sort((a, b) => easy(a) - easy(b));
  }

  // Up to three questions for one level of the starting check, easy ones first.
  function checkItems(m) {
    const all = shuffle(m.sources.flatMap((s) => quizItems(s.cls, s.subj, s.ch)).map((it) => ({ ...it, ref: { ...it.ref, path: true } })));
    const mild = all.filter((it) => easy(it) <= 2);
    const pool = mild.length >= 3 ? mild : all;
    const items = pool.slice(0, 3);
    if (items.length < 3) items.push(...Gen.fromNames(m.gens, 3 - items.length, Date.now() >>> 0).map((q) => ({ ...q, ref: genRef(m, q, m.level.title) })));
    return items;
  }

  // ---------- pages ----------

  function picker() {
    let list = D.paths();
    // Subject-wise learners see the Practice-by-topic subjects they picked (every one if none of theirs has a ladder).
    if (Store.state.profile.view === "subject") {
      const mine = new Set(Store.selectedSubjects());
      const some = list.filter((s) => mine.has(s.id));
      if (some.length) list = some;
    }
    return {
      title: t("Practice by topic"),
      html: `${topbar(t("Practice by topic"), "#/learn")}
        <p class="small muted" style="margin:-6px 2px 16px">${t("Pick a subject, then a topic. Each topic is a ladder of levels from Level 0 up to advanced. Start where you are and climb.")}</p>
        <div class="subject-grid">${list
          .map((s) => {
            const n = Store.pathMastered(s.id);
            return `<a class="card subject-card" href="${href(s.id)}" style="--c:${s.color}">
              <span class="subject-icon">${SubjectIcons.html(s)}</span>
              <span class="subject-name">${esc(s.name)}</span>
              <span class="subject-hi">${esc(s.native)}</span>
              <span class="subject-meta">${n ? t("{n} {n:level|levels} mastered", { n }) : t("Level 0 up to advanced")}</span>
            </a>`;
          })
          .join("")}</div>`,
    };
  }

  function subjectPage([id]) {
    const path = D.path(id);
    if (!path) return notFound();
    const subj = D.subject(id);
    return {
      title: path.title,
      html: `${topbar(path.title, "#/paths")}
        ${pageHead(path.title, path.titleLocal || subj.native)}
        <p class="small muted" style="margin:-6px 2px 16px">${t("Choose a topic. You can find your level with a short check, or start from Level 0.")}</p>
        <div class="list">${path.topics
          .map((tp) => {
            const done = masteredIn(id, tp);
            const n = tp.levels.length;
            return `<a class="card chapter-row" href="${href(id, tp.id)}" style="--c:${subj.color}">
              <span class="ch-num ${done === n ? "done" : ""}" aria-hidden="true">${done === n ? icon("check") : esc(tp.icon)}</span>
              <span class="ch-body">
                <span class="ch-title">${esc(tp.title)}</span>
                <span class="ch-sum">${esc(tp.summary)}</span>
                <span class="bar" style="margin-top:8px" aria-hidden="true"><i style="width:${pct(done, n)}%"></i></span>
              </span>
              <span class="pill ${done === n ? "good" : done ? "accent" : ""}">${t("{a} of {b} levels", { a: done, b: n })}</span>
            </a>`;
          })
          .join("")}</div>`,
    };
  }

  function topicPage([id, topicId]) {
    const path = D.path(id);
    const topic = path && path.topics.find((x) => x.id === topicId);
    if (!topic) return notFound();
    const subj = D.subject(id);
    const T = Store.pathTopic(id, topicId);
    const done = masteredIn(id, topic);
    const next = nextIndex(id, topic);
    const rows = topic.levels
      .map((lv, i) => {
        const st = levelState(id, topic, i);
        const r = T.levels[lv.id] || {};
        const here = st === "open" && i === next && done < topic.levels.length;
        const badge =
          st === "mastered"
            ? `<span class="pill good">${t("Mastered")} · ${r.best}%</span>`
            : st === "locked"
              ? `<span class="pill">${icon("lock").replace('class="i"', 'class="i" style="width:14px;height:14px;vertical-align:-2px"')} ${t("Skip ahead")}</span>`
              : `<span class="pill accent">${here ? t("Start here") : t("Unlocked")}${r.best ? ` · ${t("best {n}%", { n: r.best })}` : ""}</span>`;
        return `<li><a class="card chapter-row" href="${href(id, topicId, lv.id)}" style="--c:${subj.color}" ${here ? 'aria-current="step"' : ""}>
          <span class="ch-num ${st === "mastered" ? "done" : ""}" aria-hidden="true">${st === "mastered" ? icon("check") : st === "locked" ? icon("lock") : lv.level}</span>
          <span class="ch-body">
            <span class="ch-tag">${levelName(lv.level)}</span>
            <span class="ch-title">${esc(lv.title)}</span>
            <span class="ch-sum">${esc(lv.goal)}</span>
          </span>${badge}</a></li>`;
      })
      .join("");
    return {
      title: topic.title,
      html: `${topbar(topic.title, href(id))}
        <div class="hero" style="--c:${subj.color}">
          <div class="eyebrow">${esc(path.title)} · ${t("{a} of {b} levels", { a: done, b: topic.levels.length })}</div>
          <h1>${esc(topic.icon)} ${esc(topic.title)}</h1>
          <p>${esc(topic.summary)}</p>
          <span class="bar" aria-hidden="true"><i style="width:${pct(done, topic.levels.length)}%"></i></span>
          <div class="hero-actions">
            <a class="btn primary" href="${href(id, topicId, CHECK_ID)}">${icon("target")} ${t("Find my level")}</a>
            <button class="btn" data-act="zero">${t("Start from Level 0")}</button>
          </div>
        </div>
        ${T.checked ? `<p class="small muted" style="margin:12px 2px 0">${t("Your starting check placed you at {level}.", { level: levelName(topic.levels[Math.min(T.start, topic.levels.length - 1)].level) })}</p>` : ""}
        <h2 class="block-title">${t("The ladder")}</h2>
        <ol class="list" style="list-style:none;padding:0" aria-label="${t("Levels")}">${rows}</ol>
        <p class="tiny muted" style="margin-top:12px">${t("Score {n}% or more in a level to master it and unlock the next. You can still open any level.", { n: passPct() })}</p>`,
      mount(el) {
        el.onclick = (e) => {
          if (!e.target.closest("[data-act=zero]")) return;
          Store.setPathStart(id, topicId, 0, false);
          location.hash = href(id, topicId, topic.levels[0].id);
        };
      },
    };
  }

  // Short notes for a level: its own chapter's notes, or the first chapter it names.
  function notesHTML(m) {
    const src = m.sources.find((s) => s.own) || m.sources.find((s) => s.ch.notes && s.ch.notes.length);
    if (!src) return "";
    const notes = src.own ? src.ch.notes : src.ch.notes.slice(0, 2);
    const formulas = src.ch.formulas && src.ch.formulas.length ? src.ch.formulas.slice(0, 5) : [];
    const label = Views._.FORMULA_LABEL[m.subjectId] || "Remember";
    return `<h2 class="block-title">${t("Short notes")}</h2>
      <div class="stack">${notes
        .map((n) => `<article class="card note"><h3>${esc(n.heading)}</h3><ul>${n.points.map((p) => `<li>${rich(p)}</li>`).join("")}</ul></article>`)
        .join("")}
        ${formulas.length ? `<section class="card formula-box"><h3>${icon("formula")} ${t(label)}</h3><ul>${formulas.map((f) => `<li>${rich(f)}</li>`).join("")}</ul></section>` : ""}</div>`;
  }

  // One solved example if a chapter has one, else a made-up question with its steps.
  function exampleHTML(m) {
    const ex = m.sources.flatMap((s) => s.ch.examples || [])[0];
    let q, steps, answer;
    if (ex) ({ q, steps, answer } = ex);
    else {
      const g = Gen.fromNames(m.gens, 1, hash(m.level.id))[0];
      if (!g) return "";
      q = g.q;
      steps = g.steps;
      answer = g.options[0];
    }
    return `<h2 class="block-title">${t("Worked example")}</h2>
      <article class="card example">
        <p class="q">${rich(q)}</p>
        <details class="reveal"><summary>${t("Show solution")}</summary>
          <ol class="steps">${steps.map((s) => `<li>${rich(s)}</li>`).join("")}</ol>
          <div class="answer">${rich(answer)}</div>
        </details>
      </article>`;
  }

  function levelPage([id, topicId, levelId]) {
    if (levelId === CHECK_ID) return checkPage([id, topicId]);
    const m = levelModel(id, topicId, levelId);
    if (!m) return notFound();
    const { topic, level, idx } = m;
    const subj = D.subject(id);
    const st = levelState(id, topic, idx);
    const r = Store.pathTopic(id, topicId).levels[levelId] || {};
    const prev = topic.levels[idx - 1];
    const next = topic.levels[idx + 1];
    const ladder = href(id, topicId);
    const usable = m.sources.length > 0;
    const chapters = m.sources.filter((s) => !s.own);

    const opts = () => ({
      title: `${m.subjectName} · ${level.title}`,
      items: buildSet(m),
      instant: true,
      showFrom: true,
      record: { subject: D.PATH_PREFIX + id, cls: cls(), kind: "path" },
      onDone(score, total) {
        const res = Store.recordLevel(id, topicId, levelId, pct(score, total));
        announce(pct(score, total) >= passPct() ? (next ? t("Level mastered. {level} is unlocked.", { level: levelName(next.level) }) : t("Level mastered. You have finished this topic.")) : t("Not mastered yet. You need {n}%.", { n: passPct() }));
        return res;
      },
      resultExtra(score, total) {
        const ok = pct(score, total) >= passPct();
        return `<div class="card path-result ${ok ? "good" : ""}" style="margin-top:14px">
          <strong>${ok ? t("Level mastered! 🎉") : t("Not mastered yet")}</strong>
          <p class="small muted" style="margin-top:6px">${
            ok
              ? next
                ? t("{level} is unlocked.", { level: levelName(next.level) })
                : t("You have finished the top level of this topic.")
              : t("You need {n}% to master a level. Read the notes again, then try a new set.", { n: passPct() })
          }</p>
          <div class="row wrap" style="margin-top:10px">
            ${ok && next ? `<a class="btn primary" href="${href(id, topicId, next.id)}">${t("Go to {level}", { level: levelName(next.level) })} ${icon("arrow")}</a>` : ""}
            <a class="btn" href="${href(id, topicId, levelId)}" data-act="notes">${t("Read the notes again")}</a>
          </div></div>`;
      },
      backHref: ladder,
      backLabel: "Back to the ladder",
      retry: () => opts(),
    });

    return {
      title: `${levelName(level.level)} · ${level.title}`,
      html: `${topbar(topic.title, ladder)}
        <div class="hero" style="--c:${subj.color}">
          <div class="eyebrow">${esc(m.subjectName)} · ${levelName(level.level)}</div>
          <h1>${esc(level.title)}</h1>
          <p>${esc(level.goal)}</p>
          <div class="row wrap" style="margin-top:12px">${st === "mastered" ? `<span class="pill good">${t("Mastered")} · ${r.best}%</span>` : r.best ? `<span class="pill accent">${t("best {n}%", { n: r.best })}</span>` : ""}</div>
        </div>
        ${
          st === "locked"
            ? `<div class="card small mt" style="background:color-mix(in srgb, var(--gold) 14%, var(--surface))">${icon("lock").replace('class="i"', 'class="i" style="width:16px;height:16px;vertical-align:-3px"')} ${t("You are skipping ahead. This level opens fully when you master {level}, but you can try it now. If it feels hard, go back a level first. That is how everyone learns.", { level: levelName(prev.level) })}</div>`
            : ""
        }
        ${
          usable
            ? `<div id="level-intro">
          ${notesHTML(m)}
          ${exampleHTML(m)}
          ${
            chapters.length
              ? `<h2 class="block-title">${t("Read the full chapter")}</h2><div class="list">${chapters
                  .map((s) => `<a class="card chapter-row" href="#/chapter/${s.cls}/${s.subj.id}/${s.ch.id}/understand" style="--c:${s.subj.color}"><span class="ch-num" aria-hidden="true">${SubjectIcons.html(s.subj)}</span><span class="ch-body"><span class="ch-tag">${t("Class {n}", { n: s.cls })} · ${esc(s.subj.short)}</span><span class="ch-title">${esc(s.ch.title)}</span></span>${icon("next")}</a>`)
                  .join("")}</div>`
              : ""
          }
          <div class="stack mt no-print">
            <button class="btn primary block" data-act="practice">${icon("practice")} ${t("Practice {n} questions", { n: SET })}</button>
            ${Games.availableFor(cls(), subj, Views.levelChapter(m)).length ? `<a class="btn block" href="#/play/level/${id}/${topicId}/${levelId}">${icon("game")} ${t("Play")}</a>` : ""}
            <a class="btn block" href="#/pathsheet/${id}/${topicId}/${levelId}">${icon("print")} ${t("Printable worksheet")}</a>
          </div>
        </div>
        <div id="quiz-mount" style="--c:${subj.color}" hidden></div>`
            : emptyState("📚", t("This level has no questions yet."))
        }
        <div class="pager no-print" style="margin-top:22px">
          ${prev ? `<a class="card" href="${href(id, topicId, prev.id)}"><div class="k">${t("← Previous")}</div><div class="t">${levelName(prev.level)} · ${esc(prev.title)}</div></a>` : "<span class='grow'></span>"}
          ${next ? `<a class="card next" href="${href(id, topicId, next.id)}"><div class="k">${t("Next →")}</div><div class="t">${levelName(next.level)} · ${esc(next.title)}</div></a>` : "<span class='grow'></span>"}
        </div>`,
      mount(el) {
        const intro = el.querySelector("#level-intro");
        const box = el.querySelector("#quiz-mount");
        if (!intro) return;
        el.onclick = (e) => {
          if (e.target.closest("[data-act=practice]")) {
            intro.hidden = true;
            box.hidden = false;
            Quiz.mount(box, opts());
            window.scrollTo(0, 0);
          } else if (e.target.closest("[data-act=notes]")) {
            // "Read the notes again": the link points at this very page, so show the notes instead of reloading.
            e.preventDefault();
            box.hidden = true;
            intro.hidden = false;
            window.scrollTo(0, 0);
          }
        };
      },
    };
  }

  // ---------- find my level ----------

  let chk = null; // the check in progress: { m: [models], st }

  function checkPage([id, topicId]) {
    const path = D.path(id);
    const topic = path && path.topics.find((x) => x.id === topicId);
    if (!topic) return notFound();
    const models = topic.levels.map((l) => levelModel(id, topicId, l.id));
    return {
      title: t("Find my level"),
      html: `${topbar(t("Find my level"), href(id, topicId))}
        <p class="small muted" style="margin:-6px 2px 14px">${t("A few questions from each level, easiest first. It stops when a level is too hard, and you start there. There is no pass or fail.")}</p>
        <div id="check-mount" style="--c:${D.subject(id).color}"></div>`,
      mount(el) {
        runCheck(el.querySelector("#check-mount"), id, topic, models);
      },
    };
  }

  function runCheck(box, id, topic, models) {
    const pools = models.map((m) => (m ? checkItems(m) : []));
    const s = (chk = { box, li: 0, asked: 0, right: 0, item: null, picked: null, result: null });
    const take = () => {
      const it = pools[s.li][s.asked];
      s.item = it ? { ...it, order: it.keepOrder ? [0, 1, 2, 3] : shuffle([0, 1, 2, 3]) } : null;
      s.picked = null;
    };
    const finish = (start, all) => {
      s.result = { start, all };
      Store.setPathStart(id, topic.id, start, true);
      announce(t("Your starting point is {level}.", { level: levelName(topic.levels[start].level) }));
      draw();
    };
    // After an answer is shown: a level is passed by 2 right in 2, or 2 right in 3; two misses in a row stop the check there.
    const pass = () => {
      s.li++;
      s.asked = s.right = 0;
      if (s.li >= topic.levels.length) return finish(topic.levels.length - 1, true);
      take();
      if (!s.item) return finish(s.li, false);
      draw();
    };
    const advance = () => {
      const { asked, right } = s;
      const more = !!pools[s.li][asked];
      if (asked === 2 && right === 2) return pass();
      if (asked === 2 && right === 0) return finish(s.li, false);
      if (asked >= 3) return right >= 2 ? pass() : finish(s.li, false);
      if (!more) return right === asked ? pass() : finish(s.li, false);
      take();
      draw();
    };

    function draw() {
      const had = box.contains(document.activeElement);
      box.innerHTML = s.result ? resultHTML() : questionHTML();
      if (had || s.result) {
        const f = box.querySelector('[data-act="next"], .option:not(.locked), .result-actions a');
        if (f) f.focus({ preventScroll: true });
      }
    }

    function questionHTML() {
      const it = s.item;
      const locked = s.picked !== null;
      const lv = topic.levels[s.li];
      const options = it.order
        .map((orig, k) => {
          let c = "option";
          if (locked) {
            c += " locked";
            if (orig === it.answer) c += " correct";
            else if (orig === s.picked) c += " wrong";
          }
          const state = !locked ? "" : orig === it.answer ? `<span class="sr-only">${t("Correct answer:")} </span>` : orig === s.picked ? `<span class="sr-only">${t("Your answer:")} </span>` : "";
          return `<button class="${c}" data-pick="${orig}">${state}<span class="letter" aria-hidden="true">${"ABCD"[k]}</span><span>${rich(it.options[orig])}</span></button>`;
        })
        .join("");
      const ok = s.picked === it.answer;
      const footer = locked
        ? `<div class="feedback ${ok ? "good" : "bad"}"><div class="h">${ok ? t("Correct! 🎉") : t("Not quite")}</div>
            ${ok ? "" : `<div>${t("Correct answer:")} <strong>${rich(it.options[it.answer])}</strong></div>`}<div>${rich(it.explain)}</div></div>
           <div class="quiz-nav"><button class="btn primary" data-act="next">${t("Next question")} ${icon("arrow")}</button></div>`
        : "";
      return `<div class="card">
          <div class="quiz-head"><span>${t("Checking {level}", { level: levelName(lv.level) })}</span><span class="quiz-clock">${t("Question {n}", { n: s.asked + 1 })}</span></div>
          <div class="quiz-q" id="quiz-q">${rich(it.q)}</div>
          <div class="options" role="group" aria-labelledby="quiz-q">${options}</div>
          ${footer}
        </div>
        <p class="tiny muted center kbd-tip" style="margin-top:10px">${t("Tip: press 1–4 to answer, Enter for next.")}</p>`;
    }

    function resultHTML() {
      const { start, all } = s.result;
      const lv = topic.levels[start];
      return `<div class="card result-top" role="status">
          <div class="result-msg">${all ? t("You passed every level! 🌟") : t("Your starting point")}</div>
          <div class="ring" style="--p:${pct(start + (all ? 1 : 0), topic.levels.length)};--ring:var(--good)"><div><span class="v">${lv.level}</span><span class="l">${t("Level")}</span></div></div>
          <h2 style="font-size:20px;margin-top:6px">${esc(lv.title)}</h2>
          <p class="muted small" style="margin-top:6px">${all ? t("Try the top level to master it.") : esc(lv.goal)}</p>
          <div class="result-actions">
            <a class="btn primary" href="${href(id, topic.id, lv.id)}">${t("Start {level}", { level: levelName(lv.level) })} ${icon("arrow")}</a>
            <button class="btn" data-act="zero">${t("Start from Level 0")}</button>
            <a class="btn" href="${href(id, topic.id)}">${t("See the ladder")}</a>
          </div></div>`;
    }

    function pick(orig) {
      if (s.picked !== null || !s.item) return;
      s.picked = orig;
      const ok = orig === s.item.answer;
      s.asked++;
      if (ok) s.right++;
      const k = s.item.ref && s.item.ref.key;
      if (k) (ok ? Store.clearMistake(k) : Store.addMistake(k, true));
      Learn.record([Learn.answerEvent(s.item, ok, { picked: orig, source: "path" })]);
      draw();
      const f = box.querySelector(".feedback");
      if (f) announce(f.textContent);
    }

    box.onclick = (e) => {
      const b = e.target.closest("[data-pick],[data-act]");
      if (!b) return;
      if (b.dataset.pick !== undefined) pick(Number(b.dataset.pick));
      else if (b.dataset.act === "next") advance();
      else if (b.dataset.act === "zero") {
        Store.setPathStart(id, topic.id, 0, true);
        location.hash = href(id, topic.id, topic.levels[0].id);
      }
    };

    take();
    if (!s.item) finish(0, false);
    else draw();
  }

  document.addEventListener("keydown", (e) => {
    if (!chk || !chk.box.isConnected || chk.result || e.metaKey || e.ctrlKey || e.altKey) return;
    if (e.target !== document.body && !chk.box.contains(e.target)) return;
    const k = e.key.toLowerCase();
    const idx = "1234".indexOf(k) >= 0 ? "1234".indexOf(k) : "abcd".indexOf(k);
    if (idx >= 0 && k.length === 1 && chk.item) {
      const b = chk.box.querySelector(`.option:nth-child(${idx + 1})`);
      if (b && chk.picked === null) b.click();
      e.preventDefault();
    } else if (e.key === "Enter" && chk.picked !== null && !e.target.closest("button, a")) {
      const n = chk.box.querySelector('[data-act="next"]');
      if (n) n.click();
      e.preventDefault();
    }
  });

  Object.assign(Views, { pathsPicker: picker, pathsSubject: subjectPage, pathsTopic: topicPage, pathsLevel: levelPage, pathNeeds, levelModel });
})();
