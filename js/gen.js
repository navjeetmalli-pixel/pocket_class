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
    // Indian digit grouping (1,00,000) and at most 2 decimal places.
    const r = Math.round(x * 100) / 100;
    const s = Math.abs(r) >= 1000 ? Math.abs(r).toLocaleString("en-IN", { maximumFractionDigits: 2 }) : String(Math.abs(r));
    return (r < 0 ? "−" : "") + s;
  };
  const rs = (x) => "₹" + n(x);
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

  // Three distinct wrong answers near the right one.
  function near(ans, cands, R, fmt = n) {
    const out = [];
    const seen = new Set([fmt(ans)]);
    for (const c of cands) {
      const s = typeof c === "string" ? c : fmt(c);
      if (!seen.has(s) && out.length < 3) {
        seen.add(s);
        out.push(s);
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
        }
      }
      k++;
    }
    return out;
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
    divRem: (R) => { const b = R.int(3, 9), q = R.int(10, 60), r = R.int(1, b - 1); const a = b * q + r; return { q: `Divide ${a} by ${b}. What are the quotient and remainder?`, a: `Quotient ${q}, remainder ${r}`, wrong: [`Quotient ${q + 1}, remainder ${r}`, `Quotient ${q}, remainder ${r + 1}`, `Quotient ${q - 1}, remainder ${b + r}`], steps: [`${b} × ${q} = ${b * q}`, `${a} − ${b * q} = ${r}, which is less than ${b}`] }; },
    placeVal: (R) => { const num = R.int(1000, 99999), digits = String(num); const i = R.int(0, digits.length - 2); const d = Number(digits[i]) || 1; const fixed = Number(digits.slice(0, i) + d + digits.slice(i + 1)); const place = 10 ** (digits.length - 1 - i); return { q: `What is the place value of ${d} in ${n(fixed)}?`, a: n(d * place), wrong: near(d * place, [d, d * place * 10, d * place / 10 || d * 1000], R), steps: [`${d} is in the ${({ 1: "ones", 10: "tens", 100: "hundreds", 1000: "thousands", 10000: "ten thousands" })[place]} place.`, `Place value = ${d} × ${n(place)} = ${n(d * place)}`] }; },
    money: (R) => { const a = R.int(15, 250), b = R.int(10, 200); return { q: `Riya buys a book for ₹${a} and a pen for ₹${b}. How much does she spend in all?`, a: rs(a + b), wrong: near(a + b, [a + b + 10, Math.abs(a - b), a + b - 1], R, rs), steps: [`Total = ₹${a} + ₹${b} = ₹${a + b}`] }; },
    change: (R) => { const cost = R.int(35, 480), paid = cost < 100 ? 100 : cost < 200 ? 200 : 500; return { q: `A toy costs ₹${cost}. You pay with ₹${paid}. How much change do you get?`, a: rs(paid - cost), wrong: near(paid - cost, [paid - cost + 10, paid - cost - 10, cost], R, rs), steps: [`Change = ₹${paid} − ₹${cost} = ₹${paid - cost}`] }; },
    timeLater: (R) => { const h = R.int(1, 10), m = R.pick([0, 15, 30, 45]), add = R.int(1, 3); const h2 = ((h + add - 1) % 12) + 1; const t = (hh, mm) => `${hh}:${String(mm).padStart(2, "0")}`; return { q: `The time is ${t(h, m)}. What time will it be after ${add} hour${add > 1 ? "s" : ""}?`, a: t(h2, m), wrong: [t(((h + add) % 12) + 1, m), t(h, (m + 30) % 60), t(((h + add + 10) % 12) + 1, m)], steps: [`Move the hour hand forward ${add}: ${h} → ${h2}. Minutes stay ${String(m).padStart(2, "0")}.`] }; },
    minutes: (R) => { const h = R.int(1, 4), m = R.int(5, 55); return { q: `How many minutes are there in ${h} hour${h > 1 ? "s" : ""} ${m} minutes?`, a: n(h * 60 + m), wrong: near(h * 60 + m, [h * 100 + m, h * 60, h + m], R), steps: [`1 hour = 60 minutes`, `${h} × 60 + ${m} = ${h * 60 + m} minutes`] }; },
    unitConv: (R) => { const k = R.pick([["m", "cm", 100], ["km", "m", 1000], ["kg", "g", 1000], ["L", "mL", 1000]]); const v = R.int(2, 9), w = R.int(5, 95); return { q: `Convert ${v} ${k[0]} ${w} ${k[1]} into ${k[1]}.`, a: `${n(v * k[2] + w)} ${k[1]}`, wrong: [`${n(v * 10 + w)} ${k[1]}`, `${n(v * k[2])} ${k[1]}`, `${n(v * k[2] * 10 + w)} ${k[1]}`], steps: [`1 ${k[0]} = ${n(k[2])} ${k[1]}`, `${v} × ${n(k[2])} + ${w} = ${n(v * k[2] + w)} ${k[1]}`] }; },
    fracOf: (R) => { const d = R.pick([2, 3, 4, 5, 6, 8, 10]), k = R.int(2, 12), num = R.int(1, d - 1); const total = d * k; return { q: `Find ${num}/${d} of ${total}.`, a: n(num * k), wrong: near(num * k, [k, total - num * k, num * k + k], R), steps: [`${total} ÷ ${d} = ${k}`, `${k} × ${num} = ${num * k}`] }; },
    fracAdd: (R) => { const b = R.int(2, 9), d = R.int(2, 9), a = R.int(1, b), c = R.int(1, d); return { q: `${a}/${b} + ${c}/${d} = ? (simplest form)`, a: fr(a * d + c * b, b * d), wrong: [fr(a + c, b + d), fr(a * d + c * b + 1, b * d), fr(a * c, b * d)].filter((x) => x !== fr(a * d + c * b, b * d)), steps: [`Common denominator: ${b} × ${d} = ${b * d}`, `${a * d}/${b * d} + ${c * b}/${b * d} = ${a * d + c * b}/${b * d}`, `Simplest form: ${fr(a * d + c * b, b * d)}`] }; },
    fracSub: (R) => { const b = R.int(2, 9), d = R.int(2, 9), a = R.int(1, 2 * b), c = R.int(1, d - 1); return { q: `${a}/${b} − ${c}/${d} = ? (simplest form)`, a: fr(a * d - c * b, b * d), wrong: [fr(a - c, Math.abs(b - d) || 1), fr(a * d - c * b - 1, b * d), fr(a * d + c * b, b * d)].filter((x) => x !== fr(a * d - c * b, b * d)), steps: [`Common denominator: ${b * d}`, `${a * d}/${b * d} − ${c * b}/${b * d} = ${a * d - c * b}/${b * d} = ${fr(a * d - c * b, b * d)}`] }; },
    fracMul: (R) => { const a = R.int(1, 9), b = R.int(2, 9), c = R.int(1, 9), d = R.int(2, 9); return { q: `${a}/${b} × ${c}/${d} = ? (simplest form)`, a: fr(a * c, b * d), wrong: [fr(a * d, b * c), fr(a + c, b + d), fr(a * c + 1, b * d)].filter((x) => x !== fr(a * c, b * d)), steps: [`Multiply tops and bottoms: (${a} × ${c})/(${b} × ${d}) = ${a * c}/${b * d}`, `Simplest form: ${fr(a * c, b * d)}`] }; },
    fracDiv: (R) => { const a = R.int(1, 9), b = R.int(2, 9), c = R.int(1, 9), d = R.int(2, 9); return { q: `${a}/${b} ÷ ${c}/${d} = ? (simplest form)`, a: fr(a * d, b * c), wrong: [fr(a * c, b * d), fr(b * c, a * d), fr(a * d + 1, b * c)].filter((x) => x !== fr(a * d, b * c)), steps: [`Dividing by ${c}/${d} is multiplying by ${d}/${c}`, `${a}/${b} × ${d}/${c} = ${a * d}/${b * c} = ${fr(a * d, b * c)}`] }; },
    decAdd: (R) => { const a = R.int(11, 999) / 10, b = R.int(101, 9999) / 100; return { q: `${n(a)} + ${n(b)} = ?`, a: n(a + b), wrong: near(a + b, [a + b + 1, a + b - 0.1, a * 10 + b], R), steps: [`Line up the decimal points: ${n(a)} = ${a.toFixed(2)}`, `${a.toFixed(2)} + ${b.toFixed(2)} = ${(a + b).toFixed(2)}`] }; },
    decMul: (R) => { const a = R.int(11, 99) / 10, b = R.int(2, 9) / 10; const p = Math.round(a * b * 100) / 100; return { q: `${n(a)} × ${n(b)} = ?`, a: n(p), wrong: near(p, [p * 10, p / 10, Math.round((a + b) * 100) / 100], R), steps: [`Multiply as whole numbers: ${a * 10} × ${b * 10} = ${Math.round(a * b * 100)}`, `Total decimal places: 1 + 1 = 2, so ${n(p)}`] }; },
    decDiv: (R) => { const b = R.pick([2, 4, 5, 8]), q = R.int(11, 99) / 10; const a = Math.round(b * q * 100) / 100; return { q: `${n(a)} ÷ ${b} = ?`, a: n(q), wrong: near(q, [q * 10, q / 10, q + 1], R), steps: [`${n(a)} ÷ ${b}: divide as usual and keep the decimal point in place.`, `Check: ${n(q)} × ${b} = ${n(a)}`] }; },
    percentOf: (R) => { const p = R.pick([5, 10, 12, 15, 20, 25, 30, 40, 50, 75]), base = R.int(2, 40) * 20; return { q: `What is ${p}% of ${n(base)}?`, a: n((p * base) / 100), wrong: near((p * base) / 100, [(p * base) / 10, base - (p * base) / 100, p + base / 100], R), steps: [`${p}% of ${n(base)} = ${p}/100 × ${n(base)}`, `= ${n((p * base) / 100)}`] }; },
    unitary: (R) => { const k = R.int(3, 12), price = R.int(4, 60), m = R.int(2, 20); return { q: `${k} notebooks cost ₹${k * price}. What do ${m} notebooks cost?`, a: rs(m * price), wrong: near(m * price, [m * price + price, k * price + m, m * (price + 1)], R, rs), steps: [`Cost of 1 notebook = ₹${k * price} ÷ ${k} = ₹${price}`, `Cost of ${m} = ${m} × ₹${price} = ₹${m * price}`] }; },
    rectPA: (R) => { const l = R.int(4, 30), b = R.int(2, l - 1), want = R.pick(["perimeter", "area"]); const ans = want === "area" ? l * b : 2 * (l + b); const unit = want === "area" ? "cm²" : "cm"; return { q: `A rectangle is ${l} cm long and ${b} cm wide. Find its ${want}.`, a: `${ans} ${unit}`, wrong: [want === "area" ? `${2 * (l + b)} cm²` : `${l * b} cm`, `${ans + (want === "area" ? l : 2)} ${unit}`, want === "area" ? `${l + b} cm²` : `${l + b} cm`], steps: want === "area" ? [`Area = length × breadth = ${l} × ${b} = ${l * b} cm²`] : [`Perimeter = 2 × (length + breadth) = 2 × (${l} + ${b}) = ${2 * (l + b)} cm`] }; },
    squarePA: (R) => { const s = R.int(3, 25); return { q: `A square has side ${s} m. Find its area.`, a: `${s * s} m²`, wrong: [`${4 * s} m²`, `${2 * s} m²`, `${s * s + s} m²`], steps: [`Area = side × side = ${s} × ${s} = ${s * s} m²`] }; },
    cuboidVol: (R) => { const l = R.int(3, 15), b = R.int(2, 10), h = R.int(2, 10); return { q: `Find the volume of a cuboid ${l} cm × ${b} cm × ${h} cm.`, a: `${l * b * h} cm³`, wrong: [`${2 * (l * b + b * h + h * l)} cm³`, `${l + b + h} cm³`, `${l * b * h + l * b} cm³`], steps: [`Volume = l × b × h = ${l} × ${b} × ${h} = ${l * b * h} cm³`] }; },
    hcf: (R) => { const g = R.int(2, 12), a = g * R.int(2, 9), b = g * R.int(2, 9); const h = gcd(a, b); return { q: `Find the HCF of ${a} and ${b}.`, a: n(h), wrong: near(h, [lcm(a, b), h * 2, Math.min(a, b)], R), steps: [`Factors common to ${a} and ${b}: the greatest is ${h}.`, `(Prime factorisation: take the lowest power of each common prime.)`] }; },
    lcmQ: (R) => { const a = R.int(4, 24), b = R.int(4, 24); const l = lcm(a, b); return { q: `Find the LCM of ${a} and ${b}.`, a: n(l), wrong: near(l, [a * b === l ? l * 2 : a * b, gcd(a, b), l + Math.min(a, b)], R), steps: [`Multiples of ${Math.max(a, b)}: check which is first divisible by ${Math.min(a, b)}.`, `LCM = ${l}  (also: LCM = ${a} × ${b} ÷ HCF ${gcd(a, b)})`] }; },
    primeFact: (R) => { const ps = [2, 2, 3, 3, 5, 7]; const k = R.int(3, 4); const fs = []; for (let i = 0; i < k; i++) fs.push(R.pick(ps)); fs.sort((x, y) => x - y); const v = fs.reduce((x, y) => x * y, 1); const right = fs.join(" × "); const w1 = [...fs.slice(0, -1), fs[fs.length - 1] + 2].join(" × "); return { q: `Which is the prime factorisation of ${v}?`, a: right, wrong: [w1, [fs[0] * fs[1], ...fs.slice(2)].join(" × "), [...fs, 2].join(" × ")].filter((x) => x !== right), steps: [`Divide by the smallest prime repeatedly: ${v} = ${right}`] }; },
    integers: (R) => { const a = R.nz(-30, 30), b = R.nz(-30, 30), op = R.pick(["+", "−", "×"]); const v = op === "+" ? a + b : op === "−" ? a - b : a * b; const show = (x) => (x < 0 ? `(${n(x)})` : n(x)); return { q: `${show(a)} ${op} ${show(b)} = ?`, a: n(v), wrong: near(v, [-v, op === "×" ? a + b : a * b === v ? v + 2 : -a + b, v + (op === "×" ? a : 2)], R), steps: op === "×" ? [`Multiply the sizes: ${Math.abs(a)} × ${Math.abs(b)} = ${Math.abs(v)}`, `${a < 0 === b < 0 ? "Same signs give +" : "Different signs give −"}, so ${n(v)}`] : [`${show(a)} ${op} ${show(b)} = ${n(v)}`] }; },
    intDiv: (R) => { const b = R.nz(-12, 12), q = R.nz(-15, 15); const a = b * q; const show = (x) => (x < 0 ? `(${n(x)})` : n(x)); return { q: `${show(a)} ÷ ${show(b)} = ?`, a: n(q), wrong: near(q, [-q, q + 1, b], R), steps: [`${Math.abs(a)} ÷ ${Math.abs(b)} = ${Math.abs(q)}`, `${a < 0 === b < 0 ? "Same signs give +" : "Different signs give −"}, so ${n(q)}`] }; },
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
    ratioShare: (R) => { const p = R.int(1, 5), q = R.int(1, 6), k = R.int(20, 150); const total = (p + q) * k; return { q: `Divide ₹${n(total)} between A and B in the ratio ${p} : ${q}. What is A's share?`, a: rs(p * k), wrong: near(p * k, [q * k, total / 2, p * k + k], R, rs), steps: [`Total parts = ${p} + ${q} = ${p + q}`, `One part = ₹${n(total)} ÷ ${p + q} = ₹${k}`, `A's share = ${p} × ₹${k} = ₹${n(p * k)}`] }; },
    directProp: (R) => { const k = R.int(3, 12), u = R.int(5, 60), m = R.int(2, 25); return { q: `A car uses ${k} litres of petrol for ${k * u} km. How far can it go on ${m} litres?`, a: `${n(m * u)} km`, wrong: [`${n(m * u + u)} km`, `${n(k * u + m)} km`, `${n(m * k)} km`], steps: [`Distance per litre = ${k * u} ÷ ${k} = ${u} km`, `${m} × ${u} = ${n(m * u)} km`] }; },
    inverseProp: (R) => { const w1 = R.int(4, 15), d1 = R.int(6, 24); const total = w1 * d1; const opts = []; for (let w = 2; w <= 40; w++) if (total % w === 0 && w !== w1) opts.push(w); const w2 = R.pick(opts); return { q: `${w1} workers finish a job in ${d1} days. How many days will ${w2} workers take?`, a: `${total / w2} days`, wrong: [`${Math.round((d1 * w2) / w1) || d1 + 2} days`, `${total / w2 + 2} days`, `${d1} days`].filter((s) => s !== `${total / w2} days`), steps: [`Inverse proportion: workers × days stays the same = ${w1} × ${d1} = ${total}`, `Days = ${total} ÷ ${w2} = ${total / w2}`] }; },
    percentChange: (R) => { const base = R.int(4, 50) * 50, p = R.pick([5, 10, 12, 15, 20, 25]), up = R.next() < 0.5; const v = up ? base * (1 + p / 100) : base * (1 - p / 100); return { q: `A price of ₹${n(base)} ${up ? "increases" : "decreases"} by ${p}%. What is the new price?`, a: rs(v), wrong: near(v, [up ? base * (1 - p / 100) : base * (1 + p / 100), base + p, (base * p) / 100], R, rs), steps: [`${p}% of ₹${n(base)} = ₹${n((base * p) / 100)}`, `New price = ₹${n(base)} ${up ? "+" : "−"} ₹${n((base * p) / 100)} = ₹${n(v)}`] }; },
    profitLoss: (R) => { const cp = R.int(4, 80) * 25, p = R.pick([5, 10, 12, 15, 20, 25]), profit = R.next() < 0.5; const sp = profit ? cp * (1 + p / 100) : cp * (1 - p / 100); return { q: `An article is bought for ₹${n(cp)} and sold for ₹${n(sp)}. Find the ${profit ? "profit" : "loss"} percent.`, a: `${p}%`, wrong: [`${p + 5}%`, `${Math.round(((Math.abs(sp - cp)) / sp) * 1000) / 10}%`, `${p * 2}%`].filter((s) => s !== `${p}%`), steps: [`${profit ? "Profit" : "Loss"} = ₹${n(Math.abs(sp - cp))}`, `${profit ? "Profit" : "Loss"} % = ${n(Math.abs(sp - cp))} ÷ ${n(cp)} × 100 = ${p}%`] }; },
    discount: (R) => { const mp = R.int(4, 60) * 50, p = R.pick([5, 10, 15, 20, 25, 30]); const sp = mp * (1 - p / 100); return { q: `The marked price of a shirt is ₹${n(mp)}. A discount of ${p}% is given. Find the selling price.`, a: rs(sp), wrong: near(sp, [mp * (p / 100), mp - p, mp * (1 + p / 100)], R, rs), steps: [`Discount = ${p}% of ₹${n(mp)} = ₹${n((mp * p) / 100)}`, `Selling price = ₹${n(mp)} − ₹${n((mp * p) / 100)} = ₹${n(sp)}`] }; },
    simpleInt: (R) => { const p = R.int(2, 50) * 1000, r = R.pick([4, 5, 6, 8, 10, 12]), t = R.int(2, 5); const si = (p * r * t) / 100; return { q: `Find the simple interest on ₹${n(p)} at ${r}% per year for ${t} years.`, a: rs(si), wrong: near(si, [(p * r) / 100, p + si, (p * r * t) / 10], R, rs), steps: [`SI = P × R × T ÷ 100`, `= ${n(p)} × ${r} × ${t} ÷ 100 = ₹${n(si)}`] }; },
    compoundInt: (R) => { const p = R.int(1, 20) * 1000, r = R.pick([5, 10, 20]), t = 2; const amt = p * (1 + r / 100) ** t; return { q: `Find the amount on ₹${n(p)} at ${r}% per year compound interest for 2 years.`, a: rs(amt), wrong: near(amt, [p * (1 + (r * t) / 100), amt - p, p * (1 + r / 100)], R, rs), steps: [`A = P(1 + R/100)ⁿ`, `= ${n(p)} × (1 + ${r}/100)² = ${n(p)} × ${n((1 + r / 100) ** 2)} = ₹${n(amt)}`] }; },
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
    energyCost: (R) => { const W = R.pick([100, 200, 500, 1000, 1500, 2000]), h = R.int(2, 10), d = R.pick([10, 20, 30]), rate = R.int(4, 9); const units = (W / 1000) * h * d; return { q: `A ${W} W appliance runs ${h} hours a day for ${d} days. At ₹${rate} per unit (kWh), what is the cost?`, a: rs(units * rate), wrong: near(units * rate, [W * h * d * rate, units, (units * rate) / 2], R, rs), steps: [`Energy = ${W / 1000} kW × ${h} h × ${d} = ${n(units)} kWh`, `Cost = ${n(units)} × ₹${rate} = ₹${n(units * rate)}`] }; },
    density: (R) => { const V = R.int(2, 50), d = R.pick([0.8, 1, 2.7, 7.8, 11.3, 19.3]); return { q: `An object of mass ${n(d * V)} g has volume ${V} cm³. Find its density.`, a: `${n(d)} g/cm³`, wrong: [`${n(d * V * V)} g/cm³`, `${n(V / (d * V))} g/cm³`, `${n(d + 1)} g/cm³`].filter((s, i, arr) => s !== `${n(d)} g/cm³` && arr.indexOf(s) === i), steps: [`Density = mass ÷ volume = ${n(d * V)} ÷ ${V} = ${n(d)} g/cm³`] }; },
    wave: (R) => { const f = R.int(2, 50) * 10, lam = R.pick([0.5, 1, 1.5, 2, 3, 4]); return { q: `A sound wave has frequency ${f} Hz and wavelength ${n(lam)} m. Find its speed.`, a: `${n(f * lam)} m/s`, wrong: [`${n(f / lam)} m/s`, `${n(f + lam)} m/s`, `${n(lam / f)} m/s`], steps: [`v = fλ = ${f} × ${n(lam)} = ${n(f * lam)} m/s`] }; },
    lensPower: (R) => { const fcm = R.pick([10, 20, 25, 40, 50, 100, -20, -25, -50]); const P = 100 / fcm; return { q: `A lens has focal length ${n(fcm)} cm. Find its power.`, a: `${n(P)} D`, wrong: [`${n(fcm / 100)} D`, `${n(-P)} D`, `${n(1 / fcm)} D`], steps: [`P = 1/f (f in metres) = 100/${n(fcm)} = ${n(P)} D`] }; },
    magnification: (R) => { const h = R.int(2, 10), m = R.pick([-2, -1, -0.5, 2, 3, 0.5]); return { q: `An object ${h} cm tall forms an image ${n(Math.abs(h * m))} cm tall that is ${m < 0 ? "inverted" : "erect"}. Find the magnification.`, a: n(m), wrong: near(m, [-m, 1 / m, m * 2], R), steps: [`m = h′/h = ${n(h * m)}/${h} = ${n(m)} (negative means inverted)`] }; },
    molarMass: (R) => { const k = R.pick([["H₂O", 18], ["CO₂", 44], ["NaCl", 58.5], ["CaCO₃", 100], ["NH₃", 17], ["H₂SO₄", 98], ["CH₄", 16], ["O₂", 32]]); return { q: `Find the molecular mass of ${k[0]}. (H = 1, C = 12, N = 14, O = 16, Na = 23, S = 32, Cl = 35.5, Ca = 40)`, a: `${n(k[1])} u`, wrong: [`${n(k[1] + 2)} u`, `${n(k[1] - 1)} u`, `${n(k[1] * 2)} u`], steps: [`Add the atomic masses of all atoms in ${k[0]} = ${n(k[1])} u`] }; },
    moles: (R) => { const k = R.pick([["water", 18], ["carbon dioxide", 44], ["oxygen gas", 32], ["methane", 16]]); const mol = R.pick([0.5, 1, 2, 3, 4, 5]); return { q: `How many moles are there in ${n(k[1] * mol)} g of ${k[0]} (molar mass ${k[1]} g/mol)?`, a: n(mol), wrong: near(mol, [mol * 2, k[1] * mol, mol + 1], R), steps: [`Moles = mass ÷ molar mass = ${n(k[1] * mol)} ÷ ${k[1]} = ${n(mol)}`] }; },
    concentration: (R) => { const solute = R.int(2, 40), solvent = R.int(5, 40) * 10; const c = (solute / (solute + solvent)) * 100; return { q: `${solute} g of salt is dissolved in ${solvent} g of water. Find the concentration (mass by mass percent).`, a: `${n(Math.round(c * 100) / 100)}%`, wrong: [`${n(Math.round((solute / solvent) * 10000) / 100)}%`, `${n(Math.round((solvent / (solute + solvent)) * 10000) / 100)}%`, `${n(solute)}%`].filter((s, i, arr) => s !== `${n(Math.round(c * 100) / 100)}%` && arr.indexOf(s) === i), steps: [`Mass of solution = ${solute} + ${solvent} = ${solute + solvent} g`, `Concentration = ${solute} ÷ ${solute + solvent} × 100 = ${n(Math.round(c * 100) / 100)}%`] }; },
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

  // ---------- which generators fit which chapter ----------
  const M = {
    1: { "numbers-1-to-9": ["add1"], "addition-up-to-9": ["add1"], "subtraction-up-to-9": ["sub1"], "money-coins-and-notes": ["add1"] },
    2: { "addition-with-carrying": ["add2"], "subtraction-with-borrowing": ["sub2"], "multiplication-as-repeated-addition": ["repAdd", "table"], money: ["add2"], "place-value-tens-and-ones": ["add2"] },
    3: { addition: ["add3"], subtraction: ["sub3"], "multiplication-tables": ["table"], division: ["div"], money: ["money", "change"], length: ["unitConv"], "weight-and-capacity": ["unitConv"], time: ["timeLater", "minutes"], fractions: ["fracOf"] },
    4: { "addition-and-subtraction": ["add3", "sub3"], multiplication: ["mul"], division: ["div", "divRem"], "factors-and-multiples": ["hcf", "lcmQ"], fractions: ["fracOf"], "introduction-to-decimals": ["decAdd"], "perimeter-and-area": ["rectPA", "squarePA"], measurement: ["unitConv"], time: ["minutes", "timeLater"], money: ["money", "change"], "numbers-up-to-9999": ["placeVal"] },
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
    10: { "light-reflection-and-refraction": ["lensPower", "magnification"], electricity: ["ohm", "resistors", "elecPower", "energyCost"] },
  };
  const P = {
    11: { "motion-in-a-straight-line": ["accel", "sutHalf"], "laws-of-motion": ["force", "momentum"], "work-energy-and-power": ["work", "kinetic", "potential", "power"], "mechanical-properties-of-fluids": ["pressure"], waves: ["wave"] },
    12: { "current-electricity": ["ohm", "resistors", "elecPower"], "ray-optics-and-optical-instruments": ["lensPower", "magnification"] },
  };
  // PSEB Class 9 keeps the earlier NCERT Maths and Science books, whose chapters these generators were written for.
  const MAP = { maths: M, science: S, physics: P, mathspb: { 9: M[9] }, sciencepb: { 9: S[9] } };

  function forChapter(cls, subject, chapterId) {
    const m = MAP[subject] && MAP[subject][cls];
    return (m && m[chapterId]) || [];
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
    const wrong = (raw.wrong || []).filter((w, i, arr) => w !== raw.a && arr.indexOf(w) === i).slice(0, 3);
    if (!raw.a || wrong.length < 3) return null;
    return {
      q: raw.q,
      options: [raw.a, ...wrong],
      answer: 0,
      explain: raw.steps.join("\n"),
      steps: raw.steps,
      gen: name,
    };
  }

  // `count` fresh questions for a chapter, cycling through its generators.
  function questions(cls, subject, chapterId, count, seed) {
    const names = forChapter(cls, subject, chapterId);
    if (!names.length) return [];
    const out = [];
    const seen = new Set();
    for (let i = 0; out.length < count && i < count * 4; i++) {
      const q = make(names[i % names.length], (seed + i * 7919) >>> 0);
      if (q && !seen.has(q.q)) {
        seen.add(q.q);
        out.push(q);
      }
    }
    return out;
  }

  return { rng, forChapter, make, questions, names: Object.keys(G), MAP };
})();
