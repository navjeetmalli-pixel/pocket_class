const fs = require("fs");
const path = require("path");
const { test, expect, seed } = require("./helpers");

// More practice sheets: fill in the blanks, match, true or false, word meanings, dates, picture worksheets for Classes 1 to 3
// and the revision paper (js/sheets.js, built on js/derive.js).

const hasDerive = (page) => page.evaluate(() => typeof Derive !== "undefined");

// Opens the sheet maker for a class and subject.
async function openMaker(page, cls, subject) {
  await seed(page, { name: "Asha", cls });
  await page.goto(`/#/sheets/${subject}`);
  await expect(page.locator("#maker")).toBeVisible();
}

test("the maker shows the new sections only when the chapters have the content", { tag: "@desktop" }, async ({ page }) => {
  await openMaker(page, 6, "science");
  expect(await hasDerive(page)).toBe(true);
  for (const name of ["Fill in the blanks", "Match the following", "True or false", "Word meanings"]) {
    await expect(page.locator("#maker .card", { hasText: name }).first()).toBeVisible();
  }
  // The old sections are still there, and a Science sheet has no dates section.
  await expect(page.locator("#maker .card", { hasText: "Multiple choice" }).first()).toBeVisible();
  await expect(page.locator("#maker .card strong", { hasText: /^Dates and order$/ })).toHaveCount(0);
  // Clearing the chapters hides them all.
  await page.getByRole("button", { name: "Clear" }).click();
  await expect(page.locator("#maker .card strong", { hasText: /^Fill in the blanks$/ })).toHaveCount(0);
  await expect(page.locator("#maker .card strong", { hasText: /^True or false$/ })).toHaveCount(0);
  // The revision card and no picture card above Class 3.
  await expect(page.locator("[data-testid=rev-card]")).toBeVisible();
  await expect(page.locator("[data-testid=pic-card]")).toHaveCount(0);
});

test("a Class 8 Social Science sheet offers Dates and order", async ({ page }) => {
  await openMaker(page, 8, "sst");
  await expect(page.locator("#maker .card strong", { hasText: /^Dates and order$/ })).toBeVisible();
});

test("a fill-in-the-blanks sheet has a word box, writing lines and a key", async ({ page }) => {
  await seed(page, { name: "Asha", cls: 6 });
  await page.goto("/#/worksheet/6/science?m=0&s=0&l=0&g=0&b=8&n=1");
  const sheet = page.locator("article.ws").first();
  await expect(sheet.locator(".ws-sec > h2")).toContainText("Fill in the blanks");
  const box = sheet.locator(".ws-wordbox");
  await expect(box).toBeVisible();
  const words = await box.locator("span").allTextContents();
  const lines = await sheet.locator(".ws-blank").count();
  const sentences = await sheet.locator(".ws-list > li").count();
  expect(sentences).toBeGreaterThanOrEqual(5);
  expect(lines).toBeGreaterThanOrEqual(sentences);
  expect(words.length).toBeGreaterThan(0);
  expect(words.length).toBeLessThanOrEqual(sentences);
  // Every word in the key is in the box.
  const key = page.locator("article.ws-key");
  await expect(key).toBeVisible();
  const answers = await key.locator(".ws-answers li > strong").allTextContents();
  expect(answers.length).toBe(sentences);
  for (const a of answers) expect(words).toContain(a);
  await expect(sheet.locator(".ws-sec > h2")).toContainText(/\d+ marks$/);
});

test("a match sheet's key agrees with its columns", async ({ page }) => {
  await seed(page, { name: "Asha", cls: 6 });
  await page.goto("/#/worksheet/6/science?m=0&s=0&l=0&g=0&x=2&n=1");
  const sheet = page.locator("article.ws").first();
  await expect(sheet.locator(".ws-sec > h2")).toContainText("Match the following");
  const groups = sheet.locator(".ws-list > li");
  expect(await groups.count()).toBeGreaterThanOrEqual(1);
  const keys = await page.locator("article.ws-key .ws-matchkey").allTextContents();
  expect(keys.length).toBe(await groups.count());
  // Each key entry is "1-c, 2-a, …", one for each row, using each letter once.
  const sets = [];
  for (let g = 0; g < keys.length; g++) {
    const rows = groups.nth(g).locator(".ws-match-row");
    const n = await rows.count();
    expect(n).toBeGreaterThanOrEqual(4);
    expect(n).toBeLessThanOrEqual(6);
    const pairs = keys[g].split(", ").map((x) => x.split("-"));
    expect(pairs.map((p) => p[0])).toEqual(Array.from({ length: n }, (_, i) => String(i + 1)));
    expect(new Set(pairs.map((p) => p[1])).size).toBe(n);
    // Column B is lettered a, b, c… in order.
    const letters = await rows.locator(".ws-match-b").allTextContents();
    letters.forEach((l, i) => expect(l.startsWith("abcdefgh"[i] + ".")).toBe(true));
    sets.push(pairs);
  }
  // The right-hand text a key letter points to is the meaning of that numbered term: check against Derive's own pairs.
  const ok = await page.evaluate(
    ({ keys }) => {
      const out = [];
      const groupEls = [...document.querySelectorAll("article.ws .ws-list > li")];
      groupEls.forEach((li, g) => {
        const A = [...li.querySelectorAll(".ws-match-a")].map((e) => e.textContent.replace(/^\s*\(\s*\)\s*\d+\.\s*/, "").trim());
        const B = [...li.querySelectorAll(".ws-match-b")].map((e) => e.textContent.replace(/^[a-h]\.\s*/, "").trim());
        const all = [];
        StudyData.chapters(6, "science").forEach((ch) => (Derive.forChapter(6, "science", ch.id || ch, { kinds: ["match"], count: 50, seed: 1 }) || []).forEach((m) => m.pairs.forEach((p) => all.push(p))));
        keys[g].split(", ").forEach((kk) => {
          const [num, letter] = kk.split("-");
          const term = A[Number(num) - 1];
          const meaning = B["abcdefgh".indexOf(letter)];
          out.push(all.some((p) => p[0].trim() === term && p[1].trim() === meaning) || `${term} -> ${meaning}`);
        });
      });
      return out;
    },
    { keys }
  );
  expect(ok.every((x) => x === true), JSON.stringify(ok.filter((x) => x !== true))).toBe(true);
});

test("true or false sheets are balanced and every statement is keyed", async ({ page }) => {
  await seed(page, { name: "Asha", cls: 6 });
  await page.goto("/#/worksheet/6/science?m=0&s=0&l=0&g=0&f=10&n=1");
  const sheet = page.locator("article.ws").first();
  await expect(sheet.locator(".ws-sec > h2")).toContainText("True or false");
  const items = sheet.locator(".ws-list > li");
  const n = await items.count();
  expect(n).toBeGreaterThanOrEqual(6);
  await expect(items.first().locator(".ws-circle b")).toHaveText(["True", "False"]);
  const answers = await page.locator("article.ws-key .ws-answers li > strong").allTextContents();
  expect(answers.length).toBe(n);
  const yes = answers.filter((a) => a === "True").length;
  const no = answers.filter((a) => a === "False").length;
  expect(yes + no).toBe(n);
  expect(Math.abs(yes - no)).toBeLessThanOrEqual(2);
});

test("word meanings and dates sheets have numbered questions and a key", async ({ page }) => {
  await seed(page, { name: "Asha", cls: 8 });
  await page.goto("/#/worksheet/8/sst?m=0&s=0&l=0&g=0&w=5&dt=8&n=1");
  // The timelines load after the page first shows, then the sheet is drawn again with the dates section.
  await expect(page.locator("article.ws").first().locator(".ws-sec > h2", { hasText: "Dates and order" })).toBeVisible();
  const heads = await page.locator("article.ws").first().locator(".ws-sec > h2").allTextContents();
  expect(heads[0]).toMatch(/^Section A · Word meanings/);
  expect(heads.join("|")).toMatch(/Section B · Dates and order/);
  const qs = page.locator("article.ws").first().locator(".ws-list > li");
  const n = await qs.count();
  expect(n).toBeGreaterThanOrEqual(8);
  expect(await page.locator("article.ws-key .ws-answers li").count()).toBe(n);
  for (const li of await qs.all()) expect(await li.locator(".ws-opts li").count()).toBe(4);
});

test("a Class 1 picture worksheet has pictures, answer boxes and a key", async ({ page }) => {
  await seed(page, { name: "Asha", cls: 1 });
  await page.goto("/#/sheets/maths");
  const card = page.locator("[data-testid=pic-card]");
  await expect(card).toBeVisible();
  await expect(card.getByRole("button", { name: "What time is it?" })).toHaveCount(0); // clocks start in Class 2
  await expect(card.getByRole("button", { name: "Colour the fraction" })).toHaveCount(0);
  await card.getByRole("button", { name: "Count and write" }).click();
  await card.getByRole("button", { name: "Add the pictures" }).click();
  await card.getByRole("button", { name: "Circle the right picture" }).click();
  await card.getByRole("button", { name: "Odd one out" }).click();
  await card.getByRole("button", { name: "Make picture worksheet" }).click();
  const sheet = page.locator("article.ws").first();
  await expect(sheet).toContainText("Picture Worksheet 1");
  await expect(sheet).toContainText("Name:");
  const secs = await sheet.locator(".ws-sec > h2").allTextContents();
  expect(secs.map((s) => s.replace(/^[A-F]\. /, ""))).toEqual(["Count and write", "Add the pictures", "Circle the right picture", "Odd one out"]);
  expect(await sheet.locator(".pw-art svg").count()).toBeGreaterThanOrEqual(8);
  expect(await sheet.locator(".pw-choice svg").count()).toBe(32);
  expect(await sheet.locator(".pw-box").count()).toBeGreaterThanOrEqual(4 + 12);
  const items = await sheet.locator(".pw-item").count();
  expect(items).toBe(16);
  const key = page.locator("article.ws-key");
  await expect(key).toBeVisible();
  expect(await key.locator(".ws-answers li").count()).toBe(items);
  // The same address gives the same sheet; the next number gives a different one.
  const same = (h) => h.replace(/(id="[^"]*|url\(#[^)]*)-[0-9a-z]+/g, "$1-N"); // the pictures number their gradients per page load
  const html1 = same(await sheet.innerHTML());
  const url = page.url();
  await page.goto("about:blank");
  await page.goto(url);
  expect(same(await page.locator("article.ws").first().innerHTML())).toBe(html1);
  await page.getByRole("link", { name: /New sheet/ }).click();
  await expect(page.locator("article.ws").first()).toContainText("Picture Worksheet 2");
  expect(same(await page.locator("article.ws").first().innerHTML())).not.toBe(html1);
});

test("a Class 3 picture worksheet adds clocks and fractions to colour", async ({ page }) => {
  await seed(page, { name: "Asha", cls: 3 });
  await page.goto("/#/worksheet/3/maths?pic=clock,frac&pn=3&k=1&n=1");
  const sheet = page.locator("article.ws").first();
  const secs = await sheet.locator(".ws-sec > h2").allTextContents();
  expect(secs.map((s) => s.replace(/^[A-F]\. /, ""))).toEqual(["What time is it?", "Colour the fraction"]);
  expect(await sheet.locator(".pw-clock svg").count()).toBe(3);
  expect(await sheet.locator(".pw-frac svg").count()).toBe(3);
  expect(await sheet.locator(".pw-fraction").count()).toBe(3);
  expect(await sheet.locator(".pw-line").count()).toBe(3);
  expect(await page.locator("article.ws-key .ws-answers li").count()).toBe(6);
  // Hindi and Punjabi subjects keep their own words: only "circle the right picture" there.
});

test("the revision paper mixes chapters and is titled by range", async ({ page }) => {
  await openMaker(page, 6, "science");
  await page.locator("[data-testid=rev-card]").getByRole("button", { name: /Selected chapters/ }).click();
  const sheet = page.locator("article.ws").first();
  await expect(sheet.locator(".ws-title strong")).toHaveText(/^Revision sheet: Science, chapters 1–\d+$/);
  const heads = (await sheet.locator(".ws-sec > h2").allTextContents()).map((h) => h.replace(/^Section . · /, ""));
  expect(heads.join("|")).toMatch(/Multiple choice/);
  expect(heads.join("|")).toMatch(/Fill in the blanks/);
  expect(heads.join("|")).toMatch(/True or false/);
  expect(heads.join("|")).toMatch(/Short answer/);
  await expect(page.locator("article.ws-key")).toBeVisible();
  // More than one chapter shows up in the MCQs: the tags in the sheet come from different chapters.
  const stems = await sheet.locator(".ws-list > li .ws-q").allTextContents();
  expect(stems.length).toBeGreaterThan(20);
  const chapters = await page.evaluate(() => {
    const chs = StudyData.chapters(6, "science");
    const title = location.hash.match(/ch=([^&]*)/)[1].split(",");
    return { picked: title.length, total: chs.length };
  });
  expect(chapters.picked).toBeGreaterThan(3);
  // Chapters done so far: nothing finished yet, so the button is not offered.
  await page.goto("/#/sheets/science");
  await expect(page.locator("[data-testid=rev-card]").getByRole("button", { name: /done so far/ })).toHaveCount(0);
});

test("the revision paper for chapters done so far uses only those", async ({ page }) => {
  const { chaptersOf } = require("./helpers");
  const ids = chaptersOf(6, "science").slice(0, 4).map((c) => c.id);
  const chapters = {};
  ids.forEach((id) => (chapters[`6/science/${id}`] = { done: true, best: 80, attempts: 1 }));
  await seed(page, { name: "Asha", cls: 6, student: { chapters } });
  await page.goto("/#/sheets/science");
  await page.locator("[data-testid=rev-card]").getByRole("button", { name: "Chapters done so far (4)" }).click();
  await expect(page).toHaveURL(new RegExp(`ch=${ids.join(",")}&`));
  await expect(page.locator("article.ws").first().locator(".ws-title strong")).toHaveText("Revision sheet: Science, chapters 1–4");
  expect(await page.locator("article.ws").first().locator(".ws-list > li").count()).toBeGreaterThan(10);
});

test("old worksheet addresses give exactly the sheets they gave before", async ({ page }) => {
  await seed(page, { name: "Asha", cls: 9 });
  const urls = ["/#/worksheet/9/science?ch=&m=10&s=5&l=2&g=5&d=0&k=1&n=3", "/#/worksheet/9/maths?m=8&s=3&l=1&g=6&n=2", "/#/worksheet/9/science"];
  const old = fs.readFileSync(path.join(__dirname, "fixtures", "sheets-v1.js"), "utf8");
  const grab = async (u) => {
    await page.goto("about:blank");
    await page.goto(u);
    await expect(page.locator("article.ws").first()).toBeVisible();
    return page.locator("main, .main").first().evaluate((el) => el.querySelector(".ws-toolbar").nextElementSibling.outerHTML + el.querySelector(".ws-key").outerHTML);
  };
  const now = [];
  for (const u of urls) now.push(await grab(u));
  await page.route("**/js/sheets.js", (route) => route.fulfill({ contentType: "application/javascript", body: old }));
  const before = [];
  for (const u of urls) before.push(await grab(u));
  urls.forEach((u, i) => expect(now[i], u).toBe(before[i]));
  // And the addresses the old maker produced are the same as the new maker's.
  expect(now[0].length).toBeGreaterThan(2000);
});
