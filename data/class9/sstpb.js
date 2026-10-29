// PSEB Class 9 Social Science: Geography, Economics, History (incl. Sikh history) and Civics.
// Format: see CONTENT_GUIDE.md. `formulas` holds key dates and facts.
StudyData.add(9, "sstpb", {
  syllabus: {
    board: "PSEB",
    match: "textbook",
    books: ["Social Science (PSEB, Class 9)"],
    note: "Follows the PSEB 2026–27 syllabus; written from the syllabus topics, not the PSEB book's own text.",
    reviewed: false
  },
  chapters: [
    {
      id: "geo-india-size-location",
      title: "India: Size and Location",
      section: "Geography",
      summary: "Where India lies on the globe, how large it is, its neighbours, and why its location makes it important for trade and culture.",
      notes: [
        {
          heading: "Location and extent",
          points: [
            "India lies entirely in the **Northern and Eastern Hemispheres**, in South Asia.",
            "Mainland latitudes run from about 8°4′N to 37°6′N and longitudes from about 68°7′E to 97°25′E.",
            "The **Tropic of Cancer (23½°N)** passes through the middle of the country, dividing it into a northern subtropical and a southern tropical half.",
            "North–south extent and east–west extent are both roughly 3,000 km, yet the time difference between Gujarat and Arunachal Pradesh is about two hours."
          ]
        },
        {
          heading: "Size and Indian Standard Time",
          points: [
            "India's area is about **3.28 million sq km**, around 2.4% of the world's land area; it is the seventh largest country.",
            "The **Standard Meridian** is 82°30′E, passing near Mirzapur (Uttar Pradesh). Time along it is **Indian Standard Time (IST)**, 5 hours 30 minutes ahead of GMT.",
            "One degree of longitude equals 4 minutes of time, which explains why the east sees sunrise earlier than the west."
          ]
        },
        {
          heading: "Neighbours and importance",
          points: [
            "Land neighbours include Pakistan, Afghanistan, China, Nepal, Bhutan, Myanmar and Bangladesh; Sri Lanka and the Maldives are island neighbours.",
            "The **Indian Ocean** and the Suez Canal route link India with Europe, Africa and East Asia, which gave it a central place in trade for centuries.",
            "The Deccan Peninsula extends into the Indian Ocean and gives India a long coastline of about 7,500 km including islands.",
            "Punjab lies in the north-west, bordering Pakistan, and has historically been a gateway for travellers and traders."
          ]
        }
      ],
      formulas: [
        "Area ≈ 3.28 million sq km (7th largest in the world)",
        "Standard Meridian: 82°30′E; IST = GMT + 5:30",
        "Tropic of Cancer: 23½°N",
        "1° of longitude = 4 minutes"
      ],
      terms: [
        { term: "Standard Meridian", meaning: "The longitude chosen to set a country's official time." },
        { term: "Peninsula", meaning: "Land surrounded by water on three sides." },
        { term: "Tropic of Cancer", meaning: "The parallel at 23½°N that divides India into two almost equal halves." },
        { term: "Strait", meaning: "A narrow water passage joining two larger water bodies." }
      ],
      qa: [
        { q: "Why does India have a Standard Meridian?", a: "India spans nearly 30° of longitude, so local times differ by about two hours. One Standard Meridian (82°30′E) is used so that the whole country follows a single time and timetables stay uniform." },
        { q: "Why is India's location important?", a: "It lies in the middle of the Indian Ocean routes between East and West. This helped trade and the exchange of ideas, and its long coastline supports ports and fishing." }
      ],
      quiz: [
        { q: "The Standard Meridian of India is:", options: ["68°7′E", "82°30′E", "97°25′E", "23½°E"], answer: 1, explain: "IST is based on 82°30′E, which passes near Mirzapur." },
        { q: "The Tropic of Cancer divides India into:", options: ["Two almost equal parts", "A large north and a tiny south", "Three equal parts", "It does not cross India"], answer: 0, explain: "It passes through the middle of the country at 23½°N." },
        { q: "IST is ahead of GMT by:", options: ["4 h 30 min", "5 hours", "5 h 30 min", "6 hours"], answer: 2, explain: "India is 5 hours 30 minutes ahead of Greenwich Mean Time." },
        { q: "India's rank in the world by area is:", options: ["Second", "Fifth", "Seventh", "Tenth"], answer: 2, explain: "With about 3.28 million sq km, India is seventh." },
        { q: "Which pair are island neighbours of India?", options: ["Nepal and Bhutan", "Sri Lanka and Maldives", "Myanmar and Bangladesh", "Pakistan and Afghanistan"], answer: 1, explain: "Sri Lanka and the Maldives lie in the Indian Ocean." },
        { q: "One degree of longitude corresponds to a time difference of:", options: ["1 minute", "2 minutes", "4 minutes", "15 minutes"], answer: 2, explain: "The Earth turns 360° in 24 hours, so 1° takes 4 minutes." }
      ]
    },
    {
      id: "geo-physical-features",
      title: "Physical Features of India",
      section: "Geography",
      summary: "The major physical divisions of India, from the Himalayas to the islands, with the physical divisions of Punjab.",
      notes: [
        {
          heading: "Major physiographic divisions",
          points: [
            "India has six divisions: the **Northern Mountains** (Himalayas), the **Northern Plains**, the **Peninsular Plateau**, the **Indian Desert**, the **Coastal Plains** and the **Islands**.",
            "The Himalayas are young fold mountains, running about 2,400 km, with three parallel ranges: **Himadri** (Greater), **Himachal** (Lesser) and **Shiwaliks**.",
            "Mount Everest lies in Nepal; Kanchenjunga (8,598 m) is the highest peak wholly in India.",
            "The Northern Plains are formed by alluvium deposited by the Indus, Ganga and Brahmaputra and are very fertile and densely populated."
          ]
        },
        {
          heading: "Plateau, desert, coasts and islands",
          points: [
            "The **Peninsular Plateau** is among the oldest and most stable landmasses, made of ancient crystalline rocks. It is divided into the Central Highlands and the Deccan Plateau.",
            "The Western Ghats are higher and continuous; the Eastern Ghats are lower and broken by rivers.",
            "The **Thar Desert** lies west of the Aravalli Range; it has very little rainfall.",
            "The Western Coastal Plain lies between the Western Ghats and the Arabian Sea; the Eastern Coastal Plain borders the Bay of Bengal and has broad deltas.",
            "The Lakshadweep islands are coral in origin; the Andaman and Nicobar Islands lie in the Bay of Bengal."
          ]
        },
        {
          heading: "Physical divisions of Punjab",
          points: [
            "Punjab lies mostly in the Northern Plains; its soils are alluvial and highly fertile.",
            "The **Shiwalik foothills** in the north-east (Hoshiarpur, Rupnagar area) have the Kandi region, which is a belt of undulating land with seasonal streams (chos).",
            "The **Bet** lands are the low, flood-prone areas along the river banks, such as those of the Sutlej and Beas.",
            "The vast central plain is a flat alluvial region, while the south-west is semi-arid with some sand dunes.",
            "Punjab's cultural regions are commonly named Majha, Doaba (the Bist Doab, between the Beas and Sutlej) and Malwa; a Doab is the land between two rivers."
          ]
        }
      ],
      formulas: [
        "Himalayan ranges north to south: Himadri, Himachal, Shiwaliks",
        "Kanchenjunga: highest peak wholly within India (8,598 m)",
        "Punjab regions: Majha, Doaba, Malwa"
      ],
      terms: [
        { term: "Doab", meaning: "Land lying between two rivers." },
        { term: "Alluvium", meaning: "Fertile soil carried and deposited by rivers." },
        { term: "Ghats", meaning: "Hill ranges along the western and eastern edges of the Peninsular Plateau." },
        { term: "Kandi", meaning: "The sloping foothill area of Punjab's north-east, cut by seasonal streams." }
      ],
      qa: [
        { q: "Why are the Northern Plains densely populated?", a: "They are made of fertile alluvium, are flat and well watered by rivers, so farming, roads, towns and industries develop easily." },
        { q: "Name the three parallel ranges of the Himalayas.", a: "From north to south: Himadri (Greater Himalayas), Himachal (Lesser Himalayas) and the Shiwaliks (outer Himalayas)." }
      ],
      quiz: [
        { q: "The southernmost and youngest Himalayan range is the:", options: ["Himadri", "Himachal", "Shiwaliks", "Karakoram"], answer: 2, explain: "The Shiwaliks are the outermost, lowest range." },
        { q: "The Peninsular Plateau is mainly made of:", options: ["Young fold rocks", "Ancient crystalline rocks", "Alluvium", "Coral"], answer: 1, explain: "It is among the oldest landmasses on Earth." },
        { q: "Which islands are coral in origin?", options: ["Andaman", "Nicobar", "Lakshadweep", "Sagar"], answer: 2, explain: "Lakshadweep is made of coral atolls." },
        { q: "The highest peak wholly in India is:", options: ["Mount Everest", "Kanchenjunga", "Nanda Devi", "Anamudi"], answer: 1, explain: "Kanchenjunga is 8,598 m; Everest lies in Nepal." },
        { q: "The low, flood-prone river bank land in Punjab is called:", options: ["Kandi", "Bet", "Bangar", "Doab"], answer: 1, explain: "Bet lands are the riverine lowlands." },
        { q: "The Thar Desert lies to the west of the:", options: ["Western Ghats", "Eastern Ghats", "Aravalli Range", "Vindhya Range"], answer: 2, explain: "The Aravallis separate the desert from the plains to the east." }
      ]
    },
    {
      id: "geo-drainage",
      title: "Drainage",
      section: "Geography",
      summary: "The river systems of India and the rivers and canal network of Punjab.",
      notes: [
        {
          heading: "Drainage systems",
          points: [
            "A **drainage system** is the pattern formed by streams in an area; a **drainage basin** is the area drained by one river system; a **water divide** is the high ground separating basins.",
            "Himalayan rivers (Indus, Ganga, Brahmaputra) are perennial, fed by snow melt and rain, and have large basins.",
            "Peninsular rivers are mostly seasonal and fed by rain. Westward ones (Narmada, Tapi) form estuaries; eastward ones (Godavari, Krishna, Kaveri, Mahanadi) form deltas.",
            "The Ganga is formed at Devprayag where the Bhagirathi and Alaknanda meet, and enters the Bay of Bengal in the Sundarbans delta."
          ]
        },
        {
          heading: "Rivers of Punjab",
          points: [
            "Punjab means the land of five rivers; after 1947 the Sutlej, Beas and Ravi flow in Indian Punjab, while the Jhelum and Chenab are in Pakistan.",
            "The **Sutlej** rises near Mansarovar in Tibet and enters Punjab at Ropar; the **Beas** rises near Rohtang Pass and joins the Sutlej near Harike.",
            "The **Ravi** forms part of the border with Pakistan in Gurdaspur. The **Ghaggar** is a seasonal river in south-east Punjab.",
            "Rivers of Punjab belong to the Indus system, shared under the Indus Waters Treaty (1960) between India and Pakistan."
          ]
        },
        {
          heading: "Canals and irrigation in Punjab",
          points: [
            "Canals irrigate most of Punjab's cultivated land; major canals include the Sirhind Canal, the Bist Doab Canal and the Upper Bari Doab Canal.",
            "The Bhakra Dam on the Sutlej (Himachal Pradesh) and the Pong Dam on the Beas supply water and electricity.",
            "Tube wells also irrigate large areas, but heavy pumping has lowered the groundwater table, so conservation matters."
          ]
        }
      ],
      formulas: [
        "Ganga = Bhagirathi + Alaknanda at Devprayag",
        "Indus Waters Treaty: 1960",
        "Rivers of Indian Punjab: Sutlej, Beas, Ravi"
      ],
      terms: [
        { term: "Drainage basin", meaning: "The area from which a river and its tributaries collect water." },
        { term: "Delta", meaning: "Fan-shaped land formed where a river deposits silt at its mouth." },
        { term: "Tributary", meaning: "A smaller river that flows into a larger one." },
        { term: "Perennial river", meaning: "A river that has water throughout the year." }
      ],
      qa: [
        { q: "Differentiate between Himalayan and Peninsular rivers.", a: "Himalayan rivers are perennial, fed by glaciers and rain, with long courses and large basins. Peninsular rivers depend on rainfall, are mostly seasonal and shorter." },
        { q: "Why is groundwater conservation important in Punjab?", a: "Heavy tube-well use for rice and wheat has lowered the water table. Conservation through efficient irrigation and crop choice keeps water available for the future." }
      ],
      quiz: [
        { q: "The Ganga is formed by the meeting of the Bhagirathi and the:", options: ["Yamuna", "Alaknanda", "Gomti", "Son"], answer: 1, explain: "They meet at Devprayag in Uttarakhand." },
        { q: "Which river forms a delta in the Sundarbans?", options: ["Narmada", "Tapi", "Ganga–Brahmaputra", "Sutlej"], answer: 2, explain: "Their combined delta is the Sundarbans." },
        { q: "Bhakra Dam is built on the river:", options: ["Beas", "Ravi", "Sutlej", "Ghaggar"], answer: 2, explain: "Bhakra is on the Sutlej; Pong is on the Beas." },
        { q: "Which of these rivers flows westward into an estuary?", options: ["Godavari", "Krishna", "Narmada", "Kaveri"], answer: 2, explain: "Narmada and Tapi drain into the Arabian Sea through estuaries." },
        { q: "Which Punjab river is seasonal and flows in the south-east?", options: ["Ravi", "Ghaggar", "Beas", "Sutlej"], answer: 1, explain: "The Ghaggar flows only in the rainy season." },
        { q: "A water divide is:", options: ["A dam site", "High ground separating two drainage basins", "A river mouth", "A canal"], answer: 1, explain: "It separates the catchments of neighbouring river systems." }
      ]
    },
    {
      id: "geo-climate",
      title: "Climate",
      section: "Geography",
      summary: "The monsoon climate of India, its seasons, the factors that shape it, and floods and droughts as a case study of disasters.",
      notes: [
        {
          heading: "Factors and the monsoon",
          points: [
            "India has a **tropical monsoon climate**. Factors include latitude, altitude, distance from the sea, relief and the monsoon winds.",
            "The Himalayas block cold winds from Central Asia and force the moist monsoon winds to give rain.",
            "The south-west monsoon arrives around the first week of June in Kerala and brings most of India's rain; its retreat begins in September.",
            "Rainfall is uneven: the Western Ghats windward side and the North-East are very wet, while Rajasthan's west is dry."
          ]
        },
        {
          heading: "Seasons",
          points: [
            "Four seasons: cold weather (December–February), hot weather (March–May), south-west monsoon (June–September) and retreating monsoon (October–November).",
            "Punjab has very hot summers, a cold winter with fog and a monsoon rainy season; western disturbances bring winter rain useful for wheat.",
            "Loo is a hot, dry summer wind of the northern plains; 'mango showers' help ripen mangoes in the south."
          ]
        },
        {
          heading: "Case study: floods and droughts",
          points: [
            "**Floods** are caused by heavy rain, river overflow and poor drainage. Punjab's rivers, especially the Sutlej, Beas and Ghaggar, have caused floods in Bet and low-lying areas.",
            "**Droughts** occur when rain fails; they harm crops, drinking water and livelihoods, mostly in semi-arid regions.",
            "Measures include early warning, embankments, afforestation, watershed management, rainwater harvesting and relief planning.",
            "Many disasters are natural, but their effects increase with unplanned building and loss of drainage."
          ]
        }
      ],
      formulas: [
        "Seasons: cold weather, hot weather, SW monsoon, retreating monsoon",
        "SW monsoon onset in Kerala: about 1 June",
        "Western disturbances: winter rain in north-west India"
      ],
      terms: [
        { term: "Monsoon", meaning: "Seasonal reversal of winds bringing rain." },
        { term: "Drought", meaning: "A long period of deficient rainfall." },
        { term: "Flood", meaning: "Overflow of water onto normally dry land." },
        { term: "Western disturbance", meaning: "A winter weather system from the Mediterranean region that brings rain to north-west India." }
      ],
      qa: [
        { q: "Why is the monsoon important for India?", a: "Most of India's farming depends on its rain; it fills rivers and reservoirs, and its success or failure affects food, income and the economy." },
        { q: "How can the effects of floods be reduced?", a: "By early warnings, building embankments, keeping drains and river beds clear, planting trees and avoiding construction in flood-prone areas." }
      ],
      quiz: [
        { q: "The south-west monsoon first reaches India's coast at:", options: ["Mumbai", "Kerala", "Chennai", "Kolkata"], answer: 1, explain: "It normally arrives in Kerala around 1 June." },
        { q: "Winter rain in Punjab useful for wheat is brought by:", options: ["Western disturbances", "Loo", "Mango showers", "Cyclone"], answer: 0, explain: "These systems bring winter rain to north-west India." },
        { q: "Which season lasts from October to November?", options: ["Hot weather", "Retreating monsoon", "Cold weather", "Monsoon"], answer: 1, explain: "It follows the withdrawal of the south-west monsoon." },
        { q: "Which relief feature stops cold Central Asian winds?", options: ["Thar Desert", "Himalayas", "Western Ghats", "Deccan"], answer: 1, explain: "The Himalayas act as a barrier." },
        { q: "Lack of rainfall for a long time causes:", options: ["Flood", "Drought", "Landslide", "Tsunami"], answer: 1, explain: "Prolonged deficient rain is a drought." },
        { q: "Loo is a:", options: ["Cold winter wind", "Hot dry summer wind", "Monsoon cloud", "Ocean current"], answer: 1, explain: "It blows over the northern plains in summer." }
      ]
    },
    {
      id: "geo-vegetation-wildlife",
      title: "Natural Vegetation and Wildlife",
      section: "Geography",
      summary: "Types of natural vegetation in India, wildlife, conservation, and the vegetation and wildlife of Punjab.",
      notes: [
        {
          heading: "Types of vegetation",
          points: [
            "Natural vegetation depends on temperature, rainfall, soil and relief.",
            "Main types: tropical evergreen, tropical deciduous (monsoon forests, most widespread), thorn forests, montane forests and mangroves.",
            "Tropical deciduous forests produce teak and sal; thorn forests grow in dry areas; mangroves grow in delta areas such as the Sundarbans.",
            "Forests give timber, fuel and fodder, protect soil, and keep the water and carbon cycles healthy."
          ]
        },
        {
          heading: "Wildlife and its protection",
          points: [
            "India has large biodiversity, including tigers, elephants, lions and rhinoceros.",
            "Conservation tools include national parks, sanctuaries, biosphere reserves and project-based schemes such as **Project Tiger** (1973).",
            "The Gir forest in Gujarat protects the Asiatic lion.",
            "Wildlife is threatened by loss of habitat, poaching and pollution."
          ]
        },
        {
          heading: "Punjab's vegetation and wildlife",
          points: [
            "Most of Punjab was once covered by natural grasses and thorny scrub; today much land is farmed, so forest cover is low.",
            "Common trees include shisham (sheesham), kikar, neem, peepal and eucalyptus; the Shiwalik foothills have more natural forest.",
            "Harike Wetland (a Ramsar site) is an important bird habitat; there are also bird sanctuaries and zoological parks, such as Chhatbir Zoo near Chandigarh.",
            "Blackbuck, nilgai and migratory birds are found in some areas."
          ]
        }
      ],
      formulas: [
        "Project Tiger launched 1973",
        "Most widespread forest: tropical deciduous (monsoon)",
        "Harike Wetland: important bird site in Punjab"
      ],
      terms: [
        { term: "Biodiversity", meaning: "The variety of plants and animals in an area." },
        { term: "Sanctuary", meaning: "A protected area for wild animals." },
        { term: "Mangrove", meaning: "Salt-tolerant forests growing in tidal coastal and delta areas." },
        { term: "Biosphere reserve", meaning: "A large protected area conserving plants, animals and local ways of life." }
      ],
      qa: [
        { q: "Why should forests be conserved?", a: "They give wood and many products, hold soil, regulate rainfall and water flow, provide homes for wildlife and absorb carbon dioxide." },
        { q: "Name two steps to protect wildlife.", a: "Create national parks and sanctuaries, and enforce laws against poaching and illegal trade. Public awareness also helps." }
      ],
      quiz: [
        { q: "Teak and sal are found in:", options: ["Mangroves", "Tropical deciduous forests", "Thorn forests", "Tundra"], answer: 1, explain: "These valuable trees grow in monsoon forests." },
        { q: "Project Tiger began in:", options: ["1947", "1973", "1991", "2005"], answer: 1, explain: "It was launched in 1973." },
        { q: "Mangroves are typical of the:", options: ["Thar Desert", "Sundarbans delta", "Shiwaliks", "Deccan"], answer: 1, explain: "The Sundarbans have large mangrove forests." },
        { q: "The Asiatic lion is protected in the:", options: ["Gir forest", "Corbett", "Kaziranga", "Harike"], answer: 0, explain: "Gir, Gujarat, is its home." },
        { q: "Harike Wetland is mainly valued for:", options: ["Tigers", "Migratory birds", "Teak", "Coral"], answer: 1, explain: "It is a major bird habitat." },
        { q: "Why is forest cover low in Punjab?", options: ["Too much snow", "Land used mostly for farming", "No rain", "Desert climate"], answer: 1, explain: "Fertile plains were cleared for agriculture." }
      ]
    },
    {
      id: "geo-population",
      title: "Population",
      section: "Geography",
      summary: "Size, distribution, growth, composition and quality of India's population, with reference to Punjab.",
      notes: [
        {
          heading: "Size and distribution",
          points: [
            "India is the most populous country in the world today and has about 17% of the world's people on about 2.4% of its land.",
            "**Population density** is persons per sq km. It is high in the Ganga plains and Kerala and low in mountains, deserts and forests.",
            "Census is taken every 10 years; the first complete census after Independence was 1951.",
            "Punjab's density is higher than the national average because of fertile land, irrigation and employment."
          ]
        },
        {
          heading: "Growth and composition",
          points: [
            "Population growth depends on birth rate, death rate and migration; falling death rates with high birth rates caused rapid growth.",
            "**Age composition** groups the population as children (0–14), working age (15–59) and older (60+).",
            "**Sex ratio** is females per 1,000 males; Punjab has had a low sex ratio, though it has been improving through awareness efforts.",
            "Literacy in India has risen steadily; Punjab's literacy rate is above the national figure."
          ]
        },
        {
          heading: "Population as a resource and challenge",
          points: [
            "A large working-age population can be a resource if educated and healthy.",
            "National Population Policy aims at family welfare, better health and education, especially for girls.",
            "Adolescents are an important group needing nutrition, schooling and guidance.",
            "Punjab also experiences in-migration of workers for farming and industry, and out-migration of many youth abroad."
          ]
        }
      ],
      formulas: [
        "Density = Population ÷ Area (persons per sq km)",
        "Sex ratio = females per 1,000 males",
        "Census every 10 years"
      ],
      terms: [
        { term: "Census", meaning: "Official count of people, taken every ten years in India." },
        { term: "Density of population", meaning: "Average number of people per square kilometre." },
        { term: "Sex ratio", meaning: "Number of females per 1,000 males." },
        { term: "Migration", meaning: "Movement of people from one place to another to live." }
      ],
      qa: [
        { q: "What factors affect the distribution of population?", a: "Relief, climate, soil, water, and economic opportunities. Fertile plains with water attract people; mountains and deserts have few." },
        { q: "Why is a falling sex ratio a concern?", a: "It shows discrimination against girls and can harm social balance. Education and awareness help correct it." }
      ],
      quiz: [
        { q: "India's census is conducted every:", options: ["5 years", "10 years", "15 years", "20 years"], answer: 1, explain: "A census is held decade by decade." },
        { q: "Population density is measured as:", options: ["People per hectare of crop", "People per sq km", "Births per 1,000", "Females per 1,000 males"], answer: 1, explain: "It is total population divided by area." },
        { q: "Sex ratio means:", options: ["Males per 1,000 females", "Females per 1,000 males", "Children per family", "Births per year"], answer: 1, explain: "In India it is counted as females per 1,000 males." },
        { q: "Which area usually has low population density?", options: ["Ganga plains", "Mountains and deserts", "River deltas", "Coastal plains"], answer: 1, explain: "Harsh terrain supports fewer people." },
        { q: "The working-age group is commonly taken as:", options: ["0–14", "15–59", "60+", "5–18"], answer: 1, explain: "Ages 15–59 are the main working group." },
        { q: "Rapid population growth in India mainly resulted from:", options: ["Rising death rate", "Falling death rate with high birth rate", "No births", "Emigration only"], answer: 1, explain: "Better health care lowered deaths while births stayed high." }
      ]
    },
    {
      id: "eco-village-palampur",
      title: "The Story of Village Palampur",
      section: "Economics",
      summary: "How production happens in a village: land, labour, capital and enterprise, farming and non-farming activities.",
      notes: [
        {
          heading: "Factors of production",
          points: [
            "Production needs four factors: **land**, **labour**, **physical capital** and **human capital/enterprise**.",
            "Land is fixed, but the same land can grow more through multiple cropping and modern farming methods.",
            "Physical capital includes tools, machines, seeds, fertiliser and money in hand (working capital).",
            "Small farmers often borrow to buy inputs, so they depend on money lenders or large farmers."
          ]
        },
        {
          heading: "Farming methods",
          points: [
            "**Multiple cropping** means growing more than one crop on the same land in a year.",
            "The Green Revolution (HYV seeds, irrigation, fertilisers) increased wheat and rice yields, especially in Punjab, Haryana and western Uttar Pradesh.",
            "Chemical fertiliser and heavy irrigation raise output but can harm soil and lower groundwater.",
            "Most farmers have small plots, so their income is small; some farmers have big farms and surplus."
          ]
        },
        {
          heading: "Non-farm activities",
          points: [
            "Dairy, small-scale manufacturing, shops and transport give extra income in villages.",
            "Only a small share of villagers work outside farming, because capital and markets are limited.",
            "Better roads, electricity and credit help create non-farm jobs."
          ]
        }
      ],
      formulas: [
        "Factors of production: land, labour, physical capital, human capital",
        "Multiple cropping: more than one crop per year on same land"
      ],
      terms: [
        { term: "Multiple cropping", meaning: "Growing more than one crop on the same land in a year." },
        { term: "HYV seeds", meaning: "High-yielding variety seeds that give more output." },
        { term: "Working capital", meaning: "Raw materials and money needed during production." },
        { term: "Fixed capital", meaning: "Tools, machines and buildings used over many years." }
      ],
      qa: [
        { q: "Why do small farmers find it hard to improve their income?", a: "They have little land and little capital, so they borrow at high interest, and surplus is small or none." },
        { q: "What are the benefits and limits of the Green Revolution?", a: "It raised food output through HYV seeds and irrigation, but it used lots of water and chemicals, which lowered groundwater and damaged soil." }
      ],
      quiz: [
        { q: "Which is NOT a factor of production?", options: ["Land", "Labour", "Capital", "Taxes"], answer: 3, explain: "Land, labour, capital and enterprise are the factors." },
        { q: "Growing two crops on one field in a year is:", options: ["Fallowing", "Multiple cropping", "Mixed farming", "Subsistence"], answer: 1, explain: "That is multiple cropping." },
        { q: "HYV stands for:", options: ["High-yielding variety", "Heavy yield value", "Hybrid yearly vegetable", "High yearly volume"], answer: 0, explain: "HYV seeds give higher output." },
        { q: "Tools, machines and buildings are called:", options: ["Working capital", "Fixed capital", "Labour", "Land"], answer: 1, explain: "They last for many years." },
        { q: "The Green Revolution mainly raised the output of:", options: ["Cotton and jute", "Wheat and rice", "Tea", "Fish"], answer: 1, explain: "HYV seeds helped wheat and rice most." },
        { q: "A major drawback of heavy tube-well irrigation is:", options: ["Rising water table", "Falling groundwater level", "Flooding", "More forests"], answer: 1, explain: "Overpumping lowers the water table." }
      ]
    },
    {
      id: "eco-people-as-resource",
      title: "People as Resource",
      section: "Economics",
      summary: "How a population becomes a human resource through education and health, and the types of economic activity and unemployment.",
      notes: [
        {
          heading: "Human capital",
          points: [
            "People become a **human resource** when they are educated, trained and healthy; investment in education and health forms **human capital**.",
            "Educated and healthy workers are more productive and earn more, which raises the country's income.",
            "Countries like Japan invested in people and became rich despite few natural resources.",
            "Education also brings social benefits such as awareness and better citizenship."
          ]
        },
        {
          heading: "Economic activities",
          points: [
            "Economic activities are divided into **primary** (agriculture, mining), **secondary** (manufacturing) and **tertiary/services** (trade, transport, banking, education).",
            "Non-economic activities are done for love or duty, without pay, such as household work for one's family.",
            "Activities are also classified as organised or unorganised depending on regulation and security."
          ]
        },
        {
          heading: "Unemployment",
          points: [
            "Unemployment exists when people willing to work at the going wage cannot find jobs.",
            "**Disguised unemployment** means more workers are on a farm than needed; some could leave without reducing output. It is common in Indian agriculture.",
            "**Seasonal unemployment** occurs when work is available only in some months, as in farming.",
            "Educated unemployment means that some educated youth cannot find suitable jobs. Unemployment wastes resources and increases poverty."
          ]
        }
      ],
      formulas: [
        "Sectors: primary, secondary, tertiary",
        "Human capital = knowledge + skills + health"
      ],
      terms: [
        { term: "Human capital", meaning: "Skills and health of people that make them productive." },
        { term: "Disguised unemployment", meaning: "Having more workers than a job needs, so some add nothing to output." },
        { term: "Seasonal unemployment", meaning: "Unemployment during the months when there is no work." },
        { term: "Tertiary sector", meaning: "Services such as trade, banking and transport." }
      ],
      qa: [
        { q: "How does education help the economy?", a: "It makes workers skilled and productive, helps them earn more and brings new ideas and technology, thus raising national income." },
        { q: "What is disguised unemployment?", a: "It is when extra workers are engaged in a job that needs fewer. Removing some of them would not reduce total output." }
      ],
      quiz: [
        { q: "Farming is a part of the:", options: ["Primary sector", "Secondary sector", "Tertiary sector", "Informal sector only"], answer: 0, explain: "It uses natural resources directly." },
        { q: "Having more workers on a farm than needed is:", options: ["Seasonal unemployment", "Disguised unemployment", "Full employment", "Open unemployment"], answer: 1, explain: "Some workers add nothing to output." },
        { q: "Banking and transport belong to the:", options: ["Primary", "Secondary", "Tertiary", "Non-economic"], answer: 2, explain: "They are services." },
        { q: "Which investment creates human capital?", options: ["Buying a tractor", "Education and health", "Building a road", "Buying land"], answer: 1, explain: "Education and health raise skills and productivity." },
        { q: "Cooking for one's own family is a:", options: ["Economic activity", "Non-economic activity", "Secondary activity", "Tertiary activity"], answer: 1, explain: "It is not done for pay." },
        { q: "Unemployment only in some months of the year is:", options: ["Seasonal", "Disguised", "Chronic", "Educated"], answer: 0, explain: "It arises where work depends on seasons." }
      ]
    },
    {
      id: "eco-poverty",
      title: "Poverty as a Challenge",
      section: "Economics",
      summary: "What poverty means, how it is measured, who is vulnerable, its causes and government measures against it.",
      notes: [
        {
          heading: "Meaning and measurement",
          points: [
            "Poverty means lack of food, clothing, shelter, health and education, and a lack of security and dignity.",
            "The **poverty line** is a minimum level of income or spending (often based on the calorie requirement) used to count poor people.",
            "Social exclusion and vulnerability mean some groups are more likely to be poor, such as landless labourers and casual workers.",
            "Poverty is higher in rural areas and in states such as Bihar and Odisha than in Punjab, Kerala or Himachal Pradesh."
          ]
        },
        {
          heading: "Causes",
          points: [
            "Low income and productivity, unemployment, rapid population growth and unequal land ownership are major causes.",
            "Social and cultural pressures, such as heavy spending on ceremonies, may push people into debt.",
            "Illiteracy, poor health and lack of skills trap poor families."
          ]
        },
        {
          heading: "Anti-poverty measures",
          points: [
            "Government programmes include the **Mahatma Gandhi National Rural Employment Guarantee Act (MGNREGA)** giving up to 100 days of wage work to rural households.",
            "The Public Distribution System gives subsidised grain, and schemes for education, health and self-employment exist.",
            "Growth in jobs and incomes with education and health spending is the long-term remedy."
          ]
        }
      ],
      formulas: [
        "Poverty line: minimum level of income/spending for basic needs",
        "MGNREGA: up to 100 days of guaranteed work a year"
      ],
      terms: [
        { term: "Poverty line", meaning: "A benchmark income or spending level below which people are counted as poor." },
        { term: "Vulnerability", meaning: "Greater chance of becoming or staying poor when shocks occur." },
        { term: "Social exclusion", meaning: "Being kept out of opportunities or services by social barriers." },
        { term: "MGNREGA", meaning: "A law guaranteeing rural households up to 100 days of wage work." }
      ],
      qa: [
        { q: "What is the poverty line?", a: "It is a minimum income or spending needed for basic necessities such as food. People below it are counted as poor." },
        { q: "State two causes of poverty in India.", a: "Low income and productivity with high unemployment, and unequal ownership of land and assets. Rapid population growth also adds to it." }
      ],
      quiz: [
        { q: "MGNREGA guarantees:", options: ["Free housing", "Up to 100 days of work", "Free education", "Pensions"], answer: 1, explain: "It gives up to 100 days of rural wage work." },
        { q: "The poverty line is often based on:", options: ["Calorie needs", "Rainfall", "Land area", "Number of cars"], answer: 0, explain: "Minimum food intake is used for estimating." },
        { q: "Which group is most vulnerable to poverty?", options: ["Landless labourers", "Large landowners", "Bank officers", "Traders with shops"], answer: 0, explain: "They have no assets and irregular work." },
        { q: "Poverty is generally higher in:", options: ["Rural areas", "Metropolitan centres only", "Banks", "Industrial estates"], answer: 0, explain: "Rural areas have more poor households." },
        { q: "Which is a long-term cure for poverty?", options: ["Free gifts only", "Jobs, education and health", "Reducing roads", "Stopping schools"], answer: 1, explain: "These raise earning ability." },
        { q: "The PDS supplies:", options: ["Subsidised foodgrains", "Free cars", "School uniforms only", "Houses"], answer: 0, explain: "It sells grain at lower prices through ration shops." }
      ]
    },
    {
      id: "eco-food-security",
      title: "Food Security in India",
      section: "Economics",
      summary: "What food security is, who is food-insecure, buffer stock, the Public Distribution System and the role of cooperatives.",
      notes: [
        {
          heading: "Meaning and dimensions",
          points: [
            "Food security means that all people have **availability**, **access** and **affordability** of enough safe, nutritious food at all times.",
            "Food insecurity is worst for landless labourers, traditional artisans, the urban poor and people hit by disasters.",
            "Hunger may be **chronic** (diets always inadequate) or **seasonal** (linked to farming cycles).",
            "India became self-sufficient in grains after the Green Revolution, but access is still a problem for the poor."
          ]
        },
        {
          heading: "Buffer stock, PDS and MSP",
          points: [
            "The **buffer stock** is grain bought by the Food Corporation of India (FCI) from farmers at a pre-announced **minimum support price (MSP)** and stored to meet shortages.",
            "The **Public Distribution System (PDS)** sells foodgrains through ration shops (fair price shops) at subsidised prices.",
            "The National Food Security Act (2013) gives legal entitlement to subsidised grain for eligible households.",
            "Wheat and rice procurement is highest in Punjab, Haryana and parts of Uttar Pradesh."
          ]
        },
        {
          heading: "Role of cooperatives",
          points: [
            "Cooperatives sell goods to members at fair prices; in Punjab, Verka milk products are an example of a successful cooperative network.",
            "Amul in Gujarat is a well-known dairy cooperative.",
            "Challenges include leakages in PDS, storage losses and the need to balance farmer prices with consumer prices."
          ]
        }
      ],
      formulas: [
        "Food security = availability + access + affordability",
        "Buffer stock bought at MSP by FCI",
        "National Food Security Act: 2013"
      ],
      terms: [
        { term: "Buffer stock", meaning: "Foodgrain stock held by the government to meet shortages and stabilise prices." },
        { term: "Minimum support price", meaning: "The price the government pays farmers for grain." },
        { term: "Ration shop", meaning: "A fair price shop under the PDS selling subsidised goods." },
        { term: "Famine", meaning: "A severe shortage of food causing widespread starvation." }
      ],
      qa: [
        { q: "What is the role of the buffer stock?", a: "It protects against shortages in bad years and helps distribute grain to poorer areas at fair prices. It also supports farmers through MSP." },
        { q: "Who are food-insecure in India?", a: "Mainly landless labourers, small farmers, artisans, casual workers and people in disaster-affected areas, along with poor urban households." }
      ],
      quiz: [
        { q: "The agency that buys and stores foodgrain is:", options: ["RBI", "FCI", "NABARD", "SEBI"], answer: 1, explain: "The Food Corporation of India manages procurement." },
        { q: "MSP is the price paid:", options: ["To ration shops", "To farmers for grain", "By poor consumers", "To importers"], answer: 1, explain: "It is announced before sowing to support farmers." },
        { q: "The PDS works through:", options: ["Fair price shops", "Banks", "Post offices only", "Schools"], answer: 0, explain: "Ration shops sell subsidised goods." },
        { q: "Which is NOT a dimension of food security?", options: ["Availability", "Access", "Affordability", "Export surplus"], answer: 3, explain: "The three dimensions are availability, access and affordability." },
        { q: "Which crops see the highest procurement in Punjab?", options: ["Wheat and rice", "Cotton and jute", "Tea and coffee", "Maize only"], answer: 0, explain: "Punjab is a major supplier of grain to the buffer stock." },
        { q: "National Food Security Act was passed in:", options: ["1991", "2005", "2013", "2020"], answer: 2, explain: "It came in 2013." }
      ]
    },
    {
      id: "hist-guru-nanak",
      title: "Guru Nanak Dev Ji: Life and Teachings",
      section: "History",
      summary: "The life of Guru Nanak Dev Ji, the founder of Sikhism, his travels (Udasis) and his teachings of one God, honest work, sharing and equality.",
      notes: [
        {
          heading: "Life",
          points: [
            "Guru Nanak Dev Ji was born in **1469** at Talwandi (now Nankana Sahib, Pakistan).",
            "He is the first of the ten Sikh Gurus and founded Sikhism.",
            "He undertook long journeys, known as **Udasis**, to spread his message, visiting many places in India and beyond. Historians differ on the exact number and routes of the journeys.",
            "He settled at Kartarpur on the Ravi, where he farmed and lived with his followers; the Guru's *joti jot* (passing) was in **1539** at Kartarpur."
          ]
        },
        {
          heading: "Teachings",
          points: [
            "He taught **Ik Onkar**: there is one God, the creator, truthful and beyond birth and death.",
            "He emphasised three principles: **Naam Japna** (remembering God), **Kirat Karni** (earning an honest living) and **Vand Chhakna** (sharing with others).",
            "He opposed caste distinctions, ritualism, superstition and the unequal treatment of women, and taught equality of all people.",
            "His hymns are in Gurmukhi script in the Guru Granth Sahib, including the Japji Sahib."
          ]
        },
        {
          heading: "Institutions",
          points: [
            "**Sangat** (holy congregation) and **Pangat** (eating together in a row) built a sense of equality and community.",
            "Langar, the community kitchen, was strengthened at Kartarpur where all, whatever their background, sat and ate together.",
            "Before his passing he named Bhai Lehna as his successor, who became **Guru Angad Dev Ji**."
          ]
        }
      ],
      formulas: [
        "Born 1469 at Talwandi (Nankana Sahib)",
        "Joti jot 1539 at Kartarpur",
        "Three principles: Naam Japna, Kirat Karni, Vand Chhakna"
      ],
      terms: [
        { term: "Udasi", meaning: "A long journey of Guru Nanak Dev Ji to spread his message." },
        { term: "Sangat", meaning: "A gathering of devotees." },
        { term: "Pangat", meaning: "Sitting in a row to eat the same food, regardless of status." },
        { term: "Ik Onkar", meaning: "The opening statement of the Mool Mantar: God is one." }
      ],
      qa: [
        { q: "State the three basic teachings of Guru Nanak Dev Ji.", a: "Naam Japna (remembering God), Kirat Karni (honest work) and Vand Chhakna (sharing earnings with the needy)." },
        { q: "How did Guru Nanak Dev Ji promote equality?", a: "He rejected caste and gender discrimination, and started sangat and pangat so that people of every background sat and ate together." }
      ],
      quiz: [
        { q: "Guru Nanak Dev Ji was born in:", options: ["1409", "1469", "1539", "1606"], answer: 1, explain: "He was born in 1469 at Talwandi." },
        { q: "He spent his last years at:", options: ["Amritsar", "Kartarpur", "Goindwal", "Lahore"], answer: 1, explain: "He settled at Kartarpur on the Ravi." },
        { q: "Ik Onkar means:", options: ["Many gods", "God is one", "Silence", "The temple"], answer: 1, explain: "It expresses oneness of God." },
        { q: "Vand Chhakna means:", options: ["Worship", "Honest earning", "Sharing with others", "Pilgrimage"], answer: 2, explain: "It means sharing one's earnings." },
        { q: "The Guru's journeys are called:", options: ["Jatras", "Udasis", "Yatras of the Khalsa", "Hijrat"], answer: 1, explain: "They are known as Udasis." },
        { q: "The successor of Guru Nanak Dev Ji was:", options: ["Guru Amar Das Ji", "Guru Angad Dev Ji", "Guru Ram Das Ji", "Guru Arjan Dev Ji"], answer: 1, explain: "Bhai Lehna became Guru Angad Dev Ji." }
      ]
    },
    {
      id: "hist-gurus-2-3-4",
      title: "Contribution of Guru Angad Dev Ji, Guru Amar Das Ji and Guru Ram Das Ji",
      section: "History",
      summary: "How the second, third and fourth Gurus strengthened Sikh faith and organisation through script, langar, baoli, manji system and the founding of Amritsar.",
      notes: [
        {
          heading: "Guru Angad Dev Ji (1539–1552)",
          points: [
            "Guru Angad Dev Ji, the second Guru, was formerly Bhai Lehna; he led the community from Khadur Sahib.",
            "He popularised the **Gurmukhi script**, which helped Sikhs read and record the Gurus' hymns.",
            "He expanded the langar tradition and encouraged physical fitness and education for children.",
            "He is traditionally said to have collected Guru Nanak Dev Ji's hymns, a basis for later compilation."
          ]
        },
        {
          heading: "Guru Amar Das Ji (1552–1574)",
          points: [
            "The third Guru, he made **Goindwal** an important centre and built a **baoli** (stepped well) there.",
            "He established the **manji system**, a network of preaching centres under devoted Sikhs, to spread teachings widely.",
            "He opposed **sati** and the practice of **purdah**, and supported widow remarriage.",
            "He insisted that all visitors, whatever their status, first eat in the langar (pangat before sangat)."
          ]
        },
        {
          heading: "Guru Ram Das Ji (1574–1581)",
          points: [
            "The fourth Guru founded the town of **Ramdaspur**, later Amritsar.",
            "He began the digging of the **sarovar** (holy pool), later completed under Guru Arjan Dev Ji, around which Harmandir Sahib was built.",
            "He invited traders and craftsmen to settle there, making Amritsar a centre of commerce.",
            "His hymns, including the Lavan (marriage hymns), are in the Guru Granth Sahib."
          ]
        }
      ],
      formulas: [
        "Guru Angad Dev Ji: 1539–1552; Khadur Sahib; Gurmukhi",
        "Guru Amar Das Ji: 1552–1574; Goindwal; baoli; manji system",
        "Guru Ram Das Ji: 1574–1581; Ramdaspur (Amritsar); sarovar"
      ],
      terms: [
        { term: "Gurmukhi", meaning: "The script used to write the Gurus' hymns, popularised by Guru Angad Dev Ji." },
        { term: "Manji", meaning: "A preaching centre or seat headed by an appointed Sikh." },
        { term: "Baoli", meaning: "A stepped well; the one at Goindwal was built by Guru Amar Das Ji." },
        { term: "Sarovar", meaning: "A holy pool; the Amritsar sarovar was begun by Guru Ram Das Ji." }
      ],
      qa: [
        { q: "What was the importance of the Gurmukhi script?", a: "It made the Gurus' teachings easy to write and read for ordinary people, and it gave Sikhs a distinct identity and written tradition." },
        { q: "What social reforms were made by Guru Amar Das Ji?", a: "He opposed sati and purdah, supported widow remarriage and insisted that everyone eat together in langar, rejecting caste barriers." }
      ],
      quiz: [
        { q: "The Gurmukhi script was popularised by:", options: ["Guru Angad Dev Ji", "Guru Ram Das Ji", "Guru Hargobind Ji", "Guru Arjan Dev Ji"], answer: 0, explain: "Guru Angad Dev Ji spread it widely." },
        { q: "The baoli at Goindwal was built under:", options: ["Guru Nanak Dev Ji", "Guru Amar Das Ji", "Guru Ram Das Ji", "Guru Tegh Bahadur Ji"], answer: 1, explain: "Guru Amar Das Ji built it." },
        { q: "The manji system was started to:", options: ["Collect taxes", "Spread the teachings", "Train soldiers", "Build forts"], answer: 1, explain: "Manjis were preaching centres." },
        { q: "Amritsar was founded as Ramdaspur by:", options: ["Guru Angad Dev Ji", "Guru Amar Das Ji", "Guru Ram Das Ji", "Guru Gobind Singh Ji"], answer: 2, explain: "The fourth Guru founded it." },
        { q: "Guru Angad Dev Ji's seat was at:", options: ["Khadur Sahib", "Anandpur Sahib", "Patna Sahib", "Kiratpur"], answer: 0, explain: "He lived at Khadur Sahib." },
        { q: "Guru Amar Das Ji opposed:", options: ["Langar", "Sati and purdah", "Education", "Farming"], answer: 1, explain: "He spoke against both customs." }
      ]
    },
    {
      id: "hist-guru-arjan-dev",
      title: "Guru Arjan Dev Ji: Contribution and Martyrdom",
      section: "History",
      summary: "The fifth Guru's work in building Harmandir Sahib, compiling the Adi Granth, organising the Sikh community, and his martyrdom in 1606.",
      notes: [
        {
          heading: "Contributions",
          points: [
            "Guru Arjan Dev Ji was the fifth Guru (**1581–1606**), the son of Guru Ram Das Ji.",
            "He completed the sarovar at Amritsar and built **Harmandir Sahib** (Golden Temple) in its centre; it has four doors, symbolising openness to all.",
            "He founded towns such as Tarn Taran and Kartarpur (near Jalandhar), which became religious and economic centres.",
            "He promoted the **dasvandh**, the voluntary offering of one-tenth of one's income for community needs."
          ]
        },
        {
          heading: "Compilation of the Adi Granth",
          points: [
            "In **1604** he compiled the **Adi Granth**, the first form of the Guru Granth Sahib, with Bhai Gurdas as scribe.",
            "It includes hymns of the first five Gurus and also compositions of saints such as Kabir, Ravidas and Sheikh Farid, irrespective of caste or religion.",
            "It was installed at Harmandir Sahib; Baba Buddha Ji was the first granthi.",
            "Guru Gobind Singh Ji later added the hymns of Guru Tegh Bahadur Ji to complete the scripture."
          ]
        },
        {
          heading: "Martyrdom (1606)",
          points: [
            "The growing strength of the Sikh community drew the attention of the Mughal ruler Jahangir.",
            "The Guru was arrested and was martyred in **1606** at Lahore; he is called the first Sikh martyr among the Gurus.",
            "Historians differ on the exact causes: they mention political suspicion, the support given to Prince Khusrau and opposition from local rivals.",
            "His martyrdom led his son Guru Hargobind Ji to adopt the idea of **miri and piri**, combining spiritual and temporal authority."
          ]
        }
      ],
      formulas: [
        "Guru Arjan Dev Ji: 1581–1606",
        "Adi Granth compiled 1604 (scribe: Bhai Gurdas)",
        "Martyrdom 1606 at Lahore under Jahangir"
      ],
      terms: [
        { term: "Adi Granth", meaning: "The first compiled form of the Sikh scripture, completed in 1604." },
        { term: "Harmandir Sahib", meaning: "The central Sikh shrine in Amritsar, built by Guru Arjan Dev Ji." },
        { term: "Dasvandh", meaning: "Offering one-tenth of one's earnings for community welfare." },
        { term: "Shaheed", meaning: "A martyr who gives life for faith or justice." }
      ],
      qa: [
        { q: "Why was the Adi Granth compiled?", a: "To keep the Gurus' hymns authentic and in one place, to unite the community around a single scripture, and to include saints from varied backgrounds." },
        { q: "What was the significance of Guru Arjan Dev Ji's martyrdom?", a: "It showed the willingness to bear suffering for faith and truth, and it led the Sikhs to organise themselves, with Guru Hargobind Ji taking up miri and piri." }
      ],
      quiz: [
        { q: "The Adi Granth was compiled in:", options: ["1469", "1539", "1604", "1699"], answer: 2, explain: "Guru Arjan Dev Ji completed it in 1604." },
        { q: "The first scribe of the Adi Granth was:", options: ["Baba Buddha Ji", "Bhai Gurdas", "Bhai Mani Singh", "Bhai Lehna"], answer: 1, explain: "Bhai Gurdas wrote it down." },
        { q: "Guru Arjan Dev Ji was martyred at:", options: ["Delhi", "Lahore", "Amritsar", "Nanded"], answer: 1, explain: "He attained martyrdom in 1606 at Lahore." },
        { q: "The Mughal emperor at the time was:", options: ["Akbar", "Jahangir", "Shah Jahan", "Aurangzeb"], answer: 1, explain: "Jahangir ruled in 1606." },
        { q: "Harmandir Sahib has four doors to show:", options: ["Defence needs", "Openness to all", "Four seasons", "Four Gurus"], answer: 1, explain: "People of all directions and backgrounds are welcome." },
        { q: "Dasvandh means giving:", options: ["Half of income", "One-tenth of income", "One-fifth of income", "One day's wages"], answer: 1, explain: "Dasvandh is a tenth." }
      ]
    },
    {
      id: "hist-french-revolution",
      title: "The French Revolution",
      section: "History",
      summary: "The causes, course and results of the French Revolution of 1789, and the ideas of liberty, equality and fraternity.",
      notes: [
        {
          heading: "Causes",
          points: [
            "Before 1789 French society was divided into three estates: clergy, nobility and the Third Estate (peasants, workers, middle class), where only the Third Estate paid heavy taxes.",
            "Costly wars and royal spending left the state in debt, and bad harvests raised bread prices.",
            "Thinkers such as Rousseau, Voltaire and Montesquieu spread ideas of liberty, equality and separation of powers.",
            "The monarch Louis XVI summoned the Estates-General in 1789; disputes over voting led the Third Estate to form the National Assembly."
          ]
        },
        {
          heading: "Course of events",
          points: [
            "On **14 July 1789** a crowd stormed the **Bastille**, a prison seen as a symbol of royal power.",
            "In August 1789 the Declaration of the Rights of Man and of the Citizen was adopted.",
            "France became a constitutional monarchy in 1791, then a republic in 1792; Louis XVI was executed in 1793.",
            "The Reign of Terror (1793–94) under Robespierre saw many executions; later Napoleon Bonaparte came to power in 1799."
          ]
        },
        {
          heading: "Impact",
          points: [
            "Feudal privileges ended and laws became equal for citizens.",
            "The tricolour flag and the song La Marseillaise became national symbols.",
            "Ideas of liberty, equality and fraternity influenced movements in Europe and the colonies, including in India.",
            "Women took part but were denied full political rights, so they demanded equality."
          ]
        }
      ],
      formulas: [
        "1789: Estates-General, fall of the Bastille (14 July)",
        "1792: France becomes a republic; 1793: execution of Louis XVI",
        "Slogan: Liberty, Equality, Fraternity"
      ],
      terms: [
        { term: "Estate", meaning: "A social order in old French society: clergy, nobility or commoners." },
        { term: "Bastille", meaning: "A Paris fortress-prison stormed on 14 July 1789." },
        { term: "Republic", meaning: "A state in which power rests with citizens and their elected representatives, without a monarch." },
        { term: "Reign of Terror", meaning: "The period 1793–94 of harsh rule by Robespierre." }
      ],
      qa: [
        { q: "What were the main causes of the French Revolution?", a: "Unequal taxes borne by the Third Estate, government debt, food shortage and the spread of Enlightenment ideas among a resentful middle class." },
        { q: "Why is the fall of the Bastille important?", a: "It marked the start of popular revolt against royal power; 14 July is celebrated as France's national day." }
      ],
      quiz: [
        { q: "The French Revolution began in:", options: ["1689", "1789", "1815", "1917"], answer: 1, explain: "It began in 1789." },
        { q: "The Bastille was:", options: ["A palace", "A prison", "A church", "A parliament"], answer: 1, explain: "It was a prison and symbol of despotism." },
        { q: "Who paid the main taxes in old France?", options: ["Clergy", "Nobility", "Third Estate", "King's family"], answer: 2, explain: "The first two estates were largely exempt." },
        { q: "Louis XVI was executed in:", options: ["1789", "1791", "1793", "1799"], answer: 2, explain: "He was guillotined in 1793." },
        { q: "The slogan of the revolution was:", options: ["Peace, Land, Bread", "Liberty, Equality, Fraternity", "Unity, Faith, Discipline", "Truth alone triumphs"], answer: 1, explain: "These are the ideals of the revolution." },
        { q: "Who came to power in France in 1799?", options: ["Robespierre", "Napoleon Bonaparte", "Louis XVIII", "Lafayette"], answer: 1, explain: "Napoleon took power in 1799." }
      ]
    },
    {
      id: "hist-russian-revolution",
      title: "Socialism in Europe and the Russian Revolution",
      section: "History",
      summary: "The rise of socialist ideas in Europe and the Russian Revolution of 1917, which created the world's first socialist state.",
      notes: [
        {
          heading: "Socialism",
          points: [
            "Socialists opposed private ownership of property and wanted society to control resources more equally; thinkers included Robert Owen, Louis Blanc and Karl Marx.",
            "Marx argued that society was divided into capitalists and workers, and that workers would end exploitation.",
            "Socialists differed on methods: some wanted reform through laws and elections, others wanted revolution.",
            "Russian Social Democrats split into the Bolsheviks (Lenin) and Mensheviks."
          ]
        },
        {
          heading: "Russia before 1917",
          points: [
            "Tsar Nicholas II ruled as an autocrat; most Russians were poor peasants, and workers in factories lived in harsh conditions.",
            "Defeat in the Russo-Japanese War and the 1905 Revolution weakened the Tsar.",
            "In the First World War Russia suffered heavy losses and food shortages in cities."
          ]
        },
        {
          heading: "The revolutions of 1917",
          points: [
            "In **February 1917** protests in Petrograd led the Tsar to abdicate and a Provisional Government took charge.",
            "Lenin returned and issued the April Theses, demanding an end to the war, land for peasants and power to the soviets.",
            "In the **October Revolution (1917)** the Bolsheviks seized power in Petrograd.",
            "The new government nationalised banks and industry, redistributed land and made peace with Germany. A civil war followed, and in 1922 the Soviet Union (USSR) was formed."
          ]
        }
      ],
      formulas: [
        "February 1917: Tsar abdicates",
        "October 1917: Bolsheviks take power under Lenin",
        "USSR formed 1922"
      ],
      terms: [
        { term: "Bolshevik", meaning: "A member of Lenin's majority faction of Russian socialists." },
        { term: "Soviet", meaning: "A council of workers, soldiers or peasants." },
        { term: "Tsar", meaning: "The emperor of Russia." },
        { term: "Socialism", meaning: "An idea favouring collective or state control of resources for equality." }
      ],
      qa: [
        { q: "Why did the Russian people revolt against the Tsar?", a: "Poverty, lack of rights, a lost war, food shortages and the Tsar's autocratic rule made people angry." },
        { q: "What were the main demands of Lenin's April Theses?", a: "End the war, give land to peasants, and transfer power to the soviets." }
      ],
      quiz: [
        { q: "The Russian Revolution took place in:", options: ["1789", "1848", "1917", "1947"], answer: 2, explain: "The revolutions occurred in 1917." },
        { q: "The leader of the Bolsheviks was:", options: ["Trotsky", "Lenin", "Kerensky", "Stalin"], answer: 1, explain: "Vladimir Lenin led the party." },
        { q: "The last Tsar of Russia was:", options: ["Alexander II", "Nicholas II", "Peter the Great", "Ivan IV"], answer: 1, explain: "Nicholas II abdicated in 1917." },
        { q: "A soviet is a:", options: ["Council", "Prison", "Army rank", "Tax"], answer: 0, explain: "It was a council of workers and soldiers." },
        { q: "The Bolsheviks took power in Petrograd in:", options: ["February 1917", "October 1917", "1905", "1922"], answer: 1, explain: "The October Revolution brought them to power." },
        { q: "Which thinker is closely linked with socialism?", options: ["Karl Marx", "Rousseau", "Adam Smith", "Napoleon"], answer: 0, explain: "Marx developed the theory of class struggle." }
      ]
    },
    {
      id: "civ-what-is-democracy",
      title: "What is Democracy? Why Democracy?",
      section: "Civics",
      summary: "The meaning, features, history and merits of democracy.",
      notes: [
        {
          heading: "Meaning and features",
          points: [
            "Democracy is a form of government in which rulers are elected by the people.",
            "Key features: free and fair elections, one person one vote, rule of law, and rights for citizens.",
            "Elected representatives take major decisions, and the government is limited by a constitution.",
            "The word comes from Greek *demos* (people) and *kratos* (rule)."
          ]
        },
        {
          heading: "Arguments for democracy",
          points: [
            "It is more accountable and responsive; people can change governments by voting.",
            "It improves decision-making through discussion and gives equal status to all citizens.",
            "It allows conflicts to be solved peacefully and gives a method to correct mistakes.",
            "Its flaws include delays and the risk of power misuse, yet most people prefer it to other forms."
          ]
        },
        {
          heading: "History and spread",
          points: [
            "Ancient Greek city-states such as Athens had early direct democracy, but excluded women, slaves and foreigners.",
            "Modern representative democracy grew after the French and American revolutions.",
            "In India, universal adult franchise was given from the first general election of 1951–52."
          ]
        }
      ],
      formulas: [
        "Democracy = rule by the people through elected representatives",
        "Universal adult franchise in India from 1951–52 elections"
      ],
      terms: [
        { term: "Democracy", meaning: "Government by the people, chosen by free and fair elections." },
        { term: "Universal adult franchise", meaning: "The right of all adult citizens to vote." },
        { term: "Accountability", meaning: "Being answerable to the people for actions." },
        { term: "Representative", meaning: "A person elected to act and decide for others." }
      ],
      qa: [
        { q: "Give two features of democracy.", a: "Rulers are chosen in free and fair elections, and citizens enjoy equal rights; the government must follow the constitution." },
        { q: "Why is democracy better than dictatorship?", a: "It is accountable to people, allows rights and freedom of expression and settles disputes peacefully, while a dictator is not answerable to anyone." }
      ],
      quiz: [
        { q: "The word democracy comes from the language:", options: ["Latin", "Greek", "Sanskrit", "French"], answer: 1, explain: "From demos and kratos." },
        { q: "In a democracy, final power rests with the:", options: ["King", "Army", "People", "Judges alone"], answer: 2, explain: "People elect their rulers." },
        { q: "One person one vote means:", options: ["Equal value for each vote", "Only men vote", "Votes can be sold", "Votes by wealth"], answer: 0, explain: "Every vote has equal weight." },
        { q: "Universal adult franchise began in India in:", options: ["1935", "1947", "1951–52", "1962"], answer: 2, explain: "It began with the first general elections." },
        { q: "Which is a merit of democracy?", options: ["Quick one-person decisions", "Accountability", "No elections", "Rule by heredity"], answer: 1, explain: "Rulers must answer to voters." },
        { q: "Athens' early democracy excluded:", options: ["Male citizens", "Women and slaves", "Landowners", "Soldiers"], answer: 1, explain: "Participation was limited to a small group." }
      ]
    },
    {
      id: "civ-constitutional-design",
      title: "Constitutional Design",
      section: "Civics",
      summary: "How India's Constitution was made, its main features, and how it can be amended.",
      notes: [
        {
          heading: "Making of the Constitution",
          points: [
            "The **Constituent Assembly** was formed in 1946 with Dr Rajendra Prasad as its President; Dr B. R. Ambedkar chaired the Drafting Committee.",
            "The Constitution was adopted on **26 November 1949** and came into force on **26 January 1950** (Republic Day).",
            "The Assembly took about three years and drew on the national movement, ideas from other countries and the Government of India Act, 1935.",
            "The Preamble declares India a sovereign, socialist, secular, democratic republic."
          ]
        },
        {
          heading: "Main features",
          points: [
            "It is the longest written constitution of any sovereign country.",
            "India has a **parliamentary system**, a federal structure with a strong centre, and an independent judiciary.",
            "Part III contains Fundamental Rights, and Directive Principles guide state policy.",
            "Fundamental Duties were added later by the 42nd Amendment (1976)."
          ]
        },
        {
          heading: "Amendment",
          points: [
            "Article 368 allows Parliament to amend the Constitution; some changes need a special majority and some also need approval from half of the states.",
            "The Constitution is thus flexible and rigid, adapting to change yet protecting its core.",
            "In the Kesavananda Bharati case (1973) the Supreme Court held that Parliament cannot alter the basic structure."
          ]
        }
      ],
      formulas: [
        "Adopted 26 Nov 1949; in force 26 Jan 1950",
        "Drafting Committee chair: Dr B. R. Ambedkar",
        "Amendment procedure: Article 368"
      ],
      terms: [
        { term: "Preamble", meaning: "The introduction stating the Constitution's aims and values." },
        { term: "Constituent Assembly", meaning: "The body that drafted India's Constitution." },
        { term: "Amendment", meaning: "A formal change in the Constitution." },
        { term: "Basic structure", meaning: "Core principles of the Constitution that Parliament cannot change." }
      ],
      qa: [
        { q: "Why is 26 January 1950 important?", a: "On that date the Constitution came into force, and India became a republic; it is celebrated as Republic Day." },
        { q: "What does the Preamble say about India?", a: "It declares India a sovereign, socialist, secular, democratic republic and promises justice, liberty, equality and fraternity." }
      ],
      quiz: [
        { q: "The Constitution came into force on:", options: ["15 Aug 1947", "26 Nov 1949", "26 Jan 1950", "2 Oct 1950"], answer: 2, explain: "It took effect on Republic Day, 1950." },
        { q: "The Drafting Committee was headed by:", options: ["Rajendra Prasad", "B. R. Ambedkar", "Nehru", "Patel"], answer: 1, explain: "Dr Ambedkar chaired it." },
        { q: "The President of the Constituent Assembly was:", options: ["Rajendra Prasad", "Gandhi", "Ambedkar", "Azad"], answer: 0, explain: "Dr Rajendra Prasad presided." },
        { q: "Amendments are made under:", options: ["Article 14", "Article 368", "Article 21", "Article 32"], answer: 1, explain: "Article 368 gives the amending power." },
        { q: "Fundamental Duties were added in:", options: ["1950", "1962", "1976", "1992"], answer: 2, explain: "The 42nd Amendment added them." },
        { q: "The basic structure doctrine arose in the case of:", options: ["Kesavananda Bharati", "Mandal", "Golaknath alone", "Shah Bano"], answer: 0, explain: "The 1973 decision set the doctrine." }
      ]
    },
    {
      id: "civ-electoral-politics",
      title: "Electoral Politics",
      section: "Civics",
      summary: "Why elections are needed, what makes an election democratic, and how elections are conducted in India.",
      notes: [
        {
          heading: "Why elections",
          points: [
            "In a large democracy people choose representatives through elections, because everyone cannot rule directly.",
            "Elections let voters choose lawmakers, a government and policies, and hold leaders accountable.",
            "A democratic election needs free choice, equal votes, regular intervals and fairness."
          ]
        },
        {
          heading: "Election system in India",
          points: [
            "Lok Sabha and state assembly elections are held every five years; the country is divided into **constituencies**, each electing one representative.",
            "Some seats are **reserved** for Scheduled Castes and Scheduled Tribes.",
            "All citizens aged 18 and above can vote; the voters list is prepared, and EVMs are used for voting.",
            "Candidates file nominations, campaign within the code of conduct, and the party or candidate with the most votes wins."
          ]
        },
        {
          heading: "Election Commission",
          points: [
            "The **Election Commission of India** is an independent body that conducts free and fair elections.",
            "It enforces the Model Code of Conduct, which restricts use of government resources during campaigning.",
            "Everyone should respect a fair process, but problems such as money power and criminalisation remain."
          ]
        }
      ],
      formulas: [
        "Voting age in India: 18 years",
        "Lok Sabha term: 5 years",
        "Election Commission: independent constitutional body"
      ],
      terms: [
        { term: "Constituency", meaning: "An area whose voters elect one representative." },
        { term: "Model Code of Conduct", meaning: "Rules parties and candidates must follow during elections." },
        { term: "EVM", meaning: "Electronic voting machine." },
        { term: "Reserved constituency", meaning: "A seat reserved for SC or ST candidates." }
      ],
      qa: [
        { q: "What are the features of a democratic election?", a: "Everyone has one vote of equal value, parties can compete freely, elections are regular, and the result reflects voters' choice without pressure." },
        { q: "What is the role of the Election Commission?", a: "It prepares voter lists, schedules polls, enforces the code of conduct and ensures that elections are free and fair." }
      ],
      quiz: [
        { q: "The minimum voting age in India is:", options: ["16", "18", "21", "25"], answer: 1, explain: "Citizens aged 18 and above may vote." },
        { q: "Who conducts elections in India?", options: ["Supreme Court", "Election Commission", "President", "Prime Minister"], answer: 1, explain: "The Election Commission is independent." },
        { q: "A constituency in the Lok Sabha elects:", options: ["One member", "Five members", "Ten members", "A hundred members"], answer: 0, explain: "India follows single-member constituencies." },
        { q: "Seats reserved for SC and ST help to:", options: ["Reduce voting", "Ensure representation", "Delay polls", "Limit parties"], answer: 1, explain: "They secure fair representation." },
        { q: "The Model Code of Conduct applies to:", options: ["Judges only", "Parties and candidates during elections", "School boards", "Banks"], answer: 1, explain: "It governs behaviour in campaigns." },
        { q: "Lok Sabha elections are normally held every:", options: ["3 years", "4 years", "5 years", "6 years"], answer: 2, explain: "The term is five years." }
      ]
    },
    {
      id: "civ-working-of-institutions",
      title: "Working of Institutions",
      section: "Civics",
      summary: "How Parliament (Lok Sabha and Rajya Sabha) and the President work in India's parliamentary system.",
      notes: [
        {
          heading: "Parliament",
          points: [
            "Parliament has three parts: the **President**, the **Lok Sabha** and the **Rajya Sabha**.",
            "The Lok Sabha is directly elected for five years; it has up to 552 members under the Constitution, and 543 are elected.",
            "The Rajya Sabha is a permanent house with 250 members at most; members are elected by state legislators and one third retire every two years.",
            "Parliament makes laws, controls the executive and approves budgets. On money matters the Lok Sabha is more powerful."
          ]
        },
        {
          heading: "Executive and President",
          points: [
            "The **President** is the head of state, elected indirectly for five years; real executive power lies with the **Prime Minister** and Council of Ministers.",
            "The Prime Minister is the leader of the majority party or coalition in the Lok Sabha.",
            "The Council of Ministers is collectively responsible to the Lok Sabha.",
            "The President appoints the Prime Minister, signs bills into law and acts on the advice of the Council of Ministers."
          ]
        },
        {
          heading: "Judiciary",
          points: [
            "The Supreme Court is the highest court; courts are independent of the government.",
            "Courts protect rights and can examine whether a law agrees with the Constitution (judicial review)."
          ]
        }
      ],
      formulas: [
        "Parliament = President + Lok Sabha + Rajya Sabha",
        "Lok Sabha term: 5 years; Rajya Sabha: permanent, 1/3 retire every 2 years",
        "Executive power: Prime Minister and Council of Ministers"
      ],
      terms: [
        { term: "Lok Sabha", meaning: "The House of the People, the directly elected lower house." },
        { term: "Rajya Sabha", meaning: "The Council of States, the permanent upper house." },
        { term: "Council of Ministers", meaning: "Ministers who run the government under the Prime Minister." },
        { term: "Judicial review", meaning: "The power of courts to check laws against the Constitution." }
      ],
      qa: [
        { q: "Why is the Lok Sabha more powerful than the Rajya Sabha?", a: "It is directly elected, controls money bills, and the Council of Ministers is answerable to it, so it can remove a government." },
        { q: "What is the President's role?", a: "The President is the nominal head of state who appoints the Prime Minister and gives assent to laws, normally acting on the Council of Ministers' advice." }
      ],
      quiz: [
        { q: "Members of the Lok Sabha are:", options: ["Nominated", "Directly elected", "Chosen by the President", "Appointed by judges"], answer: 1, explain: "People vote for them directly." },
        { q: "The Rajya Sabha is:", options: ["Dissolved every 5 years", "A permanent house", "A court", "Elected directly"], answer: 1, explain: "It is never dissolved as a whole." },
        { q: "Real executive power lies with the:", options: ["President", "Prime Minister and ministers", "Chief Justice", "Speaker"], answer: 1, explain: "The cabinet runs the government." },
        { q: "The Council of Ministers is responsible to the:", options: ["Rajya Sabha", "Lok Sabha", "Supreme Court", "Governor"], answer: 1, explain: "It needs the confidence of the Lok Sabha." },
        { q: "The head of state in India is the:", options: ["Prime Minister", "President", "Speaker", "Chief Minister"], answer: 1, explain: "The President is head of state." },
        { q: "The Prime Minister is normally:", options: ["The leader of the majority in the Lok Sabha", "Elected directly nationwide", "The Chief Justice", "Chosen by the Rajya Sabha"], answer: 0, explain: "The one who commands a majority is appointed." }
      ]
    },
    {
      id: "civ-democratic-rights",
      title: "Democratic Rights",
      section: "Civics",
      summary: "The need for rights in a democracy and the Fundamental Rights in the Indian Constitution.",
      notes: [
        {
          heading: "Why rights",
          points: [
            "Rights are claims of a person recognised by society and law that protect freedom and dignity.",
            "Democracy needs rights so that citizens can vote, speak and take part freely.",
            "Without rights, power can be misused; rights also bring duties."
          ]
        },
        {
          heading: "Fundamental Rights",
          points: [
            "Six Fundamental Rights: **Right to Equality**, **Right to Freedom**, **Right against Exploitation**, **Right to Freedom of Religion**, **Cultural and Educational Rights**, and **Right to Constitutional Remedies**.",
            "Equality includes equality before law and no discrimination on grounds of religion, race, caste, sex or place of birth; untouchability is abolished.",
            "Freedom includes speech and expression, assembly, association, movement and profession; Article 21 protects life and personal liberty.",
            "Exploitation: bans forced labour, human trafficking and child labour in hazardous work."
          ]
        },
        {
          heading: "Remedies and other rights",
          points: [
            "The Right to Constitutional Remedies lets people go to the High Courts or the Supreme Court if rights are violated; Dr Ambedkar called it the heart and soul of the Constitution.",
            "The National Human Rights Commission (NHRC) looks into violations of human rights.",
            "Education for children aged 6–14 became a fundamental right by the 86th Amendment (2002), made effective by the Right to Education Act, 2009."
          ]
        }
      ],
      formulas: [
        "Six Fundamental Rights (Part III)",
        "Right to Constitutional Remedies: Article 32",
        "NHRC established 1993"
      ],
      terms: [
        { term: "Fundamental Rights", meaning: "Basic rights guaranteed to all citizens by the Constitution." },
        { term: "Writ", meaning: "A court order issued to protect a right." },
        { term: "Untouchability", meaning: "Social practice of treating some people as impure; it is abolished." },
        { term: "NHRC", meaning: "National Human Rights Commission, which examines rights violations." }
      ],
      qa: [
        { q: "Why are Fundamental Rights important?", a: "They protect individual freedom and dignity against the state and others, and courts can enforce them, so people can live without fear of misuse of power." },
        { q: "Why did Dr Ambedkar call Article 32 the heart and soul of the Constitution?", a: "Because it lets citizens go straight to the Supreme Court if a right is violated, making all other rights enforceable." }
      ],
      quiz: [
        { q: "How many Fundamental Rights are there?", options: ["Four", "Five", "Six", "Seven"], answer: 2, explain: "There are six categories." },
        { q: "Untouchability is abolished under the Right to:", options: ["Equality", "Freedom", "Religion", "Education"], answer: 0, explain: "It is part of the Right to Equality." },
        { q: "Article 32 gives the Right to:", options: ["Property", "Constitutional Remedies", "Vote", "Work"], answer: 1, explain: "People can approach the Supreme Court." },
        { q: "Forced labour is prohibited by the Right against:", options: ["Exploitation", "Equality", "Freedom", "Religion"], answer: 0, explain: "It bans forced labour and trafficking." },
        { q: "Article 21 protects:", options: ["Life and personal liberty", "Property", "Voting", "Trade"], answer: 0, explain: "It guarantees life and liberty." },
        { q: "Free education for ages 6–14 followed the:", options: ["42nd Amendment", "86th Amendment", "1st Amendment", "7th Amendment"], answer: 1, explain: "The 86th Amendment (2002) made it a right." }
      ]
    }
  ]
});
