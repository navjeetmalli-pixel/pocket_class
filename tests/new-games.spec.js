// The two picture games: Picture word builder (js/games/wordbuild.js) and Habitat sort (js/games/habitat.js).
// To know the round, the tests wrap the game's mount (to read its data) and api.answered (to see what is recorded).
const { test, expect, seed } = require("./helpers");

const url = (c, s, ch, type) => `/#/play/${c}/${s}/${ch}/${type}`;

// A fake voice (so the Listen button shows) that counts what is spoken; reading must only happen on a press.
const voices = (page) =>
  page.addInitScript(() => {
    window.__spoken = [];
    try {
      const v = { name: "Fake", lang: "en-IN", default: true, localService: true, voiceURI: "f" };
      const sy = window.speechSynthesis;
      sy.getVoices = () => [v, { ...v, lang: "pa-IN", name: "P" }, { ...v, lang: "hi-IN", name: "H" }];
      sy.speak = (u) => window.__spoken.push(u.text);
    } catch (e) {}
  });

// Opens the game's intro, with mount wrapped: window.__data is the round, window.__ans the recorded answers.
async function open(page, cls, subj, ch, type, { cards } = {}) {
  await seed(page, { cls });
  await page.goto("/#/");
  await page.waitForSelector("#app");
  await page.evaluate(
    ({ type, cards }) => {
      const d = Games.get(type);
      const build = d.build;
      if (cards) d.build = (c, s, ch, seed) => ({ ...build(c, s, ch, seed), cards });
      const mount = d.mount;
      d.mount = (el, data, api) => {
        window.__data = data;
        window.__ans = [];
        const a = api.answered;
        api.answered = (item, ok, picked) => (window.__ans.push({ q: item.q, ok }), a(item, ok, picked));
        return mount(el, data, api);
      };
    },
    { type, cards }
  );
  await page.goto(url(cls, subj, ch, type));
  await expect(page.locator(".game-intro")).toBeVisible();
  await page.locator("[data-g=start]").click();
}

const round = (page, i) => page.evaluate((i) => window.__data.rounds[i], i);

// Taps the tiles for tokens from..to-1 of a round, in order (the bank has duplicates only when the word does).
async function tap(page, r, from, to, used = new Set()) {
  const tiles = page.locator(".wb-tile");
  for (let k = from; k < to; k++) {
    const idx = r.bank.findIndex((x, i) => x === r.tokens[k] && !used.has(i));
    used.add(idx);
    await tiles.nth(idx).click();
  }
  return used;
}

test("word builder (English, Class 1): build a word by tapping tiles; a wrong build shows the retry; only the first try is recorded", async ({ page }) => {
  await voices(page);
  await open(page, 1, "english", "naming-words", "wordbuild");
  await expect(page.locator(".wb-card")).toBeVisible();
  const r0 = await round(page, 0);
  expect(r0.lang).toBe("en");
  expect(r0.tokens.length).toBeGreaterThanOrEqual(2);
  expect(r0.tokens.length).toBeLessThanOrEqual(5); // Classes 1-2 keep to 2-5 letters
  expect(r0.bank.length - r0.tokens.length).toBeGreaterThanOrEqual(2);
  expect(r0.bank.length - r0.tokens.length).toBeLessThanOrEqual(3);
  // a big picture and the Listen button; nothing was read by itself
  await expect(page.locator(".wb-pic svg")).toBeVisible();
  await expect(page.locator(".wb-listen")).toBeVisible();
  expect(await page.evaluate(() => window.__spoken.length)).toBe(0);
  await page.locator(".wb-listen").click();
  expect(await page.evaluate(() => window.__spoken)).toEqual([r0.word]);
  // tiles are big touch targets
  const box = await page.locator(".wb-tile").first().boundingBox();
  expect(box.width).toBeGreaterThanOrEqual(56);
  expect(box.height).toBeGreaterThanOrEqual(56);

  // build the first word WRONG: the right tokens in the wrong order are wrong in their boxes
  const used = new Set();
  const order = r0.tokens.map((_, k) => k).reverse();
  if (r0.tokens.join("") === [...r0.tokens].reverse().join("")) order.push(order.shift()); // a palindrome: swap to be wrong
  for (const k of order) {
    const idx = r0.bank.findIndex((x, i) => x === r0.tokens[k] && !used.has(i));
    used.add(idx);
    await page.locator(".wb-tile").nth(idx).click();
  }
  await expect(page.locator(".wb-slot.filled")).toHaveCount(r0.tokens.length);
  await page.locator("[data-act=check]").click();
  await expect(page.locator(".wb-slot.wrong").first()).toBeVisible();
  await expect(page.locator(".wb-fb")).toContainText("Not quite");
  await expect(page.locator(".wb-fb")).toContainText("red boxes");
  // the wrong tiles go back to the bank, so there is room to try again
  await expect(page.locator(".wb-slot.wrong").first()).toBeVisible();
  await expect(page.locator("[data-act=check]")).toBeDisabled();
  expect(await page.evaluate(() => window.__ans)).toEqual([{ q: `Spell the word ${r0.word}`, ok: false }]);
  // clear and build it right: "Got it this time!", and nothing more is recorded for this word
  await page.waitForTimeout(1000); // the wrong tiles go back to the bank
  if (await page.locator("[data-act=clear]").isEnabled()) await page.locator("[data-act=clear]").click();
  await tap(page, r0, 0, r0.tokens.length);
  await expect(page.locator(".wb-slot.filled")).toHaveCount(r0.tokens.length);
  await page.locator("[data-act=check]").click();
  await expect(page.locator(".wb-fb .feedback.good")).toContainText("Got it this time!");
  expect(await page.evaluate(() => window.__ans.length)).toBe(1);
  await page.locator("[data-act=next]").click();

  // the other five words: right first time (the first of them takes a tile back on the way)
  for (let i = 1; i < 6; i++) {
    const r = await round(page, i);
    await expect(page.locator(".mk-top")).toContainText(`Word ${i + 1} of 6`);
    const used = await tap(page, r, 0, r.tokens.length);
    if (i === 1) {
      await page.locator(".wb-slot.filled").last().click(); // tapping a placed tile puts it back
      await expect(page.locator(".wb-slot.filled")).toHaveCount(r.tokens.length - 1);
      await expect(page.locator(".wb-tile:not(.used)")).toHaveCount(r.bank.length - r.tokens.length + 1);
      await page.locator(".wb-tile:not(.used)", { hasText: new RegExp(`^${r.tokens[r.tokens.length - 1]}$`) }).first().click();
    }
    await page.locator("[data-act=check]").click();
    await expect(page.locator(".wb-fb .feedback.good")).toContainText("Well done!");
    await page.locator("[data-act=next]").click();
  }
  await expect(page.locator(".game-result")).toBeVisible();
  const ans = await page.evaluate(() => window.__ans);
  expect(ans).toHaveLength(6);
  expect(ans.filter((a) => a.ok)).toHaveLength(5);
  expect(ans.every((a) => /^Spell the word [a-z]+$/.test(a.q))).toBe(true);
});

test("word builder: a second wrong try shows the word and moves on", async ({ page }) => {
  await open(page, 1, "english", "naming-words", "wordbuild");
  const r = await round(page, 0);
  const wrongBuild = async () => {
    // put the tiles in the reverse order; for a palindrome use a spare tile in the last box
    const used = new Set();
    const toks = [...r.tokens].reverse();
    if (toks.join("") === r.word) toks[toks.length - 1] = r.bank.find((x) => !r.tokens.includes(x));
    for (const tk of toks) {
      const idx = r.bank.findIndex((x, i) => x === tk && !used.has(i));
      used.add(idx);
      await page.locator(".wb-tile").nth(idx).click();
    }
    await page.locator("[data-act=check]").click();
  };
  await wrongBuild();
  await expect(page.locator(".wb-slot.wrong").first()).toBeVisible();
  // the wrong tiles go back to the bank after a moment; take any that remain back and build wrongly again
  await page.waitForTimeout(1000);
  if (await page.locator("[data-act=clear]").isEnabled()) await page.locator("[data-act=clear]").click();
  await wrongBuild();
  await expect(page.locator(".wb-fb")).toContainText(`The word is ${r.word}.`);
  await expect(page.locator("[data-act=next]")).toBeVisible();
  expect(await page.evaluate(() => window.__ans.length)).toBe(1);
});

test("word builder (Punjabi, Class 1): tiles are aksharas, joining the right tiles gives the word", async ({ page }) => {
  await open(page, 1, "punjabi", "rang-phal-janwar", "wordbuild");
  const data = await page.evaluate(() => window.__data);
  expect(data.lang).toBe("pa");
  let marked = 0;
  for (const r of data.rounds) {
    expect(r.tokens.join("")).toBe(r.word);
    expect(r.tokens.length).toBeGreaterThanOrEqual(2);
    expect(r.tokens.length).toBeLessThanOrEqual(5);
    for (const tk of r.tokens) expect(tk).not.toMatch(/^\p{M}/u); // a vowel sign never stands alone
    if (r.tokens.some((tk) => [...tk].length > 1)) marked++;
    // every spare tile is a Gurmukhi akshara not in the word
    const rest = r.bank.filter((x) => !r.tokens.includes(x));
    expect(rest.length).toBeGreaterThanOrEqual(2);
    expect(rest.every((x) => /[਀-੿]/.test(x))).toBe(true);
  }
  expect(marked).toBeGreaterThan(0); // at least one word has a tile with a vowel sign or other mark
  // build word 1 by tapping, and read the boxes back
  const r0 = data.rounds[0];
  await tap(page, r0, 0, r0.tokens.length);
  const boxes = await page.locator(".wb-slot").allTextContents();
  expect(boxes.join("")).toBe(r0.word);
  await page.locator("[data-act=check]").click();
  await expect(page.locator(".wb-fb .feedback.good")).toBeVisible();
  expect(await page.evaluate(() => window.__ans)).toEqual([{ q: `Spell the word ${r0.word}`, ok: true }]);
  await expect(page.locator(".wb-card")).toHaveAttribute("lang", "pa");
});

test("word builder: keyboard (Tab to a tile, Enter to place it, Enter on Check)", async ({ page }) => {
  await open(page, 1, "english", "naming-words", "wordbuild");
  const r = await round(page, 0);
  const used = new Set();
  for (let k = 0; k < r.tokens.length; k++) {
    const idx = r.bank.findIndex((x, i) => x === r.tokens[k] && !used.has(i));
    used.add(idx);
    await page.locator(".wb-tile").nth(idx).focus();
    await page.keyboard.press("Enter");
  }
  await expect(page.locator(".wb-slot.filled")).toHaveCount(r.tokens.length);
  await expect(page.locator("[data-act=check]")).toBeFocused(); // focus moves to Check when the boxes are full
  await page.keyboard.press("Enter");
  await expect(page.locator(".wb-fb .feedback.good")).toBeVisible();
  await expect(page.locator("[data-act=next]")).toBeFocused();
});

test("word builder: reduced motion still works", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await open(page, 2, "english", "naming-words-and-proper-nouns", "wordbuild");
  const r = await round(page, 0);
  await tap(page, r, 0, r.tokens.length);
  await page.locator("[data-act=check]").click();
  await expect(page.locator(".wb-fb .feedback.good")).toBeVisible();
});

test("habitat sort (Class 3): a fish goes to water, a cow in water slides back, a duck is accepted in land and water", async ({ page }) => {
  await open(page, 3, "evs", "animals-around-us", "habitat", { cards: ["fish", "cow", "duck", "eagle", "frog", "lion", "whale", "crow", "tree"] });
  await expect(page.locator(".hb-pick")).toHaveCount(3);
  for (const z of ["sky", "land", "both", "water"]) await expect(page.locator(`.hb-zone[data-z=${z}] svg`)).toBeVisible();
  const big = await page.locator(".hb-zone").first().boundingBox();
  expect(big.height).toBeGreaterThanOrEqual(56);
  expect((await page.locator(".hb-pick").first().boundingBox()).width).toBeGreaterThanOrEqual(56);

  // a fish: pick it, then the Water zone
  const pickCard = async (id) => page.locator(`.hb-pick[data-id=${id}]`).click();
  await pickCard("fish");
  await expect(page.locator(".hb-pick[data-id=fish]")).toHaveAttribute("aria-pressed", "true");
  await page.locator(".hb-zone[data-z=water]").click();
  await expect(page.locator("[data-placed=water] .hb-st")).toHaveCount(1);
  await expect(page.locator("[data-hb=line]")).toHaveText("A fish lives in water.");
  // a cow in the water: it slides back (stays in the tray), one plain line, nothing placed
  await pickCard("cow");
  await page.locator(".hb-zone[data-z=water]").click();
  await expect(page.locator("[data-hb=line]")).toContainText("A cow lives on land.");
  await expect(page.locator("[data-placed=water] .hb-st")).toHaveCount(1);
  await expect(page.locator(".hb-pick[data-id=cow]")).toBeVisible();
  // the retry: right this time
  await pickCard("cow");
  await page.locator(".hb-zone[data-z=land]").click();
  await expect(page.locator("[data-placed=land] .hb-st")).toHaveCount(1);
  // a duck lives on land AND water: the middle zone is accepted, and the line says so
  await pickCard("duck");
  await page.locator(".hb-zone[data-z=both]").click();
  await expect(page.locator("[data-placed=both] .hb-st")).toHaveCount(1);
  await expect(page.locator("[data-hb=line]")).toHaveText("A duck lives on land and in water.");
  // only the first try of each card is recorded
  expect(await page.evaluate(() => window.__ans)).toEqual([
    { q: "Where does a fish live?", ok: true },
    { q: "Where does a cow live?", ok: false },
    { q: "Where does a duck live?", ok: true },
  ]);
  // a duck in Land only would have been wrong (the table says "both"): checked on the table
  expect(await page.evaluate(() => HabitatSort.CARDS.find((c) => c.pic === "duck").home)).toBe("both");

  // keyboard: Tab to a card, Enter to pick it, then Enter on a zone
  await page.locator(".hb-pick[data-id=eagle]").focus();
  await page.keyboard.press("Enter");
  await expect(page.locator(".hb-pick[data-id=eagle]")).toHaveAttribute("aria-pressed", "true");
  await page.locator(".hb-zone[data-z=sky]").focus();
  await page.keyboard.press("Enter");
  await expect(page.locator("[data-placed=sky] .hb-st")).toHaveCount(1);
  // the rest, by dragging and tapping, to the results
  const home = await page.evaluate(() => Object.fromEntries(HabitatSort.CARDS.map((c) => [c.pic, c.home])));
  for (let guard = 0; guard < 6; guard++) {
    if (await page.locator("[data-hb=finish]").count()) break;
    const id = await page.locator(".hb-pick").first().getAttribute("data-id");
    await pickCard(id);
    await page.locator(`.hb-zone[data-z=${home[id]}]`).click();
  }
  await page.locator("[data-hb=finish]").click();
  await expect(page.locator(".game-result")).toBeVisible();
  expect(await page.evaluate(() => window.__ans.length)).toBe(9);
});

test("habitat sort: a second wrong try puts the card in its place; drag works; reduced motion", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await open(page, 4, "evs", "animals-and-their-homes", "habitat", { cards: ["frog", "crow", "tiger", "fish", "crab", "parrot", "tree", "lotus", "goat"] });
  // wrong twice: the frog is put in Sky, then in Sky again: it is placed in "both" with the same line
  await page.locator(".hb-pick[data-id=frog]").click();
  await page.locator(".hb-zone[data-z=sky]").click();
  await expect(page.locator("[data-hb=line]")).toContainText("A frog lives on land and in water.");
  await page.locator(".hb-pick[data-id=frog]").click();
  await page.locator(".hb-zone[data-z=sky]").click();
  await expect(page.locator("[data-placed=both] .hb-st.shown")).toHaveCount(1);
  expect(await page.evaluate(() => window.__ans)).toEqual([{ q: "Where does a frog live?", ok: false }]);
  // drag a card onto a zone
  const card = page.locator(".hb-pick[data-id=crow]");
  const from = await card.boundingBox();
  const to = await page.locator(".hb-zone[data-z=sky]").boundingBox();
  await page.mouse.move(from.x + from.width / 2, from.y + from.height / 2);
  await page.mouse.down();
  await page.mouse.move(to.x + to.width / 2, to.y + to.height / 2, { steps: 8 });
  await page.mouse.up();
  await expect(page.locator("[data-placed=sky] .hb-st")).toHaveCount(1);
  expect((await page.evaluate(() => window.__ans)).at(-1)).toEqual({ q: "Where does a crow live?", ok: true });
});

test("both games are offered where they fit, and not for Class 8", async ({ page }) => {
  await seed(page, { cls: 8 });
  await page.goto("/#/");
  await page.waitForSelector("#app");
  const r = await page.evaluate(async () => {
    await StudyData.loadSubjects(8, ["english", "science"]);
    const out = {};
    for (const id of ["english", "science"]) {
      const subj = StudyData.subject(id);
      out[id] = StudyData.chapters(8, id).flatMap((ch) => Games.availableFor(8, subj, ch).map((g) => g.type)).filter((x) => x === "wordbuild" || x === "habitat");
    }
    await StudyData.loadSubjects(3, ["english", "evs"]);
    const e3 = StudyData.subject("english");
    const v3 = StudyData.subject("evs");
    out.c3english = StudyData.chapters(3, "english").some((ch) => Games.availableFor(3, e3, ch).some((g) => g.type === "wordbuild"));
    out.c3evs = StudyData.chapters(3, "evs").filter((ch) => Games.availableFor(3, v3, ch).some((g) => g.type === "habitat")).map((c) => c.id);
    out.c3evsWord = StudyData.chapters(3, "evs").some((ch) => Games.availableFor(3, v3, ch).some((g) => g.type === "wordbuild"));
    return out;
  });
  expect(r.english).toEqual([]);
  expect(r.science).toEqual([]);
  expect(r.c3english).toBe(true);
  expect(r.c3evs).toEqual(["plants-around-us", "animals-around-us", "water"]);
  expect(r.c3evsWord).toBe(false); // only language subjects build words
});

test("word builder is hidden for Hindi and Punjabi by the release lock (English stays)", async ({ page }) => {
  await page.addInitScript(() => (window.POCKET_LOCK = true));
  await seed(page, { cls: 1 });
  await page.goto("/#/");
  await page.waitForSelector("#app");
  const r = await page.evaluate(async () => {
    await StudyData.loadSubjects(1, ["english", "hindi", "punjabi"]);
    const any = (id) => {
      const subj = StudyData.subject(id);
      return !!subj && StudyData.chapters(1, id).some((ch) => Games.availableFor(1, subj, ch).some((g) => g.type === "wordbuild"));
    };
    return { en: any("english"), hi: any("hindi"), pa: any("punjabi") };
  });
  expect(r).toEqual({ en: true, hi: false, pa: false });
});

test("word builder and habitat audit their own content", async ({ page }) => {
  await seed(page, { cls: 2 });
  await page.goto("/#/");
  await page.waitForSelector("#app");
  const bad = await page.evaluate(async () => {
    const out = [];
    await StudyData.loadSubjects(2, ["english", "punjabi", "hindi"]);
    for (const id of ["english", "punjabi", "hindi"]) {
      const subj = StudyData.subject(id);
      for (const ch of StudyData.chapters(2, id)) {
        const g = Games.get("wordbuild");
        if (!g.available(2, subj, ch)) continue;
        for (let s = 1; s <= 5; s++) out.push(...g.audit(g.build(2, subj, ch, s * 7919)).map((m) => `${id}/${ch.id}: ${m}`));
      }
    }
    await StudyData.loadSubjects(3, ["evs"]);
    const h = Games.get("habitat");
    for (let s = 1; s <= 20; s++) out.push(...h.audit(h.build(3, StudyData.subject("evs"), StudyData.chapters(3, "evs").find((c) => c.id === "water"), s * 7919)));
    return out;
  });
  expect(bad).toEqual([]);
});
