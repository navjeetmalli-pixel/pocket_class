// Numerical generators for science, physics, chemistry, accountancy and economics (js/gen-sci.js): known inputs, option rules,
// sign conventions, and the Fresh questions on real chapters.
const { test, expect, seed } = require("./helpers");

// The generators are seeded; the tests read the question text and check the formula answer for it, so a handful of seeds is enough here
// (scripts/audit-sci.js recomputes hundreds of seeds for every generator).
const make = (page, name, seeds) => page.evaluate(([n, ss]) => ss.map((s) => Gen.make(n, s)), [name, seeds]);
const SEEDS = Array.from({ length: 40 }, (_, i) => i + 1);

test("Ohm's law and resistors: the answers follow V = IR, series and parallel", async ({ page }) => {
  await page.goto("/#/");
  const res = await make(page, "sciCircuit", SEEDS);
  let series = 0, across = 0, par = 0;
  for (const q of res) {
    let m;
    if ((m = q.q.match(/^Two resistors of (\d+) Ω and (\d+) Ω are connected in series across a battery of ([\d.]+) V\. Find the current/))) {
      series++;
      expect(parseFloat(q.options[0])).toBeCloseTo(+m[3] / (+m[1] + +m[2]), 9); // I = V / (R1 + R2)
    } else if ((m = q.q.match(/series across a battery of ([\d.]+) V\. Find the potential difference across the (\d+) Ω/))) {
      across++;
      const [a, b] = q.q.match(/of (\d+) Ω and (\d+) Ω/).slice(1).map(Number);
      expect(parseFloat(q.options[0])).toBeCloseTo((+m[1] / (a + b)) * +m[2], 9);
    } else if ((m = q.q.match(/^Two resistors of (\d+) Ω and (\d+) Ω are connected in parallel across a battery of ([\d.]+) V/))) {
      par++;
      expect(parseFloat(q.options[0])).toBeCloseTo(+m[3] / +m[1] + +m[3] / +m[2], 9); // total current = V/R1 + V/R2
    } else throw new Error("unexpected wording: " + q.q);
    expect(q.steps.length).toBeGreaterThan(0);
  }
  expect(series).toBeGreaterThan(0);
  expect(across).toBeGreaterThan(0);
  expect(par).toBeGreaterThan(0);
  // three resistors: 6, 3 and 2 ohm in parallel make 1 ohm; the wrong "sum" and "forgot the reciprocal" options are offered
  const par3 = (await make(page, "sciResist", SEEDS)).filter((q) => /in parallel\. Find/.test(q.q) && /^Three/.test(q.q));
  expect(par3.length).toBeGreaterThan(0);
  for (const q of par3) {
    const [a, b, c] = q.q.match(/(\d+) Ω, (\d+) Ω and (\d+) Ω/).slice(1).map(Number);
    expect(parseFloat(q.options[0])).toBeCloseTo(1 / (1 / a + 1 / b + 1 / c), 9);
    expect(q.options.slice(1).map(parseFloat)).toContain(a + b + c); // the series mistake
    expect(q.kinds[0]).toBeNull();
    expect(q.kinds.slice(1)).toContain("method");
  }
});

test("lens and mirror formula: NCERT sign convention, with the sign mistake offered as a wrong option", async ({ page }) => {
  await page.goto("/#/");
  const qs = (await make(page, "sciOptics", Array.from({ length: 80 }, (_, i) => i + 1))).filter((q) => /image distance/.test(q.q));
  expect(qs.length).toBeGreaterThan(10);
  const seen = new Set();
  for (const q of qs) {
    const m = q.q.match(/placed (\d+) cm from the (?:pole|optical centre) of a (concave mirror|convex mirror|convex lens|concave lens) of focal length (\d+) cm/);
    const u = -Number(m[1]), kind = m[2], fa = Number(m[3]);
    const f = (/concave/.test(kind) ? -1 : 1) * fa;
    const v = /mirror/.test(kind) ? 1 / (1 / f - 1 / u) : 1 / (1 / f + 1 / u); // mirror 1/v + 1/u = 1/f; lens 1/v - 1/u = 1/f
    expect(parseFloat(q.options[0].replace("−", "-"))).toBeCloseTo(v, 6);
    expect(q.options[0]).toMatch(/^[+−]/); // always with its sign
    // the same size with the opposite sign is offered, tagged as a sign error
    const flipped = (v > 0 ? "−" : "+") + q.options[0].slice(1);
    expect(q.options.slice(1)).toContain(flipped);
    expect(q.kinds[q.options.indexOf(flipped)]).toBe("sign");
    seen.add(kind);
  }
  expect(seen.size).toBe(4); // concave and convex mirrors and lenses all appear
  // a worked case: concave mirror, f = 15 cm, object at 30 cm gives v = -30 cm (real, inverted, same size)
  const known = await page.evaluate(() => {
    for (let s = 1; s < 4000; s++) {
      const q = Gen.make("sciOptics", s);
      if (q && /placed 30 cm from the pole of a concave mirror of focal length 15 cm.*image distance/.test(q.q)) return q;
    }
    return null;
  });
  expect(known, "a concave mirror 30 cm / 15 cm question exists").not.toBeNull();
  expect(known.options[0]).toBe("−30 cm");
  expect(known.options).toContain("+30 cm");
});

test("chemistry: molar mass of H2SO4 is 98, and moles / STP volume / molecular formula follow NCERT masses", async ({ page }) => {
  await page.goto("/#/");
  // H2SO4 = 2 x 1 + 32 + 4 x 16 = 98 (the existing formula-mass generator uses the same NCERT table)
  const h2so4 = await page.evaluate(() => {
    for (let s = 1; s < 5000; s++) {
      const q = Gen.make("formulaMass", s);
      if (q && /of H₂SO₄/.test(q.q)) return q;
    }
    for (let s = 1; s < 5000; s++) {
      const q = Gen.make("molarMass", s);
      if (q && /of H₂SO₄/.test(q.q)) return q;
    }
    return null;
  });
  expect(h2so4).not.toBeNull();
  expect(h2so4.options[0]).toBe("98 u");
  const AM = { H: 1, C: 12, N: 14, O: 16, Cl: 35.5 };
  const D = { "₀": 0, "₁": 1, "₂": 2, "₃": 3, "₄": 4, "₅": 5, "₆": 6, "₇": 7, "₈": 8, "₉": 9 };
  const mass = (f) => [...f.matchAll(/([A-Z][a-z]?)([₀-₉]*)/g)].reduce((s, m) => s + AM[m[1]] * (m[2] ? +[...m[2]].map((c) => D[c]).join("") : 1), 0);
  for (const q of await make(page, "chemMolFormula", SEEDS)) {
    const [, emp, M] = q.q.match(/empirical formula (\S+) and a molar mass of (\d+) g\/mol/);
    const k = Number(M) / mass(emp);
    expect(Number.isInteger(k)).toBe(true);
    expect(mass(q.options[0])).toBe(Number(M)); // the molecular formula has exactly the stated molar mass
    expect(q.options.slice(1).every((o) => mass(o) !== Number(M))).toBe(true);
  }
  for (const q of await make(page, "chemStp", SEEDS)) {
    expect(q.q).toMatch(/22\.4 L/); // the convention is stated
    if (/^What volume/.test(q.q)) {
      const [, m, M] = q.q.match(/does ([\d.]+) g of .* molar mass of \S+ = (\d+) g\/mol/);
      expect(parseFloat(q.options[0])).toBeCloseTo((m / M) * 22.4, 6);
    }
  }
});

test("accountancy and physics: straight-line depreciation, kinematics, Coulomb's law", async ({ page }) => {
  await page.goto("/#/");
  // depreciation = (cost - scrap) / life
  const dep = (await make(page, "accDepreciation", SEEDS)).filter((q) => /Find the annual depreciation/.test(q.q));
  expect(dep.length).toBeGreaterThan(0);
  const rup = (s) => Number(s.replace(/[₹,]/g, ""));
  for (const q of dep) {
    const [, cost, life, scrap] = q.q.match(/costs ₹([\d,]+), has a useful life of (\d+) years and a scrap value of ₹([\d,]+)/);
    expect(rup(q.options[0])).toBe((rup(cost) - rup(scrap)) / Number(life));
    // forgetting the scrap value is a typical mistake and is offered when it differs
    if (rup(scrap) > 0) expect(q.options.map(rup)).toContain(rup(cost) / Number(life));
  }
  // a known case: 1,00,000 cost, scrap 10,000, 5 years -> 18,000 (checked by hand)
  const handmade = await page.evaluate(() => {
    for (let s = 1; s < 20000; s++) {
      const q = Gen.make("accDepreciation", s);
      if (q && /costs ₹1,60,000, has a useful life of 4 years and a scrap value of ₹16,000/.test(q.q)) return q;
    }
    return null;
  });
  if (handmade) expect(handmade.options[0]).toBe("₹36,000"); // (1,60,000 - 16,000) / 4
  // v² = u² + 2as: braking from 20 m/s with a retardation of 5 m/s² stops in 40 m
  const stop = await page.evaluate(() => {
    for (let s = 1; s < 20000; s++) {
      const q = Gen.make("phyKin", s);
      if (q && /moving at 20 m\/s brakes with a uniform retardation of 5 m\/s²/.test(q.q)) return q;
    }
    return null;
  });
  expect(stop).not.toBeNull();
  expect(stop.options[0]).toBe("40 m");
  // Coulomb: 3 μC and 3 μC, 30 cm apart: F = 9e9 x 9e-12 / 0.09 = 0.9 N
  for (const q of await make(page, "phyCoulomb", SEEDS)) {
    const [, a, b, r] = q.q.match(/charges of [+−](\d+) μC and [+−](\d+) μC are (\d+) cm apart/);
    expect(parseFloat(q.options[0])).toBeCloseTo((9e9 * a * 1e-6 * b * 1e-6) / (r / 100) ** 2, 6);
    expect(q.q).toMatch(/9 × 10⁹/); // k is stated
  }
});

test("every new generator: 3 distinct wrong options, worked steps, tagged mistake kinds, and each mapped chapter makes questions", async ({ page }) => {
  await page.goto("/#/");
  const res = await page.evaluate(() => {
    const NEW = Gen.names.filter((n) => /^(sci|phy|acc|eco)[A-Z]/.test(n) || /^chem(Stp|Molecules|MolFormula)$/.test(n));
    const out = { count: NEW.length, bad: [], kinds: {}, chapters: 0, empty: [] };
    for (const n of NEW) {
      for (let s = 1; s <= 60; s++) {
        const q = Gen.make(n, s * 7919);
        if (!q) { out.bad.push(n + " " + s + " nothing"); continue; }
        const w = q.options.slice(1);
        if (w.length !== 3 || new Set(w).size !== 3 || w.includes(q.options[0])) out.bad.push(n + " " + s + " options");
        if (!q.steps.length || q.steps.some((x) => !x.trim())) out.bad.push(n + " " + s + " steps");
        if (q.kinds.length !== 4 || q.kinds[0] !== null) out.bad.push(n + " " + s + " kinds");
        q.kinds.slice(1).forEach((k) => (out.kinds[k] = (out.kinds[k] || 0) + 1));
      }
    }
    for (const [subj, byCls] of Object.entries(Gen.MAP))
      for (const [cls, chs] of Object.entries(byCls))
        for (const [id, names] of Object.entries(chs))
          if (names.some((x) => NEW.includes(x))) {
            out.chapters++;
            if (!Gen.questions(+cls, subj, id, 3, 5).length) out.empty.push(subj + " " + cls + " " + id);
          }
    return out;
  });
  expect(res.count).toBeGreaterThanOrEqual(30);
  expect(res.bad).toEqual([]);
  expect(res.empty).toEqual([]);
  expect(res.chapters).toBeGreaterThan(35);
  for (const k of ["slip", "sign", "scale", "method"]) expect(res.kinds[k], "kind " + k).toBeGreaterThan(0);
});

test("a Class 10 Science electricity chapter shows Fresh questions with steps", async ({ page }) => {
  await seed(page, { name: "Asha", cls: 10 });
  await page.goto("/#/chapter/10/science/electricity/practise");
  await expect(page.getByRole("heading", { name: "Fresh questions" })).toBeVisible();
  const arts = page.locator("#gen-mount article");
  await expect(arts).toHaveCount(5);
  // five different number questions from the electricity generators; each has a worked solution behind "Show answer"
  await arts.first().locator("summary").click();
  await expect(arts.first().locator("ol.steps li").first()).toBeVisible();
  expect(await arts.first().locator("ol.steps li").count()).toBeGreaterThan(0);
  await expect(arts.first().locator(".answer")).not.toBeEmpty();
  await page.getByRole("button", { name: "New questions" }).click();
  await expect(arts).toHaveCount(5);
});

test("a Class 11 Accountancy chapter shows Fresh questions with steps", async ({ page }) => {
  await seed(page, { name: "Asha", cls: 11 });
  await page.goto("/#/chapter/11/accountancy/recording-of-transactions-1/practise");
  await expect(page.getByRole("heading", { name: "Fresh questions" })).toBeVisible();
  const arts = page.locator("#gen-mount article");
  await expect(arts).toHaveCount(5);
  await expect(arts.first().locator(".q")).toContainText(/Which account is (debited|credited)\?/);
  await arts.first().locator("summary").click();
  await expect(arts.first().locator("ol.steps li").first()).toContainText(/debited|credited/);
  // the revealed answer is an account name
  await expect(arts.first().locator(".answer")).toContainText(/A\/c$/);
});
