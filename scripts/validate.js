#!/usr/bin/env node
// Checks study content files against the format in CONTENT_GUIDE.md.
// Usage: node scripts/validate.js [data/class10/maths.js ...]
// With no arguments, every file under data/class*/ is checked.

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.join(__dirname, "..");
let files = process.argv.slice(2).filter((f) => !/[\/\\](practice|diagrams|paths)[\/\\]/.test(f) && path.basename(f) !== "index.js" && path.basename(f) !== "objectives.js" && path.basename(f) !== "glossary.js");
if (process.argv.length <= 2) {
  files = fs
    .readdirSync(path.join(root, "data"))
    .filter((d) => /^class\d+$/.test(d))
    .flatMap((d) =>
      fs
        .readdirSync(path.join(root, "data", d))
        .filter((f) => f.endsWith(".js") && f !== "index.js" && f !== "objectives.js")
        .map((f) => path.join("data", d, f))
    );
}

const BANNED_OPTION = /all of (the )?(above|these)|none of (the )?(above|these)|both (a|b)\b|both \(a\)|\(a\) and \(|neither (of )?(the above|these|a nor b|option)|उपर्युक्त सभी|उपरोक्त सभी|इनमें से कोई नहीं|ये सभी|सभी सही|ਉਪਰੋਕਤ ਸਾਰੇ|ਉਪਰੋਕਤ ਸਭ|ਇਹਨਾਂ ਵਿੱਚੋਂ ਕੋਈ ਨਹੀਂ|ਇਨ੍ਹਾਂ ਵਿੱਚੋਂ ਕੋਈ ਨਹੀਂ|ਸਾਰੇ ਹੀ/i;
const STATUSES = ["draft", "subject-review", "curriculum-review", "language-review", "approved", "published", "needs-revision"];
const isStr = (v) => typeof v === "string" && v.trim().length > 0;

let errorCount = 0;
let warnCount = 0;
const summary = [];

// Checks a list of chapters (the same rules for a subject file and for a path level's own chapter).
// Returns the number of quiz questions.
function checkChapters(chapters, subj, err, warn) {
  const ids = new Set();
  const norm = (t) => String(t).replace(/\*\*/g, "").trim().toLowerCase();
  const seenQ = new Map();
  let quizCount = 0;
  chapters.forEach((ch, i) => {
    const at = `chapter ${i + 1} (${ch && ch.id})`;
    if (!isStr(ch.id) || !/^[a-z0-9]+(-[a-z0-9]+)*$/.test(ch.id)) err(at, "id must be kebab-case");
    if (ids.has(ch.id)) err(at, "duplicate id");
    ids.add(ch.id);
    for (const k of ["title", "section", "summary"]) if (!isStr(ch[k])) err(at, `${k} is required`);
    if (ch.source !== undefined && !isStr(ch.source)) err(at, "source must be a string, e.g. \"Ganita Prakash Ch 3, pp. 45–62\"");

    if (!Array.isArray(ch.notes) || ch.notes.length < 2) err(at, "notes needs at least 2 topics");
    else
      ch.notes.forEach((n, j) => {
        if (!isStr(n.heading)) err(`${at} notes[${j}]`, "heading is required");
        if (!Array.isArray(n.points) || n.points.length < 2 || !n.points.every(isStr))
          err(`${at} notes[${j}]`, "points needs at least 2 non-empty strings");
      });

    if (ch.formulas !== undefined && (!Array.isArray(ch.formulas) || !ch.formulas.every(isStr)))
      err(at, "formulas must be an array of strings");

    if (!Array.isArray(ch.terms) || ch.terms.length < 3) err(at, "terms needs at least 3 items");
    else
      ch.terms.forEach((t, j) => {
        if (!isStr(t.term) || !isStr(t.meaning)) err(`${at} terms[${j}]`, "term and meaning are required");
      });
    // Saved flashcard progress is keyed by the term's text, so terms must be unique in a chapter.
    if (Array.isArray(ch.terms) && new Set(ch.terms.map((t) => norm(t.term))).size !== ch.terms.length) err(at, "two terms have the same text");

    if (ch.examples !== undefined) {
      if (!Array.isArray(ch.examples)) err(at, "examples must be an array");
      else
        ch.examples.forEach((ex, j) => {
          if (!isStr(ex.q) || !isStr(ex.answer) || !Array.isArray(ex.steps) || !ex.steps.every(isStr))
            err(`${at} examples[${j}]`, "needs q, steps (array of strings) and answer");
        });
    }

    if (ch.qa !== undefined) {
      if (!Array.isArray(ch.qa)) err(at, "qa must be an array");
      else
        ch.qa.forEach((x, j) => {
          if (!isStr(x.q) || !isStr(x.a)) err(`${at} qa[${j}]`, "needs q and a");
        });
    } else warn(at, "no qa (short-answer questions)");

    if (!Array.isArray(ch.quiz) || ch.quiz.length < 5) err(at, "quiz needs at least 5 questions");
    else
      ch.quiz.forEach((q, j) => {
        const qat = `${at} quiz[${j}]`;
        quizCount++;
        if (!isStr(q.q)) err(qat, "q is required");
        if (!Array.isArray(q.options) || q.options.length !== 4 || !q.options.every(isStr))
          err(qat, "options must be exactly 4 non-empty strings");
        else {
          // English questions may test capital letters, so there "Sunday" and "sunday" count as different.
          const key = (o) => (subj.startsWith("english") ? o.trim() : o.trim().toLowerCase());
          if (new Set(q.options.map(key)).size !== 4) err(qat, "options must be distinct");
          q.options.forEach((o) => {
            if (BANNED_OPTION.test(o)) err(qat, `option "${o}" breaks when options are shuffled`);
          });
        }
        if (!Number.isInteger(q.answer) || q.answer < 0 || q.answer > 3) err(qat, "answer must be 0–3");
        if (!isStr(q.explain)) err(qat, "explain is required");
        // Saved mistakes are keyed by the question's text and options, so a repeat in the same chapter is an error.
        // (Same wording with different options is fine.)
        const ident = norm([q.q, ...(q.options || []).slice().sort()].join("|"));
        const prev = seenQ.get(ident);
        if (prev === ch.id) err(qat, "same question and options appear twice in this chapter");
        else if (prev) warn(qat, `same question and options also appear in chapter "${prev}"`);
        else seenQ.set(ident, ch.id);
        if (isStr(q.explain) && Array.isArray(q.options) && norm(q.explain) === norm(q.options[q.answer] || ""))
          warn(qat, "explain only repeats the answer; say why it is right");
      });

    const all = JSON.stringify(ch);
    if (/<[a-z][^>]*>/i.test(all)) err(at, "contains HTML tags, use plain text");
    if (/\\(frac|sqrt|times|theta|pi|alpha|circ)\b|\$[^$]+\$/.test(all)) err(at, "contains LaTeX, use Unicode");
  });
  return quizCount;
}

for (const file of files) {
  const errors = [];
  const warns = [];
  const err = (where, msg) => errors.push(`${where}: ${msg}`);
  const warn = (where, msg) => warns.push(`${where}: ${msg}`);

  const ctx = { globalThis: {} };
  ctx.globalThis = ctx;
  vm.createContext(ctx);
  try {
    vm.runInContext(fs.readFileSync(path.join(root, "data", "registry.js"), "utf8"), ctx);
    vm.runInContext(fs.readFileSync(path.resolve(root, file), "utf8"), ctx, { filename: file });
  } catch (e) {
    console.log(`\n✗ ${file}\n  Could not load: ${e.message}`);
    errorCount++;
    continue;
  }

  const content = ctx.StudyData.content;
  const entries = [];
  for (const cls of Object.keys(content)) {
    for (const subj of Object.keys(content[cls])) entries.push({ cls, subj, data: content[cls][subj] });
  }
  if (entries.length !== 1) err("file", `expected exactly one StudyData.add(...) call, found ${entries.length}`);

  for (const { cls, subj, data } of entries) {
    const expectedDir = `class${cls}`;
    if (!file.includes(expectedDir)) warn("file", `adds class ${cls} content but lives in ${path.dirname(file)}`);
    if (!ctx.StudyData.subject(subj)) err("file", `unknown subject id "${subj}"`);
    else if (![ctx.StudyData.catalog, ...Object.values(ctx.StudyData.boardCatalog)].some((cat) => (cat[cls] || []).includes(subj)))
      err("file", `subject "${subj}" is not in any Class ${cls} catalog in data/registry.js`);
    if (path.basename(file, ".js") !== subj) err("file", `file name should be ${subj}.js`);
    if (!data || !Array.isArray(data.chapters) || data.chapters.length === 0) {
      err("file", "chapters must be a non-empty array");
      continue;
    }

    const sy = data.syllabus;
    if (!sy || typeof sy !== "object") err("file", "syllabus is required (see CONTENT_GUIDE.md)");
    else {
      if (!isStr(sy.board)) err("syllabus", "board is required");
      if (!["textbook", "older-book", "topic"].includes(sy.match)) err("syllabus", 'match must be "textbook", "older-book" or "topic"');
      if (!Array.isArray(sy.books) || !sy.books.every(isStr)) err("syllabus", "books must be an array of book titles");
      else if (sy.match !== "topic" && sy.books.length === 0) err("syllabus", "name the book(s) this content follows");
      if (sy.reviewed !== false && !/^\d{4}-\d{2}-\d{2}/.test(String(sy.reviewed))) err("syllabus", "reviewed must be false or the review date (YYYY-MM-DD, reviewer)");
      // Content review state (CONTENT_GUIDE.md): optional; without it, reviewed: false is "draft" and a review date is "published".
      if (sy.status !== undefined) {
        if (!STATUSES.includes(sy.status)) err("syllabus", `status must be one of ${STATUSES.join(", ")}`);
        else if (["approved", "published"].includes(sy.status) && sy.reviewed === false) err("syllabus", `status "${sy.status}" needs reviewed to be the review date`);
        else if (["draft", "subject-review", "curriculum-review", "language-review"].includes(sy.status) && sy.reviewed !== false) warn("syllabus", `status "${sy.status}" but reviewed has a date; set reviewed: false or move the status on`);
      }
    }

    const quizCount = checkChapters(data.chapters, subj, err, warn);
    summary.push(`class ${cls} ${subj}: ${data.chapters.length} chapters, ${quizCount} quiz questions`);
  }

  errorCount += errors.length;
  warnCount += warns.length;
  console.log(`\n${errors.length ? "✗" : "✓"} ${file}`);
  errors.forEach((e) => console.log(`  ERROR ${e}`));
  warns.forEach((w) => console.log(`  warn  ${w}`));
}

// ---------- practice banks ----------
const practiceFiles = fs
  .readdirSync(path.join(root, "data"))
  .filter((d) => /^class\d+$/.test(d) && fs.existsSync(path.join(root, "data", d, "practice")))
  .flatMap((d) => fs.readdirSync(path.join(root, "data", d, "practice")).filter((f) => f.endsWith(".js")).map((f) => path.join("data", d, "practice", f)))
  .filter((f) => process.argv.length <= 2 || process.argv.slice(2).includes(f));
const AR_OPTION = /^(Both A and R|A is true|A is false)/;
// Options are shuffled, so an explanation must not point at an option by position.
const POSITIONAL = /\b(option|choice)\s*\(?[a-d1-4]\)?(?![\w-])|\b(first|second|third|fourth|last) (option|choice)\b|(पहला|दूसरा|तीसरा|चौथा|पहले|दूसरे|तीसरे|चौथे) विकल्प|(ਪਹਿਲਾ|ਦੂਜਾ|ਤੀਜਾ|ਚੌਥਾ|ਪਹਿਲੇ|ਦੂਜੇ|ਤੀਜੇ|ਚੌਥੇ) ਵਿਕਲਪ/i;
for (const file of practiceFiles) {
  const errors = [];
  const warns = [];
  const err = (where, msg) => errors.push(`${where}: ${msg}`);
  const warn = (where, msg) => warns.push(`${where}: ${msg}`);
  const m = /class(\d+)[\/\\]practice[\/\\](\w+)-(\d+)\.js$/.exec(file);
  const ctx = { globalThis: {} };
  ctx.globalThis = ctx;
  vm.createContext(ctx);
  try {
    if (!m) throw new Error("file must be named {subject}-{part}.js");
    vm.runInContext(fs.readFileSync(path.join(root, "data", "registry.js"), "utf8"), ctx);
    vm.runInContext(fs.readFileSync(path.join(root, "data", `class${m[1]}`, `${m[2]}.js`), "utf8"), ctx);
    vm.runInContext(fs.readFileSync(path.resolve(root, file), "utf8"), ctx, { filename: file });
  } catch (e) {
    console.log(`\n✗ ${file}\n  Could not load: ${e.message}`);
    errorCount++;
    continue;
  }
  const [cls, subj, part] = [Number(m[1]), m[2], Number(m[3])];
  const parts = (ctx.StudyData.practiceCatalog[cls] || {})[subj] || 0;
  if (part > parts) warn("file", `practiceCatalog in data/registry.js lists ${parts} part(s) for class ${cls} ${subj}, so this file won't load yet`);
  const chIds = new Set(ctx.StudyData.chapters(cls, subj).map((c) => c.id));
  const bank = ctx.StudyData;
  let mcqN = 0, wN = 0, longestRight = 0;
  const seen = new Set();
  const norm = (t) => String(t).replace(/\*\*/g, "").trim().toLowerCase();
  for (const chId of chIds) {
    const p = bank.practiceFor(cls, subj, chId);
    p.mcq.forEach((q, j) => {
      const at = `${chId} mcq[${j}]`;
      mcqN++;
      if (!isStr(q.q)) err(at, "q is required");
      if (!Array.isArray(q.options) || q.options.length !== 4 || !q.options.every(isStr)) err(at, "options must be exactly 4 non-empty strings");
      else {
        if (new Set(q.options.map((o) => (subj.startsWith("english") ? o.trim() : norm(o)))).size !== 4) err(at, "options must be distinct");
        q.options.forEach((o) => {
          if (!q.keepOrder && (BANNED_OPTION.test(o) || AR_OPTION.test(o))) err(at, `option "${o}" needs keepOrder: true (or rewrite it)`);
        });
      }
      if (!Number.isInteger(q.answer) || q.answer < 0 || q.answer > 3) err(at, "answer must be 0–3");
      else if (Array.isArray(q.options) && q.options.every(isStr)) {
        const L = q.options.map((o) => o.length);
        if (L.every((l, i) => i === q.answer || L[q.answer] > l)) longestRight++;
      }
      if (!isStr(q.explain)) err(at, "explain is required");
      if (![1, 2, 3].includes(q.level)) err(at, "level must be 1, 2 or 3");
      if (!q.keepOrder && POSITIONAL.test(q.explain || "")) warn(at, "explain refers to an option by position, but options are shuffled; reword it or set keepOrder: true");
      const ident = norm([q.q, ...(q.options || []).slice().sort()].join("|"));
      if (seen.has(ident)) err(at, "duplicate question");
      seen.add(ident);
    });
    p.written.forEach((x, j) => {
      const at = `${chId} written[${j}]`;
      wN++;
      if (!isStr(x.q) || !isStr(x.a)) err(at, "q and a are required");
      if (![1, 2, 3, 4, 5].includes(x.marks)) err(at, "marks must be 1–5");
      if (x.type !== undefined && !["short", "long", "case", "hots"].includes(x.type)) err(at, 'type must be "short", "long", "case" or "hots"');
    });
    const all = JSON.stringify(p);
    if (/<[a-z][^>]*>/i.test(all)) err(chId, "contains HTML tags, use plain text");
    if (/\\(frac|sqrt|times|theta|pi|alpha|circ)\b|\$[^$]+\$/.test(all)) err(chId, "contains LaTeX, use Unicode");
  }
  // A student can guess by length when the right answer is usually the longest option.
  if (mcqN >= 20 && longestRight / mcqN > 0.4) warn("file", `the right answer is the longest option in ${Math.round((100 * longestRight) / mcqN)}% of MCQs; make some wrong options as long (aim for about 25%)`);
  // Keys that aren't chapters of this subject would be silently ignored.
  const raw = fs.readFileSync(path.resolve(root, file), "utf8");
  const keyRe = /^\s{2}"?([a-z0-9-]+)"?:\s*\{/gm;
  let km;
  while ((km = keyRe.exec(raw))) if (!chIds.has(km[1])) err(km[1], "not a chapter id in this subject");
  errorCount += errors.length;
  warnCount += warns.length;
  console.log(`\n${errors.length ? "✗" : "✓"} ${file}`);
  errors.forEach((e) => console.log(`  ERROR ${e}`));
  warns.forEach((w) => console.log(`  warn  ${w}`));
  summary.push(`practice class ${cls} ${subj} part ${part}: ${mcqN} MCQs, ${wN} written`);
}

// ---------- diagrams ----------
// data/class{N}/diagrams/{subject}.js: StudyData.addDiagrams(N, "subject", { chapterId: [{ title, svg, caption }] }).
const diagramFiles = fs
  .readdirSync(path.join(root, "data"))
  .filter((d) => /^class\d+$/.test(d) && fs.existsSync(path.join(root, "data", d, "diagrams")))
  .flatMap((d) => fs.readdirSync(path.join(root, "data", d, "diagrams")).filter((f) => f.endsWith(".js")).map((f) => path.join("data", d, "diagrams", f)))
  .filter((f) => process.argv.length <= 2 || process.argv.slice(2).includes(f));
// Colours must come from the theme (currentColor / var(--dg-…)) so diagrams work in dark mode and print.
const HARD_COLOUR = /(fill|stroke|color)\s*[:=]\s*["']?\s*(#[0-9a-f]{3,8}\b|rgb|hsl|(?!none|currentColor|var|transparent|url)[a-z]{3,}\b)/i;
for (const file of diagramFiles) {
  const errors = [];
  const warns = [];
  const err = (where, msg) => errors.push(`${where}: ${msg}`);
  const warn = (where, msg) => warns.push(`${where}: ${msg}`);
  const m = /class(\d+)[\/\\]diagrams[\/\\](\w+)\.js$/.exec(file);
  const ctx = { globalThis: {} };
  ctx.globalThis = ctx;
  vm.createContext(ctx);
  try {
    if (!m) throw new Error("file must be named {subject}.js");
    vm.runInContext(fs.readFileSync(path.join(root, "data", "registry.js"), "utf8"), ctx);
    vm.runInContext(fs.readFileSync(path.join(root, "data", `class${m[1]}`, `${m[2]}.js`), "utf8"), ctx);
    vm.runInContext(fs.readFileSync(path.resolve(root, file), "utf8"), ctx, { filename: file });
  } catch (e) {
    console.log(`\n✗ ${file}\n  Could not load: ${e.message}`);
    errorCount++;
    continue;
  }
  const [cls, subj] = [Number(m[1]), m[2]];
  if (!(ctx.StudyData.diagramCatalog[cls] || []).includes(subj)) warn("file", `diagramCatalog in data/registry.js doesn't list class ${cls} ${subj}, so this file won't load yet`);
  const chIds = new Set(ctx.StudyData.chapters(cls, subj).map((c) => c.id));
  let n = 0;
  const raw = fs.readFileSync(path.resolve(root, file), "utf8");
  const keyRe = /^\s{2}"?([a-z0-9-]+)"?:\s*\[/gm;
  let km;
  while ((km = keyRe.exec(raw))) if (!chIds.has(km[1])) err(km[1], "not a chapter id in this subject");
  for (const chId of chIds)
    ctx.StudyData.diagramsFor(cls, subj, chId).forEach((d, j) => {
      const at = `${chId} [${j}]`;
      n++;
      if (!isStr(d.title)) err(at, "title is required");
      if (!isStr(d.svg) || !/^\s*<svg[\s>]/.test(d.svg) || !/<\/svg>\s*$/.test(d.svg)) return err(at, "svg must be a single <svg>…</svg> element");
      if (!/viewBox="[\d. -]+"/.test(d.svg)) err(at, "svg needs a viewBox");
      if (/\s(width|height)="\d/.test(d.svg.slice(0, d.svg.indexOf(">")))) err(at, "the <svg> tag must not set width or height (the page sizes it)");
      if (/<script|<foreignObject|\son[a-z]+=|javascript:|<image|href="http/i.test(d.svg)) err(at, "no scripts, event handlers, images or external links");
      if (HARD_COLOUR.test(d.svg)) err(at, "use currentColor or var(--dg-accent / --dg-fill / --dg-muted) instead of fixed colours");
      if ((d.svg.match(/<text/g) || []).length < 2) warn(at, "a diagram should have labels");
      if (d.svg.length > 12000) warn(at, `svg is large (${d.svg.length} chars)`);
    });
  errorCount += errors.length;
  warnCount += warns.length;
  console.log(`\n${errors.length ? "✗" : "✓"} ${file}`);
  errors.forEach((e) => console.log(`  ERROR ${e}`));
  warns.forEach((w) => console.log(`  warn  ${w}`));
  summary.push(`diagrams class ${cls} ${subj}: ${n}`);
}

// ---------- timelines (the timeline game) ----------
// data/games/timelines.js: StudyData.addTimelines([{ cls, subject, chapter, events: [{ year, label, when? }] }]).
// Every chapter id must exist, with at least 5 events, numeric distinct years and labels of at most 60 characters.
{
  const file = path.join("data", "games", "timelines.js");
  if (fs.existsSync(path.join(root, file)) && (process.argv.length <= 2 || process.argv.slice(2).includes(file))) {
    const errors = [];
    const err = (where, msg) => errors.push(`${where}: ${msg}`);
    const ctx = { globalThis: {} };
    ctx.globalThis = ctx;
    vm.createContext(ctx);
    let list = null;
    try {
      vm.runInContext(fs.readFileSync(path.join(root, "data", "registry.js"), "utf8"), ctx);
      ctx.StudyData.addTimelines = (x) => (list = x);
      vm.runInContext(fs.readFileSync(path.join(root, file), "utf8"), ctx, { filename: file });
    } catch (e) {
      errors.push(`Could not load: ${e.message}`);
    }
    let n = 0;
    if (!Array.isArray(list)) errors.push("expected StudyData.addTimelines([...])");
    else {
      const seen = new Set();
      const loaded = new Set();
      list.forEach((x, i) => {
        const at = `entry ${i + 1} (${x && x.cls}/${x && x.subject}/${x && x.chapter})`;
        if (!x || !Number.isInteger(x.cls) || !isStr(x.subject) || !isStr(x.chapter)) return err(at, "needs cls, subject and chapter");
        const k = `${x.cls}/${x.subject}/${x.chapter}`;
        if (seen.has(k)) err(at, "duplicate chapter");
        seen.add(k);
        const f = path.join(root, "data", `class${x.cls}`, `${x.subject}.js`);
        if (!fs.existsSync(f)) return err(at, "no such class/subject file");
        if (!loaded.has(f)) {
          vm.runInContext(fs.readFileSync(f, "utf8"), ctx, { filename: f });
          loaded.add(f);
        }
        const ch = (((ctx.StudyData.content[x.cls] || {})[x.subject] || {}).chapters || []).find((c) => c.id === x.chapter);
        if (!ch) err(at, "not a chapter id in this subject");
        if (!Array.isArray(x.events) || x.events.length < 5) return err(at, "needs at least 5 events");
        const years = new Set();
        const labels = new Set();
        x.events.forEach((e, j) => {
          n++;
          const eat = `${at} events[${j}]`;
          if (!e || typeof e.year !== "number" || !Number.isFinite(e.year) || !Number.isInteger(e.year)) return err(eat, "year must be a whole number (BCE is negative)");
          if (years.has(e.year)) err(eat, `year ${e.year} is used twice`);
          years.add(e.year);
          if (!isStr(e.label) || e.label.length > 60) err(eat, "label is required and at most 60 characters");
          else if (labels.has(e.label)) err(eat, "duplicate label");
          else labels.add(e.label);
          if (e.when !== undefined && !isStr(e.when)) err(eat, "when must be a string");
        });
      });
    }
    errorCount += errors.length;
    console.log(`\n${errors.length ? "✗" : "✓"} ${file}`);
    errors.forEach((e) => console.log(`  ERROR ${e}`));
    summary.push(`timelines: ${list ? list.length : 0} chapters, ${n} events`);
  }
}

// ---------- glossary (key terms in Hindi and Punjabi, for the lesson language) ----------
// data/glossary.js: StudyData.addGlossary({ "english term in lower case": { hi?: Devanagari, pa?: Gurmukhi } }).
{
  const file = path.join("data", "glossary.js");
  if (fs.existsSync(path.join(root, file)) && (process.argv.length <= 2 || process.argv.slice(2).includes(file))) {
    const errors = [];
    const err = (where, msg) => errors.push(`${where}: ${msg}`);
    let g = null;
    try {
      vm.runInNewContext(fs.readFileSync(path.join(root, file), "utf8"), { StudyData: { addGlossary: (x) => (g = x) } }, { filename: file });
    } catch (e) {
      errors.push(`Could not load: ${e.message}`);
    }
    let hi = 0, pa = 0;
    if (g) {
      for (const [k, v] of Object.entries(g)) {
        if (k !== k.trim().toLowerCase()) err(k, "key must be the English term in lower case");
        if (!v || typeof v !== "object" || (!v.hi && !v.pa)) err(k, "needs hi or pa");
        else {
          if (v.hi !== undefined && !(isStr(v.hi) && /[\u0900-\u097F]/.test(v.hi) && !/[A-Za-z]/.test(v.hi))) err(k, "hi must be Devanagari, without Latin letters");
          if (v.pa !== undefined && !(isStr(v.pa) && /[\u0A00-\u0A7F]/.test(v.pa) && !/[A-Za-z]/.test(v.pa))) err(k, "pa must be Gurmukhi, without Latin letters");
          if (v.hi) hi++;
          if (v.pa) pa++;
        }
      }
    }
    errorCount += errors.length;
    console.log(`\n${errors.length ? "✗" : "✓"} ${file}`);
    errors.forEach((e) => console.log(`  ERROR ${e}`));
    summary.push(`glossary: ${g ? Object.keys(g).length : 0} terms, ${hi} in Hindi, ${pa} in Punjabi`);
  }
}

// ---------- language games (letters, matras, words, sentences, grammar) ----------
// data/games/{letters,matras,words,sentences,grammar}.js fill LangGames (js/games/langkit.js). Checks: structure, NFC text, the
// script matches the language (Unicode ranges), letters start their word, matra parts join to the word, sentences and grammar
// words are unique with one class each, and every class a game is offered for has enough words (same word lists the game reads).
{
  const names = ["letters", "matras", "words", "sentences", "grammar"];
  const gameFiles = names.map((n) => path.join("data", "games", `${n}.js`));
  if (gameFiles.every((f) => fs.existsSync(path.join(root, f))) && (process.argv.length <= 2 || process.argv.slice(2).some((a) => gameFiles.includes(a)))) {
    const errors = [];
    const err = (where, msg) => errors.push(`${where}: ${msg}`);
    const ctx = vm.createContext({});
    ctx.globalThis = ctx;
    let LG = null;
    try {
      vm.runInContext(fs.readFileSync(path.join(root, "data", "registry.js"), "utf8"), ctx);
      vm.runInContext(fs.readFileSync(path.join(root, "js", "games", "langkit.js"), "utf8") + "\nthis.LangGames = LangGames;", ctx, { filename: "langkit.js" });
      LG = ctx.LangGames;
      gameFiles.forEach((f) => vm.runInContext(fs.readFileSync(path.join(root, f), "utf8"), ctx, { filename: f }));
    } catch (e) {
      errors.push(`Could not load: ${e.message}`);
    }
    const counts = [];
    if (LG) {
      const SCRIPT = {
        pa: /^[਀-੿‌‍ ,.?!।'0-9-]+$/,
        hi: /^[ऀ-ॿ‌‍ ,.?!।'0-9-]+$/,
        en: /^[A-Za-z0-9 ,.?!'-]+$/,
      };
      const LANGS = ["pa", "hi", "en"];
      const text = (where, s, lang, what) => {
        if (!isStr(s)) return err(where, `${what} must be a non-empty string`), false;
        if (s !== s.trim() || /\s{2}/.test(s)) err(where, `${what} "${s}" has extra spaces`);
        if (s.normalize("NFC") !== s) err(where, `${what} "${s}" is not in NFC form (re-save it normalised)`);
        if (!SCRIPT[lang].test(s)) err(where, `${what} "${s}" has characters outside the ${lang} script`);
        return true;
      };
      const dup = (where, list, what) => {
        const seen = new Set();
        list.forEach((x) => (seen.has(x) ? err(where, `duplicate ${what} "${x}"`) : seen.add(x)));
      };
      const need = (where, game, lang, from, to, getter, min) => {
        for (let c = from; c <= to; c++) {
          const n = getter(c);
          if (n < min) err(where, `${game} (${lang}) has only ${n} for class ${c}, needs ${min}`);
        }
      };

      // letters
      {
        const data = LG.get("letters");
        const carrier = { "ੳ": "ੳਉਊਓ", "ਅ": "ਅਆਐਔ", "ੲ": "ੲਇਈਏ" };
        LANGS.forEach((lang) => {
          const list = data[lang];
          const where = `letters.${lang}`;
          if (!Array.isArray(list) || list.length < 20) return err(where, "needs a list of at least 20 entries");
          const letters = list.map((x) => x.letter);
          dup(where, letters, "letter");
          dup(where, list.map((x) => x.word), "word");
          dup(where, list.map((x) => x.emoji), "emoji");
          list.forEach((x) => {
            const at = `${where} ${x.letter}`;
            if (!text(at, x.letter, lang, "letter") || !text(at, x.word, lang, "word")) return;
            if (!isStr(x.emoji)) err(at, "emoji is required");
            const startsWith = (e) => (carrier[e.letter] ? carrier[e.letter].includes(x.word[0]) : x.word.startsWith(e.letter));
            const first = lang === "en" ? x.word[0].toUpperCase() === x.letter : startsWith(x);
            if (!first) err(at, `"${x.word}" does not start with ${x.letter}`);
            if (lang === "en" && !/^[A-Z]$/.test(x.letter)) err(at, "English letters are single capitals");
            // the word must start with no other letter of the set, except a conjunct and its own first letter
            list.forEach((o) => {
              if (o === x || !text(at, o.letter, lang, "letter")) return;
              if (startsWith(o) && x.conj !== o.letter && o.conj !== x.letter) err(at, `"${x.word}" also starts with ${o.letter} (ambiguous)`);
            });
            if (x.conj !== undefined && !letters.includes(x.conj)) err(at, `conj ${x.conj} is not a letter in the set`);
            if (x.conj !== undefined && !x.letter.startsWith(x.conj)) err(at, `conj ${x.conj} must be the first letter of ${x.letter}`);
          });
          counts.push(`letters ${lang}: ${list.length}`);
        });
      }
      // stroke paths for the tracing game (data/games/strokes.js): every letter of the letter sets has strokes
      {
        const file = path.join("data", "games", "strokes.js");
        if (!fs.existsSync(path.join(root, file))) err("strokes", "data/games/strokes.js is missing");
        else {
          vm.runInContext(fs.readFileSync(path.join(root, file), "utf8"), ctx, { filename: file });
          const strokes = LG.get("strokes");
          const letters = LG.get("letters");
          LANGS.forEach((lang) => {
            const set = strokes[lang];
            const where = `strokes.${lang}`;
            if (!set || typeof set !== "object") return err(where, "missing");
            // every letter of the letter-picture set, plus the rest of the alphabet
            const need = (letters[lang] || []).map((x) => x.letter);
            if (lang === "en") need.push(...need.map((x) => x.toLowerCase()));
            if (lang === "pa") need.push(..."ੳਅੲਸਹਕਖਗਘਙਚਛਜਝਞਟਠਡਢਣਤਥਦਧਨਪਫਬਭਮਯਰਲਵੜ");
            if (lang === "hi") need.push(..."अआइईउऊऋएऐओऔकखगघङचछजझञटठडढणतथदधनपफबभमयरलवशषसह", "क्ष", "त्र", "ज्ञ");
            for (const l of new Set(need)) if (!set[l]) err(where, `no strokes for ${l}`);
            if (lang === "pa" && Object.keys(set).length !== 35) err(where, `expected 35 letters, found ${Object.keys(set).length}`);
            if (lang === "en" && Object.keys(set).length !== 52) err(where, `expected 52 letters, found ${Object.keys(set).length}`);
            for (const [l, list] of Object.entries(set)) {
              const at = `${where} ${l}`;
              if (!Array.isArray(list) || list.length < 1) {
                err(at, "needs at least one stroke");
                continue;
              }
              if (l !== l.normalize("NFC")) err(at, "letter is not NFC");
              list.forEach((d, i) => {
                const pts = typeof d === "string" ? LG.flatten(d) : null;
                if (!pts || pts.length < 2) return err(`${at} stroke ${i + 1}`, "does not parse");
                for (const p of pts) if (p.some((v) => !Number.isFinite(v) || v < 0 || v > 100)) return err(`${at} stroke ${i + 1}`, `point ${p.map((v) => Math.round(v * 10) / 10)} is outside 0-100 or not a number`);
              });
            }
            counts.push(`strokes ${lang}: ${Object.keys(set).length}`);
          });
        }
      }
      // matras
      {
        const data = LG.get("matras");
        ["pa", "hi"].forEach((lang) => {
          const list = data[lang];
          const where = `matras.${lang}`;
          if (!Array.isArray(list)) return err(where, "missing");
          dup(where, list.map((x) => x.word), "word");
          dup(where, list.map((x) => x.emoji), "emoji");
          list.forEach((x) => {
            const at = `${where} ${x.word}`;
            if (!text(at, x.word, lang, "word")) return;
            if (!Array.isArray(x.parts) || x.parts.length < 2) return err(at, "parts must be a list of at least 2 pieces");
            if (x.parts.join("") !== x.word) err(at, `parts joined (${x.parts.join("")}) are not the word`);
            x.parts.forEach((p) => {
              if ([...p].length !== 1) err(at, `part "${p}" must be one character`);
              if (!/^\p{L}$|^\p{M}$/u.test(p)) err(at, `part "${p}" is neither a letter nor a mark`);
            });
            if (/^\p{M}$/u.test(x.parts[0])) err(at, "the first part cannot be a mark");
            if (!x.parts.some((p) => /^\p{M}$/u.test(p) && !/[਼़्੍]/.test(p))) err(at, "needs at least one matra");
            if (!isStr(x.emoji) || !isStr(x.en)) err(at, "emoji and en are required");
            if (![1, 2, 3].includes(x.cls)) err(at, "cls must be 1, 2 or 3");
          });
          need(where, "matras", lang, 1, 3, (c) => LG.pool.matras(lang, c).length, 6);
          counts.push(`matras ${lang}: ${list.length}`);
        });
      }
      // words
      {
        const list = LG.get("words").en;
        const where = "words.en";
        if (!Array.isArray(list)) err(where, "missing");
        else {
          dup(where, list.map((x) => x.word), "word");
          dup(where, list.map((x) => x.emoji), "emoji");
          list.forEach((x) => {
            const at = `${where} ${x.word}`;
            if (!/^[a-z]{3,10}$/.test(x.word || "")) err(at, "word must be 3-10 lower case letters");
            if (!isStr(x.emoji)) err(at, "emoji is required");
            if (![1, 2, 3, 4, 5].includes(x.cls)) err(at, "cls must be 1 to 5");
          });
          need(where, "words", "en", 1, 5, (c) => LG.pool.words(c).length, 6);
          counts.push(`words en: ${list.length}`);
        }
      }
      // sentences
      {
        const data = LG.get("sentences");
        const stop = { pa: /[।?]$/, hi: /[।?]$/, en: /[.?]$/ };
        const norm = (w) => w.toLowerCase().replace(/^[^\p{L}\p{N}\p{M}]+|[^\p{L}\p{N}\p{M}]+$/gu, "");
        const bag = (s) => s.split(" ").map(norm).sort().join(" ");
        LANGS.forEach((lang) => {
          const list = data[lang];
          const where = `sentences.${lang}`;
          if (!Array.isArray(list) || list.length < 30) return err(where, `needs at least 30 sentences (has ${list ? list.length : 0})`);
          dup(where, list.map((x) => x.s), "sentence");
          list.forEach((x, i) => {
            const at = `${where} #${i + 1}`;
            if (!text(at, x.s, lang, "sentence")) return;
            if (!stop[lang].test(x.s)) err(at, "must end with a full stop / danda / question mark");
            if (![2, 3, 4, 5, 6, 8].includes(x.cls)) err(at, "cls must be 2, 3, 4, 5, 6 or 8");
            const n = x.s.split(" ").length;
            if (n < 4 || n > 12) err(at, `has ${n} words (4 to 12)`);
            (x.alt || []).forEach((a) => {
              if (!text(at, a, lang, "alt")) return;
              if (a === x.s) err(at, "alt is the same as the sentence");
              if (bag(a) !== bag(x.s)) err(at, `alt "${a}" must use exactly the same words`);
            });
          });
          need(where, "sentences", lang, 2, 8, (c) => LG.pool.sentences(lang, c).length, 6);
          counts.push(`sentences ${lang}: ${list.length}`);
        });
      }
      // grammar
      {
        const data = LG.get("grammar");
        const KINDS = { pos: ["noun", "verb", "adjective"], gender: ["masculine", "feminine"], number: ["singular", "plural"] };
        LANGS.forEach((lang) => {
          const g = data[lang];
          const where = `grammar.${lang}`;
          if (!g) return err(where, "missing");
          let words = 0;
          Object.entries(g).forEach(([kind, groups]) => {
            const at = `${where}.${kind}`;
            if (!KINDS[kind]) return err(at, "kind must be pos, gender or number");
            if (lang === "en" && kind === "gender") err(at, "English has no gender sorting");
            Object.keys(groups).forEach((k) => !KINDS[kind].includes(k) && err(at, `group ${k} is not one of ${KINDS[kind].join("/")}`));
            const all = [];
            Object.entries(groups).forEach(([k, list]) => {
              dup(`${at}.${k}`, list.map((x) => x[0]), "word");
              list.forEach(([w, c]) => {
                words++;
                text(`${at}.${k}`, w, lang, "word");
                if (!Number.isInteger(c) || c < 2 || c > 10) err(`${at}.${k} ${w}`, "class must be a whole number from 2 to 10");
                if (lang === "en" && !/^[a-z]+$/.test(w)) err(`${at}.${k} ${w}`, "English words are lower case letters");
                all.push(w);
              });
            });
            const twice = all.filter((w, i) => all.indexOf(w) !== i);
            twice.forEach((w) => err(at, `"${w}" is in two groups, so it is not one unambiguous class`));
          });
          need(where, "grammar", lang, 2, 10, (c) => LG.pool.grammar(lang, c).length, 1);
          counts.push(`grammar ${lang}: ${words} words`);
        });
      }
    }
    errorCount += errors.length;
    console.log(`\n${errors.length ? "✗" : "✓"} language games (data/games/letters, matras, words, sentences, grammar)`);
    errors.forEach((e) => console.log(`  ERROR ${e}`));
    summary.push(`language games: ${counts.join("; ")}`);
  }
}

// ---------- paths (Practice by topic) ----------
// data/paths/{subject}.js: StudyData.addPath("maths", { title, topics: [{ id, title, icon, summary, levels: [...] }] }).
// See CONTENT_GUIDE.md. Every `from` reference must name a real chapter, every `gens` name a real generator, `own` chapters
// follow the normal chapter rules, and each level needs at least 10 multiple-choice questions for each board.
const pathDir = path.join(root, "data", "paths");
const pathFiles = fs.existsSync(pathDir)
  ? fs
      .readdirSync(pathDir)
      .filter((f) => f.endsWith(".js"))
      .map((f) => path.join("data", "paths", f))
      .filter((f) => process.argv.length <= 2 || process.argv.slice(2).some((a) => path.resolve(root, a) === path.resolve(root, f)))
  : [];
let Gen = null;
const KEBAB = /^[a-z0-9]+(-[a-z0-9]+)*$/;
const MIN_MCQ = 10;
for (const file of pathFiles) {
  const errors = [];
  const warns = [];
  const err = (where, msg) => errors.push(`${where}: ${msg}`);
  const warn = (where, msg) => warns.push(`${where}: ${msg}`);
  const ctx = { globalThis: {} };
  ctx.globalThis = ctx;
  vm.createContext(ctx);
  const subject = (/paths[\/\\](\w+)\.js$/.exec(file) || [])[1];
  try {
    if (!Gen) {
      const gctx = { console };
      vm.createContext(gctx);
      Gen = vm.runInContext(fs.readFileSync(path.join(root, "js", "gen.js"), "utf8") + "\n;Gen", gctx);
      vm.runInContext(fs.readFileSync(path.join(root, "js", "gen-lang.js"), "utf8"), gctx);
      vm.runInContext(fs.readFileSync(path.join(root, "js", "gen-sci.js"), "utf8"), gctx);
    }
    vm.runInContext(fs.readFileSync(path.join(root, "data", "registry.js"), "utf8"), ctx);
    vm.runInContext(fs.readFileSync(path.resolve(root, file), "utf8"), ctx, { filename: file });
  } catch (e) {
    console.log(`\n✗ ${file}\n  Could not load: ${e.message}`);
    errorCount++;
    continue;
  }
  const D = ctx.StudyData;
  const data = D.path(subject);
  let nTopics = 0;
  let nLevels = 0;
  if (!D.PATH_SUBJECTS.includes(subject)) err("file", `subject must be one of ${D.PATH_SUBJECTS.join(", ")}`);
  else if (!data) err("file", `expected StudyData.addPath("${subject}", {...})`);
  else {
    if (!isStr(data.title)) err("file", "title is required");
    if (data.titleLocal !== undefined && !isStr(data.titleLocal)) err("file", "titleLocal must be a string");
    if (!Array.isArray(data.topics) || !data.topics.length) err("file", "topics must be a non-empty array");

    // Load every chapter file and practice bank the levels name (the ones that exist).
    const wanted = new Map();
    for (const tp of data.topics || [])
      for (const lv of (tp && tp.levels) || [])
        for (const r of (lv && Array.isArray(lv.from) ? lv.from : [])) if (r && Number.isInteger(r.cls) && isStr(r.subject)) wanted.set(`${r.cls}/${r.subject}`, r);
    const missing = new Set();
    for (const [k, r] of wanted) {
      const f = path.join(root, "data", `class${r.cls}`, `${r.subject}.js`);
      if (!fs.existsSync(f)) {
        missing.add(k);
        continue;
      }
      vm.runInContext(fs.readFileSync(f, "utf8"), ctx, { filename: f });
      for (const pf of D.practiceFiles(r.cls, [r.subject]).filter((x) => !/diagrams/.test(x))) {
        const pfile = path.join(root, pf);
        if (fs.existsSync(pfile)) vm.runInContext(fs.readFileSync(pfile, "utf8"), ctx, { filename: pfile });
      }
    }

    const topicIds = new Set();
    const levelIds = new Set();
    const usedIn = new Map(); // "cls/subject/chapter" -> topic id (to warn when one chapter serves two topics)
    (data.topics || []).forEach((tp, ti) => {
      nTopics++;
      const tat = `topic ${ti + 1} (${tp && tp.id})`;
      if (!tp || typeof tp !== "object") return err(tat, "must be an object");
      if (!isStr(tp.id) || !KEBAB.test(tp.id)) err(tat, "id must be kebab-case");
      if (topicIds.has(tp.id)) err(tat, "duplicate topic id");
      topicIds.add(tp.id);
      for (const k of ["title", "icon", "summary"]) if (!isStr(tp[k])) err(tat, `${k} is required`);
      if (!Array.isArray(tp.levels) || !tp.levels.length) return err(tat, "levels must be a non-empty array");
      let prev = -1;
      tp.levels.forEach((lv, li) => {
        nLevels++;
        const at = `${tat} level ${li + 1} (${lv && lv.id})`;
        if (!lv || typeof lv !== "object") return err(at, "must be an object");
        if (!isStr(lv.id) || !KEBAB.test(lv.id)) err(at, "id must be kebab-case");
        if (lv.id === "find-my-level") err(at, 'id "find-my-level" is reserved');
        if (levelIds.has(lv.id)) err(at, "duplicate level id (ids are unique across the whole file)");
        levelIds.add(lv.id);
        if (!Number.isInteger(lv.level) || lv.level < 0 || lv.level > 12) err(at, "level must be a whole number from 0 to 12");
        else {
          // Two steps for the same class are fine: the ladder shows them as "Level 3, part 1" and "part 2".
          if (lv.level < prev) err(at, `levels must go from easiest to hardest: level ${lv.level} comes after level ${prev}`);
          prev = lv.level;
        }
        for (const k of ["title", "goal"]) if (!isStr(lv[k])) err(at, `${k} is required`);
        const from = lv.from === undefined ? [] : lv.from;
        if (!Array.isArray(from)) return err(at, "from must be an array");
        if (lv.gens !== undefined && (!Array.isArray(lv.gens) || !lv.gens.every(isStr))) err(at, "gens must be an array of generator names");
        for (const g of lv.gens || []) if (!Gen.names.includes(g)) err(at, `gens: "${g}" is not a generator in js/gen.js`);
        if (lv.own !== undefined && lv.own !== null && typeof lv.own !== "object") err(at, "own must be null or a chapter object");
        if (!from.length && !lv.own) err(at, "needs at least one source: from references and/or own");

        // References.
        const refs = [];
        from.forEach((r, ri) => {
          const rat = `${at} from[${ri}]`;
          if (!r || !Number.isInteger(r.cls) || r.cls < 1 || r.cls > 12 || !isStr(r.subject) || !isStr(r.chapter)) return err(rat, "needs cls (1–12), subject and chapter");
          if (r.board !== undefined && !["cbse", "pseb"].includes(r.board)) err(rat, 'board must be "cbse" or "pseb"');
          if (!D.subject(r.subject)) return err(rat, `unknown subject "${r.subject}"`);
          if (missing.has(`${r.cls}/${r.subject}`)) return err(rat, `data/class${r.cls}/${r.subject}.js does not exist`);
          const ch = ((D.content[r.cls] || {})[r.subject] || { chapters: [] }).chapters.find((c) => c.id === r.chapter);
          if (!ch) return err(rat, `no chapter "${r.chapter}" in Class ${r.cls} ${r.subject}`);
          if (refs.some((x) => x.r.cls === r.cls && x.r.subject === r.subject && x.r.chapter === r.chapter && x.r.board === r.board)) warn(rat, "listed twice in this level");
          refs.push({ r, ch });
          const uk = `${r.cls}/${r.subject}/${r.chapter}`;
          if (usedIn.has(uk) && usedIn.get(uk) !== tp.id) warn(rat, `chapter also used in topic "${usedIn.get(uk)}"`);
          else usedIn.set(uk, tp.id);
        });

        // Own chapter: the usual chapter rules.
        if (lv.own) {
          const oerr = (w, m) => err(`${at} own ${w}`, m);
          const owarn = (w, m) => warn(`${at} own ${w}`, m);
          checkChapters([lv.own], subject, oerr, owarn);
        }

        // At least 10 multiple-choice questions for each board (generators count as plenty).
        for (const board of ["cbse", "pseb"]) {
          const active = refs.filter(({ r }) => !r.board || r.board === board);
          const gens = (lv.gens || []).length + active.reduce((a, { r }) => a + Gen.forChapter(r.cls, r.subject, r.chapter).length, 0);
          const saved = (lv.own && Array.isArray(lv.own.quiz) ? lv.own.quiz.length : 0) + active.reduce((a, { r, ch }) => a + ch.quiz.length + D.practiceFor(r.cls, r.subject, r.chapter).mcq.length, 0);
          if (saved < MIN_MCQ && !gens) err(at, `only ${saved} multiple-choice questions for ${board.toUpperCase()} students; a level needs ${MIN_MCQ}. Add references (with board: "${board}" if the books differ) or own quiz questions.`);
        }
      });
    });
  }
  errorCount += errors.length;
  warnCount += warns.length;
  console.log(`\n${errors.length ? "✗" : "✓"} ${file}`);
  errors.forEach((e) => console.log(`  ERROR ${e}`));
  warns.forEach((w) => console.log(`  warn  ${w}`));
  summary.push(`paths ${subject}: ${nTopics} topics, ${nLevels} levels`);
}

// ---------- learning objectives ----------
// data/class{N}/objectives.js: StudyData.addObjectives(N, { subject: { chapterId: [{ id, text, topics, level, prereq?, mistakes? }] } }).
// See CONTENT_GUIDE.md. Chapters, topics (notes headings) and prerequisites must exist; 3-6 objectives per chapter; the
// text is in the chapter's language. The class must be listed in objectivesCatalog in data/registry.js or the file never loads.
{
  const LEVELS = ["remember", "understand", "apply", "analyse"];
  const objFiles = fs
    .readdirSync(path.join(root, "data"))
    .filter((d) => /^class\d+$/.test(d) && fs.existsSync(path.join(root, "data", d, "objectives.js")))
    .map((d) => path.join("data", d, "objectives.js"))
    .filter((f) => process.argv.length <= 2 || process.argv.slice(2).some((a) => path.resolve(root, a) === path.resolve(root, f)));
  const scriptOf = (text) => {
    const letters = String(text).match(/\p{L}/gu) || [];
    if (!letters.length) return "en";
    const share = (re) => (String(text).match(re) || []).length / letters.length;
    return share(/\p{Script=Gurmukhi}/gu) > 0.5 ? "pa" : share(/\p{Script=Devanagari}/gu) > 0.5 ? "hi" : "en";
  };
  const kebabHeading = (h) => {
    const k = String(h).replace(/\*\*/g, "").trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
    return k.length >= 3 ? k.slice(0, 48).replace(/-+$/, "") : null; // null: a hashed id (non-Latin heading)
  };
  // Subject files, loaded on demand: { chapters: Map(id -> chapter), } for "cls/subject", or null when there is none.
  const subjCache = new Map();
  const subjectData = (cls, subject) => {
    const k = `${cls}/${subject}`;
    if (subjCache.has(k)) return subjCache.get(k);
    let out = null;
    const f = path.join(root, "data", `class${cls}`, `${subject}.js`);
    if (fs.existsSync(f)) {
      const ctx = { globalThis: {} };
      ctx.globalThis = ctx;
      vm.createContext(ctx);
      vm.runInContext(fs.readFileSync(path.join(root, "data", "registry.js"), "utf8"), ctx);
      vm.runInContext(fs.readFileSync(f, "utf8"), ctx, { filename: f });
      const d = ctx.StudyData.content[cls] && ctx.StudyData.content[cls][subject];
      if (d) out = { chapters: new Map(d.chapters.map((c) => [c.id, c])) };
    }
    subjCache.set(k, out);
    return out;
  };
  // Every objectives file's data, by class (for prerequisites that point into another class).
  const loaded = new Map();
  const loadObjFile = (file) => {
    const ctx = { globalThis: {} };
    ctx.globalThis = ctx;
    vm.createContext(ctx);
    vm.runInContext(fs.readFileSync(path.join(root, "data", "registry.js"), "utf8"), ctx);
    const calls = [];
    const real = ctx.StudyData.addObjectives;
    ctx.StudyData.addObjectives = (c, d) => (calls.push({ cls: c, data: d }), real(c, d));
    vm.runInContext(fs.readFileSync(path.join(root, file), "utf8"), ctx, { filename: file });
    return { ctx, calls };
  };
  const handWritten = (cls, subject, chapter) => {
    if (!loaded.has(cls)) {
      const f = path.join("data", `class${cls}`, "objectives.js");
      loaded.set(cls, fs.existsSync(path.join(root, f)) ? loadObjFile(f) : null);
    }
    const l = loaded.get(cls);
    return l ? l.ctx.StudyData.objectivesFor(cls, subject, chapter) : null;
  };
  for (const file of objFiles) {
    const errors = [];
    const warns = [];
    const err = (where, msg) => errors.push(`${where}: ${msg}`);
    const warn = (where, msg) => warns.push(`${where}: ${msg}`);
    const dirCls = Number((/class(\d+)/.exec(file) || [])[1]);
    let nSubjects = 0;
    let nChapters = 0;
    let nObjectives = 0;
    let L;
    try {
      L = loadObjFile(file);
      loaded.set(dirCls, L);
    } catch (e) {
      console.log(`\n✗ ${file}\n  Could not load: ${e.message}`);
      errorCount++;
      continue;
    }
    const D = L.ctx.StudyData;
    if (L.calls.length !== 1) err("file", `expected exactly one StudyData.addObjectives(...) call, found ${L.calls.length}`);
    for (const call of L.calls) {
      if (call.cls !== dirCls) err("file", `addObjectives(${call.cls}, ...) but the file is in class${dirCls}`);
      if (!call.data || typeof call.data !== "object") err("file", "second argument must be { subject: { chapterId: [objectives] } }");
    }
    if (!D.objectivesCatalog.includes(dirCls)) err("file", `class ${dirCls} is not in objectivesCatalog in data/registry.js, so this file never loads`);
    const data = (L.calls[0] && L.calls[0].data) || {};

    for (const [subject, chs] of Object.entries(data)) {
      nSubjects++;
      const sat = `${subject}`;
      if (!D.subject(subject)) {
        err(sat, "unknown subject id");
        continue;
      }
      if (![D.catalog, ...Object.values(D.boardCatalog)].some((cat) => (cat[dirCls] || []).includes(subject))) err(sat, `not a Class ${dirCls} subject in data/registry.js`);
      const sd = subjectData(dirCls, subject);
      if (!sd) {
        err(sat, `data/class${dirCls}/${subject}.js not found`);
        continue;
      }
      for (const [chId, list] of Object.entries(chs || {})) {
        nChapters++;
        const at = `${subject}/${chId}`;
        const ch = sd.chapters.get(chId);
        if (!ch) {
          err(at, "no such chapter");
          continue;
        }
        if (!Array.isArray(list)) {
          err(at, "must be an array of objectives");
          continue;
        }
        if (list.length < 3 || list.length > 6) err(at, `needs 3-6 objectives, has ${list.length}`);
        nObjectives += list.length;
        const headings = ch.notes.map((n) => n.heading.trim());
        const chScript = scriptOf([ch.title, ...headings].join(" "));
        const ids = new Set();
        const covered = new Set();
        list.forEach((o, i) => {
          const oat = `${at} [${i}${o && o.id ? " " + o.id : ""}]`;
          if (!o || typeof o !== "object") return err(oat, "must be an object");
          if (!isStr(o.id) || !/^[a-z0-9]+(-[a-z0-9]+)*$/.test(o.id)) err(oat, "id must be kebab-case");
          else if (ids.has(o.id)) err(oat, "duplicate id in this chapter");
          ids.add(o.id);
          if (!isStr(o.text)) err(oat, "text is required");
          else {
            if (o.text.trim().length < 15) warn(oat, "text is very short; write a full 'can ...' statement");
            if (scriptOf(o.text) !== chScript) err(oat, `text is written in ${scriptOf(o.text)} but the chapter is in ${chScript}`);
          }
          if (!Array.isArray(o.topics) || !o.topics.length || !o.topics.every(isStr)) err(oat, "topics must list at least one notes heading");
          else
            o.topics.forEach((tp) => {
              if (!headings.includes(tp.trim())) err(oat, `topic "${tp}" is not a notes heading of this chapter`);
              else covered.add(tp.trim());
            });
          if (!LEVELS.includes(o.level)) err(oat, `level must be one of ${LEVELS.join(", ")}`);
          if (o.prereq !== undefined) {
            if (!Array.isArray(o.prereq) || !o.prereq.every(isStr)) err(oat, "prereq must be an array of strings like \"10/maths/polynomials#zeroes\"");
            else
              o.prereq.forEach((pr) => {
                const m = /^(\d+)\/([a-z0-9]+)\/([a-z0-9-]+)(?:#([a-z0-9-]+))?$/.exec(pr);
                if (!m) return err(oat, `prereq "${pr}" is not cls/subject/chapter[#objective]`);
                const [, pc, ps, pch, po] = m;
                const psd = subjectData(Number(pc), ps);
                const pchap = psd && psd.chapters.get(pch);
                if (!pchap) return err(oat, `prereq "${pr}": no such chapter`);
                if (!po) return;
                const hw = handWritten(Number(pc), ps, pch);
                const known = hw ? hw.map((x) => x.id) : pchap.notes.map((n) => kebabHeading(n.heading)).filter(Boolean);
                if (!known.includes(po)) err(oat, `prereq "${pr}": that chapter has no objective "${po}"`);
              });
          }
          if (o.mistakes !== undefined) {
            if (!Array.isArray(o.mistakes)) err(oat, "mistakes must be an array");
            else {
              const mids = new Set();
              o.mistakes.forEach((m, j) => {
                const mat = `${oat} mistakes[${j}]`;
                if (!m || !isStr(m.id) || !/^[a-z0-9]+(-[a-z0-9]+)*$/.test(m.id)) err(mat, "id must be kebab-case");
                else if (mids.has(m.id)) err(mat, "duplicate id");
                else mids.add(m.id);
                if (!m || !isStr(m.text) || !isStr(m.fix)) err(mat, "text and fix are required");
                else if (scriptOf(m.text + " " + m.fix) !== chScript) warn(mat, `not written in the chapter's language (${chScript})`);
              });
            }
          }
        });
        const missing = headings.filter((h) => !covered.has(h));
        if (missing.length) warn(at, `notes headings not covered by any objective: ${missing.map((h) => `"${h}"`).join(", ")}`);
      }
    }
    errorCount += errors.length;
    warnCount += warns.length;
    console.log(`\n${errors.length ? "✗" : "✓"} ${file}`);
    errors.forEach((e) => console.log(`  ERROR ${e}`));
    warns.forEach((w) => console.log(`  warn  ${w}`));
    summary.push(`objectives class ${dirCls}: ${nSubjects} subjects, ${nChapters} chapters, ${nObjectives} objectives`);
  }
  // A class in the catalog with no file would be a 404 at load time.
  const cat = fs.readFileSync(path.join(root, "data", "registry.js"), "utf8").match(/objectivesCatalog = \[([^\]]*)\]/);
  if (cat && process.argv.length <= 2)
    for (const c of cat[1].split(",").map((x) => Number(x.trim())).filter(Boolean))
      if (!fs.existsSync(path.join(root, "data", `class${c}`, "objectives.js"))) {
        console.log(`\n✗ objectivesCatalog\n  ERROR class ${c} is listed in data/registry.js but data/class${c}/objectives.js does not exist`);
        errorCount++;
      }
}

// ---------- class indexes ----------
// data/class{N}/index.js is generated (scripts/build-index.js) and must match the subject files exactly.
if (process.argv.length <= 2) {
  const stale = require("./build-index.js").check().filter((r) => !r.ok);
  console.log(`\n${stale.length ? "✗" : "✓"} class indexes`);
  stale.forEach((r) => {
    console.log(`  ERROR ${r.file}: out of date, run: node scripts/build-index.js`);
    errorCount++;
  });
}

console.log("\n" + summary.join("\n"));
console.log(`\n${errorCount} error(s), ${warnCount} warning(s)`);

// With no file arguments, also check the question generators (scripts/check-gen.js).
let genProblems = 0;
if (process.argv.length <= 2) {
  console.log("\nQuestion generators:");
  genProblems = require("./check-gen.js").problems;
  console.log("\nMaths games:");
  genProblems += require("./check-games.js").problems;
  console.log("\nVirtual labs:");
  genProblems += require("./check-labs.js").problems;
  console.log("\nLearning evidence from games and labs:");
  genProblems += require("./check-evidence.js").problems;
  console.log("\nPicture games (word builder, habitat sort):");
  genProblems += require("./check-picture-games.js").problems;
  console.log("\nAuto-made practice questions (js/derive.js, 20 seeds, every chapter):");
  genProblems += require("./check-derive.js").problems;
  console.log("\nPicture answers (Classes 1-3, a summary only, never fails):");
  try {
    process.argv.push("--brief");
    require("./check-pictures.js");
  } catch (e) {
    console.log("  picture report could not run: " + e.message);
  }
}
process.exit(errorCount || genProblems ? 1 : 0);
