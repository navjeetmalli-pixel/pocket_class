// Recording learning evidence, and reading the objective states back.
//
// Where events come from (all local, see Store.logLearn):
//   quiz / mock test / mistakes practice / revision / practice-by-topic rounds  js/quiz.js (one batch when the round ends)
//   find-my-level check                                                          js/views/paths.js
//   guided lesson: topics read, hints shown, fade / turn / practice answers      js/guided.js
//   games: every MCQ answer (api.answered) and one "game" event at the end       js/games/engine.js
//   teach-back ticks                                                             js/guided.js
// An event is { type, cls, subject, chapter, obj, ok, hints, attempt, source, err? } plus the time. `obj` is the
// objective the question belongs to (Objectives.forQuestion). Events whose chapter is not loaded are not recorded.

const Learn = (() => {
  const SOURCES = ["quiz", "practice", "guided", "game", "path", "test", "revise"];
  // Quiz record kinds (Store.recordQuiz) -> event source.
  const SOURCE_OF_KIND = { chapter: "quiz", test: "test", practice: "practice", revision: "revise", path: "path", guided: "guided" };

  // Objectives of a class may live in a file that is not here yet; then nothing is recorded (it would use the wrong ids).
  const ready = (cls) => !StudyData.hasObjectiveFile(cls) || StudyData.objectivesLoaded(cls);

  // The chapter id for a question item: ref.chapter, else the chapter part of its key.
  function chapterOfRef(r) {
    if (!r) return null;
    if (r.chapter) return r.chapter;
    return r.key ? Store.parseKey(r.key).chapterId : null;
  }

  // Which kind of error a wrong answer shows: the tag the generator put on that wrong option (see Gen.make), else "unknown".
  const errorOf = (item, picked) => (item && item.kinds && picked != null && item.kinds[picked]) || "unknown";

  // Builds one answer event for a question item, or null when the item can't be placed in a chapter.
  //   item: { q, options, answer, explain, ref: { key, cls, subject, chapter }, kinds? }
  function answerEvent(item, ok, { picked = null, hints = 0, attempt, source = "quiz" } = {}) {
    const r = item.ref || {};
    const chapter = chapterOfRef(r);
    const cls = r.cls != null ? r.cls : r.key ? Store.parseKey(r.key).cls : null; // class 0 is the pseudo class of a path's own chapters
    const subject = r.subject || (r.key ? Store.parseKey(r.key).subject : null);
    if (!chapter || cls == null || !subject || !ready(cls)) return null;
    const o = Objectives.forQuestion(cls, subject, chapter, item);
    if (!o) return null;
    const e = { type: "answer", cls, subject, chapter, obj: o.id, ok: !!ok, hints, attempt: attempt || (r.key && Store.state.mistakes[r.key] ? 2 : 1), source };
    if (!ok) e.err = errorOf(item, picked);
    return e;
  }

  // Records events and says what changed: [{ key, cls, subject, chapter, obj, before, after, improved }] for objectives
  // whose state moved. Events without an objective (the "game" summary) are logged but change nothing.
  function record(events) {
    events = events.filter(Boolean);
    if (!events.length) return [];
    const now = Date.now();
    const roll = Store.state.learn.roll;
    const keys = [...new Set(events.filter((e) => e.obj && e.chapter).map((e) => `${e.cls}/${e.subject}/${e.chapter}#${e.obj}`))];
    const before = Object.fromEntries(keys.map((k) => [k, Mastery.stateOf(roll[k], now)]));
    Store.logLearn(events);
    const after = Date.now();
    return keys
      .map((k) => {
        const p = Objectives.parseKey(k);
        const a = Mastery.stateOf(Store.state.learn.roll[k], after);
        return { key: k, ...p, before: before[k], after: a, improved: Mastery.RANK[a] > Mastery.RANK[before[k]] };
      })
      .filter((c) => c.before !== c.after);
  }

  // A single guided-lesson or teach event (one save).
  function note(type, cls, subject, chapter, obj, extra = {}) {
    if (!obj || !ready(cls)) return [];
    return record([{ type, cls, subject, chapter, obj, source: "guided", ...extra }]);
  }
  // The same for every objective that covers a notes heading.
  function noteTopic(type, cls, subject, chapter, heading, extra = {}) {
    if (!ready(cls)) return [];
    return record(Objectives.forTopic(cls, subject, chapter, heading).map((o) => ({ type, cls, subject, chapter: typeof chapter === "string" ? chapter : chapter.id, obj: o.id, source: "guided", ...extra })));
  }

  // ---------- reading ----------

  // [{ objective, state, assess }] for a chapter's objectives, in order.
  function chapterStates(cls, subject, chapter) {
    const roll = Store.state.learn.roll;
    const now = Date.now();
    return Objectives.forChapter(cls, subject, chapter).map((o) => ({ objective: o, assess: Mastery.assess(roll[o.key], now), state: Mastery.stateOf(roll[o.key], now) }));
  }

  // Counts per state of the objectives with any evidence, for a class (and a subject): { learning: 2, mastered: 5, … }.
  // Objectives never touched are not counted (they are not in the record), so the numbers are "what has been started".
  function counts(cls, subject) {
    const out = {};
    const now = Date.now();
    for (const [k, o] of Object.entries(Store.state.learn.roll)) {
      const p = Objectives.parseKey(k);
      if (!p || p.cls !== cls || (subject && p.subject !== subject)) continue;
      const s = Mastery.stateOf(o, now);
      if (s !== "not-started") out[s] = (out[s] || 0) + 1;
    }
    return out;
  }

  // Subjects of a class that have objective evidence (so the parent page knows what to load).
  function subjectsWithEvidence(cls) {
    const set = new Set();
    for (const k of Object.keys(Store.state.learn.roll)) {
      const p = Objectives.parseKey(k);
      if (p && p.cls === cls) set.add(p.subject);
    }
    return [...set];
  }

  // Objectives of a class grouped for plain-language lists: { can: [], practising: [], review: [] } of
  // { key, subject, chapter, obj, state, objective|null } most recent first.
  function groups(cls) {
    const out = { can: [], practising: [], review: [] };
    const now = Date.now();
    for (const [k, o] of Object.entries(Store.state.learn.roll)) {
      const p = Objectives.parseKey(k);
      if (!p || p.cls !== cls) continue;
      const state = Mastery.stateOf(o, now);
      const g = Mastery.group(state);
      if (g) out[g].push({ key: k, ...p, state, last: o.last || 0, objective: Objectives.byKey(k) });
    }
    Object.values(out).forEach((l) => l.sort((a, b) => b.last - a.last));
    return out;
  }

  // Keys of the objectives of one chapter that are due for review (to put their questions first in a revision round).
  function dueObjectives(cls, subject, chapterId) {
    const now = Date.now();
    const out = new Set();
    for (const [k, o] of Object.entries(Store.state.learn.roll)) {
      const p = Objectives.parseKey(k);
      if (p && p.cls === cls && p.subject === subject && p.chapter === chapterId && Mastery.isDue(o, now)) out.add(p.obj);
    }
    return out;
  }

  // The "Skills that moved forward" block for a quiz or game result. `changes` comes from record().
  function improvedHTML(changes) {
    const up = (changes || []).filter((c) => c.improved);
    if (!up.length) return "";
    return `<h2 class="block-title">${t("Skills that moved forward")}</h2>
      <div class="card obj-improved"><ul>${up
        .slice(0, 6)
        .map((c) => {
          const o = Objectives.byKey(c.key);
          return o ? `<li><span class="obj-text">${esc(o.text)}</span> ${stateChip(c.after)}</li>` : "";
        })
        .join("")}</ul>${up.length > 6 ? `<p class="small muted">${t("and {n} more", { n: up.length - 6 })}</p>` : ""}</div>`;
  }

  // A state as a chip: colour plus a mark plus the words, so nothing depends on colour.
  function stateChip(state) {
    return `<span class="obj-chip s-${state}"><span aria-hidden="true">${Mastery.MARK[state]}</span> ${t(Mastery.LABEL[state])}</span>`;
  }

  return { SOURCES, SOURCE_OF_KIND, ready, answerEvent, errorOf, record, note, noteTopic, chapterStates, counts, subjectsWithEvidence, groups, dueObjectives, improvedHTML, stateChip };
})();
