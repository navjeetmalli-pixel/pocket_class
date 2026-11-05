const { test, expect, seed, chaptersOf } = require("./helpers");

const BAND = { 1: "1-2", 4: "3-5", 7: "6-8", 9: "9-10", 12: "11-12" };

// A fresh page (own storage seed) for each class.
async function pageFor(browser, cls) {
  const ctx = await browser.newContext();
  const page = await ctx.newPage();
  await seed(page, { name: "Riya", cls });
  return page;
}

test("age bands: body[data-band] follows the class", async ({ browser }) => {
  for (const [cls, band] of Object.entries(BAND)) {
    const page = await pageFor(browser, Number(cls));
    await page.goto("/");
    await expect(page.locator("body")).toHaveAttribute("data-band", band);
    await page.context().close();
  }
});

for (const cls of [9, 12]) {
  test(`age bands: Class ${cls} Today has the exam row with working links`, async ({ browser }) => {
    const page = await pageFor(browser, cls);
    await page.goto("/");
    const row = page.locator(".exam-row");
    await expect(row).toBeVisible();
    for (const href of ["#/test", "#/papers", "#/revise", "#/revise/mistakes"]) await expect(row.locator(`a[href="${href}"]`)).toBeVisible();
    await row.locator('a[href="#/revise/mistakes"]').click();
    await expect(page).toHaveURL(/#\/revise\/mistakes$/);
    await page.context().close();
  });
}

test("age bands: Classes 1, 4 and 7 have no exam row", async ({ browser }) => {
  for (const cls of [1, 4, 7]) {
    const page = await pageFor(browser, cls);
    await page.goto("/");
    await expect(page.locator("body")).toHaveAttribute("data-band", BAND[cls]);
    await expect(page.locator(".exam-row")).toHaveCount(0);
    await page.context().close();
  }
});

test("age bands: Class 1 quiz options are at least 64px high", async ({ browser }) => {
  const page = await pageFor(browser, 1);
  const ch = chaptersOf(1, "maths")[0];
  await page.goto(`/#/chapter/1/maths/${ch.id}/master`);
  const opt = page.locator(".options .option").first();
  await expect(opt).toBeVisible();
  expect(await opt.evaluate((e) => parseFloat(getComputedStyle(e).minHeight))).toBeGreaterThanOrEqual(64);
  expect((await opt.boundingBox()).height).toBeGreaterThanOrEqual(64);
  await page.context().close();
});

test("age bands: chapter summaries show in 3-5 and are hidden in 1-2", async ({ browser }) => {
  const p4 = await pageFor(browser, 4);
  await p4.goto("/#/subject/maths");
  await expect(p4.locator(".chapter-row .ch-sum").first()).toBeVisible();
  const p1 = await pageFor(browser, 1);
  await p1.goto("/#/subject/maths");
  await expect(p1.locator(".chapter-row").first()).toBeVisible();
  await expect(p1.locator(".chapter-row .ch-sum").first()).toBeHidden();
  await p4.context().close();
  await p1.context().close();
});

test("age bands: no band changes the tab routes", async ({ browser }) => {
  const seen = {};
  for (const cls of [1, 4, 7, 9, 12]) {
    const page = await pageFor(browser, cls);
    await page.goto("/");
    await expect(page.locator("body")).toHaveAttribute("data-band", BAND[cls]);
    seen[cls] = await page.locator(".tabbar a, .sidebar a").evaluateAll((as) => as.map((a) => a.getAttribute("href")).filter(Boolean));
    await page.context().close();
  }
  expect(seen[1].length).toBeGreaterThanOrEqual(5);
  for (const cls of [4, 7, 9, 12]) expect(seen[cls]).toEqual(seen[1]);
});
