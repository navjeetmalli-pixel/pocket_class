// Game: Match pairs. Six key terms on one side, their meanings (shuffled) on the other; tap a term, then its meaning.
// Content: the chapter's `terms`. Wrong matches cost points and are listed at the end.

(() => {
  const PAIRS = 6;
  const MIN = 4;

  Games.register("match", {
    title: "Match pairs",
    blurb: "Join each key term to its meaning",
    how: "Tap a term, then tap the meaning that goes with it. Match every pair as fast as you can. Wrong matches cost points.",
    icon: "match",
    hud: { timer: "up" },

    available: (c, subj, ch) => Games.terms(c, subj, ch).length >= MIN,

    // Up to six terms picked at random from all the chapter's terms (a different set each round when there are more).
    build(c, subj, ch, seed) {
      const R = Games.rng(seed);
      const pairs = Games.shuffled(Games.terms(c, subj, ch), R).slice(0, PAIRS);
      return { pairs, left: Games.shuffled(pairs.map((_, i) => i), R), right: Games.shuffled(pairs.map((_, i) => i), R) };
    },

    mount(el, data, api) {
      const { pairs } = data;
      const total = pairs.length;
      let sel = null; // { side: "L" | "R", i: pair index }
      let matched = 0;
      let wrong = 0;
      let busy = false;

      const card = (side, i) =>
        `<button class="mp-card ${side === "L" ? "term" : "meaning"}" data-side="${side}" data-i="${i}" aria-pressed="false">${rich(side === "L" ? pairs[i].term : pairs[i].meaning)}</button>`;
      el.innerHTML = `
        <p class="small muted game-help">${t("Tap a term, then its meaning.")}</p>
        <div class="match-board">
          <div class="match-col" role="group" aria-label="${t("Terms")}">${data.left.map((i) => card("L", i)).join("")}</div>
          <div class="match-col" role="group" aria-label="${t("Meanings")}">${data.right.map((i) => card("R", i)).join("")}</div>
        </div>
        <p class="small muted center" data-count aria-hidden="true"></p>`;
      const count = el.querySelector("[data-count]");
      const showCount = () => (count.textContent = t("{a} of {b} matched", { a: matched, b: total }));
      showCount();
      const find = (side, i) => el.querySelector(`.mp-card[data-side=${side}][data-i="${i}"]`);

      function select(card) {
        el.querySelectorAll(".mp-card.sel").forEach((x) => {
          x.classList.remove("sel");
          x.setAttribute("aria-pressed", "false");
        });
        if (card) {
          card.classList.add("sel");
          card.setAttribute("aria-pressed", "true");
        }
      }

      el.addEventListener("click", (e) => {
        const b = e.target.closest(".mp-card");
        if (!b || b.disabled || busy || !api.live()) return;
        const side = b.dataset.side;
        const i = Number(b.dataset.i);
        // First tap, or a tap on the same side: just (re)select.
        if (!sel || sel.side === side) {
          if (sel && sel.side === side && sel.i === i) {
            sel = null;
            return select(null);
          }
          sel = { side, i };
          return select(b);
        }
        const other = find(sel.side, sel.i);
        const li = side === "L" ? i : sel.i; // the term's pair
        const ri = side === "R" ? i : sel.i; // the meaning's pair
        sel = null;
        select(null);
        if (li === ri) {
          [b, other].forEach((x) => {
            x.classList.add("done");
            x.disabled = true;
          });
          matched++;
          api.score(100);
          showCount();
          api.say(t("Correct match. {a} of {b} matched.", { a: matched, b: total }));
          if (matched === total) done();
          return;
        }
        // Not a pair: both shake red for a moment, then go back to normal.
        wrong++;
        api.score(-20);
        api.miss({ prompt: pairs[li].term, yours: pairs[ri].meaning, right: pairs[li].meaning });
        api.say(t("Not a match."));
        busy = true;
        [b, other].forEach((x) => x.classList.add("bad"));
        setTimeout(() => {
          [b, other].forEach((x) => x.classList.remove("bad"));
          busy = false;
        }, 600);
      });

      function done() {
        // A little extra for speed: up to 60 points for finishing within a minute.
        const sec = api.elapsed();
        api.score(Math.max(0, 60 - Math.round(sec)));
        api.finish({ stars: wrong <= 1 ? 3 : wrong <= 4 ? 2 : 1, lines: [wrong ? t("{n} wrong {n:match|matches}", { n: wrong }) : t("No wrong matches")] });
      }
    },
  });
})();
