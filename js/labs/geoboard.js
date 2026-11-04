// Geometry board (Maths Studio, Classes 3 to 10): a 9 by 9 geoboard. Tap pegs to stretch a band, close the shape by tapping the
// first peg again, and read its perimeter, area, angles and lines of symmetry. A second mode reflects, rotates or translates the shape.
//
//   area      shoelace formula:   A = |sum of (x_i y_(i+1) - x_(i+1) y_i)| / 2
//   Pick      A = I + B/2 - 1     I: pegs strictly inside, B: pegs on the band (counted separately, as a cross-check)
//   perimeter sum of the side lengths  sqrt(dx^2 + dy^2)
//   angle     interior angle at each corner; acute (< 90), right (= 90, tested with a dot product), obtuse, reflex (> 180)
//   symmetry  a line of symmetry swaps two corners, so only the perpendicular bisectors of pairs of corners are tried, in exact whole numbers
//
// Assumptions: pegs one unit apart, shapes must not cross themselves for the area and Pick's check; reflections use vertical,
// horizontal and the two diagonal lines; rotations are by 90, 180 and 270 degrees about a peg or a half-step point.

(() => {
  const N = 9; // pegs per side: coordinates 0 .. 8
  const abs = Math.abs;
  const gcd = (a, b) => (b ? gcd(b, a % b) : abs(a));
  const area2 = (v) => v.reduce((s, p, i) => s + p[0] * v[(i + 1) % v.length][1] - v[(i + 1) % v.length][0] * p[1], 0);
  const area = (v) => abs(area2(v)) / 2;
  const d2 = (p, q) => (p[0] - q[0]) ** 2 + (p[1] - q[1]) ** 2;
  const edges = (v) => v.map((p, i) => [p, v[(i + 1) % v.length]]);
  const sideSq = (v) => edges(v).map(([p, q]) => d2(p, q));
  const perimeter = (v) => sideSq(v).reduce((s, x) => s + Math.sqrt(x), 0);
  const boundary = (v) => edges(v).reduce((s, [p, q]) => s + gcd(abs(q[0] - p[0]), abs(q[1] - p[1])), 0);
  const cross = (o, a, b) => (a[0] - o[0]) * (b[1] - o[1]) - (a[1] - o[1]) * (b[0] - o[0]);
  const onSeg = (p, q, r) => cross(p, q, r) === 0 && r[0] >= Math.min(p[0], q[0]) && r[0] <= Math.max(p[0], q[0]) && r[1] >= Math.min(p[1], q[1]) && r[1] <= Math.max(p[1], q[1]);
  const segHit = (a, b, c, d) => {
    const d1 = Math.sign(cross(a, b, c)), d2_ = Math.sign(cross(a, b, d)), d3 = Math.sign(cross(c, d, a)), d4 = Math.sign(cross(c, d, b));
    if (d1 * d2_ < 0 && d3 * d4 < 0) return true;
    return onSeg(a, b, c) || onSeg(a, b, d) || onSeg(c, d, a) || onSeg(c, d, b);
  };
  // a simple polygon: at least 3 different corners, edges meet only at shared corners, not a straight line
  function isSimple(v) {
    const n = v.length;
    if (n < 3) return false;
    for (let i = 0; i < n; i++) for (let j = i + 1; j < n; j++) if (v[i][0] === v[j][0] && v[i][1] === v[j][1]) return false;
    if (area2(v) === 0) return false;
    const E = edges(v);
    for (let i = 0; i < n; i++)
      for (let j = i + 1; j < n; j++) {
        const adj = j === i + 1 || (i === 0 && j === n - 1);
        if (adj) {
          // adjacent edges share one corner: they must not fold back on each other
          const [p, q] = j === i + 1 ? [E[i], E[j]] : [E[j], E[i]]; // p ends where q starts
          const dot = (p[1][0] - p[0][0]) * (q[1][0] - q[0][0]) + (p[1][1] - p[0][1]) * (q[1][1] - q[0][1]);
          if (cross(p[0], p[1], q[1]) === 0 && dot < 0) return false;
        } else if (segHit(E[i][0], E[i][1], E[j][0], E[j][1])) return false;
      }
    return true;
  }
  // even-odd ray test (for a point that is not on the band)
  function pointIn(v, x, y) {
    let inside = false;
    for (const [a, b] of edges(v)) if (a[1] > y !== b[1] > y && x < ((b[0] - a[0]) * (y - a[1])) / (b[1] - a[1]) + a[0]) inside = !inside;
    return inside;
  }
  // pegs strictly inside (pegs on the band are not inside)
  function interior(v) {
    const xs = v.map((p) => p[0]), ys = v.map((p) => p[1]);
    let c = 0;
    for (let x = Math.min(...xs); x <= Math.max(...xs); x++)
      for (let y = Math.min(...ys); y <= Math.max(...ys); y++) if (!edges(v).some(([a, b]) => onSeg(a, b, [x, y])) && pointIn(v, x, y)) c++;
    return c;
  }
  const pick = (v) => interior(v) + boundary(v) / 2 - 1;

  // interior angles in degrees, and their type
  function angles(v) {
    const sg = area2(v) > 0 ? 1 : -1;
    return v.map((V, i) => {
      const P = v[(i + v.length - 1) % v.length];
      const Nx = v[(i + 1) % v.length];
      const a = [V[0] - P[0], V[1] - P[1]];
      const b = [Nx[0] - V[0], Nx[1] - V[1]];
      const turn = (Math.atan2(a[0] * b[1] - a[1] * b[0], a[0] * b[0] + a[1] * b[1]) * 180) / Math.PI;
      const deg = 180 - sg * turn;
      const dot = (P[0] - V[0]) * (Nx[0] - V[0]) + (P[1] - V[1]) * (Nx[1] - V[1]);
      const cr = sg * ((V[0] - P[0]) * (Nx[1] - V[1]) - (V[1] - P[1]) * (Nx[0] - V[0]));
      const type = cr === 0 ? "straight" : cr < 0 ? "reflex" : dot === 0 ? "right" : dot > 0 ? "acute" : "obtuse";
      return { deg, type };
    });
  }
  const isConvex = (v) => angles(v).every((a) => a.type !== "reflex");

  // lines of symmetry: [{ n: [nx, ny], k }] with the line  2 (nx x + ny y) = k
  function symmetry(v) {
    const found = new Map();
    const ekey = (p, q) => [p, q].map((s) => s.join(",")).sort().join(">");
    const E = new Set(edges(v).map(([p, q]) => ekey(p, q)));
    for (let i = 0; i < v.length; i++)
      for (let j = i + 1; j < v.length; j++) {
        const P = v[i], Q = v[j];
        let nx = Q[0] - P[0], ny = Q[1] - P[1];
        const g = gcd(abs(nx), abs(ny));
        nx /= g;
        ny /= g;
        let k = (Q[0] ** 2 + Q[1] ** 2 - P[0] ** 2 - P[1] ** 2) / g;
        if (nx < 0 || (nx === 0 && ny < 0)) {
          nx = -nx;
          ny = -ny;
          k = -k;
        }
        const id = `${nx},${ny},${k}`;
        if (found.has(id)) continue;
        const den = nx * nx + ny * ny;
        // reflect every corner (exactly, as whole numbers over den) and find the corner it lands on
        const map = v.map((X) => {
          const num = 2 * (nx * X[0] + ny * X[1]) - k;
          const ax = X[0] * den - num * nx;
          const ay = X[1] * den - num * ny;
          return v.findIndex((W) => W[0] * den === ax && W[1] * den === ay);
        });
        if (map.some((m) => m < 0)) continue;
        if (edges(v).every(([p, q]) => E.has(ekey(v[map[v.indexOf(p)]], v[map[v.indexOf(q)]])))) found.set(id, { n: [nx, ny], k });
      }
    return [...found.values()];
  }

  const NAMES5 = { 5: "Pentagon", 6: "Hexagon", 7: "Heptagon", 8: "Octagon", 9: "Nonagon", 10: "Decagon" };
  function nameOf(v) {
    const n = v.length;
    if (!isSimple(v)) return "Not a simple shape";
    const ls = sideSq(v);
    if (n === 3) {
      const [a, b, c] = [...ls].sort((x, y) => x - y);
      const right = a + b === c;
      const iso = a === b || b === c;
      return right ? (iso ? "Right isosceles triangle" : "Right scalene triangle") : a === b && b === c ? "Equilateral triangle" : iso ? "Isosceles triangle" : "Scalene triangle";
    }
    if (n === 4) {
      if (!isConvex(v)) return "Concave quadrilateral";
      const para = v[0][0] + v[2][0] === v[1][0] + v[3][0] && v[0][1] + v[2][1] === v[1][1] + v[3][1];
      const rect = para && angles(v).every((a) => a.type === "right");
      const rhomb = para && ls[0] === ls[1];
      if (rect && rhomb) return "Square";
      if (rect) return "Rectangle";
      if (rhomb) return "Rhombus";
      if (para) return "Parallelogram";
      const e = edges(v).map(([p, q]) => [q[0] - p[0], q[1] - p[1]]);
      const par = (a, b) => a[0] * b[1] - a[1] * b[0] === 0;
      if (par(e[0], e[2]) || par(e[1], e[3])) return "Trapezium";
      if ((ls[0] === ls[1] && ls[2] === ls[3]) || (ls[1] === ls[2] && ls[3] === ls[0])) return "Kite";
      return "Quadrilateral";
    }
    return isConvex(v) ? NAMES5[n] || "Polygon" : "Concave polygon";
  }

  // transformations of a corner list; all stay on whole numbers
  function reflect(v, axis, m) {
    // axis "v": vertical line x = m/2; "h": horizontal y = m/2; "d1": y = x; "d2": x + y = 8
    return v.map(([x, y]) => (axis === "v" ? [m - x, y] : axis === "h" ? [x, m - y] : axis === "d1" ? [y, x] : [8 - y, 8 - x]));
  }
  function rotate(v, ang, cx2, cy2) {
    // centre (cx2/2, cy2/2); counter-clockwise; ang 90 | 180 | 270; returns null if a corner would fall off the whole numbers
    const out = v.map(([x, y]) => {
      const dx2 = 2 * x - cx2, dy2 = 2 * y - cy2; // twice the offset
      const [rx, ry] = ang === 90 ? [-dy2, dx2] : ang === 180 ? [-dx2, -dy2] : [dy2, -dx2];
      return [(cx2 + rx) / 2, (cy2 + ry) / 2];
    });
    return out.every((p) => Number.isInteger(p[0]) && Number.isInteger(p[1])) ? out : null;
  }
  const translate = (v, dx, dy) => v.map(([x, y]) => [x + dx, y + dy]);
  const onBoard = (v) => v.every(([x, y]) => x >= 0 && y >= 0 && x < N && y < N);

  const PRESETS = [
    ["Rectangle 3 by 2", [[1, 1], [4, 1], [4, 3], [1, 3]]],
    ["Square 3 by 3", [[1, 1], [4, 1], [4, 4], [1, 4]]],
    ["Right triangle 3, 4", [[1, 1], [4, 1], [1, 5]]],
    ["Parallelogram", [[1, 1], [4, 1], [5, 3], [2, 3]]],
    ["Trapezium", [[1, 1], [5, 1], [4, 3], [2, 3]]],
    ["Kite", [[3, 1], [5, 3], [3, 6], [1, 3]]],
    ["Tilted square", [[3, 1], [5, 3], [3, 5], [1, 3]]],
  ];
  const keyOf = (v) => v.map(([x, y]) => `(${x},${y})`).join(" ");
  const fmtLen = (d) => {
    const r = Math.sqrt(d);
    return Number.isInteger(r) ? String(r) : `√${d}`;
  };
  const round2 = (x) => Math.round(x * 100) / 100;
  const perimText = (v) => {
    const ls = sideSq(v);
    const all = ls.every((d) => Number.isInteger(Math.sqrt(d)));
    const p = perimeter(v);
    return all ? `${Math.round(p)}` : `≈ ${round2(p)}`;
  };

  const ASSUME = "Pegs are one unit apart on a 9 by 9 board. Area and Pick's check only work for a band that does not cross itself. Angles are the angles inside the shape. Lines of symmetry are found exactly for the corners on the pegs. Reflections use vertical, horizontal and diagonal lines.";
  const C_RECT = [
    { key: "shape", label: "Corners", var: true },
    { key: "name", label: "Shape" },
    { key: "perimeter", label: "Perimeter", unit: "units" },
    { key: "area", label: "Area", unit: "square units" },
  ];
  const C_SYM = [
    { key: "shape", label: "Corners", var: true },
    { key: "name", label: "Shape" },
    { key: "sym", label: "Lines of symmetry", d: 0 },
  ];
  const C_ANG = [
    { key: "shape", label: "Corners", var: true },
    { key: "name", label: "Shape" },
    { key: "angles", label: "Angles" },
    { key: "sum", label: "Angle sum", unit: "°" },
  ];
  const C_PICK = [
    { key: "shape", label: "Corners", var: true },
    { key: "area", label: "Area (shoelace)", unit: "square units" },
    { key: "interior", label: "Pegs inside (I)", d: 0 },
    { key: "boundary", label: "Pegs on the band (B)", d: 0 },
    { key: "pick", label: "I + B/2 − 1" },
  ];
  const C_TF = [
    { key: "shape", label: "Corners", var: true },
    { key: "which", label: "Original or image" },
    { key: "perimeter", label: "Perimeter", unit: "units" },
    { key: "area", label: "Area", unit: "square units" },
  ];
  const INVS = [
    {
      id: "rect",
      mode: "draw",
      minCls: 3,
      title: "Area and perimeter of a rectangle",
      question: "A rectangle is 3 units wide and 2 units tall. What are its area and perimeter?",
      predict: { opts: ["Area 5 and perimeter 6", "Area 6 and perimeter 10", "Area 10 and perimeter 6"], ans: 1 },
      vary: "shape",
      held: ["The kind of shape (a rectangle)"],
      go: "Stretch a band round a rectangle 3 units wide and 2 units tall: tap four pegs, then the first one again to close it. Record a run. Then make a bigger or smaller rectangle and record again.",
      columns: C_RECT,
      explain: {
        q: "What do your runs show about area and perimeter?",
        opts: ["Area counts the square units inside the band and perimeter is the length of the band, so they are different measures and change in different ways", "Area and perimeter are always the same number", "Perimeter counts the squares inside the shape"],
        ans: 0,
        why: "For a 3 by 2 rectangle the area is 3 × 2 = 6 square units and the perimeter is 3 + 2 + 3 + 2 = 10 units. Making the rectangle bigger changes both, but not in the same way.",
      },
      graph: { x: "area", y: "perimeter" },
    },
    {
      id: "sym",
      mode: "draw",
      minCls: 3,
      title: "Lines of symmetry of a square and a rectangle",
      question: "How many lines of symmetry does a square have?",
      predict: { opts: ["2", "4", "8"], ans: 1 },
      vary: "shape",
      held: ["The board and the band"],
      go: "Make a square and record a run. Then make a rectangle that is not a square and record again. The dashed lines are the lines of symmetry.",
      columns: C_SYM,
      explain: {
        q: "What do your runs show about lines of symmetry?",
        opts: ["A line of symmetry splits a shape into two mirror halves. A square has 4 lines and a rectangle that is not a square has 2", "Every shape has exactly 2 lines of symmetry", "A rectangle has more lines of symmetry than a square"],
        ans: 0,
        why: "A square folds onto itself along 2 diagonals and 2 lines through the middles of opposite sides: 4 lines. A rectangle that is not a square only folds along the 2 lines through the middles of opposite sides, because its diagonals do not fold it onto itself.",
      },
      graph: { x: "run", y: "sym" },
    },
    {
      id: "angles",
      mode: "draw",
      minCls: 5,
      title: "Angles of a triangle",
      question: "A triangle has one right angle. What kind of angles are the other two?",
      predict: { opts: ["Both acute", "Both obtuse", "One acute and one obtuse"], ans: 0 },
      vary: "shape",
      held: ["The kind of shape (a right-angled triangle)"],
      go: "Make a triangle with a right angle, for example from the corner peg to a peg along a row and a peg up a column. Record a run. Then make a different triangle with a right angle, or one without, and record again.",
      columns: C_ANG,
      explain: {
        q: "What do your runs show about the angles of a triangle?",
        opts: ["The three angles of a triangle add up to 180°, so with one right angle (90°) the other two add up to 90° and are both acute", "The angles of a triangle add up to 360°", "A triangle can have two right angles"],
        ans: 0,
        why: "The angle sum of a triangle is 180°. A right angle takes 90°, so the other two share the remaining 90°, which means each is less than 90° (acute).",
      },
    },
    {
      id: "pick",
      mode: "draw",
      minCls: 7,
      title: "Pick's theorem: count the pegs",
      question: "Which count of pegs gives the area of a shape on the geoboard?",
      predict: { opts: ["Pegs inside plus half the pegs on the band, minus 1", "Pegs inside plus pegs on the band", "Pegs on the band times pegs inside"], ans: 0 },
      vary: "shape",
      held: ["The board and the band"],
      go: "Make a shape and record a run. Then make a different shape, for example a tilted one, and record again. Compare the area with the pegs inside and on the band.",
      columns: C_PICK,
      explain: {
        q: "What do your runs show?",
        opts: ["The area equals I + B/2 − 1 every time, where I is the number of pegs inside and B the number on the band", "The area equals I + B", "The area equals B × I"],
        ans: 0,
        why: "Pick's theorem says that for a shape whose corners are on pegs and whose band does not cross itself, the area is I + B/2 − 1. For a 3 by 2 rectangle I = 2 and B = 10, and 2 + 5 − 1 = 6, which matches 3 × 2.",
      },
      graph: { x: "run", y: "area" },
    },
    {
      id: "reflect",
      mode: "transform",
      minCls: 6,
      preset: [[1, 1], [4, 1], [1, 3]],
      title: "Does a reflection change the size of a shape?",
      question: "When a shape is reflected in a line, what happens to its area and its perimeter?",
      predict: { opts: ["Both change", "Both stay the same", "The area stays the same and the perimeter changes"], ans: 1 },
      vary: "which",
      held: ["The shape (its size and corners are not changed by hand)"],
      go: "A triangle is drawn and reflected in a vertical mirror line. Press Record to record the shape and its image. Then change the mirror line or the kind of move (turn or slide) and record again.",
      columns: C_TF,
      explain: {
        q: "What do your runs show about reflections, turns and slides?",
        opts: ["The image has the same area, perimeter and angles as the original; only its position or direction changes", "The image is always bigger", "The image always has a different perimeter"],
        ans: 0,
        why: "Reflections, rotations and translations move a shape without stretching it, so the lengths of the sides, the angles and the area stay the same. The image is congruent to the original.",
      },
      graph: { x: "run", y: "area" },
    },
  ];
  const STR = [...PRESETS.map((p) => p[0]), "Not a simple shape", "Right isosceles triangle", "Right scalene triangle", "Equilateral triangle", "Isosceles triangle", "Scalene triangle", "Concave quadrilateral", "Square", "Rectangle", "Rhombus", "Parallelogram", "Trapezium", "Kite", "Quadrilateral", ...Object.values(NAMES5), "Polygon", "Concave polygon", "acute", "right", "obtuse", "reflex", "straight", "Original", "Image", "Draw", "Move"];

  Labs.calc.geoboard = { N, pointIn, area2, area, perimeter, boundary, interior, pick, isSimple, angles, symmetry, nameOf, reflect, rotate, translate, onBoard, sideSq, INVS, ASSUME, STR, PRESETS, keyOf, C_RECT, C_SYM, C_ANG, C_PICK, C_TF };

  const PX = (x) => 20 + 40 * x;
  const PY = (y) => 340 - 40 * y;

  function mount(el, api) {
    const cls = api.cls || 8;
    const S = { v: [], closed: false, sel: null, mode: "draw", tf: { kind: "reflect", axis: "v", m: 9, ang: 90, cx2: 8, cy2: 8, dx: 2, dy: 0 }, focus: [0, 0] };
    let flow;
    const invs = INVS.filter((v) => cls >= v.minCls);

    const stage = () => `<div class="gb">
      <div class="ms-tabs" role="group" aria-label="${esc(t("Mode"))}"><button type="button" class="btn" data-mode="draw" aria-pressed="true">${t("Draw")}</button>${cls >= 6 ? `<button type="button" class="btn" data-mode="transform" aria-pressed="false">${t("Move")}</button>` : ""}</div>
      <p class="small muted" data-help></p>
      <div class="vl-boardwrap"><svg class="fw-svg gb-svg" data-board viewBox="0 0 360 360" role="group" aria-label="${esc(t("Geoboard: 9 by 9 pegs"))}"></svg></div>
      <div data-drawctl>
        <div class="vl-ctrl"><label for="gb-pre">${t("Start from a shape")}</label><select id="gb-pre" data-pre><option value="">—</option>${PRESETS.map((p, i) => `<option value="${i}">${esc(t(p[0]))}</option>`).join("")}</select></div>
        <div class="sim-btns"><button type="button" class="btn" data-undo>${icon("reset")} ${t("Undo last peg")}</button><button type="button" class="btn" data-gbclear>${t("Start over")}</button><button type="button" class="btn" data-close>${t("Close the shape")}</button></div>
      </div>
      <div data-tfctl hidden>
        <div class="vl-ctrl"><label for="gb-kind">${t("Move")}</label><select id="gb-kind" data-kind><option value="reflect">${t("Reflect (mirror)")}</option><option value="rotate">${t("Rotate (turn)")}</option><option value="translate">${t("Translate (slide)")}</option></select></div>
        <div data-tfopts></div>
        <div class="sim-btns"><button type="button" class="btn" data-keep>${t("Make the image the shape")}</button></div>
      </div>
      <p class="vl-warn" data-msg role="status"></p>
      <div class="sim-btns"><button type="button" class="btn primary" data-vl-run data-record>${icon("check")} ${t("Record this run")}</button></div></div>`;

    const say = (m, bad) => {
      const e = el.querySelector("[data-msg]");
      e.textContent = m || "";
      e.classList.toggle("is-bad", !!bad);
    };
    const has = (p) => S.v.findIndex((q) => q[0] === p[0] && q[1] === p[1]);
    const shapeOK = () => S.closed && isSimple(S.v);

    // the image under the chosen move (null if none can be made)
    function image() {
      if (!shapeOK()) return null;
      const f = S.tf;
      if (f.kind === "reflect") return reflect(S.v, f.axis, f.axis === "v" || f.axis === "h" ? f.m : 0);
      if (f.kind === "rotate") return rotate(S.v, f.ang, f.cx2, f.cy2);
      return translate(S.v, f.dx, f.dy);
    }

    // ----- drawing -----
    function drawBoard() {
      const v = S.v;
      const simple = S.closed && isSimple(v);
      const inside = new Set(), onBand = new Set();
      if (simple) {
        const xs = v.map((p) => p[0]), ys = v.map((p) => p[1]);
        for (let x = Math.min(...xs); x <= Math.max(...xs); x++)
          for (let y = Math.min(...ys); y <= Math.max(...ys); y++) {
            if (edges(v).some(([a, b]) => onSeg(a, b, [x, y]))) onBand.add(`${x},${y}`);
            else if (pointIn(v, x, y)) inside.add(`${x},${y}`);
          }
      }
      let s = `<rect class="gb-bg" x="2" y="2" width="356" height="356" rx="12"/>`;
      // lines of symmetry
      if (simple && S.mode === "draw") {
        for (const a of symmetry(v)) {
          const den = a.n[0] ** 2 + a.n[1] ** 2;
          const p0 = [(a.k * a.n[0]) / (2 * den), (a.k * a.n[1]) / (2 * den)];
          const dir = [-a.n[1], a.n[0]];
          const L = 14;
          s += `<line class="gb-sym" x1="${PX(p0[0] - dir[0] * L)}" y1="${PY(p0[1] - dir[1] * L)}" x2="${PX(p0[0] + dir[0] * L)}" y2="${PY(p0[1] + dir[1] * L)}"/>`;
        }
      }
      // transformation image and mirror
      const img = S.mode === "transform" ? image() : null;
      if (S.mode === "transform" && shapeOK()) {
        const f = S.tf;
        if (f.kind === "reflect") {
          const line = f.axis === "v" ? [f.m / 2, 0, f.m / 2, 8] : f.axis === "h" ? [0, f.m / 2, 8, f.m / 2] : f.axis === "d1" ? [0, 0, 8, 8] : [0, 8, 8, 0];
          s += `<line class="gb-mirror" x1="${PX(line[0])}" y1="${PY(line[1])}" x2="${PX(line[2])}" y2="${PY(line[3])}"/>`;
        } else if (f.kind === "rotate") s += `<g class="gb-centre"><circle cx="${PX(f.cx2 / 2)}" cy="${PY(f.cy2 / 2)}" r="9"/><path d="M${PX(f.cx2 / 2) - 12} ${PY(f.cy2 / 2)}h24M${PX(f.cx2 / 2)} ${PY(f.cy2 / 2) - 12}v24"/></g>`;
        if (img) s += `<polygon class="gb-image" points="${img.map(([x, y]) => `${PX(x)},${PY(y)}`).join(" ")}"/>`;
      }
      // the band
      if (v.length > 1) {
        const pts = v.map(([x, y]) => `${PX(x)},${PY(y)}`).join(" ");
        s += S.closed ? `<polygon class="gb-band ${simple ? "" : "gb-bad"}" points="${pts}"/>` : `<polyline class="gb-band-open" points="${pts}"/>`;
      }
      // pegs
      for (let x = 0; x < N; x++)
        for (let y = 0; y < N; y++) {
          const vi = has([x, y]);
          const cl = vi >= 0 ? "gb-v" + (S.sel === vi ? " gb-sel" : "") : inside.has(`${x},${y}`) ? "gb-in" : onBand.has(`${x},${y}`) ? "gb-on" : "";
          const lab = vi >= 0 ? t("Peg {x}, {y}: corner {n}", { x, y, n: vi + 1 }) : t("Peg {x}, {y}", { x, y });
          const tab = x === S.focus[0] && y === S.focus[1] ? 0 : -1;
          s += `<g data-peg="${x},${y}" role="button" tabindex="${tab}" aria-label="${esc(lab)}"><circle class="gb-hit" cx="${PX(x)}" cy="${PY(y)}" r="19"/><circle class="gb-peg ${cl}" cx="${PX(x)}" cy="${PY(y)}" r="${vi >= 0 ? 7 : 4.5}"/></g>`;
        }
      v.forEach(([x, y], i) => (s += `<text class="gb-num" x="${PX(x) + 10}" y="${PY(y) - 9}">${i + 1}</text>`));
      el.querySelector("[data-board]").innerHTML = s;
    }
    function tfOptions() {
      const f = S.tf;
      const stp = (k, label, lo, hi, val) => `<div class="fw-frac"><span class="fw-lab">${t(label)}</span><span class="fw-st"><button type="button" class="btn at-btn" data-tf="${k}" data-d="-1" aria-label="${esc(t("Decrease {x}", { x: t(label) }))}">−</button><output class="at-val" data-tfv="${k}">${val}</output><button type="button" class="btn at-btn" data-tf="${k}" data-d="1" aria-label="${esc(t("Increase {x}", { x: t(label) }))}">+</button></span></div>`;
      const host = el.querySelector("[data-tfopts]");
      if (f.kind === "reflect") {
        host.innerHTML = `<div class="vl-ctrl"><label for="gb-axis">${t("Mirror line")}</label><select id="gb-axis" data-axis><option value="v">${t("Vertical line")}</option><option value="h">${t("Horizontal line")}</option><option value="d1">${t("Diagonal y = x")}</option><option value="d2">${t("Diagonal x + y = 8")}</option></select></div>${f.axis === "v" || f.axis === "h" ? `<div class="fw-steps">${stp("m", f.axis === "v" ? "Line at x" : "Line at y", 0, 16, f.m / 2)}</div>` : ""}`;
        host.querySelector("[data-axis]").value = f.axis;
      } else if (f.kind === "rotate") {
        host.innerHTML = `<div class="vl-ctrl"><label for="gb-ang">${t("Turn by")}</label><select id="gb-ang" data-ang><option value="90">90°</option><option value="180">180°</option><option value="270">270°</option></select><span class="small muted">${t("anticlockwise")}</span></div><div class="fw-steps">${stp("cx2", "Centre x", 0, 16, f.cx2 / 2)}${stp("cy2", "Centre y", 0, 16, f.cy2 / 2)}</div>`;
        host.querySelector("[data-ang]").value = String(f.ang);
      } else host.innerHTML = `<div class="fw-steps">${stp("dx", "Slide right by", -8, 8, f.dx)}${stp("dy", "Slide up by", -8, 8, f.dy)}</div>`;
      el.querySelector("[data-kind]").value = f.kind;
    }

    const angText = (v) => angles(v).map((a) => `${round2(a.deg)}°`).join(", ");
    function angSummary(v) {
      const c = {};
      angles(v).forEach((a) => (c[a.type] = (c[a.type] || 0) + 1));
      return Object.entries(c).map(([k, n]) => `${n} ${t(k)}`).join(", ");
    }
    function sidesText(v) {
      return sideSq(v).map(fmtLen).join(", ");
    }

    function rows() {
      const v = S.v;
      if (!S.closed) {
        const len = v.length > 1 ? round2(v.slice(1).reduce((s, p, i) => s + Math.sqrt(d2(p, v[i])), 0)) : 0;
        return [[t("Corners so far"), String(v.length)], [t("Band length so far"), `${len} ${t("units")}`], [t("Next step"), v.length >= 3 ? t("Tap the first peg to close the shape.") : t("Tap pegs to stretch the band.")]];
      }
      if (!isSimple(v)) return [[t("Shape"), t("Not a simple shape")], [t("Why"), v.length < 3 ? t("A shape needs at least 3 corners.") : t("The band crosses itself or runs along itself, so area and Pick's check do not apply.")]];
      const A = area(v);
      const I = interior(v);
      const B = boundary(v);
      const P = I + B / 2 - 1;
      const sy = symmetry(v);
      const r = [
        [t("Shape"), t(nameOf(v))],
        [t("Side lengths"), `${sidesText(v)} ${t("units")}`],
        [t("Perimeter"), `${perimText(v)} ${t("units")}`],
        [t("Area"), `${A} ${t("square units")}`],
        [t("Pick's check"), `${I} + ${B}/2 − 1 = ${P} ${P === A ? "✓" : "✗"}`],
        [t("Angles"), `${angText(v)} (${angSummary(v)})`],
        [t("Lines of symmetry"), String(sy.length)],
      ];
      if (S.mode === "transform") {
        const img = image();
        if (!img) r.push([t("Image"), t("This turn does not land on pegs. Try a centre on a peg.")]);
        else {
          r.push([t("Image area and perimeter"), `${area(img)} ${t("square units")}, ${perimText(img)} ${t("units")}`]);
          r.push([t("Image"), onBoard(img) ? t("Same size and shape as the original (congruent).") : t("Part of the image is off the board.")]);
        }
      }
      return r;
    }

    function help() {
      el.querySelector("[data-help]").textContent =
        S.mode === "draw"
          ? S.closed
            ? t("Tap a corner to pick it up, then tap an empty peg to move it. Or drag a corner.")
            : t("Tap pegs one after another to stretch the band. Tap the first peg again to close the shape. Arrow keys move between pegs.")
          : t("Choose a move. The dashed shape is the image. Make the image the shape to move again.");
    }

    function paint() {
      el.querySelectorAll("[data-mode]").forEach((b) => b.setAttribute("aria-pressed", b.dataset.mode === S.mode));
      el.querySelector("[data-drawctl]").hidden = S.mode !== "draw";
      el.querySelector("[data-tfctl]").hidden = S.mode !== "transform";
      if (S.mode === "transform") tfOptions();
      help();
      drawBoard();
      const r = rows();
      const board = el.querySelector("[data-board]");
      board.setAttribute("aria-label", t("Geoboard: 9 by 9 pegs") + (S.v.length ? ". " + t("Corners") + ": " + keyOf(S.v) : ""));
      flow.live(r, r.map(([k, v]) => `${k}: ${v}`).join(". "));
      const close = el.querySelector("[data-close]");
      if (close) close.disabled = S.closed || S.v.length < 3;
      const undo = el.querySelector("[data-undo]");
      if (undo) undo.disabled = !S.v.length;
    }

    function tapPeg(p, focusAfter = true) {
      S.focus = p;
      const i = has(p);
      if (S.mode === "transform") return say(t("Use the Draw mode to change the corners."));
      if (i >= 0) {
        if (!S.closed) {
          if (i === 0 && S.v.length >= 3) {
            S.closed = true;
            say(isSimple(S.v) ? "" : t("The band crosses itself. Move a corner or start over."), !isSimple(S.v));
          } else say(t("That peg is already a corner."), true);
        } else {
          S.sel = S.sel === i ? null : i;
          say(S.sel == null ? "" : t("Corner {n} picked up. Tap an empty peg to move it there.", { n: i + 1 }));
        }
      } else if (!S.closed) {
        S.v.push(p);
        say("");
      } else if (S.sel != null) {
        S.v[S.sel] = p;
        S.sel = null;
        say(isSimple(S.v) ? "" : t("The band crosses itself. Move a corner or start over."), !isSimple(S.v));
      } else say(t("The shape is closed. Tap a corner to pick it up, or press Start over."));
      paint();
      if (focusAfter) {
        const g = el.querySelector(`[data-peg="${p[0]},${p[1]}"]`);
        if (g) g.focus({ preventScroll: true });
      }
    }

    function setShape(v, closed) {
      S.v = v.map((p) => p.slice());
      S.closed = closed;
      S.sel = null;
    }

    function recordRun(F) {
      const v = S.v;
      if (!shapeOK()) return say(t("Close a shape that does not cross itself first."), true);
      const inv = F.inv;
      const row = (shape, which, w) => ({
        shape: keyOf(shape),
        name: t(nameOf(shape)),
        which,
        perimeter: perimeter(shape),
        area: area(shape),
        interior: interior(shape),
        boundary: boundary(shape),
        pick: `${interior(shape) + boundary(shape) / 2 - 1}`,
        sym: symmetry(shape).length,
        angles: angText(shape),
        sum: angles(shape).reduce((s, a) => s + a.deg, 0),
        ...w,
      });
      say("");
      if (inv.mode === "transform") {
        const img = image();
        if (!img) return say(t("This turn does not land on pegs. Try a centre on a peg."), true);
        if (F.addRun(row(v, t("Original")))) F.addRun(row(img, t("Image")));
        return;
      }
      F.addRun(row(v, ""));
    }

    // ----- dragging a corner -----
    function dragSetup(svg) {
      svg.addEventListener("pointerdown", (e) => {
        const g = e.target.closest("[data-peg]");
        if (!g || S.mode !== "draw") return;
        const [x, y] = g.dataset.peg.split(",").map(Number);
        const i = has([x, y]);
        if (i < 0) return;
        const start = [e.clientX, e.clientY];
        let moved = false;
        const toPeg = (ev) => {
          const m = svg.getScreenCTM().inverse();
          const pt = new DOMPoint(ev.clientX, ev.clientY).matrixTransform(m);
          return [Math.max(0, Math.min(N - 1, Math.round((pt.x - 20) / 40))), Math.max(0, Math.min(N - 1, Math.round((340 - pt.y) / 40)))];
        };
        const move = (ev) => {
          if (!moved && Math.hypot(ev.clientX - start[0], ev.clientY - start[1]) < 8) return;
          moved = true;
          ev.preventDefault();
          const p = toPeg(ev);
          const k = has(p);
          if (k < 0 || k === i) {
            S.v[i] = p;
            paint();
          }
        };
        const end = () => {
          document.removeEventListener("pointermove", move);
          document.removeEventListener("pointerup", end);
          document.removeEventListener("pointercancel", end);
          if (moved) {
            svg.dataset.dragged = "1";
            setTimeout(() => delete svg.dataset.dragged, 0);
            S.sel = null;
            say(S.closed && !isSimple(S.v) ? t("The band crosses itself. Move a corner or start over.") : "", S.closed && !isSimple(S.v));
            paint();
          }
        };
        document.addEventListener("pointermove", move, { passive: false });
        document.addEventListener("pointerup", end);
        document.addEventListener("pointercancel", end);
      });
    }

    flow = Labs.flow(el, api, {
      assumptions: ASSUME,
      columns: C_RECT,
      investigations: invs,
      extra: () => ({ corners: S.v.map((p) => p.slice()), closed: S.closed, mode: S.mode, move: S.mode === "transform" ? { ...S.tf } : null }),
      mountStage(slot, F) {
        flow = F;
        slot.innerHTML = stage();
        const svg = slot.querySelector("[data-board]");
        dragSetup(svg);
        slot.addEventListener("click", (e) => {
          const pg = e.target.closest("[data-peg]");
          if (pg) {
            if (svg.dataset.dragged) return;
            return tapPeg(pg.dataset.peg.split(",").map(Number));
          }
          const md = e.target.closest("[data-mode]");
          if (md) {
            S.mode = md.dataset.mode;
            say("");
            return paint();
          }
          if (e.target.closest("[data-undo]")) {
            if (S.closed) S.closed = false;
            else S.v.pop();
            S.sel = null;
            say("");
            return paint();
          }
          if (e.target.closest("[data-gbclear]")) {
            setShape([], false);
            say("");
            return paint();
          }
          if (e.target.closest("[data-close]")) {
            if (S.v.length >= 3) S.closed = true;
            say(isSimple(S.v) ? "" : t("The band crosses itself. Move a corner or start over."), !isSimple(S.v));
            return paint();
          }
          const tf = e.target.closest("[data-tf]");
          if (tf) {
            const k = tf.dataset.tf;
            const d = Number(tf.dataset.d);
            const lim = { m: [0, 16], cx2: [0, 16], cy2: [0, 16], dx: [-8, 8], dy: [-8, 8] }[k];
            S.tf[k] = Math.max(lim[0], Math.min(lim[1], S.tf[k] + d));
            paint();
            const again = el.querySelector(`[data-tf="${k}"][data-d="${tf.dataset.d}"]`);
            return again && again.focus({ preventScroll: true });
          }
          if (e.target.closest("[data-keep]")) {
            const img = image();
            if (!img) return say(t("This turn does not land on pegs. Try a centre on a peg."), true);
            if (!onBoard(img)) return say(t("Part of the image is off the board, so it cannot become the shape."), true);
            setShape(img, true);
            say(t("The image is now the shape."));
            return paint();
          }
          if (e.target.closest("[data-record]")) recordRun(F);
        });
        slot.addEventListener("change", (e) => {
          if (e.target.matches("[data-pre]")) {
            const i = e.target.value;
            if (i !== "") setShape(PRESETS[Number(i)][1], true);
            e.target.value = "";
            say("");
            return paint();
          }
          if (e.target.matches("[data-kind]")) {
            S.tf.kind = e.target.value;
            return paint();
          }
          if (e.target.matches("[data-axis]")) {
            S.tf.axis = e.target.value;
            return paint();
          }
          if (e.target.matches("[data-ang]")) {
            S.tf.ang = Number(e.target.value);
            return paint();
          }
        });
        slot.addEventListener("keydown", (e) => {
          const g = e.target.closest && e.target.closest("[data-peg]");
          if (!g) return;
          const [x, y] = g.dataset.peg.split(",").map(Number);
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            return tapPeg([x, y]);
          }
          const d = { ArrowRight: [1, 0], ArrowLeft: [-1, 0], ArrowUp: [0, 1], ArrowDown: [0, -1] }[e.key];
          if (!d) return;
          e.preventDefault();
          const nx = Math.max(0, Math.min(N - 1, x + d[0]));
          const ny = Math.max(0, Math.min(N - 1, y + d[1]));
          S.focus = [nx, ny];
          svg.querySelectorAll("[data-peg]").forEach((p) => (p.tabIndex = -1));
          const nxt = svg.querySelector(`[data-peg="${nx},${ny}"]`);
          nxt.tabIndex = 0;
          nxt.focus();
        });
      },
      onInvestigation(inv) {
        setShape(inv.preset || [], !!inv.preset);
        S.mode = inv.mode;
        if (inv.id === "reflect") S.tf = { kind: "reflect", axis: "v", m: 9, ang: 90, cx2: 8, cy2: 8, dx: 2, dy: 0 };
        say("");
        paint();
      },
    });
  }

  Labs.register("geoboard", {
    title: "Geometry board",
    area: "maths",
    icon: "angle",
    objective: "Stretch a band round pegs on a geoboard to make shapes. Read their perimeter, area, angles and lines of symmetry, check the area with Pick's theorem, and reflect, rotate or slide a shape to see what stays the same.",
    chapters: [
      { cls: 3, subject: "maths", chapter: "shapes-2d-and-3d" },
      { cls: 4, subject: "maths", chapter: "shapes-lines-and-angles" },
      { cls: 4, subject: "maths", chapter: "perimeter-and-area" },
      { cls: 4, subject: "maths", chapter: "patterns-and-symmetry" },
      { cls: 5, subject: "maths", chapter: "angles" },
      { cls: 5, subject: "maths", chapter: "perimeter-and-area" },
      { cls: 6, subject: "maths", chapter: "lines-and-angles" },
      { cls: 6, subject: "maths", chapter: "perimeter-and-area" },
      { cls: 6, subject: "maths", chapter: "symmetry" },
      { cls: 6, subject: "mathspb", chapter: "understanding-elementary-shapes" },
      { cls: 6, subject: "mathspb", chapter: "mensuration" },
      { cls: 6, subject: "mathspb", chapter: "symmetry" },
      { cls: 7, subject: "maths", chapter: "geometric-twins" },
      { cls: 7, subject: "mathspb", chapter: "perimeter-and-area" },
      { cls: 7, subject: "mathspb", chapter: "symmetry" },
      { cls: 8, subject: "maths", chapter: "quadrilaterals" },
      { cls: 8, subject: "maths", chapter: "area" },
      { cls: 8, subject: "mathspb", chapter: "understanding-quadrilaterals" },
      { cls: 8, subject: "mathspb", chapter: "mensuration" },
      { cls: 9, subject: "maths", chapter: "measuring-space-perimeter-and-area" },
      { cls: 9, subject: "mathspb", chapter: "quadrilaterals" },
      { cls: 10, subject: "maths", chapter: "coordinate-geometry" },
    ],
    mount,
  });
})();
