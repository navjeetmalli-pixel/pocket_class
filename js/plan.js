// Today's plan (Home) and the place to resume. Rules are plain and fixed, so the screen can say why each item is there:
//
//   Time        about 18 minutes (10 for Classes 1 to 3), never more than the items below.
//   1 Reviews   chapters in Due today (Store.due: skills whose review has come round first, then open mistakes, then the
//               chapter schedule). Up to 2 (1 for Classes 1 to 3), about 5 minutes each.
//   2 A lesson  the next chapter not started yet in the subject the student has used most (answers, quizzes, chapters
//               opened), or the next level of the Practice-by-topic topic they used last when that is more recent than
//               their last chapter. About 8 minutes (5 for Classes 1 to 3).
//   3 Practice  a short quiz on the chapter of the skill they are weakest in (started, not mastered, lowest share right,
//               at least 2 answers). About 5 minutes. Nothing is offered until there is something to practise.
//   Items are added in that order while they fit the time. The plan is kept for the day: an item stays until it is
//   finished or no longer applies, finished items stay ticked, and each type has one place, so finishing the day's
//   lesson does not bring a new one. An item is ticked when the evidence is in the record after it was added (a revision
//   round for the chapter; the guided lesson or a quiz or 3 lesson steps; 5 answers or a game; a path level round) and
//   one event of type "plan" is logged for it (Learn.plan).

const Plan = (() => {
  const D = StudyData;
  const config = {
    minutes: 18,
    youngMinutes: 10,
    youngTo: 3, // classes up to this get the simpler plan
    maxReviews: 2,
    youngReviews: 1,
    cost: { review: 5, lesson: 8, path: 8, practice: 5 },
    youngLesson: 5,
    lessonSteps: 3, // learning events in the chapter that count as having had the lesson
    practiceAnswers: 5, // answers in the chapter that count as the practice
  };

  const young = (c) => c <= config.youngTo;
  // The learner's daily goal (15, 20 or 30 minutes, set in setup or Profile) is the time; without one the fixed times above apply.
  const budget = (c) => Store.goal() || (young(c) ? config.youngMinutes : config.minutes);
  const costOf = (c, kind) => (kind === "lesson" && young(c) ? config.youngLesson : config.cost[kind]);
  const ORDER = { review: 0, lesson: 1, path: 1, practice: 2 };

  // Only subjects the learner has picked (all of the class's subjects when they haven't picked).
  const withContent = (c) => {
    const picked = Store.selectedSubjects();
    return D.subjectsFor(c).filter((s) => picked.includes(s.id) && D.chapters(c, s.id).length);
  };
  const chapterOf = (c, subject, id) => D.chapters(c, subject).find((x) => x.id === id) || null;
  const keyOf = (it) => Store.key(it.cls, it.subject, it.chapter);

  // ---------- what the student uses most ----------

  // Use per subject of a class: answers and lesson steps in the log, quizzes taken, chapters opened.
  function usage(c) {
    const st = Store.state;
    const n = {};
    const add = (s, k = 1) => s && (n[s] = (n[s] || 0) + k);
    st.learn.events.slice(-600).forEach((e) => e.cls === c && e.type !== "plan" && add(e.subject));
    st.history.forEach((h) => h.cls === c && h.subject !== "all" && add(h.subject, 3));
    Object.entries(st.chapters).forEach(([k, r]) => {
      const p = Store.parseKey(k);
      if (p.cls === c && r.opened) add(p.subject, 2);
    });
    return n;
  }

  const started = (k) => {
    const st = Store.state;
    const r = st.chapters[k] || {};
    return !!(r.opened || r.done || r.attempts || st.revise[k] || st.guided[k]);
  };
  const lastOpened = (c) => Math.max(0, ...Object.entries(Store.state.chapters).filter(([k, r]) => Store.parseKey(k).cls === c && typeof r.opened === "number").map(([, r]) => r.opened));

  // ---------- candidates ----------

  const picked = (subject) => Store.selectedSubjects().includes(subject);

  function reviewItems(c, max) {
    return Store.due(c)
      .filter((e) => {
        const p = Store.parseKey(e.key);
        return picked(p.subject) && chapterOf(c, p.subject, p.chapterId);
      })
      .slice(0, max + 3)
      .map((e) => {
        const p = Store.parseKey(e.key);
        const why = e.objs ? { w: "skills", n: e.objs } : e.mistakes ? { w: "mistakes", n: e.mistakes } : { w: "days", n: e.days };
        return { id: `review:${e.key}`, kind: "review", cls: c, subject: p.subject, chapter: p.chapterId, why, href: `#/revise/due/${p.subject}/${p.chapterId}` };
      });
  }

  // The next level of the Practice-by-topic topic used last, when its path file is loaded and that was after the last chapter.
  function pathItem(c) {
    const paths = Store.state.paths;
    let best = null;
    for (const [subject, topics] of Object.entries(paths)) {
      if (!D.pathLoaded(subject) || !picked(subject)) continue;
      for (const [topicId, T] of Object.entries(topics)) {
        const at = Math.max(T.checked || 0, ...Object.values(T.levels || {}).map((l) => l.at || 0));
        if (at && (!best || at > best.at)) best = { subject, topicId, T, at };
      }
    }
    if (!best || best.at < lastOpened(c)) return null;
    const topic = D.path(best.subject).topics.find((x) => x.id === best.topicId);
    if (!topic) return null;
    const m = (i) => !!(best.T.levels[topic.levels[i].id] || {}).mastered;
    const i = topic.levels.findIndex((lv, j) => !m(j) && (j === 0 || j <= (best.T.start || 0) || m(j - 1)));
    if (i < 0) return null;
    const lv = topic.levels[i];
    return { id: `path:${best.subject}/${topic.id}/${lv.id}`, kind: "path", cls: c, subject: best.subject, chapter: `${topic.id}/${lv.id}`, why: { w: "path", topic: topic.title }, href: `#/paths/${best.subject}/${topic.id}/${lv.id}` };
  }

  function lessonItem(c) {
    const viaPath = pathItem(c);
    if (viaPath) return viaPath;
    const use = usage(c);
    const subjects = withContent(c).sort((a, b) => (use[b.id] || 0) - (use[a.id] || 0));
    const top = subjects[0] && use[subjects[0].id] ? subjects[0].id : null;
    for (const s of subjects) {
      const ch = D.chapters(c, s.id).find((x) => !started(Store.key(c, s.id, x.id)));
      if (!ch) continue;
      const href = Guided.available(c, s.id, ch.id) ? `#/chapter/${c}/${s.id}/${ch.id}/guided` : `#/chapter/${c}/${s.id}/${ch.id}`;
      return { id: `lesson:${Store.key(c, s.id, ch.id)}`, kind: "lesson", cls: c, subject: s.id, chapter: ch.id, why: { w: top === null ? "first" : s.id === top ? "next-top" : "next" }, href };
    }
    return null;
  }

  // The skill to practise: started, not mastered, lowest share right (at least 2 answers).
  function weakest(c) {
    const now = Date.now();
    let best = null;
    for (const [rk, o] of Object.entries(Store.state.learn.roll)) {
      const p = Objectives.parseKey(rk);
      if (!p || p.cls !== c || !picked(p.subject) || !chapterOf(c, p.subject, p.chapter)) continue;
      const a = Mastery.assess(o, now);
      if (!["learning", "practising", "nearly", "refresher"].includes(a.state) || Mastery.isDue(o, now) || a.n < 2) continue;
      const score = a.accuracy == null ? 1 : a.accuracy;
      if (!best || score < best.score || (score === best.score && (o.last || 0) > best.last)) best = { key: rk, p, score, last: o.last || 0 };
    }
    return best;
  }

  function practiceItem(c) {
    const w = weakest(c);
    if (!w) return null;
    return { id: `practice:${Store.key(c, w.p.subject, w.p.chapter)}`, kind: "practice", cls: c, subject: w.p.subject, chapter: w.p.chapter, obj: w.p.obj, why: { w: "weak" }, href: `#/chapter/${c}/${w.p.subject}/${w.p.chapter}/quiz` };
  }

  // ---------- finishing ----------

  const eventsSince = (it, since, pred) =>
    Store.state.learn.events.filter((e) => e.t >= since && e.cls === it.cls && e.subject === it.subject && e.chapter === it.chapter && e.type !== "plan" && (!pred || pred(e)));

  function isDone(it) {
    const st = Store.state;
    const since = it.at;
    const k = it.kind === "path" ? null : keyOf(it);
    if (it.kind === "review") return ((st.revise[k] || {}).last || 0) >= since;
    if (it.kind === "lesson") return ((st.guided[k] || {}).at || 0) >= since || ((st.revise[k] || {}).last || 0) >= since || eventsSince(it, since).length >= config.lessonSteps;
    if (it.kind === "practice") return ((st.revise[k] || {}).last || 0) >= since || eventsSince(it, since, (e) => e.type === "answer").length >= config.practiceAnswers || eventsSince(it, since, (e) => e.type === "game").length > 0;
    if (it.kind === "path") {
      const [topicId, levelId] = it.chapter.split("/");
      const lv = ((st.paths[it.subject] || {})[topicId] || { levels: {} }).levels[levelId];
      return !!lv && (lv.at || 0) >= since;
    }
    return false;
  }

  // Still worth doing: a review while the chapter is due, a path level until mastered. Lessons and practice stay all day.
  function stillApplies(it) {
    if (it.kind === "review") return Store.due(it.cls).some((e) => e.key === keyOf(it));
    if (it.kind === "path") {
      const [topicId, levelId] = it.chapter.split("/");
      return !(((Store.state.paths[it.subject] || {})[topicId] || { levels: {} }).levels[levelId] || {}).mastered;
    }
    return !!chapterOf(it.cls, it.subject, it.chapter);
  }

  // ---------- the plan for today ----------

  // Brings the saved plan up to date and returns it: { items: [{ ...item, done }], doneCount, minutes, moreDue, young }.
  function today(c) {
    const st = Store.state;
    const saved = st.plan && st.plan.day === dayKey() && st.plan.cls === c ? st.plan : { day: dayKey(), cls: c, items: [], done: {} };
    const before = JSON.stringify(saved);
    const plan = JSON.parse(before);
    const now = Date.now();

    // Tick what is finished, and log it once.
    for (const it of plan.items) {
      if (plan.done[it.id] || !isDone(it)) continue;
      plan.done[it.id] = now;
      if (typeof Learn !== "undefined") Learn.plan(c, it.kind === "path" ? D.PATH_PREFIX + it.subject : it.subject, it.kind === "path" ? it.chapter.split("/")[1] : it.chapter);
    }
    // Keep finished items and the ones that still apply.
    plan.items = plan.items.filter((it) => plan.done[it.id] || stillApplies(it));

    // Fill empty places, in order, while the time allows.
    const have = (kind) => plan.items.filter((it) => (kind === "lesson" ? it.kind === "lesson" || it.kind === "path" : it.kind === kind));
    let minutes = plan.items.reduce((a, it) => a + costOf(c, it.kind), 0);
    const room = (kind) => plan.items.length === 0 || minutes + costOf(c, kind) <= budget(c);
    const add = (it) => {
      if (!it || plan.items.some((x) => x.id === it.id) || plan.done[it.id]) return;
      plan.items.push({ ...it, at: now });
      minutes += costOf(c, it.kind);
    };
    const maxReviews = young(c) ? config.youngReviews : config.maxReviews;
    for (const it of reviewItems(c, maxReviews)) if (have("review").length < maxReviews && room("review")) add(it);
    if (!have("lesson").length && room("lesson")) add(lessonItem(c));
    if (!have("practice").length && room("practice")) {
      const p = practiceItem(c);
      if (p && !plan.items.some((x) => x.subject === p.subject && x.chapter === p.chapter)) add(p);
    }
    plan.items.sort((a, b) => ORDER[a.kind] - ORDER[b.kind]);

    if (JSON.stringify(plan) !== before || st.plan !== saved) Store.setPlan(plan);
    const items = plan.items.map((it) => ({ ...it, done: !!plan.done[it.id], min: costOf(c, it.kind) }));
    const owed = Store.due(c).filter((e) => chapterOf(c, Store.parseKey(e.key).subject, Store.parseKey(e.key).chapterId)).length;
    return {
      items,
      doneCount: items.filter((i) => i.done).length,
      minutes: items.filter((i) => !i.done).reduce((a, i) => a + i.min, 0),
      moreDue: Math.max(0, owed - items.filter((i) => i.kind === "review").length),
      young: young(c),
    };
  }

  // ---------- Explore / Play ----------

  // One relevant game or experiment: for a chapter in the plan, else the last chapter, else the first of the subject used most.
  // Experiments are offered on alternate days when the chapter has one. Returns { kind: "game" | "experiment", cls, subject, chapter, href }.
  function explore(c, planItems = []) {
    const st = Store.state;
    const from = planItems.find((i) => i.kind === "lesson") || planItems.find((i) => i.kind === "practice");
    let subject = from ? from.subject : null;
    let chapter = from ? from.chapter : null;
    if (!subject && st.last) {
      const p = Store.parseKey(st.last);
      if (p.cls === c && chapterOf(c, p.subject, p.chapterId)) {
        subject = p.subject;
        chapter = p.chapterId;
      }
    }
    if (!subject) {
      const use = usage(c);
      const s = withContent(c).sort((a, b) => (use[b.id] || 0) - (use[a.id] || 0))[0];
      const ch = s && D.chapters(c, s.id)[0];
      if (!ch) return null;
      subject = s.id;
      chapter = ch.id;
    }
    const sim = typeof Sims !== "undefined" && Sims.chapters[`${c}/${chapter}`] && new Date().getDate() % 2 === 0;
    return sim
      ? { kind: "experiment", cls: c, subject, chapter, href: `#/chapter/${c}/${subject}/${chapter}/notes` }
      : { kind: "game", cls: c, subject, chapter, href: `#/play/${c}/${subject}/${chapter}` };
  }

  // ---------- Continue learning ----------

  const PLACES = [
    [/^#\/chapter\/(\d+)\/(\w+)\/([\w-]+)(?:\/(\w+))?$/, "chapter"],
    [/^#\/play\/level\/(\w+)\/([\w-]+)\/([\w-]+)(?:\/(\w+))?$/, "level-game"],
    [/^#\/play\/(\d+)\/(\w+)\/([\w-]+)(?:\/(\w+))?$/, "game"],
    [/^#\/paths\/(\w+)\/([\w-]+)\/([\w-]+)$/, "path"],
  ];

  // Describes a saved place: { kind, tab?, cls?, subject, chapter?, topic?, level?, href }, or null when it can't be placed.
  function place(act, c) {
    if (!act || !act.href || (act.cls != null && act.cls !== c)) return null;
    for (const [re, kind] of PLACES) {
      const m = re.exec(act.href);
      if (!m) continue;
      if (kind === "chapter" || kind === "game") {
        if (Number(m[1]) !== c || !chapterOf(c, m[2], m[3])) return null;
        return { kind, cls: c, subject: m[2], chapter: m[3], tab: kind === "chapter" ? m[4] || "notes" : m[4] || null, href: act.href, stage: act.stage || null };
      }
      if (!D.subject(m[1])) return null;
      return { kind, subject: m[1], topic: m[2], level: m[3], href: act.href };
    }
    return null;
  }

  // Remember where the student is when the page is one worth resuming (called by the router after each page is drawn).
  function noteRoute(p) {
    if (PLACES.some(([re]) => re.test("#/" + p)) && !/\/find-my-level$/.test(p)) Store.setLastAct("#/" + p);
  }

  // The lesson's step, read from the page, so Continue can say where the student stopped (the lesson itself restarts from
  // its saved place). Runs after a click or key inside the lesson.
  function watchLesson() {
    const read = () => {
      const m = /^#\/chapter\/(\d+)\/\w+\/[\w-]+\/guided$/.exec(location.hash);
      const head = m && document.querySelector("#guided-mount .quiz-head");
      if (!head || !head.children[1]) return;
      const nums = (head.children[0].textContent.match(/\d+/g) || []).map(Number);
      if (nums.length >= 2) Store.setLastAct(location.hash, { stage: { i: nums[0], n: nums[1], label: head.children[1].textContent.trim() } });
    };
    ["click", "keyup"].forEach((ev) => document.addEventListener(ev, () => setTimeout(read, 60)));
  }

  return { config, today, explore, place, noteRoute, watchLesson, young, usage };
})();
