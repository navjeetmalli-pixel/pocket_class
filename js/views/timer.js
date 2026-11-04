// Focus timer screen (the countdown itself lives in js/timer.js).

(() => {
  const { pageHead } = Views._;

  // ---------- timer ----------

  function timer() {
    const R = 104;
    const C = 2 * Math.PI * R;
    return {
      title: t("Focus timer"),
      html: `
        ${pageHead(t("Focus timer"), t("Study in focused blocks with short breaks"))}
        <div class="card timer-wrap">
          <div class="seg" style="width:100%;max-width:420px" role="group" aria-label="${t("Timer mode")}">
            ${Object.entries(Focus.MODES).map(([m, v]) => `<button data-mode="${m}">${t(v.label)}</button>`).join("")}
          </div>
          <div class="timer-ring">
            <svg viewBox="0 0 240 240" aria-hidden="true"><circle class="track" cx="120" cy="120" r="${R}"/><circle class="prog" cx="120" cy="120" r="${R}" stroke-dasharray="${C}" stroke-dashoffset="0"/></svg>
            <div class="read"><div class="time" data-time role="timer"></div><div class="mode" data-modelabel></div></div>
          </div>
          <div class="timer-controls">
            <button class="btn primary" data-act="toggle"></button>
            <button class="btn" data-act="reset">${icon("reset")} ${t("Reset")}</button>
          </div>
          <div data-lens class="center">
            <div class="small muted" style="margin-bottom:8px">${t("Focus length")}</div>
            <div class="chips" style="justify-content:center">${[15, 25, 45, 60].map((m) => `<button class="chip" data-len="${m}">${t("{n} min", { n: m })}</button>`).join("")}</div>
          </div>
        </div>
        <div class="stats mt">
          <div class="card stat"><div class="v" data-rounds></div><div class="l">${t("sessions now")}</div></div>
          <div class="card stat"><div class="v">${minutesLabel(Store.state.focusMin)}</div><div class="l">${t("total focus")}</div></div>
          <div class="card stat"><div class="v">🔥 ${Store.streak()}</div><div class="l">${t("day streak")}</div></div>
        </div>
        <h2 class="block-title">${t("How it works")}</h2>
        <div class="card note"><ul>
          <li>${t("Pick one chapter and put your phone on silent. Start the timer.")}</li>
          <li>${t("Study only that chapter until the bell. No social media!")}</li>
          <li>${t("Take a 5-minute break: stretch, drink water, rest your eyes.")}</li>
          <li>${t("After 4 focus sessions, take a longer 15-minute break.")}</li>
        </ul></div>`,
      mount(el) {
        const ring = el.querySelector(".prog");
        const update = () => {
          if (!el.isConnected) return off();
          el.querySelector("[data-time]").textContent = clock(Focus.left);
          el.querySelector("[data-modelabel]").textContent = Focus.running ? t(Focus.MODES[Focus.mode].label) : Focus.left === Focus.total ? t("Ready") : t("Paused");
          ring.style.strokeDashoffset = C * (1 - Focus.left / Focus.total);
          ring.style.stroke = Focus.mode === "focus" ? "var(--accent)" : "var(--good)";
          el.querySelector('[data-act="toggle"]').innerHTML = Focus.running ? `${icon("pause")} ${t("Pause")}` : `${icon("play")} ${t("Start")}`;
          el.querySelectorAll("[data-mode]").forEach((b) => b.classList.toggle("on", b.dataset.mode === Focus.mode));
          el.querySelector("[data-lens]").hidden = Focus.mode !== "focus" || Focus.running || Focus.left !== Focus.total;
          el.querySelectorAll("[data-len]").forEach((b) => b.classList.toggle("on", Number(b.dataset.len) === Store.state.focusLen));
          el.querySelector("[data-rounds]").textContent = Focus.rounds;
        };
        const off = Focus.on(update);
        update();
        el.onclick = (e) => {
          const b = e.target.closest("[data-act],[data-mode],[data-len]");
          if (!b) return;
          if (b.dataset.mode) Focus.setMode(b.dataset.mode);
          else if (b.dataset.len) {
            Store.setFocusLen(Number(b.dataset.len));
            Focus.reset();
          } else if (b.dataset.act === "toggle") Focus.running ? Focus.pause() : Focus.start();
          else if (b.dataset.act === "reset") Focus.reset();
        };
      },
    };
  }

  Object.assign(Views, { timer });
})();
