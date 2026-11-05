// Settings → Read-aloud voice (js/speech.js prefs, js/views/settings.js): a voice per language from the device's voices, a speed,
// and a sample; the choice is used by Listen, the answer speakers and Read to me.
const { test, expect, seed } = require("./helpers");

const STUB = () => {
  window.__utt = [];
  const voices = [
    { lang: "en-IN", name: "Asha", voiceURI: "asha" },
    { lang: "en-GB", name: "Oliver", voiceURI: "oliver" },
    { lang: "hi-IN", name: "Lekha", voiceURI: "lekha" },
  ];
  const stub = {
    getVoices: () => voices,
    addEventListener() {},
    speak(u) {
      window.__utt.push({ text: u.text, lang: u.lang, rate: Math.round(u.rate * 100) / 100 }); // (a stub voice cannot be set on a real utterance, so its language tells which was used)
      setTimeout(() => u.onend && u.onend({}), 20);
    },
    cancel() {},
  };
  Object.defineProperty(window, "speechSynthesis", { value: stub, configurable: true });
};

test("pick a voice and a speed in Settings; Try plays a sample; Listen then uses them", async ({ page }) => {
  await seed(page, { name: "Kabir", cls: 1 });
  await page.addInitScript(STUB);
  await page.goto("/#/settings");
  const card = page.locator("#voice-card");
  await expect(card).toBeVisible();
  const en = card.locator('select[data-voice="en"]');
  await expect(en.locator("option")).toHaveCount(2);
  await expect(en).toHaveValue("asha"); // the Indian voice is the default
  await en.selectOption("oliver"); // choosing plays a sample in that voice
  await expect.poll(() => page.evaluate(() => window.__utt.at(-1))).toMatchObject({ lang: "en-GB" });
  await card.getByRole("button", { name: "Slow" }).click();
  await expect(card.getByRole("button", { name: "Slow" })).toHaveAttribute("aria-pressed", "true");
  await card.locator('[data-try="en"]').click();
  await expect.poll(() => page.evaluate(() => window.__utt.at(-1))).toMatchObject({ lang: "en-GB", rate: 0.7 });
  // saved on the device and used by the question's Listen button
  await page.goto("/#/chapter/1/english/the-alphabet/master");
  await page.locator(".listen-btn").first().click();
  await expect.poll(() => page.evaluate(() => window.__utt.at(-1))).toMatchObject({ lang: "en-GB", rate: 0.7 });
  // back in Settings the choice is still selected
  await page.goto("/#/settings");
  await expect(page.locator('select[data-voice="en"]')).toHaveValue("oliver");
});

test("a saved voice the device no longer has falls back to the default", async ({ page }) => {
  await seed(page, { name: "Kabir", cls: 1 });
  await page.addInitScript(STUB);
  await page.addInitScript(() => localStorage.setItem("vidya:voice", JSON.stringify({ en: "gone" })));
  await page.goto("/#/chapter/1/english/the-alphabet/master");
  await page.locator(".listen-btn").first().click();
  await expect.poll(() => page.evaluate(() => window.__utt.at(-1))).toMatchObject({ lang: "en-IN" });
});
