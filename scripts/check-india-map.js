// Checks the India map explorer (js/labs/india-map.js and js/labs/india-lab.js). Called by scripts/check-labs.js, which owns the
// context the labs are loaded into. What it tests:
//   * 36 entities: 28 states and 8 Union Territories with the right names, capitals and kind (current in 2024: Ladakh and Jammu and
//     Kashmir are separate, Dadra and Nagar Haveli and Daman and Diu are one, Amaravati is the capital of Andhra Pradesh)
//   * topology: every ring closes, a border is shared by exactly two entities, nothing crosses anything, the neighbours worked out from
//     the borders are the same as an independent list typed here, and symmetric; the external boundary chains from Sir Creek to Bangladesh
//   * places: 116 well-known cities fall inside their own state, and Gilgit, Skardu, Muzaffarabad, Mirpur and Aksai Chin are inside the
//     map of Jammu and Kashmir and Ladakh as Indian school maps show it
//   * physical features: every required river, range, plateau and desert is there, lies in the states it is listed for, and the
//     peninsular rivers flow the way the map says (Narmada and Tapi west, the others east)
//   * paths parse and stay in the frame, the data is under 150 KB, directions and distances worked out from the map, the question banks,
//     the five investigations, and a Punjabi and a Hindi translation for every string (names in Gurmukhi and Devanagari)

module.exports = function checkIndiaMap({ ctx, vm, fs, path, root, bad, Labs }) {
  const M = vm.runInContext("IndiaMap", ctx);
  const K = Labs.calc.indiamap;
  const C = M.calc;
  const ST = M.STATES;
  const BY = M.byId;

  // ---------- the 36 entities (typed independently of the data) ----------
  const EXPECT = {
    andhrapradesh: ["Andhra Pradesh", "Amaravati", "state"], arunachalpradesh: ["Arunachal Pradesh", "Itanagar", "state"], assam: ["Assam", "Dispur", "state"], bihar: ["Bihar", "Patna", "state"],
    chhattisgarh: ["Chhattisgarh", "Raipur", "state"], goa: ["Goa", "Panaji", "state"], gujarat: ["Gujarat", "Gandhinagar", "state"], haryana: ["Haryana", "Chandigarh", "state"],
    himachalpradesh: ["Himachal Pradesh", "Shimla", "state"], jharkhand: ["Jharkhand", "Ranchi", "state"], karnataka: ["Karnataka", "Bengaluru", "state"], kerala: ["Kerala", "Thiruvananthapuram", "state"],
    madhyapradesh: ["Madhya Pradesh", "Bhopal", "state"], maharashtra: ["Maharashtra", "Mumbai", "state"], manipur: ["Manipur", "Imphal", "state"], meghalaya: ["Meghalaya", "Shillong", "state"],
    mizoram: ["Mizoram", "Aizawl", "state"], nagaland: ["Nagaland", "Kohima", "state"], odisha: ["Odisha", "Bhubaneswar", "state"], punjab: ["Punjab", "Chandigarh", "state"],
    rajasthan: ["Rajasthan", "Jaipur", "state"], sikkim: ["Sikkim", "Gangtok", "state"], tamilnadu: ["Tamil Nadu", "Chennai", "state"], telangana: ["Telangana", "Hyderabad", "state"],
    tripura: ["Tripura", "Agartala", "state"], uttarpradesh: ["Uttar Pradesh", "Lucknow", "state"], uttarakhand: ["Uttarakhand", "Dehradun", "state"], westbengal: ["West Bengal", "Kolkata", "state"],
    andaman: ["Andaman and Nicobar Islands", "Sri Vijaya Puram", "ut"], chandigarh: ["Chandigarh", "Chandigarh", "ut"], dnhdd: ["Dadra and Nagar Haveli and Daman and Diu", "Daman", "ut"],
    delhi: ["Delhi", "New Delhi", "ut"], jammukashmir: ["Jammu and Kashmir", "Srinagar (summer) and Jammu (winter)", "ut"], ladakh: ["Ladakh", "Leh", "ut"],
    lakshadweep: ["Lakshadweep", "Kavaratti", "ut"], puducherry: ["Puducherry", "Puducherry", "ut"],
  };
  const NB = {
    andhrapradesh: "odisha chhattisgarh telangana karnataka tamilnadu puducherry", arunachalpradesh: "assam nagaland", assam: "arunachalpradesh nagaland manipur mizoram tripura meghalaya westbengal",
    bihar: "uttarpradesh jharkhand westbengal", chhattisgarh: "odisha jharkhand uttarpradesh madhyapradesh maharashtra telangana andhrapradesh", goa: "maharashtra karnataka",
    gujarat: "rajasthan madhyapradesh maharashtra dnhdd", haryana: "punjab himachalpradesh uttarakhand uttarpradesh delhi rajasthan chandigarh", himachalpradesh: "jammukashmir ladakh punjab haryana uttarakhand",
    jharkhand: "bihar westbengal odisha chhattisgarh uttarpradesh", karnataka: "maharashtra goa kerala tamilnadu andhrapradesh telangana", kerala: "karnataka tamilnadu puducherry",
    madhyapradesh: "rajasthan uttarpradesh chhattisgarh maharashtra gujarat", maharashtra: "gujarat dnhdd madhyapradesh chhattisgarh telangana karnataka goa", manipur: "nagaland assam mizoram",
    meghalaya: "assam", mizoram: "assam tripura manipur", nagaland: "arunachalpradesh assam manipur", odisha: "westbengal jharkhand chhattisgarh andhrapradesh",
    punjab: "jammukashmir himachalpradesh haryana rajasthan chandigarh", rajasthan: "punjab haryana uttarpradesh madhyapradesh gujarat", sikkim: "westbengal",
    tamilnadu: "kerala karnataka andhrapradesh puducherry", telangana: "maharashtra chhattisgarh karnataka andhrapradesh", tripura: "assam mizoram",
    uttarpradesh: "uttarakhand haryana delhi rajasthan madhyapradesh chhattisgarh jharkhand bihar", uttarakhand: "himachalpradesh uttarpradesh haryana", westbengal: "sikkim bihar jharkhand odisha assam",
    andaman: "", chandigarh: "punjab haryana", dnhdd: "gujarat maharashtra", delhi: "haryana uttarpradesh", jammukashmir: "ladakh himachalpradesh punjab", ladakh: "jammukashmir himachalpradesh",
    lakshadweep: "", puducherry: "tamilnadu andhrapradesh kerala",
  };
  if (ST.length !== 36) bad(`map: ${ST.length} entities, expected 36`);
  if (ST.filter((s) => s.kind === "state").length !== 28 || ST.filter((s) => s.kind === "ut").length !== 8) bad("map: expected 28 states and 8 Union Territories");
  for (const [id, [name, cap, kind]] of Object.entries(EXPECT)) {
    const s = BY[id];
    if (!s) {
      bad(`map: missing ${id}`);
      continue;
    }
    if (s.name !== name) bad(`map: ${id} is called "${s.name}", expected "${name}"`);
    if (s.capital !== cap) bad(`map: capital of ${name} is "${s.capital}", expected "${cap}"`);
    if (s.kind !== kind) bad(`map: ${name} should be a ${kind}`);
    const want = NB[id].split(" ").filter(Boolean).sort().join(" ");
    const got = s.nb.slice().sort().join(" ");
    if (want !== got) bad(`map: neighbours of ${name}: drawn "${got}", expected "${want}"`);
    for (const o of s.nb) if (!BY[o].nb.includes(id)) bad(`map: ${name} lists ${o} as a neighbour but not the other way round`);
  }
  if (new Set(ST.map((s) => s.code)).size !== 36) bad("map: state codes are not unique");
  if (ST.some((s) => !s.region || !s.cap || !s.lp)) bad("map: every entity needs a region, a capital position and a label position");

  // ---------- topology ----------
  for (const s of ST) s.problems.forEach((p) => bad(`map: ${s.name}: ${p}`));
  let arcs = 0;
  for (const [name, u] of Object.entries(M.users)) {
    arcs++;
    const a = M.ARC[name];
    if (a.tag && u.length !== 1) bad(`map: arc ${name} (${a.tag}) is used ${u.length} times`);
    if (!a.tag && u.length !== 2) bad(`map: border ${name} is used ${u.length} times, expected 2`);
    if (!a.tag && u.length === 2 && u[0] === u[1]) bad(`map: border ${name} is used twice by ${u[0]}`);
  }
  for (const name of Object.keys(M.ARC)) if (!M.users[name]) bad(`map: arc ${name} is not used by any state`);
  const segs = [];
  for (const a of Object.values(M.ARC)) for (let i = 0; i < a.pts.length - 1; i++) segs.push([a.pts[i], a.pts[i + 1], a.name, i]);
  let crossings = 0;
  for (let i = 0; i < segs.length; i++)
    for (let j = i + 1; j < segs.length; j++) {
      if (segs[i][2] === segs[j][2] && j - i < 2) continue;
      if (C.cross(segs[i][0], segs[i][1], segs[j][0], segs[j][1])) {
        crossings++;
        if (crossings < 6) bad(`map: ${segs[i][2]} crosses ${segs[j][2]} near ${segs[i][0]}`);
      }
    }
  if (M.OUTSIDE.unused.length) bad(`map: external boundary does not chain: ${M.OUTSIDE.unused.join(", ")} left over`);
  if (M.OUTSIDE.end[0] !== 88.95 || M.OUTSIDE.end[1] !== 21.63) bad("map: the external boundary should run from Sir Creek to the Bangladesh coast");

  // ---------- places ----------
  const CITIES = `Amritsar 74.87 31.63 punjab|Ludhiana 75.85 30.90 punjab|Patiala 76.40 30.34 punjab|Bathinda 74.95 30.21 punjab|Jalandhar 75.58 31.33 punjab|Pathankot 75.65 32.27 punjab|Gurdaspur 75.41 32.04 punjab|Ferozepur 74.62 30.93 punjab|Rupnagar 76.53 30.97 punjab|Ambala 76.78 30.38 haryana|Hisar 75.72 29.15 haryana|Rohtak 76.61 28.89 haryana|Gurugram 77.03 28.46 haryana|Karnal 76.99 29.69 haryana|Sirsa 75.03 29.53 haryana|Shimla 77.17 31.10 himachalpradesh|Manali 77.19 32.24 himachalpradesh|Dharamshala 76.32 32.22 himachalpradesh|Kalpa 78.26 31.54 himachalpradesh|Dehradun 78.03 30.32 uttarakhand|Haridwar 78.16 29.95 uttarakhand|Nainital 79.46 29.39 uttarakhand|Delhi 77.21 28.63 delhi|Jaipur 75.79 26.91 rajasthan|Jodhpur 73.02 26.24 rajasthan|Jaisalmer 70.91 26.92 rajasthan|Udaipur 73.71 24.58 rajasthan|Bikaner 73.31 28.02 rajasthan|Ajmer 74.64 26.45 rajasthan|Kota 75.84 25.21 rajasthan|SriGanganagar 73.88 29.91 rajasthan|Lucknow 80.95 26.85 uttarpradesh|Kanpur 80.35 26.45 uttarpradesh|Varanasi 83.0 25.32 uttarpradesh|Agra 78.01 27.18 uttarpradesh|Gorakhpur 83.37 26.76 uttarpradesh|Prayagraj 81.85 25.43 uttarpradesh|Meerut 77.7 28.98 uttarpradesh|Jhansi 78.57 25.45 uttarpradesh|Patna 85.14 25.6 bihar|Gaya 85.0 24.8 bihar|Muzaffarpur 85.4 26.12 bihar|Bhagalpur 87.0 25.25 bihar|Ranchi 85.33 23.34 jharkhand|Jamshedpur 86.18 22.8 jharkhand|Dhanbad 86.43 23.8 jharkhand|Kolkata 88.36 22.57 westbengal|Siliguri 88.43 26.72 westbengal|Asansol 86.98 23.68 westbengal|Darjeeling 88.26 27.04 westbengal|Gangtok 88.61 27.33 sikkim|Bhubaneswar 85.82 20.3 odisha|Cuttack 85.88 20.46 odisha|Rourkela 84.85 22.25 odisha|Sambalpur 83.97 21.47 odisha|Raipur 81.63 21.25 chhattisgarh|Bilaspur 82.15 22.08 chhattisgarh|Bhilai 81.38 21.21 chhattisgarh|Bhopal 77.41 23.26 madhyapradesh|Indore 75.86 22.72 madhyapradesh|Jabalpur 79.95 23.18 madhyapradesh|Gwalior 78.18 26.22 madhyapradesh|Ujjain 75.78 23.18 madhyapradesh|Ahmedabad 72.57 23.03 gujarat|Surat 72.83 21.17 gujarat|Rajkot 70.8 22.3 gujarat|Vadodara 73.18 22.31 gujarat|Bhuj 69.67 23.25 gujarat|Bhavnagar 72.15 21.76 gujarat|Mumbai 72.88 19.08 maharashtra|Pune 73.86 18.52 maharashtra|Nagpur 79.09 21.15 maharashtra|Nashik 73.79 20.0 maharashtra|Aurangabad 75.34 19.88 maharashtra|Kolhapur 74.24 16.7 maharashtra|Solapur 75.9 17.67 maharashtra|Margao 73.95 15.27 goa|Bengaluru 77.59 12.97 karnataka|Mysuru 76.65 12.3 karnataka|Hubballi 75.12 15.36 karnataka|Belagavi 74.5 15.85 karnataka|Kalaburagi 76.83 17.33 karnataka|Hyderabad 78.49 17.39 telangana|Warangal 79.59 18.0 telangana|Nizamabad 78.1 18.67 telangana|Vijayawada 80.65 16.51 andhrapradesh|Tirupati 79.42 13.63 andhrapradesh|Kurnool 78.04 15.83 andhrapradesh|Guntur 80.45 16.3 andhrapradesh|Visakhapatnam 83.22 17.69 andhrapradesh|Madurai 78.12 9.92 tamilnadu|Coimbatore 76.96 11.0 tamilnadu|Tiruchirappalli 78.7 10.8 tamilnadu|Salem 78.15 11.66 tamilnadu|Chennai 80.27 13.08 tamilnadu|Kochi 76.27 9.93 kerala|Thiruvananthapuram 76.94 8.52 kerala|Kozhikode 75.78 11.26 kerala|Thrissur 76.21 10.52 kerala|Guwahati 91.74 26.14 assam|Dibrugarh 94.91 27.48 assam|Silchar 92.8 24.83 assam|Jorhat 94.2 26.75 assam|Shillong 91.88 25.57 meghalaya|Imphal 93.94 24.82 manipur|Aizawl 92.72 23.73 mizoram|Kohima 94.11 25.67 nagaland|Agartala 91.28 23.83 tripura|Itanagar 93.62 27.08 arunachalpradesh|Tawang 91.86 27.59 arunachalpradesh|Srinagar 74.8 34.08 jammukashmir|Jammu 74.86 32.73 jammukashmir|Leh 77.58 34.15 ladakh|Kargil 76.13 34.56 ladakh|PortBlair 92.74 11.62 andaman|Kavaratti 72.64 10.57 lakshadweep|Muzaffarabad 73.47 34.37 jammukashmir|Mirpur 73.75 33.15 jammukashmir|Gilgit 74.31 35.92 ladakh|Skardu 75.57 35.3 ladakh|AksaiChin 79.6 35.0 ladakh`;
  let cities = 0;
  for (const row of CITIES.split("|")) {
    const [name, lo, la, id] = row.split(" ");
    cities++;
    const hit = ST.filter((s) => C.inState([Number(lo), Number(la)], s)).map((s) => s.id);
    if (!hit.includes(id) || hit.length !== 1) bad(`map: ${name} (${lo}, ${la}) should be inside ${id} only, found in "${hit.join(",")}"`);
  }
  for (const s of ST) {
    if (!s.tiny && !C.inState(s.lp, s)) bad(`map: the label point of ${s.name} is outside it`);
    if (!s.tiny && !["punjab", "haryana"].includes(s.id) && !C.inState(s.cap, s)) bad(`map: the capital ${s.capital} is outside ${s.name}`);
  }
  // sea points are in no state
  for (const [name, lo, la] of [["Arabian Sea", 68, 15], ["Bay of Bengal", 86, 14], ["Indian Ocean", 77, 6.5], ["Gulf of Khambhat", 72.5, 21.2]])
    if (ST.some((s) => C.inState([lo, la], s))) bad(`map: ${name} (${lo}, ${la}) is inside a state`);

  // ---------- physical features ----------
  const REQ = { rivers: ["ganga", "yamuna", "brahmaputra", "indus", "sutlej", "narmada", "tapi", "godavari", "krishna", "kaveri", "mahanadi", "beas", "ravi"], ranges: ["himalaya", "wghats", "eghats", "aravalli", "vindhya", "satpura"], plateaus: ["deccan", "chotanagpur"], deserts: ["thar"] };
  const have = { rivers: M.RIVERS, ranges: M.RANGES, plateaus: M.PLATEAUS, deserts: M.DESERTS };
  for (const [k, ids] of Object.entries(REQ)) for (const id of ids) if (!have[k].some((f) => f.id === id)) bad(`map: ${k.slice(0, -1)} ${id} is missing`);
  const samples = (pts) => {
    const out = [];
    for (let i = 0; i < pts.length - 1; i++) for (let k = 0; k < 8; k++) out.push([pts[i][0] + ((pts[i + 1][0] - pts[i][0]) * k) / 8, pts[i][1] + ((pts[i + 1][1] - pts[i][1]) * k) / 8]);
    out.push(pts[pts.length - 1]);
    return out;
  };
  const areaSamples = (pts) => {
    const xs = pts.map((p) => p[0]), ys = pts.map((p) => p[1]);
    const out = [];
    for (let x = Math.min(...xs); x <= Math.max(...xs); x += 0.15) for (let y = Math.min(...ys); y <= Math.max(...ys); y += 0.15) if (C.inRing([x, y], pts)) out.push([x, y]);
    return out;
  };
  const geo = (id) => {
    const f = [...M.RIVERS, ...M.RANGES, ...M.PLATEAUS, ...M.DESERTS].find((x) => x.id === id);
    if (!f) return null;
    if (f.parts) return f.parts.flatMap(samples);
    return f.pts && f.d.endsWith("Z") ? areaSamples(f.pts) : samples(f.pts);
  };
  for (const s of ST)
    for (const id of [...s.rivers, ...s.feats]) {
      const g = geo(id);
      if (!g) bad(`map: ${s.name} lists ${id}, which is not drawn`);
      else if (!g.some((p) => C.inState(p, s))) bad(`map: ${id} is listed for ${s.name} but the drawing does not pass through it`);
    }
  for (const r of M.RIVERS) if (!ST.some((s) => s.rivers.includes(r.id))) bad(`map: river ${r.name} is not listed in any state`);
  for (const f of [...M.RANGES, ...M.PLATEAUS, ...M.DESERTS]) if (!ST.some((s) => s.feats.includes(f.id))) bad(`map: ${f.name} is not listed in any state`);
  const flow = { narmada: "west", tapi: "west", indus: "west", godavari: "east", krishna: "east", kaveri: "east", mahanadi: "east", ganga: "east", brahmaputra: "east" };
  for (const [id, dir] of Object.entries(flow)) {
    const r = M.RIVERS.find((x) => x.id === id);
    if (r.flows !== dir) bad(`map: ${r.name} should flow ${dir}`);
  }
  for (const id of ["narmada", "tapi", "godavari", "krishna", "kaveri", "mahanadi"]) {
    const r = M.RIVERS.find((x) => x.id === id);
    const a = r.pts[0], b = r.pts[r.pts.length - 1];
    if ((r.flows === "west") !== (b[0] < a[0])) bad(`map: the line of the ${r.name} runs ${b[0] < a[0] ? "west" : "east"}, not ${r.flows}`);
    const nearSea = r.flows === "west" ? b[0] < 74 : b[0] > 79.5;
    if (!nearSea) bad(`map: the ${r.name} does not end near the ${r.into}`);
  }
  const westRivers = M.RIVERS.filter((r) => r.flows === "west" && !["indus"].includes(r.id)).map((r) => r.id).sort().join(",");
  if (westRivers !== "narmada,tapi") bad(`map: the west-flowing rivers of the peninsula are "${westRivers}", expected narmada,tapi`);
  // Himalaya lies north of the plains; Western Ghats run north-south near the west coast
  const wg = M.RANGES.find((r) => r.id === "wghats").parts[0];
  if (wg.some((p) => p[0] < 72.5 || p[0] > 78)) bad("map: the Western Ghats leave the west of the peninsula");
  if (!(wg[0][1] > wg[wg.length - 1][1])) bad("map: the Western Ghats should run from north to south");

  // ---------- paths ----------
  const parse = (d) => {
    const toks = d.match(/[MLZ]|-?\d+(\.\d+)?/g) || [];
    if (toks.join("").length < d.replace(/\s/g, "").length * 0.9) return null;
    let n = 0;
    for (const t of toks) if (/^[-\d]/.test(t) && !isFinite(Number(t))) return null;
    for (const t of toks) if (/^[-\d]/.test(t)) n++;
    return n >= 6 && d.startsWith("M") && /Z/.test(d.replace(/[^MLZ]/g, "")) ? n / 2 : n >= 4 && d.startsWith("M") ? n / 2 : null;
  };
  let paths = 0, points = 0;
  const frame = (d, what, strict) => {
    paths++;
    const n = parse(d);
    if (!n) return bad(`map: path of ${what} does not parse`);
    points += n;
    if (strict) for (const m of d.matchAll(/(-?\d+(?:\.\d+)?) (-?\d+(?:\.\d+)?)/g)) if (Number(m[1]) < -1 || Number(m[1]) > M.W + 1 || Number(m[2]) < -1 || Number(m[2]) > M.H + 1) return bad(`map: path of ${what} leaves the frame`);
  };
  ST.forEach((s) => frame(s.d, s.name, true));
  M.RIVERS.forEach((r) => (frame(r.d, r.name, true), r.dc && frame(r.dc, r.name + " (continued)", true)));
  M.RANGES.forEach((r) => frame(r.d, r.name, true));
  [...M.PLATEAUS, ...M.DESERTS, ...M.REGIONS].forEach((r) => frame(r.d, r.name, false));
  frame(M.NEIGHBOURS_D, "neighbouring countries", false);
  frame(M.BOUNDARY_D, "boundary", true);
  // a state has "a few dozen points": at least 6, at most 400
  for (const s of ST) {
    const n = parse(s.d);
    if (n < 5 || n > 400) bad(`map: ${s.name} has ${n} points`);
  }
  const size = fs.statSync(path.join(root, "js", "labs", "india-map.js")).size + fs.statSync(path.join(root, "js", "labs", "india-lab.js")).size;
  if (size > 150 * 1024) bad(`map: the map and lab files are ${(size / 1024).toFixed(0)} KB, more than 150 KB`);

  // ---------- directions and distances ----------
  const dk = K.dirKm;
  if (dk("assam", "kerala").dir !== "South-west") bad(`map: Kerala from Assam is ${dk("assam", "kerala").dir}, expected South-west`);
  if (dk("assam", "arunachalpradesh").dir !== "North-east") bad(`map: Arunachal Pradesh from Assam is ${dk("assam", "arunachalpradesh").dir}, expected North-east`);
  if (dk("assam", "gujarat").dir !== "West") bad(`map: Gujarat from Assam is ${dk("assam", "gujarat").dir}, expected West`);
  if (dk("punjab", "kerala").dir !== "South") bad(`map: Kerala from Punjab is ${dk("punjab", "kerala").dir}, expected South`);
  const km = (a, b, lo, hi) => {
    const v = C.distance(BY[a].cap, BY[b].cap);
    if (v < lo || v > hi) bad(`map: ${a} to ${b} is ${Math.round(v)} km, expected ${lo} to ${hi}`);
  };
  km("delhi", "tamilnadu", 1700, 1820); // New Delhi to Chennai, about 1,760 km in a straight line
  km("assam", "kerala", 2400, 2600); // Dispur to Thiruvananthapuram, about 2,500 km in a straight line
  km("maharashtra", "gujarat", 400, 480); // Mumbai to Gandhinagar, about 440 km
  if (C.bearing([0, 0], [0, 10]) !== 0 || C.bearing([0, 0], [10, 0]) !== 90 || C.bearing([0, 0], [0, -10]) !== 180 || C.bearing([0, 0], [-10, 0]) !== 270) bad("map: bearing works wrongly on the four main directions");

  // ---------- the question banks and investigations ----------
  const ids = new Set(ST.map((s) => s.id));
  if (K.STATE_ORDER.length !== 36 || new Set(K.STATE_ORDER).size !== 36 || K.STATE_ORDER.some((id) => !ids.has(id))) bad("lab: STATE_ORDER must list each of the 36 entities once");
  const capNames = K.CAP_ORDER.map((id) => BY[id] && BY[id].capital);
  if (K.CAP_ORDER.some((id) => !ids.has(id)) || new Set(K.CAP_ORDER).size !== K.CAP_ORDER.length) bad("lab: CAP_ORDER has an unknown or repeated entity");
  if (new Set(capNames).size !== capNames.length) bad("lab: two entities in the capitals question list share a capital (the question would have two answers)");
  for (const id of ["punjab", "haryana", "chandigarh", "jammukashmir"]) if (K.CAP_ORDER.includes(id)) bad(`lab: ${id} has a shared or double capital and cannot be asked by capital`);
  if (ST.filter((s) => !K.CAP_ORDER.includes(s.id)).length !== 4) bad("lab: the capitals list should leave out only Punjab, Haryana, Chandigarh and Jammu and Kashmir");
  const featIds = new Set([...M.RIVERS, ...M.RANGES, ...M.PLATEAUS, ...M.DESERTS].map((f) => f.id));
  for (const [type, id] of K.PHYS_ORDER) if (!featIds.has(id)) bad(`lab: ${type} ${id} in the Find it list is not drawn`);
  for (const kind of ["states", "capitals", "physical"]) {
    const b = K.bank(kind);
    if (b.length < 20) bad(`lab: the ${kind} question bank is short (${b.length})`);
  }
  if (K.bank("states")[0][1] !== "punjab") bad("lab: the first Find it question should be Punjab (the tests and the first lesson rely on it)");
  for (const [g, def] of Object.entries(K.PLACE_GROUPS)) {
    if (def.ids.some((id) => !ids.has(id))) bad(`lab: group ${g} has an unknown entity`);
    if (def.ids.length < 4) bad(`lab: group ${g} has fewer than 4 labels`);
  }
  const west = K.PLACE_GROUPS.west.ids;
  if (west.some((id) => !BY[id].coast.includes("Arabian Sea"))) bad("lab: every state on the west coast list must touch the Arabian Sea");
  for (let i = 1; i < west.length; i++) if (!(BY[west[i - 1]].lp[1] > BY[west[i]].lp[1])) bad(`lab: the west coast list is not in order going south at ${west[i]}`);
  if (west.join(",") !== "gujarat,maharashtra,goa,karnataka,kerala") bad("lab: the west coast order is gujarat, maharashtra, goa, karnataka, kerala");
  const east = K.PLACE_GROUPS.east.ids;
  if (east.some((id) => !BY[id].coast.includes("Bay of Bengal"))) bad("lab: every state on the east coast list must touch the Bay of Bengal");
  for (let i = 1; i < east.length; i++) if (!(BY[east[i - 1]].lp[1] > BY[east[i]].lp[1])) bad(`lab: the east coast list is not in order going south at ${east[i]}`);
  // neighbours of consecutive west coast states must touch, which is why the order is followed along the coast
  for (let i = 1; i < west.length; i++) if (!BY[west[i - 1]].nb.includes(west[i])) bad(`lab: ${west[i - 1]} and ${west[i]} should touch on the west coast`);
  for (let i = 1; i < east.length; i++) if (!BY[east[i - 1]].nb.includes(east[i])) bad(`lab: ${east[i - 1]} and ${east[i]} should touch on the east coast`);
  // Punjab close-up
  const pb = BY.punjab;
  const bb = C.bbox(pb);
  if (bb[0] < 73.6 || bb[2] > 77.4 || bb[1] < 29.4 || bb[3] > 32.9) bad("lab: Punjab does not fit in the close-up window");
  for (const id of ["sutlej", "beas", "ravi"]) if (!pb.rivers.includes(id)) bad(`lab: ${id} should be listed for Punjab`);
  const reg = K.PUNJAB_REGIONS;
  if (!C.inState(reg.majha.at, pb) || !C.inState(reg.doaba.at, pb) || !C.inState(reg.malwa.at, pb)) bad("lab: the labels of Majha, Doaba and Malwa must lie inside Punjab");
  // Majha lies between Ravi and Beas; Doaba between Beas and Sutlej; Malwa south of the Sutlej: check against the drawn rivers
  const lonAt = (id, lat) => {
    const p = M.RIVERS.find((r) => r.id === id).pts;
    for (let i = 0; i < p.length - 1; i++) if ((p[i][1] - lat) * (p[i + 1][1] - lat) <= 0 && p[i][1] !== p[i + 1][1]) return p[i][0] + ((p[i + 1][0] - p[i][0]) * (lat - p[i][1])) / (p[i + 1][1] - p[i][1]);
    return null;
  };
  const mj = reg.majha.at, db = reg.doaba.at, ml = reg.malwa.at;
  const rv = (id, lat) => lonAt(id, lat);
  if (!(rv("ravi", mj[1]) < mj[0] && mj[0] < rv("beas", mj[1]))) bad("lab: Majha is not between the Ravi and the Beas on the drawn map");
  if (!(rv("beas", db[1]) < db[0] && db[0] < (rv("sutlej", db[1]) || 99))) bad("lab: Doaba is not between the Beas and the Sutlej on the drawn map");
  if (!(ml[1] < 30.9)) bad("lab: Malwa should lie south of the Sutlej");

  // ---------- investigations ----------
  const modes = ["explore", "find", "place", "layers", "punjab"];
  K.INVS.forEach((v, i) => {
    if (v.mode !== modes[i]) bad(`lab: investigation ${i} should be mode ${modes[i]}`);
    if (v.predict.ans >= v.predict.opts.length || v.explain.ans >= v.explain.opts.length) bad(`lab: ${v.id}: answer index out of range`);
    if (v.predict.opts.length !== 3 || v.explain.opts.length !== 3) bad(`lab: ${v.id}: three options each`);
    if (!v.columns.some((c) => c.key === v.vary && c.var)) bad(`lab: ${v.id}: the varied column "${v.vary}" must be a variable column`);
    if (v.graph && !v.columns.some((c) => c.key === v.graph.y)) bad(`lab: ${v.id}: graph column is not a column`);
  });
  const west0 = K.INVS.find((v) => v.id === "west");
  if (west0.predict.opts[west0.predict.ans] !== "Narmada and Tapi") bad("lab: the prediction answer for the west-flowing rivers must be Narmada and Tapi");
  if (!/rift valley/.test(west0.explain.why)) bad("lab: the explanation of the west-flowing rivers must mention rift valleys");
  const dir0 = K.INVS.find((v) => v.id === "direction");
  if (dir0.predict.opts[dir0.predict.ans] !== dk("assam", "kerala").dir) bad("lab: the direction prediction answer is not what the map gives for Assam to Kerala");
  const pj = K.INVS.find((v) => v.id === "punjab");
  if (pj.predict.opts[pj.predict.ans] !== reg.doaba.between.replace(/^Between/, "Between")) bad("lab: the Doaba prediction answer must match the region's own text");
  const pl = K.INVS.find((v) => v.id === "place");
  if (pl.predict.opts[pl.predict.ans] !== BY.goa.name) bad("lab: the west-coast prediction (after Maharashtra) must be Goa");
  const lab = Labs.get("indiamap");
  if (!lab || lab.area !== "world") bad("lab: the India map explorer must be registered in the world area");
  for (const need of [[9, "sstpb", "geo-physical-features"], [9, "sstpb", "geo-drainage"], [10, "sstpb", "punjab-physical-features"], [11, "geography", "drainage-system"], [8, "sst", "reshaping-indias-political-map"]])
    if (!lab.chapters.some((c) => c.cls === need[0] && c.subject === need[1] && c.chapter === need[2])) bad(`lab: the India map should be mapped to ${need.join("/")}`);

  // ---------- translations ----------
  const i18n = vm.createContext({ currentLang: () => "en", Store: undefined });
  vm.runInContext(fs.readFileSync(path.join(root, "js", "i18n.js"), "utf8").replace(/^const /gm, "var ").replace(/^function /gm, "var __f = function "), i18n);
  vm.runInContext(fs.readFileSync(path.join(root, "js", "labs", "i18n.js"), "utf8"), i18n);
  const need = new Set();
  const src = fs.readFileSync(path.join(root, "js", "labs", "india-lab.js"), "utf8");
  for (const m of src.matchAll(/\bt\("((?:[^"\\\n]|\\.)+)"/g)) need.add(m[1]);
  K.STRINGS.forEach((s) => need.add(s));
  K.INVS.forEach((v) => {
    [v.title, v.question, ...v.predict.opts, ...v.held, v.go, v.explain.q, ...v.explain.opts, v.explain.why].forEach((s) => need.add(s));
    v.columns.forEach((c) => (need.add(c.label), c.unit && need.add(c.unit)));
  });
  need.add(K.ASSUME);
  need.add(lab.title);
  need.add(lab.objective);
  let n = 0;
  for (const s of need) {
    n++;
    for (const l of ["pa", "hi"]) if (!i18n.I18N[l][s]) bad(`map: no ${l} translation for "${String(s).slice(0, 70)}"`);
  }
  const GURMUKHI = /[਀-੿]/, DEVANAGARI = /[ऀ-ॿ]/;
  const names = [...ST.flatMap((s) => [s.name, s.capital]), ...M.RIVERS.map((r) => r.name), ...M.RANGES.map((r) => r.name), ...M.PLATEAUS.map((r) => r.name), ...M.DESERTS.map((r) => r.name), ...K.MODE_NAMES];
  for (const s of names) {
    if (i18n.I18N.pa[s] && !GURMUKHI.test(i18n.I18N.pa[s])) bad(`map: the Punjabi for "${s}" is not in Gurmukhi`);
    if (i18n.I18N.hi[s] && !DEVANAGARI.test(i18n.I18N.hi[s])) bad(`map: the Hindi for "${s}" is not in Devanagari`);
  }
  // standard spellings of a few names (a regression guard against typing mistakes)
  const STD = { Punjab: ["ਪੰਜਾਬ", "पंजाब"], Chandigarh: ["ਚੰਡੀਗੜ੍ਹ", "चंडीगढ़"], Haryana: ["ਹਰਿਆਣਾ", "हरियाणा"], Rajasthan: ["ਰਾਜਸਥਾਨ", "राजस्थान"], Kerala: ["ਕੇਰਲ", "केरल"], Narmada: ["ਨਰਮਦਾ", "नर्मदा"], Sutlej: ["ਸਤਲੁਜ", "सतलुज"], Beas: ["ਬਿਆਸ", "ब्यास"], Ravi: ["ਰਾਵੀ", "रावी"] };
  for (const [en, [pa, hi]] of Object.entries(STD)) {
    if (i18n.I18N.pa[en] !== pa) bad(`map: Punjabi for ${en} should be ${pa}`);
    if (i18n.I18N.hi[en] !== hi) bad(`map: Hindi for ${en} should be ${hi}`);
  }
  console.log(`  india map: ${ST.length} entities, ${arcs} arcs, ${segs.length} segments (0 crossings), ${cities} cities, ${paths} paths (${points} points), ${(size / 1024).toFixed(0)} KB, ${n} strings with Punjabi and Hindi`);
};
