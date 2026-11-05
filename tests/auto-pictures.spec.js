// Auto-pictures (PicDict.illustrate in js/picdict.js; autoPic in js/util.js): notes, terms, lessons, chapter lists and games
// for Classes 1-5 get a small picture of what the text names. Class 6 and up get none of it.
const { test, expect, seed } = require("./helpers");

const MATHS_C1 = "numbers-1-to-9"; // note: "Count 3 mangoes: one, two, three. ..."
const SHAPES_C1 = "shapes-around-us"; // terms Circle, Rectangle: the match game
const EN_C1 = "vowels-and-consonants"; // "the word cat", "apple, egg, igloo, orange and umbrella"

const start = async (page, cls) => {
  await seed(page, { name: "Kabir", cls });
  await page.goto("/#/progress");
  await expect(page.locator("body")).toHaveAttribute("data-band", /\d/);
};

test("illustrate: counts, colours, shapes, money, other scripts; null for an abstract sentence and for noPic", async ({ page }) => {
  await start(page, 1);
  const r = await page.evaluate(() => {
    const k = (t, o) => { const x = PicDict.illustrate(t, o); return x ? { keys: x.keys, label: x.label } : null; };
    return {
      count: k("Count 3 mangoes: one, two, three."),
      colour: k("a red balloon"),
      shapes: k("A window is often a square or a rectangle."),
      money: k("Ravi has ₹5 and a ₹50 note."),
      hindi: k("तीन आम और दो केले"),
      punjabi: k("ਮੇਰੇ ਕੋਲ ਦੋ ਸੇਬ ਹਨ"),
      abstract: k("A noun names a person, a place or an idea."),
      numbers: k("The number after 5 is 6."),
      big: k("There are 20 mangoes."),
      noPic: k("Count 3 mangoes", { noPic: true }),
      grammar: k("Use a full stop at the end of a sentence."),
      name: k("Meera met Rose on Monday."),
    };
  });
  expect(r.count).toEqual({ keys: ["item:mango"], label: "3 mangoes" });
  expect(r.colour.keys).toEqual(["item:balloon"]);
  expect(r.shapes.keys).toEqual(["item:window", "shape:square", "shape:rectangle"]);
  expect(r.money.keys).toEqual(["coin:5", "note:50"]);
  expect(r.hindi.keys).toEqual(["item:mango", "item:banana"]);
  expect(r.punjabi.keys).toEqual(["item:apple"]);
  for (const k of ["abstract", "numbers", "big", "noPic", "grammar", "name"]) expect(r[k], k).toBeNull();
});

test("Class 1 Maths: the note 'Count 3 mangoes' shows 3 mangoes", async ({ page }) => {
  await start(page, 1);
  await page.goto(`/#/chapter/1/maths/${MATHS_C1}/understand`);
  const li = page.locator(".note li.has-pic", { hasText: "Count 3 mangoes" });
  await expect(li).toBeVisible();
  await expect(li.locator(".auto-pic")).toHaveAttribute("data-pic", "item:mango");
  await expect(li.locator(".auto-pic svg g[transform*='scale']")).toHaveCount(3);
  // a note that names nothing drawable has no picture
  await expect(page.locator(".note li", { hasText: "The number after 5 is 6" }).locator(".auto-pic")).toHaveCount(0);
});

test("Class 1 English: a note and a term get their pictures", async ({ page }) => {
  await start(page, 1);
  await page.goto(`/#/chapter/1/english/${EN_C1}/understand`);
  await expect(page.locator(".note li.has-pic", { hasText: "the word cat" }).locator(".auto-pic")).toHaveAttribute("data-pic", "item:cat");
  // a term that is a thing: the Class 1 shapes chapter has Circle and Rectangle
  await page.goto(`/#/chapter/1/maths/${SHAPES_C1}/understand`);
  await expect(page.locator(".terms > .has-pic", { hasText: "Circle" }).locator(".auto-pic")).toHaveAttribute("data-pic", "shape:circle");
  await expect(page.locator(".terms > div").filter({ has: page.locator("dt", { hasText: /^Corner/ }) }).locator(".auto-pic")).toHaveCount(0);
});

test("Class 1: the match game puts a picture on a term card that can be drawn", async ({ page }) => {
  await start(page, 1);
  await page.goto(`/#/play/1/maths/${SHAPES_C1}/match`);
  await page.locator("[data-g=start]").click();
  const terms = page.locator(".mp-card.term");
  await expect(terms.first()).toBeVisible();
  await expect(page.locator(".mp-card.term .auto-pic").first()).toBeVisible();
  await expect(page.locator(".mp-card.meaning .auto-pic")).toHaveCount(0);
  // the game still works: a right pair locks
  const names = await terms.allTextContents();
  expect(names.some((n) => /Circle/.test(n))).toBe(true);
});

test("Class 3: the sort game shows pictures on the cards that can be drawn (no Classes 1-5 chapter offers sort yet, so it is mounted with sample items)", async ({ page }) => {
  await start(page, 3);
  await page.evaluate(() => {
    const el = document.createElement("div");
    el.id = "sort-test";
    document.querySelector("#app").appendChild(el);
    const items = [["cow", 0], ["dog", 0], ["mango", 1], ["banana", 1], ["Nutrition", 1]].map(([label, group]) => ({ label, key: label, group, why: "" }));
    Games.get("sort").mount(el, { groups: ["Animals", "Fruits"], items }, { live: () => true, answered() {}, score() {}, say() {}, finish() {}, complete() {} });
  });
  const chips = page.locator("#sort-test .sort-chip");
  await expect(chips).toHaveCount(5);
  await expect(page.locator("#sort-test .sort-chip .auto-pic")).toHaveCount(4);
  await expect(chips.nth(4).locator(".auto-pic")).toHaveCount(0);
});

test("the journey map shows a picture on every chapter stone (its own, or the subject art)", async ({ page }) => {
  await start(page, 1);
  await page.goto("/#/subject/english");
  const rows = page.locator(".jstone");
  await expect(rows.first()).toBeVisible();
  const n = await rows.count();
  expect(n).toBeGreaterThan(5);
  await expect(page.locator(".jstone .ch-pic")).toHaveCount(n);
  expect(await page.locator(".jstone .ch-pic:not(.ch-pic-subject)").count()).toBeGreaterThan(0);
});

test("Today's plan items show the subject art (Class 2)", async ({ page }) => {
  await start(page, 2);
  await page.goto("/#/");
  const items = page.locator(".plan-item");
  if (await items.count()) await expect(items.first().locator(".start-art svg, .plan-art svg")).toBeVisible();
});

test("a Class 2 lesson idea step shows pictures beside the points", async ({ page }) => {
  await start(page, 2);
  await page.goto("/#/chapter/2/english/action-words/understand/lesson");
  const g = page.locator(".guided");
  await expect(g).toBeVisible();
  for (let i = 0; i < 40; i++) {
    if (await page.locator(".guided .quiz-clock", { hasText: "The idea" }).count()) break;
    await page.evaluate(() => {
      const g = document.querySelector(".guided");
      const free = g.querySelector(".options .option:not(.locked)");
      if (free) return free.click();
      for (const a of ["next", "show-turn", "topic-next", "p-next", "fade-show", "finish"]) { const b = g.querySelector(`[data-act="${a}"]`); if (b) return b.click(); }
      const s = g.querySelector("[data-sure]");
      if (s) s.click();
    });
    await page.waitForTimeout(150);
  }
  await expect(page.locator(".guided .quiz-clock")).toHaveText("The idea");
  await expect(page.locator(".guided .g-note li.has-pic .auto-pic").first()).toBeVisible();
});

test("Class 6 gets none of it: no note, term, chapter-list or plan pictures", async ({ page }) => {
  await start(page, 6);
  await page.goto("/#/subject/maths");
  await expect(page.locator(".chapter-row").first()).toBeVisible();
  await expect(page.locator(".ch-pic, .auto-pic")).toHaveCount(0);
  await page.goto("/#/chapter/6/maths/patterns-in-mathematics/understand");
  await expect(page.locator(".note").first()).toBeVisible();
  await expect(page.locator(".auto-pic, li.has-pic")).toHaveCount(0);
  await page.goto("/#/");
  await expect(page.locator(".auto-pic, .plan-art")).toHaveCount(0);
});
