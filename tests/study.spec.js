const { test, expect, seed, readStore, current, chaptersOf, answer, playInstantQuiz, quickQuiz } = require("./helpers");

const MATHS = chaptersOf(10, "maths")[0]; // first Class 10 Maths chapter
const quizUrl = `/#/chapter/10/maths/${MATHS.id}/quiz`;
const chapterKey = `10/maths/${MATHS.id}`;

// 3. Subject -> chapter tabs, quiz, My mistakes ----------------------------------------------------------------
test("chapter tabs: notes, flashcards, practice and quiz; a wrong answer goes to My mistakes and can be fixed", { tag: "@desktop" }, async ({ page }) => {
  await seed(page, { name: "Asha", cls: 10 });
  await page.goto("/#/");
  await page.locator(".subject-card", { hasText: "Mathematics" }).click();
  await expect(page.locator(".hero h1")).toContainText("Mathematics");
  await page.locator(".chapter-row").first().click();

  await expect(page.locator(".hero h1")).toHaveText(MATHS.title);
  const tabs = page.getByRole("navigation", { name: "Chapter sections" });
  for (const name of ["Notes", "Flashcards", "Practice", "Quiz"]) await expect(tabs.getByRole("link", { name })).toBeVisible();

  // Notes
  await expect(tabs.getByRole("link", { name: "Notes" })).toHaveAttribute("aria-current", "page");
  await expect(page.locator("article.note").first()).toBeVisible();
  await expect(page.getByRole("heading", { name: "Key terms" })).toBeVisible();

  // Flashcards
  await tabs.getByRole("link", { name: "Flashcards" }).click();
  const card = page.locator(".flashcard");
  await expect(card).toBeVisible();
  await expect(page.getByText(/^Card 1 of \d+$/)).toBeVisible();
  await card.click();
  await expect(card).toHaveAttribute("aria-pressed", "true");
  await page.getByRole("button", { name: "I know this" }).click();
  await expect(page.getByText(/^Card 2 of \d+$/)).toBeVisible();
  await expect(page.locator(".pill.good, .pill.bad")).toHaveCount(0); // new card has no status yet
  expect(Object.values(current(await readStore(page)).cards)).toEqual(["known"]);

  // Practice (solved examples and fresh generated questions)
  await tabs.getByRole("link", { name: "Practice" }).click();
  await expect(page.getByRole("heading", { name: "Fresh questions" })).toBeVisible();
  await expect(page.locator("#gen-mount article")).toHaveCount(5);
  await page.getByRole("button", { name: "New questions" }).click();
  await expect(page.locator("#gen-mount article")).toHaveCount(5);

  // Quiz: the first question with a saved answer is answered wrongly, everything else rightly.
  await tabs.getByRole("link", { name: "Quiz" }).click();
  await expect(page.getByText(/^Question 1 of \d+$/)).toBeVisible();
  const wrongText = await playInstantQuiz(page, { wrongOnce: true });
  expect(wrongText, "the test needs to recognise a question in the study data").not.toBeNull();
  // (Generated number-changing questions that were guessed wrong are counted in the message but never saved.)
  await expect(page.locator(".result-top")).toContainText(/\d+ questions? added to My mistakes/);

  const store = current(await readStore(page));
  expect(Object.keys(store.mistakes)).toHaveLength(1);
  expect(Object.keys(store.mistakes)[0].startsWith(chapterKey + "/")).toBe(true);

  // My mistakes lists exactly that question; answering it correctly removes it.
  await page.goto("/#/");
  await expect(page.locator(".tool", { hasText: "My mistakes" })).toContainText("1 question to fix");
  await page.locator(".tool", { hasText: "My mistakes" }).click();
  await expect(page.locator(".quiz-q")).toContainText(wrongText);
  await expect(page.getByText(/^Question 1 of 1$/)).toBeVisible();
  await answer(page, "right");
  await expect(page.locator(".feedback.good")).toBeVisible();
  await page.locator('[data-act="next"]').click(); // "See my score"
  await expect(page.locator(".result-top")).toBeVisible();
  expect(current(await readStore(page)).mistakes).toEqual({});

  await page.reload();
  await expect(page.getByText("No mistakes to fix.")).toBeVisible();
  await page.goto("/#/");
  await expect(page.locator(".tool", { hasText: "My mistakes" })).toContainText("Nothing to fix yet");
});

// 4. Progress storage ---------------------------------------------------------------------------------------------
test("progress: quiz result, streak and history survive a reload; storage has the students shape", async ({ page }) => {
  await seed(page, { name: "Asha", cls: 10 });
  await page.goto(quizUrl);
  await quickQuiz(page);
  const score = (await page.locator(".result-top .ring .v").textContent()).trim();

  const check = async () => {
    const store = await readStore(page);
    expect(store.v).toBe(2);
    expect(store.lang).toBe("en");
    expect(Array.isArray(store.students)).toBe(true);
    expect(store.students).toHaveLength(1);
    expect(store.current).toBe(store.students[0].id);
    const s = current(store);
    expect(s.profile).toEqual({ name: "Asha", cls: 10, board: "cbse" });
    expect(s.history).toHaveLength(1);
    expect(s.history[0]).toMatchObject({ subject: "maths", cls: 10, kind: "chapter", total: 13 });
    expect(`${s.history[0].score}/${s.history[0].total}`).toBe(score);
    expect(s.chapters[chapterKey]).toMatchObject({ attempts: 1 });
    expect(typeof s.chapters[chapterKey].best).toBe("number");
    const today = Object.values(s.days);
    expect(today).toHaveLength(1);
    expect(today[0].acts).toBeGreaterThan(0);
    expect(Object.keys(s.revise)).toContain(chapterKey);
  };
  await check();

  await page.reload();
  await check();
  await page.goto("/#/");
  await expect(page.locator(".stat", { hasText: "day streak" }).locator(".v")).toHaveText("🔥 1");
  await expect(page.locator(".stat", { hasText: "quiz average" }).locator(".v")).toHaveText(/^\d+%$/);

  await page.goto("/#/progress");
  await expect(page.locator(".stat", { hasText: "quizzes & tests" }).locator(".v")).toHaveText("1");
  const row = page.locator(".history-row");
  await expect(row).toHaveCount(1);
  await expect(row).toContainText(MATHS.title);
  await expect(row).toContainText(score);

  await page.goto(`/#/chapter/10/maths/${MATHS.id}/notes`);
  await expect(page.locator(".hero .pill.accent")).toContainText("Best quiz score");
});
