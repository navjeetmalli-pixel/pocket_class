// Question generators: a formula with fresh numbers every time, so maths and physics practice never runs out.
// Each generator gets a seeded random source R and returns { q, a, wrong: [3 distractors], steps }.
// Gen.forChapter(cls, subject, chapterId) lists the generators that fit a chapter; Gen.make turns one into
// a quiz item (q, options, answer, explain) plus the worked steps for answer keys.

const Gen = (() => {
  // ---------- seeded random ----------
  function rng(seed) {
    let a = seed >>> 0 || 1;
    const next = () => {
      a = (a + 0x6d2b79f5) >>> 0;
      let t = a;
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
    const R = {
      next,
      int: (lo, hi) => lo + Math.floor(next() * (hi - lo + 1)),
      pick: (arr) => arr[Math.floor(next() * arr.length)],
      nz: (lo, hi) => {
        let n = 0;
        while (n === 0) n = R.int(lo, hi);
        return n;
      },
      sign: () => (next() < 0.5 ? -1 : 1),
    };
    return R;
  }

  // ---------- formatting ----------
  const n = (x) => {
    // Indian digit grouping (1,00,000) for the Indian boards, ordinary grouping for International learners; at most 2 decimal places.
    const r = Math.round(x * 100) / 100;
    const s = Math.abs(r) >= 1000 ? Math.abs(r).toLocaleString(typeof Money !== "undefined" ? Money.locale() : "en-IN", { maximumFractionDigits: 2 }) : String(Math.abs(r));
    return (r < 0 ? "−" : "") + s;
  };
  // Money uses the learner's currency symbol (Money.fmt, js/international.js): ₹ for CBSE and PSEB, A$, C$, £, $ or NZ$ for International.
  const cur = () => (typeof Money !== "undefined" ? Money.symbol() : "₹"); // (the check scripts load this file alone)
  const rs = (x) => cur() + n(x);
  const gcd = (a, b) => (b ? gcd(b, a % b) : Math.abs(a));
  const lcm = (a, b) => Math.abs(a * b) / gcd(a, b);
  function fr(num, den) {
    if (den < 0) (num = -num), (den = -den);
    const g = gcd(num, den) || 1;
    num /= g;
    den /= g;
    return den === 1 ? n(num) : `${num < 0 ? "−" : ""}${Math.abs(num)}/${den}`;
  }
  const sq = (x) => x * x;
  const sup = { 2: "²", 3: "³" };
  // ax² + bx + c style with sensible signs.
  function poly(coefs, v = "x") {
    const deg = coefs.length - 1;
    const parts = [];
    coefs.forEach((c, i) => {
      if (!c) return;
      const p = deg - i;
      const abs = Math.abs(c);
      const coef = abs === 1 && p > 0 ? "" : String(abs);
      const term = p === 0 ? coef : p === 1 ? `${coef}${v}` : `${coef}${v}${sup[p] || "^" + p}`;
      parts.push({ s: c < 0 ? "−" : "+", term });
    });
    if (!parts.length) return "0";
    return parts.map((t, i) => (i === 0 ? (t.s === "−" ? "−" : "") + t.term : ` ${t.s} ${t.term}`)).join("");
  }

  // Three distinct wrong answers near the right one. A candidate may be tagged with how it was made, as { v, k } with k one of
  // "slip" (off by a little), "sign", "scale" (a power of ten), "method" (a different operation or rule); the tags come back as
  // `.kinds` on the returned list (same order) and end up in Gen.make's `kinds`. Untagged ones are "unknown".
  function near(ans, cands, R, fmt = n) {
    const out = [];
    out.kinds = [];
    const seen = new Set([fmt(ans)]);
    for (const c0 of cands) {
      const tagged = c0 !== null && typeof c0 === "object";
      const c = tagged ? c0.v : c0;
      const s = typeof c === "string" ? c : fmt(c);
      if (!seen.has(s) && out.length < 3) {
        seen.add(s);
        out.push(s);
        out.kinds.push(tagged ? c0.k : undefined);
      }
    }
    let k = 1;
    while (out.length < 3 && k < 50) {
      const c = typeof ans === "number" ? ans + R.sign() * k * (Number.isInteger(ans) ? 1 : 0.5) : null;
      if (c !== null) {
        const s = fmt(c);
        if (!seen.has(s)) {
          seen.add(s);
          out.push(s);
          out.kinds.push("slip");
        }
      }
      k++;
    }
    return out;
  }

  // ---------- chemistry helpers ----------
  const rd2 = (x) => Math.round(x * 100) / 100;
  // A number to `sf` significant figures without exponent notation (Indian grouping from 1000 up).
  function fm(x, sf = 3) {
    const v = parseFloat(Number(x).toPrecision(sf));
    let s = Math.abs(v).toString();
    if (/e/.test(s)) s = Math.abs(v) < 1 ? Math.abs(v).toFixed(12).replace(/0+$/, "") : Math.abs(v).toLocaleString("en-IN", { useGrouping: false });
    else if (Math.abs(v) >= 1000) s = Math.abs(v).toLocaleString("en-IN", { maximumFractionDigits: 6 });
    return (v < 0 ? "−" : "") + s;
  }
  // Scientific notation: 3.01 × 10²³ (sf significant figures).
  function sci(x, sf = 3) {
    if (!x) return "0";
    let e = Math.floor(Math.log10(Math.abs(x)));
    let m = x / 10 ** e;
    if (parseFloat(m.toFixed(sf - 1)) >= 10) (m /= 10), e++;
    return `${m.toFixed(sf - 1)} × 10${toSup(e)}`;
  }
  // Wrong answers for chemistry: the usual slips first, then simple scalings, finite values only.
  const nr = (ans, cands, R, fmt = n) => {
    const ok = (c) => typeof c === "string" || Number.isFinite(c);
    const extra = typeof ans !== "number" ? [] : Number.isInteger(ans) ? [ans + 1, ans - 1, ans * 2, ans + 2, ans * 10] : [ans * 2, ans / 2, ans * 10, ans / 10, ans + 1];
    return near(ans, [...cands.filter(ok), ...extra], R, fmt);
  };
  // Boiling-point elevation (kind "b") and freezing-point depression (kind "f") for a solute in water.
  function colligative(R, kind) {
    const b = kind === "b", K = b ? 0.52 : 1.86, sym = b ? "ΔTb" : "ΔTf", kn = b ? "Kb" : "Kf";
    const sol = R.pick([["urea", 60], ["glucose", 180], ["sucrose", 342]]);
    const mol = R.pick([0.05, 0.1, 0.2, 0.25, 0.5, 1]), mass = mol * sol[1];
    const W = R.pick([250, 500, 1000]), m = mol / (W / 1000), dT = K * m;
    const head = `${n(mass)} g of ${sol[0]} (molar mass ${sol[1]} g/mol) is dissolved in ${W} g of water. (${kn} of water = ${K} K kg/mol)`;
    const s1 = `Molality m = ${n(mass)} ÷ ${sol[1]} ÷ ${fm(W / 1000)} = ${fm(m)} mol/kg`;
    const s2 = `${sym} = ${kn} × m = ${K} × ${fm(m)} = ${fm(dT)} K`;
    if (R.next() < 0.5) return { q: `${head} Find the ${b ? "elevation in boiling point" : "depression in freezing point"}. (3 significant figures)`, a: `${fm(dT)} K`, wrong: nr(dT, [K / m, dT * 1000, m / K], R, (x) => `${fm(x)} K`), steps: [s1, s2] };
    const pt = b ? 100 + dT : -dT;
    return { q: `${head} Find the ${b ? "boiling point" : "freezing point"} of the solution in °C. (${b ? "boiling point of water = 100 °C" : "freezing point of water = 0 °C"}; 2 decimal places)`, a: `${n(pt)} °C`, wrong: nr(pt, [b ? 100 - dT : dT, b ? dT : -dT * 10, b ? 100 + K / m : -(K / m)], R, (x) => `${n(x)} °C`), steps: [s1, s2, `${b ? "Boiling" : "Freezing"} point = ${b ? `100 + ${fm(dT)}` : `0 − ${fm(dT)}`} = ${n(pt)} °C`] };
  }

  // ---------- picture helpers ----------
  // The picture kit (js/pics.js) may be missing (an old cached copy); picture generators then throw and Gen.make skips them.
  const picKit = () => { if (typeof Pics === "undefined" || !Pics || !Pics.svg) throw new Error("no picture kit"); return Pics; };
  const PLURAL = { mango: "mangoes", butterfly: "butterflies", strawberry: "strawberries", leaf: "leaves", fish: "fish", bus: "buses", "auto-rickshaw": "auto-rickshaws" };
  const plural = (nm) => PLURAL[nm] || nm + "s";
  const count = (k, nm) => `${k} ${k === 1 ? nm : plural(nm)}`;
  const COUNTABLE = ["apple", "mango", "banana", "orange", "balloon", "ball", "star", "flower", "kite", "pencil", "book", "bird", "butterfly", "fish", "duck", "car", "cup", "laddoo", "egg", "umbrella", "cap", "shoe", "diya", "leaf"];
  // `k` different things to draw, drawn from the kit's own names.
  function pickItems(R, k) {
    const have = picKit().names;
    const pool = COUNTABLE.filter((x) => !have || have.includes(x));
    const out = [];
    while (out.length < k && pool.length) out.push(pool.splice(R.int(0, pool.length - 1), 1)[0]);
    if (out.length < k) throw new Error("not enough picture items");
    return out;
  }
  const GONE = { bird: ["fly away", "flies away"], butterfly: ["fly away", "flies away"], apple: ["are eaten", "is eaten"], mango: ["are eaten", "is eaten"], banana: ["are eaten", "is eaten"], orange: ["are eaten", "is eaten"], laddoo: ["are eaten", "is eaten"], egg: ["are eaten", "is eaten"], balloon: ["fly away", "flies away"] };
  // One item size for two groups drawn side by side (each 140 wide): the smaller group's items must not look bigger.
  const same2 = (P, a, b, h) => (P.rowSize ? Math.min(P.rowSize(a, { w: 140, h }), P.rowSize(b, { w: 140, h })) : undefined);
  function picAddQ(R, lo, hi, max, minTotal = 2) {
    const P = picKit(), nm = pickItems(R, 1)[0];
    let a, b;
    do { a = R.int(lo, hi); b = R.int(lo === 1 ? 1 : 3, hi); } while (a + b > max || a + b < minTotal);
    const tot = a + b, lab = `${count(a, nm)} and ${count(b, nm)} more`, big = tot > 10, h = big ? 130 : 100;
    const cands = [{ v: tot + 1, k: "slip" }, { v: tot - 1, k: "slip" }, { v: Math.abs(a - b), k: "method" }, { v: a, k: "method" }, { v: tot + 2, k: "slip" }].filter((c) => c.v >= 0 && c.v <= max + 2);
    return { q: `${count(a, nm)} and ${count(b, nm)} more. How many ${plural(nm)} in all?`, a: n(tot), wrong: near(tot, cands, R), steps: [`Put the groups together: ${a} + ${b}.`, `${a} + ${b} = ${tot}`], picAlt: lab, pic: P.svg(`<g>${P.row(nm, a, { w: 140, h, s: same2(P, a, b, h) })}</g><path d="M150 ${h / 2 - 9}v18M141 ${h / 2}h18" stroke="currentColor" stroke-width="4" stroke-linecap="round" opacity="0.7"/><g transform="translate(160,0)">${P.row(nm, b, { w: 140, h, s: same2(P, a, b, h) })}</g>`, { w: 300, h, label: lab }) };
  }
  function picSubQ(R, lo, hi) {
    const P = picKit(), nm = pickItems(R, 1)[0], N = R.int(lo, hi), k = R.int(1, Math.min(N - 1, lo > 10 ? 9 : N - 1)), left = N - k;
    const v = GONE[nm] || ["are taken away", "is taken away"], vb = k === 1 ? v[1] : v[0], lab = `${count(N, nm)}, ${k} of them gone`, h = N > 10 ? 130 : 100;
    const cands = [{ v: left + 1, k: "slip" }, { v: left - 1, k: "slip" }, { v: N + k, k: "method" }, { v: left + 2, k: "slip" }, { v: k, k: "method" }].filter((c) => c.v >= 0 && c.v <= 20);
    return { q: `There ${N === 1 ? "is" : "are"} ${count(N, nm)}. ${k} ${vb}. How many ${plural(nm)} are left?`, a: n(left), wrong: near(left, cands, R), steps: [`Start with ${N}. Take away ${k}.`, `${N} − ${k} = ${left}`], picAlt: lab, pic: P.svg(`<g>${P.row(nm, left, { w: 140, h, s: same2(P, left, k, h) })}</g><g transform="translate(160,0)"><g opacity="0.35">${P.row(nm, k, { w: 140, h, s: same2(P, left, k, h) })}</g><path d="M5 ${h - 10}L135 10M135 ${h - 10}L5 10" stroke="currentColor" stroke-width="5" stroke-linecap="round" fill="none"/></g>`, { w: 300, h, label: lab }) };
  }
  function picShapeQ(R, kinds) {
    const P = picKit(), kind = R.pick(kinds), lab = `A ${kind}`;
    const hint = { circle: "It is round with no corners.", square: "It has 4 equal sides.", triangle: "It has 3 sides.", rectangle: "It has 4 sides; opposite sides are equal.", oval: "It is round and long, like an egg.", star: "It has points.", cube: "All its faces are squares.", cuboid: "It is a box shape with rectangle faces.", cone: "It has a point at the top and a round base.", cylinder: "It has two round flat faces and a curved side.", sphere: "It is round like a ball." };
    const copy = kinds.filter((x) => x !== kind), wrong = [];
    while (wrong.length < 3 && copy.length) wrong.push(copy.splice(R.int(0, copy.length - 1), 1)[0]);
    return { q: "What is this shape called?", a: kind, wrong, kinds: ["method", "method", "method"], steps: [hint[kind], `It is a ${kind}.`], picAlt: lab, pic: P.svg(P.shape({ x: 100, y: 78, s: 140, kind }), { w: 200, h: 160, label: lab }) };
  }

  // ---------- generators ----------
  // Each: (R) => { q, a, wrong, steps }
  const G = {
    // Primary arithmetic
    add1: (R) => { const a = R.int(1, 5), b = R.int(1, 4); return { q: `${a} + ${b} = ?`, a: n(a + b), wrong: near(a + b, [a + b + 1, a + b - 1, a], R), steps: [`Count on ${b} from ${a}.`] }; },
    sub1: (R) => { const a = R.int(3, 9), b = R.int(1, a); return { q: `${a} − ${b} = ?`, a: n(a - b), wrong: near(a - b, [a + b, a - b + 1, a - b - 1], R), steps: [`Count back ${b} from ${a}.`] }; },
    add2: (R) => { const a = R.int(15, 79), b = R.int(12, 99 - a); return { q: `${a} + ${b} = ?`, a: n(a + b), wrong: near(a + b, [a + b + 10, a + b - 10, a + b - 1], R), steps: [`Ones: ${a % 10} + ${b % 10} = ${(a % 10) + (b % 10)}`, `Tens: ${Math.floor(a / 10)} + ${Math.floor(b / 10)} (plus any carry)`, `Answer: ${a + b}`] }; },
    sub2: (R) => { const a = R.int(30, 99), b = R.int(11, a - 5); return { q: `${a} − ${b} = ?`, a: n(a - b), wrong: near(a - b, [a - b + 10, a - b - 10, a + b], R), steps: [`Subtract ones, borrowing a ten if needed, then subtract tens.`, `Check: ${a - b} + ${b} = ${a}`] }; },
    add3: (R) => { const a = R.int(120, 6000), b = R.int(100, 3999); return { q: `${n(a)} + ${n(b)} = ?`, a: n(a + b), wrong: near(a + b, [a + b + 100, a + b - 10, a + b + 1000], R), steps: [`Add column by column from the ones place, carrying when a column passes 9.`] }; },
    sub3: (R) => { const a = R.int(500, 9999), b = R.int(100, a - 50); return { q: `${n(a)} − ${n(b)} = ?`, a: n(a - b), wrong: near(a - b, [a - b + 100, a - b - 10, a - b + 1000], R), steps: [`Subtract column by column from the ones place, borrowing when needed.`, `Check: ${n(a - b)} + ${n(b)} = ${n(a)}`] }; },
    table: (R) => { const a = R.int(2, 10), b = R.int(2, 10); return { q: `${a} × ${b} = ?`, a: n(a * b), wrong: near(a * b, [a * (b + 1), a * (b - 1), a + b], R), steps: [`${a} × ${b} means ${b} groups of ${a}: ${a * b}`] }; },
    repAdd: (R) => { const a = R.int(2, 5), b = R.int(2, 5); return { q: `${Array(b).fill(a).join(" + ")} is the same as which multiplication?`, a: `${b} × ${a} = ${a * b}`, wrong: [`${b} + ${a} = ${a + b}`, `${b} × ${a} = ${a * b + a}`, `${a} × ${a} = ${a * a}`].filter((x) => x !== `${b} × ${a} = ${a * b}`), steps: [`${a} is added ${b} times, so it is ${b} × ${a} = ${a * b}.`] }; },
    mul: (R) => { const a = R.int(12, 99), b = R.int(3, 19); return { q: `${a} × ${b} = ?`, a: n(a * b), wrong: near(a * b, [a * (b - 1), a * b + 10, (a + 1) * b], R), steps: [`${a} × ${b} = ${a} × ${b - (b % 10)} + ${a} × ${b % 10}`, `= ${a * (b - (b % 10))} + ${a * (b % 10)} = ${a * b}`] }; },
    div: (R) => { const b = R.int(2, 12), q = R.int(3, 25); return { q: `${b * q} ÷ ${b} = ?`, a: n(q), wrong: near(q, [q + 1, q - 1, b], R), steps: [`Which number times ${b} makes ${b * q}? ${b} × ${q} = ${b * q}`, `So ${b * q} ÷ ${b} = ${q}`] }; },
    divRem: (R) => { const b = R.int(3, 9), q = R.int(10, 60), r = R.int(1, b - 1); const a = b * q + r; return { q: `Divide ${a} by ${b}. What are the quotient and remainder?`, a: `Quotient ${q}, remainder ${r}`, wrong: [`Quotient ${q + 1}, remainder ${r}`, `Quotient ${q}, remainder ${r + 1}`, `Quotient ${q - 1}, remainder ${b + r}`], kinds: ["slip", "slip", "method"], steps: [`${b} × ${q} = ${b * q}`, `${a} − ${b * q} = ${r}, which is less than ${b}`] }; },
    placeVal: (R) => { const num = R.int(1000, 99999), digits = String(num); const i = R.int(0, digits.length - 2); const d = Number(digits[i]) || 1; const fixed = Number(digits.slice(0, i) + d + digits.slice(i + 1)); const place = 10 ** (digits.length - 1 - i); return { q: `What is the place value of ${d} in ${n(fixed)}?`, a: n(d * place), wrong: near(d * place, [{ v: d, k: "method" }, { v: d * place * 10, k: "scale" }, { v: d * place / 10 || d * 1000, k: "scale" }], R), steps: [`${d} is in the ${({ 1: "ones", 10: "tens", 100: "hundreds", 1000: "thousands", 10000: "ten thousands" })[place]} place.`, `Place value = ${d} × ${n(place)} = ${n(d * place)}`] }; },
    money: (R) => { const a = R.int(15, 250), b = R.int(10, 200); return { q: `Riya buys a book for ${cur()}${a} and a pen for ${cur()}${b}. How much does she spend in all?`, a: rs(a + b), wrong: near(a + b, [a + b + 10, Math.abs(a - b), a + b - 1], R, rs), steps: [`Total = ${cur()}${a} + ${cur()}${b} = ${cur()}${a + b}`] }; },
    change: (R) => { const cost = R.int(35, 480), paid = cost < 100 ? 100 : cost < 200 ? 200 : 500; return { q: `A toy costs ${cur()}${cost}. You pay with ${cur()}${paid}. How much change do you get?`, a: rs(paid - cost), wrong: near(paid - cost, [paid - cost + 10, paid - cost - 10, cost], R, rs), steps: [`Change = ${cur()}${paid} − ${cur()}${cost} = ${cur()}${paid - cost}`] }; },
    timeLater: (R) => { const h = R.int(1, 10), m = R.pick([0, 15, 30, 45]), add = R.int(1, 3); const h2 = ((h + add - 1) % 12) + 1; const t = (hh, mm) => `${hh}:${String(mm).padStart(2, "0")}`; return { q: `The time is ${t(h, m)}. What time will it be after ${add} hour${add > 1 ? "s" : ""}?`, a: t(h2, m), wrong: [t(((h + add) % 12) + 1, m), t(h, (m + 30) % 60), t(((h + add + 10) % 12) + 1, m)], steps: [`Move the hour hand forward ${add}: ${h} → ${h2}. Minutes stay ${String(m).padStart(2, "0")}.`] }; },
    minutes: (R) => { const h = R.int(1, 4), m = R.int(5, 55); return { q: `How many minutes are there in ${h} hour${h > 1 ? "s" : ""} ${m} minutes?`, a: n(h * 60 + m), wrong: near(h * 60 + m, [h * 100 + m, h * 60, h + m], R), steps: [`1 hour = 60 minutes`, `${h} × 60 + ${m} = ${h * 60 + m} minutes`] }; },
    unitConv: (R) => { const k = R.pick([["m", "cm", 100], ["km", "m", 1000], ["kg", "g", 1000], ["L", "mL", 1000]]); const v = R.int(2, 9), w = R.int(5, 95); return { q: `Convert ${v} ${k[0]} ${w} ${k[1]} into ${k[1]}.`, a: `${n(v * k[2] + w)} ${k[1]}`, wrong: [`${n(v * 10 + w)} ${k[1]}`, `${n(v * k[2])} ${k[1]}`, `${n(v * k[2] * 10 + w)} ${k[1]}`], kinds: ["scale", "slip", "scale"], steps: [`1 ${k[0]} = ${n(k[2])} ${k[1]}`, `${v} × ${n(k[2])} + ${w} = ${n(v * k[2] + w)} ${k[1]}`] }; },
    fracOf: (R) => { const d = R.pick([2, 3, 4, 5, 6, 8, 10]), k = R.int(2, 12), num = R.int(1, d - 1); const total = d * k; return { q: `Find ${num}/${d} of ${total}.`, a: n(num * k), wrong: near(num * k, [k, total - num * k, num * k + k], R), steps: [`${total} ÷ ${d} = ${k}`, `${k} × ${num} = ${num * k}`] }; },
    fracAdd: (R) => { const b = R.int(2, 9), d = R.int(2, 9), a = R.int(1, b), c = R.int(1, d); return { q: `${a}/${b} + ${c}/${d} = ? (simplest form)`, a: fr(a * d + c * b, b * d), wrong: [fr(a + c, b + d), fr(a * d + c * b + 1, b * d), fr(a * c, b * d)], kinds: ["method", "slip", "method"], steps: [`Common denominator: ${b} × ${d} = ${b * d}`, `${a * d}/${b * d} + ${c * b}/${b * d} = ${a * d + c * b}/${b * d}`, `Simplest form: ${fr(a * d + c * b, b * d)}`] }; },
    fracSub: (R) => { const b = R.int(2, 9), d = R.int(2, 9), a = R.int(1, 2 * b), c = R.int(1, d - 1); return { q: `${a}/${b} − ${c}/${d} = ? (simplest form)`, a: fr(a * d - c * b, b * d), wrong: [fr(a - c, Math.abs(b - d) || 1), fr(a * d - c * b - 1, b * d), fr(a * d + c * b, b * d)], kinds: ["method", "slip", "method"], steps: [`Common denominator: ${b * d}`, `${a * d}/${b * d} − ${c * b}/${b * d} = ${a * d - c * b}/${b * d} = ${fr(a * d - c * b, b * d)}`] }; },
    fracMul: (R) => { const a = R.int(1, 9), b = R.int(2, 9), c = R.int(1, 9), d = R.int(2, 9); return { q: `${a}/${b} × ${c}/${d} = ? (simplest form)`, a: fr(a * c, b * d), wrong: [fr(a * d, b * c), fr(a + c, b + d), fr(a * c + 1, b * d)], kinds: ["method", "method", "slip"], steps: [`Multiply tops and bottoms: (${a} × ${c})/(${b} × ${d}) = ${a * c}/${b * d}`, `Simplest form: ${fr(a * c, b * d)}`] }; },
    fracDiv: (R) => { const a = R.int(1, 9), b = R.int(2, 9), c = R.int(1, 9), d = R.int(2, 9); return { q: `${a}/${b} ÷ ${c}/${d} = ? (simplest form)`, a: fr(a * d, b * c), wrong: [fr(a * c, b * d), fr(b * c, a * d), fr(a * d + 1, b * c)], kinds: ["method", "method", "slip"], steps: [`Dividing by ${c}/${d} is multiplying by ${d}/${c}`, `${a}/${b} × ${d}/${c} = ${a * d}/${b * c} = ${fr(a * d, b * c)}`] }; },
    decAdd: (R) => { const a = R.int(11, 999) / 10, b = R.int(101, 9999) / 100; return { q: `${n(a)} + ${n(b)} = ?`, a: n(a + b), wrong: near(a + b, [a + b + 1, a + b - 0.1, a * 10 + b], R), steps: [`Line up the decimal points: ${n(a)} = ${a.toFixed(2)}`, `${a.toFixed(2)} + ${b.toFixed(2)} = ${(a + b).toFixed(2)}`] }; },
    decMul: (R) => { const a = R.int(11, 99) / 10, b = R.int(2, 9) / 10; const p = Math.round(a * b * 100) / 100; return { q: `${n(a)} × ${n(b)} = ?`, a: n(p), wrong: near(p, [{ v: p * 10, k: "scale" }, { v: p / 10, k: "scale" }, { v: Math.round((a + b) * 100) / 100, k: "method" }], R), steps: [`Multiply as whole numbers: ${a * 10} × ${b * 10} = ${Math.round(a * b * 100)}`, `Total decimal places: 1 + 1 = 2, so ${n(p)}`] }; },
    decDiv: (R) => { const b = R.pick([2, 4, 5, 8]), q = R.int(11, 99) / 10; const a = Math.round(b * q * 100) / 100; return { q: `${n(a)} ÷ ${b} = ?`, a: n(q), wrong: near(q, [q * 10, q / 10, q + 1], R), steps: [`${n(a)} ÷ ${b}: divide as usual and keep the decimal point in place.`, `Check: ${n(q)} × ${b} = ${n(a)}`] }; },
    percentOf: (R) => { const p = R.pick([5, 10, 12, 15, 20, 25, 30, 40, 50, 75]), base = R.int(2, 40) * 20; return { q: `What is ${p}% of ${n(base)}?`, a: n((p * base) / 100), wrong: near((p * base) / 100, [{ v: (p * base) / 10, k: "scale" }, { v: base - (p * base) / 100, k: "method" }, { v: p + base / 100, k: "method" }], R), steps: [`${p}% of ${n(base)} = ${p}/100 × ${n(base)}`, `= ${n((p * base) / 100)}`] }; },
    unitary: (R) => { const k = R.int(3, 12), price = R.int(4, 60), m = R.int(2, 20); return { q: `${k} notebooks cost ${cur()}${k * price}. What do ${m} notebooks cost?`, a: rs(m * price), wrong: near(m * price, [m * price + price, k * price + m, m * (price + 1)], R, rs), steps: [`Cost of 1 notebook = ${cur()}${k * price} ÷ ${k} = ${cur()}${price}`, `Cost of ${m} = ${m} × ${cur()}${price} = ${cur()}${m * price}`] }; },
    rectPA: (R) => { const l = R.int(4, 30), b = R.int(2, l - 1), want = R.pick(["perimeter", "area"]); const ans = want === "area" ? l * b : 2 * (l + b); const unit = want === "area" ? "cm²" : "cm"; return { q: `A rectangle is ${l} cm long and ${b} cm wide. Find its ${want}.`, a: `${ans} ${unit}`, wrong: [want === "area" ? `${2 * (l + b)} cm²` : `${l * b} cm`, `${ans + (want === "area" ? l : 2)} ${unit}`, want === "area" ? `${l + b} cm²` : `${l + b} cm`], kinds: ["method", "slip", "method"], steps: want === "area" ? [`Area = length × breadth = ${l} × ${b} = ${l * b} cm²`] : [`Perimeter = 2 × (length + breadth) = 2 × (${l} + ${b}) = ${2 * (l + b)} cm`] }; },
    squarePA: (R) => { const s = R.int(3, 25); return { q: `A square has side ${s} m. Find its area.`, a: `${s * s} m²`, wrong: [`${4 * s} m²`, `${2 * s} m²`, `${s * s + s} m²`], kinds: ["method", "method", "slip"], steps: [`Area = side × side = ${s} × ${s} = ${s * s} m²`] }; },
    cuboidVol: (R) => { const l = R.int(3, 15), b = R.int(2, 10), h = R.int(2, 10); return { q: `Find the volume of a cuboid ${l} cm × ${b} cm × ${h} cm.`, a: `${l * b * h} cm³`, wrong: [`${2 * (l * b + b * h + h * l)} cm³`, `${l + b + h} cm³`, `${l * b * h + l * b} cm³`], kinds: ["method", "method", "slip"], steps: [`Volume = l × b × h = ${l} × ${b} × ${h} = ${l * b * h} cm³`] }; },
    hcf: (R) => { const g = R.int(2, 12), a = g * R.int(2, 9), b = g * R.int(2, 9); const h = gcd(a, b); return { q: `Find the HCF of ${a} and ${b}.`, a: n(h), wrong: near(h, [lcm(a, b), h * 2, Math.min(a, b)], R), steps: [`Factors common to ${a} and ${b}: the greatest is ${h}.`, `(Prime factorisation: take the lowest power of each common prime.)`] }; },
    lcmQ: (R) => { const a = R.int(4, 24), b = R.int(4, 24); const l = lcm(a, b); return { q: `Find the LCM of ${a} and ${b}.`, a: n(l), wrong: near(l, [a * b === l ? l * 2 : a * b, gcd(a, b), l + Math.min(a, b)], R), steps: [`Multiples of ${Math.max(a, b)}: check which is first divisible by ${Math.min(a, b)}.`, `LCM = ${l}  (also: LCM = ${a} × ${b} ÷ HCF ${gcd(a, b)})`] }; },
    primeFact: (R) => { const ps = [2, 2, 3, 3, 5, 7]; const k = R.int(3, 4); const fs = []; for (let i = 0; i < k; i++) fs.push(R.pick(ps)); fs.sort((x, y) => x - y); const v = fs.reduce((x, y) => x * y, 1); const right = fs.join(" × "); const w1 = [...fs.slice(0, -1), fs[fs.length - 1] + 2].join(" × "); return { q: `Which is the prime factorisation of ${v}?`, a: right, wrong: [w1, [fs[0] * fs[1], ...fs.slice(2)].join(" × "), [...fs, 2].join(" × ")].filter((x) => x !== right), steps: [`Divide by the smallest prime repeatedly: ${v} = ${right}`] }; },
    integers: (R) => { const a = R.nz(-30, 30), b = R.nz(-30, 30), op = R.pick(["+", "−", "×"]); const v = op === "+" ? a + b : op === "−" ? a - b : a * b; const show = (x) => (x < 0 ? `(${n(x)})` : n(x)); return { q: `${show(a)} ${op} ${show(b)} = ?`, a: n(v), wrong: near(v, [{ v: -v, k: "sign" }, op === "×" ? { v: a + b, k: "method" } : a * b === v ? v + 2 : { v: -a + b, k: "sign" }, v + (op === "×" ? a : 2)], R), steps: op === "×" ? [`Multiply the sizes: ${Math.abs(a)} × ${Math.abs(b)} = ${Math.abs(v)}`, `${a < 0 === b < 0 ? "Same signs give +" : "Different signs give −"}, so ${n(v)}`] : [`${show(a)} ${op} ${show(b)} = ${n(v)}`] }; },
    intDiv: (R) => { const b = R.nz(-12, 12), q = R.nz(-15, 15); const a = b * q; const show = (x) => (x < 0 ? `(${n(x)})` : n(x)); return { q: `${show(a)} ÷ ${show(b)} = ?`, a: n(q), wrong: near(q, [{ v: -q, k: "sign" }, { v: q + 1, k: "slip" }, b], R), steps: [`${Math.abs(a)} ÷ ${Math.abs(b)} = ${Math.abs(q)}`, `${a < 0 === b < 0 ? "Same signs give +" : "Different signs give −"}, so ${n(q)}`] }; },
    evalExpr: (R) => { const a = R.int(2, 9), b = R.nz(-9, 12), x = R.int(-5, 8); return { q: `Find the value of ${poly([a, b], "x")} when x = ${n(x)}.`, a: n(a * x + b), wrong: near(a * x + b, [a + x + b, a * x - b, a * (x + b)], R), steps: [`${a} × (${n(x)}) ${b < 0 ? "−" : "+"} ${Math.abs(b)} = ${n(a * x)} ${b < 0 ? "−" : "+"} ${Math.abs(b)} = ${n(a * x + b)}`] }; },
    linEq: (R) => { const a = R.int(2, 9), x = R.int(-8, 12), b = R.nz(-20, 20); const c = a * x + b; return { q: `Solve: ${poly([a, b], "x")} = ${n(c)}`, a: `x = ${n(x)}`, wrong: [`x = ${n(x + 1)}`, `x = ${n(-x || 2)}`, `x = ${fr(c + b, a)}`].filter((s) => s !== `x = ${n(x)}`), steps: [`${a}x = ${n(c)} ${b < 0 ? "+" : "−"} ${Math.abs(b)} = ${n(c - b)}`, `x = ${n(c - b)} ÷ ${a} = ${n(x)}`] }; },
    linEqBoth: (R) => { const a = R.int(3, 9), c = R.int(1, a - 1), x = R.int(-6, 10), b = R.int(-15, 15); const d = (a - c) * x + b; return { q: `Solve: ${poly([a, b], "y")} = ${poly([c, d], "y")}`, a: `y = ${n(x)}`, wrong: [`y = ${n(x + 1)}`, `y = ${n(x - 2)}`, `y = ${n(-x || 3)}`], steps: [`Bring y terms to one side: ${a}y − ${c}y = ${n(d)} ${b < 0 ? "+" : "−"} ${Math.abs(b)}`, `${a - c}y = ${n(d - b)}`, `y = ${n(x)}`] }; },
    complement: (R) => { const kind = R.pick(["complementary", "supplementary"]); const tot = kind === "complementary" ? 90 : 180; const a = R.int(10, tot - 10); return { q: `Find the ${kind === "complementary" ? "complement" : "supplement"} of ${a}°.`, a: `${tot - a}°`, wrong: [`${(kind === "complementary" ? 180 : 90) - a > 0 ? (kind === "complementary" ? 180 : 90) - a : 360 - a}°`, `${tot - a + 10}°`, `${360 - a}°`].filter((s) => s !== `${tot - a}°`), steps: [`${kind[0].toUpperCase() + kind.slice(1)} angles add up to ${tot}°.`, `${tot}° − ${a}° = ${tot - a}°`] }; },
    triAngle: (R) => { const a = R.int(25, 90), b = R.int(20, 150 - a); return { q: `Two angles of a triangle are ${a}° and ${b}°. Find the third angle.`, a: `${180 - a - b}°`, wrong: [`${360 - a - b}°`, `${180 - a - b + 10}°`, `${a + b}°`].filter((s) => s !== `${180 - a - b}°`), steps: [`Angle sum of a triangle = 180°`, `180° − ${a}° − ${b}° = ${180 - a - b}°`] }; },
    extAngle: (R) => { const a = R.int(25, 80), b = R.int(25, 80); return { q: `In a triangle, two interior opposite angles are ${a}° and ${b}°. Find the exterior angle.`, a: `${a + b}°`, wrong: [`${180 - a - b}°`, `${a + b + 10}°`, `${Math.abs(a - b) || 5}°`], steps: [`Exterior angle = sum of the two interior opposite angles`, `${a}° + ${b}° = ${a + b}°`] }; },
    polyAngles: (R) => { const s = R.int(5, 12); return { q: `Find the sum of the interior angles of a polygon with ${s} sides.`, a: `${(s - 2) * 180}°`, wrong: [`${s * 180}°`, `${(s - 1) * 180}°`, `${s * 90}°`], steps: [`Sum = (n − 2) × 180°`, `(${s} − 2) × 180° = ${(s - 2) * 180}°`] }; },
    quadAngle: (R) => { const a = R.int(60, 120), b = R.int(60, 120), c = R.int(40, 280 - a - b > 150 ? 150 : 280 - a - b); const d = 360 - a - b - c; return { q: `Three angles of a quadrilateral are ${a}°, ${b}° and ${c}°. Find the fourth.`, a: `${d}°`, wrong: [`${180 - Math.min(d, 170)}°`, `${d + 10}°`, `${d - 10}°`], steps: [`Angle sum of a quadrilateral = 360°`, `360° − ${a}° − ${b}° − ${c}° = ${d}°`] }; },
    squares: (R) => { const k = R.int(11, 45); return { q: R.next() < 0.5 ? `Find ${k}².` : `Find √${n(k * k)}.`, a: null, k }; },
    cubes: (R) => { const k = R.int(2, 15); return { q: R.next() < 0.5 ? `Find ${k}³.` : `Find the cube root of ${n(k ** 3)}.`, a: null, k }; },
    expo: (R) => { const b = R.pick([2, 3, 5, 10]), m = R.int(2, 6), k = R.int(1, 4), op = R.pick(["×", "÷"]); const e = op === "×" ? m + k : m - k; return { q: `Write as a single power: ${b}${toSup(m)} ${op} ${b}${toSup(k)}`, a: `${b}${toSup(e)}`, wrong: [`${b}${toSup(op === "×" ? m * k : m + k)}`, `${b * b}${toSup(e)}`, `${b}${toSup(op === "×" ? m - k : m * k)}`].filter((s) => s !== `${b}${toSup(e)}`), steps: [op === "×" ? `aᵐ × aⁿ = aᵐ⁺ⁿ: ${m} + ${k} = ${e}` : `aᵐ ÷ aⁿ = aᵐ⁻ⁿ: ${m} − ${k} = ${e}`] }; },
    ratioShare: (R) => { const p = R.int(1, 5), q = R.int(1, 6), k = R.int(20, 150); const total = (p + q) * k; return { q: `Divide ${cur()}${n(total)} between A and B in the ratio ${p} : ${q}. What is A's share?`, a: rs(p * k), wrong: near(p * k, [q * k, total / 2, p * k + k], R, rs), steps: [`Total parts = ${p} + ${q} = ${p + q}`, `One part = ${cur()}${n(total)} ÷ ${p + q} = ${cur()}${k}`, `A's share = ${p} × ${cur()}${k} = ${cur()}${n(p * k)}`] }; },
    directProp: (R) => { const k = R.int(3, 12), u = R.int(5, 60), m = R.int(2, 25); return { q: `A car uses ${k} litres of petrol for ${k * u} km. How far can it go on ${m} litres?`, a: `${n(m * u)} km`, wrong: [`${n(m * u + u)} km`, `${n(k * u + m)} km`, `${n(m * k)} km`], steps: [`Distance per litre = ${k * u} ÷ ${k} = ${u} km`, `${m} × ${u} = ${n(m * u)} km`] }; },
    inverseProp: (R) => { const w1 = R.int(4, 15); let d1 = R.int(6, 24); if (d1 === w1) d1++; const total = w1 * d1; const opts = []; for (let w = 2; w <= 40; w++) if (total % w === 0 && w !== w1) opts.push(w); const w2 = R.pick(opts); return { q: `${w1} workers finish a job in ${d1} days. How many days will ${w2} workers take?`, a: `${total / w2} days`, wrong: [`${Math.round((d1 * w2) / w1) || d1 + 2} days`, `${total / w2 + 2} days`, `${d1} days`].filter((s) => s !== `${total / w2} days`), steps: [`Inverse proportion: workers × days stays the same = ${w1} × ${d1} = ${total}`, `Days = ${total} ÷ ${w2} = ${total / w2}`] }; },
    percentChange: (R) => { const base = R.int(4, 50) * 50, p = R.pick([5, 10, 12, 15, 20, 25]), up = R.next() < 0.5; const v = up ? base * (1 + p / 100) : base * (1 - p / 100); return { q: `A price of ${cur()}${n(base)} ${up ? "increases" : "decreases"} by ${p}%. What is the new price?`, a: rs(v), wrong: near(v, [up ? base * (1 - p / 100) : base * (1 + p / 100), base + p, (base * p) / 100], R, rs), steps: [`${p}% of ${cur()}${n(base)} = ${cur()}${n((base * p) / 100)}`, `New price = ${cur()}${n(base)} ${up ? "+" : "−"} ${cur()}${n((base * p) / 100)} = ${cur()}${n(v)}`] }; },
    profitLoss: (R) => { const cp = R.int(4, 80) * 25, p = R.pick([5, 10, 12, 15, 20, 25]), profit = R.next() < 0.5; const sp = profit ? cp * (1 + p / 100) : cp * (1 - p / 100); return { q: `An article is bought for ${cur()}${n(cp)} and sold for ${cur()}${n(sp)}. Find the ${profit ? "profit" : "loss"} percent.`, a: `${p}%`, wrong: [`${p + 5}%`, `${Math.round(((Math.abs(sp - cp)) / sp) * 1000) / 10}%`, `${p * 2}%`].filter((s) => s !== `${p}%`), steps: [`${profit ? "Profit" : "Loss"} = ${cur()}${n(Math.abs(sp - cp))}`, `${profit ? "Profit" : "Loss"} % = ${n(Math.abs(sp - cp))} ÷ ${n(cp)} × 100 = ${p}%`] }; },
    discount: (R) => { const mp = R.int(4, 60) * 50, p = R.pick([5, 10, 15, 20, 25, 30]); const sp = mp * (1 - p / 100); return { q: `The marked price of a shirt is ${cur()}${n(mp)}. A discount of ${p}% is given. Find the selling price.`, a: rs(sp), wrong: near(sp, [mp * (p / 100), mp - p, mp * (1 + p / 100)], R, rs), steps: [`Discount = ${p}% of ${cur()}${n(mp)} = ${cur()}${n((mp * p) / 100)}`, `Selling price = ${cur()}${n(mp)} − ${cur()}${n((mp * p) / 100)} = ${cur()}${n(sp)}`] }; },
    simpleInt: (R) => { const p = R.int(2, 50) * 1000, r = R.pick([4, 5, 6, 8, 10, 12]), t = R.int(2, 5); const si = (p * r * t) / 100; return { q: `Find the simple interest on ${cur()}${n(p)} at ${r}% per year for ${t} years.`, a: rs(si), wrong: near(si, [(p * r) / 100, p + si, (p * r * t) / 10], R, rs), steps: [`SI = P × R × T ÷ 100`, `= ${n(p)} × ${r} × ${t} ÷ 100 = ${cur()}${n(si)}`] }; },
    compoundInt: (R) => { const p = R.int(1, 20) * 1000, r = R.pick([5, 10, 20]), t = 2; const amt = p * (1 + r / 100) ** t; return { q: `Find the amount on ${cur()}${n(p)} at ${r}% per year compound interest for 2 years.`, a: rs(amt), wrong: near(amt, [p * (1 + (r * t) / 100), amt - p, p * (1 + r / 100)], R, rs), steps: [`A = P(1 + R/100)ⁿ`, `= ${n(p)} × (1 + ${r}/100)² = ${n(p)} × ${n((1 + r / 100) ** 2)} = ${cur()}${n(amt)}`] }; },
    mean: (R) => { const k = R.int(4, 7), m = R.int(10, 60); const xs = []; for (let i = 0; i < k - 1; i++) xs.push(m + R.int(-9, 9)); xs.push(m * k - xs.reduce((a, b) => a + b, 0)); return { q: `Find the mean of ${xs.join(", ")}.`, a: n(m), wrong: near(m, [m + 1, Math.max(...xs) - Math.min(...xs), m - 2], R), steps: [`Sum = ${xs.reduce((a, b) => a + b, 0)}`, `Mean = ${xs.reduce((a, b) => a + b, 0)} ÷ ${k} = ${m}`] }; },
    median: (R) => { const k = R.pick([5, 7, 9]); const xs = []; for (let i = 0; i < k; i++) xs.push(R.int(2, 60)); const s = xs.slice().sort((a, b) => a - b); const med = s[(k - 1) / 2]; return { q: `Find the median of ${xs.join(", ")}.`, a: n(med), wrong: near(med, [xs[(k - 1) / 2], Math.round(xs.reduce((a, b) => a + b, 0) / k), s[(k + 1) / 2]], R), steps: [`Arrange in order: ${s.join(", ")}`, `Middle (${(k + 1) / 2}th) value = ${med}`] }; },
    mode: (R) => { const m = R.int(2, 20); const xs = [m, m, m]; while (xs.length < 8) { const v = R.int(1, 25); if (v !== m && xs.filter((x) => x === v).length < 2) xs.push(v); } const sh = xs.sort(() => R.next() - 0.5); return { q: `Find the mode of ${sh.join(", ")}.`, a: n(m), wrong: near(m, [sh[0] === m ? sh[1] : sh[0], Math.max(...sh), Math.min(...sh)], R), steps: [`${m} occurs most often (3 times).`] }; },
    pythag: (R) => { const [a, b, c] = R.pick([[3, 4, 5], [5, 12, 13], [8, 15, 17], [7, 24, 25], [20, 21, 29], [9, 40, 41]]); const k = R.int(1, 3); const find = R.pick(["hyp", "leg"]); return find === "hyp" ? { q: `The two shorter sides of a right triangle are ${a * k} cm and ${b * k} cm. Find the hypotenuse.`, a: `${c * k} cm`, wrong: [`${(a + b) * k} cm`, `${c * k + 1} cm`, `${b * k + 1} cm`], steps: [`h² = ${a * k}² + ${b * k}² = ${sq(a * k)} + ${sq(b * k)} = ${sq(c * k)}`, `h = √${sq(c * k)} = ${c * k} cm`] } : { q: `A right triangle has hypotenuse ${c * k} cm and one side ${a * k} cm. Find the other side.`, a: `${b * k} cm`, wrong: [`${(c - a) * k} cm`, `${b * k + 2} cm`, `${(c + a) * k} cm`], steps: [`side² = ${c * k}² − ${a * k}² = ${sq(c * k)} − ${sq(a * k)} = ${sq(b * k)}`, `side = ${b * k} cm`] }; },
    areaShapes: (R) => { const kind = R.pick(["triangle", "parallelogram", "trapezium"]); const b = R.int(4, 30), h = R.int(3, 20); if (kind === "trapezium") { const a2 = R.int(3, 25); const ar = ((b + a2) * h) / 2; return { q: `A trapezium has parallel sides ${b} cm and ${a2} cm and height ${h} cm. Find its area.`, a: `${n(ar)} cm²`, wrong: [`${n((b + a2) * h)} cm²`, `${n(b * a2 * h / 2)} cm²`, `${n(ar + h)} cm²`], steps: [`Area = ½ × (sum of parallel sides) × height`, `= ½ × (${b} + ${a2}) × ${h} = ${n(ar)} cm²`] }; } const ar = kind === "triangle" ? (b * h) / 2 : b * h; return { q: `Find the area of a ${kind} with base ${b} cm and height ${h} cm.`, a: `${n(ar)} cm²`, wrong: [`${n(kind === "triangle" ? b * h : (b * h) / 2)} cm²`, `${n(2 * (b + h))} cm²`, `${n(ar + b)} cm²`], steps: [kind === "triangle" ? `Area = ½ × base × height = ½ × ${b} × ${h} = ${n(ar)} cm²` : `Area = base × height = ${b} × ${h} = ${n(ar)} cm²`] }; },
    euler: (R) => { const [name, F, V, E] = R.pick([["cube", 6, 8, 12], ["triangular prism", 5, 6, 9], ["square pyramid", 5, 5, 8], ["pentagonal prism", 7, 10, 15], ["hexagonal pyramid", 7, 7, 12], ["triangular pyramid", 4, 4, 6]]); const ask = R.pick(["E", "V", "F"]); const val = { F, V, E }[ask]; const word = { F: "faces", V: "vertices", E: "edges" }; const given = ["F", "V", "E"].filter((x) => x !== ask); return { q: `A ${name} has ${given.map((g) => `${{ F, V, E }[g]} ${word[g]}`).join(" and ")}. Use Euler's formula to find the number of ${word[ask]}.`, a: n(val), wrong: near(val, [val + 2, val - 2, val + 1], R), steps: [`F + V − E = 2`, `So ${ask} = ${val}`] }; },
    // Secondary
    polyValue: (R) => { const a = R.nz(-3, 4), b = R.int(-6, 6), c = R.int(-9, 9), x = R.int(-3, 3); const v = a * x * x + b * x + c; return { q: `If p(x) = ${poly([a, b, c])}, find p(${n(x)}).`, a: n(v), wrong: near(v, [a * x + b * x + c, -v, a * x * x - b * x + c], R), steps: [`p(${n(x)}) = ${a}(${n(x)})² ${b < 0 ? "−" : "+"} ${Math.abs(b)}(${n(x)}) ${c < 0 ? "−" : "+"} ${Math.abs(c)}`, `= ${n(a * x * x)} ${b * x < 0 ? "−" : "+"} ${Math.abs(b * x)} ${c < 0 ? "−" : "+"} ${Math.abs(c)} = ${n(v)}`] }; },
    remainder: (R) => { const a = R.nz(-3, 3), b = R.int(-6, 6), c = R.int(-9, 9), d = R.int(-10, 10), k = R.nz(-3, 3); const v = a * k ** 3 + b * k * k + c * k + d; return { q: `Find the remainder when ${poly([a, b, c, d])} is divided by ${poly([1, -k])}.`, a: n(v), wrong: near(v, [a * (-k) ** 3 + b * k * k - c * k + d, v + k, d], R), steps: [`Remainder theorem: remainder = p(${n(k)})`, `p(${n(k)}) = ${n(v)}`] }; },
    zeroSumProd: (R) => { const p = R.nz(-7, 7), q = R.nz(-7, 7), a = R.int(1, 3); const b = -a * (p + q), c = a * p * q; const want = R.pick(["sum", "product"]); const ans = want === "sum" ? fr(-b, a) : fr(c, a); return { q: `Find the ${want} of the zeroes of ${poly([a, b, c])}.`, a: ans, wrong: [want === "sum" ? fr(b, a) : fr(-c, a), want === "sum" ? fr(c, a) : fr(-b, a), want === "sum" ? fr(-b + a, a) : fr(c + a, a)].filter((s) => s !== ans), steps: want === "sum" ? [`Sum of zeroes = −b/a = ${fr(-b, a)}`] : [`Product of zeroes = c/a = ${fr(c, a)}`] }; },
    linPair: (R) => { const x = R.int(-6, 8), y = R.int(-6, 8); let a1, b1, a2, b2; do { a1 = R.nz(-5, 5); b1 = R.nz(-5, 5); a2 = R.nz(-5, 5); b2 = R.nz(-5, 5); } while (a1 * b2 - a2 * b1 === 0); const c1 = a1 * x + b1 * y, c2 = a2 * x + b2 * y; const e = (a, b, c) => `${poly([a, 0], "x").replace(/^0$/, "")} ${b < 0 ? "−" : "+"} ${Math.abs(b) === 1 ? "" : Math.abs(b)}y = ${n(c)}`; return { q: `Solve: ${e(a1, b1, c1)} and ${e(a2, b2, c2)}`, a: `x = ${n(x)}, y = ${n(y)}`, wrong: [`x = ${n(y)}, y = ${n(x)}`, `x = ${n(x + 1)}, y = ${n(y - 1)}`, `x = ${n(-x || 2)}, y = ${n(y)}`].filter((s) => s !== `x = ${n(x)}, y = ${n(y)}`), steps: [`Eliminate one variable (multiply and add/subtract), solve for the other.`, `x = ${n(x)}, y = ${n(y)}`, `Check: ${n(a1)} × (${n(x)}) + ${n(b1)} × (${n(y)}) = ${n(c1)} ✓`] }; },
    quadRoots: (R) => { const p = R.nz(-9, 9), q = R.nz(-9, 9); const b = -(p + q), c = p * q; const [r1, r2] = [Math.min(p, q), Math.max(p, q)]; return { q: `Solve: ${poly([1, b, c])} = 0`, a: r1 === r2 ? `x = ${n(r1)} (equal roots)` : `x = ${n(r1)} or x = ${n(r2)}`, wrong: [`x = ${n(-r1)} or x = ${n(-r2)}`, `x = ${n(r1 + 1)} or x = ${n(r2 - 1)}`, `x = ${n(c)} or x = ${n(b)}`], steps: [`Find two numbers with product ${n(c)} and sum ${n(b)}: ${n(-p)} and ${n(-q)}`, `${poly([1, b, c])} = (x ${p < 0 ? "+" : "−"} ${Math.abs(p)})(x ${q < 0 ? "+" : "−"} ${Math.abs(q)})`, `x = ${n(p)} or x = ${n(q)}`] }; },
    discriminant: (R) => { const a = R.int(1, 4), b = R.int(-10, 10), c = R.int(-8, 8); const D = b * b - 4 * a * c; const nature = D > 0 ? "Two distinct real roots" : D === 0 ? "Two equal real roots" : "No real roots"; return { q: `What is the nature of the roots of ${poly([a, b, c])} = 0?`, a: nature, wrong: ["Two distinct real roots", "Two equal real roots", "No real roots", "Exactly one root, which is 0"].filter((s) => s !== nature).slice(0, 3), steps: [`D = b² − 4ac = (${n(b)})² − 4 × ${a} × (${n(c)}) = ${n(D)}`, `D ${D > 0 ? "> 0" : D === 0 ? "= 0" : "< 0"}, so: ${nature.toLowerCase()}`] }; },
    apNth: (R) => { const a = R.int(-10, 20), d = R.nz(-6, 9), k = R.int(8, 40); const v = a + (k - 1) * d; return { q: `Find the ${k}th term of the AP ${a}, ${a + d}, ${a + 2 * d}, …`, a: n(v), wrong: near(v, [a + k * d, a + (k - 2) * d, k * d], R), steps: [`aₙ = a + (n − 1)d, with a = ${n(a)}, d = ${n(d)}`, `a${toSub(k)} = ${n(a)} + ${k - 1} × ${d < 0 ? `(${n(d)})` : n(d)} = ${n(v)}`] }; },
    apSum: (R) => { const a = R.int(-5, 15), d = R.nz(-3, 6), k = R.int(6, 30); const s = (k / 2) * (2 * a + (k - 1) * d); return { q: `Find the sum of the first ${k} terms of the AP ${a}, ${a + d}, ${a + 2 * d}, …`, a: n(s), wrong: near(s, [k * (2 * a + (k - 1) * d), (k / 2) * (2 * a + k * d), a + (k - 1) * d], R), steps: [`Sₙ = n/2 [2a + (n − 1)d]`, `= ${k}/2 × [${n(2 * a)} + ${k - 1} × ${d < 0 ? `(${n(d)})` : n(d)}] = ${n(s)}`] }; },
    distance: (R) => { const [a, b, c] = R.pick([[3, 4, 5], [5, 12, 13], [6, 8, 10], [8, 15, 17], [9, 12, 15]]); const x1 = R.int(-6, 6), y1 = R.int(-6, 6); const sx = R.sign(), sy = R.sign(); const x2 = x1 + sx * a, y2 = y1 + sy * b; return { q: `Find the distance between (${n(x1)}, ${n(y1)}) and (${n(x2)}, ${n(y2)}).`, a: n(c), wrong: near(c, [a + b, c + 1, Math.abs(x2 + y2 - x1 - y1) || c + 2], R), steps: [`d = √[(x₂ − x₁)² + (y₂ − y₁)²]`, `= √[${a}² + ${b}²] = √${c * c} = ${c}`] }; },
    midpoint: (R) => { const x1 = R.int(-10, 10), y1 = R.int(-10, 10), x2 = x1 + 2 * R.int(-6, 6), y2 = y1 + 2 * R.int(-6, 6); const mx = (x1 + x2) / 2, my = (y1 + y2) / 2; return { q: `Find the mid-point of the line segment joining (${n(x1)}, ${n(y1)}) and (${n(x2)}, ${n(y2)}).`, a: `(${n(mx)}, ${n(my)})`, wrong: [`(${n(x2 - x1)}, ${n(y2 - y1)})`, `(${n(my)}, ${n(mx)})`, `(${n(mx + 1)}, ${n(my - 1)})`].filter((s) => s !== `(${n(mx)}, ${n(my)})`), steps: [`Mid-point = ((x₁ + x₂)/2, (y₁ + y₂)/2)`, `= (${n(x1 + x2)}/2, ${n(y1 + y2)}/2) = (${n(mx)}, ${n(my)})`] }; },
    section: (R) => { let m = R.int(1, 4), k = R.int(1, 4); if (gcd(m, k) > 1) k = 1; const x1 = R.int(-8, 8), y1 = R.int(-8, 8); const dx = (m + k) * R.int(-3, 3), dy = (m + k) * R.int(-3, 3); const x2 = x1 + dx, y2 = y1 + dy; const px = x1 + (m * dx) / (m + k), py = y1 + (m * dy) / (m + k); return { q: `Find the point that divides the segment joining A(${n(x1)}, ${n(y1)}) and B(${n(x2)}, ${n(y2)}) internally in the ratio ${m} : ${k}.`, a: `(${n(px)}, ${n(py)})`, wrong: [`(${n(x1 + (k * dx) / (m + k))}, ${n(y1 + (k * dy) / (m + k))})`, `(${n((x1 + x2) / 2)}, ${n((y1 + y2) / 2)})`, `(${n(px + 1)}, ${n(py)})`].filter((s) => s !== `(${n(px)}, ${n(py)})`), steps: [`P = ((m x₂ + n x₁)/(m + n), (m y₂ + n y₁)/(m + n)) with m : n = ${m} : ${k}`, `= ((${m}×${n(x2)} + ${k}×${n(x1)})/${m + k}, (${m}×${n(y2)} + ${k}×${n(y1)})/${m + k}) = (${n(px)}, ${n(py)})`] }; },
    trigValue: (R) => { const T = { sin: { 0: "0", 30: "1/2", 45: "1/√2", 60: "√3/2", 90: "1" }, cos: { 0: "1", 30: "√3/2", 45: "1/√2", 60: "1/2", 90: "0" }, tan: { 0: "0", 30: "1/√3", 45: "1", 60: "√3" } }; const f = R.pick(["sin", "cos", "tan"]); const ang = R.pick(Object.keys(T[f])); const ans = T[f][ang]; const pool = ["0", "1", "1/2", "√3/2", "1/√2", "√3", "1/√3", "2"].filter((x) => x !== ans); return { q: `${f} ${ang}° = ?`, a: ans, wrong: [pool[R.int(0, pool.length - 1)], ...pool].filter((v, i, arr) => arr.indexOf(v) === i).slice(0, 3), steps: [`Standard value: ${f} ${ang}° = ${ans}`] }; },
    trigExpr: (R) => { const k = R.pick([["sin² 30° + cos² 30°", "1", ["1/2", "3/2", "√3/2"]], ["2 sin 30° cos 30°", "√3/2", ["1", "1/2", "√3"]], ["tan 45° + sin 90°", "2", ["1", "0", "3/2"]], ["sin 60° cos 30° + cos 60° sin 30°", "1", ["1/2", "√3/2", "3/4"]], ["cos² 45° − sin² 45°", "0", ["1", "1/2", "−1"]], ["2 tan 30° ÷ (1 − tan² 30°)", "√3", ["1/√3", "1", "2√3"]]]); return { q: `Evaluate: ${k[0]}`, a: k[1], wrong: k[2], steps: [`Put in the standard values and simplify: ${k[0]} = ${k[1]}`] }; },
    heights: (R) => { const ang = R.pick([30, 45, 60]); const d = R.int(2, 30) * (ang === 30 ? 3 : 5); const h = ang === 45 ? `${d} m` : ang === 60 ? `${d}√3 m` : `${n(d / 3)}√3 m`; return { q: `From a point ${d} m from the foot of a tower, the angle of elevation of its top is ${ang}°. Find the height of the tower.`, a: h, wrong: [ang === 45 ? `${d}√3 m` : `${d} m`, `${d * 2} m`, `${n(d / 2)} m`, `${d * 2}√3 m`].filter((s) => s !== h).slice(0, 3), steps: [`tan ${ang}° = height ÷ ${d}`, `height = ${d} × tan ${ang}° = ${h}${ang === 30 ? ` (since ${d}/√3 = ${n(d / 3)}√3)` : ""}`] }; },
    circle: (R) => { const r = 7 * R.int(1, 6); const want = R.pick(["area", "circumference"]); const v = want === "area" ? (22 / 7) * r * r : 2 * (22 / 7) * r; const u = want === "area" ? "cm²" : "cm"; return { q: `Find the ${want} of a circle of radius ${r} cm. (Use π = 22/7)`, a: `${n(v)} ${u}`, wrong: [`${n(want === "area" ? 2 * (22 / 7) * r : (22 / 7) * r * r)} ${u}`, `${n(want === "area" ? (22 / 7) * r * r * 2 : (22 / 7) * r)} ${u}`, `${n(v + 22)} ${u}`], steps: want === "area" ? [`Area = πr² = 22/7 × ${r} × ${r} = ${n(v)} cm²`] : [`Circumference = 2πr = 2 × 22/7 × ${r} = ${n(v)} cm`] }; },
    sector: (R) => { const r = 7 * R.int(1, 4), th = R.pick([30, 45, 60, 90, 120]); const v = (th / 360) * (22 / 7) * r * r; return { q: `Find the area of a sector of radius ${r} cm and angle ${th}°. (π = 22/7; give the answer to 2 decimal places)`, a: `${n(v)} cm²`, wrong: [`${n((th / 360) * 2 * (22 / 7) * r)} cm²`, `${n((22 / 7) * r * r)} cm²`, `${n(v * 2)} cm²`], steps: [`Area of sector = θ/360 × πr²`, `= ${th}/360 × 22/7 × ${r}² = ${n(v)} cm²`] }; },
    solids: (R, kinds = ["cylinder", "cone", "sphere", "hemisphere"]) => { const kind = R.pick(kinds); const r = 7 * R.int(1, 3), h = R.int(2, 12) * 3; const pi = 22 / 7; let v, f, wrong; if (kind === "cylinder") { v = pi * r * r * h; f = "V = πr²h"; wrong = [pi * r * r * h / 3, 2 * pi * r * h, pi * r * h]; } else if (kind === "cone") { v = (pi * r * r * h) / 3; f = "V = ⅓πr²h"; wrong = [pi * r * r * h, pi * r * h, (pi * r * r * h) / 2]; } else if (kind === "sphere") { v = (4 / 3) * pi * r ** 3; f = "V = (4/3)πr³"; wrong = [4 * pi * r * r, (2 / 3) * pi * r ** 3, pi * r ** 3]; } else { v = (2 / 3) * pi * r ** 3; f = "V = (2/3)πr³"; wrong = [(4 / 3) * pi * r ** 3, 3 * pi * r * r, pi * r ** 3]; } const dims = kind === "cylinder" || kind === "cone" ? `radius ${r} cm and height ${h} cm` : `radius ${r} cm`; return { q: `Find the volume of a ${kind} of ${dims}. (π = 22/7)`, a: `${n(v)} cm³`, wrong: wrong.map((w) => `${n(w)} cm³`), steps: [f, `= ${n(v)} cm³`] }; },
    // Class 9 (rationalised) has only cones, spheres and hemispheres.
    solidsCSH: (R) => G.solids(R, ["cone", "sphere", "hemisphere"]),
    probDice: (R) => { const kind = R.pick(["even", "prime", "greater", "multiple3"]); const g = R.int(2, 5); const fav = { even: [2, 4, 6], prime: [2, 3, 5], greater: [1, 2, 3, 4, 5, 6].filter((x) => x > g), multiple3: [3, 6] }[kind]; const label = { even: "an even number", prime: "a prime number", greater: `a number greater than ${g}`, multiple3: "a multiple of 3" }[kind]; return { q: `A die is thrown once. What is the probability of getting ${label}?`, a: fr(fav.length, 6), wrong: [fr(6 - fav.length, 6), fr(fav.length, 12) === fr(fav.length, 6) ? "1" : fr(fav.length, 12), fr(fav.length + 1, 6)].filter((s, i, arr) => s !== fr(fav.length, 6) && arr.indexOf(s) === i), steps: [`Favourable outcomes: ${fav.join(", ")} (${fav.length})`, `P = ${fav.length}/6 = ${fr(fav.length, 6)}`] }; },
    probBalls: (R) => { const r = R.int(2, 9), b = R.int(2, 9), gr = R.int(1, 6); const t = r + b + gr; const col = R.pick(["red", "blue", "green"]); const k = { red: r, blue: b, green: gr }[col]; return { q: `A bag has ${r} red, ${b} blue and ${gr} green balls. One ball is drawn at random. What is the probability that it is ${col}?`, a: fr(k, t), wrong: [fr(t - k, t), fr(k, t - k), fr(1, 3)].filter((s, i, arr) => s !== fr(k, t) && arr.indexOf(s) === i), steps: [`Total balls = ${t}`, `P(${col}) = ${k}/${t} = ${fr(k, t)}`] }; },
    heron: (R) => { const [a, b, c, area] = R.pick([[5, 5, 6, 12], [13, 14, 15, 84], [5, 12, 13, 30], [10, 10, 12, 48], [9, 10, 17, 36], [7, 15, 20, 42], [17, 25, 28, 210]]); const s = (a + b + c) / 2; return { q: `Find the area of a triangle with sides ${a} cm, ${b} cm and ${c} cm (Heron's formula).`, a: `${area} cm²`, wrong: [`${s * 2} cm²`, `${area + 6} cm²`, `${(a * b) / 2} cm²`].filter((x) => x !== `${area} cm²`), steps: [`s = (${a} + ${b} + ${c}) / 2 = ${s}`, `Area = √[s(s − a)(s − b)(s − c)] = √[${s} × ${s - a} × ${s - b} × ${s - c}] = ${area} cm²`] }; },
    hcfLcmProduct: (R) => { const g = R.int(2, 12), a = g * R.int(2, 9), b = g * R.int(2, 9); const L = lcm(a, b), H = gcd(a, b); return { q: `The HCF of ${a} and ${b} is ${H}. Find their LCM.`, a: n(L), wrong: near(L, [a * b, a * b * H, L + H], R), steps: [`HCF × LCM = product of the numbers`, `LCM = ${a} × ${b} ÷ ${H} = ${L}`] }; },
    // Senior maths
    perm: (R) => { const nn = R.int(5, 9), r = R.int(2, 4); let p = 1; for (let i = 0; i < r; i++) p *= nn - i; return { q: `Find ${toSup(nn)}P${toSub(r)} (the number of arrangements of ${r} objects out of ${nn}).`, a: n(p), wrong: near(p, [p / fact(r), nn ** r, p * 2], R), steps: [`ⁿPᵣ = n!/(n − r)!`, `= ${Array.from({ length: r }, (_, i) => nn - i).join(" × ")} = ${n(p)}`] }; },
    comb: (R) => { const nn = R.int(5, 12), r = R.int(2, 4); let p = 1; for (let i = 0; i < r; i++) p *= nn - i; const c = p / fact(r); return { q: `Find ${toSup(nn)}C${toSub(r)} (the number of ways to choose ${r} objects out of ${nn}).`, a: n(c), wrong: near(c, [p, c * 2, nn * r], R), steps: [`ⁿCᵣ = n!/(r!(n − r)!)`, `= (${Array.from({ length: r }, (_, i) => nn - i).join(" × ")}) ÷ ${r}! = ${n(c)}`] }; },
    gpNth: (R) => { const a = R.nz(-5, 6), r = R.pick([2, 3, -2, 1 / 2]), k = R.int(4, 7); const v = a * r ** (k - 1); return { q: `Find the ${k}th term of the GP ${n(a)}, ${n(a * r)}, ${n(a * r * r)}, …`, a: n(v), wrong: near(v, [a * r ** k, a * r ** (k - 2), a * (k - 1) * r], R), steps: [`aₙ = a rⁿ⁻¹, a = ${n(a)}, r = ${n(r)}`, `= ${n(a)} × (${n(r)})${toSup(k - 1)} = ${n(v)}`] }; },
    derivAt: (R) => { const a = R.int(1, 5), b = R.int(-6, 6), c = R.int(-9, 9), x = R.int(-3, 4); const d = 3 * a * x * x + 2 * b * x + c; return { q: `If f(x) = ${poly([a, b, c, R.int(-5, 5)])}, find f′(${n(x)}).`, a: n(d), wrong: near(d, [a * x ** 3 + b * x * x + c * x, 3 * a * x + 2 * b + c, d + 2 * b], R), steps: [`f′(x) = ${poly([3 * a, 2 * b, c])}`, `f′(${n(x)}) = ${n(d)}`] }; },
    limitPoly: (R) => { const p = R.nz(-5, 5), b = R.nz(-5, 5); const v = p + b; return { q: `Evaluate: lim (x → ${n(p)}) of (${poly([1, 0, -p * p], "x")}) ÷ (${poly([1, -p], "x")}) ${b < 0 ? "−" : "+"} ${Math.abs(b)}`, a: n(2 * p + b), wrong: near(2 * p + b, [p + b, b, 2 * p], R), steps: [`x² − ${n(p * p)} = (x − ${n(p)})(x + ${n(p)}), so the fraction is x + ${n(p)} for x ≠ ${n(p)}`, `Limit = ${n(p)} + ${n(p)} ${b < 0 ? "−" : "+"} ${Math.abs(b)} = ${n(2 * p + b)}`] }; },
    det2: (R) => { const a = R.int(-6, 9), b = R.int(-6, 9), c = R.int(-6, 9), d = R.int(-6, 9); const v = a * d - b * c; return { q: `Find the determinant of the matrix [${n(a)} ${n(b)}; ${n(c)} ${n(d)}].`, a: n(v), wrong: near(v, [a * d + b * c, a * c - b * d, a + d], R), steps: [`|A| = ad − bc = (${n(a)})(${n(d)}) − (${n(b)})(${n(c)}) = ${n(v)}`] }; },
    det3: (R) => { const m = Array.from({ length: 3 }, () => Array.from({ length: 3 }, () => R.int(-3, 4))); const [[a, b, c], [d, e, f], [g, h, i]] = m; const v = a * (e * i - f * h) - b * (d * i - f * g) + c * (d * h - e * g); return { q: `Find the determinant of [${m.map((r) => r.map(n).join(" ")).join("; ")}].`, a: n(v), wrong: near(v, [a * (e * i - f * h) + b * (d * i - f * g) + c * (d * h - e * g), -v, v + a], R), steps: [`Expand along row 1: a(ei − fh) − b(di − fg) + c(dh − eg)`, `= ${n(a)}(${n(e * i - f * h)}) − ${n(b)}(${n(d * i - f * g)}) + ${n(c)}(${n(d * h - e * g)}) = ${n(v)}`] }; },
    integral: (R) => { const a = R.int(1, 4), b = R.int(0, 5), lo = R.int(0, 2), hi = lo + R.int(1, 3); const I = (a * (hi ** 3 - lo ** 3)) / 3 + (b * (hi ** 2 - lo ** 2)) / 2; return { q: `Evaluate ∫ from ${lo} to ${hi} of (${poly([a, b, 0])}) dx.`, a: fr(Math.round(I * 6), 6), wrong: [fr(Math.round((a * (hi ** 2 - lo ** 2) + b * (hi - lo)) * 6), 6), fr(Math.round((I + 1) * 6), 6), fr(Math.round(a * (hi ** 3 - lo ** 3) * 6 + 0), 6)].filter((s, i2, arr) => s !== fr(Math.round(I * 6), 6) && arr.indexOf(s) === i2), steps: [`Antiderivative: ${a}x³/3${b ? ` + ${b}x²/2` : ""}`, `Value at ${hi} minus value at ${lo} = ${fr(Math.round(I * 6), 6)}`] }; },
    slope: (R) => { const x1 = R.int(-6, 6), y1 = R.int(-6, 6), dx = R.nz(-6, 6), dy = R.int(-8, 8); return { q: `Find the slope of the line through (${n(x1)}, ${n(y1)}) and (${n(x1 + dx)}, ${n(y1 + dy)}).`, a: fr(dy, dx), wrong: [fr(dx, dy || 1), fr(-dy, dx), fr(dy + 1, dx)].filter((s, i, arr) => s !== fr(dy, dx) && arr.indexOf(s) === i), steps: [`m = (y₂ − y₁)/(x₂ − x₁) = ${n(dy)}/${n(dx)} = ${fr(dy, dx)}`] }; },
    dist3d: (R) => { const [a, b, c, d] = R.pick([[1, 2, 2, 3], [2, 3, 6, 7], [1, 4, 8, 9], [2, 6, 9, 11], [4, 4, 7, 9]]); const p = [R.int(-4, 4), R.int(-4, 4), R.int(-4, 4)]; const q = [p[0] + a, p[1] - b, p[2] + c]; return { q: `Find the distance between (${p.map(n).join(", ")}) and (${q.map(n).join(", ")}).`, a: n(d), wrong: near(d, [a + b + c, d + 1, d * d], R), steps: [`d = √[${a}² + ${b}² + ${c}²] = √${d * d} = ${d}`] }; },
    setsUnion: (R) => { const A = R.int(10, 40), B = R.int(10, 40), both = R.int(2, Math.min(A, B) - 1); return { q: `n(A) = ${A}, n(B) = ${B} and n(A ∩ B) = ${both}. Find n(A ∪ B).`, a: n(A + B - both), wrong: near(A + B - both, [A + B, A + B + both, A + B - 2 * both], R), steps: [`n(A ∪ B) = n(A) + n(B) − n(A ∩ B) = ${A} + ${B} − ${both} = ${A + B - both}`] }; },
    complexMod: (R) => { const [a, b, c] = R.pick([[3, 4, 5], [5, 12, 13], [6, 8, 10], [8, 15, 17]]); const z = `${n(R.sign() * a)} ${R.next() < 0.5 ? "+" : "−"} ${b}i`; return { q: `Find |z| for z = ${z}.`, a: n(c), wrong: near(c, [a + b, c * c, c + 1], R), steps: [`|a + ib| = √(a² + b²) = √(${a * a} + ${b * b}) = ${c}`] }; },
    variance: (R) => { const m = R.int(4, 20); const devs = R.pick([[-2, 0, 2], [-3, -1, 1, 3], [-4, -2, 0, 2, 4], [-1, 1], [-6, 0, 6]]); const xs = devs.map((d) => m + d); const v = devs.reduce((s, d) => s + d * d, 0) / devs.length; return { q: `Find the variance of ${xs.join(", ")}.`, a: n(v), wrong: near(v, [Math.sqrt(v), v * 2, devs.reduce((s, d) => s + d * d, 0)], R), steps: [`Mean = ${m}`, `Variance = Σ(x − mean)² ÷ n = ${devs.reduce((s, d) => s + d * d, 0)} ÷ ${devs.length} = ${n(v)}`] }; },
    // Physics / science numericals
    speed: (R) => { const t = R.int(2, 12), v = R.int(3, 80); return { q: `A vehicle travels ${n(v * t)} km in ${t} hours. Find its average speed.`, a: `${v} km/h`, wrong: [`${n(v * t * t)} km/h`, `${v + t} km/h`, `${n(t / v)} km/h`], steps: [`Speed = distance ÷ time = ${v * t} ÷ ${t} = ${v} km/h`] }; },
    accel: (R) => { const u = R.int(0, 20), a = R.int(1, 6), t = R.int(2, 10); return { q: `A body starts with velocity ${u} m/s and accelerates at ${a} m/s² for ${t} s. Find its final velocity.`, a: `${u + a * t} m/s`, wrong: [`${a * t} m/s`, `${u * a * t} m/s`, `${u + a + t} m/s`].filter((s) => s !== `${u + a * t} m/s`), steps: [`v = u + at = ${u} + ${a} × ${t} = ${u + a * t} m/s`] }; },
    sutHalf: (R) => { const u = R.int(0, 10), a = 2 * R.int(1, 4), t = R.int(2, 8); const s = u * t + (a * t * t) / 2; return { q: `A body with initial velocity ${u} m/s moves with acceleration ${a} m/s² for ${t} s. How far does it go?`, a: `${s} m`, wrong: [`${u * t + a * t * t} m`, `${u * t} m`, `${(a * t * t) / 2} m`].filter((x) => x !== `${s} m`), steps: [`s = ut + ½at²`, `= ${u} × ${t} + ½ × ${a} × ${t}² = ${s} m`] }; },
    force: (R) => { const m = R.int(2, 50), a = R.int(1, 10); return { q: `Find the force needed to give a ${m} kg mass an acceleration of ${a} m/s².`, a: `${m * a} N`, wrong: [`${m + a} N`, `${n(m / a)} N`, `${m * a * 10} N`], steps: [`F = ma = ${m} × ${a} = ${m * a} N`] }; },
    momentum: (R) => { const m = R.int(1, 60), v = R.int(2, 25); return { q: `Find the momentum of a ${m} kg object moving at ${v} m/s.`, a: `${m * v} kg m/s`, wrong: [`${(m * v * v) / 2} kg m/s`, `${m + v} kg m/s`, `${n(m / v)} kg m/s`], steps: [`p = mv = ${m} × ${v} = ${m * v} kg m/s`] }; },
    weight: (R) => { const m = R.int(2, 90); return { q: `Find the weight of a ${m} kg body on Earth (g = 10 m/s²).`, a: `${m * 10} N`, wrong: [`${m} N`, `${n(m / 10)} N`, `${m * 100} N`], steps: [`W = mg = ${m} × 10 = ${m * 10} N`] }; },
    pressure: (R) => { const A = R.pick([0.5, 1, 2, 4, 5]), p = R.int(2, 60) * 10; const F = p * A; return { q: `A force of ${n(F)} N acts on an area of ${n(A)} m². Find the pressure.`, a: `${n(p)} Pa`, wrong: [`${n(F * A)} Pa`, `${n(A / F)} Pa`, `${n(p + 10)} Pa`], steps: [`P = F ÷ A = ${n(F)} ÷ ${n(A)} = ${n(p)} Pa`] }; },
    work: (R) => { const F = R.int(5, 200), s = R.int(2, 30); return { q: `A force of ${F} N moves an object ${s} m in its own direction. Find the work done.`, a: `${n(F * s)} J`, wrong: [`${F + s} J`, `${n(F / s)} J`, `${n((F * s) / 2)} J`], steps: [`W = F × s = ${F} × ${s} = ${n(F * s)} J`] }; },
    kinetic: (R) => { const m = R.int(1, 50), v = 2 * R.int(1, 15); return { q: `Find the kinetic energy of a ${m} kg body moving at ${v} m/s.`, a: `${n((m * v * v) / 2)} J`, wrong: [`${n(m * v * v)} J`, `${n(m * v)} J`, `${n((m * v) / 2)} J`], steps: [`KE = ½mv² = ½ × ${m} × ${v}² = ${n((m * v * v) / 2)} J`] }; },
    potential: (R) => { const m = R.int(1, 60), h = R.int(2, 40); return { q: `Find the potential energy of a ${m} kg object at a height of ${h} m (g = 10 m/s²).`, a: `${n(m * 10 * h)} J`, wrong: [`${n(m * h)} J`, `${n((m * 10 * h) / 2)} J`, `${n(m + 10 + h)} J`], steps: [`PE = mgh = ${m} × 10 × ${h} = ${n(m * 10 * h)} J`] }; },
    power: (R) => { const t = R.int(2, 20), P = R.int(5, 200); return { q: `A machine does ${n(P * t)} J of work in ${t} s. Find its power.`, a: `${P} W`, wrong: [`${n(P * t * t)} W`, `${P + t} W`, `${n(t / P)} W`], steps: [`P = W ÷ t = ${n(P * t)} ÷ ${t} = ${P} W`] }; },
    ohm: (R) => { const I = R.pick([0.5, 1, 1.5, 2, 2.5, 3, 4, 5]), Rr = R.int(2, 60); const want = R.pick(["V", "I", "R"]); const V = I * Rr; if (want === "V") return { q: `A current of ${n(I)} A flows through a ${Rr} Ω resistor. Find the potential difference across it.`, a: `${n(V)} V`, wrong: [`${n(Rr / I)} V`, `${n(I + Rr)} V`, `${n(V * 2)} V`], steps: [`V = IR = ${n(I)} × ${Rr} = ${n(V)} V`] }; if (want === "I") return { q: `A ${n(V)} V supply is connected across a ${Rr} Ω resistor. Find the current.`, a: `${n(I)} A`, wrong: [`${n(V * Rr)} A`, `${n(Rr / V)} A`, `${n(I + 1)} A`], steps: [`I = V ÷ R = ${n(V)} ÷ ${Rr} = ${n(I)} A`] }; return { q: `A current of ${n(I)} A flows when ${n(V)} V is applied. Find the resistance.`, a: `${Rr} Ω`, wrong: [`${n(V * I)} Ω`, `${n(I / V)} Ω`, `${Rr + 2} Ω`], steps: [`R = V ÷ I = ${n(V)} ÷ ${n(I)} = ${Rr} Ω`] }; },
    resistors: (R) => { const a = R.pick([2, 3, 4, 6, 12, 10, 5, 20]), b = R.pick([2, 3, 4, 6, 12, 10, 5, 20]); const kind = R.pick(["series", "parallel"]); const v = kind === "series" ? a + b : (a * b) / (a + b); return { q: `Find the equivalent resistance of ${a} Ω and ${b} Ω connected in ${kind}.`, a: `${n(v)} Ω`, wrong: [`${n(kind === "series" ? (a * b) / (a + b) : a + b)} Ω`, `${n(a * b)} Ω`, `${n(Math.abs(a - b) || 1)} Ω`].filter((s, i, arr) => s !== `${n(v)} Ω` && arr.indexOf(s) === i), steps: kind === "series" ? [`Series: R = R₁ + R₂ = ${a} + ${b} = ${a + b} Ω`] : [`Parallel: 1/R = 1/${a} + 1/${b}`, `R = (${a} × ${b}) ÷ (${a} + ${b}) = ${n(v)} Ω`] }; },
    elecPower: (R) => { const V = R.pick([6, 12, 110, 220, 230]), I = R.pick([0.5, 1, 2, 3, 4, 5]); return { q: `An appliance draws ${n(I)} A from a ${V} V supply. Find its power.`, a: `${n(V * I)} W`, wrong: [`${n(V / I)} W`, `${n(V + I)} W`, `${n(V * I * I)} W`], steps: [`P = VI = ${V} × ${n(I)} = ${n(V * I)} W`] }; },
    energyCost: (R) => { const W = R.pick([100, 200, 500, 1000, 1500, 2000]), h = R.int(2, 10), d = R.pick([10, 20, 30]), rate = R.int(4, 9); const units = (W / 1000) * h * d; return { q: `A ${W} W appliance runs ${h} hours a day for ${d} days. At ${cur()}${rate} per unit (kWh), what is the cost?`, a: rs(units * rate), wrong: near(units * rate, [W * h * d * rate, units, (units * rate) / 2], R, rs), steps: [`Energy = ${W / 1000} kW × ${h} h × ${d} = ${n(units)} kWh`, `Cost = ${n(units)} × ${cur()}${rate} = ${cur()}${n(units * rate)}`] }; },
    density: (R) => { const V = R.int(2, 50), d = R.pick([0.8, 1, 2.7, 7.8, 11.3, 19.3]); return { q: `An object of mass ${n(d * V)} g has volume ${V} cm³. Find its density.`, a: `${n(d)} g/cm³`, wrong: [`${n(d * V * V)} g/cm³`, `${n(V / (d * V))} g/cm³`, `${n(d + 1)} g/cm³`].filter((s, i, arr) => s !== `${n(d)} g/cm³` && arr.indexOf(s) === i), steps: [`Density = mass ÷ volume = ${n(d * V)} ÷ ${V} = ${n(d)} g/cm³`] }; },
    wave: (R) => { const f = R.int(2, 50) * 10, lam = R.pick([0.5, 1, 1.5, 2, 3, 4]); return { q: `A sound wave has frequency ${f} Hz and wavelength ${n(lam)} m. Find its speed.`, a: `${n(f * lam)} m/s`, wrong: [`${n(f / lam)} m/s`, `${n(f + lam)} m/s`, `${n(lam / f)} m/s`], steps: [`v = fλ = ${f} × ${n(lam)} = ${n(f * lam)} m/s`] }; },
    lensPower: (R) => { const fcm = R.pick([10, 20, 25, 40, 50, 100, -20, -25, -50]); const P = 100 / fcm; return { q: `A lens has focal length ${n(fcm)} cm. Find its power.`, a: `${n(P)} D`, wrong: [`${n(fcm / 100)} D`, `${n(-P)} D`, `${n(1 / fcm)} D`], steps: [`P = 1/f (f in metres) = 100/${n(fcm)} = ${n(P)} D`] }; },
    magnification: (R) => { const h = R.int(2, 10), m = R.pick([-2, -1, -0.5, 2, 3, 0.5]); return { q: `An object ${h} cm tall forms an image ${n(Math.abs(h * m))} cm tall that is ${m < 0 ? "inverted" : "erect"}. Find the magnification.`, a: n(m), wrong: near(m, [-m, 1 / m, m * 2], R), steps: [`m = h′/h = ${n(h * m)}/${h} = ${n(m)} (negative means inverted)`] }; },
    molarMass: (R) => { const k = R.pick([["H₂O", 18], ["CO₂", 44], ["NaCl", 58.5], ["CaCO₃", 100], ["NH₃", 17], ["H₂SO₄", 98], ["CH₄", 16], ["O₂", 32]]); return { q: `Find the molecular mass of ${k[0]}. (H = 1, C = 12, N = 14, O = 16, Na = 23, S = 32, Cl = 35.5, Ca = 40)`, a: `${n(k[1])} u`, wrong: [`${n(k[1] + 2)} u`, `${n(k[1] - 1)} u`, `${n(k[1] * 2)} u`], steps: [`Add the atomic masses of all atoms in ${k[0]} = ${n(k[1])} u`] }; },
    moles: (R) => { const k = R.pick([["water", 18], ["carbon dioxide", 44], ["oxygen gas", 32], ["methane", 16]]); const mol = R.pick([0.5, 1, 2, 3, 4, 5]); return { q: `How many moles are there in ${n(k[1] * mol)} g of ${k[0]} (molar mass ${k[1]} g/mol)?`, a: n(mol), wrong: near(mol, [mol * 2, k[1] * mol, mol + 1], R), steps: [`Moles = mass ÷ molar mass = ${n(k[1] * mol)} ÷ ${k[1]} = ${n(mol)}`] }; },
    concentration: (R) => { const solute = R.int(2, 40), solvent = R.int(5, 40) * 10; const c = (solute / (solute + solvent)) * 100; return { q: `${solute} g of salt is dissolved in ${solvent} g of water. Find the concentration (mass by mass percent).`, a: `${n(Math.round(c * 100) / 100)}%`, wrong: [`${n(Math.round((solute / solvent) * 10000) / 100)}%`, `${n(Math.round((solvent / (solute + solvent)) * 10000) / 100)}%`, `${n(solute)}%`].filter((s, i, arr) => s !== `${n(Math.round(c * 100) / 100)}%` && arr.indexOf(s) === i), steps: [`Mass of solution = ${solute} + ${solvent} = ${solute + solvent} g`, `Concentration = ${solute} ÷ ${solute + solvent} × 100 = ${n(Math.round(c * 100) / 100)}%`] }; },
    // ---------- Chemistry (numbers stated in the question; NCERT values) ----------
    kelvin: (R) => { const toK = R.next() < 0.5; if (toK) { const c = R.pick([-173, -73, -23, 0, 25, 27, 37, 77, 100, 127]); const k = c + 273; return { q: `Convert ${n(c)} °C to kelvin. (K = °C + 273)`, a: `${n(k)} K`, wrong: nr(k, [c - 273, 273 - c, c + 373], R, (x) => `${n(x)} K`), steps: [`K = °C + 273`, `K = ${n(c)} + 273 = ${n(k)} K`] }; } const k = R.pick([100, 200, 273, 300, 310, 373, 400]); const c = k - 273; return { q: `Convert ${k} K to degrees Celsius. (°C = K − 273)`, a: `${n(c)} °C`, wrong: nr(c, [k + 273, k - 373, 273 - k], R, (x) => `${n(x)} °C`), steps: [`°C = K − 273`, `°C = ${k} − 273 = ${n(c)} °C`] }; },
    formulaMass: (R) => {
      const AM = { H: 1, C: 12, N: 14, O: 16, Na: 23, Mg: 24, Al: 27, S: 32, Cl: 35.5, K: 39, Ca: 40, Fe: 56, Cu: 63.5, Zn: 65 };
      const list = [["Ca(OH)₂", [["Ca", 1], ["O", 2], ["H", 2]]], ["Na₂CO₃", [["Na", 2], ["C", 1], ["O", 3]]], ["HNO₃", [["H", 1], ["N", 1], ["O", 3]]], ["CaCl₂", [["Ca", 1], ["Cl", 2]]], ["Al₂O₃", [["Al", 2], ["O", 3]]], ["MgSO₄", [["Mg", 1], ["S", 1], ["O", 4]]], ["KOH", [["K", 1], ["O", 1], ["H", 1]]], ["ZnO", [["Zn", 1], ["O", 1]]], ["Fe₂O₃", [["Fe", 2], ["O", 3]]], ["CuSO₄", [["Cu", 1], ["S", 1], ["O", 4]]], ["NH₄Cl", [["N", 1], ["H", 4], ["Cl", 1]]], ["C₂H₆", [["C", 2], ["H", 6]]], ["C₂H₅OH", [["C", 2], ["H", 6], ["O", 1]]], ["CH₃COOH", [["C", 2], ["H", 4], ["O", 2]]], ["C₆H₁₂O₆", [["C", 6], ["H", 12], ["O", 6]]], ["CH₃Cl", [["C", 1], ["H", 3], ["Cl", 1]]]];
      const [f, parts] = R.pick(list);
      const tot = (ps) => ps.reduce((s, [e, c]) => s + AM[e] * c, 0);
      const ans = tot(parts);
      const term = ([e, c]) => (c > 1 ? `${c} × ${AM[e]}` : `${AM[e]}`);
      const given = parts.map(([e]) => `${e} = ${AM[e]}`).join(", ");
      const i = parts.findIndex(([, c]) => c > 1);
      const bumped = parts.map(([e, c], j) => (j === (i < 0 ? 0 : i) ? [e, c + 1] : [e, c]));
      return { q: `Find the formula mass (molecular mass) of ${f}. (${given})`, a: `${n(ans)} u`, wrong: nr(ans, [parts.reduce((s, [e]) => s + AM[e], 0), tot(bumped), ans + AM[parts[parts.length - 1][0]]], R, (x) => `${n(x)} u`), steps: [`Atoms in one unit of ${f}: ${parts.map(([e, c]) => `${e} × ${c}`).join(", ")}`, `Mass = ${parts.map(term).join(" + ")} = ${n(ans)} u`] };
    },
    molMass: (R) => {
      const k = R.pick([["water", "H₂O", 18], ["carbon dioxide", "CO₂", 44], ["sodium hydroxide", "NaOH", 40], ["calcium carbonate", "CaCO₃", 100], ["ammonia", "NH₃", 17], ["sulphuric acid", "H₂SO₄", 98], ["methane", "CH₄", 16], ["glucose", "C₆H₁₂O₆", 180]]);
      const mol = R.pick([0.25, 0.5, 1, 1.5, 2, 2.5, 3, 4, 5]);
      const mass = k[2] * mol;
      if (R.next() < 0.5) return { q: `How many moles are there in ${n(mass)} g of ${k[0]}, ${k[1]}? (molar mass = ${k[2]} g/mol)`, a: `${fm(mol)} mol`, wrong: nr(mol, [mass * k[2], k[2] / mass, mass - k[2]], R, (x) => `${fm(x)} mol`), steps: [`Moles = mass ÷ molar mass`, `n = ${n(mass)} ÷ ${k[2]} = ${fm(mol)} mol`] };
      return { q: `What is the mass of ${fm(mol)} mol of ${k[0]}, ${k[1]}? (molar mass = ${k[2]} g/mol)`, a: `${n(mass)} g`, wrong: nr(mass, [k[2] / mol, mol + k[2], mass * 10], R, (x) => `${fm(x)} g`), steps: [`Mass = moles × molar mass`, `m = ${fm(mol)} × ${k[2]} = ${n(mass)} g`] };
    },
    particles: (R) => {
      const A = 6.022, mol = R.pick([0.1, 0.2, 0.5, 2, 3, 4, 5, 10]);
      if (R.next() < 0.5) { const N = mol * A * 1e23; return { q: `How many molecules are there in ${fm(mol)} mol of a gas? (Avogadro constant = 6.022 × 10²³ per mol; give 4 significant figures)`, a: sci(N, 4), wrong: nr(N, [N * 10, N / 10, A * 1e23 / mol], R, (x) => sci(x, 4)), steps: [`Number of molecules = n × 6.022 × 10²³`, `N = ${fm(mol)} × 6.022 × 10²³ = ${sci(N, 4)}`] }; }
      const N = mol * A * 1e23;
      return { q: `A sample contains ${sci(N, 5)} molecules. How many moles is this? (Avogadro constant = 6.022 × 10²³ per mol)`, a: `${fm(mol)} mol`, wrong: nr(mol, [mol * A, mol * 10, mol / 10], R, (x) => `${fm(x)} mol`), steps: [`n = N ÷ (6.022 × 10²³)`, `n = ${sci(N, 5)} ÷ (6.022 × 10²³) = ${fm(mol)} mol`] };
    },
    massPercent: (R) => {
      const list = [["H₂O", "O", 18, 16, "2 × 1 + 16", "H = 1, O = 16"], ["H₂O", "H", 18, 2, "2 × 1 + 16", "H = 1, O = 16"], ["CO₂", "C", 44, 12, "12 + 2 × 16", "C = 12, O = 16"], ["CaCO₃", "Ca", 100, 40, "40 + 12 + 3 × 16", "Ca = 40, C = 12, O = 16"], ["CaCO₃", "O", 100, 48, "40 + 12 + 3 × 16", "Ca = 40, C = 12, O = 16"], ["NaOH", "Na", 40, 23, "23 + 16 + 1", "Na = 23, O = 16, H = 1"], ["NH₃", "N", 17, 14, "14 + 3 × 1", "N = 14, H = 1"], ["H₂SO₄", "S", 98, 32, "2 × 1 + 32 + 4 × 16", "H = 1, S = 32, O = 16"], ["CH₄", "C", 16, 12, "12 + 4 × 1", "C = 12, H = 1"], ["MgO", "Mg", 40, 24, "24 + 16", "Mg = 24, O = 16"], ["Fe₂O₃", "Fe", 160, 112, "2 × 56 + 3 × 16", "Fe = 56, O = 16"], ["Na₂CO₃", "Na", 106, 46, "2 × 23 + 12 + 3 × 16", "Na = 23, C = 12, O = 16"]];
      const [f, el, M, w, expr, given] = R.pick(list);
      const p = (w / M) * 100;
      const pc = (x) => `${fm(x, 4)}%`;
      return { q: `Find the mass percentage of ${el} in ${f}. (${given}; give 2 decimal places if needed)`, a: pc(rd2(p)), wrong: nr(rd2(p), [rd2(((M - w) / M) * 100), rd2((w / M) * 10), rd2((w / (M + w)) * 100)], R, pc), steps: [`Molar mass of ${f} = ${expr} = ${M} g/mol`, `Mass of ${el} in one mole = ${w} g`, `Mass % of ${el} = ${w} ÷ ${M} × 100 = ${pc(rd2(p))}`] };
    },
    empirical: (R) => {
      const list = [["Mg", 24, 60, "O", 16, 40, "MgO"], ["Fe", 56, 70, "O", 16, 30, "Fe₂O₃"], ["S", 32, 50, "O", 16, 50, "SO₂"], ["S", 32, 40, "O", 16, 60, "SO₃"], ["C", 12, 75, "H", 1, 25, "CH₄"], ["C", 12, 80, "H", 1, 20, "CH₃"]];
      const [e1, a1, p1, e2, a2, p2, ans] = R.pick(list);
      const n1 = p1 / a1, n2 = p2 / a2, sm = Math.min(n1, n2);
      let r1 = n1 / sm, r2 = n2 / sm, k = 1;
      while (k < 5 && !(Number.isInteger(Math.round(r1 * k * 1e6) / 1e6) && Number.isInteger(Math.round(r2 * k * 1e6) / 1e6))) k++;
      const s1 = Math.round(r1 * k), s2 = Math.round(r2 * k);
      const fo = (a, b) => `${e1}${a > 1 ? toSub(a) : ""}${e2}${b > 1 ? toSub(b) : ""}`;
      const sw = `${e1}${s2 > 1 ? toSub(s2) : ""}${e2}${s1 > 1 ? toSub(s1) : ""}`;
      const byMass = (() => { const g = gcd(p1, p2); return fo(p1 / g, p2 / g); })();
      return { q: `A compound contains ${p1}% ${e1} and ${p2}% ${e2} by mass. Find its empirical formula. (${e1} = ${a1}, ${e2} = ${a2})`, a: ans, wrong: nr(ans, [sw, byMass, fo(s1 * 2, s2 * 2), fo(s2 + 1, s1), fo(s1, s2 + 1)], R, String), steps: [`Moles of ${e1} = ${p1} ÷ ${a1} = ${fm(n1, 4)} mol`, `Moles of ${e2} = ${p2} ÷ ${a2} = ${fm(n2, 4)} mol`, `Divide by the smaller: ${e1} : ${e2} = ${fm(r1, 3)} : ${fm(r2, 3)}${k > 1 ? `; multiply by ${k} to get ${s1} : ${s2}` : ""}`, `Empirical formula = ${ans}`] };
    },
    molarity: (R) => {
      const sol = R.pick([["NaOH", 40], ["KOH", 56], ["HCl", 36.5], ["NaCl", 58.5], ["H₂SO₄", 98], ["Na₂CO₃", 106], ["glucose", 180]]);
      let mol, V, mass;
      for (let t = 0; t < 40; t++) { mol = R.pick([0.05, 0.1, 0.2, 0.25, 0.5, 1, 2]); mass = mol * sol[1]; if (Math.abs(mass * 100 - Math.round(mass * 100)) < 1e-6) break; }
      V = R.pick([100, 200, 250, 500, 1000]);
      const M = mol / (V / 1000);
      return { q: `${n(mass)} g of ${sol[0]} (molar mass ${sol[1]} g/mol) is dissolved in water to make ${V} mL of solution. Find its molarity.`, a: `${fm(M)} mol/L`, wrong: nr(M, [M / 1000, mass / (V / 1000), mol * (V / 1000)], R, (x) => `${fm(x)} mol/L`), steps: [`Moles of solute = ${n(mass)} ÷ ${sol[1]} = ${fm(mol)} mol`, `Volume = ${V} mL = ${V} ÷ 1000 = ${fm(V / 1000)} L`, `Molarity = moles ÷ volume in litres = ${fm(mol)} ÷ ${fm(V / 1000)} = ${fm(M)} mol/L`] };
    },
    molality: (R) => {
      const sol = R.pick([["NaOH", 40], ["KOH", 56], ["urea", 60], ["NaCl", 58.5], ["glucose", 180], ["sucrose", 342]]);
      let mol, mass;
      for (let t = 0; t < 40; t++) { mol = R.pick([0.05, 0.1, 0.2, 0.25, 0.5, 1, 2]); mass = mol * sol[1]; if (Math.abs(mass * 100 - Math.round(mass * 100)) < 1e-6) break; }
      const W = R.pick([100, 200, 250, 500, 1000]);
      const m = mol / (W / 1000);
      return { q: `${n(mass)} g of ${sol[0]} (molar mass ${sol[1]} g/mol) is dissolved in ${W} g of water. Find the molality of the solution.`, a: `${fm(m)} mol/kg`, wrong: nr(m, [m / 1000, mass / (W / 1000), mol * (W / 1000)], R, (x) => `${fm(x)} mol/kg`), steps: [`Moles of solute = ${n(mass)} ÷ ${sol[1]} = ${fm(mol)} mol`, `Mass of solvent = ${W} g = ${W} ÷ 1000 = ${fm(W / 1000)} kg`, `Molality = moles ÷ mass of solvent in kg = ${fm(mol)} ÷ ${fm(W / 1000)} = ${fm(m)} mol/kg`] };
    },
    dilution: (R) => {
      let M1, M2, V2, V1;
      for (let t = 0; t < 60; t++) { M1 = R.pick([2, 4, 5, 6, 10, 12]); M2 = R.pick([0.1, 0.2, 0.25, 0.5, 1]); V2 = R.pick([100, 200, 250, 500, 1000]); V1 = (M2 * V2) / M1; if (V1 >= 1 && Math.abs(V1 * 100 - Math.round(V1 * 100)) < 1e-6 && M2 < M1) break; }
      return { q: `What volume of ${fm(M1)} M stock solution is needed to prepare ${V2} mL of ${fm(M2)} M solution?`, a: `${fm(V1)} mL`, wrong: nr(V1, [(M1 * V2) / M2, V2 - V1, M2 * V2 * M1], R, (x) => `${fm(x)} mL`), steps: [`M₁V₁ = M₂V₂`, `V₁ = M₂V₂ ÷ M₁ = ${fm(M2)} × ${V2} ÷ ${fm(M1)} = ${fm(V1)} mL`] };
    },
    limiting: (R) => {
      const rx = [["2H₂ + O₂ → 2H₂O", ["H₂", 2, 2], ["O₂", 1, 32], ["H₂O", 2, 18], "H = 1, O = 16"], ["N₂ + 3H₂ → 2NH₃", ["N₂", 1, 28], ["H₂", 3, 2], ["NH₃", 2, 17], "H = 1, N = 14"], ["C + O₂ → CO₂", ["C", 1, 12], ["O₂", 1, 32], ["CO₂", 1, 44], "C = 12, O = 16"], ["2Mg + O₂ → 2MgO", ["Mg", 2, 24], ["O₂", 1, 32], ["MgO", 2, 40], "Mg = 24, O = 16"]];
      const [eq, A, B, P, given] = R.pick(rx);
      const k = R.int(1, 4), extra = R.int(1, 3);
      const aLim = R.next() < 0.5;
      const kA = aLim ? k : k + extra, kB = aLim ? k + extra : k; // units of reaction each reactant could supply
      const mA = kA * A[1] * A[2], mB = kB * B[1] * B[2];
      const lim = aLim ? A : B, nl = Math.min(kA, kB), prodMol = nl * P[1], ans = prodMol * P[2];
      const nA = mA / A[2], nB = mB / B[2];
      const other = Math.max(kA, kB) * P[1] * P[2];
      return { q: `${n(mA)} g of ${A[0]} reacts with ${n(mB)} g of ${B[0]} according to ${eq}. Find the mass of ${P[0]} formed. (${given})`, a: `${n(ans)} g`, wrong: nr(ans, [other, mA + mB, aLim ? mA : mB], R, (x) => `${n(x)} g`), steps: [`n(${A[0]}) = ${n(mA)} ÷ ${A[2]} = ${n(nA)} mol; n(${B[0]}) = ${n(mB)} ÷ ${B[2]} = ${n(nB)} mol`, `Divide by the coefficients: ${A[0]} ${n(nA)} ÷ ${A[1]} = ${n(kA)}, ${B[0]} ${n(nB)} ÷ ${B[1]} = ${n(kB)}; ${lim[0]} is the limiting reagent`, `n(${P[0]}) = ${n(nl)} × ${P[1]} = ${n(prodMol)} mol`, `Mass of ${P[0]} = ${n(prodMol)} × ${P[2]} = ${n(ans)} g`] };
    },
    photon: (R) => {
      const h = 6.626e-34, c = 3.0e8;
      if (R.next() < 0.5) { const k = R.int(2, 9), nu = k * 1e14; const E = h * nu; return { q: `Find the energy of a photon of frequency ${k} × 10¹⁴ Hz. (h = 6.626 × 10⁻³⁴ J s; give 3 significant figures)`, a: `${sci(E)} J`, wrong: nr(E, [E * 10, E / 10, nu / h], R, (x) => `${sci(x)} J`), steps: [`E = hν`, `E = 6.626 × 10⁻³⁴ × ${k} × 10¹⁴ = ${sci(E)} J`] }; }
      const lam = R.pick([200, 250, 300, 400, 500, 600, 700]); const E = (h * c) / (lam * 1e-9);
      return { q: `Find the energy of a photon of wavelength ${lam} nm. (h = 6.626 × 10⁻³⁴ J s, c = 3.0 × 10⁸ m/s; give 3 significant figures)`, a: `${sci(E)} J`, wrong: nr(E, [(h * c) / lam, E * 10, E / 10], R, (x) => `${sci(x)} J`), steps: [`λ = ${lam} nm = ${lam} × 10⁻⁹ m`, `E = hc ÷ λ = (6.626 × 10⁻³⁴ × 3.0 × 10⁸) ÷ (${lam} × 10⁻⁹) = ${sci(E)} J`] };
    },
    deBroglie: (R) => {
      const h = 6.626e-34;
      const o = R.pick([["an electron (mass 9.1 × 10⁻³¹ kg)", 9.1e-31, [1, 2, 4, 5], 1e6, "× 10⁶ m/s"], ["a ball of mass 0.1 kg", 0.1, [10, 20, 25, 40], 1, " m/s"]]);
      const vk = R.pick(o[2]), v = vk * o[3];
      const lam = h / (o[1] * v);
      return { q: `Find the de Broglie wavelength of ${o[0]} moving at ${vk}${o[4].startsWith("×") ? " " : ""}${o[4]}. (h = 6.626 × 10⁻³⁴ J s; give 3 significant figures)`, a: `${sci(lam)} m`, wrong: nr(lam, [lam * 10, lam / 10, h / (o[1] * v * v)], R, (x) => `${sci(x)} m`), steps: [`λ = h ÷ (mv)`, `λ = 6.626 × 10⁻³⁴ ÷ (${sci(o[1], 2)} × ${sci(v, 2)}) = ${sci(lam)} m`] };
    },
    bohr: (R) => {
      if (R.next() < 0.5) { const k = R.int(1, 6); const E = -13.6 / (k * k); return { q: `Find the energy of the electron in the n = ${k} level of a hydrogen atom. (Eₙ = −13.6 ÷ n² eV; 2 decimal places)`, a: `${n(E)} eV`, wrong: nr(E, [-13.6 / k, -13.6 * k * k, -E], R, (x) => `${n(x)} eV`), steps: [`Eₙ = −13.6 ÷ n² eV`, `E = −13.6 ÷ ${k}² = −13.6 ÷ ${k * k} = ${n(E)} eV`] }; }
      const a = R.int(1, 3), b = a + R.int(1, 3); const dE = 13.6 * (1 / (a * a) - 1 / (b * b));
      return { q: `How much energy does a hydrogen atom absorb when its electron jumps from n = ${a} to n = ${b}? (Eₙ = −13.6 ÷ n² eV; 2 decimal places)`, a: `${n(dE)} eV`, wrong: nr(dE, [-dE, 13.6 * (1 / a - 1 / b), 13.6 * (b * b - a * a)], R, (x) => `${n(x)} eV`), steps: [`E${toSub(a)} = −13.6 ÷ ${a * a} = ${n(-13.6 / (a * a))} eV, E${toSub(b)} = −13.6 ÷ ${b * b} = ${n(-13.6 / (b * b))} eV`, `ΔE = E${toSub(b)} − E${toSub(a)} = ${n(rd2(-13.6 / (b * b)))} − (${n(rd2(-13.6 / (a * a)))}) = ${n(dE)} eV`] };
    },
    atomicParticles: (R) => {
      const els = [["hydrogen", "H", 1, 1], ["carbon", "C", 6, 12], ["nitrogen", "N", 7, 14], ["oxygen", "O", 8, 16], ["sodium", "Na", 11, 23], ["magnesium", "Mg", 12, 24], ["aluminium", "Al", 13, 27], ["chlorine", "Cl", 17, 35], ["calcium", "Ca", 20, 40], ["iron", "Fe", 26, 56]];
      const [nm, sy, Z, A] = R.pick(els);
      if (R.next() < 0.6) return { q: `An atom of ${nm} (${sy}) has atomic number ${Z} and mass number ${A}. How many neutrons does it have?`, a: n(A - Z), wrong: nr(A - Z, [A + Z, Z, A], R), steps: [`Neutrons = mass number − atomic number`, `Neutrons = ${A} − ${Z} = ${A - Z}`] };
      const ion = R.pick([["Na", "Na⁺", 11, 1], ["Mg", "Mg²⁺", 12, 2], ["Al", "Al³⁺", 13, 3], ["Cl", "Cl⁻", 17, -1], ["O", "O²⁻", 8, -2], ["Ca", "Ca²⁺", 20, 2]]);
      return { q: `How many electrons are there in the ${ion[1]} ion? (atomic number of ${ion[0]} = ${ion[2]})`, a: n(ion[2] - ion[3]), wrong: nr(ion[2] - ion[3], [ion[2] + ion[3], ion[2], ion[2] - ion[3] * 2], R), steps: [`A neutral ${ion[0]} atom has ${ion[2]} electrons`, `${ion[1]} has ${ion[3] > 0 ? "lost" : "gained"} ${Math.abs(ion[3])}, so electrons = ${ion[2]} ${ion[3] > 0 ? "−" : "+"} ${Math.abs(ion[3])} = ${ion[2] - ion[3]}`] };
    },
    idealGas: (R) => {
      const mol = R.pick([0.5, 1, 2, 3]), tc = R.pick([0, 27, 47, 77, 127]), V = R.pick([2, 4, 5, 10, 20]);
      const T = tc + 273, Rg = 0.0821, p = (mol * Rg * T) / V;
      return { q: `Find the pressure of ${fm(mol)} mol of an ideal gas in a ${V} L vessel at ${tc} °C. (R = 0.0821 L atm K⁻¹ mol⁻¹; convert to kelvin using K = °C + 273; 3 significant figures)`, a: `${fm(p)} atm`, wrong: nr(p, [(mol * Rg * tc) / V || p * 2, p * V * V, (mol * T) / (Rg * V)], R, (x) => `${fm(x)} atm`), steps: [`T = ${tc} + 273 = ${T} K`, `pV = nRT, so p = nRT ÷ V`, `p = ${fm(mol)} × 0.0821 × ${T} ÷ ${V} = ${fm(p)} atm`] };
    },
    boyle: (R) => {
      const P1 = R.pick([1, 2, 3, 4]), V1 = R.pick([2, 3, 4, 5, 6, 8, 10, 12]), P2 = R.pick([0.5, 1, 2, 3, 4, 6].filter((x) => x !== P1));
      const V2 = (P1 * V1) / P2;
      return { q: `A gas occupies ${V1} L at ${P1} atm. What is its volume at ${P2} atm if the temperature stays constant?`, a: `${fm(V2)} L`, wrong: nr(V2, [(P2 * V1) / P1, V1 * P1 * P2, V1 + P1 - P2 > 0 ? V1 + P1 - P2 : V1 + 1], R, (x) => `${fm(x)} L`), steps: [`Boyle's law: P₁V₁ = P₂V₂`, `V₂ = P₁V₁ ÷ P₂ = ${P1} × ${V1} ÷ ${P2} = ${fm(V2)} L`] };
    },
    charles: (R) => {
      const V1 = R.pick([2, 3, 4, 5, 6, 10]), t1 = R.pick([27, 47, 77, 127]), t2 = R.pick([127, 177, 227, -73, -23, 327]);
      const T1 = t1 + 273, T2 = t2 + 273, V2 = (V1 * T2) / T1;
      return { q: `A gas has volume ${V1} L at ${t1} °C. What is its volume at ${n(t2)} °C at constant pressure? (K = °C + 273; 3 significant figures)`, a: `${fm(V2)} L`, wrong: nr(V2, [(V1 * t2) / t1, (V1 * T1) / T2, V1 + (t2 - t1) / 100], R, (x) => `${fm(x)} L`), steps: [`T₁ = ${t1} + 273 = ${T1} K, T₂ = ${n(t2)} + 273 = ${T2} K`, `Charles' law: V₁ ÷ T₁ = V₂ ÷ T₂`, `V₂ = V₁T₂ ÷ T₁ = ${V1} × ${T2} ÷ ${T1} = ${fm(V2)} L`] };
    },
    gibbs: (R) => {
      const dH = R.pick([-286, -92, -46, -180, -50, 40, 60, 100, 178]), dS = R.pick([-200, -100, -50, 50, 100, 150, 160, 200]), T = R.pick([298, 300, 400, 500, 1000]);
      const TS = (T * dS) / 1000, dG = dH - TS;
      const sp = dG < 0 ? "negative, so the reaction is spontaneous" : dG > 0 ? "positive, so the reaction is not spontaneous" : "zero, so the system is at equilibrium";
      return { q: `For a reaction ΔH = ${n(dH)} kJ/mol and ΔS = ${n(dS)} J K⁻¹ mol⁻¹. Find ΔG at ${T} K in kJ/mol.`, a: `${n(dG)} kJ/mol`, wrong: nr(dG, [dH - T * dS, dH + TS, -dG], R, (x) => `${n(x)} kJ/mol`), steps: [`TΔS = ${T} × ${dS < 0 ? `(${n(dS)})` : n(dS)} ÷ 1000 = ${n(TS)} kJ/mol`, `ΔG = ΔH − TΔS = ${n(dH)} − (${n(TS)}) = ${n(dG)} kJ/mol`, `ΔG is ${sp}`] };
    },
    gibbsT: (R) => {
      const T = R.pick([300, 400, 500, 600, 800, 1000]), dS = R.pick([50, 100, 150, 200, 250]); const dH = (T * dS) / 1000;
      return { q: `A reaction has ΔH = +${fm(dH)} kJ/mol and ΔS = +${dS} J K⁻¹ mol⁻¹. Above what temperature does it become spontaneous?`, a: `${T} K`, wrong: nr(T, [dH / dS, (T * 1000) / 1000 + 273, T - 273], R, (x) => `${fm(x)} K`), steps: [`At equilibrium ΔG = 0, so T = ΔH ÷ ΔS`, `ΔH = ${fm(dH)} × 1000 = ${fm(dH * 1000)} J/mol`, `T = ${fm(dH * 1000)} ÷ ${dS} = ${T} K`] };
    },
    firstLaw: (R) => {
      const q = R.int(2, 30) * 10, w = R.int(1, 12) * 5; const heatIn = R.next() < 0.5, workOn = R.next() < 0.5;
      const qs = heatIn ? q : -q, ws = workOn ? w : -w; const dU = qs + ws;
      return { q: `A system ${heatIn ? "absorbs" : "releases"} ${q} J of heat and ${workOn ? "work of " + w + " J is done on it" : "it does " + w + " J of work on the surroundings"}. Find ΔU. (ΔU = q + w)`, a: `${n(dU)} J`, wrong: nr(dU, [qs - ws, -dU, Math.abs(qs) + Math.abs(ws)], R, (x) => `${n(x)} J`), steps: [`q = ${qs > 0 ? "+" : "−"}${q} J (${heatIn ? "heat absorbed" : "heat released"}), w = ${ws > 0 ? "+" : "−"}${w} J (${workOn ? "work done on the system" : "work done by the system"})`, `ΔU = q + w = (${n(qs)}) + (${n(ws)}) = ${n(dU)} J`] };
    },
    kc: (R) => {
      const rx = [["N₂ + 3H₂ ⇌ 2NH₃", [["N₂", 1], ["H₂", 3]], [["NH₃", 2]]], ["H₂ + I₂ ⇌ 2HI", [["H₂", 1], ["I₂", 1]], [["HI", 2]]], ["2SO₂ + O₂ ⇌ 2SO₃", [["SO₂", 2], ["O₂", 1]], [["SO₃", 2]]], ["PCl₅ ⇌ PCl₃ + Cl₂", [["PCl₅", 1]], [["PCl₃", 1], ["Cl₂", 1]]], ["N₂O₄ ⇌ 2NO₂", [["N₂O₄", 1]], [["NO₂", 2]]]];
      const [eq, re, pr] = R.pick(rx);
      const conc = {};
      const prod = (arr, f) => arr.reduce((x, [s, c]) => x * f(conc[s], c), 1);
      let num, den, K;
      for (let t = 0; t < 20; t++) { [...re, ...pr].forEach(([s]) => (conc[s] = R.pick([0.1, 0.2, 0.5, 1, 2, 4]))); num = prod(pr, (x, c) => x ** c); den = prod(re, (x, c) => x ** c); K = num / den; if (Math.abs(K - 1) > 1e-9) break; }
      const term = (arr) => arr.map(([s, c]) => `[${s}]${c > 1 ? toSup(c) : ""}`).join("");
      const val = (arr) => { const t = arr.map(([s, c]) => `(${fm(conc[s])})${c > 1 ? toSup(c) : ""}`).join(" × "); return arr.length > 1 ? `[${t}]` : t; };
      const noExp = prod(pr, (x) => x) / prod(re, (x) => x), mulC = prod(pr, (x, c) => x * c) / prod(re, (x, c) => x * c);
      return { q: `For ${eq} at equilibrium: ${[...re, ...pr].map(([s]) => `[${s}] = ${fm(conc[s])} mol/L`).join(", ")}. Find Kc. (3 significant figures)`, a: fm(K), wrong: nr(K, [1 / K, noExp, mulC], R, fm), steps: [`Kc = ${term(pr)} ÷ ${term(re).length ? term(re) : "1"} (products over reactants, powers = coefficients)`, `Kc = ${val(pr)} ÷ ${val(re)}`, `Kc = ${fm(num)} ÷ ${fm(den)} = ${fm(K)}`] };
    },
    pHcalc: (R) => {
      const mode = R.pick(["acidPow", "acidDec", "baseNaOH", "pOH", "mant"]);
      if (mode === "acidPow") { const e = R.int(1, 6); return { q: `Find the pH of a solution with [H⁺] = 10${toSup(-e)} mol/L.`, a: n(e), wrong: nr(e, [14 - e, -e, e + 1], R), steps: [`pH = −log[H⁺]`, `pH = −log(10${toSup(-e)}) = ${e}`] }; }
      if (mode === "acidDec") { const e = R.int(1, 4), c = 10 ** -e; const cs = "0." + "0".repeat(e - 1) + "1"; return { q: `Find the pH of ${cs} M HCl (a strong acid, fully ionised).`, a: n(e), wrong: nr(e, [14 - e, e + 1, e - 1 || 7], R), steps: [`[H⁺] = ${cs} M = 10${toSup(-e)} M`, `pH = −log[H⁺] = −log(10${toSup(-e)}) = ${e}`] }; }
      if (mode === "baseNaOH") { const e = R.int(1, 5), pOH = e, pH = 14 - e; return { q: `Find the pH of a 10${toSup(-e)} M NaOH solution at 25 °C. (pH + pOH = 14)`, a: n(pH), wrong: nr(pH, [e, 14 + e, -e], R), steps: [`[OH⁻] = 10${toSup(-e)} M, so pOH = −log[OH⁻] = ${pOH}`, `pH = 14 − pOH = 14 − ${pOH} = ${pH}`] }; }
      if (mode === "pOH") { const pOH = R.int(2, 12), pH = 14 - pOH; return { q: `The pOH of a solution is ${pOH} at 25 °C. What is its pH?`, a: n(pH), wrong: nr(pH, [pOH, 14 + pOH, pOH - 14], R), steps: [`pH + pOH = 14`, `pH = 14 − ${pOH} = ${pH}`] }; }
      const a = R.pick([2, 5]), e = R.int(2, 4), lg = { 2: 0.3, 5: 0.7 }[a]; const pH = Math.round((e - lg) * 100) / 100;
      return { q: `Find the pH of a solution with [H⁺] = ${a} × 10${toSup(-e)} mol/L. (log ${a} = ${lg})`, a: n(pH), wrong: nr(pH, [e + lg, e, rd2(e - lg + 1)], R), steps: [`pH = −log(${a} × 10${toSup(-e)}) = −(log ${a} + log 10${toSup(-e)})`, `pH = −(${lg} − ${e}) = ${e} − ${lg} = ${n(pH)}`] };
    },
    oxNum: (R) => {
      const list = [["Mn", "KMnO₄", "(+1) + x + 4 × (−2) = 0", 7, "x = 8 − 1"], ["Cr", "K₂Cr₂O₇", "2 × (+1) + 2x + 7 × (−2) = 0", 6, "2x = 14 − 2, x = 12 ÷ 2"], ["S", "H₂SO₄", "2 × (+1) + x + 4 × (−2) = 0", 6, "x = 8 − 2"], ["N", "HNO₃", "(+1) + x + 3 × (−2) = 0", 5, "x = 6 − 1"], ["Cl", "HClO₄", "(+1) + x + 4 × (−2) = 0", 7, "x = 8 − 1"], ["Mn", "MnO₂", "x + 2 × (−2) = 0", 4, "x = 0 + 4"], ["C", "CO₂", "x + 2 × (−2) = 0", 4, "x = 0 + 4"], ["P", "H₃PO₄", "3 × (+1) + x + 4 × (−2) = 0", 5, "x = 8 − 3"], ["Fe", "Fe₂O₃", "2x + 3 × (−2) = 0", 3, "2x = 6, x = 6 ÷ 2"]];
      const [el, f, eqn, v, calc] = R.pick(list);
      const sg = (x) => (x > 0 ? `+${x}` : `−${Math.abs(x)}`);
      return { q: `Find the oxidation number of ${el} in ${f}. (oxidation number of O = −2, of H and K = +1)`, a: sg(v), wrong: nr(sg(v), [sg(v - 1), sg(v + 1), sg(-v), sg(v + 2)], R, String), steps: [`Sum of oxidation numbers = 0: ${eqn}`, `${calc} = ${v}`] };
    },
    massProduct: (R) => {
      const rx = [["Mg", "O₂", "MgO", 3, 2], ["H₂", "O₂", "H₂O", 1, 8], ["C", "O₂", "CO₂", 3, 8], ["Fe", "S", "FeS", 7, 4]];
      const dc = [["CaCO₃", "CaO", "CO₂", 25, 14], ["H₂O", "H₂", "O₂", 9, 1]];
      if (R.next() < 0.7) { const [a, b, p, ra, rb] = R.pick(rx); const k = R.int(1, 6); const ma = ra * k, mb = rb * k;
        if (R.next() < 0.5) return { q: `${ma} g of ${a} combines completely with ${mb} g of ${b} to form ${p}. What mass of ${p} is formed? (law of conservation of mass)`, a: `${ma + mb} g`, wrong: nr(ma + mb, [Math.abs(ma - mb), ma * mb, Math.max(ma, mb)], R, (x) => `${n(x)} g`), steps: [`Mass of reactants = ${ma} + ${mb} = ${ma + mb} g`, `Mass of product = mass of reactants = ${ma + mb} g`] };
        return { q: `${ma + mb} g of ${p} is formed when ${ma} g of ${a} reacts completely with ${b}. What mass of ${b} was used? (law of conservation of mass)`, a: `${mb} g`, wrong: nr(mb, [ma + mb + ma, ma, ma + mb], R, (x) => `${n(x)} g`), steps: [`Mass of product = mass of ${a} + mass of ${b}`, `Mass of ${b} = ${ma + mb} − ${ma} = ${mb} g`] }; }
      const [x, y, z, rx_, ry] = R.pick(dc); const rz = rx_ - ry; const k = R.int(1, 8); const mx = rx_ * k, my = ry * k, mz = rz * k;
      return { q: `${mx} g of ${x} is decomposed completely. It gives ${my} g of ${y}. What mass of ${z} is formed? (law of conservation of mass)`, a: `${mz} g`, wrong: nr(mz, [mx + my, my, mx], R, (v) => `${n(v)} g`), steps: [`Mass of ${x} decomposed = mass of ${y} + mass of ${z}`, `Mass of ${z} = ${mx} − ${my} = ${mz} g`] };
    },

    // Class 12 chemistry: solutions, electrochemistry, kinetics
    moleFraction: (R) => {
      const sv = R.pick([["water", 18], ["ethanol", 46], ["methanol", 32], ["acetone", 58]]);
      const su = R.pick([["ethanol", 46], ["methanol", 32], ["urea", 60], ["glucose", 180], ["acetone", 58]].filter((x) => x[0] !== sv[0]));
      const k1 = R.pick([1, 2, 3, 4]), k2 = R.pick([0.5, 1, 2]);
      const m1 = sv[1] * k1, m2 = su[1] * k2, n1 = k1, n2 = k2, x = n2 / (n1 + n2);
      return { q: `A solution has ${m2} g of ${su[0]} (molar mass ${su[1]} g/mol) in ${m1} g of ${sv[0]} (molar mass ${sv[1]} g/mol). Find the mole fraction of ${su[0]}. (3 significant figures)`, a: fm(x), wrong: nr(x, [n2 / n1, n1 / (n1 + n2), m2 / (m1 + m2)], R, fm), steps: [`n(${su[0]}) = ${m2} ÷ ${su[1]} = ${fm(n2)} mol`, `n(${sv[0]}) = ${m1} ÷ ${sv[1]} = ${fm(n1)} mol`, `Mole fraction of ${su[0]} = ${fm(n2)} ÷ (${fm(n2)} + ${fm(n1)}) = ${fm(x)}`] };
    },
    raoult: (R) => {
      const p0 = R.pick([100, 200, 600, 760]), x = R.pick([0.05, 0.1, 0.2, 0.25, 0.4]);
      if (R.next() < 0.5) { const p = p0 * (1 - x); return { q: `Pure solvent has vapour pressure ${p0} mmHg. A non-volatile solute of mole fraction ${x} is dissolved in it. Find the vapour pressure of the solution.`, a: `${fm(p)} mmHg`, wrong: nr(p, [p0 * x, p0 * (1 + x), p0 / (1 - x)], R, (v) => `${fm(v)} mmHg`), steps: [`p = p° × (mole fraction of solvent) = p° × (1 − x)`, `p = ${p0} × (1 − ${x}) = ${fm(p)} mmHg`] }; }
      const p = p0 * (1 - x);
      return { q: `The vapour pressure of a pure solvent is ${p0} mmHg and that of a solution is ${fm(p)} mmHg. Find the relative lowering of vapour pressure.`, a: fm(x), wrong: nr(x, [(p0 - p) / p, p / p0, (p0 - p) / (p0 + p)], R, fm), steps: [`Relative lowering = (p° − p) ÷ p°`, `= (${p0} − ${fm(p)}) ÷ ${p0} = ${fm(x)}`] };
    },
    bpElev: (R) => colligative(R, "b"),
    fpDep: (R) => colligative(R, "f"),
    osmotic: (R) => {
      const C = R.pick([0.01, 0.02, 0.05, 0.1, 0.2]), tc = R.pick([0, 25, 27, 37, 47]), T = tc + 273, Rg = 0.0821, pi = C * Rg * T;
      return { q: `Find the osmotic pressure of a ${fm(C)} mol/L solution at ${tc} °C. (π = CRT, R = 0.0821 L atm K⁻¹ mol⁻¹, K = °C + 273; 3 significant figures)`, a: `${fm(pi)} atm`, wrong: nr(pi, [C * Rg * tc || pi * 2, (C * T) / Rg, pi * 10], R, (x) => `${fm(x)} atm`), steps: [`T = ${tc} + 273 = ${T} K`, `π = CRT = ${fm(C)} × 0.0821 × ${T} = ${fm(pi)} atm`] };
    },
    cellEmf: (R) => {
      const el = [["Zn²⁺/Zn", -0.76], ["Fe²⁺/Fe", -0.44], ["Ni²⁺/Ni", -0.25], ["Pb²⁺/Pb", -0.13], ["H⁺/H₂", 0], ["Cu²⁺/Cu", 0.34], ["Ag⁺/Ag", 0.8], ["Mg²⁺/Mg", -2.37], ["Al³⁺/Al", -1.66]];
      const i = R.int(0, el.length - 1); let j = R.int(0, el.length - 1); if (j === i) j = (j + 1) % el.length;
      const [c, a] = el[i][1] > el[j][1] ? [el[i], el[j]] : [el[j], el[i]]; const E = Math.round((c[1] - a[1]) * 100) / 100;
      const v = (x) => `${x < 0 ? "−" : ""}${Math.abs(x).toFixed(2)}`;
      return { q: `E° of ${c[0]} = ${v(c[1])} V and E° of ${a[0]} = ${v(a[1])} V. The ${c[0]} electrode is the cathode and the ${a[0]} electrode is the anode. Find E°cell.`, a: `${v(E)} V`, wrong: nr(E, [-E, Math.round((c[1] + a[1]) * 100) / 100, Math.round((Math.abs(c[1]) + Math.abs(a[1])) * 100 + 100) / 100], R, (x) => `${v(x)} V`), steps: [`E°cell = E°(cathode) − E°(anode)`, `E°cell = ${v(c[1])} − (${v(a[1])}) = ${v(E)} V`] };
    },
    deltaGcell: (R) => {
      const o = R.pick([[1.1, 2], [0.78, 2], [1.56, 2], [0.46, 2], [2.71, 2], [2.0, 6], [1.05, 2], [0.8, 1], [0.34, 2]]);
      const [E, ne] = o, F = 96500, dG = (-ne * F * E) / 1000;
      return { q: `A cell reaction transfers ${ne} mole${ne > 1 ? "s" : ""} of electrons and the cell has E° = ${E.toFixed(2)} V. Find ΔG° in kJ/mol. (F = 96500 C/mol)`, a: `${n(dG)} kJ/mol`, wrong: nr(dG, [-dG, dG * 1000, -(F * E) / 1000], R, (x) => `${n(x)} kJ/mol`), steps: [`ΔG° = −nFE°`, `ΔG° = −${ne} × 96500 × ${E.toFixed(2)} = ${n(-ne * F * E)} J/mol`, `ΔG° = ${n(-ne * F * E)} ÷ 1000 = ${n(dG)} kJ/mol`] };
    },
    faraday: (R) => {
      const ml = R.pick([["copper", "Cu²⁺", 63.5, 2], ["silver", "Ag⁺", 108, 1], ["zinc", "Zn²⁺", 65, 2], ["aluminium", "Al³⁺", 27, 3], ["nickel", "Ni²⁺", 58.7, 2]]);
      const I = R.pick([1, 2, 3, 5, 10]), tm = R.pick([10, 20, 30, 50, 60]), t = tm * 60, Q = I * t, F = 96500;
      const m = (Q * ml[2]) / (ml[3] * F);
      return { q: `A current of ${I} A is passed for ${tm} minutes through a solution of ${ml[1]} ions. Find the mass of ${ml[0]} deposited. (molar mass ${ml[2]} g/mol, F = 96500 C/mol; 3 significant figures)`, a: `${fm(m)} g`, wrong: nr(m, [(I * tm * ml[2]) / (ml[3] * F), (Q * ml[2]) / F, m * ml[3] * ml[3]], R, (x) => `${fm(x)} g`), steps: [`t = ${tm} min = ${tm} × 60 = ${t} s`, `Q = I × t = ${I} × ${t} = ${Q} C`, `m = Q × M ÷ (n × F) = ${Q} × ${ml[2]} ÷ (${ml[3]} × 96500) = ${fm(m)} g`] };
    },
    halfLife1: (R) => {
      const t = R.pick([5, 10, 15, 20, 30, 50, 60, 100]), k = 0.693 / t, kS = fm(k, 4);
      if (R.next() < 0.5) return { q: `A first-order reaction has rate constant k = ${kS} min⁻¹. Find its half-life. (t½ = 0.693 ÷ k)`, a: `${t} min`, wrong: nr(t, [fm(0.693 * k, 3) + " min", fm(1 / k, 3) + " min", t * 2 + " min"], R, (x) => `${fm(x)} min`), steps: [`t½ = 0.693 ÷ k`, `t½ = 0.693 ÷ ${kS} = ${t} min`] };
      return { q: `The half-life of a first-order reaction is ${t} minutes. Find its rate constant k. (k = 0.693 ÷ t½; 4 significant figures)`, a: `${kS} min⁻¹`, wrong: nr(k, [t * 0.693, k * 10, 1 / t], R, (x) => `${fm(x, 4)} min⁻¹`), steps: [`k = 0.693 ÷ t½`, `k = 0.693 ÷ ${t} = ${kS} min⁻¹`] };
    },
    halfLivesLeft: (R) => {
      const A0 = R.pick([16, 40, 64, 80, 100, 160, 200]), th = R.pick([10, 20, 30, 60]), nh = R.int(2, 5);
      const t = th * nh;
      const left = A0 / 2 ** nh;
      return { q: `A radioactive sample of ${A0} g has a half-life of ${th} minutes. How much remains after ${t} minutes?`, a: `${fm(left)} g`, wrong: nr(left, [A0 / (2 * nh), A0 - left, A0 / nh], R, (x) => `${fm(x)} g`), steps: [`Number of half-lives = ${t} ÷ ${th} = ${nh}`, `Amount left = ${A0} ÷ 2${toSup(nh)} = ${A0} ÷ ${2 ** nh} = ${fm(left)} g`] };
    },
    orderData: (R) => {
      const p = R.int(0, 3), c1 = R.pick([0.1, 0.2, 0.5]), r1 = R.int(1, 6), c2 = c1 * 2, r2 = r1 * 2 ** p;
      const names = ["zero order", "first order", "second order", "third order"];
      return { q: `For a reaction, doubling the concentration of A from ${c1} M to ${c2} M changes the rate from ${r1} × 10⁻³ to ${r2} × 10⁻³ mol L⁻¹ s⁻¹ (other concentrations constant). What is the order with respect to A?`, a: names[p], wrong: names.filter((_, i) => i !== p), steps: [`Rate ratio = ${r2} ÷ ${r1} = ${fm(r2 / r1)}`, `Concentration ratio = ${c2} ÷ ${c1} = 2`, `2ᵖ = ${fm(r2 / r1)}, so p = ${p} (${names[p]})`] };
    },
    zeroHalf: (R) => {
      const k = R.pick([0.01, 0.02, 0.04, 0.05, 0.1, 0.2]), t = R.pick([5, 10, 20, 25, 30, 50, 100]); const A0 = Math.round(2 * k * t * 1000) / 1000;
      return { q: `A zero-order reaction has initial concentration [A]₀ = ${fm(A0)} mol/L and rate constant k = ${fm(k)} mol L⁻¹ s⁻¹. Find its half-life. (t½ = [A]₀ ÷ 2k)`, a: `${t} s`, wrong: nr(t, [fm(A0 / k) + " s", fm(0.693 / k) + " s", fm(2 * A0 / k) + " s"], R, (x) => `${fm(x)} s`), steps: [`t½ = [A]₀ ÷ 2k`, `t½ = ${fm(A0)} ÷ (2 × ${fm(k)}) = ${t} s`] };
    },

    // ---------- picture questions (Classes 1-4 Maths) ----------
    // Each returns { q, a, wrong, steps, pic, picAlt }. The question text works read aloud without the picture. Without the picture kit
    // (an old cached file) they throw, so Gen.make returns null and the chapter's other generators are used instead.
    picCount: (R) => { const P = picKit(), nm = pickItems(R, 1)[0], k = R.int(1, 9); return { q: `Count the ${plural(nm)}. How many ${plural(nm)} are there?`, a: n(k), wrong: near(k, [{ v: k + 1, k: "slip" }, { v: k - 1, k: "slip" }, { v: k + 2, k: "slip" }, { v: k - 2, k: "slip" }].filter((c) => c.v >= 1), R), steps: [`Touch each ${nm} once and count.`, `There are ${k} ${count(k, nm)}.`], picAlt: count(k, nm), pic: P.svg(P.row(nm, k, { w: 300, h: 100 }), { w: 300, h: 100, label: count(k, nm) }) }; },
    picCount20: (R) => { const P = picKit(), nm = pickItems(R, 1)[0], k = R.int(10, 20); return { q: `Count the ${plural(nm)}. How many ${plural(nm)} are there?`, a: n(k), wrong: near(k, [{ v: k + 1, k: "slip" }, { v: k - 1, k: "slip" }, { v: k + 2, k: "slip" }, { v: k - 2, k: "slip" }], R), steps: [`Count the ${plural(nm)} one by one.`, `There are ${k} ${plural(nm)}.`], picAlt: count(k, nm), pic: P.svg(P.row(nm, k, { w: 300, h: 140 }), { w: 300, h: 140, label: count(k, nm) }) }; },
    picAdd: (R) => picAddQ(R, 1, 9, 9),
    picAdd2: (R) => picAddQ(R, 6, 9, 18, 11),
    picSub: (R) => picSubQ(R, 3, 9),
    picSub2: (R) => picSubQ(R, 11, 18),
    picMore: (R) => {
      const P = picKit(), [x, y] = pickItems(R, 2), same = R.next() < 0.2;
      const a = R.int(1, 9); let b = same ? a : R.int(1, 9); if (!same && b === a) b = a === 9 ? 8 : a + 1;
      const px = plural(x), py = plural(y), ans = same ? "same number" : a > b ? px : py;
      const wrong = same ? [px, py, "Cannot tell"] : [a > b ? py : px, "same number", "Cannot tell"];
      const lab = `${count(a, x)} and ${count(b, y)}`;
      return { q: `Look at the ${px} and the ${py}. Are there more ${px} or more ${py}?`, a: ans, wrong, kinds: ["slip", "slip", "method"], steps: [`Count the ${px}: ${a}.`, `Count the ${py}: ${b}.`, same ? `${a} and ${b} are the same number.` : `${Math.max(a, b)} is more than ${Math.min(a, b)}, so there are more ${ans}.`], picAlt: lab, pic: P.svg(`<g>${P.row(x, a, { w: 140, h: 100, s: same2(P, a, b, 100) })}</g><g transform="translate(160,0)">${P.row(y, b, { w: 140, h: 100, s: same2(P, a, b, 100) })}</g>`, { w: 300, h: 100, label: lab }) };
    },
    picCoins: (R) => {
      const P = picKit(); let vals, tot;
      do { vals = Array.from({ length: R.int(2, 4) }, () => R.pick([1, 2, 5, 10])); tot = vals.reduce((s, v) => s + v, 0); } while (tot > 25);
      vals.sort((p, q) => q - p);
      const lab = `Coins: ${vals.map((v) => rs(v)).join(", ")}`, step = Math.min(72, 280 / vals.length);
      return { q: "How much money is this? Add up the coins.", a: rs(tot), wrong: near(tot, [{ v: tot + 1, k: "slip" }, { v: tot - 1, k: "slip" }, { v: vals.length, k: "method" }, { v: tot + 2, k: "slip" }, { v: tot + 5, k: "slip" }], R, rs), steps: [`The coins are ${vals.map((v) => rs(v)).join(", ")}.`, `${vals.map((v) => rs(v)).join(" + ")} = ${rs(tot)}`], picAlt: lab, pic: P.svg(vals.map((v, i) => P.coin({ x: 150 + (i - (vals.length - 1) / 2) * step, y: 45, s: 64, value: v })).join(""), { w: 300, h: 90, label: lab }) };
    },
    picNotes: (R) => {
      const P = picKit(), notes = Array.from({ length: R.int(1, 2) }, () => R.pick([10, 20, 50, 100])).sort((p, q) => q - p), coins = Array.from({ length: R.int(1, 3) }, () => R.pick([1, 2, 5, 10])).sort((p, q) => q - p);
      const nt = notes.reduce((s, v) => s + v, 0), tot = nt + coins.reduce((s, v) => s + v, 0);
      const lab = `${notes.map((v) => `${rs(v)} note`).join(", ")} and coins ${coins.map((v) => rs(v)).join(", ")}`;
      return { q: "How much money is this? Add up the notes and the coins.", a: rs(tot), wrong: near(tot, [{ v: nt, k: "method" }, { v: tot + 10, k: "slip" }, { v: tot - 5, k: "slip" }, { v: tot + 5, k: "slip" }, { v: tot - 10, k: "slip" }], R, rs), steps: [`Notes: ${notes.map((v) => rs(v)).join(" + ")} = ${rs(nt)}.`, `Coins: ${coins.map((v) => rs(v)).join(" + ")} = ${rs(tot - nt)}.`, `${rs(nt)} + ${rs(tot - nt)} = ${rs(tot)}`], picAlt: lab, pic: P.svg(`${notes.map((v, i) => P.note({ x: 150 + (i - (notes.length - 1) / 2) * 140, y: 45, s: 130, value: v })).join("")}${coins.map((v, i) => P.coin({ x: 150 + (i - (coins.length - 1) / 2) * 72, y: 135, s: 62, value: v })).join("")}`, { w: 300, h: 180, label: lab }) };
    },
    picClock2: (R) => {
      const P = picKit(), h = R.int(1, 12), half = R.next() < 0.5, nx = (x) => (x % 12) + 1, say = (hh, hf) => (hf ? `half past ${hh}` : `${hh} o'clock`);
      const ans = say(h, half), lab = `A clock showing ${ans}`;
      return { q: "What time does the clock show?", a: ans, wrong: near(ans, [{ v: say(h, !half), k: "method" }, { v: say(nx(h), half), k: "slip" }, { v: say(((h + 10) % 12) + 1, half), k: "slip" }, { v: say(nx(h), !half), k: "method" }], R, String), steps: half ? [`The minute hand points to 6, so it is half past.`, `The hour hand is between ${h} and ${nx(h)}: half past ${h}.`] : [`The minute hand points to 12, so it is o'clock.`, `The hour hand points to ${h}: ${h} o'clock.`], picAlt: lab, pic: P.svg(P.clock({ x: 100, y: 98, s: 180, h, m: half ? 30 : 0 }), { w: 200, h: 200, label: lab }) };
    },
    picClock: (R) => {
      const P = picKit(), h = R.int(1, 12), m = R.pick([0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55]), tm = (hh, mm) => `${hh}:${String(mm).padStart(2, "0")}`, ans = tm(h, m), lab = `A clock showing ${ans}`;
      const swap = tm(m / 5 || 12, (h * 5) % 60), hour = ((h + (R.next() < 0.5 ? 0 : 10)) % 12) + 1;
      return { q: "What time does the clock show?", a: ans, wrong: near(ans, [{ v: swap, k: "method" }, { v: tm(hour, m), k: "slip" }, { v: tm(h, (m + 5) % 60), k: "slip" }, { v: tm(h, (m + 55) % 60), k: "slip" }, { v: tm(((h + 10) % 12) + 1, m), k: "slip" }], R, String), steps: [`The short hand shows the hour: it is just past ${h}.`, `The long hand shows the minutes: ${m / 5} × 5 = ${m} minutes.`, `The time is ${ans}.`], picAlt: lab, pic: P.svg(P.clock({ x: 100, y: 98, s: 180, h, m }), { w: 200, h: 200, label: lab }) };
    },
    picFrac: (R) => {
      const P = picKit(), d = R.pick([3, 4, 5, 6, 8]); let k = R.int(1, d - 1); if (2 * k === d) k = 1;
      const shape = R.pick(["roti", "pizza", "bar", "square", "circle"]), word = { roti: "the roti", pizza: "the pizza", bar: "the bar", square: "the square", circle: "the circle" }[shape];
      const f = (x, y) => `${x}/${y}`, lab = `${word.replace("the ", "A ")} split into ${d} equal parts with ${k} shaded`;
      return { q: `${word[0].toUpperCase() + word.slice(1)} is cut into ${d} equal parts. What fraction of ${word} is shaded?`, a: f(k, d), wrong: near(f(k, d), [{ v: f(d - k, d), k: "method" }, { v: f(d, k), k: "method" }, { v: f(k, d - k), k: "method" }, { v: f(Math.min(k + 1, d - 1), d), k: "slip" }, { v: f(k, d + 1), k: "slip" }], R, String), steps: [`The ${shape} has ${d} equal parts, so the bottom number is ${d}.`, `${k} ${k === 1 ? "part is" : "parts are"} shaded, so the top number is ${k}.`, `The fraction shaded is ${f(k, d)}.`], picAlt: lab, pic: P.svg(P.fraction({ x: 100, y: 98, s: 180, shape, parts: d, shaded: k }), { w: 200, h: 200, label: lab }) };
    },
    picTensOnes: (R) => {
      const P = picKit(), t = R.int(1, 9); let o = R.int(1, 9); if (o === t) o = o === 9 ? 8 : o + 1;
      const ans = 10 * t + o, lab = `${t} ${t === 1 ? "bundle" : "bundles"} of ten and ${o} ${o === 1 ? "single" : "singles"}`;
      return { q: `There are ${t} ${t === 1 ? "bundle" : "bundles"} of 10 sticks and ${o} ${o === 1 ? "loose stick" : "loose sticks"}. What number is this?`, a: n(ans), wrong: near(ans, [{ v: 10 * o + t, k: "method" }, { v: t + o, k: "method" }, { v: ans + 10, k: "slip" }, { v: ans - 10, k: "slip" }], R), steps: [`${t} tens = ${t * 10}.`, `${o} ${o === 1 ? "one" : "ones"} = ${o}.`, `${t * 10} + ${o} = ${ans}`], picAlt: lab, pic: P.svg(Array.from({ length: t }, (_, i) => { const r = Math.floor(i / 5), cols = Math.min(5, t - r * 5); return P.tens({ x: 150 + (i % 5 - (cols - 1) / 2) * 58, y: t > 5 ? 38 + r * 60 : 55, s: 54 }); }).join("") + Array.from({ length: o }, (_, i) => P.one({ x: 150 + (i - (o - 1) / 2) * 26, y: 152, s: 44 })).join(""), { w: 300, h: 190, label: lab }) };
    },
    picShape: (R) => picShapeQ(R, ["circle", "square", "triangle", "rectangle", "oval", "star"]),
    picShape3: (R) => picShapeQ(R, ["cube", "cuboid", "cone", "cylinder", "sphere"]),

  };

  // Squares and cubes need a little post-processing.
  function finishSqCube(name, R, raw) {
    const k = raw.k;
    if (name === "squares") {
      const askSq = raw.q.includes("²");
      const ans = askSq ? k * k : k;
      return { q: raw.q, a: n(ans), wrong: near(ans, askSq ? [k * 2, k * k + k, (k + 1) * (k + 1)] : [k + 1, k - 1, Math.round((k * k) / 2)], R), steps: askSq ? [`${k}² = ${k} × ${k} = ${n(k * k)}`] : [`${k} × ${k} = ${n(k * k)}, so √${n(k * k)} = ${k}`] };
    }
    const askCube = raw.q.includes("³") && !raw.q.includes("root");
    const ans = askCube ? k ** 3 : k;
    return { q: raw.q, a: n(ans), wrong: near(ans, askCube ? [k * 3, k * k, (k + 1) ** 3] : [k + 1, k - 1, k * k], R), steps: askCube ? [`${k}³ = ${k} × ${k} × ${k} = ${n(k ** 3)}`] : [`${k} × ${k} × ${k} = ${n(k ** 3)}, so the cube root is ${k}`] };
  }

  function fact(x) {
    let f = 1;
    for (let i = 2; i <= x; i++) f *= i;
    return f;
  }
  function toSup(k) {
    const m = { "-": "⁻", 0: "⁰", 1: "¹", 2: "²", 3: "³", 4: "⁴", 5: "⁵", 6: "⁶", 7: "⁷", 8: "⁸", 9: "⁹" };
    return String(k).split("").map((ch) => m[ch] || ch).join("");
  }
  function toSub(k) {
    const m = { 0: "₀", 1: "₁", 2: "₂", 3: "₃", 4: "₄", 5: "₅", 6: "₆", 7: "₇", 8: "₈", 9: "₉" };
    return String(k).split("").map((ch) => m[ch] || ch).join("");
  }

  // ---------- picture vocabulary (Classes 1-5): made fresh from the picture kit, no hand-written content ----------
  // picWhich*  "Which one is a mango?"      four PICTURE options of different things from one category (the options are the words;
  //                                         the app draws them as picture cards through PicDict.forOptions)
  // picName*   a picture, "What is this?"   four word options from the same category (never drawn as pictures: that would give it away)
  // picOdd*    "Which one is different?"    three from one category and one from another (picture options)
  // picGroup*  "Which of these is a vegetable?" EVS: one member of a small group among things that are not (picture options)
  // Suffix: Food, Animals, Things, Transport, Nature = only those categories; Hi / Pa = Hindi / Punjabi words (picWhich and picName only).
  // Every table line is  picture name | English word | Hindi word | Punjabi word  ("-" = none). The Hindi and Punjabi words are exactly the
  // ones in js/picdict.js (listed there for the teacher's review); tests/picture-vocab.spec.js checks each one draws the picture named here.
  // Kept on purpose to what is certain in an Indian school book: no tomato, cucumber, pumpkin, lemon, papaya or coconut (fruit or vegetable?),
  // no bat or orange (two meanings), and "same category" never mixes animals with birds in picOdd.
  const VOCAB = {};
  const NEAR = [["car", "taxi", "jeep"], ["boat", "ship"], ["bus", "truck"], ["horse", "donkey", "zebra"], ["goat", "sheep"], ["hen", "rooster"], ["crow", "sparrow", "pigeon"], ["duck", "swan"], ["cabbage", "cauliflower"], ["carrot", "radish"], ["apple", "pomegranate"], ["pencil", "pen", "crayon", "chalk"], ["cap", "hat"], ["tiger", "lion"], ["cup", "glass"], ["parrot", "peacock"], ["bag", "notebook", "book"]];
  const CATS = {};
  const MASS = ["ice cream", "bread"];
  (function () {
    const def = (id, sg, pl, rows) => {
      CATS[id] = { sg, pl, items: [] };
      rows.split(";").forEach((r) => {
        const p = r.split("|").map((x) => x.trim()), v = { name: p[0], en: p[1], hi: p[2] === "-" ? "" : p[2], pa: p[3] === "-" ? "" : p[3], cat: id };
        VOCAB[v.name] = v;
        CATS[id].items.push(v.name);
      });
    };
    def("fruit", "a fruit", "fruits", "apple|apple|सेब|ਸੇਬ; mango|mango|आम|ਅੰਬ; banana|banana|केला|ਕੇਲਾ; strawberry|strawberry|स्ट्रॉबेरी|-; watermelon|watermelon|तरबूज|ਤਰਬੂਜ਼; pineapple|pineapple|अनानास|ਅਨਾਨਾਸ; guava|guava|अमरूद|ਅਮਰੂਦ; pear|pear|नाशपाती|ਨਾਸ਼ਪਾਤੀ; pomegranate|pomegranate|अनार|ਅਨਾਰ");
    def("vegetable", "a vegetable", "vegetables", "carrot|carrot|गाजर|ਗਾਜਰ; potato|potato|आलू|ਆਲੂ; onion|onion|प्याज|ਪਿਆਜ਼; okra|okra|भिंडी|ਭਿੰਡੀ; radish|radish|मूली|ਮੂਲੀ; brinjal|brinjal|बैंगन|ਬੈਂਗਣ; cabbage|cabbage|पत्तागोभी|ਬੰਦ ਗੋਭੀ; cauliflower|cauliflower|फूलगोभी|ਫੁੱਲ ਗੋਭੀ; pea|pea|मटर|ਮਟਰ");
    def("animal", "an animal", "animals", "cat|cat|बिल्ली|ਬਿੱਲੀ; dog|dog|कुत्ता|ਕੁੱਤਾ; cow|cow|गाय|ਗਾਂ; elephant|elephant|हाथी|ਹਾਥੀ; goat|goat|बकरी|ਬੱਕਰੀ; sheep|sheep|भेड़|ਭੇਡ; horse|horse|घोड़ा|ਘੋੜਾ; donkey|donkey|गधा|ਗਧਾ; zebra|zebra|ज़ेबरा|-; camel|camel|ऊँट|ਊਠ; giraffe|giraffe|जिराफ़|-; deer|deer|हिरण|ਹਿਰਨ; pig|pig|सूअर|ਸੂਰ; rabbit|rabbit|खरगोश|ਖਰਗੋਸ਼; monkey|monkey|बंदर|ਬਾਂਦਰ; tiger|tiger|बाघ|ਬਾਘ; lion|lion|शेर|ਸ਼ੇਰ; bear|bear|भालू|ਰਿੱਛ; squirrel|squirrel|गिलहरी|ਗਿਲਹਰੀ");
    def("bird", "a bird", "birds", "parrot|parrot|तोता|ਤੋਤਾ; peacock|peacock|मोर|ਮੋਰ; duck|duck|बत्तख|ਬੱਤਖ; hen|hen|मुर्गी|ਮੁਰਗੀ; rooster|rooster|मुर्गा|ਮੁਰਗਾ; crow|crow|कौआ|ਕਾਂ; sparrow|sparrow|-|ਚਿੜੀ; pigeon|pigeon|कबूतर|ਕਬੂਤਰ; owl|owl|उल्लू|ਉੱਲੂ; eagle|eagle|-|-; swan|swan|हंस|ਹੰਸ");
    def("vehicle", "a vehicle", "vehicles", "car|car|कार|ਕਾਰ; bus|bus|बस|ਬੱਸ; auto|auto-rickshaw|ऑटो|-; cycle|cycle|साइकिल|ਸਾਈਕਲ; boat|boat|नाव|ਕਿਸ਼ਤੀ; train|train|रेलगाड़ी|ਰੇਲਗੱਡੀ; ship|ship|-|-; aeroplane|aeroplane|हवाई जहाज़|ਹਵਾਈ ਜਹਾਜ਼; truck|truck|ट्रक|ਟਰੱਕ; tractor|tractor|ट्रैक्टर|ਟਰੈਕਟਰ; scooter|scooter|स्कूटर|-; jeep|jeep|जीप|-; helicopter|helicopter|हेलीकॉप्टर|-; taxi|taxi|टैक्सी|ਟੈਕਸੀ");
    def("home", "a thing we use at home", "things we use at home", "table|table|मेज़|ਮੇਜ਼; chair|chair|कुर्सी|ਕੁਰਸੀ; bed|bed|बिस्तर|ਬਿਸਤਰਾ; door|door|दरवाज़ा|ਦਰਵਾਜ਼ਾ; window|window|खिड़की|ਖਿੜਕੀ; clock|clock|घड़ी|ਘੜੀ; fan|fan|पंखा|ਪੱਖਾ; cup|cup|कप|ਕੱਪ; spoon|spoon|चम्मच|ਚਮਚਾ; plate|plate|थाली|ਥਾਲੀ; glass|glass|गिलास|ਗਲਾਸ; bottle|bottle|बोतल|ਬੋਤਲ; pillow|pillow|तकिया|ਸਿਰਹਾਣਾ; bucket|bucket|बाल्टी|ਬਾਲਟੀ; broom|broom|झाड़ू|ਝਾੜੂ");
    def("school", "a thing we use at school", "things we use at school", "pencil|pencil|पेंसिल|ਪੈਨਸਿਲ; pen|pen|पेन|ਪੈੱਨ; book|book|किताब|ਕਿਤਾਬ; bag|school bag|बस्ता|ਬਸਤਾ; ruler|ruler|-|-; eraser|eraser|-|-; crayon|crayon|-|-; notebook|notebook|कॉपी|ਕਾਪੀ; chalk|chalk|चॉक|-");
    def("body", "a part of the body", "parts of the body", "eye|eye|आँख|ਅੱਖ; ear|ear|कान|ਕੰਨ; nose|nose|नाक|ਨੱਕ; mouth|mouth|मुँह|ਮੂੰਹ; hand|hand|हाथ|ਹੱਥ; foot|foot|पैर|ਪੈਰ; tooth|tooth|दाँत|ਦੰਦ; tongue|tongue|जीभ|ਜੀਭ");
    def("clothes", "something we wear", "things we wear", "shoe|shoe|जूता|ਜੁੱਤੀ; cap|cap|टोपी|ਟੋਪੀ; shirt|shirt|कमीज़|ਕਮੀਜ਼; frock|frock|-|-; sock|sock|मोज़ा|ਜੁਰਾਬ; scarf|scarf|-|-; hat|hat|-|-");
    def("flower", "a flower", "flowers", "rose|rose|गुलाब|ਗੁਲਾਬ; sunflower|sunflower|सूरजमुखी|ਸੂਰਜਮੁਖੀ; lotus|lotus|कमल|ਕਮਲ; marigold|marigold|गेंदा|-");
    def("food", "a food", "foods", "roti|roti|रोटी|ਰੋਟੀ; samosa|samosa|समोसा|ਸਮੋਸਾ; laddoo|laddoo|लड्डू|ਲੱਡੂ; egg|egg|अंडा|ਆਂਡਾ; cake|cake|केक|ਕੇਕ; ice-cream|ice cream|आइसक्रीम|-; bread|bread|ब्रेड|-");
    def("nature", "something in the sky or in nature", "things in the sky or in nature", "sun|sun|सूरज|ਸੂਰਜ; moon|moon|चाँद|ਚੰਨ; star|star|तारा|ਤਾਰਾ; cloud|cloud|बादल|ਬੱਦਲ; mountain|mountain|पहाड़|ਪਹਾੜ; river|river|नदी|ਨਦੀ; rainbow|rainbow|इंद्रधनुष|-");
    def("job", "a person who works", "people who work", "teacher|teacher|शिक्षक|ਅਧਿਆਪਕ; farmer|farmer|किसान|ਕਿਸਾਨ; doctor|doctor|डॉक्टर|ਡਾਕਟਰ; cook|cook|रसोइया|ਰਸੋਈਆ; police|police officer|पुलिस|-");
    // things that only appear as picture options in picGroup (English words)
    [["fish", "fish"], ["butterfly", "butterfly"], ["bee", "bee"], ["crab", "crab"], ["whale", "whale"], ["octopus", "octopus"], ["kite", "kite"], ["leaf", "leaf"], ["tree", "tree"], ["ball", "ball"], ["umbrella", "umbrella"]].forEach((p) => { VOCAB[p[0]] = VOCAB[p[0]] || { name: p[0], en: p[1], hi: "", pa: "", cat: "" }; });
  })();
  const SETS = { "": Object.keys(CATS), Food: ["fruit", "vegetable", "food"], Animals: ["animal", "bird"], Things: ["home", "school", "clothes"], Transport: ["vehicle"], Nature: ["nature", "flower"] };
  const art = (w) => (MASS.includes(w) ? w : (/^[aeiou]/.test(w) ? "an " : "a ") + w);
  const shuf = (arr, R) => { const a = arr.slice(); for (let i = a.length - 1; i > 0; i--) { const j = R.int(0, i), t = a[i]; a[i] = a[j]; a[j] = t; } return a; };
  // k names from `pool`, never two that look alike (NEAR) and none from `skip`
  function pickK(pool, k, R, skip) {
    const out = [];
    for (const nm of shuf(pool, R)) {
      if ((skip || []).includes(nm)) continue;
      const g = NEAR.find((s) => s.includes(nm));
      if (g && out.some((o) => g.includes(o))) continue;
      out.push(nm);
      if (out.length === k) return out;
    }
    throw new Error("not enough things");
  }
  const word = (nm, lang) => (lang === "en" ? VOCAB[nm].en : VOCAB[nm][lang]);
  const haveKit = (nm) => { const have = picKit().names; return !have || have.includes(nm); };
  // a random category of the set that still has `k` different-looking things, with those things
  const pickCat = (set, R, lang, k) => {
    for (const c of shuf(SETS[set], R)) {
      try { return [c, pickK(catPool(c, lang), k, R)]; } catch (e) { /* too few that look different: try another category */ }
    }
    throw new Error("no category");
  };
  const catPool = (c, lang) => CATS[c].items.filter((nm) => word(nm, lang) && haveKit(nm));
  const TXT = {
    en: { which: (w) => `Which one is ${art(w)}?`, what: "What is this?", look: "Look at each picture and say its name.", is: (w) => `This one is ${art(w)}.`, it: (w) => `It is ${art(w)}.`, say: "Say the name of the picture.", alt: "A picture to name" },
    hi: { which: (w) => `${w} का चित्र कौन-सा है?`, what: "यह क्या है?", look: "हर चित्र को देखो।", is: (w) => `यह ${w} है।`, it: (w) => `यह ${w} है।`, say: "चित्र का नाम बोलो।", alt: "नाम बताने के लिए चित्र" },
    pa: { which: (w) => `${w} ਦੀ ਤਸਵੀਰ ਕਿਹੜੀ ਹੈ?`, what: "ਇਹ ਕੀ ਹੈ?", look: "ਹਰ ਤਸਵੀਰ ਨੂੰ ਦੇਖੋ।", is: (w) => `ਇਹ ${w} ਹੈ।`, it: (w) => `ਇਹ ${w} ਹੈ।`, say: "ਤਸਵੀਰ ਦਾ ਨਾਮ ਬੋਲੋ।", alt: "ਨਾਮ ਦੱਸਣ ਲਈ ਤਸਵੀਰ" },
  };
  const optsOf = (names, lang) => { const picOf = {}; names.forEach((nm) => { picOf[word(nm, lang)] = nm; }); return picOf; };
  function picWhichQ(R, set, lang) {
    const [, names] = pickCat(set, R, lang, 4), w = word(names[0], lang), T = TXT[lang];
    return { q: T.which(w), a: w, wrong: names.slice(1).map((nm) => word(nm, lang)), steps: [T.look, T.is(w)], picOf: optsOf(names, lang) };
  }
  function picNameQ(R, set, lang) {
    const P = picKit(), [, names] = pickCat(set, R, lang, 4), w = word(names[0], lang), T = TXT[lang];
    return { q: T.what, a: w, wrong: names.slice(1).map((nm) => word(nm, lang)), steps: [T.say, T.it(w)], picAlt: T.alt, pic: P.svg(P.item(names[0], { x: 100, y: 72, s: 120 }), { w: 200, h: 140, label: T.alt }), picOf: optsOf(names, lang) };
  }
  // 3 from one category + 1 from another. Not allowed: animals with birds (a bird is an animal), fruit or vegetable with food (a fruit is food),
  // school things with home things (a clock, a bag and a bottle are used in both), birds with food (an egg).
  const NO_ODD = [["animal", "bird"], ["fruit", "food"], ["vegetable", "food"], ["school", "home"], ["bird", "food"], ["body", "job"], ["animal", "food"]];
  function picOddQ(R) {
    const cats = SETS[""].filter((c) => catPool(c, "en").length >= 3), a = R.pick(cats), others = cats.filter((c) => c !== a && !NO_ODD.some((p) => p.includes(a) && p.includes(c)));
    return oddFrom(R, a, R.pick(others));
  }
  const cap1 = (x) => x[0].toUpperCase() + x.slice(1);
  function oddFrom(R, a, b) {
    const three = pickK(catPool(a, "en"), 3, R), odd = pickK(catPool(b, "en"), 1, R)[0], ws = three.map((nm) => word(nm, "en")), ow = word(odd, "en");
    return { q: "Which one is different?", a: ow, wrong: ws, steps: [`${cap1(ws[0])}, ${ws[1]} and ${ws[2]} are all ${CATS[a].pl}.`, `${cap1(art(ow))} is ${CATS[b].sg}, so it is the odd one out.`], picOf: optsOf([odd, ...three], "en") };
  }
  // picGroup: [question, [right answers], [things that are not], explanation of the right answer (word) => text, topic]
  const GROUPS = [
    ["Which of these is a vegetable?", CATS.vegetable.items, [...CATS.fruit.items, "car", "cat", "chair", "bus", "cow", "pencil"], (w) => `${cap1(w)} is a vegetable.`, ["food", "plants"]],
    ["Which of these is a fruit?", CATS.fruit.items, [...CATS.vegetable.items, "car", "cat", "chair", "bus", "cow", "pencil"], (w) => `${cap1(w)} is a fruit.`, ["food", "plants"]],
    ["Which of these is a flower?", CATS.flower.items, [...CATS.fruit.items, ...CATS.vegetable.items, "leaf", "tree", "cat", "bus"], (w) => `${cap1(w)} is a flower.`, ["plants"]],
    ["Which of these is a bird?", CATS.bird.items, [...CATS.animal.items, "butterfly", "bee", "fish", "crab"], (w) => `${cap1(w)} is a bird. It has wings and feathers.`, ["animal"]],
    ["Which animal lives in the sea?", ["fish", "crab", "whale", "octopus"], ["cat", "dog", "cow", "elephant", "goat", "horse", "lion", "tiger", "monkey", "rabbit", "deer", "pig", "sheep", "camel", "zebra", "giraffe", "parrot", "peacock", "crow", "owl"], (w) => `${cap1(w)} lives in the sea.`, ["animal"]],
    ["Which animal gives us milk?", ["cow", "goat"], ["lion", "tiger", "elephant", "monkey", "zebra", "giraffe", "bear", "deer", "parrot", "crow"], (w) => `A ${w} gives us milk.`, ["animal"]],
    ["Which of these can fly?", ["aeroplane", "helicopter", "parrot", "crow", "pigeon", "owl", "eagle", "butterfly", "bee", "sparrow"], ["cow", "dog", "cat", "car", "bus", "train", "elephant", "fish", "boat", "table", "cycle", "tractor"], (w) => `${cap1(art(w))} can fly.`, ["animal"]],
    ["Which one is a pet animal?", ["dog", "cat", "rabbit"], ["lion", "tiger", "zebra", "giraffe", "bear", "deer"], (w) => `A ${w} can be kept as a pet at home.`, ["animal"]],
    ["Which one is a wild animal?", ["lion", "tiger", "zebra", "giraffe", "bear", "deer"], ["cow", "goat", "sheep", "dog", "cat", "pig"], (w) => `A ${w} lives in the wild, not in our homes.`, ["animal"]],
    ["Which of these is a means of transport?", CATS.vehicle.items, [...CATS.fruit.items, ...CATS.home.items, ...CATS.school.items, ...CATS.clothes.items], (w) => `We can travel in ${art(w)}.`, ["transport"]],
    ["Which of these can carry us on water?", ["boat", "ship"], ["car", "bus", "train", "aeroplane", "cycle", "truck", "tractor", "scooter", "helicopter"], (w) => `${cap1(art(w))} travels on water.`, ["transport"]],
    ["Which of these do we wear?", ["shoe", "cap", "shirt", "frock", "sock", "scarf", "hat"], ["table", "chair", "bed", "cup", "plate", "spoon", "pencil", "book", "apple", "banana", "carrot", "car", "bus", "cat", "dog"], (w) => `We wear ${art(w)}.`, ["wear"]],
    ["Which part of the body do we see with?", ["eye"], ["ear", "nose", "tongue", "hand", "foot", "tooth"], () => "We see with our eyes.", ["body"]],
    ["Which part of the body do we hear with?", ["ear"], ["eye", "nose", "tongue", "hand", "foot", "tooth"], () => "We hear with our ears.", ["body"]],
    ["Which part of the body do we smell with?", ["nose"], ["eye", "ear", "foot", "hand", "tooth"], () => "We smell with our nose.", ["body"]],
    ["Which part of the body do we taste with?", ["tongue"], ["eye", "ear", "nose", "foot", "hand"], () => "We taste with our tongue.", ["body"]],
    ["Which part of the body do we chew with?", ["tooth"], ["eye", "ear", "nose", "foot", "hand"], () => "We chew our food with our teeth.", ["body"]],
    ["Which part of the body do we walk with?", ["foot"], ["eye", "ear", "nose", "tongue", "tooth"], () => "We walk with our feet.", ["body"]],
    ["Who grows crops in the field?", ["farmer"], ["teacher", "doctor", "cook", "police"], () => "A farmer grows crops in the field.", ["work"]],
    ["Who teaches us in school?", ["teacher"], ["farmer", "doctor", "cook", "police"], () => "A teacher teaches us in school.", ["work"]],
    ["Who treats us when we are sick?", ["doctor"], ["teacher", "farmer", "cook", "police"], () => "A doctor treats us when we are sick.", ["work"]],
    ["Who cooks our food?", ["cook"], ["teacher", "farmer", "doctor", "police"], () => "A cook cooks our food.", ["work"]],
    ["Who keeps us safe?", ["police"], ["teacher", "farmer", "doctor", "cook"], () => "A police officer keeps us safe.", ["work"]],
  ];
  const GROUP_TOPICS = { "": null, Food: "food", Animals: "animal", Transport: "transport", Body: "body", Work: "work", Wear: "wear", Plants: "plants" };
  function picGroupQ(R, topic) {
    const tp = GROUP_TOPICS[topic], list = GROUPS.filter((g) => !tp || g[4].includes(tp));
    const g = R.pick(list), right = pickK(g[1].filter(haveKit), 1, R)[0], wrong = pickK(g[2].filter(haveKit), 3, R, [right]), names = [right, ...wrong];
    const w = word(right, "en");
    return { q: g[0], a: w, wrong: wrong.map((nm) => word(nm, "en")), steps: ["Look at each picture and say its name.", g[3](w)], picOf: optsOf(names, "en") };
  }
  const vocabGens = {};
  Object.keys(SETS).forEach((set) => {
    ["en", "hi", "pa"].forEach((lang) => {
      const sfx = set + (lang === "en" ? "" : lang === "hi" ? "Hi" : "Pa");
      vocabGens["picWhich" + sfx] = (R) => picWhichQ(R, set, lang);
      vocabGens["picName" + sfx] = (R) => picNameQ(R, set, lang);
    });
  });
  vocabGens.picOdd = (R) => picOddQ(R);
  // picOdd for one pair of categories is not offered by name: the random pair is enough
  Object.keys(GROUP_TOPICS).forEach((topic) => { vocabGens["picGroup" + topic] = (R) => picGroupQ(R, topic); });
  Object.assign(G, vocabGens);

  // ---------- which generators fit which chapter ----------
  const M = {
    1: { "shapes-around-us": ["picShape"], "numbers-1-to-9": ["add1", "picCount", "picMore"], "numbers-10-to-20": ["picCount20"], "addition-up-to-9": ["add1", "picAdd"], "subtraction-up-to-9": ["sub1", "picSub"], "money-coins-and-notes": ["add1", "picCoins"] },
    2: { "addition-with-carrying": ["add2", "picAdd2"], "subtraction-with-borrowing": ["sub2", "picSub2"], "multiplication-as-repeated-addition": ["repAdd", "table"], money: ["add2", "picCoins", "picNotes"], "place-value-tens-and-ones": ["add2", "picTensOnes"], "numbers-up-to-100": ["picTensOnes"], "shapes-and-lines": ["picShape3"], "time-clock-and-months": ["picClock2"] },
    3: { addition: ["add3"], subtraction: ["sub3"], "multiplication-tables": ["table"], division: ["div"], money: ["money", "change", "picNotes"], length: ["unitConv"], "weight-and-capacity": ["unitConv"], time: ["timeLater", "minutes", "picClock"], fractions: ["fracOf", "picFrac"], "shapes-2d-and-3d": ["picShape", "picShape3"] },
    4: { "addition-and-subtraction": ["add3", "sub3"], multiplication: ["mul"], division: ["div", "divRem"], "factors-and-multiples": ["hcf", "lcmQ"], fractions: ["fracOf", "picFrac"], "introduction-to-decimals": ["decAdd"], "perimeter-and-area": ["rectPA", "squarePA"], measurement: ["unitConv"], time: ["minutes", "timeLater"], money: ["money", "change"], "numbers-up-to-9999": ["placeVal"] },
    5: { "large-numbers": ["placeVal"], "operations-on-large-numbers": ["add3", "sub3", "mul", "divRem"], "factors-and-multiples": ["hcf", "lcmQ", "primeFact"], fractions: ["fracAdd", "fracOf"], decimals: ["decAdd", "decMul"], percentage: ["percentOf"], "perimeter-and-area": ["rectPA", "squarePA"], volume: ["cuboidVol"], time: ["minutes"], "money-and-unitary-method": ["unitary", "change"], "data-handling": ["mean"] },
    6: { "number-play": ["divRem"], "data-handling-and-presentation": ["mean", "mode"], "prime-time": ["hcf", "lcmQ", "primeFact"], "perimeter-and-area": ["rectPA", "squarePA"], fractions: ["fracAdd", "fracSub", "fracOf"], "the-other-side-of-zero": ["integers"], "lines-and-angles": ["complement"] },
    7: { "large-numbers-around-us": ["placeVal"], "arithmetic-expressions": ["integers"], "a-peek-beyond-the-point": ["decAdd"], "expressions-using-letter-numbers": ["evalExpr"], "parallel-and-intersecting-lines": ["complement"], "a-tale-of-three-intersecting-lines": ["triAngle", "extAngle"], "working-with-fractions": ["fracMul", "fracDiv"], "operations-with-integers": ["integers", "intDiv"], "finding-common-ground": ["hcf", "lcmQ", "primeFact"], "another-peek-beyond-the-point": ["decMul", "decDiv"], "connecting-the-dots": ["mean", "median", "mode"], "finding-the-unknown": ["linEq"] },
    8: { "a-square-and-a-cube": ["squares", "cubes"], "power-play": ["expo"], quadrilaterals: ["quadAngle", "polyAngles"], "we-distribute-yet-things-multiply": ["evalExpr"], "proportional-reasoning-1": ["ratioShare", "directProp"], "fractions-in-disguise": ["percentChange", "profitLoss", "discount", "simpleInt", "compoundInt"], "the-baudhayana-pythagoras-theorem": ["pythag"], "proportional-reasoning-2": ["inverseProp"], "exploring-some-geometric-themes": ["euler"], "tales-by-dots-and-lines": ["mean"], "algebra-play": ["linEq", "linEqBoth"], area: ["areaShapes"] },
    9: { polynomials: ["polyValue", "remainder"], "coordinate-geometry": ["distance"], "linear-equations-in-two-variables": ["linEq"], "lines-and-angles": ["complement", "extAngle"], triangles: ["triAngle"], quadrilaterals: ["quadAngle"], "herons-formula": ["heron"], "surface-areas-and-volumes": ["solidsCSH"] },
    10: { "real-numbers": ["hcf", "lcmQ", "hcfLcmProduct", "primeFact"], polynomials: ["zeroSumProd", "polyValue"], "pair-of-linear-equations-in-two-variables": ["linPair"], "quadratic-equations": ["quadRoots", "discriminant"], "arithmetic-progressions": ["apNth", "apSum"], triangles: ["pythag"], "coordinate-geometry": ["distance", "midpoint", "section"], "introduction-to-trigonometry": ["trigValue", "trigExpr"], "some-applications-of-trigonometry": ["heights"], "areas-related-to-circles": ["circle", "sector"], "surface-areas-and-volumes": ["solids"], statistics: ["mean", "median", "mode"], probability: ["probDice", "probBalls"] },
    11: { sets: ["setsUnion"], "complex-numbers-and-quadratic-equations": ["complexMod", "discriminant"], "permutations-and-combinations": ["perm", "comb"], "sequences-and-series": ["apNth", "apSum", "gpNth"], "straight-lines": ["slope"], "introduction-to-three-dimensional-geometry": ["dist3d"], "limits-and-derivatives": ["limitPoly", "derivAt"], statistics: ["variance"], probability: ["probDice", "probBalls"] },
    12: { determinants: ["det2", "det3"], "continuity-and-differentiability": ["derivAt"], "application-of-derivatives": ["derivAt"], integrals: ["integral"], "three-dimensional-geometry": ["dist3d"], probability: ["probBalls"] },
  };
  const S = {
    6: { "measurement-of-length-and-motion": ["unitConv"] },
    7: { "measurement-of-time-and-motion": ["speed"] },
    8: { "exploring-forces": ["force", "weight"], "pressure-winds-storms-cyclones": ["pressure"], "electricity-magnetic-and-heating-effects": ["ohm"], "solutes-solvents-and-solutions": ["concentration"], "particulate-nature-of-matter": ["density"] },
    9: { "is-matter-around-us-pure": ["concentration"], "atoms-and-molecules": ["molarMass", "moles"], motion: ["speed", "accel", "sutHalf"], "force-and-laws-of-motion": ["force", "momentum"], gravitation: ["weight", "density"], "work-and-energy": ["work", "kinetic", "potential", "power"], sound: ["wave"] },
    10: { "chemical-reactions-and-equations": ["massProduct"], "carbon-and-its-compounds": ["formulaMass"], "light-reflection-and-refraction": ["lensPower", "magnification"], electricity: ["ohm", "resistors", "elecPower", "energyCost"] },
  };
  // Class 9 science in the new CBSE book (different chapter ids from the earlier book that S[9] was written for).
  const S9cbse = { "describing-motion-around-us": ["speed", "accel", "sutHalf"], "exploring-mixtures-and-their-separation": ["concentration"], "how-forces-affect-motion": ["force", "momentum", "weight"], "work-energy-and-simple-machines": ["work", "kinetic", "potential", "power"], "journey-inside-the-atom": ["atomicParticles"], "atomic-foundations-of-matter": ["formulaMass", "molMass", "particles", "massPercent", "massProduct"], "sound-waves-characteristics-and-applications": ["wave"] };
  // Earlier-book Class 9 (PSEB): the existing physics ones plus the chemistry chapters.
  Object.assign(S[9], { "matter-in-our-surroundings": ["kelvin"], "atoms-and-molecules": ["molarMass", "moles", "formulaMass", "molMass", "particles", "massPercent", "massProduct"], "structure-of-the-atom": ["atomicParticles"] });
  const C = {
    11: {
      "some-basic-concepts-of-chemistry": ["molMass", "particles", "massPercent", "empirical", "molarity", "molality", "dilution", "limiting"],
      "structure-of-atom": ["atomicParticles", "photon", "deBroglie", "bohr"],
      thermodynamics: ["firstLaw", "gibbs", "gibbsT", "idealGas"],
      equilibrium: ["kc", "pHcalc"],
      "redox-reactions": ["oxNum"],
    },
    12: {
      solutions: ["molarity", "molality", "moleFraction", "raoult", "bpElev", "fpDep", "osmotic"],
      electrochemistry: ["cellEmf", "deltaGcell", "faraday"],
      "chemical-kinetics": ["halfLife1", "halfLivesLeft", "orderData", "zeroHalf"],
    },
  };
  const P = {
    11: { "motion-in-a-straight-line": ["accel", "sutHalf"], "laws-of-motion": ["force", "momentum"], "work-energy-and-power": ["work", "kinetic", "potential", "power"], "mechanical-properties-of-fluids": ["pressure"], "thermal-properties-of-matter": ["charles"], "kinetic-theory": ["idealGas", "boyle", "charles"], waves: ["wave"] },
    12: { "current-electricity": ["ohm", "resistors", "elecPower"], "ray-optics-and-optical-instruments": ["lensPower", "magnification"], "dual-nature-of-radiation-and-matter": ["photon", "deBroglie"], atoms: ["bohr"] },
  };
  // PSEB Class 9 keeps the earlier NCERT Maths and Science books, whose chapters these generators were written for.
  // Class 9 Maths in the new CBSE book (the older-book ids in M[9] belong to PSEB).
  const M9cbse = { "introduction-to-linear-polynomials": ["evalExpr", "linEq"], quadrilaterals: ["quadAngle", "polyAngles"], "math-of-space-surface-area-and-volume": ["solidsCSH"], "the-mathematics-of-maybe-introduction-to-probability": ["probDice"], "how-quantities-combine-understanding-data": ["mean", "median", "mode"], "measuring-space-perimeter-and-area": ["rectPA", "areaShapes"], "predicting-what-comes-next-exploring-sequences-and-progressions": ["apNth", "apSum"] };
  const MPB = {
    6: { "knowing-our-numbers": ["placeVal", "add3", "sub3"], "whole-numbers": ["mul", "div", "divRem"], "playing-with-numbers": ["hcf", "lcmQ", "primeFact"], integers: ["integers"], fractions: ["fracAdd", "fracSub", "fracOf"], decimals: ["decAdd"], "data-handling": ["mean", "mode"], mensuration: ["rectPA", "squarePA"], algebra: ["evalExpr", "linEq"], "ratio-and-proportion": ["ratioShare", "unitary"], "understanding-elementary-shapes": ["complement"] },
    7: { integers: ["integers", "intDiv"], "fractions-and-decimals": ["fracMul", "fracDiv", "decMul", "decDiv"], "data-handling": ["mean", "median", "mode"], "simple-equations": ["linEq"], "lines-and-angles": ["complement"], "triangle-and-its-properties": ["triAngle", "extAngle", "pythag"], "comparing-quantities": ["percentOf", "profitLoss", "discount", "simpleInt", "ratioShare"], "rational-numbers": ["fracAdd", "fracMul"], "perimeter-and-area": ["rectPA", "squarePA", "areaShapes", "circle"], "algebraic-expressions": ["evalExpr"], "exponents-and-powers": ["expo"] },
    8: { "rational-numbers": ["fracAdd", "fracMul"], "linear-equations-in-one-variable": ["linEq", "linEqBoth"], "understanding-quadrilaterals": ["quadAngle", "polyAngles"], "data-handling": ["mean", "median", "mode"], "squares-and-square-roots": ["squares", "pythag"], "cubes-and-cube-roots": ["cubes"], "comparing-quantities": ["percentChange", "profitLoss", "discount", "simpleInt", "compoundInt"], "algebraic-expressions-and-identities": ["evalExpr"], mensuration: ["areaShapes", "cuboidVol", "circle"], "exponents-and-powers": ["expo"], "direct-and-inverse-proportions": ["directProp", "inverseProp"] },
    9: M[9],
  };
  const SPB = {
    6: { "motion-and-measurement-of-distances": ["unitConv"] },
    7: { "motion-and-time": ["speed"] },
    8: { "force-and-pressure": ["force", "pressure"], sound: ["wave"], "chemical-effects-of-electric-current": ["ohm"] },
    9: S[9],
  };
  // PSEB uses the earlier NCERT Maths and Science books (Classes 6–9), so those chapters get their own maps.
  // Picture vocabulary (Classes 1-5): made fresh from the picture kit. Only chapters about naming things, plants, animals, food, body and transport.
  const PV_E = {
    1: { "naming-words": ["picWhich", "picName"], "a-and-an": ["picWhich"], "a-farm": ["picWhichAnimals", "picNameAnimals"], "the-food-we-eat": ["picWhichFood", "picNameFood"], "picture-time": ["picName"], "fun-with-pictures": ["picName", "picWhich"], "my-family": ["picWhichThings"] },
    2: { "naming-words-and-proper-nouns": ["picWhich", "picName", "picOdd"], "picture-reading-out-out": ["picName"], "my-bicycle": ["picWhichTransport", "picNameTransport"], "between-home-and-school": ["picWhichTransport"], "the-crow": ["picWhichAnimals"], "the-smart-monkey": ["picWhichAnimals"], "little-drops-of-water": ["picWhichNature"] },
    3: { nouns: ["picWhich", "picName", "picOdd"], "picture-reading": ["picName", "picOdd"], "out-in-the-garden": ["picWhichNature"], "the-big-laddoo": ["picWhichFood"], "talking-toys": ["picWhichThings"] },
  };
  const PV_E_PB = { 1: { "naming-words": PV_E[1]["naming-words"], "a-and-an": PV_E[1]["a-and-an"] }, 2: { "naming-words-and-proper-nouns": PV_E[2]["naming-words-and-proper-nouns"] }, 3: { nouns: PV_E[3].nouns, "picture-reading": PV_E[3]["picture-reading"] } };
  const PV_EVS = {
    3: { "plants-around-us": ["picGroupPlants", "picOdd"], "animals-around-us": ["picGroupAnimals", "picOdd"], "food-we-eat": ["picGroupFood", "picOdd"], "our-body-and-senses": ["picGroupBody"], "travel-and-transport": ["picGroupTransport", "picOdd"], "keeping-clean-and-healthy": ["picGroupWear"], "my-family": ["picGroupWork"] },
    4: { "roots-stems-and-leaves": ["picGroupPlants"], "animals-and-their-homes": ["picGroupAnimals"], "where-food-comes-from": ["picGroupFood"], "work-people-do": ["picGroupWork"], "our-neighbourhood-and-community": ["picGroupWork"] },
    5: { "senses-of-animals": ["picGroupAnimals"], "food-preservation-and-spoilage": ["picGroupFood"], "forests-and-forest-people": ["picGroupAnimals"], "mountains-deserts-and-life-there": ["picGroupAnimals"], "seeds-and-germination": ["picGroupPlants"] },
  };
  const PV_HI = { 1: { "phal-sabziyan-rang": ["picWhichFoodHi", "picNameFoodHi"] }, 2: { sangya: ["picWhichHi", "picNameHi"], "chitra-dekhkar": ["picNameHi"] }, 3: { sangya: ["picWhichHi", "picNameHi"] } };
  const PV_HI_PB = { 1: PV_HI[1], 2: { sangya: PV_HI[2].sangya, "chitra-dekhkar": PV_HI[2]["chitra-dekhkar"] }, 3: PV_HI[3] };
  const PV_PA = { 1: { "rang-phal-janwar": ["picWhichFoodPa", "picWhichAnimalsPa", "picNameFoodPa"] }, 3: { naanv: ["picWhichPa", "picNamePa"] } };
  const MAP = { english: PV_E, englishpb: PV_E_PB, evs: PV_EVS, hindi: PV_HI, hindipb: PV_HI_PB, punjabi: PV_PA, maths: { ...M, 9: M9cbse }, science: { ...S, 9: S9cbse }, physics: P, chemistry: C, mathspb: MPB, sciencepb: SPB };

  function forChapter(cls, subject, chapterId) {
    const m = MAP[subject] && MAP[subject][cls];
    return (m && m[chapterId]) || [];
  }

  // When a generator's own distractors collapse into duplicates, add answers with one number nudged ("12 cm" gives "13 cm").
  function topUp(a, wrong, R) {
    a = String(a);
    const re = /−?\d[\d,]*(?:\.\d+)?/g;
    const toks = [...a.matchAll(re)];
    for (const delta of [1, -1, 2, -2, 10]) {
      for (const t of toks) {
        if (wrong.length >= 3) return;
        const v = (t[0][0] === "−" ? -1 : 1) * Number(t[0].replace(/[−,]/g, ""));
        if (!Number.isFinite(v)) continue;
        const nv = Number.isInteger(v) ? v + delta : v + delta / 2;
        const s = a.slice(0, t.index) + n(nv) + a.slice(t.index + t[0].length);
        if (s !== a && !wrong.includes(s)) wrong.push(s);
      }
    }
  }

  // Builds one question. Returns null if a generator misbehaves (never shows a broken question).
  function make(name, seed) {
    const R = rng(seed);
    let raw;
    try {
      raw = G[name](R);
      if (raw.a === null) raw = finishSqCube(name, R, raw);
    } catch (e) {
      return null;
    }
    // Optional `kinds` (one per wrong option, same order) say how each wrong option was made; ignored if the lengths differ.
    const given = raw.kinds || (raw.wrong && raw.wrong.kinds);
    const tags = Array.isArray(given) && given.length === (raw.wrong || []).length ? given : [];
    const kept = (raw.wrong || []).map((w, i) => ({ w, k: tags[i] })).filter((p, i, arr) => p.w !== raw.a && arr.findIndex((x) => x.w === p.w) === i).slice(0, 3);
    const wrong = kept.map((p) => p.w);
    if (raw.a && wrong.length < 3) topUp(raw.a, wrong, R);
    if (!raw.a || wrong.length < 3) return null;
    let pic = "";
    if (raw.pic) {
      try { pic = typeof raw.pic === "function" ? raw.pic(R) : raw.pic; } catch (e) { return null; }
      if (typeof pic !== "string" || !/^\s*<svg/.test(pic)) return null;
    }
    return {
      q: raw.q,
      options: [raw.a, ...wrong],
      answer: 0,
      explain: raw.steps.join("\n"),
      steps: raw.steps,
      gen: name,
      ...(pic ? { pic, picAlt: raw.picAlt || "" } : {}),
      // picture vocabulary questions: which picture-kit item each option is (the app draws the option cards itself from the words)
      ...(raw.picOf ? { picOf: raw.picOf } : {}),
      // How each option was made: null for the right one; a tag or null for the wrong ones (null = not known).
      kinds: [null, ...wrong.map((_, i) => (kept[i] && kept[i].k) || (kept[i] ? null : "slip"))],
    };
  }

  // `count` fresh questions from some generators (by name), cycling through them.
  function fromNames(names, count, seed) {
    if (!names.length) return [];
    const out = [];
    const seen = new Set();
    for (let i = 0; out.length < count && i < count * 4; i++) {
      const q = make(names[i % names.length], (seed + i * 7919) >>> 0);
      if (q && !seen.has(q.q + "|" + q.options[0])) {
        seen.add(q.q + "|" + q.options[0]);
        out.push(q);
      }
    }
    return out;
  }

  // `count` fresh questions for a chapter, cycling through its generators.
  const questions = (cls, subject, chapterId, count, seed) => fromNames(forChapter(cls, subject, chapterId), count, seed);

  // Extension hook for generator files loaded after this one (js/gen-lang.js):
  //   Gen.add(name, (R) => ({ q, a, wrong, steps, kinds? }))                 registers a generator (name must be new)
  //   Gen.mapChapters(subject, { cls: { chapterId: [generatorNames] } })      adds generators to chapters (merged, never replaced)
  const names = Object.keys(G);
  function add(name, fn) {
    if (G[name]) throw new Error("generator exists: " + name);
    G[name] = fn;
    names.push(name);
  }
  function mapChapters(subject, byClass) {
    const subj = (MAP[subject] = MAP[subject] || {});
    for (const [cls, chapters] of Object.entries(byClass)) {
      const cur = (subj[cls] = { ...(subj[cls] || {}) }); // copy: some maps share one object between two subjects
      for (const [id, list] of Object.entries(chapters)) cur[id] = [...new Set([...(cur[id] || []), ...list])];
    }
  }

  return { rng, forChapter, make, questions, fromNames, names, MAP, add, mapChapters, vocab: { cats: CATS, items: VOCAB } };
})();
