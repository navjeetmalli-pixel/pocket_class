const fs = require("fs");
const path = require("path");
const { test, expect, seed, readStore, current, answer } = require("./helpers");

// A small fixed path, so the test does not depend on the real data/paths/maths.js while it is being written.
const FIXTURE = fs.readFileSync(path.join(__dirname, "fixtures", "paths-maths.js"), "utf8");

test.beforeEach(async ({ page }) => {
  await page.route("**/data/paths/maths.js", (r) => r.fulfill({ contentType: "text/javascript", body: FIXTURE }));
  // Options keep their written order (the right one of a made-up question is always first), so answers can be known.
  await page.addInitScript(() => (Math.random = () => 0.999999));
});

// Answers the practice quiz on screen: known questions rightly, others by taking the first option.
async function playLevel(page) {
  for (let guard = 0; guard < 40; guard++) {
    await page.locator(".quiz-q, .result-top").first().waitFor();
    if (await page.locator(".result-top").count()) break;
    await answer(page, "right");
    await page.locator('[data-act="next"]').click();
  }
  await expect(page.locator(".result-top")).toBeVisible();
}

test("practice by topic: find my level, master a level, the next one unlocks, progress survives a reload", async ({ page }) => {
  await seed(page, { name: "Asha", cls: 6 });
  await page.goto("/#/");
  await page.locator(".tool", { hasText: "Practice by topic" }).click();
  await expect(page.locator(".subject-card")).toHaveCount(4);
  await page.locator(".subject-card", { hasText: "Mathematics" }).click();
  await page.locator(".chapter-row", { hasText: "Fractions" }).click();
  await expect(page.locator(".hero h1")).toContainText("Fractions");

  // Level 0 is open, the others wait.
  const rows = page.locator("ol.list > li");
  await expect(rows).toHaveCount(3);
  await expect(rows.nth(0)).toContainText("Start here");
  await expect(rows.nth(1)).toContainText("Skip ahead");

  // The starting check runs to a result.
  await page.getByRole("link", { name: "Find my level" }).click();
  for (let guard = 0; guard < 12; guard++) {
    await page.locator(".quiz-q, .result-top").first().waitFor();
    if (await page.locator(".result-top").count()) break;
    await answer(page, "right");
    await page.locator('[data-act="next"]').click();
  }
  await expect(page.locator(".result-top")).toContainText("Level");
  await page.getByRole("button", { name: "Start from Level 0" }).click();

  // Practise Level 0 to mastery.
  await expect(page.locator(".hero h1")).toContainText("Halves and quarters");
  await expect(page.getByRole("link", { name: "Printable worksheet" })).toBeVisible();
  await page.getByRole("button", { name: /Practice 10 questions/ }).click();
  await expect(page.getByText(/^Question 1 of 10$/)).toBeVisible();
  await playLevel(page);
  await expect(page.locator(".path-result")).toContainText("Level mastered");
  await expect(page.locator(".path-result")).toContainText("Level 3 is unlocked");

  const check = async () => {
    const s = current(await readStore(page));
    expect(s.paths.maths.fractions.levels["fractions-0"]).toMatchObject({ mastered: true, n: 1 });
    expect(s.paths.maths.fractions.levels["fractions-0"].best).toBeGreaterThanOrEqual(80);
  };
  await check();

  await page.reload();
  await check();
  await page.goto("/#/paths/maths/fractions");
  const rows2 = page.locator("ol.list > li");
  await expect(rows2.nth(0)).toContainText("Mastered");
  await expect(rows2.nth(1)).toContainText("Start here");
  await expect(rows2.nth(2)).toContainText("Skip ahead");

  // A locked level can still be opened, with a gentle note; its worksheet opens too.
  await rows2.nth(2).locator("a").click();
  await expect(page.getByText("You are skipping ahead")).toBeVisible();
  await page.getByRole("link", { name: "Printable worksheet" }).click();
  await expect(page.locator("article.ws:not(.ws-key)")).toBeVisible();
});
