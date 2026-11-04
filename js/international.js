// International learners (board "intl", "International — learn by topic"): students outside the Indian boards, for example in
// Australia, Canada, the United Kingdom, the United States or New Zealand. This is honestly scoped: Maths, English and Science
// practice by topic, from beginner to about Year 12 level, NOT tied to any national curriculum.
//
// A learner's `cls` is a level from 0 to 12 (the Practice-by-topic levels in data/paths/). Level 0 is the lowest ladder level (before
// Class 1 of the Indian books); level 12 is the top. The country only decides what the year is called and which money symbol is used:
//
//   Australia        Foundation = 0, Year 1 … Year 12 = 1 … 12
//   Canada           Kindergarten = 0, Grade 1 … Grade 12 = 1 … 12
//   United States    Kindergarten = 0, Grade 1 … Grade 12 = 1 … 12
//   United Kingdom   Reception = 0, Year 1 = 0, Year N = N − 1 (Year 2 = 1 … Year 13 = 12): UK pupils start a year earlier, so
//                    Year N is the same age as Grade N − 1 (a Year 7 pupil is 11 to 12, like a Grade 6 pupil)
//   New Zealand      Year 1 = 0, Year N = N − 1 (Year 13 = 12), the same as the UK without Reception
//   Other            Level 0 … Level 12
//
// The profile keeps `country` (au | ca | gb | us | nz | other), `year` (the option id, e.g. "y7", so Reception and Year 1 stay
// apart), `cls` (the level) and `currency` (a symbol, editable in Profile). Money in made-up questions uses Money.fmt.

const International = (() => {
  const SUBJECTS = ["maths", "english", "science"];

  // [{ id, label (English, {n} filled in), n, level }]
  const seq = (prefix, label, from, to, shift) => Array.from({ length: to - from + 1 }, (_, i) => ({ id: prefix + (from + i), label, n: from + i, level: from + i - shift }));

  const COUNTRIES = [
    { id: "au", name: "Australia", cur: "A$", years: [{ id: "f", label: "Foundation", level: 0 }, ...seq("y", "Year {n}", 1, 12, 0)] },
    { id: "ca", name: "Canada", cur: "C$", years: [{ id: "k", label: "Kindergarten", level: 0 }, ...seq("g", "Grade {n}", 1, 12, 0)] },
    { id: "gb", name: "United Kingdom", cur: "£", years: [{ id: "r", label: "Reception", level: 0 }, ...seq("y", "Year {n}", 1, 13, 1)] },
    { id: "us", name: "United States", cur: "$", years: [{ id: "k", label: "Kindergarten", level: 0 }, ...seq("g", "Grade {n}", 1, 12, 0)] },
    { id: "nz", name: "New Zealand", cur: "NZ$", years: seq("y", "Year {n}", 1, 13, 1) },
    { id: "other", name: "Other", cur: "$", years: seq("l", "Level {n}", 0, 12, 0) },
  ];
  const CURRENCIES = ["A$", "C$", "£", "$", "NZ$", "€", "₹"];

  const P = () => (typeof Store !== "undefined" && Store.state ? Store.state.profile : null);
  const on = (p = P()) => !!p && p.board === "intl";
  const country = (id) => COUNTRIES.find((c) => c.id === id) || COUNTRIES[COUNTRIES.length - 1];
  const optName = (o) => (o.n != null ? t(o.label, { n: o.n }) : t(o.label));

  // The year option of a profile: its saved `year` if it belongs to the country, else the first option at its level.
  function option(p) {
    const c = country(p.country);
    return c.years.find((y) => y.id === p.year && y.level === Number(p.cls)) || c.years.find((y) => y.level === Number(p.cls)) || c.years[0];
  }
  // The option id to use for a level in a country (Year 1 and Reception are both level 0 in the UK: Reception is used).
  const defaultYear = (countryId, level) => (country(countryId).years.find((y) => y.level === Number(level)) || country(countryId).years[0]).id;

  // "Year 7" for an international profile-like { board, cls, country, year }, else "Class 7".
  function label(p) {
    if (on(p)) return optName(option(p));
    return t("Class {n}", { n: p.cls });
  }
  // The name of the top level ("Year 12", "Year 13", "Grade 12"), for "from beginner to … level".
  const topName = (p = P()) => optName(country(p && p.country).years[country(p && p.country).years.length - 1]);

  // The class of a chapter an international learner opens from a path level: the chapters are the Indian books' own, so they are
  // numbered as levels, never as a school year of the learner's country.
  const srcLabel = (n) => (on() ? t("Level {n}", { n }) : t("Class {n}", { n }));

  const currency = (p = P()) => (on(p) ? p.currency || country(p.country).cur : "₹");

  // ---------- the levels to work on ----------

  const D = () => StudyData;
  const level = () => (P() && P().cls != null ? Number(P().cls) : 0);

  // The index of the topic's level that matches the learner's own level: the last one at or below it (the first when all are above).
  function ownIndex(topic, L = level()) {
    let at = 0;
    topic.levels.forEach((lv, i) => lv.level <= L && (at = i));
    return at;
  }
  // Where work in a topic starts: after "Find my level" the placement it gave, else the learner's own level.
  const startIndex = (topic, T) => (T.checked ? Math.min(T.start, topic.levels.length - 1) : ownIndex(topic));
  // The first level at or after the start that is not mastered (the last level when all are).
  function targetIndex(topic, T) {
    for (let i = startIndex(topic, T); i < topic.levels.length; i++) if (!(T.levels[topic.levels[i].id] || {}).mastered) return i;
    return topic.levels.length - 1;
  }
  const lastAt = (T) => Math.max(T.checked || 0, ...Object.values(T.levels || {}).map((l) => l.at || 0));

  // The level to work on in a subject: the topic used last, if its target level is not mastered; else the first topic with
  // an unmastered target. { topic, i, lv, T, at, done } or null when the subject's path is not loaded.
  function focus(subjectId) {
    const path = D().pathLoaded(subjectId) && D().path(subjectId);
    if (!path) return null;
    let best = null;
    for (const topic of path.topics) {
      const T = Store.pathTopic(subjectId, topic.id);
      const i = targetIndex(topic, T);
      const cand = { subject: subjectId, topic, i, lv: topic.levels[i], T, at: lastAt(T), done: !!(T.levels[topic.levels[i].id] || {}).mastered };
      if (!best || (best.done && !cand.done) || (best.done === cand.done && cand.at > best.at)) best = cand;
    }
    return best;
  }
  const levelHref = (f) => `#/paths/${f.subject}/${f.topic.id}/${f.lv.id}`;

  // The subjects this learner works on, as ids.
  const picked = () => Store.selectedSubjects().filter((id) => SUBJECTS.includes(id));
  // Path files the learner's pages need.
  const pathIds = () => picked();
  // The least recently practised subject first (so Today's plan rotates through them), then the order of the list.
  function rotated() {
    const at = (id) => {
      const topics = Store.state.paths[id] || {};
      return Math.max(0, ...Object.values(topics).map(lastAt));
    };
    return picked().map((id, k) => ({ id, k, at: at(id) })).sort((a, b) => a.at - b.at || a.k - b.k).map((x) => x.id);
  }
  // The { cls, subject } pairs whose chapter files a subject's focus level needs.
  const pairsOf = (f) => (f ? (f.lv.from || []).filter(D().refActive).map((r) => ({ cls: r.cls, subject: r.subject })) : []);

  // What Today, Learn, Play and Explore need loaded: { paths, pairs } (asked again after each step, like Views.pathNeeds).
  function needs(p) {
    if (!on() || !["", "learn", "games", "explore", "progress", "parent"].includes(p)) return null;
    const out = { paths: pathIds(), pairs: [] };
    if (p === "games" || p === "explore") out.pairs = out.paths.flatMap((id) => pairsOf(focus(id)));
    return out;
  }

  // ---------- money ----------

  const Money = {
    symbol: () => currency(),
    locale: () => (on() ? "en-US" : "en-IN"),
    // 1234.5 -> "A$1,234.5" (at most 2 decimals; Indian digit grouping for ₹ learners, ordinary grouping otherwise)
    fmt(x) {
      const r = Math.round(x * 100) / 100;
      const a = Math.abs(r);
      const s = a >= 1000 ? a.toLocaleString(Money.locale(), { maximumFractionDigits: 2 }) : String(a);
      return (r < 0 ? "−" : "") + currency() + s;
    },
  };
  globalThis.Money = Money;

  // Saved questions and key terms written for India (the rupee, paise, "the currency of India") are not shown to international
  // learners: every question pipeline draws through Views.ui.quizItems (and the games' terms), which apply this filter. Made-up
  // questions use Money.fmt, so they already show the learner's own currency.
  const INDIA_MONEY = /₹|\brupees?\b|\bRs\b|\bpaisa\b|\bpaise\b|currency of India|Indian currency|Indian money/i;
  const indiaMoney = (x) => INDIA_MONEY.test(typeof x === "string" ? x : JSON.stringify(x));
  const forLearner = (list) => (on() ? list.filter((x) => !indiaMoney(x)) : list);

  return { forLearner, indiaMoney, SUBJECTS, COUNTRIES, CURRENCIES, on, country, option, optName, defaultYear, label, topName, srcLabel, currency, ownIndex, startIndex, targetIndex, focus, levelHref, picked, rotated, pairsOf, needs, level };
})();
