// Derive: practice questions made AUTOMATICALLY from content the app already has (a chapter's key terms, its notes, the
// timeline events attached to it, and the India map data). Nothing here is hand-written, so none of it needs new teacher
// review; the wording of the questions is fixed by the templates below, and the facts come from the chapter itself.
//
//   Derive.forChapter(cls, subjectId, chapter /* object or id */, { kinds, count = 10, seed = 1 }) -> items[]
//     kinds: any of "meaning", "term", "tf", "blank", "match", "when", "first", "map" (default: all that apply)
//     MCQ-style item: { q, options: [4 strings], answer: index, explain, kind, ref: { cls, subject, chapter, key: null, from } }
//     "tf" item:      { q: statement, options: [True, False], answer: 0|1, explain, kind: "tf", tf: true|false, ref }
//     "blank" item:   { q: sentence with "_____", options: [4], answer, explain (the full sentence), kind: "blank", ref }
//     "match" item:   { kind: "match", pairs: [[left, right] x 4..6], ref }       (no options: for sheets and the match game)
//     Every item also has derived: true and level (1 easy ... 3 hard, for Quick-fire). The same seed gives the same items.
//   Derive.kinds(cls, subjectId, chapter) -> { kind: number of distinct items possible } for the kinds that apply (an object)
//   Derive.count(cls, subjectId)          -> total distinct auto-made questions for a subject ("match" sets are not counted)
//   Derive.load()                         -> Promise: loads the timeline data ("when" and "first" need it; call before reading kinds)
//
// Kinds
//   meaning  "What does <term> mean?"; 3 wrong meanings from other terms of the chapter (else of the same class and subject)
//   term     "Which word means: <meaning>?"; the reverse
//   tf       "<term>: <meaning>" (true) or with another term's meaning (false); true and false are balanced
//   blank    a sentence of the chapter's notes that has one of its key terms once; the term is blanked, the options are terms
//   when     "In which year did this happen: <event>?" from the chapter's timeline; options are nearby years of the same timeline
//   first    "Which happened first?" among 4 events of the timeline (BCE handled: years are negative numbers in the data)
//   map      capitals of India's states and Union Territories, for the few chapters about India's states (MAP_CHAPTERS below)
//   match    4 to 6 pairs: term-meaning, state-capital, or event-year
//
// Quality filters (a term or sentence that fails is simply not used): meanings of fewer than 3 or more than 30 words,
// a meaning that contains its own term (or a word-stem of it), duplicate terms or meanings, markdown/maths markers that would
// render badly, wrong options whose wording is close to the right one (so there is only one right answer), options of very
// different lengths, sentences of fewer than 6 or more than 30 words, a term that appears twice in the sentence or inside a
// longer term, "a/an" before the blank, a sentence that has a word-stem of the answer elsewhere, and years too close together.
//
// Language: the question wording follows the subject (hindi and hindipb in Hindi, punjabi in Punjabi, everything else in the
// app language through t()). Translations are in js/i18n.js. The release lock hides the locked subjects (js/release.js).

const Derive = (() => {
  const KINDS = ["meaning", "term", "tf", "blank", "match", "when", "first", "map"];

  // Every English template this file uses (js/i18n.js must have a Punjabi and a Hindi line for each; scripts/check-derive.js checks).
  const TEMPLATES = [
    "What does {term} mean?",
    "Which word means: “{meaning}”?",
    "{term} means: {meaning}",
    "That meaning is for {other}.",
    "True",
    "False",
    "In which year did this happen: {event}?",
    "Around which year did this happen: {event}?",
    "{event} happened in {year}.",
    "Which happened first?",
    "Earliest first: {list}",
    "What is the capital of {state}?",
    "{capital} is the capital of which state or Union Territory?",
    "The capital of {state} is {capital}.",
    "about {y}",
  ];

  // Chapters about India's states and Union Territories (Classes 4-10), where "map" questions are offered. Checked by hand.
  const MAP_CHAPTERS = new Set([
    "6/sstpb/our-india-in-the-world", // notes: "States and capital"
    "6/sstpb/how-maps-help-us", // political maps show states and capitals
    "7/sstpb/state-government", // a state's capital is the seat of government
    "8/sstpb/india-after-independence", // reorganisation of states
    "9/sstpb/geo-india-size-location", // India's size and location
    "10/sst/federalism", // India's states and Union Territories
  ]);
  // Entities left out because a capital is shared, double, renamed or the same as the name, so a plain question would mislead.
  const MAP_SKIP = new Set(["punjab", "haryana", "chandigarh", "puducherry", "jammukashmir", "dnhdd", "andaman", "delhi"]);

  // ---------- small helpers ----------
  const strip = (s) => String(s == null ? "" : s).replace(/\*\*/g, "").replace(/\s+/g, " ").trim();
  const clip = (s) => s.replace(/[\s.।!?;:,]+$/u, "");
  const words = (s) => s.split(/\s+/).filter(Boolean);
  const isW = (ch) => !!ch && /[\p{L}\p{M}\p{N}]/u.test(ch);
  // Characters that would render badly in the app (only **bold** is understood) or are part of maths/code notation.
  const BAD = /[`$\\<>{}^~|[\]_]|\*/;

  function hash32(str) {
    let h = 2166136261;
    for (let i = 0; i < str.length; i++) h = Math.imul(h ^ str.charCodeAt(i), 16777619);
    return h >>> 0;
  }
  const mix = (seed, str) => (Math.imul((seed >>> 0) || 1, 2654435761) ^ hash32(str)) >>> 0 || 1;
  function shuf(list, R) {
    const a = list.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(R.next() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  const langOf = (subject) => {
    const s = String(subject).replace(/^path-/, "");
    return s === "hindi" || s === "hindipb" ? "hi" : s === "punjabi" ? "pa" : "en";
  };
  // A template in the chapter's language. English text follows the app language (t()); Hindi and Punjabi chapters always use their own.
  function T(lang, s, vars) {
    if (lang === "en") return t(s, vars);
    const tab = typeof I18N !== "undefined" ? I18N[lang] : null;
    const text = (tab && tab[s]) || s;
    return vars ? text.replace(/\{(\w+)(?::[^|}]*\|[^}]*)?\}/g, (w, k) => (k in vars ? vars[k] : w)) : text;
  }

  // Word tokens for comparing two texts ("is one a copy of the other?").
  const STOP = new Set(
    ("the and for with from that this these those are was were been being has have had not but its their they them than then there which who what when where into also such can may will shall each both any all more most very " +
      "वाला वाली वाले होता होती होते जाता जाती जाते कहते कहलाता कहलाती जैसे किसी लिए द्वारा तथा " +
      "ਵਾਲਾ ਵਾਲੀ ਵਾਲੇ ਜਿਵੇਂ ਕਿਸੇ ਲਈ ਅਤੇ ਵਿੱਚ ਕਹਿੰਦੇ ਜਾਂਦਾ ਜਾਂਦੀ ਹੁੰਦਾ ਹੁੰਦੀ").split(" ")
  );
  const stem = (w) => (/^[a-z]+$/.test(w) && w.length > 4 ? w.replace(/(ing|ed|es|s)$/, "") : w);
  const toks = (s) => new Set((strip(s).toLowerCase().match(/[\p{L}\p{M}\p{N}]+/gu) || []).filter((w) => w.length > 2 && !STOP.has(w)).map(stem));
  function similar(a, b) {
    if (!a.size || !b.size) return false;
    let n = 0;
    for (const x of a) if (b.has(x)) n++;
    return n / Math.min(a.size, b.size) >= 0.6;
  }
  const base = (term) => term.replace(/\s*\([^)]*\)/g, "").trim();
  const hasWord = (hay, needle) => {
    for (let i = hay.indexOf(needle); i >= 0; i = hay.indexOf(needle, i + 1)) if (!isW(hay[i - 1]) && !isW(hay[i + needle.length])) return true;
    return false;
  };
  // Would meaning `m`'s text give away term `t`'s word (the term, or a word-stem of every long word of it, appears in the meaning)?
  // Both are term records (see termRecords).
  function gives(m, t) {
    if (!t.tl) return false;
    if (t.tl.length <= 4 ? hasWord(m.ml, t.tl) : m.ml.includes(t.tl)) return true;
    return t.stems.length > 0 && t.stems.every((st) => m.lw.some((x) => x.startsWith(st)));
  }
  const sameStem = (a, b) => !!a.sk && a.sk === b.sk;

  // ---------- a chapter's key terms ----------
  // { term, key, meaning, ok (usable for meaning questions), mt/tt (word sets), mwc/twc (word counts), ch }
  const TERMS = new WeakMap();
  function termRecords(ch) {
    let out = TERMS.get(ch);
    if (out) return out;
    out = [];
    const seen = new Set();
    const seenM = new Set();
    for (const x of ch.terms || []) {
      if (typeof International !== "undefined" && International.forLearner([x]).length === 0) continue;
      const term = strip(x.term);
      const meaning = strip(x.meaning);
      const key = term.toLowerCase();
      if (!term || term.length > 60 || BAD.test(term) || seen.has(key)) continue;
      seen.add(key);
      const wc = words(meaning).length;
      const tt = toks(term);
      const ml = meaning.toLowerCase();
      const tl = base(term).toLowerCase();
      const rec = { term, key, meaning, ok: false, mt: toks(meaning), tt, mwc: wc, twc: words(term).length, ch: ch.id, ml, lw: ml.match(/[a-z]+/g) || [], tl, stems: latinStems(term), sk: [...tt].sort().join(" ") };
      rec.ok = !BAD.test(meaning) && wc >= 3 && wc <= 30 && !seenM.has(ml) && !gives(rec, rec);
      if (rec.ok) seenM.add(ml);
      out.push(rec);
    }
    TERMS.set(ch, out);
    return out;
  }
  const POOL = new Map();
  // The same class and subject's other chapters' terms, as a pool of wrong options when a chapter has too few of its own.
  function subjectPool(cls, subject, chId) {
    const D = StudyData;
    if (!D.hasFull(cls, subject)) return [];
    let all = POOL.get(cls + "/" + subject);
    if (!all) {
      all = D.chapters(cls, subject).filter((c) => !c.sources).flatMap((c) => termRecords(c));
      POOL.set(cls + "/" + subject, all);
    }
    return all.filter((r) => r.ch !== chId);
  }

  // A few random members of a list (all of them if it is short), without repeats.
  function sample(list, k, R) {
    if (list.length <= k) return list.slice();
    const at = new Set();
    while (at.size < k) at.add(Math.floor(R.next() * list.length));
    return [...at].map((i) => list[i]);
  }

  // Wrong-option candidates for a term (cached): same chapter first (tier 0), then the rest of the subject (tier 1).
  const CANDS = new WeakMap();
  function candidatesFor(rec, ctx) {
    let c = CANDS.get(rec);
    if (c) return c;
    c = [[], []];
    const take = (list, tier) => {
      for (const d of list) {
        if (d === rec || d.key === rec.key || !d.ok) continue;
        if (similar(rec.mt, d.mt) || sameStem(rec, d) || gives(d, rec) || gives(rec, d)) continue;
        c[tier].push(d);
      }
    };
    take(ctx.recs, 0);
    take(ctx.pool, 1);
    c.n = c[0].length + c[1].length;
    CANDS.set(rec, c);
    return c;
  }
  // 3 wrong options for a term that don't look like each other (the term, or its meaning, as `field`); null if there are not 3.
  // Options of a length close to the right one come first, so the longest one is not always right.
  function pickWrong(R, rec, ctx, field) {
    const cands = candidatesFor(rec, ctx);
    const lk = field === "meaning" ? "mwc" : "twc";
    const step = field === "meaning" ? 5 : 1;
    const set = field === "meaning" ? "mt" : "tt";
    const chosen = [];
    for (const tier of [0, 1]) {
      const list = sample(cands[tier], 24, R)
        .map((d) => ({ d, b: Math.floor(Math.abs(d[lk] - rec[lk]) / step) + R.next() * 0.5 }))
        .sort((a, b) => a.b - b.b);
      for (const { d } of list) {
        if (chosen.length >= 3) break;
        // term options: not a part of the right term or a longer form of it ("Kaal" next to "Vartamaan kaal" would both fit)
        const nested = (a, b) => field === "term" && (a.key.includes(b.key) || b.key.includes(a.key));
        if (nested(rec, d)) continue;
        if (chosen.every((o) => o.key !== d.key && !nested(o, d) && !similar(o[set], d[set]) && o[field].toLowerCase() !== d[field].toLowerCase())) chosen.push(d);
      }
      if (chosen.length >= 3) break;
    }
    return chosen.length === 3 ? chosen : null;
  }

  // ---------- blanks: sentences of the notes ----------
  const NOSPLIT = /^(?:[A-Z]|Dr|Mr|Mrs|Ms|St|No|vs|etc|Fig|Prof|Sr|Jr|Rs|Gen|Col|Capt|c|ca|approx)\.$/;
  function sentencesOf(point) {
    const text = strip(point);
    const out = [];
    let start = 0;
    const re = /[.!?।]["”')]*\s+/gu;
    let m;
    while ((m = re.exec(text))) {
      const end = m.index + m[0].trimEnd().length;
      const last = text.slice(start, end).split(/\s+/).pop();
      const next = text[m.index + m[0].length];
      if (NOSPLIT.test(last) || !next || !/[\p{Lu}\p{Lo}\p{N}"“(]/u.test(next)) continue;
      out.push(text.slice(start, end));
      start = m.index + m[0].length;
    }
    out.push(text.slice(start));
    return out;
  }
  // Positions where `needle` stands alone as a word in `hay` (both lower-case).
  function findAll(hay, needle) {
    const at = [];
    for (let i = hay.indexOf(needle); i >= 0; i = hay.indexOf(needle, i + 1)) {
      const a = hay[i - 1];
      const b = hay[i + needle.length];
      if (!isW(a) && !isW(b) && a !== "-" && b !== "-" && a !== "/" && b !== "/") at.push(i);
    }
    return at;
  }
  const latinStems = (term) => (base(term).toLowerCase().match(/[a-z]{5,}/g) || []).map((w) => w.slice(0, Math.max(4, w.length - 3)));

  const BLANKS = new WeakMap();
  // { sentence, start, end, rec, lower } for every note sentence with exactly one key term (not inside a longer term).
  function blankCandidates(ch, lang) {
    let out = BLANKS.get(ch);
    if (out) return out;
    out = [];
    const recs = termRecords(ch).filter((r) => r.term.length >= (lang === "en" ? 3 : 2) && !/\(/.test(r.term));
    const seen = new Set();
    for (const n of ch.notes || [])
      for (const p of n.points || [])
        for (const raw of sentencesOf(p)) {
          const s = strip(raw);
          const wc = words(s).length;
          if (wc < 6 || wc > 30 || BAD.test(s) || /=/.test(s) || !/^[\p{Lu}\p{Lo}\p{N}"“'(]/u.test(s) || seen.has(s)) continue;
          const hl = s.toLowerCase();
          if (hl.length !== s.length) continue;
          const hits = [];
          for (const r of recs) for (const i of findAll(hl, r.term.toLowerCase())) hits.push({ r, s: i, e: i + r.term.length });
          for (const r of recs) {
            const mine = hits.filter((h) => h.r === r);
            if (mine.length !== 1) continue;
            const h = mine[0];
            if (hits.some((o) => o.r !== r && o.s <= h.s && o.e >= h.e && o.e - o.s > h.e - h.s)) continue;
            const before = (words(s.slice(0, h.s)).pop() || "").replace(/^[^\p{L}]+/u, "");
            if (lang === "en" && /^(a|an)$/i.test(before)) continue;
            // a word-stem of the answer elsewhere in the sentence would give it away
            const rest = (s.slice(0, h.s) + " " + s.slice(h.e)).toLowerCase();
            const stems = latinStems(r.term);
            const rw = rest.match(/[a-z]+/g) || [];
            if (stems.length && stems.every((st) => rw.some((x) => x.startsWith(st)))) continue;
            out.push({ sentence: s, start: h.s, end: h.e, rec: r, lower: s[h.s] !== s[h.s].toUpperCase() });
            seen.add(s);
          }
        }
    BLANKS.set(ch, out);
    return out;
  }
  // Wrong terms for a blank: not in the sentence, not part of the answer (or the reverse), a similar length.
  function blankWrong(R, cand, ctx) {
    const a = cand.rec;
    const sl = cand.sentence.toLowerCase();
    const good = (d) => !/\(/.test(d.term) && d.term.length >= 3 && d.key !== a.key && !sl.includes(d.key) && !a.key.includes(d.key) && !d.key.includes(a.key) && !sameStem(a, d);
    const chosen = [];
    for (const list of [ctx.light, ctx.poolLight]) {
      const found = [];
      const small = list.length <= 60 ? shuf(list, R) : null;
      for (let tries = 0; tries < (small ? small.length : 60) && found.length < 14; tries++) {
        const d = small ? small[tries] : list[Math.floor(R.next() * list.length)];
        if (!found.includes(d) && good(d)) found.push(d);
      }
      const sorted = found.map((d) => ({ d, b: Math.abs(d.twc - a.twc) + R.next() * 0.5 })).sort((x, y) => x.b - y.b);
      for (const { d } of sorted) {
        if (chosen.length >= 3) break;
        if (chosen.every((o) => o.key !== d.key && !o.key.includes(d.key) && !d.key.includes(o.key) && !sameStem(o, d))) chosen.push(d);
      }
      if (chosen.length >= 3) break;
    }
    return chosen.length === 3 ? chosen : null;
  }
  // The option as shown: capitalised when the blank starts the sentence, otherwise exactly as the glossary writes it.
  // (Lower-casing mid-sentence would also lower-case names: "Xuanzang" must stay "Xuanzang".)
  function fit(opt, cand) {
    if (cand.start === 0 && /^[a-z]/.test(opt)) return opt[0].toUpperCase() + opt.slice(1);
    return opt;
  }

  // ---------- timeline events ----------
  const yt = (y) => (y < 0 ? `${-y} BCE` : y < 1000 ? `${y} CE` : String(y));
  function eventList(cls, subject, ch) {
    if (ch.sources || typeof StudyData.timelinesFor !== "function") return [];
    const raw = StudyData.timelinesFor(cls, subject, ch.id).filter((e) => Number.isFinite(e.year) && e.label && !/\d{3,}/.test(e.label));
    const count = {};
    raw.forEach((e) => (count[e.year] = (count[e.year] || 0) + 1));
    return raw
      .filter((e) => count[e.year] === 1) // two events in one year cannot be ordered
      .map((e) => ({ year: e.year, label: strip(e.label), when: e.when || "", approx: /^c\.|about|circa/i.test(e.when || ""), range: /\d\s*[-–]\s*\d/.test(e.when || "") }));
  }
  const yearShown = (e, lang) => (e.range ? e.when : e.approx ? T(lang, "about {y}", { y: yt(e.year) }) : yt(e.year));
  const gap = (a, b) => (a.approx || a.range || b.approx || b.range ? 10 : 1);
  // The 3 nearest other years that are not so close that they could also be right; null if there are not 3.
  function whenOptions(e, list) {
    const near = list.filter((o) => o !== e && Math.abs(o.year - e.year) >= gap(e, o)).sort((a, b) => Math.abs(a.year - e.year) - Math.abs(b.year - e.year));
    return near.length >= 3 ? near.slice(0, 3) : null;
  }

  // ---------- the India map ----------
  function mapEntities() {
    if (typeof IndiaMap === "undefined" || !IndiaMap.STATES) return [];
    return IndiaMap.STATES.filter((s) => !MAP_SKIP.has(s.id) && s.capital && !/[()]/.test(s.capital)).map((s) => ({ id: s.id, name: s.name, capital: s.capital, region: s.region }));
  }
  const mapOn = (cls, subject, id) => MAP_CHAPTERS.has(`${cls}/${subject}/${id}`);

  // ---------- chapter context ----------
  function resolve(cls, subjectId, chapter) {
    const D = StudyData;
    if (!subjectId || (typeof D.locked === "function" && D.locked(subjectId))) return null;
    let ch = chapter;
    if (typeof chapter === "string") ch = D.chapters(cls, subjectId).find((c) => c.id === chapter);
    if (!ch || ch.sources || !Array.isArray(ch.terms)) return null; // a chapter that is only in the index has no terms yet
    return ch;
  }
  const CTX = new WeakMap();
  function context(cls, subjectId, ch) {
    const lang = langOf(subjectId);
    // The timeline data may load after the chapter does, and the International board changes what terms are used: rebuild then.
    const raw = typeof StudyData.timelinesFor === "function" ? StudyData.timelinesFor(cls, subjectId, ch.id) : null;
    const intl = typeof International !== "undefined" && International.on();
    let ctx = CTX.get(ch);
    if (ctx && ctx.raw === raw && ctx.intl === intl && ctx.cls === cls && ctx.subject === subjectId) return ctx;
    const recs = termRecords(ch);
    const poolAll = subjectPool(cls, subjectId, ch.id);
    ctx = { cls, subject: subjectId, lang, ch, recs, raw, intl, pool: poolAll.filter((r) => r.ok), light: recs, poolLight: poolAll, events: eventList(cls, subjectId, ch) };
    ctx.mapOn = mapOn(cls, subjectId, ch.id) && mapEntities().length >= 8;
    CTX.set(ch, ctx);
    return ctx;
  }
  const eligible = (ctx) => ctx.recs.filter((r) => r.ok && candidatesFor(r, ctx).n >= 3);
  const blankOk = (ctx) => blankCandidates(ctx.ch, ctx.lang).filter((c) => (c.good === undefined ? (c.good = !!blankWrong(Gen.rng(1), c, ctx)) : c.good));
  const choose4 = (n) => (n < 4 ? 0 : (n * (n - 1) * (n - 2) * (n - 3)) / 24);

  function kindsOf(ctx) {
    if (ctx.kinds) return ctx.kinds;
    const out = {};
    ctx.kinds = out;
    const el = eligible(ctx);
    if (el.length) {
      out.meaning = el.length;
      out.term = el.length;
      out.tf = el.length * 2;
    }
    const bl = blankOk(ctx).length;
    if (bl) out.blank = bl;
    const ev = ctx.events;
    const wh = ev.filter((e) => !e.range && whenOptions(e, ev)).length;
    if (wh) out.when = wh;
    if (ev.length >= 4 && GEN.first(ctx, Gen.rng(1), 3).length) out.first = Math.min(choose4(ev.length), ev.length);
    if (ctx.mapOn) out.map = mapEntities().length * 2;
    let match = 0;
    if (ctx.recs.filter((r) => r.ok && r.mwc <= 18).length >= 4) match += Math.max(1, Math.floor(ctx.recs.filter((r) => r.ok && r.mwc <= 18).length / 5));
    if (ctx.mapOn) match += 1;
    if (ev.length >= 4) match += 1;
    if (match && GEN.match(ctx, Gen.rng(1), 3).length) out.match = match;
    return out;
  }

  // ---------- making items ----------
  function finish(ctx, item) {
    const subj = typeof StudyData.subject === "function" ? StudyData.subject(ctx.subject) : null;
    return { ...item, derived: true, ref: { cls: ctx.cls, subject: ctx.subject, chapter: ctx.ch.id, key: null, from: `${subj ? subj.short : ctx.subject} · ${ctx.ch.title}` } };
  }
  function mcq(R, right, wrong) {
    const opts = shuf([{ t: right, ok: true }, ...wrong.map((t) => ({ t, ok: false }))], R);
    const texts = opts.map((o) => o.t);
    if (texts.some((x) => !x || !String(x).trim()) || new Set(texts.map((x) => String(x).trim().toLowerCase())).size !== 4) return null;
    return { options: texts, answer: opts.findIndex((o) => o.ok) };
  }

  const GEN = {
    meaning(ctx, R, n) {
      const out = [];
      for (const r of shuf(eligible(ctx), R)) {
        if (out.length >= n) break;
        const w = pickWrong(R, r, ctx, "meaning");
        const m = w && mcq(R, r.meaning, w.map((d) => d.meaning));
        if (m) out.push({ q: T(ctx.lang, "What does {term} mean?", { term: r.term }), ...m, explain: T(ctx.lang, "{term} means: {meaning}", { term: r.term, meaning: r.meaning }), kind: "meaning", level: 1 });
      }
      return out;
    },
    term(ctx, R, n) {
      const out = [];
      for (const r of shuf(eligible(ctx), R)) {
        if (out.length >= n) break;
        const w = pickWrong(R, r, ctx, "term");
        const m = w && mcq(R, r.term, w.map((d) => d.term));
        if (m) out.push({ q: T(ctx.lang, "Which word means: “{meaning}”?", { meaning: clip(r.meaning) }), ...m, explain: T(ctx.lang, "{term} means: {meaning}", { term: r.term, meaning: r.meaning }), kind: "term", level: 2 });
      }
      return out;
    },
    tf(ctx, R, n) {
      const recs = shuf(eligible(ctx), R);
      const flip = R.int(0, 1);
      const out = [];
      for (let i = 0; i < recs.length * 2 && out.length < n; i++) {
        const r = recs[i % recs.length];
        const truth = ((i % recs.length) + flip + Math.floor(i / recs.length)) % 2 === 0;
        const cands = candidatesFor(r, ctx);
        if (!truth && !cands.n) continue;
        const other = truth ? null : sample(cands[0].length ? cands[0] : cands[1], 1, R)[0];
        const explain = T(ctx.lang, "{term} means: {meaning}", { term: r.term, meaning: r.meaning }) + (other ? " " + T(ctx.lang, "That meaning is for {other}.", { other: other.term }) : "");
        out.push({ q: `${r.term}: ${truth ? r.meaning : other.meaning}`, options: [T(ctx.lang, "True"), T(ctx.lang, "False")], answer: truth ? 0 : 1, explain, kind: "tf", tf: truth, level: 2 });
      }
      return out;
    },
    blank(ctx, R, n) {
      const out = [];
      for (const c of shuf(blankOk(ctx), R)) {
        if (out.length >= n) break;
        const w = blankWrong(R, c, ctx);
        if (!w) continue;
        const q = c.sentence.slice(0, c.start) + "_____" + c.sentence.slice(c.end);
        const m = mcq(R, fit(c.rec.term, c), w.map((d) => fit(d.term, c)));
        if (m && !hasWord(q.toLowerCase(), c.rec.key)) out.push({ q, ...m, explain: c.sentence, kind: "blank", level: 2 });
      }
      return out;
    },
    when(ctx, R, n) {
      const ev = ctx.events;
      const out = [];
      for (const e of shuf(ev.filter((x) => !x.range), R)) {
        if (out.length >= n) break;
        const w = whenOptions(e, ev);
        if (!w) continue;
        const m = mcq(R, yt(e.year), w.map((o) => yt(o.year)));
        if (!m) continue;
        const q = T(ctx.lang, e.approx ? "Around which year did this happen: {event}?" : "In which year did this happen: {event}?", { event: e.label });
        out.push({ q, ...m, explain: T(ctx.lang, "{event} happened in {year}.", { event: e.label, year: yearShown(e, ctx.lang) }), kind: "when", level: 3 });
      }
      return out;
    },
    first(ctx, R, n) {
      const ev = ctx.events;
      const out = [];
      const seen = new Set();
      if (ev.length < 4) return out;
      for (let tries = 0; tries < n * 30 && out.length < n; tries++) {
        const four = shuf(ev, R).slice(0, 4).sort((a, b) => a.year - b.year);
        if (four[1].year - four[0].year < gap(four[0], four[1])) continue;
        const key = four.map((e) => e.label).sort().join("|");
        if (seen.has(key)) continue;
        seen.add(key);
        const m = mcq(R, four[0].label, four.slice(1).map((e) => e.label));
        if (!m) continue;
        const list = four.map((e) => `${e.label} (${yearShown(e, ctx.lang)})`).join("; ");
        out.push({ q: T(ctx.lang, "Which happened first?"), ...m, explain: T(ctx.lang, "Earliest first: {list}", { list }), kind: "first", level: 3 });
      }
      return out;
    },
    map(ctx, R, n) {
      const all = mapEntities();
      const out = [];
      const jobs = shuf(all.flatMap((s) => [[s, "capital"], [s, "state"]]), R);
      for (const [s, dir] of jobs) {
        if (out.length >= n) break;
        // two of the wrong ones from the same part of the country (the nearer, the harder), the rest anywhere
        const others = shuf(all.filter((o) => o.id !== s.id), R);
        const near = others.filter((o) => o.region === s.region);
        const far = others.filter((o) => o.region !== s.region);
        const wrong = [...near.slice(0, 2), ...far, ...near.slice(2)].slice(0, 3);
        const vars = { state: s.name, capital: s.capital };
        const m = dir === "capital" ? mcq(R, s.capital, wrong.map((o) => o.capital)) : mcq(R, s.name, wrong.map((o) => o.name));
        if (m) out.push({ q: dir === "capital" ? T(ctx.lang, "What is the capital of {state}?", vars) : T(ctx.lang, "{capital} is the capital of which state or Union Territory?", vars), ...m, explain: T(ctx.lang, "The capital of {state} is {capital}.", vars), kind: "map", level: 1 });
      }
      return out;
    },
    match(ctx, R, n) {
      const flavours = [];
      const okTerms = ctx.recs.filter((r) => r.ok && r.mwc <= 18);
      if (okTerms.length >= 4) flavours.push("terms");
      if (ctx.mapOn) flavours.push("map");
      if (ctx.events.length >= 4) flavours.push("when");
      const out = [];
      const seen = new Set();
      for (let i = 0; flavours.length && i < n * 5 && out.length < n; i++) {
        const f = flavours[i % flavours.length];
        const size = R.int(4, 6);
        let pairs = [];
        if (f === "terms") {
          const picked = [];
          for (const r of shuf(okTerms, R)) {
            if (picked.length >= size) break;
            if (picked.every((o) => !similar(o.mt, r.mt) && !gives(o, r) && !gives(r, o) && !sameStem(o, r))) picked.push(r);
          }
          pairs = picked.map((r) => [r.term, r.meaning]);
        } else if (f === "map") {
          pairs = shuf(mapEntities(), R).slice(0, size).map((s) => [s.name, s.capital]);
        } else {
          pairs = shuf(ctx.events.filter((e) => !e.range), R).slice(0, size).sort((a, b) => a.year - b.year).map((e) => [e.label, yt(e.year)]);
        }
        const key = pairs.map((p) => p[0]).sort().join("|");
        if (pairs.length < 4 || seen.has(key)) continue;
        seen.add(key);
        out.push({ kind: "match", pairs, level: 2 });
      }
      return out;
    },
  };

  // ---------- public ----------
  function forChapter(cls, subjectId, chapter, opts = {}) {
    const ch = resolve(cls, subjectId, chapter);
    if (!ch) return [];
    const count = opts.count == null ? 10 : opts.count;
    const seed = opts.seed == null ? 1 : opts.seed;
    const ctx = context(cls, subjectId, ch);
    const avail = kindsOf(ctx);
    const wanted = (opts.kinds && opts.kinds.length ? opts.kinds : KINDS).filter((k, i, a) => KINDS.includes(k) && avail[k] && a.indexOf(k) === i);
    const key = `${cls}/${subjectId}/${ch.id}`;
    const lists = wanted.map((k) => GEN[k](ctx, Gen.rng(mix(seed, key + k)), count).map((it) => finish(ctx, it)));
    // one of each kind in turn, until `count`
    const out = [];
    const seen = new Set();
    for (let i = 0; out.length < count && lists.some((l) => i < l.length); i++)
      for (const l of lists) {
        const it = l[i];
        if (!it || out.length >= count) continue;
        const id = it.kind + "|" + (it.q || it.pairs.map((p) => p[0]).join("|")) + "|" + (it.options ? it.options[it.answer] : "");
        if (!seen.has(id)) {
          seen.add(id);
          out.push(it);
        }
      }
    return out;
  }

  function kinds(cls, subjectId, chapter) {
    const ch = resolve(cls, subjectId, chapter);
    return ch ? { ...kindsOf(context(cls, subjectId, ch)) } : {};
  }

  function count(cls, subjectId) {
    const D = StudyData;
    if (!D.hasFull(cls, subjectId)) return 0;
    let n = 0;
    for (const ch of D.chapters(cls, subjectId)) {
      const k = kinds(cls, subjectId, ch);
      for (const [name, v] of Object.entries(k)) if (name !== "match") n += v;
    }
    return n;
  }

  const load = () => (typeof StudyData.loadTimelines === "function" ? StudyData.loadTimelines() : Promise.resolve(true));

  return { KINDS, TEMPLATES, MAP_CHAPTERS, forChapter, kinds, count, load, langOf, mapEntities };
})();
if (typeof module !== "undefined" && module.exports) module.exports = Derive;
