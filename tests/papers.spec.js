const { test, expect, seed, chaptersOf, openTools } = require("./helpers");

// 9. Sample paper and practice sheet ---------------------------------------------------------------------------------
test("sample paper: Class 10 paper has sections and a marking-scheme toggle", { tag: "@desktop" }, async ({ page }) => {
  await seed(page, { name: "Asha", cls: 10 });
  await page.goto("/#/");
  await openTools(page);
  await page.locator(".tool", { hasText: "Sample papers" }).click();
  await expect(page.getByRole("heading", { level: 1, name: "Sample papers" })).toBeVisible();
  const first = page.locator('a.card.row[href^="#/paper/10/"]').first();
  await expect(first).toContainText("80 marks · 3 hours");
  await first.click();

  const paper = page.locator("article.ws").first();
  await expect(paper).toContainText("Sample Paper 1");
  await expect(paper).toContainText("Time allowed: 3 hours");
  await expect(paper).toContainText("General instructions");
  const sections = paper.locator(".ws-sec > h2");
  expect(await sections.count()).toBeGreaterThanOrEqual(5);
  const titles = await sections.allTextContents();
  expect(titles[0]).toMatch(/^Section A · Multiple choice/);
  expect(titles[0]).toMatch(/\d+ marks$/);
  expect(titles.some((t) => /Long answer/.test(t))).toBe(true);
  expect(await paper.locator(".ws-list > li").count()).toBeGreaterThan(30);
  expect(await paper.locator(".paper-or").count()).toBeGreaterThan(0); // internal choice

  // Marking scheme is hidden until switched on, and the choice is kept in the URL.
  const key = page.locator("article.ws-key");
  await expect(key).toBeHidden();
  await page.getByLabel("Marking scheme").check();
  await expect(key).toBeVisible();
  await expect(key).toContainText("Marking scheme · Paper 1");
  expect(await key.locator(".ws-answers li").count()).toBeGreaterThan(30);
  await expect(page).toHaveURL(/k=1/);
  await page.reload();
  await expect(page.getByLabel("Marking scheme")).toBeChecked();
  await expect(key).toBeVisible();
  await page.getByLabel("Marking scheme").uncheck();
  await expect(key).toBeHidden();

  // The next paper is a different paper.
  const q1 = await paper.locator(".ws-list > li").first().textContent();
  await page.getByRole("link", { name: /New paper/ }).click();
  await expect(page.locator("article.ws").first()).toContainText("Sample Paper 2");
  expect(await page.locator("article.ws").first().locator(".ws-list > li").first().textContent()).not.toBe(q1);
});

test("sample paper: classes below 9 are told papers are for 9-12", async ({ page }) => {
  await seed(page, { name: "Asha", cls: 6 });
  await page.goto("/#/papers");
  await expect(page.getByText("Sample papers are for Classes 9 to 12")).toBeVisible();
});

test("practice sheet maker: makes a worksheet with an answer key", async ({ page }) => {
  await seed(page, { name: "Asha", cls: 10 });
  await page.goto("/#/");
  await openTools(page);
  await page.locator(".tool", { hasText: "Practice sheets" }).click();
  await expect(page.getByRole("heading", { level: 1, name: "Practice sheets" })).toBeVisible();
  await expect(page.locator(".check-list input[data-ch]")).toHaveCount(chaptersOf(10, "maths").length);
  const make = page.getByRole("button", { name: /^Make sheet · \d+ questions/ });
  await expect(make).toBeEnabled();
  await make.click();

  await expect(page).toHaveURL(/#\/worksheet\/10\/maths\?/);
  const sheet = page.locator("article.ws").first();
  await expect(sheet).toContainText("Practice Sheet 1");
  await expect(sheet).toContainText("Class 10 · Mathematics");
  expect(await sheet.locator(".ws-sec > h2").count()).toBeGreaterThanOrEqual(2);
  await expect(sheet.locator(".ws-sec > h2").first()).toContainText("Section A · Multiple choice");
  expect(await sheet.locator(".ws-list > li").count()).toBeGreaterThan(10);

  // The answer key is on by default and can be switched off.
  const key = page.locator("article.ws-key");
  await expect(key).toBeVisible();
  await expect(key).toContainText("Answer key · Sheet 1");
  const answers = await key.locator(".ws-answers > li").count();
  expect(answers).toBe(await sheet.locator(".ws-list > li").count());
  await page.getByLabel("Answer key").uncheck();
  await expect(key).toBeHidden();

  await page.getByRole("link", { name: /New sheet/ }).click();
  await expect(page.locator("article.ws").first()).toContainText("Practice Sheet 2");
});
