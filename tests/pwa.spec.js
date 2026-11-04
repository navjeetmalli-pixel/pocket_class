const fs = require("fs");
const http = require("http");
const path = require("path");
const { test, expect, seed, expectedSubjectIds } = require("./helpers");

test.use({ serviceWorkers: "allow" });

const SW_SOURCE = fs.readFileSync(path.join(__dirname, "..", "sw.js"), "utf8");
const CACHE_NAME = SW_SOURCE.match(/const CACHE = "([^"]+)"/)[1];

// Waits until a service worker controls the page (clients.claim has run after the first install).
const controlled = (page) => page.waitForFunction(() => !!navigator.serviceWorker.controller, null, { timeout: 20_000 });

// Waits for the worker to be installed and active, then reloads so the page is under its control from the start.
async function reloadUnderWorker(page) {
  await page.evaluate(() => navigator.serviceWorker.ready.then(() => true));
  await page.reload();
  await controlled(page);
}

// True once any cache holds the file.
const cached = (page, file) =>
  page.evaluate(async (f) => {
    for (const k of await caches.keys()) if (await (await caches.open(k)).match(f)) return true;
    return false;
  }, file);

// 11. Offline ------------------------------------------------------------------------------------------------------
test("offline: visited pages work without a connection; an unvisited subject offers Try again", async ({ page, context, issues }) => {
  // Failed script loads while offline are reported by Chromium as console errors; they are expected here.
  issues.allow(/Failed to load resource/);
  await seed(page, { name: "Asha", cls: 10 });

  // Visit home and one subject while online.
  await page.goto("/#/");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Namaste, Asha");
  await expect(page.getByRole("heading", { level: 2, name: "Question of the day" })).toBeVisible();
  await reloadUnderWorker(page);
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Namaste, Asha");

  const ids = expectedSubjectIds(10, "cbse");
  const visited = "science";
  await page.locator(`a.subject-card[href="#/subject/${visited}"]`).click();
  await expect(page.locator(".chapter-row").first()).toBeVisible();
  // The page asks the worker to keep the subject's files; wait until they are saved.
  await expect.poll(() => cached(page, `data/class10/${visited}.js`), { message: "subject cached for offline use" }).toBe(true);
  await expect.poll(() => cached(page, "data/class10/index.js")).toBe(true);

  // A subject that was never opened (and isn't today's question subject): not in the cache.
  let unvisited;
  for (const id of ids) {
    if (id !== visited && !(await cached(page, `data/class10/${id}.js`))) {
      unvisited = id;
      break;
    }
  }
  expect(unvisited, "there is a subject that hasn't been cached").toBeTruthy();

  // Go offline and reload: home still works, and so does the visited subject.
  await context.setOffline(true);
  await page.goto("/#/");
  await page.reload();
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Namaste, Asha");
  await expect(page.locator(".subject-card")).toHaveCount(ids.length);
  await page.locator(`a.subject-card[href="#/subject/${visited}"]`).click();
  await expect(page.locator(".hero h1")).toContainText("Science");
  await expect(page.locator(".chapter-row").first()).toBeVisible();
  await page.locator(".chapter-row").first().click();
  await expect(page.locator("article.note").first()).toBeVisible();

  // The unvisited subject can't load: a message and a Try again button, not a blank page.
  await page.goto("/#/");
  await page.locator(`a.subject-card[href="#/subject/${unvisited}"]`).click();
  await expect(page.getByText("This couldn't be loaded. Check your internet connection and try again.")).toBeVisible();
  const retry = page.getByRole("button", { name: "Try again" });
  await expect(retry).toBeVisible();
  await retry.click();
  await expect(page.getByText("This couldn't be loaded.")).toBeVisible(); // still offline

  // Back online, Try again loads it.
  await context.setOffline(false);
  await retry.click();
  await expect(page.locator(".chapter-row").first()).toBeVisible();
  await expect(page.getByText("This couldn't be loaded.")).toHaveCount(0);
});

// 12. Service-worker update ----------------------------------------------------------------------------------------
// Playwright's route interception doesn't see the browser's own check for a new sw.js, so the test serves the app
// itself through a small proxy (in front of the real static server) that can switch to a changed sw.js, as a
// release does when the CACHE name is bumped.
function startProxy(upstream) {
  const state = { variant: null }; // cache name to serve in sw.js, or null for the real file
  const server = http.createServer(async (req, res) => {
    try {
      const r = await fetch(new URL(req.url, upstream));
      let body = Buffer.from(await r.arrayBuffer());
      if (state.variant && new URL(req.url, upstream).pathname === "/sw.js")
        body = Buffer.from(body.toString("utf8").replace(`const CACHE = "${CACHE_NAME}"`, `const CACHE = "${state.variant}"`));
      res.writeHead(r.status, { "content-type": r.headers.get("content-type") || "application/octet-stream", "cache-control": "no-cache" });
      res.end(body);
    } catch (e) {
      res.writeHead(502).end(String(e));
    }
  });
  return new Promise((resolve) => server.listen(0, "127.0.0.1", () => resolve({ state, server, url: `http://localhost:${server.address().port}` })));
}

test("update: a new service worker shows 'A new version is ready' and Reload activates it", async ({ page, baseURL }) => {
  const proxy = await startProxy(baseURL);
  try {
    await seed(page, { name: "Asha", cls: 10 });
    await page.goto(`${proxy.url}/#/`);
    await expect(page.getByRole("heading", { level: 1 })).toContainText("Namaste, Asha");
    await reloadUnderWorker(page);
    await expect.poll(() => page.evaluate(() => caches.keys())).toEqual([CACHE_NAME]);
    await expect(page.locator("#update-bar")).toHaveCount(0);

    // A new release: sw.js now names a different cache.
    const NEW_CACHE = `${CACHE_NAME}-e2e`;
    proxy.state.variant = NEW_CACHE;

    // The app also checks when it comes back to the front; do the check directly.
    await page.evaluate(() => navigator.serviceWorker.getRegistration().then((r) => r.update()));
    const bar = page.locator("#update-bar");
    await expect(bar).toBeVisible();
    await expect(bar).toContainText("A new version is ready");

    // Until the student taps Reload the old worker stays in charge (the page never mixes old scripts and new data).
    await expect.poll(() => page.evaluate(async () => !!(await navigator.serviceWorker.getRegistration()).waiting)).toBe(true);
    expect(await page.evaluate(async () => (await navigator.serviceWorker.getRegistration()).active.state)).toBe("activated");
    expect(await page.evaluate(() => caches.keys())).toContain(CACHE_NAME); // the old cache is still in use

    const navigated = page.waitForEvent("framenavigated", { predicate: (f) => f === page.mainFrame() });
    await bar.getByRole("button", { name: "Reload" }).click();
    await navigated;

    // The new worker took over: the old cache is gone, the new one is in use, and the app works.
    await expect(page.getByRole("heading", { level: 1 })).toContainText("Namaste, Asha");
    await controlled(page);
    await expect.poll(() => page.evaluate(() => caches.keys())).toEqual([NEW_CACHE]);
    await expect(page.locator("#update-bar")).toHaveCount(0);
    expect(await page.evaluate(async () => {
      const r = await navigator.serviceWorker.getRegistration();
      return { active: !!r.active, waiting: !!r.waiting };
    })).toEqual({ active: true, waiting: false });
  } finally {
    proxy.server.close();
  }
});
