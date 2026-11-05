#!/usr/bin/env node
// How many Classes 1-3 multiple-choice questions get pictures from the picture dictionary (js/picdict.js)?
//
//   node scripts/check-pictures.js          full report
//   (scripts/validate.js runs it with --brief: the totals only. It never fails the build.)
//
// Per class and subject: questions whose options ALL have pictures (shown as picture answers), questions with a picture of
// their own subject above the question, and questions with neither. Then the option words that still have no picture, most
// common first, so we know what to draw next: first those that stop an otherwise picturable question (a sibling option has a
// picture), then the overall list.

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.join(__dirname, "..");
const brief = process.argv.includes("--brief");

const ctx = vm.createContext({ console });
ctx.globalThis = ctx;
const run = (f) => vm.runInContext(fs.readFileSync(path.join(root, f), "utf8"), ctx, { filename: f });
run("data/registry.js");
run("js/pics.js");
run("js/picdict.js");
const D = vm.runInContext("StudyData", ctx);
const PD = vm.runInContext("PicDict", ctx);

const rows = {}; // "cls subject" -> counts
const missing = new Map(); // word -> questions it appears in
const blockers = new Map(); // word -> questions where a sibling option does have a picture
const txt = {};
const total = { q: 0, all: 0, qp: 0, none: 0, both: 0 };

for (const cls of [1, 2, 3]) {
  const dir = path.join(root, "data", `class${cls}`);
  for (const f of fs.readdirSync(dir)) if (f.endsWith(".js") && f !== "index.js" && f !== "objectives.js") run(`data/class${cls}/${f}`);
  const pdir = path.join(dir, "practice");
  if (fs.existsSync(pdir)) for (const f of fs.readdirSync(pdir)) if (f.endsWith(".js")) run(`data/class${cls}/practice/${f}`);
  for (const [subject, data] of Object.entries(D.content[cls] || {})) {
    for (const ch of data.chapters) {
      // notes, terms, worked examples, Q&A and the chapter-list picture (PicDict.illustrate; Classes 1-3 only)
      const tx = (txt[cls] = txt[cls] || { pts: 0, ptsPic: 0, terms: 0, termsPic: 0, ex: 0, exPic: 0, qa: 0, qaPic: 0, ch: 0, chOwn: 0 });
      for (const n of ch.notes || []) for (const p of n.points || []) { tx.pts++; if (PD.illustrate(p, {})) tx.ptsPic++; }
      for (const x of ch.terms || []) { tx.terms++; if (PD.illustrate(x.term, { max: 1, title: true })) tx.termsPic++; }
      for (const x of ch.examples || []) { tx.ex++; if (PD.illustrate(x.q, {})) tx.exPic++; }
      for (const x of ch.qa || []) { tx.qa++; if (PD.illustrate(x.q, {})) tx.qaPic++; }
      tx.ch++;
      if (PD.illustrate(ch.title, { max: 1, title: true }) || (ch.notes || []).some((n) => (n.points || []).some((p) => PD.illustrate(p, { max: 1 })))) tx.chOwn++;
      const pr = D.practiceFor(cls, subject, ch.id);
      for (const q of [...(ch.quiz || []), ...((pr && pr.mcq) || [])]) {
        if (!q || !Array.isArray(q.options)) continue;
        const r = (rows[`${cls} ${subject}`] = rows[`${cls} ${subject}`] || { cls, subject, q: 0, all: 0, qp: 0, none: 0, both: 0 });
        const opts = q.noPic ? null : PD.forOptions(q.options, { q: q.q });
        const qp = PD.forQuestion(q);
        r.q++;
        total.q++;
        if (opts) { r.all++; total.all++; }
        if (qp) { r.qp++; total.qp++; }
        if (opts && qp) { r.both++; total.both++; }
        if (!opts && !qp) { r.none++; total.none++; }
        if (!opts) {
          const ctxText = String(q.q).toLowerCase();
          const hasSome = q.options.some((o, i) => PD.forText(o, { context: ctxText, siblings: q.options.filter((_, j) => j !== i), decorative: true }));
          q.options.forEach((o, i) => {
            const pic = PD.forText(o, { context: ctxText, siblings: q.options.filter((_, j) => j !== i), decorative: true });
            if (pic) return;
            const w = PD.norm(o) || String(o);
            missing.set(w, (missing.get(w) || 0) + 1);
            if (hasSome) blockers.set(w, (blockers.get(w) || 0) + 1);
          });
        }
      }
    }
  }
}

const pc = (a, b) => (b ? Math.round((a / b) * 100) + "%" : "n/a");
const pad = (s, n) => String(s).padEnd(n);
const num = (s, n) => String(s).padStart(n);
console.log(`Picture dictionary: ${PD.size.en} English, ${PD.size.hi} Hindi, ${PD.size.pa} Punjabi words, ${PD.size.special} colour / number / shape / money forms; ${vm.runInContext("Pics.names.length", ctx)} drawings in the kit.`);
if (!brief) console.log(`\n${pad("class subject", 18)}${num("questions", 10)}${num("all options", 14)}${num("question pic", 16)}${num("neither", 9)}`);
const list = Object.values(rows).sort((a, b) => a.cls - b.cls || a.subject.localeCompare(b.subject));
if (!brief)
  for (const r of list) console.log(`${pad(`${r.cls} ${r.subject}`, 18)}${num(r.q, 10)}${num(`${r.all} (${pc(r.all, r.q)})`, 14)}${num(`${r.qp} (${pc(r.qp, r.q)})`, 16)}${num(`${r.none} (${pc(r.none, r.q)})`, 9)}`);
console.log(
  `Classes 1-3 MCQs: ${total.q} questions; picture answers on ${total.all} (${pc(total.all, total.q)}); question picture on ${total.qp} (${pc(total.qp, total.q)}); both ${total.both}; neither ${total.none} (${pc(total.none, total.q)})`
);
const tsum = Object.values(txt).reduce((a, x) => { for (const k in x) a[k] = (a[k] || 0) + x[k]; return a; }, {});
console.log(`Classes 1-3 notes and terms (auto-pictures, PicDict.illustrate): note points ${tsum.ptsPic}/${tsum.pts} (${pc(tsum.ptsPic, tsum.pts)}); key terms ${tsum.termsPic}/${tsum.terms} (${pc(tsum.termsPic, tsum.terms)}); worked examples ${tsum.exPic}/${tsum.ex} (${pc(tsum.exPic, tsum.ex)}); Q&A ${tsum.qaPic}/${tsum.qa} (${pc(tsum.qaPic, tsum.qa)}); chapters with a picture of their own ${tsum.chOwn}/${tsum.ch} (${pc(tsum.chOwn, tsum.ch)}, the rest show the subject art)`);
if (!brief) for (const c of Object.keys(txt)) { const x = txt[c]; console.log(`  class ${c}: note points ${x.ptsPic}/${x.pts} (${pc(x.ptsPic, x.pts)}), terms ${x.termsPic}/${x.terms} (${pc(x.termsPic, x.terms)}), examples ${x.exPic}/${x.ex}, Q&A ${x.qaPic}/${x.qa}, chapters ${x.chOwn}/${x.ch}`); }
const top = (m, n) => [...m.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])).slice(0, n);
if (!brief) {
  console.log(`\nTop 50 option words with no picture that stop a question where another option has one (draw these next):`);
  console.log(top(blockers, 50).map(([w, n]) => `${w} ${n}`).join(" | "));
  console.log(`\nTop 50 option words with no picture, overall:`);
  console.log(top(missing, 50).map(([w, n]) => `${w} ${n}`).join(" | "));
} else {
  console.log(`  words to draw next: ${top(blockers, 12).map(([w, n]) => `${w} ${n}`).join(", ")} (node scripts/check-pictures.js for the full report)`);
}
module.exports = { problems: 0 };
