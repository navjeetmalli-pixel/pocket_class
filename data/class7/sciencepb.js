// PSEB Class 7 Science: the earlier NCERT book, which PSEB still uses (2026–27).
StudyData.add(7, "sciencepb", {
  // What this content follows. match: "textbook" | "older-book" | "topic". Set reviewed to a date once a teacher has checked it.
  syllabus: {board: "PSEB", match: "textbook", books: ["Science (earlier NCERT book)"], note: "PSEB 2026–27 uses the earlier NCERT book for this class; chapters follow its list.", reviewed: false},
  chapters: [
    // ------------------------------------------------------------------
    {
      id: "nutrition-in-plants",
      title: "Nutrition in Plants",
      section: "Biology",
      summary: "Green plants make their own food by photosynthesis, while other plants and organisms obtain food in different ways. This chapter explains photosynthesis, other modes of plant nutrition and how soil nutrients are replaced.",
      notes: [
        {
          heading: "Photosynthesis",
          points: [
            "Green plants are **autotrophs**: they make their own food. Organisms that depend on others for food are **heterotrophs**.",
            "In **photosynthesis**, leaves use **sunlight**, **chlorophyll**, **carbon dioxide** and **water** to make carbohydrates (food) and release **oxygen**.",
            "**Chlorophyll** is the green pigment in leaves that captures sunlight energy.",
            "Carbon dioxide enters through tiny pores called **stomata**; water is absorbed by roots and carried to leaves.",
            "Food is stored as **starch**, which can be tested with iodine solution (blue-black)."
          ]
        },
        {
          heading: "Other Modes of Nutrition in Plants",
          points: [
            "**Parasites** take food from a living host without giving anything back. **Cuscuta** (amarbel) is a parasitic plant.",
            "**Insectivorous** plants, such as the pitcher plant, trap and digest insects to get nitrogen.",
            "**Saprotrophs** feed on dead and decaying matter; fungi such as moulds and mushrooms are examples.",
            "**Symbiosis** is a partnership in which both partners benefit. Lichens are an alga and a fungus living together; **Rhizobium** bacteria live in roots of pulse plants and fix nitrogen."
          ]
        },
        {
          heading: "Replenishing Nutrients in the Soil",
          points: [
            "Soil loses nutrients as crops use them. Farmers add **manure** and **fertilisers** to restore them.",
            "Rhizobium bacteria in the root nodules of **pulses** add nitrogen to soil, so crop rotation with pulses helps."
          ]
        }
      ],
      formulas: [
        "Photosynthesis: carbon dioxide + water → (sunlight, chlorophyll) → carbohydrate + oxygen",
        "Cuscuta – parasite; pitcher plant – insectivorous; mushroom – saprotroph",
        "Lichen = alga + fungus (symbiosis)"
      ],
      terms: [
        { term: "Autotroph", meaning: "An organism that **makes its own food**, like green plants." },
        { term: "Chlorophyll", meaning: "The **green pigment** in leaves that traps sunlight." },
        { term: "Stomata", meaning: "Tiny **pores** on leaves for gas exchange." },
        { term: "Parasite", meaning: "An organism that **feeds on a living host** and harms it." },
        { term: "Saprotroph", meaning: "An organism that feeds on **dead and decaying** matter." },
        { term: "Symbiosis", meaning: "A relationship in which **two organisms live together** and benefit each other." }
      ],
      qa: [
        { q: "Why do plants need sunlight for photosynthesis?", a: "Chlorophyll uses the **energy of sunlight** to combine carbon dioxide and water into food." },
        { q: "How do insectivorous plants get nitrogen?", a: "They live in nitrogen-poor soil, so they **trap and digest insects**, as the pitcher plant does." }
      ],
      quiz: [
        { q: "Which gas is released during photosynthesis?", options: ["Carbon dioxide", "Nitrogen", "Oxygen", "Hydrogen"], answer: 2, explain: "Oxygen is a product of photosynthesis." },
        { q: "Cuscuta is an example of a:", options: ["Saprotroph", "Parasite", "Insectivorous plant", "Autotroph"], answer: 1, explain: "Cuscuta draws food from the host plant." },
        { q: "The tiny pores on leaves are called:", options: ["Stomata", "Veins", "Roots hairs", "Nodules"], answer: 0, explain: "Gases enter and leave through **stomata**." },
        { q: "Lichens show which relationship?", options: ["Parasitism", "Saprotrophy", "Symbiosis", "Predation"], answer: 2, explain: "An alga and a fungus live together to the benefit of both." },
        { q: "Starch is detected by:", options: ["Limewater", "Iodine solution", "Litmus paper", "Copper sulphate only"], answer: 1, explain: "Iodine turns starch blue-black." },
        { q: "Which bacteria fix nitrogen in the roots of pulse plants?", options: ["Rhizobium", "Cuscuta", "Yeast", "Amoeba"], answer: 0, explain: "**Rhizobium** lives in root nodules and converts nitrogen to usable forms." }
      ]
    },

    // ------------------------------------------------------------------
    {
      id: "nutrition-in-animals",
      title: "Nutrition in Animals",
      section: "Biology",
      summary: "Animals take in complex food and break it down into simple substances their cells can use. This chapter follows food through the human digestive system and compares digestion in grass-eaters and Amoeba.",
      notes: [
        {
          heading: "Steps of Nutrition",
          points: [
            "Animal nutrition has five steps: **ingestion** (taking in food), **digestion** (breaking it down), **absorption** (entering the blood), **assimilation** (using it in the body) and **egestion** (removing undigested waste).",
            "Digestion is helped by **enzymes** in digestive juices."
          ]
        },
        {
          heading: "Human Digestive System",
          points: [
            "The path is: **mouth → food pipe (oesophagus) → stomach → small intestine → large intestine → anus**.",
            "In the mouth, **saliva** turns starch into sugar. In the **stomach**, hydrochloric acid and digestive juices act on proteins.",
            "In the **small intestine**, bile from the **liver**, juice from the **pancreas** and intestinal juice complete digestion. The small intestine is about 7.5 m long.",
            "The inner wall of the small intestine has **villi** that absorb digested food into blood.",
            "The **large intestine** absorbs water and the rest is passed out through the anus."
          ]
        },
        {
          heading: "Grass-eaters and Amoeba",
          points: [
            "**Ruminants** like cows swallow grass quickly, store it in the rumen and later bring it back as **cud** to chew again. Their caecum helps digest **cellulose**.",
            "**Amoeba** is a single-celled organism that surrounds food with **pseudopodia**, forming a **food vacuole** in which food is digested."
          ]
        }
      ],
      formulas: [
        "Steps: ingestion → digestion → absorption → assimilation → egestion",
        "Food path: mouth → oesophagus → stomach → small intestine → large intestine → anus",
        "Villi – absorption of digested food"
      ],
      terms: [
        { term: "Digestion", meaning: "Breaking down of **complex food** into simple substances." },
        { term: "Villi", meaning: "Finger-like projections in the small intestine that **absorb food**." },
        { term: "Bile", meaning: "A juice from the **liver** that helps digest fats." },
        { term: "Cud", meaning: "Partly digested food that ruminants **bring back to chew**." },
        { term: "Pseudopodia", meaning: "**False feet** of Amoeba used to catch food." },
        { term: "Assimilation", meaning: "Use of absorbed food by the body for **energy, growth and repair**." }
      ],
      qa: [
        { q: "What is the role of the small intestine in digestion?", a: "Digestion of food is **completed** here and **villi absorb** the digested food into the blood." },
        { q: "How does Amoeba take in food?", a: "It extends **pseudopodia** around the food particle, forming a **food vacuole** where the food is digested." }
      ],
      quiz: [
        { q: "Where does digestion of starch begin?", options: ["Stomach", "Mouth", "Small intestine", "Large intestine"], answer: 1, explain: "Saliva in the **mouth** begins to change starch into sugar." },
        { q: "Which organ produces bile?", options: ["Pancreas", "Stomach", "Liver", "Gall bladder only"], answer: 2, explain: "The **liver** makes bile; the gall bladder stores it." },
        { q: "Most absorption of digested food takes place in the:", options: ["Mouth", "Stomach", "Large intestine", "Small intestine"], answer: 3, explain: "Villi of the small intestine absorb food." },
        { q: "Cud is chewed again by:", options: ["Cow", "Dog", "Human", "Amoeba"], answer: 0, explain: "Ruminants like cows chew cud." },
        { q: "The large intestine mainly absorbs:", options: ["Proteins", "Water", "Fats", "Vitamins only"], answer: 1, explain: "Water is absorbed in the large intestine before waste leaves the body." }
      ]
    },

    // ------------------------------------------------------------------
    {
      id: "heat",
      title: "Heat",
      section: "Physics",
      summary: "Temperature tells how hot or cold an object is, and heat flows from hotter to colder objects. This chapter covers thermometers and the three modes of heat transfer: conduction, convection and radiation.",
      notes: [
        {
          heading: "Temperature and Thermometers",
          points: [
            "**Temperature** measures how hot or cold something is, in degrees Celsius (°C).",
            "A **clinical thermometer** measures body temperature and ranges from 35°C to 42°C. The normal human body temperature is **37°C**.",
            "A **laboratory thermometer** ranges from −10°C to 110°C and is used for liquids and other objects, not for the body.",
            "A clinical thermometer has a kink that stops the mercury from falling, so it must be shaken down before use. Do not use it to measure the temperature of hot water."
          ]
        },
        {
          heading: "Transfer of Heat",
          points: [
            "Heat flows from a **hotter** object to a **colder** one until their temperatures become equal.",
            "**Conduction**: heat moves through a solid from the hot end to the cold end without the material moving. Metals are good **conductors**; plastic, wood and air are poor conductors (**insulators**).",
            "**Convection**: heat is carried by the movement of a liquid or gas itself, because the hot part rises and the cold part sinks.",
            "**Radiation**: heat travels without a material medium, as sunlight reaches the Earth."
          ]
        },
        {
          heading: "Everyday Effects",
          points: [
            "Handles of cooking utensils are made of plastic or wood as they are poor conductors.",
            "**Sea breeze** blows in the day from sea to land; **land breeze** blows at night from land to sea.",
            "**Dark** coloured clothes absorb more heat and are worn in winter; **light** coloured clothes reflect more heat and are worn in summer.",
            "**Woollen** clothes trap air, a poor conductor, and keep us warm."
          ]
        }
      ],
      formulas: [
        "Normal body temperature = 37°C",
        "Clinical thermometer range: 35°C to 42°C; laboratory thermometer: −10°C to 110°C",
        "Modes of heat transfer: conduction, convection, radiation"
      ],
      terms: [
        { term: "Temperature", meaning: "A measure of **how hot or cold** an object is." },
        { term: "Conduction", meaning: "Transfer of heat through a **solid** without movement of the material." },
        { term: "Convection", meaning: "Transfer of heat by the **movement of fluid** (liquid or gas)." },
        { term: "Radiation", meaning: "Transfer of heat **without needing a medium**." },
        { term: "Insulator", meaning: "A material that is a **poor conductor of heat**." }
      ],
      qa: [
        { q: "Why do we wear light-coloured clothes in summer?", a: "Light colours **reflect** most of the heat from the Sun, so we feel cooler." },
        { q: "What is the difference between conduction and convection?", a: "In conduction heat passes through a **solid** without the particles moving along; in convection **moving fluid** carries the heat." }
      ],
      quiz: [
        { q: "The normal temperature of the human body is:", options: ["35°C", "42°C", "37°C", "98°C"], answer: 2, explain: "Normal body temperature is 37°C (about 98.6°F)." },
        { q: "Which of these is a good conductor of heat?", options: ["Wood", "Iron", "Plastic", "Air"], answer: 1, explain: "Metals such as iron conduct heat well." },
        { q: "Heat from the Sun reaches the Earth by:", options: ["Conduction", "Convection", "Radiation", "Evaporation"], answer: 2, explain: "Space has no medium, so heat travels by **radiation**." },
        { q: "Why are woollen clothes warm?", options: ["They produce heat", "They trap air", "They are dark", "They conduct heat well"], answer: 1, explain: "Trapped air is a poor conductor, so body heat is not lost." },
        { q: "A sea breeze blows:", options: ["At night from land to sea", "In the day from land to sea", "In the day from sea to land", "Only in winter"], answer: 2, explain: "Land warms faster during the day, so cooler air moves from the sea to the land." }
      ]
    },

    // ------------------------------------------------------------------
    {
      id: "acids-bases-and-salts",
      title: "Acids, Bases and Salts",
      section: "Chemistry",
      summary: "Substances can be grouped as acids, bases or neutral, which indicators help us tell apart. This chapter explains common acids and bases, how they react together in neutralisation to form salts, and where this is used in daily life.",
      notes: [
        {
          heading: "Acids and Bases",
          points: [
            "**Acids** taste sour and turn blue litmus red. Examples: lemon (citric acid), vinegar (acetic acid), curd (lactic acid), tamarind and unripe mango.",
            "**Bases** taste bitter, feel soapy and turn red litmus blue. Examples: soap, baking soda, lime water and many cleaning solutions.",
            "Common laboratory acids: **hydrochloric**, **sulphuric** and **nitric** acids. Common bases: **sodium hydroxide**, **calcium hydroxide** and **ammonium hydroxide**.",
            "Never taste or touch unknown chemicals."
          ]
        },
        {
          heading: "Indicators",
          points: [
            "An **indicator** changes colour in an acid or a base. Litmus (from lichens), turmeric and china rose petals are natural indicators.",
            "Blue litmus turns **red** in acid; red litmus turns **blue** in base. Neutral substances do not change either.",
            "Turmeric turns **red** in a base (such as soap) and stays yellow in acid. China rose turns magenta in acid and green in base."
          ]
        },
        {
          heading: "Neutralisation and Salts",
          points: [
            "When an acid and a base react, they cancel each other's effect; this is **neutralisation**. It produces a **salt** and water.",
            "Examples: acid + base → salt + water, such as hydrochloric acid + sodium hydroxide → sodium chloride + water.",
            "Neutralisation is used in daily life: **antacids** (milk of magnesia) treat acidity, **calamine** (zinc carbonate) soothes ant stings that contain formic acid, and **lime** treats acidic soil.",
            "Factory waste that is acidic is neutralised with basic substances before being released."
          ]
        }
      ],
      formulas: [
        "Acid + Base → Salt + Water",
        "Blue litmus → red in acid; red litmus → blue in base",
        "Acid in ant sting: formic acid; in vinegar: acetic acid; in lemon: citric acid"
      ],
      terms: [
        { term: "Indicator", meaning: "A substance that **changes colour** in acid or base." },
        { term: "Neutralisation", meaning: "Reaction between an **acid and a base** giving salt and water." },
        { term: "Salt", meaning: "A substance formed when an **acid reacts with a base**." },
        { term: "Antacid", meaning: "A **base** taken to reduce acidity in the stomach." },
        { term: "Neutral substance", meaning: "A substance that is **neither acidic nor basic**." }
      ],
      qa: [
        { q: "What happens when an acid is mixed with a base?", a: "They **neutralise** each other and form a **salt and water**." },
        { q: "Why is calamine solution applied on an ant sting?", a: "The sting contains **formic acid**; calamine contains zinc carbonate, a **base** that neutralises it." }
      ],
      quiz: [
        { q: "Which of these is an acid?", options: ["Soap", "Lemon juice", "Baking soda", "Lime water"], answer: 1, explain: "Lemon juice contains citric acid." },
        { q: "Red litmus paper turns blue in:", options: ["A base", "An acid", "Vinegar", "Lemon juice"], answer: 0, explain: "Bases turn red litmus blue." },
        { q: "Neutralisation gives:", options: ["Acid and base", "Salt and water", "Only gas", "Only a salt"], answer: 1, explain: "The products are a salt and water." },
        { q: "Turmeric turns red in the presence of:", options: ["Vinegar", "Curd", "Soap solution", "Lemon"], answer: 2, explain: "Turmeric turns red with bases like soap." },
        { q: "An antacid is used to treat:", options: ["Acidity in the stomach", "Ant stings", "Dry soil", "Cuts"], answer: 0, explain: "Antacids contain bases that neutralise stomach acid." },
        { q: "The acid present in curd is:", options: ["Citric acid", "Acetic acid", "Lactic acid", "Formic acid"], answer: 2, explain: "Curd contains lactic acid." }
      ]
    },

    // ------------------------------------------------------------------
    {
      id: "physical-and-chemical-changes",
      title: "Physical and Chemical Changes",
      section: "Chemistry",
      summary: "Changes around us are either physical or chemical. This chapter explains how to tell them apart, then studies rusting, how it can be prevented, and crystallisation.",
      notes: [
        {
          heading: "Physical Changes",
          points: [
            "In a **physical change**, shape, size, state or colour may change, but **no new substance** forms.",
            "Examples: melting of ice, breaking a glass, cutting paper, dissolving sugar and boiling water.",
            "Physical changes can often be **reversed**."
          ]
        },
        {
          heading: "Chemical Changes",
          points: [
            "In a **chemical change** one or more **new substances** with different properties are formed.",
            "Examples: burning of paper, **rusting** of iron, souring of milk, cooking food and **burning magnesium ribbon**, which forms a white powder magnesium oxide.",
            "Vinegar + baking soda gives **carbon dioxide**, which turns lime water milky.",
            "A chemical change may give heat, light, sound, a gas, a colour change or a smell. It is generally not easily reversed."
          ]
        },
        {
          heading: "Rusting and its Prevention",
          points: [
            "Iron objects left in damp air get covered with a reddish-brown coating of **rust**. Rusting needs both **oxygen (air)** and **water (moisture)**.",
            "Rusting can be prevented by painting, greasing, or coating with a layer of zinc (**galvanisation**).",
            "**Stainless steel** is iron mixed with carbon and metals like chromium, nickel and manganese, and does not rust."
          ]
        },
        {
          heading: "Crystallisation",
          points: [
            "**Crystallisation** is the process of obtaining pure, regularly shaped solid crystals from a solution.",
            "Salt from sea water is obtained by evaporation, but its crystals are not as pure as those obtained by crystallisation from a saturated solution.",
            "Copper sulphate crystals can be grown by cooling a hot saturated solution."
          ]
        }
      ],
      formulas: [
        "Rusting: iron + oxygen + water → rust (iron oxide)",
        "Magnesium + oxygen → magnesium oxide",
        "Vinegar + baking soda → carbon dioxide (turns lime water milky)"
      ],
      terms: [
        { term: "Physical change", meaning: "A change in which **no new substance** is formed." },
        { term: "Chemical change", meaning: "A change in which **new substances** are formed." },
        { term: "Rusting", meaning: "Slow formation of **reddish-brown iron oxide** on iron in damp air." },
        { term: "Galvanisation", meaning: "**Coating iron with zinc** to prevent rusting." },
        { term: "Crystallisation", meaning: "Formation of **crystals** from a solution." }
      ],
      qa: [
        { q: "What two things are needed for iron to rust?", a: "**Oxygen** and **water** (moisture) must both be present." },
        { q: "Is burning of a candle a physical or chemical change?", a: "Both occur. **Melting** of wax is physical, but **burning** of wax is a chemical change since new substances form." }
      ],
      quiz: [
        { q: "Which of these is a chemical change?", options: ["Melting of ice", "Rusting of iron", "Dissolving sugar", "Tearing paper"], answer: 1, explain: "Rust is a new substance." },
        { q: "Galvanisation coats iron with:", options: ["Copper", "Tin", "Zinc", "Aluminium"], answer: 2, explain: "A zinc layer prevents rusting." },
        { q: "Which gas turns lime water milky?", options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"], answer: 1, explain: "Carbon dioxide forms calcium carbonate with lime water." },
        { q: "Burning magnesium ribbon produces:", options: ["A black powder", "A white powder", "A red liquid", "No new substance"], answer: 1, explain: "It forms white magnesium oxide." },
        { q: "Stainless steel does not rust because it is:", options: ["Painted", "A mixture with chromium and nickel", "Pure iron", "Covered with grease"], answer: 1, explain: "Stainless steel is iron alloyed with other metals that resist rusting." }
      ]
    },

    // ------------------------------------------------------------------
    {
      id: "respiration-in-organisms",
      title: "Respiration in Organisms",
      section: "Biology",
      summary: "Respiration releases energy from food in every living cell. This chapter distinguishes aerobic and anaerobic respiration, describes breathing in humans and compares respiration in other animals and plants.",
      notes: [
        {
          heading: "Why We Respire",
          points: [
            "Cells break down food, mainly **glucose**, to release energy. This is **cellular respiration**.",
            "**Aerobic respiration** uses oxygen: glucose + oxygen → carbon dioxide + water + energy.",
            "**Anaerobic respiration** takes place without oxygen. **Yeast** gives alcohol and carbon dioxide; muscle cells, when oxygen is short, form **lactic acid**, which can cause cramps."
          ]
        },
        {
          heading: "Breathing in Humans",
          points: [
            "**Breathing** is taking in oxygen-rich air (**inhalation**) and giving out carbon dioxide-rich air (**exhalation**).",
            "During inhalation, the **ribs move up and outward** and the **diaphragm moves down**, so the chest expands. During exhalation, the ribs move down and the diaphragm moves up.",
            "Air enters through the nostrils, passes to the windpipe and lungs. At rest, a person breathes about **15–18 times a minute**.",
            "Exhaled air contains more carbon dioxide and less oxygen than inhaled air."
          ]
        },
        {
          heading: "Respiration in Other Organisms",
          points: [
            "**Cockroach**: air enters through small openings called **spiracles** into air tubes (**tracheae**).",
            "**Earthworm** breathes through its moist **skin**; **fish** use **gills**.",
            "**Plants**: roots take in air from spaces in the soil; leaves have **stomata**; stems have tiny pores."
          ]
        }
      ],
      formulas: [
        "Aerobic: glucose + oxygen → carbon dioxide + water + energy",
        "Yeast (anaerobic): glucose → alcohol + carbon dioxide + energy",
        "Resting breathing rate ≈ 15–18 per minute"
      ],
      terms: [
        { term: "Respiration", meaning: "Release of **energy from food** in cells." },
        { term: "Anaerobic respiration", meaning: "Respiration **without oxygen**." },
        { term: "Diaphragm", meaning: "A **muscular sheet** below the lungs that helps in breathing." },
        { term: "Spiracles", meaning: "Tiny **openings** in an insect's body for air." },
        { term: "Stomata", meaning: "Small pores in leaves for **gas exchange**." }
      ],
      qa: [
        { q: "Why do athletes breathe heavily after a race?", a: "Their muscles need extra **oxygen** and the body must remove extra carbon dioxide, so breathing speeds up." },
        { q: "What causes muscle cramps after heavy exercise?", a: "When oxygen is short, muscle cells respire anaerobically and produce **lactic acid**." }
      ],
      quiz: [
        { q: "During inhalation the diaphragm:", options: ["Moves up", "Moves down", "Stays still", "Breaks"], answer: 1, explain: "The diaphragm moves down and the chest expands." },
        { q: "A cockroach breathes through:", options: ["Gills", "Skin", "Spiracles and tracheae", "Lungs"], answer: 2, explain: "Air enters through spiracles into tracheae." },
        { q: "Yeast respires without oxygen and produces:", options: ["Lactic acid", "Alcohol", "Starch", "Oxygen"], answer: 1, explain: "Yeast fermentation gives alcohol and carbon dioxide." },
        { q: "Fish breathe using their:", options: ["Gills", "Lungs", "Skin only", "Spiracles"], answer: 0, explain: "Gills take oxygen dissolved in water." },
        { q: "Which product is formed in aerobic respiration?", options: ["Alcohol", "Lactic acid", "Carbon dioxide", "Starch"], answer: 2, explain: "Glucose and oxygen give carbon dioxide, water and energy." }
      ]
    },

    // ------------------------------------------------------------------
    {
      id: "transportation-in-animals-and-plants",
      title: "Transportation in Animals and Plants",
      section: "Biology",
      summary: "Materials such as food, oxygen and waste must be moved around the body. This chapter covers blood, blood vessels and the heart, excretion in humans, and transport of water and food in plants.",
      notes: [
        {
          heading: "Blood and Blood Vessels",
          points: [
            "**Blood** is a fluid made of **plasma** and cells: **red blood cells (RBC)** with haemoglobin that carries oxygen, **white blood cells (WBC)** that fight germs, and **platelets** that help clotting.",
            "**Arteries** carry blood away from the heart; **veins** bring blood back to the heart; **capillaries** are thin vessels where exchange happens.",
            "The **pulse** is the rhythmic beat of arteries, equal to the heartbeat, about 72 times a minute at rest."
          ]
        },
        {
          heading: "The Heart and Excretion",
          points: [
            "The **heart** is a muscular pump with four chambers: two upper **atria** and two lower **ventricles**.",
            "**Excretion** is the removal of wastes. The **kidneys** filter blood and form **urine**, which passes through the ureters to the bladder.",
            "Waste is also lost as sweat through the skin.",
            "Kidney failure can be treated by **dialysis** or kidney transplant."
          ]
        },
        {
          heading: "Transport in Plants",
          points: [
            "Roots take in water and minerals through **root hairs**.",
            "**Xylem** vessels carry water and minerals from roots to leaves; **phloem** carries food from leaves to other parts.",
            "**Transpiration**, the loss of water vapour from leaves, pulls water upward through the plant and helps cool it."
          ]
        }
      ],
      formulas: [
        "Arteries – away from heart; veins – towards heart",
        "Xylem – water; phloem – food",
        "Heart has 4 chambers: 2 atria, 2 ventricles"
      ],
      terms: [
        { term: "Haemoglobin", meaning: "The red pigment in RBC that **carries oxygen**." },
        { term: "Artery", meaning: "A vessel that carries blood **away from the heart**." },
        { term: "Excretion", meaning: "**Removal of waste** from the body." },
        { term: "Xylem", meaning: "Tissue that carries **water and minerals** in plants." },
        { term: "Phloem", meaning: "Tissue that carries **prepared food** in plants." },
        { term: "Dialysis", meaning: "A method of **cleaning blood** artificially when kidneys fail." }
      ],
      qa: [
        { q: "What is the function of red blood cells?", a: "They contain **haemoglobin** and carry **oxygen** to all parts of the body." },
        { q: "How does water move up to the leaves of a tree?", a: "It is absorbed by roots and moves up through **xylem**, pulled by **transpiration** from the leaves." }
      ],
      quiz: [
        { q: "Which blood cells fight germs?", options: ["RBC", "Platelets", "WBC", "Plasma"], answer: 2, explain: "White blood cells protect the body from infection." },
        { q: "Blood is carried back to the heart by:", options: ["Arteries", "Veins", "Xylem", "Nephrons only"], answer: 1, explain: "Veins return blood to the heart." },
        { q: "Which organ filters blood to make urine?", options: ["Liver", "Heart", "Lungs", "Kidney"], answer: 3, explain: "Kidneys remove wastes and make urine." },
        { q: "In plants, food is carried by:", options: ["Xylem", "Phloem", "Root hairs", "Stomata"], answer: 1, explain: "Phloem transports food." },
        { q: "How many chambers does the human heart have?", options: ["Two", "Three", "Four", "Five"], answer: 2, explain: "Two atria and two ventricles." }
      ]
    },

    // ------------------------------------------------------------------
    {
      id: "reproduction-in-plants",
      title: "Reproduction in Plants",
      section: "Biology",
      summary: "Plants produce new plants by asexual or sexual reproduction. This chapter covers vegetative propagation, budding, fragmentation and spores, then sexual reproduction through flowers, pollination, fertilisation, fruit and seed dispersal.",
      notes: [
        {
          heading: "Asexual Reproduction",
          points: [
            "In **asexual reproduction** new plants arise from one parent without seeds or fusion of gametes.",
            "**Vegetative propagation** uses parts of the plant such as the root (sweet potato, dahlia), stem (potato, rose cutting) or leaf (Bryophyllum).",
            "**Budding** (yeast), **fragmentation** (algae) and **spore formation** (fungi, mosses, ferns) are other methods.",
            "Plants produced asexually are identical to the parent."
          ]
        },
        {
          heading: "Sexual Reproduction",
          points: [
            "Flowers are the reproductive parts. The **stamen** is male and the **pistil** is female.",
            "**Pollination** is the transfer of pollen from anther to stigma, by wind, water, insects or animals. It can be **self-pollination** or **cross-pollination**.",
            "**Fertilisation**: the male gamete in pollen joins the female gamete in the ovule to form a **zygote**.",
            "The ovule becomes the **seed** and the ovary becomes the **fruit**."
          ]
        },
        {
          heading: "Seed Dispersal",
          points: [
            "Seeds are scattered so that plants do not crowd and get more space and light.",
            "Dispersal can be by **wind** (maple, dandelion), **water** (coconut), **animals** (xanthium, burdock with hooks) and **explosion** (castor, pea pods).",
            "Light, winged or hairy seeds travel by air; fleshy fruits are eaten by animals and the seeds are passed in droppings."
          ]
        }
      ],
      formulas: [
        "Stamen: anther + filament; Pistil: stigma + style + ovary",
        "After fertilisation: ovule → seed; ovary → fruit",
        "Pollination → fertilisation → seed and fruit"
      ],
      terms: [
        { term: "Vegetative propagation", meaning: "Growing new plants from a **vegetative part** of the parent." },
        { term: "Pollination", meaning: "Transfer of **pollen** from anther to stigma." },
        { term: "Fertilisation", meaning: "Fusion of **male and female gametes**." },
        { term: "Zygote", meaning: "The cell formed by **fertilisation**, which grows into an embryo." },
        { term: "Budding", meaning: "A new individual grows as a **bud** on the parent, as in yeast." },
        { term: "Spore", meaning: "A tiny reproductive unit of fungi and ferns, **protected by a coat**." }
      ],
      qa: [
        { q: "Why is seed dispersal necessary?", a: "To avoid **overcrowding**, to reduce competition for light, water and minerals and to help plants **spread to new places**." },
        { q: "What is the difference between pollination and fertilisation?", a: "Pollination is the **transfer of pollen** to the stigma, while fertilisation is the **fusion of male and female gametes**." }
      ],
      quiz: [
        { q: "Bryophyllum reproduces by its:", options: ["Roots", "Leaves", "Seeds", "Spores"], answer: 1, explain: "New plants arise from buds on its leaf margins." },
        { q: "After fertilisation the ovary becomes the:", options: ["Seed", "Flower", "Fruit", "Pollen"], answer: 2, explain: "Ovary develops into the fruit." },
        { q: "Yeast reproduces mainly by:", options: ["Budding", "Fragmentation", "Seeds", "Cutting"], answer: 0, explain: "Yeast cells form buds." },
        { q: "Seeds of xanthium spread with the help of:", options: ["Wind", "Water", "Explosion", "Animals"], answer: 3, explain: "Its spiny fruits cling to animals." },
        { q: "Transfer of pollen from anther to stigma is:", options: ["Fertilisation", "Pollination", "Germination", "Dispersal"], answer: 1, explain: "This is pollination." }
      ]
    },

    // ------------------------------------------------------------------
    {
      id: "motion-and-time",
      title: "Motion and Time",
      section: "Physics",
      summary: "Objects move at different speeds. This chapter defines speed, describes uniform and non-uniform motion, shows how time is measured with a pendulum and introduces distance-time graphs.",
      notes: [
        {
          heading: "Speed",
          points: [
            "**Speed** is the distance travelled in unit time: **speed = distance ÷ time**.",
            "The common units are **metre per second (m/s)** and **kilometre per hour (km/h)**.",
            "Speed is measured with a **speedometer** and distance with an **odometer** in vehicles.",
            "An object is **slow** or **fast** by comparing speeds."
          ]
        },
        {
          heading: "Uniform and Non-uniform Motion",
          points: [
            "In **uniform motion** an object covers **equal distances in equal intervals** of time, so speed is constant.",
            "In **non-uniform motion** the distances covered in equal intervals differ, so speed changes.",
            "Most real journeys are non-uniform; for them we often use the **average speed** = total distance ÷ total time."
          ]
        },
        {
          heading: "Measuring Time and Graphs",
          points: [
            "Time can be measured with a clock, watch, sundial or **simple pendulum**.",
            "One **oscillation** is the movement of a pendulum from one extreme to the other and back. The time for one oscillation is its **time period**.",
            "The time period of a simple pendulum depends on its length, not on the mass of the bob.",
            "A **distance–time graph** has time on the x-axis and distance on the y-axis. A straight sloping line shows uniform speed."
          ]
        }
      ],
      formulas: [
        "Speed = Distance ÷ Time",
        "Distance = Speed × Time; Time = Distance ÷ Speed",
        "1 km/h = 5/18 m/s"
      ],
      examples: [
        {
          q: "A car covers 150 km in 3 hours. Find its speed.",
          steps: ["Speed = distance ÷ time", "Speed = 150 km ÷ 3 h"],
          answer: "Speed = 50 km/h"
        }
      ],
      terms: [
        { term: "Speed", meaning: "**Distance travelled per unit time**." },
        { term: "Uniform motion", meaning: "Motion with **constant speed**." },
        { term: "Time period", meaning: "Time taken for **one oscillation** of a pendulum." },
        { term: "Odometer", meaning: "An instrument that shows **distance** covered by a vehicle." },
        { term: "Speedometer", meaning: "An instrument that shows the **speed** of a vehicle." }
      ],
      qa: [
        { q: "How can you find the speed of a cyclist who covers 36 km in 2 hours?", a: "Speed = distance ÷ time = 36 ÷ 2 = **18 km/h**." },
        { q: "What does a straight line on a distance–time graph show?", a: "The object moves with **uniform speed**." }
      ],
      quiz: [
        { q: "The SI unit of speed is:", options: ["km/h", "m/s", "m", "s"], answer: 1, explain: "Distance in metres divided by time in seconds gives m/s." },
        { q: "A bus travels 60 km in 2 hours. Its speed is:", options: ["120 km/h", "30 km/h", "62 km/h", "58 km/h"], answer: 1, explain: "60 ÷ 2 = 30 km/h." },
        { q: "Equal distances in equal time intervals mean:", options: ["Non-uniform motion", "Uniform motion", "Rest", "Zero speed"], answer: 1, explain: "This is uniform motion." },
        { q: "The time period of a simple pendulum depends on its:", options: ["Length", "Mass of bob", "Colour", "Material of bob"], answer: 0, explain: "A longer pendulum has a longer time period." },
        { q: "An odometer shows:", options: ["Speed", "Time", "Distance travelled", "Acceleration"], answer: 2, explain: "It records the distance." }
      ]
    },

    // ------------------------------------------------------------------
    {
      id: "electric-current-and-its-effects",
      title: "Electric Current and its Effects",
      section: "Physics",
      summary: "Electric current has heating and magnetic effects. This chapter introduces circuit symbols, the heating effect used in fuses, heaters and bulbs, and the magnetic effect used in electromagnets and electric bells.",
      notes: [
        {
          heading: "Circuit Symbols",
          points: [
            "Circuit diagrams use symbols: a **cell**, a **battery**, a **switch** (open or closed), a **bulb** and a **wire**.",
            "A cell is drawn as a long thin line (positive) and a short thick line (negative).",
            "Using symbols makes circuits easy to draw."
          ]
        },
        {
          heading: "Heating Effect of Current",
          points: [
            "When current flows through a wire, the wire gets hot. Wires of **nichrome** are used in heaters and irons because they get very hot.",
            "A bulb glows as its **filament** gets hot.",
            "A **fuse** is a thin wire of low melting point that melts when too much current flows, breaking the circuit and preventing fires. **MCBs** now do this job too.",
            "Never touch bare wires; they can cause shock and fire."
          ]
        },
        {
          heading: "Magnetic Effect of Current",
          points: [
            "In 1820, **Hans Christian Oersted** found that a current-carrying wire deflects a compass needle, showing it has a magnetic effect.",
            "A coil of insulated wire around an iron piece makes an **electromagnet** when current passes; it works only while current flows.",
            "Electromagnets are used in cranes, **electric bells**, and toys.",
            "The strength of an electromagnet can be increased by increasing the number of turns or the current."
          ]
        }
      ],
      formulas: [
        "Heating effect: heaters, irons, geysers, fuses",
        "Magnetic effect: electromagnets, electric bells",
        "Oersted (1820): current deflects a compass needle"
      ],
      terms: [
        { term: "Fuse", meaning: "A safety device with a **thin low-melting wire** that melts when current is too high." },
        { term: "Electromagnet", meaning: "A magnet made by passing **current through a coil** wound on iron." },
        { term: "Nichrome", meaning: "An **alloy** used for heating elements." },
        { term: "MCB", meaning: "**Miniature circuit breaker**, a switch that trips on overload." },
        { term: "Heating effect", meaning: "Heating of a wire when **current flows** through it." }
      ],
      qa: [
        { q: "Why is a fuse used in a circuit?", a: "If the current is too high, the fuse wire **melts** and breaks the circuit, which protects appliances from damage and fire." },
        { q: "What did Oersted observe?", a: "A compass needle moved when placed near a **current-carrying wire**, showing a magnetic effect of current." }
      ],
      quiz: [
        { q: "An electromagnet is made by:", options: ["Rubbing a magnet", "Passing current through a coil wound on iron", "Heating iron", "Cooling iron"], answer: 1, explain: "Current in a coil around iron makes it magnetic." },
        { q: "Which of these works on the heating effect of current?", options: ["Electric bell", "Electric iron", "Electromagnet", "Compass"], answer: 1, explain: "The element of an iron gets hot." },
        { q: "The fuse wire has a:", options: ["High melting point", "Low melting point", "Magnetic core", "Thick coating"], answer: 1, explain: "It must melt easily when current is too high." },
        { q: "The magnetic effect of current was shown by:", options: ["Faraday", "Oersted", "Newton", "Volta"], answer: 1, explain: "Oersted noticed it in 1820." },
        { q: "A compass needle is deflected near a wire when:", options: ["No current flows", "Current flows", "Wire is cold", "Wire is broken"], answer: 1, explain: "Only a current-carrying wire shows the effect." }
      ]
    },

    // ------------------------------------------------------------------
    {
      id: "light",
      title: "Light",
      section: "Physics",
      summary: "Light travels in straight lines and bounces off surfaces. This chapter covers reflection, images in plane and spherical mirrors, lenses and the splitting of white light into colours.",
      notes: [
        {
          heading: "Reflection",
          points: [
            "Light bouncing back from a surface is **reflection**. Smooth shiny surfaces, such as mirrors, form clear images.",
            "**Laws of reflection**: the angle of incidence equals the angle of reflection, and the incident ray, reflected ray and normal lie in the same plane.",
            "A **real image** can be shown on a screen; a **virtual image** cannot."
          ]
        },
        {
          heading: "Plane Mirror",
          points: [
            "The image in a plane mirror is **virtual**, **erect**, the **same size** as the object and as far behind the mirror as the object is in front.",
            "The image is **laterally inverted**: the left of the object appears on the right. This is why AMBULANCE is written reversed.",
            "A kaleidoscope and periscope use plane mirrors."
          ]
        },
        {
          heading: "Spherical Mirrors and Lenses",
          points: [
            "A **concave mirror** curves inward and can form real or virtual images; it is used in torches, shaving mirrors and headlights.",
            "A **convex mirror** curves outward, always gives a smaller, erect, virtual image and a wide field of view; it is used as a rear-view mirror.",
            "A **convex lens** is thicker in the middle and converges light; it is used as a magnifying glass. A **concave lens** is thinner in the middle and spreads light out."
          ]
        },
        {
          heading: "Dispersion",
          points: [
            "White light splits into seven colours: **violet, indigo, blue, green, yellow, orange, red (VIBGYOR)**. This is **dispersion**.",
            "A **rainbow** is a natural spectrum formed when sunlight is dispersed by raindrops.",
            "A prism can also split white light."
          ]
        }
      ],
      formulas: [
        "Angle of incidence = Angle of reflection",
        "Plane mirror: image is virtual, erect, same size, laterally inverted, as far behind as the object is in front",
        "White light → VIBGYOR"
      ],
      terms: [
        { term: "Reflection", meaning: "**Bouncing back** of light from a surface." },
        { term: "Virtual image", meaning: "An image that **cannot be obtained on a screen**." },
        { term: "Lateral inversion", meaning: "The **left–right reversal** of an image in a plane mirror." },
        { term: "Convex lens", meaning: "A lens **thicker in the middle** that converges light." },
        { term: "Dispersion", meaning: "Splitting of white light into **seven colours**." },
        { term: "Concave mirror", meaning: "A mirror that **curves inward**." }
      ],
      qa: [
        { q: "State the laws of reflection.", a: "The **angle of incidence equals the angle of reflection**, and the incident ray, reflected ray and normal are in the **same plane**." },
        { q: "Why is a convex mirror used as a rear-view mirror?", a: "It gives an **erect** image and a **wide view** of the traffic behind." }
      ],
      quiz: [
        { q: "The image in a plane mirror is:", options: ["Real and inverted", "Virtual and erect", "Real and erect", "Magnified"], answer: 1, explain: "It is virtual, erect and the same size." },
        { q: "A rainbow is formed by:", options: ["Reflection only", "Dispersion", "Shadows", "Refraction by mirror"], answer: 1, explain: "Raindrops disperse sunlight into colours." },
        { q: "A magnifying glass is a:", options: ["Concave lens", "Convex mirror", "Convex lens", "Plane mirror"], answer: 2, explain: "A convex lens magnifies." },
        { q: "The angle of incidence is 30°. The angle of reflection is:", options: ["60°", "30°", "15°", "90°"], answer: 1, explain: "Both are equal." },
        { q: "Rear-view mirrors in vehicles are:", options: ["Plane", "Concave", "Convex", "Cylindrical"], answer: 2, explain: "Convex mirrors give a wide view." },
        { q: "Which colour is at the top of a rainbow?", options: ["Violet", "Red", "Green", "Blue"], answer: 1, explain: "Red is the outer, upper edge of the primary rainbow." }
      ]
    }
  ]
});
