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
    [/^sheet\/(\w+)$/, Views.sheet],
    [/^sheets(?:\/(\w+))?$/, Sheets.maker],
    [/^worksheet\/(\d+)\/(\w+)(?:\?(.*))?$/, Sheets.worksheet],
    [/^cards\/(\w+)$/, Views.subjectCards],
    [/^timer$/, Views.timer],
    [/^progress$/, Views.progress],
    [/^search$/, Views.search],
    [/^settings$/, Views.settings],
  ];

  const path = () => decodeURIComponent(location.hash.replace(/^#\/?/, "").replace(/\/$/, ""));
  const chapterBase = (p) => (p && (p.match(/^chapter\/\d+\/\w+\/[\w-]+/) || [])[0]) || null;

  function navLink([href, ic, label, secs], sec) {
    const on = secs.includes(sec);
    const badge = ic === "timer" ? `<span class="badge" data-timer-badge ${Focus.running ? "" : "hidden"}>${clock(Focus.left)}</span>` : "";
    return `<a href="${href}" class="${on ? "active" : ""}" ${on ? 'aria-current="page"' : ""}>${icon(ic)}<span>${label}</span>${badge}</a>`;
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
      <div class="brand"><span class="brand-mark">V</span>Vidya</div>
      ${NAV.map((n) => navLink(n, sec)).join("")}
      <span class="spacer"></span>
      ${SIDE_EXTRA.map((n) => navLink(n, sec)).join("")}`;
  }

  // Asks the service worker to keep a class's files for offline use.
  function keepOffline(classes) {
    if (!("serviceWorker" in navigator) || !location.protocol.startsWith("http")) return;
    const urls = classes.flatMap((c) => [...StudyData.files(c), ...StudyData.practiceFiles(c)]);
    navigator.serviceWorker.ready.then((reg) => reg.active && reg.active.postMessage({ type: "cache", urls }));
  }

  // [class, subject or undefined for all] whose practice banks a page needs, or null.
  function practiceNeeded(p) {
    let m = p.match(/^chapter\/(\d+)\/(\w+)\//);
    if (m) return [Number(m[1]), m[2]];
    m = p.match(/^worksheet\/(\d+)\/(\w+)/);
    if (m) return [Number(m[1]), m[2]];
    if (/^(test|sheets|revise\/mistakes)/.test(p)) return [Store.state.profile.cls, undefined];
    return null;
  }

  App.render = function (opts = {}) {
    const main = document.getElementById("app");
    const p = path();

    // Only the student's class (and any class a chapter link points to) is loaded.
    if (Store.state.profile) {
      StudyData.setBoard(Store.state.profile.board);
      const need = [Store.state.profile.cls];
      const m = p.match(/^chapter\/(\d+)\//);
      if (m) need.push(Number(m[1]));
      const missing = need.filter((c) => StudyData.classes.includes(c) && !StudyData.isLoaded(c));
      if (missing.length) {
        main.innerHTML = `<div class="empty" style="padding-top:28vh"><div class="big">📚</div>Loading Class ${missing[0]}…</div>`;
        renderNav(p);
        Promise.all(missing.map((c) => StudyData.load(c))).then((ok) => {
          if (ok.every(Boolean)) {
            missing.forEach(Store.migrate);
            keepOffline(missing);
            return App.render(opts);
          }
          main.innerHTML = `<div class="empty" style="padding-top:24vh"><div class="big">📡</div>
            <p>Class ${missing[0]} couldn't be loaded. Check your internet connection and try again.</p>
            <button class="btn primary" data-act="retry">${icon("reset")} Try again</button></div>`;
          main.onclick = (e) => e.target.closest("[data-act=retry]") && App.render(opts);
        });
        return;
      }

      // Extra practice questions load only on pages that use them.
      const pr = practiceNeeded(p);
      if (pr && !StudyData.practiceLoaded(pr[0], pr[1])) {
        main.innerHTML = `<div class="empty" style="padding-top:28vh"><div class="big">📝</div>Loading practice questions…</div>`;
        renderNav(p);
        StudyData.loadPractice(pr[0], pr[1]).then((ok) => {
          if (ok) return App.render(opts);
          main.innerHTML = `<div class="empty" style="padding-top:24vh"><div class="big">📡</div>
            <p>Practice questions couldn't be loaded. Check your internet connection and try again.</p>
            <button class="btn primary" data-act="retry">${icon("reset")} Try again</button></div>`;
          main.onclick = (e) => e.target.closest("[data-act=retry]") && App.render(opts);
        });
        return;
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

    main.innerHTML = view.html;
    main.onclick = null;
    if (view.mount) view.mount(main);
    renderNav(p);
    document.title = view.title ? `${view.title} · Vidya` : "Vidya · Class 1–12 Study App";

    // Switching tabs inside a chapter keeps your place; any other page starts at the top.
    if (!opts.keepScroll) {
      const base = chapterBase(p);
      const hero = main.querySelector(".hero");
      if (base && base === chapterBase(App.lastPath) && hero) {
        const y = hero.getBoundingClientRect().bottom + window.scrollY;
        if (window.scrollY > y) window.scrollTo(0, y);
      } else window.scrollTo(0, 0);
    }
    App.lastPath = p;
  };

  App.applyTheme = function () {
    const t = Store.state.theme;
    if (t === "system") document.documentElement.removeAttribute("data-theme");
    else document.documentElement.setAttribute("data-theme", t);
  };

  window.addEventListener("hashchange", () => {
    if (App.lastPath === "test/run" && path() !== "test/run" && Quiz.inProgress() && !confirm("Leave this test? Your answers will be lost.")) {
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

  App.applyTheme();
  App.render();

  if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  }
})();
