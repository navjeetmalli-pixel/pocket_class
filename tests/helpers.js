// Shared fixtures and helpers for the end-to-end tests.
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const base = require("@playwright/test");
const { expect } = base;

const KEY = "vidya:v1";
const root = path.join(__dirname, "..");

// ---------- content catalogs, read straight from the data files ----------

// A fresh StudyData (registry + the class index files asked for), isolated from the Node globals.
function loadStudyData(classes = []) {
  const ctx = vm.createContext({});
  ctx.globalThis = ctx;
  vm.runInContext(fs.readFileSync(path.join(root, "data", "registry.js"), "utf8"), ctx, { filename: "registry.js" });
  for (const c of classes) vm.runInContext(fs.readFileSync(path.join(root, "data", `class${c}`, "index.js"), "utf8"), ctx, { filename: `class${c}/index.js` });
  return ctx.StudyData;
}

const registry = loadStudyData();
const CLASSES = registry.classes;
const BOARDS = Object.keys(registry.boards);

// Subjects (names) the home screen should list for a class and board.
function expectedSubjects(cls, board) {
  const D = loadStudyData();
  D.setBoard(board);
  return D.subjectsFor(cls).map((s) => s.name);
}

// Subject ids for a class and board.
function expectedSubjectIds(cls, board) {
  const D = loadStudyData();
  D.setBoard(board);
  return D.subjectsFor(cls).map((s) => s.id);
}

// Chapters of a subject from the class index: [{ id, title, section }].
function chaptersOf(cls, subject, board = "cbse") {
  const D = loadStudyData([cls]);
  D.setBoard(board);
  return D.chapters(cls, subject);
}

// ---------- fixtures ----------

// Every test fails on a page error or console.error (unless it allows the message with `issues.allow(/regex/)`),
// and every confirm() / alert() is accepted (the list is in `dialogs`).
const test = base.test.extend({
  issues: [
    async ({ page }, use) => {
      const bag = { list: [], allowed: [], allow: (re) => bag.allowed.push(re) };
      watch(page, bag);
      await use(bag);
      const bad = bag.list.filter((m) => !bag.allowed.some((re) => re.test(m)));
      expect(bad, "page errors / console.error output").toEqual([]);
    },
    { auto: true },
  ],
  dialogs: [
    async ({ page }, use) => {
      const seen = [];
      page.on("dialog", (d) => {
        seen.push(d.message());
        d.accept().catch(() => {});
      });
      await use(seen);
    },
    { auto: true },
  ],
});

function watch(page, bag) {
  page.on("pageerror", (e) => bag.list.push(`pageerror: ${e.message}`));
  page.on("console", (m) => {
    if (m.type() === "error") bag.list.push(`console.error: ${m.text()} (${m.location().url})`);
  });
}

// ---------- seeding and reading storage ----------

// Starts the app already onboarded: a student with the given profile (and optional extra student fields).
// Only written when storage is empty, so reloads keep whatever the app saved since.
async function seed(page, { name = "Asha", cls = 10, board = "cbse", lang = "en", student = {} } = {}) {
  const data = {
    v: 2,
    theme: "light",
    lang,
    current: "s-seed",
    students: [{ id: "s-seed", profile: { name, cls, board }, ...student }],
  };
  await page.addInitScript(
    ({ KEY, data }) => {
      try {
        if (!localStorage.getItem(KEY)) localStorage.setItem(KEY, JSON.stringify(data));
      } catch (e) {}
    },
    { KEY, data }
  );
}

const readStore = (page) => page.evaluate((KEY) => JSON.parse(localStorage.getItem(KEY)), KEY);
const current = (store) => store.students.find((s) => s.id === store.current);

// ---------- quizzes ----------

// For the question on screen, finds the right option (its data-pick) from the study data, or null when the
// question isn't in the saved banks (the number-changing questions are generated, and have no fixed key).
function correctPick(page) {
  return page.evaluate(() => {
    const norm = (s) => String(s).replace(/\*\*/g, "").replace(/\s+/g, "").toLowerCase();
    const qEl = document.querySelector(".quiz-q");
    if (!qEl) return null;
    const shown = norm(qEl.textContent);
    const opts = [...document.querySelectorAll(".options .option")].map((b) => ({ pick: Number(b.dataset.pick), text: norm(b.lastElementChild.textContent) }));
    const D = StudyData;
    const match = (it) => {
      if (!it.options || it.answer == null || !shown.startsWith(norm(it.q))) return null;
      // Same wording can appear in several banks with different options: all four options must be the same too.
      const a = it.options.map(norm).sort().join("|");
      if (a !== opts.map((x) => x.text).sort().join("|")) return null;
      const want = norm(it.options[it.answer]);
      const o = opts.find((x) => x.text === want);
      return o ? o.pick : null;
    };
    for (const c of D.classes) {
      for (const [sid, data] of Object.entries(D.content[c] || {})) {
        for (const ch of data.chapters) {
          for (const it of [...ch.quiz, ...D.practiceFor(c, sid, ch.id).mcq]) {
            const p = match(it);
            if (p !== null) return p;
          }
        }
      }
    }
    return null;
  });
}

// Answers the question on screen: "right", "wrong" or "any". Returns { text, known } (known: the right answer was found).
async function answer(page, how) {
  await page.locator(".quiz-q").waitFor();
  const text = (await page.locator(".quiz-q").first().textContent()).trim();
  const pick = await correctPick(page);
  let target;
  if (pick === null) target = page.locator(".options .option").first();
  else if (how === "wrong") target = page.locator(`.options .option:not([data-pick="${pick}"])`).first();
  else target = page.locator(`.options .option[data-pick="${pick}"]`);
  await target.click();
  return { text, known: pick !== null };
}

// Plays an instant-feedback quiz (chapter quiz, mistakes practice) to the score screen.
// `wrongOnce`: gets the first question that has a known answer wrong; everything else right.
// Returns the text of the question answered wrongly, or null.
async function playInstantQuiz(page, { wrongOnce = false } = {}) {
  let wrong = null;
  for (let guard = 0; guard < 60; guard++) {
    await page.locator(".quiz-q, .result-top").first().waitFor();
    if (await page.locator(".result-top").count()) break;
    const how = wrongOnce && !wrong ? "wrong" : "right";
    const r = await answer(page, how);
    if (r.known) {
      // Instant feedback: "Correct!" or "Not quite" with the right answer.
      if (how === "wrong") {
        wrong = r.text;
        await expect(page.locator(".feedback.bad")).toContainText("Correct answer:");
      } else await expect(page.locator(".feedback.good")).toContainText("Correct");
    }
    await page.locator('[data-act="next"]').click();
  }
  await expect(page.locator(".result-top")).toBeVisible();
  return wrong;
}

// Plays any quiz quickly without caring about the answers.
async function quickQuiz(page) {
  for (let guard = 0; guard < 60; guard++) {
    await page.locator(".quiz-q, .result-top").first().waitFor();
    if (await page.locator(".result-top").count()) break;
    await page.locator(".options .option").first().click();
    await page.locator('[data-act="next"]').click();
  }
  await expect(page.locator(".result-top")).toBeVisible();
}

// ---------- navigation ----------

const home = async (page) => {
  await page.goto("/#/");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Namaste");
};

// The study tools (mock test, practice sheets, sample papers, formula sheets, practice by topic) are on the Learn tab:
// goes there so a .tool card can be clicked.
const openTools = async (page) => {
  await page.goto("/#/learn");
  await expect(page.locator(".tool").first()).toBeVisible();
};

// Presses a tab of the bottom bar (phone) or the sidebar (desktop): "Today", "Learn", "Play", "Explore" or "Progress".
const tab = (page, name) => page.locator("#tabbar a:visible, #sidebar a:visible").filter({ hasText: new RegExp(`^${name}$`) }).click();

// Opens the profile menu (the picture in the header).
const openMenu = async (page) => {
  await page.getByRole("button", { name: "Profile and menu" }).first().click();
  await expect(page.locator("#menu-sheet")).toBeVisible();
};

// Goes through first-time setup quickly (the Student path). Options: name, cls, board, view ("class" | "subject"),
// subjects (ids to pick in Subject-wise), goal (15 | 20 | 30 | null = decide later). Ends on Home.
const next = (page) => page.getByRole("button", { name: /^Continue/ }).click();
async function onboard(page, { name = "Asha", cls = 10, board = "cbse", view = "class", subjects = [], goal = 20 } = {}) {
  await page.goto("/");
  await page.getByRole("button", { name: /Start Learning/ }).click();
  await page.getByRole("button", { name: /I'm a Student/ }).click();
  await next(page);
  await page.locator(`.ob [data-board="${board}"]`).click();
  await next(page);
  await page.getByRole("button", { name: `Class ${cls}`, exact: true }).click();
  await next(page);
  if (view === "subject") await page.locator('.ob [data-view="subject"]').click();
  await next(page);
  for (const s of subjects) await page.locator(`.ob [data-sub="${s}"]`).click(); // subject ids, e.g. "maths"
  await next(page);
  await page.locator("#ob-name").fill(name);
  await next(page);
  if (goal) {
    await page.locator(`.ob [data-goal="${goal}"]`).click();
    await next(page);
  } else await page.getByRole("button", { name: "I'll decide later" }).click();
  await page.getByRole("button", { name: "Skip tour" }).click();
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Namaste");
}

module.exports = { onboard, openTools, tab, openMenu, test, expect, KEY, CLASSES, BOARDS, registry, loadStudyData, expectedSubjects, expectedSubjectIds, chaptersOf, seed, readStore, current, correctPick, answer, playInstantQuiz, quickQuiz, home, watch };
