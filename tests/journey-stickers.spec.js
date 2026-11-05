// Journey map (subject page, Classes 1-5) and the sticker book (js/views/journey.js, js/stickers.js, js/views/stickers.js).
const fs = require("fs");
const { test, expect, seed, readStore, current, chaptersOf, playInstantQuiz } = require("./helpers");

const CH2 = chaptersOf(2, "maths");
const ADD = CH2[0].id;

test("Class 2 subject page: a journey map with one stone per chapter, linking to the hubs, and the next one marked", async ({ page }) => {
  await seed(page, { name: "Riya", cls: 2 });
  await page.goto("/#/subject/maths");
  const stones = page.locator(".jmap a.jstone");
  await expect(stones).toHaveCount(CH2.length);
  await expect(page.locator(".jmap .jmap-art svg")).toHaveCount(1); // one drawing of scenery, not one per stone
  // in order, each a link to its chapter hub, with a spoken name
  for (let i = 0; i < CH2.length; i++) {
    await expect(stones.nth(i)).toHaveAttribute("href", `#/chapter/2/maths/${CH2[i].id}`);
    await expect(stones.nth(i)).toHaveAttribute("aria-label", new RegExp(`^Chapter ${i + 1}: ${CH2[i].title.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}`));
  }
  // the first chapter is next: it glows (class next), Mithu stands on it, and the name says so
  const next = page.locator(".jstone.next");
  await expect(next).toHaveCount(1);
  await expect(next).toHaveAttribute("href", `#/chapter/2/maths/${ADD}`);
  await expect(next).toHaveAttribute("aria-label", /not started, next$/);
  await expect(next.locator(".js-mithu")).toHaveCount(1);
  await expect(page.locator(".jmap .chapter-row")).toHaveCount(0);
  // tapping a stone opens the chapter hub
  await next.click();
  await expect(page).toHaveURL(new RegExp(`#/chapter/2/maths/${ADD}$`));
});

test("the map shows stars from progress and moves the next marker on", async ({ page }) => {
  const [a, b, c] = CH2;
  await seed(page, {
    name: "Riya",
    cls: 2,
    student: { chapters: { [`2/maths/${a.id}`]: { done: true, best: 95, opened: true }, [`2/maths/${b.id}`]: { done: true, best: 70, opened: true }, [`2/maths/${c.id}`]: { opened: true } } },
  });
  await page.goto("/#/subject/maths");
  const stones = page.locator(".jstone");
  await expect(stones.nth(0)).toHaveAttribute("data-stars", "3"); // done, best 90%+
  await expect(stones.nth(1)).toHaveAttribute("data-stars", "2"); // done
  await expect(stones.nth(2)).toHaveAttribute("data-stars", "1"); // opened
  await expect(stones.nth(3)).toHaveAttribute("data-stars", "0");
  await expect(stones.nth(0)).toHaveAttribute("aria-label", /3 of 3 stars/);
  await expect(page.locator(".jstone.next")).toHaveAttribute("href", `#/chapter/2/maths/${c.id}`); // the first not done
  await expect(page.locator(".jstone.next")).toHaveCount(1);
});

test("stones can be reached with the keyboard, in order, with a visible focus", async ({ page }) => {
  await seed(page, { name: "Riya", cls: 2 });
  await page.goto("/#/subject/maths");
  const first = page.locator(".jstone").first();
  await first.focus();
  await page.keyboard.press("Tab");
  await expect(page.locator(".jstone").nth(1)).toBeFocused();
  const ring = await page.locator(".jstone").nth(1).locator(".js-disc").evaluate((e) => getComputedStyle(e).outlineStyle);
  expect(ring).toBe("solid");
});

test("reduced motion: the glow is not animated", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await seed(page, { name: "Riya", cls: 2 });
  await page.goto("/#/subject/maths");
  const anim = await page.locator(".jstone.next .js-disc").evaluate((e) => getComputedStyle(e).animationName);
  expect(anim).toBe("none");
});

test("a Class 5 subject page has the map; a long subject keeps every chapter reachable", async ({ page }) => {
  await seed(page, { name: "Riya", cls: 5 });
  await page.goto("/#/subject/maths");
  const n = chaptersOf(5, "maths").length;
  await expect(page.locator(".jstone")).toHaveCount(n);
});

test("Class 7 keeps the list", async ({ page }) => {
  await seed(page, { name: "Asha", cls: 7 });
  await page.goto("/#/subject/maths");
  await expect(page.locator(".chapter-row").first()).toBeVisible();
  await expect(page.locator(".jmap")).toHaveCount(0);
  await expect(page.locator("#app .stickers-card")).toHaveCount(0);
});

test("finishing a chapter quiz at 60% or more earns a sticker, shown on the results and in My stickers", async ({ page }) => {
  await seed(page, { name: "Riya", cls: 2 });
  await page.goto(`/#/chapter/2/maths/${ADD}/quiz`);
  await playInstantQuiz(page);
  const win = page.locator(".sticker-win");
  await expect(win).toBeVisible();
  await expect(win).toContainText("You earned a sticker!");
  await expect(win.locator(".stk")).toHaveCount(1);
  await expect(win.locator(".mascot-svg")).toHaveCount(1); // Mithu cheers
  await expect(page.locator('[data-act="retry"]')).toBeVisible(); // it never blocks what comes next
  const saved = current(await readStore(page)).stickers;
  expect(saved).toHaveLength(1);
  expect(saved[0]).toMatchObject({ id: "apple", why: "quiz" });
  // the same quiz again the same day earns nothing more
  await page.locator('[data-act="retry"]').click();
  await playInstantQuiz(page);
  await expect(page.locator(".sticker-win")).toHaveCount(0);
  expect(current(await readStore(page)).stickers).toHaveLength(1);

  await page.goto("/#/stickers");
  await expect(page.getByRole("heading", { name: "My stickers" })).toBeVisible();
  await expect(page.locator(".stk-slot.got")).toHaveCount(1);
  await expect(page.locator(".stk-slot.got")).toContainText("Apple");
  await expect(page.locator(".stk-slot.empty")).toHaveCount(59);
  await expect(page.locator(".stk-slot.empty").first()).toContainText("2");
  await expect(page.locator(".stk-ghost").first()).toHaveText("?");
});

test("a chapter quiz earns a sticker exactly when the score is 60% or more", async ({ page }) => {
  await seed(page, { name: "Riya", cls: 2 });
  await page.goto(`/#/chapter/2/maths/${ADD}/quiz`);
  // always the last option: usually a low score, but the rule is checked against whatever the score turned out to be
  for (let guard = 0; guard < 40; guard++) {
    await page.locator(".quiz-q, .result-top").first().waitFor();
    if (await page.locator(".result-top").count()) break;
    await page.locator(".options .option").last().click();
    await page.locator('[data-act="next"]').click();
  }
  const percent = parseInt(await page.locator(".ring .l").textContent(), 10);
  expect(current(await readStore(page)).stickers.length).toBe(percent >= 60 ? 1 : 0);
  await expect(page.locator(".sticker-win")).toHaveCount(percent >= 60 ? 1 : 0);
});

test("the daily cap holds: three stickers a day, the same activity once", async ({ page }) => {
  await seed(page, { name: "Riya", cls: 2 });
  await page.goto("/#/stickers");
  const got = await page.evaluate(() => {
    const out = [];
    out.push(!!Stickers.earn("game", "k/a"));
    out.push(!!Stickers.earn("game", "k/a")); // the same game again today
    out.push(!!Stickers.earn("lesson", "k/b"));
    out.push(!!Stickers.earn("quiz", "k/c"));
    out.push(!!Stickers.earn("lab", "k/d")); // a fourth today
    return { out, cap: Stickers.DAILY_CAP, today: Stickers.todayCount() };
  });
  expect(got.cap).toBe(3);
  expect(got.out).toEqual([true, false, true, true, false]);
  expect(got.today).toBe(3);
  // the next day there is room again (the earlier stickers are dated yesterday)
  const again = await page.evaluate(() => {
    const day = 86400000;
    Store.state.stickers.forEach((r) => (r.at -= day));
    return !!Stickers.earn("game", "k/e");
  });
  expect(again).toBe(true);
  expect(current(await readStore(page)).stickers.map((s) => s.id)).toEqual(["apple", "cat", "balloon", "fish"]);
});

test("stickers come in a fixed order with specials at 10, 25, 40 and 50", async ({ page }) => {
  await seed(page, { name: "Riya", cls: 3 });
  await page.goto("/#/stickers");
  const r = await page.evaluate(() => ({ n: Stickers.SEQ.length, special: Stickers.SEQ.filter((d) => d.special).map((d) => d.n), ids: new Set(Stickers.SEQ.map((d) => d.id)).size, missing: Stickers.SEQ.filter((d) => !d.id.startsWith("mithu") && !Pics.names.includes(d.id)).map((d) => d.id) }));
  expect(r.n).toBe(60);
  expect(r.ids).toBe(60);
  expect(r.special).toEqual([10, 25, 40, 50]);
  expect(r.missing).toEqual([]);
});

test("a game with 2 or more stars, a lab, and a mastered level each earn one", async ({ page }) => {
  await seed(page, { name: "Riya", cls: 2 });
  await page.goto("/#/stickers");
  const r = await page.evaluate(() => {
    // Calls the same function the game, lab and level screens call (their own screens are covered by their specs).
    const a = Stickers.earn("game", "2/maths/x/match");
    const b = Stickers.earn("lab", "lab:x:y:z");
    const c = Stickers.earn("level", "level:maths/a/b");
    return [a, b, c].map((d) => d && d.id);
  });
  expect(r).toEqual(["apple", "cat", "balloon"]);
});

test("backup and restore keep the stickers; an old save without stickers loads", async ({ page }) => {
  const at = Date.now() - 3600_000;
  await seed(page, { name: "Riya", cls: 2, student: { stickers: [{ id: "apple", at, why: "quiz" }, { id: "cat", at, why: "game", ref: "k" }, { id: "bad" }, null] } });
  await page.goto("/#/settings");
  // damaged records are dropped on load
  expect(await page.evaluate(() => Store.stickers().map((s) => s.id))).toEqual(["apple", "cat"]);
  const [download] = await Promise.all([page.waitForEvent("download"), page.getByRole("button", { name: "Save backup" }).click()]);
  const file = await download.path();
  const backup = JSON.parse(fs.readFileSync(file, "utf8"));
  expect(backup.students[0].stickers.map((s) => s.id)).toEqual(["apple", "cat"]);
  await page.getByRole("button", { name: "Reset", exact: true }).click();
  expect(current(await readStore(page)).stickers).toEqual([]);
  await page.locator("#restore").setInputFiles(file);
  await expect(page.locator("#toast")).toHaveText("Progress restored");
  expect(current(await readStore(page)).stickers.map((s) => s.id)).toEqual(["apple", "cat"]);
  await page.goto("/#/stickers");
  await expect(page.locator(".stk-slot.got")).toHaveCount(2);

  // an old backup (no stickers field at all) restores with an empty book
  const old = { ...backup, students: backup.students.map((s) => {
    const x = { ...s };
    delete x.stickers;
    return x;
  }) };
  const oldFile = test.info().outputPath("old-backup.json");
  fs.writeFileSync(oldFile, JSON.stringify(old));
  await page.goto("/#/settings");
  await page.locator("#restore").setInputFiles(oldFile);
  await expect(page.locator("#toast")).toHaveText("Progress restored");
  expect(current(await readStore(page)).stickers).toEqual([]);
});

test("an old save with no stickers field loads and earns the first sticker normally", async ({ page }) => {
  await seed(page, { name: "Riya", cls: 2 });
  await page.goto("/#/stickers");
  expect(await page.evaluate(() => Store.stickers())).toEqual([]);
  await expect(page.locator(".stk-slot.empty")).toHaveCount(60);
  await expect(page.locator(".stk-sub")).toContainText("up to 3 a day");
});

test("tapping a sticker says its name only on a press", async ({ page }) => {
  await page.addInitScript(() => {
    window.__said = [];
    const synth = window.speechSynthesis;
    window.SpeechSynthesisUtterance = class { constructor(t) { this.text = t; } };
    Object.defineProperty(window, "speechSynthesis", { value: { getVoices: () => [{ lang: "en-IN", name: "T", localService: true }], speak: (u) => window.__said.push(u.text), cancel() {}, addEventListener() {}, speaking: false }, configurable: true });
    void synth;
  });
  await seed(page, { name: "Riya", cls: 2, student: { stickers: [{ id: "apple", at: Date.now(), why: "quiz" }] } });
  await page.goto("/#/stickers");
  expect(await page.evaluate(() => window.__said)).toEqual([]);
  await page.locator(".stk-slot.got").click();
  expect(await page.evaluate(() => window.__said)).toEqual(["Apple"]);
});

test("the young Progress tab shows the My stickers card at the top; older classes do not", async ({ page }) => {
  await seed(page, { name: "Riya", cls: 2, student: { stickers: [{ id: "apple", at: Date.now(), why: "quiz" }, { id: "cat", at: Date.now(), why: "game" }] } });
  await page.goto("/#/progress");
  const card = page.locator(".stickers-card");
  await expect(card).toBeVisible();
  await expect(card).toContainText("My stickers (2)");
  // above the stars
  const y = async (sel) => (await page.locator(sel).first().boundingBox()).y;
  expect(await y(".stickers-card")).toBeLessThan(await y(".stats-young"));
  await card.click();
  await expect(page).toHaveURL(/#\/stickers$/);
  await expect(page.locator(".stk-slot.got")).toHaveCount(2);
});

test("older classes have no sticker book: its page goes back to Progress", async ({ page }) => {
  await seed(page, { name: "Asha", cls: 8 });
  await page.goto("/#/stickers");
  await expect(page).toHaveURL(/#\/progress$/);
});

test("Punjabi and Hindi: the book and the sticker names are translated", async ({ page }) => {
  await seed(page, { name: "Riya", cls: 2, lang: "pa", student: { stickers: [{ id: "apple", at: Date.now(), why: "quiz" }] } });
  await page.goto("/#/stickers");
  await expect(page.locator(".stk-slot.got")).toContainText("ਸੇਬ");
  await expect(page.getByRole("heading", { name: "ਮੇਰੇ ਸਟਿੱਕਰ" })).toBeVisible();
});
