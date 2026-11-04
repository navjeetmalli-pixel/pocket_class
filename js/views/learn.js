// Learn (#/learn, spec 7.2 and section 6): the catalogue. One content graph, two views over it:
//   Class-wise    every subject of the learner's board and class
//   Subject-wise  only the subjects the learner picked (all of them when nothing is picked)
// The switch is saved as profile.view. It changes what is listed, never the progress. Study tools, Practice by topic,
// search and recently opened chapters are the same in both.

(() => {
  const { D, cls } = Views._;

  function toolCard(href, ic, title, sub) {
    return `<a class="card tool" href="${href}"><span class="ti">${icon(ic)}</span><span class="tt">${title}</span><span class="ts">${sub}</span></a>`;
  }

  function learn() {
    const st = Store.state;
    const p = st.profile;
    const c = cls();
    const band = App.band(c);
    const young = band === "1-2" || band === "3-5";
    const view = p.view === "subject" ? "subject" : "class";
    const boardName = p.board === "pseb" ? "PSEB" : "CBSE";

    // Class-wise: every subject of the board and class. Subject-wise: the picked ones.
    const all = D.subjectsFor(c);
    const mine = new Set(Store.selectedSubjects());
    const list = view === "subject" ? all.filter((s) => mine.has(s.id)) : all;

    const tools = [
      band === "1-2" ? "" : toolCard("#/test", "test", t("Mock test"), t("Timed test across chapters")),
      toolCard("#/sheets", "print", t("Practice sheets"), t("Make and print your own")),
      Papers.CLASSES.includes(c) ? toolCard("#/papers", "test", t("Sample papers"), t("Full board-pattern papers")) : "",
      toolCard("#/revise", "formula", t("Formula sheets"), t("Quick revision lists")),
    ].join("");

    const recent = Views._.recentList(c, young ? 2 : 3);
    const seg = [["class", "Class-wise"], ["subject", "Subject-wise"]]
      .map(([v, l]) => `<button type="button" data-view="${v}" class="${view === v ? "on" : ""}">${t(l)}</button>`)
      .join("");

    return {
      title: t("Learn"),
      html: `
        ${Views._.shellHead(t("Learn"), t("Everything you can study in Class {n}", { n: c }), "learn")}
        <div class="learn-top">
          <a class="class-pill" href="#/profile" aria-label="${t("{board} · Class {n}. Change in your profile.", { board: boardName, n: c })}"><span>${boardName}</span><b>${t("Class {n}", { n: c })}</b>${icon("next")}</a>
          <div class="seg learn-seg" role="group" aria-label="${t("Learning view")}">${seg}</div>
        </div>
        <a class="search-link" href="#/search">${icon("search")}<span>${t("Search chapters, topics, terms…")}</span></a>
        <div class="learn-body">
          ${Views._.boardNote(c)}
          <div class="row learn-sub">
            <h2 class="block-title grow" style="margin:0">${view === "subject" ? t("Your subjects") : t("All subjects in Class {n}", { n: c })}</h2>
            ${view === "subject" ? `<a class="manage-link" href="#/profile">${t("Manage subjects")}</a>` : ""}
          </div>
          ${list.length ? Views._.subjectGrid(c, list) : `<div class="card empty">${t("No subjects yet. Choose your subjects in your profile.")}</div>`}
          <h2 class="block-title">${t("Practice")}</h2>
          <a class="card tool tool-wide" href="#/paths"><span class="ti">${icon("target")}</span><span class="grow"><span class="tt" style="display:block">${t("Practice by topic")}</span><span class="ts" style="display:block">${view === "subject" ? t("Level 0 up to advanced, for your subjects") : t("Level 0 up to advanced")}</span></span>${icon("next")}</a>
          <h2 class="block-title">${t("Study tools")}</h2>
          <div class="tools">${tools}</div>
          ${recent ? `<h2 class="block-title">${t("Recently opened")}</h2>${recent}` : ""}
        </div>`,
      mount(el) {
        el.querySelector(".learn-seg").onclick = (e) => {
          const b = e.target.closest("[data-view]");
          if (!b || b.dataset.view === view) return;
          Store.setProfile({ view: b.dataset.view }); // browsing only: no progress, scores or revision dates change
          App.render({ keepScroll: true });
        };
      },
    };
  }

  Object.assign(Views, { learn });
})();
