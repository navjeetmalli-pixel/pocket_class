const { test, expect, seed, readStore, current, chaptersOf, playInstantQuiz } = require("./helpers");

const CH = chaptersOf(10, "maths")[0];
const DAY = 86400000;

// Objectives of a chapter as the app sees them, read from the page (the chapter page loads the content first).
const objectivesOf = (page, cls, subject, chapter) => page.evaluate(([c, s, ch]) => Objectives.forChapter(c, s, ch).map((o) => ({ id: o.id, key: o.key })), [cls, subject, chapter]);

// Logs `n` answers for one objective, `daysAgo` days back, through the call the app uses.
const logAnswers = (page, key, answers, daysAgo) =>
  page.evaluate(
    ([key, answers, daysAgo]) => {
      const p = Objectives.parseKey(key);
      const at = Date.now() - daysAgo * 86400000;
      Store.logLearn(answers.map((ok, i) => ({ t: at + i * 1000, type: "answer", cls: p.cls, subject: p.subject, chapter: p.chapter, obj: p.obj, ok, hints: 0, attempt: 1, source: "quiz" })));
    },
    [key, answers, daysAgo]
  );

// A skill that was mastered four days ago, so its review has come round (Today's plan puts it first).
async function makeDue(page) {
  await page.goto(`/#/chapter/10/maths/${CH.id}/notes`);
  await expect(page.locator(".obj-panel")).toBeVisible();
  const o = (await objectivesOf(page, 10, "maths", CH.id))[0];
  await logAnswers(page, o.key, [true, true, true, true, true, true], 4);
  return o;
}

test("home: a new student sees one main action and a plan with a next lesson", async ({ page }) => {
  await seed(page, { name: "Asha", cls: 7 });
  await page.goto("/#/");
  await expect(page.locator("#main-action")).toContainText("Start here");
  const plan = page.locator("#plan");
  await expect(plan).toBeVisible();
  await expect(plan.getByRole("heading", { name: "Today's plan" })).toBeVisible();
  const items = plan.locator(".plan-item");
  expect(await items.count()).toBeGreaterThanOrEqual(1);
  expect(await items.count()).toBeLessThanOrEqual(3);
  await expect(items.first().locator(".plan-kind")).toHaveText("Lesson");
  // Every item says why it is there, and roughly how long it takes.
  await expect(items.first().locator(".plan-why")).toContainText("A good place to start in");
  await expect(items.first().locator(".plan-min")).toContainText("min");
  // Everything else on Today: the subjects and a way to try something (the study tools are in Learn, progress in Progress).
  await expect(page.locator("#more-tools")).toHaveCount(0);
  await expect(page.locator(".subject-card").first()).toBeVisible();
  await expect(page.locator(".explore")).toBeVisible();
  await expect(page.getByRole("heading", { name: "My subjects" })).toBeVisible();
  const store = current(await readStore(page));
  expect(store.plan.items.length).toBeGreaterThan(0);
});

test("home: due reviews come first with their reasons, and finishing one ticks it and logs a plan event", async ({ page }) => {
  await seed(page, { name: "Asha", cls: 10 });
  await page.goto("/#/");
  const before = await page.locator(".plan-item").count();
  expect(before).toBeGreaterThanOrEqual(1);

  // Time travel: a mastered skill whose review is due, and a chapter last studied nine days ago.
  await makeDue(page);
  await page.evaluate(([k, at]) => (Store.state.revise[k] = { last: at, n: 1 }), [`10/maths/${CH.id}`, Date.now() - 9 * DAY]);
  await page.goto("/#/");
  const review = page.locator(".plan-item", { has: page.locator(".plan-kind", { hasText: "Review" }) });
  await expect(review).toHaveCount(1);
  await expect(review.locator(".plan-title")).toContainText(CH.title);
  await expect(review.locator(".plan-why")).toContainText("1 skill to review here");
  // Reviews are listed before the lesson.
  await expect(page.locator(".plan-item").first().locator(".plan-kind")).toHaveText("Review");
  await expect(page.locator(".plan-item.done")).toHaveCount(0);

  await review.click();
  await expect(page).toHaveURL(/#\/revise\/due\/maths\//);
  await playInstantQuiz(page);

  await page.goto("/#/");
  // The review is ticked (the lesson may be too: it is the same chapter in this fixture).
  await expect(page.locator(".plan-item.done", { has: page.locator(".plan-kind", { hasText: "Review" }) })).toHaveCount(1);
  const done = await page.locator(".plan-item.done").count();
  await expect(page.locator("#plan")).toContainText(new RegExp(`${done} of \\d+ done|All done`));
  const logged = async () => current(await readStore(page)).learn.events.filter((e) => e.type === "plan");
  const ev = await logged();
  expect(ev).toHaveLength(done);
  expect(ev).toContainEqual(expect.objectContaining({ cls: 10, subject: "maths", chapter: CH.id, source: "plan", ok: true }));
  // They stay ticked, and are logged once, after another visit.
  await page.reload();
  await expect(page.locator(".plan-item.done")).toHaveCount(done);
  expect(await logged()).toHaveLength(done);
});

test("home: Continue learning goes back to the exact place, and a Class 2 student gets the simpler home", async ({ page }) => {
  await seed(page, { name: "Asha", cls: 10 });
  await page.goto(`/#/chapter/10/maths/${CH.id}/guided`);
  await expect(page.locator("#guided-mount")).toBeVisible();
  await page.goto("/#/");
  const main = page.locator("#main-action");
  await expect(main).toContainText("Continue learning");
  await expect(main).toContainText(CH.title);
  await expect(main).toContainText("Lesson");
  await expect(main).toHaveAttribute("href", `#/chapter/10/maths/${CH.id}/understand/lesson`);
});

test("home: Class 2 sees the simpler version", async ({ page }) => {
  await seed(page, { name: "Mini", cls: 2 });
  await page.goto("/#/");
  await expect(page.locator(".home-young")).toBeVisible();
  const items = page.locator(".plan-item");
  expect(await items.count()).toBeGreaterThanOrEqual(1);
  expect(await items.count()).toBeLessThanOrEqual(2);
  await expect(page.locator("#plan")).toHaveClass(/plan-young/);
  await expect(page.locator(".stats .stat")).toHaveCount(0); // Today shows no statistics: they are in Progress
  // Bigger tiles: the subject names and plan titles are larger than on the older version.
  const size = (sel) => page.locator(sel).first().evaluate((e) => parseFloat(getComputedStyle(e).fontSize));
  expect(await size(".subject-name")).toBeGreaterThanOrEqual(19);
  expect(await size(".plan-title")).toBeGreaterThanOrEqual(18);
  const h = await page.locator(".plan-item").first().evaluate((e) => e.getBoundingClientRect().height);
  expect(h).toBeGreaterThanOrEqual(84);
  await page.goto("/#/games");
  await expect(page.locator(".quick").first()).toBeVisible();
});

test("progress: concept learning and exam readiness are shown separately after a quiz and a mock test", async ({ page }) => {
  await seed(page, { name: "Asha", cls: 10 });
  // A chapter quiz (concept evidence) ...
  await page.goto(`/#/chapter/10/maths/${CH.id}/quiz`);
  await playInstantQuiz(page);
  // ... then before any mock test: concept has numbers, exam has none.
  await page.goto("/#/progress");
  const maths = page.locator(".rd-subj", { hasText: "Mathematics" }).first();
  await expect(maths.locator('.rd-box[aria-label="Concept learning"] .rd-stages [role=listitem]')).toHaveCount(4);
  await expect(maths.locator('.rd-box[aria-label="Exam readiness"]')).toContainText("Chapters in a mock test");
  await expect(maths.locator('.rd-box[aria-label="Exam readiness"] .rd-line', { hasText: "Mock test answers" })).toContainText("–");
  await expect(maths.locator('.rd-box[aria-label="Exam readiness"] .rd-next')).toContainText("Take a mock test");

  // A timed mock test in Maths.
  await page.goto("/#/test/maths");
  await page.locator('[data-count="20"]').click();
  await page.locator('[data-act="start"]').click();
  await expect(page.locator("[data-clock]")).toBeVisible();
  for (let i = 0; i < 20; i++) {
    await page.locator(".options .option").first().click();
    if (i < 19) await page.locator('.quiz-nav [data-act="next"]').click();
  }
  await page.locator('.quiz-nav [data-act="submit"]').click();
  await expect(page.locator(".result-top")).toBeVisible();

  const store = current(await readStore(page));
  const ex = Object.values(store.exam);
  expect(ex.length).toBeGreaterThan(0);
  expect(ex.every((e) => e.f.mcq || e.f.ar)).toBe(true);
  expect(ex.some((e) => e.timed[1] > 0)).toBe(true);

  await page.goto("/#/progress");
  const box = page.locator(".rd-subj", { hasText: "Mathematics" }).first();
  const concept = box.locator('.rd-box[aria-label="Concept learning"]');
  const exam = box.locator('.rd-box[aria-label="Exam readiness"]');
  await expect(concept).toContainText("Understanding");
  await expect(concept).toContainText("Ready to apply");
  await expect(concept).not.toContainText("Mock test answers");
  await expect(exam).toContainText("Mock test answers");
  await expect(exam).not.toContainText("Ready to apply");
  await expect(exam.locator(".rd-line", { hasText: "Mock test answers" })).not.toContainText("–");
  await expect(exam.locator(".rd-line", { hasText: "With the clock on" })).toBeVisible();
  await expect(exam).toContainText("Being quick is not scored");
  // Per chapter: both measures on one row, side by side but separate.
  await expect(box.locator(".rd-ch", { hasText: CH.title })).toContainText("Concept learning");
  await expect(box.locator(".rd-ch", { hasText: CH.title })).toContainText("Mock tests");

  // The parent page says the same in plain words, with no label on the child.
  await page.goto("/#/parent");
  await expect(page.locator(".rd-parent")).toContainText("In mock tests");
  await expect(page.locator(".rd-parent")).toContainText("skills started");
});

test("progress: small recognitions for learning behaviours, with no points or ranks", async ({ page }) => {
  await seed(page, { name: "Asha", cls: 10 });
  await page.goto(`/#/chapter/10/maths/${CH.id}/notes`);
  await expect(page.locator(".obj-panel")).toBeVisible();
  const objs = await objectivesOf(page, 10, "maths", CH.id);
  await page.goto("/#/progress");
  await expect(page.getByRole("heading", { name: "Recognitions" })).toBeVisible();
  await expect(page.getByText("Recognitions appear as you learn")).toBeVisible();

  // Wrong, then right twice -> improved after feedback. Right, then right again 3 days later -> remembered after a break.
  await logAnswers(page, objs[0].key, [false, true, true], 1);
  await logAnswers(page, objs[1].key, [true], 3);
  await logAnswers(page, objs[1].key, [true], 0);
  // A teach-back with an explanation and two key points ticked.
  await page.evaluate((ck) => Store.setTeach(ck, { text: "This chapter is about how numbers share factors and how we find them.", ticks: [0, 1] }), `10/maths/${CH.id}`);
  await page.reload();
  const list = page.locator(".reward-list");
  await expect(list).toContainText("Improved after feedback");
  await expect(list).toContainText("Remembered after a break");
  await expect(list).toContainText("Explained a chapter in your own words");
  await expect(page.getByText("There are no points or ranks")).toBeVisible();
});

test("settings: Show streak switch hides the streak everywhere and never shames a missed day", async ({ page }) => {
  await seed(page, { name: "Asha", cls: 10 });
  await page.goto("/#/progress");
  // With no study yet the streak shows a dash, not a zero.
  await expect(page.locator(".stat", { hasText: "day streak" }).locator(".v")).toHaveText("–");
  await page.goto("/#/settings");
  const sw = page.locator("#show-streak");
  await expect(sw).toBeChecked();
  await sw.uncheck();
  expect(current(await readStore(page)).prefs).toEqual({ streak: false });

  await page.goto("/#/progress");
  await expect(page.locator(".stat", { hasText: "day streak" })).toHaveCount(0);
  await expect(page.locator(".stat", { hasText: "skills started" })).toBeVisible();
  await page.goto("/#/parent");
  await expect(page.locator(".stat", { hasText: "day streak" })).toHaveCount(0);

  await page.goto("/#/settings");
  await page.locator("#show-streak").check();
  await page.goto("/#/progress");
  await expect(page.locator(".stat", { hasText: "day streak" })).toBeVisible();
});

test("home: in Punjabi the plan, progress and readiness read in Punjabi", async ({ page }) => {
  await seed(page, { name: "Asha", cls: 7, lang: "pa" });
  await page.goto("/#/");
  await expect(page.locator("#plan")).toContainText("ਅੱਜ ਦੀ ਯੋਜਨਾ");
  await expect(page.locator("nav a:visible", { hasText: "ਸਿੱਖੋ" }).first()).toBeVisible();
  await page.goto("/#/progress");
  await expect(page.getByRole("heading", { name: "ਸ਼ਾਬਾਸ਼ੀਆਂ" })).toBeVisible();
  await expect(page.locator(".rd-box").first()).toBeVisible();
});
