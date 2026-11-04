// Language games, shared kit. The five language game types (letters.js, matras.js, words.js, sentences.js, grammar.js in this
// folder) read their words from small data files (data/games/*.js, loaded on first play) and use this file for:
//   - which chapters and Practice-by-topic levels get which game (RANGES, LEVEL_TOPICS, applies),
//   - the word lists for a class (matras / words / sentences / grammar),
//   - builder(): the "put the tiles in the boxes" board that the matra builder, word builder and sentence builder share
//     (tap a tile, or drag it into a box; tap a filled box to take the tile back; Check shows which boxes are right).
// The file has no page code at load time, so scripts/validate.js can run it in Node to check the data.

const LangGames = (() => {
  const store = {};
  const FILES = ["data/games/letters.js", "data/games/matras.js", "data/games/words.js", "data/games/sentences.js", "data/games/grammar.js", "data/games/strokes.js"];
  const add = (name, value) => (store[name] = value);
  const get = (name) => store[name] || {};
  const ready = () => StudyData.filesLoaded(FILES);
  const load = () => StudyData.loadFiles(FILES);

  // Language of a subject: the Gurmukhi, Devanagari or English subject.
  const LANG = { english: "en", englishpb: "en", hindi: "hi", hindipb: "hi", punjabi: "pa" };
  const SUBJECT = { en: "english", hi: "hindi", pa: "punjabi" };

  // The classes each game is made for, per language: [first, last].
  const RANGES = {
    letters: { pa: [1, 2], hi: [1, 2], en: [1, 2] },
    matras: { pa: [1, 3], hi: [1, 3] },
    words: { en: [1, 5] },
    sentences: { en: [2, 8], hi: [2, 8], pa: [2, 8] },
    grammar: { en: [2, 10], hi: [2, 10], pa: [2, 10] },
    trace: { pa: [1, 3], hi: [1, 3], en: [1, 3] },
  };
  // Practice-by-topic levels that get a game: the path topics, and the level numbers (Level 0 is the youngest).
  const LEVEL_TOPICS = {
    letters: { pa: { topics: ["letters"], max: 2 }, en: { topics: ["phonics"], max: 1 } },
    matras: { pa: { topics: ["matras"], min: 1, max: 3 } },
    words: { en: { topics: ["phonics", "vocabulary"], max: 5 } },
    sentences: { en: { topics: ["sentences"], max: 8 }, pa: { topics: ["sentences"], max: 8 } },
    trace: { pa: { topics: ["letters"], max: 2 }, en: { topics: ["phonics"], max: 1 } },
    grammar: { en: { topics: ["nouns", "verbs", "describing"], min: 2, max: 10 }, pa: { topics: ["naanv", "gender-number", "verbs"], min: 2, max: 10 } },
  };

  const clamp = (n, a, b) => Math.max(a, Math.min(b, n));

  // What the game is being made for: { lang, level (is it a Practice-by-topic level), topic, cls }, or null if not a language subject.
  function info(c, subj, ch) {
    const lang = LANG[subj && subj.id];
    if (!lang || (typeof Release !== "undefined" && Release.langLocked(lang))) return null; // Hindi and Punjabi games are hidden by the release lock
    if (ch && ch.levelKey) {
      const [sid, topicId, levelId] = ch.levelKey.split("/");
      const path = StudyData.path(sid);
      const topic = path && path.topics.find((x) => x.id === topicId);
      const lv = topic && topic.levels.find((x) => x.id === levelId);
      return lv ? { lang, level: true, topic: topicId, cls: lv.level } : null;
    }
    return { lang, level: false, topic: null, cls: c };
  }

  // Does this chapter (or level) get this game?
  function applies(game, c, subj, ch) {
    const i = info(c, subj, ch);
    if (!i) return false;
    if (i.level) {
      const lt = (LEVEL_TOPICS[game] || {})[i.lang];
      return !!lt && lt.topics.includes(i.topic) && i.cls >= (lt.min || 0) && i.cls <= lt.max;
    }
    const r = (RANGES[game] || {})[i.lang];
    return !!r && i.cls >= r[0] && i.cls <= r[1];
  }

  // The class to read word lists for: the chapter's class, or the level's number, inside the game's range.
  function classFor(game, i) {
    const r = RANGES[game][i.lang];
    return clamp(i.cls, r[0], r[1]);
  }

  // ---------- word lists for a class ----------
  const pool = {
    matras: (lang, cls) => (get("matras")[lang] || []).filter((w) => w.cls <= cls && w.cls >= Math.max(1, cls - 1)),
    words: (cls) => (get("words").en || []).filter((w) => w.cls <= cls && w.cls >= Math.max(1, cls - 1)),
    sentences: (lang, cls) => (get("sentences")[lang] || []).filter((x) => x.cls <= cls && x.cls >= cls - 2),
    // Ways of sorting: [{ kind: "pos" | "gender" | "number", groups: [{ key, words }] }] for a class; every group has 4+ words, 2+ groups.
    grammar(lang, cls) {
      const g = get("grammar")[lang] || {};
      return Object.entries(g)
        .map(([kind, groups]) => ({
          kind,
          groups: Object.entries(groups)
            .map(([key, list]) => ({ key, words: list.filter((x) => x[1] <= cls).map((x) => x[0]) }))
            .filter((x) => x.words.length >= 4),
        }))
        .filter((k) => k.groups.length >= 2);
    },
  };

  // ---------- pieces of text ----------
  const isMark = (s) => /^\p{M}$/u.test(s);
  // A tile for a vowel sign or other combining mark is shown on a dotted circle so it stays attached and readable on its own.
  const tileText = (tok) => (isMark(tok) ? "◌" + tok : tok);
  // Two orders of marks that look the same (ੁ then ੱ, or ੱ then ੁ) count as the same word: sort each run of marks.
  const canonMarks = (arr) => {
    const out = [];
    let run = [];
    const flush = () => out.push(...run.sort());
    for (const tok of arr) {
      if (isMark(tok)) run.push(tok);
      else {
        flush();
        run = [];
        out.push(tok);
      }
    }
    flush();
    return out.join("\u0001");
  };

  // The read-aloud button for a text (empty when the device has no voice or no speech).
  const speaker = (text) => (typeof Speech !== "undefined" ? Speech.btn(1, "english", text) : "");

  // ---------- stroke paths (data/games/strokes.js, the tracing game) ----------
  // A stroke is a path string in a 100 x 100 box: "M x y" then any of "L x y", "Q cx cy x y", "C c1x c1y c2x c2y x y" (absolute,
  // numbers separated by spaces). flatten() turns one into a list of [x, y] points (curves in 16 steps), or null if it is malformed.
  function flatten(d) {
    const tok = String(d).match(/[MLQC]|-?\d*\.?\d+/g);
    const need = { M: 2, L: 2, Q: 4, C: 6 };
    if (!tok || String(d).replace(/[MLQC\s\d.,-]/g, "") !== "" || tok[0] !== "M") return null;
    const pts = [];
    let i = 0;
    let cmd = "";
    let cur = null;
    while (i < tok.length) {
      if (/[MLQC]/.test(tok[i])) cmd = tok[i++];
      else if (!cmd) return null;
      const n = need[cmd];
      const v = tok.slice(i, i + n).map(Number);
      if (v.length < n || v.some((x) => !Number.isFinite(x))) return null;
      i += n;
      if (cmd === "M" || cmd === "L") {
        cur = [v[0], v[1]];
        pts.push(cur);
      } else {
        if (!cur) return null;
        const p0 = cur;
        const end = [v[n - 2], v[n - 1]];
        for (let k = 1; k <= 16; k++) {
          const u = k / 16;
          const w = 1 - u;
          pts.push(
            cmd === "Q"
              ? [w * w * p0[0] + 2 * w * u * v[0] + u * u * v[2], w * w * p0[1] + 2 * w * u * v[1] + u * u * v[3]]
              : [w * w * w * p0[0] + 3 * w * w * u * v[0] + 3 * w * u * u * v[2] + u * u * u * v[4], w * w * w * p0[1] + 3 * w * w * u * v[1] + 3 * w * u * u * v[3] + u * u * u * v[5]]
          );
        }
        cur = end;
      }
    }
    return pts;
  }

  // ---------- the tile board ----------
  // cfg: { help, preview (show the built text under the question), puzzles, ending(fails) -> { stars, lines } }
  // A puzzle: { head (html), lang, bank: [tile texts, shuffled; the right ones plus any extra], target: [tile texts in order],
  //             alts: [[...]] other correct orders, eq(a, b) when two tile texts count as the same, canon(arr) -> text to compare,
  //             join(arr) -> text, tile(tok) -> html, label(tok) -> text for screen readers, answer (text), done (html shown when right),
  //             missPrompt }
  function builder(el, api, cfg) {
    const { puzzles } = cfg;
    const total = puzzles.length;
    let n = 0;
    let P;
    let tiles;
    let slots;
    let selSlot;
    let flags;
    let checks;
    let solved;
    let firstTry = 0;
    let hadHelp = 0;
    const $ = (sel) => el.querySelector(sel);
    const eq = (p, a, b) => (p.eq ? p.eq(a, b) : a === b);
    const canon = (p, arr) => (p.canon ? p.canon(arr) : arr.join("\u0001"));
    const joinText = (p, arr) => (p.join ? p.join(arr) : arr.join(""));
    const labelOf = (p, tok) => (p.label ? p.label(tok) : tok);
    const tileHtml = (p, tok) => esc(p.tile ? p.tile(tok) : tok);
    const seq = () => slots.map((id) => (id === null ? null : tiles[id].tok));

    function show() {
      P = puzzles[n];
      tiles = P.bank.map((tok, id) => ({ id, tok }));
      slots = P.target.map(() => null);
      selSlot = null;
      flags = null;
      checks = 0;
      solved = false;
      el.innerHTML = `
        <p class="small muted game-help">${cfg.help}</p>
        <div class="card lt-q"><div class="small muted">${t("{a} of {b}", { a: n + 1, b: total })}</div>${P.head}</div>
        <div data-board></div>
        <div class="quiz-nav lt-nav" data-nav></div>
        <div data-fb></div>`;
      draw();
      api.say(P.intro || "");
    }

    function draw(focus) {
      const placed = new Set(slots.filter((x) => x !== null));
      const full = slots.every((x) => x !== null);
      const any = slots.some((x) => x !== null);
      const lang = P.lang;
      $("[data-board]").innerHTML = `
        ${cfg.preview ? `<div class="lt-preview" lang="${lang}" aria-hidden="true">${slots.some((x) => x !== null) ? esc(joinText(P, seq().filter((x) => x !== null))) : "&nbsp;"}</div>` : ""}
        <div class="lt-slots ${cfg.wide ? "wide" : ""}" role="group" aria-label="${t("Boxes")}">${slots
          .map((id, i) => {
            const st = flags ? (flags[i] ? "ok" : "bad") : "";
            const lab = id === null ? t("Empty box {n}", { n: i + 1 }) : t("{item} in box {n}. Tap to take it back.", { item: labelOf(P, tiles[id].tok), n: i + 1 }) + (flags ? " " + (flags[i] ? t("right") : t("not right")) : "");
            return `<button type="button" class="lt-slot ${id === null ? "" : "filled"} ${selSlot === i ? "sel" : ""} ${st}" data-slot="${i}" lang="${lang}" aria-label="${esc(lab)}" ${id === null ? `aria-pressed="${selSlot === i}"` : ""} ${solved ? "disabled" : ""}>${id === null ? "" : tileHtml(P, tiles[id].tok)}</button>`;
          })
          .join("")}</div>
        <div class="lt-bank" role="group" aria-label="${t("Tiles")}">${tiles
          .filter((x) => !placed.has(x.id))
          .map((x) => `<button type="button" class="lt-tile" data-tile="${x.id}" lang="${lang}" aria-label="${esc(labelOf(P, x.tok))}" ${solved ? "disabled" : ""}>${tileHtml(P, x.tok)}</button>`)
          .join("")}</div>`;
      const nav = $("[data-nav]");
      if (solved) {
        const last = n === total - 1;
        nav.innerHTML = `<button class="btn primary" data-act="${last ? "done" : "next"}">${last ? t("See my score") : t("Next")} ${icon("arrow")}</button>`;
      } else {
        nav.innerHTML = `<button class="btn primary" data-act="check" ${full ? "" : "disabled"}>${icon("check")} ${t("Check")}</button>
          <button class="btn" data-act="clear" ${any ? "" : "disabled"}>${icon("reset")} ${t("Clear")}</button>
          ${checks >= 2 ? `<button class="btn" data-act="reveal">${t("Show the answer")}</button>` : ""}`;
      }
      if (focus) {
        const f = focus === "check" ? $("[data-act=check]:not([disabled])") || $(".lt-tile") : focus === "next" ? $("[data-nav] .btn") : $(focus);
        if (f && !f.disabled) f.focus({ preventScroll: true });
      }
    }

    const reset = () => {
      flags = null;
      $("[data-fb]").innerHTML = "";
    };

    function put(id, to) {
      if (solved || !api.live() || to === null) return;
      slots[to] = id;
      selSlot = null;
      reset();
      const left = tiles.find((x) => !slots.includes(x.id));
      draw(left ? `.lt-tile[data-tile="${left.id}"]` : "check");
      api.say(t("{item} in box {n}.", { item: labelOf(P, tiles[id].tok), n: to + 1 }));
    }
    function take(from) {
      if (solved || !api.live()) return;
      const id = slots[from];
      slots[from] = null;
      selSlot = null;
      reset();
      draw(`.lt-tile[data-tile="${id}"]`);
    }
    function swap(a, b) {
      if (solved || !api.live()) return;
      [slots[a], slots[b]] = [slots[b], slots[a]];
      reset();
      draw();
    }

    const tapTile = (id) => {
      if (solved || !api.live()) return;
      const to = selSlot !== null && slots[selSlot] === null ? selSlot : slots.indexOf(null);
      put(id, to < 0 ? null : to);
    };

    function check() {
      if (solved || !api.live() || slots.some((x) => x === null)) return;
      checks++;
      const mine = seq();
      const accepted = [P.target, ...(P.alts || [])];
      const fb = $("[data-fb]");
      if (accepted.some((a) => canon(P, a) === canon(P, mine))) {
        solved = true;
        flags = mine.map(() => true);
        if (checks === 1) firstTry++;
        api.score(checks === 1 ? 100 : checks === 2 ? 60 : 30);
        draw("next");
        fb.innerHTML = `<div class="feedback good" role="status"><div class="h">${t("Right! 🎉")}</div>${P.done || ""}</div>`;
        api.say(t("Right!"));
        fb.scrollIntoView({ block: "nearest" });
        return;
      }
      // Compare with the closest correct order, box by box.
      const score = (a) => a.reduce((s, tok, i) => s + (eq(P, tok, mine[i]) ? 1 : 0), 0);
      const best = accepted.slice().sort((a, b) => score(b) - score(a))[0];
      flags = best.map((tok, i) => eq(P, tok, mine[i]));
      const wrong = flags.filter((f) => !f).length;
      api.score(-10);
      if (checks === 1) api.miss({ prompt: P.missPrompt, yours: joinText(P, mine), right: P.answer });
      draw();
      $("[data-fb]").innerHTML = `<div class="feedback bad" role="status"><div class="h">${t("{n} {n:box is|boxes are} not right yet.", { n: wrong })}</div>${t("Fix the red ones, then check again.")}</div>`;
      api.say(t("{n} {n:box is|boxes are} not right yet.", { n: wrong }));
      $("[data-fb]").scrollIntoView({ block: "nearest" });
    }

    function reveal() {
      if (solved || !api.live()) return;
      if (checks === 0) api.miss({ prompt: P.missPrompt, yours: "", right: P.answer });
      const used = new Set();
      slots = P.target.map((tok) => {
        const t2 = tiles.find((x) => x.tok === tok && !used.has(x.id));
        used.add(t2.id);
        return t2.id;
      });
      solved = true;
      hadHelp++;
      flags = slots.map(() => true);
      draw("next");
      $("[data-fb]").innerHTML = `<div class="feedback good" role="status"><div class="h">${t("Here is the answer.")}</div>${P.done || ""}</div>`;
      $("[data-fb]").scrollIntoView({ block: "nearest" });
    }

    el.addEventListener("click", (e) => {
      const a = e.target.closest("[data-act]");
      if (a && !a.disabled) {
        if (a.dataset.act === "check") check();
        else if (a.dataset.act === "clear") {
          slots = slots.map(() => null);
          selSlot = null;
          reset();
          draw(".lt-tile");
        } else if (a.dataset.act === "reveal") reveal();
        else if (a.dataset.act === "next") {
          n++;
          show();
          window.scrollTo({ top: 0 });
        } else if (a.dataset.act === "done") {
          const ratio = firstTry / total;
          api.finish({ stars: ratio >= 0.8 ? 3 : ratio >= 0.5 ? 2 : 1, lines: [t("{a} of {b} right first time", { a: firstTry, b: total }), hadHelp ? t("{n} answers shown", { n: hadHelp }) : ""].filter(Boolean) });
        }
        return;
      }
      const empty = e.target.closest(".lt-slot:not(.filled)");
      if (empty && !solved) {
        const i = Number(empty.dataset.slot);
        selSlot = selSlot === i ? null : i;
        draw(`.lt-slot[data-slot="${i}"]`);
      }
    });

    const slotAt = (els) => {
      const s = els.map((x) => x.closest && x.closest(".lt-slot")).find(Boolean);
      return s ? Number(s.dataset.slot) : null;
    };
    Games.draggable(el, ".lt-tile, .lt-slot.filled", {
      onTap(chip) {
        if (chip.classList.contains("lt-tile")) tapTile(Number(chip.dataset.tile));
        else take(Number(chip.dataset.slot));
      },
      onDrop(chip, els) {
        const to = slotAt(els);
        if (chip.classList.contains("lt-tile")) return put(Number(chip.dataset.tile), to);
        const from = Number(chip.dataset.slot);
        if (to !== null && to !== from) swap(from, to);
        else if (to === null && els.some((x) => x.closest && x.closest(".lt-bank"))) take(from);
      },
      over(els) {
        const to = slotAt(els);
        el.querySelectorAll(".lt-slot").forEach((s) => s.classList.toggle("over", Number(s.dataset.slot) === to));
      },
    });
    show();
  }

  // ---------- translations ----------
  const PA = {
    "Letters and pictures": "ਅੱਖਰ ਅਤੇ ਤਸਵੀਰਾਂ",
    "Match each letter to its picture-word": "ਹਰ ਅੱਖਰ ਨੂੰ ਉਸ ਦੀ ਤਸਵੀਰ ਵਾਲੇ ਸ਼ਬਦ ਨਾਲ ਜੋੜੋ",
    "Match letters with pictures. Sometimes you see a letter and pick the picture-word that starts with it. Sometimes you see a picture-word and pick the letter it starts with.": "ਅੱਖਰਾਂ ਨੂੰ ਤਸਵੀਰਾਂ ਨਾਲ ਮਿਲਾਓ। ਕਦੇ ਅੱਖਰ ਦਿਸੇਗਾ ਅਤੇ ਤੁਸੀਂ ਉਹ ਤਸਵੀਰ ਵਾਲਾ ਸ਼ਬਦ ਚੁਣੋ ਜੋ ਉਸ ਤੋਂ ਸ਼ੁਰੂ ਹੁੰਦਾ ਹੈ। ਕਦੇ ਤਸਵੀਰ ਵਾਲਾ ਸ਼ਬਦ ਦਿਸੇਗਾ ਅਤੇ ਤੁਸੀਂ ਉਸ ਦਾ ਪਹਿਲਾ ਅੱਖਰ ਚੁਣੋ।",
    "Tap the right answer. Hear the word with the speaker button.": "ਸਹੀ ਜਵਾਬ ਉੱਤੇ ਟੈਪ ਕਰੋ। ਸਪੀਕਰ ਬਟਨ ਨਾਲ ਸ਼ਬਦ ਸੁਣੋ।",
    "Which picture-word starts with this letter?": "ਕਿਹੜਾ ਤਸਵੀਰ ਵਾਲਾ ਸ਼ਬਦ ਇਸ ਅੱਖਰ ਤੋਂ ਸ਼ੁਰੂ ਹੁੰਦਾ ਹੈ?",
    "Which letter does this word start with?": "ਇਹ ਸ਼ਬਦ ਕਿਹੜੇ ਅੱਖਰ ਤੋਂ ਸ਼ੁਰੂ ਹੁੰਦਾ ਹੈ?",
    "Letter {letter}": "ਅੱਖਰ {letter}",
    "{word} starts with {letter}.": "{word} {letter} ਤੋਂ ਸ਼ੁਰੂ ਹੁੰਦਾ ਹੈ।",
    "Not that one. Try another.": "ਇਹ ਨਹੀਂ। ਹੋਰ ਕੋਸ਼ਿਸ਼ ਕਰੋ।",
    "{n} wrong {n:answer|answers}": "{n} ਗਲਤ ਜਵਾਬ",
    "No wrong answers": "ਕੋਈ ਗਲਤ ਜਵਾਬ ਨਹੀਂ",
    "Next question": "ਅਗਲਾ ਸਵਾਲ",
    "Matra builder": "ਮਾਤਰਾ ਬਣਾਓ",
    "Build a word with its vowel signs": "ਲਗਾਂ-ਮਾਤਰਾਂ ਲਾ ਕੇ ਸ਼ਬਦ ਬਣਾਓ",
    "Build the word shown by the picture. Tap the letters and vowel signs in order, or drag them into the boxes. Then tap Check.": "ਤਸਵੀਰ ਦਾ ਸ਼ਬਦ ਬਣਾਓ। ਅੱਖਰਾਂ ਅਤੇ ਲਗਾਂ-ਮਾਤਰਾਂ ਉੱਤੇ ਕ੍ਰਮ ਨਾਲ ਟੈਪ ਕਰੋ, ਜਾਂ ਉਨ੍ਹਾਂ ਨੂੰ ਖਾਨਿਆਂ ਵਿੱਚ ਖਿੱਚੋ। ਫਿਰ ਜਾਂਚੋ ਉੱਤੇ ਟੈਪ ਕਰੋ।",
    "A vowel sign is shown on a dotted circle (◌), so you can see it on its own.": "ਲਗ-ਮਾਤਰਾ ਬਿੰਦੀਆਂ ਵਾਲੇ ਗੋਲੇ (◌) ਉੱਤੇ ਦਿਖਾਈ ਗਈ ਹੈ, ਤਾਂ ਜੋ ਇਹ ਆਪਣੇ ਆਪ ਦਿਸੇ।",
    "Build this word": "ਇਹ ਸ਼ਬਦ ਬਣਾਓ",
    "{word} is built.": "{word} ਬਣ ਗਿਆ।",
    "Spell the word": "ਸ਼ਬਦ ਦੇ ਸ਼ਬਦ-ਜੋੜ ਕਰੋ",
    "Put the letters in order": "ਅੱਖਰਾਂ ਨੂੰ ਕ੍ਰਮ ਵਿੱਚ ਲਗਾਓ",
    "Look at the picture and put the letters in the right order to spell its word. Tap the letters, or drag them into the boxes. Then tap Check.": "ਤਸਵੀਰ ਵੇਖੋ ਅਤੇ ਅੱਖਰਾਂ ਨੂੰ ਸਹੀ ਕ੍ਰਮ ਵਿੱਚ ਲਗਾ ਕੇ ਉਸ ਦਾ ਸ਼ਬਦ ਬਣਾਓ। ਅੱਖਰਾਂ ਉੱਤੇ ਟੈਪ ਕਰੋ, ਜਾਂ ਉਨ੍ਹਾਂ ਨੂੰ ਖਾਨਿਆਂ ਵਿੱਚ ਖਿੱਚੋ। ਫਿਰ ਜਾਂਚੋ ਉੱਤੇ ਟੈਪ ਕਰੋ।",
    "Spell the word for the picture.": "ਤਸਵੀਰ ਦੇ ਸ਼ਬਦ ਦੇ ਸ਼ਬਦ-ਜੋੜ ਕਰੋ।",
    "{n} letters": "{n} ਅੱਖਰ",
    "Sentence builder": "ਵਾਕ ਬਣਾਓ",
    "Put the words in order": "ਸ਼ਬਦਾਂ ਨੂੰ ਕ੍ਰਮ ਵਿੱਚ ਲਗਾਓ",
    "Put the words in the right order to make a correct sentence. Tap the words, or drag them into the boxes. Then tap Check.": "ਸ਼ਬਦਾਂ ਨੂੰ ਸਹੀ ਕ੍ਰਮ ਵਿੱਚ ਲਗਾ ਕੇ ਸਹੀ ਵਾਕ ਬਣਾਓ। ਸ਼ਬਦਾਂ ਉੱਤੇ ਟੈਪ ਕਰੋ, ਜਾਂ ਉਨ੍ਹਾਂ ਨੂੰ ਖਾਨਿਆਂ ਵਿੱਚ ਖਿੱਚੋ। ਫਿਰ ਜਾਂਚੋ ਉੱਤੇ ਟੈਪ ਕਰੋ।",
    "Put the words in order to make a sentence.": "ਸ਼ਬਦਾਂ ਨੂੰ ਕ੍ਰਮ ਵਿੱਚ ਲਗਾ ਕੇ ਵਾਕ ਬਣਾਓ।",
    "Grammar sort": "ਵਿਆਕਰਨ ਛਾਂਟੋ",
    "Sort words by their kind": "ਸ਼ਬਦਾਂ ਨੂੰ ਉਨ੍ਹਾਂ ਦੀ ਕਿਸਮ ਅਨੁਸਾਰ ਛਾਂਟੋ",
    "Sort each word into its group, such as noun, verb or adjective, or masculine and feminine. Drag it into its group, or tap the word and then the group. A wrong group costs points.": "ਹਰ ਸ਼ਬਦ ਨੂੰ ਉਸ ਦੇ ਗਰੁੱਪ ਵਿੱਚ ਪਾਓ, ਜਿਵੇਂ ਨਾਂਵ, ਕਿਰਿਆ ਜਾਂ ਵਿਸ਼ੇਸ਼ਣ, ਜਾਂ ਪੁਲਿੰਗ ਅਤੇ ਇਸਤਰੀ ਲਿੰਗ। ਸ਼ਬਦ ਨੂੰ ਖਿੱਚ ਕੇ ਉਸ ਦੇ ਗਰੁੱਪ ਵਿੱਚ ਪਾਓ, ਜਾਂ ਸ਼ਬਦ ਉੱਤੇ ਅਤੇ ਫਿਰ ਗਰੁੱਪ ਉੱਤੇ ਟੈਪ ਕਰੋ। ਗਲਤ ਗਰੁੱਪ ਨਾਲ ਅੰਕ ਘਟਦੇ ਹਨ।",
    "Sort the words into nouns, verbs and adjectives.": "ਸ਼ਬਦਾਂ ਨੂੰ ਨਾਂਵ, ਕਿਰਿਆ ਅਤੇ ਵਿਸ਼ੇਸ਼ਣ ਵਿੱਚ ਛਾਂਟੋ।",
    "Sort the words into nouns and verbs.": "ਸ਼ਬਦਾਂ ਨੂੰ ਨਾਂਵ ਅਤੇ ਕਿਰਿਆ ਵਿੱਚ ਛਾਂਟੋ।",
    "Sort the nouns by gender.": "ਨਾਂਵਾਂ ਨੂੰ ਲਿੰਗ ਅਨੁਸਾਰ ਛਾਂਟੋ।",
    "Sort the words by number.": "ਸ਼ਬਦਾਂ ਨੂੰ ਵਚਨ ਅਨੁਸਾਰ ਛਾਂਟੋ।",
    "Noun": "ਨਾਂਵ",
    "Verb": "ਕਿਰਿਆ",
    "Adjective": "ਵਿਸ਼ੇਸ਼ਣ",
    "Masculine": "ਪੁਲਿੰਗ",
    "Feminine": "ਇਸਤਰੀ ਲਿੰਗ",
    "Singular": "ਇੱਕ ਵਚਨ",
    "Plural": "ਬਹੁ ਵਚਨ",
    "{a} of {b}": "{b} ਵਿੱਚੋਂ {a}",
    "Boxes": "ਖਾਨੇ",
    "Tiles": "ਟਾਈਲਾਂ",
    "Empty box {n}": "ਖਾਲੀ ਖਾਨਾ {n}",
    "{item} in box {n}. Tap to take it back.": "ਖਾਨੇ {n} ਵਿੱਚ {item}। ਵਾਪਸ ਲੈਣ ਲਈ ਟੈਪ ਕਰੋ।",
    "{item} in box {n}.": "ਖਾਨੇ {n} ਵਿੱਚ {item}।",
    "right": "ਸਹੀ",
    "not right": "ਸਹੀ ਨਹੀਂ",
    "Check": "ਜਾਂਚੋ",
    "Clear": "ਸਾਫ਼ ਕਰੋ",
    "Next": "ਅੱਗੇ",
    "Show the answer": "ਜਵਾਬ ਦਿਖਾਓ",
    "Right! 🎉": "ਸਹੀ! 🎉",
    "Right!": "ਸਹੀ!",
    "Here is the answer.": "ਇਹ ਹੈ ਜਵਾਬ।",
    "{n} {n:box is|boxes are} not right yet.": "{n} ਖਾਨੇ ਅਜੇ ਸਹੀ ਨਹੀਂ।",
    "{a} of {b} right first time": "{b} ਵਿੱਚੋਂ {a} ਪਹਿਲੀ ਵਾਰ ਸਹੀ",
    "{n} answers shown": "{n} ਜਵਾਬ ਦਿਖਾਏ ਗਏ",
    "This game's words couldn't be loaded. Check your internet connection and try again.": "ਇਸ ਖੇਡ ਦੇ ਸ਼ਬਦ ਲੋਡ ਨਹੀਂ ਹੋ ਸਕੇ। ਆਪਣਾ ਇੰਟਰਨੈੱਟ ਚੈੱਕ ਕਰੋ ਅਤੇ ਦੁਬਾਰਾ ਕੋਸ਼ਿਸ਼ ਕਰੋ।",
    "Play games for every chapter": "ਹਰ ਅਧਿਆਇ ਲਈ ਖੇਡਾਂ ਖੇਡੋ",
  };
  const HI = {
    "Letters and pictures": "अक्षर और चित्र",
    "Match each letter to its picture-word": "हर अक्षर को उसके चित्र वाले शब्द से मिलाएँ",
    "Match letters with pictures. Sometimes you see a letter and pick the picture-word that starts with it. Sometimes you see a picture-word and pick the letter it starts with.": "अक्षरों को चित्रों से मिलाएँ। कभी अक्षर दिखेगा और आप वह चित्र वाला शब्द चुनें जो उससे शुरू होता है। कभी चित्र वाला शब्द दिखेगा और आप उसका पहला अक्षर चुनें।",
    "Tap the right answer. Hear the word with the speaker button.": "सही उत्तर पर टैप करें। स्पीकर बटन से शब्द सुनें।",
    "Which picture-word starts with this letter?": "कौन-सा चित्र वाला शब्द इस अक्षर से शुरू होता है?",
    "Which letter does this word start with?": "यह शब्द किस अक्षर से शुरू होता है?",
    "Letter {letter}": "अक्षर {letter}",
    "{word} starts with {letter}.": "{word} {letter} से शुरू होता है।",
    "Not that one. Try another.": "यह नहीं। दूसरा आज़माएँ।",
    "{n} wrong {n:answer|answers}": "{n} गलत उत्तर",
    "No wrong answers": "कोई गलत उत्तर नहीं",
    "Next question": "अगला प्रश्न",
    "Matra builder": "मात्रा बनाओ",
    "Build a word with its vowel signs": "मात्राएँ लगाकर शब्द बनाएँ",
    "Build the word shown by the picture. Tap the letters and vowel signs in order, or drag them into the boxes. Then tap Check.": "चित्र का शब्द बनाएँ। अक्षरों और मात्राओं पर क्रम से टैप करें, या उन्हें खानों में खींचें। फिर जाँचें पर टैप करें।",
    "A vowel sign is shown on a dotted circle (◌), so you can see it on its own.": "मात्रा बिंदु वाले गोले (◌) पर दिखाई गई है, ताकि वह अकेली भी दिखे।",
    "Build this word": "यह शब्द बनाएँ",
    "{word} is built.": "{word} बन गया।",
    "Spell the word": "शब्द की वर्तनी बनाएँ",
    "Put the letters in order": "अक्षरों को क्रम में लगाएँ",
    "Look at the picture and put the letters in the right order to spell its word. Tap the letters, or drag them into the boxes. Then tap Check.": "चित्र देखें और अक्षरों को सही क्रम में लगाकर उसका शब्द बनाएँ। अक्षरों पर टैप करें, या उन्हें खानों में खींचें। फिर जाँचें पर टैप करें।",
    "Spell the word for the picture.": "चित्र के शब्द की वर्तनी बनाएँ।",
    "{n} letters": "{n} अक्षर",
    "Sentence builder": "वाक्य बनाओ",
    "Put the words in order": "शब्दों को क्रम में लगाएँ",
    "Put the words in the right order to make a correct sentence. Tap the words, or drag them into the boxes. Then tap Check.": "शब्दों को सही क्रम में लगाकर सही वाक्य बनाएँ। शब्दों पर टैप करें, या उन्हें खानों में खींचें। फिर जाँचें पर टैप करें।",
    "Put the words in order to make a sentence.": "शब्दों को क्रम में लगाकर वाक्य बनाएँ।",
    "Grammar sort": "व्याकरण छाँटो",
    "Sort words by their kind": "शब्दों को उनके भेद के अनुसार छाँटें",
    "Sort each word into its group, such as noun, verb or adjective, or masculine and feminine. Drag it into its group, or tap the word and then the group. A wrong group costs points.": "हर शब्द को उसके समूह में रखें, जैसे संज्ञा, क्रिया या विशेषण, या पुल्लिंग और स्त्रीलिंग। शब्द को खींचकर उसके समूह में रखें, या शब्द पर और फिर समूह पर टैप करें। गलत समूह पर अंक कटते हैं।",
    "Sort the words into nouns, verbs and adjectives.": "शब्दों को संज्ञा, क्रिया और विशेषण में छाँटें।",
    "Sort the words into nouns and verbs.": "शब्दों को संज्ञा और क्रिया में छाँटें।",
    "Sort the nouns by gender.": "संज्ञाओं को लिंग के अनुसार छाँटें।",
    "Sort the words by number.": "शब्दों को वचन के अनुसार छाँटें।",
    "Noun": "संज्ञा",
    "Verb": "क्रिया",
    "Adjective": "विशेषण",
    "Masculine": "पुल्लिंग",
    "Feminine": "स्त्रीलिंग",
    "Singular": "एकवचन",
    "Plural": "बहुवचन",
    "{a} of {b}": "{b} में से {a}",
    "Boxes": "खाने",
    "Tiles": "टाइलें",
    "Empty box {n}": "खाली खाना {n}",
    "{item} in box {n}. Tap to take it back.": "खाना {n} में {item}। वापस लेने के लिए टैप करें।",
    "{item} in box {n}.": "खाना {n} में {item}।",
    "right": "सही",
    "not right": "सही नहीं",
    "Check": "जाँचें",
    "Clear": "साफ़ करें",
    "Next": "आगे",
    "Show the answer": "उत्तर दिखाएँ",
    "Right! 🎉": "सही! 🎉",
    "Right!": "सही!",
    "Here is the answer.": "यह रहा उत्तर।",
    "{n} {n:box is|boxes are} not right yet.": "{n} खाने अभी सही नहीं।",
    "{a} of {b} right first time": "{b} में से {a} पहली बार में सही",
    "{n} answers shown": "{n} उत्तर दिखाए गए",
    "This game's words couldn't be loaded. Check your internet connection and try again.": "इस खेल के शब्द लोड नहीं हो सके। अपना इंटरनेट जाँचें और फिर से कोशिश करें।",
    "Play games for every chapter": "हर अध्याय के लिए खेल खेलें",
  };
  // Added without replacing any line the app already has under the same English text.
  if (typeof I18N !== "undefined")
    for (const [table, lines] of [[I18N.pa, PA], [I18N.hi, HI]]) for (const [k, v] of Object.entries(lines)) if (!table[k]) table[k] = v;

  return { add, get, files: FILES, ready, load, info, applies, classFor, pool, RANGES, LEVEL_TOPICS, SUBJECT, tileText, canonMarks, isMark, speaker, builder, clamp, flatten };
})();
