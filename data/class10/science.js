StudyData.add(10, "science", {
  // What this content follows. match: "textbook" | "older-book" | "topic". Set reviewed to a date once a teacher has checked it.
  syllabus: {board: "CBSE", match: "textbook", books: ["Science"], reviewed: false},
  chapters: [
    // ------------------------------------------------------------------
    {
      id: "chemical-reactions-and-equations",
      title: "Chemical Reactions and Equations",
      section: "Chemistry",
      summary: "A chemical reaction changes reactants into new products. This chapter covers writing and balancing chemical equations, types of reactions, oxidation and reduction, and the effects of oxidation such as corrosion and rancidity.",
      notes: [
        {
          heading: "Chemical Reactions and Equations",
          points: [
            "Signs of a chemical reaction: **change in state, change in colour, evolution of a gas, or change in temperature**.",
            "A **balanced chemical equation** has the same number of atoms of each element on both sides, as required by the **law of conservation of mass**.",
            "Physical states are shown as (s), (l), (g) and (aq) for aqueous solution, e.g. Zn(s) + H₂SO₄(aq) → ZnSO₄(aq) + H₂(g).",
            "Magnesium ribbon burns in air with a **dazzling white flame** to form a white powder, magnesium oxide: 2Mg + O₂ → 2MgO."
          ]
        },
        {
          heading: "Combination and Decomposition Reactions",
          points: [
            "**Combination reaction**: two or more reactants form a single product, e.g. CaO + H₂O → Ca(OH)₂ (quicklime forms slaked lime with a lot of heat).",
            "**Exothermic** reactions release heat (burning of natural gas, respiration); **endothermic** reactions absorb heat.",
            "**Decomposition reaction**: a single reactant breaks into simpler products using energy as **heat (thermal)**, **light (photolytic)** or **electricity (electrolytic)**.",
            "Thermal: CaCO₃ → CaO + CO₂; 2FeSO₄ → Fe₂O₃ + SO₂ + SO₃ (green crystals change colour); 2Pb(NO₃)₂ → 2PbO + 4NO₂ + O₂ (brown fumes of NO₂).",
            "Electrolysis of water: 2H₂O → 2H₂ + O₂; the volume of hydrogen is **double** that of oxygen.",
            "In sunlight, white silver chloride turns grey: 2AgCl → 2Ag + Cl₂. Such reactions are used in **black-and-white photography**."
          ]
        },
        {
          heading: "Displacement and Double Displacement",
          points: [
            "**Displacement reaction**: a more reactive element displaces a less reactive one from its compound, e.g. Fe + CuSO₄ → FeSO₄ + Cu.",
            "In this reaction the iron nail gets a **brownish coating** of copper and the **blue colour** of copper sulphate solution fades.",
            "**Double displacement reaction**: ions are exchanged between two reactants, e.g. Na₂SO₄ + BaCl₂ → BaSO₄ + 2NaCl.",
            "A reaction that forms an insoluble solid (**precipitate**) is a **precipitation reaction**: BaSO₄ is a white precipitate; Pb(NO₃)₂ + 2KI → PbI₂ + 2KNO₃ gives yellow PbI₂."
          ]
        },
        {
          heading: "Oxidation and Reduction",
          points: [
            "**Oxidation**: gain of oxygen or loss of hydrogen. **Reduction**: loss of oxygen or gain of hydrogen.",
            "In a **redox reaction** one reactant is oxidised while another is reduced, e.g. CuO + H₂ → Cu + H₂O: CuO is **reduced**, H₂ is **oxidised**.",
            "Heating copper powder in air: 2Cu + O₂ → 2CuO; the brown surface turns **black** (copper oxide).",
            "ZnO + C → Zn + CO: zinc oxide is reduced and carbon is oxidised."
          ]
        },
        {
          heading: "Corrosion and Rancidity",
          points: [
            "**Corrosion**: a metal is slowly eaten up by moisture, air, acids etc. Examples: **rusting of iron** (reddish-brown), **black coating on silver**, **green coating on copper**.",
            "Corrosion damages car bodies, bridges, iron railings and ships, causing huge losses.",
            "**Rancidity**: oxidation of fats and oils in food, which changes their **smell and taste**.",
            "Rancidity is prevented by adding **antioxidants**, storing food in airtight containers, and flushing chips packets with **nitrogen** gas."
          ]
        }
      ],
      formulas: [
        "2Mg + O₂ → 2MgO",
        "CaO + H₂O → Ca(OH)₂ + heat",
        "CH₄ + 2O₂ → CO₂ + 2H₂O + energy",
        "C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + energy (respiration)",
        "CaCO₃ → CaO + CO₂ (on heating)",
        "2FeSO₄ → Fe₂O₃ + SO₂ + SO₃ (on heating)",
        "2Pb(NO₃)₂ → 2PbO + 4NO₂ + O₂ (on heating)",
        "2H₂O → 2H₂ + O₂ (electrolysis)",
        "2AgCl → 2Ag + Cl₂ (sunlight)",
        "Fe + CuSO₄ → FeSO₄ + Cu",
        "Na₂SO₄ + BaCl₂ → BaSO₄ + 2NaCl",
        "Pb(NO₃)₂ + 2KI → PbI₂ + 2KNO₃",
        "CuO + H₂ → Cu + H₂O (on heating)",
        "3Fe + 4H₂O → Fe₃O₄ + 4H₂"
      ],
      terms: [
        { term: "Balanced chemical equation", meaning: "An equation with **equal numbers of atoms of each element** on both sides." },
        { term: "Exothermic reaction", meaning: "A reaction in which **heat is released**, e.g. respiration, burning of natural gas." },
        { term: "Precipitate", meaning: "An **insoluble solid** formed during a reaction in solution, e.g. white BaSO₄." },
        { term: "Oxidation", meaning: "**Gain of oxygen or loss of hydrogen** by a substance." },
        { term: "Redox reaction", meaning: "A reaction in which **oxidation and reduction take place together**." },
        { term: "Rancidity", meaning: "**Oxidation of fats and oils** in food, making it smell and taste bad." }
      ],
      examples: [
        {
          q: "Balance the equation: Fe + H₂O → Fe₃O₄ + H₂",
          steps: [
            "Fe: 3 atoms on the right, so write 3Fe on the left",
            "O: 4 atoms in Fe₃O₄, so write 4H₂O on the left",
            "H: now 8 atoms on the left, so write 4H₂ on the right",
            "Check: Fe 3 = 3, O 4 = 4, H 8 = 8"
          ],
          answer: "3Fe(s) + 4H₂O(g) → Fe₃O₄(s) + 4H₂(g)"
        }
      ],
      qa: [
        {
          q: "Why is respiration considered an exothermic reaction?",
          a: "During respiration, glucose combines with oxygen in our cells to form carbon dioxide and water, and **energy is released**: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + energy. Since energy is given out, it is an **exothermic** reaction."
        },
        {
          q: "Why does the colour of copper sulphate solution change when an iron nail is dipped in it?",
          a: "Iron is **more reactive** than copper, so it displaces copper from copper sulphate: Fe + CuSO₄ → FeSO₄ + Cu. The blue CuSO₄ is used up and **pale green FeSO₄** forms, so the colour changes. Brown copper deposits on the nail."
        },
        {
          q: "Why do we paint iron articles?",
          a: "Rusting needs both **air (oxygen) and moisture**. Paint forms a layer that keeps air and moisture away from the iron, so it **prevents rusting** (corrosion)."
        }
      ],
      quiz: [
        {
          q: "Which of these is a decomposition reaction?",
          options: ["CaO + H₂O → Ca(OH)₂", "CaCO₃ → CaO + CO₂", "Fe + CuSO₄ → FeSO₄ + Cu", "Na₂SO₄ + BaCl₂ → BaSO₄ + 2NaCl"],
          answer: 1,
          explain: "A **single reactant** (CaCO₃) breaks into two simpler products on heating."
        },
        {
          q: "In the reaction CuO + H₂ → Cu + H₂O, the substance that gets oxidised is:",
          options: ["CuO", "Cu", "H₂", "H₂O"],
          answer: 2,
          explain: "**H₂ gains oxygen** to become H₂O, so it is oxidised. CuO loses oxygen and is reduced."
        },
        {
          q: "When an iron nail is kept in copper sulphate solution, the solution turns:",
          options: ["pale green", "colourless", "dark blue", "brick red"],
          answer: 0,
          explain: "Iron displaces copper and forms **ferrous sulphate (FeSO₄)**, which is pale green."
        },
        {
          q: "Chips packets are flushed with nitrogen gas to prevent:",
          options: ["corrosion", "precipitation", "decomposition", "rancidity"],
          answer: 3,
          explain: "Nitrogen keeps oxygen away, so the oils in the chips are not oxidised: this prevents **rancidity**."
        },
        {
          q: "During electrolysis of water, the ratio of the volumes of hydrogen and oxygen collected is:",
          options: ["1 : 2", "2 : 1", "1 : 1", "1 : 8"],
          answer: 1,
          explain: "2H₂O → 2H₂ + O₂, so hydrogen and oxygen are collected in the volume ratio **2 : 1**. (1 : 8 is the mass ratio.)"
        },
        {
          q: "White silver chloride turns grey in sunlight because it:",
          options: ["combines with oxygen in air", "absorbs moisture from air", "decomposes into silver and chlorine", "reacts with carbon dioxide"],
          answer: 2,
          explain: "It is a **photolytic decomposition**: 2AgCl → 2Ag + Cl₂. The grey colour is silver metal."
        }
      ]
    },

    // ------------------------------------------------------------------
    {
      id: "acids-bases-and-salts",
      title: "Acids, Bases and Salts",
      section: "Chemistry",
      summary: "Acids, bases and salts are all around us, from lemon juice to baking soda. This chapter covers indicators, reactions of acids and bases, the pH scale, and important salts made from common salt.",
      notes: [
        {
          heading: "Indicators",
          points: [
            "**Acids** taste sour and turn **blue litmus red**; **bases** taste bitter, feel soapy and turn **red litmus blue**.",
            "Natural indicators: **litmus** (from lichen), turmeric (turns reddish-brown in bases), red cabbage leaves and coloured petals.",
            "Synthetic indicators: **phenolphthalein** (colourless in acid, pink in base) and **methyl orange** (red in acid, yellow in base).",
            "**Olfactory indicators** change smell: onion and vanilla essence lose their smell in a basic solution."
          ]
        },
        {
          heading: "Chemical Properties of Acids and Bases",
          points: [
            "Acid + metal → salt + **hydrogen gas**, e.g. Zn + H₂SO₄ → ZnSO₄ + H₂. Hydrogen burns with a **pop sound**.",
            "Some metals react with bases too: 2NaOH + Zn → Na₂ZnO₂ + H₂ (sodium zincate).",
            "Acid + metal carbonate or hydrogencarbonate → salt + water + **CO₂**, e.g. Na₂CO₃ + 2HCl → 2NaCl + H₂O + CO₂. CO₂ turns **lime water milky**.",
            "**Neutralisation**: acid + base → salt + water, e.g. NaOH + HCl → NaCl + H₂O.",
            "Metal oxides are **basic** (CuO + 2HCl → CuCl₂ + H₂O); non-metal oxides are **acidic** (Ca(OH)₂ + CO₂ → CaCO₃ + H₂O)."
          ]
        },
        {
          heading: "What Makes Acids and Bases",
          points: [
            "Acids give **H⁺ ions** in water, which exist as **hydronium ions (H₃O⁺)**: HCl + H₂O → H₃O⁺ + Cl⁻.",
            "Bases give **OH⁻ ions** in water. Bases that dissolve in water are called **alkalis**, e.g. NaOH, KOH, Ca(OH)₂.",
            "Glucose and alcohol contain hydrogen but are **not acids**, as they do not give H⁺ ions in water; their solutions do not conduct electricity.",
            "Dry HCl gas does not change the colour of dry litmus paper, because H⁺ ions form **only in the presence of water**.",
            "To dilute an acid, always add **acid to water slowly with stirring**, never water to acid: the process is highly exothermic and the mixture may splash."
          ]
        },
        {
          heading: "Strength of Acids and Bases: pH",
          points: [
            "**pH** measures H⁺ ion concentration on a scale from **0 to 14**: pH 7 is neutral, less than 7 is acidic, more than 7 is basic.",
            "Lower pH means a **stronger acid** (more H⁺ ions); higher pH means a stronger base. **Universal indicator** shows different colours at different pH values.",
            "Our body works within pH **7.0 to 7.8**. Rain with pH below **5.6** is **acid rain**.",
            "**Tooth decay** starts when the pH of the mouth falls below **5.5**; toothpastes are basic and neutralise the excess acid.",
            "**Antacids** like milk of magnesia (Mg(OH)₂) neutralise excess stomach acid. A bee sting injects an acid; a mild base like baking soda gives relief."
          ]
        },
        {
          heading: "Salts and Common Salt",
          points: [
            "Salt of strong acid + strong base is **neutral** (NaCl, pH 7); strong acid + weak base gives an **acidic** salt (NH₄Cl); weak acid + strong base gives a **basic** salt (CH₃COONa, Na₂CO₃).",
            "**Common salt (NaCl)** is the raw material for NaOH, bleaching powder, baking soda and washing soda. Solid salt deposits are called **rock salt**.",
            "**Chlor-alkali process**: electrolysis of brine gives NaOH, Cl₂ and H₂: 2NaCl + 2H₂O → 2NaOH + Cl₂ + H₂. **Chlorine forms at the anode**, hydrogen at the cathode, and NaOH near the cathode.",
            "**Water of crystallisation** is the fixed number of water molecules in one formula unit of a salt, e.g. CuSO₄·5H₂O (blue; turns white on heating), Na₂CO₃·10H₂O, CaSO₄·2H₂O (gypsum)."
          ]
        },
        {
          heading: "Important Salts",
          points: [
            "**Bleaching powder (CaOCl₂)**: Ca(OH)₂ + Cl₂ → CaOCl₂ + H₂O. Used to bleach cotton, linen and wood pulp, to **disinfect drinking water**, and as an oxidising agent.",
            "**Baking soda (NaHCO₃)**: on heating, 2NaHCO₃ → Na₂CO₃ + H₂O + CO₂. Used in **baking powder** (with tartaric acid), as an **antacid** and in soda-acid fire extinguishers.",
            "**Washing soda (Na₂CO₃·10H₂O)**: made by recrystallising sodium carbonate; used in glass, soap and paper industries, for cleaning, and to remove **permanent hardness** of water.",
            "**Plaster of Paris (CaSO₄·½H₂O)**: made by heating gypsum at **373 K**. It sets into hard gypsum on mixing with water; used for supporting **fractured bones**, toys and decoration."
          ]
        }
      ],
      formulas: [
        "Zn + H₂SO₄ → ZnSO₄ + H₂",
        "2NaOH + Zn → Na₂ZnO₂ + H₂",
        "Na₂CO₃ + 2HCl → 2NaCl + H₂O + CO₂",
        "NaHCO₃ + HCl → NaCl + H₂O + CO₂",
        "Ca(OH)₂ + CO₂ → CaCO₃ + H₂O (lime water turns milky)",
        "NaOH + HCl → NaCl + H₂O (neutralisation)",
        "CuO + 2HCl → CuCl₂ + H₂O",
        "HCl + H₂O → H₃O⁺ + Cl⁻",
        "2NaCl + 2H₂O → 2NaOH + Cl₂ + H₂ (chlor-alkali process)",
        "Ca(OH)₂ + Cl₂ → CaOCl₂ + H₂O (bleaching powder)",
        "NaCl + H₂O + CO₂ + NH₃ → NH₄Cl + NaHCO₃ (baking soda)",
        "2NaHCO₃ → Na₂CO₃ + H₂O + CO₂ (on heating)",
        "Na₂CO₃ + 10H₂O → Na₂CO₃·10H₂O (washing soda)",
        "CaSO₄·2H₂O → CaSO₄·½H₂O + 1½H₂O (gypsum heated at 373 K)",
        "CaSO₄·½H₂O + 1½H₂O → CaSO₄·2H₂O (setting of plaster of Paris)",
        "pH less than 7: acidic; pH = 7: neutral; pH more than 7: basic"
      ],
      terms: [
        { term: "Alkali", meaning: "A **base that dissolves in water**, e.g. NaOH, KOH." },
        { term: "Neutralisation", meaning: "Reaction of an **acid with a base** to form salt and water." },
        { term: "pH scale", meaning: "A scale from **0 to 14** measuring H⁺ ion concentration; 7 is neutral." },
        { term: "Olfactory indicator", meaning: "A substance whose **smell changes** in acidic or basic medium, e.g. onion, vanilla." },
        { term: "Water of crystallisation", meaning: "**Fixed number of water molecules** in one formula unit of a salt, e.g. 5H₂O in blue vitriol." },
        { term: "Chlor-alkali process", meaning: "Electrolysis of **brine** to produce NaOH, chlorine and hydrogen." }
      ],
      qa: [
        {
          q: "Why does an aqueous solution of an acid conduct electricity?",
          a: "In water, an acid produces **H⁺ ions (as H₃O⁺)**. These ions carry electric charge, so the solution **conducts electricity**."
        },
        {
          q: "Why should curd and sour substances not be kept in brass and copper vessels?",
          a: "Curd and sour substances contain **acids**, which react with copper and brass to form **harmful (poisonous) compounds**. These spoil the food and can affect health."
        },
        {
          q: "What happens when baking soda is heated? Why is it used in baking powder?",
          a: "On heating, 2NaHCO₃ → Na₂CO₃ + H₂O + **CO₂**. The CO₂ makes the dough **rise**, so cakes become soft and spongy. Baking powder also contains a mild edible acid like **tartaric acid**, which neutralises the sodium carbonate formed so the cake does not taste bitter."
        }
      ],
      quiz: [
        {
          q: "A solution turns red litmus blue. Its pH is likely to be:",
          options: ["1", "4", "5", "10"],
          answer: 3,
          explain: "Turning red litmus blue means the solution is **basic**, so its pH is **more than 7**."
        },
        {
          q: "Which gas is evolved when dilute hydrochloric acid reacts with zinc granules?",
          options: ["Hydrogen", "Oxygen", "Carbon dioxide", "Chlorine"],
          answer: 0,
          explain: "Acid + metal → salt + **hydrogen**: Zn + 2HCl → ZnCl₂ + H₂."
        },
        {
          q: "The chemical formula of plaster of Paris is:",
          options: ["CaSO₄·2H₂O", "CaSO₄·½H₂O", "CaOCl₂", "CaCO₃"],
          answer: 1,
          explain: "Plaster of Paris is **calcium sulphate hemihydrate, CaSO₄·½H₂O**. CaSO₄·2H₂O is gypsum."
        },
        {
          q: "Tooth decay starts when the pH of the mouth falls below:",
          options: ["7.0", "6.5", "5.5", "4.0"],
          answer: 2,
          explain: "Bacteria produce acids from food; below pH **5.5** tooth enamel starts to corrode."
        },
        {
          q: "Which of the following salts gives a basic solution in water?",
          options: ["Na₂CO₃", "NaCl", "NH₄Cl", "KNO₃"],
          answer: 0,
          explain: "Na₂CO₃ is a salt of a **weak acid (H₂CO₃) and a strong base (NaOH)**, so its solution is basic. NH₄Cl is acidic; NaCl and KNO₃ are neutral."
        },
        {
          q: "In the chlor-alkali process, the gas released at the anode is:",
          options: ["hydrogen", "oxygen", "carbon dioxide", "chlorine"],
          answer: 3,
          explain: "**Chlorine** is released at the anode and hydrogen at the cathode; NaOH forms near the cathode."
        }
      ]
    },

    // ------------------------------------------------------------------
    {
      id: "metals-and-non-metals",
      title: "Metals and Non-metals",
      section: "Chemistry",
      summary: "Elements are classed as metals or non-metals by their properties. This chapter covers their physical and chemical properties, the reactivity series, ionic compounds, extraction and refining of metals, corrosion and alloys.",
      notes: [
        {
          heading: "Physical Properties",
          points: [
            "Metals are **lustrous, malleable, ductile, sonorous** and good conductors of heat and electricity. Most are hard, but sodium and potassium can be cut with a knife.",
            "**Silver and copper** are the best conductors of heat; lead and mercury are poor conductors.",
            "**Gold** is the most ductile metal: 1 g of gold can be drawn into a wire about 2 km long. Gold and silver are the most malleable metals.",
            "**Mercury** is liquid at room temperature; **gallium and caesium** have such low melting points that they melt on the palm.",
            "Non-metals are usually dull, brittle and poor conductors. Exceptions: **iodine** is lustrous; **graphite** conducts electricity; **diamond** is the hardest natural substance with a very high melting point. **Bromine** is a liquid non-metal."
          ]
        },
        {
          heading: "Chemical Properties of Metals",
          points: [
            "**With oxygen**: metal + oxygen → metal oxide (basic), e.g. 2Cu + O₂ → 2CuO; 4Al + 3O₂ → 2Al₂O₃.",
            "**Amphoteric oxides** like Al₂O₃ and ZnO react with both acids and bases: Al₂O₃ + 6HCl → 2AlCl₃ + 3H₂O; Al₂O₃ + 2NaOH → 2NaAlO₂ + H₂O.",
            "Sodium and potassium react so vigorously that they are **stored in kerosene**. Mg, Al, Zn and Pb get a **protective oxide layer**. Silver and gold do not react with oxygen even at high temperature.",
            "**With water**: Na and K react violently with cold water; calcium reacts less violently and **floats** (H₂ bubbles stick to it); Mg reacts with hot water; Al, Fe and Zn react only with **steam**; Pb, Cu, Ag and Au do not react.",
            "**With dilute acids**: metal + acid → salt + H₂. Copper, silver and gold do not react. With nitric acid, H₂ is usually not evolved (HNO₃ is a strong oxidising agent), except with Mg and Mn in very dilute HNO₃.",
            "**Aqua regia**: a freshly prepared mixture of concentrated HCl and concentrated HNO₃ in the ratio **3 : 1**; it can dissolve gold and platinum."
          ]
        },
        {
          heading: "Reactivity Series",
          points: [
            "Reactivity series (most to least reactive): **K > Na > Ca > Mg > Al > Zn > Fe > Pb > [H] > Cu > Hg > Ag > Au**.",
            "A more reactive metal **displaces** a less reactive metal from its salt solution, e.g. Fe + CuSO₄ → FeSO₄ + Cu, but Cu cannot displace Fe from FeSO₄.",
            "Metals above hydrogen displace hydrogen from dilute acids; metals below it (Cu, Hg, Ag, Au) do not."
          ]
        },
        {
          heading: "Ionic Compounds",
          points: [
            "Metals **lose** electrons to form cations; non-metals **gain** electrons to form anions. Na (2, 8, 1) → Na⁺ (2, 8) + e⁻; Cl (2, 8, 7) + e⁻ → Cl⁻ (2, 8, 8).",
            "**Ionic (electrovalent) compounds** form by **transfer of electrons** from a metal to a non-metal, e.g. NaCl, MgCl₂.",
            "Properties: hard but brittle solids; **high melting and boiling points** (strong forces between ions); soluble in water but not in kerosene or petrol.",
            "They **conduct electricity in molten state or in solution** (ions can move), but not as solids (ions are fixed in place)."
          ]
        },
        {
          heading: "Extraction and Refining of Metals",
          points: [
            "**Minerals** are naturally occurring elements or compounds; minerals from which a metal can be extracted profitably are **ores**. Impurities in the ore are called **gangue**.",
            "Metals **low** in the series (Hg, Cu) are obtained by heating their sulphide ores in air: 2HgS + 3O₂ → 2HgO + 2SO₂, then 2HgO → 2Hg + O₂.",
            "Metals in the **middle** (Zn, Fe, Pb): sulphide ores are **roasted** (heated strongly in excess air) and carbonate ores are **calcined** (heated strongly in limited air) to get oxides, which are then reduced with carbon: ZnO + C → Zn + CO.",
            "**Thermit reaction**: Fe₂O₃ + 2Al → 2Fe + Al₂O₃ + heat; the molten iron is used to **join broken railway tracks**.",
            "Metals **high** in the series (Na, Mg, Ca, Al) are extracted by **electrolytic reduction** of their molten chlorides or oxides; the metal deposits at the cathode.",
            "**Electrolytic refining**: impure metal is the **anode**, a thin strip of pure metal is the **cathode**, and a salt solution of the metal is the electrolyte. Pure metal deposits on the cathode; insoluble impurities settle as **anode mud**."
          ]
        },
        {
          heading: "Corrosion and Alloys",
          points: [
            "**Rusting** of iron needs both **air (oxygen) and water (moisture)**.",
            "Prevention: painting, oiling, greasing, **galvanising** (coating with zinc), chrome plating, anodising and making alloys.",
            "An **alloy** is a homogeneous mixture of two or more metals, or a metal and a non-metal. **Steel** = iron + a little carbon; **stainless steel** = iron + nickel + chromium (does not rust).",
            "**Brass** = copper + zinc; **bronze** = copper + tin; **solder** = lead + tin (low melting point, used to weld electrical wires). An alloy containing mercury is an **amalgam**.",
            "Pure gold is 24 carat and soft; ornaments use **22 carat gold** (22 parts gold + 2 parts copper or silver) to make it harder.",
            "The electrical conductivity and melting point of an alloy are **lower** than those of the pure metals."
          ]
        }
      ],
      formulas: [
        "2Na + 2H₂O → 2NaOH + H₂ + heat",
        "Ca + 2H₂O → Ca(OH)₂ + H₂",
        "3Fe + 4H₂O → Fe₃O₄ + 4H₂ (with steam)",
        "Al₂O₃ + 6HCl → 2AlCl₃ + 3H₂O",
        "Al₂O₃ + 2NaOH → 2NaAlO₂ + H₂O",
        "Fe + CuSO₄ → FeSO₄ + Cu",
        "2ZnS + 3O₂ → 2ZnO + 2SO₂ (roasting)",
        "ZnCO₃ → ZnO + CO₂ (calcination)",
        "ZnO + C → Zn + CO (reduction)",
        "2HgS + 3O₂ → 2HgO + 2SO₂; 2HgO → 2Hg + O₂",
        "Fe₂O₃ + 2Al → 2Fe + Al₂O₃ + heat (thermit reaction)",
        "Aqua regia = conc. HCl : conc. HNO₃ = 3 : 1",
        "Reactivity: K > Na > Ca > Mg > Al > Zn > Fe > Pb > H > Cu > Hg > Ag > Au"
      ],
      terms: [
        { term: "Amphoteric oxide", meaning: "A metal oxide that reacts with **both acids and bases**, e.g. Al₂O₃, ZnO." },
        { term: "Gangue", meaning: "**Unwanted impurities** such as soil and sand present in an ore." },
        { term: "Roasting", meaning: "Heating a **sulphide ore** strongly in **excess air** to convert it into an oxide." },
        { term: "Calcination", meaning: "Heating a **carbonate ore** strongly in **limited air** to convert it into an oxide." },
        { term: "Galvanisation", meaning: "Protecting iron or steel from rusting by coating it with a thin layer of **zinc**." },
        { term: "Alloy", meaning: "A **homogeneous mixture** of two or more metals, or a metal and a non-metal, e.g. brass, steel." }
      ],
      qa: [
        {
          q: "Why is sodium kept immersed in kerosene oil?",
          a: "Sodium is **highly reactive**. In open air it reacts vigorously with oxygen and moisture and can **catch fire**. Kerosene does not react with sodium and keeps air and moisture away from it."
        },
        {
          q: "Why do ionic compounds have high melting points?",
          a: "Ionic compounds are made of oppositely charged ions held by **strong electrostatic forces of attraction**. A large amount of energy is needed to overcome these forces, so their melting points are high."
        },
        {
          q: "Differentiate between roasting and calcination.",
          a: "**Roasting**: a **sulphide ore** is heated strongly in **excess air**, e.g. 2ZnS + 3O₂ → 2ZnO + 2SO₂. **Calcination**: a **carbonate ore** is heated strongly in **limited air**, e.g. ZnCO₃ → ZnO + CO₂. Both convert the ore into an oxide."
        }
      ],
      quiz: [
        {
          q: "Which metal is stored in kerosene?",
          options: ["Sodium", "Aluminium", "Copper", "Iron"],
          answer: 0,
          explain: "**Sodium** reacts so vigorously with air and moisture that it is kept under kerosene."
        },
        {
          q: "An oxide that reacts with both acids and bases is:",
          options: ["Na₂O", "Al₂O₃", "CO₂", "CaO"],
          answer: 1,
          explain: "**Al₂O₃** is amphoteric. Na₂O and CaO are basic; CO₂ is acidic."
        },
        {
          q: "Which of the following metals does not react with dilute hydrochloric acid?",
          options: ["Zinc", "Magnesium", "Iron", "Copper"],
          answer: 3,
          explain: "**Copper** is below hydrogen in the reactivity series, so it cannot displace hydrogen from acids."
        },
        {
          q: "Ionic compounds conduct electricity:",
          options: ["in the solid state", "only as a gas", "in molten state or in aqueous solution", "only when mixed with kerosene"],
          answer: 2,
          explain: "Ions are free to move only in the **molten state or in solution**; in solids they are held in fixed positions."
        },
        {
          q: "Galvanisation protects iron from rusting by coating it with:",
          options: ["tin", "chromium", "copper", "zinc"],
          answer: 3,
          explain: "A galvanised iron article is coated with **zinc**, which protects it even if the coating is broken."
        },
        {
          q: "The thermit reaction is used to:",
          options: ["extract sodium", "refine copper", "join broken railway tracks", "prepare bleaching powder"],
          answer: 2,
          explain: "Fe₂O₃ + 2Al → 2Fe + Al₂O₃ releases so much heat that the iron formed is **molten**; it is used to weld railway tracks."
        }
      ]
    },

    // ------------------------------------------------------------------
    {
      id: "carbon-and-its-compounds",
      title: "Carbon and its Compounds",
      section: "Chemistry",
      summary: "Carbon forms a huge number of compounds by sharing electrons. This chapter covers covalent bonding, catenation, hydrocarbons, functional groups, homologous series, nomenclature, chemical properties, ethanol, ethanoic acid, and soaps and detergents.",
      notes: [
        {
          heading: "Covalent Bonding in Carbon",
          points: [
            "Carbon (Z = 6, configuration 2, 4) can neither easily gain nor lose four electrons, so it **shares electrons** to form **covalent bonds**.",
            "Single bond: H₂, Cl₂, CH₄; **double bond**: O₂ (O=O), C₂H₄; **triple bond**: N₂ (N≡N), C₂H₂.",
            "Covalent compounds have **low melting and boiling points** and are generally **poor conductors** of electricity, as no ions are formed.",
            "Methane (CH₄), the main component of biogas and CNG, has **four single covalent bonds**."
          ]
        },
        {
          heading: "Versatile Nature of Carbon",
          points: [
            "**Catenation**: carbon links with other carbon atoms to form long chains, branched chains and rings.",
            "**Tetravalency**: carbon has valency 4, so it bonds with four other atoms such as C, H, O, N, S and Cl.",
            "Carbon is small, so it holds shared electrons strongly and forms **very stable** compounds.",
            "**Saturated hydrocarbons** (alkanes) have only single bonds; **unsaturated** hydrocarbons have double (alkenes) or triple (alkynes) bonds.",
            "**Structural isomers** have the same molecular formula but different structures, e.g. two structures for C₄H₁₀ (a straight chain and a branched chain)."
          ]
        },
        {
          heading: "Functional Groups, Homologous Series and Naming",
          points: [
            "**Functional groups** decide the properties: halo (–Cl, –Br), alcohol (–OH), aldehyde (–CHO), ketone (–CO–), carboxylic acid (–COOH).",
            "**Homologous series**: compounds with the same functional group and similar chemical properties; successive members differ by **–CH₂–** (14 u).",
            "General formulas: alkanes **CₙH₂ₙ₊₂**, alkenes **CₙH₂ₙ**, alkynes **CₙH₂ₙ₋₂**.",
            "In a homologous series, **physical properties** (melting and boiling points) change gradually with mass, while **chemical properties** stay similar.",
            "Names use the carbon count (meth-, eth-, prop-, but-, pent-) plus a suffix: -ol (alcohol), -al (aldehyde), -one (ketone), -oic acid, -ene, -yne; halogens are prefixes (chloropropane). E.g. CH₃COCH₃ is propanone."
          ]
        },
        {
          heading: "Chemical Properties of Carbon Compounds",
          points: [
            "**Combustion**: carbon compounds burn in oxygen to give CO₂, water, heat and light. Saturated hydrocarbons burn with a **clean blue flame**; unsaturated ones give a **yellow, sooty flame**.",
            "**Oxidation**: alkaline KMnO₄ or acidified K₂Cr₂O₇ (**oxidising agents**) convert ethanol into ethanoic acid.",
            "**Addition reaction**: unsaturated hydrocarbons add hydrogen in the presence of a **nickel or palladium catalyst** (hydrogenation); used to make vegetable ghee from vegetable oils.",
            "**Substitution reaction**: in sunlight, chlorine replaces hydrogen in saturated hydrocarbons: CH₄ + Cl₂ → CH₃Cl + HCl.",
            "Animal fats contain **saturated** fatty acids, which are harmful to health; oils with **unsaturated** fatty acids are better for cooking."
          ]
        },
        {
          heading: "Ethanol and Ethanoic Acid",
          points: [
            "**Ethanol (C₂H₅OH)**: liquid at room temperature, soluble in water; found in alcoholic drinks, tincture of iodine and cough syrups.",
            "Ethanol + sodium → sodium ethoxide + **hydrogen**. Heating ethanol with excess concentrated H₂SO₄ at **443 K** dehydrates it to **ethene**.",
            "**Ethanoic acid (CH₃COOH)**: a 5–8% solution in water is **vinegar**. Pure ethanoic acid melts at 290 K and freezes in cold weather, so it is called **glacial acetic acid**.",
            "**Esterification**: acid + alcohol → **ester** (sweet-smelling) + water, with an acid catalyst. **Saponification**: ester + NaOH → alcohol + sodium salt of the acid (used to make soap).",
            "Ethanoic acid reacts with carbonates and hydrogencarbonates to give a salt, water and **CO₂**."
          ]
        },
        {
          heading: "Soaps and Detergents",
          points: [
            "**Soaps** are sodium or potassium salts of **long-chain carboxylic acids**.",
            "A soap molecule has an **ionic (hydrophilic) end** that dissolves in water and a long **hydrocarbon (hydrophobic) tail** that dissolves in oil.",
            "In water, soap molecules form **micelles**: tails point inward around the oily dirt and ionic ends face outward, so the dirt is rinsed away.",
            "In **hard water** (containing calcium and magnesium salts), soap forms an insoluble precipitate called **scum**, so more soap is wasted.",
            "**Detergents** are generally sodium salts of sulphonic acids or ammonium salts with chloride or bromide ions; their charged ends **do not form insoluble precipitates** with Ca²⁺ and Mg²⁺, so they work in hard water."
          ]
        }
      ],
      formulas: [
        "CH₄ + 2O₂ → CO₂ + 2H₂O + heat and light",
        "CH₄ + Cl₂ → CH₃Cl + HCl (in sunlight)",
        "Oxidation of ethanol: CH₃CH₂OH → CH₃COOH (oxidising agent: alkaline KMnO₄ + heat, or acidified K₂Cr₂O₇)",
        "2Na + 2CH₃CH₂OH → 2CH₃CH₂ONa + H₂",
        "CH₃CH₂OH → CH₂=CH₂ + H₂O (hot conc. H₂SO₄, 443 K)",
        "CH₃COOH + CH₃CH₂OH → CH₃COOCH₂CH₃ + H₂O (acid catalyst; esterification)",
        "CH₃COOC₂H₅ + NaOH → C₂H₅OH + CH₃COONa (saponification)",
        "CH₃COOH + NaOH → CH₃COONa + H₂O",
        "2CH₃COOH + Na₂CO₃ → 2CH₃COONa + H₂O + CO₂",
        "CH₃COOH + NaHCO₃ → CH₃COONa + H₂O + CO₂",
        "Alkanes CₙH₂ₙ₊₂; alkenes CₙH₂ₙ; alkynes CₙH₂ₙ₋₂"
      ],
      terms: [
        { term: "Catenation", meaning: "The ability of carbon to **link with other carbon atoms** to form long chains, branches and rings." },
        { term: "Homologous series", meaning: "A series of compounds with the **same functional group**, in which successive members differ by **–CH₂–**." },
        { term: "Functional group", meaning: "An atom or group of atoms that gives a carbon compound its **characteristic properties**, e.g. –OH, –COOH." },
        { term: "Isomers", meaning: "Compounds with the **same molecular formula** but **different structures**." },
        { term: "Esterification", meaning: "Reaction of a **carboxylic acid with an alcohol** to form a sweet-smelling ester." },
        { term: "Micelle", meaning: "A cluster of soap molecules with **hydrocarbon tails inside** (trapping oil) and **ionic ends outside**, facing water." }
      ],
      qa: [
        {
          q: "Why are carbon compounds generally poor conductors of electricity?",
          a: "Carbon compounds are formed by **sharing of electrons (covalent bonds)**. No ions are formed, and without free ions or electrons they cannot carry current, so they are **poor conductors**."
        },
        {
          q: "While cooking, the bottoms of vessels get blackened. What does this mean?",
          a: "It means the fuel is **not burning completely**, usually because the **air holes of the stove are blocked**. Incomplete combustion gives a sooty (yellow) flame that deposits carbon on vessels and wastes fuel. The air holes should be cleaned."
        },
        {
          q: "Explain how soap removes an oily stain from clothes.",
          a: "A soap molecule has an **ionic end** that dissolves in water and a **hydrocarbon tail** that dissolves in oil. In water, the tails attach to the oily dirt and the ionic ends stay outside, forming a **micelle** around the dirt. When rinsed with water, the micelles carry the dirt away."
        }
      ],
      quiz: [
        {
          q: "The member of the alkane series that comes just after C₂H₆ (ethane) is:",
          options: ["C₃H₆", "C₃H₈", "C₂H₄", "C₄H₁₀"],
          answer: 1,
          explain: "Add –CH₂– to C₂H₆ to get **C₃H₈** (propane), which fits CₙH₂ₙ₊₂. C₃H₆ is an alkene."
        },
        {
          q: "The functional group present in ethanoic acid is:",
          options: ["–OH", "–CHO", "–COOH", "–CO–"],
          answer: 2,
          explain: "Ethanoic acid (CH₃COOH) is a carboxylic acid with the **–COOH** group."
        },
        {
          q: "Conversion of vegetable oil into vanaspati ghee is an example of:",
          options: ["substitution reaction", "oxidation reaction", "esterification", "addition reaction"],
          answer: 3,
          explain: "Hydrogen is **added** across double bonds using a nickel catalyst: an **addition reaction** (hydrogenation)."
        },
        {
          q: "Soap does not form lather easily with hard water because:",
          options: ["it forms an insoluble scum with calcium and magnesium ions", "hard water is strongly acidic", "soap does not dissolve in water at all", "hard water contains too much sodium"],
          answer: 0,
          explain: "Ca²⁺ and Mg²⁺ ions in hard water react with soap to form insoluble **scum**."
        },
        {
          q: "Heating ethanol with ethanoic acid in the presence of an acid catalyst gives:",
          options: ["a soap", "an ester", "an aldehyde", "an alkene"],
          answer: 1,
          explain: "This is **esterification**; the product, ethyl ethanoate, is a sweet-smelling ester."
        },
        {
          q: "The total number of single covalent bonds in a molecule of ethane (C₂H₆) is:",
          options: ["6", "8", "7", "3"],
          answer: 2,
          explain: "Ethane has **6 C–H bonds + 1 C–C bond = 7** single covalent bonds."
        }
      ]
    },

    // ------------------------------------------------------------------
    {
      id: "life-processes",
      title: "Life Processes",
      section: "Biology",
      summary: "Life processes such as nutrition, respiration, transportation and excretion keep organisms alive. This chapter covers photosynthesis, human digestion, aerobic and anaerobic respiration, circulation in humans, transport in plants, and excretion.",
      notes: [
        {
          heading: "Nutrition in Plants",
          points: [
            "**Autotrophs** make their own food from simple substances (CO₂ and water) using sunlight; **heterotrophs** depend on other organisms for food.",
            "**Photosynthesis**: 6CO₂ + 12H₂O → C₆H₁₂O₆ + 6O₂ + 6H₂O, in the presence of **sunlight and chlorophyll**.",
            "Steps: (i) **absorption of light** by chlorophyll, (ii) conversion of light energy to chemical energy and **splitting of water** into hydrogen and oxygen, (iii) **reduction of CO₂** to carbohydrates.",
            "Gases are exchanged through **stomata**. **Guard cells** control the pore: they swell when water flows in, opening the pore, and shrink to close it.",
            "Desert plants take in CO₂ **at night** and store it as an intermediate, which is used during the day."
          ]
        },
        {
          heading: "Nutrition in Human Beings",
          points: [
            "**Mouth**: salivary amylase in saliva breaks down **starch into simple sugar**. Food moves down the oesophagus by **peristalsis** (rhythmic muscle contractions).",
            "**Stomach**: gastric glands release **hydrochloric acid** (makes the medium acidic for pepsin), **pepsin** (digests proteins) and **mucus** (protects the stomach lining from acid).",
            "**Small intestine**: **bile** from the liver makes the food alkaline and breaks fats into small globules (emulsification); pancreatic juice has **trypsin** (proteins) and **lipase** (fats).",
            "Intestinal juice completes digestion: proteins → **amino acids**, carbohydrates → **glucose**, fats → **fatty acids and glycerol**.",
            "**Villi**, finger-like projections of the small intestine, increase the surface area for **absorption**. The large intestine absorbs excess water."
          ]
        },
        {
          heading: "Respiration",
          points: [
            "First step in all organisms: glucose (6-carbon) → **pyruvate** (3-carbon) + energy, in the **cytoplasm**.",
            "**Aerobic respiration** (in mitochondria, with oxygen): pyruvate → CO₂ + water + **a lot of energy**.",
            "**Anaerobic respiration** in **yeast** (fermentation): pyruvate → **ethanol + CO₂** + energy. In our **muscles** during lack of oxygen: pyruvate → **lactic acid** + energy, causing **cramps**.",
            "Energy released is stored as **ATP**, the energy currency of the cell.",
            "Air passes through nostrils → pharynx → larynx → **trachea** (rings of cartilage stop it collapsing) → bronchi → bronchioles → **alveoli**, where gases are exchanged with blood.",
            "**Haemoglobin** in red blood cells carries oxygen; CO₂ is more soluble in water and is mostly carried **dissolved in blood plasma**."
          ]
        },
        {
          heading: "Transportation in Human Beings",
          points: [
            "The human heart has **four chambers**; the right side receives deoxygenated blood and the left side pumps **oxygenated blood** to the body, so the two never mix.",
            "**Double circulation**: blood passes through the heart **twice** in one cycle (body and lungs). This gives an efficient oxygen supply, needed by mammals and birds to keep body temperature constant.",
            "Fishes have a **two-chambered** heart; amphibians and many reptiles have a **three-chambered** heart.",
            "**Arteries** carry blood away from the heart and have thick, elastic walls; **veins** bring blood back and have **valves**; **capillaries** have walls one cell thick for exchange with tissues.",
            "**Platelets** help blood to **clot** at injuries. **Lymph** carries digested fats from the intestine and drains excess tissue fluid back into the blood.",
            "Normal blood pressure is about **120/80 mm of Hg** (systolic/diastolic), measured with a **sphygmomanometer**."
          ]
        },
        {
          heading: "Transportation in Plants",
          points: [
            "**Xylem** carries water and minerals from the roots; **phloem** carries food (such as sucrose) made in the leaves.",
            "Water rises mainly due to **root pressure** at night and **transpiration pull** during the day.",
            "**Transpiration**: loss of water as vapour from the aerial parts (mainly through stomata); it helps upward movement of water and regulates temperature.",
            "**Translocation**: transport of food through phloem, in **both upward and downward** directions, using energy from **ATP**."
          ]
        },
        {
          heading: "Excretion",
          points: [
            "The human excretory system has a pair of **kidneys**, ureters, a urinary bladder and the urethra.",
            "The **nephron** is the basic filtration unit of the kidney. Blood is filtered in the **glomerulus** inside **Bowman's capsule**.",
            "Useful substances such as glucose, amino acids, salts and much water are **selectively reabsorbed** as the filtrate moves along the tubule.",
            "**Haemodialysis** (artificial kidney) removes nitrogenous wastes from the blood of patients with kidney failure.",
            "Plants get rid of wastes through stomata (O₂, water vapour), by storing them in **leaves that fall off**, in cell vacuoles, or as **resins and gums** in old xylem."
          ]
        }
      ],
      formulas: [
        "Photosynthesis: 6CO₂ + 12H₂O → C₆H₁₂O₆ + 6O₂ + 6H₂O (chlorophyll, sunlight)",
        "Glucose → pyruvate + energy (cytoplasm)",
        "Pyruvate → CO₂ + H₂O + energy (mitochondria, with oxygen)",
        "Pyruvate → ethanol + CO₂ + energy (yeast, without oxygen)",
        "Pyruvate → lactic acid + energy (muscle cells, lack of oxygen)",
        "Normal blood pressure ≈ 120/80 mm of Hg"
      ],
      terms: [
        { term: "Autotrophic nutrition", meaning: "Nutrition in which an organism **makes its own food** from simple inorganic substances, e.g. photosynthesis." },
        { term: "Peristalsis", meaning: "**Rhythmic contraction** of muscles of the alimentary canal that pushes food forward." },
        { term: "Villi", meaning: "Finger-like projections of the small intestine that **increase surface area for absorption**." },
        { term: "Double circulation", meaning: "Blood passes through the heart **twice** in one complete cycle (lungs and body)." },
        { term: "Transpiration", meaning: "**Loss of water as vapour** from the aerial parts of a plant." },
        { term: "Nephron", meaning: "The **basic filtration unit** of the kidney." }
      ],
      qa: [
        {
          q: "Why is it necessary to separate oxygenated and deoxygenated blood in mammals and birds?",
          a: "Mammals and birds need **a lot of energy** to maintain a **constant body temperature**. Separation (a four-chambered heart and double circulation) ensures a **highly efficient supply of oxygen** to the body."
        },
        {
          q: "How are the alveoli designed to maximise the exchange of gases?",
          a: "The alveoli are tiny balloon-like sacs that give a **very large surface area** for gas exchange. Their walls are **very thin** and have an **extensive network of blood capillaries**, so O₂ and CO₂ diffuse quickly between air and blood."
        },
        {
          q: "Differentiate between aerobic and anaerobic respiration.",
          a: "**Aerobic** respiration needs oxygen, takes place in the **mitochondria**, gives **CO₂ and water**, and releases **much more energy**. **Anaerobic** respiration occurs without oxygen in the **cytoplasm**, gives **ethanol and CO₂** (yeast) or **lactic acid** (muscles), and releases less energy."
        }
      ],
      quiz: [
        {
          q: "In humans, digestion of proteins begins in the:",
          options: ["mouth", "stomach", "small intestine", "large intestine"],
          answer: 1,
          explain: "**Pepsin** in the stomach starts protein digestion. Saliva in the mouth acts only on starch."
        },
        {
          q: "Lactic acid builds up in our muscles during:",
          options: ["aerobic respiration", "photosynthesis", "anaerobic respiration due to lack of oxygen", "digestion of fats"],
          answer: 2,
          explain: "When oxygen is short, muscle cells break pyruvate into **lactic acid**, causing cramps."
        },
        {
          q: "The opening and closing of stomata is controlled by:",
          options: ["guard cells", "xylem vessels", "root hairs", "companion cells"],
          answer: 0,
          explain: "**Guard cells** swell (pore opens) or shrink (pore closes) as water moves in or out."
        },
        {
          q: "The basic filtration unit of the kidney is the:",
          options: ["neuron", "alveolus", "villus", "nephron"],
          answer: 3,
          explain: "Each kidney has many **nephrons**, which filter blood and form urine."
        },
        {
          q: "Which blood vessels carry blood away from the heart to the organs?",
          options: ["Veins", "Arteries", "Capillaries", "Lymph vessels"],
          answer: 1,
          explain: "**Arteries** carry blood away from the heart under high pressure, so they have thick, elastic walls."
        },
        {
          q: "Bile juice helps in digestion by:",
          options: ["digesting proteins into amino acids", "digesting starch into sugar", "breaking large fat globules into smaller ones", "killing germs in food"],
          answer: 2,
          explain: "Bile contains no enzymes; its salts **emulsify fats** and it makes the medium alkaline for pancreatic enzymes."
        }
      ]
    },

    // ------------------------------------------------------------------
    {
      id: "control-and-coordination",
      title: "Control and Coordination",
      section: "Biology",
      summary: "Animals use the nervous system and hormones, and plants use hormones, to respond to changes around them. This chapter covers neurons, reflex actions, the human brain, plant movements and hormones, and the endocrine glands of humans.",
      notes: [
        {
          heading: "Nervous System and Neurons",
          points: [
            "**Receptors** in sense organs detect stimuli, e.g. **gustatory** receptors detect taste and **olfactory** receptors detect smell.",
            "A **neuron** has **dendrites** (receive information), a **cell body** and a long **axon** (carries the impulse away). The impulse travels as an **electrical signal**.",
            "At the end of the axon, the electrical impulse releases **chemicals** that cross the gap (**synapse**) and start a new impulse in the next neuron.",
            "Impulses travel in one direction: **dendrite → cell body → axon → nerve ending**."
          ]
        },
        {
          heading: "Reflex Action",
          points: [
            "A **reflex action** is a sudden, automatic response to a stimulus without thinking, e.g. pulling the hand away from a hot object.",
            "**Reflex arc**: receptor → sensory neuron → **spinal cord** (relay) → motor neuron → effector (muscle or gland).",
            "Reflex arcs are formed in the **spinal cord**, so the response is very quick; the information also reaches the brain."
          ]
        },
        {
          heading: "Human Brain",
          points: [
            "The brain and spinal cord form the **central nervous system**; nerves arising from them form the **peripheral nervous system**.",
            "**Forebrain (cerebrum)**: main thinking part; has areas for hearing, smell and sight, controls **voluntary actions**, and has the centre for **hunger**.",
            "**Midbrain and hindbrain** control involuntary actions. The **medulla** (hindbrain) controls **blood pressure, salivation and vomiting**.",
            "**Cerebellum** (hindbrain) controls **posture and balance** and the precision of voluntary actions, e.g. walking in a straight line, riding a bicycle.",
            "The brain is protected by a **bony skull** and a fluid-filled balloon that absorbs shocks; the spinal cord is protected by the **vertebral column**."
          ]
        },
        {
          heading: "Coordination in Plants",
          points: [
            "**Touch-me-not (Mimosa)** leaves fold on touch by changing the **amount of water** in their cells; this movement is not related to growth.",
            "**Tropisms** are growth movements towards or away from a stimulus: **phototropism** (shoot bends towards light), **geotropism** (roots grow towards gravity), **hydrotropism** (towards water), **chemotropism** (pollen tube grows towards the ovule).",
            "Tendrils coil around a support because the part in contact grows **more slowly** than the part away from it.",
            "**Auxin**, made at the shoot tip, moves to the **shaded side** and makes those cells grow longer, so the shoot bends towards light.",
            "**Gibberellins** help stem growth; **cytokinins** promote cell division (high in fruits and seeds); **abscisic acid** inhibits growth and causes **wilting of leaves**."
          ]
        },
        {
          heading: "Hormones in Animals",
          points: [
            "**Hormones** are chemical messengers secreted by **endocrine glands** directly into the blood.",
            "**Adrenaline** (adrenal glands) prepares the body for **emergencies**: the heart beats faster, more blood goes to skeletal muscles and breathing becomes faster.",
            "**Thyroxin** (thyroid) needs **iodine** and regulates carbohydrate, protein and fat metabolism. Iodine deficiency causes **goitre** (swollen neck), so **iodised salt** is advised.",
            "**Growth hormone** (pituitary) controls growth; its deficiency in childhood causes **dwarfism**. **Insulin** (pancreas) controls blood sugar; its lack causes **diabetes**.",
            "**Testosterone** (testes) and **oestrogen** (ovaries) bring about changes at puberty.",
            "**Feedback mechanisms** control the timing and amount of hormones, e.g. a rise in blood sugar makes the pancreas release more insulin."
          ]
        }
      ],
      terms: [
        { term: "Synapse", meaning: "The **gap between the nerve ending of one neuron** and the dendrite of the next, crossed by chemicals." },
        { term: "Reflex arc", meaning: "The pathway of a **reflex action**: receptor → sensory neuron → spinal cord → motor neuron → effector." },
        { term: "Cerebellum", meaning: "Part of the hindbrain that maintains **posture and balance**." },
        { term: "Phototropism", meaning: "**Growth movement** of a plant part in response to **light**." },
        { term: "Auxin", meaning: "A plant hormone made at the **shoot tip** that helps cells grow longer; it makes shoots bend towards light." },
        { term: "Endocrine gland", meaning: "A gland that releases **hormones directly into the blood**, e.g. thyroid, pituitary." }
      ],
      qa: [
        {
          q: "What is a reflex arc? Why have reflex arcs evolved in the spinal cord?",
          a: "A **reflex arc** is the pathway taken by impulses in a reflex action: receptor → sensory neuron → spinal cord → motor neuron → muscle. Because the connection is made in the **spinal cord** rather than the brain, the response is **very quick**, which protects the body in emergencies."
        },
        {
          q: "How does a plant shoot bend towards light?",
          a: "When light falls from one side, **auxin** made at the shoot tip diffuses towards the **shaded side**. Auxin makes the cells on that side **grow longer**, so the shoot bends towards light. This is **phototropism**."
        },
        {
          q: "Why is the use of iodised salt advised?",
          a: "**Iodine** is needed by the thyroid gland to make **thyroxin**, which regulates metabolism. Lack of iodine can cause **goitre** (swollen neck). Iodised salt provides enough iodine in the diet."
        }
      ],
      quiz: [
        {
          q: "The part of the brain that maintains posture and balance of the body is the:",
          options: ["cerebrum", "medulla", "cerebellum", "midbrain"],
          answer: 2,
          explain: "The **cerebellum** in the hindbrain controls posture, balance and precise movements."
        },
        {
          q: "Which plant hormone inhibits growth and causes wilting of leaves?",
          options: ["Abscisic acid", "Auxin", "Gibberellin", "Cytokinin"],
          answer: 0,
          explain: "**Abscisic acid** is a growth inhibitor. The other three promote growth."
        },
        {
          q: "The gap between the nerve ending of one neuron and the dendrite of the next is called the:",
          options: ["axon", "dendrite", "cell body", "synapse"],
          answer: 3,
          explain: "Chemicals released at the nerve ending cross the **synapse** to pass on the message."
        },
        {
          q: "Deficiency of iodine in the diet may cause:",
          options: ["diabetes", "goitre", "dwarfism", "night blindness"],
          answer: 1,
          explain: "Iodine is needed to make thyroxin; its deficiency causes **goitre**."
        },
        {
          q: "The downward growth of roots in response to the pull of the Earth is called:",
          options: ["phototropism", "hydrotropism", "geotropism", "chemotropism"],
          answer: 2,
          explain: "Response to gravity is **geotropism**; roots are positively geotropic."
        },
        {
          q: "Which hormone prepares the body to deal with an emergency?",
          options: ["Insulin", "Adrenaline", "Thyroxin", "Growth hormone"],
          answer: 1,
          explain: "**Adrenaline** speeds up the heartbeat and breathing and sends more blood to muscles."
        }
      ]
    },

    // ------------------------------------------------------------------
    {
      id: "how-do-organisms-reproduce",
      title: "How do Organisms Reproduce?",
      section: "Biology",
      summary: "Reproduction produces new individuals and keeps a species going. This chapter covers DNA copying and variation, asexual modes of reproduction, sexual reproduction in flowering plants and humans, and reproductive health.",
      notes: [
        {
          heading: "DNA Copying and Variation",
          points: [
            "Reproduction involves **DNA copying**; DNA in the nucleus carries the information for making proteins.",
            "DNA copying is not perfectly accurate, so small **variations** arise in the offspring.",
            "Variations help a species **survive** changes in its environment, e.g. some heat-resistant bacteria survive if the water temperature rises.",
            "Consistent DNA copying keeps the **body design** of a species stable."
          ]
        },
        {
          heading: "Asexual Reproduction",
          points: [
            "**Fission**: **binary fission** in Amoeba (in any plane) and Leishmania (in a definite plane); **multiple fission** in **Plasmodium** (malaria parasite).",
            "**Fragmentation**: the body breaks into pieces, each growing into a new individual, e.g. **Spirogyra**.",
            "**Regeneration**: a cut body piece grows into a complete organism using specialised cells, e.g. **Planaria**, Hydra.",
            "**Budding**: a bud forms by repeated cell division at one site and detaches when mature, e.g. **Hydra**.",
            "**Spore formation**: **Rhizopus** (bread mould) produces spores in **sporangia**; thick walls protect spores in unfavourable conditions.",
            "**Vegetative propagation**: new plants from roots, stems or leaves, e.g. buds on **Bryophyllum** leaf margins; layering or grafting in sugarcane, rose, grapes. Banana, orange, rose and jasmine have lost the ability to produce seeds."
          ]
        },
        {
          heading: "Sexual Reproduction in Flowering Plants",
          points: [
            "**Stamens** (male) produce pollen grains in the anther; the **pistil** (female) has the stigma, style and ovary containing ovules.",
            "**Unisexual** flowers have either stamens or pistil (papaya, watermelon); **bisexual** flowers have both (Hibiscus, mustard).",
            "**Pollination**: transfer of pollen from anther to stigma. **Self-pollination** is within the same flower; **cross-pollination** is to another flower (by wind, water or animals).",
            "**Fertilisation**: a **pollen tube** grows through the style to the ovule, and the male germ cell fuses with the female germ cell to form a **zygote**.",
            "After fertilisation: zygote → **embryo**, ovule → **seed**, ovary → **fruit**; petals, sepals, stamens, style and stigma may shrivel and fall off.",
            "The seed contains the embryo, which grows into a seedling on **germination**; cotyledons store food."
          ]
        },
        {
          heading: "Reproduction in Human Beings",
          points: [
            "**Puberty**: changes in adolescence as reproductive tissues mature, e.g. hair in armpits and genital area, change of voice in boys, breast development and menstruation in girls.",
            "**Testes** lie outside the abdomen in the **scrotum** because sperm formation needs a **lower temperature**; they make sperms and **testosterone**.",
            "Sperms travel through the **vas deferens**; secretions of the **prostate and seminal vesicles** make their transport easier and provide nutrition.",
            "**Ovaries** release **one egg every month** and make oestrogen and progesterone. Fertilisation takes place in the **oviduct (fallopian tube)**, and the zygote **implants in the uterus**.",
            "The embryo gets nutrition from the mother's blood through the **placenta**, a disc with villi in the uterine wall. Development takes about **nine months**.",
            "If the egg is not fertilised, the thick uterine lining breaks down and is shed as **menstruation**, roughly every month, lasting about two to eight days."
          ]
        },
        {
          heading: "Reproductive Health",
          points: [
            "**Sexually transmitted diseases (STDs)**: bacterial, e.g. **gonorrhoea, syphilis**; viral, e.g. **warts, HIV-AIDS**. Condoms help prevent their spread.",
            "Contraceptive methods: **mechanical barriers** (condoms), **hormonal** (oral pills), **intrauterine devices** (loop or copper-T) and **surgical** methods (blocking the vas deferens or the fallopian tube).",
            "**Prenatal sex determination is prohibited by law** in India; female foeticide has reduced the child sex ratio in some sections of society."
          ]
        }
      ],
      terms: [
        { term: "Binary fission", meaning: "Division of a single-celled organism into **two equal daughter cells**, e.g. Amoeba." },
        { term: "Regeneration", meaning: "Ability of an organism to **grow a complete body** from a cut body part, e.g. Planaria." },
        { term: "Vegetative propagation", meaning: "Growth of new plants from **roots, stems or leaves** instead of seeds." },
        { term: "Pollination", meaning: "Transfer of **pollen grains from the anther to the stigma**." },
        { term: "Zygote", meaning: "The cell formed by the **fusion of male and female gametes** during fertilisation." },
        { term: "Placenta", meaning: "Disc-shaped tissue in the uterus through which the **embryo gets nutrition and oxygen** from the mother's blood and removes wastes." }
      ],
      qa: [
        {
          q: "Why is variation beneficial to a species but not necessarily to an individual?",
          a: "If the environment changes drastically (e.g. a rise in temperature), most individuals may die, but a few **variants** that can tolerate the change survive and reproduce. So variations help the **species survive**, even if a particular variation is of no use to an individual."
        },
        {
          q: "What changes take place in a flower after fertilisation?",
          a: "The **zygote** divides to form the **embryo**; the **ovule** develops a tough coat and becomes the **seed**; the **ovary** grows and ripens into the **fruit**. Petals, sepals, stamens, style and stigma usually shrivel and fall off."
        },
        {
          q: "How does the embryo get nourishment inside the mother's body?",
          a: "Through the **placenta**, a disc-shaped tissue embedded in the uterine wall. It has **villi** on the embryo's side, which give a large surface area for **glucose and oxygen** to pass from the mother's blood to the embryo, and for **wastes** to pass back."
        }
      ],
      quiz: [
        {
          q: "Multiple fission occurs in:",
          options: ["Amoeba", "Plasmodium", "Hydra", "Spirogyra"],
          answer: 1,
          explain: "The malaria parasite **Plasmodium** divides into many daughter cells at once."
        },
        {
          q: "Bryophyllum reproduces vegetatively by:",
          options: ["buds on the leaf margins", "spores", "fragmentation", "binary fission"],
          answer: 0,
          explain: "Buds in the notches along **Bryophyllum leaf margins** fall on soil and grow into new plants."
        },
        {
          q: "After fertilisation, the ovary develops into the:",
          options: ["seed", "embryo", "fruit", "cotyledon"],
          answer: 2,
          explain: "The **ovary becomes the fruit**; the ovule becomes the seed."
        },
        {
          q: "In human females, fertilisation normally takes place in the:",
          options: ["uterus", "ovary", "vagina", "oviduct (fallopian tube)"],
          answer: 3,
          explain: "Sperm meets the egg in the **oviduct**; the zygote then implants in the uterus."
        },
        {
          q: "Which of the following is a viral sexually transmitted disease?",
          options: ["Gonorrhoea", "HIV-AIDS", "Syphilis", "Malaria"],
          answer: 1,
          explain: "**HIV-AIDS** and warts are viral STDs; gonorrhoea and syphilis are bacterial."
        },
        {
          q: "Which contraceptive method also protects against sexually transmitted diseases?",
          options: ["Oral pills", "Copper-T", "Condom", "Surgical blocking of the vas deferens"],
          answer: 2,
          explain: "A **condom** is a barrier that prevents contact, so it also reduces the spread of STDs."
        }
      ]
    },

    // ------------------------------------------------------------------
    {
      id: "heredity",
      title: "Heredity",
      section: "Biology",
      summary: "Heredity is the passing of traits from parents to offspring. This chapter covers variation, Mendel's experiments with pea plants, dominant and recessive traits, how genes control traits, and sex determination in humans.",
      notes: [
        {
          heading: "Variation and Heredity",
          points: [
            "**Heredity** is the transmission of characters (traits) from parents to offspring.",
            "**Sexual reproduction** produces much more variation than asexual reproduction, because the offspring gets genes from **two parents**.",
            "Variations that help an individual survive are more likely to be passed on to the next generation."
          ]
        },
        {
          heading: "Mendel's Experiments",
          points: [
            "**Gregor Johann Mendel** studied garden peas using contrasting traits, e.g. tall/short plants, round/wrinkled seeds, violet/white flowers.",
            "**Monohybrid cross**: tall (TT) × short (tt) → F₁ all **tall (Tt)**. Self-pollinating F₁ gives F₂ in the ratio **3 tall : 1 short**.",
            "F₂ genotypic ratio is **1 TT : 2 Tt : 1 tt**; both TT and Tt plants are tall.",
            "The trait seen in F₁ is **dominant** (tall); the hidden one is **recessive** (short). A recessive trait appears only when **both copies** are recessive (tt).",
            "**Dihybrid cross**: round-yellow (RRYY) × wrinkled-green (rryy) → F₁ all round-yellow; F₂ ratio **9 : 3 : 3 : 1**, including new combinations (round-green, wrinkled-yellow).",
            "The dihybrid cross shows that different traits are **inherited independently** of each other."
          ]
        },
        {
          heading: "How Traits are Expressed",
          points: [
            "A **gene** is a section of DNA that carries information for making a **protein**; proteins such as enzymes control traits.",
            "Example: if a gene makes an **efficient enzyme** for a plant growth hormone, more hormone is made and the plant is tall; a less efficient enzyme gives a short plant.",
            "Each **germ cell** carries only **one set** of genes (one copy of each pair). The zygote gets one copy from each parent, so the number of chromosomes stays constant.",
            "Genes are carried on **chromosomes**; human cells have **23 pairs** of chromosomes."
          ]
        },
        {
          heading: "Sex Determination",
          points: [
            "In some reptiles the **temperature** at which eggs are kept decides the sex; snails can change sex. In humans, sex is determined **genetically**.",
            "Humans have 22 pairs of autosomes and one pair of **sex chromosomes**: women **XX**, men **XY**.",
            "All eggs carry an **X** chromosome; half the sperms carry **X** and half carry **Y**.",
            "**The sex of the child depends on the father's sperm**: X sperm + egg → girl (XX); Y sperm + egg → boy (XY). The chance of each is **50%**."
          ]
        }
      ],
      formulas: [
        "Monohybrid F₂ phenotypic ratio = 3 : 1 (tall : short)",
        "Monohybrid F₂ genotypic ratio = 1 TT : 2 Tt : 1 tt",
        "Dihybrid F₂ phenotypic ratio = 9 : 3 : 3 : 1",
        "Female = 22 pairs of autosomes + XX; Male = 22 pairs of autosomes + XY"
      ],
      terms: [
        { term: "Heredity", meaning: "**Transmission of traits** from parents to offspring." },
        { term: "Gene", meaning: "A **section of DNA** that provides information for making a protein, which controls a trait." },
        { term: "Dominant trait", meaning: "A trait that **shows up in F₁** even when only one copy of its gene is present, e.g. tallness in peas." },
        { term: "Recessive trait", meaning: "A trait that appears **only when both copies** of the gene are recessive, e.g. shortness (tt)." },
        { term: "Monohybrid cross", meaning: "A cross considering **one pair of contrasting traits**; F₂ ratio 3 : 1." },
        { term: "Sex chromosomes", meaning: "The chromosome pair that decides sex: **XX in females, XY in males**." }
      ],
      examples: [
        {
          q: "A pure tall pea plant (TT) is crossed with a pure short pea plant (tt). Show the results in the F₁ and F₂ generations.",
          steps: [
            "Gametes: TT gives only T; tt gives only t",
            "F₁: T × t → all Tt, so all plants are tall",
            "F₁ selfed: Tt × Tt → gametes T, t from each parent",
            "F₂ combinations: TT, Tt, Tt, tt",
            "Phenotypes: TT, Tt, Tt are tall; tt is short"
          ],
          answer: "F₁: all tall (Tt). F₂: 3 tall : 1 short (genotypes 1 TT : 2 Tt : 1 tt)"
        }
      ],
      qa: [
        {
          q: "How is the sex of a child determined in humans?",
          a: "A mother has XX and a father has XY sex chromosomes. All eggs carry an **X** chromosome, while half the sperms carry **X** and half carry **Y**. If an X-carrying sperm fertilises the egg, the child is a **girl (XX)**; if a Y-carrying sperm does, the child is a **boy (XY)**. So the **father's sperm** decides the sex."
        },
        {
          q: "Why were all the F₁ plants tall when Mendel crossed pure tall and pure short pea plants?",
          a: "Each F₁ plant received one T (tall) gene from the tall parent and one t (short) gene from the short parent, giving **Tt**. Since **tallness is dominant**, the single T copy is enough to make the plant tall, and the recessive short trait stays hidden."
        },
        {
          q: "How do genes control the characteristics of an organism?",
          a: "A gene carries information for making a **specific protein**, often an **enzyme**. The amount and efficiency of this protein decide the trait. For example, an efficient enzyme for a growth hormone makes a pea plant tall, while a less efficient form of the enzyme makes it short."
        }
      ],
      quiz: [
        {
          q: "In Mendel's monohybrid cross, the F₂ phenotypic ratio is:",
          options: ["1 : 2 : 1", "3 : 1", "9 : 3 : 3 : 1", "1 : 1"],
          answer: 1,
          explain: "Three-fourths show the dominant trait and one-fourth the recessive: **3 : 1**. 1 : 2 : 1 is the genotypic ratio."
        },
        {
          q: "A cross between TT and tt pea plants gives F₁ plants that are:",
          options: ["all short", "half tall and half short", "all tall", "3 tall : 1 short"],
          answer: 2,
          explain: "All F₁ plants are **Tt**; tallness is dominant, so all are tall."
        },
        {
          q: "The sex chromosomes of a human male are:",
          options: ["XX", "YY", "XO", "XY"],
          answer: 3,
          explain: "Males have a mismatched pair, **XY**; females have **XX**."
        },
        {
          q: "In a dihybrid cross between round-yellow (RRYY) and wrinkled-green (rryy) pea plants, the F₂ phenotypic ratio is:",
          options: ["9 : 3 : 3 : 1", "3 : 1", "1 : 2 : 1", "1 : 1 : 1 : 1"],
          answer: 0,
          explain: "Two independently inherited traits give **9 : 3 : 3 : 1** in F₂."
        },
        {
          q: "In humans, the sex of the child is determined by:",
          options: ["the chromosome in the egg from the mother", "whether the father's sperm carries X or Y", "the temperature during pregnancy", "the number of autosomes"],
          answer: 1,
          explain: "All eggs carry X; the **sperm carries either X or Y**, so it decides the sex."
        },
        {
          q: "Genes control traits by carrying information for making:",
          options: ["carbohydrates", "fats", "proteins", "vitamins"],
          answer: 2,
          explain: "A gene is a section of DNA that codes for a **protein**, such as an enzyme."
        }
      ]
    },

    // ------------------------------------------------------------------
    {
      id: "light-reflection-and-refraction",
      title: "Light – Reflection and Refraction",
      section: "Physics",
      summary: "Light travels in straight lines and bends when it passes from one medium to another. This chapter covers reflection by plane and spherical mirrors, the mirror formula, refraction, refractive index, lenses, the lens formula and power of a lens.",
      notes: [
        {
          heading: "Reflection and Spherical Mirrors",
          points: [
            "**Laws of reflection**: (i) angle of incidence = angle of reflection; (ii) the incident ray, the normal and the reflected ray lie in the **same plane**.",
            "A **plane mirror** forms an image that is virtual, erect, of the same size, **laterally inverted**, and as far behind the mirror as the object is in front.",
            "Spherical mirror terms: **pole (P)**, **centre of curvature (C)**, **radius of curvature (R)**, **principal axis**, **principal focus (F)** and **focal length f = R/2**.",
            "A **concave mirror** (converging) brings parallel rays to a real focus; a **convex mirror** (diverging) makes them appear to come from a focus behind the mirror."
          ]
        },
        {
          heading: "Images Formed by Spherical Mirrors",
          points: [
            "Concave mirror, object **beyond C**: real, inverted, diminished image between F and C. Object **at C**: real, inverted, same size at C.",
            "Concave mirror, object **between C and F**: real, inverted, enlarged image beyond C. Object **at F**: image at infinity.",
            "Concave mirror, object **between P and F**: **virtual, erect, enlarged** image behind the mirror (used in shaving mirrors).",
            "A **convex mirror** always forms a **virtual, erect, diminished** image between P and F behind the mirror.",
            "Uses of **concave** mirrors: torches, searchlights and headlights, shaving mirrors, dentists' mirrors, solar furnaces.",
            "Uses of **convex** mirrors: **rear-view mirrors** in vehicles, as they always give an erect image and a **wider field of view**."
          ]
        },
        {
          heading: "Sign Convention and Mirror Formula",
          points: [
            "**New Cartesian sign convention**: the object is placed to the left; all distances are measured from the pole (or optical centre); distances in the direction of incident light are **positive**, opposite are **negative**; heights above the axis are positive.",
            "So the object distance **u is always negative**; focal length is **negative for a concave mirror** and **positive for a convex mirror**.",
            "**Mirror formula**: 1/v + 1/u = 1/f.",
            "**Magnification** m = h′/h = −v/u. Negative m means a **real, inverted** image; positive m means a **virtual, erect** image."
          ]
        },
        {
          heading: "Refraction of Light",
          points: [
            "**Refraction** is the bending of light when it passes obliquely from one medium to another, because its **speed changes**.",
            "Light going from a rarer to a denser medium (air to glass) bends **towards the normal**; from denser to rarer it bends **away from the normal**.",
            "**Laws of refraction**: (i) the incident ray, refracted ray and normal lie in the same plane; (ii) **Snell's law**: sin i / sin r = constant, the refractive index of the second medium with respect to the first.",
            "**Refractive index** n = c/v (speed of light in vacuum ÷ speed in the medium). Values: water 1.33, crown glass 1.52, **diamond 2.42**.",
            "Optical density is different from mass density: **kerosene** (n = 1.44) is optically denser than water but lighter.",
            "In a rectangular glass slab, the emergent ray is **parallel** to the incident ray but **laterally displaced**."
          ]
        },
        {
          heading: "Spherical Lenses",
          points: [
            "A **convex lens** (converging) is thicker at the middle; a **concave lens** (diverging) is thicker at the edges. A ray through the **optical centre (O)** passes undeviated.",
            "Convex lens, object **beyond 2F₁**: real, inverted, diminished between F₂ and 2F₂. **At 2F₁**: same size at 2F₂. **Between F₁ and 2F₁**: enlarged beyond 2F₂. **At F₁**: at infinity.",
            "Convex lens, object **between F₁ and O**: **virtual, erect, enlarged** image on the same side (used as a magnifying glass).",
            "A **concave lens** always forms a **virtual, erect, diminished** image between F₁ and O.",
            "**Lens formula**: 1/v − 1/u = 1/f; **magnification** m = h′/h = v/u. Focal length is **positive for a convex lens**, **negative for a concave lens**."
          ]
        },
        {
          heading: "Power of a Lens",
          points: [
            "**Power** P = 1/f, with f in metres; SI unit **dioptre (D)**, 1 D = 1 m⁻¹.",
            "Power of a convex lens is **positive**; power of a concave lens is **negative**.",
            "For lenses in contact, the total power is the sum: P = P₁ + P₂ + P₃ + …"
          ]
        }
      ],
      formulas: [
        "Focal length f = R/2",
        "Mirror formula: 1/v + 1/u = 1/f",
        "Magnification (mirror): m = h′/h = −v/u",
        "Snell's law: sin i / sin r = n₂₁ (constant)",
        "Refractive index n = c/v; n₂₁ = v₁/v₂",
        "Speed of light in vacuum c = 3 × 10⁸ m s⁻¹",
        "Lens formula: 1/v − 1/u = 1/f",
        "Magnification (lens): m = h′/h = v/u",
        "Power P = 1/f (f in metres); 1 D = 1 m⁻¹",
        "Lenses in contact: P = P₁ + P₂ + …"
      ],
      terms: [
        { term: "Principal focus (concave mirror)", meaning: "Point on the principal axis where rays **parallel to the axis meet** after reflection." },
        { term: "Radius of curvature", meaning: "Radius of the sphere of which the mirror is a part; **R = 2f**." },
        { term: "Refraction", meaning: "**Bending of light** as it passes obliquely from one medium to another, due to a change in speed." },
        { term: "Refractive index", meaning: "Ratio of the speed of light in vacuum to its speed in the medium, **n = c/v**." },
        { term: "Optical centre", meaning: "Central point of a lens; a ray through it passes **without deviation**." },
        { term: "Dioptre", meaning: "SI unit of **power of a lens**; the power of a lens of focal length 1 m." }
      ],
      examples: [
        {
          q: "An object 4 cm tall is placed 15 cm in front of a concave mirror of focal length 10 cm. Find the position, nature and size of the image.",
          steps: [
            "u = −15 cm, f = −10 cm (concave), h = +4 cm",
            "1/v = 1/f − 1/u = −1/10 + 1/15 = (−3 + 2)/30 = −1/30, so v = −30 cm",
            "m = −v/u = −(−30)/(−15) = −2",
            "h′ = m × h = −2 × 4 = −8 cm"
          ],
          answer: "Image 30 cm in front of the mirror; real, inverted and enlarged (8 cm tall, magnification −2)"
        },
        {
          q: "A 2 cm tall object is placed 15 cm from a convex lens of focal length 10 cm. Find the position, nature and size of the image.",
          steps: [
            "u = −15 cm, f = +10 cm (convex), h = +2 cm",
            "1/v = 1/f + 1/u = 1/10 − 1/15 = (3 − 2)/30 = 1/30, so v = +30 cm",
            "m = v/u = 30/(−15) = −2",
            "h′ = m × h = −2 × 2 = −4 cm"
          ],
          answer: "Image 30 cm on the other side of the lens; real, inverted and enlarged (4 cm tall, magnification −2)"
        }
      ],
      qa: [
        {
          q: "Why is a convex mirror preferred as a rear-view mirror in vehicles?",
          a: "A convex mirror always forms an **erect, diminished** image, and because it curves outward it gives a **much wider field of view**. So the driver can see a large area of traffic behind the vehicle."
        },
        {
          q: "The refractive index of diamond is 2.42. What does this mean?",
          a: "It means the **speed of light in diamond is 1/2.42 times** its speed in vacuum (n = c/v). Diamond has the highest refractive index among common substances, so it is optically very dense."
        },
        {
          q: "A concave lens has a focal length of 15 cm. At what distance should the object be placed so that the image forms 10 cm from the lens?",
          a: "f = −15 cm, v = −10 cm (virtual image on the same side). Using 1/v − 1/u = 1/f: 1/u = 1/v − 1/f = −1/10 + 1/15 = (−3 + 2)/30 = −1/30, so **u = −30 cm**. The object is placed **30 cm** in front of the lens."
        }
      ],
      quiz: [
        {
          q: "The focal length of a spherical mirror of radius of curvature 20 cm is:",
          options: ["40 cm", "10 cm", "20 cm", "5 cm"],
          answer: 1,
          explain: "f = R/2 = 20/2 = **10 cm**."
        },
        {
          q: "Which type of mirror is used as a rear-view mirror in vehicles?",
          options: ["Concave mirror", "Plane mirror", "Convex mirror", "Parabolic concave mirror"],
          answer: 2,
          explain: "A **convex mirror** gives an erect, diminished image with a wide field of view."
        },
        {
          q: "The power of a concave lens of focal length 50 cm is:",
          options: ["−0.02 D", "+2 D", "−2 D", "+0.5 D"],
          answer: 2,
          explain: "f = −50 cm = −0.5 m; P = 1/f = 1/(−0.5) = **−2 D**. Remember to convert cm to m."
        },
        {
          q: "A ray of light going obliquely from air into glass:",
          options: ["bends towards the normal", "bends away from the normal", "travels along the boundary surface", "goes straight without bending"],
          answer: 0,
          explain: "Glass is optically denser, so light slows down and bends **towards the normal**."
        },
        {
          q: "To get a virtual, erect and enlarged image with a convex lens, the object should be placed:",
          options: ["beyond 2F₁", "at 2F₁", "between F₁ and 2F₁", "between F₁ and the optical centre"],
          answer: 3,
          explain: "Only when the object is **between F₁ and O** does a convex lens act as a magnifying glass."
        },
        {
          q: "The speed of light in a medium of refractive index 1.5 is: (c = 3 × 10⁸ m s⁻¹)",
          options: ["4.5 × 10⁸ m s⁻¹", "2 × 10⁸ m s⁻¹", "1.5 × 10⁸ m s⁻¹", "3 × 10⁸ m s⁻¹"],
          answer: 1,
          explain: "v = c/n = 3 × 10⁸ ÷ 1.5 = **2 × 10⁸ m s⁻¹**."
        }
      ]
    },

    // ------------------------------------------------------------------
    {
      id: "human-eye-and-colourful-world",
      title: "The Human Eye and the Colourful World",
      section: "Physics",
      summary: "The eye is a natural optical instrument. This chapter covers the parts of the eye, power of accommodation, defects of vision and their correction, refraction and dispersion through a prism, atmospheric refraction and scattering of light.",
      notes: [
        {
          heading: "The Human Eye",
          points: [
            "**Cornea**: transparent front bulge of the eye where **most of the refraction** of light takes place.",
            "**Iris**: dark muscular diaphragm that controls the size of the **pupil**, which regulates the amount of light entering the eye.",
            "**Eye lens**: a convex lens of transparent, jelly-like material that forms a **real, inverted** image on the **retina**. Its focal length is changed by the **ciliary muscles**.",
            "**Retina**: light-sensitive layer whose cells send electrical signals to the brain through the **optic nerve**."
          ]
        },
        {
          heading: "Power of Accommodation",
          points: [
            "**Accommodation** is the ability of the eye lens to **adjust its focal length** to see both near and distant objects clearly.",
            "For **distant** objects the ciliary muscles relax and the lens becomes **thin** (longer focal length); for **near** objects they contract and the lens becomes **thick** (shorter focal length).",
            "**Near point** (least distance of distinct vision) of a normal young eye is about **25 cm**; the **far point** is at **infinity**.",
            "**Cataract**: in old age the lens may become milky and cloudy, causing partial or complete loss of vision; it can be treated by **surgery**."
          ]
        },
        {
          heading: "Defects of Vision",
          points: [
            "**Myopia (near-sightedness)**: distant objects look blurred; the image forms **in front of the retina**. Causes: excessive curvature of the eye lens or an **elongated eyeball**. Corrected by a **concave lens**.",
            "**Hypermetropia (far-sightedness)**: nearby objects look blurred; the near point is **farther than 25 cm** and the image forms **behind the retina**. Causes: focal length too long or eyeball too small. Corrected by a **convex lens**.",
            "**Presbyopia**: with age the power of accommodation decreases as ciliary muscles weaken and the lens loses flexibility. Corrected by convex lenses or **bi-focal lenses** (upper part concave for distance, lower part convex for reading)."
          ]
        },
        {
          heading: "Prism and Dispersion",
          points: [
            "A glass **prism** has two triangular bases and three rectangular faces; the angle between two refracting faces is the **angle of the prism**.",
            "The emergent ray bends at an angle to the incident ray, called the **angle of deviation**.",
            "**Dispersion**: splitting of white light into its seven colours, **VIBGYOR**; **red bends the least and violet the most**.",
            "**Newton** showed that a second, inverted prism recombines the spectrum into **white light**.",
            "A **rainbow** forms by **dispersion, refraction and internal reflection** of sunlight in tiny water droplets; it is always seen in the direction **opposite to the Sun**."
          ]
        },
        {
          heading: "Atmospheric Refraction",
          points: [
            "The refractive index of air changes with temperature and density, so light bends as it passes through layers of the atmosphere.",
            "**Stars twinkle** because starlight is continuously refracted by the changing atmosphere, so the star's **apparent position and brightness keep changing**.",
            "**Planets do not twinkle**: they are much closer and act as **extended sources**, so the changes average out.",
            "**Advance sunrise and delayed sunset**: the Sun is seen about **2 minutes before** actual sunrise and **2 minutes after** actual sunset; the Sun's disc also looks **flattened** at these times.",
            "Air just above a fire is hotter and optically rarer, so objects seen through it appear to **waver**."
          ]
        },
        {
          heading: "Scattering of Light",
          points: [
            "**Tyndall effect**: scattering of light by colloidal particles makes the path of a beam visible, e.g. sunlight entering a smoke-filled room or a dense forest canopy.",
            "Very fine particles scatter mainly **shorter wavelengths (blue)**; larger particles scatter all colours, which is why **clouds look white**.",
            "**The sky looks blue** because molecules of air scatter blue light much more than red. To astronauts at very high altitude the sky looks **dark**, as there is hardly any scattering.",
            "**The Sun looks reddish at sunrise and sunset**: its light travels a **longer path** through air, so most blue light is scattered away and mainly red light reaches us.",
            "**Danger signals are red** because red light is scattered least by fog or smoke and can be seen from far."
          ]
        }
      ],
      formulas: [
        "Near point of normal eye ≈ 25 cm; far point = infinity",
        "Power P = 1/f (f in metres)",
        "Myopia: concave (negative power) lens; Hypermetropia: convex (positive power) lens",
        "Order of deviation in a prism: violet > indigo > blue > green > yellow > orange > red"
      ],
      terms: [
        { term: "Power of accommodation", meaning: "Ability of the eye lens to **adjust its focal length** to see near and far objects clearly." },
        { term: "Near point", meaning: "The closest distance at which an object is seen clearly without strain; **about 25 cm** for a normal eye." },
        { term: "Myopia", meaning: "**Near-sightedness**: distant objects look blurred; corrected by a **concave lens**." },
        { term: "Hypermetropia", meaning: "**Far-sightedness**: nearby objects look blurred; corrected by a **convex lens**." },
        { term: "Dispersion", meaning: "**Splitting of white light** into its component colours (VIBGYOR), e.g. by a prism." },
        { term: "Tyndall effect", meaning: "**Scattering of light** by colloidal particles, making the path of the beam visible." }
      ],
      examples: [
        {
          q: "The far point of a myopic person is 80 cm in front of the eye. What is the nature and power of the lens needed to correct the defect?",
          steps: [
            "The lens must form an image of a distant object (u = ∞) at the far point, so v = −80 cm",
            "1/f = 1/v − 1/u = 1/(−80) − 0, so f = −80 cm = −0.8 m",
            "P = 1/f = 1/(−0.8) = −1.25 D"
          ],
          answer: "A concave lens of power −1.25 D"
        },
        {
          q: "The near point of a hypermetropic eye is 1 m. What power of lens is needed so that the person can read at 25 cm?",
          steps: [
            "Object at u = −25 cm must give a virtual image at the near point, v = −100 cm",
            "1/f = 1/v − 1/u = −1/100 + 1/25 = (−1 + 4)/100 = 3/100",
            "f = 100/3 cm ≈ 33.3 cm = 1/3 m",
            "P = 1/f = +3 D"
          ],
          answer: "A convex lens of power +3 D"
        }
      ],
      qa: [
        {
          q: "Why do stars twinkle but planets do not?",
          a: "Starlight passes through layers of air whose refractive index keeps changing, so the **apparent position and brightness** of a star (a **point source**) keep changing: it twinkles. Planets are much closer and act as **extended sources**, made of many point sources; their variations **cancel out**, so they do not twinkle."
        },
        {
          q: "Why does the Sun appear reddish at sunrise and sunset?",
          a: "Near the horizon, sunlight travels a **much longer distance** through the atmosphere. Most of the **blue light (shorter wavelength) is scattered away**, so the light reaching our eyes is mainly of **longer wavelength (red)**."
        },
        {
          q: "What is myopia? Give its causes and correction.",
          a: "In **myopia**, a person can see nearby objects clearly but not distant ones, because the image forms **in front of the retina**. Causes: **excessive curvature of the eye lens** or **elongation of the eyeball**. It is corrected by a **concave lens** of suitable power."
        }
      ],
      quiz: [
        {
          q: "The least distance of distinct vision for a normal young eye is about:",
          options: ["25 m", "25 cm", "2.5 cm", "infinity"],
          answer: 1,
          explain: "The near point of a normal eye is about **25 cm**; the far point is infinity."
        },
        {
          q: "Which colour of white light deviates the most when passing through a prism?",
          options: ["Red", "Yellow", "Green", "Violet"],
          answer: 3,
          explain: "**Violet** has the shortest wavelength and bends the most; red bends the least."
        },
        {
          q: "A person cannot see distant objects clearly. The defect and its correction are:",
          options: ["myopia; concave lens", "myopia; convex lens", "hypermetropia; concave lens", "hypermetropia; convex lens"],
          answer: 0,
          explain: "Blurred distant vision is **myopia**; a **concave lens** diverges the rays so the image forms on the retina."
        },
        {
          q: "The change in focal length of the eye lens is brought about by the:",
          options: ["pupil", "retina", "ciliary muscles", "cornea"],
          answer: 2,
          explain: "The **ciliary muscles** change the curvature of the lens (accommodation)."
        },
        {
          q: "To an astronaut at a very high altitude, the sky appears dark because:",
          options: ["the Sun gives no blue light in space", "there is hardly any atmosphere to scatter sunlight", "space absorbs all colours of light", "dust in space blocks all sunlight"],
          answer: 1,
          explain: "The blue sky is caused by **scattering by air**. With almost no air at that height, there is no scattering, so the sky looks dark."
        },
        {
          q: "Stars twinkle because of:",
          options: ["dispersion of starlight", "reflection of starlight by clouds", "scattering of starlight by dust", "atmospheric refraction of starlight"],
          answer: 3,
          explain: "Changing **atmospheric refraction** keeps shifting the apparent position and brightness of a star."
        }
      ]
    },

    // ------------------------------------------------------------------
    {
      id: "electricity",
      title: "Electricity",
      section: "Physics",
      summary: "Electric current is the flow of charge through a conductor. This chapter covers current, potential difference, Ohm's law, resistance and resistivity, resistors in series and parallel, the heating effect of current and electric power.",
      notes: [
        {
          heading: "Electric Current and Potential Difference",
          points: [
            "**Electric current** is the rate of flow of charge: I = Q/t; SI unit **ampere (A)**, 1 A = 1 C s⁻¹. It is measured by an **ammeter** connected in **series**.",
            "Charge of an electron = **1.6 × 10⁻¹⁹ C**; 1 coulomb is the charge of nearly **6 × 10¹⁸ electrons**.",
            "**Conventional current** flows from the positive to the negative terminal, opposite to the flow of electrons.",
            "**Potential difference** V = W/Q, the work done to move a unit charge between two points; SI unit **volt (V)**, 1 V = 1 J C⁻¹. It is measured by a **voltmeter** connected in **parallel**.",
            "A cell or battery maintains the potential difference that keeps charges flowing."
          ]
        },
        {
          heading: "Ohm's Law and Resistance",
          points: [
            "**Ohm's law**: at constant temperature, the current through a metallic wire is **directly proportional** to the potential difference across its ends: **V = IR**.",
            "**Resistance** opposes current; SI unit **ohm (Ω)**, 1 Ω = 1 V/1 A. The V–I graph of a resistor is a **straight line through the origin**.",
            "Resistance of a wire is **directly proportional to its length** and **inversely proportional to its area of cross-section**: **R = ρl/A**. It also depends on the material and temperature.",
            "**Resistivity (ρ)** depends only on the material (at a given temperature); SI unit **Ω m**. Metals and alloys have low resistivity; glass and rubber are insulators with very high resistivity.",
            "Alloys have **higher resistivity** than pure metals and do not oxidise easily when hot, so **nichrome** is used in heating elements; copper and aluminium are used for transmission wires."
          ]
        },
        {
          heading: "Resistors in Series and Parallel",
          points: [
            "**Series**: the **same current** flows through each resistor; total potential difference is the sum. **Rₛ = R₁ + R₂ + R₃**; Rₛ is greater than the largest resistance.",
            "**Parallel**: the **same potential difference** is across each resistor; total current is the sum. **1/Rₚ = 1/R₁ + 1/R₂ + 1/R₃**; Rₚ is less than the smallest resistance.",
            "Household appliances are connected in **parallel**, so each gets the full voltage, can be switched on or off **independently**, and draws the current it needs.",
            "In series, if one component fails, the circuit breaks and **all others stop working**."
          ]
        },
        {
          heading: "Heating Effect of Electric Current",
          points: [
            "**Joule's law of heating**: heat produced **H = I²Rt**. It is proportional to the square of current, the resistance and the time.",
            "Uses: electric iron, toaster, kettle, room heater and electric bulb. Bulb filaments are made of **tungsten** (melting point 3380 °C), and bulbs are filled with inert **nitrogen and argon**.",
            "An **electric fuse** is a wire of a metal or alloy of suitable melting point, connected in **series** with the device. It **melts** and breaks the circuit when excess current flows.",
            "Common fuse ratings: 1 A, 2 A, 3 A, 5 A, 10 A. A 1 kW iron on 220 V draws about 4.5 A, so a **5 A fuse** is used."
          ]
        },
        {
          heading: "Electric Power",
          points: [
            "**Electric power** is the rate at which electric energy is used: **P = VI = I²R = V²/R**; SI unit **watt (W)**, 1 W = 1 V × 1 A.",
            "**Commercial unit of energy**: 1 kilowatt hour (kW h) = **3.6 × 10⁶ J**; one 'unit' of electricity = 1 kW h.",
            "Energy used = power × time, e.g. a 100 W bulb used for 10 hours uses 1000 W h = **1 kW h**."
          ]
        }
      ],
      formulas: [
        "Current I = Q/t (1 A = 1 C s⁻¹)",
        "Potential difference V = W/Q (1 V = 1 J C⁻¹)",
        "Ohm's law: V = IR",
        "R = ρl/A (resistivity ρ in Ω m)",
        "Series: Rₛ = R₁ + R₂ + R₃",
        "Parallel: 1/Rₚ = 1/R₁ + 1/R₂ + 1/R₃",
        "Heat H = I²Rt",
        "Power P = VI = I²R = V²/R",
        "Energy E = P × t; 1 kW h = 3.6 × 10⁶ J",
        "Charge of electron e = 1.6 × 10⁻¹⁹ C; number of electrons n = Q/e"
      ],
      terms: [
        { term: "Electric current", meaning: "**Rate of flow of electric charge**; SI unit ampere (A)." },
        { term: "Potential difference", meaning: "**Work done to move a unit charge** from one point to another; SI unit volt (V)." },
        { term: "Ohm", meaning: "Resistance of a conductor through which **1 A flows** when the potential difference across it is **1 V**." },
        { term: "Resistivity", meaning: "A property of a **material** that decides how strongly it opposes current; SI unit Ω m." },
        { term: "Electric fuse", meaning: "A safety device connected in **series** that **melts** when excess current flows, breaking the circuit." },
        { term: "Kilowatt hour", meaning: "Commercial unit of electrical energy: **1 kW h = 3.6 × 10⁶ J**, called one 'unit'." }
      ],
      examples: [
        {
          q: "Resistors of 5 Ω, 10 Ω and 30 Ω are connected in parallel to a 12 V battery. Find (a) the current through each resistor, (b) the total current and (c) the total resistance.",
          steps: [
            "Same potential difference (12 V) across each resistor",
            "I₁ = 12/5 = 2.4 A; I₂ = 12/10 = 1.2 A; I₃ = 12/30 = 0.4 A",
            "Total current I = 2.4 + 1.2 + 0.4 = 4.0 A",
            "1/Rₚ = 1/5 + 1/10 + 1/30 = (6 + 3 + 1)/30 = 10/30, so Rₚ = 3 Ω",
            "Check: V/Rₚ = 12/3 = 4 A"
          ],
          answer: "(a) 2.4 A, 1.2 A, 0.4 A (b) 4 A (c) 3 Ω"
        },
        {
          q: "An electric heater draws 4 A from a 220 V supply. Find its power and the cost of using it for 5 hours a day for 30 days at ₹8 per unit.",
          steps: [
            "P = VI = 220 × 4 = 880 W = 0.88 kW",
            "Time = 5 h × 30 = 150 h",
            "Energy = P × t = 0.88 kW × 150 h = 132 kW h = 132 units",
            "Cost = 132 × ₹8 = ₹1056"
          ],
          answer: "Power = 880 W; cost = ₹1056"
        }
      ],
      qa: [
        {
          q: "Why are the coils of electric toasters and irons made of an alloy rather than a pure metal?",
          a: "Alloys like nichrome have **higher resistivity**, so they produce more heat. They also **do not oxidise (burn) easily** at high temperatures. So they last longer as heating elements."
        },
        {
          q: "Find the resistance of a bulb rated 100 W, 220 V and the current it draws.",
          a: "R = V²/P = 220 × 220 ÷ 100 = **484 Ω**. I = P/V = 100 ÷ 220 ≈ **0.45 A**."
        },
        {
          q: "Why is a series arrangement not used in domestic circuits?",
          a: "In series, (1) the voltage is **shared** among appliances, so each does not get the full 220 V; (2) the same current flows through all, though appliances need different currents; and (3) if one appliance fails or is switched off, **the whole circuit breaks**. Parallel connection avoids all these problems."
        }
      ],
      quiz: [
        {
          q: "The SI unit of resistivity is:",
          options: ["Ω", "Ω m", "Ω m⁻¹", "Ω m²"],
          answer: 1,
          explain: "From ρ = RA/l, the unit is Ω × m² ÷ m = **Ω m**."
        },
        {
          q: "Two resistors of 4 Ω each are connected in parallel. The equivalent resistance is:",
          options: ["8 Ω", "4 Ω", "2 Ω", "16 Ω"],
          answer: 2,
          explain: "1/Rₚ = 1/4 + 1/4 = 1/2, so Rₚ = **2 Ω** (less than either resistor)."
        },
        {
          q: "If the length of a wire is doubled (area of cross-section unchanged), its resistance becomes:",
          options: ["double", "half", "four times", "unchanged"],
          answer: 0,
          explain: "R = ρl/A, so R ∝ l: doubling the length **doubles** the resistance."
        },
        {
          q: "A bulb rated 60 W, 220 V is used for 5 hours. The energy it uses is:",
          options: ["300 kW h", "12 kW h", "1.1 kW h", "0.3 kW h"],
          answer: 3,
          explain: "E = P × t = 60 W × 5 h = 300 W h = **0.3 kW h**."
        },
        {
          q: "A voltmeter is connected in a circuit:",
          options: ["in series with the resistor", "in parallel across the resistor", "between the ammeter and the key, in series", "only in place of the battery"],
          answer: 1,
          explain: "A voltmeter measures potential difference **across** two points, so it is connected **in parallel**."
        },
        {
          q: "If the current through a resistor is doubled, the heat produced in the same time becomes:",
          options: ["double", "half", "four times", "unchanged"],
          answer: 2,
          explain: "H = I²Rt; doubling I makes I² four times, so heat becomes **four times**."
        }
      ]
    },

    // ------------------------------------------------------------------
    {
      id: "magnetic-effects-of-electric-current",
      title: "Magnetic Effects of Electric Current",
      section: "Physics",
      summary: "An electric current produces a magnetic field, and a current-carrying conductor feels a force in a magnetic field. This chapter covers magnetic field lines, fields due to a straight wire, a loop and a solenoid, the force on a conductor, and domestic electric circuits.",
      notes: [
        {
          heading: "Magnetic Field and Field Lines",
          points: [
            "**Oersted** found that a current-carrying wire deflects a nearby compass needle, showing that **electricity and magnetism are linked**.",
            "A **magnetic field** is the region around a magnet where its force can be felt; it has both **magnitude and direction**.",
            "Outside a magnet, field lines go from the **north pole to the south pole**; inside, from south to north, so they form **closed curves**.",
            "Field lines are **closer where the field is stronger**.",
            "**No two field lines cross**, because at the crossing point a compass needle would have to point in two directions, which is impossible."
          ]
        },
        {
          heading: "Magnetic Field due to a Current",
          points: [
            "Around a **straight conductor**, field lines are **concentric circles**; the field increases with current and decreases with distance from the wire.",
            "**Right-hand thumb rule**: hold the wire in the right hand with the thumb pointing along the current; the **curled fingers** show the direction of the field.",
            "**Circular loop**: near the wire the lines are circles; at the centre they are almost **straight**. The field at the centre grows with the current and the **number of turns**.",
            "**Solenoid**: a coil of many turns of insulated copper wire; its field is like that of a **bar magnet**, and inside it the field is **uniform** (parallel straight lines).",
            "An **electromagnet** is made by placing a **soft iron core** inside a solenoid; it is a magnet only while current flows."
          ]
        },
        {
          heading: "Force on a Current-carrying Conductor",
          points: [
            "A current-carrying conductor placed in a magnetic field **experiences a force** (as suggested by **André-Marie Ampère**). Reversing the current or the field reverses the force.",
            "The force is **maximum when the current is perpendicular** to the field, and zero when parallel to it.",
            "**Fleming's left-hand rule**: stretch the thumb, forefinger and middle finger of the **left hand** at right angles; **forefinger = field**, **middle finger = current**, **thumb = force (motion)**.",
            "Devices such as **electric motors**, loudspeakers and measuring instruments use this effect."
          ]
        },
        {
          heading: "Domestic Electric Circuits",
          points: [
            "Mains supply comes through a **live wire** (red insulation) and a **neutral wire** (black); in India the potential difference between them is **220 V**.",
            "The **earth wire** (green insulation) is connected to the metal body of appliances. It gives leakage current a **low-resistance path** to the earth, preventing severe electric shocks.",
            "Two separate circuits are used: **15 A** for high-power appliances (geysers, air coolers) and **5 A** for bulbs and fans.",
            "Appliances are connected **in parallel** across live and neutral wires, each with its own switch.",
            "**Short-circuit**: live and neutral wires touch directly (e.g. due to damaged insulation), so the current rises sharply. **Overloading**: too many appliances on one socket, or an accidental rise in supply voltage.",
            "The **electric fuse** melts and cuts off the circuit when excess current flows, protecting the circuit and appliances."
          ]
        }
      ],
      formulas: [
        "Right-hand thumb rule: thumb → current, curled fingers → magnetic field",
        "Fleming's left-hand rule: forefinger → field, middle finger → current, thumb → force",
        "Domestic supply in India: 220 V between live and neutral",
        "Wire colours: live = red, neutral = black, earth = green"
      ],
      terms: [
        { term: "Magnetic field lines", meaning: "Imaginary **closed curves** showing the direction of a magnetic field; they never cross each other." },
        { term: "Right-hand thumb rule", meaning: "Thumb along the **current**, curled fingers give the **direction of the magnetic field** around a wire." },
        { term: "Solenoid", meaning: "A coil of many turns of insulated wire whose field is **uniform inside** and resembles a **bar magnet**." },
        { term: "Fleming's left-hand rule", meaning: "Gives the **direction of force** on a current-carrying conductor in a field: forefinger = field, middle finger = current, thumb = force." },
        { term: "Earth wire", meaning: "A safety wire (green) linking the metal body of an appliance to the earth, so **leakage current** does not give a severe shock." },
        { term: "Short-circuit", meaning: "Direct contact between **live and neutral** wires, causing a sudden, very large current." }
      ],
      qa: [
        {
          q: "Why do two magnetic field lines never intersect?",
          a: "The direction of the magnetic field at a point is given by the tangent to the field line, i.e. the direction a compass needle points. If two field lines crossed, the compass at that point would have to **point in two directions at once**, which is impossible."
        },
        {
          q: "What is the function of an earth wire? Why must metallic appliances be earthed?",
          a: "The earth wire connects the **metal body** of an appliance to the earth and provides a **low-resistance path** for current. If the live wire touches the body because of a fault, the leakage current flows to the earth and the body stays at earth's potential, so the user does **not get a severe shock**."
        },
        {
          q: "Distinguish between short-circuit and overloading.",
          a: "**Short-circuit**: the live and neutral wires come in **direct contact** (e.g. damaged insulation), so resistance becomes very small and current rises sharply. **Overloading**: **too many appliances** are connected to one socket, or the supply voltage rises accidentally, drawing too much current. Both can cause overheating and fire; a fuse protects against them."
        }
      ],
      quiz: [
        {
          q: "Inside a bar magnet, magnetic field lines go from:",
          options: ["north pole to south pole", "south pole to north pole", "the centre towards both poles", "both poles towards the centre"],
          answer: 1,
          explain: "Field lines are closed curves: N to S **outside** and **S to N inside** the magnet."
        },
        {
          q: "The magnetic field inside a long straight current-carrying solenoid is:",
          options: ["zero", "in the form of concentric circles", "uniform", "strongest near the ends only"],
          answer: 2,
          explain: "Inside a solenoid the field lines are **parallel straight lines**, so the field is **uniform**."
        },
        {
          q: "In Fleming's left-hand rule, the middle finger points in the direction of the:",
          options: ["magnetic field", "force", "motion of the conductor", "current"],
          answer: 3,
          explain: "Forefinger = field, **middle finger = current**, thumb = force or motion."
        },
        {
          q: "The force on a current-carrying conductor in a magnetic field is maximum when the angle between the current and the field is:",
          options: ["90°", "0°", "45°", "180°"],
          answer: 0,
          explain: "The force is greatest when the current is **perpendicular (90°)** to the field and zero when parallel (0° or 180°)."
        },
        {
          q: "In domestic wiring, the insulation of the earth wire is usually:",
          options: ["red", "black", "green", "blue"],
          answer: 2,
          explain: "Earth wire: **green**; live wire: red; neutral wire: black."
        },
        {
          q: "Current flows vertically upward in a straight wire. Seen from above, the magnetic field lines around it are:",
          options: ["clockwise circles", "anticlockwise circles", "straight lines parallel to the wire", "straight lines pointing away from the wire"],
          answer: 1,
          explain: "By the right-hand thumb rule, with the thumb pointing up (towards the viewer), the fingers curl **anticlockwise**."
        }
      ]
    },

    // ------------------------------------------------------------------
    {
      id: "our-environment",
      title: "Our Environment",
      section: "Biology",
      summary: "An ecosystem is made of living and non-living components that interact with each other. This chapter covers food chains and webs, flow of energy and the 10% law, biological magnification, ozone depletion and waste management.",
      notes: [
        {
          heading: "Ecosystem and its Components",
          points: [
            "An **ecosystem** consists of **biotic** components (plants, animals, microorganisms) and **abiotic** components (temperature, rainfall, wind, soil, minerals).",
            "Natural ecosystems: forests, ponds, lakes. **Artificial (human-made)** ecosystems: gardens, crop fields, aquariums.",
            "**Producers** (green plants, blue-green algae) make food by photosynthesis; **consumers** (herbivores, carnivores, omnivores, parasites) depend on them for food.",
            "**Decomposers** (bacteria and fungi) break down dead remains and wastes into simple substances, **returning nutrients to the soil**."
          ]
        },
        {
          heading: "Food Chains and Food Webs",
          points: [
            "A **food chain** is a series of organisms each feeding on the previous one, e.g. grass → deer → lion; grass → grasshopper → frog → snake → eagle.",
            "Each step is a **trophic level**: producers (first), herbivores or primary consumers (second), small carnivores or secondary consumers (third), large carnivores or tertiary consumers (fourth).",
            "A **food web** is a network of many interconnected food chains.",
            "Flow of energy is **unidirectional**: energy captured by producers does not go back to the Sun, and energy passed to herbivores does not return to producers."
          ]
        },
        {
          heading: "Flow of Energy and the 10% Law",
          points: [
            "Green plants capture only about **1%** of the sunlight falling on their leaves.",
            "**10 per cent law**: only about **10%** of the energy at one trophic level is passed on to the next; the rest is used for life processes and lost as heat.",
            "So food chains usually have only **3 or 4 trophic levels**, and there are **more organisms at lower levels**."
          ]
        },
        {
          heading: "Biological Magnification",
          points: [
            "Pesticides and other harmful chemicals that are **non-biodegradable** enter the food chain through soil and water.",
            "They are not broken down, so they **accumulate progressively** at each higher trophic level; this is **biological magnification**.",
            "Humans are at the top of many food chains, so the **maximum concentration** of these chemicals builds up in our bodies, e.g. pesticide residues in food grains, fruits and vegetables."
          ]
        },
        {
          heading: "Ozone Layer",
          points: [
            "**Ozone (O₃)** in the upper atmosphere shields the Earth from harmful **ultraviolet (UV) radiation**, which can cause skin cancer. At ground level, ozone is a deadly poison.",
            "UV radiation splits O₂ into free oxygen atoms, which combine with O₂ to form ozone: O₂ → O + O; O + O₂ → O₃.",
            "The ozone layer has been depleted by **chlorofluorocarbons (CFCs)**, used as refrigerants and in fire extinguishers.",
            "In **1987**, the **UNEP** forged an agreement to freeze CFC production at **1986 levels**; it is now mandatory for manufacturers to make CFC-free refrigerators."
          ]
        },
        {
          heading: "Managing Waste",
          points: [
            "**Biodegradable** substances are broken down by microorganisms, e.g. vegetable peels, paper, cotton, wood. **Non-biodegradable** substances are not, e.g. plastics, DDT, glass.",
            "Non-biodegradable wastes **persist** in the environment for a long time and harm living organisms.",
            "Disposable plastic cups in trains were once replaced by **kulhads** (clay cups), but making them on a large scale would waste **fertile topsoil**; disposable paper cups are now used.",
            "We should **segregate** waste into biodegradable and non-biodegradable and reduce our use of plastics."
          ]
        }
      ],
      formulas: [
        "10% law: energy at next trophic level ≈ 10% of energy at the previous level",
        "Producers capture about 1% of sunlight falling on leaves",
        "Ozone formation: O₂ → O + O (UV); O + O₂ → O₃"
      ],
      terms: [
        { term: "Ecosystem", meaning: "All the **living organisms** of an area together with the **non-living** components of their environment, interacting with each other." },
        { term: "Trophic level", meaning: "Each **step or level** of a food chain at which energy is transferred." },
        { term: "Food web", meaning: "A **network of interconnected food chains** in an ecosystem." },
        { term: "Biological magnification", meaning: "**Increase in concentration** of harmful non-biodegradable chemicals at each higher trophic level." },
        { term: "Decomposers", meaning: "Microorganisms (bacteria, fungi) that **break down dead remains** and return nutrients to the soil." },
        { term: "Biodegradable substances", meaning: "Substances that can be **broken down by microorganisms**, e.g. paper, peels." }
      ],
      examples: [
        {
          q: "In a food chain grass → grasshopper → frog → snake, the grass has 10,000 J of energy. How much energy is available to the snake?",
          steps: [
            "By the 10% law, each level gets about 10% of the energy of the previous level",
            "Grasshopper (2nd level) = 10% of 10,000 J = 1000 J",
            "Frog (3rd level) = 10% of 1000 J = 100 J",
            "Snake (4th level) = 10% of 100 J = 10 J"
          ],
          answer: "About 10 J of energy is available to the snake"
        }
      ],
      qa: [
        {
          q: "What will happen if all the decomposers are removed from an ecosystem?",
          a: "Dead plants, animals and wastes will **not be broken down** and will pile up. **Nutrients will not be returned to the soil**, so producers will not get the raw materials they need, and the ecosystem will be disturbed."
        },
        {
          q: "Why do food chains generally have only three or four trophic levels?",
          a: "Only about **10% of energy** is passed from one trophic level to the next, the rest being used up or lost as heat. After 3 or 4 levels, the energy left is **too little** to support another level of organisms."
        },
        {
          q: "Why is damage to the ozone layer a cause for concern?",
          a: "The ozone layer **absorbs harmful UV radiation** from the Sun. If it is damaged, more UV rays reach the Earth, which can cause **skin cancer** and other harm to living organisms. CFCs are the main cause of its depletion."
        }
      ],
      quiz: [
        {
          q: "Which of the following is biodegradable?",
          options: ["Polythene bag", "DDT", "Glass bottle", "Cotton cloth"],
          answer: 3,
          explain: "**Cotton** is broken down by microorganisms. Polythene, DDT and glass are non-biodegradable."
        },
        {
          q: "By the 10% law, if a plant has 20,000 J of energy, the energy available to a herbivore feeding on it is about:",
          options: ["2000 J", "200 J", "20 J", "10,000 J"],
          answer: 0,
          explain: "Only about 10% passes to the next level: 10% of 20,000 J = **2000 J**."
        },
        {
          q: "Which organisms form the first trophic level?",
          options: ["Herbivores", "Producers", "Carnivores", "Decomposers"],
          answer: 1,
          explain: "**Producers** (green plants) make food from sunlight and form the first trophic level."
        },
        {
          q: "The ozone layer is being depleted mainly by:",
          options: ["carbon dioxide", "methane", "chlorofluorocarbons (CFCs)", "water vapour"],
          answer: 2,
          explain: "**CFCs**, used as refrigerants and in fire extinguishers, destroy ozone."
        },
        {
          q: "Due to biological magnification, harmful chemicals are found in the highest concentration in:",
          options: ["producers", "herbivores", "decomposers", "top carnivores"],
          answer: 3,
          explain: "Non-biodegradable chemicals accumulate at each level, so they are highest at the **top of the food chain**."
        },
        {
          q: "Which of these is an artificial (human-made) ecosystem?",
          options: ["Pond", "Forest", "Crop field", "Lake"],
          answer: 2,
          explain: "A **crop field** is made and maintained by humans. Ponds, forests and lakes are natural."
        }
      ]
    }
  ]
});
