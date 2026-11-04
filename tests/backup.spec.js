const fs = require("fs");
const { test, expect, seed, readStore, current, chaptersOf, quickQuiz } = require("./helpers");

const MATHS = chaptersOf(10, "maths")[0];
const toast = (page) => page.locator("#toast");

// 6. Backup and restore ---------------------------------------------------------------------------------------------
test("backup: Save backup downloads a file; after a reset, Restore backup brings the progress back", async ({ page }) => {
  await seed(page, { name: "Asha", cls: 10 });
  await page.goto(`/#/chapter/10/maths/${MATHS.id}/quiz`);
  await quickQuiz(page);
  const before = current(await readStore(page));
  expect(before.history).toHaveLength(1);

  // Save the backup and read the downloaded file.
  await page.goto("/#/settings");
  const [download] = await Promise.all([page.waitForEvent("download"), page.getByRole("button", { name: "Save backup" }).click()]);
  expect(download.suggestedFilename()).toMatch(/^pocket-class-progress-\d{4}-\d{2}-\d{2}\.json$/);
  const file = await download.path();
  const backup = JSON.parse(fs.readFileSync(file, "utf8"));
  expect(backup).toMatchObject({ app: "vidya", version: 2 });
  expect(backup.students).toHaveLength(1);
  expect(backup.students[0].profile).toMatchObject({ name: "Asha", cls: 10, board: "cbse", view: "class", subjects: null, setup: { done: true } }); // the profile fields are in the backup
  expect(backup.students[0].history).toHaveLength(1);

  // Reset: the profile stays, the progress goes.
  await page.getByRole("button", { name: "Reset", exact: true }).click();
  await expect(toast(page)).toHaveText("Progress reset");
  let now = current(await readStore(page));
  expect(now.profile.name).toBe("Asha");
  expect(now.history).toEqual([]);
  expect(now.chapters).toEqual({});

  // Restore it.
  await page.locator("#restore").setInputFiles(file);
  await expect(toast(page)).toHaveText("Progress restored");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Namaste, Asha");
  now = current(await readStore(page));
  expect(now.history).toEqual(before.history);
  expect(now.chapters).toEqual(before.chapters);
  await page.goto("/#/progress");
  await expect(page.locator(".history-row")).toHaveCount(1);
});

test("backup: a backup made before there were several students restores", { tag: "@desktop" }, async ({ page }) => {
  await seed(page, { name: "Asha", cls: 10 });
  await page.goto("/#/settings");

  // The single-student shape Store.exportData() used to write: everything under "state".
  const at = Date.now() - 86400000;
  const old = {
    app: "vidya",
    version: 1,
    saved: at,
    theme: "dark",
    state: {
      profile: { name: "Old Kid", cls: 6, board: "cbse" },
      chapters: { "6/maths/knowing-our-numbers": { done: true, best: 80, attempts: 2, opened: at } },
      bookmarks: [],
      mistakes: {},
      cards: {},
      history: [{ title: "Maths · Knowing Our Numbers", subject: "maths", cls: 6, score: 8, total: 10, kind: "chapter", at }],
      days: { "2026-01-01": { min: 5, acts: 3 } },
      theme: "dark",
    },
  };
  await page.locator("#restore").setInputFiles({ name: "old-backup.json", mimeType: "application/json", buffer: Buffer.from(JSON.stringify(old)) });
  await expect(toast(page)).toHaveText("Progress restored");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Namaste, Old Kid");
  await expect(page.locator(".home-head .sub")).toContainText("Class 6");
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");

  const store = await readStore(page);
  expect(store.v).toBe(2);
  expect(store.students).toHaveLength(1);
  const s = current(store);
  expect(s.profile).toMatchObject(old.state.profile);
  expect(s.profile).toMatchObject({ role: "student", avatar: null, view: "class", subjects: null, learnLang: "en", goal: null, setup: { done: true } }); // an old backup: setup counts as done
  expect(s.chapters).toEqual(old.state.chapters);
  expect(s.history).toEqual(old.state.history);
  expect(store.theme).toBe("dark");
  await page.goto("/#/progress");
  await expect(page.locator(".history-row")).toContainText("Knowing Our Numbers");
});

test("backup: a file that is not a Pocket Class backup is refused", async ({ page }) => {
  await seed(page, { name: "Asha", cls: 10 });
  await page.goto("/#/settings");
  await page.locator("#restore").setInputFiles({ name: "x.json", mimeType: "application/json", buffer: Buffer.from('{"hello":"world"}') });
  await expect(toast(page)).toHaveText("That file isn't a Pocket Class backup");
  expect(current(await readStore(page)).profile.name).toBe("Asha");
});
