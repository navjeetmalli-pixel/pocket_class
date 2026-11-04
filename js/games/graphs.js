// Game: Graph plot. Work with graphs on a grid:
//   plot   tap points to plot the line y = mx + c (at least two points, all on the line)
//   line   read the equation of a drawn line from four choices
//   point  tap the point (x, y) on the grid           read   read the coordinates of a marked point
//   quadrant  name the quadrant of a point            zeros  how many times a curve crosses the x-axis
//   match  choose which of three drawn graphs is a given function (sin x, x², sin⁻¹ x, a parabola ...)
// Classes 9-10 start with points and straight lines; Classes 11-12 match functions to their graphs.
// Content: no saved content; every line, point and function is made fresh from the seed.

(() => {
  const MK = MathKit;
  const ROUNDS = 5;
  const R5 = 5; // the grid shows -5 to 5

  const CH = {
    8: [[/^introduction-to-graphs$/, ["point", "read"]]],
    9: [[/^(orienting-yourself-the-use-of-coordinates|coordinate-geometry)$/, ["point", "read", "quadrant"]], [/^(two-variables-one-line|linear-equations-in-two-variables)$/, ["plot", "line"]]],
    10: [[/^coordinate-geometry$/, ["point", "read", "line"]], [/^pair-of-linear-equations-in-two-variables$/, ["plot", "line"]], [/^(polynomials|quadratic-equations)$/, ["zeros"]]],
    11: [[/^straight-lines$/, ["plot", "line"]], [/^(relations-and-functions|limits-and-derivatives)$/, ["match:func"]], [/^trigonometric-functions$/, ["match:trig"]], [/^conic-sections$/, ["match:conic"]]],
    12: [[/^(relations-and-functions|continuity-and-differentiability|application-of-derivatives)$/, ["match:func"]], [/^inverse-trigonometric-functions$/, ["match:invtrig"]], [/^linear-programming$/, ["plot", "line"]]],
  };
  function kinds(sc) {
    if (!sc) return [];
    if (sc.level) {
      const { topic, n } = sc;
      if (topic === "algebra" && (n === 9 || n === 10)) return ["plot", "line"];
      if (topic === "geometry") return n === 9 ? ["point", "read", "quadrant"] : n === 10 ? ["point", "read", "line"] : n === 11 ? ["plot", "line", "match:conic"] : [];
      if (topic === "trigonometry") return n === 11 ? ["match:trig"] : n === 12 ? ["match:invtrig"] : [];
      if (topic === "calculus") return n === 11 || n === 12 ? ["match:func"] : [];
      return [];
    }
    for (const [re, k] of CH[sc.cls] || []) if (re.test(sc.id)) return k;
    return [];
  }

  // ---------- lines ----------
  const SLOPES = { easy: [1, 2, -1, -2], more: [1, 2, 3, -1, -2, -3, 0.5, -0.5] };
  // lattice points of y = mx + c inside the grid
  function latticePts(m, c) {
    const out = [];
    for (let x = -R5; x <= R5; x++) {
      const y = m * x + c;
      if (Number.isInteger(y) && Math.abs(y) <= R5) out.push([x, y]);
    }
    return out;
  }
  const mText = (m) => (m === 1 ? "x" : m === -1 ? "−x" : m === 0.5 ? "x/2" : m === -0.5 ? "−x/2" : `${MK.num(m)}x`);
  const eqText = (m, c) => `y = ${mText(m)}${c ? (c < 0 ? " − " : " + ") + Math.abs(c) : ""}`;
  function makeLine(k, R) {
    const slopes = k <= 9 ? SLOPES.easy : SLOPES.more;
    for (let i = 0; i < 40; i++) {
      const m = R.pick(slopes);
      const c = R.int(-3, 3);
      if (latticePts(m, c).length >= 3) return { m, c };
    }
    return { m: 1, c: 0 };
  }

  const nz = (R, lo, hi) => R.nz(lo, hi);

  // ---------- functions to match ----------
  const pi = Math.PI;
  const F = {
    func: {
      win: [-3, 3, -3, 3],
      list: [
        { name: "y = x²", f: (x) => x * x },
        { name: "y = x³", f: (x) => x * x * x },
        { name: "y = |x|", f: Math.abs },
        { name: "y = 1/x", f: (x) => 1 / x },
        { name: "y = √x", f: (x) => Math.sqrt(x) },
        { name: "y = eˣ", f: Math.exp },
        { name: "y = ln x", f: Math.log },
        { name: "y = −x²", f: (x) => -x * x },
      ],
      xs: [1, -1, 2, -2, 0.5, 0, 3, 4].map((x) => ({ x, label: MK.num(x) })),
    },
    trig: {
      win: [-2 * pi, 2 * pi, -1.6, 1.6],
      list: [
        { name: "y = sin x", f: Math.sin },
        { name: "y = cos x", f: Math.cos },
        { name: "y = tan x", f: Math.tan },
        { name: "y = sin 2x", f: (x) => Math.sin(2 * x) },
        { name: "y = |sin x|", f: (x) => Math.abs(Math.sin(x)) },
      ],
      xs: [{ x: 0, label: "0" }, { x: pi / 2, label: "π/2" }, { x: pi, label: "π" }, { x: pi / 4, label: "π/4" }, { x: -pi / 2, label: "−π/2" }],
    },
    invtrig: {
      win: [-2, 2, -2, 3.5],
      list: [
        { name: "y = sin⁻¹ x", f: (x) => (Math.abs(x) <= 1 ? Math.asin(x) : NaN) },
        { name: "y = cos⁻¹ x", f: (x) => (Math.abs(x) <= 1 ? Math.acos(x) : NaN) },
        { name: "y = tan⁻¹ x", f: Math.atan },
      ],
      xs: [{ x: 0, label: "0" }, { x: 1, label: "1" }, { x: -1, label: "−1" }, { x: 2, label: "2" }],
    },
    conic: {
      win: [-4, 4, -3, 3],
      list: [
        { name: "x² + y² = 4", g: (x, y) => x * x + y * y - 4, poly: () => ellipse(2, 2) },
        { name: "x²/9 + y²/4 = 1", g: (x, y) => x * x / 9 + y * y / 4 - 1, poly: () => ellipse(3, 2) },
        { name: "y² = 4x", g: (x, y) => y * y - 4 * x, poly: () => Array.from({ length: 81 }, (_, i) => { const y = -4 + i * 0.1; return [(y * y) / 4, y]; }) },
        { name: "x²/4 − y² = 1", g: (x, y) => x * x / 4 - y * y - 1, poly: () => hyper() },
      ],
    },
  };
  function ellipse(a, b) {
    return Array.from({ length: 121 }, (_, i) => [a * Math.cos((i * 2 * pi) / 120), b * Math.sin((i * 2 * pi) / 120)]);
  }
  function hyper() {
    const right = Array.from({ length: 81 }, (_, i) => { const t = -2 + i * 0.05; return [2 * Math.cosh(t), Math.sinh(t)]; });
    const left = right.map(([x, y]) => [-x, y]);
    return [right, left];
  }
  // the lines of a curve (an array of polylines), cut where the function is undefined, huge or jumps
  function polylines(def, win) {
    if (def.poly) {
      const p = def.poly();
      return Array.isArray(p[0][0]) ? p : [p];
    }
    const [x0, x1, y0, y1] = win;
    const N = 400;
    const out = [];
    let cur = [];
    let prev = null;
    const span = y1 - y0;
    for (let i = 0; i <= N; i++) {
      const x = x0 + ((x1 - x0) * i) / N;
      const y = def.f(x);
      const bad = !Number.isFinite(y) || y > y1 + span || y < y0 - span || (prev !== null && Math.abs(y - prev) > span * 0.6);
      if (bad) {
        if (cur.length > 1) out.push(cur);
        cur = [];
        prev = Number.isFinite(y) ? y : null;
        if (!Number.isFinite(y) || Math.abs(y) > span * 3) prev = null;
        continue;
      }
      cur.push([x, y]);
      prev = y;
    }
    if (cur.length > 1) out.push(cur);
    return out;
  }
  const residual = (def, x, y) => {
    const r = def.g ? def.g(x, y) : def.f(x) - y;
    return Number.isFinite(r) ? Math.abs(r) : Infinity;
  };

  function makeMatch(fam, R) {
    const set = F[fam];
    const picks = Games.shuffled(set.list, R).slice(0, 3);
    const answer = R.int(0, 2);
    // a point on the right curve that is on neither of the others (for the explanation)
    const target = picks[answer];
    const others = picks.filter((_, i) => i !== answer);
    let hint = null;
    const cands = set.xs || null;
    if (cands) {
      for (const { x, label } of cands) {
        const y = target.f(x);
        if (!Number.isFinite(y) || Math.abs(y) > Math.abs(set.win[3]) * 0.95) continue;
        if (others.every((o) => residual(o, x, y) > 0.05)) {
          hint = { xl: label, yl: MK.num(Math.round(y * 100) / 100) };
          break;
        }
      }
    } else {
      for (let x = -4; x <= 4 && !hint; x += 1)
        for (let y = -3; y <= 3 && !hint; y += 1)
          if (residual(target, x, y) < 1e-9 && others.every((o) => residual(o, x, y) > 0.05)) hint = { xl: MK.num(x), yl: MK.num(y) };
    }
    return { type: "match", fam, names: picks.map((p) => p.name), answer, hint };
  }

  // ---------- making rounds ----------
  function make(kind, k, R) {
    if (kind === "plot") return { type: "plot", ...makeLine(k, R) };
    if (kind === "line") {
      const { m, c } = makeLine(k, R);
      const right = eqText(m, c);
      const wrong = [];
      for (const [mm, cc] of [[-m, c], [m, -c], [c === 0 ? 2 * m : c, m], [m, c + 1], [m, c - 1], [-m, -c], [m * 2, c]]) {
        const s = eqText(mm, cc);
        if (s !== right && !wrong.includes(s) && mm !== 0) wrong.push(s);
      }
      const opts = Games.shuffled([right, ...wrong.slice(0, 3)], R);
      return { type: "line", m, c, options: opts, answer: opts.indexOf(right) };
    }
    if (kind === "point") {
      const mx = k <= 8 ? [1, 5] : [-5, 5];
      return { type: "point", x: k <= 8 ? R.int(1, 5) : nz(R, mx[0], mx[1]), y: k <= 8 ? R.int(1, 5) : nz(R, mx[0], mx[1]) };
    }
    if (kind === "read") {
      const x = k <= 8 ? R.int(2, 4) : nz(R, -5, 5);
      const y = k <= 8 ? R.int(2, 4) : nz(R, -5, 5);
      const cand = [[x, y], [y, x], [-x, y], [x, -y], [x + 1, y], [x, y - 1], [x - 1, y], [x, y + 1], [-x, -y]];
      const opts = [];
      for (const [a, b] of cand) {
        const s = `(${MK.num(a)}, ${MK.num(b)})`;
        if (!opts.includes(s) && Math.abs(a) <= 5 && Math.abs(b) <= 5 && (k > 8 || (a > 0 && b > 0))) opts.push(s);
        if (opts.length === 4) break;
      }
      const right = `(${MK.num(x)}, ${MK.num(y)})`;
      const shuffled = Games.shuffled(opts, R);
      return { type: "read", x, y, options: shuffled, answer: shuffled.indexOf(right) };
    }
    if (kind === "quadrant") return { type: "quadrant", x: nz(R, -5, 5), y: nz(R, -5, 5) };
    if (kind === "zeros") {
      const a = R.pick([1, -1]);
      const h = R.int(-3, 3);
      const kk = R.int(-4, 4);
      const zeros = kk === 0 ? 1 : (a > 0) === kk < 0 ? 2 : 0;
      return { type: "zeros", a, h, k: kk, zeros };
    }
    return makeMatch(kind.split(":")[1], R);
  }

  Games.register("graphs", {
    title: "Graph plot",
    blurb: "Plot lines and read or match graphs",
    how: "Tap points on the grid to plot a line, read a point or a line from a graph, or match a function to its graph. Press Check when you are ready. On a keyboard, move the cursor with the arrow keys and press Enter to plot.",
    icon: "graph",

    available: (c, subj, ch) => kinds(MK.scope(c, subj, ch)).length > 0,

    build(c, subj, ch, seed) {
      const sc = MK.scope(c, subj, ch);
      const ks = kinds(sc);
      const k = Math.max(8, sc.cls);
      const R = Games.rng(seed);
      const order = Games.shuffled(ks, R);
      const rounds = [];
      for (let i = 0; i < ROUNDS; i++) {
        let r;
        for (let tries = 0; tries < 8; tries++) {
          r = make(order[i % order.length], k, R);
          if (!rounds.some((x) => JSON.stringify(x) === JSON.stringify(r))) break;
        }
        rounds.push(r);
      }
      return { rounds, cls: k };
    },

    audit(data) {
      const bad = [];
      for (const r of data.rounds) {
        const tag = r.type + " " + JSON.stringify(r).slice(0, 70);
        if (r.type === "plot" || r.type === "line") {
          if (latticePts(r.m, r.c).length < 3) bad.push(tag + ": fewer than 3 points on the grid");
          if (r.m === 0 || /NaN|undefined/.test(eqText(r.m, r.c))) bad.push(tag + ": bad slope/text");
        }
        if (r.type === "line") {
          if (new Set(r.options).size !== 4) bad.push(tag + ": options not distinct");
          if (r.options[r.answer] !== eqText(r.m, r.c)) bad.push(tag + ": answer index");
        }
        if (r.type === "point" || r.type === "read" || r.type === "quadrant") {
          if (!r.x || !r.y || Math.abs(r.x) > R5 || Math.abs(r.y) > R5) bad.push(tag + ": point off the grid");
        }
        if (r.type === "read") {
          if (new Set(r.options).size !== r.options.length || r.options.length !== 4) bad.push(tag + ": options");
          if (r.options[r.answer] !== `(${MK.num(r.x)}, ${MK.num(r.y)})`) bad.push(tag + ": answer index");
        }
        if (r.type === "zeros") {
          // count sign changes of the samples, plus a touch of the axis
          const f = (x) => r.a * (x - r.h) * (x - r.h) + r.k;
          let n = 0;
          for (let x = -6; x < 6; x += 0.01) if (f(x) * f(x + 0.01) < 0) n++;
          if (r.k === 0) n = 1;
          if (n !== r.zeros) bad.push(tag + `: zeros ${r.zeros} but counted ${n}`);
          const peak = r.a > 0 ? r.k : r.k;
          if (Math.abs(peak) > 5 || Math.abs(r.h) > 5) bad.push(tag + ": outside the grid");
        }
        if (r.type === "match") {
          const set = F[r.fam];
          if (new Set(r.names).size !== 3) bad.push(tag + ": duplicate graphs");
          const defs = r.names.map((n) => set.list.find((d) => d.name === n));
          if (defs.some((d) => !d)) bad.push(tag + ": unknown function");
          else {
            defs.forEach((d, i) => {
              const lines = polylines(d, set.win);
              const pts = lines.reduce((a, l) => a + l.length, 0);
              if (pts < 20) bad.push(tag + `: ${d.name} draws almost nothing (${pts} points)`);
              if (lines.some((l) => l.some(([x, y]) => !Number.isFinite(x) || !Number.isFinite(y)))) bad.push(tag + ": NaN in curve " + d.name);
              if (i !== r.answer) {
                // the other graphs must differ from the answer somewhere visible
                const a = polylines(defs[r.answer], set.win).reduce((s, l) => s + l.length, 0);
                if (a === pts && JSON.stringify(polylines(d, set.win)) === JSON.stringify(polylines(defs[r.answer], set.win))) bad.push(tag + ": identical graphs");
              }
            });
            if (r.hint) {
              // the hint point must lie on the right graph only (numbers were checked when made)
              if (/NaN|undefined/.test(r.hint.xl + r.hint.yl)) bad.push(tag + ": hint text");
            }
          }
        }
      }
      return bad;
    },

    mount(el, data, api) {
      MK.run(el, api, { rounds: data.rounds, prompt, draw });
    },
  });

  const fmtP = (x, y) => `(${MK.num(x)}, ${MK.num(y)})`;
  const QUAD = ["I", "II", "III", "IV"];
  const quadOf = (x, y) => (x > 0 && y > 0 ? 0 : x < 0 && y > 0 ? 1 : x < 0 && y < 0 ? 2 : 3);

  function prompt(r) {
    switch (r.type) {
      case "plot":
        return t("Plot the line {eq}. Tap at least two points on the grid.", { eq: `<span class="mk-val">${esc(eqText(r.m, r.c))}</span>` });
      case "line":
        return t("What is the equation of this line?");
      case "point":
        return t("Tap the point {p} on the grid.", { p: `<span class="mk-val">${esc(fmtP(r.x, r.y))}</span>` });
      case "read":
        return t("What are the coordinates of the point P?");
      case "quadrant":
        return t("In which quadrant is the point P?");
      case "zeros":
        return t("How many times does this graph cross the x-axis? (How many zeros does it have?)");
      default:
        return t("Which graph is {name}?", { name: `<span class="mk-val">${esc(F[r.fam].list.find((d) => d.name === r.names[r.answer]).name)}</span>` });
    }
  }

  // ---------- the grid ----------
  const S = 320;
  const CELL = 26;
  const O = S / 2;
  const gx = (v) => MK.p1(O + CELL * v);
  const gy = (v) => MK.p1(O - CELL * v);

  function gridSvg(inner, { label, focus } = {}) {
    let g = "";
    for (let i = -R5; i <= R5; i++) {
      g += `<line class="gr-grid${i === 0 ? " zero" : ""}" x1="${gx(i)}" y1="${gy(-R5 - 0.5)}" x2="${gx(i)}" y2="${gy(R5 + 0.5)}"/><line class="gr-grid${i === 0 ? " zero" : ""}" x1="${gx(-R5 - 0.5)}" y1="${gy(i)}" x2="${gx(R5 + 0.5)}" y2="${gy(i)}"/>`;
      if (i !== 0) g += `<text class="gr-num" x="${gx(i)}" y="${gy(0) + 12}" text-anchor="middle">${MK.num(i)}</text><text class="gr-num" x="${gx(0) - 5}" y="${gy(i) + 3.5}" text-anchor="end">${MK.num(i)}</text>`;
    }
    g += `<text class="gr-axis" x="${gx(R5 + 0.5) + 2}" y="${gy(0) - 5}" text-anchor="end">x</text><text class="gr-axis" x="${gx(0) + 6}" y="${gy(R5 + 0.5) + 8}">y</text>`;
    return `<svg class="mk-svg gr-svg" viewBox="0 0 ${S} ${S}" ${focus ? `tabindex="0" data-focus role="group"` : `role="img"`} aria-label="${esc(label)}" style="touch-action:manipulation">${g}${inner}</svg>`;
  }
  // a straight line y = mx + c across the grid
  function lineSeg(m, c) {
    const lim = R5 + 0.5;
    const pts = [];
    for (const x of [-lim, lim]) {
      const y = m * x + c;
      if (Math.abs(y) <= lim) pts.push([x, y]);
    }
    if (m !== 0) for (const y of [-lim, lim]) {
      const x = (y - c) / m;
      if (Math.abs(x) <= lim) pts.push([x, y]);
    }
    pts.sort((a, b) => a[0] - b[0]);
    const a = pts[0];
    const b = pts[pts.length - 1];
    return `<line class="gr-line" x1="${gx(a[0])}" y1="${gy(a[1])}" x2="${gx(b[0])}" y2="${gy(b[1])}"/>`;
  }
  const dot = (x, y, cls, label) => `<circle class="gr-pt ${cls || ""}" cx="${gx(x)}" cy="${gy(y)}" r="6"/>${label ? `<text class="gr-pl" x="${gx(x) + 9}" y="${gy(y) - 8}">${esc(label)}</text>` : ""}`;
  const dropLines = (x, y) => `<line class="gr-drop" x1="${gx(x)}" y1="${gy(y)}" x2="${gx(x)}" y2="${gy(0)}"/><line class="gr-drop" x1="${gx(x)}" y1="${gy(y)}" x2="${gx(0)}" y2="${gy(y)}"/>`;

  function draw(r, board, submit) {
    switch (r.type) {
      case "plot":
        return drawPlot(r, board, submit, true);
      case "point":
        return drawPlot(r, board, submit, false);
      case "line":
        return drawChoice(r, board, submit, gridSvg(lineSeg(r.m, r.c), { label: t("A straight line drawn on a grid") }), r.options, (right) => ({
          right: esc(r.options[r.answer]),
          explain: esc(lineExplain(r)),
          reveal: () => {},
        }));
      case "read": {
        const svg = gridSvg(dot(r.x, r.y, "", "P"), { label: t("A grid with a point P") });
        return drawChoice(r, board, submit, svg, r.options, () => ({
          right: esc(r.options[r.answer]),
          explain: esc(t("Read across to the x-axis first: x = {x}. Then read up or down to the y-axis: y = {y}. So P = {p}.", { x: MK.num(r.x), y: MK.num(r.y), p: fmtP(r.x, r.y) })),
          reveal: (svg) => svg.insertAdjacentHTML("beforeend", dropLines(r.x, r.y)),
        }));
      }
      case "quadrant": {
        const opts = QUAD.map((q) => t("Quadrant {q}", { q }));
        const svg = gridSvg(dot(r.x, r.y, "", "P"), { label: t("A grid with a point P") });
        const q = quadOf(r.x, r.y);
        return drawChoice({ ...r, answer: q }, board, submit, svg, opts, () => ({
          right: esc(opts[q]),
          explain: esc(t("x is {sx} and y is {sy}, so P is in Quadrant {q}.", { sx: r.x > 0 ? t("positive") : t("negative"), sy: r.y > 0 ? t("positive") : t("negative"), q: QUAD[q] })),
          reveal: (svg) => svg.insertAdjacentHTML("beforeend", dropLines(r.x, r.y)),
        }));
      }
      case "zeros": {
        const f = (x) => r.a * (x - r.h) * (x - r.h) + r.k;
        let d = "";
        let pen = false;
        for (let i = 0; i <= 300; i++) {
          const x = -5.5 + (11 * i) / 300;
          const y = f(x);
          if (Math.abs(y) > 5.5) {
            pen = false;
            continue;
          }
          d += `${pen ? "L" : "M"}${gx(x)},${gy(y)} `;
          pen = true;
        }
        const svg = gridSvg(`<path class="gr-curve" d="${d}"/>`, { label: t("A curve on a grid") });
        const opts = ["0", "1", "2", "3"];
        return drawChoice({ ...r, answer: r.zeros }, board, submit, svg, opts, () => ({
          right: esc(String(r.zeros)),
          explain: esc(r.zeros === 2 ? t("The curve cuts the x-axis at two places, so there are 2 zeros.") : r.zeros === 1 ? t("The curve only touches the x-axis at one place, so there is 1 zero.") : t("The curve never meets the x-axis, so there are no real zeros.")),
          reveal: (svg) => {
            if (r.zeros) for (const x of r.zeros === 1 ? [r.h] : [r.h - Math.sqrt(-r.k / r.a), r.h + Math.sqrt(-r.k / r.a)]) svg.insertAdjacentHTML("beforeend", `<circle class="gr-pt ok" cx="${gx(x)}" cy="${gy(0)}" r="6"/>`);
          },
        }));
      }
      default:
        return drawMatch(r, board, submit);
    }
  }

  function lineExplain(r) {
    const slope = r.m === 0.5 || r.m === -0.5 ? t("Going 2 across, it goes {n} {dir}, so the slope m = {m}.", { n: 1, dir: r.m > 0 ? t("up") : t("down"), m: MK.num(r.m) }) : t("Going 1 across, it goes {n} {dir}, so the slope m = {m}.", { n: Math.abs(r.m), dir: r.m > 0 ? t("up") : t("down"), m: MK.num(r.m) });
    return `${t("The line crosses the y-axis at {c}, so c = {c}.", { c: MK.num(r.c) })} ${slope} ${t("So the equation is {eq}.", { eq: eqText(r.m, r.c) })}`;
  }

  // a picture with a list of choices below (MCQ). `info(right)` gives right/explain/reveal(svg).
  function drawChoice(r, board, submit, svg, options, info) {
    board.innerHTML = `<div class="card mk-card">${svg}<div class="mk-choices" role="group" aria-label="${t("Choices")}">${options.map((o, i) => `<button class="option" data-i="${i}" ${i === 0 ? "data-focus" : ""}><span class="letter">${"ABCD"[i]}</span><span>${esc(o)}</span></button>`).join("")}</div></div>`;
    const pick = (btn) => {
      const i = Number(btn.dataset.i);
      const ok = i === r.answer;
      const inf = info();
      submit({
        ok,
        yours: esc(options[i]),
        right: inf.right,
        explain: inf.explain,
        showRight: true,
        reveal() {
          board.querySelectorAll(".option").forEach((b) => {
            b.classList.add("locked");
            if (Number(b.dataset.i) === r.answer) b.classList.add("correct");
            else if (b === btn) b.classList.add("wrong");
          });
          inf.reveal(board.querySelector("svg"));
        },
      });
    };
    board.addEventListener("click", (e) => {
      const b = e.target.closest(".option");
      if (b) pick(b);
    });
    board.addEventListener("keydown", (e) => {
      const b = !e.ctrlKey && !e.metaKey && !e.altKey && board.querySelectorAll(".option")["1234".indexOf(e.key)];
      if (b) pick(b);
    });
  }

  // ---------- plot a line / tap a point ----------
  function drawPlot(r, board, submit, many) {
    const pts = []; // [x, y]
    let cur = [0, 0];
    board.innerHTML = `<div class="card mk-card">${gridSvg(`<g data-layer="pts"></g><g data-layer="reveal"></g><circle class="gr-cursor" data-cur r="10" fill="none"/>`, { label: many ? t("Grid. Arrow keys move the cursor, Enter plots a point.") : t("Grid. Arrow keys move the cursor, Enter marks the point."), focus: true })}
      <p class="mk-read" data-read aria-live="polite"></p>
      <div class="mk-btnrow"><button class="btn" data-act="undo">${t("Undo")}</button><button class="btn primary" data-act="check">${t("Check")}</button></div></div>`;
    const svg = board.querySelector("svg");
    const layer = board.querySelector("[data-layer=pts]");
    const read = board.querySelector("[data-read]");
    const curEl = board.querySelector("[data-cur]");
    const same = (a, b) => a[0] === b[0] && a[1] === b[1];
    function paint() {
      layer.innerHTML = pts.map(([x, y]) => dot(x, y, "")).join("");
      curEl.setAttribute("cx", gx(cur[0]));
      curEl.setAttribute("cy", gy(cur[1]));
      read.textContent = pts.length ? `${many ? t("Points") : t("Your point")}: ${pts.map(([x, y]) => fmtP(x, y)).join("  ")}` : t("Cursor at {p}", { p: fmtP(...cur) });
    }
    paint();
    const place = (p) => {
      cur = p;
      const i = pts.findIndex((q) => same(q, p));
      if (i >= 0) pts.splice(i, 1);
      else if (many) pts.length < 6 && pts.push(p);
      else pts[0] = p, (pts.length = 1);
      paint();
    };
    svg.addEventListener("click", (e) => {
      const rc = svg.getBoundingClientRect();
      const x = ((e.clientX - rc.left) * S) / rc.width;
      const y = ((e.clientY - rc.top) * S) / rc.height;
      const px = Math.round((x - O) / CELL);
      const py = Math.round((O - y) / CELL);
      if (Math.abs(px) > R5 || Math.abs(py) > R5 || Math.hypot(x - (O + px * CELL), y - (O - py * CELL)) > CELL * 0.62) return;
      svg.focus({ preventScroll: true });
      place([px, py]);
    });
    svg.addEventListener("keydown", (e) => {
      const d = { ArrowLeft: [-1, 0], ArrowRight: [1, 0], ArrowUp: [0, 1], ArrowDown: [0, -1] }[e.key];
      if (d) {
        e.preventDefault();
        cur = [Math.max(-R5, Math.min(R5, cur[0] + d[0])), Math.max(-R5, Math.min(R5, cur[1] + d[1]))];
        paint();
      } else if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        place(cur);
      }
    });
    board.addEventListener("click", (e) => {
      const a = e.target.closest("[data-act]");
      if (!a) return;
      if (a.dataset.act === "undo") {
        pts.pop();
        paint();
      } else check();
    });

    function check() {
      if (many ? pts.length < 2 : pts.length < 1) {
        read.textContent = many ? t("Plot at least two points first.") : t("Tap a point first.");
        return;
      }
      if (!many) {
        const ok = same(pts[0], [r.x, r.y]);
        return submit({
          ok,
          yours: esc(fmtP(...pts[0])),
          right: esc(fmtP(r.x, r.y)),
          showRight: true,
          explain: esc(t("Start at the origin. Go {a} {dx} along the x-axis, then {b} {dy}: {p}.", { a: Math.abs(r.x), dx: r.x > 0 ? t("right") : t("left"), b: Math.abs(r.y), dy: r.y > 0 ? t("up") : t("down"), p: fmtP(r.x, r.y) })),
          reveal: () => svg.querySelector("[data-layer=reveal]").insertAdjacentHTML("beforeend", dot(r.x, r.y, "ok") + dropLines(r.x, r.y)),
        });
      }
      const onLine = (p) => p[1] === r.m * p[0] + r.c;
      const good = pts.filter(onLine);
      const ok = good.length === pts.length;
      const lp = latticePts(r.m, r.c);
      const ex = [lp[0], lp[lp.length - 1]];
      submit({
        ok,
        credit: ok ? 1 : good.length ? 0.3 : 0,
        pts: ok ? 100 : good.length ? 25 : 0,
        yours: esc(pts.map(([x, y]) => fmtP(x, y)).join(" ")),
        right: esc(eqText(r.m, r.c)),
        showRight: true,
        explain: esc(t("Make a table of values. When x = {x1}, y = {y1}. When x = {x2}, y = {y2}. Plot these points and join them with a straight line.", { x1: MK.num(ex[0][0]), y1: MK.num(ex[0][1]), x2: MK.num(ex[1][0]), y2: MK.num(ex[1][1]) })),
        reveal() {
          const lay = svg.querySelector("[data-layer=reveal]");
          lay.insertAdjacentHTML("beforeend", lineSeg(r.m, r.c));
          layer.innerHTML = pts.map(([x, y]) => dot(x, y, onLine([x, y]) ? "ok" : "bad")).join("");
        },
      });
    }
  }

  // ---------- match a function to its graph ----------
  function drawMatch(r, board, submit) {
    const set = F[r.fam];
    const [x0, x1, y0, y1] = set.win;
    const w = 200;
    const h = 150;
    const mx = (x) => MK.p1(((x - x0) / (x1 - x0)) * w);
    const my = (y) => MK.p1(h - ((y - y0) / (y1 - y0)) * h);
    const card = (name, i) => {
      const def = set.list.find((d) => d.name === name);
      let d = "";
      for (const l of polylines(def, set.win)) d += "M" + l.map(([x, y]) => `${mx(x)},${my(Math.max(y0 - 1, Math.min(y1 + 1, y)))}`).join(" L");
      return `<button class="gr-opt" data-i="${i}" ${i === 0 ? "data-focus" : ""} aria-label="${t("Graph {l}", { l: "ABC"[i] })}">
        <span class="letter">${"ABC"[i]}</span>
        <svg viewBox="0 0 ${w} ${h}" aria-hidden="true"><rect class="gr-win" x="0" y="0" width="${w}" height="${h}"/>
          <line class="gr-grid zero" x1="0" y1="${my(0)}" x2="${w}" y2="${my(0)}"/><line class="gr-grid zero" x1="${mx(0)}" y1="0" x2="${mx(0)}" y2="${h}"/>
          <clipPath id="gc${i}"><rect x="0" y="0" width="${w}" height="${h}"/></clipPath><path class="gr-curve" clip-path="url(#gc${i})" d="${d}"/></svg></button>`;
    };
    board.innerHTML = `<div class="card mk-card"><div class="gr-opts" role="group" aria-label="${t("Graphs")}">${r.names.map(card).join("")}</div></div>`;
    board.addEventListener("click", (e) => {
      const b = e.target.closest(".gr-opt");
      if (!b) return;
      const i = Number(b.dataset.i);
      const ok = i === r.answer;
      const L = "ABC"[r.answer];
      submit({
        ok,
        yours: esc(t("Graph {l}", { l: "ABC"[i] })),
        right: esc(`${t("Graph {l}", { l: L })}: ${r.names[r.answer]}`),
        showRight: true,
        explain: esc(r.hint ? t("Check a point: when x = {x}, {name} gives y = {y}. Only graph {l} passes through ({x}, {y}).", { x: r.hint.xl, name: r.names[r.answer], y: r.hint.yl, l: L }) : t("Graph {l} has the shape of {name}.", { l: L, name: r.names[r.answer] })),
        reveal() {
          board.querySelectorAll(".gr-opt").forEach((o) => {
            if (Number(o.dataset.i) === r.answer) o.classList.add("correct");
            else if (o === b) o.classList.add("wrong");
          });
        },
      });
    });
    board.addEventListener("keydown", (e) => {
      const b = !e.ctrlKey && !e.metaKey && !e.altKey && board.querySelectorAll(".gr-opt")["123".indexOf(e.key)];
      if (b) b.click();
    });
  }
})();
