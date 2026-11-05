// Play: the language games (letters and pictures, matra builder, spell the word, sentence builder, grammar sort), each played to
// the end, plus where they are offered.
const { test, expect, seed, readStore, current } = require("./helpers");

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

// The first chapter id of a language subject in a class (from the class index).
const firstChapter = (page, cls, subject) => page.evaluate(([c, s]) => StudyData.chapters(c, s)[0].id, [cls, subject]);
const open = async (page, cls, subject, type) => {
  await page.goto("/#/");
  await page.waitForFunction(([c, s]) => window.StudyData && StudyData.chapters(c, s).length > 0, [cls, subject]);
  const ch = await firstChapter(page, cls, subject);
  await page.goto(gameUrl(cls, subject, ch, type));
  await expect(page.locator(".game-intro")).toBeVisible();
  await spy(page, type);
  await start(page);
  return ch;
};

// Plays a tile game (matra / spell / sentence): `target(p)` gives the tiles in order. One wrong check on the first puzzle.
async function playBuilder(page, wrongFirst = true) {
  const data = await page.evaluate(() => window.__game);
  const total = data.puzzles.length;
  expect(total).toBeGreaterThanOrEqual(5);
  for (let n = 0; n < total; n++) {
    const p = data.puzzles[n];
    const target = p.parts || p.letters || p.words;
    const ids = [];
    for (const tok of target) {
      const id = p.bank.findIndex((x, i) => x === tok && !ids.includes(i));
      ids.push(id);
    }
    const tile = (id) => page.locator(`.lt-tile[data-tile="${id}"]`);
    await expect(page.locator(".lt-slot")).toHaveCount(target.length);
    await expect(page.locator("[data-act=check]")).toBeDisabled();
    if (n === 0 && wrongFirst && target.length > 1 && new Set(target).size > 1) {
      // Fill the boxes in the wrong order (the first two swapped), check, see red, clear and do it right.
      const swapped = ids.slice();
      [swapped[0], swapped[1]] = [swapped[1], swapped[0]];
      if (target[0] !== target[1]) {
        for (const id of swapped) await tile(id).click();
        await page.locator("[data-act=check]").click();
        await expect(page.locator(".lt-slot.bad")).not.toHaveCount(0);
        await expect(page.locator(".feedback.bad")).toBeVisible();
        await page.locator("[data-act=clear]").click();
        await expect(page.locator(".lt-slot.filled")).toHaveCount(0);
      }
    }
    for (const id of ids) await tile(id).click();
    await expect(page.locator(".lt-bank .lt-tile")).toHaveCount(p.bank.length - target.length);
    await page.locator("[data-act=check]").click();
    await expect(page.locator(".feedback.good")).toBeVisible();
    await expect(page.locator(".lt-slot.ok")).toHaveCount(target.length);
    await page.locator(n === total - 1 ? "[data-act=done]" : "[data-act=next]").click();
  }
  await expect(page.locator(".game-result")).toBeVisible();
}

test("language games are offered on the right chapters and levels", async ({ page }) => {
  await seed(page, { cls: 1, board: "pseb" });
  await page.goto("/#/");
  await page.waitForFunction(() => window.StudyData && StudyData.chapters(1, "punjabi").length > 0);
  const ch = await firstChapter(page, 1, "punjabi");
  await page.goto(`/#/play/1/punjabi/${ch}`);
  for (const name of ["Letters and pictures", "Matra builder"]) await expect(page.locator(".game-card", { hasText: name })).toBeVisible();
  await expect(page.locator(".game-card", { hasText: "Sentence builder" })).toHaveCount(0);
  const eng = await firstChapter(page, 1, "englishpb");
  await page.goto(`/#/play/1/englishpb/${eng}`);
  for (const name of ["Letters and pictures", "Spell the word"]) await expect(page.locator(".game-card", { hasText: name })).toBeVisible();
  await expect(page.locator(".game-card", { hasText: "Matra builder" })).toHaveCount(0);
  const hin = await firstChapter(page, 1, "hindipb");
  await page.goto(`/#/play/1/hindipb/${hin}`);
  for (const name of ["Letters and pictures", "Matra builder"]) await expect(page.locator(".game-card", { hasText: name })).toBeVisible();
  // Practice by topic: Punjabi letters Level 0, matras Level 1, English sentences.
  await page.goto("/#/play/level/punjabi/letters/letters-0");
  await expect(page.locator(".game-card", { hasText: "Letters and pictures" })).toBeVisible();
  await page.goto("/#/play/level/punjabi/matras/matras-1-kanna");
  await expect(page.locator(".game-card", { hasText: "Matra builder" })).toBeVisible();
  await page.goto("/#/play/level/punjabi/letters/letters-9");
  await expect(page.locator(".game-card", { hasText: "Letters and pictures" })).toHaveCount(0);
  await page.goto("/#/play/level/english/sentences/sentences-5");
  await expect(page.locator(".game-card", { hasText: "Sentence builder" })).toBeVisible();
  await page.goto("/#/play/level/english/nouns/nouns-4");
  await expect(page.locator(".game-card", { hasText: "Grammar sort" })).toBeVisible();
  // The Games home lists the language chapters with their game icons, and its subtitle is general.
  await page.goto("/#/games");
  await expect(page.locator(".shell-head .sub")).toContainText("Pick a game to play");
  await expect(page.locator(".subject-card").first()).toBeVisible();
});

test("letters and pictures: letter to picture-word and back, a wrong pick is marked, the round ends with stars", async ({ page }) => {
  await seed(page, { cls: 2, board: "pseb" });
  await open(page, 2, "punjabi", "letters");
  const data = await page.evaluate(() => window.__game);
  expect(data.questions.length).toBe(8);
  expect(new Set(data.questions.map((q) => q.mode)).size).toBe(2);
  for (let n = 0; n < 8; n++) {
    const q = data.questions[n];
    const right = q.options.findIndex((o) => o.letter === q.right.letter);
    await expect(page.locator(".lt-opt")).toHaveCount(4);
    if (n === 0) {
      const wrong = (right + 1) % 4;
      await page.locator(`[data-o="${wrong}"]`).click();
      await expect(page.locator(".lt-opt.bad")).toHaveCount(1);
      await expect(page.locator(".feedback.bad")).toBeVisible();
    }
    await page.locator(`[data-o="${right}"]`).click();
    await expect(page.locator(".lt-opt.ok")).toHaveCount(1);
    await expect(page.locator(".feedback.good")).toBeVisible();
    await page.locator(n === 7 ? "[data-act=done]" : "[data-act=next]").click();
  }
  await expect(page.locator(".game-result")).toBeVisible();
  await expect(page.locator(".review-item")).toHaveCount(1);
  const g = current(await readStore(page)).games;
  expect(Object.values(g)[0].letters.stars).toBeGreaterThanOrEqual(1);
});

test("matra builder: matra tiles sit on a dotted circle, a wrong order is marked red, a Hindi round can be finished", async ({ page }) => {
  await seed(page, { cls: 2, board: "pseb" });
  await open(page, 2, "hindipb", "matras");
  const data = await page.evaluate(() => window.__game);
  expect(data.lang).toBe("hi");
  expect(data.puzzles.length).toBe(6);
  for (const p of data.puzzles) {
    expect(p.parts.join("")).toBe(p.word);
    expect(p.bank.length).toBe(p.parts.length + 2);
  }
  // A matra tile always has its dotted circle.
  const marks = page.locator(".lt-tile", { hasText: "◌" });
  expect(await marks.count()).toBeGreaterThan(0);
  for (const t of await page.locator(".lt-tile").allTextContents()) if (/\p{M}/u.test(t)) expect(t.startsWith("◌")).toBe(true);
  await playBuilder(page);
});

test("spell the word: tiles go in by tap, a tile can be dragged, a filled box gives the tile back", async ({ page }) => {
  await seed(page, { cls: 3, board: "cbse" });
  await open(page, 3, "english", "words");
  const data = await page.evaluate(() => window.__game);
  const p0 = data.puzzles[0];
  // Drag the first needed tile into the second box, tap the box to take it back, then play on.
  const id = p0.bank.indexOf(p0.letters[0]);
  await page.locator(`.lt-tile[data-tile="${id}"]`).dragTo(page.locator('.lt-slot[data-slot="1"]'));
  await expect(page.locator('.lt-slot[data-slot="1"]')).toHaveClass(/filled/);
  await page.locator('.lt-slot[data-slot="1"]').click();
  await expect(page.locator(".lt-slot.filled")).toHaveCount(0);
  await playBuilder(page, false);
});

test("sentence builder: English words go in order, a wrong order is marked and can be fixed", async ({ page }) => {
  await seed(page, { cls: 4, board: "cbse" });
  await open(page, 4, "english", "sentences");
  const data = await page.evaluate(() => window.__game);
  expect(data.puzzles.length).toBe(5);
  await playBuilder(page);
});

test("sentence builder: a Punjabi round in the Punjabi interface", async ({ page }) => {
  await seed(page, { cls: 3, board: "pseb", lang: "pa" });
  await page.goto("/#/");
  await page.waitForFunction(() => window.StudyData && StudyData.chapters(3, "punjabi").length > 0);
  const ch = await firstChapter(page, 3, "punjabi");
  await page.goto(gameUrl(3, "punjabi", ch, "sentences"));
  await expect(page.locator(".game-intro")).toContainText("ਸ਼ਬਦਾਂ ਨੂੰ ਸਹੀ ਕ੍ਰਮ");
  await spy(page, "sentences");
  await start(page);
  await playBuilder(page, false);
  await expect(page.locator(".game-result")).toBeVisible();
});

test("grammar sort: words go to their groups by tap, a wrong group is refused, Hindi shows the textbook terms", async ({ page }) => {
  await seed(page, { cls: 4, board: "pseb" });
  await open(page, 4, "hindipb", "grammar");
  const data = await page.evaluate(() => window.__game);
  expect(data.items.length).toBeGreaterThanOrEqual(8);
  const boxes = await page.locator(".sort-box .sort-title").allTextContents();
  expect(boxes.every((b) => /[ऀ-ॿ]/.test(b))).toBe(true);
  const chip = (i) => page.locator(`.sort-chip[data-chip="${i}"]`);
  const box = (g) => page.locator(`.sort-box[data-box="${g}"]`);
  const first = data.items[0];
  await chip(0).click();
  await box((first.group + 1) % data.groups.length).click();
  await expect(page.locator(".feedback.bad")).toBeVisible();
  await expect(chip(0)).toBeVisible();
  await page.waitForTimeout(700);
  for (let i = 0; i < data.items.length; i++) {
    await chip(i).click();
    await box(data.items[i].group).click();
  }
  await page.locator("[data-act=done]").click();
  await expect(page.locator(".game-result")).toBeVisible();
  await expect(page.locator(".review-item")).toHaveCount(1);
});
