// Offline support: caches the app shell on first visit, plus each class's index and each subject's data once it's opened.
// Online, files come fresh from the network (and refresh the cache);
// offline or on a very slow connection, the cached copy is used.
const CACHE = "pocket-class-v43";

const FILES = [
  "./",
  "index.html",
  "manifest.webmanifest",
  "css/styles.css",
  "js/util.js",
  "js/subject-icons.js",
  "js/i18n.js",
  "js/store.js",
  "js/avatars.js",
  "js/mastery.js",
  "js/objectives.js",
  "js/learn.js",
  "js/readiness.js",
  "js/plan.js",
  "js/speech.js",
  "js/reminder.js",
  "js/quiz.js",
  "js/loop.js",
  "js/guided.js",
  "js/timer.js",
  "js/gen.js",
  "js/sims.js",
  "js/games/engine.js",
  "js/games/match.js",
  "js/games/labels.js",
  "js/games/quickfire.js",
  "js/games/sort.js",
  "js/games/order.js",
  "js/games/timeline.js",
  "js/games/langkit.js",
  "js/games/letters.js",
  "js/games/matras.js",
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
  "js/views/ui.js",
  "js/views/students.js",
  "js/views/shell.js",
  "js/views/revise.js",
  "js/views/home.js",
  "js/views/subject.js",
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
  "js/views/profile.js",
  "js/views/learn.js",
  "js/views/explore.js",
  "js/sheets.js",
  "js/papers.js",
  "js/app.js",
  "data/registry.js",
  "data/games/letters.js",
  "data/games/matras.js",
  "data/games/words.js",
  "data/games/sentences.js",
  "data/games/grammar.js",
  "icons/icon.svg",
  "icons/icon-192.png",
  "icons/icon-512.png",
  "icons/icon-maskable-512.png",
];
// Class indexes and subject files are cached when first opened (see the "cache" message below).

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
    e.waitUntil(caches.open(CACHE).then((c) => Promise.all(e.data.urls.map((u) => c.add(u).catch(() => {})))));
  }
});

self.addEventListener("activate", (e) => {
  // Other apps on the same domain share Cache Storage, so only remove this app's own old caches.
  e.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((k) => (k.startsWith("vidya-") || k.startsWith("pocket-class-")) && k !== CACHE).map((k) => caches.delete(k)))));
  self.clients.claim();
});

self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET" || new URL(e.request.url).origin !== location.origin) return;
  e.respondWith(
    (async () => {
      const cache = await caches.open(CACHE);
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
