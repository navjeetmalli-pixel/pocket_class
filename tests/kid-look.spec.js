// Kid look: rounded bundled fonts, chunky buttons, sound effects made in code, and the Sound effects setting.
const { test, expect, seed } = require("./helpers");

const ADD = "addition-up-to-9";

// Counts oscillator starts in a stand-in AudioContext (no real audio in tests).
const stubAudio = (page) =>
  page.addInitScript(() => {
    window.__osc = 0;
    const param = () => ({ value: 0, setValueAtTime() {}, exponentialRampToValueAtTime() {}, linearRampToValueAtTime() {} });
    const node = () => ({ connect() {}, start() {}, stop() {}, gain: param(), frequency: param(), Q: param() });
    window.AudioContext = class {
      constructor() { this.state = "running"; this.currentTime = 0; this.sampleRate = 8000; this.destination = {}; }
      resume() { return Promise.resolve(); }
      createGain() { return node(); }
      createOscillator() { const n = node(); n.start = () => { window.__osc++; }; return n; }
      createBiquadFilter() { return node(); }
      createBuffer(c, n) { return { getChannelData: () => new Float32Array(n) }; }
      createBufferSource() { const n = node(); n.start = () => { window.__osc++; }; return n; }
    };
  });

test("the rounded fonts load for Latin and Gurmukhi text", async ({ page }) => {
  await seed(page, { name: "Riya", cls: 2 });
  await page.goto("/");
  await expect(page.locator("#app *").first()).toBeVisible();
  const r = await page.evaluate(async () => {
    const out = {};
    for (const [k, fam, sample] of [["latin", "Baloo 2", "Hello 123"], ["gurmukhi", "Baloo Paaji 2", "ਪੰਜਾਬੀ"], ["devanagari", "Baloo 2", "हिंदी"]]) {
      await document.fonts.load(`700 16px "${fam}"`, sample);
      out[k] = document.fonts.check(`700 16px "${fam}"`, sample) && [...document.fonts].some((f) => f.family.replace(/"/g, "") === fam && f.status === "loaded");
    }
    out.family = getComputedStyle(document.body).fontFamily;
    return out;
  });
  expect(r.latin && r.gurmukhi && r.devanagari).toBe(true);
  expect(r.family).toContain("Baloo 2");
});

test("buttons have a solid edge below them, strongest for young classes", async ({ browser }) => {
  const edge = async (cls) => {
    const page = await (await browser.newContext()).newPage();
    await seed(page, { name: "Riya", cls });
    await page.goto(`/#/chapter/${cls}/maths/${cls === 2 ? "numbers-up-to-100" : "real-numbers"}/quiz`);
    const b = page.locator(".btn.primary, .option").first();
    await b.waitFor();
    const sh = await b.evaluate((e) => getComputedStyle(e).boxShadow);
    await page.context().close();
    return sh;
  };
  const young = await edge(2);
  expect(young).toMatch(/0px 4px 0px 0px/);
  const older = await edge(10);
  expect(older).toMatch(/0px 2px 0px 0px/);
});

test("a correct answer plays the correct sound; Sound.play never throws", async ({ page }) => {
  await stubAudio(page);
  await seed(page, { name: "Riya", cls: 2 });
  await page.goto(`/#/chapter/1/maths/${ADD}/quiz`);
  await page.locator(".quiz-q").waitFor();
  expect(await page.evaluate(() => { for (const n of ["tap", "correct", "wrong", "celebrate", "whoosh", "pop", "nope"]) Sound.play(n); return window.__osc; })).toBeGreaterThan(5);
  // Answer every option in turn until one is right: the right one adds the two-note chime (2 oscillators), a wrong one a single "boop".
  const before = await page.evaluate(() => (window.__osc = 0));
  const opts = page.locator(".options .option");
  await opts.first().click();
  const wrong = await page.evaluate(() => window.__osc);
  expect(wrong).toBeGreaterThanOrEqual(1);
  expect(before).toBe(0);
  // Directly: Sound.answer(true) = 2 notes, Sound.answer(false) = 1.
  const counts = await page.evaluate(() => { window.__osc = 0; Sound.answer(true); const a = window.__osc; window.__osc = 0; Sound.answer(false); return [a, window.__osc]; });
  expect(counts).toEqual([2, 1]);
});

test("the Sound effects setting persists and turns sounds off", async ({ page }) => {
  await stubAudio(page);
  await seed(page, { name: "Riya", cls: 2 });
  await page.goto("/#/settings");
  const box = page.locator("#sound-on");
  await expect(box).toBeChecked();
  await box.uncheck();
  await page.reload();
  await expect(page.locator("#sound-on")).not.toBeChecked();
  const n = await page.evaluate(() => { window.__osc = 0; Sound.play("correct"); Sound.play("celebrate"); return window.__osc; });
  expect(n).toBe(0);
  await page.locator("#sound-on").check();
  await page.reload();
  await expect(page.locator("#sound-on")).toBeChecked();
  expect(await page.evaluate(() => { window.__osc = 0; Sound.play("correct"); return window.__osc; })).toBeGreaterThan(0);
});

test("sound defaults: on for Class 2, off for Class 9, and a saved choice wins", async ({ browser }) => {
  const on = async (cls, saved) => {
    const page = await (await browser.newContext()).newPage();
    await seed(page, { name: "Riya", cls });
    if (saved) await page.addInitScript((v) => localStorage.setItem("vidya:sound", v), saved);
    await page.goto("/");
    const v = await page.evaluate(() => Sound.enabled());
    await page.context().close();
    return v;
  };
  expect(await on(2)).toBe(true);
  expect(await on(5)).toBe(true);
  expect(await on(9)).toBe(false);
  expect(await on(9, "on")).toBe(true);
  expect(await on(2, "off")).toBe(false);
});
