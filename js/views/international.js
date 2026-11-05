// The screens of International learners (board "intl", js/international.js): Learn, Play, Explore and the progress pieces that differ from
// the Indian boards. They have no chapters of their own class. Instead everything hangs off the Practice-by-topic levels
// (data/paths/): Learn lists the topics of Maths, English and Science; Play and Explore show the games and labs of the level the
// learner is working on in each subject (the chapters that level draws on); Today's plan is in js/plan.js.
// Nothing here mentions a board or the Indian syllabus, and no Hindi or Punjabi content is shown.

(() => {
  const { D, cls, emptyState } = Views._;
  const X = International;

  const subjects = () => X.picked().map((id) => D.subject(id));
  const doneIn = (id, topic) => topic.levels.filter((lv) => (Store.pathTopic(id, topic.id).levels[lv.id] || {}).mastered).length;
  const totals = (id) => {
    const path = D.pathLoaded(id) && D.path(id);
    if (!path) return null;
    const all = path.topics.flatMap((tp) => tp.levels);
    return { done: path.topics.reduce((a, tp) => a + doneIn(id, tp), 0), total: all.length };
  };
  const levelName = (n) => t("Level {n}", { n });

  // Subject cards that open the subject's topics (Today).
  function intlSubjectCards(list) {
    return `<div class="subject-grid">${list
      .map((s) => {
        const x = totals(s.id);
        const n = Store.pathMastered(s.id);
        return `<a class="card subject-card" href="#/paths/${s.id}" style="--c:${s.color}">
          <span class="subject-icon">${SubjectIcons.html(s)}</span>
          <span class="subject-name">${esc(s.short)}</span>
          ${x ? `<span class="bar" aria-hidden="true"><i style="width:${pct(x.done, x.total)}%"></i></span>` : ""}
          <span class="subject-meta">${n ? t("{n} {n:level|levels} mastered", { n }) : t("Start with a topic")}</span>
        </a>`;
      })
      .join("")}</div>`;
  }

  // ---------- Learn ----------

  function topicRow(s, tp) {
    const done = doneIn(s.id, tp);
    const n = tp.levels.length;
    return `<a class="card chapter-row" href="#/paths/${s.id}/${tp.id}" style="--c:${s.color}">
      <span class="ch-num ${done === n ? "done" : ""}" aria-hidden="true">${done === n ? icon("check") : esc(tp.icon)}</span>
      <span class="ch-body"><span class="ch-title">${esc(tp.title)}</span><span class="ch-sum">${esc(tp.summary)}</span>
        <span class="bar" style="margin-top:8px" aria-hidden="true"><i style="width:${pct(done, n)}%"></i></span></span>
      <span class="pill ${done === n ? "good" : done ? "accent" : ""}">${t("{a} of {b} levels", { a: done, b: n })}</span></a>`;
  }

  function subjectSection(s) {
    const path = D.pathLoaded(s.id) && D.path(s.id);
    if (!path) return "";
    const x = totals(s.id);
    const f = X.focus(s.id);
    const next =
      f && !f.done
        ? `<a class="card continue intl-next" href="${X.levelHref(f)}"><div class="grow"><div class="k">${t("Next for you")}</div><div class="t">${esc(f.lv.title)}</div><div class="s">${esc(f.topic.title)} · ${levelName(f.lv.level)}</div></div><span class="go">${icon("arrow")}</span></a>`
        : "";
    return `<section class="intl-subject" aria-labelledby="is-${s.id}" style="--c:${s.color}">
      <div class="row learn-sub"><span class="subject-icon" aria-hidden="true">${SubjectIcons.html(s)}</span><h2 class="block-title grow" id="is-${s.id}" style="margin:0">${esc(s.short)}</h2>
        <a class="manage-link" href="#/paths/${s.id}">${t("See all topics")}</a></div>
      <p class="small muted" style="margin:2px 2px 10px">${t("{a} of {b} levels mastered", { a: x.done, b: x.total })}</p>
      ${next}
      <div class="list">${path.topics.map((tp) => topicRow(s, tp)).join("")}</div>
    </section>`;
  }

  function intlLearn() {
    const p = Store.state.profile;
    const list = subjects();
    return {
      title: t("Learn"),
      html: `
        ${Views._.shellHead(t("Learn"), t("Maths, English and Science practice by topic, from beginner to {year} level", { year: X.topName(p) }), "learn")}
        <div class="learn-top">
          <a class="class-pill" href="#/profile" aria-label="${t("{year} · {country}. Change in your profile.", { year: X.label(p), country: t(X.country(p.country).name) })}"><span>${t(X.country(p.country).name)}</span><b>${X.label(p)}</b>${icon("next")}</a>
        </div>
        <div class="learn-body">
          <p class="small muted" style="margin:0 2px 14px">${t("Topics climb from Level 0 to advanced. Start at your own year, or find your level with a short check. Not tied to a national curriculum.")}</p>
          ${list.length ? list.map(subjectSection).join("") : `<div class="card empty">${t("No subjects yet. Choose your subjects in your profile.")}</div>`}
          <a class="manage-link" href="#/profile">${t("Manage subjects")}</a>
        </div>`,
    };
  }

  // ---------- Play and Explore: the games and labs of the levels being worked on ----------

  // The { subject, f (focus), m (level model), ch (stand-in chapter) } of each picked subject whose level can be built.
  function working() {
    return subjects()
      .map((s) => {
        const f = X.focus(s.id);
        const m = f && Views.levelModel(s.id, f.topic.id, f.lv.id);
        return m && m.sources.length ? { s, f, m, ch: Views.levelChapter(m) } : null;
      })
      .filter(Boolean);
  }

  function gameTile(w, g) {
    const key = Games.keyFor(cls(), w.s, w.ch);
    const best = Store.gameBest(key, g.type);
    const mins = Views._.minutes(g);
    return `<a class="card game-card game-tile" href="#/play/level/${w.s.id}/${w.f.topic.id}/${w.f.lv.id}/${g.type}" style="--c:${w.s.color}">
      <span class="ti">${icon(g.icon)}</span>
      <span class="gc-body"><span class="gc-title">${t(g.title)}</span><span class="gc-sub">${esc(w.s.short)} · ${esc(w.f.lv.title)}</span><span class="gc-sub">${t(g.blurb)} · ${t("about {n} min", { n: mins })}</span></span>
      <span class="gc-best">${best ? Games.stars(best.stars) : `<span class="tiny muted">${t("New")}</span>`}</span>
    </a>`;
  }

  function intlGames() {
    const work = working();
    const blocks = work
      .map((w) => {
        const list = Games.availableFor(cls(), w.s, w.ch);
        return `<h3 class="stream-label">${esc(w.s.short)} · ${levelName(w.f.lv.level)} · ${esc(w.f.topic.title)}</h3>
          ${list.length ? `<div class="stack">${list.map((g) => gameTile(w, g)).join("")}</div>` : `<p class="small muted">${t("No games for this one yet.")}</p>`}`;
      })
      .join("");
    return {
      title: t("Play"),
      html: `${Views._.shellHead(t("Play"), t("Short games from the levels you are working on. Your best stars are saved."), "play")}
        <div class="play-main">${blocks || emptyState("game", t("No games for this one yet."), { href: "#/learn", label: t("Learn") })}
        <p class="small muted" style="margin:18px 2px 0">${t("Every level in Learn has its own games too. Open a level and choose Play.")}</p></div>`,
    };
  }

  function intlExplore() {
    const work = working();
    const cards = [];
    const seen = new Set();
    for (const w of work) {
      for (const src of w.m.sources.filter((x) => !x.own)) {
        for (const lab of typeof Labs !== "undefined" ? Labs.forChapter(src.cls, src.subj, src.ch) : []) {
          const k = lab.id + "/" + src.cls + "/" + src.subj.id + "/" + src.ch.id;
          if (seen.has(k)) continue;
          seen.add(k);
          cards.push(`<article class="card explore-item" style="--c:${w.s.color}" data-explore="lab-${esc(lab.id)}">
            <div class="row" style="align-items:flex-start"><span class="ti">${icon(lab.icon || "bolt")}</span>
              <div class="grow"><h3 class="ex-title">${esc(lab.title)}</h3><p class="small muted">${esc(lab.objective)}</p></div></div>
            <ul class="ex-rows"><li class="ex-row"><span class="ex-ch grow"><span class="small muted">${esc(w.s.short)}</span> ${esc(w.f.lv.title)}</span>
              <a class="btn primary" href="#/lab/${lab.id}/${src.cls}/${src.subj.id}/${src.ch.id}">${icon(lab.icon || "bolt")} ${t("Open lab")}</a></li></ul></article>`);
        }
      }
      // The visual games (shapes, fractions, number lines, graphs, diagrams) of the level.
      for (const type of ["balance", "angles", "fractions", "numberline", "graphs", "label"]) {
        const g = Games.get(type);
        let ok = false;
        try {
          ok = !!g && g.available(cls(), w.s, w.ch);
        } catch (e) {}
        if (ok)
          cards.push(`<article class="card explore-item" style="--c:${w.s.color}" data-explore="game-${type}">
            <div class="row" style="align-items:flex-start"><span class="ti">${icon(g.icon)}</span>
              <div class="grow"><h3 class="ex-title">${t(g.title)}</h3><p class="small muted">${t(g.blurb)}</p></div></div>
            <ul class="ex-rows"><li class="ex-row"><span class="ex-ch grow"><span class="small muted">${esc(w.s.short)}</span> ${esc(w.f.lv.title)}</span>
              <a class="btn" href="#/play/level/${w.s.id}/${w.f.topic.id}/${w.f.lv.id}/${type}">${icon("play")} ${t("Play")}</a></li></ul></article>`);
      }
    }
    return {
      title: t("Explore"),
      html: `${Views._.shellHead(t("Explore"), t("Investigate ideas by trying them. These are linked to the levels you are working on."), "explore")}
        <div class="explore-main">${cards.length ? `<div class="stack">${cards.join("")}</div>` : emptyState("lab", t("No labs for your current levels yet. Games and topics are in Play and Learn."), { href: "#/play", label: t("Play") })}</div>`,
    };
  }

  // ---------- progress ----------

  // The subject bars of the Progress page: levels mastered in each subject's topics.
  function intlProgressSubjects() {
    return subjects()
      .map((s) => {
        const x = totals(s.id);
        return `<div style="--c:${s.color}">
          <div class="top"><span><strong>${SubjectIcons.html(s)} ${esc(s.short)}</strong></span><span class="muted">${x ? t("{a} of {b} levels", { a: x.done, b: x.total }) : ""}</span></div>
          <span class="bar"><i style="width:${x ? pct(x.done, x.total) : 0}%"></i></span></div>`;
      })
      .join("");
  }

  Object.assign(Views, { intlSubjectCards, intlLearn, intlGames, intlExplore, intlProgressSubjects });
})();
