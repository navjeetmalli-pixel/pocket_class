const { test, expect, seed, readStore, current } = require("./helpers");

// Biology labs (js/labs/foodweb.js, js/labs/body.js): the food-web rescue and the body systems explorer.
// Both follow predict -> change one variable -> observe -> explain, save an experiment record that survives a reload,
// and are listed in Explore and in the chapter hub's Explore section.

const WEB = { cls: 10, subject: "science", chapter: "our-environment" };
const BODY = { cls: 7, subject: "science", chapter: "life-processes-in-animals" };
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
const link = async (page, food, eater) => {
  await page.locator(`.fw-chip[data-org="${food}"]`).click();
  await page.locator(`.fw-chip[data-org="${eater}"]`).click();
};
const num = async (loc) => Number(((await loc.textContent()) || "").match(/^-?[\d.]+/)[0]);
const CHAIN = [["grass", "hopper"], ["hopper", "frog"], ["frog", "snake"], ["snake", "eagle"]];
const buildChain = async (page) => {
  for (const [f, e] of CHAIN) await link(page, f, e);
};

test("explore: both biology labs are listed under the Biology Explorer and open", async ({ page }) => {
  await seed(page, { name: "Asha", cls: 10 });
  await page.goto("/#/explore");
  await expect(page.locator("#area-biology")).toContainText("Food-web rescue");
  await expect(page.locator("#area-biology")).toContainText("Body systems explorer");
  await page.locator('[data-explore="lab-foodweb"]').getByRole("link", { name: /Open lab/ }).first().click();
  await expect(page).toHaveURL(/#\/lab\/foodweb\//);
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Food-web rescue");
  await expect(page.locator(".vl .sim-step h3")).toHaveCount(4);
});

test("explore: Class 7 sees the body explorer but not the food web; Class 8 sees the food web", async ({ page }) => {
  await seed(page, { name: "Asha", cls: 7 });
  await page.goto("/#/explore");
  await expect(page.locator('[data-explore="lab-body"]')).toBeVisible();
  await expect(page.locator('[data-explore="lab-foodweb"]')).toHaveCount(0);
  expect(await page.evaluate(() => Labs.forChapter(8, "science", "how-nature-works-in-harmony").map((l) => l.id))).toEqual(["foodweb"]);
});

test("chapter hub: the Class 10 Our environment chapter lists the food web and opens it", async ({ page }) => {
  await seed(page, { name: "Asha", cls: 10 });
  await page.goto("/#/chapter/10/science/our-environment/explore");
  const card = page.locator(".lab-card").filter({ hasText: "Food-web rescue" });
  await expect(card).toBeVisible();
  await card.click();
  await expect(page).toHaveURL(/#\/lab\/foodweb\/10\/science\/our-environment$/);
  await expect(page.locator(".vl")).toBeVisible();
  expect(await page.evaluate(() => Labs.forChapter(10, "science", "our-environment").map((l) => l.id))).toEqual(["foodweb"]);
  expect(await page.evaluate(() => Labs.forChapter(12, "biology", "ecosystem").map((l) => l.id))).toEqual(["foodweb"]);
  expect(await page.evaluate(() => Labs.forChapter(11, "biology", "body-fluids-and-circulation").map((l) => l.id))).toEqual(["body"]);
  expect(await page.evaluate(() => Labs.forChapter(10, "science", "life-processes").map((l) => l.id))).toEqual(["body"]);
});

test("food web: grass, grasshopper, frog, snake, eagle makes five trophic levels; wrong links are explained", async ({ page }) => {
  await open(page, "foodweb", WEB);
  await expect(page.locator("[data-level]")).toHaveCount(0);
  await link(page, "grass", "hopper");
  await expect(page.locator("[data-fb2]")).toContainText("energy flows from Grass to Grasshopper");
  await expect(page.locator('[data-level="1"]')).toContainText("Grass");
  await expect(page.locator('[data-level="2"]')).toContainText("Grasshopper");
  // the wrong way round, a herbivore eating an animal, a plant eating, a predator eating a plant
  await link(page, "hopper", "grass");
  await expect(page.locator("[data-fb2]")).toContainText("The arrow points from the food to the one that eats it");
  await link(page, "frog", "rabbit");
  await expect(page.locator("[data-fb2]")).toContainText("Rabbit is a herbivore");
  await link(page, "hopper", "grass");
  await link(page, "grass", "snake");
  await expect(page.locator("[data-fb2]")).toContainText("Snake is a carnivore");
  await link(page, "snake", "frog");
  await expect(page.locator("[data-fb2]")).toContainText("Snake eats Frog, so the arrow goes from Frog to Snake");
  await expect(page.locator("[data-links] li[data-link]")).toHaveCount(1);
  for (const [f, e] of CHAIN.slice(1)) await link(page, f, e);
  await expect(page.locator("[data-level]")).toHaveCount(5);
  await expect(page.locator('[data-level="5"]')).toContainText("Level 5 · Quaternary consumer");
  await expect(page.locator('[data-level="5"]')).toContainText("Eagle");
  await expect(page.locator('[data-level="3"]')).toContainText("Frog");
  await expect(page.locator("[data-summary]")).toContainText("5 trophic levels");
  await expect(page.locator('[data-node="eagle"]')).toHaveCount(1);
  await expect(page.locator(".fw-edge")).toHaveCount(4);
  // a link can be removed
  await page.getByRole("button", { name: /Remove the link Snake → Eagle/ }).click();
  await expect(page.locator("[data-level]")).toHaveCount(4);
  await link(page, "snake", "eagle");
  await expect(page.locator("[data-level]")).toHaveCount(5);
  // decomposers
  await link(page, "frog", "decomp");
  await expect(page.locator("[data-links]")).toContainText("Frog → Decomposers (when it dies)");
  await expect(page.locator("[data-level]")).toHaveCount(5);
});

test("food web: a small fish eats at two levels, and the pond shows it", async ({ page }) => {
  await open(page, "foodweb", WEB);
  await page.locator("[data-hab]").selectOption("pond");
  await link(page, "phyto", "zoo");
  await link(page, "zoo", "sfish");
  await link(page, "phyto", "sfish");
  await link(page, "sfish", "king");
  await expect(page.locator('[data-level="3"]')).toContainText("Small fish");
  await expect(page.locator('[data-level="3"]')).toContainText("also level 2");
  await expect(page.locator('[data-level="4"]')).toContainText("Kingfisher");
  await page.locator("[data-fwhint]").click();
  await expect(page.locator("[data-fb2]")).toContainText("Hint: what does the");
  await page.locator("[data-fwfill]").click();
  await expect(page.locator("[data-summary]")).toContainText("4 trophic levels");
  await expect(page.locator(".fw-band")).toHaveCount(1);
});

test("food web: remove the frogs, run the seasons, and the grasshoppers rise while the snakes fall; the record survives a reload", async ({ page }) => {
  await open(page, "foodweb", WEB);
  // nothing to run before there is a web
  await expect(page.locator("[data-need]")).toBeVisible();
  await buildChain(page);
  await expect(page.locator("[data-need]")).toBeHidden();
  // the prediction comes first
  await expect(page.locator("[data-record]")).toBeDisabled();
  await page.locator('[data-pp="0"]').click();
  await expect(page.locator("[data-record]")).toBeEnabled();
  // a control run with no change
  await expect(page.locator("[data-pick]")).toHaveValue("frog");
  await page.locator('[data-act="none"]').click();
  await page.locator('[data-season="5"]').click();
  await expect(live(page, "Grasshopper")).toHaveText("100 · steady");
  await expect(live(page, "Snake")).toHaveText("100 · steady");
  await page.locator("[data-record]").click();
  await expect(rows(page)).toHaveCount(1);
  // remove the frogs
  await page.locator('[data-act="remove"]').click();
  await expect(live(page, "Frog")).toHaveText("0 · none left");
  await page.locator('[data-season="1"]').click();
  await expect(live(page, "Season")).toHaveText("1");
  expect(await num(live(page, "Grasshopper"))).toBeGreaterThan(100);
  expect(await num(live(page, "Snake"))).toBeLessThan(100);
  await page.locator('[data-season="5"]').click();
  await expect(live(page, "Season")).toHaveText("6");
  await expect(page.locator('[data-season="1"]')).toBeDisabled();
  await expect(live(page, "Grasshopper")).toContainText("rising");
  await expect(live(page, "Snake")).toContainText("falling");
  expect(await num(live(page, "Grasshopper"))).toBeGreaterThan(100);
  expect(await num(live(page, "Snake"))).toBeLessThan(100);
  await page.locator("[data-record]").click();
  await expect(rows(page)).toHaveCount(2);
  await expect(rows(page).nth(1)).toContainText("Frog removed");
  await expect(rows(page).nth(1)).toContainText("Grasshopper");
  await expect(rows(page).nth(1)).toContainText("Snake");
  await page.locator('[data-ee="0"]').click();
  await page.locator("[data-check]").click();
  await expect(page.locator("[data-fb]")).toContainText("That is what your runs show.");
  const rec = (await records(page)).find((r) => r.lab === "foodweb");
  expect(rec.prediction.ok).toBe(true);
  expect(rec.conclusion.ok).toBe(true);
  expect(rec.variables.changed).toBe("Change made");
  expect(rec.observations.map((o) => o.change)).toEqual(["No change (control)", "Frog removed"]);
  expect(rec.extra.levels).toBe(5);
  expect(rec.cls).toBe(10);
  await page.reload();
  await expect(page.locator("[data-pastn]")).toContainText("1");
});

test("food web: doubling a population has the opposite effect on its food and its eaters", async ({ page }) => {
  await open(page, "foodweb", WEB);
  await buildChain(page);
  await inv(page, 1);
  await page.locator("[data-pick]").selectOption("hopper");
  await page.locator('[data-act="double"]').click();
  await expect(live(page, "Grasshopper")).toContainText("200");
  await page.locator('[data-season="1"]').click();
  expect(await num(live(page, "Grass"))).toBeLessThan(100);
  expect(await num(live(page, "Frog"))).toBeGreaterThan(100);
});

test("food web: 10,000 J in the producers leaves 1 J for the eagle (the 10% law)", async ({ page }) => {
  await open(page, "foodweb", WEB);
  await buildChain(page);
  await inv(page, 2);
  await page.locator('[data-pp="2"]').click();
  await expect(page.locator("[data-e1]")).toHaveValue("10000");
  const tr = (n) => page.locator(`[data-elevel="${n}"]`);
  await expect(tr(1).locator("[data-ej]")).toHaveText("10,000");
  await expect(tr(2).locator("[data-ej]")).toHaveText("1,000");
  await expect(tr(3).locator("[data-ej]")).toHaveText("100");
  await expect(tr(4).locator("[data-ej]")).toHaveText("10");
  await expect(tr(5).locator("[data-ej]")).toHaveText("1");
  await expect(tr(5)).toContainText("Eagle");
  await expect(live(page, "Level 5 · Eagle")).toHaveText("1 J");
  await page.locator("[data-lv]").selectOption("5");
  await expect(page.locator("[data-other]")).toContainText("about 1 J passes on");
  await page.locator("[data-erecord]").click();
  await page.locator("[data-lv]").selectOption("2");
  await page.locator("[data-erecord]").click();
  await expect(rows(page)).toHaveCount(2);
  await expect(rows(page).nth(0)).toContainText("Eagle");
  await expect(rows(page).nth(0)).toContainText("10,000");
  await expect(page.locator("[data-graph] svg")).toBeVisible();
  // a different amount of energy
  await page.locator("[data-e1]").selectOption("1000");
  await expect(tr(5).locator("[data-ej]")).toHaveText("0.1");
  await page.locator('[data-ee="0"]').click();
  await page.locator("[data-check]").click();
  await expect(page.locator("[data-fb]")).toContainText("That is what your runs show.");
  const rec = (await records(page)).find((r) => r.lab === "foodweb" && r.inv === "energy");
  expect(rec.observations[0].energy).toBe("1");
  expect(rec.observations[0].level).toBe("5");
  expect(rec.prediction.ok).toBe(true);
});

test("food web: without decomposers dead remains pile up and the producers fall", async ({ page }) => {
  await open(page, "foodweb", WEB);
  await page.locator("[data-fwfill]").click();
  await inv(page, 3);
  await page.locator('[data-pp="1"]').click();
  await page.locator('[data-season="5"]').click();
  await expect(live(page, "Dead remains piled up")).toHaveText("0");
  await page.locator("[data-record]").click();
  await page.locator('[data-dec="0"]').click();
  await expect(page.locator('[data-dec="0"]')).toHaveAttribute("aria-pressed", "true");
  await page.locator('[data-season="5"]').click();
  await expect(live(page, "Dead remains piled up")).toHaveText("50");
  await expect(live(page, "Nutrients in the soil")).toHaveText("38 %");
  expect(await num(live(page, "Grass"))).toBeLessThan(100);
  await page.locator("[data-record]").click();
  await expect(rows(page)).toHaveCount(2);
  await expect(rows(page).nth(1)).toContainText("Removed");
  await page.locator('[data-ee="0"]').click();
  await page.locator("[data-check]").click();
  await expect(page.locator("[data-fb]")).toContainText("That is what your runs show.");
  await expect(page.locator(".vl-assume")).toContainText("simplified model");
});

test("food web: Punjabi shows the lab in Punjabi", async ({ page }) => {
  await open(page, "foodweb", WEB, { lang: "pa" });
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("ਭੋਜਨ ਜਾਲ ਬਚਾਓ");
  await link(page, "grass", "hopper");
  await expect(page.locator('[data-level="2"]')).toContainText("ਟਿੱਡਾ");
  await expect(page.locator("[data-summary]")).toContainText("ਪੋਸ਼ੀ ਪੱਧਰ");
});

test("body explorer: tap an organ for its name and job, with the mouse and with the keyboard", async ({ page }) => {
  await open(page, "body", BODY);
  await expect(page.locator('[data-layer="digestive"]')).toHaveAttribute("aria-checked", "true");
  await page.locator('[data-organ="stomach"]').click();
  await expect(page.locator("[data-info]")).toContainText("Stomach");
  await expect(page.locator("[data-info]")).toContainText("Churns the food");
  await page.locator('[data-pickorgan="liver"]').click();
  await expect(page.locator("[data-info]")).toContainText("Makes bile");
  await page.locator('[data-layer="circulatory"]').click();
  await expect(page.locator('[data-organ="heart"]')).toBeVisible();
  await expect(page.locator('[data-organ="stomach"]')).toHaveCount(0);
  await page.locator('[data-organ="heart"]').focus();
  await page.keyboard.press("Enter");
  await expect(page.locator("[data-info]")).toContainText("A muscular pump");
  for (const [layer, organ] of [["respiratory", "lungs"], ["excretory", "kidneys"], ["nervous", "brain"]]) {
    await page.locator(`[data-layer="${layer}"]`).click();
    await page.locator(`[data-organ="${organ}"]`).click();
    await expect(page.locator("[data-info]")).not.toContainText("Tap an organ");
  }
  // no reproductive system
  await expect(page.locator(".bd-tabs")).not.toContainText(/reproduct/i);
});

test("body explorer: the journey of food in the right order passes, a wrong order is corrected; then the blood circuit; the record survives a reload", async ({ page }) => {
  await open(page, "body", BODY);
  // the prediction comes first
  await page.locator('[data-jstop="mouth"]').click();
  await expect(page.locator("[data-jfb]")).toContainText("Make your prediction in step 1 first.");
  await expect(rows(page)).toHaveCount(0);
  await page.locator('[data-pp="0"]').click();
  await page.locator('[data-jstop="mouth"]').click();
  await expect(page.locator("[data-jfb]")).toContainText("Mouth");
  // too soon, then a distractor, then the right ones
  await page.locator('[data-jstop="stomach"]').click();
  await expect(page.locator("[data-jfb]")).toContainText("Before the Stomach comes the Oesophagus (food pipe)");
  await page.locator('[data-jstop="liver"]').click();
  await expect(page.locator("[data-jfb]")).toContainText("Food does not pass through the liver");
  await page.locator('[data-jstop="mouth"]').click();
  await expect(page.locator("[data-jfb]")).toContainText("already been through the Mouth");
  for (const id of ["oesophagus", "stomach", "sintest", "lintest"]) await page.locator(`[data-jstop="${id}"]`).click();
  await expect(rows(page)).toHaveCount(0);
  await expect(page.locator("[data-jdone-list] li")).toHaveCount(5);
  await expect(page.locator(".bd-badge")).toHaveCount(5);
  await page.locator('[data-jstop="rectum"]').click();
  await expect(rows(page)).toHaveCount(1);
  await expect(rows(page).first()).toContainText("Mouth → Oesophagus (food pipe) → Stomach → Small intestine → Large intestine → Rectum and anus");
  await expect(rows(page).first()).toContainText("Journey of food");
  await expect(live(page, "Journey of food")).toContainText("finished, 3 wrong taps");
  // blood: lungs, heart, body, heart
  await page.locator('[data-jid="blood"]').click();
  await expect(page.locator('[data-layer="circulatory"]')).toHaveAttribute("aria-checked", "true");
  await page.locator('[data-jstop="heart"]').click();
  await expect(page.locator("[data-jfb]")).toContainText("Before the Heart comes the Lungs");
  for (const id of ["lungs", "heart", "body"]) await page.locator(`[data-jstop="${id}"]`).click();
  await page.locator('[data-jstop="lungs"]').click();
  await expect(page.locator("[data-jfb]")).toContainText("already been through the Lungs");
  await page.locator('[data-jstop="heart"]').click();
  await expect(rows(page)).toHaveCount(2);
  await expect(rows(page).nth(1)).toContainText("Lungs → Heart → Body organs → Heart");
  await expect(page.locator("[data-fair]")).toContainText("Fair test");
  await page.locator('[data-ee="0"]').click();
  await page.locator("[data-check]").click();
  await expect(page.locator("[data-fb]")).toContainText("That is what your runs show.");
  const rec = (await records(page)).find((r) => r.lab === "body");
  expect(rec.prediction.ok).toBe(true);
  expect(rec.conclusion.ok).toBe(true);
  expect(rec.observations[0].journey).toBe("Journey of food");
  expect(rec.observations[0].mistakes).toBe("3");
  expect(rec.observations[1].route).toBe("Lungs → Heart → Body organs → Heart");
  expect(rec.cls).toBe(7);
  expect(rec.extra.journeys).toEqual(["food", "blood"]);
  await page.reload();
  await expect(page.locator("[data-pastn]")).toContainText("1");
});

test("body explorer: the journey of air, and a restart", async ({ page }) => {
  await open(page, "body", BODY);
  await page.locator('[data-pp="0"]').click();
  await page.locator('[data-jid="air"]').click();
  await expect(page.locator('[data-layer="respiratory"]')).toHaveAttribute("aria-checked", "true");
  await page.locator('[data-jstop="nose"]').click();
  await page.locator('[data-jstop="diaphragm"]').click();
  await expect(page.locator("[data-jfb]")).toContainText("Air does not pass through the diaphragm");
  await page.locator("[data-jreset]").click();
  await expect(page.locator("[data-jdone-list] li")).toHaveCount(0);
  for (const id of ["nose", "trachea", "bronchi", "lungs"]) await page.locator(`[data-jstop="${id}"]`).click();
  await expect(rows(page)).toHaveCount(1);
  await expect(rows(page).first()).toContainText("Journey of air");
  await expect(page.locator("[data-jq]")).toContainText("The air has reached the lungs");
});

test("body explorer: matching organs with their jobs, wrong matches are explained", async ({ page }) => {
  await open(page, "body", BODY);
  await inv(page, 1);
  await page.locator('[data-pp="0"]').click();
  // heart with the wrong job
  await page.locator('[data-layer="circulatory"]').click();
  await page.locator('[data-morg="heart"]').click();
  await page.locator('[data-mjob="arteries"]').click();
  await expect(page.locator("[data-mfb]")).toContainText("That is not the job of the Heart.");
  await page.locator('[data-mjob="heart"]').click();
  for (const id of ["arteries", "veins", "capillaries"]) {
    await page.locator(`[data-morg="${id}"]`).click();
    await page.locator(`[data-mjob="${id}"]`).click();
  }
  await expect(page.locator("[data-mfb]")).toContainText("All the organs of the Circulatory system are matched.");
  await expect(rows(page)).toHaveCount(1);
  await page.locator('[data-layer="nervous"]').click();
  for (const id of ["brain", "cord", "nerves"]) {
    await page.locator(`[data-morg="${id}"]`).click();
    await page.locator(`[data-mjob="${id}"]`).click();
  }
  await expect(rows(page)).toHaveCount(2);
  await expect(rows(page).nth(0)).toContainText("Circulatory system");
  await expect(rows(page).nth(0)).toContainText("4");
  await page.locator('[data-ee="0"]').click();
  await page.locator("[data-check]").click();
  await expect(page.locator("[data-fb]")).toContainText("That is what your runs show.");
  const rec = (await records(page)).find((r) => r.lab === "body" && r.inv === "match");
  expect(rec.observations.map((o) => o.system)).toEqual(["Circulatory system", "Nervous system"]);
  expect(rec.observations[0].wrong).toBe("1");
  expect(rec.extra.systems).toEqual(["circulatory", "nervous"]);
});

test("body explorer: Punjabi shows the organs in Punjabi", async ({ page }) => {
  await open(page, "body", BODY, { lang: "pa" });
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("ਸਰੀਰ ਦੇ ਤੰਤਰ ਖੋਜੀ");
  await page.locator('[data-organ="stomach"]').click();
  await expect(page.locator("[data-info]")).toContainText("ਮਿਹਦਾ");
});
