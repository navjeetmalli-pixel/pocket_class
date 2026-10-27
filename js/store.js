// Everything the student does is saved in this browser (localStorage), so the app works offline.
// Chapter keys look like "10/maths/real-numbers"; question keys add the quiz index: "10/maths/real-numbers/3".

const Store = (() => {
  const KEY = "vidya:v1";

  const defaults = () => ({
    profile: null, // { name, cls }
    theme: "system",
    chapters: {}, // key -> { done, best, attempts, opened }
    bookmarks: [],
    mistakes: {}, // question key -> timestamp
    cards: {}, // flashcard key -> "known" | "learning"
    history: [], // { title, subject, cls, score, total, at, kind }
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
    const [cls, subject, chapterId, q] = String(k).split("/");
    return { cls: Number(cls), subject, chapterId, q: q === undefined ? undefined : Number(q) };
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

    setProfile(name, cls) {
      state.profile = { name: name.trim(), cls };
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
    recordQuiz({ title, subject, cls, score, total, kind, chapterKey }) {
      const percent = pct(score, total);
      state.history.unshift({ title, subject, cls, score, total, kind, at: Date.now() });
      state.history = state.history.slice(0, 200);
      if (chapterKey) {
        const c = chapter(chapterKey);
        const patch = { best: Math.max(c.best || 0, percent), attempts: (c.attempts || 0) + 1 };
        if (percent >= 60) patch.done = true;
        state.chapters[chapterKey] = Object.assign({}, c, patch);
      }
      today().acts++;
      save();
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

    reset() {
      const { profile, theme } = state;
      state = Object.assign(defaults(), { profile, theme });
      save();
    },
  };
})();
