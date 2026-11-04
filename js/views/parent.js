// One-page summary for parents.

(() => {
  const { D, cls, topbar, subjectStats, findChapter, dueList, dueRows } = Views._;

  // ---------- for parents ----------

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
          <div class="top"><span><strong>${s.icon} ${esc(s.name)}</strong></span><span class="muted">${t("{done}/{total} chapters", { done: x.done, total: x.total })}</span></div>
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
          <div class="card stat"><div class="v">🔥 ${Store.streak()}</div><div class="l">${t("day streak")}</div></div>
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
                  (x) => `<a class="card chapter-row" href="#/chapter/${c}/${x.f.subj.id}/${x.f.ch.id}/quiz" style="--c:${x.f.subj.color}">
                    <span class="ch-num">${x.f.subj.icon}</span>
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
