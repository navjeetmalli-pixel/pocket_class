#!/usr/bin/env node
// Checks that every game and every virtual lab feeds the learning record, so what a child does in Play and Explore counts
// towards their skills (docs/BASELINE.md, step 2):
//   games (js/games/*.js with Games.register): must call api.answered(...) for its scored attempts, or hand an `item`
//                                               maker to MK.run (js/games/mathkit.js), which calls it for each checked round;
//   labs  (js/labs/*.js with Labs.register):   must log evidence through Labs.flow, Labs.logItem, api.log or Learn.answerEvent.
// Static check of the source; the behaviour itself is tested in tests/game-evidence-*.spec.js.
// Usage: node scripts/check-evidence.js   (exit code 1 on any problem; also run by node scripts/validate.js)

const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
let problems = 0;
const bad = (msg) => {
  problems++;
  console.log("  ✗ " + msg);
};

// Source without comments, so a comment that only mentions a call doesn't count as making it.
const code = (src) => src.replace(/\/\*[\s\S]*?\*\//g, "").replace(/(^|[^:"'`\\])\/\/.*$/gm, "$1");
const files = (dir) => fs.readdirSync(path.join(root, dir)).filter((f) => f.endsWith(".js")).map((f) => [`${dir}/${f}`, fs.readFileSync(path.join(root, dir, f), "utf8")]);

let games = 0;
for (const [file, src] of files("js/games")) {
  const types = [...src.matchAll(/Games\.register\("([\w-]+)"/g)].map((m) => m[1]);
  if (!types.length || file.endsWith("engine.js")) continue;
  games += types.length;
  const c = code(src);
  if (!/api\.answered\(/.test(c) && !/MK\.run\([^;]*\bitem\b/.test(c)) bad(`${file} (${types.join(", ")}): never calls api.answered, so its answers don't count towards skills`);
}

let labs = 0;
for (const [file, src] of files("js/labs")) {
  const types = [...src.matchAll(/Labs\.register\("([\w-]+)"/g)].map((m) => m[1]);
  if (!types.length) continue;
  labs += types.length;
  if (!/Labs\.flow\(|Labs\.logItem\(|api\.log(Item)?\(|Learn\.answerEvent\(/.test(code(src))) bad(`${file} (${types.join(", ")}): logs no learning evidence`);
}

console.log(problems ? `\n${problems} problem(s)` : `  ${games} games and ${labs} labs all feed the learning record`);
module.exports = { problems };
if (require.main === module) process.exit(problems ? 1 : 0);
