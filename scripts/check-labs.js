#!/usr/bin/env node
// Checks the virtual labs (js/labs/): the formulas behind each lab for a wide range of settings, the chapter mapping, and
// that every English string written as t("...") has a Punjabi and a Hindi translation.
//   circuit    Ohm's law, series and parallel resistance, Kirchhoff's current law, energy: power from the battery = power in the parts
//   force      a = (F - f) / m, friction limits, v = a t and s = a t^2 / 2 against a numerical integral
//   particles  states at 0 and 100 C, kelvin, energy ratio, Boyle's law, compressibility, steam volume
//   cell       which part is in which cell, class limits, every part has a drawing and a function
// Usage: node scripts/check-labs.js   (exit code 1 on any problem; also run by node scripts/validate.js)

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.join(__dirname, "..");
let problems = 0;
const bad = (msg) => {
  problems++;
  if (problems <= 60) console.log("  ✗ " + msg);
};
const near = (a, b, tol = 1e-9) => Math.abs(a - b) <= tol * Math.max(1, Math.abs(a), Math.abs(b));

const ctx = vm.createContext({ console, Views: {}, t: (s) => s, esc: String, icon: () => "", Document: 0, document: {}, Games: {}, Store: {}, Learn: {}, Objectives: {} });
for (const f of ["labs", "circuit", "force", "particles", "cell"]) vm.runInContext(fs.readFileSync(path.join(root, "js", "labs", f + ".js"), "utf8"), ctx, { filename: f + ".js" });
const Labs = vm.runInContext("Labs", ctx);
const C = Labs.calc;

// ---------- circuit ----------
{
  const { solve, setup } = C.circuit;
  const empty = { S1: "", S2: "", A1: "", A2: "", B1: "", B2: "" };
  const B = (o) => Object.assign({}, empty, o);
  // the worked examples
  let s = solve(B({ S1: "r10", S2: "r20" }), 6);
  if (!near(s.I, 0.2) || !near(s.rt, 30) || s.state !== "closed") bad(`6 V across 10 + 20 ohm: I=${s.I}, R=${s.rt}`);
  if (!near(s.at.S1.V, 2) || !near(s.at.S2.V, 4)) bad("voltage division across 10 and 20 ohm");
  s = solve(B({ S1: "bulb" }), 6);
  if (!near(s.I, 0.6) || !near(s.bulbs[0].P, 3.6)) bad("one bulb on 6 V should carry 0.6 A at 3.6 W");
  s = solve(B({ S1: "bulb", S2: "bulb" }), 6);
  if (!near(s.I, 0.3) || !near(s.bulbs[0].P, 0.9)) bad("two bulbs in series on 6 V: 0.3 A, 0.9 W each");
  s = solve(B({ A1: "bulb", B1: "bulb" }), 6);
  if (!near(s.rt, 5) || !near(s.I, 1.2) || !near(s.Ia, 0.6) || !near(s.bulbs[1].P, 3.6)) bad("two bulbs in parallel on 6 V: R=5, I=1.2, 0.6 A each");
  s = solve(B({ A1: "r10", B1: "r20" }), 6);
  if (!near(s.rt, 20 / 3) || !near(s.Ia + s.Ib, s.I)) bad("10 and 20 ohm in parallel: R = 20/3");
  if (solve(B(), 6).state !== "short") bad("bare wire across the battery is a short circuit");
  if (solve(B({ S1: "bulb", S2: "sw0" }), 6).state !== "open") bad("an open switch opens the circuit");
  if (solve(B({ S1: "bulb", S2: "gap" }), 6).state !== "open") bad("a gap opens the circuit");
  if (solve(B({ S1: "bulb", A1: "volt" }), 6).state !== "open") bad("a voltmeter alone in the only branch blocks the current");
  s = solve(B({ S1: "bulb", A1: "volt", B1: "bulb" }), 6);
  if (!near(s.volt.A1, 3) || !near(s.rt, 20)) bad(`voltmeter in a branch beside a bulb should read the branch voltage (got ${s.volt.A1})`);
  s = solve(B({ S1: "bulb", A1: "", A2: "amm", B1: "r10" }), 6);
  if (s.state !== "short" && !(s.shorted.length === 1 && s.shorted[0] === "B")) bad("a wire branch short-circuits the resistor branch");
  s = solve(B({ S1: "volt", S2: "bulb" }), 9);
  if (s.state !== "open" || !near(s.volt.S1, 9)) bad("voltmeter in series reads the battery voltage and no current flows");
  s = solve(B({ S1: "amm", S2: "r50" }), 12);
  if (!near(s.at.S1.I, 0.24)) bad("ammeter reads the series current 12/50");
  if (setup(B({ S1: "bulb", S2: "r10" })) !== "bulb + 10 Ω") bad("setup text for a series pair: " + setup(B({ S1: "bulb", S2: "r10" })));
  if (setup(B({ A1: "bulb", B1: "bulb" })) !== "bulb ∥ bulb") bad("setup text for parallel: " + setup(B({ A1: "bulb", B1: "bulb" })));

  // every board (10 parts in 6 places) at several battery voltages: Kirchhoff and energy
  const P = ["", "bulb", "r10", "r20", "r50", "sw1", "sw0", "amm", "volt", "gap"];
  const K = ["S1", "S2", "A1", "A2", "B1", "B2"];
  let boards = 0, closed = 0, shorts = 0, opens = 0;
  const idx = [0, 0, 0, 0, 0, 0];
  const volts = [1.5, 6, 12];
  for (let n = 0; n < 10 ** 6; n++) {
    let m = n;
    const b = {};
    K.forEach((k, i) => ((b[k] = P[m % 10]), (m = Math.floor(m / 10))));
    for (const V of n % 7 === 0 ? volts : [6]) {
      const r = solve(b, V);
      boards++;
      if (r.state === "closed") {
        closed++;
        if (!near(r.I * r.rt, V)) return bad(`Ohm's law fails: ${JSON.stringify(b)}`);
        if (!r.bypass && (r.usedA || r.usedB) && !near(r.Ia + r.Ib, r.I)) return bad(`Kirchhoff current law fails: ${JSON.stringify(b)}`);
        let pw = 0;
        K.forEach((k) => (pw += r.at[k].P || 0));
        if (!near(pw, r.Pbat, 1e-7)) return bad(`energy: ${pw} W in the parts but ${r.Pbat} W from the battery: ${JSON.stringify(b)}`);
        K.forEach((k) => {
          const a = r.at[k];
          if (!isFinite(a.I) || a.I < -1e-12 || (a.V != null && !isFinite(a.V))) bad(`bad number in ${k}: ${JSON.stringify(b)}`);
        });
      } else if (r.state === "short") shorts++;
      else {
        opens++;
        if (r.I !== 0) bad("current in an open circuit");
      }
      K.forEach((k) => {
        if (b[k] === "volt" && r.volt[k] != null && !(r.volt[k] >= -1e-12 && r.volt[k] <= V + 1e-9)) bad(`voltmeter reading out of range ${r.volt[k]}: ${JSON.stringify(b)}`);
      });
    }
  }
  console.log(`  circuit: ${boards} boards checked (${closed} closed, ${opens} open, ${shorts} short)`);
}

// ---------- force and motion ----------
{
  const { motion, velocity, distance, SURFACES, G, T_END } = C.force;
  if (!near(motion(10, 2, 0).a, 5)) bad("F = 10 N, m = 2 kg, frictionless: a should be 5 m/s2");
  if (!near(motion(10, 2, 0).v, 25) || !near(motion(10, 2, 0).s, 62.5)) bad("v and s after 5 s for a = 5");
  if (!near(motion(5, 2, 0).a, 2.5) || !near(motion(20, 2, 0).a, 10)) bad("a = F / m");
  if (!near(motion(10, 4, 0).a, 2.5)) bad("doubling the mass halves a");
  const w = motion(10, 2, 0.3);
  if (!near(w.f, 0.3 * 2 * G) || !near(w.a, (10 - 0.3 * 2 * G) / 2)) bad("friction on a wooden floor");
  if (motion(10, 2, 0.6).moving || motion(10, 2, 0.6).a !== 0 || !near(motion(10, 2, 0.6).f, 10)) bad("static friction balances a pull smaller than mu m g");
  let n = 0;
  for (let F = 0; F <= 20; F++)
    for (let m = 0.5; m <= 10; m += 0.5)
      for (const [k, sf] of Object.entries(SURFACES)) {
        n++;
        const r = motion(F, m, sf.mu);
        if (!isFinite(r.a) || r.a < 0) bad(`bad a for F=${F} m=${m} ${k}`);
        if (r.moving && !near(r.a * m, F - sf.mu * m * G, 1e-9)) bad(`F_net = m a fails for F=${F} m=${m} ${k}`);
        if (!r.moving && (r.a !== 0 || r.f > sf.mu * m * G + 1e-9 || !near(r.f, Math.min(F, sf.mu * m * G)))) bad(`not moving but a=${r.a} f=${r.f} for F=${F} m=${m} ${k}`);
        if (!near(r.v, velocity(r.a, T_END)) || !near(r.s, distance(r.a, T_END))) bad("v or s mismatch");
        // distance is the area under the velocity-time graph
        let area = 0;
        const N = 500;
        for (let i = 0; i < N; i++) area += (velocity(r.a, ((i + 0.5) * T_END) / N) * T_END) / N;
        if (!near(area, r.s, 1e-6)) bad(`s is not the area under the v-t graph for F=${F} m=${m} ${k}: ${area} vs ${r.s}`);
      }
  console.log(`  force: ${n} settings checked`);
}

// ---------- particles ----------
{
  const P = C.particles;
  const exp = { [-1]: "solid", 0: "melting", 1: "liquid", 99: "liquid", 100: "boiling", 101: "gas" };
  for (const [T, st] of Object.entries(exp)) if (P.stateOf(Number(T)) !== st) bad(`water at ${T} C should be ${st}, got ${P.stateOf(Number(T))}`);
  if (!near(P.kelvin(0), 273.15) || !near(P.kelvin(100), 373.15)) bad("kelvin");
  if (!near(P.energyRatio(0), 1) || !near(P.energyRatio(100), 373.15 / 273.15)) bad("energy ratio");
  let last = 0;
  for (let T = P.T_MIN; T <= P.T_MAX; T++) {
    const m = P.mix(T);
    if (!near(m.solid + m.liquid + m.gas, 1)) bad(`mix at ${T} does not add to 1`);
    if (P.energyRatio(T) <= last || !near(P.speedRatio(T) ** 2, P.energyRatio(T))) bad(`energy or speed not increasing at ${T}`);
    last = P.energyRatio(T);
    const sq = P.squash(T);
    const st = P.stateOf(T);
    if (st === "gas" && sq !== -50) bad("a gas halves in volume when the pressure doubles");
    if ((st === "liquid" || st === "solid") && !(sq < 0 && sq > -0.01)) bad(`liquid or solid squash should be tiny, got ${sq} at ${T}`);
    if ((st === "melting" || st === "boiling") && sq !== null) bad("no single squash value while melting or boiling");
  }
  if (Math.abs(P.STEAM_RATIO - 1603) > 5) bad(`steam to water volume ratio ${P.STEAM_RATIO}`);
  console.log("  particles: states, kelvin, energy, Boyle, compressibility checked");
}

// ---------- cell builder ----------
{
  const K = C.cell;
  const ids = K.ORG.map((o) => o.id);
  if (new Set(ids).size !== ids.length) bad("duplicate part id");
  const only = (cell, cls) => K.onlyIn(cell, cls).sort().join(",");
  if (only("plant", 12) !== "chloro,wall") bad("only in the plant cell: " + only("plant", 12));
  if (only("animal", 12) !== "centro") bad("only in the animal cell: " + only("animal", 12));
  if (only("plant", 8) !== "chloro,wall" || only("animal", 8) !== "") bad("class 8 sets");
  if (K.truth("plant", 8).includes("ribo") || !K.truth("plant", 9).includes("ribo")) bad("class limits for the parts");
  if (K.place([], "animal", "wall", 10) !== "no" || K.place([], "animal", "chloro", 10) !== "no" || K.place([], "plant", "centro", 10) !== "no") bad("parts that do not belong are refused");
  if (K.place([], "plant", "nucleus", 10) !== "ok" || K.place(["nucleus"], "plant", "nucleus", 10) !== "again") bad("placing a part twice");
  if (K.place([], "plant", "ribo", 8) !== "no") bad("class 8 does not meet ribosomes");
  for (const o of K.ORG) {
    if (!o.fn || !o.name) bad(`part ${o.id} needs a name and a function`);
    if ((!o.plant || !o.animal) && !o.why) bad(`part ${o.id} is in one cell only: it needs a reason (why)`);
    for (const cell of ["plant", "animal"]) if (o[cell] && !K.drawn[cell].includes(o.id)) bad(`part ${o.id} has no drawing in the ${cell} cell`);
    for (const cell of ["plant", "animal"]) if (!o[cell] && K.drawn[cell].includes(o.id)) bad(`part ${o.id} is drawn in the ${cell} cell where it does not belong`);
  }
  console.log("  cell: parts, class limits, drawings checked");
}

// ---------- chapter mapping ----------
{
  const reg = vm.createContext({});
  reg.globalThis = reg;
  vm.runInContext(fs.readFileSync(path.join(root, "data", "registry.js"), "utf8"), reg);
  const loaded = new Set();
  const need = (c) => {
    if (!loaded.has(c)) {
      vm.runInContext(fs.readFileSync(path.join(root, "data", `class${c}`, "index.js"), "utf8"), reg);
      loaded.add(c);
    }
  };
  let rows = 0;
  for (const lab of Labs.all()) {
    if (!lab.chapters.length || !lab.objective || !lab.title) bad(`lab ${lab.id} needs chapters, a title and an objective`);
    for (const x of lab.chapters) {
      need(x.cls);
      let found = false;
      found = chapterExists(reg, x);
      rows++;
      if (!found) bad(`lab ${lab.id}: ${x.cls}/${x.subject}/${x.chapter} is not a chapter in the data`);
    }
    const hrefs = Labs.forChapter(lab.chapters[0].cls, lab.chapters[0].subject, lab.chapters[0].chapter).map((l) => l.id);
    if (!hrefs.includes(lab.id)) bad(`Labs.forChapter does not return ${lab.id} for its own chapter`);
  }
  console.log(`  mapping: ${Labs.all().length} labs, ${rows} chapter links checked`);
}
function chapterExists(reg, x) {
  const src = fs.readFileSync(path.join(root, "data", `class${x.cls}`, `${x.subject}.js`), "utf8");
  return src.includes(`id: "${x.chapter}"`);
}

// ---------- translations ----------
{
  const i18n = vm.createContext({ currentLang: () => "en", Store: undefined });
  vm.runInContext(fs.readFileSync(path.join(root, "js", "i18n.js"), "utf8").replace(/^const /gm, "var ").replace(/^function /gm, "var __f = function "), i18n);
  vm.runInContext(fs.readFileSync(path.join(root, "js", "labs", "i18n.js"), "utf8"), i18n);
  let n = 0;
  for (const f of ["labs", "circuit", "force", "particles", "cell"]) {
    const src = fs.readFileSync(path.join(root, "js", "labs", f + ".js"), "utf8");
    for (const m of src.matchAll(/\bt\("((?:[^"\\\n]|\\.)+)"/g)) {
      n++;
      for (const l of ["pa", "hi"]) if (!i18n.I18N[l][m[1]]) bad(`${f}.js: no ${l} translation for "${m[1].slice(0, 70)}"`);
    }
  }
  console.log(`  translations: ${n} t("…") strings checked for Punjabi and Hindi`);
}

console.log(problems ? `\n${problems} problem(s)` : "\nvirtual labs OK");
module.exports = { problems };
if (require.main === module) process.exit(problems ? 1 : 0);
