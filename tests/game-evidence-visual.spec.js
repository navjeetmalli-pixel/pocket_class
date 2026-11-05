// The visual maths games and the India map lab feed the learning record: each scored attempt is an `answer` event
// (source "game" or "lab") for the chapter, written when the game ends (games) or at once (labs).
const { test, expect, seed, readStore, current } = require("./helpers");

const T0 = 1_700_000_000_000;
const SEED = (T0 ^ Math.floor(0.25 * 1e9)) >>> 0;
const fix = (page) =>
  page.addInitScript(({ T0 }) => {
    Date.now = () => T0;
    Math.random = () => 0.25;
  }, { T0 });
const events = async (page) => current(await readStore(page)).learn.events.filter((e) => e.type === "answer");
const roundsOf = (page, type, cls, subjId, chId) =>
  page.evaluate(({ type, cls, subjId, chId, SEED }) => Games.get(type).build(cls, StudyData.subject(subjId), StudyData.chapters(cls, subjId).find((c) => c.id === chId), SEED), { type, cls, subjId, chId, SEED });
const next = (page) => page.locator("[data-mk=next]").click();

async function open(page, cls, subj, ch, type) {
  await fix(page);
  await seed(page, { cls });
  await page.goto(`/#/play/${cls}/${subj}/${ch}/${type}`);
  await page.locator("[data-g=start]").click();
  await expect(page.locator(".game-hud")).toBeVisible();
}
function check(ev, cls, subject, chapter, source) {
  expect(ev.length).toBeGreaterThan(0);
  expect(ev.every((e) => e.source === source && e.cls === cls && e.subject === subject && e.chapter === chapter && e.obj)).toBe(true);
}

test("fraction builder: each shaded check and each comparison is an answer for the chapter", async ({ page }) => {
  const ch = "fractions";
  await open(page, 3, "maths", ch, "fractions");
  const data = await roundsOf(page, "fractions", 3, "maths", ch);
  for (const r of data.rounds) {
    if (r.type === "compare") await page.locator(`[data-pick="${r.answer}"]`).click();
    else {
      const parts = page.locator(".fb-bar:not(.given) .fb-cell, .fb-slice");
      const n = r.type === "build" ? r.n : r.type === "equiv" ? r.f.n * r.m : r.target;
      for (let k = 0; k < n; k++) await parts.nth(k).click();
      await page.locator("[data-act=check]").click();
    }
    await next(page);
  }
  await expect(page.locator(".game-result")).toBeVisible();
  check(await events(page), 3, "maths", ch, "game");
});

test("balance the equation: each solved equation is an answer", async ({ page }) => {
  const ch = "algebra-play";
  await open(page, 8, "maths", ch, "balance");
  const data = await roundsOf(page, "balance", 8, "maths", ch);
  for (const e0 of data.rounds) {
    let s = { a: e0.a, b: e0.b, c: e0.c, d: e0.d };
    const setN = async (v) => {
      let cur = Number(await page.locator("[data-nv]").textContent());
      while (cur !== v) {
        await page.locator(`[data-n='${v > cur ? 1 : -1}']`).click();
        cur += v > cur ? 1 : -1;
      }
    };
    while (!(s.a === 1 && s.b === 0 && s.c === 0)) {
      let op;
      if (s.c) op = { k: "subx", v: s.c };
      else if (s.b) op = { k: s.b > 0 ? "sub" : "add", v: Math.abs(s.b) };
      else op = { k: "div", v: s.a };
      await setN(op.v);
      await page.locator(`[data-op=${op.k}]`).click();
      if (op.k === "subx") (s.a -= op.v), (s.c -= op.v);
      else if (op.k === "sub") (s.b -= op.v), (s.d -= op.v);
      else if (op.k === "add") (s.b += op.v), (s.d += op.v);
      else (s.a /= op.v), (s.b /= op.v), (s.c /= op.v), (s.d /= op.v);
    }
    await next(page);
  }
  await expect(page.locator(".game-result")).toBeVisible();
  const ev = await events(page);
  check(ev, 8, "maths", ch, "game");
  expect(ev.every((e) => e.ok)).toBe(true);
});

test("India map: finding and placing states write lab answers for the chapter", async ({ page }) => {
  const L = { cls: 9, subject: "sstpb", chapter: "geo-physical-features" };
  const tap = async (id) => {
    const p = await page.evaluate((id) => {
      const M = IndiaMap;
      const s = M.byId[id];
      const svg = document.querySelector(".im-svg");
      svg.scrollIntoView({ block: "center" });
      const [x, y] = M.proj(...(s.mark || s.lp));
      const pt = svg.createSVGPoint();
      pt.x = x;
      pt.y = y;
      const q = pt.matrixTransform(svg.getScreenCTM());
      return { x: q.x, y: q.y };
    }, id);
    await page.mouse.click(p.x, p.y);
  };
  await seed(page, { name: "Asha", cls: L.cls, board: "pseb" });
  await page.goto(`/#/lab/indiamap/${L.cls}/${L.subject}/${L.chapter}`);
  await expect(page.locator(".im-svg")).toBeVisible();
  await page.locator('[data-mode="find"]').click();
  await expect(page.locator("[data-prompt]")).toHaveText("Find Punjab on the map.");
  await tap("rajasthan"); // a wrong tap is an answer too
  await tap("punjab");
  const ev = await events(page);
  check(ev, L.cls, L.subject, L.chapter, "lab");
  expect(ev.map((e) => e.ok)).toEqual([false, true]);
});
