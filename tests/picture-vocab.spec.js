// Picture vocabulary generators (js/gen.js: picWhich, picName, picOdd, picGroup and their Food / Animals / Things / Transport / Nature,
// Hi and Pa forms): made fresh from the picture kit. Options are words; the app draws them as picture cards through PicDict.forOptions.
const { test, expect, seed } = require("./helpers");

const NAMES = (page) => page.evaluate(() => Gen.names.filter((n) => /^pic(Which|Name|Odd|Group)/.test(n)));
const SEEDS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

test("picWhich: four picture options of different things, and the picture of the named one is the right answer", async ({ page }) => {
  await page.goto("/#/");
  const names = (await NAMES(page)).filter((n) => /^picWhich/.test(n));
  expect(names.length).toBeGreaterThanOrEqual(15); // 6 sets x English, Hindi, Punjabi
  const bad = await page.evaluate(([names, seeds]) => {
    const out = [];
    for (const n of names) for (const sd of seeds) {
      const q = Gen.make(n, sd * 104729);
      if (!q) { out.push(`${n} ${sd}: nothing`); continue; }
      const cards = PicDict.forOptions(q.options, { q: q.q });
      if (!cards || cards.length !== 4) { out.push(`${n} ${sd}: not 4 picture options`); continue; }
      if (new Set(cards.map((c) => c.key)).size !== 4) out.push(`${n} ${sd}: two options show the same picture`);
      const right = PicDict.forText(q.options[0], { decorative: true });
      if (!right || cards[0].key !== right.key || right.key !== "item:" + q.picOf[q.options[0]]) out.push(`${n} ${sd}: right option is not its own picture`);
      if (!q.q.includes(q.options[0].split(" ")[0] === q.options[0] ? q.options[0] : q.options[0])) out.push(`${n} ${sd}: question does not name the answer`);
      if (q.pic) out.push(`${n} ${sd}: should not carry a picture above the question`);
      // the question picture (if any) is never one of the options
      const qp = PicDict.forQuestion(q);
      if (qp && cards.some((c) => c.key === qp.key)) out.push(`${n} ${sd}: question picture gives the answer away`);
    }
    return out;
  }, [names, SEEDS]);
  expect(bad).toEqual([]);
});

test("picName: a picture above the question, four word options of one category, no picture cards for the words", async ({ page }) => {
  await page.goto("/#/");
  const names = (await NAMES(page)).filter((n) => /^picName/.test(n));
  expect(names.length).toBeGreaterThanOrEqual(15);
  const bad = await page.evaluate(([names, seeds]) => {
    const out = [];
    for (const n of names) for (const sd of seeds) {
      const q = Gen.make(n, sd * 104729);
      if (!q) { out.push(`${n} ${sd}: nothing`); continue; }
      if (!/^<svg[\s\S]*aria-label="[^"]+"[\s\S]*<\/svg>$/.test(q.pic)) out.push(`${n} ${sd}: no labelled picture`);
      if (PicDict.forOptions(q.options, { q: q.q })) out.push(`${n} ${sd}: the words must not be drawn (the picture above is the clue)`);
      const cats = new Set(q.options.map((o) => Gen.vocab.items[q.picOf[o]].cat));
      if (cats.size !== 1) out.push(`${n} ${sd}: options from ${[...cats]}`);
      if (new Set(q.options).size !== 4) out.push(`${n} ${sd}: duplicate words`);
      // the picture above is the right answer's picture
      const right = PicDict.forText(q.options[0], { decorative: true });
      if (!right || !q.pic.includes("<g")) out.push(`${n} ${sd}: no picture for the answer`);
    }
    return out;
  }, [names, SEEDS]);
  expect(bad).toEqual([]);
});

test("picOdd: three from one category, the odd one from another", async ({ page }) => {
  await page.goto("/#/");
  const bad = await page.evaluate((seeds) => {
    const out = [], V = Gen.vocab, catOf = (w) => Object.values(V.items).find((v) => v.en === w).cat, seen = new Set();
    for (const sd of seeds.concat(Array.from({ length: 60 }, (_, i) => 100 + i))) {
      const q = Gen.make("picOdd", sd * 7919);
      if (!q) { out.push(`${sd}: nothing`); continue; }
      const cards = PicDict.forOptions(q.options, { q: q.q });
      if (!cards || cards.length !== 4) out.push(`${sd}: not 4 picture options`);
      const odd = catOf(q.options[0]), rest = q.options.slice(1).map(catOf);
      seen.add(odd);
      if (new Set(rest).size !== 1) out.push(`${sd}: the three are not one category: ${rest}`);
      if (rest[0] === odd) out.push(`${sd}: the odd one is from the same category (${odd})`);
      if ([["animal", "bird"], ["fruit", "food"], ["vegetable", "food"], ["school", "home"]].some((p) => p.includes(odd) && p.includes(rest[0]))) out.push(`${sd}: ambiguous pair ${odd}/${rest[0]}`);
      if (!q.steps.join(" ").includes(V.cats[rest[0]].pl)) out.push(`${sd}: the explanation does not name the category`);
    }
    if (seen.size < 6) out.push(`only ${seen.size} different odd categories`);
    return out;
  }, SEEDS);
  expect(bad).toEqual([]);
});

test("picGroup: the right answer is in the group and the other three are not", async ({ page }) => {
  await page.goto("/#/");
  const names = (await NAMES(page)).filter((n) => /^picGroup/.test(n));
  expect(names.length).toBeGreaterThanOrEqual(7);
  const bad = await page.evaluate(([names, seeds]) => {
    const out = [], V = Gen.vocab;
    const catOf = (w) => (Object.values(V.items).find((v) => v.en === w) || {}).cat;
    const MEMBERS = {
      "Which of these is a vegetable?": (w) => catOf(w) === "vegetable", "Which of these is a fruit?": (w) => catOf(w) === "fruit", "Which of these is a flower?": (w) => catOf(w) === "flower",
      "Which of these is a bird?": (w) => catOf(w) === "bird", "Which animal lives in the sea?": (w) => ["fish", "crab", "whale", "octopus"].includes(w),
      "Which animal gives us milk?": (w) => ["cow", "goat"].includes(w), "Which of these is a means of transport?": (w) => catOf(w) === "vehicle",
      "Which of these do we wear?": (w) => catOf(w) === "clothes", "Which part of the body do we see with?": (w) => w === "eye", "Which part of the body do we hear with?": (w) => w === "ear",
      "Who grows crops in the field?": (w) => w === "farmer", "Who teaches us in school?": (w) => w === "teacher", "Who treats us when we are sick?": (w) => w === "doctor",
    };
    let checked = 0;
    for (const n of names) for (const sd of seeds.concat([20, 21, 22, 23, 24, 25, 26, 27])) {
      const q = Gen.make(n, sd * 31337);
      if (!q) { out.push(`${n} ${sd}: nothing`); continue; }
      const cards = PicDict.forOptions(q.options, { q: q.q });
      if (!cards || cards.length !== 4) out.push(`${n} ${sd}: not 4 picture options (${q.q})`);
      const inGroup = MEMBERS[q.q];
      if (inGroup) {
        checked++;
        if (!inGroup(q.options[0])) out.push(`${n} ${sd}: ${q.options[0]} is not an answer to "${q.q}"`);
        if (q.options.slice(1).some(inGroup)) out.push(`${n} ${sd}: a wrong option is also an answer to "${q.q}": ${q.options}`);
      }
    }
    if (checked < 20) out.push("too few checked questions: " + checked);
    return out;
  }, [names, SEEDS]);
  expect(bad).toEqual([]);
});

test("every word used by the generators draws its own picture in English, Hindi and Punjabi", async ({ page }) => {
  await page.goto("/#/");
  const bad = await page.evaluate(() => {
    const out = [];
    for (const v of Object.values(Gen.vocab.items)) for (const lang of ["en", "hi", "pa"]) {
      if (!v[lang]) continue;
      const r = PicDict.forText(v[lang], { decorative: true });
      if (!r || r.key !== "item:" + v.name) out.push(`${lang} ${v[lang]} -> ${r && r.key}, wanted ${v.name}`);
      if (Pics.names.indexOf(v.name) < 0) out.push(`${v.name} is not drawn`);
    }
    return out;
  });
  expect(bad).toEqual([]);
});

test("chapters: the generators are mapped to naming-words, food, animals, transport, body and work chapters", async ({ page }) => {
  await page.goto("/#/");
  const m = await page.evaluate(() => ({
    e1: Gen.forChapter(1, "english", "naming-words"), e2: Gen.forChapter(2, "english", "naming-words-and-proper-nouns"), e3: Gen.forChapter(3, "english", "nouns"),
    pb1: Gen.forChapter(1, "englishpb", "naming-words"), evs3: Gen.forChapter(3, "evs", "food-we-eat"), evs3b: Gen.forChapter(3, "evs", "our-body-and-senses"),
    evs4: Gen.forChapter(4, "evs", "work-people-do"), evs5: Gen.forChapter(5, "evs", "forests-and-forest-people"),
    hi1: Gen.forChapter(1, "hindi", "phal-sabziyan-rang"), pa1: Gen.forChapter(1, "punjabi", "rang-phal-janwar"), hi3: Gen.forChapter(3, "hindi", "sangya"), pa3: Gen.forChapter(3, "punjabi", "naanv"),
  }));
  expect(m.e1).toEqual(expect.arrayContaining(["picWhich", "picName"]));
  expect(m.e2).toEqual(expect.arrayContaining(["picWhich", "picName", "picOdd"]));
  expect(m.e3).toContain("picOdd");
  expect(m.pb1).toContain("picWhich");
  expect(m.evs3).toContain("picGroupFood");
  expect(m.evs3b).toContain("picGroupBody");
  expect(m.evs4).toContain("picGroupWork");
  expect(m.evs5).toContain("picGroupAnimals");
  expect(m.hi1).toContain("picWhichFoodHi");
  expect(m.pa1).toContain("picWhichFoodPa");
  expect(m.hi3).toContain("picWhichHi");
  expect(m.pa3).toContain("picNamePa");
});

test("Hindi and Punjabi: the question names the picture in that language", async ({ page }) => {
  await page.goto("/#/");
  const r = await page.evaluate(() => ({ hi: Gen.make("picWhichHi", 11), pa: Gen.make("picWhichPa", 11), hn: Gen.make("picNameHi", 11), pn: Gen.make("picNamePa", 11) }));
  expect(r.hi.q).toMatch(/^[ऀ-ॿ ़-]+ का चित्र कौन-सा है\?$/);
  expect(r.hi.q).toContain(r.hi.options[0]);
  expect(r.pa.q).toMatch(/^[਀-੿ ]+ ਦੀ ਤਸਵੀਰ ਕਿਹੜੀ ਹੈ\?$/);
  expect(r.pa.q).toContain(r.pa.options[0]);
  expect(r.hn.q).toBe("यह क्या है?");
  expect(r.pn.q).toBe("ਇਹ ਕੀ ਹੈ?");
});

test("a Class 1 English chapter's practice shows a picWhich question with four picture cards; tapping the right card marks it", async ({ page }) => {
  await seed(page, { name: "Anu", cls: 1 });
  await page.goto("/#/chapter/1/english/naming-words/practise");
  const first = page.locator("#gen-mount article").first();
  await expect(first).toBeVisible();
  await expect(first.locator(".q")).toContainText("Which one is");
  await expect(first.locator(".pic-options .pic-opt")).toHaveCount(4);
  await expect(first.locator(".pic-opt .pic-art svg")).toHaveCount(4);
  // the card of the named thing is the right one: tap it
  await first.locator('.pic-opt[data-g="0"]').click({ position: { x: 20, y: 100 } }); // clear of the speaker button
  await expect(first.locator('.pic-opt[data-g="0"]')).toHaveClass(/correct/);
  await expect(first.locator(".pic-opt.wrong")).toHaveCount(0);
  // a wrong one is marked wrong and the right one is shown
  const second = page.locator("#gen-mount article", { has: page.locator(".pic-options") }).nth(1);
  await second.locator('.pic-opt:not([data-g="0"])').first().click({ position: { x: 20, y: 100 } });
  await expect(second.locator(".pic-opt.wrong")).toHaveCount(1);
  await expect(second.locator(".pic-opt.correct")).toHaveCount(1);
  // the same chapter also has a picName question: a labelled picture above it and no picture cards
  const named = page.locator("#gen-mount article", { hasText: "What is this?" }).first();
  await expect(named.locator(".q-pic svg[aria-label]")).toHaveCount(1);
  await expect(named.locator(".pic-options")).toHaveCount(0);
});

test("EVS Class 3: a picGroup question shows picture cards", async ({ page }) => {
  await seed(page, { name: "Anu", cls: 3 });
  await page.goto("/#/chapter/3/evs/food-we-eat/practise");
  const art = page.locator("#gen-mount article").first();
  await expect(art).toBeVisible();
  await expect(art.locator(".pic-options .pic-opt")).toHaveCount(4);
});
