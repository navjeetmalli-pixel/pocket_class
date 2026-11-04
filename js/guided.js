// Guided lesson: one chapter as a single learning path, built only from content the chapter already has.
//   1 Think first      a no-pressure question before the lesson (not scored)
//   2 The idea         the chapter's notes, one topic at a time
//   3 Your first guess the opening question, now resolved
//   4 Worked example   a full solution to read step by step
//   5 Complete it      (when the chapter has a second worked solution) the same kind of solution with the last
//                      1-2 steps hidden: the student finishes them, then checks (worked-example fading)
//   6 Your turn        a similar question; the steps are revealed only as hints
//   7 Find the mistake (when a number-changing question with steps exists) a worked solution with one wrong step;
//                      the student taps it. Built by changing one result in a correct step list.
//   8 Practice         three questions, easy to hard, each with a confidence check
//   9 Next up          a question that leads into the next chapter
//  10 Done             what went well, what to revise, and a "teach-back" box: the student explains the chapter in
//                      their own words (saved per chapter) and ticks the key points covered. Never graded.
// Only Practice is scored: wrong answers go to My mistakes, like the quiz.
// The lesson is on for every Maths, Science, Physics and Chemistry chapter from Class 6 (the classes with solved
// examples, number-changing generators and levelled practice banks). Other subjects can be added in available().

const Guided = (() => {
  const D = StudyData;
  const SUBJECTS = ["maths", "mathspb", "science", "sciencepb", "physics", "chemistry"];
  const available = (c, subjectId) => c >= 6 && SUBJECTS.includes(subjectId);

  // Step keys in order; the lesson leaves out "fade" and "slip" when the chapter has nothing to build them from.
  const LABELS = { think: "Think first", idea: "The idea", resolve: "Your first guess", worked: "Worked example", fade: "Complete it", turn: "Your turn", slip: "Find the mistake", practice: "Practice", hook: "Next up", done: "Done" };
  const PRACTICE_N = 3;

  let s = null;
  let el = null;

  // ---------- building the lesson from chapter content ----------
  const rnd = (list) => list[Math.floor(Math.random() * list.length)];
  const withOrder = (q) => ({ ...q, order: q.keepOrder ? [0, 1, 2, 3] : shuffle([0, 1, 2, 3]), picked: null, sure: null });

  // One question per level, easy to hard, skipping any already used. Falls back to whatever levels exist.
  function practiceSet(mcq, used) {
    const out = [];
    const taken = new Set(used.map((q) => q.q));
    for (let level = 1; level <= PRACTICE_N; level++) {
      const pool = mcq.filter((q) => (q.level || 1) === level && !taken.has(q.q));
      if (pool.length) {
        const q = rnd(pool);
        taken.add(q.q);
        out.push(q);
      }
    }
    const rest = shuffle(mcq.filter((q) => !taken.has(q.q)));
    while (out.length < PRACTICE_N && rest.length) out.push(rest.pop());
    return out;
  }

  function build(c, subj, chs, idx, ch) {
    const bank = D.practiceFor(c, subj.id, ch.id);
    const all = [...ch.quiz, ...bank.mcq];
    const easy = all.filter((q) => (q.level || 1) === 1);
    const first = rnd(easy.length ? easy : all);
    const practice = practiceSet(all, [first]).map(withOrder);

    // Questions with worked steps: fresh number-changing ones (Gen) and the chapter's solved examples.
    //   "Complete it": a solution with its last steps hidden (a Gen question with 2+ steps, else a solved example)
    //   "Your turn":   another question, solved independently (hints reveal the steps)
    //   "Find the mistake": a Gen solution with one wrong result swapped in
    const gens = Gen.questions(c, subj.id, ch.id, 6, Date.now());
    const ex = ch.examples || [];
    const fromGen = (g) => ({ q: g.q, steps: g.steps, answer: g.options[0], options: g.options, order: shuffle([0, 1, 2, 3]), picked: null, shown: 0, revealed: false });
    const fromEx = (e) => ({ q: e.q, steps: e.steps, answer: e.answer, options: null, picked: null, shown: 0, revealed: false });
    const fadeGen = gens.find((g) => g.steps.length >= 2);
    let pool = ex.slice(1);
    let fadeEx = null;
    if (!fadeGen) {
      fadeEx = pool.find((e) => e.steps.length >= 2) || null;
      pool = pool.filter((e) => e !== fadeEx);
    }
    const turnGen = gens.find((g) => g !== fadeGen);
    const turnEx = turnGen ? null : pool[0] || null;
    let fade = fadeGen ? fromGen(fadeGen) : fadeEx ? fromEx(fadeEx) : null;
    let turn = turnGen ? fromGen(turnGen) : turnEx ? fromEx(turnEx) : null;
    if (!turn && fade) {
      // Only one question with steps in the whole chapter: use it as "Your turn" rather than hiding steps.
      turn = fadeGen ? fromGen(fadeGen) : fromEx(fadeEx);
      fade = null;
    }
    let slip = null;
    for (const g of [...gens.filter((x) => x !== fadeGen && x !== turnGen), ...gens]) {
      const m = slipSteps(g.steps);
      if (m) {
        slip = { q: g.q, ...m, tapped: null };
        break;
      }
    }

    const next = chs[idx + 1];
    let hook = null;
    if (next) {
      const pool = [...next.quiz, ...D.practiceFor(c, subj.id, next.id).mcq];
      const easyNext = pool.filter((q) => (q.level || 1) === 1);
      hook = pool.length ? rnd(easyNext.length ? easyNext : pool) : null;
    }

    return {
      c,
      subj,
      ch,
      next,
      key: Store.key(c, subj.id, ch.id),
      base: `#/chapter/${c}/${subj.id}/${ch.id}`,
      first: withOrder(first),
      guess: null, // option index, or "unsure"
      topics: ch.notes,
      topic: 0,
      example: ex[0] || null,
      fade,
      turn,
      slip,
      practice,
      p: 0,
      hook,
      steps: ["think", "idea", "resolve", "worked", fade && "fade", "turn", slip && "slip", "practice", "hook", "done"].filter(Boolean),
      step: 0,
      recorded: false,
    };
  }

  // ---------- "find the mistake": one wrong result in a correct step list ----------
  // Takes the worked steps of a generated question and changes the last number of one step that ends "= number"
  // (optional unit): a sign error, a slip of one, or a misplaced zero. Only numbers are changed, so the original
  // step is always known and the wrong one is always provably different. Returns null if no step qualifies.
  const STEP_END = /^(.*=\s*[₹$]?)(−|-)?(\d[\d,]*(?:\.\d+)?)(\s?[^\d=]{0,14})$/s;
  function slipSteps(steps) {
    if (steps.length < 2) return null;
    const options = [];
    steps.forEach((st, i) => {
      if (/^check/i.test(st)) return;
      const m = st.match(STEP_END);
      if (!m || !/\d/.test(m[1]) || /,\s/.test(m[1])) return; // needs a calculation to the left of the result
      const comma = m[3].includes(",");
      const v = (m[2] ? -1 : 1) * Number(m[3].replace(/,/g, ""));
      if (!Number.isFinite(v)) return;
      const kinds = [];
      if (v !== 0 && /[−(]/.test(st)) kinds.push(["sign", -v]);
      kinds.push(["one", v > 1 && Math.random() < 0.5 ? v - 1 : v + 1]);
      if (v !== 0 && Number.isInteger(v) && Math.abs(v) >= 2) kinds.push(["ten", v * 10]);
      const [kind, w] = kinds[Math.floor(Math.random() * kinds.length)];
      const abs = Math.abs(Math.round(w * 100) / 100);
      const txt = comma || abs >= 1000 ? abs.toLocaleString("en-IN", { maximumFractionDigits: 2 }) : String(abs);
      const bad = m[1] + (w < 0 ? "−" : "") + txt + m[4];
      if (bad !== st) options.push({ i, kind, bad });
    });
    if (!options.length) return null;
    const o = options[Math.floor(Math.random() * options.length)];
    return { steps: steps.map((st, i) => (i === o.i ? o.bad : st)), bad: o.i, kind: o.kind, orig: steps[o.i] };
  }

  // ---------- mounting ----------
  function mount(container, { c, subj, chs, idx, ch }) {
    el = container;
    s = build(c, subj, chs, idx, ch);
    el.onclick = onClick;
    render();
  }

  const live = () => s && el && el.isConnected;

  // The page is redrawn on every step, so keep keyboard focus: on the same kind of control if it is still there,
  // otherwise on the main button of the new step.
  const focusKey = (n) => n && ["data-act", "data-pick", "data-slip", "data-sure"].map((a) => (n.hasAttribute(a) ? `[${a}="${n.getAttribute(a)}"]` : "")).join("");

  function render() {
    if (!live()) return;
    const was = el.contains(document.activeElement) ? focusKey(document.activeElement) : null;
    draw();
    // Feedback is spoken once through the page's live region.
    const fb = el.querySelector(".feedback");
    const said = fb ? fb.textContent : null;
    if (said && said !== s.said) announce(said);
    s.said = said;
    if (was === null) return;
    const f = (was && [...el.querySelectorAll(was)].find((x) => !x.disabled && !x.classList.contains("locked"))) || el.querySelector('.quiz-nav .btn.primary, [data-act]:not([disabled]), .option:not(.locked)');
    if (f) f.focus({ preventScroll: true });
  }

  function draw() {
    el.innerHTML = `
      <div class="card guided">
        <div class="quiz-head"><span>${t("Step {i} of {n}", { i: s.step + 1, n: s.steps.length })}</span><span class="quiz-clock">${esc(t(LABELS[stepKey()]))}</span></div>
        <span class="bar"><i style="width:${pct(s.step, s.steps.length - 1)}%"></i></span>
        ${VIEWS[stepKey()]()}
      </div>`;
  }

  const stepKey = () => s.steps[s.step];

  function go(step) {
    s.step = Math.max(0, Math.min(s.steps.length - 1, step));
    render();
    const top = el.getBoundingClientRect().top;
    if (top < 0) window.scrollTo({ top: window.scrollY + top - 80 });
  }

  const nav = (label = "Next step", act = "next", back = true) =>
    `<div class="quiz-nav">${back && s.step > 0 ? `<button class="btn" data-act="back">${icon("back")} ${t("Back")}</button>` : ""}<button class="btn primary" data-act="${act}">${t(label)} ${icon("arrow")}</button></div>`;

  // Options list in the quiz's style. `reveal` marks right and wrong; otherwise only the pick is shown.
  function options(it, { locked, reveal }) {
    return `<div class="options">${it.order
      .map((orig, k) => {
        let cls = "option";
        if (locked) cls += " locked";
        if (reveal && orig === it.answer) cls += " correct";
        else if (reveal && orig === it.picked) cls += " wrong";
        else if (orig === it.picked) cls += " selected";
        return `<button class="${cls}" data-pick="${orig}"><span class="letter">${"ABCD"[k]}</span><span>${rich(it.options[orig])}</span></button>`;
      })
      .join("")}</div>`;
  }

  // ---------- the steps ----------
  function think() {
    const guessed = s.guess !== null;
    const it = { ...s.first, picked: guessed && s.guess !== "unsure" ? s.guess : null };
    return `
      <p class="g-lead">${t("Before the lesson, have a go at this. A guess is fine: it is not counted anywhere.")}</p>
      <div class="quiz-q">${rich(it.q)}</div>
      ${options(it, { locked: guessed, reveal: false })}
      ${guessed
        ? `<div class="feedback neutral"><div class="h">${s.guess === "unsure" ? t("No problem.") : t("Noted.")}</div>${t("Let's learn the idea first. We'll come back to this question.")}</div>${nav("Learn the idea")}`
        : `<button class="btn block mt" data-act="unsure">${t("I'm not sure yet")}</button>`}`;
  }

  function idea() {
    const topic = s.topics[s.topic];
    const last = s.topic === s.topics.length - 1;
    const formulas =
      last && s.ch.formulas && s.ch.formulas.length
        ? `<section class="formula-box card" style="margin-top:14px"><h3>${icon("formula")} ${t("Keep these handy")}</h3><ul>${s.ch.formulas.map((f) => `<li>${rich(f)}</li>`).join("")}</ul></section>`
        : "";
    return `
      <div class="eyebrow g-eyebrow">${t("Idea {i} of {n}", { i: s.topic + 1, n: s.topics.length })}</div>
      <article class="note g-note"><h3>${esc(topic.heading)}</h3><ul>${topic.points.map((p) => `<li>${rich(p)}</li>`).join("")}</ul></article>
      ${formulas}
      <div class="quiz-nav">
        <button class="btn" data-act="${s.topic ? "topic-prev" : "back"}">${icon("back")} ${t("Back")}</button>
        <button class="btn primary" data-act="${last ? "next" : "topic-next"}">${last ? t("Back to your guess") : t("Next idea")} ${icon("arrow")}</button>
      </div>`;
  }

  function resolve() {
    const it = { ...s.first, picked: s.guess === "unsure" ? null : s.guess };
    const right = it.picked === it.answer;
    const head = right ? t("Your first guess was right 🎉") : s.guess === "unsure" ? t("Here is the answer") : t("Not that one, and now you can see why");
    return `
      <p class="g-lead">${t("The question you saw at the start, with what you now know.")}</p>
      <div class="quiz-q">${rich(it.q)}</div>
      ${options(it, { locked: true, reveal: true })}
      <div class="feedback ${right ? "good" : "neutral"}"><div class="h">${head}</div>${rich(it.explain)}</div>
      ${nav("See a worked example")}`;
  }

  function worked() {
    const ex = s.example;
    if (!ex) return `<p class="g-lead">${t("This chapter has no solved example yet, so let's go straight to a question.")}</p>${nav("Try one")}`;
    return `
      <p class="g-lead">${t("Read each step and ask yourself <strong>why</strong> it works before moving to the next.")}</p>
      <article class="example"><p class="q">${rich(ex.q)}</p>
        <ol class="steps g-steps">${ex.steps.map((st) => `<li>${rich(st)}</li>`).join("")}</ol>
        <div class="answer">${rich(ex.answer)}</div></article>
      ${nav(s.fade ? "Complete a solution" : "Now you try")}`;
  }

  // Worked-example fading: the same kind of solution, with the last one or two steps left for the student.
  function fade() {
    const f = s.fade;
    const n = f.steps.length;
    const keep = n - Math.min(n >= 3 ? 2 : 1, n - 1);
    const steps = f.steps
      .map((st, i) => (i < keep ? `<li>${rich(st)}</li>` : f.revealed ? `<li class="g-new">${rich(st)}</li>` : `<li class="hidden-step">${t("Step {n}: finish it yourself", { n: i + 1 })}</li>`))
      .join("");
    let foot;
    if (f.revealed) {
      const ok = f.options ? f.picked === 0 : null;
      foot = `${f.options ? "" : `<div class="answer">${rich(f.answer)}</div>`}
        <div class="feedback ${ok === false ? "bad" : ok ? "good" : "neutral"}"><div class="h">${
          ok ? t("Correct! 🎉") : ok === false ? t("Not quite") : t("Here are the missing steps")
        }</div>${t("The highlighted steps are the ones you completed. Compare them with your own working.")}</div>
        ${nav("Now you try")}`;
    } else {
      foot = `<div class="quiz-nav"><button class="btn ${f.options ? "" : "primary"}" data-act="fade-show">${f.options ? t("Show the missing steps") : t("Check my working")}</button></div>`;
    }
    return `
      <p class="g-lead">${t("Now the last {n} {n:step is|steps are} yours. Work them out in your head or notebook, then check.", { n: n - keep })}</p>
      <div class="quiz-q">${rich(f.q)}</div>
      ${f.options ? options({ ...f, answer: 0 }, { locked: f.revealed, reveal: f.revealed }) : ""}
      <ol class="steps g-steps mt">${steps}</ol>
      ${foot}`;
  }

  // Find the mistake: tap the step that has a wrong result.
  function slip() {
    const sl = s.slip;
    const done = sl.tapped !== null;
    const right = sl.tapped === sl.bad;
    const items = sl.steps
      .map((st, i) => {
        let cls = "g-slip";
        if (done && i === sl.bad) cls += " is-bad";
        else if (done && i === sl.tapped) cls += " is-miss";
        return `<li><button class="${cls}" data-slip="${i}" ${done ? "disabled" : ""}>${rich(st)}</button></li>`;
      })
      .join("");
    const why = { sign: "The sign has slipped.", one: "A small arithmetic slip: the result is off.", ten: "A zero or decimal point has slipped." }[sl.kind];
    const fb = done
      ? `<div class="feedback ${right ? "good" : "bad"}"><div class="h">${right ? t("Found it 🎉") : t("Not that one. The slip is in step {n}.", { n: sl.bad + 1 })}</div>
          <div>${t(why)} ${t("Step {n} should read:", { n: sl.bad + 1 })} <strong>${rich(sl.orig)}</strong></div>
          <div class="mt-s">${t("Tip: after each step, ask if the number still makes sense.")}</div></div>
        ${nav("On to practice", "next", false)}`
      : "";
    return `
      <p class="g-lead">${t("A classmate solved this, but one step has a slip. Tap the step you think is wrong. This is not scored.")}</p>
      <div class="quiz-q">${rich(sl.q)}</div>
      <ol class="steps g-steps g-slips mt">${items}</ol>
      ${fb}`;
  }

  function turn() {
    const tn = s.turn;
    if (!tn) return `<p class="g-lead">${t("No similar question is available for this chapter yet.")}</p>${nav(s.slip ? "Spot the mistake" : "On to practice")}`;
    const total = tn.steps.length;
    const done = tn.picked !== null || tn.shown >= total;
    const hintsLeft = Math.max(0, total - 1 - tn.shown); // the last step always stays hidden until the answer
    const steps = tn.steps
      .map((st, i) => (i < tn.shown || done ? `<li>${rich(st)}</li>` : `<li class="hidden-step" aria-hidden="true">${t("Step {n}", { n: i + 1 })}</li>`))
      .join("");
    let foot = "";
    if (done) {
      const ok = tn.options ? tn.picked === 0 : null;
      foot = `<div class="answer">${rich(tn.answer)}</div>
        <div class="feedback ${ok === false ? "bad" : ok ? "good" : "neutral"}"><div class="h">${
          ok ? t("Correct! 🎉") : ok === false ? t("Not quite") : t("Here is the full solution")
        }</div>${tn.shown ? t("You used {n} {n:hint|hints}.", { n: tn.shown }) + " " : ok ? t("No hints needed.") + " " : ""}${t("Compare the steps with the worked example.")}</div>
        ${nav(s.slip ? "Spot the mistake" : "On to practice")}`;
    } else {
      foot = `<div class="quiz-nav">
        <button class="btn" data-act="hint" ${hintsLeft ? "" : "disabled"}>${icon("notes")} ${t("Show a hint")}${hintsLeft ? ` ${t("({n} left)", { n: hintsLeft })}` : ""}</button>
        ${tn.options ? "" : `<button class="btn primary" data-act="show-turn">${t("Show the solution")}</button>`}
      </div>`;
    }
    return `
      <p class="g-lead">${t("Same idea, new numbers. Try it in your head or notebook first. Hints reveal the steps one at a time.")}</p>
      <div class="quiz-q">${rich(tn.q)}</div>
      ${tn.options ? options({ ...tn, answer: 0 }, { locked: done, reveal: done }) : ""}
      <ol class="steps g-steps mt">${steps}</ol>
      ${foot}`;
  }

  function practice() {
    const it = s.practice[s.p];
    if (!it) return `<p class="g-lead">${t("No practice questions for this chapter yet.")}</p>${nav("Next up")}`;
    const n = s.practice.length;
    const picked = it.picked !== null;
    const revealed = picked && it.sure !== null;
    let foot = "";
    if (picked && !revealed) {
      foot = `<div class="g-confidence" role="group" aria-label="${t("How sure are you?")}">
        <span>${t("How sure are you?")}</span>
        <button class="btn" data-sure="1">${t("Sure")}</button>
        <button class="btn" data-sure="0">${t("Not sure")}</button>
      </div>`;
    } else if (revealed) {
      const ok = it.picked === it.answer;
      const head = ok ? (it.sure ? t("Correct, and you knew it 🎉") : t("Correct! Here's why, so it sticks")) : it.sure ? t("Not this time. You were sure, so read this carefully") : t("Not quite, and you sensed it");
      foot = `<div class="feedback ${ok ? "good" : "bad"}">
          <div class="h">${head}</div>
          ${ok ? "" : `<div>${t("Correct answer:")} <strong>${rich(it.options[it.answer])}</strong></div>`}
          ${ok && it.sure ? "" : `<div>${rich(it.explain)}</div>`}
          ${!ok && it.sure ? `<div class="mt-s"><a href="${s.base}/notes">${t("Read the notes again")} ${icon("arrow")}</a></div>` : ""}
        </div>
        ${nav(s.p < n - 1 ? "Next question" : "Next up", s.p < n - 1 ? "p-next" : "next", false)}`;
    }
    const level = t(["Easy", "Medium", "Hard"][Math.min((it.level || 1) - 1, 2)]);
    return `
      <p class="g-lead">${t("Three questions, easy to hard. After each answer, say how sure you were.")}</p>
      <div class="row" style="justify-content:space-between"><span class="eyebrow g-eyebrow">${t("Question {i} of {n}", { i: s.p + 1, n })}</span><span class="pill accent">${level}</span></div>
      <div class="quiz-q">${rich(it.q)}</div>
      ${options(it, { locked: picked, reveal: revealed })}
      ${foot}`;
  }

  function hook() {
    const next = s.next;
    const h = s.hook;
    if (!next) return `<p class="g-lead">${t("This is the last chapter of {subject} for Class {n}. Well done for getting here.", { subject: esc(s.subj.name), n: s.c })}</p>${nav("Finish", "finish")}`;
    return `
      <p class="g-lead">${t("The next chapter is <strong>{title}</strong>. Here is a taste of it. Think about it; the answer is there when you want it.", { title: esc(next.title) })}</p>
      ${h
        ? `<div class="quiz-q">${rich(h.q)}</div>
           <ol class="g-choices">${h.options.map((o, k) => `<li><span class="letter">${"ABCD"[k]}</span>${rich(o)}</li>`).join("")}</ol>
           <details class="reveal"><summary>${t("Show the answer")}</summary><div class="answer">${rich(h.options[h.answer])}</div><p class="small" style="margin-top:8px">${rich(h.explain)}</p></details>`
        : `<p>${rich(next.summary)}</p>`}
      ${nav("Finish", "finish")}`;
  }

  function done() {
    record();
    const ps = s.practice.filter((x) => x.picked !== null);
    const score = ps.filter((x) => x.picked === x.answer).length;
    const sureWrong = ps.filter((x) => x.sure && x.picked !== x.answer).length;
    const unsureRight = ps.filter((x) => x.sure === false && x.picked === x.answer).length;
    const firstRight = s.guess === s.first.answer;
    const notes = [];
    if (s.guess !== null) notes.push(firstRight ? t("Your first guess, before the lesson, was already right.") : t("Your first guess was off, and the lesson sorted it out."));
    if (sureWrong) notes.push(t("{n} {n:answer|answers} where you were sure but wrong: those are the ideas to re-read.", { n: sureWrong }));
    if (unsureRight) notes.push(unsureRight > 1 ? t("{n} answers right but unsure: a few more questions will make them stick.", { n: unsureRight }) : t("1 answer right but unsure: a few more questions will make it stick."));
    if (ps.length && score === ps.length && !unsureRight) notes.push(t("Every practice question right and sure. Try the full quiz next."));
    const mistakes = Store.mistakesFor(s.c).length;
    const p = pct(score, ps.length);
    const ring = p >= 75 ? "var(--good)" : p >= 50 ? "var(--gold)" : "var(--bad)";
    return `
      <div class="result-top" style="padding:8px 0 0">
        <div class="ring" style="--p:${p};--ring:${ring}"><div><span class="v">${score}/${ps.length}</span><span class="l">${t("practice")}</span></div></div>
        <div class="result-msg">${t("Lesson complete")}</div>
      </div>
      <ul class="g-notes">${notes.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>
      ${teachHTML(s.key, s.ch, true)}
      <div class="result-actions" style="margin-top:16px">
        ${score < ps.length && mistakes ? `<a class="btn primary" href="#/revise/mistakes">${icon("target")} ${t("Practise my mistakes")}</a>` : `<a class="btn primary" href="${s.base}/quiz">${icon("quiz")} ${t("Take the chapter quiz")}</a>`}
        ${s.next ? `<a class="btn" href="#/chapter/${s.c}/${s.subj.id}/${s.next.id}">${t("Next chapter")} ${icon("arrow")}</a>` : `<a class="btn" href="${s.base}/notes">${t("Back to notes")}</a>`}
        <button class="btn" data-act="again">${icon("reset")} ${t("Do it again")}</button>
      </div>`;
  }

  const VIEWS = { think, idea, resolve, worked, fade, turn, slip, practice, hook, done };

  // ---------- teach-back: explain the chapter in your own words, then tick the key points you covered ----------
  // Used at the end of the guided lesson and on the chapter's Notes tab. The text and the ticks are saved per
  // chapter on the device (Store.teach). Nothing is graded. Events are handled once, below, for every box on the page.
  function teachHTML(key, ch, open) {
    const d = Store.teach(key);
    const points = [...ch.notes.map((n) => n.heading), ...(ch.formulas || []).slice(0, 4)];
    const id = "tb-" + key.replace(/\W/g, "-");
    return `<details class="card teach no-print" ${open ? "open" : ""}>
      <summary><span class="ti">${icon("notes")}</span><strong>${t("Explain it in your own words")}</strong></summary>
      <p class="small muted">${t("Close the notes and write what this chapter is about, as if you were teaching a friend. It is saved on this device and nobody marks it.")}</p>
      <label class="teach-lab" for="${id}">${t("Your explanation")}</label>
      <textarea id="${id}" rows="5" maxlength="2000" data-teach-text data-tkey="${esc(key)}" placeholder="${esc(t("Write in your own words…"))}">${esc(d.text)}</textarea>
      <fieldset class="teach-check"><legend>${t("Now check yourself: tick the key points you covered.")}</legend>
        ${points.map((p, i) => `<label class="teach-tick"><input type="checkbox" data-teach-tick="${i}" data-tkey="${esc(key)}" ${d.ticks.includes(i) ? "checked" : ""}><span>${rich(p)}</span></label>`).join("")}
        <p class="small muted" data-teach-count>${t("{a} of {b} key points ticked", { a: d.ticks.filter((i) => i < points.length).length, b: points.length })}</p>
      </fieldset>
      <p class="small muted">${t("Missed a point? Read it again in the notes, then add it to your explanation.")}</p>
    </details>`;
  }

  const teachTimers = {};
  function saveText(ta) {
    clearTimeout(teachTimers[ta.dataset.tkey]);
    Store.setTeach(ta.dataset.tkey, { text: ta.value });
  }
  document.addEventListener("input", (e) => {
    const ta = e.target.closest && e.target.closest("[data-teach-text]");
    if (!ta) return;
    clearTimeout(teachTimers[ta.dataset.tkey]);
    teachTimers[ta.dataset.tkey] = setTimeout(() => saveText(ta), 400);
  });
  document.addEventListener("focusout", (e) => {
    const ta = e.target.closest && e.target.closest("[data-teach-text]");
    if (ta) saveText(ta);
  });
  document.addEventListener("change", (e) => {
    const box = e.target.closest && e.target.closest("[data-teach-tick]");
    if (!box) return;
    const wrap = box.closest("fieldset");
    const all = [...wrap.querySelectorAll("[data-teach-tick]")];
    const ticks = all.filter((b) => b.checked).map((b) => Number(b.dataset.teachTick));
    Store.setTeach(box.dataset.tkey, { ticks });
    wrap.querySelector("[data-teach-count]").textContent = t("{a} of {b} key points ticked", { a: ticks.length, b: all.length });
  });

  function record() {
    if (s.recorded) return;
    s.recorded = true;
    const ps = s.practice.filter((x) => x.picked !== null);
    Store.recordGuided(s.key, {
      title: `${s.subj.short} · ${s.ch.title}`,
      subject: s.subj.id,
      cls: s.c,
      score: ps.filter((x) => x.picked === x.answer).length,
      total: ps.length,
      sureWrong: ps.filter((x) => x.sure && x.picked !== x.answer).length,
    });
  }

  // ---------- events ----------
  function onClick(e) {
    const b = e.target.closest("[data-pick],[data-act],[data-sure],[data-slip]");
    if (!b || !s) return;
    if (b.dataset.pick !== undefined) return pick(Number(b.dataset.pick));
    if (b.dataset.slip !== undefined) {
      if (s.slip && s.slip.tapped === null) s.slip.tapped = Number(b.dataset.slip);
      return render();
    }
    if (b.dataset.sure !== undefined) {
      const it = s.practice[s.p];
      if (!it || it.picked === null || it.sure !== null) return;
      it.sure = b.dataset.sure === "1";
      const qk = `${s.key}/${questionId(it)}`;
      if (it.picked === it.answer) Store.clearMistake(qk);
      else Store.addMistake(qk);
      return render();
    }
    const act = b.dataset.act;
    if (act === "next") go(s.step + 1);
    else if (act === "back") go(s.step - 1);
    else if (act === "unsure") {
      if (s.guess === null) s.guess = "unsure";
      render();
    } else if (act === "topic-next") {
      s.topic = Math.min(s.topics.length - 1, s.topic + 1);
      render();
    } else if (act === "topic-prev") {
      s.topic = Math.max(0, s.topic - 1);
      render();
    } else if (act === "hint") {
      if (s.turn && s.turn.shown < s.turn.steps.length - 1) s.turn.shown++;
      render();
    } else if (act === "fade-show") {
      if (s.fade) s.fade.revealed = true;
      render();
    } else if (act === "show-turn") {
      if (s.turn) s.turn.shown = s.turn.steps.length;
      render();
    } else if (act === "p-next") {
      s.p = Math.min(s.practice.length - 1, s.p + 1);
      render();
      const top = el.getBoundingClientRect().top;
      if (top < 0) window.scrollTo({ top: window.scrollY + top - 80 });
    } else if (act === "finish") go(s.steps.length - 1);
    else if (act === "again") {
      const { c, subj, ch } = s;
      const f = D.chapters(c, subj.id);
      const idx = f.findIndex((x) => x.id === ch.id);
      mount(el, { c, subj, chs: f, idx, ch });
    }
  }

  function pick(orig) {
    const k = stepKey();
    if (k === "think") {
      if (s.guess !== null) return;
      s.guess = orig;
    } else if (k === "fade") {
      const f = s.fade;
      if (!f || !f.options || f.revealed) return;
      f.picked = orig;
      f.revealed = true;
    } else if (k === "turn") {
      const t = s.turn;
      if (!t || !t.options || t.picked !== null) return;
      t.picked = orig;
    } else if (k === "practice") {
      const it = s.practice[s.p];
      if (!it || it.picked !== null) return;
      it.picked = orig;
    } else return;
    render();
  }

  // Card shown on the Notes tab of a pilot chapter.
  function card(c, subj, ch, base) {
    if (!available(c, subj.id, ch.id)) return "";
    const g = Store.guided(Store.key(c, subj.id, ch.id));
    const sub = g
      ? t("Done {when} · {score}/{total} in practice. Do it again for a different set of questions.", { when: relDate(g.at).toLowerCase(), score: g.score, total: g.total })
      : t("Learn this chapter step by step: a question first, then the idea, a worked example, practice and a confidence check. About 10 minutes.");
    return `<a class="card row guided-card no-print" href="${base}/guided" style="gap:12px">
      <span class="ti">${icon("play")}</span>
      <span class="grow"><strong>${t("Guided lesson")}${g ? "" : ` · ${t("New")}`}</strong><span class="small muted" style="display:block">${sub}</span></span>
      ${icon("arrow")}</a>`;
  }

  // Teach-back box for the Notes tab.
  const teachCard = (c, subj, ch) => teachHTML(Store.key(c, subj.id, ch.id), ch, false);

  return { available, mount, card, teachCard };
})();
