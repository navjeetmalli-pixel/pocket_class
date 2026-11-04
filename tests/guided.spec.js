const { test, expect, seed, readStore, current, chaptersOf } = require("./helpers");

const CH = chaptersOf(10, "maths")[0];

// Does whatever the lesson step on screen asks for, in the page itself so one call is one step of the lesson.
// Returns what it did, or "done" once the lesson is complete.
const advance = (page) =>
  page.evaluate(() => {
    const g = document.querySelector(".guided");
    if (!g) return "waiting";
    if (/Lesson complete/.test(g.textContent)) return "done";
    const click = (el, what) => (el.click(), what);
    const free = [...g.querySelectorAll(".options .option:not(.locked)")];
    if (free.length) return click(free[0], "answer");
    const sure = g.querySelector("[data-sure]");
    if (sure) return click(sure, "sure");
    const slip = g.querySelector("[data-slip]:not([disabled])");
    if (slip) return click(slip, "slip");
    for (const act of ["fade-show", "show-turn", "topic-next", "p-next", "next", "finish"]) {
      const b = g.querySelector(`[data-act="${act}"]`);
      if (b) return click(b, act);
    }
    return "waiting";
  });

// 10. Guided lesson ---------------------------------------------------------------------------------------------------
test("guided lesson: a Class 10 Maths chapter goes through every step to Done", async ({ page }) => {
  await seed(page, { name: "Asha", cls: 10 });
  await page.goto(`/#/chapter/10/maths/${CH.id}/notes`);
  await page.locator(".guided-card").click();
  await expect(page).toHaveURL(new RegExp(`/${CH.id}/guided$`));

  const stepLabel = page.locator(".guided .quiz-clock");
  // Real Numbers is the first chapter, so there is no earlier work to check: the lesson opens with the question.
  await expect(stepLabel).toHaveText("Think first");
  await expect(page.locator(".guided .quiz-head span").first()).toHaveText(/^Step 1 of \d+$/);

  const seen = new Set();
  for (let i = 0; i < 120; i++) {
    const label = await stepLabel.textContent().catch(() => "");
    if (label) seen.add(label);
    const did = await advance(page);
    if (did === "done") break;
    expect(i, "the lesson should finish within 120 clicks").toBeLessThan(119);
  }
  await expect(page.locator(".guided .result-msg")).toHaveText("Lesson complete");
  await expect(page.locator(".guided .quiz-clock")).toHaveText("Done");
  await expect(page.getByText("Explain it in your own words")).toBeVisible();
  // Every lesson has at least these steps, in this order of first appearance.
  for (const step of ["Think first", "The idea", "Worked example", "Practice"]) expect([...seen]).toContain(step);

  // Recorded: guided result, history entry, chapter opened.
  const s = current(await readStore(page));
  const key = `10/maths/${CH.id}`;
  expect(s.guided[key]).toMatchObject({ total: expect.any(Number) }); // 3-4 mixed retrieve questions
  expect(s.guided[key].total).toBeGreaterThanOrEqual(3);
  expect(s.history[0]).toMatchObject({ kind: "guided", subject: "maths", cls: 10 });

  // The Notes tab now says the lesson was done.
  await page.goto(`/#/chapter/10/maths/${CH.id}/notes`);
  await expect(page.locator(".guided-card")).toContainText(/Done .* in practice/);
});
