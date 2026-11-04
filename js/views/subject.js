// Subject page: chapter list with section filters.

(() => {
  const { D, cls, sheetLabel, topbar, subjectStats, isGrouped, chapterRow, emptyState, notFound } = Views._;

  // ---------- subject ----------

  // Tells the student what the chapters follow, so nobody mistakes topic notes for their textbook.
  function syllabusLine(c, id) {
    const sy = D.syllabus(c, id);
    if (!sy) return "";
    const books = sy.books.map((b) => `<em>${esc(b)}</em>`).join(", ");
    const what = {
      textbook: sy.board === "PSEB"
        ? t("Follows the PSEB syllabus: {books}.", { books })
        : t("Follows the NCERT {n:book|books} {books} ({board}).", { n: sy.books.length, books, board: esc(sy.board) }),
      "older-book": t("Follows the older NCERT {n:book|books} {books}.", { n: sy.books.length, books }),
      topic: t("Topic-based revision."),
    }[sy.match];
    const date = esc(String(sy.reviewed || "").slice(0, 10));
    // Content review state (CONTENT_GUIDE.md): `status` when the file has one, else reviewed: false is a draft and a date is a published check.
    const review = {
      draft: t("Draft — not yet checked by a teacher, so compare with your textbook."),
      "subject-review": t("Draft — a subject teacher is checking it, so compare with your textbook."),
      "curriculum-review": t("Draft — being checked against the syllabus, so compare with your textbook."),
      "language-review": t("Draft — being checked for language, so compare with your textbook."),
      approved: t("Checked by a teacher ({date}).", { date }),
      published: t("Checked by a teacher ({date}).", { date }),
      "needs-revision": t("Needs changes after a check — compare with your textbook."),
    }[sy.status || (sy.reviewed ? "published" : "draft")] || t("Draft — not yet checked by a teacher, so compare with your textbook.");
    return `<p class="syllabus-line ${sy.match}">${what} ${sy.note ? esc(sy.note) + " " : ""}${review}</p>`;
  }

  function subject([id]) {
    const subj = D.subject(id);
    if (!subj) return notFound();
    const c = cls();
    const chs = D.chapters(c, id);
    const x = subjectStats(c, id);
    const sections = [...new Set(chs.map((ch) => ch.section))];
    const grouped = isGrouped(chs);

    let list;
    if (!chs.length) list = `<div class="mt">${emptyState("📚", t("Chapters for Class {n} {subject} are coming soon.", { n: c, subject: esc(subj.name) }))}</div>`;
    else if (grouped)
      list = sections
        .map((sec) => {
          const items = chs.filter((ch) => ch.section === sec);
          return `<div data-sec="${esc(sec)}">
            <h2 class="section-label">${esc(sec)} <span class="count">${items.length}</span></h2>
            <div class="list">${items.map((ch, i) => chapterRow(c, subj, ch, i + 1)).join("")}</div>
          </div>`;
        })
        .join("");
    else list = `<div class="list mt">${chs.map((ch, i) => chapterRow(c, subj, ch, i + 1, sections.length > 1 ? ch.section : "")).join("")}</div>`;

    const filters =
      sections.length > 1
        ? `<div class="chips scroll mt" role="group" aria-label="${t("Filter by section")}">
            <button class="chip on" data-filter="">${t("All")}</button>
            ${sections.map((s) => `<button class="chip" data-filter="${esc(s)}">${esc(s)}</button>`).join("")}
          </div>`
        : "";

    return {
      title: subj.name,
      html: `
        ${topbar(subj.name, "#/")}
        <div class="hero" style="--c:${subj.color}">
          <div class="eyebrow">${t("Class {n}", { n: c })} · ${esc(subj.native)}</div>
          <h1>${subj.icon} ${esc(subj.name)}</h1>
          <p>${t("{done} of {total} chapters complete", { done: x.done, total: x.total })}${x.avg != null ? ` · ${t("average quiz score {n}%", { n: x.avg })}` : ""}</p>
          <span class="bar"><i style="width:${pct(x.done, x.total)}%"></i></span>
          ${
            chs.length
              ? `<div class="hero-actions">
                  <a class="btn" href="#/test/${id}">${icon("test")} ${t("Subject test")}</a>
                  <a class="btn" href="#/cards/${id}">${icon("cards")} ${t("Flashcards")}</a>
                  <a class="btn" href="#/sheet/${id}">${icon("formula")} ${sheetLabel(id)}</a>
                  <a class="btn" href="#/sheets/${id}">${icon("print")} ${t("Practice sheets")}</a>
                </div>`
              : ""
          }
        </div>
        ${syllabusLine(c, id)}
        ${filters}
        ${list}`,
      mount(el) {
        el.onclick = (e) => {
          const b = e.target.closest("[data-filter]");
          if (!b) return;
          const f = b.dataset.filter;
          el.querySelectorAll("[data-filter]").forEach((x) => x.classList.toggle("on", x === b));
          el.querySelectorAll("[data-sec]").forEach((node) => {
            node.hidden = f !== "" && node.dataset.sec !== f;
          });
        };
      },
    };
  }

  Object.assign(Views, { subject });
})();
