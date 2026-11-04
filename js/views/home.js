// Home screen (spec 9.2): one main action (continue), Today's plan, Explore / Play, a compact My progress, Subjects, and
// the secondary study tools folded into "More tools". Classes 1 to 3 get a simpler version of the same screen.

(() => {
  const { D, cls, boardNote, subjectStats, quizItems, findChapter, studentSwitcher, mountStudentSwitcher } = Views._;

  // ---------- home ----------

  // ---------- pieces of the home screen ----------

  const TAB = { notes: "Notes", guided: "Lesson", cards: "Flashcards", practice: "Practice", quiz: "Quiz", play: "Games" };
  const KIND = { review: "Review", lesson: "Lesson", path: "Lesson", practice: "Practice" };
  const subjName = (id) => (D.subject(id) ? D.subject(id).short : id);

  // Title of a plan item: the chapter (or the Practice-by-topic level).
  function itemTitle(it) {
    if (it.kind === "path") {
      const [topicId, levelId] = it.chapter.split("/");
      const topic = D.pathLoaded(it.subject) && D.path(it.subject).topics.find((x) => x.id === topicId);
      const lv = topic && topic.levels.find((x) => x.id === levelId);
      return lv ? lv.title : topic ? topic.title : t("Practice by topic");
    }
    const f = findChapter(it.cls, it.subject, it.chapter);
    return f ? f.ch.title : it.chapter;
  }

  // One line saying why an item is in the plan.
  function itemWhy(it) {
    const w = it.why || {};
    const sj = esc(subjName(it.subject));
    switch (w.w) {
      case "skills": return t("{n} {n:skill|skills} to review here", { n: w.n });
      case "mistakes": return t("{n} {n:mistake|mistakes} to fix here", { n: w.n });
      case "days": return t("Last studied {n} {n:day|days} ago, so it is due", { n: w.n });
      case "first": return t("A good place to start in {subject}", { subject: sj });
      case "next-top": return t("Next new chapter in {subject}, the subject you use most", { subject: sj });
      case "next": return t("Next new chapter in {subject}", { subject: sj });
      case "path": return t("Next level in {topic}", { topic: esc(w.topic) });
      case "weak": {
        const o = it.obj && Objectives.byKey(`${it.cls}/${it.subject}/${it.chapter}#${it.obj}`);
        return o ? t("Needs more practice: {skill}", { skill: esc(o.text) }) : t("A skill in this chapter needs more practice");
      }
    }
    return "";
  }

  function planCard(plan, young) {
    if (!plan.items.length) return "";
    const all = plan.doneCount === plan.items.length;
    const rows = plan.items
      .map(
        (it) => `<li><a class="plan-item ${it.done ? "done" : ""}" href="${it.href}" data-plan="${esc(it.id)}">
          <span class="plan-tick" aria-hidden="true">${it.done ? icon("check") : ""}</span>
          <span class="plan-body">
            <span class="plan-top"><span class="plan-kind">${t(KIND[it.kind])}</span><span class="plan-min">${t("{n} min", { n: it.min })}</span></span>
            <span class="plan-title"><span class="sr-only">${it.done ? t("Done:") : t("To do:")} </span>${esc(itemTitle(it))}</span>
            <span class="plan-why">${itemWhy(it)}</span>
          </span>${it.done ? "" : icon("next")}</a></li>`
      )
      .join("");
    return `<section class="card plan ${young ? "plan-young" : ""} mt" id="plan" aria-labelledby="plan-h">
      <div class="row" style="margin-bottom:6px"><h2 class="grow plan-h" id="plan-h">${t("Today's plan")}</h2>
        <span class="pill ${all ? "good" : "accent"}">${all ? t("All done") : t("{n} min left", { n: plan.minutes })}</span></div>
      <p class="small muted" style="margin:0 0 10px">${all ? t("Nice work. Anything more today is a bonus.") : t("{a} of {b} done. A short plan you can finish.", { a: plan.doneCount, b: plan.items.length })}</p>
      <ul class="plan-list">${rows}</ul>
      ${plan.moreDue ? `<a class="small plan-more" href="#/revise/due">${t("{n} more due. Revise all", { n: plan.moreDue })} ${icon("next")}</a>` : ""}
    </section>`;
  }

  // The one main action: resume the exact place the student was at, else the first item of the plan.
  function mainAction(c, plan) {
    const st = Store.state;
    let pl = Plan.place(st.lastAct, c);
    if (!pl && st.last) {
      const k = Store.parseKey(st.last);
      pl = k.cls === c ? Plan.place({ href: `#/chapter/${c}/${k.subject}/${k.chapterId}`, cls: c }, c) : null;
    }
    if (pl) {
      let title = "";
      let sub = "";
      if (pl.kind === "chapter" || pl.kind === "game") {
        const f = findChapter(c, pl.subject, pl.chapter);
        title = f.ch.title;
        const key = Store.key(c, pl.subject, pl.chapter);
        if (pl.kind === "game") {
          const m = /\/(\w+)$/.exec(pl.href);
          const g = m && typeof Games !== "undefined" && Games.get && Games.get(m[1]);
          sub = `${f.subj.short} · ${g && g.title ? t(g.title) : t("Games")}`;
        } else {
          const stage = pl.tab === "guided" && pl.stage ? ` · ${t("Step {i} of {n}", { i: pl.stage.i, n: pl.stage.n })}${pl.stage.label ? ` · ${esc(pl.stage.label)}` : ""}` : "";
          const unfinished = pl.tab === "guided" && typeof Store.loopGet === "function" && Store.loopGet(key);
          sub = `${f.subj.short} · ${t(TAB[pl.tab] || "Notes")}${unfinished ? ` · ${t("lesson not finished")}` : stage}`;
        }
      } else {
        const topic = D.pathLoaded(pl.subject) && D.path(pl.subject).topics.find((x) => x.id === pl.topic);
        const lv = topic && topic.levels.find((x) => x.id === pl.level);
        title = lv ? lv.title : t("Practice by topic");
        sub = `${subjName(pl.subject)} · ${topic ? topic.title : t("Practice by topic")}`;
      }
      return { k: t("Continue learning"), title, sub, href: pl.href, resume: true };
    }
    const first = plan.items.find((i) => !i.done);
    return first ? { k: t("Start here"), title: itemTitle(first), sub: `${subjName(first.subject)} · ${t(KIND[first.kind])}`, href: first.href } : null;
  }

  function exploreCard(ex) {
    if (!ex) return "";
    const f = findChapter(ex.cls, ex.subject, ex.chapter);
    if (!f) return "";
    const exp = ex.kind === "experiment";
    return `<a class="card explore mt" href="${ex.href}" style="--c:${f.subj.color}">
      <span class="ti">${icon(exp ? "bolt" : "game")}</span>
      <span class="grow"><span class="k">${exp ? t("Try an experiment") : t("Play a game")}</span><span class="t">${esc(f.ch.title)}</span><span class="small muted">${esc(f.subj.short)}</span></span>
      ${icon("next")}</a>`;
  }

  let toolsOpen = false;

  function home() {
    const st = Store.state;
    const c = cls();
    const young = Plan.young(c);
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
    const skills = Readiness.concept(c);

    const plan = Plan.today(c);
    const main = mainAction(c, plan);
    const explore = exploreCard(Plan.explore(c, plan.items));

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
    // Subject-wise view lists only the learner's picked subjects; Class-wise lists them all.
    const shown = Store.shownSubjects();
    const list = D.subjectsFor(c).filter((s) => shown.includes(s.id));
    const subjects =
      c >= 11
        ? [...new Set(list.map((s) => s.stream))]
            .map((st) => `<h3 class="stream-label">${esc(t(st))}</h3><div class="subject-grid">${list.filter((s) => s.stream === st).map(card).join("")}</div>`)
            .join("")
        : `<div class="subject-grid">${list.map(card).join("")}</div>`;

    const mistakes = Store.mistakesFor(c).length;
    const tool = (href, ic, t, sub) =>
      `<a class="card tool" href="${href}"><span class="ti">${icon(ic)}</span><span class="tt">${t}</span><span class="ts">${sub}</span></a>`;
    const tools = young
      ? [
          tool("#/games", "game", t("Games"), t("Play games for every chapter")),
          tool("#/revise/mistakes", "target", t("My mistakes"), mistakes ? t("{n} {n:question|questions} to fix", { n: mistakes }) : t("Nothing to fix yet")),
          tool("#/paths", "target", t("Practice by topic"), t("Level 0 up to advanced")),
          tool("#/sheets", "print", t("Practice sheets"), t("Make and print your own")),
          tool("#/test", "test", t("Mock test"), t("Timed test across chapters")),
          tool("#/revise", "formula", t("Formula sheets"), t("Quick revision lists")),
        ]
      : [
          tool("#/test", "test", t("Mock test"), t("Timed test across chapters")),
          tool("#/revise/mistakes", "target", t("My mistakes"), mistakes ? t("{n} {n:question|questions} to fix", { n: mistakes }) : t("Nothing to fix yet")),
          tool("#/timer", "timer", t("Focus timer"), t("Study in 25-minute blocks")),
          tool("#/revise", "formula", t("Formula sheets"), t("Quick revision lists")),
          tool("#/games", "game", t("Games"), t("Play games for every chapter")),
          tool("#/paths", "target", t("Practice by topic"), t("Level 0 up to advanced")),
          tool("#/sheets", "print", t("Practice sheets"), t("Make and print your own")),
          Papers.CLASSES.includes(c) ? tool("#/papers", "test", t("Sample papers"), t("Full board-pattern papers")) : "",
        ];

    const streakStat = Store.showStreak()
      ? `<div class="card stat"><div class="v">${Store.streak() ? "🔥 " + Store.streak() : "–"}</div><div class="l">${t("day streak")}</div></div>`
      : `<div class="card stat"><div class="v">${skills.started}</div><div class="l">${t("skills started")}</div></div>`;
    const stats = `<div class="stats">
          ${streakStat}
          <div class="card stat"><div class="v">${done}<span class="muted small">/${total}</span></div><div class="l">${t("chapters done")}</div></div>
          ${young ? "" : `<div class="card stat"><div class="v">${avg === null ? "–" : avg + "%"}</div><div class="l">${t("quiz average")}</div></div>`}
        </div>`;

    return {
      html: `
        <div class="home-head">
          <div class="grow">
            ${studentSwitcher()}
            <h1>${t("Namaste")}${st.profile.name ? `, ${esc(st.profile.name)}` : ""} 🙏</h1>
            <div class="sub">${greet} · ${t("Class {n}", { n: c })} · ${st.profile.board === "pseb" ? "PSEB" : "CBSE"}</div>
          </div>
          <a class="icon-btn profile-btn" href="#/profile" aria-label="${t("Profile")}">${Avatars.badge(st.profile, st.profile.name, "profile-pic", 36)}</a>
          <a class="icon-btn" href="#/search" aria-label="${t("Search")}">${icon("search")}</a>
          <a class="icon-btn" href="#/settings" aria-label="${t("Settings")}">${icon("settings")}</a>
        </div>
        <div class="${young ? "home-young" : "home-main"}">
        ${boardNote(c)}
        ${
          main
            ? `<a class="card continue main-action mt" id="main-action" href="${main.href}">
                <div class="grow"><div class="k">${main.k}</div><div class="t">${esc(main.title)}</div><div class="s">${main.sub}</div></div>
                <span class="go">${icon("arrow")}</span></a>`
            : ""
        }
        ${planCard(plan, young)}
        ${explore}
        <h2 class="block-title">${t("My progress")}</h2>
        ${stats}
        <a class="small progress-link" href="#/progress">${skills.started ? t("{n} {n:skill|skills} started · {m} ready to apply", { n: skills.started, m: skills.ready }) + " · " : ""}${t("See all my progress")} ${icon("next")}</a>
        <h2 class="block-title">${t("Subjects")}</h2>
        ${subjects}
        <details class="more-tools" id="more-tools" ${toolsOpen ? "open" : ""}>
          <summary class="card"><span class="grow"><strong>${t("More tools")}</strong><span class="small muted" style="display:block">${t("Mock tests, mistakes, sheets, timer and more")}</span></span><span class="chev">${icon("next")}</span></summary>
          <div class="tools">${tools.join("")}</div>
          ${young ? qotdHTML(c) : ""}
        </details>
        ${young ? "" : qotdHTML(c)}
        </div>`,
      mount(el) {
        mountStudentSwitcher(el);
        const det = el.querySelector("#more-tools");
        det.ontoggle = () => (toolsOpen = det.open);
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
        preloadForPlan(c, plan);
      },
    };
  }

  // The plan names a skill and a Practice-by-topic level only once their files are in; load them (once) and redraw.
  const tried = new Set();
  function preloadForPlan(c, plan) {
    const need = [];
    const once = (id, run) => {
      if (tried.has(id)) return;
      tried.add(id);
      need.push(run());
    };
    for (const subject of Object.keys(Store.state.paths)) if (D.PATH_SUBJECTS.includes(subject) && !D.pathLoaded(subject)) once("path/" + subject, () => D.loadPath(subject));
    const pr = plan.items.find((i) => i.kind === "practice");
    if (pr && !D.subjectsLoaded(c, [pr.subject]))
      once(`${c}/${pr.subject}`, () =>
        D.loadSubjects(c, [pr.subject]).then((ok) => {
          if (ok) Store.migrate(c);
          return ok && D.loadObjectives(c);
        })
      );
    if (!need.length) return;
    Promise.all(need).then(() => {
      if (Store.state.profile && Store.state.profile.cls === c && location.hash.replace(/^#\/?/, "") === "") App.render({ keepScroll: true });
    });
  }

  // Today's question comes from one subject, picked by the date, so only that subject's file needs to load.
  function qotdSubject(c) {
    const list = D.subjectsFor(c).filter((s) => D.chapters(c, s.id).length);
    return list.length ? list[hash(dayKey() + "/s/" + c) % list.length] : null;
  }

  function qotdItem(c) {
    const s = qotdSubject(c);
    if (!s || !D.hasFull(c, s.id)) return null;
    const pool = [];
    D.chapters(c, s.id).forEach((ch) => pool.push(...quizItems(c, s, ch, true)));
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

  Object.assign(Views, { home, qotdSubject });
})();
