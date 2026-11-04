// Atom and molecule builder (Chemistry). Two modes in one lab.
//
// Atom mode: add or remove protons, neutrons and electrons for elements 1 to 20 and see the element, its mass number, its
// charge (an ion when electrons and protons differ) and its electron shells (2, 8, 8, 2 for these elements).
//   element = number of protons;  mass number = protons + neutrons;  charge = protons - electrons
//   shells fill 2, 8, 8 and then the fourth shell (K, Ca): the 2, 8, 8, 2 rule for the first 20 elements
//   the "usual" neutron number is the mass number of the most common isotope minus the atomic number (Cl-35 here; Cl-35.5 is an average)
//
// Molecule mode: join atoms by bonds. Each atom can make only as many bonds as its valency (H 1, Cl 1, Na 1, O 2, N 3, C 4).
// A bond between a metal (Na) and O or Cl is ionic: shown as an electron moving from Na to the other atom, not as a shared pair.
// Molecular mass uses H 1, C 12, N 14, O 16, Na 23, Cl 35.5 (NaCl is a formula-unit mass: an ionic solid has no separate molecules).
//
// Assumptions: elements 1 to 20 only; the shell model is Bohr's picture, simple and not to scale; molecules are drawn flat as
// diagrams of what is joined to what, not their real shapes; only the bonds in the list of valencies are allowed.

(() => {
  const EL = [
    [1, "H", "Hydrogen", 1], [2, "He", "Helium", 4], [3, "Li", "Lithium", 7], [4, "Be", "Beryllium", 9], [5, "B", "Boron", 11],
    [6, "C", "Carbon", 12], [7, "N", "Nitrogen", 14], [8, "O", "Oxygen", 16], [9, "F", "Fluorine", 19], [10, "Ne", "Neon", 20],
    [11, "Na", "Sodium", 23], [12, "Mg", "Magnesium", 24], [13, "Al", "Aluminium", 27], [14, "Si", "Silicon", 28], [15, "P", "Phosphorus", 31],
    [16, "S", "Sulphur", 32], [17, "Cl", "Chlorine", 35], [18, "Ar", "Argon", 40], [19, "K", "Potassium", 39], [20, "Ca", "Calcium", 40],
  ].map(([z, sym, name, a]) => ({ z, sym, name, a, n: a - z }));
  const MAXP = 20, MAXN = 24, MAXE = 20;
  const NOBLE = { 2: "He", 10: "Ne", 18: "Ar" };

  const SUP = "⁰¹²³⁴⁵⁶⁷⁸⁹";
  const SUB = "₀₁₂₃₄₅₆₇₈₉";
  const sup = (n) => String(n).replace(/\d/g, (d) => SUP[d]);
  const sub = (n) => String(n).replace(/\d/g, (d) => SUB[d]);
  const chargeStr = (q) => (q === 0 ? "" : (Math.abs(q) > 1 ? sup(Math.abs(q)) : "") + (q > 0 ? "⁺" : "⁻"));
  const signed = (q) => (q > 0 ? "+" + q : q < 0 ? "−" + Math.abs(q) : "0");

  // ---------- atoms ----------
  const CAP = [2, 8, 8];
  function shells(e) {
    const out = [];
    let left = e;
    for (let i = 0; left > 0; i++) {
      const k = Math.min(i < 3 ? CAP[i] : Infinity, left);
      out.push(k);
      left -= k;
    }
    return out;
  }
  function info(p, n, e) {
    const el = EL[p - 1] || null;
    const sh = shells(e);
    const q = p - e;
    const v = sh.length ? sh[sh.length - 1] : 0;
    const cap = sh.length && sh.length <= 3 ? CAP[sh.length - 1] : 8;
    const full = e > 0 && v === cap;
    const need = cap - v;
    let kind;
    if (!el) kind = "none";
    else if (e === 0) kind = "bare";
    else if (full) kind = q === 0 ? "noble" : "stable-ion";
    else if (q !== 0) kind = "ion-open";
    else kind = v < need ? "lose" : v > need ? "gain" : "share";
    const A = p + n;
    const sym = el ? el.sym : "";
    return {
      el, p, n, e, A, q, shells: sh, v, cap, full, need, kind,
      sym,
      label: el ? sup(A) + sym + chargeStr(q) : "—",
      name: el ? el.name : "",
      isotope: !!el && n !== el.n,
      commonN: el ? el.n : 0,
      farN: !!el && Math.abs(n - el.n) >= 3,
      noble: NOBLE[e] || null,
    };
  }

  // ---------- molecules ----------
  const VAL = { H: 1, C: 4, N: 3, O: 2, Na: 1, Cl: 1 };
  const MASS = { H: 1, C: 12, N: 14, O: 16, Na: 23, Cl: 35.5 };
  const ELNAME = { H: "Hydrogen", C: "Carbon", N: "Nitrogen", O: "Oxygen", Na: "Sodium", Cl: "Chlorine" };
  const METAL = { Na: true };
  const IONIC_WITH = { O: true, Cl: true };
  const ORDER = ["Na", "C", "N", "H", "O", "Cl"];
  const WORDS = ["", "single", "double", "triple"];

  // The molecules the lab knows by name: atoms, and bonds [i, j, order].
  const MOLS = [
    { f: "H₂", name: "Hydrogen", atoms: ["H", "H"], bonds: [[0, 1, 1]] },
    { f: "O₂", name: "Oxygen", atoms: ["O", "O"], bonds: [[0, 1, 2]] },
    { f: "N₂", name: "Nitrogen", atoms: ["N", "N"], bonds: [[0, 1, 3]] },
    { f: "H₂O", name: "Water", atoms: ["H", "H", "O"], bonds: [[0, 2, 1], [1, 2, 1]] },
    { f: "CO₂", name: "Carbon dioxide", atoms: ["C", "O", "O"], bonds: [[0, 1, 2], [0, 2, 2]] },
    { f: "CH₄", name: "Methane", atoms: ["C", "H", "H", "H", "H"], bonds: [[0, 1, 1], [0, 2, 1], [0, 3, 1], [0, 4, 1]] },
    { f: "NH₃", name: "Ammonia", atoms: ["N", "H", "H", "H"], bonds: [[0, 1, 1], [0, 2, 1], [0, 3, 1]] },
    { f: "HCl", name: "Hydrogen chloride", atoms: ["H", "Cl"], bonds: [[0, 1, 1]] },
    { f: "NaCl", name: "Sodium chloride (common salt)", atoms: ["Na", "Cl"], bonds: [[0, 1, 1]] },
    { f: "C₂H₆", name: "Ethane", atoms: ["C", "C", "H", "H", "H", "H", "H", "H"], bonds: [[0, 1, 1], [0, 2, 1], [0, 3, 1], [0, 4, 1], [1, 5, 1], [1, 6, 1], [1, 7, 1]] },
    { f: "C₂H₄", name: "Ethene", atoms: ["C", "C", "H", "H", "H", "H"], bonds: [[0, 1, 2], [0, 2, 1], [0, 3, 1], [1, 4, 1], [1, 5, 1]] },
  ];
  // Other molecules that can be built (named when the learner makes them).
  const EXTRA_NAMES = { "Cl₂": "Chlorine", "H₂O₂": "Hydrogen peroxide", "C₂H₂": "Ethyne", "CH₄O": "Methanol", "Na₂O": "Sodium oxide" };
  const NAMES = Object.fromEntries([...MOLS.map((m) => [m.f, m.name]), ...Object.entries(EXTRA_NAMES)]);

  const isIonic = (a, b) => !!(METAL[a] || METAL[b]);
  const bondKey = (i, j) => (i < j ? [i, j] : [j, i]);
  const orderOf = (bonds, i, j) => {
    const [a, b] = bondKey(i, j);
    const x = bonds.find((q) => q[0] === a && q[1] === b);
    return x ? x[2] : 0;
  };
  // Bonds made by atom i (ionic bonds count as the electron given or taken).
  const usedBy = (bonds, i) => bonds.reduce((s, q) => s + (q[0] === i || q[1] === i ? q[2] : 0), 0);

  // Can one more bond go between atoms i and j? { ok } or { ok: false, code, el, v }
  function canBond(atoms, bonds, i, j) {
    if (i === j || !atoms[i] || !atoms[j]) return { ok: false, code: "same" };
    const a = atoms[i], b = atoms[j];
    if (METAL[a] && METAL[b]) return { ok: false, code: "metals", el: a };
    if (isIonic(a, b)) {
      const other = METAL[a] ? b : a;
      const metal = METAL[a] ? a : b;
      if (!IONIC_WITH[other]) return { ok: false, code: "ionic-only", el: metal };
      if (orderOf(bonds, i, j)) return { ok: false, code: "ionic-once", el: metal };
    } else if (orderOf(bonds, i, j) >= 3) return { ok: false, code: "triple-max" };
    for (const k of [i, j]) if (usedBy(bonds, k) >= VAL[atoms[k]]) return { ok: false, code: "full", el: atoms[k], v: VAL[atoms[k]] };
    return { ok: true };
  }
  function addBond(atoms, bonds, i, j) {
    const c = canBond(atoms, bonds, i, j);
    if (!c.ok) return { bonds, ...c };
    const [a, b] = bondKey(i, j);
    const next = bonds.filter((q) => !(q[0] === a && q[1] === b));
    next.push([a, b, orderOf(bonds, i, j) + 1]);
    return { bonds: next, ok: true };
  }
  function removeBond(bonds, i, j) {
    const [a, b] = bondKey(i, j);
    const o = orderOf(bonds, i, j);
    if (!o) return { bonds, ok: false, code: "nobond" };
    const next = bonds.filter((q) => !(q[0] === a && q[1] === b));
    if (o > 1) next.push([a, b, o - 1]);
    return { bonds: next, ok: true };
  }
  function removeAtom(atoms, bonds, i) {
    const idx = (k) => (k > i ? k - 1 : k);
    return { atoms: atoms.filter((_, k) => k !== i), bonds: bonds.filter((q) => q[0] !== i && q[1] !== i).map((q) => [idx(q[0]), idx(q[1]), q[2]]) };
  }

  const countAtoms = (atoms) => {
    const c = {};
    atoms.forEach((a) => (c[a] = (c[a] || 0) + 1));
    return c;
  };
  const formulaOf = (atoms) => {
    const c = countAtoms(atoms);
    return ORDER.filter((s) => c[s]).map((s) => s + (c[s] > 1 ? sub(c[s]) : "")).join("");
  };
  const massOf = (atoms) => atoms.reduce((s, a) => s + MASS[a], 0);

  // Everything about the structure that has been built.
  function analyse(atoms, bonds) {
    const n = atoms.length;
    const used = atoms.map((_, i) => usedBy(bonds, i));
    const free = atoms.map((a, i) => VAL[a] - used[i]);
    // connected?
    const seen = new Set(n ? [0] : []);
    for (let again = true; again; ) {
      again = false;
      for (const q of bonds) if (seen.has(q[0]) !== seen.has(q[1])) (seen.add(q[0]), seen.add(q[1]), (again = true));
    }
    const connected = n > 0 && seen.size === n;
    const complete = n > 0 && free.every((f) => f === 0);
    const charges = atoms.map(() => 0);
    let ionicBonds = 0, covalentBonds = 0;
    for (const q of bonds) {
      if (isIonic(atoms[q[0]], atoms[q[1]])) {
        ionicBonds += q[2];
        const m = METAL[atoms[q[0]]] ? q[0] : q[1];
        const o = m === q[0] ? q[1] : q[0];
        charges[m] += q[2];
        charges[o] -= q[2];
      } else covalentBonds += q[2];
    }
    const orders = [0, 0, 0, 0];
    for (const q of bonds) if (!isIonic(atoms[q[0]], atoms[q[1]])) orders[q[2]]++;
    const f = formulaOf(atoms);
    return {
      n, used, free, connected, complete, ok: complete && connected, charges, ionic: ionicBonds > 0, ionicBonds, covalentBonds, orders,
      formula: f, mass: massOf(atoms), name: NAMES[f] || null, counts: countAtoms(atoms),
      freeAtoms: atoms.map((a, i) => (free[i] > 0 ? i : -1)).filter((i) => i >= 0),
    };
  }

  // A flat picture: a small spring layout, deterministic. Returns [{ x, y }] in 0..1.
  function layout(n, bonds) {
    if (!n) return [];
    if (n === 1) return [{ x: 0.5, y: 0.5 }];
    const P = Array.from({ length: n }, (_, i) => ({ x: Math.cos((2 * Math.PI * i) / n + 0.3), y: Math.sin((2 * Math.PI * i) / n + 0.3) }));
    for (let it = 0; it < 300; it++) {
      const F = P.map((p) => ({ x: -0.06 * p.x, y: -0.06 * p.y }));
      for (let i = 0; i < n; i++)
        for (let j = i + 1; j < n; j++) {
          const dx = P[i].x - P[j].x, dy = P[i].y - P[j].y;
          const d = Math.max(0.05, Math.hypot(dx, dy));
          const r = 0.1 / (d * d);
          F[i].x += (r * dx) / d; F[i].y += (r * dy) / d; F[j].x -= (r * dx) / d; F[j].y -= (r * dy) / d;
        }
      for (const q of bonds) {
        const dx = P[q[1]].x - P[q[0]].x, dy = P[q[1]].y - P[q[0]].y;
        const d = Math.max(0.05, Math.hypot(dx, dy));
        const a = (d - 1) * 0.6;
        F[q[0]].x += (a * dx) / d; F[q[0]].y += (a * dy) / d; F[q[1]].x -= (a * dx) / d; F[q[1]].y -= (a * dy) / d;
      }
      P.forEach((p, i) => ((p.x += F[i].x * 0.25), (p.y += F[i].y * 0.25)));
    }
    const xs = P.map((p) => p.x), ys = P.map((p) => p.y);
    const x0 = Math.min(...xs), x1 = Math.max(...xs), y0 = Math.min(...ys), y1 = Math.max(...ys);
    const span = Math.max(x1 - x0, y1 - y0, 0.6);
    const m = 0.14;
    const Q = P.map((p) => ({ x: 0.5 + ((p.x - (x0 + x1) / 2) / span) * (1 - 2 * m), y: 0.5 + ((p.y - (y0 + y1) / 2) / span) * (1 - 2 * m) }));
    return Q;
  }

  const ASSUME = "Elements 1 to 20 only. Electron shells are drawn as simple circles (Bohr's picture), not to scale. Molecules are drawn flat to show what is joined to what, not their real shapes. Only the valencies in the list are allowed, and masses use H 1, C 12, N 14, O 16, Na 23 and Cl 35.5.";
  const ATOM_COLS = [
    { key: "particle", label: "Particle" },
    { key: "p", label: "Protons", d: 0, var: true },
    { key: "n", label: "Neutrons", d: 0, var: true },
    { key: "e", label: "Electrons", d: 0, var: true },
    { key: "charge", label: "Charge", fmt: (v) => signed(v) },
    { key: "mass", label: "Mass number", d: 0 },
  ];
  const MOL_COLS = [
    { key: "formula", label: "Molecule", var: true },
    { key: "name", label: "Name" },
    { key: "atoms", label: "Atoms" },
    { key: "bonds", label: "Bonds" },
    { key: "mass", label: "Molecular mass", unit: "u", fmt: (v) => (v == null ? "—" : Labs.num(v, 1).replace(/\.0$/, "")) },
  ];
  const INVS = [
    {
      id: "electron",
      mode: "atom",
      preset: [11, 12, 11],
      title: "Atom: add or remove an electron",
      question: "A neutral sodium atom (11 protons, 12 neutrons, 11 electrons) loses one electron. What happens to its charge?",
      predict: { opts: ["It stays neutral (0)", "It becomes +1: a positive ion", "It becomes −1: a negative ion"], ans: 1 },
      vary: "e",
      held: ["Protons (11)", "Neutrons (12)"],
      go: "Record a run for the neutral atom. Then change only the number of electrons (remove one, then add one) and record each.",
      explain: {
        q: "Which explanation fits your table?",
        opts: ["Charge = protons − electrons, so one electron fewer gives +1 and one electron more gives −1; the element does not change because the protons are the same", "Removing an electron turns sodium into neon, because the electron number decides the element", "Electrons are heavier than protons, so the mass number changes when an electron is added"],
        ans: 0,
        why: "Each proton has a charge of +1 and each electron −1. With 11 protons and 10 electrons the charge is +1 (Na⁺); with 12 electrons it is −1. The element depends only on the number of protons, and electrons are so light that they do not change the mass number.",
      },
      graph: null,
    },
    {
      id: "proton",
      mode: "atom",
      preset: [6, 6, 6],
      title: "Atom: add a proton",
      question: "A carbon atom (6 protons, 6 neutrons, 6 electrons) gets one more proton and nothing else changes. What do you have?",
      predict: { opts: ["Still carbon, just heavier", "A different element, nitrogen, with a charge of +1", "Carbon-13"], ans: 1 },
      vary: "p",
      held: ["Neutrons (6)", "Electrons (6)"],
      go: "Record a run for carbon. Then change only the number of protons (try 7, then 8) and record each.",
      explain: {
        q: "Which explanation fits your table?",
        opts: ["The number of protons decides which element it is, so every extra proton gives a different element", "The mass number decides which element it is", "The number of electrons decides which element it is"],
        ans: 0,
        why: "The atomic number (the number of protons) is what makes an element: 6 protons is carbon, 7 is nitrogen, 8 is oxygen. Here the electrons stayed the same, so the extra protons also make the atom a positive ion.",
      },
      graph: { x: "p", y: "mass" },
    },
    {
      id: "neutron",
      mode: "atom",
      preset: [17, 18, 17],
      title: "Atom: add a neutron",
      question: "A chlorine atom (17 protons, 18 neutrons, 17 electrons) gains one neutron. What happens?",
      predict: { opts: ["It becomes a different element", "It becomes a +1 ion", "It is still chlorine with the same charge, but its mass number goes up (an isotope)"], ans: 2 },
      vary: "n",
      held: ["Protons (17)", "Electrons (17)"],
      go: "Record a run for chlorine. Then change only the number of neutrons (try 19, then 20) and record each.",
      explain: {
        q: "Which explanation fits your table?",
        opts: ["Neutrons have no charge and do not decide the element, so the element and charge stay the same and only the mass number changes", "A neutron has a charge of +1, so the charge goes up", "More neutrons give a different element, as more protons do"],
        ans: 0,
        why: "A neutron has no charge, so the charge does not change, and the number of protons (17) still says it is chlorine. Atoms of the same element with different numbers of neutrons are isotopes.",
      },
      graph: { x: "n", y: "mass" },
    },
    {
      id: "bonds",
      mode: "mol",
      title: "Molecule: valency and bonds",
      question: "How many hydrogen atoms can join one oxygen atom in a molecule, if every atom must have all its bonds filled?",
      predict: { opts: ["One (HO)", "Two (H₂O)", "Four (H₄O)"], ans: 1 },
      vary: "formula",
      held: ["The rule: each atom makes exactly as many bonds as its valency"],
      go: "Build H₂O and record it. Then build another molecule (for example NH₃ or CH₄) and record that too.",
      explain: {
        q: "Which explanation fits the molecules you built?",
        opts: ["Each atom makes as many bonds as its valency (H 1, O 2, N 3, C 4), so one O holds two H, one N holds three H and one C holds four H", "Every atom makes exactly two bonds", "There is no limit to the number of bonds an atom can make"],
        ans: 0,
        why: "Valency is the number of bonds an atom can make. Hydrogen has 1, oxygen 2, nitrogen 3 and carbon 4, so water is H₂O, ammonia is NH₃ and methane is CH₄. A molecule is complete when every atom has made all its bonds.",
      },
      graph: { x: "run", y: "mass" },
    },
  ];

  Labs.calc.atom = { INVS, ASSUME, COLS: [...ATOM_COLS, ...MOL_COLS], EL, MAXP, MAXN, MAXE, shells, info, VAL, MASS, MOLS, NAMES, ELNAME, canBond, addBond, removeBond, removeAtom, analyse, formulaOf, massOf, layout, sub, sup, chargeStr };

  const pct = (x) => Math.round(x * 1000) / 10;
  const pt = (x) => Math.round(x * 10) / 10;
  const SHELL_R = [46, 76, 106, 134];

  function mount(el, api) {
    const S = { mode: "atom", p: 11, n: 12, e: 11, atoms: [], bonds: [], sel: null, remove: false, target: "", msg: "", bad: false };
    let flow;
    const elName = (sym) => t(ELNAME[sym]);
    const W = { p: [t("Protons"), t("Remove a proton"), t("Add a proton")], n: [t("Neutrons"), t("Remove a neutron"), t("Add a neutron")], e: [t("Electrons"), t("Remove an electron"), t("Add an electron")] };

    const stage = () => `<div class="at">
      <div class="vl-quick" role="group" aria-label="${esc(t("Mode"))}">
        <button type="button" class="btn" data-mode="atom" aria-pressed="true">${t("Atom")}</button>
        <button type="button" class="btn" data-mode="mol" aria-pressed="false">${t("Molecule")}</button></div>
      <div data-atompanel>
        <div class="vl-ctrl"><label for="at-start">${t("Start from a neutral atom of")}</label>
          <select id="at-start" data-start>${EL.map((x) => `<option value="${x.z}">${x.z} · ${x.sym} · ${esc(t(x.name))}</option>`).join("")}</select></div>
        <div class="at-steps">${["p", "n", "e"]
          .map(
            (k) => `<div class="at-step"><span class="at-name">${W[k][0]}</span>
          <button type="button" class="btn at-btn" data-step="${k}" data-d="-1" aria-label="${esc(W[k][1])}">−</button>
          <output class="at-val" data-val="${k}" aria-live="polite"></output>
          <button type="button" class="btn at-btn" data-step="${k}" data-d="1" aria-label="${esc(W[k][2])}">+</button></div>`
          )
          .join("")}</div>
        <div class="at-wrap"><div class="sim-stage" data-atsvg></div>
          <div class="at-key small" aria-hidden="true"><span><i class="at-d at-p"></i> ${t("proton (+)")}</span><span><i class="at-d at-n"></i> ${t("neutron (0)")}</span><span><i class="at-d at-e"></i> ${t("electron (−)")}</span></div></div>
        <p class="at-sym" data-sym></p>
        <p class="vl-warn" data-atmsg role="status"></p>
        <p class="vl-note" data-notes></p>
      </div>
      <div data-molpanel hidden>
        <div class="vl-ctrl"><label for="at-target">${t("Molecule to build")}</label>
          <select id="at-target" data-target><option value="">${t("Build any molecule")}</option>${MOLS.map((m) => `<option value="${m.f}">${m.f} · ${esc(t(m.name))}</option>`).join("")}</select></div>
        <p class="small muted" data-needs></p>
        <div class="vl-parts" role="group" aria-label="${esc(t("Add an atom"))}">${Object.keys(VAL).map((s) => `<button type="button" class="vl-part" data-addatom="${s}"><span>${s}</span><span class="vl-marks" style="display:block;color:var(--muted)">${t("valency")} ${VAL[s]}</span></button>`).join("")}</div>
        <div class="at-mol" data-mol></div>
        <p class="small muted" data-molhint></p>
        <p class="vl-warn" data-molmsg role="status"></p>
        <div class="sim-btns"><button type="button" class="btn" data-bondmode aria-pressed="false"></button>
          <button type="button" class="btn" data-delatom>${t("Remove selected atom")}</button>
          <button type="button" class="btn" data-clearmol>${icon("reset")} ${t("Clear")}</button></div>
      </div>
      <div class="sim-btns"><button type="button" class="btn primary" data-vl-run data-record>${icon("check")} ${t("Record this run")}</button></div></div>`;

    // ----- atom drawing -----
    function atomSVG(I) {
      let s = "";
      I.shells.forEach((c, k) => {
        s += `<circle class="at-shell" cx="160" cy="160" r="${SHELL_R[k]}"/>`;
        for (let j = 0; j < c; j++) {
          const a = (2 * Math.PI * j) / c - Math.PI / 2;
          s += `<circle class="at-e" cx="${pt(160 + SHELL_R[k] * Math.cos(a))}" cy="${pt(160 + SHELL_R[k] * Math.sin(a))}" r="6.5"/>`;
        }
      });
      // nucleus: protons and neutrons mixed, placed by index on a spiral so adding one does not move the others
      const seq = [];
      for (let i = 0, a = 0, b = 0; a < I.p || b < I.n; i++) (i % 2 === 0 && a < I.p) || b >= I.n ? (seq.push("p"), a++) : (seq.push("n"), b++);
      seq.forEach((k, i) => {
        const r = 5 * Math.sqrt(i + 0.5), a = i * 2.39996;
        s += `<circle class="at-${k === "p" ? "p" : "n"}" cx="${pt(160 + r * Math.cos(a))}" cy="${pt(160 + r * Math.sin(a))}" r="5.2"/>`;
      });
      const label = I.el ? t("{x}: {p} protons, {n} neutrons, {e} electrons in shells {s}", { x: `${t(I.name)} ${I.label}`, p: I.p, n: I.n, e: I.e, s: I.shells.join(", ") || "0" }) : t("An empty atom: no protons yet");
      return `<svg viewBox="0 0 320 320" class="at-svg" role="img" aria-label="${esc(label)}">${s}</svg>`;
    }

    function atomNotes(I) {
      const out = [];
      const o = {
        none: () => t("An atom needs at least one proton. Add a proton to make an element."),
        bare: () => t("No electrons: a bare nucleus, not a stable atom."),
        noble: () => t("The outer shell is full, so this is a very stable atom that hardly reacts (a noble gas)."),
        "stable-ion": () => t("This ion has a full outer shell, the same electron arrangement as {g}. Full outer shells are stable.", { g: I.noble ? t(EL.find((x) => x.sym === I.noble).name) : "" }),
        "ion-open": () => t("This ion's outer shell is not full, so it is not a common stable ion."),
        lose: () => t("Outer shell: {v} of {c} electrons. It tends to lose {v} and become a positive ion with a full shell below.", { v: I.v, c: I.cap }),
        gain: () => t("Outer shell: {v} of {c} electrons. It tends to gain {k} and become a negative ion with a full outer shell.", { v: I.v, c: I.cap, k: I.need }),
        share: () => t("Outer shell: {v} of {c} electrons. It tends to share electrons with other atoms (covalent bonds).", { v: I.v, c: I.cap }),
      }[I.kind];
      out.push(o());
      if (I.isotope) out.push(t("A usual {x} atom has {m} neutrons. This one has {n}: an isotope. Same chemistry, different mass.", { x: t(I.name), m: I.commonN, n: I.n }));
      if (I.farN) out.push(t("This is far from the usual number of neutrons, so the nucleus would probably be unstable (radioactive)."));
      return out.join(" ");
    }

    function refreshAtom() {
      const I = info(S.p, S.n, S.e);
      el.querySelector("[data-atsvg]").innerHTML = atomSVG(I);
      ["p", "n", "e"].forEach((k) => {
        el.querySelector(`[data-val="${k}"]`).textContent = S[k];
        const max = k === "p" ? MAXP : k === "n" ? MAXN : MAXE;
        el.querySelector(`[data-step="${k}"][data-d="1"]`).disabled = S[k] >= max;
        el.querySelector(`[data-step="${k}"][data-d="-1"]`).disabled = S[k] <= 0;
      });
      el.querySelector("[data-start]").value = I.el ? String(I.p) : el.querySelector("[data-start]").value;
      el.querySelector("[data-sym]").innerHTML = I.el ? `<span class="at-big">${esc(I.label)}</span> <span class="muted">${esc(t(I.name))}${I.q ? " · " + esc(I.q > 0 ? t("positive ion") : t("negative ion")) : ""}</span>` : `<span class="muted">${esc(t("No element yet"))}</span>`;
      el.querySelector("[data-notes]").textContent = atomNotes(I);
      const q = I.q;
      const rows = [
        [t("Element"), I.el ? `${t(I.name)} (${I.sym})` : "—"],
        [t("Atomic number (protons)"), String(I.p)],
        [t("Mass number (protons + neutrons)"), String(I.A)],
        [t("Charge"), `${signed(q)} · ${q === 0 ? t("neutral atom") : q > 0 ? t("positive ion") : t("negative ion")}`],
        [t("Electrons in shells"), I.shells.length ? I.shells.join(", ") : "0"],
        [t("Outer shell"), I.shells.length ? t("{v} of {c} electrons", { v: I.v, c: I.cap }) : "—"],
      ];
      flow.live(rows, I.el ? `${t(I.name)} ${I.label}. ${t("Charge")} ${signed(q)}. ${t("Electrons in shells")} ${I.shells.join(", ")}.` : t("No element yet"));
    }

    // ----- molecule drawing -----
    const flatMsg = (c) =>
      ({
        same: () => t("Choose two different atoms."),
        metals: () => t("Two metal atoms do not bond like this in this lab."),
        "ionic-only": () => t("Sodium joins only to oxygen or chlorine here."),
        "ionic-once": () => t("An ionic bond is one electron moving across, so they are already joined."),
        "triple-max": () => t("Three bonds is the most two atoms can share."),
        full: () => t("{x} has valency {v}: it can make only {v} bond(s), and it already makes {v}. Remove a bond first.", { x: elName(c.el), v: c.v }),
        nobond: () => t("These two atoms are not bonded."),
      }[c.code]());

    function refreshMol() {
      const A = analyse(S.atoms, S.bonds);
      const pos = layout(S.atoms.length, S.bonds);
      let lines = "";
      for (const q of S.bonds) {
        const a = pos[q[0]], b = pos[q[1]];
        const x1 = a.x * 320, y1 = a.y * 260, x2 = b.x * 320, y2 = b.y * 260;
        if (isIonic(S.atoms[q[0]], S.atoms[q[1]])) {
          const m = METAL[S.atoms[q[0]]] ? [x1, y1, x2, y2] : [x2, y2, x1, y1];
          lines += `<line class="at-ion" x1="${pt(m[0])}" y1="${pt(m[1])}" x2="${pt(m[2])}" y2="${pt(m[3])}" marker-end="url(#at-arrow)"/><text class="small" x="${pt((x1 + x2) / 2)}" y="${pt((y1 + y2) / 2 - 8)}" text-anchor="middle">e⁻</text>`;
        } else {
          const d = Math.hypot(x2 - x1, y2 - y1) || 1, nx = -(y2 - y1) / d, ny = (x2 - x1) / d;
          for (let k = 0; k < q[2]; k++) {
            const off = (k - (q[2] - 1) / 2) * 7;
            lines += `<line class="at-bond" x1="${pt(x1 + nx * off)}" y1="${pt(y1 + ny * off)}" x2="${pt(x2 + nx * off)}" y2="${pt(y2 + ny * off)}"/>`;
          }
        }
      }
      const btns = S.atoms
        .map((s, i) => {
          const ch = A.charges[i];
          const pips = "●".repeat(A.used[i]) + "○".repeat(Math.max(0, A.free[i]));
          const nm = `${elName(s)}${ch ? " " + signed(ch) : ""}`;
          return `<button type="button" class="at-atom ${S.sel === i ? "sel" : ""} ${A.free[i] > 0 ? "open" : "done"}" data-atom="${i}" style="left:${pct(pos[i].x)}%;top:${pct(pos[i].y)}%" aria-pressed="${S.sel === i}"
            aria-label="${esc(t("{x} atom, valency {v}: {u} bond(s) made, {f} free", { x: nm, v: VAL[s], u: A.used[i], f: A.free[i] }))}"><span class="at-sy">${s}${ch ? `<sup>${esc(chargeStr(ch))}</sup>` : ""}</span><span class="at-pips" aria-hidden="true">${pips}</span></button>`;
        })
        .join("");
      el.querySelector("[data-mol]").innerHTML = `<svg viewBox="0 0 320 260" class="at-molsvg" aria-hidden="true"><defs><marker id="at-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" class="at-arrowhead"/></marker></defs>${lines}</svg>${btns}${S.atoms.length ? "" : `<p class="at-empty small muted">${esc(t("Add atoms with the buttons above."))}</p>`}`;
      const rm = el.querySelector("[data-bondmode]");
      rm.setAttribute("aria-pressed", S.remove);
      rm.textContent = S.remove ? t("Removing bonds: tap two atoms") : t("Adding bonds: tap two atoms");
      el.querySelector("[data-delatom]").disabled = S.sel == null;
      el.querySelector("[data-molhint]").textContent = S.sel != null ? (S.remove ? t("Now tap the atom to remove a bond with {y}.", { y: elName(S.atoms[S.sel]) }) : t("Now tap the atom to make a bond with {y}.", { y: elName(S.atoms[S.sel]) })) : S.remove ? t("Tap one atom, then another, to remove a bond between them.") : t("Tap one atom, then another, to make a bond between them. Dots show used (filled) and free (empty) bonds.");
      const msg = el.querySelector("[data-molmsg]");
      msg.textContent = S.msg;
      msg.classList.toggle("is-bad", S.bad);
      const tg = MOLS.find((m) => m.f === S.target);
      const need = tg ? Object.entries(countAtoms(tg.atoms)).map(([s, c]) => `${c} ${s}`).join(" + ") : "";
      el.querySelector("[data-needs]").innerHTML = tg ? `${esc(t("You need: {x}. Then join them with bonds.", { x: need }))} <button type="button" class="btn" data-addneeded style="min-height:44px">${esc(t("Add these atoms"))}</button>` : esc(t("Add atoms and join them. Each atom can make only as many bonds as its valency."));
      // readouts
      let status;
      if (!A.n) status = t("Add atoms to start.");
      else if (!A.connected && A.n > 1 && A.complete) status = t("The atoms are not all joined into one molecule.");
      else if (!A.complete) status = t("Not finished: {x}", { x: A.freeAtoms.map((i) => t("{x} still has {f} free bond(s)", { x: S.atoms[i], f: A.free[i] })).filter((v, i, a) => a.indexOf(v) === i).join("; ") });
      else if (!A.connected) status = t("The atoms are not all joined into one molecule.");
      else status = tg && tg.f !== A.formula ? t("Complete, but this is {x}, not {y}.", { x: A.formula, y: tg.f }) : t("Complete: every atom has all its bonds.");
      const kind = A.ionic ? t("Ionic (electron transfer)") : A.covalentBonds ? t("Covalent (shared electrons)") : "—";
      const rows = [
        [t("Formula"), A.n ? A.formula : "—"],
        [t("Name"), A.ok && A.name ? t(A.name) : A.ok ? t("a valid molecule") : "—"],
        [A.ionic ? t("Formula-unit mass") : t("Molecular mass"), A.n ? `${Labs.num(A.mass, 1).replace(/\.0$/, "")} u` : "—"],
        [t("Bonds"), A.n ? bondText(A) || "—" : "—"],
        [t("Type of bond"), A.n && (A.ionicBonds || A.covalentBonds) ? kind : "—"],
        [t("Check"), status],
      ];
      flow.live(rows, A.n ? `${A.formula}. ${status}` : status);
      return A;
    }
    const bondText = (A) => {
      const parts = [1, 2, 3].filter((o) => A.orders[o]).map((o) => `${A.orders[o]} ${[ "", t("single"), t("double"), t("triple")][o]}`);
      if (A.ionicBonds) parts.push(`${A.ionicBonds} ${t("ionic")}`);
      return parts.join(", ");
    };
    const atomsText = (A) => ORDER.filter((s) => A.counts[s]).map((s) => `${A.counts[s]} ${s}`).join(" + ");

    function refresh() {
      el.querySelectorAll("[data-mode]").forEach((b) => b.setAttribute("aria-pressed", b.dataset.mode === S.mode));
      el.querySelector("[data-atompanel]").hidden = S.mode !== "atom";
      el.querySelector("[data-molpanel]").hidden = S.mode !== "mol";
      if (S.mode === "atom") refreshAtom();
      else refreshMol();
    }

    // ----- actions -----
    function stepAtom(k, d) {
      const max = k === "p" ? MAXP : k === "n" ? MAXN : MAXE;
      const v = Math.max(0, Math.min(max, S[k] + d));
      const m = el.querySelector("[data-atmsg]");
      if (v === S[k]) {
        m.textContent = d > 0 ? t("This lab covers up to {n} of each particle.", { n: max }) : t("There are none left to remove.");
        return;
      }
      S[k] = v;
      const I = info(S.p, S.n, S.e);
      m.textContent = (d > 0 ? { p: t("Added a proton."), n: t("Added a neutron."), e: t("Added an electron.") } : { p: t("Removed a proton."), n: t("Removed a neutron."), e: t("Removed an electron.") })[k] + " " + (I.el ? `${t(I.name)} ${I.label}, ${t("Charge")} ${signed(I.q)}.` : "");
      refreshAtom();
    }
    function startFrom(z) {
      const x = EL[z - 1];
      S.p = x.z; S.n = x.n; S.e = x.z;
      el.querySelector("[data-atmsg]").textContent = t("Set to a neutral {x} atom.", { x: t(x.name) });
      refreshAtom();
    }

    function setBondMsg(m, bad) {
      S.msg = m;
      S.bad = !!bad;
    }
    function tapAtom(i) {
      if (S.sel == null) S.sel = i;
      else if (S.sel === i) S.sel = null;
      else {
        const j = S.sel;
        S.sel = null;
        if (S.remove) {
          const r = removeBond(S.bonds, i, j);
          if (r.ok) (S.bonds = r.bonds, setBondMsg(t("Removed a bond between {a} and {b}.", { a: S.atoms[i], b: S.atoms[j] })));
          else setBondMsg(flatMsg(r), true);
        } else {
          const r = addBond(S.atoms, S.bonds, i, j);
          if (r.ok) {
            S.bonds = r.bonds;
            const ion = isIonic(S.atoms[i], S.atoms[j]);
            setBondMsg(ion ? t("Ionic bond: an electron moves from sodium to the other atom, making Na⁺ and a negative ion.") : t("Made a bond between {a} and {b}.", { a: S.atoms[i], b: S.atoms[j] }));
          } else setBondMsg(flatMsg(r), true);
        }
      }
      refreshMol();
      const b = el.querySelector(`[data-atom="${S.sel != null ? S.sel : i}"]`);
      b && b.focus({ preventScroll: true });
    }

    function record() {
      if (S.mode === "atom") {
        const I = info(S.p, S.n, S.e);
        if (!I.el) {
          el.querySelector("[data-atmsg]").textContent = t("An atom needs at least one proton. Add a proton to make an element.");
          return;
        }
        flow.addRun({ particle: I.label, p: I.p, n: I.n, e: I.e, charge: I.q, mass: I.A });
      } else {
        const A = analyse(S.atoms, S.bonds);
        if (!A.ok) {
          setBondMsg(A.n ? (A.complete ? t("The atoms are not all joined into one molecule.") : t("Not finished: {x}", { x: A.freeAtoms.map((i) => t("{x} still has {f} free bond(s)", { x: S.atoms[i], f: A.free[i] })).filter((v, i, a) => a.indexOf(v) === i).join("; ") })) : t("Add atoms to start."), true);
          refreshMol();
          return;
        }
        flow.addRun({ formula: A.formula, name: A.name ? t(A.name) : t("a valid molecule"), atoms: atomsText(A), bonds: bondText(A), mass: A.mass });
      }
    }

    const cfg = {
      assumptions: ASSUME,
      get columns() {
        return !flow || flow.inv.mode === "atom" ? ATOM_COLS : MOL_COLS;
      },
      investigations: INVS,
      extra: () => (S.mode === "atom" ? { mode: "atom", particle: info(S.p, S.n, S.e).label } : { mode: "molecule", formula: analyse(S.atoms, S.bonds).formula, bonds: S.bonds.map((q) => q.join("-")) }),
      mountStage(slot, F) {
        flow = F;
        slot.innerHTML = stage();
        slot.addEventListener("click", (e) => {
          const md = e.target.closest("[data-mode]");
          if (md) {
            const i = cfg.investigations.findIndex((v) => v.mode === md.dataset.mode);
            if (S.mode !== md.dataset.mode) el.querySelector(`[data-inv="${i}"]`).click();
            return;
          }
          const st = e.target.closest("[data-step]");
          if (st) return stepAtom(st.dataset.step, Number(st.dataset.d));
          const ad = e.target.closest("[data-addatom]");
          if (ad) {
            if (S.atoms.length >= 10) {
              setBondMsg(t("This board holds up to 10 atoms."), true);
              return refreshMol();
            }
            S.atoms.push(ad.dataset.addatom);
            setBondMsg(t("Added {x}.", { x: elName(ad.dataset.addatom) }), false);
            return refreshMol();
          }
          const at = e.target.closest("[data-atom]");
          if (at) return tapAtom(Number(at.dataset.atom));
          if (e.target.closest("[data-addneeded]")) {
            const tg = MOLS.find((m) => m.f === S.target);
            S.atoms = [...tg.atoms];
            S.bonds = [];
            S.sel = null;
            setBondMsg(t("Atoms added. Now join them with bonds."), false);
            return refreshMol();
          }
          if (e.target.closest("[data-bondmode]")) {
            S.remove = !S.remove;
            S.sel = null;
            return refreshMol();
          }
          if (e.target.closest("[data-delatom]")) {
            const r = removeAtom(S.atoms, S.bonds, S.sel);
            S.atoms = r.atoms; S.bonds = r.bonds; S.sel = null;
            setBondMsg(t("Atom removed."), false);
            return refreshMol();
          }
          if (e.target.closest("[data-clearmol]")) {
            S.atoms = []; S.bonds = []; S.sel = null;
            setBondMsg("", false);
            return refreshMol();
          }
          if (e.target.closest("[data-record]")) record();
        });
        slot.addEventListener("change", (e) => {
          if (e.target.matches("[data-start]")) startFrom(Number(e.target.value));
          else if (e.target.matches("[data-target]")) {
            S.target = e.target.value;
            refreshMol();
          }
        });
      },
      onInvestigation(inv) {
        S.mode = inv.mode;
        if (inv.mode === "atom") {
          [S.p, S.n, S.e] = inv.preset;
          el.querySelector("[data-atmsg]").textContent = "";
        } else {
          S.atoms = []; S.bonds = []; S.sel = null; S.remove = false; S.target = "";
          el.querySelector("[data-target]").value = "";
          setBondMsg("", false);
        }
        refresh();
      },
    };
    flow = Labs.flow(el, api, cfg);
  }

  Labs.register("atom", {
    title: "Atom and molecule builder",
    area: "chemistry",
    icon: "formula",
    objective: "Build atoms from protons, neutrons and electrons and see the element, mass number, charge and electron shells. Then join atoms into molecules by their valencies and see the formula and the molecular mass.",
    chapters: [
      { cls: 9, subject: "science", chapter: "journey-inside-the-atom" },
      { cls: 9, subject: "science", chapter: "atomic-foundations-of-matter" },
      { cls: 9, subject: "sciencepb", chapter: "atoms-and-molecules" },
      { cls: 9, subject: "sciencepb", chapter: "structure-of-the-atom" },
      { cls: 10, subject: "science", chapter: "carbon-and-its-compounds" },
      { cls: 11, subject: "chemistry", chapter: "structure-of-atom" },
      { cls: 11, subject: "chemistry", chapter: "chemical-bonding-and-molecular-structure" },
    ],
    mount,
  });
})();
