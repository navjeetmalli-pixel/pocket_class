// Release lock (js/release.js): with window.POCKET_LOCK = true (the store apps set it through Native.is), Hindi and Punjabi are
// hidden as subjects and as app languages, while everything saved stays. These tests turn the lock on; the rest of the suite
// runs with it off (the website), so nothing else here changes.
const { test, expect, seed, readStore, current, onboard } = require("./helpers");

test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => {
    window.POCKET_LOCK = true;
  });
});

const NATIVE_SCRIPT = /[ऀ-ॿ਀-੿]/;
const cont = (page) => page.getByRole("button", { name: /^Continue/ });
const LOCKED = ["hindi", "hindipb", "punjabi"];

// Welcome to the Subjects step, and what the language controls look like on the way.
async function toSubjects(page, { cls, board }) {
  await page.goto("/");
  await expect(page.locator("[data-lang]")).toHaveCount(0); // welcome: no language switch
  await page.getByRole("button", { name: /Start Learning/ }).click();
  await page.getByRole("button", { name: /I'm a Student/ }).click();
  await cont(page).click();
  await page.locator(`.ob [data-board="${board}"]`).click();
  await cont(page).click();
  await page.getByRole("button", { name: `Class ${cls}`, exact: true }).click();
  await cont(page).click();
  await cont(page).click();
  await expect(page.locator('.ob[data-step="subjects"]')).toBeVisible();
}

for (const [cls, board, expected] of [
  [1, "cbse", ["maths", "english"]],
  [10, "pseb", ["maths", "science", "sstpb", "englishpb", "phc"]],
]) {
  test(`onboarding: Class ${cls} ${board} offers no Hindi or Punjabi and no language switch`, async ({ page }) => {
    await toSubjects(page, { cls, board });
    const ids = await page.locator(".ob [data-sub]").evaluateAll((els) => els.map((e) => e.dataset.sub));
    expect(ids).toEqual(expected);
    const text = await page.locator(".ob").innerText();
    expect(text).not.toMatch(NATIVE_SCRIPT);
    expect(text).not.toMatch(/Hindi|Punjabi/);
    await cont(page).click();
    await expect(page.locator("#ob-name")).toBeVisible(); // About you
    await expect(page.locator("[data-lang]")).toHaveCount(0);
    await expect(page.locator("[data-ll]")).toHaveCount(0);
    await expect(page.locator(".ob")).not.toContainText("language");
  });
}

test("the main tabs show no Hindi or Punjabi (Class 1 CBSE and Class 10 PSEB)", async ({ page }) => {
  for (const [cls, board] of [[1, "cbse"], [10, "pseb"]]) {
    await page.goto("/");
    await page.evaluate(
      ([cls, board]) => localStorage.setItem("vidya:v1", JSON.stringify({ v: 2, theme: "light", lang: "en", current: "s1", students: [{ id: "s1", profile: { name: "Asha", cls, board } }] })),
      [cls, board]
    );
    for (const route of ["#/", "#/learn", "#/games", "#/explore", "#/progress", "#/parent", "#/paths", "#/test", "#/sheets", "#/papers", "#/revise", "#/revise/mistakes", "#/settings", "#/profile"]) {
      await page.goto("/" + route);
      await page.reload();
      await expect(page.locator("#app")).not.toBeEmpty();
      await page.waitForFunction(() => !/Loading/.test(document.getElementById("app").innerText) || document.querySelector("#app .empty") === null, null, { timeout: 15000 });
      const text = await page.locator("body").innerText();
      expect(text, `${board} class ${cls} ${route}`).not.toMatch(NATIVE_SCRIPT);
      expect(text, `${board} class ${cls} ${route}`).not.toMatch(/Hindi|Punjabi/);
    }
  }
});

test("Learn lists subjects without Hindi or Punjabi, and search finds none", async ({ page }) => {
  await seed(page, { cls: 1, board: "cbse" });
  await page.goto("/#/learn");
  await expect(page.locator(".subject-card .subject-name")).toHaveText(["Mathematics", "English"]);
  await expect(page.locator(".subject-hi")).toHaveCount(0);
  await page.goto("/#/search");
  await page.locator("#q").fill("punjabi");
  await expect(page.locator("#results a")).toHaveCount(0);
  await page.locator("#q").fill("alphabet");
  await expect(page.locator("#results a").first()).toBeVisible();
  const hrefs = await page.locator("#results a").evaluateAll((els) => els.map((e) => e.getAttribute("href")));
  expect(hrefs.filter((h) => LOCKED.some((s) => h.includes("/" + s + "/")))).toEqual([]);
});

for (const link of [
  "#/subject/hindi",
  "#/subject/punjabi",
  "#/subject/hindipb",
  "#/cards/punjabi",
  "#/chapter/1/punjabi/anything",
  "#/chapter/6/hindi/anything/understand",
  "#/paths/punjabi",
  "#/paths/punjabi/letters/letters-0",
  "#/play/1/hindi/anything/letters",
  "#/games/punjabi",
  "#/games/random/hindi",
  "#/test/hindi",
  "#/sheets/punjabi",
  "#/worksheet/1/punjabi",
  "#/paper/10/hindi",
  "#/revise/due/punjabi/anything",
]) {
  test(`deep link ${link} goes to Learn with a note`, async ({ page }) => {
    await seed(page, { cls: 1, board: "pseb" });
    await page.goto("/" + link);
    await expect(page).toHaveURL(/#\/learn$/);
    await expect(page.locator("#toast")).toHaveText("Coming soon");
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  });
}

test("a saved profile with app language Punjabi shows English and keeps every saved Punjabi value", async ({ page }) => {
  const at = Date.now() - 5 * 86400000;
  await seed(page, {
    cls: 1,
    board: "pseb",
    lang: "pa",
    student: {
      chapters: { "1/punjabi/some-chapter": { done: true, best: 90, attempts: 2, opened: at } },
      revise: { "1/punjabi/some-chapter": { last: at, n: 1 } },
      mistakes: { "1/punjabi/some-chapter/q1x2y3z": at, "1/hindipb/other/q9": at },
      acc: { "1/punjabi/some-chapter": [3, 4] },
      paths: { punjabi: { letters: { start: 0, checked: null, levels: { "letters-0": { best: 100, n: 1, at, mastered: true } } } } },
      games: { "1/punjabi/some-chapter": { letters: { best: 8, stars: 3, plays: 1, at } } },
      history: [{ title: "Punjabi: quiz", subject: "punjabi", cls: 1, score: 3, total: 4, kind: "quiz", at }],
      profile: { name: "Asha", cls: 1, board: "pseb", subjects: ["punjabi", "maths"], learnLang: "pa" },
    },
  });
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Namaste");
  await expect(page.locator("html")).toHaveAttribute("lang", "en");
  for (const route of ["#/", "#/learn", "#/revise/mistakes", "#/progress", "#/parent", "#/settings", "#/profile"]) {
    await page.goto("/" + route);
    await page.reload();
    await expect(page.locator("html")).toHaveAttribute("lang", "en");
    const text = await page.locator("body").innerText();
    expect(text, route).not.toMatch(NATIVE_SCRIPT);
    expect(text, route).not.toMatch(/Punjabi|Hindi/);
  }
  const store = await readStore(page);
  expect(store.lang).toBe("pa"); // not overwritten: unlocking later restores it
  const s = current(store);
  expect(s.chapters["1/punjabi/some-chapter"]).toMatchObject({ done: true, best: 90, attempts: 2 });
  expect(s.revise["1/punjabi/some-chapter"].n).toBe(1);
  expect(Object.keys(s.mistakes).sort()).toEqual(["1/hindipb/other/q9", "1/punjabi/some-chapter/q1x2y3z"]);
  expect(s.acc["1/punjabi/some-chapter"]).toEqual([3, 4]);
  expect(s.paths.punjabi.letters.levels["letters-0"].mastered).toBe(true);
  expect(s.games["1/punjabi/some-chapter"].letters.stars).toBe(3);
  expect(s.history.some((h) => h.subject === "punjabi")).toBe(true);
  expect(s.profile.subjects).toEqual(["punjabi", "maths"]);
  expect(s.profile.learnLang).toBe("pa");
});

test("Practice by topic lists Maths, Science and English only", async ({ page }) => {
  await seed(page, { cls: 5, board: "pseb" });
  await page.goto("/#/paths");
  await expect(page.locator(".subject-card .subject-name")).toHaveText(["Mathematics", "Science", "English"]);
});

test("English letters and phonics games still work", async ({ page }) => {
  await seed(page, { cls: 1, board: "cbse" });
  await page.goto("/#/");
  await page.waitForFunction(() => window.StudyData && StudyData.chapters(1, "english").length > 0);
  const ch = await page.evaluate(() => StudyData.chapters(1, "english")[0].id);
  await page.goto(`/#/play/1/english/${ch}`);
  await expect(page.locator(".game-card")).not.toHaveCount(0);
  await page.goto(`/#/play/1/english/${ch}/letters`);
  await expect(page.locator(".game-intro")).toBeVisible();
  await page.locator("[data-g=start]").click();
  await expect(page.locator(".game-hud")).toBeVisible();
  await expect(page.locator(".lt-opt").first()).toBeVisible();
  await page.locator(".lt-opt").first().click();
  await expect(page.locator("[data-fb] .feedback")).toBeVisible();
});

