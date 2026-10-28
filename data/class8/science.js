// Class 8 Science: current NCERT textbook "Curiosity".
// Format: see CONTENT_GUIDE.md
StudyData.add(8, "science", {
  // What this content follows. match: "textbook" | "older-book" | "topic". Set reviewed to a date once a teacher has checked it.
  syllabus: {board: "CBSE", match: "textbook", books: ["Curiosity"], reviewed: false},
  chapters: [
    // ───────────────────────────── 1 ─────────────────────────────
    {
      id: "investigative-world-of-science",
      title: "Exploring the Investigative World of Science",
      section: "Doing science",
      summary: "Science grows through questions, careful observation and experiments. This chapter looks at how scientists investigate, plan fair tests, record data, and why evidence matters more than opinion.",
      notes: [
        {
          heading: "How scientists investigate",
          points: [
            "Investigation begins with **observation** and a **question**, such as why one object floats and another sinks.",
            "A **hypothesis** is a testable explanation. It is tested by an experiment, and it may be supported or rejected by the results.",
            "Steps: observe → question → hypothesis → experiment → record data → analyse → conclusion.",
            "Scientists share their findings so that others can repeat the work and check it."
          ]
        },
        {
          heading: "Fair tests and variables",
          points: [
            "In a **fair test** only one factor, the **variable** you change, is altered. All other factors are kept the same.",
            "The factor you change is the **independent variable**. The factor you measure is the **dependent variable**.",
            "A **control** (a set-up where the variable is not changed) gives a fair comparison.",
            "Repeating a measurement several times and taking the **average** reduces the effect of chance errors."
          ]
        },
        {
          heading: "Recording and analysing data",
          points: [
            "Results are noted in **tables** and shown as **graphs** or charts, which make patterns easier to see.",
            "Use the right instrument and unit, and record readings honestly, even if they differ from what you expected.",
            "A conclusion must follow from the evidence collected, not from what we wish to be true."
          ]
        },
        {
          heading: "Scientific attitude and safety",
          points: [
            "A scientific attitude means curiosity, honesty, patience and openness to change ideas when evidence changes.",
            "Be careful with fire, glass, chemicals and electricity during experiments, and follow your teacher's instructions.",
            "Science and technology improve each other: new instruments reveal new facts, and new facts lead to new technology."
          ]
        }
      ],
      formulas: [
        "Steps of investigation: observe → question → hypothesis → experiment → data → conclusion",
        "Fair test: change **one** variable, keep all others the same",
        "Average = sum of readings ÷ number of readings"
      ],
      terms: [
        { term: "Hypothesis", meaning: "A testable explanation or prediction that is checked by experiment." },
        { term: "Variable", meaning: "A factor that can change in an experiment." },
        { term: "Fair test", meaning: "An experiment in which only one variable is changed and the rest are kept constant." },
        { term: "Control", meaning: "A set-up without the change, used for comparison." },
        { term: "Evidence", meaning: "Observations and measurements used to support or reject an idea." }
      ],
      examples: [
        {
          q: "A student times a toy car on a ramp three times: 4.2 s, 4.0 s and 4.1 s. What value should she report?",
          steps: ["Add the readings: 4.2 + 4.0 + 4.1 = 12.3 s", "Divide by the number of readings: 12.3 ÷ 3 = 4.1 s"],
          answer: "Average time = 4.1 s"
        }
      ],
      qa: [
        { q: "Why must only one variable be changed in an experiment?", a: "If several things change together, we cannot tell which one caused the result. Changing one variable and keeping the rest constant makes the test **fair**." },
        { q: "What should a scientist do if the results do not support the hypothesis?", a: "Accept the result honestly, revise or reject the hypothesis and test a new idea. Results must never be changed to match the hypothesis." }
      ],
      quiz: [
        { q: "A testable explanation that can be checked by an experiment is called a:", options: ["Conclusion", "Hypothesis", "Control", "Unit"], answer: 1, explain: "A hypothesis is a testable explanation made before the experiment; a conclusion comes after it." },
        { q: "Which is true of a fair test?", options: ["All factors are changed together", "Only one variable is changed", "No readings are taken", "The result is decided in advance"], answer: 1, explain: "Changing only one variable lets us link the result to that single cause." },
        { q: "Why do we repeat measurements and take the average?", options: ["To make the experiment longer", "To reduce the effect of chance errors", "To change the hypothesis", "To avoid writing a table"], answer: 1, explain: "Chance errors differ in each reading; averaging reduces their effect." },
        { q: "A conclusion should be based on:", options: ["Evidence collected in the experiment", "What most people believe", "What the student expected", "The most surprising reading only"], answer: 0, explain: "Scientific conclusions follow from evidence, not belief or expectation." },
        { q: "The set-up in which the variable is not changed, kept for comparison, is the:", options: ["Hypothesis", "Control", "Observation", "Graph"], answer: 1, explain: "A control shows what happens without the change." },
        { q: "Readings of 10, 12 and 14 units are taken. The average is:", options: ["10", "11", "12", "36"], answer: 2, explain: "(10 + 12 + 14) ÷ 3 = 36 ÷ 3 = 12; 36 is only the sum." }
      ]
    },
    // ───────────────────────────── 2 ─────────────────────────────
    {
      id: "invisible-living-world",
      title: "The Invisible Living World: Beyond Our Naked Eye",
      section: "Living world",
      summary: "Many living things are too small to see without a microscope. This chapter introduces the microscope, cells as the basic unit of life, unicellular and multicellular organisms, and microorganisms such as bacteria, viruses, fungi and protozoa.",
      notes: [
        {
          heading: "Seeing the very small",
          points: [
            "A **microscope** magnifies tiny objects. Robert Hooke first used the word **cell** after seeing the box-like compartments in thin slices of cork.",
            "Anton van Leeuwenhoek used simple lenses to observe tiny living organisms in water.",
            "A compound microscope uses two lenses, the **eyepiece** and the **objective**, to give a large image.",
            "Total magnification = magnification of eyepiece × magnification of objective."
          ]
        },
        {
          heading: "Cells: the basic unit of life",
          points: [
            "All living things are made of **cells**. A cell is the smallest structural and functional unit of life.",
            "Main parts: **cell membrane** (controls what enters and leaves), **cytoplasm** (jelly-like fluid) and **nucleus** (control centre).",
            "Plant cells also have a **cell wall** and large **vacuole**; green plant cells have **chloroplasts** for photosynthesis.",
            "A **unicellular** organism has one cell (Amoeba, Paramecium). A **multicellular** organism has many cells (humans, trees)."
          ]
        },
        {
          heading: "Organisation in the body",
          points: [
            "Similar cells work together as a **tissue**, tissues form an **organ**, and organs working together form an **organ system**.",
            "Cells differ in shape and size according to their job, such as long nerve cells and round red blood cells."
          ]
        },
        {
          heading: "Microorganisms",
          points: [
            "Microorganisms (microbes) include **bacteria, viruses, fungi, protozoa and some algae**.",
            "Many are useful: bacteria make curd, fungi (yeast) help in baking, and some microbes decompose waste.",
            "Some cause diseases, such as cholera (bacteria), influenza (virus) and malaria (a protozoan, spread by the Anopheles mosquito).",
            "Viruses are not cells and can multiply only inside a living host cell."
          ]
        }
      ],
      formulas: [
        "Total magnification = eyepiece magnification × objective magnification",
        "Cell → tissue → organ → organ system → organism",
        "Cell wall, large vacuole and chloroplasts are found in plant cells, not animal cells"
      ],
      terms: [
        { term: "Cell", meaning: "The smallest structural and functional unit of living things." },
        { term: "Nucleus", meaning: "The part of the cell that controls its activities." },
        { term: "Unicellular", meaning: "Made of a single cell." },
        { term: "Microorganism", meaning: "A living organism too small to be seen without a microscope." },
        { term: "Tissue", meaning: "A group of similar cells doing the same job." }
      ],
      examples: [
        {
          q: "A microscope has a 10× eyepiece and a 40× objective. Find the total magnification.",
          steps: ["Total magnification = eyepiece × objective", "= 10 × 40"],
          answer: "400×"
        }
      ],
      qa: [
        { q: "Name three differences between a plant cell and an animal cell.", a: "A plant cell has a **cell wall**, **chloroplasts** and a large central **vacuole**. An animal cell has no cell wall or chloroplasts and has only small vacuoles." },
        { q: "Why are viruses not considered cells?", a: "Viruses have no cell structure of their own and cannot carry out life processes or multiply outside a host. They reproduce only inside a living cell." }
      ],
      quiz: [
        { q: "Who first used the word 'cell' after viewing cork?", options: ["Louis Pasteur", "Robert Hooke", "Charles Darwin", "Edward Jenner"], answer: 1, explain: "Robert Hooke saw box-like compartments in cork and named them cells." },
        { q: "Which part of the cell controls what enters and leaves it?", options: ["Nucleus", "Cell wall", "Cell membrane", "Chloroplast"], answer: 2, explain: "The cell membrane is selective; the cell wall is a rigid outer layer in plants, not the controller." },
        { q: "Which of these is a unicellular organism?", options: ["Amoeba", "Earthworm", "Mango tree", "Frog"], answer: 0, explain: "Amoeba is a single cell; the others are multicellular." },
        { q: "Malaria is caused by a:", options: ["Virus", "Bacterium", "Protozoan", "Fungus"], answer: 2, explain: "The malaria parasite is a protozoan carried by Anopheles mosquitoes." },
        { q: "The correct order of organisation from smallest to largest is:", options: ["Organ, tissue, cell, system", "Tissue, cell, organ, system", "Cell, tissue, organ, organ system", "Cell, organ, tissue, organ system"], answer: 2, explain: "Cells make tissues, tissues make organs, organs make organ systems." },
        { q: "A 5× eyepiece with a 20× objective gives a magnification of:", options: ["25×", "4×", "15×", "100×"], answer: 3, explain: "Magnifications multiply: 5 × 20 = 100." }
      ]
    },
    // ───────────────────────────── 3 ─────────────────────────────
    {
      id: "health-the-ultimate-treasure",
      title: "Health: The Ultimate Treasure",
      section: "Living world",
      summary: "Health means physical, mental and social well-being. This chapter covers balanced diet, hygiene, infectious and non-infectious diseases, how diseases spread, prevention, vaccination and mental well-being.",
      notes: [
        {
          heading: "What is health?",
          points: [
            "**Health** is not just the absence of disease. It includes **physical, mental and social** well-being.",
            "A balanced diet, exercise, enough sleep, clean surroundings and good relationships all support health.",
            "A **balanced diet** has carbohydrates, proteins, fats, vitamins, minerals, fibre and water in the right amounts."
          ]
        },
        {
          heading: "Diseases and how they spread",
          points: [
            "**Infectious diseases** are caused by microorganisms and can spread from person to person. **Non-infectious diseases** (such as diabetes or most cancers) do not spread this way.",
            "Spread can be through **air** (cold, tuberculosis), **water and food** (cholera, typhoid), **vectors** such as mosquitoes (malaria, dengue) and **direct contact**.",
            "Poor sanitation, unsafe water and crowding help infections to spread."
          ]
        },
        {
          heading: "Prevention and vaccination",
          points: [
            "Prevention: wash hands, drink safe water, keep food covered, remove stagnant water where mosquitoes breed, and cover your mouth when you cough.",
            "A **vaccine** trains the body's defence system to recognise a germ without causing the full disease, giving protection against it later.",
            "Edward Jenner developed the first vaccine, against smallpox. Smallpox has been eradicated, and polio has been nearly eliminated through vaccination.",
            "Antibiotics work against bacteria, not viruses, and should be taken only when a doctor prescribes them."
          ]
        },
        {
          heading: "Mental and social well-being",
          points: [
            "Stress, worry and loneliness affect health. Talking to family, friends or a counsellor helps.",
            "Yoga, play, hobbies and adequate sleep support mental health.",
            "Avoid tobacco, alcohol and other harmful substances."
          ]
        }
      ],
      formulas: [
        "Health = physical + mental + social well-being",
        "Vector = an organism that carries a disease-causing germ (e.g. Anopheles for malaria)",
        "Vaccination gives protection **before** infection; antibiotics treat **bacterial** infections only"
      ],
      terms: [
        { term: "Balanced diet", meaning: "A diet containing all nutrients in the right amounts." },
        { term: "Infectious disease", meaning: "A disease caused by germs that can spread from one person to another." },
        { term: "Vector", meaning: "An organism, such as a mosquito, that carries a disease-causing germ to others." },
        { term: "Vaccine", meaning: "A preparation that prepares the body's defences to fight a particular disease." },
        { term: "Antibiotic", meaning: "A medicine that kills or stops the growth of bacteria." }
      ],
      qa: [
        { q: "Why are antibiotics not given for the common cold?", a: "The common cold is caused by a **virus**, and antibiotics act only on bacteria. Taking them unnecessarily can make bacteria resistant." },
        { q: "How does a vaccine protect us?", a: "It introduces a harmless form or part of a germ so the body learns to recognise it. If the real germ enters later, the defence system responds quickly." },
        { q: "Give two ways to prevent mosquito-borne diseases.", a: "Do not let water stagnate in coolers, pots or tyres, where mosquitoes breed. Use nets and repellents and wear covering clothes." }
      ],
      quiz: [
        { q: "Health means:", options: ["Absence of disease only", "Physical, mental and social well-being", "Being very strong", "Eating a lot of food"], answer: 1, explain: "Health covers body, mind and social life, not just lack of disease." },
        { q: "Which is a non-infectious disease?", options: ["Cholera", "Tuberculosis", "Diabetes", "Dengue"], answer: 2, explain: "Diabetes is not caused by a germ and does not spread from person to person." },
        { q: "Dengue is spread by:", options: ["Contaminated water", "Mosquito vector", "Direct touch", "Cough droplets"], answer: 1, explain: "Dengue virus is carried by Aedes mosquitoes." },
        { q: "Who developed the first vaccine, against smallpox?", options: ["Edward Jenner", "Alexander Fleming", "Robert Koch", "Ronald Ross"], answer: 0, explain: "Edward Jenner developed the smallpox vaccine." },
        { q: "Antibiotics are effective against:", options: ["Viruses", "Bacteria", "Allergies", "Cancer"], answer: 1, explain: "Antibiotics target bacteria; viral infections do not respond to them." },
        { q: "Which habit best prevents water-borne diseases such as typhoid?", options: ["Sleeping late", "Drinking boiled or safe water", "Eating more sugar", "Using more blankets"], answer: 1, explain: "Typhoid spreads through contaminated water and food." }
      ]
    },
    // ───────────────────────────── 4 ─────────────────────────────
    {
      id: "electricity-magnetic-and-heating-effects",
      title: "Electricity: Magnetic and Heating Effects",
      section: "Physical world",
      summary: "An electric current produces magnetic and heating effects. This chapter covers the magnetic field around a current-carrying wire, electromagnets, the electric bell, and the heating effect used in heaters, fuses and MCBs.",
      notes: [
        {
          heading: "Magnetic effect of current",
          points: [
            "Hans Christian Oersted found that a compass needle deflects near a wire carrying current. So **a current produces a magnetic field**.",
            "Reversing the direction of the current reverses the direction of the deflection.",
            "A stronger current gives a stronger magnetic field."
          ]
        },
        {
          heading: "Electromagnets",
          points: [
            "A coil of insulated wire wound on a **soft iron core** becomes a magnet when current flows. This is an **electromagnet**.",
            "It is a magnet only while current flows, and its strength can be raised by more turns of wire, more current or a soft iron core.",
            "Electromagnets lift scrap iron in cranes and are used in electric bells, motors and relays."
          ]
        },
        {
          heading: "Electric bell",
          points: [
            "When the switch is pressed, current flows through the electromagnet, which attracts the iron armature so the hammer strikes the gong.",
            "The movement breaks the circuit, the electromagnet loses its magnetism and the armature springs back. This repeats rapidly, so the bell keeps ringing."
          ]
        },
        {
          heading: "Heating effect of current",
          points: [
            "A current heats a conductor because the flow of charge meets resistance. This is used in heaters, geysers, irons and toasters.",
            "The heating element is made of a material of high resistance and high melting point, such as **nichrome**.",
            "Heat produced depends on the current, the resistance and the time: H = I²Rt.",
            "A **fuse** has a thin wire that melts when too much current flows and breaks the circuit. An **MCB** does the same job and can be reset."
          ]
        }
      ],
      formulas: [
        "Heat produced H = I²Rt (I in amperes, R in ohms, t in seconds, H in joules)",
        "Electrical power P = V × I",
        "Electromagnet strength rises with more turns, more current and a soft iron core"
      ],
      terms: [
        { term: "Electromagnet", meaning: "A coil of wire around an iron core that acts as a magnet when current flows." },
        { term: "Heating effect", meaning: "Production of heat when current passes through a conductor." },
        { term: "Fuse", meaning: "A safety device whose thin wire melts when current is too high." },
        { term: "MCB", meaning: "Miniature circuit breaker, which switches off the circuit automatically when current is too high and can be reset." },
        { term: "Nichrome", meaning: "An alloy of high resistance and high melting point used in heating elements." }
      ],
      examples: [
        {
          q: "A heater of resistance 50 Ω carries a current of 4 A. Find the heat produced in 10 s.",
          steps: ["H = I²Rt", "= 4² × 50 × 10 = 16 × 500"],
          answer: "H = 8000 J"
        }
      ],
      qa: [
        { q: "How can the strength of an electromagnet be increased?", a: "Increase the number of turns of the coil, increase the current, and use a soft iron core inside the coil." },
        { q: "Why is a fuse connected in a circuit?", a: "If the current becomes too high, the thin fuse wire heats up and melts, breaking the circuit. This protects appliances and prevents fires." },
        { q: "Why is nichrome used as a heating element?", a: "It has high resistance, so it gets very hot, and a high melting point, so it does not melt when hot." }
      ],
      quiz: [
        { q: "Who discovered that a current produces a magnetic field?", options: ["Faraday", "Oersted", "Volta", "Newton"], answer: 1, explain: "Oersted saw a compass needle deflect near a current-carrying wire." },
        { q: "The core of an electromagnet is usually:", options: ["Copper", "Soft iron", "Plastic", "Aluminium"], answer: 1, explain: "Soft iron strongly magnetises when current flows and loses magnetism when it stops." },
        { q: "A fuse wire should have:", options: ["A high melting point", "A low melting point", "Very high resistance", "A thick cross-section"], answer: 1, explain: "It must melt easily to break the circuit during overload." },
        { q: "Heat produced in a wire is proportional to:", options: ["I", "I²", "1/I", "I³"], answer: 1, explain: "H = I²Rt, so heat grows with the square of the current." },
        { q: "In an electric bell, the hammer strikes the gong when the:", options: ["Armature is attracted by the electromagnet", "Fuse melts", "Wire is cooled", "Coil is removed"], answer: 0, explain: "The magnetised core pulls the iron armature, moving the hammer." },
        { q: "A 10 Ω resistor carries 2 A for 5 s. The heat produced is:", options: ["100 J", "200 J", "50 J", "20 J"], answer: 1, explain: "H = 2² × 10 × 5 = 200 J." }
      ]
    },
    // ───────────────────────────── 5 ─────────────────────────────
    {
      id: "exploring-forces",
      title: "Exploring Forces",
      section: "Physical world",
      summary: "A force is a push or a pull. This chapter looks at contact and non-contact forces, balanced and unbalanced forces, friction, and forces such as gravity, magnetic and electrostatic force.",
      notes: [
        {
          heading: "What is a force?",
          points: [
            "A **force** is a push or a pull. It can change the speed, direction or shape of an object. Its unit is the **newton (N)**.",
            "Force has both **magnitude** (size) and **direction**.",
            "**Contact forces** need touching (muscular force, friction). **Non-contact forces** act at a distance (gravity, magnetic and electrostatic forces)."
          ]
        },
        {
          heading: "Balanced and unbalanced forces",
          points: [
            "If forces on an object are **balanced**, the net force is zero and the motion does not change.",
            "**Unbalanced** forces give a net force, which changes the object's state of motion.",
            "When two forces act in the same direction they add; in opposite directions the net force is their difference.",
            "Example: in tug of war the stronger team moves the rope because the forces are unbalanced."
          ]
        },
        {
          heading: "Friction",
          points: [
            "**Friction** opposes motion between surfaces in contact. It is larger for rough surfaces and for greater pressing force.",
            "Types: **static**, **sliding** and **rolling** friction. Rolling friction is least, which is why wheels and ball bearings are used.",
            "Friction is useful (walking, brakes) but also causes wear and heating. It is reduced by lubricants and polishing."
          ]
        },
        {
          heading: "Gravity, magnetic and electrostatic force",
          points: [
            "**Gravitational force** pulls every object towards the Earth's centre. It gives an object its **weight**.",
            "**Magnetic force** acts between magnets (like poles repel, unlike attract) and on magnetic materials.",
            "A charged object attracts light pieces of paper. **Electrostatic force** can attract or repel: like charges repel, unlike charges attract."
          ]
        }
      ],
      formulas: [
        "Unit of force: newton (N)",
        "Net force (same direction) = F₁ + F₂; (opposite directions) = F₁ − F₂",
        "Weight = mass × g (g ≈ 10 N/kg on Earth)",
        "Friction: rolling < sliding < static"
      ],
      terms: [
        { term: "Force", meaning: "A push or a pull that can change an object's speed, direction or shape." },
        { term: "Friction", meaning: "A force that opposes the relative motion of surfaces in contact." },
        { term: "Non-contact force", meaning: "A force that acts without the objects touching, such as gravity." },
        { term: "Net force", meaning: "The single resulting force when all forces on an object are combined." },
        { term: "Lubricant", meaning: "A substance such as oil that reduces friction." }
      ],
      examples: [
        {
          q: "Two children push a box in the same direction with 30 N and 20 N. A friction force of 10 N acts against them. Find the net force.",
          steps: ["Forces in the same direction add: 30 + 20 = 50 N", "Subtract friction in opposite direction: 50 − 10 = 40 N"],
          answer: "Net force = 40 N in the direction of the push"
        }
      ],
      qa: [
        { q: "Why are ball bearings used in machines?", a: "Rolling friction is much less than sliding friction. Balls replace sliding surfaces, so wear and heat are reduced." },
        { q: "Differentiate between contact and non-contact forces with examples.", a: "A contact force acts only when objects touch, for example muscular force or friction. A non-contact force acts at a distance, for example gravity or magnetic force." }
      ],
      quiz: [
        { q: "The SI unit of force is:", options: ["Joule", "Newton", "Pascal", "Watt"], answer: 1, explain: "Force is measured in newtons; the joule measures energy and the pascal measures pressure." },
        { q: "Which of these is a non-contact force?", options: ["Friction", "Muscular force", "Gravitational force", "Push by a hand"], answer: 2, explain: "Gravity pulls without touching." },
        { q: "Forces of 15 N and 15 N act in opposite directions on a box. The net force is:", options: ["30 N", "15 N", "0 N", "225 N"], answer: 2, explain: "Equal opposite forces balance; the net force is zero." },
        { q: "Which type of friction is the smallest?", options: ["Static", "Sliding", "Rolling", "Fluid always"], answer: 2, explain: "Rolling friction is less than sliding or static friction." },
        { q: "A charged comb attracts small paper bits due to:", options: ["Magnetic force", "Gravitational force", "Electrostatic force", "Muscular force"], answer: 2, explain: "Paper is attracted by the charge on the comb, an electrostatic force." },
        { q: "To reduce friction between two surfaces we can:", options: ["Make them rougher", "Apply a lubricant", "Press them harder", "Increase the area only"], answer: 1, explain: "A lubricant forms a film between surfaces and lowers friction." }
      ]
    },
    // ───────────────────────────── 6 ─────────────────────────────
    {
      id: "pressure-winds-storms-cyclones",
      title: "Pressure, Winds, Storms, and Cyclones",
      section: "Earth and space",
      summary: "Pressure is force acting on an area. This chapter covers pressure in solids, liquids and gases, atmospheric pressure, how pressure differences cause winds, and how thunderstorms and cyclones form.",
      notes: [
        {
          heading: "Pressure",
          points: [
            "**Pressure** = force acting perpendicular to a surface ÷ area of that surface. Its unit is the **pascal (Pa)**, where 1 Pa = 1 N/m².",
            "For the same force, a smaller area gives greater pressure. A sharp knife cuts easily, and a wide school bag strap is comfortable.",
            "Liquids exert pressure that increases with **depth** and acts in all directions, so dam walls are thicker at the bottom.",
            "Gases also exert pressure on the walls of their container."
          ]
        },
        {
          heading: "Atmospheric pressure",
          points: [
            "Air has weight, so the atmosphere exerts **atmospheric pressure** on everything. We do not feel it because the pressure inside our bodies balances it.",
            "Atmospheric pressure decreases as height above the ground increases.",
            "Examples: a drinking straw, a suction cup and a dropper work due to differences in pressure."
          ]
        },
        {
          heading: "Winds",
          points: [
            "Air moves from a region of **high pressure** to a region of **low pressure**. Moving air is **wind**.",
            "Warm air is lighter, rises and creates a low-pressure region. Cooler air moves in to take its place.",
            "A sea breeze blows from the sea to land by day, and a land breeze blows from land to sea at night."
          ]
        },
        {
          heading: "Thunderstorms and cyclones",
          points: [
            "In a **thunderstorm**, warm moist air rises quickly, forms clouds and gives heavy rain, lightning and thunder.",
            "A **cyclone** forms over warm tropical oceans around a low-pressure centre called the **eye**, with strong spiralling winds and heavy rain.",
            "Cyclone warnings, shelters, and satellite tracking by the India Meteorological Department (IMD) help to save lives.",
            "In a storm stay indoors, keep away from tall trees and electric poles, and follow official warnings."
          ]
        }
      ],
      formulas: [
        "Pressure = Force ÷ Area (P = F/A)",
        "1 pascal = 1 N/m²",
        "Liquid pressure increases with depth",
        "Wind blows from high pressure to low pressure"
      ],
      terms: [
        { term: "Pressure", meaning: "The force acting per unit area on a surface." },
        { term: "Pascal", meaning: "The SI unit of pressure; 1 N/m²." },
        { term: "Atmospheric pressure", meaning: "The pressure exerted by the weight of the air above us." },
        { term: "Wind", meaning: "Air moving from a high-pressure region to a low-pressure region." },
        { term: "Cyclone", meaning: "A violent storm with spiralling winds around a low-pressure centre over warm oceans." }
      ],
      examples: [
        {
          q: "A box exerts a force of 600 N on a floor over an area of 0.5 m². Find the pressure.",
          steps: ["P = F ÷ A", "= 600 ÷ 0.5"],
          answer: "P = 1200 Pa"
        },
        {
          q: "The same 600 N acts on an area of 0.1 m². What is the pressure?",
          steps: ["P = 600 ÷ 0.1"],
          answer: "P = 6000 Pa. A smaller area gives five times the pressure."
        }
      ],
      qa: [
        { q: "Why do we not feel the atmospheric pressure acting on us?", a: "The pressure of fluids inside our body is equal to the pressure of the air outside, so the two balance each other." },
        { q: "Why are the walls of a dam thicker at the bottom?", a: "Pressure in water increases with depth, so the water at the bottom pushes with greater force and the wall must be stronger." },
        { q: "How does a sea breeze form?", a: "By day land heats faster than sea, so air above the land rises, creating low pressure. Cooler air from the sea blows in to replace it." }
      ],
      quiz: [
        { q: "The SI unit of pressure is:", options: ["Newton", "Pascal", "Joule", "Watt"], answer: 1, explain: "Pressure is measured in pascals (N/m²)." },
        { q: "A force of 200 N acts on 4 m². The pressure is:", options: ["800 Pa", "50 Pa", "204 Pa", "0.02 Pa"], answer: 1, explain: "P = 200 ÷ 4 = 50 Pa." },
        { q: "Winds blow from:", options: ["Low to high pressure", "High to low pressure", "Hot to hot regions", "Land to land only"], answer: 1, explain: "Air flows from high pressure to low pressure." },
        { q: "Nails have sharp pointed ends because:", options: ["The area is small, so pressure is large", "The area is large, so pressure is small", "They weigh less", "They look better"], answer: 0, explain: "A small area gives high pressure for the same force." },
        { q: "The calm low-pressure centre of a cyclone is called the:", options: ["Crest", "Eye", "Front", "Core wall"], answer: 1, explain: "The eye is the calm centre surrounded by strong winds." },
        { q: "As we climb a mountain, atmospheric pressure:", options: ["Increases", "Decreases", "Stays the same", "Becomes zero immediately"], answer: 1, explain: "There is less air above, so pressure drops with height." }
      ]
    },
    // ───────────────────────────── 7 ─────────────────────────────
    {
      id: "particulate-nature-of-matter",
      title: "Particulate Nature of Matter",
      section: "Matter",
      summary: "All matter is made of tiny particles that are in constant motion with spaces between them. This chapter explains states of matter, diffusion, and changes of state using the particle model.",
      notes: [
        {
          heading: "Matter is made of particles",
          points: [
            "Matter is anything that has mass and occupies space. It is made of extremely small **particles**.",
            "Particles have **spaces** between them and are in **constant motion**.",
            "Particles attract one another. The strength of this **force of attraction** differs in solids, liquids and gases."
          ]
        },
        {
          heading: "States of matter",
          points: [
            "**Solids:** particles are closely packed and only vibrate in place. Solids have a fixed shape and volume.",
            "**Liquids:** particles are close but can slide past each other. Liquids have a fixed volume but take the shape of the container.",
            "**Gases:** particles are far apart and move freely. Gases have no fixed shape or volume and are easily compressed.",
            "Intermolecular spaces and attraction: gas has the largest spaces and weakest attraction; solid has the smallest spaces and strongest attraction."
          ]
        },
        {
          heading: "Diffusion",
          points: [
            "**Diffusion** is the spreading of one substance into another by the movement of particles, for example the smell of food spreading in a room or ink spreading in water.",
            "Diffusion is fastest in gases, slower in liquids and very slow in solids.",
            "A higher temperature makes particles move faster, so diffusion speeds up."
          ]
        },
        {
          heading: "Changes of state",
          points: [
            "On heating, a solid **melts** to a liquid and a liquid **boils (evaporates)** to a gas. On cooling, a gas **condenses** and a liquid **freezes**.",
            "During a change of state the temperature stays constant; the heat energy is used to overcome attraction between particles.",
            "Some solids, such as camphor and naphthalene, change directly into gas on heating. This is called **sublimation**.",
            "Evaporation takes place at any temperature from the surface of a liquid, and causes cooling."
          ]
        }
      ],
      formulas: [
        "Solid → liquid: melting; liquid → gas: boiling/evaporation; gas → liquid: condensation; liquid → solid: freezing",
        "Melting point of ice = 0 °C; boiling point of water = 100 °C (at normal pressure)",
        "Gas: weakest attraction, largest spaces; solid: strongest attraction, smallest spaces"
      ],
      terms: [
        { term: "Diffusion", meaning: "The mixing of particles of one substance into another by their own motion." },
        { term: "Sublimation", meaning: "Change of a solid directly into a gas on heating (without becoming liquid)." },
        { term: "Evaporation", meaning: "Change of a liquid into vapour at the surface, at any temperature." },
        { term: "Condensation", meaning: "Change of a gas or vapour into a liquid on cooling." },
        { term: "Melting point", meaning: "The temperature at which a solid changes into a liquid." }
      ],
      qa: [
        { q: "Why can gases be compressed easily but solids cannot?", a: "In gases the particles are far apart with large spaces, so they can be pushed closer. In solids the particles are already tightly packed." },
        { q: "Why does a drop of ink spread faster in hot water?", a: "Particles of hot water move faster, so they mix with ink particles more quickly. Diffusion is faster at a higher temperature." },
        { q: "Why does sweating cool the body?", a: "Sweat evaporates by taking heat from the skin. This heat loss makes the body feel cooler." }
      ],
      quiz: [
        { q: "In which state are particles farthest apart?", options: ["Solid", "Liquid", "Gas", "All the same"], answer: 2, explain: "Gas particles have the largest spaces between them." },
        { q: "The spreading of the smell of incense in a room is an example of:", options: ["Melting", "Diffusion", "Sublimation", "Freezing"], answer: 1, explain: "Particles of the scent mix with air by their own movement." },
        { q: "Camphor changes directly from solid to gas. This is called:", options: ["Condensation", "Melting", "Sublimation", "Freezing"], answer: 2, explain: "A solid to gas change without a liquid stage is sublimation." },
        { q: "During melting of ice at 0 °C, the temperature:", options: ["Rises quickly", "Stays constant", "Falls", "Becomes 100 °C"], answer: 1, explain: "Heat energy is used to change the state, not to raise temperature." },
        { q: "Which has a fixed volume but no fixed shape?", options: ["Solid", "Gas", "Liquid", "Rock"], answer: 2, explain: "A liquid takes the shape of its container but keeps its volume." },
        { q: "Evaporation differs from boiling because evaporation:", options: ["Happens only at 100 °C", "Happens at the surface at any temperature", "Needs a flame", "Happens only in solids"], answer: 1, explain: "Boiling occurs throughout the liquid at the boiling point; evaporation occurs at the surface at any temperature." }
      ]
    },
    // ───────────────────────────── 8 ─────────────────────────────
    {
      id: "elements-compounds-and-mixtures",
      title: "Nature of Matter: Elements, Compounds, and Mixtures",
      section: "Matter",
      summary: "Matter can be classified into pure substances (elements and compounds) and mixtures. This chapter explains their differences, types of mixtures and common methods of separating them.",
      notes: [
        {
          heading: "Elements",
          points: [
            "An **element** is a pure substance made of only one kind of atom. It cannot be broken into simpler substances by chemical methods.",
            "Elements are represented by **symbols**, such as H (hydrogen), O (oxygen), C (carbon), Fe (iron) and Na (sodium).",
            "Elements are classified as **metals**, **non-metals** and **metalloids**."
          ]
        },
        {
          heading: "Compounds",
          points: [
            "A **compound** is a pure substance formed when two or more elements combine **chemically** in a fixed ratio.",
            "Examples: water H₂O, carbon dioxide CO₂ and common salt NaCl.",
            "A compound has properties very different from its elements. Sodium is a reactive metal and chlorine is a poisonous gas, but sodium chloride is a harmless salt.",
            "Compounds can be broken down only by chemical methods."
          ]
        },
        {
          heading: "Mixtures",
          points: [
            "A **mixture** has two or more substances mixed **physically** in any proportion. Each keeps its own properties.",
            "A **homogeneous** mixture has uniform composition (salt solution, air). A **heterogeneous** mixture does not (sand and water, soil).",
            "Mixture components can be separated by physical methods."
          ]
        },
        {
          heading: "Separating mixtures",
          points: [
            "**Handpicking, winnowing, sieving:** for solids of different sizes or weights.",
            "**Filtration:** to separate an insoluble solid from a liquid. **Evaporation:** to get a dissolved solid back, such as salt from salt water.",
            "**Distillation:** to separate liquids with different boiling points, or to get pure water from salt water.",
            "**Magnetic separation:** to remove iron from a mixture. **Chromatography:** to separate coloured substances such as dyes in ink."
          ]
        }
      ],
      formulas: [
        "Pure substances: elements and compounds; impure: mixtures",
        "Compound: fixed ratio, chemical combination; mixture: any ratio, physical mixing",
        "Water = H₂O; carbon dioxide = CO₂; common salt = NaCl"
      ],
      terms: [
        { term: "Element", meaning: "A pure substance made of one kind of atom." },
        { term: "Compound", meaning: "A pure substance made of two or more elements chemically combined in a fixed ratio." },
        { term: "Mixture", meaning: "A combination of two or more substances that are not chemically combined." },
        { term: "Filtration", meaning: "Separating an insoluble solid from a liquid using filter paper." },
        { term: "Distillation", meaning: "Separating liquids by evaporating and then condensing them." }
      ],
      qa: [
        { q: "Give three differences between a compound and a mixture.", a: "A compound has a fixed ratio of elements and a mixture has any ratio. A compound is formed by chemical combination, a mixture by physical mixing. A compound has new properties, but the parts of a mixture keep their own properties." },
        { q: "How would you separate a mixture of sand, salt and iron filings?", a: "First use a magnet to remove iron filings. Then add water to dissolve the salt and filter off the sand. Finally evaporate the filtrate to get salt." }
      ],
      quiz: [
        { q: "Which of these is a compound?", options: ["Oxygen", "Iron", "Water", "Air"], answer: 2, explain: "Water is made of hydrogen and oxygen chemically combined; air is a mixture." },
        { q: "Air is a:", options: ["Compound", "Homogeneous mixture", "Element", "Heterogeneous mixture of solids"], answer: 1, explain: "Air has uniform composition, so it is a homogeneous mixture." },
        { q: "Salt can be recovered from salt solution by:", options: ["Filtration", "Magnetic separation", "Evaporation", "Winnowing"], answer: 2, explain: "The dissolved salt passes through a filter, so evaporate the water." },
        { q: "Which method separates inks into different dyes?", options: ["Chromatography", "Sieving", "Decantation only", "Winnowing"], answer: 0, explain: "Different dyes travel different distances on the paper." },
        { q: "In a compound the elements are present:", options: ["In any ratio", "In a fixed ratio", "As separate pieces", "Only as gases"], answer: 1, explain: "A compound has a definite composition." },
        { q: "Which pair is correctly matched?", options: ["Fe – sodium", "Na – iron", "C – carbon", "O – gold"], answer: 2, explain: "C is carbon; Fe is iron, Na is sodium and O is oxygen." }
      ]
    },
    // ───────────────────────────── 9 ─────────────────────────────
    {
      id: "solutes-solvents-and-solutions",
      title: "The Amazing World of Solutes, Solvents, and Solutions",
      section: "Matter",
      summary: "A solution is formed when a solute dissolves in a solvent. This chapter covers solubility, saturated solutions, concentration, and the effect of temperature on dissolving.",
      notes: [
        {
          heading: "Solutions",
          points: [
            "A **solution** is a homogeneous mixture of two or more substances. The part that dissolves is the **solute** and the part it dissolves in is the **solvent**.",
            "Example: in salt water, salt is the solute and water is the solvent. Water is called the **universal solvent** because it dissolves many substances.",
            "In a true solution particles do not settle and cannot be seen, and light passes straight through without scattering.",
            "Solutions can be solid (alloys), liquid (sugar in water) or gas (air)."
          ]
        },
        {
          heading: "Solubility and saturation",
          points: [
            "A **saturated solution** cannot dissolve any more solute at that temperature. An **unsaturated solution** can dissolve more.",
            "**Solubility** is the amount of solute that dissolves in 100 g of solvent at a given temperature to form a saturated solution.",
            "Solubility of most solids increases with temperature. Gases are less soluble in warm water, which is why fish need dissolved oxygen in cooler water.",
            "Stirring and crushing the solute only speed up dissolving; they do not change how much dissolves."
          ]
        },
        {
          heading: "Concentration",
          points: [
            "**Concentration** tells how much solute is present in a given amount of solution.",
            "Mass percentage = (mass of solute ÷ mass of solution) × 100.",
            "A dilute solution has less solute and a concentrated solution has more.",
            "Mass of solution = mass of solute + mass of solvent."
          ]
        },
        {
          heading: "Suspensions and colloids",
          points: [
            "A **suspension** (muddy water) has larger particles that settle on standing and can be filtered.",
            "A **colloid** (milk, fog) has particles that do not settle and scatter light (Tyndall effect).",
            "A **true solution** does not scatter light."
          ]
        }
      ],
      formulas: [
        "Solution = solute + solvent",
        "Mass of solution = mass of solute + mass of solvent",
        "Concentration (mass %) = (mass of solute ÷ mass of solution) × 100",
        "Solubility = g of solute in 100 g of solvent in a saturated solution"
      ],
      terms: [
        { term: "Solute", meaning: "The substance that dissolves in a solution." },
        { term: "Solvent", meaning: "The substance in which the solute dissolves." },
        { term: "Saturated solution", meaning: "A solution that cannot dissolve more solute at that temperature." },
        { term: "Solubility", meaning: "The maximum amount of solute that dissolves in a given amount of solvent at a temperature." },
        { term: "Tyndall effect", meaning: "Scattering of a light beam by particles of a colloid or suspension." }
      ],
      examples: [
        {
          q: "20 g of sugar is dissolved in 80 g of water. Find the mass percentage of sugar in the solution.",
          steps: ["Mass of solution = 20 + 80 = 100 g", "Mass % = (20 ÷ 100) × 100"],
          answer: "20%"
        },
        {
          q: "How much salt is present in 250 g of a 12% salt solution?",
          steps: ["Mass of salt = (12 ÷ 100) × 250"],
          answer: "30 g of salt"
        }
      ],
      qa: [
        { q: "Why is water called the universal solvent?", a: "Water dissolves a large number of solids, liquids and gases, more than any other common liquid." },
        { q: "How can you make a saturated solution of salt at room temperature?", a: "Keep adding salt to water in small amounts with stirring until no more dissolves and some salt remains undissolved at the bottom." },
        { q: "Why do aquatic animals face problems in warm water?", a: "The solubility of gases like oxygen decreases as the temperature rises, so warm water holds less dissolved oxygen." }
      ],
      quiz: [
        { q: "In a solution of sugar in water, the solvent is:", options: ["Sugar", "Water", "Sugar and water together", "Air"], answer: 1, explain: "The substance in larger amount that dissolves the solute is water." },
        { q: "A solution that can dissolve no more solute at a given temperature is:", options: ["Dilute", "Saturated", "Unsaturated", "Colloidal"], answer: 1, explain: "That is the meaning of saturated." },
        { q: "10 g of salt is dissolved in 90 g of water. The mass percentage of salt is:", options: ["10%", "11.1%", "9%", "90%"], answer: 0, explain: "10 ÷ (10 + 90) × 100 = 10%; 11.1% divides by the water mass only." },
        { q: "Which of these shows the Tyndall effect?", options: ["Salt solution", "Milk", "Sugar solution", "Clear lemon water"], answer: 1, explain: "Milk is a colloid and scatters light." },
        { q: "The solubility of most solids in water, with rising temperature, usually:", options: ["Decreases", "Increases", "Stays zero", "Becomes a gas"], answer: 1, explain: "More solute can dissolve in hot water." },
        { q: "Muddy water is a:", options: ["True solution", "Suspension", "Compound", "Pure element"], answer: 1, explain: "Mud particles settle on standing, so it is a suspension." }
      ]
    },
    // ───────────────────────────── 10 ─────────────────────────────
    {
      id: "light-mirrors-and-lenses",
      title: "Light: Mirrors and Lenses",
      section: "Physical world",
      summary: "Light travels in straight lines and is reflected by mirrors and bent by lenses. This chapter covers the laws of reflection, images in plane and curved mirrors, refraction, and convex and concave lenses.",
      notes: [
        {
          heading: "Reflection of light",
          points: [
            "Light travels in straight lines. When it falls on a surface and bounces back, it is **reflected**.",
            "**Laws of reflection:** (1) the angle of incidence equals the angle of reflection; (2) the incident ray, the reflected ray and the normal lie in the same plane.",
            "Angles are measured from the **normal**, the line perpendicular to the surface at the point of incidence.",
            "A rough surface reflects light in many directions (**diffuse reflection**). A smooth surface gives **regular reflection**."
          ]
        },
        {
          heading: "Plane mirror",
          points: [
            "The image in a plane mirror is **virtual, upright, the same size** as the object and **laterally inverted**.",
            "The image is as far behind the mirror as the object is in front of it.",
            "A virtual image cannot be caught on a screen."
          ]
        },
        {
          heading: "Curved mirrors",
          points: [
            "A **concave mirror** curves inwards. It converges parallel rays to a point called the **focus**. It is used in torches, headlights, shaving mirrors and by dentists.",
            "A **convex mirror** curves outwards. It always forms a smaller, upright, virtual image with a wide field of view, so it is used as a vehicle rear-view mirror.",
            "A concave mirror forms a magnified, upright, virtual image when the object is very close to it; otherwise it forms real images."
          ]
        },
        {
          heading: "Refraction and lenses",
          points: [
            "**Refraction** is the bending of light when it passes from one transparent medium to another, such as from air into water.",
            "A **convex lens** is thicker in the middle and converges light. A **concave lens** is thinner in the middle and spreads light out (diverges).",
            "A convex lens can form real, inverted images, or a magnified, upright, virtual image when the object is close. It is used in magnifying glasses, cameras and spectacles for long-sightedness.",
            "A concave lens always forms a smaller, upright, virtual image. It corrects short-sightedness."
          ]
        }
      ],
      formulas: [
        "Angle of incidence ∠i = angle of reflection ∠r",
        "Plane mirror: image distance = object distance; image is virtual, upright, same size",
        "Convex lens: converging; concave lens: diverging",
        "Convex mirror: always smaller, upright, virtual image"
      ],
      terms: [
        { term: "Normal", meaning: "A line perpendicular to a surface at the point where a ray strikes it." },
        { term: "Refraction", meaning: "Bending of light when it passes from one medium to another." },
        { term: "Virtual image", meaning: "An image that cannot be formed on a screen." },
        { term: "Focus", meaning: "The point where parallel rays meet (or appear to meet) after reflection or refraction." },
        { term: "Lateral inversion", meaning: "Reversal of left and right in a mirror image." }
      ],
      examples: [
        {
          q: "A ray strikes a plane mirror making an angle of 35° with the normal. Find the angle of reflection and the angle between the incident and reflected rays.",
          steps: ["∠i = 35°, so by the law of reflection ∠r = 35°", "Angle between the rays = ∠i + ∠r = 35° + 35°"],
          answer: "∠r = 35°, and the angle between the rays is 70°"
        },
        {
          q: "A student stands 2 m in front of a plane mirror. How far is she from her image?",
          steps: ["Image is 2 m behind the mirror", "Distance = 2 + 2"],
          answer: "4 m"
        }
      ],
      qa: [
        { q: "Why is a convex mirror used as a rear-view mirror?", a: "It forms an upright image and gives a wide field of view, so the driver sees a larger area behind the vehicle." },
        { q: "State the laws of reflection.", a: "The angle of incidence equals the angle of reflection. The incident ray, the reflected ray and the normal at the point of incidence all lie in one plane." },
        { q: "What is the difference between a convex lens and a concave lens?", a: "A convex lens is thick at the centre and converges light. A concave lens is thin at the centre and spreads the light apart." }
      ],
      quiz: [
        { q: "The angle of incidence is measured between the incident ray and the:", options: ["Mirror surface", "Normal", "Reflected ray", "Focus"], answer: 1, explain: "Angles in reflection are measured from the normal." },
        { q: "The image formed by a plane mirror is:", options: ["Real and inverted", "Virtual and upright", "Real and magnified", "Virtual and smaller"], answer: 1, explain: "A plane mirror gives a virtual, upright image of the same size." },
        { q: "A light ray hits a plane mirror at an angle of incidence of 40°. The angle of reflection is:", options: ["50°", "40°", "80°", "20°"], answer: 1, explain: "∠r = ∠i. 50° would be the angle with the mirror surface." },
        { q: "Which lens converges light?", options: ["Concave", "Convex", "Both", "Plane"], answer: 1, explain: "A convex lens bends rays inward to meet at the focus." },
        { q: "A dentist uses a ___ mirror to see a magnified image of a tooth.", options: ["Convex", "Plane", "Concave", "Rough"], answer: 2, explain: "A concave mirror gives a magnified, upright image of a close object." },
        { q: "A person stands 3 m from a plane mirror and walks 1 m towards it. The distance between her and her image is now:", options: ["2 m", "4 m", "3 m", "6 m"], answer: 1, explain: "She is 2 m from the mirror, so the image is 2 m behind it: 2 + 2 = 4 m." }
      ]
    },
    // ───────────────────────────── 11 ─────────────────────────────
    {
      id: "keeping-time-with-the-skies",
      title: "Keeping Time with the Skies",
      section: "Earth and space",
      summary: "Early people measured time using the motion of the Sun, Moon and stars. This chapter looks at day, month and year, the phases of the Moon, calendars, and seasons caused by Earth's tilt.",
      notes: [
        {
          heading: "Day, month and year",
          points: [
            "A **day** is based on Earth's **rotation** on its axis, about 24 hours.",
            "A **month** is based on the Moon's cycle of phases, about 29.5 days.",
            "A **year** is the time Earth takes to **revolve** once around the Sun, about 365¼ days.",
            "A **leap year** has 366 days to make up for the extra quarter day each year."
          ]
        },
        {
          heading: "Phases of the Moon",
          points: [
            "The Moon shines by **reflecting sunlight**. We see different parts of its lit half as it moves around the Earth. These are its **phases**.",
            "The cycle is: new moon → crescent → first quarter → gibbous → full moon → waning phases → new moon.",
            "The Moon takes about 27.3 days to orbit the Earth, and about 29.5 days to go from one new moon to the next.",
            "We always see the same face of the Moon, because it rotates once for each revolution."
          ]
        },
        {
          heading: "Seasons",
          points: [
            "Earth's axis is **tilted** about 23.5° from the vertical. As Earth revolves, different parts get more direct sunlight at different times, causing **seasons**.",
            "Seasons are not caused by Earth being nearer to or farther from the Sun.",
            "Days are longer in summer and shorter in winter.",
            "Equinoxes (about 21 March and 23 September) have day and night nearly equal."
          ]
        },
        {
          heading: "Calendars and timekeeping",
          points: [
            "Early timekeeping used the shadow of a stick (**sundial**), water clocks and sand clocks.",
            "India has solar, lunar and lunisolar calendars. Many festivals follow the lunar calendar, so their dates on the English calendar change each year.",
            "The Pole Star appears almost fixed in the northern sky and has been used for finding direction."
          ]
        }
      ],
      formulas: [
        "Rotation of Earth ≈ 24 hours (1 day)",
        "Revolution of Earth ≈ 365¼ days (1 year)",
        "Lunar month ≈ 29.5 days; Moon's orbit around Earth ≈ 27.3 days",
        "Earth's axis tilt ≈ 23.5°"
      ],
      terms: [
        { term: "Rotation", meaning: "Spinning of a body on its own axis." },
        { term: "Revolution", meaning: "Movement of a body around another, such as Earth around the Sun." },
        { term: "Leap year", meaning: "A year of 366 days that adds one extra day (29 February)." },
        { term: "Phases of the Moon", meaning: "The changing shapes of the lit part of the Moon seen from Earth." },
        { term: "Sundial", meaning: "A device that tells time from the position of a shadow cast by the Sun." }
      ],
      qa: [
        { q: "Why do we have seasons?", a: "Earth's axis is tilted and Earth revolves around the Sun. Because of the tilt, different regions receive more direct sunlight and longer days at different times of the year." },
        { q: "Why do we always see the same face of the Moon?", a: "The Moon takes the same time to rotate once on its axis as to go once around the Earth, so the same side always faces us." },
        { q: "Why is there a leap year?", a: "Earth takes about 365¼ days to go round the Sun. The extra quarter days add up to one day in four years, which is added as 29 February." }
      ],
      quiz: [
        { q: "A year is the time taken by Earth to:", options: ["Rotate once", "Revolve once around the Sun", "Orbit the Moon", "Tilt once"], answer: 1, explain: "One revolution around the Sun is a year; one rotation is a day." },
        { q: "The Moon's phases are caused by:", options: ["Earth's shadow always", "Different amounts of its lit half seen from Earth", "Clouds", "The Moon producing light"], answer: 1, explain: "The Moon reflects sunlight and we see varying portions of its lit half." },
        { q: "Seasons occur mainly because:", options: ["Earth's distance from the Sun changes greatly", "Earth's axis is tilted", "The Sun moves around Earth", "The Moon moves closer"], answer: 1, explain: "The tilt changes how directly sunlight strikes each hemisphere." },
        { q: "The approximate length of the lunar month is:", options: ["7 days", "14 days", "29.5 days", "365 days"], answer: 2, explain: "A new moon to the next new moon takes about 29.5 days." },
        { q: "A leap year has:", options: ["365 days", "364 days", "366 days", "360 days"], answer: 2, explain: "An extra day, 29 February, is added." },
        { q: "The Moon shines because it:", options: ["Reflects sunlight", "Burns like a star", "Makes its own light", "Reflects Earth's light"], answer: 0, explain: "The Moon is not a source of light; it reflects light from the Sun." }
      ]
    },
    // ───────────────────────────── 12 ─────────────────────────────
    {
      id: "how-nature-works-in-harmony",
      title: "How Nature Works in Harmony",
      section: "Living world",
      summary: "Living things and their surroundings depend on each other. This chapter covers ecosystems, food chains and webs, flow of energy, nutrient cycles, and why balance in nature matters.",
      notes: [
        {
          heading: "Ecosystem",
          points: [
            "An **ecosystem** is a community of living things (**biotic**) interacting with non-living things (**abiotic**) such as air, water, soil and sunlight.",
            "Examples: a pond, forest, grassland, desert and aquarium.",
            "Organisms are adapted to their habitat; a camel is adapted to the desert and a fish to water."
          ]
        },
        {
          heading: "Food chains and webs",
          points: [
            "**Producers** (green plants) make their own food by photosynthesis. **Consumers** eat other organisms: herbivores, carnivores and omnivores. **Decomposers** (bacteria and fungi) break down dead matter.",
            "A **food chain** shows who eats whom: grass → grasshopper → frog → snake → eagle.",
            "Many food chains linked together form a **food web**.",
            "Each step in the food chain is called a **trophic level**."
          ]
        },
        {
          heading: "Energy flow and cycles",
          points: [
            "The Sun is the source of energy. Energy flows in **one direction**, from producers to consumers, and much of it is lost as heat at every step.",
            "Only about 10% of the energy is passed to the next trophic level, so food chains are short.",
            "Materials such as water, carbon and nitrogen are **recycled** through air, soil and living things.",
            "Decomposers return nutrients to the soil, keeping the ecosystem going."
          ]
        },
        {
          heading: "Balance in nature",
          points: [
            "If one species is removed or increases greatly, other organisms are affected, so ecosystems must be kept balanced.",
            "Pollution, cutting of forests and overhunting upset this balance.",
            "We can help by saving water and energy, planting trees, reducing waste and protecting habitats."
          ]
        }
      ],
      formulas: [
        "Food chain: producer → herbivore → carnivore",
        "Energy passed to the next trophic level ≈ 10%",
        "Energy flows in one direction; nutrients are recycled"
      ],
      terms: [
        { term: "Ecosystem", meaning: "Living and non-living things in an area interacting with each other." },
        { term: "Producer", meaning: "An organism, such as a green plant, that makes its own food." },
        { term: "Decomposer", meaning: "An organism that breaks down dead plants and animals into nutrients." },
        { term: "Food web", meaning: "Interconnected food chains in an ecosystem." },
        { term: "Trophic level", meaning: "A feeding level or step in a food chain." }
      ],
      qa: [
        { q: "Why are decomposers important in an ecosystem?", a: "They break down dead plants and animals and waste, returning nutrients to the soil for producers to use. This keeps nutrients cycling." },
        { q: "Why are food chains usually short?", a: "Only about 10% of energy passes to the next trophic level and the rest is lost as heat. After a few steps there is too little energy to support more levels." },
        { q: "What would happen if all the frogs in a pond were removed?", a: "Insects, which frogs feed on, would increase, and the animals that eat frogs would lose food. The balance of the ecosystem would be disturbed." }
      ],
      quiz: [
        { q: "In a food chain, the producers are:", options: ["Green plants", "Herbivores", "Carnivores", "Bacteria only"], answer: 0, explain: "Green plants make food by photosynthesis." },
        { q: "Which organisms break down dead matter?", options: ["Producers", "Decomposers", "Herbivores", "Carnivores"], answer: 1, explain: "Bacteria and fungi decompose dead organisms." },
        { q: "The ultimate source of energy for almost all ecosystems is the:", options: ["Soil", "Wind", "Sun", "Water"], answer: 2, explain: "Sunlight is trapped by plants through photosynthesis." },
        { q: "About how much energy passes to the next trophic level?", options: ["90%", "50%", "10%", "1%"], answer: 2, explain: "Roughly 10% passes on and the rest is lost, mostly as heat." },
        { q: "Which food chain is written correctly?", options: ["Frog → grass → snake", "Grass → grasshopper → frog", "Snake → frog → grass", "Grasshopper → grass → frog"], answer: 1, explain: "The arrow points from the food to the one that eats it." },
        { q: "Which of these is an abiotic component of an ecosystem?", options: ["Fungus", "Soil", "Insect", "Grass"], answer: 1, explain: "Soil is non-living; the others are living." }
      ]
    },
    // ───────────────────────────── 13 ─────────────────────────────
    {
      id: "earth-a-unique-life-sustaining-planet",
      title: "Our Home: Earth, a Unique Life Sustaining Planet",
      section: "Earth and space",
      summary: "Earth is the only known planet that supports life. This chapter looks at what makes Earth special: its distance from the Sun, atmosphere, water, the layers of Earth, and the need to protect our planet.",
      notes: [
        {
          heading: "Why Earth supports life",
          points: [
            "Earth is at a suitable **distance from the Sun**, so it is neither too hot nor too cold, and water can exist as a liquid.",
            "It has an **atmosphere** with oxygen for breathing, and carbon dioxide for plants.",
            "It has plenty of **liquid water**, about 71% of the surface, which is essential for life.",
            "The atmosphere also shields living things from harmful rays of the Sun."
          ]
        },
        {
          heading: "Earth's atmosphere",
          points: [
            "Air is mainly **nitrogen (about 78%)** and **oxygen (about 21%)**, with small amounts of argon, carbon dioxide and water vapour.",
            "The **ozone layer** absorbs much of the Sun's harmful ultraviolet radiation.",
            "The **greenhouse effect** keeps Earth warm. Too much carbon dioxide and other greenhouse gases causes **global warming**."
          ]
        },
        {
          heading: "Layers and spheres of Earth",
          points: [
            "The solid Earth has three layers: the **crust**, the **mantle** and the **core**. The crust is the thin outer layer on which we live.",
            "The **lithosphere** is land, the **hydrosphere** is water, the **atmosphere** is air and the **biosphere** is the zone of life.",
            "The four spheres interact. Rain falls from the atmosphere, fills rivers and soil and supports life."
          ]
        },
        {
          heading: "Protecting Earth",
          points: [
            "Human activities such as burning fuels, deforestation and waste dumping cause pollution and climate change.",
            "We can protect Earth by saving water and energy, planting trees, using renewable energy and following **reduce, reuse, recycle**.",
            "Only a very small share of Earth's water is fresh water that is easily available to us, so it must be used wisely."
          ]
        }
      ],
      formulas: [
        "Air: nitrogen ≈ 78%, oxygen ≈ 21%",
        "Water covers ≈ 71% of Earth's surface",
        "Layers: crust → mantle → core",
        "Spheres: lithosphere, hydrosphere, atmosphere, biosphere"
      ],
      terms: [
        { term: "Atmosphere", meaning: "The envelope of gases around the Earth." },
        { term: "Biosphere", meaning: "The part of Earth where life exists." },
        { term: "Ozone layer", meaning: "A layer in the atmosphere that absorbs harmful ultraviolet rays." },
        { term: "Greenhouse effect", meaning: "Trapping of heat by certain gases in the atmosphere, which keeps Earth warm." },
        { term: "Crust", meaning: "The thin, solid outermost layer of the Earth." }
      ],
      qa: [
        { q: "Why is Earth suitable for life?", a: "It is at the right distance from the Sun, has liquid water, an atmosphere with oxygen and an ozone layer that shields from harmful rays." },
        { q: "What is the role of the ozone layer?", a: "It absorbs most of the harmful ultraviolet rays of the Sun, protecting living things from damage such as skin disease." },
        { q: "How can we reduce global warming?", a: "Burn less fossil fuel, use renewable energy like solar power, plant trees and avoid wasting energy." }
      ],
      quiz: [
        { q: "Which gas is present in the highest percentage in air?", options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Argon"], answer: 1, explain: "Nitrogen is about 78% of air; oxygen is about 21%." },
        { q: "The layer of Earth on which we live is the:", options: ["Mantle", "Core", "Crust", "Ozone"], answer: 2, explain: "The crust is the thin outermost solid layer." },
        { q: "The ozone layer protects us from:", options: ["Infrared heat", "Ultraviolet rays", "Sound", "Rain"], answer: 1, explain: "Ozone absorbs harmful ultraviolet radiation." },
        { q: "The part of Earth where life exists is the:", options: ["Lithosphere only", "Biosphere", "Core", "Stratosphere only"], answer: 1, explain: "The biosphere includes land, water and air where living things are found." },
        { q: "Global warming is mainly increased by too much:", options: ["Nitrogen", "Oxygen", "Carbon dioxide", "Helium"], answer: 2, explain: "Carbon dioxide traps heat and raises Earth's average temperature." },
        { q: "About how much of Earth's surface is covered by water?", options: ["About 29%", "About 50%", "About 71%", "About 95%"], answer: 2, explain: "Water covers about 71% of the surface and land about 29%." }
      ]
    }
  ]
});
