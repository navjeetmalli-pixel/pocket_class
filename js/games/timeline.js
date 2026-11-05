// Game: Illustrated timeline (2.5D picture-book style). 5–7 events from the chapter come up in a pile as picture cards, and
// the student puts them on the line from earliest to latest: drag a card onto a place, or tap a card and then a place (or a
// place and then a card). A placed card snaps in with a small bounce and a station lights up on the road drawn above. A
// filled place can be tapped to take the card back. Check: right cards lock in and show their year on the road; wrong ones
// shake, go back to the pile, and one line says which came first and why ("A came before B: about 268 BCE vs 1556 CE");
// then they are tried again. All right = a celebration. Each card gets a small picture from keywords in its label
// (crown, flag, book, ship, factory, train, monument, shield; a scroll by default; never a face). Younger classes get bigger
// cards, older ones a denser layout. Content: data/games/timelines.js (StudyData.timelinesFor), a list of dated events for
// the chapters that have one; a longer list gives a random 6 each round. Years: negative = BCE (see yearText).

(() => {
  const MIN = 5;
  const MAX_SHOWN = 7; // a list this long or shorter is used whole
  const PICK = 6; // from a longer list

  // "321 BCE", "1206", "476 CE"
  const yearText = (e) => e.when || (e.year < 0 ? `${-e.year} BCE` : e.year < 1000 ? `${e.year} CE` : String(e.year));
  // the same for a sentence: "c. 268 BCE" reads "about 268 BCE"
  const sayYear = (e) => (/^c\.\s*/.test(yearText(e)) ? t("about {y}", { y: yearText(e).replace(/^c\.\s*/, "") }) : yearText(e));
  // short lines for the road: ["268", "BCE"], ["1556"], ["476", "CE"]
  const roadYear = (e) => (e.year < 0 ? [String(-e.year), "BCE"] : e.year < 1000 ? [String(e.year), "CE"] : [String(e.year)]);

  const eventsOf = (c, subj, ch) => (ch.sources ? [] : StudyData.timelinesFor(c, subj.id, ch.id));

  // ---------- the small picture of an event ----------
  // Chosen by keywords in the label; the first rule that matches wins. Only objects and symbols, never a face or a person.
  // Deaths and violence get the neutral scroll, not a weapon.
  const RULES = [
    ["scroll", /massacre|execut|death|dies\b|died|killed|partition/],
    ["train", /railway|railroad|\btrain/],
    ["factory", /industr|factory|\bmills?\b|steam|machine/],
    ["ship", /voyage|\bsail|\bships?\b|sea route|\blands?\b|landed|company|trade|charter/],
    ["shield", /battle|\bwars?\b|invad|invasion|attack|raids?\b|conquer|captur/],
    ["flag", /independ|republic|swaraj/], // the national flag, only for independence and the republic
    ["pennant", /freedom|quit india|congress|movement|satyagraha|dandi|\bmarch\b|non-cooperation|swadeshi|home rule|revolt|gandhi/], // a plain pennant, no country
    ["book", /constitution|\bact\b|minute|educat|wrote|writer|poem|\bbook|literature|aryabhata|scholar|settlement/],
    ["monument", /temple|monument|\bbuilt|builds|\bfort\b|palace|tomb|mosque|taj\b|stupa|pillar|construct/],
    ["crown", /\brul|\bking|queen|emperor|sultan|throne|crown|reign|dynasty|empire|kingdom|chhatrapati|sovereign|\bshah\b|power|maharaja/],
  ];
  const kindOf = (label) => {
    const l = String(label).toLowerCase();
    const r = RULES.find(([, re]) => re.test(l));
    return r ? r[0] : "scroll";
  };
  const INK = "#4a3210";
  const SW = ` stroke="${INK}" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"`;
  const SHADOW = '<ellipse cx="50" cy="90" rx="30" ry="5" fill="#000" opacity=".16"/>';
  const OWN = {
    crown: () =>
      `${SHADOW}<path d="M16 76 12 34l22 18 16-28 16 28 22-18-4 42z" fill="#f5b81c"${SW}/><rect x="16" y="76" width="68" height="10" rx="3" fill="#e09a10"${SW}/><circle cx="50" cy="26" r="5" fill="#d93c3c"${SW}/><circle cx="12" cy="34" r="4" fill="#3b82e0"${SW}/><circle cx="88" cy="34" r="4" fill="#3b82e0"${SW}/><path d="M26 62l5-9" stroke="#fff" stroke-width="3" stroke-linecap="round" opacity=".7"/>`,
    factory: () =>
      `${SHADOW}<rect x="68" y="14" width="12" height="40" fill="#b9503a"${SW}/><path d="M12 84V46l20 12V46l20 12V46l20 12v26z" fill="#e08a4a"${SW}/><rect x="12" y="62" width="64" height="22" fill="#f1a35f"${SW}/><rect x="20" y="68" width="10" height="9" fill="#fff6d8"${SW}/><rect x="38" y="68" width="10" height="9" fill="#fff6d8"${SW}/><rect x="56" y="68" width="10" height="9" fill="#fff6d8"${SW}/><circle cx="76" cy="9" r="5" fill="#e8e8ec" opacity=".9"/><circle cx="86" cy="4" r="4" fill="#e8e8ec" opacity=".7"/>`,
    monument: () =>
      `${SHADOW}<rect x="12" y="80" width="76" height="8" rx="2" fill="#cdb98f"${SW}/><rect x="18" y="72" width="64" height="8" rx="2" fill="#dfcda5"${SW}/><rect x="24" y="44" width="10" height="28" fill="#f3e6c4"${SW}/><rect x="45" y="44" width="10" height="28" fill="#f3e6c4"${SW}/><rect x="66" y="44" width="10" height="28" fill="#f3e6c4"${SW}/><path d="M20 44h60V38H20z" fill="#dfcda5"${SW}/><path d="M26 38a24 24 0 0 1 48 0z" fill="#f5b81c"${SW}/><path d="M50 14v10" stroke="${INK}" stroke-width="3" stroke-linecap="round"/><circle cx="50" cy="12" r="3.5" fill="#f5b81c"${SW}/>`,
    shield: () =>
      `${SHADOW}<path d="M50 8 18 20v28c0 20 14 32 32 40 18-8 32-20 32-40V20z" fill="#3b82e0"${SW}/><path d="M50 8v80c-18-8-32-20-32-40V20z" fill="#2f6fc4"/><path d="M50 8 18 20v28c0 20 14 32 32 40 18-8 32-20 32-40V20z" fill="none"${SW}/><path d="M50 28 55 42h15l-12 9 5 14-13-9-13 9 5-14-12-9h15z" fill="#ffd23f"${SW}/>`,
    pennant: () =>
      `${SHADOW}<path d="M26 10v78" stroke="${INK}" stroke-width="5" stroke-linecap="round"/><path d="M28 14c14-6 24 6 38 0 6-2 10-4 10-4v38s-4 2-10 4c-14 6-24-6-38 0z" fill="#e5473d"${SW}/><path d="M28 14c14-6 24 6 38 0v10c-14 6-24-6-38 0z" fill="#fff" opacity=".35"/>`,
    scroll: () =>
      `${SHADOW}<path d="M22 16h56a8 8 0 0 1 8 8v52a8 8 0 0 1-8 8H30a8 8 0 0 1-8-8z" fill="#fff6d8"${SW}/><circle cx="22" cy="20" r="9" fill="#ead9a8"${SW}/><circle cx="78" cy="80" r="9" fill="#ead9a8"${SW}/><path d="M36 34h40M36 46h40M36 58h26" stroke="#9a7a3c" stroke-width="3.5" stroke-linecap="round"/>`,
  };
  const PICS_ITEM = { ship: "ship", flag: "flag", book: "book", train: "train" };
  function picOf(label) {
    const k = kindOf(label);
    let out = "";
    try {
      if (PICS_ITEM[k] && typeof Pics !== "undefined" && Pics.names.includes(PICS_ITEM[k])) out = Pics.svg(Pics.item(PICS_ITEM[k], { x: 50, y: 50, s: 92 }), { w: 100, h: 100, label: "" });
    } catch (e) {
      out = "";
    }
    if (!out) out = `<svg class="pic" viewBox="0 0 100 100" aria-hidden="true">${(OWN[k] || OWN.scroll)()}</svg>`;
    return out; // made fresh each time: Pics gives every drawing its own gradient ids, and a hidden copy must not own them
  }

  Games.register("timeline", {
    title: "Timeline",
    blurb: "Put the events in order, earliest first",
    how: "Put the events on the timeline from earliest at the top to latest at the bottom: drag an event onto a place, or tap an event and then a place. Then tap Check to see the years.",
    icon: "timeline",
    hud: { timer: "up" },

    available: (c, subj, ch) => eventsOf(c, subj, ch).length >= MIN,

    // 5–7 events, in the order they happened (`rank` is the right place), plus a shuffled pile.
    build(c, subj, ch, seed) {
      const R = Games.rng(seed);
      const all = eventsOf(c, subj, ch);
      const chosen = all.length <= MAX_SHOWN ? all : Games.shuffled(all, R).slice(0, PICK);
      const events = chosen.slice().sort((a, b) => a.year - b.year).map((e, rank) => ({ ...e, rank }));
      let pile;
      do pile = Games.shuffled(events.map((_, i) => i), R);
      while (events.length > 1 && pile.every((v, i) => v === i));
      return { events, pile, cls: c };
    },

    mount(el, data, api) {
      const { events, pile } = data;
      const total = events.length;
      const band = data.cls <= 5 ? "young" : data.cls <= 7 ? "mid" : "old";
      const pic = (i) => picOf(events[i].label);
      el.innerHTML = `
        <p class="small muted game-help">${t("Tap a card, then a place on the line, or drag it. Earliest is at the top.")}</p>
        <div class="tl-stage" data-band="${band}">
          <div class="tl-road-wrap card"><div data-road></div><div class="tl-ends" aria-hidden="true"><span>${t("Earliest")}</span><span>${t("Latest")}</span></div></div>
          <ol class="tl-slots" aria-label="${t("Timeline, earliest first")}">${events
            .map(
              (_, s) => `<li class="tl-row"><span class="tl-dot" aria-hidden="true">${s + 1}</span>
              <button class="tl-slot" data-slot="${s}" aria-pressed="false"></button></li>`
            )
            .join("")}</ol>
          <div class="tl-bank" role="group" aria-label="${t("Events")}">${pile.map((i) => `<button class="tl-chip" data-chip="${i}" aria-pressed="false"><span class="tl-pic">${pic(i)}</span><span class="tl-txt">${esc(events[i].label)}</span></button>`).join("")}</div>
        </div>
        <div class="quiz-nav" data-nav><button class="btn primary" data-act="check" disabled>${icon("check")} ${t("Check timeline")}</button></div>
        <div data-fb></div>`;
      const bank = el.querySelector(".tl-bank");
      const roadEl = el.querySelector("[data-road]");
      const slotEls = [...el.querySelectorAll(".tl-slot")];
      const chipEl = (i) => bank.querySelector(`[data-chip="${i}"]`);
      const checkBtn = el.querySelector("[data-act=check]");
      const fb = el.querySelector("[data-fb]");
      const slots = events.map(() => ({ ev: null, locked: false }));
      let selChip = null;
      let selSlot = null;
      let wrongTotal = 0;
      let busy = false;
      let done = false;
      let popped = -1; // the station that has just been filled
      const wrongOf = new Map(); // event -> number of wrong places tried

      // ---- the road: a 2.5D strip with one station per place; it fills as cards go in and shows each year once locked ----
      function paintRoad() {
        const W = 360;
        const xs = events.map((_, i) => (total === 1 ? W / 2 : 28 + ((W - 56) * i) / (total - 1)));
        const cy = 40;
        let g = `<rect class="tl-rd-shadow" x="6" y="${cy + 2}" width="348" height="36" rx="18"/>
          <rect class="tl-rd-side" x="6" y="${cy - 8}" width="348" height="38" rx="18"/>
          <rect class="tl-rd-top" x="6" y="${cy - 14}" width="348" height="36" rx="18"/>
          <line class="tl-rd-dash" x1="24" y1="${cy + 4}" x2="332" y2="${cy + 4}"/>
          <path class="tl-rd-arrow" d="M338 ${cy - 6}l12 10-12 10z"/>`;
        xs.forEach((x, i) => {
          const sl = slots[i];
          const st = sl.locked ? "locked" : sl.ev !== null ? "filled" : "empty";
          g += `<g class="tl-st ${st}${popped === i ? " pop" : ""}" transform="translate(${x} ${cy + 4})"><ellipse class="tl-st-sh" cx="0" cy="17" rx="13" ry="4"/><g class="tl-st-body"><circle class="tl-st-peg" r="15"/><text class="tl-st-n" y="5.5" text-anchor="middle">${sl.locked ? "✓" : i + 1}</text></g></g>`;
          if (sl.locked) {
            const lines = roadYear(events[sl.ev]);
            g += lines.map((ln, k) => `<text class="tl-yr" x="${x}" y="${cy + 46 + k * 17}" text-anchor="middle">${ln}</text>`).join("");
          }
        });
        popped = -1;
        const lines = Math.max(0, ...slots.map((x) => (x.locked ? roadYear(events[x.ev]).length : 0)));
        roadEl.innerHTML = `<svg class="tl-road" viewBox="0 0 360 ${lines ? 56 + 17 * lines + 16 : 66}" aria-hidden="true" focusable="false">${g}</svg>`;
      }

      const edge = (s) => (s === 0 ? ` (${t("earliest")})` : s === total - 1 ? ` (${t("latest")})` : "");
      function paintSlot(s) {
        const b = slotEls[s];
        const x = slots[s];
        b.classList.toggle("filled", x.ev !== null);
        b.classList.toggle("locked", x.locked);
        b.disabled = x.locked;
        const name = t("Place {a} of {b}", { a: s + 1, b: total }) + edge(s);
        if (x.ev === null) {
          b.innerHTML = `<span class="tl-empty">${name}</span>`;
          b.setAttribute("aria-label", `${name}, ${t("empty")}`);
        } else {
          const e = events[x.ev];
          b.innerHTML = `<span class="tl-pic">${pic(x.ev)}</span><span class="tl-txt"><span class="tl-label">${esc(e.label)}</span>${x.locked ? `<span class="tl-year">${esc(yearText(e))}</span>` : ""}</span>`;
          b.setAttribute("aria-label", x.locked ? `${name}: ${e.label}, ${yearText(e)}` : `${name}: ${e.label}. ${t("Tap to take it back.")}`);
        }
      }
      function mark() {
        bank.querySelectorAll(".tl-chip").forEach((b) => {
          const on = Number(b.dataset.chip) === selChip;
          b.classList.toggle("sel", on);
          b.setAttribute("aria-pressed", on);
        });
        slotEls.forEach((b, s) => {
          b.classList.toggle("sel", s === selSlot);
          b.classList.toggle("ready", selChip !== null && !slots[s].locked);
          b.setAttribute("aria-pressed", s === selSlot);
        });
        checkBtn.disabled = !slots.every((x) => x.ev !== null) || slots.every((x) => x.locked);
        paintRoad();
      }
      slots.forEach((_, s) => paintSlot(s));
      mark();

      function putBack(s) {
        const x = slots[s];
        if (x.ev === null || x.locked) return;
        chipEl(x.ev).hidden = false;
        x.ev = null;
        paintSlot(s);
      }
      function place(c, s) {
        if (!api.live() || busy || done || slots[s].locked) return;
        selChip = selSlot = null;
        putBack(s); // whatever was in that place goes back to the pile
        slots[s].ev = c;
        chipEl(c).hidden = true;
        paintSlot(s);
        popped = s;
        fb.innerHTML = "";
        mark();
        Sound.play("pop");
        // the card snaps in with a small bounce (no movement with reduced motion)
        if (!GameFx.calm()) {
          slotEls[s].classList.remove("snap");
          void slotEls[s].offsetWidth;
          slotEls[s].classList.add("snap");
          setTimeout(() => slotEls[s] && slotEls[s].classList.remove("snap"), 500);
        }
        api.say(t("Placed in place {a} of {b}.", { a: s + 1, b: total }));
      }

      // One line for the first neighbouring pair that is the wrong way round: "A came before B: 268 BCE vs 1556 CE".
      function why() {
        for (let s = 0; s < total - 1; s++) {
          const a = events[slots[s].ev];
          const b = events[slots[s + 1].ev];
          if (a.year > b.year) return t("{a} came before {b}: {ya} vs {yb}.", { a: b.label, b: a.label, ya: sayYear(b), yb: sayYear(a) });
        }
        return "";
      }

      function check() {
        if (!api.live() || busy || done || checkBtn.disabled) return;
        busy = true;
        let wrong = 0;
        let good = 0;
        const flash = [];
        const line = why();
        slots.forEach((x, s) => {
          if (x.locked) return;
          const e = events[x.ev];
          const ok = e.year === events[s].year; // two events in the same year may swap
          api.answered({ q: e.label, explain: yearText(e) }, ok);
          if (ok) {
            x.locked = true;
            good++;
            api.score(100);
            paintSlot(s);
            slotEls[s].classList.add("ok");
          } else {
            wrong++;
            api.score(-15);
            wrongOf.set(x.ev, (wrongOf.get(x.ev) || 0) + 1);
            flash.push(s);
          }
        });
        wrongTotal += wrong;
        selChip = selSlot = null;
        if (!wrong) {
          done = true;
          busy = false;
          mark();
          GameFx.burst(el.querySelector(".tl-road-wrap"));
          setTimeout(() => api.live() && Sound.play("celebrate"), 150);
          fb.innerHTML = `<div class="feedback good" role="status"><div class="h">${t("The timeline is complete! 🎉")}</div>${t("The years are shown on each event.")}</div>`;
          el.querySelector("[data-nav]").innerHTML = `<button class="btn primary" data-act="done">${t("See my score")} ${icon("arrow")}</button>`;
          el.querySelector("[data-act=done]").focus({ preventScroll: true });
          fb.scrollIntoView({ block: "nearest" });
          api.say(t("The timeline is complete!"));
          return;
        }
        flash.forEach((s) => slotEls[s].classList.add("bad"));
        mark();
        fb.scrollIntoView({ block: "nearest" });
        fb.innerHTML = `<div class="feedback bad" role="status"><div class="h">${t("{a} right, {b} in the wrong place.", { a: good, b: wrong })}</div>${line ? `<div class="tl-why">${esc(line)}</div>` : ""}${t("The right ones are locked, with their years. The others go back to the pile. Try them again.")}</div>`;
        api.say(`${t("{a} right, {b} in the wrong place.", { a: good, b: wrong })} ${line}`);
        setTimeout(() => {
          flash.forEach((s) => {
            slotEls[s].classList.remove("bad");
            putBack(s);
          });
          busy = false;
          mark();
        }, 700);
      }

      function finish() {
        events.forEach((e, i) => {
          if (wrongOf.has(i)) api.miss({ prompt: e.label, yours: t("Placed in the wrong place"), right: `${yearText(e)} · ${t("Place {a} of {b}", { a: e.rank + 1, b: total })}` });
        });
        api.finish({ stars: wrongTotal === 0 ? 3 : wrongTotal <= Math.ceil(total / 2) ? 2 : 1, lines: [wrongTotal ? t("{n} wrong {n:place|places}", { n: wrongTotal }) : t("No wrong places")] });
      }

      const tapChip = (b) => {
        const c = Number(b.dataset.chip);
        if (selSlot !== null) return place(c, selSlot);
        selChip = selChip === c ? null : c;
        mark();
      };
      const tapSlot = (s) => {
        if (slots[s].locked || busy || done) return;
        if (selChip !== null) return place(selChip, s);
        if (slots[s].ev !== null) {
          putBack(s);
          fb.innerHTML = "";
          mark();
          return;
        }
        selSlot = selSlot === s ? null : s;
        mark();
      };

      const slotAt = (els) => {
        const b = els.map((x) => x.closest && x.closest(".tl-slot")).find(Boolean);
        return b ? Number(b.dataset.slot) : null;
      };
      Games.draggable(bank, ".tl-chip", {
        onTap: tapChip,
        onDrop(b, els) {
          const s = slotAt(els);
          if (s !== null) place(Number(b.dataset.chip), s);
        },
        over(els) {
          const s = slotAt(els);
          slotEls.forEach((x, i) => x.classList.toggle("over", i === s && !slots[i].locked));
        },
      });
      el.addEventListener("click", (e) => {
        const sl = e.target.closest(".tl-slot");
        if (sl) return tapSlot(Number(sl.dataset.slot));
        const a = e.target.closest("[data-act]");
        if (!a) return;
        if (a.dataset.act === "check") check();
        else if (a.dataset.act === "done") finish();
      });
      api.say(t("{n} events to put in order, earliest first.", { n: total }));
    },
  });
})();
