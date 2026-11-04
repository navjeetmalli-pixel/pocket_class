// Play screens. Routes:
//   #/games                                  pick a subject (or a random game) for the student's class
//   #/games/{subject}                        its chapters, with the games each one has
//   #/games/random/{subject}                 jumps into a random game of a random chapter of that subject
//   #/play/{cls}/{subject}/{chapter}         the games of one chapter (the chapter's Play tab shows the same list)
//   #/play/{cls}/{subject}/{chapter}/{type}  one game
//   #/play/level/{subject}/{topic}/{level}[/{type}]   the same for a Practice-by-topic level (built from its chapters)
// The games themselves are in js/games/ (engine.js, then one file per type).

(() => {
  const { D, cls, topbar, pageHead, emptyState, notFound, findChapter } = Views._;

  // A level is not a chapter, so games get a stand-in: a chapter whose content is read from the level's sources
  // (its own chapter and the chapters it names). `levelKey` makes best scores save under the level.
  function levelChapter(m) {
    return { id: m.level.id, title: m.level.title, sources: m.sources, gens: m.gens, terms: [], levelKey: `${m.subjectId}/${m.topic.id}/${m.level.id}` };
  }

  // What a game page needs to know: { key, cls, subj, ch, title, listHref, back, ... }.
  function chapterCtx(c, subjectId, chapterId) {
    const f = findChapter(c, subjectId, chapterId);
    if (!f) return null;
    const listHref = `#/play/${c}/${f.subj.id}/${f.ch.id}`;
    return { cls: c, subj: f.subj, ch: f.ch, key: Games.keyFor(c, f.subj, f.ch), title: f.ch.title, listHref, back: listHref, backLabel: "All games", up: `#/chapter/${c}/${f.subj.id}/${f.ch.id}/play` };
  }

  function levelCtx(subjectId, topicId, levelId) {
    const m = Views.levelModel(subjectId, topicId, levelId);
    if (!m || !m.sources.length) return null;
    const ch = levelChapter(m);
    const subj = D.subject(subjectId);
    const listHref = `#/play/level/${subjectId}/${topicId}/${levelId}`;
    return { cls: cls(), subj, ch, key: Games.keyFor(cls(), subj, ch), title: m.level.title, listHref, back: listHref, backLabel: "All games", up: `#/paths/${subjectId}/${topicId}/${levelId}` };
  }

  // One tappable card per game this chapter (or level) can play, with the best stars so far.
  function gameCards(ctx) {
    const list = Games.availableFor(ctx.cls, ctx.subj, ctx.ch);
    if (!list.length) return emptyState("🎮", t("No games for this one yet."));
    return `<div class="stack">${list
      .map((g) => {
        const best = Store.gameBest(ctx.key, g.type);
        return `<a class="card game-card" href="${ctx.listHref}/${g.type}" style="--c:${ctx.subj.color}">
          <span class="ti">${icon(g.icon)}</span>
          <span class="gc-body"><span class="gc-title">${t(g.title)}</span><span class="gc-sub">${t(g.blurb)}</span></span>
          <span class="gc-best">${best ? Games.stars(best.stars) : `<span class="tiny muted">${t("New")}</span>`}</span>
        </a>`;
      })
      .join("")}</div>`;
  }

  // The chapter page's Play tab.
  function playTab(c, subj, ch) {
    const ctx = chapterCtx(c, subj.id, ch.id);
    return `<p class="small muted" style="margin:0 2px 14px">${t("Short games made from this chapter. Your best stars are saved.")}</p>${gameCards(ctx)}`;
  }

  // A list page for one chapter or level.
  function listPage(ctx, up) {
    return {
      title: `${t("Play")} · ${ctx.title}`,
      html: `${topbar(t("Play"), up)}
        <div class="hero" style="--c:${ctx.subj.color}"><div class="eyebrow">${esc(ctx.subj.name)}</div><h1>${esc(ctx.title)}</h1><p>${t("Short games made from this chapter. Your best stars are saved.")}</p></div>
        <div style="margin-top:18px">${gameCards(ctx)}</div>`,
    };
  }

  function runPage(ctx, type) {
    if (!Games.get(type)) return notFound();
    const ok = Games.availableFor(ctx.cls, ctx.subj, ctx.ch).some((g) => g.type === type);
    if (!ok) return { title: t("Play"), html: `${topbar(t("Play"), ctx.up)}${emptyState("🎮", t("This game isn't available for this one."))}` };
    return {
      title: `${t(Games.get(type).title)} · ${ctx.title}`,
      html: `${topbar(ctx.title, ctx.listHref)}<div id="game-mount" style="--c:${ctx.subj.color}"></div>`,
      mount(el) {
        const box = el.querySelector("#game-mount");
        const def = Games.get(type);
        // A game with its own word files (the language games) loads them on first play.
        const go = () => {
          if (!def.load || def.ready()) return Games.run(box, ctx, type);
          box.innerHTML = `<div class="empty"><div class="big">🎮</div>${t("Loading…")}</div>`;
          def.load().then((loaded) => {
            if (!box.isConnected) return;
            if (loaded) return Games.run(box, ctx, type);
            box.innerHTML = `<div class="empty"><div class="big">🎮</div>${t("This game's words couldn't be loaded. Check your internet connection and try again.")}<button class="btn primary" data-act="retry">${icon("reset")} ${t("Try again")}</button></div>`;
            box.querySelector("[data-act=retry]").onclick = go;
          });
        };
        go();
      },
    };
  }

  const play = ([c, subjectId, chapterId, type]) => {
    const ctx = chapterCtx(Number(c), subjectId, chapterId);
    if (!ctx) return notFound();
    return type ? runPage(ctx, type) : listPage(ctx, ctx.up);
  };
  const playLevel = ([subjectId, topicId, levelId, type]) => {
    const ctx = levelCtx(subjectId, topicId, levelId);
    if (!ctx) return notFound();
    return type ? runPage(ctx, type) : listPage(ctx, ctx.up);
  };

  // ---------- Games home: subjects of the student's class ----------

  // Stars collected in a subject's chapters.
  function subjectStars(c, id) {
    const prefix = `${c}/${id}/`;
    return Object.keys(Store.state.games)
      .filter((k) => k.startsWith(prefix))
      .reduce((a, k) => a + Games.totalStars(k), 0);
  }

  function gamesHome() {
    const c = cls();
    const list = D.subjectsFor(c).filter((s) => D.chapters(c, s.id).length);
    return {
      title: t("Games"),
      html: `${topbar(t("Games"), "#/")}
        <p class="small muted" style="margin:-6px 2px 14px">${t("Pick a subject, then a chapter, then a game. Or let the app choose.")}</p>
        <button class="btn primary block" data-act="random">${icon("shuffle")} ${t("Random game")}</button>
        <h2 class="block-title">${t("Subjects")}</h2>
        <div class="subject-grid">${list
          .map((s) => {
            const n = subjectStars(c, s.id);
            return `<a class="card subject-card" href="#/games/${s.id}" style="--c:${s.color}">
              <span class="subject-icon">${s.icon}</span>
              <span class="subject-name">${esc(s.name)}</span>
              <span class="subject-hi">${esc(s.native)}</span>
              <span class="subject-meta">${n ? t("{n} stars collected", { n }) : t("No stars yet")}</span>
            </a>`;
          })
          .join("")}</div>`,
      mount(el) {
        el.querySelector("[data-act=random]").onclick = () => {
          const s = list[Math.floor(Math.random() * list.length)];
          if (s) location.hash = `#/games/random/${s.id}`;
        };
      },
    };
  }

  function gamesSubject([id]) {
    const c = cls();
    const subj = D.subject(id);
    if (!subj || !D.subjectsFor(c).some((x) => x.id === id)) return notFound();
    const chs = D.chapters(c, id);
    const rows = chs
      .map((ch, i) => {
        const list = Games.availableFor(c, subj, ch);
        if (!list.length) return "";
        const stars = Games.totalStars(Games.keyFor(c, subj, ch));
        return `<a class="card chapter-row" href="#/play/${c}/${id}/${ch.id}" style="--c:${subj.color}">
          <span class="ch-num">${Views._.chapterNumber(chs, i)}</span>
          <span class="ch-body">
            <span class="ch-title">${esc(ch.title)}</span>
            <span class="ch-sum game-icons">${list.map((g) => `<span class="gi" title="${esc(t(g.title))}">${icon(g.icon)}</span>`).join("")}<span class="sr-only">${list.map((g) => t(g.title)).join(", ")}</span></span>
          </span>
          ${stars ? `<span class="pill accent" aria-label="${t("{n} stars collected", { n: stars })}">★ ${stars}</span>` : ""}
        </a>`;
      })
      .join("");
    return {
      title: `${t("Games")} · ${subj.name}`,
      html: `${topbar(subj.name, "#/games")}
        ${pageHead(t("Games"), subj.name)}
        ${rows ? `<div class="list">${rows}</div>` : emptyState("🎮", t("No games for this one yet."))}`,
    };
  }

  // A random game: a random chapter of the subject that has games, and one of its games.
  function gamesRandom([id]) {
    const c = cls();
    const subj = D.subject(id);
    if (!subj || !D.subjectsFor(c).some((x) => x.id === id)) return notFound();
    const options = [];
    for (const ch of D.chapters(c, id)) for (const g of Games.availableFor(c, subj, ch)) options.push(`#/play/${c}/${id}/${ch.id}/${g.type}`);
    if (!options.length) return { redirect: "#/games" };
    return { redirect: options[Math.floor(Math.random() * options.length)] };
  }

  Object.assign(Views, { gamesHome, gamesSubject, gamesRandom, play, playLevel, playTab, levelChapter });
})();
