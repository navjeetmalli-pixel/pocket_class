// India map explorer (World Explorer): the interactive lab on top of the drawn map in js/labs/india-map.js.
//
// Five modes, each tied to one investigation (predict, change one variable, observe, explain) and an experiment record:
//   Explore      tap a state or Union Territory: capital, region, neighbours, coast, rivers; direction and distance from a start place
//   Find it      "find Punjab", "find the state whose capital is Jaipur", "tap the river Narmada"; after a wrong tap a clue (neighbours,
//                region), after two wrong taps the place is highlighted; scored 2 / 1 / 0 for each place, five places in a set
//   Place it     drag a label onto its state (or tap the label, then the state, or pick the state in the list)
//   Layers       rivers, mountain ranges, plateaus, desert, the six physical divisions; which rivers flow west into the Arabian Sea?
//   Punjab       a close-up of Punjab: neighbours, the Sutlej, Beas and Ravi, and Majha, Doaba and Malwa
//
// Every state is reachable without a pointer: the list of places beside the map selects the same thing as a tap. The map is
// not to scale and is simplified for learning (Labs: js/labs/india-map.js). Directions and distances are straight lines
// between capital cities, worked out from the map's own coordinates.

(() => {
  const M = IndiaMap;
  const ST = M.STATES;
  const BY = M.byId;
  const C = M.calc;
  let uid = 0;

  const SHARED_CAP = new Set(["punjab", "haryana", "chandigarh"]);
  const ISLANDS = new Set(["andaman", "lakshadweep"]);
  const FIND_KINDS = ["states", "capitals", "physical"];
  const FIND_KIND_NAME = { states: "States and Union Territories", capitals: "Capitals", physical: "Rivers and mountains" };
  const PLACE_GROUPS = {
    west: { name: "West coast", ids: ["gujarat", "maharashtra", "goa", "karnataka", "kerala"] },
    east: { name: "East coast", ids: ["westbengal", "odisha", "andhrapradesh", "tamilnadu"] },
    ne: { name: "North-East", ids: ["arunachalpradesh", "assam", "nagaland", "manipur", "mizoram", "tripura", "meghalaya", "sikkim"] },
    south: { name: "Southern states", ids: ["andhrapradesh", "telangana", "karnataka", "kerala", "tamilnadu"] },
    uts: { name: "Union Territories", ids: ["andaman", "chandigarh", "dnhdd", "delhi", "jammukashmir", "ladakh", "lakshadweep", "puducherry"] },
  };
  const PLACE_ORDER = Object.keys(PLACE_GROUPS);
  const LAYERS = ["rivers", "ranges", "plateaus", "deserts", "regions"];
  const LAYER_NAME = { rivers: "Rivers", ranges: "Mountain ranges", plateaus: "Plateaus", deserts: "Desert", regions: "Physical divisions" };
  const PUNJAB_REGIONS = {
    majha: { name: "Majha", between: "Between the Ravi and the Beas", towns: ["Amritsar", "Gurdaspur"], at: [74.85, 31.7] },
    doaba: { name: "Doaba", between: "Between the Beas and the Sutlej", towns: ["Jalandhar", "Hoshiarpur"], at: [75.85, 31.5] },
    malwa: { name: "Malwa", between: "South of the Sutlej", towns: ["Ludhiana", "Patiala", "Bathinda"], at: [75.5, 30.2] },
  };
  const PUNJAB_ORDER = Object.keys(PUNJAB_REGIONS);
  // The Punjab close-up window (longitude, latitude).
  const PB_VIEW = [73.5, 29.3, 77.6, 33.0];
  const START = "assam";
  // Where the names go in the Punjab close-up: [longitude, latitude, text-anchor]. Pakistan is a neighbour but not a state, so it is listed too.
  const PB_LABELS = { punjab: [74.95, 30.8, "middle"], haryana: [76.0, 29.6, "middle"], himachalpradesh: [76.65, 32.25, "middle"], rajasthan: [73.6, 29.78, "start"], jammukashmir: [75.1, 32.8, "middle"], chandigarh: [77.55, 30.5, "end"] };
  const MODE_NAMES = ["Explore", "Find it", "Place it", "Layers", "Punjab close-up"];

  const HELP_TEXT = () => ({
    explore: "Tap a state or Union Territory to see its capital, neighbours, coast and rivers, and the direction and distance from the start place.",
    find: "Find the place that is asked for. A clue comes after a wrong tap, and the place is highlighted after two wrong taps.",
    place: "Drag each label onto the right place. You can also tap a label and then tap the state.",
    layers: "Turn layers on to see rivers, mountains, plateaus, the desert and the physical divisions. Tap a river or a feature to read about it.",
    punjab: "A close-up of Punjab: its neighbours, the rivers Sutlej, Beas and Ravi, and the regions Majha, Doaba and Malwa.",
  });
  const DIV_TEXT_DATA = () => ({
    mountains: "The Himalaya in the north and the hills of the north-east. Young fold mountains with snow, glaciers and the sources of big rivers.",
    plains: "The Northern Plains, made of soil laid down by the Indus, Ganga and Brahmaputra. Flat, fertile and crowded.",
    plateau: "The Peninsular Plateau, one of the oldest landmasses. It is bounded by the Aravalli, the Western Ghats and the Eastern Ghats and includes the Deccan and the Chota Nagpur plateaus.",
    desert: "The Indian Desert (Thar) lies west of the Aravalli, mostly in Rajasthan. Very little rain falls there.",
    coastal: "The Coastal Plains lie between the Ghats and the sea: a narrow strip on the west coast and a broader one, with big deltas, on the east coast.",
  });
  const FACTS = [
    ["Which rivers flow west into the Arabian Sea?", "Among the big rivers of the peninsula only the Narmada and the Tapi flow west. They run in rift valleys, long narrow troughs where the land sank between cracks that run east to west. The Indus also reaches the Arabian Sea, but it comes from the Himalaya and flows through Pakistan."],
    ["Which mountain range lies between the Narmada valley and the Tapi valley?", "The Satpura Range. The Narmada flows west between the Vindhya and Satpura ranges, and the Tapi flows west south of the Satpura."],
    ["Which rivers flow east across the Deccan Plateau?", "The Godavari, Krishna and Kaveri. The plateau slopes gently towards the east, so they flow into the Bay of Bengal and make deltas."],
    ["Where is the Thar Desert, and which range lies on its eastern edge?", "The Thar Desert is in western Rajasthan. The Aravalli Range lies along its eastern edge."],
  ];

  // Study questions for the investigations (the strings are translated in js/labs/i18n.js).
  const INVS = [
    {
      id: "direction",
      mode: "explore",
      title: "Directions and distances",
      question: "You start in Assam. In which direction is Kerala?",
      columns: [
        { key: "from", label: "Start" },
        { key: "to", label: "Destination", var: true },
        { key: "dir", label: "Direction" },
        { key: "km", label: "Distance", unit: "km", d: 0 },
      ],
      predict: { opts: ["South-west", "North-east", "South-east"], ans: 0 },
      vary: "to",
      held: ["The start (Assam)", "The map"],
      go: "Tap a state or Union Territory to see its direction and distance from the start. Press Record this journey. Record at least two different places.",
      explain: {
        q: "Why did the direction and distance change when you chose a different place?",
        opts: [
          "A direction is measured from the start place, so each destination has its own direction. A place that is farther away gives a longer distance on the scale bar",
          "Each place has one direction that is the same from everywhere",
          "Direction and distance do not change when the destination changes",
        ],
        ans: 0,
        why: "North is at the top of the map (see the north arrow). Direction depends on where you start: from Assam, Kerala is to the south-west but Arunachal Pradesh is to the north-east. The scale bar tells you how many kilometres one length on the map stands for, so a farther place gives a longer distance. These are straight lines between the capital cities, not road distances.",
      },
      graph: { x: "run", y: "km" },
    },
    {
      id: "find",
      mode: "find",
      title: "Find places",
      question: "You cannot find a state on the map. What helps you most to find it?",
      columns: [
        { key: "kind", label: "Kind of place", var: true },
        { key: "first", label: "Found on the first try", d: 0 },
        { key: "clues", label: "Clues used", d: 0 },
        { key: "score", label: "Score", unit: "of 10", d: 0 },
      ],
      predict: { opts: ["Knowing which states are next to it", "Knowing the first letter of its name", "Knowing its colour on the map"], ans: 0 },
      vary: "kind",
      held: ["The map", "Five places in each set"],
      go: "Choose a kind of place. Find five places on the map. After a wrong tap you get a clue, and after two wrong taps the place is highlighted. Finish at least two kinds.",
      explain: {
        q: "What do your sets show about finding places?",
        opts: [
          "Clues about what is next to a place, and where it is, help me find a place I do not know",
          "I can only find a place by remembering its colour",
          "Clues do not help, because every place has to be remembered on its own",
        ],
        ans: 0,
        why: "A place is easiest to find when you use what is around it: the states next to it, the sea, a river or a mountain range. That is why map reading uses neighbours and landmarks, not only memory of names. The clues in this lab are of that kind.",
      },
      graph: { x: "run", y: "score" },
    },
    {
      id: "place",
      mode: "place",
      title: "Place the labels",
      question: "In what order do the states lie along the west coast, going south from Gujarat? Which one comes after Maharashtra?",
      columns: [
        { key: "group", label: "Group of places", var: true },
        { key: "placed", label: "Labels placed", d: 0 },
        { key: "wrong", label: "Wrong tries", d: 0 },
      ],
      predict: { opts: ["Goa", "Kerala", "Tamil Nadu"], ans: 0 },
      vary: "group",
      held: ["The map", "Each label goes on one state or Union Territory"],
      go: "Choose a group. Drag each label onto its state, or tap the label and then the state. Place all the labels of at least two groups.",
      explain: {
        q: "What do your groups show about where places are?",
        opts: [
          "Places that are next to each other come one after another, so you can follow a coast or a border from one to the next. On the west coast, going south: Gujarat, Maharashtra, Goa, Karnataka, Kerala",
          "States on a coast are in alphabetical order",
          "States on a coast are in no order at all",
        ],
        ans: 0,
        why: "Coastal states come one after another along the sea. On the west coast, going south, you cross Gujarat, Maharashtra, Goa, Karnataka and Kerala. On the east coast, going south, you cross West Bengal, Odisha, Andhra Pradesh and Tamil Nadu. Knowing the order helps you place the states that lie between.",
      },
      graph: { x: "run", y: "wrong" },
    },
    {
      id: "west",
      mode: "layers",
      title: "Which rivers flow west?",
      question: "Which rivers flow west into the Arabian Sea?",
      columns: [
        { key: "river", label: "River" },
        { key: "flows", label: "Flows into", var: true },
      ],
      predict: { opts: ["Narmada and Tapi", "Godavari and Krishna", "Ganga and Yamuna"], ans: 0 },
      vary: "flows",
      held: ["The map", "The rivers layer"],
      go: "Turn on the Rivers layer. Tap a river to see where it flows. Press Record this river. Record at least one river that flows west and one that flows east.",
      explain: {
        q: "Why do the Narmada and the Tapi flow west when most rivers of the peninsula flow east?",
        opts: [
          "They flow in rift valleys that run from east to west, while the rest of the peninsular plateau slopes towards the east",
          "Every river flows towards the nearest sea",
          "A river flows west when it starts in the Himalaya",
        ],
        ans: 0,
        why: "The Narmada and the Tapi flow through rift valleys: long, narrow troughs where the land sank between two cracks that run east to west. The Narmada flows between the Vindhya and Satpura ranges, and the Tapi flows south of the Satpura. The rest of the peninsular plateau slopes gently east, so the Godavari, Krishna, Kaveri and Mahanadi flow into the Bay of Bengal and build deltas. The Narmada and Tapi have no delta; they end in estuaries. The Godavari starts near the west coast but still flows east, so a river does not simply flow to the nearest sea.",
      },
    },
    {
      id: "punjab",
      mode: "punjab",
      title: "Punjab close-up",
      question: "Doaba means two waters. Between which two rivers does the Doaba region of Punjab lie?",
      columns: [
        { key: "region", label: "Region of Punjab", var: true },
        { key: "between", label: "Lies" },
        { key: "towns", label: "Example districts" },
      ],
      predict: { opts: ["Between the Beas and the Sutlej", "Between the Ravi and the Beas", "Between the Sutlej and the Ghaggar"], ans: 0 },
      vary: "region",
      held: ["The map of Punjab", "The three rivers: Sutlej, Beas and Ravi"],
      go: "Tap Majha, Doaba or Malwa. See the rivers on the close-up of Punjab. Press Record this region. Record at least two regions.",
      explain: {
        q: "What do your regions show?",
        opts: [
          "Each region of Punjab lies in a different place in relation to the rivers: Majha is between the Ravi and the Beas, Doaba between the Beas and the Sutlej, and Malwa is south of the Sutlej",
          "The regions of Punjab are named after the neighbouring states",
          "All three regions lie to the north of the Beas",
        ],
        ans: 0,
        why: "Doab comes from do (two) and ab (water): land between two rivers. Majha lies between the Ravi and the Beas, Doaba between the Beas and the Sutlej, and Malwa south of the Sutlej. Punjab means the land of five waters; today the Sutlej, Beas and Ravi flow through Indian Punjab, while the Chenab and the Jhelum are in Jammu and Kashmir and Pakistan.",
      },
    },
  ];
  const ASSUME = "The map is simplified and not to scale: a few dozen points for each state, drawn by hand in the style of a school atlas. Rivers, ranges and plateaus are drawn as lines and areas of an atlas, not from survey data. Directions and distances are straight lines between capital cities, worked out from the map. The external boundary is as depicted by the Survey of India.";

  // ---------- question banks for Find it ----------
  const STATE_ORDER = ["punjab", "kerala", "rajasthan", "assam", "odisha", "gujarat", "tripura", "uttarakhand", "chhattisgarh", "goa", "karnataka", "bihar", "sikkim", "maharashtra", "tamilnadu", "haryana", "arunachalpradesh", "madhyapradesh", "westbengal", "telangana", "uttarpradesh", "andhrapradesh", "himachalpradesh", "jharkhand", "manipur", "nagaland", "meghalaya", "mizoram", "delhi", "jammukashmir", "ladakh", "chandigarh", "puducherry", "dnhdd", "lakshadweep", "andaman"];
  const CAP_ORDER = ["rajasthan", "uttarpradesh", "tamilnadu", "kerala", "assam", "maharashtra", "karnataka", "odisha", "bihar", "gujarat", "madhyapradesh", "westbengal", "telangana", "andhrapradesh", "chhattisgarh", "jharkhand", "uttarakhand", "himachalpradesh", "goa", "sikkim", "tripura", "manipur", "meghalaya", "mizoram", "nagaland", "arunachalpradesh", "delhi", "ladakh", "puducherry", "lakshadweep", "andaman", "dnhdd"];
  const PHYS_ORDER = [["river", "narmada"], ["range", "aravalli"], ["river", "godavari"], ["desert", "thar"], ["range", "himalaya"], ["river", "ganga"], ["range", "wghats"], ["river", "brahmaputra"], ["plateau", "deccan"], ["river", "kaveri"], ["range", "vindhya"], ["river", "krishna"], ["range", "satpura"], ["river", "sutlej"], ["range", "eghats"], ["river", "mahanadi"], ["plateau", "chotanagpur"], ["river", "yamuna"], ["river", "tapi"], ["river", "indus"]];
  const bank = (kind) => (kind === "states" ? STATE_ORDER.map((id) => ["state", id]) : kind === "capitals" ? CAP_ORDER.map((id) => ["cap", id]) : PHYS_ORDER);
  const FEAT = { river: M.RIVERS, range: M.RANGES, plateau: M.PLATEAUS, desert: M.DESERTS };
  const featOf = (type, id) => FEAT[type].find((f) => f.id === id);
  const inStates = (kind, id) => ST.filter((s) => (kind === "river" ? s.rivers : s.feats).includes(id)).map((s) => s.id);

  const dirKm = (a, b) => {
    const p = BY[a].cap, q = BY[b].cap;
    return { dir: C.compass(C.bearing(p, q)), km: Math.round(C.distance(p, q) / 10) * 10 };
  };

  // Ridge marks (small triangles) along a range line.
  function ridge(parts) {
    let out = "";
    for (const part of parts) {
      const pts = part.map((p) => M.proj(p[0], p[1]));
      let carry = 0;
      for (let i = 0; i < pts.length - 1; i++) {
        const [x1, y1] = pts[i], [x2, y2] = pts[i + 1];
        const len = Math.hypot(x2 - x1, y2 - y1);
        let d = carry;
        while (d <= len) {
          const x = x1 + ((x2 - x1) * d) / (len || 1), y = y1 + ((y2 - y1) * d) / (len || 1);
          out += `M${(x - 3.2).toFixed(1)} ${(y + 2.2).toFixed(1)}L${x.toFixed(1)} ${(y - 3.6).toFixed(1)}L${(x + 3.2).toFixed(1)} ${(y + 2.2).toFixed(1)}Z`;
          d += 8;
        }
        carry = d - len;
      }
    }
    return out;
  }
  const RIDGES = {};
  M.RANGES.forEach((r) => (RIDGES[r.id] = ridge(r.parts)));
  const ALL_D = ST.map((s) => s.d).join("");
  const midPt = (pts) => M.proj(...pts[Math.floor(pts.length / 2)]);
  const areaPt = (pts) => M.proj(pts.reduce((a, p) => a + p[0], 0) / pts.length, pts.reduce((a, p) => a + p[1], 0) / pts.length);

  // Every string that reaches the screen through a data table instead of a direct call of t, so the checks can test its translations.
  const STRINGS = [
    ...MODE_NAMES, ...Object.values(HELP_TEXT()), ...Object.values(FIND_KIND_NAME), ...Object.values(LAYER_NAME), ...Object.values(DIV_TEXT_DATA()),
    ...Object.values(PLACE_GROUPS).map((g) => g.name), ...Object.values(PUNJAB_REGIONS).flatMap((r) => [r.name, r.between, ...r.towns]),
    ...FACTS.flat(), "Union Territory", "State", "International boundary", "State or Union Territory", "Capital", "Mountain range", "Plateau", "Desert", "River", "Physical division", "Region of Punjab",
    ...ST.flatMap((s) => [s.name, s.capital, s.region, ...s.coast, ...s.borders]), ...M.RIVERS.flatMap((r) => [r.name, r.into]), ...M.RANGES.map((r) => r.name), ...M.PLATEAUS.map((r) => r.name), ...M.DESERTS.map((r) => r.name),
    ...M.REGIONS.map((r) => r.name), ...M.LABELS.map((l) => l[0]), ...C.COMPASS,
  ];
  Labs.calc.indiamap = { STRINGS, MODE_NAMES, INVS, ASSUME, FACTS, PLACE_GROUPS, PUNJAB_REGIONS, LAYER_NAME, FIND_KIND_NAME, STATE_ORDER, CAP_ORDER, PHYS_ORDER, SHARED_CAP, ISLANDS, dirKm, bank, inStates, M };

  function mount(el, api) {
    const n = ++uid;
    const S = {
      mode: "explore", sel: null, start: START, z: 1, cx: M.W / 2, cy: M.H / 2, names: true, caps: false,
      layers: { rivers: false, ranges: false, plateaus: false, deserts: false, regions: false },
      feat: null, // { type, id } selected river / range / plateau / desert / region
      find: null, rounds: { states: 0, capitals: 0, physical: 0 }, fkind: "states",
      place: null, pgroup: "west", psel: null,
      preg: null,
    };
    let flow = null;
    const nm = (id) => t(BY[id].name);
    const cp = (id) => t(BY[id].capital);
    const list = (ids) => ids.map(nm).join(", ");
    const $ = (s) => el.querySelector(s);
    const mode = () => S.mode;

    el.innerHTML = `<div class="card im-card">
      <div class="im-modes" role="radiogroup" aria-label="${esc(t("Choose what to do with the map"))}">${INVS.map((v, i) => `<button type="button" class="option im-mode" role="radio" aria-checked="false" data-mode="${v.mode}" data-i="${i}"><span>${t(MODE_NAMES[i])}</span></button>`).join("")}</div>
      <p class="small im-help" data-help></p>
      <div class="im-wrap">
        <div class="im-mapcol">
          <div class="im-tools" role="group" aria-label="${esc(t("Map controls"))}">
            <button type="button" class="btn im-t" data-zoom="in" aria-label="${esc(t("Zoom in"))}">+</button>
            <button type="button" class="btn im-t" data-zoom="out" aria-label="${esc(t("Zoom out"))}">−</button>
            <button type="button" class="btn im-t" data-zoom="reset" aria-label="${esc(t("Whole map"))}">${icon("reset")}</button>
            <span class="im-sep" aria-hidden="true"></span>
            <button type="button" class="btn im-t" data-pan="l" aria-label="${esc(t("Move the map left"))}">←</button>
            <button type="button" class="btn im-t" data-pan="u" aria-label="${esc(t("Move the map up"))}">↑</button>
            <button type="button" class="btn im-t" data-pan="d" aria-label="${esc(t("Move the map down"))}">↓</button>
            <button type="button" class="btn im-t" data-pan="r" aria-label="${esc(t("Move the map right"))}">→</button>
          </div>
          <div class="im-mapbox"><svg class="im-svg" data-svg role="group" aria-label="${esc(t("Map of India. Use the list of places beside the map to choose a place with the keyboard."))}"></svg></div>
          <p class="tiny muted im-disc">${t("Map not to scale; simplified for learning")}. ${t("The external boundary of India is as depicted by the Survey of India.")}</p>
          <ul class="im-legend tiny" data-legend aria-label="${esc(t("Key to the map"))}"></ul>
        </div>
        <div class="im-side">
          <div class="feedback neutral im-info" data-info role="status" aria-live="polite"></div>
          <div data-panel></div>
          <details class="im-listbox" data-listbox><summary>${t("List of places (for the keyboard and screen readers)")}</summary>
            <div class="im-list" role="group" aria-label="${esc(t("States and Union Territories"))}" data-list></div></details>
        </div>
      </div>
    </div>
    <div class="im-flow" data-flowhost></div>`;

    // ----- the map -----
    const viewBox = () => {
      if (S.mode === "punjab") {
        const [x0, y1] = M.proj(PB_VIEW[0], PB_VIEW[1]);
        const [x1, y0] = M.proj(PB_VIEW[2], PB_VIEW[3]);
        return { x: x0, y: y0, w: x1 - x0, h: y1 - y0, z: M.W / (x1 - x0) };
      }
      const w = M.W / S.z, h = M.H / S.z;
      const x = Math.max(0, Math.min(M.W - w, S.cx - w / 2));
      const y = Math.max(0, Math.min(M.H - h, S.cy - h / 2));
      return { x, y, w, h, z: S.z };
    };
    const feature = () => S.feat;
    const showLayer = (k) => S.layers[k] || (S.mode === "find" && S.fkind === "physical" && ["rivers", "ranges", "plateaus", "deserts"].includes(k)) || (S.mode === "punjab" && k === "rivers");
    const legendItems = () => {
      const v = (cls, label) => `<li><svg viewBox="0 0 28 14" aria-hidden="true">${cls}</svg><span>${t(label)}</span></li>`;
      const out = [v(`<path d="M2 12 L26 2" class="im-bnd"/>`, "International boundary"), v(`<rect x="3" y="2" width="22" height="10" class="im-lg-st"/>`, "State or Union Territory")];
      if (S.caps || S.mode === "explore") out.push(v(`<circle cx="14" cy="7" r="3.4" class="im-cap"/>`, "Capital"));
      if (showLayer("rivers")) out.push(v(`<path d="M2 11 C9 2 15 12 26 3" class="im-riv"/>`, "River"));
      if (showLayer("ranges")) out.push(v(`<path d="M3 12 L8 3 L13 12 M13 12 L18 3 L23 12" class="im-rng"/>`, "Mountain range"));
      if (showLayer("plateaus")) out.push(v(`<rect x="3" y="2" width="22" height="10" fill="url(#im${n}-plat)" class="im-ov"/>`, "Plateau"));
      if (showLayer("deserts")) out.push(v(`<rect x="3" y="2" width="22" height="10" fill="url(#im${n}-des)" class="im-ov"/>`, "Desert"));
      if (S.layers.regions && S.mode === "layers") PHYS_DIV.forEach(([id, label]) => out.push(v(`<rect x="3" y="2" width="22" height="10" fill="url(#im${n}-r-${id})" class="im-ov"/>`, label)));
      return out.join("");
    };
    const PHYS_DIV = M.REGIONS.map((r) => [r.id, r.name]);

    function patterns() {
      const p = (id, inner) => `<pattern id="im${n}-${id}" patternUnits="userSpaceOnUse" width="7" height="7">${inner}</pattern>`;
      return `<defs>
        <clipPath id="im${n}-clip"><path d="${ALL_D}"/></clipPath>
        ${p("plat", `<rect width="7" height="7" class="im-pb-plat"/><path d="M-1 8 L8 -1 M-1 1 L1 -1 M6 8 L8 6" class="im-pl-plat"/>`)}
        ${p("des", `<rect width="7" height="7" class="im-pb-des"/><circle cx="2" cy="2" r="1" class="im-pl-des"/><circle cx="5.5" cy="5.5" r="1" class="im-pl-des"/>`)}
        ${p("r-mountains", `<rect width="7" height="7" class="im-pb-mtn"/><path d="M0.5 6 L3.5 1 L6.5 6" class="im-pl-mtn"/>`)}
        ${p("r-plains", `<rect width="7" height="7" class="im-pb-pln"/><path d="M0 2 H7 M0 5.5 H7" class="im-pl-pln"/>`)}
        ${p("r-plateau", `<rect width="7" height="7" class="im-pb-plat"/><path d="M-1 8 L8 -1 M-1 1 L1 -1 M6 8 L8 6" class="im-pl-plat"/>`)}
        ${p("r-desert", `<rect width="7" height="7" class="im-pb-des"/><circle cx="2" cy="2" r="1" class="im-pl-des"/><circle cx="5.5" cy="5.5" r="1" class="im-pl-des"/>`)}
        ${p("r-coastal", `<rect width="7" height="7" class="im-pb-cst"/><path d="M0 3.5 Q1.75 1.5 3.5 3.5 T7 3.5" class="im-pl-cst"/>`)}
      </defs>`;
    }

    function paintMap() {
      const vb = viewBox();
      const svg = $("[data-svg]");
      svg.setAttribute("viewBox", `${vb.x.toFixed(1)} ${vb.y.toFixed(1)} ${vb.w.toFixed(1)} ${vb.h.toFixed(1)}`);
      svg.style.setProperty("--z", vb.z.toFixed(2));
      svg.style.setProperty("--fs", S.mode === "punjab" ? "16px" : "13px");
      svg.style.setProperty("--ff", S.mode === "punjab" ? "14px" : "10.5px");
      svg.style.setProperty("--fg", S.mode === "punjab" ? "15px" : "11px");
      svg.classList.toggle("im-z2", vb.z >= 2);
      const m = S.mode;
      const full = vb.z >= 2;
      const pq = m === "find" && S.fkind === "physical";
      let h = patterns();
      h += `<rect class="im-sea" x="0" y="0" width="${M.W}" height="${M.H}"/><path class="im-land" d="${M.NEIGHBOURS_D}"/><path class="im-land" d="${M.SRILANKA_D}"/>`;
      // country and sea names
      h += M.LABELS.map(([txt, lo, la, k]) => {
        const [x, y] = M.proj(lo, la);
        return `<text class="im-geo im-g-${k}" x="${x}" y="${y}" text-anchor="middle" aria-hidden="true">${esc(t(txt))}</text>`;
      }).join("");
      // states
      h += ST.map((s) => {
        const cls = ["im-st", `im-c${s.color}`, ISLANDS.has(s.id) ? "im-isle" : "", S.sel === s.id && (m === "explore" || m === "punjab" || m === "layers") ? "sel" : "", flagClass(s.id)].filter(Boolean).join(" ");
        return `<path class="${cls}" d="${s.d}" data-st="${s.id}" role="button" tabindex="-1" aria-label="${esc(nm(s.id))}"${S.sel === s.id ? ' aria-pressed="true"' : ""}/>`;
      }).join("");
      // overlays clipped to India
      let ov = "";
      if (S.layers.regions && m === "layers") ov += M.REGIONS.map((r) => `<path class="im-ov im-rn${feature() && feature().type === "region" && feature().id === r.id ? " sel" : ""}" fill="url(#im${n}-r-${r.id})" d="${r.d}" data-rn="${r.id}"/>`).join("");
      if (showLayer("plateaus")) ov += M.PLATEAUS.map((r) => `<path class="im-ov im-pl${isSel("plateau", r.id)}" fill="url(#im${n}-plat)" d="${r.d}" data-pl="${r.id}"/>`).join("");
      if (showLayer("deserts")) ov += M.DESERTS.map((r) => `<path class="im-ov im-ds${isSel("desert", r.id)}" fill="url(#im${n}-des)" d="${r.d}" data-ds="${r.id}"/>`).join("");
      if (ov) h += `<g clip-path="url(#im${n}-clip)">${ov}</g>`;
      // ranges, rivers
      if (showLayer("ranges")) h += M.RANGES.map((r) => `<g class="im-rg${isSel("range", r.id)}"><path class="im-rghit" d="${r.d}" data-rg="${r.id}"/><path class="im-rng" d="${RIDGES[r.id]}"/></g>`).join("");
      if (showLayer("rivers")) {
        const only = m === "punjab" ? new Set(["sutlej", "beas", "ravi", "chenab", "jhelum"]) : null;
        h += M.RIVERS.filter((r) => !only || only.has(r.id))
          .map((r) => `<g class="im-rv${isSel("river", r.id)}"><path class="im-rvhit" d="${r.d}" data-rv="${r.id}"/><path class="im-riv${only && !["sutlej", "beas", "ravi"].includes(r.id) ? " im-thin" : ""}" d="${r.d}"/>${r.dc ? `<path class="im-riv im-cont" d="${r.dc}"/>` : ""}</g>`)
          .join("");
      }
      h += `<path class="im-bnd" d="${M.BOUNDARY_D}"/>`;
      // tiny places get a ring so they can be tapped
      h += ST.filter((s) => s.mark)
        .map((s) => {
          const [x, y] = M.proj(s.mark[0], s.mark[1]);
          return `<circle class="im-mark${S.sel === s.id ? " sel" : ""}" cx="${x}" cy="${y}" r="${(7 / vb.z).toFixed(2)}" data-st="${s.id}" aria-hidden="true"/>`;
        })
        .join("");
      // capitals
      const capIds = new Set();
      if (m === "explore" && S.caps) ST.forEach((s) => capIds.add(s.id));
      if (m === "layers" && S.caps) ST.forEach((s) => capIds.add(s.id));
      if (S.sel && (m === "explore" || m === "punjab")) capIds.add(S.sel);
      if (m === "explore") capIds.add(S.start);
      if (m === "punjab") ["punjab", "haryana"].forEach((x) => capIds.add(x));
      h += [...capIds].map((id) => {
        const [x, y] = M.proj(BY[id].cap[0], BY[id].cap[1]);
        const k = 1 / vb.z;
        return `<g aria-hidden="true">${id === S.start && m === "explore" ? `<path class="im-start" d="M${x} ${y - 7 * k}L${x + 6 * k} ${y}L${x} ${y + 7 * k}L${x - 6 * k} ${y}Z"/>` : ""}<circle class="im-cap" cx="${x}" cy="${y}" r="${(3 * k).toFixed(2)}"/></g>`;
      }).join("");
      // labels
      const showLab = S.names && (m === "explore" || m === "layers" || m === "punjab");
      if (showLab) {
        h += ST.map((s) => {
          if (m === "punjab" && !PB_LABELS[s.id]) return "";
          const at = m === "punjab" ? PB_LABELS[s.id] : [s.lp[0], s.lp[1], "middle"];
          const [x, y] = M.proj(at[0], at[1]);
          const txt = full || m === "punjab" ? nm(s.id) : s.code;
          return `<text class="im-lab${s.tiny ? " im-labt" : ""}" x="${x}" y="${y}" text-anchor="${at[2]}" aria-hidden="true">${esc(txt)}</text>`;
        }).join("");
      }
      if (m === "place" && S.place) {
        h += Object.keys(S.place.done).map((id) => {
          const [x, y] = M.proj(BY[id].lp[0], BY[id].lp[1]);
          return `<text class="im-lab im-placed${BY[id].tiny ? " im-labt" : ""}" x="${x}" y="${y}" text-anchor="middle" aria-hidden="true">✓ ${esc(full ? nm(id) : BY[id].code)}</text>`;
        }).join("");
      }
      // feature names for the layers
      if (m === "layers" || pq) {
        const lab = (txt, x, y, k) => `<text class="im-fl im-fl-${k}" x="${x}" y="${y}" text-anchor="middle" aria-hidden="true">${esc(t(txt))}</text>`;
        if (m === "layers" && S.names) {
          if (S.layers.rivers) M.RIVERS.filter((r) => ["ganga", "brahmaputra", "godavari", "krishna", "kaveri", "narmada", "tapi", "mahanadi", "indus", "yamuna"].includes(r.id)).forEach((r) => {
            const [x, y] = midPt(r.pts);
            h += lab(r.name, x, y - 3, "rv");
          });
          if (S.layers.ranges) M.RANGES.forEach((r) => {
            const [x, y] = midPt(r.parts[0]);
            h += lab(r.name, x, y - 6, "rg");
          });
          if (S.layers.plateaus) M.PLATEAUS.concat(M.DESERTS).forEach((r) => {
            const [x, y] = areaPt(r.pts);
            h += lab(r.name, x, y, "pl");
          });
        }
      }
      if (m === "punjab") {
        const [px, py] = M.proj(73.75, 31.4);
        h += `<text class="im-geo im-g-land" x="${px}" y="${py}" text-anchor="middle" aria-hidden="true">${esc(t("Pakistan"))}</text>`;
        PUNJAB_ORDER.forEach((id) => {
          const r = PUNJAB_REGIONS[id];
          const [x, y] = M.proj(r.at[0], r.at[1]);
          h += `<text class="im-reg${S.preg === id ? " sel" : ""}" x="${x}" y="${y}" text-anchor="middle" aria-hidden="true">${esc(t(r.name))}</text>`;
        });
        [["sutlej", 75.35, 30.95], ["beas", 75.7, 31.78], ["ravi", 75.15, 32.1]].forEach(([id, lo, la]) => {
          const [x, y] = M.proj(lo, la);
          h += `<text class="im-fl im-fl-rv" x="${x}" y="${y}" text-anchor="middle" aria-hidden="true">${esc(t(featOf("river", id).name))}</text>`;
        });
      }
      // scale bar and north arrow
      const kmu = 111.2 / M.SY;
      const want = vb.w * 0.24 * kmu;
      const nice = [1000, 500, 200, 100, 50, 20].find((k) => k <= want) || 20;
      const len = nice / kmu;
      const bx = vb.x + vb.w * 0.04, by = vb.y + vb.h * 0.96;
      const u = 1 / vb.z;
      h += `<g class="im-scale" aria-hidden="true"><path d="M${bx} ${by - 4 * u}V${by}H${bx + len}V${by - 4 * u}" fill="none"/><text x="${bx}" y="${by - 7 * u}" style="font-size:${(11 * u).toFixed(2)}px">${nice} km</text></g>`;
      const nx = vb.x + vb.w * 0.94, ny = vb.y + vb.h * 0.04;
      h += `<g class="im-north" aria-hidden="true"><path d="M${nx} ${ny}l${5 * u} ${16 * u}l${-5 * u} ${-4 * u}l${-5 * u} ${4 * u}z"/><text x="${nx}" y="${ny + 28 * u}" text-anchor="middle" style="font-size:${(12 * u).toFixed(2)}px">${t("N")}</text></g>`;
      svg.innerHTML = h;
      $("[data-legend]").innerHTML = legendItems();
    }
    const isSel = (type, id) => (S.feat && S.feat.type === type && S.feat.id === id ? " sel" : "") + (S.mode === "find" && S.find && S.find.hint && S.find.hint.type === type && S.find.hint.id === id ? " hint" : "");
    // classes that show right / wrong / hint feedback on a state
    function flagClass(id) {
      const f = S.find;
      if (S.mode === "find" && f && !f.done && f.flash && f.flash.id === id) return f.flash.kind;
      if (S.mode === "find" && f && !f.done && f.hint && f.hint.type === "state" && f.hint.id === id) return "hint";
      if (S.mode === "place" && S.place && S.place.flash && S.place.flash.id === id) return S.place.flash.kind;
      if (S.mode === "place" && S.place && S.place.done[id]) return "placed";
      return "";
    }

    // ----- info panel (explore, layers, punjab) -----
    const dl = (rows) => `<dl class="im-dl">${rows.filter(Boolean).map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${v}</dd></div>`).join("")}</dl>`;
    const link = (id) => `<button type="button" class="im-link" data-pick="${id}">${esc(nm(id))}</button>`;
    function stateInfo(id) {
      const s = BY[id];
      const seas = s.coast.map((x) => t(x));
      const coast = ISLANDS.has(id) ? t("A group of islands in the {x}", { x: seas.join(", ") }) : seas.length ? seas.join(", ") : t("Landlocked: no sea coast");
      const nb = s.nb.length ? s.nb.map(link).join(", ") : t("None: it is a group of islands");
      const cap = esc(cp(id)) + (SHARED_CAP.has(id) ? ` <span class="muted">(${esc(t("Chandigarh is the capital of Punjab and Haryana, and is a Union Territory itself"))})</span>` : "");
      const from = id !== S.start ? dirKm(S.start, id) : null;
      return `<div class="h">${esc(nm(id))} <span class="im-tag">${t(s.kind === "ut" ? "Union Territory" : "State")}</span></div>${dl([
        [t("Capital"), cap],
        [t("Region"), esc(t(s.region))],
        [t("Neighbours"), nb],
        [t("Coast"), esc(coast)],
        s.borders.length ? [t("International border"), esc(s.borders.map((x) => t(x)).join(", "))] : null,
        s.rivers.length ? [t("Rivers"), esc(s.rivers.map((r) => t(featOf("river", r).name)).join(", "))] : null,
        s.feats.length ? [t("Landscape"), esc(s.feats.map((r) => t(FEAT[r === "thar" ? "desert" : ["deccan", "chotanagpur"].includes(r) ? "plateau" : "range"].find((f) => f.id === r).name)).join(", "))] : null,
        from ? [t("From {x}", { x: nm(S.start) }), `${esc(t(from.dir))}, ${t("about {n} km", { n: from.km.toLocaleString(langTag()) })}`] : [t("Start"), t("This is the start place.")],
      ])}`;
    }
    function featInfo(f) {
      if (f.type === "river") {
        const r = featOf("river", f.id);
        const sts = inStates("river", f.id);
        return `<div class="h">${esc(t(r.name))} <span class="im-tag">${t("River")}</span></div>${dl([
          [t("Flows into"), esc(t(r.into))],
          sts.length ? [t("Flows through"), sts.map(link).join(", ")] : null,
        ])}${r.id === "narmada" || r.id === "tapi" ? `<p class="small">${esc(t("It flows west through a rift valley."))}</p>` : ""}`;
      }
      if (f.type === "range" || f.type === "plateau" || f.type === "desert") {
        const r = featOf(f.type, f.id);
        const sts = inStates("feat", f.id);
        return `<div class="h">${esc(t(r.name))} <span class="im-tag">${t(f.type === "range" ? "Mountain range" : f.type === "plateau" ? "Plateau" : "Desert")}</span></div>${dl([sts.length ? [t("Found in states such as"), sts.map(link).join(", ")] : null])}`;
      }
      const r = M.REGIONS.find((x) => x.id === f.id);
      return `<div class="h">${esc(t(r.name))} <span class="im-tag">${t("Physical division")}</span></div><p class="small">${esc(t(DIV_TEXT[f.id]))}</p>`;
    }
    const DIV_TEXT = DIV_TEXT_DATA();
    function punjabInfo() {
      const r = S.preg ? PUNJAB_REGIONS[S.preg] : null;
      if (r) return `<div class="h">${esc(t(r.name))} <span class="im-tag">${t("Region of Punjab")}</span></div>${dl([[t("Lies"), esc(t(r.between))], [t("Example districts"), esc(r.towns.map((x) => t(x)).join(", "))]])}`;
      if (S.sel) return stateInfo(S.sel);
      return `<p>${esc(t("Punjab lies in the north-west. It touches Pakistan, Jammu and Kashmir, Himachal Pradesh, Haryana, Rajasthan and Chandigarh. Tap a place, a river or a region."))}</p>`;
    }
    function paintInfo() {
      const m = S.mode;
      let h = "";
      if (m === "explore") h = S.sel ? stateInfo(S.sel) : `<p>${esc(t("Tap a state or Union Territory on the map, or choose one from the list, to see its capital, neighbours and more."))}</p>`;
      else if (m === "layers") h = S.feat ? featInfo(S.feat) : S.sel ? stateInfo(S.sel) : `<p>${esc(t("Turn a layer on, then tap a river, range or area to see what it is."))}</p>`;
      else if (m === "punjab") h = punjabInfo();
      else if (m === "find") h = findInfo();
      else if (m === "place") h = placeInfo();
      $("[data-info]").innerHTML = h;
    }

    // ----- find it -----
    function buildQ(kind) {
      const b = bank(kind);
      const start = (S.rounds[kind] * 5) % b.length;
      return Array.from({ length: 5 }, (_, i) => b[(start + i) % b.length]);
    }
    function startFind(kind) {
      S.fkind = kind;
      S.find = { kind, q: buildQ(kind), i: 0, miss: 0, pts: 0, first: 0, clues: 0, done: false, recorded: false, flash: null, hint: null, msg: "", ok: false, answered: false };
      S.rounds[kind]++;
      S.sel = null;
    }
    const prompt = (q) => {
      const [type, id] = q;
      if (type === "state") return t("Find {x} on the map.", { x: nm(id) });
      if (type === "cap") return t("Tap the state or Union Territory whose capital is {x}.", { x: cp(id) });
      if (type === "river") return t("Tap the river {x}.", { x: t(featOf("river", id).name) });
      if (type === "range") return t("Tap the mountain range {x}.", { x: t(featOf("range", id).name) });
      return t("Tap the {x}.", { x: t(featOf(type, id).name) });
    };
    function clue(q) {
      const [type, id] = q;
      if (type === "state" || type === "cap") {
        const s = BY[id];
        if (s.nb.length) return t("Clue: it is in {r}. It touches {x}.", { r: t(s.region), x: list(s.nb.slice(0, 4)) });
        return t("Clue: it is a group of islands in the {x}.", { x: t(s.coast[0]) });
      }
      if (type === "river") {
        const r = featOf("river", id);
        const sts = inStates("river", id);
        return r.flows === "joins" ? t("Clue: it joins {x}. It flows through {y}.", { x: t(r.into), y: list(sts) }) : t("Clue: it flows into the {x}. It flows through {y}.", { x: t(r.into), y: list(sts) });
      }
      const sts = inStates("feat", id);
      return t("Clue: it is found in states such as {x}.", { x: list(sts.slice(0, 4)) });
    }
    function findInfo() {
      const f = S.find;
      if (!f) return "";
      const head = `<div class="h">${t("Place {a} of 5", { a: Math.min(f.i + 1, 5) })} · ${t("Score {n}", { n: f.pts })}</div>`;
      if (f.done)
        return `${head}<p><strong>${esc(t("Set finished: {a} of 5 found on the first try, score {b} of 10.", { a: f.first, b: f.pts }))}</strong></p><p class="small">${esc(f.msg || "")}</p>`;
      return `${head}<p class="im-prompt" data-prompt>${esc(prompt(f.q[f.i]))}</p>${f.msg ? `<p class="small im-fmsg ${f.ok ? "ok" : ""}">${esc(f.msg)}</p>` : ""}`;
    }
    function answerFind(type, id, tappedName) {
      const f = S.find;
      if (!f || f.done || f.answered) return;
      const q = f.q[f.i];
      const want = q[0] === "cap" ? ["state", q[1]] : q;
      const right = type === want[0] && id === want[1];
      if (right) {
        const pts = f.miss === 0 ? 2 : f.miss === 1 ? 1 : 0;
        f.pts += pts;
        if (f.miss === 0) f.first++;
        f.answered = true;
        f.hint = null;
        f.flash = { id: type === "state" ? id : null, kind: "good" };
        const name = q[0] === "cap" ? t("{c} is the capital of {s}.", { c: cp(id), s: nm(id) }) : type === "state" ? t("Yes, that is {x}.", { x: nm(id) }) : t("Yes, that is the {x}.", { x: t(featOf(type, id).name) });
        f.msg = `${name} ${pts === 2 ? t("2 points.") : pts === 1 ? t("1 point.") : t("0 points.")}`;
        f.ok = true;
      } else {
        f.miss++;
        f.clues++;
        f.ok = false;
        f.flash = type === "state" ? { id, kind: "bad" } : null;
        const what = tappedName || "";
        let msg = what ? t("That is {x}, not the place asked for.", { x: what }) : t("Not that one.");
        if (f.miss >= 2) {
          f.hint = { type: want[0] === "state" ? "state" : want[0], id: want[1] };
          msg += " " + t("The place is highlighted.");
        }
        f.msg = `${msg} ${clue(q)}`;
      }
      refreshAll();
      announce(f.msg);
      if (f.answered) {
        const b = $("[data-fnext]");
        b && b.focus({ preventScroll: true });
      }
    }
    function nextFind() {
      const f = S.find;
      if (!f.answered) return;
      f.i++;
      f.miss = 0;
      f.answered = false;
      f.flash = null;
      f.hint = null;
      f.msg = "";
      if (f.i >= 5) f.done = true;
      refreshAll();
    }
    function skipFind() {
      const f = S.find;
      if (!f || f.done || f.answered) return;
      const q = f.q[f.i];
      f.clues++;
      f.answered = true;
      f.ok = false;
      f.hint = { type: q[0] === "cap" ? "state" : q[0], id: q[1] };
      f.msg = `${q[0] === "cap" ? t("{c} is the capital of {s}.", { c: cp(q[1]), s: nm(q[1]) }) : t("It is the highlighted place.")} ${t("0 points.")}`;
      refreshAll();
    }

    // ----- place it -----
    function startPlace(g) {
      S.pgroup = g;
      const ids = PLACE_GROUPS[g].ids;
      S.place = { g, ids, done: {}, wrong: 0, flash: null, msg: "", recorded: false };
      S.psel = null;
    }
    function placeInfo() {
      const p = S.place;
      if (!p) return "";
      const left = p.ids.length - Object.keys(p.done).length;
      return `<div class="h">${esc(t(PLACE_GROUPS[p.g].name))}</div><p>${esc(left ? (S.psel ? t("Now tap where {x} is, on the map or in the list.", { x: nm(S.psel) }) : t("Drag a label onto its state, or tap a label and then the state.")) : t("All {n} labels are placed.", { n: p.ids.length }))}</p>${p.msg ? `<p class="small im-fmsg ${p.ok ? "ok" : ""}">${esc(p.msg)}</p>` : ""}<p class="small muted">${esc(t("{a} of {b} placed, {c} wrong tries", { a: Object.keys(p.done).length, b: p.ids.length, c: p.wrong }))}</p>`;
    }
    function placeAt(stateId) {
      const p = S.place;
      if (!p) return;
      if (!S.psel) {
        p.msg = t("Choose a label first.");
        p.ok = false;
        refreshAll();
        return;
      }
      const chip = S.psel;
      if (chip === stateId) {
        p.done[chip] = true;
        p.msg = `${t("{x} is correct.", { x: nm(chip) })} ${t("Region: {r}.", { r: t(BY[chip].region) })}`;
        p.ok = true;
        p.flash = { id: chip, kind: "good" };
        S.psel = null;
      } else {
        p.wrong++;
        p.ok = false;
        p.msg = t("That is {x}, not {y}.", { x: nm(stateId), y: nm(chip) }) + " " + t("Clue: it is in {r}. It touches {x}.", { r: t(BY[chip].region), x: BY[chip].nb.length ? list(BY[chip].nb.slice(0, 3)) : t("only the sea") });
        p.flash = { id: stateId, kind: "bad" };
      }
      refreshAll();
      announce(p.msg);
    }

    // ----- panels for each mode -----
    const btn = (attr, label, extra = "") => `<button type="button" class="btn ${extra}" ${attr}>${label}</button>`;
    function panel() {
      const m = S.mode;
      if (m === "explore") {
        const ok = S.sel && S.sel !== S.start;
        return `<div class="sim-btns">${btn('data-erec', `${icon("check")} ${t("Record this journey")}`, "primary" + (ok ? "" : " is-off"))}${btn("data-setstart", t("Use this place as the start"), S.sel ? "" : "is-off")}</div>
          <div class="im-togs" role="group" aria-label="${esc(t("What to show"))}">${tog("names", t("Names"), S.names)}${tog("caps", t("All capitals"), S.caps)}</div>`;
      }
      if (m === "find") {
        const f = S.find;
        return `<div class="im-kinds" role="radiogroup" aria-label="${esc(t("Kind of place"))}">${FIND_KINDS.map((k) => `<button type="button" class="option im-kind" role="radio" aria-checked="${S.fkind === k}" data-fkind="${k}"><span>${t(FIND_KIND_NAME[k])}</span></button>`).join("")}</div>
          <div class="sim-btns">${f && !f.done ? btn("data-fnext", t("Next place"), "primary" + (f.answered ? "" : " is-off")) + btn("data-fskip", t("Show me this one"), f.answered ? "is-off" : "") : ""}${f && f.done ? btn("data-frec", `${icon("check")} ${t("Record this set")}`, "primary" + (f.recorded ? " is-off" : "")) : ""}${btn("data-fagain", `${icon("reset")} ${t("New set")}`)}</div>`;
      }
      if (m === "place") {
        const p = S.place;
        const tray = p.ids.filter((id) => !p.done[id]).slice().sort((a, b) => nm(a).localeCompare(nm(b), langTag()));
        return `<div class="im-kinds" role="radiogroup" aria-label="${esc(t("Group of places"))}">${PLACE_ORDER.map((g) => `<button type="button" class="option im-kind" role="radio" aria-checked="${S.pgroup === g}" data-pgroup="${g}"><span>${t(PLACE_GROUPS[g].name)}</span></button>`).join("")}</div>
          <div class="vl-parts im-tray" role="group" aria-label="${esc(t("Labels to place"))}" data-tray>${tray.map((id) => `<button type="button" class="vl-part im-chip" data-chip="${id}" aria-pressed="${S.psel === id}"><span>${esc(nm(id))}</span></button>`).join("") || `<span class="small muted">${esc(t("All labels placed."))}</span>`}</div>
          <div class="sim-btns">${btn("data-prec", `${icon("check")} ${t("Record this group")}`, "primary" + (!tray.length && !p.recorded ? "" : " is-off"))}${btn("data-pagain", `${icon("reset")} ${t("Start this group again")}`)}</div>`;
      }
      if (m === "layers") {
        const ok = S.feat && S.feat.type === "river";
        return `<div class="im-togs" role="group" aria-label="${esc(t("Layers"))}">${LAYERS.map((k) => tog(k, t(LAYER_NAME[k]), S.layers[k], true)).join("")}${tog("names", t("Names"), S.names)}${tog("caps", t("All capitals"), S.caps)}</div>
          <div class="sim-btns">${btn("data-rrec", `${icon("check")} ${t("Record this river")}`, "primary" + (ok ? "" : " is-off"))}</div>
          <details class="im-facts"><summary>${t("Questions to explore")}</summary><ul>${FACTS.map(([q, a]) => `<li><details><summary>${esc(t(q))}</summary><p class="small">${esc(t(a))}</p></details></li>`).join("")}</ul></details>`;
      }
      return `<div class="im-kinds" role="radiogroup" aria-label="${esc(t("Regions of Punjab"))}">${PUNJAB_ORDER.map((k) => `<button type="button" class="option im-kind" role="radio" aria-checked="${S.preg === k}" data-preg="${k}"><span>${t(PUNJAB_REGIONS[k].name)}</span></button>`).join("")}</div>
        <div class="sim-btns">${btn("data-pbrec", `${icon("check")} ${t("Record this region")}`, "primary" + (S.preg ? "" : " is-off"))}</div>`;
    }
    const tog = (k, label, on, layer) => `<button type="button" class="im-tog" aria-pressed="${!!on}" data-tog="${k}"${layer ? ' data-layer="1"' : ""}>${esc(label)}</button>`;

    const HELP = HELP_TEXT();

    function paintList() {
      const m = S.mode;
      const arr = ST.slice().sort((a, b) => nm(a.id).localeCompare(nm(b.id), langTag()));
      $("[data-list]").innerHTML = arr.map((s) => `<button type="button" class="vl-part im-li" data-pick="${s.id}" aria-pressed="${S.sel === s.id && (m === "explore" || m === "layers" || m === "punjab")}"><span>${esc(nm(s.id))}</span></button>`).join("");
    }
    function paintModes() {
      el.querySelectorAll("[data-mode]").forEach((b) => {
        const on = b.dataset.mode === S.mode;
        b.setAttribute("aria-checked", on);
        b.classList.toggle("selected", on);
        b.tabIndex = on ? 0 : -1;
      });
      $("[data-help]").textContent = t(HELP[S.mode]);
      $("[data-listbox]").open = S.mode === "explore" || S.mode === "punjab" || S.mode === "layers";
      el.querySelectorAll("[data-zoom],[data-pan]").forEach((b) => (b.disabled = S.mode === "punjab"));
    }
    function paintPanel() {
      $("[data-panel]").innerHTML = panel();
      el.querySelectorAll(".is-off").forEach((b) => (b.disabled = true));
    }
    function refreshAll() {
      paintMap();
      paintInfo();
      paintPanel();
      paintList();
      livePaint();
    }
    function announce(txt) {
      flow && flow.say && flow.say(txt);
    }
    function livePaint() {
      if (!flow) return;
      const m = S.mode;
      if (m === "explore") flow.live([[t("Start"), nm(S.start)], [t("Selected"), S.sel ? nm(S.sel) : "—"]], "");
      else if (m === "find") flow.live([[t("Kind of place"), t(FIND_KIND_NAME[S.fkind])], [t("Score"), String(S.find ? S.find.pts : 0)]], "");
      else if (m === "place") flow.live([[t("Group of places"), t(PLACE_GROUPS[S.pgroup].name)], [t("Labels placed"), `${S.place ? Object.keys(S.place.done).length : 0} / ${S.place ? S.place.ids.length : 0}`]], "");
      else if (m === "layers") flow.live([[t("Layers"), LAYERS.filter((k) => S.layers[k]).map((k) => t(LAYER_NAME[k])).join(", ") || "—"], [t("Selected"), S.feat ? t(featName(S.feat)) : "—"]], "");
      else flow.live([[t("Region of Punjab"), S.preg ? t(PUNJAB_REGIONS[S.preg].name) : "—"]], "");
    }
    const featName = (f) => (f.type === "region" ? M.REGIONS.find((r) => r.id === f.id).name : featOf(f.type, f.id).name);

    // ----- actions -----
    function setMode(m, fromFlow) {
      if (fromFlow && S.ready === m) return refreshAll(); // the flow reports the investigation that a tap on a mode button has just set up
      S.ready = m;
      S.mode = m;
      S.sel = null;
      S.feat = null;
      S.preg = null;
      if (m === "explore") S.start = START;
      if (m === "find") startFind(S.fkind);
      if (m === "place") startPlace(S.pgroup);
      if (m !== "layers") S.layers = { rivers: false, ranges: false, plateaus: false, deserts: false, regions: false };
      if (m === "layers") {
        S.names = false;
        S.caps = false;
      } else if (m === "explore") {
        S.names = true;
        S.caps = false;
      }
      S.z = 1;
      S.cx = M.W / 2;
      S.cy = M.H / 2;
      paintModes();
      if (!fromFlow) {
        const b = el.querySelector(`[data-inv="${INVS.findIndex((v) => v.mode === m)}"]`);
        b && b.click();
      }
      refreshAll();
    }
    function select(id) {
      const m = S.mode;
      if (!BY[id]) return;
      if (m === "find") {
        if (S.fkind === "physical") {
          if (S.find && !S.find.done && !S.find.answered) {
            S.find.msg = t("That is a state. Tap the line or the shaded area of the place you want.");
            paintInfo();
          }
          return;
        }
        return answerFind("state", id, nm(id));
      }
      if (m === "place") return placeAt(id);
      S.sel = id;
      S.feat = null;
      if (m === "punjab") S.preg = null;
      refreshAll();
      announce(`${nm(id)}. ${t("Capital")}: ${cp(id)}.`);
    }
    function pickFeature(type, id) {
      const m = S.mode;
      if (m === "find") {
        if (S.fkind !== "physical") return;
        return answerFind(type, id, t(featName({ type, id })));
      }
      if (m === "layers" || m === "punjab") {
        S.feat = { type, id };
        S.sel = null;
        S.preg = null;
        refreshAll();
        announce(t(featName(S.feat)));
      }
    }
    const zoomSteps = [1, 1.5, 2, 3, 4];
    function zoom(dir) {
      let i = zoomSteps.findIndex((z) => z >= S.z - 1e-6);
      i = Math.max(0, Math.min(zoomSteps.length - 1, i + dir));
      const was = S.z;
      S.z = zoomSteps[i];
      if (dir > 0 && was === 1 && S.sel) {
        const [x, y] = M.proj(BY[S.sel].lp[0], BY[S.sel].lp[1]);
        S.cx = x;
        S.cy = y;
      }
      paintMap();
    }
    function pan(d) {
      const vb = viewBox();
      const stepx = vb.w * 0.3, stepy = vb.h * 0.3;
      S.cx += { l: -stepx, r: stepx, u: 0, d: 0 }[d];
      S.cy += { l: 0, r: 0, u: -stepy, d: stepy }[d];
      paintMap();
    }

    // ----- recording -----
    function record(row) {
      return flow ? flow.addRun(row) : false;
    }
    function recordExplore() {
      if (!S.sel || S.sel === S.start) return;
      const r = dirKm(S.start, S.sel);
      record({ from: nm(S.start), to: nm(S.sel), dir: t(r.dir), km: r.km });
    }
    function recordFind() {
      const f = S.find;
      if (!f || !f.done || f.recorded) return;
      if (record({ kind: t(FIND_KIND_NAME[f.kind]), first: f.first, clues: f.clues, score: f.pts })) {
        f.recorded = true;
        paintPanel();
      }
    }
    function recordPlace() {
      const p = S.place;
      if (!p || p.recorded || p.ids.some((id) => !p.done[id])) return;
      if (record({ group: t(PLACE_GROUPS[p.g].name), placed: p.ids.length, wrong: p.wrong })) {
        p.recorded = true;
        paintPanel();
      }
    }
    function recordRiver() {
      if (!S.feat || S.feat.type !== "river") return;
      const r = featOf("river", S.feat.id);
      record({ river: t(r.name), flows: t(r.into) });
    }
    function recordPunjab() {
      if (!S.preg) return;
      const r = PUNJAB_REGIONS[S.preg];
      record({ region: t(r.name), between: t(r.between), towns: r.towns.map((x) => t(x)).join(", ") });
    }

    // ----- events -----
    let drag = null;
    el.addEventListener("click", (e) => {
      if (drag && drag.suppress) {
        drag = null;
        return;
      }
      const tg = (s) => e.target.closest(s);
      let x;
      if ((x = tg("[data-mode]"))) {
        if (x.dataset.mode !== S.mode) setMode(x.dataset.mode);
        return;
      }
      if ((x = tg("[data-zoom]"))) return x.dataset.zoom === "reset" ? ((S.z = 1), (S.cx = M.W / 2), (S.cy = M.H / 2), paintMap()) : zoom(x.dataset.zoom === "in" ? 1 : -1);
      if ((x = tg("[data-pan]"))) return pan(x.dataset.pan);
      if ((x = tg("[data-tog]"))) {
        const k = x.dataset.tog;
        if (x.dataset.layer) S.layers[k] = !S.layers[k];
        else S[k] = !S[k];
        return refreshAll();
      }
      if ((x = tg("[data-rv]"))) return pickFeature("river", x.dataset.rv);
      if ((x = tg("[data-rg]"))) return pickFeature("range", x.dataset.rg);
      if ((x = tg("[data-pl]"))) return pickFeature("plateau", x.dataset.pl);
      if ((x = tg("[data-ds]"))) return pickFeature("desert", x.dataset.ds);
      if ((x = tg("[data-rn]"))) return pickFeature("region", x.dataset.rn);
      if ((x = tg("[data-st]"))) {
        return select(x.dataset.st);
      }
      if ((x = tg("[data-pick]"))) {
        const id = x.dataset.pick;
        select(id);
        const again = el.querySelector(`.im-list [data-pick="${id}"]`);
        if (again && x.closest(".im-list")) again.focus({ preventScroll: true });
        return;
      }
      if ((x = tg("[data-fkind]"))) return startFind(x.dataset.fkind), refreshAll();
      if (tg("[data-fnext]")) return nextFind();
      if (tg("[data-fskip]")) return skipFind();
      if (tg("[data-fagain]")) return startFind(S.fkind), refreshAll();
      if (tg("[data-frec]")) return recordFind();
      if ((x = tg("[data-pgroup]"))) return startPlace(x.dataset.pgroup), refreshAll();
      if ((x = tg("[data-chip]"))) {
        S.psel = S.psel === x.dataset.chip ? null : x.dataset.chip;
        refreshAll();
        const again = el.querySelector(`[data-chip="${x.dataset.chip}"]`);
        again && again.focus({ preventScroll: true });
        return;
      }
      if (tg("[data-prec]")) return recordPlace();
      if (tg("[data-pagain]")) return startPlace(S.pgroup), refreshAll();
      if (tg("[data-erec]")) return recordExplore();
      if (tg("[data-setstart]")) {
        if (S.sel) {
          S.start = S.sel;
          refreshAll();
        }
        return;
      }
      if (tg("[data-rrec]")) return recordRiver();
      if ((x = tg("[data-preg]"))) {
        S.preg = x.dataset.preg;
        S.sel = null;
        S.feat = null;
        return refreshAll();
      }
      if (tg("[data-pbrec]")) return recordPunjab();
    });
    el.addEventListener("keydown", (e) => {
      const r = e.target.closest && e.target.closest("[role=radio][data-mode],[role=radio][data-fkind],[role=radio][data-pgroup],[role=radio][data-preg]");
      const d = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[e.key];
      if (!r || !d) return;
      const all = [...r.parentElement.querySelectorAll("[role=radio]")];
      const nx = all[(all.indexOf(r) + d + all.length) % all.length];
      nx.click();
      const again = el.querySelector(`[role=radio][aria-checked="true"]${r.dataset.mode ? "[data-mode]" : r.dataset.fkind ? "[data-fkind]" : r.dataset.pgroup ? "[data-pgroup]" : "[data-preg]"}`);
      again && again.focus();
      e.preventDefault();
    });
    // Dragging a label onto a state (a tap on the label chooses it; a tap on the state places it).
    el.addEventListener("pointerdown", (e) => {
      const chip = e.target.closest && e.target.closest("[data-chip]");
      if (!chip || e.button > 0) return;
      drag = { id: chip.dataset.chip, x: e.clientX, y: e.clientY, moved: false, ghost: null, pid: e.pointerId };
      try {
        chip.setPointerCapture(e.pointerId);
      } catch (err) {}
    });
    el.addEventListener("pointermove", (e) => {
      if (!drag || e.pointerId !== drag.pid) return;
      if (!drag.moved && Math.hypot(e.clientX - drag.x, e.clientY - drag.y) < 6) return;
      if (!drag.moved) {
        drag.moved = true;
        const g = document.createElement("div");
        g.className = "im-ghost";
        g.textContent = nm(drag.id);
        document.body.appendChild(g);
        drag.ghost = g;
      }
      drag.ghost.style.left = e.clientX + "px";
      drag.ghost.style.top = e.clientY + "px";
    });
    const endDrag = (e) => {
      if (!drag || e.pointerId !== drag.pid) return;
      const d = drag;
      if (d.ghost) d.ghost.remove();
      if (d.moved) {
        const under = document.elementFromPoint(e.clientX, e.clientY);
        const st = under && under.closest && under.closest("[data-st]");
        S.psel = d.id;
        if (st) placeAt(st.dataset.st);
        else {
          refreshAll();
        }
        drag = { suppress: true };
        setTimeout(() => (drag = null), 0);
      } else drag = null;
    };
    el.addEventListener("pointerup", endDrag);
    el.addEventListener("pointercancel", (e) => {
      if (drag && drag.ghost) drag.ghost.remove();
      drag = null;
      void e;
    });

    // ----- the experiment scaffold -----
    flow = Labs.flow($("[data-flowhost]"), api, {
      assumptions: ASSUME,
      columns: INVS[0].columns,
      investigations: INVS,
      extra: () => ({ mode: S.mode, start: S.start }),
      mountStage(slot, F) {
        flow = F;
        slot.innerHTML = `<p class="small muted">${t("Use the map above. Press the Record button there to add a run to the table.")}</p>`;
      },
      onInvestigation(inv) {
        const m = inv.mode;
        setMode(m, true);
      },
    });
    paintModes();
    refreshAll();
    // The flow's own investigation buttons repeat the mode buttons above, so they are hidden.
    const invs = el.querySelector(".vl-invs");
    if (invs) invs.style.display = "none";
  }

  Labs.register("indiamap", {
    title: "India map explorer",
    area: "world",
    icon: "compass",
    objective: "Explore a simple map of India: find states, capitals, rivers and mountains, place labels on the right states, switch on layers to see rivers, ranges, plateaus and the desert, and zoom in on Punjab with its three rivers.",
    chapters: [
      { cls: 4, subject: "evs", chapter: "maps-and-directions" },
      { cls: 5, subject: "evs", chapter: "mountains-deserts-and-life-there" },
      { cls: 6, subject: "sst", chapter: "india-that-is-bharat" },
      { cls: 6, subject: "sstpb", chapter: "our-india-in-the-world" },
      { cls: 7, subject: "sst", chapter: "geographical-diversity-of-india" },
      { cls: 7, subject: "sst", chapter: "india-and-her-neighbours" },
      { cls: 8, subject: "sst", chapter: "reshaping-indias-political-map" },
      { cls: 9, subject: "sstpb", chapter: "geo-india-size-location" },
      { cls: 9, subject: "sstpb", chapter: "geo-physical-features" },
      { cls: 9, subject: "sstpb", chapter: "geo-drainage" },
      { cls: 10, subject: "sstpb", chapter: "punjab-physical-features" },
      { cls: 11, subject: "geography", chapter: "india-location" },
      { cls: 11, subject: "geography", chapter: "structure-and-physiography" },
      { cls: 11, subject: "geography", chapter: "drainage-system" },
    ],
    mount,
  });
})();
