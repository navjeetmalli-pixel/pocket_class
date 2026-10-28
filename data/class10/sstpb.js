// PSEB Class 10 Social Science: History (Punjab) and Civics parts.
// Geography and Economics are added separately. Format: see CONTENT_GUIDE.md.
// `formulas` holds key dates and facts.
StudyData.add(10, "sstpb", {
  syllabus: {
    board: "PSEB",
    match: "textbook",
    books: ["PSEB Social Science, Class 10"],
    note: "Follows the PSEB 2026–27 syllabus; written from the syllabus topics, not the PSEB book's own text.",
    reviewed: false
  },
  chapters: [
    {
      id: "geo-resources-and-development",
      title: "Resources and Development",
      section: "Geography",
      summary: "What counts as a resource, how resources are classified, why planning and sustainable use matter, and how land and soils are used and conserved in India and Punjab.",
      notes: [
        {
          heading: "Types of resources",
          points: [
            "A resource is anything in the environment that can satisfy human needs, is technologically accessible, economically feasible and culturally acceptable.",
            "By **origin**: biotic (forests, animals, fisheries) and abiotic (land, water, minerals).",
            "By **exhaustibility**: renewable (solar energy, wind, water) and non-renewable (coal, petroleum, minerals).",
            "By **ownership**: individual, community, national and international.",
            "By **status of development**: potential, developed, stock and reserve."
          ]
        },
        {
          heading: "Development of resources",
          points: [
            "Resources are needed for human survival and for a good quality of life, but reckless use has caused resource depletion, social inequality and environmental problems.",
            "**Sustainable development** means development that meets present needs without damaging the ability of future generations to meet theirs.",
            "The Rio de Janeiro Earth Summit (1992) endorsed Agenda 21, asking countries to protect the environment while pursuing development.",
            "Resource planning in India involves identifying resources, planning to develop them using technology and skill, and matching the plans with national development plans."
          ]
        },
        {
          heading: "Land resources and land use",
          points: [
            "Land is a natural resource of utmost importance; it supports farming, forests, wildlife, industry and transport.",
            "Land use categories include forests, land not available for cultivation, fallow lands and **net sown area**.",
            "Net sown area is the area on which crops are actually grown and harvested. Punjab has one of the highest shares of net sown area among Indian states.",
            "Land degradation arises from deforestation, overgrazing, mining, overuse of chemical fertilisers and over-irrigation (which causes waterlogging and salinity)."
          ]
        },
        {
          heading: "Soils of India",
          points: [
            "**Alluvial soil** is the most widespread, deposited by the Indus, Ganga and Brahmaputra systems; it is fertile and suits wheat, rice and sugarcane. Punjab's soils are mainly alluvial.",
            "Older alluvium is called **bangar** and newer alluvium **khadar**; khadar is more fertile.",
            "**Black (regur) soil** forms from lava, holds moisture and is ideal for cotton.",
            "**Red and yellow soil** is formed from crystalline rocks; **laterite** forms in heavy-rain areas and suits tea and coffee; **arid soil** is sandy and saline; **forest soil** is found in hilly areas."
          ]
        },
        {
          heading: "Soil erosion and conservation",
          points: [
            "Soil erosion is the removal of soil cover by wind and water, made worse by deforestation and overgrazing.",
            "Contour ploughing, terrace farming, strip cropping and shelter belts (rows of trees) reduce erosion.",
            "Planting trees and careful use of fertilisers and water also help conserve soil."
          ]
        }
      ],
      formulas: [
        "Rio Earth Summit: 1992 (Agenda 21)",
        "Soils: alluvial (Punjab, Indo-Gangetic plain), black (cotton), red, laterite, arid, forest"
      ],
      terms: [
        { term: "Resource", meaning: "Anything in the environment that can be used to satisfy human needs, if it is technologically accessible, economically feasible and culturally acceptable." },
        { term: "Sustainable development", meaning: "Development that meets present needs without compromising the needs of future generations." },
        { term: "Net sown area", meaning: "The area on which crops are actually sown and harvested in a year." },
        { term: "Khadar", meaning: "Newer, more fertile alluvium found in river floodplains." },
        { term: "Soil erosion", meaning: "The removal of the top soil cover by running water, wind or human activity." },
        { term: "Contour ploughing", meaning: "Ploughing along the contour lines of a slope to slow down water flow and reduce soil erosion." }
      ],
      qa: [
        { q: "Why is resource planning necessary in India?", a: "Resources are distributed unevenly: some states are rich in minerals but poor in industry or water. Resources are also limited and can be exhausted. Planning ensures balanced and sustainable use of resources for all regions and for future generations." },
        { q: "Why is alluvial soil important for Punjab?", a: "Punjab lies on the alluvial plain formed by the Sutlej, Beas and Ravi. The soil is deep and fertile, rich in potash and lime, and suitable for wheat and rice, which is why Punjab is a leading agricultural state." },
        { q: "Name two methods of soil conservation.", a: "Contour ploughing (ploughing across the slope) and shelter belts (rows of trees planted to break the force of wind). Terrace farming and strip cropping are other methods." }
      ],
      quiz: [
        {
          q: "Resources that can be renewed or replenished by physical, chemical or mechanical processes are called:",
          options: ["Non-renewable resources", "Renewable resources", "Stock resources", "Abiotic resources only"],
          answer: 1,
          explain: "Solar energy, wind and water can be renewed, so they are renewable resources."
        },
        {
          q: "Which of the following is a biotic resource?",
          options: ["Minerals", "Water", "Forests", "Land"],
          answer: 2,
          explain: "Biotic resources come from the living world: forests, animals and fisheries."
        },
        {
          q: "The soil best suited to growing cotton is:",
          options: ["Alluvial soil", "Black (regur) soil", "Laterite soil", "Arid soil"],
          answer: 1,
          explain: "Black soil is made from lava, retains moisture and is ideal for cotton."
        },
        {
          q: "Agenda 21 was adopted at:",
          options: ["Stockholm Conference, 1972", "Kyoto Summit, 1997", "Rio de Janeiro Earth Summit, 1992", "Paris Conference, 2015"],
          answer: 2,
          explain: "Agenda 21 was endorsed at the 1992 Rio Earth Summit."
        },
        {
          q: "Newer, more fertile alluvium deposited by rivers is known as:",
          options: ["Bangar", "Khadar", "Regur", "Laterite"],
          answer: 1,
          explain: "Khadar is new alluvium; bangar is older and less fertile."
        },
        {
          q: "Which practice reduces soil erosion on a slope?",
          options: ["Ploughing up and down the slope", "Contour ploughing", "Removing trees", "Overgrazing"],
          answer: 1,
          explain: "Ploughing along contour lines slows runoff and holds soil."
        }
      ]
    },
    {
      id: "geo-biological-geography",
      title: "Biological Geography (Forest and Wildlife Resources)",
      section: "Geography",
      summary: "India's rich biodiversity, how flora and fauna are classified and threatened, and the laws, projects and community efforts used to conserve forests and wildlife.",
      notes: [
        {
          heading: "Biodiversity of India",
          points: [
            "India is one of the world's mega-diverse countries, with a very large variety of plants and animals.",
            "Biodiversity is essential for food, medicines, clean air and water, and the balance of ecosystems.",
            "Flora means plants and fauna means animals of a region."
          ]
        },
        {
          heading: "Categories of species",
          points: [
            "**Endangered**: species in danger of extinction (for example, the tiger and the Indian rhino).",
            "**Vulnerable**: species likely to become endangered if threats continue.",
            "**Rare**: species with small populations that may become endangered or vulnerable.",
            "**Endemic**: species found only in a particular area, often isolated by natural barriers.",
            "**Extinct**: species no longer found anywhere, such as the Asiatic cheetah in India."
          ]
        },
        {
          heading: "Types of forest",
          points: [
            "**Reserved forests** form more than half of India's forest area and are the most valuable for conservation.",
            "**Protected forests** are kept safe from further depletion; about one-third of forest land falls in this class.",
            "**Unclassed forests** are other forests and wastelands owned by government and private individuals or communities.",
            "Reserved and protected forests are also called permanent forests."
          ]
        },
        {
          heading: "Causes of decline",
          points: [
            "Large-scale clearing for agriculture, railways, roads, mining and river valley projects.",
            "Grazing, fuelwood collection, forest fires and shifting cultivation.",
            "Poaching, illegal trade in wildlife products and habitat destruction.",
            "Pollution and the spread of urban areas also reduce habitats."
          ]
        },
        {
          heading: "Conservation efforts",
          points: [
            "The **Wildlife (Protection) Act, 1972** banned hunting and protected habitats; national parks, sanctuaries and biosphere reserves were created.",
            "**Project Tiger** was launched in 1973 to save the tiger population.",
            "Community efforts include the Chipko Movement in the Himalayas, **Joint Forest Management** and protection of sacred groves.",
            "Wetlands such as Harike in Punjab, a Ramsar site, are important habitats for migratory birds."
          ]
        }
      ],
      formulas: [
        "Wildlife (Protection) Act: 1972",
        "Project Tiger: 1973",
        "Categories: endangered, vulnerable, rare, endemic, extinct"
      ],
      terms: [
        { term: "Biodiversity", meaning: "The variety of plant and animal life in a region, including all species and ecosystems." },
        { term: "Endemic species", meaning: "A species found only in a particular region and nowhere else." },
        { term: "Reserved forest", meaning: "A forest given the highest degree of protection and the largest share of India's forest area." },
        { term: "Biosphere reserve", meaning: "A protected area set up to conserve ecosystems, plants and animals along with the traditional life of local people." },
        { term: "Joint Forest Management", meaning: "A programme in which local communities work with the forest department to protect and manage forests." },
        { term: "Chipko Movement", meaning: "A movement in the Himalayas in which villagers hugged trees to stop them being felled." }
      ],
      qa: [
        { q: "Why should we conserve forests and wildlife?", a: "Forests and wildlife maintain the ecological balance, supply oxygen, water, food, timber and medicines, and support the livelihood of many communities. Their loss would harm air, soil, water and every living thing, including humans." },
        { q: "Name three causes of the decline of wildlife.", a: "Habitat destruction by clearing forests for farms, roads and industries; poaching and illegal trade; and pollution and forest fires." },
        { q: "What was the aim of Project Tiger?", a: "Launched in 1973, Project Tiger aimed to protect the tiger and its habitat by creating tiger reserves, as tiger numbers had fallen sharply because of hunting and habitat loss." }
      ],
      quiz: [
        {
          q: "Species that are found only in a particular area are called:",
          options: ["Rare species", "Endemic species", "Vulnerable species", "Extinct species"],
          answer: 1,
          explain: "Endemic species are restricted to one region, usually due to natural barriers."
        },
        {
          q: "The Wildlife (Protection) Act was passed in:",
          options: ["1952", "1962", "1972", "1986"],
          answer: 2,
          explain: "The Act was passed in 1972 and banned hunting of protected species."
        },
        {
          q: "Project Tiger was launched in:",
          options: ["1963", "1973", "1983", "1993"],
          answer: 1,
          explain: "Project Tiger began in 1973."
        },
        {
          q: "Which category of forest forms more than half of India's forest area?",
          options: ["Unclassed forest", "Protected forest", "Reserved forest", "Private forest"],
          answer: 2,
          explain: "Reserved forests make up more than half of the total forest area."
        },
        {
          q: "Harike, an important wetland for migratory birds, is in:",
          options: ["Rajasthan", "Punjab", "Kerala", "Assam"],
          answer: 1,
          explain: "Harike Wetland lies in Punjab at the confluence of the Beas and Sutlej and is a Ramsar site."
        },
        {
          q: "The Chipko Movement was started to:",
          options: ["Protect trees from being cut", "Build dams", "Promote mining", "Clear land for farming"],
          answer: 0,
          explain: "Villagers hugged trees to prevent felling."
        }
      ]
    },
    {
      id: "geo-water-resources",
      title: "Water Resources",
      section: "Geography",
      summary: "Why water is scarce in a country with many rivers, how multipurpose projects and rainwater harvesting help, and why Punjab faces a groundwater problem.",
      notes: [
        {
          heading: "Water scarcity",
          points: [
            "About three-fourths of the earth's surface is covered with water, but only a small share is fresh water usable by people.",
            "Scarcity is caused by growing population, rising demand for irrigation and industry, uneven rainfall and pollution of water bodies.",
            "Over-extraction of groundwater, mainly for irrigation, lowers the water table."
          ]
        },
        {
          heading: "Multipurpose river projects",
          points: [
            "Dams store water for irrigation, hydroelectric power, flood control, drinking water, fishing and recreation.",
            "Jawaharlal Nehru called dams the temples of modern India.",
            "**Bhakra Nangal** on the Sutlej is among India's major projects; Gobind Sagar is the reservoir behind the Bhakra dam in Himachal Pradesh.",
            "Problems: displacement of people, loss of fertile land and forests, sedimentation, and disputes between states over sharing river water."
          ]
        },
        {
          heading: "Irrigation in Punjab",
          points: [
            "Punjab is the land of five rivers; the Sutlej, Beas and Ravi flow through present-day Punjab.",
            "Canals such as the Sirhind Canal, the Bist Doab Canal and the Upper Bari Doab Canal supply canal irrigation.",
            "Tube wells, powered by electricity, now irrigate a large part of the state's cultivated land.",
            "Heavy use of tube wells for the wheat–rice rotation has caused a steep fall in the water table in many districts."
          ]
        },
        {
          heading: "Rainwater harvesting",
          points: [
            "Rainwater harvesting collects and stores rainwater for later use and recharges groundwater.",
            "Traditional methods include tanks, baolis (stepwells), ponds and the guls and kuls of the western Himalayas.",
            "Modern methods include roof-top harvesting and recharge pits, which are practised in cities and villages.",
            "Other measures: drip and sprinkler irrigation, reuse of water, and stopping pollution of rivers and canals."
          ]
        }
      ],
      formulas: [
        "Punjab's rivers: Sutlej, Beas, Ravi",
        "Bhakra dam: on the Sutlej; reservoir Gobind Sagar"
      ],
      terms: [
        { term: "Water table", meaning: "The level below which the ground is saturated with water." },
        { term: "Multipurpose project", meaning: "A river project that serves several purposes, such as irrigation, power, flood control and water supply." },
        { term: "Rainwater harvesting", meaning: "Collecting and storing rainwater for use, or channelling it underground to recharge groundwater." },
        { term: "Baoli", meaning: "A traditional stepwell used to store water." },
        { term: "Drip irrigation", meaning: "A method that delivers water drop by drop to plant roots, saving water." },
        { term: "Water scarcity", meaning: "A shortage of usable water compared with the demand for it." }
      ],
      qa: [
        { q: "Why is groundwater falling in Punjab?", a: "The wheat–rice cropping pattern needs a great deal of irrigation. Because canal water is not enough, farmers use tube wells heavily, and water is drawn out faster than rain and rivers can refill it. As a result the water table is falling." },
        { q: "State two advantages and two disadvantages of multipurpose projects.", a: "Advantages: irrigation and hydroelectric power; flood control and drinking water supply. Disadvantages: displacement of local people and loss of land and forests; silting of reservoirs and disputes between states over water sharing." },
        { q: "How does rainwater harvesting help?", a: "It stores rainwater instead of letting it run off, recharges groundwater, reduces dependence on tube wells and gives water in dry periods." }
      ],
      quiz: [
        {
          q: "The Bhakra Nangal project is built on the river:",
          options: ["Ravi", "Beas", "Sutlej", "Yamuna"],
          answer: 2,
          explain: "The Bhakra dam is on the Sutlej."
        },
        {
          q: "Who called dams the temples of modern India?",
          options: ["Mahatma Gandhi", "Jawaharlal Nehru", "Sardar Patel", "Dr B. R. Ambedkar"],
          answer: 1,
          explain: "Nehru gave dams this description because of their role in development."
        },
        {
          q: "The main reason for the falling water table in Punjab is:",
          options: ["Too much rain", "Heavy use of tube wells for irrigation", "Melting glaciers", "Too many forests"],
          answer: 1,
          explain: "Water-hungry crops and tube wells draw out more water than is replenished."
        },
        {
          q: "A baoli is a traditional:",
          options: ["Stepwell", "Dam", "Canal", "Irrigation pump"],
          answer: 0,
          explain: "Baolis are stepwells used to store water."
        },
        {
          q: "Which method of irrigation saves the most water?",
          options: ["Flood irrigation", "Drip irrigation", "Canal irrigation", "Overhead tank irrigation"],
          answer: 1,
          explain: "Drip irrigation supplies water directly to roots."
        },
        {
          q: "Which of these is NOT a purpose of a multipurpose project?",
          options: ["Flood control", "Hydroelectric power", "Irrigation", "Increasing soil erosion"],
          answer: 3,
          explain: "Dams aim to control floods and supply water and power, not to increase erosion."
        }
      ]
    },
    {
      id: "geo-agriculture",
      title: "Agriculture",
      section: "Geography",
      summary: "Types of farming, cropping seasons, major crops, the Green Revolution and the challenges facing Indian and Punjab agriculture.",
      notes: [
        {
          heading: "Types of farming",
          points: [
            "**Primitive subsistence farming** uses simple tools on small plots; shifting cultivation is an example.",
            "**Intensive subsistence farming** is done on small land with high doses of labour and inputs, to get high yields.",
            "**Commercial farming** uses high doses of modern inputs such as HYV seeds, fertilisers and pesticides; Punjab and Haryana are leading examples for rice and wheat.",
            "**Plantation agriculture** grows a single crop (tea, coffee, rubber) over a large area."
          ]
        },
        {
          heading: "Cropping seasons",
          points: [
            "**Kharif** crops are sown with the monsoon (June–July) and harvested in September–October: rice, maize, cotton, jowar, bajra.",
            "**Rabi** crops are sown in winter (October–December) and harvested in summer (April–June): wheat, barley, peas, gram, mustard.",
            "**Zaid** is a short season between rabi and kharif: watermelon, muskmelon, cucumber and fodder."
          ]
        },
        {
          heading: "Major crops",
          points: [
            "**Rice** needs high temperature and rain above about 100 cm or irrigation; leading states include West Bengal, Uttar Pradesh and Punjab.",
            "**Wheat** is the main rabi crop of the north and north-west; Uttar Pradesh, Punjab and Haryana are the main producers.",
            "**Cotton** grows best in black soil; **sugarcane** needs a hot, humid climate; **jute** is the golden fibre.",
            "**Tea** and **coffee** are plantation crops; millets (jowar, bajra, ragi) are coarse grains grown on poor soils."
          ]
        },
        {
          heading: "Green Revolution and Punjab",
          points: [
            "The Green Revolution of the 1960s introduced high yielding variety seeds, fertilisers and assured irrigation, first in Punjab, Haryana and western Uttar Pradesh.",
            "It raised wheat and rice production and made India self-sufficient in foodgrains.",
            "Punjab supplies a very large share of the wheat and rice that the government procures for the central pool.",
            "Problems include falling groundwater, soil degradation from heavy chemical use, and burning of crop residue (stubble), which causes air pollution."
          ]
        },
        {
          heading: "Challenges and reforms",
          points: [
            "Small holdings, dependence on the monsoon, debt and low prices are common problems of farmers.",
            "Institutional reforms include land reform, crop insurance, Kisan Credit Cards and minimum support prices (MSP).",
            "Crop diversification (for example maize, pulses, vegetables) and water-saving methods are suggested for Punjab."
          ]
        }
      ],
      formulas: [
        "Kharif: June–Oct (rice, cotton); Rabi: Oct–June (wheat, mustard); Zaid: summer (watermelon)",
        "Punjab: wheat–rice rotation; Green Revolution in the 1960s"
      ],
      terms: [
        { term: "Kharif", meaning: "The crop season that starts with the monsoon, with crops such as rice and cotton." },
        { term: "Rabi", meaning: "The winter-sown crop season, with crops such as wheat and mustard." },
        { term: "HYV seeds", meaning: "High yielding variety seeds that give more produce per hectare." },
        { term: "Subsistence farming", meaning: "Farming in which the produce is meant mainly for the farmer's own family." },
        { term: "Minimum Support Price", meaning: "The price at which the government is ready to buy certain crops from farmers." },
        { term: "Crop diversification", meaning: "Growing a variety of crops instead of depending on only one or two." }
      ],
      qa: [
        { q: "Why is Punjab called the granary of India?", a: "Punjab has fertile alluvial soil, assured irrigation from canals and tube wells and enterprising farmers. After the Green Revolution it produced large surpluses of wheat and rice, which supply other states through the public distribution system." },
        { q: "What problems has the wheat–rice rotation caused in Punjab?", a: "Rice needs a lot of water, so groundwater is falling. Heavy use of fertilisers and pesticides harms soil and health, and burning of paddy stubble causes air pollution. Experts therefore advise crop diversification." },
        { q: "Differentiate between kharif and rabi crops.", a: "Kharif crops are sown with the monsoon and harvested in autumn (rice, cotton, maize). Rabi crops are sown in winter and harvested in spring or summer (wheat, gram, mustard)." }
      ],
      quiz: [
        {
          q: "Which of the following is a rabi crop?",
          options: ["Rice", "Cotton", "Wheat", "Maize"],
          answer: 2,
          explain: "Wheat is sown in winter and harvested in summer."
        },
        {
          q: "The Green Revolution first succeeded mainly in:",
          options: ["Punjab, Haryana and western Uttar Pradesh", "Assam and Bengal", "Kerala and Tamil Nadu", "Rajasthan and Gujarat only"],
          answer: 0,
          explain: "Assured irrigation and HYV seeds helped these north-western states first."
        },
        {
          q: "Which crop is known as the golden fibre?",
          options: ["Cotton", "Jute", "Hemp", "Silk"],
          answer: 1,
          explain: "Jute is called the golden fibre."
        },
        {
          q: "Zaid crops are grown:",
          options: ["In winter", "During the monsoon", "In a short summer season between rabi and kharif", "Only in plantations"],
          answer: 2,
          explain: "Zaid is the short season between rabi harvest and kharif sowing."
        },
        {
          q: "Tea, coffee and rubber are examples of:",
          options: ["Plantation crops", "Rabi crops", "Coarse grains", "Pulses"],
          answer: 0,
          explain: "These are grown on large estates as a single crop."
        },
        {
          q: "Burning of paddy stubble mainly causes:",
          options: ["Soil moisture increase", "Air pollution", "More rainfall", "Flood control"],
          answer: 1,
          explain: "The smoke adds to air pollution in north India."
        }
      ]
    },
    {
      id: "geo-minerals-and-energy",
      title: "Minerals and Energy Resources",
      section: "Geography",
      summary: "Where important minerals occur, how minerals are used and conserved, and the conventional and non-conventional sources of energy, with Punjab's energy sources.",
      notes: [
        {
          heading: "What is a mineral?",
          points: [
            "A mineral is a naturally occurring substance with a definite chemical composition; most are found in ores.",
            "Minerals occur in igneous and metamorphic rocks (veins and lodes), in sedimentary rocks (layers) and as placer deposits in river sands.",
            "Minerals are classified as metallic (ferrous and non-ferrous), non-metallic and energy minerals."
          ]
        },
        {
          heading: "Important minerals",
          points: [
            "**Iron ore**: magnetite is the best quality; main belts are in Odisha, Jharkhand, Chhattisgarh, Karnataka and Goa.",
            "**Bauxite** is the ore of aluminium; **copper** is used for wires and electrical goods; **mica** is an insulator.",
            "**Limestone** is the raw material for cement and the iron and steel industry.",
            "Punjab has very few minerals; its industries depend on raw material and fuel brought from other states."
          ]
        },
        {
          heading: "Conventional sources of energy",
          points: [
            "**Coal** is the most abundant fossil fuel in India; Gondwana coal is found in Jharkhand, Odisha and Chhattisgarh.",
            "**Petroleum** comes from Mumbai High, Gujarat and Assam; **natural gas** is a clean fuel (CNG) found with petroleum.",
            "**Electricity** is produced as hydel power (water), thermal power (coal, gas) and nuclear power (uranium, thorium).",
            "Punjab gets power from the Bhakra system and other hydel plants and from thermal plants such as Ropar and Talwandi Sabo, and from the national grid."
          ]
        },
        {
          heading: "Non-conventional sources of energy",
          points: [
            "These are renewable: solar, wind, biogas, tidal and geothermal energy.",
            "India receives plentiful sunshine, making solar energy very promising, including for rooftops and farm pumps.",
            "**Biogas** from animal dung and farm waste is useful in villages, and Punjab has a large supply of crop residue and dung.",
            "Wind energy is strong in Tamil Nadu, Gujarat and Rajasthan."
          ]
        },
        {
          heading: "Conservation",
          points: [
            "Minerals and fossil fuels take millions of years to form, so they should be used carefully and recycled.",
            "Saving energy means using public transport, switching off unused appliances and using energy-efficient devices.",
            "Greater use of renewable energy reduces pollution and imports."
          ]
        }
      ],
      formulas: [
        "Best iron ore: magnetite; aluminium ore: bauxite",
        "Fossil fuels: coal, petroleum, natural gas; Renewable: solar, wind, biogas, tidal"
      ],
      terms: [
        { term: "Ore", meaning: "A rock containing enough of a mineral to be mined profitably." },
        { term: "Fossil fuel", meaning: "A fuel such as coal or petroleum formed from remains of plants and animals over millions of years." },
        { term: "Conventional energy", meaning: "Traditional, mostly non-renewable sources such as coal, petroleum and natural gas." },
        { term: "Biogas", meaning: "A fuel gas produced from animal dung and other organic waste." },
        { term: "Hydel power", meaning: "Electricity generated from the energy of flowing or falling water." },
        { term: "Placer deposit", meaning: "A mineral deposit found in river sands and valley floors." }
      ],
      qa: [
        { q: "Why should minerals be conserved?", a: "Mineral resources are limited and non-renewable, and take millions of years to form. If used carelessly they will run out. Conservation means using them wisely, avoiding waste and recycling metals." },
        { q: "Why are non-conventional sources of energy important for India?", a: "They are renewable, pollution-free and available locally, so they reduce our dependence on coal and imported oil. India has abundant sunshine, wind and biomass for them." },
        { q: "Name two sources from which Punjab gets electricity.", a: "Hydel power from the Bhakra-Beas system and thermal power plants (such as Ropar and Talwandi Sabo), plus supply from the national grid and increasing solar energy." }
      ],
      quiz: [
        {
          q: "The best quality iron ore is:",
          options: ["Haematite", "Magnetite", "Siderite", "Limonite"],
          answer: 1,
          explain: "Magnetite has the highest iron content."
        },
        {
          q: "Bauxite is the ore of:",
          options: ["Copper", "Iron", "Aluminium", "Zinc"],
          answer: 2,
          explain: "Aluminium is extracted from bauxite."
        },
        {
          q: "Which of the following is a non-conventional source of energy?",
          options: ["Coal", "Petroleum", "Natural gas", "Solar energy"],
          answer: 3,
          explain: "Solar energy is renewable and non-conventional."
        },
        {
          q: "Mumbai High is known for:",
          options: ["Coal", "Petroleum", "Uranium", "Mica"],
          answer: 1,
          explain: "Mumbai High is India's major offshore oil field."
        },
        {
          q: "Limestone is the main raw material for:",
          options: ["Cement", "Aluminium", "Jute goods", "Sugar"],
          answer: 0,
          explain: "Cement is made from limestone."
        },
        {
          q: "Biogas is produced mainly from:",
          options: ["Coal dust", "Animal dung and organic waste", "Uranium", "Sea waves"],
          answer: 1,
          explain: "Organic waste ferments to give methane-rich biogas."
        }
      ]
    },
    {
      id: "geo-manufacturing-industries",
      title: "Manufacturing Industries",
      section: "Geography",
      summary: "Why manufacturing matters, how industries are classified, major industries of India, industrial pollution, and the industries of Punjab.",
      notes: [
        {
          heading: "Importance of manufacturing",
          points: [
            "Manufacturing turns raw materials into finished goods of higher value.",
            "It creates jobs, reduces dependence on agriculture, brings in foreign exchange through exports and removes regional imbalances.",
            "Agriculture and industry are linked: industry sells machines and fertilisers to farmers and buys raw material from them."
          ]
        },
        {
          heading: "Classification of industries",
          points: [
            "By **raw material**: agro-based (cotton, jute, sugar) and mineral-based (iron and steel, cement).",
            "By **role**: basic or key industries (such as steel) supply goods to other industries; consumer industries make goods for direct use.",
            "By **ownership**: public sector, private sector, joint sector and cooperative sector.",
            "By **size**: small-scale and large-scale industries."
          ]
        },
        {
          heading: "Major industries of India",
          points: [
            "**Cotton textiles** are traditional and spread across the country; **jute** is concentrated in West Bengal.",
            "**Sugar** is a seasonal agro-based industry; **iron and steel** is the basic industry; the Tata Iron and Steel Company started at Jamshedpur in 1907.",
            "**Aluminium smelting**, **cement**, **chemical** and **fertiliser** industries are important mineral- or chemical-based industries.",
            "**IT and electronics** industries have grown fast, with Bengaluru, Hyderabad and Noida as major hubs."
          ]
        },
        {
          heading: "Industries of Punjab",
          points: [
            "Ludhiana is known for hosiery and woollen knitwear, bicycles and machine parts.",
            "Jalandhar is known for sports goods and hand tools; Amritsar for textiles and woollen goods.",
            "Mandi Gobindgarh is a centre of the steel rolling and re-rolling industry.",
            "Agro-based industries such as rice shelling, sugar and food processing use Punjab's farm produce."
          ]
        },
        {
          heading: "Industrial pollution and control",
          points: [
            "Industry causes air, water, land and noise pollution, and thermal pollution when hot water is released into rivers.",
            "Control measures: treating waste water, fitting filters and scrubbers, using cleaner fuel and following pollution control laws.",
            "Industries should be located and run so that they do not harm people and the environment."
          ]
        }
      ],
      formulas: [
        "TISCO, Jamshedpur: 1907",
        "Industry types: agro-based, mineral-based; public, private, joint, cooperative"
      ],
      terms: [
        { term: "Manufacturing", meaning: "Producing finished goods in large quantities from raw materials." },
        { term: "Agro-based industry", meaning: "An industry that uses agricultural produce as raw material, such as cotton textiles and sugar." },
        { term: "Basic industry", meaning: "An industry whose products are used as raw material by other industries, such as iron and steel." },
        { term: "Cooperative sector", meaning: "Industries owned and run by producers or workers who pool their resources." },
        { term: "Joint sector", meaning: "Industries run jointly by the government and private owners." },
        { term: "Industrial pollution", meaning: "Damage to air, water, land and noise levels caused by factories." }
      ],
      qa: [
        { q: "Why is iron and steel called a basic industry?", a: "Steel is the raw material for machines, tools, vehicles, buildings and many other industries. Other industries depend on its products, so it supports industrial growth." },
        { q: "How do industries pollute the environment? Suggest two remedies.", a: "Factories release smoke and gases that pollute air, discharge untreated waste into rivers and cause noise and land pollution. Remedies include treating effluents before release and fitting filters and scrubbers in chimneys." },
        { q: "Name any three industrial towns of Punjab and the industries they are known for.", a: "Ludhiana (hosiery, woollens, bicycles), Jalandhar (sports goods) and Mandi Gobindgarh (steel rolling)." }
      ],
      quiz: [
        {
          q: "Cotton textile and sugar are examples of:",
          options: ["Mineral-based industries", "Agro-based industries", "Joint sector industries only", "Basic industries"],
          answer: 1,
          explain: "Both use agricultural produce as raw material."
        },
        {
          q: "TISCO was set up at Jamshedpur in:",
          options: ["1857", "1907", "1947", "1991"],
          answer: 1,
          explain: "The Tata Iron and Steel Company began in 1907."
        },
        {
          q: "Which Punjab city is famous for hosiery and woollen knitwear?",
          options: ["Pathankot", "Ludhiana", "Bathinda", "Patiala"],
          answer: 1,
          explain: "Ludhiana is the hosiery and knitwear hub."
        },
        {
          q: "Which industry is called a basic or key industry?",
          options: ["Iron and steel", "Biscuits", "Toys", "Soft drinks"],
          answer: 0,
          explain: "Many other industries use steel."
        },
        {
          q: "Mandi Gobindgarh in Punjab is known for:",
          options: ["Sports goods", "Steel rolling", "Carpets", "Paper"],
          answer: 1,
          explain: "It is called the steel town of Punjab."
        },
        {
          q: "Which of these is a cooperative sector industry?",
          options: ["Industry owned and run by producers who pool resources", "Industry run only by the central government", "Industry owned by one family", "A foreign company's factory"],
          answer: 0,
          explain: "Cooperatives are owned and managed by their members."
        }
      ]
    },
    {
      id: "geo-transport-and-communication",
      title: "Transport and Communication: Lifelines of India",
      section: "Geography",
      summary: "Roadways, railways, pipelines, waterways and airways, modes of communication, and the role of trade and tourism, with Punjab's connectivity.",
      notes: [
        {
          heading: "Roadways",
          points: [
            "India has one of the largest road networks in the world; roads carry most of the country's passenger and freight traffic.",
            "Roads are classified as National Highways, State Highways, district roads and rural roads.",
            "The **Golden Quadrilateral** Super Highway links Delhi, Mumbai, Chennai and Kolkata; the Grand Trunk Road passes through Punjab, including Amritsar, Jalandhar and Ludhiana.",
            "Roads are best for short distances and door-to-door service, but suffer from congestion and accidents."
          ]
        },
        {
          heading: "Railways",
          points: [
            "Railways carry bulk goods and long-distance passengers; the first train ran from Bombay to Thane in 1853.",
            "India has one of the largest railway networks in the world, and Indian Railways is a major employer.",
            "Punjab has a dense rail network connecting it with Delhi and the rest of the country, which helps the movement of foodgrains.",
            "Problems: overcrowding, ticketless travel and theft."
          ]
        },
        {
          heading: "Pipelines, waterways and airways",
          points: [
            "**Pipelines** carry crude oil, natural gas and water cheaply and safely over long distances.",
            "**Waterways** are cheap and eco-friendly for heavy goods; National Waterway No. 1 runs on the Ganga from Prayagraj to Haldia.",
            "**Airways** are fastest and the most costly mode; they are important for remote areas and valuable cargo.",
            "Major sea ports handle most of India's foreign trade by volume."
          ]
        },
        {
          heading: "Communication",
          points: [
            "Communication includes the postal service, telephone, mobile phones, internet, radio, television and newspapers.",
            "Mass media inform and educate people; the internet and mobile phones have changed banking, shopping and learning.",
            "India's postal network is among the largest in the world."
          ]
        },
        {
          heading: "Trade and tourism",
          points: [
            "Trade is the exchange of goods and services within a country (internal trade) or between countries (international trade).",
            "India exports items such as software services, gems and jewellery, textiles and engineering goods, and imports petroleum, machinery and others.",
            "Tourism creates jobs and earns foreign exchange; Punjab attracts visitors to the Golden Temple at Amritsar, Anandpur Sahib and Jallianwala Bagh."
          ]
        }
      ],
      formulas: [
        "First railway: Bombay to Thane, 1853",
        "Golden Quadrilateral: Delhi–Mumbai–Chennai–Kolkata"
      ],
      terms: [
        { term: "National Highway", meaning: "A main road linking extreme parts of the country, maintained by the central government." },
        { term: "Golden Quadrilateral", meaning: "A super highway network connecting Delhi, Mumbai, Chennai and Kolkata." },
        { term: "Pipeline", meaning: "A line of pipes carrying liquids or gases such as oil and natural gas." },
        { term: "Mass media", meaning: "Means of communication that reach large numbers of people, such as TV, radio and newspapers." },
        { term: "Trade", meaning: "The exchange of goods and services between people, regions or countries." },
        { term: "Balance of trade", meaning: "The difference between the value of a country's exports and imports." }
      ],
      qa: [
        { q: "Why are transport and communication called the lifelines of a nation?", a: "They move people, goods and information, connect producers to markets and distant areas to each other, and thus drive trade, development and national unity." },
        { q: "Why is railway transport important in India?", a: "Railways carry bulk goods such as coal, grain and iron ore and large numbers of passengers over long distances cheaply. They link the whole country and give employment to many." },
        { q: "What is meant by the Golden Quadrilateral?", a: "It is a network of high-speed highways joining Delhi, Mumbai, Chennai and Kolkata, aimed at faster movement of goods and people between major cities." }
      ],
      quiz: [
        {
          q: "The first passenger train in India ran between:",
          options: ["Delhi and Lahore", "Bombay and Thane", "Calcutta and Delhi", "Madras and Bangalore"],
          answer: 1,
          explain: "The first train ran from Bombay to Thane in 1853."
        },
        {
          q: "The Golden Quadrilateral joins Delhi with:",
          options: ["Mumbai, Chennai and Kolkata", "Jaipur, Pune and Patna", "Amritsar, Shimla and Leh", "Bhopal, Surat and Goa"],
          answer: 0,
          explain: "It links the four metros Delhi, Mumbai, Chennai and Kolkata."
        },
        {
          q: "The fastest mode of transport is:",
          options: ["Roadways", "Railways", "Waterways", "Airways"],
          answer: 3,
          explain: "Air transport is the fastest."
        },
        {
          q: "Which of these transports crude oil over long distances cheaply?",
          options: ["Pipelines", "Bullock carts", "Airways", "Rickshaws"],
          answer: 0,
          explain: "Pipelines are safe and cheap for oil and gas."
        },
        {
          q: "National Waterway No. 1 is on the river:",
          options: ["Godavari", "Ganga", "Sutlej", "Narmada"],
          answer: 1,
          explain: "It runs on the Ganga from Prayagraj to Haldia."
        },
        {
          q: "Television, radio and newspapers are examples of:",
          options: ["Mass media", "Pipelines", "Trade routes", "Heavy industries"],
          answer: 0,
          explain: "They reach large audiences."
        }
      ]
    },
    {
      id: "eco-introduction",
      title: "Economics – an Introduction",
      section: "Economics",
      summary: "What economics studies, why scarcity forces choices, the central problems every economy faces, and the main kinds of economic system.",
      notes: [
        {
          heading: "Meaning of economics",
          points: [
            "Economics studies how people, firms and governments use limited resources to satisfy unlimited wants.",
            "Economic activities are those done to earn a living or income (farming, trade, a job); non-economic activities are done out of love or duty (a mother caring for her child).",
            "Economics is divided into **microeconomics** (individuals, households, firms) and **macroeconomics** (the whole economy: national income, inflation, unemployment)."
          ]
        },
        {
          heading: "Scarcity and choice",
          points: [
            "Human wants are unlimited, but resources are limited. This is the problem of **scarcity**.",
            "Because of scarcity we must choose which wants to satisfy first.",
            "**Opportunity cost** is the value of the next best alternative given up when a choice is made.",
            "Example: if a farmer uses a field for wheat instead of sugarcane, the income from sugarcane is the opportunity cost."
          ]
        },
        {
          heading: "Factors of production",
          points: [
            "**Land** includes all natural resources and earns rent.",
            "**Labour** is human effort, physical or mental, and earns wages.",
            "**Capital** is man-made goods used to produce more goods (machines, tools) and earns interest.",
            "**Entrepreneurship (organisation)** brings the other factors together, bears risk and earns profit."
          ]
        },
        {
          heading: "Central problems of an economy",
          points: [
            "**What to produce** and in what quantity.",
            "**How to produce**: labour-intensive or capital-intensive methods.",
            "**For whom to produce**: how the output is distributed among people.",
            "These three problems arise in every economy because resources are scarce and have alternative uses."
          ]
        },
        {
          heading: "Types of economy",
          points: [
            "In a **capitalist economy** most resources are privately owned and prices and profit guide decisions.",
            "In a **socialist economy** the government owns and controls most resources and plans production.",
            "In a **mixed economy** the public and private sectors work side by side; India follows a mixed economy."
          ]
        }
      ],
      formulas: [
        "Factors and their rewards: land - rent; labour - wages; capital - interest; entrepreneur - profit",
        "India: a mixed economy"
      ],
      terms: [
        { term: "Scarcity", meaning: "The limited availability of resources compared with unlimited human wants." },
        { term: "Opportunity cost", meaning: "The value of the next best alternative that is given up when a choice is made." },
        { term: "Microeconomics", meaning: "The study of the economic behaviour of individual households, firms and markets." },
        { term: "Macroeconomics", meaning: "The study of the economy as a whole, such as national income and inflation." },
        { term: "Mixed economy", meaning: "An economy in which both the public and private sectors play important roles." },
        { term: "Entrepreneur", meaning: "A person who organises production, takes risks and earns profit." }
      ],
      qa: [
        { q: "Why does the problem of choice arise?", a: "Wants are unlimited but resources are scarce and can be used in alternative ways. So people and governments must decide which wants to satisfy and which to leave, which is the problem of choice." },
        { q: "What is opportunity cost? Give an example.", a: "It is the value of the next best option we give up. For example, if a student spends the evening on a cricket match instead of studying, the lost study time (and its benefit) is the opportunity cost." },
        { q: "Why is India called a mixed economy?", a: "In India the public sector (owned by the government) and the private sector (owned by individuals or companies) exist together, and both contribute to production." }
      ],
      quiz: [
        {
          q: "The basic economic problem is:",
          options: ["Inflation", "Scarcity of resources", "Unemployment only", "Taxation"],
          answer: 1,
          explain: "Limited resources against unlimited wants is the root problem."
        },
        {
          q: "The reward for labour is called:",
          options: ["Rent", "Interest", "Wages", "Profit"],
          answer: 2,
          explain: "Labour earns wages."
        },
        {
          q: "The value of the next best alternative given up is:",
          options: ["Sunk cost", "Opportunity cost", "Fixed cost", "Marginal revenue"],
          answer: 1,
          explain: "This is the definition of opportunity cost."
        },
        {
          q: "Which of these is NOT a central problem of an economy?",
          options: ["What to produce", "How to produce", "For whom to produce", "Where to build a temple"],
          answer: 3,
          explain: "The three central problems are what, how and for whom to produce."
        },
        {
          q: "The study of the whole economy is called:",
          options: ["Microeconomics", "Macroeconomics", "Econometrics", "Home science"],
          answer: 1,
          explain: "Macroeconomics deals with aggregates such as national income."
        },
        {
          q: "India follows which type of economy?",
          options: ["Capitalist", "Socialist", "Mixed", "Traditional"],
          answer: 2,
          explain: "Public and private sectors coexist in India."
        }
      ]
    },
    {
      id: "eco-development-and-measurement",
      title: "Development and its Measurement",
      section: "Economics",
      summary: "What development means for different people, how it is measured by income and by other indicators such as the Human Development Index, and why sustainability matters.",
      notes: [
        {
          heading: "What development means",
          points: [
            "Different people have different developmental goals: higher income, regular work, security, respect, equal treatment and freedom.",
            "A goal that is good for one person may harm another, so development should benefit most people.",
            "Development is not only higher income; it includes better health, education and a good quality of life."
          ]
        },
        {
          heading: "Income and other criteria",
          points: [
            "Countries are often compared by **per capita income**, which is total national income divided by total population.",
            "The World Bank uses per capita income to classify countries as low, middle or high income.",
            "Average income hides inequality: two countries with the same average may have very different distributions.",
            "Other indicators include literacy rate, infant mortality rate, life expectancy, and access to health and drinking water."
          ]
        },
        {
          heading: "Human Development Index",
          points: [
            "The Human Development Report is published by the **United Nations Development Programme (UNDP)**.",
            "The HDI combines three things: health (life expectancy), education (years of schooling) and standard of living (per capita income).",
            "Countries with similar income can have different HDI ranks, because health and education also count.",
            "Kerala has a better record in literacy and health than several states with higher per capita income."
          ]
        },
        {
          heading: "Public facilities and sustainability",
          points: [
            "Basic public facilities such as schools, hospitals, safe water and the public distribution system (PDS) raise quality of life.",
            "**Sustainable development** means progress that does not harm the environment and leaves resources for future generations.",
            "Non-renewable resources like groundwater and fossil fuels can be exhausted, so careful use is needed."
          ]
        }
      ],
      formulas: [
        "Per capita income = total income of a country / total population",
        "HDI = health + education + income"
      ],
      terms: [
        { term: "Per capita income", meaning: "Average income per person: total national income divided by total population." },
        { term: "Human Development Index", meaning: "An index that measures development using life expectancy, education and per capita income." },
        { term: "Literacy rate", meaning: "The percentage of the population that can read and write." },
        { term: "Infant mortality rate", meaning: "The number of babies out of every 1000 born alive who die before their first birthday." },
        { term: "Sustainable development", meaning: "Development that meets present needs without harming the needs of future generations." },
        { term: "Public Distribution System", meaning: "A system through which the government provides foodgrains and essentials at low prices through ration shops." }
      ],
      qa: [
        { q: "Why is average income not a complete measure of development?", a: "Average income hides how income is shared; a few people may be very rich while most are poor. It also ignores health, education, safety and environmental quality, which also affect well-being." },
        { q: "What does the Human Development Index measure?", a: "It measures a country's achievement in three areas: a long and healthy life (life expectancy), knowledge (education) and a decent standard of living (income). It is published by the UNDP." },
        { q: "Why is sustainable development important?", a: "Resources like groundwater, forests and fossil fuels are limited. If they are overused today, future generations will not have them. Sustainable development balances present needs and future needs." }
      ],
      quiz: [
        {
          q: "Per capita income is:",
          options: ["Total income of the government", "Total national income divided by population", "Income of the richest person", "Income from agriculture only"],
          answer: 1,
          explain: "It is the average income per person."
        },
        {
          q: "The Human Development Report is published by:",
          options: ["World Bank", "UNDP", "RBI", "WTO"],
          answer: 1,
          explain: "The UNDP publishes the Human Development Report."
        },
        {
          q: "Which of the following is NOT part of the HDI?",
          options: ["Life expectancy", "Education", "Per capita income", "Rainfall"],
          answer: 3,
          explain: "HDI uses health, education and income."
        },
        {
          q: "Infant mortality rate refers to deaths of babies:",
          options: ["Before age 5 per 100", "Before first birthday per 1000 live births", "At age 10 per 1000", "In hospitals only"],
          answer: 1,
          explain: "It is measured per 1000 live births."
        },
        {
          q: "Sustainable development means:",
          options: ["Maximum use of resources today", "Meeting present needs without harming future generations", "Stopping all industry", "Only agricultural growth"],
          answer: 1,
          explain: "Sustainability considers future needs too."
        },
        {
          q: "Through the PDS, the government provides:",
          options: ["Foodgrains at low prices", "Free cars", "Loans to industries", "Foreign currency"],
          answer: 0,
          explain: "Ration shops supply foodgrains and essentials at low prices."
        }
      ]
    },
    {
      id: "eco-money-and-financial-system",
      title: "Money and Financial System",
      section: "Economics",
      summary: "How money replaced barter, the forms and functions of money, the role of banks and the RBI, and how formal and informal credit differ.",
      notes: [
        {
          heading: "From barter to money",
          points: [
            "In the **barter system** goods were exchanged directly for goods.",
            "Barter needs a **double coincidence of wants**: each person must want exactly what the other has to offer.",
            "Money solves this problem because it is accepted by everyone as a medium of exchange.",
            "Functions of money: medium of exchange, measure of value, store of value and standard of deferred payment."
          ]
        },
        {
          heading: "Modern forms of money",
          points: [
            "Earlier forms were grain, cattle and metal coins; today we use currency notes and coins and bank deposits.",
            "Currency is issued by the **Reserve Bank of India (RBI)**; one-rupee notes and coins are issued by the Ministry of Finance, through the RBI.",
            "Rupee notes and coins are **legal tender**: nobody in India can refuse a payment made in rupees.",
            "Deposits in bank accounts are also money, because they can be withdrawn on demand and used for payment by cheque, card or digital transfer."
          ]
        },
        {
          heading: "Banks and the financial system",
          points: [
            "Banks accept deposits from people and use a major portion of them to give loans.",
            "They pay interest on deposits and charge a higher rate on loans; the difference is their income.",
            "The RBI is India's central bank: it issues currency, supervises banks, controls the supply of money and credit and keeps the government's accounts.",
            "The financial system includes banks, cooperative societies, insurance companies and financial markets."
          ]
        },
        {
          heading: "Loans and credit",
          points: [
            "**Credit** is an agreement in which the lender supplies money, goods or services and the borrower promises to repay later with interest.",
            "Terms of credit include the interest rate, collateral, documents needed and the mode of repayment.",
            "**Collateral** is an asset (such as land or a house) that the borrower pledges as a guarantee for the loan.",
            "Formal sources (banks, cooperatives) have lower interest and are supervised by the RBI; informal sources (moneylenders, relatives) often charge high interest and are not supervised."
          ]
        },
        {
          heading: "Self Help Groups",
          points: [
            "In a Self Help Group (SHG), members, usually women of a village, save small amounts regularly and then lend to each other at reasonable interest.",
            "After some time the group can also borrow from a bank for its members.",
            "SHGs help the poor to get credit without collateral and encourage saving and self-reliance."
          ]
        }
      ],
      formulas: [
        "Functions of money: medium of exchange, measure of value, store of value, standard of deferred payment",
        "Central bank of India: RBI"
      ],
      terms: [
        { term: "Barter", meaning: "Exchange of goods for goods without using money." },
        { term: "Legal tender", meaning: "Money that cannot be refused when offered in payment of a debt." },
        { term: "Demand deposit", meaning: "Money in a bank account that can be withdrawn whenever the depositor asks." },
        { term: "Collateral", meaning: "An asset pledged by a borrower as a guarantee for repayment of a loan." },
        { term: "Reserve Bank of India", meaning: "The central bank that issues currency and regulates banks in India." },
        { term: "Self Help Group", meaning: "A small group of people who pool savings and give each other loans." }
      ],
      qa: [
        { q: "What is double coincidence of wants? Why is it a problem in barter?", a: "It means that in barter both parties must want exactly what the other has. This is hard to find, which makes exchange difficult and slow. Money removes the problem." },
        { q: "State the functions of the Reserve Bank of India.", a: "The RBI issues currency notes, acts as banker to the government and to other banks, supervises commercial banks, and controls money supply and credit in the economy." },
        { q: "Why do poor people prefer formal credit to informal credit?", a: "Formal credit charges lower interest, is supervised by the RBI and does not trap borrowers in high debt, whereas moneylenders often charge very high interest." }
      ],
      quiz: [
        {
          q: "The central bank of India is:",
          options: ["State Bank of India", "Reserve Bank of India", "Punjab National Bank", "NABARD"],
          answer: 1,
          explain: "The RBI is the central bank."
        },
        {
          q: "Which of the following is a function of money?",
          options: ["Medium of exchange", "Making the weather", "Producing goods", "Printing notes"],
          answer: 0,
          explain: "Money works as a medium of exchange, a measure and store of value."
        },
        {
          q: "An asset that a borrower pledges as security for a loan is:",
          options: ["Collateral", "Interest", "Deposit", "Premium"],
          answer: 0,
          explain: "Collateral protects the lender."
        },
        {
          q: "Barter requires:",
          options: ["Double coincidence of wants", "Digital payment", "A cheque book", "Bank accounts"],
          answer: 0,
          explain: "Both persons must want what the other offers."
        },
        {
          q: "Who issues currency notes (other than one-rupee) in India?",
          options: ["Commercial banks", "Finance Minister personally", "Reserve Bank of India", "Cooperative societies"],
          answer: 2,
          explain: "Currency notes are issued by the RBI."
        },
        {
          q: "A source of formal credit is:",
          options: ["Moneylender", "Landlord", "Commercial bank", "Relative"],
          answer: 2,
          explain: "Banks and cooperatives are formal sources."
        }
      ]
    },
    {
      id: "eco-service-sector",
      title: "Service Sector in the Indian Economy",
      section: "Economics",
      summary: "The three sectors of the economy, why the service sector has grown so fast, its major activities, and its limits in giving jobs and secure income.",
      notes: [
        {
          heading: "Three sectors",
          points: [
            "**Primary sector**: uses natural resources (agriculture, dairy, fishing, mining).",
            "**Secondary sector**: turns raw material into goods (manufacturing, construction).",
            "**Tertiary or service sector**: produces services such as transport, trade, banking, education, health and IT.",
            "GDP is the value of all final goods and services produced within a country in a year."
          ]
        },
        {
          heading: "What services include",
          points: [
            "Basic services: transport, storage, communication, banking, insurance, trade, education and health.",
            "Newer services: IT, software, BPO (call centres), tourism, media and e-commerce.",
            "Services depend on the other sectors: farm and factory goods need transport and trade."
          ]
        },
        {
          heading: "Growth of the service sector",
          points: [
            "In India the service sector now produces more than half of the GDP and is the largest sector in terms of production.",
            "Reasons for growth: rising income increases demand for services such as tourism and shopping; development of agriculture and industry needs transport, trade and finance; and the IT revolution created new services.",
            "Government policy and rising exports of IT services have also helped."
          ]
        },
        {
          heading: "Employment and quality of jobs",
          points: [
            "Although services dominate GDP, the **primary sector still employs the largest share of workers**.",
            "Some services, like IT and banking, offer well-paid skilled jobs, while many workers (shop helpers, drivers, domestic workers) earn little in the **unorganised** part.",
            "Services are not equally developed across the country; Punjab has strong trade and transport but fewer high-end service jobs than IT hubs such as Bengaluru.",
            "**Disguised unemployment** occurs when more people work on a task than needed, as on small farms; shifting some of them to other work does not reduce output."
          ]
        },
        {
          heading: "Government schemes and the unorganised sector",
          points: [
            "The Mahatma Gandhi National Rural Employment Guarantee Act (2005) promises up to 100 days of work in a year to rural households that ask for it.",
            "Unorganised workers need protection through fair wages, social security and credit."
          ]
        }
      ],
      formulas: [
        "GDP = value of all final goods and services produced in a year",
        "MGNREGA: 2005 (up to 100 days of work)"
      ],
      terms: [
        { term: "Tertiary sector", meaning: "The service sector, which includes transport, trade, banking, education, health and IT." },
        { term: "GDP", meaning: "Gross Domestic Product: the value of all final goods and services produced within a country in a year." },
        { term: "Final goods", meaning: "Goods that are ready for consumption or investment, not used up to make other goods." },
        { term: "Disguised unemployment", meaning: "A situation where more workers are engaged than actually needed, so some add nothing to output." },
        { term: "Unorganised sector", meaning: "Small, scattered units with irregular work, low pay and little job security." },
        { term: "BPO", meaning: "Business Process Outsourcing: contracting out business tasks such as customer service to another company." }
      ],
      qa: [
        { q: "Why has the service sector grown rapidly in India?", a: "Growth in farming and industry increased the need for transport, trade and banking; rising incomes raised demand for services like tourism and education; and the IT revolution and outsourcing created new services." },
        { q: "What is disguised unemployment? Give an example.", a: "It is a situation in which more people are working than needed. For example, five members of a family work on a small plot that needs only three; the two extra members add nothing to production." },
        { q: "Why is the primary sector still the largest employer even though its share in GDP is low?", a: "Many workers depend on agriculture, which has limited productivity, while services and industry have not created enough jobs to absorb them. As a result a large part of the workforce stays on the land for low income." }
      ],
      quiz: [
        {
          q: "Banking and insurance are part of the:",
          options: ["Primary sector", "Secondary sector", "Tertiary sector", "Informal sector only"],
          answer: 2,
          explain: "They are services."
        },
        {
          q: "Which sector employs the largest number of workers in India?",
          options: ["Primary", "Secondary", "Tertiary", "Defence"],
          answer: 0,
          explain: "Agriculture and allied activities employ most workers."
        },
        {
          q: "Which sector contributes the most to India's GDP?",
          options: ["Agriculture", "Manufacturing", "Services", "Mining"],
          answer: 2,
          explain: "Services contribute more than half of GDP."
        },
        {
          q: "MGNREGA promises how many days of work per year to a rural household?",
          options: ["50", "100", "200", "365"],
          answer: 1,
          explain: "The Act guarantees up to 100 days of wage work."
        },
        {
          q: "Which of the following is a secondary sector activity?",
          options: ["Dairy farming", "Making steel", "Teaching", "Fishing"],
          answer: 1,
          explain: "Manufacturing steel is a secondary activity."
        },
        {
          q: "Disguised unemployment is commonly seen in:",
          options: ["Software firms", "Small farms", "Banks", "Airlines"],
          answer: 1,
          explain: "Several family members work on a small plot though fewer are needed."
        }
      ]
    },
    {
      id: "eco-globalisation",
      title: "Globalisation",
      section: "Economics",
      summary: "How countries are linked through trade, multinational companies and investment, how India liberalised its economy in 1991, and who gains and loses from globalisation.",
      notes: [
        {
          heading: "What is globalisation?",
          points: [
            "Globalisation is the rapid integration of countries through foreign trade and foreign investment.",
            "It is helped by better transport and information technology, which makes it easy to move goods, services, money and ideas.",
            "Foreign trade connects markets, so producers can sell in other countries and consumers get more choice."
          ]
        },
        {
          heading: "Multinational companies",
          points: [
            "A **multinational company (MNC)** owns or controls production in more than one country.",
            "MNCs set up offices and factories where cost of production is low, such as where labour and land are cheaper.",
            "Foreign investment can be **FDI** (building factories in another country) or portfolio investment (buying shares).",
            "MNCs also spread production by contracting small local firms to supply parts."
          ]
        },
        {
          heading: "Liberalisation in India",
          points: [
            "Until 1991 India had many controls on imports and foreign investment to protect its producers.",
            "From 1991 India began **liberalisation**: removal of many trade barriers such as quotas and import duties, and easier rules for foreign investment.",
            "The **World Trade Organisation (WTO)**, set up in 1995, aims to make international trade freer and has rules agreed by member countries.",
            "**Special Economic Zones (SEZs)** offer facilities and tax relief to attract investment and exports."
          ]
        },
        {
          heading: "Impact of globalisation",
          points: [
            "Consumers, especially in cities, have more choice and better quality products.",
            "Large Indian companies have gained and some have become multinationals.",
            "Small producers and workers faced stiff competition from imports and job insecurity.",
            "For globalisation to be fair, the government must protect workers' rights and support small producers, and rich countries should avoid unfair trade barriers."
          ]
        }
      ],
      formulas: [
        "Liberalisation of the Indian economy: 1991",
        "WTO: set up in 1995"
      ],
      terms: [
        { term: "Globalisation", meaning: "Integration of countries through trade, investment and movement of ideas and technology." },
        { term: "Multinational company", meaning: "A company that owns or controls production in more than one country." },
        { term: "Foreign Direct Investment", meaning: "Investment made by a foreign company in setting up factories or other assets in another country." },
        { term: "Liberalisation", meaning: "Removing government restrictions on trade and investment." },
        { term: "Trade barrier", meaning: "A restriction on trade, such as a tax (tariff) or quota on imports." },
        { term: "Special Economic Zone", meaning: "An area with special facilities and tax benefits meant to attract investment and promote exports." }
      ],
      qa: [
        { q: "What is a multinational company? Why do MNCs set up production in other countries?", a: "An MNC owns or controls production in more than one country. MNCs set up units where costs are low, for example cheaper labour and land, and where there is a market and good infrastructure." },
        { q: "What is liberalisation and when did India start it?", a: "Liberalisation means reducing government controls such as quotas and high import duties, so trade and investment become freer. India began it in 1991." },
        { q: "How can globalisation be made fair?", a: "Governments should protect workers' rights and wages, help small producers to compete, and follow fair trade rules; rich countries should also reduce unfair barriers on goods from developing countries." }
      ],
      quiz: [
        {
          q: "India started liberalisation in:",
          options: ["1947", "1971", "1991", "2005"],
          answer: 2,
          explain: "Major reforms began in 1991."
        },
        {
          q: "A company that owns production units in more than one country is a:",
          options: ["Cooperative", "Multinational company", "Joint family firm", "Self Help Group"],
          answer: 1,
          explain: "That is the meaning of an MNC."
        },
        {
          q: "The WTO was set up in:",
          options: ["1945", "1975", "1995", "2015"],
          answer: 2,
          explain: "It began in 1995."
        },
        {
          q: "Foreign Direct Investment means:",
          options: ["Buying a foreign newspaper", "A foreign company setting up factories in another country", "Government borrowing", "Exporting grains"],
          answer: 1,
          explain: "FDI involves real assets abroad."
        },
        {
          q: "A trade barrier is:",
          options: ["A tax or quota on imports", "A good road", "A bank loan", "A subsidy for farmers"],
          answer: 0,
          explain: "Tariffs and quotas restrict trade."
        },
        {
          q: "Which factor helped globalisation most?",
          options: ["Improvements in transport and information technology", "Ban on foreign trade", "Fall in education", "Growth of barter"],
          answer: 0,
          explain: "Cheap transport and IT link markets."
        }
      ]
    },
    {
      id: "eco-consumer-exploitation-and-protection",
      title: "Consumer Exploitation and Protection",
      section: "Economics",
      summary: "How consumers are exploited, the rights and responsibilities of consumers, and the redressal system under the Consumer Protection Act, 2019.",
      notes: [
        {
          heading: "Consumer exploitation",
          points: [
            "A consumer is a person who buys goods or services for personal use.",
            "Consumers are exploited through adulteration, underweight or overpriced goods, misleading advertisements, defective products and poor service.",
            "Reasons include low literacy, lack of awareness and weak enforcement of rules.",
            "Consumers should be alert, as the market does not always protect their interests."
          ]
        },
        {
          heading: "Consumer rights",
          points: [
            "Right to **safety**: protection against goods and services dangerous to life and property.",
            "Right to **be informed** about quality, quantity, price and purity.",
            "Right to **choose** from a variety of goods at competitive prices.",
            "Right to **be heard**: consumer interests get due consideration at proper forums.",
            "Right to **seek redressal** against unfair practices; and right to **consumer awareness** (education)."
          ]
        },
        {
          heading: "Consumer Protection Act, 2019",
          points: [
            "The Consumer Protection Act, 2019 replaced the Act of 1986 and covers e-commerce and online sales as well.",
            "It sets up the **Central Consumer Protection Authority (CCPA)** to protect consumer rights and act against misleading advertisements and unfair trade practices.",
            "It provides for product liability, and for mediation as a way of settling disputes.",
            "A consumer can complain about defective goods, deficiency in service, unfair trade practices, overcharging and sale of hazardous goods."
          ]
        },
        {
          heading: "Consumer commissions",
          points: [
            "There is a three-tier redressal system: **District Commission**, **State Commission** and **National Commission**.",
            "Under the 2021 rules, the District Commission hears cases where the value of goods or services paid is up to ₹50 lakh, the State Commission above ₹50 lakh up to ₹2 crore, and the National Commission above ₹2 crore.",
            "A consumer unhappy with an order can appeal to the next higher commission.",
            "A complaint should normally be filed within two years of the cause of action, and it can be filed online."
          ]
        },
        {
          heading: "Responsibilities and quality marks",
          points: [
            "Consumers should ask for a bill, read labels, check expiry dates and avoid being misled by advertisements.",
            "Quality marks help: **ISI** (BIS standards) for industrial and household goods, **Agmark** for farm products, **Hallmark** for gold jewellery, and **FSSAI** for food safety.",
            "24 December is celebrated as National Consumer Day in India, and 15 March as World Consumer Rights Day."
          ]
        }
      ],
      formulas: [
        "Consumer Protection Act, 2019 (replaced the 1986 Act)",
        "Three-tier system: District, State, National Commission",
        "National Consumer Day: 24 December"
      ],
      terms: [
        { term: "Consumer", meaning: "A person who buys goods or services for personal use, not for resale." },
        { term: "Adulteration", meaning: "Mixing inferior or harmful substances into food or goods." },
        { term: "Redressal", meaning: "Relief given to a consumer for a wrong, such as a refund, replacement or compensation." },
        { term: "CCPA", meaning: "Central Consumer Protection Authority, which protects consumer rights and acts against unfair trade practices." },
        { term: "ISI mark", meaning: "A quality mark of the Bureau of Indian Standards on industrial and household goods." },
        { term: "Hallmark", meaning: "A mark certifying the purity of gold jewellery." }
      ],
      qa: [
        { q: "List any four rights of a consumer.", a: "Right to safety, right to be informed, right to choose and right to seek redressal. Right to be heard and right to consumer education are also recognised." },
        { q: "Explain the three-tier system for settling consumer disputes.", a: "Consumer disputes are handled by the District Commission, the State Commission and the National Commission. Cases start in the commission matching the value of the claim, and an order can be appealed to the higher commission." },
        { q: "How can a consumer protect himself or herself from exploitation?", a: "By being aware of rights, asking for cash memos or bills, checking labels, expiry dates and quality marks such as ISI, Agmark and Hallmark, and by filing a complaint when cheated." }
      ],
      quiz: [
        {
          q: "The Consumer Protection Act of 2019 replaced the Act of:",
          options: ["1956", "1976", "1986", "2005"],
          answer: 2,
          explain: "The 2019 Act replaced the 1986 Act."
        },
        {
          q: "The Hallmark is used for certifying:",
          options: ["Gold jewellery", "Electrical goods", "Wheat", "Medicines"],
          answer: 0,
          explain: "Hallmark certifies the purity of gold."
        },
        {
          q: "Agmark is a quality mark for:",
          options: ["Agricultural products", "Electronic items", "Cars", "Clothes"],
          answer: 0,
          explain: "Agmark is for farm produce."
        },
        {
          q: "Which body hears consumer complaints at the district level?",
          options: ["High Court", "District Commission", "Gram Panchayat", "State Commission"],
          answer: 1,
          explain: "The District Consumer Disputes Redressal Commission is the lowest tier."
        },
        {
          q: "The right to be informed means the right to know the:",
          options: ["Salary of the shopkeeper", "Quality, quantity, price and purity of goods", "Profit of the company", "Tax rate of the state"],
          answer: 1,
          explain: "Consumers must have the facts about a product."
        },
        {
          q: "National Consumer Day is celebrated on:",
          options: ["15 March", "24 December", "26 January", "5 September"],
          answer: 1,
          explain: "24 December is National Consumer Day; 15 March is World Consumer Rights Day."
        }
      ]
    },
    {
      id: "eco-financial-awareness",
      title: "Financial Awareness",
      section: "Economics",
      summary: "Everyday money skills: saving and budgeting, bank accounts, simple interest, digital payments and UPI safety, insurance basics and how to avoid financial fraud.",
      notes: [
        {
          heading: "Saving and budgeting",
          points: [
            "Saving means keeping part of income aside for future needs; it gives security and helps in emergencies.",
            "A **budget** is a plan of expected income and expenses; spend on needs first, then wants, and save regularly.",
            "Saved money should be kept in safe places such as bank accounts or post office schemes rather than at home."
          ]
        },
        {
          heading: "Banks and accounts",
          points: [
            "A **savings account** keeps money safe, earns interest and allows withdrawals; a **current account** is mainly for businesses.",
            "A **fixed deposit (FD)** keeps money for a fixed period at a fixed interest rate; a **recurring deposit (RD)** is a monthly saving scheme.",
            "The Pradhan Mantri Jan Dhan Yojana (2014) aims to give every household a bank account.",
            "Keep your KYC details (Aadhaar and PAN etc.) correct and never share account details with others."
          ]
        },
        {
          heading: "Interest",
          points: [
            "**Interest** is the price of using money: it is paid on deposits and charged on loans.",
            "**Simple interest** SI = (P × R × T) / 100, where P is the principal, R the rate per year and T the time in years.",
            "In **compound interest**, interest is added to the principal and interest is earned on interest, so money grows faster.",
            "Example: SI on ₹10,000 at 5% per year for 2 years = ₹1,000."
          ]
        },
        {
          heading: "Digital payments and UPI safety",
          points: [
            "UPI (Unified Payments Interface), developed by the NPCI, lets people send money instantly from a mobile phone using a UPI ID or QR code.",
            "Other digital modes: debit and credit cards, net banking, mobile wallets.",
            "Never share your **UPI PIN, card PIN, CVV or OTP** with anyone, even someone claiming to be from the bank.",
            "You do **not** need to enter a PIN to receive money; if someone asks you to enter a PIN to receive money, it is a scam.",
            "Check the name of the receiver before paying, and use only trusted apps."
          ]
        },
        {
          heading: "Insurance and avoiding fraud",
          points: [
            "**Insurance** protects against financial loss: you pay a small **premium** and the insurer pays when the insured event occurs.",
            "Common types: life insurance, health insurance, motor insurance and crop insurance.",
            "Frauds include phishing messages and fake calls (vishing), fake prize or lottery offers, and fake customer-care numbers.",
            "If you are cheated, inform the bank immediately and report the fraud on the cyber crime helpline or website."
          ]
        }
      ],
      formulas: [
        "Simple interest SI = (P × R × T) / 100",
        "Amount = Principal + Interest"
      ],
      terms: [
        { term: "Savings", meaning: "The part of income that is not spent but kept aside for the future." },
        { term: "Premium", meaning: "The amount paid regularly to an insurance company for a policy." },
        { term: "UPI", meaning: "Unified Payments Interface: an instant mobile payment system run by the NPCI." },
        { term: "Principal", meaning: "The original sum of money deposited or borrowed." },
        { term: "Phishing", meaning: "A fraud in which cheats pretend to be a bank or company to steal personal or banking details." },
        { term: "Fixed deposit", meaning: "A deposit made for a fixed period at a fixed rate of interest." }
      ],
      examples: [
        {
          q: "Find the simple interest on ₹8,000 at 6% per year for 3 years.",
          steps: ["SI = (P × R × T) / 100", "SI = (8000 × 6 × 3) / 100", "SI = 144000 / 100"],
          answer: "SI = ₹1,440"
        }
      ],
      qa: [
        { q: "Why is saving in a bank better than keeping cash at home?", a: "Money in a bank is safe from theft and loss, earns interest, and can be used easily through cheques, cards and digital transfers. Cash at home earns nothing and can be stolen or destroyed." },
        { q: "List four safety rules for digital payments.", a: "Never share your PIN, OTP or CVV; check the receiver's name before paying; use only trusted and updated apps; and do not click on unknown links or scan unknown QR codes." },
        { q: "What is insurance and why is it useful?", a: "Insurance is an arrangement in which people pay a small premium to an insurer, who pays for a large loss if it occurs. It protects families from the financial impact of illness, accident, death or crop loss." }
      ],
      quiz: [
        {
          q: "The formula for simple interest is:",
          options: ["P × R × T / 100", "P + R + T", "P × R / T", "(P + R) × T"],
          answer: 0,
          explain: "SI = P × R × T / 100."
        },
        {
          q: "To receive money through UPI, you must:",
          options: ["Enter your UPI PIN", "Share your OTP", "Not enter any PIN", "Share your card CVV"],
          answer: 2,
          explain: "A PIN is only needed to send money; requests to enter it to receive money are scams."
        },
        {
          q: "The amount regularly paid for an insurance policy is the:",
          options: ["Premium", "Principal", "Pension", "Dividend"],
          answer: 0,
          explain: "The premium is the price of insurance cover."
        },
        {
          q: "The simple interest on ₹5,000 at 10% per year for 2 years is:",
          options: ["₹500", "₹1,000", "₹1,500", "₹2,000"],
          answer: 1,
          explain: "5000 × 10 × 2 / 100 = 1000."
        },
        {
          q: "A caller claiming to be from a bank asks for your OTP. You should:",
          options: ["Share it quickly", "Refuse and report", "Share half of it", "Send it on chat"],
          answer: 1,
          explain: "Banks never ask for OTPs; this is a fraud attempt."
        },
        {
          q: "A deposit made for a fixed period at a fixed rate of interest is a:",
          options: ["Current account", "Fixed deposit", "Overdraft", "Wallet"],
          answer: 1,
          explain: "That describes a fixed deposit."
        }
      ]
    },
    // ═════════════════════════════ HISTORY – PUNJAB ═════════════════════════════
    // ───────────── 1. Physical features of Punjab ─────────────
    {
      id: "punjab-physical-features",
      title: "Physical Features of Punjab and their Effect on its History",
      section: "History – Punjab",
      summary: "The name, rivers, regions and landscape of Punjab, and how its fertile plains and its position at the north-western gateway of India shaped invasions, culture and the character of its people.",
      notes: [
        {
          heading: "Name and rivers",
          points: [
            "**Punjab** comes from the Persian words **panj** (five) and **aab** (water): the **land of five rivers**.",
            "The five rivers of undivided Punjab are the **Jhelum, Chenab, Ravi, Beas and Sutlej**, all tributaries of the Indus system.",
            "The land between two rivers is called a **doab**. In today's Indian Punjab, the **Bist (Jalandhar) Doab** lies between the Beas and the Sutlej, and the **Bari Doab** between the Beas and the Ravi.",
            "Rivers deposit rich alluvial soil and supply water for farming, so Punjab became one of the most fertile regions of India."
          ]
        },
        {
          heading: "Regions and landscape",
          points: [
            "Punjab is mostly a **flat alluvial plain**, with the **Shivalik foothills** of the Himalaya along its north-east edge.",
            "Three cultural regions are commonly named: **Majha** (around Amritsar and Gurdaspur, between the Beas and the Ravi), **Doaba** (between the Beas and the Sutlej) and **Malwa** (south of the Sutlej).",
            "The land is easy to farm and to travel across, which encouraged both settled agriculture and the movement of armies."
          ]
        },
        {
          heading: "Gateway of India",
          points: [
            "Punjab lies at the **north-western entrance of India**. Invaders came through passes such as the **Khyber Pass** and had to cross Punjab before reaching Delhi and the Ganga plain.",
            "Invaders included **Alexander** (326 BC), **Mahmud of Ghazni**, **Muhammad Ghori**, **Babur**, **Nadir Shah** (1739) and **Ahmad Shah Abdali**.",
            "Punjab therefore bore the first shock of invasions, and its people had to be ready to defend their homes."
          ]
        },
        {
          heading: "Effect on history and people",
          points: [
            "Repeated invasions made Punjabis **brave, hardy and alert**, and gave rise to a strong tradition of defending the land.",
            "Fertile soil gave a prosperous farming society, with **hospitality** and a love of sharing food, later expressed in the Sikh institution of **langar**.",
            "Contact with many peoples (Hindus, Muslims and others) produced a **mixed culture** and a ready hearing for ideas of unity and equality.",
            "The same location made Punjab an important **trade route** between Central Asia and India."
          ]
        }
      ],
      formulas: [
        "Punjab = panj (five) + aab (water)",
        "Five rivers: Jhelum, Chenab, Ravi, Beas, Sutlej",
        "Doab = land between two rivers (Bist Doab: Beas–Sutlej; Bari Doab: Beas–Ravi)",
        "Regions: Majha, Doaba, Malwa",
        "Gateway of India: invasions through the north-west passes such as the Khyber"
      ],
      terms: [
        { term: "Doab", meaning: "The land lying **between two rivers**; very fertile because of river-borne soil." },
        { term: "Alluvial soil", meaning: "Fertile soil **deposited by rivers**, good for crops like wheat and rice." },
        { term: "Shivalik hills", meaning: "The **outermost low range of the Himalaya**, found along the north-east of Punjab." },
        { term: "Khyber Pass", meaning: "A mountain pass in the north-west through which most **invaders entered India**." },
        { term: "Majha", meaning: "The region of Punjab around **Amritsar and Gurdaspur**, between the Beas and the Ravi." }
      ],
      qa: [
        {
          q: "How did the physical features of Punjab affect its history? (3 marks)",
          a: "1. Fertile alluvial plains made by the five rivers supported **prosperous agriculture** and a large population.\n2. Its position at the **north-western gateway of India** exposed it to repeated invasions through passes like the Khyber, so Punjab's people became **brave and hardy**.\n3. Contact with many peoples and trade routes created a **mixed culture**."
        },
        {
          q: "Why is Punjab called the 'land of five rivers'? Name the rivers. (2 marks)",
          a: "The name comes from the Persian **panj** (five) and **aab** (water). The five rivers of undivided Punjab are the **Jhelum, Chenab, Ravi, Beas and Sutlej**."
        }
      ],
      quiz: [
        {
          q: "The word 'Punjab' comes from the Persian words meaning:",
          options: ["five rivers", "land of lions", "golden land", "river valley"],
          answer: 0,
          explain: "**Panj** = five and **aab** = water, so Punjab means the land of five rivers."
        },
        {
          q: "Which of these is NOT one of the five rivers of Punjab?",
          options: ["Beas", "Chenab", "Yamuna", "Ravi"],
          answer: 2,
          explain: "The five rivers are Jhelum, Chenab, Ravi, Beas and Sutlej. The **Yamuna** is in the Ganga system."
        },
        {
          q: "The Bist (Jalandhar) Doab lies between the rivers:",
          options: ["Ravi and Chenab", "Beas and Sutlej", "Jhelum and Chenab", "Ravi and Beas"],
          answer: 1,
          explain: "The **Bist Doab** is the land between the **Beas and the Sutlej**."
        },
        {
          q: "Why did most invaders have to pass through Punjab?",
          options: ["It was the capital of India", "It had the richest mines", "It lay at the north-western entrance to India", "It was the only fertile region"],
          answer: 2,
          explain: "Punjab is the **gateway of India** on the north-west route."
        },
        {
          q: "Majha is the region of Punjab around:",
          options: ["Patiala and Sangrur", "Ludhiana and Bathinda", "Amritsar and Gurdaspur", "Jalandhar and Kapurthala"],
          answer: 2,
          explain: "**Majha** lies between the Beas and Ravi, around Amritsar and Gurdaspur."
        },
        {
          q: "Which invader defeated Ibrahim Lodi and founded the Mughal rule in India?",
          options: ["Nadir Shah", "Babur", "Mahmud of Ghazni", "Ahmad Shah Abdali"],
          answer: 1,
          explain: "**Babur** came through the north-west and founded Mughal rule after the First Battle of Panipat (1526)."
        }
      ]
    },

    // ───────────── 2. Political and social condition before Guru Nanak ─────────────
    {
      id: "punjab-before-guru-nanak",
      title: "Political and Social Condition of Punjab before Guru Nanak Dev Ji",
      section: "History – Punjab",
      summary: "Punjab at the end of the Lodi period: oppressive rule and corrupt officials, a caste-divided society with a low status for women, and religious ritualism, with the Bhakti and Sufi movements offering a message of love and unity.",
      notes: [
        {
          heading: "Political condition",
          points: [
            "Punjab was under the **Lodi dynasty** of the Delhi Sultanate. **Ibrahim Lodi** was the last Lodi Sultan; **Daulat Khan Lodi** governed Lahore.",
            "Rule was based on force. Officials and **qazis** were often corrupt and took bribes, and justice was hard to get for the poor.",
            "Non-Muslims faced discrimination, including the tax called **jizya**.",
            "The Sultanate was weak and divided. In 1526 **Babur** defeated Ibrahim Lodi at **Panipat**, ending the Lodi dynasty and beginning Mughal rule."
          ]
        },
        {
          heading: "Social condition",
          points: [
            "Society was divided by **caste**. Brahmins held high status, and the so-called lower castes faced **untouchability** and were denied temples and wells.",
            "The **status of women was low**: girls were considered a burden and women had few rights. Evils like **sati** were practised.",
            "People were also divided by religion; Hindus and Muslims often lived apart with little understanding of each other.",
            "Most people lived in villages and depended on farming; the ruling class lived in luxury while peasants paid heavy taxes."
          ]
        },
        {
          heading: "Religious condition",
          points: [
            "Hindu religion was weighed down by **rituals, superstition, idol worship and the power of priests**.",
            "Many Muslims followed the strict **ulema**, while the **Sufis** preached love and tolerance.",
            "Religion had become a matter of outward show, and people needed a simple, truthful path."
          ]
        },
        {
          heading: "Bhakti and Sufi movements",
          points: [
            "The **Bhakti saints** such as **Kabir** and **Ramananda** taught devotion to one God and rejected caste and rituals.",
            "The **Sufi saints**, including **Sheikh Farid (Baba Farid)** of Pakpattan, taught love, service and equality. Baba Farid's hymns were later included in the **Guru Granth Sahib**.",
            "These movements prepared the ground for the message of **Guru Nanak Dev Ji**."
          ]
        }
      ],
      formulas: [
        "Ibrahim Lodi – last Lodi Sultan of Delhi",
        "Daulat Khan Lodi – governor of Lahore",
        "1526 – Babur defeats Ibrahim Lodi at Panipat",
        "Bhakti saints: Kabir, Ramananda; Sufi: Sheikh Farid (Baba Farid)"
      ],
      terms: [
        { term: "Jizya", meaning: "A **tax on non-Muslims** levied by some Muslim rulers." },
        { term: "Qazi", meaning: "A Muslim **judge** who gave decisions according to Islamic law." },
        { term: "Sati", meaning: "The cruel practice of a **widow being burnt** on her husband's funeral pyre." },
        { term: "Bhakti movement", meaning: "A movement that stressed **loving devotion to one God**, and rejected caste and empty rituals." },
        { term: "Sufi", meaning: "A **Muslim mystic** who preached love, humility and service to all." }
      ],
      qa: [
        {
          q: "Describe the political condition of Punjab before Guru Nanak Dev Ji. (3 marks)",
          a: "1. Punjab was ruled by the **Lodi Sultans** of Delhi, with Daulat Khan Lodi as governor of Lahore.\n2. Rule rested on force; officials and qazis were **corrupt** and common people did not get justice.\n3. Non-Muslims suffered discrimination such as **jizya**, and the weak Sultanate fell to **Babur in 1526**."
        },
        {
          q: "What was the social condition of Punjab before Guru Nanak Dev Ji? (3 marks)",
          a: "1. Society was divided on caste lines, and the lower castes suffered **untouchability**.\n2. **Women had a low status** and evils like sati existed.\n3. Rulers and priests lived in comfort while the peasants were heavily taxed."
        }
      ],
      quiz: [
        {
          q: "Who was the last Lodi Sultan of Delhi?",
          options: ["Sikandar Lodi", "Ibrahim Lodi", "Bahlol Lodi", "Daulat Khan Lodi"],
          answer: 1,
          explain: "**Ibrahim Lodi** was defeated by Babur in 1526."
        },
        {
          q: "Who was the governor of Lahore under the Lodis?",
          options: ["Daulat Khan Lodi", "Sher Shah", "Mian Mir", "Alif Khan"],
          answer: 0,
          explain: "**Daulat Khan Lodi** was governor of Lahore."
        },
        {
          q: "Which Sufi saint of Punjab has hymns included in the Guru Granth Sahib?",
          options: ["Moinuddin Chishti", "Amir Khusrau", "Sheikh Farid", "Nizamuddin Auliya"],
          answer: 2,
          explain: "The hymns of **Sheikh Farid (Baba Farid)** are in the Guru Granth Sahib."
        },
        {
          q: "The tax levied on non-Muslims by some rulers was called:",
          options: ["Zakat", "Jizya", "Kharaj", "Lagaan"],
          answer: 1,
          explain: "**Jizya** was the tax on non-Muslims."
        },
        {
          q: "The Lodi dynasty came to an end after the battle fought in:",
          options: ["1469", "1499", "1526", "1556"],
          answer: 2,
          explain: "Babur defeated Ibrahim Lodi at **Panipat in 1526**."
        }
      ]
    },

    // ───────────── 3. Guru Nanak Dev Ji and his teachings ─────────────
    {
      id: "guru-nanak-dev-ji-teachings",
      title: "Guru Nanak Dev Ji and his Teachings",
      section: "History – Punjab",
      summary: "The life, travels and message of Guru Nanak Dev Ji, the first Sikh Guru: belief in one God, equality, honest work and sharing, and the foundation of Kartarpur.",
      notes: [
        {
          heading: "Early life",
          points: [
            "Guru Nanak Dev Ji was born in **1469** at **Rai Bhoi di Talwandi** (now **Nankana Sahib**, Pakistan). His father was **Mehta Kalu** (Kalyan Das) and his mother **Mata Tripta**.",
            "His elder sister was **Bebe Nanaki**, who first recognised his spiritual greatness.",
            "He worked for some time at **Sultanpur Lodhi** (in present Kapurthala district), where he received his call after a stay at the river Bein.",
            "His lifelong companion on journeys was the Muslim minstrel **Bhai Mardana**, who played the rabab while the Guru sang."
          ]
        },
        {
          heading: "Travels (Udasis)",
          points: [
            "Guru Nanak Dev Ji travelled widely, usually counted as **four long journeys (udasis)**, across India and beyond to places such as Sri Lanka, Mecca and Baghdad (as traditionally recorded).",
            "He met saints, sadhus, pandits and qazis, and discussed religion with them in a gentle, reasoned way.",
            "He witnessed Babur's invasion of Punjab and spoke against the cruelty that people suffered."
          ]
        },
        {
          heading: "Main teachings",
          points: [
            "**Ik Onkar**: there is **one God**, formless, truthful and without fear or enmity, who is present everywhere.",
            "**Naam Japna** (remembering God), **Kirt Karo** (earning by honest work) and **Vand Chhakna** (sharing with others) are the three guiding principles.",
            "He rejected **caste distinctions, idol worship, rituals and superstition**, and taught that all people are equal before God.",
            "He gave women equal respect and criticised those who looked down on them.",
            "He taught that true religion lies in good deeds, humility and service, not in outward show."
          ]
        },
        {
          heading: "Institutions and the final years",
          points: [
            "He founded **Kartarpur** (on the bank of the Ravi) where he settled and farmed, and where people ate together in **langar**, **sangat** (congregation) and **pangat** (sitting in a row regardless of caste).",
            "He chose **Bhai Lehna**, after testing his devotion, as his successor and renamed him **Guru Angad**.",
            "Guru Nanak Dev Ji passed away at Kartarpur in **1539**.",
            "His hymns, such as the **Japji Sahib**, are part of the Guru Granth Sahib."
          ]
        }
      ],
      formulas: [
        "1469 – Birth of Guru Nanak Dev Ji at Talwandi (Nankana Sahib)",
        "1539 – Guru Nanak Dev Ji passes away at Kartarpur",
        "Parents: Mehta Kalu and Mata Tripta; sister: Bebe Nanaki",
        "Companion: Bhai Mardana",
        "Three principles: Naam Japna, Kirt Karo, Vand Chhakna",
        "Successor: Guru Angad Dev Ji (Bhai Lehna)"
      ],
      terms: [
        { term: "Ik Onkar", meaning: "The opening of the Mool Mantar, meaning **God is One**." },
        { term: "Udasi", meaning: "A **long missionary journey** undertaken by Guru Nanak Dev Ji." },
        { term: "Langar", meaning: "The **community kitchen** where everyone eats together as equals." },
        { term: "Sangat", meaning: "The **holy congregation** of devotees." },
        { term: "Pangat", meaning: "Sitting **in a row** to eat, without distinction of caste or status." },
        { term: "Vand Chhakna", meaning: "**Sharing** one's earnings and food with others." }
      ],
      qa: [
        {
          q: "State the main teachings of Guru Nanak Dev Ji. (5 marks)",
          a: "1. **One God (Ik Onkar)**: formless, truthful and present everywhere.\n2. **Naam Japna, Kirt Karo, Vand Chhakna**: remember God, earn honestly and share with others.\n3. **Equality**: he rejected caste distinctions and untouchability.\n4. He opposed **idol worship, rituals and superstition**.\n5. He gave **respect to women**, and started the institutions of **sangat and pangat (langar)** at Kartarpur."
        },
        {
          q: "Who was Bhai Mardana? (2 marks)",
          a: "Bhai Mardana was a Muslim **minstrel (rababi)** and lifelong companion of Guru Nanak Dev Ji. He played the **rabab** while the Guru sang his hymns on his journeys."
        },
        {
          q: "Why is the establishment of Kartarpur important? (3 marks)",
          a: "At Kartarpur, on the bank of the Ravi, Guru Nanak Dev Ji settled and showed a new way of life: **honest farming work, sangat and langar**. It became the first centre of the Sikh community, where he also nominated **Guru Angad** as his successor."
        }
      ],
      quiz: [
        {
          q: "Guru Nanak Dev Ji was born in:",
          options: ["1469", "1499", "1504", "1539"],
          answer: 0,
          explain: "He was born in **1469** at Talwandi (now Nankana Sahib)."
        },
        {
          q: "Who was the mother of Guru Nanak Dev Ji?",
          options: ["Mata Sulakhni", "Mata Tripta", "Mata Gujri", "Bebe Nanaki"],
          answer: 1,
          explain: "His mother was **Mata Tripta**; Mata Sulakhni was his wife and Bebe Nanaki his sister."
        },
        {
          q: "Which of these is NOT one of Guru Nanak Dev Ji's three principles?",
          options: ["Naam Japna", "Kirt Karo", "Vand Chhakna", "Mool Pooja"],
          answer: 3,
          explain: "The three principles are Naam Japna, Kirt Karo and Vand Chhakna. He opposed idol-based ritual worship."
        },
        {
          q: "The town where Guru Nanak Dev Ji settled and passed away is:",
          options: ["Kartarpur", "Goindwal", "Khadur Sahib", "Anandpur Sahib"],
          answer: 0,
          explain: "He settled at **Kartarpur** on the Ravi and passed away there in 1539."
        },
        {
          q: "Who was nominated by Guru Nanak Dev Ji as his successor?",
          options: ["Sri Chand", "Bhai Mardana", "Bhai Lehna", "Amar Das"],
          answer: 2,
          explain: "**Bhai Lehna** became Guru Angad Dev Ji."
        },
        {
          q: "Guru Nanak Dev Ji's lifelong companion on his journeys was:",
          options: ["Bhai Bala only", "Bhai Gurdas", "Bhai Mardana", "Baba Buddha"],
          answer: 2,
          explain: "The minstrel **Bhai Mardana** accompanied him with the rabab."
        }
      ]
    },

    // ───────────── 4. Gurus from Guru Angad Dev Ji to Guru Tegh Bahadur Ji ─────────────
    {
      id: "gurus-angad-dev-to-tegh-bahadur",
      title: "Contribution of the Sikh Gurus from Guru Angad Dev Ji to Guru Tegh Bahadur Ji",
      section: "History – Punjab",
      summary: "How the Sikh community was organised and strengthened by the second to the ninth Gurus: Gurmukhi, langar, Amritsar, the Adi Granth, the martyrdoms of Guru Arjan Dev Ji and Guru Tegh Bahadur Ji, and the new idea of Miri and Piri.",
      notes: [
        {
          heading: "Guru Angad Dev Ji and Guru Amar Das Ji",
          points: [
            "**Guru Angad Dev Ji (1539–1552)** gave the **Gurmukhi script** its present form, so that the Gurus' words could be written in the language of the people. He lived at **Khadur Sahib** and strengthened **langar**.",
            "**Guru Amar Das Ji (1552–1574)** founded **Goindwal Sahib** and built a **baoli** there. He organised the Sikhs into **22 manjis** (preaching districts) to spread the teachings.",
            "He opposed **sati** and the practice of keeping women veiled (**purdah**), and encouraged widow remarriage.",
            "The **langar** was so central that anyone, even the Mughal emperor Akbar when he visited, was asked to eat in the **pangat** first."
          ]
        },
        {
          heading: "Guru Ram Das Ji and Guru Arjan Dev Ji",
          points: [
            "**Guru Ram Das Ji (1574–1581)** founded the town of **Ramdaspur (Amritsar)** and began the digging of the sacred pool (sarovar).",
            "**Guru Arjan Dev Ji (1581–1606)** completed the Amritsar sarovar and built **Harmandir Sahib** in its middle, with doors on four sides to show that it was open to all.",
            "He founded **Tarn Taran** and **Kartarpur** (Jalandhar district).",
            "In **1604** he compiled the **Adi Granth**, the first compilation of the Gurus' and saints' hymns, with **Bhai Gurdas** as scribe.",
            "Jahangir's displeasure towards him led to his **martyrdom in 1606** at Lahore, the first Guru to be martyred."
          ]
        },
        {
          heading: "Guru Hargobind Ji",
          points: [
            "**Guru Hargobind Ji (1606–1644)** became Guru as a boy after his father's martyrdom. He wore two swords, **Miri** (temporal power) and **Piri** (spiritual power).",
            "He built the **Akal Takht** opposite Harmandir Sahib, as the seat of temporal authority, and fortified Amritsar with **Lohgarh**.",
            "He raised an army and fought several battles with Mughal forces, including at **Amritsar (1634)** and **Kartarpur (1635)**.",
            "He was kept for a time in the fort at **Gwalior** by Jahangir and was released along with the princes held there, which is why he is called **Bandi Chhor**.",
            "He later settled at **Kiratpur**."
          ]
        },
        {
          heading: "Guru Har Rai Ji and Guru Har Krishan Ji",
          points: [
            "**Guru Har Rai Ji (1644–1661)** lived mostly at **Kiratpur**, kept a trained force but avoided battle, and was known for his service to the sick and for kindness to all, including animals.",
            "**Guru Har Krishan Ji (1661–1664)** became Guru at about the age of five.",
            "He went to Delhi, where he served the people during a smallpox epidemic without distinction, and he passed away there in **1664**."
          ]
        },
        {
          heading: "Guru Tegh Bahadur Ji",
          points: [
            "**Guru Tegh Bahadur Ji (1664–1675)** founded **Anandpur Sahib** (originally Makhowal) and travelled widely to spread the faith and help the poor.",
            "In the reign of **Aurangzeb**, when Kashmiri Pandits appealed to him to protect their right to follow their religion, he agreed to give his life for the freedom of religion.",
            "He was arrested and, after refusing to give up his faith, was **martyred at Delhi (Chandni Chowk) in 1675**.",
            "He is remembered as **'Hind di Chadar'** (protector of India's religions); Gurdwaras Sis Ganj and Rakab Ganj in Delhi mark the places connected with his martyrdom."
          ]
        }
      ],
      formulas: [
        "1539–1552 – Guru Angad Dev Ji (Gurmukhi script; Khadur Sahib)",
        "1552–1574 – Guru Amar Das Ji (Goindwal Sahib; 22 manjis)",
        "1574–1581 – Guru Ram Das Ji (founded Ramdaspur/Amritsar)",
        "1581–1606 – Guru Arjan Dev Ji (Harmandir Sahib; Adi Granth 1604; martyred 1606)",
        "1606–1644 – Guru Hargobind Ji (Akal Takht; Miri and Piri; Lohgarh)",
        "1644–1661 – Guru Har Rai Ji; 1661–1664 – Guru Har Krishan Ji",
        "1664–1675 – Guru Tegh Bahadur Ji (martyred at Delhi, 1675)",
        "Battles of Guru Hargobind Ji: Amritsar (1634) and Kartarpur (1635)"
      ],
      terms: [
        { term: "Gurmukhi", meaning: "The **script of Punjabi** used for the Guru Granth Sahib, given its present form by Guru Angad Dev Ji." },
        { term: "Manji", meaning: "A **preaching district** into which Guru Amar Das Ji divided the Sikh community (22 in all)." },
        { term: "Adi Granth", meaning: "The **first compilation of the Gurus' hymns** (1604) by Guru Arjan Dev Ji; later the Guru Granth Sahib." },
        { term: "Miri and Piri", meaning: "**Temporal and spiritual power**, shown by the two swords of Guru Hargobind Ji." },
        { term: "Akal Takht", meaning: "The **seat of temporal authority** of the Sikhs, built opposite Harmandir Sahib." },
        { term: "Bandi Chhor", meaning: "'Liberator of prisoners'; a title of **Guru Hargobind Ji** after his release from Gwalior." }
      ],
      qa: [
        {
          q: "Write a note on the contribution of Guru Arjan Dev Ji. (5 marks)",
          a: "1. He completed the **sarovar at Amritsar** and built **Harmandir Sahib** in the centre, with four doors open to all.\n2. He founded **Tarn Taran** and **Kartarpur** (Jalandhar).\n3. He compiled the **Adi Granth in 1604** with Bhai Gurdas as scribe, including the hymns of Sikh Gurus and saints of different faiths.\n4. He helped organise the community's contributions (daswandh).\n5. He was **martyred in 1606** at Lahore under Jahangir, the first Guru to be martyred."
        },
        {
          q: "What was the importance of the concept of Miri and Piri introduced by Guru Hargobind Ji? (3 marks)",
          a: "Guru Hargobind Ji wore two swords, **Miri (temporal power)** and **Piri (spiritual power)**. It showed that Sikhs must be both devoted and ready to defend justice. He built the **Akal Takht**, raised an army and fortified Amritsar, giving the Sikhs a military shape."
        },
        {
          q: "Why was Guru Tegh Bahadur Ji martyred? (3 marks)",
          a: "Kashmiri Pandits approached the Guru for protection of their religious freedom against forced conversion under **Aurangzeb**. Guru Tegh Bahadur Ji agreed to stand by them and was arrested and **executed at Delhi in 1675** for refusing to give up his faith. He is called **Hind di Chadar**."
        }
      ],
      quiz: [
        {
          q: "Who gave the Gurmukhi script its present form?",
          options: ["Guru Nanak Dev Ji", "Guru Angad Dev Ji", "Guru Ram Das Ji", "Guru Arjan Dev Ji"],
          answer: 1,
          explain: "**Guru Angad Dev Ji** standardised the Gurmukhi script."
        },
        {
          q: "Which Guru founded the town of Amritsar (Ramdaspur)?",
          options: ["Guru Amar Das Ji", "Guru Arjan Dev Ji", "Guru Hargobind Ji", "Guru Ram Das Ji"],
          answer: 3,
          explain: "**Guru Ram Das Ji** founded Ramdaspur, later Amritsar."
        },
        {
          q: "The Adi Granth was compiled in:",
          options: ["1539", "1604", "1699", "1708"],
          answer: 1,
          explain: "**Guru Arjan Dev Ji** compiled the Adi Granth in **1604**."
        },
        {
          q: "Which Guru is known as 'Bandi Chhor'?",
          options: ["Guru Gobind Singh Ji", "Guru Har Rai Ji", "Guru Hargobind Ji", "Guru Tegh Bahadur Ji"],
          answer: 2,
          explain: "**Guru Hargobind Ji** returned from Gwalior fort with the imprisoned princes."
        },
        {
          q: "The Akal Takht was built by:",
          options: ["Guru Hargobind Ji", "Guru Arjan Dev Ji", "Guru Amar Das Ji", "Guru Har Krishan Ji"],
          answer: 0,
          explain: "**Guru Hargobind Ji** built the Akal Takht opposite Harmandir Sahib."
        },
        {
          q: "Guru Tegh Bahadur Ji was martyred at:",
          options: ["Lahore in 1606", "Delhi in 1675", "Nanded in 1708", "Amritsar in 1634"],
          answer: 1,
          explain: "He was martyred at **Delhi (Chandni Chowk) in 1675**."
        }
      ]
    },

    // ───────────── 5. Guru Gobind Singh Ji ─────────────
    {
      id: "guru-gobind-singh-ji",
      title: "Guru Gobind Singh Ji: Life, Creation of the Khalsa and Personality",
      section: "History – Punjab",
      summary: "The life of the tenth Guru, his battles against the hill chiefs and the Mughals, the creation of the Khalsa in 1699, the sacrifice of his family and his achievements as a leader, poet and scholar.",
      notes: [
        {
          heading: "Early life",
          points: [
            "Guru Gobind Singh Ji was born at **Patna** in **1666** as Gobind Rai, the son of Guru Tegh Bahadur Ji and **Mata Gujri**.",
            "After his father's martyrdom in 1675, he became Guru at the age of nine and lived at **Anandpur Sahib**.",
            "He studied Punjabi, Sanskrit and Persian and trained in horse riding and use of weapons, and began to prepare the Sikhs to stand against injustice.",
            "At **Paonta Sahib** he stayed for some years and composed poetry."
          ]
        },
        {
          heading: "Creation of the Khalsa (1699)",
          points: [
            "On **Baisakhi in 1699** at **Anandpur Sahib**, the Guru called a large gathering and asked for five volunteers willing to give their heads. Five men came forward and became the **Panj Pyare** (the Five Beloved).",
            "The Panj Pyare were **Bhai Daya Singh, Bhai Dharam Singh, Bhai Himmat Singh, Bhai Mohkam Singh and Bhai Sahib Singh**.",
            "The Guru prepared **amrit** (khande di pahul) and initiated them, and was then himself initiated by them.",
            "The names **Singh** (lion) for men and **Kaur** (princess) for women were adopted, ending caste-based surnames.",
            "Khalsa members wear the **five Ks**: **kesh** (uncut hair), **kangha** (comb), **kara** (steel bracelet), **kachhera** (shorts) and **kirpan** (sword)."
          ]
        },
        {
          heading: "Battles of Guru Gobind Singh Ji",
          points: [
            "**Bhangani (1686)** near Paonta Sahib: the Guru's forces defeated the hill chief **Bhim Chand** (of Kahlur/Bilaspur) and his allies.",
            "**Nadaun (1691)**: the Guru helped the hill chiefs against a Mughal commander, **Alif Khan**.",
            "**Anandpur Sahib**: several attacks by hill chiefs and Mughal forces, with a long siege ending in 1704, when the Guru left the fort.",
            "**Chamkaur (December 1704)**: a small band of Sikhs fought a huge force, and the two elder Sahibzade, **Baba Ajit Singh** and **Baba Jujhar Singh**, were martyred.",
            "**Muktsar (1705)**: the 'Forty Muktas' who had left the Guru earlier returned and died fighting; the place is now **Sri Muktsar Sahib**. **Mai Bhago** led them."
          ]
        },
        {
          heading: "Sacrifices and last years",
          points: [
            "The two younger Sahibzade, **Baba Zorawar Singh** and **Baba Fateh Singh**, were executed at **Sirhind** on the orders of its governor **Wazir Khan** in 1704; **Mata Gujri** also passed away.",
            "From **Dina**, the Guru sent the **Zafarnama**, a letter in Persian, to Emperor Aurangzeb, declaring the injustice of his rule.",
            "At **Talwandi Sabo (Damdama Sahib)** he prepared a new recension of the Granth by adding the hymns of Guru Tegh Bahadur Ji.",
            "At **Nanded** (Maharashtra), shortly before passing away in **1708**, he declared that the **Guru Granth Sahib** would be the Guru of the Sikhs thereafter."
          ]
        },
        {
          heading: "Personality",
          points: [
            "He was a **brave warrior and military leader**, a great **poet and scholar**, and a spiritual guide; his compositions include **Jaap Sahib**, **Akal Ustat** and **Zafarnama**.",
            "He gave the Sikhs a distinct identity and the courage to resist oppression, creating a community of 'saint-soldiers'.",
            "He is called **Sarbans Daani** (donor of the whole family) for sacrificing his father, mother and four sons for righteousness."
          ]
        }
      ],
      formulas: [
        "1666 – Birth at Patna; 1675 – becomes Guru; 1708 – passes away at Nanded",
        "1699, Baisakhi – Khalsa created at Anandpur Sahib; Panj Pyare: Daya, Dharam, Himmat, Mohkam, Sahib Singh",
        "Five Ks: Kesh, Kangha, Kara, Kachhera, Kirpan",
        "Battles: Bhangani 1686; Nadaun 1691; Anandpur; Chamkaur 1704; Muktsar 1705",
        "Map work: Anandpur Sahib, Paonta Sahib, Bhangani, Nadaun, Chamkaur, Sirhind, Muktsar, Talwandi Sabo, Nanded",
        "Zafarnama – letter in Persian to Aurangzeb"
      ],
      terms: [
        { term: "Khalsa", meaning: "The **community of initiated Sikhs**, created by Guru Gobind Singh Ji in 1699." },
        { term: "Panj Pyare", meaning: "The **five beloved ones** who were the first to be initiated into the Khalsa." },
        { term: "Amrit", meaning: "The **sanctified water** (khande di pahul) used in the Sikh initiation." },
        { term: "Zafarnama", meaning: "The **'Epistle of Victory'**, a Persian letter from the Guru to Aurangzeb." },
        { term: "Sahibzade", meaning: "The **sons of Guru Gobind Singh Ji**: Ajit Singh, Jujhar Singh, Zorawar Singh and Fateh Singh." },
        { term: "Sarbans Daani", meaning: "A title meaning **one who gave away his entire family** for the cause of righteousness." }
      ],
      qa: [
        {
          q: "Describe the creation of the Khalsa. (5 marks)",
          a: "1. On **Baisakhi 1699** at **Anandpur Sahib**, Guru Gobind Singh Ji called a large gathering.\n2. He asked for volunteers ready to give their heads; five came forward: the **Panj Pyare**.\n3. He initiated them with **amrit** and then asked them to initiate him.\n4. Men took the name **Singh** and women **Kaur**, and the **five Ks** became compulsory.\n5. This ended caste distinctions and built a brave, disciplined community willing to fight injustice."
        },
        {
          q: "What were the main causes and results of the Battle of Bhangani? (3 marks)",
          a: "Bhim Chand and other hill chiefs resented the Guru's growing influence at Paonta Sahib and attacked him in **1686**. The Guru's forces **won at Bhangani**, which increased his prestige and strength, though the hill chiefs remained hostile."
        },
        {
          q: "Why is Guru Gobind Singh Ji called 'Sarbans Daani'? (2 marks)",
          a: "Because he sacrificed his father (Guru Tegh Bahadur Ji), his mother (Mata Gujri) and **all four sons** for the cause of dharma and the Sikh community."
        }
      ],
      quiz: [
        {
          q: "The Khalsa was created in:",
          options: ["1675", "1699", "1704", "1708"],
          answer: 1,
          explain: "**Baisakhi 1699** at Anandpur Sahib."
        },
        {
          q: "Which of these was NOT one of the Panj Pyare?",
          options: ["Bhai Daya Singh", "Bhai Mohkam Singh", "Bhai Sahib Singh", "Baba Ajit Singh"],
          answer: 3,
          explain: "Baba Ajit Singh was the Guru's eldest son, not one of the Panj Pyare."
        },
        {
          q: "The Battle of Bhangani (1686) was fought near:",
          options: ["Chamkaur", "Paonta Sahib", "Sirhind", "Muktsar"],
          answer: 1,
          explain: "Bhangani is near **Paonta Sahib**."
        },
        {
          q: "At which battle were the two elder Sahibzade martyred?",
          options: ["Chamkaur", "Muktsar", "Nadaun", "Bhangani"],
          answer: 0,
          explain: "Baba Ajit Singh and Baba Jujhar Singh were martyred at **Chamkaur** in 1704."
        },
        {
          q: "Where were the two younger Sahibzade executed?",
          options: ["Sirhind", "Lahore", "Delhi", "Talwandi Sabo"],
          answer: 0,
          explain: "They were executed at **Sirhind** on the orders of Wazir Khan."
        },
        {
          q: "Guru Gobind Singh Ji passed away at:",
          options: ["Patna", "Anandpur Sahib", "Nanded", "Muktsar"],
          answer: 2,
          explain: "He passed away at **Nanded** in 1708."
        }
      ]
    },

    // ───────────── 6. Banda Singh Bahadur and the Sikh Misls ─────────────
    {
      id: "banda-singh-bahadur-and-misls",
      title: "Baba Banda Singh Bahadur and the Sikh Misls",
      section: "History – Punjab",
      summary: "Banda Singh Bahadur's campaign against Mughal oppression and the first Sikh state, followed by the years of persecution, the Dal Khalsa, and the twelve Misls that ruled Punjab before Maharaja Ranjit Singh.",
      notes: [
        {
          heading: "Banda Singh Bahadur: early life and mission",
          points: [
            "Banda Singh Bahadur was born as **Lachhman Dev** (Lachhman Das) in about **1670** at **Rajouri** in Jammu region. He became an ascetic and was known as **Madho Das**.",
            "He met **Guru Gobind Singh Ji** at **Nanded** in 1708, became his disciple and took the name Banda Singh.",
            "The Guru sent him to Punjab to punish the oppressors and to raise the Sikhs against Mughal tyranny, and gave him an authority letter (hukamnama) for the Sikhs."
          ]
        },
        {
          heading: "Conquests (battles of Banda Singh Bahadur)",
          points: [
            "**Sonepat and Kaithal** were attacked on his way to Punjab.",
            "**Samana** (1709): captured; it was the home town of those who had executed Guru Tegh Bahadur Ji and the younger Sahibzade. **Sadhaura** followed.",
            "**Chappar Chiri (1710)**: near Sirhind, he defeated and killed **Wazir Khan**, the governor responsible for the execution of the younger Sahibzade. **Sirhind** was captured.",
            "**Rahon** (in the Jalandhar Doab) was also won, and he made **Lohgarh** (near the Shivalik hills) his capital.",
            "At **Gurdas Nangal (1715)** his forces were besieged by Mughal armies and finally captured."
          ]
        },
        {
          heading: "Rule and martyrdom",
          points: [
            "He ended the **zamindari system** in the areas he held, giving land to the tillers.",
            "He issued **coins and a seal** in the name of the Sikh Gurus, showing that sovereignty belonged to the Guru and not to him.",
            "Banda Singh and his companions were captured at Gurdas Nangal in **1715**, taken to Delhi, and put to death in **1716**; they remained firm in their faith."
          ]
        },
        {
          heading: "The Misls and the Dal Khalsa",
          points: [
            "After Banda Singh's death, the Sikhs faced severe persecution, with Mughal governors such as **Zakariya Khan** at Lahore. Sikhs took shelter in forests and hills.",
            "The invasions of **Nadir Shah (1739)** and **Ahmad Shah Abdali** (from 1748) weakened the Mughals. At Amritsar on **Baisakhi 1748**, the **Dal Khalsa** was formed under **Nawab Kapur Singh**, with **Jassa Singh Ahluwalia** as the leader.",
            "The Dal Khalsa was divided into groups called **Misls** (usually counted as twelve, some historians count eleven plus the Phulkian), each ruling a territory under a sardar, such as the **Bhangi, Ahluwalia, Kanhaiya, Ramgarhia, Sukerchakia and Phulkian** Misls.",
            "The Sikhs met at Amritsar in the **Sarbat Khalsa**, and decisions called **gurmata** were passed in the name of the Guru Granth Sahib.",
            "Abdali inflicted the **Vadda Ghallughara** (Great Holocaust) on the Sikhs in **1762**, but the Sikhs recovered and by about **1765** they held Lahore."
          ]
        }
      ],
      formulas: [
        "c. 1670 – Banda Singh Bahadur (Lachhman Dev) born at Rajouri; 1708 – meets Guru Gobind Singh Ji at Nanded",
        "Battles: Samana 1709; Chappar Chiri (Sirhind) 1710; Rahon; Lohgarh (capital); Gurdas Nangal 1715",
        "1716 – Banda Singh Bahadur martyred at Delhi",
        "1748 – Dal Khalsa formed at Amritsar (Nawab Kapur Singh; Jassa Singh Ahluwalia)",
        "1762 – Vadda Ghallughara (Ahmad Shah Abdali)",
        "Misls: about twelve (Bhangi, Ahluwalia, Kanhaiya, Ramgarhia, Sukerchakia, Phulkian, and others)",
        "Map work: Rajouri, Samana, Sadhaura, Sirhind (Chappar Chiri), Rahon, Lohgarh, Gurdas Nangal"
      ],
      terms: [
        { term: "Misl", meaning: "A **band of Sikh warriors** with its own sardar and territory; the Sikh state of the 18th century was a confederacy of Misls." },
        { term: "Dal Khalsa", meaning: "The **joint Sikh army** organised in 1748 from smaller jathas." },
        { term: "Sarbat Khalsa", meaning: "A **general assembly of the Sikhs**, usually held at Amritsar." },
        { term: "Gurmata", meaning: "A **resolution passed by the Sarbat Khalsa** in the name of the Guru Granth Sahib." },
        { term: "Vadda Ghallughara", meaning: "The **Great Massacre of 1762**, in which Ahmad Shah Abdali killed a large number of Sikhs." },
        { term: "Zamindari", meaning: "A system in which **intermediary landlords** collected revenue from cultivators; Banda Singh abolished it in his territory." }
      ],
      qa: [
        {
          q: "Describe the conquests of Banda Singh Bahadur. (5 marks)",
          a: "1. He captured **Samana** and **Sadhaura** in 1709–10.\n2. At **Chappar Chiri (1710)** he defeated and killed **Wazir Khan** and captured **Sirhind**.\n3. He also took **Rahon** and set up his capital at **Lohgarh**.\n4. He abolished **zamindari**, giving land to the tillers, and issued coins in the Gurus' names.\n5. He was defeated at **Gurdas Nangal in 1715** and executed at Delhi in 1716."
        },
        {
          q: "What was a Misl? Name any four. (3 marks)",
          a: "A **Misl** was a band of Sikh warriors under a sardar, who controlled a territory in Punjab in the 18th century. Together, the Misls formed the Dal Khalsa. Examples: **Ahluwalia, Bhangi, Kanhaiya, Ramgarhia, Sukerchakia and Phulkian**."
        },
        {
          q: "What was the Vadda Ghallughara? (2 marks)",
          a: "In **1762**, Ahmad Shah Abdali attacked a large gathering of Sikhs with their families and killed thousands. It is called the Vadda Ghallughara (Great Holocaust), but the Sikhs recovered soon after."
        }
      ],
      quiz: [
        {
          q: "Banda Singh Bahadur met Guru Gobind Singh Ji at:",
          options: ["Anandpur Sahib", "Nanded", "Chamkaur", "Sirhind"],
          answer: 1,
          explain: "He met the Guru at **Nanded** in 1708."
        },
        {
          q: "The governor of Sirhind killed by Banda Singh at Chappar Chiri was:",
          options: ["Zakariya Khan", "Mir Mannu", "Wazir Khan", "Alif Khan"],
          answer: 2,
          explain: "**Wazir Khan** was killed in 1710."
        },
        {
          q: "The capital of Banda Singh Bahadur was:",
          options: ["Lohgarh", "Lahore", "Samana", "Gurdas Nangal"],
          answer: 0,
          explain: "He made **Lohgarh** his capital."
        },
        {
          q: "The Dal Khalsa was formed in:",
          options: ["1699", "1716", "1748", "1799"],
          answer: 2,
          explain: "The Dal Khalsa was organised at Amritsar in **1748**."
        },
        {
          q: "Banda Singh Bahadur was put to death at Delhi in:",
          options: ["1708", "1710", "1715", "1716"],
          answer: 3,
          explain: "He was executed in **1716**; he had been captured in 1715."
        },
        {
          q: "Who was the leader of the Dal Khalsa at its formation?",
          options: ["Jassa Singh Ahluwalia", "Charat Singh", "Hari Singh Nalwa", "Mahan Singh"],
          answer: 0,
          explain: "**Jassa Singh Ahluwalia**, with Nawab Kapur Singh, led the Dal Khalsa."
        }
      ]
    },

    // ───────────── 7. Maharaja Ranjit Singh ─────────────
    {
      id: "maharaja-ranjit-singh",
      title: "Maharaja Ranjit Singh: Early Life, Achievements and Relations with the British",
      section: "History – Punjab",
      summary: "The rise of Maharaja Ranjit Singh from chief of the Sukerchakia Misl to ruler of a large Sikh kingdom, his conquests, administration and army, and his careful dealings with the British, including the Treaty of Amritsar (1809).",
      notes: [
        {
          heading: "Early life and rise",
          points: [
            "Ranjit Singh was born in **1780** at **Gujranwala**, the son of **Mahan Singh**, chief of the **Sukerchakia Misl**, and Raj Kaur.",
            "His father died when he was about twelve, and he took charge of the Misl in **1792**.",
            "In **1799** he captured **Lahore** from the Bhangi chiefs, and in **1801** was proclaimed **Maharaja of Punjab** on Baisakhi.",
            "He took **Amritsar** (1802) and made the Sikh Misls into a single kingdom, **Sarkar-i-Khalsa**, with Lahore as its capital."
          ]
        },
        {
          heading: "Conquests",
          points: [
            "He took **Kasur (1807)**, **Multan (1818)**, **Kashmir (1819)** and **Peshawar (1834)**.",
            "His commanders included **Hari Singh Nalwa**, who became a famous governor in the north-west, and **Dewan Mokham Chand**.",
            "In **1813** he took **Attock** and defeated an Afghan force; around this time he obtained the **Koh-i-Noor** diamond from Shah Shuja.",
            "His kingdom extended from the Sutlej in the south-east to the Khyber and Kashmir in the north-west."
          ]
        },
        {
          heading: "Administration and army",
          points: [
            "His rule was **secular**: Hindus, Sikhs and Muslims were all given high posts, such as **Fakir Azizuddin** (foreign minister) and **Dhian Singh** (prime minister).",
            "The kingdom was divided into provinces (**subas**), parganas and villages, and land revenue was the main income.",
            "He modernised the **Khalsa army** with the help of European officers such as **Ventura and Allard**, and had a trained infantry, cavalry and artillery with a modern arsenal at Lahore.",
            "He gave grants to gurdwaras, temples and mosques, and was popularly called **Sher-e-Punjab** (Lion of Punjab)."
          ]
        },
        {
          heading: "Relations with the British",
          points: [
            "Ranjit Singh wished to bring all Sikh areas, including those between the Sutlej and Yamuna (**cis-Sutlej states**), under his rule, but the British opposed this.",
            "By the **Treaty of Amritsar (1809)** with **Charles Metcalfe**, the **Sutlej** became the boundary between his kingdom and the British territory, and he agreed not to expand to its south-east.",
            "Ranjit Singh maintained friendship with the British for the rest of his life, while they watched his power closely.",
            "He died on **27 June 1839**. Weak successors and court conflicts soon destroyed his kingdom."
          ]
        }
      ],
      formulas: [
        "1780 – Born at Gujranwala; 1792 – becomes chief of Sukerchakia Misl",
        "1799 – captures Lahore; 1801 – proclaimed Maharaja; 1802 – takes Amritsar",
        "Conquests: Kasur 1807; Attock 1813; Multan 1818; Kashmir 1819; Peshawar 1834",
        "1809 – Treaty of Amritsar (Sutlej as boundary) with Charles Metcalfe",
        "1839 – Death of Maharaja Ranjit Singh",
        "Map work: Gujranwala, Lahore, Amritsar, Kasur, Multan, Attock, Kashmir, Peshawar"
      ],
      terms: [
        { term: "Sukerchakia Misl", meaning: "The **Misl of Ranjit Singh's family**, centred around Gujranwala." },
        { term: "Sarkar-i-Khalsa", meaning: "The **name of the Sikh state** under Maharaja Ranjit Singh." },
        { term: "Cis-Sutlej states", meaning: "The Sikh states **between the Sutlej and Yamuna**, which came under British protection." },
        { term: "Treaty of Amritsar (1809)", meaning: "A treaty making the **Sutlej the boundary** between Ranjit Singh's kingdom and British territory." },
        { term: "Sher-e-Punjab", meaning: "'Lion of Punjab'; the **popular title of Maharaja Ranjit Singh**." }
      ],
      qa: [
        {
          q: "Describe the achievements of Maharaja Ranjit Singh. (5 marks)",
          a: "1. He united the Misls into one Sikh kingdom, taking **Lahore in 1799** and being proclaimed **Maharaja in 1801**.\n2. He conquered **Kasur, Multan, Kashmir and Peshawar**, extending his rule to the Khyber.\n3. He modernised the **army** with European officers.\n4. His administration was **secular and just**.\n5. He kept peace with the British through the **Treaty of Amritsar (1809)**."
        },
        {
          q: "Why did the British sign the Treaty of Amritsar with Ranjit Singh? (3 marks)",
          a: "The British wished to protect their territory and control the **cis-Sutlej states**. Ranjit Singh's rising power also worried them. By the treaty (1809), the **Sutlej became the boundary** and Ranjit Singh agreed to expand only to the north-west."
        },
        {
          q: "Write a note on the army of Maharaja Ranjit Singh. (3 marks)",
          a: "Ranjit Singh modernised the army (**Fauj-i-Ain**) on European lines, employing French and other European officers such as **Ventura and Allard**. It had well-trained infantry, cavalry and artillery, and a factory for guns at Lahore, making it the strongest army in the region."
        }
      ],
      quiz: [
        {
          q: "Ranjit Singh captured Lahore in:",
          options: ["1792", "1799", "1801", "1809"],
          answer: 1,
          explain: "He captured Lahore in **1799** and was crowned Maharaja in 1801."
        },
        {
          q: "Ranjit Singh belonged to the:",
          options: ["Ahluwalia Misl", "Bhangi Misl", "Sukerchakia Misl", "Kanhaiya Misl"],
          answer: 2,
          explain: "His father Mahan Singh headed the **Sukerchakia Misl**."
        },
        {
          q: "The Treaty of Amritsar (1809) was signed with:",
          options: ["Lord Dalhousie", "Charles Metcalfe", "Lord Hardinge", "Henry Lawrence"],
          answer: 1,
          explain: "The treaty was signed with **Charles Metcalfe** for the British."
        },
        {
          q: "Which province was conquered by Ranjit Singh in 1819?",
          options: ["Kashmir", "Multan", "Peshawar", "Kasur"],
          answer: 0,
          explain: "**Kashmir** was taken in 1819; Multan in 1818 and Peshawar in 1834."
        },
        {
          q: "Who was the famous Sikh general who governed the north-west for Ranjit Singh?",
          options: ["Jassa Singh Ahluwalia", "Hari Singh Nalwa", "Nawab Kapur Singh", "Sham Singh Attariwala"],
          answer: 1,
          explain: "**Hari Singh Nalwa** held the north-west frontier."
        },
        {
          q: "Ranjit Singh's rule is described as secular because:",
          options: ["Only Sikhs held high posts", "All communities were employed and respected", "Hindus were banned from court", "Only Muslims were employed in the army"],
          answer: 1,
          explain: "He gave high offices to Hindus, Sikhs and Muslims alike."
        }
      ]
    },

    // ───────────── 8. Anglo-Sikh wars ─────────────
    {
      id: "anglo-sikh-wars",
      title: "Anglo-Sikh Wars and British Annexation of Punjab",
      section: "History – Punjab",
      summary: "How the Sikh kingdom fell after Ranjit Singh's death: political instability, the First (1845–46) and Second (1848–49) Anglo-Sikh Wars, their main battles and treaties, and the annexation of Punjab in 1849.",
      notes: [
        {
          heading: "Background",
          points: [
            "After Ranjit Singh died in **1839**, a struggle for power followed among his successors: **Kharak Singh, Nau Nihal Singh and Sher Singh**; finally the child **Duleep Singh** was made Maharaja with his mother **Rani Jindan** as regent.",
            "The army (the **Khalsa army**) gained great influence through its panchayats, while court leaders such as **Lal Singh and Tej Singh** were accused of putting their interests first.",
            "The British, who had taken **Sindh (1843)**, watched Punjab with interest and moved troops near the Sutlej."
          ]
        },
        {
          heading: "First Anglo-Sikh War (1845–46)",
          points: [
            "The Sikh army crossed the Sutlej in December 1845, and the British declared war.",
            "Main battles: **Mudki** and **Ferozeshah** (December 1845), **Aliwal** (January 1846) and **Sobraon** (10 February 1846).",
            "At **Sobraon** the Sikh army was defeated, though it fought bravely; its commander **Sham Singh Attariwala** died in the battle.",
            "By the **Treaty of Lahore (March 1846)**, the Jalandhar Doab was handed to the British, a large war indemnity was demanded, the Sikh army was limited, and a British Resident was posted at Lahore. Duleep Singh remained Maharaja.",
            "Kashmir was given to **Gulab Singh** of Jammu under the Treaty of Amritsar (1846). By the Treaty of Bhairowal (December 1846), Rani Jindan lost her power and a British-controlled council ran the government."
          ]
        },
        {
          heading: "Second Anglo-Sikh War (1848–49)",
          points: [
            "It began with a revolt at **Multan** led by **Dewan Mulraj** in 1848, after two British officers were killed there.",
            "Main battles: **Ramnagar** (1848), **Chillianwala** (13 January 1849), **Multan** (surrender in January 1849) and **Gujrat** (21 February 1849), where the Sikh army was finally defeated.",
            "At Chillianwala, the British suffered heavy losses, but the Sikh forces were defeated at Gujrat.",
            "The Sikh chiefs **Chattar Singh Attariwala and Sher Singh Attariwala** led the Sikh forces in the second war."
          ]
        },
        {
          heading: "Annexation (1849) and causes",
          points: [
            "On **29 March 1849**, **Lord Dalhousie** (Governor-General) annexed Punjab to British India.",
            "**Maharaja Duleep Singh** was pensioned off, sent away from Punjab, and the Koh-i-Noor diamond was taken to England.",
            "Causes of the fall: **weak successors** after Ranjit Singh, **conflict in the court**, the disloyalty of some leaders, the **British desire for the north-west frontier**, and the strength of the British forces and resources.",
            "Punjab was divided into districts under a Board of Administration, headed by **Henry Lawrence**."
          ]
        }
      ],
      formulas: [
        "1839 – Death of Ranjit Singh; 1843 – Duleep Singh becomes Maharaja",
        "First Anglo-Sikh War 1845–46: Mudki, Ferozeshah, Aliwal, Sobraon; Treaty of Lahore (March 1846)",
        "Second Anglo-Sikh War 1848–49: Multan revolt (Mulraj), Ramnagar, Chillianwala, Gujrat",
        "29 March 1849 – Annexation of Punjab by Lord Dalhousie",
        "Map work: Mudki, Ferozeshah, Aliwal, Sobraon (First War); Multan, Ramnagar, Chillianwala, Gujrat (Second War)"
      ],
      terms: [
        { term: "Regent", meaning: "A person who **rules on behalf of a child king**; Rani Jindan for Duleep Singh." },
        { term: "Indemnity", meaning: "A **payment demanded from the defeated side** to cover the costs of war." },
        { term: "Resident", meaning: "A **British officer posted in an Indian state** to guide and supervise its government." },
        { term: "Annexation", meaning: "Taking over a territory and **joining it to one's own state**." },
        { term: "Khalsa army", meaning: "The **Sikh army**, which became a powerful force in politics after Ranjit Singh's death." }
      ],
      qa: [
        {
          q: "Describe the main causes of the First Anglo-Sikh War. (3 marks)",
          a: "1. After Ranjit Singh's death the kingdom was torn by **court conflicts and weak rulers**.\n2. The **Khalsa army** had become powerful and uncontrolled.\n3. The British, having annexed Sindh, built up forces near the Sutlej and wanted control of Punjab; the Sikh army's crossing of the Sutlej in December 1845 started the war."
        },
        {
          q: "Describe the main terms of the Treaty of Lahore (1846). (3 marks)",
          a: "The Jalandhar Doab was ceded to the British, a heavy war indemnity was demanded (with Kashmir later given to Gulab Singh in lieu of it), the size of the Sikh army was limited, and a **British Resident** was placed at Lahore while Duleep Singh remained Maharaja."
        },
        {
          q: "Why was Punjab annexed in 1849? (5 marks)",
          a: "1. After the second war, the Sikh army was defeated at **Gujrat (21 February 1849)**.\n2. The British felt the Sikh kingdom was a threat to their north-western frontier.\n3. **Lord Dalhousie** decided on full annexation, in line with his expansionist policy.\n4. The annexation was declared on **29 March 1849**.\n5. Duleep Singh was pensioned off and the **Koh-i-Noor** was taken to England."
        }
      ],
      quiz: [
        {
          q: "The First Anglo-Sikh War ended with which battle?",
          options: ["Mudki", "Aliwal", "Chillianwala", "Sobraon"],
          answer: 3,
          explain: "The war ended with the British victory at **Sobraon** (10 February 1846)."
        },
        {
          q: "The Second Anglo-Sikh War began with a revolt at:",
          options: ["Lahore", "Multan", "Amritsar", "Peshawar"],
          answer: 1,
          explain: "**Dewan Mulraj** rebelled at Multan in 1848."
        },
        {
          q: "Who annexed Punjab to British India in 1849?",
          options: ["Lord Hardinge", "Lord Dalhousie", "Lord Gough", "Lord Metcalfe"],
          answer: 1,
          explain: "**Lord Dalhousie**, Governor-General, annexed Punjab."
        },
        {
          q: "Who was the last Sikh Maharaja of Punjab?",
          options: ["Sher Singh", "Kharak Singh", "Duleep Singh", "Nau Nihal Singh"],
          answer: 2,
          explain: "**Duleep Singh** was the last Maharaja."
        },
        {
          q: "The Battle of Chillianwala was fought in:",
          options: ["December 1845", "January 1849", "February 1846", "March 1849"],
          answer: 1,
          explain: "Chillianwala was fought on **13 January 1849**."
        }
      ]
    },

    // ───────────── 9. Punjab's contribution to the freedom struggle ─────────────
    {
      id: "punjab-freedom-struggle",
      title: "Punjab's Contribution to the Freedom Struggle",
      section: "History – Punjab",
      summary: "Punjab's role in India's freedom movement: the Kuka movement, Singh Sabha and Arya Samaj, the Pagri Sambhal Jatta agitation, the Ghadar Party, Komagata Maru, Jallianwala Bagh, the Akali movement, and martyrs like Bhagat Singh and Udham Singh.",
      notes: [
        {
          heading: "Early movements",
          points: [
            "**1857**: most of Punjab stayed loyal to the British, although some soldiers (for example at Ferozepur and Jalandhar) revolted.",
            "The **Namdhari (Kuka) movement** was started by **Baba Ram Singh** at Bhaini Sahib. It stressed simple living, and used non-cooperation with British rule; in **1872** a number of Kukas were put to death at Malerkotla.",
            "**Singh Sabha movement (1873)** at Amritsar worked to reform the Sikh community and spread education; **Arya Samaj** (Lahore, 1877) worked for social reform and education.",
            "The **Pagri Sambhal Jatta** agitation of **1907** by farmers, supported by **Lala Lajpat Rai and Ajit Singh**, protested against the Colonization Bill and high canal rates."
          ]
        },
        {
          heading: "Ghadar movement and Komagata Maru",
          points: [
            "The **Ghadar Party** was founded in **1913** in San Francisco (USA) by Punjabi immigrants, with **Sohan Singh Bhakna** as president and **Lala Har Dayal** among its leaders. It called for an armed uprising against the British.",
            "**Kartar Singh Sarabha** was a young Ghadar leader executed in 1915 for the Ghadar conspiracy.",
            "In **1914**, the ship **Komagata Maru**, chartered by **Baba Gurdit Singh**, carried Indian passengers to Canada, but they were refused entry. On return, at Budge Budge near Calcutta, there was a clash with police in which several lives were lost."
          ]
        },
        {
          heading: "Jallianwala Bagh and the Akali movement",
          points: [
            "The **Rowlatt Act (1919)** allowed detention without trial. When Punjab leaders **Dr Saifuddin Kitchlew and Dr Satyapal** were arrested, protests grew.",
            "On **13 April 1919** (Baisakhi) at **Jallianwala Bagh**, Amritsar, **General Dyer** ordered troops to fire on an unarmed crowd, killing hundreds. It shocked the nation.",
            "The **Gurdwara Reform (Akali) movement** (1920–25) freed gurdwaras from corrupt mahants. Important events: **SGPC** formed 1920, **Nankana Sahib** massacre 1921, **Guru ka Bagh** morcha 1922, **Jaito** morcha 1923–25.",
            "The movement ended with the **Sikh Gurdwaras Act, 1925**."
          ]
        },
        {
          heading: "Revolutionaries and martyrs",
          points: [
            "At the **Lahore session of the Congress (1929)**, presided over by Jawaharlal Nehru, the demand for **Purna Swaraj** (complete independence) was made on the Ravi bank.",
            "**Lala Lajpat Rai** was hurt in a lathi charge during a protest against the **Simon Commission** at Lahore (1928) and died soon after.",
            "**Bhagat Singh, Sukhdev and Rajguru** were hanged on **23 March 1931** at Lahore. Bhagat Singh had thrown a bomb in the Central Assembly in 1929 to protest, and was tried in the Saunders case.",
            "**Udham Singh** shot **Michael O'Dwyer**, former Lieutenant Governor of Punjab, in London in **1940**, and was hanged the same year.",
            "Punjab also bore the heaviest cost of the **Partition of 1947**."
          ]
        }
      ],
      formulas: [
        "1872 – Kukas killed at Malerkotla; 1873 – Singh Sabha; 1877 – Arya Samaj at Lahore",
        "1907 – Pagri Sambhal Jatta movement (Ajit Singh, Lala Lajpat Rai)",
        "1913 – Ghadar Party (Sohan Singh Bhakna, Lala Har Dayal); 1914 – Komagata Maru",
        "13 April 1919 – Jallianwala Bagh massacre (General Dyer)",
        "1920 – SGPC; 1921 – Nankana Sahib; 1922 – Guru ka Bagh; 1923–25 – Jaito; 1925 – Gurdwaras Act",
        "1928 – Death of Lala Lajpat Rai; 1929 – Purna Swaraj resolution at Lahore",
        "23 March 1931 – Bhagat Singh, Sukhdev, Rajguru hanged",
        "1940 – Udham Singh and Michael O'Dwyer"
      ],
      terms: [
        { term: "Ghadar", meaning: "Meaning **'revolt'**; the name of the revolutionary party and paper started by Punjabis abroad." },
        { term: "Komagata Maru", meaning: "A **Japanese ship** chartered in 1914 to carry Indian emigrants to Canada, who were refused entry." },
        { term: "Rowlatt Act", meaning: "A **1919 law** allowing the government to arrest and imprison people without trial." },
        { term: "SGPC", meaning: "**Shiromani Gurdwara Parbandhak Committee**, formed in 1920 to manage Sikh gurdwaras." },
        { term: "Purna Swaraj", meaning: "**Complete independence** from British rule." },
        { term: "Morcha", meaning: "A **peaceful protest campaign**, e.g. Guru ka Bagh morcha." }
      ],
      qa: [
        {
          q: "Describe the Jallianwala Bagh massacre. (3 marks)",
          a: "On **13 April 1919**, Baisakhi day, a large peaceful crowd had gathered in Jallianwala Bagh, Amritsar, to protest against the Rowlatt Act and the arrest of leaders. **General Dyer** closed the exit and ordered troops to fire without warning. Hundreds were killed. The event led to widespread anger and strengthened the freedom movement."
        },
        {
          q: "Write a note on the Ghadar movement. (5 marks)",
          a: "1. The **Ghadar Party** was founded in **1913** at San Francisco by Indian immigrants, mostly Punjabis.\n2. **Sohan Singh Bhakna** was its president and **Lala Har Dayal** was a leading member.\n3. Its newspaper **Ghadar** called for armed revolt against the British.\n4. Many members returned to India in 1914–15 to start an uprising, but the plan was discovered.\n5. Leaders like **Kartar Singh Sarabha** were executed."
        },
        {
          q: "What was the Akali movement? (3 marks)",
          a: "It was a movement (1920–25) to free the **gurdwaras from corrupt mahants** and place them under the Sikh community. It included Nankana Sahib, Guru ka Bagh and Jaito, and led to the **Sikh Gurdwaras Act of 1925**."
        }
      ],
      quiz: [
        {
          q: "The Ghadar Party was founded in:",
          options: ["1907", "1913", "1919", "1925"],
          answer: 1,
          explain: "It was founded in **1913** at San Francisco."
        },
        {
          q: "Who ordered the firing at Jallianwala Bagh?",
          options: ["Michael O'Dwyer", "General Dyer", "Lord Chelmsford", "Simon"],
          answer: 1,
          explain: "**General Dyer** gave the order on 13 April 1919."
        },
        {
          q: "Udham Singh killed:",
          options: ["General Dyer", "Michael O'Dwyer", "Saunders", "Lord Hardinge"],
          answer: 1,
          explain: "He shot **Michael O'Dwyer** in London in 1940."
        },
        {
          q: "The Namdhari (Kuka) movement was founded by:",
          options: ["Sohan Singh Bhakna", "Baba Ram Singh", "Baba Gurdit Singh", "Lala Har Dayal"],
          answer: 1,
          explain: "**Baba Ram Singh** started it at Bhaini Sahib."
        },
        {
          q: "The Purna Swaraj resolution was passed at which Congress session?",
          options: ["Lahore, 1929", "Calcutta, 1928", "Amritsar, 1919", "Karachi, 1931"],
          answer: 0,
          explain: "The **Lahore session (1929)** adopted Purna Swaraj as the goal."
        },
        {
          q: "The Gurdwara Reform movement led to the passing of:",
          options: ["Rowlatt Act", "Sikh Gurdwaras Act, 1925", "Government of India Act, 1919", "Colonization Bill"],
          answer: 1,
          explain: "The movement ended with the **Sikh Gurdwaras Act, 1925**."
        }
      ]
    },

    // ═════════════════════════════ CIVICS ═════════════════════════════
    // ───────────── 10. Democracy: working and functioning ─────────────
    {
      id: "democracy-working-functioning",
      title: "Democracy: Working and Functioning",
      section: "Civics",
      summary: "What democracy is, its types and features, how it functions in India through elections, rule of law and fundamental rights, and its merits and challenges.",
      notes: [
        {
          heading: "Meaning and types",
          points: [
            "**Democracy** is a form of government in which the **rulers are chosen by the people**. The word comes from Greek *demos* (people) and *kratos* (rule).",
            "Abraham Lincoln described it as 'government of the people, by the people, for the people'.",
            "**Direct democracy**: people take decisions themselves, practical only in small communities.",
            "**Indirect (representative) democracy**: people elect representatives who make laws and run the government, as in India."
          ]
        },
        {
          heading: "Features of a democracy",
          points: [
            "Rulers are elected in **free and fair elections** and can be voted out.",
            "**Universal adult franchise**: one person, one vote, one value.",
            "Citizens enjoy **basic rights** and the **rule of law**, with an independent judiciary.",
            "Decisions are taken after discussion, and the government is **accountable** to the people."
          ]
        },
        {
          heading: "Democracy in India",
          points: [
            "India is a **democratic republic** with a Constitution that guarantees Fundamental Rights.",
            "The government is parliamentary: the **Parliament**, the **executive** and the **judiciary** each have defined roles (separation of powers).",
            "**Elections** are conducted by an independent body, the **Election Commission of India**.",
            "The voting age is **18 years**."
          ]
        },
        {
          heading: "Merits and challenges",
          points: [
            "Merits: it promotes **equality**, improves the quality of decisions, respects dignity, resolves conflicts peacefully, and allows mistakes to be corrected.",
            "Challenges: **illiteracy, poverty, corruption, casteism and communalism, criminalisation of politics** and low participation.",
            "Citizens strengthen democracy by **voting, staying informed, and taking part in public affairs**."
          ]
        }
      ],
      formulas: [
        "Democracy = government of the people, by the people, for the people",
        "Types: direct and indirect (representative) democracy",
        "India: universal adult franchise; voting age 18 years",
        "Elections conducted by the Election Commission of India"
      ],
      terms: [
        { term: "Democracy", meaning: "A form of government in which **rulers are elected by the people**." },
        { term: "Universal adult franchise", meaning: "The right of **every adult citizen to vote**, without discrimination." },
        { term: "Rule of law", meaning: "The principle that **everyone, including rulers, is subject to the law**." },
        { term: "Representative democracy", meaning: "A democracy in which **people elect representatives** to make decisions for them." },
        { term: "Accountability", meaning: "The duty of rulers to **answer to the people** for their actions." }
      ],
      qa: [
        {
          q: "What are the main features of democracy? (3 marks)",
          a: "1. Rulers are chosen through **free and fair elections**.\n2. **One person, one vote**, with equal value.\n3. Citizens enjoy **rights and freedoms**, protected by an independent judiciary, and the government is **accountable** to the people."
        },
        {
          q: "Differentiate between direct and indirect democracy. (2 marks)",
          a: "In a **direct democracy**, people take decisions themselves; this is possible only in small communities. In an **indirect democracy**, people elect representatives to make decisions on their behalf, as in India."
        }
      ],
      quiz: [
        {
          q: "In India the voting age is:",
          options: ["16 years", "18 years", "21 years", "25 years"],
          answer: 1,
          explain: "Every citizen of **18 years** or above can vote."
        },
        {
          q: "A democracy in which people elect their representatives is called:",
          options: ["Direct democracy", "Monarchy", "Indirect democracy", "Dictatorship"],
          answer: 2,
          explain: "It is an **indirect (representative) democracy**."
        },
        {
          q: "Elections in India are conducted by:",
          options: ["The Supreme Court", "The President", "The Prime Minister", "The Election Commission"],
          answer: 3,
          explain: "The **Election Commission of India** is an independent body."
        },
        {
          q: "'One person, one vote' refers to:",
          options: ["Property qualification for voting", "Universal adult franchise", "Voting only by men", "Compulsory voting"],
          answer: 1,
          explain: "It means every adult has one vote of equal value."
        },
        {
          q: "Which of the following is a challenge to democracy in India?",
          options: ["Free and fair elections", "Rule of law", "Corruption", "Fundamental rights"],
          answer: 2,
          explain: "**Corruption** weakens democracy; the rest are strengths."
        }
      ]
    },

    // ───────────── 11. Power sharing in democracy ─────────────
    {
      id: "power-sharing-in-democracy",
      title: "Power Sharing in Democracy",
      section: "Civics",
      summary: "Why power must be shared: the examples of Belgium and Sri Lanka, prudential and moral reasons, and the forms of power sharing.",
      notes: [
        {
          heading: "Belgium",
          points: [
            "In Belgium about **59%** speak Dutch, **40%** French and **1%** German. In Brussels, 80% speak French and 20% Dutch.",
            "The French-speaking minority was rich and powerful, causing tension with the Dutch-speaking majority.",
            "Belgium amended its Constitution between **1970 and 1993** to share power.",
            "The central government has an **equal number of Dutch- and French-speaking ministers**; state governments are not subordinate to the central government; **Brussels** has a separate government; and a **community government** handles cultural, educational and language matters."
          ]
        },
        {
          heading: "Sri Lanka",
          points: [
            "Sri Lanka's population is about **74% Sinhala** and **18% Tamil**.",
            "After independence in **1948** the Sinhala majority imposed its will: the **1956 Act** made **Sinhala the only official language**, and Buddhism was given a special place.",
            "Tamils felt discriminated against in jobs and education, which led to demands for autonomy and finally a **civil war**, which ended in **2009**."
          ]
        },
        {
          heading: "Why power sharing is good",
          points: [
            "**Prudential reason**: it reduces conflict between groups and keeps the country **stable and united**.",
            "**Moral reason**: power sharing is the **spirit of democracy**; people have a right to be consulted about how they are governed.",
            "Majoritarianism may seem attractive but is harmful for national unity in the long run."
          ]
        },
        {
          heading: "Forms of power sharing",
          points: [
            "**Horizontal**: among legislature, executive and judiciary at the same level; each checks the others (**checks and balances**).",
            "**Vertical**: among governments at different levels; **federal division** of power between the Union, states and local bodies.",
            "**Among social groups**: reserved seats for women and weaker sections.",
            "**Among parties, pressure groups and movements**: competition and **coalition governments**."
          ]
        }
      ],
      formulas: [
        "Belgium: Dutch 59%, French 40%, German 1%",
        "Sri Lanka: Sinhala 74%, Tamil 18%; independence 1948; Sinhala-only Act 1956; civil war ended 2009",
        "Forms: horizontal, vertical, among social groups, among parties and movements"
      ],
      terms: [
        { term: "Majoritarianism", meaning: "The belief that the **majority community should rule** as it likes, ignoring minorities." },
        { term: "Power sharing", meaning: "Dividing power among **different organs, levels and groups** of society." },
        { term: "Checks and balances", meaning: "A system in which each organ of government **limits the power of the others**." },
        { term: "Community government", meaning: "A Belgian government elected by **one language community** to handle cultural and educational matters." },
        { term: "Coalition government", meaning: "A government formed by **two or more parties** together." }
      ],
      qa: [
        {
          q: "Explain the Belgian model of power sharing. (3 marks)",
          a: "1. The central government has **equal numbers of Dutch- and French-speaking ministers**.\n2. Many powers were given to regional governments, and **Brussels** has a separate government with equal representation.\n3. A **community government** looks after cultural, educational and language matters for each language community."
        },
        {
          q: "Why is power sharing desirable? (3 marks)",
          a: "**Prudential reason**: it reduces social conflict and ensures stability. **Moral reason**: it is the spirit of democracy, giving people a say in how they are governed. It prevents the tyranny of the majority."
        }
      ],
      quiz: [
        {
          q: "In Belgium, the capital city Brussels has:",
          options: ["Only Dutch speakers", "Mostly French speakers", "Mostly German speakers", "No separate government"],
          answer: 1,
          explain: "About **80%** of Brussels speak French."
        },
        {
          q: "The Act that made Sinhala the only official language of Sri Lanka was passed in:",
          options: ["1948", "1956", "1980", "2009"],
          answer: 1,
          explain: "The Act was passed in **1956**."
        },
        {
          q: "Power sharing among the legislature, executive and judiciary is:",
          options: ["Vertical", "Horizontal", "Among social groups", "Among parties"],
          answer: 1,
          explain: "Organs at the same level share power **horizontally**."
        },
        {
          q: "Majoritarianism means:",
          options: ["Minorities rule", "The majority community dominates", "Equal sharing of power", "No government"],
          answer: 1,
          explain: "The majority community rules, disregarding the minority."
        },
        {
          q: "A coalition government is an example of power sharing among:",
          options: ["Social groups", "Levels of government", "Political parties", "Organs of government"],
          answer: 2,
          explain: "A coalition is an alliance of **parties**."
        }
      ]
    },

    // ───────────── 12. Competition and contestation in democracy ─────────────
    {
      id: "competition-and-contestation-in-democracy",
      title: "Competition and Contestation in Democracy",
      section: "Civics",
      summary: "How competition among political parties, elections, pressure groups and movements keeps democracy alive, and how India's party system works.",
      notes: [
        {
          heading: "Elections and competition",
          points: [
            "**Elections** are the main way democracy turns competition for power into peaceful contest; voters choose between candidates and parties.",
            "Competition keeps rulers **accountable**: parties know they can lose power if they do not perform.",
            "Elections must be **free and fair**, with an independent Election Commission."
          ]
        },
        {
          heading: "Political parties",
          points: [
            "A **political party** is a group of people who come together to **contest elections and hold power**.",
            "Functions: contest elections, put forward policies and programmes, make laws, form and run governments, act as **opposition**, shape public opinion, and give access to government schemes.",
            "**Party systems**: one-party (China), two-party (USA, UK) and multi-party (India).",
            "A party is recognised as a **national party** or **state party** by the Election Commission on the basis of votes and seats won."
          ]
        },
        {
          heading: "Pressure groups and movements",
          points: [
            "**Pressure groups** are organisations that try to influence government policy without contesting elections, such as trade unions, business bodies and farmers' groups.",
            "**Movements** are mass campaigns for a cause, e.g. the Chipko movement or the movement for the right to information.",
            "They enlarge participation and make government more responsive; they may be **sectional** (interests of one group) or **promotional** (a public cause)."
          ]
        },
        {
          heading: "Problems and reforms",
          points: [
            "Challenges: lack of **internal democracy** in parties, **dynastic politics**, **money and muscle power**, and limited choice.",
            "The **anti-defection law** prevents elected members from switching parties.",
            "Candidates must file affidavits about **property and criminal cases**.",
            "Citizens can improve things by voting wisely and joining public debate."
          ]
        }
      ],
      formulas: [
        "Party systems: one-party (China), two-party (USA, UK), multi-party (India)",
        "National and state parties recognised by the Election Commission",
        "Pressure group: influences policy without contesting elections"
      ],
      terms: [
        { term: "Political party", meaning: "A group of people who **contest elections** and aim to hold power." },
        { term: "Opposition", meaning: "The parties that **do not form the government** and criticise it." },
        { term: "Pressure group", meaning: "An organisation that **influences government policies** without seeking power." },
        { term: "Movement", meaning: "A **collective campaign** for a common cause." },
        { term: "Anti-defection law", meaning: "A law under which a legislator who **leaves their party loses the seat**." }
      ],
      qa: [
        {
          q: "Write any four functions of political parties. (4 marks)",
          a: "1. They **contest elections** by putting up candidates.\n2. They present **policies and programmes** to voters.\n3. They **form and run the government**; defeated parties act as the opposition.\n4. They **shape public opinion** and give people access to government schemes."
        },
        {
          q: "How do pressure groups differ from political parties? (3 marks)",
          a: "Political parties contest elections and aim to **hold power**. Pressure groups do not contest elections; they **influence government policy** for the interests of a section or a cause."
        }
      ],
      quiz: [
        {
          q: "Which country has a one-party system?",
          options: ["USA", "UK", "India", "China"],
          answer: 3,
          explain: "China has a one-party system (Communist Party)."
        },
        {
          q: "A group that tries to influence government policy without contesting elections is a:",
          options: ["Political party", "Pressure group", "Coalition", "Government"],
          answer: 1,
          explain: "That is a **pressure group**."
        },
        {
          q: "The party that does not form the government but criticises it is called the:",
          options: ["Ruling party", "Regional party", "Opposition", "Alliance"],
          answer: 2,
          explain: "The **opposition** keeps the government accountable."
        },
        {
          q: "India has a:",
          options: ["One-party system", "Two-party system", "Multi-party system", "No party system"],
          answer: 2,
          explain: "Several parties compete in India."
        },
        {
          q: "The anti-defection law is meant to stop:",
          options: ["Voting by women", "Legislators changing parties", "Elections", "Party funding"],
          answer: 1,
          explain: "A legislator who changes parties can lose their seat."
        }
      ]
    },

    // ───────────── 13. Outcomes of democracy ─────────────
    {
      id: "outcomes-of-democracy-pseb",
      title: "Outcomes of Democracy",
      section: "Civics",
      summary: "What democracy delivers: accountable, responsive and legitimate government, its effect on growth, inequality, diversity and dignity.",
      notes: [
        {
          heading: "Why democracy",
          points: [
            "Democracy promotes **equality**, improves the **quality of decisions**, offers a way to **resolve conflicts**, and allows mistakes to be corrected.",
            "It is a **form of government**: it creates the conditions for good outcomes but citizens must use them."
          ]
        },
        {
          heading: "Government",
          points: [
            "A democratic government is **accountable** (people can choose and remove rulers), **responsive** (it considers people's needs) and **legitimate** (people accept it as their own).",
            "Decisions may take longer because of discussion, but are more acceptable.",
            "**Transparency** is secured through elections, public debate and the **right to information**."
          ]
        },
        {
          heading: "Economy and inequality",
          points: [
            "Democracy does not guarantee faster economic growth, but the **difference from dictatorships is small**.",
            "Democracies are based on **political equality**, but **economic inequality** and poverty remain a serious challenge."
          ]
        },
        {
          heading: "Diversity and dignity",
          points: [
            "Democracy accommodates **social diversity** by providing peaceful procedures for competition; Belgium is an example.",
            "It enhances the **dignity and freedom** of citizens, including women and disadvantaged castes.",
            "People's complaints show democracy's success: they have become **citizens rather than subjects**."
          ]
        }
      ],
      formulas: [
        "Democratic government: accountable, responsive, legitimate",
        "Strongest: legitimacy, dignity, accommodation of diversity; weakest: economic inequality",
        "Transparency tools: elections, public debate, right to information"
      ],
      terms: [
        { term: "Accountable government", meaning: "A government that is **answerable to the people**." },
        { term: "Legitimate government", meaning: "A government **accepted by the people** as rightful." },
        { term: "Transparency", meaning: "Citizens' ability to **examine decisions** and procedures." },
        { term: "Dictatorship", meaning: "Rule by **one person or group** without the people's consent." },
        { term: "Political equality", meaning: "Equal **voting rights** for every citizen." }
      ],
      qa: [
        {
          q: "Explain how democracy ensures an accountable and legitimate government. (3 marks)",
          a: "People choose their rulers and can **remove them** in elections. Citizens can examine decisions through the **right to information** and open debate. Even when imperfect, a democratic government is the **people's own government**, which makes it legitimate."
        },
        {
          q: "In which areas has democracy not fully delivered? (2 marks)",
          a: "It has not fully reduced **economic inequality and poverty**, as a small group holds a large share of wealth while many remain poor."
        }
      ],
      quiz: [
        {
          q: "Which area has democracy fallen short in the most?",
          options: ["Political equality", "Reducing economic inequality", "Dignity of citizens", "Accommodating diversity"],
          answer: 1,
          explain: "Economic inequality and poverty remain serious."
        },
        {
          q: "Transparency means citizens can:",
          options: ["Ignore laws", "Examine whether decisions were made properly", "Choose judges", "Stop elections"],
          answer: 1,
          explain: "They can check the procedures behind decisions."
        },
        {
          q: "A legitimate government is one that is:",
          options: ["Run by the army", "Accepted by the people", "Always fast", "Never criticised"],
          answer: 1,
          explain: "Legitimacy means acceptance by the people."
        },
        {
          q: "Compared with dictatorships, the growth rate of democracies is:",
          options: ["Far higher", "Slightly lower, with a small difference", "Exactly zero", "Always negative"],
          answer: 1,
          explain: "The difference in economic growth is small."
        },
        {
          q: "Democracy is called a 'form of government' because it:",
          options: ["guarantees good outcomes automatically", "creates conditions that citizens must use to achieve goals", "replaces the need for elections", "gives power only to the majority community"],
          answer: 1,
          explain: "Democracy provides the conditions; citizens must use them."
        }
      ]
    },

    // ───────────── 14. International democratic institutions ─────────────
    {
      id: "international-democratic-institutions-india",
      title: "International Democratic Institutions: India's Role",
      section: "Civics",
      summary: "The United Nations, its main organs and specialised agencies, and India's role as a founding member, peacekeeper and voice of developing nations.",
      notes: [
        {
          heading: "The United Nations",
          points: [
            "The **United Nations (UN)** was founded on **24 October 1945** after the Second World War to maintain **international peace and security** and promote cooperation.",
            "Its headquarters are in **New York**.",
            "It began with **51 member states**; membership has grown to nearly all countries.",
            "The **Universal Declaration of Human Rights** was adopted on **10 December 1948**."
          ]
        },
        {
          heading: "Main organs",
          points: [
            "**General Assembly**: all members, one vote each; discusses world issues.",
            "**Security Council**: responsible for peace and security; **5 permanent members** (USA, UK, France, Russia, China) with veto power and **10 non-permanent members** elected for two years.",
            "**Economic and Social Council (ECOSOC)**: economic and social cooperation.",
            "**International Court of Justice (ICJ)** at **The Hague**: settles disputes between states.",
            "**Secretariat**, headed by the **Secretary-General**; the **Trusteeship Council** has suspended operations since 1994."
          ]
        },
        {
          heading: "Specialised agencies",
          points: [
            "**WHO** (health), **UNESCO** (education, science, culture), **FAO** (food and agriculture), **ILO** (labour) and **UNICEF** (children's welfare).",
            "They work with governments for development and welfare."
          ]
        },
        {
          heading: "India's role",
          points: [
            "India is a **founding member** of the UN (1945).",
            "India has been one of the largest contributors of troops to **UN peacekeeping**; in 2007 it sent the first all-women police unit to Liberia.",
            "**Vijaya Lakshmi Pandit** was the first woman President of the UN General Assembly (1953).",
            "India has served several times as a **non-permanent member** of the Security Council and demands **UN reforms**, including a permanent seat.",
            "India also played a leading role in the **Non-Aligned Movement** and in **SAARC** (founded 1985)."
          ]
        }
      ],
      formulas: [
        "UN founded 24 October 1945; headquarters: New York; 51 original members",
        "UDHR adopted 10 December 1948",
        "Security Council: 5 permanent (USA, UK, France, Russia, China) + 10 non-permanent",
        "ICJ at The Hague",
        "India: founding member of UN; peacekeeping; SAARC 1985"
      ],
      terms: [
        { term: "United Nations", meaning: "An **international organisation** formed in 1945 to maintain peace and promote cooperation." },
        { term: "Veto", meaning: "The **power of a permanent member** of the Security Council to block a resolution." },
        { term: "Peacekeeping", meaning: "UN operations that send **neutral troops** to help maintain peace in conflict areas." },
        { term: "ICJ", meaning: "The **International Court of Justice**, the UN's main judicial organ at The Hague." },
        { term: "UNESCO", meaning: "The UN agency for **education, science and culture**." }
      ],
      qa: [
        {
          q: "Name the main organs of the UN. (3 marks)",
          a: "General Assembly, Security Council, Economic and Social Council, International Court of Justice, the Secretariat and the Trusteeship Council (inactive since 1994)."
        },
        {
          q: "Describe India's role in the United Nations. (5 marks)",
          a: "1. India is a **founding member** of the UN.\n2. It has been a major contributor to **peacekeeping** missions and sent an all-women police unit to Liberia in 2007.\n3. **Vijaya Lakshmi Pandit** was President of the General Assembly in 1953.\n4. India has served as a **non-permanent member** of the Security Council.\n5. It seeks **reform of the Security Council**, including a permanent seat."
        }
      ],
      quiz: [
        {
          q: "The United Nations was founded in:",
          options: ["1919", "1939", "1945", "1950"],
          answer: 2,
          explain: "The UN was founded on **24 October 1945**."
        },
        {
          q: "Which of these is NOT a permanent member of the Security Council?",
          options: ["France", "India", "China", "Russia"],
          answer: 1,
          explain: "India is not a permanent member."
        },
        {
          q: "The International Court of Justice is located at:",
          options: ["New York", "Geneva", "The Hague", "Paris"],
          answer: 2,
          explain: "The ICJ sits at **The Hague**."
        },
        {
          q: "The UN headquarters are in:",
          options: ["Geneva", "New York", "London", "Washington"],
          answer: 1,
          explain: "UN headquarters are in New York."
        },
        {
          q: "The UN agency concerned with health is:",
          options: ["WHO", "FAO", "ILO", "UNESCO"],
          answer: 0,
          explain: "**WHO** is the World Health Organization."
        },
        {
          q: "Who was the first woman President of the UN General Assembly?",
          options: ["Indira Gandhi", "Vijaya Lakshmi Pandit", "Sarojini Naidu", "Hansa Mehta"],
          answer: 1,
          explain: "Vijaya Lakshmi Pandit held the post in 1953."
        }
      ]
    }
  ]
});
