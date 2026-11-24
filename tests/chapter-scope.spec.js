// Chapters outside the board exam (chapter.scope): the chapter page says so, and sample papers leave them out.
const { test, expect, seed } = require("./helpers");

test("scope: a chapter outside the 2026–27 syllabus says so on its page", async ({ page }) => {
  await seed(page, { name: "Asha", cls: 11 });
  await page.goto("/#/chapter/11/english/the-ailing-planet/understand");
  await expect(page.locator(".scope-note[data-scope=outside]")).toContainText("Not in the 2026–27 syllabus");
  // An ordinary chapter has no note.
  await page.goto("/#/chapter/11/english/the-portrait-of-a-lady/understand");
  await expect(page.locator(".hero h1")).toBeVisible();
  await expect(page.locator(".scope-note")).toHaveCount(0);
});

test("scope: sample papers draw no questions from scoped chapters", async ({ page }) => {
  await seed(page, { name: "Asha", cls: 11 });
  await page.goto("/#/");
  // Mark one Class 11 Physics chapter as formative and check its questions never appear in a paper.
  const ok = await page.evaluate(async () => {
    await StudyData.loadSubjects(11, ["physics"]);
    await StudyData.loadPractice(11, "physics");
    const ch = StudyData.chapters(11, "physics")[0];
    ch.scope = "formative";
    const qs = new Set([...ch.quiz, ...StudyData.practiceFor(11, "physics", ch.id).mcq, ...StudyData.practiceFor(11, "physics", ch.id).written].map((q) => q.q));
    location.hash = "#/paper/11/physics?n=1&k=1";
    await new Promise((r) => setTimeout(r, 1500));
    const text = document.querySelector("main").innerText;
    return { shown: text.length > 500, leak: [...qs].filter((q) => q.length > 25 && text.includes(q.replace(/\*\*/g, ""))).length };
  });
  expect(ok.shown).toBe(true);
  expect(ok.leak).toBe(0);
});
