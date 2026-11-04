// Equation balancer (Chemistry): choose a school reaction and change the number in front of each formula until the atoms of every
// element are the same on both sides. A table counts the atoms of each element on each side (with an atom token for each atom),
// says whether the equation is balanced, and, once it is, names the type of reaction and explains it.
//
//   balanced  =  for every element, (atoms on the left) = (atoms on the right)   [mass is conserved: atoms are not created or destroyed]
//   smallest  =  the numbers in front have no common factor (gcd = 1): 2 H2 + O2 -> 2 H2O, not 4 H2 + 2 O2 -> 4 H2O
//   Only the numbers in front change; the small numbers inside a formula say which substance it is and are never changed.
//
// Assumptions: reactions are written the way school books write them (no states of matter, no conditions such as heat or a
// catalyst on the arrow); each equation has exactly one smallest whole-number balance, which scripts/check-labs.js checks.

(() => {
  // Formulas are written in plain ASCII here (H2O, Pb(NO3)2) and shown with subscripts. l: reactants, r: products, c: smallest whole numbers.
  // type: combination | decomposition | displacement | double | combustion | redox;  redox: also an oxidation-reduction reaction.
  // level: 1 easy, 2 medium, 3 harder.
  const RX = [
    { id: "h2-o2", name: "Hydrogen burns in oxygen to make water", l: ["H2", "O2"], r: ["H2O"], c: [2, 1, 2], type: "combination", redox: true, level: 1 },
    { id: "mg-o2", name: "Magnesium burns in air", l: ["Mg", "O2"], r: ["MgO"], c: [2, 1, 2], type: "combination", redox: true, level: 1 },
    { id: "c-o2", name: "Carbon burns in oxygen", l: ["C", "O2"], r: ["CO2"], c: [1, 1, 1], type: "combustion", redox: true, level: 1 },
    { id: "cao-h2o", name: "Quicklime reacts with water (slaking)", l: ["CaO", "H2O"], r: ["Ca(OH)2"], c: [1, 1, 1], type: "combination", redox: false, level: 1 },
    { id: "caco3", name: "Limestone breaks down on heating", l: ["CaCO3"], r: ["CaO", "CO2"], c: [1, 1, 1], type: "decomposition", redox: false, level: 1 },
    { id: "h2o", name: "Water is split by electricity", l: ["H2O"], r: ["H2", "O2"], c: [2, 2, 1], type: "decomposition", redox: true, level: 1 },
    { id: "zn-hcl", name: "Zinc reacts with hydrochloric acid", l: ["Zn", "HCl"], r: ["ZnCl2", "H2"], c: [1, 2, 1, 1], type: "displacement", redox: true, level: 1 },
    { id: "mg-hcl", name: "Magnesium reacts with hydrochloric acid", l: ["Mg", "HCl"], r: ["MgCl2", "H2"], c: [1, 2, 1, 1], type: "displacement", redox: true, level: 1 },
    { id: "fe-cuso4", name: "Iron displaces copper from copper sulphate", l: ["Fe", "CuSO4"], r: ["FeSO4", "Cu"], c: [1, 1, 1, 1], type: "displacement", redox: true, level: 1 },
    { id: "zn-cuso4", name: "Zinc displaces copper from copper sulphate", l: ["Zn", "CuSO4"], r: ["ZnSO4", "Cu"], c: [1, 1, 1, 1], type: "displacement", redox: true, level: 1 },
    { id: "agno3-nacl", name: "Silver nitrate and sodium chloride make a white precipitate", l: ["AgNO3", "NaCl"], r: ["AgCl", "NaNO3"], c: [1, 1, 1, 1], type: "double", redox: false, level: 1 },
    { id: "naoh-hcl", name: "An acid and a base neutralise each other", l: ["NaOH", "HCl"], r: ["NaCl", "H2O"], c: [1, 1, 1, 1], type: "double", redox: false, level: 1 },
    { id: "cuo-h2", name: "Hydrogen takes the oxygen from hot copper oxide", l: ["CuO", "H2"], r: ["Cu", "H2O"], c: [1, 1, 1, 1], type: "redox", redox: true, level: 1 },
    { id: "ch4", name: "Methane burns in oxygen", l: ["CH4", "O2"], r: ["CO2", "H2O"], c: [1, 2, 1, 2], type: "combustion", redox: true, level: 2 },
    { id: "na-h2o", name: "Sodium reacts with water", l: ["Na", "H2O"], r: ["NaOH", "H2"], c: [2, 2, 2, 1], type: "displacement", redox: true, level: 2 },
    { id: "al-o2", name: "Aluminium burns in oxygen", l: ["Al", "O2"], r: ["Al2O3"], c: [4, 3, 2], type: "combination", redox: true, level: 2 },
    { id: "fe-o2", name: "Iron rusts in oxygen", l: ["Fe", "O2"], r: ["Fe2O3"], c: [4, 3, 2], type: "combination", redox: true, level: 2 },
    { id: "n2-h2", name: "Ammonia is made from nitrogen and hydrogen", l: ["N2", "H2"], r: ["NH3"], c: [1, 3, 2], type: "combination", redox: true, level: 2 },
    { id: "so2-o2", name: "Sulphur dioxide turns into sulphur trioxide", l: ["SO2", "O2"], r: ["SO3"], c: [2, 1, 2], type: "combination", redox: true, level: 2 },
    { id: "kclo3", name: "Potassium chlorate breaks down on heating", l: ["KClO3"], r: ["KCl", "O2"], c: [2, 2, 3], type: "decomposition", redox: true, level: 2 },
    { id: "h2o2", name: "Hydrogen peroxide breaks down", l: ["H2O2"], r: ["H2O", "O2"], c: [2, 2, 1], type: "decomposition", redox: true, level: 2 },
    { id: "nahco3", name: "Baking soda breaks down on heating", l: ["NaHCO3"], r: ["Na2CO3", "H2O", "CO2"], c: [2, 1, 1, 1], type: "decomposition", redox: false, level: 2 },
    { id: "al-hcl", name: "Aluminium reacts with hydrochloric acid", l: ["Al", "HCl"], r: ["AlCl3", "H2"], c: [2, 6, 2, 3], type: "displacement", redox: true, level: 2 },
    { id: "bacl2-na2so4", name: "Barium chloride and sodium sulphate make a white precipitate", l: ["BaCl2", "Na2SO4"], r: ["BaSO4", "NaCl"], c: [1, 1, 1, 2], type: "double", redox: false, level: 2 },
    { id: "caoh2-hcl", name: "Lime water neutralises hydrochloric acid", l: ["Ca(OH)2", "HCl"], r: ["CaCl2", "H2O"], c: [1, 2, 1, 2], type: "double", redox: false, level: 2 },
    { id: "caco3-hcl", name: "Marble reacts with hydrochloric acid", l: ["CaCO3", "HCl"], r: ["CaCl2", "H2O", "CO2"], c: [1, 2, 1, 1, 1], type: "double", redox: false, level: 2 },
    { id: "fecl3-naoh", name: "Iron(III) chloride and sodium hydroxide make a brown precipitate", l: ["FeCl3", "NaOH"], r: ["Fe(OH)3", "NaCl"], c: [1, 3, 1, 3], type: "double", redox: false, level: 2 },
    { id: "fe-h2o", name: "Hot iron reacts with steam", l: ["Fe", "H2O"], r: ["Fe3O4", "H2"], c: [3, 4, 1, 4], type: "displacement", redox: true, level: 3 },
    { id: "c3h8", name: "Propane burns in oxygen", l: ["C3H8", "O2"], r: ["CO2", "H2O"], c: [1, 5, 3, 4], type: "combustion", redox: true, level: 3 },
    { id: "c4h10", name: "Butane burns in oxygen", l: ["C4H10", "O2"], r: ["CO2", "H2O"], c: [2, 13, 8, 10], type: "combustion", redox: true, level: 3 },
    { id: "c2h5oh", name: "Ethanol burns in oxygen", l: ["C2H5OH", "O2"], r: ["CO2", "H2O"], c: [1, 3, 2, 3], type: "combustion", redox: true, level: 3 },
    { id: "pbno32", name: "Lead nitrate breaks down on heating", l: ["Pb(NO3)2"], r: ["PbO", "NO2", "O2"], c: [2, 2, 4, 1], type: "decomposition", redox: true, level: 3 },
    { id: "fe2o3-co", name: "Carbon monoxide reduces iron oxide in a blast furnace", l: ["Fe2O3", "CO"], r: ["Fe", "CO2"], c: [1, 3, 2, 3], type: "redox", redox: true, level: 3 },
    { id: "al-fe2o3", name: "Aluminium takes the oxygen from iron oxide (thermite)", l: ["Al", "Fe2O3"], r: ["Al2O3", "Fe"], c: [2, 1, 1, 2], type: "displacement", redox: true, level: 3 },
  ];
  const TYPES = {
    combination: ["Combination reaction", "Two or more substances join to make one new substance."],
    decomposition: ["Decomposition reaction", "One substance breaks down into two or more simpler substances, for example when it is heated or electricity passes through it."],
    displacement: ["Displacement reaction", "A more reactive element takes the place of a less reactive element in a compound."],
    double: ["Double displacement reaction", "Two compounds swap partners to make two new compounds."],
    combustion: ["Combustion reaction", "A substance burns in oxygen and gives out heat and light."],
    redox: ["Redox reaction", "One substance gains oxygen (it is oxidised) while another loses oxygen (it is reduced), at the same time."],
  };
  const REDOX_NOTE = "It is also a redox reaction: one substance is oxidised and another is reduced.";
  const SUBS = "₀₁₂₃₄₅₆₇₈₉";
  const fmt = (f) => f.replace(/([A-Za-z)])(\d+)/g, (_, a, n) => a + n.replace(/\d/g, (d) => SUBS[d]));
  const species = (r) => [...r.l, ...r.r];
  const gcd = (a, b) => (b ? gcd(b, a % b) : Math.abs(a));
  const gcdAll = (xs) => xs.reduce((g, x) => gcd(g, x), 0);

  // Atoms in one formula: "Pb(NO3)2" -> { Pb: 1, N: 2, O: 6 }
  function parse(f) {
    let i = 0;
    const num = () => {
      let s = "";
      while (i < f.length && /\d/.test(f[i])) s += f[i++];
      return s ? Number(s) : 1;
    };
    function group() {
      const out = {};
      while (i < f.length) {
        const ch = f[i];
        if (ch === "(") {
          i++;
          const inner = group();
          const k = num();
          for (const e in inner) out[e] = (out[e] || 0) + inner[e] * k;
        } else if (ch === ")") {
          i++;
          return out;
        } else if (/[A-Z]/.test(ch)) {
          let sym = ch;
          i++;
          while (i < f.length && /[a-z]/.test(f[i])) sym += f[i++];
          out[sym] = (out[sym] || 0) + num();
        } else throw new Error("bad formula " + f);
      }
      return out;
    }
    return group();
  }
  const elementsOf = (r) => {
    const seen = [];
    for (const f of species(r)) for (const e in parse(f)) if (!seen.includes(e)) seen.push(e);
    return seen;
  };
  // Atom counts for a set of numbers: { el: [left, right] }
  function count(r, coef) {
    const out = {};
    elementsOf(r).forEach((e) => (out[e] = [0, 0]));
    species(r).forEach((f, i) => {
      const side = i < r.l.length ? 0 : 1;
      const p = parse(f);
      for (const e in p) out[e][side] += p[e] * coef[i];
    });
    return out;
  }
  // The state of an attempt: which elements are out, and whether the numbers are the smallest whole numbers.
  function check(r, coef) {
    const cnt = count(r, coef);
    const off = Object.entries(cnt).filter(([, [a, b]]) => a !== b).map(([e]) => e);
    const g = gcdAll(coef);
    return { cnt, off, balanced: !off.length, smallest: g === 1, g, diff: Object.values(cnt).reduce((s, [a, b]) => s + Math.abs(a - b), 0) };
  }

  // Solve for the smallest whole numbers: null space of the element matrix (exact fractions).
  // Returns { nullity, coef } (coef only when the null space has exactly one dimension).
  function solve(r) {
    const els = elementsOf(r);
    const sp = species(r);
    const n = sp.length;
    const frac = (a, b = 1) => {
      const g = gcd(a, b) || 1;
      return b < 0 ? [-a / g, -b / g] : [a / g, b / g];
    };
    const sub = (x, y) => frac(x[0] * y[1] - y[0] * x[1], x[1] * y[1]);
    const mul = (x, y) => frac(x[0] * y[0], x[1] * y[1]);
    const div = (x, y) => frac(x[0] * y[1], x[1] * y[0]);
    const M = els.map((e) => sp.map((f, i) => frac((parse(f)[e] || 0) * (i < r.l.length ? 1 : -1))));
    const pivots = [];
    let row = 0;
    for (let col = 0; col < n && row < M.length; col++) {
      let p = row;
      while (p < M.length && M[p][col][0] === 0) p++;
      if (p === M.length) continue;
      [M[row], M[p]] = [M[p], M[row]];
      const d = M[row][col];
      M[row] = M[row].map((x) => div(x, d));
      for (let k = 0; k < M.length; k++)
        if (k !== row && M[k][col][0] !== 0) {
          const f = M[k][col];
          M[k] = M[k].map((x, j) => sub(x, mul(f, M[row][j])));
        }
      pivots.push(col);
      row++;
    }
    const nullity = n - pivots.length;
    if (nullity !== 1) return { nullity };
    const free = [...Array(n).keys()].find((c) => !pivots.includes(c));
    const v = Array(n).fill(null);
    v[free] = [1, 1];
    pivots.forEach((c, k) => (v[c] = frac(-M[k][free][0], M[k][free][1])));
    let lcm = 1;
    v.forEach((x) => (lcm = (lcm * x[1]) / gcd(lcm, x[1])));
    let ints = v.map((x) => (x[0] * lcm) / x[1]);
    if (ints.every((x) => x <= 0)) ints = ints.map((x) => -x);
    const g = gcdAll(ints);
    return { nullity, coef: ints.map((x) => x / g) };
  }

  const equationText = (r, coef) => {
    const side = (fs, off) => fs.map((f, i) => `${coef[off + i] > 1 ? coef[off + i] + " " : ""}${fmt(f)}`).join(" + ");
    return `${side(r.l, 0)} → ${side(r.r, r.l.length)}`;
  };
  const plainEquation = (r) => `${r.l.map(fmt).join(" + ")} → ${r.r.map(fmt).join(" + ")}`;

  const ASSUME = "Reactions are written as in school books, without states of matter or conditions such as heat on the arrow. Only the numbers in front of a formula change. The small numbers inside a formula say which substance it is, so they are never changed. Each equation here has exactly one smallest set of whole numbers that balances it.";
  const COLS = [
    { key: "rx", label: "Reaction" },
    { key: "coef", label: "Numbers in front", var: true },
    { key: "status", label: "Balance check" },
    { key: "off", label: "Atoms out of balance", d: 0 },
  ];
  const INVS = [
    {
      id: "ch4",
      rx: "ch4",
      title: "Balance methane burning",
      question: "Which numbers in front of CH₄, O₂, CO₂ and H₂O balance CH₄ + O₂ → CO₂ + H₂O?",
      predict: { opts: ["1, 1, 1, 1", "1, 2, 1, 2", "2, 1, 1, 2"], ans: 1 },
      vary: "coef",
      held: ["The formulas (their small numbers never change)"],
      go: "Record a run with the starting numbers. Then change only the numbers in front of the formulas, and record again each time, until the equation is balanced.",
      explain: {
        q: "What do your runs show about balancing?",
        opts: ["An equation is balanced when every element has the same number of atoms on both sides. We change the numbers in front of the formulas, not the formulas", "An equation is balanced when there is the same number of molecules on both sides", "An equation is balanced when the small numbers in the formulas are the same on both sides"],
        ans: 0,
        why: "Atoms are not created or destroyed in a reaction (conservation of mass), so each element must have the same number of atoms on both sides. Only the numbers in front can change, because they say how many molecules react. The small numbers in a formula say which substance it is.",
      },
      graph: { x: "run", y: "off" },
    },
    {
      id: "mg",
      rx: "mg-o2",
      title: "Fix the oxygen in magnesium burning",
      question: "In Mg + O₂ → MgO there are 2 oxygen atoms on the left and only 1 on the right. What is the right way to fix this?",
      predict: { opts: ["Change MgO to MgO₂", "Write a number in front of MgO", "Cross out one oxygen atom from O₂"], ans: 1 },
      vary: "coef",
      held: ["The formulas (their small numbers never change)"],
      go: "Record a run with the starting numbers. Then change only the numbers in front of the formulas, and record again each time, until the equation is balanced.",
      explain: {
        q: "Why is a number in front the right change?",
        opts: ["A number in front changes how many units of a substance react. A different small number would make a different substance, which MgO₂ is not", "The small numbers can be changed freely as long as the atoms balance", "Oxygen atoms can be left out because gases do not count"],
        ans: 0,
        why: "MgO is magnesium oxide: its formula is fixed by the substance. Writing 2 MgO means two units of it, which gives 2 Mg and 2 O. Then 2 Mg on the left balances the magnesium, and the equation is 2 Mg + O₂ → 2 MgO.",
      },
      graph: { x: "run", y: "off" },
    },
    {
      id: "zn",
      rx: "zn-hcl",
      title: "Type of reaction: zinc and acid",
      question: "What type of reaction is Zn + HCl → ZnCl₂ + H₂?",
      predict: { opts: ["Combination: two substances join to make one", "Decomposition: one substance breaks into two", "Displacement: zinc takes the place of hydrogen in the compound"], ans: 2 },
      vary: "coef",
      held: ["The formulas (their small numbers never change)"],
      go: "Balance the equation. Record a run with the starting numbers, then change only the numbers in front and record again until it is balanced. The type is shown when it is balanced.",
      explain: {
        q: "Why is this a displacement reaction?",
        opts: ["Zinc is more reactive than hydrogen, so it takes hydrogen's place in the acid and hydrogen gas is set free", "Two compounds swap their parts", "One compound breaks down into simpler substances"],
        ans: 0,
        why: "In a displacement reaction a more reactive element pushes a less reactive one out of its compound. Zinc takes the place of hydrogen in HCl, making zinc chloride and releasing hydrogen gas.",
      },
      graph: { x: "run", y: "off" },
    },
    {
      id: "any",
      rx: null,
      title: "Balance any reaction",
      question: "After you balance an equation, how will the atoms of each element on the left side compare with those on the right side?",
      predict: { opts: ["There will be more on the right, because new substances form", "They will be equal, because atoms are not created or destroyed", "They will be equal only for the first element"], ans: 1 },
      vary: "coef",
      held: ["The formulas (their small numbers never change)"],
      go: "Choose a reaction above. Record a run with the starting numbers, then change only the numbers in front and record again each time, until it is balanced.",
      explain: {
        q: "What do your runs show?",
        opts: ["When the equation is balanced every element has the same number of atoms on both sides: atoms are only rearranged, never created or destroyed", "Balancing makes the products heavier than the reactants", "Balancing changes the formulas of the substances"],
        ans: 0,
        why: "A chemical reaction rearranges atoms into new substances. The total mass stays the same (law of conservation of mass), so a balanced equation has the same number of atoms of each element on both sides.",
      },
      graph: { x: "run", y: "off" },
    },
  ];

  Labs.calc.equation = { RX, TYPES, REDOX_NOTE, INVS, COLS, ASSUME, parse, count, check, solve, fmt, species, elementsOf, gcdAll, equationText };

  const MAXC = 20;
  const hue = (i) => (i * 67 + 200) % 360;

  function mount(el, api) {
    const S = { rx: INVS[0].rx, coef: [], noted: false };
    let flow;
    const R = () => RX.find((x) => x.id === S.rx);
    const ones = () => species(R()).map(() => 1);
    const levelCap = (api.cls || 11) <= 8 ? 1 : (api.cls || 11) <= 10 ? 2 : 3;

    const stage = () => `<div class="eq">
      <div class="vl-ctrl"><label for="eq-pick">${t("Reaction")}</label>
        <select id="eq-pick" data-pick>${[1, 2, 3]
          .map((lv) => `<optgroup label="${esc(lv === 1 ? t("Easier") : lv === 2 ? t("Medium") : t("Harder"))}">${RX.filter((x) => x.level === lv).map((x) => `<option value="${x.id}">${esc(plainEquation(x))}</option>`).join("")}</optgroup>`)
          .join("")}</select></div>
      <div class="sim-btns"><button type="button" class="btn" data-surprise>${icon("reset")} ${t("Give me a reaction")}</button>
        <button type="button" class="btn" data-ones>${t("Set all numbers to 1")}</button></div>
      <p class="small muted" data-name></p>
      <div class="eq-row" role="group" aria-label="${esc(t("The numbers in front of each formula"))}" data-row></div>
      <div class="vl-tablewrap"><table class="vl-table eq-table" data-count></table></div>
      <div class="eq-explain" data-explain role="status"></div>
      <div class="sim-btns"><button type="button" class="btn primary" data-vl-run data-record>${icon("check")} ${t("Record this run")}</button></div></div>`;

    function paint() {
      const r = R();
      const sp = species(r);
      const res = check(r, S.coef);
      el.querySelector("[data-pick]").value = r.id;
      el.querySelector("[data-name]").textContent = t(r.name);
      el.querySelector("[data-row]").innerHTML = sp
        .map((f, i) => {
          const card = `<div class="eq-sp"><div class="eq-f" aria-hidden="true">${esc(fmt(f))}</div>
            <div class="eq-stepper"><button type="button" class="btn at-btn" data-eqstep="${i}" data-d="-1" aria-label="${esc(t("Decrease the number in front of {x}", { x: fmt(f) }))}" ${S.coef[i] <= 1 ? "disabled" : ""}>−</button>
            <output class="at-val" data-coef="${i}" aria-label="${esc(t("Number in front of {x}", { x: fmt(f) }))}">${S.coef[i]}</output>
            <button type="button" class="btn at-btn" data-eqstep="${i}" data-d="1" aria-label="${esc(t("Increase the number in front of {x}", { x: fmt(f) }))}" ${S.coef[i] >= MAXC ? "disabled" : ""}>+</button></div></div>`;
          return (i === r.l.length ? `<span class="eq-op" aria-hidden="true">→</span>` : i ? `<span class="eq-op" aria-hidden="true">+</span>` : "") + card;
        })
        .join("");
      const els = Object.keys(res.cnt);
      const tokens = (n, k) => {
        const shown = Math.min(n, 36);
        return `<span class="eq-tok" aria-hidden="true">${`<i style="--h:${hue(k)}"></i>`.repeat(shown)}${n > shown ? "…" : ""}</span>`;
      };
      el.querySelector("[data-count]").innerHTML = `<caption class="sr-only">${t("Atoms of each element on each side")}</caption><thead><tr><th scope="col">${t("Element")}</th><th scope="col">${t("Left side")}</th><th scope="col">${t("Right side")}</th><th scope="col">${t("Equal?")}</th></tr></thead><tbody>${els
        .map((e, k) => {
          const [a, b] = res.cnt[e];
          return `<tr class="${a === b ? "eq-ok" : "eq-no"}" data-el="${e}"><th scope="row">${e}</th><td>${tokens(a, k)}<span class="eq-n" data-l>${a}</span></td><td>${tokens(b, k)}<span class="eq-n" data-r>${b}</span></td><td>${a === b ? "✓ " + t("equal") : "✗ " + t("not equal")}</td></tr>`;
        })
        .join("")}</tbody>`;
      // the result
      const ok = res.balanced && res.smallest;
      const ty = TYPES[r.type];
      el.querySelector("[data-explain]").innerHTML = ok
        ? `<div class="feedback good"><div class="h">${esc(t(ty[0]))}</div><p>${esc(t(ty[1]))}${r.redox && r.type !== "redox" ? " " + esc(t(REDOX_NOTE)) : ""}</p>
           <p class="small">${esc(t("The same number of atoms of every element is on both sides: {x}. Atoms are only rearranged, never created or destroyed.", { x: els.map((e) => `${res.cnt[e][0]} ${e}`).join(", ") }))}</p></div>`
        : res.balanced
        ? `<div class="feedback neutral"><p>${esc(t("The atoms are equal on both sides, but the numbers can be smaller. Divide every number by {g}.", { g: res.g }))}</p></div>`
        : `<p class="small muted">${esc(t("The type of reaction is shown when the equation is balanced."))}</p>`;
      const status = ok ? t("Balanced") : res.balanced ? t("Equal, but not in the smallest whole numbers") : t("Not balanced: {x}", { x: res.off.join(", ") });
      const detail = res.off.map((e) => t("{x}: {a} on the left, {b} on the right", { x: e, a: res.cnt[e][0], b: res.cnt[e][1] })).join("; ");
      flow.live(
        [
          [t("Equation"), equationText(r, S.coef)],
          [t("Balance check"), status],
          [t("Reaction type"), ok ? t(ty[0]) : "—"],
        ],
        ok ? `${t("Balanced")}. ${t(ty[0])}.` : `${status}. ${detail}`
      );
    }

    function pick(id) {
      S.rx = id;
      S.coef = ones();
      paint();
    }

    flow = Labs.flow(el, api, {
      assumptions: ASSUME,
      columns: COLS,
      investigations: INVS,
      extra: () => ({ reaction: S.rx, coef: [...S.coef], balanced: check(R(), S.coef).balanced }),
      mountStage(slot, F) {
        flow = F;
        slot.innerHTML = stage();
        slot.addEventListener("click", (e) => {
          const st = e.target.closest("[data-eqstep]");
          if (st) {
            const i = Number(st.dataset.eqstep);
            S.coef[i] = Math.max(1, Math.min(MAXC, S.coef[i] + Number(st.dataset.d)));
            paint();
            const again = el.querySelector(`[data-eqstep="${i}"][data-d="${st.dataset.d}"]`);
            if (again && !again.disabled) again.focus({ preventScroll: true });
            return;
          }
          if (e.target.closest("[data-ones]")) {
            S.coef = ones();
            return paint();
          }
          if (e.target.closest("[data-surprise]")) {
            const pool = RX.filter((x) => x.level <= levelCap && x.id !== S.rx);
            return choose(pool[Math.floor(Math.random() * pool.length)].id);
          }
          if (e.target.closest("[data-record]")) {
            const r = R();
            const res = check(r, S.coef);
            flow.addRun({
              rx: plainEquation(r),
              coef: S.coef.join(", "),
              status: res.balanced && res.smallest ? t("Balanced") : res.balanced ? t("Equal, but not smallest") : t("Not balanced: {x}", { x: res.off.join(", ") }),
              off: res.diff,
            });
          }
        });
        slot.addEventListener("change", (e) => {
          if (e.target.matches("[data-pick]")) choose(e.target.value);
        });
      },
      onInvestigation(inv) {
        if (inv.rx) S.rx = inv.rx;
        S.coef = ones();
        paint();
      },
    });

    // Choosing a reaction by hand starts the "any reaction" investigation with it.
    function choose(id) {
      const free = INVS.findIndex((v) => !v.rx);
      if (flow.inv.rx === null) {
        S.rx = id;
        flow.reset();
        S.coef = ones();
        paint();
        return;
      }
      S.rx = id;
      el.querySelector(`[data-inv="${free}"]`).click();
    }
  }

  Labs.register("equation", {
    title: "Equation balancer",
    area: "chemistry",
    icon: "formula",
    objective: "Balance chemical equations by changing the numbers in front of the formulas. Count the atoms of each element on both sides, see when the equation is balanced in the smallest whole numbers, and find out what type of reaction it is.",
    chapters: [
      { cls: 7, subject: "science", chapter: "changes-around-us-physical-and-chemical" },
      { cls: 7, subject: "sciencepb", chapter: "physical-and-chemical-changes" },
      { cls: 8, subject: "sciencepb", chapter: "combustion-and-flame" },
      { cls: 9, subject: "sciencepb", chapter: "atoms-and-molecules" },
      { cls: 10, subject: "science", chapter: "chemical-reactions-and-equations" },
      { cls: 10, subject: "science", chapter: "metals-and-non-metals" },
      { cls: 11, subject: "chemistry", chapter: "some-basic-concepts-of-chemistry" },
      { cls: 11, subject: "chemistry", chapter: "redox-reactions" },
    ],
    mount,
  });
})();
