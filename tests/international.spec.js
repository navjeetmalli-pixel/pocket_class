// International — learn by topic (board "intl"): Maths, English and Science by topic for students outside the Indian boards.
// See js/international.js for the country and year mappings.
const { test, expect, readStore, current, KEY, openMenu } = require("./helpers");

const h1 = (page) => page.getByRole("heading", { level: 1 });
const cont = (page) => page.getByRole("button", { name: /^Continue/ });
const INDIA_ONLY = /Hindi|Punjabi|Social Science|\bSST\b|History|Civics|Political|CBSE|PSEB|NCERT|Sample papers|Formula sheets|हिंदी|ਪੰਜਾਬੀ/;

// First-time setup as an International student: ends on Today.
async function onboardIntl(page, { country, year, name = "Asha", goal = 20 }) {
  await page.goto("/");
  await page.getByRole("button", { name: /Start Learning/ }).click();
  await page.getByRole("button", { name: /I'm a Student/ }).click();
  await cont(page).click();
  await expect(h1(page)).toHaveText("Choose your board");
  await page.locator('.ob [data-board="intl"]').click();
  await cont(page).click();
  await expect(h1(page)).toHaveText("Where do you study?");
  await page.locator(`.ob [data-country="${country}"]`).click();
  await cont(page).click();
  await expect(h1(page)).toHaveText("Which year are you in?");
  await page.locator(`.ob [data-year="${year}"]`).click();
  await cont(page).click();
  await expect(page.locator('.ob[data-step="subjects"]')).toBeVisible();
  await cont(page).click();
  await page.locator("#ob-name").fill(name);
  await cont(page).click();
  await page.locator(`.ob [data-goal="${goal}"]`).click();
  await cont(page).click();
  await page.getByRole("button", { name: "Skip tour" }).click();
  await expect(h1(page)).toContainText("Hello");
}

// An International student with some progress, without going through setup.
async function seedIntl(page, { cls = 7, country = "au", year = "y7", extra = {} } = {}) {
  const now = Date.now();
  const data = {
    v: 2,
    theme: "light",
    lang: "en",
    current: "s-intl",
    students: [
      {
        id: "s-intl",
        profile: { name: "Asha", cls, board: "intl", country, year, currency: null, goal: 20 },
        paths: { maths: { numbers: { start: 0, checked: null, levels: { "numbers-3": { best: 90, n: 1, at: now - 5000, mastered: true } } } } },
        chapters: { "3/maths/numbers-and-counting": { done: true, best: 80, attempts: 1 } },
        ...extra,
      },
    ],
  };
  await page.addInitScript(({ KEY, data }) => { try { if (!localStorage.getItem(KEY)) localStorage.setItem(KEY, JSON.stringify(data)); } catch (e) {} }, { KEY, data });
}

test("Australian Year 7: setup, then Today has a plan of path levels and says Year 7", async ({ page }) => {
  await onboardIntl(page, { country: "au", year: "y7" });
  const me = current(await readStore(page)).profile;
  expect(me).toMatchObject({ board: "intl", country: "au", year: "y7", cls: 7, currency: "A$", goal: 20, subjects: null, learnLang: "en" });
  await expect(page.locator(".home-head .sub")).toContainText("Year 7");
  await expect(page.locator(".home-head .sub")).toContainText("Australia");
  const items = page.locator("#plan .plan-item");
  await expect(items.first()).toBeVisible();
  expect(await items.count()).toBeGreaterThanOrEqual(2); // a level in two subjects
  for (const href of await items.evaluateAll((els) => els.map((e) => e.getAttribute("href")))) expect(href).toMatch(/^#\/paths\/(maths|english|science)\/[\w-]+\/[\w-]+$/);
  // The level is the learner's own: Level 7 in the topic of the first subject.
  await expect(page.locator("#plan")).toContainText("Level 7 in");
  const text = await page.locator("#app").innerText();
  expect(text).not.toMatch(/Class \d/);
  expect(text).not.toMatch(INDIA_ONLY);
  // Start the first level: it opens a path level page.
  await items.first().click();
  await expect(page).toHaveURL(/#\/paths\//);
  await expect(page.locator(".hero")).toContainText("Level");
});

test("International setup: the board step has a third card, the lesson-language choice is gone, the interface language stays", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: /Start Learning/ }).click();
  await page.getByRole("button", { name: /I'm a Student/ }).click();
  await cont(page).click();
  await expect(page.locator(".ob [data-board]")).toHaveCount(3);
  await expect(page.locator('.ob [data-board="intl"]')).toContainText("International — learn by topic");
  await expect(page.locator('.ob [data-board="intl"]')).toContainText("Not tied to a national curriculum");
  await page.locator('.ob [data-board="intl"]').click();
  await cont(page).click();
  await expect(page.locator(".ob-dots")).toHaveAttribute("aria-label", "Step 4 of 9");
  await expect(page.locator(".ob [data-country] .ct")).toHaveText(["Australia", "Canada", "United Kingdom", "United States", "New Zealand", "Other"]);
  await expect(cont(page)).toBeDisabled();
  await page.locator('.ob [data-country="gb"]').click();
  await cont(page).click();
  // The United Kingdom: Reception and Years 1 to 13.
  await expect(page.locator(".ob [data-year]")).toHaveCount(14);
  await expect(page.locator(".ob [data-year]").first()).toHaveText("Reception");
  await expect(page.locator(".ob [data-year]").last()).toHaveText("Year 13");
  await expect(cont(page)).toBeDisabled();
  await page.locator('.ob [data-year="y13"]').click();
  await cont(page).click();
  await expect(page.locator(".ob [data-sub]")).toHaveText([/Mathematics/, /English/, /Science/]);
  await cont(page).click();
  await expect(h1(page)).toHaveText("About you");
  await expect(page.locator("[data-ll]")).toHaveCount(0); // lesson language: English only
  await expect(page.locator("[data-lang]")).toHaveCount(3); // the interface can still be English, Punjabi or Hindi
  const me = current(await readStore(page)).profile;
  expect(me).toMatchObject({ board: "intl", country: "gb", year: "y13", cls: 12, currency: "£" });
});

test("year names map to levels for every country", async ({ page }) => {
  await page.goto("/");
  const map = await page.evaluate(() => {
    const pick = (cid) => Object.fromEntries(International.country(cid).years.map((y) => [International.optName(y), y.level]));
    return { au: pick("au"), ca: pick("ca"), gb: pick("gb"), us: pick("us"), nz: pick("nz"), other: pick("other") };
  });
  expect(map.au).toMatchObject({ Foundation: 0, "Year 1": 1, "Year 7": 7, "Year 12": 12 });
  expect(map.ca).toMatchObject({ Kindergarten: 0, "Grade 1": 1, "Grade 12": 12 });
  expect(map.us).toMatchObject({ Kindergarten: 0, "Grade 7": 7 });
  expect(map.gb).toMatchObject({ Reception: 0, "Year 1": 0, "Year 2": 1, "Year 7": 6, "Year 13": 12 });
  expect(map.nz).toMatchObject({ "Year 1": 0, "Year 8": 7, "Year 13": 12 });
  expect(Object.keys(map.nz)).toHaveLength(13);
  expect(map.other).toMatchObject({ "Level 0": 0, "Level 12": 12 });
});

test("Learn lists Maths, English and Science topics only, with no Indian-board content on Learn, Play or Explore", async ({ page }) => {
  await seedIntl(page);
  await page.goto("/#/learn");
  await expect(page.locator(".intl-subject")).toHaveCount(3);
  await expect(page.locator(".intl-subject h2")).toHaveText(["Maths", "English", "Science"]);
  await expect(page.locator(".intl-subject").first().locator(".chapter-row").first()).toBeVisible();
  await expect(page.locator(".class-pill")).toContainText("Year 7");
  await expect(page.locator(".home-head .sub")).toContainText("from beginner to Year 12 level");
  await expect(page.locator(".home-head .sub")).toContainText("Maths, English and Science practice by topic");
  await expect(page.locator(".tool")).toHaveCount(0); // no mock tests, sample papers or formula sheets
  for (const route of ["/#/learn", "/#/games", "/#/explore"]) {
    await page.goto(route);
    await expect(page.locator(".shell-head h1")).toBeVisible();
    await page.waitForTimeout(400);
    const text = await page.locator("#app").innerText();
    expect(text, route).not.toMatch(INDIA_ONLY);
    expect(text, route).not.toMatch(/Class \d/);
    expect(text, route).not.toMatch(/[ऀ-੿]/); // no Hindi or Punjabi script
  }
  // Practice by topic offers the three subjects, and an old link to a subject page goes to its topics.
  await page.goto("/#/paths");
  await expect(page.locator(".subject-card .subject-name")).toHaveText(["Mathematics", "Science", "English"]);
  await page.goto("/#/subject/hindi");
  await expect(page).toHaveURL(/#\/learn$/);
});

test("Play shows games for the level being worked on, linked to the path level", async ({ page }) => {
  await seedIntl(page);
  await page.goto("/#/games");
  const tile = page.locator(".game-tile").first();
  await expect(tile).toBeVisible();
  expect(await tile.getAttribute("href")).toMatch(/^#\/play\/level\/(maths|english|science)\//);
  await tile.click();
  await expect(page).toHaveURL(/#\/play\/level\//);
});

test("wording says Year 7 (or the country's own name) wherever the year shows", async ({ page }) => {
  await seedIntl(page);
  await page.goto("/#/");
  await expect(page.locator(".home-head .sub")).toContainText("Year 7");
  await openMenu(page);
  await expect(page.locator("#menu-sheet .sheet-head")).toContainText("Year 7");
  await expect(page.locator("#menu-sheet")).not.toContainText(/Class \d|CBSE|PSEB/);
  await page.keyboard.press("Escape");
  await page.goto("/#/progress");
  await expect(page.locator(".shell-head .sub")).toContainText("Year 7");
  await page.goto("/#/profile");
  await expect(page.locator(".card.row").first()).toContainText("Year 7 · Australia");
});

test("a maths money question uses the learner's currency (A$ for Australia)", async ({ page }) => {
  await seedIntl(page, { cls: 8, year: "y8" });
  await page.goto("/#/");
  const made = await page.evaluate(() => Gen.fromNames(["money", "change", "unitary", "discount", "simpleInt"], 5, 7).map((q) => [q.q, q.options[q.answer], ...q.steps].join(" ")));
  for (const m of made) {
    expect(m).toContain("A$");
    expect(m).not.toContain("₹");
  }
  // In a lesson: a level made of money generators shows A$ in its practice round.
  await page.goto("/#/paths/maths/fractions/fractions-8");
  await page.locator("[data-act=practice]").click();
  const seen = [];
  for (let i = 0; i < 10; i++) {
    seen.push(await page.locator(".quiz-q").innerText());
    await page.locator(".options .option").first().click();
    await page.locator('[data-act="next"]').click().catch(() => {});
  }
  expect(seen.some((q) => q.includes("A$"))).toBe(true);
  // Other countries and the Indian boards.
  const sym = await page.evaluate(() => {
    const out = {};
    for (const [country, cur] of [["gb", "£"], ["ca", "C$"], ["us", "$"], ["nz", "NZ$"]]) {
      Store.setProfile({ country, currency: International.country(country).cur });
      out[country] = Money.fmt(1250.5);
    }
    Store.setProfile({ board: "cbse", cls: 8 });
    out.cbse = Money.fmt(1250.5);
    return out;
  });
  expect(sym).toEqual({ gb: "£1,250.5", ca: "C$1,250.5", us: "$1,250.5", nz: "NZ$1,250.5", cbse: "₹1,250.5" });
});

test("Canadian Kindergarten (level 0) works: setup, Today, Learn and the level pages", async ({ page }) => {
  await onboardIntl(page, { country: "ca", year: "k", name: "Mia" });
  const me = current(await readStore(page)).profile;
  expect(me).toMatchObject({ board: "intl", country: "ca", year: "k", cls: 0, currency: "C$" });
  await expect(page.locator(".home-head .sub")).toContainText("Kindergarten");
  await expect(page.locator("#plan .plan-item").first()).toBeVisible();
  await expect(page.locator("#plan")).toContainText("Level 0 in");
  await page.goto("/#/learn");
  await expect(page.locator(".class-pill")).toContainText("Kindergarten");
  await expect(page.locator(".intl-subject")).toHaveCount(3);
  await page.goto("/#/");
  await page.locator("#plan .plan-item").first().click();
  await expect(page.locator(".hero")).toContainText("Level 0");
  await page.locator("[data-act=practice]").click();
  await expect(page.locator(".quiz-q")).toBeVisible();
  await page.goto("/#/progress");
  await expect(page.locator(".shell-head .sub")).toContainText("Kindergarten");
});

test("Profile: change country, year, currency and subjects", async ({ page }) => {
  await seedIntl(page);
  await page.goto("/#/profile");
  await expect(page.locator("[data-year]")).toHaveCount(13); // Foundation, Year 1 to 12
  await page.locator('[data-country="gb"]').click();
  let me = current(await readStore(page)).profile;
  expect(me).toMatchObject({ country: "gb", cls: 7, currency: "£", year: "y8" }); // level 7 is Year 8 in the UK
  await expect(page.locator("[data-year]")).toHaveCount(14);
  await page.locator('[data-year="y13"]').click();
  expect(current(await readStore(page)).profile).toMatchObject({ cls: 12, year: "y13" });
  await page.locator('[data-cur="€"]').click();
  expect(current(await readStore(page)).profile.currency).toBe("€");
  await page.locator('[data-sub="science"]').click(); // untick Science
  me = current(await readStore(page)).profile;
  expect(me.subjects.sort()).toEqual(["english", "maths"]);
  await expect(page.locator("#app")).toContainText("Year 13");
  await page.goto("/#/learn");
  await expect(page.locator(".intl-subject h2")).toHaveText(["Maths", "English"]);
});

test("switching to CBSE and back keeps all progress", async ({ page }) => {
  await seedIntl(page);
  await page.goto("/#/profile");
  await page.locator('[data-board="cbse"]').click(); // the confirm is accepted by the fixture
  await expect.poll(async () => current(await readStore(page)).profile.board).toBe("cbse");
  let st = current(await readStore(page));
  expect(st.profile.cls).toBe(7);
  expect(st.paths.maths.numbers.levels["numbers-3"].mastered).toBe(true);
  expect(st.chapters["3/maths/numbers-and-counting"].done).toBe(true);
  await page.goto("/#/");
  await expect(h1(page)).toContainText("Namaste");
  await expect(page.locator(".home-head .sub")).toContainText("Class 7");
  await page.goto("/#/learn");
  await expect(page.locator(".learn-seg")).toBeVisible(); // the Indian Class-wise / Subject-wise Learn page
  await expect(page.locator(".subject-card .subject-name")).toContainText(["Hindi"]);
  // Back to International: the country and year come back, progress still there.
  await page.goto("/#/profile");
  await page.locator('[data-board="intl"]').click();
  await expect.poll(async () => current(await readStore(page)).profile.board).toBe("intl");
  st = current(await readStore(page));
  expect(st.profile).toMatchObject({ cls: 7, country: "au", year: "y7" });
  expect(st.paths.maths.numbers.levels["numbers-3"].mastered).toBe(true);
  await page.goto("/#/learn");
  await expect(page.locator(".intl-subject")).toHaveCount(3);
  await expect(page.locator(".intl-subject").first()).toContainText("1 of 73 levels mastered");
});

test("switching an International level-0 learner to CBSE starts at Class 1", async ({ page }) => {
  await seedIntl(page, { cls: 0, country: "ca", year: "k" });
  await page.goto("/#/profile");
  await page.locator('[data-board="pseb"]').click();
  await expect.poll(async () => current(await readStore(page)).profile.board).toBe("pseb");
  expect(current(await readStore(page)).profile.cls).toBe(1);
});

test("a completed path level counts in Today's plan and Progress", async ({ page }) => {
  await seedIntl(page);
  await page.goto("/#/progress");
  await expect(page.locator(".subj-progress")).toContainText("Maths");
  await expect(page.locator(".subj-progress")).toContainText("1 of 73 levels");
  await expect(page.locator("#skill-bands")).toHaveCount(0);
});

test("International layout works at phone and desktop widths, in light and dark", async ({ page }) => {
  await seedIntl(page);
  for (const scheme of ["light", "dark"]) {
    await page.emulateMedia({ colorScheme: scheme });
    for (const width of [375, 1100]) {
      await page.setViewportSize({ width, height: 900 });
      for (const route of ["/#/", "/#/learn", "/#/games", "/#/explore", "/#/profile"]) {
        await page.goto(route);
        await expect(page.locator("#app h1, #app .topbar-title").first()).toBeVisible();
        const wide = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 1);
        expect(wide, `${route} at ${width} (${scheme}) scrolls sideways`).toBe(false);
      }
    }
  }
});

// Saved India-only money questions are not shown to international learners; Indian students still see them.
const RUPEE = /₹|\brupees?\b|\bRs\b|\bpaise\b/i;

test("an Australian Year 1 student's money level shows no rupees across 30 drawn questions; an Indian CBSE student still sees them", async ({ page }) => {
  await seedIntl(page, { cls: 1, year: "y1", extra: {} });
  await page.goto("/#/paths/maths/measurement/measurement-1");
  const seen = [];
  for (let round = 0; round < 3; round++) {
    if (round === 0) await page.locator("[data-act=practice]").click();
    else await page.getByRole("button", { name: "Try again" }).click();
    for (let i = 0; i < 10; i++) {
      const q = page.locator(".quiz-q");
      if (!(await q.count())) break;
      seen.push((await q.innerText()) + " " + (await page.locator(".options").innerText()));
      await page.locator(".options .option").first().click();
      await page.locator('[data-act="next"]').click().catch(() => {});
    }
  }
  expect(seen.length).toBeGreaterThanOrEqual(15);
  for (const s of seen) expect(s).not.toMatch(RUPEE);
  // The saved bank of the chapter the level opens has rupee questions; the learner's draw leaves them out.
  const au = await page.evaluate(() => {
    const subj = StudyData.subject("maths");
    const ch = StudyData.chapters(1, "maths").find((c) => c.id === "money-coins-and-notes");
    const drawn = Views.ui.quizItems(1, subj, ch);
    return { raw: JSON.stringify(ch.quiz).match(/₹|rupee|Rs/gi) !== null, left: drawn.filter((q) => /₹|rupee|\bRs\b|paise/i.test(JSON.stringify(q))).length };
  });
  expect(au.left).toBe(0);
  // Same chapter for an Indian CBSE student.
  await page.evaluate(() => Store.setProfile({ board: "cbse", cls: 1 }));
  const inCbse = await page.evaluate(() => {
    const subj = StudyData.subject("maths");
    const ch = StudyData.chapters(1, "maths").find((c) => c.id === "money-coins-and-notes");
    return Views.ui.quizItems(1, subj, ch).filter((q) => /₹|rupee|\bRs\b|paise/i.test(JSON.stringify(q))).length;
  });
  expect(au.raw).toBe(true);
  expect(inCbse).toBeGreaterThan(0);
});
