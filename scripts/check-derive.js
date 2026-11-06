#!/usr/bin/env node
// Checks the auto-made practice questions (js/derive.js) over every chapter of Classes 1-12:
//   * builds every kind with 20 seeds; 4 distinct non-empty options, a valid answer index, a ref that names the chapter
//   * the right answer is actually right: a meaning or term question against the chapter's own term list, a true/false
//     statement against its meaning, a blank's sentence puts the answer back exactly, years and order against the timeline data,
//     capitals against an independent table typed here
//   * no blank whose answer (or any wrong option) appears elsewhere in its sentence; years in "when" options are distinct
//   * true and false are balanced; the same seed gives the same items and another seed gives others
//   * the wording is in the chapter's language (Hindi and Punjabi subjects), and every template has a Punjabi and a Hindi line
//   * prints the totals per kind and per class, and the chapters that get map questions
// Usage: node scripts/check-derive.js [--samples N]   (N random items of each kind are printed to read; exit code 1 on any problem;
//        scripts/validate.js runs it with --brief)

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.join(__dirname, "..");
const argv = process.argv.slice(2);
const brief = argv.includes("--brief");
const samplesN = argv.includes("--samples") ? Number(argv[argv.indexOf("--samples") + 1]) || 40 : 0;
const SEEDS = Number(process.env.SEEDS) || 20;

let problems = 0;
const bad = (msg) => {
  problems++;
  if (problems <= 80) console.log("  ✗ " + msg);
};

// ---------- load the app's data and code ----------
const ctx = vm.createContext({ console, Intl });
ctx.globalThis = ctx;
const run = (f) => vm.runInContext(fs.readFileSync(path.join(root, f), "utf8"), ctx, { filename: f });
run("data/registry.js");
for (let c = 1; c <= 12; c++) {
  const dir = path.join(root, "data", `class${c}`);
  for (const f of fs.readdirSync(dir)) if (f.endsWith(".js") && f !== "index.js" && f !== "objectives.js") run(`data/class${c}/${f}`);
}
run("data/games/timelines.js");
run("js/gen.js");

// The interface dictionaries (js/i18n.js), loaded on their own the way check-labs does.
const i18n = vm.createContext({ currentLang: () => "en", Store: undefined });
vm.runInContext(fs.readFileSync(path.join(root, "js", "i18n.js"), "utf8").replace(/^const /gm, "var ").replace(/^function /gm, "var __f = function "), i18n);
const I18N = i18n.I18N;
ctx.I18N = I18N;
vm.runInContext("const t = (s, v) => (v ? String(s).replace(/\\{(\\w+)(?::[^|}]*\\|[^}]*)?\\}/g, (w, k) => (k in v ? v[k] : w)) : s);", ctx);
run("js/labs/india-map.js");
const Derive = vm.runInContext(fs.readFileSync(path.join(root, "js", "derive.js"), "utf8") + "\n;Derive", ctx);
const D = vm.runInContext("StudyData", ctx);

const fmt = (lang, s, v) => {
  const text = lang === "en" ? s : (I18N[lang] && I18N[lang][s]) || s;
  return v ? text.replace(/\{(\w+)(?::[^|}]*\|[^}]*)?\}/g, (w, k) => (k in v ? v[k] : w)) : text;
};
const strip = (s) => String(s == null ? "" : s).replace(/\*\*/g, "").replace(/\s+/g, " ").trim();
const clip = (s) => s.replace(/[\s.।!?;:,]+$/u, "");
const yt = (y) => (y < 0 ? `${-y} BCE` : y < 1000 ? `${y} CE` : String(y));
const langOf = (s) => (s === "hindi" || s === "hindipb" ? "hi" : s === "punjabi" ? "pa" : "en");
const isW = (ch) => !!ch && /[\p{L}\p{M}\p{N}]/u.test(ch);
const hasWord = (hay, needle) => {
  hay = hay.toLowerCase();
  needle = needle.toLowerCase();
  for (let i = hay.indexOf(needle); i >= 0; i = hay.indexOf(needle, i + 1)) if (!isW(hay[i - 1]) && !isW(hay[i + needle.length])) return true;
  return false;
};

// ---------- an independent table of capitals for the entities Derive uses ----------
const CAPITALS = {
  "Andhra Pradesh": "Amaravati", "Arunachal Pradesh": "Itanagar", Assam: "Dispur", Bihar: "Patna", Chhattisgarh: "Raipur", Goa: "Panaji", Gujarat: "Gandhinagar",
  "Himachal Pradesh": "Shimla", Jharkhand: "Ranchi", Karnataka: "Bengaluru", Kerala: "Thiruvananthapuram", "Madhya Pradesh": "Bhopal", Maharashtra: "Mumbai",
  Manipur: "Imphal", Meghalaya: "Shillong", Mizoram: "Aizawl", Nagaland: "Kohima", Odisha: "Bhubaneswar", Rajasthan: "Jaipur", Sikkim: "Gangtok",
  "Tamil Nadu": "Chennai", Telangana: "Hyderabad", Tripura: "Agartala", "Uttar Pradesh": "Lucknow", Uttarakhand: "Dehradun", "West Bengal": "Kolkata",
  Ladakh: "Leh", Lakshadweep: "Kavaratti",
};
const entities = Derive.mapEntities();
for (const e of entities) if (CAPITALS[e.name] !== e.capital) bad(`map: ${e.name} has capital ${e.capital} in the app, the check table says ${CAPITALS[e.name]}`);
if (new Set(entities.map((e) => e.capital)).size !== entities.length) bad("map: two entities share a capital");
if (entities.length !== Object.keys(CAPITALS).length) bad(`map: ${entities.length} entities, the check table has ${Object.keys(CAPITALS).length}`);

// ---------- templates and interface strings need Punjabi and Hindi ----------
const UI = ["More practice", "Word meanings", "True or false", "Fill in the blank", "Dates and order", "Map quiz", "Back to Practise", "Questions made from this chapter's words, notes and dates. A new set of {n} every time.", "Loading…"];
for (const s of [...Derive.TEMPLATES, ...UI])
  for (const l of ["pa", "hi"]) {
    if (!I18N[l][s]) bad(`translation: no ${l} line for "${s}"`);
    else if (l === "pa" && !/[਀-੿]/.test(I18N.pa[s])) bad(`translation: the Punjabi for "${s}" is not in Gurmukhi`);
    else if (l === "hi" && !/[ऀ-ॿ]/.test(I18N.hi[s])) bad(`translation: the Hindi for "${s}" is not in Devanagari`);
  }

// ---------- every chapter, every kind, many seeds ----------
const SCRIPT = { en: /[A-Za-z]/, hi: /[ऀ-ॿ]/, pa: /[਀-੿]/ };
const perKind = {};
const perClass = {};
const mapChapters = [];
const sampleBank = {};
let chaptersWithAny = 0;
let chaptersAll = 0;
let diffSeeds = 0;
let sameSeedBad = 0;
let tfTrue = 0;
let tfFalse = 0;
const note = (cls, kind, n) => {
  perKind[kind] = (perKind[kind] || 0) + n;
  ((perClass[cls] = perClass[cls] || {})[kind] = (perClass[cls][kind] || 0) + n);
};
let seedRng = 12345;
const rand = () => ((seedRng = (Math.imul(seedRng, 1664525) + 1013904223) >>> 0) / 4294967296);

function timelineOf(cls, subject, id) {
  return D.timelinesFor(cls, subject, id);
}

for (const cls of D.classes) {
  for (const subject of Object.keys(D.content[cls] || {})) {
    const lang = langOf(subject);
    for (const ch of D.content[cls][subject].chapters) {
      chaptersAll++;
      const where = `Class ${cls} ${subject}/${ch.id}`;
      const kinds = Derive.kinds(cls, subject, ch);
      if (Object.keys(kinds).length) chaptersWithAny++;
      if (kinds.map) mapChapters.push(`${cls}/${subject}/${ch.id}`);
      const terms = new Map();
      for (const x of ch.terms || []) terms.set(strip(x.term), strip(x.meaning));
      const events = timelineOf(cls, subject, ch.id);
      const evBy = new Map(events.map((e) => [strip(e.label), e]));

      // determinism
      const a1 = JSON.stringify(Derive.forChapter(cls, subject, ch, { count: 10, seed: 7 }));
      const a2 = JSON.stringify(Derive.forChapter(cls, subject, ch, { count: 10, seed: 7 }));
      if (a1 !== a2) {
        sameSeedBad++;
        bad(`${where}: the same seed gave different items`);
      }
      if (a1 !== JSON.stringify(Derive.forChapter(cls, subject, ch, { count: 10, seed: 8 })) && a1 !== "[]") diffSeeds++;

      for (const kind of Derive.KINDS) {
        if (!kinds[kind]) {
          if (Derive.forChapter(cls, subject, ch, { kinds: [kind], count: 10, seed: 1 }).length) bad(`${where}: ${kind} gave items although kinds() does not list it`);
          continue;
        }
        const seen = new Set();
        let produced = 0;
        for (let seed = 1; seed <= SEEDS; seed++) {
          const items = Derive.forChapter(cls, subject, ch, { kinds: [kind], count: 10, seed });
          let nT = 0;
          let nF = 0;
          for (const it of items) {
            produced++;
            const at = `${where} [${kind}, seed ${seed}]`;
            if (it.kind !== kind) bad(`${at}: item kind is ${it.kind}`);
            if (!it.ref || it.ref.cls !== cls || it.ref.subject !== subject || it.ref.chapter !== ch.id || it.ref.key !== null) bad(`${at}: wrong ref`);
            if (!it.derived) bad(`${at}: not marked derived`);
            if (kind === "match") {
              if (!Array.isArray(it.pairs) || it.pairs.length < 4 || it.pairs.length > 6) bad(`${at}: ${it.pairs && it.pairs.length} pairs`);
              else {
                if (new Set(it.pairs.map((p) => p[0])).size !== it.pairs.length || new Set(it.pairs.map((p) => p[1])).size !== it.pairs.length) bad(`${at}: duplicate left or right side`);
                for (const [l, r] of it.pairs) {
                  const ok = terms.get(l) === r || CAPITALS[l] === r || (evBy.has(l) && yt(evBy.get(l).year) === r);
                  if (!ok) bad(`${at}: pair "${l}" - "${r}" is not in the chapter data`);
                }
              }
              seen.add(JSON.stringify(it.pairs));
              continue;
            }
            // the shape of an MCQ
            const want = kind === "tf" ? 2 : 4;
            if (!Array.isArray(it.options) || it.options.length !== want) {
              bad(`${at}: ${it.options && it.options.length} options`);
              continue;
            }
            if (!Number.isInteger(it.answer) || it.answer < 0 || it.answer >= want) bad(`${at}: answer index ${it.answer}`);
            if (it.options.some((o) => typeof o !== "string" || !o.trim())) bad(`${at}: an empty option`);
            if (new Set(it.options.map((o) => o.trim().toLowerCase())).size !== want) bad(`${at}: options are not distinct: ${it.options.join(" | ")}`);
            if (!it.q || !it.explain || /\bNaN\b|\[object|\{\w+\}/.test(it.q + it.explain + it.options.join(""))) bad(`${at}: broken text: ${it.q}`);
            if (/\*\*|`|\$/.test(it.q + it.options.join(""))) bad(`${at}: markdown in the text`);
            const right = it.options[it.answer];

            if (kind === "meaning") {
              const hit = [...terms].find(([term]) => it.q === fmt(lang, "What does {term} mean?", { term }));
              if (!hit) bad(`${at}: no term for "${it.q}"`);
              else if (strip(right) !== hit[1]) bad(`${at}: "${hit[0]}" answered with "${right}", not its meaning`);
              else if (it.options.filter((o) => [...terms.values()].includes(strip(o)) && strip(o) === hit[1]).length !== 1) bad(`${at}: the right meaning is listed twice`);
              if (hit && (hit[0].length <= 4 ? hasWord(right, hit[0]) : right.toLowerCase().includes(hit[0].toLowerCase()))) bad(`${at}: the meaning contains its term`);
            } else if (kind === "term") {
              const hit = [...terms].find(([, m]) => it.q === fmt(lang, "Which word means: “{meaning}”?", { meaning: clip(m) }));
              if (!hit) bad(`${at}: no meaning for "${it.q}"`);
              else if (strip(right) !== hit[0]) bad(`${at}: "${hit[1]}" answered with "${right}", not "${hit[0]}"`);
              else for (const o of it.options) if (o !== right && terms.get(strip(o)) && hasWord(hit[1], o)) bad(`${at}: a wrong option "${o}" appears in the meaning`);
            } else if (kind === "tf") {
              if (it.options[0] !== fmt(lang, "True") || it.options[1] !== fmt(lang, "False")) bad(`${at}: options ${it.options}`);
              if (typeof it.tf !== "boolean" || it.answer !== (it.tf ? 0 : 1)) bad(`${at}: tf flag and answer disagree`);
              const hit = [...terms].find(([term]) => it.q.startsWith(term + ": "));
              const term = hit && hit[0];
              const stated = term ? it.q.slice(term.length + 2) : null;
              if (!term) bad(`${at}: no term in "${it.q}"`);
              else if ((stated === terms.get(term)) !== it.tf) bad(`${at}: "${it.q}" marked ${it.tf} but the meaning ${stated === terms.get(term) ? "is" : "is not"} the term's own`);
              else if (!it.explain.includes(terms.get(term))) bad(`${at}: the explanation lacks the right meaning`);
              if (it.tf) nT++;
              else nF++;
              if (it.tf) tfTrue++;
              else tfFalse++;
            } else if (kind === "blank") {
              const blanks = it.q.split("_____").length - 1;
              if (blanks !== 1) bad(`${at}: ${blanks} blanks in "${it.q}"`);
              else {
                const back = it.q.replace("_____", right);
                if (back.toLowerCase() !== it.explain.toLowerCase()) bad(`${at}: the blank does not give the sentence back: "${back}" vs "${it.explain}"`);
              }
              const before = it.q.split("_____")[0] + " " + (it.q.split("_____")[1] || "");
              if (hasWord(before, right)) bad(`${at}: the answer "${right}" appears in the sentence: ${it.q}`);
              for (const o of it.options) if (o !== right && hasWord(before, o)) bad(`${at}: a wrong option "${o}" is in the sentence: ${it.q}`);
              const w = it.explain.split(/\s+/).length;
              if (w < 6 || w > 30) bad(`${at}: sentence of ${w} words`);
              if (lang === "en" && /\b(a|an) _____/i.test(it.q)) bad(`${at}: a/an before the blank: ${it.q}`);
            } else if (kind === "when") {
              const ev = [...evBy].find(([label]) => it.q === fmt(lang, "In which year did this happen: {event}?", { event: label }) || it.q === fmt(lang, "Around which year did this happen: {event}?", { event: label }));
              if (!ev) bad(`${at}: no event for "${it.q}"`);
              else {
                if (right !== yt(ev[1].year)) bad(`${at}: "${ev[0]}" is ${yt(ev[1].year)}, answered ${right}`);
                const ys = it.options.map((o) => events.find((e) => yt(e.year) === o));
                if (ys.some((e) => !e)) bad(`${at}: an option year is not a year of this timeline: ${it.options}`);
                if (new Set(it.options).size !== 4) bad(`${at}: years not distinct`);
              }
            } else if (kind === "first") {
              if (it.q !== fmt(lang, "Which happened first?")) bad(`${at}: question ${it.q}`);
              const evs = it.options.map((o) => evBy.get(o));
              if (evs.some((e) => !e)) bad(`${at}: an option is not an event of the chapter: ${it.options}`);
              else {
                const min = Math.min(...evs.map((e) => e.year));
                if (evs[it.answer].year !== min || evs.filter((e) => e.year === min).length !== 1) bad(`${at}: "${right}" (${evs[it.answer].year}) is not the earliest of ${evs.map((e) => e.year)}`);
                if (new Set(evs.map((e) => e.year)).size !== 4) bad(`${at}: two events share a year`);
              }
            } else if (kind === "map") {
              const cap = Object.entries(CAPITALS).find(([s]) => it.q === fmt(lang, "What is the capital of {state}?", { state: s }));
              const rev = Object.entries(CAPITALS).find(([, c]) => it.q === fmt(lang, "{capital} is the capital of which state or Union Territory?", { capital: c }));
              if (cap) {
                if (right !== cap[1]) bad(`${at}: capital of ${cap[0]} answered ${right}`);
              } else if (rev) {
                if (right !== rev[0]) bad(`${at}: ${rev[1]} answered ${right}`);
              } else bad(`${at}: not a known map question: ${it.q}`);
            }
            // the wording must be in the chapter's language for the stem templates (the terms may be anything)
            if (lang !== "en" && (kind === "meaning" || kind === "term") && !SCRIPT[lang].test(it.q)) bad(`${at}: not in ${lang}: ${it.q}`);
            seen.add(it.kind + "|" + it.q + "|" + right);
            if (samplesN && Math.floor(seed) === 1 + (produced % SEEDS)) (sampleBank[kind] = sampleBank[kind] || []).push({ where: `${cls}/${subject}/${ch.id}`, it });
          }
          if (kind === "tf" && items.length >= 2 && Math.abs(nT - nF) > 1) bad(`${where} [tf, seed ${seed}]: ${nT} true and ${nF} false`);
        }
        if (!produced) bad(`${where}: kinds() lists ${kind} (${kinds[kind]}) but it made none`);
        note(cls, kind, kinds[kind]);
        if ((kind === "map" || kind === "when") && seen.size > kinds[kind]) bad(`${where}: ${seen.size} distinct ${kind} items but kinds() says ${kinds[kind]}`);
      }
    }
  }
}

// the language of the templates for Hindi and Punjabi chapters
{
  const h = D.content[4].hindi.chapters.find((c) => Derive.kinds(4, "hindi", c).meaning);
  const p = D.content[4].punjabi.chapters.find((c) => Derive.kinds(4, "punjabi", c).meaning);
  const hq = Derive.forChapter(4, "hindi", h, { kinds: ["meaning"], count: 3 });
  const pq = Derive.forChapter(4, "punjabi", p, { kinds: ["meaning"], count: 3 });
  if (!hq.length || !hq.every((q) => /[ऀ-ॿ]/.test(q.q.replace(/^.*(?= का क्या)/, "") ) && q.q.endsWith("का क्या अर्थ है?"))) bad("the Hindi chapter's meaning template is not Hindi");
  if (!pq.length || !pq.every((q) => q.q.endsWith("ਦਾ ਕੀ ਅਰਥ ਹੈ?"))) bad("the Punjabi chapter's meaning template is not Punjabi");
}

// ---------- the report ----------
const total = Object.entries(perKind).reduce((a, [k, v]) => a + (k === "match" ? 0 : v), 0);
console.log(`  ${chaptersWithAny} of ${chaptersAll} chapters get auto-made questions; ${total.toLocaleString("en-IN")} distinct questions (match sets not counted)`);
console.log("  per kind: " + Derive.KINDS.map((k) => `${k} ${(perKind[k] || 0).toLocaleString("en-IN")}`).join(", "));
if (!brief) {
  for (const cls of D.classes) console.log(`  Class ${String(cls).padStart(2)}: ` + Derive.KINDS.map((k) => `${k} ${(perClass[cls] || {})[k] || 0}`).join(", "));
  console.log("  map questions in: " + mapChapters.join(", "));
}
console.log(`  seeds: ${diffSeeds} of ${chaptersAll} chapters give other items with another seed; ${sameSeedBad} give different items for the same seed; true/false: ${tfTrue} true, ${tfFalse} false`);
if (tfTrue + tfFalse && Math.abs(tfTrue - tfFalse) / (tfTrue + tfFalse) > 0.1) bad(`true/false is not balanced: ${tfTrue} true, ${tfFalse} false`);
if (!diffSeeds) bad("no chapter gives other items with another seed");

if (samplesN) {
  for (const kind of Derive.KINDS) {
    const bank = sampleBank[kind] || [];
    console.log(`\n=== ${kind}: ${bank.length} sampled, showing ${Math.min(samplesN, bank.length)} ===`);
    const chosen = new Set();
    while (chosen.size < Math.min(samplesN, bank.length)) chosen.add(Math.floor(rand() * bank.length));
    for (const i of chosen) {
      const { where, it } = bank[i];
      if (kind === "match") console.log(`- [${where}] ` + it.pairs.map((p) => `${p[0]} = ${p[1]}`).join(" ; "));
      else console.log(`- [${where}] ${it.q}\n    ${it.options.map((o, k) => (k === it.answer ? "*" : " ") + o).join("\n    ")}\n    why: ${it.explain}`);
    }
  }
}

console.log(problems ? `  ${problems} problem(s)` : "  all derived questions pass");
module.exports = { problems };
if (require.main === module) process.exit(problems ? 1 : 0);
