// Independent audit of the numerical generators in js/gen-sci.js (used by scripts/check-gen.js).
// For each generator the audit reads the numbers back out of the question TEXT with a regular expression and recomputes the right answer
// from the textbook formula here, without using any code from the generator, then compares it with the option marked correct.
// Physics sign conventions (NCERT new Cartesian convention) and NCERT atomic masses are written out again in this file on purpose.
// Every question a generator makes must match one of its rules (so a new question wording cannot slip through unchecked).

const N = (x) => parseFloat(String(x).replace(/,/g, "").replace(/−/g, "-"));
const rupees = (s) => [...s.matchAll(/₹([\d,]+(?:\.\d+)?)/g)].map((m) => N(m[1]));
const list = (s) => s.split(",").map((x) => N(x.trim()));
const SUPD = { "⁰": "0", "¹": "1", "²": "2", "³": "3", "⁴": "4", "⁵": "5", "⁶": "6", "⁷": "7", "⁸": "8", "⁹": "9", "⁻": "-" };
const SUBD = { "₀": 0, "₁": 1, "₂": 2, "₃": 3, "₄": 4, "₅": 5, "₆": 6, "₇": 7, "₈": 8, "₉": 9 };
// value of an answer string: "1,26,000 m/s", "−₹5,000", "+12 cm", "6.63 × 10⁻³⁴ m", "2 : 1"
function got(s) {
  s = String(s);
  const sc = s.match(/^([\d.]+) × 10([⁰¹²³⁴⁵⁶⁷⁸⁹⁻]+)/);
  if (sc) return parseFloat(sc[1]) * 10 ** parseFloat([...sc[2]].map((c) => SUPD[c]).join(""));
  const m = s.replace(/[₹+]/g, "").match(/[−-]?[\d,]*\.?\d+/);
  return m ? N(m[0]) : NaN;
}
const AMASS = { H: 1, C: 12, N: 14, O: 16, Na: 23, Cl: 35.5, Ca: 40, S: 32, K: 39, Mg: 24, Al: 27, Fe: 56, Cu: 63.5 };
// "C₆H₁₂O₆" -> { C: 6, H: 12, O: 6 }
function atoms(formula) {
  const out = {};
  for (const m of formula.matchAll(/([A-Z][a-z]?)([₀-₉]*)/g)) out[m[1]] = (out[m[1]] || 0) + (m[2] ? parseInt([...m[2]].map((c) => SUBD[c]).join(""), 10) : 1);
  return out;
}
const massOf = (cnt) => Object.entries(cnt).reduce((s, [e, c]) => s + AMASS[e] * c, 0);
const natureOf = (real, m) => `${real ? "Real" : "Virtual"}, ${m < 0 ? "inverted" : "erect"} and ${Math.abs(Math.abs(m) - 1) < 1e-9 ? "same size" : Math.abs(m) > 1 ? "magnified" : "diminished"}`;

// image distance by the NCERT new Cartesian convention (u is negative; f negative for concave mirror / concave lens)
function image(kind, fabs, uabs) {
  const mirror = /mirror/.test(kind), f = (/concave/.test(kind) === mirror ? -1 : 1) * fabs; // concave mirror: f<0; concave lens: f<0
  const fv = /concave/.test(kind) ? -fabs : fabs, u = -uabs;
  const v = mirror ? 1 / (1 / fv - 1 / u) : 1 / (1 / fv + 1 / u);
  const m = mirror ? -v / u : v / u;
  return { v, m, real: mirror ? v < 0 : v > 0, f };
}

// Each rule: [regex, (match, qtext) => expected number | string]. `tol` is the relative tolerance (3-4 significant figures need 0.006).
const RULES = {
  sciSpeedConv: [[/^Convert a speed of (\d+) km\/h into m\/s\.$/, (m) => (N(m[1]) * 1000) / 3600], [/^A cyclist moves at ([\d.]+) m\/s\. Express this speed in km\/h\.$/, (m) => (N(m[1]) * 3600) / 1000]],
  sciDST: [
    [/bus moves at a steady (\d+) km\/h for (\d+) minutes/, (m) => (N(m[1]) * N(m[2])) / 60],
    [/train covers ([\d.]+) km at a steady (\d+) km\/h\. How many minutes/, (m) => (N(m[1]) / N(m[2])) * 60],
    [/runner covers ([\d.,]+) m in (\d+) s .*km\/h/, (m) => (N(m[1]) / N(m[2])) * 3.6],
    [/car travels ([\d.]+) km in (\d+) minutes .*m\/s/, (m) => (N(m[1]) * 1000) / (N(m[2]) * 60)],
  ],
  sciAvgSpeed: [
    [/goes (\d+) km at (\d+) km\/h and returns the same \d+ km at (\d+) km\/h/, (m) => (2 * N(m[1])) / (N(m[1]) / N(m[2]) + N(m[1]) / N(m[3]))],
    [/travels at (\d+) km\/h for (\d+) hours? and then at (\d+) km\/h for (\d+) hours?/, (m) => (N(m[1]) * N(m[2]) + N(m[3]) * N(m[4])) / (N(m[2]) + N(m[4]))],
  ],
  sciDensity: [
    [/mass of ([\d.,]+) kg and a volume of ([\d.]+) m³/, (m) => N(m[1]) / N(m[2])],
    [/density of \w+ is ([\d.]+) g\/cm³\. Express/, (m) => N(m[1]) * 1000],
    [/density of \w+ is ([\d.]+) g\/cm³\. Find the mass of (\d+) cm³/, (m) => N(m[1]) * N(m[2])],
    [/\(density ([\d.]+) g\/cm³\) has a mass of ([\d.,]+) g/, (m) => N(m[2]) / N(m[1])],
  ],
  sciPressure: [
    [/force of (\d+) N acts on an area of (\d+) cm²/, (m) => N(m[1]) / (N(m[2]) / 10000)],
    [/box of mass (\d+) kg rests .* area of ([\d.]+) m²/, (m) => (N(m[1]) * 10) / N(m[2])],
    [/density (\d+) kg\/m³\)? ?.*that is (\d+) m deep|of density (\d+) kg\/m³ that is (\d+) m deep/, (m) => N(m[1] || m[3]) * N(m[2] || m[4]) * 10],
  ],
  sciWorkPower: [
    [/lifts a (\d+) kg load through (\d+) m in (\d+) s/, (m) => (N(m[1]) * 10 * N(m[2])) / N(m[3])],
    [/A ([\d.]+) kW motor runs for (\d+) minutes/, (m) => N(m[1]) * N(m[2]) * 60],
    [/machine of power ([\d,]+) W does ([\d,]+) J of work\. How long/, (m) => N(m[2]) / N(m[1])],
  ],
  sciResist: [
    [/^Three resistors of (\d+) Ω, (\d+) Ω and (\d+) Ω are connected in series/, (m) => N(m[1]) + N(m[2]) + N(m[3])],
    [/^Three resistors of (\d+) Ω, (\d+) Ω and (\d+) Ω are connected in parallel/, (m) => 1 / (1 / N(m[1]) + 1 / N(m[2]) + 1 / N(m[3]))],
    [/^A (\d+) Ω resistor is connected in series with a parallel combination of (\d+) Ω and (\d+) Ω/, (m) => N(m[1]) + 1 / (1 / N(m[2]) + 1 / N(m[3]))],
  ],
  sciCircuit: [
    [/^Two resistors of (\d+) Ω and (\d+) Ω are connected in series across a battery of ([\d.]+) V\. Find the current/, (m) => N(m[3]) / (N(m[1]) + N(m[2]))],
    [/^Two resistors of (\d+) Ω and (\d+) Ω are connected in series across a battery of ([\d.]+) V\. Find the potential difference across the (\d+) Ω/, (m) => (N(m[3]) / (N(m[1]) + N(m[2]))) * N(m[4])],
    [/^Two resistors of (\d+) Ω and (\d+) Ω are connected in parallel across a battery of ([\d.]+) V/, (m) => N(m[3]) / N(m[1]) + N(m[3]) / N(m[2])],
  ],
  sciJoule: [
    [/^A current of (\d+) A flows through a (\d+) Ω resistor for (\d+) s\./, (m) => N(m[1]) ** 2 * N(m[2]) * N(m[3])],
    [/^A heater of resistance (\d+) Ω carries a current of (\d+) A for (\d+) minutes?\./, (m) => N(m[2]) ** 2 * N(m[1]) * N(m[3]) * 60],
  ],
  sciPower2: [
    [/^A heater of resistance (\d+) Ω is connected to a (\d+) V supply/, (m) => N(m[2]) ** 2 / N(m[1])],
    [/marked (\d+) W, (\d+) V/, (m) => N(m[2]) ** 2 / N(m[1])],
    [/^A current of ([\d.]+) A flows through a (\d+) Ω resistor\. Find the power/, (m) => N(m[1]) ** 2 * N(m[2])],
  ],
  sciBill: [[/^A family uses (.*) every day\. At ₹(\d+) per unit .* for 30 days\.$/, (m) => [...m[1].matchAll(/a (\d+) W [a-z ]+? for (\d+) h/g)].reduce((s, x) => s + (N(x[1]) * N(x[2])) / 1000, 0) * 30 * N(m[2])]],
  sciOptics: [
    [/^An object is placed (\d+) cm from the (?:pole|optical centre) of a (concave mirror|convex mirror|convex lens|concave lens) of focal length (\d+) cm.* Find the image distance/, (m) => image(m[2], N(m[3]), N(m[1])).v],
    [/^An object is placed (\d+) cm from the (?:pole|optical centre) of a (concave mirror|convex mirror|convex lens|concave lens) of focal length (\d+) cm.* Find the magnification/, (m) => image(m[2], N(m[3]), N(m[1])).m],
    [/^An object is placed (\d+) cm from the (?:pole|optical centre) of a (concave mirror|convex mirror|convex lens|concave lens) of focal length (\d+) cm.* What is the nature/, (m) => ((o) => natureOf(o.real, o.m))(image(m[2], N(m[3]), N(m[1])))],
  ],
  sciRefIndex: [
    [/speed of light in a medium is ([\d.]+) × 10⁸ m\/s\. Find its refractive index/, (m) => 3 / N(m[1])],
    [/refractive index ([\d.]+)\. Find the speed of light in it/, (m) => (3 / N(m[1])) * 1e8],
    [/sine of the angle of incidence is ([\d.]+) and the sine of the angle of refraction is ([\d.]+)/, (m) => N(m[1]) / N(m[2])],
  ],
  chemStp: [
    [/^What volume does ([\d.]+) g of .* molar mass of \S+ = (\d+) g\/mol/, (m) => (N(m[1]) / N(m[2])) * 22.4],
    [/^What is the mass of ([\d.]+) L of .* molar mass of \S+ = (\d+) g\/mol/, (m) => (N(m[1]) / 22.4) * N(m[2])],
    [/^How many moles of .* in ([\d.]+) L of the gas at STP/, (m) => N(m[1]) / 22.4],
  ],
  chemMolecules: [
    [/^How many molecules are there in ([\d.]+) g of .* \(molar mass (\d+) g\/mol/, (m) => (N(m[1]) / N(m[2])) * 6.022e23],
    [/^How many atoms are there in ([\d.]+) g of \w+(?: \w+)? \(([^)]+)\)\? ?\(molar mass (\d+) g\/mol|^How many atoms are there in ([\d.]+) g of [a-z ]+ \(([^)]+)\)\? \(molar mass (\d+) g\/mol/, (m) => {
      const mass = N(m[1] || m[4]), fo = m[2] || m[5], M = N(m[3] || m[6]);
      return (mass / M) * 6.022e23 * Object.values(atoms(fo)).reduce((a, b) => a + b, 0);
    }],
  ],
  chemMolFormula: [[/^A compound has the empirical formula (\S+) and a molar mass of (\d+) g\/mol/, (m) => {
    const cnt = atoms(m[1]), k = N(m[2]) / massOf(cnt);
    return Object.entries(cnt).map(([e, c]) => `${e}:${c * k}`).sort().join(",");
  }]],
  phyKin: [
    [/^A car moving at (\d+) m\/s speeds up uniformly at (\d+) m\/s²\. Find its speed after (\d+) s/, (m) => N(m[1]) + N(m[2]) * N(m[3])],
    [/^A body moving at (\d+) m\/s accelerates uniformly at (\d+) m\/s² until its speed is (\d+) m\/s/, (m) => (N(m[3]) - N(m[1])) / N(m[2])],
    [/^A body with initial speed (\d+) m\/s .* acceleration of (\d+) m\/s²\. How far does it travel in (\d+) s/, (m) => N(m[1]) * N(m[3]) + 0.5 * N(m[2]) * N(m[3]) ** 2],
    [/^A car moving at (\d+) m\/s is brought to rest by uniform braking in ([\d.]+) m\. Find its acceleration/, (m) => -(N(m[1]) ** 2) / (2 * N(m[2]))],
    [/^A car moving at (\d+) m\/s brakes with a uniform retardation of (\d+) m\/s²\. Find the distance/, (m) => N(m[1]) ** 2 / (2 * N(m[2]))],
    [/^A car starts from rest and accelerates uniformly at (\d+) m\/s² over ([\d.]+) m\. Find its final speed/, (m) => Math.sqrt(2 * N(m[1]) * N(m[2]))],
    [/^A stone is dropped from a height of (\d+) m\. How long/, (m) => Math.sqrt((2 * N(m[1])) / 10)],
    [/^A ball is dropped from a height of (\d+) m\. With what speed/, (m) => Math.sqrt(2 * 10 * N(m[1]))],
  ],
  phyProjectile: [
    [/^A ball is thrown horizontally at (\d+) m\/s from the top of a cliff (\d+) m high/, (m) => N(m[1]) * Math.sqrt((2 * N(m[2])) / 10)],
    [/^A ball is thrown at (\d+) m\/s at an angle of 45° to the ground\. Find its horizontal range/, (m) => (N(m[1]) ** 2 * Math.sin((2 * Math.PI) / 4)) / 10],
    [/^A projectile is launched at (\d+) m\/s at an angle of 30° .* time of flight/, (m) => (2 * N(m[1]) * Math.sin(Math.PI / 6)) / 10],
    [/^A projectile is launched at (\d+) m\/s at an angle of 30° .* maximum height/, (m) => (N(m[1]) ** 2 * Math.sin(Math.PI / 6) ** 2) / 20],
    [/^A ball is thrown straight up at (\d+) m\/s\. Find the maximum height/, (m) => N(m[1]) ** 2 / 20],
    [/^A ball is thrown straight up at (\d+) m\/s\. How long/, (m) => (2 * N(m[1])) / 10],
  ],
  phyNewton: [
    [/^An? (\d+) kg block is pulled along a rough floor by a force of (\d+) N\. Friction of (\d+) N/, (m) => (N(m[2]) - N(m[3])) / N(m[1])],
    [/^A ([\d.]+) kg ball moving at (\d+) m\/s is brought to rest in ([\d.]+) s/, (m) => (N(m[1]) * N(m[2])) / N(m[3])],
    [/^An? (\d+) kg trolley moving at (\d+) m\/s hits an? (\d+) kg trolley at rest/, (m) => (N(m[1]) * N(m[2])) / (N(m[1]) + N(m[3]))],
    [/^A (\d+) kg gun fires a (\d+) g bullet at (\d+) m\/s/, (m) => ((N(m[2]) / 1000) * N(m[3])) / N(m[1])],
  ],
  phyWorkEnergy: [
    [/^A net force changes the speed of a (\d+) kg body from (\d+) m\/s to (\d+) m\/s/, (m) => 0.5 * N(m[1]) * (N(m[3]) ** 2 - N(m[2]) ** 2)],
    [/^A car's engine pulls with a force of ([\d,]+) N while the car moves at a steady (\d+) m\/s/, (m) => (N(m[1]) * N(m[2])) / 1000],
    [/^A stone falls freely from rest through (\d+) m/, (m) => Math.sqrt(2 * 10 * N(m[1]))],
    [/^A spring of spring constant ([\d,]+) N\/m is stretched by (\d+) cm/, (m) => 0.5 * N(m[1]) * (N(m[2]) / 100) ** 2],
    [/^How much work must be done to bring a (\d+) kg body moving at (\d+) m\/s to rest/, (m) => 0.5 * N(m[1]) * N(m[2]) ** 2],
  ],
  phyCoulomb: [[/^Two point charges of ([+−])(\d+) μC and ([+−])(\d+) μC are (\d+) cm apart/, (m) => (9e9 * (N(m[2]) * 1e-6) * (N(m[4]) * 1e-6)) / (N(m[5]) / 100) ** 2]],
  phyCapacitor: [
    [/^(?:Two|Three) capacitors of ([\d, μF]+) are connected in parallel/, (m) => list(m[1].replace(/ μF/g, "")).reduce((a, b) => a + b, 0)],
    [/^(?:Two|Three) capacitors of ([\d, μF]+) are connected in series/, (m) => 1 / list(m[1].replace(/ μF/g, "")).reduce((a, b) => a + 1 / b, 0)],
    [/^A (\d+) μF capacitor is charged to (\d+) V\. Find the energy stored, in millijoules/, (m) => 0.5 * N(m[1]) * 1e-6 * N(m[2]) ** 2 * 1000],
    [/^A (\d+) μF capacitor is connected to a (\d+) V battery\. Find the charge/, (m) => N(m[1]) * N(m[2])],
  ],
  phyKirchhoff: [
    [/^At a junction, currents of (\d+) A and (\d+) A flow towards the junction and a current of (\d+) A flows away/, (m) => N(m[1]) + N(m[2]) - N(m[3])],
    [/^A cell of emf ([\d.]+) V and internal resistance ([\d.]+) Ω is connected to an external resistance of (\d+) Ω/, (m) => N(m[1]) / (N(m[3]) + N(m[2]))],
    [/^A cell of emf (\d+) V and internal resistance ([\d.]+) Ω delivers a current of (\d+) A/, (m) => N(m[1]) - N(m[3]) * N(m[2])],
    [/^Two cells of emf (\d+) V and (\d+) V are joined .* oppose each other\). The total resistance of the loop is (\d+) Ω/, (m) => (N(m[1]) - N(m[2])) / N(m[3])],
  ],
  phyLensMaker: [[/^A thin (biconvex|biconcave|plano-convex) lens made of glass of refractive index ([\d.]+) has radii of curvature of (\d+) cm(?: and (\d+) cm| on its curved face)/, (m) => {
    const n = N(m[2]), r1 = N(m[3]), r2 = m[4] ? N(m[4]) : 0;
    const R1 = m[1] === "biconcave" ? -r1 : r1, inv2 = m[1] === "biconvex" ? -1 / r2 : m[1] === "biconcave" ? 1 / r2 : 0;
    return 1 / ((n - 1) * (1 / R1 - inv2));
  }]],
  phyPhotonEnergy: [[/^Find the energy, in eV, of a photon of wavelength (\d+) nm/, (m) => 1240 / N(m[1])]],
  phyPhotoelectric: [[/^Photons of energy ([\d.]+) eV fall on a metal of work function ([\d.]+) eV/, (m) => N(m[1]) - N(m[2])]],
  phyDeBroglie: [
    [/^Find the de Broglie wavelength of a ([\d.]+) kg ball moving at ([\d.,]+) m\/s/, (m) => 6.63e-34 / (N(m[1]) * N(m[2]))],
    [/^An electron is accelerated from rest through (\d+) V/, (m) => 12.27 / Math.sqrt(N(m[1]))],
  ],
  accEquation: [
    [/^A trader's assets are ₹([\d,]+) and his liabilities are ₹([\d,]+)\. Find his capital/, (m) => N(m[1]) - N(m[2])],
    [/^A firm's capital is ₹([\d,]+) and its liabilities are ₹([\d,]+)\. Find its total assets/, (m) => N(m[1]) + N(m[2])],
    [/^A business has assets of ₹([\d,]+) and capital of ₹([\d,]+)\. Find its liabilities/, (m) => N(m[1]) - N(m[2])],
    [/^A trader's assets are ₹([\d,]+) and his capital is ₹([\d,]+)\. He buys goods on credit for ₹([\d,]+)/, (m) => N(m[1]) - N(m[2]) + N(m[3])],
    [/^A proprietor's capital was ₹([\d,]+) at the start of the year and ₹([\d,]+) at the end\. He withdrew ₹([\d,]+)/, (m) => N(m[2]) - N(m[1]) + N(m[3])],
  ],
  accDepreciation: [
    [/^A machine costs ₹([\d,]+), has a useful life of (\d+) years and a scrap value of ₹([\d,]+)/, (m) => (N(m[1]) - N(m[3])) / N(m[2])],
    [/^A machine bought for ₹([\d,]+) has a life of (\d+) years and a scrap value of ₹([\d,]+)\..* end of year (\d+)/, (m) => N(m[1]) - ((N(m[1]) - N(m[3])) / N(m[2])) * N(m[4])],
    [/^A machine costs ₹([\d,]+) and its annual straight-line depreciation is ₹([\d,]+)/, (m) => (N(m[2]) / N(m[1])) * 100],
  ],
  accSaleAsset: [[/^A machine bought for ₹([\d,]+) with a life of (\d+) years and no scrap value .* After (\d+) years? it is sold for ₹([\d,]+)/, (m) => {
    const wdv = N(m[1]) - (N(m[1]) / N(m[2])) * N(m[3]), d = N(m[4]) - wdv;
    return `${d > 0 ? "Profit" : "Loss"}:${Math.abs(d)}`;
  }]],
  accInterest: [
    [/capital is ₹([\d,]+) .* at (\d+)% per annum\. Find the interest on capital for (\d+) months/, (m) => (N(m[1]) * N(m[2]) * N(m[3])) / 1200],
    [/withdrew ₹([\d,]+)\. Interest on drawings is charged at (\d+)% per annum for (\d+) months/, (m) => (N(m[1]) * N(m[2]) * N(m[3])) / 1200],
  ],
  accProfit: [
    [/^From the following, find the cost of goods sold: (.*)\.$/, (m, q) => { const [s, sr, os, p, pr, de, cs] = rupees(m[1]); return os + (p - pr) + de - cs; }],
    [/^From the following, find the gross profit: (.*)\.$/, (m) => { const [s, sr, os, p, pr, de, cs] = rupees(m[1]); return s - sr - (os + (p - pr) + de - cs); }],
    [/^A firm's gross profit is ₹([\d,]+)\. It earned commission of ₹([\d,]+) and its office and selling expenses were ₹([\d,]+)/, (m) => N(m[1]) + N(m[2]) - N(m[3])],
  ],
  accRatio: [
    [/^A company has current assets of ₹([\d,]+) and current liabilities of ₹([\d,]+)\. Find its current ratio/, (m) => N(m[1]) / N(m[2])],
    [/^A company's current assets are ₹([\d,]+), including inventories of ₹([\d,]+) and prepaid expenses of ₹([\d,]+)\. Its current liabilities are ₹([\d,]+)/, (m) => (N(m[1]) - N(m[2]) - N(m[3])) / N(m[4])],
    [/^A company has long-term borrowings \(debt\) of ₹([\d,]+) and shareholders' funds of ₹([\d,]+)/, (m) => N(m[1]) / N(m[2])],
    [/^A firm's net sales are ₹([\d,]+) and its cost of goods sold is ₹([\d,]+)\. Find its gross profit ratio/, (m) => ((N(m[1]) - N(m[2])) / N(m[1])) * 100],
    [/^A firm's cost of goods sold is ₹([\d,]+)\. Its opening inventory is ₹([\d,]+) and its closing inventory is ₹([\d,]+)/, (m) => N(m[1]) / ((N(m[2]) + N(m[3])) / 2)],
  ],
  ecoCentral: [
    [/^The marks of (\d+) students are ([\d, ]+)\. Find the arithmetic mean/, (m) => list(m[2]).reduce((a, b) => a + b, 0) / N(m[1])],
    [/^The daily wages \(in ₹\) of (\d+) workers are ([\d, ]+)\. Find the median/, (m) => list(m[2]).sort((a, b) => a - b)[(N(m[1]) - 1) / 2]],
    [/^Find the mode of these values: ([\d, ]+)\./, (m) => { const c = {}; list(m[1]).forEach((x) => (c[x] = (c[x] || 0) + 1)); return +Object.entries(c).sort((a, b) => b[1] - a[1])[0][0]; }],
    [/^A frequency table gives the value x with its frequency f: (.*)\. Find the mean/, (m) => { const p = [...m[1].matchAll(/x = (\d+), f = (\d+)/g)].map((x) => [N(x[1]), N(x[2])]); return p.reduce((s, [x, f]) => s + x * f, 0) / p.reduce((s, [, f]) => s + f, 0); }],
  ],
  ecoElasticity: [
    [/rises from ₹(\d+) to ₹(\d+), the quantity demanded falls from (\d+) to (\d+) units\. Using/, (m) => ((N(m[3]) - N(m[4])) / N(m[3])) / ((N(m[2]) - N(m[1])) / N(m[1]))],
    [/rises from ₹(\d+) to ₹(\d+), the quantity demanded falls from (\d+) to (\d+) units\. Is the demand/, (m) => { const e = ((N(m[3]) - N(m[4])) / N(m[3])) / ((N(m[2]) - N(m[1])) / N(m[1])); return e > 1 + 1e-9 ? "Elastic (Ed > 1)" : e < 1 - 1e-9 ? "Inelastic (Ed < 1)" : "Unitary elastic (Ed = 1)"; }],
  ],
  ecoRevenueCost: [
    [/total revenue is ₹(\d+) from (\d+) units and ₹(\d+) from (\d+) units/, (m) => (N(m[3]) - N(m[1])) / (N(m[4]) - N(m[2]))],
    [/sells (\d+) units and its total revenue is ₹([\d,]+)\. Find the average revenue/, (m) => N(m[2]) / N(m[1])],
    [/total cost of producing (\d+) units is ₹(\d+) and of producing (\d+) units is ₹(\d+)/, (m) => (N(m[4]) - N(m[2])) / (N(m[3]) - N(m[1]))],
    [/total cost of producing (\d+) units is ₹([\d,]+)\. Find the average cost/, (m) => N(m[2]) / N(m[1])],
    [/total fixed cost is ₹([\d,]+) and its average variable cost at (\d+) units is ₹(\d+)/, (m) => N(m[1]) + N(m[3]) * N(m[2])],
    [/sells every unit at ₹(\d+)\. Find its total revenue from selling (\d+) units/, (m) => N(m[1]) * N(m[2])],
  ],
  ecoGDP: [
    [/^GDP at market price is ₹([\d,]+) crore\. Indirect taxes are ₹([\d,]+) crore and subsidies are ₹([\d,]+) crore/, (m) => N(m[1]) - (N(m[2]) - N(m[3]))],
    [/^GDP at factor cost is ₹([\d,]+) crore and net indirect taxes are ₹([\d,]+) crore\. Find GDP at market price/, (m) => N(m[1]) + N(m[2])],
    [/^GDP at market price is ₹([\d,]+) crore\. Net factor income (from|paid to) abroad is ₹([\d,]+) crore/, (m) => N(m[1]) + (m[2] === "from" ? 1 : -1) * N(m[3])],
    [/^GDP at market price is ₹([\d,]+) crore, net factor income from abroad is ₹([\d,]+) crore, depreciation is ₹([\d,]+) crore and net indirect taxes are ₹([\d,]+) crore/, (m) => N(m[1]) + N(m[2]) - N(m[3]) - N(m[4])],
  ],
};

// How the option marked correct is compared: a number (tolerance), or an exact string for words. Rounded answers get a looser tolerance.
const LOOSE = new Set(["phyDeBroglie", "chemMolecules"]);
function sameAnswer(name, exp, ans) {
  if (typeof exp === "number") {
    const g = got(ans), tol = LOOSE.has(name) ? 0.006 : 1e-6;
    return Number.isFinite(g) && Math.abs(g - exp) <= tol * Math.max(1, Math.abs(exp));
  }
  if (name === "chemMolFormula") return exp === Object.entries(atoms(ans)).map(([e, c]) => `${e}:${c}`).sort().join(",");
  if (name === "accSaleAsset") return exp === `${/^Profit/.test(ans) ? "Profit" : "Loss"}:${got(ans)}`;
  return exp === ans;
}

// accDebitCredit: the two accounts of each transaction, written again here
const TXN = {
  "Bought goods for cash worth": ["Purchases A/c", "Cash A/c"], "Sold goods for cash worth": ["Cash A/c", "Sales A/c"], "Paid rent in cash of": ["Rent A/c", "Cash A/c"],
  "Paid salaries in cash of": ["Salaries A/c", "Cash A/c"], "Bought furniture for cash worth": ["Furniture A/c", "Cash A/c"], "Sold goods to Ram on credit worth": ["Ram's A/c", "Sales A/c"],
  "Bought goods on credit from Shyam worth": ["Purchases A/c", "Shyam's A/c"], "Received cash from Ram, a debtor, of": ["Cash A/c", "Ram's A/c"], "Paid cash to Shyam, a creditor, of": ["Shyam's A/c", "Cash A/c"],
  "Started business with cash of": ["Cash A/c", "Capital A/c"], "Withdrew cash for personal use, of": ["Drawings A/c", "Cash A/c"], "Deposited cash into the bank, of": ["Bank A/c", "Cash A/c"],
  "Received commission in cash of": ["Cash A/c", "Commission Received A/c"], "Ram returned goods sold to him, worth": ["Sales Returns A/c", "Ram's A/c"], "Returned goods to Shyam, worth": ["Shyam's A/c", "Purchases Returns A/c"],
  "Bought machinery on credit from Shyam for": ["Machinery A/c", "Shyam's A/c"], "Paid wages in cash of": ["Wages A/c", "Cash A/c"], "Interest received in cash of": ["Cash A/c", "Interest Received A/c"],
  "Allowed cash discount to Ram, a debtor, of": ["Discount Allowed A/c", "Ram's A/c"],
};

// audit(Gen, bad, seeds): returns the number of questions checked
function audit(Gen, bad, seeds = 300) {
  let checked = 0;
  const names = [...Object.keys(RULES), "accDebitCredit"];
  for (const name of names) {
    if (!Gen.names.includes(name)) { bad(`audit: generator ${name} is missing`); continue; }
    const fails = {};
    for (let s = 1; s <= seeds; s++) {
      const q = Gen.make(name, s * 40503 + 7);
      if (!q) { fails.nothing = (fails.nothing || 0) + 1; continue; }
      checked++;
      let why = "";
      if (name === "accDebitCredit") {
        const m = q.q.match(/^(.*) ₹[\d,]+\. Which account is (debited|credited)\?$/), t = m && TXN[m[1]];
        if (!t) why = "unknown transaction";
        else if (q.options[0] !== t[m[2] === "debited" ? 0 : 1]) why = `expected ${t[m[2] === "debited" ? 0 : 1]}`;
      } else {
        const rule = RULES[name].find(([re]) => re.test(q.q));
        if (!rule) why = "question matches no audit rule";
        else {
          const exp = rule[1](q.q.match(rule[0]), q.q);
          if (!sameAnswer(name, exp, q.options[0])) why = `expected ${typeof exp === "number" ? +exp.toPrecision(8) : exp}, got ${q.options[0]}`;
        }
      }
      if (why) { fails[why] = (fails[why] || 0) + 1; if (!fails.__e) fails.__e = `seed ${s * 40503 + 7}: ${q.q} -> ${q.options[0]}`; }
    }
    const ks = Object.keys(fails).filter((k) => k !== "__e");
    if (ks.length) bad(`audit ${name}: ${ks.map((k) => `${k} ×${fails[k]}`).join("; ")} ${fails.__e || ""}`);
  }
  return checked;
}
module.exports = { audit };
