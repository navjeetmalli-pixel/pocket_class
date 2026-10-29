// PSEB Class 6 Science: the earlier NCERT book, which PSEB still uses (2026–27).
StudyData.add(6, "sciencepb", {
  // What this content follows. match: "textbook" | "older-book" | "topic". Set reviewed to a date once a teacher has checked it.
  syllabus: {board: "PSEB", match: "textbook", books: ["Science (earlier NCERT book)"], note: "PSEB 2026–27 uses the earlier NCERT book for this class; chapters follow its list.", reviewed: false},
  chapters: [
    // ------------------------------------------------------------------
    {
      id: "components-of-food",
      title: "Components of Food",
      section: "Biology",
      summary: "Our food contains nutrients that give energy, help us grow and keep us healthy. This chapter names the main nutrients, tells how to test for them, and explains deficiency diseases and a balanced diet.",
      notes: [
        {
          heading: "Nutrients in Food",
          points: [
            "The main **nutrients** are carbohydrates, proteins, fats, vitamins and minerals. Water and roughage are also needed.",
            "**Carbohydrates** and **fats** mainly give energy. Rice, wheat, potato and sugar are rich in carbohydrates; ghee, oil and nuts are rich in fats.",
            "**Proteins** help the body grow and repair itself. Pulses, milk, eggs, fish and meat are rich in proteins.",
            "**Vitamins** and **minerals** protect the body from diseases and keep it working properly, although they are needed only in small amounts."
          ]
        },
        {
          heading: "Testing Food for Nutrients",
          points: [
            "**Starch**: a few drops of dilute iodine solution turn it **blue-black**.",
            "**Protein**: copper sulphate and caustic soda solutions turn a food sample **violet**.",
            "**Fat**: rubbing food on paper leaves an **oily patch** that lets light through (translucent).",
            "These tests show only whether a nutrient is present; the colour change tells us which one."
          ]
        },
        {
          heading: "Vitamins and Minerals",
          points: [
            "**Vitamin A** keeps skin and eyes healthy; **Vitamin C** helps fight diseases and heals wounds; **Vitamin D** helps the body use calcium; **Vitamin B** group vitamins help in energy release.",
            "Sunlight helps our body make **Vitamin D**. Milk, eggs and fish liver oil are also sources.",
            "**Calcium** and **phosphorus** are needed for strong bones and teeth. **Iron** is needed for blood. **Iodine** is needed for the thyroid gland.",
            "Fruits and vegetables are good sources of vitamins and minerals."
          ]
        },
        {
          heading: "Deficiency Diseases and Balanced Diet",
          points: [
            "A disease caused by the lack of a nutrient over a long time is a **deficiency disease**.",
            "Lack of **Vitamin A** causes poor vision or night blindness; of **Vitamin C**, scurvy; of **Vitamin D**, rickets; of **Vitamin B1**, beriberi.",
            "Lack of **iron** causes anaemia; of **iodine**, goitre; of **calcium**, weak bones and teeth.",
            "A **balanced diet** has all nutrients in the right amounts, along with enough water and roughage (fibre) that helps remove waste from the body."
          ]
        }
      ],
      formulas: [
        "Iodine test: starch → blue-black",
        "Vitamin A – night blindness; Vitamin C – scurvy; Vitamin D – rickets; Vitamin B1 – beriberi",
        "Iron – anaemia; Iodine – goitre; Calcium – weak bones and teeth"
      ],
      terms: [
        { term: "Nutrients", meaning: "Components of food that the body needs for **energy, growth, repair and protection**." },
        { term: "Balanced diet", meaning: "A diet that contains **all nutrients** in the right amounts, with water and roughage." },
        { term: "Deficiency disease", meaning: "A disease caused by the **lack of a nutrient** for a long period." },
        { term: "Roughage", meaning: "Fibre in food that **cannot be digested** but helps remove undigested waste." },
        { term: "Protein", meaning: "A nutrient needed for **growth and repair** of the body." },
        { term: "Goitre", meaning: "Swelling of the **neck** caused by lack of iodine." }
      ],
      qa: [
        { q: "How will you test whether a food contains starch?", a: "Put a few drops of **dilute iodine solution** on the food. If it turns **blue-black**, starch is present." },
        { q: "Why do we need roughage in our food?", a: "Roughage is not digested, but it **helps the body remove waste** and prevents constipation." },
        { q: "Name two deficiency diseases and their causes.", a: "**Scurvy** is caused by lack of Vitamin C and **rickets** by lack of Vitamin D (and calcium)." }
      ],
      quiz: [
        { q: "Which nutrient mainly helps the body to grow and repair itself?", options: ["Carbohydrates", "Proteins", "Fats", "Water"], answer: 1, explain: "**Proteins** are the body-building nutrients. Carbohydrates and fats mainly give energy." },
        { q: "Which Vitamin deficiency causes night blindness?", options: ["Vitamin C", "Vitamin D", "Vitamin A", "Vitamin B1"], answer: 2, explain: "Lack of **Vitamin A** leads to poor vision in dim light or night blindness." },
        { q: "Iodine solution turns blue-black in the presence of:", options: ["Fat", "Protein", "Sugar", "Starch"], answer: 3, explain: "The blue-black colour is the test for **starch**." },
        { q: "Rickets is caused by the lack of:", options: ["Vitamin D", "Vitamin C", "Iron", "Iodine"], answer: 0, explain: "**Vitamin D** (with calcium) is needed for strong bones; without it bones become soft and bent." },
        { q: "Anaemia is a deficiency disease caused by the lack of:", options: ["Calcium", "Iodine", "Iron", "Vitamin B1"], answer: 2, explain: "**Iron** is needed to make blood, so its lack causes anaemia." },
        { q: "Which of these is a rich source of fats?", options: ["Potato", "Ghee", "Spinach", "Rice"], answer: 1, explain: "Ghee, oil and nuts are rich in **fats**." }
      ]
    },

    // ------------------------------------------------------------------
    {
      id: "sorting-materials-into-groups",
      title: "Sorting Materials into Groups",
      section: "Chemistry",
      summary: "Objects are made of different materials. We group materials by their properties such as appearance, hardness, solubility in water, floating or sinking, and how much light passes through them.",
      notes: [
        {
          heading: "Objects and Materials",
          points: [
            "Objects around us are made of **materials** such as wood, metal, glass, plastic, paper, cotton and leather.",
            "An object can be made of one material or of several; a **chair** may use wood, iron and cloth.",
            "The same material can make many different objects, and one kind of object can be made of different materials.",
            "We choose materials for an object according to their **properties**."
          ]
        },
        {
          heading: "Properties Used for Grouping",
          points: [
            "**Appearance**: some materials are shiny (**lustre**), like metals; others are dull, like wood.",
            "**Hardness**: some materials, like iron, are hard to scratch or compress; others like cotton and sponge are soft.",
            "**Solubility**: materials that dissolve in water are **soluble** (sugar, salt); those that do not are **insoluble** (sand, chalk powder).",
            "**Float or sink**: materials that stay on water float; those that go down sink. This depends on the material, not on the size alone."
          ]
        },
        {
          heading: "Transparency",
          points: [
            "**Transparent** materials let light pass through so that objects can be seen clearly through them, such as clear glass and air.",
            "**Translucent** materials let some light pass, but objects cannot be seen clearly through them, such as butter paper and frosted glass.",
            "**Opaque** materials do not let light pass through, such as wood, metal and cardboard.",
            "Water mixed with a substance may be transparent, translucent or opaque depending on how much it dissolves."
          ]
        }
      ],
      formulas: [
        "Soluble: dissolves in water (salt, sugar); Insoluble: does not dissolve (sand, chalk)",
        "Transparent – clear view; Translucent – blurred view; Opaque – no view"
      ],
      terms: [
        { term: "Lustre", meaning: "The **shine** on the surface of a material, as seen in metals." },
        { term: "Soluble", meaning: "Able to **dissolve in water**." },
        { term: "Transparent", meaning: "Allowing light to pass so objects can be **seen clearly** through it." },
        { term: "Translucent", meaning: "Allowing **some light** through, but objects cannot be seen clearly." },
        { term: "Opaque", meaning: "Does **not allow light** to pass through." }
      ],
      qa: [
        { q: "What is the difference between a translucent and an opaque material?", a: "A translucent material lets **some light** pass through, while an opaque material lets **no light** pass." },
        { q: "Why are windows made of glass and not wood?", a: "Glass is **transparent**, so we can see through it and light enters, but wood is opaque." }
      ],
      quiz: [
        { q: "Which of these dissolves in water?", options: ["Sand", "Salt", "Chalk powder", "Wood dust"], answer: 1, explain: "**Salt** is soluble in water; sand, chalk powder and wood dust are not." },
        { q: "A material that lets only some light pass and gives a blurred view is:", options: ["Transparent", "Opaque", "Translucent", "Soluble"], answer: 2, explain: "Such a material is **translucent**, like butter paper." },
        { q: "The shine seen on metals is called:", options: ["Lustre", "Hardness", "Solubility", "Opacity"], answer: 0, explain: "**Lustre** is the shiny appearance of a surface." },
        { q: "Which of these is opaque?", options: ["Clear glass", "Air", "Cardboard", "Clean water"], answer: 2, explain: "Cardboard blocks light completely, so it is opaque." },
        { q: "A material that does not dissolve in water is called:", options: ["Transparent", "Soluble", "Translucent", "Insoluble"], answer: 3, explain: "Materials that do not dissolve are **insoluble**." }
      ]
    },

    // ------------------------------------------------------------------
    {
      id: "separation-of-substances",
      title: "Separation of Substances",
      section: "Chemistry",
      summary: "Most things we use are mixtures of two or more substances. Useful and harmful parts must often be separated. This chapter describes the common methods of separation and when each one is used.",
      notes: [
        {
          heading: "Why We Separate Substances",
          points: [
            "A **mixture** has two or more components that are not chemically joined.",
            "We separate to remove **non-useful or harmful** parts, such as stones in rice, and to obtain **useful** parts, such as cream from milk.",
            "The method depends on the **properties** of the components, such as size, weight and solubility."
          ]
        },
        {
          heading: "Methods Based on Size and Weight",
          points: [
            "**Handpicking** removes stones or husk from grain when the amount is small.",
            "**Threshing** separates grain from stalks; **winnowing** uses wind to blow away lighter husk from heavier grain.",
            "**Sieving** separates components of different sizes, such as flour and bran. Fine particles pass through the holes.",
            "**Sedimentation** lets heavier insoluble particles settle at the bottom. **Decantation** is pouring off the clear liquid above."
          ]
        },
        {
          heading: "Filtration, Evaporation and Condensation",
          points: [
            "**Filtration** passes a mixture through filter paper or cloth so that insoluble particles are left behind. Muddy water and tea leaves are separated this way.",
            "**Evaporation** changes liquid water into vapour, leaving the dissolved solid. Common salt is obtained from sea water by evaporation.",
            "**Condensation** is the change of water vapour back into water on cooling.",
            "A **saturated solution** is one in which no more of a substance can be dissolved at that temperature. Heating or adding water allows more to dissolve."
          ]
        },
        {
          heading: "Combining Methods",
          points: [
            "Sometimes a single method is not enough. Sand, salt and water can be separated by filtering out the sand, then evaporating the water to get the salt.",
            "Cloudy water can be cleared by sedimentation, decantation and then filtration."
          ]
        }
      ],
      formulas: [
        "Grain from husk: winnowing; grain from stalk: threshing",
        "Insoluble solid from liquid: filtration; dissolved solid from liquid: evaporation",
        "Sand + salt + water: filter, then evaporate"
      ],
      terms: [
        { term: "Winnowing", meaning: "Separating **lighter husk** from heavier grain by wind." },
        { term: "Sedimentation", meaning: "Settling of **heavier particles** at the bottom of a liquid." },
        { term: "Decantation", meaning: "**Pouring out** the clear liquid, leaving the settled solid behind." },
        { term: "Filtration", meaning: "Separating **insoluble solids** from a liquid using filter paper or cloth." },
        { term: "Evaporation", meaning: "Change of a liquid into **vapour**, which can leave the dissolved solid behind." },
        { term: "Saturated solution", meaning: "A solution that **cannot dissolve any more** of the substance at that temperature." }
      ],
      qa: [
        { q: "How can you separate salt from sea water?", a: "Leave sea water in shallow pans in the sun. The water **evaporates** and the salt is left behind." },
        { q: "How would you separate a mixture of sand and water?", a: "Let it stand for **sedimentation**, **decant** the water or use **filtration**; the sand is left on the filter." }
      ],
      quiz: [
        { q: "Husk is separated from grain by:", options: ["Filtration", "Winnowing", "Evaporation", "Condensation"], answer: 1, explain: "Wind blows the light husk away from the heavier grain in **winnowing**." },
        { q: "Common salt is obtained from sea water by:", options: ["Winnowing", "Sieving", "Handpicking", "Evaporation"], answer: 3, explain: "On evaporation of the water, the dissolved salt is left behind." },
        { q: "Pouring out the clear liquid after the solid has settled is called:", options: ["Decantation", "Threshing", "Filtration", "Sieving"], answer: 0, explain: "This is **decantation**." },
        { q: "Which method separates flour from bran?", options: ["Evaporation", "Sieving", "Condensation", "Decantation"], answer: 1, explain: "Flour passes through the holes of a sieve and the larger bran stays behind." },
        { q: "Which is a mixture that can be separated by filtration?", options: ["Salt and water", "Sugar and water", "Sand and water", "Alcohol and water"], answer: 2, explain: "Sand does not dissolve, so it stays on the filter paper. Salt and sugar dissolve and would pass through." }
      ]
    },

    // ------------------------------------------------------------------
    {
      id: "getting-to-know-plants",
      title: "Getting to Know Plants",
      section: "Biology",
      summary: "Plants can be grouped as herbs, shrubs and trees. This chapter looks at their parts, namely the root, stem, leaf and flower, and what each does for the plant.",
      notes: [
        {
          heading: "Herbs, Shrubs and Trees",
          points: [
            "**Herbs** are small plants with soft green stems, like tomato and wheat.",
            "**Shrubs** have hard but thin stems that branch near the base, like rose and lemon.",
            "**Trees** are tall with a hard, thick brown stem called the **trunk**, like mango and neem.",
            "**Climbers** and **creepers** have weak stems that need support or spread on the ground."
          ]
        },
        {
          heading: "Root and Stem",
          points: [
            "**Roots** hold the plant in the soil and absorb water and minerals.",
            "A **taproot** has one main root with side roots (as in mustard and gram). **Fibrous roots** are many thin roots of similar size (as in wheat and grass).",
            "The **stem** carries water and minerals from the roots to the leaves and food from the leaves to other parts; it also holds the leaves, flowers and fruits.",
            "The place on the stem where a leaf arises is a **node**; the part between two nodes is an **internode**."
          ]
        },
        {
          heading: "Leaf",
          points: [
            "A leaf has a **leaf blade (lamina)**, a **petiole** (stalk) and **veins**. The line in the middle is the **midrib**.",
            "Leaves with a net-like pattern of veins have **reticulate venation**; leaves with veins running parallel have **parallel venation**.",
            "Leaves make food in the presence of sunlight and chlorophyll by **photosynthesis**, using carbon dioxide and water, and release oxygen.",
            "Water leaves the plant as vapour through tiny pores in the leaves. This loss is called **transpiration**."
          ]
        },
        {
          heading: "Flower",
          points: [
            "The flower is the **reproductive part** of a plant. Its main parts are **sepals, petals, stamens and pistil**.",
            "The **stamen** (male part) has an anther and a filament. The **pistil** (female part) has a stigma, style and ovary.",
            "The ovary contains **ovules** and later grows into the fruit; ovules become seeds."
          ]
        }
      ],
      formulas: [
        "Taproot: reticulate venation (dicot); Fibrous root: parallel venation (monocot)",
        "Photosynthesis: carbon dioxide + water → (sunlight, chlorophyll) → food + oxygen",
        "Flower: sepal, petal, stamen (male), pistil (female)"
      ],
      terms: [
        { term: "Photosynthesis", meaning: "The process by which leaves **make food** using sunlight, carbon dioxide and water." },
        { term: "Transpiration", meaning: "Loss of **water vapour** from the leaves of a plant." },
        { term: "Taproot", meaning: "A root system with one **main root** and smaller side roots." },
        { term: "Venation", meaning: "The **pattern of veins** on a leaf." },
        { term: "Stamen", meaning: "The **male part** of a flower." },
        { term: "Pistil", meaning: "The **female part** of a flower, with stigma, style and ovary." }
      ],
      qa: [
        { q: "What are the functions of roots?", a: "Roots **fix the plant in the soil** and **absorb water and minerals** from it." },
        { q: "Why is photosynthesis important?", a: "Leaves make **food** for the plant by photosynthesis, and the process gives out **oxygen**." }
      ],
      quiz: [
        { q: "A plant with a single main root and side roots has:", options: ["Fibrous roots", "Taproot", "Adventitious roots only", "No roots"], answer: 1, explain: "This is a **taproot** system, as in mustard." },
        { q: "Which part of a flower is the female part?", options: ["Stamen", "Petal", "Sepal", "Pistil"], answer: 3, explain: "The pistil contains the stigma, style and ovary." },
        { q: "Loss of water vapour from leaves is called:", options: ["Photosynthesis", "Transpiration", "Germination", "Venation"], answer: 1, explain: "Water evaporates through the tiny pores in the leaves in **transpiration**." },
        { q: "Wheat and grass have:", options: ["Taproots", "Reticulate venation", "Fibrous roots", "Woody stems"], answer: 2, explain: "Grasses and cereals have many thin **fibrous roots** and parallel venation." },
        { q: "Leaves make food using sunlight, water and:", options: ["Carbon dioxide", "Oxygen", "Nitrogen", "Hydrogen"], answer: 0, explain: "Carbon dioxide from the air is a raw material for **photosynthesis**." },
        { q: "A plant with a hard, thick stem called the trunk is a:", options: ["Herb", "Creeper", "Shrub", "Tree"], answer: 3, explain: "Trees are tall and have a woody trunk." }
      ]
    },

    // ------------------------------------------------------------------
    {
      id: "body-movements",
      title: "Body Movements",
      section: "Biology",
      summary: "Our bones, muscles and joints work together to let us move. This chapter describes the human skeleton, kinds of joints and how animals such as fish, birds, snakes and earthworms move.",
      notes: [
        {
          heading: "The Skeleton and Joints",
          points: [
            "The body is supported by a **skeleton** of bones, which also protects soft organs: the **skull** protects the brain and the **rib cage** protects the heart and lungs.",
            "The **backbone** is made of many small bones called vertebrae and lets us bend.",
            "A **joint** is a place where two bones meet. Joints allow movement, except fixed joints.",
            "Muscles pull on bones to move them; they work in pairs, one contracting while the other relaxes."
          ]
        },
        {
          heading: "Types of Joints",
          points: [
            "**Ball and socket joint**: allows movement in all directions (shoulder, hip).",
            "**Pivotal joint**: allows the head to turn up and down and side to side (neck).",
            "**Hinge joint**: allows movement in one direction, like a door (elbow, knee).",
            "**Fixed joints**: bones are fixed and cannot move, as in the skull bones (except the lower jaw)."
          ]
        },
        {
          heading: "How Animals Move",
          points: [
            "**Earthworm**: moves by contracting and relaxing its muscles, helped by tiny bristles and slippery mucus.",
            "**Snail**: moves on a muscular **foot** with the shell protecting the body.",
            "**Cockroach**: walks with three pairs of legs and flies with wings.",
            "**Birds**: hollow, light bones and strong chest muscles for flying. **Fish**: streamlined body, with fins and tail for swimming. **Snakes**: use the backbone and ribs with muscles to move in curves."
          ]
        }
      ],
      formulas: [
        "Ball and socket: shoulder, hip; Hinge: elbow, knee; Pivotal: neck; Fixed: skull",
        "Skull protects brain; rib cage protects heart and lungs"
      ],
      terms: [
        { term: "Joint", meaning: "A point where **two bones meet**." },
        { term: "Ball and socket joint", meaning: "A joint that allows movement in **all directions**." },
        { term: "Skeleton", meaning: "The framework of **bones** that supports the body." },
        { term: "Rib cage", meaning: "A cage of curved ribs that **protects the heart and lungs**." },
        { term: "Vertebrae", meaning: "The small bones that make up the **backbone**." }
      ],
      qa: [
        { q: "Why do we need joints?", a: "Joints let our **bones move** so that we can bend, turn, walk and do other work." },
        { q: "How does a fish move through water?", a: "Its **streamlined body** reduces resistance, and its **tail and fins** push and steer it forward." }
      ],
      quiz: [
        { q: "The shoulder is an example of a:", options: ["Hinge joint", "Ball and socket joint", "Fixed joint", "Pivotal joint"], answer: 1, explain: "Shoulder and hip allow movement in all directions: **ball and socket**." },
        { q: "The elbow is a:", options: ["Fixed joint", "Pivotal joint", "Ball and socket joint", "Hinge joint"], answer: 3, explain: "An elbow moves in one direction like a door, so it is a **hinge joint**." },
        { q: "The part that protects the brain is the:", options: ["Skull", "Rib cage", "Backbone", "Pelvis"], answer: 0, explain: "The **skull** surrounds and protects the brain." },
        { q: "Which animal moves with the help of a muscular foot?", options: ["Earthworm", "Snail", "Cockroach", "Fish"], answer: 1, explain: "A snail glides on its **muscular foot**." },
        { q: "Birds can fly easily partly because their bones are:", options: ["Hollow and light", "Fixed and heavy", "Very long", "Without joints"], answer: 0, explain: "Hollow bones make a bird's body light." }
      ]
    },

    // ------------------------------------------------------------------
    {
      id: "living-organisms-and-their-surroundings",
      title: "The Living Organisms and their Surroundings",
      section: "Biology",
      summary: "Living things live in particular surroundings called habitats and have features that help them survive there. This chapter covers habitats, adaptations and the characteristics that distinguish living things from non-living things.",
      notes: [
        {
          heading: "Habitat and Adaptation",
          points: [
            "The surroundings in which an organism lives is its **habitat**, which means home.",
            "The special features or habits that help an organism live in its habitat are its **adaptations**.",
            "Habitats are mainly **terrestrial** (on land: forests, grasslands, deserts, mountains) and **aquatic** (in water: ponds, lakes, rivers, seas).",
            "Plants and animals are adapted to their habitats; the same habitat can hold many kinds of organisms."
          ]
        },
        {
          heading: "Components of a Habitat",
          points: [
            "**Biotic** components are the living things: plants, animals and microbes.",
            "**Abiotic** components are the non-living things: air, water, soil, rocks, sunlight and temperature.",
            "Living things depend on abiotic factors and on one another."
          ]
        },
        {
          heading: "Examples of Adaptation",
          points: [
            "**Desert** plants and animals (cactus, camel) save water. A camel can live long without water and has long legs and broad feet for walking on sand.",
            "**Aquatic** animals such as fish have streamlined bodies, fins and gills; many aquatic plants have air spaces and flexible stems.",
            "**Mountain** animals often have thick fur; **polar** animals such as polar bears have thick layers of fat for warmth.",
            "**Frogs** can live on land and in water; their webbed feet help them swim."
          ]
        },
        {
          heading: "Characteristics of Living Things",
          points: [
            "All living things need **food**, **respire**, **grow**, **respond to stimuli** and **reproduce**.",
            "They also **excrete** waste and die; most can **move** in some way.",
            "Non-living things such as stones do not show these characteristics."
          ]
        }
      ],
      formulas: [
        "Habitat types: terrestrial (land) and aquatic (water)",
        "Biotic: living; Abiotic: non-living"
      ],
      terms: [
        { term: "Habitat", meaning: "The **surroundings** where a plant or animal naturally lives." },
        { term: "Adaptation", meaning: "A **feature or habit** that helps an organism survive in its habitat." },
        { term: "Biotic", meaning: "The **living** parts of a habitat." },
        { term: "Abiotic", meaning: "The **non-living** parts of a habitat." },
        { term: "Stimulus", meaning: "A **change** in the surroundings to which a living thing responds." }
      ],
      qa: [
        { q: "What is adaptation? Give an example.", a: "Adaptation is a **feature that helps an organism live in its habitat**. For example, a fish has gills and a streamlined body for life in water." },
        { q: "Name any four characteristics of living things.", a: "They need **food**, **breathe (respire)**, **grow** and **reproduce**." }
      ],
      quiz: [
        { q: "The home of an organism is called its:", options: ["Adaptation", "Habitat", "Stimulus", "Shelter only"], answer: 1, explain: "The surroundings where an organism lives form its **habitat**." },
        { q: "Which of these is an abiotic component?", options: ["Grass", "Frog", "Sunlight", "Bacteria"], answer: 2, explain: "Sunlight is non-living, so it is **abiotic**." },
        { q: "A cactus is adapted to which habitat?", options: ["Pond", "Desert", "Polar region", "Sea"], answer: 1, explain: "Cacti store water and lose very little, so they suit **deserts**." },
        { q: "Which feature helps fish live in water?", options: ["Lungs", "Hollow bones", "Gills and fins", "Thick fur"], answer: 2, explain: "Fish breathe with **gills** and swim using fins." },
        { q: "Which of these does a living thing do but a stone does not?", options: ["Occupy space", "Grow", "Have weight", "Have a shape"], answer: 1, explain: "Growth is a characteristic of living things." }
      ]
    },

    // ------------------------------------------------------------------
    {
      id: "motion-and-measurement-of-distances",
      title: "Motion and Measurement of Distances",
      section: "Physics",
      summary: "Measurement means comparing a quantity with a standard unit. This chapter introduces the SI unit of length, how to measure lengths correctly, and the different kinds of motion.",
      notes: [
        {
          heading: "Measurement and Units",
          points: [
            "To **measure** is to compare an unknown quantity with a known quantity called a **unit**.",
            "Ancient measures like a cubit or a footstep differ from person to person, so **standard units** were adopted.",
            "The **SI unit** of length is the **metre (m)**. 1 m = 100 cm; 1 cm = 10 mm; 1 km = 1000 m.",
            "We use a metre scale or measuring tape for length."
          ]
        },
        {
          heading: "Measuring Length Correctly",
          points: [
            "Place the scale along the object with one end of the object against a clear mark; if the end of the scale is broken, use a full-number mark.",
            "Keep your **eye directly above** the mark being read to avoid errors.",
            "To measure a **curved line**, lay a thread along the line, mark its ends, then straighten it and measure with a scale."
          ]
        },
        {
          heading: "Types of Motion",
          points: [
            "An object is in **motion** if its position changes with time. Everything else is at rest.",
            "**Rectilinear** motion is along a straight line, like a car on a straight road.",
            "**Circular** motion is along a circle, like a stone tied to a string and whirled. **Rotational** motion is spinning about an axis, like a top. **Oscillatory** motion is to and fro, like a swing.",
            "**Periodic** motion repeats itself after fixed intervals of time, such as a pendulum or the Earth around the Sun."
          ]
        }
      ],
      formulas: [
        "1 m = 100 cm; 1 cm = 10 mm; 1 km = 1000 m",
        "SI unit of length: metre (m)"
      ],
      terms: [
        { term: "Unit", meaning: "A **standard quantity** used to measure other quantities of the same kind." },
        { term: "Rectilinear motion", meaning: "Motion along a **straight line**." },
        { term: "Circular motion", meaning: "Motion of an object along a **circular path**." },
        { term: "Rotational motion", meaning: "**Spinning** of an object about an axis." },
        { term: "Periodic motion", meaning: "Motion that **repeats** after equal intervals of time." },
        { term: "Oscillation", meaning: "A **to and fro** motion, like that of a swing." }
      ],
      qa: [
        { q: "How would you measure the length of a curved line?", a: "Place a **thread** along the curved line, mark the two ends, straighten the thread and measure it with a **scale**." },
        { q: "Why are standard units needed?", a: "Different people's units (like a handspan) differ, so results do not agree. **Standard units** give the same result for everyone." }
      ],
      quiz: [
        { q: "The SI unit of length is:", options: ["Centimetre", "Kilometre", "Metre", "Millimetre"], answer: 2, explain: "The **metre** is the SI unit of length." },
        { q: "1 kilometre is equal to:", options: ["100 m", "1000 m", "10 m", "10,000 m"], answer: 1, explain: "1 km = 1000 m." },
        { q: "A swing moving to and fro shows which motion?", options: ["Rectilinear", "Rotational", "Oscillatory", "Circular only"], answer: 2, explain: "To and fro movement is **oscillatory** (and periodic)." },
        { q: "The motion of a spinning top is:", options: ["Rotational", "Rectilinear", "Oscillatory", "Random"], answer: 0, explain: "A top spins about its own axis, which is **rotational** motion." },
        { q: "While reading a scale the eye should be placed:", options: ["To the left of the mark", "To the right of the mark", "Directly above the mark", "Far from the scale"], answer: 2, explain: "Viewing from directly above avoids reading errors." }
      ]
    },

    // ------------------------------------------------------------------
    {
      id: "light-shadows-and-reflections",
      title: "Light, Shadows and Reflections",
      section: "Physics",
      summary: "Light helps us see objects. This chapter classifies objects by how they treat light, explains how shadows form, how a pinhole camera works, and how mirrors reflect light.",
      notes: [
        {
          heading: "Sources of Light and Transparency",
          points: [
            "Objects that give out their own light are **luminous**, such as the Sun, stars, a flame and a bulb.",
            "Objects that do not give light are **non-luminous**. We see them because light from a luminous source is **reflected** by them into our eyes.",
            "**Transparent**, **translucent** and **opaque** objects allow all, some or none of the light to pass.",
            "Light travels in **straight lines**."
          ]
        },
        {
          heading: "Shadows",
          points: [
            "A **shadow** forms when an opaque object blocks light. It is a dark region on a screen behind the object.",
            "A shadow needs a **source of light**, an **opaque object** and a **screen**.",
            "The size of a shadow changes with the position of the object and the source; a shadow is bigger when the object is nearer to the source.",
            "Translucent objects give a faint shadow; transparent objects give almost none."
          ]
        },
        {
          heading: "Pinhole Camera and Reflection",
          points: [
            "A **pinhole camera** is a box with a tiny hole that forms an **inverted** image on a screen. It shows that light travels in straight lines.",
            "A **mirror** reflects light and forms an image. The image in a plane mirror seems to be as far behind the mirror as the object is in front.",
            "In a plane mirror the left and right of an object are interchanged (lateral inversion)."
          ]
        }
      ],
      formulas: [
        "Shadow = light source + opaque object + screen",
        "Light travels in straight lines",
        "Pinhole camera image is inverted"
      ],
      terms: [
        { term: "Luminous object", meaning: "An object that **gives out its own light**." },
        { term: "Shadow", meaning: "A **dark region** formed when an opaque object blocks light." },
        { term: "Pinhole camera", meaning: "A box with a tiny hole that forms an **inverted image** on a screen." },
        { term: "Reflection", meaning: "**Bouncing back** of light from a surface." },
        { term: "Opaque", meaning: "A material through which **no light** passes." }
      ],
      qa: [
        { q: "What three things are needed to form a shadow?", a: "A **source of light**, an **opaque object** and a **screen**." },
        { q: "How do we see a non-luminous object?", a: "Light from a luminous source falls on it and is **reflected into our eyes**." }
      ],
      quiz: [
        { q: "Which of these is luminous?", options: ["Moon", "Mirror", "Candle flame", "Table"], answer: 2, explain: "A burning candle gives out its own light." },
        { q: "The image formed in a pinhole camera is:", options: ["Erect", "Inverted", "Larger than object always", "Coloured red"], answer: 1, explain: "Light travels in straight lines through the hole, so the image is **inverted**." },
        { q: "A shadow is formed by:", options: ["Transparent objects", "Opaque objects", "Air", "Clear glass"], answer: 1, explain: "Opaque objects block light and make shadows." },
        { q: "The Moon appears bright because it:", options: ["Produces its own light", "Reflects sunlight", "Is hot", "Is a star"], answer: 1, explain: "The Moon is non-luminous and reflects light from the Sun." },
        { q: "Light travels in:", options: ["Curved paths", "Zigzag paths", "Straight lines", "Circles"], answer: 2, explain: "In a uniform medium light moves in **straight lines**." }
      ]
    },

    // ------------------------------------------------------------------
    {
      id: "electricity-and-circuits",
      title: "Electricity and Circuits",
      section: "Physics",
      summary: "An electric cell supplies electricity that can light a bulb when connected in a closed path. This chapter describes the parts of a bulb and cell, a simple circuit and switch, and the difference between conductors and insulators.",
      notes: [
        {
          heading: "Electric Cell and Bulb",
          points: [
            "An electric **cell** produces electricity from chemicals. It has a **positive** terminal (a metal cap) and a **negative** terminal (a metal disc).",
            "A combination of two or more cells is a **battery**.",
            "A torch bulb has a thin wire called the **filament** between two supports. When current passes, the filament glows.",
            "A bulb is **fused** when its filament breaks and it will not glow."
          ]
        },
        {
          heading: "Electric Circuit and Switch",
          points: [
            "A bulb glows only if there is a **closed** path for electricity, an **electric circuit**, that connects both cell terminals through the bulb.",
            "A **switch** opens or closes a circuit: ON closes it and OFF breaks it, so the bulb stops glowing.",
            "Electricity flows from the positive terminal through the circuit to the negative terminal of the cell."
          ]
        },
        {
          heading: "Conductors, Insulators and Safety",
          points: [
            "Materials that allow electricity to pass through are **conductors**, such as metals like copper, aluminium and iron.",
            "Materials that do not allow electricity to pass are **insulators**, such as rubber, plastic, wood, glass and dry cloth.",
            "Wires are made of metal and covered with plastic or rubber; switches and plugs have plastic bodies for safety.",
            "Never experiment with mains electricity. Use only cells in experiments."
          ]
        }
      ],
      formulas: [
        "Conductors: metals (copper, aluminium, iron); Insulators: rubber, plastic, wood, glass",
        "Bulb glows only in a closed circuit"
      ],
      terms: [
        { term: "Filament", meaning: "The thin **wire inside a bulb** that glows when current passes." },
        { term: "Electric circuit", meaning: "A **closed path** along which electric current flows." },
        { term: "Switch", meaning: "A device that **opens or closes** an electric circuit." },
        { term: "Conductor", meaning: "A material that **allows electricity to pass** through it." },
        { term: "Insulator", meaning: "A material that **does not allow electricity** to pass through it." },
        { term: "Battery", meaning: "A **combination of two or more cells**." }
      ],
      qa: [
        { q: "Why does a bulb not glow when the switch is OFF?", a: "The switch **breaks the circuit**, so there is no closed path for current." },
        { q: "Why are electric wires covered with plastic or rubber?", a: "Plastic and rubber are **insulators**, so they protect us from electric shocks." }
      ],
      quiz: [
        { q: "Which of these is a conductor of electricity?", options: ["Rubber", "Copper", "Plastic", "Wood"], answer: 1, explain: "Metals such as **copper** conduct electricity." },
        { q: "The thin wire inside a bulb is called:", options: ["Switch", "Terminal", "Filament", "Battery"], answer: 2, explain: "The **filament** glows when current flows." },
        { q: "A battery is a combination of:", options: ["Bulbs", "Wires", "Switches", "Cells"], answer: 3, explain: "Two or more **cells** form a battery." },
        { q: "A bulb will glow only if the circuit is:", options: ["Open", "Closed", "Broken", "Wooden"], answer: 1, explain: "Current can flow only through a **closed** circuit." },
        { q: "Which of these is an insulator?", options: ["Iron nail", "Aluminium foil", "Copper wire", "Plastic scale"], answer: 3, explain: "Plastic does not allow electricity to pass." }
      ]
    },

    // ------------------------------------------------------------------
    {
      id: "fun-with-magnets",
      title: "Fun with Magnets",
      section: "Physics",
      summary: "Magnets attract some materials and have poles that point north and south. This chapter covers magnetic and non-magnetic materials, poles, attraction and repulsion, the compass and the care of magnets.",
      notes: [
        {
          heading: "Magnetic Materials",
          points: [
            "A **magnet** attracts objects made of **iron, nickel and cobalt**. Such materials are **magnetic**.",
            "Materials like paper, plastic, wood, glass and rubber are **non-magnetic**.",
            "Magnets come in shapes such as bar, horseshoe and cylindrical.",
            "Natural magnets are found in rocks (lodestone), but most magnets are man-made."
          ]
        },
        {
          heading: "Poles and Direction",
          points: [
            "Attraction is strongest at the ends of a magnet, called its **poles**: **north** and **south**.",
            "A freely hanging bar magnet comes to rest pointing roughly **north–south**. The end pointing north is the **north pole**.",
            "A **compass** has a magnetic needle that points north–south and is used to find directions."
          ]
        },
        {
          heading: "Attraction, Repulsion and Care",
          points: [
            "**Like poles repel** each other and **unlike poles attract**.",
            "A piece of iron can be made into a magnet by stroking it with a magnet in one direction.",
            "To keep magnets strong, store them in pairs with **unlike poles together** and wooden pieces between; use soft iron **keepers** across the ends.",
            "Keep magnets away from heat, hammering and dropping, which weaken them. Also keep them away from phones, cassettes, CDs, and TVs."
          ]
        }
      ],
      formulas: [
        "Magnetic materials: iron, nickel, cobalt",
        "Like poles repel; unlike poles attract",
        "A freely suspended magnet points north–south"
      ],
      terms: [
        { term: "Magnetic material", meaning: "A material that is **attracted by a magnet**, such as iron." },
        { term: "Pole", meaning: "An end of a magnet where **attraction is strongest**." },
        { term: "Compass", meaning: "An instrument with a magnetic needle used to **find directions**." },
        { term: "Repulsion", meaning: "**Pushing away**, as between two like poles." },
        { term: "Keeper", meaning: "A piece of **soft iron** placed across the ends of stored magnets." }
      ],
      qa: [
        { q: "How would you find the north-south direction with a bar magnet?", a: "Hang it **freely from a thread**. It comes to rest pointing north–south, and the end that points north is its **north pole**." },
        { q: "State the rule of attraction and repulsion between poles.", a: "**Like poles repel** and **unlike poles attract**." }
      ],
      quiz: [
        { q: "Which of these is attracted by a magnet?", options: ["Plastic scale", "Iron nail", "Rubber band", "Wooden stick"], answer: 1, explain: "Iron is a magnetic material." },
        { q: "Two north poles brought close together will:", options: ["Attract", "Repel", "Do nothing", "Join"], answer: 1, explain: "Like poles repel." },
        { q: "A freely suspended bar magnet points in the:", options: ["East–west direction", "North–south direction", "Up–down direction", "Random direction"], answer: 1, explain: "A hanging magnet settles north–south." },
        { q: "Which of the following is a non-magnetic material?", options: ["Iron", "Nickel", "Glass", "Cobalt"], answer: 2, explain: "Glass is not attracted by a magnet." },
        { q: "The instrument used to find direction is the:", options: ["Thermometer", "Compass", "Ammeter", "Pendulum"], answer: 1, explain: "A **compass** needle is a small magnet." }
      ]
    },

    // ------------------------------------------------------------------
    {
      id: "air-around-us",
      title: "Air Around Us",
      section: "Chemistry",
      summary: "Air surrounds us and is vital to living things. This chapter describes what air contains, the role of oxygen, how plants and animals use air, and the idea that moving air is wind.",
      notes: [
        {
          heading: "What Air Contains",
          points: [
            "Air is a **mixture** of gases. About **78%** is **nitrogen** and about **21%** is **oxygen**.",
            "The remaining small part has **carbon dioxide**, argon, water vapour and other gases, plus dust and smoke particles.",
            "Air is everywhere, has weight, occupies space and moves as **wind**."
          ]
        },
        {
          heading: "Oxygen and Living Things",
          points: [
            "Oxygen is needed by living things for **respiration** and for **burning** (combustion).",
            "Aquatic animals use oxygen **dissolved in water**; bubbles of air come out when water is heated.",
            "Plants use carbon dioxide in photosynthesis and release oxygen, keeping air balanced.",
            "Burning of fuels, breathing and decay use oxygen and release carbon dioxide."
          ]
        },
        {
          heading: "Uses of Air",
          points: [
            "Air is needed for breathing, burning and the working of windmills and sailing boats.",
            "Moving air is used to fly kites and spin wind turbines that generate electricity.",
            "Air carries seeds and pollen and spreads smells.",
            "Smoke and dust from vehicles and factories pollute air; planting trees helps keep it clean."
          ]
        }
      ],
      formulas: [
        "Air: nitrogen ≈ 78%, oxygen ≈ 21%, others ≈ 1%",
        "Plants: use CO₂, release O₂; animals: use O₂, release CO₂"
      ],
      terms: [
        { term: "Air", meaning: "A **mixture of gases** surrounding the Earth." },
        { term: "Oxygen", meaning: "The gas in air needed for **breathing and burning**." },
        { term: "Nitrogen", meaning: "The most abundant gas in air, about **78%**." },
        { term: "Wind", meaning: "**Moving air**." },
        { term: "Combustion", meaning: "**Burning** of a substance in oxygen." }
      ],
      qa: [
        { q: "How do we know that water contains dissolved air?", a: "When water is heated, **bubbles of air** appear on the sides of the container before it boils." },
        { q: "How do plants help to keep the air balanced?", a: "Plants **take in carbon dioxide** and **give out oxygen** during photosynthesis." }
      ],
      quiz: [
        { q: "Which gas forms the largest part of air?", options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"], answer: 2, explain: "Nitrogen makes up about 78% of air." },
        { q: "About what percentage of air is oxygen?", options: ["21%", "78%", "50%", "1%"], answer: 0, explain: "Air has about 21% oxygen." },
        { q: "Fish breathe the air that is:", options: ["Not present in water", "Dissolved in water", "In their swim bladder only", "Made by gills"], answer: 1, explain: "Fish take in oxygen dissolved in water through gills." },
        { q: "Which gas do plants take in for photosynthesis?", options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Argon"], answer: 2, explain: "Carbon dioxide is a raw material of photosynthesis." },
        { q: "Moving air is called:", options: ["Steam", "Wind", "Smoke", "Dust"], answer: 1, explain: "Air in motion is **wind**." }
      ]
    }
  ]
});
