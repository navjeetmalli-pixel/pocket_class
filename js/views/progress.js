// Progress page: streak, weekly minutes, subject bars and recent scores.

(() => {
  const { D, cls, pageHead, subjectStats, emptyState } = Views._;

  // ---------- progress ----------

  function progress() {
    const st = Store.state;
    const c = cls();
    const days = [...Array(7)].map((_, i) => {
      const d = daysAgo(6 - i);
      const x = st.days[dayKey(d)] || { min: 0 };
      return { label: weekdayShort(d), min: x.min, today: i === 6 };
    });
    const week = days.reduce((a, d) => a + d.min, 0);
    const max = Math.max(30, ...days.map((d) => d.min));
    const quizzes = st.history.filter((h) => h.cls === c);
    const activeDays = Object.values(st.days).filter((d) => d.acts > 0 || d.min > 0).length;

    const subj = D.subjectsFor(c)
      .map((s) => {
        const x = subjectStats(c, s.id);
        return `<div style="--c:${s.color}">
          <div class="top"><span><strong>${s.icon} ${esc(s.name)}</strong></span><span class="muted">${t("{done}/{total} chapters", { done: x.done, total: x.total })}${x.avg != null ? ` · ${t("{n}% avg", { n: x.avg })}` : ""}</span></div>
          <span class="bar"><i style="width:${pct(x.done, x.total)}%"></i></span>
        </div>`;
      })
      .join("");

    const hist = quizzes.slice(0, 12);
    return {
      title: t("Progress"),
      html: `
        ${pageHead(t("Your progress"), t("Class {n} · {days} study {days:day|days} so far", { n: c, days: activeDays }))}
        <div class="stats-4">
          <div class="card stat"><div class="v">🔥 ${Store.streak()}</div><div class="l">${t("day streak")}</div></div>
          <div class="card stat"><div class="v">${minutesLabel(week)}</div><div class="l">${t("studied this week")}</div></div>
          <div class="card stat"><div class="v">${minutesLabel(st.focusMin)}</div><div class="l">${t("focus timer")}</div></div>
          <div class="card stat"><div class="v">${quizzes.length}</div><div class="l">${t("quizzes &amp; tests")}</div></div>
        </div>
        <h2 class="block-title">${t("This week")}</h2>
        <div class="card">
          <div class="week" role="img" aria-label="${t("Minutes studied each day this week")}">${days
            .map(
              (d) => `<div class="day"><span class="m">${d.min ? t("{n}m", { n: d.min }) : ""}</span>
                <span class="col ${d.min ? "" : "zero"}" style="height:${Math.max(4, (d.min / max) * 100)}%"></span>
                <span class="d" style="${d.today ? "color:var(--accent)" : ""}">${d.today ? t("Today") : d.label}</span></div>`
            )
            .join("")}</div>
          <p class="tiny muted" style="margin-top:10px">${t("Minutes you were actively using the app.")}</p>
        </div>
        <h2 class="block-title">${t("Subjects")}</h2>
        <div class="card subj-progress">${subj}</div>
        <a class="card row mt" href="#/parent"><span class="grow"><strong>${t("For parents")}</strong><span class="small muted" style="display:block">${t("A one-page summary of the week to show or print.")}</span></span>${icon("next")}</a>
        <h2 class="block-title">${t("Recent quizzes")}</h2>
        ${
          hist.length
            ? `<div class="card">${hist
                .map(
                  (h) => `<div class="history-row">
                    <div class="grow"><div style="font-weight:620">${esc(t(h.title))}</div><div class="tiny muted">${relDate(h.at)} · ${h.kind === "test" ? t("Mock test") : h.kind === "practice" ? t("Mistakes practice") : h.kind === "guided" ? t("Guided lesson") : h.kind === "revision" ? t("Revision") : t("Chapter quiz")}</div></div>
                    <span class="pill ${pct(h.score, h.total) >= 60 ? "good" : "bad"}">${h.score}/${h.total}</span></div>`
                )
                .join("")}</div>`
            : emptyState("📝", t("Take your first chapter quiz to see your scores here."))
        }`,
    };
  }

  Object.assign(Views, { progress });
})();
