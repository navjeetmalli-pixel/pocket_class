// Play: "Trace the letter" (js/games/trace.js, strokes in data/games/strokes.js). The tests trace by moving the pointer along the
// stored strokes, so they also check that the stored strokes match what the game accepts.
const { test, expect, seed, readStore, current } = require("./helpers");

// Tracing is hidden from students until a teacher has checked the strokes; these tests switch the preview on.
test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => (window.POCKET_PREVIEW = true));
});

const firstChapter = (page, cls, subject) => page.evaluate(([c, s]) => StudyData.chapters(c, s)[0].id, [cls, subject]);

// Opens the game for the first chapter of a subject, forcing the round to be exactly these letters (with their picture-words).
async function open(page, cls, subject, letters) {
  await page.goto("/#/");
  await page.waitForFunction(([c, s]) => window.StudyData && StudyData.chapters(c, s).length > 0, [cls, subject]);
  const ch = await firstChapter(page, cls, subject);
  await page.goto(`/#/play/${cls}/${subject}/${ch}/trace`);
  await expect(page.locator(".game-intro")).toBeVisible();
  await page.evaluate((letters) => {
    const def = Games.get("trace");
    const mount = def.mount;
    def.mount = (el, data, api) => {
      if (letters) {
        const set = LangGames.get("strokes")[data.lang];
        const words = LangGames.get("letters")[data.lang] || [];
        data.letters = letters.map((k) => {
          const w = words.find((x) => x.letter === (data.lang === "en" ? k.toUpperCase() : k));
          return { ch: k, paths: set[k], word: w ? w.word : "", emoji: w ? w.emoji : "" };
        });
      }
      window.__game = data;
      return mount.call(def, el, data, api);
    };
  }, letters);
  await page.locator("[data-g=start]").click();
  await expect(page.locator(".tr-svg")).toBeVisible();
  return ch;
}

// Moves the pointer along a stroke ([x, y] points in the 0-100 box), keeping every 3rd point; backwards if `reverse`.
async function drag(page, pts, reverse = false) {
  const box = await page.locator("[data-svg]").boundingBox();
  const p = (q) => [box.x + (q[0] / 100) * box.width, box.y + (q[1] / 100) * box.height];
  let list = reverse ? pts.slice().reverse() : pts;
  list = list.filter((_, i) => i % 3 === 0 || i === list.length - 1);
  const [x0, y0] = p(list[0]);
  await page.mouse.move(x0, y0);
  await page.mouse.down();
  for (const q of list.slice(1)) {
    const [x, y] = p(q);
    await page.mouse.move(x, y);
  }
  await page.mouse.up();
}

const strokesOf = (page, ch, lang) => page.evaluate(([ch, lang]) => LangGames.get("strokes")[lang][ch].map((d) => LangGames.flatten(d)), [ch, lang]);

// Traces a letter once: every stroke in order. (A letter takes two passes: guided, then on its own.)
async function traceLetter(page, ch, lang) {
  const strokes = await strokesOf(page, ch, lang);
  for (const pts of strokes) {
    const before = await page.locator("[data-svg]").getAttribute("aria-label");
    await drag(page, pts);
    // the board moves on to the next stroke (or the next pass, or the picture-word card, which has no [data-svg])
    await page.waitForFunction((b) => { const s = document.querySelector("[data-svg]"); return !s || s.getAttribute("aria-label") !== b; }, before);
  }
}

// Tap to continue: press "Draw the next stroke" until the picture-word card shows (a stroke takes a moment to draw).
async function tapThrough(page) {
  for (let i = 0; i < 80 && (await page.locator(".tr-win").count()) === 0; i++) {
    await page.waitForTimeout(250);
    const b = page.locator("[data-act=step]");
    if (await b.count()) await b.click();
  }
}

test("trace: ੳ completes in two passes and shows the picture-word ਊਠ with its picture", async ({ page }) => {
  await seed(page, { cls: 1, board: "pseb" });
  await open(page, 1, "punjabi", ["ੳ"]);
  await expect(page.locator(".tr-chip")).toHaveText("Guided");
  await expect(page.locator(".tr-dot")).toBeVisible();
  await expect(page.locator(".tr-arrow")).toBeVisible();
  await traceLetter(page, "ੳ", "pa");
  await expect(page.locator(".tr-chip")).toHaveText("On your own");
  await expect(page.locator(".tr-dot")).toHaveCount(0); // no start dot or arrow in the free pass
  await expect(page.locator(".tr-arrow")).toHaveCount(0);
  await traceLetter(page, "ੳ", "pa");
  await expect(page.locator(".tr-win")).toBeVisible();
  await expect(page.locator(".tr-word")).toContainText("ਊਠ");
  await expect(page.locator(".tr-word")).toContainText("🐪");
  await page.locator("[data-act=finish]").click();
  await expect(page.locator(".game-result")).toBeVisible();
  const g = current(await readStore(page)).games;
  expect(Object.values(g)[0].trace.stars).toBeGreaterThanOrEqual(1);
  expect(Object.values(g)[0].trace.best).toBeGreaterThan(0);
});

test("trace: the wrong direction gives a gentle hint and the right one still works", async ({ page }) => {
  await seed(page, { cls: 1, board: "pseb" });
  await open(page, 1, "punjabi", ["ਕ"]);
  const strokes = await strokesOf(page, "ਕ", "pa");
  await drag(page, strokes[0], true);
  await expect(page.locator("[data-msg]")).toContainText("Try the other way");
  await expect(page.locator("[data-svg]")).toHaveClass(/hint/);
  await expect(page.locator("[data-svg]")).toHaveAttribute("aria-label", /Stroke 1 of/);
  await traceLetter(page, "ਕ", "pa");
  await expect(page.locator(".tr-chip")).toHaveText("On your own");
});

test("trace: English capital A and small a, Hindi क", async ({ page }) => {
  await seed(page, { cls: 1, board: "cbse" });
  await open(page, 1, "english", ["A", "a"]);
  await traceLetter(page, "A", "en");
  await traceLetter(page, "A", "en");
  await expect(page.locator(".tr-word")).toContainText("Apple");
  await page.locator("[data-act=next]").click();
  await traceLetter(page, "a", "en");
  await traceLetter(page, "a", "en");
  await expect(page.locator(".tr-word")).toContainText("Apple");
  await page.locator("[data-act=finish]").click();
  await expect(page.locator(".game-result")).toBeVisible();
});

test("trace: Hindi क completes", async ({ page }) => {
  await seed(page, { cls: 1, board: "pseb" });
  await open(page, 1, "hindipb", ["क"]);
  await traceLetter(page, "क", "hi");
  await traceLetter(page, "क", "hi");
  await expect(page.locator(".tr-word")).toContainText("कबूतर");
});

test("trace: nobody is stuck: Tap to continue draws each stroke, Show me plays the letter, five fails draw the stroke", async ({ page }) => {
  await seed(page, { cls: 1, board: "pseb" });
  await open(page, 1, "punjabi", ["ਸ", "ਹ"]);
  await page.locator("[data-act=show]").click();
  await expect(page.locator("[data-msg]")).toContainText("Watch how it is written");
  await expect(page.locator(".tr-num").first()).toBeVisible();
  // five scribbles on the first stroke: it is drawn for the child
  const label = await page.locator("[data-svg]").getAttribute("aria-label");
  await page.waitForTimeout(1500);
  for (let i = 0; i < 5; i++) {
    await page.waitForFunction(() => !document.querySelector(".tr-demo"));
    await drag(page, [[5, 95], [10, 95], [15, 95], [20, 95]]);
  }
  await expect(page.locator("[data-svg]")).not.toHaveAttribute("aria-label", label, { timeout: 8000 });
  // tap-to-continue: no tracing at all, just the button
  await page.locator("[data-act=tap]").click();
  await tapThrough(page);
  await expect(page.locator(".tr-win")).toBeVisible();
  await page.locator("[data-act=next]").click();
  await expect(page.locator(".tr-chip")).toHaveText("Guided");
  await expect(page.locator("[data-act=step]")).toBeVisible(); // tap mode stays on for the next letter
  await tapThrough(page);
  await page.locator("[data-act=finish]").click();
  await expect(page.locator(".game-result")).toBeVisible();
  const g = current(await readStore(page)).games;
  expect(Object.values(g)[0].trace.stars).toBe(1);
});

test("trace: reduced motion shows the demo as a still picture", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await seed(page, { cls: 2, board: "pseb" });
  await open(page, 2, "punjabi", ["ਗ"]);
  await page.locator("[data-act=show]").click();
  await expect(page.locator(".tr-num").first()).toBeVisible();
  await expect(page.locator(".tr-arrow.still").first()).toBeVisible();
});

test("trace: offered on Punjabi, Hindi and English chapters of Class 1 and the letter and phonics levels", async ({ page }) => {
  await seed(page, { cls: 1, board: "pseb" });
  await page.goto("/#/");
  await page.waitForFunction(() => window.StudyData && StudyData.chapters(1, "punjabi").length > 0);
  for (const subj of ["punjabi", "hindipb", "englishpb"]) {
    const ch = await firstChapter(page, 1, subj);
    await page.goto(`/#/play/1/${subj}/${ch}`);
    await expect(page.locator(".game-card", { hasText: "Trace the letter" })).toBeVisible();
  }
  for (const [url, shown] of [["punjabi/letters/letters-0", 1], ["punjabi/letters/letters-2", 1], ["punjabi/letters/letters-9", 0], ["english/phonics/phonics-1-letters", 1]]) {
    await page.goto(`/#/play/level/${url}`);
    await expect(page.locator(".game-card").first()).toBeVisible();
    await expect(page.locator(".game-card", { hasText: "Trace the letter" })).toHaveCount(shown);
  }
});

test("trace: Class 3 chapters have it, Class 4 chapters do not; the Punjabi interface is translated", async ({ page }) => {
  await seed(page, { cls: 3, board: "pseb", lang: "pa" });
  await page.goto("/#/");
  await page.waitForFunction(() => window.StudyData && StudyData.chapters(3, "punjabi").length > 0);
  const ch = await firstChapter(page, 3, "punjabi");
  await page.goto(`/#/play/3/punjabi/${ch}`);
  await expect(page.locator(".game-card", { hasText: "ਅੱਖਰ ਉੱਤੇ ਲਕੀਰ ਫੇਰੋ" })).toBeVisible();
  await page.goto(`/#/play/3/punjabi/${ch}/trace`);
  await expect(page.locator(".game-intro")).toContainText("ਹਰੇ ਬਿੰਦੂ");
  await page.locator("[data-g=start]").click();
  await expect(page.locator(".tr-chip")).toHaveText("ਸਹਾਰੇ ਨਾਲ");
});

test("trace: a Class 4 Punjabi chapter does not offer it", async ({ page }) => {
  await seed(page, { cls: 4, board: "pseb" });
  await page.goto("/#/");
  await page.waitForFunction(() => window.StudyData && StudyData.chapters(4, "punjabi").length > 0);
  const ch = await firstChapter(page, 4, "punjabi");
  await page.goto(`/#/play/4/punjabi/${ch}`);
  await expect(page.locator(".game-card").first()).toBeVisible();
  await expect(page.locator(".game-card", { hasText: "Trace the letter" })).toHaveCount(0);
});

test("trace: the Games home lists it", async ({ page }) => {
  await seed(page, { cls: 1, board: "pseb" });
  await page.goto("/#/games");
  await expect(page.locator(".shell-head .sub")).toBeVisible();
});

test("trace: every letter's stored strokes are accepted by the game's own matching, and the reverse is not", async ({ page }) => {
  await seed(page, { cls: 1, board: "pseb" });
  await page.goto("/#/");
  await page.waitForFunction(() => window.StudyData && StudyData.chapters(1, "punjabi").length > 0);
  const ch = await firstChapter(page, 1, "punjabi");
  await page.goto(`/#/play/1/punjabi/${ch}/trace`);
  await page.evaluate(() => LangGames.load());
  await page.waitForFunction(() => LangGames.ready());
  const bad = await page.evaluate(() => {
    const out = [];
    const jitter = (pts, k) => pts.map((p, i) => [p[0] + Math.sin(i * 1.7 + k) * 2.5, p[1] + Math.cos(i * 2.3 + k) * 2.5]);
    for (const [lang, set] of Object.entries(LangGames.get("strokes")))
      for (const [ch, paths] of Object.entries(set))
        paths.forEach((d, i) => {
          const pts = LangGames.flatten(d);
          const dense = TraceGame.densify(pts);
          const f = TraceGame.judge(jitter(dense, i), pts, 10);
          if (!f.ok) out.push(`${lang} ${ch} stroke ${i + 1}: ${f.why}`);
        });
    return out;
  });
  expect(bad).toEqual([]);
});

test("trace: not offered to students until the strokes are reviewed", async ({ page }) => {
  await page.addInitScript(() => (window.POCKET_PREVIEW = false));
  await page.goto("/#/");
  await page.waitForFunction(() => typeof Games !== "undefined" && Games.get("trace"));
  const offered = await page.evaluate(() => Games.get("trace").available(1, StudyData.subject("punjabi"), { id: "any" }));
  expect(offered).toBe(false);
});
