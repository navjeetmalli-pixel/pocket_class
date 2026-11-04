// Two separate measures (spec 14.3), never mixed into one score:
//
//   Concept learning  what the student understands, from the objective states (js/mastery.js). Every answer counts,
//                     whatever the source: lessons, quizzes, games, revision. Each skill that has been started sits in
//                     exactly one stage:
//                       understanding  introduced or learning
//                       practising     practising or nearly independent
//                       remembering    right now, but not yet shown after a delay; or a review is due / a refresher
//                       ready          mastered for now AND answered right after a delay (retention >= Readiness.config.retention)
//   Exam readiness    how ready the student is for an exam paper, from mock tests only (answered without hints or
//                     feedback until the end): syllabus coverage (chapters tried), accuracy by question format,
//                     and accuracy when the clock was on. Speed is never scored: a slow right answer is a right answer.
//                     Written answers (2, 3 and 5 marks) are not marked by the app, so they are not measured.
//
// Also here: the small recognitions of learning behaviours shown on Progress (spec 8.5). They are computed from the
// record each time and carry no points, ranks or levels.

const Readiness = (() => {
  const D = StudyData;
  const config = {
    retention: 0.7, // share right after a delay that makes a mastered skill "ready to apply"
    minAnswers: 5, // answers before an accuracy percentage is shown
    lowChapter: { min: 3, below: 0.7 }, // a chapter is "lowest in tests" with this many answers and less than this share right
    cap: 6, // recognitions shown
  };

  const FORMATS = { mcq: "Multiple choice (1 mark)", ar: "Assertion–reason" };
  const STAGES = ["understanding", "practising", "remembering", "ready"];
  const STAGE_LABEL = { understanding: "Understanding", practising: "Practising", remembering: "Remembering", ready: "Ready to apply" };

  const pctOf = (r, n) => (n ? Math.round((r / n) * 100) : null);

  // ---------- concept learning ----------

  // The stage of one objective summary, or null when nothing has been done.
  function stageOf(o, now = Date.now()) {
    const a = Mastery.assess(o, now);
    switch (a.state) {
      case "introduced":
      case "learning":
        return "understanding";
      case "practising":
      case "nearly":
        return "practising";
      case "review-due":
      case "refresher":
        return "remembering";
      case "mastered":
        return a.retention != null && a.retention >= config.retention ? "ready" : "remembering";
      default:
        return null;
    }
  }

  // { understanding, practising, remembering, ready, started } for the objectives with evidence in a class, optionally
  // one subject and one chapter. `started` counts every objective met so far (the totals of a subject need its content).
  function concept(cls, subject, chapterId) {
    const out = { understanding: 0, practising: 0, remembering: 0, ready: 0, started: 0, due: 0 };
    const now = Date.now();
    for (const [k, o] of Object.entries(Store.state.learn.roll)) {
      const p = Objectives.parseKey(k);
      if (!p || p.cls !== cls || (subject && p.subject !== subject) || (chapterId && p.chapter !== chapterId)) continue;
      const s = stageOf(o, now);
      if (!s) continue;
      out[s]++;
      out.started++;
      if (Mastery.isDue(o, now)) out.due++;
    }
    return out;
  }

  // ---------- exam readiness ----------

  // The format of a banked question from its key ("10/maths/real-numbers/q1x2y3z"): "ar" for assertion–reason, else "mcq".
  function formatOf(key) {
    try {
      const p = Store.parseKey(key);
      if (!D.hasFull(p.cls, p.subject)) return "mcq";
      const ch = D.chapters(p.cls, p.subject).find((x) => x.id === p.chapterId);
      if (!ch) return "mcq";
      const q = [...(ch.quiz || []), ...D.practiceFor(p.cls, p.subject, ch.id).mcq].find((x) => questionId(x) === p.item);
      return q && q.keepOrder ? "ar" : "mcq";
    } catch (e) {
      return "mcq";
    }
  }

  // Called by Store.recordQuiz for a finished mock test: answers = [{ key, ok }], `timed` = the clock was on.
  // exam: chapter key -> { f: { mcq: [right, asked], ar: [...] }, timed: [right, asked], n: tests, at }
  function noteTest(exam, answers, timed) {
    const seen = new Set();
    for (const a of answers) {
      const ck = String(a.key).split("/").slice(0, 3).join("/");
      const e = (exam[ck] = exam[ck] || { f: {}, timed: [0, 0], n: 0, at: 0 });
      const f = formatOf(a.key);
      const x = e.f[f] || [0, 0];
      e.f[f] = [x[0] + (a.ok ? 1 : 0), x[1] + 1];
      if (timed) e.timed = [e.timed[0] + (a.ok ? 1 : 0), e.timed[1] + 1];
      if (!seen.has(ck)) {
        seen.add(ck);
        e.n++;
      }
      e.at = Date.now();
    }
  }

  const sum = (list) => list.reduce((a, [r, n]) => [a[0] + r, a[1] + n], [0, 0]);

  // Exam readiness of a subject (or one chapter of it) for the current student:
  //   total chapters, attempted (any quiz or test answers), tested (answered in a mock test),
  //   all / timed: [right, asked], fmt: { mcq: [r, n], ar: [r, n] }, lowest: { id, p } | null
  function exam(cls, subject, chapterId) {
    const st = Store.state;
    const chs = D.chapters(cls, subject).filter((c) => !chapterId || c.id === chapterId);
    const out = { total: chs.length, attempted: 0, tested: 0, all: [0, 0], timed: [0, 0], fmt: { mcq: [0, 0], ar: [0, 0] }, lowest: null };
    const fm = { mcq: [], ar: [] };
    const tm = [];
    chs.forEach((c) => {
      const k = Store.key(cls, subject, c.id);
      const e = st.exam[k];
      if ((st.acc[k] || [0, 0])[1] > 0 || e) out.attempted++;
      if (!e) return;
      out.tested++;
      Object.keys(fm).forEach((f) => e.f[f] && fm[f].push(e.f[f]));
      tm.push(e.timed);
      const all = sum(Object.values(e.f));
      if (all[1] >= config.lowChapter.min && all[0] / all[1] < config.lowChapter.below && (!out.lowest || all[0] / all[1] < out.lowest.p)) out.lowest = { id: c.id, p: all[0] / all[1] };
    });
    Object.keys(fm).forEach((f) => (out.fmt[f] = sum(fm[f])));
    out.timed = sum(tm);
    out.all = sum(Object.values(out.fmt));
    return out;
  }

  // What to do next for exam readiness: one step, as { k, ... } for the screen to put into words.
  function examNext(cls, subject, x = exam(cls, subject)) {
    if (!x.total) return null;
    if (!x.all[1]) return { k: "first-test" };
    if (x.all[1] < config.minAnswers) return { k: "more-answers", n: config.minAnswers - x.all[1] };
    if (x.lowest) return { k: "lowest", chapter: x.lowest.id };
    if (x.tested < x.total) return { k: "untested", n: x.total - x.tested };
    if (!x.timed[1]) return { k: "timed" };
    return Papers.CLASSES.includes(cls) ? { k: "paper" } : { k: "again" };
  }

  // What to do next for concept learning.
  function conceptNext(c) {
    if (c.due) return { k: "review", n: c.due };
    if (c.remembering) return { k: "later", n: c.remembering };
    if (c.practising || c.understanding) return { k: "practise", n: c.practising + c.understanding };
    if (c.started) return { k: "apply" };
    return { k: "start" };
  }

  // ---------- recognitions (spec 8.5) ----------

  // Recent recognitions for learning behaviours, newest first: [{ kind, at, key? (objective), chapterKey? }].
  //   improved    right twice in a row after a wrong answer in the same skill
  //   remembered  right in a skill at least two days after it was first right
  //   hard        a skill written at "apply" or "analyse" level, mastered with no hints at all
  //   teach       a teach-back with an explanation written and key points ticked
  //   mastered    a skill that reached "Mastered for now"
  function rewards(cls) {
    const st = Store.state;
    const now = Date.now();
    const found = [];
    // improved after feedback: scan the log in time order
    const run = {};
    const improved = {};
    for (const e of st.learn.events) {
      if (e.type !== "answer" || e.cls !== cls || !e.obj) continue;
      const k = `${e.cls}/${e.subject}/${e.chapter}#${e.obj}`;
      const r = (run[k] = run[k] || { wrong: false, n: 0 });
      if (!e.ok) {
        r.wrong = true;
        r.n = 0;
      } else if (r.wrong && ++r.n >= 2) {
        improved[k] = { kind: "improved", key: k, at: e.t };
        r.wrong = false;
        r.n = 0;
      }
    }
    found.push(...Object.values(improved));
    for (const [k, o] of Object.entries(st.learn.roll)) {
      const p = Objectives.parseKey(k);
      if (!p || p.cls !== cls) continue;
      if (o.ret && o.ret[0] > 0) found.push({ kind: "remembered", key: k, at: o.lastOk || o.last });
      const state = Mastery.stateOf(o, now);
      if (state === "mastered" || state === "review-due") {
        const obj = Objectives.byKey(k);
        if (obj && (obj.level === "apply" || obj.level === "analyse") && !o.nh && o.n >= 3) found.push({ kind: "hard", key: k, at: o.lastOk || o.last });
        found.push({ kind: "mastered", key: k, at: o.lastOk || o.last });
      }
    }
    for (const [ck, d] of Object.entries(st.teach)) {
      if (Store.parseKey(ck).cls !== cls) continue;
      if ((d.text || "").trim().length >= 40 && (d.ticks || []).length >= 2) found.push({ kind: "teach", chapterKey: ck, at: d.at || 0 });
    }
    found.sort((a, b) => b.at - a.at);
    // a few of each kind, so one behaviour does not fill the list
    const per = {};
    return found.filter((f) => (per[f.kind] = (per[f.kind] || 0) + 1) <= 2).slice(0, config.cap);
  }

  return { config, FORMATS, STAGES, STAGE_LABEL, stageOf, concept, conceptNext, formatOf, noteTest, exam, examNext, rewards, pctOf };
})();
