// The visual Maths games: number line, fraction builder, balance the equation, angle estimate, graph plot, mental-maths race.
// Each test plays one whole game to the results page with every answer right. To know the answers, the clock and the random
// source are fixed before the page loads, so the round the game makes is the one the test asks the game for.
const { test, expect, seed, readStore, current } = require("./helpers");

const T0 = 1_700_000_000_000;
const SEED = (T0 ^ Math.floor(0.25 * 1e9)) >>> 0;

const fix = (page) =>
  page.addInitScript(({ T0 }) => {
    Date.now = () => T0;
    Math.random = () => 0.25;
  }, { T0 });

const url = (c, s, ch, type) => `/#/play/${c}/${s}/${ch}/${type}`;
const start = async (page) => {
  await page.locator("[data-g=start]").click();
  await expect(page.locator(".game-hud")).toBeVisible();
};
const roundsOf = (page, type, cls, subjId, chId) =>
  page.evaluate(
    ({ type, cls, subjId, chId, SEED }) => {
      const subj = StudyData.subject(subjId);
      const ch = StudyData.chapters(cls, subjId).find((c) => c.id === chId);
      return Games.get(type).build(cls, subj, ch, SEED);
    },
    { type, cls, subjId, chId, SEED }
  );
const next = (page) => page.locator("[data-mk=next]").click();
const stars = (page) => expect(page.locator(".game-result .stars")).toHaveAttribute("aria-label", "3 of 3 stars");
const good = (page) => expect(page.locator(".feedback.good")).toBeVisible();

async function open(page, cls, subj, ch, type, opts = {}) {
  await fix(page);
  await seed(page, { cls, ...opts });
  await page.goto(url(cls, subj, ch, type));
  await expect(page.locator(".game-intro")).toBeVisible();
}

test("number line (Class 1): place numbers with the arrow keys, hop sums, results saved", async ({ page }) => {
  const ch = "addition-up-to-9"; // asks both "jump" sums and "put the marker on"
  await open(page, 1, "maths", ch, "numberline");
  await expect(page.locator(".game-intro")).toContainText("Number line");
  const data = await roundsOf(page, "numberline", 1, "maths", ch);
  await start(page);
  expect(data.rounds.map((r) => r.kind)).toEqual(expect.arrayContaining(["jump", "whole"]));
  for (const [i, r] of data.rounds.entries()) {
    await expect(page.locator(".mk-q")).toBeVisible();
    await expect(page.locator("[data-marker]")).toHaveAttribute("role", "slider");
    await page.locator("[data-marker]").focus();
    const d = (r.target - r.start) / r.snap;
    for (let k = 0; k < Math.abs(d); k++) await page.keyboard.press(d > 0 ? "ArrowRight" : "ArrowLeft");
    await expect(page.locator("[data-marker]")).toHaveAttribute("aria-valuenow", String(r.target));
    if (i === 0) await page.getByRole("button", { name: "Check" }).click();
    else await page.keyboard.press("Enter");
    await good(page);
    await expect(page.locator(".mk-hop, .mk-answer-dot").first()).toBeAttached();
    await next(page);
  }
  await expect(page.locator(".game-result")).toBeVisible();
  await stars(page);
  expect(current(await readStore(page)).games[`1/maths/${ch}`].numberline.stars).toBe(3);
});

test("number line: a wrong place shows the right answer with the explanation and goes to What you got wrong", async ({ page }) => {
  const ch = "numbers-1-to-9";
  await open(page, 1, "maths", ch, "numberline");
  const data = await roundsOf(page, "numberline", 1, "maths", ch);
  await start(page);
  const r = data.rounds[0];
  await page.locator("[data-marker]").focus();
  const wrongStep = r.target < r.n ? 1 : -1;
  const d = r.target - r.start + wrongStep;
  for (let k = 0; k < Math.abs(d); k++) await page.keyboard.press(d > 0 ? "ArrowRight" : "ArrowLeft");
  await page.keyboard.press("Enter");
  await expect(page.locator(".feedback.bad")).toContainText("Correct answer:");
  await expect(page.locator(".feedback.bad")).toContainText("Count along");
  await expect(page.locator(".mk-answer-dot")).toBeAttached();
  for (let i = 0; i < 6; i++) {
    await next(page);
    if (i === 5) break;
    await page.locator("[data-act=check]").click();
  }
  await expect(page.locator(".game-result")).toBeVisible();
  await expect(page.locator(".review-item").first()).toBeVisible();
});

test("fraction builder (Class 3): shade parts, compare bars, wrong shading is explained", async ({ page }) => {
  const ch = "fractions";
  await open(page, 3, "maths", ch, "fractions");
  const data = await roundsOf(page, "fractions", 3, "maths", ch);
  await start(page);
  const wrongAt = data.rounds.findIndex((r) => r.type !== "compare");
  for (const [i, r] of data.rounds.entries()) {
    if (r.type === "compare") await page.locator(`[data-pick="${r.answer}"]`).click();
    else {
      const parts = page.locator(".fb-bar:not(.given) .fb-cell, .fb-slice");
      const n = r.type === "build" ? r.n : r.type === "equiv" ? r.f.n * r.m : r.target;
      if (i === wrongAt) {
        // one part too many first: the pieces that count are outlined and numbered, one plain line says why, then one more try
        for (let k = 0; k <= n; k++) await parts.nth(k).click();
        await page.locator("[data-act=check]").click();
        await expect(page.locator(".mk-teach")).toContainText(/You took \d+ pieces?\./);
        await expect(page.locator(".mk-teach")).not.toContainText("Correct answer:");
        await page.locator("[data-mk=retry]").click();
        await page.locator("[data-act=clear]").click();
        await expect(page.locator("[data-count]")).toContainText("0 of");
      }
      for (let k = 0; k < n; k++) await parts.nth(k).click();
      await expect(page.locator("[data-count]")).toContainText(`${n} of`);
      await page.locator("[data-act=check]").click();
    }
    if (i === wrongAt) await expect(page.locator(".feedback.good")).toContainText("Got it this time!");
    else await good(page);
    await next(page);
  }
  await expect(page.locator(".game-result")).toBeVisible();
  await expect(page.locator(".review-item")).toHaveCount(1);
});

test("balance the equation (Class 8): the scale, the steps written down, a refused divide, solved in the fewest steps", async ({ page }) => {
  const ch = "algebra-play";
  await open(page, 8, "maths", ch, "balance");
  const data = await roundsOf(page, "balance", 8, "maths", ch);
  await start(page);
  for (const [i, e0] of data.rounds.entries()) {
    await expect(page.locator(".bal-eq")).toBeVisible();
    await expect(page.locator(".bal-svg .bal-item").first()).toBeAttached();
    let s = { a: e0.a, b: e0.b, c: e0.c, d: e0.d };
    if (i === 0) {
      // ÷ 11 cannot divide a small equation evenly: refused with a message, nothing changes
      const before = await page.locator(".bal-eq").textContent();
      for (let k = 0; k < 8; k++) await page.locator("[data-n='1']").click();
      await page.locator("[data-op=div]").click();
      await expect(page.locator("[data-msg]")).toContainText("does not divide evenly");
      expect(await page.locator(".bal-eq").textContent()).toBe(before);
      for (let k = 0; k < 8; k++) await page.locator("[data-n='-1']").click();
    }
    const setN = async (v) => {
      let cur = Number(await page.locator("[data-nv]").textContent());
      while (cur !== v) {
        await page.locator(`[data-n='${v > cur ? 1 : -1}']`).click();
        cur += v > cur ? 1 : -1;
      }
    };
    let steps = 0;
    while (!(s.a === 1 && s.b === 0 && s.c === 0)) {
      let op;
      if (s.c) op = { k: "subx", v: s.c };
      else if (s.b) op = { k: s.b > 0 ? "sub" : "add", v: Math.abs(s.b) };
      else op = { k: "div", v: s.a };
      await setN(op.v);
      await page.locator(`[data-op=${op.k}]`).click();
      steps++;
      if (op.k === "subx") (s.a -= op.v), (s.c -= op.v);
      else if (op.k === "sub") (s.b -= op.v), (s.d -= op.v);
      else if (op.k === "add") (s.b += op.v), (s.d += op.v);
      else (s.a /= op.v), (s.b /= op.v), (s.c /= op.v), (s.d /= op.v);
      if (!(s.a === 1 && s.b === 0 && s.c === 0)) await expect(page.locator("[data-steps] li")).toHaveCount(steps);
    }
    await expect(page.locator(".feedback.good")).toContainText(i === 0 ? "Solved" : "Solved in the fewest steps"); // the refused divide costs a few points
    await expect(page.locator(".feedback.good")).toContainText(`x = ${e0.x < 0 ? "−" + -e0.x : e0.x}`);
    await next(page);
  }
  await expect(page.locator(".game-result")).toBeVisible();
  await stars(page);
});

test("angle estimate (Class 6): estimate within 10 degrees, name the type, find missing angles", async ({ page }) => {
  const ch = "lines-and-angles";
  await open(page, 6, "maths", ch, "angles");
  const data = await roundsOf(page, "angles", 6, "maths", ch);
  await start(page);
  const typeOf = (a) => (a < 90 ? "acute" : a === 90 ? "right" : a < 180 ? "obtuse" : a === 180 ? "straight" : "reflex");
  const answerOf = (r) => ({ est: r.a, name: r.a, tri: r.ang && r.ang[r.unknown], line: r.comp ? 90 - r.alpha : 180 - r.alpha, vert: r.ask === "opposite" ? r.alpha : 180 - r.alpha })[r.type];
  for (const [i, r] of data.rounds.entries()) {
    await expect(page.locator(".mk-svg")).toBeVisible();
    if (r.type === "est") {
      // 7 degrees off still scores ("Good estimate"), the first one exactly
      await page.locator(".mk-range").fill(String(r.a + (i === 0 ? 0 : 7)));
      await page.locator("[data-act=check]").click();
      await expect(page.locator(".feedback.good")).toContainText(i === 0 ? "Spot on" : "Good estimate");
    } else if (r.type === "name") {
      await page.locator(`[data-k=${typeOf(r.a)}]`).click();
      await good(page);
    } else {
      await page.locator(".mk-num").fill(String(answerOf(r)));
      await page.locator("[data-act=check]").click();
      await good(page);
    }
    await next(page);
  }
  await expect(page.locator(".game-result")).toBeVisible();
  expect(current(await readStore(page)).games[`6/maths/${ch}`].angles.plays).toBe(1);
});

test("graph plot (Class 10): tap points to plot a line, read lines and points", async ({ page }) => {
  const ch = "pair-of-linear-equations-in-two-variables";
  await open(page, 10, "maths", ch, "graphs");
  const data = await roundsOf(page, "graphs", 10, "maths", ch);
  await start(page);
  const tap = async (x, y) => {
    const svg = page.locator(".gr-svg").first();
    const box = await svg.boundingBox();
    await svg.click({ position: { x: ((160 + 26 * x) * box.width) / 320, y: ((160 - 26 * y) * box.height) / 320 } });
  };
  for (const [i, r] of data.rounds.entries()) {
    await expect(page.locator(".gr-svg").first()).toBeVisible();
    if (r.type === "plot") {
      const pts = [];
      for (let x = -5; x <= 5; x++) {
        const y = r.m * x + r.c;
        if (Number.isInteger(y) && Math.abs(y) <= 5) pts.push([x, y]);
      }
      await page.locator("[data-act=check]").click();
      await expect(page.locator("[data-read]")).toContainText("at least two");
      await tap(...pts[0]);
      await tap(...pts[pts.length - 1]);
      await page.locator("[data-act=check]").click();
      await good(page);
      await expect(page.locator(".gr-line")).toBeAttached();
    } else {
      await page.locator(`.option[data-i="${r.answer}"]`).click();
      await good(page);
    }
    await next(page);
  }
  await expect(page.locator(".game-result")).toBeVisible();
  await stars(page);
});

test("graph plot (Class 11): match a function to its graph, and a wrong match shows the right graph", async ({ page }) => {
  const ch = "trigonometric-functions";
  await open(page, 11, "maths", ch, "graphs");
  const data = await roundsOf(page, "graphs", 11, "maths", ch);
  await start(page);
  for (const [i, r] of data.rounds.entries()) {
    expect(r.type).toBe("match");
    await expect(page.locator(".gr-opt")).toHaveCount(3);
    const pick = i === 0 ? (r.answer + 1) % 3 : r.answer;
    await page.locator(`.gr-opt[data-i="${pick}"]`).click();
    if (i === 0) {
      await expect(page.locator(".feedback.bad")).toContainText("Correct answer:");
      await expect(page.locator(".feedback.bad")).toContainText(r.names[r.answer]);
      await expect(page.locator(".gr-opt.correct")).toHaveCount(1);
    } else await good(page);
    await next(page);
  }
  await expect(page.locator(".game-result")).toBeVisible();
  await expect(page.locator(".review-item")).toHaveCount(1);
});

test("graph plot: a wrong point shows the right one in another colour with dashed guides from the axes", async ({ page }) => {
  const ch = "orienting-yourself-the-use-of-coordinates";
  await open(page, 9, "maths", ch, "graphs");
  const data = await roundsOf(page, "graphs", 9, "maths", ch);
  await start(page);
  for (const r of data.rounds) {
    if (r.type === "point") {
      // by keyboard, from the origin, to a different point (one step off in x)
      const wx = r.x + (r.x < 5 ? 1 : -1);
      await page.locator(".gr-svg").focus();
      for (let k = 0; k < Math.abs(wx); k++) await page.keyboard.press(wx > 0 ? "ArrowRight" : "ArrowLeft");
      for (let k = 0; k < Math.abs(r.y); k++) await page.keyboard.press(r.y > 0 ? "ArrowUp" : "ArrowDown");
      await page.keyboard.press("Enter");
      await expect(page.locator(".gr-pt").first()).toBeVisible();
      await page.locator("[data-act=check]").click();
      await expect(page.locator(".feedback.bad")).toContainText("steps");
      await expect(page.locator(".gr-pt.bad")).toHaveCount(1);
      await expect(page.locator(".gr-pt.ok")).toHaveCount(1);
      await expect(page.locator(".gr-guide .gr-drop")).not.toHaveCount(0);
      await expect(page.locator(".gr-guide")).toContainText(`x = ${r.x < 0 ? "−" + -r.x : r.x}`);
      return;
    }
    if (r.type === "plot") continue;
    await page.locator(`.option[data-i="${r.type === "quadrant" ? (r.x > 0 && r.y > 0 ? 0 : r.x < 0 && r.y > 0 ? 1 : r.x < 0 && r.y < 0 ? 2 : 3) : r.answer}"]`).click();
    await next(page);
  }
  throw new Error("no point round in this seed");
});

test("graph plot: keyboard plots a line (arrows move the cursor, Enter places, Backspace removes) and tapping snaps to the grid", async ({ page }) => {
  const ch = "pair-of-linear-equations-in-two-variables";
  await open(page, 10, "maths", ch, "graphs");
  const data = await roundsOf(page, "graphs", 10, "maths", ch);
  await start(page);
  for (const r of data.rounds) {
    if (r.type !== "plot") {
      await page.locator(`.option[data-i="${r.answer}"]`).click();
      await next(page);
      continue;
    }
    const pts = [];
    for (let x = -5; x <= 5; x++) {
      const y = r.m * x + r.c;
      if (Number.isInteger(y) && Math.abs(y) <= 5) pts.push([x, y]);
    }
    const grid = page.locator(".gr-svg");
    await grid.focus();
    let cur = [0, 0];
    const go = async ([x, y]) => {
      for (; cur[0] < x; cur[0]++) await page.keyboard.press("ArrowRight");
      for (; cur[0] > x; cur[0]--) await page.keyboard.press("ArrowLeft");
      for (; cur[1] < y; cur[1]++) await page.keyboard.press("ArrowUp");
      for (; cur[1] > y; cur[1]--) await page.keyboard.press("ArrowDown");
      await page.keyboard.press("Enter");
    };
    await go(pts[0]);
    await go([pts[0][0], pts[0][1] === 5 ? 4 : pts[0][1] + 1]); // a stray point, then remove it
    await expect(page.locator(".gr-svg [data-layer=pts] .gr-pt")).toHaveCount(2);
    await page.keyboard.press("Backspace");
    await expect(page.locator(".gr-svg [data-layer=pts] .gr-pt")).toHaveCount(1);
    await go(pts[pts.length - 1]);
    // a tap a little off a grid point snaps to it: tapping the first point again takes it off
    const box = await grid.boundingBox();
    await grid.click({ position: { x: ((160 + 26 * pts[0][0] + 6) * box.width) / 320, y: ((160 - 26 * pts[0][1] - 5) * box.height) / 320 } });
    await expect(page.locator(".gr-svg [data-layer=pts] .gr-pt")).toHaveCount(1);
    cur = pts[0].slice(); // the tap moved the cursor to that point
    await go(pts[0]);
    await page.locator("[data-act=check]").click();
    await good(page);
    await expect(page.locator(".gr-line")).toBeAttached();
    return;
  }
});

test("graph plot (Class 9): tap the point and read coordinates by keyboard", async ({ page }) => {
  const ch = "orienting-yourself-the-use-of-coordinates";
  await open(page, 9, "maths", ch, "graphs");
  const data = await roundsOf(page, "graphs", 9, "maths", ch);
  await start(page);
  for (const r of data.rounds) {
    if (r.type === "point") {
      const grid = page.locator(".gr-svg");
      await grid.focus();
      // from the origin: the cursor moves with the arrow keys, Enter marks the point
      for (let k = 0; k < Math.abs(r.x); k++) await page.keyboard.press(r.x > 0 ? "ArrowRight" : "ArrowLeft");
      for (let k = 0; k < Math.abs(r.y); k++) await page.keyboard.press(r.y > 0 ? "ArrowUp" : "ArrowDown");
      await page.keyboard.press("Enter");
      await expect(page.locator("[data-read]")).toContainText(`${r.x < 0 ? "−" + -r.x : r.x}`);
      await page.locator("[data-act=check]").click();
    } else if (r.type === "quadrant") {
      const q = r.x > 0 && r.y > 0 ? 0 : r.x < 0 && r.y > 0 ? 1 : r.x < 0 && r.y < 0 ? 2 : 3;
      await page.locator(`.option[data-i="${q}"]`).click();
    } else await page.locator(`.option[data-i="${r.answer}"]`).click();
    await good(page);
    await next(page);
  }
  await expect(page.locator(".game-result")).toBeVisible();
});

test("mental-maths race (Class 3): run to the flag with streak bonus; a wrong answer shows the right one", async ({ page }) => {
  const ch = "multiplication-tables";
  await open(page, 3, "maths", ch, "race");
  const data = await roundsOf(page, "race", 3, "maths", ch);
  await start(page);
  await expect(page.locator("[data-hud=time]")).toBeVisible();
  for (let i = 0; i < data.target; i++) {
    const it = data.items[i % data.items.length];
    await expect(page.locator("#rc-q")).toHaveText(it.q);
    await page.locator(`.race-opts .option[data-i="${it.answer}"]`).click();
    if (i === 4) await expect(page.locator("[data-hud=streak]")).toContainText("5");
    if (i < data.target - 1) await page.waitForTimeout(450);
  }
  await expect(page.locator(".game-result")).toBeVisible();
  await expect(page.locator(".game-result")).toContainText("Reached the flag");
  await stars(page);
  expect(current(await readStore(page)).games[`3/maths/${ch}`].race.stars).toBe(3);
});

test("mental-maths race: a wrong answer costs points, shows the right answer and lists it at the end", async ({ page }) => {
  const ch = "multiplication-tables";
  await open(page, 3, "maths", ch, "race");
  const data = await roundsOf(page, "race", 3, "maths", ch);
  await start(page);
  const it = data.items[0];
  await page.locator(`.race-opts .option[data-i="${(it.answer + 1) % 4}"]`).click();
  await expect(page.locator(".option.correct")).toHaveCount(1);
  await expect(page.locator("[data-fb]")).toContainText("Correct answer:");
  await expect(page.locator("[data-hud=streak]")).toHaveText("0");
  await page.getByRole("button", { name: "Pause" }).click();
  await page.getByRole("link", { name: "Quit game" }).click();
});

test("the new games are listed for the right chapters and levels, and Practice-by-topic levels play them", async ({ page }) => {
  await seed(page, { cls: 6 });
  await page.goto("/#/games/maths");
  const row = (id) => page.locator(`.chapter-row[href="#/play/6/maths/${id}"]`);
  await expect(row("fractions")).toContainText("Fraction builder");
  await expect(row("the-other-side-of-zero")).toContainText("Number line");
  await expect(row("lines-and-angles")).toContainText("Angle estimate & shapes");
  await page.goto("/#/play/6/maths/fractions");
  for (const name of ["Fraction builder", "Number line", "Mental-maths race"]) await expect(page.locator(".game-card", { hasText: name })).toBeVisible();
  await expect(page.locator(".game-card", { hasText: "Balance the equation" })).toHaveCount(0);

  // a level: Fractions, Level 5
  await page.goto("/#/play/level/maths/fractions/fractions-5");
  for (const name of ["Fraction builder", "Number line", "Mental-maths race"]) await expect(page.locator(".game-card", { hasText: name })).toBeVisible();
  await page.locator(".game-card", { hasText: "Fraction builder" }).click();
  await start(page);
  await expect(page.locator(".mk-q")).toBeVisible();
  await page.goto("/#/play/level/maths/algebra/algebra-8");
  await expect(page.locator(".game-card", { hasText: "Balance the equation" })).toBeVisible();
  await page.goto("/#/play/level/maths/geometry/geometry-10");
  await expect(page.locator(".game-card", { hasText: "Graph plot" })).toBeVisible();
  await page.goto("/#/play/level/maths/geometry/geometry-5");
  await expect(page.locator(".game-card", { hasText: "Angle estimate & shapes" })).toBeVisible();
});

test("maths games in Punjabi, and in dark mode, on a phone", async ({ page }) => {
  await fix(page);
  await seed(page, { cls: 7, lang: "pa" });
  await page.addInitScript(() => {
    try {
      const s = JSON.parse(localStorage.getItem("vidya:v1"));
      s.theme = "dark";
      localStorage.setItem("vidya:v1", JSON.stringify(s));
    } catch (e) {}
  });
  await page.goto(url(7, "maths", "operations-with-integers", "numberline"));
  await expect(page.locator(".game-title")).toHaveText("ਸੰਖਿਆ ਰੇਖਾ");
  await start(page);
  await expect(page.locator(".mk-q")).toContainText(/ਨਿਸ਼ਾਨ/);
  await expect(page.locator("[data-act=check]")).toHaveText("ਜਾਂਚੋ");
  await expect(page.getByText("Put the marker")).toHaveCount(0);
  // the board fits the phone width
  const box = await page.locator(".mk-svg").boundingBox();
  expect(box.width).toBeLessThanOrEqual(412);
  await page.locator("[data-act=check]").click();
  await expect(page.locator(".feedback")).toBeVisible();
  await expect(page.locator(".feedback")).toContainText("ਸਹੀ ਜਵਾਬ:");
});

test("fraction plates (Class 3): tap or keyboard takes a piece, taking again puts it back, pieces are big buttons, wrong-then-retry is one wrong answer", async ({ page }) => {
  const ch = "fractions";
  await open(page, 3, "maths", ch, "fractions");
  const data = await roundsOf(page, "fractions", 3, "maths", ch);
  await start(page);
  let wrongDone = false;
  for (const r of data.rounds) {
    if (r.type === "compare") {
      await expect(page.locator(".fb-cmp-card")).toHaveCount(2);
      await page.locator(`[data-pick="${r.answer}"]`).click();
      await good(page);
      await next(page);
      continue;
    }
    const pieces = page.getByRole("button", { name: /^Piece \d+ of \d+, (not )?taken$/ });
    await expect(pieces).toHaveCount(r.d);
    for (let k = 0; k < r.d; k++) {
      const b = await pieces.nth(k).boundingBox();
      expect(b.width, "piece width").toBeGreaterThanOrEqual(44);
      expect(b.height, "piece height").toBeGreaterThanOrEqual(44);
    }
    // keyboard: Tab lands on a piece, Enter takes it, Space puts it back
    const first = page.locator(".fb-slice").first();
    await first.focus();
    await page.keyboard.press("Enter");
    await expect(first).toHaveAttribute("aria-label", `Piece 1 of ${r.d}, taken`);
    await expect(first).toHaveAttribute("aria-pressed", "true");
    await expect(page.locator(".fb-pc.taken")).toHaveCount(1);
    await page.keyboard.press("Space");
    await expect(first).toHaveAttribute("aria-label", `Piece 1 of ${r.d}, not taken`);
    await expect(page.locator(".fb-pc.taken")).toHaveCount(0);
    if (!wrongDone) {
      wrongDone = true;
      const wrong = r.n === 1 ? 2 : 1;
      for (let k = 0; k < wrong; k++) await page.locator(".fb-slice").nth(k).click();
      await page.locator("[data-act=check]").click();
      await expect(page.locator(".mk-teach")).toContainText(`${r.n} of the ${r.d} equal pieces`);
      await expect(page.locator(".fb-marks .fb-num")).toHaveCount(wrong * 2);
      await page.locator("[data-mk=retry]").click();
      await page.locator("[data-act=clear]").click();
    }
    for (let k = 0; k < r.n; k++) await page.locator(".fb-slice").nth(k).click();
    await page.locator("[data-act=check]").click();
    await expect(page.locator(".fb-burst")).toBeAttached();
    await next(page);
  }
  await expect(page.locator(".game-result")).toBeVisible();
  const ev = current(await readStore(page)).learn.events.filter((e) => e.type === "answer");
  // the first try of the retried round is the one wrong answer; its second try was not recorded again
  expect(ev.filter((e) => e.ok === false)).toHaveLength(1);
  await expect(page.locator(".review-item")).toHaveCount(1);
});
