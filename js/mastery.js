// Mastery of one learning objective, worked out from what the student has done (never from one percentage).
//
// Every answer, hint and lesson step is logged (Store.logLearn, see js/learn.js) and folded into a small summary per
// objective, `o`, kept in Store.state.learn.roll["10/maths/real-numbers#hcf"]. This file turns such a summary into
// dimensions and a state. All thresholds are in Mastery.config, so a school or a pilot can tune them in one place;
// nothing in the views has its own cut-off.
//
//   o = {
//     n, ok            answers given, answers right
//     ind              answers right without any hint (independence)
//     nh               hints used in answers
//     seen             lesson steps, hints and teach-back ticks (evidence of meeting the idea, not of doing it)
//     first, last      time of the first / last evidence;  firstOk, lastOk  time of the first / last right answer
//     rec              the last `window` answers as codes: 2 right with no hint, 1 right with a hint, 0 wrong
//     ret              [right, given] of answers given at least `retentionDays` after the first right answer
//     step             position on the review ladder (config.intervalsDays)
//     due              time the objective is next due for review (only while it is "Mastered for now" or being refreshed)
//     rf               right answers still needed after a failed delayed recall (the state is "Needs a refresher" until 0)
//     err              { kind: count } of the kinds of error seen on wrong answers (see ERRORS)
//     nw               wrong answers
//   }
//
// Dimensions (spec 6.1): accuracy = right share of the recent answers; independence = right-without-a-hint share of the
// recent answers; retention = right share of the answers given after a delay. States (spec 6.4) come from those.

const Mastery = (() => {
  const DAY = 86400000;

  const config = {
    window: 8, // recent answers that count for accuracy and independence
    // Needs for each step up. `min` = answers needed (in the recent window for "mastered").
    practising: { min: 3, accuracy: 0.5 },
    nearly: { min: 4, accuracy: 0.7, independence: 0.4 },
    mastered: { min: 5, accuracy: 0.8, independence: 0.6 },
    retentionDays: 2, // an answer this long after the first right answer is a retention check
    intervalsDays: [2, 5, 10, 21, 45], // review ladder for "Mastered for now": a right recall climbs a step, a failed one goes back to the first
    refresherCorrect: 2, // right answers without a hint that clear "Needs a refresher"
    pathPass: 0.8, // share of a Practice-by-topic round that masters a level
    errorPattern: { min: 3, share: 0.6 }, // a kind of error is only called a pattern after this many, and this share of the wrong answers
    eventCap: 5000, // events kept in the log; older ones live on in the summaries
  };

  const STATES = ["not-started", "introduced", "learning", "practising", "nearly", "mastered", "review-due", "refresher"];
  // The words shown to the student (translated with t() where they are drawn).
  const LABEL = {
    "not-started": "Not started",
    introduced: "Introduced",
    learning: "Learning",
    practising: "Practising",
    nearly: "Nearly independent",
    mastered: "Mastered for now",
    "review-due": "Review due",
    refresher: "Needs a refresher",
  };
  // Marks for chips, so a state is never shown by colour alone.
  const MARK = { "not-started": "○", introduced: "◔", learning: "◑", practising: "◕", nearly: "◕", mastered: "✓", "review-due": "↻", refresher: "↺" };
  // Position for "improved": a later state is further on (review due and refresher count as below mastered).
  const RANK = { "not-started": 0, introduced: 1, learning: 2, refresher: 2, "review-due": 3, practising: 3, nearly: 4, mastered: 5 };

  // Kinds of error a generated question's wrong option can be tagged with. Anything else is "unknown".
  // A tag says how the wrong option was made, not what the student thinks: one answer never proves a misconception.
  const ERRORS = ["slip", "sign", "scale", "method", "unknown"];

  const pctOf = (n, d) => (d ? n / d : 0);

  const blank = () => ({ n: 0, ok: 0, ind: 0, nh: 0, seen: 0, first: 0, last: 0, firstOk: 0, lastOk: 0, rec: [], ret: [0, 0], step: 0, due: 0, rf: 0, err: {}, nw: 0 });

  // The state the answers alone give, before reviews and refreshers.
  function base(o) {
    const rec = o.rec || [];
    const len = rec.length;
    const acc = pctOf(rec.filter((c) => c > 0).length, len);
    const ind = pctOf(rec.filter((c) => c === 2).length, len);
    const c = config;
    if (len >= c.mastered.min && acc >= c.mastered.accuracy && ind >= c.mastered.independence) return "mastered";
    if (o.n >= c.nearly.min && acc >= c.nearly.accuracy && ind >= c.nearly.independence) return "nearly";
    if (o.n >= c.practising.min && acc >= c.practising.accuracy) return "practising";
    return "learning";
  }

  // Dimensions and state of an objective at time `now`. `o` may be undefined (nothing recorded).
  function assess(o, now = Date.now()) {
    if (!o || (!o.n && !o.seen)) return { state: "not-started", accuracy: null, independence: null, retention: null, n: 0, due: 0, error: errorPattern(null) };
    const rec = o.rec || [];
    const out = {
      n: o.n || 0,
      accuracy: rec.length ? pctOf(rec.filter((c) => c > 0).length, rec.length) : null,
      independence: rec.length ? pctOf(rec.filter((c) => c === 2).length, rec.length) : null,
      retention: o.ret && o.ret[1] ? pctOf(o.ret[0], o.ret[1]) : null,
      due: o.due || 0,
      error: errorPattern(o),
    };
    if (!o.n) return { ...out, state: "introduced" };
    if (o.rf > 0) return { ...out, state: "refresher" };
    const b = base(o);
    return { ...out, state: b === "mastered" && o.due && now >= o.due ? "review-due" : b };
  }

  const stateOf = (o, now) => assess(o, now).state;

  // True when the objective belongs in Due today: a review that has come round, or a refresher whose short interval is over.
  function isDue(o, now = Date.now()) {
    const s = stateOf(o, now);
    return s === "review-due" || (s === "refresher" && !!o.due && now >= o.due);
  }

  // A kind of error is a pattern only when it keeps coming back; otherwise the honest answer is "uncertain".
  function errorPattern(o) {
    const none = { kind: "unknown", confidence: "uncertain" };
    if (!o || !o.err) return none;
    const known = Object.entries(o.err).filter(([k]) => k !== "unknown").sort((a, b) => b[1] - a[1]);
    if (!known.length) return none;
    const [kind, count] = known[0];
    return count >= config.errorPattern.min && pctOf(count, o.nw || count) >= config.errorPattern.share ? { kind, confidence: "repeated" } : none;
  }

  // Adds one event to an objective's summary (mutates and returns it). Only the event types below carry evidence.
  //   answer:                { t, ok, hints, err? }
  //   hint, lesson-step, teach: just show the idea was met
  function fold(o, e) {
    o = o || blank();
    const now = e.t || Date.now();
    if (!o.first) o.first = now;
    o.last = now;
    if (e.type !== "answer") {
      o.seen = (o.seen || 0) + 1;
      return o;
    }
    const ok = !!e.ok;
    const hints = Math.max(0, Number(e.hints) || 0);
    const recall = !!o.due && now >= o.due; // answered after the review came due
    o.n++;
    if (ok) o.ok++;
    if (ok && !hints) o.ind++;
    o.nh += hints;
    const code = ok ? (hints ? 1 : 2) : 0;
    o.rec = [...(o.rec || []), code].slice(-config.window);
    if (ok) {
      if (!o.firstOk) o.firstOk = now;
      o.lastOk = now;
    } else {
      o.nw = (o.nw || 0) + 1;
      const k = ERRORS.includes(e.err) ? e.err : "unknown";
      o.err = o.err || {};
      o.err[k] = (o.err[k] || 0) + 1;
    }
    // Retention check: an answer given well after the first success (that success itself does not count).
    if (o.firstOk && o.firstOk !== now && now - o.firstOk >= config.retentionDays * DAY) {
      o.ret = o.ret || [0, 0];
      o.ret[1]++;
      if (ok) o.ret[0]++;
    }
    const last = config.intervalsDays.length - 1;
    if (recall) {
      if (ok) {
        o.step = Math.min((o.step || 0) + 1, last);
        o.rf = 0;
        o.due = 0;
      } else {
        // Failed delayed recall: a refresher, back to the shortest interval.
        o.step = 0;
        o.rf = config.refresherCorrect;
        o.due = now + config.intervalsDays[0] * DAY;
      }
    } else if (o.rf > 0 && ok && !hints) o.rf--;
    // The review date belongs to "Mastered for now" (and to a refresher in progress).
    const b = base(o);
    if (!o.rf) {
      if (b === "mastered" && !o.due) o.due = now + config.intervalsDays[Math.min(o.step || 0, last)] * DAY;
      else if (b !== "mastered") o.due = 0;
    }
    return o;
  }

  // Student-facing grouping for the parent page: what the child can do, is practising, or should review.
  function group(state) {
    if (state === "mastered") return "can";
    if (state === "review-due" || state === "refresher") return "review";
    if (state === "not-started") return null;
    return "practising";
  }

  return { config, STATES, LABEL, MARK, RANK, ERRORS, blank, assess, stateOf, isDue, errorPattern, fold, group, base };
})();
