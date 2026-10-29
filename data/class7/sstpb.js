// PSEB Class 7 Social Science: Geography, History and Civics. Format: see CONTENT_GUIDE.md.
// `formulas` holds key dates and facts.
StudyData.add(7, "sstpb", {
  syllabus: {
    board: "PSEB",
    match: "textbook",
    books: ["Social Science (PSEB, Class 7)"],
    note: "Follows the PSEB 2026–27 syllabus; written from the syllabus topics, not the PSEB book's own text.",
    reviewed: false
  },
  chapters: [
    {
      id: "environment",
      title: "Environment",
      section: "Geography",
      summary: "What the environment is, its natural and human parts, and the four domains of the Earth: lithosphere, hydrosphere, atmosphere and biosphere.",
      notes: [
        {
          heading: "Meaning and kinds of environment",
          points: [
            "The **environment** is everything around us: land, water, air, plants, animals, and also the things people have made.",
            "The **natural environment** includes land, water, air, soil, plants and animals.",
            "The **human-made environment** includes buildings, roads, bridges, parks and factories.",
            "The **human environment** is made of people, their activities and relationships, such as family, community and customs."
          ]
        },
        {
          heading: "Domains of the Earth",
          points: [
            "The **lithosphere** is the solid crust of the Earth: rocks, soil and mountains.",
            "The **hydrosphere** is all the water on Earth: oceans, rivers, lakes, groundwater and ice.",
            "The **atmosphere** is the blanket of air around the Earth. It holds the oxygen we breathe and protects us from harmful rays.",
            "The **biosphere** is the narrow zone where land, water and air meet and where life exists."
          ]
        },
        {
          heading: "Caring for the environment",
          points: [
            "Living things depend on the environment, and the environment is changed by what people do.",
            "Cutting forests, burning waste and dumping rubbish in water cause pollution.",
            "Planting trees, saving water and reducing waste help to protect the environment."
          ]
        }
      ],
      formulas: [
        "Four domains: lithosphere, hydrosphere, atmosphere, biosphere",
        "Biosphere = where land, water and air meet and support life"
      ],
      terms: [
        { term: "Environment", meaning: "Everything that surrounds us, both natural and human-made." },
        { term: "Lithosphere", meaning: "The solid outer layer of the Earth made of rocks and soil." },
        { term: "Hydrosphere", meaning: "All the water bodies of the Earth." },
        { term: "Biosphere", meaning: "The zone of the Earth where life exists." }
      ],
      qa: [
        { q: "What is the biosphere?", a: "The biosphere is the thin zone where the lithosphere, hydrosphere and atmosphere meet. Plants, animals and humans live only in this zone." },
        { q: "Give two examples each of natural and human-made environment.", a: "Natural: mountains and rivers. Human-made: roads and buildings." }
      ],
      quiz: [
        { q: "The solid crust of the Earth is called the:", options: ["Hydrosphere", "Lithosphere", "Atmosphere", "Biosphere"], answer: 1, explain: "Lithosphere means the 'rock sphere', the solid crust of the Earth." },
        { q: "Which of these is a human-made part of the environment?", options: ["River", "Soil", "Bridge", "Forest"], answer: 2, explain: "A bridge is built by people; the others are natural." },
        { q: "The domain made of all water bodies is the:", options: ["Hydrosphere", "Lithosphere", "Biosphere", "Atmosphere"], answer: 0, explain: "Hydro means water." },
        { q: "Life is found in the:", options: ["Only the atmosphere", "Biosphere", "Only the deep core", "Only the oceans"], answer: 1, explain: "The biosphere is where land, water and air meet and support life." },
        { q: "The blanket of air around the Earth is the:", options: ["Lithosphere", "Biosphere", "Hydrosphere", "Atmosphere"], answer: 3, explain: "The atmosphere is the layer of gases around the Earth." }
      ]
    },
    {
      id: "internal-external-earth",
      title: "The Internal and External Face of the Earth",
      section: "Geography",
      summary: "The layers inside the Earth, the three kinds of rocks, how soils form, and the uses of minerals and mineral oil.",
      notes: [
        {
          heading: "Interior of the Earth",
          points: [
            "The Earth has three main layers: the **crust** (outer), the **mantle** (middle) and the **core** (centre).",
            "The crust is thin and solid. The mantle is thick and made of hot, partly molten rock.",
            "The core has an outer liquid part and an inner solid part, made mostly of nickel and iron. It is very hot.",
            "Continental crust is thicker than oceanic crust."
          ]
        },
        {
          heading: "Rocks",
          points: [
            "**Igneous rocks** form when molten magma or lava cools and hardens, for example granite and basalt.",
            "**Sedimentary rocks** form when sediments are deposited in layers and pressed together, for example sandstone and limestone. Fossils are found in them.",
            "**Metamorphic rocks** form when igneous or sedimentary rocks change under heat and pressure, for example marble (from limestone) and slate (from shale).",
            "Rocks are changed from one type to another in the **rock cycle**."
          ]
        },
        {
          heading: "Soils",
          points: [
            "Soil is formed by the slow breaking down of rocks (weathering) mixed with humus from dead plants and animals.",
            "Soil is a vital resource: crops, grass and trees grow in it.",
            "Soil is lost by erosion due to wind, water and the cutting of trees. It can be saved by planting trees and terrace farming."
          ]
        },
        {
          heading: "Minerals and mineral oil",
          points: [
            "A **mineral** is a natural substance with a definite chemical composition, obtained from rocks by mining.",
            "Iron ore is used to make steel; coal is a fuel; bauxite gives aluminium; limestone is used to make cement.",
            "**Mineral oil** (petroleum) is found trapped in rocks below land or sea. It is refined to give petrol, diesel, kerosene and other products.",
            "Minerals and petroleum are non-renewable, so they should be used carefully."
          ]
        }
      ],
      formulas: [
        "Layers: crust, mantle, core",
        "Rock types: igneous, sedimentary, metamorphic",
        "Limestone -> marble; shale -> slate (metamorphism)"
      ],
      terms: [
        { term: "Crust", meaning: "The thin, solid outermost layer of the Earth." },
        { term: "Magma", meaning: "Hot molten rock beneath the Earth's surface; it is called lava when it reaches the surface." },
        { term: "Sedimentary rock", meaning: "A rock formed from layers of deposited and compressed sediments." },
        { term: "Weathering", meaning: "The breaking down of rocks into small pieces by wind, water and temperature." },
        { term: "Petroleum", meaning: "Mineral oil found below the ground, refined into fuels." }
      ],
      qa: [
        { q: "Name the three kinds of rocks with one example of each.", a: "Igneous (granite), sedimentary (sandstone) and metamorphic (marble)." },
        { q: "How is soil formed?", a: "Rocks are broken into tiny particles by weathering. These mix with humus from dead plants and animals to form soil over a long time." }
      ],
      quiz: [
        { q: "The innermost layer of the Earth is the:", options: ["Crust", "Mantle", "Core", "Lithosphere"], answer: 2, explain: "The core is at the centre of the Earth." },
        { q: "Granite is an example of an:", options: ["Sedimentary rock", "Igneous rock", "Metamorphic rock", "Soil"], answer: 1, explain: "Granite forms from cooled magma." },
        { q: "Marble is formed from:", options: ["Limestone", "Granite", "Sandstone", "Coal"], answer: 0, explain: "Limestone changes to marble under heat and pressure." },
        { q: "Fossils are most commonly found in:", options: ["Igneous rocks", "Metamorphic rocks", "Lava", "Sedimentary rocks"], answer: 3, explain: "Layers of sediment bury and preserve the remains of living things." },
        { q: "Bauxite is the ore of:", options: ["Iron", "Aluminium", "Copper", "Gold"], answer: 1, explain: "Aluminium is extracted from bauxite." }
      ]
    },
    {
      id: "atmosphere-temperature",
      title: "Atmosphere and Temperature",
      section: "Geography",
      summary: "The layers and gases of the atmosphere, and how temperature, weather, winds and rainfall differ from place to place.",
      notes: [
        {
          heading: "Composition and layers",
          points: [
            "Air is a mixture of gases: about 78% nitrogen, 21% oxygen and small amounts of carbon dioxide, argon and others. It also contains water vapour and dust.",
            "The atmosphere has layers: **troposphere** (closest to the ground, where weather happens), **stratosphere** (contains the ozone layer), **mesosphere**, **thermosphere** and **exosphere**.",
            "The ozone layer absorbs harmful ultraviolet rays from the Sun."
          ]
        },
        {
          heading: "Temperature",
          points: [
            "Temperature is the degree of hotness or coldness of the air, measured with a thermometer.",
            "It is highest near the equator, where the Sun's rays fall nearly straight, and lowest near the poles.",
            "Temperature falls as you go higher up a mountain. Places near the sea are cooler in summer and warmer in winter than places far inland."
          ]
        },
        {
          heading: "Weather, wind and rain",
          points: [
            "**Weather** is the day-to-day condition of the atmosphere; **climate** is the average weather over many years.",
            "Air moving from high pressure to low pressure is called **wind**.",
            "Rain falls when water vapour cools, forms clouds, and condenses into drops. Rainfall is measured with a rain gauge.",
            "Types of rainfall are convectional, relief (orographic) and cyclonic."
          ]
        }
      ],
      formulas: [
        "Air: about 78% nitrogen, 21% oxygen",
        "Weather happens in the troposphere",
        "Ozone layer: in the stratosphere"
      ],
      terms: [
        { term: "Troposphere", meaning: "The lowest layer of the atmosphere, where clouds, rain and wind occur." },
        { term: "Weather", meaning: "The day-to-day state of the atmosphere at a place." },
        { term: "Climate", meaning: "The average weather of a place over a long period." },
        { term: "Wind", meaning: "Air moving from a region of high pressure to a region of low pressure." },
        { term: "Condensation", meaning: "The change of water vapour into tiny drops of water." }
      ],
      qa: [
        { q: "Why is the troposphere important?", a: "It is the layer closest to the ground and holds most of the air and water vapour, so weather events like clouds, rain and storms happen here." },
        { q: "Why is it colder on a mountain top?", a: "The air becomes thinner and loses heat more easily as height increases, so temperature falls with altitude." }
      ],
      quiz: [
        { q: "The most abundant gas in the air is:", options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Argon"], answer: 2, explain: "Nitrogen makes up about 78% of air." },
        { q: "Weather changes happen mainly in the:", options: ["Troposphere", "Stratosphere", "Exosphere", "Mesosphere"], answer: 0, explain: "The troposphere holds the clouds and moisture." },
        { q: "The ozone layer protects us from:", options: ["Sound", "Ultraviolet rays", "Meteors only", "Rain"], answer: 1, explain: "Ozone absorbs most harmful ultraviolet radiation." },
        { q: "Average weather over many years is called:", options: ["Rainfall", "Wind", "Season", "Climate"], answer: 3, explain: "Climate is the long-term pattern of weather." },
        { q: "Temperature is generally highest near the:", options: ["Poles", "Equator", "Mountain tops", "Deep sea"], answer: 1, explain: "Near the equator the Sun's rays are nearly vertical." }
      ]
    },
    {
      id: "oceans",
      title: "Oceans",
      section: "Geography",
      summary: "The major oceans, their movements (waves, currents and tides) and the danger of tsunamis.",
      notes: [
        {
          heading: "The oceans",
          points: [
            "About 71% of the Earth's surface is covered with water.",
            "The five oceans are the Pacific (largest), Atlantic, Indian, Southern (Antarctic) and Arctic (smallest).",
            "The Indian Ocean lies south of India and is the only ocean named after a country."
          ]
        },
        {
          heading: "Waves, currents and tides",
          points: [
            "**Waves** are caused mainly by wind blowing over the water surface.",
            "**Ocean currents** are large streams of water moving in a fixed direction. Warm currents come from near the equator and cold currents from near the poles. They affect the climate and fishing of coasts.",
            "**Tides** are the rise and fall of sea level, caused by the pull of the Moon and, to a smaller extent, the Sun.",
            "**High tide** is when water rises to its highest; **low tide** is when it falls to its lowest. **Spring tides** occur at full moon and new moon; **neap tides** occur at the quarter moons."
          ]
        },
        {
          heading: "Tsunami",
          points: [
            "A **tsunami** is a series of huge sea waves caused by an undersea earthquake, volcanic eruption or landslide.",
            "In the open sea it is hardly noticed, but near the coast it grows tall and can flood and destroy the land.",
            "The Indian Ocean tsunami of 26 December 2004 caused great loss of life in many countries, including India.",
            "Early warning systems and moving quickly to high ground save lives."
          ]
        }
      ],
      formulas: [
        "Largest ocean: Pacific; smallest: Arctic",
        "Tides: caused by the Moon's (and Sun's) pull",
        "Indian Ocean tsunami: 26 December 2004"
      ],
      terms: [
        { term: "Ocean current", meaning: "A large stream of water that flows in a definite direction in the ocean." },
        { term: "Tide", meaning: "The regular rise and fall of the sea level." },
        { term: "Spring tide", meaning: "The highest tide, occurring at full moon and new moon." },
        { term: "Tsunami", meaning: "A giant sea wave caused by an undersea earthquake or volcano." }
      ],
      qa: [
        { q: "What causes tides?", a: "Tides are caused mainly by the gravitational pull of the Moon on the ocean water, with a smaller effect from the Sun." },
        { q: "How can people stay safe from a tsunami?", a: "By heeding early warnings, moving away from the coast to high ground, and following instructions of local authorities." }
      ],
      quiz: [
        { q: "The largest ocean is the:", options: ["Atlantic", "Indian", "Arctic", "Pacific"], answer: 3, explain: "The Pacific covers about a third of the Earth's surface." },
        { q: "Waves are mainly caused by:", options: ["Wind", "The Moon", "Earthquakes only", "Rivers"], answer: 0, explain: "Wind blowing over the water forms waves." },
        { q: "Spring tides occur at:", options: ["First quarter", "Last quarter", "Full and new moon", "Noon"], answer: 2, explain: "At full and new moon the Sun and Moon pull in line, giving the highest tides." },
        { q: "A tsunami is usually caused by an:", options: ["Cyclone", "Undersea earthquake", "Tide", "Ocean current"], answer: 1, explain: "Sudden movement of the sea floor pushes up huge waves." },
        { q: "The ocean south of India is the:", options: ["Pacific", "Arctic", "Atlantic", "Indian Ocean"], answer: 3, explain: "It is named the Indian Ocean." }
      ]
    },
    {
      id: "natural-vegetation-wildlife",
      title: "Natural Vegetation and Wildlife",
      section: "Geography",
      summary: "The main types of natural vegetation, the animals that live in each, and why forests and wildlife must be protected.",
      notes: [
        {
          heading: "Natural vegetation",
          points: [
            "Natural vegetation is the plant life that grows on its own without human help. It depends mainly on temperature and rainfall.",
            "**Tropical rainforests** grow near the equator where it is hot and wet all year; the trees are tall and dense.",
            "**Tropical deciduous forests** (monsoon forests) shed leaves in the dry season; teak and sal are examples.",
            "**Grasslands** grow where rainfall is moderate, such as savannas and temperate grasslands.",
            "**Thorny bushes and cactus** grow in deserts; **coniferous forests** with cone-bearing trees grow in cold regions; **tundra** plants such as moss and lichen grow in the polar regions."
          ]
        },
        {
          heading: "Wildlife",
          points: [
            "Animals are found according to the vegetation: elephants and tigers in forests, camels in deserts, lions and zebras in grasslands, polar bears and penguins in cold regions.",
            "Some species are endangered because of hunting and loss of habitat."
          ]
        },
        {
          heading: "Conservation",
          points: [
            "Forests give wood, fruits, medicines and oxygen, hold the soil and bring rain.",
            "National parks, sanctuaries and biosphere reserves protect wild plants and animals.",
            "Everyone can help by planting trees, not hunting or buying wildlife products, and preventing forest fires."
          ]
        }
      ],
      formulas: [
        "Vegetation depends on temperature and rainfall",
        "Teak and sal: tropical deciduous forests"
      ],
      terms: [
        { term: "Natural vegetation", meaning: "Plants that grow naturally without being planted by people." },
        { term: "Deciduous", meaning: "Trees that shed their leaves in a particular season." },
        { term: "Wildlife sanctuary", meaning: "A protected area where wild animals are safe from hunting." },
        { term: "Endangered", meaning: "A species in danger of disappearing for ever." }
      ],
      qa: [
        { q: "Why are forests important?", a: "Forests give us wood, fruits and medicines, give out oxygen, prevent soil erosion, help bring rain and are the home of wildlife." },
        { q: "Name two ways to protect wildlife.", a: "Setting up national parks and sanctuaries, and stopping the hunting of animals and the cutting of forests." }
      ],
      quiz: [
        { q: "Natural vegetation mainly depends on:", options: ["Temperature and rainfall", "Roads", "Population", "Language"], answer: 0, explain: "Climate decides which plants can grow." },
        { q: "Teak and sal are found in:", options: ["Tundra", "Deserts", "Tropical deciduous forests", "Polar areas"], answer: 2, explain: "They are monsoon forest trees that shed leaves in the dry season." },
        { q: "Cactus is typical of:", options: ["Rainforests", "Deserts", "Tundra", "Wetlands"], answer: 1, explain: "Cactus stores water and survives dry conditions." },
        { q: "Moss and lichen are found in the:", options: ["Tropical forest", "Savanna", "Desert", "Tundra"], answer: 3, explain: "Tundra is cold and treeless." },
        { q: "A place where animals are protected is a:", options: ["Farm", "Wildlife sanctuary", "Factory", "Harbour"], answer: 1, explain: "Sanctuaries protect wildlife from hunting." }
      ]
    },
    {
      id: "human-environment",
      title: "Human Environment: Settlements, Transport, Communication and Trade",
      section: "Geography",
      summary: "How people settle, travel, send messages and exchange goods.",
      notes: [
        {
          heading: "Settlements",
          points: [
            "A **settlement** is a place where people make their homes.",
            "**Rural settlements** are villages where most people farm or do related work. **Urban settlements** are towns and cities with industries, services and trade.",
            "Early settlements grew near rivers because water and fertile land were available. Settlements may be compact or scattered."
          ]
        },
        {
          heading: "Transport",
          points: [
            "Transport carries people and goods from one place to another by **road, rail, water and air**.",
            "Roads are used for short distances; railways carry heavy goods and many people cheaply; water transport is cheapest for bulky goods; air transport is the fastest but costly.",
            "Good transport links make trade, travel and development easier."
          ]
        },
        {
          heading: "Communication",
          points: [
            "Communication is the sending and receiving of messages. Means include letters, telephone, mobile, radio, television, newspapers and the internet.",
            "Radio, television and newspapers reach many people at once and are called **mass media**.",
            "Satellites and the internet have made communication very fast."
          ]
        },
        {
          heading: "Trade",
          points: [
            "**Trade** is the buying and selling of goods. Trade within a country is internal; trade between countries is **international trade**, made up of imports and exports.",
            "Countries trade because no region has all the resources it needs.",
            "Markets, ports and transport links help trade to grow."
          ]
        }
      ],
      formulas: [
        "Modes of transport: road, rail, water, air",
        "Import = goods brought in; export = goods sent out"
      ],
      terms: [
        { term: "Settlement", meaning: "A place where people live permanently." },
        { term: "Mass media", meaning: "Means of communication that reach large numbers of people, such as radio and TV." },
        { term: "Export", meaning: "Goods sent from one country to another for sale." },
        { term: "Import", meaning: "Goods brought into a country from another country." }
      ],
      qa: [
        { q: "Why did early settlements grow near rivers?", a: "Rivers provided water for drinking and farming, and the land around them was fertile. Rivers also helped transport." },
        { q: "What is the difference between import and export?", a: "Imports are goods a country buys from other countries; exports are goods it sells to them." }
      ],
      quiz: [
        { q: "Which mode of transport is the fastest?", options: ["Road", "Rail", "Water", "Air"], answer: 3, explain: "Aeroplanes cover long distances in the least time." },
        { q: "Villages are examples of:", options: ["Urban settlements", "Rural settlements", "Ports", "Mass media"], answer: 1, explain: "Rural settlements depend mostly on farming." },
        { q: "Television and radio are:", options: ["Mass media", "Means of transport", "Imports", "Settlements"], answer: 0, explain: "They reach large audiences together." },
        { q: "Goods sent to another country are:", options: ["Imports", "Settlements", "Exports", "Currents"], answer: 2, explain: "Selling goods abroad is exporting." },
        { q: "Bulky goods are cheapest to move by:", options: ["Air", "Water", "Mobile phone", "Cycle"], answer: 1, explain: "Ships can carry huge loads at low cost per unit." }
      ]
    },
    {
      id: "india-and-the-world",
      title: "India and the World: When, Where and How",
      section: "History",
      summary: "How historians study the past, what sources they use, and why the medieval period of Indian history is studied.",
      notes: [
        {
          heading: "Sources of history",
          points: [
            "Historians use sources such as coins, inscriptions, buildings, paintings, manuscripts and the writings of travellers.",
            "Records written by officials and court historians give details of rulers and administration.",
            "Foreign travellers such as Ibn Battuta (Morocco) and Al-Biruni (Central Asia) left accounts of India."
          ]
        },
        {
          heading: "The medieval period",
          points: [
            "The period from about the 8th to the 18th century is usually called the medieval period in India.",
            "It saw the rise of new kingdoms such as the Rajputs and Cholas, the Delhi Sultanate and the Mughal Empire.",
            "New religious ideas, languages, art and architecture developed."
          ]
        },
        {
          heading: "Difficulties in reading the past",
          points: [
            "Dates and names change in spellings; some records favour rulers and leave out ordinary people.",
            "Historians compare many sources to decide what is most reliable.",
            "Words and their meanings change over time. For example, the word 'Hindustan' was used for the north of the subcontinent in the 13th century."
          ]
        }
      ],
      formulas: [
        "Medieval India: roughly 8th to 18th century",
        "Sources: coins, inscriptions, buildings, manuscripts, travellers' accounts"
      ],
      terms: [
        { term: "Inscription", meaning: "Writing carved on stone or metal." },
        { term: "Manuscript", meaning: "A handwritten book or document." },
        { term: "Medieval", meaning: "Belonging to the middle period between ancient and modern history." },
        { term: "Source", meaning: "Any material from which we learn about the past." }
      ],
      qa: [
        { q: "Name three sources used to study medieval India.", a: "Coins, inscriptions, buildings and manuscripts or travellers' accounts." },
        { q: "Why do historians compare many sources?", a: "A single source may be one-sided or mistaken, so comparing several helps find what is most likely true." }
      ],
      quiz: [
        { q: "Writing carved on stone is called an:", options: ["Inscription", "Manuscript", "Coin", "Map"], answer: 0, explain: "Inscriptions are carved records." },
        { q: "Ibn Battuta came from:", options: ["China", "Morocco", "Greece", "Persia"], answer: 1, explain: "He was a traveller from Morocco who visited India in the 14th century." },
        { q: "The medieval period is placed between:", options: ["Stone Age and Harappa", "Ancient and modern history", "1947 and today", "Vedic and Maurya"], answer: 1, explain: "It lies in the middle of the history timeline." },
        { q: "A handwritten book is a:", options: ["Coin", "Monument", "Inscription", "Manuscript"], answer: 3, explain: "Manu means hand." },
        { q: "Al-Biruni wrote about India. He came from:", options: ["Central Asia", "Britain", "Africa", "Japan"], answer: 0, explain: "He was a scholar from Central Asia who wrote in the 11th century." }
      ]
    },
    {
      id: "new-kings-kingdoms",
      title: "New Kings and Kingdoms (700–1200 CE)",
      section: "History",
      summary: "The rise of the Rajput kingdoms, their rivalry in the north, and the early Turkish invasions.",
      notes: [
        {
          heading: "Rise of new dynasties",
          points: [
            "After about 700 CE many new rulers rose to power, some from warrior families who later called themselves **Rajputs**.",
            "Important Rajput clans included the Chauhans (Ajmer and Delhi), Paramaras (Malwa), Solankis (Gujarat) and Pratiharas.",
            "In the north-east and east the Palas ruled Bengal and Bihar."
          ]
        },
        {
          heading: "Tripartite struggle",
          points: [
            "The Pratiharas, Palas and Rashtrakutas fought for control of Kannauj, a rich city on the Ganga. This is called the **tripartite struggle**.",
            "The Rashtrakutas ruled in the Deccan."
          ]
        },
        {
          heading: "Prithviraj Chauhan and Turkish invasions",
          points: [
            "Mahmud of Ghazni, ruler of Ghazni (Afghanistan), raided India many times from about 1000 CE, including the temple at Somnath in 1025.",
            "Prithviraj Chauhan of Ajmer and Delhi fought Muhammad of Ghor. In the First Battle of Tarain (1191) Prithviraj won; in the Second Battle of Tarain (1192) he was defeated.",
            "This opened the way for Turkish rule in north India."
          ]
        },
        {
          heading: "Administration",
          points: [
            "Kings were helped by officials and military chiefs known as samantas, who held land in return for service.",
            "Kings collected taxes on land and trade and built temples and forts."
          ]
        }
      ],
      formulas: [
        "Raid on Somnath: 1025 (Mahmud of Ghazni)",
        "Battles of Tarain: 1191 and 1192"
      ],
      terms: [
        { term: "Rajput", meaning: "Members of warrior clans who ruled many parts of north and west India." },
        { term: "Samanta", meaning: "An armed noble or chief who served a king and held land." },
        { term: "Kannauj", meaning: "A wealthy city on the Ganga fought over by three dynasties." },
        { term: "Tripartite struggle", meaning: "The long contest among Pratiharas, Palas and Rashtrakutas for Kannauj." }
      ],
      qa: [
        { q: "What was the tripartite struggle?", a: "It was the fight among the Pratiharas, Palas and Rashtrakutas for control of the rich city of Kannauj." },
        { q: "What happened at the Battles of Tarain?", a: "Prithviraj Chauhan defeated Muhammad of Ghor in 1191, but was defeated by him in 1192." }
      ],
      quiz: [
        { q: "Mahmud of Ghazni raided the temple of:", options: ["Konark", "Somnath", "Hampi", "Madurai"], answer: 1, explain: "The Somnath raid took place in 1025." },
        { q: "The Second Battle of Tarain was in:", options: ["1191", "1025", "1192", "1206"], answer: 2, explain: "Muhammad of Ghor defeated Prithviraj in 1192." },
        { q: "Prithviraj Chauhan belonged to the:", options: ["Chauhan clan", "Pala dynasty", "Chola dynasty", "Mughal family"], answer: 0, explain: "The Chauhans ruled from Ajmer and Delhi." },
        { q: "The Palas ruled mainly over:", options: ["Gujarat", "Malwa", "Tamil Nadu", "Bengal and Bihar"], answer: 3, explain: "The Pala kingdom was in the east." },
        { q: "The Rashtrakutas ruled in the:", options: ["Deccan", "Punjab", "Kashmir", "Assam"], answer: 0, explain: "They were a Deccan power." }
      ]
    },
    {
      id: "south-india-700-1200",
      title: "Political Developments in South India (700–1200)",
      section: "History",
      summary: "The Cholas, Pallavas and Chalukyas, their rule, temples and village administration.",
      notes: [
        {
          heading: "Early southern dynasties",
          points: [
            "The Pallavas of Kanchipuram and the Chalukyas of Badami ruled in the south before the Cholas rose.",
            "The Pallavas built the rock-cut temples at Mamallapuram (Mahabalipuram)."
          ]
        },
        {
          heading: "The Cholas",
          points: [
            "The Cholas rose to power in the 9th century with their capital at Thanjavur. The founder of the line that rose is usually given as Vijayalaya.",
            "**Rajaraja I** (985–1014) extended the empire and built the great Brihadeshwara temple at Thanjavur. His son **Rajendra I** took the empire to the Ganga region and overseas.",
            "The Cholas had a strong navy and traded with South-East Asia."
          ]
        },
        {
          heading: "Administration and temples",
          points: [
            "Villages had assemblies such as the **sabha** and **ur** which looked after land, irrigation and justice.",
            "Temples were centres of religion, learning, art and the economy. Bronze sculptures such as the Nataraja were made.",
            "Farmers dug tanks and canals for irrigation; the main crop was rice."
          ]
        }
      ],
      formulas: [
        "Chola capital: Thanjavur",
        "Rajaraja I (985–1014) built the Brihadeshwara temple"
      ],
      terms: [
        { term: "Sabha", meaning: "A village assembly in Chola times." },
        { term: "Brihadeshwara temple", meaning: "The great Shiva temple built at Thanjavur by Rajaraja I." },
        { term: "Pallavas", meaning: "A dynasty ruling from Kanchipuram who built the Mamallapuram temples." },
        { term: "Irrigation", meaning: "Supplying water to fields using tanks, canals or wells." }
      ],
      qa: [
        { q: "Who built the Brihadeshwara temple and where?", a: "Rajaraja I of the Cholas built it at Thanjavur." },
        { q: "How did Chola villages manage their affairs?", a: "Village assemblies like the sabha and ur managed land, tax, irrigation and local disputes." }
      ],
      quiz: [
        { q: "The Chola capital was:", options: ["Madurai", "Badami", "Thanjavur", "Kanchipuram"], answer: 2, explain: "The Cholas ruled from Thanjavur." },
        { q: "Rock-cut temples at Mamallapuram were built by the:", options: ["Pallavas", "Cholas", "Palas", "Rajputs"], answer: 0, explain: "They are a Pallava creation." },
        { q: "The Chola ruler who built the Thanjavur temple:", options: ["Rajendra I", "Rajaraja I", "Vijayalaya", "Pulakeshin"], answer: 1, explain: "Rajaraja I built it in the early 11th century." },
        { q: "A Chola village assembly was called a:", options: ["Samanta", "Dharamshala", "Sabha", "Durbar"], answer: 2, explain: "Sabha and ur were village bodies." },
        { q: "The main crop in Chola lands was:", options: ["Wheat", "Rice", "Cotton", "Tea"], answer: 1, explain: "The Kaveri delta is a rice-growing region." }
      ]
    },
    {
      id: "delhi-sultanate",
      title: "The Delhi Sultanate",
      section: "History",
      summary: "The five dynasties that ruled from Delhi between 1206 and 1526, their well-known rulers, administration and fall.",
      notes: [
        {
          heading: "The dynasties",
          points: [
            "The Delhi Sultanate lasted from 1206 to 1526 under five dynasties: **Mamluk (Slave)**, **Khalji**, **Tughlaq**, **Sayyid** and **Lodi**.",
            "Qutbuddin Aibak founded the Mamluk dynasty in 1206 and began the Qutb Minar.",
            "Iltutmish made Delhi the capital and set up a strong rule. **Razia Sultan** (1236–1240) was the only woman to rule the Sultanate."
          ]
        },
        {
          heading: "Khalji and Tughlaq rulers",
          points: [
            "**Alauddin Khalji** (1296–1316) kept a large army, fixed market prices and defended the north against Mongol attacks.",
            "**Muhammad bin Tughlaq** (1325–1351) moved his capital from Delhi to Daulatabad and introduced token coins; both plans failed because of poor preparation.",
            "**Firuz Shah Tughlaq** built canals, towns and hospitals."
          ]
        },
        {
          heading: "Administration",
          points: [
            "The Sultan was the head of the state, helped by ministers and army commanders.",
            "The empire was divided into provinces (**iqtas**) ruled by governors called **muqtis**, who collected revenue and kept troops.",
            "Land revenue was the main income."
          ]
        },
        {
          heading: "Decline",
          points: [
            "Timur invaded Delhi in 1398 and weakened the Tughlaqs.",
            "In 1526 Babur defeated the last Lodi ruler, Ibrahim Lodi, at the First Battle of Panipat, ending the Sultanate."
          ]
        }
      ],
      formulas: [
        "Delhi Sultanate: 1206–1526",
        "Dynasties: Mamluk, Khalji, Tughlaq, Sayyid, Lodi",
        "Timur's invasion: 1398; First Battle of Panipat: 1526"
      ],
      terms: [
        { term: "Sultan", meaning: "The ruler of the Delhi Sultanate." },
        { term: "Iqta", meaning: "A territory assigned to an officer to collect revenue and maintain troops." },
        { term: "Muqti", meaning: "The officer in charge of an iqta." },
        { term: "Token currency", meaning: "Coins of cheap metal that were meant to be worth silver coins." }
      ],
      qa: [
        { q: "Who was Razia Sultan?", a: "She was the daughter of Iltutmish and ruled Delhi from 1236 to 1240, the only woman ruler of the Delhi Sultanate." },
        { q: "Why did Muhammad bin Tughlaq's plans fail?", a: "His shift of capital to Daulatabad and token coins were not well prepared. Many people suffered and coins were forged, so he had to give up both plans." }
      ],
      quiz: [
        { q: "The Delhi Sultanate was founded in:", options: ["1192", "1206", "1398", "1526"], answer: 1, explain: "Qutbuddin Aibak began the Sultanate in 1206." },
        { q: "The only woman ruler of the Sultanate was:", options: ["Razia Sultan", "Noor Jahan", "Mumtaz Mahal", "Chand Bibi"], answer: 0, explain: "Razia ruled from 1236 to 1240." },
        { q: "Muhammad bin Tughlaq shifted the capital to:", options: ["Agra", "Lahore", "Daulatabad", "Kannauj"], answer: 2, explain: "Daulatabad is in the Deccan." },
        { q: "The last dynasty of the Sultanate was the:", options: ["Khalji", "Sayyid", "Tughlaq", "Lodi"], answer: 3, explain: "The Lodis were defeated in 1526." },
        { q: "Who began constructing the Qutb Minar?", options: ["Akbar", "Alauddin", "Qutbuddin Aibak", "Babur"], answer: 2, explain: "Aibak started it; Iltutmish completed it." }
      ]
    },
    {
      id: "mughal-empire",
      title: "The Mughal Empire",
      section: "History",
      summary: "The Mughal emperors from Babur to Aurangzeb, their policies and administration.",
      notes: [
        {
          heading: "Founding and early rulers",
          points: [
            "**Babur** founded the Mughal Empire after defeating Ibrahim Lodi at the First Battle of Panipat in **1526**.",
            "His son **Humayun** lost the throne to Sher Shah Suri (who ruled 1540–1545 and introduced the silver rupee and a road network) and regained it in 1555.",
            "Humayun's son **Akbar** became emperor in 1556."
          ]
        },
        {
          heading: "Akbar the Great",
          points: [
            "Akbar (1556–1605) expanded the empire and followed tolerance towards all religions. He abolished the pilgrim tax and jizya.",
            "He organised the **mansabdari** system: every officer held a rank (mansab) which fixed his pay and the troops he kept.",
            "Raja Todar Mal helped to organise land revenue. Akbar built Fatehpur Sikri."
          ]
        },
        {
          heading: "Jahangir, Shah Jahan and Aurangzeb",
          points: [
            "**Jahangir** (1605–1627) was fond of justice, painting and gardens.",
            "**Shah Jahan** (1628–1658) built the Taj Mahal, the Red Fort at Delhi and the Jama Masjid.",
            "**Aurangzeb** (1658–1707) extended the empire to its greatest size but his long wars in the Deccan and conflicts with the Marathas, Sikhs and Rajputs weakened it."
          ]
        },
        {
          heading: "Decline",
          points: [
            "After Aurangzeb died in 1707 the empire weakened.",
            "Weak successors, quarrels among nobles, invasions by Nadir Shah (1739) and the rise of regional powers ended Mughal strength."
          ]
        }
      ],
      formulas: [
        "Babur: 1526; Akbar: 1556–1605; Shah Jahan: 1628–1658; Aurangzeb died 1707",
        "Mansabdari: rank-based system of Akbar",
        "Nadir Shah's invasion of Delhi: 1739"
      ],
      terms: [
        { term: "Mansabdar", meaning: "A Mughal officer who held a rank (mansab) given by the emperor." },
        { term: "Jizya", meaning: "A tax on non-Muslims, which Akbar abolished in 1564." },
        { term: "Sher Shah Suri", meaning: "The Afghan ruler who defeated Humayun and built the Grand Trunk Road." },
        { term: "Revenue", meaning: "The tax collected from the land, the main income of the empire." }
      ],
      qa: [
        { q: "What was the mansabdari system?", a: "Akbar's system where every officer was given a rank (mansab) that fixed his salary and the number of soldiers he had to maintain." },
        { q: "Why did the Mughal Empire decline?", a: "After Aurangzeb's death in 1707, weak rulers, noble rivalries, costly wars, invasions like Nadir Shah's and the rise of regional powers broke up the empire." }
      ],
      quiz: [
        { q: "Babur defeated Ibrahim Lodi at:", options: ["Haldighati", "Plassey", "Tarain", "Panipat"], answer: 3, explain: "The First Battle of Panipat was in 1526." },
        { q: "Who built the Taj Mahal?", options: ["Shah Jahan", "Akbar", "Jahangir", "Humayun"], answer: 0, explain: "Shah Jahan built it in memory of Mumtaz Mahal." },
        { q: "The mansabdari system was started by:", options: ["Babur", "Aurangzeb", "Akbar", "Sher Shah"], answer: 2, explain: "It organised ranks and army duties under Akbar." },
        { q: "The last great Mughal emperor, who died in 1707, was:", options: ["Shah Jahan", "Aurangzeb", "Jahangir", "Humayun"], answer: 1, explain: "Aurangzeb ruled from 1658 to 1707." },
        { q: "Akbar became emperor in:", options: ["1526", "1540", "1605", "1556"], answer: 3, explain: "He came to the throne in 1556 after Humayun's death." }
      ]
    },
    {
      id: "architecture",
      title: "Architecture",
      section: "History",
      summary: "Temples, forts, mosques and tombs built in medieval India and the styles they show.",
      notes: [
        {
          heading: "Temples and early styles",
          points: [
            "Temples were built by kings such as the Cholas; the Brihadeshwara temple at Thanjavur and the Sun Temple at Konark are famous.",
            "Temples had a main shrine, a tower (shikhara or gopuram) and a hall for people.",
            "Rajput rulers built strong forts and palaces, for example at Chittor and Jaisalmer."
          ]
        },
        {
          heading: "Sultanate architecture",
          points: [
            "Builders began using the **arch**, the **dome** and slender towers called **minarets**, with lime mortar for strength.",
            "The Qutb Minar at Delhi was begun by Qutbuddin Aibak and completed by Iltutmish.",
            "Buildings were decorated with calligraphy and geometrical designs."
          ]
        },
        {
          heading: "Mughal architecture",
          points: [
            "The Mughals built forts, tombs and gardens. Akbar built the Agra Fort and Fatehpur Sikri with its Buland Darwaza.",
            "Humayun's tomb at Delhi is the model for later tombs.",
            "Shah Jahan's buildings used white marble and inlay work: the Taj Mahal at Agra, the Red Fort and Jama Masjid in Delhi.",
            "The Mughals planned gardens in a formal four-part layout called **charbagh**."
          ]
        }
      ],
      formulas: [
        "Qutb Minar: Aibak and Iltutmish",
        "Fatehpur Sikri and Buland Darwaza: Akbar",
        "Taj Mahal, Red Fort: Shah Jahan"
      ],
      terms: [
        { term: "Arch", meaning: "A curved structure used to span a doorway or open space." },
        { term: "Dome", meaning: "A rounded roof, like half a ball." },
        { term: "Minaret", meaning: "A tall, slender tower attached to a mosque." },
        { term: "Charbagh", meaning: "A garden divided into four equal parts, favoured by the Mughals." }
      ],
      qa: [
        { q: "Name three buildings of Shah Jahan.", a: "The Taj Mahal at Agra, the Red Fort and the Jama Masjid at Delhi." },
        { q: "What new features did the Sultanate bring to architecture?", a: "The true arch, the dome and minarets, along with lime mortar and calligraphic decoration." }
      ],
      quiz: [
        { q: "Buland Darwaza is at:", options: ["Agra", "Lahore", "Delhi", "Fatehpur Sikri"], answer: 3, explain: "Akbar built it at Fatehpur Sikri." },
        { q: "The Taj Mahal is built mainly of:", options: ["White marble", "Red sandstone only", "Wood", "Brick only"], answer: 0, explain: "White marble with inlay work was used." },
        { q: "The Qutb Minar is in:", options: ["Agra", "Jaipur", "Delhi", "Lucknow"], answer: 2, explain: "It stands in Mehrauli, Delhi." },
        { q: "A tall slender tower of a mosque is a:", options: ["Gopuram", "Minaret", "Dome", "Arch"], answer: 1, explain: "Minarets are used to call the faithful to prayer." },
        { q: "A four-part garden layout is called:", options: ["Shikhara", "Mansab", "Iqta", "Charbagh"], answer: 3, explain: "Char means four, bagh means garden." }
      ]
    },
    {
      id: "towns-traders-craftsmen",
      title: "Towns, Traders and Craftsmen",
      section: "History",
      summary: "Temple towns, capital cities, ports, crafts and trade in medieval India.",
      notes: [
        {
          heading: "Kinds of towns",
          points: [
            "**Temple towns** grew around big temples, such as Thanjavur, Madurai and Puri.",
            "**Capital and market towns** like Delhi, Agra and Lahore grew around royal courts and markets.",
            "**Port towns** such as Surat, Calicut and Masulipatnam carried on overseas trade."
          ]
        },
        {
          heading: "Crafts",
          points: [
            "Craftspeople made cloth, metal goods, pottery and jewellery. Famous crafts included textiles of Bengal and Gujarat, bronze images, and carpets.",
            "Craft workers often formed guilds to protect their trade.",
            "Weavers, dyers and carpenters worked for temples, courts and markets."
          ]
        },
        {
          heading: "Trade",
          points: [
            "Traders carried spices, cotton cloth, indigo, salt and horses within India and abroad.",
            "Merchants formed groups and moved in caravans. Banjaras carried grain and salt.",
            "Hundi (a form of bill of exchange) helped merchants send money safely.",
            "European traders arrived later, beginning with the Portuguese at Calicut in 1498."
          ]
        }
      ],
      formulas: [
        "Vasco da Gama reached Calicut: 1498",
        "Ports: Surat, Calicut, Masulipatnam"
      ],
      terms: [
        { term: "Guild", meaning: "An association of craftsmen or traders who set rules for their work." },
        { term: "Hundi", meaning: "A written order for payment that allowed merchants to move money safely." },
        { term: "Banjara", meaning: "A travelling trader community who carried goods on bullocks." },
        { term: "Caravan", meaning: "A group of traders travelling together." }
      ],
      qa: [
        { q: "Why did temple towns grow?", a: "Temples attracted pilgrims, and priests, craftsmen, traders and artists settled around them, so markets and towns grew." },
        { q: "What was a hundi?", a: "A hundi was a written paper that let a merchant deposit money in one town and get it from another town, avoiding the risk of carrying coins." }
      ],
      quiz: [
        { q: "Vasco da Gama reached Calicut in:", options: ["1398", "1498", "1526", "1600"], answer: 1, explain: "He reached India by sea in 1498." },
        { q: "A famous temple town is:", options: ["Surat", "Agra", "Madurai", "Lahore"], answer: 2, explain: "Madurai grew around the Meenakshi temple." },
        { q: "Craftsmen's associations were called:", options: ["Guilds", "Iqtas", "Mansabs", "Panchayats"], answer: 0, explain: "Guilds set rules for work and prices." },
        { q: "Surat was an important:", options: ["Hill station", "Temple town", "Fort only", "Port"], answer: 3, explain: "Surat was a major west-coast port." },
        { q: "The Banjaras were mainly:", options: ["Soldiers", "Travelling traders", "Priests", "Poets"], answer: 1, explain: "They carried grain and salt in large bands." }
      ]
    },
    {
      id: "tribes-nomads-settled",
      title: "Tribes, Nomads and Settled Communities",
      section: "History",
      summary: "Tribal societies, nomadic pastoralists and how they related to settled rule in medieval India.",
      notes: [
        {
          heading: "Tribes",
          points: [
            "Many tribal groups lived in forests, hills and dry regions. They followed their own customs and were often organised by clans.",
            "Tribes such as the Gonds, Bhils and Santhals lived in different parts of India. The Gonds of central India lived in forested areas and formed kingdoms such as Garha Katanga.",
            "Most tribes lived by hunting, gathering, herding and shifting cultivation, and did not pay regular taxes to the state."
          ]
        },
        {
          heading: "Nomads and pastoralists",
          points: [
            "**Nomads** moved from place to place with their animals, searching for pastures.",
            "Banjaras were the best-known trader-nomads, carrying grain across regions.",
            "Pastoral groups gave animals, milk, wool and transport to settled villages in exchange for grain and cloth."
          ]
        },
        {
          heading: "Change over time",
          points: [
            "Society was divided into castes, with unequal rights. As states grew, tribal groups were drawn into the wider society and some became settled farmers.",
            "Some tribal chiefs became rulers of kingdoms; others lost land to powerful neighbouring kingdoms."
          ]
        }
      ],
      formulas: [
        "Gonds: central India; Garha Katanga kingdom",
        "Banjaras: nomadic grain traders"
      ],
      terms: [
        { term: "Tribe", meaning: "A community with its own customs, often living in forests or hills, linked by common kinship." },
        { term: "Nomad", meaning: "A person who moves from place to place instead of settling in one place." },
        { term: "Shifting cultivation", meaning: "Farming a patch of land for some years and then moving to a new patch." },
        { term: "Pastoralist", meaning: "A person who keeps herds of animals as the main livelihood." }
      ],
      qa: [
        { q: "Who were the Banjaras?", a: "The Banjaras were nomadic traders who moved in groups with their bullocks, carrying grain and other goods to markets." },
        { q: "How did tribal people earn their living?", a: "By hunting, gathering forest produce, herding animals and shifting cultivation." }
      ],
      quiz: [
        { q: "People who move from place to place with their animals are:", options: ["Priests", "Nomads", "Mansabdars", "Zamindars"], answer: 1, explain: "Nomads do not live in one fixed place." },
        { q: "The Gonds lived mainly in:", options: ["Bengal", "Punjab", "Central India", "Kerala"], answer: 2, explain: "Gondwana in central India was their land." },
        { q: "The famous trader-nomads were the:", options: ["Banjaras", "Rajputs", "Cholas", "Mughals"], answer: 0, explain: "Banjaras moved grain in large bands." },
        { q: "Shifting cultivation means:", options: ["Farming on one plot for ever", "Moving between markets", "Moving fields every few years", "Building canals"], answer: 2, explain: "Land is farmed for a time and then left to recover." },
        { q: "Pastoralists mainly depend on:", options: ["Factories", "Animal herds", "Printing", "Ships"], answer: 1, explain: "They earn from animals and their products." }
      ]
    },
    {
      id: "religious-developments",
      title: "Religious Developments",
      section: "History",
      summary: "The Bhakti movement, the Sufi tradition and the teachings of Guru Nanak Dev Ji.",
      notes: [
        {
          heading: "The Bhakti movement",
          points: [
            "The Bhakti movement taught loving devotion to one God, and it did not value caste or rituals.",
            "**Kabir** and **Ravidas** taught that all humans are equal; **Mirabai** was a devotee of Krishna; **Tulsidas** wrote the Ramcharitmanas; **Chaitanya** spread Krishna devotion in Bengal.",
            "In the south, the Nayanars (devotees of Shiva) and Alvars (devotees of Vishnu) composed devotional songs in Tamil.",
            "Saints sang in the languages of ordinary people so everyone could understand."
          ]
        },
        {
          heading: "The Sufi tradition",
          points: [
            "**Sufis** were Muslim mystics who stressed love of God, kindness to all and simple living.",
            "Khwaja Moinuddin Chishti (Ajmer), Nizamuddin Auliya (Delhi) and Baba Farid (Punjab) were famous Sufi saints.",
            "People of many faiths visited their dargahs. Sufi saints used local languages and music such as qawwali."
          ]
        },
        {
          heading: "Guru Nanak Dev Ji",
          points: [
            "Guru Nanak Dev Ji (born 1469 at Talwandi, now Nankana Sahib) was the founder of Sikhism and the first of the ten Sikh Gurus.",
            "He taught that there is only **One God** (Ik Onkar), and stressed honest work (**kirat karni**), sharing with others (**vand chakko**) and remembering God (**naam japna**).",
            "He rejected caste divisions and rituals, supported equality of all people and respect for women, and made long journeys (udasis) to spread his message.",
            "He settled at Kartarpur, where he started the community kitchen (**langar**). His hymns are included in the Guru Granth Sahib."
          ]
        }
      ],
      formulas: [
        "Guru Nanak Dev Ji: born 1469; key ideas Ik Onkar, kirat karni, vand chakko, naam japna",
        "Bhakti saints: Kabir, Ravidas, Mirabai, Tulsidas, Chaitanya",
        "Sufi saints: Moinuddin Chishti, Nizamuddin Auliya, Baba Farid"
      ],
      terms: [
        { term: "Bhakti", meaning: "Loving devotion to God." },
        { term: "Sufi", meaning: "A Muslim mystic who seeks union with God through love and simple living." },
        { term: "Langar", meaning: "The free community kitchen where everyone eats together." },
        { term: "Ik Onkar", meaning: "'There is One God', the opening of the Guru Granth Sahib." }
      ],
      qa: [
        { q: "What were the main teachings of Guru Nanak Dev Ji?", a: "He taught belief in one God, equality of all people, honest earning (kirat karni), sharing (vand chakko) and remembering God (naam japna)." },
        { q: "How did the Bhakti saints spread their message?", a: "They sang devotional songs in the local languages of ordinary people and rejected caste distinctions and empty rituals." }
      ],
      quiz: [
        { q: "The first Sikh Guru was:", options: ["Guru Angad Dev Ji", "Guru Nanak Dev Ji", "Guru Arjan Dev Ji", "Guru Gobind Singh Ji"], answer: 1, explain: "Guru Nanak Dev Ji founded Sikhism." },
        { q: "Guru Nanak Dev Ji was born in:", options: ["1469", "1526", "1206", "1699"], answer: 0, explain: "The year of his birth is 1469." },
        { q: "Which saint is associated with Ajmer?", options: ["Baba Farid", "Kabir", "Khwaja Moinuddin Chishti", "Tulsidas"], answer: 2, explain: "His dargah is at Ajmer." },
        { q: "Mirabai was a devotee of:", options: ["Shiva", "Rama", "Buddha", "Krishna"], answer: 3, explain: "Her bhajans are in praise of Krishna." },
        { q: "Langar teaches:", options: ["Caste rank", "Equality and sharing", "Trade", "War"], answer: 1, explain: "Everyone sits together and eats the same food." }
      ]
    },
    {
      id: "regional-cultures",
      title: "Development of Regional Cultures",
      section: "History",
      summary: "How languages, literature, music, dance, painting and food developed in different regions of medieval India.",
      notes: [
        {
          heading: "Regional languages and literature",
          points: [
            "Regional languages such as Punjabi, Bengali, Marathi, Gujarati, Tamil and Telugu developed into forms of literature.",
            "Bhakti and Sufi saints composed poems in the local languages, for example Baba Farid and Guru Nanak Dev Ji in Punjabi, and Kabir in a form of Hindi.",
            "Urdu grew out of the mixing of languages in the camps and cities of north India."
          ]
        },
        {
          heading: "Music, dance and painting",
          points: [
            "Indian classical music developed in two main streams, Hindustani (north) and Carnatic (south).",
            "Classical dances such as Kathak (north) and Bharatanatyam (south) developed; Kathak grew under court patronage.",
            "Mughal and Rajput painting flourished. Mughal miniatures show court scenes and nature; Pahari paintings developed in the hill states."
          ]
        },
        {
          heading: "Food, dress and customs",
          points: [
            "Foods mixed local and new styles; the Mughals' kitchens brought biryani and kebabs to wide notice.",
            "Dress, festivals and customs differed from region to region, creating a rich culture.",
            "Fairs and festivals brought different communities together."
          ]
        }
      ],
      formulas: [
        "Music: Hindustani (north), Carnatic (south)",
        "Dances: Kathak (north), Bharatanatyam (south)"
      ],
      terms: [
        { term: "Miniature painting", meaning: "A small, finely detailed painting, often made for books or royal courts." },
        { term: "Hindustani music", meaning: "The classical music tradition of north India." },
        { term: "Carnatic music", meaning: "The classical music tradition of south India." },
        { term: "Patronage", meaning: "Support given to artists by rulers or rich people." }
      ],
      qa: [
        { q: "Why were regional languages important in medieval times?", a: "Saints and poets used them to reach common people, so literature grew in languages such as Punjabi, Bengali and Tamil." },
        { q: "Name two classical dances and where they developed.", a: "Kathak developed in north India and Bharatanatyam in south India." }
      ],
      quiz: [
        { q: "Carnatic music belongs to:", options: ["North India", "South India", "Nepal", "Burma"], answer: 1, explain: "Carnatic is the southern tradition." },
        { q: "Kathak is a dance of:", options: ["South India", "Kerala only", "North India", "Assam only"], answer: 2, explain: "It grew in north Indian courts and temples." },
        { q: "Mughal miniatures are:", options: ["Small detailed paintings", "Large statues", "Temples", "Coins"], answer: 0, explain: "Miniatures are fine, small paintings." },
        { q: "Baba Farid wrote in:", options: ["English", "Latin", "Chinese", "Punjabi"], answer: 3, explain: "His verses are among the earliest in Punjabi." },
        { q: "Hindustani music is the tradition of the:", options: ["South", "North", "West coast only", "Far east only"], answer: 1, explain: "Hindustani music is the classical style of north India." }
      ]
    },
    {
      id: "india-18th-century",
      title: "India in the 18th Century",
      section: "History",
      summary: "The decline of the Mughals and the rise of new powers: Marathas, Sikhs, Nawabs, and the arrival of the East India Company.",
      notes: [
        {
          heading: "Fall of Mughal power",
          points: [
            "After Aurangzeb's death in 1707, Mughal emperors were weak and nobles became powerful.",
            "Nadir Shah of Persia attacked Delhi in 1739 and carried away much wealth including the Peacock Throne.",
            "Regional states broke away, such as Bengal, Awadh and Hyderabad, ruled by nawabs and nizams who were almost independent."
          ]
        },
        {
          heading: "New powers",
          points: [
            "The **Marathas**, under the Peshwas, grew powerful in the 18th century. Their expansion was checked at the Third Battle of Panipat in 1761 by Ahmad Shah Abdali.",
            "The **Sikhs** organised themselves into groups called misls after Banda Singh Bahadur's earlier struggle. Later **Maharaja Ranjit Singh** united them and captured Lahore in 1799.",
            "The Rajputs and the Jats also gained strength in their areas."
          ]
        },
        {
          heading: "Arrival of the East India Company",
          points: [
            "European trading companies came to India for trade, including the Portuguese, Dutch, British and French.",
            "In 1757 the English East India Company defeated the Nawab of Bengal, Siraj-ud-Daulah, in the Battle of Plassey, and began to gain political power.",
            "The Battle of Buxar (1764) strengthened the Company in eastern India."
          ]
        }
      ],
      formulas: [
        "Mughal decline: after 1707; Nadir Shah's raid: 1739",
        "Battle of Plassey: 1757; Third Battle of Panipat: 1761",
        "Ranjit Singh captured Lahore: 1799"
      ],
      terms: [
        { term: "Nawab", meaning: "A provincial ruler who governed under the Mughals and later became almost independent." },
        { term: "Peshwa", meaning: "The chief minister of the Maratha kings, who became the real ruler." },
        { term: "Misl", meaning: "One of the Sikh fighting groups of the 18th century." },
        { term: "East India Company", meaning: "A British trading company that grew into a ruling power in India." }
      ],
      qa: [
        { q: "Why did the Mughal Empire weaken after 1707?", a: "Weak emperors, quarrels among nobles, heavy wars, Nadir Shah's invasion and the rise of independent regional rulers all weakened it." },
        { q: "What was the importance of the Battle of Plassey?", a: "In 1757 the East India Company defeated Siraj-ud-Daulah of Bengal, which started its rise as a political power in India." }
      ],
      quiz: [
        { q: "The Battle of Plassey was fought in:", options: ["1526", "1757", "1761", "1857"], answer: 1, explain: "The Company won in 1757." },
        { q: "Nadir Shah attacked Delhi in:", options: ["1739", "1398", "1556", "1799"], answer: 0, explain: "His invasion took place in 1739." },
        { q: "Maharaja Ranjit Singh captured Lahore in:", options: ["1707", "1757", "1799", "1849"], answer: 2, explain: "He took Lahore in 1799." },
        { q: "The Maratha power was checked at:", options: ["Plassey", "Tarain", "Haldighati", "Third Battle of Panipat"], answer: 3, explain: "They lost to Ahmad Shah Abdali in 1761." },
        { q: "Siraj-ud-Daulah was the Nawab of:", options: ["Awadh", "Hyderabad", "Bengal", "Punjab"], answer: 2, explain: "He lost the Battle of Plassey." }
      ]
    },
    {
      id: "democracy-equality",
      title: "Democracy and Equality",
      section: "Civics",
      summary: "What democracy means, why equality matters, and how equality is protected in India through universal adult franchise.",
      notes: [
        {
          heading: "Democracy",
          points: [
            "In a democracy the people choose their rulers by voting in elections.",
            "India is the world's largest democracy. Every citizen of 18 years and above has the right to vote, whatever caste, religion, gender or wealth. This is **universal adult franchise**.",
            "Each adult has one vote and every vote has equal value."
          ]
        },
        {
          heading: "Equality",
          points: [
            "Equality means that all people are treated as equals and have the same rights and respect.",
            "The Indian Constitution gives equality before the law and prohibits discrimination on grounds of religion, caste, sex, or place of birth.",
            "Untouchability is abolished and its practice is a punishable offence."
          ]
        },
        {
          heading: "Inequality that remains",
          points: [
            "In practice, inequality still exists because of poverty, caste and gender. Some people are denied dignity and opportunities.",
            "Laws, schemes such as free education and reservations for weaker sections, and social awareness work to reduce inequality.",
            "Everyone can help by treating people with respect and by being fair."
          ]
        }
      ],
      formulas: [
        "Voting age in India: 18 years",
        "One person, one vote, one value"
      ],
      terms: [
        { term: "Democracy", meaning: "A system of government in which people choose their rulers." },
        { term: "Equality", meaning: "Treating all people as having the same worth and rights." },
        { term: "Universal adult franchise", meaning: "The right of every adult citizen to vote." },
        { term: "Discrimination", meaning: "Treating people unfairly because of caste, religion, gender or similar reasons." }
      ],
      qa: [
        { q: "What is universal adult franchise?", a: "It means that all adult citizens, aged 18 and above, have the right to vote without any distinction of caste, religion, gender or wealth." },
        { q: "Why is equality important in a democracy?", a: "Without equality, some people would have more power and others would not be heard. Equality gives everyone the same rights and dignity." }
      ],
      quiz: [
        { q: "The minimum voting age in India is:", options: ["16", "18", "21", "25"], answer: 1, explain: "Every citizen of 18 or over can vote." },
        { q: "In a democracy, rulers are chosen by:", options: ["The people", "Inheritance", "Force", "Lottery"], answer: 0, explain: "Citizens elect their representatives." },
        { q: "Which practice has been abolished by the Constitution?", options: ["Voting", "Education", "Untouchability", "Marriage"], answer: 2, explain: "Untouchability is banned." },
        { q: "One person, one vote means:", options: ["Rich get more votes", "Men get more votes", "Everyone votes twice", "Every vote counts equally"], answer: 3, explain: "Each adult has an equal vote." },
        { q: "Discrimination means:", options: ["Fair treatment", "Unfair treatment of some people", "Voting", "Law-making"], answer: 1, explain: "It is treating people unequally without a fair reason." }
      ]
    },
    {
      id: "democracy-representation",
      title: "Democracy: Institutional Representation",
      section: "Civics",
      summary: "How people are represented through elected bodies at the local, state and national levels, and how elections work.",
      notes: [
        {
          heading: "Representation",
          points: [
            "Since millions of people cannot make every decision themselves, they elect **representatives** to speak and decide for them. This is representative democracy.",
            "The elected bodies are the Gram Panchayat and municipal bodies (local), the Vidhan Sabha (state) and the Lok Sabha (national).",
            "Representatives are responsible to the people who elect them."
          ]
        },
        {
          heading: "Elections",
          points: [
            "An area is divided into **constituencies**; each elects one representative.",
            "Candidates are often put up by political parties. Voters cast a secret ballot, now through electronic voting machines (EVMs).",
            "The Election Commission of India conducts free and fair elections.",
            "The party or group with the most elected members forms the government, and the others form the opposition."
          ]
        },
        {
          heading: "Duties of citizens",
          points: [
            "Every eligible citizen should vote carefully, without fear or greed.",
            "People can ask questions of their representatives, take part in discussions and use their rights peacefully."
          ]
        }
      ],
      formulas: [
        "Local: Panchayat / municipality; State: Vidhan Sabha; National: Lok Sabha",
        "Elections are conducted by the Election Commission of India"
      ],
      terms: [
        { term: "Representative", meaning: "A person elected by the people to speak and decide on their behalf." },
        { term: "Constituency", meaning: "An area whose voters elect one representative." },
        { term: "Opposition", meaning: "Elected members who are not in the ruling party and question the government." },
        { term: "EVM", meaning: "Electronic Voting Machine used to cast votes." }
      ],
      qa: [
        { q: "Why do we need representatives?", a: "Because in a large country everyone cannot take part in every decision, so the people elect representatives to decide for them." },
        { q: "What is the role of the Election Commission?", a: "It organises and supervises elections so that they are free and fair." }
      ],
      quiz: [
        { q: "An area that elects one representative is a:", options: ["Province", "Village", "Constituency", "District only"], answer: 2, explain: "Each constituency chooses one member." },
        { q: "Elections are conducted by the:", options: ["Supreme Court", "Election Commission", "President alone", "Police"], answer: 1, explain: "The Election Commission of India is in charge." },
        { q: "Votes are cast through:", options: ["Secret ballot", "Shouting", "Raising hands", "Letters"], answer: 0, explain: "The ballot is secret so people can vote freely." },
        { q: "The national lower house is the:", options: ["Vidhan Sabha", "Panchayat", "Rajya Sabha", "Lok Sabha"], answer: 3, explain: "Members of the Lok Sabha are elected directly." },
        { q: "Members not in the ruling party are called the:", options: ["Governor", "Opposition", "Judges", "Voters"], answer: 1, explain: "The opposition questions the government." }
      ]
    },
    {
      id: "state-government",
      title: "State Government",
      section: "Civics",
      summary: "How a state is governed, with the Punjab Vidhan Sabha, MLAs, the Chief Minister and the Governor as the example.",
      notes: [
        {
          heading: "Structure of state government",
          points: [
            "India is a union of states. Each state has its own government with three parts: the **Legislature** (makes laws), the **Executive** (carries them out) and the **Judiciary**.",
            "In Punjab the legislature is a single house, the **Vidhan Sabha**, with 117 elected members.",
            "Each member is called an **MLA** (Member of the Legislative Assembly) and is elected for five years from a constituency."
          ]
        },
        {
          heading: "Chief Minister and Council of Ministers",
          points: [
            "After elections, the leader of the party (or group) with a majority in the Vidhan Sabha becomes the **Chief Minister**.",
            "The Chief Minister chooses ministers who head departments such as health, education and agriculture.",
            "The Council of Ministers is responsible to the Vidhan Sabha."
          ]
        },
        {
          heading: "The Governor",
          points: [
            "The **Governor** is the head of the state, appointed by the President of India. He represents the Centre.",
            "The Governor appoints the Chief Minister and gives assent to bills passed by the Vidhan Sabha.",
            "Real day-to-day power lies with the Chief Minister and ministers."
          ]
        },
        {
          heading: "Work of the state government",
          points: [
            "States make laws on subjects like police, public health, agriculture and local government.",
            "A state's capital is the seat of government: Punjab and Haryana share Chandigarh as capital.",
            "The Punjab Vidhan Sabha meets in Chandigarh to debate laws and the budget."
          ]
        }
      ],
      formulas: [
        "Punjab Vidhan Sabha: 117 MLAs, term of 5 years",
        "Head of the state: Governor; head of the government: Chief Minister"
      ],
      terms: [
        { term: "MLA", meaning: "Member of the Legislative Assembly, elected from a constituency of a state." },
        { term: "Chief Minister", meaning: "The head of the government of a state." },
        { term: "Governor", meaning: "The head of the state, appointed by the President." },
        { term: "Vidhan Sabha", meaning: "The state legislative assembly." }
      ],
      qa: [
        { q: "Who becomes the Chief Minister of a state?", a: "The leader of the party or group that has a majority in the Vidhan Sabha is appointed Chief Minister by the Governor." },
        { q: "What is the role of an MLA?", a: "An MLA represents the people of his or her constituency in the Vidhan Sabha, helps to make laws and raises local problems." }
      ],
      quiz: [
        { q: "The head of the state government is the:", options: ["Governor", "Chief Minister", "Speaker", "President"], answer: 1, explain: "The Chief Minister heads the government." },
        { q: "The Governor is appointed by the:", options: ["Chief Minister", "Prime Minister", "President", "Voters"], answer: 2, explain: "The President appoints Governors." },
        { q: "The Punjab Vidhan Sabha has how many seats?", options: ["117", "100", "150", "13"], answer: 0, explain: "Punjab has 117 assembly seats." },
        { q: "MLAs are elected for:", options: ["2 years", "3 years", "10 years", "5 years"], answer: 3, explain: "The term of a Vidhan Sabha is five years." },
        { q: "A Vidhan Sabha makes:", options: ["Roads only", "Laws for the state", "Weather", "Currency"], answer: 1, explain: "It is the state's law-making body." }
      ]
    },
    {
      id: "mass-communication-democracy",
      title: "Mass Communication and Democracy",
      section: "Civics",
      summary: "The role of newspapers, radio, television and the internet in a democracy, and the need for responsible use.",
      notes: [
        {
          heading: "Mass media",
          points: [
            "Mass media are means of communication that reach a large number of people: newspapers, magazines, radio, television and the internet.",
            "They give news, education and entertainment, and also carry advertisements.",
            "The press is sometimes called the 'fourth pillar' of democracy."
          ]
        },
        {
          heading: "Role in democracy",
          points: [
            "Media inform citizens about government decisions and what is happening in the country, so people can vote wisely.",
            "They bring problems of people to the notice of the government and act as a watchdog by exposing wrongdoing.",
            "They allow people to share ideas and opinions."
          ]
        },
        {
          heading: "Responsible use",
          points: [
            "Media should be free but must report facts fairly. False news and rumours can cause harm.",
            "Some media are owned by businesses or political groups, so people should compare several sources.",
            "Social media should be used carefully, without spreading rumours or hate."
          ]
        }
      ],
      formulas: [
        "Mass media: newspapers, radio, TV, internet",
        "Check facts before sharing news"
      ],
      terms: [
        { term: "Mass media", meaning: "Means of communication that reach large numbers of people." },
        { term: "Press", meaning: "Newspapers and magazines, and the people who work for them." },
        { term: "Advertisement", meaning: "A message that promotes a product or service." },
        { term: "Rumour", meaning: "An unverified story passed from person to person." }
      ],
      qa: [
        { q: "How do mass media help democracy?", a: "They inform people, report on government work, raise public problems and let people express their views, so citizens can take informed decisions." },
        { q: "Why must we be careful about news we receive?", a: "Some news may be false, one-sided or meant to sell something. We should check facts from several reliable sources." }
      ],
      quiz: [
        { q: "Which of these is mass media?", options: ["Television", "Handshake", "Whisper", "Diary"], answer: 0, explain: "Television reaches large audiences." },
        { q: "A message that promotes a product is an:", options: ["Editorial", "News report", "Advertisement", "Law"], answer: 2, explain: "Advertisements are meant to sell." },
        { q: "The media act as a watchdog by:", options: ["Making laws", "Exposing wrongdoing", "Collecting taxes", "Judging cases"], answer: 1, explain: "Reporting on problems keeps power in check." },
        { q: "Before sharing a message we should:", options: ["Forward at once", "Add exaggeration", "Delete the sender", "Check if it is true"], answer: 3, explain: "False news spreads easily." },
        { q: "The press is called the ___ pillar of democracy.", options: ["First", "Third", "Fourth", "Second"], answer: 2, explain: "After the legislature, executive and judiciary." }
      ]
    }
  ]
});
