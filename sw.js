// Offline support: caches the app shell on first visit, plus each class's index and each subject's data once it's opened.
// Online, files come fresh from the network (and refresh the cache);
// offline or on a very slow connection, the cached copy is used.
const CACHE = "pocket-class-v73";

const FILES = [
  "./",
  "index.html",
  "manifest.webmanifest",
  "css/styles.css",
  "js/util.js",
  "js/sound.js",
  "fonts/baloo-2-latin-wght-normal.woff2",
  "fonts/baloo-2-devanagari-wght-normal.woff2",
  "fonts/baloo-paaji-2-latin-wght-normal.woff2",
  "fonts/baloo-paaji-2-gurmukhi-wght-normal.woff2",
  "js/pics.js",
  "js/picdict.js",
  "js/mascot.js",
  "js/stickers.js",
  "js/release.js",
  "js/subject-icons.js",
  "js/i18n.js",
  "js/international.js",
  "js/store.js",
  "js/pin.js",
  "js/avatars.js",
  "js/mastery.js",
  "js/objectives.js",
  "js/learn.js",
  "js/readiness.js",
  "js/plan.js",
  "js/speech.js",
  "js/readaloud.js",
  "js/reminder.js",
  "js/quiz.js",
  "js/loop.js",
  "js/guided.js",
  "js/timer.js",
  "js/gen.js",
  "js/gen-lang.js",
  "js/gen-sci.js",
  "js/derive.js",
  "js/sims.js",
  "js/games/engine.js",
  "js/games/match.js",
  "js/games/labels.js",
  "js/games/quickfire.js",
  "js/games/sort.js",
  "js/games/order.js",
  "js/games/gamefx.js",
  "js/games/timeline.js",
  "js/games/langkit.js",
  "js/games/letters.js",
  "js/games/matras.js",
  "js/games/trace.js",
  "js/games/words.js",
  "js/games/sentences.js",
  "js/games/grammar.js",
  "js/games/mathkit.js",
  "js/games/mathtext.js",
  "js/games/numberline.js",
  "js/games/fractions.js",
  "js/games/balance.js",
  "js/games/angles.js",
  "js/games/graphs.js",
  "js/games/race.js",
  "js/games/wordbuild.js",
  "js/games/habitat.js",
  "js/views/ui.js",
  "js/views/students.js",
  "js/views/shell.js",
  "js/views/revise.js",
  "js/views/home.js",
  "js/views/journey.js",
  "js/views/subject.js",
  "js/views/stickers.js",
  "js/views/chapter.js",
  "js/views/test.js",
  "js/views/timer.js",
  "js/views/progress.js",
  "js/views/parent.js",
  "js/views/search.js",
  "js/views/onboarding.js",
  "js/views/paths.js",
  "js/views/games.js",
  "js/views/settings.js",
  "js/views/offline.js",
  "js/views/profile.js",
  "js/views/learn.js",
  "js/views/explore.js",
  "js/views/international.js",
  "js/sheets.js",
  "js/papers.js",
  "js/labs/labs.js",
  "js/labs/circuit.js",
  "js/labs/force.js",
  "js/labs/particles.js",
  "js/labs/cell.js",
  "js/labs/atom.js",
  "js/labs/equation.js",
  "js/labs/foodweb.js",
  "js/labs/body.js",
  "js/labs/placevalue.js",
  "js/labs/fractionwall.js",
  "js/labs/algebratiles.js",
  "js/labs/geoboard.js",
  "js/labs/grapher.js",
  "js/labs/india-map.js",
  "js/labs/india-lab.js",
  "js/labs/i18n.js",
  "js/app.js",
  "data/registry.js",
  "data/games/letters.js",
  "data/games/matras.js",
  "data/games/strokes.js",
  "data/games/words.js",
  "data/games/sentences.js",
  "data/games/grammar.js",
  "icons/icon.svg",
  "icons/icon-192.png",
  "icons/icon-512.png",
  "icons/icon-maskable-512.png",
];
// Class indexes and subject files (everything under data/) are cached when first opened (see the "cache" message
// below) or saved as an offline pack (js/views/offline.js), in DATA_CACHE. That cache is not versioned, so an app update
// keeps what was saved for offline; after an update its files are fetched again in the background (see "activate"),
// and a file that can't be fetched (no connection) keeps its saved copy until it can.
const DATA_CACHE = "pocket-class-data";
// Data files outside the app's own list (FILES, which ships with each version and holds registry.js and the language games).
const APP_DATA = new Set(FILES.filter((f) => f.startsWith("data/")).map((f) => new URL(f, self.location.href).pathname));
const isData = (url) => {
  const p = new URL(url, self.location.href).pathname;
  return p.includes("/data/") && !APP_DATA.has(p);
};

self.addEventListener("install", (e) => {
  // Cache files one by one so a single missing file doesn't block the rest.
  e.waitUntil(caches.open(CACHE).then((c) => Promise.all(FILES.map((f) => c.add(f).catch(() => {})))));
  // No skipWaiting here: a new version waits until the page asks for it (see "skipWaiting" below), so an open page
  // never ends up with old scripts and new data files. The very first install has nothing to wait for.
});

// The app sends the files of each subject it opens so they work offline from the first visit.
self.addEventListener("message", (e) => {
  if (e.data && e.data.type === "skipWaiting") self.skipWaiting();
  if (e.data && e.data.type === "cache" && Array.isArray(e.data.urls)) {
    e.waitUntil(
      Promise.all([caches.open(CACHE), caches.open(DATA_CACHE)]).then(([app, data]) => Promise.all(e.data.urls.map((u) => (isData(u) ? data : app).add(u).catch(() => {}))))
    );
  }
});

self.addEventListener("activate", (e) => {
  // Other apps on the same domain share Cache Storage, so only remove this app's own old caches.
  // Moving old data is part of activation; the refresh after it is not (pages' requests wait until activation ends).
  const ready = (async () => {
    const keys = await caches.keys();
    const old = keys.filter((k) => (k.startsWith("vidya-") || k.startsWith("pocket-class-")) && k !== CACHE && k !== DATA_CACHE);
    const data = await caches.open(DATA_CACHE);
    // Versions before DATA_CACHE kept data files in the versioned cache: move them over instead of losing them.
    for (const k of old) {
      const c = await caches.open(k);
      for (const req of await c.keys()) if (isData(req.url) && !(await data.match(req))) await data.put(req, await c.match(req));
      await caches.delete(k);
    }
    await self.clients.claim();
  })();
  e.waitUntil(ready);
  // Then refresh the saved data files for the new version in the background (best effort; a failed fetch keeps the
  // saved copy, and every file is refreshed again whenever it is opened online).
  ready.then(async () => {
    const data = await caches.open(DATA_CACHE);
    const saved = await data.keys();
    for (let i = 0; i < saved.length; i += 6)
      await Promise.all(saved.slice(i, i + 6).map((req) => fetch(req.url, { cache: "no-cache" }).then((res) => res.ok && data.put(req, res)).catch(() => {})));
  });
});

self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET" || new URL(e.request.url).origin !== location.origin) return;
  e.respondWith(
    (async () => {
      const cache = await caches.open(isData(e.request.url) ? DATA_CACHE : CACHE);
      const cached = await cache.match(e.request, { ignoreSearch: true });
      const network = fetch(e.request).then((res) => {
        if (res.ok) cache.put(e.request, res.clone());
        return res;
      });
      if (!cached) return network;
      // Don't keep the student waiting on a slow connection.
      const slow = new Promise((resolve) => setTimeout(() => resolve(cached), 2500));
      return Promise.race([network.catch(() => cached), slow]);
    })()
  );
});
