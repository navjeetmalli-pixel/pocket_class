// Numerical practice for science, physics, chemistry, accountancy and economics (Classes 6-12): fresh numbers every time, worked steps,
// wrong options made from the usual mistakes. Registered with Gen.add / Gen.mapChapters (js/gen.js), so it loads after gen.js.
// Conventions: g = 10 m/s² (stated in each question that needs it); speed of light c = 3 × 10⁸ m/s; Coulomb k = 9 × 10⁹ N m²/C²;
// 1 mol of gas = 22.4 L at STP; NA = 6.022 × 10²³; h = 6.63 × 10⁻³⁴ J s; hc = 1240 eV nm; NCERT atomic masses.
// Optics uses the new Cartesian sign convention exactly as NCERT does: distances are measured from the pole / optical centre, positive
// in the direction of the incident light (so u is negative for a real object); mirror 1/v + 1/u = 1/f, lens 1/v − 1/u = 1/f,
// m = −v/u (mirror) and m = v/u (lens).
(() => {
  if (typeof Gen === "undefined" || !Gen.add) return;

  // ---------- helpers (own copies: gen.js keeps its own private) ----------
  const loc = () => (typeof Money !== "undefined" && Money.locale ? Money.locale() : "en-IN");
  const cur = () => (typeof Money !== "undefined" && Money.symbol ? Money.symbol() : "₹");
  const clean = (x) => +Number(x).toPrecision(10);
  // A number without exponent notation, up to 4 decimals, Indian grouping from 1000 up, "−" for negatives.
  const f = (x) => {
    let v = clean(x);
    if (!Number.isFinite(v)) return "NaN";
    if (Math.abs(v * 1000 - Math.round(v * 1000)) > 1e-7) v = +v.toPrecision(4); // exact answers have at most 3 decimals; wrong options are rounded
    const a = Math.abs(v);
    let s = a >= 1000 ? a.toLocaleString(loc(), { maximumFractionDigits: 4 }) : String(a);
    if (/e/.test(s)) s = a.toFixed(12).replace(/0+$/, "").replace(/\.$/, "");
    return (v < 0 ? "−" : "") + s;
  };
  const rs = (x) => (x < 0 ? "−" : "") + cur() + f(Math.abs(x));
  const SUP = { "0": "⁰", "1": "¹", "2": "²", "3": "³", "4": "⁴", "5": "⁵", "6": "⁶", "7": "⁷", "8": "⁸", "9": "⁹", "-": "⁻" };
  const supOf = (e) => String(e).split("").map((c) => SUP[c] || c).join("");
  const SUBD = "₀₁₂₃₄₅₆₇₈₉";
  const sub = (k) => (k === 1 ? "" : String(k).split("").map((d) => SUBD[+d]).join(""));
  // 6.63 × 10⁻³⁴ (sf significant figures)
  function sci(x, sf = 3) {
    if (!x) return "0";
    let e = Math.floor(Math.log10(Math.abs(x)));
    let m = x / 10 ** e;
    if (parseFloat(m.toFixed(sf - 1)) >= 10) (m /= 10), e++;
    return `${m.toFixed(sf - 1)} × 10${supOf(e)}`;
  }
  const an = (x) => (/^(8|11$|18$)/.test(String(x)) ? "An " : "A ") + x;
  const u = (unit) => (x) => `${f(x)} ${unit}`;
  const gcd = (a, b) => (b ? gcd(b, a % b) : Math.abs(a));
  const lcm = (a, b) => (a * b) / gcd(a, b);
  const is2dp = (x) => Math.abs(x * 100 - Math.round(x * 100)) < 1e-7;
  const is1dp = (x) => Math.abs(x * 10 - Math.round(x * 10)) < 1e-7;
  const isInt = (x) => Math.abs(x - Math.round(x)) < 1e-9;
  const isHalf = (x) => Math.abs(x * 2 - Math.round(x * 2)) < 1e-9;
  // Tries `fn` until it returns something truthy (rejection sampling for "nice" numbers).
  const until = (fn, max = 300) => {
    for (let i = 0; i < max; i++) {
      const r = fn();
      if (r) return r;
    }
    return null;
  };
  // Three wrong answers. A candidate is a number / string, or { v, k } with k one of "slip", "sign", "scale", "method".
  // Duplicates of the answer or of each other, and non-finite numbers, are dropped; slips fill any gaps. Tags come back as `.kinds`.
  function opts(ans, cands, fmt = f) {
    const out = [], kinds = [], seen = new Set([typeof ans === "string" ? ans : fmt(ans)]);
    const put = (v, k) => {
      if (out.length >= 3) return;
      if (typeof v !== "string" && !Number.isFinite(v)) return;
      const s = typeof v === "string" ? v : fmt(v);
      if (seen.has(s) || /NaN|Infinity/.test(s)) return;
      seen.add(s);
      out.push(s);
      kinds.push(k || "slip");
    };
    for (const c of cands) (c !== null && typeof c === "object" ? put(c.v, c.k) : put(c));
    if (typeof ans === "number") {
      const mid = Math.abs(ans) >= 0.01 && Math.abs(ans) < 1e6; // tiny or huge answers (10⁻³⁴, 10²³): only change the scale
      for (const v of mid ? [ans + 1, ans - 1, ans * 2, ans / 2, ans + 2, ans * 10, ans / 10, ans * 3, ans + 5, ans - 5] : [ans * 2, ans / 2, ans * 10, ans / 10, ans * 3, ans / 3, ans * 5]) put(v, "slip");
    }
    out.kinds = kinds;
    return out;
  }
  const shuffle = (R, arr) => {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = R.int(0, i), t = a[i];
      a[i] = a[j];
      a[j] = t;
    }
    return a;
  };
  const NA = 6.022e23;

  // Text-option generators (answers that are words, not numbers): wrong options come from `pool`.
  function words(ans, pool, R, kind = "method") {
    const wrong = shuffle(R, pool.filter((p) => p !== ans)).slice(0, 3);
    wrong.kinds = wrong.map(() => kind);
    return wrong;
  }

  const gens = {};

  // =====================================================================================================================
  // SCIENCE, CLASSES 6-10 (motion, density, pressure, work and power, electricity, light, chemistry of moles)
  // =====================================================================================================================

  // km/h <-> m/s
  gens.sciSpeedConv = (R) => {
    const kmh = R.pick([18, 36, 54, 72, 90, 108, 126, 144]), ms = kmh / 3.6;
    if (R.next() < 0.5)
      return { q: `Convert a speed of ${kmh} km/h into m/s.`, a: `${f(ms)} m/s`, wrong: opts(ms, [{ v: kmh * 3.6, k: "scale" }, { v: kmh * 1000, k: "scale" }, { v: kmh / 60, k: "method" }], u("m/s")), steps: [`1 km/h = 1000 m ÷ 3600 s = 5/18 m/s`, `${kmh} × 5/18 = ${f(ms)} m/s`] };
    return { q: `A cyclist moves at ${f(ms)} m/s. Express this speed in km/h.`, a: `${kmh} km/h`, wrong: opts(kmh, [{ v: ms / 3.6, k: "scale" }, { v: ms * 60, k: "method" }, { v: ms * 1000, k: "scale" }], u("km/h")), steps: [`1 m/s = 3600 m per hour = 3.6 km/h`, `${f(ms)} × 3.6 = ${kmh} km/h`] };
  };

  // distance, speed and time with a change of unit
  gens.sciDST = (R) => {
    const kind = R.int(0, 3);
    if (kind === 0) {
      const [v, t] = until(() => { const v = R.pick([24, 30, 36, 40, 48, 60, 72, 80]), t = R.pick([15, 20, 30, 45, 90]); return (v * t) % 60 === 0 && [v, t]; });
      const d = (v * t) / 60;
      return { q: `A bus moves at a steady ${v} km/h for ${t} minutes. How far does it travel?`, a: `${f(d)} km`, wrong: opts(d, [{ v: v * t, k: "scale" }, { v: v / (t / 60), k: "method" }, { v: v + t / 60, k: "method" }], u("km")), steps: [`Time = ${t} min = ${t}/60 h`, `Distance = speed × time = ${v} × ${t}/60 = ${f(d)} km`] };
    }
    if (kind === 1) {
      const [v, t] = until(() => { const v = R.pick([30, 40, 50, 60, 75, 80, 90, 100]), t = R.pick([12, 15, 24, 30, 36, 45, 48, 60, 90, 120]); return (v * t) % 60 === 0 && [v, t]; });
      const d = (v * t) / 60;
      return { q: `A train covers ${f(d)} km at a steady ${v} km/h. How many minutes does it take?`, a: `${t} minutes`, wrong: opts(t, [{ v: d / v, k: "scale" }, { v: d * v, k: "method" }, { v: v / d * 60, k: "method" }], u("minutes")), steps: [`Time = distance ÷ speed = ${f(d)} ÷ ${v} = ${f(d / v)} h`, `${f(d / v)} h × 60 = ${t} minutes`] };
    }
    if (kind === 2) {
      const v = R.pick([2, 2.5, 4, 5, 7.5, 10, 12.5]), t = R.pick([20, 30, 40, 60]), d = v * t, kmh = v * 3.6;
      return { q: `A runner covers ${f(d)} m in ${t} s at a steady speed. Find the speed in km/h.`, a: `${f(kmh)} km/h`, wrong: opts(kmh, [{ v: v, k: "scale" }, { v: v / 3.6, k: "scale" }, { v: d * t, k: "method" }], u("km/h")), steps: [`Speed = distance ÷ time = ${f(d)} ÷ ${t} = ${f(v)} m/s`, `${f(v)} m/s × 3.6 = ${f(kmh)} km/h`] };
    }
    const [v, t] = until(() => { const v = R.pick([10, 15, 20, 25, 30]), t = R.pick([10, 15, 20, 25, 30, 50]); return isHalf((v * t * 60) / 1000) && [v, t]; });
    const d = (v * t * 60) / 1000;
    return { q: `A car travels ${f(d)} km in ${t} minutes at a steady speed. Find the speed in m/s.`, a: `${v} m/s`, wrong: opts(v, [{ v: v * 3.6, k: "scale" }, { v: d / t, k: "scale" }, { v: (d * 1000) / t, k: "scale" }], u("m/s")), steps: [`Distance = ${f(d)} km = ${f(d * 1000)} m; time = ${t} min = ${t * 60} s`, `Speed = ${f(d * 1000)} ÷ ${t * 60} = ${v} m/s`] };
  };

  // average speed
  gens.sciAvgSpeed = (R) => {
    if (R.next() < 0.5) {
      const [v1, v2] = R.pick([[40, 60], [30, 60], [20, 30], [60, 90], [20, 60], [30, 45], [40, 120], [60, 120], [10, 15], [50, 75]]);
      const L = lcm(v1, v2), d = L * R.pick([1, 2, 3]), t1 = d / v1, t2 = d / v2, avg = (2 * d) / (t1 + t2);
      return { q: `A car goes ${d} km at ${v1} km/h and returns the same ${d} km at ${v2} km/h. Find its average speed for the whole trip.`, a: `${f(avg)} km/h`, wrong: opts(avg, [{ v: (v1 + v2) / 2, k: "method" }, { v: v1 + v2, k: "method" }, { v: Math.abs(v2 - v1), k: "method" }], u("km/h")), steps: [`Time going = ${d} ÷ ${v1} = ${f(t1)} h; time returning = ${d} ÷ ${v2} = ${f(t2)} h`, `Average speed = total distance ÷ total time = ${2 * d} ÷ ${f(t1 + t2)} = ${f(avg)} km/h`, `(Not the mean of the two speeds, because more time is spent at the lower speed.)`] };
    }
    const [v1, v2, t1, t2] = until(() => { const v1 = R.int(2, 9) * 10, v2 = R.int(2, 9) * 10, t1 = R.int(1, 4), t2 = R.int(1, 4); return v1 !== v2 && is2dp((v1 * t1 + v2 * t2) / (t1 + t2)) && [v1, v2, t1, t2]; });
    const avg = (v1 * t1 + v2 * t2) / (t1 + t2);
    return { q: `A bus travels at ${v1} km/h for ${t1} hour${t1 > 1 ? "s" : ""} and then at ${v2} km/h for ${t2} hour${t2 > 1 ? "s" : ""}. Find its average speed.`, a: `${f(avg)} km/h`, wrong: opts(avg, [{ v: (v1 + v2) / 2, k: "method" }, { v: v1 * t1 + v2 * t2, k: "method" }, { v: (v1 * t1 + v2 * t2) / 2, k: "method" }], u("km/h")), steps: [`Distance = ${v1} × ${t1} + ${v2} × ${t2} = ${v1 * t1 + v2 * t2} km`, `Time = ${t1} + ${t2} = ${t1 + t2} h`, `Average speed = ${v1 * t1 + v2 * t2} ÷ ${t1 + t2} = ${f(avg)} km/h`] };
  };

  // density
  const MAT = [["aluminium", 2.7], ["iron", 7.8], ["copper", 8.9], ["lead", 11.3], ["gold", 19.3], ["mercury", 13.6], ["kerosene", 0.8], ["ice", 0.9]];
  gens.sciDensity = (R) => {
    const kind = R.int(0, 3);
    if (kind === 0) {
      const rho = R.pick([500, 800, 900, 1000, 2700, 7800, 8900, 11300, 13600]), V = R.pick([0.01, 0.02, 0.05, 0.1, 0.2, 0.5]), m = clean(rho * V);
      return { q: `A block has a mass of ${f(m)} kg and a volume of ${f(V)} m³. Find its density.`, a: `${f(rho)} kg/m³`, wrong: opts(rho, [{ v: m * V, k: "method" }, { v: V / m, k: "method" }, { v: rho / 1000, k: "scale" }], u("kg/m³")), steps: [`Density = mass ÷ volume`, `= ${f(m)} ÷ ${f(V)} = ${f(rho)} kg/m³`] };
    }
    if (kind === 1) {
      const [nm, rho] = R.pick(MAT);
      return { q: `The density of ${nm} is ${f(rho)} g/cm³. Express it in kg/m³.`, a: `${f(rho * 1000)} kg/m³`, wrong: opts(rho * 1000, [{ v: rho * 100, k: "scale" }, { v: rho / 1000, k: "scale" }, { v: rho * 1e6, k: "scale" }], u("kg/m³")), steps: [`1 g/cm³ = 1000 kg/m³ (1 g = 10⁻³ kg and 1 cm³ = 10⁻⁶ m³)`, `${f(rho)} × 1000 = ${f(rho * 1000)} kg/m³`] };
    }
    if (kind === 2) {
      const [nm, rho] = R.pick(MAT), V = R.pick([10, 20, 25, 40, 50, 100]), m = clean(rho * V);
      return { q: `The density of ${nm} is ${f(rho)} g/cm³. Find the mass of ${V} cm³ of it.`, a: `${f(m)} g`, wrong: opts(m, [{ v: V / rho, k: "method" }, { v: rho + V, k: "method" }, { v: m * 1000, k: "scale" }], u("g")), steps: [`Mass = density × volume`, `= ${f(rho)} × ${V} = ${f(m)} g`] };
    }
    const [nm, rho] = R.pick(MAT), V = R.pick([10, 20, 25, 40, 50, 100]), m = clean(rho * V);
    return { q: `A piece of ${nm} (density ${f(rho)} g/cm³) has a mass of ${f(m)} g. Find its volume.`, a: `${f(V)} cm³`, wrong: opts(V, [{ v: m * rho, k: "method" }, { v: rho / m, k: "method" }, { v: m - rho, k: "method" }], u("cm³")), steps: [`Volume = mass ÷ density`, `= ${f(m)} ÷ ${f(rho)} = ${f(V)} cm³`] };
  };

  // pressure
  gens.sciPressure = (R) => {
    const kind = R.int(0, 2);
    if (kind === 0) {
      const A = R.pick([20, 25, 50, 100, 200, 250, 400, 500]), F = R.pick([10, 20, 25, 40, 50, 100, 200, 500]), P = (F * 10000) / A;
      return { q: `A force of ${F} N acts on an area of ${A} cm². Find the pressure in pascals (Pa).`, a: `${f(P)} Pa`, wrong: opts(P, [{ v: F / A, k: "scale" }, { v: F * A, k: "method" }, { v: P / 10, k: "scale" }], u("Pa")), steps: [`Area = ${A} cm² = ${A} ÷ 10000 m² = ${f(A / 10000)} m²`, `Pressure = force ÷ area = ${F} ÷ ${f(A / 10000)} = ${f(P)} Pa`] };
    }
    if (kind === 1) {
      const m = R.pick([20, 40, 60, 80, 100]), A = R.pick([0.1, 0.2, 0.4, 0.5, 1, 2]), W = m * 10, P = W / A;
      return { q: `A box of mass ${m} kg rests on the floor on a contact area of ${f(A)} m². Find the pressure it exerts. (g = 10 m/s²)`, a: `${f(P)} Pa`, wrong: opts(P, [{ v: m / A, k: "method" }, { v: W * A, k: "method" }, { v: P * 10, k: "scale" }], u("Pa")), steps: [`Force = weight = mg = ${m} × 10 = ${W} N`, `Pressure = force ÷ area = ${W} ÷ ${f(A)} = ${f(P)} Pa`] };
    }
    const h = R.pick([2, 3, 5, 8, 10, 15, 20]), lq = R.pick([["water (density 1000 kg/m³)", 1000], ["oil of density 800 kg/m³", 800], ["a liquid of density 1200 kg/m³", 1200]]), P = h * lq[1] * 10;
    return { q: `Find the pressure due to a column of ${lq[0]} that is ${h} m deep. (g = 10 m/s²)`, a: `${f(P)} Pa`, wrong: opts(P, [{ v: h * lq[1], k: "method" }, { v: h * 10, k: "method" }, { v: lq[1] * 10, k: "method" }], u("Pa")), steps: [`Pressure = hρg`, `= ${h} × ${lq[1]} × 10 = ${f(P)} Pa`] };
  };

  // work and power with unit changes
  gens.sciWorkPower = (R) => {
    const kind = R.int(0, 2);
    if (kind === 0) {
      const [m, h, t] = until(() => { const m = R.pick([10, 20, 25, 40, 50, 60]), h = R.int(2, 12), t = R.pick([5, 8, 10, 12, 15, 20, 25]); return (m * 10 * h * 4) % t === 0 && [m, h, t]; });
      const W = m * 10 * h, P = W / t;
      return { q: `A worker lifts a ${m} kg load through ${h} m in ${t} s. Find the power used. (g = 10 m/s²)`, a: `${f(P)} W`, wrong: opts(P, [{ v: W, k: "method" }, { v: P * t, k: "method" }, { v: (m * h) / t, k: "method" }], u("W")), steps: [`Work done = mgh = ${m} × 10 × ${h} = ${f(W)} J`, `Power = work ÷ time = ${f(W)} ÷ ${t} = ${f(P)} W`] };
    }
    if (kind === 1) {
      const P = R.pick([1, 1.5, 2, 3, 5]), t = R.pick([2, 5, 10, 15, 20]), E = P * t * 60;
      return { q: `A ${f(P)} kW motor runs for ${t} minutes. How much work does it do, in kilojoules (kJ)?`, a: `${f(E)} kJ`, wrong: opts(E, [{ v: P * t, k: "scale" }, { v: E * 1000, k: "scale" }, { v: (P * t) / 60, k: "scale" }], u("kJ")), steps: [`Time = ${t} min = ${t * 60} s`, `Work = power × time = ${f(P)} kW × ${t * 60} s = ${f(E)} kJ (1 kW × 1 s = 1 kJ)`] };
    }
    const P = R.pick([50, 100, 200, 500, 750, 1000]), t = R.pick([4, 10, 12, 20, 30, 60]), W = P * t;
    return { q: `A machine of power ${f(P)} W does ${f(W)} J of work. How long does it work?`, a: `${t} s`, wrong: opts(t, [{ v: P * W, k: "method" }, { v: t * 60, k: "scale" }, { v: P / W, k: "method" }], u("s")), steps: [`Power = work ÷ time, so time = work ÷ power`, `= ${f(W)} ÷ ${f(P)} = ${t} s`] };
  };

  // three resistors
  const R3 = [[6, 6, 6], [2, 3, 6], [3, 6, 6], [4, 4, 2], [10, 10, 5], [12, 12, 6], [20, 30, 60], [4, 12, 6], [30, 15, 10], [15, 15, 5], [2, 4, 4], [12, 6, 4]];
  const PAIR = [[2, 2], [3, 6], [4, 4], [6, 6], [12, 6], [10, 15], [20, 5], [12, 4], [30, 20], [10, 10], [8, 8], [9, 18]];
  const parallel = (arr) => 1 / arr.reduce((s, x) => s + 1 / x, 0);
  gens.sciResist = (R) => {
    const kind = R.int(0, 2);
    if (kind === 0) {
      const [a, b, c] = [R.int(1, 15), R.int(1, 15), R.int(1, 15)], tot = a + b + c;
      return { q: `Three resistors of ${a} Ω, ${b} Ω and ${c} Ω are connected in series. Find the equivalent resistance.`, a: `${tot} Ω`, wrong: opts(tot, [{ v: parallel([a, b, c]), k: "method" }, { v: a * b * c, k: "method" }, { v: (a + b + c) / 3, k: "method" }], u("Ω")), steps: [`Series: R = R₁ + R₂ + R₃`, `R = ${a} + ${b} + ${c} = ${tot} Ω`] };
    }
    if (kind === 1) {
      const t = shuffle(R, R.pick(R3)), [a, b, c] = t, L = lcm(lcm(a, b), c), S = L / a + L / b + L / c, Rp = L / S;
      return { q: `Three resistors of ${a} Ω, ${b} Ω and ${c} Ω are connected in parallel. Find the equivalent resistance.`, a: `${f(Rp)} Ω`, wrong: opts(Rp, [{ v: a + b + c, k: "method" }, { v: S / L, k: "method" }, { v: (a + b + c) / 3, k: "method" }], u("Ω")), steps: [`Parallel: 1/R = 1/R₁ + 1/R₂ + 1/R₃ = 1/${a} + 1/${b} + 1/${c}`, `With denominator ${L}: 1/R = (${L / a} + ${L / b} + ${L / c})/${L} = ${S}/${L}`, `R = ${L}/${S} = ${f(Rp)} Ω`] };
    }
    const [p, q2] = shuffle(R, R.pick(PAIR)), r1 = R.int(1, 10), Rp = (p * q2) / (p + q2), tot = r1 + Rp;
    return { q: `A ${r1} Ω resistor is connected in series with a parallel combination of ${p} Ω and ${q2} Ω. Find the equivalent resistance of the whole arrangement.`, a: `${f(tot)} Ω`, wrong: opts(tot, [{ v: r1 + p + q2, k: "method" }, { v: parallel([r1, p, q2]), k: "method" }, { v: r1 + p + q2 === 0 ? 0 : r1 + (p + q2) / 2, k: "method" }], u("Ω")), steps: [`Parallel part: R = (${p} × ${q2}) ÷ (${p} + ${q2}) = ${f(Rp)} Ω`, `In series with ${r1} Ω: total = ${r1} + ${f(Rp)} = ${f(tot)} Ω`] };
  };

  // Ohm's law in a small circuit
  gens.sciCircuit = (R) => {
    const kind = R.int(0, 2);
    if (kind === 2) {
      const [a, b] = R.pick([[4, 12], [6, 3], [10, 15], [6, 12], [20, 5], [8, 8], [30, 60], [12, 4]]), L = lcm(a, b), V = L * R.pick([1, 2, 3]), Ia = V / a, Ib = V / b, I = Ia + Ib;
      return { q: `Two resistors of ${a} Ω and ${b} Ω are connected in parallel across a battery of ${V} V. Find the total current drawn from the battery.`, a: `${f(I)} A`, wrong: opts(I, [{ v: V / (a + b), k: "method" }, { v: Ia, k: "method" }, { v: V / ((a * b) / (a + b)) * 2, k: "method" }], u("A")), steps: [`Each resistor has the full ${V} V across it`, `I₁ = ${V} ÷ ${a} = ${f(Ia)} A, I₂ = ${V} ÷ ${b} = ${f(Ib)} A`, `Total current = ${f(Ia)} + ${f(Ib)} = ${f(I)} A`] };
    }
    const a = R.int(2, 12), b = R.int(2, 12), I = R.pick([0.5, 1, 1.5, 2, 3]), V = I * (a + b);
    if (kind === 0)
      return { q: `Two resistors of ${a} Ω and ${b} Ω are connected in series across a battery of ${f(V)} V. Find the current in the circuit.`, a: `${f(I)} A`, wrong: opts(I, [{ v: V / a, k: "method" }, { v: V / ((a * b) / (a + b)), k: "method" }, { v: V * (a + b), k: "method" }], u("A")), steps: [`Series: R = ${a} + ${b} = ${a + b} Ω`, `I = V ÷ R = ${f(V)} ÷ ${a + b} = ${f(I)} A`] };
    return { q: `Two resistors of ${a} Ω and ${b} Ω are connected in series across a battery of ${f(V)} V. Find the potential difference across the ${b} Ω resistor.`, a: `${f(I * b)} V`, wrong: opts(I * b, [{ v: V, k: "method" }, { v: I * a, k: "method" }, { v: V / b, k: "method" }], u("V")), steps: [`Current: I = V ÷ (${a} + ${b}) = ${f(V)} ÷ ${a + b} = ${f(I)} A`, `V across ${b} Ω = IR = ${f(I)} × ${b} = ${f(I * b)} V`] };
  };

  // heating effect and power formulas
  gens.sciJoule = (R) => {
    const I = R.int(1, 5), Rr = R.pick([2, 4, 5, 10, 20]);
    if (R.next() < 0.5) {
      const t = R.pick([10, 20, 30, 60]), H = I * I * Rr * t;
      return { q: `A current of ${I} A flows through a ${Rr} Ω resistor for ${t} s. Find the heat produced.`, a: `${f(H)} J`, wrong: opts(H, [{ v: I * Rr * t, k: "method" }, { v: I * I * Rr, k: "method" }, { v: I * I * t, k: "method" }], u("J")), steps: [`Joule's law: H = I²Rt`, `H = ${I}² × ${Rr} × ${t} = ${I * I} × ${Rr} × ${t} = ${f(H)} J`] };
    }
    const tm = R.pick([1, 2, 5]), H = I * I * Rr * tm * 60;
    return { q: `A heater of resistance ${Rr} Ω carries a current of ${I} A for ${tm} minute${tm > 1 ? "s" : ""}. Find the heat produced in joules.`, a: `${f(H)} J`, wrong: opts(H, [{ v: I * I * Rr * tm, k: "scale" }, { v: I * Rr * tm * 60, k: "method" }, { v: H / 60, k: "scale" }], u("J")), steps: [`Time = ${tm} min = ${tm * 60} s`, `H = I²Rt = ${I}² × ${Rr} × ${tm * 60} = ${f(H)} J`] };
  };

  gens.sciPower2 = (R) => {
    const kind = R.int(0, 2);
    if (kind === 0) {
      const V = R.pick([12, 24, 110, 220]), [Rr] = until(() => { const r = R.pick([4, 5, 10, 11, 22, 44, 55, 110, 121]); return isHalf((V * V) / r) && [r]; }), P = (V * V) / Rr;
      return { q: `A heater of resistance ${Rr} Ω is connected to a ${V} V supply. Find its power.`, a: `${f(P)} W`, wrong: opts(P, [{ v: V / Rr, k: "method" }, { v: V * Rr, k: "method" }, { v: V * V * Rr, k: "method" }], u("W")), steps: [`P = V²/R`, `P = ${V}² ÷ ${Rr} = ${f(V * V)} ÷ ${Rr} = ${f(P)} W`] };
    }
    if (kind === 1) {
      const [V, P] = R.pick([[220, 100], [220, 55], [220, 40], [220, 110], [220, 484], [110, 100], [110, 25], [220, 220]]), Rr = (V * V) / P;
      return { q: `An electric bulb is marked ${P} W, ${V} V. Find the resistance of its filament when it works normally.`, a: `${f(Rr)} Ω`, wrong: opts(Rr, [{ v: V / P, k: "method" }, { v: P / (V * V), k: "method" }, { v: V * P, k: "method" }], u("Ω")), steps: [`P = V²/R, so R = V² ÷ P`, `R = ${f(V * V)} ÷ ${P} = ${f(Rr)} Ω`] };
    }
    const I = R.pick([0.5, 1, 2, 3, 4, 5]), Rr = R.pick([4, 8, 10, 20, 40]), P = I * I * Rr;
    return { q: `A current of ${f(I)} A flows through a ${Rr} Ω resistor. Find the power dissipated in it.`, a: `${f(P)} W`, wrong: opts(P, [{ v: I * Rr, k: "method" }, { v: I * Rr * 2, k: "method" }, { v: Rr / (I * I), k: "method" }], u("W")), steps: [`P = I²R`, `P = ${f(I)}² × ${Rr} = ${f(I * I)} × ${Rr} = ${f(P)} W`] };
  };

  // electricity bill with several appliances
  gens.sciBill = (R) => {
    const APP = shuffle(R, [["tube light", 40], ["fan", 75], ["bulb", 100], ["television", 100], ["iron", 1000], ["heater", 1500], ["geyser", 2000], ["refrigerator", 200]]).slice(0, R.int(2, 3));
    const rows = APP.map(([nm, w]) => [nm, w, R.int(1, 8)]), rate = R.int(4, 9), days = 30;
    const perDay = rows.reduce((s, r) => s + (r[1] * r[2]) / 1000, 0), units = perDay * days, cost = units * rate;
    const list = rows.map(([nm, w, h]) => `a ${w} W ${nm} for ${h} h`).join(", ");
    return { q: `A family uses ${list} every day. At ${cur()}${rate} per unit (1 unit = 1 kWh), find the electricity bill for ${days} days.`, a: `${cur()}${f(cost)}`, wrong: opts(cost, [{ v: cost * 1000, k: "scale" }, { v: perDay * rate, k: "method" }, { v: (rows[0][1] * rows[0][2] * days * rate) / 1000, k: "method" }], (x) => `${cur()}${f(x)}`), steps: [...rows.map(([nm, w, h]) => `${nm}: ${w} W × ${h} h = ${f(w * h)} Wh = ${f((w * h) / 1000)} kWh a day`), `Energy in ${days} days = ${f(perDay)} × ${days} = ${f(units)} kWh`, `Cost = ${f(units)} × ${cur()}${rate} = ${cur()}${f(cost)}`] };
  };

  // ---------- mirrors and lenses (new Cartesian sign convention) ----------
  const OPT = {
    "concave mirror": { mirror: true, fs: -1, f: [10, 12, 15, 20, 25, 30], u: [8, 10, 12, 15, 18, 20, 24, 25, 30, 36, 40, 45, 60] },
    "convex mirror": { mirror: true, fs: 1, f: [10, 12, 15, 20, 30], u: [15, 20, 24, 30, 40, 60] },
    "convex lens": { mirror: false, fs: 1, f: [10, 12, 15, 20, 25, 30], u: [8, 10, 12, 15, 18, 20, 24, 25, 30, 36, 40, 45, 60] },
    "concave lens": { mirror: false, fs: -1, f: [10, 12, 15, 20, 30], u: [15, 20, 24, 30, 40, 60] },
  };
  const optVs = (mirror, fv, uv) => (mirror ? 1 / (1 / fv - 1 / uv) : 1 / (1 / fv + 1 / uv)); // v from f and u (u negative)
  const sg = (x) => (x > 0 ? "+" : "") + f(x);
  gens.sciOptics = (R) => {
    const kind = R.pick(Object.keys(OPT)), o = OPT[kind];
    const pick = until(() => {
      const fm = o.fs * R.pick(o.f), um = -R.pick(o.u);
      if (Math.abs(1 / fm - 1 / um) < 1e-12 && o.mirror) return null;
      if (!o.mirror && Math.abs(1 / fm + 1 / um) < 1e-12) return null;
      const v = optVs(o.mirror, fm, um);
      return Number.isFinite(v) && Math.abs(v) <= 200 && is1dp(v) && { fm, um, v };
    });
    const { fm, um, v } = pick || { fm: -15, um: -30, v: -30 };
    const m = o.mirror ? -v / um : v / um, real = o.mirror ? v < 0 : v > 0, a = Math.abs(um), fa = Math.abs(fm);
    const where = o.mirror ? "pole" : "optical centre", formula = o.mirror ? "1/v + 1/u = 1/f" : "1/v − 1/u = 1/f", solveFor = o.mirror ? "1/v = 1/f − 1/u" : "1/v = 1/f + 1/u";
    const setup = `Take the incident light as the positive direction: u = −${a} cm, f = ${sg(fm)} cm (${o.fs < 0 ? "negative for a " + kind : "positive for a " + kind})`;
    const sub = o.mirror ? `1/v = 1/(${f(fm)}) − 1/(${f(um)})` : `1/v = 1/(${f(fm)}) + 1/(${f(um)})`;
    const head = `An object is placed ${a} cm from the ${where} of a ${kind} of focal length ${fa} cm, on the side the light comes from.`;
    const conv = `Use the new Cartesian sign convention.`;
    const which = R.next();
    // the usual mistakes: wrong formula, u taken positive
    const wrongFormula = o.mirror ? 1 / (1 / fm + 1 / um) : 1 / (1 / fm - 1 / um);
    const uPos = o.mirror ? 1 / (1 / fm - 1 / a) : 1 / (1 / fm + 1 / a);
    if (which < 0.4)
      return { q: `${head} ${conv} Find the image distance v (with its sign).`, a: `${sg(v)} cm`, wrong: opts(v, [{ v: -v, k: "sign" }, { v: uPos, k: "sign" }, { v: wrongFormula, k: "method" }, { v: fm + um, k: "method" }].map((c) => ({ v: Math.abs(c.v) < 1e-9 ? NaN : c.v, k: c.k })), (x) => `${sg(x)} cm`), steps: [setup, `${o.mirror ? "Mirror" : "Lens"} formula: ${formula}`, `${sub}`, `v = ${sg(v)} cm — ${v * (o.mirror ? -1 : 1) > 0 ? "real image" : "virtual image"} (${o.mirror ? (v < 0 ? "in front of the mirror" : "behind the mirror") : v > 0 ? "on the far side of the lens" : "on the same side as the object"})`] };
    if (which < 0.7 && is2dp(m))
      return { q: `${head} ${conv} Find the magnification (with its sign).`, a: sg(m), wrong: opts(m, [{ v: -m, k: "sign" }, { v: 1 / m, k: "method" }, { v: o.mirror ? v / um : -v / um, k: "sign" }, { v: Math.abs(m), k: "sign" }].map((c) => ({ v: Math.abs(c.v) < 1e-9 ? NaN : c.v, k: c.k })), sg), steps: [setup, `${solveFor}, so v = ${sg(v)} cm`, `Magnification m = ${o.mirror ? "−v/u" : "v/u"} = ${o.mirror ? `−(${f(v)})/(${f(um)})` : `(${f(v)})/(${f(um)})`} = ${sg(m)}`, `${m < 0 ? "Negative m: the image is inverted" : "Positive m: the image is erect"}${Math.abs(Math.abs(m) - 1) < 1e-9 ? ", the same size" : Math.abs(m) > 1 ? " and magnified" : " and diminished"}`] };
    const size = Math.abs(Math.abs(m) - 1) < 1e-9 ? "same size" : Math.abs(m) > 1 ? "magnified" : "diminished";
    const nat = `${real ? "Real" : "Virtual"}, ${m < 0 ? "inverted" : "erect"} and ${size}`;
    const POOL = ["Real, inverted and magnified", "Real, inverted and diminished", "Virtual, erect and magnified", "Virtual, erect and diminished", "Real, inverted and same size"];
    return { q: `${head} What is the nature of the image formed?`, a: nat, wrong: words(nat, POOL.slice(0, 4).concat(Math.abs(Math.abs(m) - 1) < 1e-9 ? [] : [POOL[4]]), R), steps: [setup, `${solveFor}, so v = ${sg(v)} cm`, `m = ${o.mirror ? "−v/u" : "v/u"} = ${sg(m)}`, `${real ? "Real" : "Virtual"} image (${o.mirror ? "v " + (v < 0 ? "negative" : "positive") : "v " + (v > 0 ? "positive" : "negative")}), ${m < 0 ? "inverted" : "erect"} (m ${m < 0 ? "negative" : "positive"}), ${size} (|m| ${Math.abs(m) > 1.0001 ? "> 1" : Math.abs(m) < 0.9999 ? "< 1" : "= 1"})`] };
  };

  // refractive index
  gens.sciRefIndex = (R) => {
    const kind = R.int(0, 2);
    if (kind === 2) {
      const [si, n2] = until(() => { const si = R.pick([0.5, 0.6, 0.8, 0.9]), n2 = R.pick([1.25, 1.5, 2]); return is2dp(si / n2) && [si, n2]; }), sr = si / n2;
      return { q: `A ray passes from air into a medium. The sine of the angle of incidence is ${f(si)} and the sine of the angle of refraction is ${f(sr)}. Find the refractive index of the medium.`, a: f(n2), wrong: opts(n2, [{ v: sr / si, k: "method" }, { v: si * sr, k: "method" }, { v: si + sr, k: "method" }]), steps: [`Snell's law (from air, n = 1): n = sin i ÷ sin r`, `n = ${f(si)} ÷ ${f(sr)} = ${f(n2)}`] };
    }
    const [vv, nn] = R.pick([[2, 1.5], [1.5, 2], [2.4, 1.25], [2.5, 1.2], [1.2, 2.5], [1, 3]]);
    if (kind === 0)
      return { q: `The speed of light in a medium is ${f(vv)} × 10⁸ m/s. Find its refractive index. (speed of light in vacuum c = 3 × 10⁸ m/s)`, a: f(nn), wrong: opts(nn, [{ v: vv / 3, k: "method" }, { v: 3 * vv, k: "method" }, { v: 3 - vv, k: "method" }]), steps: [`n = c ÷ v`, `n = 3 × 10⁸ ÷ (${f(vv)} × 10⁸) = ${f(nn)}`] };
    return { q: `A medium has refractive index ${f(nn)}. Find the speed of light in it. (c = 3 × 10⁸ m/s)`, a: `${f(vv)} × 10⁸ m/s`, wrong: opts(vv, [{ v: 3 * nn, k: "method" }, { v: 3 / (nn * nn), k: "method" }, { v: nn / 3, k: "method" }], (x) => `${f(x)} × 10⁸ m/s`), steps: [`n = c ÷ v, so v = c ÷ n`, `v = 3 × 10⁸ ÷ ${f(nn)} = ${f(vv)} × 10⁸ m/s`] };
  };

  // =====================================================================================================================
  // CHEMISTRY (Classes 9-11)
  // =====================================================================================================================
  const GAS = [["oxygen", "O₂", 32], ["nitrogen", "N₂", 28], ["carbon dioxide", "CO₂", 44], ["hydrogen", "H₂", 2], ["methane", "CH₄", 16], ["ammonia", "NH₃", 17], ["sulphur dioxide", "SO₂", 64], ["chlorine", "Cl₂", 71]];
  gens.chemStp = (R) => {
    const [nm, fo, M] = R.pick(GAS), mol = R.pick([0.25, 0.5, 1, 1.5, 2, 3, 4]), V = clean(mol * 22.4), m = mol * M, kind = R.int(0, 2);
    const conv = `(At STP, 1 mol of any gas occupies 22.4 L; molar mass of ${fo} = ${M} g/mol)`;
    if (kind === 0)
      return { q: `What volume does ${f(m)} g of ${nm} (${fo}) occupy at STP? ${conv}`, a: `${f(V)} L`, wrong: opts(V, [{ v: m * 22.4, k: "method" }, { v: m / 22.4, k: "method" }, { v: mol * M / 22.4 * 10, k: "scale" }], u("L")), steps: [`Moles = mass ÷ molar mass = ${f(m)} ÷ ${M} = ${f(mol)} mol`, `Volume = moles × 22.4 = ${f(mol)} × 22.4 = ${f(V)} L`] };
    if (kind === 1)
      return { q: `What is the mass of ${f(V)} L of ${nm} (${fo}) measured at STP? ${conv}`, a: `${f(m)} g`, wrong: opts(m, [{ v: V * M, k: "method" }, { v: V / M, k: "method" }, { v: mol * 22.4, k: "method" }], u("g")), steps: [`Moles = volume ÷ 22.4 = ${f(V)} ÷ 22.4 = ${f(mol)} mol`, `Mass = moles × molar mass = ${f(mol)} × ${M} = ${f(m)} g`] };
    return { q: `How many moles of ${nm} are there in ${f(V)} L of the gas at STP? (At STP, 1 mol of any gas occupies 22.4 L)`, a: `${f(mol)} mol`, wrong: opts(mol, [{ v: V * 22.4, k: "method" }, { v: 22.4 / V, k: "method" }, { v: V, k: "method" }], u("mol")), steps: [`Moles = volume ÷ 22.4 L/mol`, `= ${f(V)} ÷ 22.4 = ${f(mol)} mol`] };
  };

  gens.chemMolecules = (R) => {
    const sp = R.pick([["water", "H₂O", 18, 3], ["carbon dioxide", "CO₂", 44, 3], ["oxygen", "O₂", 32, 2], ["ammonia", "NH₃", 17, 4], ["methane", "CH₄", 16, 5], ["glucose", "C₆H₁₂O₆", 180, 24]]);
    const [nm, fo, M, at] = sp, mol = R.pick([0.1, 0.2, 0.5, 1, 2, 3]), m = mol * M, N = mol * NA, atoms = N * at;
    if (R.next() < 0.5)
      return { q: `How many molecules are there in ${f(m)} g of ${nm} (${fo})? (molar mass ${M} g/mol; Avogadro constant = 6.022 × 10²³ per mol; 4 significant figures)`, a: sci(N, 4), wrong: opts(N, [{ v: m * NA, k: "method" }, { v: N * 10, k: "scale" }, { v: N / 10, k: "scale" }], (x) => sci(x, 4)), steps: [`Moles = ${f(m)} ÷ ${M} = ${f(mol)} mol`, `Molecules = ${f(mol)} × 6.022 × 10²³ = ${sci(N, 4)}`] };
    return { q: `How many atoms are there in ${f(m)} g of ${nm} (${fo})? (molar mass ${M} g/mol; Avogadro constant = 6.022 × 10²³ per mol; 4 significant figures)`, a: sci(atoms, 4), wrong: opts(atoms, [{ v: N, k: "method" }, { v: atoms * 10, k: "scale" }, { v: atoms / at, k: "method" }], (x) => sci(x, 4)), steps: [`Moles = ${f(m)} ÷ ${M} = ${f(mol)} mol`, `Molecules = ${f(mol)} × 6.022 × 10²³ = ${sci(N, 4)}`, `Each molecule of ${fo} has ${at} atoms, so atoms = ${sci(N, 4)} × ${at} = ${sci(atoms, 4)}`] };
  };

  const AM = { H: 1, C: 12, N: 14, O: 16, Cl: 35.5 };
  gens.chemMolFormula = (R) => {
    const [emp, parts, Mm] = R.pick([["CH", [["C", 1], ["H", 1]], 78], ["CH₂O", [["C", 1], ["H", 2], ["O", 1]], 180], ["CH₂O", [["C", 1], ["H", 2], ["O", 1]], 60], ["CH₂", [["C", 1], ["H", 2]], 56], ["CH₃", [["C", 1], ["H", 3]], 30], ["NO₂", [["N", 1], ["O", 2]], 92], ["CH₂", [["C", 1], ["H", 2]], 42], ["HO", [["H", 1], ["O", 1]], 34]]);
    const em = parts.reduce((s, [e, c]) => s + AM[e] * c, 0), k = Mm / em;
    const fmt = (kk) => parts.map(([e, c]) => e + sub(c * kk)).join("");
    const given = [...new Set(parts.map(([e]) => `${e} = ${AM[e]}`))].join(", ");
    return { q: `A compound has the empirical formula ${emp} and a molar mass of ${Mm} g/mol. Find its molecular formula. (${given})`, a: fmt(k), wrong: opts(fmt(k), [{ v: fmt(k + 1), k: "slip" }, { v: fmt(k * 2), k: "method" }, { v: emp, k: "method" }, { v: fmt(k + 2), k: "slip" }, { v: fmt(k + 3), k: "slip" }]), steps: [`Empirical formula mass of ${emp} = ${parts.map(([e, c]) => (c > 1 ? `${c} × ${AM[e]}` : `${AM[e]}`)).join(" + ")} = ${f(em)}`, `n = molar mass ÷ empirical formula mass = ${Mm} ÷ ${f(em)} = ${f(k)}`, `Molecular formula = (${emp})${sub(k) || ""} = ${fmt(k)}`] };
  };

  // =====================================================================================================================
  // PHYSICS, CLASSES 9-12
  // =====================================================================================================================
  gens.phyKin = (R) => {
    const kind = R.int(0, 7);
    if (kind === 0) {
      const uu = R.int(0, 20), a = R.int(1, 6), t = R.int(2, 10), v = uu + a * t;
      return { q: `A car moving at ${uu} m/s speeds up uniformly at ${a} m/s². Find its speed after ${t} s.`, a: `${v} m/s`, wrong: opts(v, [{ v: a * t, k: "method" }, { v: uu + a + t, k: "method" }, { v: uu * a * t, k: "method" }], u("m/s")), steps: [`v = u + at`, `v = ${uu} + ${a} × ${t} = ${v} m/s`] };
    }
    if (kind === 1) {
      const uu = R.int(0, 12), a = R.int(2, 6), t = R.int(2, 9), v = uu + a * t;
      return { q: `A body moving at ${uu} m/s accelerates uniformly at ${a} m/s² until its speed is ${v} m/s. How long does this take?`, a: `${t} s`, wrong: opts(t, [{ v: v / a, k: "method" }, { v: (v + uu) / a, k: "sign" }, { v: v - uu, k: "method" }], u("s")), steps: [`v = u + at, so t = (v − u) ÷ a`, `t = (${v} − ${uu}) ÷ ${a} = ${t} s`] };
    }
    if (kind === 2) {
      const [uu, a, t] = until(() => { const uu = R.int(0, 10), a = R.int(1, 6), t = R.int(2, 10); return (a * t) % 2 === 0 && [uu, a, t]; }), s = uu * t + (a * t * t) / 2;
      return { q: `A body with initial speed ${uu} m/s moves in a straight line with a uniform acceleration of ${a} m/s². How far does it travel in ${t} s?`, a: `${f(s)} m`, wrong: opts(s, [{ v: uu * t + a * t * t, k: "method" }, { v: (a * t * t) / 2, k: "method" }, { v: uu * t, k: "method" }], u("m")), steps: [`s = ut + ½at²`, `s = ${uu} × ${t} + ½ × ${a} × ${t}² = ${uu * t} + ${f((a * t * t) / 2)} = ${f(s)} m`] };
    }
    if (kind === 3) {
      const [uu, a] = until(() => { const uu = R.pick([10, 20, 30, 40]), a = R.pick([2, 4, 5, 8]); return isHalf((uu * uu) / (2 * a)) && [uu, a]; }), s = (uu * uu) / (2 * a);
      return { q: `A car moving at ${uu} m/s is brought to rest by uniform braking in ${f(s)} m. Find its acceleration, with its sign (take the direction of motion as positive).`, a: `−${a} m/s²`, wrong: opts(-a, [{ v: a, k: "sign" }, { v: -(uu * uu) / s, k: "method" }, { v: -uu / s, k: "method" }], u("m/s²")), steps: [`v² = u² + 2as with v = 0: 0 = ${uu}² + 2a × ${f(s)}`, `a = −${uu * uu} ÷ ${f(2 * s)} = −${a} m/s²`, `The negative sign shows it is slowing down (retardation of ${a} m/s²).`] };
    }
    if (kind === 4) {
      const [uu, a] = until(() => { const uu = R.pick([10, 20, 30, 40]), a = R.pick([2, 4, 5, 8]); return isHalf((uu * uu) / (2 * a)) && [uu, a]; }), s = (uu * uu) / (2 * a);
      return { q: `A car moving at ${uu} m/s brakes with a uniform retardation of ${a} m/s². Find the distance it covers before stopping.`, a: `${f(s)} m`, wrong: opts(s, [{ v: (uu * uu) / a, k: "method" }, { v: uu / a, k: "method" }, { v: uu * a, k: "method" }], u("m")), steps: [`v² = u² + 2as with v = 0 and a = −${a} m/s²`, `s = u² ÷ (2a) = ${uu * uu} ÷ ${2 * a} = ${f(s)} m`] };
    }
    if (kind === 5) {
      const [v, a] = until(() => { const v = R.pick([10, 20, 30, 40]), a = R.pick([2, 4, 5, 10]); return isHalf((v * v) / (2 * a)) && [v, a]; }), s = (v * v) / (2 * a);
      return { q: `A car starts from rest and accelerates uniformly at ${a} m/s² over ${f(s)} m. Find its final speed.`, a: `${v} m/s`, wrong: opts(v, [{ v: Math.sqrt(a * s), k: "method" }, { v: 2 * a * s, k: "method" }, { v: a * s, k: "method" }], u("m/s")), steps: [`v² = u² + 2as with u = 0`, `v² = 2 × ${a} × ${f(s)} = ${v * v}`, `v = √${v * v} = ${v} m/s`] };
    }
    if (kind === 6) {
      const h = R.pick([5, 20, 45, 80, 125, 180]), t = Math.sqrt((2 * h) / 10);
      return { q: `A stone is dropped from a height of ${h} m. How long does it take to reach the ground? (g = 10 m/s², neglect air resistance)`, a: `${f(t)} s`, wrong: opts(t, [{ v: h / 10, k: "method" }, { v: (2 * h) / 10, k: "method" }, { v: Math.sqrt(h / 10), k: "method" }], u("s")), steps: [`h = ½gt² (it starts from rest), so t = √(2h ÷ g)`, `t = √(2 × ${h} ÷ 10) = √${f((2 * h) / 10)} = ${f(t)} s`] };
    }
    const h = R.pick([5, 20, 45, 80, 125]), t = Math.sqrt((2 * h) / 10), v = 10 * t;
    return { q: `A ball is dropped from a height of ${h} m. With what speed does it hit the ground? (g = 10 m/s², neglect air resistance)`, a: `${f(v)} m/s`, wrong: opts(v, [{ v: Math.sqrt(10 * h), k: "method" }, { v: 20 * h, k: "method" }, { v: v / 2, k: "method" }], u("m/s")), steps: [`v² = u² + 2gh with u = 0`, `v² = 2 × 10 × ${h} = ${20 * h}`, `v = √${20 * h} = ${f(v)} m/s`] };
  };

  gens.phyProjectile = (R) => {
    const kind = R.int(0, 4);
    if (kind === 0) {
      const v = R.pick([5, 8, 10, 12, 15, 20]), t = R.int(1, 5), h = 5 * t * t, x = v * t;
      return { q: `A ball is thrown horizontally at ${v} m/s from the top of a cliff ${h} m high. How far from the foot of the cliff does it land? (g = 10 m/s²)`, a: `${x} m`, wrong: opts(x, [{ v: v * ((2 * h) / 10), k: "method" }, { v: v * Math.sqrt(h / 10), k: "method" }, { v: v * h, k: "method" }], u("m")), steps: [`Fall time: h = ½gt², so t = √(2h ÷ g) = √(2 × ${h} ÷ 10) = ${t} s`, `The horizontal speed stays ${v} m/s, so x = ${v} × ${t} = ${x} m`] };
    }
    if (kind === 1) {
      const uu = R.pick([10, 20, 30, 40, 50]), Rg = (uu * uu) / 10;
      return { q: `A ball is thrown at ${uu} m/s at an angle of 45° to the ground. Find its horizontal range. (g = 10 m/s²; sin 90° = 1)`, a: `${f(Rg)} m`, wrong: opts(Rg, [{ v: (uu * uu) / 20, k: "method" }, { v: (2 * uu * uu) / 10, k: "method" }, { v: uu / 10, k: "method" }], u("m")), steps: [`Range R = u² sin 2θ ÷ g`, `R = ${uu}² × sin 90° ÷ 10 = ${uu * uu} ÷ 10 = ${f(Rg)} m`] };
    }
    if (kind === 2) {
      const uu = R.pick([20, 30, 40, 50, 60]), T = uu / 10;
      return { q: `A projectile is launched at ${uu} m/s at an angle of 30° to the horizontal. Find its time of flight. (g = 10 m/s²; sin 30° = 0.5)`, a: `${f(T)} s`, wrong: opts(T, [{ v: (2 * uu) / 10, k: "method" }, { v: uu / 20, k: "method" }, { v: (uu * 0.866 * 2) / 10, k: "method" }], u("s")), steps: [`T = 2u sin θ ÷ g`, `T = 2 × ${uu} × 0.5 ÷ 10 = ${f(T)} s`] };
    }
    if (kind === 3) {
      const uu = R.pick([20, 40, 60, 80]), H = (uu * uu) / 80;
      return { q: `A projectile is launched at ${uu} m/s at an angle of 30° to the horizontal. Find its maximum height. (g = 10 m/s²; sin 30° = 0.5)`, a: `${f(H)} m`, wrong: opts(H, [{ v: (uu * uu) / 20, k: "method" }, { v: (uu * uu) / 40, k: "method" }, { v: (uu * uu) / 160, k: "method" }], u("m")), steps: [`H = u² sin²θ ÷ 2g`, `H = ${uu}² × (0.5)² ÷ (2 × 10) = ${uu * uu} × 0.25 ÷ 20 = ${f(H)} m`] };
    }
    const uu = R.pick([10, 20, 30, 40]), H = (uu * uu) / 20, T = uu / 10;
    if (R.next() < 0.5) return { q: `A ball is thrown straight up at ${uu} m/s. Find the maximum height it reaches. (g = 10 m/s²)`, a: `${f(H)} m`, wrong: opts(H, [{ v: (uu * uu) / 10, k: "method" }, { v: uu / 10, k: "method" }, { v: uu * uu / 40, k: "method" }], u("m")), steps: [`At the top v = 0: v² = u² − 2gH`, `H = u² ÷ 2g = ${uu * uu} ÷ 20 = ${f(H)} m`] };
    return { q: `A ball is thrown straight up at ${uu} m/s. How long does it take to come back to the thrower's hand? (g = 10 m/s²)`, a: `${f(2 * T)} s`, wrong: opts(2 * T, [{ v: T, k: "method" }, { v: 4 * T, k: "method" }, { v: uu / 5 + 1, k: "slip" }], u("s")), steps: [`Time to the top: v = u − gt = 0, so t = ${uu} ÷ 10 = ${f(T)} s`, `Coming down takes the same time: total = 2 × ${f(T)} = ${f(2 * T)} s`] };
  };

  gens.phyNewton = (R) => {
    const kind = R.int(0, 3);
    if (kind === 0) {
      const m = R.int(2, 10), a = R.int(1, 5), fr = R.pick([5, 10, 15, 20]), F = m * a + fr;
      return { q: `${an(m)} kg block is pulled along a rough floor by a force of ${F} N. Friction of ${fr} N opposes the motion. Find the acceleration of the block.`, a: `${a} m/s²`, wrong: opts(a, [{ v: F / m, k: "method" }, { v: (F + fr) / m, k: "sign" }, { v: F - fr, k: "method" }], u("m/s²")), steps: [`Net force = applied force − friction = ${F} − ${fr} = ${F - fr} N`, `a = F ÷ m = ${F - fr} ÷ ${m} = ${a} m/s²`] };
    }
    if (kind === 1) {
      const [m, v, t] = until(() => { const m = R.pick([0.2, 0.5, 1, 2]), v = R.pick([5, 10, 20, 30]), t = R.pick([0.05, 0.1, 0.2, 0.5]); return is2dp((m * v) / t) && [m, v, t]; }), F = (m * v) / t;
      return { q: `A ${f(m)} kg ball moving at ${v} m/s is brought to rest in ${f(t)} s. Find the average force on it.`, a: `${f(F)} N`, wrong: opts(F, [{ v: m * v * t, k: "method" }, { v: m * v, k: "method" }, { v: (v * t) / m, k: "method" }], u("N")), steps: [`Change in momentum = mv − 0 = ${f(m)} × ${v} = ${f(m * v)} kg m/s`, `F = change in momentum ÷ time = ${f(m * v)} ÷ ${f(t)} = ${f(F)} N`] };
    }
    if (kind === 2) {
      const [m1, m2, v] = until(() => { const m1 = R.int(2, 8), m2 = R.int(1, 8), v = R.int(1, 6); return ((m1 + m2) * v) % m1 === 0 && [m1, m2, v]; }), uu = ((m1 + m2) * v) / m1;
      return { q: `${an(m1)} kg trolley moving at ${uu} m/s hits ${an(m2).toLowerCase()} kg trolley at rest and the two stick together. Find their common speed.`, a: `${v} m/s`, wrong: opts(v, [{ v: (m1 * uu) / m2, k: "method" }, { v: uu / 2, k: "method" }, { v: uu, k: "method" }], u("m/s")), steps: [`Momentum is conserved: m₁u = (m₁ + m₂)v`, `v = ${m1} × ${uu} ÷ (${m1} + ${m2}) = ${m1 * uu} ÷ ${m1 + m2} = ${v} m/s`] };
    }
    const mb = R.pick([10, 20, 25, 50]), vb = R.pick([200, 300, 400, 500]), M = R.pick([2, 4, 5, 10]), rv = (mb * vb) / (1000 * M);
    return { q: `A ${M} kg gun fires a ${mb} g bullet at ${vb} m/s. Find the recoil speed of the gun.`, a: `${f(rv)} m/s`, wrong: opts(rv, [{ v: (mb * vb) / M, k: "scale" }, { v: (mb * vb) / 1000, k: "method" }, { v: rv * 1000 / 100, k: "scale" }], u("m/s")), steps: [`Bullet mass = ${mb} g = ${f(mb / 1000)} kg`, `Momentum conservation: 0 = ${f(mb / 1000)} × ${vb} − ${M} × V`, `V = ${f((mb / 1000) * vb)} ÷ ${M} = ${f(rv)} m/s (opposite to the bullet)`] };
  };

  gens.phyWorkEnergy = (R) => {
    const kind = R.int(0, 4);
    if (kind === 0) {
      const m = R.pick([2, 4, 5, 10]), uu = R.int(0, 8), v = uu + R.int(2, 8), W = (m * (v * v - uu * uu)) / 2;
      return { q: `A net force changes the speed of a ${m} kg body from ${uu} m/s to ${v} m/s. How much work does it do?`, a: `${f(W)} J`, wrong: opts(W, [{ v: (m * (v - uu) ** 2) / 2, k: "method" }, { v: (m * v * v) / 2, k: "method" }, { v: m * (v * v - uu * uu), k: "method" }], u("J")), steps: [`Work-energy theorem: W = change in kinetic energy = ½m(v² − u²)`, `W = ½ × ${m} × (${v}² − ${uu}²) = ½ × ${m} × ${v * v - uu * uu} = ${f(W)} J`] };
    }
    if (kind === 1) {
      const F = R.pick([500, 1000, 1500, 2000, 2500, 3000]), v = R.pick([10, 15, 20, 25, 30]), P = (F * v) / 1000;
      return { q: `A car's engine pulls with a force of ${f(F)} N while the car moves at a steady ${v} m/s. Find the power delivered, in kW.`, a: `${f(P)} kW`, wrong: opts(P, [{ v: F * v, k: "scale" }, { v: F / v, k: "method" }, { v: P / 10, k: "scale" }], u("kW")), steps: [`P = Fv = ${f(F)} × ${v} = ${f(F * v)} W`, `${f(F * v)} W ÷ 1000 = ${f(P)} kW`] };
    }
    if (kind === 2) {
      const h = R.pick([5, 20, 45, 80, 125]), v = Math.sqrt(20 * h);
      return { q: `A stone falls freely from rest through ${h} m. Using energy conservation, find its speed just before it hits the ground. (g = 10 m/s²)`, a: `${f(v)} m/s`, wrong: opts(v, [{ v: Math.sqrt(10 * h), k: "method" }, { v: 20 * h, k: "method" }, { v: 10 * h, k: "method" }], u("m/s")), steps: [`Loss of PE = gain of KE: mgh = ½mv²`, `v = √(2gh) = √(2 × 10 × ${h}) = √${20 * h} = ${f(v)} m/s`] };
    }
    if (kind === 3) {
      const k = R.pick([100, 200, 400, 500, 1000, 2000]), xcm = R.pick([2, 4, 5, 10, 20]), x = xcm / 100, U = 0.5 * k * x * x;
      return { q: `A spring of spring constant ${f(k)} N/m is stretched by ${xcm} cm. Find the elastic energy stored in it.`, a: `${f(U)} J`, wrong: opts(U, [{ v: 0.5 * k * xcm * xcm, k: "scale" }, { v: 0.5 * k * x, k: "method" }, { v: k * x * x, k: "method" }], u("J")), steps: [`x = ${xcm} cm = ${f(x)} m`, `U = ½kx² = ½ × ${f(k)} × ${f(x)}² = ${f(U)} J`] };
    }
    const m = R.pick([2, 5, 10, 20]), v = 2 * R.int(1, 8), K = (m * v * v) / 2;
    return { q: `How much work must be done to bring a ${m} kg body moving at ${v} m/s to rest? (give the magnitude)`, a: `${f(K)} J`, wrong: opts(K, [{ v: m * v * v, k: "method" }, { v: (m * v) / 2, k: "method" }, { v: (m * v * v) / 4, k: "method" }], u("J")), steps: [`KE = ½mv² = ½ × ${m} × ${v}² = ${f(K)} J`, `To stop it, the work done must remove all this energy: W = ${f(K)} J (in magnitude)`] };
  };

  gens.phyCoulomb = (R) => {
    const q1 = R.int(1, 9), q2 = R.int(1, 9), r = R.pick([3, 5, 6, 10, 15, 20, 30]), F = (90 * q1 * q2) / (r * r);
    const s1 = R.sign(), s2 = R.sign();
    const nat = s1 * s2 > 0 ? "repulsive" : "attractive";
    const qs = (x, s) => `${s < 0 ? "−" : "+"}${x} μC`;
    return { q: `Two point charges of ${qs(q1, s1)} and ${qs(q2, s2)} are ${r} cm apart in air. Find the magnitude of the force between them. (k = 9 × 10⁹ N m²/C²; 1 μC = 10⁻⁶ C)`, a: `${f(F)} N`, wrong: opts(F, [{ v: (90 * q1 * q2) / r, k: "method" }, { v: F / 10000, k: "scale" }, { v: F * 100, k: "scale" }], u("N")), steps: [`r = ${r} cm = ${f(r / 100)} m; q₁ = ${q1} × 10⁻⁶ C, q₂ = ${q2} × 10⁻⁶ C`, `F = k q₁q₂ ÷ r² = 9 × 10⁹ × ${q1 * q2} × 10⁻¹² ÷ ${f((r * r) / 10000)} = ${f(F)} N`, `The charges are of ${s1 * s2 > 0 ? "the same sign" : "opposite signs"}, so the force is ${nat}.`] };
  };

  const CAPS2 = [[3, 6], [4, 12], [6, 12], [10, 15], [20, 30], [2, 2], [4, 4], [12, 4], [5, 20], [10, 40], [30, 60], [6, 3]];
  const CAPS3 = [[6, 6, 6], [2, 3, 6], [3, 6, 6], [4, 4, 2], [12, 12, 6], [10, 10, 5], [12, 6, 4]];
  gens.phyCapacitor = (R) => {
    const kind = R.int(0, 4);
    if (kind === 0) {
      const cs = Array.from({ length: R.int(2, 3) }, () => R.int(1, 12)), tot = cs.reduce((s, x) => s + x, 0);
      return { q: `${cs.length === 3 ? "Three capacitors" : "Two capacitors"} of ${cs.map((x) => x + " μF").join(", ")} are connected in parallel. Find the equivalent capacitance.`, a: `${tot} μF`, wrong: opts(tot, [{ v: parallel(cs), k: "method" }, { v: tot / cs.length, k: "method" }, { v: cs.reduce((s, x) => s * x, 1), k: "method" }], u("μF")), steps: [`Parallel: C = C₁ + C₂ + …`, `C = ${cs.join(" + ")} = ${tot} μF`] };
    }
    if (kind === 1 || kind === 2) {
      const cs = shuffle(R, kind === 1 ? R.pick(CAPS2) : R.pick(CAPS3)), inv = cs.reduce((s, x) => s + 1 / x, 0), C = 1 / inv, tot = cs.reduce((s, x) => s + x, 0);
      return { q: `${cs.length === 3 ? "Three capacitors" : "Two capacitors"} of ${cs.map((x) => x + " μF").join(", ")} are connected in series. Find the equivalent capacitance.`, a: `${f(C)} μF`, wrong: opts(C, [{ v: tot, k: "method" }, { v: inv, k: "method" }, { v: tot / cs.length, k: "method" }], u("μF")), steps: ((L, S) => [`Series: 1/C = 1/C₁ + 1/C₂ + …`, `1/C = ${cs.map((x) => "1/" + x).join(" + ")} = (${cs.map((x) => L / x).join(" + ")})/${L} = ${S}/${L}`, `C = ${L}/${S} = ${f(C)} μF`])(cs.reduce(lcm), cs.reduce((a, x) => a + cs.reduce(lcm) / x, 0)) };
    }
    if (kind === 3) {
      const C = R.pick([2, 4, 10, 20, 50]), V = R.pick([10, 20, 50, 100, 200]), U = (C * V * V) / 2000;
      return { q: `A ${C} μF capacitor is charged to ${V} V. Find the energy stored, in millijoules (mJ).`, a: `${f(U)} mJ`, wrong: opts(U, [{ v: (C * V * V) / 1000, k: "method" }, { v: (C * V) / 2000, k: "method" }, { v: (C * V * V) / 2, k: "scale" }], u("mJ")), steps: [`U = ½CV² = ½ × ${C} × 10⁻⁶ × ${V}² = ${f(U / 1000)} J`, `= ${f(U)} mJ`] };
    }
    const C = R.pick([2, 4, 5, 10, 20]), V = R.pick([6, 12, 50, 100, 220]), Q = C * V;
    return { q: `A ${C} μF capacitor is connected to a ${V} V battery. Find the charge on it, in microcoulombs (μC).`, a: `${f(Q)} μC`, wrong: opts(Q, [{ v: C / V, k: "method" }, { v: V / C, k: "method" }, { v: C * V * V, k: "method" }], u("μC")), steps: [`Q = CV = ${C} μF × ${V} V = ${f(Q)} μC`] };
  };

  gens.phyKirchhoff = (R) => {
    const kind = R.int(0, 3);
    if (kind === 0) {
      const a = R.int(2, 6), b = R.int(1, 5), c = R.int(1, a + b - 1), x = a + b - c;
      return { q: `At a junction, currents of ${a} A and ${b} A flow towards the junction and a current of ${c} A flows away along one wire. Find the current in the remaining wire that leaves the junction.`, a: `${x} A`, wrong: opts(x, [{ v: a + b + c, k: "sign" }, { v: a - b - c, k: "sign" }, { v: Math.abs(a - b), k: "method" }], u("A")), steps: [`Kirchhoff's junction rule: current in = current out`, `${a} + ${b} = ${c} + I, so I = ${a + b} − ${c} = ${x} A`] };
    }
    if (kind === 1) {
      const I = R.int(1, 4), Rr = R.pick([2, 3, 4, 5, 8, 9]), r = R.pick([0.5, 1, 2]), E = I * (Rr + r);
      return { q: `A cell of emf ${f(E)} V and internal resistance ${f(r)} Ω is connected to an external resistance of ${Rr} Ω. Find the current in the circuit.`, a: `${I} A`, wrong: opts(I, [{ v: E / Rr, k: "method" }, { v: E / r, k: "method" }, { v: E * (Rr + r), k: "method" }], u("A")), steps: [`I = E ÷ (R + r)`, `I = ${f(E)} ÷ (${Rr} + ${f(r)}) = ${f(E)} ÷ ${f(Rr + r)} = ${I} A`] };
    }
    if (kind === 2) {
      const I = R.int(1, 4), r = R.pick([0.5, 1, 2]), E = R.pick([6, 9, 12, 24]), V = E - I * r;
      return { q: `A cell of emf ${E} V and internal resistance ${f(r)} Ω delivers a current of ${I} A to a circuit. Find the potential difference across its terminals.`, a: `${f(V)} V`, wrong: opts(V, [{ v: E + I * r, k: "sign" }, { v: E, k: "method" }, { v: I * r, k: "method" }], u("V")), steps: [`Terminal voltage V = E − Ir`, `V = ${E} − ${I} × ${f(r)} = ${E} − ${f(I * r)} = ${f(V)} V`] };
    }
    const I = R.int(1, 3), Rt = R.pick([2, 3, 4, 5, 6]), E2 = R.pick([2, 4, 6]), E1 = E2 + I * Rt;
    return { q: `Two cells of emf ${E1} V and ${E2} V are joined in a loop with their positive terminals together (so they oppose each other). The total resistance of the loop is ${Rt} Ω. Find the current.`, a: `${I} A`, wrong: opts(I, [{ v: (E1 + E2) / Rt, k: "sign" }, { v: E1 / Rt, k: "method" }, { v: E2 / Rt, k: "method" }], u("A")), steps: [`Kirchhoff's loop rule: the emfs oppose, so net emf = ${E1} − ${E2} = ${E1 - E2} V`, `I = net emf ÷ resistance = ${E1 - E2} ÷ ${Rt} = ${I} A`] };
  };

  gens.phyLensMaker = (R) => {
    const t = until(() => {
      const type = R.pick(["biconvex", "biconcave", "plano-convex"]), n = R.pick([1.5, 1.6, 1.4, 1.25]), r1 = R.pick([10, 12, 15, 20, 25, 30, 40]), r2 = R.pick([10, 12, 15, 20, 25, 30, 40]);
      const R1 = type === "biconcave" ? -r1 : r1, R2 = type === "biconvex" ? -r2 : type === "biconcave" ? r2 : Infinity;
      const inv = (n - 1) * (1 / R1 - (R2 === Infinity ? 0 : 1 / R2)), fl = 1 / inv;
      return Number.isFinite(fl) && is1dp(fl) && Math.abs(fl) <= 100 && { type, n, R1, R2, fl };
    }) || { type: "biconvex", n: 1.5, R1: 20, R2: -20, fl: 20 };
    const { type, n, R1, R2, fl } = t, r2s = R2 === Infinity ? "∞" : f(R2);
    const wrongSign = R2 === Infinity ? -fl : 1 / ((n - 1) * (1 / R1 - 1 / Math.abs(R2)));
    return { q: `A thin ${type} lens made of glass of refractive index ${f(n)} has radii of curvature of ${f(Math.abs(R1))} cm${R2 === Infinity ? " on its curved face and a flat second face" : ` and ${f(Math.abs(R2))} cm`}. Find its focal length using the lens maker's formula (new Cartesian sign convention, with the first surface facing the incident light).`, a: `${sg(fl)} cm`, wrong: opts(fl, [{ v: -fl, k: "sign" }, { v: wrongSign, k: "sign" }, { v: 1 / (n * (1 / R1 - (R2 === Infinity ? 0 : 1 / R2))), k: "method" }].map((c) => ({ v: Number.isFinite(c.v) && Math.abs(c.v) > 1e-9 ? c.v : NaN, k: c.k })), (x) => `${sg(x)} cm`), steps: [`R₁ = ${sg(R1)} cm, R₂ = ${R2 === Infinity ? "∞ (flat face)" : sg(R2) + " cm"}`, `1/f = (n − 1)(1/R₁ − 1/R₂) = ${f(n - 1)} × (1/(${f(R1)}) − ${R2 === Infinity ? "0" : `1/(${r2s})`})`, `f = ${sg(fl)} cm (${fl > 0 ? "a converging lens" : "a diverging lens"})`] };
  };

  gens.phyPhotonEnergy = (R) => {
    const [lam, E] = R.pick([[124, 10], [155, 8], [248, 5], [310, 4], [496, 2.5], [620, 2], [1240, 1]]);
    return { q: `Find the energy, in eV, of a photon of wavelength ${lam} nm. (hc = 1240 eV nm)`, a: `${f(E)} eV`, wrong: opts(E, [{ v: lam / 1240, k: "method" }, { v: 12400 / lam, k: "scale" }, { v: 124 / lam, k: "scale" }], u("eV")), steps: [`E = hc ÷ λ`, `E = 1240 eV nm ÷ ${lam} nm = ${f(E)} eV`] };
  };

  gens.phyPhotoelectric = (R) => {
    const phi = R.pick([1.5, 2, 2.3, 2.5, 3, 4.2]), K = R.pick([0.5, 1, 1.5, 2, 2.5, 3]), E = clean(phi + K);
    if (R.next() < 0.5)
      return { q: `Photons of energy ${f(E)} eV fall on a metal of work function ${f(phi)} eV. Find the maximum kinetic energy of the emitted photoelectrons, in eV.`, a: `${f(K)} eV`, wrong: opts(K, [{ v: E + phi, k: "sign" }, { v: E / phi, k: "method" }, { v: phi - E, k: "sign" }], u("eV")), steps: [`Einstein's photoelectric equation: K max = hν − φ`, `K max = ${f(E)} − ${f(phi)} = ${f(K)} eV`] };
    return { q: `Photons of energy ${f(E)} eV fall on a metal of work function ${f(phi)} eV. Find the stopping potential, in volts.`, a: `${f(K)} V`, wrong: opts(K, [{ v: E + phi, k: "sign" }, { v: E, k: "method" }, { v: phi, k: "method" }], u("V")), steps: [`K max = hν − φ = ${f(E)} − ${f(phi)} = ${f(K)} eV`, `eV₀ = K max, so the stopping potential V₀ = ${f(K)} V`] };
  };

  gens.phyDeBroglie = (R) => {
    if (R.next() < 0.5) {
      const [m, p] = until(() => { const m = R.pick([0.01, 0.02, 0.05, 0.1, 0.5, 1]), p = R.pick([1, 2, 3, 4, 5, 6, 10]); const v = p / m; return isInt(v) && v <= 1000 && [m, p]; }), v = p / m, lam = 6.63e-34 / p;
      return { q: `Find the de Broglie wavelength of a ${f(m)} kg ball moving at ${f(v)} m/s. (h = 6.63 × 10⁻³⁴ J s; give 3 significant figures)`, a: `${sci(lam)} m`, wrong: opts(lam, [{ v: lam * 1e-1, k: "scale" }, { v: 6.63e-34 * p, k: "method" }, { v: 6.63e-34 / (m * v * v), k: "method" }].map((c) => ({ v: c.v === lam ? NaN : c.v, k: c.k })), (x) => `${sci(x)} m`), steps: [`Momentum p = mv = ${f(m)} × ${f(v)} = ${f(p)} kg m/s`, `λ = h ÷ p = 6.63 × 10⁻³⁴ ÷ ${f(p)} = ${sci(lam)} m`] };
    }
    const V = R.pick([25, 64, 100, 225, 400, 900]), lam = 12.27 / Math.sqrt(V);
    return { q: `An electron is accelerated from rest through ${V} V. Find its de Broglie wavelength in angstrom (Å). (λ = 12.27 ÷ √V Å; give 3 significant figures)`, a: `${f(+lam.toPrecision(3))} Å`, wrong: opts(+lam.toPrecision(3), [{ v: +(12.27 / V).toPrecision(3), k: "method" }, { v: +(12.27 * Math.sqrt(V)).toPrecision(3), k: "method" }, { v: +(lam * 10).toPrecision(3), k: "scale" }], u("Å")), steps: [`λ = 12.27 ÷ √V Å = 12.27 ÷ √${V} = 12.27 ÷ ${f(Math.sqrt(V))}`, `λ = ${f(+lam.toPrecision(3))} Å`] };
  };

  // =====================================================================================================================
  // ACCOUNTANCY, CLASSES 11-12
  // =====================================================================================================================
  const r5 = (R, lo, hi, step) => R.int(lo / step, hi / step) * step;
  gens.accEquation = (R) => {
    const kind = R.int(0, 4), amt = (lo, hi) => r5(R, lo, hi, 5000);
    if (kind === 0) {
      const L = amt(50000, 300000), C = amt(100000, 600000), A = L + C;
      return { q: `A trader's assets are ${rs(A)} and his liabilities are ${rs(L)}. Find his capital.`, a: rs(C), wrong: opts(C, [{ v: A + L, k: "sign" }, { v: L - A, k: "sign" }, { v: A, k: "method" }], rs), steps: [`Accounting equation: Assets = Liabilities + Capital`, `Capital = Assets − Liabilities = ${rs(A)} − ${rs(L)} = ${rs(C)}`] };
    }
    if (kind === 1) {
      const L = amt(50000, 300000), C = amt(100000, 600000), A = L + C;
      return { q: `A firm's capital is ${rs(C)} and its liabilities are ${rs(L)}. Find its total assets.`, a: rs(A), wrong: opts(A, [{ v: C - L, k: "sign" }, { v: Math.abs(C - L) + L, k: "method" }, { v: C, k: "method" }], rs), steps: [`Assets = Liabilities + Capital`, `Assets = ${rs(L)} + ${rs(C)} = ${rs(A)}`] };
    }
    if (kind === 2) {
      const C = amt(100000, 600000), A = C + amt(50000, 300000), L = A - C;
      return { q: `A business has assets of ${rs(A)} and capital of ${rs(C)}. Find its liabilities.`, a: rs(L), wrong: opts(L, [{ v: A + C, k: "sign" }, { v: C - A, k: "sign" }, { v: A, k: "method" }], rs), steps: [`Assets = Liabilities + Capital`, `Liabilities = Assets − Capital = ${rs(A)} − ${rs(C)} = ${rs(L)}`] };
    }
    if (kind === 3) {
      const A = amt(200000, 800000), C = amt(100000, A - 50000), L = A - C, X = amt(10000, 60000);
      return { q: `A trader's assets are ${rs(A)} and his capital is ${rs(C)}. He buys goods on credit for ${rs(X)}. What are his total liabilities after this?`, a: rs(L + X), wrong: opts(L + X, [{ v: L, k: "method" }, { v: L - X, k: "sign" }, { v: A + X, k: "method" }], rs), steps: [`Liabilities before = Assets − Capital = ${rs(A)} − ${rs(C)} = ${rs(L)}`, `Buying goods on credit adds ${rs(X)} to assets and ${rs(X)} to liabilities (creditors); capital is unchanged`, `New liabilities = ${rs(L)} + ${rs(X)} = ${rs(L + X)}`] };
    }
    const open = amt(100000, 500000), P = amt(20000, 150000), draw = amt(10000, 60000), close = open + P - draw;
    return { q: `A proprietor's capital was ${rs(open)} at the start of the year and ${rs(close)} at the end. He withdrew ${rs(draw)} for personal use and introduced no new capital. Find his profit for the year.`, a: rs(P), wrong: opts(P, [{ v: close - open - draw, k: "sign" }, { v: close - open, k: "method" }, { v: close + open + draw, k: "method" }], rs), steps: [`Closing capital = opening capital + profit − drawings`, `Profit = closing capital − opening capital + drawings`, `Profit = ${rs(close)} − ${rs(open)} + ${rs(draw)} = ${rs(P)}`] };
  };

  const TXN = [
    ["Bought goods for cash worth", "Purchases A/c", "Cash A/c", "an expense of the business, so it is debited", "an asset going out, so it is credited"],
    ["Sold goods for cash worth", "Cash A/c", "Sales A/c", "an asset coming in, so it is debited", "income, so it is credited"],
    ["Paid rent in cash of", "Rent A/c", "Cash A/c", "an expense, so it is debited", "an asset going out, so it is credited"],
    ["Paid salaries in cash of", "Salaries A/c", "Cash A/c", "an expense, so it is debited", "an asset going out, so it is credited"],
    ["Bought furniture for cash worth", "Furniture A/c", "Cash A/c", "an asset coming in, so it is debited", "an asset going out, so it is credited"],
    ["Sold goods to Ram on credit worth", "Ram's A/c", "Sales A/c", "Ram is a debtor who receives the goods, so his personal account is debited", "income, so it is credited"],
    ["Bought goods on credit from Shyam worth", "Purchases A/c", "Shyam's A/c", "an expense, so it is debited", "Shyam is a creditor who gives the goods, so his personal account is credited"],
    ["Received cash from Ram, a debtor, of", "Cash A/c", "Ram's A/c", "an asset coming in, so it is debited", "Ram gives the money, so his personal account is credited"],
    ["Paid cash to Shyam, a creditor, of", "Shyam's A/c", "Cash A/c", "Shyam receives the money, so his personal account is debited", "an asset going out, so it is credited"],
    ["Started business with cash of", "Cash A/c", "Capital A/c", "an asset coming in, so it is debited", "the owner's investment (a liability to the owner), so it is credited"],
    ["Withdrew cash for personal use, of", "Drawings A/c", "Cash A/c", "the owner's withdrawal (reduces capital), so it is debited", "an asset going out, so it is credited"],
    ["Deposited cash into the bank, of", "Bank A/c", "Cash A/c", "an asset coming in, so it is debited", "an asset going out, so it is credited"],
    ["Received commission in cash of", "Cash A/c", "Commission Received A/c", "an asset coming in, so it is debited", "income, so it is credited"],
    ["Ram returned goods sold to him, worth", "Sales Returns A/c", "Ram's A/c", "returns reduce sales, so Sales Returns is debited", "Ram gives the goods back, so his personal account is credited"],
    ["Returned goods to Shyam, worth", "Shyam's A/c", "Purchases Returns A/c", "Shyam receives the goods back, so his personal account is debited", "returns reduce purchases, so Purchases Returns is credited"],
    ["Bought machinery on credit from Shyam for", "Machinery A/c", "Shyam's A/c", "an asset coming in, so it is debited", "Shyam gives the machinery on credit, so his personal account is credited"],
    ["Paid wages in cash of", "Wages A/c", "Cash A/c", "an expense, so it is debited", "an asset going out, so it is credited"],
    ["Interest received in cash of", "Cash A/c", "Interest Received A/c", "an asset coming in, so it is debited", "income, so it is credited"],
    ["Allowed cash discount to Ram, a debtor, of", "Discount Allowed A/c", "Ram's A/c", "a loss to the business, so it is debited", "Ram's account is settled by the discount, so it is credited"],
  ];
  const ACCTS = ["Cash A/c", "Bank A/c", "Purchases A/c", "Sales A/c", "Capital A/c", "Drawings A/c", "Furniture A/c", "Rent A/c", "Salaries A/c", "Machinery A/c", "Commission Received A/c", "Interest Received A/c", "Ram's A/c", "Shyam's A/c", "Purchases Returns A/c", "Sales Returns A/c", "Wages A/c", "Discount Allowed A/c"];
  gens.accDebitCredit = (R) => {
    const [desc, dr, cr, whyDr, whyCr] = R.pick(TXN), amt = R.int(1, 40) * 500, askDr = R.next() < 0.5, ans = askDr ? dr : cr, other = askDr ? cr : dr;
    const pool = ACCTS.filter((x) => x !== ans && x !== other);
    const wrong = [other, ...shuffle(R, pool).slice(0, 2)];
    wrong.kinds = ["sign", "method", "method"];
    return { q: `${desc} ${rs(amt)}. Which account is ${askDr ? "debited" : "credited"}?`, a: ans, wrong, steps: [`Every transaction has two effects: ${dr} is debited and ${cr} is credited.`, `${dr}: ${whyDr}.`, `${cr}: ${whyCr}.`, `So ${ans} is ${askDr ? "debited" : "credited"}.`] };
  };

  gens.accDepreciation = (R) => {
    const life = R.pick([4, 5, 8, 10]), scrapPct = R.pick([0, 5, 10]);
    const unit = R.pick([40000, 50000, 100000, 200000]), cost = unit * R.int(1, 4) * (life === 8 ? 2 : 1);
    const scrap = (cost * scrapPct) / 100, dep = (cost - scrap) / life;
    if (!Number.isInteger(dep)) return gens.accDepreciation(R);
    const kind = R.int(0, 2), k = R.int(1, life - 1);
    if (kind === 0)
      return { q: `A machine costs ${rs(cost)}, has a useful life of ${life} years and a scrap value of ${rs(scrap)}. Find the annual depreciation by the straight-line method.`, a: rs(dep), wrong: opts(dep, [{ v: cost / life, k: "method" }, { v: (cost + scrap) / life, k: "sign" }, { v: dep / 2, k: "slip" }], rs), steps: [`Straight-line depreciation = (cost − scrap value) ÷ life`, `= (${rs(cost)} − ${rs(scrap)}) ÷ ${life} = ${rs(cost - scrap)} ÷ ${life} = ${rs(dep)} a year`] };
    if (kind === 1)
      return { q: `A machine bought for ${rs(cost)} has a life of ${life} years and a scrap value of ${rs(scrap)}. Depreciation is charged by the straight-line method. Find its book value at the end of year ${k}.`, a: rs(cost - dep * k), wrong: opts(cost - dep * k, [{ v: cost - dep, k: "method" }, { v: dep * k, k: "method" }, { v: cost - (cost / life) * k, k: "method" }], rs), steps: [`Annual depreciation = (${rs(cost)} − ${rs(scrap)}) ÷ ${life} = ${rs(dep)}`, `Depreciation for ${k} year${k > 1 ? "s" : ""} = ${rs(dep)} × ${k} = ${rs(dep * k)}`, `Book value = ${rs(cost)} − ${rs(dep * k)} = ${rs(cost - dep * k)}`] };
    return { q: `A machine costs ${rs(cost)} and its annual straight-line depreciation is ${rs(dep)}. Find the rate of depreciation as a percentage of cost.`, a: `${f((dep / cost) * 100)}%`, wrong: opts((dep / cost) * 100, [{ v: (cost / dep), k: "method" }, { v: dep / cost, k: "scale" }, { v: (cost / dep) * 100, k: "method" }], (x) => `${f(x)}%`), steps: [`Rate = annual depreciation ÷ cost × 100`, `= ${rs(dep)} ÷ ${rs(cost)} × 100 = ${f((dep / cost) * 100)}%`] };
  };

  gens.accSaleAsset = (R) => {
    const life = R.pick([4, 5, 10]), cost = R.pick([40000, 50000, 100000, 200000]) * R.int(1, 3), scrap = 0, dep = (cost - scrap) / life, k = R.int(1, life - 1) , wdv = cost - dep * k;
    const delta = R.pick([-1, 1]) * R.pick([2000, 3000, 5000, 8000, 10000]), sp = wdv + delta, diff = Math.abs(delta);
    if (sp <= 0) return gens.accSaleAsset(R);
    const profit = delta > 0, ans = `${profit ? "Profit" : "Loss"} of ${rs(diff)}`, flip = `${profit ? "Loss" : "Profit"} of ${rs(diff)}`;
    const lab = profit ? "Profit" : "Loss", cands = [[flip, "sign"], [`${sp > cost ? "Profit" : "Loss"} of ${rs(Math.abs(sp - cost))}`, "method"], [`${lab} of ${rs(diff + dep)}`, "slip"], [`${lab} of ${rs(diff * 2)}`, "slip"], [`${flip.split(" ")[0]} of ${rs(diff * 2)}`, "sign"]];
    const seenA = new Set([ans]), wrong = [];
    wrong.kinds = [];
    for (const [t, k] of cands) if (!seenA.has(t) && wrong.length < 3) (seenA.add(t), wrong.push(t), wrong.kinds.push(k));
    return { q: `A machine bought for ${rs(cost)} with a life of ${life} years and no scrap value is depreciated by the straight-line method. After ${k} year${k > 1 ? "s" : ""} it is sold for ${rs(sp)}. Find the profit or loss on sale.`, a: ans, wrong, steps: [`Annual depreciation = ${rs(cost)} ÷ ${life} = ${rs(dep)}; for ${k} year${k > 1 ? "s" : ""} = ${rs(dep * k)}`, `Book value (WDV) at the time of sale = ${rs(cost)} − ${rs(dep * k)} = ${rs(wdv)}`, `Sale price ${rs(sp)} ${profit ? "is more" : "is less"} than book value ${rs(wdv)}, so ${profit ? "profit" : "loss"} = ${rs(diff)}`] };
  };

  gens.accInterest = (R) => {
    const P = R.pick([60000, 120000, 150000, 240000, 300000, 500000]), r = R.pick([5, 6, 8, 10, 12]), mo = R.pick([3, 6, 9, 12]), I = (P * r * mo) / 1200;
    const kind = R.int(0, 1);
    const head = kind === 0 ? `A partner's capital is ${rs(P)} and the partnership deed allows interest on capital at ${r}% per annum. Find the interest on capital for ${mo} months.` : `A partner withdrew ${rs(P)}. Interest on drawings is charged at ${r}% per annum for ${mo} months. Find the interest on drawings.`;
    return { q: head, a: rs(I), wrong: opts(I, [{ v: (P * r) / 100, k: "scale" }, { v: (P * r * mo) / 100, k: "scale" }, { v: (P * mo) / 12 / 100, k: "method" }], rs), steps: [`Simple interest = principal × rate × time`, `= ${rs(P)} × ${r}/100 × ${mo}/12 = ${rs(I)}`] };
  };

  gens.accProfit = (R) => {
    const sales = R.int(20, 60) * 10000, sr = R.int(1, 5) * 2000, os = R.int(2, 8) * 5000, pur = R.int(8, 30) * 5000, pr = R.int(1, 4) * 1000, de = R.int(1, 4) * 2000, cs = R.int(2, 8) * 5000;
    const ns = sales - sr, cogs = os + (pur - pr) + de - cs, gp = ns - cogs;
    if (gp <= 0) return gens.accProfit(R);
    const lines = `Sales ${rs(sales)}, sales returns ${rs(sr)}, opening stock ${rs(os)}, purchases ${rs(pur)}, purchases returns ${rs(pr)}, direct expenses ${rs(de)}, closing stock ${rs(cs)}`;
    const stepsHead = [`Net sales = ${rs(sales)} − ${rs(sr)} = ${rs(ns)}`, `Cost of goods sold = opening stock + net purchases + direct expenses − closing stock = ${rs(os)} + ${rs(pur - pr)} + ${rs(de)} − ${rs(cs)} = ${rs(cogs)}`];
    const kind = R.int(0, 2);
    if (kind === 0) return { q: `From the following, find the cost of goods sold: ${lines}.`, a: rs(cogs), wrong: opts(cogs, [{ v: os + pur + de - cs, k: "method" }, { v: os + pur - pr + de + cs, k: "sign" }, { v: os + pur - pr - cs, k: "method" }], rs), steps: stepsHead.slice(1) };
    if (kind === 1) return { q: `From the following, find the gross profit: ${lines}.`, a: rs(gp), wrong: opts(gp, [{ v: sales - cogs, k: "method" }, { v: ns - (os + pur + de - cs), k: "method" }, { v: ns - (os + (pur - pr) - cs), k: "method" }], rs), steps: [...stepsHead, `Gross profit = net sales − cost of goods sold = ${rs(ns)} − ${rs(cogs)} = ${rs(gp)}`] };
    const inc = R.int(1, 5) * 1000, ex = R.int(1, Math.max(1, Math.floor(gp / 3000))) * 1000, np = gp + inc - ex;
    return { q: `A firm's gross profit is ${rs(gp)}. It earned commission of ${rs(inc)} and its office and selling expenses were ${rs(ex)}. Find its net profit.`, a: rs(np), wrong: opts(np, [{ v: gp - inc - ex, k: "sign" }, { v: gp + inc + ex, k: "sign" }, { v: gp - ex, k: "method" }], rs), steps: [`Net profit = gross profit + other income − indirect expenses`, `= ${rs(gp)} + ${rs(inc)} − ${rs(ex)} = ${rs(np)}`] };
  };

  gens.accRatio = (R) => {
    const kind = R.int(0, 4), ratio = (x) => `${f(x)} : 1`;
    if (kind === 0) {
      const CL = R.pick([100000, 150000, 200000, 250000, 400000]), r = R.pick([1.5, 2, 2.5, 3, 0.8, 1.2]), CA = CL * r;
      return { q: `A company has current assets of ${rs(CA)} and current liabilities of ${rs(CL)}. Find its current ratio.`, a: ratio(r), wrong: opts(r, [{ v: 1 / r, k: "method" }, { v: (CA - CL) / CL, k: "method" }, { v: r + 0.5, k: "slip" }], ratio), steps: [`Current ratio = current assets ÷ current liabilities`, `= ${rs(CA)} ÷ ${rs(CL)} = ${f(r)} : 1`] };
    }
    if (kind === 1) {
      const CL = R.pick([100000, 200000, 250000, 400000]), q = R.pick([0.8, 1, 1.5, 2]), inv = R.pick([30000, 40000, 50000, 60000]), pre = R.pick([5000, 10000, 15000]), QA = q * CL, CA = QA + inv + pre;
      return { q: `A company's current assets are ${rs(CA)}, including inventories of ${rs(inv)} and prepaid expenses of ${rs(pre)}. Its current liabilities are ${rs(CL)}. Find the quick (liquid) ratio.`, a: ratio(q), wrong: opts(q, [{ v: CA / CL, k: "method" }, { v: (CA - inv) / CL, k: "method" }, { v: CL / QA, k: "method" }], ratio), steps: [`Quick assets = current assets − inventories − prepaid expenses = ${rs(CA)} − ${rs(inv)} − ${rs(pre)} = ${rs(QA)}`, `Quick ratio = quick assets ÷ current liabilities = ${rs(QA)} ÷ ${rs(CL)} = ${f(q)} : 1`] };
    }
    if (kind === 2) {
      const SF = R.pick([200000, 300000, 400000, 500000, 800000]), r = R.pick([0.5, 1, 1.5, 2, 0.25]), D = SF * r;
      return { q: `A company has long-term borrowings (debt) of ${rs(D)} and shareholders' funds of ${rs(SF)}. Find its debt-equity ratio.`, a: ratio(r), wrong: opts(r, [{ v: 1 / r, k: "method" }, { v: D / (D + SF), k: "method" }, { v: (D + SF) / SF, k: "method" }], ratio), steps: [`Debt-equity ratio = debt ÷ shareholders' funds`, `= ${rs(D)} ÷ ${rs(SF)} = ${f(r)} : 1`] };
    }
    if (kind === 3) {
      const NS = R.pick([200000, 400000, 500000, 800000]), p = R.pick([10, 20, 25, 30, 40]), GP = (NS * p) / 100, COGS = NS - GP;
      return { q: `A firm's net sales are ${rs(NS)} and its cost of goods sold is ${rs(COGS)}. Find its gross profit ratio.`, a: `${f(p)}%`, wrong: opts(p, [{ v: (GP / COGS) * 100, k: "method" }, { v: (COGS / NS) * 100, k: "method" }, { v: GP / NS, k: "scale" }], (x) => `${f(x)}%`), steps: [`Gross profit = net sales − cost of goods sold = ${rs(NS)} − ${rs(COGS)} = ${rs(GP)}`, `Gross profit ratio = gross profit ÷ net sales × 100 = ${rs(GP)} ÷ ${rs(NS)} × 100 = ${f(p)}%`] };
    }
    const T = R.pick([3, 4, 5, 6, 8]), avg = R.pick([20000, 25000, 40000, 50000]), COGS = T * avg, op = avg - R.pick([2000, 5000]), cl = 2 * avg - op;
    return { q: `A firm's cost of goods sold is ${rs(COGS)}. Its opening inventory is ${rs(op)} and its closing inventory is ${rs(cl)}. Find the inventory turnover ratio.`, a: `${f(T)} times`, wrong: opts(T, [{ v: COGS / cl, k: "method" }, { v: avg / COGS, k: "method" }, { v: COGS / (op + cl), k: "method" }], (x) => `${f(x)} times`), steps: [`Average inventory = (opening + closing) ÷ 2 = (${rs(op)} + ${rs(cl)}) ÷ 2 = ${rs(avg)}`, `Inventory turnover = cost of goods sold ÷ average inventory = ${rs(COGS)} ÷ ${rs(avg)} = ${f(T)} times`] };
  };

  // =====================================================================================================================
  // ECONOMICS, CLASSES 11-12
  // =====================================================================================================================
  gens.ecoCentral = (R) => {
    const kind = R.int(0, 3);
    if (kind === 0) {
      const nn = R.int(5, 7), xs = Array.from({ length: nn }, () => R.int(10, 60));
      const s = xs.reduce((a, b) => a + b, 0), fix = (nn - (s % nn)) % nn;
      xs[0] += fix;
      const mean = xs.reduce((a, b) => a + b, 0) / nn;
      return { q: `The marks of ${nn} students are ${xs.join(", ")}. Find the arithmetic mean.`, a: f(mean), wrong: opts(mean, [{ v: [...xs].sort((a, b) => a - b)[Math.floor(nn / 2)], k: "method" }, { v: xs.reduce((a, b) => a + b, 0), k: "method" }, { v: mean + nn, k: "slip" }]), steps: [`Mean = sum of values ÷ number of values`, `Sum = ${xs.join(" + ")} = ${xs.reduce((a, b) => a + b, 0)}`, `Mean = ${xs.reduce((a, b) => a + b, 0)} ÷ ${nn} = ${f(mean)}`] };
    }
    if (kind === 1) {
      const nn = R.pick([5, 7, 9]), xs = [];
      while (xs.length < nn) { const x = R.int(10, 80); if (!xs.includes(x)) xs.push(x); }
      const sorted = [...xs].sort((a, b) => a - b), med = sorted[(nn - 1) / 2];
      return { q: `The daily wages (in ${cur()}) of ${nn} workers are ${xs.join(", ")}. Find the median.`, a: f(med), wrong: opts(med, [{ v: xs[(nn - 1) / 2] === med ? xs[0] : xs[(nn - 1) / 2], k: "method" }, { v: xs.reduce((a, b) => a + b, 0) / nn, k: "method" }, { v: sorted[(nn - 1) / 2 + 1], k: "slip" }]), steps: [`Arrange in order: ${sorted.join(", ")}`, `Median = the ((n + 1) ÷ 2)th value = the ${(nn + 1) / 2}${["th", "st", "nd", "rd"][((nn + 1) / 2) % 10 < 4 && ((nn + 1) / 2) % 10 > 0 ? ((nn + 1) / 2) % 10 : 0]} value = ${f(med)}`] };
    }
    if (kind === 2) {
      const xs = [R.int(20, 30), R.int(31, 40), R.int(41, 50), R.int(51, 60)], mode = R.pick(xs), list = [];
      xs.forEach((x) => { for (let i = 0; i < (x === mode ? 3 : 1); i++) list.push(x); });
      const sh = shuffle(R, list);
      return { q: `Find the mode of these values: ${sh.join(", ")}.`, a: f(mode), wrong: opts(mode, xs.filter((x) => x !== mode).map((x) => ({ v: x, k: "method" }))), steps: [`The mode is the value that occurs most often`, `${f(mode)} occurs 3 times and every other value once, so the mode is ${f(mode)}`] };
    }
    const xs = [10, 20, 30, 40, 50], fs = (() => { const out = [1, 1, 1, 1, 1]; for (let i = 0; i < 15; i++) out[R.int(0, 4)]++; return out; })(), N = 20, sfx = xs.reduce((s, x, i) => s + x * fs[i], 0), mean = sfx / N;
    return { q: `A frequency table gives the value x with its frequency f: ${xs.map((x, i) => `x = ${x}, f = ${fs[i]}`).join("; ")}. Find the mean.`, a: f(mean), wrong: opts(mean, [{ v: xs.reduce((a, b) => a + b, 0) / 5, k: "method" }, { v: sfx, k: "method" }, { v: sfx / 5, k: "method" }]), steps: [`Σf = ${fs.join(" + ")} = ${N}`, `Σfx = ${xs.map((x, i) => `${x} × ${fs[i]}`).join(" + ")} = ${sfx}`, `Mean = Σfx ÷ Σf = ${sfx} ÷ ${N} = ${f(mean)}`] };
  };

  gens.ecoElasticity = (R) => {
    const ed = R.pick([0.5, 1, 1.5, 2, 3]), dP = R.pick([10, 20, 25]), dQ = ed * dP;
    const [P0, Q0] = until(() => { const P0 = R.pick([10, 20, 40, 50, 100]), Q0 = R.pick([40, 50, 100, 200, 400]); return isInt((P0 * dP) / 100) && isInt((Q0 * dQ) / 100) && [P0, Q0]; }) || [20, 100];
    const P1 = P0 + (P0 * dP) / 100, Q1 = Q0 - (Q0 * dQ) / 100;
    if (Q1 <= 0) return gens.ecoElasticity(R);
    const dp = P1 - P0, dq = Q0 - Q1, kind = R.int(0, 1);
    const steps = [`%ΔQ = ΔQ ÷ Q × 100 = ${dq} ÷ ${Q0} × 100 = ${f(dQ)}% (a fall)`, `%ΔP = ΔP ÷ P × 100 = ${dp} ÷ ${P0} × 100 = ${f(dP)}% (a rise)`, `Ed = (−)%ΔQ ÷ %ΔP = ${f(dQ)} ÷ ${f(dP)} = ${f(ed)} (magnitude)`];
    const head = `When the price of a good rises from ${cur()}${P0} to ${cur()}${P1}, the quantity demanded falls from ${Q0} to ${Q1} units.`;
    if (kind === 0) return { q: `${head} Using the percentage method, find the (magnitude of) price elasticity of demand.`, a: f(ed), wrong: opts(ed, [{ v: 1 / ed, k: "method" }, { v: dq / dp, k: "method" }, { v: dq / Q1 / (dp / P1) , k: "method" }]), steps };
    const cls = ed > 1 ? "Elastic (Ed > 1)" : ed < 1 ? "Inelastic (Ed < 1)" : "Unitary elastic (Ed = 1)";
    const POOL = ["Elastic (Ed > 1)", "Inelastic (Ed < 1)", "Unitary elastic (Ed = 1)", "Perfectly inelastic (Ed = 0)"];
    return { q: `${head} Is the demand elastic, inelastic or unitary elastic?`, a: cls, wrong: words(cls, POOL, R), steps: [...steps, `${ed === 1 ? "Ed = 1" : `Ed = ${f(ed)} ${ed > 1 ? "> 1" : "< 1"}`}, so demand is ${cls.split(" (")[0].toLowerCase()}.`] };
  };

  gens.ecoRevenueCost = (R) => {
    const kind = R.int(0, 5), unit = cur();
    if (kind === 0) {
      const q = R.int(3, 9), TR1 = R.int(10, 50) * 10, mr = R.int(4, 40);
      return { q: `A firm's total revenue is ${unit}${TR1} from ${q} units and ${unit}${TR1 + mr} from ${q + 1} units. Find the marginal revenue of the ${q + 1}th unit.`, a: `${unit}${mr}`, wrong: opts(mr, [{ v: (TR1 + mr) / (q + 1), k: "method" }, { v: TR1 + mr, k: "method" }, { v: TR1 / q, k: "method" }], (x) => `${unit}${f(x)}`), steps: [`MR = change in total revenue ÷ change in output (the extra revenue from the ${q + 1}th unit)`, `MR = ${unit}${TR1 + mr} − ${unit}${TR1} = ${unit}${mr}`] };
    }
    if (kind === 1) {
      const Q = R.int(4, 20), P = R.int(5, 30), TR = Q * P;
      return { q: `A firm sells ${Q} units and its total revenue is ${unit}${f(TR)}. Find the average revenue.`, a: `${unit}${P}`, wrong: opts(P, [{ v: TR, k: "method" }, { v: TR - Q, k: "method" }, { v: TR / (Q + 1), k: "method" }], (x) => `${unit}${f(x)}`), steps: [`AR = TR ÷ Q = ${unit}${f(TR)} ÷ ${Q} = ${unit}${P} (this is the price per unit)`] };
    }
    if (kind === 2) {
      const q = R.int(3, 9), TC1 = R.int(10, 40) * 10, mc = R.int(5, 30);
      return { q: `The total cost of producing ${q} units is ${unit}${TC1} and of producing ${q + 1} units is ${unit}${TC1 + mc}. Find the marginal cost of the ${q + 1}th unit.`, a: `${unit}${mc}`, wrong: opts(mc, [{ v: (TC1 + mc) / (q + 1), k: "method" }, { v: TC1 + mc, k: "method" }, { v: TC1 / q, k: "method" }], (x) => `${unit}${f(x)}`), steps: [`MC = change in total cost ÷ change in output`, `MC = ${unit}${TC1 + mc} − ${unit}${TC1} = ${unit}${mc}`] };
    }
    if (kind === 3) {
      const Q = R.pick([4, 5, 8, 10, 20]), AC = R.int(5, 40), TC = Q * AC;
      return { q: `The total cost of producing ${Q} units is ${unit}${f(TC)}. Find the average cost.`, a: `${unit}${AC}`, wrong: opts(AC, [{ v: TC, k: "method" }, { v: TC - Q, k: "method" }, { v: TC * Q, k: "method" }], (x) => `${unit}${f(x)}`), steps: [`AC = TC ÷ Q = ${unit}${f(TC)} ÷ ${Q} = ${unit}${AC}`] };
    }
    if (kind === 4) {
      const Q = R.pick([5, 10, 20, 25]), TFC = R.int(2, 10) * 100, AVC = R.int(5, 20), TC = TFC + AVC * Q;
      return { q: `A firm's total fixed cost is ${unit}${f(TFC)} and its average variable cost at ${Q} units is ${unit}${AVC}. Find the total cost of ${Q} units.`, a: `${unit}${f(TC)}`, wrong: opts(TC, [{ v: TFC + AVC, k: "method" }, { v: TFC * AVC, k: "method" }, { v: AVC * Q, k: "method" }], (x) => `${unit}${f(x)}`), steps: [`TVC = AVC × Q = ${unit}${AVC} × ${Q} = ${unit}${f(AVC * Q)}`, `TC = TFC + TVC = ${unit}${f(TFC)} + ${unit}${f(AVC * Q)} = ${unit}${f(TC)}`] };
    }
    const P = R.int(5, 40), Q = R.int(5, 20);
    return { q: `A firm in perfect competition sells every unit at ${unit}${P}. Find its total revenue from selling ${Q} units.`, a: `${unit}${f(P * Q)}`, wrong: opts(P * Q, [{ v: P + Q, k: "method" }, { v: P / Q, k: "method" }, { v: P * Q * Q, k: "method" }], (x) => `${unit}${f(x)}`), steps: [`TR = price × quantity = ${unit}${P} × ${Q} = ${unit}${f(P * Q)}`, `(Here MR = AR = price = ${unit}${P}.)`] };
  };

  gens.ecoGDP = (R) => {
    const kind = R.int(0, 3), fmtC = (x) => `${cur()}${f(x)} crore`, k = (lo, hi) => R.int(lo, hi) * 1000;
    if (kind === 0) {
      const FC = k(100, 600), IT = k(20, 80), SUB = k(2, 15), MP = FC + IT - SUB;
      return { q: `GDP at market price is ${fmtC(MP)}. Indirect taxes are ${fmtC(IT)} and subsidies are ${fmtC(SUB)}. Find GDP at factor cost.`, a: fmtC(FC), wrong: opts(FC, [{ v: MP + IT - SUB, k: "sign" }, { v: MP - IT, k: "method" }, { v: MP - SUB, k: "method" }], fmtC), steps: [`Net indirect taxes (NIT) = indirect taxes − subsidies = ${fmtC(IT)} − ${fmtC(SUB)} = ${fmtC(IT - SUB)}`, `GDP at factor cost = GDP at market price − NIT = ${fmtC(MP)} − ${fmtC(IT - SUB)} = ${fmtC(FC)}`] };
    }
    if (kind === 1) {
      const FC = k(100, 600), NIT = k(10, 60), MP = FC + NIT;
      return { q: `GDP at factor cost is ${fmtC(FC)} and net indirect taxes are ${fmtC(NIT)}. Find GDP at market price.`, a: fmtC(MP), wrong: opts(MP, [{ v: FC - NIT, k: "sign" }, { v: FC + NIT * 2, k: "method" }, { v: FC, k: "method" }], fmtC), steps: [`GDP at market price = GDP at factor cost + NIT`, `= ${fmtC(FC)} + ${fmtC(NIT)} = ${fmtC(MP)}`] };
    }
    if (kind === 2) {
      const MP = k(100, 600), nfia = R.pick([-1, 1]) * k(2, 20), GNP = MP + nfia;
      return { q: `GDP at market price is ${fmtC(MP)}. Net factor income ${nfia > 0 ? "from" : "paid to"} abroad is ${fmtC(Math.abs(nfia))}. Find GNP at market price.`, a: fmtC(GNP), wrong: opts(GNP, [{ v: MP - nfia, k: "sign" }, { v: MP, k: "method" }, { v: MP + Math.abs(nfia) * (nfia > 0 ? 2 : -2), k: "method" }], fmtC), steps: [`GNP at market price = GDP at market price + net factor income from abroad (NFIA)`, `NFIA = ${nfia > 0 ? "" : "−"}${fmtC(Math.abs(nfia))}${nfia < 0 ? " (income paid abroad is more than income received)" : ""}`, `GNP at MP = ${fmtC(MP)} ${nfia > 0 ? "+" : "−"} ${fmtC(Math.abs(nfia))} = ${fmtC(GNP)}`] };
    }
    const NI = k(100, 500), NIT = k(10, 50), dep = k(5, 40), nfia = k(2, 15), GDPmp = NI + NIT + dep - nfia;
    return { q: `GDP at market price is ${fmtC(GDPmp)}, net factor income from abroad is ${fmtC(nfia)}, depreciation is ${fmtC(dep)} and net indirect taxes are ${fmtC(NIT)}. Find national income (NNP at factor cost).`, a: fmtC(NI), wrong: opts(NI, [{ v: GDPmp + nfia - dep, k: "method" }, { v: GDPmp + nfia - dep + NIT, k: "sign" }, { v: GDPmp - dep - NIT, k: "method" }], fmtC), steps: [`GNP at MP = GDP at MP + NFIA = ${fmtC(GDPmp)} + ${fmtC(nfia)} = ${fmtC(GDPmp + nfia)}`, `NNP at MP = GNP at MP − depreciation = ${fmtC(GDPmp + nfia)} − ${fmtC(dep)} = ${fmtC(GDPmp + nfia - dep)}`, `National income = NNP at FC = NNP at MP − NIT = ${fmtC(GDPmp + nfia - dep)} − ${fmtC(NIT)} = ${fmtC(NI)}`] };
  };

  for (const [name, fn] of Object.entries(gens)) Gen.add(name, fn);

  // =====================================================================================================================
  // WHICH CHAPTER GETS WHICH GENERATORS
  // =====================================================================================================================
  const MOTION = ["sciSpeedConv", "sciDST", "sciAvgSpeed"];
  const ELEC = ["sciResist", "sciCircuit", "sciJoule", "sciPower2", "sciBill"];
  Gen.mapChapters("science", {
    7: { "measurement-of-time-and-motion": MOTION },
    8: { "particulate-nature-of-matter": ["sciDensity"], "exploring-forces": ["sciPressure"], "pressure-winds-storms-cyclones": ["sciPressure"], "electricity-magnetic-and-heating-effects": ["sciCircuit", "sciJoule", "sciBill"] },
    9: {
      "describing-motion-around-us": [...MOTION, "phyKin"],
      "how-forces-affect-motion": ["phyNewton"],
      "work-energy-and-simple-machines": ["sciWorkPower", "phyWorkEnergy"],
      "atomic-foundations-of-matter": ["chemMolecules"],
    },
    10: { electricity: ELEC, "light-reflection-and-refraction": ["sciOptics", "sciRefIndex"] },
  });
  Gen.mapChapters("sciencepb", {
    7: { "motion-and-time": MOTION },
    8: { "force-and-pressure": ["sciPressure"] },
    9: {
      motion: [...MOTION, "phyKin"],
      "force-and-laws-of-motion": ["phyNewton"],
      gravitation: ["sciDensity", "sciPressure"],
      "work-and-energy": ["sciWorkPower", "phyWorkEnergy"],
      "atoms-and-molecules": ["chemMolecules"],
    },
  });
  Gen.mapChapters("physics", {
    11: {
      "motion-in-a-straight-line": ["phyKin"],
      "motion-in-a-plane": ["phyProjectile"],
      "laws-of-motion": ["phyNewton"],
      "work-energy-and-power": ["phyWorkEnergy"],
      "mechanical-properties-of-fluids": ["sciPressure", "sciDensity"],
    },
    12: {
      "electric-charges-and-fields": ["phyCoulomb"],
      "electrostatic-potential-and-capacitance": ["phyCapacitor"],
      "current-electricity": ["sciResist", "sciCircuit", "sciJoule", "sciPower2", "phyKirchhoff"],
      "ray-optics-and-optical-instruments": ["sciOptics", "sciRefIndex", "phyLensMaker"],
      "dual-nature-of-radiation-and-matter": ["phyPhotonEnergy", "phyPhotoelectric", "phyDeBroglie"],
    },
  });
  Gen.mapChapters("chemistry", { 11: { "some-basic-concepts-of-chemistry": ["chemStp", "chemMolecules", "chemMolFormula"] } });
  Gen.mapChapters("accountancy", {
    11: {
      "introduction-to-accounting": ["accEquation"],
      "theory-base-of-accounting": ["accEquation"],
      "recording-of-transactions-1": ["accDebitCredit"],
      "recording-of-transactions-2": ["accDebitCredit"],
      "depreciation-provisions-and-reserves": ["accDepreciation", "accSaleAsset"],
      "financial-statements-1": ["accProfit"],
      "financial-statements-2": ["accProfit"],
    },
    12: { "partnership-fundamentals": ["accInterest"], "accounting-ratios": ["accRatio"], "analysis-of-financial-statements": ["accRatio"] },
  });
  Gen.mapChapters("economics", {
    11: { "measures-of-central-tendency": ["ecoCentral"], "theory-of-consumer-behaviour": ["ecoElasticity"], "production-and-costs": ["ecoRevenueCost"], "theory-of-firm-under-perfect-competition": ["ecoRevenueCost"] },
    12: { "national-income-accounting": ["ecoGDP"] },
  });
})();
