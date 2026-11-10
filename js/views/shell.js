// The app shell's shared pieces: the header with the profile button, the profile menu (a sheet), and small cards that
// Today, Learn and Play all draw. The five tabs themselves (Today, Learn, Play, Explore, Progress) are in js/app.js.

(() => {
  const { D, subjectStats } = Views._;

  // ---------- header with the profile button ----------

  function profileButton() {
    const p = Store.state.profile;
    return `<button type="button" class="icon-btn profile-btn" data-menu aria-haspopup="dialog" aria-expanded="false" aria-label="${t("Profile and menu")}">${Avatars.badge(p, p.name, "profile-pic", 36)}<span class="badge" data-timer-badge ${Focus.running ? "" : "hidden"}>${clock(Focus.left)}</span></button>`;
  }

  // Title and sub-line are HTML (escape names before passing them in).
  function shellHead(titleHtml, subHtml = "", tab = "") {
    return `<div class="home-head shell-head" data-tab="${tab}"><div class="grow"><h1>${titleHtml}</h1>${subHtml ? `<div class="sub">${subHtml}</div>` : ""}</div>${profileButton()}</div>`;
  }

  // ---------- the profile menu ----------

  let opener = null;
  const studentName = (stu, i) => stu.name || t("Student {n}", { n: i + 1 });

  function menuHTML() {
    const st = Store.state;
    const p = st.profile;
    const list = Store.students();
    const item = (href, ic, label, extra = "") => `<a class="sheet-item" href="${href}">${icon(ic)}<span class="grow">${label}</span>${extra}</a>`;
    const timerBadge = `<span class="badge" data-timer-badge ${Focus.running ? "" : "hidden"}>${clock(Focus.left)}</span>`;
    const students =
      list.length > 1
        ? `<div class="sheet-group" role="group" aria-label="${t("Switch student")}"><div class="sheet-label">${t("Switch student")}</div>${list
            .map(
              (x, i) =>
                `<button type="button" class="sheet-item" data-stud="${x.id}" ${x.id === Store.currentId ? 'aria-current="true"' : ""}>${Avatars.badge(x, studentName(x, i), "av", 28)}<span class="grow">${esc(studentName(x, i))} <span class="small muted">${International.label(x)}</span></span>${x.id === Store.currentId ? `<span class="pill accent">${t("Current")}</span>` : ""}</button>`
            )
            .join("")}</div>`
        : item("#/settings", "users", t("Switch student"), `<span class="small muted">${t("Add a student")}</span>`);
    return `<div class="sheet-back" data-sheet-close></div>
      <div class="sheet" role="dialog" aria-modal="true" aria-labelledby="sheet-h" id="menu-sheet">
        <div class="sheet-head">${Avatars.badge(p, p.name, "profile-pic", 44)}
          <div class="grow"><strong id="sheet-h">${esc(p.name || t("Student"))}</strong><div class="small muted">${International.label(p)} · ${p.board === "intl" ? t(International.country(p.country).name) : p.board === "pseb" ? "PSEB" : "CBSE"}</div></div>
          <button type="button" class="icon-btn" data-sheet-close aria-label="${t("Close")}">${icon("x")}</button></div>
        <div class="sheet-list">
          ${item("#/profile", "settings", t("Profile"))}
          ${students}
          ${p.board === "intl" ? "" : item("#/search", "search", t("Search"))}
          ${item("#/settings", "settings", t("Settings"))}
          ${item("#/parent", "lock", t("Parent area"))}
          ${item("#/timer", "timer", t("Timer"), timerBadge)}
          ${Native.is ? "" : item("#/offline", "download", t("Downloads"), `<span class="small muted">${t("Save for offline")}</span>`)}
        </div>
      </div>`;
  }

  function closeMenu(restore = true) {
    const box = document.getElementById("menu-sheet-box");
    if (!box) return;
    box.remove();
    document.querySelectorAll("[data-menu]").forEach((b) => b.setAttribute("aria-expanded", "false"));
    if (restore && opener && opener.isConnected) opener.focus();
    opener = null;
  }

  function openMenu(trigger) {
    closeMenu(false);
    opener = trigger;
    const box = document.createElement("div");
    box.id = "menu-sheet-box";
    box.innerHTML = menuHTML();
    document.body.appendChild(box);
    document.querySelectorAll("[data-menu]").forEach((b) => b.setAttribute("aria-expanded", "true"));
    const focusables = () => [...box.querySelectorAll("a[href], button")];
    focusables()[1].focus(); // the first item (the close button comes before it)
    box.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        closeMenu();
      } else if (e.key === "Tab") {
        const f = focusables();
        const first = f[0];
        const last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    });
    box.addEventListener("click", (e) => {
      if (e.target.closest("[data-sheet-close]")) return closeMenu();
      const stud = e.target.closest("[data-stud]");
      if (stud) {
        const id = stud.dataset.stud;
        closeMenu(false);
        if (id !== Store.currentId) {
          Store.switchStudent(id);
          if (location.hash === "#/" || location.hash === "") App.render();
          else location.hash = "#/";
        }
        return;
      }
      if (e.target.closest("a[href]")) closeMenu(false); // the page changes, and the router moves focus to it
    });
  }

  document.addEventListener("click", (e) => {
    const b = e.target.closest("[data-menu]");
    if (b) openMenu(b);
  });
  window.addEventListener("hashchange", () => closeMenu(false));

  // ---------- small cards shared by Today, Learn and Play ----------

  // Bold tiles (Classes 1-5): the subject's own bright colour, darkened only as far as needed for the large bold white name to
  // read (3:1, the large-text level); the small chapter count sits on a white pill, so it does not depend on the tile colour.
  function tileTop(hex) {
    const lum = (r, g, b) => [r, g, b].map((v) => (v /= 255) <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4).reduce((a, v, i) => a + v * [0.2126, 0.7152, 0.0722][i], 0);
    const [r, g, b] = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16));
    for (let k = 1; k >= 0.5; k -= 0.02) if (1.05 / (lum(r * k, g * k, b * k) + 0.05) >= 3.2) return `rgb(${Math.round(r * k)} ${Math.round(g * k)} ${Math.round(b * k)})`;
    return hex;
  }
  // A subject as a card with its progress; `href` defaults to the subject page.
  function subjectCard(c, s, href, meta) {
    const x = subjectStats(c, s.id);
    const p = Store.state.profile;
    const bold = !!p && p.cls != null && p.cls <= 5 && typeof Pics !== "undefined";
    const art = typeof Pics === "undefined" ? SubjectIcons.html(s) : `<span class="subject-art">${Pics.subjectSvg(s.id, bold ? 72 : 32)}</span>`;
    return `<a class="card subject-card${bold ? " bold" : ""}" href="${href || `#/subject/${s.id}`}" style="--c:${s.color}${bold ? `;--c1:${tileTop(s.color)}` : ""}">
      ${bold ? `<span class="subject-pic">${art}</span>` : `<span class="subject-icon">${art}</span>`}
      <span class="subject-name">${esc(s.name)}</span>
      ${Release.applies() ? "" : `<span class="subject-hi">${esc(s.native)}</span>`}
      ${meta === undefined ? `<span class="bar"><i style="width:${pct(x.done, x.total)}%"></i></span>` : ""}
      <span class="subject-meta">${meta !== undefined ? meta : x.total ? t("{done} / {total} chapters", { done: x.done, total: x.total }) : t("Coming soon")}</span>
    </a>`;
  }

  // Subject cards, grouped by stream for Classes 11 and 12.
  function subjectGrid(c, list, card = (s) => subjectCard(c, s)) {
    if (c >= 11) {
      return [...new Set(list.map((s) => s.stream))]
        .map((st) => `<h3 class="stream-label">${esc(t(st))}</h3><div class="subject-grid">${list.filter((s) => s.stream === st).map(card).join("")}</div>`)
        .join("");
    }
    return `<div class="subject-grid">${list.map(card).join("")}</div>`;
  }

  // Chapters of this class the learner opened most recently: [{ subj, ch, at, href }].
  function recentChapters(c, limit) {
    return Object.entries(Store.state.chapters)
      .filter(([, r]) => typeof r.opened === "number")
      .map(([k, r]) => ({ k: Store.parseKey(k), at: r.opened }))
      .filter((x) => x.k.cls === c)
      .sort((a, b) => b.at - a.at)
      .map((x) => {
        const f = Views._.findChapter(c, x.k.subject, x.k.chapterId);
        return f ? { subj: f.subj, ch: f.ch, at: x.at, href: `#/chapter/${c}/${f.subj.id}/${f.ch.id}` } : null;
      })
      .filter(Boolean)
      .slice(0, limit);
  }

  function recentList(c, limit) {
    const list = recentChapters(c, limit);
    if (!list.length) return "";
    return `<div class="list">${list
      .map(
        (r) => `<a class="card chapter-row" href="${r.href}" style="--c:${r.subj.color}">
          <span class="ch-num">${SubjectIcons.html(r.subj)}</span>
          <span class="ch-body"><span class="ch-title">${esc(r.ch.title)}</span><span class="ch-sum">${esc(r.subj.short)} · ${relDate(r.at)}</span></span>
          ${icon("next")}</a>`
      )
      .join("")}</div>`;
  }

  Object.assign(Views._, { tileTop, shellHead, profileButton, subjectCard, subjectGrid, recentChapters, recentList, closeMenu });
})();
