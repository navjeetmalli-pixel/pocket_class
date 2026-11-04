// Search across the chapters of the student's class.

(() => {
  const { D, cls, topbar, emptyState } = Views._;

  // ---------- search ----------

  function search() {
    return {
      title: t("Search"),
      html: `
        ${topbar(t("Search"), "#/")}
        <div class="search-box">${icon("search")}<input class="input" id="q" type="search" placeholder="${t("Search chapters, topics, terms…")}" autocomplete="off" aria-label="${t("Search")}"></div>
        <div id="results" class="list mt"></div>`,
      mount(el) {
        const input = el.querySelector("#q");
        const out = el.querySelector("#results");
        const draw = () => (out.innerHTML = searchResults(input.value));
        input.oninput = draw;
        input.value = App.lastSearch || "";
        draw();
        input.addEventListener("input", () => (App.lastSearch = input.value));
        setTimeout(() => input.focus(), 50);
      },
    };
  }

  function snippet(text, q) {
    const t = plain(text);
    const i = t.toLowerCase().indexOf(q);
    if (i < 0) return esc(t.slice(0, 120));
    const start = Math.max(0, i - 50);
    const end = Math.min(t.length, i + q.length + 70);
    return `${start ? "…" : ""}${esc(t.slice(start, i))}<mark>${esc(t.slice(i, i + q.length))}</mark>${esc(t.slice(i + q.length, end))}${end < t.length ? "…" : ""}`;
  }

  function searchResults(raw) {
    const q = raw.trim().toLowerCase();
    if (q.length < 2) return `<p class="small muted center">${t("Type at least 2 letters: a chapter name, a topic or a key term.")}</p>`;
    const c = cls();
    const hits = [];
    D.subjectsFor(c).forEach((s) =>
      D.chapters(c, s.id).forEach((ch) => {
        let score = 0;
        let snip = null;
        const has = (t) => plain(t).toLowerCase().includes(q);
        if (has(ch.title)) score += 10;
        if (has(ch.section)) score += 2;
        const texts = [ch.summary];
        ch.notes.forEach((n) => {
          if (has(n.heading)) score += 4;
          texts.push(n.heading, ...n.points);
        });
        ch.terms.forEach((t) => {
          if (has(t.term)) score += 5;
          texts.push(`${t.term}: ${t.meaning}`);
        });
        (ch.formulas || []).forEach((f) => texts.push(f));
        texts.forEach((t) => {
          if (has(t)) {
            score += 1;
            if (!snip) snip = snippet(t, q);
          }
        });
        if (score) hits.push({ s, ch, score, snip });
      })
    );
    hits.sort((a, b) => b.score - a.score);
    if (!hits.length) return emptyState("🔍", t("No results for “{q}” in Class {n}.", { q: esc(raw.trim()), n: c }));
    return hits
      .slice(0, 30)
      .map(
        ({ s, ch, snip }) => `<a class="card chapter-row" href="#/chapter/${c}/${s.id}/${ch.id}" style="--c:${s.color}">
          <span class="ch-num">${s.icon}</span>
          <span class="ch-body"><span class="ch-tag">${esc(s.short)} · ${esc(ch.section)}</span><span class="ch-title">${esc(ch.title)}</span>
          ${snip ? `<span class="small muted" style="margin-top:2px">${snip}</span>` : ""}</span></a>`
      )
      .join("");
  }

  Object.assign(Views, { search });
})();
