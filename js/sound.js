// Small sound effects made in code (WebAudio oscillators and noise, no audio files).
//   Sound.play("tap" | "correct" | "wrong" | "celebrate" | "whoosh" | "pop")
//   Sound.answer(ok)      correct or wrong sound for an answer (and keeps the tap sound from doubling up)
//   Sound.enabled() / Sound.set(on)   the "Sound effects" setting, saved on this device
// Default: on for Classes 1-5, off for Classes 6-12. The student's own choice always wins.
// Sounds are short, soft and low in volume. One shared AudioContext is made and resumed on the first tap
// (iOS only lets audio start from a user gesture).

const Sound = (() => {
  const KEY = "vidya:sound";
  let ctx = null;
  let master = null;
  let lastAnswer = 0;

  function stored() {
    try {
      const v = localStorage.getItem(KEY);
      return v === "on" ? true : v === "off" ? false : null;
    } catch (e) {
      return null;
    }
  }
  function enabled() {
    const v = stored();
    if (v !== null) return v;
    const p = typeof Store !== "undefined" && Store.state && Store.state.profile;
    return !!(p && p.cls && p.cls <= 5);
  }
  function set(on) {
    try {
      localStorage.setItem(KEY, on ? "on" : "off");
    } catch (e) {
      /* storage blocked: the choice lasts until the page closes */
    }
  }

  function unlock() {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return null;
    if (!ctx) {
      try {
        ctx = new AC();
        master = ctx.createGain();
        master.gain.value = 0.55;
        master.connect(ctx.destination);
      } catch (e) {
        ctx = null;
        return null;
      }
    }
    if (ctx.state === "suspended") ctx.resume().catch(() => {});
    return ctx;
  }

  // One soft note: a short envelope so it never clicks.
  function note(freq, at, dur, { type = "sine", gain = 0.2, to = null } = {}) {
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    const t0 = ctx.currentTime + at;
    o.type = type;
    o.frequency.setValueAtTime(freq, t0);
    if (to) o.frequency.exponentialRampToValueAtTime(to, t0 + dur);
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(gain, t0 + 0.012);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    o.connect(g);
    g.connect(master);
    o.start(t0);
    o.stop(t0 + dur + 0.03);
  }

  function whoosh() {
    const n = Math.floor(ctx.sampleRate * 0.3);
    const buf = ctx.createBuffer(1, n, ctx.sampleRate);
    const d = buf.getChannelData(0);
    for (let i = 0; i < n; i++) d[i] = Math.random() * 2 - 1;
    const src = ctx.createBufferSource();
    src.buffer = buf;
    const f = ctx.createBiquadFilter();
    f.type = "bandpass";
    f.Q.value = 1.2;
    const t0 = ctx.currentTime;
    f.frequency.setValueAtTime(400, t0);
    f.frequency.exponentialRampToValueAtTime(2200, t0 + 0.28);
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(0.12, t0 + 0.08);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + 0.3);
    src.connect(f);
    f.connect(g);
    g.connect(master);
    src.start(t0);
  }

  const SOUNDS = {
    tap: () => note(560, 0, 0.05, { gain: 0.08 }),
    pop: () => note(320, 0, 0.1, { gain: 0.16, to: 760 }),
    correct: () => {
      note(784, 0, 0.14, { type: "triangle", gain: 0.2 });
      note(1175, 0.1, 0.26, { type: "triangle", gain: 0.2 });
    },
    wrong: () => note(247, 0, 0.3, { gain: 0.2, to: 196 }),
    celebrate: () => [523, 659, 784, 1047, 1319].forEach((f, i) => note(f, i * 0.09, i === 4 ? 0.45 : 0.18, { type: "triangle", gain: 0.17 })),
    whoosh,
  };

  function play(name) {
    try {
      if (!enabled() || !SOUNDS[name]) return;
      if (!unlock()) return;
      if (name === "correct" || name === "wrong") lastAnswer = Date.now();
      SOUNDS[name]();
    } catch (e) {
      /* a sound must never break the app */
    }
  }
  const answer = (ok) => play(ok ? "correct" : "wrong");

  // First touch makes and resumes the audio context; a light tap sound on buttons and options.
  const wake = () => {
    if (enabled()) unlock();
  };
  document.addEventListener("pointerdown", wake, { capture: true, passive: true });
  document.addEventListener("touchend", wake, { capture: true, passive: true });
  document.addEventListener("keydown", wake, { capture: true, passive: true });
  document.addEventListener("click", (e) => {
    const b = e.target.closest && e.target.closest(".btn, .option");
    if (!b || b.disabled) return;
    // Answers play correct/wrong themselves in the click handler that runs first: don't double up.
    if (Date.now() - lastAnswer < 300) return;
    play("tap");
  });

  return { play, answer, enabled, set };
})();
