#!/usr/bin/env node
// Checks study content files against the format in CONTENT_GUIDE.md.
// Usage: node scripts/validate.js [data/class10/maths.js ...]
// With no arguments, every file under data/class*/ is checked.

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.join(__dirname, "..");
let files = process.argv.slice(2);
if (files.length === 0) {
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

const BANNED_OPTION = /all of (the )?(above|these)|none of (the )?(above|these)|both (a|b|\(a\))|\(a\) and \(|neither|उपर्युक्त सभी|उपरोक्त सभी|इनमें से कोई नहीं|ये सभी|सभी सही|ਉਪਰੋਕਤ ਸਾਰੇ|ਉਪਰੋਕਤ ਸਭ|ਇਹਨਾਂ ਵਿੱਚੋਂ ਕੋਈ ਨਹੀਂ|ਇਨ੍ਹਾਂ ਵਿੱਚੋਂ ਕੋਈ ਨਹੀਂ|ਸਾਰੇ ਹੀ/i;
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
    else if (!(ctx.StudyData.catalog[cls] || []).includes(subj)) err("file", `subject "${subj}" is not in the Class ${cls} catalog in data/registry.js`);
    if (path.basename(file, ".js") !== subj) err("file", `file name should be ${subj}.js`);
    if (!data || !Array.isArray(data.chapters) || data.chapters.length === 0) {
      err("file", "chapters must be a non-empty array");
      continue;
    }

    const ids = new Set();
    let quizCount = 0;
    data.chapters.forEach((ch, i) => {
      const at = `chapter ${i + 1} (${ch && ch.id})`;
      if (!isStr(ch.id) || !/^[a-z0-9]+(-[a-z0-9]+)*$/.test(ch.id)) err(at, "id must be kebab-case");
      if (ids.has(ch.id)) err(at, "duplicate id");
      ids.add(ch.id);
      for (const k of ["title", "section", "summary"]) if (!isStr(ch[k])) err(at, `${k} is required`);

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
            if (new Set(q.options.map((o) => o.trim().toLowerCase())).size !== 4) err(qat, "options must be distinct");
            q.options.forEach((o) => {
              if (BANNED_OPTION.test(o)) err(qat, `option "${o}" breaks when options are shuffled`);
            });
          }
          if (!Number.isInteger(q.answer) || q.answer < 0 || q.answer > 3) err(qat, "answer must be 0–3");
          if (!isStr(q.explain)) err(qat, "explain is required");
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

console.log("\n" + summary.join("\n"));
console.log(`\n${errorCount} error(s), ${warnCount} warning(s)`);
process.exit(errorCount ? 1 : 0);
