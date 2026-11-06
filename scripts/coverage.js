#!/usr/bin/env node
// The coverage list: one row per board, class, subject and chapter, with what practice it has, so gaps show up as
// numbers instead of guesses. It writes:
//   docs/coverage.csv   every chapter (open in a spreadsheet; filter on the "gaps" column)
//   docs/COVERAGE.md    a summary per board, class and subject, plus how many chapters have each gap
// Usage:  node scripts/coverage.js            (about a minute; --quick skips the question-to-objective mapping)
//
// Columns of the CSV:
//   quiz            MCQs in the chapter's own quiz
//   bank_easy/medium/hard   practice-bank MCQs by level (1, 2, 3)
//   written_short/mid/long  practice-bank written questions by marks (1–2, 3, 4–5)
//   qa              the chapter's own short-answer questions
//   examples, terms, diagrams, labs
//   generators      number-changing question makers that fit the chapter (js/gen*.js): endless fresh practice
//   auto_made       questions made from the chapter's terms, notes, timelines and map data (js/derive.js)
//   objectives      learning objectives ("hand" = hand-written, "derived" = made from the notes headings)
//   objectives_without_questions   objectives no saved question maps to
//   review          the subject's review state (syllabus.status, or "draft" when reviewed is false)
//   gaps            short codes; see GAPS below
//
// The counts are what the data files hold. They don't say a chapter matches the current syllabus, or that its answers
// were checked: that is the teacher review (RELEASE_CHECKLIST.md).

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.join(__dirname, "..");
const quick = process.argv.includes("--quick");

const ctx = vm.createContext({ console, Intl, Views: {}, esc: String, icon: () => "", document: {}, Games: {}, Store: {}, Learn: {} });
ctx.globalThis = ctx;
const run = (f) => vm.runInContext(fs.readFileSync(path.join(root, f), "utf8"), ctx, { filename: f });
run("data/registry.js");
vm.runInContext("function t(s, v) { return v ? String(s).replace(/\\{(\\w+)\\}/g, (w, k) => (k in v ? v[k] : w)) : s; }", ctx);
for (let c = 1; c <= 12; c++) {
  const dir = path.join(root, "data", `class${c}`);
  for (const f of fs.readdirSync(dir).sort()) if (f.endsWith(".js") && f !== "index.js") run(`data/class${c}/${f}`);
  for (const sub of ["practice", "diagrams"]) {
    const d = path.join(dir, sub);
    if (fs.existsSync(d)) for (const f of fs.readdirSync(d).sort()) if (f.endsWith(".js")) run(`data/class${c}/${sub}/${f}`);
  }
}
run("data/games/timelines.js");
run("js/gen.js");
run("js/gen-lang.js");
run("js/gen-sci.js");
run("js/derive.js");
run("js/objectives.js");
// Labs: labs.js first, then each lab; a lab that needs a browser to load is skipped (it only adds to the "labs" count).
run("js/labs/labs.js");
const labsSkipped = [];
for (const f of fs.readdirSync(path.join(root, "js", "labs")).sort())
  if (f.endsWith(".js") && f !== "i18n.js" && f !== "labs.js") {
    try {
      run(`js/labs/${f}`);
    } catch (e) {
      labsSkipped.push(f);
    }
  }

const D = vm.runInContext("StudyData", ctx);
const Gen = vm.runInContext("Gen", ctx);
const Derive = vm.runInContext("Derive", ctx);
const O = vm.runInContext("Objectives", ctx);
const Labs = vm.runInContext("Labs", ctx);

// Gap codes, in the order they are listed.
const GAPS = {
  "few-mcq": "fewer than 15 MCQs (quiz + bank)",
  "no-hard": "Class 3+: no hard (level 3) bank MCQs",
  "no-written": "no written practice (bank or chapter Q&A)",
  "no-long": "Class 6+: no 4–5 mark written question",
  "no-fresh": "no endless practice (no generator and no auto-made questions)",
  "obj-empty": "an objective that no saved question maps to",
};

const csvCell = (v) => {
  const s = String(v == null ? "" : v);
  return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
};

const rows = [];
const subjectSum = new Map(); // "board|cls|subject" -> sums
for (const board of ["cbse", "pseb"]) {
  D.setBoard(board);
  for (const cls of D.classes) {
    if (!D.hasBoardContent(cls)) continue;
    for (const subj of D.subjectsFor(cls)) {
      const data = D.content[cls] && D.content[cls][subj.id];
      if (!data) continue;
      const sy = data.syllabus || {};
      const review = sy.status || (sy.reviewed ? "checked" : "draft");
      const key = `${board}|${cls}|${subj.id}`;
      const sum = { board, cls, subject: subj.id, name: subj.name, chapters: 0, mcq: 0, written: 0, fresh: 0, review, gaps: {} };
      subjectSum.set(key, sum);
      for (const ch of data.chapters) {
        const p = D.practiceFor(cls, subj.id, ch.id);
        const lv = [1, 2, 3].map((l) => p.mcq.filter((q) => q.level === l).length);
        const marks = (x) => x.marks || 0;
        const wShort = p.written.filter((x) => marks(x) <= 2).length;
        const wMid = p.written.filter((x) => marks(x) === 3).length;
        const wLong = p.written.filter((x) => marks(x) >= 4).length;
        const gens = Gen.forChapter(cls, subj.id, ch.id).length;
        const k = Derive.kinds(cls, subj.id, ch) || {};
        const auto = Object.values(k).reduce((a, b) => a + (b || 0), 0);
        const objs = O.forChapter(cls, subj.id, ch);
        let objEmpty = "";
        if (!quick && objs.length > 1) {
          const hits = new Map(objs.map((o) => [o.id, 0]));
          for (const q of [...ch.quiz, ...p.mcq]) {
            const o = O.forQuestion(cls, subj.id, ch, q);
            if (o && hits.has(o.id)) hits.set(o.id, hits.get(o.id) + 1);
          }
          objEmpty = [...hits.values()].filter((n) => n === 0).length;
        }
        const quiz = (ch.quiz || []).length;
        const qa = (ch.qa || []).length;
        const mcqAll = quiz + p.mcq.length;
        const gaps = [];
        if (mcqAll < 15) gaps.push("few-mcq");
        if (cls >= 3 && !lv[2]) gaps.push("no-hard");
        if (!p.written.length && !qa) gaps.push("no-written");
        if (cls >= 6 && !wLong) gaps.push("no-long");
        if (!gens && !auto) gaps.push("no-fresh");
        if (objEmpty) gaps.push("obj-empty");
        rows.push({
          board, cls, subject: subj.id, chapter: ch.id, title: ch.title, quiz,
          bank_easy: lv[0], bank_medium: lv[1], bank_hard: lv[2],
          written_short: wShort, written_mid: wMid, written_long: wLong, qa,
          examples: (ch.examples || []).length, terms: (ch.terms || []).length, diagrams: D.diagramsFor(cls, subj.id, ch.id).length,
          labs: Labs.forChapter(cls, subj.id, ch.id).length, generators: gens, auto_made: auto,
          objectives: `${objs.length} ${objs.length && objs[0].derived ? "derived" : "hand"}`, objectives_without_questions: objEmpty,
          review, gaps: gaps.join(" "),
        });
        sum.chapters++;
        sum.mcq += mcqAll;
        sum.written += p.written.length + qa;
        if (gens || auto) sum.fresh++;
        gaps.forEach((g) => (sum.gaps[g] = (sum.gaps[g] || 0) + 1));
      }
    }
  }
}
D.setBoard("cbse");

// ---------- write ----------
const cols = Object.keys(rows[0]);
fs.writeFileSync(path.join(root, "docs", "coverage.csv"), [cols.join(","), ...rows.map((r) => cols.map((c) => csvCell(r[c])).join(","))].join("\n") + "\n");

const gapTotal = {};
rows.forEach((r) => r.gaps.split(" ").filter(Boolean).forEach((g) => (gapTotal[g] = (gapTotal[g] || 0) + 1)));
const fmt = (n) => n.toLocaleString("en-US");
const md = [];
md.push("# Content coverage");
md.push("");
md.push("Made by `node scripts/coverage.js` from the data files; don't edit by hand. Every chapter is in `docs/coverage.csv`.");
md.push("Counts are what the app holds. They don't mean a chapter matches the current syllabus or that its answers were checked by a teacher.");
md.push("");
md.push(`${fmt(rows.length)} board-class-subject-chapter rows (a chapter used by both boards is listed under each).`);
md.push("");
md.push("## Gaps");
md.push("");
md.push("| Gap | Chapters |");
md.push("|---|---:|");
for (const [g, text] of Object.entries(GAPS)) md.push(`| \`${g}\`: ${text} | ${fmt(gapTotal[g] || 0)} |`);
if (quick) md.push("", "(`obj-empty` was not checked: the list was made with --quick.)");
md.push("");
md.push("## Per subject");
md.push("");
md.push("MCQs and written questions per chapter are averages. Fresh: chapters with endless practice (generators or auto-made questions).");
md.push("");
md.push("| Board | Class | Subject | Chapters | MCQs/ch | Written/ch | Fresh | Review | Gaps (chapters) |");
md.push("|---|---:|---|---:|---:|---:|---:|---|---|");
for (const s of subjectSum.values()) {
  if (!s.chapters) continue;
  const g = Object.keys(GAPS).filter((k) => s.gaps[k]).map((k) => `${k} ${s.gaps[k]}`).join(", ");
  md.push(`| ${s.board.toUpperCase()} | ${s.cls} | ${s.name} | ${s.chapters} | ${Math.round(s.mcq / s.chapters)} | ${Math.round(s.written / s.chapters)} | ${s.fresh}/${s.chapters} | ${s.review} | ${g || "none"} |`);
}
fs.writeFileSync(path.join(root, "docs", "COVERAGE.md"), md.join("\n") + "\n");

console.log(`${rows.length} rows -> docs/coverage.csv, summary -> docs/COVERAGE.md`);
if (labsSkipped.length) console.log(`  (labs not counted, they need a browser to load: ${labsSkipped.join(", ")})`);
for (const [g, text] of Object.entries(GAPS)) console.log(`  ${String(gapTotal[g] || 0).padStart(5)}  ${g.padEnd(10)} ${text}`);
