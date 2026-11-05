// "Read to me" (js/readaloud.js): Mithu reads the screen for Classes 1-3, with a highlight that moves; the key prompt of a new
// screen is read by itself for Classes 1-2 (unless Sound effects are off); press and hold reads one item.
const { test, expect, seed } = require("./helpers");

// A stand-in for the device's speech: English, Hindi and Punjabi voices; every utterance is recorded with its language and the
// text of the element highlighted at that moment; the end is reported after a short delay (window.__delay).
const STUB = () => {
  window.__utt = [];
  window.__cancels = 0;
  window.__delay = 30;
  const voices = [{ lang: "en-IN", name: "E" }, { lang: "hi-IN", name: "H" }, { lang: "pa-IN", name: "P" }];
  const stub = {
    cur: null,
    getVoices: () => voices,
    speaking: false,
    addEventListener() {},
    speak(u) {
      const mark = document.querySelector(".reading");
      window.__utt.push({ text: u.text, lang: u.lang, mark: mark ? mark.textContent.replace(/\s+/g, " ").trim() : null });
      stub.cur = u;
      setTimeout(() => stub.cur === u && u.onend && u.onend({}), window.__delay);
    },
    cancel() {
      window.__cancels++;
      stub.cur = null;
    },
  };
  Object.defineProperty(window, "speechSynthesis", { value: stub, configurable: true });
};

const norm = (s) => String(s).replace(/[^\p{L}\p{N}]/gu, "").toLowerCase();
const utt = (page) => page.evaluate(() => window.__utt);
const rtm = (page) => page.locator("button.rtm");

async function start(page, { cls = 1, sound = "on", url = "/#/learn" } = {}) {
  await seed(page, { name: "Kabir", cls });
  await page.addInitScript(STUB);
  if (sound) await page.addInitScript((v) => localStorage.setItem("vidya:sound", v), sound);
  await page.goto(url);
  await expect(page.locator("body")).toHaveAttribute("data-band", /\d/);
}

// Marked elements in three languages, put on the page as a screen would.
const addMarked = (page, n = 0) =>
  page.evaluate((n) => {
    const d = document.createElement("div");
    d.innerHTML = `<h2 data-read="1">Say hello</h2><p data-read="2">नमस्ते बच्चो</p><p data-read="3">ਸਤ ਸ੍ਰੀ ਅਕਾਲ</p><p data-read="4">Goodbye</p>` + "<p data-read>Slow line</p>".repeat(n);
    document.querySelector("#app").appendChild(d);
  }, n);

for (const cls of [1, 2, 3, 6]) {
  test(`the Read to me button ${cls <= 3 ? "is" : "is not"} on Class ${cls}`, async ({ page }) => {
    await start(page, { cls });
    if (cls > 3) return expect(rtm(page)).toBeHidden();
    await expect(rtm(page)).toBeVisible();
    await expect(rtm(page)).toHaveAttribute("aria-label", "Read to me");
    const box = await rtm(page).boundingBox();
    expect(box.width).toBeGreaterThanOrEqual(56);
    expect(box.height).toBeGreaterThanOrEqual(56);
  });
}

test("Class 1 English quiz: heading, question, then options A to D in order, and the highlight moves", async ({ page }) => {
  await start(page, { sound: "off", url: "/#/chapter/1/english/the-alphabet/master" });
  const q = (await page.locator(".quiz-q").first().textContent()).trim();
  const key = norm(q).slice(0, 10);
  await rtm(page).click();
  await expect(rtm(page)).toHaveAttribute("aria-label", "Stop reading");
  await expect.poll(async () => (await utt(page)).some((x) => /^D: /.test(x.text)), { timeout: 15000 }).toBe(true);
  const u = await utt(page);
  const i = {
    h: u.findIndex((x) => x.text.includes("The Alphabet")),
    q: u.findIndex((x) => norm(x.text).includes(key)),
    a: u.findIndex((x) => /^A: /.test(x.text)),
    b: u.findIndex((x) => /^B: /.test(x.text)),
    c: u.findIndex((x) => /^C: /.test(x.text)),
    d: u.findIndex((x) => /^D: /.test(x.text)),
  };
  expect(i.h).toBeGreaterThanOrEqual(0);
  expect(i.q, JSON.stringify([q, u.map((x) => x.text)])).toBeGreaterThan(-1);
  expect(i.h).toBeLessThan(i.q);
  expect(i.q).toBeLessThan(i.a);
  expect(i.a).toBeLessThan(i.b);
  expect(i.b).toBeLessThan(i.c);
  expect(i.c).toBeLessThan(i.d);
  // the element highlighted while each part was spoken is that part
  expect(norm(u[i.q].mark)).toContain(key);
  expect(u[i.a].mark).not.toBe(u[i.q].mark);
  expect(u[i.b].mark).not.toBe(u[i.a].mark);
  // done: no highlight left, the button is back
  await expect(page.locator(".reading")).toHaveCount(0);
  await expect(rtm(page)).toHaveAttribute("aria-label", "Read to me");
});

test("each element is read in the voice of its script", async ({ page }) => {
  await start(page, { sound: "off" });
  await addMarked(page);
  await rtm(page).click();
  await expect.poll(async () => (await utt(page)).length).toBe(4);
  const u = await utt(page);
  expect(u.map((x) => x.lang)).toEqual(["en-IN", "hi-IN", "pa-IN", "en-IN"]);
  expect(u.map((x) => x.text)).toEqual(["Say hello", "नमस्ते बच्चो", "ਸਤ ਸ੍ਰੀ ਅਕਾਲ", "Goodbye"]);
});

test("it stops on navigation and when tapped again", async ({ page }) => {
  await start(page, { sound: "off" });
  await page.evaluate(() => (window.__delay = 600));
  await addMarked(page, 6);
  await rtm(page).click();
  await expect.poll(async () => (await utt(page)).length).toBe(1);
  await expect(page.locator(".reading")).toHaveCount(1);
  const before = (await utt(page)).length;
  await page.evaluate(() => (location.hash = "#/progress"));
  await expect(page.locator("h1")).toContainText("progress");
  await expect(page.locator(".reading")).toHaveCount(0);
  await page.waitForTimeout(900);
  expect((await utt(page)).length).toBe(before);
  // tap again to stop
  await addMarked(page, 6);
  await rtm(page).click();
  await expect.poll(async () => (await utt(page)).length).toBe(before + 1);
  await rtm(page).click();
  await expect(page.locator(".reading")).toHaveCount(0);
  await page.waitForTimeout(900);
  expect((await utt(page)).length).toBe(before + 1);
});

test("Class 1 hears 'how to play' by itself; Sound effects off means no auto-read, but the button works", async ({ page }) => {
  await start(page, { url: "/#/play/1/maths/shapes-around-us/match" });
  await expect(page.locator(".game-intro .game-how")).toBeVisible();
  const how = (await page.locator(".game-how").textContent()).trim();
  await expect.poll(async () => (await utt(page)).map((x) => x.text)).toEqual(expect.arrayContaining([how]));
  const u = await utt(page);
  expect(u[0].text).toBe((await page.locator(".game-title").textContent()).trim());
  expect(u[1].mark).toBe(how);
});
test("with Sound effects off nothing is read by itself", async ({ page }) => {
  await start(page, { sound: "off", url: "/#/play/1/maths/shapes-around-us/match" });
  await expect(page.locator(".game-intro .game-how")).toBeVisible();
  await page.waitForTimeout(1200);
  expect(await utt(page)).toEqual([]);
  await rtm(page).click();
  await expect.poll(async () => (await utt(page)).some((x) => x.text.includes("Match"))).toBe(true);
});
test("the race is timed: no auto-read of its how to play", async ({ page }) => {
  await start(page, { url: "/#/play/1/maths/shapes-around-us/race" });
  await page.waitForTimeout(300);
  if (await page.locator(".game-intro").count()) {
    await page.waitForTimeout(1200);
    expect(await utt(page)).toEqual([]);
  }
});
test("Class 3 does not auto-read", async ({ page }) => {
  await start(page, { cls: 3, url: "/#/play/3/maths/place-value/match" });
  await page.waitForTimeout(1500);
  expect(await utt(page)).toEqual([]);
  await expect(rtm(page)).toBeVisible();
});

test("a question is read once: the Listen again button does it, Read to me does not add a second reading", async ({ page }) => {
  await start(page, { url: "/#/chapter/1/english/the-alphabet/master" });
  const q = (await page.locator(".quiz-q").first().textContent()).trim();
  await expect.poll(async () => (await utt(page)).length).toBe(1);
  await page.waitForTimeout(1200);
  const u = await utt(page);
  expect(u).toHaveLength(1);
  expect(norm(u[0].text)).toContain(norm(q).slice(0, 10));
  expect(u[0].text).toMatch(/A: .*B: /);
});

test("Mithu's greeting on Today is read once per session for Class 2", async ({ page }) => {
  await start(page, { cls: 2, url: "/#/" });
  await expect.poll(async () => (await utt(page)).some((x) => x.text.includes("Namaste, Kabir"))).toBe(true);
  const n = (await utt(page)).filter((x) => x.text.includes("Namaste")).length;
  await page.evaluate(() => (location.hash = "#/learn"));
  await expect(page.locator("h1")).toContainText("Learn");
  await page.evaluate(() => (location.hash = "#/"));
  await expect(page.locator(".mascot-head")).toBeVisible();
  await page.waitForTimeout(1200);
  expect((await utt(page)).filter((x) => x.text.includes("Namaste")).length).toBe(n);
});

test("press and hold a subject tile reads its name and does not open it", async ({ page }) => {
  await start(page, { sound: "off" });
  const tile = page.locator(".subject-card").first();
  const name = (await tile.locator(".subject-name").textContent()).trim();
  const box = await tile.boundingBox();
  await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
  await page.mouse.down();
  await page.waitForTimeout(700);
  await page.mouse.up();
  await expect.poll(async () => (await utt(page)).map((x) => x.text)).toEqual([name]);
  await page.waitForTimeout(200);
  expect(page.url()).toContain("#/learn");
  // a normal tap still opens it
  await tile.click();
  await expect(page).toHaveURL(/#\/subject\//);
});

test("release lock: no Hindi or Punjabi is read, the English around it still is", async ({ page }) => {
  await start(page, { sound: "off", url: "/?lock=1#/learn" });
  await addMarked(page);
  await rtm(page).click();
  await expect.poll(async () => (await utt(page)).length).toBeGreaterThanOrEqual(2);
  await page.waitForTimeout(500);
  const u = await utt(page);
  expect(u.map((x) => x.text)).toEqual(["Say hello", "Goodbye"]);
  expect(u.some((x) => x.lang !== "en-IN")).toBe(false);
});

test("each answer has a Mithu speaker: it reads only that answer and does not choose it; Class 6 has none", async ({ page }) => {
  await start(page, { sound: "off", url: "/#/chapter/1/english/the-alphabet/master" });
  await expect(page.locator(".quiz-q").first()).toBeVisible();
  const opts = page.locator(".options .option");
  const n = await opts.count();
  await expect(page.locator(".options .opt-say")).toHaveCount(n);
  const third = page.locator(".options .opt-wrap").nth(2);
  const word = (await third.locator(".option").evaluate((o) => { const c = o.cloneNode(true); c.querySelectorAll(".letter, svg").forEach((x) => x.remove()); return c.textContent; })).trim();
  const box = await third.locator(".opt-say").boundingBox();
  expect(box.width).toBeGreaterThanOrEqual(44);
  await page.evaluate(() => (window.__utt = []));
  await third.locator(".opt-say").click();
  await expect.poll(async () => (await utt(page)).length).toBeGreaterThan(0);
  const said = await utt(page);
  expect(said.length).toBe(1);
  expect(norm(said[0].text)).toBe(norm(word)); // just the answer: no question, no letter
  await expect(page.locator(".option.locked")).toHaveCount(0); // hearing it did not answer the question
  await third.locator(".option").click(); // the answer itself still answers
  await expect(page.locator(".option.locked").first()).toBeVisible();
});

test("Class 6 answers have no speaker", async ({ page }) => {
  await start(page, { cls: 6, sound: "off", url: "/#/chapter/6/maths/fractions/master" });
  await expect(page.locator(".quiz-q").first()).toBeVisible();
  await expect(page.locator(".opt-say")).toHaveCount(0);
});
