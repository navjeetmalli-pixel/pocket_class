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
    if (!say || !eligible(cls, subject)) return "";
    return `<button type="button" class="say no-print" data-say="${esc(say)}" ${voiceFor(langOf(say)) ? "" : "hidden"} aria-label="${t("Read aloud")}" title="${t("Read aloud")}">${icon("speaker")}</button>`;
  }

  let playing = null;
  function stop() {
    if (!supported) return;
    synth.cancel();
    if (playing) playing.classList.remove("on");
    playing = null;
  }

  function speak(button) {
    const text = button.dataset.say;
    const wasPlaying = playing === button;
    stop();
    if (wasPlaying) return;
    const voice = voiceFor(langOf(text));
    if (!voice) return (button.hidden = true);
    const u = new SpeechSynthesisUtterance(text);
    u.voice = voice;
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
  }

  return { btn, stop, supported };
})();
