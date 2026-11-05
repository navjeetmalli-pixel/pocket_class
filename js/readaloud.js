// "Read to me": Mithu reads the whole screen aloud for Classes 1-3 (children who cannot read yet, or read slowly).
// Uses the device's own voices through Speech (js/speech.js); nothing is downloaded.
//
//   * A round floating button (bottom right, above the tab bar). Tap: reads the screen's main content in order, one element
//     at a time, with a soft highlight that moves to the element being read. Tap again to stop.
//   * What is read: elements marked data-read (an order number, or empty = document order); a screen with no marks uses the
//     READ list below (headings, instructions, the question, the key buttons as "Next: ..."). Answers are NOT read with the
//     question: each has its own Mithu speaker.
//   * Each element is read in the voice of its own script (English, Hindi, Punjabi). Text with no voice, or in a language the
//     release lock hides, is skipped and the reading goes on.
//   * Nothing is read by itself when a screen or question appears: reading starts only when the child presses a button (the
//     owner's decision, 5 Nov 2026). autoRead() below is kept but not called.
//   * Tap to hear a single item (Classes 1-3): press and hold a tile, card, option or flashcard for half a second; it is read and
//     the tap that follows is ignored, so the normal tap still does its usual job.
//   * Hear one answer (Classes 1-3): every answer option gets a small Mithu speaker button on its right edge. Tapping it reads
//     only that answer (not the question); tapping the answer itself still chooses it. The speaker is a separate button
//     beside the option (a button cannot sit inside a button), in a wrapper that takes the option's place.
//   * One queue: starting anything cancels what is being said. Leaving the screen or hiding the app stops it.

const ReadAloud = (() => {
  const synth = window.speechSynthesis;
  const ok = typeof Speech !== "undefined" && Speech.supported;

  // What a screen without data-read marks reads, in document order.
  const READ = [
    "h1:not(.topbar-title)", "h2", "h3", ".topbar-title",
    ".m-bubble p", ".hero > p", ".shell-head .sub", ".empty-text", ".empty p",
    ".plan-title", ".qotd .quiz-q", ".subject-name", ".ch-title", ".continue .t", ".hub-nav a", ".guided-card strong", ".gc-title", ".tool .tt",
    ".note li", "dl.terms dt", "dl.terms dd", ".flashcard", ".example .q", ".example .steps li", ".example .answer",
    ".g-lead", ".g-note li", ".g-steps li",
    ".quiz-q", ".feedback",
    ".game-how", ".lt-prompt", ".ord-qtext", ".mk-q", ".mk-sq", ".result-msg", ".rs-sec li", ".rs-next p",
    ".stat", ".obj-text", ".vl-obj", ".vl-q", ".sim-step h3", ".ob-choice .ct",
    ".btn.primary", "[data-act=next]",
  ].join(",");

  // Key prompts read by themselves for Classes 1-2; the first group that is on screen wins.
  const AUTO = [
    { id: "intro", sel: ".game-intro .game-title, .game-intro .game-how" },
    { id: "guided", sel: ".guided .g-lead, .guided .g-note h3" },
    { id: "results", sel: ".result-msg, .results-summary h2, .results-summary .m-bubble p, .results-summary .rs-h, .results-summary li, .rs-next p" },
    { id: "lab", sel: ".vl-intro .vl-obj" },
    { id: "greet", sel: ".mascot-head .m-bubble h1, .mascot-head .m-bubble p", once: true },
  ];
  const TIMED = '[data-game="race"], [data-game="quickfire"]';
  const HEAR = ".subject-card, .chapter-row, .plan-item, .hub-nav a, .game-card, .tool, .flashcard, .option, .guided-card, [data-hear]";
  const HEAR_TEXT = ".subject-name, .ch-title, .plan-title, .gc-title, .tt";

  const root = () => document.getElementById("app");
  const profileClass = () => {
    const p = typeof Store !== "undefined" && Store.state && Store.state.profile;
    return (p && p.cls) || 0;
  };
  const youngClass = () => profileClass() >= 1 && profileClass() <= 3;
  const heard = (lang) => ok && !Release.langLocked(lang) && !!Speech.voiceFor(lang);
  const visible = (el) => el.isConnected && el.getClientRects().length > 0 && !el.closest("[hidden], [aria-hidden='true']");

  // ---------- what an element says ----------
  function textOf(el) {
    if (el.dataset && el.dataset.readText) return Speech.speakable(el.dataset.readText);
    const c = el.cloneNode(true);
    c.querySelectorAll("svg, .no-print, .say, [hidden], .sr-only, [aria-hidden='true'], .letter, script, style").forEach((n) => n.remove());
    c.querySelectorAll("*").forEach((n) => n.after(" "));
    let s = Speech.speakable(c.textContent || "").replace(/_{2,}/g, ", ");
    if (el.matches(".option")) {
      const opts = [...(el.closest(".options, .vl-invs, .g-choices, .ob-choices") || document).querySelectorAll(".option")];
      s = s ? `${"ABCDEFGH"[Math.max(0, opts.indexOf(el))]}: ${s}` : "";
    } else if (el.matches(".btn, [data-act=next]") && s && !/^next$/i.test(s)) s = `${t("Next")}: ${s}`;
    return s;
  }

  // The reading list of the screen: [{ el, text, lang }], from the first element not scrolled off the top.
  function gather() {
    const r = root();
    if (!r) return [];
    let els = [...r.querySelectorAll("[data-read]")];
    if (els.length) {
      let last = 0;
      const keyed = els.map((e, i) => {
        const n = e.dataset.read !== "" && !isNaN(+e.dataset.read) ? +e.dataset.read : last;
        last = n;
        return [e, n, i];
      });
      keyed.sort((x, y) => x[1] - y[1] || x[2] - y[2]);
      els = keyed.map((x) => x[0]);
    } else {
      els = [...r.querySelectorAll(READ)];
      if (els.some((e) => !e.matches(".topbar-title"))) els = els.filter((e) => !e.matches(".topbar-title"));
    }
    els = els.filter((e, _, all) => visible(e) && !all.some((o) => o !== e && o.contains(e)) && !e.closest(".obj-panel, .no-read"));
    let list = els.map((el) => ({ el, text: textOf(el) })).filter((x) => x.text);
    list.forEach((x) => (x.lang = Speech.langOf(x.text)));
    list = list.filter((x) => heard(x.lang));
    const first = list.findIndex((x) => x.el.getBoundingClientRect().bottom > 56);
    return first > 0 ? list.slice(first) : list;
  }

  // ---------- the one queue ----------
  let run = null;
  let seq = 0;
  let marked = null;

  const mark = (el) => {
    if (marked) marked.classList.remove("reading");
    marked = el || null;
    if (!el) return;
    el.classList.add("reading");
    const b = el.getBoundingClientRect();
    if (b.top < 60 || b.bottom > innerHeight - 150) el.scrollIntoView({ block: "center", behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
  };

  function stop() {
    const r = run;
    run = null;
    if (r && r.timer) clearTimeout(r.timer);
    mark(null);
    if (r) {
      synth.cancel();
      setBtn();
    }
  }

  function finish(r) {
    if (run !== r) return;
    run = null;
    if (r.timer) clearTimeout(r.timer);
    mark(null);
    setBtn();
    const next = r.after;
    if (next) setTimeout(next, 60);
  }

  function step(r) {
    if (run !== r) return;
    if (r.timer) clearTimeout(r.timer);
    const it = r.items[r.i];
    if (!it || !it.el.isConnected) return finish(r);
    const voice = Speech.voiceFor(it.lang);
    if (!voice) {
      r.i++;
      return step(r);
    }
    mark(it.el);
    const u = new SpeechSynthesisUtterance(it.text);
    try {
      u.voice = voice;
    } catch (e) {
      /* the language below is enough */
    }
    u.lang = voice.lang;
    u.rate = Speech.rate(); // the speed picked in Settings
    const next = () => {
      if (run !== r || r.cur !== u) return;
      r.i++;
      step(r);
    };
    u.onend = u.onerror = next;
    r.cur = u;
    r.timer = setTimeout(next, 3500 + it.text.length * 140); // some engines never report the end
    synth.speak(u);
  }

  function readList(items, { auto = false } = {}) {
    if (!ok || !items.length) return false;
    Speech.stop();
    stop();
    const r = (run = { id: ++seq, items, i: 0, auto, cur: null, timer: 0, after: null });
    setBtn();
    step(r);
    return true;
  }

  // ---------- the floating button ----------
  let btn = null;
  function setBtn() {
    if (!btn) return;
    const on = !!run && !run.auto && !run.single;
    btn.classList.toggle("on", on);
    // While it reads, the header button floats (bottom right) so Stop stays in reach as the page scrolls with the highlight.
    document.body.classList.toggle("rtm-reading", on);
    btn.setAttribute("aria-pressed", on);
    const label = on ? t("Stop reading") : t("Read to me");
    btn.setAttribute("aria-label", label);
    btn.title = label;
    btn.querySelector(".rtm-ic").innerHTML = icon(on ? "pause" : "speaker");
  }

  function makeBtn() {
    btn = document.createElement("button");
    btn.type = "button";
    btn.className = "rtm no-print";
    btn.hidden = true;
    btn.innerHTML = `<span class="rtm-mithu" aria-hidden="true">${typeof Mascot !== "undefined" ? Mascot.svg("point", { size: 48 }) : ""}</span><span class="rtm-ic" aria-hidden="true"></span>`;
    btn.addEventListener("click", () => {
      if (run && !run.auto && !run.single) return stop();
      readList(gather());
    });
    document.body.appendChild(btn);
    setBtn();
  }

  // Shown for Classes 1-3 (also during setup once the class is known) when the device has a voice for English, Hindi or Punjabi.
  // It sits in the page's own header (next to the back / profile buttons), so it never covers an answer or a speaker; a screen
  // without a header gets the floating button instead.
  function place(show) {
    const r = root();
    const head = show && r ? r.querySelector(".mascot-sub, .topbar, .home-head") : null;
    if (head) {
      const before = head.querySelector(".profile-btn, [data-act=profile], .avatar-btn");
      const box = before ? before.parentElement : head;
      if (btn.parentElement !== box || (before && btn.nextElementSibling !== before)) before ? box.insertBefore(btn, before) : box.appendChild(btn);
      btn.classList.add("in-head");
    } else {
      if (btn.parentElement !== document.body) document.body.appendChild(btn);
      btn.classList.remove("in-head");
    }
    // On Today (young) Mithu already greets the learner right above: here the button is a plain speaker, same size and job.
    btn.classList.toggle("plain", !!(head && head.matches(".mascot-sub")));
    document.body.dataset.rtm = show && !head ? "1" : "";
  }
  function refresh() {
    if (!btn) return;
    const show = ok && youngClass() && ["en", "hi", "pa"].some(heard);
    btn.hidden = !show;
    place(show);
    if (!show && run) stop();
  }

  // ---------- auto-read of a new screen's key prompt (Classes 1-2) ----------
  let lastSig = "";
  let greeted = false;
  function autoRead() {
    const cls = profileClass();
    if (!ok || !cls || cls > 2 || !btn || btn.hidden || document.hidden) return;
    const r = root();
    for (const g of AUTO) {
      const items = [...r.querySelectorAll(g.sel)].filter(visible).map((el) => ({ el, text: textOf(el) })).filter((x) => x.text);
      if (!items.length) continue;
      const sig = g.id + "|" + items.map((x) => x.text).join("|");
      if (sig === lastSig) return;
      lastSig = sig;
      if (g.once && greeted) return;
      if (typeof Sound !== "undefined" && !Sound.enabled()) return;
      if (r.querySelector(TIMED) || (g.id !== "greet" && document.querySelector(".listen-btn[data-auto]"))) return;
      if (run && !run.auto) return; // the child pressed the button: leave it alone
      items.forEach((x) => (x.lang = Speech.langOf(x.text)));
      const say = items.filter((x) => heard(x.lang));
      if (!say.length) return;
      if (g.once) greeted = true;
      setTimeout(() => say[0].el.isConnected && readList(say, { auto: true }), 80);
      return;
    }
  }

  // ---------- tap to hear: press and hold ----------
  let press = null;
  let swallow = null;
  function hearText(el) {
    if (el.dataset.hear) return Speech.speakable(el.dataset.hear);
    const part = el.matches(".option, .flashcard") ? null : el.querySelector(HEAR_TEXT);
    return textOf(part || el);
  }
  function hearOne(el) {
    const text = hearText(el);
    const lang = Speech.langOf(text);
    if (!text || !heard(lang)) return;
    readList([{ el, text, lang }]);
    run.single = true;
  }
  function pressEnd() {
    if (press && press.timer) clearTimeout(press.timer);
    press = null;
  }

  // ---------- a speaker on every answer ----------
  const answerText = (opt) => {
    const c = opt.cloneNode(true);
    c.querySelectorAll("svg, .letter, .sr-only, [aria-hidden='true']").forEach((n) => n.remove());
    return Speech.speakable(c.textContent || "");
  };
  function decorateAnswers() {
    const r = root();
    if (!r) return;
    const young = youngClass();
    r.querySelectorAll(".opt-wrap").forEach((w) => w.classList.toggle("off", !young));
    if (!young) return;
    r.querySelectorAll(".option").forEach((opt) => {
      if (opt.parentElement.classList.contains("opt-wrap") || opt.closest(".rtm, .no-read")) return;
      const text = answerText(opt);
      if (!text || !heard(Speech.langOf(text))) return;
      const w = document.createElement("div");
      w.className = "opt-wrap" + (opt.classList.contains("pic-opt") ? " pic" : "");
      opt.before(w);
      w.appendChild(opt);
      const b = document.createElement("button");
      b.type = "button";
      b.className = "opt-say";
      b.setAttribute("aria-label", t("Hear this answer") + ": " + text);
      b.innerHTML = `${typeof Mascot !== "undefined" ? Mascot.svg("point", { size: 30 }) : ""}<span class="opt-say-ico" aria-hidden="true">${icon("speaker")}</span>`;
      b.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        const now = answerText(opt);
        readList([{ el: opt, text: now, lang: Speech.langOf(now) }]);
        if (run) run.single = true;
      });
      w.appendChild(b);
    });
  }

  function init() {
    makeBtn();
    refresh();
    let tick = 0;
    const later = () => {
      clearTimeout(tick);
      tick = setTimeout(() => {
        refresh();
        decorateAnswers();
      }, 200);
    };
    const app = root();
    if (app) new MutationObserver(later).observe(app, { childList: true, subtree: true });
    if (synth.addEventListener) synth.addEventListener("voiceschanged", refresh);
    window.addEventListener("hashchange", () => {
      stop();
      lastSig = "";
      later();
    });
    window.addEventListener("pagehide", stop);
    document.addEventListener("visibilitychange", () => document.hidden && stop());

    document.addEventListener(
      "pointerdown",
      (e) => {
        pressEnd();
        const el = youngClass() && e.target.closest && e.target.closest(HEAR);
        if (!el || e.target.closest(".rtm") || (e.pointerType === "mouse" && e.button !== 0)) return;
        press = { el, x: e.clientX, y: e.clientY, timer: setTimeout(() => ((swallow = { el, until: Date.now() + 1500 }), hearOne(el)), 500) };
      },
      true
    );
    document.addEventListener("pointermove", (e) => press && Math.hypot(e.clientX - press.x, e.clientY - press.y) > 10 && pressEnd(), true);
    ["pointerup", "pointercancel", "scroll"].forEach((n) => document.addEventListener(n, () => pressEnd(), true));
    // The click that ends a long press must not also open the tile or answer the question.
    window.addEventListener(
      "click",
      (e) => {
        if (swallow && Date.now() < swallow.until && swallow.el.contains(e.target)) {
          e.preventDefault();
          e.stopImmediatePropagation();
        }
        swallow = null;
      },
      true
    );
    document.addEventListener("contextmenu", (e) => youngClass() && e.target.closest && e.target.closest(HEAR) && e.preventDefault());
  }

  if (ok) init();

  return { stop, busy: () => !!run && run.auto, after: (fn) => run && (run.after = fn), reading: () => !!run, gather, refresh };
})();
