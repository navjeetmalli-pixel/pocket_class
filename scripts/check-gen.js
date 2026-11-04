#!/usr/bin/env node
// Checks the question generators in js/gen.js:
//   1. every generator, 500 seeds: question and answer present, 3 distinct wrong answers (none equal to the
//      answer), no NaN / undefined / Infinity / exponent notation ("e-7") in any text, at least one step;
//   2. every chapter id in Gen.MAP exists in that class's subject file under data/.
// Usage: node scripts/check-gen.js   (exit code 1 on any problem; also run by node scripts/validate.js)

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.join(__dirname, "..");
const ctx = { console };
vm.createContext(ctx);
const Gen = vm.runInContext(fs.readFileSync(path.join(root, "js", "gen.js"), "utf8") + "\n;Gen", ctx);

let problems = 0;
const bad = (msg) => {
  problems++;
  if (problems <= 60) console.log("  ✗ " + msg);
};

// ---- 1. every generator over 500 seeds ----
const BAD_TEXT = /NaN|undefined|Infinity|\bnull\b|\de[+-]\d/;
let made = 0;
for (const name of Gen.names) {
  const fails = {};
  for (let seed = 1; seed <= 500; seed++) {
    const q = Gen.make(name, seed * 2654435761);
    if (!q) {
      fails.nothing = (fails.nothing || 0) + 1;
      continue;
    }
    made++;
    const why = [];
    if (!q.q || !String(q.q).trim()) why.push("empty question");
    const [a, ...wrong] = q.options;
    if (!a || !String(a).trim()) why.push("empty answer");
    if (wrong.length !== 3) why.push("needs 3 wrong answers");
    if (new Set(wrong).size !== wrong.length) why.push("duplicate wrong answers");
    if (wrong.includes(a)) why.push("a wrong answer equals the answer");
    if (wrong.some((w) => !w || !String(w).trim())) why.push("empty wrong answer");
    if (!Array.isArray(q.steps) || !q.steps.length || q.steps.some((s) => !s || !String(s).trim())) why.push("no steps");
    const all = [q.q, ...q.options, ...(q.steps || [])].join(" | ");
    if (BAD_TEXT.test(all)) why.push("bad text (NaN/undefined/Infinity/exponent): " + all.match(BAD_TEXT)[0]);
    for (const w of why) fails[w] = (fails[w] || 0) + 1;
    if (why.length && fails.__shown === undefined) fails.__shown = `e.g. seed ${seed * 2654435761}: ${q.q}`;
  }
  const kinds = Object.keys(fails).filter((k) => k !== "__shown");
  if (kinds.length) bad(`${name}: ${kinds.map((k) => `${k} ×${fails[k]}`).join("; ")} ${fails.__shown || ""}`);
}

// ---- 2. every MAP chapter exists, and every generator it names exists ----
const loaded = {};
function chapterIds(cls, subject) {
  const key = cls + "/" + subject;
  if (key in loaded) return loaded[key];
  const file = path.join(root, "data", "class" + cls, subject + ".js");
  if (!fs.existsSync(file)) return (loaded[key] = null);
  const c = { globalThis: {} };
  c.globalThis = c;
  vm.createContext(c);
  vm.runInContext(fs.readFileSync(path.join(root, "data", "registry.js"), "utf8"), c);
  vm.runInContext(fs.readFileSync(file, "utf8"), c);
  const data = c.StudyData.content[cls] && c.StudyData.content[cls][subject];
  return (loaded[key] = data ? new Set(data.chapters.map((ch) => ch.id)) : null);
}
let entries = 0;
for (const [subject, byClass] of Object.entries(Gen.MAP)) {
  for (const [cls, chapters] of Object.entries(byClass)) {
    const ids = chapterIds(cls, subject);
    if (!ids) {
      bad(`MAP ${subject} class ${cls}: no data/class${cls}/${subject}.js`);
      continue;
    }
    for (const [id, names] of Object.entries(chapters)) {
      entries++;
      if (!ids.has(id)) bad(`MAP ${subject} class ${cls}: chapter "${id}" does not exist`);
      for (const nm of names) if (!Gen.names.includes(nm)) bad(`MAP ${subject} class ${cls} "${id}": unknown generator "${nm}"`);
      if (!Gen.questions(+cls, subject, id, 3, 7).length) bad(`MAP ${subject} class ${cls} "${id}": produced no questions`);
    }
  }
}

console.log(`Generators: ${Gen.names.length} checked, ${made} questions made, ${entries} chapter mappings checked`);
console.log(problems ? `${problems} problem(s) in generators` : "Generators OK");
if (require.main === module) process.exit(problems ? 1 : 0);
module.exports = { problems };
