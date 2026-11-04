// Everything the student does is saved in this browser (localStorage), so the app works offline.
// Chapter keys look like "10/maths/real-numbers"; question and flashcard keys add an id made
// from the item's text (see itemId): "10/maths/real-numbers/q1x2y3z", ".../t9k8j7".

const Store = (() => {
  const KEY = "vidya:v1";

  // Several students can share one device. Each has their own profile and progress; the theme, the app
  // language and the reminder belong to the device. `state` is always the current student's data, and
  // state.theme / state.lang / state.reminder read and write the device settings (see bind).
  const DEVICE = ["theme", "lang", "reminder"];

  const deviceDefaults = () => ({
    theme: "system",
    lang: "en", // interface language: "en" | "pa" | "hi"
    reminder: { on: false, time: "18:00" }, // daily practice reminder (phone apps only)
  });

  const newId = () => "s" + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);

  // The learning record (spec 11): a versioned, local-only event log plus a rolled-up summary per objective (js/mastery.js).
  //   events: [{ t, type: "answer"|"hint"|"lesson-step"|"game"|"teach"|"decision"|"diagnostic", cls, subject, chapter, obj, ok, hints, attempt,
  //              source: "quiz"|"practice"|"guided"|"game"|"path"|"test"|"revise"|"plan"|"lab", err? }]   the newest `Mastery.config.eventCap`
  //   roll:   { "10/maths/real-numbers#hcf": o }   every event is folded into its objective's summary as it is logged,
  //                                                 so trimming the log never loses evidence
  const LEARN_V = 1;
  const learnDefaults = () => ({ v: LEARN_V, events: [], roll: {} });
  // Any shape found in saved data or in a backup becomes a usable record: none (older versions) -> empty, damaged parts -> dropped.
  // A record from a newer version is kept as it is (never thrown away), just not trimmed.
  function cleanLearn(l) {
    if (!l || typeof l !== "object" || Array.isArray(l)) return learnDefaults();
    const roll = l.roll && typeof l.roll === "object" && !Array.isArray(l.roll) ? l.roll : {};
    for (const k of Object.keys(roll)) if (!roll[k] || typeof roll[k] !== "object") delete roll[k];
    return Object.assign(l, { v: Number(l.v) || LEARN_V, events: Array.isArray(l.events) ? l.events.filter((e) => e && typeof e === "object") : [], roll });
  }

  // Virtual labs (js/labs/): the experiment records a student saved. One record per finished experiment:
  //   { id, lab, inv, cls, subject, chapter, at, question, prediction: { text, ok }, variables: { changed, held: [] },
  //     observations: [{ column key: shown value }], conclusion: { text, ok }, fair, extra? }
  // Older saves and backups have none (-> empty); damaged records are dropped. Each lab keeps its newest LAB_KEEP.
  const LAB_KEEP = 30;
  const labsDefaults = () => ({ v: 1, records: [] });
  function cleanLabs(l) {
    if (!l || typeof l !== "object" || Array.isArray(l)) return labsDefaults();
    const ok = (r) => r && typeof r === "object" && typeof r.id === "string" && typeof r.lab === "string" && Number.isFinite(r.at);
    return Object.assign(l, { v: Number(l.v) || 1, records: Array.isArray(l.records) ? l.records.filter(ok) : [] });
  }

  // The learner profile (docs/UI_IMPLEMENTATION.md). Saved profiles from older versions have only { name, cls, board };
  // cleanProfile gives every new field its default and repairs damaged ones, so old saves and backups load unchanged
  // (a profile with no `setup` is a learner who set up long ago: setup done). PROFILE_V is written as `pv` in the save.
  //   role      "student" | "parent-managed" (a child profile a parent made)
  //   avatar    one of AVATARS (drawn in js/avatars.js), or null: the first letter of the name is shown
  //   view      "class" (all subjects of the class) | "subject" (the chosen subjects)
  //   subjects  subject ids picked, or null = every subject of board + class
  //   learnLang lesson language preference "en" | "hi" | "pa" (the interface language is a device setting)
  //   goal      daily goal in minutes (15 | 20 | 30) or null = decide later
  //   setup     { step, done }: where first-time setup stopped, so it resumes after the app is closed
  const PROFILE_V = 1;
  const AVATARS = Array.from({ length: 12 }, (_, i) => "a" + String(i + 1).padStart(2, "0"));
  const GOALS = [15, 20, 30];
  function cleanProfile(p) {
    if (!p || typeof p !== "object" || Array.isArray(p)) return null;
    const setup = p.setup && typeof p.setup === "object" && !p.setup.done ? { step: String(p.setup.step || "welcome"), done: false } : { step: "done", done: true };
    return Object.assign(p, {
      role: p.role === "parent-managed" ? "parent-managed" : "student",
      avatar: AVATARS.includes(p.avatar) ? p.avatar : null,
      view: p.view === "subject" ? "subject" : "class",
      subjects: Array.isArray(p.subjects) ? [...new Set(p.subjects.filter((x) => typeof x === "string"))] : null,
      learnLang: ["en", "hi", "pa"].includes(p.learnLang) ? p.learnLang : "en",
      goal: GOALS.includes(Number(p.goal)) ? Number(p.goal) : null,
      setup,
    });
  }

  // Subject ids offered for a board and class (the same lists StudyData.subjectsFor uses for the current board).
  function subjectIds(board, cls) {
    const bc = StudyData.boardCatalog[board];
    return ((bc && bc[cls]) || StudyData.catalog[cls] || []).filter((id) => StudyData.subject(id));
  }

  const studentDefaults = () => ({
    id: newId(),
    profile: null, // { name, cls, board: "cbse" | "pseb", role, avatar, view, subjects, learnLang, goal, setup }: see cleanProfile
    chapters: {}, // key -> { done, best, attempts, opened }
    acc: {}, // chapter key -> [right, asked]: every quiz or test answer given in the chapter
    bookmarks: [],
    mistakes: {}, // question key -> timestamp
    cards: {}, // flashcard key -> "known" | "learning"
    history: [], // { title, subject, cls, score, total, at, kind }
    guided: {}, // chapter key -> { at, score, total, sureWrong } for the last guided lesson
    teach: {}, // chapter key -> { text, ticks: [indexes of key points ticked], at }: the student's own-words summary
    revise: {}, // chapter key -> { last, n }: when the chapter was last studied and how many times
    paths: {}, // "maths" -> { "fractions": { start, checked, levels: { "fractions-0": { best, n, at, mastered } } } }: Practice by topic
    pm: {}, // question key -> true: mistakes made in Practice by topic in another class's chapter (shown in My mistakes too)
    games: {}, // chapter (or level) key -> { match: { best, stars, plays, at }, ... }: best score and stars of each Play game
    learn: learnDefaults(), // the learning record: see learnDefaults
    labs: labsDefaults(), // saved virtual-lab experiment records: see labsDefaults
    loop: {}, // chapter key -> { at, snap }: a chapter lesson that was left unfinished, so it can be resumed (js/guided.js)
    exam: {}, // chapter key -> { f: { mcq: [right, asked], ar: [...] }, timed: [r, n], n: tests, at }: answers in mock tests (js/readiness.js)
    plan: null, // Today's plan on Home: { day, cls, items: [...], done: { id: time } } (js/plan.js)
    lastAct: null, // the last page worth resuming: { href, at } (set by the router, shown as Continue learning)
    prefs: {}, // small switches: { streak: false } hides the streak (Settings)
    days: {}, // "2026-10-28" -> { min, acts }
    focusMin: 0,
    focusLen: 25,
    last: null,
    qotd: null, // { day, picked }
  });

  let device = deviceDefaults();
  let students = [];
  let state;

  // Makes the device settings readable and writable through a student's state (but not saved with it).
  function bind(s) {
    s.learn = cleanLearn(s.learn);
    s.labs = cleanLabs(s.labs);
    s.profile = cleanProfile(s.profile);
    for (const k of DEVICE) Object.defineProperty(s, k, { get: () => device[k], set: (v) => (device[k] = v), enumerable: false, configurable: true });
    return s;
  }

  const validDevice = (d) => ({
    theme: ["light", "dark"].includes(d.theme) ? d.theme : "system",
    lang: d.lang === "pa" || d.lang === "hi" ? d.lang : "en",
    reminder: d.reminder && typeof d.reminder === "object" ? Object.assign(deviceDefaults().reminder, d.reminder) : deviceDefaults().reminder,
  });

  try {
    const raw = localStorage.getItem(KEY);
    const saved = JSON.parse(raw) || {};
    device = validDevice(saved);
    if (Array.isArray(saved.students) && saved.students.length) {
      students = saved.students.map((s) => bind(Object.assign(studentDefaults(), s)));
      state = students.find((s) => s.id === saved.current) || students[0];
    } else {
      // Saved by a version with a single student: that becomes the first student, nothing is dropped.
      const old = Object.assign(studentDefaults(), saved);
      DEVICE.forEach((k) => delete old[k]);
      students = [bind(old)];
      state = students[0];
      if (raw && saved.profile) {
        try {
          localStorage.setItem(KEY + ":before-students", raw); // safety copy of the old single-student data
        } catch (e) {
          /* storage full */
        }
      }
    }
  } catch (e) {
    students = [bind(studentDefaults())];
    state = students[0];
  }

  function save() {
    try {
      localStorage.setItem(KEY, JSON.stringify({ v: 2, pv: PROFILE_V, theme: device.theme, lang: device.lang, reminder: device.reminder, current: state.id, students }));
    } catch (e) {
      /* storage full or blocked: keep working in memory */
    }
  }

  const key = (cls, subject, chapterId) => `${cls}/${subject}/${chapterId}`;

  function parseKey(k) {
    const [cls, subject, chapterId, item] = String(k).split("/");
    return { cls: Number(cls), subject, chapterId, item };
  }

  function today() {
    const d = dayKey();
    state.days[d] = state.days[d] || { min: 0, acts: 0 };
    return state.days[d];
  }

  // Any real study action counts towards the daily streak.
  function touch() {
    today().acts++;
    save();
  }

  function chapter(k) {
    return state.chapters[k] || {};
  }

  // Spaced revision: a chapter comes back 1, 3, 7, 14 and then every 30 days after it was last
  // studied (chapter quiz, guided lesson or revision round). Mistakes from mock tests count as study.
  const GAPS = [1, 3, 7, 14, 30];
  const DAY = 86400000;
  function studied(k) {
    const r = state.revise[k] || { n: 0 };
    state.revise[k] = { last: Date.now(), n: r.n + 1 };
  }

  function patchChapter(k, patch) {
    state.chapters[k] = Object.assign({}, state.chapters[k], patch);
    save();
  }

  function streak() {
    const active = (d) => {
      const x = state.days[dayKey(d)];
      return x && (x.acts > 0 || x.min > 0);
    };
    let n = 0;
    // Today doesn't break the streak until it's over.
    let i = active(new Date()) ? 0 : 1;
    while (active(daysAgo(i))) {
      n++;
      i++;
    }
    return n;
  }

  return {
    get state() {
      return state;
    },
    key,
    parseKey,
    chapter,
    streak,

    AVATARS,
    // Changes the profile: setProfile({ name, avatar, view, subjects, learnLang, goal, cls, board, role, setup }).
    // (The older setProfile(name, cls, board) still works.) Changing the board or class re-checks `subjects`: any that the
    // new board + class doesn't offer are dropped, and the dropped ids are returned. Progress is never touched.
    setProfile(patch, cls, board) {
      if (typeof patch === "string") patch = { name: patch, cls, board };
      const cur = state.profile || { name: "", cls: null, board: "cbse" };
      const next = { ...cur, ...patch };
      if (typeof next.name === "string") next.name = next.name.trim();
      if (!StudyData.boards[next.board]) next.board = cur.board || "cbse";
      if (next.cls != null) next.cls = Number(next.cls);
      const dropped = this.droppedBy(patch);
      if (next.subjects) {
        const ok = subjectIds(next.board, next.cls);
        next.subjects = next.subjects.filter((id) => ok.includes(id));
        if (!next.subjects.length) next.subjects = null; // nothing left: back to every subject
      }
      if (patch.setup) next.setup = patch.setup.done ? { step: "done", done: true } : { step: String(patch.setup.step), done: false };
      state.profile = cleanProfile(next);
      save();
      return dropped;
    },
    setBoard(board) {
      return this.setProfile({ board });
    },
    setClass(cls) {
      return this.setProfile({ cls });
    },
    // The learner is still in first-time setup (js/views/onboarding.js): the app shows setup, not Home.
    inSetup: () => !state.profile || !state.profile.setup.done,
    // Subjects of a board and class: [{ id, name, ... }] (default: this learner's board and class).
    availableSubjects(cls, board) {
      const p = state.profile || {};
      return subjectIds(board || p.board || "cbse", cls == null ? p.cls : cls).map(StudyData.subject);
    },
    // The picked subjects that a change of board / class would drop: [subject ids] (empty when nothing is lost).
    droppedBy(patch) {
      const p = state.profile;
      if (!p || !p.subjects || !patch || (patch.cls == null && patch.board == null)) return [];
      const ok = subjectIds(patch.board || p.board, patch.cls == null ? p.cls : Number(patch.cls));
      return p.subjects.filter((id) => !ok.includes(id));
    },
    // Subject ids this learner has picked (all available ones when nothing is picked) and the ones Home lists:
    // the picks in Subject-wise view, every subject in Class-wise view.
    selectedSubjects() {
      const all = this.availableSubjects().map((s) => s.id);
      const pick = state.profile && state.profile.subjects;
      return pick ? all.filter((id) => pick.includes(id)) : all;
    },
    shownSubjects() {
      return state.profile && state.profile.view === "subject" ? this.selectedSubjects() : this.availableSubjects().map((s) => s.id);
    },
    // Daily goal in minutes (null = not chosen); Today's plan uses it as its time.
    goal: () => (state.profile && state.profile.goal) || null,
    setTheme(theme) {
      state.theme = theme;
      save();
    },
    setLang(lang) {
      state.lang = lang === "pa" || lang === "hi" ? lang : "en";
      save();
    },
    setReminder(on, time) {
      device.reminder = { on: !!on, time: /^\d\d:\d\d$/.test(time) ? time : device.reminder.time };
      save();
    },
    // Small per-student switches (Settings). Streak is shown unless the student turned it off.
    pref: (k, dflt) => (state.prefs && k in state.prefs ? state.prefs[k] : dflt),
    setPref(k, v) {
      state.prefs = Object.assign({}, state.prefs, { [k]: v });
      save();
    },
    showStreak: () => !state.prefs || state.prefs.streak !== false,
    // The last resumable page (a chapter tab, a game, a Practice-by-topic level): "#/chapter/10/maths/real-numbers/guided".
    // `extra` may add what the page knows about the place reached, e.g. a lesson's { stage: { i, n, label } }.
    setLastAct(href, extra) {
      const cur = state.lastAct;
      if (!extra && cur && cur.href === href && cur.cls === state.profile.cls && Date.now() - cur.at < 30000) return;
      state.lastAct = { ...(cur && cur.href === href ? cur : {}), ...extra, href, cls: state.profile.cls, at: Date.now() };
      save();
    },
    setPlan(plan) {
      state.plan = plan;
      save();
    },
    setFocusLen(min) {
      state.focusLen = min;
      save();
    },

    opened(k) {
      state.last = k;
      patchChapter(k, { opened: Date.now() });
      touch();
    },
    setDone(k, done) {
      patchChapter(k, { done });
      touch();
    },

    toggleBookmark(k) {
      const i = state.bookmarks.indexOf(k);
      if (i >= 0) state.bookmarks.splice(i, 1);
      else state.bookmarks.unshift(k);
      save();
      return i < 0;
    },
    isBookmarked: (k) => state.bookmarks.includes(k),

    // `outside`: the question is from a chapter outside the student's class (Practice by topic), so My mistakes lists it too.
    addMistake(qk, outside) {
      state.mistakes[qk] = Date.now();
      if (outside) state.pm[qk] = true;
      save();
    },
    clearMistake(qk) {
      delete state.mistakes[qk];
      delete state.pm[qk];
      save();
    },
    // Class 0 is the pseudo class of a path's own chapters (see data/registry.js).
    mistakesFor(cls) {
      return Object.keys(state.mistakes).filter((k) => {
        const c = parseKey(k).cls;
        return c === cls || c === 0 || state.pm[k];
      });
    },

    // ----- Practice by topic -----
    pathTopic: (subject, topic) => Object.assign({ start: 0, checked: null, levels: {} }, ((state.paths[subject] || {})[topic]) || {}),
    // Saves a finished level round. A level is mastered once a round scores Mastery.config.pathPass (80%) or more, and stays mastered.
    recordLevel(subject, topic, levelId, percent) {
      const t = ((state.paths[subject] = state.paths[subject] || {})[topic] = state.paths[subject][topic] || { start: 0, checked: null, levels: {} });
      const r = t.levels[levelId] || { best: 0, n: 0, mastered: false };
      t.levels[levelId] = { best: Math.max(r.best, percent), n: r.n + 1, at: Date.now(), mastered: r.mastered || percent >= Mastery.config.pathPass * 100 };
      save();
      return t.levels[levelId];
    },
    // Where the student starts in a topic: an index into its levels (from "Find my level" or "Start from Level 0").
    setPathStart(subject, topic, start, checked) {
      const t = ((state.paths[subject] = state.paths[subject] || {})[topic] = state.paths[subject][topic] || { start: 0, checked: null, levels: {} });
      t.start = start;
      t.checked = checked ? Date.now() : t.checked;
      today().acts++;
      save();
    },
    pathMastered(subject) {
      return Object.values(state.paths[subject] || {}).reduce((a, t) => a + Object.values(t.levels || {}).filter((l) => l.mastered).length, 0);
    },

    // ----- Play (js/games/engine.js) -----
    // A finished game: keeps the best score and stars for this chapter (or level) and game type, and counts as study today.
    // `answers` ([{ key, ok }], as in recordQuiz) feeds the chapter accuracy. Returns { best, stars, plays, isBest, prev }.
    recordGame(k, type, { score, stars, answers }) {
      for (const a of answers || []) {
        const ck = String(a.key).split("/").slice(0, 3).join("/");
        const x = state.acc[ck] || [0, 0];
        state.acc[ck] = [x[0] + (a.ok ? 1 : 0), x[1] + 1];
      }
      const g = (state.games[k] = state.games[k] || {});
      const prev = g[type] || { best: 0, stars: 0, plays: 0 };
      g[type] = { best: Math.max(prev.best, score), stars: Math.max(prev.stars, stars), plays: prev.plays + 1, at: Date.now() };
      today().acts++;
      save();
      return { ...g[type], isBest: score > prev.best, prev };
    },
    gameBest: (k, type) => ((state.games[k] || {})[type]) || null,

    setCard(ck, status) {
      state.cards[ck] = status;
      save();
    },

    // Saves a finished quiz or test. `chapterKey` is set for single-chapter quizzes.
    // `answers` lists [{ key, ok }] for the questions that belong to a chapter, to keep chapter accuracy.
    recordQuiz({ title, subject, cls, score, total, kind, chapterKey, chapterKeys, answers, timed }) {
      for (const a of answers || []) {
        const ck = String(a.key).split("/").slice(0, 3).join("/");
        const x = state.acc[ck] || [0, 0];
        state.acc[ck] = [x[0] + (a.ok ? 1 : 0), x[1] + 1];
      }
      // Mock-test answers also feed Exam readiness (format, timed or not), kept apart from concept learning.
      if (kind === "test" && answers && answers.length) Readiness.noteTest(state.exam, answers, !!timed);
      const percent = pct(score, total);
      state.history.unshift({ title, subject, cls, score, total, kind, at: Date.now() });
      state.history = state.history.slice(0, 200);
      if (chapterKey) {
        const c = chapter(chapterKey);
        const patch = { best: Math.max(c.best || 0, percent), attempts: (c.attempts || 0) + 1 };
        if (percent >= 60) patch.done = true;
        state.chapters[chapterKey] = Object.assign({}, c, patch);
      }
      [chapterKey, ...(chapterKeys || [])].filter(Boolean).forEach(studied);
      today().acts++;
      save();
    },

    // Saves a finished guided lesson. The chapter's best quiz score is left alone (3 questions is not a quiz).
    recordGuided(chapterKey, { title, subject, cls, score, total, sureWrong }) {
      state.guided[chapterKey] = { at: Date.now(), score, total, sureWrong };
      state.history.unshift({ title, subject, cls, score, total, kind: "guided", at: Date.now() });
      state.history = state.history.slice(0, 200);
      state.chapters[chapterKey] = Object.assign({}, chapter(chapterKey), { opened: true });
      studied(chapterKey);
      today().acts++;
      save();
    },
    guided: (chapterKey) => state.guided[chapterKey] || null,
    // The unfinished lesson of a chapter ({ at, snap }), saved as the student goes so they can leave and come back.
    loopGet: (chapterKey) => (state.loop && state.loop[chapterKey]) || null,
    loopSave(chapterKey, snap) {
      state.loop = state.loop || {};
      state.loop[chapterKey] = { at: Date.now(), snap };
      save();
    },
    loopClear(chapterKey) {
      if (state.loop && state.loop[chapterKey]) {
        delete state.loop[chapterKey];
        save();
      }
    },

    // Teach-back: the student's own-words explanation of a chapter and the key points they ticked. Never graded.
    teach: (chapterKey) => state.teach[chapterKey] || { text: "", ticks: [] },
    setTeach(chapterKey, patch) {
      const cur = state.teach[chapterKey] || { text: "", ticks: [] };
      state.teach[chapterKey] = Object.assign({}, cur, patch, { at: Date.now() });
      save();
    },

    // ----- learning record -----
    // Logs events (see learnDefaults) and folds the ones that name an objective into its summary. One save.
    logLearn(events) {
      const l = state.learn;
      const cap = Mastery.config.eventCap;
      for (const e of events) {
        const ev = { t: Date.now(), ...e };
        Object.keys(ev).forEach((k) => ev[k] === undefined && delete ev[k]);
        l.events.push(ev);
        if (ev.obj && ev.chapter) {
          const k = `${ev.cls}/${ev.subject}/${ev.chapter}#${ev.obj}`;
          l.roll[k] = Mastery.fold(l.roll[k], ev);
        }
      }
      if (l.v <= LEARN_V && l.events.length > cap) l.events.splice(0, l.events.length - cap);
      save();
    },

    // ----- virtual labs -----
    // Saves an experiment record (a record with the same id is replaced); keeps the newest LAB_KEEP of each lab.
    saveLab(rec) {
      const l = state.labs;
      const i = l.records.findIndex((r) => r.id === rec.id);
      if (i >= 0) l.records[i] = rec;
      else l.records.push(rec);
      const mine = l.records.filter((r) => r.lab === rec.lab);
      if (mine.length > LAB_KEEP) {
        const drop = new Set(mine.sort((a, b) => a.at - b.at).slice(0, mine.length - LAB_KEEP).map((r) => r.id));
        l.records = l.records.filter((r) => !drop.has(r.id));
      }
      save();
    },
    // Saved experiments, newest first (all labs, or one).
    labRecords(lab) {
      return state.labs.records.filter((r) => !lab || r.lab === lab).sort((a, b) => b.at - a.at);
    },

    // Chapters of this class that are due for revision today, most overdue first:
    // [{ key, days (since last studied), n (times studied), mistakes (open mistakes) }].
    due(cls) {
      const by = {};
      for (const [k, r] of Object.entries(state.revise)) {
        if (parseKey(k).cls !== cls) continue;
        by[k] = { key: k, last: r.last, n: r.n, mistakes: 0 };
      }
      for (const [qk, at] of Object.entries(state.mistakes)) {
        const p = parseKey(qk);
        if (p.cls !== cls) continue;
        const k = key(p.cls, p.subject, p.chapterId);
        const e = (by[k] = by[k] || { key: k, last: 0, n: 0, mistakes: 0 });
        e.mistakes++;
        e.last = Math.max(e.last, at);
      }
      const now = Date.now();
      // Objectives whose review has come round (js/mastery.js) bring their chapter into Due today, even if the chapter
      // as a whole is not due yet: `objs` counts them.
      for (const [rk, o] of Object.entries(state.learn.roll)) {
        if (!Mastery.isDue(o, now)) continue;
        const m = /^(\d+)\/([^/]+)\/([^/#]+)#/.exec(rk);
        if (!m || Number(m[1]) !== cls) continue;
        const k = key(cls, m[2], m[3]);
        const e = (by[k] = by[k] || { key: k, last: o.last || 0, n: 1, mistakes: 0 });
        e.objs = (e.objs || 0) + 1;
      }
      return Object.values(by)
        .map((e) => ({ ...e, days: Math.floor((now - e.last) / DAY), gap: e.objs ? 0 : GAPS[Math.min(Math.max(e.n - 1, 0), GAPS.length - 1)] }))
        .filter((e) => e.days >= e.gap)
        .sort((a, b) => b.days - b.gap - (a.days - a.gap));
    },

    addFocus(min) {
      state.focusMin += min;
      today().acts++;
      save();
    },

    // Called once a minute while the student is actively using the app.
    addStudyMinute() {
      today().min++;
      save();
    },

    setQotd(picked) {
      state.qotd = { day: dayKey(), picked };
      touch();
    },

    // Older versions keyed questions by position ("…/3") and cards by "…/t3".
    // Once a subject's content is loaded (run per class; it skips subjects not loaded yet), move those keys to the text-based ids.
    migrate(cls) {
      let changed = false;
      const move = (map, re, list, idOf) => {
        for (const k of Object.keys(map)) {
          const p = parseKey(k);
          // Subjects load one at a time; a subject that hasn't loaded yet is migrated when it does.
          if (p.cls !== cls || !StudyData.hasFull(cls, p.subject)) continue;
          const m = re.exec(p.item);
          if (!m) continue;
          const ch = StudyData.chapters(cls, p.subject).find((x) => x.id === p.chapterId);
          const it = ch && ch[list][Number(m[1])];
          if (it) map[key(cls, p.subject, p.chapterId) + "/" + idOf(it)] = map[k];
          delete map[k];
          changed = true;
        }
      };
      for (const st of students) {
        move(st.mistakes, /^(\d+)$/, "quiz", questionId);
        move(st.cards, /^t(\d+)$/, "terms", (t) => itemId("t", t.term));
      }
      if (changed) save();
    },

    // ----- students sharing this device -----
    students: () => students.map((s) => ({ id: s.id, name: s.profile ? s.profile.name : "", cls: s.profile ? s.profile.cls : null, board: s.profile ? s.profile.board : "cbse", avatar: s.profile ? s.profile.avatar : null, role: s.profile ? s.profile.role : "student", setup: s.profile ? s.profile.setup : null })),
    get currentId() {
      return state.id;
    },
    // `extra` may add profile fields (role, setup, ...). The new student becomes the current one.
    addStudent(name, cls, board, extra) {
      const s = bind(studentDefaults());
      s.profile = cleanProfile({ ...extra, name: name.trim(), cls, board: board || "cbse" });
      students.push(s);
      state = s;
      save();
    },
    // Setup helpers: students still in first-time setup (they have no progress yet) and removing the extra ones.
    setupStudents: () => students.filter((s) => s.profile && !s.profile.setup.done).map((s) => s.id),
    dropSetupStudents(exceptId) {
      const keep = students.filter((s) => s.id === exceptId || !s.profile || s.profile.setup.done);
      if (keep.length === students.length || !keep.length) return;
      students = keep;
      if (!students.includes(state)) state = students[0];
      save();
    },
    renameStudent(id, name) {
      const s = students.find((x) => x.id === id);
      if (s && s.profile) s.profile.name = name.trim();
      save();
    },
    switchStudent(id) {
      const s = students.find((x) => x.id === id);
      if (s) state = s;
      save();
    },
    // The last student can't be deleted. Returns false then.
    deleteStudent(id) {
      if (students.length < 2) return false;
      students = students.filter((x) => x.id !== id);
      if (!students.includes(state)) state = students[0];
      save();
      return true;
    },

    // Backup file: every student's saved data as JSON, plus the device's theme and language.
    // (Backups made before there were several students hold one student under "state"; they still restore.)
    exportData() {
      return JSON.stringify({ app: "vidya", version: 2, saved: Date.now(), theme: device.theme, lang: device.lang, current: state.id, students }, null, 1);
    },
    // Returns false if the file isn't a Pocket Class backup.
    importData(text) {
      let data;
      try {
        data = JSON.parse(text);
      } catch (e) {
        return false;
      }
      if (!data || data.app !== "vidya") return false;
      const okProfile = (p) => p && StudyData.classes.includes(Number(p.cls));
      if (Array.isArray(data.students)) {
        const list = data.students.filter((s) => s && okProfile(s.profile));
        if (!list.length) return false;
        students = list.map((s) => bind(Object.assign(studentDefaults(), s)));
        state = students.find((s) => s.id === data.current) || students[0];
        device = Object.assign(device, validDevice(data), { reminder: device.reminder });
      } else {
        const s = data.state;
        if (!s || !okProfile(s.profile)) return false;
        // An old single-student backup replaces the current student's progress. The language of this
        // device is kept (older backups have none).
        const lang = device.lang;
        const fresh = bind(Object.assign(studentDefaults(), s, { id: state.id }));
        device = Object.assign(device, validDevice(s), { lang, reminder: device.reminder });
        students[students.indexOf(state)] = state = fresh;
      }
      StudyData.classes.filter(StudyData.isLoaded).forEach(this.migrate);
      save();
      return true;
    },

    // Clears the current student's progress; the profile stays.
    reset() {
      const fresh = bind(Object.assign(studentDefaults(), { id: state.id, profile: state.profile }));
      students[students.indexOf(state)] = state = fresh;
      save();
    },
  };
})();
