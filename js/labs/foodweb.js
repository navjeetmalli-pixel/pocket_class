// Food-web rescue (Biology): build food chains and a food web by linking organisms in a pond, a grassland and a forest. An arrow
// points from the food to the one that eats it, the way the energy goes. The lab works out the trophic level of each organism,
// then lets you run experiments on your own web: remove a population, double it, take the decomposers away, and follow the
// 10% law of energy.
//
//   A link FOOD -> EATER is allowed only when the eater really eats that food (the diets below). Plants and phytoplankton make
//   their own food, herbivores eat only producers, carnivores eat only animals, omnivores eat both. A link from any living
//   thing to the decomposers means "when it dies, the decomposers feed on it".
//   Trophic level: a producer is level 1; an eater is one level above the food it eats. An organism that eats at more than one
//   level (a small fish eats phytoplankton and zooplankton) is shown at the highest level it reaches, and the lower one is named.
//   Energy: only about 10% of the energy passes on to the next level, so level n holds E1 / 10^(n-1).
//
// The population model is SIMPLIFIED and is labelled so on the page. Every population starts at 100. Each season a population is
// multiplied by a factor: it goes up when there is more food than at the start and down when there are more eaters than at the
// start (a producer also depends on the nutrients in the soil, which decomposers keep up). One kind removed stays at 0.
// It is meant for a few seasons only (at most 6), and is the same every time you run it.

(() => {
  const KIND = { producer: "Producer", herbivore: "Herbivore", carnivore: "Carnivore", omnivore: "Omnivore", decomposer: "Decomposer" };
  const LEVEL_NAME = ["Producer", "Primary consumer", "Secondary consumer", "Tertiary consumer", "Quaternary consumer"];

  // diet: what it eats in the habitats where both live.
  const ORG = [
    { id: "grass", name: "Grass", kind: "producer", diet: [] },
    { id: "trees", name: "Trees and shrubs", kind: "producer", diet: [] },
    { id: "phyto", name: "Phytoplankton", kind: "producer", diet: [] },
    { id: "zoo", name: "Zooplankton", kind: "herbivore", diet: ["phyto"] },
    { id: "sfish", name: "Small fish", kind: "omnivore", diet: ["phyto", "zoo"] },
    { id: "bfish", name: "Big fish", kind: "carnivore", diet: ["sfish"] },
    { id: "king", name: "Kingfisher", kind: "carnivore", diet: ["sfish"] },
    { id: "hopper", name: "Grasshopper", kind: "herbivore", diet: ["grass", "trees"] },
    { id: "mouse", name: "Mouse", kind: "herbivore", diet: ["grass"] },
    { id: "rabbit", name: "Rabbit", kind: "herbivore", diet: ["grass"] },
    { id: "deer", name: "Deer", kind: "herbivore", diet: ["grass", "trees"] },
    { id: "peacock", name: "Peacock", kind: "omnivore", diet: ["grass", "hopper"] },
    { id: "frog", name: "Frog", kind: "carnivore", diet: ["hopper"] },
    { id: "snake", name: "Snake", kind: "carnivore", diet: ["frog", "mouse"] },
    { id: "owl", name: "Owl", kind: "carnivore", diet: ["mouse", "frog"] },
    { id: "fox", name: "Fox", kind: "carnivore", diet: ["rabbit", "mouse"] },
    { id: "eagle", name: "Eagle", kind: "carnivore", diet: ["snake", "rabbit", "mouse", "frog"] },
    { id: "tiger", name: "Tiger", kind: "carnivore", diet: ["deer"] },
    { id: "decomp", name: "Decomposers", kind: "decomposer", diet: [] },
  ];
  const HAB = {
    pond: { name: "Pond", ids: ["phyto", "zoo", "sfish", "bfish", "king", "decomp"] },
    grass: { name: "Grassland", ids: ["grass", "hopper", "mouse", "rabbit", "peacock", "frog", "snake", "owl", "fox", "eagle", "decomp"] },
    forest: { name: "Forest", ids: ["grass", "trees", "hopper", "deer", "rabbit", "mouse", "frog", "snake", "owl", "eagle", "tiger", "decomp"] },
  };
  const HABS = Object.keys(HAB);
  const org = (id) => ORG.find((o) => o.id === id);
  const isProducer = (id) => org(id).kind === "producer";
  const isAnimal = (id) => !["producer", "decomposer"].includes(org(id).kind);
  const eats = (eater, food) => org(eater).diet.includes(food);

  // Every link a habitat allows: [food, eater] (not counting the decomposers).
  const truthLinks = (h) => {
    const ids = HAB[h].ids;
    const out = [];
    for (const e of ids) for (const f of org(e).diet) if (ids.includes(f)) out.push([f, e]);
    return out;
  };

  // Is the link FOOD -> EATER right? { ok, code } and, when it is not, the code says why:
  //   self | producer (a plant eats nothing) | reverse (it is the other way round) | herb (a herbivore eating an animal)
  //   carn (a carnivore eating a plant) | decfood (decomposers are not food) | no (does not eat it)
  //   ok | dec (a living thing -> the decomposers when it dies)
  function judge(food, eater) {
    if (food === eater) return { ok: false, code: "self" };
    if (org(food).kind === "decomposer") return { ok: false, code: "decfood" };
    if (org(eater).kind === "decomposer") return { ok: true, code: "dec" };
    if (eats(eater, food)) return { ok: true, code: "ok" };
    if (eats(food, eater)) return { ok: false, code: "reverse" };
    if (isProducer(eater)) return { ok: false, code: "producer" };
    if (org(eater).kind === "herbivore" && isAnimal(food)) return { ok: false, code: "herb" };
    if (org(eater).kind === "carnivore" && isProducer(food)) return { ok: false, code: "carn" };
    return { ok: false, code: "no" };
  }

  // Positions in a chain: for each organism the set of chain positions (1 = producer) reachable through the links.
  function positions(links) {
    const foods = {};
    links.forEach(([f, e]) => (foods[e] = foods[e] || []).push(f));
    const memo = {};
    const pos = (id, seen) => {
      if (memo[id]) return memo[id];
      let set = new Set();
      if (isProducer(id)) set.add(1);
      else for (const f of foods[id] || []) if (!seen.includes(f)) for (const p of pos(f, [...seen, id])) set.add(p + 1);
      return (memo[id] = set);
    };
    const ids = [...new Set(links.flat())];
    const out = {};
    ids.forEach((id) => (out[id] = [...pos(id, [])].sort((a, b) => a - b)));
    return out;
  }
  // Trophic level of each organism in the web: the highest chain position, or null when no chain from a producer reaches it.
  function levels(links) {
    const p = positions(links);
    const out = {};
    for (const id of Object.keys(p)) out[id] = p[id].length ? p[id][p[id].length - 1] : null;
    return out;
  }
  const levelCount = (links) => Math.max(0, ...Object.values(levels(links)).filter((x) => x));
  // The longest food chain in the web, producer first: ids.
  function longestChain(links) {
    const foods = {};
    links.forEach(([f, e]) => (foods[e] = foods[e] || []).push(f));
    const memo = {};
    const best = (id, seen) => {
      if (memo[id]) return memo[id];
      let r = null;
      if (isProducer(id)) r = [id];
      else
        for (const f of foods[id] || []) {
          if (seen.includes(f)) continue;
          const c = best(f, [...seen, id]);
          if (c && (!r || c.length + 1 > r.length)) r = [...c, id];
        }
      return (memo[id] = r);
    };
    let top = [];
    for (const id of new Set(links.flat())) {
      const c = best(id, []);
      if (c && c.length > top.length) top = c;
    }
    return top;
  }

  // ---------- energy: the 10% law ----------
  const PASS = 0.1;
  const energyAt = (e1, n) => e1 / 10 ** (n - 1);

  // ---------- the simplified population model ----------
  const P = { G: 0.2, H: 0.2, NU: 0.4, CAP: 300, MIN: 0.5, MAX: 1.6, HEAP: 10, START: 100, SEASONS: 6 };
  const mean = (a) => a.reduce((x, y) => x + y, 0) / a.length;
  // The web of the learner's links: ids, and who eats whom.
  function web(links) {
    const ids = [...new Set(links.flat())];
    const foods = {}, preds = {};
    ids.forEach((i) => ((foods[i] = []), (preds[i] = [])));
    links.forEach(([f, e]) => {
      foods[e].push(f);
      preds[f].push(e);
    });
    return { ids, foods, preds };
  }
  // change: null | { type: "remove" | "double", id };  decomp: are the decomposers there?
  function start(w, change, decomp = true) {
    const pop = {};
    w.ids.forEach((i) => (pop[i] = P.START));
    if (change && pop[change.id] != null) pop[change.id] = change.type === "remove" ? 0 : 2 * P.START;
    return { season: 0, pop, heap: 0, nutr: 1, decomp };
  }
  function step(w, s) {
    const pop = {};
    for (const id of w.ids) {
      const p = s.pop[id];
      if (!(p > 0)) {
        pop[id] = 0;
        continue;
      }
      let f = 1;
      const fs = w.foods[id], ps = w.preds[id];
      if (fs.length) f += P.G * (mean(fs.map((x) => s.pop[x])) / P.START - 1);
      if (ps.length) f -= P.H * (mean(ps.map((x) => s.pop[x])) / P.START - 1);
      if (isProducer(id)) f += P.NU * (s.nutr - 1);
      pop[id] = Math.min(P.CAP, p * Math.max(P.MIN, Math.min(P.MAX, f)));
    }
    const heap = s.decomp ? 0 : s.heap + P.HEAP;
    const nutr = s.decomp ? 1 : Math.max(0.2, 1 - heap / 80);
    return { season: s.season + 1, pop, heap, nutr, decomp: s.decomp };
  }
  const run = (w, s, n) => {
    for (let i = 0; i < n; i++) s = step(w, s);
    return s;
  };

  const ASSUME = "This is a simplified model, not real data. Every population starts at 100. Each season a population grows when there is more food than at the start and shrinks when there are more eaters than at the start. Real food webs also depend on weather, disease, space and many more species, and numbers never change in such neat steps. Use the model for a few seasons only.";

  const fmtJ = (v) => Number(v).toLocaleString("en-IN", { maximumFractionDigits: 6 });
  const COLS = {
    pop: [
      { key: "change", label: "Change made", var: true },
      { key: "seasons", label: "Seasons run", d: 0, var: true },
      { key: "food", label: "Its food (population)" },
      { key: "preds", label: "Animals that eat it (population)" },
    ],
    dec: [
      { key: "change", label: "Decomposers", var: true },
      { key: "seasons", label: "Seasons run", d: 0, var: true },
      { key: "heap", label: "Dead remains piled up", d: 0 },
      { key: "prod", label: "Producers (population)", d: 0 },
    ],
    energy: [
      { key: "e1", label: "Energy in the producers", unit: "J", var: true, fmt: fmtJ },
      { key: "level", label: "Trophic level", d: 0, var: true },
      { key: "who", label: "Organism" },
      { key: "energy", label: "Energy at this level", unit: "J", fmt: fmtJ },
    ],
  };
  const HELD_WEB = ["Your food web", "The starting population of every kind (100)"];
  const INVS = [
    {
      id: "remove",
      mode: "remove",
      columns: COLS.pop,
      title: "Remove one population",
      question: "If every animal of one kind is removed from a food web, what happens to the animals it ate and to the animals that ate it?",
      predict: {
        opts: ["The animals it ate increase, because fewer are eaten. The animals that ate it decrease, because they have less food", "Both decrease", "Nothing changes in the rest of the web"],
        ans: 0,
      },
      vary: "change",
      held: HELD_WEB,
      go: "Run the seasons with no change first (a control), then remove one population and run the same number of seasons. Record a run each time.",
      explain: {
        q: "What do your runs show?",
        opts: [
          "Taking one kind out changes the others: the animals it ate increase and the animals that ate it decrease",
          "Taking one kind out changes only that kind",
          "Taking one kind out makes every other kind increase",
        ],
        ans: 0,
        why: "Every population in a food web is linked to others. If the frogs are removed, fewer grasshoppers are eaten, so they increase, and the snakes lose a food, so they decrease. The changes then spread further: more grasshoppers eat more grass. This model is simplified, but it shows why losing one kind of living thing can upset a whole habitat.",
      },
      graph: null,
    },
    {
      id: "double",
      mode: "double",
      columns: COLS.pop,
      title: "Double one population",
      question: "If the number of one kind is doubled, what happens to the animals it eats and to the animals that eat it?",
      predict: {
        opts: ["Both increase", "The animals it eats decrease, because more are eaten. The animals that eat it increase, because they have more food", "Nothing changes in the rest of the web"],
        ans: 1,
      },
      vary: "change",
      held: HELD_WEB,
      go: "Run the seasons with no change first (a control), then double one population and run the same number of seasons. Record a run each time.",
      explain: {
        q: "What do your runs show?",
        opts: [
          "A bigger population eats more, so its food decreases, and it feeds more animals, so the animals that eat it increase",
          "A bigger population has no effect on the food it eats",
          "A bigger population makes the animals that eat it decrease",
        ],
        ans: 0,
        why: "More of one kind means more mouths to feed, so the food it eats falls. It also means more food for the animals that eat it, so they increase. In a real habitat the changes do not last for ever: when the food runs short the population falls back.",
      },
      graph: null,
    },
    {
      id: "energy",
      mode: "energy",
      columns: COLS.energy,
      title: "The 10% law of energy",
      question: "When one organism is eaten by the next one in a food chain, how much of its energy passes on to the next level?",
      predict: { opts: ["All of it", "About half of it", "About a tenth (10%) of it"], ans: 2 },
      vary: "level",
      held: ["The food chain", "The rule that 10% passes on"],
      go: "Choose how much energy the producers hold. Then record the energy at two or more levels of the chain.",
      explain: {
        q: "Why are food chains usually short, with only four or five levels?",
        opts: [
          "At each step only about 10% of the energy passes on, so very little is left for the fourth or fifth level",
          "Each level passes on half of its energy, so the top level always has plenty",
          "Each level passes on all of its energy, but animals cannot eat larger animals",
        ],
        ans: 0,
        why: "Each organism uses most of the energy it takes in for living (respiration, which gives out heat), and some is left in parts that are not eaten and in waste. Only about 10% is stored in its body and can pass to the next level. So 10,000 J in the producers becomes 1,000 J, 100 J, 10 J and 1 J. After four or five steps there is too little energy left to feed another level.",
      },
      graph: { x: "level", y: "energy" },
    },
    {
      id: "decomp",
      mode: "decomp",
      columns: COLS.dec,
      title: "Take the decomposers away",
      question: "What happens to a habitat if all the decomposers disappear?",
      predict: {
        opts: ["Nothing changes, because dead things just vanish by themselves", "Dead remains pile up and the soil runs short of nutrients, so the plants and then the animals decline", "The plants grow faster, because there is more dead matter"],
        ans: 1,
      },
      vary: "change",
      held: HELD_WEB,
      go: "Run the seasons with the decomposers present first, then remove them and run the same number of seasons. Record a run each time.",
      explain: {
        q: "What do your runs show about decomposers?",
        opts: [
          "Decomposers break down dead remains and return nutrients to the soil. Without them dead matter piles up, the producers have less to grow on, and the animals that depend on them decline",
          "Decomposers are not needed, because plants make their own food from air and water",
          "Decomposers eat the living plants, so removing them helps the producers",
        ],
        ans: 0,
        why: "Bacteria and fungi break down dead plants and animals and their waste. This returns minerals to the soil, which the producers take up again. Without decomposers the minerals stay locked in dead matter, the soil runs short, and the producers, and then every animal that depends on them, decline.",
      },
      graph: { x: "run", y: "prod" },
    },
  ];

  Labs.calc.foodweb = { ORG, HAB, HABS, KIND, LEVEL_NAME, INVS, COLS, ASSUME, P, PASS, org, isProducer, isAnimal, eats, truthLinks, judge, positions, levels, levelCount, longestChain, energyAt, web, start, step, run };

  // ---------- the page ----------
  function mount(el, api) {
    const startHab = { "forests-and-forest-people": "forest" }[api.chapter] || "grass";
    const S = { hab: startHab, webs: { pond: [], grass: [], forest: [] }, sel: null, sim: null, change: null, decomp: true, pick: null, level: 2, e1: 10000 };
    let flow = null;
    const nm = (id) => t(org(id).name);
    const links = () => S.webs[S.hab];
    const realLinks = () => links().filter(([, e]) => e !== "decomp");
    const decLinks = () => links().filter(([, e]) => e === "decomp");
    const hasLink = (f, e) => links().some((l) => l[0] === f && l[1] === e);
    const W = () => web(realLinks());
    const fullLv = (id) => levels(truthLinks(S.hab))[id] || 0;
    const chipOrder = (h) => HAB[h].ids.slice().sort((a, b) => (a === "decomp") - (b === "decomp") || fullLv(a) - fullLv(b) || org(a).name.localeCompare(org(b).name));
    const bad = (s) => `<div class="h">✗ ${s}</div>`;

    el.innerHTML = `<div class="card fw-build" data-build>
        <h3 class="fw-h">${icon("target")} ${t("Build the food web")}</h3>
        <div class="vl-ctrl"><label for="fw-hab">${t("Habitat")}</label>
          <select id="fw-hab" data-hab>${HABS.map((h) => `<option value="${h}">${esc(t(HAB[h].name))}</option>`).join("")}</select></div>
        <p class="small muted">${t("Link the food to the one that eats it. The arrow points the way the energy goes: from the food to the eater. Tap the food, then the one that eats it, or drag the food onto the eater.")}</p>
        <div class="vl-parts" role="group" aria-label="${esc(t("Organisms. Choose the food first, then the one that eats it."))}" data-chips></div>
        <p class="small muted" data-hint></p>
        <div class="feedback neutral vl-cfb" data-fb2 role="status" hidden></div>
        <div class="fw-web" data-web></div>
        <ul class="fw-levels" data-levels aria-label="${esc(t("Trophic levels in your web"))}"></ul>
        <p class="small" data-summary></p>
        <h4 class="vl-sub">${t("Your links")}</h4>
        <ul class="fw-links" data-links tabindex="-1"></ul>
        <div class="sim-btns"><button type="button" class="btn" data-fwhint>${icon("eye")} ${t("Give me a hint")}</button>
          <button type="button" class="btn" data-fwfill>${icon("check")} ${t("Complete the web for me")}</button>
          <button type="button" class="btn" data-fwclear>${icon("reset")} ${t("Start this web again")}</button></div>
      </div>
      <div data-flowhost></div>`;
    const $ = (s) => el.querySelector(s);
    $("[data-hab]").value = S.hab;

    // ----- the organism chips (built once per habitat so that focus stays) -----
    function chips() {
      $("[data-chips]").innerHTML = chipOrder(S.hab)
        .map((id) => `<button type="button" class="vl-part fw-chip fw-k-${org(id).kind}" data-org="${id}" aria-pressed="false"><span>${esc(nm(id))}</span><span class="fw-sub">${t(KIND[org(id).kind])}</span><span class="vl-marks" data-marks></span></button>`)
        .join("");
    }

    // ----- the web picture -----
    const NW = 100, NH = 36, VW = 360, MX = 4;
    function webSVG() {
      const lv = levels(realLinks());
      const ids = Object.keys(lv);
      if (!ids.length) return `<p class="small muted fw-empty">${t("Your food web will appear here as you link organisms.")}</p>`;
      const top = Math.max(0, ...ids.map((i) => lv[i] || 0));
      const rows = [];
      for (let L = top; L >= 1; L--) rows.push({ L, ids: ids.filter((i) => lv[i] === L) });
      if (ids.some((i) => !lv[i])) rows.push({ L: 0, ids: ids.filter((i) => !lv[i]) });
      let y = 4;
      const at = {};
      const heads = [];
      for (const r of rows.filter((r) => r.ids.length)) {
        heads.push(`<text class="fw-rowh" x="${MX}" y="${y + 11}">${r.L ? esc(t("Level {n}", { n: r.L })) + " · " + esc(t(LEVEL_NAME[r.L - 1])) : esc(t("Not yet linked to a producer"))}</text>`);
        y += 16;
        const per = 3;
        for (let k = 0; k < r.ids.length; k += per) {
          const rowIds = r.ids.slice(k, k + per);
          const totalW = rowIds.length * NW + (rowIds.length - 1) * 10;
          rowIds.forEach((id, j) => (at[id] = { x: (VW - totalW) / 2 + j * (NW + 10) + NW / 2, y: y + NH / 2 }));
          y += NH + 22;
        }
      }
      const H = y + (decLinks().length ? 40 : 0);
      const edges = realLinks()
        .map(([f, e]) => {
          const a = at[f], b = at[e];
          if (!a || !b) return "";
          const dx = b.x - a.x, dy = b.y - a.y;
          const k = (hw, hh) => Math.min(Math.abs(dx) > 0.01 ? hw / Math.abs(dx) : 9, Math.abs(dy) > 0.01 ? hh / Math.abs(dy) : 9);
          const t1 = k(NW / 2 + 1, NH / 2 + 1), t2 = k(NW / 2 + 4, NH / 2 + 4);
          return `<line class="fw-edge" x1="${pt1(a.x + dx * t1)}" y1="${pt1(a.y + dy * t1)}" x2="${pt1(b.x - dx * t2)}" y2="${pt1(b.y - dy * t2)}" marker-end="url(#fw-ah)"/>`;
        })
        .join("");
      const dead = new Set(decLinks().map((l) => l[0]));
      const nodes = ids
        .map((id) => {
          const p = at[id];
          const name = nm(id);
          const words = name.split(" ");
          const two = name.length > 13 && words.length > 1;
          const half = Math.ceil(words.length / 2);
          const txt = two
            ? `<text class="fw-nm" x="${p.x}" y="${p.y - 3}" text-anchor="middle">${esc(words.slice(0, half).join(" "))}</text><text class="fw-nm" x="${p.x}" y="${p.y + 9}" text-anchor="middle">${esc(words.slice(half).join(" "))}</text>`
            : `<text class="fw-nm" x="${p.x}" y="${p.y + 4}" text-anchor="middle">${esc(name)}</text>`;
          return `<g class="fw-node fw-k-${org(id).kind}" data-node="${id}"><title>${esc(name)}: ${esc(t(KIND[org(id).kind]))}${lv[id] ? ", " + esc(t("Level {n}", { n: lv[id] })) : ""}</title><rect x="${pt1(p.x - NW / 2)}" y="${pt1(p.y - NH / 2)}" width="${NW}" height="${NH}" rx="9"/>${txt}${dead.has(id) ? `<circle class="fw-dd" cx="${pt1(p.x + NW / 2 - 4)}" cy="${pt1(p.y + NH / 2 - 2)}" r="7"/><text class="fw-dl" x="${pt1(p.x + NW / 2 - 4)}" y="${pt1(p.y + NH / 2 + 2)}" text-anchor="middle">D</text>` : ""}</g>`;
        })
        .join("");
      const band = decLinks().length
        ? `<rect class="fw-band" x="${MX}" y="${y + 2}" width="${VW - 2 * MX}" height="30" rx="9"/><text class="fw-nm" x="${VW / 2}" y="${y + 21}" text-anchor="middle">${esc(t("Decomposers: bacteria and fungi"))}</text>`
        : "";
      const desc = t("Food web with {a} organisms and {b} links. Arrows point from the food to the eater.", { a: ids.length, b: realLinks().length });
      return `<svg viewBox="0 0 ${VW} ${H}" class="fw-svg" role="img" aria-label="${esc(desc)}"><defs><marker id="fw-ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" class="fw-ahead"/></marker></defs>${heads.join("")}${edges}${nodes}${band}</svg>`;
    }
    const pt1 = (x) => Math.round(x * 10) / 10;

    // ----- painting the builder -----
    function paint() {
      el.querySelectorAll(".fw-chip").forEach((b) => {
        const id = b.dataset.org;
        b.setAttribute("aria-pressed", id === S.sel);
        const inWeb = realLinks().some((l) => l.includes(id)) || decLinks().some((l) => l[0] === id) || (id === "decomp" && decLinks().length);
        b.querySelector("[data-marks]").textContent = inWeb ? t("in your web") : "";
      });
      $("[data-hint]").textContent = S.sel ? t("{x} is the food. Now tap the one that eats it.", { x: nm(S.sel) }) : t("Tap the food first. Plants and phytoplankton are the producers.");
      $("[data-web]").innerHTML = webSVG();
      const lv = levels(realLinks());
      const pos = positions(realLinks());
      const top = levelCount(realLinks());
      const byLevel = [];
      for (let L = top; L >= 1; L--) {
        const here = Object.keys(lv).filter((i) => lv[i] === L);
        if (here.length)
          byLevel.push(`<li data-level="${L}"><strong>${t("Level {n}", { n: L })} · ${t(LEVEL_NAME[L - 1])}:</strong> ${here.map((i) => esc(nm(i)) + (pos[i].length > 1 ? ` <span class="muted">(${esc(t("also level {n}", { n: pos[i].slice(0, -1).join(", ") }))})</span>` : "")).join(", ")}</li>`);
      }
      const unlinked = Object.keys(lv).filter((i) => !lv[i]);
      if (unlinked.length) byLevel.push(`<li data-level="0"><strong>${t("Not yet linked to a producer")}:</strong> ${unlinked.map((i) => esc(nm(i))).join(", ")}</li>`);
      $("[data-levels]").innerHTML = byLevel.join("");
      const all = truthLinks(S.hab).length;
      $("[data-summary]").textContent = realLinks().length
        ? t("Your web has {a} organisms, {b} of {c} possible links, and {d} trophic levels.", { a: Object.keys(lv).length, b: realLinks().length, c: all, d: top }) + (decLinks().length ? " " + t("D marks an organism whose remains the decomposers feed on.") : "")
        : t("No links yet. There are {c} possible links in this habitat.", { c: all });
      $("[data-links]").innerHTML =
        links()
          .map(([f, e], i) => {
            const text = e === "decomp" ? t("{a} → Decomposers (when it dies)", { a: nm(f) }) : `${nm(f)} → ${nm(e)}`;
            return `<li data-link="${f}>${e}"><span>${esc(text)}</span><button type="button" class="btn fw-rm" data-rm="${i}" aria-label="${esc(t("Remove the link {x}", { x: text }))}">${icon("x")}</button></li>`;
          })
          .join("") || `<li class="muted">${t("None yet.")}</li>`;
    }

    function note(html, kind) {
      const f = $("[data-fb2]");
      f.hidden = false;
      f.className = `feedback ${kind} vl-cfb`;
      f.innerHTML = html;
    }

    function reason(r, food, eater) {
      const a = nm(food), b = nm(eater);
      const m = {
        self: t("An organism cannot be its own food."),
        producer: t("{b} is a producer. It makes its own food using sunlight, so it does not eat other living things.", { a, b }),
        reverse: t("The arrow points from the food to the one that eats it. {a} eats {b}, so the arrow goes from {b} to {a}.", { a, b }),
        herb: t("{b} is a herbivore. It eats only plants, not animals.", { a, b }),
        carn: t("{b} is a carnivore. It eats only animals, not plants.", { a, b }),
        decfood: t("Decomposers are not food in a chain. They feed on the dead remains of living things, so the arrow goes from a living thing to the decomposers."),
        no: t("{b} does not normally eat {a} in this habitat.", { a, b }),
      };
      return m[r.code];
    }

    function tryLink(food, eater) {
      const r = judge(food, eater);
      if (!r.ok) {
        note(bad(esc(t("{a} → {b} is not a food link.", { a: nm(food), b: nm(eater) }))) + esc(reason(r, food, eater)), "bad");
        return false;
      }
      if (hasLink(food, eater)) {
        note(esc(t("{a} → {b} is already in your web.", { a: nm(food), b: nm(eater) })), "neutral");
        return false;
      }
      links().push([food, eater]);
      if (r.code === "dec") note(`<div class="h">✓ ${esc(t("{a} → Decomposers", { a: nm(food) }))}</div>${esc(t("When {a} dies, bacteria and fungi break down its remains and return the nutrients to the soil.", { a: nm(food) }))}`, "good");
      else {
        const lv = levels(realLinks())[eater];
        note(`<div class="h">✓ ${esc(t("{a} → {b}", { a: nm(food), b: nm(eater) }))}</div>${esc(t("{b} eats {a}, so energy flows from {a} to {b}.", { a: nm(food), b: nm(eater) }))}${lv ? " " + esc(t("{b} is at trophic level {n}: {x}.", { b: nm(eater), n: lv, x: t(LEVEL_NAME[lv - 1]) })) : " " + esc(t("Link {a} to a producer to see its trophic level.", { a: nm(food) }))}`, "good");
      }
      changed();
      return true;
    }

    function pickChip(id) {
      if (S.sel == null) S.sel = id;
      else if (S.sel === id) S.sel = null;
      else {
        const f = S.sel;
        S.sel = null;
        tryLink(f, id);
      }
      paint();
    }

    function changed() {
      S.pick = null;
      resetSim();
      paint();
      expPaint();
    }

    // ----- events of the builder -----
    el.addEventListener("click", (e) => {
      const rm = e.target.closest("[data-rm]");
      if (rm) {
        links().splice(Number(rm.dataset.rm), 1);
        note(esc(t("Link removed.")), "neutral");
        changed();
        $("[data-links]").focus({ preventScroll: true });
        return;
      }
      if (e.target.closest("[data-fwclear]")) {
        S.webs[S.hab] = [];
        S.sel = null;
        note(esc(t("The web is empty. Start again with a producer.")), "neutral");
        return changed();
      }
      if (e.target.closest("[data-fwfill]")) {
        for (const l of truthLinks(S.hab)) if (!hasLink(l[0], l[1])) links().push(l);
        for (const id of HAB[S.hab].ids) if (id !== "decomp" && !hasLink(id, "decomp")) links().push([id, "decomp"]);
        note(esc(t("The whole web of this habitat is drawn. Look at the trophic levels, then check that you can explain each link.")), "good");
        return changed();
      }
      if (e.target.closest("[data-fwhint]")) {
        const miss = truthLinks(S.hab).filter((l) => !hasLink(l[0], l[1])).sort((a, b) => fullLv(a[1]) - fullLv(b[1]));
        note(miss.length ? esc(t("Hint: what does the {x} eat in this habitat?", { x: nm(miss[0][1]) })) : esc(t("You have drawn every link in this habitat. Try the experiments below.")), "neutral");
      }
    });
    $("[data-hab]").addEventListener("change", (e) => {
      S.hab = e.target.value;
      S.sel = null;
      $("[data-fb2]").hidden = true;
      chips();
      changed();
    });
    Games.draggable(el, ".fw-chip", {
      onDrop(chip, els) {
        const t2 = els.find((x) => x.matches && x.matches(".fw-chip") && x !== chip);
        if (t2) {
          S.sel = null;
          tryLink(chip.dataset.org, t2.dataset.org);
          paint();
        }
      },
      onTap(chip) {
        pickChip(chip.dataset.org);
      },
      over(els) {
        el.querySelectorAll(".fw-chip").forEach((b) => b.classList.toggle("vl-over", els.includes(b)));
      },
    });

    // ----- the experiments -----
    const enough = () => realLinks().length >= 2;
    function resetSim() {
      S.change = null;
      S.sim = start(W(), null, S.decomp);
      if (S.pick && !W().ids.includes(S.pick)) S.pick = null;
    }
    const pop = (id) => Math.round(S.sim.pop[id]);
    const trend = (id) => (S.sim.pop[id] <= 0 ? t("none left") : S.sim.pop[id] > P.START + 0.5 ? t("rising") : S.sim.pop[id] < P.START - 0.5 ? t("falling") : t("steady"));
    const defaultPick = () => {
      const w = W();
      const mid = w.ids.filter((i) => w.foods[i].length && w.preds[i].length);
      const pool = mode() === "double" ? w.ids.filter((i) => w.preds[i].length) : mid.length ? mid : w.ids;
      return (pool.includes("frog") ? "frog" : pool[0]) || null;
    };
    const mode = () => (flow && flow.inv ? flow.inv.mode : INVS[0].mode);

    const stageHTML = () => `<div class="fw-exp">
      <p class="vl-warn" data-need hidden>${t("Build part of a food web above first: link at least two organisms. Or tap Complete the web for me.")}</p>
      <div data-pane="pop">
        <div class="vl-ctrl" data-popctl><label for="fw-pick">${t("Population")}</label><select id="fw-pick" data-pick></select></div>
        <div class="sim-btns" data-popbtns>
          <button type="button" class="btn" data-act="remove">${icon("x")} ${t("Remove it")}</button>
          <button type="button" class="btn" data-act="double">${icon("play")} ${t("Double it")}</button>
          <button type="button" class="btn" data-act="none">${icon("reset")} ${t("No change (control)")}</button></div>
      </div>
      <div data-pane="dec">
        <div class="sim-btns" role="group" aria-label="${esc(t("Decomposers"))}">
          <button type="button" class="btn" data-dec="1" aria-pressed="true">${t("Decomposers present")}</button>
          <button type="button" class="btn" data-dec="0" aria-pressed="false">${t("Decomposers removed")}</button></div>
      </div>
      <div data-pane="sim">
        <div class="sim-btns"><button type="button" class="btn primary" data-season="1">${icon("play")} ${t("Next season")}</button>
          <button type="button" class="btn" data-season="5">${t("Run 5 seasons")}</button></div>
        <p class="small muted" data-seasonmsg></p>
        <div class="fw-bars" data-bars aria-hidden="true"></div>
        <div class="sim-btns"><button type="button" class="btn primary" data-vl-run data-record>${icon("check")} ${t("Record this run")}</button></div>
        <p class="small muted" data-recmsg role="status"></p>
      </div>
      <div data-pane="energy">
        <div class="vl-ctrl"><label for="fw-e1">${t("Energy in the producers")}</label>
          <select id="fw-e1" data-e1>${[1000, 10000, 100000].map((v) => `<option value="${v}">${fmtJ(v)} J</option>`).join("")}</select></div>
        <div class="vl-tablewrap"><table class="vl-table" data-etable></table></div>
        <div class="vl-ctrl"><label for="fw-lv">${t("Level to record")}</label><select id="fw-lv" data-lv></select></div>
        <p class="small muted" data-other></p>
        <div class="sim-btns"><button type="button" class="btn primary" data-vl-run data-erecord>${icon("check")} ${t("Record this level")}</button></div>
      </div></div>`;

    function chain() {
      const c = longestChain(realLinks());
      return c.length >= 2 ? c : longestChain(truthLinks(S.hab));
    }

    function expPaint() {
      if (!flow) return;
      const m = mode();
      const sim = m !== "energy";
      const ok = enough();
      const show = (name, on) => {
        const p = el.querySelector(`[data-pane="${name}"]`);
        if (p) p.hidden = !on;
      };
      show("pop", sim && m !== "decomp" && ok);
      show("dec", m === "decomp" && ok);
      show("sim", sim && ok);
      show("energy", !sim);
      $("[data-need]").hidden = !(sim && !ok);
      if (m === "decomp") {
        el.querySelectorAll("[data-dec]").forEach((b) => b.setAttribute("aria-pressed", (b.dataset.dec === "1") === S.decomp));
      }
      if (sim && ok) simPaint();
      if (!sim) energyPaint();
      el.querySelectorAll("[data-vl-run]").forEach((b) => (b.disabled = !flow.predicted || (sim && !ok)));
      if (m === "remove" || m === "double") {
        const w = W();
        const sel = $("[data-pick]");
        if (!S.pick || !w.ids.includes(S.pick)) S.pick = defaultPick();
        sel.innerHTML = w.ids.map((i) => `<option value="${i}">${esc(nm(i))}</option>`).join("");
        sel.value = S.pick || "";
        $('[data-act="remove"]').hidden = m !== "remove";
        $('[data-act="double"]').hidden = m !== "double";
      }
    }

    function simPaint() {
      const w = W();
      const s = S.sim;
      const m = mode();
      $("[data-seasonmsg]").textContent = t("Season {n} of {m}. The model is simple, so it only runs for {m} seasons.", { n: s.season, m: P.SEASONS });
      $("[data-bars]").innerHTML = w.ids
        .map((id) => {
          const v = s.pop[id];
          const w100 = (P.START / P.CAP) * 100;
          return `<div class="fw-bar ${S.change && S.change.id === id ? "is-changed" : ""}"><span class="fw-bn">${esc(nm(id))}</span><span class="fw-track"><i class="fw-fill fw-k-${org(id).kind}" style="width:${Math.max(0, (v / P.CAP) * 100)}%"></i><b class="fw-mark" style="left:${w100}%"></b></span><span class="fw-bv">${Math.round(v)}</span></div>`;
        })
        .join("");
      const rows = w.ids.map((id) => [nm(id), `${pop(id)} · ${trend(id)}`]);
      rows.push([t("Season"), String(s.season)]);
      if (m === "decomp") rows.push([t("Dead remains piled up"), String(Math.round(s.heap))], [t("Nutrients in the soil"), `${Math.round(s.nutr * 100)} %`]);
      flow.live(rows, `${t("Season {n}.", { n: s.season })} ${w.ids.map((id) => `${nm(id)} ${pop(id)}`).join(", ")}${m === "decomp" ? `. ${t("Dead remains piled up")} ${Math.round(s.heap)}.` : ""}`);
      el.querySelectorAll("[data-season]").forEach((b) => (b.disabled = s.season >= P.SEASONS));
    }

    function energyPaint() {
      const c = chain();
      const n = Math.min(c.length, 5);
      const e1 = S.e1;
      if (S.level > n) S.level = n;
      $("[data-e1]").value = String(e1);
      $("[data-etable]").innerHTML = `<caption class="sr-only">${t("Energy at each trophic level")}</caption><thead><tr><th scope="col">${t("Trophic level")}</th><th scope="col">${t("Organism")}</th><th scope="col">${t("Energy (J)")}</th><th scope="col">${t("Share of the producers' energy")}</th></tr></thead><tbody>${c
        .slice(0, n)
        .map((id, i) => `<tr data-elevel="${i + 1}" class="${S.level === i + 1 ? "vl-now" : ""}"><th scope="row">${i + 1} · ${esc(t(LEVEL_NAME[i]))}</th><td>${esc(nm(id))}</td><td data-ej>${fmtJ(energyAt(e1, i + 1))}</td><td>${fmtJ(100 * PASS ** i)} %</td></tr>`)
        .join("")}</tbody>`;
      const lv = $("[data-lv]");
      lv.innerHTML = c.slice(0, n).map((id, i) => `<option value="${i + 1}">${i + 1} · ${esc(nm(id))}</option>`).join("");
      lv.value = String(S.level);
      const e = energyAt(e1, S.level);
      $("[data-other]").textContent = S.level > 1 ? t("Of the energy at level {a}, about {b} J passes on and about {c} J is not passed on: it is used for living (respiration, which gives out heat), left in parts that are not eaten, or lost in waste.", { a: S.level - 1, b: fmtJ(e), c: fmtJ(energyAt(e1, S.level - 1) - e) }) : t("The producers hold the energy they took from sunlight. Each step up the chain gets only about 10% of it.");
      flow.live(c.slice(0, n).map((id, i) => [`${t("Level {n}", { n: i + 1 })} · ${nm(id)}`, `${fmtJ(energyAt(e1, i + 1))} J`]), t("Energy at level {a}: {b} joules.", { a: S.level, b: fmtJ(e) }));
    }

    function record() {
      const m = mode();
      const msg = $("[data-recmsg]");
      if (m !== "energy" && !enough()) return;
      if (m === "energy") {
        const c = chain();
        flow.addRun({ e1: S.e1, level: S.level, who: nm(c[S.level - 1]), energy: energyAt(S.e1, S.level) });
        return;
      }
      if (S.sim.season < 1) {
        msg.textContent = t("Run at least one season before you record.");
        return;
      }
      msg.textContent = "";
      const w = W();
      const s = S.sim;
      if (m === "decomp") {
        const prod = w.ids.filter(isProducer);
        flow.addRun({ change: S.decomp ? t("Present") : t("Removed"), seasons: s.season, heap: s.heap, prod: mean(prod.map((i) => s.pop[i])) });
        return;
      }
      const ch = S.change;
      const list = (ids) => (ids.length ? ids.map((i) => `${nm(i)} ${pop(i)}`).join(", ") : "—");
      flow.addRun({
        change: ch ? (ch.type === "remove" ? t("{x} removed", { x: nm(ch.id) }) : t("{x} doubled", { x: nm(ch.id) })) : t("No change (control)"),
        seasons: s.season,
        food: ch ? list(w.foods[ch.id]) : "—",
        preds: ch ? list(w.preds[ch.id]) : "—",
      });
    }

    function applyChange(type) {
      const w = W();
      S.change = type === "none" || !S.pick ? null : { type, id: S.pick };
      S.sim = start(w, S.change, S.decomp);
      expPaint();
      flow.say(S.change ? t("{x} set. Season 0.", { x: nm(S.change.id) }) : t("No change. Season 0."));
    }

    const FLOW = {
      assumptions: ASSUME,
      columns: COLS.pop,
      investigations: INVS,
      extra: () => ({ habitat: S.hab, links: realLinks().length, levels: levelCount(realLinks()), change: S.change, decomposers: S.decomp }),
      mountStage(slot, F) {
        flow = F;
        slot.innerHTML = stageHTML();
        slot.addEventListener("click", (e) => {
          const a = e.target.closest("[data-act]");
          if (a) return applyChange(a.dataset.act);
          const d = e.target.closest("[data-dec]");
          if (d) {
            S.decomp = d.dataset.dec === "1";
            S.sim = start(W(), null, S.decomp);
            return expPaint();
          }
          const sn = e.target.closest("[data-season]");
          if (sn) {
            const n = Math.min(Number(sn.dataset.season), P.SEASONS - S.sim.season);
            S.sim = run(W(), S.sim, n);
            return simPaint();
          }
          if (e.target.closest("[data-record]")) return record();
          if (e.target.closest("[data-erecord]")) return record();
        });
        slot.addEventListener("change", (e) => {
          if (e.target.matches("[data-pick]")) {
            S.pick = e.target.value;
            S.change = null;
            S.sim = start(W(), null, S.decomp);
            expPaint();
          } else if (e.target.matches("[data-e1]")) {
            S.e1 = Number(e.target.value);
            energyPaint();
          } else if (e.target.matches("[data-lv]")) {
            S.level = Number(e.target.value);
            energyPaint();
          }
        });
      },
      onInvestigation() {
        S.decomp = true;
        S.change = null;
        S.pick = null;
        S.sim = start(W(), null, true);
        expPaint();
      },
    };

    chips();
    resetSim();
    flow = Labs.flow($("[data-flowhost]"), api, FLOW);
    // the prediction unlocks the record buttons
    $("[data-flowhost]").addEventListener("click", () => setTimeout(expPaint, 0));
    paint();
    expPaint();
  }

  Labs.register("foodweb", {
    title: "Food-web rescue",
    area: "biology",
    icon: "target",
    objective: "Build food chains and a food web in a pond, a grassland and a forest by linking the food to the one that eats it. Find the trophic levels, then see what happens when a population is removed or doubled, when the decomposers are taken away, and how only 10% of the energy passes on at each step.",
    chapters: [
      { cls: 3, subject: "evs", chapter: "animals-around-us" },
      { cls: 5, subject: "evs", chapter: "forests-and-forest-people" },
      { cls: 6, subject: "sciencepb", chapter: "living-organisms-and-their-surroundings" },
      { cls: 8, subject: "science", chapter: "how-nature-works-in-harmony" },
      { cls: 10, subject: "science", chapter: "our-environment" },
      { cls: 12, subject: "biology", chapter: "organisms-and-populations" },
      { cls: 12, subject: "biology", chapter: "ecosystem" },
    ],
    mount,
  });
})();
