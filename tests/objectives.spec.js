const fs = require("fs");
const path = require("path");
const { test, expect, seed, readStore, current, chaptersOf, playInstantQuiz, answer } = require("./helpers");

const CH = chaptersOf(10, "maths")[0];
const toast = (page) => page.locator("#toast");
const FIXTURE = fs.readFileSync(path.join(__dirname, "fixtures", "paths-maths.js"), "utf8");

// Objectives of the chapter as the app sees them (hand-written or derived), read from the page.
const objectivesOf = (page, cls, subject, chapter) =>
  page.evaluate(([c, s, ch]) => Objectives.forChapter(c, s, ch).map((o) => ({ id: o.id, key: o.key, text: o.text, derived: o.derived })), [cls, subject, chapter]);

// Logs `n` answers for one objective at a time in the past (days ago), through the same call the app uses.
const logAnswers = (page, o, ok, n, daysAgo) =>
  page.evaluate(
    ([key, ok, n, daysAgo]) => {
      const p = Objectives.parseKey(key);
      const at = Date.now() - daysAgo * 86400000;
      Store.logLearn(Array.from({ length: n }, (_, i) => ({ t: at + i * 1000, type: "answer", cls: p.cls, subject: p.subject, chapter: p.chapter, obj: p.obj, ok, hints: 0, attempt: 1, source: "quiz" })));
    },
    [o.key, ok, n, daysAgo]
  );

const learnOf = async (page) => current(await readStore(page)).learn;

test("learning objectives: a chapter quiz moves skills forward and the chapter page shows where you are", async ({ page }) => {
  await seed(page, { name: "Asha", cls: 10 });
  await page.goto(`/#/chapter/10/maths/${CH.id}/notes`);
  const panel = page.locator(".obj-panel");
  await expect(panel).toContainText("What you can do");
  const rows = panel.locator(".obj-list li");
  const objs = await objectivesOf(page, 10, "maths", CH.id);
  expect(objs.length).toBeGreaterThanOrEqual(2);
  await expect(rows).toHaveCount(objs.length);
  // Nothing done yet: every skill says so in words, not only in colour.
  await expect(panel.locator(".obj-chip")).toHaveCount(objs.length);
  for (const chip of await panel.locator(".obj-chip").all()) await expect(chip).toHaveText(/Not started/);

  await page.goto(`/#/chapter/10/maths/${CH.id}/quiz`);
  await playInstantQuiz(page);
  await expect(page.locator(".obj-improved")).toBeVisible();
  await expect(page.getByRole("heading", { name: "Skills that moved forward" })).toBeVisible();

  // Saved in the learning record: versioned, local, one event per answered question, summaries per objective.
  const learn = await learnOf(page);
  expect(learn.v).toBe(1);
  expect(learn.events.length).toBeGreaterThanOrEqual(10);
  expect(learn.events[0]).toMatchObject({ type: "answer", cls: 10, subject: "maths", chapter: CH.id, source: "quiz", hints: 0 });
  expect(Object.keys(learn.roll).length).toBeGreaterThan(0);
  for (const k of Object.keys(learn.roll)) expect(objs.map((o) => o.key)).toContain(k);

  await page.goto(`/#/chapter/10/maths/${CH.id}/notes`);
  const chips = await page.locator(".obj-panel .obj-chip").allTextContents();
  expect(chips.some((c) => !/Not started/.test(c))).toBe(true);

  // Progress: counts per state for the subject. Parent page: plain-language lists.
  await page.goto("/#/progress");
  await expect(page.locator(".obj-counts").first()).toBeVisible();
  await page.goto("/#/parent");
  await expect(page.getByRole("heading", { name: "Skills" })).toBeVisible();
  await expect(page.locator(".obj-groups")).toContainText(/Can do now|Practising/);
});

test("learning objectives: derived objectives follow the notes headings, hand-written ones win", async ({ page }) => {
  await seed(page, { name: "Asha", cls: 10 });
  await page.goto("/#/chapter/10/maths/quadratic-equations/notes");
  const r = await page.evaluate(() => {
    const ch = StudyData.chapters(10, "maths").find((c) => c.id === "quadratic-equations");
    const hand = Objectives.forChapter(10, "maths", ch);
    // The same chapter with its objectives taken away is derived: one per notes heading.
    const copy = { ...ch, id: "no-such-objectives-here" };
    const derived = Objectives.forChapter(10, "maths", copy);
    return { notes: ch.notes.length, hand: hand.map((o) => o.derived), derived: derived.map((o) => ({ id: o.id, text: o.text, topics: o.topics })), headings: ch.notes.map((n) => n.heading) };
  });
  expect(r.hand.length).toBeGreaterThanOrEqual(3);
  expect(r.hand.length).toBeLessThanOrEqual(6);
  expect(r.hand.every((d) => d === false)).toBe(true);
  expect(r.derived).toHaveLength(r.notes);
  r.derived.forEach((d, i) => {
    expect(d.text).toBe(`Understand: ${r.headings[i]}`);
    expect(d.topics).toEqual([r.headings[i]]);
    expect(d.id).toMatch(/^[a-z0-9]+(-[a-z0-9]+)*$/);
  });
  expect(new Set(r.derived.map((d) => d.id)).size).toBe(r.notes);
});

test("learning objectives: a question is mapped to an objective by name or by its words", async ({ page }) => {
  await seed(page, { name: "Asha", cls: 10 });
  await page.goto("/#/chapter/10/maths/quadratic-equations/notes");
  const r = await page.evaluate(() => {
    const objs = Objectives.forChapter(10, "maths", "quadratic-equations");
    const last = objs[objs.length - 1];
    const named = Objectives.forQuestion(10, "maths", "quadratic-equations", { q: "anything", options: ["a", "b", "c", "d"], answer: 0, obj: last.id });
    const q = { q: "For what value of k does the equation have equal roots? Use the discriminant.", options: ["1", "2", "3", "4"], answer: 0, explain: "Equal roots mean the discriminant b² − 4ac is zero." };
    const a = Objectives.forQuestion(10, "maths", "quadratic-equations", q).id;
    const b = Objectives.forQuestion(10, "maths", "quadratic-equations", q).id;
    const none = Objectives.forQuestion(10, "maths", "quadratic-equations", { q: "zzz qqq", options: ["a", "b", "c", "d"], answer: 0, explain: "" }).id;
    return { named, last: last.id, a, b, first: objs[0].id, none, texts: objs.map((o) => o.text) };
  });
  expect(r.named.id).toBe(r.last);
  expect(r.a).toBe(r.b); // deterministic
  expect(r.none).toBe(r.first); // no word in common: the first objective
});

test("learning record: Save backup then Restore keeps events and skill summaries", async ({ page }) => {
  await seed(page, { name: "Asha", cls: 10 });
  await page.goto(`/#/chapter/10/maths/${CH.id}/quiz`);
  await playInstantQuiz(page);
  const before = await learnOf(page);
  expect(before.events.length).toBeGreaterThan(0);

  await page.goto("/#/settings");
  const [download] = await Promise.all([page.waitForEvent("download"), page.getByRole("button", { name: "Save backup" }).click()]);
  const file = await download.path();
  const backup = JSON.parse(fs.readFileSync(file, "utf8"));
  expect(backup.students[0].learn).toEqual(before);

  await page.getByRole("button", { name: "Reset", exact: true }).click();
  await expect(toast(page)).toHaveText("Progress reset");
  expect(await learnOf(page)).toEqual({ v: 1, events: [], roll: {} });

  await page.locator("#restore").setInputFiles(file);
  await expect(toast(page)).toHaveText("Progress restored");
  expect(await learnOf(page)).toEqual(before);
  await page.goto(`/#/chapter/10/maths/${CH.id}/notes`);
  const chips = await page.locator(".obj-panel .obj-chip").allTextContents();
  expect(chips.some((c) => !/Not started/.test(c))).toBe(true);
});

test("learning record: a backup from before the learning record restores, and a damaged one is repaired", async ({ page }) => {
  await seed(page, { name: "Asha", cls: 10 });
  await page.goto("/#/settings");
  const at = Date.now() - 86400000;
  const student = (id, extra = {}) => ({ id, profile: { name: "Old Kid", cls: 6, board: "cbse" }, chapters: { "6/maths/knowing-our-numbers": { done: true, best: 80, attempts: 2, opened: at } }, history: [], ...extra });
  // Current shape (several students) but written before there was a learning record: no `learn` at all.
  const old = { app: "vidya", version: 2, saved: at, theme: "light", lang: "en", current: "a", students: [student("a"), student("b", { learn: 7 }), student("c", { learn: { v: 1, events: "no", roll: { x: null } } })] };
  await page.locator("#restore").setInputFiles({ name: "old.json", mimeType: "application/json", buffer: Buffer.from(JSON.stringify(old)) });
  await expect(toast(page)).toHaveText("Progress restored");
  const store = await readStore(page);
  expect(store.students).toHaveLength(3);
  for (const s of store.students) {
    expect(s.learn).toMatchObject({ v: 1, events: [], roll: {} });
    expect(s.chapters["6/maths/knowing-our-numbers"].best).toBe(80);
  }
  // The app still works for that student: the chapter page lists its skills.
  await page.goto(`/#/chapter/6/maths/${chaptersOf(6, "maths")[0].id}/notes`);
  await expect(page.locator(".obj-panel")).toContainText("What you can do");
});

test("learning record: the log keeps the newest 5,000 events and the summaries keep the rest", async ({ page }) => {
  await seed(page, { name: "Asha", cls: 10 });
  await page.goto(`/#/chapter/10/maths/${CH.id}/notes`);
  const o = (await objectivesOf(page, 10, "maths", CH.id))[0];
  const r = await page.evaluate(
    ([key]) => {
      const p = Objectives.parseKey(key);
      const evs = Array.from({ length: 5100 }, (_, i) => ({ t: 1000 + i, type: "answer", cls: p.cls, subject: p.subject, chapter: p.chapter, obj: p.obj, ok: i % 2 === 0, hints: 0, attempt: 1, source: "quiz" }));
      Store.logLearn(evs);
      const l = Store.state.learn;
      return { events: l.events.length, first: l.events[0].t, n: l.roll[key].n, ok: l.roll[key].ok };
    },
    [o.key]
  );
  expect(r.events).toBe(5000);
  expect(r.first).toBe(1000 + 100);
  expect(r.n).toBe(5100);
  expect(r.ok).toBe(2550);
});

test("mastery: states come from accuracy, independence and a review schedule, all set in Mastery.config", async ({ page }) => {
  await seed(page, { name: "Asha", cls: 10 });
  await page.goto("/#/");
  const r = await page.evaluate(() => {
    const DAY = 86400000;
    const T0 = 1_700_000_000_000;
    const ans = (o, ok, at, hints = 0, err) => Mastery.fold(o, { t: at, type: "answer", ok, hints, err });
    const st = (o, at) => Mastery.stateOf(o, at);
    const out = {};
    out.none = st(undefined, T0);
    let o = Mastery.fold(undefined, { t: T0, type: "lesson-step" });
    out.introduced = st(o, T0);
    o = ans(o, true, T0);
    out.one = st(o, T0);
    // Five right answers with hints are accurate but not independent.
    let h = undefined;
    for (let i = 0; i < 6; i++) h = ans(h, true, T0 + i, 1);
    out.hinted = st(h, T0 + 10);
    // Five right answers on their own: mastered for now, with a review date.
    let m = undefined;
    for (let i = 0; i < 5; i++) m = ans(m, true, T0 + i);
    out.mastered = st(m, T0 + 10);
    out.dueIn = Math.round((m.due - T0) / DAY);
    out.beforeDue = st(m, T0 + 1 * DAY);
    out.afterDue = st(m, T0 + 3 * DAY);
    out.isDue = Mastery.isDue(m, T0 + 3 * DAY);
    // A right recall after the review date climbs the ladder: next review is further away.
    const m2 = JSON.parse(JSON.stringify(m));
    ans(m2, true, T0 + 3 * DAY);
    out.afterRecall = st(m2, T0 + 3 * DAY + 1000);
    out.nextGap = Math.round((m2.due - (T0 + 3 * DAY)) / DAY);
    out.retention = Mastery.assess(m2, T0 + 3 * DAY + 1000).retention;
    // A failed recall: "Needs a refresher", with the shortest interval again.
    const m3 = JSON.parse(JSON.stringify(m));
    ans(m3, false, T0 + 3 * DAY);
    out.failed = st(m3, T0 + 3 * DAY + 1000);
    out.failedGap = Math.round((m3.due - (T0 + 3 * DAY)) / DAY);
    ans(m3, true, T0 + 3 * DAY + 2000);
    ans(m3, true, T0 + 3 * DAY + 3000);
    out.cleared = st(m3, T0 + 3 * DAY + 4000);
    // A kind of error is only a pattern when it repeats.
    let e = undefined;
    e = ans(e, false, T0, 0, "sign");
    out.oneError = Mastery.assess(e, T0).error;
    e = ans(ans(e, false, T0, 0, "sign"), false, T0, 0, "sign");
    out.repeated = Mastery.assess(e, T0).error;
    // The thresholds are one object: change it and the state changes.
    const keep = Mastery.config.mastered.min;
    Mastery.config.mastered.min = 6;
    out.stricter = st(m, T0 + 10);
    Mastery.config.mastered.min = keep;
    return out;
  });
  expect(r.none).toBe("not-started");
  expect(r.introduced).toBe("introduced");
  expect(r.one).toBe("learning");
  expect(r.hinted).not.toBe("mastered");
  expect(r.mastered).toBe("mastered");
  expect(r.dueIn).toBe(2);
  expect(r.beforeDue).toBe("mastered");
  expect(r.afterDue).toBe("review-due");
  expect(r.isDue).toBe(true);
  expect(r.afterRecall).toBe("mastered");
  expect(r.nextGap).toBe(5);
  expect(r.retention).toBe(1);
  expect(r.failed).toBe("refresher");
  expect(r.failedGap).toBe(2);
  expect(r.cleared).not.toBe("refresher");
  expect(r.oneError).toMatchObject({ confidence: "uncertain" });
  expect(r.repeated).toMatchObject({ kind: "sign", confidence: "repeated" });
  expect(r.stricter).not.toBe("mastered");
});

test("mastery: an objective whose review has come round brings its chapter into Due today and shows as Review due", async ({ page }) => {
  await seed(page, { name: "Asha", cls: 10 });
  await page.goto(`/#/chapter/10/maths/${CH.id}/notes`);
  const o = (await objectivesOf(page, 10, "maths", CH.id))[0];
  await logAnswers(page, o, true, 6, 4); // mastered four days ago, review was due after two
  await page.reload();
  await expect(page.locator(".obj-panel .obj-chip.s-review-due")).toHaveCount(1);
  await expect(page.locator(".obj-panel .obj-chip.s-review-due")).toContainText("Review due");

  // Parent page and Progress: plain-language "To review" and a count by state.
  await page.goto("/#/parent");
  await expect(page.locator(".obj-groups")).toContainText("To review");
  await page.goto("/#/progress");
  await expect(page.locator(".obj-counts .obj-chip.s-review-due")).toContainText("Review due");

  await page.goto("/#/revise");
  const row = page.locator(".chapter-row", { hasText: CH.title }).first();
  await expect(row).toContainText("1 skill to review");
  await row.click();
  await expect(page.locator("#quiz-mount .quiz-q")).toBeVisible();
  // The round is recorded as revision evidence; a right answer to the due skill's question is a successful recall.
  await playInstantQuiz(page);
  const rev = (await learnOf(page)).events.filter((e) => e.source === "revise");
  expect(rev.length).toBeGreaterThan(0);
});

test("learning record: practice by topic and the starting check log path evidence", async ({ page }) => {
  await page.route("**/data/paths/maths.js", (r) => r.fulfill({ contentType: "text/javascript", body: FIXTURE }));
  await page.addInitScript(() => (Math.random = () => 0.999999));
  await seed(page, { name: "Asha", cls: 6 });
  await page.goto("/#/paths/maths/fractions/fractions-0");
  await page.getByRole("button", { name: /Practice 10 questions/ }).click();
  await playInstantQuiz(page);
  const ev = (await learnOf(page)).events;
  expect(ev.length).toBeGreaterThan(0);
  expect(ev.every((e) => e.source === "path" && e.type === "answer")).toBe(true);
  expect(ev.every((e) => e.cls != null && e.subject && e.chapter && e.obj)).toBe(true);
});

test("mastery: the Practice-by-topic pass mark comes from Mastery.config", async ({ page }) => {
  await page.route("**/data/paths/maths.js", (r) => r.fulfill({ contentType: "text/javascript", body: FIXTURE }));
  await seed(page, { name: "Asha", cls: 6 });
  await page.goto("/#/paths/maths/fractions");
  await expect(page.getByText("Score 80% or more in a level")).toBeVisible();
  const r = await page.evaluate(() => {
    const out = {};
    out.at60 = Store.recordLevel("maths", "fractions", "fractions-0", 60).mastered;
    Mastery.config.pathPass = 0.5;
    out.at60Lenient = Store.recordLevel("maths", "fractions", "fractions-1", 60).mastered;
    out.at40Lenient = Store.recordLevel("maths", "fractions", "fractions-2", 40).mastered;
    return out;
  });
  expect(r).toEqual({ at60: false, at60Lenient: true, at40Lenient: false });
  // The ladder text follows the setting (a redraw without reloading the scripts).
  await page.evaluate(() => App.render());
  await expect(page.getByText("Score 50% or more in a level")).toBeVisible();
});

// Does whatever the lesson step on screen asks for (as in guided.spec.js); "hint" first presses a hint when one is offered.
const advance = (page) =>
  page.evaluate(() => {
    const g = document.querySelector(".guided");
    if (!g) return "waiting";
    if (/Lesson complete/.test(g.textContent)) return "done";
    const click = (el, what) => (el.click(), what);
    const hint = g.querySelector('[data-act="hint"]:not([disabled])');
    if (hint) return click(hint, "hint");
    const free = [...g.querySelectorAll(".options .option:not(.locked)")];
    if (free.length) return click(free[0], "answer");
    const sure = g.querySelector("[data-sure]");
    if (sure) return click(sure, "sure");
    const slip = g.querySelector("[data-slip]:not([disabled])");
    if (slip) return click(slip, "slip");
    for (const act of ["fade-show", "show-turn", "topic-next", "p-next", "next", "finish"]) {
      const b = g.querySelector(`[data-act="${act}"]`);
      if (b) return click(b, act);
    }
    return "waiting";
  });

test("learning record: a guided lesson logs the ideas met, hints and answers", async ({ page }) => {
  await seed(page, { name: "Asha", cls: 10 });
  await page.goto(`/#/chapter/10/maths/${CH.id}/guided`);
  await expect(page.locator(".guided .quiz-clock")).toHaveText("Think first");
  for (let i = 0; i < 90; i++) {
    if ((await advance(page)) === "done") break;
    expect(i).toBeLessThan(89);
  }
  await expect(page.locator(".guided .result-msg")).toHaveText("Lesson complete");
  const ev = (await learnOf(page)).events;
  const types = new Set(ev.map((e) => e.type));
  expect(types.has("lesson-step")).toBe(true);
  expect(types.has("answer")).toBe(true);
  for (const e of ev) expect(e).toMatchObject({ cls: 10, subject: "maths", chapter: CH.id, source: "guided" });
  // Practice answers come with no hints; every hint pressed in "Your turn" is logged too.
  expect(ev.filter((e) => e.type === "hint").every((e) => e.hints >= 1)).toBe(true);
  await page.goto(`/#/chapter/10/maths/${CH.id}/notes`);
  const chips = await page.locator(".obj-panel .obj-chip").allTextContents();
  expect(chips.some((c) => !/Not started/.test(c))).toBe(true);
});

test("learning record: a game writes its answers and one game event", async ({ page }) => {
  await seed(page, { name: "Asha", cls: 10 });
  await page.goto(`/#/play/10/science/light-reflection-and-refraction/quickfire`);
  await page.locator("[data-g=start]").click();
  await expect(page.locator(".game-hud")).toBeVisible();
  for (let i = 0; i < 3; i++) {
    await answer(page, "wrong");
    await page.locator('[data-act="next"]').click();
  }
  await expect(page.locator(".game-result")).toBeVisible();
  const ev = (await learnOf(page)).events;
  const answers = ev.filter((e) => e.type === "answer");
  expect(answers.length).toBeGreaterThanOrEqual(3);
  expect(answers.every((e) => e.source === "game" && e.ok === false && e.chapter === "light-reflection-and-refraction")).toBe(true);
  expect(ev.filter((e) => e.type === "game")).toHaveLength(1);
  expect(ev.find((e) => e.type === "game")).not.toHaveProperty("obj");
});

test("learning objectives: the chapter panel is translated", async ({ page }) => {
  await seed(page, { name: "Asha", cls: 8, lang: "pa" });
  await page.goto("/#/chapter/8/maths/algebra-play/notes");
  await expect(page.locator(".obj-panel h2")).toHaveText("ਤੁਸੀਂ ਕੀ ਕਰ ਸਕਦੇ ਹੋ");
  await expect(page.locator(".obj-panel .obj-chip").first()).toContainText("ਸ਼ੁਰੂ ਨਹੀਂ ਕੀਤਾ");
});

test("content review states: the subject page says where a subject is in the review", async ({ page }) => {
  await seed(page, { name: "Asha", cls: 10 });
  await page.goto("/#/subject/maths");
  await expect(page.locator(".syllabus-line")).toContainText(/Draft — not yet checked by a teacher|Checked by a teacher/);
  const cases = [
    [{ reviewed: false }, "Draft — not yet checked by a teacher"],
    [{ reviewed: false, status: "draft" }, "Draft — not yet checked by a teacher"],
    [{ reviewed: false, status: "subject-review" }, "Draft — a subject teacher is checking it"],
    [{ reviewed: false, status: "curriculum-review" }, "Draft — being checked against the syllabus"],
    [{ reviewed: false, status: "language-review" }, "Draft — being checked for language"],
    [{ reviewed: "2026-11-15, Mrs Kaur" }, "Checked by a teacher (2026-11-15)"],
    [{ reviewed: "2026-11-15, Mrs Kaur", status: "approved" }, "Checked by a teacher (2026-11-15)"],
    [{ reviewed: "2026-11-15, Mrs Kaur", status: "needs-revision" }, "Needs changes after a check"],
  ];
  for (const [patch, text] of cases) {
    await page.evaluate((p) => Object.assign(StudyData.syllabus(10, "maths"), { status: undefined }, p) && App.render(), patch);
    await expect(page.locator(".syllabus-line")).toContainText(text);
  }
});

test("learning record: a right answer marked Not sure counts as helped, not independent", async ({ page }) => {
  await seed(page, { name: "Asha", cls: 6 });
  await page.goto("/#/chapter/6/maths/fractions/understand");
  await expect(page.locator(".hub-nav")).toBeVisible();
  const r = await page.evaluate(() => {
    const item = { q: "Which is bigger, 2/3 or 3/5?", obj: "comparing-fractions", ref: { cls: 6, subject: "maths", chapter: "fractions" } };
    const sure = Learn.answerEvent(item, true, { source: "guided", sure: true });
    const unsure = Learn.answerEvent(item, true, { source: "guided", sure: false });
    const wrongUnsure = Learn.answerEvent(item, false, { source: "guided", sure: false });
    return { sure, unsure, wrongUnsure };
  });
  expect(r.sure).toMatchObject({ obj: "comparing-fractions", ok: true, hints: 0 });
  expect(r.sure.unsure).toBeUndefined();
  expect(r.unsure).toMatchObject({ obj: "comparing-fractions", ok: true, hints: 1, unsure: true });
  expect(r.wrongUnsure).toMatchObject({ ok: false, hints: 0 });
  expect(r.wrongUnsure.unsure).toBeUndefined();
});
