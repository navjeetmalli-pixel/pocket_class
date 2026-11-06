// Auto-made practice questions (js/derive.js): word meanings, true or false, blanks, dates and order, capitals, made from what
// the chapters already hold. The big all-chapters check is scripts/check-derive.js; these tests cover how it shows up in the app.
const { test, expect, seed, readStore, current } = require("./helpers");

const SCIENCE = "life-processes"; // Class 10 Science: many key terms
const url = (c, s, ch, tail = "") => `/#/chapter/${c}/${s}/${ch}${tail}`;

// Items for a chapter from the page itself (the app's own Derive, with its data loaded).
const derive = (page, c, s, ch, opts) =>
  page.evaluate(
    async ([c, s, ch, opts]) => {
      await StudyData.loadSubjects(c, [s]);
      await StudyData.loadTimelines();
      return Derive.forChapter(c, s, ch, opts);
    },
    [c, s, ch, opts]
  );

test("a chapter with terms offers Word meanings, and a 10-question round works end to end", async ({ page }) => {
  await seed(page, { name: "Asha", cls: 10 });
  await page.goto(url(10, "science", SCIENCE, "/practise"));
  await expect(page.getByRole("heading", { name: "More practice" })).toBeVisible();
  const card = page.locator("#more-practice");
  await expect(card.getByRole("button", { name: "Word meanings" })).toBeVisible();
  await expect(card.getByRole("button", { name: "True or false" })).toBeVisible();
  await expect(card.getByRole("button", { name: "Fill in the blank" })).toBeVisible();
  // No timeline and no map for this chapter.
  await expect(card.getByRole("button", { name: "Map quiz" })).toHaveCount(0);
  await expect(card.getByRole("button", { name: "Dates and order" })).toHaveCount(0);

  await card.getByRole("button", { name: "Word meanings" }).click();
  await expect(page.getByText(/^Question 1 of \d+$/)).toBeVisible();
  const n = await page.locator(".quiz-head span").first().textContent();
  const total = Number(/of (\d+)/.exec(n)[1]);
  expect(total).toBeGreaterThanOrEqual(6);
  expect(total).toBeLessThanOrEqual(10);

  // Answer every question right, working the right option out from the chapter's own terms.
  for (let i = 0; i < total; i++) {
    const pick = await page.evaluate(
      ([c, s, ch]) => {
        const norm = (x) => String(x).replace(/\*\*/g, "").replace(/\s+/g, " ").trim();
        const terms = StudyData.content[c][s].chapters.find((x) => x.id === ch).terms;
        const q = norm(document.querySelector(".quiz-q").textContent);
        const opts = [...document.querySelectorAll(".options .option")].map((b) => ({ pick: Number(b.dataset.pick), text: norm(b.lastElementChild.textContent) }));
        let want = null;
        const m = /^What does (.+) mean\?/.exec(q);
        if (m) want = norm(terms.find((x) => norm(x.term) === m[1]).meaning);
        else {
          const m2 = /^Which word means: “(.+)”\?/.exec(q);
          want = norm(terms.find((x) => norm(x.meaning).replace(/[.;:,!?]+$/, "") === m2[1]).term);
        }
        return opts.find((o) => o.text === want).pick;
      },
      [10, "science", SCIENCE]
    );
    await page.locator(`.options .option[data-pick="${pick}"]`).click();
    await expect(page.locator(".feedback.good")).toContainText("Correct");
    await page.locator('[data-act="next"]').click();
  }
  await expect(page.locator(".result-top")).toBeVisible();
  await expect(page.locator(".ring .v")).toHaveText(`${total}/${total}`);

  // The answers went to the learning record as practice.
  const events = (current(await readStore(page)).learn || {}).events || [];
  const mine = events.filter((e) => e.type === "answer" && e.chapter === SCIENCE);
  expect(mine.length).toBeGreaterThan(0);
  expect(mine.every((e) => e.source === "practice")).toBe(true);

  // Back to Practise, and "Try again" gives a new round.
  await page.getByRole("link", { name: "Back to Practise" }).click();
  await expect(page.getByRole("heading", { name: "More practice" })).toBeVisible();
});

test("true or false is balanced and always has two options", async ({ page }) => {
  await seed(page, { name: "Asha", cls: 10 });
  await page.goto("/#/");
  const items = await derive(page, 10, "science", SCIENCE, { kinds: ["tf"], count: 10, seed: 3 });
  expect(items.length).toBeGreaterThanOrEqual(6);
  const yes = items.filter((i) => i.tf).length;
  expect(Math.abs(yes - (items.length - yes))).toBeLessThanOrEqual(1);
  for (const i of items) {
    expect(i.options).toEqual(["True", "False"]);
    expect(i.answer).toBe(i.tf ? 0 : 1);
  }
  // A true or false round plays in the quiz (2 options, True first).
  await page.goto(url(10, "science", SCIENCE, "/practise"));
  await page.locator("#more-practice").getByRole("button", { name: "True or false" }).click();
  await expect(page.locator(".options .option")).toHaveCount(2);
  await expect(page.locator(".options .option").first()).toContainText("True");
  await page.locator(".options .option").nth(1).click(); // False
  await expect(page.locator(".feedback")).toBeVisible();
});

test("a blank never shows its answer in the sentence", async ({ page }) => {
  await seed(page, { name: "Asha", cls: 10 });
  await page.goto("/#/");
  const found = await page.evaluate(async () => {
    const out = [];
    for (const [c, s] of [[10, "science"], [8, "english"], [9, "maths"], [7, "sst"]]) {
      await StudyData.loadSubjects(c, [s]);
      for (const ch of StudyData.chapters(c, s).slice(0, 12))
        for (let seed = 1; seed <= 3; seed++) for (const it of Derive.forChapter(c, s, ch, { kinds: ["blank"], count: 10, seed })) out.push({ q: it.q, answer: it.options[it.answer], options: it.options, explain: it.explain });
    }
    return out;
  });
  expect(found.length).toBeGreaterThan(40);
  for (const it of found) {
    expect(it.q.split("_____").length - 1, it.q).toBe(1);
    const lower = it.q.toLowerCase();
    // the answer and the wrong options are not in the sentence as whole words
    for (const o of it.options) expect(new RegExp(`(^|[^\\p{L}\\p{M}\\p{N}])${o.toLowerCase().replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}($|[^\\p{L}\\p{M}\\p{N}])`, "u").test(lower), `"${o}" is in: ${it.q}`).toBe(false);
    expect(new Set(it.options).size).toBe(4);
    // putting the answer back gives the notes' sentence
    expect(it.q.replace("_____", it.answer).toLowerCase()).toBe(it.explain.toLowerCase());
  }
});

test("when and first put BCE and CE events in the right order", async ({ page }) => {
  await seed(page, { name: "Asha", cls: 6, board: "pseb" });
  await page.goto("/#/");
  // Class 6 PSEB, the Mauryas: dates are BCE; the Guptas: dates are CE.
  for (const ch of ["mauryas-and-shungas", "gupta-empire"]) {
    const r = await page.evaluate(
      async (ch) => {
        await StudyData.loadSubjects(6, ["sstpb"]);
        await StudyData.loadTimelines();
        const ev = StudyData.timelinesFor(6, "sstpb", ch);
        const first = Derive.forChapter(6, "sstpb", ch, { kinds: ["first"], count: 6, seed: 4 });
        const when = Derive.forChapter(6, "sstpb", ch, { kinds: ["when"], count: 6, seed: 4 });
        return { ev, first, when };
      },
      ch
    );
    expect(r.first.length).toBeGreaterThan(0);
    expect(r.when.length).toBeGreaterThan(0);
    const year = (label) => r.ev.find((e) => e.label === label).year;
    for (const it of r.first) {
      const years = it.options.map(year);
      expect(year(it.options[it.answer])).toBe(Math.min(...years)); // earliest, whatever the sign
      expect(new Set(years).size).toBe(4);
    }
    const text = (y) => (y < 0 ? `${-y} BCE` : y < 1000 ? `${y} CE` : String(y));
    for (const it of r.when) {
      const label = r.ev.find((e) => it.q.includes(e.label)).label;
      expect(it.options[it.answer]).toBe(text(year(label)));
      expect(new Set(it.options).size).toBe(4);
    }
    if (ch === "mauryas-and-shungas") {
      expect(r.when.every((it) => it.options.every((o) => o.endsWith("BCE")))).toBe(true);
      // the earliest of any four BCE events is the one with the biggest BCE number
      for (const it of r.first) expect(year(it.options[it.answer])).toBeLessThan(0);
    }
  }
});

test("map questions have the right capitals, only in the chapters about India's states", async ({ page }) => {
  await seed(page, { name: "Asha", cls: 6, board: "pseb" });
  await page.goto("/#/");
  const r = await page.evaluate(async () => {
    await StudyData.loadSubjects(6, ["sstpb"]);
    const items = [];
    for (let seed = 1; seed <= 25; seed++) items.push(...Derive.forChapter(6, "sstpb", "our-india-in-the-world", { kinds: ["map"], count: 10, seed }));
    const other = Derive.forChapter(6, "sstpb", "earth-solar-system", { kinds: ["map"], count: 10 });
    return { items, other, chapters: [...Derive.MAP_CHAPTERS] };
  });
  const CAP = { "Andhra Pradesh": "Amaravati", Assam: "Dispur", Kerala: "Thiruvananthapuram", Maharashtra: "Mumbai", Telangana: "Hyderabad", "Tamil Nadu": "Chennai", Odisha: "Bhubaneswar", Ladakh: "Leh" };
  const seen = new Set();
  for (const it of r.items) {
    const m = /^What is the capital of (.+)\?$/.exec(it.q);
    const m2 = /^(.+) is the capital of which state or Union Territory\?$/.exec(it.q);
    if (m) {
      if (CAP[m[1]]) expect(it.options[it.answer]).toBe(CAP[m[1]]);
      if (CAP[m[1]]) seen.add(m[1]);
    } else {
      const st = Object.entries(CAP).find(([, c]) => c === m2[1]);
      if (st) expect(it.options[it.answer]).toBe(st[0]);
    }
    // a capital that two states share is never asked about
    expect(it.q).not.toMatch(/Punjab|Haryana|Chandigarh/);
    expect(it.options.join("|")).not.toMatch(/Chandigarh/);
  }
  expect(seen.size).toBeGreaterThan(3);
  expect(r.other).toEqual([]);
  expect(r.chapters).toContain("6/sstpb/our-india-in-the-world");
});

test("the Hindi chapter's question wording is in Hindi, the Punjabi one in Punjabi", async ({ page }) => {
  await seed(page, { name: "Asha", cls: 4 });
  await page.goto("/#/");
  const r = await page.evaluate(async () => {
    await StudyData.loadSubjects(4, ["hindi", "punjabi", "english"]);
    const first = (s, k) => {
      for (const ch of StudyData.chapters(4, s)) {
        const l = Derive.forChapter(4, s, ch, { kinds: [k], count: 2, seed: 2 });
        if (l.length) return l[0];
      }
      return null;
    };
    return { hi: first("hindi", "meaning"), hiTerm: first("hindi", "term"), hiTf: first("hindi", "tf"), pa: first("punjabi", "meaning"), paTf: first("punjabi", "tf"), en: first("english", "meaning") };
  });
  expect(r.hi.q).toMatch(/का क्या अर्थ है\?$/);
  expect(r.hiTerm.q).toMatch(/^इस अर्थ वाला शब्द कौन-सा है/);
  expect(r.hiTf.options).toEqual(["सही", "गलत"]);
  expect(r.pa.q).toMatch(/ਦਾ ਕੀ ਅਰਥ ਹੈ\?$/);
  expect(r.paTf.options).toEqual(["ਸਹੀ", "ਗ਼ਲਤ"]);
  expect(r.en.q).toMatch(/^What does .+ mean\?$/);
});

test("derived questions are not in mock tests, and Quick-fire can use them", async ({ page }) => {
  await seed(page, { name: "Asha", cls: 10 });
  await page.goto("/#/");
  const r = await page.evaluate(async () => {
    await StudyData.loadSubjects(10, ["science"]);
    const subj = StudyData.subject("science");
    const ch = StudyData.chapters(10, "science").find((c) => c.id === "life-processes");
    // what the mock test and the chapter mock draw from
    const mockPool = Views.ui.quizItems(10, subj, ch);
    const derived = Derive.forChapter(10, "science", ch, { kinds: ["meaning", "term", "tf", "blank"], count: 30, seed: 1 });
    const qs = new Set(mockPool.map((q) => q.q));
    return { mock: mockPool.length, any: derived.some((d) => d.derived && qs.has(d.q)), flagged: mockPool.some((q) => q.derived || q.kind), derived: derived.length };
  });
  expect(r.mock).toBeGreaterThan(0);
  expect(r.derived).toBeGreaterThan(10);
  expect(r.any).toBe(false);
  expect(r.flagged).toBe(false);

  // A mock test round never holds a derived question.
  await page.goto(url(10, "science", SCIENCE, "/master"));
  await page.locator('[data-act="mock"]').click();
  await expect(page.getByText(/^Question 1 of \d+$/)).toBeVisible();
  const sample = await page.locator(".quiz-q").first().textContent();
  expect(sample).not.toMatch(/^What does .+ mean\?$|^Which word means:/);

  // Quick-fire's pool has some.
  const qf = await page.evaluate(async () => {
    await StudyData.loadSubjects(10, ["science"]);
    await StudyData.loadPractice(10, "science");
    const subj = StudyData.subject("science");
    const ch = StudyData.chapters(10, "science").find((c) => c.id === "life-processes");
    const g = Games.get("quickfire");
    const data = g.build(10, subj, ch, 5);
    return { total: data.items.length, derived: data.items.filter((i) => i.derived).length, saved: Games.mcqs(10, subj, ch).length, avail: g.available(10, subj, ch) };
  });
  expect(qf.avail).toBe(true);
  expect(qf.derived).toBeGreaterThan(0);
  expect(qf.derived).toBeLessThanOrEqual(Math.max(qf.saved, 6));
});

test("the release lock hides derived questions for locked subjects, and an unknown chapter gives none", async ({ page }) => {
  await seed(page, { name: "Asha", cls: 4 });
  // The lock hides Hindi and Punjabi subjects: nothing is derived for them.
  await page.goto("/?lock=1#/");
  const r = await page.evaluate(async () => {
    await StudyData.loadSubjects(4, ["maths"]);
    await StudyData.loadFiles(["data/class4/hindi.js"]); // the lock keeps it out of the app's own lists
    const hindi = StudyData.content[4].hindi.chapters.find((c) => c.terms.length > 3);
    const maths = StudyData.content[4].maths.chapters.find((c) => Object.keys(Derive.kinds(4, "maths", c)).length);
    return { lockedOn: StudyData.locked("hindi"), locked: Derive.forChapter(4, "hindi", hindi, { kinds: ["meaning"] }), maths: maths ? Derive.kinds(4, "maths", maths) : {}, unknown: Derive.forChapter(4, "maths", "no-such-chapter", {}) };
  });
  expect(r.lockedOn).toBe(true);
  expect(r.locked).toEqual([]);
  expect(Object.keys(r.maths).length).toBeGreaterThan(0);
  expect(r.unknown).toEqual([]);
});

test("the same seed gives the same questions, another seed gives others", async ({ page }) => {
  await seed(page, { name: "Asha", cls: 10 });
  await page.goto("/#/");
  const r = await page.evaluate(async () => {
    await StudyData.loadSubjects(10, ["science"]);
    const f = (seed) => JSON.stringify(Derive.forChapter(10, "science", "life-processes", { count: 10, seed }));
    return { a: f(1), b: f(1), c: f(2), kinds: Derive.kinds(10, "science", "life-processes"), count: Derive.count(10, "science") };
  });
  expect(r.a).toBe(r.b);
  expect(r.a).not.toBe(r.c);
  expect(r.kinds.meaning).toBeGreaterThan(3);
  expect(r.count).toBeGreaterThan(200);
});

test("the card offers Dates and order once the timeline has loaded, and Map quiz in the chapters about India's states", async ({ page }) => {
  await seed(page, { name: "Asha", cls: 6, board: "pseb" });
  await page.goto(url(6, "sstpb", "mauryas-and-shungas", "/practise"));
  const card = page.locator("#more-practice");
  await expect(card.getByRole("button", { name: "Dates and order" })).toBeVisible();
  await expect(card.getByRole("button", { name: "Map quiz" })).toHaveCount(0);
  await card.getByRole("button", { name: "Dates and order" }).click();
  await expect(page.locator(".quiz-q")).toBeVisible();
  const first = await page.locator(".quiz-q").textContent();
  expect(first).toMatch(/year did this happen|Which happened first/);
  await expect(page.locator(".options .option")).toHaveCount(4);

  await page.goto(url(6, "sstpb", "our-india-in-the-world", "/practise"));
  await page.locator("#more-practice").getByRole("button", { name: "Map quiz" }).click();
  await expect(page.locator(".quiz-q")).toContainText(/capital/);
  await expect(page.getByText(/^Question 1 of 10$/)).toBeVisible();
});
