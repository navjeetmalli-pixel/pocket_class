// Particle world (Chemistry): 60 particles of water in a box with a movable lid. The heat slider sets the temperature of the water.
// You see how the particles are arranged and how they move as a solid, a liquid and a gas, the melting and boiling points,
// and why a gas can be squashed but a liquid and a solid cannot.
//
//   state of water at normal air pressure:  below 0 C solid (ice), 0 C melting, 0 to 100 C liquid, 100 C boiling, above 100 C gas (steam)
//   average kinetic energy of the particles is proportional to the temperature in kelvin  (K = C + 273.15)
//   speed of a typical particle is proportional to the square root of that;  pressure doubled -> gas volume halves (Boyle's law)
//
// Assumptions: pure water at 1 atm; the temperature is the temperature of the water itself, so at exactly 0 C (melting) and
// 100 C (boiling) it stays there while the heat added is used to loosen the particles, not to warm them; the pictures are
// schematic (60 particles, spacing not to scale).

(() => {
  const MELT = 0; // °C
  const BOIL = 100; // °C
  const KELVIN = 273.15;
  const T_MIN = -40;
  const T_MAX = 140;

  const stateOf = (T) => (T < MELT ? "solid" : T === MELT ? "melting" : T < BOIL ? "liquid" : T === BOIL ? "boiling" : "gas");
  const kelvin = (T) => T + KELVIN;
  const energyRatio = (T) => kelvin(T) / KELVIN; // average kinetic energy compared with 0 °C
  const speedRatio = (T) => Math.sqrt(energyRatio(T)); // typical particle speed compared with 0 °C
  // Fractions of the particles that behave like a solid / a liquid / a gas.
  const mix = (T) => {
    const s = stateOf(T);
    return s === "solid" ? { solid: 1, liquid: 0, gas: 0 } : s === "melting" ? { solid: 0.5, liquid: 0.5, gas: 0 } : s === "liquid" ? { solid: 0, liquid: 1, gas: 0 } : s === "boiling" ? { solid: 0, liquid: 0.5, gas: 0.5 } : { solid: 0, liquid: 0, gas: 1 };
  };
  // Volume change (percent) when the pressure on the sample is doubled by pushing the lid (1 atm extra):
  // an ideal gas halves its volume (Boyle's law); liquid water and ice change by about 0.005 % and 0.001 % (compressibility
  // 4.6e-10 and 1.2e-10 per pascal, times 101 325 Pa). In a mixture (melting, boiling) it depends on the amounts: null.
  const COMPRESS = { liquid: 4.6e-10, solid: 1.2e-10 };
  const ATM = 101325;
  const squash = (T) => {
    const s = stateOf(T);
    if (s === "gas") return -50;
    if (s === "liquid") return -COMPRESS.liquid * ATM * 100;
    if (s === "solid") return -COMPRESS.solid * ATM * 100;
    return null;
  };
  // Steam at 100 °C takes about this many times the volume of the same mass of liquid water (densities 958.4 and 0.598 kg/m3).
  const STEAM_RATIO = 958.4 / 0.598;

  Labs.calc.particles = { stateOf, kelvin, energyRatio, speedRatio, mix, squash, STEAM_RATIO, MELT, BOIL, T_MIN, T_MAX };

  const N = 60;
  const BOX = { x0: 110, x1: 580, y0: 30, y1: 250 };
  const RAD = 7;
  const COLS = 15, ROWS = 4, GAP = 18;
  const LAT_X = (BOX.x0 + BOX.x1) / 2 - (COLS * GAP) / 2 + GAP / 2; // first column centre
  const pt = (x) => Math.round(x * 10) / 10;
  const reduced = () => matchMedia("(prefers-reduced-motion: reduce)").matches;
  const NAME = { solid: "Solid (ice)", melting: "Melting: solid and liquid together", liquid: "Liquid (water)", boiling: "Boiling: liquid and gas together", gas: "Gas (steam)" };
  const SPACING = { solid: "touching, in a regular pattern", melting: "touching, the pattern is breaking", liquid: "touching, no pattern", boiling: "some touching, some far apart", gas: "far apart" };

  function rng(seed) {
    let a = seed >>> 0;
    return () => {
      a = (a + 0x6d2b79f5) >>> 0;
      let x = Math.imul(a ^ (a >>> 15), 1 | a);
      x = (x + Math.imul(x ^ (x >>> 7), 61 | x)) ^ x;
      return ((x ^ (x >>> 14)) >>> 0) / 4294967296;
    };
  }

  function mount(el, api) {
    const rand = rng(7);
    const S = { T: -10, push: false, motion: !reduced(), raf: 0, last: 0, tt: 0, lid: BOX.y0, lidTo: BOX.y0 };
    let flow;
    // The particles: home site in the lattice, rank (who changes state first), position, velocity.
    const order = Array.from({ length: N }, (_, i) => i).sort(() => rand() - 0.5);
    const P = Array.from({ length: N }, (_, i) => {
      const r = Math.floor(i / COLS), c = i % COLS;
      const hx = LAT_X + c * GAP, hy = BOX.y1 - RAD - 2 - r * GAP;
      return { hx, hy, x: hx, y: hy, vx: 0, vy: 0, rank: order[i], mode: "solid", ph: rand() * 6.28, ph2: rand() * 6.28, re: 0 };
    });

    const liquidRegion = (nL, mixed) => {
      if (mixed) return { x0: LAT_X - GAP, x1: LAT_X + (COLS - 1) * GAP + GAP, y0: BOX.y1 - ROWS * GAP - 10, y1: BOX.y1 };
      const h = Math.max(2 * RAD + 4, (nL * 290) / (BOX.x1 - BOX.x0));
      return { x0: BOX.x0, x1: BOX.x1, y0: BOX.y1 - h, y1: BOX.y1 };
    };
    const modes = () => {
      const m = mix(S.T);
      const ns = Math.round(m.solid * N), nl = Math.round(m.liquid * N);
      return P.map((p) => (p.rank < ns ? "solid" : p.rank < ns + nl ? "liquid" : "gas"));
    };

    function stepSim(dt) {
      const sr = speedRatio(S.T);
      const md = modes();
      const nL = md.filter((x) => x === "liquid").length;
      const mixed = stateOf(S.T) === "melting";
      const reg = liquidRegion(nL, mixed);
      S.tt += dt;
      // the lid
      const st = stateOf(S.T);
      S.lidTo = !S.push ? BOX.y0 : st === "gas" || st === "boiling" ? BOX.y0 + (BOX.y1 - BOX.y0) / 2 : st === "liquid" ? reg.y0 - 2 : BOX.y1 - ROWS * GAP - 6;
      S.lid += (S.lidTo - S.lid) * Math.min(1, dt * 7);
      P.forEach((p, i) => {
        const m = md[i];
        if (m !== p.mode) {
          p.mode = m;
          const a = rand() * 6.28;
          const sp = (m === "gas" ? 150 : 50) * sr;
          p.vx = Math.cos(a) * sp;
          p.vy = Math.sin(a) * sp;
        }
        if (m === "solid") {
          const A = 1 + 1.6 * sr;
          const tx = p.hx + A * Math.sin(S.tt * 14 + p.ph);
          const ty = p.hy + A * Math.sin(S.tt * 12 + p.ph2);
          p.x += (tx - p.x) * Math.min(1, dt * 14);
          p.y += (ty - p.y) * Math.min(1, dt * 14);
        } else if (m === "liquid") {
          if (Math.random() < dt * 3) {
            const a = rand() * 6.28;
            p.vx = Math.cos(a) * 55 * sr;
            p.vy = Math.sin(a) * 55 * sr;
          }
          p.x += p.vx * dt;
          p.y += p.vy * dt;
          const cx = Math.min(reg.x1 - RAD, Math.max(reg.x0 + RAD, p.x));
          const cy = Math.min(reg.y1 - RAD, Math.max(reg.y0 + RAD, p.y));
          if (cx !== p.x) p.vx *= -1;
          if (cy !== p.y) p.vy *= -1;
          p.x += (cx - p.x) * Math.min(1, dt * 10);
          p.y += (cy - p.y) * Math.min(1, dt * 10);
        } else {
          p.x += p.vx * dt;
          p.y += p.vy * dt;
          const top = S.lid + RAD, bot = BOX.y1 - RAD, left = BOX.x0 + RAD, right = BOX.x1 - RAD;
          if (p.x < left) ((p.x = left), (p.vx = Math.abs(p.vx)));
          if (p.x > right) ((p.x = right), (p.vx = -Math.abs(p.vx)));
          if (p.y < top) ((p.y = top), (p.vy = Math.abs(p.vy)));
          if (p.y > bot) ((p.y = bot), (p.vy = -Math.abs(p.vy)));
        }
      });
      // liquid and solid particles do not overlap: push apart pairs that are closer than a diameter
      const solidish = P.filter((p) => p.mode !== "gas");
      for (let a = 0; a < solidish.length; a++)
        for (let b = a + 1; b < solidish.length; b++) {
          const p = solidish[a], q = solidish[b];
          if (p.mode === "solid" && q.mode === "solid") continue;
          const dx = q.x - p.x, dy = q.y - p.y;
          const d2 = dx * dx + dy * dy;
          if (d2 > 0 && d2 < 4 * RAD * RAD) {
            const d = Math.sqrt(d2), push = (2 * RAD - d) / 2;
            const ux = dx / d, uy = dy / d;
            if (p.mode !== "solid") ((p.x -= ux * push), (p.y -= uy * push));
            if (q.mode !== "solid") ((q.x += ux * push), (q.y += uy * push));
          }
        }
    }

    const stage = () => `<div class="vl-particles">
      <div class="sim-stage" data-box></div>
      <div class="sim-ctrl"><label for="vlp-T">${t("Temperature of the water")}</label><output id="vlp-T-o" for="vlp-T"></output>
        <input type="range" id="vlp-T" min="${T_MIN}" max="${T_MAX}" step="1" value="${S.T}"></div>
      <div class="vl-quick" role="group" aria-label="${esc(t("Quick temperatures"))}">${[[-10, "Ice, −10 °C"], [0, "Melting, 0 °C"], [50, "Water, 50 °C"], [100, "Boiling, 100 °C"], [120, "Steam, 120 °C"]].map(([v, l]) => `<button type="button" class="btn" data-set="${v}">${t(l)}</button>`).join("")}</div>
      <div class="sim-btns"><button type="button" class="btn" data-lid aria-pressed="false"><span>${t("Push the lid down")}</span></button>
        <button type="button" class="btn" data-motion aria-pressed="${S.motion}">${icon("play")} <span></span></button>
        <button type="button" class="btn primary" data-vl-run data-record>${icon("check")} ${t("Record this run")}</button></div>
      <div class="vl-tablewrap"><table class="vl-table vl-compare" data-compare></table></div></div>`;

    function build() {
      const box = el.querySelector("[data-box]");
      const therm = (() => {
        const y = (T) => BOX.y1 - ((T - T_MIN) / (T_MAX - T_MIN)) * (BOX.y1 - BOX.y0);
        return `<rect class="s-res" x="14" y="${BOX.y0}" width="22" height="${BOX.y1 - BOX.y0}" rx="11"/><rect class="vl-merc" data-merc x="18" y="0" width="14" height="0" rx="7"/>
          <line class="s-ax" x1="8" y1="${pt(y(0))}" x2="44" y2="${pt(y(0))}"/><text class="s-m small" x="48" y="${pt(y(0)) + 5}" text-anchor="start">0 °C</text>
          <line class="s-ax" x1="8" y1="${pt(y(100))}" x2="44" y2="${pt(y(100))}"/><text class="s-m small" x="48" y="${pt(y(100)) + 5}" text-anchor="start">100 °C</text>`;
      })();
      box.innerHTML = `<svg viewBox="0 0 600 290" role="img" aria-label="${esc(t("60 particles of water in a box"))}" data-svg>
        ${therm}<rect class="vl-box" x="${BOX.x0}" y="${BOX.y0}" width="${BOX.x1 - BOX.x0}" height="${BOX.y1 - BOX.y0}"/>
        <rect class="vl-lid" data-lidr x="${BOX.x0 - 6}" y="0" width="${BOX.x1 - BOX.x0 + 12}" height="8" rx="3"/>
        <line class="s-ax" x1="${(BOX.x0 + BOX.x1) / 2}" y1="${BOX.y0 - 22}" x2="${(BOX.x0 + BOX.x1) / 2}" y2="${BOX.y0 - 4}" data-handle style="stroke-width:5"/>
        <g data-ps>${P.map((_, i) => `<circle class="vl-p" data-p="${i}" r="${RAD}"/>`).join("")}</g>
        <text class="s-t" data-state x="${(BOX.x0 + BOX.x1) / 2}" y="278" text-anchor="middle"></text></svg>`;
      circles = [...box.querySelectorAll("[data-p]")];
    }
    let circles = [];

    function draw() {
      circles.forEach((c, i) => {
        const p = P[i];
        c.setAttribute("cx", pt(p.x));
        c.setAttribute("cy", pt(p.y));
        c.setAttribute("class", "vl-p vl-" + p.mode);
      });
      const lid = el.querySelector("[data-lidr]");
      lid.setAttribute("y", pt(S.lid - 8));
      el.querySelector("[data-handle]").setAttribute("y1", pt(S.lid - 8 - 22));
      el.querySelector("[data-handle]").setAttribute("y2", pt(S.lid - 8));
      const merc = el.querySelector("[data-merc]");
      const h = ((S.T - T_MIN) / (T_MAX - T_MIN)) * (BOX.y1 - BOX.y0 - 8);
      merc.setAttribute("y", pt(BOX.y1 - 4 - h));
      merc.setAttribute("height", pt(h));
    }

    function settle() {
      // a still picture for reduced motion (and for the first view): let the particles move for a short while
      for (let i = 0; i < 90; i++) stepSim(0.03);
      draw();
    }

    function info() {
      const st = stateOf(S.T);
      const sq = squash(S.T);
      return { st, sq, K: kelvin(S.T), ke: energyRatio(S.T), sp: speedRatio(S.T) };
    }

    function refresh() {
      const I = info();
      const rows = [
        [t("Temperature"), `${S.T} °C = ${Labs.num(I.K, 2)} K`],
        [t("State"), t(NAME[I.st])],
        [t("Arrangement of the particles"), t(SPACING[I.st])],
        [t("Average energy of motion (compared with 0 °C)"), `× ${Labs.fix(I.ke, 3)}`],
        [t("Typical particle speed (compared with 0 °C)"), `× ${Labs.fix(I.sp, 3)}`],
        [t("Pushing the lid (pressure doubled)"), !S.push ? t("not pushed") : I.sq == null ? t("depends on how much is steam") : `${Math.abs(I.sq) < 1 ? Labs.fix(I.sq, 3) : Labs.num(I.sq, 1)} % ${t("volume")}`],
      ];
      if (I.st === "boiling") rows.push([t("Steam compared with the same water"), t("about {n} times the volume", { n: Labs.num(Math.round(STEAM_RATIO / 100) * 100, 0) })]);
      el.querySelector("#vlp-T-o").textContent = `${S.T} °C`;
      el.querySelector("#vlp-T").setAttribute("aria-valuetext", `${S.T} °C, ${t(NAME[I.st])}`);
      el.querySelector("[data-state]").textContent = t(NAME[I.st]);
      el.querySelector("[data-lid] span").textContent = S.push ? t("Lid is pushed down") : t("Push the lid down");
      el.querySelector("[data-lid]").setAttribute("aria-pressed", S.push);
      el.querySelector("[data-motion] span").textContent = S.motion ? t("Pause motion") : t("Play motion");
      el.querySelector("[data-motion]").setAttribute("aria-pressed", S.motion);
      const on = (s) => I.st === s || (I.st === "melting" && (s === "solid" || s === "liquid")) || (I.st === "boiling" && (s === "liquid" || s === "gas"));
      const C = [
        ["Shape", "Fixed shape", "Takes the shape of the part of the container it fills", "No fixed shape: fills the whole container"],
        ["Volume", "Fixed volume", "Fixed volume", "No fixed volume: spreads to fill the container"],
        ["Squashing it (compressibility)", "Cannot be squashed", "Cannot be squashed", "Easily squashed"],
        ["Particles", "Close together in a regular pattern; vibrate in place", "Close together, no pattern; slide past one another", "Far apart; move quickly in all directions"],
      ];
      el.querySelector("[data-compare]").innerHTML = `<caption class="sr-only">${t("Comparing solids, liquids and gases")}</caption><thead><tr><th scope="col"></th>${["solid", "liquid", "gas"].map((s) => `<th scope="col" class="${on(s) ? "vl-now" : ""}" ${on(s) ? 'aria-current="true"' : ""}>${t({ solid: "Solid", liquid: "Liquid", gas: "Gas" }[s])}</th>`).join("")}</tr></thead><tbody>${C.map(
        (r) => `<tr><th scope="row">${t(r[0])}</th>${[1, 2, 3].map((k, j) => `<td class="${on(["solid", "liquid", "gas"][j]) ? "vl-now" : ""}">${t(r[k])}</td>`).join("")}</tr>`
      ).join("")}</tbody>`;
      flow.live(rows, `${S.T} °C. ${t(NAME[I.st])}. ${t(SPACING[I.st])}.`);
    }

    function loop(ts) {
      if (!S.motion || !el.isConnected) return;
      const dt = S.last ? Math.min(0.05, (ts - S.last) / 1000) : 0.016;
      S.last = ts;
      stepSim(dt);
      draw();
      S.raf = requestAnimationFrame(loop);
    }
    function startMotion() {
      cancelAnimationFrame(S.raf);
      S.last = 0;
      if (S.motion) S.raf = requestAnimationFrame(loop);
      else settle();
    }
    function setT(T, quiet) {
      S.T = Math.max(T_MIN, Math.min(T_MAX, Math.round(T)));
      el.querySelector("#vlp-T").value = S.T;
      refresh();
      if (!S.motion) settle();
    }

    flow = Labs.flow(el, api, {
      assumptions: "Pure water at normal air pressure (1 atm). The temperature shown is the temperature of the water itself, so at 0 °C (melting) and at 100 °C (boiling) it stays the same while the heat goes into loosening the particles. The pictures are schematic: 60 particles, spacing not to scale. The speed of the particles in the picture follows the square root of the temperature in kelvin.",
      columns: [
        { key: "T", label: "Temperature", unit: "°C", var: true },
        { key: "push", label: "Lid pushed?", var: true },
        { key: "state", label: "State" },
        { key: "ke", label: "Average energy (× value at 0 °C)", d: 2 },
        { key: "sq", label: "Volume squashed", unit: "%", fmt: (v) => (v === 0 ? "0" : v == null ? "—" : v < 1 ? Labs.fix(v, 3) : Labs.num(v, 1)) },
      ],
      investigations: [
        {
          id: "heat",
          title: "Heating ice",
          question: "Ice at −10 °C is slowly heated until the water is at 50 °C. What happens to the particles?",
          predict: { opts: ["They stay in fixed places and only vibrate faster", "At 0 °C they start to slide past one another (melting) and keep moving faster as it warms, but still stay close together", "They fly far apart and fill the whole box"], ans: 1 },
          vary: "T",
          held: ["Lid (not pushed)", "Pressure (normal air pressure)"],
          go: "Record a run at −10 °C. Then change only the temperature: try 0 °C, 50 °C and 100 °C, and record each one.",
          explain: {
            q: "Which explanation fits what you saw?",
            opts: ["Heating gives the particles more energy: in ice they vibrate harder, at 0 °C they break out of their fixed places (melting), and in water they slide around but stay touching", "Heating makes each particle itself melt and get smaller", "Heating adds more particles to the ice"],
            ans: 0,
            why: "The particles are the same ones all the way through. Heat raises their average energy of motion (it is proportional to the temperature in kelvin). At 0 °C the particles leave their fixed places: the solid melts. At 100 °C they break away from one another: the liquid boils and becomes a gas.",
          },
          graph: { x: "T", y: "ke" },
        },
        {
          id: "squash",
          title: "Squashing a liquid and a gas",
          question: "You push the lid down with the same force, first on water at 50 °C and then on steam at 120 °C. What happens?",
          predict: { opts: ["Both are squashed by the same amount", "The steam is squashed a lot; the water hardly changes", "The water is squashed more, because it is heavier"], ans: 1 },
          vary: "T",
          held: ["Lid (pushed with the same force)", "Pressure change (doubled)"],
          go: "Push the lid down. Record a run at 50 °C. Then change only the temperature to 120 °C and record again.",
          explain: {
            q: "Which explanation fits your table?",
            opts: ["In a gas the particles are far apart with empty space between them, so they can be pushed closer; in a liquid they already touch", "Gas particles are smaller than liquid particles", "A liquid is not made of particles"],
            ans: 0,
            why: "Doubling the pressure on a gas halves its volume (Boyle's law) because most of a gas is empty space. The particles of a liquid are already touching, so the volume changes by only about 0.005 %. A solid is the same.",
          },
          graph: { x: "run", y: "sq" },
        },
      ],
      mountStage(slot, F) {
        flow = F;
        slot.innerHTML = stage();
        build();
        slot.addEventListener("input", (e) => {
          if (e.target.id === "vlp-T") setT(Number(e.target.value));
        });
        slot.addEventListener("click", (e) => {
          const set = e.target.closest("[data-set]");
          if (set) return setT(Number(set.dataset.set));
          if (e.target.closest("[data-lid]")) {
            S.push = !S.push;
            refresh();
            if (!S.motion) settle();
          } else if (e.target.closest("[data-motion]")) {
            S.motion = !S.motion;
            refresh();
            startMotion();
          } else if (e.target.closest("[data-record]")) {
            const I = info();
            flow.addRun({ T: S.T, push: S.push ? t("yes") : t("no"), state: t(NAME[I.st]), ke: I.ke, sq: S.push ? (I.sq == null ? null : Math.abs(I.sq)) : 0 });
          }
        });
        window.addEventListener("hashchange", () => cancelAnimationFrame(S.raf), { once: true });
      },
      onInvestigation(inv) {
        S.push = inv.id === "squash";
        setT(inv.id === "squash" ? 50 : -10);
        S.lid = S.lidTo = BOX.y0;
        refresh();
        settle();
        startMotion();
      },
    });
  }

  Labs.register("particles", {
    title: "Particle world",
    area: "chemistry",
    icon: "formula",
    objective: "Heat and cool water and watch its particles. See how they are arranged and move in a solid, a liquid and a gas, what happens at 0 °C and 100 °C, and why a gas can be squashed but a liquid cannot.",
    chapters: [
      { cls: 6, subject: "science", chapter: "a-journey-through-states-of-water" },
      { cls: 8, subject: "science", chapter: "particulate-nature-of-matter" },
      { cls: 9, subject: "sciencepb", chapter: "matter-in-our-surroundings" },
    ],
    mount,
  });
})();
