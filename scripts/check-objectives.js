#!/usr/bin/env node
// Reports how well questions map to learning objectives (js/objectives.js), for a sample of chapters.
//
//   node scripts/check-objectives.js                      sample: every chapter with hand-written objectives + 2 per class (derived)
//   node scripts/check-objectives.js 10 maths             all chapters of one class and subject
//   node scripts/check-objectives.js 10 maths real-numbers --show 12   one chapter, with 12 questions printed under their objective
//   node scripts/check-objectives.js --all                every chapter of every class (slow)
//
// Per chapter: questions (saved quiz + practice banks) per objective, how many matched no word at all (they go to the
// first objective), how many have a clear winner, and a leave-one-out test: each notes point is taken out of the notes
// and scored as if it were a question; the objective it came from should win (there is no hand-labelled answer key, so
// this is the best available measure of whether the word match tells the objectives apart).

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.join(__dirname, "..");
const args = process.argv.slice(2);
const flag = (f) => args.includes(f);
const showN = flag("--show") ? Number(args[args.indexOf("--show") + 1]) || 8 : 0;
const pos = args.filter((a, i) => !a.startsWith("--") && !(i > 0 && args[i - 1] === "--show"));

const ctx = vm.createContext({ console });
ctx.globalThis = ctx;
const run = (f) => vm.runInContext(fs.readFileSync(path.join(root, f), "utf8"), ctx, { filename: f });
run("data/registry.js");
vm.runInContext("function t(s, v) { return v ? String(s).replace(/\\{(\\w+)\\}/g, (w, k) => (k in v ? v[k] : w)) : s; }", ctx);
run("js/objectives.js");
const D = vm.runInContext("StudyData", ctx);
const O = vm.runInContext("Objectives", ctx);

function loadClass(cls, only) {
  const dir = path.join(root, "data", `class${cls}`);
  for (const f of fs.readdirSync(dir)) {
    if (!f.endsWith(".js") || f === "index.js") continue;
    if (f === "objectives.js" || !only || only === path.basename(f, ".js")) run(`data/class${cls}/${f}`);
  }
  const pdir = path.join(dir, "practice");
  if (fs.existsSync(pdir)) for (const f of fs.readdirSync(pdir)) if (f.endsWith(".js") && (!only || f.startsWith(only + "-"))) run(`data/class${cls}/practice/${f}`);
}

const classes = D.classes;
let targets; // [{ cls, subject, chapter }]
const wantAll = flag("--all");
const wantCls = pos[0] ? Number(pos[0]) : null;
const wantSubj = pos[1] || null;
const wantCh = pos[2] || null;
for (const c of wantCls ? [wantCls] : classes) loadClass(c, wantSubj);

targets = [];
for (const c of wantCls ? [wantCls] : classes) {
  for (const [subject, data] of Object.entries(D.content[c] || {})) {
    if (wantSubj && subject !== wantSubj) continue;
    const handCh = data.chapters.filter((ch) => (D.objectivesFor(c, subject, ch.id) || []).length);
    let chosen;
    if (wantCh) chosen = data.chapters.filter((ch) => ch.id === wantCh);
    else if (wantAll || wantSubj) chosen = data.chapters;
    else chosen = [...handCh, ...data.chapters.filter((ch) => !handCh.includes(ch)).slice(0, subject === "maths" || subject === "science" ? 2 : 0)];
    for (const ch of chosen) targets.push({ cls: c, subject, ch });
  }
}

const badTags = [];
const sum = { tagged: 0, chapters: 0, hand: 0, q: 0, none: 0, clear: 0, empties: 0, objs: 0, looN: 0, looOk: 0 };
const rows = [];
for (const { cls, subject, ch } of targets) {
  const objs = O.forChapter(cls, subject, ch);
  if (objs.length < 2) continue;
  const pr = D.practiceFor(cls, subject, ch.id);
  const bank = pr.mcq;
  const qs = [...ch.quiz, ...bank];
  // Questions that name their objective (obj: "<id>"): the id must exist in this chapter, else the tag is silently ignored.
  for (const q of [...qs, ...(pr.written || [])])
    if (q.obj) {
      sum.tagged++;
      if (!objs.some((o) => o.id === q.obj)) badTags.push(`${cls}/${subject}/${ch.id}: obj "${q.obj}" is not an objective of this chapter (${String(q.q).slice(0, 60)})`);
    }
  const counts = objs.map(() => 0);
  let none = 0;
  let clear = 0;
  const shown = [];
  for (const q of qs) {
    const sc = O.scores(cls, subject, ch, q);
    const order = sc.map((s, i) => i).sort((a, b) => sc[b] - sc[a] || a - b);
    const best = order[0];
    if (sc[best] === 0) none++;
    else if (sc[best] >= 1.25 * (sc[order[1]] || 0)) clear++;
    const mapped = O.forQuestion(cls, subject, ch, q);
    counts[objs.findIndex((o) => o.id === mapped.id)]++;
    if (shown.length < showN) shown.push({ q, mapped, sc: sc[best], second: sc[order[1]] });
  }
  // Leave-one-out: each notes point, scored against the chapter with that point removed.
  let looN = 0;
  let looOk = 0;
  for (const n of ch.notes)
    n.points.forEach((p, pi) => {
      const home = objs.findIndex((o) => o.topics.some((tp) => tp.trim() === n.heading.trim()));
      if (home < 0) return;
      const clone = { ...ch, notes: ch.notes.map((m) => (m === n ? { ...m, points: m.points.filter((_, j) => j !== pi) } : m)) };
      if (clone.notes.find((m) => m === n || m.heading === n.heading).points.length === 0) return;
      const sc = O.scores(cls, subject, clone, { q: p.replace(/\*\*/g, "") });
      const order = sc.map((s, i) => i).sort((a, b) => sc[b] - sc[a] || a - b);
      looN++;
      if (order[0] === home) looOk++;
    });
  const hand = !objs[0].derived;
  sum.chapters++;
  if (hand) sum.hand++;
  sum.q += qs.length;
  sum.none += none;
  sum.clear += clear;
  sum.empties += counts.filter((c) => c === 0).length;
  sum.objs += objs.length;
  sum.looN += looN;
  sum.looOk += looOk;
  rows.push({ id: `${cls}/${subject}/${ch.id}`, hand, qs: qs.length, counts, none, clear, looN, looOk });
  if (showN) {
    console.log(`\n=== ${cls}/${subject}/${ch.id} (${hand ? "hand-written" : "derived"} objectives)`);
    objs.forEach((o, i) => console.log(`  [${i}] ${o.id}: ${o.text.slice(0, 90)}  (${counts[i]} questions)`));
    shown.forEach((s) => console.log(`  - ${s.q.q.replace(/\*\*/g, "").slice(0, 90)}\n      -> ${s.mapped.id}   score ${s.sc.toFixed(2)} vs ${s.second.toFixed(2)}`));
  }
}

const pc = (a, b) => (b ? Math.round((a / b) * 100) + "%" : "n/a");
if (!showN) {
  for (const r of rows) console.log(`${r.hand ? "H" : "d"} ${r.id.padEnd(58)} q=${String(r.qs).padStart(3)}  per objective: ${r.counts.join(" ")}  none=${r.none} clear=${pc(r.clear, r.qs)} loo=${pc(r.looOk, r.looN)}`);
}
console.log(
  `\n${sum.chapters} chapters (${sum.hand} with hand-written objectives), ${sum.objs} objectives, ${sum.q} questions` +
    `\n  no word in common (fall back to the first objective): ${sum.none} (${pc(sum.none, sum.q)})` +
    `\n  clear winner (top score at least 1.25x the runner-up):  ${sum.clear} (${pc(sum.clear, sum.q)})` +
    `\n  objectives that no question maps to:                    ${sum.empties} of ${sum.objs} (${pc(sum.empties, sum.objs)})` +
    `\n  leave-one-out, notes point -> its own objective:        ${sum.looOk} of ${sum.looN} (${pc(sum.looOk, sum.looN)})` +
    `\n  questions that name their objective (obj:):            ${sum.tagged}, unknown ids: ${badTags.length}`
);
badTags.slice(0, 40).forEach((b) => console.log("  ✗ " + b));
if (badTags.length) process.exitCode = 1;
