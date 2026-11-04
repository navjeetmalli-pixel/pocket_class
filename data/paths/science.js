// Science: Practice by topic (Level 0 up to Class 12). See CONTENT_GUIDE.md and the path format notes.
// Refs without `board` are used for every student; "cbse" / "pseb" refs only for that board's students.
(function () {
  const R = (cls, subject, chapter, board) => (board ? { cls, subject, chapter, board } : { cls, subject, chapter });
  const ev = (cls, ch) => R(cls, "evs", ch);
  const sci = (cls, ch, board) => R(cls, "science", ch, board); // CBSE book (board given only where PSEB has its own book)
  const cb = (cls, ch) => R(cls, "science", ch, "cbse");
  const pb = (cls, ch) => R(cls, "sciencepb", ch, "pseb");
  const pbAll = (cls, ch) => R(cls, "sciencepb", ch); // PSEB book chapter offered to every student
  const phy = (cls, ch) => R(cls, "physics", ch);
  const chem = (cls, ch) => R(cls, "chemistry", ch);
  const bio = (cls, ch) => R(cls, "biology", ch);
  const lv = (id, level, title, goal, from, extra) => Object.assign({ id, level, title, goal, from }, extra || {});
  const Q = (q, options, answer, explain) => ({ q, options, answer, explain });

  // ---------- Own chapters (Level 0 and gaps) ----------

  const bodySenses = {
    summary: "We have five senses. Eyes, ears, nose, tongue and skin tell us about the world.",
    notes: [
      { heading: "My body", points: ["I have a head, two arms and two legs.", "I use my hands to hold and my legs to walk and run.", "I have two eyes, two ears, one nose and one mouth."] },
      { heading: "My five senses", points: ["I **see** with my **eyes**.", "I **hear** with my **ears**.", "I **smell** with my **nose**.", "I **taste** with my **tongue**.", "I **feel** with my **skin**."] },
      { heading: "Keeping my body clean", points: ["I wash my hands before I eat.", "I brush my teeth every morning and night.", "I take a bath and sleep well."] }
    ],
    terms: [
      { term: "Eyes", meaning: "We see colours and things with our eyes." },
      { term: "Ears", meaning: "We hear sounds with our ears." },
      { term: "Nose", meaning: "We smell with our nose." },
      { term: "Tongue", meaning: "We taste sweet, sour and salty things with our tongue." },
      { term: "Skin", meaning: "We feel hot, cold, soft and rough things with our skin." }
    ],
    qa: [
      { q: "Name our five senses.", a: "Seeing, hearing, smelling, tasting and touching." },
      { q: "Why do we wash our hands before eating?", a: "To clean away germs so that we do not fall ill." }
    ],
    quiz: [
      Q("What do we see with?", ["Eyes", "Ears", "Nose", "Feet"], 0, "We see with our eyes."),
      Q("What do we hear with?", ["Hands", "Ears", "Knees", "Eyes"], 1, "Our ears hear sounds."),
      Q("What do we smell a flower with?", ["Tongue", "Ears", "Nose", "Elbow"], 2, "The nose smells."),
      Q("What do we taste food with?", ["Nose", "Eyes", "Ears", "Tongue"], 3, "The tongue tastes sweet, sour and salty things."),
      Q("What helps us feel hot and cold?", ["Skin", "Hair on the head", "Teeth", "Eyes"], 0, "Skin feels touch, heat and cold."),
      Q("How many eyes do we have?", ["1", "2", "3", "4"], 1, "We have two eyes."),
      Q("Which body part helps us to walk?", ["Eyes", "Ears", "Legs", "Nose"], 2, "We walk and run with our legs."),
      Q("What should we do before eating?", ["Wash our hands", "Roll on the floor", "Shut our eyes", "Run around"], 0, "Clean hands keep germs away from our food."),
      Q("Which of these tastes sweet?", ["Raw lemon", "Jalebi", "Bitter gourd (karela)", "Green chilli"], 1, "Jalebi is sweet."),
      Q("Which is soft to touch?", ["A stone", "A brick", "A cotton ball", "An iron nail"], 2, "Cotton feels soft."),
      Q("We use our ears to listen to a ___.", ["Picture", "Song", "Flower", "Sweet"], 1, "A song is a sound, so we listen to it with our ears."),
      Q("What do we use to hold a spoon?", ["Hand", "Foot", "Ear", "Nose"], 0, "We hold things with our hands.")
    ]
  };

  const plantsAnimals = {
    summary: "Plants grow from seeds and need water and sunlight. Animals move, eat and live in many places.",
    notes: [
      { heading: "Plants", points: ["Plants grow from **seeds**.", "A plant has **roots**, a **stem**, **leaves** and sometimes **flowers**.", "Plants need **water** and **sunlight** to grow.", "Mango, banana and tomato plants give us food."] },
      { heading: "Animals", points: ["Animals eat food, drink water and move about.", "Cows and hens live with people. Lions and tigers live in forests.", "Birds fly, fish swim and dogs run."] },
      { heading: "Taking care", points: ["We water plants and do not break their leaves.", "We are kind to animals and give them food and water."] }
    ],
    terms: [
      { term: "Seed", meaning: "A small thing from which a new plant grows." },
      { term: "Root", meaning: "The part of a plant under the soil. It drinks water." },
      { term: "Leaf", meaning: "The green, flat part of a plant." },
      { term: "Pet", meaning: "An animal that lives with us at home, like a dog or a cat." },
      { term: "Wing", meaning: "The part a bird uses to fly." }
    ],
    qa: [
      { q: "What do plants need to grow?", a: "Plants need water, sunlight and air." },
      { q: "Name two animals that live in water.", a: "Fish and turtle (or crab, or whale)." }
    ],
    quiz: [
      Q("Which animal gives us milk?", ["Cow", "Hen", "Fish", "Crow"], 0, "A cow gives us milk."),
      Q("Which animal gives us eggs?", ["Dog", "Hen", "Elephant", "Horse"], 1, "A hen lays eggs."),
      Q("Which animal can fly?", ["A cow", "A fish", "A sparrow", "A dog"], 2, "A sparrow is a bird and flies with its wings."),
      Q("Which animal lives in water?", ["Goat", "Parrot", "Rabbit", "Fish"], 3, "A fish lives and swims in water."),
      Q("What do plants need to grow?", ["Water and sunlight", "Only toys", "Only sweets", "Darkness and no water"], 0, "Plants need water and sunlight."),
      Q("Which part of a plant grows under the soil?", ["Leaf", "Root", "Flower", "Fruit"], 1, "Roots grow under the soil and take in water."),
      Q("A baby plant grows from a ___.", ["Stone", "Spoon", "Seed", "Shoe"], 2, "Plants grow from seeds."),
      Q("Which animal has a long trunk?", ["Cat", "Duck", "Frog", "Elephant"], 3, "An elephant has a trunk."),
      Q("Which animal says \"moo\"?", ["Cow", "Cat", "Crow", "Duck"], 0, "A cow says moo."),
      Q("Which one is a flower?", ["Spoon", "Rose", "Pencil", "Chair"], 1, "A rose is a flower."),
      Q("Which one is a pet animal?", ["Tiger", "Lion", "Dog", "Snake"], 2, "A dog can live with us at home as a pet."),
      Q("The green flat part of a plant is the ___.", ["Root", "Seed", "Stone", "Leaf"], 3, "Leaves are green and flat.")
    ]
  };

  const dayNightWeather = {
    summary: "The Sun gives us day. The Moon and stars shine at night. Weather changes with the seasons.",
    notes: [
      { heading: "Day and night", points: ["In the **day** the Sun shines. It gives us light and heat.", "At **night** it is dark. We see the Moon and stars.", "We play in the day and sleep at night."] },
      { heading: "Weather", points: ["Weather can be sunny, cloudy, rainy, windy, hot or cold.", "Rain falls from dark clouds.", "We use an umbrella in the rain and a sweater when it is cold."] },
      { heading: "Seasons", points: ["Summer is hot. Winter is cold. The rainy season has a lot of rain.", "We wear thin cotton clothes in summer and warm clothes in winter."] }
    ],
    terms: [
      { term: "Sun", meaning: "The big star that gives us light and heat in the day." },
      { term: "Moon", meaning: "We see it in the night sky. It shines with the Sun's light." },
      { term: "Cloud", meaning: "White or grey puffs high in the sky. Rain falls from them." },
      { term: "Rainbow", meaning: "Many colours in the sky seen after rain when the Sun shines." },
      { term: "Season", meaning: "A part of the year, like summer or winter." }
    ],
    qa: [
      { q: "What do we see in the sky at night?", a: "We see the Moon and the stars." },
      { q: "What do we wear in winter?", a: "Warm clothes like a sweater and a cap." }
    ],
    quiz: [
      Q("When do we see the Sun?", ["In the day", "At night", "Only in winter", "Never"], 0, "The Sun shines in the day."),
      Q("What do we see in the sky at night?", ["Only the Sun", "A rainbow", "Moon and stars", "Only birds"], 2, "The Moon and stars are seen at night."),
      Q("What gives us light and heat in the day?", ["The Moon", "The Sun", "A star", "A cloud"], 1, "The Sun gives us light and heat."),
      Q("What do we use in the rain?", ["A cap for the Sun", "A sweater", "A fan", "An umbrella"], 3, "An umbrella keeps us dry in the rain."),
      Q("What do we wear in hot summer?", ["Thin cotton clothes", "A thick woollen sweater", "A raincoat", "Gloves"], 0, "Thin cotton clothes keep us cool."),
      Q("What do we wear in cold winter?", ["A swimsuit", "A sweater", "Only a vest", "Sandals only"], 1, "Warm clothes keep us warm."),
      Q("Rain falls from the ___.", ["Ground", "Tree", "Clouds", "Moon"], 2, "Rain falls from clouds."),
      Q("When do we sleep?", ["At noon", "In the morning", "In the afternoon", "At night"], 3, "We sleep at night."),
      Q("What are small shining dots in the night sky?", ["Stars", "Leaves", "Flowers", "Stones"], 0, "The small shining dots are stars."),
      Q("In the morning the Sun ___.", ["Falls down", "Rises", "Turns blue", "Sleeps"], 1, "We see the Sun rise in the morning."),
      Q("Dark grey clouds mean it may soon ___.", ["Snow in summer", "Be a hot sunny day", "Rain", "Become night"], 2, "Dark rain clouds usually bring rain."),
      Q("What can we put on to stay safe in strong sunshine?", ["A raincoat", "Woollen socks", "A blanket", "A cap"], 3, "A cap protects us from the hot Sun.")
    ]
  };

  const waterAir = {
    summary: "Water is wet and can flow. Air is all around us but we cannot see it.",
    notes: [
      { heading: "Water", points: ["Water is a **liquid**. It is wet and it can flow.", "We drink water, bathe in it and cook with it.", "Fish and ducks live in water.", "We must save water and close the tap."] },
      { heading: "Air", points: ["Air is all around us. We **cannot see** air.", "We breathe in air to stay alive.", "Moving air is called **wind**. It flies kites and dries clothes."] },
      { heading: "Where do we find them?", points: ["We get water from rain, rivers, wells and taps.", "A balloon is full of air. A football has air inside too."] }
    ],
    terms: [
      { term: "Water", meaning: "A clear liquid we drink. It is wet and it flows." },
      { term: "Air", meaning: "The invisible thing around us that we breathe." },
      { term: "Wind", meaning: "Air that moves." },
      { term: "Rain", meaning: "Drops of water that fall from clouds." },
      { term: "Ice", meaning: "Water that has frozen and become hard." }
    ],
    qa: [
      { q: "Why do we need air?", a: "We breathe air to stay alive." },
      { q: "How can we save water?", a: "Close the tap when we are not using it." }
    ],
    quiz: [
      Q("Which one do we drink?", ["Water", "Air", "Sand", "Stone"], 0, "We drink water."),
      Q("Water can ___.", ["Never move", "Flow", "Break like glass", "Burn like paper"], 1, "Water is a liquid and can flow."),
      Q("Where do fish live?", ["On trees", "In the sky", "In water", "Under the bed"], 2, "Fish live in water."),
      Q("Which one can we NOT see?", ["Water", "Ice", "A kite", "Air"], 3, "Air is all around us, but we cannot see it."),
      Q("A blown-up balloon is full of ___.", ["Air", "Stones", "Milk", "Sand"], 0, "A balloon is full of air."),
      Q("What do we breathe in?", ["Water", "Air", "Soil", "Sugar"], 1, "We breathe in air."),
      Q("Rain water comes from ___.", ["The ground", "A tree", "Clouds", "A stone"], 2, "Rain falls from clouds."),
      Q("Ice is ___.", ["Hot milk", "Smoke", "Air", "Frozen water"], 3, "When water gets very cold it freezes into ice."),
      Q("What should we do to save water?", ["Close the tap after use", "Leave the tap open", "Throw water away", "Play with the tap"], 0, "We should not waste water."),
      Q("What moves a kite in the sky?", ["A stone", "Wind", "Ice", "A river"], 1, "Moving air, or wind, lifts a kite."),
      Q("A fan makes the ___ move.", ["Soil", "Water", "Air", "Wall"], 2, "A fan pushes air, so we feel a breeze."),
      Q("Which of these is safe and clean to drink?", ["Muddy pond water", "Dirty puddle water", "Water from a drain", "Clean boiled or filtered water"], 3, "Only clean water is safe to drink.")
    ]
  };

  const pushPull = {
    summary: "We move things by pushing or pulling them. Some things move fast and some slowly.",
    notes: [
      { heading: "Push and pull", points: ["When we **push**, we move something away from us.", "When we **pull**, we bring something towards us.", "We push a swing and a door. We pull a drawer and a rope."] },
      { heading: "Fast and slow", points: ["A train and a car move **fast**.", "A snail and a tortoise move **slowly**.", "A harder push makes a ball go faster."] },
      { heading: "Things fall down", points: ["The Earth pulls things towards itself.", "If we drop a ball or throw it up, it comes down."] }
    ],
    terms: [
      { term: "Push", meaning: "To move something away from us." },
      { term: "Pull", meaning: "To bring something towards us." },
      { term: "Fast", meaning: "Moving a long way in a short time." },
      { term: "Slow", meaning: "Moving only a little in a long time." },
      { term: "Heavy", meaning: "Hard to lift, like a full bucket of water." }
    ],
    qa: [
      { q: "Is opening a drawer a push or a pull?", a: "It is a pull. We bring the drawer towards us." },
      { q: "What happens when we throw a ball up?", a: "It comes back down because the Earth pulls it." }
    ],
    quiz: [
      Q("To make a swing go, we ___ it.", ["Push", "Eat", "Wash", "Paint"], 0, "A push makes the swing move."),
      Q("To open a drawer by its handle, we ___.", ["Push it away", "Pull it", "Cut it", "Sing to it"], 1, "We pull the drawer towards us."),
      Q("Kicking a football is a ___.", ["Pull", "Rest", "Push", "Sleep"], 2, "The kick pushes the ball away."),
      Q("In tug-of-war we ___ a rope.", ["Drop", "Eat", "Paint", "Pull"], 3, "Both teams pull the rope."),
      Q("Which one moves fast?", ["A train", "A snail", "A tortoise", "A sleeping dog"], 0, "A train moves fast."),
      Q("Which one moves slowly?", ["A car", "A snail", "A plane", "A bus"], 1, "A snail is very slow."),
      Q("When we drop a ball, it falls ___.", ["Up", "Sideways", "Down", "Nowhere"], 2, "The Earth pulls things down."),
      Q("Which is easier to push?", ["A box full of bricks", "A big rock", "A loaded truck", "An empty box"], 3, "An empty box is light, so it is easy to push."),
      Q("A harder push makes a ball go ___.", ["Faster", "Nowhere", "Back to us", "Up to the Sun"], 0, "More push means the ball goes faster."),
      Q("Closing a door by pressing it away from us is a ___.", ["Pull", "Push", "Cut", "Throw"], 1, "We push the door to close it."),
      Q("To bring a toy cart on a string close to us, we ___.", ["Push it", "Kick it", "Pull the string", "Sit on it"], 2, "Pulling the string brings the cart towards us."),
      Q("Which thing is heavy?", ["A feather", "A leaf", "A paper boat", "A big stone"], 3, "A big stone is heavy.")
    ]
  };

  const lightSound = {
    summary: "Light helps us see and makes shadows. Sound comes from things that are hit, shaken or blown, and we hear it with our ears.",
    notes: [
      { heading: "Light", points: ["The **Sun** gives us light in the day.", "A torch, a lamp and a candle give light at night.", "We need light to see things."] },
      { heading: "Shadows", points: ["A **shadow** forms when something blocks light.", "A shadow is a dark patch on the ground or wall.", "We can see our shadow on a sunny day."] },
      { heading: "Sound", points: ["We hear sounds with our **ears**.", "A drum makes sound when it is hit. A bell rings when it is shaken.", "Thunder is loud. A whisper is soft."] }
    ],
    terms: [
      { term: "Light", meaning: "What helps us to see things." },
      { term: "Shadow", meaning: "A dark patch made when something blocks light." },
      { term: "Torch", meaning: "A small hand lamp that gives light." },
      { term: "Sound", meaning: "What we hear with our ears." },
      { term: "Loud", meaning: "A strong sound, like a drum or thunder." }
    ],
    qa: [
      { q: "How is a shadow made?", a: "When something blocks light, a dark shadow forms behind it." },
      { q: "Name two things that make sound.", a: "A drum and a bell (or a whistle, a horn)." }
    ],
    quiz: [
      Q("What gives us light in the day?", ["The Sun", "A stone", "A shoe", "A spoon"], 0, "The Sun gives us daylight."),
      Q("Which one gives light at night?", ["A brick", "A torch", "A pillow", "A book"], 1, "A torch gives light."),
      Q("A shadow forms when something ___ light.", ["Makes", "Drinks", "Blocks", "Eats"], 2, "Something blocks the light and a dark shadow forms."),
      Q("What does a shadow look like?", ["Bright yellow", "Red", "Sweet", "Dark"], 3, "A shadow is a dark patch."),
      Q("What do we hear with?", ["Ears", "Eyes", "Nose", "Hair"], 0, "We hear with our ears."),
      Q("Which one makes a sound when we hit it?", ["A soft pillow", "A drum", "A heap of sand", "A cloud"], 1, "A drum makes a sound when hit."),
      Q("Which sound is loud?", ["A whisper", "A falling leaf", "Thunder", "A mouse walking"], 2, "Thunder is a very loud sound."),
      Q("Which sound is soft?", ["A horn", "A drum", "A loud bell", "A whisper"], 3, "A whisper is soft."),
      Q("What sound does a cat make?", ["Meow", "Moo", "Quack", "Roar"], 0, "A cat says meow."),
      Q("Which one is NOT a source of light?", ["The Sun", "A stone", "A burning lamp", "A candle"], 1, "A stone does not give light."),
      Q("When is our shadow easy to see?", ["In a dark room", "In deep sleep", "On a sunny day", "In the rain at night"], 2, "A bright Sun makes a clear shadow."),
      Q("A bell makes a sound when we ___ it.", ["Eat", "Paint", "Plant", "Shake or hit"], 3, "Shaking or hitting makes a bell ring.")
    ]
  };

  const statesOfMatter = {
    summary: "Things around us are solids, liquids or gases. Heat and cold can change one into another.",
    notes: [
      { heading: "Solids, liquids and gases", points: ["A **solid** has its own shape, like a stone, a pencil or a book.", "A **liquid** can flow and takes the shape of its vessel, like water, milk and oil.", "A **gas** has no fixed shape and spreads everywhere, like air."] },
      { heading: "Changing state", points: ["When ice is heated, it **melts** into water.", "When water is boiled, it becomes **steam** (water vapour).", "When water is cooled in a freezer, it **freezes** into ice."] },
      { heading: "Matter takes up space", points: ["Everything that has weight and takes up space is called **matter**.", "Air is matter too. A balloon is filled by air."] }
    ],
    terms: [
      { term: "Solid", meaning: "Matter that has its own fixed shape." },
      { term: "Liquid", meaning: "Matter that flows and takes the shape of its container." },
      { term: "Gas", meaning: "Matter with no fixed shape that fills the space it is in." },
      { term: "Melting", meaning: "A solid changing into a liquid on heating." },
      { term: "Freezing", meaning: "A liquid changing into a solid on cooling." },
      { term: "Evaporation", meaning: "A liquid slowly changing into a gas, like wet clothes drying." }
    ],
    qa: [
      { q: "Give two differences between a solid and a liquid.", a: "A solid has its own shape; a liquid takes the shape of its container. A solid does not flow; a liquid does." },
      { q: "What happens to ice in the Sun?", a: "It melts and turns into water." }
    ],
    quiz: [
      Q("Which one is a solid?", ["Milk", "A stone", "Air", "Oil"], 1, "A stone has its own fixed shape."),
      Q("Which one is a liquid?", ["Brick", "Steam", "Milk", "Wood"], 2, "Milk flows."),
      Q("Which one is a gas?", ["Honey", "Air", "Ice", "Iron"], 1, "Air is a gas."),
      Q("A liquid takes the shape of its ___.", ["Container", "Colour", "Smell", "Weight"], 0, "Liquids take the shape of the vessel they are in."),
      Q("When water freezes it becomes ___.", ["Steam", "Smoke", "Oil", "Ice"], 3, "Freezing changes water into ice, a solid."),
      Q("When ice is heated it ___.", ["Becomes a rock", "Melts", "Turns to sand", "Becomes air only"], 1, "Heat melts ice into water."),
      Q("When water is boiled it changes into ___.", ["Ice", "Salt", "Steam", "Sand"], 2, "Boiling water makes steam, which is water vapour."),
      Q("Which state of matter spreads to fill the whole container?", ["Solid", "Liquid", "Ice", "Gas"], 3, "A gas spreads out and fills all the space it can."),
      Q("Wood, plastic and steel are all ___.", ["Solids", "Liquids", "Gases", "Steam"], 0, "They all have their own shape, so they are solids."),
      Q("A blown-up balloon shows that air ___.", ["Is a solid", "Takes up space", "Is a liquid", "Has no weight at all in any case"], 1, "The air fills the balloon, so air takes up space."),
      Q("Which one flows easily?", ["A pencil", "A brick", "Cooking oil", "A wooden chair"], 2, "Oil is a liquid, so it flows."),
      Q("Wet clothes dry in the Sun because water ___.", ["Turns to a stone", "Turns to oil", "Freezes", "Evaporates"], 3, "The water slowly changes into vapour and goes into the air.")
    ]
  };

  // ---------- Topics ----------

  StudyData.addPath("science", {
    title: "Science",
    titleLocal: "ਵਿਗਿਆਨ / विज्ञान",
    topics: [
      // ===== Matter and chemistry =====
      {
        id: "matter-chemistry",
        title: "Matter and chemistry",
        icon: "🧪",
        summary: "From water and air, through states of matter, atoms and reactions, to organic chemistry.",
        levels: [
          lv("matter-water-air-0", 0, "Water and air around us", "Name water and air, say what each one does for us, and why we must save water.", [], { own: waterAir }),
          lv("matter-states-3", 3, "Solids, liquids and gases", "Sort things into solids, liquids and gases and say how heat changes water.", [], { own: statesOfMatter }),
          lv("matter-materials-6", 6, "Materials around us", "Group materials by how they look and feel and say what each is used for.", [cb(6, "materials-around-us"), pb(6, "sorting-materials-into-groups")]),
          lv("matter-water-heat-6", 6, "States of water and temperature", "Explain how water changes between ice, water and vapour, and read a thermometer.", [R(6, "science", "a-journey-through-states-of-water"), R(6, "science", "temperature-and-its-measurement")]),
          lv("matter-separation-6", 6, "Separating mixtures", "Choose a way to separate a mixture, such as sieving, filtering or evaporation.", [cb(6, "methods-of-separation-in-everyday-life"), pb(6, "separation-of-substances")]),
          lv("matter-changes-7", 7, "Physical and chemical changes", "Tell a change that can be undone from one that makes a new substance.", [cb(7, "changes-around-us-physical-and-chemical"), pb(7, "physical-and-chemical-changes")]),
          lv("matter-acids-7", 7, "Acids, bases and neutral substances", "Test substances with indicators and sort them as acid, base or neutral.", [cb(7, "exploring-substances-acidic-basic-and-neutral"), pb(7, "acids-bases-and-salts")]),
          lv("matter-metals-7", 7, "Metals and non-metals", "Compare metals and non-metals by their properties and uses.", [R(7, "science", "the-world-of-metals-and-non-metals")]),
          lv("matter-particles-8", 8, "Particles, elements and compounds", "Describe matter as tiny particles and tell elements, compounds and mixtures apart.", [R(8, "science", "particulate-nature-of-matter"), R(8, "science", "elements-compounds-and-mixtures"), R(8, "science", "solutes-solvents-and-solutions")]),
          lv("matter-combustion-8", 8, "Burning and flames", "Say what is needed for burning and describe the parts of a flame.", [pbAll(8, "combustion-and-flame")]),
          lv("matter-pure-9", 9, "Matter around us: pure and impure", "Describe the states of matter and tell pure substances from mixtures, solutions and colloids.", [cb(9, "exploring-mixtures-and-their-separation"), pb(9, "matter-in-our-surroundings"), pb(9, "is-matter-around-us-pure")]),
          lv("matter-atoms-9", 9, "Atoms and molecules", "Use symbols, formulae and the mole idea to describe atoms and molecules.", [cb(9, "atomic-foundations-of-matter"), pb(9, "atoms-and-molecules")]),
          lv("matter-atom-structure-9", 9, "Structure of the atom", "Describe protons, neutrons and electrons and write electron arrangements.", [cb(9, "journey-inside-the-atom"), pb(9, "structure-of-the-atom")]),
          lv("matter-reactions-10", 10, "Chemical reactions and equations", "Write and balance chemical equations and identify types of reaction.", [R(10, "science", "chemical-reactions-and-equations")]),
          lv("matter-asb-10", 10, "Acids, bases and salts", "Explain pH, neutralisation and everyday salts such as baking soda and bleaching powder.", [R(10, "science", "acids-bases-and-salts")]),
          lv("matter-metals-10", 10, "Metals and non-metals (reactivity)", "Use the reactivity series and explain how metals are extracted and protected from corrosion.", [R(10, "science", "metals-and-non-metals")]),
          lv("matter-carbon-10", 10, "Carbon and its compounds", "Name simple carbon compounds and describe their properties and reactions.", [R(10, "science", "carbon-and-its-compounds")]),
          lv("matter-mole-11", 11, "Basic concepts and the mole", "Do mole calculations, find empirical and molecular formulae and work with concentrations.", [chem(11, "some-basic-concepts-of-chemistry")]),
          lv("matter-atom-11", 11, "Structure of atom (quantum ideas)", "Use quantum numbers, orbitals and the Bohr model to describe electrons in atoms.", [chem(11, "structure-of-atom")]),
          lv("matter-periodic-11", 11, "Periodic table and periodicity", "Explain trends in atomic size, ionisation energy and electronegativity.", [chem(11, "classification-of-elements-and-periodicity")]),
          lv("matter-bonding-11", 11, "Chemical bonding", "Describe ionic, covalent and coordinate bonds and predict molecular shapes.", [chem(11, "chemical-bonding-and-molecular-structure")]),
          lv("matter-thermo-11", 11, "Chemical thermodynamics", "Use enthalpy, entropy and Gibbs energy to decide if a reaction will happen.", [chem(11, "thermodynamics")]),
          lv("matter-equilibrium-11", 11, "Equilibrium", "Use equilibrium constants, Le Chatelier's principle and pH.", [chem(11, "equilibrium")]),
          lv("matter-redox-11", 11, "Redox reactions", "Find oxidation numbers and balance redox reactions.", [chem(11, "redox-reactions")]),
          lv("matter-organic-11", 11, "Basic organic chemistry and hydrocarbons", "Name organic compounds, explain isomerism and describe alkanes, alkenes and alkynes.", [chem(11, "organic-chemistry-basic-principles"), chem(11, "hydrocarbons")]),
          lv("matter-solutions-12", 12, "Solutions", "Calculate concentrations and use colligative properties.", [chem(12, "solutions")]),
          lv("matter-electro-12", 12, "Electrochemistry", "Use cell potentials, the Nernst idea and Faraday's laws.", [chem(12, "electrochemistry")]),
          lv("matter-kinetics-12", 12, "Chemical kinetics", "Work with rate laws, order of reaction and half-life.", [chem(12, "chemical-kinetics")]),
          lv("matter-dblock-12", 12, "d- and f-block and coordination compounds", "Describe transition metals and name and explain coordination compounds.", [chem(12, "d-and-f-block-elements"), chem(12, "coordination-compounds")]),
          lv("matter-organic-12", 12, "Organic compounds and their reactions", "Link haloalkanes, alcohols, carbonyl compounds and amines through their reactions.", [chem(12, "haloalkanes-and-haloarenes"), chem(12, "alcohols-phenols-and-ethers"), chem(12, "aldehydes-ketones-and-carboxylic-acids"), chem(12, "amines")]),
          lv("matter-biomol-12", 12, "Biomolecules (chemistry)", "Describe carbohydrates, proteins, vitamins and nucleic acids.", [chem(12, "biomolecules")])
        ]
      },

      // ===== Forces, motion and energy =====
      {
        id: "forces-energy",
        title: "Forces, motion and energy",
        icon: "⚙️",
        summary: "From pushes and pulls to Newton's laws, work and energy, heat, fluids, oscillations and waves.",
        levels: [
          lv("forces-push-pull-0", 0, "Push, pull and things that move", "Say whether an action is a push or a pull and which things move fast or slowly.", [], { own: pushPull }),
          lv("forces-measure-6", 6, "Measuring length and motion", "Measure lengths and describe different kinds of motion.", [cb(6, "measurement-of-length-and-motion"), pb(6, "motion-and-measurement-of-distances")]),
          lv("forces-time-7", 7, "Time, speed and motion", "Calculate speed and read simple distance-time graphs.", [cb(7, "measurement-of-time-and-motion"), pb(7, "motion-and-time")]),
          lv("forces-heat-7", 7, "Heat and its transfer", "Explain conduction, convection and radiation in everyday life.", [cb(7, "heat-transfer-in-nature"), pb(7, "heat")]),
          lv("forces-forces-8", 8, "Forces and pressure", "Describe contact and non-contact forces and how pressure depends on force and area.", [cb(8, "exploring-forces"), cb(8, "pressure-winds-storms-cyclones"), pb(8, "force-and-pressure")]),
          lv("forces-friction-8", 8, "Friction", "Explain how friction helps and hinders us and how to change it.", [pbAll(8, "friction")]),
          lv("forces-motion-9", 9, "Describing motion", "Use speed, velocity, acceleration and the equations of motion.", [cb(9, "describing-motion-around-us"), pb(9, "motion")]),
          lv("forces-laws-9", 9, "Force and laws of motion", "Apply Newton's three laws, inertia and momentum to everyday situations.", [cb(9, "how-forces-affect-motion"), pb(9, "force-and-laws-of-motion")]),
          lv("forces-gravity-9", 9, "Gravitation", "Describe gravity, free fall, weight, mass, density and floating.", [pbAll(9, "gravitation")]),
          lv("forces-work-9", 9, "Work, energy and machines", "Calculate work, power, kinetic and potential energy and explain simple machines.", [cb(9, "work-energy-and-simple-machines"), pb(9, "work-and-energy")]),
          lv("forces-units-11", 11, "Units and measurement", "Use SI units, dimensions, significant figures and errors.", [phy(11, "units-and-measurement")]),
          lv("forces-kinematics-11", 11, "Kinematics in a line and a plane", "Solve problems on motion in one dimension, projectiles and vectors.", [phy(11, "motion-in-a-straight-line"), phy(11, "motion-in-a-plane")]),
          lv("forces-newton-11", 11, "Laws of motion", "Use free-body diagrams, friction and circular motion with Newton's laws.", [phy(11, "laws-of-motion")]),
          lv("forces-work-11", 11, "Work, energy and power", "Use the work-energy theorem, conservation of energy and collisions.", [phy(11, "work-energy-and-power")]),
          lv("forces-rotation-11", 11, "Rotational motion", "Use centre of mass, torque, moment of inertia and angular momentum.", [phy(11, "system-of-particles-and-rotational-motion")]),
          lv("forces-gravity-11", 11, "Gravitation and satellites", "Use Newton's law of gravitation, escape speed and orbits.", [phy(11, "gravitation")]),
          lv("forces-solids-fluids-11", 11, "Solids and fluids", "Explain elasticity, pressure, viscosity, surface tension and Bernoulli's principle.", [phy(11, "mechanical-properties-of-solids"), phy(11, "mechanical-properties-of-fluids")]),
          lv("forces-thermo-11", 11, "Heat, thermodynamics and gases", "Use specific heat, the laws of thermodynamics and the kinetic theory of gases.", [phy(11, "thermal-properties-of-matter"), phy(11, "thermodynamics"), phy(11, "kinetic-theory")]),
          lv("forces-waves-11", 11, "Oscillations and waves", "Describe simple harmonic motion, wave speed, superposition and standing waves.", [phy(11, "oscillations"), phy(11, "waves")])
        ]
      },

      // ===== Electricity, magnetism, light and sound =====
      {
        id: "electricity-light-sound",
        title: "Light, sound, electricity and magnetism",
        icon: "💡",
        summary: "From shadows and sounds to circuits, magnets, lenses, electric fields, induction and modern physics.",
        levels: [
          lv("els-light-sound-0", 0, "Light, shadows and sounds", "Name sources of light, explain a shadow and tell loud sounds from soft ones.", [], { own: lightSound }),
          lv("els-magnets-6", 6, "Magnets", "Say which materials a magnet attracts and describe its poles.", [cb(6, "exploring-magnets"), pb(6, "fun-with-magnets")]),
          lv("els-light-6", 6, "Light and shadows", "Explain how shadows and reflections form.", [pbAll(6, "light-shadows-and-reflections")]),
          lv("els-circuits-6", 6, "Simple electric circuits", "Draw a simple circuit and tell conductors from insulators.", [pbAll(6, "electricity-and-circuits")]),
          lv("els-light-7", 7, "Reflection of light", "Describe reflection and the images made by plane mirrors.", [cb(7, "light-shadows-and-reflections"), pb(7, "light")]),
          lv("els-electricity-7", 7, "Electric circuits and components", "Describe cells, bulbs, switches and the effects of electric current.", [cb(7, "electricity-circuits-and-their-components"), pb(7, "electric-current-and-its-effects")]),
          lv("els-sound-8", 8, "Sound", "Explain how sound is made and travels and what pitch and loudness are.", [pbAll(8, "sound")]),
          lv("els-light-8", 8, "Mirrors, lenses and light", "Describe images in mirrors and lenses.", [cb(8, "light-mirrors-and-lenses"), pb(8, "light")]),
          lv("els-electricity-8", 8, "Electric, magnetic and heating effects", "Explain the heating, magnetic and chemical effects of electric current.", [cb(8, "electricity-magnetic-and-heating-effects"), pb(8, "chemical-effects-of-electric-current")]),
          lv("els-sound-9", 9, "Sound waves", "Use wavelength, frequency, speed and echo in sound problems.", [cb(9, "sound-waves-characteristics-and-applications"), pb(9, "sound")]),
          lv("els-light-10", 10, "Reflection and refraction", "Use mirror and lens formulae and ray diagrams.", [R(10, "science", "light-reflection-and-refraction")]),
          lv("els-eye-10", 10, "The human eye and colours", "Explain defects of vision, dispersion and scattering of light.", [R(10, "science", "human-eye-and-colourful-world")]),
          lv("els-electricity-10", 10, "Electricity", "Apply Ohm's law, resistances in series and parallel, power and energy.", [R(10, "science", "electricity")]),
          lv("els-magnetic-10", 10, "Magnetic effects of electric current", "Explain magnetic fields, motors, generators and Fleming's rules.", [R(10, "science", "magnetic-effects-of-electric-current")]),
          lv("els-electrostatics-12", 12, "Electric charges, fields and potential", "Use Coulomb's law, electric fields, potential and capacitors.", [phy(12, "electric-charges-and-fields"), phy(12, "electrostatic-potential-and-capacitance")]),
          lv("els-current-12", 12, "Current electricity", "Use Kirchhoff's rules, resistivity and bridge circuits.", [phy(12, "current-electricity")]),
          lv("els-magnetism-12", 12, "Magnetism", "Use the Biot-Savart law, Ampere's law and the magnetic properties of matter.", [phy(12, "moving-charges-and-magnetism"), phy(12, "magnetism-and-matter")]),
          lv("els-emi-12", 12, "Induction and alternating current", "Use Faraday's and Lenz's laws and solve AC circuit problems.", [phy(12, "electromagnetic-induction"), phy(12, "alternating-current")]),
          lv("els-emwaves-12", 12, "Electromagnetic waves", "Place electromagnetic waves in the spectrum and explain their uses.", [phy(12, "electromagnetic-waves")]),
          lv("els-optics-12", 12, "Ray and wave optics", "Use lenses, prisms, interference, diffraction and polarisation.", [phy(12, "ray-optics-and-optical-instruments"), phy(12, "wave-optics")]),
          lv("els-modern-12", 12, "Modern physics", "Explain the photoelectric effect, atomic models, nuclei and semiconductors.", [phy(12, "dual-nature-of-radiation-and-matter"), phy(12, "atoms"), phy(12, "nuclei"), phy(12, "semiconductor-electronics")])
        ]
      },

      // ===== Living things and the human body =====
      {
        id: "living-things",
        title: "Living things and the human body",
        icon: "🌱",
        summary: "From plants, animals and the senses to cells, life processes, heredity and biotechnology.",
        levels: [
          lv("living-body-senses-0", 0, "My body and senses", "Name body parts and the five senses and say how to keep clean.", [], { own: bodySenses }),
          lv("living-plants-animals-0", 0, "Plants and animals around us", "Name common plants and animals and say what plants need to grow.", [], { own: plantsAnimals }),
          lv("living-plants-3", 3, "Plants around us", "Name types of plants and their parts and uses.", [ev(3, "plants-around-us")]),
          lv("living-animals-3", 3, "Animals around us", "Group animals by where they live and what they eat.", [ev(3, "animals-around-us")]),
          lv("living-body-3", 3, "Our body and senses", "Describe the sense organs and how to take care of them.", [ev(3, "our-body-and-senses")]),
          lv("living-food-3", 3, "Food and keeping healthy", "Name food groups and habits that keep us healthy.", [ev(3, "food-we-eat"), ev(3, "keeping-clean-and-healthy")]),
          lv("living-roots-4", 4, "Roots, stems and leaves", "Say what each part of a plant does.", [ev(4, "roots-stems-and-leaves")]),
          lv("living-homes-4", 4, "Animals and their homes", "Match animals to their homes and say how they are suited to them.", [ev(4, "animals-and-their-homes")]),
          lv("living-teeth-4", 4, "Where food comes from, teeth and digestion", "Trace food from plants and animals and describe teeth and digestion.", [ev(4, "where-food-comes-from"), ev(4, "our-teeth-and-digestion")]),
          lv("living-seeds-5", 5, "Seeds and germination", "Describe what seeds need to germinate and how they spread.", [ev(5, "seeds-and-germination")]),
          lv("living-senses-5", 5, "Senses of animals", "Compare the senses of different animals with our own.", [ev(5, "senses-of-animals")]),
          lv("living-breathing-5", 5, "Breathing and the heart", "Describe breathing, the heart and how to keep them healthy.", [ev(5, "breathing-and-the-heart")]),
          lv("living-diversity-6", 6, "Living things and their surroundings", "Sort living things by their features and say how they suit where they live.", [cb(6, "diversity-in-the-living-world"), cb(6, "living-creatures-exploring-their-characteristics"), pb(6, "getting-to-know-plants"), pb(6, "living-organisms-and-their-surroundings"), pb(6, "body-movements")]),
          lv("living-food-6", 6, "Food and a healthy body", "Name nutrients and what each does and plan a balanced diet.", [cb(6, "mindful-eating-a-path-to-a-healthy-body"), pb(6, "components-of-food")]),
          lv("living-nutrition-7", 7, "Nutrition in plants and animals", "Explain photosynthesis and how animals take in and use food.", [cb(7, "life-processes-in-plants"), cb(7, "life-processes-in-animals"), pb(7, "nutrition-in-plants"), pb(7, "nutrition-in-animals")]),
          lv("living-respiration-7", 7, "Respiration and transport", "Describe respiration and how blood and sap are carried round the body.", [pbAll(7, "respiration-in-organisms"), pbAll(7, "transportation-in-animals-and-plants")]),
          lv("living-plant-repro-7", 7, "Reproduction in plants", "Describe how plants make new plants from seeds and other parts.", [pbAll(7, "reproduction-in-plants")]),
          lv("living-microbes-8", 8, "Microorganisms", "Describe useful and harmful microorganisms.", [cb(8, "invisible-living-world"), pb(8, "microorganisms-friend-and-foe")]),
          lv("living-health-8", 8, "Adolescence and health", "Explain the changes of adolescence and what keeps us healthy.", [cb(7, "adolescence-a-stage-of-growth-and-change"), cb(8, "health-the-ultimate-treasure"), pb(8, "reaching-the-age-of-adolescence")]),
          lv("living-animal-repro-8", 8, "Reproduction in animals", "Describe how animals reproduce and grow.", [pbAll(8, "reproduction-in-animals")]),
          lv("living-cell-9", 9, "Cells", "Describe the parts of a cell and how plant and animal cells differ.", [cb(9, "cell-the-building-block-of-life"), pb(9, "fundamental-unit-of-life")]),
          lv("living-tissues-9", 9, "Tissues", "Name plant and animal tissues and what they do.", [cb(9, "tissues-in-action"), pb(9, "tissues")]),
          lv("living-classification-9", 9, "Classification and reproduction", "Classify organisms and describe how life continues through reproduction.", [R(9, "science", "patterns-in-life-diversity-and-classification"), R(9, "science", "reproduction-how-life-continues")]),
          lv("living-processes-10", 10, "Life processes", "Describe nutrition, respiration, transport and excretion in plants and animals.", [R(10, "science", "life-processes")]),
          lv("living-control-10", 10, "Control and coordination", "Explain the nervous system, hormones and plant responses.", [R(10, "science", "control-and-coordination")]),
          lv("living-repro-10", 10, "How organisms reproduce", "Compare asexual and sexual reproduction.", [R(10, "science", "how-do-organisms-reproduce")]),
          lv("living-heredity-10", 10, "Heredity", "Use Mendel's experiments to explain how traits pass on.", [R(10, "science", "heredity")]),
          lv("living-diversity-11", 11, "Diversity of life", "Classify organisms into kingdoms, plants and animals.", [bio(11, "the-living-world"), bio(11, "biological-classification"), bio(11, "plant-kingdom"), bio(11, "animal-kingdom")]),
          lv("living-structure-11", 11, "Structure of plants and animals", "Describe the morphology and anatomy of flowering plants and animal tissues.", [bio(11, "morphology-of-flowering-plants"), bio(11, "anatomy-of-flowering-plants"), bio(11, "structural-organisation-in-animals")]),
          lv("living-cell-11", 11, "Cell, biomolecules and cell division", "Describe cell organelles, biomolecules, mitosis and meiosis.", [bio(11, "cell-the-unit-of-life"), bio(11, "biomolecules"), bio(11, "cell-cycle-and-cell-division")]),
          lv("living-plant-phys-11", 11, "Plant physiology", "Explain photosynthesis, respiration and growth in plants.", [bio(11, "photosynthesis-in-higher-plants"), bio(11, "respiration-in-plants"), bio(11, "plant-growth-and-development")]),
          lv("living-human-phys-11", 11, "Human physiology: breathing, circulation, excretion", "Explain gas exchange, blood circulation and excretion.", [bio(11, "breathing-and-exchange-of-gases"), bio(11, "body-fluids-and-circulation"), bio(11, "excretory-products-and-their-elimination")]),
          lv("living-coordination-11", 11, "Movement, neural and chemical coordination", "Describe muscles and bones, the nervous system and hormones.", [bio(11, "locomotion-and-movement"), bio(11, "neural-control-and-coordination"), bio(11, "chemical-coordination-and-integration")]),
          lv("living-repro-12", 12, "Reproduction in flowers and humans", "Describe flower reproduction, human reproduction and reproductive health.", [bio(12, "sexual-reproduction-in-flowering-plants"), bio(12, "human-reproduction"), bio(12, "reproductive-health")]),
          lv("living-genetics-12", 12, "Genetics", "Use Mendelian genetics, DNA structure and gene expression.", [bio(12, "principles-of-inheritance-and-variation"), bio(12, "molecular-basis-of-inheritance")]),
          lv("living-evolution-12", 12, "Evolution", "Explain evidence for evolution and how natural selection works.", [bio(12, "evolution")]),
          lv("living-health-12", 12, "Human health and microbes", "Describe diseases, immunity and microbes useful to people.", [bio(12, "human-health-and-disease"), bio(12, "microbes-in-human-welfare")]),
          lv("living-biotech-12", 12, "Biotechnology", "Describe genetic engineering tools and the uses of biotechnology.", [bio(12, "biotechnology-principles-and-processes"), bio(12, "biotechnology-and-its-applications")])
        ]
      },

      // ===== Earth, environment and our surroundings =====
      {
        id: "earth-environment",
        title: "Earth, environment and our surroundings",
        icon: "🌍",
        summary: "From day, night and weather to water, resources, ecosystems and ecology.",
        levels: [
          lv("earth-weather-0", 0, "Day, night and weather", "Tell day from night, name kinds of weather and choose clothes for each season.", [], { own: dayNightWeather }),
          lv("earth-water-3", 3, "Water", "Say where water comes from and what we use it for.", [ev(3, "water")]),
          lv("earth-water-4", 4, "Water sources and saving water", "Name sources of water and ways to save it.", [ev(4, "water-sources-and-saving-water")]),
          lv("earth-water-5", 5, "The water cycle and water scarcity", "Describe the water cycle and why water is running short.", [ev(5, "water-cycle-and-water-scarcity")]),
          lv("earth-space-5", 5, "Our Earth and space", "Describe the Earth, Sun, Moon and planets.", [ev(5, "our-earth-and-space")]),
          lv("earth-landforms-5", 5, "Mountains, deserts and forests", "Say how living things and people live in mountains, deserts and forests.", [ev(5, "mountains-deserts-and-life-there"), ev(5, "forests-and-forest-people")]),
          lv("earth-fuels-5", 5, "Fuels, pollution and disasters", "Name fuels, the pollution they cause and how to stay safe in a disaster.", [ev(5, "fuels-and-pollution"), ev(5, "disasters-and-safety")]),
          lv("earth-air-6", 6, "Air around us", "Describe what air is made of and why it matters.", [pbAll(6, "air-around-us")]),
          lv("earth-resources-6", 6, "Nature's treasures and beyond Earth", "Describe natural resources and objects in the sky beyond Earth.", [R(6, "science", "natures-treasures"), R(6, "science", "beyond-earth")]),
          lv("earth-moon-7", 7, "The Earth, Moon and Sun", "Explain day and night, the seasons and the phases of the Moon.", [R(7, "science", "earth-moon-and-the-sun")]),
          lv("earth-sky-8", 8, "Natural phenomena and the sky", "Explain lightning, earthquakes and how people kept time using the sky.", [pbAll(8, "some-natural-phenomena"), R(8, "science", "keeping-time-with-the-skies")]),
          lv("earth-harmony-8", 8, "Nature in harmony", "Describe how living things depend on each other and why we must conserve nature.", [cb(8, "how-nature-works-in-harmony"), cb(8, "earth-a-unique-life-sustaining-planet"), pb(8, "conservation-of-plants-and-animals")]),
          lv("earth-fuels-8", 8, "Crops, coal and petroleum", "Describe farming practices and how coal and petroleum form and are used.", [pbAll(8, "crop-production-and-management"), pbAll(8, "coal-and-petroleum")]),
          lv("earth-system-9", 9, "Earth as a system", "Describe the cycles of matter and energy and the spheres of the Earth.", [cb(9, "earth-as-a-system-energy-matter-and-life"), pb(9, "improvement-in-food-resources")]),
          lv("earth-environment-10", 10, "Our environment", "Describe food chains, the ozone layer and managing waste.", [R(10, "science", "our-environment")]),
          lv("earth-ecology-12", 12, "Organisms and populations", "Describe how organisms adapt and how populations grow.", [bio(12, "organisms-and-populations")]),
          lv("earth-ecosystem-12", 12, "Ecosystem", "Describe energy flow, productivity and nutrient cycles in ecosystems.", [bio(12, "ecosystem")]),
          lv("earth-biodiversity-12", 12, "Biodiversity and conservation", "Explain why biodiversity matters and how it is conserved.", [bio(12, "biodiversity-and-conservation")])
        ]
      }
    ]
  });
})();
