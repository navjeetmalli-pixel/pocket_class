// Guided lesson: one chapter as a single learning path, built only from content the chapter already has.
//   1 Think first      a no-pressure question before the lesson (not scored)
//   2 The idea         the chapter's notes, one topic at a time
//   3 Your first guess the opening question, now resolved
//   4 Worked example   a full solution to read step by step
//   5 Your turn        a similar question; the steps are revealed only as hints
//   6 Practice         three questions, easy to hard, each with a confidence check
//   7 Next up          a question that leads into the next chapter
//   8 Done             what went well, what to revise
// Only Practice is scored: wrong answers go to My mistakes, like the quiz.
// The lesson is on for every Maths and Physics chapter from Class 6 (the classes with solved examples,
// number-changing generators and levelled practice banks). Other subjects can be added in available().

const Guided = (() => {
  const D = StudyData;
  const SUBJECTS = ["maths", "physics"];
  const available = (c, subjectId) => c >= 6 && SUBJECTS.includes(subjectId);

  const STEPS = ["Think first", "The idea", "Your first guess", "Worked example", "Your turn", "Practice", "Next up", "Done"];
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

    // "Your turn": a fresh question with worked steps, or the chapter's second solved example.
    const gen = Gen.questions(c, subj.id, ch.id, 1, Date.now())[0];
    const ex = ch.examples || [];
    const turn = gen
      ? { q: gen.q, steps: gen.steps, answer: gen.options[0], options: gen.options, order: shuffle([0, 1, 2, 3]), picked: null, shown: 0 }
      : ex[1]
        ? { q: ex[1].q, steps: ex[1].steps, answer: ex[1].answer, options: null, picked: null, shown: 0 }
        : null;

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
      turn,
      practice,
      p: 0,
      hook,
      step: 0,
      recorded: false,
    };
  }

  // ---------- mounting ----------
  function mount(container, { c, subj, chs, idx, ch }) {
    el = container;
    s = build(c, subj, chs, idx, ch);
    el.onclick = onClick;
    render();
  }

  const live = () => s && el && el.isConnected;

  function render() {
    if (!live()) return;
    el.innerHTML = `
      <div class="card guided">
        <div class="quiz-head"><span>Step ${s.step + 1} of ${STEPS.length}</span><span class="quiz-clock">${esc(STEPS[s.step])}</span></div>
        <span class="bar"><i style="width:${pct(s.step, STEPS.length - 1)}%"></i></span>
        ${[think, idea, resolve, worked, turn, practice, hook, done][s.step]()}
      </div>`;
  }

  function go(step) {
    s.step = Math.max(0, Math.min(STEPS.length - 1, step));
    render();
    const top = el.getBoundingClientRect().top;
    if (top < 0) window.scrollTo({ top: window.scrollY + top - 80 });
  }

  const nav = (label = "Next step", act = "next", back = true) =>
    `<div class="quiz-nav">${back && s.step > 0 ? `<button class="btn" data-act="back">${icon("back")} Back</button>` : ""}<button class="btn primary" data-act="${act}">${label} ${icon("arrow")}</button></div>`;

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
      <p class="g-lead">Before the lesson, have a go at this. A guess is fine: it is not counted anywhere.</p>
      <div class="quiz-q">${rich(it.q)}</div>
      ${options(it, { locked: guessed, reveal: false })}
      ${guessed
        ? `<div class="feedback neutral" role="status"><div class="h">${s.guess === "unsure" ? "No problem." : "Noted."}</div>Let's learn the idea first. We'll come back to this question.</div>${nav("Learn the idea")}`
        : `<button class="btn block mt" data-act="unsure">I'm not sure yet</button>`}`;
  }

  function idea() {
    const t = s.topics[s.topic];
    const last = s.topic === s.topics.length - 1;
    const formulas =
      last && s.ch.formulas && s.ch.formulas.length
        ? `<section class="formula-box card" style="margin-top:14px"><h3>${icon("formula")} Keep these handy</h3><ul>${s.ch.formulas.map((f) => `<li>${rich(f)}</li>`).join("")}</ul></section>`
        : "";
    return `
      <div class="eyebrow g-eyebrow">Idea ${s.topic + 1} of ${s.topics.length}</div>
      <article class="note g-note"><h3>${esc(t.heading)}</h3><ul>${t.points.map((p) => `<li>${rich(p)}</li>`).join("")}</ul></article>
      ${formulas}
      <div class="quiz-nav">
        <button class="btn" data-act="${s.topic ? "topic-prev" : "back"}">${icon("back")} Back</button>
        <button class="btn primary" data-act="${last ? "next" : "topic-next"}">${last ? "Back to your guess" : "Next idea"} ${icon("arrow")}</button>
      </div>`;
  }

  function resolve() {
    const it = { ...s.first, picked: s.guess === "unsure" ? null : s.guess };
    const right = it.picked === it.answer;
    const head = right ? "Your first guess was right 🎉" : s.guess === "unsure" ? "Here is the answer" : "Not that one, and now you can see why";
    return `
      <p class="g-lead">The question you saw at the start, with what you now know.</p>
      <div class="quiz-q">${rich(it.q)}</div>
      ${options(it, { locked: true, reveal: true })}
      <div class="feedback ${right ? "good" : "neutral"}" role="status"><div class="h">${head}</div>${rich(it.explain)}</div>
      ${nav("See a worked example")}`;
  }

  function worked() {
    const ex = s.example;
    if (!ex) return `<p class="g-lead">This chapter has no solved example yet, so let's go straight to a question.</p>${nav("Try one")}`;
    return `
      <p class="g-lead">Read each step and ask yourself <strong>why</strong> it works before moving to the next.</p>
      <article class="example"><p class="q">${rich(ex.q)}</p>
        <ol class="steps g-steps">${ex.steps.map((st) => `<li>${rich(st)}</li>`).join("")}</ol>
        <div class="answer">${rich(ex.answer)}</div></article>
      ${nav("Now you try")}`;
  }

  function turn() {
    const t = s.turn;
    if (!t) return `<p class="g-lead">No similar question is available for this chapter yet.</p>${nav("On to practice")}`;
    const total = t.steps.length;
    const done = t.picked !== null || t.shown >= total;
    const hintsLeft = Math.max(0, total - 1 - t.shown); // the last step always stays hidden until the answer
    const steps = t.steps
      .map((st, i) => (i < t.shown || done ? `<li>${rich(st)}</li>` : `<li class="hidden-step" aria-hidden="true">Step ${i + 1}</li>`))
      .join("");
    let foot = "";
    if (done) {
      const ok = t.options ? t.picked === 0 : null;
      foot = `<div class="answer">${rich(t.answer)}</div>
        <div class="feedback ${ok === false ? "bad" : ok ? "good" : "neutral"}" role="status"><div class="h">${
          ok ? "Correct! 🎉" : ok === false ? "Not quite" : "Here is the full solution"
        }</div>${t.shown ? `You used ${t.shown} hint${t.shown > 1 ? "s" : ""}. ` : ok ? "No hints needed. " : ""}Compare the steps with the worked example.</div>
        ${nav("On to practice")}`;
    } else {
      foot = `<div class="quiz-nav">
        <button class="btn" data-act="hint" ${hintsLeft ? "" : "disabled"}>${icon("note")} Show a hint${hintsLeft ? ` (${hintsLeft} left)` : ""}</button>
        ${t.options ? "" : `<button class="btn primary" data-act="show-turn">Show the solution</button>`}
      </div>`;
    }
    return `
      <p class="g-lead">Same idea, new numbers. Try it in your head or notebook first. Hints reveal the steps one at a time.</p>
      <div class="quiz-q">${rich(t.q)}</div>
      ${t.options ? options({ ...t, answer: 0 }, { locked: done, reveal: done }) : ""}
      <ol class="steps g-steps mt">${steps}</ol>
      ${foot}`;
  }

  function practice() {
    const it = s.practice[s.p];
    if (!it) return `<p class="g-lead">No practice questions for this chapter yet.</p>${nav("Next up")}`;
    const n = s.practice.length;
    const picked = it.picked !== null;
    const revealed = picked && it.sure !== null;
    let foot = "";
    if (picked && !revealed) {
      foot = `<div class="g-confidence" role="group" aria-label="How sure are you?">
        <span>How sure are you?</span>
        <button class="btn" data-sure="1">Sure</button>
        <button class="btn" data-sure="0">Not sure</button>
      </div>`;
    } else if (revealed) {
      const ok = it.picked === it.answer;
      const head = ok ? (it.sure ? "Correct, and you knew it 🎉" : "Correct! Here's why, so it sticks") : it.sure ? "Not this time. You were sure, so read this carefully" : "Not quite, and you sensed it";
      foot = `<div class="feedback ${ok ? "good" : "bad"}" role="status">
          <div class="h">${head}</div>
          ${ok ? "" : `<div>Correct answer: <strong>${rich(it.options[it.answer])}</strong></div>`}
          ${ok && it.sure ? "" : `<div>${rich(it.explain)}</div>`}
          ${!ok && it.sure ? `<div class="mt-s"><a href="${s.base}/notes">Read the notes again ${icon("arrow")}</a></div>` : ""}
        </div>
        ${nav(s.p < n - 1 ? "Next question" : "Next up", s.p < n - 1 ? "p-next" : "next", false)}`;
    }
    const level = ["Easy", "Medium", "Hard"][Math.min((it.level || 1) - 1, 2)];
    return `
      <p class="g-lead">Three questions, easy to hard. After each answer, say how sure you were.</p>
      <div class="row" style="justify-content:space-between"><span class="eyebrow g-eyebrow">Question ${s.p + 1} of ${n}</span><span class="pill accent">${level}</span></div>
      <div class="quiz-q">${rich(it.q)}</div>
      ${options(it, { locked: picked, reveal: revealed })}
      ${foot}`;
  }

  function hook() {
    const next = s.next;
    const h = s.hook;
    if (!next) return `<p class="g-lead">This is the last chapter of ${esc(s.subj.name)} for Class ${s.c}. Well done for getting here.</p>${nav("Finish", "finish")}`;
    return `
      <p class="g-lead">The next chapter is <strong>${esc(next.title)}</strong>. Here is a taste of it. Think about it; the answer is there when you want it.</p>
      ${h
        ? `<div class="quiz-q">${rich(h.q)}</div>
           <ol class="g-choices">${h.options.map((o, k) => `<li><span class="letter">${"ABCD"[k]}</span>${rich(o)}</li>`).join("")}</ol>
           <details class="reveal"><summary>Show the answer</summary><div class="answer">${rich(h.options[h.answer])}</div><p class="small" style="margin-top:8px">${rich(h.explain)}</p></details>`
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
    if (s.guess !== null) notes.push(firstRight ? "Your first guess, before the lesson, was already right." : "Your first guess was off, and the lesson sorted it out.");
    if (sureWrong) notes.push(`${sureWrong} answer${sureWrong > 1 ? "s" : ""} where you were sure but wrong: those are the ideas to re-read.`);
    if (unsureRight) notes.push(`${unsureRight} answer${unsureRight > 1 ? "s" : ""} right but unsure: a few more questions will make ${unsureRight > 1 ? "them" : "it"} stick.`);
    if (ps.length && score === ps.length && !unsureRight) notes.push("Every practice question right and sure. Try the full quiz next.");
    const mistakes = Store.mistakesFor(s.c).length;
    const p = pct(score, ps.length);
    const ring = p >= 75 ? "var(--good)" : p >= 50 ? "var(--gold)" : "var(--bad)";
    return `
      <div class="result-top" style="padding:8px 0 0">
        <div class="ring" style="--p:${p};--ring:${ring}"><div><span class="v">${score}/${ps.length}</span><span class="l">practice</span></div></div>
        <div class="result-msg">Lesson complete</div>
      </div>
      <ul class="g-notes">${notes.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>
      <div class="result-actions" style="margin-top:16px">
        ${score < ps.length && mistakes ? `<a class="btn primary" href="#/revise/mistakes">${icon("target")} Practise my mistakes</a>` : `<a class="btn primary" href="${s.base}/quiz">${icon("quiz")} Take the chapter quiz</a>`}
        ${s.next ? `<a class="btn" href="#/chapter/${s.c}/${s.subj.id}/${s.next.id}">Next chapter ${icon("arrow")}</a>` : `<a class="btn" href="${s.base}/notes">Back to notes</a>`}
        <button class="btn" data-act="again">${icon("reset")} Do it again</button>
      </div>`;
  }

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
    const b = e.target.closest("[data-pick],[data-act],[data-sure]");
    if (!b || !s) return;
    if (b.dataset.pick !== undefined) return pick(Number(b.dataset.pick));
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
    } else if (act === "show-turn") {
      if (s.turn) s.turn.shown = s.turn.steps.length;
      render();
    } else if (act === "p-next") {
      s.p = Math.min(s.practice.length - 1, s.p + 1);
      render();
      const top = el.getBoundingClientRect().top;
      if (top < 0) window.scrollTo({ top: window.scrollY + top - 80 });
    } else if (act === "finish") go(STEPS.length - 1);
    else if (act === "again") {
      const { c, subj, ch } = s;
      const f = D.chapters(c, subj.id);
      const idx = f.findIndex((x) => x.id === ch.id);
      mount(el, { c, subj, chs: f, idx, ch });
    }
  }

  function pick(orig) {
    if (s.step === 0) {
      if (s.guess !== null) return;
      s.guess = orig;
    } else if (s.step === 4) {
      const t = s.turn;
      if (!t || !t.options || t.picked !== null) return;
      t.picked = orig;
    } else if (s.step === 5) {
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
      ? `Done ${relDate(g.at).toLowerCase()} · ${g.score}/${g.total} in practice. Do it again for a different set of questions.`
      : "Learn this chapter step by step: a question first, then the idea, a worked example, practice and a confidence check. About 10 minutes.";
    return `<a class="card row guided-card no-print" href="${base}/guided" style="gap:12px">
      <span class="ti">${icon("play")}</span>
      <span class="grow"><strong>Guided lesson${g ? "" : " · New"}</strong><span class="small muted" style="display:block">${sub}</span></span>
      ${icon("arrow")}</a>`;
  }

  return { available, mount, card };
})();
