// Game: Trace the letter (Gurmukhi, Devanagari and English letters; Classes 1 to 3 and the letter / phonics levels). Four letters a round.
// Each letter is traced twice: first guided (a green start dot and an arrow, the stroke to follow darker), then on its own (only the
// faint letter). A stroke is judged by a tolerant match against the stored stroke (data/games/strokes.js): it must start near the dot,
// stay near the line, cover at least 80% of it, and go the right way. A wrong way or a stray stroke gets a gentle hint, never a penalty.
// Nobody is ever stuck: "Show me" plays the letter being written in order, "Tap to continue" draws each stroke for the child, and a
// stroke that fails five times is drawn for them. There is no timer. After the letter, it is shown with its picture-word, read aloud
// when the device has a voice. Tracing works with a finger, a stylus or a mouse (pointer events), on an SVG board in a 100 x 100 box.

(() => {
  const PER_ROUND = 4;
  const TOL = { big: 13, small: 10 }; // how far from the line still counts, in box units (the board is 100 wide)
  const GIVE_UP = 5; // fails on one stroke before it is drawn for the child
  const reduced = () => !!(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches);

  // ---------- geometry ----------
  const dist = (a, b) => Math.hypot(a[0] - b[0], a[1] - b[1]);
  const plen = (pts) => pts.reduce((s, p, i) => (i ? s + dist(p, pts[i - 1]) : 0), 0);

  // n points spaced evenly along the path
  function resample(pts, n) {
    const total = plen(pts);
    if (!total) return Array.from({ length: n }, () => pts[0]);
    const out = [pts[0]];
    const step = total / (n - 1);
    let acc = 0;
    let need = step;
    for (let i = 1; i < pts.length && out.length < n; i++) {
      let a = pts[i - 1];
      const b = pts[i];
      let seg = dist(a, b);
      while (seg > 0 && acc + seg >= need && out.length < n) {
        const f = (need - acc) / seg;
        a = [a[0] + (b[0] - a[0]) * f, a[1] + (b[1] - a[1]) * f];
        out.push(a);
        seg = dist(a, b);
        acc = 0;
        need = step;
      }
      acc += seg;
    }
    while (out.length < n) out.push(pts[pts.length - 1]);
    return out;
  }

  function segDist(p, a, b) {
    const dx = b[0] - a[0];
    const dy = b[1] - a[1];
    const l2 = dx * dx + dy * dy;
    const f = l2 ? Math.max(0, Math.min(1, ((p[0] - a[0]) * dx + (p[1] - a[1]) * dy) / l2)) : 0;
    return Math.hypot(p[0] - (a[0] + f * dx), p[1] - (a[1] + f * dy));
  }
  const polyDist = (p, pts) => pts.reduce((m, a, i) => (i ? Math.min(m, segDist(p, pts[i - 1], a)) : m), Infinity);

  function corr(xs, ys) {
    const n = xs.length;
    const mx = xs.reduce((a, b) => a + b, 0) / n;
    const my = ys.reduce((a, b) => a + b, 0) / n;
    let sxy = 0;
    let sxx = 0;
    let syy = 0;
    for (let i = 0; i < n; i++) {
      sxy += (xs[i] - mx) * (ys[i] - my);
      sxx += (xs[i] - mx) ** 2;
      syy += (ys[i] - my) ** 2;
    }
    return sxx && syy ? sxy / Math.sqrt(sxx * syy) : 0;
  }

  // Judges what the child drew against one stroke (both lists of [x, y] in box units).
  // -> { ok } or { ok: false, why: "short" | "off" | "start" | "direction" }
  function judge(user, target, tol) {
    const len = plen(target);
    if (len < 8) return user.some((p) => dist(p, target[0]) <= tol * 1.8) ? { ok: true } : { ok: false, why: "start" }; // a dot: a tap on it
    if (user.length < 2 || plen(user) < len * 0.4) return { ok: false, why: "short" };
    const T = resample(target, 40);
    const U = resample(user, 80);
    const cov = T.filter((p) => U.some((q) => dist(p, q) <= tol)).length / T.length; // how much of the stroke was covered
    const prec = U.filter((p) => polyDist(p, target) <= tol * 1.5).length / U.length; // how much of the drawing is on the stroke
    if (cov < 0.8 || prec < 0.75) return { ok: false, why: "off" };
    // direction: where along the drawing is the point nearest to each point of the stroke (the middle of it, so closed shapes work)
    const js = [];
    const as = [];
    for (let j = 4; j < 36; j++) {
      let best = 0;
      let bd = Infinity;
      U.forEach((q, k) => {
        const d = dist(T[j], q);
        if (d < bd) {
          bd = d;
          best = k;
        }
      });
      js.push(j);
      as.push(best);
    }
    const c = corr(js, as);
    if (c < -0.4) return { ok: false, why: "direction" };
    if (c < 0.4) return { ok: false, why: "off" };
    if (dist(user[0], target[0]) > tol * 2.2) return { ok: false, why: "start" };
    return { ok: true };
  }

  // Fills gaps between sparse pointer samples so a quick flick still has points along it.
  function densify(pts, step = 1.5) {
    const out = [pts[0]];
    for (let i = 1; i < pts.length; i++) {
      const a = pts[i - 1];
      const b = pts[i];
      const n = Math.floor(dist(a, b) / step);
      for (let k = 1; k <= n; k++) out.push([a[0] + ((b[0] - a[0]) * k) / (n + 1), a[1] + ((b[1] - a[1]) * k) / (n + 1)]);
      out.push(b);
    }
    return out;
  }

  const r1 = (n) => Math.round(n * 10) / 10;
  const toD = (pts) => pts.map((p, i) => `${i ? "L" : "M"}${r1(p[0])} ${r1(p[1])}`).join(" ");

  // The arrow beside the start dot: a point a little way along the stroke, and the way the stroke is heading there.
  function arrowAt(pts) {
    const total = plen(pts);
    const want = Math.min(15, total * 0.35);
    let acc = 0;
    for (let i = 1; i < pts.length; i++) {
      const s = dist(pts[i - 1], pts[i]);
      if (acc + s >= want) {
        const f = s ? (want - acc) / s : 0;
        const x = pts[i - 1][0] + (pts[i][0] - pts[i - 1][0]) * f;
        const y = pts[i - 1][1] + (pts[i][1] - pts[i - 1][1]) * f;
        return { x, y, deg: (Math.atan2(pts[i][1] - pts[i - 1][1], pts[i][0] - pts[i - 1][0]) * 180) / Math.PI };
      }
      acc += s;
    }
    return { x: pts[0][0], y: pts[0][1], deg: 0 };
  }

  // ---------- translations ----------
  const PA = {
    "Trace the letter": "ਅੱਖਰ ਉੱਤੇ ਲਕੀਰ ਫੇਰੋ",
    "Trace letters with your finger": "ਉਂਗਲ ਨਾਲ ਅੱਖਰਾਂ ਉੱਤੇ ਲਕੀਰ ਫੇਰੋ",
    "Trace each letter with your finger. Start at the green dot and follow the arrow. Then try again without the guide. Tap Show me to see it written, or Tap to continue if tracing is hard.": "ਹਰ ਅੱਖਰ ਉੱਤੇ ਉਂਗਲ ਨਾਲ ਲਕੀਰ ਫੇਰੋ। ਹਰੇ ਬਿੰਦੂ ਤੋਂ ਸ਼ੁਰੂ ਕਰੋ ਅਤੇ ਤੀਰ ਦੇ ਪਿੱਛੇ ਚੱਲੋ। ਫਿਰ ਬਿਨਾਂ ਸਹਾਰੇ ਦੇ ਮੁੜ ਕੋਸ਼ਿਸ਼ ਕਰੋ। ਲਿਖਿਆ ਹੋਇਆ ਵੇਖਣ ਲਈ “ਮੈਨੂੰ ਦਿਖਾਓ” ਦਬਾਓ, ਜਾਂ ਲਕੀਰ ਫੇਰਨੀ ਔਖੀ ਲੱਗੇ ਤਾਂ “ਟੈਪ ਕਰਕੇ ਅੱਗੇ ਵਧੋ” ਦਬਾਓ।",
    "Trace the letter with your finger. Start at the green dot.": "ਉਂਗਲ ਨਾਲ ਅੱਖਰ ਉੱਤੇ ਲਕੀਰ ਫੇਰੋ। ਹਰੇ ਬਿੰਦੂ ਤੋਂ ਸ਼ੁਰੂ ਕਰੋ।",
    "Guided": "ਸਹਾਰੇ ਨਾਲ",
    "On your own": "ਆਪਣੇ ਆਪ",
    "Show me": "ਮੈਨੂੰ ਦਿਖਾਓ",
    "Tap to continue": "ਟੈਪ ਕਰਕੇ ਅੱਗੇ ਵਧੋ",
    "Draw the next stroke": "ਅਗਲੀ ਲਕੀਰ ਬਣਾਓ",
    "Stop tapping, trace again": "ਟੈਪ ਕਰਨਾ ਬੰਦ ਕਰੋ, ਫਿਰ ਲਕੀਰ ਫੇਰੋ",
    "Next letter": "ਅਗਲਾ ਅੱਖਰ",
    "Tracing board for {letter}. Stroke {a} of {b}.": "{letter} ਲਈ ਲਕੀਰ ਫੇਰਨ ਦਾ ਬੋਰਡ। ਲਕੀਰ {a} / {b}।",
    "Start at the green dot and follow the arrow.": "ਹਰੇ ਬਿੰਦੂ ਤੋਂ ਸ਼ੁਰੂ ਕਰੋ ਅਤੇ ਤੀਰ ਦੇ ਪਿੱਛੇ ਚੱਲੋ।",
    "Start at the green dot.": "ਹਰੇ ਬਿੰਦੂ ਤੋਂ ਸ਼ੁਰੂ ਕਰੋ।",
    "Try the other way. Follow the arrow.": "ਦੂਜੇ ਪਾਸਿਓਂ ਕੋਸ਼ਿਸ਼ ਕਰੋ। ਤੀਰ ਦੇ ਪਿੱਛੇ ਚੱਲੋ।",
    "Follow the faint line. Try again.": "ਧੁੰਦਲੀ ਲਕੀਰ ਉੱਤੇ ਚੱਲੋ। ਫਿਰ ਕੋਸ਼ਿਸ਼ ਕਰੋ।",
    "Draw the whole line from the dot.": "ਬਿੰਦੂ ਤੋਂ ਪੂਰੀ ਲਕੀਰ ਬਣਾਓ।",
    "Well done! The stroke is drawn.": "ਸ਼ਾਬਾਸ਼! ਲਕੀਰ ਬਣ ਗਈ।",
    "Here it is. Watch the stroke, then go on.": "ਇਹ ਵੇਖੋ। ਲਕੀਰ ਵੇਖੋ, ਫਿਰ ਅੱਗੇ ਵਧੋ।",
    "Watch how it is written. The numbers show the order.": "ਵੇਖੋ ਇਹ ਕਿਵੇਂ ਲਿਖਿਆ ਜਾਂਦਾ ਹੈ। ਅੰਕ ਕ੍ਰਮ ਦੱਸਦੇ ਹਨ।",
    "Now try it on your own, without the dot and arrow.": "ਹੁਣ ਬਿੰਦੂ ਅਤੇ ਤੀਰ ਤੋਂ ਬਿਨਾਂ ਆਪਣੇ ਆਪ ਕੋਸ਼ਿਸ਼ ਕਰੋ।",
    "Trace the letter on your own. Stroke {a} of {b}.": "ਆਪਣੇ ਆਪ ਅੱਖਰ ਉੱਤੇ ਲਕੀਰ ਫੇਰੋ। ਲਕੀਰ {a} / {b}।",
    "Great! You wrote {letter}.": "ਬਹੁਤ ਵਧੀਆ! ਤੁਸੀਂ {letter} ਲਿਖਿਆ।",
    "{letter} is for {word}": "{letter} {word} ਵਿੱਚ ਹੈ",
    "See my score": "ਮੇਰਾ ਸਕੋਰ ਵੇਖੋ",
    "{n} {n:stroke|strokes} helped": "{n} ਲਕੀਰਾਂ ਵਿੱਚ ਮਦਦ ਮਿਲੀ",
    "Every stroke done by you": "ਹਰ ਲਕੀਰ ਤੁਸੀਂ ਆਪ ਬਣਾਈ",
    "Letter {letter}": "ਅੱਖਰ {letter}",
    "Look at the letter": "ਅੱਖਰ ਵੇਖੋ",
    "Your drawing": "ਤੁਹਾਡੀ ਲਕੀਰ",
  };
  const HI = {
    "Trace the letter": "अक्षर पर लकीर फेरें",
    "Trace letters with your finger": "उँगली से अक्षरों पर लकीर फेरें",
    "Trace each letter with your finger. Start at the green dot and follow the arrow. Then try again without the guide. Tap Show me to see it written, or Tap to continue if tracing is hard.": "हर अक्षर पर उँगली से लकीर फेरें। हरे बिंदु से शुरू करें और तीर के पीछे चलें। फिर बिना सहारे के दोबारा कोशिश करें। लिखा हुआ देखने के लिए “मुझे दिखाओ” दबाएँ, या लकीर फेरना कठिन लगे तो “टैप करके आगे बढ़ें” दबाएँ।",
    "Trace the letter with your finger. Start at the green dot.": "उँगली से अक्षर पर लकीर फेरें। हरे बिंदु से शुरू करें।",
    "Guided": "सहारे के साथ",
    "On your own": "खुद से",
    "Show me": "मुझे दिखाओ",
    "Tap to continue": "टैप करके आगे बढ़ें",
    "Draw the next stroke": "अगली लकीर बनाएँ",
    "Stop tapping, trace again": "टैप करना बंद करें, फिर लकीर फेरें",
    "Next letter": "अगला अक्षर",
    "Tracing board for {letter}. Stroke {a} of {b}.": "{letter} के लिए लकीर फेरने का बोर्ड। लकीर {a} / {b}।",
    "Start at the green dot and follow the arrow.": "हरे बिंदु से शुरू करें और तीर के पीछे चलें।",
    "Start at the green dot.": "हरे बिंदु से शुरू करें।",
    "Try the other way. Follow the arrow.": "दूसरी ओर से कोशिश करें। तीर के पीछे चलें।",
    "Follow the faint line. Try again.": "धुंधली लकीर पर चलें। फिर कोशिश करें।",
    "Draw the whole line from the dot.": "बिंदु से पूरी लकीर बनाएँ।",
    "Well done! The stroke is drawn.": "शाबाश! लकीर बन गई।",
    "Here it is. Watch the stroke, then go on.": "यह देखें। लकीर देखें, फिर आगे बढ़ें।",
    "Watch how it is written. The numbers show the order.": "देखें यह कैसे लिखा जाता है। अंक क्रम बताते हैं।",
    "Now try it on your own, without the dot and arrow.": "अब बिंदु और तीर के बिना खुद कोशिश करें।",
    "Trace the letter on your own. Stroke {a} of {b}.": "खुद से अक्षर पर लकीर फेरें। लकीर {a} / {b}।",
    "Great! You wrote {letter}.": "बहुत बढ़िया! आपने {letter} लिखा।",
    "{letter} is for {word}": "{letter} से {word}",
    "See my score": "मेरा स्कोर देखें",
    "{n} {n:stroke|strokes} helped": "{n} लकीरों में मदद मिली",
    "Every stroke done by you": "हर लकीर आपने खुद बनाई",
    "Letter {letter}": "अक्षर {letter}",
    "Look at the letter": "अक्षर देखें",
    "Your drawing": "आपकी लकीर",
  };
  if (typeof I18N !== "undefined") for (const [table, lines] of [[I18N.pa, PA], [I18N.hi, HI]]) for (const [k, v] of Object.entries(lines)) if (!table[k]) table[k] = v;

  const SVG = "http://www.w3.org/2000/svg";
  const STROKES_REVIEWED = false;

  Games.register("trace", {
    title: "Trace the letter",
    blurb: "Trace letters in the right order",
    how: "Trace each letter with your finger. Start at the green dot and follow the arrow. Then try again without the guide. Tap Show me to see it written, or Tap to continue if tracing is hard.",
    icon: "practice",
    hud: {},
    load: LangGames.load,
    ready: LangGames.ready,

    // Hidden from students until a teacher has checked the stroke shapes and order (review sheet: docs/strokes.html).
    // Set window.POCKET_PREVIEW = true (or STROKES_REVIEWED below) to list it.
    available: (c, subj, ch) => (STROKES_REVIEWED || window.POCKET_PREVIEW === true) && LangGames.applies("trace", c, subj, ch),

    build(c, subj, ch, seed) {
      const R = Games.rng(seed);
      const i = LangGames.info(c, subj, ch);
      const set = LangGames.get("strokes")[i.lang] || {};
      const keys = Object.keys(set);
      const withWord = LangGames.get("letters")[i.lang] || [];
      let picked;
      if (i.lang === "en") {
        // capitals and small letters: two of each
        const caps = Games.shuffled(keys.filter((k) => k === k.toUpperCase()), R).slice(0, 2);
        const small = Games.shuffled(keys.filter((k) => k !== k.toUpperCase()), R).slice(0, PER_ROUND - 2);
        picked = Games.shuffled([...caps, ...small], R);
      } else picked = Games.shuffled(keys, R).slice(0, PER_ROUND);
      const letters = picked.map((k) => {
        const w = withWord.find((x) => x.letter === (i.lang === "en" ? k.toUpperCase() : k));
        return { ch: k, paths: set[k], word: w ? w.word : "", emoji: w ? w.emoji : "" };
      });
      return { lang: i.lang, big: i.cls <= 2, letters };
    },

    mount(el, data, api) {
      const { lang, big, letters } = data;
      const tol = big ? TOL.big : TOL.small;
      const total = letters.length;
      let n = 0; // the letter
      let pass = "guided"; // "guided" then "free"
      let s = 0; // the stroke being traced
      let fails = 0; // fails on this stroke
      let hinted = false; // the guide is shown for this stroke even in the free pass
      let tapMode = false;
      let busy = false; // an animation is playing
      let drawing = null; // { id, pts } while a finger is down
      let helped = 0;
      let firstTry = 0;
      let strokesTotal = 0;
      let timers = [];
      let cur = null; // the letter on the board: { L, strokes: [[pts]], paths }
      let stroke1 = true; // the current stroke has had no failed try yet
      let letterHelp = false; // this letter needed the help fallback (Show me or Tap to continue)

      const $ = (sel) => el.querySelector(sel);
      const later = (fn, ms) => {
        const id = setTimeout(() => api.live() && fn(), ms);
        timers.push(id);
        return id;
      };
      const clearTimers = () => {
        timers.forEach(clearTimeout);
        timers = [];
      };
      const msg = (text) => {
        const m = $("[data-msg]");
        if (m) m.textContent = text;
        api.say(text);
      };
      const showGuide = () => pass === "guided" || hinted;

      function load() {
        const L = letters[n];
        cur = { L, strokes: L.paths.map((d) => LangGames.flatten(d)) };
        s = 0;
        fails = 0;
        hinted = false;
        pass = "guided";
        stroke1 = true;
        busy = false;
        draw();
        msg(t("Start at the green dot and follow the arrow."));
      }

      function draw() {
        clearTimers();
        const { L, strokes } = cur;
        const ghost = strokes.map((p) => `<path d="${toD(p)}"/>`).join("");
        const done = strokes.slice(0, s).map((p) => `<path d="${toD(p)}"/>`).join("");
        const here = strokes[s];
        let guide = "";
        if (here) {
          const a = arrowAt(here);
          const dot = plen(here) < 8;
          guide = `<path class="tr-cur" d="${toD(here)}"/>`;
          if (showGuide())
            guide += `<g class="tr-start"><circle class="tr-ring" cx="${r1(here[0][0])}" cy="${r1(here[0][1])}" r="6"/><circle class="tr-dot" cx="${r1(here[0][0])}" cy="${r1(here[0][1])}" r="4.2"/></g>${dot ? "" : `<g class="tr-arrow" transform="translate(${r1(a.x)} ${r1(a.y)}) rotate(${r1(a.deg)})"><path d="M-4.5 -5 L5.5 0 L-4.5 5 Z"/></g>`}`;
        }
        const label = t("Tracing board for {letter}. Stroke {a} of {b}.", { letter: L.ch, a: Math.min(s + 1, strokes.length), b: strokes.length });
        el.innerHTML = `
          <p class="small muted game-help">${t("Trace the letter with your finger. Start at the green dot.")}</p>
          <div class="card tr-card">
            <div class="tr-top">
              <span class="small muted">${t("{a} of {b}", { a: n + 1, b: total })}</span>
              <span class="tr-chip ${pass}">${pass === "guided" ? t("Guided") : t("On your own")}</span>
              <span class="tr-ref" lang="${lang}" role="img" aria-label="${t("Letter {letter}", { letter: L.ch })}" title="${t("Look at the letter")}">${esc(L.ch)}</span>
            </div>
            <div class="tr-stage">
              <svg class="tr-svg ${hinted ? "hint" : ""}" viewBox="0 0 100 100" role="img" aria-label="${esc(label)}" data-svg>
                <g class="tr-ghost">${ghost}</g>
                <g class="tr-done">${done}</g>
                <g data-guide>${guide}</g>
                <g class="tr-numbers" data-numbers></g>
                <path class="tr-ink" data-ink d=""/>
              </svg>
            </div>
            <div class="tr-msg small" role="status" data-msg></div>
            <div class="tr-actions">
              <button type="button" class="btn" data-act="show">${t("Show me")}</button>
              <button type="button" class="btn ${fails >= 3 ? "primary" : ""}" data-act="tap" aria-pressed="${tapMode}">${tapMode ? t("Stop tapping, trace again") : t("Tap to continue")}</button>
              ${tapMode ? `<button type="button" class="btn primary block" data-act="step">${t("Draw the next stroke")}</button>` : ""}
            </div>
          </div>
          <div data-done></div>`;
      }

      // ---------- the stroke was right, or given ----------
      function strokeDone(withHelp) {
        const { strokes } = cur;
        strokesTotal++;
        if (withHelp) {
          helped++;
          letterHelp = true;
        }
        else if (stroke1) firstTry++;
        api.score(withHelp ? 2 : stroke1 ? 10 : 6);
        s++;
        fails = 0;
        hinted = false;
        stroke1 = true;
        if (s < strokes.length) {
          draw();
          msg(pass === "guided" ? t("Start at the green dot and follow the arrow.") : t("Trace the letter on your own. Stroke {a} of {b}.", { a: s + 1, b: strokes.length }));
        } else passDone();
      }

      function passDone() {
        if (pass === "guided") {
          pass = "free";
          s = 0;
          fails = 0;
          hinted = false;
          stroke1 = true;
          draw();
          // keep the finished letter on show for a moment? No: the free pass starts at once, with the message read out
          msg(t("Now try it on your own, without the dot and arrow."));
          return;
        }
        letterDone();
      }

      function letterDone() {
        const { L, strokes } = cur;
        api.score(20);
        api.answered({ q: `Write the letter ${L.ch} ${L.word ? "for " + L.word + " " : ""}(${lang} alphabet): trace the strokes of the letter`, explain: `Letter formation: writing the letter ${L.ch}.` }, !letterHelp);
        letterHelp = false;
        const last = n === total - 1;
        const word = L.word ? `<div class="tr-word"><span class="lt-emoji big" aria-hidden="true">${L.emoji}</span><span class="lt-word big" lang="${lang}">${esc(L.word)}</span>${LangGames.speaker(L.word)}</div>` : "";
        const done = strokes.map((p) => `<path d="${toD(p)}"/>`).join("");
        const board = `<svg class="tr-svg tr-final" viewBox="0 0 100 100" role="img" aria-label="${t("Letter {letter}", { letter: L.ch })}"><g class="tr-ghost">${done}</g><g class="tr-done">${done}</g></svg>`;
        el.innerHTML = `
          <div class="card tr-card tr-win">
            <div class="feedback good" role="status"><div class="h">${t("Great! You wrote {letter}.", { letter: `<strong lang="${lang}">${esc(L.ch)}</strong>` })}</div></div>
            <div class="tr-stage small">${board}</div>
            <div class="tr-bigletter" lang="${lang}">${esc(L.ch)}</div>
            ${word}
            ${L.word ? `<div class="small muted">${t("{letter} is for {word}", { letter: esc(L.ch), word: esc(L.word) })}</div>` : ""}
            <div class="quiz-nav"><button class="btn primary" data-act="${last ? "finish" : "next"}">${last ? t("See my score") : t("Next letter")} ${icon("arrow")}</button></div>
          </div>`;
        api.say(t("Great! You wrote {letter}.", { letter: L.ch }) + (L.word ? " " + t("{letter} is for {word}", { letter: L.ch, word: L.word }) : ""));
        const b = $("[data-act]");
        if (b) b.focus({ preventScroll: true });
      }

      // ---------- animations: a stroke being written ----------
      // Draws `pts` into the board, from start to end, over ms; then calls done(). With reduced motion it is drawn at once.
      function animate(pts, cls, ms, done) {
        const g = $("[data-guide]");
        if (!g) return done();
        const path = document.createElementNS(SVG, "path");
        path.setAttribute("d", toD(pts));
        path.setAttribute("class", cls);
        g.appendChild(path);
        if (reduced() || !path.getTotalLength) return done();
        const len = path.getTotalLength();
        path.style.strokeDasharray = len;
        path.style.strokeDashoffset = len;
        const t0 = performance.now();
        const tick = (now) => {
          if (!api.live() || !path.isConnected) return;
          const f = Math.min(1, (now - t0) / ms);
          path.style.strokeDashoffset = len * (1 - f);
          if (f < 1) requestAnimationFrame(tick);
          else done();
        };
        requestAnimationFrame(tick);
      }

      function showMe() {
        if (busy || !cur) return;
        busy = true;
        helped++; // counts against stars, a little
        letterHelp = true;
        const { strokes } = cur;
        const holder = $("[data-numbers]");
        msg(t("Watch how it is written. The numbers show the order."));
        $("[data-ink]").setAttribute("d", "");
        const numbers = (upto) => {
          holder.innerHTML = strokes
            .slice(0, upto)
            .map((p, i) => {
              const a = arrowAt(p);
              return `<g><circle class="tr-num-bg" cx="${r1(p[0][0])}" cy="${r1(p[0][1])}" r="4.6"/><text class="tr-num" x="${r1(p[0][0])}" y="${r1(p[0][1] + 1.6)}" text-anchor="middle">${i + 1}</text></g>${plen(p) < 8 ? "" : `<g class="tr-arrow still" transform="translate(${r1(a.x)} ${r1(a.y)}) rotate(${r1(a.deg)})"><path d="M-4.5 -5 L5.5 0 L-4.5 5 Z"/></g>`}`;
            })
            .join("");
        };
        const finish = () => {
          busy = false;
          later(() => {
            const h = $("[data-numbers]");
            if (h) h.innerHTML = "";
            $("[data-guide]") && $("[data-guide]").querySelectorAll(".tr-demo").forEach((x) => x.remove());
          }, reduced() ? 5000 : 1200);
        };
        if (reduced()) {
          numbers(strokes.length);
          strokes.forEach((p) => animate(p, "tr-demo", 0, () => {}));
          return finish();
        }
        let i = 0;
        const next = () => {
          if (!api.live() || !$("[data-numbers]")) return;
          if (i >= strokes.length) return finish();
          numbers(i + 1);
          animate(strokes[i], "tr-demo", 900, () => {
            i++;
            later(next, 250);
          });
        };
        next();
      }

      // a stroke the child could not make: draw it for them
      function giveStroke(reason) {
        if (busy) return;
        busy = true;
        const pts = cur.strokes[s];
        msg(reason === "tap" ? t("Well done! The stroke is drawn.") : t("Here it is. Watch the stroke, then go on."));
        $("[data-ink]").setAttribute("d", "");
        animate(pts, "tr-demo", 800, () => {
          later(() => {
            busy = false; // stays on until the stroke is counted, so a second tap cannot count it twice
            strokeDone(true);
          }, reduced() ? 600 : 250);
        });
      }

      // ---------- the finger ----------
      const point = (e, svg) => {
        const r = svg.getBoundingClientRect();
        return [((e.clientX - r.left) / r.width) * 100, ((e.clientY - r.top) / r.height) * 100];
      };

      el.addEventListener("pointerdown", (e) => {
        const svg = e.target.closest && e.target.closest("[data-svg]");
        if (!svg || busy || tapMode || drawing || !cur || (e.pointerType === "mouse" && e.button !== 0)) return;
        e.preventDefault();
        drawing = { id: e.pointerId, pts: [point(e, svg)], svg };
        try {
          svg.setPointerCapture(e.pointerId);
        } catch (_) {}
        paintInk();
      });
      el.addEventListener("pointermove", (e) => {
        if (!drawing || e.pointerId !== drawing.id) return;
        e.preventDefault();
        drawing.pts.push(point(e, drawing.svg));
        paintInk();
      });
      const lift = (e) => {
        if (!drawing || e.pointerId !== drawing.id) return;
        const { pts, svg } = drawing;
        drawing = null;
        if (e.type === "pointercancel") return void $("[data-ink]") && $("[data-ink]").setAttribute("d", "");
        try {
          svg.releasePointerCapture(e.pointerId);
        } catch (_) {}
        check(pts);
      };
      el.addEventListener("pointerup", lift);
      el.addEventListener("pointercancel", lift);
      function paintInk() {
        const ink = $("[data-ink]");
        if (ink && drawing) ink.setAttribute("d", toD(drawing.pts));
      }

      function check(raw) {
        if (!api.live() || !cur) return;
        const pts = densify(raw);
        const res = judge(pts, cur.strokes[s], tol);
        if (res.ok) {
          const ink = $("[data-ink]");
          if (ink) ink.setAttribute("d", "");
          return strokeDone(false);
        }
        fails++;
        stroke1 = false;
        const ink = $("[data-ink]");
        if (ink) {
          ink.classList.add("fade");
          later(() => {
            const i2 = $("[data-ink]");
            if (i2) {
              i2.setAttribute("d", "");
              i2.classList.remove("fade");
            }
          }, 500);
        }
        if (fails >= GIVE_UP) return giveStroke("fail");
        // a hint: the dot and arrow for this stroke, even in the free pass; a stroke the wrong way round gets the arrow nudged
        if (!showGuide() || res.why === "direction") {
          hinted = true;
          const g = $("[data-svg]");
          const guideHtml = redrawGuide();
          if (g && guideHtml != null) g.classList.add("hint");
        }
        const text = res.why === "direction" ? t("Try the other way. Follow the arrow.") : res.why === "start" ? t("Start at the green dot.") : res.why === "short" ? t("Draw the whole line from the dot.") : t("Follow the faint line. Try again.");
        msg(text);
        const hint = $("[data-svg]");
        if (hint) {
          hint.classList.remove("nudge");
          void hint.getBoundingClientRect();
          hint.classList.add("nudge");
        }
        if (fails === 3) {
          const tb = $("[data-act=tap]");
          if (tb) tb.classList.add("primary");
        }
      }

      // draws the start dot and the arrow for the current stroke (used when a hint appears in the free pass)
      function redrawGuide() {
        const g = $("[data-guide]");
        const here = cur.strokes[s];
        if (!g || !here) return null;
        const a = arrowAt(here);
        const dot = plen(here) < 8;
        g.innerHTML = `<path class="tr-cur" d="${toD(here)}"/><g class="tr-start"><circle class="tr-ring" cx="${r1(here[0][0])}" cy="${r1(here[0][1])}" r="6"/><circle class="tr-dot" cx="${r1(here[0][0])}" cy="${r1(here[0][1])}" r="4.2"/></g>${dot ? "" : `<g class="tr-arrow" transform="translate(${r1(a.x)} ${r1(a.y)}) rotate(${r1(a.deg)})"><path d="M-4.5 -5 L5.5 0 L-4.5 5 Z"/></g>`}`;
        return g.innerHTML;
      }

      // ---------- buttons ----------
      el.addEventListener("click", (e) => {
        const b = e.target.closest("[data-act]");
        if (!b || !api.live()) return;
        const act = b.dataset.act;
        if (act === "show") showMe();
        else if (act === "tap") {
          tapMode = !tapMode;
          draw();
          msg(tapMode ? t("Tap to continue") : t("Start at the green dot and follow the arrow."));
          const nb = $(tapMode ? "[data-act=step]" : "[data-act=tap]");
          if (nb) nb.focus({ preventScroll: true });
        } else if (act === "step") giveStroke("tap");
        else if (act === "next") {
          n++;
          load();
          window.scrollTo({ top: 0 });
        } else if (act === "finish") {
          const ratio = strokesTotal ? firstTry / strokesTotal : 1;
          const lines = [helped ? t("{n} {n:stroke|strokes} helped", { n: helped }) : t("Every stroke done by you")];
          api.finish({ stars: ratio >= 0.75 && helped <= 2 ? 3 : ratio >= 0.4 ? 2 : 1, lines });
        }
      });

      load();
    },
  });

  window.TraceGame = { judge, resample, densify };
})();
