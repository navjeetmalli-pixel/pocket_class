#!/usr/bin/env node
// Checks the two picture games (js/games/wordbuild.js "Picture word builder", js/games/habitat.js "Habitat sort"):
//   1. for every chapter (Classes 1-5, every board) where a game says it is available, build rounds from many seeds and run the
//      game's own audit(): every word has a picture, the Hindi and Punjabi tiles (aksharas) join back to the word exactly, no tile
//      starts with a combining mark, spare tiles are not in the word; every habitat card is drawn and in the table, every zone used;
//   2. the same seed always makes the same round;
//   3. the habitat table agrees with the facts (a duck is "both", a fish is "water", ...);
//   4. prints which chapters get which game.
// Usage: node scripts/check-picture-games.js   (exit code 1 on any problem; also run by node scripts/validate.js)

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.join(__dirname, "..");
const SEEDS = Number(process.env.SEEDS) || 25;
let problems = 0;
const bad = (msg) => {
  problems++;
  if (problems <= 60) console.log("  ✗ " + msg);
};

const ctx = vm.createContext({ console, Intl });
ctx.globalThis = ctx;
ctx.window = ctx;
const run = (f) => vm.runInContext(fs.readFileSync(path.join(root, f), "utf8"), ctx, { filename: f });
run("data/registry.js");
run("js/gen.js");
run("js/gen-lang.js");
run("js/gen-sci.js");
run("js/pics.js");
run("js/picdict.js");
vm.runInContext(
  `
  const esc = (s) => String(s ?? "");
  const t = (s, p) => String(s).replace(/\\{(\\w+)(?::[^}]*)?\\}/g, (m, k) => (p && k in p ? p[k] : m));
  const icon = () => "";
  const Release = { langLocked: () => false, subjectLocked: () => false };
  const __defs = {};
  const Games = {
    register: (type, def) => (__defs[type] = def),
    rng: (seed) => Gen.rng(seed),
    shuffled: (items, R) => { const a = items.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(R.next() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; },
    draggable: () => {},
  };
  globalThis.__defs = __defs; globalThis.Games = Games; globalThis.esc = esc; globalThis.t = t; globalThis.icon = icon; globalThis.Release = Release;
`,
  ctx
);
run("js/games/wordbuild.js");
run("js/games/habitat.js");
const defs = ctx.__defs;
for (const g of ["wordbuild", "habitat"]) if (!defs[g]) bad(`game "${g}" did not register`);

// all content of Classes 1-5, both boards
const SUBJECTS = ["english", "englishpb", "hindi", "hindipb", "punjabi", "evs", "science", "sciencepb"];
const stats = { wordbuild: {}, habitat: {} };
const t0 = Date.now();
for (const board of ["cbse", "pseb"]) {
  for (const cls of [1, 2, 3, 4, 5]) {
    const dir = path.join(root, "data", `class${cls}`);
    for (const f of fs.readdirSync(dir)) if (f.endsWith(".js") && f !== "index.js" && f !== "objectives.js") run(`data/class${cls}/${f}`);
    ctx.StudyData.setBoard(board);
    for (const sid of SUBJECTS) {
      const subj = ctx.StudyData.subject(sid);
      if (!subj) continue;
      for (const ch of ctx.StudyData.chapters(cls, sid)) {
        if (!ch.notes) continue;
        for (const g of ["wordbuild", "habitat"]) {
          const def = defs[g];
          let avail = false;
          try {
            avail = !!def.available(cls, subj, ch);
          } catch (e) {
            bad(`${g} available() threw for ${board} ${cls}/${sid}/${ch.id}: ${e.message}`);
          }
          if (!avail) continue;
          const label = `${cls}/${sid}/${ch.id}`;
          (stats[g][`${cls}/${sid}`] ||= new Set()).add(ch.id);
          for (let seed = 1; seed <= SEEDS; seed++) {
            const s = (seed * 2654435761) >>> 0;
            let data;
            try {
              data = def.build(cls, subj, ch, s);
            } catch (e) {
              bad(`${g} build threw for ${board} ${label} seed ${s}: ${e.stack.split("\n").slice(0, 2).join(" ")}`);
              break;
            }
            const json = JSON.stringify(data);
            if (/NaN|undefined/.test(json)) bad(`${g} ${label} seed ${s}: NaN/undefined in the data`);
            if (seed <= 3 && json !== JSON.stringify(def.build(cls, subj, ch, s))) bad(`${g} ${label} seed ${s}: the same seed made a different round`);
            for (const m of def.audit(data)) bad(`${g} ${board} ${label} seed ${s}: ${m}`);
            if (g === "wordbuild" && data.rounds.length < 4) bad(`${g} ${label}: only ${data.rounds.length} rounds`);
          }
        }
      }
    }
  }
}

// the facts of the habitat table
const H = ctx.HabitatSort;
const HOME = Object.fromEntries(H.CARDS.map((c) => [c.pic, c.home]));
const FACTS = { fish: "water", whale: "water", octopus: "water", starfish: "water", lotus: "water", frog: "both", duck: "both", swan: "both", crocodile: "both", crab: "both", eagle: "sky", crow: "sky", parrot: "sky", butterfly: "sky", cow: "land", tiger: "land", hen: "land", elephant: "land", tree: "land", rose: "land" };
for (const [k, v] of Object.entries(FACTS)) if (HOME[k] !== v) bad(`habitat table: ${k} should be ${v}, is ${HOME[k]}`);
for (const k of ["snake", "tortoise", "bat-animal"]) if (HOME[k]) bad(`habitat table: ${k} is ambiguous and must not be in the game`);

console.log(`Picture games: ${SEEDS} seeds per chapter (${Math.round((Date.now() - t0) / 1000)}s)`);
for (const g of ["wordbuild", "habitat"]) {
  const parts = Object.entries(stats[g]).map(([k, v]) => `${k}:${v.size}`);
  console.log(`  ${g.padEnd(10)} ${parts.join(" ") || "none"}`);
  if (!parts.length) bad(`${g} is not available anywhere`);
}
console.log(problems ? `${problems} problem(s) in the picture games` : "Picture games OK");
if (require.main === module) process.exit(problems ? 1 : 0);
module.exports = { problems };
