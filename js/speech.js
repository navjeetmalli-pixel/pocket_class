// Read aloud for young students, using the device's own speech voices (window.speechSynthesis).
// Nothing is downloaded and no network is used. Buttons appear for Classes 1–3 (all subjects) and for the
// English, Hindi and Punjabi chapters of Classes 4–5, and only when the device has a voice for the text.

const Speech = (() => {
  const synth = window.speechSynthesis;
  const supported = !!synth && typeof window.SpeechSynthesisUtterance === "function";
  const LANGUAGE_SUBJECTS = ["english", "hindi", "punjabi", "englishpb", "hindipb"];

  const eligible = (cls, subject) => supported && (cls <= 3 || (cls <= 5 && LANGUAGE_SUBJECTS.includes(subject)));

  // The language of a text, judged by its script.
  const langOf = (text) => (/[਀-੿]/.test(text) ? "pa" : /[ऀ-ॿ]/.test(text) ? "hi" : "en");
  const TAGS = { en: "en-IN", hi: "hi-IN", pa: "pa-IN" };

  // A voice for the language: the Indian one if there is one, else any voice of that language, else none.
  function voiceFor(lang) {
    if (!supported) return null;
    const voices = synth.getVoices().filter((v) => v.lang);
    const norm = (v) => v.lang.replace("_", "-").toLowerCase();
    return voices.find((v) => norm(v) === TAGS[lang].toLowerCase()) || voices.find((v) => norm(v).split("-")[0] === lang) || null;
  }

  const speakable = (text) => plain(text).replace(/\s+/g, " ").trim();

  // The button's HTML, or "" when this content doesn't get one. `text` is what it will read.
  function btn(cls, subject, text) {
    const say = speakable(text);
    if (!say || !eligible(cls, subject) || Release.langLocked(langOf(say)) || Release.subjectLocked(subject)) return ""; // no Hindi / Punjabi voice while locked
    return `<button type="button" class="say no-print" data-say="${esc(say)}" ${voiceFor(langOf(say)) ? "" : "hidden"} aria-label="${t("Read aloud")}" title="${t("Read aloud")}">${icon("speaker")}</button>`;
  }

  // The big "Listen again" button beside a multiple-choice question (Classes 1-3): the question, then "A: ..., B: ...".
  // Classes 1-2 also hear it by themselves when the question appears (data-auto), unless sound effects are off.
  // `auto` is false once the question has been answered, so a redraw after the answer never reads it again.
  function profileClass() {
    const p = typeof Store !== "undefined" && Store.state && Store.state.profile;
    return (p && p.cls) || 0;
  }
  function listen(it, order, { auto = true } = {}) {
    const cls = profileClass();
    if (!cls || cls > 3 || !it || !Array.isArray(it.options)) return "";
    const ref = it.ref || {};
    const subject = ref.subject || (ref.key && typeof Store !== "undefined" ? Store.parseKey(ref.key).subject : "");
    const list = order || it.options.map((_, i) => i);
    const say = speakable([it.q, ...list.map((o, k) => `${"ABCD"[k]}: ${it.options[o]}`)].join(". ")).replace(/_{2,}/g, ", ");
    if (!say || !supported || Release.langLocked(langOf(say)) || (subject && Release.subjectLocked(subject))) return "";
    const mascot = typeof Mascot !== "undefined" ? Mascot.svg("point", { size: 44 }) : icon("speaker");
    return `<div class="listen-row no-print"><button type="button" class="say listen-btn" data-say="${esc(say)}" ${auto && cls <= 2 ? 'data-auto="1"' : ""} ${voiceFor(langOf(say)) ? "" : "hidden"} aria-label="${t("Listen again")}">${mascot}<span>${t("Listen again")}</span></button></div>`;
  }

  let playing = null;
  function stop() {
    if (!supported) return;
    if (typeof ReadAloud !== "undefined") ReadAloud.stop(); // one queue: "Read to me" ends too
    synth.cancel();
    if (playing) playing.classList.remove("on");
    playing = null;
  }

  function speak(button) {
    const text = button.dataset.say;
    const wasPlaying = playing === button;
    stop();
    if (wasPlaying && !button.classList.contains("listen-btn")) return; // the small speaker toggles; "Listen again" always starts over
    const voice = voiceFor(langOf(text));
    if (!voice) return (button.hidden = true);
    const u = new SpeechSynthesisUtterance(text);
    try {
      u.voice = voice;
    } catch (e) {
      /* a web view with an odd voice object: the language below is enough */
    }
    u.lang = voice.lang;
    u.rate = 0.85; // slower, for young listeners
    const end = () => {
      if (playing === button) playing = null;
      button.classList.remove("on");
    };
    u.onend = u.onerror = end;
    playing = button;
    button.classList.add("on");
    synth.speak(u);
  }

  // Voices can arrive after the page has drawn: show or hide the buttons when they do.
  function sync() {
    document.querySelectorAll(".say").forEach((b) => (b.hidden = !voiceFor(langOf(b.dataset.say))));
    document.querySelectorAll(".listen-btn[data-auto]").forEach(auto);
  }

  // Auto-read: a new "Listen again" button marked data-auto (Classes 1-2, question not yet answered) reads its question once.
  // It follows the Sound effects setting; with sound off the button still works when tapped.
  let lastAuto = "";
  function auto(btn) {
    if (!btn || btn.hidden || !btn.isConnected || btn.dataset.say === lastAuto) return;
    if (typeof Sound !== "undefined" && !Sound.enabled()) return;
    lastAuto = btn.dataset.say;
    setTimeout(() => {
      const go = () => btn.isConnected && !btn.hidden && lastAuto === btn.dataset.say && !btn.closest("[hidden]") && speak(btn);
      if (typeof ReadAloud !== "undefined" && ReadAloud.busy()) ReadAloud.after(go); // never over the Mithu greeting: after it
      else go();
    }, 300);
  }

  if (supported) {
    document.addEventListener("click", (e) => {
      const b = e.target.closest(".say");
      if (b) {
        e.preventDefault();
        speak(b);
      }
    });
    if (synth.addEventListener) synth.addEventListener("voiceschanged", sync);
    // Leaving the page stops the voice.
    window.addEventListener("hashchange", stop);
    window.addEventListener("pagehide", stop);
    document.addEventListener("visibilitychange", () => document.hidden && stop());
    // Answering (a tap on an option or any lesson button, or a key) stops the reading too.
    document.addEventListener(
      "click",
      (e) => {
        if (e.target.closest && e.target.closest(".option, [data-pick], [data-qotd], [data-act], .btn") && !e.target.closest(".listen-btn, .rtm, .opt-say")) stop();
      },
      true
    );
    document.addEventListener("keydown", (e) => !e.metaKey && !e.ctrlKey && !e.altKey && /^[1-4a-dA-D]$|^Enter$/.test(e.key) && stop(), true);
    // Watch for a new question: its "Listen again" button appears with data-auto.
    new MutationObserver((muts) => {
      const fresh = [];
      muts.forEach((m) =>
        m.addedNodes.forEach((n) => {
          if (n.nodeType !== 1) return;
          if (n.matches && n.matches(".listen-btn[data-auto]")) fresh.push(n);
          else if (n.querySelectorAll) n.querySelectorAll(".listen-btn[data-auto]").forEach((b) => fresh.push(b));
        })
      );
      if (!document.querySelector(".listen-btn")) lastAuto = ""; // the question screen is gone: the next one reads again
      fresh.forEach(auto);
    }).observe(document.documentElement, { childList: true, subtree: true });
  }

  return { btn, listen, stop, supported, langOf, voiceFor, speakable };
})();
