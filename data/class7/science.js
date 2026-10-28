StudyData.add(7, "science", {
  // What this content follows. match: "textbook" | "older-book" | "topic". Set reviewed to a date once a teacher has checked it.
  syllabus: {board: "CBSE", match: "textbook", books: ["Curiosity"], reviewed: false},
  chapters: [
    // ------------------------------------------------------------------
    {
      id: "the-ever-evolving-world-of-science",
      title: "The Ever-Evolving World of Science",
      section: "Nature of Science",
      summary: "Science is a way of understanding the world through curiosity, observation and experiments. This chapter looks at the scientific method, why scientific ideas change with new evidence, and how science and technology help us.",
      notes: [
        {
          heading: "What Is Science?",
          points: [
            "**Science** is the systematic study of nature and the world around us through **observation, questions and experiments**.",
            "It begins with **curiosity**: asking 'Why?' and 'How?' about everyday things, such as why leaves are green or why a ball bounces.",
            "Science has many branches: **Physics** (matter, energy and forces), **Chemistry** (substances and their changes) and **Biology** (living things), along with Earth science and astronomy.",
            "The branches overlap. To understand how a plant makes food you need biology, chemistry and physics together."
          ]
        },
        {
          heading: "The Scientific Method",
          points: [
            "Scientists follow steps: **observe** → ask a question → make a **hypothesis** → do an **experiment** → record and analyse the results → draw a **conclusion**.",
            "A **hypothesis** is a testable guess. If the results do not support it, scientists change it and test again.",
            "In a **fair test** only one thing (the **variable**) is changed and everything else is kept the same. Otherwise we cannot tell what caused the result.",
            "Experiments are repeated and results are written down carefully, so that others can check them."
          ]
        },
        {
          heading: "Science Keeps Evolving",
          points: [
            "Scientific ideas are based on **evidence**. When new evidence appears, an idea can be improved or replaced.",
            "Example: people once believed that the Sun and planets go around the Earth. Careful observations later showed that Earth and the other planets go around the Sun.",
            "Better instruments, such as microscopes, telescopes and satellites, help scientists see what our eyes cannot, so science keeps growing.",
            "Science is a team effort of people from many countries over many centuries."
          ]
        },
        {
          heading: "Science, Technology and Society",
          points: [
            "**Technology** is the use of scientific knowledge to make useful things and solve problems, for example vaccines, mobile phones, solar cookers and weather satellites.",
            "India has a long tradition of science: **Aryabhata** (astronomy and mathematics), **Charaka** (medicine), **Sushruta** (surgery), **J. C. Bose** (showed that plants respond to stimuli) and **C. V. Raman** (Nobel Prize in Physics, 1930, for his work on the scattering of light).",
            "A **scientific attitude** means being curious, honest about results, open to new ideas and asking for evidence instead of believing everything we hear.",
            "Always follow safety rules in a laboratory: never taste unknown substances and handle heat, glass and chemicals carefully."
          ]
        }
      ],
      formulas: [
        "Scientific method: Observe → Question → Hypothesis → Experiment → Analyse → Conclusion",
        "Fair test: change only one variable and keep all other conditions the same",
        "A hypothesis is a testable guess, not a proven fact",
        "Technology = application of scientific knowledge to solve problems"
      ],
      terms: [
        { term: "Hypothesis", meaning: "A **testable guess** or possible explanation that is checked by experiments." },
        { term: "Variable", meaning: "The one factor that is **changed** in an experiment to see its effect." },
        { term: "Scientific method", meaning: "A step-by-step way of finding answers: observing, questioning, forming a hypothesis, experimenting and concluding." },
        { term: "Evidence", meaning: "Observations and measurements that **support or reject** an idea." },
        { term: "Technology", meaning: "Using scientific knowledge to make **tools, machines and processes** that make life easier." }
      ],
      qa: [
        {
          q: "Why should only one variable be changed in a fair test?",
          a: "If several things are changed together, we cannot tell **which one caused the result**. Changing one variable and keeping everything else the same makes the result reliable."
        },
        {
          q: "Why do scientific ideas sometimes change?",
          a: "Scientific ideas rest on evidence. When **better instruments or new experiments** give new evidence, the old idea is improved or replaced. For example, the idea that the Sun goes around the Earth was replaced by the idea that Earth and the other planets go around the Sun."
        },
        {
          q: "Distinguish between science and technology with an example.",
          a: "**Science** is the study of nature to gain knowledge; **technology** uses that knowledge to make useful things. Knowing how germs cause disease is science; making a vaccine from that knowledge is technology."
        }
      ],
      quiz: [
        {
          q: "A testable guess made before doing an experiment is called a:",
          options: ["Conclusion", "Hypothesis", "Observation", "Measurement"],
          answer: 1,
          explain: "A **hypothesis** is a testable explanation. The experiment then shows whether it is supported."
        },
        {
          q: "Meena wants to find out whether sunlight affects plant growth. She uses two identical plants in identical pots. Which one thing should she change?",
          options: ["The amount of water", "The type of soil", "The amount of sunlight", "The size of the pot"],
          answer: 2,
          explain: "In a fair test only the variable being studied, here **sunlight**, is changed. Everything else stays the same."
        },
        {
          q: "Which of the following is an example of technology?",
          options: ["A question about why the sky looks blue", "A hypothesis about plant growth", "The observation that the Sun rises in the east", "A vaccine used to prevent a disease"],
          answer: 3,
          explain: "A vaccine is a **useful product** made by applying scientific knowledge."
        },
        {
          q: "Scientific ideas are most often changed when:",
          options: ["new evidence from observations and experiments is found", "a famous person disagrees with them", "the idea is old", "the idea is difficult to understand"],
          answer: 0,
          explain: "Science depends on **evidence**. New evidence can improve or replace earlier ideas."
        },
        {
          q: "Sir C. V. Raman won the Nobel Prize in Physics in 1930 for his work on:",
          options: ["Electric circuits", "Heat transfer in solids", "The scattering of light", "The structure of the atom"],
          answer: 2,
          explain: "The **Raman effect** is about the scattering of light by molecules."
        },
        {
          q: "Which is the correct order of steps in the scientific method?",
          options: ["Hypothesis → observation → conclusion → experiment", "Observation → hypothesis → experiment → conclusion", "Experiment → conclusion → hypothesis → observation", "Conclusion → observation → experiment → hypothesis"],
          answer: 1,
          explain: "We **observe** first, form a **hypothesis**, test it with an **experiment** and then draw a **conclusion**."
        }
      ]
    },

    // ------------------------------------------------------------------
    {
      id: "exploring-substances-acidic-basic-and-neutral",
      title: "Exploring Substances: Acidic, Basic, and Neutral",
      section: "Chemistry",
      summary: "Some substances taste sour, some feel soapy and some are neither. This chapter explains acids, bases and neutral substances, how indicators change colour to identify them, and what happens when an acid meets a base (neutralisation).",
      notes: [
        {
          heading: "Acids, Bases and Neutral Substances",
          points: [
            "**Acids** taste sour and turn blue litmus red. Examples: lemon juice (citric acid), vinegar (acetic acid), curd (lactic acid) and tamarind (tartaric acid).",
            "**Bases** taste bitter, feel soapy and turn red litmus blue. Examples: soap, baking soda, lime water (calcium hydroxide) and milk of magnesia (magnesium hydroxide).",
            "**Neutral** substances are neither acidic nor basic and do not change the colour of litmus. Examples: pure water, sugar solution and common salt solution.",
            "Never taste or touch unknown substances to test them. Strong acids and bases, such as hydrochloric acid and sodium hydroxide, are **corrosive** and can burn the skin."
          ]
        },
        {
          heading: "Indicators",
          points: [
            "An **indicator** is a substance that changes colour to show whether another substance is acidic, basic or neutral.",
            "**Litmus** (a dye obtained from lichens): acids turn blue litmus **red**; bases turn red litmus **blue**; neutral substances change neither.",
            "**Turmeric** turns **reddish-brown** with a base but stays yellow with acids. That is why a curry stain on a white cloth turns red when rubbed with soap.",
            "**China rose** (gudhal) petal extract turns dark pink in acids and green in bases. **Red cabbage** juice turns pinkish-red in acids and green in bases.",
            "Phenolphthalein and methyl orange are laboratory indicators. Phenolphthalein is colourless in acids and pink in bases; methyl orange is red in acids and yellow in bases."
          ]
        },
        {
          heading: "Neutralisation",
          points: [
            "When an acid and a base are mixed, they cancel each other's properties and form **salt and water**. This is called **neutralisation**.",
            "Example: hydrochloric acid + sodium hydroxide → sodium chloride (common salt) + water.",
            "Heat is given out during neutralisation, so the mixture becomes warm.",
            "Test: add acid drop by drop to a pink solution of base with phenolphthalein. The pink colour disappears when the base has been neutralised."
          ]
        },
        {
          heading: "Neutralisation in Daily Life",
          points: [
            "**Indigestion**: the stomach makes hydrochloric acid to digest food. Too much acid causes acidity, and **antacids** such as milk of magnesia (a base) neutralise it.",
            "**Ant sting**: an ant injects formic acid, which causes pain. Rubbing baking soda or calamine solution (a mild base) soothes the sting.",
            "**Soil treatment**: farmers add quicklime or slaked lime to acidic soil, and add compost (organic matter) to basic soil.",
            "**Factory waste** is often acidic. It is neutralised with bases before being released, to protect fish and plants in water bodies.",
            "**Tooth decay**: bacteria in the mouth turn leftover sugar into acids that damage the enamel. Toothpastes are basic and help to neutralise these acids."
          ]
        }
      ],
      formulas: [
        "Acid + base → salt + water (neutralisation)",
        "HCl + NaOH → NaCl + H₂O",
        "Blue litmus turns red in acid; red litmus turns blue in base; neutral substances: no change",
        "Turmeric turns reddish-brown in a base. Phenolphthalein: colourless in acid, pink in base",
        "Neutral: pure water, sugar solution and salt solution"
      ],
      terms: [
        { term: "Acid", meaning: "A substance that tastes **sour** and turns blue litmus red, e.g. lemon juice, vinegar." },
        { term: "Base", meaning: "A substance that tastes **bitter**, feels soapy and turns red litmus blue, e.g. soap, lime water." },
        { term: "Indicator", meaning: "A substance that **changes colour** to show whether a substance is acidic or basic, e.g. litmus, turmeric." },
        { term: "Neutralisation", meaning: "The reaction between an acid and a base that forms **salt and water**." },
        { term: "Antacid", meaning: "A mild base, such as milk of magnesia, taken to neutralise **excess acid** in the stomach." },
        { term: "Salt", meaning: "A substance formed along with water when an acid reacts with a base, e.g. sodium chloride (common salt)." }
      ],
      qa: [
        {
          q: "A curry stain on a white shirt turns red when the shirt is scrubbed with soap. Why?",
          a: "Curry contains **turmeric**, which is a natural indicator. Soap is **basic**, and turmeric turns reddish-brown in a base. Rinsing with plenty of water removes the soap and the colour goes back to yellow."
        },
        {
          q: "Why is baking soda applied to an ant sting?",
          a: "An ant sting contains **formic acid**. Baking soda is a **mild base**, so it neutralises the acid and reduces the pain."
        },
        {
          q: "What is neutralisation? Give two examples from daily life.",
          a: "Neutralisation is the reaction of an **acid with a base** to form **salt and water**. Examples: taking an antacid for acidity, and adding slaked lime to acidic soil."
        }
      ],
      quiz: [
        {
          q: "What happens to blue litmus paper when it is dipped in lemon juice?",
          options: ["It stays blue", "It turns red", "It turns green", "It becomes colourless"],
          answer: 1,
          explain: "Lemon juice is an **acid**, and acids turn blue litmus red."
        },
        {
          q: "Which of these is a neutral substance?",
          options: ["Soap solution", "Lemon juice", "Sugar solution", "Vinegar"],
          answer: 2,
          explain: "Sugar solution does not change the colour of litmus, so it is **neutral**."
        },
        {
          q: "Turmeric paper turns reddish-brown when it is dipped in:",
          options: ["soap solution", "vinegar", "curd", "lemon juice"],
          answer: 0,
          explain: "Turmeric changes colour only in **bases**, and soap solution is basic."
        },
        {
          q: "The acid present in an ant's sting is:",
          options: ["Citric acid", "Acetic acid", "Lactic acid", "Formic acid"],
          answer: 3,
          explain: "Ants inject **formic acid** when they sting."
        },
        {
          q: "A farmer finds that his soil is too acidic. Which substance should he add?",
          options: ["Vinegar", "Compost", "Slaked lime", "Lemon juice"],
          answer: 2,
          explain: "**Slaked lime** (calcium hydroxide) is a base and neutralises the extra acid in the soil."
        },
        {
          q: "When an acid reacts with a base, the products are:",
          options: ["salt and hydrogen gas", "salt and water", "only a salt", "water and carbon dioxide"],
          answer: 1,
          explain: "Acid + base → **salt + water**. This is neutralisation."
        }
      ]
    },

    // ------------------------------------------------------------------
    {
      id: "electricity-circuits-and-their-components",
      title: "Electricity: Circuits and their Components",
      section: "Physics",
      summary: "Electric current flows only through a complete path called a circuit. This chapter looks at cells, bulbs, LEDs and switches, circuit symbols, conductors and insulators, series and parallel connections, and how a fuse protects us.",
      notes: [
        {
          heading: "Cell, Battery and Circuit",
          points: [
            "An **electric cell** has a **positive (+)** terminal (the metal cap) and a **negative (−)** terminal (the flat metal base). It changes chemical energy into electrical energy.",
            "A **battery** is two or more cells joined together, the + terminal of one touching the − terminal of the next. Cells joined this way are in series and their voltages add up.",
            "A **circuit** is a closed path along which electric current flows. A **switch** closes the circuit (ON) or breaks it (OFF).",
            "By convention, current flows from the **+ terminal** through the wires and bulb and back to the **− terminal**.",
            "If the circuit is open (switch off, loose wire or fused bulb), current stops and the bulb does not glow."
          ]
        },
        {
          heading: "Bulb and LED",
          points: [
            "An ordinary bulb has a thin wire called the **filament** between two terminals. Current heats the filament until it glows and gives light.",
            "A **fused bulb** has a broken filament. The circuit is broken, so the bulb will not glow.",
            "An **LED** (light emitting diode) glows only when connected the right way round: its **longer lead is positive**.",
            "LEDs use much less electricity than filament bulbs and stay cooler, so they save energy."
          ]
        },
        {
          heading: "Circuit Symbols and Diagrams",
          points: [
            "A **circuit diagram** uses standard symbols for the cell, battery, bulb, switch and wire, so that everyone can read it.",
            "In the symbol of a cell, the **longer thin line is positive (+)** and the **shorter thick line is negative (−)**.",
            "A switch drawn with a gap is **open (OFF)**; drawn joined, it is **closed (ON)**."
          ]
        },
        {
          heading: "Conductors and Insulators",
          points: [
            "**Conductors** allow current to pass through them: metals such as copper, aluminium and iron, graphite, and salt water.",
            "**Insulators** do not allow current to pass: plastic, rubber, glass and dry wood.",
            "Electric wires are made of copper or aluminium covered with plastic or rubber, which keeps us safe from electric shock.",
            "Ordinary tap water conducts electricity, so never touch switches or plugs with wet hands."
          ]
        },
        {
          heading: "Series, Parallel and the Fuse",
          points: [
            "In a **series** circuit, bulbs are joined one after another on a single path. If one bulb fuses, the whole circuit breaks and all the bulbs go off.",
            "In a **parallel** circuit, each bulb has its own path. If one bulb fuses, the others keep glowing. Home wiring is parallel.",
            "Current flowing through a wire produces **heat** (heating effect). This is used in heaters, geysers, irons and toasters.",
            "A **fuse** has a thin wire that melts when too much current flows, breaking the circuit and protecting the appliances. An **MCB** does the same by switching off automatically and can be switched on again."
          ]
        }
      ],
      formulas: [
        "Conventional current direction: + terminal → circuit → − terminal",
        "Cell symbol: long thin line = positive (+), short thick line = negative (−)",
        "LED: longer lead = positive",
        "Cells in series: total voltage = sum of the voltages of the cells",
        "Series: one path, one fused bulb stops all. Parallel: separate paths, other bulbs keep glowing",
        "Conductors: metals, graphite, salt water. Insulators: plastic, rubber, glass, dry wood"
      ],
      examples: [
        {
          q: "A torch uses three cells of 1.5 V each joined in series (+ to −). What is the voltage of this battery?",
          steps: [
            "When cells are joined in series, their voltages add up.",
            "Total voltage = 1.5 V + 1.5 V + 1.5 V"
          ],
          answer: "Battery voltage = 4.5 V"
        }
      ],
      terms: [
        { term: "Electric circuit", meaning: "A **closed path** along which electric current flows." },
        { term: "Filament", meaning: "The thin wire inside a bulb that **heats up and glows** when current passes through it." },
        { term: "Conductor", meaning: "A material that **allows** electric current to pass through it, e.g. copper." },
        { term: "Insulator", meaning: "A material that **does not allow** electric current to pass through it, e.g. rubber." },
        { term: "LED", meaning: "Light emitting diode: a light source that uses little electricity and works only in one direction; its **longer lead is +**." },
        { term: "Fuse", meaning: "A safety device with a thin wire that **melts and breaks the circuit** when too much current flows." }
      ],
      qa: [
        {
          q: "A bulb does not glow even though it is connected to a cell. Give three possible reasons.",
          a: "(i) The **circuit is open**: the switch is off or a wire is loose. (ii) The bulb is **fused**, i.e. its filament is broken. (iii) The cell is **used up**, or the connections are wrong."
        },
        {
          q: "Why are electric wires covered with plastic or rubber?",
          a: "Copper or aluminium wire is a conductor, but **plastic and rubber are insulators**. The covering stops current from passing to our body or to other wires and prevents shocks and short circuits."
        },
        {
          q: "Why are the appliances in our homes connected in parallel and not in series?",
          a: "In parallel, each appliance gets the **full supply** and works **independently**. If one fails or is switched off, the others continue to work."
        }
      ],
      quiz: [
        {
          q: "The metal cap on a torch cell is its:",
          options: ["negative terminal", "positive terminal", "filament", "switch"],
          answer: 1,
          explain: "The metal cap is the **positive (+)** terminal and the flat base is the negative (−) terminal."
        },
        {
          q: "In an LED, the positive lead is the:",
          options: ["shorter lead", "thicker lead", "longer lead", "lead that is bent"],
          answer: 2,
          explain: "The **longer lead** of an LED is positive."
        },
        {
          q: "Which of these is an insulator?",
          options: ["Copper wire", "Iron nail", "Graphite from a pencil", "Dry wooden ruler"],
          answer: 3,
          explain: "Wood (when dry) does not conduct electricity, so it is an **insulator**."
        },
        {
          q: "Three bulbs are connected in series. One bulb fuses. What happens to the other two?",
          options: ["They go off because the circuit is broken", "They glow brighter", "They continue to glow as before", "They glow dimmer"],
          answer: 0,
          explain: "In a series circuit there is **only one path**. A fused bulb breaks the path, so the current stops for all."
        },
        {
          q: "A fuse protects an electric circuit because its thin wire:",
          options: ["stores the extra electricity", "makes the current flow faster", "becomes a better conductor", "melts and breaks the circuit when too much current flows"],
          answer: 3,
          explain: "When the current is too high, the **fuse wire melts** and cuts off the supply before appliances are damaged."
        },
        {
          q: "Three 1.5 V cells are joined in series. The voltage of the battery is:",
          options: ["1.5 V", "3 V", "4.5 V", "0.5 V"],
          answer: 2,
          explain: "In series, voltages add: 1.5 + 1.5 + 1.5 = **4.5 V**."
        }
      ]
    },

    // ------------------------------------------------------------------
    {
      id: "the-world-of-metals-and-non-metals",
      title: "The World of Metals and Non-metals",
      section: "Chemistry",
      summary: "Most elements around us are metals or non-metals. This chapter compares their physical properties, shows how they react with oxygen, acids and salt solutions, and describes where we use them.",
      notes: [
        {
          heading: "Physical Properties of Metals",
          points: [
            "**Lustre**: freshly cut or polished metals are shiny, e.g. gold, silver, copper and aluminium.",
            "**Malleable** (can be beaten into thin sheets, e.g. aluminium foil) and **ductile** (can be drawn into wires, e.g. copper wire).",
            "Good **conductors of heat and electricity**: this is why cooking vessels and electric wires are made of metals. Silver is the best conductor.",
            "**Sonorous**: they make a ringing sound when struck, like a school bell.",
            "Most metals are hard and have high melting points. Exceptions: **sodium and potassium** are soft enough to be cut with a knife, and **mercury** is a liquid at room temperature."
          ]
        },
        {
          heading: "Physical Properties of Non-metals",
          points: [
            "Non-metals are usually **dull**, **brittle** (they break into pieces when hammered) and are not sonorous.",
            "They are generally **poor conductors** of heat and electricity.",
            "Non-metals can be gases (oxygen, nitrogen, hydrogen), a liquid (bromine) or solids (carbon, sulphur, phosphorus, iodine).",
            "Exceptions: **graphite** (a form of carbon) conducts electricity, **diamond** (another form of carbon) is the hardest natural substance, and **iodine** is shiny."
          ]
        },
        {
          heading: "Chemical Properties",
          points: [
            "**Metal + oxygen → metal oxide.** Magnesium burns with a dazzling white flame and forms white magnesium oxide. Metal oxides are generally **basic**: their solutions turn red litmus blue.",
            "**Non-metal + oxygen → non-metal oxide.** Sulphur burns to form sulphur dioxide, and carbon forms carbon dioxide. Their solutions in water are **acidic** and turn blue litmus red.",
            "**Metal + dilute acid → salt + hydrogen gas.** Hydrogen burns with a 'pop' sound. Copper does not react with dilute acids, and non-metals generally do not either.",
            "**Displacement**: a more reactive metal pushes a less reactive metal out of its salt solution. An iron nail in blue copper sulphate solution gets a reddish-brown coating of copper, and the blue colour fades.",
            "Reactivity varies: sodium and potassium react so vigorously that they are stored in kerosene, while gold is so unreactive that it stays shiny for centuries."
          ]
        },
        {
          heading: "Uses of Metals and Non-metals",
          points: [
            "Metals: copper and aluminium for electric wires, iron and steel for bridges, buildings and machines, aluminium foil for packing, and gold and silver for jewellery and coins.",
            "Metals are often mixed with other elements to make **alloys**, which are stronger or resist rusting. Steel is iron with a little carbon; brass is copper and zinc.",
            "Non-metals: **oxygen** for breathing, **nitrogen** in fertilisers, **carbon** as fuel (coal, charcoal) and in graphite pencils, **sulphur** in matches and gunpowder, **chlorine** to disinfect drinking water and **iodine** as an antiseptic."
          ]
        }
      ],
      formulas: [
        "Metal + oxygen → metal oxide (basic)",
        "Non-metal + oxygen → non-metal oxide (acidic)",
        "Metal + dilute acid → salt + hydrogen",
        "2Mg + O₂ → 2MgO",
        "S + O₂ → SO₂",
        "Zn + 2HCl → ZnCl₂ + H₂",
        "Fe + CuSO₄ → FeSO₄ + Cu (displacement)"
      ],
      terms: [
        { term: "Lustre", meaning: "The **shine** on the surface of a metal." },
        { term: "Malleable", meaning: "Can be **beaten into thin sheets** without breaking, e.g. aluminium foil." },
        { term: "Ductile", meaning: "Can be **drawn into wires**, e.g. copper." },
        { term: "Sonorous", meaning: "Produces a **ringing sound** when struck, as metals do." },
        { term: "Alloy", meaning: "A **mixture of a metal with other elements**, e.g. steel and brass." },
        { term: "Displacement reaction", meaning: "A reaction in which a more reactive metal **pushes out a less reactive metal** from its salt solution." }
      ],
      qa: [
        {
          q: "Why are cooking vessels made of metals such as aluminium or steel, while their handles are made of plastic or wood?",
          a: "Metals are **good conductors of heat**, so food cooks quickly. Plastic and wood are **poor conductors**, so the handle stays cool enough to hold safely."
        },
        {
          q: "What will you observe when a clean iron nail is dipped in copper sulphate solution?",
          a: "A **reddish-brown layer of copper** is deposited on the nail and the **blue colour of the solution fades**. Iron is more reactive than copper, so it displaces copper from the solution: Fe + CuSO₄ → FeSO₄ + Cu."
        },
        {
          q: "Name two metals that are soft and one metal that is liquid at room temperature.",
          a: "**Sodium and potassium** are soft and can be cut with a knife; **mercury** is a liquid at room temperature."
        }
      ],
      quiz: [
        {
          q: "The property of metals that lets them be drawn into wires is called:",
          options: ["Malleability", "Sonority", "Ductility", "Lustre"],
          answer: 2,
          explain: "**Ductility** is the ability to be drawn into wires. Malleability is the ability to be beaten into sheets."
        },
        {
          q: "Which metal is a liquid at room temperature?",
          options: ["Sodium", "Mercury", "Aluminium", "Zinc"],
          answer: 1,
          explain: "**Mercury** is the only common metal that is liquid at room temperature."
        },
        {
          q: "Which non-metal conducts electricity?",
          options: ["Graphite", "Sulphur", "Iodine", "Phosphorus"],
          answer: 0,
          explain: "**Graphite**, a form of carbon, is an exception: it conducts electricity."
        },
        {
          q: "The gas released when zinc reacts with dilute hydrochloric acid is:",
          options: ["Oxygen", "Carbon dioxide", "Chlorine", "Hydrogen"],
          answer: 3,
          explain: "Metal + acid → salt + **hydrogen**. The gas burns with a 'pop' sound."
        },
        {
          q: "When an iron nail is kept in copper sulphate solution, the blue colour of the solution slowly fades because:",
          options: ["copper sulphate evaporates", "iron displaces copper from the solution", "copper displaces iron from the nail", "the nail absorbs the water"],
          answer: 1,
          explain: "Iron is **more reactive** than copper, so it takes the place of copper in the solution and forms pale green iron sulphate."
        },
        {
          q: "When oxides of non-metals such as sulphur dioxide dissolve in water, the solution:",
          options: ["turns red litmus blue", "turns turmeric paper red", "turns blue litmus red", "does not dissolve at all"],
          answer: 2,
          explain: "Non-metal oxides are **acidic**, so their solutions turn blue litmus red."
        }
      ]
    },

    // ------------------------------------------------------------------
    {
      id: "changes-around-us-physical-and-chemical",
      title: "Changes Around Us: Physical and Chemical",
      section: "Chemistry",
      summary: "Everything around us keeps changing. In a physical change no new substance is formed, while in a chemical change one or more new substances are made. This chapter covers examples of each, rusting and its prevention, and crystallisation.",
      notes: [
        {
          heading: "Physical Changes",
          points: [
            "In a **physical change** only physical properties such as shape, size, colour or state change. **No new substance** is formed.",
            "Many physical changes can be reversed, e.g. melting of ice, boiling of water and dissolving sugar in water. Some, like tearing paper or breaking glass, cannot be easily undone but are still physical changes.",
            "Other examples: cutting vegetables, stretching a rubber band, and camphor changing directly into vapour (sublimation).",
            "**Crystallisation** is a physical change: crystals of copper sulphate form from its hot, saturated solution on cooling, and salt is obtained from sea water by evaporation."
          ]
        },
        {
          heading: "Chemical Changes",
          points: [
            "In a **chemical change** one or more **new substances** with different properties are formed. It is also called a chemical reaction.",
            "Chemical changes are mostly **irreversible**: burning paper gives ash, which cannot be turned back into paper.",
            "Signs of a chemical change: **heat or light**, **gas bubbles**, **change of colour**, a **new smell**, a **sound** or a new solid. These can also occur in physical changes (water bubbles when boiling), so always ask whether a new substance has formed.",
            "Examples: burning of wood or LPG, rusting, milk turning into curd, souring of milk, cooking and baking, ripening of fruits, digestion of food and photosynthesis."
          ]
        },
        {
          heading: "Some Chemical Reactions",
          points: [
            "**Baking soda + vinegar** fizz and release carbon dioxide gas: baking soda + vinegar → sodium acetate + water + carbon dioxide.",
            "**Carbon dioxide turns lime water milky** because insoluble calcium carbonate forms. This is the test for CO₂.",
            "**Burning magnesium ribbon** gives a dazzling white light and white powder (magnesium oxide). Never look directly at the flame.",
            "**A burning candle** shows both changes: melting of wax is physical, but burning gives new substances (carbon dioxide, water vapour and soot), so it is chemical."
          ]
        },
        {
          heading: "Rusting of Iron",
          points: [
            "**Rusting** is the slow change of iron into reddish-brown hydrated iron oxide (**rust**). It needs both **oxygen (air)** and **water (moisture)**.",
            "Rusting is faster in damp places and near the sea, where the air is salty and moist.",
            "Prevention: keep iron away from air and water by **painting, oiling or greasing** it, or by **galvanisation** (coating with zinc). **Stainless steel** (iron mixed with chromium, nickel and carbon) does not rust easily.",
            "Rusting weakens iron objects such as railings, bridges and ships. Other metals also corrode: silver turns black and copper develops a green coating."
          ]
        }
      ],
      formulas: [
        "Physical change: no new substance, often reversible. Chemical change: new substance(s) formed, mostly irreversible",
        "Rusting: iron + oxygen + water → rust (hydrated iron oxide)",
        "2Mg + O₂ → 2MgO",
        "Ca(OH)₂ + CO₂ → CaCO₃ (milky) + H₂O",
        "Baking soda + vinegar → sodium acetate + water + CO₂",
        "Fe + CuSO₄ → FeSO₄ + Cu",
        "Prevention of rusting: paint, oil, grease, galvanisation (zinc coating)"
      ],
      terms: [
        { term: "Physical change", meaning: "A change in which **no new substance** is formed, only appearance or state changes." },
        { term: "Chemical change", meaning: "A change in which **one or more new substances** are formed." },
        { term: "Rusting", meaning: "The formation of reddish-brown **rust** on iron in the presence of oxygen and water." },
        { term: "Galvanisation", meaning: "Coating iron with a layer of **zinc** to protect it from rusting." },
        { term: "Crystallisation", meaning: "Formation of **crystals** from a solution by cooling or evaporation, a physical change." },
        { term: "Lime water", meaning: "A solution of calcium hydroxide that **turns milky** when carbon dioxide is passed through it." }
      ],
      qa: [
        {
          q: "Is burning of a candle a physical change or a chemical change? Explain.",
          a: "It is **both**. Melting of wax is a physical change because no new substance forms. Burning of wax vapour is a **chemical change** because new substances (carbon dioxide, water vapour and soot) are formed and heat and light are given out."
        },
        {
          q: "State two conditions necessary for rusting and two ways to prevent it.",
          a: "Rusting needs **oxygen (air) and water (moisture)**. It can be prevented by **painting or oiling** the iron, or by **galvanisation**, which is coating it with zinc."
        },
        {
          q: "How can you show that the gas released in a reaction is carbon dioxide?",
          a: "Pass the gas through **lime water**. If it is carbon dioxide, the lime water **turns milky** because calcium carbonate forms."
        }
      ],
      quiz: [
        {
          q: "Which of the following is a chemical change?",
          options: ["Melting of ice", "Dissolving sugar in water", "Souring of milk", "Tearing a sheet of paper"],
          answer: 2,
          explain: "When milk sours, **new substances** are formed, so it is a chemical change."
        },
        {
          q: "Rusting of iron needs:",
          options: ["only air", "only water", "sunlight and carbon dioxide", "oxygen and water"],
          answer: 3,
          explain: "Iron rusts when it is in contact with **both oxygen and water**."
        },
        {
          q: "Lime water turns milky when which gas is passed through it?",
          options: ["Carbon dioxide", "Oxygen", "Hydrogen", "Nitrogen"],
          answer: 0,
          explain: "Carbon dioxide reacts with lime water to form **calcium carbonate**, which makes it milky."
        },
        {
          q: "Coating iron with a layer of zinc to prevent rusting is called:",
          options: ["crystallisation", "evaporation", "galvanisation", "sublimation"],
          answer: 2,
          explain: "**Galvanisation** protects iron with a zinc coating."
        },
        {
          q: "Which of these is a physical change?",
          options: ["Rusting of an iron gate", "Growing copper sulphate crystals from a saturated solution", "Baking a cake", "Burning magnesium ribbon"],
          answer: 1,
          explain: "Crystallisation gives back the same substance in solid form, so no new substance forms: it is a **physical change**."
        },
        {
          q: "Bubbles appear when baking soda is added to vinegar. This shows that:",
          options: ["a new gas, carbon dioxide, is formed in a chemical change", "the mixture is boiling", "vinegar is changing into baking soda", "water vapour is escaping from the mixture"],
          answer: 0,
          explain: "The bubbles are **carbon dioxide**, a new substance, so a chemical change has occurred."
        }
      ]
    },

    // ------------------------------------------------------------------
    {
      id: "adolescence-a-stage-of-growth-and-change",
      title: "Adolescence: A Stage of Growth and Change",
      section: "Biology",
      summary: "Adolescence is the stage of growth between childhood and adulthood. This chapter explains the changes of puberty, the role of hormones, the menstrual cycle, how the sex of a baby is determined, and how to stay healthy.",
      notes: [
        {
          heading: "What Is Adolescence?",
          points: [
            "**Adolescence** is the stage of life between childhood and adulthood, roughly from about **11 to 18 years** of age. It can begin a little earlier or later in different people.",
            "**Puberty** is the early part of adolescence, when the body becomes capable of reproduction. Girls generally begin puberty one or two years earlier than boys.",
            "Everyone grows at their own pace, so being taller or shorter than friends is normal. Height depends on heredity (genes), diet and health.",
            "The body shape changes: boys' shoulders become broader and girls' hips become wider."
          ]
        },
        {
          heading: "Changes at Puberty",
          points: [
            "There is a rapid increase in **height**, and bones and muscles grow stronger.",
            "The **voice box (larynx)** grows. In boys it sticks out as the **Adam's apple** and the voice becomes deeper, and it may crack for a while.",
            "**Secondary sexual characters** appear: facial hair in boys, breast development in girls, and hair under the arms and other body parts in both.",
            "Sweat and oil glands become more active, causing **body odour and pimples**. Wash regularly and do not squeeze pimples.",
            "The reproductive organs mature: **testes begin to produce sperms** and **ovaries begin to release eggs (ova)**."
          ]
        },
        {
          heading: "Hormones",
          points: [
            "Changes at puberty are controlled by **hormones**, chemical messengers made by **endocrine (ductless) glands** that pour them directly into the blood.",
            "The **pituitary gland** at the base of the brain is the 'master gland'; it controls other glands and releases growth hormone. The **testes** make testosterone and the **ovaries** make oestrogen.",
            "The **thyroid gland** in the neck makes **thyroxine**, which needs **iodine**. Lack of iodine causes **goitre** (a swelling in the neck), so we use iodised salt.",
            "The **pancreas** makes **insulin**, which controls blood sugar. Too little insulin causes **diabetes**.",
            "**Adrenaline**, made by the adrenal glands, prepares the body for emergencies by increasing the heartbeat and breathing rate."
          ]
        },
        {
          heading: "Menstrual Cycle and Sex Determination",
          points: [
            "In girls, about once a month an ovary releases a mature egg, and the lining of the uterus thickens. If the egg is not fertilised, the lining and blood are shed through the vagina. This is **menstruation**, lasting about 3 to 5 days.",
            "The first menstruation is called **menarche**. The cycle repeats roughly every 28 to 30 days, and it stops during pregnancy. It is a normal, healthy process.",
            "Human cells have 23 pairs of chromosomes. The last pair are the **sex chromosomes**: **XX in females and XY in males**.",
            "Every egg carries an X chromosome, but a sperm carries either X or Y. An X sperm gives a girl (XX) and a Y sperm gives a boy (XY), so the **father's sperm decides the sex of the baby**."
          ]
        },
        {
          heading: "Staying Healthy in Adolescence",
          points: [
            "Eat a **balanced diet** with proteins, calcium, iron and vitamins, because the body is growing fast. Avoid too much junk food.",
            "Bathe daily, keep clothes clean, exercise regularly and get enough sleep.",
            "Mood swings, a wish for independence and feeling shy are normal at this age. Talk to parents, teachers or trusted elders about worries.",
            "Stay away from tobacco, alcohol and drugs, which harm the body and mind, and learn to say no to wrong peer pressure."
          ]
        }
      ],
      formulas: [
        "Adolescence ≈ 11 to 18 years; puberty is its early phase",
        "Sex chromosomes: female XX, male XY. Egg: always X. Sperm: X or Y",
        "X sperm + egg → girl (XX). Y sperm + egg → boy (XY)",
        "Menstrual cycle ≈ 28 to 30 days; menstruation lasts ≈ 3 to 5 days",
        "Hormones: testosterone (testes), oestrogen (ovaries), thyroxine (thyroid), insulin (pancreas), adrenaline (adrenal glands)",
        "Lack of iodine → goitre. Lack of insulin → diabetes"
      ],
      terms: [
        { term: "Puberty", meaning: "The early part of adolescence when the body becomes **capable of reproduction**." },
        { term: "Hormones", meaning: "**Chemical messengers** made by endocrine glands that control growth and body functions." },
        { term: "Endocrine gland", meaning: "A **ductless gland** that releases hormones directly into the blood, e.g. pituitary, thyroid." },
        { term: "Adam's apple", meaning: "The **enlarged voice box** that sticks out in the neck of boys at puberty." },
        { term: "Menstruation", meaning: "The monthly shedding of the **uterus lining and blood** through the vagina when an egg is not fertilised." },
        { term: "Sex chromosomes", meaning: "The pair of chromosomes that decide the sex of a baby: **XX for female, XY for male**." }
      ],
      qa: [
        {
          q: "Why does a boy's voice become deeper during puberty?",
          a: "At puberty the **voice box (larynx)** grows larger. In boys it becomes bigger and sticks out as the **Adam's apple**, and longer vocal cords give a deeper voice."
        },
        {
          q: "Which parent decides the sex of the baby? Explain.",
          a: "The **father**. Every egg carries an X chromosome, but a sperm carries either X or Y. If an X sperm fertilises the egg the baby is a girl (XX); if a Y sperm fertilises it, the baby is a boy (XY)."
        },
        {
          q: "Why is iodised salt recommended?",
          a: "The thyroid gland needs **iodine** to make thyroxine. Lack of iodine can cause **goitre**, a swelling of the neck, and iodised salt supplies the iodine."
        }
      ],
      quiz: [
        {
          q: "The chemical messengers that control the changes at puberty are called:",
          options: ["Enzymes", "Vitamins", "Hormones", "Antibodies"],
          answer: 2,
          explain: "**Hormones** are chemicals made by endocrine glands that are carried by the blood."
        },
        {
          q: "The 'master gland' of the human body is the:",
          options: ["Pituitary", "Thyroid", "Pancreas", "Adrenal"],
          answer: 0,
          explain: "The **pituitary gland** controls the working of several other glands."
        },
        {
          q: "Goitre is caused by the lack of:",
          options: ["Calcium", "Iodine", "Iron", "Vitamin C"],
          answer: 1,
          explain: "Without **iodine** the thyroid gland cannot make thyroxine properly and swells."
        },
        {
          q: "The sex of a baby is decided by:",
          options: ["the egg of the mother", "the age of the mother", "the food eaten by the mother", "the sperm that fertilises the egg"],
          answer: 3,
          explain: "A sperm carries **X or Y**, while the egg always carries X, so the sperm decides the sex."
        },
        {
          q: "Menstruation takes place when:",
          options: ["a fertilised egg settles in the uterus", "the thyroid releases thyroxine", "the thickened lining of the uterus and blood are shed as the egg is not fertilised", "the testes release sperms"],
          answer: 2,
          explain: "If the egg is not fertilised, the **thickened uterus lining is shed** with blood."
        },
        {
          q: "The 'Adam's apple' seen in boys at puberty is the enlarged:",
          options: ["food pipe", "thyroid gland", "windpipe", "voice box"],
          answer: 3,
          explain: "The **voice box (larynx)** grows at puberty and sticks out in boys as the Adam's apple."
        }
      ]
    },

    // ------------------------------------------------------------------
    {
      id: "heat-transfer-in-nature",
      title: "Heat Transfer in Nature",
      section: "Physics",
      summary: "Heat always flows from a hotter object to a colder one. This chapter explains temperature and thermometers, the three modes of heat transfer (conduction, convection and radiation), sea and land breezes, and why we choose certain clothes and vessels.",
      notes: [
        {
          heading: "Hot, Cold and Temperature",
          points: [
            "**Heat** is a form of energy that flows from a **hotter** object to a **colder** one until both reach the same temperature.",
            "**Temperature** tells us how hot or cold an object is. It is measured in degrees Celsius (°C) with a thermometer. Our sense of touch can be misleading, so we use a thermometer.",
            "A **clinical thermometer** measures body temperature and reads from **35 °C to 42 °C**. Normal human body temperature is about **37 °C**. It has a kink that stops the mercury from falling by itself, so shake it before use.",
            "A **laboratory thermometer** reads from −10 °C to 110 °C. Never use a clinical thermometer for hot water. A digital thermometer shows the reading in numbers and has no mercury."
          ]
        },
        {
          heading: "Conduction",
          points: [
            "**Conduction** is the transfer of heat through a solid from the hot part to the cold part, particle to particle, without the material itself moving.",
            "**Conductors** such as copper, aluminium and iron pass heat easily. **Insulators** such as wood, plastic and air do not.",
            "A steel spoon in hot tea gets hot at the end you hold because heat travels along it by conduction. That is why pans have plastic or wooden handles.",
            "Woollen clothes keep us warm because wool traps air, a poor conductor, which reduces the loss of body heat."
          ]
        },
        {
          heading: "Convection",
          points: [
            "**Convection** is the transfer of heat in liquids and gases by the movement of the heated liquid or gas itself.",
            "When water is heated in a pan, the hot water at the bottom expands, becomes lighter and rises, while cooler, heavier water sinks. This circulation heats all the water.",
            "Land heats up and cools down faster than water. In the day, air over land becomes warm and rises, and cooler air from the sea moves in: a **sea breeze** (sea to land).",
            "At night, land cools faster, so air over the warmer sea rises and air from the land moves towards the sea: a **land breeze** (land to sea).",
            "Warm air rises, which is why ventilators are placed near the ceiling to let hot air out."
          ]
        },
        {
          heading: "Radiation",
          points: [
            "**Radiation** is the transfer of heat without any medium. Heat from the Sun reaches the Earth through empty space.",
            "All hot objects give out heat radiation, which you feel when you stand near a fire or hold your hand near a hot pan.",
            "**Dark, rough** surfaces absorb more heat radiation, and **light-coloured, shiny** surfaces reflect more. So we wear light-coloured clothes in summer and dark ones in winter.",
            "A **vacuum (thermos) flask** keeps things hot or cold for long. It has a double wall with a vacuum in between (stopping conduction and convection) and shiny surfaces that reflect radiation."
          ]
        }
      ],
      formulas: [
        "Heat flows from a hotter body to a colder body",
        "Conduction: solids. Convection: liquids and gases. Radiation: no medium needed (Sun → Earth)",
        "Normal human body temperature ≈ 37 °C. Clinical thermometer: 35 °C to 42 °C",
        "Laboratory thermometer: −10 °C to 110 °C",
        "Sea breeze: sea → land (day). Land breeze: land → sea (night)",
        "Dark, rough surfaces: good absorbers of heat. Light, shiny surfaces: good reflectors"
      ],
      terms: [
        { term: "Temperature", meaning: "A measure of **how hot or cold** an object is." },
        { term: "Conduction", meaning: "Transfer of heat through a **solid** from the hot end to the cold end without movement of the material." },
        { term: "Convection", meaning: "Transfer of heat in **liquids and gases** by the movement of the heated material." },
        { term: "Radiation", meaning: "Transfer of heat **without any medium**, as from the Sun to the Earth." },
        { term: "Insulator", meaning: "A material that is a **poor conductor** of heat, e.g. wood, plastic, air." },
        { term: "Sea breeze", meaning: "The daytime wind that blows **from the sea towards the land**." }
      ],
      qa: [
        {
          q: "Why do we wear woollen clothes in winter?",
          a: "Wool has **air trapped in it**, and air is a poor conductor of heat. So woollen clothes reduce the loss of heat from our body and keep us warm."
        },
        {
          q: "Explain how a sea breeze is formed.",
          a: "In the daytime the **land gets hot faster than the sea**. The air over the land becomes warm and rises, and cooler air from the sea moves in to take its place. This movement of air from sea to land is the **sea breeze**."
        },
        {
          q: "Why are light-coloured clothes preferred in summer?",
          a: "Light-coloured clothes **reflect most of the heat radiation** from the Sun and absorb less, so we feel cooler. Dark clothes absorb more heat."
        }
      ],
      quiz: [
        {
          q: "Heat from the Sun reaches the Earth mainly by:",
          options: ["conduction", "convection", "radiation", "evaporation"],
          answer: 2,
          explain: "Between the Sun and the Earth there is empty space, and only **radiation** can transfer heat without a medium."
        },
        {
          q: "A steel spoon kept in a cup of hot tea becomes hot at the other end. This is due to:",
          options: ["radiation", "conduction", "convection", "condensation"],
          answer: 1,
          explain: "Heat travels through the solid spoon by **conduction**."
        },
        {
          q: "A sea breeze blows:",
          options: ["from land to sea during the day", "from land to sea during the night", "from sea to land at night", "from sea to land during the day"],
          answer: 3,
          explain: "In the day, land is warmer. Warm air rises over land, and cooler air from the **sea moves towards the land**."
        },
        {
          q: "Which of the following is a poor conductor of heat?",
          options: ["Wood", "Copper", "Iron", "Aluminium"],
          answer: 0,
          explain: "Wood is an **insulator**, which is why it is used for handles."
        },
        {
          q: "The normal temperature of a healthy human body is about:",
          options: ["27 °C", "37 °C", "47 °C", "98 °C"],
          answer: 1,
          explain: "Normal body temperature is about **37 °C** (98.6 °F)."
        },
        {
          q: "Water in a vessel, heated from the bottom, becomes hot throughout mainly by:",
          options: ["conduction", "radiation", "convection", "reflection"],
          answer: 2,
          explain: "Hot water rises and cool water sinks, so the heat is carried by the moving water: **convection**."
        }
      ]
    },

    // ------------------------------------------------------------------
    {
      id: "measurement-of-time-and-motion",
      title: "Measurement of Time and Motion",
      section: "Physics",
      summary: "From sundials to atomic clocks, people have always measured time. This chapter covers the types of motion, the simple pendulum, speed and its units, uniform and non-uniform motion, and distance-time graphs.",
      notes: [
        {
          heading: "Measuring Time",
          points: [
            "Early people used the Sun, Moon and seasons to keep time. A **sundial** uses the shadow of a rod that moves as the Sun moves across the sky. The Jantar Mantar observatories at Delhi and Jaipur have huge stone sundials built in the 18th century.",
            "Water clocks and sand clocks (hourglasses) were used to measure short intervals of time.",
            "The SI unit of time is the **second (s)**. 1 minute = 60 s, 1 hour = 60 minutes = 3600 s and 1 day = 24 hours.",
            "Modern clocks include **pendulum clocks**, **quartz clocks and watches** and very accurate **atomic clocks**."
          ]
        },
        {
          heading: "Types of Motion",
          points: [
            "An object is in **motion** if its position changes with time, and at **rest** if it does not.",
            "**Rectilinear (linear) motion** is motion along a straight line, e.g. a car on a straight road or a ball falling.",
            "**Circular motion** is motion along a circle, e.g. a stone whirled on a string or the hands of a clock. **Rotational motion** is spinning about a fixed axis, e.g. a ceiling fan, a top, or the Earth.",
            "**Periodic motion** repeats after equal intervals of time, e.g. the Earth going around the Sun. **Oscillatory motion** is a to-and-fro motion about a fixed position, e.g. a swing or a pendulum."
          ]
        },
        {
          heading: "The Simple Pendulum",
          points: [
            "A **simple pendulum** is a small heavy ball (bob) hung from a fixed support by a thread. When pulled aside and released, it swings to and fro.",
            "One **oscillation** is one complete to-and-fro swing, ending back where it started. The **time period** is the time taken for one oscillation.",
            "Time period = total time ÷ number of oscillations.",
            "A longer thread gives a **longer time period**. For small swings, the time period does not depend on the mass of the bob or how far it is pulled aside.",
            "A pendulum slows down and stops because of air resistance and friction at the support."
          ]
        },
        {
          heading: "Speed",
          points: [
            "**Speed** is the distance travelled in unit time: speed = distance ÷ time.",
            "The SI unit of speed is **metre per second (m/s)**. Vehicles use **km/h**. 1 m/s = 3.6 km/h.",
            "In **uniform motion** equal distances are covered in equal intervals of time. In **non-uniform motion** the distances covered in equal intervals are different, e.g. a bus in city traffic.",
            "For non-uniform motion we use **average speed** = total distance ÷ total time.",
            "A **speedometer** shows the speed of a vehicle and an **odometer** shows the distance it has covered."
          ]
        },
        {
          heading: "Distance–Time Graphs",
          points: [
            "In a distance–time graph, **time** is on the horizontal axis and **distance** is on the vertical axis.",
            "A **straight sloping line** shows uniform speed, and a **steeper line** means a higher speed.",
            "A line **parallel to the time axis** shows that the object is at **rest**. A curved line shows non-uniform speed.",
            "Graphs let us compare the motion of two objects at a glance, such as two cyclists."
          ]
        }
      ],
      formulas: [
        "Speed = Distance ÷ Time",
        "Distance = Speed × Time",
        "Time = Distance ÷ Speed",
        "Average speed = Total distance ÷ Total time",
        "1 m/s = 3.6 km/h; 1 km/h = 5/18 m/s",
        "Time period of a pendulum = Total time ÷ Number of oscillations",
        "1 hour = 60 min = 3600 s; 1 day = 24 hours = 86 400 s"
      ],
      examples: [
        {
          q: "A car travels 150 km in 3 hours. Find its speed in km/h and in m/s.",
          steps: [
            "Speed = distance ÷ time = 150 km ÷ 3 h = 50 km/h",
            "To convert to m/s, multiply by 5/18: 50 × 5/18 = 250/18 ≈ 13.9 m/s"
          ],
          answer: "Speed = 50 km/h ≈ 13.9 m/s"
        },
        {
          q: "A pendulum completes 20 oscillations in 40 seconds. Find its time period.",
          steps: [
            "Time period = total time ÷ number of oscillations",
            "Time period = 40 s ÷ 20 = 2 s"
          ],
          answer: "Time period = 2 s"
        }
      ],
      terms: [
        { term: "Motion", meaning: "A change in the **position** of an object with time." },
        { term: "Oscillation", meaning: "One complete **to-and-fro** movement of a pendulum or swing." },
        { term: "Time period", meaning: "The time taken for **one complete oscillation**." },
        { term: "Speed", meaning: "The **distance travelled per unit time**." },
        { term: "Uniform motion", meaning: "Motion in which **equal distances** are covered in equal intervals of time." },
        { term: "Average speed", meaning: "**Total distance** travelled divided by **total time** taken." }
      ],
      qa: [
        {
          q: "Differentiate between uniform and non-uniform motion with an example of each.",
          a: "In **uniform motion** an object covers equal distances in equal intervals of time, e.g. a car moving steadily at 40 km/h on a straight highway. In **non-uniform motion** the distances covered in equal intervals differ, e.g. a bus moving in city traffic."
        },
        {
          q: "What does a line parallel to the time axis in a distance–time graph show?",
          a: "It shows that the object is **at rest**, because its distance does not change as time passes."
        },
        {
          q: "A train travelling at 60 km/h takes 2.5 hours to go from one station to another. Find the distance between the stations.",
          a: "Distance = speed × time = 60 km/h × 2.5 h = **150 km**."
        }
      ],
      quiz: [
        {
          q: "The SI unit of time is the:",
          options: ["second", "minute", "hour", "day"],
          answer: 0,
          explain: "The **second (s)** is the SI unit of time."
        },
        {
          q: "A swing moving to and fro is an example of:",
          options: ["rectilinear motion", "oscillatory motion", "rotational motion", "uniform motion"],
          answer: 1,
          explain: "A to-and-fro motion about a fixed position is **oscillatory motion**."
        },
        {
          q: "A bus covers 240 km in 4 hours. Its average speed is:",
          options: ["40 km/h", "50 km/h", "60 km/h", "80 km/h"],
          answer: 2,
          explain: "Speed = 240 ÷ 4 = **60 km/h**."
        },
        {
          q: "The time period of a simple pendulum increases when:",
          options: ["the mass of the bob is increased", "the bob is pulled slightly further", "the thread is shortened", "the length of the thread is increased"],
          answer: 3,
          explain: "A **longer pendulum** takes more time for each oscillation."
        },
        {
          q: "A speed of 54 km/h is equal to:",
          options: ["5.4 m/s", "15 m/s", "54 m/s", "194.4 m/s"],
          answer: 1,
          explain: "54 km/h = 54 × 5/18 = **15 m/s**."
        },
        {
          q: "In a distance–time graph, a straight line parallel to the time axis shows that the object is:",
          options: ["moving with uniform speed", "moving with increasing speed", "at rest", "moving in a circle"],
          answer: 2,
          explain: "The distance is not changing with time, so the object is **at rest**."
        }
      ]
    },

    // ------------------------------------------------------------------
    {
      id: "life-processes-in-animals",
      title: "Life Processes in Animals",
      section: "Biology",
      summary: "Animals carry out life processes such as nutrition, respiration, transport and excretion to stay alive. This chapter follows food through the human digestive system and looks at breathing, blood and the heart, and how the body removes waste, with examples from other animals.",
      notes: [
        {
          heading: "Nutrition and Digestion in Humans",
          points: [
            "Animals cannot make their own food. The steps of nutrition are **ingestion** (taking food in), **digestion** (breaking it into simple soluble forms), **absorption** (into the blood), **assimilation** (use by the body) and **egestion** (removal of undigested waste).",
            "Digestion starts in the **mouth**. Teeth chew the food (an adult has 32 teeth) and **saliva** begins to break down **starch into sugar**.",
            "The food pipe (**oesophagus**) pushes food to the **stomach** by wave-like muscle movements called **peristalsis**. The stomach makes hydrochloric acid and enzymes that digest proteins, and mucus protects its lining.",
            "In the **small intestine** (about 7.5 m long) digestion is completed with the help of **bile** (made in the liver, which helps in digesting fats), pancreatic juice and intestinal juice. Digested food is absorbed through finger-like **villi** into the blood.",
            "The **large intestine** absorbs water. The rest of the undigested food is stored in the rectum and removed through the **anus** as faeces."
          ]
        },
        {
          heading: "Feeding in Other Animals",
          points: [
            "**Cows, buffaloes and goats** swallow grass quickly and store it in the **rumen**. Later the partly digested food (**cud**) comes back to the mouth and is chewed again. This is called **rumination**.",
            "Grass contains **cellulose**, which humans cannot digest. Microbes in the stomach of these animals help to digest it. The fibre (roughage) in our food does not get digested but helps food move through the gut.",
            "**Amoeba** is a single cell. It surrounds food with finger-like **pseudopodia** and takes it into a **food vacuole**, where it is digested."
          ]
        },
        {
          heading: "Respiration and Breathing",
          points: [
            "**Respiration** is the release of energy from food in every cell using oxygen: glucose + oxygen → carbon dioxide + water + energy.",
            "During **breathing**, air passes through the nose, windpipe and into the lungs, where oxygen enters the blood and carbon dioxide leaves it.",
            "**Inhaling**: the ribs move up and outwards and the diaphragm moves down, so the chest cavity becomes larger and air rushes in. **Exhaling**: the ribs move down and inwards and the diaphragm moves up.",
            "An adult breathes about 15 to 18 times a minute at rest, and faster during exercise. Exhaled air has much more CO₂ (about 4%) than inhaled air (about 0.04%).",
            "Other animals: an **earthworm** breathes through its moist skin, **fish** through gills, **insects** through tiny openings (spiracles) leading to air tubes, and **frogs** through their skin and lungs."
          ]
        },
        {
          heading: "Transport in the Body",
          points: [
            "The **heart** is a muscular pump about the size of your fist. It has four chambers: two upper **atria** and two lower **ventricles**. It beats about **72 times a minute** at rest.",
            "**Arteries** carry blood away from the heart. **Veins** bring blood back to the heart. **Capillaries** are very thin vessels where oxygen and food pass from the blood into the cells.",
            "Blood has a liquid part, the **plasma**, and three types of cells. **Red blood cells** carry oxygen, **white blood cells** fight germs and **platelets** help blood to clot when we are hurt.",
            "Red blood cells contain **haemoglobin**, a red pigment with iron. Lack of iron causes **anaemia**, so eat green leafy vegetables and pulses.",
            "The pulse at the wrist is the throbbing of an artery. A doctor listens to the heartbeat with a stethoscope."
          ]
        },
        {
          heading: "Excretion",
          points: [
            "**Excretion** is the removal of harmful waste made in the body, such as urea. It is different from egestion, which is the removal of undigested food.",
            "The two **kidneys** filter the blood and remove urea, extra water and salts as **urine**. Urine goes through the **ureters** to the **urinary bladder** and leaves through the **urethra**.",
            "Urine is about 95% water, 2.5% urea and 2.5% other wastes. An adult passes about 1 to 1.8 litres a day.",
            "The lungs remove carbon dioxide, and the skin removes water and salts as sweat.",
            "If the kidneys fail, a machine cleans the blood by a process called **dialysis**."
          ]
        }
      ],
      formulas: [
        "Glucose + oxygen → carbon dioxide + water + energy (respiration)",
        "Nutrition: ingestion → digestion → absorption → assimilation → egestion",
        "Path of food: mouth → food pipe → stomach → small intestine → large intestine → rectum → anus",
        "Breathing rate at rest ≈ 15 to 18 per minute. Heartbeat at rest ≈ 72 per minute",
        "Urine ≈ 95% water + 2.5% urea + 2.5% other wastes",
        "Inhale: ribs up and out, diaphragm down. Exhale: ribs down and in, diaphragm up"
      ],
      examples: [
        {
          q: "A resting adult's heart beats about 72 times in a minute. How many times does it beat in one day?",
          steps: [
            "Minutes in one day = 24 × 60 = 1440",
            "Beats in a day = 72 × 1440 = 103 680"
          ],
          answer: "About 1 lakh beats (103 680) in one day"
        }
      ],
      terms: [
        { term: "Digestion", meaning: "Breaking down of food into **simple, soluble substances** that the body can absorb." },
        { term: "Villi", meaning: "Finger-like projections in the small intestine that **absorb** digested food." },
        { term: "Diaphragm", meaning: "A muscular sheet below the lungs that moves **down during inhalation**." },
        { term: "Haemoglobin", meaning: "The red, iron-containing pigment in red blood cells that **carries oxygen**." },
        { term: "Excretion", meaning: "Removal of **harmful waste** made inside the body, such as urea." },
        { term: "Rumination", meaning: "Chewing the **cud** again, as done by cows and buffaloes." }
      ],
      qa: [
        {
          q: "How is excretion different from egestion?",
          a: "**Excretion** is the removal of waste made in the body's cells, such as urea. **Egestion** is the removal of undigested food from the large intestine as faeces."
        },
        {
          q: "What happens to the ribs and the diaphragm when we inhale?",
          a: "The **ribs move up and outwards** and the **diaphragm moves down**. The chest cavity becomes larger, so air rushes into the lungs."
        },
        {
          q: "Why do we sometimes get muscle cramps after heavy exercise?",
          a: "During hard exercise the muscles may not get enough oxygen. They then break down glucose partly without oxygen and form **lactic acid**, which collects in the muscles and causes cramps."
        }
      ],
      quiz: [
        {
          q: "Digestion of starch begins in the:",
          options: ["mouth", "stomach", "small intestine", "large intestine"],
          answer: 0,
          explain: "**Saliva** in the mouth starts breaking down starch into sugar."
        },
        {
          q: "The finger-like projections in the small intestine that absorb digested food are called:",
          options: ["bronchi", "villi", "alveoli", "capillaries"],
          answer: 1,
          explain: "**Villi** increase the surface area for absorption of food."
        },
        {
          q: "Which part of the blood carries oxygen?",
          options: ["White blood cells", "Platelets", "Plasma", "Red blood cells"],
          answer: 3,
          explain: "**Haemoglobin** in red blood cells carries oxygen."
        },
        {
          q: "Which animal breathes through its moist skin?",
          options: ["Fish", "Cockroach", "Earthworm", "Buffalo"],
          answer: 2,
          explain: "An **earthworm** takes in oxygen through its moist skin."
        },
        {
          q: "The organs that filter blood and form urine are the:",
          options: ["lungs", "kidneys", "ureters", "liver"],
          answer: 1,
          explain: "The two **kidneys** filter the blood and make urine."
        },
        {
          q: "What happens in the body during inhalation?",
          options: ["The diaphragm moves up; the ribs move down and inwards", "The diaphragm moves up; the ribs move up and outwards", "The diaphragm moves down; the ribs move down and inwards", "The diaphragm moves down; the ribs move up and outwards"],
          answer: 3,
          explain: "The chest cavity becomes larger when the **diaphragm moves down** and the **ribs move up and outwards**, so air enters the lungs."
        }
      ]
    },

    // ------------------------------------------------------------------
    {
      id: "life-processes-in-plants",
      title: "Life Processes in Plants",
      section: "Biology",
      summary: "Plants make their own food by photosynthesis, take in water and minerals through roots, lose water through transpiration, and also respire and get rid of waste. This chapter also covers other ways in which plants get food, such as parasites and insectivorous plants.",
      notes: [
        {
          heading: "Photosynthesis: How Plants Make Food",
          points: [
            "Green plants are **autotrophs**: they make their own food by **photosynthesis**, using **sunlight**, **carbon dioxide** from the air and **water** from the soil, in the presence of the green pigment **chlorophyll**.",
            "Leaves are the food factories of the plant. Chlorophyll is present in **chloroplasts**, and air enters the leaf through tiny pores called **stomata**.",
            "The food made is glucose, which is stored as **starch**. The presence of starch is tested with iodine solution, which turns **blue-black**.",
            "**Oxygen** is released during photosynthesis. Light energy is changed into chemical energy stored in food."
          ]
        },
        {
          heading: "Other Ways Plants Get Food",
          points: [
            "**Parasitic plants**, like Cuscuta (amarbel), have no chlorophyll and take food from the plant they grow on (the host).",
            "**Insectivorous plants**, such as the pitcher plant and Venus flytrap, trap insects to get nitrogen because they grow in soil poor in nitrogen. They are green and also make food by photosynthesis.",
            "**Fungi** such as mushrooms and bread mould are not plants. They feed on dead and decaying matter and are called **saprotrophs**.",
            "In **symbiosis** two organisms live together and help each other. A **lichen** is an alga and a fungus living together. **Rhizobium** bacteria live in the root nodules of pulse plants such as gram and peas and change nitrogen of the air into a form the plant can use."
          ]
        },
        {
          heading: "Water and Mineral Transport",
          points: [
            "Roots absorb water and minerals from the soil through tiny **root hairs**.",
            "**Xylem** tubes carry water and minerals up from the roots to the leaves. **Phloem** tubes carry food made in the leaves to all parts of the plant.",
            "Plants lose water as vapour through the stomata of their leaves. This is called **transpiration**. It pulls water up the plant and also cools the plant.",
            "Transpiration is faster in hot, dry and windy weather. A leafy twig covered with a polythene bag in sunlight collects water droplets inside, which shows transpiration."
          ]
        },
        {
          heading: "Respiration and Excretion in Plants",
          points: [
            "Plants **respire** day and night in all their living cells: glucose + oxygen → carbon dioxide + water + energy.",
            "Leaves take in oxygen through stomata. Roots take in oxygen from the air spaces between soil particles, so plants in a waterlogged field can die because their roots cannot respire.",
            "In sunlight, photosynthesis makes more oxygen than respiration uses, so plants give out oxygen in the daytime.",
            "Plants have no special excretory organs. They store wastes in old leaves and bark, which fall off, or give them out as gums, resins and latex."
          ]
        }
      ],
      formulas: [
        "Photosynthesis: carbon dioxide + water → glucose + oxygen (in sunlight, with chlorophyll)",
        "6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂ (sunlight, chlorophyll)",
        "Respiration: glucose + oxygen → carbon dioxide + water + energy",
        "Starch test: iodine solution turns blue-black",
        "Xylem: water and minerals upwards. Phloem: food to all parts",
        "Rhizobium in root nodules of pulses converts atmospheric nitrogen into a usable form"
      ],
      terms: [
        { term: "Photosynthesis", meaning: "The process by which green plants **make food** from carbon dioxide and water using sunlight." },
        { term: "Chlorophyll", meaning: "The **green pigment** in leaves that traps sunlight for photosynthesis." },
        { term: "Stomata", meaning: "Tiny **pores in leaves** for the exchange of gases and the loss of water vapour." },
        { term: "Transpiration", meaning: "Loss of **water vapour** from the leaves of a plant through stomata." },
        { term: "Xylem", meaning: "Tubes that carry **water and minerals** upwards from the roots." },
        { term: "Phloem", meaning: "Tubes that carry **food** from the leaves to other parts of the plant." }
      ],
      qa: [
        {
          q: "Why are leaves called the food factories of a plant?",
          a: "Leaves contain **chlorophyll** in their cells. In sunlight they use carbon dioxide taken in through the stomata and water brought by the xylem to make food (glucose) by photosynthesis."
        },
        {
          q: "How does Cuscuta get its food differently from a pitcher plant?",
          a: "**Cuscuta** has no chlorophyll and takes ready-made food from its host plant, so it is a parasite. The **pitcher plant** is green and makes its own food, but traps insects to get nitrogen that is missing in its soil."
        },
        {
          q: "What is transpiration? State two benefits.",
          a: "Transpiration is the loss of **water vapour** from leaves through stomata. It helps to **pull water and minerals up** the plant and to **cool** the plant."
        }
      ],
      quiz: [
        {
          q: "Plants take in carbon dioxide for photosynthesis through the:",
          options: ["root hairs", "stomata", "xylem", "flowers"],
          answer: 1,
          explain: "The tiny pores on leaves called **stomata** let air enter."
        },
        {
          q: "The presence of starch in a leaf is tested using:",
          options: ["lime water", "litmus paper", "iodine solution", "vinegar"],
          answer: 2,
          explain: "Iodine solution turns **blue-black** when starch is present."
        },
        {
          q: "Which tissue carries food from the leaves to the other parts of the plant?",
          options: ["Xylem", "Root hairs", "Stomata", "Phloem"],
          answer: 3,
          explain: "**Phloem** carries food; xylem carries water and minerals."
        },
        {
          q: "Which of these plants traps insects to get nitrogen?",
          options: ["Pitcher plant", "Cuscuta", "Pea plant", "Mango tree"],
          answer: 0,
          explain: "The **pitcher plant** grows in nitrogen-poor soil and gets nitrogen from insects."
        },
        {
          q: "Rhizobium bacteria live in the root nodules of:",
          options: ["wheat and rice", "gram and peas", "mango and banana", "cactus and aloe"],
          answer: 1,
          explain: "Rhizobium lives in the roots of **pulse plants**, such as gram and peas, and helps them to use atmospheric nitrogen."
        },
        {
          q: "Transpiration is the loss of water vapour from the:",
          options: ["roots through the root hairs", "flowers through the petals", "leaves through the stomata", "stem through the xylem"],
          answer: 2,
          explain: "Most water vapour is lost from the **leaves through the stomata**."
        }
      ]
    },

    // ------------------------------------------------------------------
    {
      id: "light-shadows-and-reflections",
      title: "Light: Shadows and Reflections",
      section: "Physics",
      summary: "Light helps us see, travels in straight lines and forms shadows. This chapter covers luminous and non-luminous objects, transparent, translucent and opaque materials, how shadows form, the pinhole camera, and reflection from plane mirrors.",
      notes: [
        {
          heading: "Light and How We See",
          points: [
            "**Luminous** objects give out their own light, such as the Sun, stars, a burning candle and a lit bulb. **Non-luminous** objects such as a book or the Moon are seen only when light from a source falls on them and is reflected to our eyes.",
            "Light travels in **straight lines**. That is why we cannot see around a corner.",
            "The speed of light in vacuum is about **3 × 10⁸ m/s** (3 lakh km every second). Sunlight takes about 8 minutes to reach the Earth.",
            "**Transparent** materials (glass, clear water) allow almost all light through, **translucent** materials (butter paper, frosted glass) allow some, and **opaque** materials (wood, metal, stone) allow none."
          ]
        },
        {
          heading: "Shadows",
          points: [
            "A **shadow** forms when an opaque object blocks light. We need a **source of light**, an **opaque object** and a **screen**.",
            "A shadow shows only the outline of the object, and it is dark.",
            "The nearer the object is to the light source, the **bigger** the shadow.",
            "Our shadow in sunlight is long in the morning and evening, and short at noon when the Sun is high.",
            "Shadow puppet theatre, such as Tholu Bommalata of Andhra Pradesh, uses shadows to tell stories."
          ]
        },
        {
          heading: "Pinhole Camera",
          points: [
            "A **pinhole camera** is a box with a tiny hole on one side and a translucent screen (such as tracing paper) on the opposite side. Light from outside passes through the hole and forms an image on the screen.",
            "The image is **inverted** (upside down). It forms this way because light travels in straight lines: light from the top of the object reaches the bottom of the screen.",
            "A smaller hole gives a sharper but dimmer image.",
            "Round patches of light under a tree are images of the Sun formed by the small gaps between leaves."
          ]
        },
        {
          heading: "Reflection of Light",
          points: [
            "**Reflection** is the bouncing back of light when it falls on a surface. Mirrors, polished metal and still water reflect light well.",
            "The ray that falls on the mirror is the **incident ray**, the ray that bounces back is the **reflected ray**, and the line at right angles to the mirror at the point of incidence is the **normal**.",
            "**Laws of reflection:** (1) the angle of incidence equals the angle of reflection; (2) the incident ray, the reflected ray and the normal lie in the same plane.",
            "A smooth surface gives **regular reflection**. A rough surface such as paper or a wall gives **diffused reflection**, scattering light in all directions, so we can see the wall from anywhere."
          ]
        },
        {
          heading: "Images in a Plane Mirror",
          points: [
            "A **plane mirror** is a flat mirror. Its image is **virtual** (cannot be caught on a screen), **erect** and the **same size** as the object.",
            "The image is as far **behind the mirror** as the object is in front of it.",
            "**Lateral inversion**: left and right are interchanged in the image. That is why AMBULANCE is written in reverse on the front of the vehicle, so that drivers ahead can read it in their rear-view mirrors.",
            "A **periscope** uses two plane mirrors to see over a wall or from under water, as in submarines. A **kaleidoscope** uses mirrors to make colourful patterns by multiple reflections."
          ]
        }
      ],
      formulas: [
        "Speed of light in vacuum ≈ 3 × 10⁸ m/s (3 lakh km/s)",
        "Laws of reflection: angle of incidence = angle of reflection; incident ray, reflected ray and normal lie in one plane",
        "Plane mirror image: virtual, erect, same size, as far behind the mirror as the object is in front, laterally inverted",
        "Distance between object and its image = 2 × distance of the object from the mirror",
        "Distance = speed × time"
      ],
      examples: [
        {
          q: "A ray of light falls on a plane mirror making an angle of 30° with the mirror surface. Find the angle of incidence and the angle of reflection.",
          steps: [
            "The normal is at 90° to the mirror, and angles of incidence and reflection are measured from the normal.",
            "Angle of incidence = 90° − 30° = 60°",
            "Angle of reflection = angle of incidence = 60°"
          ],
          answer: "Angle of incidence = angle of reflection = 60°"
        },
        {
          q: "Rahul stands 2 m in front of a plane mirror. How far is his image from him?",
          steps: [
            "The image is as far behind the mirror as the object is in front: 2 m",
            "Distance between Rahul and his image = 2 m + 2 m"
          ],
          answer: "4 m"
        }
      ],
      terms: [
        { term: "Luminous object", meaning: "An object that gives out **its own light**, e.g. the Sun." },
        { term: "Translucent", meaning: "A material that lets **only some light** pass through, e.g. butter paper." },
        { term: "Opaque", meaning: "A material that lets **no light** pass through, e.g. wood." },
        { term: "Pinhole camera", meaning: "A box with a tiny hole that forms an **inverted image** on a screen." },
        { term: "Lateral inversion", meaning: "The **left–right interchange** of an image in a plane mirror." },
        { term: "Periscope", meaning: "A device with two plane mirrors used to **see over obstacles**." }
      ],
      qa: [
        {
          q: "Why is AMBULANCE written in reverse on the front of the vehicle?",
          a: "A plane mirror shows **lateral inversion**, so a reversed word looks correct in the mirror. Drivers ahead see the word correctly in their rear-view mirror and can make way."
        },
        {
          q: "What is needed to form a shadow?",
          a: "A **source of light**, an **opaque object** that blocks the light, and a **screen** (surface) on which the shadow falls."
        },
        {
          q: "A rough wall does not form images like a mirror, though it reflects light. Why?",
          a: "A rough wall causes **diffused reflection**: it scatters light in all directions instead of sending it back in a fixed direction. A smooth mirror gives regular reflection, which forms a clear image."
        }
      ],
      quiz: [
        {
          q: "Which of the following is a luminous object?",
          options: ["Moon", "Mirror", "Burning candle", "Wooden table"],
          answer: 2,
          explain: "A burning candle gives out its **own light**. The Moon only reflects sunlight."
        },
        {
          q: "Butter paper is an example of a:",
          options: ["transparent material", "opaque material", "luminous material", "translucent material"],
          answer: 3,
          explain: "Butter paper lets **some light** through, so it is translucent."
        },
        {
          q: "Which fact about light explains why a pinhole camera forms an inverted image?",
          options: ["Light travels in straight lines", "Light is reflected by the screen", "Light is faster than sound", "Light is a form of heat"],
          answer: 0,
          explain: "As light travels in **straight lines**, rays from the top of the object reach the bottom of the screen."
        },
        {
          q: "A ray of light falls on a plane mirror at 40° to the normal. The angle of reflection is:",
          options: ["20°", "40°", "50°", "80°"],
          answer: 1,
          explain: "Angle of reflection = angle of incidence = **40°**."
        },
        {
          q: "The image of a person in a plane mirror is:",
          options: ["real and the same size", "virtual, inverted and smaller", "virtual, erect and the same size", "real, erect and bigger"],
          answer: 2,
          explain: "A plane mirror forms a **virtual, erect** image of the **same size**."
        },
        {
          q: "Which device uses plane mirrors to look over a wall?",
          options: ["Microscope", "Pinhole camera", "Kaleidoscope", "Periscope"],
          answer: 3,
          explain: "A **periscope** has two plane mirrors fixed at an angle to see over obstacles."
        }
      ]
    },

    // ------------------------------------------------------------------
    {
      id: "earth-moon-and-the-sun",
      title: "Earth, Moon, and the Sun",
      section: "Physics",
      summary: "Day and night, years and seasons, the phases of the Moon and eclipses all come from the motions of the Earth and the Moon. This chapter explains rotation and revolution, the seasons, the Moon's phases, and solar and lunar eclipses.",
      notes: [
        {
          heading: "The Sun and the Solar System",
          points: [
            "The **Sun** is a star, a huge glowing ball of hot gases, mainly hydrogen and helium. It is the main source of light and heat for the Earth.",
            "Eight planets go around the Sun: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus and Neptune, in order of distance from the Sun. The Sun, the planets and other objects form the **Solar System**.",
            "The Sun is about **15 crore km** from the Earth, and its light takes about 8 minutes to reach us.",
            "Never look directly at the Sun, even through binoculars or a telescope, as it can damage the eyes permanently."
          ]
        },
        {
          heading: "Rotation and Revolution of the Earth",
          points: [
            "**Rotation**: the Earth spins on its axis (an imaginary line through the North and South Poles) once in about **24 hours**, from west to east. This causes **day and night**.",
            "Because of this spin, the Sun, Moon and stars appear to rise in the east and set in the west.",
            "**Revolution**: the Earth goes around the Sun along a path called its **orbit** in about **365¼ days**, which is one year.",
            "To make up for the extra quarter day, every fourth year has 366 days and is called a **leap year**, with 29 days in February.",
            "The shadow of a stick is longest in the morning and evening and shortest at noon. Sundials work on this idea."
          ]
        },
        {
          heading: "Seasons",
          points: [
            "The Earth's axis is **tilted about 23½°** from the vertical, and it keeps pointing in the same direction in space as the Earth goes around the Sun.",
            "Because of this tilt, for part of the year the Northern Hemisphere leans towards the Sun and gets more direct rays and longer days: **summer**. At the same time, the Southern Hemisphere has winter.",
            "Seasons are caused by the **tilt of the axis and the revolution of the Earth**, not by the Earth being nearer to or farther from the Sun.",
            "Around **21 March** and **23 September** day and night are almost equal. In the Northern Hemisphere, about **21 June** is the longest day and about **22 December** is the shortest day."
          ]
        },
        {
          heading: "The Moon and Its Phases",
          points: [
            "The **Moon** is the Earth's only natural satellite. It goes around the Earth in about **27 days** and takes about the same time to spin once on its axis, so we always see the **same side** of the Moon.",
            "The Moon has no light of its own; it shines by **reflecting sunlight**. Half of the Moon is always lit by the Sun, but from the Earth we see different amounts of the lit half, which are the **phases of the Moon**.",
            "The phases repeat in about **29½ days**. On **new moon** (amavasya) the Moon is not visible, it grows bright (waxing) to **full moon** (purnima), then shrinks (waning).",
            "The Moon is about one-fourth the width of the Earth and about 3.8 lakh km away. It has no air or liquid water, and its surface has many craters made by impacts.",
            "India's Chandrayaan-3 made a soft landing near the Moon's south polar region in August 2023."
          ]
        },
        {
          heading: "Eclipses",
          points: [
            "A **solar eclipse** happens on a **new moon** day when the Moon comes between the Sun and the Earth and its shadow falls on part of the Earth. Never watch it without proper eclipse glasses.",
            "A **lunar eclipse** happens on a **full moon** night when the Earth comes between the Sun and the Moon and the Earth's shadow falls on the Moon. It is safe to watch with the naked eye, and the Moon often looks reddish.",
            "We do not have an eclipse every month because the Moon's orbit is slightly tilted compared with the Earth's orbit, so the Moon's shadow usually passes above or below the Earth.",
            "In a total solar eclipse the Sun is fully covered for only a few minutes at a place, and the sky becomes dark."
          ]
        }
      ],
      formulas: [
        "Rotation of the Earth ≈ 24 hours (1 day). Revolution ≈ 365¼ days (1 year)",
        "The Earth rotates 360° in 24 hours, so 15° each hour",
        "Tilt of the Earth's axis ≈ 23½°",
        "Moon goes around the Earth in ≈ 27 days. Cycle of phases ≈ 29½ days",
        "Solar eclipse: Sun – Moon – Earth (new moon). Lunar eclipse: Sun – Earth – Moon (full moon)",
        "Earth–Sun distance ≈ 15 crore km. Earth–Moon distance ≈ 3.8 lakh km"
      ],
      examples: [
        {
          q: "The Earth completes one rotation (360°) in 24 hours. By how many degrees does it rotate in one hour?",
          steps: [
            "Angle turned in 24 hours = 360°",
            "Angle turned in 1 hour = 360° ÷ 24 = 15°"
          ],
          answer: "15° every hour"
        },
        {
          q: "Sunlight takes about 500 seconds to reach the Earth. If light travels at 3 lakh km per second (3 × 10⁵ km/s), find the distance of the Sun.",
          steps: [
            "Distance = speed × time",
            "Distance = 3 × 10⁵ km/s × 500 s = 1.5 × 10⁸ km"
          ],
          answer: "About 1.5 × 10⁸ km, i.e. 15 crore km"
        }
      ],
      terms: [
        { term: "Rotation", meaning: "The spinning of the Earth on its **axis**, which causes day and night." },
        { term: "Revolution", meaning: "The movement of the Earth around the **Sun** along its orbit, taking one year." },
        { term: "Orbit", meaning: "The **path** along which a planet or moon goes around another body." },
        { term: "Leap year", meaning: "A year of **366 days**, which comes every fourth year." },
        { term: "Phases of the Moon", meaning: "The changing shape of the **lit part of the Moon** that we see from the Earth." },
        { term: "Eclipse", meaning: "Blocking of light when one body comes in the **shadow** of another, as in a solar or lunar eclipse." }
      ],
      qa: [
        {
          q: "Why do we have day and night?",
          a: "The Earth **rotates on its axis** once in about 24 hours. The half of the Earth facing the Sun has day, and the half facing away from the Sun has night."
        },
        {
          q: "Why do we not see a solar eclipse every month?",
          a: "The Moon's orbit is **slightly tilted** compared with the Earth's orbit. On most new moon days the Moon's shadow passes above or below the Earth, so the Moon does not block the Sun for us."
        },
        {
          q: "What causes the seasons?",
          a: "The Earth's axis is **tilted** and keeps pointing in the same direction while the Earth **revolves around the Sun**. So the Northern and Southern Hemispheres lean towards the Sun at different times of the year and receive different amounts of sunlight."
        }
      ],
      quiz: [
        {
          q: "The Earth completes one rotation on its axis in about:",
          options: ["12 hours", "24 hours", "7 days", "365 days"],
          answer: 1,
          explain: "One rotation takes about **24 hours**, which gives one day and night."
        },
        {
          q: "Seasons occur on the Earth because:",
          options: ["the distance of the Earth from the Sun changes a lot", "the Moon blocks sunlight", "the Sun becomes brighter and dimmer", "the Earth's axis is tilted as it goes around the Sun"],
          answer: 3,
          explain: "The **tilted axis** and the revolution of the Earth cause seasons."
        },
        {
          q: "A lunar eclipse takes place when:",
          options: ["the Earth comes between the Sun and the Moon", "the Moon comes between the Sun and the Earth", "the Sun comes between the Earth and the Moon", "the Moon is very far from the Earth"],
          answer: 0,
          explain: "The Earth's shadow falls on the Moon during a **lunar eclipse** at full moon."
        },
        {
          q: "We always see the same side of the Moon because:",
          options: ["the Moon does not rotate at all", "the Sun lights only one side of the Moon", "the Moon takes about the same time to spin once as to go around the Earth", "the Moon always faces the Sun"],
          answer: 2,
          explain: "The Moon spins once in about the same time that it takes to go around the Earth, so the **same face** is turned towards us."
        },
        {
          q: "A leap year has:",
          options: ["365 days", "366 days", "364 days", "367 days"],
          answer: 1,
          explain: "A leap year has **366 days**, with 29 days in February."
        },
        {
          q: "How many planets are there in the Solar System?",
          options: ["Seven", "Nine", "Ten", "Eight"],
          answer: 3,
          explain: "There are **eight** planets, from Mercury to Neptune."
        }
      ]
    }
  ]
});
