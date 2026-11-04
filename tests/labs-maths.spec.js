const { test, expect, seed, readStore, current } = require("./helpers");

// Maths Studio (js/labs/placevalue.js, fractionwall.js, algebratiles.js, geoboard.js, grapher.js): free-exploration manipulatives,
// each with guided investigations (predict, try, notice, explain). They are listed in Explore (Maths Studio) and in the chapter hub's
// Explore section, save an experiment record that survives a reload, and work in Punjabi and at phone width.

const url = (id, c, s, ch) => `/#/lab/${id}/${c}/${s}/${ch}`;
const PV3 = [3, "maths", "numbers-up-to-999"];
const PV5 = [5, "maths", "large-numbers"];
const FW4 = [4, "maths", "fractions"];
const FW6 = [6, "maths", "fractions"];
const AT8 = [8, "maths", "algebra-play"];
const GB6 = [6, "maths", "perimeter-and-area"];
const GR10 = [10, "maths", "quadratic-equations"];
const open = async (page, id, [c, s, ch], opts = {}) => {
  await seed(page, { name: "Asha", cls: c, ...opts });
  await page.goto(url(id, c, s, ch));
  await expect(page.locator(".vl")).toBeVisible();
};
const live = (page, label) => page.locator("[data-live] > div").filter({ has: page.locator("dt").getByText(label, { exact: true }) }).locator("dd");
const rows = (page) => page.locator("[data-table] tbody tr");
const records = async (page) => current(await readStore(page)).labs.records;
const tray = (page, i, n = 1) => page.locator(`[data-tray="${i}"]`).click({ clickCount: n, delay: 0 });
const noOverflow = async (page) => expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth + 1)).toBe(true);

test("explore: Class 6 sees the place-value, fraction and geometry tools under the Maths Studio, Class 9 sees the graph explorer", async ({ page }) => {
  await seed(page, { name: "Asha", cls: 6 });
  await page.goto("/#/explore");
  const area = page.locator("#area-maths");
  await expect(area).toContainText("Maths Studio");
  for (const t of ["Place-value blocks", "Fraction wall and area model", "Geometry board"]) await expect(area).toContainText(t);
  await expect(area).not.toContainText("Graph explorer");
  await page.locator('[data-explore="lab-geoboard"]').getByRole("link", { name: /Open lab/ }).first().click();
  await expect(page).toHaveURL(/#\/lab\/geoboard\/6\//);
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Geometry board");
  await expect(page.locator(".vl .sim-step h3")).toHaveCount(4);
});

test("explore: Class 9 lists the graph explorer, the geometry board and the algebra tiles", async ({ page }) => {
  await seed(page, { name: "Asha", cls: 9 });
  await page.goto("/#/explore");
  const area = page.locator("#area-maths");
  for (const t of ["Graph explorer", "Geometry board", "Algebra tiles"]) await expect(area).toContainText(t);
  await expect(area).not.toContainText("Place-value blocks");
});

test("chapter hub: Explore lists the studio tool that belongs to the chapter and opens it", async ({ page }) => {
  await seed(page, { name: "Asha", cls: 8 });
  await page.goto("/#/chapter/8/maths/algebra-play/explore");
  const card = page.locator(".lab-card").filter({ hasText: "Algebra tiles" });
  await expect(card).toBeVisible();
  await card.click();
  await expect(page).toHaveURL(/#\/lab\/algebratiles\/8\/maths\/algebra-play$/);
  await expect(page.locator(".topbar-title")).toHaveText("Algebra tiles"); // not getByRole("heading"): for a moment the chapter page and the lab page both have an h1
  const ids = (a) => page.evaluate(([c, s, h]) => Labs.forChapter(c, s, h).map((l) => l.id).sort(), a);
  expect(await ids([10, "maths", "quadratic-equations"])).toEqual(["algebratiles", "grapher"]);
  expect(await ids([4, "maths", "fractions"])).toEqual(["fractionwall"]);
  expect(await ids([3, "maths", "numbers-up-to-999"])).toEqual(["placevalue"]);
  expect(await ids([6, "mathspb", "algebra"])).toEqual(["algebratiles"]);
  expect(await ids([10, "maths", "coordinate-geometry"])).toEqual(["geoboard"]);
});

test("place value: 2 hundreds, 4 tens, 5 ones show 245 in digits, words and expanded form, and regrouping keeps it", async ({ page }) => {
  await open(page, "placevalue", PV3);
  await expect(page.locator("[data-record]")).toBeDisabled();
  await expect(page.locator("[data-chart] .pv-col")).toHaveCount(3);
  await tray(page, 2, 2);
  await tray(page, 1, 4);
  await tray(page, 0, 5);
  await expect(live(page, "Number")).toHaveText("245");
  await expect(live(page, "In words (English)")).toHaveText("two hundred forty-five");
  await expect(live(page, "Expanded form")).toHaveText("200 + 40 + 5");
  await expect(live(page, "Number of blocks")).toHaveText("11");
  await expect(page.locator('[data-regroup="0"]')).toBeDisabled();
  // break a ten into ten ones: the number does not change
  await page.locator('[data-break="1"]').click();
  await expect(live(page, "Number")).toHaveText("245");
  await expect(live(page, "Number of blocks")).toHaveText("20");
  await expect(live(page, "Blocks used")).toContainText("3 tens");
  await expect(live(page, "Blocks used")).toContainText("15 ones");
  await expect(page.locator('[data-n="0"]')).toHaveText("15");
  await expect(page.locator('[data-regroup="0"]')).toBeEnabled();
  await page.locator('[data-regroup="0"]').click();
  await expect(page.locator('[data-n="0"]')).toHaveText("5");
  await expect(page.locator('[data-n="1"]')).toHaveText("4");
  await expect(live(page, "Number")).toHaveText("245");
  // a block dropped into the wrong column is refused with the reason
  await page.locator('[data-tray="1"]').dragTo(page.locator('[data-col="2"]'));
  await expect(page.locator("[data-msg]")).toContainText("belongs in the Tens column");
  await expect(page.locator('[data-n="2"]')).toHaveText("2");
  await noOverflow(page);
});

test("place value: make 245 two ways, the record is saved and survives a reload", async ({ page }) => {
  await open(page, "placevalue", PV3);
  await page.locator("[data-make]").fill("245");
  await page.locator("[data-makego]").click();
  await expect(live(page, "Number")).toHaveText("245");
  // recording is off until the prediction is made, and the number must be 245
  await expect(page.locator("[data-record]")).toBeDisabled();
  await page.locator('[data-pp="1"]').click();
  await page.locator("[data-clear-chart]").click();
  await page.locator("[data-record]").click();
  await expect(page.locator("[data-msg]")).toContainText("Make the number 245 first");
  await expect(rows(page)).toHaveCount(0);
  await page.locator("[data-make]").fill("245");
  await page.locator("[data-makego]").click();
  await page.locator("[data-record]").click();
  await page.locator('[data-break="1"]').click();
  await page.locator("[data-record]").click();
  await expect(rows(page)).toHaveCount(2);
  await expect(rows(page).nth(0)).toContainText("2 hundreds, 4 tens, 5 ones");
  await expect(rows(page).nth(1)).toContainText("2 hundreds, 3 tens, 15 ones");
  await expect(page.locator("[data-fair]")).toContainText("Fair test");
  await page.locator('[data-ee="0"]').click();
  await page.locator("[data-check]").click();
  await expect(page.locator("[data-fb]")).toContainText("That is what your runs show.");
  const rec = (await records(page)).find((r) => r.lab === "placevalue");
  expect(rec.prediction.ok).toBe(true);
  expect(rec.conclusion.ok).toBe(true);
  expect(rec.observations.map((o) => o.value)).toEqual(["245", "245"]);
  expect(rec.observations.map((o) => o.blocks)).toEqual(["11", "20"]);
  expect(rec.cls).toBe(3);
  await page.reload();
  await expect(page.locator("[data-pastn]")).toContainText("1");
  await expect(page.locator(".vl-pastlist")).toContainText("Can 245 be made");
});

test("place value: Indian and international grouping and words for the same number", async ({ page }) => {
  await open(page, "placevalue", PV5);
  await expect(page.locator("[data-chart] .pv-col")).toHaveCount(7);
  await page.locator("[data-make]").fill("1234567");
  await page.locator("[data-makego]").click();
  await expect(live(page, "Number")).toHaveText("12,34,567");
  await expect(live(page, "In words (English)")).toHaveText("twelve lakh thirty-four thousand five hundred sixty-seven");
  await expect(live(page, "Expanded form")).toHaveText("10,00,000 + 2,00,000 + 30,000 + 4,000 + 500 + 60 + 7");
  await page.locator("[data-sys]").selectOption("intl");
  await expect(live(page, "Number")).toHaveText("1,234,567");
  await expect(live(page, "In words (English)")).toHaveText("one million two hundred thirty-four thousand five hundred sixty-seven");
  await page.locator("[data-make]").fill("9999999");
  await page.locator("[data-makego]").click();
  await expect(live(page, "In words (English)")).toHaveText("nine million nine hundred ninety-nine thousand nine hundred ninety-nine");
  await page.locator("[data-sys]").selectOption("in");
  await expect(live(page, "Number")).toHaveText("99,99,999");
  await expect(live(page, "In words (English)")).toHaveText("ninety-nine lakh ninety-nine thousand nine hundred ninety-nine");
  await page.locator("[data-make]").fill("12345678");
  await page.locator("[data-makego]").click();
  await expect(page.locator("[data-msg]")).toContainText("Choose a whole number from 0 to 99,99,999");
  await noOverflow(page);
});

test("place value: an international learner starts with the international system", async ({ page }) => {
  await seed(page, { name: "Sam", cls: 5, board: "intl", student: {} });
  await page.addInitScript(() => {
    try {
      const k = "vidya:v1";
      const d = JSON.parse(localStorage.getItem(k));
      Object.assign(d.students[0].profile, { country: "us", year: "g5", currency: "$" });
      localStorage.setItem(k, JSON.stringify(d));
    } catch (e) {}
  });
  await page.goto(url("placevalue", 5, "maths", "large-numbers"));
  await expect(page.locator(".vl")).toBeVisible();
  await expect(page.locator("[data-sys]")).toHaveValue("intl");
});

test("fraction wall: shading 2 bricks in the fourths shows 2/4 = 1/2 and the equal fractions on the wall", async ({ page }) => {
  await open(page, "fractionwall", FW4);
  await expect(page.locator("[data-cell]")).toHaveCount(78); // 1 + 2 + ... + 12
  await expect(page.locator('[data-mode="area"]')).toHaveCount(0); // the area model starts in Class 6
  await page.locator('[data-cell="4,2"]').click();
  await expect(live(page, "Shaded fraction")).toHaveText("2/4");
  await expect(live(page, "Simplest form")).toHaveText("2/4 = 1/2");
  await expect(live(page, "Equal fractions on the wall")).toHaveText("1/2 = 2/4 = 3/6 = 4/8 = 5/10 = 6/12");
  await expect(page.locator(".fw-end")).toHaveCount(6); // the brick that ends in the same place in each of the 6 bars
  // comparing: 3/4 and 2/3
  await page.locator('[data-cell="4,3"]').click();
  await page.locator('[data-cell="3,2"]').click();
  await expect(live(page, "Comparison")).toHaveText("2/3 < 3/4");
  // tapping the last shaded brick again takes it off
  await page.locator('[data-cell="3,2"]').click();
  await expect(page.locator('[data-cell="3,2"]')).toHaveAttribute("aria-pressed", "false");
  await expect(page.locator('[data-cell="3,1"]')).toHaveAttribute("aria-pressed", "true");
  await noOverflow(page);
});

test("fraction wall: keyboard moves between bricks, and the equal-fractions investigation records two runs", async ({ page }) => {
  await open(page, "fractionwall", FW4);
  await page.locator('[data-cell="2,1"]').focus();
  await page.keyboard.press("ArrowDown"); // the brick of the next bar that ends nearest
  await expect(page.locator('[data-cell="3,2"]')).toBeFocused();
  await page.keyboard.press("ArrowLeft");
  await expect(page.locator('[data-cell="3,1"]')).toBeFocused();
  await page.keyboard.press("ArrowRight");
  await page.keyboard.press("Enter");
  await expect(live(page, "Shaded fraction")).toHaveText("2/3");
  await page.locator("[data-clearwall]").click();
  await page.locator('[data-pp="1"]').click();
  await page.locator('[data-cell="2,1"]').click();
  await page.locator("[data-record]").click();
  await page.locator('[data-cell="4,2"]').click();
  await page.locator("[data-record]").click();
  await expect(rows(page)).toHaveCount(2);
  await expect(rows(page).nth(1)).toContainText("2/4");
  await expect(rows(page).nth(1)).toContainText("1/2");
  await page.locator('[data-ee="0"]').click();
  await page.locator("[data-check]").click();
  await expect(page.locator("[data-fb]")).toContainText("That is what your runs show.");
});

test("area model: 1/2 × 1/3 = 1/6, one small rectangle out of six", async ({ page }) => {
  await open(page, "fractionwall", FW6);
  await page.locator('[data-mode="area"]').click();
  await expect(page.locator("[data-areapane]")).toBeVisible();
  await page.locator('[data-inv="2"]').click();
  await expect(live(page, "Product")).toHaveText("1/2 × 1/3 = 1/6");
  await expect(live(page, "Overlap")).toHaveText("1 of 6 small rectangles");
  await expect(page.locator("[data-area]")).toHaveAttribute("aria-label", /1 of the 6 small rectangles are in both/);
  // 2/3 × 3/4 = 6/12 = 1/2
  await page.locator('[data-inv="3"]').click();
  await expect(live(page, "Product")).toHaveText("2/3 × 3/4 = 6/12 = 1/2");
  await page.locator('[data-ar="d"][data-d="-1"]').click();
  await expect(live(page, "Product")).toHaveText("2/3 × 3/3 = 6/9 = 2/3");
  await page.locator('[data-ar="b"][data-d="-1"]').click();
  await page.locator('[data-ar="b"][data-d="-1"]').click();
  await expect(page.locator('[data-v="a"]')).toHaveText("1");
  await noOverflow(page);
});

test("algebra tiles: (x + 2)(x + 3) expands to x² + 5x + 6, and x² + 5x + 6 factorises back", async ({ page }) => {
  await open(page, "algebratiles", AT8);
  await page.locator('[data-mode="expand"]').click();
  await expect(live(page, "Product")).toHaveText("(x + 2)(x + 3)");
  await expect(live(page, "Expanded")).toHaveText("x² + 5x + 6");
  await expect(live(page, "Check with x = 10")).toHaveText("156 = 156");
  await page.locator('[data-st="b"][data-d="1"]').click();
  await expect(live(page, "Expanded")).toHaveText("x² + 6x + 8");
  await page.locator('[data-st="a"][data-d="-1"]').click({ clickCount: 3 });
  await expect(live(page, "Product")).toHaveText("(x − 1)(x + 4)");
  await expect(live(page, "Expanded")).toHaveText("x² + 3x − 4");
  await page.locator('[data-mode="factor"]').click();
  await expect(live(page, "Expression")).toHaveText("x² + 5x + 6");
  await expect(live(page, "Factorised")).toHaveText("(x + 2)(x + 3)");
  await page.locator('[data-st="q"][data-d="1"]').click();
  await expect(live(page, "Factorised")).toHaveText("not possible with whole numbers");
  await expect(page.locator("[data-canvas]")).toHaveAttribute("aria-label", /No two whole numbers add to 5 and multiply to 7/);
  await noOverflow(page);
});

test("algebra tiles: zero pairs, and solving 2x + 1 = x + 6 by taking the same from both sides", async ({ page }) => {
  await open(page, "algebratiles", AT8);
  await page.locator('[data-inv="0"]').click();
  await expect(live(page, "Simplified")).toHaveText("x");
  await expect(live(page, "Zero pairs")).toHaveText("2");
  await page.locator("[data-zero]").click();
  await expect(live(page, "Zero pairs")).toHaveText("0");
  await expect(live(page, "Simplified")).toHaveText("x");
  await expect(live(page, "Tiles on the board")).toHaveText("1 x tile");
  // add a tile by tapping, and take one off by tapping it on the board
  await page.locator('[data-add="n1"]').click();
  await expect(live(page, "Zero pairs")).toHaveText("1");
  await page.locator('[data-rm="n1"]').first().click();
  await expect(live(page, "Zero pairs")).toHaveText("0");
  await page.locator('[data-inv="1"]').click();
  await expect(live(page, "Equation")).toHaveText("2x + 1 = x + 6");
  await page.locator('[data-pp="0"]').click();
  await page.locator("[data-record]").click();
  await page.getByRole("button", { name: "Take 1 x from both sides" }).click();
  await expect(live(page, "Equation")).toHaveText("x + 1 = 6");
  await page.locator("[data-record]").click();
  await page.getByRole("button", { name: "Take 1 from both sides" }).click();
  await expect(live(page, "Equation")).toHaveText("x = 5");
  await expect(live(page, "Solution")).toHaveText("x = 5");
  await page.locator("[data-record]").click();
  await expect(rows(page)).toHaveCount(3);
  await page.locator('[data-ee="0"]').click();
  await page.locator("[data-check]").click();
  await expect(page.locator("[data-fb]")).toContainText("That is what your runs show.");
  const rec = (await records(page)).find((r) => r.lab === "algebratiles");
  expect(rec.observations.map((o) => o.result)).toEqual(["not yet solved", "not yet solved", "x = 5"]);
  expect(rec.prediction.ok).toBe(true);
  // dividing both sides appears only when every number can be divided
  await page.locator('[data-inv="2"]').click();
  await page.getByRole("button", { name: "Take 1 x from both sides" }).click();
  await page.getByRole("button", { name: "Take 1 from both sides" }).click({ clickCount: 2 });
  await expect(live(page, "Equation")).toHaveText("2x = 8");
  await page.getByRole("button", { name: "Divide both sides by 2" }).click();
  await expect(live(page, "Solution")).toHaveText("x = 4");
});

test("geoboard: a 3 by 2 rectangle has area 6, perimeter 10, Pick's check 2 + 10/2 − 1, and 2 lines of symmetry", async ({ page }) => {
  await open(page, "geoboard", GB6);
  await expect(page.locator("[data-peg]")).toHaveCount(81);
  for (const p of ["1,1", "4,1", "4,3", "1,3"]) await page.locator(`[data-peg="${p}"]`).click();
  await expect(live(page, "Next step")).toHaveText("Tap the first peg to close the shape.");
  await page.locator('[data-peg="1,1"]').click();
  await expect(live(page, "Shape")).toHaveText("Rectangle");
  await expect(live(page, "Area")).toHaveText("6 square units");
  await expect(live(page, "Perimeter")).toHaveText("10 units");
  await expect(live(page, "Side lengths")).toHaveText("3, 2, 3, 2 units");
  await expect(live(page, "Pick's check")).toHaveText("2 + 10/2 − 1 = 6 ✓");
  await expect(live(page, "Angles")).toContainText("90°, 90°, 90°, 90° (4 right)");
  await expect(live(page, "Lines of symmetry")).toHaveText("2");
  await expect(page.locator(".gb-sym")).toHaveCount(2);
  await expect(page.locator(".gb-peg.gb-in")).toHaveCount(2);
  // a tilted square: sides √5, area 5
  await page.locator("[data-gbclear]").click();
  await page.locator("[data-pre]").selectOption({ label: "Tilted square" });
  await expect(live(page, "Shape")).toHaveText("Square");
  await expect(live(page, "Area")).toHaveText("8 square units");
  await expect(live(page, "Perimeter")).toHaveText("≈ 11.31 units");
  await expect(live(page, "Lines of symmetry")).toHaveText("4");
  await noOverflow(page);
});

test("geoboard: a band that crosses itself is refused, a corner can be moved by tapping, and the keyboard draws a shape", async ({ page }) => {
  await open(page, "geoboard", GB6);
  for (const p of ["1,1", "4,3", "4,1", "1,3"]) await page.locator(`[data-peg="${p}"]`).click();
  await page.locator("[data-close]").click();
  await expect(live(page, "Shape")).toHaveText("Not a simple shape");
  await expect(page.locator("[data-msg]")).toHaveClass(/is-bad/);
  // fix it: pick up corner 2 and put it on another peg
  await page.locator('[data-peg="4,3"]').click();
  await page.locator('[data-peg="4,1"]').click(); // already a corner: ignored with a message
  await page.locator('[data-peg="4,3"]').click();
  await page.locator('[data-peg="1,1"]').click();
  await page.locator("[data-gbclear]").click();
  // keyboard: focus a peg, arrow to others, Enter to add a corner
  await page.locator('[data-peg="0,0"]').focus();
  await page.keyboard.press("Enter");
  await page.keyboard.press("ArrowRight");
  await page.keyboard.press("ArrowRight");
  await page.keyboard.press("ArrowRight");
  await page.keyboard.press("Enter");
  await expect(page.locator('[data-peg="3,0"]')).toBeFocused();
  await page.keyboard.press("ArrowUp");
  await page.keyboard.press("ArrowUp");
  await page.keyboard.press("ArrowUp");
  await page.keyboard.press("ArrowUp");
  await page.keyboard.press("Enter");
  await page.locator("[data-close]").click();
  await expect(live(page, "Shape")).toHaveText("Right scalene triangle");
  await expect(live(page, "Area")).toHaveText("6 square units");
  await expect(live(page, "Perimeter")).toHaveText("12 units");
  await expect(live(page, "Pick's check")).toHaveText("3 + 8/2 − 1 = 6 ✓");
});

test("geoboard: reflecting a triangle keeps its area and perimeter, and the record has the shape and its image", async ({ page }) => {
  await open(page, "geoboard", GB6);
  await page.locator('[data-inv="3"]').click();
  await expect(page.locator('[data-mode="transform"]')).toHaveAttribute("aria-pressed", "true");
  await expect(live(page, "Area")).toHaveText("3 square units");
  await expect(live(page, "Image")).toHaveText("Same size and shape as the original (congruent).");
  await expect(live(page, "Image area and perimeter")).toContainText("3 square units");
  await expect(page.locator(".gb-image")).toHaveCount(1);
  await page.locator('[data-pp="1"]').click();
  await page.locator("[data-record]").click();
  await expect(rows(page)).toHaveCount(2);
  await expect(rows(page).nth(0)).toContainText("Original");
  await expect(rows(page).nth(1)).toContainText("Image");
  await page.locator("[data-kind]").selectOption("rotate");
  await expect(live(page, "Image")).toHaveText("Same size and shape as the original (congruent).");
  await page.locator("[data-kind]").selectOption("translate");
  await page.locator('[data-tf="dx"][data-d="1"]').click({ clickCount: 5 });
  await expect(live(page, "Image")).toHaveText("Part of the image is off the board.");
  await page.locator('[data-ee="0"]').click();
  await page.locator("[data-check]").click();
  await expect(page.locator("[data-fb]")).toContainText("That is what your runs show.");
  const rec = (await records(page)).find((r) => r.lab === "geoboard");
  expect(rec.observations.map((o) => o.area)).toEqual(["3", "3"]);
  await page.reload();
  await expect(page.locator("[data-pastn]")).toContainText("1");
});

test("graph explorer: y = x² − 5x + 6 shows the roots 2 and 3, the intercept and the turning point; raising c removes the roots", async ({ page }) => {
  await open(page, "grapher", GR10);
  await page.locator('[data-inv="3"]').click();
  await expect(live(page, "Equation")).toHaveText("y = x² − 5x + 6");
  await expect(live(page, "x-intercepts (roots)")).toHaveText("x = 2 and x = 3");
  await expect(live(page, "y-intercept")).toHaveText("(0, 6)");
  await expect(live(page, "About this graph")).toHaveText("Turning point (2.5, −0.25), the lowest point.");
  await page.locator('[data-p="A"][data-k="c"]').fill("8");
  await expect(live(page, "Equation")).toHaveText("y = x² − 5x + 8");
  await expect(live(page, "x-intercepts (roots)")).toHaveText("none: the curve does not touch the x-axis");
  await page.locator('[data-p="A"][data-k="c"]').fill("4");
  await expect(live(page, "x-intercepts (roots)")).toHaveText("x = 1 and x = 4");
  // tracing a point
  await page.locator("[data-x]").fill("2");
  await expect(live(page, "Tracing point")).toHaveText("(2, −2)");
  await noOverflow(page);
});

test("graph explorer: the roots investigation records runs, and the record survives a reload", async ({ page }) => {
  await open(page, "grapher", GR10);
  await page.locator('[data-inv="3"]').click();
  await expect(page.locator('[data-inv="3"]')).toContainText("Roots of y = x² − 5x + c");
  await page.locator('[data-pp="1"]').click();
  await page.locator("[data-record]").click();
  await page.locator('[data-p="A"][data-k="c"]').fill("8");
  await page.locator("[data-record]").click();
  await expect(rows(page)).toHaveCount(2);
  await expect(rows(page).nth(0)).toContainText("2, 3");
  await expect(rows(page).nth(1)).toContainText("—");
  await expect(page.locator("[data-fair]")).toContainText("Fair test: you changed only c");
  await page.locator('[data-ee="0"]').click();
  await page.locator("[data-check]").click();
  await expect(page.locator("[data-fb]")).toContainText("That is what your runs show.");
  const rec = (await records(page)).find((r) => r.lab === "grapher");
  expect(rec.prediction.ok).toBe(true);
  expect(rec.observations.map((o) => o.nroots)).toEqual(["2", "0"]);
  expect(rec.extra.A.p).toEqual({ a: 1, b: -5, c: 8 });
  await page.reload();
  await expect(page.locator("[data-pastn]")).toContainText("1");
});

test("graph explorer: two lines meet at (1, 2); parallel lines never meet; sine and y = a/x show their features", async ({ page }) => {
  await seed(page, { name: "Asha", cls: 11 });
  await page.goto(url("grapher", 11, "maths", "trigonometric-functions"));
  await expect(page.locator(".vl")).toBeVisible();
  await expect(page.locator("[data-inv]")).toHaveCount(6);
  await page.locator('[data-inv="2"]').click();
  await expect(live(page, "Graph A")).toHaveText("y = x + 1");
  await expect(live(page, "Graph B")).toHaveText("y = −x + 3");
  await expect(live(page, "Where they meet")).toHaveText("(1, 2)");
  await page.locator('[data-p="B"][data-k="m"]').fill("1");
  await expect(live(page, "Where they meet")).toHaveText("They do not meet in the window.");
  await page.locator('[data-inv="4"]').click();
  await expect(live(page, "Equation")).toHaveText("y = 2sin(x)");
  await expect(live(page, "About this graph")).toHaveText("Amplitude 2, period 2π/b = 6.28.");
  await page.locator('[data-p="A"][data-k="b"]').fill("2");
  await expect(live(page, "About this graph")).toHaveText("Amplitude 2, period 2π/b = 3.14.");
  await page.locator('[data-inv="5"]').click();
  await expect(live(page, "Equation")).toHaveText("y = 6/x");
  await expect(live(page, "y-intercept")).toHaveText("none: the graph never reaches x = 0");
  await page.locator("[data-x]").fill("3");
  await expect(live(page, "Tracing point")).toHaveText("(3, 2)");
  await page.locator("[data-x]").fill("0");
  await expect(live(page, "Tracing point")).toHaveText("not defined at x = 0");
});

test("Punjabi: the place-value blocks and the geometry board are translated", async ({ page }) => {
  await open(page, "placevalue", PV3, { lang: "pa" });
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("ਸਥਾਨਕ ਮੁੱਲ ਦੇ ਬਲਾਕ");
  await expect(page.locator(".vl")).toContainText("ਇਕਾਈਆਂ");
  await expect(page.locator(".vl")).toContainText("ਸੈਂਕੜੇ");
  await expect(page.locator(".vl")).not.toContainText("Place-value chart");
  await tray(page, 0, 3);
  await expect(live(page, "ਸੰਖਿਆ")).toHaveText("3");
  await page.goto(url("geoboard", 6, "maths", "perimeter-and-area"));
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("ਜਿਓਮੈਟਰੀ ਬੋਰਡ");
  await expect(page.locator(".vl")).toContainText("ਸਮਰੂਪਤਾ");
});

test("dark mode and phone width: the studio tools fit the screen", async ({ page }) => {
  await open(page, "algebratiles", AT8);
  await page.evaluate(() => (document.documentElement.dataset.theme = "dark"));
  for (const m of ["build", "expand", "factor", "solve"]) {
    await page.locator(`[data-mode="${m}"]`).click();
    await noOverflow(page);
  }
  for (const [id, L] of [["placevalue", PV5], ["fractionwall", FW6], ["geoboard", GB6], ["grapher", GR10]]) {
    await page.goto(url(id, ...L));
    await expect(page.locator(".vl")).toBeVisible();
    await noOverflow(page);
    const box = await page.locator(".pv-chart, svg.fw-svg").first().boundingBox();
    expect(box.width).toBeLessThanOrEqual(412);
  }
});
