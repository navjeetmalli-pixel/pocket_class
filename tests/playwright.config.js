// End-to-end tests (Playwright, Chromium only). Run from the project root: npm test
// A throw-away static server is started on its own port, so a dev server on 8765 doesn't interfere.
const path = require("path");
const { defineConfig, devices } = require("@playwright/test");

const PORT = 8799;
const root = path.join(__dirname, "..");

module.exports = defineConfig({
  testDir: __dirname,
  testMatch: /.*\.spec\.js/,
  outputDir: path.join(root, "test-results"),
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  timeout: 90_000,
  expect: { timeout: 10_000 },
  reporter: [["list"], ["html", { outputFolder: path.join(root, "playwright-report"), open: "never" }]],
  use: {
    baseURL: `http://localhost:${PORT}`,
    // Most tests don't need the service worker, and it would make requests and caching harder to reason about.
    // The offline and update tests turn it on with test.use({ serviceWorkers: "allow" }).
    serviceWorkers: "block",
    actionTimeout: 15_000,
    navigationTimeout: 30_000,
    trace: "retain-on-failure",
    screenshot: "only-on-failure",
    locale: "en-IN",
    timezoneId: "Asia/Kolkata",
  },
  webServer: {
    command: `node scripts/serve.js ${PORT}`,
    cwd: root,
    url: `http://localhost:${PORT}/`,
    reuseExistingServer: false,
    timeout: 30_000,
  },
  projects: [
    // Pixel-class phone, 412x915: the whole suite.
    { name: "phone", use: { ...devices["Pixel 7"], browserName: "chromium" } },
    // Desktop (side bar layout): the tests tagged @desktop.
    { name: "desktop", use: { browserName: "chromium", viewport: { width: 1280, height: 800 } }, grep: /@desktop/ },
  ],
});
