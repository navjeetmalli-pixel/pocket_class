// Hash router, navigation and app start-up.

const App = {
  pendingTest: null,
  lastSearch: "",
  lastPath: null,
};

(() => {
  const NAV = [
    ["#/", "home", "Home", ["", "subject", "chapter"]],
    ["#/test", "test", "Test", ["test"]],
    ["#/revise", "revise", "Revise", ["revise", "sheet", "cards"]],
    ["#/timer", "timer", "Timer", ["timer"]],
    ["#/progress", "progress", "Progress", ["progress"]],
  ];
  const SIDE_EXTRA = [
    ["#/search", "search", "Search", ["search"]],
    ["#/settings", "settings", "Settings", ["settings"]],
  ];

  const routes = [
    [/^$/, Views.home],
    [/^subject\/(\w+)$/, Views.subject],
    [/^chapter\/(\d+)\/(\w+)\/([\w-]+)(?:\/(\w+))?$/, Views.chapter],
    [/^test\/run$/, Views.testRun],
    [/^test(?:\/(\w+))?$/, Views.testSetup],
    [/^revise$/, Views.revise],
    [/^revise\/mistakes$/, Views.mistakes],
    [/^revise\/due(?:\/(\w+)\/([\w-]+))?$/, Views.dueRound],
    [/^sheet\/(\w+)$/, Views.sheet],
    [/^sheets(?:\/(\w+))?$/, Sheets.maker],
    [/^worksheet\/(\d+)\/(\w+)(?:\?(.*))?$/, Sheets.worksheet],
    [/^papers$/, Papers.list],
    [/^paper\/(\d+)\/(\w+)(?:\?(.*))?$/, Papers.paper],
    [/^cards\/(\w+)$/, Views.subjectCards],
    [/^timer$/, Views.timer],
    [/^progress$/, Views.progress],
    [/^parent$/, Views.parent],
    [/^search$/, Views.search],
    [/^settings$/, Views.settings],
  ];

  // Enough of an element's identity to find it again after the page is redrawn.
  const focusSig = (n) =>
    [n.tagName, n.id, ...[...n.attributes].filter((a) => /^(data-|aria-label$|href$|name$)/.test(a.name)).map((a) => a.name + "=" + a.value), (n.textContent || "").trim().slice(0, 30)].join("|");

  const path = () => decodeURIComponent(location.hash.replace(/^#\/?/, "").replace(/\/$/, ""));
  const chapterBase = (p) => (p && (p.match(/^chapter\/\d+\/\w+\/[\w-]+/) || [])[0]) || null;

  function navLink([href, ic, label, secs], sec) {
    const on = secs.includes(sec);
    const badge = ic === "timer" ? `<span class="badge" data-timer-badge ${Focus.running ? "" : "hidden"}>${clock(Focus.left)}</span>` : "";
    return `<a href="${href}" class="${on ? "active" : ""}" ${on ? 'aria-current="page"' : ""}>${icon(ic)}<span>${t(label)}</span>${badge}</a>`;
  }

  function renderNav(p) {
    const show = !!Store.state.profile;
    const sec = p.split("/")[0];
    const tabbar = document.getElementById("tabbar");
    const sidebar = document.getElementById("sidebar");
    tabbar.hidden = sidebar.hidden = !show;
    if (!show) return;
    tabbar.innerHTML = NAV.map((n) => navLink(n, sec)).join("");
    sidebar.innerHTML = `
      <div class="brand"><span class="brand-mark">P</span>Pocket Class</div>
      ${NAV.map((n) => navLink(n, sec)).join("")}
      <span class="spacer"></span>
      ${SIDE_EXTRA.map((n) => navLink(n, sec)).join("")}`;
  }

  // Asks the service worker to keep these files for offline use.
  function keepOffline(urls) {
    // The store apps already contain every file.
    if (Native.is || !("serviceWorker" in navigator) || !location.protocol.startsWith("http")) return;
    navigator.serviceWorker.ready.then((reg) => reg.active && reg.active.postMessage({ type: "cache", urls }));
  }
  // A class's index, or some of its subjects with their practice banks and diagrams.
  const offlineUrls = (c, ids) => (ids ? [...(ids === "all" ? StudyData.files(c) : StudyData.files(c, ids)), ...StudyData.practiceFiles(c, ids === "all" ? undefined : ids)] : [StudyData.indexFile(c)]);

  // What a page needs beyond the class index: { cls, ids: subject ids whose full files it uses, or "all", practice:
  // true if it also uses their extra practice banks }, or null for pages that only need the index (titles, progress).
  // The questions and notes of a subject load only when a page like these opens.
  function needs(p) {
    const own = Store.state.profile.cls;
    const subjectsOf = (keys) => [...new Set(keys.map((k) => Store.parseKey(k).subject))];
    let m;
    if ((m = p.match(/^chapter\/(\d+)\/(\w+)\//))) return { cls: Number(m[1]), ids: [m[2]], practice: true };
    if ((m = p.match(/^(?:worksheet|paper)\/(\d+)\/(\w+)/))) return { cls: Number(m[1]), ids: [m[2]], practice: true };
    if ((m = p.match(/^(?:subject|cards|sheet)\/(\w+)$/))) return { cls: own, ids: [m[1]] };
    if (p === "search") return { cls: own, ids: "all" };
    if ((m = p.match(/^sheets(?:\/(\w+))?$/))) {
      const id = Sheets.makerSubject(m[1]);
      return id ? { cls: own, ids: [id], practice: true } : null;
    }
    if ((m = p.match(/^test(?:\/(\w+))?$/)) && p !== "test/run") {
      const ids = Views.testSetupNeeds(m[1]);
      return { cls: own, ids, practice: true };
    }
    if (p === "revise/mistakes") return { cls: own, ids: subjectsOf(Store.mistakesFor(own)), practice: true };
    if ((m = p.match(/^revise\/due(?:\/(\w+)\/[\w-]+)?$/))) return { cls: own, ids: m[1] ? [m[1]] : subjectsOf(Store.due(own).map((e) => e.key)), practice: true };
    return null;
  }

  const empty = (emoji, html, retry) =>
    `<div class="empty" style="padding-top:${retry ? 24 : 28}vh"><div class="big">${emoji}</div>${html}${
      retry ? `<button class="btn primary" data-act="retry">${icon("reset")} ${t("Try again")}</button>` : ""
    }</div>`;

  // Shows "Loading…", runs `load`, then draws the page again; on failure offers "Try again".
  function loadThen(main, p, opts, emoji, loadingText, failText, load, done) {
    main.innerHTML = empty(emoji, loadingText);
    renderNav(p);
    load().then((ok) => {
      if (ok) {
        if (done) done();
        return App.render(opts);
      }
      main.innerHTML = empty("📡", `<p>${failText}</p>`, true);
      main.onclick = (e) => e.target.closest("[data-act=retry]") && App.render(opts);
    });
  }

  // On the home page, load the subject today's question comes from, then redraw so the question appears.
  function preloadQotd() {
    const c = Store.state.profile.cls;
    const s = Views.qotdSubject(c);
    if (!s || StudyData.subjectsLoaded(c, [s.id])) return;
    StudyData.loadSubjects(c, [s.id]).then((ok) => {
      if (!ok) return;
      Store.migrate(c);
      keepOffline(offlineUrls(c, [s.id]));
      if (Store.state.profile && Store.state.profile.cls === c && path() === "") App.render({ keepScroll: true });
    });
  }

  App.render = function (opts = {}) {
    const main = document.getElementById("app");
    const p = path();

    if (Store.state.profile) {
      StudyData.setBoard(Store.state.profile.board);

      // First the class index (subject list, chapter titles): the student's class and any class a chapter link points to.
      const need = [Store.state.profile.cls];
      const m = p.match(/^chapter\/(\d+)\//);
      if (m) need.push(Number(m[1]));
      const missing = need.filter((c) => StudyData.classes.includes(c) && !StudyData.isLoaded(c));
      if (missing.length)
        return loadThen(
          main, p, opts, "📚",
          t("Loading Class {n}…", { n: missing[0] }),
          t("Class {n} couldn't be loaded. Check your internet connection and try again.", { n: missing[0] }),
          () => Promise.all(missing.map((c) => StudyData.load(c))).then((ok) => ok.every(Boolean)),
          () => missing.forEach((c) => keepOffline(offlineUrls(c)))
        );

      // Then the full files of the subjects this page uses, and their practice banks (extra questions, diagrams).
      const nd = StudyData.classes.includes((needs(p) || {}).cls) ? needs(p) : null;
      if (nd && !StudyData.subjectsLoaded(nd.cls, nd.ids))
        return loadThen(
          main, p, opts, "📚",
          t("Loading…"),
          t("This couldn't be loaded. Check your internet connection and try again."),
          () => StudyData.loadSubjects(nd.cls, nd.ids),
          () => {
            Store.migrate(nd.cls);
            keepOffline(offlineUrls(nd.cls, nd.ids));
          }
        );
      if (nd && nd.practice) {
        const only = nd.ids === "all" ? undefined : nd.ids;
        if (!StudyData.practiceLoaded(nd.cls, only))
          return loadThen(
            main, p, opts, "📝",
            t("Loading practice questions…"),
            t("Practice questions couldn't be loaded. Check your internet connection and try again."),
            () => StudyData.loadPractice(nd.cls, only)
          );
      }
    }

    let view;
    if (!Store.state.profile) view = Views.onboarding();
    else {
      for (const [re, fn] of routes) {
        const m = p.match(re);
        if (m) {
          view = fn(m.slice(1));
          break;
        }
      }
      view = view || Views.notFound();
    }
    if (view.redirect) return location.replace(view.redirect);

    // The page is redrawn from scratch, so remember what had keyboard focus to put it back (or to move it to the page).
    const had = document.activeElement;
    const sig = had && had !== document.body && main.contains(had) ? focusSig(had) : null;
    const samePage = p === App.lastPath;
    main.innerHTML = view.html;
    main.onclick = null;
    if (view.mount) view.mount(main);
    renderNav(p);
    document.title = view.title ? `${view.title} · Pocket Class` : t("Pocket Class India · Class 1–12 Study App");

    // Switching tabs inside a chapter keeps your place; any other page starts at the top.
    if (!opts.keepScroll) {
      const base = chapterBase(p);
      const hero = main.querySelector(".hero");
      if (base && base === chapterBase(App.lastPath) && hero) {
        const y = hero.getBoundingClientRect().bottom + window.scrollY;
        if (window.scrollY > y) window.scrollTo(0, y);
      } else window.scrollTo(0, 0);
    }
    // Keyboard and screen-reader users: stay on the same control after a redraw; on a new page start at its top
    // (switching tabs inside a chapter keeps the tab you pressed).
    if (sig && (samePage || chapterBase(p) === chapterBase(App.lastPath))) {
      const same = [...main.querySelectorAll("button, a[href], select, input[type=checkbox], input[type=range], .tabs a")].find((n) => focusSig(n) === sig);
      const tab = !same && had.closest(".tabs") && main.querySelector(".tabs a[aria-current]");
      (same || tab || main).focus({ preventScroll: true });
    } else if (sig || (App.lastPath !== null && !samePage && document.activeElement === document.body)) main.focus({ preventScroll: true });
    App.lastPath = p;
    if (p === "" && Store.state.profile) preloadQotd();
  };

  App.applyTheme = function () {
    const t = Store.state.theme;
    if (t === "system") document.documentElement.removeAttribute("data-theme");
    else document.documentElement.setAttribute("data-theme", t);
  };

  window.addEventListener("hashchange", () => {
    if (App.lastPath === "test/run" && path() !== "test/run" && Quiz.inProgress() && !confirm(t("Leave this test? Your answers will be lost."))) {
      history.replaceState(null, "", "#/test/run");
      return;
    }
    App.render();
  });

  // Keep the timer badge in the nav up to date.
  Focus.on(() => {
    document.querySelectorAll("[data-timer-badge]").forEach((b) => {
      b.hidden = !Focus.running;
      b.textContent = clock(Focus.left);
    });
  });

  // Count a study minute when the app is visible and the student touched it in the last 2 minutes.
  let lastInput = Date.now();
  ["pointerdown", "keydown", "scroll", "touchstart"].forEach((ev) => addEventListener(ev, () => (lastInput = Date.now()), { passive: true }));
  setInterval(() => {
    if (Store.state.profile && document.visibilityState === "visible" && Date.now() - lastInput < 120000) Store.addStudyMinute();
  }, 60000);

  // Keeps what a screen reader needs in step with what the pages draw, wherever the pages draw it:
  //  - segmented buttons and chips that show "on" by colour also say it with aria-pressed;
  //  - Gurmukhi and Devanagari text inside a page in another language gets lang="pa" / "hi".
  const TOGGLES = ".seg button, button.chip, .class-pick button";
  const SCRIPTS = [["pa", /[\u0A00-\u0A7F]/g], ["hi", /[\u0900-\u097F]/g]];
  function syncPressed(root) {
    if (root.matches && root.matches(TOGGLES)) root.setAttribute("aria-pressed", root.classList.contains("on"));
    root.querySelectorAll(TOGGLES).forEach((b) => b.setAttribute("aria-pressed", b.classList.contains("on")));
  }
  function tagScripts(root) {
    const w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, { acceptNode: (n) => (n.parentElement && !n.parentElement.closest("svg, script, style") ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT) });
    for (let n; (n = w.nextNode()); ) {
      const text = n.nodeValue;
      if (!/[\u0900-\u0A7F]/.test(text)) continue;
      const el = n.parentElement;
      const letters = text.replace(/[\s\d\p{P}]/gu, "").length || 1;
      for (const [lang, re] of SCRIPTS) {
        const hits = (text.match(re) || []).length;
        if (hits / letters > 0.8 && (el.closest("[lang]") || document.documentElement).lang !== lang) el.lang = lang;
      }
    }
  }
  let touched = new Set();
  let queued = false;
  new MutationObserver((records) => {
    for (const r of records) {
      if (r.type === "attributes") touched.add(r.target);
      else r.addedNodes.forEach((n) => touched.add(n.nodeType === 1 ? n : n.parentElement));
    }
    if (queued) return;
    queued = true;
    queueMicrotask(() => {
      queued = false;
      const roots = [...touched].filter((n) => n && n.isConnected && !n.closest("svg"));
      touched = new Set();
      roots.forEach((n) => {
        syncPressed(n);
        if (n.closest("#app")) tagScripts(n);
      });
    });
  }).observe(document.getElementById("app"), { childList: true, subtree: true, attributes: true, attributeFilter: ["class"] });

  document.getElementById("skip").addEventListener("click", (e) => {
    e.preventDefault(); // the address bar's # is the router's
    document.getElementById("app").focus();
  });

  App.applyTheme();
  applyLang();
  App.render();
  Reminder.start();

  if (!Native.is && "serviceWorker" in navigator && location.protocol.startsWith("http")) {
    // A new version installs in the background and waits. The page keeps running on the old files, so nothing is
    // half-updated, until the student taps Reload (or closes every tab): then the new one takes over.
    let wanted = false; // this tab asked for the update
    const offer = (worker) => {
      if (document.getElementById("update-bar")) return;
      const bar = document.createElement("div");
      bar.id = "update-bar";
      bar.setAttribute("role", "status");
      bar.innerHTML = `<span>${t("A new version is ready")}</span><button class="btn primary" data-act="reload">${t("Reload")}</button>`;
      bar.querySelector("button").onclick = () => {
        wanted = true;
        worker.postMessage({ type: "skipWaiting" });
      };
      document.body.appendChild(bar);
    };
    navigator.serviceWorker.addEventListener("controllerchange", () => {
      if (wanted) location.reload();
    });
    navigator.serviceWorker
      .register("sw.js")
      .then((reg) => {
        // Only an update counts: the first visit has no controller yet, and that install needs no message.
        if (reg.waiting && navigator.serviceWorker.controller) offer(reg.waiting);
        reg.addEventListener("updatefound", () => {
          const w = reg.installing;
          if (w) w.addEventListener("statechange", () => w.state === "installed" && navigator.serviceWorker.controller && offer(w));
        });
        // Look for a new version when the app comes back to the front, not only on page load.
        document.addEventListener("visibilitychange", () => document.visibilityState === "visible" && reg.update().catch(() => {}));
      })
      .catch(() => {});
  }
})();
