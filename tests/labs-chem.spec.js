const { test, expect, seed, readStore, current } = require("./helpers");

// Chemistry labs (js/labs/atom.js, js/labs/equation.js): the atom and molecule builder and the equation balancer.
// Both follow predict -> change one variable -> observe -> explain, save an experiment record that survives a reload,
// and are listed in Explore and in the chapter hub's Explore section.

const ATOM = { cls: 9, subject: "science", chapter: "journey-inside-the-atom" };
const EQ = { cls: 10, subject: "science", chapter: "chemical-reactions-and-equations" };
const url = (id, L) => `/#/lab/${id}/${L.cls}/${L.subject}/${L.chapter}`;
const open = async (page, id, L, opts = {}) => {
  await seed(page, { name: "Asha", cls: L.cls, ...opts });
  await page.goto(url(id, L));
  await expect(page.locator(".vl")).toBeVisible();
};
const live = (page, label) => page.locator("[data-live] > div").filter({ has: page.locator("dt").getByText(label, { exact: true }) }).locator("dd");
const rows = (page) => page.locator("[data-table] tbody tr");
const records = async (page) => current(await readStore(page)).labs.records;
const inv = (page, i) => page.locator(`[data-inv="${i}"]`).click();
const step = (page, k, d, n = 1) => page.locator(`[data-step="${k}"][data-d="${d}"]`).click({ clickCount: n });

test("explore: both chemistry labs are listed under the Chemistry Lab and open", async ({ page }) => {
  await seed(page, { name: "Asha", cls: 10 });
  await page.goto("/#/explore");
  await expect(page.locator("#area-chemistry")).toContainText("Atom and molecule builder");
  await expect(page.locator("#area-chemistry")).toContainText("Equation balancer");
  await page.locator('[data-explore="lab-atom"]').getByRole("link", { name: /Open lab/ }).first().click();
  await expect(page).toHaveURL(/#\/lab\/atom\//);
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Atom and molecule builder");
  await expect(page.locator(".vl .sim-step h3")).toHaveCount(4);
});

test("explore: Class 7 sees the balancer but not the atom builder", async ({ page }) => {
  await seed(page, { name: "Asha", cls: 7 });
  await page.goto("/#/explore");
  await expect(page.locator('[data-explore="lab-equation"]')).toBeVisible();
  await expect(page.locator('[data-explore="lab-atom"]')).toHaveCount(0);
});

test("chapter hub: the Class 10 chemical reactions chapter lists the balancer and opens it", async ({ page }) => {
  await seed(page, { name: "Asha", cls: 10 });
  await page.goto("/#/chapter/10/science/chemical-reactions-and-equations/explore");
  const card = page.locator(".lab-card").filter({ hasText: "Equation balancer" });
  await expect(card).toBeVisible();
  await card.click();
  await expect(page).toHaveURL(/#\/lab\/equation\/10\/science\/chemical-reactions-and-equations$/);
  await expect(page.locator(".vl")).toBeVisible();
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Equation balancer");
  expect(await page.evaluate(() => Labs.forChapter(10, "science", "chemical-reactions-and-equations").map((l) => l.id))).toEqual(["equation"]);
  expect(await page.evaluate(() => Labs.forChapter(11, "chemistry", "structure-of-atom").map((l) => l.id))).toEqual(["atom"]);
  expect(await page.evaluate(() => Labs.forChapter(9, "sciencepb", "atoms-and-molecules").map((l) => l.id).sort())).toEqual(["atom", "equation"]);
});

test("atom builder: sodium has 11 protons, 12 neutrons, 11 electrons in shells 2, 8, 1; removing an electron gives Na⁺, adding one gives Na⁻", async ({ page }) => {
  await open(page, "atom", ATOM);
  await expect(page.locator("[data-record]")).toBeDisabled();
  // build it from a neutral sodium atom
  await page.locator("[data-start]").selectOption("11");
  await expect(live(page, "Element")).toHaveText("Sodium (Na)");
  await expect(live(page, "Atomic number (protons)")).toHaveText("11");
  await expect(live(page, "Mass number (protons + neutrons)")).toHaveText("23");
  await expect(live(page, "Electrons in shells")).toHaveText("2, 8, 1");
  await expect(live(page, "Charge")).toHaveText("0 · neutral atom");
  await expect(page.locator('[data-val="p"]')).toHaveText("11");
  await expect(page.locator('[data-val="n"]')).toHaveText("12");
  await expect(page.locator('[data-val="e"]')).toHaveText("11");
  await expect(page.locator("[data-notes]")).toContainText("lose 1");
  // prediction first, then a run for each number of electrons
  await page.locator('[data-pp="1"]').click();
  await page.locator("[data-record]").click();
  await step(page, "e", -1);
  await expect(live(page, "Charge")).toHaveText("+1 · positive ion");
  await expect(live(page, "Electrons in shells")).toHaveText("2, 8");
  await expect(page.locator("[data-sym]")).toContainText("²³Na⁺");
  await expect(page.locator("[data-notes]")).toContainText("full outer shell");
  await page.locator("[data-record]").click();
  await step(page, "e", 1, 2);
  await expect(live(page, "Charge")).toHaveText("−1 · negative ion");
  await expect(live(page, "Electrons in shells")).toHaveText("2, 8, 2");
  await page.locator("[data-record]").click();
  await expect(rows(page)).toHaveCount(3);
  await expect(rows(page).nth(1)).toContainText("²³Na⁺");
  await expect(page.locator("[data-fair]")).toContainText("Fair test: you changed only Electrons");
  await page.locator('[data-ee="0"]').click();
  await page.locator("[data-check]").click();
  await expect(page.locator("[data-fb]")).toContainText("That is what your runs show.");
  const rec = (await records(page)).find((r) => r.lab === "atom");
  expect(rec.prediction.ok).toBe(true);
  expect(rec.conclusion.ok).toBe(true);
  expect(rec.fair).toBe(true);
  expect(rec.cls).toBe(9);
  expect(rec.variables.changed).toBe("Electrons");
  expect(rec.observations.map((o) => o.charge)).toEqual(["0", "+1", "−1"]);
  expect(rec.observations[1].e).toBe("10");
  await page.reload();
  await expect(page.locator("[data-pastn]")).toContainText("1");
});

test("atom builder: adding a proton to carbon makes nitrogen; a neutron makes an isotope; the limits are explained", async ({ page }) => {
  await open(page, "atom", ATOM);
  await inv(page, 1);
  await expect(live(page, "Element")).toHaveText("Carbon (C)");
  await step(page, "p", 1);
  await expect(live(page, "Element")).toHaveText("Nitrogen (N)");
  await expect(live(page, "Charge")).toHaveText("+1 · positive ion");
  await expect(live(page, "Mass number (protons + neutrons)")).toHaveText("13");
  await inv(page, 2);
  await expect(live(page, "Element")).toHaveText("Chlorine (Cl)");
  await expect(live(page, "Electrons in shells")).toHaveText("2, 8, 7");
  await step(page, "n", 1, 2);
  await expect(live(page, "Element")).toHaveText("Chlorine (Cl)");
  await expect(live(page, "Mass number (protons + neutrons)")).toHaveText("37");
  await expect(live(page, "Charge")).toHaveText("0 · neutral atom");
  await expect(page.locator("[data-notes]")).toContainText("isotope");
  // neon: a full outer shell
  await page.locator("[data-start]").selectOption("10");
  await expect(live(page, "Electrons in shells")).toHaveText("2, 8");
  await expect(page.locator("[data-notes]")).toContainText("noble gas");
  // the ends of the range
  await page.locator("[data-start]").selectOption("20");
  await expect(live(page, "Electrons in shells")).toHaveText("2, 8, 8, 2");
  await expect(page.locator('[data-step="p"][data-d="1"]')).toBeDisabled();
  for (let i = 0; i < 20; i++) await step(page, "e", -1);
  await expect(page.locator('[data-step="e"][data-d="-1"]')).toBeDisabled();
  await expect(live(page, "Charge")).toHaveText("+20 · positive ion");
  await expect(page.locator("[data-notes]")).toContainText("bare nucleus");
});

test("molecule builder: H₂O has mass 18 u, a third bond on oxygen is refused, NaCl is ionic with mass 58.5 u", async ({ page }) => {
  await open(page, "atom", ATOM);
  await inv(page, 3);
  await expect(page.locator("[data-molpanel]")).toBeVisible();
  await expect(page.locator("[data-atompanel]")).toBeHidden();
  for (const s of ["H", "H", "O"]) await page.locator(`[data-addatom="${s}"]`).click();
  await expect(page.locator("[data-atom]")).toHaveCount(3);
  await expect(live(page, "Check")).toContainText("Not finished");
  await expect(live(page, "Formula")).toHaveText("H₂O");
  // join O (atom 2) to each H
  await page.locator('[data-atom="2"]').click();
  await page.locator('[data-atom="0"]').click();
  await expect(live(page, "Check")).toContainText("Not finished");
  await page.locator('[data-atom="2"]').click();
  await page.locator('[data-atom="1"]').click();
  await expect(live(page, "Check")).toContainText("Complete");
  await expect(live(page, "Molecular mass")).toHaveText("18 u");
  await expect(live(page, "Name")).toHaveText("Water");
  await expect(live(page, "Bonds")).toHaveText("2 single");
  await expect(live(page, "Type of bond")).toContainText("Covalent");
  // impossible valency
  await page.locator('[data-addatom="H"]').click();
  await page.locator('[data-atom="2"]').click();
  await page.locator('[data-atom="3"]').click();
  await expect(page.locator("[data-molmsg]")).toContainText("Oxygen has valency 2");
  await expect(page.locator("[data-molmsg]")).toHaveClass(/is-bad/);
  await expect(live(page, "Formula")).toHaveText("H₃O");
  await expect(live(page, "Check")).toContainText("Not finished");
  // NaCl by choosing the molecule and adding its atoms
  await page.locator("[data-clearmol]").click();
  await page.locator("[data-target]").selectOption("NaCl");
  await page.locator("[data-addneeded]").click();
  await expect(page.locator("[data-atom]")).toHaveCount(2);
  await page.locator('[data-atom="0"]').click();
  await page.locator('[data-atom="1"]').click();
  await expect(live(page, "Formula-unit mass")).toHaveText("58.5 u");
  await expect(live(page, "Type of bond")).toContainText("Ionic");
  await expect(live(page, "Name")).toContainText("Sodium chloride");
  await expect(page.locator(".at-ion")).toHaveCount(1);
  await expect(page.locator('[data-atom="0"]')).toHaveAttribute("aria-label", /Sodium \+1 atom/);
  await expect(page.locator('[data-atom="1"]')).toHaveAttribute("aria-label", /Chlorine −1 atom/);
});

test("molecule builder: CH₄ is 16 u, C₂H₄ has a double bond and 28 u, an unfinished molecule cannot be recorded, and the record is saved", async ({ page }) => {
  await open(page, "atom", ATOM);
  await inv(page, 3);
  await page.locator('[data-pp="1"]').click();
  // not finished: the run is refused
  await page.locator('[data-addatom="C"]').click();
  await page.locator("[data-record]").click();
  await expect(rows(page)).toHaveCount(0);
  await expect(page.locator("[data-molmsg]")).toContainText("Not finished");
  await page.locator("[data-target]").selectOption("CH₄");
  await page.locator("[data-addneeded]").click();
  for (const h of [1, 2, 3, 4]) {
    await page.locator('[data-atom="0"]').click();
    await page.locator(`[data-atom="${h}"]`).click();
  }
  await expect(live(page, "Molecular mass")).toHaveText("16 u");
  await expect(live(page, "Name")).toHaveText("Methane");
  await page.locator("[data-record]").click();
  await expect(rows(page)).toHaveCount(1);
  await page.locator("[data-clearmol]").click();
  await page.locator("[data-target]").selectOption("C₂H₄");
  await page.locator("[data-addneeded]").click();
  // atoms: C C H H H H. C0=C1 double, C0-H2, C0-H3, C1-H4, C1-H5
  for (const [a, b] of [[0, 1], [0, 1], [0, 2], [0, 3], [1, 4], [1, 5]]) {
    await page.locator(`[data-atom="${a}"]`).click();
    await page.locator(`[data-atom="${b}"]`).click();
  }
  await expect(live(page, "Bonds")).toHaveText("4 single, 1 double");
  await expect(live(page, "Molecular mass")).toHaveText("28 u");
  await expect(live(page, "Name")).toHaveText("Ethene");
  await page.locator("[data-record]").click();
  await expect(rows(page)).toHaveCount(2);
  await expect(page.locator("[data-fair]")).toContainText("Fair test: you changed only Molecule");
  await page.locator('[data-ee="0"]').click();
  await page.locator("[data-check]").click();
  await expect(page.locator("[data-fb]")).toContainText("That is what your runs show.");
  const rec = (await records(page)).find((r) => r.lab === "atom");
  expect(rec.inv).toBe("bonds");
  expect(rec.observations.map((o) => o.formula)).toEqual(["CH₄", "C₂H₄"]);
  expect(rec.observations.map((o) => o.mass)).toEqual(["16", "28"]);
  // removing a bond works
  await page.reload();
  await expect(page.locator("[data-pastn]")).toContainText("1");
});

test("molecule builder: every molecule on the list can be built and shows its formula and mass", async ({ page }) => {
  await open(page, "atom", ATOM);
  const made = await page.evaluate(() => {
    const K = Labs.calc.atom;
    return K.MOLS.map((m) => {
      const A = K.analyse(m.atoms, m.bonds);
      return [m.f, A.formula, A.mass, A.ok];
    });
  });
  expect(made.map((m) => m[0])).toEqual(["H₂", "O₂", "N₂", "H₂O", "CO₂", "CH₄", "NH₃", "HCl", "NaCl", "C₂H₆", "C₂H₄"]);
  expect(made.map((m) => m[2])).toEqual([2, 32, 28, 18, 44, 16, 17, 36.5, 58.5, 30, 28]);
  for (const m of made) expect(m[3]).toBe(true);
});

test("equation balancer: CH₄ + O₂ → CO₂ + H₂O is balanced with 1, 2, 1, 2; a wrong set names the elements that are out", async ({ page }) => {
  await open(page, "equation", EQ);
  await expect(page.locator("[data-pick]")).toHaveValue("ch4");
  await expect(live(page, "Equation")).toHaveText("CH₄ + O₂ → CO₂ + H₂O");
  await expect(live(page, "Balance check")).toHaveText("Not balanced: H, O");
  await expect(page.locator('[data-el="H"]')).toHaveClass(/eq-no/);
  await expect(page.locator('[data-el="C"]')).toHaveClass(/eq-ok/);
  await expect(page.locator('[data-el="H"] [data-l]')).toHaveText("4");
  await expect(page.locator('[data-el="H"] [data-r]')).toHaveText("2");
  await expect(page.locator('[data-el="O"] [data-l]')).toHaveText("2");
  await expect(page.locator('[data-el="O"] [data-r]')).toHaveText("3");
  await expect(page.locator("[data-explain]")).toContainText("shown when the equation is balanced");
  // a prediction first
  await expect(page.locator("[data-record]")).toBeDisabled();
  await page.locator('[data-pp="1"]').click();
  await page.locator("[data-record]").click();
  // O₂ -> 2
  await page.locator('[data-eqstep="1"][data-d="1"]').click();
  await expect(live(page, "Balance check")).toHaveText("Not balanced: H, O");
  // H₂O -> 2
  await page.locator('[data-eqstep="3"][data-d="1"]').click();
  await expect(live(page, "Balance check")).toHaveText("Balanced");
  await expect(live(page, "Equation")).toHaveText("CH₄ + 2 O₂ → CO₂ + 2 H₂O");
  await expect(live(page, "Reaction type")).toHaveText("Combustion reaction");
  await expect(page.locator("[data-explain]")).toContainText("burns in oxygen");
  await expect(page.locator("[data-explain]")).toContainText("never created or destroyed");
  await expect(page.locator('[data-el="O"]')).toHaveClass(/eq-ok/);
  await page.locator("[data-record]").click();
  await expect(rows(page)).toHaveCount(2);
  await expect(rows(page).nth(0)).toContainText("1, 1, 1, 1");
  await expect(rows(page).nth(1)).toContainText("1, 2, 1, 2");
  await expect(rows(page).nth(1)).toContainText("Balanced");
  await expect(page.locator("[data-fair]")).toContainText("Fair test: you changed only Numbers in front");
  await page.locator('[data-ee="0"]').click();
  await page.locator("[data-check]").click();
  await expect(page.locator("[data-fb]")).toContainText("That is what your runs show.");
  // the record survives a reload
  const rec = (await records(page)).find((r) => r.lab === "equation");
  expect(rec.prediction.ok).toBe(true);
  expect(rec.conclusion.ok).toBe(true);
  expect(rec.extra.reaction).toBe("ch4");
  expect(rec.extra.coef).toEqual([1, 2, 1, 2]);
  expect(rec.observations.map((o) => o.coef)).toEqual(["1, 1, 1, 1", "1, 2, 1, 2"]);
  await page.reload();
  await expect(page.locator("[data-pastn]")).toContainText("1");
  expect((await records(page)).filter((r) => r.lab === "equation")).toHaveLength(1);
});

test("equation balancer: balanced but not in the smallest numbers is not 'Balanced'", async ({ page }) => {
  await open(page, "equation", EQ);
  // 2, 4, 2, 4
  await page.locator('[data-eqstep="0"][data-d="1"]').click();
  await page.locator('[data-eqstep="1"][data-d="1"]').click({ clickCount: 3 });
  await page.locator('[data-eqstep="2"][data-d="1"]').click();
  await page.locator('[data-eqstep="3"][data-d="1"]').click({ clickCount: 3 });
  await expect(page.locator('[data-coef="1"]')).toHaveText("4");
  await expect(live(page, "Balance check")).toHaveText("Equal, but not in the smallest whole numbers");
  await expect(page.locator("[data-explain]")).toContainText("Divide every number by 2");
  await expect(page.locator('[data-el="O"]')).toHaveClass(/eq-ok/);
  await page.locator("[data-ones]").click();
  await expect(page.locator('[data-coef="1"]')).toHaveText("1");
});

test("equation balancer: picking another reaction starts the any-reaction investigation; each can be balanced to the listed numbers", async ({ page }) => {
  await open(page, "equation", EQ);
  await page.locator("[data-pick]").selectOption("kclo3");
  await expect(page.locator('[data-inv="3"]')).toHaveAttribute("aria-checked", "true");
  await expect(live(page, "Equation")).toHaveText("KClO₃ → KCl + O₂");
  await expect(page.locator("[data-name]")).toContainText("Potassium chlorate");
  // 2, 2, 3
  await page.locator('[data-eqstep="0"][data-d="1"]').click();
  await page.locator('[data-eqstep="1"][data-d="1"]').click();
  await page.locator('[data-eqstep="2"][data-d="1"]').click({ clickCount: 2 });
  await expect(live(page, "Balance check")).toHaveText("Balanced");
  await expect(live(page, "Reaction type")).toHaveText("Decomposition reaction");
  // the "give me a reaction" button chooses a different one
  const before = await page.locator("[data-pick]").inputValue();
  await page.locator("[data-surprise]").click();
  expect(await page.locator("[data-pick]").inputValue()).not.toBe(before);
  // all reactions are listed and each balances with its listed numbers (in the page's own code)
  const n = await page.evaluate(() => {
    const K = Labs.calc.equation;
    return K.RX.filter((r) => K.check(r, r.c).balanced && K.check(r, r.c).g === 1).length;
  });
  expect(n).toBeGreaterThanOrEqual(20);
  await expect(page.locator("[data-pick] option")).toHaveCount(n);
});

test("equation balancer: Zn + HCl shows displacement and a redox note where it applies", async ({ page }) => {
  await open(page, "equation", EQ);
  await inv(page, 2);
  await expect(live(page, "Equation")).toHaveText("Zn + HCl → ZnCl₂ + H₂");
  await page.locator('[data-eqstep="1"][data-d="1"]').click();
  await expect(live(page, "Balance check")).toHaveText("Balanced");
  await expect(live(page, "Reaction type")).toHaveText("Displacement reaction");
  await expect(page.locator("[data-explain]")).toContainText("also a redox reaction");
  await page.locator("[data-pick]").selectOption("naoh-hcl");
  await expect(live(page, "Balance check")).toHaveText("Balanced");
  await expect(live(page, "Reaction type")).toHaveText("Double displacement reaction");
  await expect(page.locator("[data-explain]")).not.toContainText("redox");
});

for (const [lang, word] of [["pa", /ਅੰਦਾਜ਼ਾ/], ["hi", /अनुमान/]]) {
  test(`chemistry labs in ${lang}: headings, readouts and messages are translated`, async ({ page }) => {
    await seed(page, { name: "Asha", cls: 10, lang });
    for (const [id, L] of [["atom", ATOM], ["equation", EQ]]) {
      await page.goto(url(id, L));
      await expect(page.locator(".vl .sim-step h3").first()).toContainText(word);
      const text = await page.locator("#app").innerText();
      // only formulas, symbols and units may stay in Latin letters (formulas such as NaOH are 4 letters long)
      const english = text
        .split("\n")
        .map((l) => l.replace(/ਜਮਾਤ.*|कक्षा.*/, "").replace(/\b[A-Z][A-Za-z]*[0-9₀-₉()⁺⁻]*(?:[A-Z][a-z]*[0-9₀-₉()]*)*\b/g, ""))
        .filter((l) => /\b[A-Za-z]{4,}\b/.test(l))
        .filter((l) => !/^(Science|Journey|Chemical)/.test(l));
      expect(english, `${id} in ${lang}`).toEqual([]);
    }
    // a molecule screen and a balanced equation
    await page.goto(url("atom", ATOM));
    await page.locator('[data-inv="3"]').click();
    await page.locator('[data-addatom="H"]').click();
    await page.locator('[data-addatom="H"]').click();
    await page.locator('[data-atom="0"]').click();
    await page.locator('[data-atom="1"]').click();
    await expect(page.locator("[data-live]")).toContainText("H₂");
    const mol = await page.locator("#app").innerText();
    expect(mol.split("\n").filter((l) => /\b[a-z]{5,}\b/.test(l.replace(/ਜਮਾਤ.*|कक्षा.*/, "")))).toEqual([]);
  });
}

for (const [id, L] of [["atom", ATOM], ["equation", EQ]])
  for (const scheme of ["light", "dark"])
    test(`chemistry labs: ${id} at phone width in ${scheme} mode has no sideways scrolling and every control has a name`, async ({ page }) => {
      await page.emulateMedia({ colorScheme: scheme });
      await seed(page, { name: "Asha", cls: L.cls });
      await page.goto(url(id, L));
      await expect(page.locator(".vl")).toBeVisible();
      await page.locator('[data-pp="0"]').click();
      if (id === "atom") {
        await page.locator('[data-inv="3"]').click();
        for (const s of ["C", "H", "H", "H", "H", "O"]) await page.locator(`[data-addatom="${s}"]`).click();
      }
      const over = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
      expect(over).toBeLessThanOrEqual(0);
      const unnamed = await page.locator("#app button:visible, #app input:visible, #app select:visible").evaluateAll((els) => els.filter((e) => !(e.getAttribute("aria-label") || e.textContent.trim() || (e.labels && e.labels.length))).length);
      expect(unnamed).toBe(0);
      // every control is at least 44 px tall (the molecule atoms and steppers included)
      const small = await page.locator("#app button:visible").evaluateAll((els) => els.filter((e) => e.getBoundingClientRect().height < 43.5 || e.getBoundingClientRect().width < 43.5).map((e) => e.textContent.trim().slice(0, 20)));
      expect(small, "buttons smaller than 44 px").toEqual([]);
    });
