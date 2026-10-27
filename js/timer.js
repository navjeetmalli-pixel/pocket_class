// Pomodoro-style focus timer. Keeps running while the student moves around the app.

const Focus = (() => {
  const MODES = {
    focus: { label: "Focus", min: () => Store.state.focusLen || 25 },
    short: { label: "Short break", min: () => 5 },
    long: { label: "Long break", min: () => 15 },
  };

  let mode = "focus";
  let left = MODES.focus.min() * 60;
  let endAt = 0;
  let running = false;
  let interval = null;
  let rounds = 0;
  const listeners = new Set();

  const emit = () => listeners.forEach((fn) => fn());

  function tick() {
    left = Math.max(0, Math.round((endAt - Date.now()) / 1000));
    if (left <= 0) complete();
    else emit();
  }

  function start() {
    if (running) return;
    endAt = Date.now() + left * 1000;
    running = true;
    interval = setInterval(tick, 500);
    emit();
  }

  function pause() {
    if (!running) return;
    left = Math.max(0, Math.round((endAt - Date.now()) / 1000));
    running = false;
    clearInterval(interval);
    emit();
  }

  function reset() {
    running = false;
    clearInterval(interval);
    left = MODES[mode].min() * 60;
    emit();
  }

  function setMode(m) {
    mode = m;
    reset();
  }

  function complete() {
    running = false;
    clearInterval(interval);
    beep();
    if (mode === "focus") {
      rounds++;
      Store.addFocus(MODES.focus.min());
      mode = rounds % 4 === 0 ? "long" : "short";
      toast(`Focus session done! Time for a ${mode === "long" ? "long" : "short"} break.`);
    } else {
      mode = "focus";
      toast("Break over. Back to studying!");
    }
    left = MODES[mode].min() * 60;
    emit();
  }

  return {
    MODES,
    get mode() {
      return mode;
    },
    get left() {
      return left;
    },
    get total() {
      return MODES[mode].min() * 60;
    },
    get running() {
      return running;
    },
    get rounds() {
      return rounds;
    },
    start,
    pause,
    reset,
    setMode,
    on(fn) {
      listeners.add(fn);
      return () => listeners.delete(fn);
    },
  };
})();
