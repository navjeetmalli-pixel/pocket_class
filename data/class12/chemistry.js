StudyData.add(12, "chemistry", {
  chapters: [
    // ------------------------------------------------------------------
    {
      id: "solutions",
      title: "Solutions",
      section: "Physical Chemistry",
      summary: "Types of solutions and ways of expressing concentration, solubility of gases (Henry's law), vapour pressure and Raoult's law, ideal and non-ideal solutions, colligative properties and their use in finding molar masses, and the van't Hoff factor.",
      notes: [
        {
          heading: "Concentration of Solutions",
          points: [
            "A solution is a **homogeneous mixture** of two or more components; in a binary solution the component present in larger amount is the solvent.",
            "Concentration terms: mass %, **ppm** (parts per million, for trace amounts), **mole fraction**, **molarity (M)** and **molality (m)**.",
            "Molarity depends on temperature (volume changes); **molality and mole fraction do not**.",
            "Solubility of a solid in a liquid follows **like dissolves like**; pressure has no significant effect, while temperature acts according to Le Chatelier's principle."
          ]
        },
        {
          heading: "Solubility of Gases: Henry's Law",
          points: [
            "**Henry's law**: the partial pressure of a gas in vapour is proportional to its mole fraction in the solution: **p = K_H x**.",
            "A **higher K_H** means **lower solubility** of the gas. K_H increases with temperature, so gases are **less soluble in warm water**.",
            "Applications: soft-drink bottles are sealed under **high CO₂ pressure**; scuba divers face the **bends** (N₂ bubbles in blood), so their tanks use air diluted with helium.",
            "At high altitudes the low partial pressure of oxygen lowers O₂ in blood, causing **anoxia** (weakness, inability to think clearly)."
          ]
        },
        {
          heading: "Vapour Pressure and Raoult's Law",
          points: [
            "**Raoult's law** (volatile liquids): the partial vapour pressure of each component equals its mole fraction × vapour pressure of the pure component: p₁ = x₁p₁°.",
            "For a **non-volatile solute**, the relative lowering of vapour pressure equals the **mole fraction of the solute**: (p₁° − p₁)/p₁° = x₂.",
            "**Ideal solutions** obey Raoult's law at all concentrations, with **ΔmixH = 0 and ΔmixV = 0** (n-hexane + n-heptane, benzene + toluene).",
            "**Positive deviation**: A–B attractions are weaker than A–A and B–B (ethanol + acetone); these form **minimum-boiling azeotropes** (about 95% ethanol by volume with water).",
            "**Negative deviation**: A–B attractions are stronger (chloroform + acetone, phenol + aniline); these form **maximum-boiling azeotropes** (68% HNO₃ + 32% water by mass, boils at 393.5 K)."
          ]
        },
        {
          heading: "Colligative Properties",
          points: [
            "Colligative properties depend on the **number of solute particles**, not their nature: relative lowering of vapour pressure, elevation of boiling point, depression of freezing point and osmotic pressure.",
            "**ΔTb = Kb m** and **ΔTf = Kf m**; for water Kb = 0.52 K kg mol⁻¹ and Kf = 1.86 K kg mol⁻¹.",
            "**Osmotic pressure π = CRT**. It is preferred for finding molar masses of **proteins and polymers**: it is measured at room temperature and is large even for very dilute solutions.",
            "**Isotonic** solutions have the same osmotic pressure; 0.9% (mass/volume) NaCl is isotonic with blood. Red blood cells **shrink in hypertonic** and **swell in hypotonic** solutions.",
            "**Reverse osmosis**: applying pressure greater than π on the solution side pushes pure solvent out; it is used for **desalination** of sea water."
          ]
        },
        {
          heading: "Abnormal Molar Masses and van't Hoff Factor",
          points: [
            "Electrolytes that **dissociate** (NaCl, K₂SO₄) give more particles, a larger colligative effect and a **lower** apparent molar mass.",
            "Solutes that **associate** (ethanoic acid dimerises in benzene through H-bonds) give fewer particles and a **higher** apparent molar mass.",
            "**van't Hoff factor i** = normal molar mass ÷ abnormal molar mass = observed colligative property ÷ calculated colligative property.",
            "Modified equations: **ΔTb = i Kb m, ΔTf = i Kf m, π = i CRT**.",
            "For complete dissociation, i = 2 for NaCl and 3 for K₂SO₄ or CaCl₂; for complete dimerisation, i = 0.5."
          ]
        }
      ],
      formulas: [
        "Mole fraction x₁ = n₁ ÷ (n₁ + n₂)",
        "Molality m = (w₂ × 1000) ÷ (M₂ × w₁), with w₁ in g",
        "Henry's law: p = K_H x",
        "Raoult's law: p₁ = x₁p₁°; p_total = x₁p₁° + x₂p₂°",
        "Relative lowering of vapour pressure: (p₁° − p₁)/p₁° = x₂",
        "ΔTb = Kb m; M₂ = (Kb × w₂ × 1000) ÷ (ΔTb × w₁)",
        "ΔTf = Kf m; M₂ = (Kf × w₂ × 1000) ÷ (ΔTf × w₁)",
        "Osmotic pressure: π = CRT = (n₂/V)RT; M₂ = w₂RT ÷ (πV)",
        "i = normal molar mass ÷ abnormal molar mass",
        "With van't Hoff factor: ΔTb = iKb m; ΔTf = iKf m; π = iCRT",
        "Water: Kb = 0.52 K kg mol⁻¹; Kf = 1.86 K kg mol⁻¹",
        "Ideal solution: ΔmixH = 0, ΔmixV = 0",
        "R = 0.083 L bar K⁻¹ mol⁻¹ = 8.314 J K⁻¹ mol⁻¹"
      ],
      terms: [
        { term: "Molality", meaning: "**Moles of solute per kilogram of solvent**; independent of temperature." },
        { term: "Henry's law", meaning: "The partial pressure of a gas over a solution is **proportional to its mole fraction** in the solution (p = K_H x)." },
        { term: "Ideal solution", meaning: "A solution that **obeys Raoult's law** at all concentrations, with ΔmixH = 0 and ΔmixV = 0." },
        { term: "Azeotrope", meaning: "A liquid mixture that **boils at constant temperature** with the same composition in liquid and vapour, so it cannot be separated by fractional distillation." },
        { term: "Colligative property", meaning: "A property that depends only on the **number of solute particles**, not on their nature." },
        { term: "van't Hoff factor (i)", meaning: "Ratio of the **observed to the calculated** colligative property; it accounts for dissociation or association of the solute." }
      ],
      examples: [
        {
          q: "45 g of ethylene glycol (C₂H₆O₂) is mixed with 600 g of water. Calculate the freezing point of the solution. (Kf of water = 1.86 K kg mol⁻¹)",
          steps: [
            "Molar mass of C₂H₆O₂ = 2(12) + 6(1) + 2(16) = 62 g mol⁻¹",
            "Moles of glycol = 45 ÷ 62 = 0.726 mol",
            "Molality m = 0.726 mol ÷ 0.600 kg = 1.21 mol kg⁻¹",
            "ΔTf = Kf × m = 1.86 × 1.21 = 2.25 K",
            "Freezing point = 273.15 K − 2.25 K = 270.90 K"
          ],
          answer: "The solution freezes at about 270.9 K (about −2.25 °C)."
        },
        {
          q: "200 cm³ of an aqueous solution of a protein contains 1.26 g of the protein. Its osmotic pressure at 300 K is 2.57 × 10⁻³ bar. Find the molar mass of the protein. (R = 0.083 L bar K⁻¹ mol⁻¹)",
          steps: [
            "π = (w₂/M₂) × RT/V, so M₂ = w₂RT ÷ (πV)",
            "V = 200 cm³ = 0.200 L",
            "M₂ = (1.26 × 0.083 × 300) ÷ (2.57 × 10⁻³ × 0.200)",
            "Numerator = 31.37; denominator = 5.14 × 10⁻⁴",
            "M₂ = 31.37 ÷ 5.14 × 10⁻⁴ ≈ 6.10 × 10⁴ g mol⁻¹"
          ],
          answer: "Molar mass of the protein ≈ 61 000 g mol⁻¹"
        }
      ],
      qa: [
        {
          q: "State Raoult's law for a solution of two volatile liquids. What is meant by positive deviation from it? Give an example.",
          a: "For a solution of volatile liquids, the **partial vapour pressure of each component is directly proportional to its mole fraction**: p₁ = x₁p₁°, p₂ = x₂p₂°. In **positive deviation**, the A–B attractions are **weaker** than A–A and B–B attractions, so molecules escape more easily and the vapour pressure is **higher** than predicted (ΔmixH > 0). Example: **ethanol + acetone**, or carbon disulphide + acetone."
        },
        {
          q: "Why is osmotic pressure preferred over other colligative properties for finding the molar masses of proteins and polymers?",
          a: "(1) Osmotic pressure is **measured at room temperature**, so heat-sensitive biomolecules are not damaged. (2) Its magnitude is **large even for very dilute solutions**, while ΔTb and ΔTf would be too small to measure accurately for substances of high molar mass. (3) **Molarity** is used instead of molality, which is convenient."
        },
        {
          q: "A 0.1 m NaCl solution shows nearly double the freezing-point depression of a 0.1 m glucose solution. Explain.",
          a: "Depression in freezing point is a colligative property: it depends on the **number of solute particles**. Glucose does not dissociate (i = 1), but **NaCl dissociates into Na⁺ and Cl⁻**, so i ≈ 2. Hence NaCl gives about **twice as many particles** and about twice the depression."
        }
      ],
      quiz: [
        {
          q: "Which aqueous solution has the lowest freezing point?",
          options: ["0.1 m glucose", "0.1 m NaCl", "0.1 m K₂SO₄", "0.1 m urea"],
          answer: 2,
          explain: "K₂SO₄ gives **3 ions (i = 3)**, the largest number of particles, so the largest ΔTf and the lowest freezing point."
        },
        {
          q: "A solution showing large positive deviation from Raoult's law forms:",
          options: ["a maximum-boiling azeotrope", "a minimum-boiling azeotrope", "an ideal solution", "a solution with ΔmixH = 0"],
          answer: 1,
          explain: "Positive deviation means higher vapour pressure, so the mixture boils at a **lower** temperature: a **minimum-boiling azeotrope** (e.g. ethanol–water)."
        },
        {
          q: "A solution that is isotonic with blood (normal saline) is:",
          options: ["0.9% (mass/volume) NaCl", "9% (mass/volume) NaCl", "0.09% (mass/volume) NaCl", "5% (mass/volume) NaCl"],
          answer: 0,
          explain: "**0.9% NaCl** has the same osmotic pressure as the fluid inside blood cells, so cells neither shrink nor swell."
        },
        {
          q: "The van't Hoff factor for ethanoic acid that dimerises completely in benzene is:",
          options: ["2", "1", "0.25", "0.5"],
          answer: 3,
          explain: "2CH₃COOH ⇌ (CH₃COOH)₂: two molecules become one particle, so **i = 0.5**."
        },
        {
          q: "At a given temperature, a gas with a higher Henry's law constant K_H has:",
          options: ["higher solubility", "lower solubility", "the same solubility as other gases", "solubility independent of pressure"],
          answer: 1,
          explain: "p = K_H x, so x = p/K_H. At the same partial pressure, a **larger K_H gives a smaller mole fraction**, i.e. lower solubility."
        },
        {
          q: "The freezing-point depression of 0.05 m aqueous K₂SO₄ (complete dissociation, Kf = 1.86 K kg mol⁻¹) is:",
          options: ["0.093 K", "0.186 K", "0.279 K", "0.558 K"],
          answer: 2,
          explain: "ΔTf = i Kf m = 3 × 1.86 × 0.05 = **0.279 K** (K₂SO₄ → 2K⁺ + SO₄²⁻, i = 3)."
        }
      ]
    },

    // ------------------------------------------------------------------
    {
      id: "electrochemistry",
      title: "Electrochemistry",
      section: "Physical Chemistry",
      summary: "Conversion between chemical and electrical energy: galvanic cells and electrode potentials, the Nernst equation, cell emf and Gibbs energy, conductance of electrolytic solutions and Kohlrausch's law, electrolysis and Faraday's laws, batteries, fuel cells and corrosion.",
      notes: [
        {
          heading: "Galvanic Cells and Electrode Potential",
          points: [
            "A **galvanic cell** turns the chemical energy of a spontaneous redox reaction into electrical energy. Daniell cell: Zn(s) | Zn²⁺(aq) || Cu²⁺(aq) | Cu(s), E° = **1.1 V**.",
            "**Anode**: oxidation (negative terminal in a galvanic cell). **Cathode**: reduction (positive terminal).",
            "A **salt bridge** (KCl or KNO₃ in agar) completes the circuit and keeps both solutions electrically neutral.",
            "**E°cell = E°cathode − E°anode** (both as standard reduction potentials).",
            "The **standard hydrogen electrode** (Pt | H₂(g, 1 bar) | H⁺(aq, 1 M)) is assigned E° = 0.00 V at all temperatures.",
            "A more negative E° means a stronger reducing agent (**Li**); a more positive E° means a stronger oxidising agent (**F₂**)."
          ]
        },
        {
          heading: "Nernst Equation and Gibbs Energy",
          points: [
            "For Mⁿ⁺(aq) + ne⁻ → M(s): **E = E° − (2.303RT/nF) log (1/[Mⁿ⁺])**. At 298 K, 2.303RT/F = **0.059 V**.",
            "For a cell reaction: **Ecell = E°cell − (0.059/n) log Q** at 298 K, where Q is the reaction quotient.",
            "At equilibrium Ecell = 0, so **E°cell = (0.059/n) log Kc**.",
            "Electrical work = Gibbs energy: **ΔrG = −nFEcell** and ΔrG° = −nFE°cell = −2.303RT log K. A positive E°cell means negative ΔG (spontaneous).",
            "**Faraday constant** F = 96487 C mol⁻¹ (about 96500 C), the charge on one mole of electrons."
          ]
        },
        {
          heading: "Conductance of Electrolytic Solutions",
          points: [
            "Resistance R = ρl/A; **conductivity κ = 1/ρ** (S m⁻¹ or S cm⁻¹); cell constant G* = l/A = Rκ.",
            "**Molar conductivity Λm = κ/c**; with κ in S cm⁻¹ and molarity M, Λm = κ × 1000/M in S cm² mol⁻¹.",
            "On dilution, **conductivity decreases** (fewer ions per unit volume) but **molar conductivity increases**.",
            "Strong electrolytes: **Λm = Λ°m − A√c** (a straight line on extrapolation). Weak electrolytes: Λm rises steeply at low concentration, so Λ°m cannot be found by extrapolation.",
            "**Kohlrausch's law**: Λ°m of an electrolyte = sum of the limiting molar conductivities of its ions, Λ°m = ν₊λ°₊ + ν₋λ°₋. It gives Λ°m and the degree of dissociation (α = Λm/Λ°m) of weak electrolytes."
          ]
        },
        {
          heading: "Electrolysis and Faraday's Laws",
          points: [
            "**Faraday's first law**: mass deposited is proportional to the charge passed: m = ZQ = ZIt.",
            "**Second law**: for the same charge, masses of different substances liberated are proportional to their **equivalent masses** (molar mass ÷ electrons needed).",
            "Charge of 1 mol of electrons = **1 F ≈ 96500 C**; Cu²⁺ + 2e⁻ → Cu needs 2 F per mole of Cu.",
            "Products depend on electrode potentials: **molten NaCl** gives Na and Cl₂; **aqueous NaCl** gives **H₂ at the cathode** and **Cl₂ at the anode** (O₂ is not formed because of its overpotential), leaving NaOH in solution."
          ]
        },
        {
          heading: "Batteries, Fuel Cells and Corrosion",
          points: [
            "**Primary cells** cannot be recharged: dry (Leclanché) cell, about 1.5 V; mercury cell, about **1.35 V**, steady throughout its life.",
            "**Lead storage battery** (secondary): anode Pb, cathode PbO₂, electrolyte about 38% H₂SO₄; it is recharged by passing current in the reverse direction.",
            "**H₂–O₂ fuel cell**: hydrogen and oxygen react to give water; used in the Apollo space programme, about **70% efficient** and pollution-free.",
            "**Corrosion** is an electrochemical process. In rusting, iron is the anode (Fe → Fe²⁺ + 2e⁻) and oxygen is reduced at the cathode; rust is **Fe₂O₃·xH₂O**.",
            "Prevention: painting, **galvanising** (zinc coating) and **sacrificial anodes** of more reactive metals such as Mg or Zn."
          ]
        }
      ],
      formulas: [
        "E°cell = E°cathode − E°anode",
        "Electrode: E(Mⁿ⁺/M) = E° − (0.059/n) log (1/[Mⁿ⁺]) at 298 K",
        "Cell: Ecell = E°cell − (0.059/n) log Q at 298 K",
        "E°cell = (0.059/n) log Kc at 298 K",
        "ΔrG = −nFEcell; ΔrG° = −nFE°cell = −2.303RT log K",
        "R = ρl/A; κ = 1/ρ; cell constant G* = l/A = Rκ",
        "Λm = κ × 1000 / M (S cm² mol⁻¹)",
        "Λm = Λ°m − A√c (strong electrolytes)",
        "Kohlrausch: Λ°m = ν₊λ°₊ + ν₋λ°₋",
        "Λ°m(CH₃COOH) = Λ°m(CH₃COONa) + Λ°m(HCl) − Λ°m(NaCl)",
        "α = Λm/Λ°m; Ka = cα²/(1 − α)",
        "Faraday: m = ZIt = (M × I × t) ÷ (n × F); 1 F = 96487 C mol⁻¹",
        "Lead storage battery (discharge): Pb + PbO₂ + 2H₂SO₄ → 2PbSO₄ + 2H₂O",
        "Fuel cell: cathode O₂ + 2H₂O + 4e⁻ → 4OH⁻; anode 2H₂ + 4OH⁻ → 4H₂O + 4e⁻",
        "Dry cell cathode: MnO₂ + NH₄⁺ + e⁻ → MnO(OH) + NH₃",
        "Mercury cell: Zn(Hg) + HgO(s) → ZnO(s) + Hg(l)"
      ],
      terms: [
        { term: "Standard electrode potential", meaning: "Reduction potential of an electrode when all species are at **unit concentration (1 M) or 1 bar**, at 298 K, measured against SHE." },
        { term: "Salt bridge", meaning: "A U-tube of KCl or KNO₃ in agar jelly that **completes the circuit** and keeps the two half-cells electrically neutral." },
        { term: "Molar conductivity", meaning: "Conductance of the volume of solution that contains **1 mol of electrolyte**: Λm = κ/c." },
        { term: "Kohlrausch's law", meaning: "Limiting molar conductivity of an electrolyte = **sum of the limiting molar conductivities of its cations and anions**." },
        { term: "Faraday constant", meaning: "Charge on **one mole of electrons**, about 96500 C mol⁻¹." },
        { term: "Fuel cell", meaning: "A galvanic cell that converts the energy of combustion of fuels like **H₂ directly into electricity**." }
      ],
      examples: [
        {
          q: "Calculate the emf of the cell Mg(s) | Mg²⁺(0.001 M) || Cu²⁺(0.0001 M) | Cu(s) at 298 K. E°(Mg²⁺/Mg) = −2.37 V, E°(Cu²⁺/Cu) = +0.34 V.",
          steps: [
            "Cell reaction: Mg(s) + Cu²⁺(aq) → Mg²⁺(aq) + Cu(s); n = 2",
            "E°cell = E°cathode − E°anode = 0.34 − (−2.37) = 2.71 V",
            "Q = [Mg²⁺]/[Cu²⁺] = 10⁻³ ÷ 10⁻⁴ = 10",
            "Ecell = E°cell − (0.059/2) log Q = 2.71 − 0.0295 × log 10",
            "Ecell = 2.71 − 0.0295 = 2.68 V"
          ],
          answer: "Ecell ≈ 2.68 V"
        },
        {
          q: "A current of 2.0 A is passed through CuSO₄ solution for 965 s. What mass of copper is deposited at the cathode? (Cu = 63.5 g mol⁻¹, F = 96500 C mol⁻¹)",
          steps: [
            "Charge Q = I × t = 2.0 A × 965 s = 1930 C",
            "Moles of electrons = 1930 ÷ 96500 = 0.02 mol",
            "Cu²⁺ + 2e⁻ → Cu, so moles of Cu = 0.02 ÷ 2 = 0.01 mol",
            "Mass of Cu = 0.01 × 63.5 = 0.635 g"
          ],
          answer: "0.635 g of copper is deposited."
        }
      ],
      qa: [
        {
          q: "Why does the conductivity of a solution decrease on dilution while its molar conductivity increases?",
          a: "**Conductivity** is the conductance of unit volume (1 cm³) of solution; on dilution the **number of ions per unit volume falls**, so κ decreases. **Molar conductivity** is the conductance of the whole volume that contains 1 mol of electrolyte; this volume increases on dilution, and for weak electrolytes the **degree of dissociation also increases**, so Λm increases."
        },
        {
          q: "Why can Λ°m of a weak electrolyte like acetic acid not be found by extrapolating a graph of Λm against √c? How is it found?",
          a: "For a weak electrolyte, Λm **rises very steeply** at low concentration because the degree of dissociation increases sharply, so the curve cannot be extrapolated reliably to zero concentration. Λ°m is found using **Kohlrausch's law**: Λ°m(CH₃COOH) = Λ°m(CH₃COONa) + Λ°m(HCl) − Λ°m(NaCl)."
        },
        {
          q: "What are the products of electrolysis of aqueous NaCl with inert electrodes? Explain.",
          a: "At the **cathode**, water is reduced in preference to Na⁺ because its reduction potential (−0.83 V) is much higher than that of Na⁺/Na (−2.71 V): 2H₂O + 2e⁻ → **H₂** + 2OH⁻. At the **anode**, **Cl₂** is liberated (2Cl⁻ → Cl₂ + 2e⁻) instead of O₂ because of the **overpotential of oxygen**. **NaOH** remains in solution."
        }
      ],
      quiz: [
        {
          q: "E°(Zn²⁺/Zn) = −0.76 V and E°(Cu²⁺/Cu) = +0.34 V. The standard emf of the Daniell cell is:",
          options: ["−1.10 V", "0.42 V", "1.10 V", "−0.42 V"],
          answer: 2,
          explain: "E°cell = E°cathode − E°anode = 0.34 − (−0.76) = **1.10 V**."
        },
        {
          q: "A commonly used unit of molar conductivity is:",
          options: ["S cm⁻¹", "S cm² mol⁻¹", "S cm mol⁻¹", "Ω cm"],
          answer: 1,
          explain: "Λm = κ/c = (S cm⁻¹) ÷ (mol cm⁻³) = **S cm² mol⁻¹**."
        },
        {
          q: "How many faradays are needed to reduce 1 mol of MnO₄⁻ to Mn²⁺?",
          options: ["5 F", "3 F", "2 F", "7 F"],
          answer: 0,
          explain: "Mn changes from +7 to +2, a gain of 5 electrons per ion, so **5 mol of electrons = 5 F**."
        },
        {
          q: "In a lead storage battery, the anode during discharge is made of:",
          options: ["PbO₂", "PbSO₄", "Pb₃O₄", "Pb"],
          answer: 3,
          explain: "**Lead (Pb)** is oxidised at the anode: Pb + SO₄²⁻ → PbSO₄ + 2e⁻. PbO₂ is the cathode."
        },
        {
          q: "For a cell reaction with n = 2 and E°cell = 1.1 V, ΔrG° is about (F = 96487 C mol⁻¹):",
          options: ["−106 kJ mol⁻¹", "+212 kJ mol⁻¹", "−212 kJ mol⁻¹", "−424 kJ mol⁻¹"],
          answer: 2,
          explain: "ΔrG° = −nFE° = −2 × 96487 × 1.1 J = −212 271 J ≈ **−212 kJ mol⁻¹**."
        },
        {
          q: "Which metal can be used as a sacrificial anode to protect iron pipes from rusting?",
          options: ["Copper", "Magnesium", "Silver", "Tin"],
          answer: 1,
          explain: "**Magnesium** is more reactive than iron (more negative E°), so it gets oxidised instead of iron. Cu, Ag and Sn are less reactive than iron."
        }
      ]
    },

    // ------------------------------------------------------------------
    {
      id: "chemical-kinetics",
      title: "Chemical Kinetics",
      section: "Physical Chemistry",
      summary: "How fast reactions go: rate of reaction, rate law, order and molecularity, integrated rate equations and half-lives of zero- and first-order reactions, pseudo first-order reactions, the Arrhenius equation and collision theory.",
      notes: [
        {
          heading: "Rate of a Reaction",
          points: [
            "**Average rate** = change in concentration ÷ time: −Δ[R]/Δt for a reactant or +Δ[P]/Δt for a product. **Instantaneous rate** is the slope of the tangent, −d[R]/dt.",
            "For aA + bB → cC + dD: rate = −(1/a)d[A]/dt = −(1/b)d[B]/dt = (1/c)d[C]/dt = (1/d)d[D]/dt.",
            "Example: for 2HI → H₂ + I₂, rate = −½ d[HI]/dt = d[H₂]/dt = d[I₂]/dt.",
            "Units of rate: **mol L⁻¹ s⁻¹** (or atm s⁻¹ for gases).",
            "Rate depends on concentration, temperature, catalyst, nature of reactants and surface area."
          ]
        },
        {
          heading: "Rate Law, Order and Molecularity",
          points: [
            "**Rate law**: rate = k[A]ˣ[B]ʸ. The **order** = x + y, and it is found **experimentally**; it may be zero, fractional or a whole number.",
            "Units of k for an nth-order reaction: (mol L⁻¹)¹⁻ⁿ s⁻¹. Zero order: mol L⁻¹ s⁻¹; first order: s⁻¹; second order: L mol⁻¹ s⁻¹.",
            "**Molecularity** = number of species colliding simultaneously in an **elementary step**; it is always 1, 2 or (rarely) 3 and never zero or fractional.",
            "For a complex reaction, the **slowest step decides the rate** (rate-determining step); molecularity has no meaning for the overall complex reaction.",
            "**Pseudo first-order reactions**: one reactant is in large excess, e.g. acid hydrolysis of ethyl acetate in water and the inversion of cane sugar."
          ]
        },
        {
          heading: "Integrated Rate Equations",
          points: [
            "**Zero order**: [R] = [R]₀ − kt; t½ = [R]₀/2k (half-life **proportional** to initial concentration). Example: decomposition of NH₃ on a hot platinum surface at high pressure.",
            "**First order**: k = (2.303/t) log([R]₀/[R]); **t½ = 0.693/k**, independent of initial concentration. Examples: radioactive decay, hydrogenation of ethene, decomposition of N₂O₅.",
            "Plots: zero order, [R] vs t is a straight line (slope −k); first order, **log[R] vs t** is a straight line (slope −k/2.303).",
            "After n half-lives, the amount left = [R]₀ × (½)ⁿ; for a first-order reaction, 75% completion takes **2 t½**.",
            "Gas-phase first-order reaction A(g) → B(g) + C(g): k = (2.303/t) log[pᵢ/(2pᵢ − p_t)]."
          ]
        },
        {
          heading: "Temperature and the Arrhenius Equation",
          points: [
            "For many reactions the rate constant **nearly doubles for a 10 K rise** in temperature.",
            "**Arrhenius equation**: k = A e^(−Ea/RT), where A is the frequency factor and Ea the activation energy.",
            "ln k = ln A − Ea/RT, so a plot of **ln k against 1/T** is a straight line with slope **−Ea/R**.",
            "For two temperatures: log(k₂/k₁) = [Ea/(2.303R)] × [(T₂ − T₁)/(T₁T₂)].",
            "e^(−Ea/RT) is the **fraction of molecules** with energy ≥ Ea; raising T increases this fraction sharply.",
            "A **catalyst** gives an alternative path with **lower activation energy**; it does not change ΔG or the equilibrium constant."
          ]
        },
        {
          heading: "Collision Theory",
          points: [
            "Reactant molecules must **collide** to react; rate = Z_AB e^(−Ea/RT), where Z_AB is the collision frequency.",
            "Only **effective collisions** lead to reaction: molecules need energy at least equal to the **threshold energy** and the **proper orientation**.",
            "The orientation requirement is included as a probability (steric) factor P: rate = P Z_AB e^(−Ea/RT)."
          ]
        }
      ],
      formulas: [
        "Rate = −(1/a) d[A]/dt = (1/c) d[C]/dt for aA → cC",
        "Rate law: rate = k[A]ˣ[B]ʸ; order = x + y",
        "Units of k: (mol L⁻¹)¹⁻ⁿ s⁻¹",
        "Zero order: [R] = [R]₀ − kt; t½ = [R]₀/2k",
        "First order: k = (2.303/t) log([R]₀/[R]); t½ = 0.693/k",
        "First order (gas): k = (2.303/t) log[pᵢ/(2pᵢ − p_t)]",
        "Amount left after n half-lives = [R]₀ × (½)ⁿ",
        "First order: t(75%) = 2 t½; t(99.9%) ≈ 10 t½",
        "Arrhenius: k = A e^(−Ea/RT); log k = log A − Ea/(2.303RT)",
        "log(k₂/k₁) = [Ea/(2.303R)] × [(T₂ − T₁)/(T₁T₂)]",
        "Collision theory: rate = P Z_AB e^(−Ea/RT)",
        "CH₃COOC₂H₅ + H₂O → CH₃COOH + C₂H₅OH (H⁺; pseudo first order)"
      ],
      terms: [
        { term: "Rate constant (k)", meaning: "The rate of reaction when the **concentration of each reactant is 1 mol L⁻¹**; it depends on temperature." },
        { term: "Order of reaction", meaning: "**Sum of the powers** of concentration terms in the experimentally found rate law." },
        { term: "Molecularity", meaning: "Number of reacting species that **collide simultaneously** in an elementary step." },
        { term: "Half-life (t½)", meaning: "Time taken for the concentration of a reactant to fall to **half its initial value**." },
        { term: "Activation energy (Ea)", meaning: "**Minimum extra energy** that reactant molecules must absorb to form the activated complex and react." },
        { term: "Pseudo first-order reaction", meaning: "A reaction of higher order that **behaves as first order** because one reactant is in large excess." }
      ],
      examples: [
        {
          q: "A first-order reaction has k = 1.15 × 10⁻³ s⁻¹. How long will it take for 5 g of the reactant to reduce to 3 g?",
          steps: [
            "For a first-order reaction, t = (2.303/k) log([R]₀/[R])",
            "t = (2.303 ÷ 1.15 × 10⁻³) × log(5/3)",
            "2.303 ÷ 1.15 × 10⁻³ = 2003 s; log(5/3) = log 1.667 = 0.2218",
            "t = 2003 × 0.2218 = 444 s"
          ],
          answer: "About 444 s"
        },
        {
          q: "The rate constant of a reaction doubles when the temperature is raised from 298 K to 308 K. Calculate Ea. (R = 8.314 J K⁻¹ mol⁻¹)",
          steps: [
            "log(k₂/k₁) = [Ea/(2.303R)] × [(T₂ − T₁)/(T₁T₂)], with k₂/k₁ = 2",
            "0.3010 = [Ea/(2.303 × 8.314)] × [10/(298 × 308)]",
            "Ea = (0.3010 × 2.303 × 8.314 × 298 × 308) ÷ 10",
            "Ea = (0.3010 × 19.147 × 91 784) ÷ 10 = 52 897 J mol⁻¹"
          ],
          answer: "Ea ≈ 52.9 kJ mol⁻¹"
        }
      ],
      qa: [
        {
          q: "Distinguish between order and molecularity of a reaction.",
          a: "(1) **Order** is the sum of powers in the experimental rate law; **molecularity** is the number of species colliding in an elementary step. (2) Order is found **experimentally**; molecularity is **theoretical**. (3) Order can be **zero or fractional**; molecularity is always a whole number (1, 2 or 3). (4) Order applies to both elementary and complex reactions; molecularity applies only to **elementary steps**."
        },
        {
          q: "Show that the half-life of a first-order reaction is independent of the initial concentration.",
          a: "For first order, k = (2.303/t) log([R]₀/[R]). At t = t½, [R] = [R]₀/2, so k = (2.303/t½) log 2 = (2.303 × 0.3010)/t½. Therefore **t½ = 0.693/k**, which contains **no concentration term**: the half-life is the same whatever the starting concentration."
        },
        {
          q: "What is a pseudo first-order reaction? Give an example.",
          a: "A reaction that is actually of higher order but **behaves as first order** because one reactant is present in **large excess**, so its concentration hardly changes. Example: acid hydrolysis of ethyl acetate, CH₃COOC₂H₅ + H₂O → CH₃COOH + C₂H₅OH. Water is in excess, so rate = k′[CH₃COOC₂H₅]. Inversion of cane sugar is another example."
        }
      ],
      quiz: [
        {
          q: "The unit of the rate constant of a second-order reaction is:",
          options: ["s⁻¹", "mol L⁻¹ s⁻¹", "L mol⁻¹ s⁻¹", "L² mol⁻² s⁻¹"],
          answer: 2,
          explain: "(mol L⁻¹)¹⁻ⁿ s⁻¹ with n = 2 gives (mol L⁻¹)⁻¹ s⁻¹ = **L mol⁻¹ s⁻¹**."
        },
        {
          q: "The half-life of a first-order reaction is 10 min. The time needed for 75% completion is:",
          options: ["15 min", "20 min", "30 min", "40 min"],
          answer: 1,
          explain: "75% complete means 25% left = (½)², i.e. **two half-lives = 20 min**."
        },
        {
          q: "For a zero-order reaction, the half-life is:",
          options: ["proportional to the initial concentration", "inversely proportional to the initial concentration", "independent of the initial concentration", "proportional to the square of the initial concentration"],
          answer: 0,
          explain: "t½ = [R]₀/2k, so it is **directly proportional to [R]₀**."
        },
        {
          q: "In the Arrhenius plot of ln k against 1/T, the slope is:",
          options: ["Ea/R", "ln A", "−Ea/2.303R", "−Ea/R"],
          answer: 3,
          explain: "ln k = ln A − (Ea/R)(1/T), so the slope is **−Ea/R**. (For log k against 1/T it would be −Ea/2.303R.)"
        },
        {
          q: "A catalyst increases the rate of a reaction by:",
          options: ["increasing the activation energy", "lowering the activation energy", "making ΔG of the reaction more negative", "shifting the equilibrium towards products"],
          answer: 1,
          explain: "A catalyst provides an alternative path with **lower Ea**. It does not change ΔG or the position of equilibrium."
        },
        {
          q: "For 2N₂O₅ → 4NO₂ + O₂, if the rate of formation of O₂ is x mol L⁻¹ s⁻¹, the rate of disappearance of N₂O₅ is:",
          options: ["x/2", "x", "4x", "2x"],
          answer: 3,
          explain: "−½ d[N₂O₅]/dt = d[O₂]/dt = x, so −d[N₂O₅]/dt = **2x**."
        }
      ]
    },

    // ------------------------------------------------------------------
    {
      id: "d-and-f-block-elements",
      title: "The d- and f-Block Elements",
      section: "Inorganic Chemistry",
      summary: "Transition elements and inner transition elements: electronic configuration, general trends in the first transition series (oxidation states, magnetic behaviour, colour, catalysis, interstitial compounds, alloys), potassium dichromate and permanganate, lanthanoids and actinoids.",
      notes: [
        {
          heading: "Position and Electronic Configuration",
          points: [
            "The d-block (groups 3–12) has four series: 3d (Sc–Zn), 4d (Y–Cd), 5d (La, Hf–Hg) and 6d. General configuration: **(n−1)d¹⁻¹⁰ ns¹⁻²**.",
            "A **transition element** has an **incompletely filled d subshell** in its ground state or in any of its common oxidation states.",
            "**Zn, Cd and Hg** have a full d¹⁰ configuration in the ground state and in their common +2 state, so they are **not regarded as transition elements**.",
            "Exceptions due to the stability of half-filled and full d subshells: **Cr 3d⁵ 4s¹** and **Cu 3d¹⁰ 4s¹**.",
            "The f-block contains the **lanthanoids** (4f series, Ce to Lu) and **actinoids** (5f series, Th to Lr): the inner transition elements."
          ]
        },
        {
          heading: "General Trends in Properties",
          points: [
            "Transition metals are hard with **high melting points and enthalpies of atomisation**, because both (n−1)d and ns electrons take part in metallic bonding.",
            "Atomic radii decrease slowly across a series. 4d and 5d elements of a group have almost the **same radius** (Zr 160 pm, Hf 159 pm) because of the lanthanoid contraction.",
            "They show **variable oxidation states** since (n−1)d and ns energies are close; **Mn** shows the most in the 3d series (+2 to +7).",
            "E°(Cu²⁺/Cu) is **positive (+0.34 V)**, so copper does not liberate H₂ from dilute acids.",
            "Lower oxidation-state oxides are basic and higher ones acidic: MnO is basic, while Mn₂O₇ is acidic."
          ]
        },
        {
          heading: "Magnetism, Colour, Catalysis and Alloys",
          points: [
            "Ions with unpaired electrons are **paramagnetic**; spin-only magnetic moment **μ = √[n(n + 2)] BM** (n = unpaired electrons).",
            "Colour comes from **d–d transitions**: a d electron absorbs visible light and jumps to a higher d orbital; we see the complementary colour (Cu²⁺ blue, Ni²⁺ green).",
            "**Sc³⁺ (3d⁰), Ti⁴⁺ (3d⁰) and Zn²⁺ (3d¹⁰) are colourless** because no d–d transition is possible.",
            "Good **catalysts** because of variable oxidation states and ability to form complexes: V₂O₅ (Contact process), Fe (Haber process), Ni (hydrogenation).",
            "**Interstitial compounds** (TiC, Mn₄N, Fe₃H) form when small atoms like H, C or N occupy holes in the metal lattice; they are hard, have high melting points and are chemically inert.",
            "They readily form **alloys** because their atomic radii are similar, e.g. brass (Cu + Zn) and bronze (Cu + Sn)."
          ]
        },
        {
          heading: "Potassium Dichromate and Potassium Permanganate",
          points: [
            "**K₂Cr₂O₇** is made from chromite ore (FeCr₂O₄): fusion with Na₂CO₃ in air gives yellow Na₂CrO₄; acidifying gives Na₂Cr₂O₇; adding KCl gives orange K₂Cr₂O₇.",
            "Chromate and dichromate interconvert with pH: **2CrO₄²⁻ (yellow) + 2H⁺ ⇌ Cr₂O₇²⁻ (orange) + H₂O**.",
            "Acidified K₂Cr₂O₇ is a strong oxidising agent (Cr₂O₇²⁻ → Cr³⁺, **orange to green**); it oxidises I⁻ to I₂, Fe²⁺ to Fe³⁺ and H₂S to S.",
            "**KMnO₄** is made by fusing MnO₂ with KOH and an oxidant to give green K₂MnO₄, which disproportionates in neutral or acidic solution (or is oxidised electrolytically) to purple KMnO₄.",
            "KMnO₄ is reduced to **Mn²⁺ in acidic** medium (5 electrons) and to **MnO₂ in neutral or faintly alkaline** medium (3 electrons)."
          ]
        },
        {
          heading: "Lanthanoids",
          points: [
            "Configuration [Xe] 4f¹⁻¹⁴ 5d⁰⁻¹ 6s²; the common oxidation state is **+3**. Some show +2 (Eu²⁺, Yb²⁺) or +4 (**Ce⁴⁺**, a good oxidising agent).",
            "**Lanthanoid contraction**: a steady decrease in atomic and ionic radii from La to Lu, because **4f electrons shield the outer electrons poorly** from the increasing nuclear charge.",
            "Consequences: the 4d and 5d elements of a group have **nearly identical radii** (Zr and Hf), similar properties, and are hard to separate; **basic strength of hydroxides decreases** from La(OH)₃ to Lu(OH)₃.",
            "**Mischmetall** (about 95% lanthanoid metal, 5% iron, traces of S, C, Ca, Al) is used in Mg-based alloys for bullets, shells and lighter flints."
          ]
        },
        {
          heading: "Actinoids",
          points: [
            "Configuration [Rn] 5f¹⁻¹⁴ 6d⁰⁻¹ 7s²; all actinoids are **radioactive**, and those after uranium are man-made.",
            "They show a **wider range of oxidation states** than lanthanoids because 5f, 6d and 7s levels have comparable energies; +3 is common, uranium reaches +6 and Np and Pu reach +7.",
            "**Actinoid contraction** is greater than lanthanoid contraction because 5f electrons shield even more poorly than 4f electrons.",
            "Compared with lanthanoids, actinoids are more reactive (especially when finely divided) and their chemistry is harder to study because of radioactivity."
          ]
        }
      ],
      formulas: [
        "Spin-only magnetic moment μ = √[n(n + 2)] BM",
        "μ values: n = 1 → 1.73 BM; 2 → 2.83 BM; 3 → 3.87 BM; 4 → 4.90 BM; 5 → 5.92 BM",
        "4FeCr₂O₄ + 8Na₂CO₃ + 7O₂ → 8Na₂CrO₄ + 2Fe₂O₃ + 8CO₂",
        "2Na₂CrO₄ + 2H⁺ → Na₂Cr₂O₇ + 2Na⁺ + H₂O",
        "Na₂Cr₂O₇ + 2KCl → K₂Cr₂O₇ + 2NaCl",
        "2CrO₄²⁻ + 2H⁺ ⇌ Cr₂O₇²⁻ + H₂O",
        "Cr₂O₇²⁻ + 14H⁺ + 6e⁻ → 2Cr³⁺ + 7H₂O (E° = 1.33 V)",
        "Cr₂O₇²⁻ + 6Fe²⁺ + 14H⁺ → 2Cr³⁺ + 6Fe³⁺ + 7H₂O",
        "2MnO₂ + 4KOH + O₂ → 2K₂MnO₄ + 2H₂O",
        "3MnO₄²⁻ + 4H⁺ → 2MnO₄⁻ + MnO₂ + 2H₂O",
        "MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O (acidic)",
        "MnO₄⁻ + 2H₂O + 3e⁻ → MnO₂ + 4OH⁻ (neutral or faintly alkaline)",
        "Lanthanoids: [Xe] 4f¹⁻¹⁴ 5d⁰⁻¹ 6s²; Actinoids: [Rn] 5f¹⁻¹⁴ 6d⁰⁻¹ 7s²"
      ],
      terms: [
        { term: "Transition element", meaning: "An element with an **incompletely filled d subshell** in its ground state or in any common oxidation state." },
        { term: "Lanthanoid contraction", meaning: "Steady **decrease in size from La to Lu** due to poor shielding by 4f electrons." },
        { term: "Interstitial compound", meaning: "Compound formed when **small atoms (H, C, N) are trapped** in the holes of a metal lattice, e.g. TiC, Fe₃H." },
        { term: "Paramagnetism", meaning: "Attraction into a magnetic field caused by **unpaired electrons**." },
        { term: "Alloy", meaning: "A blend of metals, formed easily by transition metals of **similar atomic size**, e.g. brass, bronze." },
        { term: "Mischmetall", meaning: "An alloy of about **95% lanthanoid metal and 5% iron**, used in lighter flints and for bullets and shells." }
      ],
      examples: [
        {
          q: "Calculate the spin-only magnetic moment of a divalent ion in aqueous solution if the atomic number of the element is 25.",
          steps: [
            "Z = 25 is manganese: [Ar] 3d⁵ 4s²",
            "The divalent ion Mn²⁺ loses the two 4s electrons: [Ar] 3d⁵",
            "By Hund's rule the five 3d electrons are all unpaired, so n = 5",
            "μ = √[n(n + 2)] = √(5 × 7) = √35"
          ],
          answer: "μ ≈ 5.92 BM"
        }
      ],
      qa: [
        {
          q: "Why are Zn, Cd and Hg not regarded as transition metals?",
          a: "A transition element must have an incompletely filled d subshell in its ground state or a common oxidation state. Zn, Cd and Hg have the configuration **(n−1)d¹⁰ ns²**, and in their common **+2 state they are still d¹⁰**. Since the d subshell is always full, they are **not regarded as transition metals**."
        },
        {
          q: "What is lanthanoid contraction? Give two consequences.",
          a: "The steady **decrease in atomic and ionic radii** from lanthanum to lutetium, caused by the **imperfect shielding by 4f electrons** of the increasing nuclear charge. Consequences: (1) the 4d and 5d elements of a group (e.g. **Zr 160 pm and Hf 159 pm**) have almost the same size and similar properties, making them hard to separate; (2) the **basic character of hydroxides decreases** from La(OH)₃ to Lu(OH)₃."
        },
        {
          q: "Why are most transition metal ions coloured? Why is Sc³⁺ colourless?",
          a: "Transition metal ions have **partly filled d orbitals**. When visible light falls on them, an electron absorbs a particular wavelength and jumps from a lower to a higher d orbital (**d–d transition**); we see the complementary colour. **Sc³⁺ is 3d⁰**: it has no d electron to excite, so it absorbs no visible light and is colourless."
        }
      ],
      quiz: [
        {
          q: "Which of these ions is colourless in aqueous solution?",
          options: ["Cu²⁺", "Ti³⁺", "Ni²⁺", "Zn²⁺"],
          answer: 3,
          explain: "**Zn²⁺ is 3d¹⁰**: no d–d transition is possible. Cu²⁺ (3d⁹), Ti³⁺ (3d¹) and Ni²⁺ (3d⁸) are coloured."
        },
        {
          q: "The spin-only magnetic moment of Cr³⁺ (Z of Cr = 24) is:",
          options: ["1.73 BM", "3.87 BM", "2.83 BM", "4.90 BM"],
          answer: 1,
          explain: "Cr³⁺ is 3d³ with 3 unpaired electrons: μ = √(3 × 5) = √15 = **3.87 BM**."
        },
        {
          q: "In the first transition series, the element showing the largest number of oxidation states is:",
          options: ["Fe", "Cr", "Cu", "Mn"],
          answer: 3,
          explain: "**Manganese** shows every state from +2 to +7, since it can use all five 3d and two 4s electrons."
        },
        {
          q: "Zr and Hf have almost the same atomic radius because of:",
          options: ["lanthanoid contraction", "actinoid contraction", "inert pair effect", "diagonal relationship"],
          answer: 0,
          explain: "The 14 lanthanoids placed before Hf cause the **lanthanoid contraction**, which cancels the expected increase in size from Zr to Hf."
        },
        {
          q: "The most common oxidation state of lanthanoids is:",
          options: ["+2", "+4", "+3", "+6"],
          answer: 2,
          explain: "All lanthanoids show **+3**; only some also show +2 (Eu, Yb) or +4 (Ce, Tb)."
        },
        {
          q: "When acidified K₂Cr₂O₇ acts as an oxidising agent, its colour changes from:",
          options: ["yellow to orange", "orange to green", "purple to colourless", "green to yellow"],
          answer: 1,
          explain: "Orange Cr₂O₇²⁻ is reduced to **green Cr³⁺**: Cr₂O₇²⁻ + 14H⁺ + 6e⁻ → 2Cr³⁺ + 7H₂O."
        }
      ]
    },

    // ------------------------------------------------------------------
    {
      id: "coordination-compounds",
      title: "Coordination Compounds",
      section: "Inorganic Chemistry",
      summary: "Werner's theory, ligands, coordination number and IUPAC naming of coordination compounds, structural and stereo-isomerism, bonding by valence bond theory and crystal field theory, colour and magnetic properties, and uses of complexes.",
      notes: [
        {
          heading: "Werner's Theory",
          points: [
            "A metal shows two kinds of valence: **primary** (ionisable, equal to the oxidation state, satisfied by negative ions) and **secondary** (non-ionisable, equal to the **coordination number**, satisfied by ligands and fixed in direction).",
            "CoCl₃·6NH₃ = [Co(NH₃)₆]Cl₃ gives **3 mol AgCl** with excess AgNO₃; CoCl₃·5NH₃ = [CoCl(NH₃)₅]Cl₂ gives 2 mol; CoCl₃·4NH₃ = [CoCl₂(NH₃)₄]Cl gives 1 mol.",
            "**Double salts** such as Mohr's salt (FeSO₄·(NH₄)₂SO₄·6H₂O) and potash alum dissociate completely into simple ions in water.",
            "**Complexes keep their complex ion intact**: K₄[Fe(CN)₆] gives [Fe(CN)₆]⁴⁻, not Fe²⁺ ions."
          ]
        },
        {
          heading: "Ligands and Key Terms",
          points: [
            "A **ligand** donates an electron pair to the central metal: **unidentate** (Cl⁻, H₂O, NH₃), **didentate** (ethane-1,2-diamine, en; oxalate, C₂O₄²⁻), **hexadentate** (EDTA⁴⁻).",
            "**Ambidentate ligands** can bind through either of two atoms: NO₂⁻ (through N or O) and SCN⁻ (through S or N).",
            "A di- or polydentate ligand that forms a ring with the metal is a **chelating ligand**; chelate complexes are more stable.",
            "**Coordination number** = number of donor atoms bonded to the metal: 6 in [PtCl₆]²⁻ and in [Fe(C₂O₄)₃]³⁻; 4 in [Ni(NH₃)₄]²⁺.",
            "**Homoleptic** complexes have only one kind of ligand ([Co(NH₃)₆]³⁺); **heteroleptic** complexes have more than one ([Co(NH₃)₄Cl₂]⁺)."
          ]
        },
        {
          heading: "IUPAC Nomenclature",
          points: [
            "Name the **cation first**, then the anion. Inside the complex, list **ligands alphabetically**, then the metal with its **oxidation state in Roman numerals**.",
            "Anionic ligands end in -o (**chlorido, cyanido, hydroxido, oxalato**); neutral ligands: **aqua** (H₂O), **ammine** (NH₃), carbonyl (CO), nitrosyl (NO).",
            "Use di-, tri-, tetra- for simple ligands and **bis-, tris-, tetrakis-** for ligands like en whose names already contain numbers.",
            "If the complex is an **anion**, the metal name ends in **-ate**: cobaltate, ferrate (Fe), cuprate (Cu), argentate (Ag), aurate (Au).",
            "Examples: [Co(NH₃)₆]Cl₃ is **hexaamminecobalt(III) chloride**; K₄[Fe(CN)₆] is **potassium hexacyanidoferrate(II)**; [Pt(NH₃)₂Cl(NO₂)] is diamminechloridonitrito-N-platinum(II)."
          ]
        },
        {
          heading: "Isomerism",
          points: [
            "**Geometrical isomerism**: cis and trans forms of square planar [MX₂L₂] (e.g. [Pt(NH₃)₂Cl₂]) and octahedral [MX₂L₄] (e.g. [Co(NH₃)₄Cl₂]⁺); **fac and mer** forms of [MA₃B₃] such as [Co(NH₃)₃(NO₂)₃].",
            "**Optical isomerism**: non-superimposable mirror images, e.g. [Co(en)₃]³⁺; **cis-[PtCl₂(en)₂]²⁺ is optically active**, the trans form is not.",
            "**Linkage isomerism** (ambidentate ligand): [Co(NH₃)₅(NO₂)]Cl₂ and [Co(NH₃)₅(ONO)]Cl₂.",
            "**Coordination isomerism**: [Co(NH₃)₆][Cr(CN)₆] and [Cr(NH₃)₆][Co(CN)₆]. **Ionisation isomerism**: [Co(NH₃)₅(SO₄)]Br and [Co(NH₃)₅Br]SO₄.",
            "**Solvate (hydrate) isomerism**: [Cr(H₂O)₆]Cl₃ (violet) and [Cr(H₂O)₅Cl]Cl₂·H₂O (grey-green). Tetrahedral complexes do not show geometrical isomerism."
          ]
        },
        {
          heading: "Valence Bond Theory",
          points: [
            "The metal ion uses hybrid orbitals: **sp³** (tetrahedral), **dsp²** (square planar), **d²sp³** (inner-orbital octahedral) and **sp³d²** (outer-orbital octahedral).",
            "[Co(NH₃)₆]³⁺: Co³⁺ is 3d⁶; NH₃ pairs up the electrons, leaving two 3d orbitals free, so it is **d²sp³, inner-orbital and diamagnetic**.",
            "[CoF₆]³⁻: weak-field F⁻ does not cause pairing, so it is **sp³d², outer-orbital and paramagnetic** (4 unpaired electrons).",
            "[Ni(CN)₄]²⁻ is **dsp², square planar, diamagnetic**; [NiCl₄]²⁻ is **sp³, tetrahedral, paramagnetic** (2 unpaired).",
            "Limitations: VBT cannot explain colour, does not distinguish strong and weak ligands, and gives no quantitative idea of magnetic data."
          ]
        },
        {
          heading: "Crystal Field Theory and Applications",
          points: [
            "Ligands are treated as point charges that **split the d orbitals**. Octahedral field: lower **t₂g** (dxy, dyz, dzx) and higher **e_g** (dx²−y², dz²), separated by Δo.",
            "**Spectrochemical series** (increasing field strength): I⁻ < Br⁻ < SCN⁻ < Cl⁻ < S²⁻ < F⁻ < OH⁻ < C₂O₄²⁻ < H₂O < NCS⁻ < edta⁴⁻ < NH₃ < en < CN⁻ < CO.",
            "If **Δo > P** (pairing energy), electrons pair in t₂g: strong field, **low spin**. If Δo < P, they enter e_g: weak field, **high spin**.",
            "In a tetrahedral field the splitting is reversed and smaller, **Δt = (4/9)Δo**, so tetrahedral complexes are almost always high spin.",
            "Colour arises from **d–d transitions**: [Ti(H₂O)₆]³⁺ absorbs blue-green light and looks violet. Anhydrous CuSO₄ is white but hydrated CuSO₄ is blue.",
            "Uses: **EDTA** for estimating hardness of water (Ca²⁺, Mg²⁺); **cisplatin** in cancer treatment; chlorophyll (Mg), haemoglobin (Fe) and vitamin B₁₂ (Co); Wilkinson's catalyst for hydrogenation."
          ]
        }
      ],
      formulas: [
        "Oxidation state of metal: x + (sum of ligand charges) = charge on the complex ion",
        "Coordination number = number of donor atoms bonded to the metal",
        "sp³ → tetrahedral; dsp² → square planar; d²sp³ → inner-orbital octahedral; sp³d² → outer-orbital octahedral",
        "Spectrochemical series: I⁻ < Br⁻ < SCN⁻ < Cl⁻ < S²⁻ < F⁻ < OH⁻ < C₂O₄²⁻ < H₂O < NCS⁻ < edta⁴⁻ < NH₃ < en < CN⁻ < CO",
        "Δt = (4/9) Δo",
        "Δo > P: low spin; Δo < P: high spin",
        "CFSE (octahedral) = (−0.4 × t₂g electrons + 0.6 × e_g electrons) Δo, ignoring pairing energy",
        "Spin-only μ = √[n(n + 2)] BM",
        "[Co(NH₃)₆]Cl₃ + 3AgNO₃ → [Co(NH₃)₆](NO₃)₃ + 3AgCl"
      ],
      terms: [
        { term: "Ligand", meaning: "An ion or molecule that **donates an electron pair** to the central metal atom or ion." },
        { term: "Ambidentate ligand", meaning: "A unidentate ligand that can bind through **two different donor atoms**, e.g. NO₂⁻ (N or O), SCN⁻ (S or N)." },
        { term: "Chelate", meaning: "A complex in which a **di- or polydentate ligand forms a ring** with the metal; it is extra stable." },
        { term: "Coordination number", meaning: "Number of **ligand donor atoms directly bonded** to the central metal." },
        { term: "Crystal field splitting (Δo)", meaning: "Energy gap between the **t₂g and e_g** sets of d orbitals in an octahedral field." },
        { term: "Spectrochemical series", meaning: "Arrangement of ligands in **increasing order of field strength** (ability to split d orbitals)." }
      ],
      examples: [
        {
          q: "For K₃[Fe(CN)₆], give the IUPAC name, the oxidation state of iron, its hybridisation, shape and magnetic behaviour.",
          steps: [
            "Oxidation state: x + 6(−1) = −3, so x = +3",
            "Fe³⁺ (Z = 26) has the configuration 3d⁵",
            "CN⁻ is a strong-field ligand, so the 5 electrons pair up in three 3d orbitals (t₂g⁵), leaving 1 unpaired electron and two 3d orbitals empty",
            "Two 3d, one 4s and three 4p orbitals hybridise: d²sp³, inner-orbital octahedral complex",
            "One unpaired electron: μ = √(1 × 3) = 1.73 BM",
            "The complex is an anion, so iron is named ferrate"
          ],
          answer: "Potassium hexacyanidoferrate(III); Fe is +3, d²sp³, octahedral, low spin and paramagnetic (1 unpaired electron, μ ≈ 1.73 BM)."
        }
      ],
      qa: [
        {
          q: "[Ni(CN)₄]²⁻ is diamagnetic while [NiCl₄]²⁻ is paramagnetic. Explain using valence bond theory.",
          a: "In both, nickel is Ni²⁺ (3d⁸). **CN⁻ is a strong-field ligand**: it forces the two unpaired 3d electrons to pair, freeing one 3d orbital, so Ni²⁺ uses **dsp²** hybrid orbitals; the complex is **square planar** with no unpaired electrons, hence diamagnetic. **Cl⁻ is a weak-field ligand** and cannot cause pairing, so Ni²⁺ uses **sp³** orbitals; the complex is **tetrahedral** with 2 unpaired electrons, hence paramagnetic."
        },
        {
          q: "Write the IUPAC names of (i) [Co(NH₃)₅Cl]Cl₂ (ii) K₃[Cr(C₂O₄)₃] (iii) [Pt(NH₃)₂Cl₂].",
          a: "(i) **Pentaamminechloridocobalt(III) chloride**. (ii) **Potassium trioxalatochromate(III)**. (iii) **Diamminedichloridoplatinum(II)**."
        },
        {
          q: "Why are low-spin tetrahedral complexes rarely observed?",
          a: "In a tetrahedral field there are only four ligands and none points directly at the d orbitals, so the splitting is small: **Δt = (4/9)Δo**. This is almost always **less than the pairing energy**, so electrons prefer to occupy higher orbitals rather than pair up. Hence tetrahedral complexes are nearly always **high spin**."
        }
      ],
      quiz: [
        {
          q: "The coordination number of iron in [Fe(C₂O₄)₃]³⁻ is:",
          options: ["3", "6", "4", "9"],
          answer: 1,
          explain: "Each oxalate is **didentate**: 3 ligands × 2 donor atoms = **6**."
        },
        {
          q: "The IUPAC name of K₄[Fe(CN)₆] is:",
          options: ["potassium hexacyanidoiron(II)", "potassium hexacyanidoferrate(III)", "potassium hexacyanidoferrate(II)", "tetrapotassium hexacyanidoferrate(IV)"],
          answer: 2,
          explain: "x + 6(−1) = −4 gives Fe = +2; the complex is an anion, so iron is named **ferrate**: potassium hexacyanidoferrate(II)."
        },
        {
          q: "Which of these ligands is ambidentate?",
          options: ["SCN⁻", "NH₃", "en", "H₂O"],
          answer: 0,
          explain: "**SCN⁻** can bind through S (thiocyanato) or through N (isothiocyanato)."
        },
        {
          q: "[Co(NH₃)₅(NO₂)]Cl₂ and [Co(NH₃)₅(ONO)]Cl₂ are examples of:",
          options: ["ionisation isomerism", "coordination isomerism", "linkage isomerism", "hydrate isomerism"],
          answer: 2,
          explain: "The ambidentate NO₂⁻ binds through **N in one and O in the other**: linkage isomerism."
        },
        {
          q: "Which of these is the strongest-field ligand?",
          options: ["F⁻", "H₂O", "NH₃", "CN⁻"],
          answer: 3,
          explain: "In the spectrochemical series, **CN⁻** is above NH₃, H₂O and F⁻ (only CO is stronger)."
        },
        {
          q: "The hybridisation and magnetic nature of [NiCl₄]²⁻ are:",
          options: ["dsp², diamagnetic", "sp³, paramagnetic", "sp³, diamagnetic", "dsp², paramagnetic"],
          answer: 1,
          explain: "Weak-field Cl⁻ cannot pair the 3d⁸ electrons, so Ni²⁺ uses **sp³** orbitals (tetrahedral) and keeps **2 unpaired electrons**."
        }
      ]
    }
,

    // ------------------------------------------------------------------
    {
      id: "haloalkanes-and-haloarenes",
      title: "Haloalkanes and Haloarenes",
      section: "Organic Chemistry",
      summary: "Classification, naming and preparation of alkyl and aryl halides, the nature of the C–X bond, SN1 and SN2 mechanisms with their stereochemistry, elimination and reactions with metals, and why haloarenes behave differently from haloalkanes.",
      notes: [
        {
          heading: "Classification, Naming and the C–X Bond",
          points: [
            "Halogen on an **sp³ carbon**: alkyl halides (1°, 2°, 3°), **allylic** and **benzylic** halides. Halogen on an **sp² carbon**: **vinylic** and **aryl** halides.",
            "IUPAC examples: CH₃CH₂CH(Cl)CH₃ is 2-chlorobutane; CH₂=CHCl is chloroethene (vinyl chloride); C₆H₅CH₂Cl is (chloromethyl)benzene (benzyl chloride).",
            "The C–X bond is **polar** (Cδ+–Xδ−). Bond length increases and bond enthalpy decreases from C–F to C–I, so reactivity is **R–I > R–Br > R–Cl > R–F**.",
            "Boiling points increase with the size of halogen (RI > RBr > RCl > RF) and decrease with **branching**. Haloalkanes are only slightly soluble in water."
          ]
        },
        {
          heading: "Preparation",
          points: [
            "From alcohols: HCl with anhydrous ZnCl₂; PCl₃ or PCl₅; best with **thionyl chloride (SOCl₂)**, since the by-products SO₂ and HCl are gases that escape, leaving pure alkyl chloride.",
            "From alkenes: addition of HX (Markovnikov's rule) or X₂ (gives vicinal dihalides).",
            "**Finkelstein reaction**: R–Cl or R–Br + NaI in **dry acetone** gives R–I; NaCl or NaBr precipitates and drives the reaction forward.",
            "**Swarts reaction**: R–Br or R–Cl + metallic fluoride (AgF, Hg₂F₂, CoF₂ or SbF₃) gives **R–F**.",
            "Haloarenes: electrophilic substitution (Cl₂ with Fe or FeCl₃ in the dark) or the **Sandmeyer reaction** of a diazonium salt with CuCl/HCl or CuBr/HBr."
          ]
        },
        {
          heading: "Nucleophilic Substitution: SN2 and SN1",
          points: [
            "**SN2**: one step, rate = k[RX][Nu⁻]; the nucleophile attacks from the **back side**, giving **inversion of configuration**. Reactivity: CH₃X > 1° > 2° > 3° (steric hindrance).",
            "**SN1**: two steps through a **carbocation**; rate = k[RX]; favoured by polar protic solvents. Reactivity: **3° > 2° > 1° > CH₃X**.",
            "**Allylic and benzylic halides** react fast by SN1 because their carbocations are resonance-stabilised.",
            "With an optically active substrate, SN2 gives **inversion** and SN1 gives mainly **racemisation**.",
            "**KCN gives alkyl cyanides (R–CN)** but **AgCN gives isocyanides (R–NC)**; KNO₂ gives alkyl nitrites (R–ONO) but AgNO₂ gives nitroalkanes (R–NO₂)."
          ]
        },
        {
          heading: "Stereochemistry",
          points: [
            "Compounds that rotate the plane of **plane-polarised light** are optically active: **dextrorotatory (+)** turns it clockwise, **laevorotatory (−)** anticlockwise.",
            "A carbon with **four different groups** is a chiral (asymmetric) carbon, e.g. C2 of butan-2-ol.",
            "**Enantiomers** are non-superimposable mirror images; they have identical physical properties except the direction of rotation.",
            "A **racemic mixture** contains equal amounts of the two enantiomers; it is optically inactive (written as dl or ±)."
          ]
        },
        {
          heading: "Elimination and Reactions with Metals",
          points: [
            "**Dehydrohalogenation** with alcoholic KOH removes HX (β-elimination) to give an alkene.",
            "**Saytzeff (Zaitsev) rule**: the major alkene is the **more substituted** one: 2-bromobutane gives but-2-ene (about 80%) and but-1-ene (about 20%).",
            "**Grignard reagent**: R–X + Mg (dry ether) → RMgX. It reacts with any source of protons (water, alcohols) to give an alkane, so it must be kept **dry**.",
            "**Wurtz reaction**: 2R–X + 2Na → R–R + 2NaX (dry ether).",
            "Aqueous KOH favours **substitution** (alcohol); alcoholic KOH favours **elimination** (alkene)."
          ]
        },
        {
          heading: "Haloarenes",
          points: [
            "Aryl halides are **much less reactive** towards nucleophilic substitution: resonance gives the C–X bond **partial double-bond character**, the carbon is sp², the phenyl cation is unstable, and the electron-rich ring repels nucleophiles.",
            "Chlorobenzene gives phenol only under harsh conditions: **NaOH at 623 K and 300 atm**, then acid.",
            "**–NO₂ groups at ortho and para positions** make substitution easier: 2,4,6-trinitrochlorobenzene is hydrolysed by warm water.",
            "Halogens are **deactivating but ortho/para directing** in electrophilic substitution (–I effect outweighs +R effect); the para product is usually major.",
            "**Wurtz–Fittig**: aryl halide + alkyl halide + Na gives alkylbenzene; **Fittig**: two aryl halides + Na give biphenyl."
          ]
        }
      ],
      formulas: [
        "R–OH + SOCl₂ → R–Cl + SO₂ + HCl",
        "R–OH + PCl₅ → R–Cl + POCl₃ + HCl",
        "3R–OH + PCl₃ → 3R–Cl + H₃PO₃",
        "Finkelstein: R–Cl + NaI → R–I + NaCl (dry acetone)",
        "Swarts: CH₃Br + AgF → CH₃F + AgBr",
        "Sandmeyer: C₆H₅N₂⁺Cl⁻ → C₆H₅Cl + N₂ (CuCl/HCl)",
        "SN2: rate = k[RX][Nu⁻]; SN1: rate = k[RX]",
        "SN1 reactivity: 3° > 2° > 1° > CH₃X; SN2 reactivity: CH₃X > 1° > 2° > 3°",
        "Grignard: R–X + Mg → RMgX (dry ether); RMgX + H₂O → R–H + Mg(OH)X",
        "Wurtz: 2R–X + 2Na → R–R + 2NaX (dry ether)",
        "Wurtz–Fittig: C₆H₅Cl + CH₃Cl + 2Na → C₆H₅CH₃ + 2NaCl (dry ether)",
        "Fittig: 2C₆H₅Cl + 2Na → C₆H₅–C₆H₅ + 2NaCl (dry ether)",
        "Chlorobenzene → phenol: (i) NaOH, 623 K, 300 atm (ii) H⁺"
      ],
      terms: [
        { term: "Chirality", meaning: "Property of an object or molecule of being **non-superimposable on its mirror image**; usually due to a carbon with four different groups." },
        { term: "Enantiomers", meaning: "**Non-superimposable mirror-image** stereoisomers that rotate plane-polarised light equally in opposite directions." },
        { term: "Racemic mixture", meaning: "An **equimolar mixture of two enantiomers**; it is optically inactive." },
        { term: "Saytzeff rule", meaning: "In dehydrohalogenation, the **more highly substituted alkene** is the major product." },
        { term: "Ambident nucleophile", meaning: "A nucleophile that can attack through **two different atoms**, e.g. CN⁻ (C or N) and NO₂⁻ (N or O)." },
        { term: "Grignard reagent", meaning: "An **alkylmagnesium halide (RMgX)** made from R–X and Mg in dry ether; very reactive towards water." }
      ],
      examples: [
        {
          q: "Predict the alkenes formed when 2-bromopentane is heated with alcoholic KOH, and identify the major product.",
          steps: [
            "Structure: CH₃–CHBr–CH₂–CH₂–CH₃; Br is on C2",
            "β-hydrogens are on C1 and on C3",
            "Loss of H from C1 gives CH₂=CH–CH₂–CH₂–CH₃ (pent-1-ene), a monosubstituted alkene",
            "Loss of H from C3 gives CH₃–CH=CH–CH₂–CH₃ (pent-2-ene), a disubstituted alkene",
            "By Saytzeff's rule the more substituted alkene is the major product"
          ],
          answer: "Pent-2-ene is the major product and pent-1-ene the minor product."
        }
      ],
      qa: [
        {
          q: "Why are haloarenes much less reactive than haloalkanes towards nucleophilic substitution?",
          a: "(1) **Resonance**: a lone pair of the halogen is delocalised into the ring, giving the C–X bond **partial double-bond character**, so it is harder to break. (2) The carbon is **sp²** (more s-character), so the C–X bond is shorter and stronger. (3) The **phenyl cation** that SN1 would need is very unstable. (4) The **electron-rich ring repels** the incoming nucleophile and back-side attack is blocked."
        },
        {
          q: "Why is thionyl chloride preferred for preparing alkyl chlorides from alcohols?",
          a: "R–OH + SOCl₂ → R–Cl + SO₂ + HCl. Both by-products, **SO₂ and HCl, are gases** that escape from the reaction mixture, so **pure alkyl chloride** is left behind and no separation is needed."
        },
        {
          q: "Haloalkanes react with KCN to form alkyl cyanides, but with AgCN to form isocyanides. Explain.",
          a: "CN⁻ is an **ambident nucleophile** that can attack through C or N. **KCN is ionic** and gives free CN⁻ ions; attack takes place through **carbon**, forming the stronger C–C bond, so R–CN is formed. **AgCN is mainly covalent**: carbon is tied up in the Ag–C bond and only the **nitrogen** lone pair is available, so R–NC (isocyanide) is formed."
        }
      ],
      quiz: [
        {
          q: "Which of these reacts fastest by the SN1 mechanism?",
          options: ["CH₃Br", "CH₃CH₂Br", "(CH₃)₂CHBr", "(CH₃)₃CBr"],
          answer: 3,
          explain: "SN1 goes through a carbocation; the **tertiary** carbocation from (CH₃)₃CBr is the most stable."
        },
        {
          q: "Which of these reacts fastest by the SN2 mechanism?",
          options: ["CH₃Br", "(CH₃)₃CBr", "(CH₃)₂CHBr", "CH₃CH₂Br"],
          answer: 0,
          explain: "SN2 needs back-side attack; **CH₃Br** has the least steric hindrance."
        },
        {
          q: "The Finkelstein reaction is used to prepare:",
          options: ["alkyl fluorides", "alkyl iodides", "aryl chlorides", "alkyl cyanides"],
          answer: 1,
          explain: "R–Cl or R–Br + NaI in dry acetone gives **R–I**; insoluble NaCl or NaBr precipitates out."
        },
        {
          q: "An SN2 reaction on an optically active haloalkane gives a product with:",
          options: ["retention of configuration", "racemisation", "inversion of configuration", "conversion to a meso compound"],
          answer: 2,
          explain: "The nucleophile attacks from the side opposite the leaving group, flipping the molecule like an umbrella: **inversion** (Walden inversion)."
        },
        {
          q: "Heating 2-bromobutane with alcoholic KOH gives mainly:",
          options: ["but-1-ene", "butan-2-ol", "but-2-ene", "butane"],
          answer: 2,
          explain: "By Saytzeff's rule the **more substituted alkene, but-2-ene**, is the major product (about 80%)."
        },
        {
          q: "In electrophilic substitution of chlorobenzene, the chlorine atom is:",
          options: ["activating and meta directing", "deactivating and ortho/para directing", "activating and ortho/para directing", "deactivating and meta directing"],
          answer: 1,
          explain: "The –I effect of Cl **deactivates** the ring, but its +R effect increases electron density at ortho and para positions, so it is **ortho/para directing**."
        }
      ]
    },

    // ------------------------------------------------------------------
    {
      id: "alcohols-phenols-and-ethers",
      title: "Alcohols, Phenols and Ethers",
      section: "Organic Chemistry",
      summary: "Naming, preparation and properties of alcohols, phenols and ethers: acidity, reactions of the O–H and C–O bonds, distinguishing tests, electrophilic substitution in phenol, named reactions (Kolbe, Reimer–Tiemann, Williamson) and cleavage of ethers.",
      notes: [
        {
          heading: "Classification, Naming and Structure",
          points: [
            "Alcohols have –OH on an **sp³ carbon** (1°, 2°, 3°, allylic, benzylic); **phenols** have –OH directly on an aromatic ring (sp² carbon).",
            "IUPAC: CH₃CH(OH)CH₃ is propan-2-ol; (CH₃)₃COH is 2-methylpropan-2-ol; HOCH₂CH₂OH is ethane-1,2-diol; glycerol is propane-1,2,3-triol; CH₃OCH₂CH₃ is methoxyethane; C₆H₅OCH₃ is methoxybenzene (anisole).",
            "Bond angle C–O–H in methanol is **108.9°**; C–O–C in ethers is **111.7°** (bulky groups repel).",
            "In phenol the C–O bond (136 pm) is **shorter** than in methanol because of partial double-bond character (resonance) and the sp² carbon.",
            "Alcohols and phenols have **high boiling points** and lower members dissolve in water because of **hydrogen bonding**."
          ]
        },
        {
          heading: "Preparation",
          points: [
            "**Acid-catalysed hydration** of alkenes follows Markovnikov's rule: propene gives propan-2-ol.",
            "**Hydroboration–oxidation** (B₂H₆, then H₂O₂/OH⁻) gives the **anti-Markovnikov** alcohol: propene gives propan-1-ol.",
            "**Reduction**: aldehydes give 1° alcohols and ketones give 2° alcohols (H₂/Pd, NaBH₄, LiAlH₄); LiAlH₄ also reduces carboxylic acids to 1° alcohols.",
            "**Grignard reagents**: methanal gives 1° alcohols, other aldehydes give 2° alcohols, ketones give **3° alcohols**.",
            "**Phenol** is made from chlorobenzene (NaOH, 623 K, 300 atm), benzenesulphonic acid (fusion with NaOH), diazonium salts (warming with water) and **cumene** (air oxidation to cumene hydroperoxide, then dilute acid gives phenol + acetone)."
          ]
        },
        {
          heading: "Acidity of Alcohols and Phenols",
          points: [
            "Alcohols react with active metals: 2R–OH + 2Na → 2R–ONa + H₂, showing weak acidity. Acidity order: **1° > 2° > 3°** (+I effect of alkyl groups). Alcohols are weaker acids than water.",
            "**Phenol (pKa ≈ 10)** is much more acidic than ethanol (pKa ≈ 15.9) because the **phenoxide ion is resonance-stabilised**; phenol dissolves in NaOH, alcohols do not.",
            "**Electron-withdrawing groups** (–NO₂) at ortho/para positions increase acidity; **electron-releasing groups** (–CH₃) decrease it: p-nitrophenol > phenol > p-cresol.",
            "Phenol is weaker than carbonic acid, so it **does not release CO₂ from NaHCO₃**; 2,4,6-trinitrophenol (picric acid) is strong enough to do so."
          ]
        },
        {
          heading: "Reactions of Alcohols",
          points: [
            "**Esterification** with carboxylic acids (conc. H₂SO₄) or acid chlorides (in pyridine).",
            "With HX the order is 3° > 2° > 1°. **Lucas test** (conc. HCl + anhydrous ZnCl₂): 3° alcohols give **turbidity immediately**, 2° after a few minutes, 1° none at room temperature.",
            "**Dehydration** with conc. H₂SO₄: ethanol at **443 K gives ethene**; with excess ethanol at **413 K gives ethoxyethane**. Ease of dehydration: 3° > 2° > 1°.",
            "**Oxidation**: 1° alcohols give aldehydes (PCC) and then carboxylic acids (acidified KMnO₄); 2° give ketones (CrO₃); 3° resist oxidation.",
            "Over heated **copper at 573 K**, 1° alcohols give aldehydes, 2° give ketones, and 3° are dehydrated to alkenes."
          ]
        },
        {
          heading: "Reactions of Phenol",
          points: [
            "–OH strongly **activates** the ring and directs to **ortho and para** positions.",
            "**Bromine water** gives a white precipitate of 2,4,6-tribromophenol; Br₂ in CS₂ at low temperature gives mainly p-bromophenol.",
            "**Dilute HNO₃** (298 K) gives o- and p-nitrophenol, separated by **steam distillation** (the ortho isomer is steam-volatile because of intramolecular H-bonding); **conc. HNO₃** gives picric acid.",
            "**Kolbe's reaction**: sodium phenoxide + CO₂ (400 K, 4–7 atm), then acid, gives **salicylic acid** (2-hydroxybenzoic acid).",
            "**Reimer–Tiemann reaction**: phenol + CHCl₃ + aqueous NaOH, then acid, gives **salicylaldehyde** (2-hydroxybenzaldehyde).",
            "Phenol gives a **violet colour with neutral FeCl₃**; distilling with zinc dust gives benzene."
          ]
        },
        {
          heading: "Ethers",
          points: [
            "**Williamson synthesis**: R–X + R′–ONa → R–O–R′ + NaX (SN2). The **alkyl halide must be primary**; 3° halides undergo elimination to give alkenes.",
            "So tert-butyl methyl ether is made from (CH₃)₃C–ONa + CH₃Br, not from (CH₃)₃C–Br + CH₃ONa (which gives 2-methylpropene).",
            "**Cleavage by HI**: with two 1° or 2° groups, I⁻ attacks the **smaller** alkyl group (SN2); if one group is **3°**, the 3° iodide forms (SN1): (CH₃)₃C–O–CH₃ + HI → (CH₃)₃C–I + CH₃OH.",
            "**Anisole + HI gives phenol and methyl iodide**, because the O–aryl bond has partial double-bond character and is not broken.",
            "The –OCH₃ group of anisole is **ortho/para directing**: bromination in ethanoic acid gives mainly p-bromoanisole."
          ]
        }
      ],
      formulas: [
        "Hydroboration–oxidation: CH₃CH=CH₂ → CH₃CH₂CH₂OH ((i) B₂H₆ (ii) H₂O₂/OH⁻)",
        "Cumene process: C₆H₅CH(CH₃)₂ + O₂ → C₆H₅C(CH₃)₂OOH → C₆H₅OH + CH₃COCH₃ (H⁺/H₂O)",
        "2R–OH + 2Na → 2R–ONa + H₂",
        "Lucas test: 3° immediate turbidity; 2° after a few minutes; 1° no turbidity at room temperature",
        "C₂H₅OH → CH₂=CH₂ + H₂O (conc. H₂SO₄, 443 K)",
        "2C₂H₅OH → C₂H₅OC₂H₅ + H₂O (conc. H₂SO₄, 413 K)",
        "R–CH₂OH → R–CHO (PCC); R–CH₂OH → R–COOH (acidified KMnO₄)",
        "C₆H₅OH + 3Br₂ → C₆H₂Br₃OH (2,4,6-tribromophenol) + 3HBr (bromine water)",
        "Kolbe: C₆H₅ONa + CO₂ → o-HOC₆H₄COOH, salicylic acid ((i) 400 K, 4–7 atm (ii) H⁺)",
        "Reimer–Tiemann: C₆H₅OH + CHCl₃ + aq. NaOH → o-HOC₆H₄CHO, salicylaldehyde (after H⁺)",
        "Williamson: R–X + R′–ONa → R–O–R′ + NaX",
        "(CH₃)₃C–O–CH₃ + HI → (CH₃)₃C–I + CH₃OH",
        "C₆H₅OCH₃ + HI → C₆H₅OH + CH₃I"
      ],
      terms: [
        { term: "Lucas test", meaning: "Test with **conc. HCl + anhydrous ZnCl₂** that distinguishes 1°, 2° and 3° alcohols by how fast turbidity appears." },
        { term: "Hydroboration–oxidation", meaning: "Addition of **B₂H₆ followed by H₂O₂/OH⁻** to an alkene, giving an anti-Markovnikov alcohol." },
        { term: "Kolbe's reaction", meaning: "**Sodium phenoxide + CO₂** under pressure gives salicylic acid after acidification." },
        { term: "Reimer–Tiemann reaction", meaning: "**Phenol + CHCl₃ + NaOH** gives salicylaldehyde (–CHO enters the ortho position)." },
        { term: "Williamson synthesis", meaning: "Preparation of ethers by **SN2 reaction of an alkoxide with a primary alkyl halide**." },
        { term: "Phenoxide ion", meaning: "C₆H₅O⁻, the conjugate base of phenol; it is **resonance-stabilised**, which makes phenol acidic." }
      ],
      examples: [
        {
          q: "How will you prepare 2-methylpropan-2-ol using a Grignard reagent?",
          steps: [
            "2-Methylpropan-2-ol, (CH₃)₃C–OH, is a 3° alcohol, so start from a ketone",
            "Take propanone, CH₃COCH₃, and methylmagnesium bromide, CH₃MgBr, in dry ether",
            "The CH₃ group of the Grignard reagent adds to the carbonyl carbon (nucleophilic addition): (CH₃)₃C–OMgBr",
            "Hydrolyse the adduct with dilute acid: (CH₃)₃C–OMgBr + H₂O → (CH₃)₃C–OH + Mg(OH)Br"
          ],
          answer: "CH₃COCH₃ + CH₃MgBr (dry ether), then H₂O/H⁺ → (CH₃)₃C–OH (2-methylpropan-2-ol)"
        }
      ],
      qa: [
        {
          q: "Why is phenol more acidic than ethanol?",
          a: "When phenol loses H⁺, the **phenoxide ion** is formed, whose negative charge is **delocalised over the benzene ring by resonance**, making it stable. The ethoxide ion has no resonance; moreover the **+I effect of the ethyl group** concentrates negative charge on O and destabilises it. So phenol loses H⁺ much more easily (pKa ≈ 10 compared with ≈ 15.9 for ethanol)."
        },
        {
          q: "tert-Butyl methyl ether cannot be made by reacting tert-butyl bromide with sodium methoxide. Why? How is it made?",
          a: "Sodium methoxide is a strong base, and with a **3° alkyl halide elimination is favoured over substitution**, so the main product is **2-methylpropene**. The ether is made by taking the **3° alkoxide and a 1° halide**: (CH₃)₃C–ONa + CH₃Br → (CH₃)₃C–O–CH₃ + NaBr."
        },
        {
          q: "Give a chemical test to distinguish phenol from ethanol.",
          a: "**Neutral FeCl₃ test**: phenol gives a **violet colour**; ethanol does not. Alternatively, phenol gives a **white precipitate of 2,4,6-tribromophenol with bromine water**, while ethanol does not."
        }
      ],
      quiz: [
        {
          q: "Which alcohol gives turbidity immediately with Lucas reagent?",
          options: ["Butan-1-ol", "Butan-2-ol", "2-Methylpropan-2-ol", "2-Methylpropan-1-ol"],
          answer: 2,
          explain: "**2-Methylpropan-2-ol is a 3° alcohol**: it forms a stable 3° carbocation quickly, so the insoluble chloride appears at once."
        },
        {
          q: "Which is the most acidic?",
          options: ["Phenol", "p-Nitrophenol", "p-Cresol", "Ethanol"],
          answer: 1,
          explain: "The electron-withdrawing **–NO₂ group** at the para position stabilises the phenoxide ion further by resonance and the –I effect."
        },
        {
          q: "Phenol treated with CHCl₃ and aqueous NaOH, followed by acidification, gives:",
          options: ["salicylaldehyde", "salicylic acid", "benzoic acid", "benzaldehyde"],
          answer: 0,
          explain: "This is the **Reimer–Tiemann reaction**: a –CHO group enters the ortho position, giving 2-hydroxybenzaldehyde."
        },
        {
          q: "Hydroboration–oxidation of propene gives:",
          options: ["propan-2-ol", "propanal", "propane-1,2-diol", "propan-1-ol"],
          answer: 3,
          explain: "Hydroboration–oxidation gives the **anti-Markovnikov** product: –OH ends up on the terminal carbon."
        },
        {
          q: "Anisole on heating with HI gives:",
          options: ["iodobenzene and methanol", "phenol and iodomethane", "benzene and methanol", "iodobenzene and iodomethane"],
          answer: 1,
          explain: "The O–aryl bond is strengthened by partial double-bond character, so the **O–CH₃ bond breaks**: C₆H₅OCH₃ + HI → C₆H₅OH + CH₃I."
        },
        {
          q: "A ketone reacts with a Grignard reagent, and the product is hydrolysed. The final product is:",
          options: ["a primary alcohol", "a secondary alcohol", "a tertiary alcohol", "a carboxylic acid"],
          answer: 2,
          explain: "The carbonyl carbon of a ketone already has two alkyl groups; adding a third gives a **tertiary alcohol**."
        }
      ]
    },

    // ------------------------------------------------------------------
    {
      id: "aldehydes-ketones-and-carboxylic-acids",
      title: "Aldehydes, Ketones and Carboxylic Acids",
      section: "Organic Chemistry",
      summary: "Carbonyl compounds and carboxylic acids: naming, preparation by named reactions, nucleophilic addition, reduction and oxidation, tests for aldehydes, aldol and Cannizzaro reactions, acidity of carboxylic acids and their characteristic reactions.",
      notes: [
        {
          heading: "Structure, Naming and Physical Properties",
          points: [
            "The **carbonyl group** (>C=O) has an sp² carbon with bond angles of about 120°; it is polar (Cδ+=Oδ−), so **nucleophiles attack the carbon**.",
            "Names: HCHO **methanal** (formaldehyde); CH₃CHO **ethanal** (acetaldehyde); CH₃COCH₃ **propanone** (acetone); C₆H₅COCH₃ **1-phenylethanone** (acetophenone); CH₃COOH **ethanoic acid**.",
            "Boiling points of aldehydes and ketones lie **between** those of hydrocarbons/ethers and alcohols of similar mass (dipole–dipole attraction but no H-bonding between their own molecules).",
            "**Carboxylic acids** boil higher than alcohols of similar mass because of extensive H-bonding; they exist as **dimers** in the vapour phase."
          ]
        },
        {
          heading: "Preparation of Aldehydes and Ketones",
          points: [
            "Oxidation of 1° alcohols (PCC) gives aldehydes and of 2° alcohols gives ketones; dehydrogenation over Cu at 573 K does the same.",
            "**Rosenmund reduction**: acyl chloride + H₂ over Pd–BaSO₄ gives an aldehyde.",
            "**Stephen reaction**: nitrile + SnCl₂/HCl gives an imine, which hydrolyses to an aldehyde. Nitriles are also reduced to aldehydes by DIBAL-H.",
            "**Etard reaction**: toluene + chromyl chloride (CrO₂Cl₂) gives a complex that hydrolyses to **benzaldehyde**. **Gattermann–Koch**: benzene + CO + HCl (anhydrous AlCl₃/CuCl) gives benzaldehyde.",
            "Ketones: acyl chloride + **dialkylcadmium**; **Friedel–Crafts acylation** of benzene; nitriles + Grignard reagent followed by hydrolysis."
          ]
        },
        {
          heading: "Nucleophilic Addition and Reduction",
          points: [
            "**Aldehydes are more reactive than ketones**: ketones have two alkyl groups that hinder attack (steric) and reduce the positive charge on carbon (+I effect).",
            "Additions: **HCN** gives cyanohydrins; **NaHSO₃** gives crystalline bisulphite adducts (used to purify aldehydes); alcohols give hemiacetals and **acetals** (dry HCl); ethylene glycol gives ketals.",
            "Ammonia derivatives (H₂N–Z) give **oximes** (NH₂OH), **hydrazones** (NH₂NH₂), phenylhydrazones and **2,4-DNP derivatives** (yellow-orange-red precipitate; a test for C=O), and semicarbazones.",
            "Reduction to alcohols with NaBH₄ or LiAlH₄. Reduction of C=O to CH₂: **Clemmensen** (Zn-Hg + conc. HCl) or **Wolff–Kishner** (NH₂NH₂, then KOH in ethylene glycol, heat)."
          ]
        },
        {
          heading: "Oxidation Tests and Reactions Involving α-Hydrogen",
          points: [
            "Aldehydes are **easily oxidised** (they are reducing agents); ketones are oxidised only under vigorous conditions with C–C bond cleavage.",
            "**Tollens' test**: ammoniacal silver nitrate gives a **silver mirror** with aldehydes. **Fehling's test**: aliphatic aldehydes give a **red-brown precipitate of Cu₂O**; aromatic aldehydes do not respond.",
            "**Haloform reaction**: methyl ketones (CH₃CO–) and ethanal with NaOX give haloform; with iodine, **yellow iodoform (CHI₃)** forms (iodoform test).",
            "**Aldol condensation**: aldehydes or ketones **with α-hydrogen** + dilute alkali give β-hydroxy carbonyl compounds, which lose water on heating to give α,β-unsaturated compounds.",
            "**Cannizzaro reaction**: aldehydes **without α-hydrogen** (HCHO, C₆H₅CHO) with conc. alkali; one molecule is reduced to an alcohol and another oxidised to an acid salt.",
            "In aromatic aldehydes and ketones, the carbonyl group is **deactivating and meta directing**."
          ]
        },
        {
          heading: "Carboxylic Acids: Preparation and Acidity",
          points: [
            "Prepared by oxidising 1° alcohols or aldehydes; alkylbenzenes with alkaline KMnO₄ give **benzoic acid**; hydrolysis of nitriles, amides, esters and acyl chlorides; Grignard reagent + **dry ice (CO₂)** followed by acid.",
            "The **carboxylate ion is resonance-stabilised** (two equivalent structures), so carboxylic acids are stronger acids than phenols and alcohols; they **release CO₂ from NaHCO₃**.",
            "Electron-withdrawing groups increase acidity: **CF₃COOH > CCl₃COOH > CHCl₂COOH > ClCH₂COOH > CH₃COOH**; the closer the group to –COOH, the stronger the effect.",
            "Electron-releasing alkyl groups decrease acidity: **HCOOH (pKa 3.75) > C₆H₅COOH (4.19) > CH₃COOH (4.76)**."
          ]
        },
        {
          heading: "Reactions of Carboxylic Acids",
          points: [
            "With PCl₅, PCl₃ or SOCl₂ they give **acyl chlorides**; with alcohols (H⁺) they give **esters**; with NH₃ they give ammonium salts, which form **amides** on heating.",
            "**LiAlH₄ or diborane** reduces –COOH to –CH₂OH; **NaBH₄ does not** reduce carboxylic acids.",
            "**Decarboxylation**: sodium salts heated with soda lime lose CO₂ to give alkanes; **Kolbe electrolysis** of their salts also gives alkanes.",
            "**Hell–Volhard–Zelinsky (HVZ)**: acids with α-hydrogen + Cl₂ or Br₂ with red phosphorus give **α-halo acids**.",
            "–COOH is **deactivating and meta directing**; benzoic acid does not undergo Friedel–Crafts reactions because AlCl₃ binds to the carboxyl group."
          ]
        }
      ],
      formulas: [
        "Rosenmund: RCOCl + H₂ → RCHO + HCl (Pd–BaSO₄)",
        "Stephen: RCN + SnCl₂ + HCl → RCH=NH → RCHO (H₃O⁺)",
        "Etard: C₆H₅CH₃ → C₆H₅CHO ((i) CrO₂Cl₂ in CS₂ (ii) H₃O⁺)",
        "Gattermann–Koch: C₆H₆ + CO → C₆H₅CHO (HCl, anhyd. AlCl₃/CuCl)",
        "2R′COCl + R₂Cd → 2R′COR + CdCl₂",
        "Clemmensen: >C=O → >CH₂ (Zn-Hg, conc. HCl)",
        "Wolff–Kishner: >C=O → >C=NNH₂ → >CH₂ (NH₂NH₂, then KOH/ethylene glycol, heat)",
        "Tollens': RCHO + 2[Ag(NH₃)₂]⁺ + 3OH⁻ → RCOO⁻ + 2Ag + 2H₂O + 4NH₃",
        "Fehling's: RCHO + 2Cu²⁺ + 5OH⁻ → RCOO⁻ + Cu₂O + 3H₂O",
        "Iodoform: CH₃COCH₃ + 3NaOI → CHI₃ + CH₃COONa + 2NaOH",
        "Aldol: 2CH₃CHO → CH₃CH(OH)CH₂CHO → CH₃CH=CHCHO + H₂O (dil. NaOH, then heat)",
        "Cannizzaro: 2HCHO + KOH (conc.) → CH₃OH + HCOOK",
        "RMgX + CO₂ → RCOOMgX → RCOOH (H₃O⁺)",
        "HVZ: R–CH₂–COOH → R–CHX–COOH ((i) X₂/red P (ii) H₂O)",
        "Decarboxylation: RCOONa + NaOH → R–H + Na₂CO₃ (CaO, heat)",
        "Acid strength: CF₃COOH > CCl₃COOH > CHCl₂COOH > ClCH₂COOH > HCOOH > C₆H₅COOH > CH₃COOH"
      ],
      terms: [
        { term: "Nucleophilic addition", meaning: "Typical reaction of aldehydes and ketones in which a **nucleophile adds to the carbonyl carbon**, e.g. addition of HCN." },
        { term: "Aldol condensation", meaning: "Reaction of aldehydes or ketones **having α-hydrogen** in dilute alkali to give β-hydroxy carbonyl compounds." },
        { term: "Cannizzaro reaction", meaning: "**Self oxidation–reduction** of aldehydes without α-hydrogen in concentrated alkali, giving an alcohol and a carboxylate salt." },
        { term: "Iodoform test", meaning: "Compounds with a **CH₃CO– group** (or CH₃CH(OH)–) give a yellow precipitate of CHI₃ with I₂ and NaOH." },
        { term: "Tollens' reagent", meaning: "**Ammoniacal silver nitrate**; aldehydes reduce it to a silver mirror." },
        { term: "HVZ reaction", meaning: "**α-Halogenation** of carboxylic acids with Cl₂ or Br₂ in the presence of red phosphorus." }
      ],
      examples: [
        {
          q: "An organic compound A (C₃H₆O) gives an orange precipitate with 2,4-DNP and a yellow precipitate with iodine and NaOH, but does not reduce Tollens' reagent. Identify A.",
          steps: [
            "Orange precipitate with 2,4-DNP: A has a carbonyl group (aldehyde or ketone)",
            "No reaction with Tollens' reagent: A is not an aldehyde, so it is a ketone",
            "Positive iodoform test: A contains a CH₃CO– group (a methyl ketone)",
            "The only ketone with formula C₃H₆O is CH₃COCH₃",
            "Iodoform reaction: CH₃COCH₃ + 3NaOI → CHI₃ (yellow) + CH₃COONa + 2NaOH"
          ],
          answer: "A is propanone (acetone), CH₃COCH₃."
        }
      ],
      qa: [
        {
          q: "Why are aldehydes generally more reactive than ketones towards nucleophilic addition?",
          a: "(1) **Steric reason**: a ketone has two alkyl groups around the carbonyl carbon, which hinder the approach of the nucleophile more than one alkyl group and an H in an aldehyde. (2) **Electronic reason**: two alkyl groups release electrons (+I effect) and **reduce the positive charge** on the carbonyl carbon of a ketone, making it less electrophilic."
        },
        {
          q: "Give simple chemical tests to distinguish (i) ethanal and propanone (ii) ethanal and benzaldehyde.",
          a: "(i) **Tollens' test**: ethanal gives a silver mirror; propanone does not. (Both give the iodoform test, so that cannot be used.) (ii) **Fehling's test**: ethanal gives a red-brown precipitate of Cu₂O; benzaldehyde, an aromatic aldehyde, does not. The **iodoform test** also works: ethanal is positive, benzaldehyde negative."
        },
        {
          q: "Why is chloroacetic acid (ClCH₂COOH) a stronger acid than acetic acid?",
          a: "Chlorine is electronegative and has a **–I effect**: it pulls electron density away from the carboxylate group, **spreading out the negative charge** and stabilising the ClCH₂COO⁻ ion. In acetic acid the CH₃ group has a +I effect, which destabilises CH₃COO⁻. So chloroacetic acid (pKa 2.86) ionises more than acetic acid (pKa 4.76)."
        }
      ],
      quiz: [
        {
          q: "Which compound undergoes the Cannizzaro reaction?",
          options: ["CH₃CHO", "CH₃COCH₃", "C₆H₅CHO", "CH₃CH₂CHO"],
          answer: 2,
          explain: "Cannizzaro reaction needs an **aldehyde without α-hydrogen**: benzaldehyde qualifies; ethanal and propanal have α-H, and propanone is a ketone."
        },
        {
          q: "Which reagent converts an acyl chloride into an aldehyde?",
          options: ["H₂, Pd–BaSO₄", "Zn-Hg, conc. HCl", "NaBH₄ in water", "NH₂NH₂ and KOH"],
          answer: 0,
          explain: "**Rosenmund reduction**: the poisoned Pd–BaSO₄ catalyst stops the reduction at the aldehyde stage."
        },
        {
          q: "Which compound gives a positive iodoform test?",
          options: ["Methanal", "Pentan-3-one", "Benzaldehyde", "Ethanal"],
          answer: 3,
          explain: "**Ethanal (CH₃CHO)** contains the CH₃CO– group. Pentan-3-one has ethyl groups on both sides, so it does not respond."
        },
        {
          q: "The strongest acid among the following is:",
          options: ["CH₃COOH", "Cl₂CHCOOH", "ClCH₂COOH", "FCH₂COOH"],
          answer: 1,
          explain: "**Two chlorine atoms** exert a stronger combined –I effect: pKa of Cl₂CHCOOH is 1.26, compared with 2.66 for FCH₂COOH and 2.86 for ClCH₂COOH."
        },
        {
          q: "Clemmensen reduction converts a carbonyl group into:",
          options: ["–CH₂–", "–CH₂OH", "–CHOH–", "–COOH"],
          answer: 0,
          explain: "Zn-Hg and conc. HCl reduce >C=O completely to a **methylene (–CH₂–)** group."
        },
        {
          q: "Benzaldehyde does NOT respond to:",
          options: ["Tollens' test", "Fehling's test", "2,4-DNP test", "sodium bisulphite addition"],
          answer: 1,
          explain: "**Aromatic aldehydes do not reduce Fehling's solution**, although they give a silver mirror with Tollens' reagent."
        }
      ]
    },

    // ------------------------------------------------------------------
    {
      id: "amines",
      title: "Amines",
      section: "Organic Chemistry",
      summary: "Classification, naming and preparation of amines, their basic character, important reactions and tests (carbylamine, Hinsberg), electrophilic substitution in aniline, and the preparation and uses of diazonium salts.",
      notes: [
        {
          heading: "Classification and Properties",
          points: [
            "Amines are derivatives of ammonia: **primary (RNH₂), secondary (R₂NH) and tertiary (R₃N)**. Nitrogen is sp³ with a lone pair, so amines are pyramidal.",
            "Names: CH₃NH₂ **methanamine**; CH₃CH₂NHCH₃ **N-methylethanamine**; (CH₃)₃N **N,N-dimethylmethanamine**; C₆H₅NH₂ **aniline (benzenamine)**.",
            "Lower aliphatic amines are gases with a **fishy smell**. 1° and 2° amines form H-bonds, so boiling points are **1° > 2° > 3°**.",
            "Aniline is colourless when pure but **darkens on storage** because of atmospheric oxidation."
          ]
        },
        {
          heading: "Preparation",
          points: [
            "**Reduction of nitro compounds**: H₂/Pd or Sn/HCl or **Fe/HCl** (preferred, as FeCl₂ formed is hydrolysed to release HCl, so little acid is needed).",
            "**Ammonolysis** of alkyl halides gives a **mixture** of 1°, 2°, 3° amines and the quaternary salt; excess NH₃ favours the primary amine.",
            "**Reduction of nitriles** (LiAlH₄ or H₂/Ni) gives 1° amines with **one more carbon**; amides are reduced by LiAlH₄ to amines.",
            "**Gabriel phthalimide synthesis** gives **pure 1° aliphatic amines**; it cannot make aromatic amines because aryl halides do not react with the phthalimide anion.",
            "**Hoffmann bromamide degradation**: amide + Br₂ + NaOH gives a 1° amine with **one carbon less** than the amide."
          ]
        },
        {
          heading: "Basic Character",
          points: [
            "The **lone pair on nitrogen** makes amines bases; they form salts with acids: RNH₂ + HCl → RNH₃⁺Cl⁻. A smaller pKb means a stronger base.",
            "Aliphatic amines are stronger bases than NH₃ (+I effect). In water, the order depends on **+I effect, solvation by H-bonding and steric hindrance**.",
            "Aqueous basicity: **(C₂H₅)₂NH > (C₂H₅)₃N > C₂H₅NH₂ > NH₃** and **(CH₃)₂NH > CH₃NH₂ > (CH₃)₃N > NH₃**.",
            "**Aniline (pKb 9.38) is much weaker** than NH₃ (pKb 4.75): its lone pair is delocalised into the benzene ring.",
            "Electron-releasing groups (–CH₃, –OCH₃) on the ring increase basicity; electron-withdrawing groups (–NO₂) decrease it."
          ]
        },
        {
          heading: "Chemical Reactions and Tests",
          points: [
            "**Acylation**: 1° and 2° amines react with acid chlorides or anhydrides (in pyridine) to give amides; benzoyl chloride gives benzamides (benzoylation).",
            "**Carbylamine test**: only **1° amines** (aliphatic and aromatic), heated with CHCl₃ and alcoholic KOH, give **foul-smelling isocyanides**.",
            "**Nitrous acid**: 1° aliphatic amines give alcohols with quantitative evolution of **N₂**; aromatic 1° amines at 273–278 K give **diazonium salts**.",
            "**Hinsberg's reagent** (benzenesulphonyl chloride): 1° amines give a sulphonamide **soluble in alkali**; 2° amines give one **insoluble in alkali**; 3° amines do not react.",
            "Aniline + bromine water gives **2,4,6-tribromoaniline** (white precipitate). To get a mono product, first protect –NH₂ by **acetylation**.",
            "Direct nitration of aniline gives a lot of **meta product** (about 47%) because aniline is protonated to the meta-directing anilinium ion; aniline does **not** undergo Friedel–Crafts reaction (it forms a salt with AlCl₃)."
          ]
        },
        {
          heading: "Diazonium Salts",
          points: [
            "**Diazotisation**: aniline + NaNO₂ + HCl at **273–278 K** gives benzenediazonium chloride; arenediazonium salts are stabilised by resonance, but aliphatic ones are unstable.",
            "**Sandmeyer reaction**: CuCl/HCl, CuBr/HBr or CuCN/KCN replace –N₂⁺ by –Cl, –Br or –CN. **Gattermann reaction** uses copper powder with HCl or HBr.",
            "KI gives **iodobenzene**; HBF₄ then heat gives fluorobenzene; **H₃PO₂ or ethanol** replaces –N₂⁺ by H; warm water gives **phenol**.",
            "**Coupling reactions** keep the N=N group: with phenol (alkaline) the product is **p-hydroxyazobenzene (orange dye)**; with aniline (mildly acidic) it is **p-aminoazobenzene (yellow dye)**."
          ]
        }
      ],
      formulas: [
        "C₆H₅NO₂ + 6[H] → C₆H₅NH₂ + 2H₂O (Sn/HCl or Fe/HCl)",
        "R–C≡N + 4[H] → R–CH₂–NH₂ (LiAlH₄ or H₂/Ni)",
        "Gabriel: phthalimide → (KOH) potassium phthalimide → (R–X) N-alkylphthalimide → (NaOH(aq)) R–NH₂",
        "Hoffmann bromamide: RCONH₂ + Br₂ + 4NaOH → RNH₂ + Na₂CO₃ + 2NaBr + 2H₂O",
        "Carbylamine: R–NH₂ + CHCl₃ + 3KOH → R–NC + 3KCl + 3H₂O (heat)",
        "Diazotisation: C₆H₅NH₂ + NaNO₂ + 2HCl → C₆H₅N₂⁺Cl⁻ + NaCl + 2H₂O (273–278 K)",
        "Sandmeyer: C₆H₅N₂⁺Cl⁻ → C₆H₅Cl + N₂ (CuCl/HCl); → C₆H₅Br (CuBr/HBr); → C₆H₅CN (CuCN/KCN)",
        "C₆H₅N₂⁺Cl⁻ + KI → C₆H₅I + KCl + N₂",
        "C₆H₅N₂⁺Cl⁻ + H₂O → C₆H₅OH + N₂ + HCl (warm)",
        "C₆H₅N₂⁺Cl⁻ + H₃PO₂ + H₂O → C₆H₆ + N₂ + H₃PO₃ + HCl",
        "Coupling: C₆H₅N₂⁺Cl⁻ + C₆H₅OH → p-HOC₆H₄–N=N–C₆H₅ + HCl (alkaline, orange dye)",
        "Basicity in water: (C₂H₅)₂NH > (C₂H₅)₃N > C₂H₅NH₂ > NH₃ > C₆H₅NH₂"
      ],
      terms: [
        { term: "Gabriel phthalimide synthesis", meaning: "Method to make **pure primary aliphatic amines** from phthalimide, KOH and an alkyl halide, followed by hydrolysis." },
        { term: "Hoffmann bromamide degradation", meaning: "An amide with **Br₂ and NaOH** gives a primary amine with **one carbon atom less**." },
        { term: "Carbylamine reaction", meaning: "Test for **primary amines**: heating with CHCl₃ and alcoholic KOH gives foul-smelling isocyanide." },
        { term: "Hinsberg's reagent", meaning: "**Benzenesulphonyl chloride**, used to distinguish 1°, 2° and 3° amines." },
        { term: "Diazotisation", meaning: "Conversion of a **primary aromatic amine into a diazonium salt** with NaNO₂ and HCl at 273–278 K." },
        { term: "Coupling reaction", meaning: "Reaction of a diazonium salt with phenol or aniline to give a **coloured azo compound** (–N=N–)." }
      ],
      examples: [
        {
          q: "How will you convert aniline into 1,3,5-tribromobenzene?",
          steps: [
            "Treat aniline with bromine water at room temperature: the strongly activating –NH₂ group gives 2,4,6-tribromoaniline (white precipitate)",
            "Diazotise it with NaNO₂ + HCl at 273–278 K to get 2,4,6-tribromobenzenediazonium chloride",
            "Treat the diazonium salt with hypophosphorous acid (H₃PO₂), which replaces –N₂⁺Cl⁻ by –H",
            "The three Br atoms, originally at 2, 4 and 6 relative to –NH₂, are now at positions 1, 3 and 5"
          ],
          answer: "Aniline → (Br₂/H₂O) 2,4,6-tribromoaniline → (NaNO₂ + HCl, 273–278 K) diazonium salt → (H₃PO₂) 1,3,5-tribromobenzene"
        }
      ],
      qa: [
        {
          q: "Why is aniline a weaker base than ammonia and ethylamine?",
          a: "In aniline the **lone pair on nitrogen is delocalised into the benzene ring** by resonance, so it is less available to accept a proton. Also, the anilinium ion has fewer resonance structures than aniline, so protonation is less favourable. Ethylamine is stronger than ammonia because the ethyl group **releases electrons (+I)** onto nitrogen. Hence: ethylamine > ammonia > aniline."
        },
        {
          q: "How does Hinsberg's reagent distinguish between primary, secondary and tertiary amines?",
          a: "With benzenesulphonyl chloride: a **1° amine** gives an N-alkylbenzenesulphonamide that still has an acidic H on nitrogen, so it is **soluble in alkali**. A **2° amine** gives an N,N-dialkylbenzenesulphonamide with no H on nitrogen, so it is **insoluble in alkali**. A **3° amine does not react**."
        },
        {
          q: "Although –NH₂ is ortho/para directing, nitration of aniline gives a large amount of m-nitroaniline. Why?",
          a: "Nitration is done in strongly acidic medium (conc. HNO₃ + conc. H₂SO₄), where aniline is **protonated to the anilinium ion (C₆H₅NH₃⁺)**. The –NH₃⁺ group is **electron-withdrawing and meta directing**, so about 47% m-nitroaniline forms along with the para isomer. Oxidation products also form, so –NH₂ is usually protected by acetylation first."
        }
      ],
      quiz: [
        {
          q: "Which amine is the strongest base in aqueous solution?",
          options: ["(C₂H₅)₃N", "C₂H₅NH₂", "(C₂H₅)₂NH", "NH₃"],
          answer: 2,
          explain: "In water, **diethylamine (pKb 3.00)** is strongest: it balances +I effect, solvation and steric hindrance best."
        },
        {
          q: "Which of these amines gives the carbylamine test?",
          options: ["CH₃NH₂", "(CH₃)₂NH", "(CH₃)₃N", "C₆H₅NHCH₃"],
          answer: 0,
          explain: "Only **primary amines** give the isocyanide test; CH₃NH₂ is the only primary amine here."
        },
        {
          q: "Hoffmann bromamide degradation of benzamide gives:",
          options: ["benzylamine", "aniline", "benzoic acid", "benzonitrile"],
          answer: 1,
          explain: "The amine formed has **one carbon less** than the amide: C₆H₅CONH₂ → **C₆H₅NH₂ (aniline)**."
        },
        {
          q: "Which reagent converts benzenediazonium chloride into benzene?",
          options: ["H₃PO₂", "CuCN/KCN", "KI", "warm water"],
          answer: 0,
          explain: "**Hypophosphorous acid** replaces –N₂⁺ by H. CuCN gives benzonitrile, KI gives iodobenzene and warm water gives phenol."
        },
        {
          q: "Gabriel phthalimide synthesis is used to prepare:",
          options: ["secondary amines", "primary aromatic amines", "tertiary amines", "primary aliphatic amines"],
          answer: 3,
          explain: "It gives **pure primary aliphatic amines**. Aryl halides do not undergo substitution with the phthalimide anion, so aromatic amines cannot be made this way."
        },
        {
          q: "A secondary amine reacts with Hinsberg's reagent to give a product that is:",
          options: ["soluble in aqueous KOH", "insoluble in aqueous KOH", "an isocyanide with a foul smell", "an alcohol with evolution of N₂"],
          answer: 1,
          explain: "The sulphonamide from a 2° amine has **no H on nitrogen**, so it is not acidic and does not dissolve in alkali."
        }
      ]
    },

    // ------------------------------------------------------------------
    {
      id: "biomolecules",
      title: "Biomolecules",
      section: "Organic Chemistry",
      summary: "The chemistry of life's molecules: classification and structure of carbohydrates (glucose, fructose, disaccharides, polysaccharides), amino acids and proteins, enzymes, vitamins and nucleic acids.",
      notes: [
        {
          heading: "Carbohydrates: Classification",
          points: [
            "Carbohydrates are **optically active polyhydroxy aldehydes or ketones**, or compounds that give these on hydrolysis.",
            "**Monosaccharides** cannot be hydrolysed further (glucose, fructose); **oligosaccharides** give 2–10 monosaccharide units (sucrose, maltose, lactose); **polysaccharides** give many units (starch, cellulose, glycogen).",
            "**Reducing sugars** reduce Fehling's and Tollens' reagents: all monosaccharides, maltose and lactose. **Sucrose is non-reducing**.",
            "Glucose is an **aldohexose**; fructose is a **ketohexose**."
          ]
        },
        {
          heading: "Glucose and Fructose",
          points: [
            "Glucose is made by boiling sucrose with dilute acid (gives glucose + fructose) or, commercially, by hydrolysing **starch** with dilute H₂SO₄ at 393 K and 2–3 bar.",
            "Open-chain evidence: with **HI** it gives n-hexane (6 carbons in a straight chain); with NH₂OH it gives an oxime (carbonyl group); **bromine water** gives gluconic acid (aldehyde group); acetylation gives a **pentaacetate** (five –OH groups); HNO₃ gives saccharic acid (a 1° alcohol group).",
            "Glucose does **not** give Schiff's test or form a hydrogensulphite adduct, and its pentaacetate does not react with NH₂OH, so it mainly exists in a **cyclic** form: the C5–OH adds to the –CHO group to form a six-membered (pyranose) ring.",
            "The two cyclic forms, **α- and β-D-glucose**, differ only in the configuration at C1, the **anomeric carbon**; they are called **anomers**.",
            "D and L describe configuration (relative to glyceraldehyde), not the sign of rotation: glucose is **D-(+)** and fructose **D-(−)**. Fructose forms a five-membered (furanose) ring."
          ]
        },
        {
          heading: "Disaccharides and Polysaccharides",
          points: [
            "Monosaccharide units are joined by a **glycosidic linkage** (through an oxygen atom).",
            "**Sucrose** = α-D-glucose (C1) + β-D-fructose (C2); both reducing groups are used up, so it is **non-reducing**.",
            "Sucrose is dextrorotatory, but hydrolysis gives a **laevorotatory** mixture (fructose −92.4° outweighs glucose +52.5°), called **invert sugar**.",
            "**Maltose** = two α-D-glucose units (C1–C4), reducing. **Lactose** (milk sugar) = β-D-galactose + β-D-glucose (C1–C4), reducing.",
            "**Starch** = amylose (15–20%, water-soluble, unbranched, C1–C4 α-links) + amylopectin (80–85%, insoluble, branched, C1–C4 and **C1–C6** links). **Glycogen** (animal starch) is highly branched.",
            "**Cellulose** is an unbranched chain of **β-D-glucose** units (C1–C4 β-links); humans cannot digest it."
          ]
        },
        {
          heading: "Amino Acids and Proteins",
          points: [
            "Proteins are polymers of **α-amino acids** joined by **peptide bonds (–CO–NH–)**, formed with loss of water.",
            "**Essential amino acids** (e.g. valine, leucine, lysine) cannot be made by the body and must come from food. **Glycine** is the only common α-amino acid that is not optically active.",
            "In solution amino acids exist as **zwitterions** (H₃N⁺–CHR–COO⁻), so they are amphoteric, water-soluble and have high melting points.",
            "**Fibrous** proteins (keratin, myosin) are insoluble; **globular** proteins (insulin, albumins) are water-soluble.",
            "Structure: **primary** (sequence of amino acids), **secondary** (α-helix and β-pleated sheet, held by H-bonds), **tertiary** (overall folding) and **quaternary** (arrangement of subunits).",
            "**Denaturation**: heat or change in pH destroys the secondary and tertiary structures (primary stays), and biological activity is lost, e.g. **boiling an egg, curdling of milk**."
          ]
        },
        {
          heading: "Enzymes and Vitamins",
          points: [
            "**Enzymes** are biocatalysts, mostly globular proteins, that are **highly specific**: maltase converts maltose into glucose; invertase converts sucrose into glucose and fructose. They lower the activation energy.",
            "**Fat-soluble vitamins** (A, D, E, K) are stored in the liver and adipose tissue; **water-soluble vitamins** (B group, C) must be taken regularly because they are excreted in urine (B₁₂ is an exception and can be stored).",
            "Deficiency diseases: **A** xerophthalmia and night blindness; **B₁** beriberi; **B₂** cheilosis; **B₆** convulsions; **B₁₂** pernicious anaemia.",
            "**C** scurvy (bleeding gums); **D** rickets in children and osteomalacia in adults; **E** fragile red blood cells and muscular weakness; **K** increased blood-clotting time."
          ]
        },
        {
          heading: "Nucleic Acids",
          points: [
            "**DNA and RNA** are polymers of **nucleotides**. Nucleoside = sugar + base; **nucleotide = sugar + base + phosphate**.",
            "Sugar: **β-D-2-deoxyribose in DNA** and **β-D-ribose in RNA**.",
            "Bases: DNA has **A, G, C and T**; RNA has **A, G, C and U** (uracil instead of thymine).",
            "Nucleotides are joined by **phosphodiester linkages** between the 5′ and 3′ carbons of the sugars.",
            "DNA is a **double helix** (Watson and Crick): A pairs with T (2 H-bonds) and G pairs with C (3 H-bonds). RNA is usually single-stranded; its three types are mRNA, rRNA and tRNA.",
            "DNA carries **hereditary information** and replicates itself; RNA carries out **protein synthesis**."
          ]
        }
      ],
      formulas: [
        "C₁₂H₂₂O₁₁ (sucrose) + H₂O → C₆H₁₂O₆ (glucose) + C₆H₁₂O₆ (fructose) (H⁺)",
        "(C₆H₁₀O₅)ₙ (starch) + nH₂O → nC₆H₁₂O₆ (H⁺, 393 K, 2–3 bar)",
        "Glucose + HI (heat) → n-hexane; glucose + Br₂ water → gluconic acid; glucose + HNO₃ → saccharic acid",
        "Open-chain glucose: CHO–(CHOH)₄–CH₂OH",
        "Sucrose = α-D-glucose (C1) + β-D-fructose (C2), non-reducing",
        "Maltose = α-D-glucose (C1–C4) α-D-glucose, reducing",
        "Lactose = β-D-galactose (C1–C4) β-D-glucose, reducing",
        "Peptide bond: –CO–NH–",
        "Nucleoside = sugar + base; nucleotide = sugar + base + phosphate",
        "DNA base pairs: A–T (2 H-bonds), G–C (3 H-bonds)"
      ],
      terms: [
        { term: "Anomers", meaning: "Cyclic sugars that **differ only in configuration at the anomeric carbon** (C1 in glucose), e.g. α- and β-D-glucose." },
        { term: "Glycosidic linkage", meaning: "The **oxide (–O–) link** joining two monosaccharide units." },
        { term: "Invert sugar", meaning: "The **laevorotatory** equimolar mixture of glucose and fructose formed by hydrolysis of dextrorotatory sucrose." },
        { term: "Peptide bond", meaning: "The **–CO–NH– amide link** formed between the –COOH of one amino acid and the –NH₂ of another." },
        { term: "Denaturation", meaning: "Loss of the **secondary and tertiary structure** and biological activity of a protein due to heat or pH change." },
        { term: "Zwitterion", meaning: "A **dipolar ion** (H₃N⁺–CHR–COO⁻) carrying both positive and negative charges; the usual form of amino acids." }
      ],
      examples: [
        {
          q: "What do the following reactions of glucose tell us about its structure: (i) HI (ii) NH₂OH (iii) bromine water (iv) acetic anhydride?",
          steps: [
            "Prolonged heating with HI gives n-hexane: the six carbon atoms are in a straight chain",
            "Reaction with hydroxylamine gives an oxime: a carbonyl (>C=O) group is present",
            "Mild oxidation by bromine water gives gluconic acid (same number of carbons): the carbonyl group is an aldehyde (–CHO)",
            "Acetylation gives a pentaacetate: five –OH groups are present, each on a different carbon (glucose is stable)"
          ],
          answer: "Glucose is a straight-chain aldohexose with five –OH groups: CHO–(CHOH)₄–CH₂OH."
        }
      ],
      qa: [
        {
          q: "What is invert sugar? Why is it so called?",
          a: "Sucrose is **dextrorotatory**. On hydrolysis it gives equal amounts of D-(+)-glucose (+52.5°) and D-(−)-fructose (−92.4°). Since fructose rotates the plane more strongly, the mixture is **laevorotatory**. The sign of rotation changes (is **inverted**) from dextro to laevo, so the product is called **invert sugar**."
        },
        {
          q: "What is denaturation of a protein? Give two examples.",
          a: "When a native protein is exposed to a change in **temperature or pH**, its hydrogen bonds are disturbed, the globules unfold and helices uncoil. The **secondary and tertiary structures are destroyed** (the primary structure remains) and the protein **loses its biological activity**. Examples: **coagulation of egg white on boiling** and **curdling of milk** by lactic acid."
        },
        {
          q: "Give three differences between DNA and RNA.",
          a: "(1) **Sugar**: DNA has 2-deoxyribose; RNA has ribose. (2) **Bases**: DNA has thymine (with A, G, C); RNA has **uracil** instead of thymine. (3) **Structure**: DNA is a **double helix**; RNA is usually **single-stranded**. Also, DNA is responsible for heredity, while RNA is mainly involved in protein synthesis."
        }
      ],
      quiz: [
        {
          q: "Which of these is a non-reducing sugar?",
          options: ["Glucose", "Maltose", "Sucrose", "Lactose"],
          answer: 2,
          explain: "In **sucrose** the reducing groups of both glucose (C1) and fructose (C2) are tied up in the glycosidic bond."
        },
        {
          q: "α-D-glucose and β-D-glucose are:",
          options: ["enantiomers", "anomers", "functional isomers", "geometrical isomers"],
          answer: 1,
          explain: "They differ only in the configuration of the –OH at **C1, the anomeric carbon**, so they are anomers."
        },
        {
          q: "Deficiency of vitamin B₁ (thiamine) causes:",
          options: ["beriberi", "scurvy", "rickets", "pernicious anaemia"],
          answer: 0,
          explain: "**Beriberi** is due to lack of B₁. Scurvy is due to lack of C, rickets to lack of D, pernicious anaemia to lack of B₁₂."
        },
        {
          q: "Which base is present in RNA but not in DNA?",
          options: ["Adenine", "Thymine", "Guanine", "Uracil"],
          answer: 3,
          explain: "RNA contains **uracil** in place of thymine; adenine, guanine and cytosine are common to both."
        },
        {
          q: "The only common α-amino acid that is optically inactive is:",
          options: ["alanine", "valine", "glycine", "lysine"],
          answer: 2,
          explain: "In **glycine** (H₂N–CH₂–COOH) the α-carbon carries two H atoms, so it is not chiral."
        },
        {
          q: "Cellulose is a linear polymer of:",
          options: ["α-D-glucose", "β-D-glucose", "β-D-fructose", "α-D-galactose"],
          answer: 1,
          explain: "Cellulose consists of **β-D-glucose** units joined by C1–C4 β-glycosidic links; starch is made of α-D-glucose."
        }
      ]
    }
  ]
});
