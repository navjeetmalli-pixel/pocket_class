#!/usr/bin/env node
// Counts what the app really contains, straight from the data files, so README.md and STORE_LISTING.md
// can quote true numbers. Run it before updating store text:  node scripts/count-content.js
//
// Every data file is counted once. The CBSE and PSEB catalogs share files (for example class 4 maths is used
// by both boards), so counting files, and not catalog entries, never counts a shared copy twice. Files with
// identical content (byte for byte) are counted once as well.
//   --json   print the numbers as JSON
// The "round down" column is what to write in text ("over 40,000").

const fs = require("fs");
const path = require("path");
const vm = require("vm");
const crypto = require("crypto");

const root = path.join(__dirname, "..");
const read = (f) => fs.readFileSync(path.join(root, f), "utf8");

// ---------- load the data files with a stub of StudyData ----------
const content = []; // { cls, subject, data }
const practice = []; // { cls, subject, data: { chapterId: { mcq, written } } }
const diagrams = []; // { cls, subject, data: { chapterId: [diagram] } }
const timelines = [];
const paths = {};
const stub = {
  add: (cls, subject, data) => content.push({ cls, subject, data }),
  addIndex() {},
  addPractice: (cls, subject, data) => practice.push({ cls, subject, data }),
  addDiagrams: (cls, subject, data) => diagrams.push({ cls, subject, data }),
  addTimelines: (list) => timelines.push(...list),
  addObjectives() {},
  addPath: (subject, data) => (paths[subject] = data),
};
const ctx = vm.createContext({ StudyData: stub, console });
ctx.globalThis = ctx;

const seen = new Set(); // content hashes, to skip a byte-identical copy
const counted = []; // [cls, subject] of every subject file that was counted (a copy is not)
let skippedCopies = 0;
function load(file) {
  const src = read(file);
  const h = crypto.createHash("sha1").update(src).digest("hex");
  if (seen.has(h)) {
    skippedCopies++;
    return;
  }
  seen.add(h);
  const m = /^data\/class(\d+)\/([\w-]+)\.js$/.exec(file);
  if (m && m[2] !== "index" && m[2] !== "objectives") counted.push([Number(m[1]), m[2]]);
  vm.runInContext(src, ctx, { filename: file });
}

const dataDir = path.join(root, "data");
for (const d of fs.readdirSync(dataDir).filter((x) => /^class\d+$/.test(x)).sort((a, b) => a.slice(5) - b.slice(5))) {
  for (const f of fs.readdirSync(path.join(dataDir, d)).sort()) {
    if (f.endsWith(".js") && f !== "index.js" && f !== "objectives.js") load(`data/${d}/${f}`);
  }
  for (const sub of ["practice", "diagrams"]) {
    const dir = path.join(dataDir, d, sub);
    if (fs.existsSync(dir)) for (const f of fs.readdirSync(dir).sort()) if (f.endsWith(".js")) load(`data/${d}/${sub}/${f}`);
  }
}
for (const f of fs.readdirSync(path.join(dataDir, "paths")).sort()) if (f.endsWith(".js")) load(`data/paths/${f}`);
if (fs.existsSync(path.join(dataDir, "games", "timelines.js"))) load("data/games/timelines.js");

// ---------- count ----------
const len = (a) => (Array.isArray(a) ? a.length : 0);
const n = {
  chapters: 0,
  quizMcq: 0,
  practiceMcq: 0,
  qa: 0,
  practiceWritten: 0,
  examples: 0,
  terms: 0,
  diagrams: 0,
  pathLevels: 0,
  pathTopics: 0,
  pathSubjects: Object.keys(paths).length,
  pathOwnChapters: 0,
  pathOwnMcq: 0,
  pathOwnWritten: 0,
  pathOwnExamples: 0,
  pathOwnTerms: 0,
  timelineEvents: 0,
  timelineChapters: 0,
};

for (const { data } of content) {
  for (const ch of data.chapters || []) {
    n.chapters++;
    n.quizMcq += len(ch.quiz);
    n.qa += len(ch.qa);
    n.examples += len(ch.examples);
    n.terms += len(ch.terms);
  }
}
for (const { data } of practice) {
  for (const p of Object.values(data)) {
    n.practiceMcq += len(p.mcq);
    n.practiceWritten += len(p.written);
  }
}
for (const { data } of diagrams) for (const list of Object.values(data)) n.diagrams += len(list);
for (const p of Object.values(paths)) {
  for (const t of p.topics || []) {
    n.pathTopics++;
    for (const lv of t.levels || []) {
      n.pathLevels++;
      if (lv.own) {
        n.pathOwnChapters++;
        n.pathOwnMcq += len(lv.own.quiz);
        n.pathOwnWritten += len(lv.own.qa);
        n.pathOwnExamples += len(lv.own.examples);
        n.pathOwnTerms += len(lv.own.terms);
      }
    }
  }
}
for (const t of timelines) {
  n.timelineChapters++;
  n.timelineEvents += len(t.events);
}

// Generator types: the question generators in js/gen.js (the names Gen exposes).
let genTypes = 0;
try {
  const g = vm.createContext({ console, Math, Date, Number, String, Array, Object, Set, Map });
  genTypes = vm.runInContext(read("js/gen.js") + "\n;Gen.names.length", g);
} catch (e) {
  console.error("Could not load js/gen.js:", e.message);
}

// Game types: one Games.register("type", ...) call per file in js/games/ (comments do not count).
let gameTypes = 0;
const gameNames = [];
for (const f of fs.readdirSync(path.join(root, "js", "games"))) {
  if (!f.endsWith(".js")) continue;
  for (const line of read(`js/games/${f}`).split("\n")) {
    const m = /^\s*Games\.register\(\s*["']([\w-]+)["']/.exec(line);
    if (m) {
      gameTypes++;
      gameNames.push(m[1]);
    }
  }
}

// Auto-made practice questions (js/derive.js): made from the terms, notes, timelines and India map above, so they are NOT part of the
// hand-written counts. Counted over the same files (a byte-identical copy once), by kind.
const derived = { total: 0, byKind: {} };
try {
  const dctx = vm.createContext({ console, Intl });
  dctx.globalThis = dctx;
  const drun = (f) => vm.runInContext(read(f), dctx, { filename: f });
  drun("data/registry.js");
  for (const [cls, subject] of counted) drun(`data/class${cls}/${subject}.js`);
  drun("data/games/timelines.js");
  drun("js/gen.js");
  drun("js/gen-lang.js");
  drun("js/gen-sci.js");
  vm.runInContext("const t = (s) => s; const I18N = {};", dctx);
  drun("js/labs/india-map.js");
  const Derive = vm.runInContext(read("js/derive.js") + "\n;Derive", dctx);
  const D = vm.runInContext("StudyData", dctx);
  for (const [cls, subject] of counted) {
    for (const ch of D.chapters(cls, subject)) {
      for (const [kind, v] of Object.entries(Derive.kinds(cls, subject, ch))) {
        if (kind === "match") continue; // match sets reuse the same terms
        derived.byKind[kind] = (derived.byKind[kind] || 0) + v;
        derived.total += v;
      }
    }
  }
} catch (e) {
  console.error("Could not count the auto-made questions:", e.message);
}

const totals = {
  chapters: n.chapters,
  mcqs: n.quizMcq + n.practiceMcq + n.pathOwnMcq,
  written: n.qa + n.practiceWritten + n.pathOwnWritten,
  examples: n.examples + n.pathOwnExamples,
  flashcards: n.terms + n.pathOwnTerms,
  diagrams: n.diagrams,
  generatorTypes: genTypes,
  gameTypes,
  pathTopics: n.pathTopics,
  pathLevels: n.pathLevels,
  timelineEvents: n.timelineEvents,
};

// Round down to 2 significant digits for text (40,000; 1,200; 150).
function down(x) {
  if (x < 100) return x;
  const p = 10 ** (String(x).length - 2);
  return Math.floor(x / p) * p;
}

if (process.argv.includes("--json")) {
  console.log(JSON.stringify({ totals, detail: n, derived, gameNames, skippedCopies }, null, 2));
  process.exit(0);
}

const rows = [
  ["Chapters (Classes 1–12, both boards)", totals.chapters],
  ["MCQs (chapter quizzes + practice banks + practice-by-topic)", totals.mcqs],
  ["    chapter quizzes", n.quizMcq],
  ["    practice banks", n.practiceMcq],
  ["    practice-by-topic own chapters", n.pathOwnMcq],
  ["Written questions (chapter Q&A + practice banks + practice-by-topic)", totals.written],
  ["    chapter Q&A", n.qa],
  ["    practice banks", n.practiceWritten],
  ["    practice-by-topic own chapters", n.pathOwnWritten],
  ["Solved examples", totals.examples],
  ["Flashcard terms", totals.flashcards],
  ["Diagrams", totals.diagrams],
  ["Question generator types", totals.generatorTypes],
  ["Game types", totals.gameTypes],
  ["Practice by topic: subjects", n.pathSubjects],
  ["Practice by topic: topics", totals.pathTopics],
  ["Practice by topic: levels", totals.pathLevels],
  ["Timeline events", totals.timelineEvents],
  ["    chapters with a timeline", n.timelineChapters],
];
const width = Math.max(...rows.map((r) => r[0].length));
console.log("Content totals, counted from data/ and js/ (each file once)\n");
console.log("Item".padEnd(width), "  ", "Count".padStart(8), "  ", "Round down");
console.log("-".repeat(width + 28));
for (const [label, value] of rows) {
  const top = !label.startsWith(" ");
  console.log(label.padEnd(width), "  ", value.toLocaleString("en-IN").padStart(8), "  ", top ? down(value).toLocaleString("en-US") : "");
}
console.log("-".repeat(width + 28));
console.log("Auto-made practice questions (not hand-written; from terms, notes, timelines and the map)".padEnd(width), "  ", derived.total.toLocaleString("en-IN").padStart(8), "  ", down(derived.total).toLocaleString("en-US"));
for (const [kind, v] of Object.entries(derived.byKind)) console.log(`    ${kind}`.padEnd(width), "  ", v.toLocaleString("en-IN").padStart(8));
console.log("\nGame types: " + gameNames.join(", "));
if (skippedCopies) console.log(`\n${skippedCopies} byte-identical file(s) were counted once.`);
