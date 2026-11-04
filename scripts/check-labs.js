#!/usr/bin/env node
// Checks the virtual labs (js/labs/): the formulas behind each lab for a wide range of settings, the chapter mapping, and
// that every English string written as t("...") has a Punjabi and a Hindi translation.
//   circuit    Ohm's law, series and parallel resistance, Kirchhoff's current law, energy: power from the battery = power in the parts
//   force      a = (F - f) / m, friction limits, v = a t and s = a t^2 / 2 against a numerical integral
//   particles  states at 0 and 100 C, kelvin, energy ratio, Boyle's law, compressibility, steam volume
//   cell       which part is in which cell, class limits, every part has a drawing and a function
//   atom       elements 1-20 (shells 2,8,8,2, charge, mass number), valencies, molecular masses, every known molecule builds and nothing impossible does
//   equation   every reaction balances with its listed coefficients, they are the smallest, and they are the only balance
//   india map  36 entities with names and capitals, borders shared exactly and no crossings, neighbours, 116 cities inside their states, rivers and ranges (scripts/check-india-map.js)
//   Maths Studio: placevalue (number words read back, grouping), fractionwall, algebratiles, geoboard (Pick = shoelace, symmetry by brute force), grapher
// Usage: node scripts/check-labs.js   (exit code 1 on any problem; also run by node scripts/validate.js)

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.join(__dirname, "..");
let problems = 0;
const bad = (msg) => {
  problems++;
  if (problems <= (Number(process.env.LABS_MAX) || 60)) console.log("  ✗ " + msg);
};
const near = (a, b, tol = 1e-9) => Math.abs(a - b) <= tol * Math.max(1, Math.abs(a), Math.abs(b));

const ctx = vm.createContext({ console, Views: {}, t: (s) => s, esc: String, icon: () => "", Document: 0, document: {}, Games: {}, Store: {}, Learn: {}, Objectives: {} });
for (const f of ["labs", "circuit", "force", "particles", "cell", "atom", "equation", "foodweb", "body"]) vm.runInContext(fs.readFileSync(path.join(root, "js", "labs", f + ".js"), "utf8"), ctx, { filename: f + ".js" });
const Labs = vm.runInContext("Labs", ctx);
const C = Labs.calc;
const MATHS_LABS = ["placevalue", "fractionwall", "algebratiles", "geoboard", "grapher"]; // the Maths Studio
for (const f of MATHS_LABS) vm.runInContext(fs.readFileSync(path.join(root, "js", "labs", f + ".js"), "utf8"), ctx, { filename: f + ".js" });
for (const f of ["india-map", "india-lab"]) vm.runInContext(fs.readFileSync(path.join(root, "js", "labs", f + ".js"), "utf8"), ctx, { filename: f + ".js" }); // the India map explorer

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

// ---------- atom and molecule builder ----------
{
  const K = C.atom;
  const sym = K.EL.map((e) => e.sym).join(" ");
  if (sym !== "H He Li Be B C N O F Ne Na Mg Al Si P S Cl Ar K Ca") bad("elements 1 to 20: " + sym);
  // the 2, 8, 8, 2 rule and neutral atoms
  const shells = [[1], [2], [2, 1], [2, 2], [2, 3], [2, 4], [2, 5], [2, 6], [2, 7], [2, 8], [2, 8, 1], [2, 8, 2], [2, 8, 3], [2, 8, 4], [2, 8, 5], [2, 8, 6], [2, 8, 7], [2, 8, 8], [2, 8, 8, 1], [2, 8, 8, 2]];
  const MASSNO = [1, 4, 7, 9, 11, 12, 14, 16, 19, 20, 23, 24, 27, 28, 31, 32, 35, 40, 39, 40];
  K.EL.forEach((x, i) => {
    const I = K.info(x.z, x.n, x.z);
    if (I.shells.join() !== shells[i].join()) bad(`${x.name} should have shells ${shells[i]}, got ${I.shells}`);
    if (I.q !== 0 || I.A !== MASSNO[i] || x.z + x.n !== MASSNO[i]) bad(`${x.name}: mass number ${I.A}, charge ${I.q}`);
    if (I.isotope) bad(`${x.name} with the usual neutrons should not be an isotope`);
    if (I.shells.reduce((a, b) => a + b, 0) !== x.z) bad(`${x.name}: shell electrons do not add up`);
    const noble = [2, 10, 18].includes(x.z);
    if ((I.kind === "noble") !== noble) bad(`${x.name}: noble gas flag wrong (${I.kind})`);
  });
  const na = K.info(11, 12, 11), naPlus = K.info(11, 12, 10), cl = K.info(17, 18, 18), o2 = K.info(8, 8, 10), mg2 = K.info(12, 12, 10);
  if (na.label !== "²³Na" || na.kind !== "lose") bad("sodium atom: " + na.label + " " + na.kind);
  if (naPlus.q !== 1 || naPlus.label !== "²³Na⁺" || naPlus.shells.join() !== "2,8" || naPlus.kind !== "stable-ion") bad("Na+ should have shells 2,8, charge +1");
  if (cl.q !== -1 || cl.label !== "³⁵Cl⁻" || cl.shells.join() !== "2,8,8" || cl.kind !== "stable-ion") bad("Cl- should have shells 2,8,8, charge -1");
  if (o2.q !== -2 || o2.label !== "¹⁶O²⁻" || mg2.q !== 2 || mg2.label !== "²⁴Mg²⁺") bad("O2- and Mg2+ labels: " + o2.label + " " + mg2.label);
  if (K.info(17, 20, 17).label !== "³⁷Cl" || !K.info(17, 20, 17).isotope) bad("chlorine-37 is an isotope");
  if (K.info(0, 0, 0).el !== null || K.info(0, 0, 0).kind !== "none") bad("no protons, no element");
  // a charge is protons - electrons for every combination
  let combos = 0;
  for (let p = 1; p <= 20; p++) for (let e = 0; e <= 20; e++) {
    combos++;
    const I = K.info(p, p, e);
    if (I.q !== p - e || I.A !== 2 * p || I.shells.reduce((a, b) => a + b, 0) !== e) bad(`info(${p},${p},${e})`);
  }
  // valency and mass table
  const V = K.VAL, M = K.MASS;
  if (JSON.stringify([V.H, V.C, V.N, V.O, V.Na, V.Cl]) !== "[1,4,3,2,1,1]") bad("valencies");
  if (JSON.stringify([M.H, M.C, M.N, M.O, M.Na, M.Cl]) !== "[1,12,14,16,23,35.5]") bad("atomic masses");
  // every molecule of the lab builds, is complete, connected and has the right formula and mass
  const wantF = { "H₂": 2, "O₂": 32, "N₂": 28, "H₂O": 18, "CO₂": 44, "CH₄": 16, "NH₃": 17, "HCl": 36.5, "NaCl": 58.5, "C₂H₆": 30, "C₂H₄": 28 };
  for (const m of K.MOLS) {
    const A = K.analyse(m.atoms, m.bonds);
    if (A.formula !== m.f) bad(`${m.name}: built formula ${A.formula}, listed ${m.f}`);
    if (!A.ok) bad(`${m.f} should be complete and connected (free: ${A.free})`);
    if (!near(A.mass, wantF[m.f])) bad(`${m.f}: mass ${A.mass}, expected ${wantF[m.f]}`);
    if (A.name !== m.name) bad(`${m.f}: name ${A.name}`);
    if (A.ionic !== (m.f === "NaCl")) bad(`${m.f}: ionic flag`);
    // building it bond by bond through addBond ends in the same place, and one more bond is always refused
    let bonds = [];
    for (const [i, j, o] of m.bonds) for (let k = 0; k < o; k++) {
      const r = K.addBond(m.atoms, bonds, i, j);
      if (!r.ok) bad(`${m.f}: bond ${i}-${j} refused (${r.code})`);
      else bonds = r.bonds;
    }
    const B = K.analyse(m.atoms, bonds);
    if (B.formula !== m.f || !B.ok) bad(`${m.f}: not complete after addBond`);
    for (let i = 0; i < m.atoms.length; i++) for (let j = 0; j < m.atoms.length; j++) if (i !== j && K.canBond(m.atoms, bonds, i, j).ok) bad(`${m.f}: a bond ${i}-${j} is still allowed after it is complete`);
    if (!K.layout(m.atoms.length, m.bonds).every((p) => p.x >= 0 && p.x <= 1 && p.y >= 0 && p.y <= 1)) bad(`${m.f}: layout outside the board`);
  }
  if (K.MOLS.length !== 11) bad("11 named molecules expected");
  // impossible valency is flagged
  const t3 = (atoms, bonds, i, j) => K.canBond(atoms, bonds, i, j);
  if (t3(["O", "H", "H", "H"], [[0, 1, 1], [0, 2, 1]], 0, 3).code !== "full") bad("a third bond on oxygen must be refused");
  if (t3(["H", "H"], [[0, 1, 1]], 0, 1).ok) bad("H-H cannot have a double bond");
  if (t3(["N", "N"], [[0, 1, 3]], 0, 1).ok) bad("a fourth bond between two atoms");
  if (t3(["C", "H", "H", "H", "H", "H"], [[0, 1, 1], [0, 2, 1], [0, 3, 1], [0, 4, 1]], 0, 5).code !== "full") bad("a fifth bond on carbon");
  if (t3(["Na", "Na"], [], 0, 1).code !== "metals") bad("two sodium atoms do not bond");
  if (t3(["Na", "H"], [], 0, 1).code !== "ionic-only") bad("Na-H is not in this lab");
  if (t3(["Na", "Cl"], [[0, 1, 1]], 0, 1).ok) bad("NaCl bonds once");
  if (t3(["H"], [], 0, 0).ok) bad("an atom cannot bond with itself");
  // incomplete and disconnected structures are not accepted
  const w = K.analyse(["H", "H", "O"], [[0, 2, 1]]);
  if (w.ok) bad("H-O alone is not water");
  if (K.analyse(["H", "H", "O"], [[0, 2, 1]]).complete) bad("OH + H is incomplete");
  if (K.analyse(["H", "H", "H", "H"], [[0, 1, 1], [2, 3, 1]]).ok) bad("two H2 molecules are not one molecule");
  const na2o = K.analyse(["Na", "Na", "O"], [[0, 2, 1], [1, 2, 1]]);
  if (na2o.formula !== "Na₂O" || !na2o.ok || !near(na2o.mass, 62) || na2o.charges.join() !== "1,1,-2") bad("Na2O ions");
  const nacl = K.analyse(["Na", "Cl"], [[0, 1, 1]]);
  if (nacl.charges.join() !== "1,-1") bad("Na+ and Cl- in NaCl");
  // other molecules the lab names
  const ex = [["Cl₂", ["Cl", "Cl"], [[0, 1, 1]], 71], ["H₂O₂", ["H", "O", "O", "H"], [[0, 1, 1], [1, 2, 1], [2, 3, 1]], 34], ["C₂H₂", ["C", "C", "H", "H"], [[0, 1, 3], [0, 2, 1], [1, 3, 1]], 26], ["CH₄O", ["C", "H", "H", "H", "O", "H"], [[0, 1, 1], [0, 2, 1], [0, 3, 1], [0, 4, 1], [4, 5, 1]], 32]];
  for (const [f, a, b, m] of ex) {
    const A = K.analyse(a, b);
    if (A.formula !== f || !A.ok || !near(A.mass, m) || !A.name) bad(`${f}: ${A.formula} ok=${A.ok} mass=${A.mass}`);
  }
  // translations of the names the lab shows
  console.log(`  atom: ${K.EL.length} elements, ${combos} particle sets, ${K.MOLS.length} molecules, valency refusals checked`);
}

// ---------- equation balancer ----------
{
  const K = C.equation;
  if (K.RX.length < 20) bad("at least 20 reactions are needed");
  const ids = K.RX.map((r) => r.id);
  if (new Set(ids).size !== ids.length) bad("duplicate reaction id");
  const must = ["H2+O2", "Mg+O2", "CH4+O2", "Fe+H2O", "Na+H2O", "CaCO3", "Zn+HCl", "Fe+CuSO4", "AgNO3+NaCl", "Al+O2", "C3H8+O2", "N2+H2", "KClO3", "Pb(NO3)2"];
  for (const m of must) if (!K.RX.some((r) => r.l.join("+").startsWith(m) || r.l.join("+") === m)) bad(`the reaction starting with ${m} is missing`);
  const types = new Set();
  let n = 0;
  for (const r of K.RX) {
    n++;
    types.add(r.type);
    const where = `${r.id}`;
    if (!K.TYPES[r.type]) bad(`${where}: unknown type ${r.type}`);
    if (r.c.length !== r.l.length + r.r.length) bad(`${where}: ${r.c.length} numbers for ${r.l.length + r.r.length} formulas`);
    // the listed numbers balance, are whole numbers and have no common factor
    const res = K.check(r, r.c);
    if (!res.balanced) bad(`${where}: the listed numbers do not balance (${res.off.join(",")} out)`);
    if (res.g !== 1) bad(`${where}: the listed numbers have a common factor ${res.g}`);
    if (r.c.some((x) => !Number.isInteger(x) || x < 1)) bad(`${where}: numbers must be whole and at least 1`);
    // there is exactly one balance, and it is the listed one
    const s = K.solve(r);
    if (s.nullity !== 1) bad(`${where}: null space dimension ${s.nullity}; the equation has no single balance`);
    else if (s.coef.join() !== r.c.join()) bad(`${where}: the solver finds ${s.coef} but ${r.c} is listed`);
    // all-ones is not already the answer unless the listed answer is all ones; no smaller scale of the answer
    for (let k = 2; k <= 3; k++) if (K.check(r, r.c.map((x) => x * k)).smallest) bad(`${where}: a multiple should not be "smallest"`);
    // each element appears on both sides (otherwise it could never balance)
    for (const [e, [a, b]] of Object.entries(res.cnt)) if (!a || !b) bad(`${where}: ${e} is on one side only`);
    if (r.level < 1 || r.level > 3 || typeof r.redox !== "boolean") bad(`${where}: level or redox flag`);
    // the formula parser against a hand count
    if (!r.name) bad(`${where}: needs a name`);
  }
  // the parser
  const eq = (f, o) => JSON.stringify(Object.entries(K.parse(f)).sort()) === JSON.stringify(Object.entries(o).sort());
  if (!eq("Pb(NO3)2", { Pb: 1, N: 2, O: 6 })) bad("parse Pb(NO3)2");
  if (!eq("Ca(OH)2", { Ca: 1, O: 2, H: 2 })) bad("parse Ca(OH)2");
  if (!eq("C2H5OH", { C: 2, H: 6, O: 1 })) bad("parse C2H5OH");
  if (!eq("Fe2O3", { Fe: 2, O: 3 })) bad("parse Fe2O3");
  if (!eq("Al2(SO4)3", { Al: 2, S: 3, O: 12 })) bad("parse Al2(SO4)3");
  if (K.fmt("Pb(NO3)2") !== "Pb(NO₃)₂" || K.fmt("C2H5OH") !== "C₂H₅OH" || K.fmt("H2O") !== "H₂O") bad("subscripts");
  // wrong sets are not balanced and name the element that is out
  const ch4 = K.RX.find((r) => r.id === "ch4");
  if (K.check(ch4, [1, 1, 1, 1]).balanced || K.check(ch4, [1, 1, 1, 1]).off.join() !== "H,O") bad("CH4 + O2 with 1,1,1,1 is out in H and O");
  if (K.check(ch4, [2, 4, 2, 4]).smallest || !K.check(ch4, [2, 4, 2, 4]).balanced || K.check(ch4, [2, 4, 2, 4]).g !== 2) bad("2,4,2,4 balances but is not smallest");
  if (K.check(ch4, [1, 2, 1, 2]).off.length) bad("1,2,1,2");
  // every type is used, and the equation text reads well
  for (const k of Object.keys(K.TYPES)) if (!types.has(k)) bad(`no reaction of type ${k}`);
  if (K.equationText(ch4, [1, 2, 1, 2]) !== "CH₄ + 2 O₂ → CO₂ + 2 H₂O") bad("equation text: " + K.equationText(ch4, [1, 2, 1, 2]));
  // a few classic equations by hand
  const bal = (a, b, c) => K.check(K.RX.find((r) => r.id === a), b).balanced === c;
  if (!bal("h2-o2", [2, 1, 2], true) || !bal("h2-o2", [1, 1, 1], false) || !bal("fe-h2o", [3, 4, 1, 4], true) || !bal("pbno32", [2, 2, 4, 1], true) || !bal("kclo3", [2, 2, 3], true)) bad("hand checks of classic equations");
  console.log(`  equation: ${n} reactions balance in the smallest whole numbers, each with exactly one balance; ${types.size} types`);
}

// ---------- food-web rescue ----------
{
  const K = C.foodweb;
  const ids = K.ORG.map((o) => o.id);
  if (new Set(ids).size !== ids.length) bad("foodweb: duplicate organism id");
  if (new Set(K.ORG.map((o) => o.name)).size !== ids.length) bad("foodweb: duplicate organism name");
  const need = ["grass", "grasshopper", "frog", "snake", "eagle", "deer", "tiger", "rabbit", "fox", "phytoplankton", "zooplankton", "small fish", "big fish", "kingfisher", "peacock", "mouse", "owl", "decomposers"];
  for (const n of need) if (!K.ORG.some((o) => o.name.toLowerCase() === n)) bad(`foodweb: organism "${n}" is missing`);
  const isAnimal = (id) => K.isAnimal(id);
  for (const o of K.ORG) {
    if (!K.KIND[o.kind]) bad(`foodweb: ${o.id} has an unknown kind ${o.kind}`);
    for (const f of o.diet) if (!ids.includes(f)) bad(`foodweb: ${o.id} eats unknown ${f}`);
    if (o.id !== "decomp" && o.diet.includes(o.id)) bad(`foodweb: ${o.id} eats itself`);
    const plants = o.diet.filter((f) => K.isProducer(f)), animals = o.diet.filter(isAnimal);
    if (o.kind === "producer" || o.kind === "decomposer") {
      if (o.diet.length) bad(`foodweb: ${o.id} (${o.kind}) must not eat other organisms`);
    } else if (o.kind === "herbivore") {
      if (!plants.length || animals.length) bad(`foodweb: herbivore ${o.id} must eat plants only`);
    } else if (o.kind === "carnivore") {
      if (!animals.length || plants.length) bad(`foodweb: carnivore ${o.id} must eat animals only`);
    } else if (o.kind === "omnivore") {
      if (!plants.length || !animals.length) bad(`foodweb: omnivore ${o.id} must eat plants and animals`);
    }
    if (o.diet.some((f) => K.org(f).kind === "decomposer")) bad(`foodweb: ${o.id} eats decomposers`);
  }
  // brute-force chain positions: walk every path from every producer
  const brute = (links) => {
    const out = {};
    const walk = (id, depth) => {
      (out[id] = out[id] || new Set()).add(depth);
      for (const [f, e] of links) if (f === id) walk(e, depth + 1);
    };
    const nodes = new Set(links.flat());
    for (const id of nodes) if (K.isProducer(id)) walk(id, 1);
    return out;
  };
  const known = {
    pond: { phyto: 1, zoo: 2, sfish: 3, bfish: 4, king: 4 },
    grass: { grass: 1, hopper: 2, mouse: 2, rabbit: 2, peacock: 3, frog: 3, snake: 4, owl: 4, fox: 3, eagle: 5 },
    forest: { grass: 1, trees: 1, hopper: 2, deer: 2, rabbit: 2, mouse: 2, frog: 3, snake: 4, owl: 4, eagle: 5, tiger: 3 },
  };
  let nlinks = 0;
  for (const h of K.HABS) {
    const H = K.HAB[h];
    if (!H.ids.includes("decomp")) bad(`foodweb: ${h} needs decomposers`);
    const links = K.truthLinks(h);
    nlinks += links.length;
    const lv = K.levels(links), pos = K.positions(links), bf = brute(links);
    for (const id of H.ids.filter((i) => i !== "decomp")) {
      const o = K.org(id);
      if (!K.isProducer(id) && !links.some((l) => l[1] === id)) bad(`foodweb: ${h}: ${id} has no food in this habitat`);
      if (!lv[id]) bad(`foodweb: ${h}: ${id} is not reached from a producer`);
      const b = bf[id] ? [...bf[id]].sort((a, c) => a - c) : [];
      if (JSON.stringify(b) !== JSON.stringify(pos[id])) bad(`foodweb: ${h}: ${id} positions ${pos[id]} but brute force gives ${b}`);
      if (known[h][id] !== lv[id]) bad(`foodweb: ${h}: ${id} trophic level ${lv[id]}, expected ${known[h][id]}`);
      if (K.isProducer(id) && lv[id] !== 1) bad(`foodweb: producer ${id} must be level 1`);
      // an eater is above every food it eats
      for (const [f, e] of links) if (e === id && !(lv[e] > lv[f])) bad(`foodweb: ${h}: ${e} is not above ${f}`);
      if (!K.isProducer(id) && !K.isAnimal(id)) bad("foodweb: unexpected kind");
      if (K.isAnimal(id) && o.diet.filter((f) => H.ids.includes(f)).length === 0) bad(`foodweb: ${h}: ${id} eats nothing here`);
    }
    for (const [f, e] of links) if (!H.ids.includes(f) || !H.ids.includes(e)) bad(`foodweb: ${h}: link ${f}->${e} leaves the habitat`);
    // the longest chain is a real chain of links, producer first
    const ch = K.longestChain(links);
    if (!K.isProducer(ch[0]) || ch.length !== Math.max(...Object.values(lv))) bad(`foodweb: ${h}: longest chain ${ch}`);
    for (let i = 1; i < ch.length; i++) if (!links.some((l) => l[0] === ch[i - 1] && l[1] === ch[i])) bad(`foodweb: ${h}: chain step ${ch[i - 1]}->${ch[i]} is not a link`);
    // judge: accepted exactly the diet links (and anything -> decomposers); every refusal has a reason
    for (const a of H.ids) for (const b of H.ids) {
      const r = K.judge(a, b);
      const want = a !== b && ((b === "decomp" && a !== "decomp") || (a !== "decomp" && b !== "decomp" && K.org(b).diet.includes(a)));
      if (r.ok !== want) bad(`foodweb: judge(${a},${b}) = ${r.ok}, expected ${want}`);
      if (!r.ok && !["self", "producer", "reverse", "herb", "carn", "decfood", "no"].includes(r.code)) bad(`foodweb: judge(${a},${b}) has no reason`);
      if (a !== b && !r.ok && K.org(b).kind === "herbivore" && isAnimal(a) && r.code !== "reverse" && r.code !== "herb") bad(`foodweb: herbivore ${b} eating animal ${a}: ${r.code}`);
      if (K.org(b).kind === "herbivore" && isAnimal(a) && r.ok) bad(`foodweb: a herbivore (${b}) may not eat an animal (${a})`);
      if (K.org(b).kind === "producer" && r.ok) bad(`foodweb: a producer (${b}) may not eat (${a})`);
      if (K.org(b).kind === "carnivore" && K.isProducer(a) && r.ok) bad(`foodweb: carnivore ${b} eating plant ${a}`);
      if (a === "decomp" && r.ok) bad("foodweb: decomposers are not food");
      if (b === "decomp" && a !== "decomp" && !r.ok) bad(`foodweb: ${a} -> decomposers must be allowed`);
      if (r.ok && b !== "decomp" && K.judge(b, a).ok) bad(`foodweb: ${a}<->${b} is allowed both ways`);
      if (!r.ok && K.org(a).diet.includes(b) && r.code !== "reverse") bad(`foodweb: judge(${a},${b}) should say "reverse"`);
    }
  }
  const J = K.judge;
  if (J("hopper", "frog").code !== "ok" || J("frog", "hopper").code !== "reverse" || J("frog", "grass").code !== "producer" || J("frog", "rabbit").code !== "herb" || J("grass", "snake").code !== "carn" || J("decomp", "grass").code !== "decfood" || J("grass", "decomp").code !== "dec") bad("foodweb: judge examples");
  // the five-level chain
  const chain = [["grass", "hopper"], ["hopper", "frog"], ["frog", "snake"], ["snake", "eagle"]];
  const lvc = K.levels(chain);
  if (K.levelCount(chain) !== 5 || ["grass", "hopper", "frog", "snake", "eagle"].some((id, i) => lvc[id] !== i + 1)) bad("foodweb: grass, grasshopper, frog, snake, eagle must be levels 1 to 5");
  if (K.longestChain(chain).join() !== "grass,hopper,frog,snake,eagle") bad("foodweb: longest chain of the five-level chain");
  if (K.levels([["hopper", "frog"]]).frog !== null) bad("foodweb: a chain with no producer has no level");
  if (K.positions(K.truthLinks("pond")).sfish.join() !== "2,3") bad("foodweb: small fish eats at levels 2 and 3");
  // the 10% law
  for (const e1 of [1, 10, 1000, 10000, 100000, 2500]) for (let n = 1; n <= 5; n++) {
    const e = K.energyAt(e1, n);
    if (!near(e, e1 * 0.1 ** (n - 1), 1e-12)) bad(`foodweb: energy ${e1} at level ${n} = ${e}`);
    if (n > 1 && !near(e, 0.1 * K.energyAt(e1, n - 1), 1e-12)) bad(`foodweb: level ${n} is not a tenth of level ${n - 1}`);
  }
  if ([1, 2, 3, 4, 5].map((n) => K.energyAt(10000, n)).join() !== "10000,1000,100,10,1") bad("foodweb: 10,000 J must give 10000, 1000, 100, 10, 1 J");
  // the population model
  const P = K.P;
  const webs = [K.web(chain), ...K.HABS.map((h) => K.web(K.truthLinks(h)))];
  let sims = 0;
  for (const w of webs) {
    // nothing changes without a change
    let s = K.start(w, null, true);
    s = K.run(w, s, P.SEASONS);
    if (w.ids.some((i) => s.pop[i] !== P.START) || s.heap !== 0 || s.nutr !== 1) bad("foodweb: the control run must stay steady");
    for (const id of w.ids) for (const type of ["remove", "double"]) {
      let st = K.start(w, { type, id }, true);
      const st2 = K.start(w, { type, id }, true);
      if (st.pop[id] !== (type === "remove" ? 0 : 200)) bad("foodweb: the start of a change");
      for (let k = 1; k <= P.SEASONS; k++) {
        st = K.step(w, st);
        sims++;
        const again = K.run(w, st2, k);
        if (JSON.stringify(again.pop) !== JSON.stringify(st.pop)) bad("foodweb: the model must be deterministic");
        for (const i of w.ids) if (!(st.pop[i] >= 0 && st.pop[i] <= P.CAP) || Number.isNaN(st.pop[i])) bad(`foodweb: population ${i} out of range: ${st.pop[i]}`);
        if (type === "remove" && st.pop[id] !== 0) bad("foodweb: a removed kind must stay at 0");
        const up = type === "remove" ? (v) => v > P.START : (v) => v < P.START;
        const down = type === "remove" ? (v) => v < P.START : (v) => v > P.START;
        for (const f of w.foods[id]) if (!up(st.pop[f])) bad(`foodweb: after ${type} of ${id} the food ${f} should go ${type === "remove" ? "up" : "down"} (season ${k}: ${st.pop[f]})`);
        for (const e of w.preds[id]) if (!down(st.pop[e])) bad(`foodweb: after ${type} of ${id} the eater ${e} should go ${type === "remove" ? "down" : "up"} (season ${k}: ${st.pop[e]})`);
      }
    }
    // decomposers
    const withD = K.run(w, K.start(w, null, true), 5), without = K.run(w, K.start(w, null, false), 5);
    if (withD.heap !== 0 || withD.nutr !== 1) bad("foodweb: decomposers present keep the soil");
    if (without.heap !== 5 * P.HEAP || !(without.nutr < 1)) bad("foodweb: without decomposers dead remains pile up");
    const prod = w.ids.filter(K.isProducer);
    if (prod.length && !prod.every((i) => without.pop[i] < withD.pop[i])) bad("foodweb: without decomposers the producers must decline");
  }
  // the example in the lab and its test: remove the frogs from the five-level chain
  const w5 = K.web(chain);
  const fr = K.run(w5, K.start(w5, { type: "remove", id: "frog" }), 5);
  if (!(fr.pop.hopper > 100) || !(fr.pop.snake < 100)) bad("foodweb: removing frogs must raise grasshoppers and lower snakes");
  console.log(`  foodweb: ${K.ORG.length} organisms, ${nlinks} links in 3 habitats (diets valid, levels checked by walking every path), judge for every pair, 10% law, ${sims} model steps`);
}

// ---------- body systems explorer ----------
{
  const K = C.body;
  const ids = K.ORGANS.map((o) => o.id);
  if (new Set(ids).size !== ids.length) bad("body: duplicate organ id");
  if (new Set(K.ORGANS.map((o) => o.name)).size !== ids.length) bad("body: duplicate organ name");
  if (new Set(K.ORGANS.map((o) => o.fn)).size !== ids.length) bad("body: two organs share a job text (matching needs them to differ)");
  if (K.SYSTEMS.join() !== "digestive,respiratory,circulatory,excretory,nervous") bad("body: systems");
  if (K.SYSTEMS.some((s) => /reproduct/i.test(K.SYS[s].name))) bad("body: the reproductive system is left out");
  for (const o of K.ORGANS) if (/reproduct|ovary|uterus|testis|penis|vagina/i.test(`${o.id} ${o.name} ${o.fn}`)) bad(`body: ${o.id} is outside this lab`);
  for (const s of K.SYSTEMS) {
    const list = K.organsOf(s);
    if (list.length < 3) bad(`body: ${s} needs at least 3 organs`);
    const jobs = K.jobOrder(list);
    if (jobs.length !== list.length || new Set(jobs.map((j) => j.id)).size !== list.length || jobs.some((j, i) => j.id === list[i].id)) bad(`body: ${s}: the jobs must be shuffled so that none sits next to its organ`);
    if (!K.SYS[s].name || !K.SYS[s].job || !K.SYS[s].link) bad(`body: ${s} needs a name, a job and a link`);
  }
  for (const o of K.ORGANS) {
    if (!K.SYSTEMS.includes(o.sys)) bad(`body: ${o.id} is in an unknown system`);
    if (!o.shape || !/<(path|ellipse|circle)/.test(o.shape)) bad(`body: ${o.id} has no drawing`);
    if (!o.fn || !o.name) bad(`body: ${o.id} needs a name and a job`);
    if (!(o.pt[0] > 0 && o.pt[0] < 240 && o.pt[1] > 0 && o.pt[1] < 430)) bad(`body: ${o.id} is outside the drawing`);
  }
  const place = { heart: "circulatory", arteries: "circulatory", veins: "circulatory", capillaries: "circulatory", lungs: "respiratory", trachea: "respiratory", bronchi: "respiratory", diaphragm: "respiratory", nose: "respiratory", kidneys: "excretory", ureters: "excretory", bladder: "excretory", urethra: "excretory", brain: "nervous", cord: "nervous", nerves: "nervous", mouth: "digestive", oesophagus: "digestive", stomach: "digestive", liver: "digestive", pancreas: "digestive", sintest: "digestive", lintest: "digestive", rectum: "digestive" };
  for (const [id, s] of Object.entries(place)) if (!ids.includes(id) || K.ORGANS.find((o) => o.id === id).sys !== s) bad(`body: ${id} should be in the ${s} system`);
  const J = K.JOURNEYS;
  const sameList = (a, b) => JSON.stringify(a) === JSON.stringify(b);
  if (!sameList(J.food.steps, ["mouth", "oesophagus", "stomach", "sintest", "lintest", "rectum"])) bad("body: the food route is mouth, oesophagus, stomach, small intestine, large intestine, rectum");
  if (!sameList(J.air.steps, ["nose", "trachea", "bronchi", "lungs"])) bad("body: the air route");
  if (!sameList(J.blood.steps, ["lungs", "heart", "body", "heart"])) bad("body: the blood route is lungs, heart, body, heart");
  if (J.food.steps.includes("liver") || J.food.steps.includes("pancreas")) bad("body: food does not pass through the liver or pancreas");
  if (!J.food.options.includes("liver") || !J.food.options.includes("pancreas") || !J.air.options.includes("diaphragm")) bad("body: the distractors liver, pancreas and diaphragm are offered");
  for (const o of ["liver", "pancreas", "diaphragm"]) if (!K.ORGANS.find((x) => x.id === o).off) bad(`body: ${o} needs the reason it is not on the route`);
  for (const j of K.JIDS) {
    const d = J[j];
    if (d.options.length !== new Set(d.options).size) bad(`body: ${j} repeats an option`);
    for (const st of d.steps) {
      if (!d.options.includes(st)) bad(`body: ${j}: step ${st} is not offered`);
      if (st === "body") {
        if (j !== "blood") bad("body: only the blood route visits the body");
      } else if (K.ORGANS.find((o) => o.id === st).sys !== d.sys && !(j === "blood" && st === "lungs")) bad(`body: ${j}: ${st} is not in the ${d.sys} system`);
    }
    for (const o of d.options) if (o !== "body" && !ids.includes(o)) bad(`body: ${j}: unknown option ${o}`);
    if (d.says && d.says.length !== d.steps.length) bad(`body: ${j}: a sentence for every step`);
    // top to bottom for the tubes
    if (j !== "blood") for (let i = 1; i < d.steps.length; i++) if (K.ORGANS.find((o) => o.id === d.steps[i]).pt[1] < K.ORGANS.find((o) => o.id === d.steps[i - 1]).pt[1]) bad(`body: ${j}: ${d.steps[i]} is drawn above ${d.steps[i - 1]}`);
    // judging every tap at every step: exactly the right organ moves on
    for (let i = 0; i < d.steps.length; i++) for (const o of d.options) {
      const r = K.judgeStep(j, i, o);
      if ((r === "ok") !== (o === d.steps[i])) bad(`body: ${j} step ${i}: ${o} judged ${r}`);
      if (r === "off" && d.steps.includes(o)) bad(`body: ${j}: ${o} is on the route`);
      if (r === "skip" && !d.steps.slice(i + 1).includes(o)) bad(`body: ${j}: ${o} is not later`);
    }
  }
  if (K.judgeStep("food", 1, "stomach") !== "skip" || K.judgeStep("food", 2, "mouth") !== "passed" || K.judgeStep("food", 2, "liver") !== "off" || K.judgeStep("blood", 0, "heart") !== "skip" || K.judgeStep("blood", 3, "lungs") !== "passed") bad("body: judgeStep examples");
  for (const [s, ids2] of Object.entries(K.GHOST)) for (const g of ids2) if (!ids.includes(g)) bad(`body: ghost ${g} in ${s}`);
  console.log(`  body: ${K.ORGANS.length} organs in ${K.SYSTEMS.length} systems, 3 journeys judged at every step, matching jobs shuffled, reproduction left out`);
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

// ---------- Maths Studio: place value, fraction wall, algebra tiles, geoboard, graph explorer ----------
// placevalue   number words in both systems (read back by an independent parser), digit grouping, expanded form, regrouping keeps the value
// fractionwall equal fractions by cross-multiplication over the whole wall, simplest form, comparison, the area model overlap a x c of b x d
// algebratiles (x+a)(x+b) = x^2 + (a+b)x + ab at many x, factor() finds a pair exactly when one exists, equation steps keep the solution
// geoboard     shoelace area = Pick's I + B/2 - 1 for thousands of random simple polygons, perimeter, angle sum, symmetry against brute force, moves keep size
// grapher      roots and intercepts of lines, quadratics, sine; meeting points against the algebra; x*y = a
{
  const PV = C.placevalue, FW = C.fractionwall, AT = C.algebratiles, GB = C.geoboard, GR = C.grapher;
  let seed = 12345;
  const rnd = () => ((seed = (seed * 1664525 + 1013904223) % 4294967296) / 4294967296);
  const ri = (a, b) => a + Math.floor(rnd() * (b - a + 1));

  // ----- place value -----
  {
    const SMALL = { zero: 0, one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, ten: 10, eleven: 11, twelve: 12, thirteen: 13, fourteen: 14, fifteen: 15, sixteen: 16, seventeen: 17, eighteen: 18, nineteen: 19, twenty: 20, thirty: 30, forty: 40, fifty: 50, sixty: 60, seventy: 70, eighty: 80, ninety: 90 };
    const SCALE = { in: { crore: 1e7, lakh: 1e5, thousand: 1e3 }, intl: { billion: 1e9, million: 1e6, thousand: 1e3 } };
    const parse = (s, sys) => {
      let total = 0, cur = 0;
      const lastScale = [Infinity];
      for (const w of s.split(/[ -]/)) {
        if (w in SMALL) cur += SMALL[w];
        else if (w === "hundred") cur *= 100;
        else if (w in SCALE[sys]) {
          if (SCALE[sys][w] >= lastScale[0]) return NaN; // scales must go down
          lastScale[0] = SCALE[sys][w];
          total += cur * SCALE[sys][w];
          cur = 0;
        } else return NaN;
      }
      return total + cur;
    };
    const tests = new Set([0, 1, 9, 10, 11, 19, 20, 21, 99, 100, 101, 110, 999, 1000, 1001, 9999, 10000, 99999, 100000, 100001, 999999, 1000000, 9999999, 10000000, 99999999, 999999999]);
    for (let n = 0; n <= 120000; n++) tests.add(n);
    for (let i = 0; i < 60000; i++) tests.add(ri(0, 9999999));
    for (let i = 0; i < 20000; i++) tests.add(ri(0, 99999999));
    let n = 0;
    for (const v of tests) {
      n++;
      for (const sys of ["in", "intl"]) {
        if (sys === "intl" && v > 999999999) continue;
        const w = PV.words(v, sys);
        if (parse(w, sys) !== v) {
          bad(`place value: "${w}" (${sys}) reads back as ${parse(w, sys)}, not ${v}`);
          break;
        }
        const g = PV.group(v, sys);
        if (Number(g.replace(/,/g, "")) !== v) bad(`group(${v},${sys}) = ${g}`);
        const okForm = sys === "in" ? /^(\d{1,3}|\d{1,2}(,\d{2})*,\d{3})$/ : /^\d{1,3}(,\d{3})*$/;
        if (!okForm.test(g)) bad(`group(${v},${sys}) = ${g} is not ${sys === "in" ? "Indian" : "international"} grouping`);
        const terms = PV.expanded(v, sys).split(" + ").map((x) => Number(x.replace(/,/g, "")));
        if (terms.reduce((a, b) => a + b, 0) !== v) bad(`expanded(${v}) = ${PV.expanded(v, sys)}`);
        if (v > 0 && !terms.every((x) => /^[1-9]0*$/.test(String(x)))) bad(`expanded(${v}) has a term that is not digit x place value`);
      }
    }
    const eq = (a, b, m) => a !== b && bad(`${m}: got "${a}", want "${b}"`);
    eq(PV.words(9999999, "in"), "ninety-nine lakh ninety-nine thousand nine hundred ninety-nine", "99,99,999");
    eq(PV.words(9999999, "intl"), "nine million nine hundred ninety-nine thousand nine hundred ninety-nine", "9,999,999");
    eq(PV.words(100000, "in"), "one lakh", "1,00,000");
    eq(PV.words(100000, "intl"), "one hundred thousand", "100,000");
    eq(PV.words(10000000, "in"), "one crore", "1,00,00,000");
    eq(PV.words(10000000, "intl"), "ten million", "10,000,000");
    eq(PV.words(245, "in"), "two hundred forty-five", "245");
    eq(PV.group(9999999, "in"), "99,99,999", "group");
    eq(PV.group(9999999, "intl"), "9,999,999", "group");
    eq(PV.expanded(245, "in"), "200 + 40 + 5", "expanded 245");
    // regrouping never changes the value; break then regroup gives the same blocks back
    for (let k = 0; k < 4000; k++) {
      const cnt = Array.from({ length: 7 }, () => ri(0, 19));
      const v0 = PV.value(cnt);
      for (let i = 0; i < 7; i++) {
        const a = PV.regroup(cnt, i, 19, 7);
        if (a && PV.value(a) !== v0) bad("regroup changed the value");
        const b = PV.brk(cnt, i, 19);
        if (b && PV.value(b) !== v0) bad("break changed the value");
        if (b) {
          const back = PV.regroup(b, i - 1, 19, 7);
          if (back && PV.value(back) !== v0) bad("break then regroup changed the value");
        }
      }
      if (PV.digitsOf(v0 % 10 ** 7, 7).reduce((s, d, i) => s + d * 10 ** i, 0) !== v0 % 10 ** 7) bad("digitsOf does not give the number back");
    }
    console.log(`  place value: ${n} numbers, words in both systems read back, grouping and expanded form, regrouping`);
  }

  // ----- fraction wall and area model -----
  {
    let n = 0;
    for (let d = 1; d <= 12; d++)
      for (let k = 0; k <= d; k++) {
        const got = FW.equalList(k, d).map(([a, b]) => `${a}/${b}`).sort().join(" ");
        const want = [];
        for (let e = 1; e <= 12; e++) for (let j = 0; j <= e; j++) if (j * d === k * e) want.push(`${j}/${e}`);
        if (got !== want.sort().join(" ")) bad(`equalList(${k},${d}) = ${got}, want ${want.join(" ")}`);
        const [sk, sd] = FW.simplify(k, d);
        if (k && (sk * d !== k * sd || FW.gcd(sk, sd) !== 1)) bad(`simplify(${k},${d}) = ${sk}/${sd}`);
        n++;
        for (let d2 = 1; d2 <= 12; d2++)
          for (let k2 = 0; k2 <= d2; k2++) {
            const want2 = Math.sign(k / d - k2 / d2);
            if (FW.compare(k, d, k2, d2) !== (Math.abs(k / d - k2 / d2) < 1e-12 ? 0 : want2)) bad(`compare(${k}/${d}, ${k2}/${d2})`);
          }
      }
    if (!FW.equalList(2, 4).some(([a, b]) => a === 1 && b === 2)) bad("2/4 should equal 1/2 on the wall");
    if (FW.equalList(1, 2).map(([a, b]) => `${a}/${b}`).join(" ") !== "1/2 2/4 3/6 4/8 5/10 6/12") bad("1/2 on the wall: " + FW.equalList(1, 2).map(([a, b]) => `${a}/${b}`).join(" "));
    // the area model: the overlap of a of b columns with c of d rows is a*c of the b*d cells, and equals the product of the fractions
    for (let b = 1; b <= 12; b++)
      for (let d = 1; d <= 12; d++)
        for (let a = 0; a <= b; a++)
          for (let c = 0; c <= d; c++) {
            let cells = 0;
            for (let i = 0; i < b; i++) for (let j = 0; j < d; j++) if (i < a && j < c) cells++;
            const m = FW.mul(a, b, c, d);
            if (cells !== m.n || m.m !== b * d || Math.abs(m.n / m.m - (a / b) * (c / d)) > 1e-12) bad(`area model ${a}/${b} x ${c}/${d}`);
            if (m.s[0] * m.m !== m.n * m.s[1]) bad("area model simplest form");
          }
    const half = FW.mul(1, 2, 1, 3);
    if (half.s.join("/") !== "1/6") bad("1/2 x 1/3 should be 1/6");
    if (FW.mul(2, 3, 3, 4).s.join("/") !== "1/2") bad("2/3 x 3/4 should be 1/2");
    console.log(`  fraction wall: ${n} fractions, equal lists, comparisons, and the area model for all 12 x 12 grids`);
  }

  // ----- algebra tiles -----
  {
    let n = 0;
    for (let a = -12; a <= 12; a++)
      for (let b = -12; b <= 12; b++) {
        const [c2, c1, c0] = AT.expand(a, b);
        for (let x = -6; x <= 6; x++) if ((x + a) * (x + b) !== c2 * x * x + c1 * x + c0) bad(`expand(${a},${b}) at x=${x}`);
        const f = AT.factor(c1, c0);
        if (!f || f[0] !== Math.min(a, b) || f[1] !== Math.max(a, b)) bad(`factor of (x+${a})(x+${b}) = ${f}`);
        n++;
      }
    for (let p = -14; p <= 14; p++)
      for (let q = -40; q <= 40; q++) {
        const D = p * p - 4 * q;
        const sq = D >= 0 ? Math.round(Math.sqrt(D)) : -1;
        const f = AT.factor(p, q);
        const can = D >= 0 && sq * sq === D;
        if (!!f !== can) bad(`factor(${p},${q}): ${f} but discriminant ${D}`);
        if (f && (f[0] + f[1] !== p || f[0] * f[1] !== q)) bad(`factor(${p},${q}) = ${f}`);
      }
    const eq = (a, b, m) => a !== b && bad(`${m}: got "${a}", want "${b}"`);
    eq(AT.polyText(...AT.expand(2, 3)), "x² + 5x + 6", "(x+2)(x+3)");
    eq(AT.polyText(...AT.expand(-2, 3)), "x² + x − 6", "(x-2)(x+3)");
    eq(AT.polyText(1, -5, 6), "x² − 5x + 6", "polyText");
    eq(AT.polyText(2, -1, 0), "2x² − x", "polyText");
    eq(AT.polyText(0, 0, 0), "0", "polyText zero");
    eq(AT.factorText(2, 3), "(x + 2)(x + 3)", "factorText");
    eq(AT.factorText(-1, 4), "(x − 1)(x + 4)", "factorText");
    eq(AT.eqText({ x: 2, u: 1 }, { x: 1, u: 6 }), "2x + 1 = x + 6", "eqText");
    // equations: the preset steps reach the answer, and any "same on both sides" step keeps the solution
    const sol = (L, R) => AT.solveEq(L, R);
    let [L, R] = [{ x: 2, u: 1 }, { x: 1, u: 6 }];
    if (sol(L, R).join("/") !== "5/1") bad("2x+1 = x+6 should give x = 5");
    [L, R] = AT.both(L, R, "x", -1);
    [L, R] = AT.both(L, R, "u", -1);
    if (AT.solved(L, R) !== 5) bad("2x+1 = x+6 should be solved to x = 5 by taking x and 1 from both sides");
    [L, R] = [{ x: 3, u: 2 }, { x: 1, u: 10 }];
    [L, R] = AT.both(L, R, "x", -1);
    [L, R] = AT.both(L, R, "u", -2);
    if (AT.divAll(L, R) !== 2) bad("divAll");
    [L, R] = AT.divideBoth(L, R, 2);
    if (AT.solved(L, R) !== 4) bad("3x+2 = x+10 should be solved to x = 4");
    for (let k = 0; k < 3000; k++) {
      let L1 = { x: ri(-4, 5), u: ri(-9, 9) }, R1 = { x: ri(-4, 5), u: ri(-9, 9) };
      const s0 = sol(L1, R1);
      if (!s0) continue;
      for (let step = 0; step < 6; step++) {
        const kind = rnd() < 0.5 ? "x" : "u";
        [L1, R1] = AT.both(L1, R1, kind, ri(-3, 3));
        const g = AT.divAll(L1, R1);
        if (g > 1 && rnd() < 0.5) [L1, R1] = AT.divideBoth(L1, R1, g);
        const s1 = sol(L1, R1);
        if (!s1 || s1[0] !== s0[0] || s1[1] !== s0[1]) {
          if (s1) bad(`a same-on-both-sides step changed the solution ${s0} -> ${s1}`);
          break;
        }
        const x = s1[0] / s1[1];
        if (Math.abs(AT.evalEq(L1, x) - AT.evalEq(R1, x)) > 1e-9) bad("solution does not satisfy the equation");
      }
    }
    console.log(`  algebra tiles: ${n} products expanded and factored back, every x² + px + q checked against its discriminant, equation steps keep the solution`);
  }

  // ----- geoboard -----
  {
    const NB = GB.N;
    const rect = (w, h) => [[1, 1], [1 + w, 1], [1 + w, 1 + h], [1, 1 + h]];
    for (let w = 1; w <= 7; w++)
      for (let h = 1; h <= 7; h++) {
        const v = rect(w, h);
        if (GB.area(v) !== w * h || Math.abs(GB.perimeter(v) - 2 * (w + h)) > 1e-9) bad(`${w} by ${h} rectangle: area ${GB.area(v)}, perimeter ${GB.perimeter(v)}`);
        if (GB.interior(v) !== (w - 1) * (h - 1) || GB.boundary(v) !== 2 * (w + h)) bad(`${w} by ${h} rectangle: I=${GB.interior(v)} B=${GB.boundary(v)}`);
        if (GB.symmetry(v).length !== (w === h ? 4 : 2)) bad(`${w} by ${h} rectangle has ${GB.symmetry(v).length} lines of symmetry`);
        if (GB.nameOf(v) !== (w === h ? "Square" : "Rectangle")) bad(`${w} by ${h} rectangle is called ${GB.nameOf(v)}`);
        if (!GB.angles(v).every((a) => a.type === "right" && Math.abs(a.deg - 90) < 1e-9)) bad("rectangle angles should be 90");
      }
    const names = [
      [[[1, 1], [4, 1], [1, 5]], "Right scalene triangle", 0],
      [[[1, 1], [4, 1], [1, 4]], "Right isosceles triangle", 1],
      [[[1, 1], [5, 1], [3, 5]], "Isosceles triangle", 1],
      [[[0, 0], [2, 1], [3, 3], [1, 2]], "Rhombus", 2],
      [[[1, 1], [4, 1], [5, 3], [2, 3]], "Parallelogram", 0],
      [[[1, 1], [5, 1], [4, 3], [2, 3]], "Trapezium", 1],
      [[[3, 1], [5, 3], [3, 6], [1, 3]], "Kite", 1],
      [[[3, 1], [5, 3], [3, 5], [1, 3]], "Square", 4],
    ];
    for (const [v, nm, sy] of names) {
      if (GB.nameOf(v) !== nm) bad(`${JSON.stringify(v)} is called ${GB.nameOf(v)}, want ${nm}`);
      if (GB.symmetry(v).length !== sy) bad(`${nm} has ${GB.symmetry(v).length} lines of symmetry, want ${sy}`);
    }
    if (GB.isSimple([[0, 0], [2, 2], [2, 0], [0, 2]])) bad("a bow-tie crosses itself");
    if (GB.isSimple([[0, 0], [3, 0], [6, 0]])) bad("three pegs in a line are not a shape");
    // random simple polygons: shoelace = Pick; angle sum; moves keep the size; symmetry against brute force
    let tested = 0, sym = 0;
    const ek = (p, q) => [p, q].map((s) => s.join(",")).sort().join(">");
    const edgeSet = (v) => new Set(v.map((p, i) => ek(p, v[(i + 1) % v.length])));
    const sameShape = (a, b) => {
      const A = edgeSet(a), B = edgeSet(b);
      return A.size === B.size && [...A].every((e) => B.has(e));
    };
    const same = (a, b) => a.length === b.length && a.every((p, i) => p[0] === b[i][0] && p[1] === b[i][1]);
    for (let it = 0; it < 60000 && tested < 3000; it++) {
      const k = ri(3, 8);
      const v = Array.from({ length: k }, () => [ri(0, NB - 1), ri(0, NB - 1)]);
      if (!GB.isSimple(v)) continue;
      tested++;
      const A = GB.area(v), I = GB.interior(v), B = GB.boundary(v);
      if (A !== I + B / 2 - 1) bad(`Pick fails for ${JSON.stringify(v)}: area ${A}, I=${I}, B=${B}`);
      const trap = Math.abs(v.reduce((s, p, i) => s + (v[(i + 1) % k][0] - p[0]) * (v[(i + 1) % k][1] + p[1]), 0)) / 2;
      if (Math.abs(trap - A) > 1e-9) bad("shoelace and trapezoid formulas disagree");
      const sum = GB.angles(v).reduce((s, a) => s + a.deg, 0);
      if (Math.abs(sum - (k - 2) * 180) > 1e-6) bad(`angle sum ${sum} for ${k} corners`);
      // moves keep size
      const P = GB.perimeter(v);
      const imgs = [GB.reflect(v, "v", 8), GB.reflect(v, "h", 8), GB.reflect(v, "d1", 0), GB.reflect(v, "d2", 0), GB.rotate(v, 90, 8, 8), GB.rotate(v, 180, 9, 7), GB.rotate(v, 270, 8, 8), GB.translate(v, 2, -1)];
      for (const im of imgs) {
        if (!im) continue;
        if (Math.abs(GB.area(im) - A) > 1e-9 || Math.abs(GB.perimeter(im) - P) > 1e-9 || GB.interior(im) !== I || GB.boundary(im) !== B) bad("a move changed the area, perimeter or Pick counts");
      }
      if (!same(GB.reflect(GB.reflect(v, "v", 6), "v", 6), v) || !same(GB.reflect(GB.reflect(v, "d2", 0), "d2", 0), v)) bad("reflecting twice should give the shape back");
      let r = v;
      for (let q = 0; q < 4; q++) r = GB.rotate(r, 90, 8, 8);
      if (!same(r, v)) bad("four quarter turns should give the shape back");
      // symmetry: the axis-aligned and 45 degree axes found by brute force must be exactly those reported
      let brute = 0;
      for (let m = -20; m <= 20; m++) {
        if (sameShape(v.map(([x, y]) => [m - x, y]), v)) brute++;
        if (sameShape(v.map(([x, y]) => [x, m - y]), v)) brute++;
        if (sameShape(v.map(([x, y]) => [y - m, x + m]), v)) brute++;
        if (sameShape(v.map(([x, y]) => [m - y, m - x]), v)) brute++;
      }
      const reported = GB.symmetry(v).filter((a) => ["1,0", "0,1", "1,-1", "1,1"].includes(a.n.join(","))).length;
      if (brute !== reported) bad(`symmetry of ${JSON.stringify(v)}: reported ${reported}, brute force ${brute}`);
      if (reported) sym++;
    }
    if (tested < 2000) bad(`only ${tested} random polygons were simple`);
    console.log(`  geoboard: ${tested} random simple polygons (Pick = shoelace, angle sum, ${sym} with mirror lines checked by brute force, reflections, turns and slides keep the size)`);
  }

  // ----- graph explorer -----
  {
    let n = 0;
    const L = (m, c) => ({ type: "line", p: { m, c } });
    const Q = (a, b, c) => ({ type: "quad", p: { a, b, c } });
    const eq = (a, b, m) => a !== b && bad(`${m}: got "${a}", want "${b}"`);
    eq(GR.eqText(Q(1, -5, 6)), "y = x² − 5x + 6", "quadratic text");
    eq(GR.eqText(L(2, 1)), "y = 2x + 1", "line text");
    eq(GR.eqText(L(-1, 0)), "y = −x", "line text");
    eq(GR.eqText({ type: "recip", p: { a: 6 } }), "y = 6/x", "reciprocal text");
    const r = GR.roots(Q(1, -5, 6)).xs;
    if (r.length !== 2 || Math.abs(r[0] - 2) > 1e-12 || Math.abs(r[1] - 3) > 1e-12) bad("y = x² − 5x + 6 should have roots 2 and 3");
    if (GR.roots(Q(1, -5, 7)).xs.length !== 0) bad("y = x² − 5x + 7 has no roots");
    if (GR.roots(Q(1, -4, 4)).xs.join() !== "2") bad("y = x² − 4x + 4 has the single root 2");
    if (GR.yint(Q(1, -5, 6)) !== 6) bad("y-intercept of y = x² − 5x + 6 is 6");
    const v = GR.vertex(Q(1, -5, 6));
    if (Math.abs(v[0] - 2.5) > 1e-12 || Math.abs(v[1] + 0.25) > 1e-12) bad("vertex of y = x² − 5x + 6 is (2.5, −0.25)");
    for (let r1 = -8; r1 <= 8; r1++)
      for (let r2 = r1; r2 <= 8; r2++)
        for (const a of [1, -1, 2, -3, 0.5]) {
          const g = Q(a, -a * (r1 + r2), a * r1 * r2);
          const xs = GR.roots(g).xs;
          const want = r1 === r2 ? [r1] : [r1, r2];
          if (xs.length !== want.length || xs.some((x, i) => Math.abs(x - want[i]) > 1e-9) || xs.some((x) => Math.abs(GR.f(g, x)) > 1e-9)) bad(`roots of ${GR.eqText(g)}: ${xs}, want ${want}`);
          n++;
        }
    for (let m = -5; m <= 5; m += 0.5)
      for (let c = -10; c <= 10; c += 0.5) {
        const g = L(m, c);
        const rr = GR.roots(g);
        if (m !== 0 && (rr.xs.length !== (Math.abs(c / m) <= 10 ? 1 : 0) || (rr.xs.length && Math.abs(GR.f(g, rr.xs[0])) > 1e-9))) bad(`root of ${GR.eqText(g)}`);
        if (GR.yint(g) !== c) bad("line y-intercept");
        n++;
      }
    for (const b of [0.5, 1, 1.5, 2, 3, 4]) {
      const g = { type: "sine", p: { a: 2, b } };
      const xs = GR.roots(g).xs;
      if (xs.some((x) => Math.abs(GR.f(g, x)) > 1e-9) || Math.abs(GR.period(g) - (2 * Math.PI) / b) > 1e-12) bad(`sine roots/period for b=${b}`);
      if (xs.length < 2 || xs.slice(1).some((x, i) => Math.abs(x - xs[i] - Math.PI / b) > 1e-9)) bad(`sine roots for b=${b} should be pi/b apart`);
    }
    for (const a of [-8, -2, 0.5, 6]) for (const x of [-9, -3, -0.5, 0.25, 1, 2, 5, 9]) if (Math.abs(x * GR.f({ type: "recip", p: { a } }, x) - a) > 1e-9) bad("x * y should equal a for y = a/x");
    // meeting points against the algebra
    const sortedX = (m) => m.pts.map((q) => q.x);
    let m = GR.meets(L(1, 1), L(-1, 3));
    if (m.pts.length !== 1 || Math.abs(m.pts[0].x - 1) > 1e-6 || Math.abs(m.pts[0].y - 2) > 1e-6) bad("y = x + 1 and y = −x + 3 meet at (1, 2)");
    if (GR.meets(L(1, 1), L(1, 3)).pts.length) bad("parallel lines never meet");
    if (!GR.meets(L(2, 1), L(2, 1)).same) bad("identical graphs are the same graph");
    for (let k = 0; k < 400; k++) {
      const l1 = L(ri(-5, 5), ri(-8, 8)), l2 = L(ri(-5, 5), ri(-8, 8));
      const got = sortedX(GR.meets(l1, l2));
      let want = [];
      if (l1.p.m !== l2.p.m) {
        const x = (l2.p.c - l1.p.c) / (l1.p.m - l2.p.m);
        if (Math.abs(x) <= 10) want = [x];
      }
      if (got.length !== want.length || got.some((x, i) => Math.abs(x - want[i]) > 1e-6)) bad(`lines ${GR.eqText(l1)} and ${GR.eqText(l2)} meet at ${got}, want ${want}`);
      const qd = Q(ri(1, 3), ri(-6, 6), ri(-6, 6));
      const a = qd.p.a, b = qd.p.b - l1.p.m, c = qd.p.c - l1.p.c, D = b * b - 4 * a * c;
      const w2 = D < 0 ? [] : D === 0 ? [-b / (2 * a)] : [(-b - Math.sqrt(D)) / (2 * a), (-b + Math.sqrt(D)) / (2 * a)];
      const w2in = w2.filter((x) => Math.abs(x) <= 10);
      const g2 = sortedX(GR.meets(qd, l1));
      if (D !== 0 && (g2.length !== w2in.length || g2.some((x, i) => Math.abs(x - w2in[i]) > 1e-6))) bad(`${GR.eqText(qd)} and ${GR.eqText(l1)} meet at ${g2}, want ${w2in}`);
      n++;
    }
    console.log(`  graph explorer: ${n} graphs and pairs (roots, intercepts, vertex, sine period, x·y = a, meeting points against the algebra)`);
  }

  // ----- translations for the five labs -----
  {
    const i18n = vm.createContext({ currentLang: () => "en", Store: undefined });
    vm.runInContext(fs.readFileSync(path.join(root, "js", "i18n.js"), "utf8").replace(/^const /gm, "var ").replace(/^function /gm, "var __f = function "), i18n);
    vm.runInContext(fs.readFileSync(path.join(root, "js", "labs", "i18n.js"), "utf8"), i18n);
    let n = 0;
    const need = (s, where) => {
      n++;
      for (const l of ["pa", "hi"]) if (!i18n.I18N[l][s]) bad(`${where}: no ${l} translation for "${String(s).slice(0, 70)}"`);
    };
    for (const f of MATHS_LABS) {
      const src = fs.readFileSync(path.join(root, "js", "labs", f + ".js"), "utf8");
      for (const m of src.matchAll(/\bt\("((?:[^"\\\n]|\\.)+)"/g)) need(m[1].replace(/\\"/g, '"'), f + ".js");
    }
    for (const id of MATHS_LABS) {
      const K = C[id];
      (K.STR || []).forEach((s) => need(s, id + " names"));
      need(K.ASSUME, id);
      for (const v of K.INVS) {
        [v.title, v.question, ...v.predict.opts, ...(v.held || []), v.go, v.explain.q, ...v.explain.opts, v.explain.why].forEach((s) => need(s, id + " " + v.id));
        for (const c of v.columns || []) {
          need(c.label, id + " column");
          if (c.unit) need(c.unit, id + " column unit");
        }
        if (v.predict.ans >= v.predict.opts.length || v.explain.ans >= v.explain.opts.length) bad(`${id} ${v.id}: answer index out of range`);
        if (!v.columns.some((c) => c.key === v.vary)) bad(`${id} ${v.id}: the varied column "${v.vary}" is not a column`);
        if (v.graph && !v.columns.some((c) => c.key === v.graph.y)) bad(`${id} ${v.id}: graph column "${v.graph.y}" is not a column`);
        if (v.graph && v.graph.x !== "run" && !v.columns.some((c) => c.key === v.graph.x)) bad(`${id} ${v.id}: graph column "${v.graph.x}" is not a column`);
      }
      const lab = Labs.get(id);
      need(lab.title, id);
      need(lab.objective, id);
    }
    console.log(`  maths studio translations: ${n} strings checked for Punjabi and Hindi`);
  }
}

// ---------- India map explorer (the checks are in scripts/check-india-map.js) ----------
require("./check-india-map.js")({ ctx, vm, fs, path, root, bad, Labs });

// ---------- translations ----------
{
  const i18n = vm.createContext({ currentLang: () => "en", Store: undefined });
  vm.runInContext(fs.readFileSync(path.join(root, "js", "i18n.js"), "utf8").replace(/^const /gm, "var ").replace(/^function /gm, "var __f = function "), i18n);
  vm.runInContext(fs.readFileSync(path.join(root, "js", "labs", "i18n.js"), "utf8"), i18n);
  let n = 0;
  for (const f of ["labs", "circuit", "force", "particles", "cell", "atom", "equation", "foodweb", "body"]) {
    const src = fs.readFileSync(path.join(root, "js", "labs", f + ".js"), "utf8");
    for (const m of src.matchAll(/\bt\("((?:[^"\\\n]|\\.)+)"/g)) {
      n++;
      for (const l of ["pa", "hi"]) if (!i18n.I18N[l][m[1]]) bad(`${f}.js: no ${l} translation for "${m[1].slice(0, 70)}"`);
    }
  }
  // strings that are data, not written as t("…"): investigations, column labels, names
  const data = [];
  const addInv = (K) => {
    data.push(K.ASSUME);
    K.COLS.forEach((c) => data.push(c.label));
    for (const v of K.INVS) data.push(v.title, v.question, ...v.predict.opts, ...v.held, v.go, v.explain.q, ...v.explain.opts, v.explain.why);
  };
  const A = C.atom, E = C.equation;
  addInv(A);
  addInv(E);
  A.EL.forEach((x) => data.push(x.name));
  A.MOLS.forEach((m) => data.push(m.name));
  Object.values(A.NAMES).forEach((x) => data.push(x));
  Object.values(A.ELNAME).forEach((x) => data.push(x));
  E.RX.forEach((r) => data.push(r.name));
  Object.values(E.TYPES).forEach(([a, b]) => data.push(a, b));
  data.push(E.REDOX_NOTE);
  const addB = (K) => {
    data.push(K.ASSUME);
    for (const v of K.INVS) {
      data.push(v.title, v.question, ...v.predict.opts, ...[].concat(v.held), v.go, v.explain.q, ...v.explain.opts, v.explain.why);
      v.columns.forEach((c) => data.push(c.label));
    }
  };
  const FW = C.foodweb, BD = C.body;
  addB(FW);
  addB(BD);
  FW.ORG.forEach((o) => data.push(o.name));
  Object.values(FW.KIND).forEach((x) => data.push(x));
  FW.LEVEL_NAME.forEach((x) => data.push(x));
  Object.values(FW.HAB).forEach((h) => data.push(h.name));
  Object.values(BD.SYS).forEach((x) => data.push(x.name, x.job, x.link));
  BD.ORGANS.forEach((o) => data.push(o.name, o.fn, ...(o.off ? [o.off] : [])));
  data.push(BD.BODY.name, "This organ is not on the route.");
  Object.values(BD.JOURNEYS).forEach((j) => data.push(j.name, j.start, j.next, j.done, ...(j.says || [])));
  for (const labId of ["foodweb", "body"]) {
    const lab = Labs.get(labId);
    data.push(lab.title, lab.objective);
  }
  for (const labId of ["atom", "equation"]) {
    const lab = Labs.get(labId);
    data.push(lab.title, lab.objective);
  }
  for (const d of data) {
    n++;
    for (const l of ["pa", "hi"]) if (!i18n.I18N[l][d]) bad(`data string has no ${l} translation: "${String(d).slice(0, 70)}"`);
  }
  console.log(`  translations: ${n} strings (t("…") and lab data) checked for Punjabi and Hindi`);
}

console.log(problems ? `\n${problems} problem(s)` : "\nvirtual labs OK");
module.exports = { problems };
if (require.main === module) process.exit(problems ? 1 : 0);
