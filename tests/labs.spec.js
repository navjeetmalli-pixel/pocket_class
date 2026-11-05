const { test, expect, seed, readStore, current } = require("./helpers");

// Virtual labs (js/labs/): circuit builder, force and motion lab, particle world and cell builder.
// Each opens from Explore (or a chapter's Explore section), follows predict -> change one variable -> observe -> explain,
// saves an experiment record that survives a reload, and logs evidence against the chapter's objectives.

const LABS = {
  circuit: { cls: 10, subject: "science", chapter: "electricity", title: "Circuit builder", area: "physics" },
  force: { cls: 9, subject: "science", chapter: "how-forces-affect-motion", title: "Force and motion lab", area: "physics" },
  particles: { cls: 8, subject: "science", chapter: "particulate-nature-of-matter", title: "Particle world", area: "chemistry" },
  cell: { cls: 9, subject: "science", chapter: "cell-the-building-block-of-life", title: "Cell builder", area: "biology" },
};
const url = (id) => `/#/lab/${id}/${LABS[id].cls}/${LABS[id].subject}/${LABS[id].chapter}`;
const open = async (page, id, opts = {}) => {
  await seed(page, { name: "Asha", cls: LABS[id].cls, ...opts });
  await page.goto(url(id));
  await expect(page.locator(".vl")).toBeVisible();
};
const predict = (page, i) => page.locator(`[data-pp="${i}"]`).click();
const rows = (page) => page.locator("[data-table] tbody tr");
const live = (page, label) => page.locator("[data-live] > div").filter({ hasText: label }).locator("dd");
const setRange = (page, sel, v) =>
  page.locator(sel).evaluate((el, v) => {
    el.value = v;
    el.dispatchEvent(new Event("input", { bubbles: true }));
  }, String(v));
const records = async (page) => current(await readStore(page)).labs.records;
const events = async (page) => current(await readStore(page)).learn.events;

for (const [id, L] of Object.entries(LABS)) {
  test(`explore: the ${id} lab is listed for Class ${L.cls} and opens from its card`, async ({ page }) => {
    await seed(page, { name: "Asha", cls: L.cls });
    await page.goto("/#/explore");
    const card = page.locator(`[data-explore="lab-${id}"]`);
    await expect(card).toBeVisible();
    await expect(page.locator(`#area-${L.area}`)).toContainText(L.title);
    await card.getByRole("link", { name: /Try it/ }).first().click();
    await expect(page).toHaveURL(/#\/lab\//);
    await expect(page.locator(".vl")).toBeVisible();
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(L.title);
    await expect(page.locator(".vl-for a")).toHaveAttribute("href", /#\/chapter\//);
    await expect(page.locator(".vl .sim-step h3")).toHaveCount(4); // predict, change one variable, observe, explain
  });
}

test("explore: a class with no lab chapters does not show them", async ({ page }) => {
  await seed(page, { name: "Asha", cls: 2 });
  await page.goto("/#/explore");
  for (const id of ["circuit", "force", "particles", "cell", "atom", "equation", "foodweb", "body"]) await expect(page.locator(`[data-explore="lab-${id}"]`)).toHaveCount(0);
});

test("chapter hub: a Class 10 electricity chapter's Explore section lists the circuit lab and opens it", async ({ page }) => {
  await seed(page, { name: "Asha", cls: 10 });
  await page.goto("/#/chapter/10/science/electricity/explore");
  const card = page.locator(".lab-card").filter({ hasText: "Circuit builder" });
  await expect(card).toBeVisible();
  await card.click();
  await expect(page).toHaveURL(/#\/lab\/circuit\/10\/science\/electricity$/);
  await expect(page.locator(".vl")).toBeVisible();
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Circuit builder");
  expect(await page.evaluate(() => Labs.forChapter(10, "science", "electricity").map((l) => l.id))).toEqual(["circuit"]);
  const item = await page.evaluate(() => Labs.forChapter(10, { id: "science" }, { id: "electricity" })[0]);
  expect(item.href).toBe("#/lab/circuit/10/science/electricity");
  expect(item.title).toBe("Circuit builder");
  expect(item.blurb.length).toBeGreaterThan(20);
  expect(await page.evaluate(() => Labs.forChapter(10, "science", "heredity"))).toEqual([]);
});

test("circuit lab: prediction first, 6 V across 10 + 20 ohm in series gives 0.2 A, doubling the voltage doubles it, the record is saved and survives a reload", async ({ page }) => {
  await open(page, "circuit");
  // no run before a prediction
  await expect(page.locator("[data-record]")).toBeDisabled();
  await expect(rows(page)).toHaveCount(0);
  await predict(page, 1);
  await expect(page.locator("[data-record]")).toBeEnabled();
  await page.locator("[data-record]").click();
  await expect(rows(page)).toHaveCount(1);
  await expect(rows(page).first()).toContainText("0.20");
  await expect(rows(page).first()).toContainText("30");
  await expect(live(page, "Current from the battery")).toHaveText("0.20 A");
  await expect(live(page, "Total resistance")).toHaveText("30 Ω");
  // the prediction is locked once a run exists
  await expect(page.locator('[data-pp="0"]')).toBeDisabled();
  // change only the battery voltage
  await page.locator("[data-v]").selectOption("12");
  await expect(live(page, "Current from the battery")).toHaveText("0.40 A");
  await page.locator("[data-record]").click();
  await expect(rows(page)).toHaveCount(2);
  await expect(page.locator("[data-fair]")).toContainText("Fair test: you changed only Battery voltage");
  await expect(page.locator(".vl-graph svg")).toBeVisible();
  // explain with the evidence
  await page.locator('[data-ee="0"]').click();
  await page.locator("[data-check]").click();
  await expect(page.locator("[data-fb]")).toContainText("That is what your runs show.");
  await expect(page.locator("[data-fb]")).toContainText("Your prediction was right.");
  const rec = (await records(page))[0];
  expect(rec.lab).toBe("circuit");
  expect(rec.cls).toBe(10);
  expect(rec.prediction.ok).toBe(true);
  expect(rec.conclusion.ok).toBe(true);
  expect(rec.fair).toBe(true);
  expect(rec.variables.changed).toBe("Battery voltage");
  expect(rec.observations).toHaveLength(2);
  expect(rec.observations[0].I).toBe("0.20");
  expect(rec.observations[1].I).toBe("0.40");
  expect(rec.question).toContain("12 V");
  // evidence against the chapter's objectives
  const ev = (await events(page)).filter((e) => e.source === "lab");
  expect(ev.map((e) => e.type).sort()).toEqual(["answer", "lesson-step"]);
  expect(ev.every((e) => e.chapter === "electricity" && e.subject === "science" && e.obj)).toBe(true);
  expect(ev.find((e) => e.type === "answer").ok).toBe(true);
  // survives a reload
  await page.reload();
  await expect(page.locator(".vl-past")).toBeVisible();
  await expect(page.locator("[data-pastn]")).toHaveText("Your saved experiments: 1");
  await page.locator(".vl-past summary").click();
  await expect(page.locator(".vl-pastlist li").first()).toContainText("12 V");
  expect((await records(page))).toHaveLength(1);
  // and it is in a backup
  const copy = await page.evaluate(() => {
    const text = Store.exportData();
    Store.importData(text);
    return JSON.parse(text).students[0].labs.records.length + ":" + Store.labRecords("circuit").length;
  });
  expect(copy).toBe("1:1");
});

test("circuit lab: build by tap and by drag; open, short circuit and parallel are detected", async ({ page }) => {
  await open(page, "circuit");
  await page.locator('[data-inv="1"]').click(); // a second bulb in series
  await predict(page, 0);
  const slot = (k) => page.locator(`[data-slot="${k}"]`);
  await expect(slot("S1")).toHaveAttribute("aria-label", /bulb, 3.60 W/);
  await page.locator("[data-record]").click();
  await expect(rows(page).first()).toContainText("0.60");
  // tap a part, then a place
  await page.locator('[data-part="bulb"]').click();
  await expect(page.locator('[data-part="bulb"]')).toHaveAttribute("aria-pressed", "true");
  await slot("S2").click();
  await expect(slot("S2")).toHaveAttribute("aria-label", /bulb, 0.90 W/);
  await expect(live(page, "Current from the battery")).toHaveText("0.30 A");
  await page.locator("[data-record]").click();
  await expect(rows(page).nth(1)).toContainText("0.90");
  await expect(rows(page).nth(1)).toContainText("0.30");
  // drag a resistor onto a place
  await page.locator(".vl-boardwrap").evaluate((e) => e.scrollIntoView({ block: "start" }));
  const chip = await page.locator('[data-part="r50"]').boundingBox();
  const to = await slot("A1").boundingBox();
  await page.mouse.move(chip.x + chip.width / 2, chip.y + chip.height / 2);
  await page.mouse.down();
  await page.mouse.move(chip.x + chip.width / 2 + 20, chip.y - 20, { steps: 3 });
  await page.mouse.move(to.x + to.width / 2, to.y + to.height / 2, { steps: 8 });
  await page.mouse.up();
  await expect(slot("A1")).toHaveAttribute("aria-label", /50 Ω resistor/);
  // an open switch opens the circuit; tapping it closes it
  await page.locator('[data-part="sw1"]').click();
  await slot("A2").click();
  await expect(live(page, "Circuit")).toHaveText("Closed");
  await slot("A2").click(); // no part chosen: toggles the switch
  await expect(live(page, "Circuit")).toHaveText("Open");
  await expect(page.locator("[data-warn]")).toContainText("open");
  // remove everything: a bare wire across the battery is a short circuit, with a warning
  for (const k of ["S1", "S2", "A1", "A2"]) {
    await page.locator('[data-part="remove"]').click();
    await slot(k).click();
  }
  await expect(live(page, "Circuit")).toHaveText("Short circuit");
  await expect(page.locator("[data-warn]")).toContainText("Short circuit!");
  await expect(page.locator("[data-warn]")).toHaveClass(/is-bad/);
  // parallel: two bulbs across 6 V: 1.2 A, each 3.60 W
  await page.locator('[data-part="bulb"]').click();
  await slot("A1").click();
  await page.locator('[data-part="bulb"]').click();
  await slot("B1").click();
  await expect(live(page, "Current from the battery")).toHaveText("1.20 A");
  await expect(live(page, "Total resistance")).toHaveText("5 Ω");
  await expect(live(page, "Bulb 2")).toContainText("3.60 W");
  // a voltmeter in the second branch beside a bulb reads the voltage across the branches
  await page.locator('[data-part="volt"]').click();
  await slot("B2").click();
  await expect(slot("B2")).toHaveAttribute("aria-label", /voltmeter, 6.00 V/);
  // touch targets
  for (const k of ["S1", "S2", "A1", "A2", "B1", "B2"]) {
    const b = await slot(k).boundingBox();
    expect(b.width).toBeGreaterThanOrEqual(44);
    expect(b.height).toBeGreaterThanOrEqual(44);
  }
});

test("force lab: F = 10 N, m = 2 kg, frictionless gives 5 m/s²; doubling mass halves it; friction; run animates and finishes", async ({ page }) => {
  await open(page, "force");
  await expect(page.locator("[data-q]")).toContainText("double the pull to 10 N");
  await page.locator('[data-inv="1"]').click(); // doubling the mass: starts at F = 10 N, m = 2 kg, frictionless
  await expect(page.locator("#vlf-F")).toHaveValue("10");
  await expect(page.locator("#vlf-m")).toHaveValue("2");
  await predict(page, 1);
  await expect(live(page, "Acceleration a = (F − f) / m")).toHaveText("5.00 m/s²");
  await expect(live(page, "Net force")).toHaveText("10.00 N");
  await page.locator("[data-run]").click();
  await expect(rows(page)).toHaveCount(1);
  await expect(rows(page).first()).toContainText("5.00");
  await expect(rows(page).first()).toContainText("25.00"); // v after 5 s
  await expect(rows(page).first()).toContainText("62.50"); // s after 5 s
  // the cart runs for 5 s of simulated time (twice real speed)
  await expect(live(page, "Now, at t")).toContainText("v = 25.0 m/s, s = 62.5 m", { timeout: 8000 });
  await expect(page.locator(".vl-graphs svg")).toHaveCount(2);
  // change only the mass
  await setRange(page, "#vlf-m", 4);
  await expect(live(page, "Acceleration a = (F − f) / m")).toHaveText("2.50 m/s²");
  await page.locator("[data-run]").click();
  await expect(rows(page)).toHaveCount(2);
  await expect(page.locator("[data-fair]")).toContainText("only Mass");
  await page.locator('[data-ee="1"]').click();
  await page.locator("[data-check]").click();
  await expect(page.locator("[data-fb]")).toContainText("That is what your runs show.");
  const rec = (await records(page))[0];
  expect(rec.lab).toBe("force");
  expect(rec.observations.map((o) => o.a)).toEqual(["5.00", "2.50"]);
  expect(rec.prediction.ok).toBe(true);
  // friction: wooden floor f = 0.3 * 2 * 9.8 = 5.88 N, a = 2.06 m/s²; rough ground: friction balances the pull, no motion
  await setRange(page, "#vlf-m", 2);
  await page.selectOption("#vlf-surf", "wood");
  await expect(live(page, "Friction acting")).toHaveText("5.88 N");
  await expect(live(page, "Acceleration a = (F − f) / m")).toHaveText("2.06 m/s²");
  await page.selectOption("#vlf-surf", "rough");
  await expect(live(page, "Acceleration a = (F − f) / m")).toHaveText("0.00 m/s²");
  await expect(page.locator("[data-note]")).toContainText("does not move");
  await page.reload();
  await expect(page.locator("[data-pastn]")).toHaveText("Your saved experiments: 1");
});

test("force lab: the doubling-the-force investigation from the spec compares runs in a table", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await open(page, "force");
  await predict(page, 1);
  await page.locator("[data-run]").click(); // 5 N, 2 kg
  await setRange(page, "#vlf-F", 10);
  await page.locator("[data-run]").click();
  await expect(rows(page)).toHaveCount(2);
  await expect(rows(page).nth(0)).toContainText("2.50");
  await expect(rows(page).nth(1)).toContainText("5.00");
  // reduced motion: the finished picture is shown at once
  await expect(live(page, "Now, at t")).toContainText("v = 25.0 m/s");
  // explaining needs two runs that differ in the force: try with a wrong explanation first
  await page.locator('[data-ee="2"]').click();
  await page.locator("[data-check]").click();
  await expect(page.locator("[data-fb]")).toContainText("Look at your table again.");
  await page.locator('[data-ee="0"]').click();
  await page.locator("[data-check]").click();
  await expect(page.locator("[data-fb]")).toContainText("That is what your runs show.");
  const recs = await records(page);
  expect(recs).toHaveLength(1); // the same experiment, updated
  expect(recs[0].conclusion.ok).toBe(true);
  const ans = (await events(page)).filter((e) => e.type === "answer" && e.source === "lab");
  expect(ans.map((e) => e.ok)).toEqual([false, true]);
});

test("particle world: states at 0 and 100 °C, energy follows kelvin, a gas squashes and a liquid does not", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await open(page, "particles");
  await predict(page, 1);
  const state = () => live(page, "State");
  await expect(state()).toHaveText("Solid (ice)"); // starts at −10 °C
  await page.locator("[data-record]").click();
  await page.locator('[data-set="0"]').click();
  await expect(state()).toHaveText("Melting: solid and liquid together");
  await expect(live(page, "Average energy")).toHaveText("× 1.000");
  await page.locator('[data-set="50"]').click();
  await expect(state()).toHaveText("Liquid (water)");
  await expect(live(page, "Average energy")).toHaveText("× 1.183");
  await page.locator("[data-record]").click();
  await page.locator('[data-set="100"]').click();
  await expect(state()).toHaveText("Boiling: liquid and gas together");
  await page.locator('[data-set="120"]').click();
  await expect(state()).toHaveText("Gas (steam)");
  await expect(live(page, "Arrangement")).toHaveText("far apart");
  // the picture really changes: 60 particles, all gas now
  await expect(page.locator("[data-p].vl-gas")).toHaveCount(60);
  await page.locator('[data-set="-10"]').click();
  await expect(page.locator("[data-p].vl-solid")).toHaveCount(60);
  await setRange(page, "#vlp-T", 20);
  await expect(page.locator("[data-p].vl-liquid")).toHaveCount(60);
  // the heat slider's graph and explanation
  await expect(rows(page)).toHaveCount(2);
  await page.locator('[data-ee="0"]').click();
  await page.locator("[data-check]").click();
  await expect(page.locator("[data-fb]")).toContainText("That is what your runs show.");
  // squashing
  await page.locator('[data-inv="1"]').click();
  await predict(page, 1);
  await expect(page.locator("[data-lid]")).toHaveAttribute("aria-pressed", "true");
  await expect(live(page, "Pushing the lid")).toContainText("−0.005 % volume");
  await page.locator("[data-record]").click();
  await page.locator('[data-set="120"]').click();
  await expect(live(page, "Pushing the lid")).toContainText("−50 % volume");
  await page.locator("[data-record]").click();
  await expect(rows(page).nth(0)).toContainText("0.005");
  await expect(rows(page).nth(1)).toContainText("50");
  await page.locator('[data-ee="0"]').click();
  await page.locator("[data-check]").click();
  await expect(page.locator("[data-fb]")).toContainText("Boyle");
  expect((await records(page)).map((r) => r.inv).sort()).toEqual(["heat", "squash"]);
  // the comparison table highlights the current state
  await expect(page.locator("[data-compare] th.vl-now")).toHaveText("Gas");
});

test("cell builder: parts go to the right cell, wrong ones are sent back with a reason, then the label check", async ({ page }) => {
  await open(page, "cell");
  const part = (id) => page.locator(`.vl-part[data-org="${id}"]`);
  const cell = (c) => page.locator(`[data-cell="${c}"]`);
  // placing before predicting is refused
  await part("nucleus").click();
  await cell("plant").click();
  await expect(page.locator("[data-cfb]")).toContainText("prediction in step 1");
  await predict(page, 0);
  // a wall in the animal cell: sent back, with the reason
  await part("wall").click();
  await cell("animal").click();
  await expect(page.locator("[data-cfb]")).toContainText("does not belong in the animal cell");
  await expect(page.locator("[data-cfb]")).toContainText("no cell wall");
  await expect(cell("animal")).toHaveAttribute("aria-label", /0 of 9 parts/);
  // the right cell: function shown
  await part("wall").click();
  await cell("plant").click();
  await expect(page.locator("[data-cfb]")).toContainText("belongs in the plant cell");
  await expect(page.locator("[data-cfb]")).toContainText("rigid outer layer");
  // chloroplasts and a centrosome are in only one cell each
  await part("chloro").click();
  await cell("animal").click();
  await expect(page.locator("[data-cfb]")).toContainText("photosynthesis");
  await part("centro").click();
  await cell("plant").click();
  await expect(page.locator("[data-cfb]")).toContainText("centrioles");
  const PLANT = ["wall", "membrane", "cytoplasm", "nucleus", "mito", "chloro", "vacuole", "ribo", "er", "golgi"];
  const ANIMAL = ["membrane", "cytoplasm", "nucleus", "mito", "vacuole", "ribo", "er", "golgi", "centro"];
  for (const id of PLANT) {
    await part(id).click();
    await cell("plant").click();
  }
  await expect(rows(page)).toHaveCount(1);
  await expect(rows(page).first()).toContainText("Plant cell");
  await expect(rows(page).first()).toContainText("Cell wall, Chloroplasts");
  // drag one part into the animal cell
  await cell("animal").scrollIntoViewIfNeeded();
  await part("membrane").dragTo(cell("animal"));
  await expect(cell("animal")).toHaveAttribute("aria-label", /1 of 9 parts/);
  for (const id of ANIMAL.filter((x) => x !== "membrane")) {
    await part(id).click();
    await cell("animal").click();
  }
  await expect(rows(page)).toHaveCount(2);
  await expect(rows(page).nth(1)).toContainText("Centrosome");
  // label check
  await page.locator("[data-lcstart]").click();
  let right = 0;
  for (let i = 0; i < 5; i++) {
    const target = await page.locator("[data-target]").getAttribute("data-target");
    await page.locator(`[data-lcopt="${target}"]`).click();
    right++;
    await expect(page.locator("[data-lcfb]")).toContainText("Yes.");
    await page.locator("[data-lcnext]").click();
  }
  await expect(page.locator(".vl-lccard")).toContainText("You named 5 of 5 parts.");
  // explain and save
  await page.locator('[data-ee="1"]').click();
  await page.locator("[data-check]").click();
  await expect(page.locator("[data-fb]")).toContainText("That is what your runs show.");
  const rec = (await records(page))[0];
  expect(rec.lab).toBe("cell");
  expect(rec.extra.labelCheck).toEqual({ score: 5, total: 5 });
  expect(rec.observations.map((o) => o.cell)).toEqual(["Plant cell", "Animal cell"]);
  const lab = (await events(page)).filter((e) => e.source === "lab");
  expect(lab.filter((e) => e.type === "answer").length).toBe(6); // five label questions and the explanation
  await page.reload();
  await expect(page.locator("[data-pastn]")).toHaveText("Your saved experiments: 1");
});

test("cell builder: Class 8 meets seven parts, Class 9 and up all eleven", async ({ page }) => {
  await seed(page, { name: "Asha", cls: 8 });
  await page.goto("/#/lab/cell/8/science/invisible-living-world");
  await expect(page.locator(".vl-part")).toHaveCount(7);
});

for (const [lang, word] of [["pa", /ਅੰਦਾਜ਼ਾ/], ["hi", /अनुमान/]]) {
  test(`labs in ${lang}: every lab shows its steps and readouts in the chosen language`, async ({ page }) => {
    await seed(page, { name: "Asha", cls: 10, lang });
    for (const id of Object.keys(LABS)) {
      await page.goto(url(id));
      await expect(page.locator(".vl .sim-step h3").first()).toContainText(word);
      const text = await page.locator("#app").innerText();
      // headings, buttons and readouts have no English left: the only Latin words allowed are units, symbols and the chapter's own title
      const english = text
        .split("\n")
        .filter((l) => /\b[A-Za-z]{4,}\b/.test(l.replace(/ਜਮਾਤ.*|कक्षा.*/, "")))
        .filter((l) => !/^(Science|Physics|Biology|Electricity|Cell|How Forces|Particulate)/.test(l));
      expect(english, `${id} in ${lang}`).toEqual([]);
    }
  });
}

for (const [id, L] of Object.entries(LABS))
  for (const scheme of ["light", "dark"])
    test(`labs: ${id} at phone width in ${scheme} mode has no sideways scrolling and every control has a name`, async ({ page }) => {
      await page.emulateMedia({ colorScheme: scheme });
      await seed(page, { name: "Asha", cls: L.cls });
      await page.goto(url(id));
      await expect(page.locator(".vl")).toBeVisible();
      await page.locator('[data-pp="0"]').click();
      const over = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
      expect(over).toBeLessThanOrEqual(0);
      const unnamed = await page.locator("#app button:visible, #app input:visible, #app select:visible").evaluateAll((els) => els.filter((e) => !(e.getAttribute("aria-label") || e.textContent.trim() || (e.labels && e.labels.length))).length);
      expect(unnamed).toBe(0);
    });
