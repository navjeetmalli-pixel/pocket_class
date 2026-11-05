// The chapter learning loop (the chapter page's "Lesson" tab), for every subject. One chapter, built only from content the
// chapter already has: its objectives (js/objectives.js), notes, diagrams, experiment (js/sims.js), questions, generators
// and games. Stages (spec 5.1), each only when the chapter has something for it:
//
//   Diagnose   diag      3-6 easy questions on the earlier work the chapter builds on (hand-written `prereq` links, else the
//                        previous chapter or two). Not graded. A weak result adds "refresh" (a short recap), see Loop.RULES.
//   Discover   think     a no-pressure question or prediction (the chapter's experiment prediction when it has one)
//   Visualise  visual    the chapter's diagrams
//   Explain    idea:N    the notes, one objective at a time ("I can ..."), then:
//              resolve   the opening question, now resolved
//              worked    a full solution (with "another example" if the student wants one), worked2 = the extra one
//              fade      the same kind of solution with the last 1-2 steps hidden (worked-example fading)
//              turn      a similar question; the steps are revealed only as hints (again = a similar one with no hints)
//              slip      find the wrong step in a solution (when a solution with numbers exists)
//   Interact   interact  the chapter's experiment, or one relevant game, played inside the lesson
//   Retrieve   practice  3-4 questions mixed from across the objectives, no notes, a confidence check after each
//   Master     master    one independent check per objective, no hints; a strong one brings a transfer question
//   (then)     hook      a question that leads into the next chapter;  done  the end screen: skills before and after, next step
//
// Subject variations (spec 5.2) are only ordering and wording: Physics puts the experiment before the notes (predict, experiment,
// explain), languages call Explain "Read and notice" and Interact "Construct". The route changes by the rules in js/loop.js, each with
// a reason that is shown. Progress is saved per student as the lesson goes, so it can be left and resumed. Only Retrieve and Master
// answers count towards mastery (all answers are logged, js/learn.js); wrong ones go to My mistakes.

const Guided = (() => {
  const D = StudyData;
  // Every chapter with notes has the lesson, except the pseudo chapters of Practice by topic.
  const available = (c, subjectId) => c >= 1 && !String(subjectId).startsWith("path-");

  const LABELS = {
    diag: "Quick check", refresh: "Quick refresher", think: "Think first", visual: "Look at it", idea: "The idea", resolve: "Your first guess", worked: "Worked example", worked2: "Another example",
    fade: "Complete it", turn: "Your turn", again: "Similar question", slip: "Find the mistake", alt: "Another way", interact: "Try it", practice: "Practice", master: "Show what you know", hook: "Next up", done: "Done",
  };
  const SNAP_V = 2;
  const DAY = 86400000;

  let s = null;
  let el = null;
  let token = 0;

  // ---------- small helpers ----------
  const rnd = (list) => list[Math.floor(Math.random() * list.length)];
  const withOrder = Loop.withOrder;
  const keyOfStep = (k) => String(k).split(":")[0];
  const argOfStep = (k) => String(k).split(":")[1];
  const stepKey = () => keyOfStep(s.steps[s.step]);
  const stepArg = () => argOfStep(s.steps[s.step]);
  const live = () => s && el && el.isConnected;
  const refOf = (it) => (it.from ? { cls: it.from.cls, subject: it.from.subject, chapter: it.from.chapter } : { cls: s.c, subject: s.subj.id, chapter: s.ch.id });
  const clean = (x) => String(x == null ? "" : x).replace(/\*\*/g, "").trim();

  // ---------- building the lesson from chapter content ----------

  // One question per level, easy to hard, skipping any already used. Used for the extra "similar question".
  function spareQuestion(items, used) {
    const taken = new Set(used);
    const pool = items.filter((q) => !taken.has(q.q));
    const easy = pool.filter((q) => (q.level || 1) <= 2);
    return (easy.length ? rnd(easy) : pool.length ? rnd(pool) : null) || null;
  }

  // The notes, grouped by objective: [{ obj, notes }]. Notes that no objective names join the objective of the note before them.
  function groupsOf(objs, notes) {
    if (!objs.length) return notes.length ? [{ obj: null, notes }] : [];
    const groups = objs.map((o) => ({ obj: o, notes: [] }));
    const owner = (n) => groups.findIndex((g) => g.obj.topics.some((tp) => clean(tp) === clean(n.heading)));
    let last = 0;
    notes.forEach((n) => {
      let i = owner(n);
      if (i < 0) i = last;
      groups[i].notes.push(n);
      last = i;
    });
    return groups.filter((g) => g.notes.length);
  }

  // What does not change while a lesson is open (and is rebuilt on resume).
  function skeleton(c, subj, chs, idx, ch) {
    const objs = Objectives.forChapter(c, subj.id, ch);
    return {
      c,
      subj,
      ch,
      chs,
      idx,
      next: chs[idx + 1],
      key: Store.key(c, subj.id, ch.id),
      base: `#/chapter/${c}/${subj.id}/${ch.id}`,
      kind: Loop.kindOf(subj.id),
      objs,
      groups: groupsOf(objs, ch.notes || []),
      met: new Set(),
    };
  }

  // The step list for what the chapter has. Physics runs the experiment before the notes (predict, experiment, explain).
  function planSteps(st) {
    const sim = typeof Sims !== "undefined" && Sims.predictionFor(st.c, st.ch);
    const expFirst = st.kind === "physics" && sim;
    const steps = [];
    if (st.diag) steps.push("diag");
    if (st.first) steps.push("think");
    if (expFirst && st.interact) steps.push("interact");
    if (D.diagramsFor(st.c, st.subj.id, st.ch.id).length) steps.push("visual");
    st.groups.forEach((g, i) => steps.push("idea:" + i));
    if (st.first) steps.push("resolve");
    if (st.example) steps.push("worked");
    if (st.fade) steps.push("fade");
    if (st.turn) steps.push("turn");
    if (st.slip) steps.push("slip");
    if (!expFirst && st.interact) steps.push("interact");
    if (st.practice.length) steps.push("practice");
    if (st.master.items.length) steps.push("master");
    steps.push("hook", "done");
    return steps;
  }

  // The game this chapter plays in the Interact step: one it can make, preferring one not played yet and not Quick-fire
  // (which is only more multiple choice).
  function chooseGame(c, subj, ch, not) {
    if (typeof Games === "undefined") return null;
    const list = Games.availableFor(c, subj, ch).filter((g) => g.type !== not);
    if (!list.length) return null;
    const key = Games.keyFor(c, subj, ch);
    const fresh = list.filter((g) => !Store.gameBest(key, g.type));
    const pool = fresh.length ? fresh : list;
    const other = pool.filter((g) => g.type !== "quickfire");
    return rnd(other.length ? other : pool).type;
  }

  async function build(c, subj, chs, idx, ch) {
    const st = skeleton(c, subj, chs, idx, ch);
    st.before = {};
    Learn.chapterStates(c, subj.id, ch).forEach((r) => (st.before[r.objective.key] = r.state));

    // Diagnose: the earlier work this chapter builds on.
    const { written, before } = Loop.prereqRefs(c, subj, chs, idx, st.objs);
    let items = [];
    try {
      const use = written.length ? await Loop.usableRefs(written) : [];
      items = use.length ? Loop.diagItems(use) : [];
      if (!items.length) items = Loop.diagItems(await Loop.usableRefs(before));
    } catch (e) {
      items = [];
    }
    st.diag = items.length ? { items, i: 0 } : null;

    // Questions.
    const pool = Loop.poolOf(c, subj, ch);
    const easy = pool.all.filter((q) => (q.level || 1) === 1 && !q.gen);
    const sim = typeof Sims !== "undefined" ? Sims.predictionFor(c, ch) : null;
    let first = null;
    if (sim) first = { q: sim.q, options: sim.options, answer: sim.answer, explain: sim.why, keepOrder: true, fromSim: sim.id };
    else {
      const from = easy.length ? easy : pool.saved;
      first = from.length ? rnd(from) : null;
    }
    st.first = first ? withOrder(first) : null;
    st.guess = null;

    // Worked solutions: the chapter's solved examples and the number-changing questions (Gen).
    //   "Complete it": a solution with its last steps hidden (a Gen question with 2+ steps, else a solved example)
    //   "Your turn":   another question, solved independently (hints reveal the steps)
    //   "Find the mistake": a Gen solution with one wrong result swapped in
    const gens = Gen.questions(c, subj.id, ch.id, 6, Date.now());
    const ex = ch.examples || [];
    const fromGen = (g) => ({ pic: g.pic, picAlt: g.picAlt, q: g.q, steps: g.steps, answer: g.options[0], options: g.options, kinds: g.kinds, order: shuffle([0, 1, 2, 3]), picked: null, shown: 0, revealed: false });
    const fromEx = (e) => ({ q: e.q, steps: e.steps, answer: e.answer, options: null, picked: null, shown: 0, revealed: false });
    const fadeGen = gens.find((g) => g.steps.length >= 2);
    let exPool = ex.slice(1);
    let fadeEx = null;
    if (!fadeGen) {
      fadeEx = exPool.find((e) => e.steps.length >= 2) || null;
      exPool = exPool.filter((e) => e !== fadeEx);
    }
    const turnGen = gens.find((g) => g !== fadeGen);
    const turnEx = turnGen ? null : exPool[0] || null;
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
        slip = { pic: g.pic, picAlt: g.picAlt, q: g.q, ...m, tapped: null };
        break;
      }
    }
    st.example = ex[0] || null;
    // One more worked example, for a student who says the first did not feel clear: an unused generated solution or solved example.
    const spareGen = gens.find((g) => g !== fadeGen && g !== turnGen && g.steps.length >= 2);
    const spareEx = exPool.find((e) => e !== (turnEx || null));
    st.example2 = spareGen ? { pic: spareGen.pic, picAlt: spareGen.picAlt, q: spareGen.q, steps: spareGen.steps, answer: spareGen.options[0] } : spareEx ? { q: spareEx.q, steps: spareEx.steps, answer: spareEx.answer } : ex.length > 1 && !fade ? { q: ex[1].q, steps: ex[1].steps, answer: ex[1].answer } : null;
    st.fade = fade;
    st.turn = turn;
    st.slip = slip;

    // Retrieve and Master sets, without overlap where the chapter has enough questions.
    const avoid = new Set([st.first && st.first.q, turn && turn.q, fade && fade.q].filter(Boolean));
    const sets = Loop.drawSets(c, subj, ch, st.objs, pool, avoid);
    st.practice = sets.retrieve.map(withOrder);
    st.p = 0;
    st.master = {
      i: 0,
      items: sets.master.map((m) => ({ obj: m.obj, kind: "check", item: { ...withOrder(m.item), obj: m.obj } })),
      transfer: Object.fromEntries(Object.entries(sets.transfer).map(([id, q]) => [id, q.kind === "mcq" ? { ...withOrder(q), obj: id } : q])),
    };
    const used = [...avoid, ...st.practice.map((q) => q.q), ...st.master.items.map((m) => m.item.q), ...Object.values(sets.transfer).map((q) => q.q)];
    const again = spareQuestion(pool.all, used);
    st.againItem = again ? withOrder(again) : null;
    st.again = null;
    st.againDone = false;

    // The next chapter's taste.
    const next = chs[idx + 1];
    let hook = null;
    if (next) {
      const hp = [...(next.quiz || []), ...D.practiceFor(c, subj.id, next.id).mcq];
      const easyNext = hp.filter((q) => (q.level || 1) === 1);
      hook = hp.length ? rnd(easyNext.length ? easyNext : hp) : null;
    }
    st.hook = hook;

    st.gameType = chooseGame(c, subj, ch);
    st.interact = !!(sim || st.gameType);
    st.simId = sim ? sim.id : null;

    st.wrong = {};
    st.alts = {};
    st.reasons = {};
    st.decisions = [];
    st.logged = {};
    st.masterResult = {};
    st.retrieveWrong = 0;
    st.recorded = false;
    st.offer = null;
    st.steps = planSteps(st);
    st.step = 0;
    st.started = Date.now();
    return st;
  }

  // ---------- saving and resuming ----------
  const SNAP_KEYS = ["steps", "step", "before", "diag", "refreshData", "first", "guess", "example", "example2", "fade", "turn", "slip", "againItem", "again", "againDone", "practice", "p", "master", "hook", "gameType", "interact", "simId", "wrong", "alts", "reasons", "decisions", "logged", "masterResult", "retrieveWrong", "started"];

  function snapshot() {
    const o = { v: SNAP_V, met: [...s.met] };
    SNAP_KEYS.forEach((k) => (o[k] = s[k]));
    return o;
  }
  function save() {
    if (!s || stepKey() === "done") return;
    try {
      Store.loopSave(s.key, JSON.parse(JSON.stringify(snapshot())));
    } catch (e) {
      /* storage full or an odd value: the lesson still works, it just can't be resumed */
    }
  }

  function restore(c, subj, chs, idx, ch) {
    const saved = Store.loopGet(Store.key(c, subj.id, ch.id));
    const snap = saved && saved.snap;
    if (!snap || snap.v !== SNAP_V || !Array.isArray(snap.steps) || Date.now() - saved.at > Loop.config.staleDays * DAY) return null;
    if (snap.step < 0 || snap.step >= snap.steps.length - 1) return null; // finished (or broken)
    const st = Object.assign(skeleton(c, subj, chs, idx, ch), snap);
    st.met = new Set(snap.met || []);
    st.offer = null;
    st.resumed = true;
    // A lesson saved before the notes changed may name a group that is gone.
    if (st.steps.some((k) => keyOfStep(k) === "idea" && Number(argOfStep(k)) >= st.groups.length)) return null;
    return st;
  }

  // ---------- mounting ----------
  function mount(container, { c, subj, chs, idx, ch }) {
    el = container;
    const my = ++token;
    s = null;
    el.onclick = onClick;
    let st = null;
    try {
      st = restore(c, subj, chs, idx, ch);
    } catch (e) {
      Store.loopClear(Store.key(c, subj.id, ch.id));
    }
    if (st) {
      s = st;
      return render();
    }
    el.innerHTML = `<div class="card guided"><p class="g-lead" role="status">${t("Getting your lesson ready…")}</p></div>`;
    build(c, subj, chs, idx, ch)
      .then((made) => {
        if (my !== token || !el.isConnected) return;
        s = made;
        render();
      })
      .catch(() => {
        if (my !== token || !el.isConnected) return;
        el.innerHTML = `<div class="card guided"><p class="g-lead">${t("The lesson could not be built for this chapter.")}</p><a class="btn" href="#/chapter/${c}/${subj.id}/${ch.id}/understand">${t("Back to notes")}</a></div>`;
      });
  }

  // The page is redrawn on every step, so keep keyboard focus: on the same kind of control if it is still there,
  // otherwise on the main button of the new step.
  const focusKey = (n) => n && ["data-act", "data-pick", "data-slip", "data-sure"].map((a) => (n.hasAttribute(a) ? `[${a}="${n.getAttribute(a)}"]` : "")).join("");

  function render() {
    if (!live()) return;
    const was = el.contains(document.activeElement) && !document.activeElement.closest(".lp-game-box") ? focusKey(document.activeElement) : null;
    draw();
    // Feedback is spoken once through the page's live region.
    const fb = el.querySelector(".feedback");
    const said = fb ? fb.textContent : null;
    if (said && said !== s.said) announce(said);
    s.said = said;
    save();
    if (was === null) return;
    const f = (was && [...el.querySelectorAll(was)].find((x) => !x.disabled && !x.classList.contains("locked"))) || el.querySelector('.quiz-nav .btn.primary, [data-act]:not([disabled]), .option:not(.locked)');
    if (f) f.focus({ preventScroll: true });
  }

  function stageStrip() {
    const order = [];
    s.steps.forEach((k) => {
      const st = Loop.STAGE_OF[keyOfStep(k)];
      if (!order.includes(st)) order.push(st);
    });
    const cur = order.indexOf(Loop.STAGE_OF[stepKey()]);
    return `<ol class="lp-stages" aria-label="${t("Stages of this lesson")}">${order
      .map((st, i) => `<li class="${i < cur ? "done" : i === cur ? "now" : ""}" ${i === cur ? 'aria-current="step"' : ""}>${i < cur ? icon("check") + " " : ""}${esc(t(Loop.stageLabel(st, s.subj.id)))}</li>`)
      .join("")}</ol>`;
  }

  function draw() {
    const k = stepKey();
    const resumed =
      s.resumed && k !== "done"
        ? `<div class="lp-resume" role="status"><span>${t("Welcome back. You are continuing where you stopped.")}</span><button class="btn" data-act="restart">${icon("reset")} ${t("Start again")}</button></div>`
        : "";
    el.innerHTML = `
      <div class="card guided">
        ${resumed}
        <div class="quiz-head"><span>${t("Step {i} of {n}", { i: s.step + 1, n: s.steps.length })}</span><span class="quiz-clock">${esc(t(LABELS[k]))}</span></div>
        <span class="bar"><i style="width:${pct(s.step, s.steps.length - 1)}%"></i></span>
        ${k === "done" ? "" : stageStrip()}
        ${VIEWS[k]()}
      </div>`;
  }

  // ---------- learning record (js/learn.js) ----------
  // A topic of the notes counts as met the first time its idea step shows it.
  function met() {
    if (stepKey() !== "idea") return;
    const i = Number(stepArg());
    if (s.met.has(i)) return;
    s.met.add(i);
    for (const n of s.groups[i].notes) Learn.noteTopic("lesson-step", s.c, s.subj.id, s.ch.id, n.heading);
  }

  // An answer given in the lesson. `item` has q, options, answer 0-based, explain; `hints` is how many hints it took.
  // Returns the objective id the answer was filed under (or null), and fires the "wrong answer" rule.
  function log(item, ok, picked, hints = 0, key = null, sure = null) {
    const ev = Learn.answerEvent({ ...item, ref: { key, ...refOf(item), cls: s.c, subject: s.subj.id, chapter: s.ch.id } }, ok, { picked, hints, source: "guided", sure });
    Learn.record([ev]);
    const obj = ev ? ev.obj : null;
    if (!ok && obj) {
      s.wrong[obj] = (s.wrong[obj] || 0) + 1;
      const d = Loop.decide("wrong-answer", s, { obj })[0];
      if (d) {
        s.offer = { obj, reason: d.reason, d };
        Loop.log(s, d, "offered");
      }
    }
    return obj;
  }

  // Inserts a step after the current one (once).
  function insertAfter(key) {
    if (!s.steps.includes(key)) s.steps.splice(s.step + 1, 0, key);
  }

  function go(step) {
    const before = Loop.STAGE_OF[stepKey()];
    if (typeof Games !== "undefined") Games.stop();
    s.step = Math.max(0, Math.min(s.steps.length - 1, step));
    s.offer = null;
    s.resumed = false;
    met();
    render();
    const top = el.getBoundingClientRect().top;
    if (top < 0) window.scrollTo({ top: window.scrollY + top - 80 });
    const now = Loop.STAGE_OF[stepKey()];
    if (now !== before && stepKey() !== "done") announce(t("Stage: {name}", { name: t(Loop.stageLabel(now, s.subj.id)) }));
  }

  // What the button to the next step says.
  const NEXT_LABEL = { think: "Think first", visual: "Look at the picture", idea: "Learn the idea", resolve: "Back to your guess", worked: "See a worked example", worked2: "See another example", fade: "Complete a solution", turn: "Now you try", again: "Try a similar question", slip: "Spot the mistake", alt: "Another way", interact: "Try it yourself", practice: "On to practice", master: "Show what you know", hook: "Next up", done: "Finish" };
  const nextLabel = () => NEXT_LABEL[keyOfStep(s.steps[s.step + 1] || "hook")] || "Next step";

  const nav = (label = nextLabel(), act = "next", back = true) =>
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
        const state = !reveal ? "" : orig === it.answer ? `<span class="sr-only">${t("Correct answer:")} </span>` : orig === it.picked ? `<span class="sr-only">${t("Your answer:")} </span>` : "";
        return `<button class="${cls}" data-pick="${orig}">${state}<span class="letter" aria-hidden="true">${"ABCD"[k]}</span><span>${rich(it.options[orig])}</span></button>`;
      })
      .join("")}</div>`;
  }

  // Why the student is seeing a step (the rule behind it), in their own language.
  const reasonBox = (key) => (s.reasons[key] ? `<div class="lp-reason" role="note"><strong>${t("Why you are seeing this:")}</strong> ${esc(s.reasons[key])}</div>` : "");

  // After a wrong answer: the right answer's explanation was shown; this adds the matching mistake or the tailored line (js/learn.js).
  const extra = (it, picked) => Learn.feedbackHTML({ ...it, ref: { ...refOf(it) } }, picked);

  // "This idea has been missed more than once" (rule repeat-error): a button to see it another way.
  const offerHTML = () => (s.offer ? `<div class="lp-offer"><p>${esc(s.offer.reason)}</p><button class="btn" data-act="alt" data-obj="${esc(s.offer.obj)}">${icon("target")} ${t("Show me another way")}</button></div>` : "");

  // ---------- the steps ----------
  function diag() {
    const dg = s.diag;
    const n = dg.items.length;
    const it = dg.items[dg.i];
    const picked = it.picked !== null;
    const ok = it.picked === it.answer;
    const last = dg.i === n - 1;
    let foot = "";
    if (picked)
      foot = `<div class="feedback ${ok ? "good" : "neutral"}"><div class="h">${ok ? t("Right, that is what we hoped.") : t("Not this one, and that is useful to know.")}</div>
          ${ok ? "" : `<div>${t("Correct answer:")} <strong>${rich(it.options[it.answer])}</strong></div>`}<div>${rich(it.explain)}</div></div>
        ${nav(last ? "Continue" : "Next question", last ? "next" : "p-next", false)}`;
    return `
      <p class="g-lead">${t("A few quick questions on earlier work this chapter builds on. This is not graded. It only helps us decide where to start.")}</p>
      <div class="row" style="justify-content:space-between"><span class="eyebrow g-eyebrow">${t("Question {i} of {n}", { i: dg.i + 1, n })}</span><span class="pill">${esc(it.from.title)}</span></div>
      ${picHTML(it)}<div class="quiz-q">${rich(it.q)}</div>
      ${options(it, { locked: picked, reveal: picked })}
      ${picked ? foot : `<button class="btn block mt" data-act="skip-diag">${t("Skip the quick check")}</button>`}`;
  }

  function refresh() {
    const r = s.refreshData;
    if (!r) return `<p class="g-lead">${t("Nothing to refresh.")}</p>${nav("Continue")}`;
    return `
      ${reasonBox("refresh")}
      <article class="note g-note"><div class="eyebrow g-eyebrow">${t("Earlier work: {title}", { title: esc(r.title) })}</div>
        ${r.notes.map((n) => `<h3>${esc(n.heading)}</h3><ul>${n.points.map((p) => `<li>${rich(p)}</li>`).join("")}</ul>`).join("")}</article>
      <p class="small muted" style="margin-top:12px"><a href="#/chapter/${r.cls}/${r.subject}/${r.chapter}/understand/lesson">${t("Open the whole lesson for that chapter")}</a> · <a href="#/chapter/${r.cls}/${r.subject}/${r.chapter}/understand">${t("Read its notes")}</a></p>
      ${nav("Continue to this chapter")}`;
  }

  function think() {
    const guessed = s.guess !== null;
    const it = { ...s.first, picked: guessed && s.guess !== "unsure" ? s.guess : null };
    const lead = s.first.fromSim ? t("Before the lesson, make a prediction. A guess is fine: it is not counted anywhere.") : t("Before the lesson, have a go at this. A guess is fine: it is not counted anywhere.");
    return `
      <p class="g-lead">${lead}</p>
      ${picHTML(it)}<div class="quiz-q">${rich(it.q)}</div>
      ${options(it, { locked: guessed, reveal: false })}
      ${guessed
        ? `<div class="feedback neutral"><div class="h">${s.guess === "unsure" ? t("No problem.") : t("Noted.")}</div>${t("Let's learn the idea first. We'll come back to this question.")}</div>${nav(s.steps[s.step + 1] === "interact" ? "Try it yourself" : "Learn the idea")}`
        : `<button class="btn block mt" data-act="unsure">${t("I'm not sure yet")}</button>`}`;
  }

  function visual() {
    const figs = D.diagramsFor(s.c, s.subj.id, s.ch.id);
    return `
      <p class="g-lead">${t("Look at the picture first. What do you notice? Which parts do you already know?")}</p>
      ${figs.map((d) => `<figure class="card diagram"><h3>${esc(d.title)}</h3><div class="diagram-art" role="img" aria-label="${esc(d.title)}">${d.svg}</div>${d.caption ? `<figcaption>${rich(d.caption)}</figcaption>` : ""}</figure>`).join("")}
      ${nav()}`;
  }

  function idea() {
    const i = Number(stepArg());
    const g = s.groups[i];
    const last = i === s.groups.length - 1;
    const formulas =
      last && s.ch.formulas && s.ch.formulas.length
        ? `<section class="formula-box card" style="margin-top:14px"><h3>${icon("formula")} ${t("Keep these handy")}</h3><ul>${s.ch.formulas.map((f) => `<li>${rich(f)}</li>`).join("")}</ul></section>`
        : "";
    // Rule: an objective already "Mastered for now" can skip its notes.
    let skip = "";
    if (g.obj) {
      const d = Loop.decide("explain", s, { state: s.before[g.obj.key], obj: g.obj.id })[0];
      if (d) {
        if (!s.logged["skip:" + g.obj.id]) {
          s.logged["skip:" + g.obj.id] = true;
          Loop.log(s, d, "offered");
        }
        skip = `<div class="lp-offer"><p>${esc(d.reason)}</p><button class="btn" data-act="skip-idea" data-obj="${esc(g.obj.id)}">${icon("arrow")} ${t("Skip this idea")}</button></div>`;
      }
    }
    return `
      <div class="eyebrow g-eyebrow">${t("Idea {i} of {n}", { i: i + 1, n: s.groups.length })}</div>
      ${g.obj ? `<p class="lp-obj">${esc(g.obj.text)}</p>` : ""}
      ${skip}
      ${g.notes.map((n) => `<article class="note g-note"><h3>${esc(n.heading)}</h3><ul>${n.points.map((p) => `<li>${rich(p)}</li>`).join("")}</ul></article>`).join("")}
      ${formulas}
      ${nav()}`;
  }

  function resolve() {
    const it = { ...s.first, picked: s.guess === "unsure" ? null : s.guess };
    const right = it.picked === it.answer;
    const head = right ? stripEmoji(t("Your first guess was right 🎉")) : s.guess === "unsure" ? t("Here is the answer") : t("Not that one, and now you can see why");
    return `
      <p class="g-lead">${t("The question you saw at the start, with what you now know.")}</p>
      ${picHTML(it)}<div class="quiz-q">${rich(it.q)}</div>
      ${options(it, { locked: true, reveal: true })}
      <div class="feedback ${right ? "good" : "neutral"}"><div class="h">${head}</div>${rich(it.explain)}</div>
      ${nav()}`;
  }

  function workedView(ex, key) {
    return `
      ${reasonBox(key)}
      <p class="g-lead">${t("Read each step and ask yourself <strong>why</strong> it works before moving to the next.")}</p>
      <article class="example">${picHTML(ex)}<p class="q">${rich(ex.q)}</p>
        <ol class="steps g-steps">${ex.steps.map((st) => `<li>${rich(st)}</li>`).join("")}</ol>
        <div class="answer">${rich(ex.answer)}</div></article>
      <div class="quiz-nav">${s.step > 0 ? `<button class="btn" data-act="back">${icon("back")} ${t("Back")}</button>` : ""}
        ${key === "worked" && s.example2 && !s.steps.includes("worked2") ? `<button class="btn" data-act="worked-another">${t("Show me another example")}</button>` : ""}
        <button class="btn primary" data-act="next">${t(key === "worked" ? "I followed it" : "I followed it too")} ${icon("arrow")}</button></div>`;
  }
  const worked = () => workedView(s.example, "worked");
  const worked2 = () => workedView(s.example2, "worked2");

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
          ok ? stripEmoji(t("Correct! 🎉")) : ok === false ? t("Not quite") : t("Here are the missing steps")
        }</div>${t("The highlighted steps are the ones you completed. Compare them with your own working.")}${ok === false ? extra({ ...f, answer: 0, explain: "" }, f.picked) : ""}</div>
        ${offerHTML()}
        ${nav()}`;
    } else {
      foot = `<div class="quiz-nav"><button class="btn ${f.options ? "" : "primary"}" data-act="fade-show">${f.options ? t("Show the missing steps") : t("Check my working")}</button></div>`;
    }
    return `
      ${reasonBox("fade")}
      <p class="g-lead">${t("Now the last {n} {n:step is|steps are} yours. Work them out in your head or notebook, then check.", { n: n - keep })}</p>
      ${picHTML(f)}<div class="quiz-q">${rich(f.q)}</div>
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
      ? `<div class="feedback ${right ? "good" : "bad"}"><div class="h">${right ? stripEmoji(t("Found it 🎉")) : t("Not that one. The slip is in step {n}.", { n: sl.bad + 1 })}</div>
          <div>${t(why)} ${t("Step {n} should read:", { n: sl.bad + 1 })} <strong>${rich(sl.orig)}</strong></div>
          <div class="mt-s">${t("Tip: after each step, ask if the number still makes sense.")}</div></div>
        ${nav(undefined, "next", false)}`
      : "";
    return `
      <p class="g-lead">${t("A classmate solved this, but one step has a slip. Tap the step you think is wrong. This is not scored.")}</p>
      ${picHTML(sl)}<div class="quiz-q">${rich(sl.q)}</div>
      <ol class="steps g-steps g-slips mt">${items}</ol>
      ${fb}`;
  }

  function turn() {
    const tn = s.turn;
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
          ok ? stripEmoji(t("Correct! 🎉")) : ok === false ? t("Not quite") : t("Here is the full solution")
        }</div>${tn.shown ? t("You used {n} {n:hint|hints}.", { n: tn.shown }) + " " : ok ? t("No hints needed.") + " " : ""}${t("Compare the steps with the worked example.")}${ok === false ? extra({ ...tn, answer: 0, explain: "" }, tn.picked) : ""}</div>
        ${s.reasons.again && s.steps[s.step + 1] === "again" ? reasonBox("again") : ""}
        ${offerHTML()}
        ${nav()}`;
    } else {
      foot = `<div class="quiz-nav">
        <button class="btn" data-act="hint" ${hintsLeft ? "" : "disabled"}>${icon("notes")} ${t("Show a hint")}${hintsLeft ? ` ${t("({n} left)", { n: hintsLeft })}` : ""}</button>
        ${tn.options ? "" : `<button class="btn primary" data-act="show-turn">${t("Show the solution")}</button>`}
      </div>`;
    }
    return `
      <p class="g-lead">${t("Same idea, new numbers. Try it in your head or notebook first. Hints reveal the steps one at a time.")}</p>
      ${picHTML(tn)}<div class="quiz-q">${rich(tn.q)}</div>
      ${tn.options ? options({ ...tn, answer: 0 }, { locked: done, reveal: done }) : ""}
      <ol class="steps g-steps mt">${steps}</ol>
      ${foot}`;
  }

  // A similar question with no hints (rule hints-many).
  function again() {
    const it = s.again;
    const picked = it.picked !== null;
    const ok = it.picked === it.answer;
    return `
      ${reasonBox("again")}
      <p class="g-lead">${t("This one has no hints. Take your time, and try it in your head or notebook first.")}</p>
      ${picHTML(it)}<div class="quiz-q">${rich(it.q)}</div>
      ${options(it, { locked: picked, reveal: picked })}
      ${picked
        ? `<div class="feedback ${ok ? "good" : "bad"}"><div class="h">${ok ? stripEmoji(t("Correct, and no hints needed 🎉")) : t("Not quite")}</div>
            ${ok ? "" : `<div>${t("Correct answer:")} <strong>${rich(it.options[it.answer])}</strong></div>`}<div>${rich(it.explain)}</div>${ok ? "" : extra(it, it.picked)}</div>
          ${offerHTML()}${nav()}`
        : ""}`;
  }

  // Another way to see the idea (rule repeat-error): the chapter's diagram, its experiment, a game, or the key terms.
  function alt() {
    const id = stepArg();
    const o = s.objs.find((x) => x.id === id);
    const figs = D.diagramsFor(s.c, s.subj.id, s.ch.id);
    let body;
    if (figs.length) body = figs.map((d) => `<figure class="card diagram"><h3>${esc(d.title)}</h3><div class="diagram-art" role="img" aria-label="${esc(d.title)}">${d.svg}</div>${d.caption ? `<figcaption>${rich(d.caption)}</figcaption>` : ""}</figure>`).join("");
    else if (s.simId && typeof Sims !== "undefined") body = Sims.cards(s.c, s.subj, s.ch);
    else if (s.gameType) body = gameBox();
    else body = `<dl class="terms card">${(s.ch.terms || []).slice(0, 8).map((x) => `<div><dt>${rich(x.term)}</dt><dd>${rich(x.meaning)}</dd></div>`).join("")}</dl>`;
    return `
      ${reasonBox("alt:" + id)}
      ${o ? `<p class="lp-obj">${esc(o.text)}</p>` : ""}
      <p class="g-lead">${figs.length ? t("Look at the picture and find the idea in it. Then go back to your questions.") : s.simId ? t("Try the experiment and watch what changes. Then go back to your questions.") : s.gameType ? t("Play a short game with the idea. Then go back to your questions.") : t("Read the key words and their meanings once more. Then go back to your questions.")}</p>
      ${body}
      ${nav("Back to my questions")}`;
  }

  // ---------- Interact: the experiment or a game ----------
  function gameBox() {
    const g = Games.get(s.gameType);
    if (!g) return "";
    return `<section class="card lp-game" style="--c:${s.subj.color}">
      <div class="lp-game-head"><span class="game-ico">${icon(g.icon)}</span><div><strong>${t(g.title)}</strong><div class="small muted">${t(g.blurb)}</div></div></div>
      <div class="lp-game-box" data-game-box></div>
      <div class="lp-game-actions"><button class="btn primary" data-act="play-game">${icon("play")} ${t("Play")}</button>
        ${Games.availableFor(s.c, s.subj, s.ch).length > 1 ? `<button class="btn" data-act="game-other">${t("A different game")}</button>` : ""}</div>
    </section>`;
  }

  function interact() {
    const body = s.simId && typeof Sims !== "undefined" ? Sims.cards(s.c, s.subj, s.ch) : s.gameType ? gameBox() : "";
    const lead = s.simId
      ? t("Now try it yourself: predict, change a variable, then see whether the result follows the rule.")
      : t("Now use the idea in a short game. It is optional: you can play, or carry on.");
    return `<p class="g-lead">${lead}</p>${body}${nav()}`;
  }

  function playGame() {
    const box = el.querySelector("[data-game-box]");
    if (!box || !s.gameType) return;
    const def = Games.get(s.gameType);
    const ctx = { key: Games.keyFor(s.c, s.subj, s.ch), cls: s.c, subj: s.subj, ch: s.ch, title: s.ch.title, back: `${s.base}/understand/lesson`, backLabel: "Back to the lesson" };
    const go2 = () => {
      if (!def.load || def.ready()) return Games.run(box, ctx, s.gameType);
      box.innerHTML = `<p class="small muted">${t("Loading…")}</p>`;
      def.load().then((ok) => {
        if (!box.isConnected) return;
        if (ok) return Games.run(box, ctx, s.gameType);
        box.innerHTML = `<p class="small muted">${t("This game's words couldn't be loaded. Check your internet connection and try again.")}</p>`;
      });
    };
    go2();
    el.querySelector('[data-act="play-game"]').hidden = true;
  }

  // ---------- Retrieve ----------
  function practice() {
    const it = s.practice[s.p];
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
      const head = ok ? (it.sure ? stripEmoji(t("Correct, and you knew it 🎉")) : t("Correct! Here's why, so it sticks")) : it.sure ? t("Not this time. You were sure, so read this carefully") : t("Not quite, and you sensed it");
      foot = `<div class="feedback ${ok ? "good" : "bad"}">
          <div class="h">${head}</div>
          ${ok ? "" : `<div>${t("Correct answer:")} <strong>${rich(it.options[it.answer])}</strong></div>`}
          ${ok && it.sure ? "" : `<div>${rich(it.explain)}</div>`}
          ${ok ? "" : extra(it, it.picked)}
          ${!ok && it.sure ? `<div class="mt-s"><a href="${s.base}/understand">${t("Read the notes again")} ${icon("arrow")}</a></div>` : ""}
        </div>
        ${offerHTML()}
        ${s.p < n - 1 ? nav("Next question", "p-next", false) : nav(undefined, "next", false)}`;
    }
    const level = t(["Easy", "Medium", "Hard"][Math.min((it.level || 1) - 1, 2)]);
    return `
      <p class="g-lead">${t("A few questions mixed from across the chapter. No notes this time. After each answer, say how sure you were.")}</p>
      <div class="row" style="justify-content:space-between"><span class="eyebrow g-eyebrow">${t("Question {i} of {n}", { i: s.p + 1, n })}</span><span class="pill accent">${level}</span></div>
      ${picHTML(it)}<div class="quiz-q">${rich(it.q)}</div>
      ${options(it, { locked: picked, reveal: revealed })}
      ${foot}`;
  }

  // ---------- Master ----------
  function master() {
    const m = s.master;
    const mi = m.items[m.i];
    const n = m.items.length;
    const o = s.objs.find((x) => x.id === mi.obj);
    const it = mi.item;
    const written = mi.kind === "written";
    const picked = !written && it.picked !== null;
    const ok = picked && it.picked === it.answer;
    const last = m.i === n - 1;
    let body;
    if (written) {
      body = `${picHTML(it)}<div class="quiz-q">${rich(it.q)}</div>
        <p class="small muted">${t("Answer in your notebook, then compare. This one is not scored.")}</p>
        ${mi.shown ? `<div class="feedback neutral"><div class="h">${t("A model answer")}</div>${rich(it.a)}</div>` : `<button class="btn block mt" data-act="show-written">${t("Show a model answer")}</button>`}
        ${mi.shown ? (last ? nav(undefined, "next", false) : nav("Next skill", "p-next", false)) : ""}`;
    } else {
      body = `${picHTML(it)}<div class="quiz-q">${rich(it.q)}</div>
        ${options(it, { locked: picked, reveal: picked })}
        ${picked
          ? `<div class="feedback ${ok ? "good" : "bad"}"><div class="h">${ok ? stripEmoji(t("Correct, with no help 🎉")) : t("Not quite")}</div>
              ${ok ? "" : `<div>${t("Correct answer:")} <strong>${rich(it.options[it.answer])}</strong></div>`}<div>${rich(it.explain)}</div>${ok ? "" : extra(it, it.picked)}</div>
            ${offerHTML()}
            ${last ? nav(undefined, "next", false) : nav("Next skill", "p-next", false)}`
          : ""}`;
    }
    return `
      <p class="g-lead">${t("An independent check: no hints and no notes. It shows what you can do on your own.")}</p>
      <div class="row" style="justify-content:space-between"><span class="eyebrow g-eyebrow">${t("Skill {i} of {n}", { i: m.i + 1, n })}</span>${mi.kind !== "check" ? `<span class="pill accent">${t("New situation")}</span>` : ""}</div>
      ${o ? `<p class="lp-obj">${esc(o.text)}</p>` : ""}
      ${mi.reason ? `<div class="lp-reason" role="note"><strong>${t("Why you are seeing this:")}</strong> ${esc(mi.reason)}</div>` : ""}
      ${body}`;
  }

  function hook() {
    const next = s.next;
    const h = s.hook;
    if (!next) return `<p class="g-lead">${t("This is the last chapter of {subject} for Class {n}. Well done for getting here.", { subject: esc(s.subj.name), n: s.c })}</p>${nav("Finish", "finish")}`;
    return `
      <p class="g-lead">${t("The next chapter is <strong>{title}</strong>. Here is a taste of it. Think about it; the answer is there when you want it.", { title: esc(next.title) })}</p>
      ${h
        ? `${picHTML(h)}<div class="quiz-q">${rich(h.q)}</div>
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
    const firstRight = s.first && s.guess === s.first.answer;
    const notes = [];
    if (s.first && s.guess !== null) notes.push(firstRight ? t("Your first guess, before the lesson, was already right.") : t("Your first guess was off, and the lesson sorted it out."));
    if (sureWrong) notes.push(t("{n} {n:answer|answers} where you were sure but wrong: those are the ideas to re-read.", { n: sureWrong }));
    if (unsureRight) notes.push(unsureRight > 1 ? t("{n} answers right but unsure: a few more questions will make them stick.", { n: unsureRight }) : t("1 answer right but unsure: a few more questions will make it stick."));
    if (ps.length && score === ps.length && !unsureRight) notes.push(t("Every practice question right and sure. Try the full quiz next."));
    const mistakes = Store.mistakesFor(s.c).length;
    const p = pct(score, ps.length);
    const ring = p >= 75 ? "var(--good)" : p >= 50 ? "var(--gold)" : "var(--bad)";

    // Skills before and after, and what to do next.
    const rows = Learn.chapterStates(s.c, s.subj.id, s.ch).map((r) => ({ objective: r.objective, before: s.before[r.objective.key] || "not-started", after: r.state, master: s.masterResult[r.objective.id] }));
    const rec = Loop.recommend(s, rows);
    const skills = rows.length
      ? `<h2 class="block-title">${t("Your skills")}</h2>
        <div class="card obj-panel"><ul class="obj-list">${rows
          .map(
            (r) => `<li><span class="obj-text">${esc(r.objective.text)}</span>
              <span class="lp-ba">${r.before === r.after ? `${Learn.stateChip(r.after)} <span class="small muted">${t("No change yet")}</span>` : `<span class="sr-only">${t("Before:")} </span>${Learn.stateChip(r.before)} <span aria-hidden="true">→</span><span class="sr-only"> ${t("After:")} </span> ${Learn.stateChip(r.after)}`}</span>
              ${r.master === true ? `<span class="small muted">${t("Independent check: right.")}</span>` : r.master === false ? `<span class="small muted">${t("Independent check: not yet.")}</span>` : ""}</li>`
          )
          .join("")}</ul></div>`
      : "";
    // Plain-language summary of the practice answers (the next step is the card below).
    const evs = ps.map((x) => Learn.answerEvent({ ...x, ref: { key: `${s.key}/${questionId(x)}`, ...refOf(x), cls: s.c, subject: s.subj.id, chapter: s.ch.id } }, x.picked === x.answer, { picked: x.picked, source: "guided", sure: x.sure })).filter(Boolean);
    const gained = rows.filter((r) => Mastery.RANK[r.after] > Mastery.RANK[r.before]).map((r) => ({ key: r.objective.key, improved: true }));
    const summary = Learn.summaryHTML(evs, gained, { noNext: true });
    const route = [...new Set((s.decisions || []).map((d) => d.reason))];
    const why = route.length ? `<details class="card lp-route"><summary>${t("How this lesson was chosen for you")}</summary><ul>${route.map((r) => `<li>${esc(r)}</li>`).join("")}</ul></details>` : "";
    return `
      <div class="result-top" style="padding:8px 0 0">
        <div class="ring" style="--p:${p};--ring:${ring}"><div><span class="v">${score}/${ps.length}</span><span class="l">${t("practice")}</span></div></div>
        <div class="result-msg" tabindex="-1">${t("Lesson complete")}</div>
      </div>
      <ul class="g-notes">${notes.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>
      ${summary}
      ${skills}
      <section class="card lp-next" aria-labelledby="lp-next-h"><h2 id="lp-next-h" class="block-title" style="margin:0 0 6px">${t("Your next step")}</h2>
        <p><strong>${esc(rec.text)}</strong></p><p class="small muted">${esc(rec.why)}</p>
        <a class="btn primary" href="${rec.href}">${icon("arrow")} ${esc(rec.label)}</a></section>
      ${why}
      ${teachHTML(s.key, s.ch, false)}
      <div class="result-actions" style="margin-top:16px">
        ${score < ps.length && mistakes && rec.id !== "mistakes" ? `<a class="btn" href="#/revise/mistakes">${icon("target")} ${t("Practise my mistakes")}</a>` : ""}
        ${rec.id !== "quiz" ? `<a class="btn" href="${s.base}/master">${icon("quiz")} ${t("Take the chapter quiz")}</a>` : ""}
        ${s.next && rec.id !== "next" ? `<a class="btn" href="#/chapter/${s.c}/${s.subj.id}/${s.next.id}">${t("Next chapter")} ${icon("arrow")}</a>` : ""}
        <button class="btn" data-act="again">${icon("reset")} ${t("Do it again")}</button>
      </div>`;
  }

  const VIEWS = { diag, refresh, think, visual, idea, resolve, worked, worked2, fade, turn, again, slip, alt, interact, practice, master, hook, done };

  // ---------- "find the mistake": one wrong result in a correct step list ----------
  // Takes the worked steps of a generated question and changes the last number of one step that ends "= number"
  // (optional unit): a sign error, a slip of one, or a misplaced zero. Only numbers are changed, so the original
  // step is always known and the wrong one is always provably different. Returns null if no step qualifies.
  const STEP_END = /^(.*=\s*(?:NZ\$|A\$|C\$|[₹$£€])?)(−|-)?(\d[\d,]*(?:\.\d+)?)(\s?[^\d=]{0,14})$/s;
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

  // ---------- teach-back: explain the chapter in your own words, then tick the key points you covered ----------
  // Used at the end of the lesson and on the chapter's Notes tab. The text and the ticks are saved per
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
    // Ticking a key point that is a notes topic is evidence the student met that idea (never graded).
    if (box.checked) {
      const k = Store.parseKey(box.dataset.tkey);
      const ch = (D.chapters(k.cls, k.subject) || []).find((x) => x.id === k.chapterId);
      const n = ch && ch.notes ? ch.notes[Number(box.dataset.teachTick)] : null;
      if (n) Learn.noteTopic("teach", k.cls, k.subject, k.chapterId, n.heading);
    }
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
    Store.loopClear(s.key);
  }

  // ---------- events ----------
  // What happens when the student leaves a step with "next": the rules that look at it.
  function leaving() {
    const k = stepKey();
    if (k === "diag") {
      const d = Loop.decide("diag-done", s)[0];
      if (d) {
        s.refreshData = Loop.refresher(d.what.data);
        if (s.refreshData) {
          s.reasons.refresh = d.reason;
          insertAfter("refresh");
          Loop.log(s, d, "applied");
        }
      }
    } else if (k === "worked") {
      const d = Loop.decide("worked-followed", s)[0];
      if (d && !s.logged.followed) {
        s.logged.followed = true;
        s.reasons.fade = d.reason;
        Loop.log(s, d, "applied");
      }
    }
  }

  function onClick(e) {
    if (e.target.closest(".lp-game-box")) {
      // A link inside the game that points back at the lesson ("Quit game", "Back to the lesson"): leave the game, stay here.
      const a = e.target.closest("a[href]");
      if (a && a.getAttribute("href") === `${s.base}/understand/lesson`) {
        e.preventDefault();
        Games.stop();
        render();
      }
      return;
    }
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
      log(it, it.picked === it.answer, it.picked, 0, qk, it.sure);
      if (it.picked === it.answer) Store.clearMistake(qk);
      else Store.addMistake(qk);
      return render();
    }
    const act = b.dataset.act;
    if (act === "next") {
      leaving();
      go(s.step + 1);
    } else if (act === "back") go(s.step - 1);
    else if (act === "unsure") {
      if (s.guess === null) s.guess = "unsure";
      render();
    } else if (act === "skip-diag") {
      go(s.step + 1); // nothing is recorded for questions that were skipped
    } else if (act === "hint") {
      if (s.turn && s.turn.shown < s.turn.steps.length - 1) {
        s.turn.shown++;
        const o = Objectives.forQuestion(s.c, s.subj.id, s.ch, { q: s.turn.q, explain: s.turn.steps.join(" "), options: s.turn.options, answer: 0 });
        if (o) Learn.note("hint", s.c, s.subj.id, s.ch.id, o.id, { hints: s.turn.shown });
      }
      render();
    } else if (act === "fade-show") {
      if (s.fade) s.fade.revealed = true;
      render();
    } else if (act === "show-turn") {
      if (s.turn) s.turn.shown = s.turn.steps.length;
      render();
    } else if (act === "worked-another") {
      const d = Loop.decide("worked-another", s)[0];
      if (d) {
        s.reasons.worked2 = d.reason;
        insertAfter("worked2");
        Loop.log(s, d, "accepted");
        go(s.step + 1);
      }
    } else if (act === "skip-idea") {
      const d = Loop.decide("explain", s, { state: "mastered", obj: b.dataset.obj })[0];
      if (d) Loop.log(s, d, "accepted");
      go(s.step + 1);
    } else if (act === "alt") {
      const d = s.offer && s.offer.d;
      const obj = b.dataset.obj;
      s.alts[obj] = true;
      s.reasons["alt:" + obj] = s.offer ? s.offer.reason : "";
      if (d) Loop.log(s, d, "accepted");
      // The other way to see it comes before this step; "Back to my questions" returns to the question where it was.
      if (!s.steps.includes("alt:" + obj)) s.steps.splice(s.step, 0, "alt:" + obj);
      go(s.step);
    } else if (act === "play-game") playGame();
    else if (act === "game-other") {
      Games.stop();
      s.gameType = chooseGame(s.c, s.subj, s.ch, s.gameType) || s.gameType;
      render();
    } else if (act === "show-written") {
      s.master.items[s.master.i].shown = true;
      render();
    } else if (act === "p-next") {
      if (stepKey() === "diag") s.diag.i = Math.min(s.diag.items.length - 1, s.diag.i + 1);
      else if (stepKey() === "master") s.master.i = Math.min(s.master.items.length - 1, s.master.i + 1);
      else s.p = Math.min(s.practice.length - 1, s.p + 1);
      s.offer = null;
      render();
      const top = el.getBoundingClientRect().top;
      if (top < 0) window.scrollTo({ top: window.scrollY + top - 80 });
    } else if (act === "finish") go(s.steps.length - 1);
    else if (act === "restart" || act === "again") {
      const { c, subj, ch, chs, idx } = s;
      Store.loopClear(s.key);
      mount(el, { c, subj, chs, idx, ch });
    }
  }

  function pick(orig) {
    const k = stepKey();
    if (k === "think") {
      if (s.guess !== null) return;
      s.guess = orig;
    } else if (k === "diag") {
      const it = s.diag.items[s.diag.i];
      if (!it || it.picked !== null) return;
      it.picked = orig;
      // Not graded and not counted towards any skill: kept as a plain record of how the check went.
      Learn.record([{ type: "diagnostic", cls: it.from.cls, subject: it.from.subject, chapter: it.from.chapter, ok: orig === it.answer, for: s.ch.id, source: "guided" }]);
    } else if (k === "fade") {
      const f = s.fade;
      if (!f || !f.options || f.revealed) return;
      f.picked = orig;
      f.revealed = true;
      log({ q: f.q, options: f.options, answer: 0, explain: f.steps.join(" "), kinds: f.kinds }, orig === 0, orig);
    } else if (k === "turn") {
      const tn = s.turn;
      if (!tn || !tn.options || tn.picked !== null) return;
      tn.picked = orig;
      log({ q: tn.q, options: tn.options, answer: 0, explain: tn.steps.join(" "), kinds: tn.kinds }, orig === 0, orig, tn.shown);
      // Rule: right, but only with several hints -> a similar question with none.
      const d = Loop.decide("turn-done", s, { ok: orig === 0, hints: tn.shown })[0];
      if (d) {
        s.reasons.again = d.reason;
        s.again = s.againItem;
        s.againDone = true;
        insertAfter("again");
        Loop.log(s, d, "applied");
      }
    } else if (k === "again") {
      const it = s.again;
      if (!it || it.picked !== null) return;
      it.picked = orig;
      log(it, orig === it.answer, orig, 0);
    } else if (k === "practice") {
      const it = s.practice[s.p];
      if (!it || it.picked !== null) return;
      it.picked = orig;
      if (orig !== it.answer) s.retrieveWrong++; // the answer is logged once the learner says how sure they were (data-sure)
    } else if (k === "master") {
      const m = s.master.items[s.master.i];
      if (!m || m.kind === "written" || m.item.picked !== null) return;
      const it = m.item;
      it.picked = orig;
      const ok = orig === it.answer;
      log(it, ok, orig, 0);
      if (m.kind === "check") s.masterResult[m.obj] = ok;
      // Rule: a strong independent check brings a question that uses the idea in a new situation.
      const d = Loop.decide("master-answer", s, { ok, obj: m.obj })[0];
      if (d) {
        const tq = s.master.transfer[m.obj];
        s.master.items.splice(s.master.i + 1, 0, { obj: m.obj, kind: tq.kind === "written" ? "written" : "transfer", item: tq, reason: d.reason });
        Loop.log(s, d, "applied");
      }
    } else return;
    render();
  }

  // Card shown on the Notes tab.
  function card(c, subj, ch, base) {
    if (!available(c, subj.id, ch.id)) return "";
    const key = Store.key(c, subj.id, ch.id);
    const g = Store.guided(key);
    const open = Store.loopGet(key);
    const sub = open
      ? t("You stopped part-way. Pick up where you left off.")
      : g
      ? t("Done {when} · {score}/{total} in practice. Do it again for a different set of questions.", { when: relDate(g.at).toLowerCase(), score: g.score, total: g.total })
      : t("Learn this chapter step by step: a quick check, a question first, the ideas one skill at a time, practice and an independent check. About 10 minutes.");
    return `<a class="card row guided-card no-print" href="${base}/understand/lesson" style="gap:12px">
      <span class="ti">${icon("play")}</span>
      <span class="grow"><strong>${t("Guided lesson")}${g || open ? "" : ` · ${t("New")}`}</strong><span class="small muted" style="display:block">${sub}</span></span>
      <span class="btn primary guided-go">${open ? t("Resume lesson") : g ? t("Do it again") : t("Start lesson")} ${icon("arrow")}</span></a>`;
  }

  // Teach-back box for the Notes tab.
  const teachCard = (c, subj, ch) => teachHTML(Store.key(c, subj.id, ch.id), ch, false);

  return { available, mount, card, teachCard };
})();
