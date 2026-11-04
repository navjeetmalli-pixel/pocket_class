const { test, expect, seed, readStore, current, chaptersOf, quickQuiz } = require("./helpers");

const MATHS = chaptersOf(10, "maths")[0];
// A student's row in Settings (the name sits in an input, so match its value).
const row = (page, name) => page.locator(`.stud-row:has(input[value="${name}"])`);

// 5. Students -----------------------------------------------------------------------------------------------------
test("students: add a second student, progress is separate, switch back, delete", { tag: "@desktop" }, async ({ page }) => {
  await seed(page, { name: "Asha", cls: 10 });

  // Asha takes a quiz.
  await page.goto(`/#/chapter/10/maths/${MATHS.id}/quiz`);
  await quickQuiz(page);
  await page.goto("/#/");
  await expect(page.locator(".stat", { hasText: "day streak" }).locator(".v")).toHaveText("🔥 1");
  await expect(page.locator(".stud-switch")).toHaveCount(0); // a single student has no switcher

  // Add Bunty (Class 7, PSEB) in Settings.
  await page.goto("/#/settings");
  const box = page.locator("#students");
  await expect(box.locator(".stud-row")).toHaveCount(1);
  await box.locator("#new-name").fill("Bunty");
  await box.locator("#new-cls").selectOption("7");
  await box.locator("#new-board").selectOption("pseb");
  await box.getByRole("button", { name: "Add a student" }).click();

  // The new student starts from a clean Home.
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Namaste, Bunty");
  await expect(page.locator(".home-head .sub")).toContainText("Class 7 · PSEB");
  await expect(page.locator(".stat", { hasText: "day streak" }).locator(".v")).toHaveText("🔥 0");
  await expect(page.locator(".stat", { hasText: "quiz average" }).locator(".v")).toHaveText("–");
  await page.goto("/#/progress");
  await expect(page.locator(".stat", { hasText: "quizzes & tests" }).locator(".v")).toHaveText("0");
  await expect(page.locator(".history-row")).toHaveCount(0);

  let store = await readStore(page);
  expect(store.students).toHaveLength(2);
  expect(current(store).profile).toEqual({ name: "Bunty", cls: 7, board: "pseb" });
  expect(store.students[0].history).toHaveLength(1);

  // Switch back to Asha from Home.
  await page.goto("/#/");
  const picker = page.getByRole("combobox", { name: "Student" });
  await expect(picker).toBeVisible();
  await picker.selectOption({ label: "Asha" });
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Namaste, Asha");
  await expect(page.locator(".home-head .sub")).toContainText("Class 10 · CBSE");
  await expect(page.locator(".stat", { hasText: "day streak" }).locator(".v")).toHaveText("🔥 1");
  await page.goto("/#/progress");
  await expect(page.locator(".history-row")).toHaveCount(1);
  store = await readStore(page);
  expect(current(store).profile.name).toBe("Asha");

  // Switch to Bunty with the Switch button in Settings, then back to Asha.
  await page.goto("/#/settings");
  await row(page, "Bunty").getByRole("button", { name: "Switch" }).click();
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Namaste, Bunty");
  await page.goto("/#/settings");
  await row(page, "Asha").getByRole("button", { name: "Switch" }).click();
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Namaste, Asha");

  // Delete Bunty (the confirm dialog is accepted by the fixture).
  await page.goto("/#/settings");
  const bunty = row(page, "Bunty");
  await bunty.getByRole("button", { name: "Delete" }).click();
  await expect(page.locator(".stud-row")).toHaveCount(1);
  await expect(row(page, "Asha")).toBeVisible();
  // The last student can't be deleted.
  await expect(page.locator(".stud-row").getByRole("button", { name: "Delete" })).toHaveCount(0);
  store = await readStore(page);
  expect(store.students).toHaveLength(1);
  expect(current(store).history).toHaveLength(1);
  await page.goto("/#/");
  await expect(page.locator(".stud-switch")).toHaveCount(0);
});

test("students: a student can be renamed", async ({ page }) => {
  await seed(page, { name: "Asha", cls: 5 });
  await page.goto("/#/settings");
  await page.locator("#students [data-rename]").fill("Asha K");
  await page.locator("#students [data-rename]").blur();
  await expect(page.locator("#toast")).toHaveText("Name saved");
  expect(current(await readStore(page)).profile.name).toBe("Asha K");
});
