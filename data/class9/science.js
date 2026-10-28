StudyData.add(9, "science", {
  // What this content follows. match: "textbook" | "older-book" | "topic". Set reviewed to a date once a teacher has checked it.
  syllabus: {board: "CBSE", match: "textbook", books: ["Science"], reviewed: false},
  chapters: [
    // ------------------------------------------------------------------
    {
      id: "matter-in-our-surroundings",
      title: "Matter in Our Surroundings",
      section: "Chemistry",
      summary: "Matter is made of tiny particles that keep moving and attract each other. This chapter covers the three states of matter, how they change into one another, latent heat and evaporation.",
      notes: [
        {
          heading: "Characteristics of Particles of Matter",
          points: [
            "Anything that has **mass** and occupies **space** (volume) is matter.",
            "Particles of matter have **spaces between them**: salt or sugar dissolves in water because its particles get into the spaces between water particles.",
            "Particles are **continuously moving**, i.e. they have kinetic energy, which **increases with temperature**.",
            "Particles **attract each other**; the force of attraction is strongest in solids and weakest in gases.",
            "**Diffusion** is the intermixing of particles of two different types of matter on their own; it is fastest in gases and becomes faster on heating."
          ]
        },
        {
          heading: "Solids, Liquids and Gases",
          points: [
            "**Solids** have a definite shape, distinct boundaries and fixed volume; they are rigid and have negligible compressibility.",
            "**Liquids** have a fixed volume but no fixed shape; they flow and take the shape of the container.",
            "**Gases** have neither fixed shape nor fixed volume and are **highly compressible**, which is why LPG and CNG can be stored in cylinders.",
            "Gas particles move randomly at high speed and hit the walls of the container, so gases exert **pressure**.",
            "A sponge is a solid even though it can be pressed: it has tiny holes filled with air, which is pushed out on pressing."
          ]
        },
        {
          heading: "Change of State with Temperature",
          points: [
            "**Melting point**: temperature at which a solid melts to a liquid at atmospheric pressure; for ice it is **273.15 K (0 °C)**.",
            "**Boiling point**: temperature at which a liquid starts boiling at atmospheric pressure; for water it is **373 K (100 °C)**.",
            "**Latent heat of fusion**: heat needed to change 1 kg of a solid into liquid at atmospheric pressure at its melting point.",
            "**Latent heat of vaporisation**: heat needed to change 1 kg of a liquid into gas at atmospheric pressure at its boiling point.",
            "During melting and boiling the **temperature stays constant**, because the heat supplied is used to overcome the forces of attraction between particles.",
            "**Sublimation**: a solid changing directly into vapour (and vapour directly into solid, called **deposition**) without becoming liquid, e.g. camphor, naphthalene, ammonium chloride."
          ]
        },
        {
          heading: "Effect of Pressure",
          points: [
            "Applying pressure and lowering temperature brings particles closer and can **liquefy gases**.",
            "Solid CO₂ is called **dry ice**; when pressure is lowered to 1 atmosphere it changes directly into CO₂ gas.",
            "SI unit of pressure is the **pascal (Pa)**; 1 atmosphere (atm) = 1.01 × 10⁵ Pa. Atmospheric pressure at sea level is 1 atm.",
            "So the state of a substance depends on both **temperature and pressure**."
          ]
        },
        {
          heading: "Evaporation and Cooling",
          points: [
            "**Evaporation**: change of a liquid into vapour at any temperature **below its boiling point**; it is a **surface phenomenon**.",
            "Rate of evaporation **increases** with larger surface area, higher temperature, higher wind speed and **lower humidity**.",
            "Evaporation **causes cooling**: the escaping particles take energy from the liquid and its surroundings.",
            "Examples: water in an earthen pot (matka) stays cool; we wear **cotton clothes in summer** as cotton absorbs sweat and lets it evaporate; acetone on the palm feels cold.",
            "Water droplets appear on the outside of a glass of ice-cold water because water vapour in the air **condenses** on the cold surface."
          ]
        }
      ],
      formulas: [
        "Temperature in kelvin: T(K) = T(°C) + 273 (more precisely 273.15)",
        "T(°C) = T(K) − 273",
        "1 atm = 1.01 × 10⁵ Pa",
        "Melting point of ice = 273.15 K (0 °C); boiling point of water = 373 K (100 °C) at 1 atm"
      ],
      terms: [
        { term: "Diffusion", meaning: "Intermixing of particles of two different types of matter on their own, due to the motion of their particles." },
        { term: "Latent heat of vaporisation", meaning: "Heat energy required to change **1 kg of a liquid into gas** at atmospheric pressure at its boiling point." },
        { term: "Latent heat of fusion", meaning: "Heat energy required to change **1 kg of a solid into liquid** at atmospheric pressure at its melting point." },
        { term: "Sublimation", meaning: "Direct change of a solid into vapour without passing through the liquid state, e.g. camphor." },
        { term: "Evaporation", meaning: "Change of a liquid into vapour at any temperature **below its boiling point**; it takes place at the surface." },
        { term: "Humidity", meaning: "The amount of water vapour present in the air. Higher humidity **slows down** evaporation." }
      ],
      qa: [
        {
          q: "Why does a desert cooler cool better on a hot, dry day?",
          a: "On a hot, dry day the **temperature is high and humidity is low**, so water evaporates faster from the cooler pads. Faster evaporation takes more heat from the air passing through, so the air is cooled more."
        },
        {
          q: "Why does steam at 100 °C cause more severe burns than boiling water at 100 °C?",
          a: "Steam has absorbed extra energy as the **latent heat of vaporisation**, so its particles have more energy than water particles at the same temperature. When steam condenses on the skin it releases this extra heat, causing more severe burns."
        },
        {
          q: "Convert (a) 300 K and (b) 573 K into degree Celsius.",
          a: "T(°C) = T(K) − 273. So (a) 300 K = 300 − 273 = **27 °C** and (b) 573 K = 573 − 273 = **300 °C**."
        }
      ],
      quiz: [
        {
          q: "The temperature of ice does not rise while it is melting because the heat supplied is:",
          options: ["lost to the surroundings as soon as it is supplied", "used to overcome the forces of attraction between particles", "used only to increase the speed of the particles", "absorbed by the container holding the ice"],
          answer: 1,
          explain: "This hidden heat (**latent heat of fusion**) breaks the forces of attraction between particles, so the temperature stays at 0 °C until all the ice melts."
        },
        {
          q: "Which of the following will increase the rate of evaporation of water from a wet cloth?",
          options: ["Folding the cloth", "Increasing the humidity of the air", "Spreading the cloth out in a breeze", "Keeping it in a cool, closed room"],
          answer: 2,
          explain: "Spreading increases the **surface area** and the breeze increases **wind speed**; both speed up evaporation."
        },
        {
          q: "What is 25 °C on the Kelvin scale?",
          options: ["298 K", "248 K", "273 K", "25 K"],
          answer: 0,
          explain: "T(K) = T(°C) + 273 = 25 + 273 = **298 K**."
        },
        {
          q: "Diffusion is fastest in:",
          options: ["solids", "liquids", "gases", "all three states at the same rate"],
          answer: 2,
          explain: "Gas particles move fastest and have the **largest spaces** between them, so they intermix fastest."
        },
        {
          q: "Which of these substances sublimes on heating?",
          options: ["Common salt", "Sugar", "Wax", "Camphor"],
          answer: 3,
          explain: "**Camphor** changes directly from solid to vapour. Salt, sugar and wax melt first."
        },
        {
          q: "Gases can be compressed easily because:",
          options: ["their particles have large spaces between them", "their particles are very heavy", "their particles do not move", "their particles attract each other strongly"],
          answer: 0,
          explain: "The **large spaces** between gas particles allow them to be pushed closer together."
        }
      ]
    },

    // ------------------------------------------------------------------
    {
      id: "is-matter-around-us-pure",
      title: "Is Matter Around Us Pure?",
      section: "Chemistry",
      summary: "Matter can be a pure substance (an element or a compound) or a mixture. This chapter covers solutions, suspensions and colloids, the concentration of a solution, and physical and chemical changes.",
      notes: [
        {
          heading: "Pure Substances and Mixtures",
          points: [
            "A **pure substance** has particles of only one kind with the same chemical nature throughout; it is either an element or a compound.",
            "A **mixture** contains two or more substances in any proportion; each component keeps its own properties.",
            "**Homogeneous mixture**: uniform composition throughout, e.g. salt in water, sugar in water, air.",
            "**Heterogeneous mixture**: non-uniform composition with visible boundaries, e.g. sand and iron filings, oil and water."
          ]
        },
        {
          heading: "Solutions",
          points: [
            "A **solution** is a homogeneous mixture; the component present in larger amount is the **solvent** and the one dissolved in it is the **solute**.",
            "Examples: sugar in water (solid in liquid), tincture of iodine (iodine in alcohol), aerated drinks (CO₂ gas in water), air (gases in gas), brass (solid in solid).",
            "Particles of a solution are smaller than **1 nm (10⁻⁹ m)**; they cannot be seen, do not scatter light, do not settle and cannot be filtered out. A solution is stable.",
            "A **saturated solution** cannot dissolve any more solute at that temperature; the amount of solute in it is the **solubility**.",
            "**Alloys** are mixtures of metals (or a metal and a non-metal) that cannot be separated by physical methods, e.g. brass is about 30% zinc and 70% copper."
          ]
        },
        {
          heading: "Concentration of a Solution",
          points: [
            "**Concentration** is the amount of solute present in a given amount (mass or volume) of solution.",
            "Mass by mass percentage = (mass of solute ÷ mass of solution) × 100.",
            "Mass by volume percentage = (mass of solute ÷ volume of solution) × 100.",
            "Remember: mass of solution = mass of solute + mass of solvent. A common mistake is dividing by the mass of solvent only."
          ]
        },
        {
          heading: "Suspensions and Colloids",
          points: [
            "**Suspension**: a heterogeneous mixture in which solid particles do not dissolve but stay spread out, e.g. chalk in water, muddy water. Particles are visible, scatter light and **settle on standing**.",
            "**Colloid**: a heterogeneous mixture whose particles are too small to be seen individually but big enough to **scatter light**, e.g. milk, fog, smoke, jelly.",
            "Scattering of a beam of light by colloid particles is the **Tyndall effect**. Colloid particles do not settle and cannot be filtered, but can be separated by **centrifugation**.",
            "A colloid has a **dispersed phase** (the scattered particles) and a **dispersion medium** (the substance they are spread in).",
            "Types: aerosol (fog: liquid in gas; smoke: solid in gas), emulsion (milk: liquid in liquid), foam (shaving cream: gas in liquid), gel (jelly, cheese: liquid in solid), sol (milk of magnesia: solid in liquid)."
          ]
        },
        {
          heading: "Physical and Chemical Changes",
          points: [
            "**Physical change**: no new substance is formed and the chemical composition stays the same, e.g. melting of ice, boiling of water, dissolving salt.",
            "**Chemical change**: a new substance with different properties is formed, e.g. rusting of iron, cooking of food, burning of paper.",
            "Burning of a candle involves both: melting of wax is physical, while burning of wax vapour is chemical."
          ]
        },
        {
          heading: "Elements and Compounds",
          points: [
            "An **element** is a basic form of matter that cannot be broken into simpler substances by chemical reactions. Elements are metals, non-metals or metalloids.",
            "**Metals** are lustrous, malleable, ductile and good conductors; **mercury** is the only metal that is liquid at room temperature.",
            "**Non-metals** are usually dull, not malleable and poor conductors; **bromine** is the only non-metal that is liquid at room temperature. **Metalloids** (boron, silicon, germanium) show intermediate properties.",
            "A **compound** forms when two or more elements combine chemically in a **fixed proportion**; its properties differ from those of its elements, e.g. iron sulphide (FeS) from iron and sulphur.",
            "Mixture vs compound: a mixture has variable composition and can be separated by physical methods; a compound has fixed composition and can be broken down only by chemical or electrochemical reactions."
          ]
        }
      ],
      formulas: [
        "Mass by mass percentage = (Mass of solute ÷ Mass of solution) × 100",
        "Mass by volume percentage = (Mass of solute ÷ Volume of solution) × 100",
        "Mass of solution = Mass of solute + Mass of solvent"
      ],
      terms: [
        { term: "Solution", meaning: "A **homogeneous mixture** of two or more substances, made of a solute dissolved in a solvent." },
        { term: "Saturated solution", meaning: "A solution in which **no more solute can dissolve** at a given temperature." },
        { term: "Solubility", meaning: "The amount of solute present in a **saturated solution** at a given temperature." },
        { term: "Tyndall effect", meaning: "**Scattering of a beam of light** by the particles of a colloid, which makes the path of the beam visible." },
        { term: "Dispersed phase", meaning: "The solute-like particles of a colloid, spread through the **dispersion medium**." },
        { term: "Alloy", meaning: "A mixture of two or more metals, or a metal and a non-metal, e.g. **brass** (copper + zinc)." }
      ],
      examples: [
        {
          q: "A solution contains 40 g of common salt in 320 g of water. Calculate its concentration as mass by mass percentage.",
          steps: [
            "Mass of solute (salt) = 40 g; mass of solvent (water) = 320 g",
            "Mass of solution = 40 g + 320 g = 360 g",
            "Mass percentage = (40 ÷ 360) × 100 = 11.1%"
          ],
          answer: "Concentration = 11.1% (mass by mass)"
        }
      ],
      qa: [
        {
          q: "How can you tell a colloid from a true solution using a torch?",
          a: "Pass a beam of light through both in a dark room. In the colloid the path of the beam becomes visible because its particles **scatter light (Tyndall effect)**. In a true solution the path is not visible because its particles are too small to scatter light."
        },
        {
          q: "Give two differences between a mixture and a compound.",
          a: "(1) In a mixture the components are present in **any proportion**; in a compound the elements combine in a **fixed proportion by mass**. (2) A mixture shows the properties of its components and can be separated by **physical methods**; a compound has new properties and can be broken down only by **chemical or electrochemical reactions**."
        },
        {
          q: "Classify as physical or chemical change: (a) cooking of food (b) freezing of water (c) rusting of an iron almirah (d) dissolving sugar in water.",
          a: "**Physical changes**: (b) freezing of water and (d) dissolving sugar in water. **Chemical changes**: (a) cooking of food and (c) rusting of iron, because new substances are formed."
        }
      ],
      quiz: [
        {
          q: "Which of the following is a homogeneous mixture?",
          options: ["Sugar dissolved in water", "Sand in water", "Oil in water", "Chalk powder in water"],
          answer: 0,
          explain: "Sugar solution has the **same composition throughout**. The others show visible boundaries or settle."
        },
        {
          q: "The Tyndall effect is shown by:",
          options: ["salt solution", "copper sulphate solution", "milk", "sugar solution"],
          answer: 2,
          explain: "**Milk** is a colloid (emulsion); its particles scatter light. The other three are true solutions."
        },
        {
          q: "Brass is an example of a:",
          options: ["compound of copper and zinc", "homogeneous mixture of copper and zinc", "heterogeneous mixture of copper and zinc", "pure element"],
          answer: 1,
          explain: "Brass is an **alloy**, a homogeneous mixture of about 70% copper and 30% zinc. It is not a compound because the proportion can vary."
        },
        {
          q: "20 g of glucose is dissolved in 180 g of water. The concentration (mass by mass percentage) of the solution is:",
          options: ["11.1%", "20%", "9%", "10%"],
          answer: 3,
          explain: "Mass of solution = 20 + 180 = 200 g. Percentage = (20 ÷ 200) × 100 = **10%**. Dividing by 180 (mass of water) gives the wrong answer 11.1%."
        },
        {
          q: "Which of the following is a chemical change?",
          options: ["Melting of wax", "Dissolving salt in water", "Evaporation of water", "Rusting of iron"],
          answer: 3,
          explain: "Rusting forms a **new substance** (hydrated iron oxide). The others are physical changes."
        },
        {
          q: "Smoke is a colloid in which the dispersed phase and dispersion medium are:",
          options: ["solid in gas", "liquid in gas", "gas in liquid", "solid in liquid"],
          answer: 0,
          explain: "Smoke is an **aerosol** of tiny solid particles dispersed in air (gas). Fog is liquid in gas."
        }
      ]
    },

    // ------------------------------------------------------------------
    {
      id: "atoms-and-molecules",
      title: "Atoms and Molecules",
      section: "Chemistry",
      summary: "Matter is made of atoms and molecules. This chapter covers the laws of chemical combination, Dalton's atomic theory, atomic and molecular masses, ions, writing chemical formulae and the mole concept.",
      notes: [
        {
          heading: "Laws of Chemical Combination",
          points: [
            "**Law of conservation of mass** (Lavoisier): mass can neither be created nor destroyed in a chemical reaction; total mass of reactants = total mass of products.",
            "**Law of constant proportions** (Proust): in a chemical substance the elements are always present in **definite proportions by mass**.",
            "Examples: in water, hydrogen : oxygen = **1 : 8** by mass; in ammonia (NH₃), nitrogen : hydrogen = **14 : 3** by mass.",
            "**Dalton's atomic theory**: all matter is made of tiny particles called atoms, which can neither be created nor destroyed in a chemical reaction.",
            "Atoms of a given element are identical in mass and chemical properties; atoms of different elements differ. Atoms combine in **small whole-number ratios** to form compounds."
          ]
        },
        {
          heading: "Atoms and Atomic Mass",
          points: [
            "Atoms are extremely small; atomic radius is measured in **nanometres** (1 nm = 10⁻⁹ m).",
            "Symbols use one or two letters, the first always capital: H, O, Ca. Some come from Latin names: **Na** (sodium, natrium), **K** (potassium, kalium), **Fe** (iron, ferrum).",
            "**Atomic mass unit (u)** = 1/12th of the mass of one atom of **carbon-12**.",
            "Atomic masses to remember: H = 1 u, C = 12 u, N = 14 u, O = 16 u, Na = 23 u, Mg = 24 u, S = 32 u, Cl = 35.5 u, Ca = 40 u."
          ]
        },
        {
          heading: "Molecules and Ions",
          points: [
            "A **molecule** is the smallest particle of an element or compound that can exist independently and shows all its properties.",
            "**Atomicity** is the number of atoms in a molecule: He, Ar (monoatomic); H₂, O₂, N₂, Cl₂ (diatomic); O₃ (triatomic); P₄ (tetra-atomic); S₈ (poly-atomic).",
            "An **ion** is a charged particle: positive ions are **cations** (Na⁺, Mg²⁺) and negative ions are **anions** (Cl⁻, O²⁻).",
            "A charged group of atoms is a **polyatomic ion**, e.g. NH₄⁺, OH⁻, NO₃⁻, CO₃²⁻, SO₄²⁻.",
            "Compounds of metals with non-metals are made of ions (**ionic compounds**), e.g. NaCl contains Na⁺ and Cl⁻."
          ]
        },
        {
          heading: "Writing Chemical Formulae",
          points: [
            "**Valency** is the combining capacity of an element (or polyatomic ion).",
            "Write the symbol of the metal (cation) first, then the non-metal (anion), and **criss-cross the valencies**; the charges must balance.",
            "Use brackets when more than one polyatomic ion is needed: Ca(OH)₂, Al₂(SO₄)₃, (NH₄)₂SO₄.",
            "Examples: aluminium oxide Al₂O₃, magnesium chloride MgCl₂, calcium oxide CaO, sodium carbonate Na₂CO₃."
          ]
        },
        {
          heading: "Molecular Mass and Formula Unit Mass",
          points: [
            "**Molecular mass** = sum of the atomic masses of all atoms in a molecule, in u. E.g. H₂O = 2 × 1 + 16 = 18 u.",
            "**Formula unit mass** is used for ionic compounds, e.g. NaCl = 23 + 35.5 = 58.5 u.",
            "More examples: CO₂ = 12 + 2 × 16 = 44 u; HNO₃ = 1 + 14 + 3 × 16 = 63 u; CaCl₂ = 40 + 2 × 35.5 = 111 u."
          ]
        },
        {
          heading: "Mole Concept",
          points: [
            "One **mole** of any species (atoms, molecules or ions) contains **6.022 × 10²³** particles; this number is the **Avogadro constant (N₀)**.",
            "**Molar mass** is the mass of 1 mole in grams; it is numerically equal to the atomic or molecular mass in u. E.g. molar mass of H₂O = 18 g.",
            "Number of moles n = given mass (m) ÷ molar mass (M) = number of particles (N) ÷ N₀."
          ]
        }
      ],
      formulas: [
        "Law of conservation of mass: total mass of reactants = total mass of products",
        "Mass ratio in water H : O = 1 : 8; in ammonia N : H = 14 : 3",
        "1 u = 1/12 × mass of one carbon-12 atom",
        "Molecular mass = sum of atomic masses of all atoms in the molecule",
        "Avogadro constant N₀ = 6.022 × 10²³ per mole",
        "Number of moles n = m ÷ M = N ÷ N₀"
      ],
      terms: [
        { term: "Atomic mass unit (u)", meaning: "A mass equal to **1/12th of the mass of one carbon-12 atom**." },
        { term: "Atomicity", meaning: "The number of atoms in one molecule of an element, e.g. O₃ has atomicity 3." },
        { term: "Ion", meaning: "A charged atom or group of atoms; positive ions are **cations**, negative ions are **anions**." },
        { term: "Valency", meaning: "The **combining capacity** of an element or polyatomic ion." },
        { term: "Mole", meaning: "The amount of substance containing **6.022 × 10²³** particles (atoms, molecules or ions)." },
        { term: "Molar mass", meaning: "Mass of one mole of a substance in grams, numerically equal to its atomic or molecular mass in u." }
      ],
      examples: [
        {
          q: "Calculate the molecular mass of sulphuric acid, H₂SO₄. (H = 1 u, S = 32 u, O = 16 u)",
          steps: [
            "2 atoms of H = 2 × 1 = 2 u",
            "1 atom of S = 1 × 32 = 32 u",
            "4 atoms of O = 4 × 16 = 64 u",
            "Molecular mass = 2 + 32 + 64 = 98 u"
          ],
          answer: "Molecular mass of H₂SO₄ = 98 u"
        },
        {
          q: "How many moles and how many molecules are present in 36 g of water? (H = 1 u, O = 16 u, N₀ = 6.022 × 10²³)",
          steps: [
            "Molar mass of H₂O = 2 × 1 + 16 = 18 g",
            "Number of moles n = m ÷ M = 36 ÷ 18 = 2 mol",
            "Number of molecules N = n × N₀ = 2 × 6.022 × 10²³ = 12.044 × 10²³",
            "= 1.2044 × 10²⁴ molecules"
          ],
          answer: "2 moles, i.e. 1.2044 × 10²⁴ molecules of water"
        }
      ],
      qa: [
        {
          q: "5.3 g of sodium carbonate reacted with 6 g of ethanoic acid to give 2.2 g of carbon dioxide, 0.9 g of water and 8.2 g of sodium ethanoate. Show that this agrees with the law of conservation of mass.",
          a: "Mass of reactants = 5.3 + 6 = **11.3 g**. Mass of products = 2.2 + 0.9 + 8.2 = **11.3 g**. Since the total mass of reactants equals the total mass of products, the law of conservation of mass is obeyed."
        },
        {
          q: "Hydrogen and oxygen combine in the ratio 1 : 8 by mass to form water. What mass of oxygen is needed to react completely with 3 g of hydrogen?",
          a: "1 g of hydrogen reacts with 8 g of oxygen. So 3 g of hydrogen needs 3 × 8 = **24 g of oxygen**."
        },
        {
          q: "Write the chemical formulae of (a) aluminium sulphate (b) calcium hydroxide (c) sodium oxide.",
          a: "(a) Al³⁺ and SO₄²⁻ criss-cross to give **Al₂(SO₄)₃**. (b) Ca²⁺ and OH⁻ give **Ca(OH)₂**. (c) Na⁺ and O²⁻ give **Na₂O**."
        }
      ],
      quiz: [
        {
          q: "The formula unit mass of calcium chloride (CaCl₂) is: (Ca = 40 u, Cl = 35.5 u)",
          options: ["75.5 u", "111 u", "71 u", "222 u"],
          answer: 1,
          explain: "CaCl₂ = 40 + 2 × 35.5 = 40 + 71 = **111 u**. 75.5 u forgets that there are two chlorine atoms."
        },
        {
          q: "The atomicity of ozone (O₃) is:",
          options: ["1", "2", "3", "4"],
          answer: 2,
          explain: "One ozone molecule has **3 oxygen atoms**, so it is triatomic."
        },
        {
          q: "Which law states that a chemical compound always contains the same elements combined in the same proportion by mass?",
          options: ["Law of constant proportions", "Law of conservation of mass", "Avogadro's law", "Law of multiple proportions"],
          answer: 0,
          explain: "Proust's **law of constant proportions**, e.g. water always has H : O = 1 : 8 by mass."
        },
        {
          q: "The correct formula of aluminium oxide is:",
          options: ["AlO", "Al₃O₂", "AlO₃", "Al₂O₃"],
          answer: 3,
          explain: "Al has valency 3 and O has valency 2; criss-crossing gives **Al₂O₃** (2 × 3 = 3 × 2 = 6)."
        },
        {
          q: "The number of molecules in 0.5 mole of CO₂ is:",
          options: ["6.022 × 10²³", "3.011 × 10²³", "1.2044 × 10²⁴", "0.5 × 10²³"],
          answer: 1,
          explain: "N = n × N₀ = 0.5 × 6.022 × 10²³ = **3.011 × 10²³** molecules."
        },
        {
          q: "One atomic mass unit (1 u) is defined as:",
          options: ["the mass of one hydrogen atom", "1/16th of the mass of one oxygen atom", "the mass of one proton", "1/12th of the mass of one carbon-12 atom"],
          answer: 3,
          explain: "Carbon-12 is the reference: **1 u = 1/12 of the mass of one C-12 atom**."
        }
      ]
    },

    // ------------------------------------------------------------------
    {
      id: "structure-of-the-atom",
      title: "Structure of the Atom",
      section: "Chemistry",
      summary: "Atoms are made of electrons, protons and neutrons. This chapter covers the atomic models of Thomson, Rutherford and Bohr, distribution of electrons, valency, atomic and mass numbers, isotopes and isobars.",
      notes: [
        {
          heading: "Sub-atomic Particles",
          points: [
            "**Electrons** (e⁻) were identified by **J.J. Thomson**; charge −1, mass about 1/2000 of a proton (taken as negligible).",
            "**Protons** (p⁺) were found by **E. Goldstein** through **canal rays** (1886); charge +1, mass 1 u.",
            "**Neutrons** (n) were discovered by **J. Chadwick** (1932); no charge, mass nearly equal to a proton. They are absent in the ordinary hydrogen atom (protium)."
          ]
        },
        {
          heading: "Thomson's and Rutherford's Models",
          points: [
            "**Thomson's model** (like a Christmas pudding or watermelon): a positively charged sphere with electrons embedded in it; the atom is electrically neutral.",
            "**Rutherford's α-particle scattering experiment**: fast-moving α-particles were directed at a very thin **gold foil**.",
            "Observations: most α-particles passed straight through, some were deflected by small angles, and very few (about **1 in 12,000**) bounced back.",
            "Conclusions: most of the atom is **empty space**; the positive charge and almost all the mass are in a tiny **nucleus**; electrons revolve around it.",
            "Drawback: a revolving electron should lose energy and fall into the nucleus, making the atom unstable, which does not happen."
          ]
        },
        {
          heading: "Bohr's Model",
          points: [
            "Electrons revolve only in certain special orbits called **discrete orbits** or **energy levels (shells)**.",
            "While revolving in these orbits, electrons **do not radiate energy**, so the atom is stable.",
            "Shells are named **K, L, M, N…** or numbered n = 1, 2, 3, 4… starting from the nucleus."
          ]
        },
        {
          heading: "Distribution of Electrons and Valency",
          points: [
            "Maximum electrons in a shell = **2n²**: K = 2, L = 8, M = 18, N = 32. The outermost shell can hold at most **8 electrons**.",
            "Shells fill **step-wise**: an outer shell is filled only after the inner ones are filled.",
            "Examples: Na (11) = 2, 8, 1; Cl (17) = 2, 8, 7; Ar (18) = 2, 8, 8; Ca (20) = 2, 8, 8, 2.",
            "Electrons in the outermost shell are **valence electrons**; atoms with a full outer shell (octet, or duplet for He) are inert with valency 0.",
            "Valency = valence electrons (if 1 to 4), otherwise 8 − valence electrons. E.g. Na = 1, Mg = 2, Cl = 8 − 7 = 1, O = 8 − 6 = 2."
          ]
        },
        {
          heading: "Atomic Number, Mass Number, Isotopes and Isobars",
          points: [
            "**Atomic number (Z)** = number of protons; it identifies the element.",
            "**Mass number (A)** = protons + neutrons (together called **nucleons**). Number of neutrons = A − Z. E.g. ¹⁴₇N has 7 protons and 7 neutrons.",
            "**Isotopes**: atoms of the same element with the **same atomic number** but **different mass numbers**, e.g. ¹₁H (protium), ²₁H (deuterium), ³₁H (tritium); ³⁵₁₇Cl and ³⁷₁₇Cl.",
            "Isotopes have the **same chemical properties** but different physical properties. Uses: an isotope of uranium as nuclear fuel, of cobalt to treat cancer, of iodine to treat goitre.",
            "**Isobars**: atoms of different elements with the **same mass number** but different atomic numbers, e.g. ⁴⁰₂₀Ca and ⁴⁰₁₈Ar.",
            "Chlorine's atomic mass is **35.5 u** because natural chlorine has ³⁵Cl and ³⁷Cl in the ratio 3 : 1."
          ]
        }
      ],
      formulas: [
        "Maximum electrons in shell n = 2n²",
        "Mass number A = number of protons + number of neutrons",
        "Number of neutrons = A − Z",
        "Valency = valence electrons (1 to 4) or 8 − valence electrons (5 to 8)",
        "Average atomic mass of Cl = (35 × 75 + 37 × 25) ÷ 100 = 35.5 u"
      ],
      terms: [
        { term: "Nucleus", meaning: "The tiny, dense, positively charged centre of an atom containing **protons and neutrons**." },
        { term: "Valence electrons", meaning: "Electrons in the **outermost shell** of an atom; they decide its chemical properties and valency." },
        { term: "Atomic number (Z)", meaning: "The **number of protons** in the nucleus of an atom." },
        { term: "Mass number (A)", meaning: "The total number of **protons and neutrons** in the nucleus." },
        { term: "Isotopes", meaning: "Atoms of the same element with the **same atomic number but different mass numbers**." },
        { term: "Isobars", meaning: "Atoms of different elements with the **same mass number but different atomic numbers**." }
      ],
      examples: [
        {
          q: "The average atomic mass of a sample of element X is 16.2 u. What are the percentages of its isotopes ¹⁶₈X and ¹⁸₈X?",
          steps: [
            "Let the percentage of ¹⁶₈X be x; then ¹⁸₈X is (100 − x)",
            "Average mass = [16x + 18(100 − x)] ÷ 100 = 16.2",
            "16x + 1800 − 18x = 1620",
            "2x = 180, so x = 90"
          ],
          answer: "¹⁶₈X = 90% and ¹⁸₈X = 10%"
        }
      ],
      qa: [
        {
          q: "What were the conclusions of Rutherford's α-particle scattering experiment?",
          a: "(1) Most of the space inside an atom is **empty**, since most α-particles passed straight through. (2) The positive charge occupies very little space, since very few particles were deflected. (3) All the positive charge and nearly all the mass are concentrated in a very small **nucleus**, since about 1 in 12,000 particles bounced back."
        },
        {
          q: "Why do isotopes of an element have the same chemical properties?",
          a: "Chemical properties depend on the number of **valence electrons**, which depends on the atomic number. Isotopes have the **same atomic number**, so they have the same electronic configuration and the same chemical properties."
        },
        {
          q: "Write the electronic configuration and valency of magnesium (Z = 12) and sulphur (Z = 16).",
          a: "Magnesium: **2, 8, 2**; it loses 2 electrons, so valency = **2**. Sulphur: **2, 8, 6**; it needs 2 more electrons, so valency = 8 − 6 = **2**."
        }
      ],
      quiz: [
        {
          q: "Who discovered the neutron?",
          options: ["J.J. Thomson", "E. Goldstein", "Ernest Rutherford", "J. Chadwick"],
          answer: 3,
          explain: "**J. Chadwick** discovered the neutron in 1932. Thomson found the electron and Goldstein found canal rays (protons)."
        },
        {
          q: "In Rutherford's experiment, a very few α-particles bounced back. This showed that:",
          options: ["the positive charge and mass of the atom are concentrated in a tiny nucleus", "electrons are spread evenly through the atom", "most of the atom is filled with positive charge", "atoms cannot be divided"],
          answer: 0,
          explain: "Only a small, dense, positive **nucleus** could repel α-particles straight back."
        },
        {
          q: "The maximum number of electrons that the M shell can hold is:",
          options: ["8", "2", "18", "32"],
          answer: 2,
          explain: "M is the third shell (n = 3): 2n² = 2 × 9 = **18**."
        },
        {
          q: "An atom has 17 protons and 18 neutrons. Its mass number is:",
          options: ["17", "35", "18", "1"],
          answer: 1,
          explain: "Mass number = protons + neutrons = 17 + 18 = **35**."
        },
        {
          q: "¹⁴₆C and ¹⁴₇N are examples of:",
          options: ["isotopes", "isobars", "isomers", "allotropes"],
          answer: 1,
          explain: "They are different elements (Z = 6 and 7) with the **same mass number** (14), so they are **isobars**."
        },
        {
          q: "The valency of an element with electronic configuration 2, 8, 7 is:",
          options: ["7", "2", "1", "8"],
          answer: 2,
          explain: "It has 7 valence electrons and needs 1 more to complete its octet: valency = 8 − 7 = **1** (this is chlorine)."
        }
      ]
    },

    // ------------------------------------------------------------------
    {
      id: "fundamental-unit-of-life",
      title: "The Fundamental Unit of Life",
      section: "Biology",
      summary: "The cell is the basic structural and functional unit of life. This chapter covers the discovery of cells, the plasma membrane and osmosis, the cell wall, nucleus, cell organelles and cell division.",
      notes: [
        {
          heading: "Discovery of the Cell and Cell Theory",
          points: [
            "**Robert Hooke** (1665) saw box-like compartments in a thin slice of **cork** with a self-designed microscope and named them 'cells'.",
            "**Leeuwenhoek** (1674) first saw free-living cells in pond water; **Robert Brown** (1831) discovered the **nucleus**; **Purkinje** (1839) coined the term **protoplasm**.",
            "**Cell theory** (Schleiden, 1838 and Schwann, 1839): all plants and animals are made of cells, and the cell is the basic unit of life. **Virchow** (1855) added that all cells arise from pre-existing cells.",
            "**Unicellular** organisms (Amoeba, Paramecium, Chlamydomonas, bacteria) are single cells; **multicellular** organisms have many cells showing **division of labour**.",
            "Cell shape and size suit their function, e.g. nerve cells are long and branched; Amoeba keeps changing shape."
          ]
        },
        {
          heading: "Plasma Membrane and Movement of Substances",
          points: [
            "The **plasma membrane** is the outermost covering of the cell; it is flexible, made of **lipids and proteins**, and **selectively permeable**.",
            "**Diffusion**: movement of a substance from a region of **higher concentration to lower concentration**; O₂ and CO₂ move in and out of cells this way.",
            "**Osmosis**: movement of **water** through a selectively permeable membrane from a region of high water concentration to low water concentration.",
            "**Hypotonic** solution: cell gains water and swells. **Isotonic**: no net movement. **Hypertonic**: cell loses water and shrinks.",
            "The flexible membrane lets cells like Amoeba engulf food from outside; this is **endocytosis**."
          ]
        },
        {
          heading: "Cell Wall and Nucleus",
          points: [
            "Plant cells have a rigid **cell wall** outside the plasma membrane, made mainly of **cellulose**; it lets them survive in dilute (hypotonic) surroundings without bursting.",
            "**Plasmolysis**: shrinking of the contents of a living plant cell away from the cell wall when it loses water by osmosis.",
            "The **nucleus** has a double-layered **nuclear membrane** with pores. It contains **chromosomes** made of DNA and protein; functional segments of DNA are **genes**.",
            "In a non-dividing cell the DNA is present as **chromatin**, a network of thread-like structures.",
            "**Prokaryotes** (e.g. bacteria) have no nuclear membrane (their undefined nuclear region is the **nucleoid**) and lack membrane-bound organelles; **eukaryotes** have a well-defined nucleus."
          ]
        },
        {
          heading: "Cell Organelles",
          points: [
            "**Endoplasmic reticulum**: rough ER (with ribosomes) makes proteins; smooth ER makes lipids and, in liver cells, helps **detoxify poisons and drugs**. ER also helps in **membrane biogenesis**.",
            "**Golgi apparatus** (first described by Camillo Golgi): stores, modifies and **packages** products in vesicles; it also forms **lysosomes**.",
            "**Lysosomes**: sacs of digestive enzymes that clean up waste; they are called **suicide bags** because they may burst and digest their own damaged cell.",
            "**Mitochondria**: the **powerhouses of the cell**; they release energy as **ATP**. They have a double membrane (inner one deeply folded) and their own DNA and ribosomes.",
            "**Plastids** (only in plants): **chloroplasts** contain chlorophyll for photosynthesis; **leucoplasts** store starch, oils and proteins. Plastids also have their own DNA and ribosomes.",
            "**Vacuoles** are storage sacs: very large in mature plant cells (giving turgidity and rigidity) and small in animal cells."
          ]
        },
        {
          heading: "Cell Division and Plant vs Animal Cells",
          points: [
            "**Mitosis**: one cell divides into **two identical daughter cells** with the same number of chromosomes; it helps in growth and repair of tissues.",
            "**Meiosis**: takes place in reproductive organs to form gametes; one cell gives **four** cells, each with **half** the number of chromosomes.",
            "Plant cells have a **cell wall, plastids and a large central vacuole**; animal cells lack a cell wall and plastids and have small vacuoles."
          ]
        }
      ],
      terms: [
        { term: "Osmosis", meaning: "Movement of **water molecules** through a selectively permeable membrane from a region of high water concentration to low water concentration." },
        { term: "Plasmolysis", meaning: "Shrinkage of the contents of a living plant cell **away from the cell wall** due to loss of water by osmosis." },
        { term: "Selectively permeable membrane", meaning: "A membrane that allows **some substances to pass but not others**, like the plasma membrane." },
        { term: "Lysosomes", meaning: "Membrane sacs of digestive enzymes that remove waste; called the **suicide bags** of the cell." },
        { term: "Mitochondria", meaning: "Organelles that release energy as **ATP**; called the **powerhouses of the cell**." },
        { term: "Chromatin", meaning: "The network of thread-like DNA and protein in the nucleus of a **non-dividing** cell; it condenses into chromosomes during division." }
      ],
      qa: [
        {
          q: "What happens when an animal cell and a plant cell are placed in a hypotonic solution?",
          a: "Both **gain water by osmosis**. The animal cell swells and may **burst**, since it has no cell wall. The plant cell swells and becomes **turgid**, but its rigid cellulose cell wall stops it from bursting."
        },
        {
          q: "Why are lysosomes called 'suicide bags'?",
          a: "Lysosomes contain powerful **digestive enzymes**. When a cell gets damaged, its lysosomes may burst and the enzymes **digest the cell's own contents**, killing the cell."
        },
        {
          q: "Give three differences between prokaryotic and eukaryotic cells.",
          a: "(1) Prokaryotic cells have **no nuclear membrane** (nucleoid only); eukaryotic cells have a well-defined nucleus with a nuclear membrane. (2) Prokaryotes lack **membrane-bound organelles** like mitochondria; eukaryotes have them. (3) Prokaryotic cells are generally small (1–10 μm); eukaryotic cells are generally larger (5–100 μm)."
        }
      ],
      quiz: [
        {
          q: "Which organelle is known as the 'powerhouse of the cell'?",
          options: ["Golgi apparatus", "Mitochondria", "Ribosome", "Lysosome"],
          answer: 1,
          explain: "**Mitochondria** release energy from food in the form of ATP."
        },
        {
          q: "A living plant cell kept in strong salt solution shrinks away from its cell wall. This is called:",
          options: ["plasmolysis", "endocytosis", "diffusion", "turgidity"],
          answer: 0,
          explain: "The salt solution is **hypertonic**, so the cell loses water by osmosis and its contents shrink: **plasmolysis**."
        },
        {
          q: "The cell wall of plants is mainly made of:",
          options: ["chitin", "starch", "protein", "cellulose"],
          answer: 3,
          explain: "Plant cell walls are made mainly of **cellulose**, which gives structural strength."
        },
        {
          q: "Which organelle helps to detoxify many poisons and drugs in liver cells?",
          options: ["Rough endoplasmic reticulum", "Golgi apparatus", "Smooth endoplasmic reticulum", "Plastids"],
          answer: 2,
          explain: "**Smooth ER** makes lipids and plays a key role in detoxifying poisons and drugs in liver cells."
        },
        {
          q: "Who first observed cells in a thin slice of cork in 1665?",
          options: ["Robert Brown", "Robert Hooke", "Leeuwenhoek", "Rudolf Virchow"],
          answer: 1,
          explain: "**Robert Hooke** saw cork cells; Robert Brown later discovered the nucleus (1831)."
        },
        {
          q: "A cell gains water and swells when it is placed in a solution that is:",
          options: ["isotonic", "hypertonic", "hypotonic", "a strong sugar solution"],
          answer: 2,
          explain: "A **hypotonic** solution is more dilute than the cell contents, so water enters the cell by osmosis."
        }
      ]
    },

    // ------------------------------------------------------------------
    {
      id: "tissues",
      title: "Tissues",
      section: "Biology",
      summary: "A tissue is a group of cells similar in structure that work together to perform a particular function. This chapter covers plant tissues (meristematic and permanent) and the four types of animal tissues.",
      notes: [
        {
          heading: "Plant and Animal Tissues Differ",
          points: [
            "Plants are mostly stationary, so many of their tissues are **supportive and dead**, giving mechanical strength.",
            "Animals move about and use more energy, so most of their tissues are **living**.",
            "Growth in plants is limited to certain regions (**meristems**); growth in animals is more uniform."
          ]
        },
        {
          heading: "Meristematic Tissue",
          points: [
            "**Meristematic tissue** has actively dividing cells with dense cytoplasm, thin cellulose walls, prominent nuclei and **no vacuoles**.",
            "**Apical meristem**: at the tips of stems and roots; increases **length**.",
            "**Lateral meristem** (cambium): increases the **girth** (thickness) of the stem or root.",
            "**Intercalary meristem**: near the nodes (at the base of leaves or internodes) in some plants."
          ]
        },
        {
          heading: "Simple Permanent Tissue",
          points: [
            "**Differentiation**: meristematic cells lose the ability to divide and take a permanent shape, size and function, forming **permanent tissue**.",
            "**Parenchyma**: living, thin-walled, loosely packed cells with large intercellular spaces; stores food. With chlorophyll it is **chlorenchyma**; with large air cavities (helping aquatic plants float) it is **aerenchyma**.",
            "**Collenchyma**: living, elongated cells irregularly thickened at the **corners**; gives **flexibility**, e.g. in leaf stalks below the epidermis.",
            "**Sclerenchyma**: **dead**, long, narrow cells with walls thickened by **lignin**; makes parts hard and stiff, e.g. the **husk of coconut**.",
            "**Epidermis**: outermost protective layer, often with waxy **cutin** to reduce water loss; has **stomata** for gas exchange and transpiration. Older stems form **cork**, whose dead cells contain **suberin**, making it impervious to gases and water."
          ]
        },
        {
          heading: "Complex Permanent Tissue",
          points: [
            "**Xylem**: made of tracheids, vessels, xylem parenchyma and xylem fibres; conducts **water and minerals** upward from roots. Tracheids and vessels are dead cells.",
            "**Phloem**: made of sieve tubes, companion cells, phloem fibres and phloem parenchyma; transports **food** from leaves to other parts. Phloem fibres are its only dead cells.",
            "Xylem moves materials **only upward**; phloem moves materials in **both directions**."
          ]
        },
        {
          heading: "Epithelial and Connective Tissue",
          points: [
            "**Epithelial tissue** covers organs and lines body cavities; cells are **tightly packed** with almost no intercellular space and rest on a basement membrane.",
            "Types: **squamous** (lining of blood vessels, lung alveoli; stratified in skin), **cuboidal** (kidney tubules, ducts of glands), **columnar** (inner lining of intestine), **ciliated columnar** (respiratory tract).",
            "**Connective tissue** has cells embedded in a **matrix**. **Blood** has a fluid matrix (plasma) carrying RBCs, WBCs and platelets; **bone** has a hard matrix of calcium and phosphorus.",
            "**Ligament** connects **bone to bone** (strong and elastic); **tendon** connects **muscle to bone** (strong, limited flexibility).",
            "**Cartilage** smoothens bone surfaces at joints (found in nose, ear, trachea); **areolar tissue** fills spaces inside organs; **adipose tissue** stores fat and insulates."
          ]
        },
        {
          heading: "Muscular and Nervous Tissue",
          points: [
            "**Striated (skeletal) muscle**: voluntary; cells long, cylindrical, unbranched and **multinucleate**, with light and dark bands.",
            "**Smooth muscle**: involuntary; **spindle-shaped**, uninucleate cells, e.g. in the alimentary canal, blood vessels and iris of the eye.",
            "**Cardiac muscle**: involuntary; cells **cylindrical, branched and uninucleate**; contracts rhythmically throughout life in the heart.",
            "**Nervous tissue** is made of **neurons**: a cell body with a nucleus, short branched **dendrites** and a long **axon**. It carries messages rapidly; found in brain, spinal cord and nerves."
          ]
        }
      ],
      terms: [
        { term: "Meristematic tissue", meaning: "Plant tissue made of **actively dividing cells**, found at growing regions such as root and shoot tips." },
        { term: "Differentiation", meaning: "Process by which cells take up a **permanent shape, size and function** and lose the ability to divide." },
        { term: "Sclerenchyma", meaning: "Dead plant tissue with **lignin-thickened walls** that makes parts hard and stiff, e.g. coconut husk." },
        { term: "Xylem", meaning: "Complex plant tissue that conducts **water and minerals** upward from the roots." },
        { term: "Tendon", meaning: "Connective tissue that joins **muscle to bone**." },
        { term: "Neuron", meaning: "A **nerve cell**, made of a cell body, dendrites and an axon; the unit of nervous tissue." }
      ],
      qa: [
        {
          q: "Differentiate parenchyma, collenchyma and sclerenchyma on the basis of their cell walls.",
          a: "**Parenchyma**: thin cellulose walls; living cells. **Collenchyma**: walls irregularly thickened at the **corners**; living cells. **Sclerenchyma**: walls uniformly thickened with **lignin**; dead cells."
        },
        {
          q: "Why is blood called a connective tissue?",
          a: "Blood **connects different parts of the body**. Its fluid matrix (**plasma**) carries RBCs, WBCs and platelets, and transports gases, digested food, hormones and wastes from one part of the body to another."
        },
        {
          q: "Give the location and type of control of striated, smooth and cardiac muscles.",
          a: "**Striated**: attached to bones (limbs); **voluntary**. **Smooth**: walls of the alimentary canal, blood vessels, iris; **involuntary**. **Cardiac**: heart; **involuntary** and contracts rhythmically throughout life."
        }
      ],
      quiz: [
        {
          q: "Increase in the girth (thickness) of a stem is due to the:",
          options: ["apical meristem", "intercalary meristem", "lateral meristem", "epidermis"],
          answer: 2,
          explain: "The **lateral meristem (cambium)** adds cells sideways, increasing girth. Apical meristem increases length."
        },
        {
          q: "The husk of a coconut is made of:",
          options: ["sclerenchyma", "parenchyma", "collenchyma", "chlorenchyma"],
          answer: 0,
          explain: "Coconut husk is made of **sclerenchyma**, whose dead, lignified cells make it hard and stiff."
        },
        {
          q: "Which tissue connects a muscle to a bone?",
          options: ["Ligament", "Cartilage", "Areolar tissue", "Tendon"],
          answer: 3,
          explain: "A **tendon** joins muscle to bone. A ligament joins bone to bone."
        },
        {
          q: "Food prepared in the leaves is transported to other parts of a plant by:",
          options: ["xylem", "phloem", "epidermis", "cork"],
          answer: 1,
          explain: "**Phloem** carries food in both directions; xylem carries water and minerals upward."
        },
        {
          q: "Cardiac muscle cells are:",
          options: ["unbranched, voluntary and multinucleate", "spindle-shaped and voluntary", "branched, involuntary and uninucleate", "branched, voluntary and multinucleate"],
          answer: 2,
          explain: "Heart muscle cells are **cylindrical, branched and uninucleate**, and work **involuntarily**."
        },
        {
          q: "Aquatic plants are able to float because they have:",
          options: ["sclerenchyma", "aerenchyma", "collenchyma", "cork"],
          answer: 1,
          explain: "**Aerenchyma** is parenchyma with large air cavities that give **buoyancy**."
        }
      ]
    },

    // ------------------------------------------------------------------
    {
      id: "motion",
      title: "Motion",
      section: "Physics",
      summary: "Motion is a change in position with time. This chapter covers distance and displacement, speed, velocity, acceleration, distance–time and velocity–time graphs, the equations of motion and uniform circular motion.",
      notes: [
        {
          heading: "Describing Motion",
          points: [
            "Motion is always described with respect to a **reference point** (origin).",
            "**Distance** is the total path length covered (scalar: magnitude only). **Displacement** is the shortest distance from initial to final position, with direction (vector).",
            "Displacement can be **zero** even when distance is not, e.g. after one full round of a circular track.",
            "**Uniform motion**: equal distances in equal intervals of time. **Non-uniform motion**: unequal distances in equal intervals of time."
          ]
        },
        {
          heading: "Speed and Velocity",
          points: [
            "**Speed** = distance ÷ time; SI unit **m s⁻¹**. **Average speed** = total distance ÷ total time.",
            "**Velocity** = displacement ÷ time; it is speed in a definite direction.",
            "Velocity changes if the **speed changes, the direction changes, or both** change.",
            "When velocity changes uniformly, average velocity = (u + v) ÷ 2.",
            "To convert km h⁻¹ to m s⁻¹, multiply by **5/18**, e.g. 72 km h⁻¹ = 20 m s⁻¹."
          ]
        },
        {
          heading: "Acceleration",
          points: [
            "**Acceleration** is the rate of change of velocity: a = (v − u) ÷ t; SI unit **m s⁻²**.",
            "Acceleration is **positive** when velocity increases in its direction and **negative** (retardation) when velocity decreases.",
            "**Uniform acceleration**: velocity changes by equal amounts in equal intervals of time, e.g. a freely falling body."
          ]
        },
        {
          heading: "Graphs of Motion",
          points: [
            "**Distance–time graph**: a straight sloping line means uniform speed; its **slope gives speed**. A curve means non-uniform speed.",
            "**Velocity–time graph**: its **slope gives acceleration** and the **area under it gives displacement**.",
            "A velocity–time graph **parallel to the time axis** means constant velocity (zero acceleration); a straight sloping line means **uniform acceleration**."
          ]
        },
        {
          heading: "Equations of Motion",
          points: [
            "For uniform acceleration: **v = u + at**, **s = ut + ½at²** and **2as = v² − u²**.",
            "u = initial velocity, v = final velocity, a = acceleration, t = time, s = distance (displacement).",
            "A body starting **from rest** has u = 0; a body **coming to rest** has v = 0.",
            "Always convert units to SI (m, s, m s⁻¹) before using the equations."
          ]
        },
        {
          heading: "Uniform Circular Motion",
          points: [
            "Motion along a circular path at **constant speed** is **uniform circular motion**.",
            "It is **accelerated motion**, because the direction of velocity changes at every point.",
            "Speed v = 2πr ÷ t, where r is the radius and t is the time for one round. Examples: an athlete on a circular track, the Moon around the Earth."
          ]
        }
      ],
      formulas: [
        "Speed = Distance ÷ Time",
        "Velocity = Displacement ÷ Time",
        "Average velocity (uniform acceleration) = (u + v) ÷ 2",
        "Acceleration a = (v − u) ÷ t (SI unit m s⁻²)",
        "v = u + at",
        "s = ut + ½at²",
        "2as = v² − u²",
        "Uniform circular motion: v = 2πr ÷ t",
        "1 km h⁻¹ = 5/18 m s⁻¹ (e.g. 36 km h⁻¹ = 10 m s⁻¹, 72 km h⁻¹ = 20 m s⁻¹)"
      ],
      terms: [
        { term: "Displacement", meaning: "The **shortest distance** between the initial and final positions of a body, in a given direction." },
        { term: "Uniform motion", meaning: "Motion in which a body covers **equal distances in equal intervals of time**." },
        { term: "Velocity", meaning: "**Speed in a given direction**; displacement per unit time." },
        { term: "Acceleration", meaning: "**Rate of change of velocity**; SI unit m s⁻²." },
        { term: "Retardation", meaning: "**Negative acceleration**, when the velocity of a body decreases." },
        { term: "Uniform circular motion", meaning: "Motion in a circle at constant speed; it is **accelerated** because direction keeps changing." }
      ],
      examples: [
        {
          q: "A train starting from rest attains a velocity of 72 km h⁻¹ in 5 minutes. Assuming uniform acceleration, find (i) the acceleration and (ii) the distance travelled.",
          steps: [
            "u = 0 (from rest); v = 72 km h⁻¹ = 72 × 5/18 = 20 m s⁻¹; t = 5 min = 300 s",
            "a = (v − u) ÷ t = (20 − 0) ÷ 300 = 1/15 m s⁻² ≈ 0.067 m s⁻²",
            "Using 2as = v² − u²: s = (20² − 0²) ÷ (2 × 1/15)",
            "s = 400 × 15 ÷ 2 = 3000 m"
          ],
          answer: "Acceleration = 1/15 m s⁻² (about 0.067 m s⁻²); distance = 3000 m = 3 km"
        },
        {
          q: "A car moving at 54 km h⁻¹ is braked and stops in 5 s with uniform retardation. Find the acceleration and the distance it covers before stopping.",
          steps: [
            "u = 54 km h⁻¹ = 54 × 5/18 = 15 m s⁻¹; v = 0; t = 5 s",
            "a = (v − u) ÷ t = (0 − 15) ÷ 5 = −3 m s⁻²",
            "s = ut + ½at² = 15 × 5 + ½ × (−3) × 5²",
            "s = 75 − 37.5 = 37.5 m"
          ],
          answer: "Acceleration = −3 m s⁻² (retardation of 3 m s⁻²); stopping distance = 37.5 m"
        }
      ],
      qa: [
        {
          q: "An athlete completes one round of a circular track of diameter 200 m in 40 s. What are the distance covered and the displacement at the end of 2 minutes 20 seconds? (Take π = 22/7)",
          a: "Time = 140 s, so number of rounds = 140 ÷ 40 = **3.5**. Circumference = πd = 22/7 × 200 = 4400/7 m. Distance = 3.5 × 4400/7 = **2200 m**. After 3.5 rounds the athlete is at the opposite end of a diameter, so displacement = **200 m**."
        },
        {
          q: "Can a body have zero displacement but non-zero distance? Give an example.",
          a: "**Yes.** If a body returns to its starting point, its displacement is zero but the distance covered is not. Example: a person who walks once around a park and returns to the gate."
        },
        {
          q: "Why is uniform circular motion called accelerated motion?",
          a: "In uniform circular motion the speed is constant but the **direction of motion changes at every point**. Since velocity includes direction, the velocity keeps changing, so the motion is **accelerated**."
        }
      ],
      quiz: [
        {
          q: "The slope of a distance–time graph gives:",
          options: ["acceleration", "displacement", "speed", "time"],
          answer: 2,
          explain: "Slope = distance ÷ time = **speed**."
        },
        {
          q: "A bus starting from rest accelerates uniformly at 2 m s⁻² for 10 s. The distance covered is:",
          options: ["20 m", "100 m", "200 m", "50 m"],
          answer: 1,
          explain: "s = ut + ½at² = 0 + ½ × 2 × 10² = **100 m**. Forgetting the ½ gives 200 m."
        },
        {
          q: "A body moving in a circle at constant speed has:",
          options: ["changing velocity, so it is accelerated", "constant velocity", "zero acceleration", "constant velocity and constant displacement"],
          answer: 0,
          explain: "The direction keeps changing, so **velocity changes** and the body is accelerated."
        },
        {
          q: "The area under a velocity–time graph represents:",
          options: ["acceleration", "speed", "force", "displacement"],
          answer: 3,
          explain: "Area = velocity × time = **displacement**. The slope gives acceleration."
        },
        {
          q: "72 km h⁻¹ is equal to:",
          options: ["7.2 m s⁻¹", "20 m s⁻¹", "25 m s⁻¹", "259.2 m s⁻¹"],
          answer: 1,
          explain: "72 × 5/18 = **20 m s⁻¹**. Multiplying by 3.6 instead of dividing gives 259.2."
        },
        {
          q: "The velocity of a car changes from 10 m s⁻¹ to 4 m s⁻¹ in 3 s. Its acceleration is:",
          options: ["2 m s⁻²", "−6 m s⁻²", "4.67 m s⁻²", "−2 m s⁻²"],
          answer: 3,
          explain: "a = (v − u) ÷ t = (4 − 10) ÷ 3 = **−2 m s⁻²** (a retardation)."
        }
      ]
    },

    // ------------------------------------------------------------------
    {
      id: "force-and-laws-of-motion",
      title: "Force and Laws of Motion",
      section: "Physics",
      summary: "Force changes the state of rest or motion of a body. This chapter covers balanced and unbalanced forces, Newton's three laws of motion, inertia, momentum and conservation of momentum.",
      notes: [
        {
          heading: "Balanced and Unbalanced Forces",
          points: [
            "**Force** is a push or pull; it can change the speed, the direction of motion or the shape of an object.",
            "**Balanced forces** have zero net force; they do not change the state of rest or motion (they may change shape).",
            "**Unbalanced forces** have a non-zero net force; they produce **acceleration**.",
            "**Friction** opposes motion; a rolling ball stops because of friction, not because it 'runs out of force'."
          ]
        },
        {
          heading: "First Law of Motion and Inertia",
          points: [
            "**Newton's first law**: an object remains in a state of rest or of uniform motion in a straight line unless compelled to change that state by an applied (unbalanced) force.",
            "**Inertia** is the natural tendency of an object to resist a change in its state of rest or motion; the first law is also called the **law of inertia**.",
            "**Mass is a measure of inertia**: a loaded truck is harder to start or stop than a bicycle.",
            "Examples: passengers fall **backward** when a bus starts suddenly and **forward** when it stops suddenly; dust leaves a carpet when beaten; a coin drops into a glass when the card under it is flicked.",
            "**Seat belts** stop passengers from being thrown forward due to inertia when a car stops suddenly."
          ]
        },
        {
          heading: "Momentum and Second Law",
          points: [
            "**Momentum** p = mv; it is a vector in the direction of velocity; SI unit **kg m s⁻¹**.",
            "**Newton's second law**: the rate of change of momentum of an object is proportional to the applied unbalanced force, in the direction of the force.",
            "This gives **F = ma**; SI unit of force is the **newton (N)**: 1 N = 1 kg m s⁻².",
            "Force × time = change in momentum. Increasing the stopping time **reduces the force**: a fielder pulls his hands back while catching; high jumpers land on cushions or sand."
          ]
        },
        {
          heading: "Third Law of Motion",
          points: [
            "**Newton's third law**: to every action there is an **equal and opposite reaction**.",
            "Action and reaction act on **two different objects**, so they never cancel each other.",
            "Examples: a gun **recoils** when fired; a sailor jumping forward pushes the boat backward; we walk by pushing the ground backward.",
            "The forces are equal, but accelerations may differ because masses differ: the heavy gun moves back slowly while the light bullet moves very fast."
          ]
        },
        {
          heading: "Conservation of Momentum",
          points: [
            "If no external unbalanced force acts, the **total momentum of a system remains constant**.",
            "For two colliding bodies: m₁u₁ + m₂u₂ = m₁v₁ + m₂v₂ (total momentum before = total momentum after).",
            "Recoil of a gun: total momentum before firing is zero, so after firing the gun's momentum is equal and opposite to the bullet's."
          ]
        }
      ],
      formulas: [
        "Momentum p = mv (SI unit kg m s⁻¹)",
        "F = ma = m(v − u) ÷ t",
        "1 N = 1 kg m s⁻²",
        "Change in momentum = F × t",
        "Conservation of momentum: m₁u₁ + m₂u₂ = m₁v₁ + m₂v₂",
        "Recoil velocity of gun V = −(m × v) ÷ M (m, v for bullet; M for gun)"
      ],
      terms: [
        { term: "Inertia", meaning: "The natural tendency of an object to **resist a change** in its state of rest or of uniform motion. Mass is its measure." },
        { term: "Balanced forces", meaning: "Forces whose resultant is **zero**; they do not change the state of rest or motion." },
        { term: "Momentum", meaning: "Product of **mass and velocity** (p = mv); SI unit kg m s⁻¹." },
        { term: "Newton (N)", meaning: "The force that gives a 1 kg mass an acceleration of **1 m s⁻²**." },
        { term: "Conservation of momentum", meaning: "Total momentum of a system **stays constant** when no external unbalanced force acts on it." }
      ],
      examples: [
        {
          q: "A constant force acts on a 5 kg object for 2 s and increases its velocity from 3 m s⁻¹ to 7 m s⁻¹. Find the force. What would the final velocity be if the same force acted for 5 s?",
          steps: [
            "a = (v − u) ÷ t = (7 − 3) ÷ 2 = 2 m s⁻²",
            "F = ma = 5 × 2 = 10 N",
            "For t = 5 s: v = u + at = 3 + 2 × 5 = 13 m s⁻¹"
          ],
          answer: "Force = 10 N; final velocity after 5 s = 13 m s⁻¹"
        },
        {
          q: "A bullet of mass 20 g is fired horizontally at 150 m s⁻¹ from a pistol of mass 2 kg. What is the recoil velocity of the pistol?",
          steps: [
            "m₁ = 20 g = 0.02 kg, v₁ = 150 m s⁻¹; m₂ = 2 kg, recoil velocity = v₂",
            "Total momentum before firing = 0",
            "After firing: 0.02 × 150 + 2 × v₂ = 0, so 3 + 2v₂ = 0",
            "v₂ = −3 ÷ 2 = −1.5 m s⁻¹"
          ],
          answer: "Recoil velocity = −1.5 m s⁻¹ (1.5 m s⁻¹ opposite to the bullet)"
        }
      ],
      qa: [
        {
          q: "Why do passengers in a bus tend to fall forward when the bus stops suddenly?",
          a: "Because of **inertia of motion**. When the bus stops, the lower part of the body (in contact with the bus) stops, but the upper part tends to **keep moving forward**, so passengers fall forward."
        },
        {
          q: "Why does a fielder pull his hands back while catching a fast cricket ball?",
          a: "Pulling the hands back **increases the time** taken to stop the ball. Since force = change in momentum ÷ time, a longer time means a **smaller force** on the hands, so they are not hurt."
        },
        {
          q: "If action and reaction are equal and opposite, why do they not cancel each other?",
          a: "Action and reaction act on **two different bodies**. Forces cancel only when they act on the **same body**, so action and reaction can never cancel each other."
        }
      ],
      quiz: [
        {
          q: "The SI unit of momentum is:",
          options: ["N", "kg m s⁻¹", "kg m s⁻²", "J"],
          answer: 1,
          explain: "p = mv, so its unit is kg × m s⁻¹ = **kg m s⁻¹**. kg m s⁻² is the newton, a unit of force."
        },
        {
          q: "Which of the following has the greatest inertia?",
          options: ["A bicycle", "A cricket ball", "A loaded truck", "A pen"],
          answer: 2,
          explain: "Inertia depends on mass; the **loaded truck** has the largest mass."
        },
        {
          q: "A force of 20 N acts on a body of mass 4 kg. Its acceleration is:",
          options: ["5 m s⁻²", "80 m s⁻²", "0.2 m s⁻²", "16 m s⁻²"],
          answer: 0,
          explain: "a = F ÷ m = 20 ÷ 4 = **5 m s⁻²**."
        },
        {
          q: "The recoil of a gun when it is fired is explained by:",
          options: ["Newton's first law of motion", "Newton's third law of motion", "the universal law of gravitation", "the law of conservation of energy"],
          answer: 1,
          explain: "The gun pushes the bullet forward (action) and the bullet pushes the gun backward (**reaction**). It also follows from conservation of momentum."
        },
        {
          q: "Action and reaction forces:",
          options: ["act on the same body and cancel each other", "act on different bodies and are unequal", "act on the same body and are unequal", "act on different bodies and are equal and opposite"],
          answer: 3,
          explain: "By the third law, they are **equal and opposite** and act on **different bodies**."
        },
        {
          q: "A car of mass 1000 kg moves at 10 m s⁻¹. Its momentum is:",
          options: ["100 kg m s⁻¹", "1010 kg m s⁻¹", "10,000 kg m s⁻¹", "50,000 kg m s⁻¹"],
          answer: 2,
          explain: "p = mv = 1000 × 10 = **10,000 kg m s⁻¹**. 50,000 J would be its kinetic energy (½mv²)."
        }
      ]
    },

    // ------------------------------------------------------------------
    {
      id: "gravitation",
      title: "Gravitation",
      section: "Physics",
      summary: "Every object in the universe attracts every other object. This chapter covers the universal law of gravitation, acceleration due to gravity, free fall, the difference between mass and weight, and thrust, pressure and buoyancy.",
      notes: [
        {
          heading: "Universal Law of Gravitation",
          points: [
            "Every object in the universe attracts every other object with a force **directly proportional to the product of their masses** and **inversely proportional to the square of the distance** between them.",
            "F = G m₁m₂ ÷ d², where **G = 6.673 × 10⁻¹¹ N m² kg⁻²** is the universal gravitation constant.",
            "If the distance is doubled, the force becomes **one-fourth**; if one mass is doubled, the force doubles.",
            "The law explains why we are bound to the Earth, the motion of the Moon around the Earth and of planets around the Sun, and the **tides** caused by the Moon and the Sun.",
            "The Earth and a falling apple pull each other with equal force, but the Earth's acceleration is negligible because its **mass is enormous**."
          ]
        },
        {
          heading: "Free Fall and Acceleration due to Gravity",
          points: [
            "**Free fall**: motion of a body falling towards the Earth under gravitational force alone.",
            "Its acceleration is the **acceleration due to gravity, g = 9.8 m s⁻²**; it does **not depend on the mass** of the body.",
            "g = GM ÷ R² (M, R = mass and radius of the Earth). The Earth's radius is larger at the equator, so **g is greater at the poles** than at the equator.",
            "Equations of motion apply with a = g: v = u + gt, h = ut + ½gt², v² = u² + 2gh. Take g as negative for a body moving upward.",
            "In a vacuum a feather and a coin fall together; in air the feather falls slowly because of **air resistance**."
          ]
        },
        {
          heading: "Mass and Weight",
          points: [
            "**Mass** is the amount of matter in a body and a measure of its inertia; it is the **same everywhere**; SI unit kg.",
            "**Weight** is the force with which the Earth attracts a body: **W = mg**; SI unit newton (N); it changes from place to place.",
            "A body of mass 1 kg weighs 9.8 N on the Earth (1 kg-wt = 9.8 N).",
            "Weight on the Moon is about **1/6 of the weight on the Earth**, because the Moon's gravitational pull is weaker; the mass does not change."
          ]
        },
        {
          heading: "Thrust, Pressure and Buoyancy",
          points: [
            "**Thrust** is the force acting perpendicular to a surface; **pressure = thrust ÷ area**; SI unit **pascal (Pa)**, 1 Pa = 1 N m⁻².",
            "The same force gives more pressure on a smaller area: knives are sharp, while school bags have wide straps and buildings have wide foundations.",
            "**Buoyancy**: the upward force exerted by a fluid on an object immersed in it.",
            "**Archimedes' principle**: a body immersed fully or partially in a fluid experiences an upward force equal to the **weight of the fluid displaced** by it.",
            "An object **floats** if its density is less than that of the liquid and **sinks** if its density is greater."
          ]
        }
      ],
      formulas: [
        "F = G m₁m₂ ÷ d²",
        "G = 6.673 × 10⁻¹¹ N m² kg⁻²",
        "g = GM ÷ R² ≈ 9.8 m s⁻²",
        "Weight W = mg",
        "Weight on Moon ≈ (1/6) × weight on Earth",
        "Free fall: v = u + gt; h = ut + ½gt²; v² = u² + 2gh",
        "Pressure = Thrust ÷ Area (1 Pa = 1 N m⁻²)"
      ],
      terms: [
        { term: "Universal gravitation constant (G)", meaning: "The constant in Newton's law of gravitation; **G = 6.673 × 10⁻¹¹ N m² kg⁻²**." },
        { term: "Free fall", meaning: "Motion of a body falling **only under the Earth's gravitational force**." },
        { term: "Acceleration due to gravity (g)", meaning: "Acceleration of a freely falling body due to the Earth's pull; **9.8 m s⁻²** near the Earth's surface." },
        { term: "Weight", meaning: "The **force** with which the Earth attracts a body; W = mg, measured in newtons." },
        { term: "Buoyancy", meaning: "The **upward force** exerted by a fluid on an object immersed in it." },
        { term: "Archimedes' principle", meaning: "Upward force on a body in a fluid equals the **weight of fluid displaced** by it." }
      ],
      examples: [
        {
          q: "A ball is thrown vertically upward with a velocity of 49 m s⁻¹. Find (i) the maximum height reached and (ii) the total time taken to return to the thrower. (g = 9.8 m s⁻²)",
          steps: [
            "At the highest point v = 0; u = 49 m s⁻¹; a = −9.8 m s⁻² (upward motion)",
            "v² = u² + 2ah: 0 = 49² − 2 × 9.8 × h, so h = 2401 ÷ 19.6 = 122.5 m",
            "Time to rise: v = u + at gives 0 = 49 − 9.8t, so t = 5 s",
            "Time to fall back is also 5 s, so total time = 5 + 5 = 10 s"
          ],
          answer: "Maximum height = 122.5 m; total time = 10 s"
        },
        {
          q: "A body has a mass of 60 kg on the Earth. Find its weight on the Earth, and its mass and weight on the Moon. (g = 9.8 m s⁻²)",
          steps: [
            "Weight on Earth W = mg = 60 × 9.8 = 588 N",
            "Mass does not change, so mass on the Moon = 60 kg",
            "Weight on Moon = 1/6 × 588 = 98 N"
          ],
          answer: "Weight on Earth = 588 N; on the Moon: mass = 60 kg, weight = 98 N"
        }
      ],
      qa: [
        {
          q: "Why is the weight of an object on the Moon about 1/6th of its weight on the Earth?",
          a: "Weight depends on the gravitational pull. The Moon's mass is much smaller than the Earth's, so the **acceleration due to gravity on the Moon is about 1/6 of that on the Earth**. Since W = mg and the mass stays the same, the weight on the Moon is about 1/6th."
        },
        {
          q: "Why does a heavy stone not fall faster than a light stone (ignoring air resistance)?",
          a: "The acceleration due to gravity **g = GM ÷ R² does not depend on the mass** of the falling body. So both stones fall with the same acceleration (9.8 m s⁻²) and reach the ground together."
        },
        {
          q: "How does the gravitational force between two objects change if the distance between them is halved?",
          a: "F ∝ 1/d². If d becomes d/2, then F becomes 1 ÷ (1/2)² = **4 times** the original force."
        }
      ],
      quiz: [
        {
          q: "If the distance between two objects is doubled, the gravitational force between them becomes:",
          options: ["double", "half", "one-fourth", "four times"],
          answer: 2,
          explain: "F ∝ 1/d². Doubling d makes F become 1/2² = **1/4** of the original."
        },
        {
          q: "The value of the universal gravitation constant G is:",
          options: ["9.8 m s⁻²", "6.673 × 10⁻¹¹ N m² kg⁻²", "6.022 × 10²³ per mole", "3 × 10⁸ m s⁻¹"],
          answer: 1,
          explain: "**G = 6.673 × 10⁻¹¹ N m² kg⁻²**. 9.8 m s⁻² is g, which changes from place to place."
        },
        {
          q: "An object weighs 60 N on the Earth. Its weight on the Moon will be about:",
          options: ["10 N", "60 N", "360 N", "6 N"],
          answer: 0,
          explain: "Weight on the Moon ≈ 1/6 × 60 N = **10 N**."
        },
        {
          q: "Compared with its value at the equator, the value of g at the poles is:",
          options: ["the same", "smaller", "zero", "greater"],
          answer: 3,
          explain: "The Earth's radius is smaller at the poles; since g = GM ÷ R², **g is greater at the poles**."
        },
        {
          q: "A stone is dropped from a cliff. Ignoring air resistance, its speed after 2 s is: (g = 9.8 m s⁻²)",
          options: ["9.8 m s⁻¹", "19.6 m s⁻¹", "4.9 m s⁻¹", "39.2 m s⁻¹"],
          answer: 1,
          explain: "v = u + gt = 0 + 9.8 × 2 = **19.6 m s⁻¹**."
        },
        {
          q: "Which quantity remains the same for a body on the Earth and on the Moon?",
          options: ["Weight", "Acceleration due to gravity", "Mass", "Gravitational force acting on it"],
          answer: 2,
          explain: "**Mass** is the amount of matter and does not change. Weight and g are less on the Moon."
        }
      ]
    },

    // ------------------------------------------------------------------
    {
      id: "work-and-energy",
      title: "Work and Energy",
      section: "Physics",
      summary: "Work is done when a force moves an object. This chapter covers work, kinetic and potential energy, the law of conservation of energy, power and the commercial unit of energy.",
      notes: [
        {
          heading: "Work",
          points: [
            "**Work done** W = F × s, when a force F moves an object through a displacement s **in the direction of the force**.",
            "Work is a scalar; SI unit **joule (J)**: 1 J = 1 N × 1 m.",
            "Work is done only if a force acts **and** the object is displaced. Pushing a wall that does not move does **no work**.",
            "Work is **positive** when force and displacement are in the same direction and **negative** when opposite, e.g. friction, or gravity on a ball moving up.",
            "Work is **zero** when the force is perpendicular to the displacement."
          ]
        },
        {
          heading: "Kinetic and Potential Energy",
          points: [
            "**Energy** is the capacity to do work; SI unit joule. Forms include kinetic, potential, heat, chemical, electrical and light energy.",
            "**Kinetic energy** is energy due to motion: **Eₖ = ½mv²**. Doubling the speed makes KE **four times**.",
            "Work done on a body = **change in its kinetic energy** = ½m(v² − u²).",
            "**Potential energy** is energy due to position or shape: **Eₚ = mgh** at height h. A stretched rubber band or wound spring also stores potential energy.",
            "Gravitational potential energy depends only on the **vertical height**, not on the path taken."
          ]
        },
        {
          heading: "Law of Conservation of Energy",
          points: [
            "**Energy can neither be created nor destroyed**; it can only change from one form to another. Total energy stays the same.",
            "For a freely falling body, PE decreases and KE increases, but **PE + KE remains constant** (ignoring air resistance).",
            "Energy changes around us: green plants change light energy to chemical energy; in a hydropower plant, the potential energy of stored water becomes electrical energy."
          ]
        },
        {
          heading: "Power and Commercial Unit of Energy",
          points: [
            "**Power** is the rate of doing work: **P = W ÷ t**; SI unit **watt (W)**, 1 W = 1 J s⁻¹; 1 kW = 1000 W.",
            "**Average power** = total energy used ÷ total time taken.",
            "**Commercial unit of energy**: kilowatt hour (kW h), the energy used in 1 hour at a rate of 1 kW. **1 kW h = 3.6 × 10⁶ J**.",
            "One 'unit' of electricity on the bill = **1 kW h**."
          ]
        }
      ],
      formulas: [
        "W = F × s (force along the displacement); 1 J = 1 N m",
        "Kinetic energy Eₖ = ½mv²",
        "Potential energy Eₚ = mgh",
        "Work done = change in kinetic energy = ½m(v² − u²)",
        "Power P = W ÷ t; 1 W = 1 J s⁻¹",
        "1 kW h = 1000 W × 3600 s = 3.6 × 10⁶ J"
      ],
      terms: [
        { term: "Joule", meaning: "Work done when a force of **1 N** moves an object by **1 m** in the direction of the force." },
        { term: "Kinetic energy", meaning: "Energy possessed by a body **due to its motion**; Eₖ = ½mv²." },
        { term: "Potential energy", meaning: "Energy possessed by a body **due to its position or shape**; Eₚ = mgh at height h." },
        { term: "Law of conservation of energy", meaning: "Energy can **neither be created nor destroyed**, only changed from one form to another." },
        { term: "Power", meaning: "**Rate of doing work**; SI unit watt (1 W = 1 J s⁻¹)." },
        { term: "Kilowatt hour (kW h)", meaning: "Commercial unit of energy: energy used in 1 hour at 1 kW; **1 kW h = 3.6 × 10⁶ J**." }
      ],
      examples: [
        {
          q: "What is the work done to increase the velocity of a car of mass 1500 kg from 30 km h⁻¹ to 60 km h⁻¹?",
          steps: [
            "u = 30 × 5/18 = 25/3 m s⁻¹; v = 60 × 5/18 = 50/3 m s⁻¹",
            "Work done = change in KE = ½m(v² − u²)",
            "= ½ × 1500 × [(50/3)² − (25/3)²] = 750 × (2500 − 625) ÷ 9",
            "= 750 × 1875 ÷ 9 = 156250 J"
          ],
          answer: "Work done = 156250 J (about 1.56 × 10⁵ J)"
        },
        {
          q: "A girl of mass 50 kg runs up a staircase of 45 steps, each 15 cm high, in 9 s. Find her power. (g = 10 m s⁻²)",
          steps: [
            "Height h = 45 × 15 cm = 675 cm = 6.75 m",
            "Work done W = mgh = 50 × 10 × 6.75 = 3375 J",
            "Power P = W ÷ t = 3375 ÷ 9 = 375 W"
          ],
          answer: "Power = 375 W"
        }
      ],
      qa: [
        {
          q: "A porter lifts a 15 kg load from the ground and puts it on his head 1.5 m above the ground. Calculate the work done by him on the load. (g = 10 m s⁻²)",
          a: "Work done = mgh = 15 × 10 × 1.5 = **225 J**."
        },
        {
          q: "A ball is dropped from a height. How does the law of conservation of energy hold during its fall?",
          a: "At the top the ball has only **potential energy** (mgh). As it falls, height decreases so PE decreases, while speed increases so **kinetic energy increases** by the same amount. Just before hitting the ground, all the PE has become KE. At every point, **PE + KE stays constant** (ignoring air resistance)."
        },
        {
          q: "Show that 1 kW h = 3.6 × 10⁶ J.",
          a: "1 kW h = 1 kW × 1 h = 1000 W × 3600 s = 3,600,000 J = **3.6 × 10⁶ J**."
        }
      ],
      quiz: [
        {
          q: "If the velocity of a body is doubled, its kinetic energy becomes:",
          options: ["double", "four times", "half", "unchanged"],
          answer: 1,
          explain: "Eₖ = ½mv². Doubling v makes v² four times, so KE becomes **four times**."
        },
        {
          q: "In which case is no work done?",
          options: ["A person pushes a wall and it does not move", "A box is lifted from the floor to a shelf", "A car is pushed some distance along a road", "A ball falls from a height"],
          answer: 0,
          explain: "Work needs **displacement**. The wall does not move, so W = F × 0 = **0**."
        },
        {
          q: "1 kW h is equal to:",
          options: ["3.6 × 10⁵ J", "1000 J", "3.6 × 10⁶ J", "3600 J"],
          answer: 2,
          explain: "1 kW h = 1000 W × 3600 s = **3.6 × 10⁶ J**."
        },
        {
          q: "The potential energy of a 2 kg object at a height of 5 m is: (g = 10 m s⁻²)",
          options: ["10 J", "50 J", "25 J", "100 J"],
          answer: 3,
          explain: "Eₚ = mgh = 2 × 10 × 5 = **100 J**."
        },
        {
          q: "While a ball thrown vertically upward is rising, the work done on it by gravity is:",
          options: ["positive", "zero", "negative", "positive at first and then negative"],
          answer: 2,
          explain: "Gravity acts downward while the ball moves upward, so the work done by gravity is **negative**."
        },
        {
          q: "The SI unit of power is:",
          options: ["joule", "watt", "newton", "kilowatt hour"],
          answer: 1,
          explain: "Power is measured in **watt** (1 W = 1 J s⁻¹). Joule and kW h are units of energy."
        }
      ]
    },

    // ------------------------------------------------------------------
    {
      id: "sound",
      title: "Sound",
      section: "Physics",
      summary: "Sound is a form of energy produced by vibrating objects and carried through a medium as longitudinal waves. This chapter covers propagation of sound, its characteristics and speed, reflection and echo, the range of hearing and ultrasound.",
      notes: [
        {
          heading: "Production and Propagation of Sound",
          points: [
            "Sound is produced by **vibrating objects**, e.g. our vocal cords, a struck tuning fork, a plucked string.",
            "Sound needs a **material medium** (solid, liquid or gas) to travel; it **cannot travel through vacuum**.",
            "Sound travels as a **longitudinal wave**: particles of the medium vibrate back and forth **parallel** to the direction of travel of the wave.",
            "**Compressions** are regions of high pressure and density; **rarefactions** are regions of low pressure and density.",
            "In a **transverse wave** (e.g. a slinky moved up and down) particles vibrate **perpendicular** to the direction of travel."
          ]
        },
        {
          heading: "Characteristics of a Sound Wave",
          points: [
            "**Wavelength (λ)**: distance between two consecutive compressions or rarefactions; SI unit metre.",
            "**Frequency (ν)**: number of oscillations per second; SI unit **hertz (Hz)**. **Time period** T = 1/ν.",
            "**Amplitude**: maximum disturbance of the medium from its mean value; larger amplitude gives a **louder** sound.",
            "**Pitch** depends on frequency: higher frequency means higher (shriller) pitch. **Quality (timbre)** helps us tell apart sounds of the same pitch and loudness.",
            "**Speed of a wave**: v = λν (wavelength × frequency)."
          ]
        },
        {
          heading: "Speed of Sound",
          points: [
            "Speed of sound depends on the medium: **fastest in solids**, slower in liquids and **slowest in gases**.",
            "Speed increases with temperature: in air it is **331 m s⁻¹ at 0 °C** and **344 m s⁻¹ at 22 °C**.",
            "Approximate values: air (25 °C) 346 m s⁻¹, distilled water 1498 m s⁻¹, iron 5950 m s⁻¹.",
            "Light travels much faster than sound, so we **see lightning before hearing thunder**."
          ]
        },
        {
          heading: "Reflection of Sound and Echo",
          points: [
            "Sound reflects from hard surfaces following the same laws as light: **angle of incidence = angle of reflection**.",
            "**Echo** is a reflected sound heard separately. The sensation of sound **persists in the brain for about 0.1 s**.",
            "For a distinct echo the obstacle must be at least **17.2 m** away (at 344 m s⁻¹: 344 × 0.1 = 34.4 m to and fro, so 17.2 m one way).",
            "**Reverberation**: persistence of sound in a big hall due to repeated reflections; reduced by sound-absorbing materials like fibreboard, rough plaster and curtains.",
            "Uses of multiple reflection: megaphones, horns, the **stethoscope**, curved ceilings of concert halls and soundboards."
          ]
        },
        {
          heading: "Range of Hearing and Ultrasound",
          points: [
            "Humans can hear frequencies from **20 Hz to 20,000 Hz (20 kHz)**.",
            "Below 20 Hz is **infrasound** (produced by rhinoceroses, whales, elephants and by earthquakes); above 20 kHz is **ultrasound** (produced by bats, dolphins and porpoises; dogs can hear it).",
            "Uses of ultrasound: cleaning hard-to-reach parts, detecting cracks in metal blocks, **ultrasonography** and echocardiography of internal organs, and breaking small kidney stones.",
            "**SONAR** (Sound Navigation And Ranging) uses reflected ultrasound to find the depth of the sea and locate underwater objects: 2d = v × t.",
            "Bats find their way and catch prey in the dark by detecting **reflected ultrasonic squeaks**."
          ]
        }
      ],
      formulas: [
        "Wave speed v = λν (speed = wavelength × frequency)",
        "Time period T = 1/ν",
        "Echo or SONAR: 2d = v × t (d = distance of reflecting surface)",
        "Minimum distance for a distinct echo = 17.2 m (at 344 m s⁻¹, persistence 0.1 s)",
        "Audible range of humans: 20 Hz to 20 kHz",
        "Speed of sound in air: 331 m s⁻¹ at 0 °C; 344 m s⁻¹ at 22 °C"
      ],
      terms: [
        { term: "Longitudinal wave", meaning: "A wave in which particles of the medium vibrate **parallel** to the direction of propagation, e.g. sound." },
        { term: "Compression", meaning: "Region of a sound wave where particles are crowded together; **high pressure and density**." },
        { term: "Rarefaction", meaning: "Region of a sound wave where particles are spread apart; **low pressure and density**." },
        { term: "Frequency", meaning: "Number of oscillations per second, measured in **hertz (Hz)**; it decides the pitch." },
        { term: "Echo", meaning: "A **reflected sound** heard distinctly after the original sound, needing a reflector at least 17.2 m away." },
        { term: "Ultrasound", meaning: "Sound of frequency **above 20 kHz**, which humans cannot hear." }
      ],
      examples: [
        {
          q: "A sound wave has a frequency of 2 kHz and wavelength 35 cm. How long will it take to travel 1.5 km?",
          steps: [
            "ν = 2 kHz = 2000 Hz; λ = 35 cm = 0.35 m",
            "Speed v = λν = 0.35 × 2000 = 700 m s⁻¹",
            "Time t = distance ÷ speed = 1500 ÷ 700 = 15/7 s ≈ 2.1 s"
          ],
          answer: "Time taken ≈ 2.1 s"
        },
        {
          q: "A ship sends an ultrasonic signal that returns from the seabed after 4 s. If the speed of sound in sea water is 1500 m s⁻¹, find the depth of the sea.",
          steps: [
            "The signal travels to the seabed and back, so total distance = 2d",
            "2d = v × t = 1500 × 4 = 6000 m",
            "d = 6000 ÷ 2 = 3000 m"
          ],
          answer: "Depth of the sea = 3000 m (3 km)"
        }
      ],
      qa: [
        {
          q: "Why can sound not travel through vacuum?",
          a: "Sound is a **mechanical wave**: it travels by the vibration of particles of a medium, forming compressions and rarefactions. Vacuum has **no particles**, so sound cannot travel through it."
        },
        {
          q: "A person claps near a cliff and hears the echo after 2 s. How far is the cliff if the speed of sound is 346 m s⁻¹?",
          a: "Sound goes to the cliff and back, so 2d = v × t = 346 × 2 = 692 m. Distance of the cliff d = 692 ÷ 2 = **346 m**."
        },
        {
          q: "Why are the ceilings of concert halls and auditoriums made curved?",
          a: "A curved ceiling **reflects sound** so that it spreads evenly and reaches **all corners of the hall**, so every listener can hear clearly."
        }
      ],
      quiz: [
        {
          q: "Sound waves in air are:",
          options: ["transverse waves", "longitudinal waves", "electromagnetic waves", "waves that need no medium"],
          answer: 1,
          explain: "Air particles vibrate **parallel** to the direction of travel, forming compressions and rarefactions."
        },
        {
          q: "The pitch of a sound depends on its:",
          options: ["amplitude", "speed", "frequency", "wavelength alone"],
          answer: 2,
          explain: "Higher **frequency** gives higher pitch. Amplitude decides loudness."
        },
        {
          q: "A sound wave has frequency 500 Hz and wavelength 0.68 m. Its speed is:",
          options: ["340 m s⁻¹", "735 m s⁻¹", "500.68 m s⁻¹", "0.00136 m s⁻¹"],
          answer: 0,
          explain: "v = λν = 0.68 × 500 = **340 m s⁻¹**."
        },
        {
          q: "To hear a distinct echo (speed of sound 344 m s⁻¹), the minimum distance of the reflecting surface should be:",
          options: ["34.4 m", "17.2 m", "10 m", "344 m"],
          answer: 1,
          explain: "Sound must take at least 0.1 s to go and return: 344 × 0.1 = 34.4 m in total, so the obstacle must be **17.2 m** away."
        },
        {
          q: "The audible range of frequencies for humans is:",
          options: ["2 Hz to 2000 Hz", "20 Hz to 2000 Hz", "200 Hz to 20,000 Hz", "20 Hz to 20,000 Hz"],
          answer: 3,
          explain: "Humans hear from **20 Hz to 20 kHz**. Below is infrasound, above is ultrasound."
        },
        {
          q: "Sound travels fastest in:",
          options: ["steel", "water", "air", "vacuum"],
          answer: 0,
          explain: "Sound is fastest in **solids** like steel. It cannot travel in vacuum at all."
        }
      ]
    },

    // ------------------------------------------------------------------
    {
      id: "improvement-in-food-resources",
      title: "Improvement in Food Resources",
      section: "Biology",
      summary: "India must grow more food while protecting the environment. This chapter covers crop variety improvement, nutrient management with manures and fertilisers, irrigation, cropping patterns, crop protection, grain storage and animal husbandry.",
      notes: [
        {
          heading: "Crops, Seasons and Variety Improvement",
          points: [
            "**Cereals** (wheat, rice, maize, millets) give carbohydrates; **pulses** (gram, pea, black gram, green gram, pigeon pea, lentil) give proteins; **oilseeds** (soyabean, groundnut, sesame, mustard, sunflower) give fats.",
            "**Kharif** crops grow in the rainy season (**June to October**), e.g. paddy, soyabean, pigeon pea, maize, cotton. **Rabi** crops grow in winter (**November to April**), e.g. wheat, gram, peas, mustard, linseed.",
            "**Hybridisation** is crossing genetically dissimilar plants (intervarietal, interspecific or intergeneric) to combine useful traits.",
            "A gene for a desired trait can also be introduced to make a **genetically modified (GM) crop**.",
            "Desired traits: **higher yield**, better quality, resistance to biotic (diseases, insects) and abiotic (drought, salinity, heat) stresses, shorter maturity time and wider adaptability."
          ]
        },
        {
          heading: "Nutrient Management",
          points: [
            "Plants need **16 nutrients**: carbon and oxygen from air, hydrogen and oxygen from water, and **13 from soil**.",
            "**Macronutrients** (6, needed in large amounts): nitrogen, phosphorus, potassium, calcium, magnesium, sulphur.",
            "**Micronutrients** (7, needed in small amounts): iron, manganese, boron, zinc, copper, molybdenum, chlorine.",
            "**Manure** from decomposed animal excreta and plant waste adds organic matter and improves soil structure. Types: **compost**, **vermi-compost** (made using earthworms) and **green manure** (e.g. sun hemp or guar ploughed into the soil).",
            "**Fertilisers** are commercially made sources of N, P and K; they act fast, but overuse causes **water pollution** and harms soil fertility.",
            "**Organic farming** uses little or no chemical fertilisers or pesticides, relying on manures, bio-fertilisers like blue-green algae, neem leaves as bio-pesticides and crop rotation."
          ]
        },
        {
          heading: "Irrigation and Cropping Patterns",
          points: [
            "Irrigation sources: **wells** (dug wells and tube-wells), **canals**, **river lift systems** and **tanks**; rainwater harvesting and check-dams help recharge groundwater.",
            "**Mixed cropping**: growing two or more crops together on the same land, e.g. wheat + gram, groundnut + sunflower; it reduces the risk of total crop failure.",
            "**Intercropping**: growing two or more crops in a **definite row pattern**, e.g. alternate rows of soyabean and maize; crops with different nutrient needs are chosen.",
            "**Crop rotation**: growing different crops on the same land in a **pre-planned succession**, which helps maintain soil fertility."
          ]
        },
        {
          heading: "Crop Protection and Storage",
          points: [
            "**Weeds** are unwanted plants, e.g. Xanthium (gokhroo) and Parthenium (gajar ghas); they compete with crops for food, space and light.",
            "Insect pests cut roots, stems and leaves, suck cell sap, or bore into stems and fruits; crop diseases are caused by bacteria, fungi and viruses.",
            "Control methods: **pesticides** (herbicides, insecticides, fungicides), resistant varieties, summer ploughing and mechanical removal of weeds.",
            "Storage losses are caused by **biotic factors** (insects, rodents, fungi, mites, bacteria) and **abiotic factors** (unsuitable moisture and temperature).",
            "Preventive measures: proper drying and cleaning of grain before storage, and **fumigation** with chemicals."
          ]
        },
        {
          heading: "Animal Husbandry",
          points: [
            "**Animal husbandry** is the scientific management of livestock, including feeding, breeding and disease control.",
            "Cattle: **milch** animals give milk and **draught** animals do farm work. Exotic breeds (Jersey, Brown Swiss) are chosen for **long lactation**; local breeds (Red Sindhi, Sahiwal) for **disease resistance**.",
            "Poultry: **layers** are raised for eggs and **broilers** for meat.",
            "**Composite fish culture** grows 5–6 fish species together in one pond (e.g. catla, rohu, mrigal, common carp, grass carp), as they feed in different zones and do not compete for food.",
            "**Bee-keeping** (apiculture) gives honey and wax; the Italian bee Apis mellifera is used for high honey yield."
          ]
        }
      ],
      terms: [
        { term: "Hybridisation", meaning: "Crossing **genetically dissimilar plants** to obtain a variety with desirable characters." },
        { term: "Macronutrients", meaning: "Nutrients needed by plants in **large amounts**: N, P, K, Ca, Mg and S." },
        { term: "Green manure", meaning: "Young plants such as sun hemp or guar **ploughed into the soil** to enrich it with nitrogen and organic matter." },
        { term: "Mixed cropping", meaning: "Growing two or more crops **simultaneously on the same land** without a fixed row pattern." },
        { term: "Intercropping", meaning: "Growing two or more crops on the same field in a **definite row pattern**." },
        { term: "Crop rotation", meaning: "Growing **different crops** on the same land in a **pre-planned succession**." }
      ],
      qa: [
        {
          q: "Differentiate between mixed cropping and intercropping.",
          a: "In **mixed cropping**, two or more crops are grown together on the same land **without a set pattern**; the aim is to reduce the risk of crop failure. In **intercropping**, crops are grown in a **definite row pattern** (e.g. alternate rows of soyabean and maize), so each crop gets its nutrients and the land is used better."
        },
        {
          q: "Why is excessive use of fertilisers harmful?",
          a: "Fertilisers give quick results, but their **excessive use pollutes water bodies** and, over time, **reduces soil fertility** because the soil loses organic matter and useful microorganisms. They also do not improve soil structure the way manure does."
        },
        {
          q: "What factors cause loss of grains during storage?",
          a: "**Biotic factors**: insects, rodents, fungi, mites and bacteria. **Abiotic factors**: unsuitable moisture (humidity) and temperature in the storage place. These cause infestation, loss of weight, poor germination and discolouration of grains."
        }
      ],
      quiz: [
        {
          q: "Which of the following is a rabi crop?",
          options: ["Paddy", "Wheat", "Soyabean", "Maize"],
          answer: 1,
          explain: "**Wheat** is grown in winter (November to April). Paddy, soyabean and maize are kharif crops."
        },
        {
          q: "Which of these is a micronutrient for plants?",
          options: ["Nitrogen", "Potassium", "Calcium", "Zinc"],
          answer: 3,
          explain: "**Zinc** is needed in small amounts. Nitrogen, potassium and calcium are macronutrients."
        },
        {
          q: "Growing soyabean and maize in alternate rows on the same field is called:",
          options: ["mixed cropping", "crop rotation", "intercropping", "hybridisation"],
          answer: 2,
          explain: "A **definite row pattern** of two crops is intercropping."
        },
        {
          q: "Green manure is prepared by:",
          options: ["ploughing young plants like sun hemp into the soil", "decomposing kitchen waste using earthworms", "adding urea to the soil", "burning crop residue in the field"],
          answer: 0,
          explain: "Plants like sun hemp or guar are grown and then **ploughed into the soil**. Using earthworms gives vermi-compost."
        },
        {
          q: "Crossing genetically dissimilar plants to get a variety with desirable traits is called:",
          options: ["fumigation", "hybridisation", "irrigation", "intercropping"],
          answer: 1,
          explain: "**Hybridisation** combines useful traits from different varieties, species or genera."
        },
        {
          q: "Which of these is an abiotic factor that causes loss of stored grain?",
          options: ["Rodents", "Fungi", "High moisture", "Insects"],
          answer: 2,
          explain: "**Moisture** and temperature are non-living (abiotic) factors; rodents, fungi and insects are biotic."
        }
      ]
    }
  ]
});
