// Chapter page and its tabs (notes, lesson, flashcards, practice, quiz).

(() => {
  const { D, cls, FORMULA_LABEL, TERMS_LABEL, topbar, chapterNumber, quizRound, cardKey, findChapter, notFound, writtenHTML } = Views._;

  // ---------- chapter ----------

  function chapter([c, subjectId, chapterId, tab]) {
    c = Number(c);
    const f = findChapter(c, subjectId, chapterId);
    if (!f) return notFound();
    const { subj, chs, idx, ch } = f;
    const k = Store.key(c, subj.id, ch.id);
    const base = `#/chapter/${c}/${subj.id}/${ch.id}`;
    const bank = D.practiceFor(c, subj.id, ch.id);
    const hasPractice = (ch.examples && ch.examples.length) || (ch.qa && ch.qa.length) || bank.written.length || Gen.forChapter(c, subj.id, ch.id).length;
    const guided = Guided.available(c, subj.id, ch.id);
    const hasGames = Games.availableFor(c, subj, ch).length > 0;
    const tabs = [["notes", "Notes", "notes"], guided && ["guided", "Lesson", "play"], ["cards", "Flashcards", "cards"], hasPractice && ["practice", "Practice", "practice"], ["quiz", "Quiz", "quiz"], hasGames && ["play", "Play", "game"]].filter(Boolean);
    if (!tabs.some((t) => t[0] === tab)) tab = "notes";

    const r = Store.chapter(k);
    const marked = Store.isBookmarked(k);
    const back = c === cls() ? `#/subject/${subj.id}` : "#/";

    let body = "";
    if (tab === "notes") body = notesTab(c, subj, ch, r, base);
    else if (tab === "practice") body = practiceTab(c, subj, ch, bank);
    else if (tab === "play") body = Views.playTab(c, subj, ch);
    else body = `<div id="${tab}-mount"></div>`;

    const prev = chs[idx - 1];
    const next = chs[idx + 1];
    const pager = `<div class="pager no-print">
      ${prev ? `<a class="card" href="#/chapter/${c}/${subj.id}/${prev.id}"><div class="k">${t("← Previous")}</div><div class="t">${esc(prev.title)}</div></a>` : "<span class='grow'></span>"}
      ${next ? `<a class="card next" href="#/chapter/${c}/${subj.id}/${next.id}"><div class="k">${t("Next →")}</div><div class="t">${esc(next.title)}</div></a>` : "<span class='grow'></span>"}
    </div>`;

    return {
      title: ch.title,
      html: `
        ${topbar(subj.name, back, `<button class="icon-btn ${marked ? "on" : ""}" data-act="bookmark" aria-label="${t("Bookmark this chapter")}" aria-pressed="${marked}">${icon("bookmark")}</button>`)}
        <div class="hero" style="--c:${subj.color}">
          <div class="eyebrow">${t("Class {c} · {section} · Chapter {n}", { c, section: esc(ch.section), n: chapterNumber(chs, idx) })}</div>
          <h1>${esc(ch.title)}</h1>
          <p>${rich(ch.summary)}</p>
          ${r.done || r.best != null ? `<div class="row wrap" style="margin-top:12px">${r.done ? `<span class="pill good">${t("✓ Complete")}</span>` : ""}${r.best != null ? `<span class="pill accent">${t("Best quiz score {n}%", { n: r.best })}</span>` : ""}</div>` : ""}
        </div>
        <nav class="tabs" aria-label="${t("Chapter sections")}">${tabs
          .map(([id, label, ic]) => `<a href="${base}/${id}" class="${id === tab ? "active" : ""}" ${id === tab ? 'aria-current="page"' : ""}>${icon(ic)}${t(label)}</a>`)
          .join("")}</nav>
        <div id="tab" style="--c:${subj.color}">${body}</div>
        ${pager}`,
      mount(el) {
        Store.opened(k);
        el.onclick = (e) => {
          const b = e.target.closest("[data-act]");
          if (!b) return;
          if (b.dataset.act === "bookmark") {
            const on = Store.toggleBookmark(k);
            b.classList.toggle("on", on);
            b.setAttribute("aria-pressed", on);
            toast(on ? t("Saved to bookmarks") : t("Removed from bookmarks"));
          } else if (b.dataset.act === "done") {
            Store.setDone(k, !Store.chapter(k).done);
            toast(Store.chapter(k).done ? t("Chapter marked complete ✓") : t("Marked as not complete"));
            App.render({ keepScroll: true });
          }
        };
        if (tab === "quiz") {
          const opts = () => ({
            title: `${subj.short} · ${ch.title}`,
            items: quizRound(c, subj, ch),
            instant: true,
            record: { subject: subj.id, cls: c, kind: "chapter", chapterKey: k },
            backHref: `${base}/notes`,
            backLabel: "Back to notes",
            retry: () => opts(),
          });
          Quiz.mount(el.querySelector("#quiz-mount"), opts());
        }
        if (tab === "practice") mountGenerated(el, c, subj, ch);
        if (tab === "guided") Guided.mount(el.querySelector("#guided-mount"), { c, subj, chs, idx, ch });
        if (tab === "cards")
          Cards.mount(el.querySelector("#cards-mount"), {
            cards: ch.terms.map((t) => ({ key: cardKey(c, subj.id, ch, t), front: t.term, back: t.meaning })),
          });
      },
    };
  }

  function notesTab(c, subj, ch, r, base) {
    const notes = ch.notes
      .map((n) => `<article class="card note"><h3>${esc(n.heading)}</h3><ul>${n.points.map((p) => `<li>${rich(p)}${Speech.btn(c, subj.id, p)}</li>`).join("")}</ul></article>`)
      .join("");
    const formulas =
      ch.formulas && ch.formulas.length
        ? `<section class="card formula-box"><h3>${icon("formula")} ${t(FORMULA_LABEL[subj.id])}</h3><ul>${ch.formulas.map((f) => `<li>${rich(f)}</li>`).join("")}</ul></section>`
        : "";
    const figs = D.diagramsFor(c, subj.id, ch.id)
      .map((d) => `<figure class="card diagram"><h3>${esc(d.title)}</h3><div class="diagram-art" role="img" aria-label="${esc(d.title)}">${d.svg}</div>${d.caption ? `<figcaption>${rich(d.caption)}</figcaption>` : ""}</figure>`)
      .join("");
    const terms = `<section class="card"><h3 style="font-size:17px;font-weight:750;margin-bottom:12px">${t(TERMS_LABEL[subj.id] || "Key terms")}</h3>
      <dl class="terms">${ch.terms.map((x) => `<div><dt>${rich(x.term)}${Speech.btn(c, subj.id, `${x.term}. ${x.meaning}`)}</dt><dd>${rich(x.meaning)}</dd></div>`).join("")}</dl></section>`;
    return `
      ${Guided.card(c, subj, ch, base)}
      <div class="stack">${notes}${figs}${formulas}${terms}</div>
      ${typeof Sims !== "undefined" ? Sims.cards(c, subj, ch) : ""}
      ${Guided.teachCard(c, subj, ch)}
      <div class="done-row no-print">
        <button class="btn ${r.done ? "good" : ""}" data-act="done">${icon("check")} ${r.done ? t("Completed") : t("Mark as complete")}</button>
        <a class="btn primary" href="${base}/quiz">${t("Take the quiz")} ${icon("arrow")}</a>
      </div>`;
  }

  function practiceTab(c, subj, ch, bank) {
    const sheet = `#/worksheet/${c}/${subj.id}?ch=${ch.id}`;
    let h = `<div class="card row no-print" style="gap:12px;margin-bottom:6px">
      <div class="grow"><strong>${t("Practice sheet")}</strong><div class="small muted">${t("A printable sheet for this chapter, with an answer key. A new set every time.")}</div></div>
      <a class="btn primary" href="${sheet}">${icon("print")} ${t("Make sheet")}</a></div>`;
    if (Gen.forChapter(c, subj.id, ch.id).length)
      h += `<h2 class="block-title">${t("Fresh questions")} <span class="count">${t("new numbers every time")}</span></h2>
        <div id="gen-mount"></div>`;
    if (ch.examples && ch.examples.length)
      h += `<h2 class="block-title">${t("Solved examples")}</h2><div class="stack">${ch.examples
        .map(
          (ex, i) => `<article class="card example">
            <p class="q"><span class="tag">${t("Example {n}", { n: i + 1 })}</span>${rich(ex.q)}</p>
            <details class="reveal"><summary>${t("Show solution")}</summary>
              <ol class="steps">${ex.steps.map((s) => `<li>${rich(s)}</li>`).join("")}</ol>
              <div class="answer">${rich(ex.answer)}</div>
            </details>
          </article>`
        )
        .join("")}</div>`;
    if (ch.qa && ch.qa.length)
      h += `<h2 class="block-title">${t("Important questions")}</h2>
        <p class="small muted" style="margin:-4px 2px 12px">${t("Try answering in your head or notebook first, then tap to check.")}</p>
        <div class="stack">${ch.qa
          .map((x) => `<details class="card qa"><summary><span>${rich(x.q)}</span></summary><div class="a">${rich(x.a)}</div></details>`)
          .join("")}</div>`;
    if (bank.written.length) h += writtenHTML(bank.written);
    return h;
  }

  function mountGenerated(el, c, subj, ch) {
    const box = el.querySelector("#gen-mount");
    if (!box) return;
    const draw = () => {
      const qs = Gen.questions(c, subj.id, ch.id, 5, Date.now());
      box.innerHTML = `<div class="stack">${qs
        .map(
          (q, i) => `<article class="card example">
            <p class="q"><span class="tag">${t("Q{n}", { n: i + 1 })}</span>${rich(q.q)}</p>
            <details class="reveal"><summary>${t("Show answer")}</summary>
              <ol class="steps">${q.steps.map((st) => `<li>${rich(st)}</li>`).join("")}</ol>
              <div class="answer">${rich(q.options[0])}</div>
            </details></article>`
        )
        .join("")}</div>
        <button class="btn block mt" data-act="regen">${icon("reset")} ${t("New questions")}</button>`;
    };
    draw();
    box.onclick = (e) => {
      if (e.target.closest("[data-act=regen]")) {
        e.stopPropagation();
        draw();
      }
    };
  }

  Object.assign(Views, { chapter });
})();
