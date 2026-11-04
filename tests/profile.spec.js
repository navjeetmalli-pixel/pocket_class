const { test, expect, seed, readStore, current, expectedSubjects, expectedSubjectIds, openMenu } = require("./helpers");

const h1 = (page) => page.getByRole("heading", { level: 1 });
const cards = (page) => page.locator(".subject-card .subject-name");

// Learner profiles: old saves, migration, the Profile page, and what the rest of the app takes from the profile.

test("profile: a save from before profiles loads unchanged, with setup counted as done", async ({ page }) => {
  await seed(page, { name: "Asha", cls: 10 }); // the old shape: { name, cls, board } only
  await page.goto("/#/");
  await expect(h1(page)).toContainText("Namaste, Asha"); // no setup screens
  await expect(page.locator(".subject-card")).toHaveCount(expectedSubjects(10, "cbse").length);
  const p = await page.evaluate(() => Store.state.profile);
  expect(p).toMatchObject({ name: "Asha", cls: 10, board: "cbse", role: "student", avatar: null, view: "class", subjects: null, learnLang: "en", goal: null, setup: { step: "done", done: true } });
  await expect(page.locator("#tabbar, #sidebar").first()).toBeAttached();
});

test("profile: damaged profile fields are repaired, not trusted", async ({ page }) => {
  await seed(page, { name: "Asha", cls: 9, student: { profile: { name: "Asha", cls: 9, board: "cbse", view: "weird", goal: 99, avatar: "zz", learnLang: "fr", subjects: "maths", role: "boss", setup: "yes" } } });
  await page.goto("/#/");
  await expect(h1(page)).toContainText("Namaste, Asha");
  const p = await page.evaluate(() => Store.state.profile);
  expect(p).toMatchObject({ view: "class", goal: null, avatar: null, learnLang: "en", subjects: null, role: "student", setup: { done: true } });
});

test("profile: exported backups carry the profile and restore it", async ({ page }) => {
  await seed(page, { name: "Asha", cls: 9, student: { profile: { name: "Asha", cls: 9, board: "cbse", view: "subject", subjects: ["maths", "science"], avatar: "a07", learnLang: "pa", goal: 20, role: "student", setup: { step: "done", done: true } } } });
  await page.goto("/#/");
  const text = await page.evaluate(() => Store.exportData());
  const back = JSON.parse(text).students[0].profile;
  expect(back).toMatchObject({ view: "subject", subjects: ["maths", "science"], avatar: "a07", learnLang: "pa", goal: 20 });
  // Reset the profile, restore: the fields return.
  const ok = await page.evaluate((t) => {
    Store.setProfile({ view: "class", subjects: null, avatar: null, goal: null, learnLang: "en" });
    return Store.importData(t);
  }, text);
  expect(ok).toBe(true);
  expect(await page.evaluate(() => Store.state.profile)).toMatchObject({ view: "subject", subjects: ["maths", "science"], avatar: "a07", learnLang: "pa", goal: 20 });
});

test("profile: Home lists only the picked subjects in Subject-wise view, all in Class-wise", async ({ page }) => {
  await seed(page, { name: "Asha", cls: 9, student: { profile: { name: "Asha", cls: 9, board: "cbse", view: "subject", subjects: ["maths", "science"], setup: { step: "done", done: true } } } });
  await page.goto("/#/");
  expect((await cards(page).allTextContents()).length).toBe(2);
  await page.goto("/#/profile");
  await expect(h1(page)).toHaveText("Profile");
  await page.locator('[data-view="class"]').click();
  await page.goto("/#/");
  await expect(cards(page)).toHaveCount(expectedSubjects(9, "cbse").length);
  // And back: the picks were kept while Class-wise.
  await page.goto("/#/profile");
  await page.locator('[data-view="subject"]').click();
  await page.goto("/#/");
  await expect(cards(page)).toHaveCount(2);
});

test("profile: edit name, picture, lesson language and goal from the Profile page (reached from Home)", async ({ page }) => {
  await seed(page, { name: "Asha", cls: 8 });
  await page.goto("/#/");
  await openMenu(page);
  await page.locator("#menu-sheet").getByRole("link", { name: "Profile" }).click();
  await expect(h1(page)).toHaveText("Profile");
  await page.locator("#pf-name").fill("Asha K");
  await page.locator("#pf-name").blur();
  await page.getByRole("button", { name: "Picture 5" }).click();
  await expect(page.getByRole("button", { name: "Picture 5" })).toHaveAttribute("aria-pressed", "true");
  await page.locator('[data-ll="hi"]').click();
  await page.locator('[data-goal="30"]').click();
  await expect(page.locator('[data-goal="30"]')).toHaveAttribute("aria-pressed", "true");
  const p = current(await readStore(page)).profile;
  expect(p).toMatchObject({ name: "Asha K", avatar: "a05", learnLang: "hi", goal: 30 });
  await page.goto("/#/");
  await expect(h1(page)).toContainText("Asha K");
  await expect(page.locator(".profile-btn svg.avatar")).toBeVisible(); // the picture, not just a letter
});

test("profile: changing class asks first when picked subjects would be dropped, and keeps progress", async ({ page, dialogs }) => {
  const key = "9/sst/some-chapter";
  await seed(page, { name: "Asha", cls: 9, student: { profile: { name: "Asha", cls: 9, board: "cbse", view: "subject", subjects: ["maths", "sst"], setup: { step: "done", done: true } }, chapters: { [key]: { done: true, best: 90, attempts: 1 } } } });
  await page.goto("/#/profile");
  // Class 11 has no sst: the confirm names it.
  await page.getByRole("button", { name: "Class 11", exact: true }).click();
  await expect(h1(page)).toHaveText("Profile");
  await expect.poll(() => dialogs.length).toBe(1);
  expect(dialogs[0]).toMatch(/isn't offered for this board and class/);
  const s = current(await readStore(page));
  expect(s.profile.cls).toBe(11);
  expect(s.profile.subjects).toEqual(["maths"]);
  expect(s.chapters[key]).toMatchObject({ done: true, best: 90 }); // never deleted
  // A class that keeps every pick doesn't ask.
  await page.getByRole("button", { name: "Class 12", exact: true }).click();
  await expect.poll(async () => current(await readStore(page)).profile.cls).toBe(12);
  expect(dialogs).toHaveLength(1);
});

test("profile: declining the confirm leaves class and subjects as they were", async ({ page }) => {
  await seed(page, { name: "Asha", cls: 9, student: { profile: { name: "Asha", cls: 9, board: "cbse", view: "subject", subjects: ["maths", "sst"], setup: { step: "done", done: true } } } });
  await page.goto("/#/profile");
  page.removeAllListeners("dialog");
  page.on("dialog", (d) => d.dismiss());
  await page.getByRole("button", { name: "Class 11", exact: true }).click();
  await page.waitForTimeout(300);
  expect(current(await readStore(page)).profile).toMatchObject({ cls: 9, subjects: ["maths", "sst"] });
});

test("profile: Store helpers - availableSubjects, droppedBy and setProfile", async ({ page }) => {
  await seed(page, { name: "Asha", cls: 9, student: { profile: { name: "Asha", cls: 9, board: "cbse", view: "subject", subjects: ["maths", "sst"], setup: { step: "done", done: true } } } });
  await page.goto("/#/");
  const r = await page.evaluate(() => ({
    avail: Store.availableSubjects().map((s) => s.id),
    availPseb: Store.availableSubjects(9, "pseb").map((s) => s.id),
    drop11: Store.droppedBy({ cls: 11 }),
    dropNone: Store.droppedBy({ cls: 10 }),
    selected: Store.selectedSubjects(),
    shown: Store.shownSubjects(),
  }));
  expect(r.avail).toEqual(expectedSubjectIds(9, "cbse"));
  expect(r.availPseb).toEqual(expectedSubjectIds(9, "pseb"));
  expect(r.drop11).toEqual(["sst"]);
  expect(r.dropNone).toEqual([]);
  expect(r.selected).toEqual(["maths", "sst"]);
  expect(r.shown).toEqual(["maths", "sst"]);
  // setProfile drops what the new class doesn't offer and says which; with nothing left the picks become "all".
  const out = await page.evaluate(() => {
    const dropped = Store.setProfile({ cls: 11 });
    return { dropped, subjects: Store.state.profile.subjects };
  });
  expect(out).toEqual({ dropped: ["sst"], subjects: ["maths"] });
});

test("profile: Today's plan only uses the picked subjects", async ({ page }) => {
  await seed(page, { name: "Asha", cls: 8, student: { profile: { name: "Asha", cls: 8, board: "cbse", view: "subject", subjects: ["science"], goal: 15, setup: { step: "done", done: true } } } });
  await page.goto("/#/");
  await expect(h1(page)).toContainText("Namaste");
  await expect(page.locator(".plan-card, #plan, .plan").first()).toBeAttached();
  const plan = current(await readStore(page)).plan;
  expect(plan.items.length).toBeGreaterThan(0);
  for (const it of plan.items) expect(it.subject).toBe("science");
  expect(await page.evaluate(() => Store.goal())).toBe(15);
});

test("profile: Settings links to the Profile and shows pictures in the Students list", async ({ page }) => {
  await seed(page, { name: "Asha", cls: 8, student: { profile: { name: "Asha", cls: 8, board: "cbse", avatar: "a02", setup: { step: "done", done: true } } } });
  await page.goto("/#/settings");
  await expect(page.locator(".stud-row svg.avatar")).toBeVisible();
  await page.locator("#profile-link").click();
  await expect(h1(page)).toHaveText("Profile");
  await expect(page.getByRole("button", { name: "Picture 2" })).toHaveAttribute("aria-pressed", "true");
});
