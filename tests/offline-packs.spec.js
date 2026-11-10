// Offline packs (#/offline, website only): choose board, classes and subjects, save with progress, see what is saved.
const { test, expect, seed } = require("./helpers");

test("offline packs: save one class with chosen subjects, see progress and the saved state", async ({ page }) => {
  await seed(page, { name: "Asha", cls: 9 });
  await page.goto("/#/offline");
  const box = page.locator("#packs");
  await expect(box.locator("[data-board=cbse]")).toHaveClass(/on/);
  await expect(box.locator("[data-cls='9']")).toHaveClass(/on/);
  // One class: its subjects can be chosen.
  const subs = box.locator("[data-subj]");
  expect(await subs.count()).toBeGreaterThan(3);
  const all = await box.locator("[data-act=save]").textContent();
  await subs.nth(1).uncheck();
  const fewer = await box.locator("[data-act=save]").textContent();
  expect(Number(/(\d+) files/.exec(fewer)[1])).toBeLessThan(Number(/(\d+) files/.exec(all)[1]));
  await box.locator("[data-act=save]").click();
  await expect(box.locator("#pack-progress")).toContainText(/Done: \d+ files, [\d.]+ MB\./, { timeout: 30000 });
  // The files are in the data cache that app updates keep.
  const n = await page.evaluate(async () => (await (await caches.open("pocket-class-data")).keys()).length);
  expect(n).toBeGreaterThan(5);
  // Class 9 shows as partly saved (one subject was left out) with today's date.
  await expect(box.locator("[data-status='9'] [data-st]")).toContainText("Partly saved");
  await expect(box.locator("[data-status='9']")).toContainText("saved");
});

test("offline packs: two classes save every subject, failed files can be retried", async ({ page, issues }) => {
  issues.allow(/ERR_FAILED|Failed to load resource|class3\/maths\.js/);
  await seed(page, { name: "Asha", cls: 9 });
  await page.goto("/#/offline");
  const box = page.locator("#packs");
  await box.locator("[data-cls='3']").click();
  await expect(box.locator("[data-subj]")).toHaveCount(0);
  await expect(box).toContainText("Every subject of the chosen classes is saved");
  // One file fails: the page says so and offers Try again, which then saves it.
  let fail = true;
  await page.route("**/data/class3/maths.js", (route) => (fail ? route.abort() : route.continue()));
  await box.locator("[data-act=save]").click();
  await expect(box.locator("#pack-progress")).toContainText("couldn't be saved", { timeout: 30000 });
  fail = false;
  await box.locator("[data-act=retry]").click();
  await expect(box.locator("#pack-progress")).toContainText(/Done: 1 files/, { timeout: 30000 });
  await expect(box.locator("[data-status='3'] [data-st]")).toHaveText("Saved");
  await expect(box.locator("[data-status='9'] [data-st]")).toHaveText("Saved");
});

test("offline packs: PSEB lists its own subjects", async ({ page }) => {
  await seed(page, { name: "Asha", cls: 9 });
  await page.goto("/#/offline");
  const box = page.locator("#packs");
  await box.locator("[data-board=pseb]").click();
  await expect(box.locator("[data-board=pseb]")).toHaveClass(/on/);
  const names = await box.locator(".check-list span").allTextContents();
  expect(names.join(" ")).toMatch(/PSEB|Punjab/i);
});
