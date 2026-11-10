// Parent PIN (js/pin.js): the Parent area and the actions that can't be undone ask for it.
const { test, expect, seed, readStore, openParent } = require("./helpers");

test("parent PIN: the first visit sets it, a wrong PIN is refused, the right one opens the Parent area", async ({ page }) => {
  await seed(page, { name: "Asha", cls: 6 });
  // First visit: choose a PIN (twice), then the summary shows.
  await openParent(page, "4321");
  await expect(page.locator("h1, .topbar h1").first()).toContainText("For parents");
  await expect(page.locator(".stats-4")).toBeVisible();
  // Saved as a salted hash with the device settings, never the PIN itself, and not in a backup.
  const store = await readStore(page);
  expect(store.pin).toMatchObject({ salt: expect.any(String), hash: expect.any(String) });
  expect(JSON.stringify(store)).not.toContain("4321");
  expect(await page.evaluate(() => Store.exportData())).not.toContain(store.pin.hash);

  // After a reload it's locked again: a wrong PIN is refused, the right one opens it.
  await page.reload();
  await expect(page.locator(".pin-box")).toBeVisible();
  await expect(page.locator(".stats-4")).toHaveCount(0);
  await page.locator("#pin-in").fill("1111");
  await expect(page.locator(".pin-msg")).toContainText("isn't right");
  await page.locator("#pin-in").fill("4321");
  await expect(page.locator(".pin-box")).toHaveCount(0);
  await expect(page.locator(".stats-4")).toBeVisible();
});

test("parent PIN: Cancel keeps the Parent area locked, and Reset progress asks for the PIN", async ({ page }) => {
  await seed(page, { name: "Asha", cls: 6 });
  await openParent(page, "2468"); // sets it
  await page.reload();
  await page.locator(".pin-box [data-pin=cancel]").click();
  await expect(page.locator(".pin-locked")).toContainText("locked");
  await expect(page.locator(".stats-4")).toHaveCount(0);

  await page.goto("/#/settings");
  await expect(page.locator("#pin-card")).toContainText("On.");
  page.on("dialog", (d) => d.accept());
  await page.locator('[data-act="reset"]').click();
  await expect(page.locator(".pin-box")).toBeVisible();
  await page.locator(".pin-box [data-pin=cancel]").click();
  await expect(page.locator(".pin-box")).toHaveCount(0);
});

test("parent PIN: forgot PIN asks a grown-up sum, then a new PIN can be set; Settings can turn it off", async ({ page }) => {
  await seed(page, { name: "Asha", cls: 6 });
  await openParent(page, "1357");
  await page.reload();
  await page.locator(".pin-box [data-pin=forgot]").click();
  const q = await page.locator(".pin-box p").first().textContent();
  const W = { zero: 0, one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, ten: 10, eleven: 11, twelve: 12, thirteen: 13, fourteen: 14, fifteen: 15, sixteen: 16, seventeen: 17, eighteen: 18, nineteen: 19, twenty: 20, thirty: 30, forty: 40, fifty: 50, sixty: 60, seventy: 70, eighty: 80, ninety: 90 };
  const num = (w) => w.split("-").reduce((a, x) => a + W[x], 0);
  const m = /What is ([a-z-]+) times ([a-z-]+)\?/.exec(q);
  expect(m).not.toBeNull();
  await page.locator("#pin-in").fill(String(num(m[1]) * num(m[2])));
  await page.locator(".pin-box [data-pin=ok]").click();
  await expect(page.locator(".pin-box h2")).toContainText("Choose");
  await page.locator("#pin-in").fill("8642");
  await page.locator("#pin-in").fill("8642");
  await expect(page.locator(".stats-4")).toBeVisible();

  // Turn it off in Settings (asks for it; still unlocked, so no question), and the Parent area opens freely... after setting none.
  await page.goto("/#/settings");
  await page.locator('[data-act="pin-off"]').click();
  await expect(page.locator("#pin-card")).toContainText("Off.");
  expect((await readStore(page)).pin).toBeUndefined();
});
