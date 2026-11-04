// Graph explorer (Maths Studio, Classes 9 to 12): sliders for  y = mx + c,  y = ax² + bx + c,  y = a sin(bx)  and  y = a/x.
// Trace a point along the graph, read the intercepts, roots and turning point, and compare two graphs to see where they meet.
//
//   line       y = mx + c            root x = -c / m               y-intercept c                  gradient m
//   quadratic  y = ax² + bx + c      roots x = (-b ± sqrt(b² - 4ac)) / 2a   (none when b² - 4ac < 0)      turning point x = -b / 2a
//   sine       y = a sin(bx)         roots x = k pi / b            amplitude |a|                  period 2 pi / b
//   reciprocal y = a / x             no roots, no y-intercept      asymptotes x = 0 and y = 0     x · y = a
//   meeting points of two graphs: sign changes of f1 - f2, refined by bisection
//
// Assumptions: the window shows x and y from -10 to 10; angles are in radians; values are rounded to 2 decimals for display only.

(() => {
  const abs = Math.abs;
  const PARAMS = {
    line: [{ k: "m", label: "m (gradient)", min: -5, max: 5, step: 0.5 }, { k: "c", label: "c (y-intercept)", min: -10, max: 10, step: 0.5 }],
    quad: [{ k: "a", label: "a", min: -3, max: 3, step: 0.5 }, { k: "b", label: "b", min: -10, max: 10, step: 1 }, { k: "c", label: "c", min: -10, max: 10, step: 1 }],
    sine: [{ k: "a", label: "a (amplitude)", min: -5, max: 5, step: 0.5 }, { k: "b", label: "b", min: 0.5, max: 4, step: 0.5 }],
    recip: [{ k: "a", label: "a", min: -10, max: 10, step: 0.5 }],
  };
  const DEFAULT = { line: { m: 1, c: 0 }, quad: { a: 1, b: 0, c: 0 }, sine: { a: 1, b: 1 }, recip: { a: 1 } };
  const TYPE_NAME = { line: "Straight line  y = mx + c", quad: "Quadratic  y = ax² + bx + c", sine: "Sine wave  y = a sin(bx)", recip: "Reciprocal  y = a/x" };
  const rnd = (x, d = 2) => Math.round(x * 10 ** d) / 10 ** d;
  const n2 = (x) => {
    const r = rnd(x, 2);
    return (r < 0 ? "−" : "") + String(abs(r));
  };
  const coef = (c, s, first) => {
    if (c === 0) return "";
    const a = abs(c);
    const body = a === 1 && s ? s : n2(a) + s;
    return first ? (c < 0 ? "−" : "") + body : ` ${c < 0 ? "−" : "+"} ${body}`;
  };
  // y = ... for display
  function eqText(g) {
    const p = g.p;
    if (g.type === "line") return "y = " + ((coef(p.m, "x", true) + coef(p.c, "", !p.m)) || "0");
    if (g.type === "quad") {
      const parts = [[p.a, "x²"], [p.b, "x"], [p.c, ""]].filter(([c]) => c !== 0);
      return "y = " + (parts.length ? parts.map(([c, s], i) => coef(c, s, i === 0)).join("") : "0");
    }
    if (g.type === "sine") return p.a === 0 ? "y = 0" : `y = ${p.a === 1 ? "" : p.a === -1 ? "−" : n2(p.a)}sin(${p.b === 1 ? "" : n2(p.b)}x)`;
    return p.a === 0 ? "y = 0" : `y = ${n2(p.a)}/x`;
  }
  function f(g, x) {
    const p = g.p;
    if (g.type === "line") return p.m * x + p.c;
    if (g.type === "quad") return (p.a * x + p.b) * x + p.c;
    if (g.type === "sine") return p.a * Math.sin(p.b * x);
    return x === 0 ? NaN : p.a / x;
  }
  const yint = (g) => (g.type === "recip" ? null : f(g, 0));
  // x-intercepts inside the window; { all: true } when the graph is the x-axis itself
  function roots(g, lim = 10) {
    const p = g.p;
    if (g.type === "line") return p.m === 0 ? (p.c === 0 ? { all: true, xs: [] } : { xs: [] }) : { xs: [-p.c / p.m].filter((x) => abs(x) <= lim) };
    if (g.type === "quad") {
      if (p.a === 0) return roots({ type: "line", p: { m: p.b, c: p.c } }, lim);
      const D = p.b * p.b - 4 * p.a * p.c;
      if (D < 0) return { xs: [], D };
      if (D === 0) return { xs: [-p.b / (2 * p.a)].filter((x) => abs(x) <= lim), D };
      const r = Math.sqrt(D);
      return { xs: [(-p.b - r) / (2 * p.a), (-p.b + r) / (2 * p.a)].sort((a, b) => a - b).filter((x) => abs(x) <= lim), D };
    }
    if (g.type === "sine") {
      if (p.a === 0) return { all: true, xs: [] };
      const xs = [];
      for (let k = -Math.floor((lim * p.b) / Math.PI); k <= Math.floor((lim * p.b) / Math.PI); k++) xs.push((k * Math.PI) / p.b);
      return { xs };
    }
    return p.a === 0 ? { all: true, xs: [] } : { xs: [] };
  }
  const vertex = (g) => (g.type === "quad" && g.p.a !== 0 ? [-g.p.b / (2 * g.p.a), f(g, -g.p.b / (2 * g.p.a))] : null);
  const period = (g) => (g.type === "sine" ? (2 * Math.PI) / g.p.b : null);
  // where two graphs meet inside the window: [{ x, y }]; { same: true } when they are the same graph
  function meets(g1, g2, lim = 10) {
    const h = (x) => f(g1, x) - f(g2, x);
    const STEP = 0.01;
    let same = true;
    for (let x = -lim; x <= lim + 1e-9; x += 0.37) {
      const v = h(x);
      if (isFinite(v) && abs(v) > 1e-9) same = false;
    }
    if (same) return { same: true, pts: [] };
    const out = [];
    const push = (x) => {
      const y = f(g1, x);
      if (isFinite(y) && abs(y) < 1e6 && !out.some((q) => abs(q.x - x) < 1e-6)) out.push({ x, y });
    };
    let px = -lim;
    let pv = h(px);
    for (let i = 1; i <= Math.round((2 * lim) / STEP); i++) {
      const x = -lim + i * STEP;
      const v = h(x);
      if (isFinite(pv) && isFinite(v)) {
        if (v === 0) push(x);
        else if (pv * v < 0 && abs(pv - v) < 50) {
          let lo = px, hi = x, flo = pv;
          for (let k = 0; k < 60; k++) {
            const mid = (lo + hi) / 2;
            const fm = h(mid);
            if (flo * fm <= 0) hi = mid;
            else {
              lo = mid;
              flo = fm;
            }
          }
          push((lo + hi) / 2);
        }
      }
      px = x;
      pv = v;
    }
    return { pts: out.sort((a, b) => a.x - b.x) };
  }

  const ASSUME = "The window shows x and y from −10 to 10. Angles are in radians. Numbers are rounded to 2 decimal places only for display. The graphs are drawn from the formula at many points, so very steep parts may look slightly rough.";
  const C_M = [{ key: "m", label: "m", var: true }, { key: "c", label: "c", var: true }, { key: "y2", label: "y when x = 2" }];
  const C_C = [{ key: "m", label: "m", var: true }, { key: "c", label: "c", var: true }, { key: "x0", label: "x-intercept" }];
  const C_Q = [{ key: "a", label: "a", var: true }, { key: "b", label: "b", var: true }, { key: "c", label: "c", var: true }, { key: "nroots", label: "Number of roots", d: 0 }, { key: "roots", label: "Roots" }];
  const C_S = [{ key: "a", label: "a", var: true }, { key: "b", label: "b", var: true }, { key: "amp", label: "Amplitude" }, { key: "period", label: "Period", d: 2 }];
  const C_R = [{ key: "x", label: "x", var: true }, { key: "y", label: "y" }, { key: "xy", label: "x × y" }];
  const C_X = [{ key: "eqA", label: "Graph A" }, { key: "eqB", label: "Graph B", var: true }, { key: "meet", label: "Where they meet" }];
  const INVS = [
    {
      id: "m",
      minCls: 9,
      A: { type: "line", p: { m: 1, c: 1 } },
      title: "What does m do in y = mx + c?",
      question: "In y = mx + 1, what happens to the line when m gets bigger?",
      predict: { opts: ["The line gets steeper", "The line gets flatter", "The line moves up and stays just as steep"], ans: 0 },
      vary: "m",
      held: ["c (the y-intercept)"],
      go: "Graph A starts as y = x + 1. Record a run. Then change only m with its slider, for example to 3, and record again. Keep c the same.",
      columns: C_M,
      explain: {
        q: "What do your runs show about m?",
        opts: ["m is the gradient: y changes by m for each 1 along x, so a bigger m is a steeper line, and the line still crosses the y-axis at c", "m moves the line up and down", "m is the place where the line crosses the x-axis"],
        ans: 0,
        why: "For every 1 you move along, y changes by m, so a bigger m means a steeper line. c did not change, so every line still crosses the y-axis at the same point (0, 1).",
      },
      graph: { x: "m", y: "y2" },
    },
    {
      id: "c",
      minCls: 9,
      A: { type: "line", p: { m: 2, c: 0 } },
      title: "What does c do in y = mx + c?",
      question: "In y = 2x + c, what happens to the line when c gets bigger?",
      predict: { opts: ["It moves up and stays parallel", "It gets steeper", "It turns about the origin"], ans: 0 },
      vary: "c",
      held: ["m (the gradient)"],
      go: "Graph A starts as y = 2x. Record a run. Then change only c with its slider, for example to 4, and record again. Keep m the same.",
      columns: C_C,
      explain: {
        q: "What do your runs show about c?",
        opts: ["c is where the line crosses the y-axis; changing c slides the line up or down without changing its steepness", "c is the gradient of the line", "c makes the line steeper"],
        ans: 0,
        why: "At x = 0 the value of y is c, so c is the y-intercept. Changing c moves the whole line up or down. m is the same, so the lines are parallel.",
      },
      graph: { x: "c", y: "x0" },
    },
    {
      id: "meet",
      minCls: 9,
      A: { type: "line", p: { m: 1, c: 1 } },
      B: { type: "line", p: { m: -1, c: 3 } },
      compare: true,
      title: "Where do two lines meet?",
      question: "Where do y = x + 1 and y = −x + 3 meet?",
      predict: { opts: ["At (2, 1)", "At (1, 2)", "They never meet"], ans: 1 },
      vary: "eqB",
      held: ["Graph A (y = x + 1)"],
      go: "Both lines are shown. Record a run. Then change only graph B, for example make its m equal to 1 so it is parallel to A, and record again.",
      columns: C_X,
      explain: {
        q: "What do your runs show about where two graphs meet?",
        opts: ["Where two graphs meet, both equations give the same x and the same y. Lines with the same gradient are parallel and never meet", "Two lines always meet at exactly one point", "Where graphs meet is always on the y-axis"],
        ans: 0,
        why: "A meeting point is on both graphs, so it satisfies both equations: for y = x + 1 and y = −x + 3, x = 1 and y = 2. Parallel lines have the same gradient and stay the same distance apart, so they never meet.",
      },
    },
    {
      id: "roots",
      minCls: 10,
      A: { type: "quad", p: { a: 1, b: -5, c: 6 } },
      title: "Roots of y = x² − 5x + c",
      question: "In y = x² − 5x + c, what happens to the roots when c gets bigger than 6?",
      predict: { opts: ["There are still two roots, further apart", "The roots disappear because the curve no longer touches the x-axis", "The roots stay at 2 and 3"], ans: 1 },
      vary: "c",
      held: ["a and b"],
      go: "Graph A starts as y = x² − 5x + 6, with roots 2 and 3. Record a run. Then change only c with its slider, for example to 4 or to 8, and record again.",
      columns: C_Q,
      explain: {
        q: "What do your runs show about roots?",
        opts: ["Roots are where the curve crosses the x-axis. Changing c moves the whole curve up or down, so there can be two roots, one root or none", "Changing c changes the shape of the curve", "A quadratic always has two roots"],
        ans: 0,
        why: "A root is a value of x where y = 0, so it is where the curve meets the x-axis. Changing c slides the curve up or down: low enough it crosses the axis twice, at the lowest point it touches once, and higher up it misses the axis, so there are no roots.",
      },
      graph: { x: "c", y: "nroots" },
    },
    {
      id: "period",
      minCls: 11,
      A: { type: "sine", p: { a: 2, b: 1 } },
      title: "Period of y = a sin(bx)",
      question: "In y = a sin(bx), what happens to the wave when b is doubled?",
      predict: { opts: ["It becomes twice as tall", "It repeats twice as often, so each wave is half as long", "It moves to the right"], ans: 1 },
      vary: "b",
      held: ["a (the amplitude)"],
      go: "Graph A starts as y = 2 sin(x). Record a run. Then change only b with its slider, for example to 2, and record again. Keep a the same.",
      columns: C_S,
      explain: {
        q: "What do your runs show about b?",
        opts: ["The period is 2π divided by b, so a bigger b makes shorter waves; the height depends on a, not b", "The period is 2π times b", "The height of the wave is b"],
        ans: 0,
        why: "One full wave takes 2π/b along the x-axis. Doubling b halves the period, so the wave repeats twice as often. The height (amplitude) is |a|, which did not change.",
      },
      graph: { x: "b", y: "period" },
    },
    {
      id: "recip",
      minCls: 11,
      A: { type: "recip", p: { a: 6 } },
      trace: 1,
      title: "How y changes in y = a/x",
      question: "In y = 6/x, what happens to y when x doubles?",
      predict: { opts: ["y doubles", "y halves", "y stays the same"], ans: 1 },
      vary: "x",
      held: ["a (the graph, y = 6/x)"],
      go: "Graph A is y = 6/x. Move the tracing point to x = 1 and record a run. Then move it to other values of x, such as 2, 3 or 6, and record each time.",
      columns: C_R,
      explain: {
        q: "What do your runs show?",
        opts: ["x × y is always the same number, a, so when x doubles y halves", "y gets bigger as x gets bigger", "x + y is always the same number"],
        ans: 0,
        why: "y = a/x means x × y = a. Here x × y = 6 every time, so if x is doubled y must be halved. The graph gets close to the axes but never touches them.",
      },
      graph: { x: "x", y: "y" },
    },
  ];
  const STR = [...Object.values(TYPE_NAME), ...Object.values(PARAMS).flat().map((p) => p.label), "m", "c", "a", "b"];

  Labs.calc.grapher = { f, eqText, yint, roots, vertex, period, meets, PARAMS, DEFAULT, INVS, ASSUME, STR, TYPE_NAME, n2, C_M, C_C, C_Q, C_S, C_R, C_X };

  const W0 = 20, SC = 16;
  const GX = (x) => W0 + (x + 10) * SC;
  const GY = (y) => 340 - (y + 10) * SC;
  let uid = 0;

  function mount(el, api) {
    const id = ++uid;
    const cls = api.cls || 12;
    const S = { A: { type: "line", p: { ...DEFAULT.line } }, B: { type: "line", p: { m: -1, c: 3 } }, cmp: false, x: 1 };
    let flow;
    const invs = INVS.filter((v) => cls >= v.minCls);
    const clone = (g) => ({ type: g.type, p: { ...g.p } });

    const panel = (w) => `<div class="gr-panel" data-panel="${w}">
      <div class="vl-ctrl"><label for="gr-t${id}${w}">${w === "A" ? t("Graph A") : t("Graph B")}</label><select id="gr-t${id}${w}" data-type="${w}">${Object.entries(TYPE_NAME).map(([k, v]) => `<option value="${k}">${esc(t(v))}</option>`).join("")}</select></div>
      <div class="sim-ctrls" data-params="${w}"></div></div>`;

    const stage = () => `<div class="gr">
      <div class="vl-boardwrap"><svg class="fw-svg gr-svg" data-plot viewBox="0 0 360 360" role="img"></svg></div>
      <div class="sim-ctrl gr-tracer"><label for="gr-x${id}">${t("Tracing point: x")}</label><output data-xv></output><input id="gr-x${id}" type="range" min="-10" max="10" step="0.1" value="1" data-x></div>
      ${panel("A")}
      <label class="gr-cmp"><input type="checkbox" data-cmp> ${t("Compare with a second graph")}</label>
      <div data-bwrap hidden>${panel("B")}</div>
      <p class="vl-warn" data-msg role="status"></p>
      <div class="sim-btns"><button type="button" class="btn primary" data-vl-run data-record>${icon("check")} ${t("Record this run")}</button></div></div>`;

    const say = (m, bad) => {
      const e = el.querySelector("[data-msg]");
      e.textContent = m || "";
      e.classList.toggle("is-bad", !!bad);
    };

    function params(w) {
      const g = S[w];
      const host = el.querySelector(`[data-params="${w}"]`);
      host.innerHTML = PARAMS[g.type]
        .map((q) => `<div class="sim-ctrl"><label for="gr-${id}${w}${q.k}">${t(q.label)}</label><output data-pv="${w}${q.k}">${n2(g.p[q.k])}</output><input id="gr-${id}${w}${q.k}" type="range" min="${q.min}" max="${q.max}" step="${q.step}" value="${g.p[q.k]}" data-p="${w}" data-k="${q.k}"></div>`)
        .join("");
      el.querySelector(`[data-type="${w}"]`).value = g.type;
    }

    function curve(g) {
      let d = "";
      let prev = null;
      for (let x = -10; x <= 10.0001; x += 0.04) {
        const y = f(g, x);
        const ok = isFinite(y) && abs(y) < 40;
        if (!ok) {
          prev = null;
          continue;
        }
        d += `${prev === null || abs(y - prev) > 8 ? "M" : "L"}${GX(x).toFixed(1)} ${GY(y).toFixed(1)}`;
        prev = y;
      }
      return d;
    }
    const label = (txt, x, y, anchor = "start") => `<text class="gr-lab" x="${x}" y="${y}" text-anchor="${anchor}">${esc(txt)}</text>`;

    function features(w) {
      const g = S[w];
      const r = roots(g);
      const yi = yint(g);
      const out = {};
      out.eq = eqText(g);
      out.yint = yi == null ? t("none: the graph never reaches x = 0") : `(0, ${n2(yi)})`;
      if (r.all) out.roots = t("every x (the graph is the x-axis)");
      else if (g.type === "recip") out.roots = t("none: y is never 0");
      else if (!r.xs.length) out.roots = g.type === "line" ? t("none in the window") : g.type === "quad" ? t("none: the curve does not touch the x-axis") : t("none");
      else if (g.type === "sine") {
        const pos = r.xs.filter((x) => x > 1e-9).slice(0, 3).map((x) => "±" + n2(x));
        out.roots = `x = 0, ${pos.join(", ")} …`;
      } else out.roots = r.xs.map((x) => `x = ${n2(x)}`).join(` ${t("and")} `);
      if (g.type === "line") out.detail = g.p.m === 0 ? t("Horizontal line: y never changes.") : t("Gradient m = {m}: y changes by {m} for each 1 along x.", { m: n2(g.p.m) });
      else if (g.type === "quad") {
        const v = vertex(g);
        out.detail = !v ? t("a = 0, so this is a straight line.") : t("Turning point ({x}, {y}), the {w} point.", { x: n2(v[0]), y: n2(v[1]), w: g.p.a > 0 ? t("lowest") : t("highest") });
      } else if (g.type === "sine") out.detail = g.p.a === 0 ? "—" : t("Amplitude {a}, period 2π/b = {p}.", { a: n2(abs(g.p.a)), p: n2(period(g)) });
      else out.detail = t("Asymptotes: x = 0 and y = 0. x × y = {a}.", { a: n2(g.p.a) });
      return out;
    }

    function draw() {
      let s = `<defs><clipPath id="grclip${id}"><rect x="${W0}" y="20" width="320" height="320"/></clipPath></defs><rect class="gr-bg" x="${W0}" y="20" width="320" height="320"/>`;
      for (let k = -10; k <= 10; k += 2) {
        s += `<line class="${k === 0 ? "s-ax" : "s-grid"}" x1="${GX(k)}" y1="20" x2="${GX(k)}" y2="340"/><line class="${k === 0 ? "s-ax" : "s-grid"}" x1="${W0}" y1="${GY(k)}" x2="340" y2="${GY(k)}"/>`;
        if (k) s += `<text class="s-m gr-tick" x="${GX(k)}" y="${GY(0) + 11}" text-anchor="middle">${k < 0 ? "−" + -k : k}</text><text class="s-m gr-tick" x="${GX(0) - 3}" y="${GY(k) + 3}" text-anchor="end">${k < 0 ? "−" + -k : k}</text>`;
      }
      s += `<g clip-path="url(#grclip${id})"><path class="gr-curve" d="${curve(S.A)}" fill="none"/>${S.cmp ? `<path class="gr-curve gr-b" d="${curve(S.B)}" fill="none"/>` : ""}`;
      s += `</g>`;
      // markers on graph A: y-intercept, roots, turning point
      const yi = yint(S.A);
      if (yi != null && abs(yi) <= 10) s += `<circle class="gr-mk" cx="${GX(0)}" cy="${GY(yi)}" r="4.5"/>${label(`(0, ${n2(yi)})`, GX(0) + 8, GY(yi) - 6)}`;
      const r = roots(S.A);
      r.xs.slice(0, 9).forEach((x) => (s += `<circle class="gr-mk" cx="${GX(x)}" cy="${GY(0)}" r="4.5"/>${S.A.type === "sine" ? "" : label(n2(x), GX(x), GY(0) - 8, "middle")}`));
      const v = vertex(S.A);
      if (v && abs(v[1]) <= 10 && abs(v[0]) <= 10) s += `<rect class="gr-mk gr-sq" x="${GX(v[0]) - 4}" y="${GY(v[1]) - 4}" width="8" height="8"/>`;
      // trace
      const ty = f(S.A, S.x);
      if (isFinite(ty) && abs(ty) <= 10) s += `<circle class="gr-trace" cx="${GX(S.x)}" cy="${GY(ty)}" r="6"/>${label(`(${n2(S.x)}, ${n2(ty)})`, Math.min(GX(S.x) + 9, 250), GY(ty) - 10)}`;
      if (S.cmp) {
        const m = meets(S.A, S.B);
        m.pts.filter((q) => abs(q.y) <= 10).forEach((q) => (s += `<circle class="gr-meet" cx="${GX(q.x)}" cy="${GY(q.y)}" r="8"/>`));
      }
      el.querySelector("[data-plot]").innerHTML = s;
    }

    function rows() {
      const a = features("A");
      const ty = f(S.A, S.x);
      const trace = isFinite(ty) ? `(${n2(S.x)}, ${n2(ty)})` : t("not defined at x = 0");
      const out = [
        [S.cmp ? t("Graph A") : t("Equation"), a.eq],
        [t("y-intercept"), a.yint],
        [t("x-intercepts (roots)"), a.roots],
        [t("About this graph"), a.detail],
        [t("Tracing point"), trace],
      ];
      if (S.cmp) {
        const b = features("B");
        const m = meets(S.A, S.B);
        out.push([t("Graph B"), b.eq], [t("Roots of graph B"), b.roots]);
        out.push([t("Where they meet"), m.same ? t("They are the same graph.") : m.pts.length ? m.pts.map((q) => `(${n2(q.x)}, ${n2(q.y)})`).join(", ") : t("They do not meet in the window.")]);
      }
      return out;
    }
    const meetText = () => {
      const m = meets(S.A, S.B);
      return m.same ? t("same graph") : m.pts.length ? m.pts.map((q) => `(${n2(q.x)}, ${n2(q.y)})`).join(", ") : t("never");
    };

    function paint() {
      draw();
      el.querySelector("[data-xv]").textContent = n2(S.x);
      el.querySelector("[data-bwrap]").hidden = !S.cmp;
      el.querySelector("[data-cmp]").checked = S.cmp;
      const r = rows();
      el.querySelector("[data-plot]").setAttribute("aria-label", `${t("Graph of")} ${eqText(S.A)}${S.cmp ? ` ${t("and")} ${eqText(S.B)}` : ""}`);
      flow.live(r, r.map(([k, v]) => `${k}: ${v}`).join(". "));
    }

    function record(F) {
      const id_ = F.inv.id;
      const A = S.A;
      const p = A.p;
      say("");
      if (id_ === "m") return F.addRun({ m: p.m, c: p.c, y2: f(A, 2) });
      if (id_ === "c") {
        const r = roots(A);
        return F.addRun({ m: p.m, c: p.c, x0: r.xs.length ? r.xs[0] : null });
      }
      if (id_ === "roots") {
        const r = roots(A);
        return F.addRun({ a: p.a, b: p.b, c: p.c, nroots: r.xs.length, roots: r.xs.length ? r.xs.map(n2).join(", ") : "—" });
      }
      if (id_ === "period") return F.addRun({ a: p.a, b: p.b, amp: n2(abs(p.a)), period: period(A) });
      if (id_ === "recip") {
        if (S.x === 0) return say(t("y = 6/x is not defined at x = 0. Move the tracing point."), true);
        const y = f(A, S.x);
        return F.addRun({ x: S.x, y, xy: n2(S.x * y) });
      }
      return F.addRun({ eqA: eqText(S.A), eqB: eqText(S.B), meet: meetText() });
    }

    flow = Labs.flow(el, api, {
      assumptions: ASSUME,
      columns: C_M,
      investigations: invs,
      extra: () => ({ A: clone(S.A), B: S.cmp ? clone(S.B) : null, x: S.x }),
      mountStage(slot, F) {
        flow = F;
        slot.innerHTML = stage();
        params("A");
        params("B");
        slot.addEventListener("input", (e) => {
          const r = e.target.closest("[data-p]");
          if (r) {
            S[r.dataset.p].p[r.dataset.k] = Number(r.value);
            el.querySelector(`[data-pv="${r.dataset.p}${r.dataset.k}"]`).textContent = n2(Number(r.value));
            say("");
            return paint();
          }
          if (e.target.matches("[data-x]")) {
            S.x = Math.round(Number(e.target.value) * 10) / 10;
            paint();
          }
        });
        slot.addEventListener("change", (e) => {
          const ty = e.target.closest("[data-type]");
          if (ty) {
            const w = ty.dataset.type;
            S[w] = { type: ty.value, p: { ...DEFAULT[ty.value] } };
            params(w);
            return paint();
          }
          if (e.target.matches("[data-cmp]")) {
            S.cmp = e.target.checked;
            paint();
          }
        });
        slot.addEventListener("click", (e) => {
          if (e.target.closest("[data-record]")) record(F);
        });
      },
      onInvestigation(inv) {
        S.A = clone(inv.A);
        S.B = clone(inv.B || { type: "line", p: { m: -1, c: 3 } });
        S.cmp = !!inv.compare;
        S.x = inv.trace != null ? inv.trace : S.x;
        el.querySelector("[data-x]").value = String(S.x);
        say("");
        params("A");
        params("B");
        paint();
      },
    });
  }

  Labs.register("grapher", {
    title: "Graph explorer",
    area: "maths",
    icon: "graph",
    objective: "Move sliders to change a straight line, a quadratic, a sine wave or y = a/x. Trace points, find the intercepts and roots, and compare two graphs to see where they meet and why.",
    chapters: [
      { cls: 9, subject: "maths", chapter: "two-variables-one-line" },
      { cls: 9, subject: "maths", chapter: "introduction-to-linear-polynomials" },
      { cls: 9, subject: "mathspb", chapter: "linear-equations-in-two-variables" },
      { cls: 9, subject: "mathspb", chapter: "coordinate-geometry" },
      { cls: 10, subject: "maths", chapter: "pair-of-linear-equations-in-two-variables" },
      { cls: 10, subject: "maths", chapter: "quadratic-equations" },
      { cls: 10, subject: "maths", chapter: "polynomials" },
      { cls: 11, subject: "maths", chapter: "relations-and-functions" },
      { cls: 11, subject: "maths", chapter: "trigonometric-functions" },
      { cls: 11, subject: "maths", chapter: "straight-lines" },
      { cls: 11, subject: "maths", chapter: "complex-numbers-and-quadratic-equations" },
      { cls: 12, subject: "maths", chapter: "relations-and-functions" },
      { cls: 12, subject: "maths", chapter: "application-of-derivatives" },
    ],
    mount,
  });
})();
