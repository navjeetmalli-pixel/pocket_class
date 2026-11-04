// Learning objectives of a chapter, and which objective a question belongs to.
//
// A chapter's objectives are hand-written in data/class{N}/objectives.js when that file has them (CONTENT_GUIDE.md),
// otherwise they are derived: one objective per notes topic (heading), "Understand: <heading>". Either way each has
//   { id, text, topics: [notes headings], level, prereq?, mistakes?, derived: bool, key: "10/maths/real-numbers#hcf" }
// Progress is saved against `key`, so an objective's id must never change once students have used it. Derived ids come
// from the heading (kebab-case), so renaming a heading in the notes starts that objective afresh; hand-write the
// objectives of chapters where that matters.

const Objectives = (() => {
  const LEVELS = ["remember", "understand", "apply", "analyse"];

  // ---------- ids ----------
  const smallHash = (s) => {
    let h = 2166136261;
    for (let i = 0; i < s.length; i++) h = Math.imul(h ^ s.charCodeAt(i), 16777619);
    return (h >>> 0).toString(36);
  };
  const clean = (s) => String(s == null ? "" : s).replace(/\*\*/g, "").trim();
  // "Highest Common Factor (HCF)" -> "highest-common-factor-hcf". Headings in Gurmukhi or Devanagari have no Latin
  // letters, so those (and any that come out empty) get an id made from a hash of the heading.
  function kebab(heading) {
    const k = clean(heading).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
    return k.length >= 3 ? k.slice(0, 48).replace(/-+$/, "") : "t" + smallHash(clean(heading));
  }

  const keyOf = (cls, subject, chapterId, id) => `${cls}/${subject}/${chapterId}#${id}`;

  // ---------- the objectives of a chapter ----------
  // Derived objectives are cached per chapter object (text is built when asked, since it depends on the language).
  const derivedCache = new WeakMap();
  function derivedBase(ch) {
    if (derivedCache.has(ch)) return derivedCache.get(ch);
    const seen = new Set();
    const list = (ch.notes || []).map((n) => {
      let id = kebab(n.heading);
      for (let i = 2; seen.has(id); i++) id = kebab(n.heading) + "-" + i;
      seen.add(id);
      return { id, heading: clean(n.heading) };
    });
    derivedCache.set(ch, list);
    return list;
  }

  const chapterOf = (cls, subject, ch) => (typeof ch === "string" ? ((StudyData.chapters(cls, subject) || []).find((x) => x.id === ch) || null) : ch);

  // [{ id, text, topics, level, prereq, mistakes, derived, key }] for a chapter object (or chapter id) whose full file is loaded.
  function forChapter(cls, subject, chapter) {
    const ch = chapterOf(cls, subject, chapter);
    if (!ch) return [];
    const hand = StudyData.objectivesFor(cls, subject, ch.id);
    if (hand && hand.length)
      return hand.map((o) => ({ id: o.id, text: o.text, topics: o.topics || [], level: o.level || "understand", prereq: o.prereq || [], mistakes: o.mistakes || [], derived: false, key: keyOf(cls, subject, ch.id, o.id) }));
    return derivedBase(ch).map((d) => ({
      id: d.id,
      text: t("Understand: {topic}", { topic: d.heading }),
      topics: [d.heading],
      level: "understand",
      prereq: [],
      mistakes: [],
      derived: true,
      key: keyOf(cls, subject, ch.id, d.id),
    }));
  }

  // One objective by its key ("10/maths/real-numbers#hcf"), or null (content not loaded, or the objective was removed).
  function byKey(key) {
    const m = /^(\d+)\/([^/]+)\/([^/#]+)#(.+)$/.exec(String(key));
    if (!m) return null;
    return forChapter(Number(m[1]), m[2], m[3]).find((o) => o.id === m[4]) || null;
  }
  const parseKey = (key) => {
    const m = /^(\d+)\/([^/]+)\/([^/#]+)#(.+)$/.exec(String(key));
    return m && !StudyData.locked(m[2]) ? { cls: Number(m[1]), subject: m[2], chapter: m[3], obj: m[4] } : null; // (null for a subject the release lock hides)
  };

  // ---------- mapping a question to an objective ----------
  // Word overlap with each objective's text, topic headings and the notes under those headings; rarer words count more
  // (inverse document frequency across the chapter's objectives) and words in a heading count double. Deterministic.
  const STOP = new Set("the a an and or of to in on at is are was were be been it its this that these those with for as by from can you your we our they their he she his her them what which who whom how why when where does do did has have had not no yes will would should could may might than then so if but also into out up down about over under one two three four any all each both more most some such only very just".split(" "));
  function tokens(text) {
    const out = [];
    for (let w of clean(text).toLowerCase().match(/[\p{L}\p{N}\p{M}]+/gu) || []) {
      if (/^[a-z]+$/.test(w) && w.length > 3 && w.endsWith("s") && !w.endsWith("ss")) w = w.slice(0, -1);
      if (STOP.has(w) || w.length < 2 || (/^[a-z]+$/.test(w) && w.length < 3)) continue;
      out.push(w);
    }
    // Pairs of neighbouring words ("equal roots", "like fractions") tell objectives apart better than single words.
    for (let i = 0, n = out.length; i + 1 < n; i++) out.push(out[i] + " " + out[i + 1]);
    return out;
  }

  const bagCache = new WeakMap(); // chapter -> { sig, bags, idf }
  function bagsFor(cls, subject, ch, objs) {
    const sig = objs.map((o) => o.key).join("|");
    const hit = bagCache.get(ch);
    if (hit && hit.sig === sig) return hit;
    const bags = objs.map((o) => {
      const w = new Map();
      const add = (txt, weight) => tokens(txt).forEach((k) => w.set(k, Math.max(w.get(k) || 0, weight)));
      const notes = (ch.notes || []).filter((n) => o.topics.some((tp) => clean(tp) === clean(n.heading)));
      add(o.text, 3);
      notes.forEach((n) => {
        n.points.forEach((p) => add(p, 0.7));
        add(n.heading, 3);
      });
      o.topics.forEach((tp) => add(tp, 3));
      return w;
    });
    const df = new Map();
    bags.forEach((b) => b.forEach((_, k) => df.set(k, (df.get(k) || 0) + 1)));
    const idf = (k) => Math.log(1 + objs.length / (df.get(k) || 1));
    const made = { sig, bags, idf };
    bagCache.set(ch, made);
    return made;
  }

  // Scores of a question against each objective of the chapter (same order), for checking the mapping.
  function scores(cls, subject, chapter, q) {
    const ch = chapterOf(cls, subject, chapter);
    const objs = forChapter(cls, subject, ch);
    if (!ch || !objs.length) return [];
    const { bags, idf } = bagsFor(cls, subject, ch, objs);
    const right = q.options && q.answer != null ? q.options[q.answer] : "";
    const words = new Set(tokens([q.q, q.explain, right].join(" ")));
    return bags.map((b) => {
      let s = 0;
      words.forEach((k) => {
        if (b.has(k)) s += idf(k) * b.get(k);
      });
      return s / Math.pow(b.size || 1, 0.25);
    });
  }

  // The objective a question belongs to: q.obj when the question names one, else the best word match, else the first.
  function forQuestion(cls, subject, chapter, q) {
    const ch = chapterOf(cls, subject, chapter);
    const objs = forChapter(cls, subject, ch);
    if (!objs.length) return null;
    if (q && q.obj) {
      const named = objs.find((o) => o.id === q.obj);
      if (named) return named;
    }
    if (objs.length === 1) return objs[0];
    const sc = scores(cls, subject, ch, q || {});
    let best = 0;
    sc.forEach((s, i) => {
      if (s > sc[best]) best = i;
    });
    return objs[best];
  }

  // Objectives of a chapter that cover a notes heading.
  const forTopic = (cls, subject, chapter, heading) => forChapter(cls, subject, chapter).filter((o) => o.topics.some((tp) => clean(tp) === clean(heading)));

  return { LEVELS, kebab, keyOf, parseKey, forChapter, byKey, forQuestion, forTopic, scores, tokens };
})();
