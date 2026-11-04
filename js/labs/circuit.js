// Circuit builder (Physics): a battery, two places in series (S1, S2) and two parallel branches (A and B, two places each).
// Parts: bulb, resistors (10, 20, 50 ohm), switch, ammeter, voltmeter and a gap. Empty place = plain wire.
// Idealised: a battery with no internal resistance, wires with no resistance, a bulb that is a fixed 10 ohm resistor
// (a real filament gets more resistant as it heats), an ideal ammeter (0 ohm) and an ideal voltmeter (infinite resistance).
//
//   Ohm's law   I = V / R        series  R = R1 + R2          parallel  1/R = 1/R1 + 1/R2          power  P = I^2 R = V I

(() => {
  const SLOTS = ["S1", "S2", "A1", "A2", "B1", "B2"];
  const RES = { "": 0, bulb: 10, r10: 10, r20: 20, r50: 50, sw1: 0, amm: 0, sw0: Infinity, volt: Infinity, gap: Infinity };
  const BULB_R = 10; // ohm
  const BULB_RATED_W = 3.6; // watt: a 6 V bulb of 10 ohm
  const NAME = { "": "wire", bulb: "bulb", r10: "10 Ω resistor", r20: "20 Ω resistor", r50: "50 Ω resistor", sw1: "switch (closed)", sw0: "switch (open)", amm: "ammeter", volt: "voltmeter", gap: "gap" };
  const SHORT = { "": "", bulb: "bulb", r10: "10 Ω", r20: "20 Ω", r50: "50 Ω", sw1: "switch", sw0: "switch", amm: "ammeter", volt: "voltmeter", gap: "gap" };
  const R = (k) => RES[k] ?? Infinity;

  const par = (rs) => {
    // parallel of branch resistances; Infinity = no current; any 0 = short
    const live = rs.filter((r) => r !== Infinity);
    if (!live.length) return Infinity;
    if (live.some((r) => r === 0)) return 0;
    return 1 / live.reduce((a, r) => a + 1 / r, 0);
  };

  // board: { S1, S2, A1, A2, B1, B2 } (part ids), V: battery voltage.
  // Returns the state of the circuit and the current through, and the voltage across, every place.
  function solve(b, V) {
    const rs = R(b.S1) + R(b.S2);
    const usedA = b.A1 !== "" || b.A2 !== "";
    const usedB = b.B1 !== "" || b.B2 !== "";
    const bypass = !usedA && !usedB;
    const ra = usedA ? R(b.A1) + R(b.A2) : null;
    const rb = usedB ? R(b.B1) + R(b.B2) : null;
    const rp = bypass ? 0 : par([ra, rb].filter((x) => x !== null));
    const rt = rs + rp;
    const out = { rs, ra, rb, rp, rt, bypass, usedA, usedB, V, I: 0, Vp: 0, Ia: 0, Ib: 0, state: "open", at: {}, volt: {}, shorted: [] };
    if (rt === Infinity) out.state = "open";
    else if (rt === 0) out.state = "short";
    else {
      out.state = "closed";
      out.I = V / rt;
    }
    const closed = out.state === "closed";
    // Voltage across the parallel section, and the current in each branch.
    if (closed) {
      out.Vp = out.I * rp;
      if (rp === 0 && !bypass) {
        // a branch of plain wire / ammeter / closed switch: it takes all the current and the other branch gets none
        const zero = [ra === 0 ? "A" : null, rb === 0 ? "B" : null].filter(Boolean);
        out.Ia = zero.includes("A") ? out.I / zero.length : 0;
        out.Ib = zero.includes("B") ? out.I / zero.length : 0;
        // a branch with resistance that is bypassed by a zero-resistance branch
        if (ra !== null && ra > 0 && ra !== Infinity) out.shorted.push("A");
        if (rb !== null && rb > 0 && rb !== Infinity) out.shorted.push("B");
      } else {
        out.Ia = ra === null || ra === Infinity ? 0 : out.Vp / ra;
        out.Ib = rb === null || rb === Infinity ? 0 : out.Vp / rb;
      }
    } else if (out.state === "open" && rs !== Infinity && rp === Infinity) {
      out.Vp = V; // no current: the whole battery voltage appears across the blocked parallel section
    }
    // Current through, and voltage across, each place (current in a place of an open or shorted circuit is 0).
    const cur = { S1: out.I, S2: out.I, A1: out.Ia, A2: out.Ia, B1: out.Ib, B2: out.Ib };
    SLOTS.forEach((k) => {
      const p = b[k];
      const I = closed ? cur[k] : 0;
      out.at[k] = { I, V: R(p) === Infinity ? null : I * R(p), P: p === "bulb" ? I * I * BULB_R : p === "" ? null : R(p) === Infinity ? 0 : I * I * R(p) };
    });
    // The voltmeter reads the potential difference across its own place.
    const series = ["S1", "S2"];
    const blockers = series.filter((k) => R(b[k]) === Infinity).length + (!bypass && rp === Infinity ? 1 : 0);
    SLOTS.forEach((k) => {
      if (b[k] !== "volt") return;
      let v = null;
      if (series.includes(k)) {
        if (blockers === 1) v = V; // the only break in the loop: the whole battery voltage is across it
      } else {
        const other = k.endsWith("1") ? b[k[0] + "2"] : b[k[0] + "1"];
        if (R(other) !== Infinity && rs !== Infinity) v = closed ? out.Vp : out.state === "open" && rp === Infinity ? V : null;
      }
      out.volt[k] = v;
    });
    out.bulbs = SLOTS.filter((k) => b[k] === "bulb").map((k) => ({ slot: k, P: out.at[k].P, I: out.at[k].I }));
    out.Pbat = closed ? V * out.I : 0;
    return out;
  }

  // How the circuit is built, in words: "bulb + 10 Ω" (series) or "bulb ∥ bulb" (parallel branches).
  function setup(b, tr = (s) => s) {
    const nm = (k) => (SHORT[k] === "bulb" || SHORT[k] === "switch" || SHORT[k] === "ammeter" || SHORT[k] === "voltmeter" || SHORT[k] === "gap" ? tr(SHORT[k]) : SHORT[k]);
    const chain = (ks) => ks.map((k) => b[k]).filter((p) => p !== "").map(nm);
    const ser = chain(["S1", "S2"]);
    const ba = chain(["A1", "A2"]);
    const bb = chain(["B1", "B2"]);
    const branches = [ba, bb].filter((x) => x.length).map((x) => x.join(" + "));
    const parts = [];
    if (ser.length) parts.push(ser.join(" + "));
    if (branches.length) parts.push(branches.length > 1 && ser.length ? "(" + branches.join(" ∥ ") + ")" : branches.join(" ∥ "));
    return parts.length ? parts.join(" + ") : tr("only wire");
  }

  Labs.calc.circuit = { solve, setup, SLOTS, RES, BULB_R, BULB_RATED_W, par };

  // ---------- the lab ----------
  const PARTS = ["bulb", "r10", "r20", "r50", "sw1", "amm", "volt", "gap", "remove"];
  const PART_LABEL = { bulb: "Bulb", r10: "Resistor 10 Ω", r20: "Resistor 20 Ω", r50: "Resistor 50 Ω", sw1: "Electric switch", amm: "Ammeter", volt: "Voltmeter", gap: "Gap (break)", remove: "Remove part" };
  // Where each place is drawn (viewBox 640 x 370): centre x, y.
  const POS = { S1: [140, 70], S2: [260, 70], A1: [420, 150], A2: [530, 150], B1: [420, 250], B2: [530, 250] };
  const VB = [640, 370];
  const SW = 92, SH = 86; // size of a place
  const TXT = (x, y, s, cls = "s-m", anchor = "middle") => `<text class="${cls}" x="${x}" y="${y}" text-anchor="${anchor}">${esc(s)}</text>`;
  const fix2 = (x) => Labs.fix(x, 2);

  function glyph(k, part, S, sol) {
    const [cx, cy] = POS[k];
    const at = sol.at[k];
    const live = sol.state === "closed" && at.I > 0;
    let g = "";
    const wire = (x1, x2) => `<line class="s-wire ${live ? "vl-on" : ""}" x1="${x1}" y1="${cy}" x2="${x2}" y2="${cy}"/>`;
    switch (part) {
      case "":
        return wire(cx - SW / 2, cx + SW / 2);
      case "bulb": {
        const glow = Math.min(1, at.P / Labs.calc.circuit.BULB_RATED_W);
        g = wire(cx - SW / 2, cx - 24) + wire(cx + 24, cx + SW / 2);
        g += `<circle class="vl-glass" cx="${cx}" cy="${cy}" r="24"/><circle class="vl-glow" cx="${cx}" cy="${cy}" r="24" style="opacity:${pt(glow * 0.95)}"/>`;
        g += `<path class="s-wire" d="M${cx - 12},${cy - 12} L${cx + 12},${cy + 12} M${cx - 12},${cy + 12} L${cx + 12},${cy - 12}" style="stroke-width:2"/>`;
        g += TXT(cx, cy + 40, `${fix2(at.P)} W`, "s-m");
        return g;
      }
      case "r10":
      case "r20":
      case "r50": {
        g = wire(cx - SW / 2, cx - 28) + wire(cx + 28, cx + SW / 2);
        g += `<rect class="s-res" x="${cx - 28}" y="${cy - 11}" width="56" height="22" rx="2"/>`;
        g += TXT(cx, cy - 18, `${Labs.calc.circuit.RES[part]} Ω`, "s-m");
        g += TXT(cx, cy + 36, at.V == null ? "" : `${fix2(at.V)} V`, "s-m");
        return g;
      }
      case "sw1":
      case "sw0": {
        const on = part === "sw1";
        g = wire(cx - SW / 2, cx - 26) + wire(cx + 26, cx + SW / 2);
        g += `<circle class="s-pt" cx="${cx - 26}" cy="${cy}" r="4"/><circle class="s-pt" cx="${cx + 26}" cy="${cy}" r="4"/>`;
        g += on ? `<line class="s-wire ${live ? "vl-on" : ""}" x1="${cx - 26}" y1="${cy}" x2="${cx + 26}" y2="${cy}"/>` : `<line class="s-wire" x1="${cx - 26}" y1="${cy}" x2="${cx + 18}" y2="${cy - 24}"/>`;
        g += TXT(cx, cy + 36, on ? t("closed") : t("open"), "s-m");
        return g;
      }
      case "amm":
      case "volt": {
        const isA = part === "amm";
        g = wire(cx - SW / 2, cx - 24) + wire(cx + 24, cx + SW / 2);
        g += `<circle class="s-meter" cx="${cx}" cy="${cy}" r="24"/>${TXT(cx, cy + 8, isA ? "A" : "V", "s-t big")}`;
        const rd = isA ? `${fix2(at.I)} A` : sol.volt[k] == null ? "— V" : `${fix2(sol.volt[k])} V`;
        g += TXT(cx, cy + 40, rd, "s-m");
        return g;
      }
      case "gap":
        return `<line class="s-wire" x1="${cx - SW / 2}" y1="${cy}" x2="${cx - 14}" y2="${cy}"/><line class="s-wire" x1="${cx + 14}" y1="${cy}" x2="${cx + SW / 2}" y2="${cy}"/>${TXT(cx, cy + 40, t("gap"), "s-m")}`;
    }
    return "";
  }

  function board(S, sol) {
    const live = sol.state === "closed";
    const W = (d, extra = "") => `<path class="s-wire ${live ? "vl-on" : ""} ${extra}" d="${d}"/>`;
    const [bx, by0, by1] = [50, 70, 320];
    let s = "";
    // battery (left)
    s += `<path class="s-wire ${live ? "vl-on" : ""}" d="M${bx},${by0} V170 M${bx},215 V${by1}"/>`;
    s += `<line class="s-batt-l" x1="${bx - 24}" y1="170" x2="${bx + 24}" y2="170"/><line class="s-batt-s" x1="${bx - 13}" y1="193" x2="${bx + 13}" y2="193"/>`;
    s += TXT(bx + 38, 168, "+", "s-t") + TXT(bx + 38, 206, "−", "s-t") + TXT(bx + 12, 125, `${S.V} V`, "s-t", "start");
    // wires between places
    s += W(`M${bx},${by0} H${POS.S1[0] - SW / 2} M${POS.S1[0] + SW / 2},${by0} H${POS.S2[0] - SW / 2} M${POS.S2[0] + SW / 2},${by0} H340`);
    // buses and bottom rail
    s += W(`M340,${by0} V250`) + W(`M610,150 V${by1} H${bx}`);
    // branch connections
    const branch = (key, y, used) => {
      const [a1, a2] = [POS[key + "1"][0], POS[key + "2"][0]];
      return `<path class="s-wire ${live && used ? "vl-on" : ""} ${used ? "" : "vl-unused"}" d="M340,${y} H${a1 - SW / 2} M${a1 + SW / 2},${y} H${a2 - SW / 2} M${a2 + SW / 2},${y} H610"/>`;
    };
    s += branch("A", 150, sol.usedA) + branch("B", 250, sol.usedB);
    if (sol.bypass) s += W(`M340,${by0} H610 V150`);
    s += `<circle class="s-pt" cx="340" cy="150" r="5"/><circle class="s-pt" cx="610" cy="250" r="5"/>`;
    // places
    SLOTS.forEach((k) => (s += glyph(k, S.b[k], S, sol)));
    s += TXT(140, 22, t("In series"), "s-m") + TXT(475, 22, t("In parallel"), "s-m") + TXT(357, 134, "A", "s-t", "middle") + TXT(357, 234, "B", "s-t", "middle");
    return `<svg viewBox="0 0 ${VB[0]} ${VB[1]}" class="vl-svg" aria-hidden="true">${s}</svg>`;
  }

  const SLOT_NAME = { S1: "series place 1", S2: "series place 2", A1: "branch A, place 1", A2: "branch A, place 2", B1: "branch B, place 1", B2: "branch B, place 2" };
  const pt = (x) => Math.round(x * 10) / 10;

  function describe(S, sol) {
    if (sol.state === "short") return t("Short circuit: only wire joins the two ends of the battery, so nothing limits the current.");
    if (sol.state === "open") return t("Open circuit: there is a break, so no current flows.");
    const bits = [t("Closed circuit."), t("Battery {v} V, total resistance {r} Ω, current {i} A.", { v: S.V, r: Labs.num(sol.rt, 2), i: fix2(sol.I) })];
    if (sol.bulbs.length) bits.push(sol.bulbs.map((b, i) => t("Bulb {n}: {p} W.", { n: i + 1, p: fix2(b.P) })).join(" "));
    return bits.join(" ");
  }

  function mount(el, api) {
    const S = { V: 6, b: { S1: "", S2: "", A1: "", A2: "", B1: "", B2: "" }, sel: null };
    let flow;
    const stage = () => `<div class="vl-circuit">
      <div class="vl-ctrl"><label for="vlc-v">${t("Battery voltage")}</label>
        <select id="vlc-v" data-v>${[1.5, 3, 4.5, 6, 9, 12].map((v) => `<option value="${v}">${v} V</option>`).join("")}</select></div>
      <div class="vl-boardwrap"><div data-board class="vl-board" style="aspect-ratio:${VB[0]}/${VB[1]}"></div>
        <div class="vl-slots" data-slots>${SLOTS.map((k) => `<button type="button" class="vl-slot" data-slot="${k}" style="left:${pt(((POS[k][0] - SW / 2) / VB[0]) * 100)}%;top:${pt(((POS[k][1] - SH / 2) / VB[1]) * 100)}%;width:${pt((SW / VB[0]) * 100)}%;height:${pt((SH / VB[1]) * 100)}%"></button>`).join("")}</div></div>
      <p class="small muted vl-hint" data-hint></p>
      <div class="vl-parts" role="group" aria-label="${esc(t("Parts. Choose one, then tap a place on the board, or drag it there."))}">${PARTS.map((p) => `<button type="button" class="vl-part ${p === "remove" ? "vl-remove" : ""}" data-part="${p}" aria-pressed="false">${t(PART_LABEL[p])}</button>`).join("")}</div>
      <p class="vl-warn" data-warn role="status"></p>
      <div class="sim-btns"><button type="button" class="btn primary" data-vl-run data-record>${icon("check")} ${t("Record this run")}</button></div></div>`;

    function paint(focusSlot) {
      const sol = solve(S.b, S.V);
      el.querySelector("[data-board]").innerHTML = board(S, sol);
      SLOTS.forEach((k) => {
        const b = el.querySelector(`[data-slot="${k}"]`);
        const part = S.b[k];
        const rd = sol.at[k];
        const extra = part === "amm" ? `, ${fix2(rd.I)} A` : part === "volt" ? `, ${sol.volt[k] == null ? t("no reading") : fix2(sol.volt[k]) + " V"}` : part === "bulb" ? `, ${fix2(rd.P)} W` : "";
        b.setAttribute("aria-label", `${t(SLOT_NAME[k])}: ${t(NAME[part])}${extra}${part === "sw1" || part === "sw0" ? ". " + t("Tap to switch it.") : ""}`);
        b.classList.toggle("vl-target", !!S.sel && S.sel !== "remove");
      });
      el.querySelectorAll("[data-part]").forEach((b) => b.setAttribute("aria-pressed", b.dataset.part === S.sel));
      el.querySelector("[data-hint]").textContent = S.sel === "remove" ? t("Now tap a place on the board to clear it.") : S.sel ? t("Now tap a place on the board to put the {p} there.", { p: t(PART_LABEL[S.sel]).toLowerCase() }) : t("Tap a part below, then a place on the board. Tap a switch to open or close it.");
      const w = el.querySelector("[data-warn]");
      const warn = [];
      if (sol.state === "short") warn.push(t("Short circuit! With only wire across the battery, the current would be huge: the wires would heat up and a real battery could be damaged. Add a bulb or a resistor."));
      if (sol.shorted.length) warn.push(t("Branch {x} is short-circuited by the wire in the other branch, so no current flows through it.", { x: sol.shorted.join(" + ") }));
      if (SLOTS.some((k) => S.b[k] === "volt" && (k[0] === "S")) && sol.state === "open") warn.push(t("A voltmeter has a very high resistance. In series it blocks the current. Put it in a branch beside the part you want to measure."));
      if (sol.bulbs.some((b) => b.P > 2 * Labs.calc.circuit.BULB_RATED_W)) warn.push(t("A bulb is getting more than twice its rated power. A real bulb would burn out."));
      if (sol.state === "open" && !warn.length) warn.push(t("The circuit is open. Close every switch and fill every gap."));
      if (w.textContent !== warn.join(" ")) w.textContent = warn.join(" ");
      w.classList.toggle("is-bad", sol.state === "short" || sol.shorted.length > 0);
      flow.live(
        [
          [t("Circuit"), sol.state === "closed" ? t("Closed") : sol.state === "open" ? t("Open") : t("Short circuit")],
          [t("Battery voltage V"), `${S.V} V`],
          [t("Total resistance R"), sol.state === "short" ? "0 Ω" : sol.rt === Infinity ? t("infinite (open)") : `${Labs.num(sol.rt, 2)} Ω`],
          [t("Current from the battery I = V / R"), sol.state === "short" ? t("very large") : `${fix2(sol.I)} A`],
          [t("Power from the battery P = V × I"), `${fix2(sol.Pbat)} W`],
          ...sol.bulbs.map((b, i) => [t("Bulb {n}: current, power", { n: i + 1 }), `${fix2(b.I)} A, ${fix2(b.P)} W`]),
        ],
        describe(S, sol)
      );
      if (focusSlot) {
        const f = el.querySelector(`[data-slot="${focusSlot}"]`);
        f && f.focus({ preventScroll: true });
      }
      return sol;
    }

    function place(k, part) {
      if (part === "remove") S.b[k] = "";
      else S.b[k] = part;
      paint(k);
    }

    function setBoard(b, V) {
      S.b = Object.assign({ S1: "", S2: "", A1: "", A2: "", B1: "", B2: "" }, b);
      S.V = V;
      S.sel = null;
      const v = el.querySelector("[data-v]");
      if (v) v.value = String(V);
      paint();
    }

    const PRESETS = {
      ohm: () => setBoard({ S1: "r10", S2: "r20" }, 6),
      series: () => setBoard({ S1: "bulb" }, 6),
      parallel: () => setBoard({ A1: "bulb" }, 6),
    };

    flow = Labs.flow(el, api, {
      assumptions: "A battery with no internal resistance, wires with no resistance, a bulb that is a fixed 10 Ω (a real filament gets more resistant as it heats up), an ideal ammeter (no resistance) and an ideal voltmeter (infinite resistance). Real circuits differ a little.",
      columns: [
        { key: "setup", label: "Circuit", var: true },
        { key: "V", label: "Battery voltage", unit: "V", var: true },
        { key: "R", label: "Total resistance", unit: "Ω" },
        { key: "I", label: "Electric current", unit: "A", d: 2 },
        { key: "P", label: "Power of the first bulb", unit: "W", d: 2 },
      ],
      investigations: [
        {
          id: "ohm",
          title: "Battery voltage and current",
          question: "A 10 Ω and a 20 Ω resistor are in series with a 6 V battery. You change the battery to 12 V. What happens to the current?",
          predict: { opts: ["It stays the same", "It doubles", "It becomes four times as large"], ans: 1 },
          vary: "V",
          held: ["Circuit (10 Ω + 20 Ω in series)"],
          go: "Record a run with 6 V. Then change only the battery voltage (try 3 V, 9 V and 12 V) and record each run.",
          explain: {
            q: "Which statement do your runs support?",
            opts: ["With the resistance fixed, the current is proportional to the voltage: I = V / R", "The current does not depend on the voltage", "A bigger voltage makes the resistors bigger"],
            ans: 0,
            why: "Each time the voltage doubled the current doubled too, while R stayed 30 Ω. That is Ohm's law: I = V / R. The graph of I against V is a straight line through the origin.",
          },
          graph: { x: "V", y: "I" },
        },
        {
          id: "series",
          title: "A second bulb in series",
          question: "One bulb is lit by a 6 V battery. You add a second identical bulb in series with it. What happens to the brightness of the first bulb?",
          predict: { opts: ["It gets dimmer", "It stays the same", "It gets brighter"], ans: 0 },
          vary: "setup",
          held: ["Battery voltage (6 V)"],
          go: "Record a run with one bulb. Then put a second bulb in the other series place and record again.",
          explain: {
            q: "Why does the first bulb change?",
            opts: ["The battery got weaker when a bulb was added", "The total resistance doubled, so the current halved; the bulb's power I²R fell to a quarter", "The first bulb's own resistance went down"],
            ans: 1,
            why: "In series the resistances add: 10 Ω + 10 Ω = 20 Ω. The same current flows through both bulbs: I = 6 / 20 = 0.3 A, half of before. Power P = I² R = 0.3² × 10 = 0.9 W, a quarter of 3.6 W, so each bulb is dimmer.",
          },
          graph: { x: "run", y: "P" },
        },
        {
          id: "parallel",
          title: "A second bulb in parallel",
          question: "One bulb is lit by a 6 V battery. You add a second identical bulb in a parallel branch. What happens to the first bulb and to the current from the battery?",
          predict: { opts: ["The first bulb stays as bright; the battery current doubles", "The first bulb gets dimmer; the battery current stays the same", "The first bulb gets brighter; the battery current halves"], ans: 0 },
          vary: "setup",
          held: ["Battery voltage (6 V)"],
          go: "Record a run with one bulb in branch A. Then put a second bulb in branch B and record again.",
          explain: {
            q: "Which explanation fits your table?",
            opts: ["Each branch is connected straight across the battery, so each bulb still gets the full 6 V; the branch currents add up", "The two bulbs share the same current, so each gets half", "Adding a bulb raises the battery's voltage"],
            ans: 0,
            why: "Branches in parallel each have the full battery voltage. Each bulb still carries 6 / 10 = 0.6 A and glows as before, while the battery supplies 0.6 + 0.6 = 1.2 A. The total resistance fell to 5 Ω.",
          },
          graph: { x: "run", y: "I" },
        },
      ],
      mountStage(slot, F) {
        flow = F;
        slot.innerHTML = stage();
        const root = slot;
        root.querySelector("[data-v]").value = String(S.V);
        root.addEventListener("change", (e) => {
          if (e.target.matches("[data-v]")) {
            S.V = Number(e.target.value);
            paint();
          }
        });
        root.addEventListener("click", (e) => {
          const p = e.target.closest("[data-part]");
          if (p && !p.dataset.dragged) {
            S.sel = S.sel === p.dataset.part ? null : p.dataset.part;
            paint();
            return;
          }
          const sl = e.target.closest("[data-slot]");
          if (sl) {
            const k = sl.dataset.slot;
            if (S.sel) {
              place(k, S.sel);
              S.sel = null;
              paint(k);
            } else if (S.b[k] === "sw1" || S.b[k] === "sw0") {
              S.b[k] = S.b[k] === "sw1" ? "sw0" : "sw1";
              paint(k);
            }
            return;
          }
          if (e.target.closest("[data-record]")) record();
        });
        // Drag a part onto a place (the same as choosing it, then tapping the place).
        Games.draggable(root, "[data-part]", {
          onDrop(chip, els) {
            const sl = els.find((x) => x.matches && x.matches("[data-slot]"));
            if (sl) {
              S.sel = null;
              place(sl.dataset.slot, chip.dataset.part);
            }
          },
          onTap() {},
          over(els) {
            root.querySelectorAll("[data-slot]").forEach((b) => b.classList.toggle("vl-over", els.includes(b)));
          },
        });
      },
      onInvestigation(inv) {
        PRESETS[inv.id]();
      },
    });

    function record() {
      const sol = solve(S.b, S.V);
      const first = sol.bulbs[0];
      flow.addRun({
        setup: setup(S.b, t),
        V: S.V,
        R: sol.state === "short" ? 0 : sol.rt === Infinity ? t("open") : sol.rt,
        I: sol.state === "short" ? t("too large") : sol.I,
        P: first ? first.P : "—",
      });
    }
  }

  Labs.register("circuit", {
    title: "Circuit builder",
    area: "physics",
    icon: "bolt",
    objective: "Build series and parallel circuits with a battery, bulbs, resistors, a switch and meters. See when a circuit is open, closed or short-circuited, and how voltage, current, resistance and brightness are linked by Ohm's law.",
    chapters: [
      { cls: 6, subject: "sciencepb", chapter: "electricity-and-circuits" },
      { cls: 7, subject: "science", chapter: "electricity-circuits-and-their-components" },
      { cls: 7, subject: "sciencepb", chapter: "electric-current-and-its-effects" },
      { cls: 8, subject: "science", chapter: "electricity-magnetic-and-heating-effects" },
      { cls: 10, subject: "science", chapter: "electricity" },
      { cls: 12, subject: "physics", chapter: "current-electricity" },
    ],
    mount,
  });
})();
