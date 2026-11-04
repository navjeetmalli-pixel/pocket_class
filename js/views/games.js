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

  // ---------- Play centre (#/games): continue playing, my subjects, quick challenges, chapter games ----------

  // Stars collected in a subject's chapters.
  function subjectStars(c, id) {
    const prefix = `${c}/${id}/`;
    return Object.keys(Store.state.games)
      .filter((k) => k.startsWith(prefix))
      .reduce((a, k) => a + Games.totalStars(k), 0);
  }

  // About how long one round takes, in minutes (games with a countdown say so; the others are short anyway).
  const minutes = (g) => (g && g.hud && g.hud.seconds ? Math.max(1, Math.round(g.hud.seconds / 60)) : 3);

  // A game of a chapter as a tile: its subject, the chapter (what it practises), about how long, and the stars won so far.
  function gameTile(c, subj, ch, g, key) {
    const best = Store.gameBest(key || Games.keyFor(c, subj, ch), g.type);
    return `<a class="card game-card game-tile" href="#/play/${c}/${subj.id}/${ch.id}/${g.type}" style="--c:${subj.color}">
      <span class="ti">${icon(g.icon)}</span>
      <span class="gc-body"><span class="gc-title">${t(g.title)}</span><span class="gc-sub">${esc(subj.short)} · ${esc(ch.title)}</span><span class="gc-sub">${t(g.blurb)} · ${t("about {n} min", { n: minutes(g) })}</span></span>
      <span class="gc-best">${best ? Games.stars(best.stars) : `<span class="tiny muted">${t("New")}</span>`}</span>
    </a>`;
  }

  // The games played most recently in the learner's class: [{ subj, ch, g, key, at }].
  function recentGames(c, limit) {
    const out = [];
    for (const [key, byType] of Object.entries(Store.state.games)) {
      const m = /^(\d+)\/(\w+)\/([\w-]+)$/.exec(key);
      if (!m || Number(m[1]) !== c) continue;
      const f = findChapter(c, m[2], m[3]);
      if (!f) continue;
      for (const [type, r] of Object.entries(byType || {})) {
        const g = Games.get(type);
        if (g && r && r.at) out.push({ subj: f.subj, ch: f.ch, g, key, at: r.at });
      }
    }
    return out.sort((a, b) => b.at - a.at).slice(0, limit);
  }

  // Subjects of the recently played games and of the chapter last opened (their files are loaded for this page).
  function playNeeds(c) {
    const ids = new Set(recentGames(c, 3).map((x) => x.subj.id));
    Views._.recentChapters(c, 1).forEach((r) => ids.add(r.subj.id));
    return ids.size ? [...ids] : null;
  }

  function gamesHome() {
    const c = cls();
    const band = App.band(c);
    const young = band === "1-2" || band === "3-5";
    const shown = new Set(Store.shownSubjects());
    const list = D.subjectsFor(c).filter((s) => D.chapters(c, s.id).length && shown.has(s.id));
    const cont = recentGames(c, young ? 2 : 3);
    // Games of the chapter opened last, when its subject is loaded and the chapter really has games.
    const rc = Views._.recentChapters(c, 1)[0];
    const chapterGames = rc && D.hasFull(c, rc.subj.id) ? Games.availableFor(c, rc.subj, rc.ch).slice(0, young ? 2 : 4) : [];
    const card = (s) => {
      const n = subjectStars(c, s.id);
      return Views._.subjectCard(c, s, `#/games/${s.id}`, n ? t("{n} stars collected", { n }) : t("No stars yet"));
    };
    return {
      title: t("Play"),
      html: `${Views._.shellHead(t("Play"), t("Short games from your chapters. Your best stars are saved."), "play")}
        <div class="play-main">
        ${
          cont.length
            ? `<h2 class="block-title">${t("Continue playing")}</h2><div class="stack">${cont.map((x) => gameTile(c, x.subj, x.ch, x.g, x.key)).join("")}</div>`
            : ""
        }
        <h2 class="block-title">${t("Quick challenges")}</h2>
        <div class="quick-row">
          <button type="button" class="card tool quick" data-act="random"><span class="ti">${icon("shuffle")}</span><span class="tt">${t("Random game")}</span><span class="ts">${t("Let the app choose")}</span></button>
          <button type="button" class="card tool quick" data-act="quickfire"><span class="ti">${icon("bolt")}</span><span class="tt">${t("Quick-fire")}</span><span class="ts">${t("Answer fast, keep the streak")}</span></button>
        </div>
        ${
          chapterGames.length
            ? `<h2 class="block-title">${t("Games for {chapter}", { chapter: esc(rc.ch.title) })}</h2><div class="stack">${chapterGames.map((g) => gameTile(c, rc.subj, rc.ch, g)).join("")}</div>`
            : ""
        }
        <h2 class="block-title">${t("My subjects")}</h2>
        ${list.length ? Views._.subjectGrid(c, list, card) : emptyState("🎮", t("No games for this one yet."))}
        </div>`,
      mount(el) {
        const go = (type) => {
          const s = list[Math.floor(Math.random() * list.length)];
          if (s) location.hash = `#/games/random/${s.id}${type ? `?type=${type}` : ""}`;
        };
        el.querySelector("[data-act=random]").onclick = () => go();
        el.querySelector("[data-act=quickfire]").onclick = () => go("quickfire");
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
  function gamesRandom([id, type]) {
    const c = cls();
    const subj = D.subject(id);
    if (!subj || !D.subjectsFor(c).some((x) => x.id === id)) return notFound();
    const options = [];
    for (const ch of D.chapters(c, id)) for (const g of Games.availableFor(c, subj, ch)) options.push({ type: g.type, href: `#/play/${c}/${id}/${ch.id}/${g.type}` });
    // Asked for one kind of game (Quick-fire) but this subject has none: any game of the subject is better than a dead end.
    const wanted = options.filter((o) => o.type === type);
    const pool = (wanted.length ? wanted : options).map((o) => o.href);
    if (!pool.length) return { redirect: "#/games" };
    return { redirect: pool[Math.floor(Math.random() * pool.length)] };
  }

  Object.assign(Views, { gamesHome, gamesSubject, gamesRandom, play, playLevel, playTab, levelChapter, playNeeds });
  Object.assign(Views._, { gameTile, minutes });
})();
