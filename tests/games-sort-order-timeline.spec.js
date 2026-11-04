// Play: the sort, put-in-order and timeline games, each played to the end on a known chapter.
const { test, expect, seed, readStore, current } = require("./helpers");

const ACIDS = "acids-bases-and-salts"; // Class 10 Science: has sorting groups
const NAT = "nationalism-in-india"; // Class 10 SST: has a timeline
const ELECTRO = "electrochemistry"; // Class 12 Chemistry: has worked solutions to put in order
const gameUrl = (c, s, ch, type) => `/#/play/${c}/${s}/${ch}/${type}`;

const start = async (page) => {
  await page.locator("[data-g=start]").click();
  await expect(page.locator(".game-hud")).toBeVisible();
};

// Keeps the content a game was built from, so the test knows the right answers.
const spy = (page, type) =>
  page.evaluate((type) => {
    const def = Games.get(type);
    const mount = def.mount;
    def.mount = (el, data, api) => {
      window.__game = data;
      return mount.call(def, el, data, api);
    };
  }, type);

test("the new games are listed on the chapter's Play tab", async ({ page }) => {
  await seed(page, { cls: 10 });
  await page.goto(`/#/play/10/science/${ACIDS}`);
  await expect(page.locator(".game-card", { hasText: "Sort into groups" })).toBeVisible();
  await page.goto(`/#/play/10/sst/${NAT}`);
  await expect(page.locator(".game-card", { hasText: "Timeline" })).toBeVisible();
  await page.goto(`/#/play/12/chemistry/${ELECTRO}`);
  await expect(page.locator(".game-card", { hasText: "Put in order" })).toBeVisible();
  // A chapter without them does not list them.
  await page.goto("/#/play/10/science/light-reflection-and-refraction");
  await expect(page.locator(".game-card", { hasText: "Match pairs" })).toBeVisible();
  await expect(page.locator(".game-card", { hasText: "Timeline" })).toHaveCount(0);
  // The chapter list of the Games home shows an icon for each game a chapter has.
  await page.goto("/#/games/science");
  await expect(page.locator(".chapter-row", { hasText: "Acids, Bases and Salts" }).locator(".gi")).not.toHaveCount(0);
});

test("sort into groups: a wrong group is refused, items go in by tap or drag, the explanation shows, mistakes are listed", async ({ page }) => {
  await seed(page, { cls: 10 });
  await page.goto(gameUrl(10, "science", ACIDS, "sort"));
  await expect(page.locator(".game-intro")).toContainText("Every item belongs to one of the groups");
  await spy(page, "sort");
  await start(page);
  const data = await page.evaluate(() => window.__game);
  const n = data.items.length;
  expect(n).toBeGreaterThanOrEqual(6);
  expect(n).toBeLessThanOrEqual(10);
  expect(data.groups.length).toBeGreaterThanOrEqual(2);
  expect(data.groups.length).toBeLessThanOrEqual(3);
  await expect(page.locator(".sort-box")).toHaveCount(data.groups.length);
  await expect(page.locator(".sort-chip")).toHaveCount(n);
  const chip = (i) => page.locator(`.sort-chip[data-chip="${i}"]`);
  const box = (g) => page.locator(`.sort-box[data-box="${g}"]`);

  // A wrong group: refused, points stay at 0, the item stays in the pile and the feedback says so.
  const first = data.items[0];
  const other = (first.group + 1) % data.groups.length;
  await chip(0).click();
  await box(other).click();
  await expect(box(other)).toHaveClass(/bad/);
  await expect(page.locator("[data-hud=score]")).toHaveText("0");
  await expect(page.locator("[data-fb] .feedback.bad")).toContainText("Try another group");
  await expect(chip(0)).toBeVisible();
  await expect(box(other)).not.toHaveClass(/bad/);

  // The right group by tap (item, then group): locked in with the reason.
  await chip(0).click();
  await box(first.group).click();
  await expect(chip(0)).toBeHidden();
  await expect(box(first.group).locator(".sort-got")).toHaveCount(1);
  await expect(page.locator("[data-hud=score]")).toHaveText("100");
  await expect(page.locator("[data-fb] .feedback.good")).toContainText("belongs in");

  // The other order (group, then item), then the rest by drag and drop.
  await box(data.items[1].group).click();
  await chip(1).click();
  await expect(chip(1)).toBeHidden();
  for (let i = 2; i < n; i++) {
    const from = await chip(i).boundingBox();
    const to = await box(data.items[i].group).boundingBox();
    await page.mouse.move(from.x + from.width / 2, from.y + from.height / 2);
    await page.mouse.down();
    await page.mouse.move(from.x + from.width / 2 + 20, from.y + from.height / 2 - 20, { steps: 3 });
    await page.mouse.move(to.x + to.width / 2, to.y + 20, { steps: 6 });
    await page.mouse.up();
    await expect(chip(i)).toBeHidden();
  }
  await expect(page.locator("[data-act=done]")).toBeVisible();
  await page.locator("[data-act=done]").click();
  await expect(page.locator(".game-result")).toBeVisible();
  await expect(page.locator(".game-result .stars")).toHaveAttribute("aria-label", "2 of 3 stars"); // one wrong try
  await expect(page.locator(".review-item")).toHaveCount(1);
  await expect(page.locator(".review-item")).toContainText(first.label);
  expect(current(await readStore(page)).games[`10/science/${ACIDS}`].sort.stars).toBe(2);
});

test("put in order: wrong steps turn red, move by tap, arrow buttons and keyboard, the answer shows when right", async ({ page }) => {
  await seed(page, { cls: 12 });
  await page.goto(gameUrl(12, "chemistry", ELECTRO, "order"));
  await spy(page, "order");
  await start(page);
  const data = await page.evaluate(() => window.__game);
  const count = data.puzzles.length;
  expect(count).toBeGreaterThanOrEqual(1);
  expect(count).toBeLessThanOrEqual(3);

  for (let p = 0; p < count; p++) {
    const steps = data.puzzles[p].steps.map((s) => s.replace(/\s+/g, " ").trim());
    const rows = page.locator(".ord-row");
    await expect(rows).toHaveCount(steps.length);
    const textAt = async (pos) => (await rows.nth(pos).locator(".ord-step").textContent()).replace(/\s+/g, " ").trim();
    // The shuffled start is wrong: Check marks some rows red.
    await page.locator("[data-act=check]").click();
    await expect(page.locator(".ord-row.bad").first()).toBeVisible();
    await expect(page.locator("[data-fb] .feedback.bad")).toContainText("wrong place");
    if (p === 0) {
      // One arrow-button move and one keyboard move change the order and clear the marks.
      const before = await textAt(0);
      await rows.nth(0).locator('[data-mv="1"]').click();
      await expect(page.locator(".ord-row.bad")).toHaveCount(0);
      expect(await textAt(1)).toBe(before);
      await rows.nth(1).locator(".ord-text").focus();
      await page.keyboard.press("Enter"); // select
      await expect(rows.nth(1)).toHaveClass(/sel/);
      await page.keyboard.press("Enter"); // select again = unselect
      await expect(page.locator(".ord-row.sel")).toHaveCount(0);
    }
    // Tap a step, then tap the place it goes, until every place holds its step.
    for (let pos = 0; pos < steps.length; pos++) {
      let at = -1;
      for (let i = 0; i < steps.length; i++) if ((await textAt(i)) === steps[pos]) at = i;
      expect(at).toBeGreaterThanOrEqual(0);
      if (at !== pos) {
        await rows.nth(at).locator(".ord-text").click();
        await rows.nth(pos).locator(".ord-text").click();
      }
    }
    await page.locator("[data-act=check]").click();
    await expect(page.locator(".ord-row.ok")).toHaveCount(steps.length);
    await expect(page.locator("[data-fb] .feedback.good")).toContainText("right order");
    await page.locator(".quiz-nav .btn").click();
  }
  await expect(page.locator(".game-result")).toBeVisible();
  await expect(page.locator(".review-item")).toHaveCount(count); // each solution was wrong on the first check
  expect(current(await readStore(page)).games[`12/chemistry/${ELECTRO}`].order.plays).toBe(1);
});

test("timeline: events are placed by tap and drag, wrong ones go back, right ones lock in with their years", async ({ page }) => {
  await seed(page, { cls: 10 });
  await page.goto(gameUrl(10, "sst", NAT, "timeline"));
  await spy(page, "timeline");
  await start(page);
  const data = await page.evaluate(() => window.__game);
  const n = data.events.length;
  expect(n).toBeGreaterThanOrEqual(5);
  expect(n).toBeLessThanOrEqual(7);
  await expect(page.locator(".tl-slot")).toHaveCount(n);
  await expect(page.locator(".tl-chip")).toHaveCount(n);
  await expect(page.locator("[data-act=check]")).toBeDisabled();
  const chip = (i) => page.locator(`.tl-chip[data-chip="${i}"]`);
  const slot = (s) => page.locator(`.tl-slot[data-slot="${s}"]`);

  // The pile order is never the right one; put it straight in (event i of the pile into place i): at least one is wrong.
  for (let s = 0; s < n; s++) {
    await chip(data.pile[s]).click();
    await slot(s).click();
  }
  await expect(page.locator(".tl-chip:visible")).toHaveCount(0);
  // Tapping a filled place takes the event back; put it in again.
  await slot(0).click();
  await expect(chip(data.pile[0])).toBeVisible();
  await slot(0).click();
  await chip(data.pile[0]).click();
  await expect(chip(data.pile[0])).toBeHidden();
  await expect(page.locator("[data-act=check]")).toBeEnabled();
  await page.locator("[data-act=check]").click();
  const right = data.pile.filter((ev, s) => data.events[ev].rank === s).length;
  expect(right).toBeLessThan(n);
  await expect(page.locator(".tl-slot.locked")).toHaveCount(right);
  await expect(page.locator(".tl-slot.locked .tl-year")).toHaveCount(right);
  await expect(page.locator("[data-fb] .feedback.bad")).toContainText("wrong place");
  await expect(page.locator(".tl-chip:visible")).toHaveCount(n - right); // wrong ones are back in the pile
  await expect(page.locator(".tl-slot.bad")).toHaveCount(0);

  // The rest: one by drag and drop, the others by tap, until done.
  let first = true;
  for (let s = 0; s < n; s++) {
    if (await slot(s).evaluate((b) => b.classList.contains("locked"))) continue;
    const ev = data.events.findIndex((e) => e.rank === s);
    if (first) {
      first = false;
      const from = await chip(ev).boundingBox();
      const to = await slot(s).boundingBox();
      await page.mouse.move(from.x + from.width / 2, from.y + from.height / 2);
      await page.mouse.down();
      await page.mouse.move(from.x + from.width / 2 + 20, from.y + from.height / 2 - 20, { steps: 3 });
      await page.mouse.move(to.x + to.width / 2, to.y + to.height / 2, { steps: 6 });
      await page.mouse.up();
    } else {
      await chip(ev).click();
      await slot(s).click();
    }
    await expect(chip(ev)).toBeHidden();
  }
  await page.locator("[data-act=check]").click();
  await expect(page.locator(".tl-slot.locked")).toHaveCount(n);
  await expect(page.locator(".tl-slot .tl-year")).toHaveCount(n);
  await expect(page.locator("[data-fb] .feedback.good")).toContainText("complete");
  await page.locator("[data-act=done]").click();
  await expect(page.locator(".game-result")).toBeVisible();
  await expect(page.locator(".review-item")).not.toHaveCount(0);
  expect(current(await readStore(page)).games[`10/sst/${NAT}`].timeline.plays).toBe(1);
});

test("the new games speak Punjabi when the app is in Punjabi", async ({ page }) => {
  await seed(page, { cls: 10, lang: "pa" });
  await page.goto(gameUrl(10, "science", ACIDS, "sort"));
  await expect(page.locator(".game-title")).toHaveText("ਗਰੁੱਪਾਂ ਵਿੱਚ ਛਾਂਟੋ");
  await start(page);
  await expect(page.locator(".game-help")).toContainText("ਗਰੁੱਪ");
  await page.goto(gameUrl(10, "sst", NAT, "timeline"));
  await expect(page.locator(".game-title")).toHaveText("ਸਮਾਂ-ਰੇਖਾ");
});

test("a Practice-by-topic level offers Sort into groups, grouped by its chapters", async ({ page }) => {
  await seed(page, { cls: 10 });
  await page.goto("/#/play/level/maths/algebra/algebra-12");
  await expect(page.locator(".game-card", { hasText: "Sort into groups" })).toBeVisible();
  await page.locator(".game-card", { hasText: "Sort into groups" }).click();
  await start(page);
  await expect(page.locator(".sort-box")).toHaveCount(3);
  await expect(page.locator(".sort-box").first()).toContainText(/Matrices|Determinants|Linear Programming/);
});
