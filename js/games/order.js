// Game: Put in order. The steps of a worked solution come up shuffled; the student puts them back in order (drag the
// handle, tap a step and then the place it should go, or use the arrow buttons), then taps Check. Right steps turn
// green, wrong ones red, and the student fixes them and checks again. Three solutions per round (fewer if there are
// fewer). After each one the answer is shown.
//
// Content: a chapter's solved examples (`examples[].steps`) and, for maths and physics, the steps of freshly generated
// questions (Games.genItems). A solution is used only when it is clearly a chain: 3–6 steps, each one short, no two
// alike, and every step builds on the one before it (it uses that step's result, or carries on from it with "so", "hence" or "="). A set
// of steps that could be swapped without changing the meaning (two separate factorisations, say) is left out.

(() => {
  const SUBJECTS = new Set(["maths", "mathspb", "science", "sciencepb", "physics", "chemistry", "accountancy", "economics", "biology", "business"]);
  const MIN_STEPS = 3;
  const MAX_STEPS = 6;
  const MAX_LEN = 150;
  const PUZZLES = 3;
  const STOP = new Set("the and for are was were this that with from then than have has had its our your you who not but can will all any each one two out into onto per use using get got let see now also so is of in to by as at on it we be an or if do no".split(" "));

  const tokens = (s) => (plain(s).toLowerCase().replace(/(\d),(?=\d)/g, "$1").match(/[\p{L}\p{N}]+/gu) || []).filter((w) => w.length >= 2 && !STOP.has(w));
  const CONNECTIVE = /^(so|hence|therefore|thus|now|then|next|finally|substitut\w*|using|put|this gives|which gives|[=⇒→])/i;
  const LABELLED = /^(\(?(i{1,3}|iv|v|vi{0,3}|[a-e]|\d+)[).:]\s|step\s*\d)/i;

  // Does step b build on step a? Yes if b works from something a ended with (its result, the part after the last "=" or "⇒"),
  // or b carries on from a with a word like "so" / "hence" / "=" and shares a word with it. Steps that merely share a
  // topic ("90° is a right angle", "180° is a straight angle") are not linked: they could be swapped.
  function linked(a, b) {
    const A = plain(a);
    const cut = Math.max(A.lastIndexOf("="), A.lastIndexOf("⇒"), A.lastIndexOf("≈"), A.lastIndexOf("→"));
    const B = plain(b);
    const used = new Set(tokens(B.includes("=") ? B.slice(0, B.lastIndexOf("=")) : B)); // what b works from, not what it finds
    if (cut >= 0 && tokens(A.slice(cut + 1)).some((w) => used.has(w))) return true;
    const tb = new Set(tokens(B));
    return CONNECTIVE.test(B.trim()) && tokens(A).some((w) => tb.has(w));
  }

  // A window of 3–6 steps that is a clear chain, or null. `start` picks which window of a longer solution.
  function chain(steps, start = 0) {
    if (!Array.isArray(steps)) return null;
    const all = steps.map((s) => plain(s).replace(/\s+/g, " ").trim());
    const from = all.length > MAX_STEPS ? start % (all.length - MAX_STEPS + 1) : 0;
    const win = all.slice(from, from + MAX_STEPS);
    if (win.filter((x) => LABELLED.test(x)).length >= 2) return null; // labelled "(i)", "(ii)": the labels already give the order away
    if (win.length < MIN_STEPS || win.some((s) => s.length < 4 || s.length > MAX_LEN) || new Set(win.map((s) => s.toLowerCase())).size !== win.length) return null;
    for (let i = 1; i < win.length; i++) if (!linked(win[i - 1], win[i])) return null;
    return win;
  }

  const bareParts = (c, subj, ch) => (ch.sources ? ch.sources.map((p) => p.ch) : [ch]);

  // Every usable solution: { q, steps, answer }. Generated questions come from `seed`.
  function pool(c, subj, ch, seed, start = 0) {
    if (!SUBJECTS.has(subj.id)) return [];
    const out = [];
    for (const p of bareParts(c, subj, ch))
      for (const ex of p.examples || []) {
        const steps = chain(ex.steps, start);
        if (steps) out.push({ q: ex.q, steps, answer: ex.answer });
      }
    if (Games.gens(c, subj, ch).length)
      for (const it of Games.genItems(c, subj, ch, 18, seed)) {
        const steps = chain(it.steps, start);
        if (steps) out.push({ q: it.q, steps, answer: it.options[it.answer] });
      }
    return out;
  }

  const cache = new WeakMap();
  const usable = (c, subj, ch) => {
    if (!cache.has(ch)) cache.set(ch, pool(c, subj, ch, 1).length > 0);
    return cache.get(ch);
  };

  Games.register("order", {
    title: "Put in order",
    blurb: "Arrange the steps of a solution",
    how: "The steps of a solution are mixed up. Put them in the right order: drag a step by its handle, or tap a step and then tap where it goes. Then tap Check.",
    icon: "order",
    hud: { timer: "up" },
    pool,

    available: (c, subj, ch) => usable(c, subj, ch),

    build(c, subj, ch, seed) {
      const R = Games.rng(seed);
      let list = pool(c, subj, ch, seed, R.int(0, 5));
      if (!list.length) list = pool(c, subj, ch, 1);
      const seen = new Set();
      const picked = [];
      for (const p of Games.shuffled(list, R)) {
        if (seen.has(p.q)) continue;
        seen.add(p.q);
        picked.push(p);
        if (picked.length === PUZZLES) break;
      }
      // A shuffled starting order that is never the right one.
      const puzzles = picked.map((p) => {
        let order;
        do order = Games.shuffled(p.steps.map((_, i) => i), R);
        while (order.every((v, i) => v === i));
        return { ...p, order };
      });
      return { puzzles };
    },

    mount(el, data, api) {
      const { puzzles } = data;
      let n = 0; // the puzzle on screen
      let order = []; // step ids in the order shown
      let sel = null; // position of the selected row
      let checks = 0; // checks on this puzzle
      let fails = 0; // wrong checks over the whole round
      let solved = false;
      let flags = null; // per position: true if right at the last check

      const P = () => puzzles[n];
      const numbered = (arr) => arr.map((s, i) => `${i + 1}. ${s}`).join("\n");

      function draw(focus) {
        const p = P();
        el.querySelector(".ord-list").innerHTML = order
          .map((id, pos) => {
            const st = flags ? (flags[pos] ? "ok" : "bad") : "";
            return `<li class="ord-row ${st} ${sel === pos ? "sel" : ""}" data-pos="${pos}">
              <button class="ord-grip" aria-label="${t("Drag step {n}", { n: pos + 1 })}" ${solved ? "disabled" : ""}>⠿</button>
              <button class="ord-text" aria-pressed="${sel === pos}" ${solved ? "disabled" : ""}><span class="ord-n">${pos + 1}</span><span><span class="ord-step">${rich(p.steps[id])}</span>${flags ? `<span class="sr-only"> — ${flags[pos] ? t("right place") : t("wrong place")}</span>` : ""}</span></button>
              <span class="ord-mv"><button data-mv="-1" aria-label="${t("Move step {n} up", { n: pos + 1 })}" ${solved || pos === 0 ? "disabled" : ""}>▲</button><button data-mv="1" aria-label="${t("Move step {n} down", { n: pos + 1 })}" ${solved || pos === order.length - 1 ? "disabled" : ""}>▼</button></span>
            </li>`;
          })
          .join("");
        if (focus) {
          const b = el.querySelector(`.ord-row[data-pos="${focus.pos}"] ${focus.sel}`);
          if (b && !b.disabled) b.focus({ preventScroll: true });
          else el.querySelector(`.ord-row[data-pos="${focus.pos}"] .ord-text`)?.focus({ preventScroll: true });
        }
      }

      function show() {
        const p = P();
        order = p.order.slice();
        sel = null;
        flags = null;
        checks = 0;
        solved = false;
        el.innerHTML = `
          <p class="small muted game-help">${t("Drag a step by its handle, or tap a step and then tap where it goes. Then tap Check.")}</p>
          <div class="card ord-q"><div class="small muted">${t("Solution {a} of {b}", { a: n + 1, b: puzzles.length })}</div><div class="ord-qtext">${rich(p.q)}</div></div>
          <ol class="ord-list" aria-label="${t("Steps")}"></ol>
          <div class="quiz-nav" data-nav><button class="btn primary" data-act="check">${icon("check")} ${t("Check order")}</button></div>
          <div data-fb></div>`;
        draw();
        api.say(t("{n} steps to put in order.", { n: p.steps.length }));
      }

      // Moves the step at position `from` so it ends up at position `to`.
      function move(from, to, focusSel) {
        if (solved || !api.live() || from === to || to < 0 || to >= order.length) return;
        const [id] = order.splice(from, 1);
        order.splice(to, 0, id);
        sel = null;
        flags = null;
        el.querySelector("[data-fb]").innerHTML = "";
        draw(focusSel ? { pos: to, sel: focusSel } : null);
        api.say(t("Step moved to place {n}.", { n: to + 1 }));
      }

      function check() {
        if (solved || !api.live()) return;
        const p = P();
        checks++;
        flags = order.map((id, pos) => id === pos);
        const wrong = flags.filter((f) => !f).length;
        sel = null;
        const fb = el.querySelector("[data-fb]");
        if (wrong) {
          fails++;
          api.score(-10 * wrong);
          if (checks === 1) api.miss({ prompt: plain(p.q), yours: numbered(order.map((id) => plain(p.steps[id]))), right: numbered(p.steps.map(plain)), explain: t("Each step uses what the step before it found.") });
          fb.innerHTML = `<div class="feedback bad" role="status"><div class="h">${t("{n} {n:step is|steps are} in the wrong place.", { n: wrong })}</div>${t("Fix the red ones, then check again.")}</div>`;
          api.say(t("{n} {n:step is|steps are} in the wrong place.", { n: wrong }));
          draw();
          fb.scrollIntoView({ block: "nearest" });
          return;
        }
        solved = true;
        api.score(checks === 1 ? 100 : 60);
        draw();
        const last = n === puzzles.length - 1;
        el.querySelector("[data-nav]").innerHTML = `<button class="btn primary" data-act="${last ? "done" : "next"}">${last ? t("See my score") : t("Next solution")} ${icon("arrow")}</button>`;
        fb.innerHTML = `<div class="feedback good" role="status"><div class="h">${t("That's the right order! 🎉")}</div>${p.answer ? `<div>${t("Answer")}: <strong>${rich(p.answer)}</strong></div>` : ""}<div class="small muted" style="margin-top:4px">${t("Each step uses what the step before it found.")}</div></div>`;
        api.say(t("That's the right order!"));
        el.querySelector("[data-nav] .btn").focus({ preventScroll: true });
        fb.scrollIntoView({ block: "nearest" });
      }

      el.addEventListener("click", (e) => {
        const row = e.target.closest(".ord-row");
        const pos = row ? Number(row.dataset.pos) : -1;
        const mv = e.target.closest("[data-mv]");
        if (mv && row) return move(pos, pos + Number(mv.dataset.mv), `[data-mv="${mv.dataset.mv}"]`);
        if (e.target.closest(".ord-text")) return tap(pos);
        const a = e.target.closest("[data-act]");
        if (!a) return;
        if (a.dataset.act === "check") check();
        else if (a.dataset.act === "next") {
          n++;
          show();
          window.scrollTo({ top: 0 });
        } else if (a.dataset.act === "done") api.finish({ stars: fails === 0 ? 3 : fails <= puzzles.length ? 2 : 1, lines: [fails ? t("{n} wrong {n:check|checks}", { n: fails }) : t("Every order was right first time")] });
      });

      function tap(pos) {
        if (solved || !api.live()) return;
        if (sel === null) sel = pos;
        else if (sel === pos) sel = null;
        else return move(sel, pos, ".ord-text");
        flags = null;
        draw({ pos, sel: ".ord-text" });
      }

      const rowAt = (els) => {
        const r = els.map((x) => x.closest && x.closest(".ord-row")).find(Boolean);
        return r ? Number(r.dataset.pos) : null;
      };
      Games.draggable(el, ".ord-grip", {
        onTap: (grip) => tap(Number(grip.closest(".ord-row").dataset.pos)),
        onDrop(grip, els) {
          const to = rowAt(els);
          if (to !== null) move(Number(grip.closest(".ord-row").dataset.pos), to, ".ord-grip");
        },
        over(els) {
          const to = rowAt(els);
          el.querySelectorAll(".ord-row").forEach((r) => r.classList.toggle("over", Number(r.dataset.pos) === to));
        },
      });
      show();
    },
  });
})();
