// Class 6 Science: current NCERT textbook "Curiosity".
// Format: see CONTENT_GUIDE.md
StudyData.add(6, "science", {
  // What this content follows. match: "textbook" | "older-book" | "topic". Set reviewed to a date once a teacher has checked it.
  syllabus: {board: "CBSE", match: "textbook", books: ["Curiosity"], reviewed: false},
  chapters: [
    // ───────────────────────────── 1. The Wonderful World of Science ─────────────────────────────
    {
      id: "the-wonderful-world-of-science",
      title: "The Wonderful World of Science",
      section: "Introduction",
      summary: "Science is the careful study of nature through curiosity, questions, observation and experiments. This chapter introduces the scientific method, the main branches of science and the habits that make a good scientist.",
      notes: [
        {
          heading: "What is science?",
          points: [
            "Science is the **systematic study of the natural world**: we ask questions, observe carefully, test our ideas and learn how things work.",
            "Science begins with **curiosity**. Why does a ball fall down? Why does milk turn into curd? Why do we see a rainbow? Such questions lead to discoveries.",
            "The word 'science' comes from the Latin word **scientia**, meaning 'knowledge'.",
            "Science is all around us, not only in laboratories: in a pressure cooker, a bicycle, a mobile phone, a kitchen and a rainbow.",
            "Scientific ideas can change when new evidence is found, which is why science keeps growing."
          ]
        },
        {
          heading: "The scientific method",
          points: [
            "Scientists usually work in steps: **observe → ask a question → make a hypothesis → test with an experiment → analyse the results → draw a conclusion → share the findings**.",
            "A **hypothesis** is a testable guess that explains an observation. Experiments can show it to be right or wrong.",
            "In a **fair test** we change only **one thing at a time** and keep everything else the same, so we know exactly what caused the result.",
            "Experiments are **repeated** to make sure the result is reliable and not just chance.",
            "The steps are not always in a neat order. Scientists often go back and change their hypothesis when the results surprise them."
          ]
        },
        {
          heading: "Branches of science",
          points: [
            "**Physics** studies matter, energy, force, motion, light, heat, electricity and magnetism.",
            "**Chemistry** studies substances, their properties and how they change into new substances.",
            "**Biology** studies living things: plants, animals, microorganisms and humans.",
            "**Earth science and astronomy** study the Earth, its weather and the Sun, Moon, stars and planets.",
            "The branches overlap. For example, understanding how a plant makes food needs both biology and chemistry.",
            "**Technology** is the use of scientific knowledge to make useful things, such as vaccines, satellites and mobile phones."
          ]
        },
        {
          heading: "Habits of a good scientist",
          points: [
            "Good scientists are **curious, honest, patient and open-minded**. They report what they really find, even if it is not what they expected.",
            "They observe carefully, measure with the right units and **record** their observations neatly in tables.",
            "They work in **teams** and share ideas, because many discoveries are made by people working together.",
            "Safety comes first: follow the teacher's instructions, never taste chemicals, handle hot things carefully and wash your hands after an activity."
          ]
        }
      ],
      formulas: [
        "Scientific method: Observe → Question → Hypothesis → Experiment → Analyse → Conclude → Share",
        "Fair test: change only ONE factor at a time and keep all other factors the same",
        "Science (Latin scientia) = knowledge gained by systematic study of nature",
        "Science = understanding nature; Technology = using that understanding to make useful things"
      ],
      terms: [
        { term: "Hypothesis", meaning: "A testable guess or explanation for an observation, which can be checked by experiments." },
        { term: "Observation", meaning: "Carefully noticing and recording what happens, using our senses and instruments." },
        { term: "Experiment", meaning: "A planned activity done to test a hypothesis or to find out how something works." },
        { term: "Fair test", meaning: "A test in which only **one factor is changed** and all other conditions are kept the same." },
        { term: "Scientific method", meaning: "A step-by-step way of finding answers: observe, question, hypothesise, experiment, analyse and conclude." },
        { term: "Technology", meaning: "The practical use of scientific knowledge to make tools, machines and methods that solve problems." }
      ],
      qa: [
        {
          q: "Why should an experiment be repeated several times?",
          a: "A single result may be affected by a mistake or by chance. If the **same result comes again and again**, we can trust the conclusion."
        },
        {
          q: "What is the difference between science and technology? Give an example.",
          a: "**Science** is the study that helps us understand nature, while **technology** is the use of that knowledge to make useful things. For example, understanding how electricity flows is science; making an LED bulb is technology."
        },
        {
          q: "Meena wants to find out whether plants grow better in sunlight. How can she plan a fair test?",
          a: "She should take **two similar plants** of the same kind and size, in the same type of soil, and give both the same amount of water. She keeps **one in sunlight and the other in shade**, so that only light is different, and measures their heights every few days to compare."
        }
      ],
      quiz: [
        {
          q: "A testable guess that explains an observation is called a:",
          options: ["Conclusion", "Hypothesis", "Measurement", "Result"],
          answer: 1,
          explain: "A **hypothesis** is a guess that can be tested by experiments."
        },
        {
          q: "In a fair test to find how the amount of water affects the sprouting of bean seeds, which of these must be the same in every pot?",
          options: ["The amount of water given", "The time taken to sprout", "The number of seeds that sprout", "The type of soil and the number of seeds"],
          answer: 3,
          explain: "Only the amount of water is changed. Everything else, such as **soil, number of seeds and light**, is kept the same."
        },
        {
          q: "Which branch of science mainly studies stars and planets?",
          options: ["Astronomy", "Botany", "Chemistry", "Zoology"],
          answer: 0,
          explain: "**Astronomy** is the study of objects in space such as stars, planets and the Moon."
        },
        {
          q: "Which step comes immediately after making a hypothesis in the scientific method?",
          options: ["Drawing a conclusion", "Sharing the results", "Testing it with an experiment", "Making the first observation"],
          answer: 2,
          explain: "After the hypothesis we **test it with an experiment**. The conclusion comes only after analysing the results."
        },
        {
          q: "Which of the following is an example of technology?",
          options: ["A question about why the sky is blue", "A hypothesis about plant growth", "A table of observations", "A mobile phone"],
          answer: 3,
          explain: "A mobile phone is a **useful device made using scientific knowledge**, so it is technology."
        },
        {
          q: "An experiment gives a result different from what a scientist expected. A good scientist should:",
          options: ["Ignore that result", "Report it honestly and rethink the hypothesis", "Change the recorded result to match the hypothesis", "Stop doing experiments"],
          answer: 1,
          explain: "Scientists are **honest**. An unexpected result is useful because it can lead to a better hypothesis."
        }
      ]
    },

    // ───────────────────────────── 2. Diversity in the Living World ─────────────────────────────
    {
      id: "diversity-in-the-living-world",
      title: "Diversity in the Living World",
      section: "Biology",
      summary: "Earth is home to millions of kinds of plants and animals. This chapter looks at how living things are grouped by their features, how plants differ in their stems, leaves and roots, and how organisms are adapted to the places where they live.",
      notes: [
        {
          heading: "Variety of life and why we group",
          points: [
            "The huge variety of living things on Earth is called **biodiversity**. From tiny insects to giant banyan trees, no two kinds are exactly alike.",
            "To study this variety easily, we **group** living things that share similar features, like arranging items in a shop by type.",
            "The same living things can be grouped in different ways: by where they live, what they eat, how they move or what their body parts look like.",
            "Living things are broadly studied as **plants**, **animals** and **microorganisms** (tiny living things such as bacteria)."
          ]
        },
        {
          heading: "Grouping plants: herbs, shrubs and trees",
          points: [
            "**Herbs** are small plants with soft, green, tender stems, e.g. wheat, mint and coriander.",
            "**Shrubs** are bushy plants of medium size. Many branches grow from near the base and the stems are hard but not very thick, e.g. rose and hibiscus (gudhal).",
            "**Trees** are tall and strong, with a thick, hard, woody stem called the **trunk**. Branches grow high above the ground, e.g. mango, neem and peepal.",
            "**Climbers** have weak stems and climb up a support using tendrils or other parts, e.g. grapevine and pea.",
            "**Creepers** have weak stems that spread along the ground, e.g. pumpkin and watermelon."
          ]
        },
        {
          heading: "Roots, stems and leaves",
          points: [
            "**Roots** hold the plant firmly in the soil and absorb water and minerals. A **taproot** is one main root with thin side roots (carrot, mango, peepal, mustard). **Fibrous roots** are many thin roots of similar size (wheat, maize, grass, rice).",
            "The **stem** holds the plant upright, carries water and minerals up to the leaves, and carries food to other parts.",
            "A leaf has a flat green blade called the **lamina**, a stalk called the **petiole**, and lines called **veins**. Leaves make food for the plant using sunlight, water and carbon dioxide.",
            "**Reticulate venation** means veins form a net-like pattern (mango, peepal, hibiscus). **Parallel venation** means veins run side by side (grass, wheat, maize, banana).",
            "Usually, plants with taproots have reticulate venation and plants with fibrous roots have parallel venation."
          ]
        },
        {
          heading: "Habitats and adaptation",
          points: [
            "A **habitat** is the place where an organism lives and finds food, water, air and shelter. Land habitats are **terrestrial** (forest, desert, grassland, mountains) and water habitats are **aquatic** (pond, river, sea).",
            "**Adaptation** means special features or habits that help an organism survive in its habitat.",
            "A fish has a **streamlined body, fins and gills**, so it can swim and breathe in water.",
            "A cactus has a **thick stem that stores water** and leaves reduced to spines, which reduces water loss in the desert. A camel has long legs and broad padded feet for walking on sand, and its hump stores fat.",
            "India has very varied habitats: the Thar Desert, the Himalayas, the Sundarbans mangroves (home of the Bengal tiger) and Kaziranga's grasslands (home of the one-horned rhinoceros)."
          ]
        },
        {
          heading: "Why biodiversity matters",
          points: [
            "Living things depend on one another for food and shelter, so losing one kind can affect many others.",
            "Biodiversity gives us food, medicines, wood and clean air.",
            "We protect it through national parks, wildlife sanctuaries, planting trees and not harming habitats."
          ]
        }
      ],
      formulas: [
        "Plants by size and stem: Herbs (soft stem) | Shrubs (bushy, hard thin stems) | Trees (tall, woody trunk)",
        "Weak-stemmed plants: Climbers (climb on support) | Creepers (spread on ground)",
        "Taproot → usually reticulate venation; Fibrous roots → usually parallel venation",
        "Habitats: Terrestrial (land) and Aquatic (water)"
      ],
      terms: [
        { term: "Biodiversity", meaning: "The great variety of plants, animals and other living things found on Earth." },
        { term: "Habitat", meaning: "The natural home of an organism, where it finds food, water, air and shelter." },
        { term: "Adaptation", meaning: "A special feature or habit that helps an organism to survive in its habitat." },
        { term: "Taproot", meaning: "A root system with one main thick root and thin side roots, e.g. carrot." },
        { term: "Fibrous root", meaning: "A root system made of many thin roots of nearly equal size, e.g. wheat." },
        { term: "Venation", meaning: "The pattern of veins in a leaf, which can be **reticulate** (net-like) or **parallel**." }
      ],
      qa: [
        {
          q: "Distinguish between herbs, shrubs and trees.",
          a: "**Herbs** are small plants with soft green stems (mint, wheat). **Shrubs** are bushy plants with many hard but thin branches from near the base (rose, hibiscus). **Trees** are tall with a thick woody trunk and branches high up (mango, neem)."
        },
        {
          q: "What is meant by adaptation? Give two examples.",
          a: "Adaptation is a **special feature or habit that helps an organism live in its habitat**. For example, a fish has gills and a streamlined body for life in water, and a cactus stores water in its thick stem and has spines instead of leaves to survive in the desert."
        },
        {
          q: "How would you tell a taproot from a fibrous root? Give one example of each.",
          a: "A **taproot** has one main thick root with smaller side roots, as in carrot or mango. A **fibrous root** system has many thin roots of about the same size spreading from the base of the stem, as in wheat or grass."
        }
      ],
      quiz: [
        {
          q: "A plant with a tall, thick, woody trunk and branches high above the ground is a:",
          options: ["Herb", "Shrub", "Tree", "Creeper"],
          answer: 2,
          explain: "**Trees** have a thick, hard trunk with branches growing high above the ground."
        },
        {
          q: "Which pair of plants has leaves with parallel venation?",
          options: ["Wheat and maize", "Mango and peepal", "Mustard and hibiscus", "Rose and neem"],
          answer: 0,
          explain: "Grasses like **wheat and maize** have parallel veins. The others have net-like (reticulate) veins."
        },
        {
          q: "Which feature helps a cactus to live in the desert?",
          options: ["Large flat leaves that lose a lot of water", "Thin stems that cannot store water", "A thick stem that stores water and leaves reduced to spines", "Floating leaves with long hollow stalks"],
          answer: 2,
          explain: "The **thick stem stores water** and the **spines reduce water loss**, so the cactus survives with very little rain."
        },
        {
          q: "A weak-stemmed plant like pumpkin that spreads along the ground is called a:",
          options: ["Climber", "Creeper", "Shrub", "Herb"],
          answer: 1,
          explain: "**Creepers** spread along the ground, whereas climbers go up on a support."
        },
        {
          q: "Which of these plants has a taproot?",
          options: ["Wheat", "Grass", "Maize", "Carrot"],
          answer: 3,
          explain: "**Carrot** has a taproot. Wheat, grass and maize have fibrous roots."
        },
        {
          q: "The natural home of an organism, where it finds food, water and shelter, is its:",
          options: ["Habitat", "Adaptation", "Habit", "Venation"],
          answer: 0,
          explain: "A **habitat** is the place where an organism lives. Adaptation means features that help it live there."
        }
      ]
    },

    // ───────────────────────────── 3. Mindful Eating: A Path to a Healthy Body ─────────────────────────────
    {
      id: "mindful-eating-a-path-to-a-healthy-body",
      title: "Mindful Eating: A Path to a Healthy Body",
      section: "Biology",
      summary: "Food gives us energy and the materials to grow and stay healthy. This chapter explains where food comes from, the nutrients in it, deficiency diseases, and how to eat mindfully: a balanced, varied and safe diet in the right amount.",
      notes: [
        {
          heading: "Sources and variety of food",
          points: [
            "All our food comes from **plants** (cereals, pulses, fruits, vegetables, nuts, oils) or **animals** (milk, eggs, fish, meat, honey).",
            "We eat different plant parts: roots (carrot), leaves (palak), flowers (cauliflower), fruits (brinjal) and seeds (rajma, wheat).",
            "Staple foods differ across India: rice is common in the east and south, wheat in the north, and millets such as ragi, jowar and bajra in many regions.",
            "Animals that eat only plants are **herbivores**, those that eat only animals are **carnivores**, and those that eat both are **omnivores**. Humans are omnivores."
          ]
        },
        {
          heading: "Nutrients and what they do",
          points: [
            "Food contains **nutrients**: carbohydrates, proteins, fats, vitamins and minerals. We also need **dietary fibre** and **water**.",
            "**Carbohydrates** give quick energy: rice, wheat, potato, sugar. **Fats** also give energy, and more per gram than carbohydrates: ghee, oil, nuts.",
            "**Proteins** help the body to **grow and repair itself**: dal, milk, paneer, eggs, soya.",
            "**Vitamins and minerals** are needed in small amounts to keep the body healthy and protect it from disease. Fruits, vegetables and milk are rich in them.",
            "**Fibre** (roughage) helps digestion and prevents constipation. **Water** helps digestion, carries nutrients and removes wastes.",
            "A drop of **iodine solution** turns **blue-black** on starch, so it is used to test for starch in food."
          ]
        },
        {
          heading: "Vitamins and deficiency diseases",
          points: [
            "A **deficiency disease** is caused when the body does not get enough of a nutrient for a long time.",
            "**Vitamin A** keeps eyes and skin healthy; lack causes **night blindness**. Sources: carrot, papaya, mango, milk, green leafy vegetables.",
            "**Vitamin C** keeps gums healthy and helps fight infections; lack causes **scurvy** (bleeding gums). Sources: amla, lemon, orange, guava.",
            "**Vitamin D** helps the body use calcium for strong bones; lack causes **rickets** (soft, bent bones in children). Sources: sunlight, milk, eggs, fish.",
            "Vitamin C is easily lost on long cooking, so do not overcook vegetables and fruits."
          ]
        },
        {
          heading: "Minerals and their deficiency diseases",
          points: [
            "**Calcium** makes bones and teeth strong. Sources: milk, curd, paneer, ragi.",
            "**Iron** is needed to make blood; lack causes **anaemia**. Sources: green leafy vegetables, jaggery, dates, pulses.",
            "**Iodine** is needed for the proper working of the thyroid gland; lack causes **goitre** (swelling in the neck). Source: iodised salt.",
            "**Malnutrition** means poor health because of too little, too much or the wrong balance of nutrients."
          ]
        },
        {
          heading: "Balanced diet, mindful eating and food safety",
          points: [
            "A **balanced diet** has all nutrients in the right amounts for a person's age, size and activity. It includes cereals or millets, pulses, vegetables, fruits and milk products.",
            "**Mindful eating** means eating slowly, chewing well, sitting down without a phone or TV, noticing when you are full and stopping, and not wasting food.",
            "Too much sugar, salt, oil and packaged junk food can harm health. Read the **ingredients and expiry date** on packed food.",
            "Eat fresh, seasonal and local food. Wash your hands with soap before eating, wash fruits and vegetables, keep food covered and do not eat stale food."
          ]
        }
      ],
      formulas: [
        "Carbohydrates and fats → energy; Proteins → growth and repair; Vitamins and minerals → protection; Fibre → digestion",
        "Vitamin A – night blindness | Vitamin C – scurvy | Vitamin D – rickets",
        "Iron – anaemia | Iodine – goitre | Calcium – weak bones and teeth",
        "Starch + iodine solution → blue-black colour"
      ],
      terms: [
        { term: "Nutrient", meaning: "A substance in food that the body needs for energy, growth, repair and protection." },
        { term: "Balanced diet", meaning: "A diet that has **all nutrients in the right amounts** for a person's needs." },
        { term: "Deficiency disease", meaning: "A disease caused by the **lack of a nutrient** in the diet for a long time, e.g. scurvy." },
        { term: "Dietary fibre", meaning: "The part of plant food that is not digested but helps food move through the gut (roughage)." },
        { term: "Mindful eating", meaning: "Eating with full attention: slowly, in the right amount, choosing healthy food and not wasting it." },
        { term: "Malnutrition", meaning: "Poor health caused by eating too little, too much or an unbalanced mix of nutrients." }
      ],
      qa: [
        {
          q: "Why is a balanced diet important?",
          a: "A balanced diet gives the body **all the nutrients in the right amounts**. It provides energy, helps us grow and repair, protects us from diseases and prevents deficiency diseases."
        },
        {
          q: "Name the deficiency disease caused by a lack of vitamin C and by a lack of iron. How can each be prevented?",
          a: "Lack of vitamin C causes **scurvy**; it is prevented by eating amla, lemon, orange or guava. Lack of iron causes **anaemia**; it is prevented by eating green leafy vegetables, jaggery, dates and pulses."
        },
        {
          q: "What do you understand by mindful eating? Write three habits.",
          a: "Mindful eating is eating with attention and care. Three habits are: **eating slowly and chewing well**, eating without a phone or TV, and **stopping when you feel full**. Not wasting food is also part of it."
        }
      ],
      quiz: [
        {
          q: "Which nutrient mainly helps the body to grow and repair itself?",
          options: ["Carbohydrates", "Fats", "Dietary fibre", "Proteins"],
          answer: 3,
          explain: "**Proteins** are the body-building nutrient found in dal, milk, eggs and paneer."
        },
        {
          q: "A lack of vitamin C for a long time causes:",
          options: ["Rickets", "Scurvy", "Night blindness", "Goitre"],
          answer: 1,
          explain: "Lack of **vitamin C** causes scurvy. Rickets is from vitamin D, night blindness from vitamin A and goitre from iodine."
        },
        {
          q: "Which food helps to prevent goitre?",
          options: ["Jaggery", "Ragi", "Iodised salt", "Orange"],
          answer: 2,
          explain: "**Iodised salt** supplies iodine, which prevents goitre. Jaggery gives iron, ragi calcium and orange vitamin C."
        },
        {
          q: "Anaemia can be prevented by eating plenty of:",
          options: ["Green leafy vegetables and jaggery", "Sweets and fried snacks", "Butter and cream", "Sugar and soft drinks"],
          answer: 0,
          explain: "Anaemia is due to lack of **iron**, which is found in leafy vegetables, jaggery, dates and pulses."
        },
        {
          q: "Which part of food is not digested but helps food move through the gut and prevents constipation?",
          options: ["Vitamin D", "Dietary fibre", "Protein", "Iodine"],
          answer: 1,
          explain: "**Dietary fibre (roughage)** from whole grains, fruits and vegetables keeps the digestive system working well."
        },
        {
          q: "Which of these is a habit of mindful eating?",
          options: ["Eating while watching a screen", "Eating very fast to finish early", "Chewing slowly and stopping when you feel full", "Skipping meals and eating double later"],
          answer: 2,
          explain: "Mindful eating means **eating slowly with attention** and listening to your body's signs of fullness."
        }
      ]
    },

    // ───────────────────────────── 4. Exploring Magnets ─────────────────────────────
    {
      id: "exploring-magnets",
      title: "Exploring Magnets",
      section: "Physics",
      summary: "Magnets attract certain materials, have two poles and point north-south when free to turn. This chapter covers magnetic and non-magnetic materials, poles, attraction and repulsion, the compass, and how to use and care for magnets.",
      notes: [
        {
          heading: "Magnets and magnetic materials",
          points: [
            "A **magnet** attracts objects made of certain materials. Natural magnets (**lodestone**) are found in nature, but most magnets we use are made by people.",
            "Materials attracted by a magnet are **magnetic**: iron, nickel, cobalt and ordinary steel (which is mostly iron).",
            "Materials not attracted by a magnet are **non-magnetic**: wood, plastic, glass, paper, rubber, cloth, copper and aluminium. So not all metals are magnetic.",
            "Magnets come in different shapes: **bar**, **horseshoe**, **cylindrical**, **ring** and **needle**.",
            "A magnet can pull objects **without touching them**, and its pull can pass through thin non-magnetic materials such as paper."
          ]
        },
        {
          heading: "Poles of a magnet",
          points: [
            "Every magnet has two **poles**, a north pole and a south pole, near its ends. The pull is strongest at the poles and weakest in the middle.",
            "**Unlike poles attract** each other (N–S), and **like poles repel** each other (N–N or S–S).",
            "**Repulsion** is the sure test for a magnet. A magnet attracts both a magnet and a piece of iron, but only another magnet can push it away.",
            "If you break a magnet into pieces, **each piece becomes a smaller magnet with two poles**. A single pole cannot be separated."
          ]
        },
        {
          heading: "Compass and directions",
          points: [
            "A bar magnet hung freely from a thread comes to rest pointing in the **north–south direction**. The end that points north is the **north pole** of the magnet.",
            "The Earth behaves like a giant magnet, which is why a freely turning magnet lines up north–south.",
            "A **magnetic compass** has a small magnetic needle that turns freely on a pivot. It settles north–south, so we can find directions with it.",
            "Face the north end of the needle: east is on your right, west on your left and south behind you.",
            "Keep a compass away from magnets and iron objects, as they make the needle point the wrong way."
          ]
        },
        {
          heading: "Making magnets, care and uses",
          points: [
            "An iron or steel needle can be magnetised by stroking it many times in **one direction** with one pole of a strong magnet.",
            "Magnets become weak if they are **heated, hammered or dropped**.",
            "Store bar magnets in pairs with unlike poles side by side and soft iron pieces (**keepers**) across the ends.",
            "Keep magnets away from credit and debit cards with magnetic strips, mobile phones, old TVs and compasses.",
            "Uses of magnets: fridge door seals, magnetic toys, door catches, pencil boxes, cranes that lift scrap iron, and compasses."
          ]
        }
      ],
      formulas: [
        "Unlike poles attract (N–S); like poles repel (N–N, S–S)",
        "Magnetic materials: iron, nickel, cobalt (and ordinary steel)",
        "A freely suspended magnet points north–south",
        "Every magnet has two poles, even after it is broken into pieces"
      ],
      terms: [
        { term: "Magnet", meaning: "An object that attracts magnetic materials and has a north pole and a south pole." },
        { term: "Magnetic material", meaning: "A material that is attracted by a magnet, such as iron, nickel or cobalt." },
        { term: "Pole", meaning: "The end of a magnet where its attracting power is strongest." },
        { term: "Repulsion", meaning: "A push between two like poles of magnets. It is the sure test for a magnet." },
        { term: "Compass", meaning: "A device with a freely turning magnetic needle that shows the north–south direction." },
        { term: "Lodestone", meaning: "A natural magnet found in nature." }
      ],
      qa: [
        {
          q: "How will you test whether a metal bar is a magnet or just a piece of iron?",
          a: "Bring one end of the bar near a pole of a known magnet. If the bar is **pushed away (repelled)** at one end, it is a magnet. If it is only attracted at both ends, it is just a magnetic material like iron. Attraction alone does not prove it is a magnet."
        },
        {
          q: "Why should magnets be kept away from mobile phones and cards? How should bar magnets be stored?",
          a: "Strong magnets can **damage** things that depend on magnetism, such as cards with magnetic strips, and can disturb compasses. Bar magnets are stored in pairs with **unlike poles side by side**, with **soft iron keepers** across the ends, so that they do not lose strength."
        },
        {
          q: "How does a magnetic compass help us to find directions?",
          a: "The compass needle is a small magnet that can turn freely. Because the Earth behaves like a giant magnet, the needle settles in the **north–south direction**. Once north is known, we can find east, west and south."
        }
      ],
      quiz: [
        {
          q: "Which of these is a non-magnetic material?",
          options: ["Copper", "Iron", "Nickel", "Cobalt"],
          answer: 0,
          explain: "**Copper** is not attracted by a magnet. Iron, nickel and cobalt are magnetic."
        },
        {
          q: "When the north pole of one magnet is brought near the north pole of another magnet, they:",
          options: ["Attract each other", "Repel each other", "Have no effect on each other", "Join to form one pole"],
          answer: 1,
          explain: "**Like poles repel**. Only unlike poles attract."
        },
        {
          q: "A bar magnet hung freely by a thread comes to rest pointing in the:",
          options: ["East–west direction", "Direction it was last pointing", "North–south direction", "Up–down direction"],
          answer: 2,
          explain: "Because the Earth acts like a giant magnet, a free magnet always settles in the **north–south direction**."
        },
        {
          q: "Which observation shows that a metal bar is a magnet and not just iron?",
          options: ["It is attracted by a magnet", "It is hard and shiny", "It is made of metal", "It is pushed away when a pole of another magnet is brought near"],
          answer: 3,
          explain: "Both a magnet and iron are attracted by a magnet. Only a magnet can show **repulsion**."
        },
        {
          q: "How should a pair of bar magnets be stored?",
          options: ["With unlike poles side by side and soft iron keepers across the ends", "With like poles side by side and a coin between them", "Heated gently so that they stay strong", "Next to a mobile phone"],
          answer: 0,
          explain: "Opposite poles side by side with **soft iron keepers** protect magnets from losing strength."
        },
        {
          q: "What do you get if you cut a bar magnet into two halves?",
          options: ["One piece with a north pole and one with a south pole", "Two smaller magnets, each with a north and a south pole", "Two pieces of plain iron", "A magnet and a non-magnetic piece"],
          answer: 1,
          explain: "Each piece becomes a **complete magnet with two poles**. A single pole cannot be separated."
        }
      ]
    },

    // ───────────────────────────── 5. Measurement of Length and Motion ─────────────────────────────
    {
      id: "measurement-of-length-and-motion",
      title: "Measurement of Length and Motion",
      section: "Physics",
      summary: "To compare lengths we need standard units. This chapter covers units of length and how to measure straight and curved lengths accurately, and then the different types of motion and the idea that motion depends on a reference point.",
      notes: [
        {
          heading: "Why we need standard units",
          points: [
            "People once measured with a **hand span, cubit (forearm), foot or pace**. These differ from person to person, so the results did not agree.",
            "A **standard unit** is the same for everyone. Scientists all over the world use the **International System of Units (SI)**.",
            "The SI unit of length is the **metre (m)**. Other units are the millimetre (mm), centimetre (cm) and kilometre (km).",
            "Choose a unit that suits the size: mm for the thickness of a coin, cm for a pencil, m for a classroom and km for the distance between two cities."
          ]
        },
        {
          heading: "Measuring length correctly",
          points: [
            "Place the ruler along the length to be measured, with its marked edge touching the object, and the zero mark at one end.",
            "If the end of the ruler is broken or worn, start from a clear full mark such as 1 cm and **subtract** that reading at the end.",
            "Keep your **eye directly above the mark** you are reading. Looking from the side gives a wrong reading.",
            "To measure a **curved line**, lay a thread along it, mark the length on the thread, straighten the thread and measure it against the ruler.",
            "Always write the **unit** along with the number."
          ]
        },
        {
          heading: "Changing units",
          points: [
            "1 km = 1000 m, 1 m = 100 cm and 1 cm = 10 mm. So 1 m = 1000 mm.",
            "To change a **bigger unit into a smaller unit, multiply**. For example, 2.5 m = 2.5 × 100 = 250 cm.",
            "To change a **smaller unit into a bigger unit, divide**. For example, 4500 m = 4500 ÷ 1000 = 4.5 km."
          ]
        },
        {
          heading: "Rest and motion",
          points: [
            "An object is in **motion** if its position changes with time, and at **rest** if its position does not change.",
            "Whether something moves depends on a **reference point**. A passenger sitting in a moving bus is at rest compared with the bus but is moving compared with a tree outside.",
            "So rest and motion are **relative**: they depend on the reference point we choose."
          ]
        },
        {
          heading: "Types of motion",
          points: [
            "**Rectilinear motion** is motion along a straight line, e.g. a car on a straight road or an apple falling from a tree.",
            "**Circular motion** is motion along a circular path, e.g. a stone tied to a string and whirled around.",
            "**Rotational motion** is spinning about a fixed line (axis) through the object, e.g. a top, a ceiling fan or the Earth spinning on its axis.",
            "**Periodic motion** repeats itself after equal intervals of time, e.g. the Earth going round the Sun.",
            "**Oscillatory motion** is a to-and-fro motion about a fixed position, e.g. a swing, a pendulum or a vibrating guitar string. It is also periodic."
          ]
        }
      ],
      formulas: [
        "1 km = 1000 m; 1 m = 100 cm; 1 cm = 10 mm; 1 m = 1000 mm",
        "Bigger unit → smaller unit: multiply. Smaller unit → bigger unit: divide",
        "Length = last reading − first reading (when the object does not start at zero)",
        "SI unit of length = metre (m)"
      ],
      examples: [
        {
          q: "Convert (a) 3.5 m into centimetres and (b) 2500 m into kilometres.",
          steps: [
            "(a) 1 m = 100 cm, so 3.5 m = 3.5 × 100 cm = 350 cm.",
            "(b) 1 km = 1000 m, so 2500 m = 2500 ÷ 1000 km = 2.5 km."
          ],
          answer: "(a) 350 cm  (b) 2.5 km"
        },
        {
          q: "One end of a pencil is at the 2.0 cm mark of a ruler and the other end is at the 11.5 cm mark. Find the length of the pencil.",
          steps: [
            "The pencil does not start at zero, so subtract the two readings.",
            "Length = last reading − first reading = 11.5 cm − 2.0 cm."
          ],
          answer: "Length of the pencil = 9.5 cm"
        }
      ],
      terms: [
        { term: "Standard unit", meaning: "A unit of measurement that is the same for everyone everywhere." },
        { term: "Reference point", meaning: "A fixed point against which we decide whether an object is at rest or in motion." },
        { term: "Rectilinear motion", meaning: "Motion of an object along a straight line." },
        { term: "Circular motion", meaning: "Motion of an object along a circular path." },
        { term: "Rotational motion", meaning: "Spinning of an object about an axis passing through it." },
        { term: "Periodic motion", meaning: "Motion that repeats itself after equal intervals of time, e.g. a pendulum or the Earth around the Sun." }
      ],
      qa: [
        {
          q: "Why do we need standard units of measurement?",
          a: "Units like hand span or foot **differ from person to person**, so measurements would not agree. A **standard unit** such as the metre is the same everywhere, so everyone gets the same result and can compare measurements."
        },
        {
          q: "How would you measure the length of a curved line, such as a road on a map?",
          a: "Place a **thread** carefully along the curved line and mark its two ends on the thread. Then straighten the thread, hold it against a ruler and read its length. Multiply by the map scale if needed."
        },
        {
          q: "A boy is sitting in a moving train. Is he at rest or in motion? Explain.",
          a: "It depends on the **reference point**. Compared with the seat or other passengers he is at rest, but compared with the trees or the platform outside he is in motion. So rest and motion are relative."
        }
      ],
      quiz: [
        {
          q: "The SI unit of length is the:",
          options: ["Centimetre", "Kilometre", "Metre", "Millimetre"],
          answer: 2,
          explain: "The **metre (m)** is the SI unit of length."
        },
        {
          q: "How many centimetres are there in 2 m?",
          options: ["20 cm", "200 cm", "2000 cm", "0.02 cm"],
          answer: 1,
          explain: "1 m = 100 cm, so 2 m = 2 × 100 = **200 cm**."
        },
        {
          q: "Which of these is an example of oscillatory motion?",
          options: ["A swing moving to and fro", "A car moving on a straight road", "A stone falling straight down", "A stone tied to a string and whirled in a circle"],
          answer: 0,
          explain: "A swing moves **to and fro about a fixed position**, which is oscillatory motion."
        },
        {
          q: "While reading a scale, your eye should be:",
          options: ["To the left of the mark", "Slightly to the right of the mark", "Directly above the mark", "Anywhere, it does not matter"],
          answer: 2,
          explain: "Reading from the side gives a wrong value. Keep your **eye directly above the mark**."
        },
        {
          q: "An apple falling straight down from a tree shows:",
          options: ["Circular motion", "Rectilinear motion", "Rotational motion", "Oscillatory motion"],
          answer: 1,
          explain: "It moves along a **straight line**, so the motion is rectilinear."
        },
        {
          q: "One end of a pencil is at the 3.0 cm mark and the other end is at the 10.5 cm mark. Its length is:",
          options: ["13.5 cm", "10.5 cm", "3.0 cm", "7.5 cm"],
          answer: 3,
          explain: "Length = 10.5 cm − 3.0 cm = **7.5 cm**."
        }
      ]
    },

    // ───────────────────────────── 6. Materials Around Us ─────────────────────────────
    {
      id: "materials-around-us",
      title: "Materials Around Us",
      section: "Chemistry",
      summary: "Everything around us is made of materials. This chapter shows how we group materials by properties such as appearance, hardness, solubility, transparency and floating or sinking, and how we choose the right material for each use.",
      notes: [
        {
          heading: "Materials and objects",
          points: [
            "Objects are made of **materials**: a tumbler of glass, an earthen pot of clay, a school bag of cloth, a chair of wood.",
            "One object can be made of several materials (a pencil has wood, graphite and rubber), and one material can make many objects (wood makes doors, tables and toys).",
            "Some materials come straight from nature: cotton, jute and wood from plants; wool, silk and leather from animals; clay, sand, stone and metals from the Earth.",
            "Some materials are made by people from natural ones: glass from sand, paper from wood or bamboo, and plastic from petroleum."
          ]
        },
        {
          heading: "Properties of materials",
          points: [
            "**Appearance**: materials differ in colour, roughness and shine. A shiny surface is called **lustre**; metals like gold, silver and copper have lustre.",
            "**Hardness**: hard materials such as iron and stone are difficult to scratch or press. Soft materials such as cotton, sponge and wax are easy to press or scratch.",
            "**Transparent** materials let us see clearly through them (clear glass, plain water, air). **Translucent** materials let some light through, so objects look blurred (butter paper, frosted glass). **Opaque** materials do not let light pass (wood, metal, stone).",
            "**Solubility**: some materials dissolve in water (salt, sugar) and are **soluble**; others (sand, chalk powder) are **insoluble**.",
            "Two liquids that mix completely are **miscible** (water and vinegar). Liquids that do not mix and form separate layers are **immiscible** (oil and water).",
            "Some materials **float** on water (cork, thermocol, an empty plastic bottle) and some **sink** (stone, iron nail, coin)."
          ]
        },
        {
          heading: "Choosing the right material",
          points: [
            "We choose a material according to the property needed for the job.",
            "Windows and spectacles use **transparent** glass. A bathroom window uses **frosted (translucent) glass** so that light comes in but nobody can see inside.",
            "Cooking vessels are made of metals because they are hard and allow heat to pass. Their handles are made of wood or plastic, which do not heat up easily.",
            "A cotton towel is **soft and absorbs water**, so it dries us well. A raincoat or umbrella uses a waterproof material."
          ]
        },
        {
          heading: "Using materials wisely",
          points: [
            "Materials like paper, vegetable peels, cotton and jute are **biodegradable**: microbes in soil break them down naturally.",
            "Plastic does not rot easily, so plastic waste pollutes land, rivers and seas for a very long time.",
            "Follow the **3 Rs**: **Reduce** the use of materials, **Reuse** things, and **Recycle** paper, metal and glass.",
            "Use a cloth or jute bag instead of single-use plastic bags."
          ]
        }
      ],
      formulas: [
        "Transparent – see clearly through | Translucent – see blurred | Opaque – cannot see through",
        "Soluble – dissolves in water | Insoluble – does not dissolve in water",
        "Miscible liquids mix completely | Immiscible liquids form separate layers",
        "Float: cork, thermocol, empty plastic bottle | Sink: stone, iron nail, coin"
      ],
      terms: [
        { term: "Lustre", meaning: "The shine of the surface of a material, as seen in metals." },
        { term: "Transparent", meaning: "A material through which things can be seen clearly, e.g. clear glass." },
        { term: "Translucent", meaning: "A material that allows only some light to pass, so things look blurred, e.g. butter paper." },
        { term: "Opaque", meaning: "A material that does not allow light to pass through it, e.g. wood." },
        { term: "Soluble", meaning: "A substance that dissolves in a liquid such as water, e.g. sugar." },
        { term: "Miscible", meaning: "Liquids that mix completely with each other, e.g. water and vinegar." }
      ],
      qa: [
        {
          q: "Differentiate between transparent, translucent and opaque materials with one example each.",
          a: "**Transparent** materials allow us to see clearly through them (clear glass). **Translucent** materials allow only some light and things look blurred (butter paper). **Opaque** materials do not allow light to pass and we cannot see through them (wood)."
        },
        {
          q: "Why are the windows of a house made of glass, but a bathroom window is often made of frosted glass?",
          a: "Plain glass is **transparent**, so light comes in and we can see outside. Frosted glass is **translucent**: it lets light in but gives privacy because nobody can see clearly through it."
        },
        {
          q: "A student stirs sugar, sand and salt separately in three glasses of water. What will she observe?",
          a: "**Sugar and salt dissolve** completely and give clear solutions, so they are soluble. **Sand does not dissolve** and settles at the bottom, so it is insoluble."
        }
      ],
      quiz: [
        {
          q: "Butter paper lets some light pass but objects behind it look blurred. It is:",
          options: ["Transparent", "Opaque", "Translucent", "Shiny"],
          answer: 2,
          explain: "Materials that let only some light through are **translucent**."
        },
        {
          q: "Which of these dissolves in water?",
          options: ["Sand", "Sawdust", "Chalk powder", "Salt"],
          answer: 3,
          explain: "**Salt** is soluble in water. Sand, sawdust and chalk powder are insoluble."
        },
        {
          q: "Which pair of liquids is immiscible?",
          options: ["Water and vinegar", "Oil and water", "Milk and water", "Water and lemon juice"],
          answer: 1,
          explain: "**Oil and water** do not mix and form separate layers. The other pairs mix completely."
        },
        {
          q: "Which of these will float on water?",
          options: ["Cork", "Stone", "Coin", "Iron nail"],
          answer: 0,
          explain: "A piece of **cork** floats on water. Stone, coin and iron nail sink."
        },
        {
          q: "A material with a shiny surface is said to have:",
          options: ["Hardness", "Solubility", "Transparency", "Lustre"],
          answer: 3,
          explain: "**Lustre** is the shine of a material, as in metals."
        },
        {
          q: "Which of these is broken down naturally by microbes in the soil?",
          options: ["Vegetable peels", "Plastic bags", "Glass bottles", "Aluminium foil"],
          answer: 0,
          explain: "Vegetable peels are **biodegradable**. Plastic, glass and aluminium foil last for a very long time in soil."
        }
      ]
    },

    // ───────────────────────────── 7. Temperature and its Measurement ─────────────────────────────
    {
      id: "temperature-and-its-measurement",
      title: "Temperature and its Measurement",
      section: "Physics",
      summary: "Temperature tells us how hot or cold something is. This chapter shows why our sense of touch is unreliable, how thermometers work and are used safely, and how heat flows from hotter to colder objects.",
      notes: [
        {
          heading: "Hot, cold and temperature",
          points: [
            "**Temperature** is a measure of **how hot or cold** an object is. A hotter object has a higher temperature.",
            "Our sense of touch can be **misleading**. Keep one hand in hot water and the other in cold water for a while, then put both in lukewarm tap water. The hand from hot water feels the tap water cool, the other feels it warm.",
            "So we need a **thermometer** to measure temperature correctly. In daily life we measure temperature in **degrees Celsius (°C)**."
          ]
        },
        {
          heading: "Thermometers",
          points: [
            "A thermometer has a glass tube with a bulb holding **mercury** or coloured alcohol. On heating the liquid expands and rises along the tube; the scale shows the temperature.",
            "A **laboratory thermometer** measures temperatures of liquids such as water. Its range is **−10 °C to 110 °C**.",
            "A **clinical thermometer** measures human body temperature. Its range is **35 °C to 42 °C**. The normal body temperature is about **37 °C (98.6 °F)**.",
            "A clinical thermometer has a small **kink** (bend) near the bulb that stops the mercury from falling back by itself, so the reading stays. Shake it to bring the mercury down before use.",
            "**Digital thermometers** show the temperature on a screen and contain no mercury. Mercury is harmful, so a broken mercury thermometer should be reported to an adult and not touched."
          ]
        },
        {
          heading: "Using a thermometer correctly",
          points: [
            "**Laboratory thermometer**: keep it upright, with the bulb dipped in the liquid but **not touching the bottom or sides** of the container. Read it when the liquid level has become steady.",
            "**Clinical thermometer**: wash it, shake it so the mercury is below 35 °C, place the bulb under the tongue or in the armpit, wait, and then take the reading.",
            "Always read the scale with your **eye in line with the end of the liquid thread**.",
            "Never use a clinical thermometer for hot water or hot tea. The temperature is far above its range and it can break."
          ]
        },
        {
          heading: "Heat flow, conductors and insulators",
          points: [
            "**Heat** flows from a **hotter object to a colder object** until both are at the same temperature. Hot tea cools and cold water warms up to the room temperature.",
            "Materials that let heat pass easily are **conductors** of heat: metals such as copper, aluminium and iron.",
            "Materials that do not let heat pass easily are **insulators**: wood, plastic, rubber and thermocol.",
            "A steel spoon in hot tea soon gets hot, but a wooden spoon does not. That is why pan handles are made of wood or plastic.",
            "A metal object feels colder than a wooden one on a cold day because metal conducts heat away from our hand faster."
          ]
        }
      ],
      formulas: [
        "Normal human body temperature ≈ 37 °C (98.6 °F)",
        "Clinical thermometer range: 35 °C to 42 °C; laboratory thermometer range: −10 °C to 110 °C",
        "Ice melts at 0 °C; water boils at 100 °C (at normal pressure)",
        "Heat flows from a hotter object to a colder object",
        "Change in temperature = higher temperature − lower temperature"
      ],
      examples: [
        {
          q: "Hot tea is at 85 °C. After some time it cools to 40 °C. By how many degrees did its temperature fall?",
          steps: [
            "Fall in temperature = starting temperature − final temperature.",
            "Fall = 85 °C − 40 °C."
          ],
          answer: "The temperature fell by 45 °C."
        },
        {
          q: "Water at 30 °C is heated until its temperature rises by 55 °C. What is the final temperature? Which thermometer should be used to measure it?",
          steps: [
            "Final temperature = 30 °C + 55 °C = 85 °C.",
            "A clinical thermometer only reads from 35 °C to 42 °C, so it cannot be used.",
            "A laboratory thermometer reads from −10 °C to 110 °C, which covers 85 °C."
          ],
          answer: "Final temperature = 85 °C; use a laboratory thermometer."
        }
      ],
      terms: [
        { term: "Temperature", meaning: "A measure of how hot or cold an object is." },
        { term: "Thermometer", meaning: "An instrument used to measure temperature." },
        { term: "Clinical thermometer", meaning: "A thermometer used to measure human body temperature (range 35 °C to 42 °C)." },
        { term: "Celsius scale", meaning: "A temperature scale in which ice melts at 0 °C and water boils at 100 °C; its unit is °C." },
        { term: "Conductor of heat", meaning: "A material through which heat passes easily, e.g. metals." },
        { term: "Insulator of heat", meaning: "A material through which heat does not pass easily, e.g. wood or plastic." }
      ],
      qa: [
        {
          q: "Why can we not rely on our sense of touch to judge temperature? Describe a simple activity.",
          a: "Touch can give a wrong idea. Keep one hand in **hot water** and the other in **cold water**, then dip both in **lukewarm water**. The hand that was in hot water feels the lukewarm water cool, while the other feels it warm, although the water is at one temperature."
        },
        {
          q: "What is the use of the kink in a clinical thermometer?",
          a: "The kink near the bulb **stops the mercury from falling back** when the thermometer is taken out of the mouth. So the reading stays and can be read safely later."
        },
        {
          q: "Why should a clinical thermometer not be used to measure the temperature of boiling water?",
          a: "Its range is only **35 °C to 42 °C**. Boiling water is at about 100 °C, far above this range, so the thermometer can **break**. A laboratory thermometer should be used."
        }
      ],
      quiz: [
        {
          q: "The normal temperature of the human body is about:",
          options: ["37 °C", "27 °C", "47 °C", "17 °C"],
          answer: 0,
          explain: "Normal body temperature is about **37 °C (98.6 °F)**."
        },
        {
          q: "The range of a laboratory thermometer is:",
          options: ["35 °C to 42 °C", "−10 °C to 110 °C", "0 °C to 50 °C", "100 °C to 200 °C"],
          answer: 1,
          explain: "A laboratory thermometer reads from **−10 °C to 110 °C**. The 35 °C to 42 °C range belongs to a clinical thermometer."
        },
        {
          q: "The kink in a clinical thermometer:",
          options: ["Lets the mercury fall freely after use", "Makes the thermometer easier to hold", "Prevents the mercury from falling back so the reading stays", "Marks the normal body temperature"],
          answer: 2,
          explain: "The **kink stops the mercury from sliding back**, so the reading can be read after taking the thermometer out."
        },
        {
          q: "Which material is the best choice for the handle of a frying pan?",
          options: ["Copper", "Iron", "Aluminium", "Wood"],
          answer: 3,
          explain: "**Wood** is an insulator of heat, so the handle does not get hot. Metals are good conductors."
        },
        {
          q: "A cup of hot tea is kept on a table. Heat flows from:",
          options: ["The table to the tea", "The tea to the surroundings", "The tea and the surroundings equally in both directions", "Nowhere until the tea is stirred"],
          answer: 1,
          explain: "Heat always flows from the **hotter object to the colder one**, so the tea cools down."
        },
        {
          q: "While measuring the temperature of water with a laboratory thermometer, its bulb should be:",
          options: ["Touching the bottom of the beaker", "Held above the water", "Dipped in the water without touching the bottom or sides", "Pressed against the side of the beaker"],
          answer: 2,
          explain: "The bulb should be **fully in the water but not touching the bottom or sides**, which may be hotter or colder."
        }
      ]
    },

    // ───────────────────────────── 8. A Journey through States of Water ─────────────────────────────
    {
      id: "a-journey-through-states-of-water",
      title: "A Journey through States of Water",
      section: "Chemistry",
      summary: "Water exists as solid ice, liquid water and gaseous water vapour, and keeps changing between them. This chapter follows water through melting, freezing, evaporation, condensation and the water cycle, and shows why saving water matters.",
      notes: [
        {
          heading: "Three states of water",
          points: [
            "Water exists in three states: **solid** (ice, snow, hail), **liquid** (water) and **gas** (water vapour).",
            "Ice has a fixed shape and volume. Water has a fixed volume but takes the shape of its container. **Water vapour** is invisible and spreads out in the air.",
            "The white cloud seen above a boiling kettle is not water vapour itself but **tiny droplets of liquid water** formed when the hot vapour cools.",
            "Ice **melts** to water at **0 °C**; water **freezes** to ice at 0 °C. Water **boils** at **100 °C** at normal (sea-level) pressure."
          ]
        },
        {
          heading: "Evaporation and condensation",
          points: [
            "**Evaporation** is the slow change of liquid water into vapour from its surface at any temperature below boiling.",
            "Evaporation is **faster** when it is warm, when the surface area is large, when there is wind, and when the air is dry (low humidity). So wet clothes dry quickest when spread out on a hot, dry, windy day.",
            "Evaporation causes **cooling**. Sweat evaporating cools our body, and water in an earthen pot (matka) stays cool.",
            "**Condensation** is the change of water vapour into liquid water on cooling. Examples: dew drops on grass, fog, clouds, and droplets on the outside of a glass of cold water.",
            "The drops on a cold glass do not leak from inside. They form from **water vapour in the air** that cools on touching the cold glass."
          ]
        },
        {
          heading: "The water cycle",
          points: [
            "The Sun's heat makes water from oceans, rivers, lakes and soil **evaporate**. Plants also release water vapour from their leaves (**transpiration**).",
            "The vapour rises, cools and **condenses** into tiny droplets that form **clouds**.",
            "The droplets join and fall as **precipitation**: rain, snow or hail.",
            "Water flows on the ground as **run-off** into streams and rivers and reaches the sea, while some soaks into the ground as **groundwater**. Then the cycle starts again.",
            "In India, most of the rain comes during the monsoon season."
          ]
        },
        {
          heading: "Water on Earth and saving water",
          points: [
            "About **71%** of the Earth's surface is covered by water. About **97%** of Earth's water is salty water of the oceans, and only about 3% is fresh water, most of which is frozen as ice in glaciers and polar regions.",
            "We get fresh water from rivers, lakes, ponds, rain and groundwater (wells, hand pumps, borewells). Overuse of groundwater makes its level fall.",
            "We can save water by fixing leaking taps, closing taps when not in use, reusing water for plants and **harvesting rainwater**.",
            "Traditional methods such as stepwells (baolis) and johads in Rajasthan collect and store rainwater."
          ]
        }
      ],
      formulas: [
        "Ice melts / water freezes at 0 °C; water boils at 100 °C (normal pressure)",
        "Melting: ice → water | Freezing: water → ice | Evaporation: water → vapour | Condensation: vapour → water",
        "Water cycle: Evaporation → Condensation (clouds) → Precipitation → Run-off / Groundwater → Sea",
        "Earth's water: about 97% salty (oceans), about 3% fresh"
      ],
      terms: [
        { term: "Evaporation", meaning: "Change of liquid water into water vapour from its surface at temperatures below the boiling point." },
        { term: "Condensation", meaning: "Change of water vapour into liquid water on cooling." },
        { term: "Precipitation", meaning: "Water falling from clouds to the ground as rain, snow or hail." },
        { term: "Water cycle", meaning: "The continuous movement of water between the oceans, air and land through evaporation, condensation and precipitation." },
        { term: "Water vapour", meaning: "Water in the gaseous state; it is invisible." },
        { term: "Groundwater", meaning: "Water that soaks into the ground and is stored underground; we draw it with wells and hand pumps." }
      ],
      qa: [
        {
          q: "What is the water cycle? Describe it briefly.",
          a: "The water cycle is the **continuous movement of water** between Earth and the air. The Sun heats water in oceans and rivers and it **evaporates**. The vapour rises, cools and **condenses** into clouds. Then it falls as **rain, snow or hail** (precipitation) and flows back to rivers, the sea and underground."
        },
        {
          q: "Why do drops of water appear on the outside of a glass of cold water?",
          a: "The air contains **water vapour**. When this vapour touches the cold surface of the glass, it cools and **condenses** into tiny drops of water. The water does not come from inside the glass."
        },
        {
          q: "Why do wet clothes dry faster on a hot, windy day if they are spread out?",
          a: "Evaporation is faster when it is **hot**, when there is **wind** and when the **surface area** is large. Spreading the clothes exposes more area, and the wind carries the water vapour away, so they dry faster."
        }
      ],
      quiz: [
        {
          q: "The change of water vapour into liquid water is called:",
          options: ["Evaporation", "Melting", "Condensation", "Freezing"],
          answer: 2,
          explain: "**Condensation** is the change of vapour to liquid on cooling."
        },
        {
          q: "At normal sea-level pressure, pure water boils at:",
          options: ["100 °C", "0 °C", "37 °C", "50 °C"],
          answer: 0,
          explain: "Water boils at **100 °C**; 0 °C is the temperature at which it freezes."
        },
        {
          q: "Which condition helps wet clothes to dry faster?",
          options: ["Folding them tightly", "Spreading them out in the sun and a breeze", "Hanging them in a damp room", "Keeping them in a closed bucket"],
          answer: 1,
          explain: "A large surface area, heat and wind all **increase the rate of evaporation**."
        },
        {
          q: "Water falling from clouds as rain, snow or hail is called:",
          options: ["Precipitation", "Evaporation", "Condensation", "Run-off"],
          answer: 0,
          explain: "Water that falls from clouds is called **precipitation**."
        },
        {
          q: "Most of the water on the Earth is:",
          options: ["Fresh water in rivers and lakes", "Salty water in the oceans", "Ice in glaciers", "Water vapour in the air"],
          answer: 1,
          explain: "About **97% of Earth's water is salty ocean water**."
        },
        {
          q: "Dew drops on grass early in the morning are formed by:",
          options: ["Melting of frost", "Boiling of water", "Evaporation of rain water", "Condensation of water vapour"],
          answer: 3,
          explain: "Water vapour in the air cools during the night and **condenses** into dew drops."
        }
      ]
    },

    // ───────────────────────────── 9. Methods of Separation in Everyday Life ─────────────────────────────
    {
      id: "methods-of-separation-in-everyday-life",
      title: "Methods of Separation in Everyday Life",
      section: "Chemistry",
      summary: "Most things we use are mixtures. This chapter explains why we separate mixtures and the methods used, such as handpicking, winnowing, threshing, sieving, sedimentation, decantation, filtration, evaporation and condensation, with everyday and farm examples.",
      notes: [
        {
          heading: "Mixtures and why we separate them",
          points: [
            "A **mixture** has two or more substances mixed together without any new substance forming. Each substance keeps its own properties. Examples: dal with small stones, sand in water, salt in water.",
            "We separate mixtures to remove **unwanted or harmful** things (stones in rice, dirt in water), to get a **useful** substance (salt from sea water) or to separate two useful substances.",
            "The method we choose depends on the properties of the substances: size, weight, solubility or whether they are magnetic."
          ]
        },
        {
          heading: "Separating solids from solids",
          points: [
            "**Handpicking**: picking out larger pieces by hand, such as stones from rice or dal.",
            "**Threshing**: beating harvested stalks to loosen the grains from them.",
            "**Winnowing**: separating heavier grains from lighter husk using wind. The mixture is dropped from a height; the wind blows the light husk away and the grains fall in a heap.",
            "**Sieving**: separating particles of different sizes using a sieve (chhalni). Atta is sieved to remove bran, and sand is sieved to remove pebbles.",
            "**Magnetic separation**: a magnet pulls out magnetic substances like iron nails from a mixture with sand."
          ]
        },
        {
          heading: "Separating solids from liquids",
          points: [
            "**Sedimentation**: when muddy water is left undisturbed, heavier insoluble particles settle at the bottom as **sediment**.",
            "**Decantation**: slowly pouring out the clear liquid from the top, leaving the sediment behind.",
            "**Filtration**: passing the mixture through filter paper or a cloth. The solid left behind is the **residue** and the clear liquid that passes is the **filtrate**. Tea strainers and the cloth used to make paneer work by filtration.",
            "**Evaporation**: when salt water is heated or left in the sun, the water turns into vapour and the dissolved salt is left behind. Salt is made from sea water in shallow pans using the Sun's heat.",
            "**Condensation**: cooling water vapour gives back liquid water. Evaporation followed by condensation gives pure water from salt water."
          ]
        },
        {
          heading: "Combining methods and dissolving",
          points: [
            "To get clear water from muddy water, use **sedimentation, then decantation, then filtration**. Boiling or chlorination is then needed to kill germs.",
            "A substance that dissolves is the **solute**, the liquid in which it dissolves is the **solvent**, and together they make a **solution**.",
            "A solution in which no more solute can dissolve at that temperature is **saturated**. For many solids, more dissolves when the water is warmer.",
            "A dissolved solid passes through filter paper, so it **cannot be separated by filtration**. We use evaporation instead."
          ]
        }
      ],
      formulas: [
        "Winnowing – separates by weight (uses wind) | Sieving – separates by size | Filtration – separates insoluble solid from liquid",
        "Muddy water → Sedimentation → Decantation → Filtration → clearer water",
        "Salt water → Evaporation → salt (solid left behind)",
        "Salt water → Evaporation + Condensation → pure water"
      ],
      terms: [
        { term: "Mixture", meaning: "Two or more substances mixed together, with each keeping its own properties." },
        { term: "Winnowing", meaning: "Separating heavier grains from lighter husk using wind." },
        { term: "Sieving", meaning: "Separating particles of different sizes using a sieve." },
        { term: "Sedimentation", meaning: "Settling of heavier insoluble particles at the bottom of a liquid when left undisturbed." },
        { term: "Decantation", meaning: "Slowly pouring out the clear liquid, leaving the settled solid behind." },
        { term: "Filtration", meaning: "Separating insoluble solid particles from a liquid by passing it through filter paper or cloth." }
      ],
      qa: [
        {
          q: "Why is winnowing done on a windy day or with a fan?",
          a: "In winnowing the lighter husk must be blown away from the heavier grains. **Wind** (or a fan) carries the light husk away while the heavy grains fall straight down in a heap."
        },
        {
          q: "How will you separate a mixture of salt, sand and water?",
          a: "First **filter** the mixture: the sand stays on the filter paper as residue. The clear filtrate is salt solution. **Heat it so that the water evaporates** and the salt is left behind."
        },
        {
          q: "Why can salt dissolved in water not be separated by filtration?",
          a: "Dissolved salt breaks into extremely tiny particles that **pass through the pores of filter paper** along with water. So we use **evaporation** to get the salt."
        }
      ],
      quiz: [
        {
          q: "Which method uses wind to separate husk from grain?",
          options: ["Sieving", "Winnowing", "Filtration", "Threshing"],
          answer: 1,
          explain: "**Winnowing** blows away the lighter husk and leaves the heavier grains."
        },
        {
          q: "Slowly pouring out clear water from a vessel after the mud has settled is called:",
          options: ["Filtration", "Sieving", "Decantation", "Evaporation"],
          answer: 2,
          explain: "Pouring off the clear liquid, leaving the sediment behind, is **decantation**."
        },
        {
          q: "Common salt is obtained from sea water by:",
          options: ["Filtration", "Decantation", "Winnowing", "Evaporation"],
          answer: 3,
          explain: "The Sun's heat **evaporates** the water in shallow pans and salt is left behind."
        },
        {
          q: "Flour mixed with small stones can be separated easily by:",
          options: ["Sieving", "Evaporation", "Condensation", "Sedimentation"],
          answer: 0,
          explain: "Flour passes through the holes of a **sieve**, while the larger stones stay behind."
        },
        {
          q: "Which of these cannot be separated from water by filtration?",
          options: ["Sand", "Dissolved sugar", "Tea leaves", "Chalk powder"],
          answer: 1,
          explain: "**Dissolved sugar** passes through filter paper. Sand, tea leaves and chalk powder are insoluble solids."
        },
        {
          q: "Which is the correct order of steps for getting clear water from muddy water?",
          options: ["Filtration, decantation, sedimentation", "Decantation, filtration, sedimentation", "Sedimentation, decantation, filtration", "Evaporation, filtration, decantation"],
          answer: 2,
          explain: "First the mud **settles** (sedimentation), then the clear water is **poured off** (decantation) and finally **filtered**."
        }
      ]
    },

    // ───────────────────────────── 10. Living Creatures: Exploring their Characteristics ─────────────────────────────
    {
      id: "living-creatures-exploring-their-characteristics",
      title: "Living Creatures: Exploring their Characteristics",
      section: "Biology",
      summary: "Living things share common characteristics: they need food, respire, respond to their surroundings, grow, reproduce, remove waste and move in some way. This chapter explains these characteristics in plants and animals and how living things differ from non-living things.",
      notes: [
        {
          heading: "Living and non-living things",
          points: [
            "Living things (a dog, a mango tree, a fish) carry out **life processes**. Non-living things (a stone, a table, a toy car) do not.",
            "Living things are made of tiny units called **cells**.",
            "The common characteristics of living things are: need for **food**, **respiration**, **response to stimuli**, **growth**, **reproduction**, **excretion**, **movement** and a **life span**.",
            "A non-living thing may show one of these, for example a car moves and uses fuel. But it does not grow, reproduce or respond like a living thing."
          ]
        },
        {
          heading: "Food, respiration and excretion",
          points: [
            "All living things need **food** for energy, growth and repair. Plants **make their own food** in their leaves using sunlight, water and carbon dioxide (photosynthesis). Animals depend on plants or other animals.",
            "In **respiration** living things use oxygen to release energy from food, and give out carbon dioxide.",
            "Breathing organs differ: **lungs** in humans and other land animals, **gills** in fish, **moist skin** in earthworms, tiny openings called **spiracles** in insects, and tiny pores called **stomata** in leaves of plants.",
            "**Excretion** is the removal of waste made in the body. Humans pass urine and sweat and breathe out carbon dioxide. Plants get rid of wastes by shedding old leaves and bark and by releasing gums and resins."
          ]
        },
        {
          heading: "Response, growth and movement",
          points: [
            "A **stimulus** is a change in the surroundings, such as light, heat, touch, sound or smell. Living things **respond** to stimuli.",
            "We pull our hand away from a hot object. The leaves of the **touch-me-not (Mimosa)** plant fold when touched. Shoots grow towards light and roots grow downwards towards water.",
            "**Growth**: living things increase in size and mass, e.g. a seed grows into a seedling and then a tree, and a baby grows into an adult.",
            "**Movement**: animals move from place to place to find food, shelter and safety. Plants do not usually move from place to place, but parts of them move, e.g. leaves fold and flowers open and close."
          ]
        },
        {
          heading: "Reproduction and life span",
          points: [
            "**Reproduction** is the production of new living things of the same kind. It keeps the species going.",
            "Some animals **lay eggs** (birds, fish, frogs, insects) while others **give birth to young ones** (cow, dog, humans).",
            "Most plants reproduce by **seeds**. Some also grow from a stem cutting (rose), and Bryophyllum grows new plantlets on the edges of its leaves.",
            "Every living thing has a **life span**, the time from birth to death. Some insects live for a few weeks, while some trees live for hundreds of years."
          ]
        }
      ],
      formulas: [
        "Characteristics of living things: Food, Respiration, Response to stimuli, Growth, Reproduction, Excretion, Movement, Life span",
        "Breathing organs: lungs (land animals) | gills (fish) | moist skin (earthworm) | spiracles (insects) | stomata (plants)",
        "Photosynthesis: Carbon dioxide + Water → (sunlight) → Food + Oxygen",
        "Respiration: Food + Oxygen → Energy + Carbon dioxide + Water"
      ],
      terms: [
        { term: "Stimulus", meaning: "A change in the surroundings, such as light, heat or touch, to which a living thing responds." },
        { term: "Respiration", meaning: "The process in which living things use oxygen to release energy from food." },
        { term: "Excretion", meaning: "The removal of waste substances produced in the body of a living thing." },
        { term: "Reproduction", meaning: "The production of new living things of the same kind." },
        { term: "Life span", meaning: "The period from the birth of a living thing to its death." },
        { term: "Photosynthesis", meaning: "The process by which green plants make food using sunlight, water and carbon dioxide." }
      ],
      qa: [
        {
          q: "List any four characteristics of living things. Why can a car not be called living even though it moves and uses fuel?",
          a: "Living things **need food, respire, grow, reproduce, respond to stimuli, excrete wastes and move**. A car moves and uses fuel but it **does not grow, reproduce or respond to its surroundings** like a living thing, so it is non-living."
        },
        {
          q: "How do fish, earthworms and insects breathe?",
          a: "**Fish** breathe through **gills**. **Earthworms** breathe through their **moist skin**. **Insects** breathe through tiny openings on the body called **spiracles**."
        },
        {
          q: "Give two examples of how plants respond to stimuli.",
          a: "The leaves of the **touch-me-not (Mimosa)** plant fold when touched. **Shoots grow towards light**, and roots grow downwards towards water."
        }
      ],
      quiz: [
        {
          q: "The leaves of the touch-me-not plant fold when touched. This shows that plants:",
          options: ["Need food", "Excrete waste", "Reproduce", "Respond to stimuli"],
          answer: 3,
          explain: "Touch is a **stimulus** and the folding of leaves is the plant's response."
        },
        {
          q: "Which organs help a fish to breathe?",
          options: ["Lungs", "Spiracles", "Gills", "Stomata"],
          answer: 2,
          explain: "Fish breathe with **gills**, which take oxygen from water."
        },
        {
          q: "An earthworm breathes through its:",
          options: ["Moist skin", "Gills", "Lungs", "Spiracles"],
          answer: 0,
          explain: "An earthworm breathes through its **moist skin**."
        },
        {
          q: "The removal of waste substances produced in the body is called:",
          options: ["Respiration", "Excretion", "Reproduction", "Growth"],
          answer: 1,
          explain: "**Excretion** is the removal of wastes such as urine and sweat."
        },
        {
          q: "Which of these is true for a living thing but not for a toy car?",
          options: ["It moves from place to place", "It uses energy", "It makes a sound", "It grows and reproduces"],
          answer: 3,
          explain: "Only living things **grow and reproduce**. A toy car does neither."
        },
        {
          q: "Plants prepare their food in their leaves using:",
          options: ["Oxygen, water and soil", "Carbon dioxide, water and sunlight", "Nitrogen, sand and heat", "Oxygen, sunlight and soil"],
          answer: 1,
          explain: "Plants make food by **photosynthesis**, using carbon dioxide, water and sunlight."
        }
      ]
    },

    // ───────────────────────────── 11. Nature's Treasures ─────────────────────────────
    {
      id: "natures-treasures",
      title: "Nature's Treasures",
      section: "Earth and Space",
      summary: "Air, water, soil, forests, minerals and fuels are natural resources that we use every day. This chapter explains what they are, how renewable and non-renewable resources differ, and why we must use them wisely and conserve them.",
      notes: [
        {
          heading: "Natural resources",
          points: [
            "**Natural resources** are things from nature that we use: air, water, sunlight, soil, forests, wildlife, minerals and fuels such as coal and petroleum.",
            "**Renewable resources** are replenished by nature or can be regrown, such as sunlight, wind, water (through the water cycle) and forests if used carefully.",
            "**Non-renewable resources** take millions of years to form and will run out one day: coal, petroleum, natural gas and metal ores.",
            "Although water is renewable, clean fresh water is limited, so it must be used with care."
          ]
        },
        {
          heading: "Air, water and soil",
          points: [
            "**Air** is a mixture of gases: about **78% nitrogen** and **21% oxygen**, with small amounts of argon, carbon dioxide, water vapour and other gases. We need oxygen to breathe and plants need carbon dioxide.",
            "**Water** is used for drinking, farming, industries and making electricity from falling water.",
            "**Soil** forms very slowly, over hundreds of years or more, when rocks are broken down by wind, water and changes in temperature. It mixes with **humus** (decayed plant and animal matter), which makes it fertile.",
            "Soils are of different types: sandy, clayey and loamy. **Loamy soil**, a mix of sand, clay and humus, is good for most crops.",
            "**Soil erosion** is the washing or blowing away of the top layer of soil. Planting trees and grass, and terrace farming on slopes, help to prevent it."
          ]
        },
        {
          heading: "Forests",
          points: [
            "Forests give us wood, bamboo, fruits, honey, gum, lac and medicinal plants, and are the home of many animals.",
            "Trees take in carbon dioxide and release oxygen during photosynthesis. Their roots hold the soil and keep it from being washed away.",
            "**Deforestation**, the cutting down of forests, destroys the homes of animals and leads to soil erosion.",
            "We protect forests by planting trees, saving paper and creating national parks and wildlife sanctuaries."
          ]
        },
        {
          heading: "Minerals and fossil fuels",
          points: [
            "**Minerals** are natural substances found in the Earth's crust. Metals are obtained from rocks called **ores**: iron from iron ore, aluminium from bauxite.",
            "**Fossil fuels** are **coal, petroleum (crude oil) and natural gas**. They formed over millions of years from the remains of dead plants and animals buried deep in the Earth.",
            "Petrol, diesel and kerosene are obtained from petroleum. Fossil fuels are used in vehicles, to produce electricity and for cooking.",
            "Burning fossil fuels releases carbon dioxide and other gases that pollute the air."
          ]
        },
        {
          heading: "Using resources wisely",
          points: [
            "**Sustainable use** means meeting our needs without harming resources for future generations.",
            "Follow the **3 Rs**: **Reduce** use, **Reuse** things and **Recycle** materials such as paper, metal and glass.",
            "Save fuel by using public transport or walking or cycling for short distances, and save electricity by switching off lights and fans when not needed.",
            "Use renewable sources such as solar panels, solar cookers and wind energy where possible."
          ]
        }
      ],
      formulas: [
        "Air: about 78% nitrogen, about 21% oxygen, about 1% other gases",
        "Renewable: sunlight, wind, water, forests | Non-renewable: coal, petroleum, natural gas, minerals",
        "Fossil fuels = coal + petroleum + natural gas",
        "3 Rs: Reduce, Reuse, Recycle"
      ],
      terms: [
        { term: "Natural resource", meaning: "Anything obtained from nature that people use, such as air, water, soil or coal." },
        { term: "Renewable resource", meaning: "A resource that is replenished by nature or can be regrown, e.g. sunlight and wind." },
        { term: "Non-renewable resource", meaning: "A resource that takes millions of years to form and can get exhausted, e.g. coal and petroleum." },
        { term: "Fossil fuel", meaning: "A fuel formed over millions of years from remains of dead plants and animals: coal, petroleum or natural gas." },
        { term: "Humus", meaning: "Decayed plant and animal matter in soil that makes it fertile." },
        { term: "Soil erosion", meaning: "The washing or blowing away of the top layer of the soil." }
      ],
      qa: [
        {
          q: "What are fossil fuels? Why should we use them carefully?",
          a: "Fossil fuels (**coal, petroleum and natural gas**) are formed from the remains of dead plants and animals over **millions of years**. They are non-renewable and will run out, and burning them **pollutes the air**, so we should use them carefully."
        },
        {
          q: "Differentiate between renewable and non-renewable resources, with two examples of each.",
          a: "**Renewable resources** are replenished by nature or can be regrown (sunlight, wind). **Non-renewable resources** take millions of years to form and can be exhausted (coal, petroleum)."
        },
        {
          q: "How do forests help us and the environment?",
          a: "Forests give us **wood, fruits, honey, gum and medicines**. Trees give out **oxygen** and take in carbon dioxide, their roots **hold the soil** against erosion, and forests are the **home of wildlife**."
        }
      ],
      quiz: [
        {
          q: "Which of these is a non-renewable resource?",
          options: ["Sunlight", "Wind", "Coal", "Flowing water"],
          answer: 2,
          explain: "**Coal** took millions of years to form and will get exhausted, so it is non-renewable."
        },
        {
          q: "The most abundant gas in air is:",
          options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Argon"],
          answer: 1,
          explain: "Air has about **78% nitrogen** and 21% oxygen."
        },
        {
          q: "Decayed plant and animal matter in soil that makes it fertile is called:",
          options: ["Humus", "Gravel", "Clay", "Pebbles"],
          answer: 0,
          explain: "**Humus** gives nutrients to the soil and makes it fertile."
        },
        {
          q: "Fossil fuels are formed from:",
          options: ["Salt left behind by sea water", "Rocks melted by volcanoes", "Sand carried by rivers", "Remains of dead plants and animals buried deep in the Earth"],
          answer: 3,
          explain: "Coal, petroleum and natural gas were formed over **millions of years** from buried remains of plants and animals."
        },
        {
          q: "Which soil is best for growing most crops?",
          options: ["Sandy soil", "Clayey soil", "Loamy soil", "Rocky soil"],
          answer: 2,
          explain: "**Loamy soil** is a mixture of sand, clay and humus, holds water and has nutrients."
        },
        {
          q: "Planting trees and grass on slopes helps to reduce:",
          options: ["The oxygen in the air", "Soil erosion", "The humus in the soil", "The rainfall"],
          answer: 1,
          explain: "Roots **hold the soil** and stop it from being washed away by rain."
        }
      ]
    },

    // ───────────────────────────── 12. Beyond Earth ─────────────────────────────
    {
      id: "beyond-earth",
      title: "Beyond Earth",
      section: "Earth and Space",
      summary: "Look up at the sky and you see the Sun, Moon, stars and planets. This chapter explains how these objects differ, why the Moon seems to change shape, how stars form patterns called constellations, and how the Sun and its eight planets form our Solar System.",
      notes: [
        {
          heading: "Objects in the sky",
          points: [
            "Objects in space are called **celestial objects**: the Sun, Moon, stars, planets and others such as comets and asteroids.",
            "**Stars** are huge balls of hot gases that give out their own light and heat. The **Sun** is a star and is the nearest star to Earth. Other stars look tiny because they are very far away.",
            "**Planets** do not have their own light. They shine by reflecting sunlight and **revolve around the Sun**. Earth is a planet. Stars twinkle, while planets usually shine with a steady light.",
            "The **Moon** is Earth's **natural satellite**. It goes around the Earth and shines by reflecting sunlight.",
            "The Sun is about 15 crore km from Earth, and its light takes about 8 minutes to reach us. The Moon is only about 3.8 lakh km away."
          ]
        },
        {
          heading: "The Moon and its phases",
          points: [
            "From the Earth we always see the **same side** of the Moon.",
            "The Moon seems to change shape from day to day. These changes are its **phases**. They happen because, as the Moon goes around the Earth, we see different amounts of its sunlit half.",
            "On **new moon** (amavasya) the Moon is not visible. On **full moon** (purnima) we see its whole bright face.",
            "In the days after new moon the bright part grows (**waxing**). After full moon it shrinks (**waning**). One cycle of phases takes about **29½ days**.",
            "The Moon has no breathable air and no liquid water on its surface."
          ]
        },
        {
          heading: "Stars and constellations",
          points: [
            "A group of stars that forms a pattern in the sky is a **constellation**. Examples: **Ursa Major** (the Big Dipper, called **Saptarishi** in India), **Orion** (the Hunter, with three stars in a row forming its belt) and **Cassiopeia** (a W or M shape).",
            "The **Pole Star (Dhruva Tara)** lies almost exactly above the Earth's North Pole, so in the northern hemisphere it appears nearly fixed in the north while other stars seem to circle around it.",
            "To find the Pole Star, join the **two stars at the outer end of the 'cup'** of Saptarishi and extend that line northwards.",
            "Stars appear to move from east to west during the night because the Earth rotates from west to east."
          ]
        },
        {
          heading: "The Solar System",
          points: [
            "The **Solar System** is the Sun and everything that goes around it: eight planets and their moons, dwarf planets, asteroids and comets.",
            "The planets in order from the Sun: **Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune**.",
            "Mercury is the nearest to the Sun and the smallest planet. Venus is the hottest. Earth is the only planet known to have life. Mars is the red planet. **Jupiter is the largest**. Saturn has bright rings.",
            "**Asteroids** are rocky pieces, mostly found between Mars and Jupiter. **Comets** are icy bodies that grow bright tails near the Sun. A **meteor** (shooting star) is a streak of light made when a small piece of rock burns in the Earth's atmosphere.",
            "The Earth **rotates** on its axis once in about 24 hours, causing day and night. It **revolves** around the Sun once in about 365¼ days."
          ]
        },
        {
          heading: "Exploring space: India's missions",
          points: [
            "We explore space with telescopes, satellites, space probes, rockets and astronauts.",
            "**Aryabhata** (1975) was India's first satellite, built by ISRO. In 1984 Rakesh Sharma became the first Indian to travel into space.",
            "**Mangalyaan** (Mars Orbiter Mission) reached Mars's orbit in 2014, on India's very first attempt.",
            "**Chandrayaan-3** landed near the Moon's south pole region in August 2023. **Aditya-L1**, launched in 2023, studies the Sun."
          ]
        }
      ],
      formulas: [
        "Planets in order from the Sun: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune",
        "Sun to Earth ≈ 15 crore km; Earth to Moon ≈ 3.8 lakh km; sunlight takes about 8 minutes to reach Earth",
        "Moon's cycle of phases ≈ 29½ days",
        "Earth rotates once in 24 hours (day and night); revolves once in 365¼ days (a year)"
      ],
      terms: [
        { term: "Star", meaning: "A huge ball of hot gases that gives out its own light and heat; the Sun is a star." },
        { term: "Planet", meaning: "A large body that goes around the Sun and shines by reflected sunlight." },
        { term: "Natural satellite", meaning: "A natural body that goes around a planet, e.g. the Moon around the Earth." },
        { term: "Constellation", meaning: "A group of stars that forms a recognisable pattern in the sky." },
        { term: "Phases of the Moon", meaning: "The different shapes of the bright part of the Moon seen from Earth over a month." },
        { term: "Solar System", meaning: "The Sun together with the planets and all other objects that go around it." }
      ],
      qa: [
        {
          q: "Differentiate between a star and a planet.",
          a: "A **star** is a huge ball of hot gases that gives out its **own light and heat** (the Sun). A **planet** has **no light of its own**; it shines by reflecting sunlight and revolves around the Sun (Earth, Mars). Stars twinkle, whereas planets usually shine steadily."
        },
        {
          q: "Why does the Moon appear to change its shape?",
          a: "The Moon shines by sunlight and half of it is always lit. As it **goes around the Earth**, we see **different amounts of its lit half**, so its shape seems to change from new moon to full moon and back. These changes are the phases of the Moon."
        },
        {
          q: "How can you find the Pole Star using Saptarishi (Ursa Major)?",
          a: "Locate the seven stars of Saptarishi. Join the **two stars at the outer end of its 'cup'** with an imaginary line and extend it towards the north. It points to the **Pole Star (Dhruva Tara)**."
        }
      ],
      quiz: [
        {
          q: "Which of these shines by its own light?",
          options: ["The Moon", "Mars", "The Sun", "The Earth"],
          answer: 2,
          explain: "The **Sun** is a star and gives out its own light. The Moon and planets only reflect sunlight."
        },
        {
          q: "Which planet is nearest to the Sun?",
          options: ["Mercury", "Venus", "Earth", "Mars"],
          answer: 0,
          explain: "**Mercury** is the closest planet to the Sun."
        },
        {
          q: "The Moon goes through one full cycle of phases in about:",
          options: ["7 days", "15 days", "365 days", "29½ days"],
          answer: 3,
          explain: "From one new moon to the next takes about **29½ days**."
        },
        {
          q: "Which is the largest planet in the Solar System?",
          options: ["Saturn", "Jupiter", "Neptune", "Earth"],
          answer: 1,
          explain: "**Jupiter** is the largest planet of the Solar System."
        },
        {
          q: "A group of stars forming a recognisable pattern in the sky is called a:",
          options: ["Satellite", "Comet", "Constellation", "Meteor"],
          answer: 2,
          explain: "A pattern of stars such as Saptarishi or Orion is a **constellation**."
        },
        {
          q: "India's first satellite, launched in 1975, was:",
          options: ["Chandrayaan", "Aryabhata", "Mangalyaan", "Aditya-L1"],
          answer: 1,
          explain: "**Aryabhata** (1975) was India's first satellite. Chandrayaan goes to the Moon, Mangalyaan to Mars and Aditya-L1 to study the Sun."
        }
      ]
    }
  ]
});
