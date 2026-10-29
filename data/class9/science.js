StudyData.add(9, "science", {
  // What this content follows. match: "textbook" | "older-book" | "topic". Set reviewed to a date once a teacher has checked it.
  syllabus: {board: "CBSE", match: "textbook", books: ["Exploration: Textbook of Science for Grade 9"], note: "Follows the new NCERT Class 9 Science book (first edition, April 2026).", reviewed: false},
  chapters: [
    // ------------------------------------------------------------------
    {
      id: "exploration-entering-the-world-of-secondary-science",
      title: "Exploration: Entering the World of Secondary Science",
      section: "Introduction",
      summary: "An opening chapter on how science works at the secondary stage: using models, precise scientific language and units, laws and theories, testable predictions, estimation, and how the branches of science connect.",
      notes: [
        {
          heading: "Models and Simplification",
          points: [
            "A **model** is a simplified way of looking at a real system that keeps only what matters for the question being asked.",
            "Building a model means **deliberately ignoring** some details. This is not a mistake; it keeps the problem simple enough to solve.",
            "Cricket six: the ball's **mass, speed and direction** matter a lot; the bat's brand and ball's colour do not; air resistance and spin are small effects that a simple model can ignore.",
            "Models are improved by **adding more details** for greater accuracy. Meghnad Saha explained star colours by treating a star as a hot gas and focusing on temperature, pressure and ionisation."
          ]
        },
        {
          heading: "Language, Symbols and Units",
          points: [
            "Everyday words such as force, work, cell and reaction have **specific meanings** in science, so that ideas are communicated without confusion.",
            "Quantities have symbols (m, v, F, I) and defined units. **Standard (SI) units** make results comparable everywhere.",
            "A mix-up between pounds and kilograms once left an aircraft about 15 000 litres short of fuel, which shows why one set of units matters.",
            "Mathematics is a **language for thinking**: understand the situation first, identify the quantities, then use the relationship."
          ]
        },
        {
          heading: "Laws, Theories, Principles and Predictions",
          points: [
            "A **law** describes a regular pattern in nature (Newton's laws of motion). A **theory** explains *why* the pattern occurs (the atomic theory). A **principle** is a broad idea (conservation of energy).",
            "In science a theory is **not a guess**; it is an explanation tested against evidence and open to improvement.",
            "A scientific **prediction** is a reasoned expectation based on evidence. If it fails, scientists re-examine assumptions, models or measurements.",
            "A good testable prediction asks for **measurable data and past patterns** (humidity, wind, temperature), not just 'the clouds look dark'.",
            "Claims must be checked by asking simple scientific questions, e.g. nothing physical, chemical or biological makes food harmful during an eclipse."
          ]
        },
        {
          heading: "Estimation and Connected Science",
          points: [
            "Estimation steps: **understand the situation, identify the quantities, make a rough estimate** and check that the answer is sensible.",
            "Example: about 20 000 breaths a day × about 0.5 L per breath gives roughly 10 000 litres of air a day.",
            "Physics, chemistry, biology, earth science and mathematics are **connected**; real problems such as how a mask works need ideas from all of them.",
            "Science is a human activity built on curiosity, collaboration and careful questioning over many generations and cultures."
          ]
        }
      ],
      formulas: [
        "Estimated breaths per day ≈ 14 per min × 1440 min ≈ 20 000",
        "Speed of light c = 299 792 458 m s⁻¹ (defined exactly)",
        "Steps of estimation: understand → identify quantities → rough estimate → check sense"
      ],
      terms: [
        { term: "Model", meaning: "A **simplified representation** of a real system that keeps only the details important for a question." },
        { term: "Law", meaning: "A statement of a **regular pattern** observed in nature, often written as a mathematical relation." },
        { term: "Theory", meaning: "An **evidence-based explanation** of why a pattern occurs; it is not just a guess." },
        { term: "Prediction", meaning: "A **reasoned expectation** of what will happen, based on laws, theories or models." },
        { term: "Estimation", meaning: "Finding an **approximate value** quickly to check whether an answer is reasonable." }
      ],
      examples: [
        {
          q: "Estimate how many litres of air a person breathes in one day if they take about 14 breaths a minute and each breath is about 0.5 L.",
          steps: [
            "Minutes in a day = 60 × 24 = 1440",
            "Breaths in a day ≈ 14 × 1440 ≈ 20 000",
            "Air breathed ≈ 20 000 × 0.5 L"
          ],
          answer: "About 10 000 litres a day"
        }
      ],
      qa: [
        { q: "Why do scientists ignore some details while making a model?", a: "Real systems are too complex to study in full. Ignoring details that have little effect, such as air resistance in a simple falling-object model, keeps the problem manageable while still answering the question. Details can be added later for greater accuracy." },
        { q: "How is a scientific theory different from an everyday guess?", a: "A theory is an explanation of why a pattern occurs, built on evidence from careful testing and critical examination. A guess is untested. A theory can still be improved or replaced when new evidence arrives." },
        { q: "What should you do when a prediction does not match the observation?", a: "Scientists do not reject the idea by opinion. They re-examine the assumptions, the model and the measurements, and decide on the evidence. Such failures help science improve." }
      ],
      quiz: [
        {
          q: "Which detail would a simple model of a cricket ball hit for a six treat as important?",
          options: ["The brand of the bat", "The colour of the ball", "The speed and direction of the hit", "The amount of grass on the field"],
          answer: 2,
          explain: "Whether the ball clears the boundary depends mainly on its mass, speed and direction. Brand, colour and grass make no difference."
        },
        {
          q: "A statement that explains why a regular pattern in nature occurs is called a:",
          options: ["Law", "Theory", "Measurement", "Symbol"],
          answer: 1,
          explain: "A law describes the pattern; a theory goes further and explains why it occurs."
        },
        {
          q: "An aircraft ran short of fuel in a well-known incident mainly because of:",
          options: ["Air resistance being ignored", "A mix-up between pounds and kilograms", "A faulty speedometer", "Wrong estimation of the weather"],
          answer: 1,
          explain: "Fuel density was used in lb per litre instead of kg per litre, so far too little fuel was loaded."
        },
        {
          q: "Which is a scientifically testable form of the prediction 'it will rain because the clouds are dark'?",
          options: ["Is the sky dark today?", "Was the humidity above a measured value when it rained last time?", "Do you like the rain?", "Will it rain tomorrow as well?"],
          answer: 1,
          explain: "Questions that ask for measurable data and past patterns can be checked against evidence."
        },
        {
          q: "About how many litres of air does a person breathe in one day by the chapter's estimate?",
          options: ["About 100 L", "About 1000 L", "About 10 000 L", "About 10 lakh L"],
          answer: 2,
          explain: "About 20 000 breaths × about 0.5 L per breath gives roughly 10 000 L."
        },
        {
          q: "Why is the speed of light written as the symbol c?",
          options: ["It stands for 'cold'", "It comes from the Latin word celeritas, meaning speed", "It is the third letter after a and b used for constants", "It stands for 'current'"],
          answer: 1,
          explain: "Scientific symbols often come from history; c is from celeritas."
        }
      ]
    },
    // ------------------------------------------------------------------
    {
      id: "cell-the-building-block-of-life",
      title: "Cell: The Building Block of Life",
      section: "Biology",
      summary: "The cell is the basic structural and functional unit of life. The chapter compares prokaryotic and eukaryotic cells, studies the cell membrane, wall and organelles, osmosis and diffusion, and cell division by mitosis and meiosis, ending with cancer.",
      notes: [
        {
          heading: "Prokaryotic and Eukaryotic Cells",
          points: [
            "**Prokaryotic** cells (bacteria) have no well-defined nucleus; the genetic material lies in a region called the **nucleoid**, and there are no membrane-bound organelles.",
            "**Eukaryotic** cells (plants, animals, fungi) have a **membrane-bound nucleus** and organelles.",
            "Typical size: prokaryotic cells 1–10 μm; eukaryotic cells 10–100 μm. Prokaryotes are usually unicellular; eukaryotes can be unicellular or multicellular.",
            "Viruses, viroids and prions are **acellular** infectious agents, too small to see under a light microscope."
          ]
        },
        {
          heading: "Cell Membrane, Cell Wall and Transport",
          points: [
            "The **plasma membrane** surrounds every cell and is **selectively permeable**: it controls what enters and leaves.",
            "**Diffusion** is movement of particles from higher to lower concentration. **Osmosis** is the movement of water across a selectively permeable membrane.",
            "A **cell wall** lies outside the membrane in plants (cellulose), fungi (chitin) and bacteria. Animal cells have no cell wall.",
            "In concentrated sugar solution a plant cell loses water but keeps its shape because of the wall; the cell contents shrink away from the wall. An animal cell simply shrinks."
          ]
        },
        {
          heading: "Cell Organelles",
          points: [
            "**Nucleus**: has a double nuclear membrane with pores, a nucleolus (makes ribosomal subunits) and **chromosomes** of DNA and protein that carry hereditary information.",
            "**Mitochondria** release energy from food (the 'powerhouses'). **Ribosomes** make proteins. **Endoplasmic reticulum** and **Golgi apparatus** help in making, modifying and moving materials. **Lysosomes** digest waste.",
            "**Vacuoles** store materials and are large in plant cells.",
            "**Plastids** are found in plant cells: chloroplasts (green, photosynthesis), chromoplasts (coloured) and leucoplasts (colourless, storage)."
          ]
        },
        {
          heading: "Cell Division and Cancer",
          points: [
            "**Mitosis** produces two daughter cells identical to the parent cell; it is used for growth, repair and replacement.",
            "**Meiosis** is a two-step division that gives **four cells with half the chromosome number**; it forms gametes and creates variation.",
            "Normal cells divide in a controlled way, do their work and die. **Cancer cells** divide uncontrollably and form lumps called tumours."
          ]
        }
      ],
      formulas: [
        "Mitosis: 1 cell → 2 identical cells (same chromosome number)",
        "Meiosis: 1 cell → 4 cells (half the chromosome number)",
        "Prokaryotic cell: 1–10 μm; eukaryotic cell: 10–100 μm"
      ],
      terms: [
        { term: "Nucleoid", meaning: "The region of a prokaryotic cell that holds the genetic material, **without a membrane** around it." },
        { term: "Osmosis", meaning: "Movement of **water** through a selectively permeable membrane." },
        { term: "Mitochondria", meaning: "Organelles that **release energy** from food; the powerhouses of the cell." },
        { term: "Chloroplast", meaning: "A green plastid containing chlorophyll, where **photosynthesis** takes place." },
        { term: "Lysosome", meaning: "An organelle with enzymes that **digests** waste and worn-out material." },
        { term: "Meiosis", meaning: "Cell division giving **four cells with half the chromosome number**." }
      ],
      qa: [
        { q: "State four differences between prokaryotic and eukaryotic cells.", a: "Prokaryotic cells have a nucleoid, not a true nucleus; no membrane-bound organelles; are 1–10 μm in size; and are usually unicellular. Eukaryotic cells have a membrane-bound nucleus, membrane-bound organelles, are 10–100 μm and can be unicellular or multicellular." },
        { q: "Why does a plant cell not burst or shrink fully when placed in a concentrated sugar solution?", a: "The rigid cellulose cell wall keeps the shape of the cell. Water leaves by osmosis, so the cell membrane and contents pull away from the wall, but the overall cell shape is retained. An animal cell has no wall and shrinks." },
        { q: "Differentiate between mitosis and meiosis.", a: "Mitosis gives two daughter cells identical to the parent and is used in growth and repair. Meiosis is a two-step division giving four cells, each with half the chromosome number, and forms gametes." }
      ],
      quiz: [
        {
          q: "In a bacterial cell the genetic material is found in the:",
          options: ["Nucleus", "Nucleoid", "Nucleolus", "Mitochondrion"],
          answer: 1,
          explain: "Prokaryotes have no membrane-bound nucleus; their DNA lies in the nucleoid."
        },
        {
          q: "The cell wall of plant cells is mainly made of:",
          options: ["Chitin", "Protein", "Cellulose", "Starch"],
          answer: 2,
          explain: "Plant cell walls are made of cellulose; fungal walls are chitin."
        },
        {
          q: "Which organelle is mainly responsible for releasing energy from food?",
          options: ["Ribosome", "Lysosome", "Golgi apparatus", "Mitochondrion"],
          answer: 3,
          explain: "Mitochondria release the energy stored in food."
        },
        {
          q: "Meiosis in a cell with 46 chromosomes produces cells with:",
          options: ["46 chromosomes, 2 cells", "23 chromosomes, 4 cells", "23 chromosomes, 2 cells", "92 chromosomes, 4 cells"],
          answer: 1,
          explain: "Meiosis gives four cells, each with half the chromosome number (23)."
        },
        {
          q: "Which one is an acellular infectious agent?",
          options: ["Amoeba", "Yeast", "Virus", "Euglena"],
          answer: 2,
          explain: "Viruses, viroids and prions are acellular."
        },
        {
          q: "Uncontrolled division of cells that forms a tumour is a feature of:",
          options: ["Stem cells", "Cancer cells", "Gametes", "Red blood cells"],
          answer: 1,
          explain: "Cancer cells lose the control on division and keep dividing."
        }
      ]
    },
    // ------------------------------------------------------------------
    {
      id: "tissues-in-action",
      title: "Tissues in Action",
      section: "Biology",
      summary: "Cells of the same kind work together as tissues. The chapter covers plant meristematic and permanent tissues, the four animal tissues, the musculoskeletal system, types of joints and the skeleton, and totipotency of plant cells.",
      notes: [
        {
          heading: "Plant Tissues",
          points: [
            "Plant tissues are **meristematic** (dividing) or **permanent** (lost the ability to divide). Meristematic cells have thin walls, dense cytoplasm and a large nucleus.",
            "Meristems: **apical** (growth in length), **lateral** (growth in girth, e.g. cambium) and **intercalary** (regrowth, e.g. grass after cutting).",
            "Simple permanent tissues: **parenchyma** (storage, photosynthesis), **collenchyma** (flexible support), **sclerenchyma** (dead, hard support).",
            "Complex tissues: **xylem** carries water and minerals; **phloem** carries food. Epidermis protects the plant, and cork forms the bark.",
            "Annual rings in a tree trunk are formed by the lateral meristem; one ring forms each year."
          ]
        },
        {
          heading: "Animal Tissues",
          points: [
            "**Epithelial** tissue covers the body and lines organs. It is closely packed and often thin, allowing quick exchange in places like the lungs.",
            "**Connective** tissue (blood, bone, cartilage, tendons, ligaments, fat) connects and supports. Tendons join muscle to bone; ligaments join bone to bone.",
            "**Muscular** tissue (skeletal, smooth, cardiac) produces voluntary and involuntary movement. Cardiac muscle contracts without tiring.",
            "**Nervous** tissue is made of neurons that receive and carry impulses and help control body activities."
          ]
        },
        {
          heading: "Musculoskeletal System and Joints",
          points: [
            "Bones and muscles work together under control of the nervous system to produce movement; muscles pull on bones through tendons.",
            "**Ball-and-socket** joint (shoulder, hip) allows movement in all directions. **Hinge** joint (elbow, knee) allows movement in one plane. **Pivot** joint (neck) allows rotation.",
            "**Fixed** joints (skull) allow no movement. The skeleton gives shape, support and protection to organs such as the brain and heart."
          ]
        },
        {
          heading: "Totipotency and Tissue Culture",
          points: [
            "Some mature plant cells can undifferentiate, divide and redifferentiate into a whole new plant. This ability is **totipotency**.",
            "F. C. Steward grew whole carrot plants from single phloem cells in a nutrient medium, a basis of plant tissue culture.",
            "The bacterium *Agrobacterium tumefaciens*, which causes crown gall disease, is now used as a tool to introduce useful genes into plants."
          ]
        }
      ],
      formulas: [
        "Plant tissues: meristematic (apical, lateral, intercalary) and permanent (simple, complex)",
        "Animal tissues: epithelial, connective, muscular, nervous",
        "Tendon: muscle–bone; Ligament: bone–bone"
      ],
      terms: [
        { term: "Meristem", meaning: "Plant tissue whose cells **keep dividing** and cause growth." },
        { term: "Xylem", meaning: "Complex tissue that carries **water and minerals** from roots upwards." },
        { term: "Phloem", meaning: "Complex tissue that carries **food** from leaves to other parts." },
        { term: "Tendon", meaning: "Tough connective tissue that **joins muscle to bone**." },
        { term: "Totipotency", meaning: "Ability of a cell to **grow into a whole organism**." },
        { term: "Neuron", meaning: "The cell of nervous tissue that receives and **transmits impulses**." }
      ],
      qa: [
        { q: "Name the tissues responsible for transport in plants and state their functions.", a: "Xylem carries water and minerals from roots to the other parts. Phloem carries food prepared in the leaves to all parts of the plant. Both are complex permanent tissues." },
        { q: "Why are epithelial tissues lining internal organs only one or a few cells thick?", a: "A thin layer allows quick exchange of materials across it, as in the lungs and the lining of blood vessels, while still covering and protecting the surface." },
        { q: "Which type of joint is the elbow, and what movement does it allow?", a: "The elbow is a hinge joint. It allows bending and straightening in one plane only." }
      ],
      quiz: [
        {
          q: "Which tissue is responsible for an increase in the girth of a tree stem?",
          options: ["Apical meristem", "Intercalary meristem", "Lateral meristem", "Parenchyma"],
          answer: 2,
          explain: "The lateral meristem (cambium) adds new tissue and increases thickness."
        },
        {
          q: "If a plant cannot move food from its leaves to roots, which tissue is failing?",
          options: ["Xylem", "Phloem", "Epidermis", "Sclerenchyma"],
          answer: 1,
          explain: "Phloem transports food."
        },
        {
          q: "Tendons connect:",
          options: ["Bone to bone", "Muscle to bone", "Muscle to muscle", "Skin to muscle"],
          answer: 1,
          explain: "Tendons are tough connective tissue that transmit force from muscle to bone; ligaments join bone to bone."
        },
        {
          q: "The knee joint is an example of a:",
          options: ["Ball-and-socket joint", "Pivot joint", "Hinge joint", "Fixed joint"],
          answer: 2,
          explain: "Knee and elbow are hinge joints, with movement mostly in one plane."
        },
        {
          q: "Cells of which tissue can contract continuously without fatigue and are rich in mitochondria?",
          options: ["Smooth muscle", "Cardiac muscle", "Skeletal muscle", "Nervous tissue"],
          answer: 1,
          explain: "Cardiac muscle has many mitochondria and a rich blood supply, so it works without tiring."
        },
        {
          q: "Growth of a whole plant from a single carrot phloem cell shows:",
          options: ["Osmosis", "Totipotency", "Pollination", "Transpiration"],
          answer: 1,
          explain: "Totipotent cells can divide and redifferentiate into a whole organism."
        }
      ]
    },
    // ------------------------------------------------------------------
    {
      id: "describing-motion-around-us",
      title: "Describing Motion Around Us",
      section: "Physics",
      summary: "Motion is described using position, distance, displacement, speed, velocity and acceleration. The chapter uses position-time and velocity-time graphs, the three kinematic equations for constant acceleration, and introduces uniform circular motion.",
      notes: [
        {
          heading: "Position, Distance and Displacement",
          points: [
            "An object is in **motion** if its position with respect to a **reference point** changes with time.",
            "**Distance** is the total length of path travelled (scalar). **Displacement** is the net change in position, the straight-line shortest distance from start to end, with direction.",
            "Distance can be greater than the magnitude of displacement. Displacement can be **zero** even when the distance is not, e.g. a swimmer returning to the start."
          ]
        },
        {
          heading: "Speed, Velocity and Acceleration",
          points: [
            "**Average speed** = total distance ÷ time. **Average velocity** = displacement ÷ time. Both are measured in m s⁻¹.",
            "**Average acceleration** = change in velocity ÷ time interval; unit m s⁻². Acceleration is negative (retardation) when speed drops.",
            "An object accelerates if the **magnitude or the direction** of velocity changes. Freely falling objects have acceleration of about 9.8 m s⁻² downwards.",
            "Convert units: 1 km h⁻¹ = 5/18 m s⁻¹; 36 km h⁻¹ = 10 m s⁻¹."
          ]
        },
        {
          heading: "Graphs of Motion",
          points: [
            "In a **position-time graph** the slope gives velocity. A line parallel to the time axis means the object is at rest; a steeper line means a higher velocity.",
            "A straight sloping line means constant velocity; a curve means changing velocity. A curve that bends upward means increasing speed.",
            "In a **velocity-time graph** the slope gives acceleration and the area under the graph gives the displacement."
          ]
        },
        {
          heading: "Kinematic Equations",
          points: [
            "For straight-line motion with **constant acceleration**: v = u + at, s = ut + ½at², v² = u² + 2as.",
            "u = initial velocity, v = final velocity, a = acceleration, t = time, s = displacement.",
            "Braking distance grows with the square of the speed: doubling the speed from 54 km h⁻¹ to 108 km h⁻¹ makes the stopping distance 4 times larger (28.1 m to 112.5 m for a = –4 m s⁻²)."
          ]
        },
        {
          heading: "Uniform Circular Motion",
          points: [
            "Motion along a circle at **constant speed** is uniform circular motion.",
            "Although the speed is constant, the **direction of velocity keeps changing**, so the motion is accelerated.",
            "The velocity at any point is along the **tangent** to the circle. It is an idealised model of real motion such as planets orbiting the Sun."
          ]
        }
      ],
      formulas: [
        "Average speed = total distance / time taken",
        "Average velocity = displacement / time taken",
        "a = (v – u) / t",
        "v = u + at",
        "s = ut + ½at²",
        "v² = u² + 2as",
        "1 km h⁻¹ = 5/18 m s⁻¹"
      ],
      terms: [
        { term: "Displacement", meaning: "The **net change in position** of an object, with direction." },
        { term: "Average velocity", meaning: "**Displacement divided by the time interval**." },
        { term: "Acceleration", meaning: "Rate of **change of velocity** with time; unit m s⁻²." },
        { term: "Position-time graph", meaning: "A graph whose **slope gives velocity**." },
        { term: "Uniform circular motion", meaning: "Motion along a circle at **constant speed**, with continuously changing direction." }
      ],
      examples: [
        {
          q: "A car starts from rest and its velocity reaches 24 m s⁻¹ in 6 s. Find the average acceleration and the distance travelled in these 6 s.",
          steps: [
            "u = 0, v = 24 m s⁻¹, t = 6 s",
            "a = (v – u)/t = (24 – 0)/6 = 4 m s⁻²",
            "s = ut + ½at² = 0 + ½ × 4 × 6² = ½ × 4 × 36 = 72 m"
          ],
          answer: "a = 4 m s⁻², s = 72 m"
        },
        {
          q: "A car moving at 54 km h⁻¹ is braked with a = –4 m s⁻². How far does it travel before stopping?",
          steps: [
            "u = 54 km h⁻¹ = 54 × 5/18 = 15 m s⁻¹, v = 0",
            "v² = u² + 2as gives 0 = 15² + 2 × (–4) × s",
            "225 = 8s, so s = 28.1 m"
          ],
          answer: "About 28.1 m"
        }
      ],
      qa: [
        { q: "A swimmer swims 25 m to the end of a pool and back in 50 s. Find the average speed and average velocity.", a: "Total distance = 50 m, so average speed = 50 m / 50 s = 1 m s⁻¹. The swimmer ends where he started, so displacement = 0 and average velocity = 0 m s⁻¹." },
        { q: "Why is uniform circular motion an accelerated motion although the speed is constant?", a: "Acceleration is present when the velocity changes in magnitude or direction. In uniform circular motion the direction of velocity changes continuously, so the velocity changes and the motion is accelerated." },
        { q: "What does the slope of a position-time graph tell us?", a: "The slope equals displacement divided by time, which is the velocity. A steeper line means greater velocity and a horizontal line means the object is at rest." }
      ],
      quiz: [
        {
          q: "A boy walks 250 m to a shop and returns home. His displacement is:",
          options: ["500 m", "250 m", "125 m", "0 m"],
          answer: 3,
          explain: "He ends at the starting point, so the net change of position is zero."
        },
        {
          q: "Convert 72 km h⁻¹ into m s⁻¹.",
          options: ["10", "20", "25", "72"],
          answer: 1,
          explain: "72 × 5/18 = 20 m s⁻¹."
        },
        {
          q: "A horizontal line on a position-time graph represents an object that is:",
          options: ["Moving with constant velocity", "Accelerating uniformly", "At rest", "Moving in a circle"],
          answer: 2,
          explain: "The position does not change with time, so the object is at rest."
        },
        {
          q: "A bus changes its velocity from 10 m s⁻¹ to 15 m s⁻¹ in 10 s. Its average acceleration is:",
          options: ["0.5 m s⁻²", "1.5 m s⁻²", "5 m s⁻²", "2 m s⁻²"],
          answer: 0,
          explain: "a = (15 – 10)/10 = 0.5 m s⁻²."
        },
        {
          q: "A motorbike with initial velocity 28 m s⁻¹ and constant retardation stops in 98 m. Its acceleration is:",
          options: ["–2 m s⁻²", "–4 m s⁻²", "–8 m s⁻²", "–14 m s⁻²"],
          answer: 1,
          explain: "0 = 28² + 2a × 98 gives a = –784/196 = –4 m s⁻²."
        },
        {
          q: "In uniform circular motion, which quantity stays constant?",
          options: ["Velocity", "Direction of motion", "Acceleration direction", "Speed"],
          answer: 3,
          explain: "Speed is constant but the direction of velocity keeps changing."
        }
      ]
    },
    // ------------------------------------------------------------------
    {
      id: "exploring-mixtures-and-their-separation",
      title: "Exploring Mixtures and their Separation",
      section: "Chemistry",
      summary: "Mixtures are classified as homogeneous or heterogeneous, and as solutions, suspensions or colloids. The chapter covers concentration of solutions, solubility, and methods such as crystallisation, distillation, chromatography, sublimation, centrifugation and coagulation, plus the Tyndall effect.",
      notes: [
        {
          heading: "Types of Mixtures and Solutions",
          points: [
            "A **homogeneous** mixture has uniform composition (salt in water); a **heterogeneous** mixture does not (sand in water).",
            "**Solution**: particles are very small, invisible, do not settle, pass through filter paper and do **not scatter light**.",
            "**Suspension**: large visible particles that settle on standing, can be filtered and scatter light.",
            "**Colloid**: intermediate particle size (milk, blood, fog); stable, does not settle, cannot be filtered, and **scatters light (Tyndall effect)**."
          ]
        },
        {
          heading: "Concentration and Solubility",
          points: [
            "**Mass by mass %** = (mass of solute ÷ mass of solution) × 100. **Mass by volume %** = (mass of solute in g ÷ volume of solution in mL) × 100.",
            "**Volume by volume %** = (volume of solute ÷ volume of solution) × 100; used for two miscible liquids such as vinegar.",
            "Mass of solution = mass of solute + mass of solvent (not just the solvent).",
            "**Solubility** is the maximum amount of solute that dissolves in a given amount of solvent at a given temperature, giving a saturated solution."
          ]
        },
        {
          heading: "Separating Homogeneous Mixtures",
          points: [
            "**Crystallisation** gives pure solid crystals from a saturated solution on cooling.",
            "**Distillation** separates two miscible liquids whose boiling points differ by at least about **25 °C**, or a liquid from a dissolved solid.",
            "**Paper chromatography** separates substances because they move at different rates on paper, e.g. dyes in ink.",
            "A **separating funnel** separates two immiscible liquids (oil and water) on the basis of different densities."
          ]
        },
        {
          heading: "Separating Heterogeneous Mixtures",
          points: [
            "**Sublimation** is a solid changing straight to vapour; the reverse is **deposition**. It separates camphor, ammonium chloride or naphthalene from sand.",
            "**Centrifugation** spins a mixture quickly so that heavier particles settle (separating cream from milk, or blood components).",
            "**Coagulation** adds a coagulant such as alum so tiny particles clump and settle; used in water purification.",
            "Sewage treatment uses sedimentation, coagulation and filtration. Dry waste can be recycled and wet waste composted."
          ]
        }
      ],
      formulas: [
        "Mass by mass % = (mass of solute / mass of solution) × 100",
        "Mass by volume % = (mass of solute in g / volume of solution in mL) × 100",
        "Volume by volume % = (volume of solute / volume of solution) × 100",
        "Mass of solution = mass of solute + mass of solvent"
      ],
      terms: [
        { term: "Colloid", meaning: "A mixture with particles of **intermediate size** that do not settle but scatter light." },
        { term: "Tyndall effect", meaning: "**Scattering of light** by particles of a colloid or suspension, making the beam visible." },
        { term: "Saturated solution", meaning: "A solution that **cannot dissolve any more solute** at that temperature." },
        { term: "Sublimation", meaning: "A solid changing **directly into vapour** without becoming liquid." },
        { term: "Coagulation", meaning: "Clumping of small particles by a **coagulant** so that they settle down." },
        { term: "Chromatography", meaning: "Separating components by their **different rates of movement** on a paper or other medium." }
      ],
      examples: [
        {
          q: "10 g of salt is dissolved in 90 g of water. Find the mass by mass percentage of the solution.",
          steps: [
            "Mass of solution = 10 g + 90 g = 100 g",
            "Mass % = (10 / 100) × 100"
          ],
          answer: "10 % m/m"
        },
        {
          q: "A talcum powder contains 4 % m/m zinc oxide. How much zinc oxide is present in 300 g of the powder?",
          steps: [
            "Zinc oxide = 4 % of 300 g",
            "= (4 / 100) × 300 = 12 g"
          ],
          answer: "12 g"
        }
      ],
      qa: [
        { q: "How would you show that milk is a colloid and not a true solution?", a: "Pass a beam of light through milk in a dark room. The beam is visible because the colloidal particles scatter light (Tyndall effect). A true solution such as salt water does not scatter light." },
        { q: "Which method would you use to separate a mixture of two miscible liquids and what is the condition?", a: "Distillation. It works when the boiling points of the liquids differ by at least about 25 °C; the liquid with the lower boiling point evaporates first and is condensed and collected." },
        { q: "Why does a 5 % glucose solution use the mass by volume percentage?", a: "For liquids and medicines it is easier to measure the volume than the mass. 5 % m/v means 5 g glucose in 100 mL of solution." }
      ],
      quiz: [
        {
          q: "Which of these shows the Tyndall effect?",
          options: ["Sugar solution", "Salt solution", "Milk", "Clear tap water"],
          answer: 2,
          explain: "Milk is a colloid, so its particles scatter light."
        },
        {
          q: "Two immiscible liquids such as oil and water are separated using a:",
          options: ["Distillation flask", "Separating funnel", "Centrifuge", "Filter paper"],
          answer: 1,
          explain: "The liquids form layers by density and are drained one at a time."
        },
        {
          q: "5 g of glucose is dissolved in water to make 100 mL of solution. Its mass by volume percentage is:",
          options: ["0.5 %", "5 %", "20 %", "95 %"],
          answer: 1,
          explain: "(5 g / 100 mL) × 100 = 5 %."
        },
        {
          q: "The particles of a suspension:",
          options: ["Pass through filter paper and never settle", "Are invisible and do not scatter light", "Settle on standing and can be filtered", "Are the same size as solution particles"],
          answer: 2,
          explain: "Suspension particles are large enough to settle and be filtered out."
        },
        {
          q: "Camphor can be separated from a mixture with sand by:",
          options: ["Sublimation", "Chromatography", "Crystallisation", "Decantation"],
          answer: 0,
          explain: "Camphor sublimes on heating, leaving the sand behind."
        },
        {
          q: "The minimum difference in boiling points needed to separate two miscible liquids by simple distillation is about:",
          options: ["5 °C", "10 °C", "25 °C", "100 °C"],
          answer: 2,
          explain: "The chapter gives a minimum of about 25 °C."
        }
      ]
    },
    // ------------------------------------------------------------------
    {
      id: "how-forces-affect-motion",
      title: "How Forces Affect Motion",
      section: "Physics",
      summary: "Forces change the motion of objects. The chapter covers balanced and unbalanced forces, friction, Newton's three laws of motion, F = ma, weight and mass, and how to treat connected objects as a system.",
      notes: [
        {
          heading: "Force, Balanced and Unbalanced Forces",
          points: [
            "A **force** can start motion, stop it, or change the speed or direction. Its SI unit is the **newton (N)**.",
            "Forces in the same direction add up; in opposite directions you subtract (10 N and 6 N give 16 N or 4 N).",
            "If the net force is **zero** the forces are balanced and the motion does not change. A non-zero net force is unbalanced and produces acceleration.",
            "Weight is the gravitational force on an object: **W = mg**, with g = 9.8 m s⁻². The surface pushes back with a **normal force**."
          ]
        },
        {
          heading: "Friction",
          points: [
            "**Friction** acts between surfaces in contact and opposes the (attempted) motion.",
            "A block does not move until the applied force exceeds the **maximum friction**; if the push equals friction, the net force is zero.",
            "If a push equals friction on a moving box, the box continues at **constant velocity**."
          ]
        },
        {
          heading: "Newton's First and Second Laws",
          points: [
            "**First law**: an object stays at rest or in uniform motion in a straight line unless an unbalanced external force acts on it. This tendency is **inertia**, and it is larger for a more massive object.",
            "No net force means the position-time graph is a horizontal or straight sloping line, and the velocity-time graph is a horizontal line.",
            "**Second law**: the acceleration of an object is directly proportional to the net force and inversely proportional to its mass, **F = ma**.",
            "1 N is the force that gives a 1 kg mass an acceleration of 1 m s⁻²."
          ]
        },
        {
          heading: "Newton's Third Law and Systems",
          points: [
            "**Third law**: when A exerts a force on B, B exerts an **equal and opposite force on A**. The two forces act on different objects.",
            "A gun and a bullet feel the same force, yet the lighter bullet gets a much larger acceleration (20 m s⁻² against 0.4 m s⁻² for a 2 N force, 0.1 kg and 5 kg).",
            "For connected objects treat them as one **system**: a = F/(m₁ + m₂). Internal forces such as tension are ignored; only external forces matter."
          ]
        }
      ],
      formulas: [
        "F = ma",
        "W = mg (g = 9.8 m s⁻² on Earth)",
        "1 N = 1 kg m s⁻²",
        "For a system of two connected bodies: a = F / (m₁ + m₂)"
      ],
      terms: [
        { term: "Inertia", meaning: "The **tendency of an object to resist a change** in its state of rest or motion." },
        { term: "Net force", meaning: "The **sum of all forces** acting on an object, taking directions into account." },
        { term: "Friction", meaning: "A force between surfaces in contact that **opposes motion**." },
        { term: "Normal force", meaning: "The **push of a surface** on an object resting on it, perpendicular to the surface." },
        { term: "Newton (N)", meaning: "The SI unit of force: the force that gives **1 kg an acceleration of 1 m s⁻²**." },
        { term: "System", meaning: "A group of objects treated together, so that **internal forces are ignored**." }
      ],
      examples: [
        {
          q: "A student pushes a stationary 25 kg block with a constant force of 55 N. The maximum friction is 50 N. Find the displacement of the block in 2 s.",
          steps: [
            "Net force = 55 N – 50 N = 5 N",
            "a = F/m = 5 / 25 = 0.2 m s⁻²",
            "s = ut + ½at² = 0 + ½ × 0.2 × 2² = 0.4 m"
          ],
          answer: "Displacement = 0.4 m. (With a 50 N push the block would not move.)"
        },
        {
          q: "What force must a weightlifter apply to hold a barbell of total mass 30 kg steady? (g = 9.8 m s⁻²)",
          steps: [
            "Weight = mg = 30 × 9.8 = 294 N downwards",
            "To keep it steady she applies an equal and opposite force"
          ],
          answer: "294 N upwards"
        }
      ],
      qa: [
        { q: "A person pushes a moving box with a force equal to the friction. Will the box stop? Explain.", a: "No. The push and friction are equal and opposite, so the net force is zero. By Newton's first law the box continues to move with constant velocity." },
        { q: "State Newton's third law. Why do the two forces not cancel each other?", a: "When one object exerts a force on a second, the second exerts an equal and opposite force on the first. The forces act on different objects, so they cannot cancel." },
        { q: "A gun fires a bullet. The force on both is equal, but their accelerations differ. Why?", a: "By F = ma, acceleration = force/mass. The bullet has much smaller mass than the gun, so it gets a much larger acceleration." }
      ],
      quiz: [
        {
          q: "Two forces of 10 N and 6 N act in opposite directions on a block. The net force is:",
          options: ["16 N", "4 N", "60 N", "0 N"],
          answer: 1,
          explain: "Opposite forces subtract: 10 – 6 = 4 N in the direction of the larger force."
        },
        {
          q: "The weight of a 5 kg object on Earth (g = 9.8 m s⁻²) is:",
          options: ["5 N", "9.8 N", "49 N", "0.51 N"],
          answer: 2,
          explain: "W = mg = 5 × 9.8 = 49 N."
        },
        {
          q: "A force of 20 N acts on a 4 kg object on a smooth surface. Its acceleration is:",
          options: ["80 m s⁻²", "5 m s⁻²", "0.2 m s⁻²", "16 m s⁻²"],
          answer: 1,
          explain: "a = F/m = 20/4 = 5 m s⁻²."
        },
        {
          q: "When a bus suddenly stops, passengers lurch forward because of:",
          options: ["Friction", "Inertia", "Weight", "Normal force"],
          answer: 1,
          explain: "Their bodies tend to continue in the state of motion (first law)."
        },
        {
          q: "Two boxes of 3 kg and 2 kg joined by a string are pulled on a frictionless surface by a 10 N force. The acceleration is:",
          options: ["10 m s⁻²", "5 m s⁻²", "2 m s⁻²", "3.3 m s⁻²"],
          answer: 2,
          explain: "Treat them as a system: a = 10/(3 + 2) = 2 m s⁻²."
        },
        {
          q: "The action and reaction forces of Newton's third law:",
          options: ["Act on the same object", "Are unequal in magnitude", "Act on different objects", "Act in the same direction"],
          answer: 2,
          explain: "They are equal and opposite and act on the two different interacting objects."
        }
      ]
    },
    // ------------------------------------------------------------------
    {
      id: "work-energy-and-simple-machines",
      title: "Work, Energy, and Simple Machines",
      section: "Physics",
      summary: "Work is done when a force produces displacement. The chapter covers positive and negative work, the work-energy theorem, kinetic and potential energy, conservation of mechanical energy, power and the pulley, inclined plane and lever.",
      notes: [
        {
          heading: "Work Done by a Force",
          points: [
            "Work done by a constant force = **force × displacement in the direction of the force**. SI unit **joule (J)**; 1 J = 1 N m.",
            "Work is **zero** if there is no displacement (holding a weight steady) or if the force is perpendicular to the displacement.",
            "Work is **positive** when force and displacement are in the same direction, **negative** when they are opposite (a goalkeeper stopping a ball: 200 N × (–0.15 m) = –30 J)."
          ]
        },
        {
          heading: "Energy and the Work-Energy Theorem",
          points: [
            "**Energy** is the capacity to do work, measured in joules. It changes from one form to another.",
            "**Work-energy theorem**: the work done on an object equals the **change in its kinetic energy**.",
            "**Kinetic energy** K = ½mv². Doubling the velocity makes kinetic energy **four times** larger.",
            "**Gravitational potential energy** U = mgh."
          ]
        },
        {
          heading: "Conservation of Mechanical Energy and Power",
          points: [
            "Mechanical energy = kinetic + potential. For a freely falling object it stays constant: potential energy changes into kinetic energy.",
            "**Power** is the rate of doing work: P = W/t. SI unit **watt (W)** = 1 J s⁻¹. 1 horsepower = 746 W.",
            "For the same work, doing it in less time needs more power."
          ]
        },
        {
          heading: "Simple Machines",
          points: [
            "Simple machines make work easier by changing the magnitude or direction of the force. **Mechanical advantage** = load ÷ effort.",
            "A **fixed pulley** changes the direction of the effort only (MA = 1); a movable pulley or a system of pulleys has MA greater than 1.",
            "An **inclined plane** needs a smaller force when it is less steep, but the force acts over a longer distance.",
            "**Lever**: effort × effort arm = load × load arm. Class I has the fulcrum between (scissors, seesaw), Class II the load between (wheelbarrow), Class III the effort between (tweezers).",
            "A machine cannot create energy; the work put in equals the useful work (ignoring friction)."
          ]
        }
      ],
      formulas: [
        "W = F × s (force along displacement)",
        "K = ½mv²",
        "U = mgh",
        "Work done = change in kinetic energy",
        "P = W / t",
        "Mechanical advantage = load / effort",
        "Lever balance: effort × effort arm = load × load arm",
        "1 hp = 746 W"
      ],
      terms: [
        { term: "Joule", meaning: "SI unit of work and energy: **work done by 1 N force through 1 m**." },
        { term: "Kinetic energy", meaning: "Energy due to **motion**: ½mv²." },
        { term: "Potential energy", meaning: "Stored energy due to **position or condition**; gravitational U = mgh." },
        { term: "Power", meaning: "**Rate of doing work**; unit watt." },
        { term: "Mechanical advantage", meaning: "The ratio **load ÷ effort** of a machine." },
        { term: "Fulcrum", meaning: "The fixed **pivot point** about which a lever turns." }
      ],
      examples: [
        {
          q: "A cricket ball of mass 0.2 kg is bowled at 154.8 km h⁻¹. Find its kinetic energy.",
          steps: [
            "v = 154.8 × 5/18 = 43 m s⁻¹",
            "K = ½mv² = ½ × 0.2 × 43² = 0.1 × 1849"
          ],
          answer: "K = 184.9 J (about 185 J)"
        },
        {
          q: "A weightlifter lifts a 75 kg mass by 2 m in 5 s. Find the power. (g = 10 m s⁻²)",
          steps: [
            "Work = mgh = 75 × 10 × 2 = 1500 J",
            "P = W/t = 1500 / 5"
          ],
          answer: "P = 300 W"
        }
      ],
      qa: [
        { q: "A 15 000 kg aircraft is stopped in 100 m by a constant force of 367 500 N. Find its speed before stopping.", a: "Work done by the wire = 367 500 × 100 = 3.675 × 10⁷ J = loss of kinetic energy = ½ × 15 000 × v². So v² = 3.675 × 10⁷ / 7500 = 4900 and v = 70 m s⁻¹." },
        { q: "Why does a fixed pulley make work easier although its mechanical advantage is 1?", a: "It changes the direction of the effort. It is easier to pull down (using body weight) than to lift a load upwards directly, though the effort equals the load." },
        { q: "Where should a 30 kg child sit to balance a 15 kg child sitting 2 m from the fulcrum of a seesaw?", a: "15 × 2 = 30 × L, so L = 1 m from the fulcrum." }
      ],
      quiz: [
        {
          q: "A person holds a heavy load steady for a minute. The work done on the load is:",
          options: ["Positive", "Negative", "Zero", "Equal to its weight"],
          answer: 2,
          explain: "There is no displacement, so no work is done."
        },
        {
          q: "If the speed of a car doubles, its kinetic energy becomes:",
          options: ["The same", "Double", "Three times", "Four times"],
          answer: 3,
          explain: "K = ½mv², so doubling v multiplies K by 4."
        },
        {
          q: "The potential energy of a 0.2 kg ball at 10 m height (g = 10 m s⁻²) is:",
          options: ["2 J", "20 J", "200 J", "0.02 J"],
          answer: 1,
          explain: "U = mgh = 0.2 × 10 × 10 = 20 J."
        },
        {
          q: "A machine does 600 J of work in 20 s. Its power is:",
          options: ["30 W", "12 000 W", "0.03 W", "580 W"],
          answer: 0,
          explain: "P = 600/20 = 30 W."
        },
        {
          q: "A wheelbarrow is a lever in which the:",
          options: ["Fulcrum is between effort and load", "Load is between fulcrum and effort", "Effort is between fulcrum and load", "Fulcrum is at the effort"],
          answer: 1,
          explain: "In a wheelbarrow the load lies between the wheel (fulcrum) and the effort at the handles: Class II."
        },
        {
          q: "A load of 500 N is raised with an effort of 100 N. The mechanical advantage is:",
          options: ["0.2", "5", "50", "400"],
          answer: 1,
          explain: "MA = load / effort = 500/100 = 5."
        }
      ]
    },
    // ------------------------------------------------------------------
    {
      id: "journey-inside-the-atom",
      title: "Journey Inside the Atom",
      section: "Chemistry",
      summary: "The idea of the atom has developed from Dalton to the modern model. The chapter covers Thomson's and Rutherford's models, Bohr's energy levels, the neutron, atomic and mass number, electronic configuration, valency, isotopes and isobars.",
      notes: [
        {
          heading: "Atomic Models",
          points: [
            "**Thomson**: electrons embedded in a positively charged sphere. **Rutherford** tested this with the **gold foil (α-ray scattering) experiment** in 1911.",
            "Observations: most α-particles passed straight, some were deflected at large angles, and a few bounced back. So an atom is **mostly empty space** with a small, dense, positive **nucleus**.",
            "Rutherford's planetary model: electrons revolve around the nucleus. Atom diameter ≈ 10⁻¹⁰ m, nucleus ≈ 10⁻¹⁵ m (about 10⁵ times smaller).",
            "**Bohr** proposed electrons move in fixed energy levels (shells K, L, M, N…), which explains the stability of atoms. **Chadwick** discovered the neutron in 1932."
          ]
        },
        {
          heading: "Subatomic Particles, Atomic and Mass Number",
          points: [
            "An atom contains **protons** (positive), **neutrons** (neutral) and **electrons** (negative). An atom is neutral overall.",
            "**Atomic number Z** = number of protons (= number of electrons in a neutral atom).",
            "**Mass number A** = protons + neutrons (nucleons). Number of neutrons = A – Z.",
            "Atomic masses are measured in the unified atomic mass unit (**u**)."
          ]
        },
        {
          heading: "Electronic Configuration and Valency",
          points: [
            "Maximum electrons in a shell = **2n²**: K = 2, L = 8, M = 18. The outermost shell holds at most 8, and shells fill in the order K, L, M…",
            "A full outer shell (an octet, or 2 for helium) makes an atom stable and largely unreactive.",
            "**Valency** is the combining capacity of an atom: the number of electrons it gains, loses or shares to reach a stable configuration.",
            "Examples: Na (2, 8, 1) valency 1; Mg (2, 8, 2) valency 2; Cl (2, 8, 7) valency 1; Ne (2, 8) valency 0."
          ]
        },
        {
          heading: "Isotopes and Isobars",
          points: [
            "**Isotopes**: atoms of the same element with the same atomic number but different mass numbers, e.g. hydrogen's protium, deuterium and tritium; carbon-12, -13 and -14.",
            "Isotopes have the **same chemical properties** (same electrons) but different physical properties.",
            "**Isobars**: atoms of different elements with the same mass number, e.g. ⁴⁰Ca and ⁴⁰Ar.",
            "Average atomic mass is found from the relative abundance of isotopes: chlorine (75 % ³⁵Cl, 25 % ³⁷Cl) = 35.5 u.",
            "Uses: uranium-235 as nuclear fuel; cobalt-60 in cancer treatment."
          ]
        }
      ],
      formulas: [
        "Atomic number (Z) = number of protons",
        "Mass number (A) = protons + neutrons",
        "Number of neutrons = A – Z",
        "Maximum electrons in nth shell = 2n²",
        "Average atomic mass = Σ (isotopic mass × fractional abundance)"
      ],
      terms: [
        { term: "Nucleus", meaning: "The tiny, dense, **positively charged centre** of an atom holding protons and neutrons." },
        { term: "Atomic number", meaning: "The **number of protons** in the nucleus of an atom." },
        { term: "Mass number", meaning: "The **total number of protons and neutrons** in an atom." },
        { term: "Valency", meaning: "The **combining capacity** of an atom." },
        { term: "Isotopes", meaning: "Atoms of the same element with **same atomic number but different mass number**." },
        { term: "Isobars", meaning: "Atoms of different elements with the **same mass number**." }
      ],
      examples: [
        {
          q: "Find the number of protons, neutrons and electrons and the electronic configuration of ²³₁₁Na.",
          steps: [
            "Z = 11, so protons = 11 and electrons = 11",
            "Neutrons = A – Z = 23 – 11 = 12",
            "Electrons fill K (2), L (8), then M (1)"
          ],
          answer: "11 protons, 12 neutrons, 11 electrons; configuration 2, 8, 1"
        },
        {
          q: "Chlorine has two isotopes, ³⁵Cl (75 %) and ³⁷Cl (25 %). Find its average atomic mass.",
          steps: [
            "Average = (35 × 0.75) + (37 × 0.25)",
            "= 26.25 + 9.25"
          ],
          answer: "35.5 u"
        }
      ],
      qa: [
        { q: "What did Rutherford conclude from the gold foil experiment?", a: "Most α-particles passed straight through, so most of the atom is empty space. A few deflected through large angles, and some bounced back, so the positive charge and most of the mass are concentrated in a very small, dense nucleus. Electrons revolve around it." },
        { q: "Why do isotopes of an element have the same chemical properties?", a: "Chemical properties depend on the number of electrons, especially valence electrons. Isotopes have the same number of protons, hence the same electrons and electronic configuration, but differ only in neutrons." },
        { q: "Write the electronic configuration of chlorine (Z = 17) and its valency.", a: "Configuration 2, 8, 7. It needs one electron to complete its octet, so its valency is 1." }
      ],
      quiz: [
        {
          q: "In Rutherford's experiment a few α-particles bounced back. This showed that:",
          options: ["Electrons are heavy", "The atom is neutral", "The atom has a small dense positive nucleus", "Neutrons are present"],
          answer: 2,
          explain: "Only a very small, heavy, positively charged centre could repel α-particles back."
        },
        {
          q: "An atom has 17 protons and 18 neutrons. Its mass number is:",
          options: ["17", "18", "1", "35"],
          answer: 3,
          explain: "A = 17 + 18 = 35."
        },
        {
          q: "The maximum number of electrons in the M shell is:",
          options: ["8", "18", "32", "2"],
          answer: 1,
          explain: "2n² with n = 3 gives 18."
        },
        {
          q: "The valency of magnesium (2, 8, 2) is:",
          options: ["1", "8", "2", "10"],
          answer: 2,
          explain: "It loses 2 electrons to get a stable octet."
        },
        {
          q: "Who discovered the neutron?",
          options: ["Thomson", "Chadwick", "Bohr", "Dalton"],
          answer: 1,
          explain: "James Chadwick discovered it in 1932."
        },
        {
          q: "Calcium (Z = 20, A = 40) and argon (Z = 18, A = 40) are examples of:",
          options: ["Isotopes", "Isobars", "Isotones", "Allotropes"],
          answer: 1,
          explain: "Different elements with the same mass number are isobars."
        }
      ]
    },
    // ------------------------------------------------------------------
    {
      id: "atomic-foundations-of-matter",
      title: "Atomic Foundations of Matter",
      section: "Chemistry",
      summary: "How atoms combine to make matter. The chapter covers the laws of conservation of mass and definite proportions, Dalton's atomic theory, covalent and ionic bonding, writing chemical formulae, properties of ionic and covalent compounds, and molecular and formula unit mass.",
      notes: [
        {
          heading: "Laws of Chemical Combination",
          points: [
            "**Law of conservation of mass** (Lavoisier): mass is neither created nor destroyed in a chemical reaction; total mass of reactants equals total mass of products.",
            "**Law of definite (constant) proportions** (Proust): a compound always contains the same elements in a fixed ratio by mass, whatever its source. Water is always 1 : 8 hydrogen to oxygen by mass.",
            "The law holds for compounds, not for mixtures, whose composition can vary.",
            "Example: 12 g carbon combines with 32 g oxygen to give 44 g carbon dioxide, so 2.4 g of carbon gives 8.8 g CO₂."
          ]
        },
        {
          heading: "Dalton's Atomic Theory and Molecules",
          points: [
            "Matter is made of tiny **atoms**; atoms of an element are alike in mass; atoms combine in simple whole-number ratios to form compounds; atoms are neither created nor destroyed in a reaction.",
            "These ideas explain both laws above. Later work showed atoms are divisible and isotopes exist, so the theory was refined.",
            "A **molecule** is an electrically neutral entity of more than one atom that can exist independently and shows the chemical properties of the substance.",
            "Atoms combine to become stable; the force holding them is a **chemical bond**."
          ]
        },
        {
          heading: "Covalent and Ionic Bonds",
          points: [
            "**Covalent bond**: atoms **share** electrons (H₂, O₂, H₂O, CO₂, CH₄). Non-metal atoms combine this way to form molecules.",
            "**Ionic bond**: electrons are **transferred**. The atom losing electrons becomes a positive **cation**, the one gaining becomes a negative **anion**; oppositely charged ions attract. Example: Na⁺ and Cl⁻ in NaCl.",
            "Ionic compounds form 3-D crystals of ions, not molecules, so we speak of a **formula unit**.",
            "Ionic compounds: usually high melting point, hard and brittle, soluble in water, conduct electricity when molten or dissolved. Covalent compounds: usually low melting point, often insoluble in water, poor conductors."
          ]
        },
        {
          heading: "Writing Formulae and Calculating Mass",
          points: [
            "To write a formula, write the symbols, put the valency (or charge) of each, then **criss-cross** the valencies and simplify. Al³⁺ and SO₄²⁻ give Al₂(SO₄)₃.",
            "**Molecular mass** = sum of the atomic masses of all atoms in a molecule: H₂O = 18 u; CO₂ = 44 u.",
            "**Formula unit mass** (ionic compounds) = sum of atomic masses in the formula unit: Na₂O = 62 u; Ca(NO₃)₂ = 164 u.",
            "Atomic masses used: H = 1, C = 12, N = 14, O = 16, Na = 23, Mg = 24, Ca = 40, Cl = 35.5 u."
          ]
        }
      ],
      formulas: [
        "Mass of reactants = mass of products",
        "Water: H : O = 1 : 8 by mass",
        "Molecular mass of H₂O = (1 × 2) + 16 = 18 u",
        "Molecular mass of CO₂ = 12 + (16 × 2) = 44 u",
        "Formula unit mass of Na₂O = (23 × 2) + 16 = 62 u",
        "Formula unit mass of Ca(NO₃)₂ = 40 + 2 × (14 + 48) = 164 u"
      ],
      terms: [
        { term: "Law of conservation of mass", meaning: "In a chemical reaction **total mass stays constant**." },
        { term: "Law of definite proportions", meaning: "A compound has its elements in a **fixed mass ratio**." },
        { term: "Covalent bond", meaning: "A bond formed by **sharing of electrons** between atoms." },
        { term: "Ionic bond", meaning: "A bond formed by **transfer of electrons**, giving cations and anions." },
        { term: "Molecular mass", meaning: "The **sum of atomic masses** of atoms in a molecule." },
        { term: "Formula unit", meaning: "The **simplest whole-number ratio of ions** in an ionic compound." }
      ],
      examples: [
        {
          q: "Sodium chloride has sodium and chlorine in the mass ratio 23 : 35.5. How much chlorine is needed to react completely with 46 g of sodium?",
          steps: [
            "46 g is 46 / 23 = 2 times the ratio quantity of sodium",
            "Chlorine = 2 × 35.5 g"
          ],
          answer: "71 g of chlorine"
        },
        {
          q: "Find the formula unit mass of calcium nitrate, Ca(NO₃)₂. (Ca = 40, N = 14, O = 16 u)",
          steps: [
            "NO₃ group = 14 + 3 × 16 = 62 u",
            "Two NO₃ groups = 124 u",
            "Total = 40 + 124"
          ],
          answer: "164 u"
        }
      ],
      qa: [
        { q: "Carbon monoxide has carbon and oxygen in the mass ratio 3 : 4. How much oxygen combines with 9 g of carbon?", a: "9 g is 3 times 3 g, so oxygen = 3 × 4 = 12 g." },
        { q: "Distinguish between ionic and covalent bonds with one example each.", a: "In a covalent bond atoms share electrons, as in H₂O. In an ionic bond one atom transfers electrons to another, forming oppositely charged ions that attract, as in NaCl (Na⁺ and Cl⁻)." },
        { q: "Why does the Law of Definite Proportions hold for compounds but not for mixtures?", a: "A compound has its elements chemically combined in a fixed ratio. A mixture is just a physical combination, so its components can be present in any proportion." }
      ],
      quiz: [
        {
          q: "4.0 g of CaCO₃ and 2.92 g of HCl react to give 1.76 g CO₂, 0.72 g water and some CaCl₂. For the law of conservation of mass the CaCl₂ formed is:",
          options: ["4.44 g", "6.92 g", "2.20 g", "5.44 g"],
          answer: 0,
          explain: "Total reactants = 6.92 g, so CaCl₂ = 6.92 – 1.76 – 0.72 = 4.44 g."
        },
        {
          q: "The molecular mass of CO₂ is:",
          options: ["28 u", "32 u", "44 u", "56 u"],
          answer: 2,
          explain: "12 + 2 × 16 = 44 u."
        },
        {
          q: "Which compound is held together by ionic bonds?",
          options: ["Water", "Sodium chloride", "Methane", "Carbon dioxide"],
          answer: 1,
          explain: "NaCl is made of Na⁺ and Cl⁻ ions."
        },
        {
          q: "The formula unit mass of Na₂O (Na = 23, O = 16 u) is:",
          options: ["39 u", "46 u", "62 u", "78 u"],
          answer: 2,
          explain: "2 × 23 + 16 = 62 u."
        },
        {
          q: "Which property is typical of covalent compounds?",
          options: ["High melting point", "Conduct electricity when molten", "Low melting point", "Form 3-D ionic crystals"],
          answer: 2,
          explain: "Covalent compounds are made of molecules with weak forces between them, so they melt easily."
        },
        {
          q: "12 g of carbon gives 44 g of CO₂. How much CO₂ is produced from 2.4 g of carbon?",
          options: ["4.4 g", "8.8 g", "10.6 g", "22 g"],
          answer: 1,
          explain: "(44/12) × 2.4 = 8.8 g."
        }
      ]
    },
    // ------------------------------------------------------------------
    {
      id: "sound-waves-characteristics-and-applications",
      title: "Sound Waves: Characteristics and Applications",
      section: "Physics",
      summary: "Sound is produced by vibrations and travels as density oscillations through a medium. The chapter covers frequency, wavelength, amplitude, speed of sound, pitch and loudness, echo and reverberation, and ultrasonic and infrasonic waves with sonar and echolocation.",
      notes: [
        {
          heading: "Production and Propagation of Sound",
          points: [
            "Sound is produced by **vibrating objects** such as a tuning fork or a stretched string.",
            "Sound needs a **material medium**; it cannot travel through a vacuum.",
            "A sound wave is a series of **compressions** (high density) and **rarefactions** (low density) moving through the medium. It carries energy, not matter.",
            "The graph of a sound wave shows density against position."
          ]
        },
        {
          heading: "Characteristics of Sound Waves",
          points: [
            "**Frequency ν** = number of oscillations per second (hertz, Hz). **Time period T** = 1/ν.",
            "**Wavelength λ** is the distance between two successive compressions (or rarefactions).",
            "**Amplitude** is the maximum change in density; larger amplitude means more energy. **Intensity** is the energy passing per unit area per second, and it decreases with distance from the source.",
            "**Speed of sound**: v = νλ. It is greatest in solids (steel about 5000 m s⁻¹), less in liquids (water about 1500 m s⁻¹) and least in gases (air about 340 m s⁻¹).",
            "**Pitch** is how frequency is perceived (shrillness). Loudness is perceived intensity."
          ]
        },
        {
          heading: "Reflection of Sound: Echo and Reverberation",
          points: [
            "An **echo** is heard when the reflected sound reaches us at least **0.1 s** after the original.",
            "With sound speed 340 m s⁻¹, the minimum distance to the reflecting surface is **17 m** (34 m for there and back).",
            "Hard, smooth surfaces reflect sound well; soft surfaces absorb it and rough ones scatter it.",
            "**Reverberation** is the persistence of sound due to multiple reflections in a large hall. It is reduced by curtains, upholstered chairs and absorbing panels."
          ]
        },
        {
          heading: "Ultrasonic and Infrasonic Waves",
          points: [
            "Human audible range is **20 Hz to 20 kHz**. Below 20 Hz is **infrasonic**; above 20 kHz is **ultrasonic**.",
            "Ultrasound is used in ultrasonography, breaking kidney stones, cleaning machine parts, welding and detecting flaws in metal blocks.",
            "**Echolocation**: bats, dolphins and some birds locate objects using reflected ultrasonic sound.",
            "**Sonar** uses ultrasonic waves to find the depth, direction and speed of underwater objects. Infrasound helps detect earthquakes, volcanoes and storms."
          ]
        }
      ],
      formulas: [
        "ν = number of oscillations / time; T = 1/ν",
        "v = νλ",
        "Echo: d = v × t / 2",
        "Minimum distance for an echo = 340 × 0.1 / 2 = 17 m",
        "Audible range 20 Hz – 20 kHz"
      ],
      terms: [
        { term: "Frequency", meaning: "Number of oscillations per second; unit **hertz (Hz)**." },
        { term: "Wavelength", meaning: "Distance between **two successive compressions** or rarefactions." },
        { term: "Pitch", meaning: "How **frequency is perceived** by the ear; shrill or deep." },
        { term: "Reverberation", meaning: "**Persistence of sound** caused by repeated reflections." },
        { term: "Ultrasonic waves", meaning: "Sound waves with frequency **above 20 kHz**." },
        { term: "Sonar", meaning: "A technique that uses **reflected ultrasonic waves** to locate underwater objects." }
      ],
      examples: [
        {
          q: "Find the wavelengths in air (speed of sound 344 m s⁻¹) for frequencies 20 Hz and 20 kHz.",
          steps: [
            "λ = v/ν",
            "For 20 Hz: λ = 344 / 20 = 17.2 m",
            "For 20 000 Hz: λ = 344 / 20 000 = 0.0172 m"
          ],
          answer: "17.2 m and 0.0172 m (1.72 cm)"
        },
        {
          q: "A sonar signal sent into seawater returns after 0.90 s. Speed of sound in seawater is 1530 m s⁻¹. How far is the object?",
          steps: [
            "Time to reach the object = 0.90 / 2 = 0.45 s",
            "Distance = speed × time = 1530 × 0.45"
          ],
          answer: "688.5 m"
        }
      ],
      qa: [
        { q: "A clap in an empty corridor returns as an echo after 0.5 s. If the speed of sound is 340 m s⁻¹, how far is the wall?", a: "Sound goes to the wall and back, so distance = (340 × 0.5)/2 = 85 m." },
        { q: "Why is lightning seen before thunder is heard?", a: "Light travels at about 3 × 10⁵ km s⁻¹, almost instantly, while sound travels at only about 340 m s⁻¹. With a 5 s delay the strike is about 340 × 5 = 1700 m (1.7 km) away." },
        { q: "How do bats find their way in the dark?", a: "They emit short bursts of ultrasonic waves. These are reflected from obstacles and prey, and by sensing the echoes the bat finds position and distance (echolocation)." }
      ],
      quiz: [
        {
          q: "Sound cannot travel through:",
          options: ["Steel", "Water", "A vacuum", "Air"],
          answer: 2,
          explain: "Sound is a mechanical wave needing a material medium."
        },
        {
          q: "A sound has 10 oscillations in 2 s. Its frequency and time period are:",
          options: ["5 Hz and 0.2 s", "20 Hz and 0.05 s", "0.2 Hz and 5 s", "10 Hz and 0.1 s"],
          answer: 0,
          explain: "ν = 10/2 = 5 Hz and T = 1/5 = 0.2 s."
        },
        {
          q: "A wave in steel has λ = 50 m and speed 5000 m s⁻¹. Its frequency is:",
          options: ["250 000 Hz", "0.01 Hz", "100 Hz", "50 Hz"],
          answer: 2,
          explain: "ν = v/λ = 5000/50 = 100 Hz."
        },
        {
          q: "Ultrasonic waves have frequencies:",
          options: ["Below 20 Hz", "Between 20 Hz and 20 kHz", "Above 20 kHz", "Exactly 20 kHz"],
          answer: 2,
          explain: "Above the upper limit of human hearing."
        },
        {
          q: "The speed of sound is highest in:",
          options: ["Air", "Water", "Steel", "Vacuum"],
          answer: 2,
          explain: "Steel about 5000 m s⁻¹, water 1500, air 340."
        },
        {
          q: "A sonar signal takes 4 s to return from the sea bed. If the speed of sound in water is 1500 m s⁻¹, the depth is:",
          options: ["6000 m", "3000 m", "375 m", "1500 m"],
          answer: 1,
          explain: "Depth = 1500 × 4/2 = 3000 m."
        }
      ]
    },
    // ------------------------------------------------------------------
    {
      id: "reproduction-how-life-continues",
      title: "Reproduction: How Life Continues",
      section: "Biology",
      summary: "Living things continue their kind by reproduction. The chapter covers asexual reproduction and vegetative propagation, meiosis and variation, sexual reproduction in flowering plants, strategies in animals, the human reproductive system, pregnancy and the prevention of unwanted pregnancy and infections.",
      notes: [
        {
          heading: "Asexual Reproduction",
          points: [
            "**Asexual reproduction** involves one parent and gives **genetically identical** offspring (bacteria, amoeba, yeast, hydra, sponge).",
            "**Vegetative propagation** grows new plants from vegetative parts: potato and ginger stems, sugarcane and money plant cuttings, Bryophyllum leaves.",
            "Farmers use **cutting, grafting, layering and tissue culture** to grow desirable crops on a large scale.",
            "Fungi such as *Rhizopus* reproduce by spores formed in sacs on hyphae."
          ]
        },
        {
          heading: "Sexual Reproduction and Meiosis",
          points: [
            "Sexual reproduction involves **two parents** and fusion of male and female gametes to make a zygote.",
            "If gametes had the full chromosome number, it would double every generation; **meiosis** halves the number in gametes and restores it at fertilisation.",
            "Mixing of genes from two parents and meiosis create **variation**, which helps species adapt and survive."
          ]
        },
        {
          heading: "Reproduction in Flowering Plants",
          points: [
            "**Pollination** is transfer of pollen to the stigma: **self-pollination** (same flower or plant) or **cross-pollination** (another plant of the same kind).",
            "Pollinators: wind (wheat, maize; light pollen, feathery stigma), water (*Vallisneria*), and insects and birds (bright, scented flowers with nectar).",
            "The pollen grain forms a **pollen tube** through the style to the ovule, where the male gamete fuses with the egg: **fertilisation**.",
            "The zygote becomes the embryo; the ovule becomes the **seed** and the ovary becomes the **fruit**."
          ]
        },
        {
          heading: "Reproduction in Animals and Humans",
          points: [
            "Fish and frogs fertilise externally in water, lay hundreds to thousands of eggs and the young have low survival; lizards and birds fertilise internally and lay fewer eggs with better survival.",
            "**Ovulation**: one egg is released from an ovary about every month; sperm fuse with it in the oviduct to form a **zygote**, which implants in the uterus lining. Pregnancy lasts about nine months.",
            "If the egg is not fertilised the uterine lining is shed as **menstruation** (3–7 days), repeating every 21–35 days (about 28).",
            "Condoms prevent STIs (gonorrhoea, syphilis, HIV) and pregnancy. Other methods: oral pills, copper-T (IUD) and surgical methods. **Prenatal sex determination is prohibited by law in India.**"
          ]
        }
      ],
      formulas: [
        "Asexual: 1 parent → identical offspring",
        "Sexual: gamete + gamete → zygote → embryo",
        "Menstrual cycle: 21–35 days (about 28); menstruation 3–7 days",
        "Pregnancy lasts about 9 months"
      ],
      terms: [
        { term: "Vegetative propagation", meaning: "Growth of new plants from **vegetative parts** such as stems, roots or leaves." },
        { term: "Pollination", meaning: "Transfer of **pollen from anther to stigma**." },
        { term: "Fertilisation", meaning: "**Fusion of male and female gametes** to form a zygote." },
        { term: "Zygote", meaning: "The **fertilised egg**, the first cell of a new individual." },
        { term: "Ovulation", meaning: "Release of a **mature egg from the ovary**." },
        { term: "Menstruation", meaning: "Shedding of the thickened **uterine lining with blood** when the egg is not fertilised." }
      ],
      qa: [
        { q: "Why does asexual reproduction give genetically identical offspring while sexual reproduction gives variation?", a: "In asexual reproduction there is one parent and the offspring are copies of it. In sexual reproduction genes from two parents combine, and meiosis shuffles the genetic material, so offspring differ from each other and the parents." },
        { q: "Describe how fertilisation takes place in a flower after pollination.", a: "The pollen grain on the stigma grows a pollen tube through the style into the ovary. The male gamete passes down it to the ovule and fuses with the egg cell, forming the zygote. The ovule then becomes the seed and the ovary the fruit." },
        { q: "Why are wind-pollinated flowers different from insect-pollinated flowers?", a: "Wind-pollinated flowers have light, small pollen in large numbers and long feathery stigmas to trap it. Insect-pollinated flowers are bright, scented and have nectar to attract insects, with larger sticky pollen." }
      ],
      quiz: [
        {
          q: "Which of these is a vegetative propagation method?",
          options: ["Pollination", "Grafting", "Fertilisation", "Meiosis"],
          answer: 1,
          explain: "Grafting uses parts of plants to make new plants without seeds."
        },
        {
          q: "Transfer of pollen from the anther of one plant to the stigma of another plant of the same type is:",
          options: ["Self-pollination", "Cross-pollination", "Fertilisation", "Germination"],
          answer: 1,
          explain: "Pollen moving between different plants is cross-pollination."
        },
        {
          q: "After fertilisation in a flower, the ovary develops into the:",
          options: ["Seed", "Fruit", "Pollen tube", "Stigma"],
          answer: 1,
          explain: "The ovary becomes the fruit and the ovules become seeds."
        },
        {
          q: "Meiosis is important in sexual reproduction because it:",
          options: ["Makes identical cells", "Doubles the chromosome number", "Halves the chromosome number in gametes", "Produces only one gamete"],
          answer: 2,
          explain: "Gametes have half the chromosomes, so fertilisation restores the normal number."
        },
        {
          q: "Where does fertilisation normally occur in a human female?",
          options: ["Vagina", "Oviduct", "Uterus wall", "Ovary"],
          answer: 1,
          explain: "Sperm meet the egg in the oviduct."
        },
        {
          q: "Which method helps prevent both pregnancy and sexually transmitted infections?",
          options: ["Oral contraceptive pill", "Copper-T", "Condom", "Surgical blocking of oviducts"],
          answer: 2,
          explain: "A condom acts as a barrier stopping sperm and infecting microbes."
        }
      ]
    },
    // ------------------------------------------------------------------
    {
      id: "patterns-in-life-diversity-and-classification",
      title: "Patterns in Life: Diversity and Classification",
      section: "Biology",
      summary: "India is a biodiversity hotspot. The chapter explains why organisms are classified, the five kingdom system, the groups of plants and animals, the hierarchy from kingdom to species, binomial nomenclature, fossils as evidence of change, and threats to biodiversity.",
      notes: [
        {
          heading: "Why and How We Classify",
          points: [
            "**Biodiversity** is the variety of life on Earth. Classification groups organisms by similarities and differences, making them easy to study and understand how they are related.",
            "Criteria include cell type (prokaryote or eukaryote), cell wall, level of organisation (unicellular or multicellular) and mode of nutrition (autotrophic or heterotrophic).",
            "Systems have developed over time: Aristotle (habitat), Linnaeus (two kingdoms), Haeckel (three), Copeland (four) and **Whittaker's five kingdoms (1969)**."
          ]
        },
        {
          heading: "The Five Kingdoms",
          points: [
            "**Monera**: unicellular prokaryotes (bacteria, cyanobacteria); some have cell walls and are autotrophic or heterotrophic.",
            "**Protista**: unicellular eukaryotes (*Amoeba*, *Paramecium*, *Euglena*).",
            "**Fungi**: mostly multicellular eukaryotes with **chitin** cell walls; heterotrophic decomposers (mushroom, *Aspergillus*, yeast); body of threads called mycelium.",
            "**Plantae**: multicellular, autotrophic, cellulose cell wall. **Animalia**: multicellular, heterotrophic, no cell wall."
          ]
        },
        {
          heading: "Plant and Animal Groups",
          points: [
            "Plants: **Thallophyta** (algae), **Bryophyta** (mosses), **Pteridophyta** (ferns), **Gymnosperms** (naked seeds, pine) and **Angiosperms** (flowering, enclosed seeds).",
            "Animals are first divided by the **notochord** into non-chordates (invertebrates) and chordates.",
            "Invertebrate groups show increasing complexity: Porifera (sponges, no tissues), Cnidaria (*Hydra*, true tissues, one opening), Platyhelminthes (flatworms, bilateral symmetry)."
          ]
        },
        {
          heading: "Hierarchy, Naming, Fossils and Conservation",
          points: [
            "Hierarchy: **Kingdom → Phylum → Class → Order → Family → Genus → Species**. Lower groups share more features.",
            "**Binomial nomenclature** (Linnaeus): genus name first with a capital letter, species name in small letters, e.g. *Panthera tigris* (tiger), *Mangifera indica* (mango).",
            "**Fossils** are preserved remains of ancient organisms and show how life has changed. Birbal Sahni studied fossil plants.",
            "Pollution, deforestation, overuse of resources and climate change are reducing biodiversity; the Sangai deer of Loktak's phumdis is endangered."
          ]
        }
      ],
      formulas: [
        "Hierarchy: Kingdom > Phylum > Class > Order > Family > Genus > Species",
        "Five kingdoms: Monera, Protista, Fungi, Plantae, Animalia",
        "Binomial name = Genus (capital) + species (small letters)"
      ],
      terms: [
        { term: "Biodiversity", meaning: "The **variety of living organisms** in an area or on Earth." },
        { term: "Notochord", meaning: "A flexible **rod-like structure** whose presence divides chordates from non-chordates." },
        { term: "Binomial nomenclature", meaning: "A **two-part scientific naming system** (genus and species) introduced by Linnaeus." },
        { term: "Species", meaning: "A group of similar organisms that can **interbreed and produce offspring**." },
        { term: "Fossil", meaning: "The **preserved remains or impression** of an ancient organism." },
        { term: "Mycelium", meaning: "The **network of fine filaments** forming the body of a fungus." }
      ],
      qa: [
        { q: "State the basis of the five kingdom classification.", a: "Cell type (prokaryotic or eukaryotic), presence of a cell wall, level of organisation (unicellular or multicellular) and mode of nutrition (autotrophic or heterotrophic)." },
        { q: "Write the rules for writing a scientific name with an example.", a: "It has two parts, genus first and species second, in Latin. The genus starts with a capital letter and the species is in small letters; Example: Panthera tigris." },
        { q: "Why are fungi called decomposers?", a: "Most fungi are saprophytes. They absorb nutrients from dead and decaying matter through their mycelium and break complex organic matter into simpler substances that return to the soil." }
      ],
      quiz: [
        {
          q: "Who proposed the five kingdom classification in 1969?",
          options: ["Linnaeus", "Haeckel", "Whittaker", "Copeland"],
          answer: 2,
          explain: "R. H. Whittaker grouped life into Monera, Protista, Fungi, Plantae and Animalia."
        },
        {
          q: "Yeast is placed in Fungi because its cell wall is made of:",
          options: ["Cellulose", "Chitin", "Protein", "Lipid"],
          answer: 1,
          explain: "Although unicellular, its chitin wall places it in Fungi."
        },
        {
          q: "Which of the following is a gymnosperm?",
          options: ["Fern", "Moss", "Pine", "Rose"],
          answer: 2,
          explain: "Pine has naked seeds; rose is an angiosperm."
        },
        {
          q: "Sponges belong to:",
          options: ["Cnidaria", "Porifera", "Platyhelminthes", "Chordata"],
          answer: 1,
          explain: "Porifera (pore-bearers) are multicellular but lack tissues."
        },
        {
          q: "In the scientific name Mangifera indica, the word indica is the:",
          options: ["Kingdom", "Genus", "Species", "Family"],
          answer: 2,
          explain: "The first word (Mangifera) is the genus and the second (indica) is the species."
        },
        {
          q: "The correct order from the broadest to the narrowest group is:",
          options: ["Kingdom, Class, Phylum, Order", "Kingdom, Phylum, Class, Order", "Phylum, Kingdom, Class, Order", "Kingdom, Order, Class, Phylum"],
          answer: 1,
          explain: "Kingdom → Phylum → Class → Order → Family → Genus → Species."
        }
      ]
    },
    // ------------------------------------------------------------------
    {
      id: "earth-as-a-system-energy-matter-and-life",
      title: "Earth as a System: Energy, Matter, and Life",
      section: "Earth Science",
      summary: "The Earth's spheres interact through energy and matter. The chapter covers uneven heating by the Sun, albedo, layers of the atmosphere, winds and ocean currents, the water, carbon, nitrogen and oxygen cycles, and human impact on the Earth's processes.",
      notes: [
        {
          heading: "Uneven Heating of the Earth",
          points: [
            "Electromagnetic radiation from the Sun is the main source of energy for the Earth.",
            "The Earth's shape, latitude and tilt of its axis make **insolation** uneven, so the surface heats unevenly.",
            "**Albedo** is the fraction of solar radiation reflected by a surface. Snow (0.80–0.90) and ice have high albedo and stay cold; dark soil and ocean water have low albedo and warm up.",
            "Land heats up faster than water; dark surfaces absorb more heat than light ones."
          ]
        },
        {
          heading: "The Atmosphere",
          points: [
            "The atmosphere is held by gravity and is about **78 % nitrogen and 21 % oxygen**, with argon, CO₂, water vapour and others.",
            "The **troposphere** (0–12 km) is where weather happens; temperature falls with height (about 6.5 °C per km).",
            "In the **stratosphere** (12–50 km) the ozone layer absorbs UV radiation and temperature rises with height, so weather stays in the troposphere.",
            "The atmosphere partly absorbs and partly reflects sunlight, and clouds and gases help keep the Earth warm."
          ]
        },
        {
          heading: "Winds and Ocean Currents",
          points: [
            "Uneven heating creates pressure differences that cause winds. **Local winds** include valley breeze (day, up the slopes) and mountain breeze (night, down into the valley).",
            "**Planetary winds**: warm air rises at the equatorial low pressure belt, moves poleward, sinks near 30° N and S (sub-tropical high pressure) and returns to the equator along the surface.",
            "**Ocean currents** are continuous movements of large masses of water, driven by planetary winds, differences in temperature and salinity, Earth's rotation and the shape of land masses."
          ]
        },
        {
          heading: "Biogeochemical Cycles and Human Impact",
          points: [
            "Matter cycles between living (biotic) and non-living (abiotic) parts: the **water, carbon, nitrogen and oxygen cycles** make nutrients available and regulate climate.",
            "Oxygen is used in combustion, respiration and oxide formation, and is restored mainly by **photosynthesis**.",
            "Human activities such as burning fuels and deforestation add greenhouse gases, cause smog and ground-level ozone and affect rainfall and biodiversity.",
            "The **Montreal Protocol** helped the ozone layer recover. Remedies: renewable energy, planting trees, saving water, reduce–reuse–recycle."
          ]
        }
      ],
      formulas: [
        "Albedo = fraction of incoming solar radiation reflected",
        "Atmosphere: N₂ 78 %, O₂ 21 %",
        "Troposphere 0–12 km; stratosphere 12–50 km",
        "Temperature falls about 6.5 °C per km in the troposphere"
      ],
      terms: [
        { term: "Albedo", meaning: "The **fraction of solar radiation reflected** by a surface." },
        { term: "Troposphere", meaning: "The lowest layer of the atmosphere where **weather occurs**." },
        { term: "Ozone layer", meaning: "A layer in the stratosphere that **absorbs harmful UV rays**." },
        { term: "Planetary winds", meaning: "**Large-scale winds** caused by pressure differences between the equator and poles." },
        { term: "Ocean current", meaning: "Continuous movement of a **large mass of ocean water**." },
        { term: "Biogeochemical cycle", meaning: "Cycling of matter such as water, carbon or nitrogen **between living and non-living parts** of the Earth." }
      ],
      qa: [
        { q: "Why do polar regions stay cold?", a: "Snow and ice have a very high albedo (0.5–0.9), so they reflect most of the sunlight that falls on them, and the polar regions also receive sunlight at a low angle. Little energy is absorbed." },
        { q: "Explain valley and mountain breezes.", a: "In the day slopes heat up faster, warm air rises and cooler valley air moves up the slope: valley breeze. At night slopes cool faster, cold dense air flows down into the valley: mountain breeze." },
        { q: "Why is weather confined to the troposphere?", a: "The troposphere is heated from the ground and has rising warm air, clouds and winds. Above it, in the stratosphere, temperature increases with height because ozone absorbs UV, which stops vertical mixing of air." }
      ],
      quiz: [
        {
          q: "Which surface has the highest albedo?",
          options: ["Ocean water", "Black soil", "Fresh snow", "Crushed rock"],
          answer: 2,
          explain: "Snow reflects 80–90 % of sunlight."
        },
        {
          q: "The ozone layer is present in the:",
          options: ["Troposphere", "Stratosphere", "Mesosphere", "Exosphere"],
          answer: 1,
          explain: "Ozone in the stratosphere absorbs UV radiation."
        },
        {
          q: "During the day, the air flowing up the mountain slope from the valley is called:",
          options: ["Mountain breeze", "Valley breeze", "Planetary wind", "Land breeze"],
          answer: 1,
          explain: "Warm air rises on the slope and cooler valley air replaces it."
        },
        {
          q: "Atmospheric oxygen is restored mainly by:",
          options: ["Respiration", "Combustion", "Photosynthesis", "Rusting"],
          answer: 2,
          explain: "Photosynthesis releases oxygen; the other processes use it."
        },
        {
          q: "The gas making up about 78 % of the atmosphere is:",
          options: ["Oxygen", "Carbon dioxide", "Argon", "Nitrogen"],
          answer: 3,
          explain: "Nitrogen is 78 % and oxygen 21 %."
        },
        {
          q: "Which international agreement has helped the ozone layer to recover?",
          options: ["Kyoto Protocol", "Paris Agreement", "Montreal Protocol", "Rio Declaration"],
          answer: 2,
          explain: "The Montreal Protocol cut ozone-depleting substances."
        }
      ]
    }
  ]
});
