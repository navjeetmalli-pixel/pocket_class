// The chapter learning loop (js/guided.js + js/loop.js): stages, routes (rules with reasons), feedback, saving and resuming.
const { test, expect, seed, readStore, current, chaptersOf, answer } = require("./helpers");

const MATHS = "quadratic-equations"; // Class 10: hand-written objectives, prerequisites, an experiment
const HINDI = chaptersOf(7, "hindi")[0].id; // Class 7 Hindi: no solved examples, no diagram, no experiment

// One click of whatever the current step asks for (in the page, so one call is one step). Returns what it did.
const advance = (page) =>
  page.evaluate(() => {
    const g = document.querySelector(".guided");
    if (!g) return "waiting";
    if (/Lesson complete/.test(g.textContent)) return "done";
    const click = (el, what) => (el.click(), what);
    const free = [...g.querySelectorAll(".options .option:not(.locked)")];
    if (free.length) return click(free[0], "answer");
    const sure = g.querySelector("[data-sure]");
    if (sure) return click(sure, "sure");
    const slip = g.querySelector("[data-slip]:not([disabled])");
    if (slip) return click(slip, "slip");
    for (const act of ["fade-show", "show-turn", "show-written", "p-next", "next", "finish"]) {
      const b = g.querySelector(`[data-act="${act}"]`);
      if (b) return click(b, act);
    }
    return "waiting";
  });

// Plays the lesson to the end, collecting the step labels and stage names seen on the way.
async function runLesson(page, { max = 160 } = {}) {
  const labels = new Set();
  const stages = new Set();
  const did = [];
  const label = page.locator(".guided .quiz-clock");
  for (let i = 0; i < max; i++) {
    const l = await label.textContent().catch(() => "");
    if (l) labels.add(l);
    (await page.locator(".guided .lp-stages li").allTextContents().catch(() => [])).forEach((x) => stages.add(x.replace("✓", "").trim()));
    const what = await advance(page);
    did.push(what);
    if (what === "done") break;
    expect(i, `the lesson should finish within ${max} clicks`).toBeLessThan(max - 1);
  }
  await expect(page.locator(".guided .result-msg")).toHaveText("Lesson complete");
  return { labels, stages, did };
}

const open = (page, c, subject, chapter) => page.goto(`/#/chapter/${c}/${subject}/${chapter}/guided`);

test("learning loop: a Class 10 Maths chapter runs through every stage", async ({ page }) => {
  await seed(page, { name: "Asha", cls: 10 });
  await open(page, 10, "maths", MATHS);
  await expect(page.locator(".guided .lp-stages")).toBeVisible();
  // Diagnose comes first: its prerequisite is the Polynomials chapter (hand-written `prereq` link).
  await expect(page.locator(".guided .quiz-clock")).toHaveText("Quick check");
  await expect(page.locator(".guided .lp-stages li[aria-current=step]")).toHaveText("Diagnose");

  const { labels, stages, did } = await runLesson(page);
  // Retrieve asks "how sure are you?" after each answer.
  expect(did).toContain("sure");
  // Maths names its Discover and Interact stages "Notice" and "Play with it" (subject variations, spec 5.2).
  for (const stage of ["Diagnose", "Notice", "Explain", "Play with it", "Retrieve", "Master"]) expect([...stages], stage).toContain(stage);
  for (const step of ["Quick check", "Think first", "The idea", "Worked example", "Try it", "Practice", "Show what you know", "Done"]) expect([...labels], step).toContain(step);

  // End screen: the skills before and after, the next step and why.
  await expect(page.locator(".guided .obj-panel .obj-list li").first()).toBeVisible();
  await expect(page.getByRole("heading", { name: "Your next step" })).toBeVisible();
  await expect(page.locator(".guided .lp-next .btn.primary")).toBeVisible();
  await expect(page.getByText("Explain it in your own words")).toBeVisible();

  // The learning record: independent checks are answers, decisions are events without a skill; nothing unfinished is kept.
  const s = current(await readStore(page));
  expect(s.guided[`10/maths/${MATHS}`]).toBeTruthy();
  expect(s.loop[`10/maths/${MATHS}`]).toBeUndefined();
  const types = new Set(s.learn.events.map((e) => e.type));
  expect(types.has("answer")).toBe(true);
  expect(types.has("diagnostic")).toBe(true);
  expect(s.learn.events.filter((e) => e.type === "diagnostic").every((e) => e.obj === undefined)).toBe(true);
  expect(Object.keys(s.learn.roll).some((k) => k.startsWith(`10/maths/${MATHS}#`))).toBe(true);
});

test("learning loop: a Class 7 Hindi chapter skips what it has no content for", async ({ page }) => {
  await seed(page, { name: "Asha", cls: 7 });
  await open(page, 7, "hindi", HINDI);
  const { labels, stages } = await runLesson(page);
  const seen = [...labels];
  // No generated questions, diagram or experiment: those steps are left out, the rest still runs.
  for (const gone of ["Complete it", "Your turn", "Find the mistake", "Look at it"]) expect(seen, gone).not.toContain(gone);
  for (const step of ["Think first", "The idea", "Practice", "Show what you know", "Done"]) expect(seen, step).toContain(step);
  // Languages call the stages by their own names.
  expect([...stages]).toContain("Read and notice");
  expect([...stages]).not.toContain("Visualise");
});

test("learning loop: a weak entry check brings a refresher, with its reason", async ({ page }) => {
  await seed(page, { name: "Asha", cls: 10 });
  await open(page, 10, "maths", MATHS);
  await expect(page.locator(".guided .quiz-clock")).toHaveText("Quick check");
  // Answer every check question wrongly.
  let wrongs = 0;
  for (let i = 0; i < 8; i++) {
    const r = await answer(page, "wrong");
    if (!r.known) break; // the right answer could not be found in the banks: stop rather than guess
    wrongs++;
    await page.locator('.guided [data-act="p-next"], .guided [data-act="next"]').first().click();
    if ((await page.locator(".guided .quiz-clock").textContent()) !== "Quick check") break;
  }
  expect(wrongs).toBeGreaterThanOrEqual(3);
  await expect(page.locator(".guided .quiz-clock")).toHaveText("Quick refresher");
  await expect(page.locator(".guided .lp-reason")).toContainText("We'll start with a quick refresher because");
  await expect(page.locator(".guided .note")).toBeVisible();
  await expect(page.locator('.guided a[href$="/guided"]').first()).toBeVisible();
  const s = current(await readStore(page));
  expect(s.learn.events.some((e) => e.type === "decision" && e.rule === "weak-diagnostic" && e.choice === "applied")).toBe(true);
  // Continuing goes on to the chapter itself.
  await page.locator('.guided [data-act="next"]').click();
  await expect(page.locator(".guided .quiz-clock")).toHaveText("Think first");
});

test("learning loop: a skill that is already mastered offers to skip its notes", async ({ page }) => {
  const now = Date.now();
  const o = { n: 6, ok: 6, ind: 6, nh: 0, seen: 3, first: now - 1e8, last: now - 1e7, firstOk: now - 1e8, lastOk: now - 1e7, rec: [2, 2, 2, 2, 2, 2], ret: [0, 0], step: 0, due: now + 8 * 864e5, rf: 0, err: {}, nw: 0 };
  const roll = Object.fromEntries(["standard-form", "factorisation"].map((id) => [`10/maths/${MATHS}#${id}`, o]));
  await seed(page, { name: "Asha", cls: 10, student: { learn: { v: 1, events: [], roll } } });
  await open(page, 10, "maths", MATHS);
  for (let i = 0; i < 40 && (await page.locator(".guided .quiz-clock").textContent()) !== "The idea"; i++) await advance(page);
  const offer = page.locator(".guided .lp-offer");
  await expect(offer).toContainText("You have already shown you can do this");
  await expect(page.locator(".guided .lp-obj")).toContainText("quadratic");
  await page.getByRole("button", { name: "Skip this idea" }).click();
  // The next idea is another skill (the second is mastered too, so it offers the same).
  await expect(page.locator(".guided .eyebrow").first()).toContainText("Idea 2");
  const s = current(await readStore(page));
  expect(s.learn.events.some((e) => e.type === "decision" && e.rule === "mastered-skip" && e.choice === "accepted")).toBe(true);
  expect(s.learn.events.some((e) => e.type === "decision" && e.rule === "mastered-skip" && e.choice === "offered")).toBe(true);
});

test("learning loop: leave and come back to the same place", async ({ page }) => {
  await seed(page, { name: "Asha", cls: 10 });
  await open(page, 10, "maths", MATHS);
  for (let i = 0; i < 40 && (await page.locator(".guided .quiz-clock").textContent()) !== "The idea"; i++) await advance(page);
  await page.locator('.guided [data-act="next"]').click();
  const head = await page.locator(".guided .quiz-head").textContent();
  const key = `10/maths/${MATHS}`;
  expect(current(await readStore(page)).loop[key]).toBeTruthy();

  await page.reload();
  await expect(page.locator(".guided .lp-resume")).toContainText("Welcome back");
  await expect(page.locator(".guided .quiz-head")).toHaveText(head);
  // The Notes tab says so too.
  await page.goto(`/#/chapter/10/maths/${MATHS}/notes`);
  await expect(page.locator(".guided-card")).toContainText("Pick up where you left off");
  // Starting again clears the saved place.
  await page.goto(`/#/chapter/10/maths/${MATHS}/guided`);
  await page.getByRole("button", { name: "Start again" }).click();
  await expect(page.locator(".guided .quiz-clock")).toHaveText("Quick check");
  await expect(page.locator(".guided .lp-resume")).toHaveCount(0);
});

test("learning loop: physics runs the experiment before the notes", async ({ page }) => {
  await seed(page, { name: "Asha", cls: 11 });
  await page.goto("/#/chapter/11/physics/motion-in-a-plane/guided");
  const order = [];
  for (let i = 0; i < 40; i++) {
    const l = await page.locator(".guided .quiz-clock").textContent();
    if (order[order.length - 1] !== l) order.push(l);
    if (l === "The idea") break;
    await advance(page);
  }
  // Predict -> experiment -> explain.
  expect(order.indexOf("Try it")).toBeGreaterThan(-1);
  expect(order.indexOf("Try it")).toBeLessThan(order.indexOf("The idea"));
  await expect(page.locator(".guided .lp-stages li").filter({ hasText: "Experiment" })).toBeVisible();
});

test("learning loop: the rules (js/loop.js) each give a reason", async ({ page }) => {
  await seed(page, { name: "Asha", cls: 10 });
  await page.goto(`/#/chapter/10/maths/${MATHS}/notes`);
  await page.locator(".guided-card").waitFor();
  const out = await page.evaluate(() => {
    const D = (n, wrong) => ({ q: "q" + n, answer: 0, picked: wrong ? 1 : 0, from: { cls: 10, subject: "maths", chapter: "polynomials", title: "Polynomials" } });
    const ids = (point, s, info) => Loop.decide(point, s, info).map((d) => ({ id: d.id, reason: d.reason }));
    const base = { wrong: {}, alts: {}, diag: { items: [] }, master: { items: [], transfer: {} } };
    return {
      weak: ids("diag-done", { ...base, diag: { items: [D(1, 1), D(2, 1), D(3, 0)] } }),
      fine: ids("diag-done", { ...base, diag: { items: [D(1, 0), D(2, 0), D(3, 1)] } }),
      none: ids("diag-done", { ...base, diag: { items: [] } }),
      skip: ids("explain", base, { state: "mastered", obj: "a" }),
      noskip: ids("explain", base, { state: "learning", obj: "a" }),
      fade: ids("worked-followed", { ...base, fade: {} }),
      nofade: ids("worked-followed", base),
      another: ids("worked-another", { ...base, example2: {} }),
      repeat: ids("wrong-answer", { ...base, wrong: { a: 2 } }, { obj: "a" }),
      once: ids("wrong-answer", { ...base, wrong: { a: 1 } }, { obj: "a" }),
      hints: ids("turn-done", { ...base, againItem: {} }, { ok: true, hints: 3 }),
      fewHints: ids("turn-done", { ...base, againItem: {} }, { ok: true, hints: 1 }),
      wrongTurn: ids("turn-done", { ...base, againItem: {} }, { ok: false, hints: 3 }),
      strong: ids("master-answer", { ...base, master: { items: [], transfer: { a: {} } } }, { ok: true, obj: "a" }),
      weakMaster: ids("master-answer", { ...base, master: { items: [], transfer: { a: {} } } }, { ok: false, obj: "a" }),
      noTransfer: ids("master-answer", base, { ok: true, obj: "a" }),
    };
  });
  expect(out.weak.map((d) => d.id)).toEqual(["weak-diagnostic"]);
  expect(out.weak[0].reason).toContain("2 of the 3 check questions");
  expect(out.fine).toEqual([]);
  expect(out.none).toEqual([]);
  expect(out.skip.map((d) => d.id)).toEqual(["mastered-skip"]);
  expect(out.noskip).toEqual([]);
  expect(out.fade.map((d) => d.id)).toEqual(["worked-followed"]);
  expect(out.nofade).toEqual([]);
  expect(out.another.map((d) => d.id)).toEqual(["worked-another"]);
  expect(out.repeat.map((d) => d.id)).toEqual(["repeat-error"]);
  expect(out.once).toEqual([]);
  expect(out.hints.map((d) => d.id)).toEqual(["hints-many"]);
  expect(out.hints[0].reason).toContain("3 hints");
  expect(out.fewHints).toEqual([]);
  expect(out.wrongTurn).toEqual([]);
  expect(out.strong.map((d) => d.id)).toEqual(["strong-independent"]);
  expect(out.weakMaster).toEqual([]);
  expect(out.noTransfer).toEqual([]);
  for (const d of [...out.weak, ...out.skip, ...out.fade, ...out.another, ...out.repeat, ...out.hints, ...out.strong]) expect(d.reason.length).toBeGreaterThan(20);
});

test("learning loop: feedback after a wrong answer names the mistake, or the usual one", async ({ page }) => {
  await seed(page, { name: "Asha", cls: 10 });
  await page.goto(`/#/chapter/10/maths/${MATHS}/notes`);
  await page.locator(".guided-card").waitFor();
  const out = await page.evaluate((chapter) => {
    const ref = { cls: 10, subject: "maths", chapter };
    const item = { q: "Solve x² = 3x by factorisation.", options: ["x = 0 or x = 3", "x = 3 only, after dividing both sides by x", "x = −3", "x = 0"], answer: 0, explain: "", ref };
    return {
      matched: Learn.feedback(item, 1),
      common: Learn.feedback(item, 2),
      right: Learn.feedback(item, 0),
      tagged: Learn.feedback({ ...item, kinds: [undefined, "sign", "scale", "method"] }, 1),
      html: Learn.feedbackHTML(item, 1),
      noMistakes: Learn.feedback({ q: "q", options: ["a", "b"], answer: 0, ref: { cls: 10, subject: "maths", chapter: "real-numbers" }, kinds: [undefined, "slip"] }, 1),
    };
  }, MATHS);
  expect(out.matched[0].kind).toBe("fix");
  expect(out.matched[0].text).toContain("Dividing both sides");
  expect(out.common[0].kind).toBe("common");
  expect(out.right).toEqual([]);
  expect(out.tagged.map((l) => l.kind)).toContain("tailored");
  expect(out.tagged.find((l) => l.kind === "tailored").text).toContain("sign");
  expect(out.html).toContain("fb-extra");
  // A chapter whose objectives have no hand-written mistakes only gets the tailored line, never an invented "common mistake".
  expect(out.noMistakes.every((l) => l.kind === "tailored")).toBe(true);
});

test("learning loop: the lesson works in Punjabi at phone width", async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 800 });
  await seed(page, { name: "Asha", cls: 10, lang: "pa" });
  await open(page, 10, "maths", MATHS);
  await expect(page.locator(".guided .lp-stages")).toContainText("ਜਾਂਚ");
  await expect(page.locator(".guided .quiz-clock")).toHaveText("ਛੋਟੀ ਜਾਂਚ");
  const wide = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 1);
  expect(wide, "no sideways scrolling").toBe(false);
});
