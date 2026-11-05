// Recording learning evidence, and reading the objective states back.
//
// Where events come from (all local, see Store.logLearn):
//   quiz / mock test / mistakes practice / revision / practice-by-topic rounds  js/quiz.js (one batch when the round ends)
//   find-my-level check                                                          js/views/paths.js
//   guided lesson: topics read, hints shown, fade / turn / practice answers      js/guided.js
//   games: every scored attempt (api.answered, max 3 per objective a round) and one "game" event   js/games/engine.js
//   teach-back ticks                                                             js/guided.js
//   virtual labs: the first run (lesson-step), each explanation and label-check answer (answer)   js/labs/labs.js, cell.js
//   Today's plan items finished (type "plan", no objective: it changes no state) js/plan.js
// An event is { type, cls, subject, chapter, obj, ok, hints, attempt, source, err? } plus the time. `obj` is the
// objective the question belongs to (Objectives.forQuestion). Events whose chapter is not loaded are not recorded.

const Learn = (() => {
  const SOURCES = ["quiz", "practice", "guided", "game", "path", "test", "revise", "plan", "lab"];
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
  // Game answers (source "game") that aren't saved bank questions use the strict objective match: an item that can't be
  // placed clearly is not recorded. A saved question (ref.key) is placed exactly as it is in a quiz.
  // `sure: false` (the learner said "Not sure") on a right answer counts it as helped, not independent: a lucky guess is not
  // evidence of mastery (Mastery.fold treats any hint the same way). The event keeps `unsure: true` for the record.
  function answerEvent(item, ok, { picked = null, hints = 0, attempt, source = "quiz", sure = null } = {}) {
    const guess = !!ok && sure === false;
    if (guess) hints = Math.max(1, hints);
    const r = item.ref || {};
    const chapter = chapterOfRef(r);
    const cls = r.cls != null ? r.cls : r.key ? Store.parseKey(r.key).cls : null; // class 0 is the pseudo class of a path's own chapters
    const subject = r.subject || (r.key ? Store.parseKey(r.key).subject : null);
    if (!chapter || cls == null || !subject || !ready(cls)) return null;
    const o = Objectives.forQuestion(cls, subject, chapter, item, { strict: source === "game" && !r.key });
    if (!o) return null;
    const e = { type: "answer", cls, subject, chapter, obj: o.id, ok: !!ok, hints, attempt: attempt || (r.key && Store.state.mistakes[r.key] ? 2 : 1), source };
    if (!ok) e.err = errorOf(item, picked);
    if (guess) e.unsure = true;
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

  // An item of Today's plan (Home) was finished: one event, type "plan", with the chapter (or the Practice-by-topic level)
  // it was about. It names no objective, so it only shows in the log.
  function plan(cls, subject, chapter) {
    return record([{ type: "plan", cls, subject, chapter, ok: true, source: "plan" }]);
  }

  // ---------- feedback after a wrong answer (spec 6.2) ----------
  // The explanation of the right answer is shown by the screen itself. This adds, in order:
  //   1. the fix of the hand-written mistake whose wording the chosen option matches (simple keyword match)
  //   2. otherwise, when the objective has hand-written mistakes, "A common mistake here is ..." (its first, most common one)
  //   3. for a made-up question whose wrong option is tagged (slip / sign / scale / method), one short tailored line
  // Nothing here says what the student "thinks": it is only advice. Returns [{ kind, text, fix? }].
  const ERROR_LINE = {
    slip: "Check each small step of the arithmetic: one slip can change the answer.",
    sign: "Check the sign (plus or minus) at each step.",
    scale: "Check place value and the powers of ten.",
    method: "Check that you used the right method or formula for this kind of question.",
  };
  const plainText = (s) => String(s == null ? "" : s).replace(/\*\*/g, "");

  // Mistake of the objective that the wrong option's words match, or null. Needs two shared words (or a shared pair of words)
  // and at least 40% of the option's words to be in the mistake's text or fix.
  function matchMistake(o, optionText) {
    const ot = new Set(Objectives.tokens(optionText));
    if (!ot.size) return null;
    let best = null;
    let bestScore = 0;
    for (const m of o.mistakes) {
      const mt = new Set(Objectives.tokens(`${m.text} ${m.fix}`));
      let shared = 0;
      ot.forEach((k) => mt.has(k) && shared++);
      if (shared >= 2 && shared / ot.size >= 0.4 && shared > bestScore) {
        best = m;
        bestScore = shared;
      }
    }
    return best;
  }

  function feedback(item, picked) {
    const out = [];
    if (!item || !item.options || picked == null || picked === item.answer) return out;
    const r = item.ref || {};
    const chapter = chapterOfRef(r);
    const cls = r.cls != null ? r.cls : r.key ? Store.parseKey(r.key).cls : null;
    const subject = r.subject || (r.key ? Store.parseKey(r.key).subject : null);
    if (chapter && cls != null && subject && ready(cls)) {
      const o = Objectives.forQuestion(cls, subject, chapter, item);
      if (o && o.mistakes && o.mistakes.length) {
        const hit = matchMistake(o, plainText(item.options[picked]));
        out.push(hit ? { kind: "fix", text: hit.text, fix: hit.fix } : { kind: "common", text: o.mistakes[0].text, fix: o.mistakes[0].fix });
      }
    }
    const tag = item.kinds && item.kinds[picked];
    if (tag && ERROR_LINE[tag]) out.push({ kind: "tailored", text: ERROR_LINE[tag] });
    return out;
  }

  // The same, as HTML to put under the explanation. Empty when there is nothing to add.
  function feedbackHTML(item, picked) {
    const lines = feedback(item, picked);
    if (!lines.length) return "";
    return `<div class="fb-extra">${lines
      .map((l) =>
        l.kind === "fix"
          ? `<p><strong>${t("This looks like a known mistake:")}</strong> ${esc(l.text)} <span class="fb-fix">${esc(l.fix)}</span></p>`
          : l.kind === "common"
          ? `<p><strong>${t("A common mistake here is")}</strong> ${esc(l.text.charAt(0).toLowerCase() + l.text.slice(1))} <span class="fb-fix">${esc(l.fix)}</span></p>`
          : `<p>${esc(t(l.text))}</p>`
      )
      .join("")}</div>`;
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

  // A short, kind summary card for a finished round (game, quiz or guided lesson), from its answer events and the changes
  // record() returned. Sections, each left out when empty: Practised (skills touched, at most 3), Went well (skills answered
  // all right or moved up), To review (skills with a wrong or right-but-unsure answer, with the known mistake in one line),
  // Next (one link). Events with no objective are ignored; with none at all the result is "".
  //   opts.next: { href, label, text? } to override the suggestion (text must be escaped); opts.noNext: leave the Next section out
  //   opts.mistakes: { [objective key]: text } a mistake already matched to a wrong answer (else the objective's first one)
  function summaryHTML(events, changes, opts = {}) {
    const per = new Map(); // objective key -> { right, wrong, unsure }
    for (const e of events || []) {
      if (!e || !e.obj || e.cls == null) continue;
      const k = Objectives.keyOf ? Objectives.keyOf(e.cls, e.subject, e.chapter, e.obj) : `${e.cls}/${e.subject}/${e.chapter}#${e.obj}`;
      if (!per.has(k)) per.set(k, { right: 0, wrong: 0, unsure: 0 });
      const p = per.get(k);
      if (!e.ok) p.wrong++;
      else if (e.unsure) p.unsure++;
      else p.right++;
    }
    const known = [...per.keys()].filter((k) => Objectives.byKey(k));
    if (!known.length) return "";
    const text = (k) => esc(Objectives.byKey(k).text);
    const review = known.filter((k) => per.get(k).wrong || per.get(k).unsure);
    const up = (changes || []).filter((c) => c.improved && per.has(c.key) && Objectives.byKey(c.key)).map((c) => c.key);
    const well = [...new Set([...known.filter((k) => !review.includes(k)), ...up.filter((k) => !review.includes(k))])];
    const list = (keys, line) => {
      const ul = keys.slice(0, 3).map((k) => `<li>${text(k)}${line ? line(k) : ""}</li>`).join("");
      return `<ul>${ul}</ul>${keys.length > 3 ? `<p class="small muted">${t("and {n} more", { n: keys.length - 3 })}</p>` : ""}`;
    };
    const mistake = (k) => {
      const p = per.get(k);
      if (!p.wrong) return `<span class="rs-note">${t("Right, but not sure yet. A few more tries will make it stick.")}</span>`;
      const o = Objectives.byKey(k);
      const m = (opts.mistakes && opts.mistakes[k]) || (o.mistakes && o.mistakes[0] && o.mistakes[0].text);
      return m ? `<span class="rs-note">${t("A common slip here:")} ${esc(plainText(m).replace(/\.$/, ""))}.</span>` : "";
    };
    const sec = (cls, ic, title, body) => `<section class="rs-sec ${cls}"><h3 class="rs-h"><span class="rs-ico" aria-hidden="true">${icon(ic)}</span> ${title}</h3>${body}</section>`;

    // Next: the caller's, else a review of the first skill that needs it, else the next chapter, else Play.
    let next = opts.next || null;
    const first = review[0] || known[0];
    const p0 = Objectives.parseKey(first);
    if (!next && p0 && !opts.noNext) {
      const base = `#/chapter/${p0.cls}/${p0.subject}/${p0.chapter}`;
      if (review.length) next = { href: `${base}/practise`, label: t("Practise this chapter"), text: t("Come back to the skills above with a few more questions.") };
      else {
        const chs = (StudyData.chapters(p0.cls, p0.subject) || []);
        const nx = chs[chs.findIndex((c) => c.id === p0.chapter) + 1];
        next = nx
          ? { href: `#/chapter/${p0.cls}/${p0.subject}/${nx.id}`, label: t("Next chapter"), text: t("All of these went well. Next up: {title}.", { title: esc(nx.title) }) }
          : { href: `${base}/play`, label: t("Play a game"), text: t("All of these went well. Why not play a game?") };
      }
    }
    // Mithu: cheers when nothing needs a review, thinks when something does (Classes 1 to 8; the bubble holds one short line).
    const pr = Store.state && Store.state.profile;
    const mithu = typeof Mascot !== "undefined" && pr && pr.cls != null && pr.cls <= 8
      ? `<div class="rs-mascot">${Mascot.html(review.length ? "think" : "cheer", { size: pr.cls <= 5 ? 76 : 56, say: review.length ? t("Let's look at these again.") : t("Well done! That went well.") })}</div>`
      : "";
    return `<section class="card results-summary" aria-labelledby="rs-title">${mithu}<h2 id="rs-title" class="block-title">${t("How it went")}</h2>
      ${sec("rs-did", "notes", t("Practised"), list(known))}
      ${well.length ? sec("rs-well", "check", t("Went well"), list(well)) : ""}
      ${review.length ? sec("rs-review", "target", t("To review"), list(review, mistake)) : ""}
      ${next ? sec("rs-next", "arrow", t("Next"), `${next.text ? `<p>${next.text}</p>` : ""}<a class="btn primary" href="${next.href}">${esc(next.label)}</a>`) : ""}</section>`;
  }

  // A state as a chip: colour plus a mark plus the words, so nothing depends on colour.
  function stateChip(state) {
    return `<span class="obj-chip s-${state}"><span aria-hidden="true">${Mastery.MARK[state]}</span> ${t(Mastery.LABEL[state])}</span>`;
  }

  return { SOURCES, SOURCE_OF_KIND, ready, feedback, feedbackHTML, answerEvent, errorOf, record, note, noteTopic, plan, chapterStates, counts, subjectsWithEvidence, groups, dueObjectives, improvedHTML, summaryHTML, stateChip };
})();
