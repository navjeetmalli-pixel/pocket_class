// Language grammar generators (js/gen-lang.js): English plurals, a/an, past tense, verb forms, Hindi and Punjabi vachan, ling, vilom.
// The answers come from hand-written word lists, so these tests check known words and that nothing the generators make contradicts a list.
const { test, expect, seed } = require("./helpers");

// Runs `name` over many seeds in the page and returns [{ q, a, wrong }]
const run = (page, name, n = 600) =>
  page.evaluate(([name, n]) => {
    const out = [];
    for (let i = 1; i <= n; i++) {
      const q = Gen.make(name, i * 2654435761);
      if (q) out.push({ q: q.q, a: q.options[0], wrong: q.options.slice(1), steps: q.steps });
    }
    return out;
  }, [name, n]);

const answerFor = (list, re) => {
  const hit = list.find((x) => re.test(x.q));
  return hit && hit.a;
};

test("English plurals: known words, and every answer matches the list", async ({ page }) => {
  await page.goto("/#/");
  const qs = [...(await run(page, "engPlural")), ...(await run(page, "engPluralMore"))];
  const known = { box: "boxes", baby: "babies", child: "children", mouse: "mice", boy: "boys", leaf: "leaves", potato: "potatoes", piano: "pianos", sheep: "sheep", foot: "feet", wife: "wives", city: "cities" };
  for (const [s, p] of Object.entries(known)) {
    const a = answerFor(qs, new RegExp(`(plural of "${s}"\\?|One ${s}, many)`));
    expect(a, `plural of ${s}`).toBe(p);
  }
  const bad = await page.evaluate((qs) => {
    const table = Object.fromEntries([...Gen.lang.E_PLURAL_1, ...Gen.lang.E_PLURAL_2].map((r) => [r[0], r[1]]));
    return qs.filter((x) => { const m = /plural of "([^"]+)"|One (\S+), many/.exec(x.q); const w = m[1] || m[2]; return table[w] !== x.a; }).map((x) => x.q);
  }, qs);
  expect(bad).toEqual([]);
});

test("a / an: the sound decides (an hour, a university, an apple, a book)", async ({ page }) => {
  await page.goto("/#/");
  const qs = [...(await run(page, "engAAn")), ...(await run(page, "engAAnSound"))];
  const an = qs.filter((x) => /needs "an"/.test(x.q)).map((x) => x.a);
  const a = qs.filter((x) => /needs "a" /.test(x.q)).map((x) => x.a);
  for (const w of ["hour", "apple", "honest boy", "umbrella"]) expect(an).toContain(w);
  for (const w of ["university", "book", "European", "unit"]) expect(a).toContain(w);
  for (const w of ["hour", "honest man", "heir", "honour"]) expect(a).not.toContain(w);
  for (const w of ["university", "uniform", "European"]) expect(an).not.toContain(w);
  // none of the wrong options is also right
  const clash = await page.evaluate((qs) => {
    const an = new Set([...Gen.lang.AN_1, ...Gen.lang.AN_2]), a = new Set([...Gen.lang.A_1, ...Gen.lang.A_2]);
    return qs.filter((x) => /needs "(an?)"/.test(x.q)).filter((x) => { const want = /needs "an"/.test(x.q) ? an : a; return x.wrong.some((w) => want.has(w)); }).map((x) => x.q + " " + x.wrong);
  }, qs);
  expect(clash).toEqual([]);
});

test("past tense: regular and irregular verbs", async ({ page }) => {
  await page.goto("/#/");
  const qs = await run(page, "engPast");
  const known = { go: "went", eat: "ate", study: "studied", stop: "stopped", like: "liked", play: "played", buy: "bought", write: "wrote", put: "put", carry: "carried" };
  for (const [b, p] of Object.entries(known)) expect(answerFor(qs, new RegExp(`past tense of "${b}"`)), b).toBe(p);
  const sent = await run(page, "engVerbPast");
  expect(answerFor(sent, /^Fill in the blank: .* ___ to school/)).toBe("went");
  const bad = await page.evaluate((qs) => {
    const t = Object.fromEntries([...Gen.lang.E_REG, ...Gen.lang.E_IRR].map((r) => [r[0], r[1]]));
    return qs.filter((x) => t[/"([^"]+)"/.exec(x.q)[1]] !== x.a).map((x) => x.q);
  }, qs);
  expect(bad).toEqual([]);
});

test("verb forms in sentences: he goes, they go, is going, has gone", async ({ page }) => {
  await page.goto("/#/");
  const pres = await run(page, "engVerbPresent");
  for (const x of pres.filter((x) => /^Fill in the blank: (He|She|My mother|The boy|The girl|Our teacher|My brother) ___ to school/.test(x.q))) expect(x.a).toBe("goes");
  for (const x of pres.filter((x) => /^Fill in the blank: (I|We|They|You|The children|My friends) ___ to school/.test(x.q))) expect(x.a).toBe("go");
  const perf = await run(page, "engVerbPerfect");
  for (const x of perf.filter((x) => /___ to school/.test(x.q))) expect(x.a).toBe("gone");
  const ing = await run(page, "engVerbIng");
  for (const x of ing.filter((x) => /___ to school/.test(x.q))) expect(x.a).toBe("going");
});

test("Hindi and Punjabi vachan: right plurals, questions in the subject's own language", async ({ page }) => {
  await page.goto("/#/");
  const hi = await run(page, "hiVachan");
  const known = { लड़का: "लड़के", किताब: "किताबें", लड़की: "लड़कियाँ", चिड़िया: "चिड़ियाँ", कविता: "कविताएँ" };
  for (const [s, p] of Object.entries(known)) expect(answerFor(hi, new RegExp(`‘${s}’`)), s).toBe(p);
  expect(hi.every((x) => /बहुवचन/.test(x.q))).toBe(true);
  const pa = await run(page, "paVachan");
  const knownPa = { ਮੁੰਡਾ: "ਮੁੰਡੇ", ਕੁੜੀ: "ਕੁੜੀਆਂ", ਕਿਤਾਬ: "ਕਿਤਾਬਾਂ", ਘੋੜਾ: "ਘੋੜੇ" };
  for (const [s, p] of Object.entries(knownPa)) expect(answerFor(pa, new RegExp(`‘${s}’`)), s).toBe(p);
  expect(pa.every((x) => /ਬਹੁ-ਵਚਨ/.test(x.q))).toBe(true);
  // ling and vilom: the asked word's partner is the answer
  const ling = await run(page, "hiLing");
  expect(answerFor(ling, /‘शेर’ का स्त्रीलिंग/)).toBe("शेरनी");
  expect(answerFor(ling, /‘रानी’ का पुल्लिंग/)).toBe("राजा");
  const paLing = await run(page, "paLing");
  expect(answerFor(paLing, /‘ਮੁੰਡਾ’ ਦਾ ਇਸਤਰੀ/)).toBe("ਕੁੜੀ");
  const vil = await run(page, "hiVilom");
  expect(answerFor(vil, /‘दिन’/)).toBe("रात");
  const paVir = await run(page, "paVirodhi");
  expect(answerFor(paVir, /‘ਦਿਨ’/)).toBe("ਰਾਤ");
});

test("the word lists have no duplicates or conflicts", async ({ page }) => {
  await page.goto("/#/");
  expect(await page.evaluate(() => Gen.lang.check())).toEqual([]);
});

test("a Class 4 English grammar chapter shows Fresh questions, and a literature chapter gets the mixed grammar set", async ({ page }) => {
  await seed(page, { name: "Asha", cls: 4 });
  await page.goto("/#/");
  const maps = await page.evaluate(() => ({ past: Gen.forChapter(4, "english", "simple-past-tense"), lit: Gen.forChapter(4, "english", "the-old-stag"), litPb: Gen.forChapter(5, "englishpb", "rb5-two-frogs"), hindi: Gen.forChapter(3, "hindi", "vachan"), pa: Gen.forChapter(6, "punjabi", "ling") }));
  expect(maps.past).toEqual(expect.arrayContaining(["engPast", "engVerbPast", "engMix"]));
  expect(maps.lit).toEqual(["engMix"]);
  expect(maps.litPb).toEqual(["engMix"]);
  expect(maps.hindi).toEqual(["hiVachan"]);
  expect(maps.pa).toEqual(["paLing"]);

  await page.goto("/#/chapter/4/english/simple-past-tense/practise");
  await expect(page.getByRole("heading", { name: "Fresh questions" })).toBeVisible();
  await expect(page.locator("#gen-mount article")).toHaveCount(5);

  await page.goto("/#/chapter/4/english/the-old-stag/practise");
  await expect(page.getByRole("heading", { name: "Fresh questions" })).toBeVisible();
  await expect(page.locator("#gen-mount article")).toHaveCount(5);
});
