// Game: Label the diagram. Takes one of the chapter's diagrams, hides 3–6 of its text labels and shows numbered empty
// slots where they were. The student puts each label back: drag it onto a slot, or tap a label and then a slot
// (or a slot, then a label). Content: StudyData.diagramsFor, i.e. the <text> labels inside each diagram's SVG.

(() => {
  const MIN = 3; // a diagram needs at least this many usable labels
  const MAX = 6; // hidden per round
  const NS = "http://www.w3.org/2000/svg";

  // Text that is not worth hiding: tick values and other numbers.
  const NUMERIC = /^[\d\s.,+\-−–×÷=()%°/:]*$/;
  const cache = new Map(); // svg text -> usable labels

  // The labels of a diagram that can be hidden: [{ n: position among all <text> elements, text }].
  // Left out: numbers (axis ticks), single characters, very long notes, "(…)" notes, secondary (muted) text, and
  // any label that appears more than once (it could not be told apart).
  function labelsIn(svg) {
    if (cache.has(svg)) return cache.get(svg);
    const box = document.createElement("div");
    box.innerHTML = svg;
    const all = [...box.querySelectorAll("text")];
    const norm = (s) => s.replace(/\s+/g, " ").trim();
    const count = {};
    all.forEach((el) => {
      const k = norm(el.textContent).toLowerCase();
      count[k] = (count[k] || 0) + 1;
    });
    const out = [];
    all.forEach((el, n) => {
      const text = norm(el.textContent);
      if (text.length < 2 || text.length > 28 || NUMERIC.test(text) || !/\p{L}/u.test(text) || text.startsWith("(")) return;
      if (count[text.toLowerCase()] > 1 || el.closest("defs, marker, clipPath, mask, pattern")) return;
      if (/dg-muted/.test(el.getAttribute("fill") || "") || /dg-muted/.test(el.getAttribute("style") || "")) return;
      out.push({ n, text });
    });
    cache.set(svg, out);
    return out;
  }

  const usable = (c, subj, ch) => Games.diagrams(c, subj, ch).filter((d) => labelsIn(d.svg).length >= MIN);

  Games.register("label", {
    title: "Label the diagram",
    blurb: "Put the missing labels back in place",
    how: "Some labels are missing from a diagram, shown as numbered blanks. Drag each label onto its blank, or tap a label and then tap a blank.",
    icon: "label",
    hud: { timer: "up" },

    available: (c, subj, ch) => usable(c, subj, ch).length > 0,

    // One diagram, and the order in which its labels are tried for hiding (the mount skips ones that would overlap).
    build(c, subj, ch, seed) {
      const R = Games.rng(seed);
      const d = R.pick(usable(c, subj, ch));
      const labels = labelsIn(d.svg);
      return { diagram: d, labels, order: Games.shuffled(labels.map((_, i) => i), R), k: Math.min(labels.length, MIN + R.int(0, MAX - MIN)) };
    },

    mount(el, data, api) {
      const { diagram: d, labels } = data;
      el.innerHTML = `
        <p class="small muted game-help">${t("Drag a label onto its blank, or tap a label and then a blank.")}</p>
        <figure class="card diagram label-stage">
          <h3>${esc(d.title)}</h3>
          <div class="diagram-art" role="group" aria-label="${esc(d.title)}">${d.svg}</div>
        </figure>
        <div class="label-bank" role="group" aria-label="${t("Labels")}"></div>
        <div data-end></div>`;
      const svg = el.querySelector(".diagram-art svg");
      const texts = [...svg.querySelectorAll("text")];

      // ----- choose which labels to hide: not overlapping each other, not turned sideways -----
      const geo = (i) => {
        const tx = texts[labels[i].n];
        const bb = tx.getBBox();
        const m = svg.getScreenCTM().inverse().multiply(tx.getScreenCTM());
        return { tx, bb, m, ok: bb.width > 0 && bb.height > 0 && Math.abs(m.b) < 0.01 && Math.abs(m.c) < 0.01 };
      };
      const box = (g) => ({ x: g.m.e + g.bb.x * g.m.a - 6, y: g.m.f + g.bb.y * g.m.d - 6, w: g.bb.width * g.m.a + 12, h: g.bb.height * g.m.d + 12 });
      const hit = (a, b) => a.x < b.x + b.w && b.x < a.x + a.w && a.y < b.y + b.h && b.y < a.y + a.h;
      const chosen = [];
      const take = (strict) => {
        for (const i of data.order) {
          if (chosen.length >= data.k) break;
          if (chosen.some((x) => x.i === i)) continue;
          const g = geo(i);
          if (strict && (!g.ok || chosen.some((x) => hit(box(x.g), box(g))))) continue;
          if (g.bb.width > 0) chosen.push({ i, g });
        }
      };
      take(true);
      if (chosen.length < MIN) take(false); // crowded diagram: allow touching blanks rather than too few
      chosen.sort((a, b) => a.g.m.f + a.g.bb.y - (b.g.m.f + b.g.bb.y) || a.g.m.e + a.g.bb.x - (b.g.m.e + b.g.bb.x)); // number them top to bottom

      // ----- draw the blanks: the label is hidden, a dashed numbered box takes its place -----
      const slots = chosen.map(({ i, g }, s) => {
        const sc = Math.hypot(g.m.a, g.m.b) || 1; // screen pixels per diagram unit
        const cx = g.bb.x + g.bb.width / 2;
        const cy = g.bb.y + g.bb.height / 2;
        const w = Math.max(g.bb.width + 10, 30 / sc);
        const h = Math.max(g.bb.height + 6, 22 / sc);
        const hw = Math.max(w, 40 / sc);
        const hh = Math.max(h, 40 / sc);
        const grp = document.createElementNS(NS, "g");
        grp.setAttribute("transform", `matrix(${g.m.a} ${g.m.b} ${g.m.c} ${g.m.d} ${g.m.e} ${g.m.f})`);
        grp.setAttribute("class", "lab-slot");
        grp.setAttribute("data-slot", s);
        grp.setAttribute("role", "button");
        grp.setAttribute("tabindex", "0");
        grp.innerHTML = `<rect class="hit" x="${cx - hw / 2}" y="${cy - hh / 2}" width="${hw}" height="${hh}"/>
          <rect class="box" x="${cx - w / 2}" y="${cy - h / 2}" width="${w}" height="${h}" rx="${4 / sc}"/>
          <text class="num" x="${cx}" y="${cy}" text-anchor="middle" dominant-baseline="central" font-size="${15 / sc}">${s + 1}</text>`;
        g.tx.classList.add("lab-hidden");
        svg.appendChild(grp);
        return { s, grp, label: labels[i].text, tx: g.tx, done: false, wrong: new Set() };
      });
      const total = slots.length;
      const slotName = (s) => t("Blank {n}", { n: s.s + 1 });
      const describe = (s) => (s.done ? `${slotName(s)}: ${s.label}` : `${slotName(s)}, ${t("empty")}`);
      slots.forEach((s) => s.grp.setAttribute("aria-label", describe(s)));

      // ----- the labels to place, in a random order -----
      const R = Games.rng(api.seed + 1);
      const bank = el.querySelector(".label-bank");
      bank.innerHTML = Games.shuffled(slots, R)
        .map((s) => `<button class="lab-chip" data-chip="${s.s}" aria-pressed="false">${esc(s.label)}</button>`)
        .join("");
      const chip = (s) => bank.querySelector(`[data-chip="${s}"]`);

      // ----- placing: a chip and a slot meet by drag, or by two taps in either order -----
      let selChip = null;
      let selSlot = null;
      let wrong = 0;
      let busy = false;

      function mark() {
        bank.querySelectorAll(".lab-chip").forEach((b) => {
          const on = Number(b.dataset.chip) === selChip;
          b.classList.toggle("sel", on);
          b.setAttribute("aria-pressed", on);
        });
        slots.forEach((s) => {
          s.grp.classList.toggle("sel", s.s === selSlot);
          s.grp.classList.toggle("ready", selChip !== null && !s.done);
        });
      }

      function place(c, s) {
        if (!api.live() || busy || slots[s].done) return;
        selChip = selSlot = null;
        mark();
        const slot = slots[s];
        api.answered({ q: slots[c].label, explain: plain(d.title || "") }, c === s);
        if (c === s) {
          slot.done = true;
          slot.tx.classList.remove("lab-hidden");
          slot.grp.classList.add("ok");
          slot.grp.setAttribute("aria-label", describe(slot));
          slot.grp.removeAttribute("tabindex");
          slot.grp.querySelector(".num").remove();
          chip(c).hidden = true;
          api.score(100);
          const left = slots.filter((x) => !x.done).length;
          api.say(left ? t("Correct. {n} {n:blank|blanks} left.", { n: left }) : t("Correct. All labels are in place."));
          if (!left) complete();
          return;
        }
        // Wrong blank: remember what was tried there, flash both, and let the label go back to the bank.
        wrong++;
        api.score(-20);
        slot.wrong.add(slots[c].label);
        api.say(t("Not there. Try another blank."));
        busy = true;
        const b = chip(c);
        [slot.grp, b].forEach((x) => x.classList.add("bad"));
        setTimeout(() => {
          [slot.grp, b].forEach((x) => x.classList.remove("bad"));
          busy = false;
        }, 600);
      }

      function complete() {
        el.querySelector(".label-bank").hidden = true;
        el.querySelector(".game-help").hidden = true;
        el.querySelector("[data-end]").innerHTML = `<div class="feedback good"><div class="h">${t("All labels are in place! 🎉")}</div>${d.caption ? rich(d.caption) : ""}</div>
          <div class="quiz-nav"><button class="btn primary" data-act="done">${t("See my score")} ${icon("arrow")}</button></div>`;
        el.querySelector("[data-act=done]").focus({ preventScroll: true });
      }

      function finish() {
        for (const s of slots)
          if (s.wrong.size) api.miss({ prompt: `${slotName(s)} · ${d.title}`, yours: [...s.wrong].join(", "), right: s.label, explain: plain(d.caption || "") });
        api.finish({ stars: wrong === 0 ? 3 : wrong <= Math.ceil(total / 2) ? 2 : 1, lines: [wrong ? t("{n} wrong {n:try|tries}", { n: wrong }) : t("No wrong tries")] });
      }

      function tapChip(b) {
        const c = Number(b.dataset.chip);
        if (selSlot !== null) return place(c, selSlot);
        selChip = selChip === c ? null : c;
        mark();
      }
      function tapSlot(s) {
        if (slots[s].done) return;
        if (selChip !== null) return place(selChip, s);
        selSlot = selSlot === s ? null : s;
        mark();
      }

      // The slot (index) under a list of elements, if any.
      const slotAt = (els) => {
        const g = els.map((x) => x.closest && x.closest("[data-slot]")).find(Boolean);
        return g ? Number(g.dataset.slot) : null;
      };
      Games.draggable(bank, ".lab-chip", {
        onTap: tapChip,
        onDrop(b, els) {
          const s = slotAt(els);
          if (s !== null) place(Number(b.dataset.chip), s);
        },
        over(els) {
          const s = slotAt(els);
          slots.forEach((x) => x.grp.classList.toggle("over", x.s === s && !x.done));
        },
      });
      svg.addEventListener("click", (e) => {
        const g = e.target.closest("[data-slot]");
        if (g) tapSlot(Number(g.dataset.slot));
      });
      svg.addEventListener("keydown", (e) => {
        const g = e.target.closest && e.target.closest("[data-slot]");
        if (g && (e.key === "Enter" || e.key === " ")) {
          e.preventDefault();
          tapSlot(Number(g.dataset.slot));
        }
      });
      el.addEventListener("click", (e) => e.target.closest("[data-act=done]") && finish());
      api.say(t("{n} {n:label is|labels are} missing. Numbered blanks show where they go.", { n: total }));
    },
  });
})();
