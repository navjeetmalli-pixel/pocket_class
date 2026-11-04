// Game: Sort into groups. Two or three labelled boxes and 6–10 items to drop in. The student drags an item into its
// box, or taps an item and then a box. A wrong box is refused (points off, tried again); a right one locks the item in
// with a line on why. Wrong tries are listed at the end.
//
// Content, built only from what the notes already say, and only when it is certain:
//  - A chapter: the notes headings are the groups. An item is a key term, or a phrase set in bold at the very start of a
//    note point ("**Lustre**: …"), that appears under exactly ONE heading anywhere in the chapter's notes. Items that
//    show up under two headings, that repeat or contain each other, or that already appear in a heading's own name are
//    left out. Language subjects are skipped (their headings are about a story or poem, not topics).
//  - A Practice-by-topic level: the groups are the chapters it is made from, the items their key terms, and a term
//    is used only if it is not mentioned in the notes of the other chapters.
// A chapter or level gets the game only when at least two groups have two or more items and there are 6 or more in all.

(() => {
  const MIN_GROUPS = 2;
  const MIN_PER_GROUP = 2;
  const MIN_ITEMS = 6;
  const MAX_GROUPS = 3;
  const MAX_ITEMS = 10;
  const MAX_PER_GROUP = 5;
  const LANGUAGE = new Set(["english", "hindi", "punjabi", "englishpb", "hindipb"]);

  const norm = (s) => plain(s).toLowerCase().replace(/\s+/g, " ").trim();
  // A bold word at the start of a note point that names the point: "**Term**: …", "**Term** is …", "**Term** (…) …".
  const LEAD = /^\*\*(.{3,30}?)\*\*\s*(?:[:=\-–—(]|is\b|are\b|means\b|refers\b)/;
  const short = (s, n = 170) => {
    const x = plain(s).replace(/\s+/g, " ").trim();
    return x.length > n ? x.slice(0, n - 1).replace(/\s+\S*$/, "") + "…" : x;
  };

  // Drops an item when another one contains it (or is the same word, in another form) so no two items give each other away.
  function dedupe(list) {
    return list.filter((a, i) => !list.some((b, j) => j !== i && (b.key.includes(a.key) || a.key.includes(b.key)) && (b.key.length > a.key.length || (b.key.length === a.key.length && j < i))));
  }

  // groups: [{ title, items: [{ label, key, why }] }] with every group at least MIN_PER_GROUP items; [] if there is not enough.
  function fromNotes(ch) {
    const secs = (ch.notes || []).map((n) => ({
      title: plain(n.heading).trim(),
      head: norm(n.heading),
      text: norm(`${n.heading} \n ${(n.points || []).join(" \n ")}`),
      leads: (n.points || []).map((p) => ({ m: LEAD.exec(p), p })).filter((x) => x.m),
    }));
    if (secs.length < MIN_GROUPS) return [];
    const cand = [];
    const seen = new Set();
    const add = (label, why) => {
      const key = norm(label);
      if (key.length < 3 || key.length > 30 || label.length > 32 || !/\p{L}{3}/u.test(key) || /[=:]/.test(key) || seen.has(key)) return;
      seen.add(key);
      const hits = secs.map((s, i) => (s.text.includes(key) ? i : -1)).filter((i) => i >= 0);
      if (hits.length !== 1) return; // under no heading, or under several: not certain
      if (secs[hits[0]].head.includes(key)) return; // the heading already says it
      cand.push({ label: plain(label).trim(), key, sec: hits[0], why });
    };
    // Only phrases that start a note point count; a glossary meaning, when there is one, is shown as the explanation.
    const meaning = new Map((ch.terms || []).map((x) => [norm(x.term), plain(x.meaning)]));
    secs.forEach((s) => s.leads.forEach(({ m, p }) => add(m[1], meaning.get(norm(m[1])) || short(p))));
    const groups = secs
      .map((s, i) => ({ title: s.title, items: dedupe(cand.filter((c) => c.sec === i)).slice(0, MAX_PER_GROUP) }))
      .filter((g) => g.items.length >= MIN_PER_GROUP);
    return groups;
  }

  // A level: its own chapters are the groups, their key terms the items.
  function fromSources(ch) {
    const parts = ch.sources.filter((p) => !LANGUAGE.has(p.subj.id) && (p.ch.terms || []).length && (p.ch.notes || []).length);
    if (parts.length < MIN_GROUPS) return [];
    const texts = parts.map((p) => norm(p.ch.notes.map((n) => `${n.heading} ${(n.points || []).join(" ")}`).join(" ")));
    const seen = new Set();
    const groups = parts.map((p, pi) => {
      const items = [];
      for (const x of p.ch.terms) {
        const key = norm(x.term);
        if (key.length < 3 || key.length > 30 || x.term.length > 32 || !/\p{L}{3}/u.test(key) || seen.has(key)) continue;
        seen.add(key);
        if (texts.some((tx, i) => i !== pi && tx.includes(key))) continue; // also mentioned in another chapter of the level
        if (norm(p.ch.title).includes(key)) continue; // the chapter's name already says it
        items.push({ label: plain(x.term).trim(), key, why: short(x.meaning) });
      }
      return { title: plain(p.ch.title).trim(), items: dedupe(items).slice(0, MAX_PER_GROUP) };
    });
    // Two chapters may share a title; groups must be told apart.
    const titles = new Set();
    return groups.filter((g) => g.items.length >= MIN_PER_GROUP && !titles.has(g.title) && titles.add(g.title));
  }

  const cache = new WeakMap();
  function groupsOf(c, subj, ch) {
    if (cache.has(ch)) return cache.get(ch);
    let g = [];
    if (ch.sources) g = fromSources(ch);
    else if (!LANGUAGE.has(subj.id)) g = fromNotes(ch);
    // Two groups with nearly the same name ("Fayol's principles (1–7)" and "(8–14)") can't be told apart: keep the larger.
    const bag = (x) => new Set(norm(x.title).match(/[\p{L}\p{N}]+/gu) || []);
    const alike = (x, y) => {
      const a = bag(x);
      const b = bag(y);
      let both = 0;
      a.forEach((w) => b.has(w) && both++);
      return both / (a.size + b.size - both || 1) >= 0.5;
    };
    g = g.sort((a, b) => b.items.length - a.items.length).filter((x, i, all) => !all.slice(0, i).some((y) => alike(x, y))).slice(0, MAX_GROUPS);
    const ok = g.length >= MIN_GROUPS && g.reduce((a, x) => a + x.items.length, 0) >= MIN_ITEMS;
    cache.set(ch, ok ? g : []);
    return ok ? g : [];
  }

  Games.register("sort", {
    title: "Sort into groups",
    blurb: "Put each item in the group it belongs to",
    how: "Every item belongs to one of the groups. Drag it into its group, or tap the item and then tap the group. A wrong group costs points.",
    icon: "sort",
    hud: { timer: "up" },
    groups: groupsOf,

    available: (c, subj, ch) => groupsOf(c, subj, ch).length > 0,

    // The groups (in a fixed order) and 6–10 of their items, shuffled. Same seed, same round.
    build(c, subj, ch, seed) {
      const R = Games.rng(seed);
      const groups = groupsOf(c, subj, ch);
      // Take items from each group in turn until MAX_ITEMS (each group keeps at least two).
      const pools = groups.map((g) => Games.shuffled(g.items, R));
      const take = pools.map(() => 0);
      let total = 0;
      for (let round = 0; total < MAX_ITEMS; round++) {
        let any = false;
        pools.forEach((p, i) => {
          if (take[i] < p.length && total < MAX_ITEMS && (round < MIN_PER_GROUP || take[i] < MAX_PER_GROUP)) {
            take[i]++;
            total++;
            any = true;
          }
        });
        if (!any) break;
      }
      const items = pools.flatMap((p, g) => p.slice(0, take[g]).map((it) => ({ ...it, group: g })));
      return { groups: groups.map((g) => g.title), items: Games.shuffled(items, R) };
    },

    mount(el, data, api) {
      const { groups, items } = data;
      const total = items.length;
      el.innerHTML = `
        <p class="small muted game-help">${t("Drag an item into its group, or tap an item and then a group.")}</p>
        <div class="sort-boxes" role="group" aria-label="${t("Groups")}">${groups
          .map((g, i) => `<button class="sort-box" data-box="${i}" aria-pressed="false" aria-label="${esc(g)}"><span class="sort-title">${esc(g)}</span><span class="sort-in"></span></button>`)
          .join("")}</div>
        <div data-fb></div>
        <div class="sort-bank" role="group" aria-label="${t("Items")}">${items.map((it, i) => `<button class="sort-chip" data-chip="${i}" aria-pressed="false">${esc(it.label)}</button>`).join("")}</div>
        <p class="small muted center" data-count aria-hidden="true"></p>
        <div data-end></div>`;
      const bank = el.querySelector(".sort-bank");
      const boxes = [...el.querySelectorAll(".sort-box")];
      const fb = el.querySelector("[data-fb]");
      const count = el.querySelector("[data-count]");
      const chip = (i) => bank.querySelector(`[data-chip="${i}"]`);
      let done = 0;
      let wrong = 0;
      let busy = false;
      let selChip = null;
      let selBox = null;
      const counts = groups.map(() => 0);
      const showCount = () => (count.textContent = t("{a} of {b} sorted", { a: done, b: total }));
      showCount();

      function mark() {
        bank.querySelectorAll(".sort-chip").forEach((b) => {
          const on = Number(b.dataset.chip) === selChip;
          b.classList.toggle("sel", on);
          b.setAttribute("aria-pressed", on);
        });
        boxes.forEach((b, i) => {
          b.classList.toggle("sel", i === selBox);
          b.classList.toggle("ready", selChip !== null);
          b.setAttribute("aria-pressed", i === selBox);
        });
      }

      function place(c, g) {
        if (!api.live() || busy || items[c].placed) return;
        selChip = selBox = null;
        mark();
        const it = items[c];
        const box = boxes[g];
        if (it.group === g) {
          it.placed = true;
          done++;
          counts[g]++;
          chip(c).hidden = true;
          box.querySelector(".sort-in").insertAdjacentHTML("beforeend", `<span class="sort-got">${esc(it.label)}</span>`);
          box.setAttribute("aria-label", t("{name}, {n} placed", { name: groups[g], n: counts[g] }));
          api.score(100);
          showCount();
          fb.innerHTML = `<div class="feedback good" role="status"><div class="h">${t("“{item}” belongs in “{group}”.", { item: esc(it.label), group: esc(groups[g]) })}</div>${it.why ? esc(it.why) : ""}</div>`;
          api.say(done < total ? t("Correct. {a} of {b} sorted.", { a: done, b: total }) : t("Correct. Everything is sorted."));
          if (done === total) complete();
          return;
        }
        // Wrong group: remember it, flash the item and the group, and let the student try again.
        wrong++;
        api.score(-20);
        (it.tried = it.tried || new Set()).add(groups[g]);
        fb.innerHTML = `<div class="feedback bad" role="status"><div class="h">${t("“{item}” doesn't go in “{group}”. Try another group.", { item: esc(it.label), group: esc(groups[g]) })}</div></div>`;
        api.say(t("Not in that group. Try another."));
        busy = true;
        const b = chip(c);
        [box, b].forEach((x) => x.classList.add("bad"));
        setTimeout(() => {
          [box, b].forEach((x) => x.classList.remove("bad"));
          busy = false;
        }, 600);
      }

      function complete() {
        bank.hidden = true;
        el.querySelector(".game-help").hidden = true;
        fb.innerHTML = "";
        el.querySelector("[data-end]").innerHTML = `<div class="feedback good"><div class="h">${t("Everything is sorted! 🎉")}</div></div>
          <div class="quiz-nav"><button class="btn primary" data-act="done">${t("See my score")} ${icon("arrow")}</button></div>`;
        el.querySelector("[data-act=done]").focus({ preventScroll: true });
      }

      function finish() {
        for (const it of items)
          if (it.tried) api.miss({ prompt: `${it.label} · ${t("Which group?")}`, yours: [...it.tried].join(", "), right: groups[it.group], explain: it.why });
        api.finish({ stars: wrong === 0 ? 3 : wrong <= Math.ceil(total / 3) ? 2 : 1, lines: [wrong ? t("{n} wrong {n:try|tries}", { n: wrong }) : t("No wrong tries")] });
      }

      const tapChip = (b) => {
        const c = Number(b.dataset.chip);
        if (selBox !== null) return place(c, selBox);
        selChip = selChip === c ? null : c;
        mark();
      };
      const tapBox = (g) => {
        if (selChip !== null) return place(selChip, g);
        selBox = selBox === g ? null : g;
        mark();
      };

      const boxAt = (els) => {
        const b = els.map((x) => x.closest && x.closest(".sort-box")).find(Boolean);
        return b ? Number(b.dataset.box) : null;
      };
      Games.draggable(bank, ".sort-chip", {
        onTap: tapChip,
        onDrop(b, els) {
          const g = boxAt(els);
          if (g !== null) place(Number(b.dataset.chip), g);
        },
        over(els) {
          const g = boxAt(els);
          boxes.forEach((x, i) => x.classList.toggle("over", i === g));
        },
      });
      el.addEventListener("click", (e) => {
        const b = e.target.closest(".sort-box");
        if (b) tapBox(Number(b.dataset.box));
        else if (e.target.closest("[data-act=done]")) finish();
      });
      api.say(t("{n} items to sort into {g} groups.", { n: total, g: groups.length }));
    },
  });
})();
