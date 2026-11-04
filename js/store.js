// Everything the student does is saved in this browser (localStorage), so the app works offline.
// Chapter keys look like "10/maths/real-numbers"; question and flashcard keys add an id made
// from the item's text (see itemId): "10/maths/real-numbers/q1x2y3z", ".../t9k8j7".

const Store = (() => {
  const KEY = "vidya:v1";

  const defaults = () => ({
    profile: null, // { name, cls, board: "cbse" | "pseb" }
    theme: "system",
    chapters: {}, // key -> { done, best, attempts, opened }
    bookmarks: [],
    mistakes: {}, // question key -> timestamp
    cards: {}, // flashcard key -> "known" | "learning"
    history: [], // { title, subject, cls, score, total, at, kind }
    guided: {}, // chapter key -> { at, score, total, sureWrong } for the last guided lesson
    revise: {}, // chapter key -> { last, n }: when the chapter was last studied and how many times
    days: {}, // "2026-10-28" -> { min, acts }
    focusMin: 0,
    focusLen: 25,
    last: null,
    qotd: null, // { day, picked }
  });

  let state;
  try {
    state = Object.assign(defaults(), JSON.parse(localStorage.getItem(KEY)) || {});
  } catch (e) {
    state = defaults();
  }

  function save() {
    try {
      localStorage.setItem(KEY, JSON.stringify(state));
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

    addMistake(qk) {
      state.mistakes[qk] = Date.now();
      save();
    },
    clearMistake(qk) {
      delete state.mistakes[qk];
      save();
    },
    mistakesFor(cls) {
      return Object.keys(state.mistakes).filter((k) => parseKey(k).cls === cls);
    },

    setCard(ck, status) {
      state.cards[ck] = status;
      save();
    },

    // Saves a finished quiz or test. `chapterKey` is set for single-chapter quizzes.
    recordQuiz({ title, subject, cls, score, total, kind, chapterKey, chapterKeys }) {
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
    // Once a class's content is loaded, move those keys to the text-based ids.
    migrate(cls) {
      let changed = false;
      const move = (map, re, list, idOf) => {
        for (const k of Object.keys(map)) {
          const p = parseKey(k);
          const m = p.cls === cls && re.exec(p.item);
          if (!m) continue;
          const ch = StudyData.chapters(cls, p.subject).find((x) => x.id === p.chapterId);
          const it = ch && ch[list][Number(m[1])];
          if (it) map[key(cls, p.subject, p.chapterId) + "/" + idOf(it)] = map[k];
          delete map[k];
          changed = true;
        }
      };
      move(state.mistakes, /^(\d+)$/, "quiz", questionId);
      move(state.cards, /^t(\d+)$/, "terms", (t) => itemId("t", t.term));
      if (changed) save();
    },

    // Backup file: the whole saved state as JSON.
    exportData() {
      return JSON.stringify({ app: "vidya", version: 1, saved: Date.now(), state }, null, 1);
    },
    // Returns false if the file isn't a Pocket Class backup.
    importData(text) {
      let data;
      try {
        data = JSON.parse(text);
      } catch (e) {
        return false;
      }
      const s = data && data.app === "vidya" && data.state;
      if (!s || !s.profile || !StudyData.classes.includes(Number(s.profile.cls))) return false;
      state = Object.assign(defaults(), s);
      StudyData.classes.filter(StudyData.isLoaded).forEach(this.migrate);
      save();
      return true;
    },

    reset() {
      const { profile, theme } = state;
      state = Object.assign(defaults(), { profile, theme });
      save();
    },
  };
})();
