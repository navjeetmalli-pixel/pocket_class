#!/usr/bin/env node
// Checks study content files against the format in CONTENT_GUIDE.md.
// Usage: node scripts/validate.js [data/class10/maths.js ...]
// With no arguments, every file under data/class*/ is checked.

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.join(__dirname, "..");
let files = process.argv.slice(2).filter((f) => !/[\/\\]practice[\/\\]/.test(f));
if (process.argv.length <= 2) {
  files = fs
    .readdirSync(path.join(root, "data"))
    .filter((d) => /^class\d+$/.test(d))
    .flatMap((d) =>
      fs
        .readdirSync(path.join(root, "data", d))
        .filter((f) => f.endsWith(".js"))
        .map((f) => path.join("data", d, f))
    );
}

const BANNED_OPTION = /all of (the )?(above|these)|none of (the )?(above|these)|both (a|b)\b|both \(a\)|\(a\) and \(|neither (of )?(the above|these|a nor b|option)|उपर्युक्त सभी|उपरोक्त सभी|इनमें से कोई नहीं|ये सभी|सभी सही|ਉਪਰੋਕਤ ਸਾਰੇ|ਉਪਰੋਕਤ ਸਭ|ਇਹਨਾਂ ਵਿੱਚੋਂ ਕੋਈ ਨਹੀਂ|ਇਨ੍ਹਾਂ ਵਿੱਚੋਂ ਕੋਈ ਨਹੀਂ|ਸਾਰੇ ਹੀ/i;
const isStr = (v) => typeof v === "string" && v.trim().length > 0;

let errorCount = 0;
let warnCount = 0;
const summary = [];

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
    }

    const ids = new Set();
    const norm = (t) => String(t).replace(/\*\*/g, "").trim().toLowerCase();
    const seenQ = new Map();
    let quizCount = 0;
    data.chapters.forEach((ch, i) => {
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
  let mcqN = 0, wN = 0;
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

console.log("\n" + summary.join("\n"));
console.log(`\n${errorCount} error(s), ${warnCount} warning(s)`);
process.exit(errorCount ? 1 : 0);
