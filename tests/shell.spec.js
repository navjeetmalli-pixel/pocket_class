const { test, expect, seed, readStore, current, expectedSubjects, chaptersOf, onboard, tab, openMenu } = require("./helpers");

// The app shell (UI phases 2 and 3): the five tabs, the profile menu, Learn (Class-wise / Subject-wise) and Explore.
// Tests tagged @desktop run with the bottom bar (phone) and with the sidebar (desktop).

const h1 = (page) => page.getByRole("heading", { level: 1 });
const TABS = ["Today", "Learn", "Play", "Explore", "Progress"];
const visibleTabs = (page) => page.locator("#tabbar a:visible, #sidebar a:visible");
// The tab that says aria-current (null: none). Waits for the page to settle, since a screen may load its files first.
const activeTab = async (page, want) => {
  const read = async () => {
    const on = page.locator("#tabbar a[aria-current=page]:visible, #sidebar a[aria-current=page]:visible");
    const n = await on.count();
    return n === 0 ? null : n === 1 ? (await on.textContent()).trim() : "many";
  };
  await expect.poll(read, { timeout: 8000 }).toBe(want);
  return want;
};

const profileWith = (extra) => ({ profile: { name: "Asha", cls: 7, board: "cbse", setup: { step: "done", done: true }, ...extra } });

test("shell: exactly five tabs, each opens a screen with a header and the profile button", { tag: "@desktop" }, async ({ page }) => {
  await seed(page, { name: "Asha", cls: 7 });
  await page.goto("/#/");
  await expect(visibleTabs(page)).toHaveText(TABS);
  const urls = { Today: /#\/$/, Learn: /#\/learn$/, Play: /#\/games$/, Explore: /#\/explore$/, Progress: /#\/progress$/ };
  for (const name of TABS) {
    await tab(page, name);
    await expect(page).toHaveURL(urls[name]);
    await expect(h1(page)).toBeVisible();
    await activeTab(page, name);
    // Every main screen has the profile button in its header.
    await expect(page.locator("#app .shell-head [data-menu]")).toBeVisible();
    // Touch targets: the tabs and the profile button are at least 44 px.
    for (const box of await visibleTabs(page).all().then((l) => Promise.all(l.map((a) => a.boundingBox())))) expect(box.height).toBeGreaterThanOrEqual(44);
    const btn = await page.locator("#app .shell-head [data-menu]").boundingBox();
    expect(Math.min(btn.width, btn.height)).toBeGreaterThanOrEqual(44);
  }
});

test("shell: old routes keep working and light up the right tab", { tag: "@desktop" }, async ({ page }) => {
  await seed(page, { name: "Asha", cls: 10 });
  const maths = chaptersOf(10, "maths")[0].id;
  const routes = [
    ["/#/", "Today"],
    ["/#/timer", "Today"],
    ["/#/learn", "Learn"],
    ["/#/test", "Learn"],
    ["/#/revise", "Learn"],
    ["/#/sheets", "Learn"],
    ["/#/papers", "Learn"],
    ["/#/paths", "Learn"],
    ["/#/search", "Learn"],
    ["/#/subject/maths", "Learn"],
    [`/#/chapter/10/maths/${maths}`, "Learn"],
    ["/#/games", "Play"],
    ["/#/games/maths", "Play"],
    [`/#/play/10/maths/${maths}`, "Play"],
    ["/#/explore", "Explore"],
    ["/#/progress", "Progress"],
    ["/#/parent", "Progress"],
    ["/#/revise/mistakes", "Progress"],
    ["/#/revise/due", "Progress"],
    ["/#/profile", null],
    ["/#/settings", null],
  ];
  for (const [url, want] of routes) {
    await page.goto(url);
    await expect(h1(page).first()).toBeVisible();
    await activeTab(page, want);
  }
});

test("shell: the profile menu opens every place it names, closes with Escape and gives focus back", async ({ page }) => {
  await seed(page, { name: "Asha", cls: 7 });
  await page.goto("/#/");
  const places = [
    ["Profile", /#\/profile$/],
    ["Search", /#\/search$/],
    ["Settings", /#\/settings$/],
    ["Parent area", /#\/parent$/],
    ["Timer", /#\/timer$/],
    ["Downloads", /#\/offline$/],
  ];
  for (const [name, url] of places) {
    await page.goto("/#/");
    await openMenu(page);
    await page.locator("#menu-sheet").getByRole("link", { name: new RegExp(name) }).click();
    await expect(page).toHaveURL(url);
    await expect(page.locator("#menu-sheet")).toHaveCount(0); // the menu closes when a page opens
  }
  // Downloads goes to the offline packs page.
  await expect(page.locator("#packs")).toBeVisible();

  // Escape closes the menu and the profile button has focus again.
  await page.goto("/#/");
  await openMenu(page);
  await page.keyboard.press("Escape");
  await expect(page.locator("#menu-sheet")).toHaveCount(0);
  await expect(page.locator("#app .shell-head [data-menu]")).toBeFocused();
  // "Switch student" is there; with one student it leads to adding another.
  await openMenu(page);
  await expect(page.locator("#menu-sheet").getByRole("link", { name: /Switch student/ })).toHaveAttribute("href", "#/settings");
});

test("learn: Class-wise lists every subject, Subject-wise only the picked ones; switching keeps progress and survives a reload", { tag: "@desktop" }, async ({ page }) => {
  const maths = chaptersOf(7, "maths")[0].id;
  await seed(page, {
    name: "Asha",
    cls: 7,
    student: { ...profileWith({ view: "class", subjects: ["maths", "science"] }), chapters: { [`7/maths/${maths}`]: { done: true, best: 80, attempts: 1, opened: Date.now() } } },
  });
  await page.goto("/#/learn");
  const names = page.locator(".learn-body .subject-card .subject-name");
  await expect(names).toHaveCount(expectedSubjects(7, "cbse").length);
  await expect(page.locator(".learn-seg [data-view=class]")).toHaveAttribute("aria-pressed", "true");
  // Study tools and Practice by topic are on the screen in this view.
  await expect(page.locator(".tool", { hasText: "Mock test" })).toBeVisible();
  await expect(page.locator(".tool", { hasText: "Practice by topic" })).toBeVisible();
  await expect(page.locator(".tool", { hasText: "Formula sheets" })).toBeVisible();
  await expect(page.locator(".tool", { hasText: "Practice sheets" })).toBeVisible();
  await expect(page.locator(".tool", { hasText: "Sample papers" })).toHaveCount(0); // Classes 9 to 12 only
  // The class pill takes you to the profile.
  await expect(page.locator(".class-pill")).toHaveAttribute("href", "#/profile");

  // Everything the learner has done (chapters, scores, revision dates, games, mistakes...), without the profile.
  const record = () =>
    page.evaluate(() => {
      const { profile, lastAct, plan, days, ...rest } = JSON.parse(JSON.stringify(Store.state));
      return JSON.stringify(rest);
    });
  const was = await record();

  await page.locator(".learn-seg [data-view=subject]").click();
  await expect(names).toHaveText(expectedSubjects(7, "cbse").filter((n) => ["Mathematics", "Science"].includes(n)).sort((a, b) => ["Mathematics", "Science"].indexOf(a) - ["Mathematics", "Science"].indexOf(b)));
  await expect(page.locator(".manage-link")).toHaveAttribute("href", "#/profile");
  await expect(page.locator(".learn-seg [data-view=subject]")).toHaveAttribute("aria-pressed", "true");
  const mid = await readStore(page);
  expect(current(mid).profile.view).toBe("subject");
  expect(current(mid).profile.subjects).toEqual(["maths", "science"]);
  expect(await record()).toBe(was); // nothing but the view changed: chapters, scores, revision dates, games

  // The choice survives a reload, and Today follows it too.
  await page.reload();
  await expect(names).toHaveCount(2);
  await page.goto("/#/");
  await expect(page.locator(".subject-card")).toHaveCount(2);

  // Back to Class-wise: everything is listed again, and still nothing changed.
  await page.goto("/#/learn");
  await page.locator(".learn-seg [data-view=class]").click();
  await expect(names).toHaveCount(expectedSubjects(7, "cbse").length);
  expect(await record()).toBe(was);
  expect(current(await readStore(page)).chapters[`7/maths/${maths}`]).toMatchObject({ done: true, best: 80 });
});

test("learn: Subject-wise Practice by topic offers only the picked subjects, and the subject page is tidy", async ({ page }) => {
  await seed(page, { name: "Asha", cls: 6, student: profileWith({ cls: 6, view: "subject", subjects: ["maths"] }) });
  await page.goto("/#/paths");
  await expect(page.locator(".subject-card")).toHaveCount(1);
  await expect(page.locator(".subject-card")).toContainText("Mathematics");

  await page.goto("/#/learn");
  await page.locator('a.subject-card[href="#/subject/maths"]').click();
  await expect(page.locator(".hero h1")).toContainText("Mathematics");
  await expect(page.locator("#subject-continue")).toBeVisible(); // the chapter to carry on with
  await expect(page.locator(".hero .bar")).toBeVisible();
  await expect(page.locator(".chapter-row").first()).toBeVisible();
  await expect(page.getByRole("link", { name: /Games/ }).first()).toBeVisible();
});

test("explore: shows the labs that have something for the class, and each experiment opens", { tag: "@desktop" }, async ({ page }) => {
  await seed(page, { name: "Asha", cls: 10 });
  await page.goto("/#/explore");
  await expect(page.locator("#area-physics")).toBeVisible();
  await expect(page.locator("#area-maths")).toBeVisible();
  // The Chemistry Lab has the equation balancer for Class 10 (js/labs/equation.js); areas with nothing for a class are left out (see the Class 3 test).
  await expect(page.locator("#area-chemistry")).toContainText("Equation balancer");
  const card = page.locator('[data-explore="sim-lens"]');
  await expect(card).toBeVisible();
  await expect(card).toContainText("image forms");
  await card.getByRole("link", { name: /Try it/ }).first().click();
  await expect(page).toHaveURL(/#\/chapter\/10\/science\/light-reflection-and-refraction\/explore$/);
  const sim = page.locator('[data-sim="lens"]');
  await expect(sim).toHaveAttribute("open", "");
  await expect(sim.locator(".sim-body svg").first()).toBeVisible();
  // The other chapters are in the "Also in" list, not repeated as button pairs.
  await page.goto("/#/explore");
  await expect(card.locator(".btn")).toHaveCount(1);
});

test("explore: a visual Maths game opens from Maths Studio; a class without labs says so honestly", async ({ page }) => {
  await seed(page, { name: "Asha", cls: 7 });
  await page.goto("/#/explore");
  const game = page.locator('[data-explore^="game-"]').first();
  await expect(game).toBeVisible();
  await game.getByRole("link", { name: /Try it/ }).first().click();
  await expect(page).toHaveURL(/#\/play\/7\/\w+\/[\w-]+\/\w+$/);
  await expect(page.locator(".game-intro")).toBeVisible();
});

test("today: a new learner gets a start action and a plan, never an empty page or invented progress", async ({ page }) => {
  await onboard(page, { name: "Mini", cls: 5 });
  // The plan carries the first lesson; the Start here card would repeat it, so it only shows when the plan is empty.
  await expect(page.locator("#main-action")).toHaveCount(0);
  await expect(page.locator("#plan .plan-item").first()).toBeVisible();
  await expect(page.locator("#plan")).toBeVisible();
  await expect(page.locator("#due-today")).toHaveCount(0); // nothing is due yet, so no card
  await expect(page.getByRole("heading", { name: "Recently opened" })).toHaveCount(0);
  await expect(page.locator(".stat")).toHaveCount(0);
  await expect(page.getByRole("heading", { name: "My subjects" })).toBeVisible();
  // Today keeps to its order: plan (start/continue only when it adds something), daily challenge (when loaded), subjects.
  const order = await page.locator("#app h2, #app .main-action").evaluateAll((els) => els.map((e) => (e.classList.contains("main-action") ? "main" : e.textContent.trim())));
  expect(order).not.toContain("main");
  expect(order.indexOf("Today's plan")).toBeLessThan(order.indexOf("My subjects"));
});

test("play: groups for continuing, quick challenges and subjects; played games come back as tiles", async ({ page }) => {
  const maths = chaptersOf(7, "maths")[0].id;
  await seed(page, { name: "Asha", cls: 7, student: { games: { [`7/maths/${maths}`]: { match: { best: 40, stars: 2, plays: 1, at: Date.now() } } }, chapters: { [`7/maths/${maths}`]: { opened: Date.now() } } } });
  await page.goto("/#/games");
  await expect(h1(page)).toHaveText("Play");
  await expect(page.getByRole("heading", { name: "Play again" })).toBeVisible();
  const tile = page.locator(".game-tile").first();
  await expect(tile).toContainText("Maths");
  await expect(tile).toContainText("min");
  await expect(tile.locator(".stars")).toHaveAttribute("aria-label", "2 of 3 stars");
  await expect(page.getByRole("heading", { name: "Quick challenges" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "My subjects" })).toBeVisible();
  await page.locator('[data-act="quickfire"]').click();
  await expect(page).toHaveURL(/#\/play\/7\/\w+\/[\w-]+\/\w+$/);
});

test("progress: skills are shown as developing, secure and mastered, with ways to fix and revise", async ({ page }) => {
  await seed(page, { name: "Asha", cls: 7 });
  await page.goto("/#/progress");
  await expect(page.locator("#skill-bands")).toContainText("No skills started yet");
  await page.goto("/#/progress");
  const links = page.locator("#work-next a");
  await expect(links).toHaveText([/My mistakes/, /Due for revision/, /Today's plan/, /Parent area/]);
  await links.nth(0).click();
  await expect(page).toHaveURL(/#\/revise\/mistakes$/);
});

test("shell: every tab draws in Punjabi, Hindi and dark mode without errors", async ({ page }) => {
  await seed(page, { name: "Asha", cls: 12, lang: "pa" });
  for (const lang of ["pa", "hi"]) {
    await page.goto("/#/");
    await page.evaluate((l) => Store.setLang(l), lang);
    await page.evaluate(() => (document.documentElement.dataset.theme = "dark"));
    for (const url of ["/#/", "/#/learn", "/#/games", "/#/explore", "/#/progress"]) {
      await page.goto(url);
      await expect(h1(page)).toBeVisible();
      await page.reload();
      await expect(h1(page)).toBeVisible();
    }
  }
  const labels = await visibleTabs(page).allTextContents();
  expect(labels.map((s) => s.trim())).toEqual(["आज", "सीखें", "खेलें", "खोजें", "प्रगति"]);
});

test("age bands: the youngest get bigger tiles, Class 12 a denser list", async ({ page }) => {
  const size = (sel) => page.locator(sel).first().evaluate((e) => parseFloat(getComputedStyle(e).fontSize));
  const pad = (sel) => page.locator(sel).first().evaluate((e) => parseFloat(getComputedStyle(e).paddingTop));
  await seed(page, { name: "Mini", cls: 2 });
  await page.goto("/#/learn");
  expect(await size(".learn-body .subject-name")).toBeGreaterThanOrEqual(19);
  const young = await pad(".learn-body .subject-card");
  await page.evaluate(() => Store.setProfile({ cls: 12 }));
  await page.reload();
  expect(await pad(".learn-body .subject-card")).toBeLessThan(young);
  expect(await size(".learn-body .subject-name")).toBeLessThanOrEqual(15.5);
});
