// Algebra tiles (Maths Studio, Classes 6 to 10): x² tiles, x tiles and unit tiles, positive (green) and negative (red, hatched, with a minus).
//   Build     put tiles on the board; a positive and a negative tile of the same kind make a zero pair and can be removed
//   Expand    (x + a)(x + b) as an area model: width x + a, height x + b  ->  x² + (a + b)x + ab
//   Factorise x² + px + q as a rectangle: needs two whole numbers a, b with a + b = p and a x b = q
//   Solve     an equation as two sides of tiles; do the same to both sides until x stands alone
//
// Assumptions: whole-number coefficients only. Negative factors are drawn as red hatched regions of the area model (a region
// is negative when exactly one of its two sides is negative). Equations have x on at most both sides with whole-number tiles.

(() => {
  const SUP = "²";
  const sign = (n) => (n < 0 ? "−" : "+");
  const abs = Math.abs;
  // "x² + 5x + 6", "x² − 5x + 6", "2x² − x", "0"
  function polyText(c2, c1, c0) {
    const terms = [[c2, "x" + SUP], [c1, "x"], [c0, ""]].filter(([c]) => c !== 0);
    if (!terms.length) return "0";
    return terms.map(([c, s], i) => {
      const body = s && abs(c) === 1 ? s : String(abs(c)) + s;
      return i === 0 ? (c < 0 ? "−" : "") + body : ` ${sign(c)} ${body}`;
    }).join("");
  }
  const lin = (s) => polyText(0, s.x, s.u);
  const binom = (a) => (a === 0 ? "x" : `x ${sign(a)} ${abs(a)}`);
  const expand = (a, b) => [1, a + b, a * b];
  function factor(p, q) {
    for (let a = -60; a <= 60; a++) {
      const b = p - a;
      if (a <= b && a * b === q) return [a, b];
    }
    return null;
  }
  const factorText = (a, b) => (a === 0 && b === 0 ? "x · x" : a === 0 ? `x(${binom(b)})` : b === 0 ? `x(${binom(a)})` : `(${binom(a)})(${binom(b)})`);
  const gcd = (a, b) => (b ? gcd(b, a % b) : abs(a));
  // equation sides { x, u } (x tiles, unit tiles; negative = negative tiles)
  const eqText = (L, R) => `${lin(L)} = ${lin(R)}`;
  const solveEq = (L, R) => {
    const den = L.x - R.x;
    if (!den) return null;
    let num = R.u - L.u;
    let d = den;
    if (d < 0) {
      d = -d;
      num = -num;
    }
    const g = gcd(num, d) || 1;
    return [num / g, d / g];
  };
  const solved = (L, R) => {
    if (L.x === 1 && L.u === 0 && R.x === 0) return R.u;
    if (R.x === 1 && R.u === 0 && L.x === 0) return L.u;
    return null;
  };
  // do the same to both sides: kind "x" | "u", n positive (add) or negative (remove); or divide
  const both = (L, R, kind, n) => [{ ...L, [kind]: L[kind] + n }, { ...R, [kind]: R[kind] + n }];
  const divAll = (L, R) => gcd(gcd(L.x, L.u), gcd(R.x, R.u));
  const divideBoth = (L, R, k) => [{ x: L.x / k, u: L.u / k }, { x: R.x / k, u: R.u / k }];
  const evalEq = (s, x) => s.x * x + s.u;

  const ASSUME = "Whole-number tiles only. A positive and a negative tile of the same kind cancel (a zero pair). In the area model a region is negative when exactly one of its two sides is negative. Tile sizes are not to scale: x is drawn a few units long, but x can be any number.";
  const COLS = [
    { key: "setup", label: "Tiles or equation", var: true },
    { key: "result", label: "Result" },
  ];
  const EQ_GO = "Record a run for the starting equation. Then do the same to both sides (remove or add tiles, or divide) and record the new equation after each step, until x stands alone.";
  const EQ_EXPLAIN = {
    q: "What do your runs show?",
    opts: ["The same thing was done to both sides each time, so every equation has the same solution, and x ended up alone", "Each step changed the answer, so the last equation has a different solution from the first", "Only the left side changes when you remove tiles"],
    ans: 0,
    why: "Removing the same tiles from both sides keeps the two sides equal, like a balanced scale, so the solution does not change. When x stands alone, the other side tells you its value.",
  };
  const INVS = [
    {
      id: "zero",
      mode: "build",
      minCls: 6,
      title: "Zero pairs: a positive and a negative tile",
      question: "3 positive x tiles and 2 negative x tiles are on the board. What expression do they make together?",
      predict: { opts: ["5x", "x", "−x"], ans: 1 },
      vary: "setup",
      held: ["The tiles (the value they stand for)"],
      go: "The board starts with 3 x tiles and 2 negative x tiles. Record a run. Then press Remove zero pairs and record again.",
      columns: COLS,
      explain: {
        q: "Why does removing zero pairs not change the expression?",
        opts: ["A positive tile and a negative tile of the same kind add to zero, so taking them away leaves the same value", "Taking tiles away always makes the expression smaller", "Negative tiles are worth the same as positive tiles"],
        ans: 0,
        why: "x and −x add to 0, so each pair adds nothing. 3x − 2x is 2 zero pairs plus 1 left over, which is x.",
      },
    },
    {
      id: "eq1",
      mode: "solve",
      minCls: 6,
      eq: [{ x: 2, u: 1 }, { x: 1, u: 6 }],
      title: "Solve 2x + 1 = x + 6 by removing tiles",
      question: "What is x in 2x + 1 = x + 6?",
      predict: { opts: ["x = 5", "x = 7", "x = 3.5"], ans: 0 },
      vary: "setup",
      held: ["The solution (the same after every step)"],
      go: EQ_GO,
      columns: COLS,
      explain: EQ_EXPLAIN,
    },
    {
      id: "eq2",
      mode: "solve",
      minCls: 7,
      eq: [{ x: 3, u: 2 }, { x: 1, u: 10 }],
      title: "Solve 3x + 2 = x + 10 by removing tiles",
      question: "What is x in 3x + 2 = x + 10?",
      predict: { opts: ["x = 4", "x = 6", "x = 8"], ans: 0 },
      vary: "setup",
      held: ["The solution (the same after every step)"],
      go: EQ_GO,
      columns: COLS,
      explain: EQ_EXPLAIN,
    },
    {
      id: "expand",
      mode: "expand",
      minCls: 8,
      ab: [2, 3],
      title: "Expand (x + 2)(x + 3)",
      question: "What is (x + 2)(x + 3) when it is multiplied out?",
      predict: { opts: ["x² + 5", "x² + 5x + 6", "x² + 6x + 5"], ans: 1 },
      vary: "setup",
      held: ["The pattern (x + a)(x + b)"],
      go: "The area model starts with (x + 2)(x + 3). Record a run. Then change one number, for example make it (x + 2)(x + 4), and record again.",
      columns: COLS,
      explain: {
        q: "How do the x tiles and the unit tiles in the answer come from the two numbers?",
        opts: ["The number of x tiles is a + b (the numbers added) and the number of unit tiles is a × b (the numbers multiplied)", "The number of x tiles is a × b and the number of unit tiles is a + b", "The answer does not depend on a and b"],
        ans: 0,
        why: "The rectangle has one x² tile, a strips of x on one side and b strips of x on the other, so a + b tiles of x, and a × b small unit squares in the corner. For (x + 2)(x + 3): 2 + 3 = 5 x tiles and 2 × 3 = 6 unit tiles.",
      },
    },
    {
      id: "factor",
      mode: "factor",
      minCls: 8,
      pq: [5, 6],
      title: "Factorise x² + 5x + 6",
      question: "Which two factors multiply to make x² + 5x + 6?",
      predict: { opts: ["(x + 1)(x + 6)", "(x + 2)(x + 3)", "(x + 5)(x + 6)"], ans: 1 },
      vary: "setup",
      held: ["The pattern x² + px + q"],
      go: "The board starts with x² + 5x + 6. Record a run. Then change q (the unit tiles), for example to 4, and record again to see when it can be factorised.",
      columns: COLS,
      explain: {
        q: "How do you find the factors of x² + px + q?",
        opts: ["Find two whole numbers that add to p and multiply to q; they go in the brackets", "Find two numbers that multiply to p and add to q", "Any two numbers will do"],
        ans: 0,
        why: "A rectangle of x + a by x + b has a + b tiles of x and a × b unit tiles. So if the x tiles are p and the unit tiles are q, you need a + b = p and a × b = q. For 5 and 6: 2 + 3 = 5 and 2 × 3 = 6, so (x + 2)(x + 3). When no two whole numbers fit, the rectangle cannot be made.",
      },
    },
  ];
  const STR = ["Build", "Expand", "Factorise", "Solve", "x² tile", "x tile", "unit tile", "negative x² tile", "negative x tile", "negative unit tile"];

  Labs.calc.algebratiles = { polyText, binom, expand, factor, factorText, eqText, solveEq, solved, both, divAll, divideBoth, evalEq, lin, INVS, COLS, ASSUME, STR, EQ_EXPLAIN };

  let uid = 0;
  const KIND = {
    p2: { l: "x²", name: "x² tile", neg: false },
    n2: { l: "−x²", name: "negative x² tile", neg: true },
    p1: { l: "x", name: "x tile", neg: false },
    n1: { l: "−x", name: "negative x tile", neg: true },
    p0: { l: "1", name: "unit tile", neg: false },
    n0: { l: "−1", name: "negative unit tile", neg: true },
  };
  const CAPS = { 2: 8, 1: 8, 0: 12 };
  const NONE = { p2: "no x² tiles", n2: "no negative x² tiles", p1: "no x tiles", n1: "no negative x tiles", p0: "no unit tiles", n0: "no negative unit tiles" };
  STR.push(...Object.values(NONE), "a in (x + a)", "b in (x + b)", "x tiles (p)", "unit tiles (q)", "x² tiles", "negative x² tiles", "x tiles", "negative x tiles", "unit tiles", "negative unit tiles");

  function mount(el, api) {
    const id = ++uid;
    const cls = api.cls || 8;
    const S = { mode: "build", t: { p2: 0, n2: 0, p1: 0, n1: 0, p0: 0, n0: 0 }, a: 2, b: 3, p: 5, q: 6, L: { x: 2, u: 1 }, R: { x: 1, u: 6 }, eq0: null, steps: [] };
    let flow;
    const invs = INVS.filter((v) => cls >= v.minCls);
    const hatch = `at${id}`;

    const TABS = [["build", "Build"], ["expand", "Expand"], ["factor", "Factorise"], ["solve", "Solve"]];
    const stepper = (k, label, lo, hi) => `<div class="fw-frac"><span class="fw-lab">${t(label)}</span><span class="fw-st"><button type="button" class="btn at-btn" data-st="${k}" data-d="-1" aria-label="${esc(t("Decrease {x}", { x: t(label) }))}">−</button><output class="at-val" data-sv="${k}"></output><button type="button" class="btn at-btn" data-st="${k}" data-d="1" aria-label="${esc(t("Increase {x}", { x: t(label) }))}">+</button></span></div>`;
    const stage = () => `<div class="alg">
      <div class="ms-tabs" role="group" aria-label="${esc(t("Model"))}">${TABS.map(([m, l]) => `<button type="button" class="btn" data-mode="${m}" aria-pressed="${m === "build"}">${t(l)}</button>`).join("")}</div>
      <div data-pane="build">
        <p class="small muted">${t("Tap a tile below to add it to the board, or drag it onto the board. Tap a tile on the board to take it off.")}</p>
        <div class="vl-parts" role="group" aria-label="${esc(t("Tiles"))}">${Object.entries(KIND).map(([k, v]) => `<button type="button" class="vl-part" data-add="${k}" aria-label="${esc(t("Add one tile: {x}", { x: t(v.name) }))}"><span class="at-key ${v.neg ? "at-neg" : "at-pos"}" aria-hidden="true">${v.l}</span></button>`).join("")}</div>
        <div class="sim-btns"><button type="button" class="btn" data-zero>${t("Remove zero pairs")}</button><button type="button" class="btn" data-clearb>${icon("reset")} ${t("Clear the board")}</button></div>
      </div>
      <div data-pane="expand" hidden><div class="fw-steps">${stepper("a", "a in (x + a)", -9, 9)}${stepper("b", "b in (x + b)", -9, 9)}</div></div>
      <div data-pane="factor" hidden><div class="fw-steps">${stepper("p", "x tiles (p)", -10, 10)}${stepper("q", "unit tiles (q)", -20, 20)}</div></div>
      <div data-pane="solve" hidden>
        <p class="small muted">${t("Do the same to both sides. The equation stays balanced.")}</p>
        <div class="vl-quick" role="group" aria-label="${esc(t("Do the same to both sides"))}" data-eqbtns></div>
        <div class="sim-btns"><button type="button" class="btn" data-eqreset>${icon("reset")} ${t("Start this equation again")}</button></div>
        <ol class="small alg-steps" data-steps aria-label="${esc(t("Steps so far"))}"></ol>
      </div>
      <div class="vl-boardwrap"><svg class="fw-svg alg-svg" data-canvas viewBox="0 0 360 300" role="img"></svg></div>
      <p class="vl-warn" data-msg role="status"></p>
      <div class="sim-btns"><button type="button" class="btn primary" data-vl-run data-record>${icon("check")} ${t("Record this run")}</button></div></div>`;

    const say = (m, bad) => {
      const e = el.querySelector("[data-msg]");
      e.textContent = m || "";
      e.classList.toggle("is-bad", !!bad);
    };

    // ----- drawing -----
    const defs = `<defs><pattern id="${hatch}" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="7" height="7" class="at-hbg"/><path d="M0 0v7" class="at-hl"/></pattern></defs>`;
    const tile = (neg, x, y, w, h, label, extra = "") =>
      `<g ${extra}><rect class="${neg ? "at-negr" : "at-posr"}" x="${x}" y="${y}" width="${w}" height="${h}" rx="2" ${neg ? `fill="url(#${hatch})"` : ""}/>${label ? `<text class="at-tt" x="${x + w / 2}" y="${y + h / 2 + 4}" text-anchor="middle" style="font-size:${Math.min(13, h - 2, w * 0.6)}px">${esc(label)}</text>` : ""}</g>`;

    function drawBuild() {
      let s = defs;
      let y = 6;
      const rows = [["p2", 36, 36, 40], ["n2", 36, 36, 40], ["p1", 36, 12, 18], ["n1", 36, 12, 18], ["p0", 12, 12, 16], ["n0", 12, 12, 16]];
      for (const [k, w, h, step] of rows) {
        const n = S.t[k];
        const kd = KIND[k];
        for (let i = 0; i < n; i++) s += tile(kd.neg, 8 + i * (w + 4), y, w, h, kd.l, `data-rm="${k}" role="button" tabindex="0" aria-label="${esc(t("Take off one tile: {x}", { x: t(kd.name) }))}"`);
        if (!n) s += `<text class="s-m" x="8" y="${y + h / 2 + 4}" style="font-size:11px">${esc(t(NONE[k]))}</text>`;
        y += step + 4;
      }
      el.querySelector("[data-canvas]").innerHTML = s;
    }

    // area model of (x + a)(x + b)
    function drawArea(a, b) {
      const X0 = 44, Y0 = 44, W = 118, U = 14;
      const wa = abs(a) * U, hb = abs(b) * U;
      const reg = (x, y, w, h, neg, label, vsplit, hsplit) => {
        if (w <= 0 || h <= 0) return "";
        let r = tile(neg, x, y, w, h, "");
        if (vsplit) for (let i = 1; i < vsplit; i++) r += `<line class="at-sp" x1="${x + (w * i) / vsplit}" y1="${y}" x2="${x + (w * i) / vsplit}" y2="${y + h}"/>`;
        if (hsplit) for (let i = 1; i < hsplit; i++) r += `<line class="at-sp" x1="${x}" y1="${y + (h * i) / hsplit}" x2="${x + w}" y2="${y + (h * i) / hsplit}"/>`;
        const fs = Math.max(11, Math.min(15, Math.min(w, h) * 0.5));
        return r + `<text class="at-lab2" x="${x + w / 2}" y="${y + h / 2 + 5}" text-anchor="middle" style="font-size:${fs}px">${esc(label)}</text>`;
      };
      const term = (c, s) => (c === 0 ? "" : (c < 0 ? "−" : "") + (abs(c) === 1 && s ? "" : abs(c)) + s);
      let s = defs;
      s += reg(X0, Y0, W, W, false, "x" + SUP);
      s += reg(X0 + W, Y0, wa, W, a < 0, term(a, "x"), abs(a), 0);
      s += reg(X0, Y0 + W, W, hb, b < 0, term(b, "x"), 0, abs(b));
      s += reg(X0 + W, Y0 + W, wa, hb, a * b < 0, term(a * b, ""), abs(a), abs(b));
      s += `<text class="at-dim" x="${X0 + W / 2}" y="${Y0 - 10}" text-anchor="middle">x</text>`;
      if (a) s += `<text class="at-dim" x="${X0 + W + wa / 2}" y="${Y0 - 10}" text-anchor="middle">${a < 0 ? "−" : "+"}${abs(a)}</text>`;
      s += `<text class="at-dim" x="${X0 - 10}" y="${Y0 + W / 2 + 5}" text-anchor="end">x</text>`;
      if (b) s += `<text class="at-dim" x="${X0 - 10}" y="${Y0 + W + hb / 2 + 5}" text-anchor="end">${b < 0 ? "−" : "+"}${abs(b)}</text>`;
      el.querySelector("[data-canvas]").innerHTML = s;
    }

    function drawSolve() {
      const { L, R } = S;
      let s = defs;
      const side = (sd, x0) => {
        let r = "";
        const nx = abs(sd.x);
        const nu = abs(sd.u);
        for (let i = 0; i < nx; i++) r += tile(sd.x < 0, x0 + (i % 5) * 28, 20 + Math.floor(i / 5) * 58, 24, 52, sd.x < 0 ? "−x" : "x");
        const uy = 20 + Math.ceil(nx / 5) * 58 + 6;
        for (let i = 0; i < nu; i++) r += tile(sd.u < 0, x0 + (i % 6) * 22, uy + Math.floor(i / 6) * 22, 18, 18, sd.u < 0 ? "−1" : "1");
        if (!nx && !nu) r += `<text class="s-m" x="${x0}" y="40" style="font-size:12px">0</text>`;
        return r;
      };
      s += side(L, 14) + `<text class="at-eq" x="180" y="60" text-anchor="middle">=</text><line class="at-sp" x1="180" y1="80" x2="180" y2="280"/>` + side(R, 206);
      el.querySelector("[data-canvas]").innerHTML = s;
    }

    // ----- state helpers -----
    const buildPoly = () => {
      const T = S.t;
      return [T.p2 - T.n2, T.p1 - T.n1, T.p0 - T.n0];
    };
    const tilesText = () => {
      const T = S.t;
      const parts = [];
      const add = (n, one, many) => n && parts.push(`${n} ${n === 1 ? one : many}`);
      add(T.p2, t("x² tile"), t("x² tiles"));
      add(T.n2, t("negative x² tile"), t("negative x² tiles"));
      add(T.p1, t("x tile"), t("x tiles"));
      add(T.n1, t("negative x tile"), t("negative x tiles"));
      add(T.p0, t("unit tile"), t("unit tiles"));
      add(T.n0, t("negative unit tile"), t("negative unit tiles"));
      return parts.length ? parts.join(", ") : t("no tiles");
    };
    const zeroPairs = () => Math.min(S.t.p2, S.t.n2) + Math.min(S.t.p1, S.t.n1) + Math.min(S.t.p0, S.t.n0);

    function eqButtons() {
      const { L, R } = S;
      const btn = (kind, n, label) => `<button type="button" class="btn" data-eqop="${kind}" data-n="${n}">${label}</button>`;
      const g = divAll(L, R);
      el.querySelector("[data-eqbtns]").innerHTML =
        btn("x", -1, t("Take 1 x from both sides")) + btn("x", 1, t("Add 1 x to both sides")) + btn("u", -1, t("Take 1 from both sides")) + btn("u", 1, t("Add 1 to both sides")) +
        (g > 1 ? `<button type="button" class="btn" data-eqdiv="${g}">${t("Divide both sides by {k}", { k: g })}</button>` : "");
    }
    function stepsList() {
      el.querySelector("[data-steps]").innerHTML = S.steps.map((x) => `<li>${esc(x)}</li>`).join("");
    }

    function rows() {
      const { mode } = S;
      if (mode === "build") {
        const [c2, c1, c0] = buildPoly();
        return [[t("Tiles on the board"), tilesText()], [t("Simplified"), polyText(c2, c1, c0)], [t("Zero pairs"), String(zeroPairs())]];
      }
      if (mode === "expand") {
        const [c2, c1, c0] = expand(S.a, S.b);
        const lhs = (10 + S.a) * (10 + S.b);
        return [[t("Product"), `(${binom(S.a)})(${binom(S.b)})`], [t("Expanded"), polyText(c2, c1, c0)], [t("Check with x = 10"), `${lhs} = ${100 + c1 * 10 + c0}`]];
      }
      if (mode === "factor") {
        const f = factor(S.p, S.q);
        return [[t("Expression"), polyText(1, S.p, S.q)], [t("Factorised"), f ? factorText(f[0], f[1]) : t("not possible with whole numbers")], [t("Two numbers that add to {p} and multiply to {q}", { p: S.p, q: S.q }), f ? `${f[0]} ${t("and")} ${f[1]}` : "—"]];
      }
      const sv = solved(S.L, S.R);
      return [[t("Equation"), eqText(S.L, S.R)], [t("Last step"), S.steps.length ? S.steps[S.steps.length - 1] : "—"], [t("Solution"), sv != null ? `x = ${sv}` : t("not yet: x is not alone")]];
    }

    function paint() {
      const m = S.mode;
      el.querySelectorAll("[data-pane]").forEach((p) => (p.hidden = p.dataset.pane !== m));
      el.querySelectorAll("[data-mode]").forEach((b) => b.setAttribute("aria-pressed", b.dataset.mode === m));
      for (const k of ["a", "b", "p", "q"]) {
        const o = el.querySelector(`[data-sv="${k}"]`);
        if (o) o.textContent = (S[k] < 0 ? "−" : "") + abs(S[k]);
      }
      const cv = el.querySelector("[data-canvas]");
      let label = "";
      if (m === "build") {
        drawBuild();
        label = `${t("Tiles on the board")}: ${tilesText()}`;
      } else if (m === "expand") {
        drawArea(S.a, S.b);
        label = `${t("Area model of")} (${binom(S.a)})(${binom(S.b)}) = ${polyText(...expand(S.a, S.b))}`;
      } else if (m === "factor") {
        const f = factor(S.p, S.q);
        if (f) {
          drawArea(f[0], f[1]);
          label = `${polyText(1, S.p, S.q)} = ${factorText(f[0], f[1])}`;
        } else {
          cv.innerHTML = `<text class="s-m" x="180" y="140" text-anchor="middle" style="font-size:14px">${esc(t("No rectangle can be made."))}</text><text class="s-m" x="180" y="164" text-anchor="middle" style="font-size:12px">${esc(t("No two whole numbers add to {p} and multiply to {q}.", { p: S.p, q: S.q }))}</text>`;
          label = t("No two whole numbers add to {p} and multiply to {q}.", { p: S.p, q: S.q });
        }
      } else {
        drawSolve();
        eqButtons();
        stepsList();
        label = eqText(S.L, S.R);
      }
      cv.setAttribute("aria-label", label);
      const r = rows();
      flow.live(r, r.map(([k, v]) => `${k}: ${v}`).join(". "));
    }

    function addTile(k) {
      const n = Number(k[1]);
      if (S.t[k] >= CAPS[n]) return say(t("The board holds at most {n} tiles of one kind.", { n: CAPS[n] }), true);
      S.t[k]++;
      say("");
      paint();
    }

    function resetEq(eq) {
      S.L = { ...eq[0] };
      S.R = { ...eq[1] };
      S.eq0 = eqText(S.L, S.R);
      S.steps = [];
    }
    function eqApply(L, R, text) {
      if (abs(L.x) > 12 || abs(R.x) > 12 || abs(L.u) > 24 || abs(R.u) > 24) return say(t("The numbers are getting too big for the board."), true);
      S.L = L;
      S.R = R;
      S.steps.push(text);
      say("");
      paint();
    }

    function recordRun(F) {
      const m = S.mode;
      if (m === "build") {
        const [c2, c1, c0] = buildPoly();
        if (!tilesText() || tilesText() === t("no tiles")) return say(t("Put some tiles on the board first."), true);
        return F.addRun({ setup: tilesText(), result: polyText(c2, c1, c0) });
      }
      if (m === "expand") return F.addRun({ setup: `(${binom(S.a)})(${binom(S.b)})`, result: polyText(...expand(S.a, S.b)) });
      if (m === "factor") {
        const f = factor(S.p, S.q);
        return F.addRun({ setup: polyText(1, S.p, S.q), result: f ? factorText(f[0], f[1]) : t("not possible with whole numbers") });
      }
      const sv = solved(S.L, S.R);
      return F.addRun({ setup: eqText(S.L, S.R), result: sv != null ? `x = ${sv}` : t("not yet solved") });
    }

    flow = Labs.flow(el, api, {
      assumptions: ASSUME,
      columns: COLS,
      investigations: invs,
      extra: () => ({ mode: S.mode, tiles: { ...S.t }, a: S.a, b: S.b, p: S.p, q: S.q, equation: S.mode === "solve" ? eqText(S.L, S.R) : null, steps: S.steps.slice() }),
      mountStage(slot, F) {
        flow = F;
        slot.innerHTML = stage();
        slot.addEventListener("click", (e) => {
          const rm = e.target.closest("[data-rm]");
          if (rm) {
            const k = rm.dataset.rm;
            if (S.t[k]) S.t[k]--;
            say("");
            paint();
            const next = el.querySelector(`[data-rm="${k}"]`);
            return next ? next.focus({ preventScroll: true }) : el.querySelector(`[data-add="${k}"]`).focus({ preventScroll: true });
          }
          const ad = e.target.closest("[data-add]");
          if (ad) return ad.dataset.dragged ? null : addTile(ad.dataset.add);
          const md = e.target.closest("[data-mode]");
          if (md) {
            S.mode = md.dataset.mode;
            say("");
            return paint();
          }
          if (e.target.closest("[data-zero]")) {
            const z = zeroPairs();
            for (const n of [2, 1, 0]) {
              const m = Math.min(S.t["p" + n], S.t["n" + n]);
              S.t["p" + n] -= m;
              S.t["n" + n] -= m;
            }
            say(z ? t("Removed {n} zero {n:pair|pairs}. The value has not changed.", { n: z }) : t("There are no zero pairs on the board."));
            return paint();
          }
          if (e.target.closest("[data-clearb]")) {
            for (const k in S.t) S.t[k] = 0;
            say("");
            return paint();
          }
          const st = e.target.closest("[data-st]");
          if (st) {
            const k = st.dataset.st;
            const lim = { a: [-9, 9], b: [-9, 9], p: [-10, 10], q: [-20, 20] }[k];
            S[k] = Math.max(lim[0], Math.min(lim[1], S[k] + Number(st.dataset.d)));
            paint();
            const again = el.querySelector(`[data-st="${k}"][data-d="${st.dataset.d}"]`);
            return again && again.focus({ preventScroll: true });
          }
          const op = e.target.closest("[data-eqop]");
          if (op) {
            const kind = op.dataset.eqop;
            const n = Number(op.dataset.n);
            const [L, R] = both(S.L, S.R, kind, n);
            const what = kind === "x" ? "x" : "1";
            return eqApply(L, R, `${n < 0 ? t("Took {w} from both sides", { w: what }) : t("Added {w} to both sides", { w: what })}: ${eqText(L, R)}`);
          }
          const dv = e.target.closest("[data-eqdiv]");
          if (dv) {
            const k = Number(dv.dataset.eqdiv);
            const [L, R] = divideBoth(S.L, S.R, k);
            return eqApply(L, R, `${t("Divided both sides by {k}", { k })}: ${eqText(L, R)}`);
          }
          if (e.target.closest("[data-eqreset]")) {
            const inv = F.inv;
            resetEq(inv.eq || [S.L, S.R]);
            say("");
            return paint();
          }
          if (e.target.closest("[data-record]")) recordRun(F);
        });
        slot.addEventListener("keydown", (e) => {
          if ((e.key === "Enter" || e.key === " ") && e.target.closest && e.target.closest("[data-rm]")) {
            e.preventDefault();
            e.target.closest("[data-rm]").dispatchEvent(new MouseEvent("click", { bubbles: true }));
          }
        });
        Games.draggable(slot, "[data-add]", {
          onDrop(chip, els) {
            if (els.some((x) => x.matches && x.matches("[data-canvas], [data-canvas] *"))) addTile(chip.dataset.add);
          },
          onTap() {},
          over(els) {
            const c = slot.querySelector("[data-canvas]");
            c.classList.toggle("vl-over-svg", els.some((x) => x === c || (c.contains && c.contains(x))));
          },
        });
      },
      onInvestigation(inv) {
        S.mode = inv.mode;
        say("");
        if (inv.mode === "build") {
          for (const k in S.t) S.t[k] = 0;
          S.t.p1 = 3;
          S.t.n1 = 2;
        } else if (inv.mode === "expand") [S.a, S.b] = inv.ab;
        else if (inv.mode === "factor") [S.p, S.q] = inv.pq;
        else resetEq(inv.eq);
        paint();
      },
    });
  }

  Labs.register("algebratiles", {
    title: "Algebra tiles",
    area: "maths",
    icon: "scale",
    objective: "Model expressions with x², x and unit tiles, including negative tiles and zero pairs. Multiply out (x + 2)(x + 3) as an area, factorise x² + 5x + 6 as a rectangle, and solve equations by doing the same to both sides.",
    chapters: [
      { cls: 6, subject: "mathspb", chapter: "algebra" },
      { cls: 7, subject: "maths", chapter: "expressions-using-letter-numbers" },
      { cls: 7, subject: "maths", chapter: "finding-the-unknown" },
      { cls: 7, subject: "mathspb", chapter: "algebraic-expressions" },
      { cls: 7, subject: "mathspb", chapter: "simple-equations" },
      { cls: 8, subject: "maths", chapter: "algebra-play" },
      { cls: 8, subject: "mathspb", chapter: "linear-equations-in-one-variable" },
      { cls: 8, subject: "mathspb", chapter: "algebraic-expressions-and-identities" },
      { cls: 8, subject: "mathspb", chapter: "factorisation" },
      { cls: 9, subject: "maths", chapter: "exploring-algebraic-identities" },
      { cls: 9, subject: "mathspb", chapter: "polynomials" },
      { cls: 10, subject: "maths", chapter: "polynomials" },
      { cls: 10, subject: "maths", chapter: "quadratic-equations" },
    ],
    mount,
  });
})();
