// Interactive experiments: six small simulations drawn in SVG, each following predict -> change a variable ->
// observe -> explain. They run offline, use only the formulas the chapters teach, and are attached to chapters by
// id (see CHAPTERS). Sims.cards(cls, subject, chapter) returns the "Experiment" cards for a chapter's Notes tab;
// each card builds its simulation the first time it is opened. All events are handled once, on the document.
//
//   lens    convex lens and concave mirror image formation   1/v - 1/u = 1/f (lens),  1/v + 1/u = 1/f (mirror)
//   ohm     Ohm's law with one resistor, two in series or in parallel
//   pend    simple pendulum                                   T = 2*pi*sqrt(L/g)
//   proj    projectile motion                                 R = v^2 sin(2a)/g,  H = v^2 sin^2(a)/(2g)
//   snell   refraction and total internal reflection          n1 sin(i) = n2 sin(r)
//   quad    graph of y = ax^2 + bx + c                        roots, vertex, discriminant

const Sims = (() => {
  // "class/chapter id" -> simulations. Ids differ between the CBSE and PSEB books only for the earlier classes.
  const CHAPTERS = {
    "8/light-mirrors-and-lenses": ["lens"],
    "8/light": ["lens"],
    "8/electricity-magnetic-and-heating-effects": ["ohm"],
    "10/light-reflection-and-refraction": ["lens", "snell"],
    "10/electricity": ["ohm"],
    "10/quadratic-equations": ["quad"],
    "11/motion-in-a-plane": ["proj"],
    "11/oscillations": ["pend"],
    "11/complex-numbers-and-quadratic-equations": ["quad"],
    "12/ray-optics-and-optical-instruments": ["lens", "snell"],
    "12/current-electricity": ["ohm"],
  };

  // ---------- helpers ----------
  const RAD = Math.PI / 180;
  // Number to at most d decimals, with a real minus sign.
  const num = (x, d = 2) => {
    const r = Math.round(x * 10 ** d) / 10 ** d;
    return (r < 0 ? "−" : "") + String(Math.abs(r));
  };
    const p = (x) => Math.round(x * 10) / 10; // pixel coordinate
  const line = (x1, y1, x2, y2, cls) => `<line class="${cls}" x1="${p(x1)}" y1="${p(y1)}" x2="${p(x2)}" y2="${p(y2)}"/>`;
  const text = (x, y, s, cls = "", anchor = "middle") => `<text class="${cls}" x="${p(x)}" y="${p(y)}" text-anchor="${anchor}">${esc(s)}</text>`;
  // The point where the line through (x1,y1) and (x2,y2) reaches x = xe.
  const toX = (x1, y1, x2, y2, xe) => [xe, y1 + ((y2 - y1) * (xe - x1)) / (x2 - x1)];
  const arrow = (x, y0, y1, cls) => {
    const up = y1 < y0 ? 1 : -1;
    return `<line class="${cls}" x1="${x}" y1="${p(y0)}" x2="${x}" y2="${p(y1)}"/><path class="${cls} fillme" d="M${x - 5},${p(y1 + up * 9)} L${x},${p(y1)} L${x + 5},${p(y1 + up * 9)}"/>`;
  };

  // ---------- 1. lens and mirror ----------
  const lens = {
    title: "Image formation: lens and mirror",
    pred: {
      q: "A convex lens has focal length 10 cm and the object is 30 cm away. You slide the object to 15 cm. What happens to the image?",
      opts: ["It gets smaller and moves closer to the lens", "It gets bigger and moves farther from the lens", "It becomes virtual and upright"],
      ans: 1,
      go: "Set the object distance to 15 cm and compare the image with the one at 30 cm. Then keep going below 10 cm.",
      why: "At 15 cm, 1/v = 1/10 − 1/15, so v = 30 cm and m = −2: a real, inverted image twice as large, farther from the lens. The image only becomes virtual and upright when the object is closer than the focal length (here, under 10 cm).",
    },
    modes: [["kind", "Device", [["lens", "Convex lens"], ["mirror", "Concave mirror"]], "lens"]],
    ctrls: [
      ["f", "Focal length", 5, 20, 1, 10, "cm"],
      ["d", "Object distance", 2, 40, 1, 30, "cm"],
    ],
    calc(S) {
      const { f, d } = S;
      const inf = d === f;
      const vl = inf ? Infinity : (f * d) / (d - f); // lens image distance
      const m = inf ? Infinity : -vl / d;
      const lensKind = S.kind === "lens";
      return { inf, vl, m, v: lensKind ? vl : -vl, real: d > f };
    },
    view(S) {
      const K = 6, X = 300, Y = 130, H = 40;
      const { f, d } = S;
      const c = this.calc(S);
      const isLens = S.kind === "lens";
      const xo = X - K * d, yt = Y - H;
      let s = line(0, Y, 600, Y, "s-ax");
      // the device
      s += isLens
        ? `<path class="s-lens" d="M300,45 Q336,130 300,215 Q264,130 300,45Z"/>`
        : `<path class="s-mirror" d="M296,45 Q326,130 296,215"/><path class="s-hatch" d="M304,60 l8,-6 M310,90 l8,-6 M313,120 l8,-6 M313,150 l8,-6 M310,180 l8,-6"/>`;
      // focal points
      const marks = isLens ? [[-f, "F"], [f, "F"], [-2 * f, "2F"], [2 * f, "2F"]] : [[-f, "F"], [-2 * f, "C"]];
      marks.forEach(([k, lab]) => {
        const x = X + K * k;
        if (x > 4 && x < 596) s += `<circle class="s-pt" cx="${x}" cy="${Y}" r="3"/>${text(x, Y + 17, t(lab), "s-m")}`;
      });
      // object
      s += arrow(xo, Y, yt, "s-obj") + text(xo, Y + 34, t("Object"), "s-obj-t");
      // rays
      const y3 = yt + ((Y - yt) * (X - xo)) / (X - K * f - xo || 1e-9); // object -> far focus -> device
      const virtual = !c.inf && !c.real;
      const iy = c.inf ? null : Y - c.m * H;
      const ix = c.inf ? null : X + K * c.v;
      const R = isLens ? 600 : 0; // far edge the outgoing rays run to
      const ray = (x1, y1, x2, y2, back) => {
        // solid segment (x1,y1)->(x2,y2) extended to the far edge; dashed back-extension to the image when virtual
        const [ex, ey] = toX(x1, y1, x2, y2, R);
        let o = line(x1, y1, ex, ey, "s-ray");
        if (virtual && back) o += line(x1, y1, ix, iy, "s-ray s-virt");
        return o;
      };
      let incoming = "", out = "";
      // ray 1: parallel to the axis, then through (lens) or towards (mirror) the focus
      incoming += line(xo, yt, X, yt, "s-ray");
      out += ray(X, yt, isLens ? X + K * f : X - K * f, Y, true);
      // ray 2: lens: through the centre. mirror: through the focus, reflected parallel to the axis
      if (isLens) {
        out += `${line(xo, yt, X, Y, "s-ray")}${ray(X, Y, X + (X - xo), Y + (Y - yt), false)}`;
        if (virtual) out += line(xo, yt, ix, iy, "s-ray s-virt");
      } else if (!c.inf) {
        const y2 = y3;
        incoming += line(xo, yt, X, y2, "s-ray");
        out += ray(X, y2, 0, y2, true);
      }
      // ray 3: lens: through the near focus, leaves parallel. mirror: to the pole, reflected at equal angle
      if (isLens && !c.inf) {
        incoming += line(xo, yt, X, y3, "s-ray");
        out += ray(X, y3, 600, y3, true);
      } else if (!isLens) {
        const k = (Y - yt) / (X - xo);
        incoming += line(xo, yt, X, Y, "s-ray");
        out += ray(X, Y, 0, Y + k * X, true);
      }
      s += incoming + out;
      // image
      if (!c.inf && Math.abs(ix - X) < 285) {
        const cls = virtual ? "s-img s-virt" : "s-img";
        s += arrow(p(ix), Y, iy, cls) + text(ix, iy < Y ? iy - 8 : iy + 16, t("Image"), "s-img-t");
      } else s += text(300, 24, c.inf ? t("Rays leave parallel: no image forms") : t("The image is off the screen, far away"), "s-m");
      return `<svg viewBox="0 0 600 260" role="img" aria-label="${esc(t(isLens ? "Ray diagram for a convex lens" : "Ray diagram for a concave mirror"))}">${s}</svg>`;
    },
    rows(S) {
      const c = this.calc(S);
      const isLens = S.kind === "lens";
      const F = isLens ? S.f : -S.f;
      if (c.inf) return [[t("Object distance u"), `−${S.d} cm`], [t("Image distance v"), t("at infinity")], [t("Image"), t("No image: the object is at the focus")]];
      const size = Math.abs(Math.abs(c.m) - 1) < 0.005 ? t("same size") : Math.abs(c.m) > 1 ? t("magnified") : t("diminished");
      const nature = `${c.real ? t("real") : t("virtual")}, ${c.m < 0 ? t("inverted") : t("erect")}, ${size}`;
      const lhs = isLens ? 1 / c.v - 1 / -S.d : 1 / c.v + 1 / -S.d;
      return [
        [t("Object distance u"), `−${S.d} cm`],
        [t("Focal length f"), `${num(F)} cm`],
        [t("Image distance v"), `${num(c.v, 1)} cm`],
        [t("Magnification m"), num(c.m)],
        [t("Image"), nature],
        [isLens ? "1/v − 1/u" : "1/v + 1/u", `${num(lhs, 3)} = 1/f = ${num(1 / F, 3)}`],
      ];
    },
  };

  // ---------- 2. Ohm's law ----------
  const ohm = {
    title: "Ohm's law: current, voltage and resistance",
    pred: {
      q: "A 6 V cell is joined to a 10 Ω resistor, so the current is 0.6 A. You change the resistor to 20 Ω. The current will…",
      opts: ["double to 1.2 A", "halve to 0.3 A", "stay at 0.6 A"],
      ans: 1,
      go: "Set R₁ to 20 Ω and read the current. Then switch to series or parallel and add the second resistor.",
      why: "I = V/R. With the same voltage, doubling R halves I: 6 ÷ 20 = 0.3 A. In series the resistances add (the current falls); in parallel each branch takes its own current V/R and they add (the current rises).",
    },
    modes: [["mode", "Circuit", [["single", "One resistor"], ["series", "Two in series"], ["parallel", "Two in parallel"]], "single"]],
    ctrls: [
      ["V", "Voltage V", 1, 12, 0.5, 6, "V"],
      ["r1", "Resistor R₁", 1, 50, 1, 10, "Ω"],
      ["r2", "Resistor R₂", 1, 50, 1, 20, "Ω"],
    ],
    calc(S) {
      const { V, r1, r2, mode } = S;
      const req = mode === "single" ? r1 : mode === "series" ? r1 + r2 : (r1 * r2) / (r1 + r2);
      const I = V / req;
      return mode === "parallel" ? { req, I, i1: V / r1, i2: V / r2 } : { req, I, v1: I * r1, v2: I * r2 };
    },
    view(S) {
      const c = this.calc(S);
      const w = 2 + Math.min(5, (c.I / 3) * 5);
      const wire = `style="stroke-width:${p(w)}"`;
      const res = (x, y, lab, val) => `<rect class="s-res" x="${x}" y="${y - 13}" width="110" height="28" rx="4"/>${text(x + 55, y + 7, `${lab} ${val} Ω`, "s-res-t")}`;
      let s = "";
      const seg = (d) => `<path class="s-wire" ${wire} d="${d}"/>`;
      // battery
      s += `<line class="s-batt-l" x1="46" y1="115" x2="74" y2="115"/><line class="s-batt-s" x1="52" y1="127" x2="68" y2="127"/>${text(86, 121, `${num(S.V, 1)} V`, "s-t", "start")}`;
      if (S.mode === "parallel") {
        s += seg("M60,115 V70 H150 V140") + seg("M150,70 H270") + seg("M380,70 H540 V200 H60 V127") + seg("M150,140 H270") + seg("M380,140 H540");
        s += res(270, 70, "R₁", S.r1) + res(270, 140, "R₂", S.r2);
        s += text(325, 46, `${num(c.i1, 2)} A`, "s-t") + text(325, 186, `${num(c.i2, 2)} A`, "s-t");
      } else {
        const two = S.mode === "series";
        s += seg(`M60,115 V70 H${two ? 170 : 245}`) + (two ? seg("M280,70 H320") + seg("M430,70 H540 V200 H60 V127") : seg("M355,70 H540 V200 H60 V127"));
        s += two ? res(170, 70, "R₁", S.r1) + res(320, 70, "R₂", S.r2) : res(245, 70, "R₁", S.r1);
        s += two ? text(225, 46, `${num(c.v1, 2)} V`, "s-t") + text(375, 46, `${num(c.v2, 2)} V`, "s-t") : text(300, 46, `${num(c.v1, 2)} V`, "s-t");
      }
      // ammeter on the bottom wire
      s += `<circle class="s-meter" cx="300" cy="200" r="17"/>${text(300, 205, "A", "s-t")}${text(300, 238, `I = ${num(c.I, 3)} A`, "s-t big")}`;
      s += `<path class="s-flow" d="M470,200 l-16,-6 v12z"/>`;
      return `<svg viewBox="0 0 600 260" role="img" aria-label="${esc(t("Circuit diagram"))}">${s}</svg>`;
    },
    rows(S) {
      const c = this.calc(S);
      const r = [[t("Total resistance"), `${num(c.req, 2)} Ω`], [t("Current from the cell"), `${num(c.I, 3)} A`]];
      if (S.mode === "series") r.push([t("Voltage across R₁ / R₂"), `${num(c.v1, 2)} V / ${num(c.v2, 2)} V`], [t("Same current in both"), `${num(c.I, 3)} A`]);
      if (S.mode === "parallel") r.push([t("Current in R₁ / R₂"), `${num(c.i1, 3)} A / ${num(c.i2, 3)} A`], [t("Same voltage across both"), `${num(S.V, 1)} V`]);
      r.push([t("Power"), `${num(S.V * c.I, 2)} W`]);
      return r;
    },
    sync(root, S) {
      const r2 = root.querySelector('[data-simk="r2"]');
      if (r2) r2.disabled = S.mode === "single";
    },
  };

  // ---------- 3. pendulum ----------
  const GRAV = { earth: 9.8, moon: 1.6, jupiter: 24.8 };
  const pend = {
    title: "Simple pendulum",
    anim: true,
    pred: {
      q: "A pendulum 0.25 m long swings with a period of about 1 s. You make it 4 times as long (1.00 m). The period will…",
      opts: ["become 4 s", "become about 2 s", "stay at 1 s"],
      ans: 1,
      go: "Set the length to 1.00 m and read the period. Then try the Moon's gravity.",
      why: "T = 2π√(L/g). T depends on the square root of L, so 4 times the length gives 2 times the period: T = 2π√(1.00/9.8) ≈ 2.01 s. The mass of the bob does not appear in the formula. A weaker g (the Moon) makes the pendulum slower.",
    },
    modes: [["planet", "Gravity", [["earth", "Earth (9.8 m/s²)"], ["moon", "Moon (1.6 m/s²)"], ["jupiter", "Jupiter (24.8 m/s²)"]], "earth"]],
    ctrls: [
      ["L", "Length L", 0.2, 2, 0.05, 0.25, "m"],
      ["amp", "Starting angle", 5, 30, 1, 10, "°"],
    ],
    calc(S) {
      const g = GRAV[S.planet] || 9.8;
      const T = 2 * Math.PI * Math.sqrt(S.L / g);
      return { g, T, fq: 1 / T };
    },
    view(S, inst) {
      const c = this.calc(S);
      const t0 = inst ? inst.t : 0;
      const th = S.amp * RAD * Math.cos((2 * Math.PI * t0) / c.T);
      const px = 105 * S.L; // 2 m = 210 px
      const bx = 300 + px * Math.sin(th), by = 24 + px * Math.cos(th);
      let s = `<line class="s-wire" style="stroke-width:6" x1="240" y1="20" x2="360" y2="20"/>`;
      s += `<path class="s-virt s-ax-p" d="M${p(300 - px * Math.sin(S.amp * RAD))},${p(24 + px * Math.cos(S.amp * RAD))} A${p(px)},${p(px)} 0 0 0 ${p(300 + px * Math.sin(S.amp * RAD))},${p(24 + px * Math.cos(S.amp * RAD))}"/>`;
      s += line(300, 24, 300, 24 + px + 18, "s-ax s-virt");
      s += line(300, 24, bx, by, "s-ray") + `<circle class="s-bob" cx="${p(bx)}" cy="${p(by)}" r="13"/>`;
      s += text(430, 70, `${t("Period")} T = ${num(c.T, 2)} s`, "s-t big", "start");
      s += text(430, 96, `10 × T = ${num(10 * c.T, 1)} s`, "s-t", "start");
      return `<svg viewBox="0 0 600 260" role="img" aria-label="${esc(t("A pendulum swinging"))}">${s}</svg>`;
    },
    rows(S, inst) {
      const c = this.calc(S);
      const tt = inst ? inst.t : 0;
      return [
        [t("Length L"), `${num(S.L, 2)} m`],
        [t("Gravity g"), `${c.g} m/s²`],
        [t("Period T = 2π√(L/g)"), `${num(c.T, 3)} s`],
        [t("Frequency"), `${num(c.fq, 3)} Hz`],
        [t("Swings counted"), String(Math.floor(tt / c.T))],
      ];
    },
    tick(inst, dt) {
      inst.t += dt;
    },
    buttons: [["toggle", "Start / pause"], ["reset", "Restart"]],
  };

  // ---------- 4. projectile ----------
  const proj = {
    title: "Projectile motion",
    anim: true,
    pred: {
      q: "A ball is thrown at 20 m/s. Which launch angle gives the longest range on level ground?",
      opts: ["30°", "45°", "60°"],
      ans: 1,
      go: "Try 30°, 45° and 60° and compare the range. The dashed path shows the complementary angle (90° − θ).",
      why: "R = v² sin 2θ / g is largest when sin 2θ = 1, that is θ = 45°: R = 400/9.8 ≈ 40.8 m. 30° and 60° give the same shorter range (35.3 m) because sin 60° = sin 120°. A steeper throw goes higher but lands sooner.",
    },
    ctrls: [
      ["v", "Launch speed", 5, 50, 1, 20, "m/s"],
      ["ang", "Launch angle", 5, 85, 1, 30, "°"],
    ],
    calc(S) {
      const g = 9.8, a = S.ang * RAD;
      return { g, R: (S.v * S.v * Math.sin(2 * a)) / g, H: (S.v * S.v * Math.sin(a) ** 2) / (2 * g), T: (2 * S.v * Math.sin(a)) / g, vx: S.v * Math.cos(a), vy: S.v * Math.sin(a) };
    },
    view(S, inst) {
      const c = this.calc(S);
      const g = c.g;
      const comp = this.calc({ v: S.v, ang: 90 - S.ang });
      const Hmax = Math.max(c.H, comp.H, 0.5);
      const sc = Math.min(520 / Math.max(c.R, 0.5), 190 / Hmax);
      const X0 = 40, Y0 = 225;
      let step = 1;
      for (const k of [1, 2, 5, 10, 20, 50, 100]) {
        step = k;
        if (sc * k >= 55) break;
      }
      let s = line(X0, Y0, 590, Y0, "s-ax");
      for (let x = 0; x * sc <= 550; x += step) s += line(X0 + x * sc, Y0, X0 + x * sc, Y0 + 5, "s-ax") + text(X0 + x * sc, Y0 + 19, String(x), "s-m");
      s += text(590, Y0 + 19, "m", "s-m", "end");
      const path = (v, a, cls) => {
        const aa = a * RAD, T = (2 * v * Math.sin(aa)) / g;
        let d = "";
        for (let i = 0; i <= 60; i++) {
          const tt = (T * i) / 60;
          d += `${i ? "L" : "M"}${p(X0 + v * Math.cos(aa) * tt * sc)},${p(Y0 - (v * Math.sin(aa) * tt - 0.5 * g * tt * tt) * sc)} `;
        }
        return `<path class="${cls}" d="${d}"/>`;
      };
      if (S.ang !== 45) s += path(S.v, 90 - S.ang, "s-ray s-virt s-ghost");
      s += path(S.v, S.ang, "s-ray s-traj");
      // apex and landing
      s += `<circle class="s-pt" cx="${p(X0 + (c.R / 2) * sc)}" cy="${p(Y0 - c.H * sc)}" r="3.5"/>${text(X0 + (c.R / 2) * sc, Y0 - c.H * sc - 9, `H = ${num(c.H, 1)} m`, "s-t")}`;
      s += `<circle class="s-pt" cx="${p(X0 + c.R * sc)}" cy="${Y0}" r="3.5"/>${text(Math.min(X0 + c.R * sc, 592), Y0 - 10, `R = ${num(c.R, 1)} m`, "s-t", X0 + c.R * sc > 470 ? "end" : "middle")}`;
      // ball
      if (inst && inst.t !== null) {
        const tt = Math.min(inst.t, c.T);
        s += `<circle class="s-bob" cx="${p(X0 + c.vx * tt * sc)}" cy="${p(Y0 - (c.vy * tt - 0.5 * g * tt * tt) * sc)}" r="8"/>`;
      }
      return `<svg viewBox="0 0 600 260" role="img" aria-label="${esc(t("Path of a projectile"))}">${s}</svg>`;
    },
    rows(S) {
      const c = this.calc(S);
      return [
        [t("Range R = v² sin 2θ / g"), `${num(c.R, 1)} m`],
        [t("Maximum height H = v² sin² θ / 2g"), `${num(c.H, 1)} m`],
        [t("Time of flight"), `${num(c.T, 2)} s`],
        [t("Horizontal / vertical speed at launch"), `${num(c.vx, 1)} / ${num(c.vy, 1)} m/s`],
      ];
    },
    tick(inst, dt) {
      if (inst.t === null) return;
      const c = this.calc(inst.S);
      inst.t += dt * Math.max(1, c.T / 3.5);
      if (inst.t >= c.T) inst.running = false;
    },
    buttons: [["launch", "Launch"]],
  };

  // ---------- 5. refraction ----------
  const snell = {
    title: "Refraction and total internal reflection",
    pred: {
      q: "Light goes from glass (n = 1.5) into air (n = 1.0), starting at 20° to the normal. As you increase the angle of incidence, what happens?",
      opts: ["The ray bends towards the normal and always gets through", "The ray bends away from the normal; beyond about 42° no light gets out", "The ray goes straight on at every angle"],
      ans: 1,
      go: "Raise the angle of incidence slowly from 20° to 60° and watch the refracted ray.",
      why: "Going from a denser to a rarer medium, light bends away from the normal: sin r = 1.5 × sin i. At the critical angle sin c = 1/1.5, so c ≈ 41.8°, the refracted ray runs along the surface. Beyond it there is no refracted ray: all the light is reflected (total internal reflection).",
    },
    ctrls: [
      ["n1", "Upper medium n₁", 1, 2.5, 0.01, 1.5, ""],
      ["n2", "Lower medium n₂", 1, 2.5, 0.01, 1, ""],
      ["i", "Angle of incidence", 0, 89, 1, 20, "°"],
    ],
    calc(S) {
      const s2 = (S.n1 * Math.sin(S.i * RAD)) / S.n2;
      const tir = s2 > 1;
      return { tir, r: tir ? null : Math.asin(s2) / RAD, crit: S.n1 > S.n2 ? Math.asin(S.n2 / S.n1) / RAD : null };
    },
    view(S) {
      const c = this.calc(S);
      const X = 300, Y = 130, L = 118;
      const op = (n) => p(0.06 + ((n - 1) / 1.5) * 0.4);
      let s = `<rect class="s-med" x="0" y="0" width="600" height="${Y}" style="fill-opacity:${op(S.n1)}"/><rect class="s-med" x="0" y="${Y}" width="600" height="${Y}" style="fill-opacity:${op(S.n2)}"/>`;
      s += line(0, Y, 600, Y, "s-ax") + line(X, 8, X, 252, "s-ax s-virt");
      s += text(14, 24, `n₁ = ${num(S.n1, 2)}`, "s-t", "start") + text(14, 246, `n₂ = ${num(S.n2, 2)}`, "s-t", "start");
      const si = Math.sin(S.i * RAD), ci = Math.cos(S.i * RAD);
      s += line(X - L * si, Y - L * ci, X, Y, "s-ray");
      s += c.tir ? line(X, Y, X + L * si, Y - L * ci, "s-ray") : line(X, Y, X + L * si, Y - L * ci, "s-ray s-faint");
      if (!c.tir) s += line(X, Y, X + L * Math.sin(c.r * RAD), Y + L * Math.cos(c.r * RAD), "s-ray s-refr");
      s += text(X - L * si * 0.62 - 26, Y - L * ci * 0.5, `i = ${S.i}°`, "s-t");
      s += c.tir ? text(X + 120, Y + 52, t("Total internal reflection"), "s-t big") : text(X + L * Math.sin(c.r * RAD) * 0.62 + 40, Y + L * Math.cos(c.r * RAD) * 0.5, `r = ${num(c.r, 1)}°`, "s-t");
      return `<svg viewBox="0 0 600 260" role="img" aria-label="${esc(t("Ray crossing the boundary between two media"))}">${s}</svg>`;
    },
    rows(S) {
      const c = this.calc(S);
      return [
        [t("Angle of incidence i"), `${S.i}°`],
        [t("Angle of refraction r"), c.tir ? t("none: total internal reflection") : `${num(c.r, 1)}°`],
        [t("Critical angle"), c.crit === null ? t("none (light enters a denser medium)") : `${num(c.crit, 1)}°`],
        [t("Speed of light in n₁ / n₂"), `${num(3 / S.n1, 2)} / ${num(3 / S.n2, 2)} × 10⁸ m/s`],
        [t("Check: n₁ sin i"), c.tir ? `${num(S.n1 * Math.sin(S.i * RAD), 3)} > n₂` : `${num(S.n1 * Math.sin(S.i * RAD), 3)} = n₂ sin r = ${num(S.n2 * Math.sin(c.r * RAD), 3)}`],
      ];
    },
  };

  // ---------- 6. quadratic graph ----------
  const quad = {
    title: "Graph of y = ax² + bx + c",
    pred: {
      q: "The graph of y = x² − 2x − 3 crosses the x-axis at two points. You raise c from −3 to 3, which lifts the whole graph by 6. How many real roots are there now?",
      opts: ["Two", "One", "None"],
      ans: 2,
      go: "Set c to 3 and watch the vertex and the discriminant. Then find the c at which the curve only touches the axis.",
      why: "The lowest point (vertex) was at y = −4. After lifting by 6 it is at y = 2, above the x-axis, so the curve never reaches y = 0. The discriminant b² − 4ac = 4 − 12 = −8 is negative: no real roots. The graph just touches the axis when the discriminant is 0, here at c = 1.",
    },
    ctrls: [
      ["a", "a", -3, 3, 0.5, 1, ""],
      ["b", "b", -10, 10, 0.5, -2, ""],
      ["c", "c", -10, 10, 0.5, -3, ""],
    ],
    calc(S) {
      const { a, b, c } = S;
      const D = b * b - 4 * a * c;
      if (a === 0) return { lin: true, D, roots: b === 0 ? [] : [-c / b] };
      const roots = D < 0 ? [] : D === 0 ? [-b / (2 * a)] : [(-b - Math.sqrt(D)) / (2 * a), (-b + Math.sqrt(D)) / (2 * a)];
      return { D, roots, vx: -b / (2 * a), vy: c - (b * b) / (4 * a), up: a > 0 };
    },
    view(S) {
      const c = this.calc(S);
      const sx = 30, sy = 15, X = 300, Y = 150;
      const px = (x) => X + x * sx, py = (y) => Y - y * sy;
      let s = "";
      for (let x = -10; x <= 10; x += 2) {
        s += line(px(x), 0, px(x), 300, "s-grid");
        if (x) s += text(px(x), Y + 14, String(x), "s-m");
      }
      for (let y = -10; y <= 10; y += 5) {
        s += line(0, py(y), 600, py(y), "s-grid");
        if (y) s += text(X + 5, py(y) + 4, String(y), "s-m", "start");
      }
      s += line(0, Y, 600, Y, "s-ax") + line(X, 0, X, 300, "s-ax");
      let d = "";
      for (let x = -10; x <= 10.001; x += 0.1) {
        const y = Math.max(-60, Math.min(60, S.a * x * x + S.b * x + S.c));
        d += `${d ? "L" : "M"}${p(px(x))},${p(py(y))} `;
      }
      if (!c.lin) s += line(px(c.vx), 0, px(c.vx), 300, "s-ax s-virt");
      s += `<path class="s-curve" d="${d}"/>`;
      c.roots.forEach((r) => {
        if (Math.abs(r) <= 10) s += `<circle class="s-pt s-root" cx="${p(px(r))}" cy="${Y}" r="5"/>`;
      });
      if (!c.lin && Math.abs(c.vx) <= 10 && Math.abs(c.vy) <= 10) s += `<circle class="s-pt s-vert" cx="${p(px(c.vx))}" cy="${p(py(c.vy))}" r="5"/>`;
      return `<svg viewBox="0 0 600 300" role="img" aria-label="${esc(t("Graph of the quadratic"))}">${s}</svg>`;
    },
    rows(S) {
      const c = this.calc(S);
      const co = (v) => (Math.abs(v) === 1 ? "" : num(Math.abs(v)));
      const eq = `y = ${S.a === 0 ? "" : (S.a < 0 ? "−" : "") + co(S.a) + "x² "}${S.b < 0 ? "−" : "+"} ${co(S.b)}x ${S.c < 0 ? "−" : "+"} ${num(Math.abs(S.c))}`;
      const roots = c.roots.length ? c.roots.map((r) => num(r, 2)).join(", ") : t("no real roots (the graph misses the x-axis)");
      const r = [[t("Equation"), eq], [t("Discriminant b² − 4ac"), num(c.D, 2)]];
      if (c.lin) return [...r, [t("a = 0"), t("a straight line, not a quadratic")], [t("Root"), roots]];
      return [...r, [t("Roots (x-intercepts)"), roots], [t("Vertex"), `(${num(c.vx, 2)}, ${num(c.vy, 2)})`], [t("The parabola opens"), c.up ? t("upwards (a > 0)") : t("downwards (a < 0)")]];
    },
  };

  const DEFS = { lens, ohm, pend, proj, snell, quad };
  const ICON = { lens: "◐", ohm: "⚡", pend: "◔", proj: "↗", snell: "◩", quad: "∪" };

  // ---------- the card and its events ----------
  const instances = new WeakMap(); // sim body element -> { def, S, picked, t, running }
  let uid = 0;

  function cards(c, subj, ch) {
    const ids = CHAPTERS[`${c}/${ch.id}`];
    if (!ids) return "";
    return ids
      .map(
        (id) => `<details class="card sim no-print" data-sim="${id}">
          <summary><span class="ti">${ICON[id]}</span><span class="grow"><strong>${t("Experiment")}: ${t(DEFS[id].title)}</strong><span class="small muted" style="display:block">${t("Predict, change a variable, observe, explain.")}</span></span></summary>
          <div class="sim-body"></div></details>`
      )
      .join("");
  }

  function build(box, id) {
    const def = DEFS[id];
    const S = {};
    (def.modes || []).forEach(([k, , , v]) => (S[k] = v));
    def.ctrls.forEach(([k, , , , , v]) => (S[k] = v));
    const n = ++uid;
    const inst = { def, S, picked: null, checked: false, t: def.anim && id === "proj" ? null : 0, running: id === "pend" && !matchMedia("(prefers-reduced-motion: reduce)").matches, last: 0, n };
    instances.set(box, inst);
    const ctrl = ([k, label, min, max, step, , unit]) =>
      `<div class="sim-ctrl"><label for="sim${n}-${k}">${t(label)}</label><output id="sim${n}-${k}-o" for="sim${n}-${k}"></output>
        <input type="range" id="sim${n}-${k}" data-simk="${k}" min="${min}" max="${max}" step="${step}" value="${S[k]}" data-unit="${unit}"></div>`;
    const mode = ([k, label, opts]) =>
      `<div class="sim-ctrl"><label for="sim${n}-${k}">${t(label)}</label><select id="sim${n}-${k}" data-simk="${k}">${opts.map(([v, l]) => `<option value="${v}" ${S[k] === v ? "selected" : ""}>${t(l)}</option>`).join("")}</select></div>`;
    const P = def.pred;
    box.innerHTML = `
      <section class="sim-step"><h4><span class="n">1</span>${t("Predict")}</h4>
        <p>${t(P.q)}</p>
        <div class="sim-opts" role="radiogroup" aria-label="${esc(t("Your prediction"))}">${P.opts.map((o, i) => `<button class="option" role="radio" aria-checked="false" tabindex="${i ? -1 : 0}" data-sim-pick="${i}"><span class="letter">${"ABC"[i]}</span><span>${t(o)}</span></button>`).join("")}</div></section>
      <section class="sim-step"><h4><span class="n">2</span>${t("Change a variable")}</h4>
        <p>${t(P.go)}</p>
        <div class="sim-stage" data-sim-svg aria-live="off"></div>
        <div class="sim-ctrls">${(def.modes || []).map(mode).join("")}${def.ctrls.map(ctrl).join("")}</div>
        ${def.buttons ? `<div class="sim-btns">${def.buttons.map(([a, l]) => `<button class="btn" data-sim-act="${a}">${t(l)}</button>`).join("")}</div>` : ""}</section>
      <section class="sim-step"><h4><span class="n">3</span>${t("Observe")}</h4>
        <dl class="sim-rows" data-sim-rows></dl></section>
      <section class="sim-step"><h4><span class="n">4</span>${t("Explain")}</h4>
        <button class="btn primary" data-sim-act="check" disabled>${t("Check my prediction")}</button>
        <div data-sim-fb role="status"></div></section>`;
    update(box);
  }

  // Redraws the picture and the readouts (never the controls, so a slider keeps focus while it is dragged).
  function update(box) {
    const inst = instances.get(box);
    if (!inst) return;
    const { def, S } = inst;
    box.querySelector("[data-sim-svg]").innerHTML = def.view(S, inst);
    box.querySelector("[data-sim-rows]").innerHTML = def.rows(S, inst).map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join("");
    box.querySelectorAll('input[type="range"]').forEach((r) => {
      const o = box.querySelector(`#${r.id}-o`);
      const txt = `${r.value.replace("-", "−")}${r.dataset.unit ? " " + r.dataset.unit : ""}`;
      if (o) o.textContent = txt;
      r.setAttribute("aria-valuetext", txt);
    });
    if (def.sync) def.sync(box, S);
  }

  // Animation loop for the pendulum and the projectile; it stops when the card is closed or leaves the page.
  function loop(box) {
    const inst = instances.get(box);
    if (inst.looping) return;
    inst.looping = true;
    inst.last = 0;
    const frame = (now) => {
      const det = box.closest("details");
      if (!box.isConnected || !det || !det.open) {
        inst.looping = false;
        return;
      }
      const dt = inst.last ? Math.min(0.1, (now - inst.last) / 1000) : 0;
      inst.last = now;
      if (inst.running && dt) {
        inst.def.tick(inst, dt);
        update(box);
      }
      requestAnimationFrame(frame);
    };
    requestAnimationFrame(frame);
  }

  document.addEventListener(
    "toggle",
    (e) => {
      const d = e.target;
      if (!d.matches || !d.matches("details[data-sim]") || !d.open) return;
      const box = d.querySelector(".sim-body");
      if (!instances.has(box)) build(box, d.dataset.sim);
      const inst = instances.get(box);
      if (inst.def.anim) loop(box);
    },
    true
  );

  document.addEventListener("input", (e) => {
    const el = e.target.closest && e.target.closest("[data-simk]");
    const box = el && el.closest(".sim-body");
    const inst = box && instances.get(box);
    if (!inst) return;
    inst.S[el.dataset.simk] = el.tagName === "SELECT" ? el.value : Number(el.value);
    if (inst.def.anim) {
      inst.t = inst.def === proj ? null : 0;
      if (inst.def === proj) inst.running = false;
    }
    update(box);
  });
  // A radio group moves with the arrow keys (the chosen one is the only Tab stop).
  document.addEventListener("keydown", (e) => {
    const r = e.target.closest && e.target.closest("[data-sim-pick]");
    const d = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 }[e.key];
    if (!r || !d) return;
    const all = [...r.parentElement.querySelectorAll("[data-sim-pick]")];
    const nx = all[(all.indexOf(r) + d + all.length) % all.length];
    nx.focus();
    nx.click();
    e.preventDefault();
  });
  document.addEventListener("click", (e) => {
    const b = e.target.closest && e.target.closest("[data-sim-pick],[data-sim-act]");
    const box = b && b.closest(".sim-body");
    const inst = box && instances.get(box);
    if (!inst) return;
    if (b.dataset.simPick !== undefined) {
      inst.picked = Number(b.dataset.simPick);
      box.querySelectorAll("[data-sim-pick]").forEach((o) => {
        const on = Number(o.dataset.simPick) === inst.picked;
        o.classList.toggle("selected", on);
        o.setAttribute("aria-checked", on);
        o.tabIndex = on ? 0 : -1;
      });
      box.querySelector('[data-sim-act="check"]').disabled = false;
      return;
    }
    const act = b.dataset.simAct;
    if (act === "check") {
      const P = inst.def.pred;
      const ok = inst.picked === P.ans;
      box.querySelectorAll("[data-sim-pick]").forEach((o) => {
        const i = Number(o.dataset.simPick);
        o.classList.toggle("correct", i === P.ans);
        o.classList.toggle("wrong", i === inst.picked && !ok);
      });
      box.querySelector("[data-sim-fb]").innerHTML = `<div class="feedback ${ok ? "good" : "neutral"}"><div class="h">${ok ? t("Your prediction was right 🎉") : t("Not quite, and now you can see why")}</div>${esc(t(P.why))}<p class="small muted" style="margin:8px 0 0">${t("Try it yourself: change the sliders and see whether the readouts follow the rule.")}</p></div>`;
    } else if (act === "toggle") {
      inst.running = !inst.running;
    } else if (act === "reset") {
      inst.t = 0;
      inst.running = true;
      update(box);
    } else if (act === "launch") {
      inst.t = 0;
      inst.running = true;
    }
  });

  return { cards, ids: Object.keys(DEFS), chapters: CHAPTERS, _defs: DEFS };
})();
