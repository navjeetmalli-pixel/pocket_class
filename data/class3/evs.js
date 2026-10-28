// Class 3 EVS (Environmental Studies): organised by topic.
// Format: see CONTENT_GUIDE.md
StudyData.add(3, "evs", {
  // What this content follows. match: "textbook" | "older-book" | "topic". Set reviewed to a date once a teacher has checked it.
  syllabus: {board: "CBSE", match: "topic", books: [], note: "Chapter names and order may not match your textbook.", reviewed: false},
  chapters: [
    // ───────────────────────────── 1. My Family ─────────────────────────────
    {
      id: "my-family",
      title: "My Family",
      section: "Family and Friends",
      summary: "A family is a group of people who live together and care for each other. This chapter looks at different kinds of families, the relatives we have and how everyone helps at home.",
      notes: [
        {
          heading: "What is a family?",
          points: [
            "A **family** is a group of people who live together and care for each other.",
            "Families can be **nuclear** (parents and their children) or **joint** (grandparents, uncles, aunts and cousins living together with the parents and children).",
            "Every family is special. Some families are big and some are small, but all families love and support their members."
          ]
        },
        {
          heading: "Relatives",
          points: [
            "Relatives are people related to us by blood or marriage, such as grandparents, uncles, aunts and cousins.",
            "A father's brother is called **chacha** (uncle), and a mother's brother is called **mama**.",
            "The children of our uncles and aunts are our **cousins**."
          ]
        },
        {
          heading: "Helping at home",
          points: [
            "Everyone in the family can help with work such as cleaning, cooking, setting the table and watering plants.",
            "When we share the work, the home stays happy and everyone gets time to rest, play and study.",
            "Helping at home teaches us **responsibility** and care for others."
          ]
        }
      ],
      formulas: [
        "Family = people who live together and care for each other",
        "Nuclear family = parents + children; Joint family = many relatives living together"
      ],
      terms: [
        { term: "Family", meaning: "A group of people who live together and care for each other." },
        { term: "Nuclear family", meaning: "A family made of parents and their children." },
        { term: "Joint family", meaning: "A family in which grandparents, uncles, aunts and cousins live together with the parents and children." },
        { term: "Relative", meaning: "A person who is related to us, such as an aunt, uncle or cousin." },
        { term: "Responsibility", meaning: "A job or duty that we should do well, like helping at home." }
      ],
      qa: [
        {
          q: "What is the difference between a nuclear family and a joint family?",
          a: "A **nuclear family** has only parents and their children. A **joint family** also has grandparents, uncles, aunts and cousins living together."
        },
        {
          q: "Name two ways you can help at home.",
          a: "I can water the plants and set the table for meals. I can also keep my room tidy and fold my clothes."
        }
      ],
      quiz: [
        {
          q: "Who is your father's brother?",
          options: ["Your uncle (chacha)","Your cousin","Your grandfather","Your nephew"],
          answer: 0,
          explain: "A father's brother is called chacha, which means uncle."
        },
        {
          q: "A family that has only parents and their children is called:",
          options: ["A joint family","A nuclear family","A neighbourhood","A community"],
          answer: 1,
          explain: "A family of parents and children is a nuclear family."
        },
        {
          q: "Which of these is a good way to help at home?",
          options: ["Refusing to help with any work","Scattering toys on the floor","Setting the table for meals","Leaving dirty plates in the sink"],
          answer: 2,
          explain: "Setting the table is a helpful job that shares the work at home."
        },
        {
          q: "Your mother's mother is your:",
          options: ["Paternal aunt","Cousin","Nephew","Maternal grandmother"],
          answer: 3,
          explain: "Your mother's mother is your maternal grandmother (nani or dadi depends on the side)."
        },
        {
          q: "What do we call the children of our uncles and aunts?",
          options: ["Cousins","Grandparents","Neighbours","Parents"],
          answer: 0,
          explain: "The children of our uncles and aunts are our cousins."
        }
      ]
    },

    // ───────────────────────────── 2. Plants Around Us ─────────────────────────────
    {
      id: "plants-around-us",
      title: "Plants Around Us",
      section: "Plants and Animals",
      summary: "Most plants have roots, stem, leaves, flowers, fruits and seeds, and each part has its own work. Plants give us food, shade, wood and clean air.",
      notes: [
        {
          heading: "Parts of a plant",
          points: [
            "Most plants have **roots, stem, leaves, flowers, fruits and seeds**.",
            "**Roots** hold the plant firmly in the soil and absorb water and minerals from it.",
            "The **stem** carries water and food between the roots and the leaves, and holds the leaves and flowers up.",
            "**Flowers** make seeds and fruits, and many flowers attract bees and butterflies."
          ]
        },
        {
          heading: "What leaves do",
          points: [
            "Most leaves are green because they contain **chlorophyll**.",
            "Using sunlight, air and water, leaves make food for the plant. This is called **photosynthesis**.",
            "During this process plants release **oxygen**, which we need to breathe."
          ]
        },
        {
          heading: "Plants are useful to us",
          points: [
            "Plants give us food, medicines, wood, cotton, oxygen and shade.",
            "Trees hold the soil together and stop it from washing away.",
            "Trees also give homes and food to birds and other animals."
          ]
        }
      ],
      formulas: [
        "Plant parts: roots, stem, leaves, flowers, fruits, seeds",
        "Photosynthesis: sunlight + water + air → food (in the leaves)"
      ],
      terms: [
        { term: "Roots", meaning: "The part of the plant that grows in the soil, holds it firmly and takes in water." },
        { term: "Stem", meaning: "The part that carries water and food and holds up the leaves and flowers." },
        { term: "Chlorophyll", meaning: "The green substance in leaves that helps plants make food." },
        { term: "Photosynthesis", meaning: "The process by which plants use sunlight, air and water to make food." },
        { term: "Seed", meaning: "The part of a plant from which a new plant can grow." }
      ],
      qa: [
        {
          q: "Why do most leaves look green?",
          a: "Leaves contain **chlorophyll**, a green substance that helps the plant make food using sunlight."
        },
        {
          q: "Name two things the stem of a plant does.",
          a: "The stem carries water and food between the roots and the leaves. It also holds the leaves and flowers up."
        }
      ],
      quiz: [
        {
          q: "Which part of the plant takes in water from the soil?",
          options: ["Leaves","Roots","Flowers","Fruits"],
          answer: 1,
          explain: "Roots absorb water and minerals from the soil."
        },
        {
          q: "The green colour of leaves comes from:",
          options: ["Water","Soil","Chlorophyll","Sap"],
          answer: 2,
          explain: "Chlorophyll is the green substance in leaves that helps the plant make food."
        },
        {
          q: "Which gas do plants release that we need to breathe?",
          options: ["Hydrogen","Methane","Carbon dioxide","Oxygen"],
          answer: 3,
          explain: "Plants release oxygen, which we breathe in."
        },
        {
          q: "What is the name of the process by which plants make food?",
          options: ["Digestion","Pollination","Germination","Photosynthesis"],
          answer: 0,
          explain: "Photosynthesis is the process in which plants make food using sunlight, air and water."
        },
        {
          q: "How do seeds help plants spread to new places?",
          options: ["They float away and never grow","They are carried by wind, water and animals","They stay only under the parent plant","They can grow only on rocks"],
          answer: 1,
          explain: "Seeds spread through wind, water, animals and birds, so new plants can grow far away."
        }
      ]
    },

    // ───────────────────────────── 3. Animals Around Us ─────────────────────────────
    {
      id: "animals-around-us",
      title: "Animals Around Us",
      section: "Plants and Animals",
      summary: "Animals need food, water, air and shelter to live. They move in different ways and eat different kinds of food, and we can group them by what they eat.",
      notes: [
        {
          heading: "What animals need",
          points: [
            "All animals need **food, water, air and shelter** to live.",
            "Most animals breathe air. Fish breathe with **gills**, which take oxygen from water.",
            "Animals grow, move, sense their surroundings and have young ones."
          ]
        },
        {
          heading: "How animals move",
          points: [
            "Cows, dogs and lions walk or run on land.",
            "Fish swim with their fins, and birds fly with their wings.",
            "Kangaroos hop and earthworms crawl on the ground."
          ]
        },
        {
          heading: "What animals eat",
          points: [
            "**Herbivores** eat only plants, like cows, goats and deer.",
            "**Carnivores** eat other animals, like lions, tigers and eagles.",
            "**Omnivores** eat both plants and animals, like humans, crows and bears."
          ]
        },
        {
          heading: "Animal homes",
          points: [
            "A sparrow builds a **nest**, a rabbit lives in a **burrow** and a honeybee lives in a **hive**.",
            "A lion lives in a **den**, and cows are kept in a cattle shed."
          ]
        }
      ],
      formulas: [
        "Herbivore → eats plants",
        "Carnivore → eats animals",
        "Omnivore → eats both plants and animals"
      ],
      terms: [
        { term: "Herbivore", meaning: "An animal that eats only plants." },
        { term: "Carnivore", meaning: "An animal that eats other animals." },
        { term: "Omnivore", meaning: "An animal that eats both plants and animals." },
        { term: "Burrow", meaning: "A hole or tunnel dug in the ground that some animals live in." },
        { term: "Gills", meaning: "Organs that fish use to take in oxygen from water." }
      ],
      qa: [
        {
          q: "Why are cows herbivores while lions are carnivores?",
          a: "Cows eat grass and leaves, so they are herbivores. Lions hunt other animals for food, so they are carnivores."
        },
        {
          q: "Name two animals that can fly and two that can swim.",
          a: "Sparrows and crows can fly. Fish and dolphins can swim."
        }
      ],
      quiz: [
        {
          q: "An animal that eats only plants is called a:",
          options: ["Parasite","Carnivore","Herbivore","Omnivore"],
          answer: 2,
          explain: "A herbivore eats only plants, like a cow or a deer."
        },
        {
          q: "Which of these is an omnivore?",
          options: ["Deer","Lion","Cow","Human"],
          answer: 3,
          explain: "Humans eat both plants and animals, so they are omnivores."
        },
        {
          q: "Which animal lives in a beehive?",
          options: ["Honeybee","Rabbit","Sparrow","Tiger"],
          answer: 0,
          explain: "Honeybees live together in a hive that they build."
        },
        {
          q: "Which animal flies with wings?",
          options: ["Goat","Sparrow","Cow","Fish"],
          answer: 1,
          explain: "Birds such as sparrows fly with their wings."
        },
        {
          q: "What do all animals need to live?",
          options: ["Only milk","Only sunlight","Food, water, air and shelter","Only a house"],
          answer: 2,
          explain: "All animals need food, water, air and a shelter to live."
        }
      ]
    },

    // ───────────────────────────── 4. Food We Eat ─────────────────────────────
    {
      id: "food-we-eat",
      title: "Food We Eat",
      section: "Food",
      summary: "We get our food from plants and animals. Food gives us energy and the nutrients our body needs, and a balanced diet keeps us healthy and strong.",
      notes: [
        {
          heading: "Where our food comes from",
          points: [
            "Plants give us **cereals** like rice and wheat, **pulses** like moong and masoor dal, vegetables, fruits and oil seeds.",
            "Animals give us **milk**, **eggs**, **honey**, meat and fish.",
            "Some foods come from the parts of plants we eat: roots, stems, leaves, fruits and seeds."
          ]
        },
        {
          heading: "Parts of plants we eat",
          points: [
            "Carrot and radish are **roots**.",
            "Sugarcane is a **stem**, and spinach and coriander are **leaves**.",
            "Mango and banana are **fruits**, and rice and peas are **seeds**."
          ]
        },
        {
          heading: "Nutrients in our food",
          points: [
            "**Carbohydrates** give us energy, found in roti, rice and potatoes.",
            "**Proteins** help our body grow and repair itself, found in dal, eggs, paneer and soya.",
            "**Vitamins and minerals** protect our health, found in fruits and vegetables."
          ]
        },
        {
          heading: "A balanced diet",
          points: [
            "A **balanced diet** has all the nutrients in the right amounts.",
            "Eat a variety of food: roti or rice, dal, vegetables, fruits, milk and curd.",
            "Too many sweets and fried snacks are not healthy for us."
          ]
        }
      ],
      formulas: [
        "Balanced diet = all nutrients in the right amounts",
        "Carbohydrates → energy; Proteins → growth; Vitamins and minerals → protect health"
      ],
      terms: [
        { term: "Nutrients", meaning: "Useful substances in food that our body needs to stay healthy and grow." },
        { term: "Balanced diet", meaning: "Food that contains all the nutrients in the right amounts." },
        { term: "Carbohydrate", meaning: "A nutrient that gives our body energy." },
        { term: "Protein", meaning: "A nutrient that helps our body grow and repair itself." },
        { term: "Vitamin", meaning: "A nutrient needed in small amounts to protect our health." }
      ],
      qa: [
        {
          q: "Why should we eat fruits and vegetables every day?",
          a: "Fruits and vegetables give **vitamins and minerals** that keep us healthy and help protect us from illness."
        },
        {
          q: "Name one food that comes from an animal and one that comes from a plant.",
          a: "Milk comes from animals like cows and buffaloes. Rice comes from a plant."
        }
      ],
      quiz: [
        {
          q: "Which of these is a food that comes from an animal?",
          options: ["Carrot","Rice","Mango","Milk"],
          answer: 3,
          explain: "Milk comes from animals such as cows and buffaloes."
        },
        {
          q: "Carrot is which part of the plant?",
          options: ["Root","Leaf","Flower","Fruit"],
          answer: 0,
          explain: "We eat the root of the carrot plant."
        },
        {
          q: "What is a balanced diet?",
          options: ["Eating only sweets","Eating food with all nutrients in the right amounts","Eating only rice","Eating only fast food"],
          answer: 1,
          explain: "A balanced diet gives us all the nutrients in the right amounts."
        },
        {
          q: "Which nutrient helps our body grow?",
          options: ["Oil","Carbohydrate","Protein","Salt"],
          answer: 2,
          explain: "Protein helps our body grow and repair itself. Carbohydrates mainly give energy."
        },
        {
          q: "Which of these is a seed that we eat?",
          options: ["Spinach","Sugarcane","Coriander","Rice"],
          answer: 3,
          explain: "Rice grains are seeds of the rice plant."
        }
      ]
    },

    // ───────────────────────────── 5. Water ─────────────────────────────
    {
      id: "water",
      title: "Water",
      section: "Water",
      summary: "Water is needed by every living thing. We get water from rain, rivers, lakes and wells, and we must use it carefully so that it is not wasted.",
      notes: [
        {
          heading: "Water all around us",
          points: [
            "Water covers most of the Earth's surface, and most of it is in the sea.",
            "All living things need water: plants, animals and humans.",
            "Water is a liquid with no fixed shape. It takes the shape of the container it is poured into."
          ]
        },
        {
          heading: "Sources of water",
          points: [
            "Rain, rivers, lakes, ponds, wells and handpumps are sources of water.",
            "Rivers such as the **Ganga** and the **Yamuna** provide water to crops, towns and cities.",
            "Sea water is **salty**, so we cannot drink it directly."
          ]
        },
        {
          heading: "Water in three forms",
          points: [
            "Water can be a **solid** (ice), a **liquid** (water) or a **gas** (water vapour or steam).",
            "Water freezes into ice when it is cooled, and it turns into steam when it is heated.",
            "Water boils at 100 °C and freezes at 0 °C."
          ]
        },
        {
          heading: "Saving water",
          points: [
            "Close the tap while brushing your teeth and fix any leaking tap.",
            "Use a bucket for bathing instead of letting water run.",
            "Collect rainwater in tanks to use later for plants and cleaning."
          ]
        }
      ],
      formulas: [
        "Ice = solid; water = liquid; steam or water vapour = gas",
        "Water freezes at 0 °C and boils at 100 °C"
      ],
      terms: [
        { term: "Source of water", meaning: "A place from which we get water, such as a river, lake, well or rain." },
        { term: "Rainwater harvesting", meaning: "Collecting and storing rainwater so that it can be used later." },
        { term: "Water vapour", meaning: "Water in the form of a gas, which is invisible in the air." },
        { term: "Conserve", meaning: "To use something carefully so that it is not wasted." },
        { term: "Solid", meaning: "A state of matter that has a fixed shape, such as ice." }
      ],
      qa: [
        {
          q: "Why can't we drink sea water?",
          a: "Sea water is **salty**, and too much salt is harmful to our body. We need fresh water to drink."
        },
        {
          q: "How can we save water at home?",
          a: "We can close taps tightly, repair leaks, use a bucket for bathing and reuse water for cleaning where possible."
        }
      ],
      quiz: [
        {
          q: "Which of these is salty and not fit for drinking?",
          options: ["Sea water","Tap water","Rain water","Well water"],
          answer: 0,
          explain: "Sea water is salty, so it is not safe to drink directly."
        },
        {
          q: "At what temperature does water freeze into ice?",
          options: ["50 degrees Celsius","0 degrees Celsius","100 degrees Celsius","25 degrees Celsius"],
          answer: 1,
          explain: "Water freezes into ice at 0 degrees Celsius."
        },
        {
          q: "Steam is water in the form of a:",
          options: ["Crystal","Solid","Gas","Liquid"],
          answer: 2,
          explain: "Steam is water vapour, which is a gas."
        },
        {
          q: "Which of these is a good way to save water?",
          options: ["Washing the car with a hose for hours","Throwing away drinking water","Leaving the tap running while brushing","Fixing a leaking tap"],
          answer: 3,
          explain: "Fixing a leaking tap stops water from being wasted."
        },
        {
          q: "Which of these is a river in India?",
          options: ["Ganga","Sahara","Himalaya","Thar"],
          answer: 0,
          explain: "The Ganga is a river. The Sahara and the Thar are deserts, and the Himalaya are mountains."
        }
      ]
    },

    // ───────────────────────────── 6. Houses and Shelters ─────────────────────────────
    {
      id: "houses-and-shelters",
      title: "Houses and Shelters",
      section: "Shelter",
      summary: "Every living thing needs a shelter. Houses are built with materials found nearby, and they are shaped to suit the weather of each place.",
      notes: [
        {
          heading: "Why we need shelter",
          points: [
            "A **shelter** protects us from rain, sun, wind, cold and wild animals.",
            "Animals also need shelters, such as a bird's nest, a rabbit's burrow or a beehive."
          ]
        },
        {
          heading: "Houses in different places",
          points: [
            "In hilly areas, houses have **sloping roofs** so that rain and snow slide off.",
            "In very cold, snowy places, people in the Arctic built **igloos** from blocks of ice or snow.",
            "In Kashmir, some families live in **houseboats** on Dal Lake."
          ]
        },
        {
          heading: "Materials used",
          points: [
            "Villages often use mud, stone, grass and bamboo, which are found nearby.",
            "In cities, houses are built with bricks, cement, steel and glass.",
            "Bamboo houses are common in parts of the north-east, where bamboo grows well."
          ]
        },
        {
          heading: "Stilt houses",
          points: [
            "In areas that flood often, such as parts of Assam, people build houses on tall poles called **stilts**.",
            "The raised house keeps floodwater from entering easily."
          ]
        }
      ],
      formulas: [
        "A shelter protects us from rain, sun, wind, cold and animals",
        "Houses are built with materials that are found nearby and suit the weather"
      ],
      terms: [
        { term: "Shelter", meaning: "A place that protects a living thing from weather and danger." },
        { term: "Igloo", meaning: "A house made of blocks of ice or snow, built in very cold places." },
        { term: "Houseboat", meaning: "A boat that is lived in as a home, found on lakes and backwaters." },
        { term: "Stilts", meaning: "Tall poles on which a house is built to keep it above water or ground." },
        { term: "Material", meaning: "The substance from which something is made, such as mud, bamboo or bricks." }
      ],
      qa: [
        {
          q: "Why do houses in hilly areas have sloping roofs?",
          a: "The slope helps rain and snow slide off, so water does not collect on the roof and cause leaks."
        },
        {
          q: "Why do people in flood-prone areas build stilt houses?",
          a: "The house is raised high on poles, so floodwater does not enter the house easily."
        }
      ],
      quiz: [
        {
          q: "Which house is made of blocks of snow or ice?",
          options: ["Stilt house","Igloo","Tent","Houseboat"],
          answer: 1,
          explain: "An igloo is built from blocks of snow or ice in very cold places."
        },
        {
          q: "Where do families often live in houseboats?",
          options: ["Sahara Desert","Thar Desert","Dal Lake in Kashmir","Mount Everest"],
          answer: 2,
          explain: "Many families in Kashmir live in houseboats on Dal Lake."
        },
        {
          q: "Why do hill houses have sloping roofs?",
          options: ["So that the house looks taller","So that the sun is blocked","To store water","So that rain and snow slide off"],
          answer: 3,
          explain: "Sloping roofs help rain and snow slide off the house."
        },
        {
          q: "Which material is commonly used to build houses in villages?",
          options: ["Mud and grass","Glass only","Plastic only","Gold"],
          answer: 0,
          explain: "Villages often use mud, grass, stone and bamboo, which are found nearby."
        },
        {
          q: "What is a shelter?",
          options: ["A kind of food","A place that protects us from rain, sun and cold","A type of vehicle","A kind of plant"],
          answer: 1,
          explain: "A shelter is a place that protects us from the weather and danger."
        }
      ]
    },

    // ───────────────────────────── 7. Our Body and Senses ─────────────────────────────
    {
      id: "our-body-and-senses",
      title: "Our Body and Senses",
      section: "Our Body",
      summary: "We have five senses that help us know the world around us. Each sense works through a special part of the body, and we must take care of them.",
      notes: [
        {
          heading: "Our five senses",
          points: [
            "We have five senses: **sight** (eyes), **hearing** (ears), **smell** (nose), **taste** (tongue) and **touch** (skin).",
            "Our senses send messages to the brain, which tells us what we are seeing, hearing, smelling, tasting or feeling."
          ]
        },
        {
          heading: "How the senses help us",
          points: [
            "Eyes help us see colours, shapes and people.",
            "Ears help us hear music, a friend's voice and warnings.",
            "The nose helps us smell food and detect smoke, and the tongue tastes sweet, sour, salty and bitter flavours.",
            "Skin helps us feel hot, cold, soft and rough things."
          ]
        },
        {
          heading: "Our body's shape and support",
          points: [
            "Our **bones** make up the skeleton, which gives our body its shape and protects our organs.",
            "**Muscles** work with bones to help us move, run and jump."
          ]
        },
        {
          heading: "Taking care of our senses",
          points: [
            "Never look directly at the sun, because strong sunlight can harm our eyes.",
            "Keep away from very loud sounds, which can damage our ears.",
            "Wash your eyes and face gently with clean water."
          ]
        }
      ],
      formulas: [
        "5 senses: sight, hearing, smell, taste, touch",
        "Eyes → see; ears → hear; nose → smell; tongue → taste; skin → touch"
      ],
      terms: [
        { term: "Sense organ", meaning: "A part of the body that helps us sense the world, such as the eyes or ears." },
        { term: "Sight", meaning: "The sense we use to see with our eyes." },
        { term: "Skeleton", meaning: "The framework of bones that gives our body its shape." },
        { term: "Muscle", meaning: "A body part that helps us move by working with the bones." },
        { term: "Touch", meaning: "The sense we use to feel hot, cold, soft and hard things through our skin." }
      ],
      qa: [
        {
          q: "Which sense organs help us enjoy a mango?",
          a: "The **eyes** see its yellow colour, the **nose** smells its sweet fragrance and the **tongue** tastes its sweetness."
        },
        {
          q: "Why should we avoid staring at the sun?",
          a: "Strong sunlight can damage our eyes, so we should never look directly at the sun."
        }
      ],
      quiz: [
        {
          q: "How many senses do we have?",
          options: ["3","4","5","6"],
          answer: 2,
          explain: "We have five senses: sight, hearing, smell, taste and touch."
        },
        {
          q: "Which organ helps us hear?",
          options: ["Nose","Skin","Eyes","Ears"],
          answer: 3,
          explain: "Our ears help us hear sounds."
        },
        {
          q: "Which sense helps us feel hot and cold?",
          options: ["Touch","Sight","Hearing","Smell"],
          answer: 0,
          explain: "Our skin gives us the sense of touch, which helps us feel hot and cold."
        },
        {
          q: "Which organ do we use to smell a flower?",
          options: ["Tongue","Nose","Skin","Ear"],
          answer: 1,
          explain: "We smell with our nose."
        },
        {
          q: "What gives our body its shape and protects our organs?",
          options: ["Air","Sugar","Bones","Water"],
          answer: 2,
          explain: "Bones form the skeleton, which gives our body its shape and protects the organs."
        }
      ]
    },

    // ───────────────────────────── 8. Travel and Transport ─────────────────────────────
    {
      id: "travel-and-transport",
      title: "Travel and Transport",
      section: "Travel",
      summary: "People and goods travel by land, water and air. Vehicles need fuel or electricity to move, and we must follow safety rules whenever we travel.",
      notes: [
        {
          heading: "Ways of travel",
          points: [
            "We travel by **land**, by **water** and by **air**.",
            "On land we use walking, bullock carts, cycles, buses, cars and trains.",
            "On water we use boats, ferries and ships. In the air we use aeroplanes and helicopters."
          ]
        },
        {
          heading: "What makes vehicles move",
          points: [
            "Many vehicles run on **fuel** such as petrol, diesel or CNG.",
            "Some trains and metro trains run on electricity.",
            "Bullock carts and cycles are moved by animals or by people pedalling."
          ]
        },
        {
          heading: "Safe travel",
          points: [
            "Always wear a **seat belt** when you travel in a car.",
            "Wear a **helmet** when riding a two-wheeler to protect your head.",
            "Cross the road at a **zebra crossing** and look both ways first."
          ]
        },
        {
          heading: "Transport in India",
          points: [
            "Indian Railways is one of the largest railway networks in the world.",
            "Metro trains run in big cities such as Delhi and Kolkata.",
            "Ships and boats carry people and goods along rivers and coasts."
          ]
        }
      ],
      formulas: [
        "Land: road and rail; Water: boats and ships; Air: aeroplanes and helicopters",
        "Fuel = petrol, diesel, CNG (or electricity for some trains)"
      ],
      terms: [
        { term: "Transport", meaning: "Means of carrying people or goods from one place to another." },
        { term: "Fuel", meaning: "A substance, such as petrol or diesel, that is burnt to make a vehicle move." },
        { term: "Ferry", meaning: "A boat that carries people and vehicles across a river or sea." },
        { term: "Zebra crossing", meaning: "A marked place on a road where people can cross safely." },
        { term: "Traffic", meaning: "The movement of vehicles and people on roads." }
      ],
      qa: [
        {
          q: "Name one vehicle for each: land, water and air.",
          a: "A bus travels on land, a boat travels on water and an aeroplane travels in the air."
        },
        {
          q: "Why should we wear a helmet while riding a scooter?",
          a: "A helmet protects our head from serious injury if we fall or have an accident."
        }
      ],
      quiz: [
        {
          q: "Which vehicle travels in the air?",
          options: ["Boat","Bicycle","Bus","Aeroplane"],
          answer: 3,
          explain: "An aeroplane flies in the air."
        },
        {
          q: "Which of these is a vehicle that travels on water?",
          options: ["Ship","Train","Car","Bullock cart"],
          answer: 0,
          explain: "A ship travels on water."
        },
        {
          q: "What should you wear while riding a two-wheeler?",
          options: ["Sunglasses","A helmet","Slippers","A scarf"],
          answer: 1,
          explain: "A helmet protects our head while riding a two-wheeler."
        },
        {
          q: "What is the fuel that many cars and buses use?",
          options: ["Wood only","Sand","Petrol or diesel","Water"],
          answer: 2,
          explain: "Many cars and buses run on petrol, diesel or CNG."
        },
        {
          q: "Which way of transport runs on rails?",
          options: ["Scooter","Cycle","Auto-rickshaw","Train"],
          answer: 3,
          explain: "A train runs on rails."
        }
      ]
    },

    // ───────────────────────────── 9. Festivals and Celebrations ─────────────────────────────
    {
      id: "festivals-and-celebrations",
      title: "Festivals and Celebrations",
      section: "Family and Friends",
      summary: "India has many festivals, and people celebrate them with family, friends and neighbours. Festivals show our culture, traditions and shared joy.",
      notes: [
        {
          heading: "Festivals bring people together",
          points: [
            "India is a land of many festivals, and people celebrate them in many different ways.",
            "We celebrate festivals with family, friends and neighbours, sharing food, sweets and happy moments.",
            "Festivals keep our traditions and culture alive."
          ]
        },
        {
          heading: "Some well-known festivals",
          points: [
            "**Diwali** is the festival of lights, when people light diyas and burst crackers.",
            "**Holi** is the festival of colours, when people play with coloured powder and water.",
            "**Gurpurab** celebrates the birth of Guru Nanak Dev Ji, and Christmas is celebrated on 25 December.",
            "**Eid** is celebrated by Muslims with prayers, sweets and new clothes."
          ]
        },
        {
          heading: "Harvest festivals",
          points: [
            "Harvest festivals thank nature for a good crop.",
            "**Baisakhi** is a harvest festival of Punjab, and **Pongal** is celebrated in Tamil Nadu.",
            "**Onam** is a festival of Kerala, celebrated with flower carpets and feasts."
          ]
        },
        {
          heading: "Celebrating safely and kindly",
          points: [
            "Burst crackers carefully and far from houses, children and dry grass.",
            "Respect all festivals, because people of every faith celebrate their own.",
            "Share sweets with neighbours and help others feel included."
          ]
        }
      ],
      formulas: [
        "Diwali = festival of lights",
        "Holi = festival of colours",
        "Baisakhi and Pongal = harvest festivals"
      ],
      terms: [
        { term: "Festival", meaning: "A special day or time when people celebrate together." },
        { term: "Tradition", meaning: "A custom that is passed down from one generation to the next." },
        { term: "Harvest", meaning: "The time when crops are cut and gathered from the fields." },
        { term: "Culture", meaning: "The way of life, customs and beliefs of a group of people." },
        { term: "Celebration", meaning: "A happy event or activity to mark a special day." }
      ],
      qa: [
        {
          q: "Why do we celebrate festivals?",
          a: "We celebrate festivals to remember special events, thank nature for good crops, and spend happy times with family and friends."
        },
        {
          q: "Why is Holi called the festival of colours?",
          a: "On Holi people play with coloured powder and water, spreading joy and friendship."
        }
      ],
      quiz: [
        {
          q: "Which festival is known as the festival of lights?",
          options: ["Diwali","Pongal","Baisakhi","Holi"],
          answer: 0,
          explain: "Diwali is known as the festival of lights."
        },
        {
          q: "Which festival is known as the festival of colours?",
          options: ["Christmas","Holi","Diwali","Onam"],
          answer: 1,
          explain: "Holi is known as the festival of colours."
        },
        {
          q: "Baisakhi is a harvest festival of which state?",
          options: ["Assam","Gujarat","Punjab","Kerala"],
          answer: 2,
          explain: "Baisakhi is a harvest festival celebrated especially in Punjab."
        },
        {
          q: "Pongal is a harvest festival celebrated in:",
          options: ["Kashmir","Rajasthan","Punjab","Tamil Nadu"],
          answer: 3,
          explain: "Pongal is a harvest festival of Tamil Nadu."
        },
        {
          q: "Which festival is celebrated in Kerala?",
          options: ["Onam","Lohri","Gurpurab","Bihu"],
          answer: 0,
          explain: "Onam is the major festival of Kerala. Bihu is celebrated in Assam."
        }
      ]
    },

    // ───────────────────────────── 10. Keeping Clean and Healthy ─────────────────────────────
    {
      id: "keeping-clean-and-healthy",
      title: "Keeping Clean and Healthy",
      section: "Our Body",
      summary: "Cleanliness and healthy habits keep us free from germs and illness. Washing, brushing, eating well, exercising and sleeping well all help us stay healthy.",
      notes: [
        {
          heading: "Keeping our body clean",
          points: [
            "Bathe every day with clean water and soap.",
            "Wash your hands with soap before eating and after using the toilet.",
            "Keep your nails trimmed and your hair clean."
          ]
        },
        {
          heading: "Caring for our teeth",
          points: [
            "Brush your teeth at least **twice a day**, in the morning and at night.",
            "Rinse your mouth with water after eating sweets.",
            "Visit a **dentist** regularly to check your teeth."
          ]
        },
        {
          heading: "Healthy habits",
          points: [
            "Eat fresh, home-cooked food and drink clean, safe water.",
            "Play outdoors and exercise every day to keep the body strong.",
            "Children of your age need about **9 to 12 hours** of sleep every night."
          ]
        },
        {
          heading: "Stopping germs",
          points: [
            "**Germs** spread through dirty hands, food and water.",
            "Cover your nose and mouth with a tissue or your elbow when you sneeze or cough.",
            "Do not throw garbage on the road. Keep your home and school clean."
          ]
        }
      ],
      formulas: [
        "Wash hands with soap: before eating and after using the toilet",
        "Brush teeth: twice a day",
        "Sleep: about 9 to 12 hours a night for school-age children"
      ],
      terms: [
        { term: "Germs", meaning: "Tiny living things that can make us ill if they enter our body." },
        { term: "Hygiene", meaning: "Habits of cleanliness that keep us healthy." },
        { term: "Exercise", meaning: "Physical activity, such as running or playing, that keeps the body strong." },
        { term: "Dentist", meaning: "A doctor who takes care of our teeth and gums." }
      ],
      qa: [
        {
          q: "Why should we wash our hands before eating?",
          a: "Our hands can carry germs from dirt and from touching things. Washing with soap removes the germs so that we do not fall ill."
        },
        {
          q: "What should you do when you sneeze?",
          a: "Cover your nose and mouth with a tissue or your elbow, and then wash your hands."
        }
      ],
      quiz: [
        {
          q: "How many times a day should we brush our teeth?",
          options: ["Once a day","Twice a day","Five times a week","Once a week"],
          answer: 1,
          explain: "We should brush our teeth twice a day, in the morning and at night."
        },
        {
          q: "When is the best time to wash hands?",
          options: ["Only on Sundays","Only at night","Before eating","Only on holidays"],
          answer: 2,
          explain: "Washing hands before eating removes germs from our hands."
        },
        {
          q: "Germs can spread through:",
          options: ["Freshly washed clothes","Boiled water","Clean soap","Dirty hands"],
          answer: 3,
          explain: "Germs spread easily through dirty hands, food and water."
        },
        {
          q: "How many hours of sleep is good for a school-age child every night?",
          options: ["9 to 12 hours","15 to 18 hours","2 to 4 hours","5 to 6 hours"],
          answer: 0,
          explain: "School-age children need about 9 to 12 hours of sleep."
        },
        {
          q: "When you sneeze, you should:",
          options: ["Shout loudly","Cover your mouth with a tissue or elbow","Ignore it","Run outside quickly"],
          answer: 1,
          explain: "Covering your mouth with a tissue or elbow stops germs from spreading."
        }
      ]
    }
  ]
});
