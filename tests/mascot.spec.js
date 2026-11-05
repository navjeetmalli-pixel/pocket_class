// Mithu the parrot guide and the bold subject tiles.
const { test, expect, seed } = require("./helpers");

test("Today for Class 2 shows Mithu with a speech bubble", async ({ page }) => {
  await seed(page, { cls: 2, name: "Kabir" });
  await page.goto("/#/");
  const m = page.locator(".mascot-head .mascot");
  await expect(m).toBeVisible();
  await expect(m.locator("svg")).toBeVisible();
  await expect(m.locator(".m-bubble")).toContainText("Namaste, Kabir");
  await expect(page.locator("h1")).toHaveCount(1);
});

test("an empty My mistakes shows Mithu for Class 2 and the line icon for Class 9", async ({ page }) => {
  await seed(page, { cls: 2 });
  await page.goto("/#/revise/mistakes");
  await expect(page.locator(".empty .mascot-svg")).toBeVisible();
  await expect(page.locator(".empty .btn")).toBeVisible();
});
test("Class 9 keeps the line icon", async ({ page }) => {
  await seed(page, { cls: 9 });
  await page.goto("/#/revise/mistakes");
  await expect(page.locator(".empty .big svg")).toBeVisible();
  await expect(page.locator(".empty .mascot-svg")).toHaveCount(0);
});

test("the results summary shows Mithu", async ({ page }) => {
  await seed(page, { cls: 6 });
  await page.goto("/#/chapter/6/maths/fractions/master");
  await expect(page.getByText(/^Question 1 of \d+$/)).toBeVisible();
  const html = await page.evaluate((n) => {
    const o = Objectives.forChapter(6, "maths", "fractions").slice(0, 2);
    const evs = o.map((x, i) => ({ type: "answer", cls: 6, subject: "maths", chapter: "fractions", obj: x.id, ok: n ? i > 0 : true, hints: 0, source: "quiz" }));
    return Learn.summaryHTML(evs, []);
  }, 0);
  await page.setContent(html);
  await expect(page.locator(".results-summary .mascot-cheer")).toBeVisible();
  await expect(page.locator(".results-summary .m-bubble")).not.toBeEmpty();
  const html2 = await page.evaluate(() => {
    const o = Objectives.forChapter(6, "maths", "fractions").slice(0, 2);
    return Learn.summaryHTML(o.map((x, i) => ({ type: "answer", cls: 6, subject: "maths", chapter: "fractions", obj: x.id, ok: i > 0, hints: 0, source: "quiz" })), []);
  });
  await page.setContent(html2);
  await expect(page.locator(".results-summary .mascot-think")).toBeVisible();
});

test("Class 2 subject tiles are bold with a picture; the large white name has 3:1 on every tile and the count sits on a white pill", async ({ page }) => {
  await seed(page, { cls: 2 });
  for (const h of ["/#/", "/#/learn"]) {
    await page.goto(h);
    const tiles = page.locator(".subject-card");
    await expect(tiles.first()).toBeVisible();
    for (const c of await tiles.evaluateAll((els) => els.map((e) => e.className))) expect(c).toContain("bold");
    await expect(page.locator(".subject-card.bold .subject-pic svg").first()).toBeVisible();
  }
  const res = await page.evaluate(() => {
    const cv = document.createElement("canvas").getContext("2d");
    const lum = (css) => {
      cv.clearRect(0, 0, 1, 1); cv.fillStyle = "#000"; cv.fillStyle = css; cv.fillRect(0, 0, 1, 1);
      const [r, g, b] = [...cv.getImageData(0, 0, 1, 1).data].slice(0, 3).map((v) => { v /= 255; return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); });
      return 0.2126 * r + 0.7152 * g + 0.0722 * b;
    };
    return [...document.querySelectorAll(".subject-card.bold")].map((el) => {
      const name = el.querySelector(".subject-name");
      const meta = el.querySelector(".subject-meta");
      const cs = getComputedStyle(name);
      return {
        c1: el.style.getPropertyValue("--c1"),
        ratio: 1.05 / (lum(el.style.getPropertyValue("--c1")) + 0.05),
        size: parseFloat(cs.fontSize),
        weight: Number(cs.fontWeight),
        metaRatio: meta ? (lum(getComputedStyle(meta).backgroundColor) + 0.05) / (lum(getComputedStyle(meta).color) + 0.05) : 99,
      };
    });
  });
  expect(res.length).toBeGreaterThan(3);
  for (const r of res) {
    expect(r.ratio, `tile ${r.c1}`).toBeGreaterThanOrEqual(3);
    expect(r.size, "large text").toBeGreaterThanOrEqual(18.66);
    expect(r.weight).toBeGreaterThanOrEqual(700);
    expect(r.metaRatio, "count on its pill").toBeGreaterThanOrEqual(4.5);
  }
});
