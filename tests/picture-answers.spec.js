// Picture answers (js/picdict.js, optionsHTML in js/util.js) and read-aloud for the youngest classes.
// Questions are mounted straight into the quiz runner so the options and their order are fixed (keepOrder).
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { test, expect, seed } = require("./helpers");

const root = path.join(__dirname, "..");

// Only the mounted quiz: the page behind it may have its own options and Listen button.
const T = { locator: (sel) => T.page.locator(sel.split(",").map((x) => `#pa-test ${x.trim()}`).join(", ")) };

const ANIMALS = { q: "Which animal gives us milk?", options: ["cow", "dog", "cat", "elephant"], answer: 0 };
const MIXED = { q: "Which one is a pet?", options: ["dog", "cat", "cow", "xylophone"], answer: 0 };

// A stand-in for the device's speech: one English voice, every spoken text and every cancel recorded.
const SPEECH_STUB = () => {
  window.__spoken = [];
  window.__cancels = 0;
  const voices = [{ lang: "en-IN", name: "Test voice", default: true }, { lang: "hi-IN", name: "Test Hindi", default: false }];
  const stub = {
    getVoices: () => voices,
    speak: (u) => window.__spoken.push(u.text),
    cancel: () => window.__cancels++,
    addEventListener: () => {},
    speaking: false,
  };
  Object.defineProperty(window, "speechSynthesis", { value: stub, configurable: true });
};

async function mount(page, items, extra = {}) {
  await page.evaluate(
    ([items, extra]) => {
      let el = document.getElementById("pa-test");
      if (!el) {
        el = document.createElement("div");
        el.id = "pa-test";
        document.querySelector("#app").appendChild(el);
      }
      Quiz.mount(el, { items: items.map((i) => ({ ...i, keepOrder: true, ref: { key: null, from: "test" } })), instant: true, title: "t", ...extra });
    },
    [items, extra]
  );
}

async function start(page, { cls = 1, sound, stub = true, lock = false } = {}) {
  T.page = page;
  await seed(page, { name: "Kabir", cls });
  if (stub) await page.addInitScript(SPEECH_STUB);
  if (sound) await page.addInitScript((v) => localStorage.setItem("vidya:sound", v), sound);
  if (lock) await page.addInitScript(() => (window.POCKET_LOCK = true));
  await page.goto("/#/progress");
  await expect(page.locator("body")).toHaveAttribute("data-band", /\d/);
}

test("Class 1: when every option has a picture they are a 2x2 grid of picture cards that answer by click and by keys 1-4", async ({ page }) => {
  await start(page, { cls: 1 });
  await mount(page, [ANIMALS, { q: "Which animal says meow?", options: ["dog", "cat", "cow", "elephant"], answer: 1 }, { q: "Which animal is the biggest?", options: ["cat", "dog", "cow", "elephant"], answer: 3 }]);
  const grid = T.locator(".options.pic-options");
  await expect(grid).toBeVisible();
  const cards = grid.locator(".option.pic-opt");
  await expect(cards).toHaveCount(4);
  for (let i = 0; i < 4; i++) {
    await expect(cards.nth(i).locator(".pic-art svg")).toHaveCount(1);
    await expect(cards.nth(i).locator(".pic-word")).toHaveText(ANIMALS.options[i]);
    await expect(cards.nth(i).locator(".letter")).toHaveText("ABCD"[i]);
  }
  // 2 columns, 2 rows
  const box = await cards.evaluateAll((els) => els.map((e) => e.getBoundingClientRect()).map((r) => ({ x: Math.round(r.x), y: Math.round(r.y) })));
  expect(box[0].y).toBe(box[1].y);
  expect(box[2].y).toBe(box[3].y);
  expect(box[2].y).toBeGreaterThan(box[0].y);
  expect(box[1].x).toBeGreaterThan(box[0].x);
  expect(box[2].x).toBe(box[0].x);
  // click the right one
  await cards.nth(0).click();
  await expect(T.locator(".option.correct")).toHaveCount(1);
  await expect(T.locator(".feedback.good")).toBeVisible();
  await T.locator('[data-act="next"]').click();
  // key 2 on the second question (answer B)
  await page.keyboard.press("2");
  await expect(T.locator(".feedback.good")).toBeVisible();
  await expect(T.locator(".option.correct .letter")).toHaveText("B");
  await T.locator('[data-act="next"]').click();
  // a wrong key shows the right card
  await page.keyboard.press("1");
  await expect(T.locator(".feedback.bad")).toBeVisible();
  await expect(T.locator(".option.wrong")).toHaveCount(1);
  await expect(T.locator(".option.correct .pic-word")).toHaveText("elephant");
});

test("a question with one option that has no picture keeps the normal text options", async ({ page }) => {
  await start(page, { cls: 1 });
  await mount(page, [MIXED]);
  await expect(T.locator(".options .option")).toHaveCount(4);
  await expect(T.locator(".options.pic-options")).toHaveCount(0);
  await expect(T.locator(".option.pic-opt")).toHaveCount(0);
  await expect(T.locator(".option svg")).toHaveCount(0);
  await expect(T.locator(".option").nth(3)).toContainText("xylophone");
});

test("Class 6 never shows picture options, a picture above the question, or a Listen button", async ({ page }) => {
  await start(page, { cls: 6 });
  await mount(page, [ANIMALS, { q: "How many sides does a rectangle have?", options: ["3", "4", "5", "6"], answer: 1 }]);
  await expect(T.locator(".options .option")).toHaveCount(4);
  await expect(T.locator(".pic-options, .pic-opt, .q-pic-word, .listen-btn")).toHaveCount(0);
  await T.locator(".option").first().click();
  await T.locator('[data-act="next"]').click();
  await expect(T.locator(".pic-options, .pic-opt, .q-pic-word, .listen-btn")).toHaveCount(0);
});

test("a question picture shows the one thing the question is about, and never an option", async ({ page }) => {
  await start(page, { cls: 1 });
  await mount(page, [
    { q: "How many legs does a hen have?", options: ["2", "4", "6", "8"], answer: 0 },
    { q: "How many sides does a rectangle have?", options: ["3", "4", "5", "6"], answer: 1 },
    { q: "Which is shorter: a cricket bat or a pencil?", options: ["A cricket bat", "A tree", "A bus", "A pencil"], answer: 3 },
    { q: "What colour is a banana?", options: ["red", "blue", "yellow", "pink"], answer: 2 },
  ]);
  const label = () => T.locator(".q-pic-word svg").getAttribute("aria-label");
  await expect.poll(label).toBe("hen");
  await T.locator(".option").first().click();
  await T.locator('[data-act="next"]').click();
  await expect.poll(label).toBe("rectangle");
  await T.locator(".option").first().click();
  await T.locator('[data-act="next"]').click();
  await expect(T.locator(".q-pic-word")).toHaveCount(0); // two things compared: the options carry the pictures
  await T.locator(".option").first().click();
  await T.locator('[data-act="next"]').click();
  await expect(T.locator(".q-pic-word")).toHaveCount(0); // a colour question: a banana picture would give the answer away
});

test("a question can opt out of pictures with noPic, or bring its own picture", async ({ page }) => {
  await start(page, { cls: 1 });
  await mount(page, [{ ...ANIMALS, noPic: true }, { q: "How many legs does a hen have?", options: ["2", "4", "6", "8"], answer: 0, noPic: true }]);
  await expect(T.locator(".pic-options, .q-pic-word")).toHaveCount(0);
  await T.locator(".option").first().click();
  await T.locator('[data-act="next"]').click();
  await expect(T.locator(".pic-options, .q-pic-word")).toHaveCount(0);
  await mount(page, [{ q: "How many legs does a hen have?", options: ["2", "4", "6", "8"], answer: 0, pic: '<svg class="pic" viewBox="0 0 10 10" role="img" aria-label="my picture"></svg>' }]);
  await expect(T.locator('.q-pic svg[aria-label="my picture"]')).toHaveCount(1);
  await expect(T.locator(".q-pic-word")).toHaveCount(0);
});

test("no Classes 1-3 question shows a picture that equals its right answer's picture", async () => {
  // Loads the study data and the picture kit in Node, like scripts/check-pictures.js.
  const ctx = vm.createContext({ console });
  ctx.globalThis = ctx;
  const run = (f) => vm.runInContext(fs.readFileSync(path.join(root, f), "utf8"), ctx, { filename: f });
  run("data/registry.js");
  run("js/pics.js");
  run("js/picdict.js");
  const D = vm.runInContext("StudyData", ctx);
  const PD = vm.runInContext("PicDict", ctx);
  let shown = 0;
  const bad = [];
  for (const cls of [1, 2, 3]) {
    const dir = path.join(root, "data", `class${cls}`);
    for (const f of fs.readdirSync(dir)) if (f.endsWith(".js") && f !== "index.js" && f !== "objectives.js") run(`data/class${cls}/${f}`);
    const pdir = path.join(dir, "practice");
    if (fs.existsSync(pdir)) for (const f of fs.readdirSync(pdir)) if (f.endsWith(".js")) run(`data/class${cls}/practice/${f}`);
    for (const [subject, data] of Object.entries(D.content[cls] || {})) {
      for (const ch of data.chapters) {
        for (const q of [...(ch.quiz || []), ...((D.practiceFor(cls, subject, ch.id) || {}).mcq || [])]) {
          const qp = PD.forQuestion(q);
          if (!qp) continue;
          shown++;
          const right = q.options[q.answer];
          const ctxText = String(q.q).toLowerCase();
          const rp = PD.forText(right, { context: ctxText, siblings: q.options.filter((o) => o !== right) });
          if (rp && rp.key === qp.key) bad.push(`${cls}/${subject}/${ch.id}: ${q.q} -> ${qp.key}`);
          // and not any option's picture either
          q.options.forEach((o) => {
            const op = PD.forText(o, { context: ctxText, siblings: q.options.filter((x) => x !== o) });
            if (op && op.key === qp.key) bad.push(`${cls}/${subject}/${ch.id}: ${q.q} -> ${qp.key} is option "${o}"`);
          });
        }
      }
    }
  }
  expect(shown).toBeGreaterThan(200);
  expect(bad.slice(0, 10)).toEqual([]);
});

test("the dictionary reads plurals, articles, Hindi and Punjabi words, colours, numbers, shapes and money", async ({ page }) => {
  await start(page, { cls: 1, stub: false });
  const key = (text, context = "") => page.evaluate(([t, c]) => (PicDict.forText(t, { context: c }) || {}).key || null, [text, context]);
  expect(await key("A cow")).toBe("item:cow");
  expect(await key("the cows")).toBe("item:cow");
  expect(await key("mangoes")).toBe("item:mango");
  expect(await key("leaves")).toBe("item:leaf");
  expect(await key("गाय")).toBe("item:cow");
  expect(await key("ਗਾਂ")).toBe("item:cow");
  expect(await key("सेब")).toBe("item:apple");
  expect(await key("ਅੰਬ")).toBe("item:mango");
  expect(await key("red")).toBe("colour:red");
  expect(await key("लाल")).toBe("colour:red");
  expect(await key("ਚਿੱਟਾ")).toBe("colour:white");
  expect(await key("four")).toBe("num:4");
  expect(await key("7")).toBe("num:7");
  expect(await key("पाँच")).toBe("num:5");
  expect(await key("ਦਸ")).toBe("num:10");
  expect(await key("Rectangle")).toBe("shape:rectangle");
  expect(await key("₹5")).toBe("coin:5");
  expect(await key("₹50 note")).toBe("note:50");
  expect(await key("₹7")).toBeNull();
  expect(await key("bat")).toBeNull(); // ambiguous without the question
  expect(await key("bat", "Which one do we use to play cricket?")).toBe("item:cricket-bat");
  expect(await key("bat", "Which animal can fly at night?")).toBe("item:bat-animal");
  expect(await key("zzzzz")).toBeNull();
  // all or nothing, and two options never share a picture
  const all = (opts) => page.evaluate((o) => !!PicDict.forOptions(o, { q: "" }), opts);
  expect(await all(["cow", "dog", "cat", "hen"])).toBe(true);
  expect(await all(["cow", "dog", "cat", "xylophone"])).toBe(false);
  expect(await all(["cow", "cows", "cat", "dog"])).toBe(false);
});

test("Class 1 reads nothing by itself; the Listen button reads the question only, without the options", async ({ page }) => {
  await start(page, { cls: 1 });
  await mount(page, [ANIMALS, { q: "Which animal says meow?", options: ["dog", "cat", "cow", "elephant"], answer: 1 }]);
  await expect(T.locator(".listen-btn")).toBeVisible();
  await expect(T.locator(".listen-btn")).not.toHaveAttribute("data-auto", "1");
  await page.waitForTimeout(900);
  expect(await page.evaluate(() => window.__spoken.length)).toBe(0);
  await T.locator(".listen-btn").click();
  await expect.poll(() => page.evaluate(() => window.__spoken.length)).toBe(1);
  const first = await page.evaluate(() => window.__spoken[0]);
  expect(first).toContain("Which animal gives us milk?");
  expect(first).not.toContain("A: cow");
  expect(first).not.toContain("elephant");
  // answering stops the reading, and the feedback redraw does not read anything
  const cancels = await page.evaluate(() => window.__cancels);
  await T.locator(".option").first().click();
  await expect.poll(() => page.evaluate(() => window.__cancels)).toBeGreaterThan(cancels);
  await page.waitForTimeout(700);
  expect(await page.evaluate(() => window.__spoken.length)).toBe(1);
  // the next question is not read by itself either
  await T.locator('[data-act="next"]').click();
  await page.waitForTimeout(700);
  expect(await page.evaluate(() => window.__spoken.length)).toBe(1);
  await T.locator(".listen-btn").click();
  await expect.poll(() => page.evaluate(() => window.__spoken.length)).toBe(2);
  expect(await page.evaluate(() => window.__spoken[1])).toContain("Which animal says meow?");
});

test("with sound effects off nothing is read by itself, but the Listen button still works", async ({ page }) => {
  await start(page, { cls: 1, sound: "off" });
  await mount(page, [ANIMALS]);
  await expect(T.locator(".listen-btn")).toBeVisible();
  await page.waitForTimeout(900);
  expect(await page.evaluate(() => window.__spoken.length)).toBe(0);
  await T.locator(".listen-btn").click();
  await expect.poll(() => page.evaluate(() => window.__spoken.length)).toBe(1);
});

test("Class 3 has the Listen button but no automatic reading", async ({ page }) => {
  await start(page, { cls: 3 });
  await mount(page, [ANIMALS]);
  await expect(T.locator(".listen-btn")).toBeVisible();
  await expect(T.locator(".listen-btn")).not.toHaveAttribute("data-auto", "1");
  await expect(T.locator(".pic-options")).toHaveCount(1);
  await page.waitForTimeout(900);
  expect(await page.evaluate(() => window.__spoken.length)).toBe(0);
  await T.locator(".listen-btn").click();
  await expect.poll(() => page.evaluate(() => window.__spoken.length)).toBe(1);
});

test("no Listen button and no reading without a voice for the language", async ({ page }) => {
  await start(page, { cls: 1 });
  await mount(page, [{ q: "ਕਿਹੜਾ ਜਾਨਵਰ ਦੁੱਧ ਦਿੰਦਾ ਹੈ?", options: ["ਗਾਂ", "ਕੁੱਤਾ", "ਬਿੱਲੀ", "ਹਾਥੀ"], answer: 0 }]);
  await page.waitForTimeout(700);
  await expect(T.locator(".pic-options")).toHaveCount(1); // the pictures do not need a voice
  await expect(T.locator(".listen-btn")).toBeHidden(); // only English and Hindi voices in the stub
  expect(await page.evaluate(() => window.__spoken.length)).toBe(0);
});

test("the store release lock still hides Hindi and Punjabi: no Listen button for them", async ({ page }) => {
  await start(page, { cls: 1, lock: true });
  await mount(page, [{ q: "कौन सा जानवर दूध देता है?", options: ["गाय", "कुत्ता", "बिल्ली", "हाथी"], answer: 0 }]);
  await expect(T.locator(".options .option")).toHaveCount(4);
  await page.waitForTimeout(600);
  await expect(T.locator(".listen-btn")).toHaveCount(0);
  expect(await page.evaluate(() => window.__spoken.length)).toBe(0);
});

test("question of the day, quick-fire and practice by topic draw the same picture cards", async ({ page }) => {
  await start(page, { cls: 1 });
  // Practice by topic and quick-fire use the same helper; check it through the shared function on a made-up item.
  const html = await page.evaluate(
    () =>
      optionsHTML(
        { q: "Which animal gives us milk?", options: ["cow", "dog", "cat", "elephant"], answer: 0 },
        { order: [0, 1, 2, 3], attrs: 'role="group"', btn: (orig) => ({ cls: "option", attr: `data-qotd="${orig}"` }) }
      )
  );
  expect(html).toContain("pic-options");
  expect((html.match(/data-qotd="/g) || []).length).toBe(4);
  expect((html.match(/<svg/g) || []).length).toBe(4);
  // a printable sheet puts a small picture beside each option
  const sheet = await page.evaluate(() => (picAnswers({ q: "x", options: ["cow", "dog", "cat", "elephant"] }) || []).length);
  expect(sheet).toBe(4);
});

test("batch 3: the 'can roll easily' question (with a matchbox) shows four picture cards", async ({ page }) => {
  await start(page, { cls: 1 });
  await mount(page, [{ q: "Which of these can roll easily?", options: ["Box", "Ball", "Brick", "Matchbox"], answer: 1 }]);
  const cards = T.locator(".options.pic-options .option.pic-opt");
  await expect(cards).toHaveCount(4);
  for (let i = 0; i < 4; i++) await expect(cards.nth(i).locator(".pic-art svg")).toHaveCount(1);
});

test("batch 3: numbers 21-99 and 100 show tens bundles, 0 an empty ten-frame, and number words are read", async ({ page }) => {
  await start(page, { cls: 1, stub: false });
  const key = (t) => page.evaluate((x) => (PicDict.forText(x, { decorative: true }) || {}).key || null, t);
  expect(await key("47")).toBe("num:47");
  expect(await key("forty-seven")).toBe("num:47");
  expect(await key("Fifty")).toBe("num:50");
  expect(await key("100")).toBe("num:100");
  expect(await key("0")).toBe("num:0");
  expect(await key("पचास")).toBe("num:50");
  expect(await key("ਵੀਹ")).toBe("num:20");
  expect(await key("101")).toBeNull();
  // 47 = 4 bundles + 7 sticks
  const counts = await page.evaluate(() => { const d = document.createElement("div"); d.innerHTML = PicDict.forText("47", { decorative: true }).svg; return { bands: (d.innerHTML.match(/fill="url\(#lef5/g) || []).length, svg: d.querySelectorAll("svg").length }; });
  expect(counts.svg).toBe(1);
  await mount(page, [{ q: "Which number is the biggest?", options: ["23", "47", "64", "99"], answer: 3 }]);
  await expect(T.locator(".options.pic-options .option.pic-opt")).toHaveCount(4);
  // place-value questions are not pictured (the bundles would show the answer)
  expect(await page.evaluate(() => !!PicDict.forOptions(["5", "50", "0", "15"], { q: "How many tens are in 50?" }))).toBe(false);
});

test("batch 3: position words show their own scene (same ball and cabinet), in English, Hindi and Punjabi", async ({ page }) => {
  await start(page, { cls: 1, stub: false });
  const key = (t) => page.evaluate((x) => (PicDict.forText(x, { decorative: true }) || {}).key || null, t);
  expect(await key("under")).toBe("item:pos-under");
  expect(await key("in front of")).toBe("item:pos-front");
  expect(await key("नीचे")).toBe("item:pos-under");
  expect(await key("ਅੰਦਰ")).toBe("item:pos-in");
  const svg = await page.evaluate(() => PicDict.forText("behind", { decorative: true }).svg);
  expect(svg).toContain("<svg");
  await mount(page, [{ q: "Where is the ball? It is ___ the table.", options: ["on", "under", "behind", "near"], answer: 0 }]);
  await expect(T.locator(".options.pic-options .option.pic-opt")).toHaveCount(4);
  // position words are for answers only: not drawn inside ordinary sentences
  expect(await page.evaluate(() => PicDict.illustrate("A word in a sentence goes up and down.", {}))).toBeNull();
});

test("batch 3: a spelling or plural question shows no pictures, and misspellings map to nothing", async ({ page }) => {
  await start(page, { cls: 1, stub: false });
  const key = (t) => page.evaluate((x) => (PicDict.forText(x, { decorative: true }) || {}).key || null, t);
  expect(await key("boxies")).toBeNull();
  expect(await key("catt")).toBeNull();
  expect(await key("teeths")).toBeNull();
  await mount(page, [{ q: "What is the plural of box?", options: ["boxies", "boxes", "boxs", "boxen"], answer: 1 }]);
  await expect(T.locator(".options.pic-options")).toHaveCount(0);
  await expect(T.locator(".option")).toHaveCount(4);
  expect(await page.evaluate(() => !!PicDict.forOptions(["box", "ball", "brick", "bag"], { q: "Which word is plural?" }))).toBe(false);
});

test("two-word answers use their last word ('a cricket ball' is a ball), but not compounds, 'and' answers or number phrases", async ({ page }) => {
  await start(page, { cls: 1 });
  await mount(page, [{ q: "Which one will roll down a slope?", options: ["A brick", "A book", "A cricket ball", "A matchbox"], answer: 2 }]);
  await expect(T.locator(".options.pic-options .option.pic-opt")).toHaveCount(4);
  const key = (t, q = "") => page.evaluate(([x, c]) => (PicDict.forText(x, { context: c, decorative: true }) || {}).key || null, [t, q]);
  expect(await key("a water bottle")).toBe("item:bottle");
  expect(await key("paper boat")).toBe("item:boat");
  expect(await key("sea horse")).toBe(null); // not a horse
  expect(await key("hot dog")).toBe(null); // not a dog
  expect(await key("soap and water")).toBe(null); // the picture would show only half the answer
  expect(await key("leaves from trees")).toBe(null);
  expect(await key("no ball")).toBe(null);
});
