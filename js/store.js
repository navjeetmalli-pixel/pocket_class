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

  const studentDefaults = () => ({
    id: newId(),
    profile: null, // { name, cls, board: "cbse" | "pseb" }
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
      localStorage.setItem(KEY, JSON.stringify({ v: 2, theme: device.theme, lang: device.lang, reminder: device.reminder, current: state.id, students }));
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

    setProfile(name, cls, board) {
      state.profile = { name: name.trim(), cls, board: board || (state.profile && state.profile.board) || "cbse" };
      save();
    },
    setBoard(board) {
      state.profile.board = board;
      save();
    },
    setClass(cls) {
      state.profile.cls = cls;
      save();
    },
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
    // Saves a finished level round. A level is mastered once a round scores 80% or more, and stays mastered.
    recordLevel(subject, topic, levelId, percent) {
      const t = ((state.paths[subject] = state.paths[subject] || {})[topic] = state.paths[subject][topic] || { start: 0, checked: null, levels: {} });
      const r = t.levels[levelId] || { best: 0, n: 0, mastered: false };
      t.levels[levelId] = { best: Math.max(r.best, percent), n: r.n + 1, at: Date.now(), mastered: r.mastered || percent >= 80 };
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
    recordQuiz({ title, subject, cls, score, total, kind, chapterKey, chapterKeys, answers }) {
      for (const a of answers || []) {
        const ck = String(a.key).split("/").slice(0, 3).join("/");
        const x = state.acc[ck] || [0, 0];
        state.acc[ck] = [x[0] + (a.ok ? 1 : 0), x[1] + 1];
      }
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

    // Teach-back: the student's own-words explanation of a chapter and the key points they ticked. Never graded.
    teach: (chapterKey) => state.teach[chapterKey] || { text: "", ticks: [] },
    setTeach(chapterKey, patch) {
      const cur = state.teach[chapterKey] || { text: "", ticks: [] };
      state.teach[chapterKey] = Object.assign({}, cur, patch, { at: Date.now() });
      save();
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
      return Object.values(by)
        .map((e) => ({ ...e, days: Math.floor((now - e.last) / DAY), gap: GAPS[Math.min(Math.max(e.n - 1, 0), GAPS.length - 1)] }))
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
    students: () => students.map((s) => ({ id: s.id, name: s.profile ? s.profile.name : "", cls: s.profile ? s.profile.cls : null, board: s.profile ? s.profile.board : "cbse" })),
    get currentId() {
      return state.id;
    },
    addStudent(name, cls, board) {
      const s = bind(studentDefaults());
      s.profile = { name: name.trim(), cls, board: board || "cbse" };
      students.push(s);
      state = s;
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
