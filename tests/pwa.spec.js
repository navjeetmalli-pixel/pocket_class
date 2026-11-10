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
  await expect(page.getByRole("heading", { level: 2, name: "Daily challenge" })).toBeVisible();
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
    // The app's versioned cache, plus the data cache (lesson files saved for offline), which updates keep.
    await expect.poll(() => page.evaluate(async () => (await caches.keys()).sort())).toEqual([CACHE_NAME, "pocket-class-data"].sort());
    const savedBefore = await page.evaluate(async () => (await (await caches.open("pocket-class-data")).keys()).map((r) => new URL(r.url).pathname));
    expect(savedBefore.some((p) => p.includes("/data/class10/"))).toBe(true);
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
    await expect.poll(() => page.evaluate(async () => (await caches.keys()).sort())).toEqual([NEW_CACHE, "pocket-class-data"].sort());
    // The lesson files saved before the update are still there (refreshed in the background, never dropped).
    const savedAfter = await page.evaluate(async () => (await (await caches.open("pocket-class-data")).keys()).map((r) => new URL(r.url).pathname));
    for (const p of savedBefore) expect(savedAfter).toContain(p);
    await expect(page.locator("#update-bar")).toHaveCount(0);
    expect(await page.evaluate(async () => {
      const r = await navigator.serviceWorker.getRegistration();
      return { active: !!r.active, waiting: !!r.waiting };
    })).toEqual({ active: true, waiting: false });
  } finally {
    proxy.server.close();
  }
});

// 12b. The update bar is one slim line on phones and never covers a control ----------------------------------------
test("update bar: one line at 320 and 375 px, and it covers no back button or main button", async ({ page, baseURL }) => {
  const proxy = await startProxy(baseURL);
  try {
    const overlaps = () =>
      page.evaluate(() => {
        const bar = document.getElementById("update-bar").getBoundingClientRect();
        const hit = [];
        for (const el of document.querySelectorAll(".ob-back, .topbar a, .topbar button, .btn.primary, .tabbar a")) {
          if (el.closest("#update-bar")) continue;
          const r = el.getBoundingClientRect();
          if (!r.width || !r.height || getComputedStyle(el).visibility === "hidden") continue;
          if (r.top < bar.bottom - 0.5 && r.bottom > bar.top + 0.5 && r.left < bar.right && r.right > bar.left) hit.push(el.className || el.tagName);
        }
        return { height: bar.height, right: bar.right, hit };
      });
    for (const width of [320, 375]) {
      await page.setViewportSize({ width, height: 700 });
      await page.goto(`${proxy.url}/`); // onboarding: back button top-left, Continue at the bottom
      await page.evaluate(() => localStorage.clear());
      await reloadUnderWorker(page);
      await page.getByRole("button", { name: /Start Learning/ }).click();
      await page.getByRole("button", { name: /I'm a Student/ }).click();
      proxy.state.variant = `${CACHE_NAME}-bar${width}`;
      await page.evaluate(() => navigator.serviceWorker.getRegistration().then((r) => r.update()));
      await expect(page.locator("#update-bar")).toBeVisible();
      let m = await overlaps();
      expect(m.height, `bar height at ${width}`).toBeLessThan(60);
      expect(m.right).toBeLessThanOrEqual(width);
      expect(m.hit, `onboarding at ${width}`).toEqual([]);
      await expect(page.locator("#update-bar").getByRole("button", { name: "Close" })).toBeVisible();
      expect((await page.locator("#update-bar .update-close").boundingBox()).height).toBeGreaterThanOrEqual(44);
      expect(await page.locator("#update-bar").getAttribute("title")).toBe("A new version is ready");
      await page.locator("#update-bar .update-close").click();
      await expect(page.locator("#update-bar")).toHaveCount(0);
      expect(await page.evaluate(() => document.body.classList.contains("has-update-bar"))).toBe(false);
    }
    // Today, a chapter page and a lab, for a set-up student.
    await page.evaluate(() => localStorage.clear());
    await seed(page, { name: "Asha", cls: 10 });
    await page.goto("about:blank");
    for (const [width, hash] of [[320, "/"], [375, "/subject/science"], [320, "/subject/science"]]) {
      await page.setViewportSize({ width, height: 700 });
      await page.goto("about:blank");
      await page.goto(`${proxy.url}/#${hash}`);
      await controlled(page);
      proxy.state.variant = `${CACHE_NAME}-bar-${width}-${hash.length}`;
      await page.evaluate(() => navigator.serviceWorker.getRegistration().then((r) => r.update()));
      await expect(page.locator("#update-bar")).toBeVisible();
      if (hash !== "/") {
        await page.locator(".chapter-row").first().click();
        await expect(page.locator("article.note").first()).toBeVisible();
      }
      const m = await overlaps();
      expect(m.height).toBeLessThan(60);
      expect(m.hit, `${hash} at ${width}`).toEqual([]);
      await page.locator("#update-bar .update-close").click();
    }
    await page.setViewportSize({ width: 375, height: 700 });
    await page.goto("about:blank");
    await page.goto(`${proxy.url}/#/labs`);
    await controlled(page);
    proxy.state.variant = `${CACHE_NAME}-bar-labs`;
    await page.evaluate(() => navigator.serviceWorker.getRegistration().then((r) => r.update()));
    await expect(page.locator("#update-bar")).toBeVisible();
    expect((await overlaps()).hit).toEqual([]);
  } finally {
    proxy.server.close();
  }
});
