const { test, expect, seed, readStore, current, expectedSubjectIds } = require("./helpers");

// 8. Mock test across all subjects ---------------------------------------------------------------------------------
test("mock test: all subjects, answer, submit, per-chapter breakdown", { tag: "@desktop" }, async ({ page }) => {
  await seed(page, { name: "Asha", cls: 10 });
  await page.goto("/#/test");
  await expect(page.getByRole("heading", { level: 1, name: "Mock test" })).toBeVisible();

  // "All subjects" is the default and offers every subject of the class as a filter.
  await expect(page.locator('[data-subj="all"]')).toHaveClass(/\bon\b/);
  await expect(page.locator("[data-subj]")).toHaveCount(expectedSubjectIds(10, "cbse").length + 1);
  await page.locator('[data-count="10"]').click();
  const start = page.getByRole("button", { name: /^Start test · 10 questions/ });
  await expect(start).toBeEnabled();
  await start.click();

  // The test: 10 questions, timer running, answer all of them.
  await expect(page).toHaveURL(/#\/test\/run$/);
  await expect(page.getByText("Question 1 of 10")).toBeVisible();
  await expect(page.locator("[data-clock]")).toBeVisible();
  for (let i = 1; i <= 9; i++) {
    await page.locator(".options .option").first().click();
    await expect(page.locator(".palette .answered")).toHaveCount(i);
    await page.locator('.quiz-nav [data-act="next"]').click();
    await expect(page.getByText(`Question ${i + 1} of 10`)).toBeVisible();
  }
  await page.locator(".options .option").last().click();
  await expect(page.locator(".palette .answered")).toHaveCount(10);
  await page.locator('.quiz-nav [data-act="submit"]').click();

  // Result: score, per-chapter breakdown from more than one chapter, review of every answer.
  await expect(page.locator(".result-top")).toBeVisible();
  await expect(page.getByRole("heading", { name: "By chapter" })).toBeVisible();
  const rows = page.locator(".breakdown .lbl");
  expect(await rows.count()).toBeGreaterThan(1);
  expect((await rows.allTextContents()).every((t) => t.includes(" · "))).toBe(true); // "Maths · Chapter"
  await expect(page.getByRole("heading", { name: "Review answers" })).toBeVisible();
  await expect(page.locator(".review-item")).toHaveCount(10);
  await expect(page.getByRole("button", { name: "Try again" })).toBeVisible();

  const s = current(await readStore(page));
  expect(s.history[0]).toMatchObject({ subject: "all", cls: 10, kind: "test", total: 10, title: "Mixed test" });
  await page.goto("/#/progress");
  await expect(page.locator(".history-row")).toContainText("Mixed test");
});

test("mock test: submitting with unanswered questions asks first", async ({ page, dialogs }) => {
  await seed(page, { name: "Asha", cls: 8 });
  await page.goto("/#/test");
  await page.locator('[data-count="10"]').click();
  await page.locator('[data-act="start"]').click();
  await expect(page.getByText("Question 1 of 10")).toBeVisible();
  await page.locator(".options .option").first().click();
  await page.locator('.quiz-nav [data-act="next"]').click();
  await page.locator("button[data-act=submit]").first().click();
  await expect(page.locator(".result-top")).toBeVisible();
  expect(dialogs.some((d) => /9 unanswered questions/.test(d))).toBe(true);
  await expect(page.locator(".review-item")).toHaveCount(10);
  await expect(page.locator(".review-item em")).toHaveCount(9); // "not answered"
});
