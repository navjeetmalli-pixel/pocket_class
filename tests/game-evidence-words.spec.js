// Games with words feed the learning record: each scored attempt calls api.answered, and the clearly placed ones are written
// as `answer` events with source "game" for the chapter (at most 3 per objective in one round).
const { test, expect, seed, readStore, current } = require("./helpers");

const url = (c, s, ch, type) => `/#/play/${c}/${s}/${ch}/${type}`;
const start = async (page) => {
  await page.locator("[data-g=start]").click();
  await expect(page.locator(".game-hud")).toBeVisible();
};
const spy = (page, type) =>
  page.evaluate((type) => {
    const def = Games.get(type);
    const mount = def.mount;
    def.mount = (el, data, api) => {
      window.__game = data;
      return mount.call(def, el, data, api);
    };
  }, type);

async function checkEvents(page, chapter) {
  await expect(page.locator(".game-result")).toBeVisible();
  const ev = current(await readStore(page)).learn.events;
  const answers = ev.filter((e) => e.type === "answer" && e.source === "game");
  expect(answers.length).toBeGreaterThan(0);
  expect(answers.every((e) => e.chapter === chapter && e.obj)).toBe(true);
  const per = {};
  for (const e of answers) per[e.obj] = (per[e.obj] || 0) + 1;
  expect(Math.max(...Object.values(per))).toBeLessThanOrEqual(3); // the cap
  return answers;
}

test("match pairs: each match made or missed is an answer for the chapter", async ({ page }) => {
  const ch = "light-reflection-and-refraction";
  await seed(page, { cls: 10 });
  await page.goto(url(10, "science", ch, "match"));
  await spy(page, "match");
  await start(page);
  const pairs = await page.evaluate(() => window.__game.pairs.map((p) => [plain(p.term).trim(), plain(p.meaning).trim()]));
  const terms = page.locator(".mp-card.term");
  const meanings = page.locator(".mp-card.meaning");
  const idx = async (term) => {
    const want = pairs.find((p) => p[0] === term)[1];
    for (let i = 0; i < 6; i++) if ((await meanings.nth(i).textContent()).trim() === want) return i;
  };
  for (let n = 0; n < 6; n++) {
    const open = page.locator(".mp-card.term:not(.done)").first();
    const i = await idx((await open.textContent()).trim());
    await open.click();
    await meanings.nth(i).click();
  }
  await checkEvents(page, ch);
});

test("sort into groups: each card placed is an answer, right or wrong", async ({ page }) => {
  const ch = "acids-bases-and-salts";
  await seed(page, { cls: 10 });
  await page.goto(url(10, "science", ch, "sort"));
  await spy(page, "sort");
  await start(page);
  const data = await page.evaluate(() => window.__game);
  for (let i = 0; i < data.items.length; i++) {
    const g = data.items[i].group;
    if (i === 0) {
      await page.locator(`.sort-chip[data-chip="0"]`).click();
      await page.locator(`.sort-box[data-box="${(g + 1) % data.groups.length}"]`).click();
      await expect(page.locator(".sort-box.bad")).toHaveCount(0);
    }
    await page.locator(`.sort-chip[data-chip="${i}"]`).click();
    await page.locator(`.sort-box[data-box="${g}"]`).click();
  }
  await page.locator("[data-act=done]").click();
  const answers = await checkEvents(page, ch);
  expect(answers.some((e) => e.ok === false)).toBe(true);
});

test("timeline: each event checked into a place is an answer", async ({ page }) => {
  const ch = "nationalism-in-india";
  await seed(page, { cls: 10 });
  await page.goto(url(10, "sst", ch, "timeline"));
  await spy(page, "timeline");
  await start(page);
  const data = await page.evaluate(() => window.__game);
  for (let c = 0; c < data.events.length; c++) {
    await page.locator(`.tl-chip[data-chip="${c}"]`).click();
    await page.locator(`.tl-slot[data-slot="${data.events[c].rank}"]`).click();
  }
  await page.locator("[data-act=check]").click();
  await page.locator("[data-act=done]").click();
  await checkEvents(page, ch);
});

test("mental-maths race: chapter generator questions are answers", async ({ page }) => {
  const ch = "fractions";
  await seed(page, { cls: 6 });
  await page.goto(url(6, "maths", ch, "race"));
  await spy(page, "race");
  await start(page);
  const data = await page.evaluate(() => window.__game);
  for (let i = 0; i < 40 && !(await page.locator(".game-result").isVisible()); i++) {
    await page.locator(`.race-opts .option[data-i="${data.items[i % data.items.length].answer}"]`).click().catch(() => {});
    await page.waitForTimeout(400);
  }
  await checkEvents(page, ch);
});
