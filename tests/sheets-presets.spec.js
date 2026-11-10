// Worksheet maker: one-tap quick sheets, "My weak chapters", and a one-skill sheet (js/sheets.js).
const { test, expect, seed } = require("./helpers");

test("quick sheets: 10-minute practice and exam practice make sheets with their settings", async ({ page }) => {
  await seed(page, { name: "Asha", cls: 9 });
  await page.goto("/#/sheets/science");
  const card = page.locator("[data-testid=preset-card]");
  await expect(card).toBeVisible();
  await card.locator("[data-preset=quick]").click();
  await expect(page).toHaveURL(/#\/worksheet\/9\/science\?ch=[^&]+&m=5&s=2&l=0&g=0&d=0&k=1&n=1&f=5$/);
  await expect(page.locator("article.ws").first()).toBeVisible();
  await expect(page.locator("article.ws .ws-sec h2").first()).toContainText("Multiple choice");

  await page.goto("/#/sheets/science");
  await page.locator("[data-preset=exam]").click();
  await expect(page).toHaveURL(/m=20&s=8&l=3&g=5&d=0/);
  await expect(page.locator("article.ws").first()).toBeVisible();
});

test("quick sheets: My weak chapters is off with no mistakes, and picks chapters with a low quiz score", async ({ page }) => {
  await seed(page, { name: "Asha", cls: 9 });
  await page.goto("/#/sheets/science");
  await expect(page.locator("[data-preset=weak]")).toBeDisabled();
  // A chapter quiz at 40%: that chapter is now a weak one.
  const id = await page.evaluate(() => {
    const ch = StudyData.chapters(9, "science")[2];
    const st = Store.state;
    st.chapters[Store.key(9, "science", ch.id)] = { done: false, best: 40, attempts: 1 };
    return ch.id;
  });
  await page.evaluate(() => App.render());
  await expect(page.locator("[data-preset=weak]")).toBeEnabled();
  await expect(page.locator("[data-preset=weak]")).toContainText("(1)");
  await page.locator("[data-preset=weak]").click();
  await expect(page).toHaveURL(new RegExp(`ch=${id}&m=15`));
});

test("one skill: with one chapter picked, a skill keeps only its questions and the sheet names it", async ({ page }) => {
  await seed(page, { name: "Asha", cls: 9 });
  await page.goto("/#/sheets/science");
  await expect(page.locator("[data-testid=skill-card]")).toHaveCount(0); // many chapters: no skill choice
  await page.getByRole("button", { name: "Clear" }).click();
  await page.locator("[data-ch]").first().check();
  const skills = page.locator("[data-testid=skill-card] [data-obj]");
  await expect(skills.first()).toHaveText("All skills");
  expect(await skills.count()).toBeGreaterThan(2);
  const before = await page.locator("[data-act=make]").textContent();
  await skills.nth(1).click();
  await expect(skills.nth(1)).toHaveClass(/on/);
  const after = await page.locator("[data-act=make]").textContent();
  expect(after).not.toBe(before); // fewer questions available for one skill
  await page.locator("[data-act=make]").click();
  await expect(page).toHaveURL(/&o=[\w-]+$/);
  await expect(page.locator("article.ws").first()).toContainText("Skill:");
});
