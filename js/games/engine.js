// Play: a small offline game system. The engine below is the shell every game sits in (title, how-to, Start, score,
// timer, lives, streak, pause/quit, stars, results with "what you got wrong", Play again, best score saved per
// student) and a registry the game types plug into. A game type only draws its own board; see "Games" in README.md.
//
//   Games.register("match", {
//     title: "Match pairs",                        // English; shown through t()
//     blurb: "One line for the game list",
//     how: "How to play, two short sentences.",
//     icon: "match",                               // a name from ICONS in js/util.js
//     hud: { timer: "up" | "down", seconds: 60, lives: 3, streak: true },   // which counters the shell shows (all optional)
//     available(c, subj, ch) -> bool               // can this chapter (or level) make this game from its content?
//     build(c, subj, ch, seed) -> data             // pick the content for one round (pure; same seed, same round)
//     mount(el, data, api)                         // draw the board into el and play; call api.finish() at the end
//   });
//
// `ch` is a chapter, or for a Practice-by-topic level a stand-in chapter with `sources` (see js/views/games.js).
// Always read content through Games.terms / mcqs / diagrams / gens, which understand both.
//
// api (given to mount):
//   api.score(n)         add n points (negative takes points off; the score never goes below 0)
//   api.loseLife()       one life less (returns how many are left); api.lives
//   api.streak(n)        set the current streak shown in the bar (api.streakNow)
//   api.say(text)        tell screen readers (live region) what happened
//   api.hold(bool)       stop the clock while the student reads (e.g. an explanation)
//   api.onTimeUp(fn)     called once when a countdown reaches zero
//   api.miss({ prompt, yours, right, explain })   add an item to "What you got wrong" (same prompt+yours counted once)
//   api.answered(item, ok)  MCQ bookkeeping: wrong answers go to My mistakes, right ones clear them (like the quiz)
//   api.finish({ stars: 1-3, lines: [text] })      end the game and show the results
//   api.elapsed()        seconds played so far (not counting pauses); api.live(): is this game still on screen?

const Games = (() => {
  const types = {};
  const order = [];

  function register(type, def) {
    types[type] = { ...def, type };
    if (!order.includes(type)) order.push(type);
  }
  const get = (type) => types[type] || null;
  const list = () => order.map((x) => types[x]);

  // Games that this chapter (or level) can make. A game that throws is treated as not available.
  function availableFor(c, subj, ch) {
    return list().filter((g) => {
      try {
        return g.available(c, subj, ch);
      } catch (e) {
        return false;
      }
    });
  }

  // ---------- reading content ----------
  // A chapter is read from its own data; a level's stand-in chapter (`ch.sources`: [{ cls, subj, ch }]) from all of them.
  const parts = (c, subj, ch) => ch.sources || [{ cls: c, subj, ch }];

  // Key terms { term, meaning }, one per distinct term.
  function terms(c, subj, ch) {
    const seen = new Set();
    const out = [];
    for (const p of parts(c, subj, ch))
      for (const x of p.ch.terms || []) {
        const k = plain(x.term).trim().toLowerCase();
        if (!k || !plain(x.meaning).trim() || seen.has(k)) continue;
        seen.add(k);
        out.push(x);
      }
    return out;
  }

  // Saved multiple-choice questions (the chapter's quiz and its practice bank), each with `ref` for My mistakes.
  function mcqs(c, subj, ch) {
    return parts(c, subj, ch).flatMap((p) => Views.ui.quizItems(p.cls, p.subj, p.ch).map((it) => (ch.sources ? { ...it, ref: { ...it.ref, path: true } } : it)));
  }

  // Names of the question generators that fit (maths and physics), and `count` fresh questions from them.
  const gens = (c, subj, ch) => (ch.sources ? ch.gens || [] : Gen.forChapter(c, subj.id, ch.id));
  function genItems(c, subj, ch, count, seed) {
    const from = `${subj.short} · ${ch.title}`;
    return Gen.fromNames(gens(c, subj, ch), count, seed).map((q) => ({ ...q, ref: { key: null, from, cls: c, subject: subj.id } }));
  }

  // Diagrams { title, svg, caption }.
  const diagrams = (c, subj, ch) => parts(c, subj, ch).flatMap((p) => StudyData.diagramsFor(p.cls, p.subj.id, p.ch.id));

  // A seeded random source (Gen.rng): R.next(), R.int(lo, hi), R.pick(list). shuffled(list, R) is a seeded shuffle.
  const rng = (seed) => Gen.rng(seed);
  function shuffled(items, R) {
    const a = items.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(R.next() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  const newSeed = () => (Date.now() ^ Math.floor(Math.random() * 1e9)) >>> 0;

  // ---------- stars ----------
  // "★★☆" for n stars out of 3. Read out as "2 of 3 stars".
  function stars(n, extra = "") {
    n = Math.max(0, Math.min(3, n || 0));
    return `<span class="stars ${extra}" role="img" aria-label="${t("{n} of 3 stars", { n })}"><span aria-hidden="true">${"★".repeat(n)}<span class="off">${"★".repeat(3 - n)}</span></span></span>`;
  }

  // The key best scores are saved under: a chapter's key, or for a level "level:{subject}/{topic}/{level}".
  const keyFor = (c, subj, ch) => (ch.levelKey ? "level:" + ch.levelKey : Store.key(c, subj.id, ch.id));

  // Best stars over all games of a chapter or level (0 if never played).
  function totalStars(key) {
    return Object.values(Store.state.games[key] || {}).reduce((a, g) => a + (g.stars || 0), 0);
  }

  // ---------- the shell ----------
  let cur = null; // the game on screen

  function stopCur() {
    if (!cur) return;
    clearInterval(cur.timer);
    document.removeEventListener("keydown", cur.onKey);
    document.removeEventListener("visibilitychange", cur.onVis);
    cur.over = true;
    cur = null;
  }

  // ctx: { key, cls, subj, ch, back (href), backLabel }. Draws the intro (how to play, best, Start) into el.
  function run(el, ctx, type) {
    stopCur();
    const def = types[type];
    if (!def) {
      el.innerHTML = `<div class="card empty"><div class="big">🧭</div>${t("We couldn't find that page.")}</div>`;
      return;
    }
    const g = (cur = { el, ctx, def, over: false });
    intro(g);
  }

  const alive = (g) => cur === g && !g.over && g.el.isConnected;

  function intro(g) {
    const { def, ctx } = g;
    const best = Store.gameBest(ctx.key, def.type);
    g.el.innerHTML = `<section class="card game-intro" style="--c:${ctx.subj.color}">
      <span class="game-ico">${icon(def.icon)}</span>
      <h2 class="game-title">${t(def.title)}</h2>
      <p class="game-how">${t(def.how)}</p>
      <p class="small muted game-best">${best ? `${stars(best.stars)} <span>${t("Best score {n}", { n: best.best })}</span>` : t("Not played yet")}</p>
      <button class="btn primary block" data-g="start">${icon("play")} ${t("Start")}</button>
      <a class="btn block" href="${ctx.back}" style="margin-top:10px">${icon("back")} ${t(ctx.backLabel || "Back")}</a>
    </section>`;
    g.el.onclick = (e) => e.target.closest("[data-g=start]") && begin(g);
    const b = g.el.querySelector("[data-g=start]");
    if (b && g.el.contains(document.activeElement)) b.focus({ preventScroll: true });
  }

  // Starts a round: builds the content, draws the bar and the board, starts the clock.
  function begin(g) {
    const { def, ctx } = g;
    clearInterval(g.timer);
    document.removeEventListener("keydown", g.onKey);
    document.removeEventListener("visibilitychange", g.onVis);
    g.seed = newSeed();
    g.data = def.build(ctx.cls, ctx.subj, ctx.ch, g.seed);
    const hud = { ...(def.hud || {}), ...(g.data.hud || {}) };
    Object.assign(g, { hud, pts: 0, lives: hud.lives || 0, streakNow: 0, misses: [], answers: [], ms: 0, last: Date.now(), paused: false, held: false, done: false, timeUpFn: null, saidLeft: {} });

    g.el.innerHTML = `
      <div class="game-hud" role="group" aria-label="${t("Game status")}">
        <span class="hud"><span class="k">${t("Score")}</span> <b data-hud="score">0</b></span>
        ${hud.timer ? `<span class="hud"><span class="k">${t("Time")}</span> <b data-hud="time">${clock(hud.timer === "down" ? hud.seconds : 0)}</b></span>` : ""}
        ${hud.lives ? `<span class="hud"><span class="k">${t("Lives")}</span> <b data-hud="lives" aria-label="${t("{n} lives left", { n: hud.lives })}">${"♥".repeat(hud.lives)}</b></span>` : ""}
        ${hud.streak ? `<span class="hud"><span class="k">${t("Streak")}</span> <b data-hud="streak">0</b></span>` : ""}
        <button class="icon-btn" data-g="pause" aria-label="${t("Pause")}">${icon("pause")}</button>
      </div>
      <div class="game-area" data-g="area" style="--c:${ctx.subj.color}"></div>
      <div class="card game-pause" data-g="pausebox" hidden role="dialog" aria-label="${t("Paused")}">
        <h2 class="game-title">${t("Paused")}</h2>
        <p class="small muted">${t("The clock is stopped. Nothing is saved if you quit.")}</p>
        <button class="btn primary block" data-g="resume">${icon("play")} ${t("Resume")}</button>
        <a class="btn block" href="${ctx.back}" style="margin-top:10px">${icon("x")} ${t("Quit game")}</a>
      </div>
      <div class="sr-only" role="status" aria-live="polite" aria-atomic="true" data-g="live"></div>`;
    g.area = g.el.querySelector("[data-g=area]");
    g.live = g.el.querySelector("[data-g=live]");
    g.el.onclick = (e) => {
      const b = e.target.closest("[data-g]");
      if (!b) return;
      if (b.dataset.g === "pause") setPaused(g, true);
      else if (b.dataset.g === "resume") setPaused(g, false);
    };
    g.onKey = (e) => {
      if (e.key !== "Escape" || g.done || !alive(g) || e.metaKey || e.ctrlKey || e.altKey) return;
      setPaused(g, !g.paused);
    };
    g.onVis = () => document.visibilityState === "hidden" && !g.done && alive(g) && setPaused(g, true);
    document.addEventListener("keydown", g.onKey);
    document.addEventListener("visibilitychange", g.onVis);
    g.api = makeApi(g);
    def.mount(g.area, g.data, g.api);
    g.timer = setInterval(() => tick(g), 250);
    paint(g);
  }

  function makeApi(g) {
    return {
      seed: g.seed,
      get lives() {
        return g.lives;
      },
      get streakNow() {
        return g.streakNow;
      },
      live: () => alive(g) && !g.done,
      elapsed: () => g.ms / 1000,
      score(n) {
        g.pts = Math.max(0, g.pts + n);
        paint(g);
      },
      loseLife() {
        g.lives = Math.max(0, g.lives - 1);
        paint(g);
        return g.lives;
      },
      streak(n) {
        g.streakNow = n;
        paint(g);
      },
      say(text) {
        if (!g.live) return;
        g.live.textContent = "";
        setTimeout(() => alive(g) && (g.live.textContent = String(text)), 40);
      },
      hold(on) {
        g.held = !!on;
      },
      onTimeUp(fn) {
        g.timeUpFn = fn;
      },
      miss(info) {
        const same = g.misses.find((m) => m.prompt === info.prompt && m.yours === info.yours);
        if (same) same.n++;
        else g.misses.push({ ...info, n: 1 });
      },
      answered(item, ok) {
        const r = item.ref || {};
        if (!r.key) return; // made-up questions have nothing to keep
        if (ok) Store.clearMistake(r.key);
        else Store.addMistake(r.key, r.path);
        g.answers.push({ key: r.key, ok });
      },
      finish: (result) => finish(g, result || {}),
    };
  }

  // Keeps the numbers in the bar up to date.
  function paint(g) {
    if (!alive(g)) return;
    const set = (name, text, label) => {
      const n = g.el.querySelector(`[data-hud=${name}]`);
      if (!n) return;
      if (n.textContent !== text) n.textContent = text;
      if (label !== undefined) n.setAttribute("aria-label", label);
    };
    set("score", String(g.pts));
    if (g.hud.lives) set("lives", "♥".repeat(g.lives) + "♡".repeat(g.hud.lives - g.lives), t("{n} lives left", { n: g.lives }));
    if (g.hud.streak) set("streak", g.streakNow >= 3 ? `🔥 ${g.streakNow}` : String(g.streakNow));
    if (g.hud.timer) set("time", clock(g.hud.timer === "down" ? Math.max(0, g.hud.seconds - g.ms / 1000) : g.ms / 1000));
  }

  // The clock: counts only while the game runs (not paused, not held while the student reads).
  function tick(g) {
    if (!alive(g)) return stopCur();
    const now = Date.now();
    if (!g.paused && !g.held && !g.done) g.ms += now - g.last;
    g.last = now;
    paint(g);
    if (g.done || g.hud.timer !== "down") return;
    const left = g.hud.seconds - g.ms / 1000;
    for (const mark of [30, 10]) if (left <= mark && left > 0 && !g.saidLeft[mark] && g.hud.seconds > mark * 1.5) {
      g.saidLeft[mark] = true;
      g.api.say(t("{n} seconds left", { n: mark }));
    }
    if (left <= 0) {
      g.ms = g.hud.seconds * 1000;
      paint(g);
      if (g.timeUpFn) g.timeUpFn();
      else finish(g, { stars: 1 });
    }
  }

  function setPaused(g, on) {
    if (g.done || g.paused === on) return;
    g.paused = on;
    g.last = Date.now();
    const box = g.el.querySelector("[data-g=pausebox]");
    g.area.hidden = on;
    box.hidden = !on;
    // Hiding the board also hides the question, so the clock can't be paused to think.
    if (on) box.querySelector("[data-g=resume]").focus({ preventScroll: true });
    else {
      const f = g.area.querySelector("button:not([disabled]), [tabindex='0']");
      (f || g.el.querySelector("[data-g=pause]")).focus({ preventScroll: true });
    }
  }

  const MSG = [null, () => t("Good try 💪"), () => t("Well played! 🎉"), () => t("Brilliant! 🌟")];

  function finish(g, result) {
    if (g.done || !alive(g)) return;
    g.done = true;
    clearInterval(g.timer);
    document.removeEventListener("keydown", g.onKey);
    document.removeEventListener("visibilitychange", g.onVis);
    const n = Math.max(1, Math.min(3, Math.round(result.stars || 1)));
    const rec = Store.recordGame(g.ctx.key, g.def.type, { score: g.pts, stars: n, answers: g.answers });
    const wrongNow = g.answers.filter((a) => !a.ok).length;
    const { def, ctx } = g;
    const lines = [
      g.hud.timer ? t("Time {time}", { time: clock(g.ms / 1000) }) : "",
      ...(result.lines || []),
      wrongNow ? t("{n} {n:question|questions} added to My mistakes", { n: wrongNow }) : "",
    ].filter(Boolean);

    const missed = g.misses
      .map(
        (m) => `<div class="card review-item no">
          <div style="font-weight:620">${rich(m.prompt)}</div>
          <div class="opts">
            ${m.yours ? `<div class="yours">${icon("x").replace('class="i"', 'class="i" style="width:16px;height:16px;vertical-align:-3px"')} ${t("Your answer:")} ${rich(m.yours)}</div>` : ""}
            <div class="right">${icon("check").replace('class="i"', 'class="i" style="width:16px;height:16px;vertical-align:-3px"')} ${rich(m.right)}</div>
          </div>
          ${m.explain ? `<div class="why">${rich(m.explain)}</div>` : ""}
        </div>`
      )
      .join("");

    g.el.innerHTML = `
      <div class="card result-top game-result" style="--c:${ctx.subj.color}">
        ${stars(n, "big")}
        <div class="result-msg" tabindex="-1" data-g="msg">${MSG[n]()}</div>
        <div class="game-score"><b>${g.pts}</b> <span class="muted">${t("points")}</span></div>
        <div class="muted small">${rec.isBest && rec.plays > 1 ? t("New best! 🏆") : t("Best score {n}", { n: rec.best })}${lines.length ? " · " + lines.map(esc).join(" · ") : ""}</div>
        <div class="result-actions">
          <button class="btn primary" data-g="again">${icon("reset")} ${t("Play again")}</button>
          <a class="btn" href="${ctx.back}">${t(ctx.backLabel || "Back")}</a>
        </div>
      </div>
      <h2 class="block-title">${t("What you got wrong")}</h2>
      ${missed ? `<div class="stack">${missed}</div>` : `<div class="card small">${t("Nothing! Every answer was right. 🎉")}</div>`}
      <div class="sr-only" role="status" aria-live="polite" data-g="live"></div>`;
    g.el.onclick = (e) => e.target.closest("[data-g=again]") && begin(g);
    const msg = g.el.querySelector("[data-g=msg]");
    msg.focus({ preventScroll: true });
    announce(`${t("{n} of 3 stars", { n })}. ${t("{n} points", { n: g.pts })}. ${missed ? t("Some answers were wrong. They are listed below.") : t("Nothing! Every answer was right. 🎉")}`);
    window.scrollTo({ top: 0 });
  }

  // ---------- drag and drop that also works by tapping ----------
  // makeDraggable(chips, { onDrop(chip, point), onTap(chip), over(point) }): pointer drag with a floating copy that follows
  // the finger or mouse. A press that barely moves is a tap (onTap). `over` is called with the element under the pointer
  // while dragging, to highlight a target. Keyboard users use the buttons themselves (Enter / Space = onTap).
  function draggable(root, sel, { onDrop, onTap, over }) {
    root.addEventListener("pointerdown", (e) => {
      const chip = e.target.closest(sel);
      if (!chip || chip.disabled || (e.pointerType === "mouse" && e.button !== 0)) return;
      const x0 = e.clientX;
      const y0 = e.clientY;
      let ghost = null;
      let moved = false;
      const at = (ev) => document.elementsFromPoint(ev.clientX, ev.clientY);
      const move = (ev) => {
        if (!moved && Math.hypot(ev.clientX - x0, ev.clientY - y0) < 8) return;
        if (!moved) {
          moved = true;
          ghost = chip.cloneNode(true);
          ghost.classList.add("drag-ghost");
          ghost.removeAttribute("id");
          ghost.style.width = chip.offsetWidth + "px";
          document.body.appendChild(ghost);
          chip.classList.add("dragging");
        }
        ev.preventDefault();
        ghost.style.transform = `translate(${ev.clientX - chip.offsetWidth / 2}px, ${ev.clientY - 28}px)`;
        if (over) over(at(ev));
      };
      const end = (ev) => {
        document.removeEventListener("pointermove", move);
        document.removeEventListener("pointerup", end);
        document.removeEventListener("pointercancel", end);
        if (ghost) ghost.remove();
        chip.classList.remove("dragging");
        if (over) over([]);
        if (!moved) return; // a tap: the click event follows and calls onTap
        chip.dataset.dragged = "1"; // swallow the click that follows a drag
        setTimeout(() => delete chip.dataset.dragged, 0);
        if (ev.type === "pointerup") onDrop(chip, at(ev));
      };
      document.addEventListener("pointermove", move, { passive: false });
      document.addEventListener("pointerup", end);
      document.addEventListener("pointercancel", end);
    });
    root.addEventListener("click", (e) => {
      const chip = e.target.closest(sel);
      if (!chip || chip.dataset.dragged) return;
      onTap(chip);
    });
  }

  return { register, get, list, availableFor, terms, mcqs, gens, genItems, diagrams, rng, shuffled, newSeed, stars, keyFor, totalStars, run, stop: stopCur, draggable };
})();
