// Game: Quick-fire. 60 seconds of multiple-choice questions, three lives. Questions get harder as the streak grows
// (each question's `level`: 1 easy, 2 medium, 3 hard). Content: the chapter's quiz and practice bank, plus freshly
// generated questions where a generator fits (maths, physics). Wrong answers go to My mistakes, like the quiz.

(() => {
  const SECONDS = 60;
  const LIVES = 3;
  const MIN = 5;

  // The level wanted for a streak: easy to start, medium after 3 in a row, hard after 7.
  const want = (streak) => (streak >= 7 ? 3 : streak >= 3 ? 2 : 1);

  Games.register("quickfire", {
    title: "Quick-fire",
    blurb: "60 seconds of questions, 3 lives",
    how: "Answer as many questions as you can in 60 seconds. A wrong answer costs a life. Right answers in a row score more, and the questions get harder.",
    icon: "bolt",
    hud: { timer: "down", seconds: SECONDS, lives: LIVES, streak: true },

    available: (c, subj, ch) => Games.mcqs(c, subj, ch).length + (Games.gens(c, subj, ch).length ? 6 : 0) >= MIN,

    // A shuffled pool of saved questions with some fresh ones mixed in, and how many right answers earn 3 stars here.
    build(c, subj, ch, seed) {
      const R = Games.rng(seed);
      const saved = Games.mcqs(c, subj, ch);
      const fresh = Games.genItems(c, subj, ch, 12, seed);
      const items = Games.shuffled([...saved, ...fresh], R).map((it) => ({ ...it, level: it.level || 2 }));
      return { items, target: c <= 3 ? 5 : c <= 5 ? 7 : 10 };
    },

    mount(el, data, api) {
      const { items } = data;
      let used = new Set();
      let streak = 0;
      let best = 0;
      let right = 0;
      let wrong = 0;
      let cur = null;
      let timer = null;

      // The next question: unused, as close to the wanted level as possible. When all have been seen, start over.
      function next() {
        if (used.size >= items.length) used = new Set();
        const w = want(streak);
        let pick = -1;
        let gap = 9;
        items.forEach((it, i) => {
          if (used.has(i)) return;
          const d = Math.abs(it.level - w);
          if (d < gap) [pick, gap] = [i, d]; // items are already shuffled, so ties go to the first
        });
        used.add(pick);
        const it = items[pick];
        return { it, order: it.keepOrder ? [0, 1, 2, 3] : shuffle([0, 1, 2, 3]), picked: null };
      }

      function draw() {
        cur = next();
        const { it, order } = cur;
        el.innerHTML = `
          <div class="qf-level small muted" aria-hidden="true">${t("Level")} ${"●".repeat(want(streak))}${"○".repeat(3 - want(streak))}</div>
          ${picHTML(it)}<div class="quiz-q" id="qf-q">${rich(it.q)}</div>
          <div class="options" role="group" aria-labelledby="qf-q">${order
            .map((orig, n) => `<button class="option" data-pick="${orig}"><span class="letter">${"ABCD"[n]}</span><span>${rich(it.options[orig])}</span></button>`)
            .join("")}</div>
          <div data-fb></div>`;
        const first = el.querySelector(".option");
        if (first && document.activeElement && (document.activeElement === document.body || el.contains(document.activeElement) || document.activeElement.closest("#app"))) first.focus({ preventScroll: true });
      }

      function pick(orig) {
        if (!api.live() || !cur || cur.picked !== null) return;
        cur.picked = orig;
        const { it } = cur;
        const ok = orig === it.answer;
        api.answered(it, ok, orig);
        el.querySelectorAll(".option").forEach((b) => {
          const p = Number(b.dataset.pick);
          b.classList.add("locked");
          if (p === it.answer) b.classList.add("correct");
          else if (p === orig) b.classList.add("wrong");
        });
        const fb = el.querySelector("[data-fb]");
        if (ok) {
          right++;
          streak++;
          best = Math.max(best, streak);
          // 10 points, 5 more for each level above easy, and 2 for each answer in the streak (up to 10).
          let pts = 10 + 5 * (it.level - 1) + 2 * Math.min(streak, 10);
          if (streak % 5 === 0) pts += 25; // bonus at 5, 10, 15 in a row
          api.score(pts);
          api.streak(streak);
          fb.innerHTML = `<div class="feedback good" aria-hidden="true"><div class="h">${t("Correct! 🎉")} +${pts}${streak % 5 === 0 ? ` · ${t("{n} in a row!", { n: streak })}` : ""}</div></div>`;
          api.say(`${t("Correct! 🎉")} +${pts}${streak % 5 === 0 ? ". " + t("{n} in a row!", { n: streak }) : ""}`);
          timer = setTimeout(() => api.live() && draw(), 800);
          return;
        }
        // Wrong: lose a life and the streak. The clock stops while the explanation is read.
        wrong++;
        streak = 0;
        api.streak(0);
        const left = api.loseLife();
        api.miss({ prompt: it.q, yours: it.options[orig], right: it.options[it.answer], explain: it.explain });
        api.hold(true);
        fb.innerHTML = `<div class="feedback bad"><div class="h">${t("Not quite")}</div>
          <div>${t("Correct answer:")} <strong>${rich(it.options[it.answer])}</strong></div><div>${rich(it.explain)}</div>${Learn.feedbackHTML(it, orig)}</div>
          <div class="quiz-nav"><button class="btn primary" data-act="next">${left ? t("Next question") : t("See my score")} ${icon("arrow")}</button></div>`;
        api.say(`${t("Not quite")}. ${t("Correct answer:")} ${plain(it.options[it.answer])}. ${t("{n} lives left", { n: left })}`);
        const nb = fb.querySelector("[data-act=next]");
        nb.focus({ preventScroll: true });
        nb.scrollIntoView({ block: "nearest" });
      }

      function end() {
        clearTimeout(timer);
        api.hold(false);
        const target = data.target;
        const stars = right >= target && wrong <= 1 ? 3 : right >= Math.ceil(target * 0.6) ? 2 : 1;
        api.finish({ stars, lines: [t("{a} right, {b} wrong", { a: right, b: wrong }), t("Best streak {n}", { n: best })] });
      }

      el.addEventListener("click", (e) => {
        const o = e.target.closest(".option");
        if (o) return pick(Number(o.dataset.pick));
        if (e.target.closest("[data-act=next]")) {
          api.hold(false);
          if (api.lives <= 0) end();
          else draw();
        }
      });
      // 1–4 answer, Enter goes on (when the next button isn't already focused).
      el.addEventListener("keydown", (e) => {
        if (e.metaKey || e.ctrlKey || e.altKey || !cur) return;
        const n = "1234".indexOf(e.key);
        if (n >= 0 && cur.picked === null) {
          const b = el.querySelectorAll(".option")[n];
          if (b) pick(Number(b.dataset.pick));
        }
      });
      api.onTimeUp(end);
      draw();
    },
  });
})();
