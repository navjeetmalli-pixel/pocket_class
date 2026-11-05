// Picture questions: generated Classes 1-3 Maths questions can carry an svg picture (js/pics.js) shown above the question text.
const { test, expect, seed } = require("./helpers");

const ADD = "addition-up-to-9";

// Runs a made-up question in the page: Gen.make(name, seed) with its picture, or null.
const make = (page, name, sd) => page.evaluate(([n, s]) => Gen.make(n, s), [name, sd]);

test("a Class 1 chapter practice shows pictures above the question, each with an aria-label", async ({ page }) => {
  await seed(page, { name: "Anu", cls: 1 });
  await page.goto(`/#/chapter/1/maths/${ADD}/practise`);
  await expect(page.locator("#gen-mount article").first()).toBeVisible();
  const pics = page.locator("#gen-mount .q-pic svg");
  expect(await pics.count()).toBeGreaterThan(0);
  expect((await pics.first().getAttribute("aria-label")) || "").not.toBe("");
  // the picture comes before the question text
  const order = await page.locator("#gen-mount article").evaluateAll((els) => els.map((a) => (a.querySelector(".q-pic") ? !!(a.querySelector(".q-pic").compareDocumentPosition(a.querySelector(".q")) & Node.DOCUMENT_POSITION_FOLLOWING) : true)));
  expect(order.every(Boolean)).toBe(true);
});

test("a Class 1 quiz round shows a picture question with an aria-label", async ({ page }) => {
  await seed(page, { name: "Anu", cls: 1 });
  let seen = null;
  // The round has 3 made-up questions among the saved ones, so try a few rounds if the first has no picture.
  for (let round = 0; round < 4 && !seen; round++) {
    await page.goto(`/#/chapter/1/maths/${ADD}/quiz`);
    if (round) await page.reload();
    for (let i = 0; i < 20 && !seen; i++) {
      await page.locator(".quiz-q, .result-top").first().waitFor();
      if (await page.locator(".result-top").count()) break;
      const pic = page.locator(".q-pic svg");
      if (await pic.count()) {
        seen = await pic.first().getAttribute("aria-label");
        break;
      }
      await page.locator(".options .option").first().click();
      await page.locator('[data-act="next"]').click();
    }
  }
  expect(seen, "no picture question appeared").toBeTruthy();
});

test("every picture generator gives an svg with a label and the question text still stands alone", async ({ page }) => {
  await page.goto("/#/");
  const names = await page.evaluate(() => Gen.names.filter((n) => /^pic[A-Z]/.test(n)));
  expect(names.length).toBeGreaterThanOrEqual(10);
  for (const name of names) {
    for (const sd of [1, 2, 3, 4, 5, 6]) {
      const q = await make(page, name, sd * 7919);
      expect(q, `${name} ${sd}`).toBeTruthy();
      expect(q.pic).toMatch(/^<svg[\s\S]*<\/svg>$/);
      expect(q.pic).toContain("aria-label=");
      expect(q.picAlt.length).toBeGreaterThan(2);
      expect(q.q.length).toBeGreaterThan(10);
    }
  }
});

test("clock and fraction questions have the right answer for their picture", async ({ page }) => {
  await page.goto("/#/");
  const res = await page.evaluate(() => {
    const out = { clock: [], clock2: [], frac: [] };
    const norm = (x) => x.replace(/([lr][0-9a-f]{6})-[a-z0-9]+/g, "$1"); // gradient ids carry a per-picture suffix
    const svgOf = (o, fn, w, h, label) => norm(Pics.svg(fn(o), { w, h, label }));
    for (let sd = 1; sd <= 12; sd++) {
      const q = Gen.make("picClock", sd * 104729);
      const [h, m] = q.options[0].split(":").map(Number);
      out.clock.push(norm(q.pic) === svgOf({ x: 100, y: 98, s: 180, h, m }, Pics.clock, 200, 200, q.picAlt));
      const q2 = Gen.make("picClock2", sd * 104729);
      const mm = q2.options[0].match(/^half past (\d+)$/), oc = q2.options[0].match(/^(\d+) o'clock$/);
      const hh = Number((mm || oc)[1]);
      out.clock2.push(norm(q2.pic) === svgOf({ x: 100, y: 98, s: 180, h: hh, m: mm ? 30 : 0 }, Pics.clock, 200, 200, q2.picAlt));
      const f = Gen.make("picFrac", sd * 104729);
      const [k, d] = f.options[0].split("/").map(Number);
      out.frac.push(["roti", "pizza", "bar", "square", "circle"].some((shape) => norm(f.pic) === svgOf({ x: 100, y: 98, s: 180, shape, parts: d, shaded: k }, Pics.fraction, 200, 200, f.picAlt)) && f.q.includes(`${d} equal parts`) && !f.options.slice(1).includes(f.options[0]));
    }
    return out;
  });
  for (const k of ["clock", "clock2", "frac"]) expect(res[k], k).toEqual(Array(12).fill(true));
});

test("picture questions: addition and subtraction answers match the counts in the question", async ({ page }) => {
  await page.goto("/#/");
  const bad = await page.evaluate(() => {
    const out = [];
    for (let sd = 1; sd <= 40; sd++) {
      const a = Gen.make("picAdd", sd * 7919);
      const [x, y] = (a.q.match(/\d+/g) || []).map(Number);
      if (x + y !== Number(a.options[0])) out.push(a.q);
      const s = Gen.make("picSub", sd * 7919);
      const [n, k] = (s.q.match(/\d+/g) || []).map(Number);
      if (n - k !== Number(s.options[0])) out.push(s.q);
    }
    return out;
  });
  expect(bad).toEqual([]);
});

test("a printable sheet for a Class 1 chapter contains pictures, and they print", async ({ page }) => {
  await seed(page, { name: "Anu", cls: 1 });
  await page.goto(`/#/worksheet/1/maths?ch=${ADD}&m=0&s=0&l=0&g=6&d=0&k=1&n=1`);
  await expect(page.locator(".ws").first()).toBeVisible();
  const pics = page.locator(".ws .q-pic svg");
  expect(await pics.count()).toBeGreaterThan(0);
  expect(await pics.first().getAttribute("aria-label")).toBeTruthy();
  await page.emulateMedia({ media: "print" });
  await expect(pics.first()).toBeVisible();
});
