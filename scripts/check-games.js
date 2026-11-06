#!/usr/bin/env node
// Checks the visual Maths games (js/games/numberline.js, fractions.js, balance.js, angles.js, graphs.js, race.js):
//   1. for every Maths chapter (Classes 1-12, CBSE and PSEB) and every Maths Practice-by-topic level where a game says it is
//      available, build rounds from 300 seeds and run the game's own audit (answers agree with the question, no NaN, the
//      tolerance is sane, options are distinct, every drawn thing fits the picture);
//   2. the same seed always makes the same rounds, and different seeds make different ones;
//   3. prints which chapters and levels get which game.
// Usage: node scripts/check-games.js   (exit code 1 on any problem; also run by node scripts/validate.js)

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.join(__dirname, "..");
const SEEDS = Number(process.env.SEEDS) || 300;
const MATHS_GAMES = ["numberline", "fractions", "balance", "angles", "graphs", "race"];

let problems = 0;
const bad = (msg) => {
  problems++;
  if (problems <= 80) console.log("  ✗ " + msg);
};

// ---- the browser's globals the game files need (no document) ----
const ctx = { console, ICONS: {} };
vm.createContext(ctx);
const run = (file) => vm.runInContext(fs.readFileSync(path.join(root, file), "utf8"), ctx, { filename: file });
run("js/gen.js");
run("js/gen-lang.js");
run("js/gen-sci.js");
vm.runInContext("globalThis.Gen = Gen;", ctx);
vm.runInContext(
  `
  const esc = (s) => String(s ?? "");
  const rich = esc;
  const plain = esc;
  const t = (s, p) => String(s).replace(/\\{(\\w+)(?::[^}]*)?\\}/g, (m, k) => (p && k in p ? p[k] : m));
  const icon = () => "";
  const __defs = {};
  const Games = {
    register: (type, def) => (__defs[type] = def),
    rng: (seed) => Gen.rng(seed),
    shuffled: (items, R) => {
      const a = items.slice();
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(R.next() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
    },
    gens: (c, subj, ch) => (ch.sources ? ch.gens || [] : Gen.forChapter(c, subj.id, ch.id)),
  };
  globalThis.__defs = __defs; globalThis.Games = Games; globalThis.esc = esc; globalThis.rich = rich; globalThis.plain = plain; globalThis.t = t; globalThis.icon = icon;
`,
  ctx
);
for (const f of ["mathkit", "numberline", "fractions", "balance", "angles", "graphs", "race"].map((n) => `js/games/${n}.js`)) {
  if (f.endsWith("mathkit.js")) vm.runInContext(fs.readFileSync(path.join(root, f), "utf8") + "\nglobalThis.MathKit = MathKit;", ctx, { filename: f });
  else run(f);
}
const defs = ctx.__defs;
for (const g of MATHS_GAMES) if (!defs[g]) bad(`game "${g}" did not register`);

// ---- the content: chapter lists and the maths path ----
function study(classes, board) {
  const c = { globalThis: {} };
  c.globalThis = c;
  vm.createContext(c);
  vm.runInContext(fs.readFileSync(path.join(root, "data", "registry.js"), "utf8"), c);
  for (const n of classes) vm.runInContext(fs.readFileSync(path.join(root, "data", `class${n}`, "index.js"), "utf8"), c);
  c.StudyData.setBoard(board);
  return c.StudyData;
}

const scopes = []; // { label, cls, subj, ch, kind: "chapter" | "level" }
for (const [board, subjectId, classes] of [["cbse", "maths", [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]], ["pseb", "mathspb", [6, 7, 8, 9]]]) {
  for (const cls of classes) {
    const D = study([cls], board);
    for (const ch of D.chapters(cls, subjectId)) scopes.push({ label: `${board} class ${cls} ${ch.id}`, cls, subj: { id: subjectId, short: "Maths" }, ch: { id: ch.id, title: ch.title }, kind: "chapter" });
  }
}
const pathCtx = { globalThis: {} };
pathCtx.globalThis = pathCtx;
vm.createContext(pathCtx);
vm.runInContext(fs.readFileSync(path.join(root, "data", "registry.js"), "utf8"), pathCtx);
vm.runInContext(fs.readFileSync(path.join(root, "data", "paths", "maths.js"), "utf8"), pathCtx);
const P = pathCtx.StudyData.path("maths");
for (const topic of P.topics)
  for (const level of topic.levels)
    for (const board of ["cbse", "pseb"]) {
      const refs = (level.from || []).filter((r) => !r.board || r.board === board);
      const gens = [...new Set([...refs.flatMap((r) => ctx.Gen.forChapter(r.cls, r.subject, r.chapter)), ...(level.gens || [])])];
      const key = `${board} level ${level.id}`;
      scopes.push({ label: key, cls: 8, subj: { id: "maths", short: "Maths" }, ch: { id: level.id, title: level.title, levelKey: `maths/${topic.id}/${level.id}`, sources: refs.map((r) => ({ cls: r.cls, ch: { id: r.chapter } })), gens, terms: [] }, kind: "level", board, levelId: level.id });
    }

// ---- run ----
const stats = {};
for (const g of MATHS_GAMES) stats[g] = { chapters: new Set(), levels: new Set(), byClass: {}, rounds: 0 };
const pickKey = (r) => JSON.stringify(r);
const t0 = Date.now();

for (const sc of scopes) {
  for (const g of MATHS_GAMES) {
    const def = defs[g];
    if (!def) continue;
    let avail = false;
    try {
      avail = !!def.available(sc.cls, sc.subj, sc.ch);
    } catch (e) {
      bad(`${g} available() threw for ${sc.label}: ${e.message}`);
    }
    if (!avail) continue;
    const st = stats[g];
    if (sc.kind === "level") st.levels.add(sc.levelId);
    else {
      st.chapters.add(sc.label);
      st.byClass[sc.cls] = (st.byClass[sc.cls] || 0) + 1;
    }
    const seen = new Set();
    for (let seed = 1; seed <= SEEDS; seed++) {
      const s = (seed * 2654435761) >>> 0;
      let data;
      try {
        data = def.build(sc.cls, sc.subj, sc.ch, s);
      } catch (e) {
        bad(`${g} build threw for ${sc.label} seed ${s}: ${e.stack.split("\n").slice(0, 2).join(" ")}`);
        break;
      }
      const json = JSON.stringify(data);
      if (/NaN|undefined|Infinity/.test(json)) bad(`${g} ${sc.label} seed ${s}: NaN/undefined in the data`);
      if (seed <= 5 && json !== JSON.stringify(def.build(sc.cls, sc.subj, sc.ch, s))) bad(`${g} ${sc.label} seed ${s}: the same seed made different rounds`);
      seen.add(json);
      (data.rounds || data.items || []).length || bad(`${g} ${sc.label} seed ${s}: no rounds`);
      st.rounds += (data.rounds || data.items || []).length;
      for (const m of def.audit(data)) bad(`${g} ${sc.label} seed ${s}: ${m}`);
      if (problems > 60) break;
    }
    if (seen.size < Math.min(100, SEEDS * 0.8)) bad(`${g} ${sc.label}: only ${seen.size} different rounds out of ${SEEDS} seeds`);
  }
}

console.log(`Maths games: ${scopes.length} chapters/levels × ${MATHS_GAMES.length} games checked over ${SEEDS} seeds (${Math.round((Date.now() - t0) / 1000)}s)`);
for (const g of MATHS_GAMES) {
  const st = stats[g];
  const cls = Object.keys(st.byClass)
    .sort((a, b) => a - b)
    .map((c) => `${c}:${st.byClass[c]}`)
    .join(" ");
  console.log(`  ${g.padEnd(11)} ${String(st.chapters.size).padStart(3)} chapters (class:count ${cls}), ${st.levels.size} levels  [${st.rounds} rounds checked]`);
  if (!st.chapters.size && !st.levels.size) bad(`${g} is not available anywhere`);
}
console.log(problems ? `${problems} problem(s) in the maths games` : "Maths games OK");
if (require.main === module) process.exit(problems ? 1 : 0);
module.exports = { problems };
