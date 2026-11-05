const fs = require("fs");
const path = require("path");
const { test, expect, seed, readStore, current, answer } = require("./helpers");

const FIXTURE = fs.readFileSync(path.join(__dirname, "fixtures", "paths-maths.js"), "utf8");
const lv = (best, at = 1730800000000) => ({ best, n: 1, at, mastered: true });
const allMastered = { "fractions-0": lv(90), "fractions-3": lv(80), "fractions-6": lv(100, 1731000000000) };

test.beforeEach(async ({ page }) => {
  await page.route("**/data/paths/maths.js", (r) => r.fulfill({ contentType: "text/javascript", body: FIXTURE }));
  await page.addInitScript(() => (Math.random = () => 0.999999));
});

const withPaths = (fractions) => ({ student: { paths: { maths: { fractions } } } });

async function runCheck(page) {
  for (let guard = 0; guard < 14; guard++) {
    await page.locator(".quiz-q, .result-top").first().waitFor();
    if (await page.locator(".result-top").count()) break;
    await answer(page, "right");
    await page.locator('[data-act="next"]').click();
  }
  await expect(page.locator(".result-top")).toBeVisible();
}

test("a repeat check never lowers start and shows before and now", async ({ page }) => {
  // First check placed her at Level 3 (index 1); she has since mastered Level 0 only.
  await seed(page, withPaths({ start: 1, checked: 1730000000000, checks: [{ at: 1730000000000, start: 1, all: false }], levels: { "fractions-0": lv(90) } }));
  await page.goto("/#/paths/maths/fractions");
  await expect(page.getByRole("link", { name: "Check my progress" })).toBeVisible();
  await expect(page.getByText(/Started at Level 3 · now at Level 3/)).toBeVisible();
  await page.getByRole("link", { name: "Check my progress" }).click();
  await runCheck(page);
  await expect(page.locator(".path-growth")).toContainText("Before: Level 3");
  await expect(page.locator(".path-growth")).toContainText("Now: Level");
  await expect(page.getByRole("button", { name: "Start from Level 0" })).toHaveCount(0);
  const T = current(await readStore(page)).paths.maths.fractions;
  expect(T.checks).toHaveLength(2);
  expect(T.start).toBeGreaterThanOrEqual(1);
});

test("a repeat check with worse answers keeps start", async ({ page }) => {
  await seed(page, withPaths({ start: 2, checked: 1730000000000, checks: [{ at: 1730000000000, start: 2, all: false }], levels: { "fractions-0": lv(90) } }));
  await page.goto("/#/paths/maths/fractions/check-progress");
  for (let guard = 0; guard < 14; guard++) {
    await page.locator(".quiz-q, .result-top").first().waitFor();
    if (await page.locator(".result-top").count()) break;
    await answer(page, "wrong");
    await page.locator('[data-act="next"]').click();
  }
  const T = current(await readStore(page)).paths.maths.fractions;
  expect(T.start).toBe(2);
  expect(T.checks).toHaveLength(2);
  expect(T.checks[1].start).toBeLessThan(2);
});

test("old data without checks still renders and counts as one check", async ({ page }) => {
  await seed(page, withPaths({ start: 1, checked: 1730000000000, levels: { "fractions-0": lv(85) } }));
  await page.goto("/#/paths/maths/fractions");
  await expect(page.getByRole("link", { name: "Check my progress" })).toBeVisible();
  await expect(page.getByText(/Started at Level 3/)).toBeVisible();
  await page.goto("/#/paths/maths/fractions/find-my-level");
  await runCheck(page);
  await expect(page.locator(".path-growth")).toContainText("Before: Level 3");
});

test("no progress yet: the button stays Find my level and there is no growth line", async ({ page }) => {
  await seed(page, withPaths({ start: 1, checked: 1730000000000, levels: {} }));
  await page.goto("/#/paths/maths/fractions");
  await expect(page.getByRole("link", { name: "Find my level" })).toBeVisible();
  await expect(page.getByText(/Started at/)).toHaveCount(0);
});

test("certificate is locked until every level is mastered", async ({ page }) => {
  await seed(page, withPaths({ start: 0, checked: null, levels: { "fractions-0": lv(90) } }));
  await page.goto("/#/certificate/maths/fractions");
  await expect(page.getByText("Master every level to earn this certificate")).toBeVisible();
  await expect(page.getByText("1 of 3 levels")).toBeVisible();
  await page.getByRole("link", { name: "Back to the ladder" }).click();
  await expect(page.getByRole("link", { name: "Your certificate" })).toHaveCount(0);
  await page.goto("/#/progress");
  await expect(page.getByRole("heading", { name: "Certificates" })).toHaveCount(0);
});

test("certificate shows the student and topic, and Progress lists it", async ({ page }) => {
  await seed(page, { name: "Meera", ...withPaths({ start: 1, checked: 1730000000000, checks: [{ at: 1730000000000, start: 1, all: false }], levels: allMastered }) });
  await page.goto("/#/paths/maths/fractions");
  await page.getByRole("link", { name: "Your certificate" }).click();
  const cert = page.locator(".cert");
  await expect(cert).toContainText("Pocket Class India");
  await expect(cert).toContainText("Meera");
  await expect(cert).toContainText("has mastered");
  await expect(cert).toContainText("Maths · Fractions");
  await expect(cert).toContainText("3 levels mastered, average best score 90%");
  await expect(cert).toContainText("Started at Level 3 · now at Level 6");
  await expect(cert).toContainText("Last level mastered on");
  await page.goto("/#/progress");
  await expect(page.getByRole("heading", { name: "Certificates" })).toBeVisible();
  await page.locator("a.card", { hasText: "Maths · Fractions" }).click();
  await expect(page.locator(".cert")).toContainText("Meera");
});
