const { test, expect, seed, CLASSES, BOARDS, expectedSubjects } = require("./helpers");

// 13. Every class x both boards: Home renders with no console errors (the shared fixture fails on any) ---------------
for (const board of BOARDS) {
  for (const cls of CLASSES) {
    test(`home renders: Class ${cls}, ${board.toUpperCase()}`, async ({ page }) => {
      await seed(page, { name: "Asha", cls, board });
      await page.goto("/#/");
      await expect(page.getByRole("heading", { level: 1 })).toContainText("Namaste, Asha");
      await expect(page.locator(".home-head .sub")).toContainText(`Class ${cls} · ${board.toUpperCase()}`);
      const names = expectedSubjects(cls, board);
      await expect(page.locator(".subject-card")).toHaveCount(names.length);
      expect((await page.locator(".subject-card .subject-name").allTextContents()).sort()).toEqual(names.sort());
      await expect(page.locator(".subject-card .subject-meta").first()).toContainText(/chapters/);
      // Today's question loads one subject in the background; wait for it to finish so its errors are caught too.
      await page.waitForLoadState("networkidle");
      await expect(page.locator("#tabbar a, #sidebar a").first()).toBeAttached();
    });
  }
}
