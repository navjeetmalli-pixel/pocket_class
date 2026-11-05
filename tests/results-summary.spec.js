// The plain-language results summary (Learn.summaryHTML): Practised, Went well, To review, Next.
const { test, expect, seed, playInstantQuiz, answer } = require("./helpers");

const QUIZ = "/#/chapter/6/maths/fractions/master";
const LIGHT = "light-reflection-and-refraction"; // Class 10 Science, as in games.spec.js

test("quiz with a wrong answer: Practised, Went well and To review, and the Next link works", async ({ page }) => {
  await seed(page, { cls: 6 });
  await page.goto(QUIZ);
  await expect(page.getByText(/^Question 1 of \d+$/)).toBeVisible();
  const wrong = await playInstantQuiz(page, { wrongOnce: true });
  expect(wrong, "a question with a known answer").not.toBeNull();
  const box = page.locator(".results-summary");
  await expect(box).toBeVisible();
  await expect(box.locator(".rs-did")).toContainText("Practised");
  await expect(box.locator(".rs-did li").first()).not.toBeEmpty();
  await expect(box.locator(".rs-review")).toContainText("To review");
  await expect(box.locator(".rs-review li").first()).not.toBeEmpty();
  // (a one-wrong round on a chapter with several skills usually has some that went well; with a single skill there is none)
  if (await box.locator(".rs-well").count()) await expect(box.locator(".rs-well")).toContainText("Went well");
  await expect(box).not.toContainText(/fail|%/i);
  const link = box.locator(".rs-next a");
  await expect(link).toHaveAttribute("href", /^#\/chapter\/6\/maths\/fractions\/practise$/);
  await link.click();
  await expect(page).toHaveURL(/\/practise$/);
  await expect(page.getByRole("heading", { name: "Fresh questions" })).toBeVisible();
});

test("an all-right round has no To review, and Next leads on", async ({ page }) => {
  // (Generated quiz questions have no saved answer to click, so the all-right events are built from the chapter's skills.)
  await seed(page, { cls: 6 });
  await page.goto(QUIZ);
  await expect(page.getByText(/^Question 1 of \d+$/)).toBeVisible();
  const html = await page.evaluate(() => {
    const evs = Objectives.forChapter(6, "maths", "fractions").slice(0, 2).map((o) => ({ type: "answer", cls: 6, subject: "maths", chapter: "fractions", obj: o.id, ok: true, hints: 0, source: "quiz" }));
    return Learn.summaryHTML(evs, []);
  });
  await page.setContent(html);
  const box = page.locator(".results-summary");
  await expect(box.locator(".rs-did")).toBeVisible();
  await expect(box.locator(".rs-well")).toContainText("Went well");
  await expect(box.locator(".rs-review")).toHaveCount(0);
  await expect(box.locator(".rs-next a")).toHaveAttribute("href", "#/chapter/6/maths/playing-with-constructions");
});

test("a game round shows the summary above what you got wrong", async ({ page }) => {
  await seed(page, { cls: 10 });
  await page.goto(`/#/play/10/science/${LIGHT}/quickfire`);
  await page.locator("[data-g=start]").click();
  await expect(page.locator(".game-hud")).toBeVisible();
  await answer(page, "right");
  await expect(page.locator("#qf-q")).toBeVisible();
  // Quick-fire mixes in made-up questions whose answer the helper can't know; it then taps the first option, which may be
  // right (the game moves on by itself). Keep going until three answers really were wrong (each shows a Next button).
  let wrongs = 0;
  for (let i = 0; i < 12 && wrongs < 3; i++) {
    await answer(page, "wrong");
    const next = page.locator('[data-act="next"]');
    try {
      await next.waitFor({ timeout: 1500 });
    } catch (e) {
      continue;
    }
    await next.click();
    wrongs++;
  }
  expect(wrongs).toBe(3);
  await expect(page.locator(".game-result")).toBeVisible();
  const box = page.locator(".results-summary");
  await expect(box).toBeVisible();
  await expect(box.locator(".rs-did")).toContainText("Practised");
  await expect(box.locator(".rs-next a")).toBeVisible();
  const order = await page.evaluate(() => {
    const a = document.querySelector(".results-summary"), b = [...document.querySelectorAll(".block-title")].find((h) => /got wrong/.test(h.textContent));
    return !!(a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING);
  });
  expect(order).toBe(true);
});
