// Game: Mental-maths race. Run to the flag by answering fast arithmetic: each right answer moves the runner on, wrong answers
// cost points and the streak, you have 60 seconds. Sums, tables and division facts are made for the class (Class 1: adding to
// 20 ... Class 5+: two-digit times one-digit); where a chapter has other short-answer generators (fractions, decimals,
// integers, percentages, powers ...) those questions are mixed in through the chapter's own generators.
// Classes 1-8 and Practice-by-topic Levels 1-8.

(() => {
  const MK = MathKit;
  const SECONDS = 60;
  const MENTAL = new Set(["add1", "sub1", "add2", "sub2", "add3", "sub3", "mul", "div", "divRem", "table", "repAdd", "hcf", "lcmQ", "decAdd", "decMul", "decDiv", "integers", "intDiv", "fracAdd", "fracSub", "fracMul", "fracDiv", "fracOf", "percentOf", "squares", "cubes", "expo", "evalExpr", "linEq", "ratioShare", "unitary"]);
  const ADD = ["add1", "add2", "add3"];
  const SUB = ["sub1", "sub2", "sub3"];
  const TIMES = ["table", "mul", "repAdd"];
  const DIV = ["div", "divRem"];

  const kOf = (sc) => (sc && sc.cls >= 1 && sc.cls <= 8 ? sc.cls : 0);
  const names = (c, subj, ch) => Games.gens(c, subj, ch).filter((n) => MENTAL.has(n));
  const has = (list, set) => list.some((n) => set.includes(n));
  const target = (k) => (k <= 2 ? 8 : k <= 4 ? 12 : k <= 6 ? 14 : 16);

  // ---------- own arithmetic questions ----------
  function distractors(ans, R) {
    const c = [ans + 1, ans - 1, ans + 2, ans - 2, ans + 10, ans - 10, ans + 5, ans - 5, ans * 2, ans + 3, ans - 3];
    const out = [];
    for (const x of Games.shuffled(c, R)) if (x >= 0 && x !== ans && !out.includes(x) && out.length < 3) out.push(x);
    let k = 4;
    while (out.length < 3) {
      if (ans + k !== ans && !out.includes(ans + k)) out.push(ans + k);
      k++;
    }
    return out;
  }
  function local(kind, k, R) {
    let x, y, ans, q;
    if (kind === "add" || kind === "sub") {
      const top = k <= 1 ? 20 : k === 2 ? 99 : 999;
      if (kind === "add") {
        x = R.int(k <= 1 ? 1 : 10, Math.floor(top * 0.7));
        y = R.int(k <= 1 ? 1 : 5, top - x);
        ans = x + y;
        q = `${x} + ${y} = ?`;
      } else {
        x = R.int(k <= 1 ? 3 : 20, top);
        y = R.int(1, x - (k <= 1 ? 1 : 5));
        ans = x - y;
        q = `${x} − ${y} = ?`;
      }
    } else if (kind === "times") {
      x = k <= 2 ? R.pick([2, 5, 10]) : k === 3 ? R.int(2, 10) : k === 4 ? R.int(2, 12) : R.int(12, 99);
      y = k <= 4 ? R.int(2, k <= 3 ? 10 : 12) : R.int(2, 9);
      ans = x * y;
      q = `${x} × ${y} = ?`;
    } else {
      y = k <= 3 ? R.int(2, 10) : k === 4 ? R.int(2, 12) : R.int(2, 9);
      ans = k <= 4 ? R.int(2, k <= 3 ? 10 : 12) : R.int(12, 99);
      x = ans * y;
      q = `${x} ÷ ${y} = ?`;
    }
    const wrong = distractors(ans, R);
    const opts = Games.shuffled([ans, ...wrong], R);
    const fmt = (v) => MK.num(v);
    return { q, options: opts.map(fmt), answer: opts.indexOf(ans), explain: `${q.replace("?", fmt(ans))}`, chk: { kind, x, y, ans } };
  }

  Games.register("race", {
    title: "Mental-maths race",
    blurb: "Fast arithmetic: run to the flag",
    how: "Answer quickly to run to the flag before 60 seconds are up. Right answers in a row score a streak bonus. A wrong answer costs points and breaks the streak.",
    icon: "race",
    hud: { timer: "down", seconds: SECONDS, streak: true },

    // One line on the start screen about the saved ghost (the best run so far), or null.
    introNote(ctx) {
      const run = Store.gameGhost(ctx.key, "race");
      if (!run) return t("Finish a race to set a ghost to beat.");
      const sc = MK.scope(ctx.cls, ctx.subj, ctx.ch);
      const goal = target(kOf(sc));
      return run.length >= goal ? t("Race your best: you reached the flag in {s} s", { s: run[run.length - 1].toFixed(0) }) : t("Race your best: you got {a} of {b} to the flag", { a: run.length, b: goal });
    },

    available: (c, subj, ch) => kOf(MK.scope(c, subj, ch)) > 0 && names(c, subj, ch).length > 0,

    build(c, subj, ch, seed) {
      const sc = MK.scope(c, subj, ch);
      const k = kOf(sc);
      const R = Games.rng(seed);
      const gens = names(c, subj, ch);
      const items = [];
      const kinds = [];
      if (has(gens, ADD)) kinds.push("add");
      if (has(gens, SUB)) kinds.push("sub");
      if (has(gens, TIMES)) kinds.push("times");
      if (has(gens, DIV)) kinds.push("div");
      if (kinds.length) for (let i = 0; i < 36; i++) items.push(local(kinds[i % kinds.length], k, R));
      // the other generators of the chapter
      const others = gens.filter((n) => ![...ADD, ...SUB, ...TIMES, ...DIV].includes(n));
      if (others.length || !kinds.length)
        for (const q of Gen.fromNames(others.length ? others : gens, 24, seed)) {
          const opts = Games.shuffled(q.options.map((o, i) => ({ o, ok: i === q.answer })), R);
          items.push({ q: q.q, options: opts.map((x) => x.o), answer: opts.findIndex((x) => x.ok), explain: q.explain, gen: q.gen, pic: q.pic, picAlt: q.picAlt });
        }
      return { items: Games.shuffled(items, R), target: target(k), cls: k };
    },

    audit(data) {
      const bad = [];
      const seen = new Set();
      for (const it of data.items) {
        const tag = it.q;
        if (it.options.length !== 4 || new Set(it.options).size !== 4) bad.push(tag + ": options not 4 distinct");
        if (!(it.answer >= 0 && it.answer < 4)) bad.push(tag + ": answer index");
        if (/NaN|undefined|Infinity|−0\b/.test(it.q + it.options.join(" "))) bad.push(tag + ": bad text");
        if (it.chk) {
          const { kind, x, y, ans } = it.chk;
          const want = kind === "add" ? x + y : kind === "sub" ? x - y : kind === "times" ? x * y : x / y;
          if (want !== ans || !Number.isInteger(ans) || ans < 0) bad.push(tag + ": arithmetic");
          if (it.options[it.answer] !== MK.num(ans)) bad.push(tag + ": answer does not match option");
          if (it.options.some((o) => Number(o.replace(/,/g, "")) < 0)) bad.push(tag + ": negative option");
        }
        seen.add(it.q);
      }
      if (data.items.length < 12 || seen.size < 10) bad.push(`only ${seen.size} different questions`);
      return bad;
    },

    mount(el, data, api) {
      const { items, target: goal } = data;
      let at = 0;
      let streak = 0;
      let best = 0;
      let right = 0;
      let wrong = 0;
      let cur = null;
      let locked = false;
      let timer = null;
      const paces = []; // seconds (1 decimal) at each right answer: this run's pace
      const ghost = Store.gameGhost(api.key, "race"); // the best run so far, or null
      let ghostN = 0; // how many answers the ghost has made by now
      let ghostGap = null; // last spoken state: -1 behind, 0 level, 1 ahead
      const gap = () => right - ghostN;
      const gapText = () => (gap() > 0 ? t("Ahead of your best by {n}", { n: gap() }) : gap() < 0 ? t("Behind your best by {n}", { n: -gap() }) : t("Level with your best"));
      const ghostPct = () => Math.min(100, (ghostN / goal) * 100);

      const track = () => {
        const pct = Math.min(100, (right / goal) * 100);
        return `<div class="race-top"><div class="race-track" role="progressbar" aria-valuemin="0" aria-valuemax="${goal}" aria-valuenow="${right}" aria-label="${t("{a} of {b} to the flag", { a: right, b: goal })}"><span class="race-runner" style="left:calc(${pct}% * 0.92)" aria-hidden="true">🏃</span>${ghost ? `<span class="race-ghost" style="left:calc(${ghostPct()}% * 0.92)" aria-hidden="true">🏃</span>` : ""}<span class="race-flag" aria-hidden="true">🏁</span></div>${ghost ? `<div class="small muted center race-ghost-line" style="min-height:20px">${gapText()}</div>` : ""}</div>`;
      };

      function draw() {
        cur = items[at % items.length];
        at++;
        locked = false;
        el.innerHTML = `${track()}
          ${picHTML(cur)}<div class="quiz-q race-q" id="rc-q" aria-live="polite">${rich(cur.q)}</div>
          <div class="race-opts" role="group" aria-labelledby="rc-q">${cur.options.map((o, i) => `<button class="option" data-i="${i}" ${i === 0 ? "data-first" : ""}><span class="letter">${i + 1}</span><span>${rich(o)}</span></button>`).join("")}</div>
          <div class="small muted center" data-fb aria-live="polite" style="min-height:24px;margin-top:10px"></div>`;
        const f = el.querySelector("[data-first]");
        if (f && document.activeElement && (document.activeElement === document.body || el.contains(document.activeElement) || document.activeElement.closest("#app"))) f.focus({ preventScroll: true });
      }

      // Ghost: a run beats the best when it got further; the same distance is decided by the earlier finish time.
      const beats = (a, b) => a.length > b.length || (a.length === b.length && a.length > 0 && a[a.length - 1] < b[b.length - 1]);

      function end() {
        clearTimeout(timer);
        clearInterval(ghostTick);
        const done = right >= goal;
        const stars = done && wrong <= 2 ? 3 : done || right >= Math.ceil(goal * 0.6) ? 2 : 1;
        let ghostLine = t("Finish a race to set a ghost to beat.");
        if (ghost) {
          const sec = (x) => Math.round(x * 10) / 10;
          const more = paces.length - ghost.length;
          ghostLine = beats(paces, ghost) ? `${t("You beat your best run!")} (${more > 0 ? t("{n} more answers", { n: more }) : t("{n} s faster", { n: sec(ghost[ghost.length - 1] - paces[paces.length - 1]) })})` : t("Your best run is still ahead. Try again!");
        }
        api.finish({ ghost: paces, stars, lines: [ghostLine, done ? t("Reached the flag!") : t("{a} of {b} to the flag", { a: right, b: goal }), t("{a} right, {b} wrong", { a: right, b: wrong }), t("Best streak {n}", { n: best })] });
      }

      function pick(i) {
        if (locked || !api.live()) return;
        locked = true;
        const ok = i === cur.answer;
        api.answered(cur, ok, i);
        el.querySelectorAll(".option").forEach((b) => {
          const n = Number(b.dataset.i);
          b.classList.add("locked");
          if (n === cur.answer) b.classList.add("correct");
          else if (n === i) b.classList.add("wrong");
        });
        const fb = el.querySelector("[data-fb]");
        if (ok) {
          right++;
          paces.push(Math.round(api.elapsed() * 10) / 10);
          streak++;
          best = Math.max(best, streak);
          let pts = 10 + 2 * Math.min(streak, 10);
          if (streak % 5 === 0) pts += 25;
          api.score(pts);
          api.streak(streak);
          fb.textContent = `+${pts}${streak % 5 === 0 ? " · " + t("{n} in a row!", { n: streak }) : ""}`;
          if (right >= goal) {
            const left = Math.max(0, SECONDS - api.elapsed());
            api.score(Math.round(left) * 2);
            el.querySelector(".race-top").outerHTML = track();
            timer = setTimeout(end, 500);
            return;
          }
          el.querySelector(".race-top").outerHTML = track();
          timer = setTimeout(() => api.live() && draw(), 350);
          return;
        }
        wrong++;
        streak = 0;
        api.score(-5);
        api.streak(0);
        api.miss({ prompt: cur.q, yours: cur.options[i], right: cur.options[cur.answer], explain: cur.explain });
        fb.textContent = `${t("Correct answer:")} ${plain(cur.options[cur.answer])}`;
        api.say(`${t("Not quite")}. ${t("Correct answer:")} ${plain(cur.options[cur.answer])}`);
        timer = setTimeout(() => api.live() && draw(), 1100);
      }

      el.addEventListener("click", (e) => {
        const b = e.target.closest(".option");
        if (b) pick(Number(b.dataset.i));
      });
      el.addEventListener("keydown", (e) => {
        if (e.metaKey || e.ctrlKey || e.altKey) return;
        const n = "1234".indexOf(e.key);
        if (n >= 0) pick(n);
      });
      // The ghost runs on the game clock (api.elapsed), so it stands still while paused. About 4 times a second.
      const ghostTick = ghost
        ? setInterval(() => {
            if (!api.live()) return clearInterval(ghostTick);
            const now = api.elapsed();
            ghostN = ghost.filter((x) => x <= now).length;
            const g = el.querySelector(".race-ghost");
            if (g) g.style.left = `calc(${ghostPct()}% * 0.92)`;
            const line = el.querySelector(".race-ghost-line");
            if (line) line.textContent = gapText();
            const state = Math.sign(gap());
            if (ghostGap !== null && state !== ghostGap) api.say(gapText()); // spoken only when the lead changes
            ghostGap = state;
          }, 250)
        : null;
      api.onTimeUp(end);
      draw();
    },
  });
})();
