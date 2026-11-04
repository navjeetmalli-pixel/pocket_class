// Progress page: streak, concept learning and exam readiness (kept apart, spec 14.3), recognitions, weekly minutes,
// subject bars and recent scores.

(() => {
  const { D, cls, pageHead, subjectStats, emptyState, findChapter } = Views._;

  // ---------- progress ----------

  // ---------- concept learning and exam readiness (js/readiness.js) ----------

  const pctText = (r, n) => (n >= Readiness.config.minAnswers ? t("{p}% right · {n} answers", { p: Readiness.pctOf(r, n), n }) : n ? t("{n} {n:answer|answers} so far", { n }) : "–");

  function conceptBox(c, s) {
    const x = Readiness.concept(c, s.id);
    const next = Readiness.conceptNext(x);
    const nextHTML = {
      review: () => `<a href="#/revise/due">${t("{n} {n:skill|skills} to review", { n: next.n })}</a>. ${t("Start with Today's plan on Home.")}`,
      later: () => t("Come back to {n} {n:skill|skills} in a few days to check that you still remember.", { n: next.n }),
      practise: () => t("Keep practising {n} {n:skill|skills} in a quiz or a game.", { n: next.n }),
      apply: () => `<a href="#/test/${s.id}">${t("Try a mixed test")}</a> ${t("to use these ideas in new questions.")}`,
      start: () => `<a href="#/subject/${s.id}">${t("Start a lesson")}</a> ${t("to begin.")}`,
    }[next.k]();
    return `<div class="rd-box" aria-label="${t("Concept learning")}">
      <h3>${t("Concept learning")}</h3>
      <p class="rd-sub">${t("How well you understand and remember the ideas. Quizzes, lessons and games all count.")}</p>
      ${
        x.started
          ? `<div class="rd-stages" role="list">${Readiness.STAGES.map((k) => `<div role="listitem" class="${k === "ready" ? "ready" : ""}"><span class="n">${x[k]}</span><span class="l">${t(Readiness.STAGE_LABEL[k])}</span></div>`).join("")}</div>`
          : `<p class="small muted">${t("No skills started yet.")}</p>`
      }
      <div class="rd-next">${nextHTML}</div>
    </div>`;
  }

  function examBox(c, s) {
    const x = Readiness.exam(c, s.id);
    const next = Readiness.examNext(c, s.id, x);
    const ch = next && next.chapter ? findChapter(c, s.id, next.chapter) : null;
    const nextHTML = !next
      ? ""
      : {
          "first-test": () => `<a href="#/test/${s.id}">${t("Take a mock test")}</a> ${t("in this subject.")}`,
          "more-answers": () => t("Answer {n} more mock test questions to see your accuracy.", { n: next.n }),
          lowest: () => (ch ? `${t("Revisit")} <a href="#/chapter/${c}/${s.id}/${ch.ch.id}/quiz">${esc(ch.ch.title)}</a>: ${t("it was the lowest in your tests.")}` : ""),
          untested: () => `${t("{n} {n:chapter|chapters} not in a mock test yet.", { n: next.n })} <a href="#/test/${s.id}">${t("Try a test with all chapters.")}</a>`,
          timed: () => `<a href="#/test/${s.id}">${t("Try a timed test")}</a> ${t("to practise with the clock on.")}`,
          paper: () => `<a href="#/papers">${t("Try a full sample paper")}</a> ${t("in the exam pattern.")}`,
          again: () => t("Keep taking mock tests to stay sharp."),
        }[next.k]();
    const line = (l, v) => `<div class="rd-line"><span>${l}</span><b>${v}</b></div>`;
    return `<div class="rd-box" aria-label="${t("Exam readiness")}">
      <h3>${t("Exam readiness")}</h3>
      <p class="rd-sub">${t("From mock tests, answered without hints. Being quick is not scored.")}</p>
      ${line(t("Chapters tried"), t("{a} of {b}", { a: x.attempted, b: x.total }))}
      ${line(t("Chapters in a mock test"), t("{a} of {b}", { a: x.tested, b: x.total }))}
      ${line(t("Mock test answers"), pctText(x.all[0], x.all[1]))}
      ${x.fmt.mcq[1] ? line(t(Readiness.FORMATS.mcq), pctText(...x.fmt.mcq)) : ""}
      ${x.fmt.ar[1] ? line(t(Readiness.FORMATS.ar), pctText(...x.fmt.ar)) : ""}
      ${x.timed[1] ? line(t("With the clock on"), pctText(...x.timed)) : ""}
      <p class="tiny muted" style="margin:8px 0 0">${t("Written answers (2, 3 and 5 marks) are not marked by the app, so they are not counted here.")}</p>
      ${nextHTML ? `<div class="rd-next">${nextHTML}</div>` : ""}
    </div>`;
  }

  // Chapters of a subject that have any evidence, with both measures side by side (never added together).
  function chapterRows(c, s) {
    const st = Store.state;
    const rows = D.chapters(c, s.id)
      .map((ch) => {
        const k = Store.key(c, s.id, ch.id);
        return { ch, k, cc: Readiness.concept(c, s.id, ch.id), ex: Readiness.exam(c, s.id, ch.id), seen: (st.acc[k] || [0, 0])[1] };
      })
      .filter((r) => r.cc.started || r.ex.tested || r.seen);
    if (!rows.length) return "";
    const line = (r) => {
      const stages = Readiness.STAGES.filter((k) => r.cc[k]).map((k) => `${t(Readiness.STAGE_LABEL[k])} ${r.cc[k]}`);
      const concept = stages.length ? stages.join(" · ") : t("No skills started yet.");
      const exam = r.ex.all[1] ? `${t("Mock tests")}: ${pctText(r.ex.all[0], r.ex.all[1])}` : `${t("Mock tests")}: ${t("not in a test yet")}`;
      return `<div class="rd-ch"><strong>${esc(r.ch.title)}</strong><span class="muted">${t("Concept learning")}: ${concept}</span><span class="muted">${exam}</span></div>`;
    };
    return `<div class="rd-box rd-chapters"><h3>${t("By chapter")}</h3>${rows.slice(0, 8).map(line).join("")}${rows.length > 8 ? `<p class="small muted">${t("and {n} more", { n: rows.length - 8 })}</p>` : ""}</div>`;
  }

  function readinessSection(c) {
    const subs = D.subjectsFor(c).filter((s) => D.chapters(c, s.id).length);
    if (!subs.length) return "";
    const rows = subs
      .map((s, i) => {
        const cc = Readiness.concept(c, s.id);
        const ex = Readiness.exam(c, s.id);
        const brief = [cc.started ? t("{n} {n:skill|skills} started", { n: cc.started }) : "", ex.all[1] ? t("{n} mock test {n:answer|answers}", { n: ex.all[1] }) : ""].filter(Boolean).join(" · ");
        return `<details class="card rd-subj" style="--c:${s.color}" ${i === 0 || cc.started || ex.attempted ? "open" : ""}>
          <summary><span>${s.icon}</span><span class="grow">${esc(s.name)}${brief ? `<span class="small muted" style="display:block;font-weight:500">${brief}</span>` : ""}</span><span class="chev">${icon("next")}</span></summary>
          <div class="rd-body">${conceptBox(c, s)}${examBox(c, s)}${chapterRows(c, s)}</div>
        </details>`;
      })
      .join("");
    return `<h2 class="block-title">${t("Concept learning and exam readiness")}</h2>
      <p class="small muted" style="margin:-4px 2px 12px">${t("Two different things. A game can go well without being ready for an exam paper, and an exam answer can be learned without understanding the idea. Both are shown, so you can work on each.")}</p>
      <div class="stack">${rows}</div>`;
  }

  // ---------- recognitions (js/readiness.js: rewards) ----------

  function rewardsSection(c) {
    const list = Readiness.rewards(c);
    const skill = (key) => {
      const o = Objectives.byKey(key);
      if (o) return esc(o.text);
      const p = Objectives.parseKey(key);
      const f = p && findChapter(c, p.subject, p.chapter);
      return f ? esc(f.ch.title) : "";
    };
    const chapter = (ck) => {
      const p = Store.parseKey(ck);
      const f = findChapter(c, p.subject, p.chapterId);
      return f ? esc(f.ch.title) : "";
    };
    const text = (r) =>
      ({
        improved: () => t("Improved after feedback: {x}", { x: skill(r.key) }),
        remembered: () => t("Remembered after a break: {x}", { x: skill(r.key) }),
        hard: () => t("Finished a harder skill without hints: {x}", { x: skill(r.key) }),
        teach: () => t("Explained a chapter in your own words: {x}", { x: chapter(r.chapterKey) }),
        mastered: () => t("Mastered for now: {x}", { x: skill(r.key) }),
      })[r.kind]();
    const ICO = { improved: "📈", remembered: "🧠", hard: "💪", teach: "🗣️", mastered: "✓" };
    return `<h2 class="block-title">${t("Recognitions")}</h2>
      ${
        list.length
          ? `<div class="card"><ul class="reward-list">${list
              .map((r) => `<li><span class="rw-ico" aria-hidden="true">${ICO[r.kind]}</span><span><span class="rw-t">${text(r)}</span><span class="rw-d" style="display:block">${r.at ? relDate(r.at) : ""}</span></span></li>`)
              .join("")}</ul><p class="tiny muted" style="margin:10px 0 0">${t("Small thank-yous for how you learn. There are no points or ranks.")}</p></div>`
          : `<div class="card small muted">${t("Recognitions appear as you learn: improving after feedback, remembering after a break, finishing a hard skill without hints, or explaining a chapter in your own words.")}</div>`
      }`;
  }

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
        // Skills (learning objectives) that have been started in this subject, counted by state (js/learn.js).
        const sk = Learn.counts(c, s.id);
        const chips = Mastery.STATES.filter((st) => sk[st]).map((st) => `<span class="obj-chip s-${st}"><span aria-hidden="true">${Mastery.MARK[st]}</span> ${t(Mastery.LABEL[st])} · ${sk[st]}</span>`);
        return `<div style="--c:${s.color}">
          <div class="top"><span><strong>${s.icon} ${esc(s.name)}</strong></span><span class="muted">${t("{done}/{total} chapters", { done: x.done, total: x.total })}${x.avg != null ? ` · ${t("{n}% avg", { n: x.avg })}` : ""}</span></div>
          <span class="bar"><i style="width:${pct(x.done, x.total)}%"></i></span>
          ${chips.length ? `<div class="obj-counts" role="group" aria-label="${t("Skills by state")}">${chips.join("")}</div>` : ""}
        </div>`;
      })
      .join("");

    const hist = quizzes.slice(0, 12);
    return {
      title: t("Progress"),
      html: `
        ${pageHead(t("Your progress"), t("Class {n} · {days} study {days:day|days} so far", { n: c, days: activeDays }))}
        <div class="stats-4">
          ${Store.showStreak() ? `<div class="card stat"><div class="v">${Store.streak() ? "🔥 " + Store.streak() : "–"}</div><div class="l">${t("day streak")}</div></div>` : `<div class="card stat"><div class="v">${Readiness.concept(c).started}</div><div class="l">${t("skills started")}</div></div>`}
          <div class="card stat"><div class="v">${minutesLabel(week)}</div><div class="l">${t("studied this week")}</div></div>
          <div class="card stat"><div class="v">${minutesLabel(st.focusMin)}</div><div class="l">${t("focus timer")}</div></div>
          <div class="card stat"><div class="v">${quizzes.length}</div><div class="l">${t("quizzes &amp; tests")}</div></div>
        </div>
        ${readinessSection(c)}
        ${rewardsSection(c)}
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
                    <div class="grow"><div style="font-weight:620">${esc(t(h.title))}</div><div class="tiny muted">${relDate(h.at)} · ${h.kind === "test" ? t("Mock test") : h.kind === "practice" ? t("Mistakes practice") : h.kind === "guided" ? t("Guided lesson") : h.kind === "revision" ? t("Revision") : h.kind === "path" ? t("Practice by topic") : t("Chapter quiz")}</div></div>
                    <span class="pill ${pct(h.score, h.total) >= 60 ? "good" : "bad"}">${h.score}/${h.total}</span></div>`
                )
                .join("")}</div>`
            : emptyState("📝", t("Take your first chapter quiz to see your scores here."))
        }`,
    };
  }

  Object.assign(Views, { progress });
})();
