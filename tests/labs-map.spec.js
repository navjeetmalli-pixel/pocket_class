const { test, expect, seed, readStore, current } = require("./helpers");

// India map explorer (js/labs/india-map.js, js/labs/india-lab.js): five modes (Explore, Find it, Place it, Layers, Punjab close-up),
// each with its own investigation and experiment record. A Class 9 PSEB student has the Physical features chapter, so that is where
// these tests start. (Class 9 CBSE has no chapter for the map.)

const L = { cls: 9, subject: "sstpb", chapter: "geo-physical-features" };
const url = `/#/lab/indiamap/${L.cls}/${L.subject}/${L.chapter}`;
const open = async (page, opts = {}) => {
  await seed(page, { name: "Asha", cls: L.cls, board: "pseb", ...opts });
  await page.goto(url);
  await expect(page.locator(".im-svg")).toBeVisible();
};
const mode = (page, m) => page.locator(`[data-mode="${m}"]`).click();
const info = (page) => page.locator("[data-info]");
const records = async (page) => current(await readStore(page)).labs.records;
const rows = (page) => page.locator("[data-table] tbody tr");

// Where a state (or its tap marker) is on the screen, then a real tap there.
const spot = (page, id) =>
  page.evaluate((id) => {
    const M = IndiaMap;
    const s = M.byId[id];
    const svg = document.querySelector(".im-svg");
    svg.scrollIntoView({ block: "center" });
    let at = s.mark || s.lp;
    if (!s.mark && ["andaman", "lakshadweep"].includes(id)) {
      const r = s.rings[0];
      at = [r.reduce((a, q) => a + q[0], 0) / r.length, r.reduce((a, q) => a + q[1], 0) / r.length];
    }
    const [x, y] = M.proj(at[0], at[1]);
    const pt = svg.createSVGPoint();
    pt.x = x;
    pt.y = y;
    const p = pt.matrixTransform(svg.getScreenCTM());
    return { x: p.x, y: p.y };
  }, id);
const tapState = async (page, id) => {
  const p = await spot(page, id);
  await page.mouse.click(p.x, p.y);
};
const predict = (page, i = 0) => page.locator(`[data-pp="${i}"]`).click();

test("explore: the map is listed under World Explorer, and in the chapter hub of a Class 9 physical features chapter", async ({ page }) => {
  await seed(page, { name: "Asha", cls: 9, board: "pseb" });
  await page.goto("/#/explore");
  await expect(page.locator("#area-world")).toContainText("India map explorer");
  await page.locator('[data-explore="lab-indiamap"]').getByRole("link", { name: /Open lab/ }).first().click();
  await expect(page).toHaveURL(/#\/lab\/indiamap\/9\/sstpb\//);
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("India map explorer");
  await page.goto("/#/chapter/9/sstpb/geo-physical-features/explore");
  const card = page.locator(".lab-card").filter({ hasText: "India map explorer" });
  await expect(card).toBeVisible();
  await card.click();
  await expect(page).toHaveURL(/#\/lab\/indiamap\/9\/sstpb\/geo-physical-features$/);
  expect(await page.evaluate(() => Labs.forChapter(9, "sstpb", "geo-drainage").map((l) => l.id))).toEqual(["indiamap"]);
  expect(await page.evaluate(() => Labs.forChapter(10, "sstpb", "punjab-physical-features").map((l) => l.id))).toEqual(["indiamap"]);
  expect(await page.evaluate(() => Labs.forChapter(11, "geography", "drainage-system").map((l) => l.id))).toEqual(["indiamap"]);
});

test("map: every state and Union Territory is on the map with its name, and the page says the map is not to scale", async ({ page }) => {
  await open(page);
  await expect(page.locator(".im-svg path[data-st]")).toHaveCount(36);
  await expect(page.locator(".im-svg path[data-st][aria-label]")).toHaveCount(36);
  await expect(page.locator(".im-disc")).toContainText("Map not to scale; simplified for learning");
  await expect(page.locator(".im-disc")).toContainText("Survey of India");
  // the external boundary (as depicted by the Survey of India) is drawn, and the scale bar and north arrow are there
  await expect(page.locator(".im-bnd").first()).toBeVisible();
  await expect(page.locator(".im-scale")).toContainText("500 km");
  await expect(page.locator(".im-north")).toContainText("N");
  const names = await page.evaluate(() => IndiaMap.STATES.map((s) => s.name));
  expect(names).toContain("Ladakh");
  expect(names).toContain("Jammu and Kashmir");
  expect(names).toContain("Dadra and Nagar Haveli and Daman and Diu");
  expect(names.length).toBe(36);
  expect(await page.evaluate(() => IndiaMap.byId.andhrapradesh.capital)).toBe("Amaravati");
});

test("explore: tapping Punjab shows the capital Chandigarh, the neighbours and the rivers", async ({ page }) => {
  await open(page);
  await tapState(page, "punjab");
  await expect(info(page)).toContainText("Punjab");
  await expect(info(page).locator("dt", { hasText: "Capital" }).locator("xpath=following-sibling::dd")).toContainText("Chandigarh");
  await expect(info(page)).toContainText("Haryana");
  await expect(info(page)).toContainText("Himachal Pradesh");
  await expect(info(page)).toContainText("Pakistan");
  await expect(info(page)).toContainText("Sutlej, Beas, Ravi");
  await expect(page.locator('.im-svg path[data-st="punjab"]')).toHaveClass(/sel/);
  // a neighbour in the text selects it
  await info(page).locator('[data-pick="haryana"]').click();
  await expect(info(page)).toContainText("Haryana");
  await expect(page.locator('.im-svg path[data-st="haryana"]')).toHaveClass(/sel/);
  // islands and tiny Union Territories can be tapped too
  await tapState(page, "delhi");
  await expect(info(page)).toContainText("New Delhi");
  await tapState(page, "lakshadweep");
  await expect(info(page)).toContainText("Kavaratti");
  await expect(info(page)).toContainText("group of islands");
});

test("explore: the list of places selects a state by keyboard", async ({ page }) => {
  await open(page);
  const kerala = page.locator('.im-list [data-pick="kerala"]');
  await kerala.focus();
  await page.keyboard.press("Enter");
  await expect(info(page).locator("dt", { hasText: "Capital" }).locator("xpath=following-sibling::dd")).toContainText("Thiruvananthapuram");
  await expect(page.locator('.im-svg path[data-st="kerala"]')).toHaveClass(/sel/);
  await expect(page.locator(".im-list [data-pick]")).toHaveCount(36);
  // all 36 buttons are reachable by Tab (none has a negative tabindex)
  expect(await page.locator(".im-list [data-pick][tabindex='-1']").count()).toBe(0);
  // the first one after Kerala in the list is next in the tab order
  await page.keyboard.press("Tab");
  const focused = await page.evaluate(() => document.activeElement && document.activeElement.dataset.pick);
  expect(focused).toBeTruthy();
});

test("explore: direction and distance from the start place, recorded as a run, and the record survives a reload", async ({ page }) => {
  await open(page);
  await tapState(page, "kerala");
  await expect(info(page)).toContainText("From Assam");
  await expect(info(page)).toContainText("South-west");
  await expect(info(page)).toContainText(/about [\d,]+ km/);
  // the run buttons ask for a prediction first
  await page.getByRole("button", { name: "Record this journey" }).click();
  await expect(page.locator("[data-predmsg]")).toContainText("Make your prediction in step 1 first.");
  await predict(page, 0);
  await tapState(page, "kerala");
  await page.getByRole("button", { name: "Record this journey" }).click();
  await expect(rows(page)).toHaveCount(1);
  await expect(rows(page).first()).toContainText("Kerala");
  await expect(rows(page).first()).toContainText("South-west");
  await tapState(page, "arunachalpradesh");
  await expect(info(page)).toContainText("North-east");
  await page.getByRole("button", { name: "Record this journey" }).click();
  await expect(rows(page)).toHaveCount(2);
  await page.locator('[data-ee="0"]').click();
  await page.locator("[data-check]").click();
  await expect(page.locator("[data-fb]")).toContainText("That is what your runs show.");
  const rec = await records(page);
  expect(rec).toHaveLength(1);
  expect(rec[0].lab).toBe("indiamap");
  expect(rec[0].inv).toBe("direction");
  expect(rec[0].observations).toHaveLength(2);
  expect(rec[0].conclusion.ok).toBe(true);
  // the record survives a reload
  await page.reload();
  await expect(page.locator(".im-svg")).toBeVisible();
  await expect(page.locator("[data-pastn]")).toContainText("Your saved experiments: 1");
  expect((await records(page))[0].observations[0].to).toBe("Kerala");
  // and a learning event was logged against the chapter
  const events = current(await readStore(page)).learn;
  expect(JSON.stringify(events || {})).toContain("lab");
});

test("find it: tapping Punjab when asked for Punjab scores 2, a wrong tap gives a clue, two wrong taps highlight the place", async ({ page }) => {
  await open(page);
  await mode(page, "find");
  await expect(page.locator("[data-prompt]")).toHaveText("Find Punjab on the map.");
  // wrong tap: Rajasthan, which touches Punjab, so the clue names neighbours and the region
  await tapState(page, "rajasthan");
  await expect(info(page)).toContainText("Clue: it is in North India. It touches");
  await expect(info(page)).toContainText("Haryana");
  await tapState(page, "kerala");
  await expect(info(page)).toContainText("The place is highlighted.");
  await expect(page.locator('.im-svg path[data-st="punjab"]')).toHaveClass(/hint/);
  await tapState(page, "punjab");
  await expect(info(page)).toContainText("0 points.");
  await page.locator("[data-fnext]").click();
  // the next one: scoring 2 for a first-try answer
  const second = await page.locator("[data-prompt]").textContent();
  const want = await page.evaluate((txt) => IndiaMap.STATES.find((s) => txt.includes(s.name) && txt === `Find ${s.name} on the map.`).id, second);
  await tapState(page, want);
  await expect(info(page)).toContainText("2 points.");
  await expect(info(page)).toContainText("Score 2");
});

test("find it: Punjab is scored 2 on the first tap, and a set of five is recorded", async ({ page }) => {
  await open(page);
  await mode(page, "find");
  await expect(page.locator("[data-prompt]")).toHaveText("Find Punjab on the map.");
  await tapState(page, "punjab");
  await expect(info(page)).toContainText("Yes, that is Punjab. 2 points.");
  await expect(info(page)).toContainText("Score 2");
  await page.locator("[data-fnext]").click();
  // the other four of the set, tapped correctly
  for (let i = 0; i < 4; i++) {
    const txt = await page.locator("[data-prompt]").textContent();
    const id = await page.evaluate((txt) => IndiaMap.STATES.find((s) => txt === `Find ${s.name} on the map.`).id, txt);
    await tapState(page, id);
    await page.locator("[data-fnext]").click();
  }
  await expect(info(page)).toContainText("Set finished: 5 of 5 found on the first try, score 10 of 10.");
  await predict(page, 0);
  await page.getByRole("button", { name: "Record this set" }).click();
  await expect(rows(page)).toHaveCount(1);
  await expect(rows(page).first()).toContainText("States and Union Territories");
  // a second kind: capitals. Capital of Rajasthan is Jaipur, and Chandigarh is never asked (it has two states)
  await page.locator('[data-fkind="capitals"]').click();
  await expect(page.locator("[data-prompt]")).toContainText("whose capital is Jaipur");
  await tapState(page, "rajasthan");
  await expect(info(page)).toContainText("Jaipur is the capital of Rajasthan.");
  const asked = await page.evaluate(() => Labs.calc.indiamap.CAP_ORDER.map((id) => IndiaMap.byId[id].capital));
  expect(asked).not.toContain("Chandigarh");
});

test("find it: rivers and mountains are found by tapping the line", async ({ page }) => {
  await open(page);
  await mode(page, "find");
  await page.locator('[data-fkind="physical"]').click();
  await expect(page.locator("[data-prompt]")).toHaveText("Tap the river Narmada.");
  // the rivers are on the map while this kind is chosen, and tapping a state is not an answer
  await expect(page.locator(".im-rvhit")).toHaveCount(15);
  await page.locator('[data-pick="gujarat"]').dispatchEvent("click");
  await expect(info(page)).toContainText("That is a state.");
  await page.locator('[data-rv="godavari"]').dispatchEvent("click");
  await expect(info(page)).toContainText("Clue: it flows into the Arabian Sea.");
  await page.locator('[data-rv="narmada"]').dispatchEvent("click");
  await expect(info(page)).toContainText("Yes, that is the Narmada.");
  await expect(info(page)).toContainText("1 point.");
});

test("place it: tap a label then its state, wrong placements are explained, a drag works, and the group is recorded", async ({ page }) => {
  await page.setViewportSize({ width: 412, height: 1900 }); // the map and the labels on one screen, so the drag needs no scrolling
  await open(page);
  await mode(page, "place");
  await expect(page.locator(".im-chip")).toHaveCount(5);
  // wrong: Goa on Gujarat
  await page.locator('[data-chip="goa"]').click();
  await expect(info(page)).toContainText("Now tap where Goa is");
  await tapState(page, "gujarat");
  await expect(info(page)).toContainText("That is Gujarat, not Goa.");
  await expect(info(page)).toContainText("Clue: it is in West India. It touches Karnataka, Maharashtra.");
  await tapState(page, "goa");
  await expect(info(page)).toContainText("Goa is correct.");
  await expect(page.locator(".im-chip")).toHaveCount(4);
  // a drag: the Kerala label onto Kerala
  const chip = page.locator('[data-chip="kerala"]');
  await chip.scrollIntoViewIfNeeded();
  const box = await chip.boundingBox();
  const p = await spot(page, "kerala");
  await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
  await page.mouse.down();
  await page.mouse.move(box.x + box.width / 2 + 10, box.y + box.height / 2 - 40, { steps: 3 });
  await page.mouse.move(p.x, p.y, { steps: 6 });
  await page.mouse.up();
  await expect(info(page)).toContainText("Kerala is correct.");
  await expect(page.locator(".im-chip")).toHaveCount(3);
  for (const id of ["gujarat", "maharashtra", "karnataka"]) {
    await page.locator(`[data-chip="${id}"]`).click();
    await tapState(page, id);
  }
  await expect(info(page)).toContainText("All 5 labels are placed.");
  await predict(page, 0);
  await page.getByRole("button", { name: "Record this group" }).click();
  await expect(rows(page)).toHaveCount(1);
  await expect(rows(page).first()).toContainText("West coast");
  await expect(rows(page).first()).toContainText("1"); // one wrong try
});

test("layers: the rivers layer shows the Narmada flowing west into the Arabian Sea through a rift valley", async ({ page }) => {
  await open(page);
  await mode(page, "layers");
  await expect(page.locator(".im-rvhit")).toHaveCount(0);
  await page.locator('[data-tog="rivers"]').click();
  await expect(page.locator('[data-tog="rivers"]')).toHaveAttribute("aria-pressed", "true");
  await expect(page.locator(".im-rvhit")).toHaveCount(15);
  await page.locator('[data-rv="narmada"]').dispatchEvent("click");
  await expect(info(page)).toContainText("Narmada");
  await expect(info(page).locator("dt", { hasText: "Flows into" }).locator("xpath=following-sibling::dd")).toContainText("Arabian Sea");
  await expect(info(page)).toContainText("It flows west through a rift valley.");
  await expect(info(page)).toContainText("Madhya Pradesh");
  await expect(page.locator('[data-rv="narmada"]').locator("xpath=..")).toHaveClass(/sel/);
  // the Godavari flows east into the Bay of Bengal
  await page.locator('[data-rv="godavari"]').dispatchEvent("click");
  await expect(info(page).locator("dt", { hasText: "Flows into" }).locator("xpath=following-sibling::dd")).toContainText("Bay of Bengal");
  // the data says exactly two big peninsular rivers flow west
  const west = await page.evaluate(() => IndiaMap.RIVERS.filter((r) => r.flows === "west" && r.id !== "indus").map((r) => r.id).sort());
  expect(west).toEqual(["narmada", "tapi"]);
  // the other layers
  for (const k of ["ranges", "plateaus", "deserts", "regions"]) await page.locator(`[data-tog="${k}"]`).click();
  await expect(page.locator(".im-rghit")).toHaveCount(6);
  await expect(page.locator("[data-pl]")).toHaveCount(2);
  await expect(page.locator("[data-ds]")).toHaveCount(1);
  await expect(page.locator("[data-rn]")).toHaveCount(5);
  await expect(page.locator(".im-legend")).toContainText("Mountain range");
  await expect(page.locator(".im-legend")).toContainText("Desert");
  // a prompt to explore
  await page.locator(".im-facts summary").first().click();
  await page.locator(".im-facts details summary", { hasText: "Which rivers flow west into the Arabian Sea?" }).click();
  await expect(page.locator(".im-facts")).toContainText("rift valleys");
});

test("layers: record a west-flowing and an east-flowing river and explain; the record keeps the rivers", async ({ page }) => {
  await open(page);
  await mode(page, "layers");
  await page.locator('[data-tog="rivers"]').click();
  await predict(page, 0);
  await page.locator('[data-rv="narmada"]').dispatchEvent("click");
  await page.getByRole("button", { name: "Record this river" }).click();
  await page.locator('[data-rv="godavari"]').dispatchEvent("click");
  await page.getByRole("button", { name: "Record this river" }).click();
  await expect(rows(page)).toHaveCount(2);
  await expect(rows(page).nth(0)).toContainText("Arabian Sea");
  await expect(rows(page).nth(1)).toContainText("Bay of Bengal");
  await page.locator('[data-ee="0"]').click();
  await page.locator("[data-check]").click();
  await expect(page.locator("[data-fb]")).toContainText("rift valleys");
  const rec = await records(page);
  expect(rec[0].inv).toBe("west");
  expect(rec[0].prediction.ok).toBe(true);
  expect(rec[0].observations.map((o) => o.river)).toEqual(["Narmada", "Godavari"]);
});

test("punjab close-up: neighbours, the three rivers, and the regions Majha, Doaba and Malwa", async ({ page }) => {
  await open(page);
  await mode(page, "punjab");
  await expect(page.locator(".im-svg")).toHaveAttribute("viewBox", /./);
  const vb = (await page.locator(".im-svg").getAttribute("viewBox")).split(" ").map(Number);
  expect(vb[2]).toBeLessThan(90); // zoomed in on Punjab, not the whole map
  await expect(page.locator(".im-svg")).toContainText("Haryana");
  await expect(page.locator(".im-svg")).toContainText("Himachal Pradesh");
  await expect(page.locator(".im-svg")).toContainText("Sutlej");
  await expect(page.locator(".im-svg")).toContainText("Beas");
  await expect(page.locator(".im-svg")).toContainText("Ravi");
  await expect(page.locator(".im-svg")).toContainText("Doaba");
  await expect(page.locator('[data-zoom="in"]')).toBeDisabled();
  await page.locator('[data-preg="doaba"]').click();
  await expect(info(page)).toContainText("Between the Beas and the Sutlej");
  await expect(info(page)).toContainText("Jalandhar");
  await predict(page, 0);
  await page.getByRole("button", { name: "Record this region" }).click();
  await page.locator('[data-preg="majha"]').click();
  await expect(info(page)).toContainText("Between the Ravi and the Beas");
  await page.getByRole("button", { name: "Record this region" }).click();
  await expect(rows(page)).toHaveCount(2);
  await page.locator('[data-ee="0"]').click();
  await page.locator("[data-check]").click();
  await expect(page.locator("[data-fb]")).toContainText("Doab comes from do");
  // a neighbour can be tapped in the close-up
  await tapState(page, "himachalpradesh");
  await expect(info(page)).toContainText("Himachal Pradesh");
});

test("zoom buttons: zoom in, move and reset work without pinching", async ({ page }) => {
  await open(page);
  const vb = async () => (await page.locator(".im-svg").getAttribute("viewBox")).split(" ").map(Number);
  const whole = await vb();
  await page.locator('[data-zoom="in"]').click();
  await page.locator('[data-zoom="in"]').click();
  const zoomed = await vb();
  expect(zoomed[2]).toBeLessThan(whole[2] / 1.9);
  await page.locator('[data-pan="r"]').click();
  expect((await vb())[0]).toBeGreaterThan(zoomed[0]);
  await expect(page.locator(".im-svg")).toHaveClass(/im-z2/); // full names show when zoomed
  await page.locator('[data-zoom="reset"]').click();
  expect(await vb()).toEqual(whole);
});

test("the map and its labels are in Punjabi and Hindi", async ({ page }) => {
  await open(page, { lang: "pa" });
  await expect(page.locator('[data-mode="find"]')).toHaveText("ਲੱਭੋ");
  await expect(page.locator('.im-svg path[data-st="punjab"]')).toHaveAttribute("aria-label", "ਪੰਜਾਬ");
  await tapState(page, "punjab");
  await expect(info(page)).toContainText("ਚੰਡੀਗੜ੍ਹ");
  await expect(info(page)).toContainText("ਹਰਿਆਣਾ");
  await expect(page.locator(".im-disc")).toContainText("ਨਕਸ਼ਾ ਪੈਮਾਨੇ ਅਨੁਸਾਰ ਨਹੀਂ ਹੈ");
});

test("hindi: names of states, capitals and rivers are in Devanagari", async ({ page }) => {
  await open(page, { lang: "hi" });
  await tapState(page, "kerala");
  await expect(info(page)).toContainText("तिरुवनंतपुरम");
  await mode(page, "layers");
  await page.locator('[data-tog="rivers"]').click();
  await page.locator('[data-rv="narmada"]').dispatchEvent("click");
  await expect(info(page)).toContainText("नर्मदा");
  await expect(info(page)).toContainText("अरब सागर");
});
