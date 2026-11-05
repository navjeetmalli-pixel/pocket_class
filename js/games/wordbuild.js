// Game: Picture word builder. A big picture of a thing comes up (a cat, a mango, ਗਾਂ, सेब); the child taps wooden letter tiles to
// build its word in the boxes. English (Classes 1-5), Hindi and Punjabi (Classes 1-3).
//
//   * The words are the ones the chapter's own text uses (notes, terms, quiz, examples, questions and answers) that the picture
//     dictionary (js/picdict.js) can draw as a plain thing. English words must be exactly the picture's name (no plurals, no
//     synonyms: "cat" yes, "cats" no); Hindi and Punjabi words skip the plural forms (-े, -ें, -ियाँ, -ੇ, -ਆਂ). Classes 1-2: 2 to 5
//     letters (or aksharas); older: up to 7.
//   * A tile is a LETTER in English and an AKSHARA in Hindi and Punjabi: a consonant with its vowel signs, bindi, adhak and any
//     conjunct (consonant + virama + consonant) is ONE tile, so the tiles of a word always join back to the word exactly.
//     aksharas() below does this by Unicode rules and does not depend on Intl.Segmenter (older web views split conjuncts).
//   * 2-3 spare tiles are mixed in. Tap a tile to put it in the next box; tap a filled box to take the tile back.
//   * Check: right = a celebration, then Next. Wrong = the wrong boxes shake and show red, those tiles go back, the right ones
//     stay; one more try. A second miss shows the word. Only the FIRST try is recorded (api.answered, "Spell the word X").
//   * "Listen" (Mithu) says the word, only when pressed. Nothing is read by itself.
//   * Hindi and Punjabi are hidden by the release lock (js/release.js) like the other language games.
// Content: no data file of its own; everything comes from the chapter. 6 words a round.

(() => {
  const ROUNDS = 6;
  const MIN_WORDS = 4; // a chapter needs this many drawable words before the game is offered
  const LANG = { english: "en", englishpb: "en", hindi: "hi", hindipb: "hi", punjabi: "pa" };
  const CLASSES = { en: [1, 5], hi: [1, 3], pa: [1, 3] };
  // Spare tiles come from here (never a tile the word already uses).
  const SPARE = {
    en: "abcdefghijklmnopqrstuvwxyz".split(""),
    hi: ["क", "ख", "ग", "च", "ज", "त", "द", "न", "प", "ब", "म", "र", "ल", "व", "स", "ह", "का", "की", "ते", "मा"],
    pa: ["ਕ", "ਖ", "ਗ", "ਚ", "ਜ", "ਤ", "ਦ", "ਨ", "ਪ", "ਬ", "ਮ", "ਰ", "ਲ", "ਵ", "ਸ", "ਹ", "ਕਾ", "ਕੀ", "ਤੇ", "ਮਾ"],
  };

  // Pictures that show an action (a boy singing), a describing word or a position are not "the picture of a word": left out.
  const NOT_THINGS = /^item:(stand|walk|run|jump|sit|sleep|eat|drink|sing|dance|read|write|cry|laugh|swim|fly|kick|clap|play|big|small|tall|short|hot|cold|happy|sad|angry|heavy|light|full|empty|fast|slow|thin|fat|loud|rough|new|old|high|pillow|pos-.*|sky|wind|fruit)$/;
  const isMark = (ch) => /\p{M}/u.test(ch) || /[‌‍]/.test(ch);
  const isVirama = (ch) => ch === "्" || ch === "੍";

  // The tiles of a word: letters (English) or aksharas (Hindi, Punjabi). A sign or mark joins the tile before it, and a consonant
  // that follows a virama joins the conjunct. Joining the tiles always gives the word back.
  function aksharas(word, lang) {
    if (lang === "en") return [...word];
    const out = [];
    let joined = false; // the last code point was a virama (its consonant belongs to the same tile)
    for (const ch of word) {
      if (out.length && (isMark(ch) || joined)) out[out.length - 1] += ch;
      else out.push(ch);
      joined = isVirama(ch) || (joined && /[‌‍]/.test(ch));
    }
    return out;
  }

  // ---------- which words a chapter has ----------
  const langOf = (subj) => (subj && LANG[subj.id]) || "";
  const open = (lang) => !(typeof Release !== "undefined" && Release.langLocked(lang));
  const scriptOf = (w) => (/[ऀ-ॿ]/.test(w) ? "hi" : /[਀-੿]/.test(w) ? "pa" : /^[a-z]+$/.test(w) ? "en" : "");

  function textsOf(ch) {
    const out = [];
    for (const n of ch.notes || []) for (const p of n.points || []) out.push(p);
    for (const x of ch.terms || []) out.push(x.term, x.meaning);
    for (const q of ch.quiz || []) out.push(q.q, ...(q.options || []));
    for (const e of ch.examples || []) out.push(e.q, e.answer);
    for (const e of ch.qa || []) out.push(e.q, e.a);
    return out.filter((s) => typeof s === "string");
  }

  // Is this word one the game can use for this language and class? Returns the picture key, or "".
  function usable(w, lang, cls) {
    if (!w || scriptOf(w) !== lang || typeof PicDict === "undefined") return "";
    const r = PicDict.forText(w, { context: "" });
    if (!r || r.kind !== "item" || NOT_THINGS.test(r.key)) return ""; // a thing you can point at, not an action, a describing word or a position
    if (lang === "en") {
      if (r.key.slice(5).replace(/-/g, " ") !== w) return ""; // exactly the picture's own name
    } else if (lang === "hi" ? /(े|ें|ियाँ|ियां)$/.test(w) : /(ੇ|ਆਂ)$/.test(w)) return "";
    const n = aksharas(w, lang).length;
    return n >= 2 && n <= (cls <= 2 ? 5 : 7) ? r.key : "";
  }

  // [{ word, key }] for one chapter, one word per picture, in the order the text uses them (kept per chapter: its content never changes).
  const memo = new WeakMap();
  function wordsOfChapter(ch, lang, cls) {
    const k = `${lang}${cls}`;
    let m = memo.get(ch);
    if (!m) memo.set(ch, (m = {}));
    return m[k] || (m[k] = scanChapter(ch, lang, cls));
  }
  function scanChapter(ch, lang, cls) {
    const seen = new Map();
    for (const tx of textsOf(ch))
      for (const m of String(tx).replace(/\*\*/g, "").match(/[\p{L}\p{M}]+/gu) || []) {
        const w = lang === "en" ? m.toLowerCase() : m.normalize("NFC");
        if (seen.has(w)) continue;
        const key = usable(w, lang, cls);
        if (key) seen.set(w, key);
      }
    const used = new Set();
    const out = [];
    for (const [word, key] of seen) {
      if (used.has(key)) continue;
      used.add(key);
      out.push({ word, key });
    }
    return out;
  }

  // The language of the game for a chapter (or ""), when the game applies to it at all.
  function scope(c, subj, ch) {
    const lang = langOf(subj);
    if (!lang || !ch || ch.levelKey || ch.sources || !open(lang)) return "";
    const r = CLASSES[lang];
    return c >= r[0] && c <= r[1] ? lang : "";
  }

  const pool = (c, subj, ch) => {
    const lang = scope(c, subj, ch);
    return lang ? wordsOfChapter(ch, lang, c) : [];
  };

  // ---------- the register ----------
  Games.register("wordbuild", {
    title: "Picture word builder",
    blurb: "Build the word for the picture",
    how: "Look at the picture. Tap the wooden tiles to build its word in the boxes, then press Check. Press Listen to hear the word.",
    icon: "order",

    available: (c, subj, ch) => pool(c, subj, ch).length >= MIN_WORDS,

    build(c, subj, ch, seed) {
      const R = Games.rng(seed);
      const lang = scope(c, subj, ch);
      let words = Games.shuffled(pool(c, subj, ch), R);
      if (words.length < ROUNDS) {
        // top up from the other chapters of the same subject (already loaded ones only)
        const have = new Set(words.map((x) => x.key));
        const more = [];
        for (const o of StudyData.chapters(c, subj.id)) {
          if (o.id === ch.id || !o.notes) continue;
          for (const x of wordsOfChapter(o, lang, c)) if (!have.has(x.key)) (have.add(x.key), more.push(x));
        }
        words = words.concat(Games.shuffled(more, R));
      }
      const rounds = words.slice(0, ROUNDS).map((w) => {
        const tokens = aksharas(w.word, lang);
        const nSpare = tokens.length <= 3 ? 2 : 3;
        const spare = Games.shuffled(SPARE[lang].filter((x) => !tokens.includes(x)), R).slice(0, nSpare);
        let bank;
        let tries = 0;
        do bank = Games.shuffled([...tokens, ...spare], R);
        while (tries++ < 20 && bank.slice(0, tokens.length).join("") === w.word);
        return { word: w.word, key: w.key, lang, tokens, bank };
      });
      return { rounds, lang };
    },

    // Problems with the content of a round (empty when fine): every word has a picture, the tiles join back to the word exactly.
    audit(data) {
      const bad = [];
      for (const r of data.rounds) {
        if (r.tokens.join("") !== r.word) bad.push(`${r.word}: tiles do not join back to the word`);
        if (r.tokens.some((x) => !x || /^\p{M}/u.test(x))) bad.push(`${r.word}: a tile starts with a mark`);
        if (r.tokens.length < 2 || r.tokens.length > 7) bad.push(`${r.word}: ${r.tokens.length} tiles`);
        const rest = r.bank.slice();
        for (const x of r.tokens) {
          const i = rest.indexOf(x);
          if (i < 0) bad.push(`${r.word}: the tile bank is missing ${x}`);
          else rest.splice(i, 1);
        }
        if (rest.length < 2 || rest.length > 3) bad.push(`${r.word}: ${rest.length} spare tiles`);
        if (rest.some((x) => r.tokens.includes(x))) bad.push(`${r.word}: a spare tile is also in the word`);
        if (typeof PicDict !== "undefined" && !PicDict.forText(r.word, { context: "" })) bad.push(`${r.word}: no picture`);
        if (scriptOf(r.word) !== r.lang) bad.push(`${r.word}: wrong script for ${r.lang}`);
      }
      if (new Set(data.rounds.map((r) => r.key)).size !== data.rounds.length) bad.push("two words share a picture");
      return bad;
    },

    mount(el, data, api) {
      play(el, data, api);
    },
  });

  // ---------- the board ----------
  function burst(host) {
    if (!host || host.querySelector(".fb-burst")) return;
    const calm = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
    const cols = ["#ffc933", "#e5473d", "#3b82e0", "#4caf50", "#ee6fa4", "#f59a23"];
    const bits = Array.from({ length: 12 }, (_, i) => {
      const a = (i / 12) * 2 * Math.PI + (i % 2) * 0.2;
      const dist = 70 + (i % 3) * 26;
      return `<svg class="fb-bit" viewBox="-8 -8 16 16" style="--dx:${Math.round(Math.cos(a) * dist)}px;--dy:${Math.round(Math.sin(a) * dist - 16)}px;--rot:${(i * 67) % 180}deg;animation-delay:${(i % 4) * 25}ms" aria-hidden="true">${
        i % 3 === 0 ? `<path d="M0-7 2.1-2.4 7-2 3.3 1.4 4.4 6.4 0 3.8-4.4 6.4-3.3 1.4-7-2-2.1-2.4Z" fill="${cols[i % 6]}" stroke="#a87400" stroke-width=".8" stroke-linejoin="round"/>` : `<rect x="-3.5" y="-2.2" width="7" height="4.4" rx="1.2" fill="${cols[i % 6]}"/>`
      }</svg>`;
    }).join("");
    const b = document.createElement("div");
    b.className = "fb-burst" + (calm ? " calm" : "");
    b.setAttribute("aria-hidden", "true");
    b.innerHTML = bits;
    host.appendChild(b);
    setTimeout(() => b.remove(), calm ? 900 : 1000);
  }

  function play(el, data, api) {
    const rounds = data.rounds;
    const total = rounds.length;
    let i = 0;
    let firstRight = 0;
    const res = [];

    const dots = () => rounds.map((_, k) => `<i class="${k < i ? (res[k] ? "ok" : "no") : k === i ? "cur" : ""}"></i>`).join("");
    const mithu = (pose, size) => (typeof Mascot !== "undefined" ? Mascot.svg(pose, { size }) : "");
    const heard = (r) => typeof Speech !== "undefined" && Speech.supported && open(r.lang);

    function show() {
      const r = rounds[i];
      const pic = PicDict.forText(r.word, { context: "", decorative: true });
      const slots = Array(r.tokens.length).fill(null); // bank index in each box
      let tries = 0; // checks made on this word
      let busy = false;
      let done = false;
      const listen = heard(r)
        ? `<div class="listen-row no-print"><button type="button" class="say listen-btn wb-listen" data-say="${esc(r.word)}" ${Speech.voiceFor(Speech.langOf(r.word)) ? "" : "hidden"} aria-label="${t("Listen")}">${mithu("point", 44) || icon("speaker")}<span>${t("Listen")}</span></button></div>`
        : "";
      el.innerHTML = `<div class="card mk-card wb-card" lang="${r.lang}">
        <div class="mk-top"><span class="small muted">${t("Word {a} of {b}", { a: i + 1, b: total })}</span><span class="mk-dots" aria-hidden="true">${dots()}</span></div>
        <h2 class="mk-q wb-q">${t("Look at the picture. Build its word.")}</h2>
        <div class="wb-frame"><div class="wb-pic" role="img" aria-label="${esc(t("Picture of the word to build"))}">${pic ? pic.svg : ""}</div></div>
        ${listen}
        <div class="wb-slots" role="group" aria-label="${t("Boxes for the word")}">${slots.map((_, k) => `<button type="button" class="wb-slot" data-slot="${k}" aria-label="${t("Box {n}, empty", { n: k + 1 })}"></button>`).join("")}</div>
        <div class="wb-bank" role="group" aria-label="${t("Letter tiles")}">${r.bank.map((x, k) => `<button type="button" class="wb-tile" data-tile="${k}" lang="${r.lang}">${esc(x)}</button>`).join("")}</div>
        <div class="wb-fb" data-fb role="status" aria-live="polite"></div>
        <div class="mk-btnrow"><button type="button" class="btn" data-act="clear">${t("Clear")}</button><button type="button" class="btn primary" data-act="check" disabled>${t("Check")}</button></div>
      </div>`;
      const card = el.querySelector(".wb-card");
      const slotEls = [...el.querySelectorAll(".wb-slot")];
      const tileEls = [...el.querySelectorAll(".wb-tile")];
      const check = el.querySelector("[data-act=check]");
      const clear = el.querySelector("[data-act=clear]");
      const fb = el.querySelector("[data-fb]");

      const paint = () => {
        slotEls.forEach((s, k) => {
          const b = slots[k];
          s.classList.toggle("filled", b !== null);
          s.textContent = b === null ? "" : r.bank[b];
          s.lang = r.lang;
          s.setAttribute("aria-label", b === null ? t("Box {n}, empty", { n: k + 1 }) : t("Box {n}: {x}. Tap to take it back.", { n: k + 1, x: r.bank[b] }));
        });
        tileEls.forEach((b, k) => {
          const used = slots.includes(k);
          b.classList.toggle("used", used);
          b.disabled = used || busy || done;
        });
        check.disabled = busy || done || slots.some((x) => x === null);
        clear.disabled = busy || done || slots.every((x) => x === null);
      };
      const firstFree = () => slots.indexOf(null);
      const putTile = (k) => {
        const s = firstFree();
        if (s < 0 || busy || done || slots.includes(k)) return;
        slots[s] = k;
        slotEls[s].classList.remove("wrong");
        paint();
        const next = tileEls.find((b) => !b.disabled);
        (slots.every((x) => x !== null) ? check : next || check).focus({ preventScroll: true });
      };
      const takeBack = (s) => {
        if (busy || done || slots[s] === null) return;
        const k = slots[s];
        slots[s] = null;
        slotEls[s].classList.remove("wrong");
        paint();
        tileEls[k].focus({ preventScroll: true });
      };
      el.querySelector(".wb-bank").addEventListener("click", (e) => {
        const b = e.target.closest("[data-tile]");
        if (b) putTile(+b.dataset.tile);
      });
      el.querySelector(".wb-slots").addEventListener("click", (e) => {
        const b = e.target.closest("[data-slot]");
        if (b) takeBack(+b.dataset.slot);
      });
      clear.addEventListener("click", () => {
        if (busy || done) return;
        slots.fill(null);
        slotEls.forEach((s) => s.classList.remove("wrong"));
        fb.innerHTML = "";
        paint();
      });

      function finishWord(ok) {
        done = true;
        res[i] = ok;
        paint();
        const last = i === total - 1;
        const next = `<div class="quiz-nav"><button type="button" class="btn primary" data-act="next">${last ? t("See my stars") : t("Next word")}</button></div>`;
        if (ok) {
          slotEls.forEach((s) => s.classList.add("ok"));
          card.classList.add("wb-win");
          burst(card);
          fb.innerHTML = `<div class="feedback good wb-say"><span class="wb-mithu" aria-hidden="true">${mithu("cheer", 56)}</span><div><div class="h">${tries === 1 ? t("Well done!") : t("Got it this time!")}</div><div>${esc(r.word)}</div></div></div>${next}`;
          setTimeout(() => api.live() && Sound.play("celebrate"), 120);
        } else {
          // show the word in the boxes
          slotEls.forEach((s, k) => {
            s.textContent = r.tokens[k];
            s.classList.remove("wrong");
            s.classList.add("show");
          });
          fb.innerHTML = `<div class="feedback bad wb-say"><span class="wb-mithu" aria-hidden="true">${mithu("oops", 56)}</span><div><div class="h">${t("Not quite")}</div><div>${t("The word is {w}.", { w: `<strong lang="${r.lang}">${esc(r.word)}</strong>` })}</div></div></div>${next}`;
        }
        api.say(ok ? t("Well done!") : t("The word is {w}.", { w: r.word }));
        el.querySelector("[data-act=next]").focus({ preventScroll: true });
      }

      check.addEventListener("click", () => {
        if (busy || done || slots.some((x) => x === null)) return;
        tries++;
        const made = slots.map((b) => r.bank[b]);
        const wrong = made.map((x, k) => x !== r.tokens[k]);
        const ok = !wrong.some(Boolean);
        if (tries === 1) {
          // only the first try is recorded
          api.answered({ q: `Spell the word ${r.word}`, explain: `The word ${r.word} is spelt ${r.tokens.join(" ")}.`, answer: r.word }, ok);
          if (ok) {
            firstRight++;
            api.score(10);
          } else api.miss({ prompt: `${t("Spell the word {w}", { w: r.word })}`, yours: esc(made.join("")), right: esc(r.word), explain: "" });
        } else if (ok) api.score(5);
        if (ok) return finishWord(true);
        if (tries >= 2) return finishWord(false);
        // wrong first try: the wrong boxes shake and show red, those tiles go back, the right ones stay
        busy = true;
        wrong.forEach((w, k) => slotEls[k].classList.toggle("wrong", w));
        fb.innerHTML = `<div class="feedback bad wb-say"><span class="wb-mithu" aria-hidden="true">${mithu("oops", 56)}</span><div><div class="h">${t("Not quite")}</div><div>${t("The red boxes are not right yet. Try those again.")}</div></div></div>`;
        api.say(t("The red boxes are not right yet. Try those again."));
        paint();
        setTimeout(() => {
          if (!api.live() || done) return;
          wrong.forEach((w, k) => w && (slots[k] = null)); // the wrong tiles go back; the boxes keep their red mark
          busy = false;
          paint();
          const next = tileEls.find((b) => !b.disabled);
          if (next) next.focus({ preventScroll: true });
        }, matchMedia("(prefers-reduced-motion: reduce)").matches ? 250 : 650);
      });

      el.querySelector("[data-fb]").addEventListener("click", (e) => {
        if (!e.target.closest("[data-act=next]")) return;
        i++;
        if (i >= total) {
          const stars = firstRight >= total - 1 ? 3 : firstRight >= Math.ceil(total / 2) ? 2 : 1;
          return api.finish({ stars, lines: [t("{a} of {b} words right the first time", { a: firstRight, b: total })] });
        }
        show();
      });
      paint();
      const f = tileEls[0];
      if (f && document.activeElement && (document.activeElement === document.body || el.contains(document.activeElement) || document.activeElement.closest("#app"))) f.focus({ preventScroll: true });
      if (typeof Speech !== "undefined" && Speech.supported) document.querySelectorAll(".wb-listen").forEach((b) => (b.hidden = !Speech.voiceFor(Speech.langOf(b.dataset.say))));
    }
    show();
  }

  window.WordBuild = { aksharas, wordsOfChapter, usable };
})();
