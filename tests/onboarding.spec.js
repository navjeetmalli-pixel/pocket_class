const { test, expect, expectedSubjects, readStore, current, seed } = require("./helpers");

const subjectNames = (page) => page.locator(".subject-card .subject-name").allTextContents();

// 1. Onboarding ---------------------------------------------------------------------------------------------
for (const [cls, board, boardButton, boardLabel] of [
  [6, "cbse", "CBSE / NCERT", "CBSE"],
  [10, "pseb", "PSEB (Punjab Board)", "PSEB"],
  [12, "cbse", "CBSE / NCERT", "CBSE"],
]) {
  test(`onboarding: Class ${cls}, ${boardLabel} lands on home with the right subjects`, { tag: "@desktop" }, async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("heading", { level: 1 })).toHaveText("Your study partner from Class 1 to 12");
    const start = page.getByRole("button", { name: /Start studying/ });
    await expect(start).toBeDisabled(); // needs a class first
    await expect(page.locator("#tabbar")).toBeHidden();
    await expect(page.locator("#sidebar")).toBeHidden();

    await page.locator("#ob-name").fill("Gurpreet");
    await page.getByRole("button", { name: `Class ${cls}`, exact: true }).click();
    await page.getByRole("button", { name: boardButton }).click();
    await expect(start).toBeEnabled();
    await start.click();

    await expect(page.getByRole("heading", { level: 1 })).toContainText("Namaste, Gurpreet");
    await expect(page.locator(".home-head .sub")).toContainText(`Class ${cls} · ${boardLabel}`);
    await expect(page.locator(".subject-card")).toHaveCount(expectedSubjects(cls, board).length);
    expect((await subjectNames(page)).sort()).toEqual(expectedSubjects(cls, board).sort());

    // Saved for the next visit.
    const st = current(await readStore(page));
    expect(st.profile).toEqual({ name: "Gurpreet", cls, board });
    await page.reload();
    await expect(page.getByRole("heading", { level: 1 })).toContainText("Namaste, Gurpreet");
  });
}

test("onboarding: the name is optional", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Class 3", exact: true }).click();
  await page.getByRole("button", { name: /Start studying/ }).click();
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(/^Namaste\s*🙏$/);
  await expect(page.locator(".subject-card")).toHaveCount(expectedSubjects(3, "cbse").length);
  expect((await page.locator(".subject-card .subject-name").allTextContents()).sort()).toEqual(expectedSubjects(3, "cbse").sort());
});

// 2. Language ----------------------------------------------------------------------------------------------
test("language: onboarding switch changes the screen and is remembered", async ({ page }) => {
  await page.goto("/");
  const title = page.getByRole("heading", { level: 1 });
  await expect(title).toHaveText("Your study partner from Class 1 to 12");

  await page.getByRole("button", { name: "ਪੰਜਾਬੀ" }).click();
  await expect(title).toHaveText("ਜਮਾਤ 1 ਤੋਂ 12 ਤੱਕ ਤੁਹਾਡਾ ਪੜ੍ਹਾਈ ਦਾ ਸਾਥੀ");
  await expect(page.getByRole("button", { name: /ਪੜ੍ਹਾਈ ਸ਼ੁਰੂ ਕਰੋ/ })).toBeVisible();
  await expect(page.locator("html")).toHaveAttribute("lang", "pa");

  await page.getByRole("button", { name: "हिंदी" }).click();
  await expect(title).toHaveText("कक्षा 1 से 12 तक आपका पढ़ाई का साथी");
  await expect(page.getByRole("button", { name: /पढ़ाई शुरू करें/ })).toBeVisible();
  await expect(page.locator("html")).toHaveAttribute("lang", "hi");

  // The choice survives a reload, and is used after onboarding.
  await page.reload();
  await expect(title).toHaveText("कक्षा 1 से 12 तक आपका पढ़ाई का साथी");
  await page.locator('[data-cls="5"]').click(); // the buttons are labelled in Hindi now
  await page.getByRole("button", { name: /पढ़ाई शुरू करें/ }).click();
  await expect(page.getByRole("heading", { level: 1 })).toContainText("नमस्ते");
  expect((await readStore(page)).lang).toBe("hi");

  // Back to English from Settings (the language names stay in their own script).
  await page.goto("/#/settings");
  await page.getByRole("button", { name: "English" }).click();
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Settings");
  await expect(page.locator("html")).toHaveAttribute("lang", "en");
});

test("language: Settings → App language (Punjabi, Hindi, English)", { tag: "@desktop" }, async ({ page }) => {
  await seed(page, { name: "Asha", cls: 8 });
  await page.goto("/#/settings");
  const h1 = page.getByRole("heading", { level: 1 });
  await expect(h1).toHaveText("Settings");

  await page.getByRole("button", { name: "ਪੰਜਾਬੀ" }).click();
  await expect(h1).toHaveText("ਸੈਟਿੰਗਾਂ");
  expect((await readStore(page)).lang).toBe("pa");

  await page.getByRole("button", { name: "हिंदी" }).click();
  await expect(h1).toHaveText("सेटिंग्स");

  // Home greets in the chosen language.
  await page.goto("/#/");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("नमस्ते, Asha");
  await expect(page.getByRole("heading", { level: 2, name: "विषय" })).toBeVisible();
  await expect(page.getByRole("heading", { level: 2, name: "पढ़ाई के साधन" })).toBeVisible();

  await page.goto("/#/settings");
  await page.getByRole("button", { name: "English" }).click();
  await expect(h1).toHaveText("Settings");
  await page.goto("/#/");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Namaste, Asha");
  await expect(page.getByRole("heading", { level: 2, name: "Subjects" })).toBeVisible();
  expect((await readStore(page)).lang).toBe("en");
});
