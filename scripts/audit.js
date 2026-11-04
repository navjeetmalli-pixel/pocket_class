#!/usr/bin/env node
// Heuristic content audit: flags MCQs whose explanation points at a wrong option.
// node scripts/audit.js [class] [subject]  → prints one line per suspect question.
// A flag is a hint for a person to check, not proof of an error.

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.join(__dirname, "..");
const ctx = { console };
vm.createContext(ctx);
for (const f of ["js/util.js", "data/registry.js"]) {
  try { vm.runInContext(fs.readFileSync(path.join(root, f), "utf8"), ctx, { filename: f }); } catch (e) {}
}
const SD = vm.runInContext("typeof StudyData !== 'undefined' ? StudyData : null", ctx);
const [onlyCls, onlySubj] = process.argv.slice(2);

const norm = (s) => String(s).toLowerCase().replace(/\*\*/g, "").replace(/\s+/g, " ").trim();
const nums = (s) => (norm(s).match(/-?\d+(?:\.\d+)?/g) || []);

function check(q, where, out) {
  if (!Array.isArray(q.options) || q.keepOrder) return;
  const ex = norm(q.explain || "");
  const right = norm(q.options[q.answer] || "");
  const wrong = q.options.map(norm).filter((o, i) => i !== q.answer);
  // 1. Explanation quotes a wrong option (long enough to be meaningful) but never the right one.
  const quoted = wrong.filter((o) => o.length >= 4 && !right.includes(o) && new RegExp(`(^|[^\\p{L}\\p{N}])${o.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}([^\\p{L}\\p{N}]|$)`, "u").test(ex));
  if (quoted.length && right.length >= 4 && !ex.includes(right)) out.push(`${where}\texplain names wrong option "${quoted[0]}"\t${q.q}`);
  // 2. Numeric answer: the right option is a single number, the explanation's last number matches a wrong option instead.
  const rn = nums(right);
  if (rn.length === 1 && /^[-\d.\s a-z°%²³/]*$/i.test(right) && right.length < 14) {
    const en = nums(ex);
    const last = en[en.length - 1];
    if (last && last !== rn[0] && !en.includes(rn[0])) {
      const hit = q.options.findIndex((o, i) => i !== q.answer && nums(o).length === 1 && nums(o)[0] === last);
      if (hit >= 0) out.push(`${where}\tnumbers in explain point to option "${q.options[hit]}", marked "${q.options[q.answer]}"\t${q.q}`);
    }
  }
}

const out = [];
for (let c = 1; c <= 12; c++) {
  if (onlyCls && Number(onlyCls) !== c) continue;
  const dir = path.join(root, "data", `class${c}`);
  if (!fs.existsSync(dir)) continue;
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".js")).map((f) => path.join(dir, f));
  const pdir = path.join(dir, "practice");
  if (fs.existsSync(pdir)) files.push(...fs.readdirSync(pdir).filter((f) => f.endsWith(".js")).map((f) => path.join(pdir, f)));
  for (const file of files) {
    const subj = path.basename(file, ".js").replace(/-\d+$/, "");
    if (onlySubj && subj !== onlySubj) continue;
    const got = [];
    const sb = {
      add: (cls, s, d) => got.push(...(d.chapters || []).map((ch) => [ch.id, ch.quiz || []])),
      addPractice: (cls, s, d) => {
        for (const [id, v] of Object.entries(d || {})) got.push([id, (v && v.mcq) || []]);
      },
      addDiagrams: () => {},
    };
    const fctx = { StudyData: new Proxy(sb, { get: (t, k) => t[k] || (() => {}) }), console };
    vm.createContext(fctx);
    try { vm.runInContext(fs.readFileSync(file, "utf8"), fctx); } catch (e) { continue; }
    const rel = path.relative(root, file);
    for (const [id, qs] of got) qs.forEach((q, i) => check(q, `${rel}\t${id}[${i}]`, out));
  }
}
console.log(out.join("\n"));
console.error(`${out.length} suspect question(s)`);
