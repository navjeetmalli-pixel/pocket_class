const { test, expect, seed, chaptersOf } = require("./helpers");

// "Build this first": a weak prerequisite (answers recorded, state learning or refresher) shows on the chapter hub and in Today's plan.
const ids6 = chaptersOf(6, "maths").map((c) => c.id);
const FR = ids6.indexOf("fractions");
const opened = Object.fromEntries(ids6.slice(0, FR).map((id) => [`6/maths/${id}`, { opened: Date.now() - 86400000 }]));
const now = Date.now();
// Roll entries as Mastery.fold leaves them: mostly wrong -> "learning"; all right and independent -> "mastered".
const weakRoll = { n: 6, ok: 2, ind: 2, nh: 6, seen: 6, first: now - 5e5, last: now - 1e5, firstOk: 0, lastOk: 0, rec: [0, 1, 0, 0, 1, 0], ret: [0, 0], step: 0, due: 0, rf: 0, err: {}, nw: 0 };
const goodRoll = { ...weakRoll, n: 10, ok: 10, ind: 10, rec: [2, 2, 2, 2, 2, 2, 2, 2], lastOk: 1, firstOk: 1, due: now + 9e8 };

const learner = (roll) => ({ chapters: opened, learn: { v: 1, events: [], roll } });
const FIVE = "5/maths/fractions#like-unlike";

test("a Class 6 learner weak in Class 5 fractions is asked to build it first, on the hub and in the plan", async ({ page }) => {
  await seed(page, { name: "Asha", cls: 6, student: learner({ [FIVE]: weakRoll }) });
  await page.goto("/#/");
  const plan = page.locator("#plan");
  const item = plan.locator(".plan-item").filter({ hasText: "Needed for" });
  await expect(item).toHaveCount(1);
  await expect(item).toContainText("Class 5");
  await expect(item.locator(".plan-kind")).toHaveText("Practice");
  await expect(plan.locator(".plan-item").first().locator(".plan-kind")).toHaveText(/Practice|Review/);
  // Before the lesson it is needed for, and within the time.
  const kinds = await plan.locator(".plan-kind").allTextContents();
  expect(kinds.indexOf("Practice")).toBeLessThan(kinds.indexOf("Lesson"));
  const mins = (await plan.locator(".plan-min").allTextContents()).reduce((a, m) => a + parseInt(m, 10), 0);
  expect(mins).toBeLessThanOrEqual(18);

  // Opening the chapter itself (the plan item is for it).
  await page.goto("/#/chapter/6/maths/fractions/understand");
  const card = page.locator("#build-first");
  await expect(card.getByRole("heading", { name: "Build this first" })).toBeVisible();
  await expect(card.locator(".bf-item")).toHaveCount(1);
  await expect(card).toContainText("Class 5");
  await expect(card.locator(".bf-item")).toHaveAttribute("href", "#/chapter/5/maths/fractions/understand");
});

test("a new learner sees no Build this first, on the hub or in the plan", async ({ page }) => {
  await seed(page, { name: "Asha", cls: 6, student: { chapters: opened } });
  await page.goto("/#/");
  await expect(page.locator("#plan")).toBeVisible();
  await expect(page.locator("#plan").getByText("Needed for")).toHaveCount(0);
  await page.goto("/#/chapter/6/maths/fractions/understand");
  await expect(page.locator(".obj-panel")).toBeVisible();
  await expect(page.locator("#build-first .bf-item")).toHaveCount(0);
  await expect(page.getByText("Build this first")).toHaveCount(0);
});

test("a mastered prerequisite shows nothing", async ({ page }) => {
  await seed(page, { name: "Asha", cls: 6, student: learner({ [FIVE]: goodRoll }) });
  await page.goto("/#/");
  await expect(page.locator("#plan")).toBeVisible();
  await expect(page.locator("#plan").getByText("Needed for")).toHaveCount(0);
  await page.goto("/#/chapter/6/maths/fractions/understand");
  await expect(page.locator(".obj-panel")).toBeVisible();
  await expect(page.locator("#build-first .bf-item")).toHaveCount(0);
});
