// Game: Angle estimate & shapes. Estimate an angle drawn at a random turn (within 10 degrees counts), name its type, and find
// missing angles. What is asked follows the class:
//   Class 4  estimate, acute / right / obtuse           Class 5  + straight and reflex, angles on a line
//   Class 6  + missing angle of a triangle, complementary angles    Class 7  isosceles, exterior angle, crossing lines
//   Class 8  quadrilaterals, regular polygons, reflex estimates     Class 9  exterior angles of polygons and triangles
// Content: no saved content; every angle is made fresh from the seed.

(() => {
  const MK = MathKit;
  const ROUNDS = 6;
  const RAD = Math.PI / 180;

  const CH = {
    4: /^shapes-lines-and-angles$/,
    5: /^angles$/,
    6: /^(lines-and-angles|understanding-elementary-shapes|basic-geometrical-ideas)$/,
    7: /^(parallel-and-intersecting-lines|a-tale-of-three-intersecting-lines|lines-and-angles|triangle-and-its-properties)$/,
    8: /^(quadrilaterals|understanding-quadrilaterals|exploring-some-geometric-themes)$/,
    9: /^(quadrilaterals|lines-and-angles|triangles)$/,
  };
  const kOf = (sc) => (!sc ? 0 : sc.level ? (sc.topic === "geometry" && sc.n >= 4 && sc.n <= 9 ? sc.n : 0) : CH[sc.cls] && CH[sc.cls].test(sc.id) ? sc.cls : 0);
  const POOL = {
    4: ["est", "name"],
    5: ["est", "name", "line"],
    6: ["est", "name", "tri", "line"],
    7: ["tri", "isos", "ext", "vert", "line"],
    8: ["tri", "quad", "poly", "vert", "estR"],
    9: ["tri", "ext", "quad", "poly", "vert"],
  };
  const SIDES = { 5: "pentagon", 6: "hexagon", 8: "octagon", 9: "nonagon", 10: "decagon", 12: "dodecagon" };
  const SIDE_NAME = () => ({ 5: t("pentagon"), 6: t("hexagon"), 8: t("octagon"), 9: t("nonagon"), 10: t("decagon"), 12: t("dodecagon") });
  const five = (R, lo, hi) => 5 * R.int(Math.ceil(lo / 5), Math.floor(hi / 5));

  const TYPES = {
    acute: () => t("Acute angle"),
    right: () => t("Right angle"),
    obtuse: () => t("Obtuse angle"),
    straight: () => t("Straight angle"),
    reflex: () => t("Reflex angle"),
  };
  const typeOf = (a) => (a < 90 ? "acute" : a === 90 ? "right" : a < 180 ? "obtuse" : a === 180 ? "straight" : "reflex");

  function make(type, k, R) {
    if (type === "est" || type === "estR") {
      let a;
      do a = type === "estR" ? five(R, 20, 340) : five(R, 15, 170);
      while (Math.abs(a - 30) <= 12 || a === 180);
      return { type: "est", a, max: type === "estR" ? 360 : 180, turn: R.int(0, 359 - Math.min(a, 359)) };
    }
    if (type === "name") {
      const kinds = k <= 4 ? ["acute", "right", "obtuse"] : ["acute", "right", "obtuse", "straight", "reflex"];
      const kind = R.pick(kinds);
      const a = kind === "acute" ? five(R, 20, 75) : kind === "right" ? 90 : kind === "obtuse" ? five(R, 105, 170) : kind === "straight" ? 180 : five(R, 200, 340);
      return { type, a, kinds, turn: R.int(0, 359) };
    }
    if (type === "tri") {
      let A, B, C;
      const right = k >= 6 && R.next() < 0.3;
      do {
        A = right ? 90 : five(R, 30, 100);
        B = five(R, 25, 85);
        C = 180 - A - B;
      } while (C < 25 || C > 110 || A + B >= 155);
      const ang = Games.shuffled([A, B, C], R);
      return { type, ang, unknown: R.int(0, 2), flip: R.next() < 0.5 };
    }
    if (type === "isos") {
      const apex = 2 * R.int(10, 70);
      const base = (180 - apex) / 2;
      return { type, apex, base, ask: R.pick(["base", "apex"]), flip: R.next() < 0.5 };
    }
    if (type === "ext") {
      let A, C;
      do {
        A = five(R, 30, 85);
        C = five(R, 30, 85);
      } while (A + C > 150 || A + C < 70);
      return { type, A, C, B: 180 - A - C, e: A + C, flip: R.next() < 0.5 };
    }
    if (type === "vert") {
      return { type, alpha: five(R, 30, 150), ask: R.pick(["opposite", "adjacent"]), turn: R.int(0, 179) };
    }
    if (type === "line") {
      const comp = k >= 6 && R.next() < 0.45;
      return comp ? { type, comp: true, alpha: five(R, 15, 75) } : { type, comp: false, alpha: five(R, 25, 155) };
    }
    if (type === "quad") {
      let v;
      do v = [five(R, 60, 130), five(R, 60, 130), five(R, 60, 130)];
      while (360 - v[0] - v[1] - v[2] < 50 || 360 - v[0] - v[1] - v[2] > 140);
      const ang = Games.shuffled([...v, 360 - v[0] - v[1] - v[2]], R);
      return { type, ang, unknown: R.int(0, 3) };
    }
    // regular polygon: interior angle, or (Class 9) exterior angle
    const n = R.pick(k <= 8 ? [5, 6, 8] : [6, 8, 9, 10, 12]);
    return { type: "poly", n, ext: k >= 9 && R.next() < 0.5 };
  }

  Games.register("angles", {
    title: "Angle estimate & shapes",
    blurb: "Estimate angles and find the missing one",
    how: "Look at the angle drawn for you. Estimate its size, name its type, or work out the missing angle of the shape. An estimate within 10 degrees scores.",
    icon: "angle",

    available: (c, subj, ch) => kOf(MK.scope(c, subj, ch)) > 0,

    build(c, subj, ch, seed) {
      const k = kOf(MK.scope(c, subj, ch));
      const R = Games.rng(seed);
      const order = Games.shuffled(POOL[k], R);
      const rounds = [];
      for (let i = 0; i < ROUNDS; i++) {
        let r;
        for (let tries = 0; tries < 6; tries++) {
          r = make(order[i % order.length], k, R);
          if (!rounds.some((x) => x.type === r.type && JSON.stringify(x) === JSON.stringify(r))) break;
        }
        rounds.push(r);
      }
      return { rounds, cls: k };
    },

    audit(data) {
      const bad = [];
      for (const r of data.rounds) {
        const a = answerOf(r);
        const tag = r.type + " " + JSON.stringify(r).slice(0, 70);
        if (!Number.isInteger(a) && r.type !== "name") bad.push(tag + ": answer not whole");
        if (r.type === "est") {
          if (!(r.a > 0 && r.a < r.max)) bad.push(tag + ": angle out of range");
          if (r.a % 5) bad.push(tag + ": odd value");
        }
        if (r.type === "name" && !r.kinds.includes(typeOf(r.a))) bad.push(tag + ": type not offered");
        if (r.type === "tri" && (r.ang.reduce((x, y) => x + y, 0) !== 180 || r.ang.some((x) => x <= 0))) bad.push(tag + ": triangle sum");
        if (r.type === "quad" && r.ang.reduce((x, y) => x + y, 0) !== 360) bad.push(tag + ": quad sum");
        if (r.type === "isos" && (r.apex + 2 * r.base !== 180 || r.base <= 0)) bad.push(tag + ": isosceles");
        if (r.type === "ext" && (r.A + r.B + r.C !== 180 || r.B < 20 || r.e !== 180 - r.B)) bad.push(tag + ": exterior");
        if (r.type === "line" && !(a > 0 && a < (r.comp ? 90 : 180))) bad.push(tag + ": line");
        if (r.type === "vert" && !(a > 0 && a < 180)) bad.push(tag + ": vertical");
        if (r.type === "poly" && (r.ext ? 360 / r.n : ((r.n - 2) * 180) / r.n) !== a) bad.push(tag + ": polygon");
        if (r.type === "poly" && !SIDES[r.n]) bad.push(tag + ": polygon name");
      }
      return bad;
    },

    mount(el, data, api) {
      // each checked round goes to api.answered(item(round), ok) inside MK.run (js/games/mathkit.js)
      MK.run(el, api, { rounds: data.rounds, prompt, draw, item });
    },
  });

  // the number the student is asked for
  function answerOf(r) {
    switch (r.type) {
      case "est":
      case "name":
        return r.a;
      case "tri":
        return r.ang[r.unknown];
      case "quad":
        return r.ang[r.unknown];
      case "isos":
        return r.ask === "base" ? r.base : r.apex;
      case "ext":
        return r.e;
      case "vert":
        return r.ask === "opposite" ? r.alpha : 180 - r.alpha;
      case "line":
        return r.comp ? 90 - r.alpha : 180 - r.alpha;
      default:
        return r.ext ? 360 / r.n : ((r.n - 2) * 180) / r.n;
    }
  }

  // plain English text for the learning record (never translated)
  function item(r) {
    const a = answerOf(r);
    const kind = (v) => `${typeOf(v)} angle`;
    const q = {
      est: `Estimate and measure an angle: an ${kind(r.a)} of about ${r.a} degrees`,
      name: `Name the type of angle: acute, right, obtuse, straight or reflex angle (this is a ${kind(r.a)})`,
      tri: "Find the missing angle of a triangle: the angle sum of a triangle is 180 degrees",
      isos: "Find an angle of an isosceles triangle: the angles opposite equal sides are equal, angle sum 180 degrees",
      ext: "Find the exterior angle of a triangle: the exterior angle equals the sum of the two interior opposite angles",
      vert: `Find the angle when two lines intersect: vertically opposite angles are equal, adjacent angles on a straight line add to 180 degrees (${r.ask})`,
      line: r.comp ? "Find the complementary angle: two angles that make a right angle add up to 90 degrees" : "Find the angle on a straight line: supplementary angles add up to 180 degrees",
      quad: "Find the missing angle of a quadrilateral: the angle sum of a quadrilateral is 360 degrees",
      poly: r.ext ? `Find the exterior angle of a regular polygon with ${r.n} sides: exterior angles add up to 360 degrees` : `Find the interior angle of a regular polygon with ${r.n} sides: angle sum of a polygon`,
    }[r.type];
    return { q, explain: q, answer: String(a) };
  }

  function prompt(r) {
    switch (r.type) {
      case "est":
        return t("Estimate this angle in degrees. Within 10° counts as right.");
      case "name":
        return t("What type of angle is this?");
      case "tri":
        return t("Find the missing angle of the triangle.");
      case "isos":
        return t("This triangle has two equal sides (marked). Find the angle marked ?.");
      case "ext":
        return t("Find the exterior angle marked ?.");
      case "vert":
        return t("Two straight lines cross. Find the angle marked ?.");
      case "line":
        return r.comp ? t("The two angles together make a right angle (90°). Find the angle marked ?.") : t("Angles on a straight line add up to 180°. Find the angle marked ?.");
      case "quad":
        return t("Find the missing angle of the quadrilateral (not drawn to scale).");
      default:
        return r.ext ? t("What is each exterior angle of this regular {name} ({n} sides)?", { name: SIDE_NAME()[r.n], n: r.n }) : t("What is each interior angle of this regular {name} ({n} sides)?", { name: SIDE_NAME()[r.n], n: r.n });
    }
  }

  function explain(r) {
    const a = answerOf(r);
    switch (r.type) {
      case "est":
        return t("This angle is {a}°. Compare it with a right angle (90°) and a straight line (180°).", { a });
      case "name":
        return `${t("This angle is {a}°.", { a })} ${{ acute: t("An acute angle is less than 90°."), right: t("A right angle is exactly 90°."), obtuse: t("An obtuse angle is more than 90° and less than 180°."), straight: t("A straight angle is exactly 180°."), reflex: t("A reflex angle is more than 180° and less than 360°.") }[typeOf(a)]}`;
      case "tri": {
        const [x, y] = r.ang.filter((_, i) => i !== r.unknown);
        return t("The angles of a triangle add up to 180°: 180° − {x}° − {y}° = {a}°.", { x, y, a });
      }
      case "quad": {
        const s = r.ang.filter((_, i) => i !== r.unknown).reduce((p, q) => p + q, 0);
        return t("The angles of a quadrilateral add up to 360°: 360° − {s}° = {a}°.", { s, a });
      }
      case "isos":
        return r.ask === "base" ? t("The angles opposite the equal sides are equal. (180° − {x}°) ÷ 2 = {a}°.", { x: r.apex, a }) : t("The two base angles are {b}° each: 180° − {b}° − {b}° = {a}°.", { b: r.base, a });
      case "ext":
        return t("An exterior angle of a triangle equals the sum of the two opposite interior angles: {x}° + {y}° = {a}°.", { x: r.A, y: r.C, a });
      case "vert":
        return r.ask === "opposite" ? t("Vertically opposite angles are equal, so the angle is {a}°.", { a }) : t("Angles side by side on a straight line add up to 180°: 180° − {x}° = {a}°.", { x: r.alpha, a });
      case "line":
        return r.comp ? t("The two angles make 90°: 90° − {x}° = {a}°.", { x: r.alpha, a }) : t("Angles on a straight line add up to 180°: 180° − {x}° = {a}°.", { x: r.alpha, a });
      default:
        return r.ext ? t("The exterior angles of a polygon add up to 360°: 360° ÷ {n} = {a}°.", { n: r.n, a }) : t("Interior angle = (n − 2) × 180° ÷ n = {m} × 180° ÷ {n} = {a}°.", { m: r.n - 2, n: r.n, a });
    }
  }

  // ---------- drawing ----------
  const W = 320;
  const H = 200;
  const pt = (c, deg, len) => [c[0] + len * Math.cos(deg * RAD), c[1] - len * Math.sin(deg * RAD)];
  const f = (p) => `${MK.p1(p[0])},${MK.p1(p[1])}`;
  // counter-clockwise (on screen) arc around c from deg `from` to `to`
  const arc = (c, from, to, r) => `M${f(pt(c, from, r))} A${r},${r} 0 ${to - from > 180 ? 1 : 0} 0 ${f(pt(c, to, r))}`;
  const wedge = (c, from, to, r) => `M${f(c)} L${f(pt(c, from, r))} A${r},${r} 0 ${to - from > 180 ? 1 : 0} 0 ${f(pt(c, to, r))} Z`;
  const dirTo = (a, b) => (Math.atan2(-(b[1] - a[1]), b[0] - a[0]) / RAD + 360) % 360;
  const ln = (a, b, cls = "mk-ray") => `<line class="${cls}" x1="${MK.p1(a[0])}" y1="${MK.p1(a[1])}" x2="${MK.p1(b[0])}" y2="${MK.p1(b[1])}"/>`;
  const text = (p, s, cls = "mk-an") => `<text class="${cls}" x="${MK.p1(p[0])}" y="${MK.p1(p[1] + 4)}" text-anchor="middle">${esc(s)}</text>`;
  // a mark for the angle at vertex V between the sides toward P and Q; `label` is drawn inside it
  function corner(V, P, Q, label, ask, r = 16) {
    const u = dirTo(V, P);
    const w = dirTo(V, Q);
    let d = (w - u + 360) % 360;
    let from = u;
    if (d > 180) {
      from = w;
      d = 360 - d;
    }
    const mid = from + d / 2;
    const shape = Math.abs(d - 90) < 0.5 ? `<path class="mk-sq" d="M${f(pt(V, from, r))} L${f(pt(pt(V, from, r), from + 90, r))} L${f(pt(V, from + 90, r))}"/>` : `<path class="mk-arc${ask ? " ask" : ""}" d="${arc(V, from, from + d, r)}"/>`;
    return shape + text(pt(V, mid, r + 14), label, ask ? "mk-an ask" : "mk-an");
  }
  // fit points into the picture, keeping the shape, and return the mapped points
  function fit(pts, flip) {
    const xs = pts.map((p) => p[0]);
    const ys = pts.map((p) => p[1]);
    const x0 = Math.min(...xs);
    const x1 = Math.max(...xs);
    const y0 = Math.min(...ys);
    const y1 = Math.max(...ys);
    const s = Math.min((W - 70) / (x1 - x0 || 1), (H - 60) / (y1 - y0 || 1));
    const ox = (W - s * (x1 - x0)) / 2 - s * x0;
    const oy = (H - s * (y1 - y0)) / 2 - s * y0;
    return pts.map((p) => {
      const x = s * p[0] + ox;
      return [flip ? W - x : x, s * p[1] + oy];
    });
  }
  // triangle with angle a at the left end of the base, b at the right end
  function tri(a, b, flip, extra = []) {
    const L = 100;
    const c = 180 - a - b;
    const tt = (L * Math.sin(b * RAD)) / Math.sin(c * RAD);
    const P0 = [0, 0];
    const P1 = [L, 0];
    const P2 = [tt * Math.cos(a * RAD), -tt * Math.sin(a * RAD)];
    return fit([P0, P1, P2, ...extra.map((e) => [P1[0] + e, 0])], flip);
  }
  function triSvg(angles, asks, flip, marks) {
    // angles: [at P0, at P1, at apex]; asks: indexes shown as "?"
    const [P0, P1, P2] = tri(angles[0], angles[1], flip);
    const label = (i) => (asks.includes(i) ? "?" : `${angles[i]}°`);
    let g = `<polygon class="mk-shape" points="${f(P0)} ${f(P1)} ${f(P2)}"/>`;
    if (marks)
      for (const [A, B] of [[P0, P2], [P1, P2]]) {
        const m = [(A[0] + B[0]) / 2, (A[1] + B[1]) / 2];
        const d = dirTo(A, B) + 90;
        g += ln(pt(m, d, 6), pt(m, d + 180, 6), "mk-tickmark");
      }
    return g + corner(P0, P1, P2, label(0), asks.includes(0)) + corner(P1, P0, P2, label(1), asks.includes(1)) + corner(P2, P0, P1, label(2), asks.includes(2), 14);
  }

  function figure(r, shown) {
    // `shown`: true after the answer is known (unknown angle gets its value)
    const val = (v) => (shown ? `${v}°` : "?");
    switch (r.type) {
      case "est":
      case "name": {
        const c = [160, 104];
        let g = `<path class="mk-wedge" d="${wedge(c, r.turn, r.turn + r.a, 30)}"/>`;
        g += ln(c, pt(c, r.turn, 88)) + ln(c, pt(c, r.turn + r.a, 88));
        if (r.type === "name" && r.a === 90) g += `<path class="mk-sq" d="M${f(pt(c, r.turn, 16))} L${f(pt(pt(c, r.turn, 16), r.turn + 90, 16))} L${f(pt(c, r.turn + 90, 16))}"/>`;
        g += `<circle class="mk-dot" cx="${c[0]}" cy="${c[1]}" r="3.5"/>`;
        return g;
      }
      case "tri":
        return triSvg(r.ang, shown ? [] : [r.unknown], r.flip);
      case "isos":
        return triSvg([r.base, r.base, r.apex], shown ? [] : r.ask === "base" ? [0, 1] : [2], r.flip, true);
      case "ext": {
        const [A, B, C] = [r.A, r.B, r.C];
        const [P0, P1, P2, E] = tri(A, B, r.flip, [70]);
        let g = `<polygon class="mk-shape" points="${f(P0)} ${f(P1)} ${f(P2)}"/>${ln(P1, E, "mk-ray dash")}`;
        g += corner(P0, P1, P2, `${A}°`, false) + corner(P2, P0, P1, `${C}°`, false, 14) + corner(P1, E, P2, shown ? `${r.e}°` : "?", true, 18);
        return g;
      }
      case "vert": {
        const c = [160, 104];
        const p = r.turn;
        const q = r.turn + r.alpha;
        let g = "";
        for (const d of [p, p + 180, q, q + 180]) g += ln(c, pt(c, d, 88));
        const sector = (from, to, label, ask) => `<path class="mk-arc${ask ? " ask" : ""}" d="${arc(c, from, to, 26)}"/>${text(pt(c, (from + to) / 2, 44), label, ask ? "mk-an ask" : "mk-an")}`;
        g += sector(p, q, `${r.alpha}°`, false);
        g += r.ask === "opposite" ? sector(p + 180, q + 180, val(r.alpha), true) : sector(q, p + 180, val(180 - r.alpha), true);
        return g + `<circle class="mk-dot" cx="${c[0]}" cy="${c[1]}" r="3.5"/>`;
      }
      case "line": {
        const c = [160, 150];
        const top = r.comp ? 90 : 180;
        let g = ln([30, 150], [290, 150]);
        if (r.comp) g += ln(c, [160, 20]) + `<path class="mk-sq" d="M${f(pt(c, 0, 16))} L${f(pt(pt(c, 0, 16), 90, 16))} L${f(pt(c, 90, 16))}"/>`;
        g += ln(c, pt(c, r.alpha, 120));
        g += `<path class="mk-arc" d="${arc(c, 0, r.alpha, 34)}"/>${text(pt(c, r.alpha / 2, 56), `${r.alpha}°`)}`;
        g += `<path class="mk-arc ask" d="${arc(c, r.alpha, top, 44)}"/>${text(pt(c, (r.alpha + top) / 2, 66), val(top - r.alpha), "mk-an ask")}`;
        return g + `<circle class="mk-dot" cx="160" cy="150" r="3.5"/>`;
      }
      case "quad": {
        const P = [[50, 38], [272, 52], [292, 164], [34, 150]];
        const cen = [(P[0][0] + P[1][0] + P[2][0] + P[3][0]) / 4, (P[0][1] + P[1][1] + P[2][1] + P[3][1]) / 4];
        let g = `<polygon class="mk-shape" points="${P.map(f).join(" ")}"/>`;
        P.forEach((v, i) => {
          const d = Math.hypot(cen[0] - v[0], cen[1] - v[1]);
          const p = [v[0] + ((cen[0] - v[0]) / d) * 30, v[1] + ((cen[1] - v[1]) / d) * 30];
          const ask = i === r.unknown;
          g += text(p, ask && !shown ? "?" : `${r.ang[i]}°`, ask ? "mk-an ask" : "mk-an");
        });
        return g;
      }
      default: {
        const c = [160, 104];
        const P = Array.from({ length: r.n }, (_, i) => pt(c, 90 + (i * 360) / r.n, 82));
        let g = `<polygon class="mk-shape" points="${P.map(f).join(" ")}"/>`;
        if (r.ext) {
          const dir = dirTo(P[1], P[0]); // extend the side P0->P1 beyond P1
          const e = pt(P[1], dir + 180, 38);
          g += ln(P[1], e, "mk-ray dash");
          g += corner(P[1], e, P[2], shown ? `${360 / r.n}°` : "?", true, 14);
        } else g += corner(P[0], P[1], P[r.n - 1], shown ? `${((r.n - 2) * 180) / r.n}°` : "?", true, 18);
        return g;
      }
    }
  }

  function draw(r, board, submit) {
    const shown = false;
    board.innerHTML = `<div class="card mk-card"><svg class="mk-svg" viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(describe(r))}" data-fig>${figure(r, shown)}</svg><div data-ctl></div></div>`;
    const fig = board.querySelector("[data-fig]");
    const ctl = board.querySelector("[data-ctl]");
    const a = answerOf(r);

    if (r.type === "est") {
      ctl.innerHTML = `<div class="mk-est"><output class="mk-readout" data-out aria-live="off">30°</output>
        <input class="mk-range" data-focus type="range" min="0" max="${r.max}" step="1" value="30" aria-label="${t("Your estimate in degrees")}">
        <div class="mk-btnrow"><button class="btn" data-d="-10">−10</button><button class="btn" data-d="-1">−1</button><button class="btn" data-d="1">+1</button><button class="btn" data-d="10">+10</button></div>
        <button class="btn primary block" data-act="check" style="margin-top:12px">${t("Check")}</button></div>`;
      const inp = ctl.querySelector("input");
      const out = ctl.querySelector("[data-out]");
      const set = (v) => {
        inp.value = Math.max(0, Math.min(r.max, v));
        out.textContent = inp.value + "°";
        inp.setAttribute("aria-valuetext", t("{n} degrees", { n: inp.value }));
      };
      inp.addEventListener("input", () => set(Number(inp.value)));
      ctl.addEventListener("click", (e) => {
        const b = e.target.closest("[data-d]");
        if (b) set(Number(inp.value) + Number(b.dataset.d));
        if (e.target.closest("[data-act=check]")) check(Number(inp.value));
      });
      inp.addEventListener("keydown", (e) => e.key === "Enter" && check(Number(inp.value)));
    } else if (r.type === "name") {
      ctl.innerHTML = `<div class="mk-choices" role="group" aria-label="${t("Angle types")}">${r.kinds.map((k, i) => `<button class="option" data-k="${k}" ${i === 0 ? "data-focus" : ""}><span class="letter">${i + 1}</span><span>${esc(TYPES[k]())}</span></button>`).join("")}</div>`;
      const pick = (btn) => {
        const k = btn.dataset.k;
        const ok = k === typeOf(a);
        submit({
          ok,
          yours: esc(TYPES[k]()),
          right: esc(`${TYPES[typeOf(a)]()} (${a}°)`),
          explain: esc(explain(r)),
          showRight: true,
          reveal() {
            ctl.querySelectorAll(".option").forEach((b) => {
              b.classList.add("locked");
              if (b.dataset.k === typeOf(a)) b.classList.add("correct");
              else if (b === btn) b.classList.add("wrong");
            });
          },
        });
      };
      ctl.addEventListener("click", (e) => {
        const b = e.target.closest("[data-k]");
        if (b) pick(b);
      });
      board.addEventListener("keydown", (e) => {
        const i = "12345".indexOf(e.key);
        const b = i >= 0 && ctl.querySelectorAll("[data-k]")[i];
        if (b && !e.ctrlKey && !e.metaKey && !e.altKey) pick(b);
      });
    } else {
      MK.numberInput(ctl, {
        label: t("Your answer in degrees"),
        unit: "°",
        onSubmit: (v) => {
          const ok = v === a;
          submit({
            ok,
            yours: esc(`${v}°`),
            right: esc(`${a}°`),
            explain: esc(explain(r)),
            showRight: true,
            reveal: () => (fig.innerHTML = figure(r, true)),
          });
        },
      });
    }

    function check(v) {
      const d = Math.abs(v - a);
      const ok = d <= 10;
      submit({
        ok,
        credit: d <= 5 ? 1 : d <= 10 ? 0.8 : d <= 20 ? 0.3 : 0,
        pts: d <= 5 ? 100 : d <= 10 ? 70 : d <= 20 ? 20 : 0,
        headline: ok ? (d <= 5 ? t("Spot on! 🎯") : t("Good estimate! 🎯")) : undefined,
        yours: esc(`${v}°`),
        right: esc(`${a}°`),
        explain: esc(`${t("You were {d}° away.", { d })} ${explain(r)}`),
        showRight: true,
        reveal() {
          const c = [160, 104];
          fig.insertAdjacentHTML("afterbegin", `<path class="mk-wedge guess" d="${wedge(c, r.turn, r.turn + v, 46)}"/>`);
          fig.insertAdjacentHTML("beforeend", text(pt(c, r.turn + r.a / 2, 66), `${a}°`, "mk-an ask"));
        },
      });
    }
  }

  function describe(r) {
    switch (r.type) {
      case "est":
      case "name":
        return t("An angle drawn between two lines");
      case "tri":
        return t("A triangle with its angles marked");
      case "isos":
        return t("An isosceles triangle with its angles marked");
      case "ext":
        return t("A triangle with one side extended to show an exterior angle");
      case "vert":
        return t("Two straight lines crossing");
      case "line":
        return t("A ray standing on a line");
      case "quad":
        return t("A quadrilateral with its angles marked");
      default:
        return t("A regular polygon");
    }
  }
})();
