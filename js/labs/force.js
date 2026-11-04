// Force and motion lab (Physics): a cart on a straight track pulled with a force. You set the applied force, the mass and
// the surface, run it, and read the acceleration and the velocity-time and distance-time graphs.
//
//   weight on the surface N = m g          friction f = mu N  (it acts against the pull; at most mu N)
//   net force F_net = F - f                Newton's second law  a = F_net / m   (so  F_net = m a)
//   from rest:  v = a t      s = (1/2) a t^2
//
// Idealised: the cart starts at rest, moves in a straight line, the pull is steady and horizontal, g = 9.8 m/s^2, friction is
// the same whether the cart is still or moving (mu is one number), no air resistance. The graphs run for 5 s.

(() => {
  const G = 9.8;
  const T_END = 5; // s
  const SURFACES = {
    smooth: { label: "Frictionless (ideal)", mu: 0 },
    polished: { label: "Polished floor", mu: 0.1 },
    wood: { label: "Wooden floor", mu: 0.3 },
    rough: { label: "Rough ground", mu: 0.6 },
  };

  // One setting: force F (N), mass m (kg), friction coefficient mu. Everything starts from rest.
  function motion(F, m, mu, T = T_END) {
    const N = m * G;
    const fmax = mu * N;
    const moving = F > fmax + 1e-12;
    const f = moving ? fmax : Math.min(F, fmax); // not moving: friction just balances the pull
    const net = moving ? F - fmax : 0;
    const a = net / m;
    return { N, fmax, f, net, a, v: a * T, s: 0.5 * a * T * T, moving, T };
  }
  const velocity = (a, t) => a * t;
  const distance = (a, t) => 0.5 * a * t * t;

  Labs.calc.force = { motion, velocity, distance, SURFACES, G, T_END };

  const pt = (x) => Math.round(x * 10) / 10;
  const TXT = (x, y, s, cls = "s-m", anchor = "middle") => `<text class="${cls}" x="${pt(x)}" y="${pt(y)}" text-anchor="${anchor}">${esc(s)}</text>`;
  const fix = (x, d = 2) => Labs.fix(x, d);
  const reduced = () => matchMedia("(prefers-reduced-motion: reduce)").matches;
  const nice = (v) => {
    if (v <= 0) return 1;
    const p = 10 ** Math.floor(Math.log10(v));
    return [1, 2, 2.5, 5, 10].map((k) => k * p).find((k) => k >= v - 1e-9);
  };

  // A small graph of f(t) for t = 0..T_END with a marker at time `now`.
  function curve(fn, ymaxRaw, xl, yl, now, name) {
    const W = 300, H = 230, L = 52, R = 14, T = 16, B = 46;
    const ymax = nice(Math.max(ymaxRaw, 1));
    const X = (x) => L + ((W - L - R) * x) / T_END;
    const Y = (y) => H - B - ((H - T - B) * y) / ymax;
    let s = `<line class="s-ax" x1="${L}" y1="${H - B}" x2="${W - R}" y2="${H - B}"/><line class="s-ax" x1="${L}" y1="${T}" x2="${L}" y2="${H - B}"/>`;
    for (let k = 0; k <= 2; k++) s += `<line class="s-grid" x1="${L}" y1="${pt(Y((ymax * k) / 2))}" x2="${W - R}" y2="${pt(Y((ymax * k) / 2))}"/>${TXT(L - 6, Y((ymax * k) / 2) + 5, Labs.num((ymax * k) / 2, 1), "s-m small", "end")}`;
    for (let k = 0; k <= 5; k++) s += TXT(X(k), H - B + 18, String(k), "s-m small");
    let d = "";
    for (let i = 0; i <= 50; i++) d += `${i ? "L" : "M"}${pt(X((i * T_END) / 50))},${pt(Y(fn((i * T_END) / 50)))} `;
    s += `<path class="s-curve" d="${d}"/>`;
    if (now != null) s += `<circle class="s-pt vl-dot" cx="${pt(X(now))}" cy="${pt(Y(fn(now)))}" r="6"/>`;
    s += TXT((L + W - R) / 2, H - 8, xl, "s-m small") + `<text class="s-m small" transform="translate(12 ${(T + H - B) / 2}) rotate(-90)" text-anchor="middle">${esc(yl)}</text>`;
    return `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(name)}">${s}</svg>`;
  }

  function track(S, m, now) {
    const W = 600, H = 190, GY = 150, CX = 170;
    const sNow = distance(m.a, now);
    let s = `<line class="s-ax" x1="0" y1="${GY}" x2="${W}" y2="${GY}"/>`;
    const sc = 3; // px per metre
    const first = Math.floor((sNow - 60) / 10) * 10;
    for (let d = first; d < sNow + 160; d += 10) {
      const x = CX + (d - sNow) * sc;
      if (x < -10 || x > W + 10 || d < 0) continue;
      const big = d % 50 === 0;
      s += `<line class="s-ax" x1="${pt(x)}" y1="${GY}" x2="${pt(x)}" y2="${GY + (big ? 14 : 8)}"/>`;
      if (big) s += TXT(x, GY + 32, `${d} m`, "s-m small");
    }
    // the cart (its width and height grow a little with the mass, so a heavier cart looks heavier)
    const cw = 96 + Math.min(S.m, 10) * 3, ch = 40 + Math.min(S.m, 10) * 2;
    s += `<rect class="vl-cart" x="${CX - cw / 2}" y="${GY - 18 - ch}" width="${cw}" height="${ch}" rx="6"/>${TXT(CX, GY - 18 - ch / 2 + 6, `${Labs.num(S.m, 1)} kg`, "s-t")}`;
    s += `<circle class="s-pt" cx="${CX - cw / 2 + 20}" cy="${GY - 9}" r="9"/><circle class="s-pt" cx="${CX + cw / 2 - 20}" cy="${GY - 9}" r="9"/>`;
    // the pull (blue, forward) and friction (against it)
    const yy = GY - 18 - ch / 2;
    if (S.F > 0) {
      const len = Math.max(6, S.F * 5);
      s += `<line class="vl-arrow vl-pull" x1="${CX + cw / 2}" y1="${yy}" x2="${CX + cw / 2 + len}" y2="${yy}"/><path class="vl-arrow vl-pull fillme" d="M${CX + cw / 2 + len + 9},${yy} l-12,-7 v14z"/>`;
      s += TXT(CX + cw / 2 + len / 2, yy - 12, `F = ${Labs.num(S.F, 1)} N`, "s-m small");
    }
    if (m.f > 0) {
      const len = Math.max(6, m.f * 5);
      s += `<line class="vl-arrow vl-fric" x1="${CX - cw / 2}" y1="${GY - 4}" x2="${CX - cw / 2 - len}" y2="${GY - 4}"/><path class="vl-arrow vl-fric fillme" d="M${CX - cw / 2 - len - 9},${GY - 4} l12,-7 v14z"/>`;
      s += TXT(Math.max(70, CX - cw / 2 - len / 2), GY - 14, `f = ${fix(m.f, 2)} N`, "s-m small");
    }
    return `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(t("A cart on a track. Distance travelled {s} m.", { s: fix(sNow, 1) }))}">${s}</svg>`;
  }

  function mount(el, api) {
    const S = { F: 10, m: 2, surf: "smooth", now: 0, running: false, raf: 0, last: 0 };
    let flow;
    const mu = () => SURFACES[S.surf].mu;
    const cur = () => motion(S.F, S.m, mu());

    const ctrl = (k, label, min, max, step, unit) =>
      `<div class="sim-ctrl"><label for="vlf-${k}">${t(label)}</label><output id="vlf-${k}-o" for="vlf-${k}"></output><input type="range" id="vlf-${k}" data-k="${k}" min="${min}" max="${max}" step="${step}" value="${S[k]}" data-unit="${unit}"></div>`;
    const stage = () => `<div class="vl-force">
      <div class="sim-stage" data-track></div>
      <div class="sim-ctrls">${ctrl("F", "Applied force F", 0, 20, 1, "N")}${ctrl("m", "Mass m", 0.5, 10, 0.5, "kg")}
        <div class="sim-ctrl"><label for="vlf-surf">${t("Surface")}</label><select id="vlf-surf" data-k="surf">${Object.entries(SURFACES).map(([k, v]) => `<option value="${k}">${t(v.label)}${v.mu ? ` (μ = ${v.mu})` : ""}</option>`).join("")}</select></div></div>
      <div class="sim-btns"><button type="button" class="btn primary" data-vl-run data-run>${icon("play")} ${t("Run for 5 s")}</button><button type="button" class="btn" data-again>${icon("reset")} ${t("Back to start")}</button></div>
      <div class="vl-graphs"><figure data-gv></figure><figure data-gs></figure></div></div>`;

    function paint() {
      const m = cur();
      const now = S.now;
      el.querySelector("[data-track]").innerHTML = track(S, m, now);
      el.querySelector("[data-gv]").innerHTML = curve((x) => velocity(m.a, x), Math.abs(m.v), t("time t (s)"), t("velocity v (m/s)"), now, t("Velocity–time graph: a straight line from the origin with slope {a} m/s²", { a: fix(m.a, 2) }));
      el.querySelector("[data-gs]").innerHTML = curve((x) => distance(m.a, x), Math.abs(m.s), t("time t (s)"), t("distance s (m)"), now, t("Distance–time graph: a curve that gets steeper when a = {a} m/s²", { a: fix(m.a, 2) }));
      el.querySelectorAll('input[type="range"]').forEach((r) => {
        const txt = `${r.value.replace("-", "−")} ${r.dataset.unit}`;
        el.querySelector(`#${r.id}-o`).textContent = txt;
        r.setAttribute("aria-valuetext", txt);
      });
      const rows = [
        [t("Applied force F"), `${Labs.num(S.F, 1)} N`],
        [t("Mass m"), `${Labs.num(S.m, 1)} kg`],
        [t("Friction f = μ m g (at most)"), `${fix(m.fmax, 2)} N`],
        [t("Friction acting"), `${fix(m.f, 2)} N`],
        [t("Net force F − f"), `${fix(m.net, 2)} N`],
        [t("Acceleration a = (F − f) / m"), `${fix(m.a, 2)} m/s²`],
        [t("Velocity after 5 s, v = a t"), `${fix(m.v, 2)} m/s`],
        [t("Distance after 5 s, s = ½ a t²"), `${fix(m.s, 2)} m`],
      ];
      if (S.running || S.now > 0) rows.push([t("Now, at t = {t} s", { t: fix(S.now, 1) }), `v = ${fix(velocity(m.a, S.now), 1)} m/s, s = ${fix(distance(m.a, S.now), 1)} m`]);
      const note = m.moving ? t("The cart speeds up steadily.") : S.F === 0 ? t("No pull, so the cart stays at rest.") : t("Friction can be as large as {f} N here. The pull is not bigger than that, so friction balances it and the cart does not move.", { f: fix(m.fmax, 2) });
      flow.live(rows, `${t("Force {F} N, mass {m} kg, {s}.", { F: Labs.num(S.F, 1), m: Labs.num(S.m, 1), s: t(SURFACES[S.surf].label) })} ${t("Acceleration {a} metres per second squared.", { a: fix(m.a, 2) })} ${note}`);
      el.querySelector("[data-note]").textContent = note;
    }

    function stop() {
      cancelAnimationFrame(S.raf);
      S.running = false;
    }
    function frame(ts) {
      if (!S.running) return;
      const dt = S.last ? Math.min(0.1, (ts - S.last) / 1000) : 0;
      S.last = ts;
      S.now = Math.min(T_END, S.now + dt * 2); // twice real speed: the 5 s run takes 2.5 s
      paint();
      if (S.now >= T_END) {
        stop();
        flow.say(t("The run is finished. Acceleration {a} metres per second squared.", { a: fix(cur().a, 2) }));
        return;
      }
      S.raf = requestAnimationFrame(frame);
    }

    function run() {
      const m = cur();
      const ok = flow.addRun({ surf: t(SURFACES[S.surf].label), F: S.F, m: S.m, f: m.f, a: m.a, v: m.v, s: m.s });
      if (!ok) return;
      stop();
      S.now = 0;
      if (reduced()) {
        S.now = T_END;
        paint();
        return;
      }
      S.running = true;
      S.last = 0;
      S.raf = requestAnimationFrame(frame);
    }

    function setting(F, m, surf) {
      stop();
      Object.assign(S, { F, m, surf, now: 0 });
      el.querySelector("#vlf-F").value = F;
      el.querySelector("#vlf-m").value = m;
      el.querySelector("#vlf-surf").value = surf;
      paint();
    }

    flow = Labs.flow(el, api, {
      assumptions: "The cart starts from rest and moves in a straight line. The pull is steady and horizontal. g = 9.8 m/s². Friction is the same size whether the cart is still or moving (one number μ for the surface). There is no air resistance. The graphs show the first 5 seconds.",
      columns: [
        { key: "surf", label: "Surface", var: true },
        { key: "F", label: "Applied force", unit: "N", var: true },
        { key: "m", label: "Mass", unit: "kg", var: true },
        { key: "f", label: "Friction", unit: "N", d: 2 },
        { key: "a", label: "Acceleration", unit: "m/s²", d: 2 },
        { key: "v", label: "Velocity after 5 s", unit: "m/s", d: 2 },
        { key: "s", label: "Distance after 5 s", unit: "m", d: 2 },
      ],
      investigations: [
        {
          id: "force",
          title: "Doubling the force",
          question: "A 2 kg cart on a frictionless track is pulled with 5 N. You double the pull to 10 N. What happens to its acceleration?",
          predict: { opts: ["It stays the same", "It doubles", "It halves"], ans: 1 },
          vary: "F",
          held: ["Mass (2 kg)", "Surface (frictionless)"],
          go: "Run with 5 N. Then change only the applied force to 10 N (and try 15 N) and run again.",
          explain: {
            q: "Which statement do your runs support?",
            opts: ["When the mass is kept the same, the acceleration is proportional to the net force: a = F / m", "The acceleration does not depend on the force", "A bigger force gives the cart a constant speed"],
            ans: 0,
            why: "With the mass fixed at 2 kg, 5 N gave 2.5 m/s², 10 N gave 5 m/s² and 15 N gave 7.5 m/s²: double the force, double the acceleration. That is Newton's second law, F = m a.",
          },
          graph: { x: "F", y: "a" },
        },
        {
          id: "mass",
          title: "Doubling the mass",
          question: "The same 10 N pull now acts on a cart twice as heavy: 4 kg instead of 2 kg (frictionless track). What happens to the acceleration?",
          predict: { opts: ["It doubles", "It halves", "It stays the same"], ans: 1 },
          vary: "m",
          held: ["Applied force (10 N)", "Surface (frictionless)"],
          go: "Run with 2 kg. Then change only the mass to 4 kg (and try 8 kg) and run again.",
          explain: {
            q: "Why did the heavier cart accelerate less under the same force?",
            opts: ["Heavy things are pulled with a weaker force", "A larger mass resists changes in its motion more (more inertia), so the same force gives a smaller acceleration: a = F / m", "The heavier cart has more friction on a frictionless track"],
            ans: 1,
            why: "The force stayed at 10 N. With 2 kg the acceleration was 5 m/s²; with 4 kg it was 2.5 m/s² and with 8 kg 1.25 m/s². Double the mass, half the acceleration: a is proportional to 1/m.",
          },
          graph: { x: "m", y: "a" },
        },
        {
          id: "friction",
          title: "Changing the surface",
          question: "A 2 kg cart is pulled with 10 N. It moves from the frictionless track onto a wooden floor (μ = 0.3). What happens to its acceleration?",
          predict: { opts: ["It gets smaller, because friction pulls against the pull", "It stays the same, because friction does not change the mass", "It gets bigger, because the floor pushes the cart"], ans: 0 },
          vary: "surf",
          held: ["Applied force (10 N)", "Mass (2 kg)"],
          go: "Run on the frictionless surface. Then change only the surface to a wooden floor, then to rough ground, and run again.",
          explain: {
            q: "What explains the change you saw?",
            opts: ["The mass of the cart changed", "Friction acts against the pull, so the net force is smaller: a = (F − f) / m", "Friction gives the cart extra force forwards"],
            ans: 1,
            why: "Friction f = μ m g acts against the motion. On wood f = 0.3 × 2 × 9.8 = 5.88 N, so the net force is 10 − 5.88 = 4.12 N and a = 2.06 m/s². On rough ground the friction (11.76 N) is more than the pull, so the cart does not move at all.",
          },
          graph: { x: "run", y: "a" },
        },
      ],
      mountStage(slot, F) {
        flow = F;
        slot.innerHTML = stage() + `<p class="small vl-note" data-note></p>`;
        slot.addEventListener("input", (e) => {
          const k = e.target.dataset.k;
          if (!k) return;
          stop();
          S.now = 0;
          S[k] = e.target.tagName === "SELECT" ? e.target.value : Number(e.target.value);
          paint();
        });
        slot.addEventListener("click", (e) => {
          if (e.target.closest("[data-run]")) run();
          else if (e.target.closest("[data-again]")) {
            stop();
            S.now = 0;
            paint();
          }
        });
      },
      onInvestigation(inv) {
        if (inv.id === "force") setting(5, 2, "smooth");
        else setting(10, 2, "smooth");
      },
    });
  }

  Labs.register("force", {
    title: "Force and motion lab",
    area: "physics",
    icon: "play",
    objective: "Pull a cart with different forces, masses and surfaces. See the acceleration from F − f = m a, and read the velocity–time and distance–time graphs.",
    chapters: [
      { cls: 8, subject: "science", chapter: "exploring-forces" },
      { cls: 8, subject: "sciencepb", chapter: "force-and-pressure" },
      { cls: 8, subject: "sciencepb", chapter: "friction" },
      { cls: 9, subject: "science", chapter: "how-forces-affect-motion" },
      { cls: 9, subject: "science", chapter: "describing-motion-around-us" },
      { cls: 9, subject: "sciencepb", chapter: "force-and-laws-of-motion" },
      { cls: 9, subject: "sciencepb", chapter: "motion" },
      { cls: 11, subject: "physics", chapter: "laws-of-motion" },
      { cls: 11, subject: "physics", chapter: "motion-in-a-straight-line" },
    ],
    mount,
  });
})();
