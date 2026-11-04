// The chapter hub (UI Phase 4): six sections as the chapter's navigation, empty sections hidden, old tab URLs redirecting,
// the lesson on its own page with a clear exit, and progress kept when sections change.
const { test, expect, seed, readStore, current, chaptersOf } = require("./helpers");

const LIGHT = "light-reflection-and-refraction"; // Class 10 Science: diagrams, experiments, games, formulas
const MATHS = "quadratic-equations"; // Class 10 Maths: hand-written skills, lesson, experiment
// One click of whatever the current lesson step asks for.
const advance = (page) =>
  page.evaluate(() => {
    const g = document.querySelector(".guided");
    if (!g) return;
    const free = g.querySelector(".options .option:not(.locked)");
    if (free) return free.click();
    const pick = g.querySelector("[data-sure],[data-slip]:not([disabled])");
    if (pick) return pick.click();
    for (const act of ["fade-show", "show-turn", "show-written", "p-next", "next", "finish"]) {
      const b = g.querySelector(`[data-act="${act}"]`);
      if (b) return b.click();
    }
  });
const nav = (page) => page.getByRole("navigation", { name: "Chapter sections" });
const sections = (page) => nav(page).getByRole("link").allTextContents();
const url = (c, s, ch, tail = "") => `/#/chapter/${c}/${s}/${ch}${tail}`;

test("a Class 10 Science chapter shows all six sections, with the first one current", async ({ page }) => {
  await seed(page, { name: "Asha", cls: 10 });
  await page.goto(url(10, "science", LIGHT));
  expect(await sections(page)).toEqual(["Understand", "Visualise", "Explore", "Play", "Practise", "Master"]);
  await expect(nav(page).getByRole("link", { name: "Understand" })).toHaveAttribute("aria-current", "page");
  // Understand: skills, notes, key terms with flashcards, the lesson entry.
  await expect(page.getByRole("heading", { name: "What you can do" })).toBeVisible();
  await expect(page.locator("article.note").first()).toBeVisible();
  await expect(page.getByRole("heading", { name: "Key terms" })).toBeVisible();
  await expect(page.locator(".flashcard")).toBeVisible();
  await expect(page.locator(".guided-card")).toContainText("Start lesson");

  await nav(page).getByRole("link", { name: "Visualise" }).click();
  await expect(page).toHaveURL(new RegExp(`/${LIGHT}/visualise$`));
  await expect(page.locator("figure.diagram h3").first()).toBeVisible();

  await nav(page).getByRole("link", { name: "Explore" }).click();
  await expect(page.locator('[data-sim="lens"]')).toBeVisible();

  await nav(page).getByRole("link", { name: "Play" }).click();
  await expect(page.locator(".game-card").first()).toBeVisible();

  await nav(page).getByRole("link", { name: "Practise" }).click();
  await expect(page.getByRole("heading", { name: "Fresh questions" })).toBeVisible();
  await expect(page.locator("#bank-mount .chip").first()).toBeVisible();
  await expect(page.getByRole("link", { name: /Make sheet/ })).toBeVisible();

  await nav(page).getByRole("link", { name: "Master" }).click();
  await expect(page.getByText(/^Question 1 of \d+$/)).toBeVisible();
  await expect(page.getByRole("heading", { name: "Chapter mock test" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Formula sheet" })).toBeVisible();
});

test("the mock test and a one-skill check run inside Master and can be left", async ({ page }) => {
  await seed(page, { name: "Asha", cls: 10 });
  await page.goto(url(10, "maths", MATHS, "/master"));
  await expect(page.getByRole("heading", { name: "Check one skill" })).toBeVisible();
  await page.locator('[data-act="mock"]').click();
  await expect(page.locator(".quiz-clock")).toBeVisible();
  await expect(page.getByText(/^Question 1 of 15$/)).toBeVisible();
  await expect(page.locator("#quiz-mount")).toHaveCount(0); // only the mock test is on screen
  await nav(page).getByRole("link", { name: "Understand" }).click();
  await nav(page).getByRole("link", { name: "Master" }).click();
  await expect(page.locator("#quiz-mount")).toBeVisible(); // leaving Master resets it
  await page.locator('[data-act="check"]').first().click();
  await expect(page.getByText(/^Question 1 of \d$/)).toBeVisible();
});

test("a Class 2 Punjabi chapter hides sections it has nothing for", async ({ page }) => {
  await seed(page, { name: "Mini", cls: 2 });
  const ch = chaptersOf(2, "punjabi")[0];
  await page.goto(url(2, "punjabi", ch.id));
  const names = await sections(page);
  expect(names).not.toContain("Explore");
  expect(names).not.toContain("Visualise");
  expect(names).toEqual(expect.arrayContaining(["Understand", "Play", "Master"]));
  // Asking for a section that isn't there lands on Understand, never on an empty page.
  await page.goto(url(2, "punjabi", ch.id, "/explore"));
  await expect(page).toHaveURL(new RegExp(`/${ch.id}/understand$`));
  await page.goto(url(2, "punjabi", ch.id, "/visualise"));
  await expect(page).toHaveURL(new RegExp(`/${ch.id}/understand$`));
  // Young classes get big tiles.
  const box = await nav(page).getByRole("link", { name: "Understand" }).boundingBox();
  expect(box.height).toBeGreaterThanOrEqual(90);
});

test("old chapter tab URLs redirect to the new sections", async ({ page }) => {
  await seed(page, { name: "Asha", cls: 10 });
  const cases = [
    ["notes", "understand"],
    ["guided", "understand/lesson"],
    ["lesson", "understand/lesson"],
    ["cards", "understand/terms"],
    ["flashcards", "understand/terms"],
    ["practice", "practise"],
    ["quiz", "master"],
    ["play", "play"],
  ];
  for (const [old, now] of cases) {
    await page.goto(url(10, "maths", MATHS, `/${old}`));
    await expect(page, old).toHaveURL(new RegExp(`/${MATHS}/${now}$`));
  }
  // Flashcards opens at the key terms.
  await page.goto(url(10, "maths", MATHS, "/flashcards"));
  await expect(page.locator(".flashcard")).toBeVisible();
  // A section the chapter doesn't have (Explore in a chapter without experiments) falls back to Understand.
  const other = chaptersOf(10, "maths")[0].id;
  await page.goto(url(10, "maths", other, "/practice"));
  await expect(page).toHaveURL(new RegExp(`/${other}/practise$`));
});

test("lesson: start, exit with progress kept, and resume; the section navigation is hidden meanwhile", async ({ page }) => {
  await seed(page, { name: "Asha", cls: 10 });
  await page.goto(url(10, "maths", MATHS));
  await page.locator(".guided-card").click();
  await expect(page).toHaveURL(new RegExp(`/${MATHS}/understand/lesson$`));
  await expect(page.locator(".lesson-title")).toHaveText(chaptersOf(10, "maths").find((c) => c.id === MATHS).title);
  await expect(page.locator(".guided .quiz-clock")).toHaveText("Quick check");
  await expect(nav(page)).toHaveCount(0);
  await expect(page.locator(".hero")).toHaveCount(0);
  await expect(page.getByRole("link", { name: "Exit lesson" })).toBeVisible();
  // Move on a step, then exit.
  for (let i = 0; i < 40 && (await page.locator(".guided .quiz-clock").textContent()) !== "The idea"; i++) await advance(page);
  await page.locator('.guided [data-act="next"]').click();
  const head = await page.locator(".guided .quiz-head").textContent();
  await page.getByRole("link", { name: "Exit lesson" }).click();
  await expect(page).toHaveURL(new RegExp(`/${MATHS}/understand$`));
  await expect(nav(page)).toBeVisible();
  expect(current(await readStore(page)).loop[`10/maths/${MATHS}`]).toBeTruthy();
  const card = page.locator(".guided-card");
  await expect(card).toContainText("Pick up where you left off");
  await expect(card).toContainText("Resume lesson");
  await card.click();
  await expect(page.locator(".guided .lp-resume")).toContainText("Welcome back");
  await expect(page.locator(".guided .quiz-head")).toHaveText(head);
  // Home's Continue learning goes back into the lesson.
  await page.goto("/#/");
  await expect(page.locator("#main-action")).toHaveAttribute("href", new RegExp(`/${MATHS}/understand/lesson$`));
});

test("changing sections keeps progress and the place on the page", async ({ page }) => {
  await seed(page, { name: "Asha", cls: 10 });
  await page.goto(url(10, "science", LIGHT));
  await page.locator('[data-act="done"]').click();
  await expect(page.locator(".pill.good")).toContainText("Complete");
  await page.locator('[data-act="bookmark"]').click();
  await nav(page).getByRole("link", { name: "Practise" }).click();
  await nav(page).getByRole("link", { name: "Understand" }).click();
  await expect(page.locator('[data-act="done"]')).toHaveText(/Completed/);
  await expect(page.locator('[data-act="bookmark"]')).toHaveAttribute("aria-pressed", "true");
  // Scrolled past the hero: a section change keeps that place, and keyboard focus stays on the navigation.
  await page.evaluate(() => window.scrollTo(0, 900));
  await nav(page).getByRole("link", { name: "Practise" }).focus();
  await page.keyboard.press("Enter");
  await expect(page).toHaveURL(/\/practise$/);
  expect(await page.evaluate(() => window.scrollY)).toBeGreaterThan(50);
  await expect(nav(page).getByRole("link", { name: "Practise" })).toBeFocused();
});

test("the hub works in Punjabi and in dark mode on a phone", async ({ page }) => {
  await seed(page, { name: "Asha", cls: 10, lang: "pa" });
  await page.emulateMedia({ colorScheme: "dark" });
  await page.goto(url(10, "science", LIGHT));
  const names = await page.locator("nav.hub-nav a").allTextContents();
  expect(names).toHaveLength(6);
  expect(names.join("")).not.toMatch(/Understand|Visualise|Explore|Practise|Master/);
  await expect(page.locator(".guided-card")).toContainText("ਪਾਠ ਸ਼ੁਰੂ ਕਰੋ");
  // No horizontal scroll of the page.
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth + 1)).toBe(true);
});
