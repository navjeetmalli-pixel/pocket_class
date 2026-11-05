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

  // ---------- the voice and speed the learner picked (Settings → Read-aloud voice), saved on this device ----------
  // localStorage "vidya:voice" = { en: voiceURI, hi: voiceURI, pa: voiceURI, rate: 0.85 }. A saved voice that this device no
  // longer has is ignored, so the default comes back.
  const PREF = "vidya:voice";
  const RATES = { slow: 0.7, normal: 0.85, quick: 1 };
  function prefs() {
    try {
      return JSON.parse(localStorage.getItem(PREF) || "{}") || {};
    } catch (e) {
      return {};
    }
  }
  function savePrefs(p) {
    try {
      localStorage.setItem(PREF, JSON.stringify(p));
    } catch (e) {
      /* private mode: the choice lasts until the page closes */
    }
  }
  const idOf = (v) => v.voiceURI || v.name;
  const norm = (v) => String(v.lang || "").replace("_", "-").toLowerCase();
  // Every voice of a language on this device, the Indian ones first.
  function voicesFor(lang) {
    if (!supported) return [];
    const all = synth.getVoices().filter((v) => v.lang && norm(v).split("-")[0] === lang);
    const tag = TAGS[lang].toLowerCase();
    return all.sort((a, b) => (norm(b) === tag) - (norm(a) === tag) || String(a.name).localeCompare(String(b.name)));
  }
  // A voice for the language: the one the learner picked if this device has it, else the Indian one, else any voice of that
  // language, else none.
  function voiceFor(lang) {
    if (!supported) return null;
    const list = voicesFor(lang);
    const want = prefs()[lang];
    return (want && list.find((v) => idOf(v) === want)) || list[0] || null;
  }
  const rate = () => {
    const r = Number(prefs().rate);
    return r >= 0.5 && r <= 1.2 ? r : RATES.normal;
  };
  function setVoice(lang, id) {
    const p = prefs();
    if (id) p[lang] = id;
    else delete p[lang];
    savePrefs(p);
  }
  function setRate(r) {
    const p = prefs();
    p.rate = r;
    savePrefs(p);
  }
  // A short sample in the language, in the voice and speed picked now.
  const SAMPLE = { en: "Hello! I am Mithu. Let us learn together.", hi: "नमस्ते! मैं मिट्ठू हूँ। चलो साथ में सीखें।", pa: "ਸਤ ਸ੍ਰੀ ਅਕਾਲ! ਮੈਂ ਮਿੱਠੂ ਹਾਂ। ਆਓ ਮਿਲ ਕੇ ਸਿੱਖੀਏ।" };
  function preview(lang) {
    const voice = voiceFor(lang);
    if (!voice) return;
    stop();
    const u = new SpeechSynthesisUtterance(SAMPLE[lang] || SAMPLE.en);
    try {
      u.voice = voice;
    } catch (e) {
      /* the language below is enough */
    }
    u.lang = voice.lang;
    u.rate = rate();
    synth.speak(u);
  }

  const speakable = (text) => plain(text).replace(/\s+/g, " ").trim();

  // The button's HTML, or "" when this content doesn't get one. `text` is what it will read.
  function btn(cls, subject, text) {
    const say = speakable(text);
    if (!say || !eligible(cls, subject) || Release.langLocked(langOf(say)) || Release.subjectLocked(subject)) return ""; // no Hindi / Punjabi voice while locked
    return `<button type="button" class="say no-print" data-say="${esc(say)}" ${voiceFor(langOf(say)) ? "" : "hidden"} aria-label="${t("Read aloud")}" title="${t("Read aloud")}">${icon("speaker")}</button>`;
  }

  // The big "Listen" button beside a multiple-choice question (Classes 1-3): it reads the QUESTION only. Each answer has its own
  // Mithu speaker (js/readaloud.js), so the answers are heard one at a time when the child asks. Nothing is read by itself:
  // reading starts only when the child presses a button (the owner's decision, 5 Nov 2026).
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
    void list;
    const say = speakable(it.q).replace(/_{2,}/g, ", ");
    if (!say || !supported || Release.langLocked(langOf(say)) || (subject && Release.subjectLocked(subject))) return "";
    const mascot = typeof Mascot !== "undefined" ? Mascot.svg("point", { size: 44 }) : icon("speaker");
    return `<div class="listen-row no-print"><button type="button" class="say listen-btn" data-say="${esc(say)}" ${voiceFor(langOf(say)) ? "" : "hidden"} aria-label="${t("Listen")}">${mascot}<span>${t("Listen")}</span></button></div>`;
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
    u.rate = rate(); // the speed picked in Settings (a little slow by default, for young listeners)
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

  return { btn, listen, stop, supported, langOf, voiceFor, voicesFor, speakable, rate, RATES, setVoice, setRate, prefs, preview, idOf };
})();
