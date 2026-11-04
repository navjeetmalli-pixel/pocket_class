// Learner profile (#/profile): reached from the picture on Home and from Settings. Edits the fields that setup asks for:
// name, picture, board, class, learning view, subjects, lesson language and daily goal. Changing the class or board never
// deletes progress; if it would drop picked subjects the learner is asked first.

(() => {
  const { D, topbar, classGrid, boardPicker } = Views._;

  const chip = (attr, val, label, on, icon_ = "") => `<button type="button" ${attr}="${val}" aria-pressed="${!!on}">${icon_ ? `<span aria-hidden="true">${icon_}</span>` : ""}${label}</button>`;

  function profile() {
    const st = Store.state;
    const p = st.profile;
    const avail = Store.availableSubjects();
    const picked = new Set(Store.selectedSubjects());
    const seg = (name, items, val) => `<div class="seg" role="group">${items.map(([v, l]) => `<button type="button" data-${name}="${v}" class="${String(val) === String(v) ? "on" : ""}">${t(l)}</button>`).join("")}</div>`;
    const intl = p.board === "intl";
    const X = International;
    const ctry = X.country(p.country);
    const subjectLead = intl ? t("These subjects show in Learn, Today's plan, Play and Explore.") : p.view === "subject" ? t("These subjects show on Home and in Today's plan.") : t("Class-wise shows every subject on Home. Untick a subject to leave it out of Today's plan.");
    return {
      title: t("Profile"),
      html: `
        ${topbar(t("Profile"), "#/")}
        <div class="stack">
          <div class="card row" style="gap:14px">${Avatars.badge(p, p.name, "av", 56)}<div class="grow"><strong style="font-size:18px">${esc(p.name || t("Student"))}</strong><div class="small muted">${X.label(p)} · ${intl ? t(ctry.name) : p.board === "pseb" ? "PSEB" : "CBSE"}</div></div></div>
          <div class="card stack">
            <div class="field"><label for="pf-name">${t("Your name")}</label><input id="pf-name" class="input" value="${esc(p.name)}" maxlength="30"></div>
            <div class="field"><span class="lab" id="pf-av">${t("Choose a picture")}</span>
              <div class="ob-avatars" role="group" aria-labelledby="pf-av">${Store.AVATARS.map((id, i) => `<button type="button" data-avatar="${id}" aria-label="${t("Picture {n}", { n: i + 1 })}" aria-pressed="${p.avatar === id}">${Avatars.svg(id, 64)}</button>`).join("")}</div></div>
          </div>
          <div class="card stack">
            <div class="field"><label>${t("Board")}</label>${boardPicker(p.board, true)}</div>
            ${intl
              ? `<div class="field"><span class="lab" id="pf-country" style="font-size:14px;font-weight:650;color:var(--muted)">${t("Country")}</span>
                <div class="prof-chips" role="group" aria-labelledby="pf-country">${X.COUNTRIES.map((c) => chip("data-country", c.id, t(c.name), p.country === c.id)).join("")}</div></div>
              <div class="field"><span class="lab" id="pf-year" style="font-size:14px;font-weight:650;color:var(--muted)">${t("School year")}</span>
                <div class="prof-chips" role="group" aria-labelledby="pf-year">${ctry.years.map((y) => chip("data-year", y.id, X.optName(y), X.option(p).id === y.id)).join("")}</div></div>
              <div class="field"><span class="lab" id="pf-cur" style="font-size:14px;font-weight:650;color:var(--muted)">${t("Money symbol")}</span>
                <div class="prof-chips" role="group" aria-labelledby="pf-cur">${X.CURRENCIES.map((c) => chip("data-cur", c, c, X.currency(p) === c)).join("")}</div>
                <span class="small muted">${t("Shown in questions about money.")}</span></div>`
              : `<div class="field"><label>${t("Class")}</label>${classGrid(p.cls)}</div>`}
            <div class="small muted">${intl ? t("Changing country, year or board keeps all your progress.") : t("Changing board or class keeps all your progress.")}</div>
          </div>
          <div class="card stack">
            ${intl ? "" : `<div class="field"><label>${t("Learning view")}</label>${seg("view", [["class", "Class-wise"], ["subject", "Subject-wise"]], p.view)}
              <span class="small muted">${p.view === "class" ? t("Follow your class programme with all available subjects") : t("Focus on the subjects you want")}</span></div>`}
            <div class="field"><span class="lab" id="pf-sub" style="font-size:14px;font-weight:650;color:var(--muted)">${t("Subjects")}</span>
              <div class="prof-chips" role="group" aria-labelledby="pf-sub">${avail.map((s) => chip("data-sub", s.id, esc(s.name), picked.has(s.id), SubjectIcons.html(s))).join("")}</div>
              <span class="small muted">${subjectLead}</span></div>
          </div>
          <div class="card stack">
            ${intl || Release.langLocked("hi") || Release.langLocked("pa") ? "" : `<div class="field"><label>${t("Lesson language")}</label>${seg("ll", [["en", "English"], ["hi", "Hindi"], ["pa", "Punjabi"]], p.learnLang)}
              <span class="small muted">${t("The language you like explanations in. Not every lesson has every language yet.")}</span></div>`}
            <div class="field"><span class="lab" id="pf-goal" style="font-size:14px;font-weight:650;color:var(--muted)">${t("Daily goal")}</span>
              <div class="prof-chips" role="group" aria-labelledby="pf-goal">${[15, 20, 30].map((n) => chip("data-goal", n, t("{n} minutes", { n }), p.goal === n)).join("")}${chip("data-goal", "none", t("Decide later"), p.goal == null)}</div></div>
          </div>
          <a class="card row" href="#/settings"><span class="grow"><strong>${t("Settings")}</strong><span class="small muted" style="display:block">${t("App language, appearance, students, backup")}</span></span>${icon("next")}</a>
        </div>`,
      mount(el) {
        el.querySelector("#pf-name").onchange = (e) => {
          Store.setProfile({ name: e.target.value });
          toast(t("Name saved"));
          App.render({ keepScroll: true });
        };
        el.onclick = (e) => {
          const b = e.target.closest("button, a");
          if (!b || !el.contains(b) || b.tagName === "A") return;
          const d = b.dataset;
          if (d.avatar) Store.setProfile({ avatar: d.avatar });
          else if (d.view) Store.setProfile({ view: d.view });
          else if (d.ll) Store.setProfile({ learnLang: d.ll });
          else if (d.goal) Store.setProfile({ goal: d.goal === "none" ? null : Number(d.goal) });
          else if (d.sub) {
            const cur = new Set(Store.selectedSubjects());
            cur.has(d.sub) ? cur.delete(d.sub) : cur.add(d.sub);
            if (!cur.size) return toast(t("Keep at least one subject"));
            Store.setProfile({ subjects: cur.size === avail.length ? null : [...cur] });
          } else if (d.country) {
            if (d.country === p.country) return;
            const lvl = Math.min(12, Math.max(0, p.cls));
            // The money symbol follows the country unless the learner picked another one.
            const own = p.currency && p.currency !== International.country(p.country).cur;
            Store.setProfile({ country: d.country, year: International.defaultYear(d.country, lvl), currency: own ? p.currency : International.country(d.country).cur });
          } else if (d.year) {
            const y = International.country(p.country).years.find((x) => x.id === d.year);
            if (y) Store.setProfile({ year: y.id, cls: y.level });
          } else if (d.cur) Store.setProfile({ currency: d.cur });
          else if (d.board || d.cls) {
            const patch = d.board ? { board: d.board } : { cls: Number(d.cls) };
            if ((patch.board || patch.cls) === (d.board ? p.board : p.cls)) return;
            // Between the Indian boards and International the class and the level are the same number (level 0 becomes Class 1).
            const crossing = d.board && (d.board === "intl") !== (p.board === "intl");
            if (crossing && d.board === "intl") {
              const cid = p.country || "other";
              const lvl = Math.min(12, Math.max(0, p.cls));
              Object.assign(patch, { country: cid, year: International.defaultYear(cid, lvl), cls: lvl, currency: p.currency || International.country(cid).cur });
            } else if (crossing) patch.cls = Math.min(12, Math.max(1, p.cls));
            const lost = Store.droppedBy(patch);
            const names = lost.map((id) => (D.subject(id) || { name: id }).name).join(", ");
            const name = d.board === "intl" ? t("International") : D.boards[d.board];
            if (crossing) {
              const msg = t("Switch to {name}? All your progress is kept and you can switch back any time.", { name }) + (lost.length ? " " + t("{names} isn't offered for this board and class, so it will be taken off your subjects.", { names }) : "");
              if (!confirm(msg)) return;
            } else if (lost.length && !confirm(t("{names} isn't offered for this board and class, so it will be taken off your subjects. Your progress is kept. Change anyway?", { names }))) return;
            Store.setProfile(patch);
            toast(d.board ? t("Switched to {name}", { name }) : t("Switched to Class {n}", { n: d.cls }));
          } else return;
          App.render({ keepScroll: true });
        };
      },
    };
  }

  Object.assign(Views, { profile });
})();
