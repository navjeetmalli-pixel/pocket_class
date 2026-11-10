// Lesson language (profile.learnLang): key terms show their Hindi or Punjabi name from data/glossary.js.
const { test, expect, seed } = require("./helpers");

const CH = "/#/chapter/8/science/investigative-world-of-science/notes";
// A small stand-in glossary, so the test doesn't depend on the real file's wording.
const STUB = 'StudyData.addGlossary({ "hypothesis": { hi: "परिकल्पना", pa: "ਪਰਿਕਲਪਨਾ" }, "variable": { hi: "चर" } });';

async function stubGlossary(page) {
  const asked = [];
  await page.route("**/data/glossary.js", (route) => {
    asked.push(route.request().url());
    route.fulfill({ contentType: "application/javascript", body: STUB });
  });
  return asked;
}

test("lesson language Hindi: key terms and flashcards show the Hindi name", async ({ page }) => {
  const asked = await stubGlossary(page);
  await seed(page, { student: { profile: { name: "Asha", cls: 8, board: "cbse", learnLang: "hi" } } });
  await page.goto(CH);
  const term = page.locator("dl.terms dt", { hasText: "Hypothesis" });
  await expect(term.locator(".term-lang")).toHaveText("परिकल्पना");
  await expect(term.locator(".term-lang")).toHaveAttribute("lang", "hi");
  // A term with no entry shows nothing extra.
  await expect(page.locator("dl.terms dt", { hasText: "Fair test" }).locator(".term-lang")).toHaveCount(0);
  // The flashcard of that term shows it under the English word.
  await expect(page.locator(".flashcard .face.front .term-lang").first()).toBeVisible();
  expect(asked.length).toBeGreaterThanOrEqual(1);
});

test("lesson language Punjabi: a term with no Punjabi entry shows only English", async ({ page }) => {
  await stubGlossary(page);
  await seed(page, { student: { profile: { name: "Asha", cls: 8, board: "cbse", learnLang: "pa" } } });
  await page.goto(CH);
  await expect(page.locator("dl.terms dt", { hasText: "Hypothesis" }).locator(".term-lang")).toHaveText("ਪਰਿਕਲਪਨਾ");
  await expect(page.locator("dl.terms dt", { hasText: /^Variable/ }).locator(".term-lang")).toHaveCount(0);
});

test("lesson language English: no glossary is loaded and nothing extra shows", async ({ page }) => {
  const asked = await stubGlossary(page);
  await seed(page, { student: { profile: { name: "Asha", cls: 8, board: "cbse", learnLang: "en" } } });
  await page.goto(CH);
  await expect(page.locator("dl.terms dt").first()).toBeVisible();
  await expect(page.locator(".term-lang")).toHaveCount(0);
  expect(asked).toHaveLength(0);
});

test("lesson language in the store apps: Hindi is locked, so nothing shows", async ({ page }) => {
  const asked = await stubGlossary(page);
  await seed(page, { student: { profile: { name: "Asha", cls: 8, board: "cbse", learnLang: "hi" } } });
  await page.goto("/?lock=1" + CH);
  await expect(page.locator("dl.terms dt").first()).toBeVisible();
  await expect(page.locator(".term-lang")).toHaveCount(0);
  expect(asked).toHaveLength(0);
});
