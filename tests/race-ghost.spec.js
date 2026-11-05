// Mental-maths race: "Beat your best" ghost. The clock and random source are fixed (as in maths-games.spec.js) so the round is known.
const { test, expect, seed, readStore, current } = require("./helpers");

const T0 = 1_700_000_000_000;
const SEED = (T0 ^ Math.floor(0.25 * 1e9)) >>> 0;
const CH = "multiplication-tables";
const KEY = `3/maths/${CH}`;

async function open(page, student) {
  await page.addInitScript(({ T0 }) => {
    Date.now = () => T0;
    Math.random = () => 0.25;
  }, { T0 });
  await seed(page, { cls: 3, student });
  await page.goto(`/#/play/3/maths/${CH}/race`);
  await expect(page.locator(".game-intro")).toBeVisible();
}
const roundOf = (page) =>
  page.evaluate(({ SEED, CH }) => Games.get("race").build(3, StudyData.subject("maths"), StudyData.chapters(3, "maths").find((c) => c.id === CH), SEED), { SEED, CH });

async function runRace(page, data) {
  await page.locator("[data-g=start]").click();
  await expect(page.locator(".game-hud")).toBeVisible();
  for (let i = 0; i < data.target; i++) {
    const it = data.items[i % data.items.length];
    await expect(page.locator("#rc-q")).toHaveText(it.q);
    await page.locator(`.race-opts .option[data-i="${it.answer}"]`).click();
    if (i < data.target - 1) await page.waitForTimeout(450);
  }
  await expect(page.locator(".game-result")).toBeVisible();
}
const ghostOf = (n, secs) => ({ games: { [KEY]: { race: { best: 100, stars: 3, plays: 1, at: 1, ghost: Array.from({ length: n }, () => secs) } } } });

test("race: with no ghost yet the intro says so, there is no ghost runner, and a first race saves one", async ({ page }) => {
  await open(page);
  await expect(page.locator(".game-note")).toContainText("Finish a race to set a ghost to beat.");
  const data = await roundOf(page);
  await runRace(page, data);
  await expect(page.locator(".race-ghost")).toHaveCount(0);
  const g = current(await readStore(page)).games[KEY].race;
  expect(g.ghost).toHaveLength(data.target);
  expect(g.ghost.every((x) => typeof x === "number")).toBe(true);
});

test("race: with a saved ghost the track shows it, and beating it is said on the results", async ({ page }) => {
  await open(page, ghostOf(12, 50));
  await expect(page.locator(".game-note")).toContainText("you reached the flag in 50 s");
  const data = await roundOf(page);
  await page.locator("[data-g=start]").click();
  await expect(page.locator(".race-ghost")).toHaveCount(1);
  await expect(page.locator(".race-ghost")).toHaveAttribute("aria-hidden", "true");
  await expect(page.locator(".race-ghost-line")).toContainText("Level with your best");
  await page.getByRole("button", { name: "Pause" }).click();
  await page.getByRole("link", { name: "Quit game" }).click();
  await page.goto(`/#/play/3/maths/${CH}/race`);
  await page.locator("[data-g=start]").click();
  for (let i = 0; i < data.target; i++) {
    const it = data.items[i % data.items.length];
    await expect(page.locator("#rc-q")).toHaveText(it.q);
    await page.locator(`.race-opts .option[data-i="${it.answer}"]`).click();
    if (i < data.target - 1) await page.waitForTimeout(450);
  }
  await expect(page.locator(".game-result")).toContainText("You beat your best run!");
  expect(current(await readStore(page)).games[KEY].race.ghost[0]).toBeLessThan(50);
});

test("race: a ghost that is as fast is not beaten, and is kept", async ({ page }) => {
  await open(page, ghostOf(12, 0));
  const data = await roundOf(page);
  await runRace(page, data);
  await expect(page.locator(".game-result")).toContainText("Your best run is still ahead. Try again!");
  expect(current(await readStore(page)).games[KEY].race.ghost).toHaveLength(12);
});

test("race: old saved data without a ghost still works", async ({ page }) => {
  await open(page, { games: { [KEY]: { race: { best: 50, stars: 2, plays: 1, at: 1 } } } });
  await expect(page.locator(".game-note")).toContainText("Finish a race to set a ghost to beat.");
});
