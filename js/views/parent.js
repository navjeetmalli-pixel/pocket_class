// One-page summary for parents.

(() => {
  const { D, cls, topbar, subjectStats, findChapter, dueList, dueRows } = Views._;

  // ---------- for parents ----------

  // What the student can do, is practising and should review, in plain words (no labels on the child). From the learning record.
  function skillsSection(c) {
    const g = Learn.groups(c);
    const block = (title, items) => {
      const shown = items.filter((x) => x.objective);
      if (!shown.length) return "";
      const f = (x) => findChapter(c, x.subject, x.chapter);
      return `<h3>${title}</h3><ul>${shown
        .slice(0, 6)
        .map((x) => `<li>${esc(x.objective.text)} <span class="from">${f(x) ? esc(f(x).subj.short) + " · " + esc(f(x).ch.title) : ""}</span></li>`)
        .join("")}</ul>${shown.length > 6 ? `<p class="small muted">${t("and {n} more", { n: shown.length - 6 })}</p>` : ""}`;
    };
    const html = block(t("Can do now"), g.can) + block(t("Practising"), g.practising) + block(t("To review"), g.review);
    return `<h2 class="block-title">${t("Skills")}</h2>
      ${html ? `<div class="card obj-groups">${html}</div><p class="tiny muted" style="margin-top:8px">${t("Worked out from quiz answers, lessons and games. A skill counts as done when it is answered correctly without hints, and comes back for review after a few days.")}</p>` : `<div class="card small muted">${t("Skills will appear here once there have been some quizzes, lessons or games.")}</div>`}`;
  }

  // Understanding and exam practice, in plain sentences for a parent (no labels on the child). Two separate things:
  // what the child understands (skills), and how mock-test practice is going (spec 14.3).
  function readinessSection(c) {
    const rows = D.subjectsFor(c)
      .filter((s) => D.chapters(c, s.id).length)
      .map((s) => ({ s, cc: Readiness.concept(c, s.id), ex: Readiness.exam(c, s.id) }))
      .filter((r) => r.cc.started || r.ex.attempted);
    if (!rows.length) return "";
    const nextText = (r) => {
      const n = Readiness.examNext(c, r.s.id, r.ex);
      if (!n) return "";
      const f = n.chapter ? findChapter(c, r.s.id, n.chapter) : null;
      return {
        "first-test": () => t("A next step: a short mock test in {subject}.", { subject: esc(r.s.short) }),
        "more-answers": () => t("A next step: a few more mock test questions, so the picture is clearer."),
        lowest: () => (f ? t("A next step: go over {chapter} again, which has been the hardest in tests.", { chapter: esc(f.ch.title) }) : ""),
        untested: () => t("A next step: a test that includes the {n} {n:chapter|chapters} not tested yet.", { n: n.n }),
        timed: () => t("A next step: a timed test, to get used to working with the clock."),
        paper: () => t("A next step: a full sample paper in the exam pattern."),
        again: () => t("A next step: keep taking mock tests now and then."),
      }[n.k]();
    };
    const html = rows
      .map(({ s, cc, ex }) => {
        const understood = t("{n} {n:skill|skills} started: {a} being understood, {b} being practised, {c} to remember after a break, {d} ready to use in new problems.", { n: cc.started, a: cc.understanding, b: cc.practising, c: cc.remembering, d: cc.ready });
        const tested = ex.all[1]
          ? t("In mock tests: {a} of {b} chapters tried, {n} {n:answer|answers} given", { a: ex.tested, b: ex.total, n: ex.all[1] }) + (ex.all[1] >= Readiness.config.minAnswers ? t(", about {p}% right.", { p: Readiness.pctOf(ex.all[0], ex.all[1]) }) : ".")
          : t("No mock tests taken yet ({a} of {b} chapters tried in quizzes).", { a: ex.attempted, b: ex.total });
        return `<div style="--c:${s.color}"><strong>${SubjectIcons.html(s)} ${esc(s.name)}</strong>
          <p>${cc.started ? understood : t("No skills started yet.")}</p>
          <p>${tested}</p>${nextText({ s, ex }) ? `<p class="muted">${nextText({ s, ex })}</p>` : ""}</div>`;
      })
      .join("");
    return `<h2 class="block-title">${t("Understanding and exam practice")}</h2>
      <div class="card rd-parent stack">${html}
        <p class="tiny muted">${t("These are two different things. Understanding comes from quizzes, lessons and games. Exam practice comes only from mock tests, and written answers are not marked by the app. Speed is never counted.")}</p></div>`;
  }

  // One printable page for the current student, built only from what the app already keeps.
  function parent() {
    const st = Store.state;
    const c = cls();
    const days = [...Array(7)].map((_, i) => {
      const d = daysAgo(6 - i);
      return { label: i === 6 ? t("Today") : `${weekdayShort(d)} ${dateShort(d)}`, min: (st.days[dayKey(d)] || { min: 0 }).min };
    });
    const week = days.reduce((a, d) => a + d.min, 0);
    const max = Math.max(30, ...days.map((d) => d.min));

    const all = st.history.filter((h) => h.cls === c);
    const avg = all.length ? Math.round(all.reduce((a, h) => a + pct(h.score, h.total), 0) / all.length) : null;
    const tests = all.filter((h) => h.kind === "test").slice(0, 5);

    // Lowest quiz accuracy, from chapters where at least 5 questions were answered.
    const weak = Object.entries(st.acc)
      .map(([k, [right, asked]]) => ({ k, right, asked, p: pct(right, asked), pk: Store.parseKey(k) }))
      .filter((x) => x.pk.cls === c && x.asked >= 5 && x.p < 100)
      .map((x) => ({ ...x, f: findChapter(c, x.pk.subject, x.pk.chapterId) }))
      .filter((x) => x.f)
      .sort((a, b) => a.p - b.p || b.asked - a.asked)
      .slice(0, 5);

    const subjects = D.subjectsFor(c)
      .map((s) => ({ s, x: subjectStats(c, s.id) }))
      .filter((r) => r.x.total)
      .map(
        ({ s, x }) => `<div style="--c:${s.color}">
          <div class="top"><span><strong>${SubjectIcons.html(s)} ${esc(s.name)}</strong></span><span class="muted">${t("{done}/{total} chapters", { done: x.done, total: x.total })}</span></div>
          <span class="bar"><i style="width:${pct(x.done, x.total)}%"></i></span></div>`
      )
      .join("");

    const mistakes = Store.mistakesFor(c).length;
    const due = dueList(c);
    const name = st.profile.name || t("Student");
    return {
      title: t("For parents"),
      html: `
        ${topbar(t("For parents"), "#/progress", `<button class="icon-btn" onclick="printPage()" aria-label="${t("Print")}">${icon("print")}</button>`)}
        <p class="small muted" style="margin:-6px 2px 16px"><strong style="color:var(--text)">${esc(name)}</strong> · ${t("Class {n}", { n: c })} · ${st.profile.board === "pseb" ? "PSEB" : "CBSE"} · ${dateShort(new Date())}</p>
        <div class="stats-4">
          ${Store.showStreak() ? `<div class="card stat"><div class="v">${Store.streak() ? "🔥 " + Store.streak() : "–"}</div><div class="l">${t("day streak")}</div></div>` : `<div class="card stat"><div class="v">${Object.values(st.days).filter((d) => d.acts > 0 || d.min > 0).length}</div><div class="l">${t("days studied")}</div></div>`}
          <div class="card stat"><div class="v">${minutesLabel(week)}</div><div class="l">${t("studied this week")}</div></div>
          <div class="card stat"><div class="v">${avg === null ? "–" : avg + "%"}</div><div class="l">${t("quiz average")}</div></div>
          <div class="card stat"><div class="v">${mistakes}</div><div class="l">${t("open mistakes")}</div></div>
        </div>
        <h2 class="block-title">${t("Study time, last 7 days")}</h2>
        <div class="card stack">${days
          .map((d) => `<div class="top row"><span style="width:96px">${esc(d.label)}</span><span class="bar grow"><i style="width:${d.min ? Math.max(3, pct(d.min, max)) : 0}%"></i></span><span class="muted" style="width:56px;text-align:right">${d.min ? minutesLabel(d.min) : "–"}</span></div>`)
          .join("")}
          <div class="row" style="border-top:1px solid var(--border);padding-top:10px"><strong class="grow">${t("Total")}</strong><strong>${minutesLabel(week)}</strong></div>
        </div>
        <h2 class="block-title">${t("Chapters completed")}</h2>
        <div class="card subj-progress">${subjects || `<span class="muted">${t("Nothing here yet.")}</span>`}</div>
        ${skillsSection(c)}
        ${readinessSection(c)}
        <h2 class="block-title">${t("Mock test scores")}</h2>
        ${
          tests.length
            ? `<div class="card">${tests
                .map(
                  (h) => `<div class="history-row"><div class="grow"><div style="font-weight:620">${esc(t(h.title))}</div><div class="tiny muted">${relDate(h.at)}</div></div>
                    <span class="pill ${pct(h.score, h.total) >= 60 ? "good" : "bad"}">${h.score}/${h.total} · ${pct(h.score, h.total)}%</span></div>`
                )
                .join("")}</div>`
            : `<div class="card small muted">${t("No mock tests taken yet.")}</div>`
        }
        <h2 class="block-title">${t("Chapters to work on")}</h2>
        ${
          weak.length
            ? `<p class="small muted" style="margin:-4px 2px 12px">${t("Lowest quiz accuracy, from chapters with at least 5 questions answered.")}</p>
              <div class="list">${weak
                .map(
                  (x) => `<a class="card chapter-row" href="#/chapter/${c}/${x.f.subj.id}/${x.f.ch.id}/master" style="--c:${x.f.subj.color}">
                    <span class="ch-num">${SubjectIcons.html(x.f.subj)}</span>
                    <span class="ch-body"><span class="ch-title">${esc(x.f.ch.title)}</span><span class="ch-sum">${esc(x.f.subj.short)} · ${t("{n}% right of {a} answers", { n: x.p, a: x.asked })}</span></span>${icon("next")}</a>`
                )
                .join("")}</div>`
            : `<div class="card small muted">${t("Answer quiz questions in a few chapters to see which ones need more practice.")}</div>`
        }
        <h2 class="block-title">${t("Open mistakes")}</h2>
        <a class="card row" href="#/revise/mistakes"><span class="grow">${mistakes ? t("{n} {n:question|questions} to fix", { n: mistakes }) : t("Nothing to fix yet")}</span>${icon("next")}</a>
        <h2 class="block-title">${t("Due for revision")}</h2>
        ${due.length ? dueRows(c, due.slice(0, 8)) : `<div class="card small muted">${t("Nothing is due for revision.")}</div>`}`,
    };
  }

  Object.assign(Views, { parent });
})();
