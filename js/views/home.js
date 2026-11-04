// Home screen: stats, subjects, study tools, due-today card and the question of the day.

(() => {
  const { D, cls, boardNote, subjectStats, quizItems, findChapter, studentSwitcher, mountStudentSwitcher, dueList, dueRows } = Views._;

  // ---------- home ----------

  // Home-screen card: up to three due chapters and a button to revise them all in one round.
  function dueCard(c) {
    const list = dueList(c);
    if (!list.length) return "";
    return `<section class="card due mt">
      <div class="row" style="margin-bottom:12px"><strong class="grow">${t("Due today")}</strong><span class="pill accent">${t("{n} {n:chapter|chapters}", { n: list.length })}</span></div>
      <p class="small muted" style="margin:-6px 0 12px">${t("Chapters come back after 1, 3, 7, 14 and 30 days so what you learned stays learned.")}</p>
      ${dueRows(c, list.slice(0, 3))}
      ${list.length > 1 ? `<a class="btn primary block mt" href="#/revise/due">${t("Revise all {n}", { n: list.length })} ${icon("arrow")}</a>` : ""}
    </section>`;
  }

  function home() {
    const st = Store.state;
    const c = cls();
    const hr = new Date().getHours();
    const greet = hr < 12 ? t("Good morning") : hr < 17 ? t("Good afternoon") : t("Good evening");

    let done = 0;
    let total = 0;
    D.subjectsFor(c).forEach((s) => {
      const x = subjectStats(c, s.id);
      done += x.done;
      total += x.total;
    });
    const recent = st.history.filter((h) => h.cls === c).slice(0, 20);
    const avg = recent.length ? Math.round(recent.reduce((a, h) => a + pct(h.score, h.total), 0) / recent.length) : null;

    let cont = "";
    if (st.last) {
      const k = Store.parseKey(st.last);
      const f = k.cls === c && findChapter(c, k.subject, k.chapterId);
      if (f)
        cont = `<a class="card continue mt" href="#/chapter/${c}/${f.subj.id}/${f.ch.id}">
          <div class="grow"><div class="k">${t("Continue where you left off")} · ${esc(f.subj.name)}</div><div class="t">${esc(f.ch.title)}</div></div>
          <span class="go">${icon("arrow")}</span></a>`;
    }

    const card = (s) => {
        const x = subjectStats(c, s.id);
        return `<a class="card subject-card" href="#/subject/${s.id}" style="--c:${s.color}">
          <span class="subject-icon">${s.icon}</span>
          <span class="subject-name">${esc(s.name)}</span>
          <span class="subject-hi">${esc(s.native)}</span>
          <span class="bar"><i style="width:${pct(x.done, x.total)}%"></i></span>
          <span class="subject-meta">${x.total ? t("{done} / {total} chapters", { done: x.done, total: x.total }) : t("Coming soon")}</span>
        </a>`;
    };
    const list = D.subjectsFor(c);
    const subjects =
      c >= 11
        ? [...new Set(list.map((s) => s.stream))]
            .map((st) => `<h3 class="stream-label">${esc(t(st))}</h3><div class="subject-grid">${list.filter((s) => s.stream === st).map(card).join("")}</div>`)
            .join("")
        : `<div class="subject-grid">${list.map(card).join("")}</div>`;

    const mistakes = Store.mistakesFor(c).length;
    const tool = (href, ic, t, sub) =>
      `<a class="card tool" href="${href}"><span class="ti">${icon(ic)}</span><span class="tt">${t}</span><span class="ts">${sub}</span></a>`;

    return {
      html: `
        <div class="home-head">
          <div class="grow">
            ${studentSwitcher()}
            <h1>${t("Namaste")}${st.profile.name ? `, ${esc(st.profile.name)}` : ""} 🙏</h1>
            <div class="sub">${greet} · ${t("Class {n}", { n: c })} · ${st.profile.board === "pseb" ? "PSEB" : "CBSE"}</div>
          </div>
          <a class="icon-btn" href="#/search" aria-label="${t("Search")}">${icon("search")}</a>
          <a class="icon-btn" href="#/settings" aria-label="${t("Settings")}">${icon("settings")}</a>
        </div>
        <div class="stats">
          <div class="card stat"><div class="v">🔥 ${Store.streak()}</div><div class="l">${t("day streak")}</div></div>
          <div class="card stat"><div class="v">${done}<span class="muted small">/${total}</span></div><div class="l">${t("chapters done")}</div></div>
          <div class="card stat"><div class="v">${avg === null ? "–" : avg + "%"}</div><div class="l">${t("quiz average")}</div></div>
        </div>
        ${boardNote(c)}
        ${dueCard(c)}
        ${cont}
        <h2 class="block-title">${t("Subjects")}</h2>
        ${subjects}
        <h2 class="block-title">${t("Study tools")}</h2>
        <div class="tools">
          ${tool("#/test", "test", t("Mock test"), t("Timed test across chapters"))}
          ${tool("#/revise/mistakes", "target", t("My mistakes"), mistakes ? t("{n} {n:question|questions} to fix", { n: mistakes }) : t("Nothing to fix yet"))}
          ${tool("#/timer", "timer", t("Focus timer"), t("Study in 25-minute blocks"))}
          ${tool("#/revise", "formula", t("Formula sheets"), t("Quick revision lists"))}
          ${tool("#/paths", "target", t("Practice by topic"), t("Level 0 up to advanced"))}
          ${tool("#/sheets", "print", t("Practice sheets"), t("Make and print your own"))}
          ${Papers.CLASSES.includes(c) ? tool("#/papers", "test", t("Sample papers"), t("Full board-pattern papers")) : ""}
        </div>
        ${qotdHTML(c)}`,
      mount(el) {
        mountStudentSwitcher(el);
        const q = el.querySelector("#qotd");
        if (q)
          q.onclick = (e) => {
            const b = e.target.closest("[data-qotd]");
            if (!b) return;
            const it = qotdItem(c);
            const picked = Number(b.dataset.qotd);
            if (picked === it.answer) Store.clearMistake(it.ref.key);
            else Store.addMistake(it.ref.key);
            Store.setQotd(picked);
            App.render({ keepScroll: true });
          };
      },
    };
  }

  // Today's question comes from one subject, picked by the date, so only that subject's file needs to load.
  function qotdSubject(c) {
    const list = D.subjectsFor(c).filter((s) => D.chapters(c, s.id).length);
    return list.length ? list[hash(dayKey() + "/s/" + c) % list.length] : null;
  }

  function qotdItem(c) {
    const s = qotdSubject(c);
    if (!s || !D.hasFull(c, s.id)) return null;
    const pool = [];
    D.chapters(c, s.id).forEach((ch) => pool.push(...quizItems(c, s, ch, true)));
    return pool.length ? pool[hash(dayKey() + "/" + c) % pool.length] : null;
  }

  function qotdHTML(c) {
    return qotdItem(c) ? `<h2 class="block-title">${t("Question of the day")}</h2>${qotdCard(c)}` : "";
  }

  function qotdCard(c) {
    const it = qotdItem(c);
    const st = Store.state.qotd;
    const picked = st && st.day === dayKey() ? st.picked : null;
    const opts = it.options
      .map((o, i) => {
        let k = "option";
        if (picked !== null) {
          k += " locked";
          if (i === it.answer) k += " correct";
          else if (i === picked) k += " wrong";
        }
        return `<button class="${k}" data-qotd="${i}"><span class="letter">${"ABCD"[i]}</span><span>${rich(o)}</span></button>`;
      })
      .join("");
    const fb =
      picked === null
        ? ""
        : `<div class="feedback ${picked === it.answer ? "good" : "bad"}"><div class="h">${picked === it.answer ? t("Correct! 🎉 Come back tomorrow for a new one.") : t("Not quite. It's been added to My mistakes.")}</div>${rich(it.explain)}</div>`;
    return `<div class="card qotd" id="qotd">
      <div class="quiz-from">${esc(it.ref.from)}</div>
      <div class="quiz-q" style="margin:8px 0 0">${rich(it.q)}</div>
      <div class="options">${opts}</div>${fb}
    </div>`;
  }

  Object.assign(Views, { home, qotdSubject });
})();
