// Game: Timeline. 5–7 events from the chapter come up in a pile, and the student puts them on a timeline from earliest
// to latest: drag an event onto a place, or tap an event and then a place (or a place and then an event). A filled place
// can be tapped to take the event back. Check shows which are right: right ones lock in and show their year, wrong ones
// go back to the pile to be tried again. Content: data/games/timelines.js (StudyData.timelinesFor), a list of dated
// events for the chapters that have one; a longer list gives a random 6 each round.

(() => {
  const MIN = 5;
  const MAX_SHOWN = 7; // a list this long or shorter is used whole
  const PICK = 6; // from a longer list

  // "321 BCE", "1206", "476 CE"
  const yearText = (e) => e.when || (e.year < 0 ? `${-e.year} BCE` : e.year < 1000 ? `${e.year} CE` : String(e.year));

  const eventsOf = (c, subj, ch) => (ch.sources ? [] : StudyData.timelinesFor(c, subj.id, ch.id));

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
      return { events, pile };
    },

    mount(el, data, api) {
      const { events, pile } = data;
      const total = events.length;
      el.innerHTML = `
        <p class="small muted game-help">${t("Drag an event onto a place, or tap an event and then a place. Earliest is at the top.")}</p>
        <ol class="tl-slots" aria-label="${t("Timeline, earliest first")}">${events
          .map(
            (_, s) => `<li class="tl-row"><span class="tl-dot" aria-hidden="true"></span>
              <button class="tl-slot" data-slot="${s}" aria-pressed="false"></button></li>`
          )
          .join("")}</ol>
        <div class="tl-bank" role="group" aria-label="${t("Events")}">${pile.map((i) => `<button class="tl-chip" data-chip="${i}" aria-pressed="false">${esc(events[i].label)}</button>`).join("")}</div>
        <div class="quiz-nav" data-nav><button class="btn primary" data-act="check" disabled>${icon("check")} ${t("Check timeline")}</button></div>
        <div data-fb></div>`;
      const bank = el.querySelector(".tl-bank");
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
      const wrongOf = new Map(); // event -> number of wrong places tried

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
          b.innerHTML = `<span class="tl-label">${esc(e.label)}</span>${x.locked ? `<span class="tl-year">${esc(yearText(e))}</span>` : ""}`;
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
        fb.innerHTML = "";
        mark();
        api.say(t("Placed in place {a} of {b}.", { a: s + 1, b: total }));
      }

      function check() {
        if (!api.live() || busy || done || checkBtn.disabled) return;
        busy = true;
        let wrong = 0;
        let good = 0;
        const flash = [];
        slots.forEach((x, s) => {
          if (x.locked) return;
          const e = events[x.ev];
          api.answered({ q: e.label, explain: yearText(e) }, e.rank === s);
          if (e.rank === s) {
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
          fb.innerHTML = `<div class="feedback good" role="status"><div class="h">${t("The timeline is complete! 🎉")}</div>${t("The years are shown on each event.")}</div>`;
          el.querySelector("[data-nav]").innerHTML = `<button class="btn primary" data-act="done">${t("See my score")} ${icon("arrow")}</button>`;
          el.querySelector("[data-act=done]").focus({ preventScroll: true });
          fb.scrollIntoView({ block: "nearest" });
          api.say(t("The timeline is complete!"));
          return;
        }
        flash.forEach((s) => slotEls[s].classList.add("bad"));
        fb.scrollIntoView({ block: "nearest" });
        fb.innerHTML = `<div class="feedback bad" role="status"><div class="h">${t("{a} right, {b} in the wrong place.", { a: good, b: wrong })}</div>${t("The right ones are locked, with their years. The others go back to the pile. Try them again.")}</div>`;
        api.say(t("{a} right, {b} in the wrong place.", { a: good, b: wrong }));
        setTimeout(() => {
          flash.forEach((s) => {
            slotEls[s].classList.remove("bad");
            putBack(s);
          });
          busy = false;
          mark();
        }, 700);
        mark();
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
