// Settings: profile, language, theme, reminder, backup, offline download and reset.

(() => {
  const { D, boardPicker, topbar, classGrid, langSwitch, studentsCard, mountStudents } = Views._;

  // ---------- settings ----------

  // The About text mentions Punjabi grammar; while the release lock hides Punjabi, that sentence is left out (English only).
  const noPunjabiNote = (text) => (Release.applies() ? text.replace(" Punjabi covers grammar and writing skills for CBSE and PSEB students.", "") : text);

  // Phone apps only: a web page can't show a notification while it is closed.
  // ---------- Read-aloud voice (js/speech.js): a voice per language from this device's voices, a speed, and a sample ----------
  const VOICE_LANGS = [["en", "English"], ["hi", "Hindi"], ["pa", "Punjabi"]];
  const shownLangs = () => VOICE_LANGS.filter(([l]) => !Release.langLocked(l) && Speech.voicesFor(l).length);
  function voiceRows() {
    const langs = shownLangs();
    if (!langs.length) return `<p class="small muted" style="margin:8px 0 0">${t("This device has no read-aloud voices yet. They can be added in the phone's settings (Accessibility → Spoken content, or Text-to-speech).")}</p>`;
    return langs
      .map(([l, name]) => {
        const list = Speech.voicesFor(l);
        const cur = Speech.voiceFor(l);
        const opts = list.map((v) => `<option value="${esc(Speech.idOf(v))}" ${cur && Speech.idOf(cur) === Speech.idOf(v) ? "selected" : ""}>${esc(v.name)}${v.lang ? ` (${esc(v.lang)})` : ""}</option>`).join("");
        return `<div class="field voice-row"><label for="voice-${l}">${t(name)}</label>
          <div class="voice-pick"><select id="voice-${l}" data-voice="${l}">${opts}</select>
          <button type="button" class="btn" data-try="${l}" aria-label="${t("Try the {lang} voice", { lang: t(name) })}">${icon("play")} ${t("Try")}</button></div></div>`;
      })
      .join("");
  }
  function voiceCard() {
    if (!Speech.supported) return "";
    const r = Speech.rate();
    const speed = [["slow", "Slow"], ["normal", "Normal"], ["quick", "Quick"]].find(([k]) => Math.abs(Speech.RATES[k] - r) < 0.01);
    return `<div class="card" id="voice-card"><strong>${icon("speaker")} ${t("Read-aloud voice")}</strong>
      <p class="small muted" style="margin:4px 0 8px">${t("Pick the voice and speed Mithu reads with. The voices are the ones on this phone.")}</p>
      <div id="voice-rows">${voiceRows()}</div>
      <div class="field"><label>${t("Speed")}</label><div class="seg" role="group" aria-label="${t("Speed")}">${[["slow", "Slow"], ["normal", "Normal"], ["quick", "Quick"]]
        .map(([k, l]) => `<button type="button" data-voice-rate="${k}" class="${(speed ? speed[0] : "normal") === k ? "on" : ""}" aria-pressed="${(speed ? speed[0] : "normal") === k}">${t(l)}</button>`)
        .join("")}</div></div>
    </div>`;
  }
  function mountVoice(el) {
    const card = el.querySelector("#voice-card");
    if (!card) return;
    const tryLang = () => (shownLangs()[0] || ["en"])[0];
    card.addEventListener("change", (e) => {
      const sel = e.target.closest("select[data-voice]");
      if (!sel) return;
      Speech.setVoice(sel.dataset.voice, sel.value);
      Speech.preview(sel.dataset.voice);
    });
    card.addEventListener("click", (e) => {
      const b = e.target.closest("[data-try]");
      if (b) return Speech.preview(b.dataset.try);
      const r = e.target.closest("[data-voice-rate]");
      if (!r) return;
      const key = r.dataset.voiceRate;
      if (!Speech.RATES[key]) return;
      Speech.setRate(Speech.RATES[key]);
      card.querySelectorAll("[data-voice-rate]").forEach((x) => {
        x.classList.toggle("on", x === r);
        x.setAttribute("aria-pressed", x === r);
      });
      Speech.preview(tryLang());
    });
    // Voices often arrive a moment after the page: fill the lists when they do.
    if (window.speechSynthesis && window.speechSynthesis.addEventListener)
      window.speechSynthesis.addEventListener("voiceschanged", () => {
        const rows = el.querySelector("#voice-rows");
        if (rows && rows.isConnected) rows.innerHTML = voiceRows();
      });
  }

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

  // Before a board or class change: if picked subjects would be dropped, say so and ask. Progress is never deleted.
  function confirmDrop(patch) {
    const lost = Store.droppedBy(patch);
    if (!lost.length) return true;
    const names = lost.map((id) => (D.subject(id) || { name: id }).name).join(", ");
    return confirm(t("{names} isn't offered for this board and class, so it will be taken off your subjects. Your progress is kept. Change anyway?", { names }));
  }

  function settings([where] = []) {
    const st = Store.state;
    const seg = (name, items, val) =>
      `<div class="seg" role="group">${items.map(([v, l]) => `<button data-${name}="${v}" class="${String(val) === String(v) ? "on" : ""}">${t(l)}</button>`).join("")}</div>`;
    return {
      title: t("Settings"),
      html: `
        ${topbar(t("Settings"), "#/")}
        <div class="stack">
          <a class="card row" href="#/profile" id="profile-link">${Avatars.badge(st.profile, st.profile.name, "av", 40)}<span class="grow"><strong>${t("Profile")}</strong><span class="small muted" style="display:block">${t("Picture, subjects, learning view, lesson language and daily goal")}</span></span>${icon("next")}</a>
          <div class="card stack">
            <div class="field"><label for="name">${t("Your name")}</label><input id="name" class="input" value="${esc(st.profile.name)}" maxlength="30" placeholder="${t("Your name")}"></div>
            ${st.profile.board === "intl"
              ? `<div class="field"><label>${t("School year")}</label><a class="btn" href="#/profile">${International.label(st.profile)} · ${t(International.country(st.profile.country).name)}</a><span class="small muted">${t("Change your country, year and currency in your profile.")}</span></div>`
              : `<div class="field"><label>${t("Class")}</label>${classGrid(st.profile.cls)}</div>
            <div class="field"><label>${t("Board")}</label>${boardPicker(st.profile.board || "cbse")}</div>`}
            ${langSwitch() ? `<div class="field"><label>${t("App language")}</label>${langSwitch()}</div>` : ""}
            <div class="field"><label>${t("Appearance")}</label>${seg("theme", [["system", "Auto"], ["light", "Light"], ["dark", "Dark"]], st.theme)}</div>
          </div>
          ${studentsCard()}
          <div class="card"><label class="switch"><span><strong>${t("Show streak")}</strong><br><span class="small muted">${t("Shows the days in a row you studied on Home and Progress. Missing a day never takes anything away.")}</span></span><input type="checkbox" id="show-streak" ${Store.showStreak() ? "checked" : ""}></label></div>
          <div class="card"><label class="switch"><span><strong>${icon("speaker")} ${t("Sound effects")}</strong><br><span class="small muted">${t("Short, soft sounds when you answer and tap. Turn them off if you prefer quiet.")}</span></span><input type="checkbox" id="sound-on" ${Sound.enabled() ? "checked" : ""}></label></div>
          ${voiceCard()}
          ${reminderCard()}
          <a class="card row" href="#/parent"><span class="grow"><strong>${t("For parents")}</strong><span class="small muted" style="display:block">${t("A one-page summary of the week to show or print.")}</span></span>${icon("next")}</a>
          <div class="card row" id="pin-card">
            <div class="grow"><strong>${icon("lock")} ${t("Parent PIN")}</strong><div class="small muted">${Pin.isSet() ? t("On. The Parent area, deleting a student, resetting progress and restoring a backup ask for it.") : t("Off. Set a 4-digit PIN to keep the Parent area and actions that can't be undone away from children.")}</div></div>
            <div class="row" style="gap:8px;flex-wrap:wrap;justify-content:flex-end">
              <button class="btn" data-act="pin-set">${Pin.isSet() ? t("Change PIN") : t("Set PIN")}</button>
              ${Pin.isSet() ? `<button class="btn" data-act="pin-off">${t("Turn off")}</button>` : ""}
            </div>
          </div>
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
          ${Native.is ? "" : `<a class="card row" id="offline-card" tabindex="-1" href="#/offline">
            <div class="grow"><strong>${t("Offline packs")}</strong><div class="small muted" id="offline-status">${t("Your own class is saved automatically. Choose more classes and subjects to keep for use without internet, for example for brothers or sisters.")}</div></div>
            ${icon("next")}
          </a>`}
          <div class="card row">
            <div class="grow"><strong>${t("Reset progress")}</strong><div class="small muted">${t("Clears this student's scores, streaks, bookmarks and mistakes.")}</div></div>
            <button class="btn bad" data-act="reset">${t("Reset")}</button>
          </div>
          <div class="card small muted">
            <strong style="color:var(--text)">${t("About Pocket Class India")}</strong><br>
            ${st.profile.board === "intl" ? t("Maths, English and Science practice by topic, from beginner to advanced level. It is not tied to any national curriculum. The questions and notes are in English, were written for Indian school books, and have not yet been checked by teachers. Your progress is stored only on this device.") : noPunjabiNote(t("Notes, quizzes and tests are written for the CBSE / NCERT and PSEB syllabi, Classes 1 to 12. Each subject page says whether it follows the current NCERT book, an older one, or is arranged by topic. Punjabi covers grammar and writing skills for CBSE and PSEB students. The content has not yet been checked by teachers, so use it for revision alongside your textbook, and check with your teacher if anything looks different from your book. Your progress is stored only on this device."))}
          </div>
        </div>`,
      mount(el) {
        mountStudents(el);
        mountReminder(el);
        if (where === "offline") {
          const card = el.querySelector("#offline-card");
          if (card) setTimeout(() => card.scrollIntoView({ block: "center" }), 0);
        }
        el.querySelector("#show-streak").onchange = (e) => {
          Store.setPref("streak", e.target.checked);
          toast(e.target.checked ? t("Streak is shown") : t("Streak is hidden"));
        };
        mountVoice(el);
        el.querySelector("#sound-on").onchange = (e) => {
          Sound.set(e.target.checked);
          if (e.target.checked) Sound.play("pop");
          toast(e.target.checked ? t("Sounds are on") : t("Sounds are off"));
        };
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
          if (!b || !el.contains(b)) return; // (<html data-theme> also matches: clicks elsewhere must not redraw the page)
          if (b.dataset.lang) {
            if (b.dataset.lang === currentLang()) return;
            Store.setLang(b.dataset.lang);
            applyLang();
          } else if (b.dataset.board) {
            if (b.dataset.board === (st.profile.board || "cbse")) return;
            if (!confirmDrop({ board: b.dataset.board })) return;
            Store.setBoard(b.dataset.board);
            toast(t("Switched to {name}", { name: D.boards[b.dataset.board] }));
            location.hash = "#/";
            return;
          } else if (b.dataset.cls) {
            if (Number(b.dataset.cls) === st.profile.cls) return;
            if (!confirmDrop({ cls: Number(b.dataset.cls) })) return;
            Store.setClass(Number(b.dataset.cls));
            toast(t("Switched to Class {n}", { n: b.dataset.cls }));
            // Start the new class from Home so nothing from the old class is left on screen.
            location.hash = "#/";
            return;
          } else if (b.dataset.act === "backup") {
            saveTextFile(`pocket-class-progress-${dayKey()}.json`, Store.exportData()).catch(() => {});
            return;
          } else if (b.dataset.act === "restore") {
            Pin.guard(t("Restoring a backup replaces the progress on this device."), () => el.querySelector("#restore").click());
            return;
          } else if (b.dataset.act === "pin-set") {
            // Changing the PIN asks for the old one first; with none set, ask() itself creates one.
            const had = Pin.isSet();
            Pin.ask(t("To change the PIN, enter the one you have now.")).then((ok) => {
              if (!ok) return;
              if (had) {
                Pin.remove();
                Pin.ask().then(() => App.render({ keepScroll: true }));
              } else App.render({ keepScroll: true });
            });
            return;
          } else if (b.dataset.act === "pin-off") {
            Pin.ask(t("To turn the PIN off, enter it.")).then((ok) => {
              if (!ok) return;
              Pin.remove();
              toast(t("Parent PIN turned off"));
              App.render({ keepScroll: true });
            });
            return;
          } else if (b.dataset.theme) {
            Store.setTheme(b.dataset.theme);
            App.applyTheme();
          } else if (b.dataset.act === "reset") {
            Pin.guard(t("Resetting progress can't be undone."), () => {
              if (!confirm(t("Reset all of this student's progress? This can't be undone."))) return;
              Store.reset();
              toast(t("Progress reset"));
              App.render({ keepScroll: true });
            });
            return;
          }
          App.render({ keepScroll: true });
        };
      },
    };
  }

  // Fetches every class's files through the service worker, which keeps a copy of each one.
  Object.assign(Views, { settings });
})();
