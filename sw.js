// Offline support: caches the whole app on first visit.
// Online, files come fresh from the network (and refresh the cache);
// offline or on a very slow connection, the cached copy is used.
const CACHE = "vidya-v1";

const FILES = [
  "./",
  "index.html",
  "manifest.webmanifest",
  "css/styles.css",
  "js/util.js",
  "js/store.js",
  "js/quiz.js",
  "js/timer.js",
  "js/views.js",
  "js/app.js",
  "data/registry.js",
  "icons/icon.svg",
  "icons/icon-192.png",
  "icons/icon-512.png",
  "icons/icon-maskable-512.png",
  ...["maths", "science", "sst", "english", "hindi", "punjabi"].flatMap((s) => [`data/class9/${s}.js`, `data/class10/${s}.js`]),
];

self.addEventListener("install", (e) => {
  // Cache files one by one so a single missing file doesn't block the rest.
  e.waitUntil(caches.open(CACHE).then((c) => Promise.all(FILES.map((f) => c.add(f).catch(() => {})))));
  self.skipWaiting();
});

self.addEventListener("activate", (e) => {
  e.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))));
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
