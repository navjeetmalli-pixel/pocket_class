const { test, expect, expectedSubjects, expectedSubjectIds, readStore, current, seed, onboard, openMenu } = require("./helpers");

const subjectNames = (page) => page.locator(".subject-card .subject-name").allTextContents();
const h1 = (page) => page.getByRole("heading", { level: 1 });
const cont = (page) => page.getByRole("button", { name: /^Continue/ });

// Welcome to the Subjects step: Student, board, class and learning view picked.
async function onboardTo(page, { cls, view = "class", board = "cbse" }) {
  await page.goto("/");
  await page.getByRole("button", { name: /Start Learning/ }).click();
  await page.getByRole("button", { name: /I'm a Student/ }).click();
  await cont(page).click();
  await page.locator(`[data-board="${board}"]`).click();
  await cont(page).click();
  await page.getByRole("button", { name: `Class ${cls}`, exact: true }).click();
  await cont(page).click();
  if (view === "subject") await page.locator('[data-view="subject"]').click();
  await cont(page).click();
  await expect(page.locator('.ob[data-step="subjects"]')).toBeVisible();
}

// 1. Onboarding: the Student path -----------------------------------------------------------------------------
test("onboarding: welcome screen, no navigation, then Who is using", { tag: "@desktop" }, async ({ page }) => {
  await page.goto("/");
  await expect(h1(page)).toHaveText("Your world of learning starts here.");
  await expect(page.getByText("Learn", { exact: true })).toBeVisible();
  await expect(page.locator(".ob-facts li")).toHaveText(["Classes 1–12", "CBSE & PSEB", "Works offline"]);
  await expect(page.locator("#tabbar")).toBeHidden();
  await expect(page.locator("#sidebar")).toBeHidden();
  await expect(page.locator(".ob-back")).toBeHidden(); // nothing before the first screen
  await page.getByRole("button", { name: /Start Learning/ }).click();
  await expect(h1(page)).toHaveText("Who is using Pocket Class?");
  await expect(h1(page)).toBeFocused(); // each step starts at its heading
  await expect(page.locator(".ob-dots")).toHaveAttribute("aria-label", "Step 2 of 9");
  await expect(cont(page)).toBeDisabled();
  await page.getByRole("button", { name: /I'm a Student/ }).click();
  await expect(page.getByRole("button", { name: /I'm a Student/ })).toHaveAttribute("aria-pressed", "true");
  await expect(page.getByRole("button", { name: /Parent or Guardian/ })).toHaveAttribute("aria-pressed", "false");
  await expect(cont(page)).toBeEnabled();
  await cont(page).click();
  await expect(h1(page)).toHaveText("Choose your board");
  // Back goes one step, keeping what was chosen.
  await page.getByRole("button", { name: "Back" }).click();
  await expect(h1(page)).toHaveText("Who is using Pocket Class?");
  await expect(page.getByRole("button", { name: /I'm a Student/ })).toHaveAttribute("aria-pressed", "true");
});

for (const [cls, board, boardLabel] of [
  [6, "cbse", "CBSE"],
  [10, "pseb", "PSEB"],
  [12, "cbse", "CBSE"],
]) {
  test(`onboarding: Class ${cls}, ${boardLabel}, Class-wise lands on home with every subject`, { tag: "@desktop" }, async ({ page }) => {
    await page.goto("/");
    await page.getByRole("button", { name: /Start Learning/ }).click();
    await page.getByRole("button", { name: /I'm a Student/ }).click();
    await cont(page).click();

    await expect(h1(page)).toHaveText("Choose your board");
    await expect(cont(page)).toBeDisabled(); // needs a board first
    await page.locator(`[data-board="${board}"]`).click();
    await expect(page.locator(`[data-board="${board}"]`)).toHaveAttribute("aria-pressed", "true");
    await cont(page).click();

    await expect(h1(page)).toHaveText("Which class are you in?");
    await expect(page.locator("[data-cls]")).toHaveCount(12);
    await expect(cont(page)).toBeDisabled();
    await page.getByRole("button", { name: `Class ${cls}`, exact: true }).click();
    await cont(page).click();

    await expect(h1(page)).toHaveText("How do you want to learn?");
    await expect(page.locator('[data-view="class"]')).toHaveAttribute("aria-pressed", "true"); // the recommended one is preselected
    await expect(page.locator('[data-view="class"]')).toContainText("Follow your class programme with all available subjects");
    await expect(page.locator('[data-view="subject"]')).toContainText("Focus on the subjects you want");
    await cont(page).click();

    // Class-wise: every subject of the board and class is already ticked.
    await expect(h1(page)).toHaveText("Choose your subjects");
    const ids = expectedSubjectIds(cls, board);
    await expect(page.locator("[data-sub]")).toHaveCount(ids.length);
    await expect(page.locator('[data-sub][aria-pressed="true"]')).toHaveCount(ids.length);
    await cont(page).click();

    await expect(h1(page)).toHaveText("About you");
    await page.locator("#ob-name").fill("Gurpreet");
    await page.getByRole("button", { name: "Picture 3" }).click();
    await expect(page.getByRole("button", { name: "Picture 3" })).toHaveAttribute("aria-pressed", "true");
    await cont(page).click();

    await expect(h1(page)).toHaveText("Set a daily study goal");
    await page.locator('[data-goal="30"]').click();
    await cont(page).click();

    await expect(h1(page)).toHaveText("A quick look around");
    await expect(page.locator(".ob-tour h2")).toHaveText("Continue a lesson");
    await page.getByRole("button", { name: /^Next/ }).click();
    await expect(page.locator(".ob-tour h2")).toHaveText("Try a chapter game");
    await page.getByRole("button", { name: /^Next/ }).click();
    await expect(page.locator(".ob-tour h2")).toHaveText("Explore a lab");
    await page.getByRole("button", { name: /Go to Today/ }).click();

    await expect(h1(page)).toContainText("Namaste, Gurpreet");
    await expect(page.locator(".home-head .sub")).toContainText(`Class ${cls} · ${boardLabel}`);
    await expect(page.locator(".subject-card")).toHaveCount(expectedSubjects(cls, board).length);
    expect((await subjectNames(page)).sort()).toEqual(expectedSubjects(cls, board).sort());
    await expect(page.locator("#tabbar")).not.toHaveAttribute("hidden", ""); // the app navigation is back

    const st = current(await readStore(page));
    expect(st.profile).toMatchObject({ name: "Gurpreet", cls, board, role: "student", avatar: "a03", view: "class", subjects: null, learnLang: "en", goal: 30, setup: { step: "done", done: true } });
    await page.reload();
    await expect(h1(page)).toContainText("Namaste, Gurpreet");
  });
}

test("onboarding: Subject-wise needs at least one subject; Home then lists only those", async ({ page }) => {
  await onboardTo(page, { cls: 9, view: "subject" });
  await expect(h1(page)).toHaveText("Choose your subjects");
  await expect(page.locator('[data-sub][aria-pressed="true"]')).toHaveCount(0); // nothing ticked yet
  await expect(cont(page)).toBeDisabled();
  await page.locator('[data-sub="maths"]').click();
  await page.locator('[data-sub="science"]').click();
  await expect(cont(page)).toBeEnabled();
  await page.locator('[data-sub="science"]').click(); // untick again
  await cont(page).click();
  await page.locator("#ob-name").fill("Mia");
  await cont(page).click();
  await page.getByRole("button", { name: "I'll decide later" }).click(); // goal skipped
  await page.getByRole("button", { name: "Skip tour" }).click();
  await expect(h1(page)).toContainText("Namaste, Mia");
  expect(await subjectNames(page)).toEqual(expectedSubjects(9, "cbse").filter((n) => /math/i.test(n)));
  const st = current(await readStore(page));
  expect(st.profile).toMatchObject({ view: "subject", subjects: ["maths"], goal: null, setup: { done: true } });
});

test("onboarding: Subject-wise 'Decide later' keeps every subject", async ({ page }) => {
  await onboardTo(page, { cls: 7, view: "subject" });
  await page.getByRole("button", { name: "Decide later" }).click();
  await expect(h1(page)).toHaveText("About you");
  await cont(page).click();
  await page.locator('[data-goal="15"]').click();
  await cont(page).click();
  await page.getByRole("button", { name: "Skip tour" }).click();
  await expect(page.locator(".subject-card")).toHaveCount(expectedSubjects(7, "cbse").length);
  expect(current(await readStore(page)).profile).toMatchObject({ view: "subject", subjects: null, goal: 15 });
});

test("onboarding: Class-wise lets a subject be unticked (kept out of Today's plan, still listed on Home)", async ({ page }) => {
  await onboardTo(page, { cls: 8, view: "class" });
  await page.locator('[data-sub="sst"]').click();
  await expect(page.locator('[data-sub="sst"]')).toHaveAttribute("aria-pressed", "false");
  await cont(page).click();
  await cont(page).click();
  await page.getByRole("button", { name: "I'll decide later" }).click();
  await page.getByRole("button", { name: "Skip tour" }).click();
  await expect(page.locator(".subject-card")).toHaveCount(expectedSubjects(8, "cbse").length);
  const p = current(await readStore(page)).profile;
  expect(p.subjects).not.toContain("sst");
  expect(p.subjects.length).toBe(expectedSubjectIds(8, "cbse").length - 1);
});

test("onboarding: the name is optional; the picture and lesson language are saved", async ({ page }) => {
  await onboardTo(page, { cls: 3 });
  await cont(page).click(); // subjects
  await expect(h1(page)).toHaveText("About you");
  await expect(page.locator("#ob-name")).toHaveValue("");
  await page.getByRole("group", { name: "Lesson language" }).getByRole("button", { name: "Punjabi" }).click();
  await cont(page).click();
  await page.getByRole("button", { name: "I'll decide later" }).click();
  await page.getByRole("button", { name: "Skip tour" }).click();
  await expect(h1(page)).toHaveText(/^Namaste$/);
  expect(current(await readStore(page)).profile).toMatchObject({ name: "", learnLang: "pa", avatar: null });
});

test("onboarding: Classes 1-2 get the bigger layout", async ({ page }) => {
  await onboardTo(page, { cls: 2 });
  await expect(page.locator("body")).toHaveAttribute("data-band", "1-2");
  const big = await page.locator(".ob .btn.primary").evaluate((b) => b.getBoundingClientRect().height);
  expect(big).toBeGreaterThanOrEqual(64);
  await page.getByRole("button", { name: "Back" }).click();
  await page.getByRole("button", { name: "Back" }).click(); // class step
  await page.getByRole("button", { name: "Class 11", exact: true }).click();
  await cont(page).click();
  await expect(page.locator("body")).toHaveAttribute("data-band", "11-12");
});

// 2. Parent path ----------------------------------------------------------------------------------------------
test("onboarding: a parent adds two children, then picks who is learning", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: /Start Learning/ }).click();
  await page.getByRole("button", { name: /Parent or Guardian/ }).click();
  await cont(page).click();
  await expect(h1(page)).toHaveText("Add your children");
  await expect(page.locator(".ob-dots")).toHaveAttribute("aria-label", "Step 3 of 9");
  await expect(cont(page)).toBeDisabled(); // at least one child
  await page.getByRole("button", { name: "Add child" }).click(); // no name yet
  await expect(page.locator(".ob-kids li")).toHaveCount(0);

  await page.locator("#kid-name").fill("Arjun");
  await page.locator("#kid-cls").selectOption("8");
  await page.getByRole("button", { name: "Add child" }).click();
  await expect(page.locator(".ob-kids li")).toHaveCount(1);
  await page.locator("#kid-name").fill("Simran");
  await page.locator("#kid-cls").selectOption("4");
  await page.locator("#kid-board").selectOption("pseb");
  await page.getByRole("button", { name: "Add child" }).click();
  await expect(page.locator(".ob-kids li")).toHaveCount(2);
  await expect(page.locator(".ob-kids li").nth(1)).toContainText("Class 4 · PSEB");
  await cont(page).click();

  await expect(h1(page)).toHaveText("Who is learning now?");
  await expect(cont(page)).toBeDisabled();
  await page.locator(".ob-choice", { hasText: "Simran" }).click();
  await cont(page).click();

  // The chosen child carries on: view, subjects, about, goal, tour.
  await expect(h1(page)).toHaveText("How do you want to learn?");
  await cont(page).click();
  await cont(page).click();
  await expect(page.locator("#ob-name")).toHaveValue("Simran");
  await cont(page).click();
  await page.locator('[data-goal="15"]').click();
  await cont(page).click();
  await page.getByRole("button", { name: "Skip tour" }).click();

  await expect(h1(page)).toContainText("Namaste, Simran");
  await expect(page.locator(".home-head .sub")).toContainText("Class 4 · PSEB");
  const store = await readStore(page);
  expect(store.students).toHaveLength(2);
  const byName = Object.fromEntries(store.students.map((s) => [s.profile.name, s.profile]));
  expect(byName.Simran).toMatchObject({ cls: 4, board: "pseb", role: "parent-managed", goal: 15, setup: { done: true } });
  expect(byName.Arjun).toMatchObject({ cls: 8, board: "cbse", role: "parent-managed", setup: { done: true } });
  expect(current(store).profile.name).toBe("Simran");
  // The other child is one tap away.
  await openMenu(page);
  await expect(page.locator("#menu-sheet [data-stud]")).toHaveCount(2);
  await expect(page.locator("#menu-sheet [data-stud]").first()).toContainText("Arjun");
});

// 3. Resume ---------------------------------------------------------------------------------------------------
test("onboarding: closing the app mid-setup resumes at the same step", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: /Start Learning/ }).click();
  await page.getByRole("button", { name: /I'm a Student/ }).click();
  await cont(page).click();
  await page.locator('[data-board="pseb"]').click();
  await cont(page).click();
  await page.getByRole("button", { name: "Class 9", exact: true }).click();
  await cont(page).click();
  await page.locator('[data-view="subject"]').click();
  await cont(page).click();
  await expect(h1(page)).toHaveText("Choose your subjects");
  await page.reload();
  await expect(h1(page)).toHaveText("Choose your subjects");
  await expect(page.locator(".ob-dots")).toHaveAttribute("aria-label", "Step 6 of 9");
  expect(current(await readStore(page)).profile).toMatchObject({ board: "pseb", cls: 9, view: "subject", setup: { step: "subjects", done: false } });
  // Even earlier in the flow.
  await page.getByRole("button", { name: "Back" }).click();
  await page.reload();
  await expect(h1(page)).toHaveText("How do you want to learn?");
  await expect(page.locator('[data-view="subject"]')).toHaveAttribute("aria-pressed", "true");
  await expect(page.locator("#tabbar")).toBeHidden();
});

test("onboarding: a visit that stopped at Who is using resumes there", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: /Start Learning/ }).click();
  await page.reload();
  await expect(h1(page)).toHaveText("Who is using Pocket Class?");
});

// 2. Language ----------------------------------------------------------------------------------------------
test("language: onboarding switch changes the screen and is remembered", async ({ page }) => {
  await page.goto("/");
  const title = h1(page);
  await expect(title).toHaveText("Your world of learning starts here.");

  await page.getByRole("button", { name: "ਪੰਜਾਬੀ" }).click();
  await expect(title).toHaveText("ਤੁਹਾਡੀ ਸਿੱਖਣ ਦੀ ਦੁਨੀਆ ਇੱਥੋਂ ਸ਼ੁਰੂ ਹੁੰਦੀ ਹੈ।");
  await expect(page.getByRole("button", { name: /ਸਿੱਖਣਾ ਸ਼ੁਰੂ ਕਰੋ/ })).toBeVisible();
  await expect(page.locator("html")).toHaveAttribute("lang", "pa");

  await page.getByRole("button", { name: "हिंदी" }).click();
  await expect(title).toHaveText("आपकी सीखने की दुनिया यहीं से शुरू होती है।");
  await expect(page.getByRole("button", { name: /सीखना शुरू करें/ })).toBeVisible();
  await expect(page.locator("html")).toHaveAttribute("lang", "hi");

  // The choice survives a reload, carries through the steps and is used after setup.
  await page.reload();
  await expect(title).toHaveText("आपकी सीखने की दुनिया यहीं से शुरू होती है।");
  await page.getByRole("button", { name: /सीखना शुरू करें/ }).click();
  await expect(title).toHaveText("पॉकेट क्लास कौन इस्तेमाल कर रहा है?");
  await page.locator("[data-who=student]").click();
  await page.getByRole("button", { name: /जारी रखें/ }).click();
  await page.locator('[data-board="cbse"]').click();
  await page.getByRole("button", { name: /जारी रखें/ }).click();
  await page.locator('[data-cls="5"]').click();
  for (let i = 0; i < 3; i++) await page.getByRole("button", { name: /जारी रखें/ }).click();
  await expect(title).toHaveText("आपके बारे में");
  // Lesson language is separate from the app language.
  await page.getByRole("group", { name: "पाठ की भाषा" }).locator("[data-ll=pa]").click();
  await page.getByRole("button", { name: /जारी रखें/ }).click();
  await page.locator("[data-goal='20']").click();
  await page.getByRole("button", { name: /जारी रखें/ }).click();
  await page.locator("[data-act=skip]").click();
  await expect(h1(page)).toContainText("नमस्ते");
  expect((await readStore(page)).lang).toBe("hi");
  expect(current(await readStore(page)).profile.learnLang).toBe("pa");

  // Back to English from Settings (the language names stay in their own script).
  await page.goto("/#/settings");
  await page.getByRole("button", { name: "English" }).click();
  await expect(h1(page)).toHaveText("Settings");
  await expect(page.locator("html")).toHaveAttribute("lang", "en");
});

test("language: the App language on the About you step switches the whole step", async ({ page }) => {
  await onboardTo(page, { cls: 6 });
  await cont(page).click();
  await expect(h1(page)).toHaveText("About you");
  await page.getByRole("group", { name: "App language" }).getByRole("button", { name: "ਪੰਜਾਬੀ" }).click();
  await expect(h1(page)).toHaveText("ਤੁਹਾਡੇ ਬਾਰੇ");
  await expect(page.getByRole("group", { name: "ਪਾਠ ਦੀ ਭਾਸ਼ਾ" })).toBeVisible();
  expect((await readStore(page)).lang).toBe("pa");
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
  await expect(page.getByRole("heading", { level: 2, name: "मेरे विषय" })).toBeVisible();
  await expect(page.locator("nav a:visible", { hasText: "सीखें" }).first()).toBeVisible(); // the tab names follow the language

  await page.goto("/#/settings");
  await page.getByRole("button", { name: "English" }).click();
  await expect(h1).toHaveText("Settings");
  await page.goto("/#/");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Namaste, Asha");
  await expect(page.getByRole("heading", { level: 2, name: "My subjects" })).toBeVisible();
  expect((await readStore(page)).lang).toBe("en");
});
