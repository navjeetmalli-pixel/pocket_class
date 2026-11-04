// Fraction wall and area model (Maths Studio, Classes 3 to 8).
//   Wall: bars for 1, 1/2, 1/3 ... 1/12, each cut into equal bricks. Shade a fraction of a bar and the wall shows where it ends,
//         which other bars end at the same place (equal fractions) and how two shaded fractions compare.
//   Area model: a unit square cut into b columns and d rows. Shade a of the b columns and c of the d rows; the overlap is
//         (a x c) of the (b x d) small rectangles, so  a/b x c/d = (a x c) / (b x d).
//
//   k/d = k'/d'   exactly when  k x d' = k' x d        (cross-multiplication, checked in whole numbers: no rounding)
//
// Assumptions: bars 1 to 12 equal parts; the area model uses up to 12 columns and 12 rows; proper fractions (not more than 1).

(() => {
  const gcd = (a, b) => (b ? gcd(b, a % b) : Math.abs(a));
  const simplify = (k, d) => {
    const g = gcd(k, d) || 1;
    return [k / g, d / g];
  };
  const fr = (k, d) => `${k}/${d}`;
  // Every bar of the wall (1 to 12 equal parts) that ends in the same place as k/d: [[k', d'], ...]
  const equalList = (k, d, max = 12) => {
    const out = [];
    for (let e = 1; e <= max; e++) if ((k * e) % d === 0) out.push([(k * e) / d, e]);
    return out;
  };
  const compare = (k1, d1, k2, d2) => Math.sign(k1 * d2 - k2 * d1); // 1: first is bigger
  const mul = (a, b, c, d) => {
    const n = a * c;
    const m = b * d;
    return { n, m, s: simplify(n, m) };
  };
  const cmpSym = (s) => (s > 0 ? ">" : s < 0 ? "<" : "=");

  const ASSUME = "Fractions here are at most 1 whole, and the wall has bars from 1 to 12 equal parts. Bricks on the wall are drawn the same height so only the length matters. The area model cuts a square into up to 12 columns and 12 rows.";
  const COLS = [
    { key: "frac", label: "Fraction", var: true },
    { key: "result", label: "In simplest form" },
    { key: "val", label: "Value (decimal)", d: 3 },
  ];
  const INVS = [
    {
      id: "equal",
      mode: "wall",
      title: "Equivalent fractions on the wall",
      question: "On the fraction wall, which other fractions end in the same place as 1/2?",
      predict: { opts: ["Only 2/4", "2/4, 3/6, 4/8, 5/10 and 6/12", "None, because the bricks are different sizes"], ans: 1 },
      vary: "frac",
      held: ["The wall (the same bars)"],
      go: "Shade the first brick in the bar of halves and record a run. Then shade a different fraction that ends in the same place, for example 2 bricks in the bar of fourths, and record again.",
      columns: COLS,
      explain: {
        q: "What do your runs show about equal fractions?",
        opts: ["Different fractions can cover the same part of the whole: the top and the bottom are multiplied by the same number", "Fractions with a bigger bottom number are always bigger", "Fractions are equal only when their top and bottom numbers are the same"],
        ans: 0,
        why: "1/2, 2/4, 3/6 and the others cover exactly the same length of the bar. Each one is 1/2 with the top and the bottom multiplied by the same number (2, 3, 4 ...), so the value does not change.",
      },
      graph: { x: "run", y: "val" },
    },
    {
      id: "compare",
      mode: "wall",
      title: "Which is bigger: 3/4 or 2/3?",
      question: "Which fraction is bigger, 3/4 or 2/3?",
      predict: { opts: ["3/4 is bigger", "2/3 is bigger", "They are equal"], ans: 0 },
      vary: "frac",
      held: ["The wall (the same bars)"],
      go: "Shade 3 bricks in the bar of fourths and record a run. Then shade 2 bricks in the bar of thirds and record again. Compare where the shading ends.",
      columns: COLS,
      explain: {
        q: "What do your runs show about comparing fractions?",
        opts: ["The shading that ends further to the right covers more of the whole, so it is the bigger fraction", "The fraction with the bigger bottom number is bigger", "The fraction with the smaller top number is bigger"],
        ans: 0,
        why: "On the wall every bar is the same length, so the fraction whose shading reaches further covers more of the whole. 3/4 reaches 0.75 and 2/3 reaches about 0.667, so 3/4 is bigger.",
      },
      graph: { x: "run", y: "val" },
    },
    {
      id: "half-third",
      mode: "area",
      minCls: 6,
      title: "Why is 1/2 × 1/3 = 1/6?",
      question: "What is half of one third (1/2 × 1/3)?",
      predict: { opts: ["1/5", "1/6", "2/3"], ans: 1 },
      vary: "frac",
      held: ["The square (one whole)"],
      go: "The square starts with 1/2 shaded across and 1/3 shaded down. Record a run. Then change one fraction, for example make it 1/4 down, and record again.",
      columns: COLS,
      explain: {
        q: "Why is 1/2 × 1/3 equal to 1/6?",
        opts: ["The overlap is 1 small rectangle out of 2 × 3 = 6, so the top numbers multiply (1 × 1) and the bottom numbers multiply (2 × 3)", "The overlap is the two fractions added together", "The overlap is always bigger than both fractions"],
        ans: 0,
        why: "Cutting the square into 2 columns and 3 rows makes 6 equal small rectangles. Half the columns and a third of the rows overlap in exactly 1 of them, so 1/2 × 1/3 = 1/6. Taking a fraction of a fraction gives a smaller piece.",
      },
      graph: { x: "run", y: "val" },
    },
    {
      id: "two-thirds",
      mode: "area",
      minCls: 6,
      title: "Multiply 2/3 × 3/4",
      question: "What is 2/3 × 3/4 in its simplest form?",
      predict: { opts: ["5/7", "1/2", "2/3"], ans: 1 },
      vary: "frac",
      held: ["The square (one whole)"],
      go: "The square starts with 2/3 shaded across and 3/4 shaded down. Record a run. Then change one fraction, for example make it 1/4 down, and record again.",
      columns: COLS,
      explain: {
        q: "What do your runs show about multiplying fractions?",
        opts: ["Multiply the tops and multiply the bottoms, then simplify: 2/3 × 3/4 = 6/12 = 1/2", "Add the tops and add the bottoms", "Multiply the tops and keep the bottom the same"],
        ans: 0,
        why: "The overlap is 2 × 3 = 6 small rectangles out of 3 × 4 = 12, which is 6/12. Both 6 and 12 divide by 6, so it simplifies to 1/2.",
      },
      graph: { x: "run", y: "val" },
    },
  ];
  const STR = ["Fraction wall", "Area model", "1 whole"];

  Labs.calc.fractionwall = { gcd, simplify, equalList, compare, mul, INVS, COLS, ASSUME, STR };

  let uid = 0;
  const WX = 44, WW = 306, RH = 21, RG = 4;

  function mount(el, api) {
    const id = ++uid;
    const cls = api.cls || 8;
    const showArea = cls >= 6;
    const S = { mode: "wall", k: Array(13).fill(0), hist: [], guide: null, a: 1, b: 2, c: 1, d: 3 };
    let flow;
    const invs = INVS.filter((v) => !v.minCls || cls >= v.minCls);

    const stage = () => `<div class="fw">
      ${showArea ? `<div class="ms-tabs" role="group" aria-label="${esc(t("Model"))}"><button type="button" class="btn" data-mode="wall" aria-pressed="true">${t("Fraction wall")}</button><button type="button" class="btn" data-mode="area" aria-pressed="false">${t("Area model")}</button></div>` : ""}
      <div data-wallpane>
        <p class="small muted">${t("Tap a brick to shade the bar up to it. Tap the last shaded brick again to take it off. Arrow keys move between bricks.")}</p>
        <div class="vl-boardwrap"><svg class="fw-svg" data-wall viewBox="0 0 360 ${13 * (RH + RG) + 6}" role="group" aria-label="${esc(t("Fraction wall: bars from 1 whole to twelfths"))}"></svg></div>
        <div class="sim-btns"><button type="button" class="btn" data-clearwall>${icon("reset")} ${t("Clear the wall")}</button></div>
      </div>
      <div data-areapane hidden>
        <div class="fw-steps" role="group" aria-label="${esc(t("Choose the two fractions"))}">${[["a", "b", "Across"], ["c", "d", "Down"]]
          .map(
            ([n, dn, lab]) => `<div class="fw-frac"><span class="fw-lab">${t(lab)}</span>
            <div class="fw-pair"><span class="fw-st"><button type="button" class="btn at-btn" data-ar="${n}" data-d="-1" aria-label="${esc(t("Decrease the top number ({x})", { x: lab === "Across" ? t("across") : t("down") }))}">−</button><output class="at-val" data-v="${n}"></output><button type="button" class="btn at-btn" data-ar="${n}" data-d="1" aria-label="${esc(t("Increase the top number ({x})", { x: lab === "Across" ? t("across") : t("down") }))}">+</button></span>
            <span class="fw-bar" aria-hidden="true"></span>
            <span class="fw-st"><button type="button" class="btn at-btn" data-ar="${dn}" data-d="-1" aria-label="${esc(t("Decrease the bottom number ({x})", { x: lab === "Across" ? t("across") : t("down") }))}">−</button><output class="at-val" data-v="${dn}"></output><button type="button" class="btn at-btn" data-ar="${dn}" data-d="1" aria-label="${esc(t("Increase the bottom number ({x})", { x: lab === "Across" ? t("across") : t("down") }))}">+</button></span></div></div>`
          )
          .join("")}</div>
        <div class="vl-boardwrap fw-areawrap"><svg class="fw-svg" data-area viewBox="0 0 360 330" role="img"></svg></div>
      </div>
      <p class="vl-warn" data-msg role="status"></p>
      <div class="sim-btns"><button type="button" class="btn primary" data-vl-run data-record>${icon("check")} ${t("Record this run")}</button></div></div>`;

    const last = () => (S.hist.length ? S.hist[S.hist.length - 1] : 0);
    const say = (m, bad) => {
      const e = el.querySelector("[data-msg]");
      e.textContent = m || "";
      e.classList.toggle("is-bad", !!bad);
    };

    // ----- wall -----
    function drawWall() {
      const g = S.guide;
      const gv = g ? g.k / g.d : null;
      const eq = g ? equalList(g.k, g.d) : [];
      let s = "";
      for (let d = 1; d <= 12; d++) {
        const y = 3 + (d - 1) * (RH + RG);
        const cw = WW / d;
        s += `<text class="fw-rl" x="${WX - 6}" y="${y + RH / 2 + 4}" text-anchor="end">${d === 1 ? "1" : "1/" + d}</text>`;
        for (let j = 1; j <= d; j++) {
          const on = j <= S.k[d];
          const ends = g && eq.some(([k2, d2]) => d2 === d && k2 === j);
          const lab = d === 1 ? "1" : `1/${d}`;
          s += `<g data-cell="${d},${j}" role="button" tabindex="${j === 1 ? 0 : -1}" aria-pressed="${on}" aria-label="${esc(t("Brick {j} of {d}: shade up to {k}/{d}", { j, d, k: j }))}">
            <rect class="fw-brick ${on ? "on" : ""} ${ends ? "fw-end" : ""}" x="${(WX + cw * (j - 1)).toFixed(2)}" y="${y}" width="${cw.toFixed(2)}" height="${RH}" rx="3"/>
            <text class="fw-bt" x="${(WX + cw * (j - 0.5)).toFixed(2)}" y="${y + RH / 2 + 3.5}" text-anchor="middle" style="font-size:${d > 8 ? 8.5 : 10.5}px">${lab}</text></g>`;
        }
      }
      if (gv != null) s += `<line class="fw-guide" x1="${(WX + WW * gv).toFixed(2)}" y1="0" x2="${(WX + WW * gv).toFixed(2)}" y2="${13 * (RH + RG)}"/>`;
      el.querySelector("[data-wall]").innerHTML = s;
    }
    function wallRows() {
      const g = S.guide;
      if (!g) return [[t("Shaded fraction"), "—"], [t("Simplest form"), "—"], [t("Equal fractions on the wall"), "—"], [t("Comparison"), "—"]];
      const [sk, sd] = simplify(g.k, g.d);
      const same = sk === g.k && sd === g.d;
      const eq = equalList(g.k, g.d).map(([k, d]) => fr(k, d));
      let cmp = "—";
      const other = [...S.hist].reverse().find((d) => d !== g.d && S.k[d] > 0);
      if (other) cmp = `${fr(g.k, g.d)} ${cmpSym(compare(g.k, g.d, S.k[other], other))} ${fr(S.k[other], other)}`;
      return [
        [t("Shaded fraction"), fr(g.k, g.d)],
        [t("Simplest form"), same ? fr(sk, sd) : `${fr(g.k, g.d)} = ${fr(sk, sd)}`],
        [t("Equal fractions on the wall"), eq.join(" = ")],
        [t("Comparison"), cmp],
      ];
    }

    // ----- area model -----
    function drawArea() {
      const { a, b, c, d } = S;
      const X0 = 40, Y0 = 36, SZ = 290;
      const cw = SZ / b, ch = SZ / d;
      const pA = `fwA${id}`, pB = `fwB${id}`;
      let s = `<defs><pattern id="${pA}" width="8" height="8" patternUnits="userSpaceOnUse"><rect width="8" height="8" class="fw-pa-bg"/><path d="M4 0v8" class="fw-pa"/></pattern>
        <pattern id="${pB}" width="8" height="8" patternUnits="userSpaceOnUse"><rect width="8" height="8" class="fw-pb-bg"/><path d="M0 4h8" class="fw-pb"/></pattern></defs>
        <rect x="${X0}" y="${Y0}" width="${SZ}" height="${SZ}" class="fw-sq"/>`;
      if (a) s += `<rect x="${X0}" y="${Y0}" width="${(cw * a).toFixed(2)}" height="${SZ}" fill="url(#${pA})"/>`;
      if (c) s += `<rect x="${X0}" y="${Y0}" width="${SZ}" height="${(ch * c).toFixed(2)}" fill="url(#${pB})"/>`;
      if (a && c) s += `<rect x="${X0}" y="${Y0}" width="${(cw * a).toFixed(2)}" height="${(ch * c).toFixed(2)}" class="fw-both"/>`;
      for (let i = 0; i <= b; i++) s += `<line class="fw-gl" x1="${(X0 + cw * i).toFixed(2)}" y1="${Y0}" x2="${(X0 + cw * i).toFixed(2)}" y2="${Y0 + SZ}"/>`;
      for (let j = 0; j <= d; j++) s += `<line class="fw-gl" x1="${X0}" y1="${(Y0 + ch * j).toFixed(2)}" x2="${X0 + SZ}" y2="${(Y0 + ch * j).toFixed(2)}"/>`;
      s += `<text class="fw-at" x="${X0 + (cw * a) / 2}" y="${Y0 - 10}" text-anchor="middle">${fr(a, b)}</text><text class="fw-at" x="${X0 - 8}" y="${Y0 + (ch * c) / 2 + 4}" text-anchor="end">${fr(c, d)}</text>`;
      const m = mul(a, b, c, d);
      s += `<text class="fw-at" x="${X0 + SZ / 2}" y="${Y0 + SZ + 26}" text-anchor="middle">${esc(t("{x} of {y} small rectangles overlap", { x: m.n, y: m.m }))}</text>`;
      const svg = el.querySelector("[data-area]");
      svg.innerHTML = s;
      svg.setAttribute("aria-label", t("Square cut into {b} columns and {d} rows. {a}/{b} of the columns and {c}/{d} of the rows are shaded. {x} of the {y} small rectangles are in both.", { a, b, c, d, x: m.n, y: m.m }));
      for (const k of "abcd") el.querySelector(`[data-v="${k}"]`).textContent = S[k];
    }
    function areaRows() {
      const { a, b, c, d } = S;
      const m = mul(a, b, c, d);
      const [sk, sd] = m.s;
      const simp = sk === m.n && sd === m.m ? "" : ` = ${fr(sk, sd)}`;
      return [
        [t("Product"), `${fr(a, b)} × ${fr(c, d)} = ${fr(m.n, m.m)}${simp}`],
        [t("Overlap"), t("{x} of {y} small rectangles", { x: m.n, y: m.m })],
        [t("Value (decimal)"), String(Math.round((m.n / m.m) * 1000) / 1000)],
      ];
    }

    function paint() {
      const wall = S.mode === "wall";
      el.querySelector("[data-wallpane]").hidden = !wall;
      el.querySelector("[data-areapane]").hidden = wall;
      el.querySelectorAll("[data-mode]").forEach((b) => b.setAttribute("aria-pressed", b.dataset.mode === S.mode));
      let rows;
      if (wall) {
        drawWall();
        rows = wallRows();
      } else {
        drawArea();
        rows = areaRows();
      }
      flow.live(rows, rows.map(([k, v]) => `${k}: ${v}`).join(". "));
    }

    function tapCell(d, j, focus) {
      const was = S.k[d];
      S.k[d] = was === j ? j - 1 : j;
      S.hist = S.hist.filter((x) => x !== d);
      if (S.k[d] > 0) S.hist.push(d);
      S.guide = S.k[d] > 0 ? { k: S.k[d], d } : last() ? { k: S.k[last()], d: last() } : null;
      say("");
      paint();
      if (focus) {
        const c = el.querySelector(`[data-cell="${d},${j}"]`);
        if (c) c.focus({ preventScroll: true });
      }
    }

    function setMode(m, keep) {
      S.mode = m;
      if (!keep) say("");
      paint();
    }

    flow = Labs.flow(el, api, {
      assumptions: ASSUME,
      columns: COLS,
      investigations: invs,
      extra: () => (S.mode === "wall" ? { mode: "wall", shaded: S.k.map((k, d) => (k ? fr(k, d) : null)).filter(Boolean) } : { mode: "area", a: S.a, b: S.b, c: S.c, d: S.d }),
      mountStage(slot, F) {
        flow = F;
        slot.innerHTML = stage();
        slot.addEventListener("click", (e) => {
          const cell = e.target.closest("[data-cell]");
          if (cell) {
            const [d, j] = cell.dataset.cell.split(",").map(Number);
            return tapCell(d, j, true);
          }
          const md = e.target.closest("[data-mode]");
          if (md) return setMode(md.dataset.mode);
          if (e.target.closest("[data-clearwall]")) {
            S.k = Array(13).fill(0);
            S.hist = [];
            S.guide = null;
            return paint();
          }
          const ar = e.target.closest("[data-ar]");
          if (ar) {
            const k = ar.dataset.ar;
            const v = S[k] + Number(ar.dataset.d);
            const isTop = k === "a" || k === "c";
            const lim = isTop ? [0, S[k === "a" ? "b" : "d"]] : [1, 12];
            if (v < lim[0] || v > lim[1]) return;
            S[k] = v;
            if (k === "b") S.a = Math.min(S.a, S.b);
            if (k === "d") S.c = Math.min(S.c, S.d);
            paint();
            const again = el.querySelector(`[data-ar="${k}"][data-d="${ar.dataset.d}"]`);
            if (again) again.focus({ preventScroll: true });
            return;
          }
          if (e.target.closest("[data-record]")) {
            if (S.mode === "wall") {
              if (!S.guide) return say(t("Shade a fraction on the wall first."), true);
              const { k, d } = S.guide;
              const [sk, sd] = simplify(k, d);
              say("");
              F.addRun({ frac: fr(k, d), result: fr(sk, sd), val: k / d });
            } else {
              const m = mul(S.a, S.b, S.c, S.d);
              if (!m.n) return say(t("Shade at least one column and one row first."), true);
              say("");
              F.addRun({ frac: `${fr(S.a, S.b)} × ${fr(S.c, S.d)}`, result: fr(m.s[0], m.s[1]), val: m.n / m.m });
            }
          }
        });
        // arrow keys move between bricks
        slot.addEventListener("keydown", (e) => {
          const cell = e.target.closest && e.target.closest("[data-cell]");
          if (cell && (e.key === " " || e.key === "Enter")) {
            e.preventDefault();
            return cell.dispatchEvent(new MouseEvent("click", { bubbles: true }));
          }
          const dd = { ArrowRight: [0, 1], ArrowLeft: [0, -1], ArrowDown: [1, 0], ArrowUp: [-1, 0] }[e.key];
          if (!cell || !dd) return;
          e.preventDefault();
          const [d0, j0] = cell.dataset.cell.split(",").map(Number);
          const d = Math.max(1, Math.min(12, d0 + dd[0]));
          const j = Math.max(1, Math.min(d, dd[0] ? Math.round((j0 / d0) * d) || 1 : j0 + dd[1]));
          const nx = slot.querySelector(`[data-cell="${d},${j}"]`);
          if (nx) {
            slot.querySelectorAll("[data-cell]").forEach((c) => (c.tabIndex = -1));
            nx.tabIndex = 0;
            nx.focus();
          }
        });
      },
      onInvestigation(inv) {
        S.k = Array(13).fill(0);
        S.hist = [];
        S.guide = null;
        if (inv.mode === "area") {
          const p = inv.id === "half-third" ? [1, 2, 1, 3] : [2, 3, 3, 4];
          [S.a, S.b, S.c, S.d] = p;
        }
        say("");
        setMode(inv.mode, true);
      },
    });
  }

  Labs.register("fractionwall", {
    title: "Fraction wall and area model",
    area: "maths",
    icon: "pie",
    objective: "Shade bricks on a fraction wall from 1 to twelfths to compare fractions and find equal ones. Use an area model to see why multiplying two fractions gives a smaller piece, for example 1/2 × 1/3 = 1/6.",
    chapters: [
      { cls: 3, subject: "maths", chapter: "fractions" },
      { cls: 4, subject: "maths", chapter: "fractions" },
      { cls: 5, subject: "maths", chapter: "fractions" },
      { cls: 6, subject: "maths", chapter: "fractions" },
      { cls: 6, subject: "mathspb", chapter: "fractions" },
      { cls: 7, subject: "maths", chapter: "working-with-fractions" },
      { cls: 7, subject: "mathspb", chapter: "fractions-and-decimals" },
      { cls: 8, subject: "maths", chapter: "fractions-in-disguise" },
      { cls: 8, subject: "mathspb", chapter: "rational-numbers" },
    ],
    mount,
  });
})();
