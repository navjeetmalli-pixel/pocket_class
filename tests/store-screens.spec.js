// Store screenshots, not part of the normal test run (skipped unless SIZE is set). Makes the App Store and Play images:
//   SIZE=iphone OUT=$PWD/store/screenshots/iphone npx playwright test -c tests store-screens --project=phone --workers=1
//   (SIZE = iphone 1320x2868, play 1320x2640, ipad 2064x2752). The native apps hide Hindi and Punjabi, so pages open with ?lock=1.
const { test } = require("./helpers");
test.skip(!process.env.SIZE, "store screenshots: run with SIZE=iphone|play|ipad");
const SIZES = { iphone: { viewport: { width: 440, height: 956 }, deviceScaleFactor: 3 }, play: { viewport: { width: 440, height: 880 }, deviceScaleFactor: 3 }, ipad: { viewport: { width: 1032, height: 1376 }, deviceScaleFactor: 2 } };
const S = SIZES[process.env.SIZE || "iphone"];
test.use({ viewport: S.viewport, deviceScaleFactor: S.deviceScaleFactor, isMobile: process.env.SIZE !== "ipad", hasTouch: true });
const day = 86400000, now = Date.now();
const C2 = ["numbers-up-to-100", "place-value-tens-and-ones", "addition-with-carrying", "subtraction-with-borrowing"];
function student(cls, name, extra = {}) {
  return { v: 2, theme: "light", lang: "en", current: "s1", students: [{ id: "s1", profile: { name, cls, board: "cbse", setup: true, role: "student", view: "class", avatar: null }, ...extra }] };
}
const progress2 = {
  chapters: { [`2/maths/${C2[0]}`]: { done: true, best: 95, opened: now - 3 * day }, [`2/maths/${C2[1]}`]: { done: true, best: 80, opened: now - 2 * day }, [`2/maths/${C2[2]}`]: { opened: now - day } },
  stickers: ["apple", "cat", "balloon", "fish", "sun", "mango", "butterfly", "kite", "duck"].map((id, i) => ({ id, at: now - (9 - i) * day, why: "quiz" })),
};
async function open(page, data, url) {
  await page.addInitScript((d) => {
    localStorage.setItem("vidya:v1", JSON.stringify(d));
    localStorage.setItem("vidya:sound", "off");
    const v = [{ lang: "en-IN", name: "E", voiceURI: "e" }];
    Object.defineProperty(window, "speechSynthesis", { value: { getVoices: () => v, speak() {}, cancel() {}, addEventListener() {} }, configurable: true });
  }, data);
  await page.goto("/?lock=1" + url);
  await page.waitForTimeout(1200);
}
const shot = (page, n) => page.screenshot({ path: `${process.env.OUT}/${n}.png` });

test("1 today", async ({ page }) => { await open(page, student(2, "Aarav", progress2), "#/"); await shot(page, "1-today"); });
test("2 map", async ({ page }) => { await open(page, student(2, "Aarav", progress2), "#/subject/maths"); await page.evaluate(() => window.scrollBy(0, 120)); await page.waitForTimeout(400); await shot(page, "2-journey-map"); });
test("3 picture question", async ({ page }) => {
  await open(page, student(1, "Aarav"), "#/chapter/1/maths/shapes-around-us/master");
  for (let i = 0; i < 12 && !(await page.locator(".quiz .pic-options, .pic-options").count()); i++) { await page.reload(); await page.waitForTimeout(900); }
  const g = page.locator(".pic-options").first(); await g.scrollIntoViewIfNeeded();
  await page.evaluate(() => { const q = document.querySelector(".pic-options").closest(".card") || document.querySelector(".pic-options"); window.scrollTo(0, q.getBoundingClientRect().top + scrollY - 70); });
  await page.waitForTimeout(400); await shot(page, "3-picture-question");
});
test("4 habitat game", async ({ page }) => { await open(page, student(3, "Aarav"), "#/play/3/evs/animals-around-us/habitat"); await page.locator("[data-g=start]").click(); await page.waitForTimeout(800); await shot(page, "4-habitat-game"); });
test("5 word builder", async ({ page }) => { await open(page, student(1, "Aarav"), "#/play/1/english/naming-words/wordbuild"); await page.locator("[data-g=start]").click(); await page.waitForTimeout(700); const t = page.locator(".wb-tile, .wb-tray button").first(); if (await t.count()) await t.click(); await page.waitForTimeout(500); await shot(page, "5-word-builder"); });
test("6 stickers", async ({ page }) => { await open(page, student(2, "Aarav", progress2), "#/stickers"); await shot(page, "6-sticker-book"); });
test("7 older lab", async ({ page }) => {
  await open(page, student(7, "Meera"), "#/explore"); 
  const b = page.getByRole("link", { name: /Try it/ }).or(page.getByRole("button", { name: /Try it/ })).first(); await b.click(); await page.waitForTimeout(1200); await shot(page, "7-circuit-lab");
});
