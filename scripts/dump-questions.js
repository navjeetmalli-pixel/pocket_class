#!/usr/bin/env node
// Prints a data or practice file's questions in a compact form for checking answer keys:
// node scripts/dump-questions.js data/class10/practice/maths-1.js
// MCQ lines:     [chapter#i] question | a) … | b) … | c) … | d) … || ANS c || explanation
// Written lines: [chapter#w i] (marks) question || answer

const fs = require("fs");
const vm = require("vm");

const flat = (s) => String(s == null ? "" : s).replace(/\s+/g, " ").trim();
for (const file of process.argv.slice(2)) {
  const lines = [];
  const mcq = (id, i, q) => {
    if (!Array.isArray(q.options)) return;
    lines.push(`[${id}#${i}] ${flat(q.q)} | ${q.options.map((o, k) => `${"abcd"[k]}) ${flat(o)}`).join(" | ")} || ANS ${"abcd"[q.answer]} || ${flat(q.explain)}`);
  };
  const sd = {
    add: (c, s, d) =>
      (d.chapters || []).forEach((ch) => {
        (ch.quiz || []).forEach((q, i) => mcq(ch.id, i, q));
        (ch.examples || []).forEach((e, i) => lines.push(`[${ch.id}#ex ${i}] ${flat(e.q)} || ${(e.steps || []).map(flat).join(" ; ")} => ${flat(e.answer)}`));
      }),
    addPractice: (c, s, d) =>
      Object.entries(d || {}).forEach(([id, v]) => {
        ((v && v.mcq) || []).forEach((q, i) => mcq(id, i, q));
        ((v && v.written) || []).forEach((w, i) => lines.push(`[${id}#w ${i}] (${w.marks}) ${flat(w.q)} || ${flat(w.a)}`));
      }),
  };
  const ctx = { StudyData: new Proxy(sd, { get: (t, k) => t[k] || (() => {}) }), console };
  vm.createContext(ctx);
  vm.runInContext(fs.readFileSync(file, "utf8"), ctx, { filename: file });
  console.log(`### ${file}\n${lines.join("\n")}`);
}
