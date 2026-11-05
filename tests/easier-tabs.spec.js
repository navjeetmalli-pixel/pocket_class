const { test, expect, seed } = require("./helpers");

const PHONE = { width: 390, height: 844 };
const inFirstScreen = async (page, loc) => {
  const box = await loc.boundingBox();
  expect(box, "element is drawn").toBeTruthy();
  // The tab bar is 64px tall at the bottom: the whole button must clear it.
  expect(box.y + box.height).toBeLessThanOrEqual(PHONE.height - 64);
  expect(box.y).toBeGreaterThanOrEqual(0);
};

test("today: one Start card opens the next plan item", async ({ page }) => {
  await seed(page, { name: "Asha", cls: 7 });
  await page.goto("/#/");
  const card = page.locator("#start-card");
  await expect(card).toHaveCount(1);
  await expect(card).toContainText("Start");
  const href = await card.getAttribute("href");
  const first = await page.locator("#plan .plan-item").first().getAttribute("href");
  expect(href).toBe(first);
  await expect(page.locator("#plan .plan-count")).toHaveText(/^0 of \d+$/);
  await card.click();
  await expect(page).toHaveURL(new RegExp(href.replace(/[.*+?^${}()|[\]\\/]/g, "\\$&")));
});

test("learn: Class 2 has no view switch or search and shows subjects first; Class 7 has them", async ({ page }) => {
  await seed(page, { name: "Mini", cls: 2 });
  await page.goto("/#/learn");
  await expect(page.locator(".learn-seg")).toHaveCount(0);
  await expect(page.locator(".search-link")).toHaveCount(0);
  await expect(page.locator(".subject-card").first()).toBeVisible();
  await expect(page.locator(".class-line")).toHaveAttribute("href", "#/profile");
  const top = (await page.locator(".subject-card").first().boundingBox()).y;
  expect(top).toBeLessThan(260);
});

test("learn: Class 7 keeps the switch and search", async ({ page }) => {
  await seed(page, { name: "Asha", cls: 7 });
  await page.goto("/#/learn");
  await expect(page.locator(".learn-seg")).toBeVisible();
  await expect(page.locator(".search-link")).toBeVisible();
  await expect(page.locator(".subject-card").first()).toBeVisible();
});

test("play: Play again shows the last game played", async ({ page }) => {
  const { chaptersOf } = require("./helpers");
  const maths = chaptersOf(7, "maths")[0].id;
  await seed(page, { name: "Asha", cls: 7, student: { games: { [`7/maths/${maths}`]: { match: { best: 40, stars: 2, plays: 1, at: Date.now() } } }, chapters: { [`7/maths/${maths}`]: { opened: Date.now() } } } });
  await page.goto("/#/games");
  await expect(page.getByRole("heading", { name: "Play again" })).toBeVisible();
  await expect(page.locator(".again-row .game-tile")).toHaveCount(1);
  await page.locator(".again-row .game-tile").click();
  await expect(page).toHaveURL(new RegExp(`#/play/7/maths/${maths}/match$`));
  // With nothing played there is no such row.
  await page.evaluate(() => { Store.state.games = {}; });
  await page.goto("/#/games");
  await expect(page.getByRole("heading", { name: "Play again" })).toHaveCount(0);
  await expect(page.locator('[data-act="random"]')).toBeVisible();
});

test("explore: no repeated chapter buttons, and each lab card has one Try it that opens a lab", async ({ page }) => {
  await seed(page, { name: "Asha", cls: 10 });
  await page.goto("/#/explore");
  const cards = page.locator(".explore-item");
  expect(await cards.count()).toBeGreaterThan(3);
  await expect(page.locator(".ex-row")).toHaveCount(0);
  await expect(page.getByRole("link", { name: /^Chapter$/ })).toHaveCount(0);
  await expect(page.getByText("Open lab")).toHaveCount(0);
  for (const c of await cards.all()) await expect(c.locator(".btn")).toHaveCount(1);
  const lab = page.locator('[data-explore^="lab-"]').first();
  await expect(lab.locator(".btn")).toContainText("Try it");
  const words = (await lab.locator(".ex-line").innerText()).split(/\s+/).length;
  expect(words).toBeLessThanOrEqual(9);
  await lab.locator(".btn").click();
  await expect(page).toHaveURL(/#\/lab\//);
});

test("explore: Class 2 shows big picture tiles in two columns", async ({ page }) => {
  await seed(page, { name: "Mini", cls: 2 });
  await page.goto("/#/explore");
  await expect(page.locator(".ex-grid")).toBeVisible();
  const cols = await page.locator(".ex-grid").evaluate((e) => getComputedStyle(e).gridTemplateColumns.split(" ").length);
  expect(cols).toBe(2);
});

test("progress: Class 2 has no exam readiness, Class 6 only concept learning, Class 10 everything", async ({ page }) => {
  await seed(page, { name: "Mini", cls: 2 });
  await page.goto("/#/progress");
  await expect(page.getByText("Exam readiness")).toHaveCount(0);
  await expect(page.getByText("Concept learning")).toHaveCount(0);
  await expect(page.locator("#skill-bands")).toBeVisible();
  await expect(page.locator("#work-next a", { hasText: "My mistakes" })).toBeVisible();
  await expect(page.locator("#work-next a", { hasText: "Parent area" })).toBeVisible();
  await page.evaluate(() => Store.setProfile({ cls: 7 }));
  await page.reload();
  await expect(page.locator("h2.block-title", { hasText: /^Concept learning$/ })).toBeVisible();
  await expect(page.getByText("Exam readiness")).toHaveCount(0);
  await page.evaluate(() => Store.setProfile({ cls: 10 }));
  await page.reload();
  await expect(page.locator("h2.block-title", { hasText: "Concept learning and exam readiness" })).toBeVisible();
  await expect(page.getByText("Exam readiness").first()).toBeVisible();
});

for (const cls of [2, 7]) {
  test(`phone 390x844, Class ${cls}: the main action of each tab is in the first screen`, async ({ page }) => {
    await page.setViewportSize(PHONE);
    await seed(page, { name: "Kabir", cls });
    await page.goto("/#/");
    await inFirstScreen(page, page.locator("#start-card .start-go"));
    await page.goto("/#/learn");
    await inFirstScreen(page, page.locator(".subject-card").first());
    await page.goto("/#/games");
    await inFirstScreen(page, page.locator('[data-act="random"]'));
    await page.goto("/#/explore");
    await inFirstScreen(page, page.locator(".ex-try").first());
    await page.goto("/#/progress");
    await inFirstScreen(page, page.locator("#work-next a").first());
  });
}
