const { test, expect, seed, current, readStore, expectedSubjects, expectedSubjectIds } = require("./helpers");

// What a request URL is: { cls, file, kind: "index" | "subject" | "practice" | "diagram" | "objectives" }.
function classify(url) {
  const m = new URL(url).pathname.match(/^\/data\/class(\d+)\/(?:(practice|diagrams)\/)?([\w-]+)\.js$/);
  if (!m) return null;
  const [, cls, folder, name] = m;
  if (folder === "practice") return { cls: Number(cls), kind: "practice", subject: name.replace(/-\d+$/, "") };
  if (folder === "diagrams") return { cls: Number(cls), kind: "diagram", subject: name };
  if (name === "objectives") return { cls: Number(cls), kind: "objectives" }; // the class's learning objectives: one small file, not a subject
  return name === "index" ? { cls: Number(cls), kind: "index" } : { cls: Number(cls), kind: "subject", subject: name };
}

function trackData(page) {
  const seen = [];
  page.on("request", (r) => {
    const c = classify(r.url());
    if (c) seen.push(c);
  });
  const subjects = (cls) => [...new Set(seen.filter((c) => c.cls === cls && c.kind === "subject").map((c) => c.subject))].sort();
  const indexes = () => [...new Set(seen.filter((c) => c.kind === "index").map((c) => c.cls))].sort((a, b) => a - b);
  const classes = () => [...new Set(seen.map((c) => c.cls))].sort((a, b) => a - b);
  const practice = (cls) => [...new Set(seen.filter((c) => c.cls === cls && (c.kind === "practice" || c.kind === "diagram")).map((c) => c.subject))].sort();
  return { seen, subjects, indexes, classes, practice };
}

// 7. Switching class in Settings loads only that class's index and the subject files that get opened ---------------
test("class switch: only the new class's index and the opened subject's files are requested", { tag: "@desktop" }, async ({ page }) => {
  await seed(page, { name: "Asha", cls: 10 });
  const net = trackData(page);

  // Home of Class 10: the index, plus the one subject today's question comes from.
  await page.goto("/#/");
  await expect(page.getByRole("heading", { level: 2, name: "Question of the day" })).toBeVisible();
  expect(net.indexes()).toEqual([10]);
  expect(net.classes()).toEqual([10]);
  expect(net.subjects(10).length, "home loads one subject (today's question)").toBe(1);
  const qotd = net.subjects(10)[0];
  expect(expectedSubjectIds(10, "cbse")).toContain(qotd);

  // Switch to Class 7 in Settings.
  await page.goto("/#/settings");
  await page.locator('[data-cls="7"]').click();
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Namaste, Asha");
  await expect(page.locator(".home-head .sub")).toContainText("Class 7 · CBSE");
  await expect(page.getByRole("heading", { level: 2, name: "Question of the day" })).toBeVisible();
  expect(current(await readStore(page)).profile.cls).toBe(7);

  const names = expectedSubjects(7, "cbse");
  await expect(page.locator(".subject-card")).toHaveCount(names.length);
  expect((await page.locator(".subject-card .subject-name").allTextContents()).sort()).toEqual(names.sort());

  // The class index is new; no other class's index was fetched, and class 10 was not fetched again.
  expect(net.indexes()).toEqual([7, 10]);
  expect(net.classes()).toEqual([7, 10]);
  expect(net.subjects(7).length, "only today's question subject is loaded for Class 7").toBeLessThanOrEqual(1);

  // Opening one subject loads that subject's file (and no other).
  const before = net.subjects(7);
  const target = expectedSubjectIds(7, "cbse").find((id) => !before.includes(id) && id !== "maths");
  await page.locator(`a.subject-card[href="#/subject/${target}"]`).click();
  await expect(page.locator(".hero h1")).toBeVisible();
  await expect(page.locator(".chapter-row").first()).toBeVisible();
  expect(net.subjects(7)).toEqual([...before, target].sort());
  expect(net.practice(7)).toEqual([]); // the subject list needs no practice banks

  // Opening a chapter then loads that subject's practice files, still nothing from other subjects.
  await page.locator(".chapter-row").first().click();
  await expect(page.locator("article.note").first()).toBeVisible();
  expect(net.subjects(7)).toEqual([...before, target].sort());
  expect(net.practice(7).every((s) => s === target || before.includes(s))).toBe(true);
  expect(net.classes()).toEqual([7, 10]);
});

test("class switch: PSEB board switch loads PSEB subjects for the class", async ({ page }) => {
  await seed(page, { name: "Asha", cls: 9, board: "cbse" });
  const net = trackData(page);
  await page.goto("/#/settings");
  await page.getByRole("button", { name: "PSEB (Punjab Board)" }).click();
  await expect(page.locator(".home-head .sub")).toContainText("Class 9 · PSEB");
  const names = expectedSubjects(9, "pseb");
  await expect(page.locator(".subject-card")).toHaveCount(names.length);
  expect((await page.locator(".subject-card .subject-name").allTextContents()).sort()).toEqual(names.sort());
  expect(net.classes().every((c) => c === 9)).toBe(true);
});
