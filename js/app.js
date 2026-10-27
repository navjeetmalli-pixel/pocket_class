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

  App.render = function (opts = {}) {
    const main = document.getElementById("app");
    const p = path();
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
    document.title = view.title ? `${view.title} · Vidya` : "Vidya · Class 9 & 10 Study App";

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
