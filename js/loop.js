// The chapter learning loop: what the lesson is made of, and the rules that decide which route a student takes.
// The screens and state of the lesson itself are in js/guided.js; this file holds the parts that are about content and policy.
//
//   Stages (spec 5.1)   Diagnose -> Discover -> Visualise -> Explain -> Interact -> Retrieve -> Master
//   Routes (spec 5.3)   one default route, changed by the RULES below (spec 6.3). Every rule is one entry with a plain-
//                       language reason that is shown to the student, and every decision is saved as a "decision" event.
//   Feedback (spec 6.2) in js/learn.js (Learn.feedbackHTML)
//
// Nothing here is scored by itself: it chooses and orders questions, and says why. All thresholds are in `config`.

const Loop = (() => {
  const D = StudyData;

  const config = {
    diag: { min: 3, max: 6, weak: 0.6 }, // entry check: 3 to 6 questions; "weak" = share right below this
    maxPrereqChapters: 2, // earlier chapters the entry check draws from
    refresherTopics: 2, // notes topics shown in an inline refresher
    hintsMany: 2, // hints used on "Your turn" (answer right) that bring a similar question with none
    repeatWrong: 2, // wrong answers on one objective in a lesson that bring another way of seeing it
    retrieve: { min: 3, max: 4 }, // mixed recall questions
    transferLevel: 3, // a question of this level (or a case / assertion-reason question) is a transfer question
    staleDays: 30, // an unfinished lesson older than this starts again
  };

  // ---------- stages ----------
  const STAGES = ["diagnose", "discover", "visualise", "explain", "interact", "retrieve", "master"];
  const STAGE_LABEL = { diagnose: "Diagnose", discover: "Discover", visualise: "Visualise", explain: "Explain", interact: "Interact", retrieve: "Retrieve", master: "Master" };
  // Step key -> stage. (The steps themselves are described in js/guided.js.)
  const STAGE_OF = { diag: "diagnose", refresh: "diagnose", think: "discover", visual: "visualise", idea: "explain", resolve: "explain", worked: "explain", worked2: "explain", fade: "explain", turn: "explain", again: "explain", slip: "explain", alt: "explain", interact: "interact", practice: "retrieve", master: "master", hook: "master", done: "master" };

  // Subject kinds (spec 5.2): only the order and the wording of stages differ, never the content.
  function kindOf(subjectId) {
    if (/^(english|hindi|punjabi)/.test(subjectId)) return "language";
    if (subjectId === "physics") return "physics";
    if (subjectId === "chemistry") return "chemistry";
    if (/^maths/.test(subjectId)) return "maths";
    return "other";
  }
  const VARIANT_LABEL = {
    language: { explain: "Read and notice", interact: "Construct", discover: "Listen and read" },
    physics: { discover: "Predict", interact: "Experiment", explain: "Explain and calculate" },
    chemistry: { discover: "Predict", interact: "Model it" },
    maths: { discover: "Notice", interact: "Play with it" },
  };
  const stageLabel = (stage, subjectId) => (VARIANT_LABEL[kindOf(subjectId)] || {})[stage] || STAGE_LABEL[stage];

  // ---------- content helpers ----------
  const plain = (s) => String(s == null ? "" : s).replace(/\*\*/g, "");

  // "9/maths/ch#obj" -> { cls, subject, chapter, obj? }
  function parseRef(ref) {
    const m = /^(\d+)\/([^/#]+)\/([^/#]+)(?:#(.+))?$/.exec(String(ref));
    return m ? { cls: Number(m[1]), subject: m[2], chapter: m[3], obj: m[4] || null } : null;
  }

  const chapterOf = (cls, subject, id) => (D.hasFull(cls, subject) ? (D.chapters(cls, subject) || []).find((x) => x.id === id) || null : null);

  // The chapters the entry check should look back at, as refs. Hand-written `prereq` links first (other chapters only),
  // otherwise the previous chapter or two of the same subject and class.
  function prereqRefs(c, subj, chs, idx, objs) {
    const seen = new Set();
    const written = [];
    for (const o of objs)
      for (const p of o.prereq || []) {
        const r = parseRef(p);
        if (!r || (r.cls === c && r.subject === subj.id && r.chapter === chs[idx].id)) continue; // inside this chapter: ordering only
        const k = `${r.cls}/${r.subject}/${r.chapter}${r.obj ? "#" + r.obj : ""}`;
        if (!seen.has(k)) {
          seen.add(k);
          written.push(r);
        }
      }
    const before = chs
      .slice(Math.max(0, idx - config.maxPrereqChapters), idx)
      .reverse()
      .map((x) => ({ cls: c, subject: subj.id, chapter: x.id, obj: null }));
    return { written, before };
  }

  // Which of the refs can be used now. Written prerequisites in classes or subjects whose files are not here yet are
  // fetched (at most the first few), and dropped when they cannot be (offline, another board).
  async function usableRefs(refs) {
    const ok = [];
    const pending = [];
    for (const r of refs) {
      if (!D.classes.includes(r.cls) || !D.subjectsFor(r.cls).some((s) => s.id === r.subject)) {
        // The class index may not be loaded yet, so the subject list can't be read; try loading it below.
        if (!D.classes.includes(r.cls)) continue;
      }
      pending.push(r);
    }
    const have = (r) => !!chapterOf(r.cls, r.subject, r.chapter);
    pending.filter(have).forEach((r) => ok.push(r));
    if (ok.length >= config.maxPrereqChapters) return ok.slice(0, config.maxPrereqChapters * 2);
    const want = pending.filter((r) => !have(r)).slice(0, config.maxPrereqChapters);
    for (const cls of new Set(want.map((r) => r.cls))) {
      try {
        if (!D.isLoaded(cls)) await D.load(cls);
      } catch (e) {
        /* offline: that class is skipped */
      }
    }
    const pairs = want.filter((r) => D.isLoaded(r.cls) && D.subjectsFor(r.cls).some((s) => s.id === r.subject)).map((r) => ({ cls: r.cls, subject: r.subject }));
    if (pairs.length) {
      try {
        await D.loadFiles(D.refFiles(pairs));
      } catch (e) {
        /* offline */
      }
    }
    want.filter(have).forEach((r) => ok.push(r));
    return ok;
  }

  // ---------- question pools ----------
  const shuffle = (a) => {
    a = a.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };
  const withOrder = (q) => ({ ...q, order: q.keepOrder ? q.options.map((_, i) => i) : shuffle(q.options.map((_, i) => i)), picked: null, sure: null });

  // Multiple-choice items of a chapter in one shape: { q, options, answer, explain, level, keepOrder?, kinds?, gen? }.
  function poolOf(c, subj, ch, genCount = 8) {
    const bank = D.practiceFor(c, subj.id, ch.id);
    const saved = [...(ch.quiz || []), ...bank.mcq].map((q) => ({ q: q.q, options: q.options, answer: q.answer, explain: q.explain, level: q.level || 1, keepOrder: !!q.keepOrder }));
    let gens = [];
    try {
      gens = Gen.questions(c, subj.id, ch.id, genCount, Date.now()).map((g) => ({ q: g.q, options: g.options, answer: 0, explain: g.steps.join(" "), level: 2, kinds: g.kinds, gen: true, steps: g.steps }));
    } catch (e) {
      gens = [];
    }
    return { saved, gens, all: [...saved, ...gens], written: bank.written || [] };
  }

  // Questions grouped by the objective they belong to: Map(objId -> [item]) in the chapter's objective order.
  function byObjective(c, subj, ch, objs, items) {
    const map = new Map(objs.map((o) => [o.id, []]));
    for (const it of items) {
      const o = Objectives.forQuestion(c, subj.id, ch, it);
      if (o && map.has(o.id)) map.get(o.id).push(it);
    }
    return map;
  }

  const isTransfer = (q) => (q.level || 1) >= config.transferLevel || /^(case study|assertion)/i.test(plain(q.q).trim());

  // The retrieve and master sets, drawn without overlap where the chapter has enough questions.
  //   retrieve: mixed recall across objectives, easy to hard
  //   master:   [{ obj, item }] one independent check per objective
  //   transfer: { objId: item | written item } one application question per objective, when the chapter has one
  function drawSets(c, subj, ch, objs, pool, avoid) {
    const by = byObjective(c, subj, ch, objs, pool.all.filter((q) => !avoid.has(q.q)));
    for (const [k, v] of by) by.set(k, shuffle(v));
    const take = (id, pred) => {
      const list = by.get(id) || [];
      const i = list.findIndex(pred || (() => true));
      return i < 0 ? null : list.splice(i, 1)[0];
    };

    // Transfer first, so the harder questions are not used up by retrieve or the checks.
    const transfer = {};
    for (const o of objs) {
      const hard = take(o.id, isTransfer);
      if (hard) transfer[o.id] = { ...hard, kind: "mcq" };
      else {
        const w = pool.written.find((x) => (x.type === "case" || x.type === "hots") && (Objectives.forQuestion(c, subj.id, ch, { q: x.q, explain: x.a, options: [], answer: null }) || {}).id === o.id);
        if (w) transfer[o.id] = { kind: "written", q: w.q, a: w.a, marks: w.marks };
      }
    }

    // Master: one check per objective, medium level preferred.
    const master = [];
    for (const o of objs) {
      const it = take(o.id, (q) => (q.level || 1) === 2) || take(o.id);
      if (it) master.push({ obj: o.id, item: it });
    }

    // Retrieve: round robin over the objectives, starting at a random one.
    const ids = shuffle(objs.map((o) => o.id));
    const want = Math.max(config.retrieve.min, Math.min(config.retrieve.max, objs.length + 1));
    const retrieve = [];
    for (let guard = 0; retrieve.length < want && guard < 40; guard++) {
      const it = take(ids[guard % ids.length]);
      if (it) retrieve.push(it);
      else if (ids.every((id) => !(by.get(id) || []).length)) break;
    }
    retrieve.sort((a, b) => (a.level || 1) - (b.level || 1));
    return { retrieve, master, transfer };
  }

  // ---------- the entry check ----------
  // 3 to 6 easy questions from the earlier chapters. Items carry where they came from.
  function diagItems(refs) {
    const chapters = [];
    for (const r of refs) {
      const ch = chapterOf(r.cls, r.subject, r.chapter);
      if (!ch || chapters.some((x) => x.ref.cls === r.cls && x.ref.subject === r.subject && x.ref.chapter === r.chapter && x.ref.obj === r.obj)) continue;
      const subj = D.subject(r.subject);
      if (!subj) continue;
      const bank = D.practiceFor(r.cls, r.subject, ch.id);
      let items = [...(ch.quiz || []), ...bank.mcq].map((q) => ({ q: q.q, options: q.options, answer: q.answer, explain: q.explain, level: q.level || 1, keepOrder: !!q.keepOrder }));
      if (r.obj) {
        const hit = items.filter((q) => (Objectives.forQuestion(r.cls, r.subject, ch, q) || {}).id === r.obj);
        if (hit.length >= 2) items = hit;
      }
      items = shuffle(items.filter((q) => (q.level || 1) <= 2)).sort((a, b) => (a.level || 1) - (b.level || 1));
      if (items.length) chapters.push({ ref: r, ch, subj, items });
    }
    // Round robin over the chapters, so each one is represented; at most `max` in all.
    const out = [];
    for (let i = 0, any = true; any && out.length < config.diag.max; i++) {
      any = false;
      for (const c of chapters)
        if (c.items[i] && out.length < config.diag.max) {
          any = true;
          out.push({ ...withOrder(c.items[i]), from: { cls: c.ref.cls, subject: c.ref.subject, chapter: c.ch.id, title: c.ch.title, obj: c.ref.obj } });
        }
    }
    return out.length >= config.diag.min ? out : [];
  }

  // The inline recap of a prerequisite chapter: its first notes topics (or those the objective names).
  function refresher(from) {
    const ch = chapterOf(from.cls, from.subject, from.chapter);
    if (!ch) return null;
    let notes = (ch.notes || []).slice(0, config.refresherTopics);
    if (from.obj) {
      const o = (Objectives.forChapter(from.cls, from.subject, ch) || []).find((x) => x.id === from.obj);
      const named = o ? (ch.notes || []).filter((n) => o.topics.some((tp) => plain(tp) === plain(n.heading))) : [];
      if (named.length) notes = named.slice(0, config.refresherTopics);
    }
    return { cls: from.cls, subject: from.subject, chapter: ch.id, title: ch.title, notes: notes.map((n) => ({ heading: n.heading, points: n.points.slice(0, 4) })) };
  }

  // ---------- the rules (spec 6.3) ----------
  // Each rule: id, point (where it is asked), test(s, info) -> data | null, reason(data) -> the sentence the student reads,
  // and `what` (what the lesson does). The lesson (js/guided.js) acts on `what`; every fired rule is saved by Loop.log.
  //   insert  : adds a step ("key" / "key:arg") after the current step
  //   offer   : shows a choice on the current step
  const RULES = [
    {
      id: "weak-diagnostic",
      point: "diag-done",
      test: (s) => {
        const items = (s.diag && s.diag.items) || [];
        if (!items.length) return null;
        const right = items.filter((x) => x.picked === x.answer).length;
        if (right / items.length >= config.diag.weak) return null;
        // Revisit the earlier chapter the student missed most.
        const miss = {};
        items.filter((x) => x.picked !== x.answer).forEach((x) => (miss[x.from.cls + "/" + x.from.subject + "/" + x.from.chapter] = (miss[x.from.cls + "/" + x.from.subject + "/" + x.from.chapter] || 0) + 1));
        const top = Object.entries(miss).sort((a, b) => b[1] - a[1])[0][0];
        const from = items.find((x) => x.from.cls + "/" + x.from.subject + "/" + x.from.chapter === top).from;
        return { wrong: items.length - right, total: items.length, from };
      },
      reason: (d) => t("We'll start with a quick refresher because {wrong} of the {total} check questions on earlier work were missed.", { wrong: d.wrong, total: d.total }),
      what: (d) => ({ insert: "refresh", data: d.from }),
    },
    {
      id: "mastered-skip",
      point: "explain",
      test: (s, info) => (info.state === "mastered" ? { obj: info.obj } : null),
      reason: () => t("You have already shown you can do this ('Mastered for now'), so you can skip the notes for it."),
      what: (d) => ({ offer: "skip-idea", obj: d.obj }),
    },
    {
      id: "worked-followed",
      point: "worked-followed",
      test: (s) => (s.fade ? {} : null),
      reason: () => t("Next you complete a solution yourself, because you followed the worked example."),
      what: () => ({ note: "fade" }),
    },
    {
      id: "worked-another",
      point: "worked-another",
      test: (s) => (s.example2 ? {} : null),
      reason: () => t("Here is one more worked example, because the first one did not feel clear yet."),
      what: () => ({ insert: "worked2" }),
    },
    {
      id: "repeat-error",
      point: "wrong-answer",
      test: (s, info) => ((s.wrong[info.obj] || 0) >= config.repeatWrong && !s.alts[info.obj] ? { obj: info.obj, n: s.wrong[info.obj] } : null),
      reason: () => t("This idea has been missed more than once, so here is a different way to see it."),
      what: (d) => ({ offer: "alt", obj: d.obj }),
    },
    {
      id: "hints-many",
      point: "turn-done",
      test: (s, info) => (info.ok && info.hints >= config.hintsMany && s.againItem && !s.againDone ? { hints: info.hints } : null),
      reason: (d) => t("You got it right, but you used {n} hints. Here is a similar question with no hints.", { n: d.hints }),
      what: () => ({ insert: "again" }),
    },
    {
      id: "strong-independent",
      point: "master-answer",
      test: (s, info) => (info.ok && s.master.transfer[info.obj] && !s.master.items.some((x) => x.kind === "transfer" && x.obj === info.obj) ? { obj: info.obj } : null),
      reason: () => t("Your independent check was strong, so here is a question that uses the idea in a new situation."),
      what: (d) => ({ transfer: d.obj }),
    },
  ];

  // Fired rules for a point: [{ id, data, reason, what }].
  function decide(point, s, info = {}) {
    const out = [];
    for (const r of RULES) {
      if (r.point !== point) continue;
      let data = null;
      try {
        data = r.test(s, info);
      } catch (e) {
        data = null;
      }
      if (data) out.push({ id: r.id, data, reason: r.reason(data), what: r.what(data) });
    }
    return out;
  }

  // Saves a decision as a learning event (no objective, so it changes no mastery state). choice: applied | offered | accepted.
  function log(s, d, choice = "applied") {
    Learn.record([{ type: "decision", cls: s.c, subject: s.subj.id, chapter: s.ch.id, rule: d.id, choice, obj: undefined, for: d.data && d.data.obj, source: "guided" }]);
    (s.decisions = s.decisions || []).push({ id: d.id, choice, reason: d.reason });
  }

  // ---------- what to do next (end screen) ----------
  // Returns { text, why, href, label }. Rules in order: the first that applies wins.
  function recommend(s, rows) {
    const weak = rows.filter((r) => r.master === false);
    if (weak.length) {
      const o = weak[0].objective;
      return { id: "review-weak", text: t("Read the notes again for: {skill}", { skill: o.text }), why: t("Your independent check on this one was not right yet, and reading before trying again helps most."), href: `${s.base}/notes`, label: t("Open the notes") };
    }
    const open = rows.find((r) => r.after !== "mastered");
    const mistakes = Store.mistakesFor(s.c).length;
    if (mistakes && s.retrieveWrong) return { id: "mistakes", text: t("Practise your mistakes"), why: t("Questions you missed are saved there, and trying them again soon makes them stick."), href: "#/revise/mistakes", label: t("Practise my mistakes") };
    if (open) return { id: "quiz", text: t("Take the chapter quiz"), why: t("A skill needs a few right answers on different days before it counts as mastered, so more practice is the best next step."), href: `${s.base}/quiz`, label: t("Take the chapter quiz") };
    if (s.next) return { id: "next", text: t("Move on to the next chapter"), why: t("Every skill here is mastered for now. We will bring them back for review on their dates."), href: `#/chapter/${s.c}/${s.subj.id}/${s.next.id}`, label: t("Next chapter") };
    return { id: "quiz", text: t("Take the chapter quiz"), why: t("It is a good way to check the whole chapter."), href: `${s.base}/quiz`, label: t("Take the chapter quiz") };
  }

  return { config, STAGES, STAGE_LABEL, STAGE_OF, kindOf, stageLabel, parseRef, prereqRefs, usableRefs, poolOf, byObjective, drawSets, diagItems, refresher, withOrder, shuffle, RULES, decide, log, recommend, isTransfer, chapterOf };
})();
