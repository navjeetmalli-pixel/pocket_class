// Settings: profile, language, theme, reminder, backup, offline download and reset.

(() => {
  const { D, boardPicker, topbar, classGrid, langSwitch, studentsCard, mountStudents } = Views._;

  // ---------- settings ----------


  // Phone apps only: a web page can't show a notification while it is closed.
  function reminderCard() {
    if (!Reminder.available()) return "";
    const r = Store.state.reminder;
    return `<div class="card stack" id="reminder">
      <div><strong>${t("Daily reminder")}</strong><div class="small muted">${t("A notification each day at the time you choose, to remind you to practise. It works without internet and nothing leaves your phone.")}</div></div>
      <div class="row" style="gap:12px;flex-wrap:wrap">
        <div class="seg" role="group" aria-label="${t("Daily reminder")}">
          <button data-rem="on" class="${r.on ? "on" : ""}">${t("On")}</button>
          <button data-rem="off" class="${r.on ? "" : "on"}">${t("Off")}</button>
        </div>
        ${r.on ? `<input type="time" class="input" id="rem-time" value="${esc(r.time)}" style="width:auto" aria-label="${t("Reminder time")}">` : ""}
      </div>
    </div>`;
  }

  function mountReminder(el) {
    const box = el.querySelector("#reminder");
    if (!box) return;
    box.onclick = async (e) => {
      const b = e.target.closest("[data-rem]");
      if (!b) return;
      e.stopPropagation();
      const r = Store.state.reminder;
      if (b.dataset.rem === "on" && !r.on) {
        if (await Reminder.enable(r.time)) {
          Store.setReminder(true, r.time);
          toast(t("Reminder set for {time}", { time: r.time }));
        } else toast(t("Notifications are turned off for this app. Allow them in your phone's settings to use reminders."));
      } else if (b.dataset.rem === "off" && r.on) {
        await Reminder.cancel();
        Store.setReminder(false, r.time);
        toast(t("Reminder turned off"));
      }
      App.render({ keepScroll: true });
    };
    const time = box.querySelector("#rem-time");
    if (time)
      time.onchange = async () => {
        if (!time.value) return;
        Store.setReminder(true, time.value);
        await Reminder.schedule(time.value);
        toast(t("Reminder set for {time}", { time: time.value }));
      };
  }

  function settings() {
    const st = Store.state;
    const seg = (name, items, val) =>
      `<div class="seg" role="group">${items.map(([v, l]) => `<button data-${name}="${v}" class="${String(val) === String(v) ? "on" : ""}">${t(l)}</button>`).join("")}</div>`;
    return {
      title: t("Settings"),
      html: `
        ${topbar(t("Settings"), "#/")}
        <div class="stack">
          <div class="card stack">
            <div class="field"><label for="name">${t("Your name")}</label><input id="name" class="input" value="${esc(st.profile.name)}" maxlength="30" placeholder="${t("Your name")}"></div>
            <div class="field"><label>${t("Class")}</label>${classGrid(st.profile.cls)}</div>
            <div class="field"><label>${t("Board")}</label>${boardPicker(st.profile.board || "cbse")}</div>
            <div class="field"><label>${t("App language")}</label>${langSwitch()}</div>
            <div class="field"><label>${t("Appearance")}</label>${seg("theme", [["system", "Auto"], ["light", "Light"], ["dark", "Dark"]], st.theme)}</div>
          </div>
          ${studentsCard()}
          ${reminderCard()}
          <a class="card row" href="#/parent"><span class="grow"><strong>${t("For parents")}</strong><span class="small muted" style="display:block">${t("A one-page summary of the week to show or print.")}</span></span>${icon("next")}</a>
          ${Native.is ? "" : `<div class="card">
            <strong>${t("Install on your phone")}</strong>
            <ul class="small muted" style="margin:8px 0 0;padding-left:20px">
              <li>${t("<strong>Android (Chrome):</strong> tap ⋮ menu → <em>Add to Home screen</em> or <em>Install app</em>.")}</li>
              <li>${t("<strong>iPhone (Safari):</strong> tap Share → <em>Add to Home Screen</em>.")}</li>
              <li>${t("After the first visit it works without internet.")}</li>
            </ul>
          </div>`}
          <div class="card stack">
            <div><strong>${t("Back up progress")}</strong><div class="small muted">${Native.is ? t("Progress is saved only on this phone. Save a backup file before deleting the app or moving to a new phone, then restore it there.") : t("Progress is saved only in this browser. Save a backup file before clearing browser data or moving to a new phone, then restore it there.")}</div></div>
            <div class="row" style="gap:10px;flex-wrap:wrap">
              <button class="btn" data-act="backup">${icon("download")} ${t("Save backup")}</button>
              <button class="btn" data-act="restore">${icon("upload")} ${t("Restore backup")}</button>
              <input type="file" id="restore" accept=".json,application/json" hidden>
            </div>
          </div>
          ${Native.is ? "" : `<div class="card row">
            <div class="grow"><strong>${t("Save every class for offline")}</strong><div class="small muted" id="offline-status">${t("Your own class is saved automatically. Use this if brothers or sisters share this phone (about 17 MB).")}</div></div>
            <button class="btn" data-act="offline-all">${t("Save all")}</button>
          </div>`}
          <div class="card row">
            <div class="grow"><strong>${t("Reset progress")}</strong><div class="small muted">${t("Clears this student's scores, streaks, bookmarks and mistakes.")}</div></div>
            <button class="btn bad" data-act="reset">${t("Reset")}</button>
          </div>
          <div class="card small muted">
            <strong style="color:var(--text)">${t("About Pocket Class India")}</strong><br>
            ${t("Notes, quizzes and tests are written for the CBSE / NCERT and PSEB syllabi, Classes 1 to 12. Each subject page says whether it follows the current NCERT book, an older one, or is arranged by topic. Punjabi covers grammar and writing skills for CBSE and PSEB students. The content has not yet been checked by teachers, so use it for revision alongside your textbook, and check with your teacher if anything looks different from your book. Your progress is stored only on this device.")}
          </div>
        </div>`,
      mount(el) {
        mountStudents(el);
        mountReminder(el);
        el.querySelector("#restore").onchange = (e) => {
          const file = e.target.files[0];
          if (!file) return;
          file.text().then((text) => {
            if (!confirm(t("Replace the progress on this device with this backup?"))) return;
            if (!Store.importData(text)) return toast(t("That file isn't a Pocket Class backup"));
            App.applyTheme();
            applyLang();
            toast(t("Progress restored"));
            if (location.hash === "#/") App.render();
            else location.hash = "#/";
          });
        };
        el.querySelector("#name").onchange = (e) => {
          Store.setProfile(e.target.value, st.profile.cls);
          toast(t("Name saved"));
        };
        el.onclick = (e) => {
          const b = e.target.closest("[data-lang],[data-cls],[data-board],[data-theme],[data-act]");
          if (!b) return;
          if (b.dataset.lang) {
            if (b.dataset.lang === currentLang()) return;
            Store.setLang(b.dataset.lang);
            applyLang();
          } else if (b.dataset.board) {
            if (b.dataset.board === (st.profile.board || "cbse")) return;
            Store.setBoard(b.dataset.board);
            toast(t("Switched to {name}", { name: D.boards[b.dataset.board] }));
            location.hash = "#/";
            return;
          } else if (b.dataset.cls) {
            if (Number(b.dataset.cls) === st.profile.cls) return;
            Store.setClass(Number(b.dataset.cls));
            toast(t("Switched to Class {n}", { n: b.dataset.cls }));
            // Start the new class from Home so nothing from the old class is left on screen.
            location.hash = "#/";
            return;
          } else if (b.dataset.act === "backup") {
            saveTextFile(`pocket-class-progress-${dayKey()}.json`, Store.exportData()).catch(() => {});
            return;
          } else if (b.dataset.act === "offline-all") {
            saveAllOffline(el.querySelector("#offline-status"), b);
            return;
          } else if (b.dataset.act === "restore") {
            el.querySelector("#restore").click();
            return;
          } else if (b.dataset.theme) {
            Store.setTheme(b.dataset.theme);
            App.applyTheme();
          } else if (b.dataset.act === "reset") {
            if (!confirm(t("Reset all of this student's progress? This can't be undone."))) return;
            Store.reset();
            toast(t("Progress reset"));
          }
          App.render({ keepScroll: true });
        };
      },
    };
  }

  // Fetches every class's files through the service worker, which keeps a copy of each one.
  async function saveAllOffline(status, btn) {
    const urls = D.classes.flatMap((c) => [...D.files(c), ...D.practiceFiles(c)]);
    btn.disabled = true;
    let done = 0, failed = 0;
    for (let i = 0; i < urls.length; i += 6) {
      await Promise.all(urls.slice(i, i + 6).map((u) => fetch(u, { cache: "no-cache" }).then((r) => { if (!r.ok) failed++; }).catch(() => failed++)));
      done = Math.min(i + 6, urls.length);
      status.textContent = t("Saving… {n}%", { n: Math.round((done / urls.length) * 100) });
    }
    btn.disabled = false;
    status.textContent = failed ? t("{n} files couldn't be saved. Check your connection and try again.", { n: failed }) : t("All classes are saved on this device and work offline.");
  }

  Object.assign(Views, { settings });
})();
