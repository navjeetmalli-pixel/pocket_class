StudyData.add(11, "chemistry", {
  // What this content follows. match: "textbook" | "older-book" | "topic". Set reviewed to a date once a teacher has checked it.
  syllabus: {board: "CBSE", match: "textbook", books: ["Chemistry Part I","Chemistry Part II"], reviewed: false},
  chapters: [
    // ------------------------------------------------------------------
    {
      id: "some-basic-concepts-of-chemistry",
      title: "Some Basic Concepts of Chemistry",
      section: "Physical Chemistry",
      summary: "The language of chemical calculations: measurement and significant figures, laws of chemical combination, atomic and molecular masses, the mole concept, empirical and molecular formulae, stoichiometry, limiting reagent and concentration terms.",
      notes: [
        {
          heading: "Matter, Measurement and Significant Figures",
          points: [
            "Matter is classified as **pure substances** (elements and compounds) and **mixtures** (homogeneous and heterogeneous).",
            "The SI system has **seven base units**: metre (m), kilogram (kg), second (s), kelvin (K), ampere (A), mole (mol) and candela (cd).",
            "Significant figures: all non-zero digits count; zeros between non-zero digits count; **leading zeros do not** (0.0032 has 2); trailing zeros count only when there is a decimal point (2.00 has 3).",
            "In addition/subtraction, keep the **fewest decimal places**; in multiplication/division, keep the **fewest significant figures** of the data.",
            "**Precision** is how close repeated measurements are to each other; **accuracy** is how close they are to the true value."
          ]
        },
        {
          heading: "Laws of Chemical Combination",
          points: [
            "**Law of conservation of mass** (Lavoisier): matter can neither be created nor destroyed in a chemical reaction.",
            "**Law of definite proportions** (Proust): a given compound always contains the same elements in the same proportion by mass.",
            "**Law of multiple proportions** (Dalton): when two elements form more than one compound, the masses of one element that combine with a fixed mass of the other are in a **simple whole-number ratio**.",
            "**Gay Lussac's law**: gases combine in simple whole-number ratios by volume at the same temperature and pressure, e.g. 100 mL H₂ + 50 mL O₂ → 100 mL water vapour.",
            "**Avogadro's law**: equal volumes of all gases at the same temperature and pressure contain **equal numbers of molecules**.",
            "**Dalton's atomic theory**: matter is made of atoms; atoms of an element are identical; compounds form when atoms combine in a fixed ratio; reactions only rearrange atoms."
          ]
        },
        {
          heading: "Atomic Mass, Molecular Mass and the Mole",
          points: [
            "1 atomic mass unit (u) = **1/12 of the mass of one carbon-12 atom** = 1.66056 × 10⁻²⁴ g.",
            "**Average atomic mass** takes isotope abundance into account, e.g. chlorine (³⁵Cl and ³⁷Cl) has an average atomic mass of about 35.5 u.",
            "Molecular mass is the sum of atomic masses (H₂O = 18 u); for ionic solids we use **formula mass** (NaCl = 58.5 u).",
            "One **mole** contains exactly **6.02214076 × 10²³** elementary entities (the Avogadro constant, N_A).",
            "**Molar mass** in g mol⁻¹ is numerically equal to the atomic or molecular mass in u: 1 mol H₂O = 18 g.",
            "One mole of an ideal gas occupies **22.7 L at STP** (273.15 K, 1 bar); the older value 22.4 L applies at 273 K and 1 atm."
          ]
        },
        {
          heading: "Percentage Composition and Formulae",
          points: [
            "Mass % of an element = (mass of that element in 1 mol of compound ÷ molar mass of compound) × 100.",
            "**Empirical formula**: simplest whole-number ratio of atoms. **Molecular formula**: the actual number of each atom in a molecule.",
            "Steps: take 100 g of compound, convert each % into moles, divide by the smallest number of moles, then round to whole numbers.",
            "Molecular formula = n × empirical formula, where **n = molar mass ÷ empirical formula mass**. Glucose C₆H₁₂O₆ has empirical formula CH₂O (n = 6)."
          ]
        },
        {
          heading: "Stoichiometry and Limiting Reagent",
          points: [
            "A balanced equation gives the **mole ratio** of reactants and products: CH₄ + 2O₂ → CO₂ + 2H₂O means 1 mol CH₄ needs 2 mol O₂.",
            "The **limiting reagent** is used up first and decides how much product forms; the other reactant is in **excess**.",
            "To find it, divide the moles of each reactant by its coefficient in the balanced equation; the **smallest value** is the limiting reagent.",
            "All product calculations must be based on the limiting reagent, never on the excess reagent."
          ]
        },
        {
          heading: "Concentration Terms",
          points: [
            "**Mass per cent** = (mass of solute ÷ mass of solution) × 100.",
            "**Mole fraction** x_A = n_A ÷ (n_A + n_B); the mole fractions of all components add up to 1.",
            "**Molarity (M)** = moles of solute per litre of solution. It changes with temperature because volume changes.",
            "**Molality (m)** = moles of solute per kg of solvent. It is **independent of temperature** because mass does not change.",
            "On dilution the moles of solute stay the same: **M₁V₁ = M₂V₂**."
          ]
        }
      ],
      formulas: [
        "Number of moles n = mass ÷ molar mass = number of particles ÷ N_A",
        "N_A = 6.022 × 10²³ mol⁻¹",
        "1 u = 1.66056 × 10⁻²⁴ g",
        "Molar volume of an ideal gas = 22.7 L mol⁻¹ at STP (273.15 K, 1 bar)",
        "Mass % of element = (mass of element in 1 mol of compound ÷ molar mass) × 100",
        "Molecular formula = n × empirical formula; n = molar mass ÷ empirical formula mass",
        "Molarity M = moles of solute ÷ volume of solution in L",
        "Molality m = moles of solute ÷ mass of solvent in kg",
        "Mole fraction x_A = n_A ÷ (n_A + n_B); x_A + x_B = 1",
        "Dilution: M₁V₁ = M₂V₂",
        "CH₄ + 2O₂ → CO₂ + 2H₂O",
        "2H₂ + O₂ → 2H₂O"
      ],
      terms: [
        { term: "Mole", meaning: "The amount of substance that contains **6.022 × 10²³** elementary entities (atoms, molecules, ions)." },
        { term: "Molar mass", meaning: "Mass of **one mole** of a substance in grams; numerically equal to its atomic or molecular mass in u." },
        { term: "Empirical formula", meaning: "Formula showing the **simplest whole-number ratio** of atoms in a compound, e.g. CH₂O for glucose." },
        { term: "Limiting reagent", meaning: "The reactant that is **completely used up first** and so limits the amount of product formed." },
        { term: "Molality", meaning: "**Moles of solute per kilogram of solvent**; it does not change with temperature." },
        { term: "Law of multiple proportions", meaning: "Masses of one element combining with a fixed mass of another are in a **simple whole-number ratio**, e.g. O in H₂O and H₂O₂ is 1 : 2." }
      ],
      examples: [
        {
          q: "A compound contains 4.07% hydrogen, 24.27% carbon and 71.65% chlorine. Its molar mass is 98.96 g mol⁻¹. Find its empirical and molecular formulae. (H = 1.008, C = 12.01, Cl = 35.453)",
          steps: [
            "Take 100 g: H = 4.07 g, C = 24.27 g, Cl = 71.65 g",
            "Moles: H = 4.07 ÷ 1.008 = 4.04; C = 24.27 ÷ 12.01 = 2.021; Cl = 71.65 ÷ 35.453 = 2.021",
            "Divide by the smallest (2.021): H = 2, C = 1, Cl = 1, so empirical formula = CH₂Cl",
            "Empirical formula mass = 12.01 + 2.016 + 35.453 = 49.48 g",
            "n = 98.96 ÷ 49.48 = 2, so molecular formula = (CH₂Cl)₂"
          ],
          answer: "Empirical formula CH₂Cl; molecular formula C₂H₄Cl₂"
        },
        {
          q: "3.0 g of H₂ reacts with 29.0 g of O₂ to form water. Find the limiting reagent, the mass of water formed and the mass of the reactant left over. (H = 1, O = 16)",
          steps: [
            "Equation: 2H₂ + O₂ → 2H₂O",
            "Moles of H₂ = 3.0 ÷ 2 = 1.5 mol; moles of O₂ = 29.0 ÷ 32 = 0.906 mol",
            "1.5 mol H₂ needs 1.5 ÷ 2 = 0.75 mol O₂, which is less than 0.906 mol available, so H₂ is the limiting reagent",
            "Water formed = 1.5 mol (same as H₂) = 1.5 × 18 = 27.0 g",
            "O₂ left = 0.906 − 0.75 = 0.156 mol = 0.156 × 32 ≈ 5.0 g",
            "Check: 3.0 + 29.0 = 32.0 g of reactants = 27.0 + 5.0 g, so mass is conserved"
          ],
          answer: "H₂ is the limiting reagent; 27.0 g of water forms and about 5.0 g of O₂ is left over."
        }
      ],
      qa: [
        {
          q: "What is the difference between molarity and molality? Which one is preferred for accurate work and why?",
          a: "**Molarity** is moles of solute per litre of **solution**; **molality** is moles of solute per kilogram of **solvent**. Molality is preferred because it depends only on masses, which do not change with temperature, whereas the volume of a solution (and hence molarity) changes with temperature."
        },
        {
          q: "State the law of multiple proportions with an example.",
          a: "When two elements combine to form two or more compounds, the masses of one element that combine with a **fixed mass** of the other are in a **simple whole-number ratio**. Example: 2 g of hydrogen combines with 16 g of oxygen in water (H₂O) and with 32 g of oxygen in hydrogen peroxide (H₂O₂). The masses of oxygen, 16 : 32, are in the ratio **1 : 2**."
        },
        {
          q: "How many significant figures are present in (i) 0.0025 (ii) 208 (iii) 5005 (iv) 2.0034 (v) 500.0?",
          a: "(i) **2** (leading zeros are not significant) (ii) **3** (iii) **4** (zeros between non-zero digits count) (iv) **5** (v) **4** (trailing zeros after a decimal point are significant)."
        }
      ],
      quiz: [
        {
          q: "The number of significant figures in 0.00340 is:",
          options: ["2", "3", "5", "6"],
          answer: 1,
          explain: "Leading zeros are not significant, but the **trailing zero after the decimal point is**: 3, 4 and 0 give **3** significant figures."
        },
        {
          q: "How many moles of oxygen atoms are present in 0.5 mol of CaCO₃?",
          options: ["0.5", "1.0", "1.5", "3.0"],
          answer: 2,
          explain: "Each CaCO₃ unit has **3 O atoms**, so 0.5 × 3 = **1.5 mol** of O atoms."
        },
        {
          q: "Which concentration term does NOT change with temperature?",
          options: ["Molarity", "Normality", "Mass by volume percentage", "Molality"],
          answer: 3,
          explain: "**Molality** uses the mass of solvent, which is independent of temperature. The others involve volume, which changes with temperature."
        },
        {
          q: "The empirical formula of glucose (C₆H₁₂O₆) is:",
          options: ["CH₂O", "CHO", "C₆H₁₂O₆", "C₃H₆O₃"],
          answer: 0,
          explain: "Dividing C₆H₁₂O₆ by 6 gives the simplest ratio **CH₂O**."
        },
        {
          q: "2 mol of H₂ is mixed with 2 mol of O₂ and the mixture reacts completely (2H₂ + O₂ → 2H₂O). The limiting reagent and the moles of water formed are:",
          options: ["O₂; 2 mol", "H₂; 4 mol", "O₂; 4 mol", "H₂; 2 mol"],
          answer: 3,
          explain: "2 mol H₂ needs only 1 mol O₂, so **H₂ is limiting** and O₂ is in excess. 2 mol H₂ gives **2 mol H₂O**."
        },
        {
          q: "What is the molarity of a solution containing 4 g of NaOH in 250 mL of solution? (NaOH = 40 g mol⁻¹)",
          options: ["0.1 M", "0.4 M", "0.016 M", "1.6 M"],
          answer: 1,
          explain: "Moles = 4 ÷ 40 = 0.1 mol; volume = 0.250 L; M = 0.1 ÷ 0.250 = **0.4 M**."
        }
      ]
    },

    // ------------------------------------------------------------------
    {
      id: "structure-of-atom",
      title: "Structure of Atom",
      section: "Physical Chemistry",
      summary: "From the discovery of electrons, protons and neutrons to the quantum mechanical model: atomic models, quantisation of energy, Bohr's model of hydrogen, dual nature of matter, the uncertainty principle, quantum numbers, orbitals and electronic configuration.",
      notes: [
        {
          heading: "Subatomic Particles and Early Models",
          points: [
            "J.J. Thomson's cathode-ray experiments found the **electron** (e/m = 1.758820 × 10¹¹ C kg⁻¹); Millikan's oil-drop experiment gave its charge, **−1.602 × 10⁻¹⁹ C**, and mass 9.109 × 10⁻³¹ kg.",
            "Protons were identified from canal (anode) rays; the **neutron** was discovered by **Chadwick (1932)** by bombarding beryllium with α-particles.",
            "Rutherford's gold-foil experiment: most α-particles passed straight through (atom is mostly empty), a few were deflected and very few bounced back, so the positive charge and mass are in a **tiny, dense nucleus**.",
            "Rutherford's model could not explain the **stability of the atom** (a revolving electron should radiate energy and spiral into the nucleus) or the line spectra.",
            "**Isotopes** have the same atomic number but different mass numbers (¹H, ²H, ³H); **isobars** have the same mass number but different atomic numbers (¹⁴C, ¹⁴N)."
          ]
        },
        {
          heading: "Quantum Theory and Spectra",
          points: [
            "Electromagnetic waves obey **c = νλ**; wavenumber ν̄ = 1/λ.",
            "**Planck's quantum theory**: energy is emitted or absorbed in discrete packets (quanta), **E = hν**, with h = 6.626 × 10⁻³⁴ J s.",
            "**Photoelectric effect**: electrons are ejected only if ν ≥ threshold frequency ν₀; their kinetic energy depends on frequency, while their number depends on intensity: hν = hν₀ + ½mₑv².",
            "The hydrogen spectrum is a **line spectrum**: Lyman series (n₁ = 1, UV), **Balmer (n₁ = 2, visible)**, Paschen (3), Brackett (4) and Pfund (5) in the infrared."
          ]
        },
        {
          heading: "Bohr's Model of the Hydrogen Atom",
          points: [
            "Electrons move in fixed circular orbits (**stationary states**) without radiating energy.",
            "Energy is absorbed or emitted only when an electron jumps between orbits: **ΔE = hν**.",
            "Angular momentum is quantised: **mvr = nh/2π**.",
            "Energy of the nth orbit: **Eₙ = −2.18 × 10⁻¹⁸ (Z²/n²) J**; radius rₙ = 52.9 (n²/Z) pm. The negative sign means the electron is bound.",
            "Limitations: fails for multi-electron atoms, cannot explain splitting of lines in magnetic (**Zeeman**) or electric (**Stark**) fields, and contradicts the dual nature of matter and the uncertainty principle."
          ]
        },
        {
          heading: "Dual Nature and Uncertainty Principle",
          points: [
            "**de Broglie**: every moving particle has a wavelength **λ = h/mv = h/p**; it is noticeable only for tiny particles like electrons.",
            "**Heisenberg's uncertainty principle**: the exact position and momentum of an electron cannot be known simultaneously: **Δx × Δp ≥ h/4π**.",
            "So fixed orbits are meaningless for electrons; we can only speak of the **probability** of finding an electron.",
            "In the **Schrödinger equation** (Ĥψ = Eψ), ψ is the wave function and **ψ²** gives the probability density of the electron."
          ]
        },
        {
          heading: "Quantum Numbers and Orbitals",
          points: [
            "**Principal (n = 1, 2, 3 …)**: shell, size and energy of the orbital. A shell holds at most **2n²** electrons.",
            "**Azimuthal (l = 0 to n − 1)**: subshell and shape; l = 0, 1, 2, 3 for s, p, d, f.",
            "**Magnetic (mₗ = −l to +l)**: orientation; a subshell has **2l + 1** orbitals.",
            "**Spin (mₛ = +½ or −½)**: the two spin orientations of an electron.",
            "Nodes: **radial nodes = n − l − 1**, angular nodes = l, total nodes = n − 1. s orbitals are spherical, p orbitals dumbbell-shaped."
          ]
        },
        {
          heading: "Filling of Orbitals",
          points: [
            "**Aufbau principle**: orbitals fill in increasing order of energy, decided by the **(n + l) rule**; if (n + l) is equal, the lower n fills first.",
            "Order: 1s, 2s, 2p, 3s, 3p, **4s, 3d**, 4p, 5s, 4d, 5p, 6s, 4f, 5d, 6p …",
            "**Pauli exclusion principle**: no two electrons in an atom have the same set of four quantum numbers, so an orbital holds at most 2 electrons with opposite spins.",
            "**Hund's rule**: electrons in degenerate orbitals pair up only after each orbital has one electron (maximum multiplicity).",
            "Exceptions: **Cr = [Ar] 3d⁵ 4s¹** and **Cu = [Ar] 3d¹⁰ 4s¹**, because half-filled and completely filled subshells are extra stable (symmetry and exchange energy)."
          ]
        }
      ],
      formulas: [
        "c = νλ; ν̄ = 1/λ; c = 3.0 × 10⁸ m s⁻¹",
        "E = hν = hc/λ; h = 6.626 × 10⁻³⁴ J s",
        "Photoelectric effect: hν = hν₀ + ½mₑv²",
        "Bohr: mvr = nh/2π",
        "Eₙ = −2.18 × 10⁻¹⁸ (Z²/n²) J per atom",
        "rₙ = 52.9 (n²/Z) pm",
        "ΔE (hydrogen) = 2.18 × 10⁻¹⁸ (1/nᵢ² − 1/n_f²) J",
        "Rydberg: ν̄ = 109677 (1/n₁² − 1/n₂²) cm⁻¹, n₂ > n₁",
        "de Broglie: λ = h/mv = h/p",
        "Heisenberg: Δx × Δp ≥ h/4π",
        "Radial nodes = n − l − 1; angular nodes = l; total nodes = n − 1",
        "Orbitals in a subshell = 2l + 1; maximum electrons in a shell = 2n²"
      ],
      terms: [
        { term: "Orbital", meaning: "A region around the nucleus where the **probability of finding an electron is high**; described by a wave function ψ." },
        { term: "Quantum", meaning: "The **smallest packet of energy** that can be emitted or absorbed, E = hν." },
        { term: "Threshold frequency (ν₀)", meaning: "The **minimum frequency** of light needed to eject electrons from a metal surface." },
        { term: "Isotopes", meaning: "Atoms of the same element with the **same atomic number but different mass numbers**, e.g. protium, deuterium, tritium." },
        { term: "Degenerate orbitals", meaning: "Orbitals that have the **same energy**, e.g. the three 2p orbitals of an atom." },
        { term: "Node", meaning: "A region where the **probability density of the electron is zero**." }
      ],
      examples: [
        {
          q: "Calculate the energy of one mole of photons of radiation whose frequency is 5 × 10¹⁴ Hz.",
          steps: [
            "Energy of one photon E = hν = 6.626 × 10⁻³⁴ J s × 5 × 10¹⁴ s⁻¹ = 3.313 × 10⁻¹⁹ J",
            "Energy of one mole = 3.313 × 10⁻¹⁹ J × 6.022 × 10²³ mol⁻¹",
            "= 1.995 × 10⁵ J mol⁻¹"
          ],
          answer: "About 199.5 kJ mol⁻¹"
        },
        {
          q: "What is the wavelength of light emitted when the electron in a hydrogen atom falls from n = 4 to n = 2?",
          steps: [
            "Energy released |ΔE| = 2.18 × 10⁻¹⁸ (1/2² − 1/4²) J = 2.18 × 10⁻¹⁸ × (0.25 − 0.0625) J",
            "|ΔE| = 2.18 × 10⁻¹⁸ × 0.1875 = 4.09 × 10⁻¹⁹ J",
            "λ = hc/ΔE = (6.626 × 10⁻³⁴ × 3.0 × 10⁸) ÷ (4.09 × 10⁻¹⁹)",
            "λ = 4.86 × 10⁻⁷ m = 486 nm"
          ],
          answer: "λ ≈ 486 nm (a blue-green line of the Balmer series)"
        }
      ],
      qa: [
        {
          q: "State Heisenberg's uncertainty principle. Why is it not significant for everyday objects?",
          a: "It is impossible to determine **simultaneously the exact position and exact momentum** of a microscopic particle like an electron: Δx × Δp ≥ h/4π. Since h is extremely small, the uncertainty is **negligible for large masses** such as a ball, but it is very large for an electron because of its tiny mass."
        },
        {
          q: "Why are half-filled and completely filled subshells extra stable? Give two examples.",
          a: "Such subshells have a **symmetrical distribution** of electrons and **maximum exchange energy** (electrons of the same spin in degenerate orbitals can exchange positions). Hence chromium is [Ar] **3d⁵ 4s¹** and copper is [Ar] **3d¹⁰ 4s¹** instead of 3d⁴ 4s² and 3d⁹ 4s²."
        },
        {
          q: "Give any three limitations of Bohr's model of the atom.",
          a: "(1) It cannot explain the spectra of **multi-electron atoms**. (2) It cannot explain the splitting of spectral lines in a magnetic field (**Zeeman effect**) or electric field (**Stark effect**). (3) It assumes fixed orbits with exact position and momentum, which goes against **de Broglie's dual nature** and **Heisenberg's uncertainty principle**."
        }
      ],
      quiz: [
        {
          q: "The number of radial nodes in a 3p orbital is:",
          options: ["0", "1", "2", "3"],
          answer: 1,
          explain: "Radial nodes = n − l − 1 = 3 − 1 − 1 = **1**. (It also has l = 1 angular node, so 2 nodes in total.)"
        },
        {
          q: "Which combination of quantum numbers is NOT allowed?",
          options: ["n = 3, l = 2, mₗ = −2", "n = 2, l = 1, mₗ = 0", "n = 2, l = 2, mₗ = +1", "n = 4, l = 0, mₗ = 0"],
          answer: 2,
          explain: "l can only go from 0 to n − 1. For n = 2, l can be 0 or 1, so **l = 2 is not allowed**."
        },
        {
          q: "The ground-state electronic configuration of copper (Z = 29) is:",
          options: ["[Ar] 3d¹⁰ 4s¹", "[Ar] 3d⁹ 4s²", "[Ar] 3d¹⁰ 4p¹", "[Ar] 3d⁸ 4s² 4p¹"],
          answer: 0,
          explain: "A **completely filled 3d¹⁰** subshell is extra stable, so one 4s electron moves to 3d: **[Ar] 3d¹⁰ 4s¹**."
        },
        {
          q: "Which series of the hydrogen spectrum lies in the visible region?",
          options: ["Lyman", "Paschen", "Brackett", "Balmer"],
          answer: 3,
          explain: "The **Balmer series** (transitions ending at n = 2) lies in the visible region. Lyman is UV; Paschen and Brackett are infrared."
        },
        {
          q: "Which of these orbitals is filled first in a many-electron atom?",
          options: ["3d", "4s", "4p", "5s"],
          answer: 1,
          explain: "By the (n + l) rule: 4s = 4 + 0 = **4**, while 3d, 4p and 5s all have n + l = 5. So **4s** fills first."
        },
        {
          q: "If the kinetic energy of an electron is made four times, its de Broglie wavelength becomes:",
          options: ["four times", "double", "half", "one-fourth"],
          answer: 2,
          explain: "λ = h/√(2mK). Making K four times multiplies √K by 2, so λ becomes **half**."
        }
      ]
    },

    // ------------------------------------------------------------------
    {
      id: "classification-of-elements-and-periodicity",
      title: "Classification of Elements and Periodicity in Properties",
      section: "Inorganic Chemistry",
      summary: "How elements came to be arranged in the periodic table, the modern periodic law, IUPAC names of new elements, the s, p, d and f blocks, and periodic trends in atomic radius, ionisation enthalpy, electron gain enthalpy, electronegativity and chemical reactivity.",
      notes: [
        {
          heading: "Early Classification and Mendeleev",
          points: [
            "**Döbereiner's triads** (e.g. Li, Na, K: the middle atomic mass is about the average of the other two) and **Newlands' law of octaves** (every eighth element is similar; worked only up to calcium).",
            "**Mendeleev's periodic law**: the properties of elements are a periodic function of their **atomic weights**.",
            "Mendeleev left **gaps** for undiscovered elements and predicted their properties, e.g. eka-aluminium (gallium) and eka-silicon (germanium).",
            "**Modern periodic law** (based on Moseley's work): the properties of elements are a periodic function of their **atomic numbers**."
          ]
        },
        {
          heading: "Modern Periodic Table and IUPAC Names",
          points: [
            "The long form has **18 groups and 7 periods**. The period number equals the principal quantum number of the outermost shell.",
            "Elements per period: **2, 8, 8, 18, 18, 32, 32**.",
            "Blocks: **s** (groups 1–2, ns¹⁻²), **p** (groups 13–18, ns² np¹⁻⁶), **d** (groups 3–12, (n−1)d¹⁻¹⁰ ns⁰⁻²), **f** (lanthanoids and actinoids, (n−2)f¹⁻¹⁴ (n−1)d⁰⁻¹ ns²).",
            "IUPAC names for Z > 100 use digit roots: 0 nil, 1 un, 2 bi, 3 tri, 4 quad, 5 pent, 6 hex, 7 sept, 8 oct, 9 enn, ending in **-ium**. Z = 101 is unnilunium (now mendelevium).",
            "**Metalloids** such as Si, Ge, As, Sb and Te show properties of both metals and non-metals."
          ]
        },
        {
          heading: "Atomic and Ionic Radius",
          points: [
            "Atomic radius **decreases across a period** (nuclear charge increases while electrons enter the same shell) and **increases down a group** (new shells are added).",
            "A **cation is smaller** than its parent atom; an **anion is larger** than its parent atom.",
            "In an **isoelectronic series**, the ion with more protons is smaller: N³⁻ > O²⁻ > F⁻ > Na⁺ > Mg²⁺ > Al³⁺ (all have 10 electrons).",
            "Covalent radius is used for non-metals, metallic radius for metals, and van der Waals radius for noble gases."
          ]
        },
        {
          heading: "Ionisation Enthalpy",
          points: [
            "**Ionisation enthalpy** is the energy needed to remove the outermost electron from an **isolated gaseous atom** in its ground state: X(g) → X⁺(g) + e⁻. It is always positive.",
            "Second ionisation enthalpy is always **higher** than the first, because the electron is removed from a positive ion.",
            "It **increases across a period** and **decreases down a group** (inner electrons **shield** the outer electron from the nucleus).",
            "Exceptions in period 2: **Be > B** (a 2s electron is harder to remove than a 2p electron) and **N > O** (half-filled 2p³ is stable; O loses a paired electron more easily)."
          ]
        },
        {
          heading: "Electron Gain Enthalpy and Electronegativity",
          points: [
            "**Electron gain enthalpy** is the enthalpy change when an electron is added to an isolated gaseous atom: X(g) + e⁻ → X⁻(g). It is strongly **negative for halogens** and **positive for noble gases**.",
            "It becomes more negative across a period and less negative down a group, but **chlorine has the most negative value**: fluorine is so small that the added electron feels strong repulsion in the compact 2p subshell.",
            "**Electronegativity** is the tendency of an atom **in a compound** to attract a shared pair of electrons; **fluorine (4.0)** is the most electronegative element on the Pauling scale.",
            "Electronegativity increases across a period and decreases down a group; **metallic character** shows the opposite trend."
          ]
        },
        {
          heading: "Valence and Chemical Reactivity",
          points: [
            "Across period 3 the oxides change from **basic** (Na₂O, MgO) to **amphoteric** (Al₂O₃) to **acidic** (SiO₂, P₄O₁₀, SO₃, Cl₂O₇).",
            "Second-period elements (Li to F) behave **anomalously** because of small size, high charge/radius ratio, high electronegativity and no d orbitals (maximum covalency 4).",
            "**Diagonal relationship**: Li resembles Mg, Be resembles Al, and B resembles Si.",
            "Reactivity of metals is highest at the far left (alkali metals) and of non-metals at the far right (halogens), excluding noble gases."
          ]
        }
      ],
      formulas: [
        "Ionisation: X(g) → X⁺(g) + e⁻ (ΔᵢH is always positive)",
        "Electron gain: X(g) + e⁻ → X⁻(g)",
        "Isoelectronic ions (10 e⁻), size: N³⁻ > O²⁻ > F⁻ > Na⁺ > Mg²⁺ > Al³⁺",
        "First ionisation enthalpy, period 2: Li < B < Be < C < O < N < F < Ne",
        "Most negative electron gain enthalpy: Cl > F > Br > I",
        "Fluorine is the most electronegative element (4.0, Pauling scale)",
        "IUPAC digit roots: 0 nil, 1 un, 2 bi, 3 tri, 4 quad, 5 pent, 6 hex, 7 sept, 8 oct, 9 enn",
        "Period 3 oxides: Na₂O, MgO (basic) → Al₂O₃ (amphoteric) → SiO₂, P₄O₁₀, SO₃, Cl₂O₇ (acidic)"
      ],
      terms: [
        { term: "Modern periodic law", meaning: "The physical and chemical properties of elements are **periodic functions of their atomic numbers**." },
        { term: "Isoelectronic species", meaning: "Atoms or ions with the **same number of electrons**, e.g. O²⁻, F⁻, Na⁺, Mg²⁺." },
        { term: "Ionisation enthalpy", meaning: "Energy needed to **remove an electron** from an isolated gaseous atom in its ground state." },
        { term: "Electron gain enthalpy", meaning: "Enthalpy change when an **electron is added** to an isolated gaseous atom." },
        { term: "Electronegativity", meaning: "The ability of an atom **in a chemical compound** to attract the shared electron pair towards itself." },
        { term: "Diagonal relationship", meaning: "Similarity between diagonally placed elements of periods 2 and 3: **Li–Mg, Be–Al, B–Si**." }
      ],
      examples: [
        {
          q: "Write the IUPAC temporary name and symbol of the element with atomic number 114.",
          steps: [
            "Split the atomic number into digits: 1, 1, 4",
            "Digit roots: 1 = un, 1 = un, 4 = quad",
            "Join the roots and add -ium: un + un + quad + ium = ununquadium",
            "Symbol = first letters of the roots: U, u, q"
          ],
          answer: "Ununquadium, Uuq (the element is now officially named flerovium, Fl)"
        }
      ],
      qa: [
        {
          q: "Why is the first ionisation enthalpy of nitrogen higher than that of oxygen?",
          a: "Nitrogen (2s² 2p³) has a **half-filled 2p subshell**, which is extra stable, so removing an electron needs more energy. In oxygen (2s² 2p⁴), two electrons share one 2p orbital; their **mutual repulsion** makes it easier to remove one of them. Hence ΔᵢH₁ of N (1402 kJ mol⁻¹) is greater than that of O (1314 kJ mol⁻¹)."
        },
        {
          q: "Why does fluorine have a less negative electron gain enthalpy than chlorine?",
          a: "Fluorine is very small. The incoming electron enters the **compact 2p subshell**, where it suffers strong **repulsion from the electrons already present**. In chlorine the electron enters the larger 3p subshell, where repulsion is much less, so chlorine releases more energy."
        },
        {
          q: "Arrange Mg²⁺, O²⁻, Na⁺, F⁻ and N³⁻ in increasing order of size and justify.",
          a: "**Mg²⁺ < Na⁺ < F⁻ < O²⁻ < N³⁻**. All are isoelectronic (10 electrons), so size depends on nuclear charge: Mg (12 protons) pulls the 10 electrons most strongly and is smallest, while N (7 protons) pulls them least and is largest."
        }
      ],
      quiz: [
        {
          q: "Which of these elements has the highest first ionisation enthalpy?",
          options: ["Li", "B", "N", "O"],
          answer: 2,
          explain: "Nitrogen has a **stable half-filled 2p³** configuration, so its ionisation enthalpy (1402 kJ mol⁻¹) is higher than that of O (1314), B and Li."
        },
        {
          q: "The element with the most negative electron gain enthalpy is:",
          options: ["F", "Cl", "Br", "O"],
          answer: 1,
          explain: "**Chlorine** (about −349 kJ mol⁻¹). Fluorine is less negative because of strong electron repulsion in its small 2p subshell."
        },
        {
          q: "The IUPAC temporary name of the element with Z = 109 is:",
          options: ["Unnilennium", "Ununennium", "Unnilnonium", "Unenium"],
          answer: 0,
          explain: "1 = un, 0 = nil, 9 = enn: **un + nil + enn + ium = unnilennium** (meitnerium). Ununennium would be Z = 119."
        },
        {
          q: "Which of the following oxides is amphoteric?",
          options: ["Na₂O", "Cl₂O₇", "CaO", "Al₂O₃"],
          answer: 3,
          explain: "**Al₂O₃** reacts with both acids and bases. Na₂O and CaO are basic; Cl₂O₇ is acidic."
        },
        {
          q: "Which of these isoelectronic ions has the smallest radius?",
          options: ["Na⁺", "Mg²⁺", "F⁻", "O²⁻"],
          answer: 1,
          explain: "All have 10 electrons; **Mg²⁺** has the highest nuclear charge (12), so it holds the electrons most tightly and is smallest."
        },
        {
          q: "Lithium shows a diagonal relationship with:",
          options: ["Na", "Be", "Mg", "Al"],
          answer: 2,
          explain: "Li (period 2, group 1) and **Mg** (period 3, group 2) are diagonal neighbours with similar size and charge/radius ratio."
        }
      ]
    }
,

    // ------------------------------------------------------------------
    {
      id: "chemical-bonding-and-molecular-structure",
      title: "Chemical Bonding and Molecular Structure",
      section: "Inorganic Chemistry",
      summary: "Why and how atoms combine: the octet rule, ionic and covalent bonds, bond parameters, resonance and polarity, VSEPR shapes, valence bond theory and hybridisation, molecular orbital theory, and hydrogen bonding.",
      notes: [
        {
          heading: "Kossel–Lewis Approach and Ionic Bonds",
          points: [
            "**Octet rule**: atoms combine by transferring or sharing electrons to get **eight electrons** in their valence shell.",
            "**Formal charge** on an atom in a Lewis structure = V − L − ½S (V = valence electrons, L = non-bonding electrons, S = bonding electrons). The structure with the lowest formal charges is preferred.",
            "Limits of the octet rule: **incomplete octet** (BeH₂, BCl₃), **odd-electron molecules** (NO, NO₂) and **expanded octet** (PF₅, SF₆); it also cannot explain shapes.",
            "An **ionic bond** forms easily when the metal has low ionisation enthalpy, the non-metal has a strongly negative electron gain enthalpy and the **lattice enthalpy** is high (788 kJ mol⁻¹ for NaCl)."
          ]
        },
        {
          heading: "Bond Parameters, Resonance and Polarity",
          points: [
            "**Bond order** = number of bonds between two atoms. Higher bond order means **shorter and stronger** bond (N≡N is very strong).",
            "**Resonance**: when one Lewis structure cannot explain the properties, the molecule is a **resonance hybrid** of several structures, e.g. O₃ and CO₃²⁻ (all three C–O bonds are equal).",
            "**Dipole moment** μ = charge × distance, in debye (1 D = 3.33564 × 10⁻³⁰ C m). Symmetrical molecules such as CO₂, BF₃ and CH₄ have **μ = 0**.",
            "NH₃ (1.47 D) has a larger dipole moment than NF₃ (0.23 D) because in NH₃ the **lone-pair moment adds** to the bond moments, while in NF₃ it opposes them.",
            "**Fajans' rules**: covalent character of an ionic bond increases with a **small, highly charged cation** and a **large anion**."
          ]
        },
        {
          heading: "VSEPR Theory",
          points: [
            "The shape of a molecule depends on the **number of electron pairs** (bond pairs + lone pairs) around the central atom; they repel and stay as far apart as possible.",
            "Order of repulsion: **lone pair–lone pair > lone pair–bond pair > bond pair–bond pair**.",
            "No lone pairs: BeCl₂ linear (180°), BF₃ trigonal planar (120°), CH₄ tetrahedral (109.5°), PCl₅ trigonal bipyramidal, SF₆ octahedral.",
            "With lone pairs: NH₃ **trigonal pyramidal (107°)**, H₂O **bent (104.5°)**, SF₄ see-saw, ClF₃ T-shaped, BrF₅ square pyramidal, XeF₄ square planar."
          ]
        },
        {
          heading: "Valence Bond Theory and Hybridisation",
          points: [
            "A covalent bond forms by **overlap of half-filled atomic orbitals** with opposite spins; greater overlap gives a stronger bond.",
            "**σ bond**: head-on (axial) overlap; **π bond**: sideways overlap. σ is stronger. A double bond = 1σ + 1π; a triple bond = 1σ + 2π.",
            "**Hybridisation** is mixing of orbitals of similar energy to form equivalent hybrid orbitals: **sp** (linear, BeCl₂, C₂H₂), **sp²** (trigonal planar, BF₃, C₂H₄), **sp³** (tetrahedral, CH₄).",
            "**sp³d** gives trigonal bipyramidal PCl₅ and **sp³d²** gives octahedral SF₆.",
            "In PCl₅ the two **axial bonds are longer and weaker** than the three equatorial bonds because they suffer more repulsion."
          ]
        },
        {
          heading: "Molecular Orbital Theory",
          points: [
            "Atomic orbitals combine (LCAO) to form an equal number of molecular orbitals: **bonding** (lower energy) and **antibonding** (higher energy).",
            "**Bond order = ½ (Nb − Na)**. A bond order of zero means the molecule does not exist (He₂).",
            "For O₂ and F₂ the order is σ1s, σ*1s, σ2s, σ*2s, **σ2pz, (π2px = π2py)**, (π*2px = π*2py), σ*2pz; for B₂, C₂ and N₂ the π2p orbitals lie **below** σ2pz.",
            "**O₂ is paramagnetic**: it has two unpaired electrons in π* orbitals (bond order 2). N₂ is diamagnetic with bond order 3.",
            "Bond orders: O₂⁺ 2.5 > O₂ 2 > O₂⁻ 1.5 > O₂²⁻ 1; bond length increases in the same order."
          ]
        },
        {
          heading: "Hydrogen Bonding",
          points: [
            "A **hydrogen bond** is the attraction between an H atom bonded to a highly electronegative atom (**F, O or N**) and another such atom.",
            "**Intermolecular** H-bonds (between molecules, e.g. HF, H₂O) raise boiling points; this is why water is a liquid but H₂S is a gas.",
            "**Intramolecular** H-bonds (within one molecule, e.g. o-nitrophenol) prevent association, so the compound is **more volatile**.",
            "Ice has an open cage-like structure held by H-bonds, so it is **less dense than water** and floats."
          ]
        }
      ],
      formulas: [
        "Formal charge = V − L − ½S",
        "Bond order = ½ (Nb − Na)",
        "Dipole moment μ = q × d; 1 D = 3.33564 × 10⁻³⁰ C m",
        "Repulsion: lp–lp > lp–bp > bp–bp",
        "Steric number (σ bonds + lone pairs on central atom): 2 → sp, 3 → sp², 4 → sp³, 5 → sp³d, 6 → sp³d²",
        "sp 180° linear · sp² 120° trigonal planar · sp³ 109.5° tetrahedral",
        "Bond angles: CH₄ 109.5° > NH₃ 107° > H₂O 104.5°",
        "Bond orders: N₂ 3, O₂⁺ 2.5, O₂ 2, O₂⁻ 1.5, O₂²⁻ 1, He₂ 0",
        "O₂: σ1s² σ*1s² σ2s² σ*2s² σ2pz² π2px² π2py² π*2px¹ π*2py¹"
      ],
      terms: [
        { term: "Octet rule", meaning: "Atoms tend to gain, lose or share electrons to have **eight electrons in their valence shell**." },
        { term: "Lattice enthalpy", meaning: "Energy needed to **completely separate one mole** of a solid ionic compound into gaseous ions." },
        { term: "Bond order", meaning: "Number of bonds between two atoms; in MO theory, **½ (bonding − antibonding electrons)**." },
        { term: "Hybridisation", meaning: "**Mixing of atomic orbitals** of similar energy to form an equal number of identical hybrid orbitals." },
        { term: "Resonance", meaning: "Representation of a molecule by **two or more Lewis structures**; the real molecule is their hybrid and is more stable." },
        { term: "Hydrogen bond", meaning: "Weak attraction between H bonded to **F, O or N** and another electronegative atom." }
      ],
      examples: [
        {
          q: "Using molecular orbital theory, find the bond order of O₂ and predict its magnetic behaviour.",
          steps: [
            "O₂ has 16 electrons",
            "Configuration: σ1s² σ*1s² σ2s² σ*2s² σ2pz² π2px² π2py² π*2px¹ π*2py¹",
            "Bonding electrons Nb = 2 + 2 + 2 + 2 + 2 = 10; antibonding electrons Na = 2 + 2 + 1 + 1 = 6",
            "Bond order = ½ (10 − 6) = 2",
            "π*2px and π*2py each have one unpaired electron, so there are 2 unpaired electrons"
          ],
          answer: "Bond order of O₂ = 2; O₂ is paramagnetic (2 unpaired electrons)."
        }
      ],
      qa: [
        {
          q: "Fluorine is more electronegative than hydrogen, yet NF₃ has a much smaller dipole moment than NH₃. Explain.",
          a: "Both molecules are pyramidal with a lone pair on N. In **NH₃**, N is more electronegative than H, so the N–H bond moments point towards N, in the **same direction as the lone-pair moment**; they add up (1.47 D). In **NF₃**, the N–F bond moments point towards F, **opposite to the lone-pair moment**, so they partly cancel (0.23 D)."
        },
        {
          q: "BeH₂ is linear but H₂O is bent, though both are triatomic. Explain using VSEPR theory.",
          a: "In **BeH₂**, Be has only 2 bond pairs and no lone pair, so they stay 180° apart (sp, **linear**). In **H₂O**, O has 2 bond pairs and **2 lone pairs**; the four pairs take a tetrahedral arrangement and the stronger lone-pair repulsion squeezes the H–O–H angle to 104.5°, giving a **bent** shape."
        },
        {
          q: "Why are the axial bonds in PCl₅ longer than the equatorial bonds?",
          a: "PCl₅ is trigonal bipyramidal. Each **axial** bond pair has **three equatorial bond pairs at 90°**, whereas an equatorial bond pair has only two bond pairs at 90°. The greater repulsion pushes the axial bonds out, so they are **longer and weaker**, which also makes PCl₅ reactive."
        }
      ],
      quiz: [
        {
          q: "The hybridisation of sulphur in SF₆ is:",
          options: ["sp³", "sp³d", "dsp²", "sp³d²"],
          answer: 3,
          explain: "S has 6 bond pairs and no lone pair, so it uses **sp³d²** hybrid orbitals and SF₆ is octahedral."
        },
        {
          q: "Which molecule has zero dipole moment?",
          options: ["NH₃", "BF₃", "H₂O", "CHCl₃"],
          answer: 1,
          explain: "**BF₃** is trigonal planar and symmetrical, so the three B–F bond moments cancel."
        },
        {
          q: "The bond order of the superoxide ion O₂⁻ is:",
          options: ["2", "1", "1.5", "2.5"],
          answer: 2,
          explain: "O₂⁻ has 17 electrons: Nb = 10, Na = 7, so bond order = ½ (10 − 7) = **1.5**."
        },
        {
          q: "Which of these molecules is paramagnetic?",
          options: ["N₂", "O₂", "F₂", "C₂"],
          answer: 1,
          explain: "**O₂** has two unpaired electrons in the π*2p orbitals. N₂, F₂ and C₂ have all electrons paired."
        },
        {
          q: "According to VSEPR theory, the shape of ClF₃ is:",
          options: ["T-shaped", "trigonal planar", "see-saw", "trigonal pyramidal"],
          answer: 0,
          explain: "Cl has 3 bond pairs and 2 lone pairs. The lone pairs take equatorial positions, leaving a **T-shaped** molecule."
        },
        {
          q: "o-Nitrophenol is more volatile than p-nitrophenol because of:",
          options: ["its higher molar mass", "intermolecular hydrogen bonding in o-nitrophenol", "its greater dipole–dipole attraction", "intramolecular hydrogen bonding in o-nitrophenol"],
          answer: 3,
          explain: "In o-nitrophenol the H-bond is **within the molecule (intramolecular)**, so molecules do not associate and it boils more easily. p-Nitrophenol forms intermolecular H-bonds. Both have the same molar mass."
        }
      ]
    },

    // ------------------------------------------------------------------
    {
      id: "thermodynamics",
      title: "Thermodynamics",
      section: "Physical Chemistry",
      summary: "Energy changes in chemical reactions: systems and state functions, the first law, work and enthalpy, Hess's law and enthalpies of reaction, and how entropy and Gibbs energy decide whether a process is spontaneous.",
      notes: [
        {
          heading: "Basic Terms",
          points: [
            "**System** is the part being studied; the rest is the **surroundings**. Open systems exchange matter and energy, **closed** systems only energy, **isolated** systems neither.",
            "**State functions** depend only on the initial and final states, not the path: U, H, S, G, p, V, T. **Heat (q) and work (w) are path functions**.",
            "**Extensive** properties depend on the amount of matter (mass, volume, U, H, heat capacity); **intensive** properties do not (temperature, pressure, density, molar heat capacity).",
            "Processes: **isothermal** (constant T), **adiabatic** (q = 0), isobaric (constant p), isochoric (constant V), and **reversible** (carried out in infinitesimally small steps)."
          ]
        },
        {
          heading: "First Law and Work",
          points: [
            "**First law**: the energy of an isolated system is constant; **ΔU = q + w**.",
            "Sign convention: q and w are **positive** when heat is added to or work is done **on** the system, and negative when the system loses heat or does work.",
            "Work against a constant external pressure: **w = −p_ext ΔV**.",
            "Reversible isothermal expansion of an ideal gas: **w = −2.303 nRT log(V_f/V_i)**; expansion into vacuum (free expansion) does no work.",
            "For isothermal expansion of an ideal gas, **ΔU = 0**, so q = −w."
          ]
        },
        {
          heading: "Enthalpy and Heat Capacity",
          points: [
            "**Enthalpy** H = U + pV. At constant pressure, **ΔH = q_p**; at constant volume, ΔU = q_V.",
            "For reactions involving gases: **ΔH = ΔU + Δn_g RT**, where Δn_g = moles of gaseous products − moles of gaseous reactants.",
            "ΔH is **negative for exothermic** and **positive for endothermic** reactions.",
            "Heat absorbed q = mcΔT = CΔT; for an ideal gas **Cp − Cv = R**.",
            "ΔU is measured in a **bomb calorimeter** (constant volume); ΔH is measured at constant pressure."
          ]
        },
        {
          heading: "Enthalpies of Reaction and Hess's Law",
          points: [
            "**Standard enthalpy of formation (ΔfH°)**: enthalpy change when 1 mol of a compound forms from its elements in their **most stable (reference) states**. ΔfH° of an element in its reference state is **zero**.",
            "ΔrH° = Σ ΔfH°(products) − Σ ΔfH°(reactants).",
            "**Hess's law**: the total enthalpy change of a reaction is the **same whether it takes place in one step or several steps**.",
            "Other enthalpies: combustion (always negative), atomisation, bond dissociation, solution and lattice enthalpy (found using the Born–Haber cycle).",
            "For gaseous reactions: ΔrH° = Σ bond enthalpies of reactants − Σ bond enthalpies of products."
          ]
        },
        {
          heading: "Entropy, Gibbs Energy and Spontaneity",
          points: [
            "**Entropy (S)** measures the randomness of a system: ΔS = q_rev/T. It increases on melting, vaporisation, dissolving and when the number of gas molecules increases.",
            "**Second law**: for a spontaneous process the total entropy of system + surroundings **increases** (ΔS_total > 0).",
            "**Third law**: the entropy of a perfectly crystalline substance is **zero at 0 K**.",
            "**Gibbs energy**: G = H − TS and **ΔG = ΔH − TΔS**. ΔG < 0 spontaneous, ΔG > 0 non-spontaneous, ΔG = 0 at equilibrium.",
            "ΔH negative and ΔS positive: spontaneous at all temperatures. ΔH positive and ΔS positive: spontaneous only at **high T**. ΔH negative and ΔS negative: spontaneous only at **low T**.",
            "Gibbs energy and equilibrium: **ΔG° = −2.303 RT log K**."
          ]
        }
      ],
      formulas: [
        "ΔU = q + w",
        "w = −p_ext ΔV (against constant external pressure)",
        "w_rev = −2.303 nRT log(V_f/V_i) (isothermal, reversible)",
        "H = U + pV; ΔH = ΔU + Δn_g RT",
        "q = mcΔT = CΔT; Cp − Cv = R",
        "ΔrH° = Σ ΔfH°(products) − Σ ΔfH°(reactants)",
        "ΔrH° = Σ bond enthalpies (reactants) − Σ bond enthalpies (products)",
        "ΔS = q_rev/T; at a phase change ΔS = ΔH/T",
        "G = H − TS; ΔG = ΔH − TΔS",
        "ΔG° = −2.303 RT log K",
        "R = 8.314 J K⁻¹ mol⁻¹",
        "CH₄(g) + 2O₂(g) → CO₂(g) + 2H₂O(l); ΔcH° = −890 kJ mol⁻¹"
      ],
      terms: [
        { term: "State function", meaning: "A property whose value depends **only on the state** of the system, not on how it was reached, e.g. U, H, S, G." },
        { term: "Isolated system", meaning: "A system that exchanges **neither energy nor matter** with its surroundings, e.g. a sealed thermos flask." },
        { term: "Standard enthalpy of formation", meaning: "Enthalpy change when **1 mol of a compound** forms from its elements in their standard states." },
        { term: "Hess's law", meaning: "The enthalpy change of a reaction is the **same whether it occurs in one step or many**." },
        { term: "Entropy", meaning: "A measure of the **randomness or disorder** of a system." },
        { term: "Gibbs energy", meaning: "G = H − TS; a **negative ΔG** at constant T and p means the process is spontaneous." }
      ],
      examples: [
        {
          q: "For N₂(g) + 3H₂(g) → 2NH₃(g), ΔrH° = −92.4 kJ mol⁻¹ at 298 K. Calculate ΔrU°. (R = 8.314 J K⁻¹ mol⁻¹)",
          steps: [
            "Δn_g = moles of gaseous products − reactants = 2 − (1 + 3) = −2",
            "ΔH = ΔU + Δn_g RT, so ΔU = ΔH − Δn_g RT",
            "Δn_g RT = −2 × 8.314 × 10⁻³ kJ K⁻¹ mol⁻¹ × 298 K = −4.96 kJ mol⁻¹",
            "ΔU = −92.4 − (−4.96) = −92.4 + 4.96 = −87.4 kJ mol⁻¹"
          ],
          answer: "ΔrU° ≈ −87.4 kJ mol⁻¹"
        },
        {
          q: "Calculate the standard enthalpy of combustion of methane, CH₄(g) + 2O₂(g) → CO₂(g) + 2H₂O(l). ΔfH° (kJ mol⁻¹): CH₄ = −74.8, CO₂ = −393.5, H₂O(l) = −285.8.",
          steps: [
            "ΔrH° = Σ ΔfH°(products) − Σ ΔfH°(reactants)",
            "Products: −393.5 + 2(−285.8) = −393.5 − 571.6 = −965.1 kJ",
            "Reactants: −74.8 + 2(0) = −74.8 kJ (O₂ is an element in its standard state)",
            "ΔrH° = −965.1 − (−74.8) = −890.3 kJ mol⁻¹"
          ],
          answer: "ΔcH° of methane = −890.3 kJ mol⁻¹"
        }
      ],
      qa: [
        {
          q: "State the first law of thermodynamics and write its mathematical form. What does it become for an adiabatic process?",
          a: "Energy can neither be created nor destroyed; the energy of an isolated system is constant. Mathematically **ΔU = q + w**. In an **adiabatic process no heat is exchanged (q = 0)**, so **ΔU = w_ad**: any change in internal energy equals the work done on or by the system."
        },
        {
          q: "Predict the sign of ΔS for: (i) melting of ice (ii) 2SO₂(g) + O₂(g) → 2SO₃(g) (iii) CaCO₃(s) → CaO(s) + CO₂(g).",
          a: "(i) **Positive**: an ordered solid becomes a more random liquid. (ii) **Negative**: 3 mol of gas become 2 mol of gas, so randomness decreases. (iii) **Positive**: a gas is produced from a solid."
        },
        {
          q: "A reaction has ΔH < 0 and ΔS < 0. Under what conditions will it be spontaneous?",
          a: "ΔG = ΔH − TΔS. Here ΔH is negative but −TΔS is positive. ΔG is negative only when |ΔH| > T|ΔS|, i.e. at **low temperatures**, below T = ΔH/ΔS. At high temperature the TΔS term dominates and the reaction becomes non-spontaneous."
        }
      ],
      quiz: [
        {
          q: "Which of the following is NOT a state function?",
          options: ["Internal energy", "Enthalpy", "Work", "Entropy"],
          answer: 2,
          explain: "**Work** depends on the path followed. U, H and S depend only on the state of the system."
        },
        {
          q: "In an adiabatic process:",
          options: ["ΔU = 0", "q = 0", "w = 0", "ΔT = 0"],
          answer: 1,
          explain: "Adiabatic means **no heat exchange** between system and surroundings, so q = 0 and ΔU = w."
        },
        {
          q: "For which reaction is ΔH equal to ΔU?",
          options: ["H₂(g) + I₂(g) → 2HI(g)", "N₂(g) + 3H₂(g) → 2NH₃(g)", "PCl₅(g) → PCl₃(g) + Cl₂(g)", "2SO₂(g) + O₂(g) → 2SO₃(g)"],
          answer: 0,
          explain: "ΔH = ΔU + Δn_g RT. For H₂ + I₂ → 2HI, **Δn_g = 2 − 2 = 0**, so ΔH = ΔU."
        },
        {
          q: "For a reaction, ΔH = +30 kJ mol⁻¹ and ΔS = +100 J K⁻¹ mol⁻¹. It becomes spontaneous above:",
          options: ["30 K", "100 K", "3000 K", "300 K"],
          answer: 3,
          explain: "At equilibrium T = ΔH/ΔS = 30 000 J ÷ 100 J K⁻¹ = **300 K**. Above this, TΔS > ΔH and ΔG is negative."
        },
        {
          q: "The standard enthalpy of formation is zero for:",
          options: ["C(diamond)", "Br₂(l)", "O₃(g)", "H₂O(l)"],
          answer: 1,
          explain: "Liquid bromine is the **reference (most stable) state** of bromine. Diamond and ozone are not the most stable forms of carbon and oxygen."
        },
        {
          q: "An ideal gas expands from 2 L to 6 L against a constant external pressure of 1 atm. The work done on the gas is:",
          options: ["−4 L atm", "+4 L atm", "−8 L atm", "zero"],
          answer: 0,
          explain: "w = −p_ext ΔV = −1 atm × (6 − 2) L = **−4 L atm** (about −405 J). It is negative because the gas does work on the surroundings."
        }
      ]
    },

    // ------------------------------------------------------------------
    {
      id: "equilibrium",
      title: "Equilibrium",
      section: "Physical Chemistry",
      summary: "Physical and chemical equilibria, the law of mass action, Kc and Kp, Le Chatelier's principle, acids and bases, pH, ionisation of weak acids, buffers, salt hydrolysis and solubility product.",
      notes: [
        {
          heading: "Equilibrium in Physical and Chemical Processes",
          points: [
            "Equilibrium is **dynamic**: the forward and backward reactions go on at **equal rates**, so concentrations stay constant.",
            "Physical examples: ice ⇌ water at 273 K and 1 atm; liquid ⇌ vapour in a closed vessel; solid ⇌ saturated solution; gas ⇌ gas dissolved in a liquid (Henry's law).",
            "Equilibrium can be reached **from either direction** (starting with reactants or with products).",
            "A **catalyst** does not change the equilibrium composition; it only helps equilibrium to be reached faster."
          ]
        },
        {
          heading: "Law of Mass Action and Equilibrium Constant",
          points: [
            "For aA + bB ⇌ cC + dD: **Kc = [C]ᶜ[D]ᵈ / [A]ᵃ[B]ᵇ**, at a fixed temperature.",
            "For gases, **Kp = Kc(RT)^Δn**, where Δn = moles of gaseous products − moles of gaseous reactants.",
            "**Pure solids and liquids are left out** of K: for CaCO₃(s) ⇌ CaO(s) + CO₂(g), Kp = p(CO₂).",
            "Reversing an equation gives K′ = 1/K; multiplying it by n gives K′ = Kⁿ.",
            "**Reaction quotient Q**: if Q < K the reaction goes forward; if Q > K it goes backward; if Q = K it is at equilibrium.",
            "A large K (above about 10³) means products dominate; a small K (below about 10⁻³) means reactants dominate."
          ]
        },
        {
          heading: "Le Chatelier's Principle",
          points: [
            "If an equilibrium is disturbed, it shifts in the direction that **reduces the effect** of the change.",
            "Adding a reactant or removing a product shifts equilibrium **forward**.",
            "Increasing pressure shifts it towards **fewer moles of gas**: N₂ + 3H₂ ⇌ 2NH₃ shifts forward; H₂ + I₂ ⇌ 2HI is unaffected.",
            "**Temperature is the only factor that changes K**. For an exothermic forward reaction, K decreases on heating.",
            "Adding a catalyst, or an inert gas at constant volume, does **not** shift the equilibrium."
          ]
        },
        {
          heading: "Acids, Bases and pH",
          points: [
            "**Arrhenius**: acids give H⁺, bases give OH⁻ in water. **Brønsted–Lowry**: acid = proton donor, base = proton acceptor. **Lewis**: acid = electron-pair acceptor (BF₃), base = electron-pair donor (NH₃).",
            "A **conjugate acid–base pair** differs by one proton (HCl/Cl⁻, NH₄⁺/NH₃). A strong acid has a **weak conjugate base**.",
            "Ionic product of water: **Kw = [H₃O⁺][OH⁻] = 1.0 × 10⁻¹⁴ at 298 K**.",
            "**pH = −log[H₃O⁺]**; at 298 K, pH + pOH = 14. Pure water has pH 7.",
            "For a weak acid HA: Ka = cα²/(1 − α) ≈ cα², so **[H₃O⁺] = √(Ka c)**. For a conjugate pair, **Ka × Kb = Kw**."
          ]
        },
        {
          heading: "Buffers, Salt Hydrolysis and Solubility Product",
          points: [
            "A **buffer** resists change in pH on adding a little acid or base: CH₃COOH + CH₃COONa (acidic buffer), NH₄OH + NH₄Cl (basic buffer).",
            "**Henderson equation**: pH = pKa + log([salt]/[acid]).",
            "Salt of strong acid + strong base (NaCl): **neutral**; weak acid + strong base (CH₃COONa): **basic**; strong acid + weak base (NH₄Cl): **acidic**.",
            "**Solubility product**: for a sparingly soluble salt AB, Ksp = [A⁺][B⁻] = s²; for AB₂ or A₂B, Ksp = 4s³. A precipitate forms when the **ionic product exceeds Ksp**.",
            "**Common ion effect**: adding an ion already present suppresses ionisation or solubility, e.g. passing HCl gas through saturated brine precipitates pure NaCl."
          ]
        }
      ],
      formulas: [
        "Kc = [C]ᶜ[D]ᵈ / [A]ᵃ[B]ᵇ for aA + bB ⇌ cC + dD",
        "Kp = Kc(RT)^Δn; Δn = gaseous moles of products − reactants",
        "Q < K: forward; Q > K: backward; Q = K: at equilibrium",
        "ΔG° = −2.303 RT log K",
        "Kw = [H₃O⁺][OH⁻] = 1.0 × 10⁻¹⁴ at 298 K",
        "pH = −log[H₃O⁺]; pH + pOH = 14 at 298 K",
        "Ostwald's dilution law: Ka = cα²/(1 − α) ≈ cα²; α = √(Ka/c)",
        "Weak acid: [H₃O⁺] = √(Ka c)",
        "Ka × Kb = Kw; pKa + pKb = 14 at 298 K",
        "Henderson: pH = pKa + log([salt]/[acid])",
        "Ksp: AB type = s²; AB₂ or A₂B type = 4s³; AB₃ type = 27s⁴",
        "N₂(g) + 3H₂(g) ⇌ 2NH₃(g); ΔH = −92.4 kJ mol⁻¹"
      ],
      terms: [
        { term: "Dynamic equilibrium", meaning: "State in which forward and backward reactions occur at **equal rates**, so concentrations remain constant." },
        { term: "Reaction quotient (Q)", meaning: "The concentration ratio of the K expression at **any moment**; comparing Q with K tells the direction of the reaction." },
        { term: "Le Chatelier's principle", meaning: "A system at equilibrium shifts to **counteract any change** in concentration, pressure or temperature." },
        { term: "Conjugate acid–base pair", meaning: "An acid and base that **differ by one proton**, e.g. CH₃COOH and CH₃COO⁻." },
        { term: "Buffer solution", meaning: "A solution that **resists change in pH** on adding small amounts of acid or base." },
        { term: "Solubility product (Ksp)", meaning: "Product of the ion concentrations in a **saturated solution** of a sparingly soluble salt, each raised to its coefficient." }
      ],
      examples: [
        {
          q: "1.0 mol of H₂ and 1.0 mol of I₂ are heated in a 1 L vessel. At equilibrium, Kc = 64 for H₂(g) + I₂(g) ⇌ 2HI(g). Find the equilibrium concentrations.",
          steps: [
            "Let x mol L⁻¹ of H₂ react. At equilibrium: [H₂] = [I₂] = 1 − x, [HI] = 2x",
            "Kc = (2x)² / (1 − x)² = 64",
            "Taking the square root: 2x / (1 − x) = 8, so 2x = 8 − 8x and 10x = 8, giving x = 0.8",
            "[H₂] = [I₂] = 1 − 0.8 = 0.2 M; [HI] = 2 × 0.8 = 1.6 M",
            "Check: (1.6)² ÷ (0.2 × 0.2) = 2.56 ÷ 0.04 = 64"
          ],
          answer: "[H₂] = [I₂] = 0.2 mol L⁻¹ and [HI] = 1.6 mol L⁻¹"
        },
        {
          q: "Calculate the pH of 0.1 M acetic acid. (Ka = 1.8 × 10⁻⁵)",
          steps: [
            "For a weak acid, [H₃O⁺] = √(Ka × c) = √(1.8 × 10⁻⁵ × 0.1) = √(1.8 × 10⁻⁶)",
            "[H₃O⁺] = 1.34 × 10⁻³ M",
            "pH = −log(1.34 × 10⁻³) = 3 − log 1.34 = 3 − 0.13 = 2.87",
            "Degree of ionisation α = 1.34 × 10⁻³ ÷ 0.1 = 0.0134 (1.34%), small enough for the approximation"
          ],
          answer: "pH ≈ 2.87"
        }
      ],
      qa: [
        {
          q: "State Le Chatelier's principle. What is the effect of increasing pressure on (i) N₂ + 3H₂ ⇌ 2NH₃ (ii) H₂ + I₂ ⇌ 2HI?",
          a: "If a system at equilibrium is subjected to a change in concentration, pressure or temperature, the equilibrium **shifts so as to undo the effect** of the change. (i) 4 mol of gas form 2 mol, so higher pressure shifts it **forward** (more NH₃). (ii) Both sides have 2 mol of gas (Δn_g = 0), so pressure has **no effect**."
        },
        {
          q: "What is a buffer solution? How does an acetic acid–sodium acetate mixture resist change in pH?",
          a: "A buffer is a solution whose pH changes very little on adding small amounts of acid or base. In the CH₃COOH/CH₃COONa buffer, added **H⁺ combines with CH₃COO⁻** to form weakly ionised CH₃COOH, and added **OH⁻ is neutralised by CH₃COOH** (CH₃COOH + OH⁻ → CH₃COO⁻ + H₂O). So [H⁺] hardly changes."
        },
        {
          q: "Why is an aqueous solution of sodium acetate basic?",
          a: "Sodium acetate is a salt of a **weak acid (CH₃COOH) and a strong base (NaOH)**. The acetate ion undergoes hydrolysis: CH₃COO⁻ + H₂O ⇌ CH₃COOH + OH⁻. Na⁺ does not hydrolyse. The extra **OH⁻ ions** make the solution basic (pH > 7)."
        }
      ],
      quiz: [
        {
          q: "For 2SO₂(g) + O₂(g) ⇌ 2SO₃(g), the relation between Kp and Kc is:",
          options: ["Kp = Kc", "Kp = Kc(RT)", "Kp = Kc(RT)⁻¹", "Kp = Kc(RT)²"],
          answer: 2,
          explain: "Δn = 2 − 3 = −1, so **Kp = Kc(RT)⁻¹**."
        },
        {
          q: "The pH of 10⁻³ M HCl is:",
          options: ["11", "3", "4", "0.001"],
          answer: 1,
          explain: "HCl is a strong acid, so [H₃O⁺] = 10⁻³ M and pH = −log 10⁻³ = **3**."
        },
        {
          q: "The conjugate base of HSO₄⁻ is:",
          options: ["SO₄²⁻", "H₂SO₄", "HSO₃⁻", "SO₃²⁻"],
          answer: 0,
          explain: "A conjugate base has **one proton less**: HSO₄⁻ − H⁺ = **SO₄²⁻**. H₂SO₄ is its conjugate acid."
        },
        {
          q: "The Ksp of a sparingly soluble salt AB₂ is 4 × 10⁻¹² mol³ L⁻³. Its solubility is:",
          options: ["2 × 10⁻⁶ M", "1 × 10⁻⁶ M", "1.6 × 10⁻⁴ M", "1 × 10⁻⁴ M"],
          answer: 3,
          explain: "AB₂ ⇌ A²⁺ + 2B⁻, so Ksp = s(2s)² = 4s³ = 4 × 10⁻¹². Then s³ = 10⁻¹² and **s = 1 × 10⁻⁴ M**."
        },
        {
          q: "Which change shifts N₂(g) + 3H₂(g) ⇌ 2NH₃(g), ΔH = −92.4 kJ, towards more ammonia?",
          options: ["Raising the temperature", "Lowering the pressure", "Removing NH₃ as it forms", "Adding a catalyst"],
          answer: 2,
          explain: "**Removing a product** shifts the equilibrium forward. Heating favours the endothermic backward reaction; low pressure favours more gas moles; a catalyst does not shift equilibrium."
        },
        {
          q: "Which of these is a Lewis acid but not a Brønsted acid?",
          options: ["HCl", "BF₃", "H₂O", "NH₄⁺"],
          answer: 1,
          explain: "**BF₃** has no proton to donate, but its electron-deficient boron accepts an electron pair, so it is a Lewis acid."
        }
      ]
    }
,

    // ------------------------------------------------------------------
    {
      id: "redox-reactions",
      title: "Redox Reactions",
      section: "Physical Chemistry",
      summary: "Oxidation and reduction as electron transfer, oxidation numbers, types of redox reactions, balancing redox equations by the oxidation-number and half-reaction methods, and the link between redox reactions and electrode potentials.",
      notes: [
        {
          heading: "Classical and Electronic Concepts",
          points: [
            "Classical view: **oxidation** = addition of oxygen or an electronegative element, or removal of hydrogen; **reduction** is the reverse.",
            "Electronic view: **oxidation is loss of electrons**, **reduction is gain of electrons**. Both always occur together in a **redox** reaction.",
            "An **oxidising agent** accepts electrons and is itself reduced; a **reducing agent** donates electrons and is itself oxidised.",
            "Example: Zn(s) + Cu²⁺(aq) → Zn²⁺(aq) + Cu(s); zinc is oxidised (reducing agent), Cu²⁺ is reduced (oxidising agent)."
          ]
        },
        {
          heading: "Oxidation Number Rules",
          points: [
            "An element in the free state has oxidation number **0** (Na, O₂, P₄, S₈). A monatomic ion has oxidation number equal to its charge.",
            "Oxygen is usually **−2**, but −1 in peroxides (H₂O₂), −½ in superoxides (KO₂) and **+2 in OF₂**.",
            "Hydrogen is usually **+1**, but **−1 in metal hydrides** (NaH, CaH₂). Fluorine is always −1.",
            "The sum of oxidation numbers is **0 in a neutral compound** and equals the **charge** in a polyatomic ion.",
            "**Oxidation = increase** in oxidation number; **reduction = decrease** in oxidation number."
          ]
        },
        {
          heading: "Types of Redox Reactions",
          points: [
            "**Combination**: C(s) + O₂(g) → CO₂(g).",
            "**Decomposition**: 2KClO₃(s) → 2KCl(s) + 3O₂(g) on heating.",
            "**Displacement**: metal displacement (Zn + CuSO₄ → ZnSO₄ + Cu) and non-metal displacement (Cl₂ + 2KBr → 2KCl + Br₂).",
            "**Disproportionation**: the same element is **oxidised and reduced at the same time**: 2H₂O₂ → 2H₂O + O₂ (O goes from −1 to −2 and 0)."
          ]
        },
        {
          heading: "Balancing Redox Equations",
          points: [
            "**Oxidation number method**: find the increase and decrease in oxidation numbers, make them equal by multiplying, then balance O with H₂O and H with H⁺ (acidic) or OH⁻ (basic).",
            "**Half-reaction (ion–electron) method**: write oxidation and reduction halves separately; balance atoms other than O and H, then O with H₂O, H with H⁺, and charge with electrons.",
            "Multiply the half-reactions so that **electrons lost = electrons gained**, then add them and cancel common species.",
            "In basic medium, add OH⁻ to both sides to turn H⁺ into H₂O.",
            "In redox titrations, **KMnO₄ acts as its own indicator** (a permanent pink colour marks the end point)."
          ]
        },
        {
          heading: "Redox Reactions and Electrode Processes",
          points: [
            "When a zinc rod is dipped in CuSO₄ solution, electrons pass **directly** from Zn to Cu²⁺.",
            "In a **Daniell cell**, oxidation (Zn → Zn²⁺ + 2e⁻) and reduction (Cu²⁺ + 2e⁻ → Cu) occur in separate beakers joined by a **salt bridge**, and electrons flow through the wire.",
            "**Standard electrode potentials** (E°) are measured against the standard hydrogen electrode (E° = 0.00 V).",
            "A more **negative E°** means a stronger reducing agent (**Li**, −3.05 V); a more **positive E°** means a stronger oxidising agent (**F₂**, +2.87 V)."
          ]
        }
      ],
      formulas: [
        "Oxidation: loss of electrons, increase in oxidation number",
        "Reduction: gain of electrons, decrease in oxidation number",
        "Zn(s) + Cu²⁺(aq) → Zn²⁺(aq) + Cu(s)",
        "2KClO₃(s) → 2KCl(s) + 3O₂(g) (heat)",
        "2H₂O₂(aq) → 2H₂O(l) + O₂(g) (disproportionation)",
        "Cl₂(g) + 2OH⁻(aq) → ClO⁻(aq) + Cl⁻(aq) + H₂O(l) (disproportionation)",
        "MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O (acidic medium)",
        "Cr₂O₇²⁻ + 14H⁺ + 6e⁻ → 2Cr³⁺ + 7H₂O",
        "MnO₄⁻ + 5Fe²⁺ + 8H⁺ → Mn²⁺ + 5Fe³⁺ + 4H₂O",
        "2MnO₄⁻ + 5C₂O₄²⁻ + 16H⁺ → 2Mn²⁺ + 10CO₂ + 8H₂O",
        "E° (standard hydrogen electrode) = 0.00 V"
      ],
      terms: [
        { term: "Oxidation number", meaning: "The **charge an atom appears to have** in a compound when all bonds are treated as fully ionic." },
        { term: "Oxidising agent", meaning: "A substance that **accepts electrons** and is itself reduced, e.g. KMnO₄, Cl₂." },
        { term: "Reducing agent", meaning: "A substance that **donates electrons** and is itself oxidised, e.g. Zn, H₂S." },
        { term: "Disproportionation", meaning: "A redox reaction in which **one element is both oxidised and reduced**, e.g. 2H₂O₂ → 2H₂O + O₂." },
        { term: "Redox couple", meaning: "The **oxidised and reduced forms** of a substance taking part in a half-reaction, e.g. Zn²⁺/Zn." },
        { term: "Standard hydrogen electrode", meaning: "Reference electrode (Pt, H₂ at 1 bar, H⁺ at 1 M) with E° **fixed at 0.00 V**." }
      ],
      examples: [
        {
          q: "Balance by the half-reaction method (basic medium): MnO₄⁻(aq) + I⁻(aq) → MnO₂(s) + I₂(s)",
          steps: [
            "Oxidation numbers: Mn goes from +7 to +4 (gains 3e⁻); I goes from −1 to 0 (loses 1e⁻ per I)",
            "Oxidation half: 2I⁻ → I₂ + 2e⁻",
            "Reduction half (basic): MnO₄⁻ + 2H₂O + 3e⁻ → MnO₂ + 4OH⁻",
            "Equalise electrons: oxidation × 3 gives 6I⁻ → 3I₂ + 6e⁻; reduction × 2 gives 2MnO₄⁻ + 4H₂O + 6e⁻ → 2MnO₂ + 8OH⁻",
            "Add and cancel 6e⁻",
            "Check: Mn 2 = 2, I 6 = 6, O 12 = 12, H 8 = 8, charge −8 = −8"
          ],
          answer: "2MnO₄⁻(aq) + 6I⁻(aq) + 4H₂O(l) → 2MnO₂(s) + 3I₂(s) + 8OH⁻(aq)"
        }
      ],
      qa: [
        {
          q: "Find the oxidation number of: (i) S in H₂SO₄ (ii) Cr in K₂Cr₂O₇ (iii) Mn in KMnO₄ (iv) O in H₂O₂.",
          a: "(i) 2(+1) + x + 4(−2) = 0, so **S = +6**. (ii) 2(+1) + 2x + 7(−2) = 0, so **Cr = +6**. (iii) +1 + x + 4(−2) = 0, so **Mn = +7**. (iv) In a peroxide, **O = −1**."
        },
        {
          q: "What is a disproportionation reaction? Give one example.",
          a: "A redox reaction in which the **same element in one oxidation state is simultaneously oxidised and reduced**. Example: Cl₂ + 2OH⁻ → ClO⁻ + Cl⁻ + H₂O. Chlorine goes from 0 to **+1** in ClO⁻ (oxidation) and from 0 to **−1** in Cl⁻ (reduction)."
        },
        {
          q: "Why can H₂O₂ act as both an oxidising and a reducing agent, while HNO₃ acts only as an oxidising agent?",
          a: "In H₂O₂, oxygen has oxidation number **−1**, which lies between its lowest (−2) and 0. It can be reduced to −2 (oxidising agent) or oxidised to 0 (reducing agent). In HNO₃, nitrogen is already at **+5, its highest oxidation state**, so it can only decrease; HNO₃ can therefore act only as an oxidising agent."
        }
      ],
      quiz: [
        {
          q: "The oxidation number of phosphorus in H₃PO₂ is:",
          options: ["+3", "+1", "+5", "−3"],
          answer: 1,
          explain: "3(+1) + x + 2(−2) = 0, so x = **+1**."
        },
        {
          q: "In the reaction 2H₂O₂ → 2H₂O + O₂, hydrogen peroxide undergoes:",
          options: ["only oxidation", "only reduction", "disproportionation", "no change in oxidation number"],
          answer: 2,
          explain: "Oxygen (−1) goes to −2 in H₂O and to 0 in O₂: it is **both reduced and oxidised**, so this is disproportionation."
        },
        {
          q: "How many electrons are gained by one MnO₄⁻ ion when it is reduced to Mn²⁺ in acidic medium?",
          options: ["7", "3", "2", "5"],
          answer: 3,
          explain: "Mn changes from +7 to +2, a gain of **5 electrons**: MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O."
        },
        {
          q: "Given E°: Li⁺/Li = −3.05 V, Zn²⁺/Zn = −0.76 V, Cu²⁺/Cu = +0.34 V, Ag⁺/Ag = +0.80 V. The strongest reducing agent is:",
          options: ["Li", "Zn", "Cu", "Ag"],
          answer: 0,
          explain: "The **most negative** reduction potential means the greatest tendency to lose electrons, so **Li** is the strongest reducing agent."
        },
        {
          q: "The average oxidation number of iron in Fe₃O₄ is:",
          options: ["+2", "+3", "+8/3", "+4/3"],
          answer: 2,
          explain: "3x + 4(−2) = 0, so x = **+8/3**. (Fe₃O₄ actually contains one Fe²⁺ and two Fe³⁺.)"
        },
        {
          q: "In Cl₂ + 2NaBr → 2NaCl + Br₂, the oxidising agent is:",
          options: ["NaBr", "Cl₂", "NaCl", "Br₂"],
          answer: 1,
          explain: "**Cl₂** is reduced (0 → −1) by taking electrons from Br⁻, so it is the oxidising agent."
        }
      ]
    },

    // ------------------------------------------------------------------
    {
      id: "organic-chemistry-basic-principles",
      title: "Organic Chemistry – Some Basic Principles and Techniques",
      section: "Organic Chemistry",
      summary: "The foundation of organic chemistry: structures and classification of organic compounds, IUPAC naming, isomerism, electron displacement effects and reactive intermediates, and methods to purify and analyse organic compounds.",
      notes: [
        {
          heading: "Carbon, Structures and Classification",
          points: [
            "Carbon is **tetravalent**. In CH₄ it is sp³ (109.5°), in C₂H₄ sp² and in C₂H₂ sp. **s-character** rises from 25% (sp³) to 33% (sp²) to 50% (sp), making carbon more electronegative and bonds shorter.",
            "Structures can be written in complete, condensed (CH₃CH₂OH) or **bond-line** form (a zig-zag line where each corner and end is a carbon).",
            "Classification: **acyclic** (open chain), **alicyclic** (closed ring, e.g. cyclohexane), **aromatic** (benzene and its derivatives) and **heterocyclic** (ring containing O, N or S, e.g. furan, pyridine).",
            "A **functional group** decides the characteristic properties; members of a **homologous series** differ by –CH₂– (14 u)."
          ]
        },
        {
          heading: "IUPAC Nomenclature",
          points: [
            "Choose the **longest chain containing the functional group** and number it so the principal functional group gets the lowest locant, then multiple bonds, then substituents.",
            "Name = prefixes (substituents, in **alphabetical order**) + word root + primary suffix (-ane, -ene, -yne) + secondary suffix (functional group).",
            "Word roots: C1 meth, C2 eth, C3 prop, C4 but, C5 pent, C6 hex.",
            "Priority: **–COOH > –SO₃H > –COOR > –COCl > –CONH₂ > –CN > –CHO > >C=O > –OH > –NH₂ > C=C > C≡C**. Halo, nitro and alkoxy groups are always written as prefixes.",
            "Examples: CH₃CH(OH)CH₃ is **propan-2-ol**; CH₃COCH₂CH₃ is **butan-2-one**; CH₂=CHCH₂OH is **prop-2-en-1-ol**."
          ]
        },
        {
          heading: "Isomerism",
          points: [
            "**Chain isomers** differ in the carbon skeleton (butane and 2-methylpropane).",
            "**Position isomers** differ in the position of the functional group (propan-1-ol and propan-2-ol).",
            "**Functional group isomers** have different functional groups (ethanol C₂H₅OH and methoxymethane CH₃OCH₃).",
            "**Metamers** differ in the alkyl groups on either side of a functional group (ethoxyethane and methoxypropane).",
            "**Stereoisomers** have the same structure but a different arrangement of atoms in space: geometrical and optical isomers."
          ]
        },
        {
          heading: "Reaction Mechanism Basics",
          points: [
            "**Homolytic cleavage** gives free radicals; **heterolytic cleavage** gives a carbocation and a carbanion.",
            "Carbocations are sp² and planar. Stability: **3° > 2° > 1° > CH₃⁺**, because alkyl groups release electrons (+I effect) and allow **hyperconjugation**.",
            "**Electrophiles** are electron-seeking (H⁺, NO₂⁺, carbocations, BF₃); **nucleophiles** are electron-rich (OH⁻, CN⁻, NH₃, H₂O).",
            "**Inductive effect**: permanent shift of σ electrons; –NO₂, –CN, –COOH and halogens are –I; alkyl groups are +I.",
            "**Resonance (mesomeric) effect**: +R groups (–OH, –NH₂, –OR) push π electrons into the system; –R groups (–NO₂, –CHO, –COOH, –CN) withdraw them. The **electromeric effect** is temporary and appears only when a reagent attacks a multiple bond."
          ]
        },
        {
          heading: "Purification of Organic Compounds",
          points: [
            "**Sublimation** (camphor, naphthalene), **crystallisation** (difference in solubility) and **simple distillation** (large difference in boiling points).",
            "**Fractional distillation** separates liquids with close boiling points (crude oil); **distillation under reduced pressure** is for liquids that decompose at their boiling points (glycerol from spent lye).",
            "**Steam distillation** is for steam-volatile liquids immiscible with water, e.g. **aniline**; the mixture boils below 373 K.",
            "**Chromatography**: adsorption (column, thin-layer) and partition (paper). **Rf = distance moved by substance ÷ distance moved by solvent front**."
          ]
        },
        {
          heading: "Qualitative and Quantitative Analysis",
          points: [
            "**Lassaigne's test** (sodium fusion extract): nitrogen gives **Prussian blue** with FeSO₄ and acid; sulphur gives a **violet** colour with sodium nitroprusside; N and S together give a **blood-red** colour with Fe³⁺.",
            "Halogens: boil the extract with HNO₃, then add AgNO₃: **AgCl white** (soluble in NH₃), **AgBr pale yellow** (sparingly soluble), **AgI yellow** (insoluble).",
            "C and H are detected by heating with CuO: CO₂ turns lime water milky and water turns anhydrous CuSO₄ blue.",
            "Nitrogen is estimated by **Dumas method** (N₂ gas collected) or **Kjeldahl's method** (N converted to NH₃), which fails for nitro and azo compounds and N in rings (pyridine).",
            "**Carius method**: halogens are weighed as AgX and sulphur as BaSO₄."
          ]
        }
      ],
      formulas: [
        "Functional group priority: –COOH > –SO₃H > –COOR > –COCl > –CONH₂ > –CN > –CHO > >C=O > –OH > –NH₂ > C=C > C≡C",
        "Carbocation stability: 3° > 2° > 1° > CH₃⁺",
        "Rf = distance moved by substance ÷ distance moved by solvent front",
        "Na + C + N → NaCN (sodium fusion)",
        "6CN⁻ + Fe²⁺ → [Fe(CN)₆]⁴⁻",
        "3[Fe(CN)₆]⁴⁻ + 4Fe³⁺ → Fe₄[Fe(CN)₆]₃ (Prussian blue)",
        "% C = (12 × mass of CO₂ × 100) ÷ (44 × mass of compound)",
        "% H = (2 × mass of H₂O × 100) ÷ (18 × mass of compound)",
        "Dumas: % N = (28 × V × 100) ÷ (22400 × m), V = volume of N₂ at STP in mL",
        "Carius: % Cl = (35.5 × mass of AgCl × 100) ÷ (143.5 × mass of compound)",
        "Carius: % S = (32 × mass of BaSO₄ × 100) ÷ (233 × mass of compound)"
      ],
      terms: [
        { term: "Homologous series", meaning: "A series of compounds with the same functional group in which **successive members differ by –CH₂–**." },
        { term: "Functional group", meaning: "An atom or group of atoms that gives an organic compound its **characteristic chemical properties**, e.g. –OH, –COOH." },
        { term: "Electrophile", meaning: "An **electron-seeking** species that attacks electron-rich sites, e.g. NO₂⁺, H⁺, BF₃." },
        { term: "Nucleophile", meaning: "An **electron-rich, nucleus-seeking** species that donates an electron pair, e.g. OH⁻, CN⁻, NH₃." },
        { term: "Inductive effect", meaning: "**Permanent displacement of σ-bond electrons** along a carbon chain due to an electronegative or electropositive group." },
        { term: "Hyperconjugation", meaning: "Delocalisation of **σ electrons of a C–H bond** into an adjacent empty p orbital or π system; it stabilises carbocations and alkenes." }
      ],
      examples: [
        {
          q: "Write the IUPAC name of CH₃–CH(CH₃)–CH₂–CH(OH)–CH₃.",
          steps: [
            "Longest chain containing the –OH carbon: 5 carbons, so the root is pent and the compound is a pentanol",
            "Number from the right so that –OH gets the lowest locant: –OH is on C2",
            "The methyl branch is then on C4",
            "Assemble: prefix (4-methyl) + root (pentan) + suffix (-2-ol)"
          ],
          answer: "4-Methylpentan-2-ol"
        }
      ],
      qa: [
        {
          q: "Arrange (CH₃)₃C⁺, CH₃⁺, CH₃CH₂⁺ and (CH₃)₂CH⁺ in decreasing order of stability and explain.",
          a: "**(CH₃)₃C⁺ > (CH₃)₂CH⁺ > CH₃CH₂⁺ > CH₃⁺**. Alkyl groups release electrons by the **+I effect** and by **hyperconjugation** (more α-hydrogens means more hyperconjugative structures), which spreads out the positive charge. The 3° carbocation has three methyl groups (9 α-H), so it is the most stable."
        },
        {
          q: "Why is the sodium fusion extract boiled with dilute HNO₃ before testing for halogens with AgNO₃?",
          a: "If nitrogen or sulphur is present, the extract contains **NaCN or Na₂S**. These would react with AgNO₃ to give AgCN (white) or Ag₂S (black) and **interfere with the halogen test**. Boiling with HNO₃ decomposes them, removing HCN and H₂S as gases."
        },
        {
          q: "What is steam distillation? Give one example where it is used.",
          a: "Steam distillation is used for liquids that are **volatile in steam and immiscible with water**. Steam is passed through the mixture; it boils when the sum of the vapour pressures of the liquid and water equals atmospheric pressure, i.e. **below 373 K**, so the substance distils without decomposing. Example: separating **aniline** from an aniline–water mixture."
        }
      ],
      quiz: [
        {
          q: "The IUPAC name of CH₃–CH=CH–CH₂–CHO is:",
          options: ["pent-2-enal", "pent-3-enal", "pent-2-en-5-al", "but-2-enal"],
          answer: 1,
          explain: "The –CHO carbon is C1. Counting from it, the double bond is between C3 and C4, so the name is **pent-3-enal**."
        },
        {
          q: "Which carbocation is the most stable?",
          options: ["CH₃⁺", "CH₃CH₂⁺", "(CH₃)₃C⁺", "(CH₃)₂CH⁺"],
          answer: 2,
          explain: "The **tertiary** carbocation is stabilised most by +I effect and hyperconjugation from three methyl groups."
        },
        {
          q: "Which of the following is an electrophile?",
          options: ["BF₃", "NH₃", "OH⁻", "CN⁻"],
          answer: 0,
          explain: "**BF₃** has an electron-deficient boron and accepts an electron pair. The others donate electron pairs (nucleophiles)."
        },
        {
          q: "A Prussian blue colour in Lassaigne's test shows the presence of:",
          options: ["sulphur", "halogen", "phosphorus", "nitrogen"],
          answer: 3,
          explain: "NaCN from **nitrogen** forms [Fe(CN)₆]⁴⁻, which gives Prussian blue Fe₄[Fe(CN)₆]₃ with Fe³⁺."
        },
        {
          q: "Ethanol and methoxymethane are:",
          options: ["chain isomers", "functional group isomers", "position isomers", "metamers"],
          answer: 1,
          explain: "Both are C₂H₆O, but one is an **alcohol** and the other an **ether**: functional group isomers."
        },
        {
          q: "Kjeldahl's method can NOT be used to estimate nitrogen in:",
          options: ["acetamide", "aniline", "nitrobenzene", "urea"],
          answer: 2,
          explain: "Nitrogen of **nitro** and azo groups and of ring nitrogen (pyridine) is not converted to ammonium sulphate in Kjeldahl's method."
        }
      ]
    },

    // ------------------------------------------------------------------
    {
      id: "hydrocarbons",
      title: "Hydrocarbons",
      section: "Organic Chemistry",
      summary: "Preparation, properties and reactions of alkanes, alkenes, alkynes and aromatic hydrocarbons, including conformations of ethane, Markovnikov's rule and the peroxide effect, ozonolysis, acidity of alkynes, aromaticity and electrophilic substitution in benzene.",
      notes: [
        {
          heading: "Alkanes: Preparation",
          points: [
            "Alkanes (CₙH₂ₙ₊₂) are saturated; every carbon is sp³.",
            "**Catalytic hydrogenation** of alkenes or alkynes with finely divided Pt, Pd or Ni: CH₂=CH₂ + H₂ → CH₃–CH₃.",
            "**Wurtz reaction**: 2R–X + 2Na → R–R + 2NaX (dry ether). It gives alkanes with an **even number of carbons**; it is unsuitable for odd-carbon alkanes such as propane.",
            "**Decarboxylation**: sodium salt of a carboxylic acid + soda lime gives an alkane with **one carbon less**: CH₃COONa + NaOH → CH₄ + Na₂CO₃.",
            "**Kolbe's electrolysis** of sodium or potassium salts of carboxylic acids gives alkanes with an even number of carbons (ethane from sodium acetate)."
          ]
        },
        {
          heading: "Alkanes: Properties and Conformations",
          points: [
            "Alkanes are non-polar; boiling point rises with molar mass and falls with **branching**: n-pentane (309 K) > isopentane (301 K) > neopentane (282.5 K).",
            "**Free-radical halogenation** in UV light: CH₄ + Cl₂ → CH₃Cl + HCl. Reactivity of halogens F₂ > Cl₂ > Br₂ > I₂; ease of replacing H is 3° > 2° > 1°.",
            "**Combustion** releases a lot of heat: CH₄ + 2O₂ → CO₂ + 2H₂O, ΔcH° = −890 kJ mol⁻¹.",
            "**Aromatisation**: n-hexane over Cr₂O₃, V₂O₅ or Mo₂O₃ (on alumina) at 773 K and 10–20 atm gives benzene.",
            "Ethane has infinite **conformations** due to free rotation about the C–C bond: **staggered** (most stable) and **eclipsed** (least stable) differ by about **12.5 kJ mol⁻¹**, too little to isolate them."
          ]
        },
        {
          heading: "Alkenes",
          points: [
            "Alkenes (CₙH₂ₙ) have a C=C bond (1σ + 1π, 134 pm). But-2-ene shows **geometrical (cis–trans) isomerism**; the cis form is polar and has the higher boiling point.",
            "Preparation: alkynes with **Lindlar's catalyst** give **cis-alkenes**, with Na in liquid NH₃ give trans-alkenes; also dehydrohalogenation with alcoholic KOH and dehydration of alcohols with conc. H₂SO₄.",
            "**Markovnikov's rule**: in adding HX to an unsymmetrical alkene, the **negative part goes to the carbon with fewer H atoms**: propene + HBr → 2-bromopropane (via the more stable 2° carbocation).",
            "**Peroxide (Kharasch) effect**: with HBr in the presence of a peroxide, addition is **anti-Markovnikov** (free-radical): propene → 1-bromopropane. It works only with HBr.",
            "Tests for unsaturation: decolourises **Br₂ in CCl₄** (red-orange) and cold dilute alkaline KMnO₄ (**Baeyer's reagent**, pink colour disappears).",
            "**Ozonolysis** (O₃, then Zn/H₂O) cuts the C=C bond into two carbonyl compounds, which locates the double bond: propene gives ethanal + methanal."
          ]
        },
        {
          heading: "Alkynes",
          points: [
            "Alkynes (CₙH₂ₙ₋₂) have a C≡C bond (1σ + 2π, 120 pm); the sp carbons make them **linear**.",
            "Ethyne is made from calcium carbide: CaC₂ + 2H₂O → Ca(OH)₂ + C₂H₂.",
            "**Terminal alkynes are acidic**: H on an sp carbon (50% s-character) is acidic: 2HC≡CH + 2Na → 2HC≡C⁻Na⁺ + H₂. Acidity: HC≡CH > CH₂=CH₂ > CH₃–CH₃.",
            "**Hydration** with dil. H₂SO₄ and HgSO₄ at 333 K: ethyne gives **ethanal**; propyne gives **propanone**.",
            "**Cyclic polymerisation**: ethyne passed through a red-hot iron tube at 873 K forms **benzene**."
          ]
        },
        {
          heading: "Benzene and Aromaticity",
          points: [
            "In benzene all C–C bonds are equal (**139 pm**), between single and double bond lengths, because the 6 π electrons are **delocalised** (resonance hybrid of Kekulé structures).",
            "**Hückel rule**: a planar, cyclic, fully conjugated system with **(4n + 2) π electrons** is aromatic. Benzene has 6 π electrons (n = 1).",
            "Benzene prefers **electrophilic substitution**, which keeps the aromatic ring: nitration (conc. HNO₃ + conc. H₂SO₄ gives NO₂⁺), halogenation (Cl₂/anhydrous FeCl₃), sulphonation (fuming H₂SO₄).",
            "**Friedel–Crafts** alkylation (CH₃Cl/anhydrous AlCl₃ gives toluene) and acylation (CH₃COCl/anhydrous AlCl₃ gives acetophenone).",
            "Mechanism: (1) electrophile forms, (2) it attacks the ring to give a **carbocation (arenium ion)**, (3) loss of H⁺ restores aromaticity."
          ]
        },
        {
          heading: "Directive Influence and Carcinogenicity",
          points: [
            "**Ortho/para directors** (activating): –OH, –NH₂, –OCH₃, –CH₃, –NHCOCH₃. **Halogens** are ortho/para directing but **deactivating**.",
            "**Meta directors** (deactivating): –NO₂, –CN, –CHO, –COR, –COOH, –SO₃H.",
            "Polynuclear hydrocarbons with several fused benzene rings (e.g. benzopyrene) are **toxic and carcinogenic**; they form during incomplete burning of tobacco, coal and petroleum."
          ]
        }
      ],
      formulas: [
        "Wurtz: 2CH₃Br + 2Na → CH₃–CH₃ + 2NaBr (dry ether)",
        "Decarboxylation: CH₃COONa + NaOH → CH₄ + Na₂CO₃ (CaO, heat)",
        "Kolbe's electrolysis: 2CH₃COONa + 2H₂O → CH₃–CH₃ + 2CO₂ + H₂ + 2NaOH",
        "CH₄ + Cl₂ → CH₃Cl + HCl (UV light)",
        "Markovnikov: CH₃–CH=CH₂ + HBr → CH₃–CHBr–CH₃",
        "Peroxide effect: CH₃–CH=CH₂ + HBr → CH₃–CH₂–CH₂Br (benzoyl peroxide)",
        "Ozonolysis: CH₃–CH=CH₂ → CH₃CHO + HCHO ((i) O₃ (ii) Zn/H₂O)",
        "CaC₂ + 2H₂O → Ca(OH)₂ + C₂H₂",
        "HC≡CH + H₂O → CH₃CHO (dil. H₂SO₄, HgSO₄, 333 K)",
        "3HC≡CH → C₆H₆ (red-hot iron tube, 873 K)",
        "Nitration: C₆H₆ + HNO₃ → C₆H₅NO₂ + H₂O (conc. H₂SO₄)",
        "Friedel–Crafts alkylation: C₆H₆ + CH₃Cl → C₆H₅CH₃ + HCl (anhyd. AlCl₃)",
        "Friedel–Crafts acylation: C₆H₆ + CH₃COCl → C₆H₅COCH₃ + HCl (anhyd. AlCl₃)",
        "Hückel rule: aromatic if (4n + 2) π electrons"
      ],
      terms: [
        { term: "Conformations", meaning: "Different spatial arrangements of a molecule obtained by **rotation about a C–C single bond**, e.g. staggered and eclipsed ethane." },
        { term: "Markovnikov's rule", meaning: "In addition of HX to an unsymmetrical alkene, the **negative part adds to the carbon with fewer hydrogen atoms**." },
        { term: "Peroxide effect", meaning: "**Anti-Markovnikov** addition of HBr to an alkene in the presence of a peroxide, by a free-radical mechanism." },
        { term: "Ozonolysis", meaning: "Reaction of an alkene with **ozone followed by Zn/H₂O**, splitting it into aldehydes and/or ketones." },
        { term: "Aromaticity", meaning: "Extra stability of planar, cyclic, conjugated systems with **(4n + 2) π electrons** (Hückel rule)." },
        { term: "Electrophilic substitution", meaning: "Reaction in which an **electrophile replaces an H atom** of an aromatic ring, e.g. nitration of benzene." }
      ],
      examples: [
        {
          q: "An alkene A on ozonolysis gives a mixture of ethanal and pentan-3-one. Write the structure and IUPAC name of A.",
          steps: [
            "Ozonolysis replaces the C=C by two C=O groups, so join the two carbonyl carbons back with a double bond",
            "Ethanal is CH₃–CHO, so one part of A is CH₃–CH=",
            "Pentan-3-one is CH₃CH₂–CO–CH₂CH₃, so the other part is =C(CH₂CH₃)₂",
            "A = CH₃–CH=C(CH₂CH₃)–CH₂CH₃",
            "Longest chain with the double bond has 5 carbons; numbering from the left puts C=C at C2 and an ethyl group at C3"
          ],
          answer: "A is CH₃–CH=C(C₂H₅)–CH₂–CH₃, 3-ethylpent-2-ene"
        }
      ],
      qa: [
        {
          q: "Benzene is highly unsaturated, yet it does not undergo addition reactions easily. Why?",
          a: "The six π electrons of benzene are **delocalised** over the ring, giving it large **resonance (aromatic) stabilisation**. Addition would destroy this stable aromatic system, so benzene prefers **electrophilic substitution**, in which aromaticity is kept."
        },
        {
          q: "Explain why HBr adds to propene in the presence of benzoyl peroxide to give 1-bromopropane.",
          a: "The peroxide forms free radicals, which take H from HBr to give **Br•**. Br• adds to the terminal CH₂ of propene to form the **more stable secondary radical** CH₃–ĊH–CH₂Br. This radical takes H from HBr to give **1-bromopropane** and a new Br•. This anti-Markovnikov result is the **peroxide (Kharasch) effect**; it does not occur with HCl or HI."
        },
        {
          q: "Why is ethyne acidic while ethane is not? Write a reaction to show the acidity of ethyne.",
          a: "In ethyne, H is attached to an **sp carbon (50% s-character)**, which is more electronegative and holds the C–H bonding electrons closer, so H⁺ can be released. In ethane, carbon is sp³ (25% s-character) and the C–H bond is not acidic. Reaction: **2HC≡CH + 2Na → 2HC≡C⁻Na⁺ + H₂**."
        }
      ],
      quiz: [
        {
          q: "Addition of HBr to propene in the presence of benzoyl peroxide gives:",
          options: ["2-bromopropane", "1-bromopropane", "1,2-dibromopropane", "propan-2-ol"],
          answer: 1,
          explain: "The **peroxide effect** gives anti-Markovnikov addition by a free-radical mechanism, forming **1-bromopropane**."
        },
        {
          q: "The most stable conformation of ethane is:",
          options: ["eclipsed", "skew", "staggered", "boat"],
          answer: 2,
          explain: "In the **staggered** form the H atoms on the two carbons are farthest apart, so torsional strain is minimum."
        },
        {
          q: "Which species is aromatic?",
          options: ["Cyclopentadienyl anion", "Cyclooctatetraene", "Cyclohexa-1,3-diene", "Cyclobutadiene"],
          answer: 0,
          explain: "The **cyclopentadienyl anion** is planar, cyclic and fully conjugated with **6 π electrons** (4n + 2, n = 1)."
        },
        {
          q: "Hydration of propyne with dilute H₂SO₄ and HgSO₄ gives:",
          options: ["propanal", "propan-2-ol", "propan-1-ol", "propanone"],
          answer: 3,
          explain: "Water adds by Markovnikov's rule to give an enol, which changes to the ketone **propanone (CH₃COCH₃)**."
        },
        {
          q: "Which group is meta-directing in electrophilic substitution of benzene?",
          options: ["–OH", "–CH₃", "–NO₂", "–Cl"],
          answer: 2,
          explain: "**–NO₂** withdraws electrons from the ring (deactivating) and directs incoming groups to the **meta** position. –Cl is deactivating but ortho/para directing."
        },
        {
          q: "Which alkane cannot be prepared in good yield by the Wurtz reaction?",
          options: ["Ethane", "Propane", "Butane", "Hexane"],
          answer: 1,
          explain: "Wurtz reaction joins two identical alkyl groups, giving even-carbon alkanes. **Propane** would need CH₃X + C₂H₅X, which gives a mixture of ethane, propane and butane."
        }
      ]
    }
  ]
});
