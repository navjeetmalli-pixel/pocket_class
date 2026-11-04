// Revise hub, My mistakes, formula sheets, flashcard decks and the spaced-revision rounds.

(() => {
  const { D, cls, sheetLabel, FORMULA_LABEL, topbar, pageHead, chapterRow, quizItems, genItems, cardKey, findChapter, emptyState, notFound } = Views._;

  // ---------- spaced revision ----------
  const agoLabel = (days) => (days === 0 ? t("today") : days === 1 ? t("yesterday") : days < 30 ? t("{n} days ago", { n: days }) : t("a month or more ago"));

  // Due chapters of the student's class that still exist in the content.
  function dueList(c) {
    return Store.due(c)
      .map((e) => {
        const k = Store.parseKey(e.key);
        const f = findChapter(c, k.subject, k.chapterId);
        return f ? { ...e, subj: f.subj, ch: f.ch } : null;
      })
      .filter(Boolean);
  }

  function dueRows(c, list) {
    return `<div class="list">${list
      .map(
        (e) => `<a class="card chapter-row" href="#/revise/due/${e.subj.id}/${e.ch.id}" style="--c:${e.subj.color}">
          <span class="ch-num">${e.subj.icon}</span>
          <span class="ch-body"><span class="ch-title">${esc(e.ch.title)}</span>
            <span class="ch-sum">${esc(e.subj.short)} · ${agoLabel(e.days)}${e.mistakes ? ` · ${t("{n} {n:mistake|mistakes}", { n: e.mistakes })}` : ""}</span></span>
          ${icon("next")}</a>`
      )
      .join("")}</div>`;
  }

  // One revision round: the chapter's open mistakes plus fresh questions. With no chapter given,
  // every due chapter in one mixed round, so the student also practises choosing the method.
  function dueRound([subjectId, chapterId]) {
    const c = cls();
    const single = subjectId && findChapter(c, subjectId, chapterId);
    const list = single ? [{ subj: single.subj, ch: single.ch }] : dueList(c);
    if (subjectId && !single) return notFound();
    const per = single ? 8 : Math.max(3, Math.min(6, Math.floor(20 / Math.max(list.length, 1))));
    const items = [];
    const keys = [];
    for (const { subj, ch } of list) {
      const k = Store.key(c, subj.id, ch.id);
      keys.push(k);
      const all = quizItems(c, subj, ch);
      const wrong = all.filter((it) => Store.state.mistakes[it.ref.key]);
      const fresh = shuffle(all.filter((it) => !Store.state.mistakes[it.ref.key]));
      const gen = genItems(c, subj, ch, 2);
      items.push(...shuffle([...wrong.slice(0, per), ...fresh, ...gen].slice(0, per)));
      // Mixed review: a few questions from earlier chapters of the same subject (not ones already in this round).
      const chs = D.chapters(c, subj.id);
      const earlier = shuffle(chs.slice(0, chs.findIndex((x) => x.id === ch.id)).filter((x) => !list.some((e) => e.ch.id === x.id && e.subj.id === subj.id))).slice(0, 2);
      earlier.forEach((e) => items.push(...shuffle(quizItems(c, subj, e)).slice(0, single ? 2 : 1)));
    }
    const title = single ? t("Revision · {name}", { name: single.ch.title }) : t("Revision · due chapters");
    return {
      title: t("Revision"),
      html: `${topbar(title, "#/revise")}${
        items.length
          ? `<p class="small muted" style="margin:-6px 2px 14px">${single ? t("Your mistakes from this chapter first, then fresh questions, mixed with a few from earlier chapters. Each question names its chapter.") : t("Questions from every chapter that is due, mixed together.")}</p><div id="quiz-mount"></div>`
          : emptyState("✅", t("Nothing is due right now. Chapters come back here a day after you study them, then after 3, 7, 14 and 30 days."))
      }`,
      mount(el) {
        if (!items.length) return;
        Quiz.mount(el.querySelector("#quiz-mount"), {
          title,
          items: shuffle(items),
          instant: true,
          showFrom: true,
          record: single ? { subject: single.subj.id, cls: c, kind: "revision", chapterKey: keys[0] } : { subject: "all", cls: c, kind: "revision", chapterKeys: keys },
          backHref: "#/",
          backLabel: "Home",
          retry: () => null,
        });
      },
    };
  }

  // ---------- revise ----------

  function revise() {
    const c = cls();
    const mistakes = Store.mistakesFor(c).length;
    const marks = Store.state.bookmarks.map((k) => Store.parseKey(k)).filter((k) => k.cls === c);
    const withContent = D.subjectsFor(c).filter((s) => D.chapters(c, s.id).length);

    const bookmarks = marks.length
      ? `<div class="list">${marks
          .map((k) => {
            const f = findChapter(c, k.subject, k.chapterId);
            return f ? chapterRow(c, f.subj, f.ch, f.subj.icon, f.subj.name) : "";
          })
          .join("")}</div>`
      : `<div class="card small muted">${t("Tap the {icon} on any chapter to save it here for quick revision.", { icon: icon("bookmark").replace('class="i"', 'class="i" style="width:16px;height:16px;vertical-align:-3px"') })}</div>`;

    const subjectLinks = (hrefBase, label) =>
      `<div class="list">${withContent
        .map(
          (s) => `<a class="card chapter-row" href="${hrefBase}${s.id}" style="--c:${s.color}">
            <span class="ch-num">${s.icon}</span>
            <span class="ch-body"><span class="ch-title">${esc(s.name)}</span><span class="ch-sum">${esc(label(s))}</span></span>
            ${icon("next")}</a>`
        )
        .join("")}</div>`;

    const cardCount = (s) => {
      const chs = D.chapters(c, s.id);
      // Chapters not loaded yet only have a term count (nTerms); their known cards are counted from the saved keys.
      const all = chs.reduce((a, ch) => a + (ch.terms ? ch.terms.length : ch.nTerms), 0);
      const known = chs.reduce(
        (a, ch) =>
          a +
          (ch.terms
            ? ch.terms.filter((t) => Store.state.cards[cardKey(c, s.id, ch, t)] === "known").length
            : Object.keys(Store.state.cards).filter((k) => k.startsWith(Store.key(c, s.id, ch.id) + "/") && Store.state.cards[k] === "known").length),
        0
      );
      return t("{known} of {all} cards known", { known, all });
    };

    return {
      title: t("Revise"),
      html: `
        ${pageHead(t("Revise"), t("Fix mistakes, skim formula sheets and drill flashcards"))}
        <div class="card row" style="gap:16px">
          <div class="ch-num" style="width:52px;height:52px;font-size:22px;background:var(--bad-soft);color:var(--bad)">${mistakes}</div>
          <div class="grow"><strong>${t("My mistakes")}</strong><div class="small muted">${mistakes ? t("Questions you got wrong. Get them right to clear them.") : t("Questions you get wrong in quizzes show up here.")}</div></div>
          <a class="btn primary" href="#/revise/mistakes" ${mistakes ? "" : "disabled"}>${t("Practise")}</a>
        </div>
        <h2 class="block-title">${t("Due today")}</h2>
        ${(() => {
          const list = dueList(c);
          return list.length
            ? `${dueRows(c, list)}${list.length > 1 ? `<a class="btn primary block mt" href="#/revise/due">${t("Revise all {n}", { n: list.length })} ${icon("arrow")}</a>` : ""}`
            : `<div class="card small muted">${t("Chapters come back here a day after you study them, then after 3, 7, 14 and 30 days.")}</div>`;
        })()}
        <h2 class="block-title">${t("Bookmarked chapters")}</h2>
        ${bookmarks}
        <a class="card row" href="#/sheets" style="gap:16px;margin-top:12px">
          <div class="ch-num" style="width:52px;height:52px">${icon("print")}</div>
          <div class="grow"><strong>${t("Practice sheets")}</strong><div class="small muted">${t("Pick chapters and question types, then print with an answer key.")}</div></div>
          ${icon("next")}</a>
        <h2 class="block-title">${t("Formula &amp; fact sheets")}</h2>
        ${subjectLinks("#/sheet/", (s) => t("{label} for every chapter", { label: sheetLabel(s.id) }))}
        <h2 class="block-title">${t("Flashcard decks")}</h2>
        ${subjectLinks("#/cards/", cardCount)}`,
    };
  }

  function mistakes() {
    const c = cls();
    const items = Store.mistakesFor(c)
      .map((qk) => {
        const k = Store.parseKey(qk);
        const f = findChapter(c, k.subject, k.chapterId);
        return f ? quizItems(c, f.subj, f.ch).find((it) => it.ref.key === qk) : null;
      })
      .filter(Boolean);
    return {
      title: t("My mistakes"),
      html: `${topbar(t("My mistakes"), "#/revise")}${
        items.length ? `<p class="small muted" style="margin:-6px 2px 14px">${t("Answer correctly to remove a question from this list.")}</p><div id="quiz-mount"></div>` : emptyState("✨", t("No mistakes to fix. Take a chapter quiz or mock test and any wrong answers will appear here."))
      }`,
      mount(el) {
        if (!items.length) return;
        Quiz.mount(el.querySelector("#quiz-mount"), {
          title: t("Mistakes practice"),
          items: shuffle(items).slice(0, 20),
          instant: true,
          showFrom: true,
          record: { subject: "all", cls: c, kind: "practice" },
          backHref: "#/revise",
          backLabel: "Back to Revise",
          // Re-render the route so questions answered correctly drop out of the list.
          retry: () => null,
        });
      },
    };
  }

  function sheet([id]) {
    const subj = D.subject(id);
    if (!subj) return notFound();
    const c = cls();
    const chs = D.chapters(c, id).filter((ch) => ch.formulas && ch.formulas.length);
    return {
      title: `${subj.short} ${sheetLabel(id)}`,
      html: `
        ${topbar(`${subj.short} · ${sheetLabel(id)}`, "#/revise", `<button class="icon-btn" onclick="printPage()" aria-label="${t("Print")}">${icon("print")}</button>`)}
        <p class="small muted" style="margin:-6px 2px 16px">${t("Class {n} · {label} from every chapter, in one place.", { n: c, label: t(FORMULA_LABEL[id]) })}</p>
        ${
          chs.length
            ? `<div class="stack" style="--c:${subj.color}">${chs
                .map(
                  (ch) => `<section class="card formula-box">
                    <h3><a href="#/chapter/${c}/${id}/${ch.id}">${esc(ch.title)}</a></h3>
                    <ul>${ch.formulas.map((f) => `<li>${rich(f)}</li>`).join("")}</ul></section>`
                )
                .join("")}</div>`
            : emptyState("📄", t("Nothing here yet."))
        }`,
    };
  }

  function subjectCards([id]) {
    const subj = D.subject(id);
    if (!subj) return notFound();
    const c = cls();
    const cards = [];
    D.chapters(c, id).forEach((ch) =>
      ch.terms.forEach((t) => cards.push({ key: cardKey(c, id, ch, t), front: t.term, back: t.meaning, from: ch.title }))
    );
    return {
      title: t("{subject} flashcards", { subject: subj.short }),
      html: `
        ${topbar(t("{subject} flashcards", { subject: subj.short }), "#/revise")}
        <div class="chips" style="margin-bottom:14px">
          <button class="chip on" data-deck="all">${t("All cards ({n})", { n: cards.length })}</button>
          <button class="chip" data-deck="learning">${t("Not known yet ({n})", { n: cards.filter((x) => Store.state.cards[x.key] !== "known").length })}</button>
        </div>
        <div id="cards-mount" style="--c:${subj.color}"></div>`,
      mount(el) {
        const box = el.querySelector("#cards-mount");
        Cards.mount(box, { cards: shuffle(cards) });
        el.querySelectorAll("[data-deck]").forEach(
          (b) =>
            (b.onclick = () => {
              el.querySelectorAll("[data-deck]").forEach((x) => x.classList.toggle("on", x === b));
              const deck = b.dataset.deck === "all" ? cards : cards.filter((x) => Store.state.cards[x.key] !== "known");
              Cards.mount(box, { cards: shuffle(deck) });
            })
        );
      },
    };
  }

  Object.assign(Views._, { dueList, dueRows });
  Object.assign(Views, { revise, mistakes, dueRound, sheet, subjectCards });
})();
