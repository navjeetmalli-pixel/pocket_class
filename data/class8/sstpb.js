// PSEB Class 8 Social Science: Geography, Economics, History and Civics. Format: see CONTENT_GUIDE.md.
// `formulas` holds key dates and facts.
StudyData.add(8, "sstpb", {
  syllabus: {
    board: "PSEB",
    match: "textbook",
    books: ["Social Science (PSEB, Class 8)"],
    note: "Follows the PSEB 2026–27 syllabus; written from the syllabus topics, not the PSEB book's own text.",
    reviewed: false
  },
  chapters: [
    {
      id: "resources-types-conservation",
      title: "Resources: Types and Conservation",
      section: "Geography",
      summary: "What a resource is, how resources are classified, and why they must be used wisely and conserved for the future.",
      notes: [
        {
          heading: "What is a resource?",
          points: [
            "A **resource** is anything in the environment that is useful to people and can be used to meet their needs.",
            "A thing becomes a resource only when it has **utility** and people have the technology and the need to use it.",
            "Resources are therefore a result of the interaction between nature, technology and human beings."
          ]
        },
        {
          heading: "Classification of resources",
          points: [
            "By origin: **biotic** (from living things, such as forests and animals) and **abiotic** (from non-living things, such as minerals and water).",
            "By renewability: **renewable** (can be replaced naturally, such as sunlight, wind, water) and **non-renewable** (limited, such as coal and petroleum).",
            "By ownership: individual, community, national and international resources.",
            "By development: potential, developed, stock and reserve resources."
          ]
        },
        {
          heading: "Conservation",
          points: [
            "**Conservation** means using resources carefully so that they last and future generations can also use them.",
            "**Sustainable development** means meeting today's needs without harming the needs of the future.",
            "Ways to conserve: reduce waste, reuse and recycle, use renewable sources, and avoid overuse of non-renewable ones."
          ]
        }
      ],
      formulas: [
        "Biotic: forests, animals, fish | Abiotic: minerals, water, land",
        "Renewable: sun, wind, water | Non-renewable: coal, petroleum",
        "Sustainable development = meeting present needs without spoiling the future"
      ],
      terms: [
        { term: "Resource", meaning: "Anything from the environment that is useful to people and can be used." },
        { term: "Renewable resource", meaning: "A resource that can be replaced naturally in a short time." },
        { term: "Conservation", meaning: "Careful use of resources so that they are not wasted or exhausted." },
        { term: "Sustainable development", meaning: "Development that meets present needs without harming the ability of future generations to meet theirs." }
      ],
      qa: [
        { q: "Distinguish between renewable and non-renewable resources.", a: "Renewable resources, such as sunlight and wind, are replaced naturally and will not run out soon. Non-renewable resources, such as coal and petroleum, take millions of years to form and can be exhausted." },
        { q: "Why should resources be conserved?", a: "Resources are limited and needed by future generations too. Careful use prevents their exhaustion and protects the environment." }
      ],
      quiz: [
        { q: "Which of these is a biotic resource?", options: ["Iron ore", "Forest", "Water", "Sand"], answer: 1, explain: "Biotic resources come from living things; forests are living." },
        { q: "Which is a non-renewable resource?", options: ["Wind", "Sunlight", "Coal", "Running water"], answer: 2, explain: "Coal takes millions of years to form and cannot be replaced quickly." },
        { q: "Meeting present needs without harming future needs is called:", options: ["Sustainable development", "Industrialisation", "Urbanisation", "Exploitation"], answer: 0, explain: "This is the definition of sustainable development." },
        { q: "A thing becomes a resource when it:", options: ["Is far away", "Is very old", "Has utility for people", "Is found underground"], answer: 2, explain: "Utility, along with the technology to use it, makes something a resource." },
        { q: "Which of these is an example of conservation?", options: ["Leaving taps running", "Recycling paper", "Burning waste", "Cutting forests"], answer: 1, explain: "Recycling reduces waste and saves raw materials." }
      ]
    },
    {
      id: "natural-resources",
      title: "Natural Resources: Land, Water, Vegetation and Wildlife",
      section: "Geography",
      summary: "Land, water, natural vegetation and wildlife as natural resources: how they are used, the problems facing them and how to protect them.",
      notes: [
        {
          heading: "Land and soil",
          points: [
            "Land is used for farming, forests, pastures, settlements, roads and industries.",
            "Land use depends on relief, soil, climate and the needs of people.",
            "Land degradation is caused by deforestation, overgrazing, overuse of fertilisers and soil erosion.",
            "Soil can be protected by terrace farming, contour ploughing, planting trees and crop rotation."
          ]
        },
        {
          heading: "Water",
          points: [
            "Only a small part of the Earth's water is fresh water that people can use.",
            "Water is used for drinking, farming, industry and producing power.",
            "Water scarcity is caused by growing population, pollution and wasteful use.",
            "Rainwater harvesting and careful use help to save water."
          ]
        },
        {
          heading: "Natural vegetation and wildlife",
          points: [
            "Natural vegetation is plant life that grows on its own, without human help; its type depends on climate and soil.",
            "Forests give timber, fuel, medicines and oxygen, and prevent soil erosion.",
            "Wildlife is endangered by hunting, loss of habitat and pollution.",
            "National parks, wildlife sanctuaries and biosphere reserves protect plants and animals."
          ]
        }
      ],
      formulas: [
        "Soil conservation: terracing, contour ploughing, afforestation, crop rotation",
        "Protected areas: national parks, wildlife sanctuaries, biosphere reserves"
      ],
      terms: [
        { term: "Soil erosion", meaning: "Removal of the top layer of soil by wind or water." },
        { term: "Afforestation", meaning: "Planting trees on land that has none." },
        { term: "Rainwater harvesting", meaning: "Collecting and storing rainwater for later use." },
        { term: "Wildlife sanctuary", meaning: "An area where wild animals are protected from hunting and disturbance." }
      ],
      qa: [
        { q: "State two causes of soil erosion and two ways to prevent it.", a: "Causes: deforestation and overgrazing. Prevention: terrace farming and planting trees or shrubs on slopes." },
        { q: "Why is wildlife conservation necessary?", a: "Many species are disappearing due to hunting and loss of habitat. Wildlife keeps the balance of nature, so protected areas are needed to save it." }
      ],
      quiz: [
        { q: "Terrace farming is done to:", options: ["Increase rainfall", "Prevent soil erosion on slopes", "Grow crops in deserts", "Store grain"], answer: 1, explain: "Terraces slow down running water on hill slopes and hold the soil." },
        { q: "Natural vegetation mainly depends on:", options: ["Climate and soil", "Roads", "Population only", "Industries"], answer: 0, explain: "Temperature, rainfall and soil decide which plants grow naturally." },
        { q: "Rainwater harvesting helps to:", options: ["Cause floods", "Increase pollution", "Conserve water", "Erode soil"], answer: 2, explain: "It stores rainwater and recharges groundwater." },
        { q: "Which area is meant to protect wild animals?", options: ["Factory", "Wildlife sanctuary", "Harbour", "Market"], answer: 1, explain: "Sanctuaries protect animals from hunting and disturbance." },
        { q: "Overgrazing leads to:", options: ["Better soil", "More rainfall", "Land degradation", "Cleaner water"], answer: 2, explain: "Too much grazing strips the plant cover and exposes soil to erosion." }
      ]
    },
    {
      id: "mineral-energy-resources",
      title: "Mineral and Energy Resources",
      section: "Geography",
      summary: "Types and uses of minerals, and the conventional and non-conventional sources of energy, with the need to conserve them.",
      notes: [
        {
          heading: "Minerals",
          points: [
            "A **mineral** is a naturally occurring substance with a definite chemical make-up, obtained by mining.",
            "**Metallic minerals** include iron ore, copper and bauxite; **non-metallic** include limestone, mica and coal.",
            "Iron ore is the basis of industry; bauxite is the ore of aluminium.",
            "Minerals are limited and take very long to form, so they should be used carefully and recycled where possible."
          ]
        },
        {
          heading: "Conventional sources of energy",
          points: [
            "Coal, petroleum and natural gas are **fossil fuels** and are non-renewable.",
            "Firewood and dung cakes are used as fuel in villages.",
            "Hydroelectricity uses the flow of water and is renewable; thermal power uses coal or gas.",
            "Burning fossil fuels causes air pollution."
          ]
        },
        {
          heading: "Non-conventional sources of energy",
          points: [
            "Solar, wind, tidal, geothermal and biogas energy are renewable and cause little pollution.",
            "Solar energy is especially useful in a sunny country like India.",
            "These sources are being developed to reduce dependence on fossil fuels."
          ]
        },
        {
          heading: "Saving energy",
          points: [
            "Switch off lights and appliances when not needed.",
            "Use public transport, carpool and use energy-efficient devices."
          ]
        }
      ],
      formulas: [
        "Fossil fuels: coal, petroleum, natural gas (non-renewable)",
        "Non-conventional: solar, wind, tidal, geothermal, biogas (renewable)",
        "Bauxite is the ore of aluminium"
      ],
      terms: [
        { term: "Mineral", meaning: "A natural substance of definite composition found in the Earth's crust." },
        { term: "Fossil fuel", meaning: "Fuel formed from remains of ancient plants and animals, such as coal and petroleum." },
        { term: "Hydroelectricity", meaning: "Electricity produced from the energy of flowing water." },
        { term: "Biogas", meaning: "A fuel gas produced from animal dung and farm waste." }
      ],
      qa: [
        { q: "Why are non-conventional sources of energy important?", a: "They are renewable and cause little pollution. They reduce our dependence on fossil fuels, which are limited." },
        { q: "Name two metallic and two non-metallic minerals.", a: "Metallic: iron ore and copper. Non-metallic: limestone and mica." }
      ],
      quiz: [
        { q: "Bauxite is the ore of:", options: ["Iron", "Copper", "Aluminium", "Gold"], answer: 2, explain: "Aluminium is extracted from bauxite." },
        { q: "Which of these is a fossil fuel?", options: ["Wind", "Petroleum", "Sunlight", "Biogas"], answer: 1, explain: "Petroleum is formed from ancient remains over millions of years." },
        { q: "Which is a renewable source of energy?", options: ["Coal", "Natural gas", "Petroleum", "Solar energy"], answer: 3, explain: "Sunlight is available again and again." },
        { q: "Hydroelectricity is produced using:", options: ["Flowing water", "Coal", "Uranium only", "Dung"], answer: 0, explain: "Falling or flowing water turns turbines to make electricity." },
        { q: "Which is a non-metallic mineral?", options: ["Copper", "Iron ore", "Bauxite", "Limestone"], answer: 3, explain: "Limestone contains no metal and is used for cement." }
      ]
    },
    {
      id: "our-agriculture",
      title: "Our Agriculture",
      section: "Geography",
      summary: "Types of farming, major crops and crop seasons in India, and the modern methods and problems of Indian agriculture.",
      notes: [
        {
          heading: "Types of farming",
          points: [
            "**Subsistence farming**: crops are grown mainly for the farmer's own family.",
            "**Commercial farming**: crops are grown to be sold in the market, using more machines, fertilisers and irrigation.",
            "**Plantation farming** grows a single crop such as tea, coffee or rubber on large estates.",
            "**Shifting cultivation** clears a patch of forest, farms it for a few years and then moves on."
          ]
        },
        {
          heading: "Crop seasons and major crops",
          points: [
            "**Kharif** crops are sown with the monsoon (June–July) and harvested in autumn: rice, maize, cotton, jowar.",
            "**Rabi** crops are sown in winter (October–November) and harvested in spring: wheat, barley, gram, mustard.",
            "**Zaid** crops are grown in the short summer season between rabi and kharif: watermelon, cucumber.",
            "Punjab is known for wheat and rice and is called the 'granary of India'."
          ]
        },
        {
          heading: "Modern agriculture and problems",
          points: [
            "The **Green Revolution** of the 1960s used high-yielding seeds, fertilisers and irrigation to raise food grain output, especially in Punjab and Haryana.",
            "Farmers use tractors, tube wells, improved seeds and pesticides.",
            "Problems: dependence on rain, small land holdings, falling groundwater and overuse of chemicals.",
            "Organic farming and drip irrigation are being encouraged."
          ]
        }
      ],
      formulas: [
        "Kharif: rice, maize, cotton | Rabi: wheat, barley, mustard",
        "Green Revolution: 1960s, high-yielding seeds, strong in Punjab and Haryana"
      ],
      terms: [
        { term: "Subsistence farming", meaning: "Farming in which the crop is mainly for the family's own use." },
        { term: "Plantation", meaning: "A large estate growing one cash crop like tea or rubber." },
        { term: "Rabi crop", meaning: "A crop sown in winter and harvested in spring, such as wheat." },
        { term: "Green Revolution", meaning: "A big rise in food grain production through high-yielding seeds, fertilisers and irrigation." }
      ],
      qa: [
        { q: "Differentiate between kharif and rabi crops.", a: "Kharif crops such as rice are sown at the start of the monsoon and harvested in autumn. Rabi crops such as wheat are sown in winter and harvested in spring." },
        { q: "What was the Green Revolution?", a: "It was the rise in food grain production in the 1960s through high-yielding seeds, fertilisers and irrigation. Punjab and Haryana benefited most." }
      ],
      quiz: [
        { q: "Wheat is a:", options: ["Kharif crop", "Rabi crop", "Zaid crop", "Plantation crop"], answer: 1, explain: "Wheat is sown in winter and harvested in spring." },
        { q: "Farming for the family's own needs is:", options: ["Commercial farming", "Plantation farming", "Subsistence farming", "Mixed farming only"], answer: 2, explain: "Subsistence farmers grow mostly to feed their own household." },
        { q: "Which is a plantation crop?", options: ["Wheat", "Tea", "Gram", "Mustard"], answer: 1, explain: "Tea is grown on large estates called plantations." },
        { q: "The Green Revolution mainly increased the production of:", options: ["Food grains", "Jute", "Rubber", "Spices"], answer: 0, explain: "It raised wheat and rice output." },
        { q: "Which method saves water in farming?", options: ["Flood irrigation", "Drip irrigation", "Overgrazing", "Burning stubble"], answer: 1, explain: "Drip irrigation delivers water drop by drop to the roots." }
      ]
    },
    {
      id: "banks-and-banking",
      title: "Banks and Banking Activities",
      section: "Economics",
      summary: "What banks do, the types of banks, the role of the Reserve Bank of India, deposits and loans, and modern banking such as cheques, ATMs and UPI.",
      notes: [
        {
          heading: "Types of banks",
          points: [
            "A **bank** accepts deposits from people and gives loans.",
            "**Commercial banks** (public and private sector) serve the general public.",
            "**Cooperative banks** serve farmers, small traders and members of a society.",
            "**Regional rural banks** help farmers and rural people.",
            "The **Reserve Bank of India (RBI)** is the central bank of the country."
          ]
        },
        {
          heading: "Role of the RBI",
          points: [
            "The RBI issues currency notes (other than one-rupee notes) and controls the money supply.",
            "It supervises and guides other banks, and acts as the banker to the government and to banks.",
            "It tries to keep prices stable and the banking system safe."
          ]
        },
        {
          heading: "Deposits and loans",
          points: [
            "Deposits are of types such as **savings account**, **current account**, **fixed deposit** and **recurring deposit**.",
            "Banks pay **interest** on deposits and charge a higher interest on loans; the difference is their income.",
            "Loans are given for housing, education, farming and business, often against security."
          ]
        },
        {
          heading: "Modern banking",
          points: [
            "A **cheque** is a written order to the bank to pay a sum from the account.",
            "An **ATM** lets customers withdraw cash and check balance at any time with a card and PIN.",
            "**UPI**, net banking and mobile banking allow quick digital payments; the PIN and OTP must never be shared."
          ]
        }
      ],
      formulas: [
        "RBI = central bank of India (issues currency, controls credit)",
        "Banks: interest on loans is higher than interest on deposits",
        "Digital payments: ATM, net banking, mobile banking, UPI"
      ],
      terms: [
        { term: "Deposit", meaning: "Money kept in a bank by a customer, on which interest is earned." },
        { term: "Interest", meaning: "The extra amount paid for the use of money, on deposits or loans." },
        { term: "Cheque", meaning: "A written order directing a bank to pay a stated sum to a named person." },
        { term: "Central bank", meaning: "The apex bank that controls the money system of a country; in India it is the RBI." }
      ],
      qa: [
        { q: "Name any three functions of the Reserve Bank of India.", a: "It issues currency notes, controls the money supply and credit, and supervises other banks. It is also the banker to the government." },
        { q: "How do banks earn a profit?", a: "Banks lend money at a higher rate of interest than they pay on deposits. The difference is their income." }
      ],
      quiz: [
        { q: "The central bank of India is:", options: ["State Bank of India", "Reserve Bank of India", "Punjab National Bank", "A cooperative bank"], answer: 1, explain: "The RBI is the central bank and regulates the others." },
        { q: "Banks charge ___ interest on loans than they pay on deposits.", options: ["Less", "The same", "More", "No"], answer: 2, explain: "The gap between the two rates is the bank's income." },
        { q: "Which account is best for saving money for a fixed period at higher interest?", options: ["Current account", "Fixed deposit", "Cheque", "ATM"], answer: 1, explain: "A fixed deposit holds money for a set time and gives a higher interest." },
        { q: "A written order to a bank to pay money is a:", options: ["Cheque", "PIN", "Loan", "Deposit"], answer: 0, explain: "A cheque orders the bank to pay the named person." },
        { q: "Which should a customer never share with anyone?", options: ["Bank branch name", "Account type", "ATM PIN and OTP", "Bank's address"], answer: 2, explain: "Sharing PIN or OTP can lead to fraud." }
      ]
    },
    {
      id: "disaster-management",
      title: "Disaster Management",
      section: "Geography",
      summary: "Natural and human-made disasters, such as earthquakes, floods, droughts and fire, and how to prepare, give first aid and use the help of agencies like NDMA.",
      notes: [
        {
          heading: "What is a disaster?",
          points: [
            "A **disaster** is a sudden event that causes great loss of life and property.",
            "**Natural disasters**: earthquakes, floods, droughts, cyclones, landslides, tsunami.",
            "**Human-made disasters**: fires, industrial accidents, road and rail accidents.",
            "**Disaster management** means preparation before, action during and recovery after a disaster."
          ]
        },
        {
          heading: "Earthquakes, floods, droughts and fire",
          points: [
            "An **earthquake** is shaking of the ground caused by movement inside the Earth. During one, take shelter under a strong table and stay away from windows and buildings.",
            "**Floods** occur due to heavy rain or overflowing rivers; move to higher ground and avoid walking in flood water.",
            "A **drought** is a long period of too little rain, leading to scarcity of water and food.",
            "In a **fire**, raise the alarm, crawl low to avoid smoke, never use lifts, and call the fire brigade."
          ]
        },
        {
          heading: "First aid",
          points: [
            "**First aid** is the immediate help given to an injured person before a doctor arrives.",
            "Stop heavy bleeding by pressing a clean cloth on the wound; wash small cuts and cover them.",
            "Cool a burn under running water; do not apply ice or butter.",
            "A first-aid box should have bandages, antiseptic, cotton and scissors."
          ]
        },
        {
          heading: "Agencies",
          points: [
            "The **National Disaster Management Authority (NDMA)** frames policies and guidelines for disaster management in India.",
            "The National Disaster Response Force (NDRF) rescues people during disasters.",
            "Local help comes from the district administration, police, fire service and volunteers."
          ]
        }
      ],
      formulas: [
        "Earthquake safety: drop, cover and hold on",
        "Fire: raise alarm, stay low, do not use lifts",
        "NDMA = national policy body; NDRF = rescue force"
      ],
      terms: [
        { term: "Disaster", meaning: "A sudden calamity that causes heavy loss of life and property." },
        { term: "Earthquake", meaning: "Shaking of the Earth's surface caused by movements inside the Earth." },
        { term: "Drought", meaning: "A long spell of little or no rainfall." },
        { term: "First aid", meaning: "Immediate help given to an injured or ill person before medical care arrives." }
      ],
      qa: [
        { q: "What should you do during an earthquake if you are indoors?", a: "Take cover under a strong table or desk, protect your head and stay away from windows. Do not use lifts, and go to an open space only after the shaking stops." },
        { q: "What is the role of the NDMA?", a: "The NDMA lays down policies, plans and guidelines for managing disasters in India and coordinates preparedness across the country." }
      ],
      quiz: [
        { q: "Which of these is a human-made disaster?", options: ["Drought", "Earthquake", "Industrial fire", "Flood"], answer: 2, explain: "A factory fire is caused by human activity or error." },
        { q: "A long period of too little rain is called:", options: ["Flood", "Cyclone", "Drought", "Tsunami"], answer: 2, explain: "Drought means a long shortage of rainfall." },
        { q: "For a minor burn, the correct first aid is to:", options: ["Apply butter", "Cool it under running water", "Burst the blisters", "Apply ice directly"], answer: 1, explain: "Running water cools the burn and reduces damage." },
        { q: "During a building fire you should:", options: ["Use the lift", "Hide under a bed", "Crawl low and leave by the stairs", "Open all windows and wait"], answer: 2, explain: "Smoke rises, so staying low helps breathing; lifts can fail." },
        { q: "The body that frames national disaster policy in India is:", options: ["NDMA", "RBI", "UPSC", "NCERT"], answer: 0, explain: "The National Disaster Management Authority guides disaster policy." }
      ]
    },
    {
      id: "where-when-how",
      title: "Where, When and How",
      section: "History",
      summary: "How historians study the British period in India: sources, dates, periodisation and the way colonial records shape our view of the past.",
      notes: [
        {
          heading: "Dates and periods",
          points: [
            "History is more than a list of dates, but dates help us place events in order.",
            "Historians divide the past into periods. The old way of calling Indian history Hindu, Muslim and British periods is not accepted by most historians because it ignores the variety of each age.",
            "The British period is often called the **colonial period** because Britain ruled India as a colony."
          ]
        },
        {
          heading: "Sources of colonial history",
          points: [
            "Official records: the British kept detailed records of government orders, letters, surveys and laws.",
            "The **census**, begun in the 19th century, counted people; surveys mapped land, forests and revenue.",
            "Newspapers, diaries, letters, autobiographies, pamphlets and popular songs show what ordinary people thought.",
            "Official records show the government's view, so they must be read with care."
          ]
        },
        {
          heading: "Colonial view of India",
          points: [
            "The British believed that they were bringing progress to a backward country, and used this to justify their rule.",
            "Records from the colonial government often ignore the voices of ordinary Indians.",
            "Historians use many kinds of sources to get a fuller picture."
          ]
        }
      ],
      formulas: [
        "Colonial period: British rule in India, from the mid-18th century to 1947",
        "Key sources: official records, census, surveys, newspapers, diaries"
      ],
      terms: [
        { term: "Colonialism", meaning: "Rule by one country over another and the use of its resources." },
        { term: "Archive", meaning: "A place where old records and documents are preserved." },
        { term: "Census", meaning: "An official counting of the population." },
        { term: "Source", meaning: "Any material, written or otherwise, from which we learn about the past." }
      ],
      qa: [
        { q: "Why do historians use many sources?", a: "Each source shows one point of view. Official records show the government's side, while diaries, newspapers and songs show how people lived and felt." },
        { q: "Why should official colonial records be read carefully?", a: "They were written by the rulers and often reflect their own beliefs and interests, so the voices of ordinary Indians may be missing." }
      ],
      quiz: [
        { q: "Rule of one country over another is called:", options: ["Democracy", "Colonialism", "Federalism", "Secularism"], answer: 1, explain: "Colonialism is control of one country by another." },
        { q: "An official counting of the population is a:", options: ["Survey of forests", "Census", "Treaty", "Archive"], answer: 1, explain: "The census counts people and gathers facts about them." },
        { q: "A place where old records are kept is an:", options: ["Archive", "Assembly", "Estate", "Embassy"], answer: 0, explain: "Archives preserve old documents for study." },
        { q: "Why must colonial records be read with care?", options: ["They are written in English", "They show the rulers' point of view", "They are too short", "They have no dates"], answer: 1, explain: "The writers were the rulers, so records may be one-sided." },
        { q: "Which of these tells us about ordinary people's views?", options: ["Tax orders", "Survey maps", "Diaries and songs", "Court rules only"], answer: 2, explain: "Personal writings and songs reflect popular feelings." }
      ]
    },
    {
      id: "east-india-company",
      title: "Establishment of the East India Company in India",
      section: "History",
      summary: "How European traders came to India, how the East India Company grew from a trading company into a ruling power, and the battles of Plassey and Buxar.",
      notes: [
        {
          heading: "Coming of the Company",
          points: [
            "European traders such as the Portuguese, Dutch, French and English came to India for spices, cotton and silk.",
            "The English **East India Company** received a royal charter from Queen Elizabeth I in 1600.",
            "The Company set up trading posts (factories) at places such as Surat, Madras, Bombay and Calcutta."
          ]
        },
        {
          heading: "Trade to territory",
          points: [
            "After the decline of the Mughal Empire, regional rulers such as the Nawabs of Bengal became powerful.",
            "Conflicts over trade rights led the Company to fight Siraj-ud-Daulla, the Nawab of Bengal.",
            "The **Battle of Plassey (1757)**: the Company defeated the Nawab, helped by the betrayal of Mir Jafar.",
            "The **Battle of Buxar (1764)**: the Company defeated the combined forces of Mir Qasim, the Nawab of Awadh and the Mughal emperor.",
            "In 1765 the Company received the **diwani** (right to collect revenue) of Bengal, Bihar and Orissa."
          ]
        },
        {
          heading: "Expansion of Company rule",
          points: [
            "The Company fought a series of wars with Mysore (Hyder Ali and Tipu Sultan) and with the Marathas.",
            "Lord Wellesley introduced the **Subsidiary Alliance**: a ruler had to keep Company troops at his own expense and accept a Resident.",
            "Lord Dalhousie's **Doctrine of Lapse**: a state without a natural male heir could be taken over.",
            "Punjab was annexed after the Anglo-Sikh wars in 1849."
          ]
        }
      ],
      formulas: [
        "1600: East India Company founded",
        "1757: Battle of Plassey",
        "1764: Battle of Buxar | 1765: diwani of Bengal",
        "1849: Punjab annexed after the Second Anglo-Sikh War"
      ],
      terms: [
        { term: "Diwani", meaning: "The right to collect land revenue in a province." },
        { term: "Subsidiary Alliance", meaning: "A system by which an Indian ruler kept Company troops and gave up his independent foreign policy." },
        { term: "Doctrine of Lapse", meaning: "A policy by which a state without a natural male heir could be annexed." },
        { term: "Factory (trading post)", meaning: "A warehouse and trading base set up by merchants." }
      ],
      qa: [
        { q: "What was the importance of the Battle of Plassey?", a: "The Company defeated Siraj-ud-Daulla in 1757, helped by Mir Jafar's betrayal. It gave the Company control over Bengal and was the first step towards British rule in India." },
        { q: "What was the Subsidiary Alliance?", a: "An Indian ruler accepted Company troops in his state and paid for them, and could not keep other European allies. In effect he lost his independence." }
      ],
      quiz: [
        { q: "The Battle of Plassey was fought in:", options: ["1600", "1757", "1764", "1857"], answer: 1, explain: "Plassey took place in 1757." },
        { q: "The Company got the diwani of Bengal in:", options: ["1757", "1765", "1799", "1849"], answer: 1, explain: "After Buxar, the diwani was granted in 1765." },
        { q: "The Subsidiary Alliance was introduced by:", options: ["Lord Dalhousie", "Lord Wellesley", "Robert Clive", "Warren Hastings"], answer: 1, explain: "Wellesley used it to bring Indian states under Company control." },
        { q: "The Doctrine of Lapse is linked with:", options: ["Wellesley", "Cornwallis", "Dalhousie", "Bentinck"], answer: 2, explain: "Lord Dalhousie used the doctrine to annex states." },
        { q: "Punjab was annexed by the Company in:", options: ["1799", "1849", "1857", "1905"], answer: 1, explain: "After the Second Anglo-Sikh War, Punjab was annexed in 1849." }
      ]
    },
    {
      id: "administration-army-civil-service",
      title: "Administrative Structure, Colonial Army and Civil Administration",
      section: "History",
      summary: "How the British organised the government, army, police, courts and civil service in India, and how these served colonial interests.",
      notes: [
        {
          heading: "Structure of government",
          points: [
            "The **Governor-General** headed the Company's government in India; after 1858 the head was also called the **Viceroy**.",
            "The Regulating Act (1773) and Pitt's India Act (1784) brought the Company under the control of the British Parliament.",
            "After the revolt of 1857 the Crown took over from the Company (Government of India Act, 1858)."
          ]
        },
        {
          heading: "Army and police",
          points: [
            "The Company army was largely made up of Indian soldiers (**sepoys**) under British officers.",
            "Indians could rise only to low ranks; the top posts were kept for the British.",
            "Soldiers were drawn in large numbers from some regions after 1857, as the British trusted some communities more than others.",
            "The police was set up to maintain order and protect colonial interests."
          ]
        },
        {
          heading: "Civil service and law",
          points: [
            "Lord Cornwallis organised the civil service; its members ran districts and collected revenue.",
            "The service was later known as the **Indian Civil Service (ICS)**; the examination was held in London and very few Indians could enter.",
            "The British set up courts and a new system of laws, but rules often favoured the rulers.",
            "A District Collector handled revenue and law and order in a district."
          ]
        }
      ],
      formulas: [
        "1773: Regulating Act | 1784: Pitt's India Act",
        "1858: rule passes from the Company to the British Crown",
        "ICS = Indian Civil Service"
      ],
      terms: [
        { term: "Sepoy", meaning: "An Indian soldier in the army of the East India Company." },
        { term: "Viceroy", meaning: "The representative of the British Crown in India." },
        { term: "Collector", meaning: "The chief officer of a district who collected revenue and kept order." },
        { term: "Civil service", meaning: "The body of officials who carry out the work of government." }
      ],
      qa: [
        { q: "Why were Indians kept out of high posts in the army and civil service?", a: "The British did not trust Indians with power and wished to keep control in their own hands. Indians were kept in lower posts, and the ICS exam was held in London, so few could take part." },
        { q: "What changed in 1858?", a: "After the revolt of 1857 the British Crown took direct control of India from the East India Company, and the Governor-General became the Viceroy." }
      ],
      quiz: [
        { q: "An Indian soldier of the Company army was called a:", options: ["Zamindar", "Sepoy", "Collector", "Nawab"], answer: 1, explain: "Sepoy means an Indian soldier in European service." },
        { q: "The British Crown took over from the Company in:", options: ["1757", "1773", "1858", "1919"], answer: 2, explain: "The Government of India Act of 1858 ended Company rule." },
        { q: "The head of a district's administration was the:", options: ["Collector", "Viceroy", "Sepoy", "Governor"], answer: 0, explain: "The Collector looked after revenue and order in a district." },
        { q: "The ICS examination was held in:", options: ["Delhi", "Calcutta", "London", "Lahore"], answer: 2, explain: "Holding it in London made it hard for Indians to take part." },
        { q: "Which Act of 1773 first brought the Company under Parliament's control?", options: ["Pitt's India Act", "Regulating Act", "Charter Act of 1600", "Rowlatt Act"], answer: 1, explain: "The Regulating Act of 1773 began Parliamentary control." }
      ]
    },
    {
      id: "rural-life-and-society",
      title: "Rural Life and Society",
      section: "History",
      summary: "How British land revenue systems, commercial crops and the indigo trade affected farmers and village life in India.",
      notes: [
        {
          heading: "Land revenue systems",
          points: [
            "The Company wanted a regular and high income from land revenue.",
            "In 1793 Lord Cornwallis introduced the **Permanent Settlement** in Bengal and Bihar: **zamindars** paid a fixed revenue to the Company and collected rent from peasants.",
            "In the **Ryotwari system**, used in parts of south and western India, the cultivator (ryot) paid revenue directly to the government.",
            "In the **Mahalwari system**, used in the north, the village or estate paid the revenue together."
          ]
        },
        {
          heading: "Effects on peasants",
          points: [
            "Revenue demands were high and fixed, even when crops failed.",
            "Peasants borrowed from moneylenders and often lost their land.",
            "Many peasants were forced to grow cash crops such as indigo, cotton, opium and jute instead of food crops.",
            "Famines became frequent and deadly."
          ]
        },
        {
          heading: "Indigo cultivation",
          points: [
            "Indigo was a blue dye in great demand in Europe, as the colour was needed for cloth.",
            "Under the **nij** system planters farmed on their own land; under the **ryoti** system they forced peasants to grow indigo.",
            "Planters gave small advances and low prices, which trapped peasants in debt.",
            "In 1859–60 the peasants of Bengal refused to grow indigo in the **Indigo Revolt**."
          ]
        }
      ],
      formulas: [
        "1793: Permanent Settlement (zamindari) | Ryotwari | Mahalwari",
        "1859–60: Indigo Revolt in Bengal"
      ],
      terms: [
        { term: "Zamindar", meaning: "A landlord who collected rent from peasants and paid revenue to the Company." },
        { term: "Ryot", meaning: "A cultivator or peasant." },
        { term: "Indigo", meaning: "A plant used to make a blue dye." },
        { term: "Cash crop", meaning: "A crop grown to be sold rather than eaten, such as cotton or indigo." }
      ],
      qa: [
        { q: "What was the Permanent Settlement?", a: "In 1793 Cornwallis fixed the land revenue permanently in Bengal and Bihar. Zamindars paid this fixed sum to the Company and collected rent from the peasants." },
        { q: "Why did peasants in Bengal revolt against indigo planters?", a: "Planters forced them to grow indigo for low prices and kept them in debt. The peasants refused to grow it in 1859–60." }
      ],
      quiz: [
        { q: "The Permanent Settlement was introduced by:", options: ["Wellesley", "Cornwallis", "Dalhousie", "Canning"], answer: 1, explain: "Lord Cornwallis brought it in 1793." },
        { q: "In the Ryotwari system revenue was paid by:", options: ["Zamindars", "The whole village together", "The cultivator directly", "Moneylenders"], answer: 2, explain: "The ryot paid the government directly." },
        { q: "Indigo is used to make:", options: ["Red dye", "Blue dye", "Oil", "Medicine"], answer: 1, explain: "Indigo gives the blue colour." },
        { q: "The Indigo Revolt took place in:", options: ["Punjab", "Bengal", "Kerala", "Gujarat"], answer: 1, explain: "Peasants in Bengal rose against forced indigo growing." },
        { q: "Which of these is a cash crop?", options: ["Cotton", "Wheat for home use", "Kitchen vegetables", "Fodder"], answer: 0, explain: "Cotton was grown for sale, often for export." }
      ]
    },
    {
      id: "colonialism-tribal-society",
      title: "Colonialism and Tribal Society",
      section: "History",
      summary: "How tribal communities lived, how colonial laws and traders changed their lives, and the revolt led by Birsa Munda.",
      notes: [
        {
          heading: "Tribal life",
          points: [
            "Tribal people lived in forests and hills and followed shifting cultivation, hunting, gathering and herding.",
            "Many tribes had their own chiefs, customs and strong ties to the forest.",
            "Examples of tribal groups include the Santhals, Mundas, Gonds and Khonds."
          ]
        },
        {
          heading: "Impact of colonial rule",
          points: [
            "The British disliked shifting cultivation because it gave them little regular revenue, and tried to make tribals settle and farm.",
            "Colonial forest laws closed large forests for timber and railways, and restricted tribal use of forests.",
            "Traders and moneylenders (called **dikus** by tribals, meaning outsiders) entered tribal areas and took land through debt.",
            "Many tribals were forced to work as labourers on plantations, mines and railways."
          ]
        },
        {
          heading: "Tribal revolts and Birsa Munda",
          points: [
            "Tribal communities resisted colonial rule in many revolts, such as the Santhal rebellion of 1855.",
            "**Birsa Munda** of the Munda tribe in Chhota Nagpur led a movement around 1895–1900.",
            "He urged his people to give up evil practices, return to their own faith and fight outsiders and the loss of their land.",
            "Birsa was arrested and died in jail in 1900; later laws protected tribal land rights."
          ]
        }
      ],
      formulas: [
        "1855: Santhal rebellion",
        "Birsa Munda: led the Munda movement (c. 1895–1900), died 1900"
      ],
      terms: [
        { term: "Shifting cultivation", meaning: "Farming a patch of forest for a few years, then moving to another." },
        { term: "Diku", meaning: "Outsider; the name tribals used for moneylenders and traders who took their land." },
        { term: "Forest laws", meaning: "Rules by which the colonial government controlled use of forests." },
        { term: "Tribe", meaning: "A community with its own customs, language and way of life, often living in forests or hills." }
      ],
      qa: [
        { q: "Why did the British dislike shifting cultivation?", a: "It gave them no regular revenue and made tribals move about. The British wanted settled farming so that they could collect land revenue." },
        { q: "Who was Birsa Munda?", a: "He was a leader of the Munda tribe who led a movement against outsiders and the loss of tribal land. He died in jail in 1900." }
      ],
      quiz: [
        { q: "Birsa Munda belonged to the:", options: ["Gond tribe", "Khond tribe", "Munda tribe", "Bhil tribe"], answer: 2, explain: "Birsa was a Munda from the Chhota Nagpur region." },
        { q: "Tribals called outsiders who took their land:", options: ["Dikus", "Sepoys", "Ryots", "Zamindars"], answer: 0, explain: "Diku meant outsider." },
        { q: "Colonial forest laws:", options: ["Gave tribals full freedom", "Restricted tribal use of forests", "Banned railways", "Ended revenue"], answer: 1, explain: "Forests were reserved for timber and tribal rights were limited." },
        { q: "The Santhal rebellion took place in:", options: ["1757", "1855", "1919", "1942"], answer: 1, explain: "The Santhals rose in 1855." },
        { q: "Shifting cultivation means:", options: ["Farming in cities", "Moving to new patches of land after some years", "Growing only tea", "Fishing"], answer: 1, explain: "Farmers clear a patch, farm it, then shift." }
      ]
    },
    {
      id: "crafts-and-industries",
      title: "Crafts and Industries",
      section: "History",
      summary: "The decline of Indian handicrafts under British rule, the effect of machine-made imports, and the beginnings of modern industry such as cotton, jute and steel.",
      notes: [
        {
          heading: "Indian crafts before and under the British",
          points: [
            "India was famous for fine cotton and silk cloth such as muslin of Dhaka and calico, which were in demand in Europe.",
            "Weavers, spinners and other craftspeople supplied large markets.",
            "In Britain, the machine-powered mills of the **Industrial Revolution** made cloth cheaper.",
            "Britain placed heavy duties on Indian cloth, while British cloth entered India with little tax."
          ]
        },
        {
          heading: "Decline of handicrafts",
          points: [
            "Cheap machine-made cloth from Lancashire and Manchester hurt Indian weavers.",
            "Many craftspeople lost their work and moved to farming or the cities.",
            "Cities known for cloth, such as Dhaka and Murshidabad, declined.",
            "Raw cotton was exported to Britain and finished cloth was sent back to India."
          ]
        },
        {
          heading: "Rise of modern industry",
          points: [
            "The first cotton mill in India was set up in Bombay in 1854 and the first jute mill in Bengal.",
            "Indian entrepreneurs such as **Jamsetji Tata** set up businesses; the Tata Iron and Steel Company (TISCO) was set up at Jamshedpur in 1907.",
            "The **Swadeshi movement** encouraged Indian-made goods and helped Indian industry.",
            "Industries grew slowly because the government gave Indian businesses little support."
          ]
        }
      ],
      formulas: [
        "1854: first cotton mill in Bombay",
        "1907: TISCO set up at Jamshedpur by the Tatas",
        "Swadeshi = use of Indian-made goods"
      ],
      terms: [
        { term: "Industrial Revolution", meaning: "The change from hand production to machine production, which began in Britain." },
        { term: "Muslin", meaning: "A very fine cotton cloth, famous from Dhaka." },
        { term: "Swadeshi", meaning: "Of one's own country; use of Indian-made goods." },
        { term: "Handicraft", meaning: "Goods made by hand by skilled craftspeople." }
      ],
      qa: [
        { q: "Why did Indian handicrafts decline in the 19th century?", a: "Cheap machine-made cloth from Britain flooded the Indian market, and Indian cloth was heavily taxed abroad. Weavers lost their buyers and many lost their work." },
        { q: "Who founded the Tata Iron and Steel Company?", a: "Jamsetji Tata planned it and the company began production at Jamshedpur in 1907." }
      ],
      quiz: [
        { q: "Dhaka was famous for:", options: ["Muslin", "Steel", "Jute mills", "Tea"], answer: 0, explain: "Dhaka muslin was a very fine cotton cloth." },
        { q: "Indian handicrafts declined mainly because of:", options: ["Floods", "Cheap British machine-made goods", "Lack of cotton in India", "Excess demand"], answer: 1, explain: "Machine-made goods were cheaper than handmade ones." },
        { q: "TISCO was set up at:", options: ["Kanpur", "Jamshedpur", "Ludhiana", "Surat"], answer: 1, explain: "The steel works began at Jamshedpur in 1907." },
        { q: "The Industrial Revolution began in:", options: ["India", "France", "Britain", "China"], answer: 2, explain: "Machine production began in Britain." },
        { q: "The Swadeshi movement promoted:", options: ["Foreign cloth", "Indian-made goods", "Heavy taxes", "Plantations"], answer: 1, explain: "Swadeshi means use of one's own country's goods." }
      ]
    },
    {
      id: "revolt-of-1857",
      title: "The Revolt of 1857",
      section: "History",
      summary: "Causes, course and results of the great revolt of 1857, its leaders, and why it failed.",
      notes: [
        {
          heading: "Causes",
          points: [
            "**Political**: annexation of states through the Doctrine of Lapse and the Subsidiary Alliance angered rulers; the Mughal emperor and Nana Saheb were denied honours and pensions.",
            "**Economic**: high revenue, loss of land by peasants and the ruin of craftspeople.",
            "**Social and religious**: fear that the British were interfering with Indian faiths and customs.",
            "**Military**: sepoys were poorly paid and treated unequally; the immediate cause was the new **Enfield rifle** whose cartridges were rumoured to be greased with animal fat."
          ]
        },
        {
          heading: "Course of the revolt",
          points: [
            "The revolt began at **Meerut** on 10 May 1857, and the sepoys marched to Delhi and declared **Bahadur Shah Zafar** their leader.",
            "It spread to Kanpur, Lucknow, Jhansi, Bareilly and parts of central India.",
            "Leaders included **Rani Lakshmibai** of Jhansi, **Nana Saheb**, **Tantia Tope**, Begum Hazrat Mahal of Awadh and Kunwar Singh of Bihar.",
            "The British took back Delhi in September 1857 and put down the revolt over the next year."
          ]
        },
        {
          heading: "Results and failure",
          points: [
            "The revolt failed because it was not united across the whole country, lacked a common plan, and the British had better arms and communication.",
            "Many Indian rulers and the Sikh regiments stayed with the British.",
            "The Government of India Act (1858) ended Company rule and the Crown took over.",
            "The British promised not to interfere in religion and not to annex any more states."
          ]
        }
      ],
      formulas: [
        "10 May 1857: revolt begins at Meerut",
        "Leader at Delhi: Bahadur Shah Zafar",
        "1858: Crown takes over from the Company"
      ],
      terms: [
        { term: "Revolt of 1857", meaning: "The widespread uprising against the East India Company, which began among the sepoys at Meerut." },
        { term: "Enfield rifle", meaning: "A new rifle whose greased cartridges angered sepoys of different faiths." },
        { term: "Bahadur Shah Zafar", meaning: "The last Mughal emperor, declared leader by the rebels at Delhi." },
        { term: "Rani Lakshmibai", meaning: "The queen of Jhansi who fought bravely against the British." }
      ],
      qa: [
        { q: "State the immediate cause of the Revolt of 1857.", a: "The new Enfield rifle cartridges were believed to be greased with animal fat, which hurt the religious feelings of Hindu and Muslim sepoys." },
        { q: "Why did the revolt fail?", a: "It was not united or well planned, had no single leader for the whole country, and many rulers did not join. The British had better weapons and communications." }
      ],
      quiz: [
        { q: "The revolt of 1857 began at:", options: ["Delhi", "Meerut", "Jhansi", "Lucknow"], answer: 1, explain: "Sepoys at Meerut rose on 10 May 1857." },
        { q: "Rebels at Delhi declared ___ their leader.", options: ["Nana Saheb", "Tantia Tope", "Bahadur Shah Zafar", "Kunwar Singh"], answer: 2, explain: "The last Mughal emperor was made the symbolic head." },
        { q: "Rani Lakshmibai was the queen of:", options: ["Awadh", "Jhansi", "Kanpur", "Bihar"], answer: 1, explain: "She ruled Jhansi and fought the British." },
        { q: "After the revolt, rule passed to:", options: ["The Mughals", "The Marathas", "The British Crown", "The Nizam"], answer: 2, explain: "The Government of India Act, 1858 ended Company rule." },
        { q: "Which was a military cause of the revolt?", options: ["Enfield rifle cartridges", "Indigo planting", "Cotton mills", "The census"], answer: 0, explain: "The cartridge rumour was the spark." }
      ]
    },
    {
      id: "education-and-british-rule",
      title: "Education and British Rule",
      section: "History",
      summary: "How education changed under the British: Orientalists and Anglicists, Macaulay's minute, Wood's Despatch, and the Indian responses including national education.",
      notes: [
        {
          heading: "Early policy",
          points: [
            "Before the British, education was given in pathshalas, madrasas and gurukuls, often by local teachers.",
            "Warren Hastings and the **Orientalists** supported teaching Sanskrit, Arabic and Persian.",
            "The **Anglicists** wanted Western science and literature taught in English.",
            "In 1835 **Thomas Macaulay** argued for English education; the English Education Act of 1835 followed."
          ]
        },
        {
          heading: "Wood's Despatch and universities",
          points: [
            "**Wood's Despatch (1854)** laid out a plan for education: schools in every district, training colleges for teachers and universities.",
            "Universities were set up at Calcutta, Bombay and Madras in 1857.",
            "Education in English was meant to produce clerks for the government and to spread Western ideas.",
            "Most Indians, especially girls and the poor, still had little access to schools."
          ]
        },
        {
          heading: "Indian responses",
          points: [
            "Reformers such as **Raja Ram Mohan Roy** welcomed modern education.",
            "**Mahatma Gandhi** and others criticised an education that taught students to look down on their own culture, and spoke of education in the mother tongue.",
            "**Rabindranath Tagore** founded Santiniketan to give education close to nature and Indian art.",
            "National schools and colleges were started during the freedom struggle."
          ]
        }
      ],
      formulas: [
        "1835: Macaulay's minute; English Education Act",
        "1854: Wood's Despatch",
        "1857: universities at Calcutta, Bombay and Madras"
      ],
      terms: [
        { term: "Orientalist", meaning: "One who favoured teaching Indian classical languages and learning." },
        { term: "Anglicist", meaning: "One who favoured teaching Western subjects through English." },
        { term: "Wood's Despatch", meaning: "The 1854 plan for the development of education in India." },
        { term: "Pathshala", meaning: "A traditional village school." }
      ],
      qa: [
        { q: "What was Macaulay's view on education?", a: "Thomas Macaulay argued that Indians should be taught Western knowledge through English, so that they could help the British run the government." },
        { q: "What did Wood's Despatch recommend?", a: "It recommended schools at various levels, teacher training, and universities, and helped set up the universities at Calcutta, Bombay and Madras." }
      ],
      quiz: [
        { q: "Macaulay is associated with promoting:", options: ["Persian education", "English education", "Sanskrit education", "Technical education only"], answer: 1, explain: "He strongly backed English as the medium." },
        { q: "Wood's Despatch was issued in:", options: ["1757", "1835", "1854", "1919"], answer: 2, explain: "It came in 1854." },
        { q: "Which university was set up in 1857?", options: ["Calcutta", "Panjab University", "Banaras", "Jamia"], answer: 0, explain: "Calcutta, Bombay and Madras universities came in 1857." },
        { q: "Santiniketan was founded by:", options: ["Raja Ram Mohan Roy", "Rabindranath Tagore", "Macaulay", "Wood"], answer: 1, explain: "Tagore started it to give education near nature." },
        { q: "The Anglicists wanted:", options: ["Only Sanskrit taught", "Western learning in English", "No schools", "Teaching in Persian"], answer: 1, explain: "They favoured Western subjects taught in English." }
      ]
    },
    {
      id: "women-and-reform",
      title: "Women and Reform",
      section: "History",
      summary: "Social evils faced by women in the 19th century, the reformers who fought them, and the laws and organisations that brought change.",
      notes: [
        {
          heading: "Condition of women",
          points: [
            "Women faced evils such as **sati**, child marriage, a ban on widow remarriage and lack of education.",
            "Girls were often not allowed to go to school, and widows led hard lives.",
            "Reformers argued that these customs were not required by true religion and were harmful."
          ]
        },
        {
          heading: "Reformers and reforms",
          points: [
            "**Raja Ram Mohan Roy** campaigned against sati; a law banning it was passed in 1829 under Lord William Bentinck.",
            "**Ishwar Chandra Vidyasagar** worked for widow remarriage; the Widow Remarriage Act was passed in 1856.",
            "**Jyotirao Phule** and **Savitribai Phule** opened schools for girls and for the lower castes in Maharashtra.",
            "Social reform groups such as the Brahmo Samaj, Arya Samaj and Prarthana Samaj spoke for women's education and against child marriage.",
            "The Child Marriage Restraint Act (Sarda Act) of 1929 fixed a minimum age of marriage."
          ]
        },
        {
          heading: "Women who led the way",
          points: [
            "**Pandita Ramabai** worked for the education and welfare of widows.",
            "**Begum Rokeya** in Bengal started a school for Muslim girls and wrote against the seclusion of women.",
            "Women gradually took part in education, public life and later the freedom struggle."
          ]
        }
      ],
      formulas: [
        "1829: sati banned (Bentinck, with Ram Mohan Roy)",
        "1856: Widow Remarriage Act (Vidyasagar)",
        "1929: Child Marriage Restraint (Sarda) Act"
      ],
      terms: [
        { term: "Sati", meaning: "The old practice of a widow burning herself on her husband's funeral pyre; banned in 1829." },
        { term: "Social reform", meaning: "Efforts to remove harmful customs and improve society." },
        { term: "Widow remarriage", meaning: "The remarriage of a woman after her husband's death." },
        { term: "Brahmo Samaj", meaning: "A reform society founded by Raja Ram Mohan Roy in 1828." }
      ],
      qa: [
        { q: "What did Raja Ram Mohan Roy do for women?", a: "He campaigned against sati and supported women's education. His efforts led to the ban on sati in 1829." },
        { q: "Name two reformers who worked for women's education.", a: "Jyotirao Phule and Savitribai Phule opened schools for girls. Ishwar Chandra Vidyasagar also supported girls' education." }
      ],
      quiz: [
        { q: "Sati was banned in:", options: ["1829", "1856", "1929", "1947"], answer: 0, explain: "Bentinck's law of 1829 banned sati." },
        { q: "The Widow Remarriage Act was linked to:", options: ["Jyotirao Phule", "Ishwar Chandra Vidyasagar", "Dayanand Saraswati", "Macaulay"], answer: 1, explain: "Vidyasagar's campaign led to the 1856 Act." },
        { q: "The Brahmo Samaj was founded by:", options: ["Raja Ram Mohan Roy", "Vidyasagar", "Tagore only", "Jyotirao Phule"], answer: 0, explain: "It was founded in 1828." },
        { q: "Who opened a school for girls in Pune with her husband?", options: ["Pandita Ramabai", "Savitribai Phule", "Begum Rokeya", "Rani Lakshmibai"], answer: 1, explain: "Savitribai and Jyotirao Phule started schools for girls." },
        { q: "The Sarda Act of 1929 dealt with:", options: ["Child marriage", "Sati", "Land revenue", "Indigo"], answer: 0, explain: "It set a minimum age for marriage." }
      ]
    },
    {
      id: "challenging-caste-system",
      title: "Challenging the Caste System",
      section: "History",
      summary: "How reformers and movements questioned caste discrimination and untouchability in the 19th and 20th centuries.",
      notes: [
        {
          heading: "Caste inequalities",
          points: [
            "The caste system divided people by birth into high and low groups.",
            "Those treated as 'untouchable' were barred from temples, wells, schools and many jobs.",
            "These customs caused great suffering and held back the country."
          ]
        },
        {
          heading: "Reformers",
          points: [
            "**Jyotirao Phule** founded the **Satyashodhak Samaj** (1873) and opened schools for lower caste children.",
            "**Dr B. R. Ambedkar** led the fight for the rights of the Dalits; he led the Mahad satyagraha (1927) for the right to take water from a public tank, and later became chairman of the Drafting Committee of the Constitution.",
            "**E. V. Ramasamy (Periyar)** led the Self-Respect Movement in the south.",
            "**Sri Narayana Guru** in Kerala taught 'one caste, one religion, one God for mankind'.",
            "**Mahatma Gandhi** worked against untouchability and called Dalits **Harijans**; the term is no longer preferred."
          ]
        },
        {
          heading: "Legal change",
          points: [
            "The Constitution of India bans untouchability (Article 17) and guarantees equality.",
            "Reservations in education and jobs help communities who faced discrimination.",
            "Long years of struggle were needed, and the work of social equality continues."
          ]
        }
      ],
      formulas: [
        "1873: Satyashodhak Samaj (Jyotirao Phule)",
        "1927: Mahad satyagraha (Ambedkar)",
        "Article 17: untouchability abolished"
      ],
      terms: [
        { term: "Caste", meaning: "A hereditary social group into which a person is born." },
        { term: "Untouchability", meaning: "The unjust practice of treating certain people as impure and keeping them apart." },
        { term: "Dalit", meaning: "A member of the communities that were treated as untouchable." },
        { term: "Satyashodhak Samaj", meaning: "Society for seekers of truth, founded by Jyotirao Phule." }
      ],
      qa: [
        { q: "What was the Mahad satyagraha?", a: "In 1927 Dr Ambedkar led Dalits to take water from the public Chavdar tank at Mahad, to assert their right to use public water sources." },
        { q: "Which article of the Constitution abolishes untouchability?", a: "Article 17 abolishes untouchability, and its practice in any form is punishable by law." }
      ],
      quiz: [
        { q: "The Satyashodhak Samaj was founded by:", options: ["Gandhi", "Jyotirao Phule", "Tagore", "Periyar"], answer: 1, explain: "Phule founded it in 1873." },
        { q: "The Mahad satyagraha was led by:", options: ["B. R. Ambedkar", "Sri Narayana Guru", "Vidyasagar", "Dalhousie"], answer: 0, explain: "Ambedkar led it in 1927 for access to public water." },
        { q: "Untouchability is abolished under Article:", options: ["14", "17", "21", "32"], answer: 1, explain: "Article 17 of the Constitution abolishes it." },
        { q: "The Self-Respect Movement was led by:", options: ["Periyar", "Dayanand", "Phule", "Roy"], answer: 0, explain: "E. V. Ramasamy 'Periyar' led it in Tamil Nadu." },
        { q: "Sri Narayana Guru worked mainly in:", options: ["Punjab", "Kerala", "Assam", "Gujarat"], answer: 1, explain: "He was a reformer of Kerala." }
      ]
    },
    {
      id: "colonialism-and-urban-change",
      title: "Colonialism and Urban Change",
      section: "History",
      summary: "How colonial rule changed Indian cities: decline of old towns, growth of port cities like Calcutta, Bombay and Madras, and new towns such as hill stations and cantonments.",
      notes: [
        {
          heading: "Decline and growth of cities",
          points: [
            "Older towns such as Surat, Machilipatnam and Murshidabad declined as trade patterns shifted.",
            "Port cities **Bombay, Calcutta and Madras** became the major centres of trade and government.",
            "They became capitals of the three Presidencies of the Company.",
            "Calcutta was the capital of British India until 1911, when the capital moved to Delhi."
          ]
        },
        {
          heading: "New towns and city planning",
          points: [
            "Hill stations such as Shimla, Darjeeling and Mussoorie were built as cool retreats for the British and as military bases.",
            "**Cantonments** were army towns, and civil lines were separate quarters for the British.",
            "The British planned wide roads, parks and municipal services in their own areas, while Indian areas were crowded and neglected.",
            "Municipalities were set up to look after roads, water and sanitation."
          ]
        },
        {
          heading: "Life in the city",
          points: [
            "Railways (first line in 1853 from Bombay to Thane), telegraph and post connected cities.",
            "New professions arose: clerks, lawyers, doctors, teachers and factory workers.",
            "Cities became centres of new ideas and of the national movement.",
            "Poor workers lived in crowded chawls and slums."
          ]
        }
      ],
      formulas: [
        "Presidency cities: Bombay, Calcutta, Madras",
        "1853: first railway line (Bombay to Thane)",
        "1911: capital moved from Calcutta to Delhi"
      ],
      terms: [
        { term: "Cantonment", meaning: "A permanent military station or army town." },
        { term: "Hill station", meaning: "A town in the hills built as a cool resort." },
        { term: "Municipality", meaning: "A local body that looks after the services of a town." },
        { term: "Presidency", meaning: "A large administrative division of the Company's India, such as Bengal." }
      ],
      qa: [
        { q: "Why were hill stations developed by the British?", a: "They provided a cool climate away from the plains' heat, and served as rest places and military bases for British officers and officials." },
        { q: "Name the three Presidency cities.", a: "Calcutta, Bombay and Madras were the main port cities and centres of trade and government." }
      ],
      quiz: [
        { q: "Which of these was a Presidency city?", options: ["Lucknow", "Madras", "Jaipur", "Ludhiana"], answer: 1, explain: "Madras, Bombay and Calcutta were Presidency cities." },
        { q: "The capital of British India moved to Delhi in:", options: ["1857", "1905", "1911", "1947"], answer: 2, explain: "The shift from Calcutta to Delhi was in 1911." },
        { q: "A permanent army station is a:", options: ["Cantonment", "Market", "Chawl", "Plantation"], answer: 0, explain: "Cantonments housed troops." },
        { q: "Shimla and Darjeeling are:", options: ["Port cities", "Hill stations", "Mining towns", "Textile towns"], answer: 1, explain: "They were developed as hill stations." },
        { q: "The first railway in India ran between:", options: ["Delhi and Agra", "Bombay and Thane", "Madras and Calcutta", "Lahore and Amritsar"], answer: 1, explain: "The first train ran in 1853 from Bombay to Thane." }
      ]
    },
    {
      id: "arts-painting-literature-architecture",
      title: "Arts: Painting, Literature and Architecture",
      section: "History",
      summary: "How art, literature and building styles changed under British rule, and how Indian artists and writers developed their own national voice.",
      notes: [
        {
          heading: "Painting",
          points: [
            "Under the British, Indian painters learnt Western methods such as oil painting and realistic portraits.",
            "**Raja Ravi Varma** painted Indian gods and heroes in a realistic style, and his prints reached many homes.",
            "The **Bengal School**, led by **Abanindranath Tagore**, revived Indian styles inspired by Mughal and Rajput art.",
            "Calendar art and popular prints, such as the Kalighat paintings, were also common."
          ]
        },
        {
          heading: "Literature",
          points: [
            "Printing presses and newspapers helped literature spread in Indian languages.",
            "**Bankim Chandra Chatterjee** wrote the novel *Anandamath*, which contains the song 'Vande Mataram'.",
            "**Rabindranath Tagore** wrote poems, stories and songs and won the Nobel Prize in Literature in 1913.",
            "Writers used literature to awaken national feeling and to criticise social evils."
          ]
        },
        {
          heading: "Architecture",
          points: [
            "The British introduced European styles such as Gothic and classical in public buildings.",
            "Examples include the Victoria Memorial in Calcutta and the Gateway of India in Bombay.",
            "The **Indo-Saracenic** style mixed Indian and European features.",
            "New Delhi was planned in the early 20th century, with buildings by architects such as Edwin Lutyens."
          ]
        }
      ],
      formulas: [
        "Raja Ravi Varma: realistic paintings of Indian themes",
        "Bengal School: Abanindranath Tagore",
        "1913: Rabindranath Tagore wins the Nobel Prize in Literature"
      ],
      terms: [
        { term: "Bengal School", meaning: "A movement of artists who revived Indian styles of painting." },
        { term: "Indo-Saracenic", meaning: "A building style mixing Indian and European features." },
        { term: "Vande Mataram", meaning: "A song from Bankim Chandra Chatterjee's novel Anandamath, which became a patriotic song." },
        { term: "Realism", meaning: "Showing people and things as they appear in real life." }
      ],
      qa: [
        { q: "What was the contribution of Raja Ravi Varma?", a: "He combined Western realistic technique with Indian subjects and painted gods and scenes from the epics. His prints brought art to ordinary homes." },
        { q: "What was the Bengal School of art?", a: "It was a group of artists led by Abanindranath Tagore who turned away from European styles and revived Indian traditions of painting." }
      ],
      quiz: [
        { q: "Who painted Indian gods in a realistic style?", options: ["Raja Ravi Varma", "Abanindranath Tagore", "Lutyens", "Macaulay"], answer: 0, explain: "Ravi Varma is known for it." },
        { q: "The Bengal School was led by:", options: ["Abanindranath Tagore", "Bankim Chandra", "Phule", "Roy"], answer: 0, explain: "Abanindranath Tagore founded the Bengal School." },
        { q: "Anandamath was written by:", options: ["Tagore", "Bankim Chandra Chatterjee", "Premchand", "Iqbal"], answer: 1, explain: "The novel contains 'Vande Mataram'." },
        { q: "Tagore won the Nobel Prize in Literature in:", options: ["1857", "1905", "1913", "1930"], answer: 2, explain: "He received it in 1913." },
        { q: "The Gateway of India is in:", options: ["Calcutta", "Bombay", "Madras", "Lahore"], answer: 1, explain: "It stands in Mumbai (Bombay)." }
      ]
    },
    {
      id: "national-movement-1885-1919",
      title: "The National Movement, 1885–1919",
      section: "History",
      summary: "Birth of the Indian National Congress, Moderates and Extremists, the partition of Bengal and Swadeshi movement, and the events up to 1919.",
      notes: [
        {
          heading: "Rise of nationalism",
          points: [
            "Western education, the press, railways and the memory of 1857 helped create national feeling.",
            "British economic policies and racial discrimination angered Indians.",
            "The **Indian National Congress** was founded in **1885**; A. O. Hume, a retired British official, helped to start it and W. C. Bonnerjee was its first president."
          ]
        },
        {
          heading: "Moderates and Extremists",
          points: [
            "The early leaders, or **Moderates**, such as Dadabhai Naoroji, Gopal Krishna Gokhale and Surendranath Banerjee, used petitions, speeches and prayers.",
            "The **Extremists** such as **Bal Gangadhar Tilak**, **Bipin Chandra Pal** and **Lala Lajpat Rai** (Lal-Bal-Pal) demanded more direct action and 'swaraj'.",
            "Tilak said, 'Swaraj is my birthright and I shall have it.'"
          ]
        },
        {
          heading: "Partition of Bengal and Swadeshi",
          points: [
            "In **1905** Lord Curzon divided Bengal; Indians saw it as a way to split Hindus and Muslims.",
            "A mass protest followed, with the boycott of British goods and the promotion of **Swadeshi** goods.",
            "The partition was cancelled in 1911.",
            "The Muslim League was founded in 1906."
          ]
        },
        {
          heading: "Towards 1919",
          points: [
            "The First World War (1914–18) brought hardship, and Indians hoped for reforms.",
            "The Home Rule Leagues were started by Annie Besant and Tilak in 1916.",
            "Mahatma Gandhi returned from South Africa in 1915 and led the Champaran satyagraha in 1917."
          ]
        }
      ],
      formulas: [
        "1885: Indian National Congress founded",
        "1905: Partition of Bengal | 1911: annulled",
        "1906: Muslim League founded",
        "Lal-Bal-Pal: Lajpat Rai, Tilak, Bipin Chandra Pal"
      ],
      terms: [
        { term: "Moderates", meaning: "Early Congress leaders who sought reform through petitions and constitutional methods." },
        { term: "Extremists", meaning: "Leaders who demanded swaraj and direct action." },
        { term: "Boycott", meaning: "Refusing to buy or use certain goods, or to take part in something, as protest." },
        { term: "Swaraj", meaning: "Self-rule." }
      ],
      qa: [
        { q: "Why did Indians oppose the partition of Bengal in 1905?", a: "They believed Curzon wanted to divide Hindus and Muslims and weaken nationalism in Bengal. The protest included the boycott of British goods." },
        { q: "How did the Moderates differ from the Extremists?", a: "The Moderates used petitions and speeches and trusted British justice, while the Extremists demanded swaraj and supported boycott and direct action." }
      ],
      quiz: [
        { q: "The Indian National Congress was founded in:", options: ["1857", "1885", "1905", "1919"], answer: 1, explain: "It was founded in 1885." },
        { q: "Bengal was divided in 1905 by:", options: ["Lord Curzon", "Lord Wellesley", "Lord Dalhousie", "Lord Bentinck"], answer: 0, explain: "Curzon was Viceroy then." },
        { q: "Which of these was a Moderate leader?", options: ["Bal Gangadhar Tilak", "Gopal Krishna Gokhale", "Bipin Chandra Pal", "Lala Lajpat Rai"], answer: 1, explain: "Gokhale favoured constitutional methods." },
        { q: "The slogan 'Swaraj is my birthright' is linked to:", options: ["Gokhale", "Naoroji", "Tilak", "Hume"], answer: 2, explain: "Tilak said it." },
        { q: "The partition of Bengal was cancelled in:", options: ["1906", "1911", "1919", "1930"], answer: 1, explain: "It was annulled in 1911." }
      ]
    },
    {
      id: "struggle-for-independence-1919-1947",
      title: "The Struggle for Indian Independence, 1919–1947",
      section: "History",
      summary: "The Gandhian phase of the national movement from the Rowlatt Act and Jallianwala Bagh to Independence and Partition in 1947.",
      notes: [
        {
          heading: "Gandhi and mass movements",
          points: [
            "The **Rowlatt Act** (1919) allowed arrest without trial; Gandhi called a hartal against it.",
            "On **13 April 1919**, General Dyer's troops fired on a peaceful crowd at **Jallianwala Bagh**, Amritsar, killing many.",
            "The **Non-Cooperation Movement (1920–22)** asked Indians to boycott government schools, courts and foreign cloth; it was called off after violence at Chauri Chaura in 1922.",
            "The **Dandi March** (March–April 1930) was Gandhi's march to break the salt law and began the Civil Disobedience Movement."
          ]
        },
        {
          heading: "Towards freedom",
          points: [
            "The Congress demanded **Purna Swaraj** (complete independence) at its Lahore session in December 1929.",
            "The Government of India Act of 1935 gave provincial powers, and Congress ministries were formed in 1937.",
            "Revolutionaries such as Bhagat Singh, Sukhdev and Rajguru, and Subhas Chandra Bose with the Indian National Army, also fought for freedom.",
            "In **1942** Gandhi gave the call 'Do or Die' in the **Quit India Movement**."
          ]
        },
        {
          heading: "Independence and Partition",
          points: [
            "The Muslim League demanded a separate state, Pakistan, and communal tension grew.",
            "India became independent on **15 August 1947**, along with Partition into India and Pakistan.",
            "Partition caused huge loss of life and the migration of millions of people, including in Punjab and Bengal.",
            "Jawaharlal Nehru became the first Prime Minister and Lord Mountbatten the first Governor-General of free India."
          ]
        }
      ],
      formulas: [
        "13 April 1919: Jallianwala Bagh",
        "1920–22: Non-Cooperation Movement",
        "1930: Dandi March, Civil Disobedience",
        "1942: Quit India Movement | 15 August 1947: Independence"
      ],
      terms: [
        { term: "Satyagraha", meaning: "Gandhi's method of non-violent resistance to injustice." },
        { term: "Civil disobedience", meaning: "Peacefully refusing to obey unjust laws." },
        { term: "Purna Swaraj", meaning: "Complete independence." },
        { term: "Partition", meaning: "The division of British India into India and Pakistan in 1947." }
      ],
      qa: [
        { q: "What happened at Jallianwala Bagh?", a: "On 13 April 1919 General Dyer ordered troops to fire on a large peaceful gathering at Amritsar. Hundreds were killed, and the event shocked the whole country." },
        { q: "Why did Gandhi begin the Dandi March?", a: "Gandhi marched to Dandi in 1930 to break the salt law, which taxed a basic need. It began the Civil Disobedience Movement." }
      ],
      quiz: [
        { q: "Jallianwala Bagh massacre took place in:", options: ["1857", "1905", "1919", "1942"], answer: 2, explain: "It occurred on 13 April 1919." },
        { q: "The Non-Cooperation Movement was called off after:", options: ["Chauri Chaura", "Plassey", "Dandi", "Meerut"], answer: 0, explain: "Violence at Chauri Chaura in 1922 led Gandhi to stop it." },
        { q: "The Dandi March was against the:", options: ["Rowlatt Act", "Salt law", "Partition of Bengal", "Subsidiary Alliance"], answer: 1, explain: "It broke the salt law." },
        { q: "'Do or Die' was the call of the:", options: ["Quit India Movement", "Swadeshi Movement", "Khilafat Movement", "Home Rule Movement"], answer: 0, explain: "Gandhi gave it in 1942." },
        { q: "India became independent on:", options: ["26 January 1950", "15 August 1947", "13 April 1919", "26 November 1949"], answer: 1, explain: "Independence came on 15 August 1947." }
      ]
    },
    {
      id: "india-after-independence",
      title: "India after Independence",
      section: "History",
      summary: "The challenges faced by free India: integrating princely states, framing the Constitution, reorganising states, and building the economy.",
      notes: [
        {
          heading: "Early challenges",
          points: [
            "India faced Partition, the settling of refugees, poverty, and the task of uniting hundreds of princely states.",
            "**Sardar Vallabhbhai Patel**, the first Deputy Prime Minister, led the integration of most princely states into the Indian Union.",
            "The Constituent Assembly, headed by Dr Rajendra Prasad, framed the Constitution."
          ]
        },
        {
          heading: "Constitution and democracy",
          points: [
            "The Constitution was adopted on **26 November 1949** and came into force on **26 January 1950**, when India became a republic.",
            "Dr B. R. Ambedkar chaired the Drafting Committee.",
            "The first general elections were held in 1951–52 with universal adult franchise."
          ]
        },
        {
          heading: "Reorganisation and development",
          points: [
            "States were reorganised mainly on the basis of language, under the States Reorganisation Act of 1956; Punjab was divided on a linguistic basis in 1966, and Haryana was formed.",
            "Five Year Plans were started in 1951 to develop agriculture, industry and education.",
            "Progress was made in the Green Revolution, in science and space research, and in industry.",
            "India followed a policy of non-alignment in world affairs."
          ]
        }
      ],
      formulas: [
        "26 Nov 1949: Constitution adopted | 26 Jan 1950: in force",
        "1951: first Five Year Plan",
        "1956: States Reorganisation Act | 1966: Haryana formed from Punjab"
      ],
      terms: [
        { term: "Republic", meaning: "A country whose head of state is elected, not a hereditary ruler." },
        { term: "Princely state", meaning: "A state ruled by an Indian prince under British overlordship." },
        { term: "Five Year Plan", meaning: "A government plan for the economic development of the country over five years." },
        { term: "Non-alignment", meaning: "A policy of not joining either of the big power blocs in the Cold War." }
      ],
      qa: [
        { q: "What was Sardar Patel's role after independence?", a: "As Deputy Prime Minister and Home Minister he persuaded most princely states to join India, and so helped build a united country." },
        { q: "When did India become a republic?", a: "India became a republic on 26 January 1950, when the Constitution came into force." }
      ],
      quiz: [
        { q: "India's Constitution came into force on:", options: ["15 Aug 1947", "26 Nov 1949", "26 Jan 1950", "2 Oct 1950"], answer: 2, explain: "26 January 1950 is Republic Day." },
        { q: "Who led the integration of princely states?", options: ["Sardar Patel", "Dr Ambedkar", "Maulana Azad", "Subhas Bose"], answer: 0, explain: "Patel worked to merge the princely states." },
        { q: "The chairman of the Drafting Committee was:", options: ["Rajendra Prasad", "Nehru", "B. R. Ambedkar", "Patel"], answer: 2, explain: "Dr Ambedkar headed it." },
        { q: "The first Five Year Plan began in:", options: ["1947", "1951", "1966", "1975"], answer: 1, explain: "It started in 1951." },
        { q: "States were reorganised mainly on the basis of:", options: ["Rivers", "Language", "Rainfall", "Religion"], answer: 1, explain: "The 1956 Act reorganised states largely by language." }
      ]
    },
    {
      id: "constitution-and-law",
      title: "Constitution and Law",
      section: "Civics",
      summary: "What a Constitution is, how India's Constitution was made, its key features, the Preamble, and why rule of law matters.",
      notes: [
        {
          heading: "Meaning and making",
          points: [
            "A **Constitution** is the supreme set of rules by which a country is governed.",
            "India's Constitution was drafted by the **Constituent Assembly** (1946–49); Dr B. R. Ambedkar chaired the Drafting Committee and Dr Rajendra Prasad was the president of the Assembly.",
            "It was adopted on 26 November 1949 and came into force on 26 January 1950."
          ]
        },
        {
          heading: "Key features",
          points: [
            "India is a **sovereign, socialist, secular, democratic republic**.",
            "It gives a federal structure, with powers divided between the Centre and the states.",
            "It is a written Constitution with fundamental rights, directive principles and fundamental duties.",
            "It provides for a parliamentary form of government and an independent judiciary."
          ]
        },
        {
          heading: "Preamble and law",
          points: [
            "The **Preamble** begins with 'We, the people of India' and states the aims: justice, liberty, equality and fraternity.",
            "The **rule of law** means that all, including the government, must obey the law, and no one is above it.",
            "Laws are made by Parliament and state legislatures, enforced by the executive, and interpreted by courts."
          ]
        }
      ],
      formulas: [
        "Preamble ideals: Justice, Liberty, Equality, Fraternity",
        "Constituent Assembly: 1946–49 | Adopted: 26 Nov 1949 | In force: 26 Jan 1950"
      ],
      terms: [
        { term: "Constitution", meaning: "The fundamental law that sets up the government and states the rights and duties of citizens." },
        { term: "Preamble", meaning: "The introduction to the Constitution, stating its aims and values." },
        { term: "Sovereign", meaning: "Having full power to take decisions, free of outside control." },
        { term: "Rule of law", meaning: "The principle that everyone is equal before the law and subject to it." }
      ],
      qa: [
        { q: "What is the Preamble?", a: "The Preamble is the opening statement of the Constitution. It declares India a sovereign, socialist, secular, democratic republic and promises justice, liberty, equality and fraternity." },
        { q: "What is meant by rule of law?", a: "It means that the law is above everyone and applies equally to all citizens, rulers and officials alike." }
      ],
      quiz: [
        { q: "The Constitution of India was adopted on:", options: ["15 Aug 1947", "26 Nov 1949", "26 Jan 1950", "30 Jan 1948"], answer: 1, explain: "It was adopted on 26 November 1949." },
        { q: "The Preamble begins with the words:", options: ["We, the people of India", "India, that is Bharat", "In the name of God", "The Parliament of India"], answer: 0, explain: "These words show that the power comes from the people." },
        { q: "Which of these is not an ideal of the Preamble?", options: ["Justice", "Liberty", "Monarchy", "Fraternity"], answer: 2, explain: "India is a republic, not a monarchy." },
        { q: "Powers divided between the Centre and states is called:", options: ["Federalism", "Colonialism", "Monarchy", "Imperialism"], answer: 0, explain: "A federal structure shares power between levels." },
        { q: "President of the Constituent Assembly was:", options: ["B. R. Ambedkar", "Rajendra Prasad", "Patel", "Nehru"], answer: 1, explain: "Dr Rajendra Prasad presided over it." }
      ]
    },
    {
      id: "secularism",
      title: "Importance and Ideal of Secularism",
      section: "Civics",
      summary: "What secularism means in India, how the Constitution protects religious freedom, and why equal respect for all faiths is vital in a diverse country.",
      notes: [
        {
          heading: "Meaning of secularism",
          points: [
            "A **secular** state has no official religion and treats people of all faiths equally.",
            "Secularism means that the government does not favour or discriminate against any religion.",
            "Every person is free to follow, practise and preach their own religion, or none."
          ]
        },
        {
          heading: "Secularism in the Constitution",
          points: [
            "The word 'secular' was added to the Preamble by the 42nd Amendment in 1976, though the idea was in the Constitution from the start.",
            "**Article 25–28** (right to freedom of religion) protect the freedom of conscience and the right to practise one's religion.",
            "**Article 15** forbids discrimination on the ground of religion.",
            "Government-run educational institutions cannot give religious instruction."
          ]
        },
        {
          heading: "Why it matters",
          points: [
            "India has many religions, languages and cultures, and secularism lets people live together peacefully.",
            "It protects the minorities from being treated unfairly by the majority.",
            "The state may make laws to end harmful practices in any religion, such as untouchability.",
            "Citizens must also respect others' beliefs and avoid communal hatred."
          ]
        }
      ],
      formulas: [
        "Secular = no state religion + equal respect for all",
        "Articles 25–28: freedom of religion | Article 15: no discrimination",
        "'Secular' added to the Preamble: 1976 (42nd Amendment)"
      ],
      terms: [
        { term: "Secularism", meaning: "The principle that the state has no religion and treats all faiths equally." },
        { term: "Minority", meaning: "A group smaller in number than the rest of the population, such as a religious community." },
        { term: "Communalism", meaning: "Hatred or conflict between religious communities." },
        { term: "Freedom of conscience", meaning: "The right to hold and follow one's own beliefs." }
      ],
      qa: [
        { q: "What does a secular state mean?", a: "It is a state that has no official religion and does not favour any faith. All citizens are equal before the law, whatever their religion." },
        { q: "How does the Constitution protect religious freedom?", a: "Articles 25 to 28 give every person the freedom to profess and practise their religion, and Article 15 bans discrimination on grounds of religion." }
      ],
      quiz: [
        { q: "A secular state:", options: ["Has one official religion", "Treats all religions equally", "Bans all religions", "Supports only the majority"], answer: 1, explain: "Equal treatment of all faiths is the core of secularism." },
        { q: "The word 'secular' was added to the Preamble in:", options: ["1950", "1956", "1976", "1991"], answer: 2, explain: "The 42nd Amendment in 1976 added it." },
        { q: "Freedom of religion is in Articles:", options: ["14–18", "19–22", "25–28", "32–35"], answer: 2, explain: "Articles 25 to 28 deal with it." },
        { q: "Secularism helps India because it:", options: ["Is diverse in faiths", "Has one language", "Has no minorities", "Has no states"], answer: 0, explain: "Diverse communities need equal respect to live in peace." },
        { q: "Hatred between religious groups is called:", options: ["Secularism", "Communalism", "Federalism", "Democracy"], answer: 1, explain: "That is communalism." }
      ]
    },
    {
      id: "fundamental-rights-and-duties",
      title: "Fundamental Rights and Fundamental Duties",
      section: "Civics",
      summary: "The six fundamental rights guaranteed to citizens, how courts protect them, and the fundamental duties citizens owe to the nation.",
      notes: [
        {
          heading: "Fundamental Rights",
          points: [
            "Fundamental Rights are basic rights guaranteed by the Constitution and protected by courts.",
            "**Right to Equality** (Articles 14–18): equality before law, no discrimination, end of untouchability.",
            "**Right to Freedom** (Articles 19–22): speech, movement, assembly, profession and personal liberty.",
            "**Right against Exploitation** (Articles 23–24): bans forced labour and child labour in factories and mines.",
            "**Right to Freedom of Religion** (Articles 25–28).",
            "**Cultural and Educational Rights** (Articles 29–30) protect minorities.",
            "**Right to Constitutional Remedies** (Article 32) lets a person go to the Supreme Court if a right is violated."
          ]
        },
        {
          heading: "Right to Education",
          points: [
            "Education for children aged 6 to 14 is a fundamental right under Article 21A, added by the 86th Amendment (2002).",
            "Rights are not absolute; they have reasonable limits to protect others and public order."
          ]
        },
        {
          heading: "Fundamental Duties",
          points: [
            "Fundamental Duties were added by the 42nd Amendment in 1976 (Part IV-A, Article 51A).",
            "Duties include respecting the Constitution, the national flag and the national anthem, protecting public property and the environment, and promoting harmony.",
            "A duty to provide education to children between 6 and 14 years (for parents) was added later.",
            "Rights and duties go together: enjoying rights means respecting the rights of others."
          ]
        }
      ],
      formulas: [
        "Six Fundamental Rights: Equality, Freedom, Against Exploitation, Religion, Cultural & Educational, Constitutional Remedies",
        "Article 32: Constitutional Remedies | Article 21A: Right to Education",
        "Fundamental Duties: Article 51A (42nd Amendment, 1976)"
      ],
      terms: [
        { term: "Fundamental Rights", meaning: "Basic rights of citizens guaranteed by the Constitution." },
        { term: "Fundamental Duties", meaning: "Duties that every citizen should perform, listed in Article 51A." },
        { term: "Constitutional remedies", meaning: "The right to approach the courts to enforce one's rights." },
        { term: "Exploitation", meaning: "Unfair use of someone's labour or helplessness." }
      ],
      qa: [
        { q: "List the six Fundamental Rights.", a: "Right to Equality, Right to Freedom, Right against Exploitation, Right to Freedom of Religion, Cultural and Educational Rights, and Right to Constitutional Remedies." },
        { q: "Why are Fundamental Duties necessary?", a: "Rights can exist only when everyone respects the rights of others. Duties such as protecting public property and respecting the flag remind citizens of their responsibility towards the nation." }
      ],
      quiz: [
        { q: "Untouchability is abolished under the Right to:", options: ["Freedom", "Equality", "Religion", "Education"], answer: 1, explain: "Article 17 falls under the Right to Equality." },
        { q: "Right to Constitutional Remedies is in Article:", options: ["14", "21", "32", "51A"], answer: 2, explain: "Article 32 allows going to the Supreme Court." },
        { q: "Fundamental Duties are in Article:", options: ["51A", "32", "25", "19"], answer: 0, explain: "Article 51A lists them." },
        { q: "Employing children in dangerous factories is banned by the Right:", options: ["to Equality", "against Exploitation", "to Religion", "to Property"], answer: 1, explain: "Article 24 forbids child labour in hazardous work." },
        { q: "Right to Education covers children aged:", options: ["3 to 10", "6 to 14", "14 to 18", "10 to 16"], answer: 1, explain: "Article 21A covers ages 6 to 14." }
      ]
    },
    {
      id: "parliament",
      title: "Parliament: Structure, Role and Features",
      section: "Civics",
      summary: "The composition of the Indian Parliament, the functions of the Lok Sabha and Rajya Sabha, and how laws are made.",
      notes: [
        {
          heading: "Structure",
          points: [
            "The Parliament of India consists of the **President**, the **Lok Sabha** (House of the People) and the **Rajya Sabha** (Council of States).",
            "Members of the Lok Sabha are elected directly by the people for five years; its maximum strength is 552.",
            "Members of the Rajya Sabha are elected by the elected members of state assemblies; it is a permanent house, with one-third of its members retiring every two years.",
            "The Rajya Sabha has a maximum of 250 members and the Vice-President of India is its chairman."
          ]
        },
        {
          heading: "Functions",
          points: [
            "Parliament makes laws on the subjects of the Union List and the Concurrent List.",
            "It controls the government: the Council of Ministers is answerable to the Lok Sabha.",
            "It passes the budget and controls public money.",
            "Money bills can be introduced only in the Lok Sabha."
          ]
        },
        {
          heading: "How a law is made",
          points: [
            "A proposed law is a **bill**; it is discussed and voted on in both Houses.",
            "After passing both Houses it goes to the President for assent and becomes an **Act**.",
            "Members ask questions, hold debates and move motions to hold the government accountable.",
            "The Speaker presides over the Lok Sabha."
          ]
        }
      ],
      formulas: [
        "Parliament = President + Lok Sabha + Rajya Sabha",
        "Lok Sabha term: 5 years | Rajya Sabha: permanent house, 1/3 retire every 2 years",
        "Bill + both Houses + President's assent = Act"
      ],
      terms: [
        { term: "Lok Sabha", meaning: "The lower house of Parliament, elected directly by the people." },
        { term: "Rajya Sabha", meaning: "The upper house of Parliament, representing the states." },
        { term: "Bill", meaning: "A proposed law presented in Parliament." },
        { term: "Speaker", meaning: "The presiding officer of the Lok Sabha." }
      ],
      qa: [
        { q: "What are the two Houses of Parliament?", a: "The Lok Sabha, directly elected by the people for five years, and the Rajya Sabha, a permanent house whose members are elected by state legislators." },
        { q: "How does a bill become an Act?", a: "It is passed by both Houses of Parliament and then receives the President's assent, after which it becomes law." }
      ],
      quiz: [
        { q: "Members of the Lok Sabha are elected for:", options: ["2 years", "5 years", "6 years", "10 years"], answer: 1, explain: "The term is five years unless dissolved earlier." },
        { q: "Who presides over the Lok Sabha?", options: ["President", "Speaker", "Prime Minister", "Chief Justice"], answer: 1, explain: "The Speaker presides over it." },
        { q: "The Rajya Sabha is a:", options: ["Temporary house", "Permanent house", "State house", "Court"], answer: 1, explain: "It is never dissolved as a whole." },
        { q: "A proposed law is called a:", options: ["Bill", "Writ", "Treaty", "Veto"], answer: 0, explain: "It becomes an Act after approval." },
        { q: "Money bills can be introduced only in the:", options: ["Rajya Sabha", "Supreme Court", "Lok Sabha", "Gram Sabha"], answer: 2, explain: "The Lok Sabha controls finance." }
      ]
    },
    {
      id: "judiciary",
      title: "Judiciary: Working and Special Powers",
      section: "Civics",
      summary: "The structure of the Indian judiciary, its independence, the powers of the Supreme Court and High Courts, and public interest litigation.",
      notes: [
        {
          heading: "Structure of courts",
          points: [
            "The judiciary settles disputes and protects the Constitution and rights of citizens.",
            "The **Supreme Court** is at the top, **High Courts** are in the states, and **District and subordinate courts** are below them.",
            "India has an integrated judiciary: higher courts hear appeals from lower courts."
          ]
        },
        {
          heading: "Independence and powers",
          points: [
            "Judges are appointed on constitutional procedures and cannot be removed easily; this keeps the judiciary independent of the government.",
            "The Supreme Court is the guardian of the Constitution and of Fundamental Rights.",
            "It can issue writs, such as habeas corpus, to enforce rights.",
            "Courts can strike down laws that go against the Constitution; this is called **judicial review**."
          ]
        },
        {
          heading: "Access to justice",
          points: [
            "Civil cases deal with disputes over property, money or family matters; **criminal cases** deal with offences such as theft or murder.",
            "**Public Interest Litigation (PIL)** allows any person to approach the courts on behalf of the public or the poor.",
            "Free legal aid and Lok Adalats help poor people to get justice quickly.",
            "Everyone, including the government, is equal before the law."
          ]
        }
      ],
      formulas: [
        "Court hierarchy: Supreme Court > High Court > District Court",
        "Judicial review: courts can strike down unconstitutional laws",
        "PIL: a case on behalf of the public interest"
      ],
      terms: [
        { term: "Judiciary", meaning: "The branch of government that interprets laws and settles disputes." },
        { term: "Judicial review", meaning: "The power of courts to declare a law invalid if it breaks the Constitution." },
        { term: "Public Interest Litigation", meaning: "A case filed in court for the benefit of the public at large." },
        { term: "Writ", meaning: "A court's written order to enforce a right." }
      ],
      qa: [
        { q: "Why is an independent judiciary necessary?", a: "Judges must decide cases fairly without pressure from the government or others. This protects the rights of citizens and the Constitution." },
        { q: "What is Public Interest Litigation?", a: "It lets any citizen or group go to court on behalf of people who cannot do so themselves, for example on matters of the environment or poor people's rights." }
      ],
      quiz: [
        { q: "The highest court in India is the:", options: ["High Court", "District Court", "Supreme Court", "Lok Adalat"], answer: 2, explain: "The Supreme Court stands at the top." },
        { q: "Courts can strike down laws that break the Constitution; this is:", options: ["Judicial review", "Veto", "Impeachment", "Adjournment"], answer: 0, explain: "That power is judicial review." },
        { q: "A theft case is a:", options: ["Civil case", "Criminal case", "Tax case", "Election case"], answer: 1, explain: "Offences such as theft are criminal cases." },
        { q: "PIL stands for:", options: ["Public Interest Litigation", "Person in Law", "Public Income Levy", "Police Investigation Law"], answer: 0, explain: "It is Public Interest Litigation." },
        { q: "The Supreme Court is the guardian of:", options: ["Only taxes", "The Constitution and Fundamental Rights", "The Army", "Only the Parliament"], answer: 1, explain: "It protects the Constitution and rights." }
      ]
    },
    {
      id: "social-inequalities-and-justice",
      title: "Social Inequalities and Social Justice",
      section: "Civics",
      summary: "Forms of social inequality in India, such as caste, gender and poverty, and the laws and schemes that work for social justice.",
      notes: [
        {
          heading: "Forms of inequality",
          points: [
            "**Caste discrimination**: people treated unequally because of their birth in a certain caste.",
            "**Gender inequality**: girls and women have less access to education, jobs, health and decision-making.",
            "**Economic inequality**: some people are very rich while many live in poverty.",
            "Disabled persons and tribal communities also face disadvantages."
          ]
        },
        {
          heading: "Constitutional safeguards",
          points: [
            "The Constitution guarantees equality before the law, and bans discrimination and untouchability.",
            "**Reservations** for Scheduled Castes, Scheduled Tribes and other backward classes in education and jobs help the disadvantaged.",
            "Laws protect women against dowry, domestic violence and unequal pay.",
            "The Right to Education and the Right to Food support the poor."
          ]
        },
        {
          heading: "Working for justice",
          points: [
            "**Social justice** means fair treatment and equal opportunity for all sections of society.",
            "Government schemes such as the midday meal, free textbooks, scholarships and rural employment programmes help weaker sections.",
            "NGOs, women's groups and social movements raise awareness and help people claim their rights.",
            "Every citizen can help by ending prejudice in daily life."
          ]
        }
      ],
      formulas: [
        "Social justice = fair treatment + equal opportunity for all",
        "Safeguards: equality before law, Article 17, reservations, welfare schemes"
      ],
      terms: [
        { term: "Social justice", meaning: "Fair treatment and equal opportunities for all sections of society." },
        { term: "Discrimination", meaning: "Unfair treatment of a person because of caste, gender, religion or other differences." },
        { term: "Reservation", meaning: "A fixed share of seats or jobs for groups that have been disadvantaged." },
        { term: "Scheduled Castes and Tribes", meaning: "Groups listed in the Constitution for special protection." }
      ],
      qa: [
        { q: "Name two forms of social inequality in India.", a: "Caste discrimination and gender inequality are two forms, along with economic differences between rich and poor." },
        { q: "How does the government promote social justice?", a: "It passes laws against discrimination, provides reservations, and runs schemes such as scholarships and midday meals for weaker sections." }
      ],
      quiz: [
        { q: "Treating people unequally by birth in a caste is:", options: ["Social justice", "Discrimination", "Secularism", "Federalism"], answer: 1, explain: "It is discrimination based on caste." },
        { q: "A fixed share of seats or jobs for disadvantaged groups is:", options: ["A reservation", "A tax", "A writ", "A census"], answer: 0, explain: "Reservations aim to give equal opportunity." },
        { q: "Social justice means:", options: ["Rule by the rich", "Fair treatment and equal opportunity for all", "No laws", "Unequal wages"], answer: 1, explain: "That is the meaning of social justice." },
        { q: "Which scheme helps school children?", options: ["Midday meal", "Stamp duty", "Toll tax", "Income tax"], answer: 0, explain: "The midday meal gives children food at school." },
        { q: "Which is a form of gender inequality?", options: ["Girls denied schooling", "Equal pay", "Equal votes", "Universal education"], answer: 0, explain: "Denial of schooling to girls is a clear example." }
      ]
    }
  ]
});
