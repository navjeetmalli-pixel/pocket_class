// Play: the Play tab, the three games (match pairs, label the diagram, quick-fire), best stars, Games home, levels.
const { test, expect, seed, readStore, current, chaptersOf, answer } = require("./helpers");

const MATHS = chaptersOf(10, "maths")[0];
const LIGHT = "light-reflection-and-refraction"; // Class 10 Science: has diagrams
const mathsKey = `10/maths/${MATHS.id}`;
const lightKey = `10/science/${LIGHT}`;
const gameUrl = (c, s, ch, type) => `/#/play/${c}/${s}/${ch}/${type}`;

const start = async (page) => {
  await page.locator("[data-g=start]").click();
  await expect(page.locator(".game-hud")).toBeVisible();
};

test("chapter Play tab lists the games, and the start screen explains how to play", async ({ page }) => {
  await seed(page, { cls: 10 });
  await page.goto(`/#/chapter/10/science/${LIGHT}/notes`);
  const tabs = page.getByRole("navigation", { name: "Chapter sections" });
  await tabs.getByRole("link", { name: "Play" }).click();
  for (const name of ["Match pairs", "Label the diagram", "Quick-fire"]) await expect(page.locator(".game-card", { hasText: name })).toBeVisible();
  await page.locator(".game-card", { hasText: "Match pairs" }).click();
  await expect(page.locator(".game-intro")).toContainText("Tap a term");
  await expect(page.locator(".game-intro")).toContainText("Not played yet");
});

test("match pairs: a wrong match counts, every pair can be matched, best stars are saved and shown after a reload", async ({ page }) => {
  await seed(page, { cls: 10 });
  await page.goto(gameUrl(10, "maths", MATHS.id, "match"));
  await start(page);
  await expect(page.locator(".mp-card.term")).toHaveCount(6);

  // The right meaning of each term comes from the study data.
  const meaningOf = await page.evaluate(
    ({ id }) => {
      const ch = StudyData.chapters(10, "maths").find((c) => c.id === id);
      return Object.fromEntries(ch.terms.map((x) => [plain(x.term).trim(), plain(x.meaning).trim()]));
    },
    { id: MATHS.id }
  );
  const terms = page.locator(".mp-card.term");
  const meanings = page.locator(".mp-card.meaning");
  const textOf = async (loc, i) => (await loc.nth(i).textContent()).trim();
  const rightIndex = async (term) => {
    for (let i = 0; i < 6; i++) if ((await textOf(meanings, i)) === meaningOf[term]) return i;
    throw new Error("no meaning for " + term);
  };

  // One wrong match first: the first term with the meaning next to its own.
  const first = await textOf(terms, 0);
  const rightFirst = await rightIndex(first);
  await terms.nth(0).click();
  await meanings.nth((rightFirst + 1) % 6).click();
  await expect(page.locator(".mp-card.bad")).toHaveCount(2);
  await expect(page.locator(".mp-card.bad")).toHaveCount(0);

  for (let n = 0; n < 6; n++) {
    const open = page.locator(".mp-card.term:not(.done)").first();
    const term = (await open.textContent()).trim();
    const idx = await rightIndex(term);
    await open.click();
    await meanings.nth(idx).click();
  }
  await expect(page.locator(".game-result")).toBeVisible();
  await expect(page.locator(".game-result .stars")).toHaveAttribute("aria-label", "3 of 3 stars"); // one wrong match is still 3 stars
  await expect(page.locator(".review-item")).toHaveCount(1);
  await expect(page.locator(".review-item")).toContainText(first);

  const saved = current(await readStore(page)).games[mathsKey].match;
  expect(saved.stars).toBe(3);
  expect(saved.best).toBeGreaterThan(400);

  // After a reload the Play tab shows the best stars.
  await page.goto(`/#/chapter/10/maths/${MATHS.id}/play`);
  await page.reload();
  await expect(page.locator(".game-card", { hasText: "Match pairs" }).locator(".stars")).toHaveAttribute("aria-label", "3 of 3 stars");
  await page.locator(".game-card", { hasText: "Match pairs" }).click();
  await expect(page.locator(".game-intro")).toContainText("Best score " + saved.best);
});

test("quick-fire: a right answer scores, wrong answers cost lives and go to My mistakes, three misses end the round", async ({ page }) => {
  await seed(page, { cls: 10 });
  await page.goto(gameUrl(10, "science", LIGHT, "quickfire"));
  await start(page);
  await expect(page.locator("[data-hud=lives]")).toHaveAttribute("aria-label", "3 lives left");

  // Right answer: score goes up and the streak shows 1; the next question follows by itself.
  const r = await answer(page, "right");
  expect(r.known, "the question must be in the study data").toBe(true);
  await expect(page.locator(".option.correct")).toHaveCount(1);
  await expect(page.locator("[data-hud=score]")).not.toHaveText("0");
  await expect(page.locator("[data-hud=streak]")).toHaveText("1");
  await expect(page.locator("#qf-q")).not.toContainText(r.text, { timeout: 5000 });

  // Wrong answer: a life is lost, the streak resets, the right answer and why are shown, then Next.
  const w = await answer(page, "wrong");
  await expect(page.locator(".feedback.bad")).toContainText("Correct answer:");
  await expect(page.locator("[data-hud=lives]")).toHaveAttribute("aria-label", "2 lives left");
  await expect(page.locator("[data-hud=streak]")).toHaveText("0");
  const store = current(await readStore(page));
  expect(Object.keys(store.mistakes).some((k) => k.startsWith(lightKey + "/"))).toBe(true);
  await page.locator('[data-act="next"]').click();
  await answer(page, "wrong");
  await page.locator('[data-act="next"]').click();
  await answer(page, "wrong");
  await expect(page.locator('[data-act="next"]')).toContainText("See my score");
  await page.locator('[data-act="next"]').click();

  await expect(page.locator(".game-result")).toBeVisible();
  await expect(page.locator(".review-item")).toHaveCount(3);
  await expect(page.locator(".game-result")).toContainText("3 questions added to My mistakes");
  expect(current(await readStore(page)).games[lightKey].quickfire.plays).toBe(1);
  expect(w.text).toBeTruthy();
});

test("label the diagram: blanks are numbered, a wrong label is refused, labels go in by tap or by drag", async ({ page }) => {
  await seed(page, { cls: 10 });
  await page.goto(gameUrl(10, "science", LIGHT, "label"));
  await start(page);
  const n = await page.locator(".lab-slot").count();
  expect(n).toBeGreaterThanOrEqual(3);
  expect(n).toBeLessThanOrEqual(6);
  await expect(page.locator(".lab-chip")).toHaveCount(n);
  await expect(page.locator(".lab-hidden")).toHaveCount(n);

  // The right label of each blank: the hidden text nearest to it.
  const rightLabel = (s) =>
    page.evaluate((s) => {
      const c = (el) => {
        const r = el.getBoundingClientRect();
        return [r.x + r.width / 2, r.y + r.height / 2];
      };
      const [x, y] = c(document.querySelector(`.lab-slot[data-slot="${s}"] .box`));
      let best = null;
      for (const tx of document.querySelectorAll("text.lab-hidden")) {
        const [a, b] = c(tx);
        const d = Math.hypot(a - x, b - y);
        if (!best || d < best.d) best = { d, text: tx.textContent.replace(/\s+/g, " ").trim() };
      }
      return best.text;
    }, s);
  const chip = (text) => page.locator(".lab-chip", { hasText: text }).filter({ hasText: new RegExp("^\\s*" + text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "\\s*$") });
  const slot = (s) => page.locator(`.lab-slot[data-slot="${s}"]`);

  // A wrong label (the one that belongs to blank 1, tapped on blank 0): refused, score stays 0.
  const l0 = await rightLabel(0);
  const l1 = await rightLabel(1);
  await chip(l1).click();
  await slot(0).click();
  await expect(slot(0)).toHaveClass(/bad/);
  await expect(page.locator("[data-hud=score]")).toHaveText("0");
  await expect(slot(0)).not.toHaveClass(/ok/);
  await expect(slot(0)).not.toHaveClass(/bad/);

  // Right label by tap, then tap (the other order: blank first, then label).
  await chip(l0).click();
  await slot(0).click();
  await expect(slot(0)).toHaveClass(/ok/);
  await expect(page.locator("[data-hud=score]")).toHaveText("100");
  await expect(page.locator(".lab-hidden")).toHaveCount(n - 1);
  await slot(1).click();
  await chip(l1).click();
  await expect(slot(1)).toHaveClass(/ok/);

  // The rest by drag and drop (pointer events).
  for (let s = 2; s < n; s++) {
    const label = await rightLabel(s);
    const from = await chip(label).boundingBox();
    const to = await slot(s).locator(".box").boundingBox();
    await page.mouse.move(from.x + from.width / 2, from.y + from.height / 2);
    await page.mouse.down();
    await page.mouse.move(from.x + from.width / 2 + 20, from.y + from.height / 2 - 20, { steps: 3 });
    await page.mouse.move(to.x + to.width / 2, to.y + to.height / 2, { steps: 6 });
    await page.mouse.up();
    await expect(slot(s)).toHaveClass(/ok/);
  }
  await expect(page.locator(".feedback.good")).toBeVisible();
  await page.locator("[data-act=done]").click();
  await expect(page.locator(".game-result")).toBeVisible();
  await expect(page.locator(".game-result .stars")).toHaveAttribute("aria-label", "2 of 3 stars"); // one wrong try
  await expect(page.locator(".review-item")).toHaveCount(1);
  expect(current(await readStore(page)).games[lightKey].label.stars).toBe(2);
});

test("pause stops the clock and hides the board; Escape pauses too", async ({ page }) => {
  await seed(page, { cls: 10 });
  await page.goto(gameUrl(10, "maths", MATHS.id, "match"));
  await start(page);
  await page.getByRole("button", { name: "Pause" }).click();
  await expect(page.locator(".game-pause")).toBeVisible();
  await expect(page.locator(".match-board")).toBeHidden();
  const t0 = await page.locator("[data-hud=time]").textContent();
  await page.waitForTimeout(1500);
  expect(await page.locator("[data-hud=time]").textContent()).toBe(t0);
  await page.getByRole("button", { name: "Resume" }).click();
  await expect(page.locator(".match-board")).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(page.locator(".game-pause")).toBeVisible();
});

test("Games home: subjects, a chapter list with game icons, and a random game", async ({ page }) => {
  await seed(page, { cls: 10 });
  await page.goto("/#/");
  await page.locator(".tool", { hasText: "Games" }).click();
  await expect(page).toHaveURL(/#\/games$/);
  await page.locator('.subject-card[href="#/games/science"]').click();
  await expect(page.locator(".chapter-row").first()).toBeVisible();
  await page.goto("/#/games");
  await page.getByRole("button", { name: "Random game" }).click();
  await expect(page).toHaveURL(/#\/play\/10\/\w+\/[\w-]+\/(match|label|quickfire)$/);
  await expect(page.locator(".game-intro")).toBeVisible();
});

test("games in Punjabi, and on a Class 2 chapter", async ({ page }) => {
  await seed(page, { cls: 2, lang: "pa" });
  const ch = chaptersOf(2, "punjabi")[0];
  await page.goto(`/#/chapter/2/punjabi/${ch.id}/play`);
  await expect(page.locator(".game-card", { hasText: "ਜੋੜੇ ਮਿਲਾਓ" })).toBeVisible();
  await page.locator(".game-card", { hasText: "ਜੋੜੇ ਮਿਲਾਓ" }).click();
  await expect(page.locator("[data-g=start]")).toContainText("ਸ਼ੁਰੂ ਕਰੋ");
  await start(page);
  await expect(page.locator(".mp-card.term").first()).toBeVisible();
  await expect(page.getByText("Score")).toHaveCount(0); // the bar is translated
});

test("a Practice-by-topic level has a Play button that opens games built from its chapters", async ({ page }) => {
  await seed(page, { cls: 10 });
  await page.goto("/#/paths/maths");
  await page.locator("a.card").first().click(); // first topic
  await page.locator("a.chapter-row, a.card").filter({ hasText: /Level/ }).first().click();
  const play = page.getByRole("link", { name: "Play" });
  await expect(play).toBeVisible();
  await play.click();
  await expect(page).toHaveURL(/#\/play\/level\//);
  await expect(page.locator(".game-card").first()).toBeVisible();
  await page.locator(".game-card", { hasText: "Quick-fire" }).click();
  await start(page);
  await expect(page.locator("#qf-q")).toBeVisible();
});
