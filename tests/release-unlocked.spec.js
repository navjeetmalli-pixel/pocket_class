// The release lock is lifted (js/release.js): the store apps (Native.is) show Hindi and Punjabi too.
// The lock itself still works with ?lock=1 / window.POCKET_LOCK (tests/release-lock.spec.js).
const { test, expect, seed } = require("./helpers");

test("unlocked: in the phone app, Hindi and Punjabi subjects and app languages are offered", async ({ page }) => {
  // Pretend to be the Capacitor app before the scripts load.
  await page.addInitScript(() => {
    window.Capacitor = { isNativePlatform: () => true, getPlatform: () => "ios", Plugins: {} };
  });
  await seed(page, { name: "Asha", cls: 8, board: "pseb" });
  await page.goto("/#/learn");
  expect(await page.evaluate(() => Native.is)).toBe(true);
  expect(await page.evaluate(() => ["hindi", "hindipb", "punjabi"].some((id) => Release.subjectLocked(id)))).toBe(false);
  expect(await page.evaluate(() => Release.langLocked("pa") || Release.langLocked("hi"))).toBe(false);
  await expect(page.locator("main")).toContainText("Punjabi");
  await page.goto("/#/settings");
  await expect(page.locator("main")).toContainText("ਪੰਜਾਬੀ");
  await expect(page.locator("main")).toContainText("हिंदी");
});
