// PSEB Class 8 Science: the earlier NCERT book, which PSEB still uses (2026–27).
StudyData.add(8, "sciencepb", {
  // What this content follows. match: "textbook" | "older-book" | "topic". Set reviewed to a date once a teacher has checked it.
  syllabus: {board: "PSEB", match: "textbook", books: ["Science (earlier NCERT book)"], note: "PSEB 2026–27 uses the earlier NCERT book for this class; chapters follow its list.", reviewed: false},
  chapters: [
    // ------------------------------------------------------------------
    {
      id: "crop-production-and-management",
      title: "Crop Production and Management",
      section: "Biology",
      summary: "Farmers grow crops through a sequence of field operations: preparing the soil, sowing, feeding and watering the plants, protecting them from weeds and pests, and storing the harvest. This chapter explains each step and the main crop seasons in India.",
      notes: [
        {
          heading: "Agriculture and Crop Seasons",
          points: [
            "**Agriculture** is the practice of growing crops and rearing animals for food and other needs.",
            "In India, crops are grown in two main seasons: **Kharif** (sown with the monsoon in June–July, harvested in September–October) and **Rabi** (sown in October–December, harvested in March–May).",
            "Kharif crops include rice, maize, soyabean, cotton, groundnut and arhar (tur). Rabi crops include wheat, gram (chana), peas, mustard and barley."
          ]
        },
        {
          heading: "Steps in Crop Production",
          points: [
            "**Preparing the soil**: loosening and turning the soil so that roots can grow and air and water can enter.",
            "**Sowing**: putting seeds into the prepared soil, by hand or with a seed drill, at the right time and spacing.",
            "**Irrigation**: supplying water to crops at the right times. Much of India's farmland still depends on rain.",
            "**Weeding**, **harvesting**, **threshing**, **winnowing** and **storage** complete the cycle."
          ]
        },
        {
          heading: "Manure and Fertilisers",
          points: [
            "**Manure** is natural organic matter, such as cow dung, compost and plant waste. It enriches the soil slowly and improves its structure.",
            "**Fertilisers** are chemical substances that supply nutrients such as nitrogen, phosphorus and potassium. They act quickly but do not improve soil structure.",
            "**Green manure** is a green crop, such as dhaincha, that is ploughed back into the soil to add nutrients.",
            "Using too many chemical fertilisers can harm soil health and pollute water."
          ]
        },
        {
          heading: "Protecting Crops and Harvesting",
          points: [
            "**Weeds** compete with crops for water, nutrients, sunlight and space. They are removed by hand (using a khurpa), with a hoe, or by weedicides.",
            "**Pests** such as insects, rats and birds damage crops. **Pesticides** control them but must be used carefully.",
            "**Harvesting** is cutting the ripe crop. **Threshing** separates grain from the stalk, and **winnowing** separates grain from the light husk using wind or a fan.",
            "Stored grain must be kept dry and protected from insects, rats and fungi."
          ]
        },
        {
          heading: "Better Farming Methods",
          points: [
            "**Mixed cropping** means growing two or more crops together in the same field at the same time, for example wheat and gram.",
            "**Intercropping** means growing two or more crops in alternate rows of the same field.",
            "**Crop rotation** means growing different crops in turn on the same land, which keeps the soil fertile and reduces pests."
          ]
        }
      ],
      formulas: [
        "Crop production steps: Soil preparation → Sowing → Manuring and fertilising → Irrigation → Weeding → Harvesting → Threshing → Winnowing → Storage",
        "Kharif crops are sown in the monsoon; Rabi crops are sown in winter",
        "Threshing separates grain from stalk; winnowing separates grain from husk"
      ],
      terms: [
        { term: "Kharif crop", meaning: "A crop sown at the beginning of the **monsoon** (June–July) and harvested in September–October." },
        { term: "Rabi crop", meaning: "A crop sown in **winter** (October–December) and harvested in spring (March–May)." },
        { term: "Irrigation", meaning: "Supplying water to crops by **artificial means** at the required times." },
        { term: "Threshing", meaning: "Separating the **grain** from the stalks of the crop." },
        { term: "Winnowing", meaning: "Separating the light **husk** from the heavier grain using wind or a fan." },
        { term: "Manure", meaning: "Organic matter, such as cow dung and compost, that **enriches the soil**." }
      ],
      qa: [
        {
          q: "Why are weeds harmful to a crop?",
          a: "Weeds compete with the crop for **water, nutrients, sunlight and space**, so the crop grows poorly and the yield falls."
        },
        {
          q: "What is the difference between manure and fertiliser?",
          a: "Manure is **natural organic matter** that enriches the soil slowly. A fertiliser is a **chemical or processed** material with concentrated nutrients that acts quickly."
        },
        {
          q: "Why is crop rotation useful to a farmer?",
          a: "Different crops take different nutrients from the soil. Pulses, for example, **add nitrogen** to the soil, so rotating crops keeps the soil fertile and reduces pests."
        }
      ],
      quiz: [
        {
          q: "Which of these is a Rabi crop?",
          options: ["Rice", "Maize", "Wheat", "Soyabean"],
          answer: 2,
          explain: "Wheat is sown in winter (October–December) and harvested in spring. Rice, maize and soyabean are Kharif crops."
        },
        {
          q: "Separating the grain from the husk using wind or a fan is called:",
          options: ["Winnowing", "Threshing", "Weeding", "Sowing"],
          answer: 0,
          explain: "**Winnowing** uses wind or a fan to blow away the light husk. Threshing separates grain from the stalk."
        },
        {
          q: "Which of these is an example of green manure?",
          options: ["Cow dung", "Urea", "Compost", "Dhaincha"],
          answer: 3,
          explain: "Green manure is a green crop, such as dhaincha, ploughed into the soil. Cow dung and compost are ordinary manures, and urea is a fertiliser."
        },
        {
          q: "Growing wheat and gram together in the same field at the same time is called:",
          options: ["Crop rotation", "Mixed cropping", "Green manuring", "Threshing"],
          answer: 1,
          explain: "In **mixed cropping**, two or more crops are grown together in the same field during the same season."
        },
        {
          q: "Why are weeds removed from a field?",
          options: ["They compete with the crop for water and nutrients", "They add nitrogen to the soil", "They protect the crop from insects", "They loosen the soil"],
          answer: 0,
          explain: "Weeds take away water, nutrients, sunlight and space that the crop needs, so they must be removed."
        }
      ]
    },

    // ------------------------------------------------------------------
    {
      id: "microorganisms-friend-and-foe",
      title: "Microorganisms: Friend and Foe",
      section: "Biology",
      summary: "Microorganisms are tiny living things that can be seen only under a microscope. Some are useful, helping us make food and medicines, while others cause diseases and spoil food. This chapter explains both sides and how we control harmful microbes.",
      notes: [
        {
          heading: "What Are Microorganisms?",
          points: [
            "**Microorganisms** (microbes) are living things too small to be seen with the naked eye.",
            "They include **bacteria**, **fungi** (such as moulds and yeast), **protozoa**, **algae** and **viruses**. Viruses are even smaller and can multiply only inside other living cells.",
            "Microbes are found everywhere: in air, water, soil, on our skin and in our food. Most are harmless and many are useful."
          ]
        },
        {
          heading: "Useful Microorganisms",
          points: [
            "**Lactobacillus**, a bacterium, turns milk into curd (dahi).",
            "**Yeast**, a fungus, is used to make bread dough rise, because it releases carbon dioxide gas. It is also used in making wine and beer.",
            "**Rhizobium** lives in root nodules of pulse plants such as gram and peas and **fixes nitrogen** from the air into a form that plants can use.",
            "**Penicillin**, the first antibiotic, is made from a mould called **Penicillium**. Antibiotics kill or stop bacteria that cause infections.",
            "Microbes break down animal dung and plant waste to produce **biogas**, which can be used as fuel."
          ]
        },
        {
          heading: "Harmful Microorganisms",
          points: [
            "Disease-causing microbes are called **pathogens**.",
            "Bacteria cause cholera, typhoid and tuberculosis (TB). Viruses cause the common cold, influenza, measles and polio.",
            "The protozoan Plasmodium causes **malaria**, which spreads through the bite of the female Anopheles mosquito. Viruses such as dengue spread through the Aedes mosquito.",
            "Pathogens spread through contaminated food and water, through the air when we cough or sneeze, and through mosquitoes."
          ]
        },
        {
          heading: "Food Spoilage and Preservation",
          points: [
            "Microbes multiply in food and spoil it, causing bad smell, change in taste and colour, and mould growth on bread and fruits.",
            "**Heating** (such as boiling and **pasteurisation** of milk) kills most microbes.",
            "**Salt, sugar and oil** (used in pickles and murabbas), **drying** and **refrigeration** slow down or stop the growth of microbes.",
            "Keeping food covered, clean and dry is an everyday way to prevent spoilage."
          ]
        },
        {
          heading: "Vaccines and Good Hygiene",
          points: [
            "A **vaccine** contains killed or weakened microbes, or parts of them. It trains the body's immune system to fight the real disease later.",
            "Washing hands, drinking boiled or filtered water, and keeping water from stagnating (to prevent mosquitoes from breeding) protect us from many diseases."
          ]
        }
      ],
      formulas: [
        "Microorganisms: bacteria, fungi, protozoa, algae and viruses",
        "Rhizobium fixes nitrogen for pulse plants such as gram and peas",
        "Pasteurisation: heating milk to kill disease-causing microbes",
        "Vaccine = killed or weakened microbes that train the immune system"
      ],
      terms: [
        { term: "Microorganism", meaning: "A **tiny living thing**, too small to see without a microscope." },
        { term: "Pathogen", meaning: "A microbe that **causes disease**." },
        { term: "Antibiotic", meaning: "A medicine that **kills or stops bacteria**, made from microbes such as moulds." },
        { term: "Vaccine", meaning: "A preparation of killed or weakened microbes that helps the body **build immunity**." },
        { term: "Pasteurisation", meaning: "Heating food, such as milk, briefly to **kill harmful microbes**." },
        { term: "Nitrogen fixation", meaning: "Converting nitrogen from the air into compounds that plants can use, done by bacteria such as Rhizobium." }
      ],
      qa: [
        {
          q: "Why does milk turn sour if it is left out for a long time?",
          a: "Microbes multiply in the milk and produce **lactic acid**, which makes it sour and causes it to curdle. Keeping milk cold or boiling it slows this down."
        },
        {
          q: "How does a vaccine protect us?",
          a: "A vaccine contains **killed or weakened microbes** (or their parts). The body makes **antibodies** against them, so if the real microbe enters later, the body can fight it quickly."
        },
        {
          q: "Why are gram and peas good for the soil?",
          a: "Their roots have **Rhizobium** in root nodules, which fix nitrogen from the air. This enriches the soil with nitrogen for the next crop."
        }
      ],
      quiz: [
        {
          q: "Which microorganism is used to make bread dough rise?",
          options: ["Lactobacillus", "Yeast", "Plasmodium", "Rhizobium"],
          answer: 1,
          explain: "**Yeast**, a fungus, releases carbon dioxide during fermentation, which makes the dough rise."
        },
        {
          q: "Malaria is caused by the protozoan Plasmodium. Which insect spreads it?",
          options: ["Housefly", "Cockroach", "Female Anopheles mosquito", "Honeybee"],
          answer: 2,
          explain: "The female **Anopheles** mosquito carries Plasmodium from one person to another."
        },
        {
          q: "Which of these is a useful activity of bacteria?",
          options: ["Turning milk into curd", "Causing typhoid", "Causing malaria", "Causing cholera"],
          answer: 0,
          explain: "**Lactobacillus** bacteria turn milk into curd. The other three are diseases caused by pathogens."
        },
        {
          q: "Penicillin, the first antibiotic, is obtained from:",
          options: ["A bacterium", "A virus", "A protozoan", "A mould"],
          answer: 3,
          explain: "Penicillin is made from the mould **Penicillium**."
        },
        {
          q: "Which process heats milk briefly to kill harmful microbes?",
          options: ["Fermentation", "Pasteurisation", "Vaccination", "Germination"],
          answer: 1,
          explain: "**Pasteurisation** heats milk to kill disease-causing microbes. Fermentation is the action of microbes, not a way of killing them."
        },
        {
          q: "A vaccine works by:",
          options: ["Killing all microbes in the body", "Replacing the blood", "Training the immune system with dead or weakened microbes", "Making microbes multiply faster"],
          answer: 2,
          explain: "A vaccine gives the body a harmless form of a microbe, so the immune system learns to fight the real one."
        }
      ]
    },

    // ------------------------------------------------------------------
    {
      id: "coal-and-petroleum",
      title: "Coal and Petroleum",
      section: "Chemistry",
      summary: "Coal, petroleum and natural gas are fossil fuels formed from the remains of plants and animals buried for millions of years. This chapter explains how they form, how they are processed into useful products, and why their use must be limited.",
      notes: [
        {
          heading: "Fossil Fuels",
          points: [
            "**Coal**, **petroleum** (crude oil) and **natural gas** are **fossil fuels**, formed from the remains of plants and animals buried under the earth for millions of years.",
            "Fossil fuels are **non-renewable**: they form very slowly, so they cannot be replaced as fast as we use them.",
            "They are the main sources of energy for transport, electricity and industry."
          ]
        },
        {
          heading: "Coal",
          points: [
            "Coal formed from ancient plant matter that was buried and compressed under heat and pressure. As the carbon content rises, the types are **peat**, **lignite**, **bituminous coal** and **anthracite**.",
            "**Destructive distillation** means heating coal strongly in the absence of air. It gives **coke**, **coal tar**, **coal gas** and ammonia liquor.",
            "**Coke** is a hard fuel with high carbon content. It is used in blast furnaces to extract iron from its ore."
          ]
        },
        {
          heading: "Petroleum",
          points: [
            "**Crude oil** is a dark, thick liquid found deep underground, usually in rock layers.",
            "Crude oil is separated into useful **fractions** in a **refinery** by **fractional distillation**, which depends on boiling points.",
            "In order from the lowest boiling point: **LPG** (cooking gas), **petrol**, **kerosene**, **diesel**, **lubricating oil**, **paraffin wax** and **bitumen** (used for making roads)."
          ]
        },
        {
          heading: "Natural Gas and Careful Use",
          points: [
            "**Natural gas** is mainly **methane**. It burns cleanly and is used as **CNG** for vehicles and as **PNG** in homes.",
            "Burning fossil fuels releases **CO₂** and other pollutants, such as sulphur dioxide and oxides of nitrogen, which pollute the air and add to global warming.",
            "We can help by saving fuel, using public transport and using renewable sources such as solar and wind energy."
          ]
        }
      ],
      formulas: [
        "Fossil fuels: coal, petroleum and natural gas (non-renewable)",
        "Fractional distillation separates crude oil into fractions by boiling point",
        "Destructive distillation of coal → coke + coal tar + coal gas + ammonia liquor",
        "Natural gas is mainly methane (CH₄)"
      ],
      terms: [
        { term: "Fossil fuel", meaning: "A fuel formed from the **remains of ancient plants and animals** over millions of years." },
        { term: "Non-renewable", meaning: "A resource that **cannot be replaced** as fast as it is used." },
        { term: "Coke", meaning: "A hard, **carbon-rich** fuel left behind when coal is heated without air." },
        { term: "Destructive distillation", meaning: "Heating coal strongly **without air** to obtain coke, coal tar and coal gas." },
        { term: "Fractional distillation", meaning: "Separating crude oil into **fractions** with different boiling points." },
        { term: "Refinery", meaning: "A plant where **crude oil is processed** into useful products." }
      ],
      qa: [
        {
          q: "Why are coal and petroleum called non-renewable resources?",
          a: "They take **millions of years** to form from dead plants and animals. We use them far faster than they form, so they cannot be replaced in human time."
        },
        {
          q: "Why is CNG preferred over petrol for vehicles in many cities?",
          a: "CNG burns more completely and produces less smoke and fewer particle pollutants than petrol or diesel, so it reduces **air pollution**."
        },
        {
          q: "What is coke used for?",
          a: "Coke is used as a **fuel** and as a **reducing agent** in blast furnaces, where it helps extract iron from its ore."
        }
      ],
      quiz: [
        {
          q: "Coal is formed from:",
          options: ["Sand deposits", "Ancient plant remains buried for millions of years", "Volcanic lava", "Salts left by seawater"],
          answer: 1,
          explain: "Coal forms from the remains of ancient plants that were buried and compressed over millions of years."
        },
        {
          q: "The fraction of crude oil with the lowest boiling point, used as cooking gas, is:",
          options: ["Bitumen", "Diesel", "LPG", "Paraffin wax"],
          answer: 2,
          explain: "**LPG** has the lowest boiling point of these fractions, so it is collected at the top of the fractionating column."
        },
        {
          q: "Which of these is mainly methane?",
          options: ["Coke", "Coal tar", "Natural gas", "Bitumen"],
          answer: 2,
          explain: "**Natural gas** is mainly methane (CH₄)."
        },
        {
          q: "Bitumen obtained from petroleum is used mainly for:",
          options: ["Cooking food", "Making roads", "Making cloth", "Preserving food"],
          answer: 1,
          explain: "Bitumen is a thick, sticky residue used to make and surface roads."
        },
        {
          q: "Destructive distillation of coal produces:",
          options: ["Petrol and diesel", "Only coke", "Carbon dioxide only", "Coke, coal tar and coal gas"],
          answer: 3,
          explain: "Heating coal without air gives **coke, coal tar and coal gas**, along with ammonia liquor."
        },
        {
          q: "Which gas is a major pollutant released when fossil fuels burn, adding to global warming?",
          options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Helium"],
          answer: 2,
          explain: "Burning fossil fuels releases **carbon dioxide**, which traps heat in the atmosphere."
        }
      ]
    },

    // ------------------------------------------------------------------
    {
      id: "combustion-and-flame",
      title: "Combustion and Flame",
      section: "Chemistry",
      summary: "Combustion is the burning of a fuel in oxygen, releasing heat and light. This chapter covers the conditions needed for fire, the parts of a flame, how fires are controlled and why incomplete burning is harmful.",
      notes: [
        {
          heading: "What Is Combustion?",
          points: [
            "**Combustion** is a chemical reaction in which a fuel combines with **oxygen** and releases **heat and light**.",
            "For example, when LPG burns in a kitchen stove, it combines with oxygen from the air to give carbon dioxide, water vapour, heat and light.",
            "Three things are needed for combustion: a **fuel**, **oxygen** (from air) and a **high enough temperature** to start burning."
          ]
        },
        {
          heading: "Ignition Temperature",
          points: [
            "The **ignition temperature** is the lowest temperature at which a substance catches fire and keeps burning.",
            "Wood, paper and kerosene have low ignition temperatures. A burning matchstick raises the temperature of the matchbox to its ignition temperature.",
            "Substances with a low ignition temperature are called **inflammable**, and they must be stored and handled with care."
          ]
        },
        {
          heading: "Types of Combustion",
          points: [
            "**Rapid combustion** is fast burning with a large release of heat and light, such as a wood fire.",
            "**Spontaneous combustion** is burning that starts on its own without a flame, as in damp heaps of hay or cotton waste.",
            "**Complete combustion** happens with enough oxygen and gives carbon dioxide and water. **Incomplete combustion** happens with less oxygen and gives **carbon monoxide** and **soot**, which are harmful."
          ]
        },
        {
          heading: "Structure of a Flame",
          points: [
            "A candle or LPG flame has three zones. The **dark zone** is the innermost part, containing unburnt gas.",
            "The **luminous zone** is the yellow middle part, where incomplete burning produces soot particles that glow.",
            "The **non-luminous zone** is the outer, blue part, where combustion is complete. It is the **hottest** part of the flame."
          ]
        },
        {
          heading: "Controlling Fire",
          points: [
            "A fire is put out by removing one of the three needs: remove the **fuel**, cut off the **oxygen** (for example with a wet blanket or sand), or **cool** the burning material below its ignition temperature.",
            "Water is not used on **oil fires**, because oil floats on water and spreads the fire. Water also conducts electricity, so it is not used on **electrical fires**.",
            "A **carbon dioxide fire extinguisher** cuts off oxygen and is suitable for electrical and oil fires."
          ]
        }
      ],
      formulas: [
        "Combustion: Fuel + Oxygen → Carbon dioxide + Water + Heat + Light",
        "Three needs for fire: fuel, oxygen and ignition temperature",
        "Complete combustion gives CO₂ and H₂O; incomplete combustion gives CO and soot",
        "Non-luminous zone is the hottest part of a flame"
      ],
      terms: [
        { term: "Combustion", meaning: "A chemical reaction in which a fuel **burns in oxygen**, releasing heat and light." },
        { term: "Ignition temperature", meaning: "The **lowest temperature** at which a substance catches fire." },
        { term: "Inflammable", meaning: "Describes a substance with a **low ignition temperature** that catches fire easily." },
        { term: "Spontaneous combustion", meaning: "Burning that **starts on its own**, without an external flame." },
        { term: "Incomplete combustion", meaning: "Burning with **too little oxygen**, which produces carbon monoxide and soot." }
      ],
      qa: [
        {
          q: "Why does a wet blanket put out a fire?",
          a: "It **cuts off the supply of oxygen** and also cools the burning material, so the fire cannot continue."
        },
        {
          q: "What is the difference between complete and incomplete combustion?",
          a: "**Complete combustion** happens with enough oxygen and gives carbon dioxide and water, with a clean blue flame. **Incomplete combustion** happens with less oxygen and gives carbon monoxide and soot, with a yellow, smoky flame."
        },
        {
          q: "Why should a kitchen with a gas stove be well ventilated?",
          a: "Poor air supply can cause incomplete burning of LPG, which produces **carbon monoxide**, a poisonous gas. Fresh air keeps combustion complete and safe."
        }
      ],
      quiz: [
        {
          q: "Combustion needs which of the following?",
          options: ["Fuel, oxygen and a suitable ignition temperature", "Fuel and water only", "Only sunlight", "Carbon dioxide and nitrogen"],
          answer: 0,
          explain: "Combustion needs a **fuel**, **oxygen** and a temperature high enough to start the burning."
        },
        {
          q: "The lowest temperature at which a substance catches fire is called its:",
          options: ["Melting point", "Boiling point", "Ignition temperature", "Freezing point"],
          answer: 2,
          explain: "The **ignition temperature** is the lowest temperature at which a substance catches fire."
        },
        {
          q: "Which part of a candle flame is the hottest?",
          options: ["The dark zone in the centre", "The yellow luminous zone", "The outer blue non-luminous zone", "The base of the wick"],
          answer: 2,
          explain: "The **outer non-luminous zone** is hottest because combustion is complete there."
        },
        {
          q: "Soot and carbon monoxide are formed during:",
          options: ["Complete combustion", "Incomplete combustion", "Melting", "Dissolving"],
          answer: 1,
          explain: "**Incomplete combustion**, caused by a shortage of oxygen, forms soot and carbon monoxide."
        },
        {
          q: "Why should water not be used to put out an oil fire?",
          options: ["Water is too hot to use", "Oil floats on water and can spread the fire", "Water adds oxygen to the fire", "Oil does not burn in water"],
          answer: 1,
          explain: "Oil floats on water, so the burning oil spreads. Sand or a carbon dioxide extinguisher is used instead."
        },
        {
          q: "Which of these is a way of putting out a fire?",
          options: ["Adding more fuel", "Raising the temperature", "Increasing the air flow", "Cutting off the supply of oxygen"],
          answer: 3,
          explain: "Cutting off oxygen, removing fuel or cooling the fuel below its ignition temperature all put out a fire."
        }
      ]
    },

    // ------------------------------------------------------------------
    {
      id: "conservation-of-plants-and-animals",
      title: "Conservation of Plants and Animals",
      section: "Biology",
      summary: "Plants and animals are the living wealth of our planet, but human activity has made many species rare or extinct. This chapter explains deforestation, endangered species, and how forests and wildlife are protected through sanctuaries, national parks and biosphere reserves.",
      notes: [
        {
          heading: "Why Conservation Matters",
          points: [
            "**Conservation** means protecting plants, animals and their habitats so that they survive for the future.",
            "Forests give us oxygen, rainfall and protection for soil. Animals help control pests and spread seeds. All living things depend on one another.",
            "Hunting, pollution, deforestation and the spread of farms and cities destroy habitats. Species then become **endangered** or **extinct**."
          ]
        },
        {
          heading: "Deforestation",
          points: [
            "**Deforestation** is the large-scale cutting of trees for timber, farmland, roads, dams and towns.",
            "It causes **soil erosion**, floods, reduced rainfall, loss of animal habitats and a rise in carbon dioxide levels.",
            "**Afforestation** (planting new forests) and careful use of forest wood help restore forests."
          ]
        },
        {
          heading: "Protected Areas",
          points: [
            "**Wildlife sanctuaries** and **national parks** are protected areas where animals live safely. National parks are stricter, and farming and grazing are not allowed in them.",
            "**Biosphere reserves** protect large natural areas. They have a core zone, a buffer zone and a transition zone, where people live in harmony with nature.",
            "**Project Tiger**, started in 1973, aims to protect the tiger and its habitat."
          ]
        },
        {
          heading: "Methods of Conservation",
          points: [
            "**In-situ conservation** protects species in their natural habitat, for example in national parks and sanctuaries.",
            "**Ex-situ conservation** protects species outside their natural habitat, for example in zoos, botanical gardens, seed banks and gene banks.",
            "The **Red Data Book** lists plants and animals that are rare or endangered.",
            "The **Chipko movement** (1973), in Uttarakhand, saw villagers hug trees to stop them being cut down."
          ]
        },
        {
          heading: "What We Can Do",
          points: [
            "Save paper, plant trees, and avoid buying products made from endangered animals.",
            "Do not litter in forests and parks, and keep water sources clean."
          ]
        }
      ],
      formulas: [
        "In-situ conservation = protection in the natural habitat",
        "Ex-situ conservation = protection outside the natural habitat (zoos, botanical gardens, seed banks)",
        "Biosphere reserve zones: core, buffer and transition"
      ],
      terms: [
        { term: "Conservation", meaning: "Protecting plants, animals and their **habitats** so that they survive." },
        { term: "Deforestation", meaning: "Large-scale **cutting down of forests**." },
        { term: "Endangered species", meaning: "Species at risk of **disappearing** completely from the earth." },
        { term: "Biosphere reserve", meaning: "A large protected area that includes **core, buffer and transition zones** for conservation." },
        { term: "In-situ conservation", meaning: "Protecting a species in its **natural habitat**." },
        { term: "Ex-situ conservation", meaning: "Protecting a species **outside its natural habitat**, for example in a zoo." }
      ],
      qa: [
        {
          q: "What is the difference between a wildlife sanctuary and a national park?",
          a: "Both protect wildlife, but a national park is more strictly protected. **Human activities such as grazing and farming are not allowed** in it, while a sanctuary may allow some activities."
        },
        {
          q: "How does deforestation lead to floods?",
          a: "Tree roots hold the soil and absorb rainwater. Without trees, heavy rain runs off quickly, causes **soil erosion** and carries silt into rivers, which can overflow and cause floods."
        },
        {
          q: "Name one in-situ and one ex-situ method of conservation.",
          a: "In-situ: a national park or wildlife sanctuary. Ex-situ: a zoo, a botanical garden or a seed bank."
        }
      ],
      quiz: [
        {
          q: "Protecting species in their natural habitat is called:",
          options: ["Ex-situ conservation", "In-situ conservation", "Afforestation", "Deforestation"],
          answer: 1,
          explain: "**In-situ conservation** protects species in their natural habitat, such as a national park."
        },
        {
          q: "Which of these is a major effect of deforestation?",
          options: ["Increase in forest cover", "Increase in soil erosion", "Increase in rainfall", "Stronger tree roots"],
          answer: 1,
          explain: "Without tree cover, the soil is washed away more easily, so **soil erosion** increases."
        },
        {
          q: "Which of these is an example of ex-situ conservation?",
          options: ["National park", "Wildlife sanctuary", "Zoo", "Biosphere reserve"],
          answer: 2,
          explain: "A zoo protects animals **outside** their natural habitat, so it is ex-situ conservation."
        },
        {
          q: "Which book lists plants and animals that are rare or endangered?",
          options: ["Almanac", "Red Data Book", "Atlas", "Dictionary"],
          answer: 1,
          explain: "The **Red Data Book** records species that are rare, endangered or threatened."
        },
        {
          q: "Project Tiger was started to protect:",
          options: ["Lions", "Rhinoceros", "Tigers", "Elephants"],
          answer: 2,
          explain: "Project Tiger, launched in 1973, aims to protect the tiger and its habitat."
        },
        {
          q: "The movement in which villagers hugged trees to stop them being cut is called:",
          options: ["Chipko movement", "Green revolution", "Dairy movement", "Operation Flood"],
          answer: 0,
          explain: "The **Chipko movement** in Uttarakhand (1973) was a people's campaign to save forests."
        }
      ]
    },

    // ------------------------------------------------------------------
    {
      id: "reproduction-in-animals",
      title: "Reproduction in Animals",
      section: "Biology",
      summary: "Animals continue their species by reproduction. This chapter compares asexual and sexual reproduction, explains how fertilisation happens inside or outside the body, and describes egg-laying and live-bearing animals.",
      notes: [
        {
          heading: "Why Animals Reproduce",
          points: [
            "**Reproduction** is the process by which living things produce new individuals of their own kind, so that the species continues.",
            "Animals reproduce in two main ways: **asexual reproduction**, which needs one parent, and **sexual reproduction**, which needs two parents."
          ]
        },
        {
          heading: "Asexual Reproduction",
          points: [
            "In asexual reproduction, the offspring are almost identical to the parent, because no gametes fuse.",
            "**Binary fission**: the amoeba divides into two identical halves.",
            "**Budding**: a small bud grows on the body of Hydra, develops into a new individual and then breaks away.",
            "**Regeneration**: a flatworm, such as planaria, cut into pieces can regrow each piece into a complete worm."
          ]
        },
        {
          heading: "Sexual Reproduction",
          points: [
            "Sexual reproduction involves a **male gamete** (sperm) and a **female gamete** (egg) fusing together. This fusion is called **fertilisation**.",
            "The fused cell, called the **zygote**, develops into a new individual. Offspring show variation because they inherit traits from both parents.",
            "**Internal fertilisation** happens inside the female's body, as in birds and mammals. **External fertilisation** happens outside the body, usually in water, as in frogs and most fish."
          ]
        },
        {
          heading: "Oviparous and Viviparous Animals",
          points: [
            "**Oviparous** animals lay eggs, and the young develop outside the mother's body. Examples are hens, frogs, lizards and most fish.",
            "**Viviparous** animals give birth to young ones that develop inside the mother's body. Examples are cows, dogs and humans.",
            "Eggs of oviparous animals are protected by a shell or a jelly-like covering."
          ]
        }
      ],
      formulas: [
        "Asexual reproduction: one parent, offspring almost identical to the parent",
        "Sexual reproduction: two parents, gamete fusion → zygote",
        "Fertilisation: sperm + egg → zygote",
        "Oviparous = lay eggs; Viviparous = give birth to young ones"
      ],
      terms: [
        { term: "Reproduction", meaning: "The process by which living things produce **new individuals** of their own kind." },
        { term: "Asexual reproduction", meaning: "Reproduction by **one parent** without the fusion of gametes." },
        { term: "Gamete", meaning: "A **reproductive cell**, such as a sperm or an egg, that fuses with another to form a new individual." },
        { term: "Fertilisation", meaning: "The **fusion of a sperm and an egg** to form a zygote." },
        { term: "Oviparous", meaning: "Describes animals that **lay eggs**, which develop outside the mother's body." },
        { term: "Viviparous", meaning: "Describes animals that **give birth** to young ones that develop inside the mother's body." }
      ],
      qa: [
        {
          q: "Why are offspring from asexual reproduction almost identical to the parent?",
          a: "There is no fusion of gametes, so the young receive genetic material from **only one parent** and are almost exact copies of it."
        },
        {
          q: "What is the difference between internal and external fertilisation? Give one example of each.",
          a: "In **internal fertilisation** the egg is fertilised inside the female's body, as in humans. In **external fertilisation** the egg and sperm meet outside the body, usually in water, as in frogs."
        },
        {
          q: "Why do offspring from sexual reproduction show more variation than those from asexual reproduction?",
          a: "In sexual reproduction the genes from **two parents** are mixed, so the offspring differ from each other and from the parents."
        }
      ],
      quiz: [
        {
          q: "The amoeba reproduces by:",
          options: ["Budding", "Binary fission", "Regeneration", "Fertilisation"],
          answer: 1,
          explain: "An amoeba divides into two halves by **binary fission**, which is a form of asexual reproduction."
        },
        {
          q: "Hydra reproduces asexually mainly by:",
          options: ["Binary fission", "Regeneration", "Budding", "Internal fertilisation"],
          answer: 2,
          explain: "In **budding**, a bud grows on the Hydra's body and breaks off as a new individual."
        },
        {
          q: "The fusion of a sperm and an egg is called:",
          options: ["Fertilisation", "Regeneration", "Fission", "Budding"],
          answer: 0,
          explain: "The fusion of a male and female gamete is **fertilisation**, which forms a zygote."
        },
        {
          q: "Which of these animals is oviparous?",
          options: ["Cow", "Human", "Hen", "Dog"],
          answer: 2,
          explain: "A hen lays eggs, so it is **oviparous**. The other three give birth to young ones."
        },
        {
          q: "Which type of fertilisation takes place in frogs?",
          options: ["Internal fertilisation", "External fertilisation", "Binary fission", "Budding"],
          answer: 1,
          explain: "Frogs lay eggs in water, where the sperm and eggs meet outside the body. This is **external fertilisation**."
        },
        {
          q: "A flatworm cut into pieces, each of which grows into a complete worm, shows:",
          options: ["Regeneration", "Sexual reproduction", "Gamete formation", "Fertilisation"],
          answer: 0,
          explain: "**Regeneration** is the ability to regrow a whole individual from a part of the body."
        }
      ]
    },

    // ------------------------------------------------------------------
    {
      id: "reaching-the-age-of-adolescence",
      title: "Reaching the Age of Adolescence",
      section: "Biology",
      summary: "Adolescence is the period between childhood and adulthood, roughly from 10 to 19 years. The body and mind change during this time. This chapter explains these changes factually, along with the importance of hygiene, healthy habits and talking to trusted adults.",
      notes: [
        {
          heading: "What Is Adolescence?",
          points: [
            "**Adolescence** is the stage of growth between childhood and adulthood, roughly from 10 to 19 years of age.",
            "**Puberty** is the period when the reproductive organs mature and the body changes to become capable of reproduction.",
            "Puberty usually begins between about 10 and 13 years in girls, and about 12 and 14 years in boys. The age varies from person to person."
          ]
        },
        {
          heading: "Body Changes",
          points: [
            "A rapid increase in height and weight, called the **growth spurt**, is one of the first changes.",
            "Hair grows under the arms and on the pubic area in both boys and girls. Boys' voices become deeper, and they grow hair on the face.",
            "Sweat and oil glands become more active, which can cause body odour and pimples.",
            "Girls begin **menstruation**, a monthly process in which the lining of the uterus is shed through the vagina. It is a normal and healthy process."
          ]
        },
        {
          heading: "Hormones and Glands",
          points: [
            "**Hormones** are chemical messengers made by glands and carried in the blood.",
            "The **pituitary gland** is often called the master gland. It signals the testes in boys and the ovaries in girls to release hormones.",
            "The hormones are **testosterone** in boys and **oestrogen** in girls. These hormones bring about the changes of puberty."
          ]
        },
        {
          heading: "Healthy Habits and Feelings",
          points: [
            "Mood swings, shyness and a wish for privacy are normal during adolescence.",
            "A balanced diet, daily exercise, enough sleep and regular bathing keep the body healthy.",
            "Use clean cloth or sanitary pads during menstruation, and dispose of used pads properly.",
            "Talk to parents, teachers or a doctor when you have questions. Do not trust myths or false information."
          ]
        }
      ],
      formulas: [
        "Adolescence: about 10 to 19 years of age",
        "Puberty: girls about 10 to 13 years; boys about 12 to 14 years (varies from person to person)",
        "Testosterone is the hormone of boys; oestrogen is the hormone of girls"
      ],
      terms: [
        { term: "Adolescence", meaning: "The period of growth from **childhood to adulthood**, roughly 10 to 19 years." },
        { term: "Puberty", meaning: "The stage when the **reproductive organs mature** and the body becomes capable of reproduction." },
        { term: "Growth spurt", meaning: "A **rapid increase** in height and weight during adolescence." },
        { term: "Menstruation", meaning: "The **monthly shedding** of the uterine lining in girls, a normal part of puberty." },
        { term: "Hormone", meaning: "A **chemical messenger** made by glands that controls body processes." },
        { term: "Pituitary gland", meaning: "A gland that **controls other glands** and is often called the master gland." }
      ],
      qa: [
        {
          q: "Why do the voices of boys become deeper during adolescence?",
          a: "Under the influence of **testosterone**, the voice box (larynx) grows larger and the vocal cords become longer and thicker, so the voice deepens."
        },
        {
          q: "What is the role of hormones during adolescence?",
          a: "Hormones are **chemical messengers** that trigger the changes of puberty, such as the growth spurt, the development of reproductive organs and the growth of body hair."
        },
        {
          q: "Why is good hygiene important during adolescence?",
          a: "Sweat and oil glands become more active, so regular bathing and clean clothes prevent **body odour, pimples and infections**."
        }
      ],
      quiz: [
        {
          q: "The period of growth between childhood and adulthood is called:",
          options: ["Infancy", "Adolescence", "Old age", "Gestation"],
          answer: 1,
          explain: "**Adolescence** is the stage between childhood and adulthood, roughly 10 to 19 years."
        },
        {
          q: "Which gland is often called the master gland?",
          options: ["Thyroid gland", "Salivary gland", "Pituitary gland", "Sweat gland"],
          answer: 2,
          explain: "The **pituitary gland** controls several other glands, so it is called the master gland."
        },
        {
          q: "The hormone testosterone is produced in:",
          options: ["Ovaries", "Thyroid", "Testes", "Pancreas"],
          answer: 2,
          explain: "Testosterone is produced in the **testes** of boys."
        },
        {
          q: "The monthly process in girls in which the uterine lining is shed is called:",
          options: ["Menstruation", "Puberty", "Metamorphosis", "Gestation"],
          answer: 0,
          explain: "**Menstruation** is the monthly shedding of the uterine lining. It is a normal part of puberty."
        },
        {
          q: "The sudden rapid increase in height and weight during adolescence is called the:",
          options: ["Moulting", "Growth spurt", "Hibernation", "Gestation period"],
          answer: 1,
          explain: "The **growth spurt** is a rapid increase in height and weight during adolescence."
        },
        {
          q: "Which of these is a healthy habit during adolescence?",
          options: ["Skipping meals to stay thin", "Staying awake all night", "Ignoring cleanliness", "Regular exercise and a balanced diet"],
          answer: 3,
          explain: "Regular exercise, a balanced diet, sleep and cleanliness keep the body healthy during adolescence."
        }
      ]
    },

    // ------------------------------------------------------------------
    {
      id: "force-and-pressure",
      title: "Force and Pressure",
      section: "Physics",
      summary: "A force is a push or a pull that can change the motion or shape of an object. This chapter explains pressure, which depends on how a force is spread over an area, and how pressure acts in liquids and in the atmosphere.",
      notes: [
        {
          heading: "Force",
          points: [
            "A **force** is a push or a pull. Forces can start, stop or change the speed or direction of a moving object, and can change the shape of an object.",
            "The SI unit of force is the **newton** (N). An object of mass 1 kg has a weight of about 10 N on the earth."
          ]
        },
        {
          heading: "Thrust and Pressure",
          points: [
            "**Thrust** is the force acting perpendicular to a surface.",
            "**Pressure** is the thrust acting on unit area: **Pressure = Thrust ÷ Area**.",
            "The SI unit of pressure is the **pascal** (Pa), which equals one newton per square metre (N/m²).",
            "For the same force, a smaller area gives greater pressure. That is why a sharp knife cuts easily and a pointed nail goes into wood easily."
          ]
        },
        {
          heading: "Pressure in Everyday Life",
          points: [
            "Camels have broad feet, and tractors have wide tyres. They spread their weight over a large area, so they exert less pressure on sand and mud.",
            "Skis spread a person's weight over snow, so the person sinks less.",
            "The walls of a dam are made thicker at the bottom because the water pressure is greater there."
          ]
        },
        {
          heading: "Pressure in Liquids and Air",
          points: [
            "Liquids exert pressure in all directions. The pressure in a liquid **increases with depth**.",
            "The air around us presses on every surface. This is **atmospheric pressure**, which is about 1 × 10⁵ Pa at sea level."
          ]
        }
      ],
      formulas: [
        "Pressure = Thrust ÷ Area (P = F ÷ A)",
        "Unit of force: newton (N); unit of pressure: pascal (Pa) = N/m²",
        "Pressure in a liquid increases with depth",
        "Atmospheric pressure at sea level ≈ 1 × 10⁵ Pa"
      ],
      examples: [
        {
          q: "A force of 200 N acts perpendicular to a surface of area 0.5 m². Find the pressure.",
          steps: [
            "Pressure = Thrust ÷ Area",
            "P = 200 N ÷ 0.5 m²",
            "P = 400 N/m²"
          ],
          answer: "Pressure = 400 Pa"
        }
      ],
      terms: [
        { term: "Force", meaning: "A **push or a pull** that can change the motion or shape of an object." },
        { term: "Thrust", meaning: "The **force acting perpendicular** to a surface." },
        { term: "Pressure", meaning: "The **thrust acting on unit area**, found by dividing thrust by area." },
        { term: "Pascal", meaning: "The SI unit of pressure, equal to **one newton per square metre**." },
        { term: "Atmospheric pressure", meaning: "The **pressure exerted by the air** around us on every surface." }
      ],
      qa: [
        {
          q: "Why does a sharp knife cut better than a blunt knife?",
          a: "The sharp edge has a very small area, so the same force produces **much greater pressure**, which cuts the material."
        },
        {
          q: "Why are the walls of a dam thicker at the bottom?",
          a: "Water pressure **increases with depth**, so the bottom of the dam must withstand greater pressure and needs to be thicker and stronger."
        },
        {
          q: "Why does a person on skis sink less into snow?",
          a: "Skis spread the person's weight over a **larger area**, so the pressure on the snow is less."
        }
      ],
      quiz: [
        {
          q: "The SI unit of force is:",
          options: ["Pascal", "Joule", "Newton", "Metre"],
          answer: 2,
          explain: "Force is measured in **newtons** (N)."
        },
        {
          q: "Pressure is defined as:",
          options: ["Thrust × Area", "Area ÷ Thrust", "Thrust ÷ Area", "Thrust + Area"],
          answer: 2,
          explain: "**Pressure = Thrust ÷ Area**."
        },
        {
          q: "A nail is pointed at one end so that:",
          options: ["It becomes heavier", "It rusts less", "It produces greater pressure for a given force", "It produces less pressure"],
          answer: 2,
          explain: "The pointed tip has a small area, so the same push produces greater pressure and the nail enters wood easily."
        },
        {
          q: "Camels have broad feet on sand so that they:",
          options: ["Can walk faster", "Exert less pressure on the sand", "Exert more pressure on the sand", "Can jump higher"],
          answer: 1,
          explain: "A broad foot spreads the camel's weight over a larger area, which reduces the pressure on the sand."
        },
        {
          q: "The SI unit of pressure is:",
          options: ["Kilogram", "Newton", "Metre per second", "Pascal"],
          answer: 3,
          explain: "Pressure is measured in **pascals** (Pa), which is one newton per square metre."
        },
        {
          q: "Pressure in a liquid increases with:",
          options: ["Colour of the liquid", "Shape of the container", "Width of the container", "Depth"],
          answer: 3,
          explain: "The pressure in a liquid increases with **depth**. It does not depend on the colour or the shape of the container."
        }
      ]
    },

    // ------------------------------------------------------------------
    {
      id: "friction",
      title: "Friction",
      section: "Physics",
      summary: "Friction is a force that opposes the motion of one surface over another. It helps us walk, write and stop vehicles, but it also wastes energy and wears things out. This chapter explains what affects friction and how it can be increased or reduced.",
      notes: [
        {
          heading: "What Is Friction?",
          points: [
            "**Friction** is the force that opposes the motion of one surface sliding over another surface in contact.",
            "Friction always acts in the direction opposite to the motion, or the attempted motion.",
            "Friction produces heat. Rubbing your palms together makes them warm."
          ]
        },
        {
          heading: "Types of Friction",
          points: [
            "**Static friction** acts on an object at rest and prevents it from starting to move, for example a box lying on the floor.",
            "**Sliding friction** acts when one surface slides over another, for example a book pushed across a table.",
            "**Rolling friction** acts when a wheel or ball rolls over a surface. It is much smaller than sliding friction.",
            "**Fluid friction** acts on objects moving through air or water, for example the resistance of air on a falling parachute."
          ]
        },
        {
          heading: "Factors Affecting Friction",
          points: [
            "Friction depends on the **nature of the surfaces**. Rough surfaces produce more friction than smooth ones.",
            "Friction increases when the **force pressing the surfaces together** increases. A heavier box experiences more friction.",
            "Friction does not depend much on the area of contact between the surfaces.",
            "Static friction is usually greater than sliding friction. That is why it is harder to start pushing a heavy box than to keep it moving."
          ]
        },
        {
          heading: "Increasing and Reducing Friction",
          points: [
            "**To increase friction:** tyres have treads, shoe soles have grooves, and brakes press against wheels.",
            "**To reduce friction:** use lubricants such as oil, grease or graphite, use ball bearings or wheels, and streamline the shape of vehicles and aeroplanes.",
            "Friction is useful for walking, writing and holding objects. However, it wears out machine parts and wastes energy."
          ]
        }
      ],
      formulas: [
        "Friction always opposes motion",
        "Friction depends on the roughness of the surfaces and the force pressing them together",
        "Rolling friction < Sliding friction",
        "Static friction is usually greater than sliding friction"
      ],
      terms: [
        { term: "Friction", meaning: "A force that **opposes the motion** of one surface sliding over another." },
        { term: "Static friction", meaning: "Friction that **prevents an object from starting to move**." },
        { term: "Sliding friction", meaning: "Friction between two surfaces that **slide over each other**." },
        { term: "Rolling friction", meaning: "Friction when a **wheel or ball rolls** over a surface; it is usually the smallest." },
        { term: "Lubricant", meaning: "A substance, such as oil or grease, that **reduces friction** between moving surfaces." },
        { term: "Streamlining", meaning: "Shaping an object so that it **moves through air or water** with less resistance." }
      ],
      qa: [
        {
          q: "Why do we walk without slipping on a road?",
          a: "The rough soles of our shoes and the rough road surface produce **friction**. This friction prevents slipping and pushes us forward as we walk."
        },
        {
          q: "Why is it easier to roll a heavy suitcase on wheels than to drag it?",
          a: "**Rolling friction** is much smaller than sliding friction, so much less force is needed to move the suitcase."
        },
        {
          q: "How does oil reduce friction in a machine?",
          a: "Oil forms a thin layer between the moving surfaces, so they slide over each other more easily and the rough parts do not rub directly."
        }
      ],
      quiz: [
        {
          q: "Friction acts in which direction?",
          options: ["In the direction of motion", "Opposite to the direction of motion", "Upwards always", "Sideways always"],
          answer: 1,
          explain: "Friction always acts **opposite** to the direction of motion, or attempted motion."
        },
        {
          q: "Which friction acts on a box lying still on the floor until it is pushed hard?",
          options: ["Rolling friction", "Sliding friction", "Static friction", "Fluid friction"],
          answer: 2,
          explain: "**Static friction** holds an object at rest until the applied force is large enough to start it moving."
        },
        {
          q: "Which of these reduces friction?",
          options: ["Making the tyre treads deeper", "Pressing the brakes", "Sanding a wooden surface", "Adding grease to a bicycle chain"],
          answer: 3,
          explain: "**Grease** is a lubricant that reduces friction between the moving parts of a chain."
        },
        {
          q: "Which type of friction is usually the smallest?",
          options: ["Static friction", "Sliding friction", "Rolling friction", "Friction between two rough blocks"],
          answer: 2,
          explain: "**Rolling friction** is much smaller than sliding friction, which is why wheels and ball bearings reduce friction."
        },
        {
          q: "Friction depends mainly on:",
          options: ["Colour of the surfaces", "Roughness of the surfaces", "Size of the room", "Temperature of the air"],
          answer: 1,
          explain: "Friction depends on the **roughness** of the surfaces and the force pressing them together."
        },
        {
          q: "Which of these is a disadvantage of friction?",
          options: ["It helps us walk", "It helps brakes stop a vehicle", "It helps us hold a pen", "It wears out machine parts"],
          answer: 3,
          explain: "Friction wears out machine parts and wastes energy as heat, though it is useful in most other cases."
        }
      ]
    },

    // ------------------------------------------------------------------
    {
      id: "sound",
      title: "Sound",
      section: "Physics",
      summary: "Sound is produced by vibrating objects and travels as a wave through a medium. This chapter explains frequency, amplitude, the range of human hearing, the speed of sound, echoes and the uses of ultrasound.",
      notes: [
        {
          heading: "How Sound Is Produced",
          points: [
            "Sound is produced by **vibrating** objects. The skin of a tabla, a guitar string and our vocal cords all vibrate to produce sound.",
            "Sound needs a **medium**, which can be a solid, a liquid or a gas, to travel. It cannot travel through a vacuum, which is why astronauts need radios in space.",
            "Sound travels as a wave. The particles of the medium vibrate back and forth and pass the energy along."
          ]
        },
        {
          heading: "Frequency, Amplitude and Pitch",
          points: [
            "**Frequency** is the number of vibrations per second. Its unit is the **hertz** (Hz).",
            "A high-frequency sound has a high **pitch**, like a whistle. A low-frequency sound has a low pitch, like a drum.",
            "**Amplitude** is the size of the vibration. A larger amplitude gives a **louder** sound. Loudness is measured in **decibels** (dB)."
          ]
        },
        {
          heading: "Range of Human Hearing",
          points: [
            "Humans can hear sounds with frequencies from about **20 Hz to 20,000 Hz**.",
            "Sounds below 20 Hz are called **infrasonic**, and sounds above 20,000 Hz are called **ultrasonic**. We cannot hear either.",
            "Dogs, bats and dolphins can hear sounds of higher frequencies than we can."
          ]
        },
        {
          heading: "Speed of Sound and Echoes",
          points: [
            "Sound travels at about **340 m/s** in air. It travels faster in liquids and even faster in solids such as steel.",
            "An **echo** is a sound reflected back from a hard surface, such as a wall, a cliff or a building.",
            "To hear a separate echo, the reflecting surface must be at least **17 m** away from the source of the sound."
          ]
        },
        {
          heading: "Uses of Ultrasound and Noise",
          points: [
            "Doctors use ultrasound to scan the body. **SONAR** uses ultrasound to find the depth of the sea and to locate objects under water.",
            "Ultrasound is also used to clean delicate instruments and to find cracks in metal parts.",
            "Very loud sounds can damage hearing, so the volume of music and other sounds should be kept moderate."
          ]
        }
      ],
      formulas: [
        "Speed of sound in air ≈ 340 m/s",
        "Human hearing range: 20 Hz to 20,000 Hz",
        "Distance of reflecting surface = (speed of sound × time for echo) ÷ 2",
        "Minimum distance for a distinct echo ≈ 17 m"
      ],
      examples: [
        {
          q: "A person shouts near a cliff and hears the echo after 0.2 seconds. How far is the cliff? Take the speed of sound in air as 340 m/s.",
          steps: [
            "The sound travels to the cliff and back, so the total distance = speed × time",
            "Total distance = 340 m/s × 0.2 s = 68 m",
            "Distance to the cliff = 68 m ÷ 2 = 34 m"
          ],
          answer: "34 m"
        }
      ],
      terms: [
        { term: "Vibration", meaning: "A **rapid back-and-forth movement** that produces sound." },
        { term: "Frequency", meaning: "The **number of vibrations per second**, measured in hertz (Hz)." },
        { term: "Amplitude", meaning: "The **size of a vibration**; it determines how loud a sound is." },
        { term: "Pitch", meaning: "How **high or low** a sound seems to us; it depends on the frequency." },
        { term: "Echo", meaning: "A **reflected sound** heard again after it bounces off a hard surface." },
        { term: "Ultrasound", meaning: "Sound with a frequency **above 20,000 Hz**, which humans cannot hear." }
      ],
      qa: [
        {
          q: "Why can astronauts not talk to each other directly in open space?",
          a: "Sound needs a **medium** to travel, and space is almost a vacuum. The sound cannot reach the other astronaut's ears, so radios are used."
        },
        {
          q: "What is the difference between pitch and loudness?",
          a: "**Pitch** depends on the frequency, which tells how high or low a sound is. **Loudness** depends on the amplitude, which is the size of the vibration."
        },
        {
          q: "Why do we not hear an echo in a small room?",
          a: "In a small room the reflected sound returns in less than 0.1 second, so it merges with the original sound. An echo needs the reflecting surface to be at least **17 m** away."
        }
      ],
      quiz: [
        {
          q: "Sound is produced by:",
          options: ["Vibration of objects", "Heating of objects", "Freezing of objects", "Movement of light"],
          answer: 0,
          explain: "All sounds are produced by **vibrating** objects."
        },
        {
          q: "The unit of frequency is:",
          options: ["Decibel", "Pascal", "Metre", "Hertz"],
          answer: 3,
          explain: "Frequency is measured in **hertz** (Hz), or vibrations per second."
        },
        {
          q: "Sound cannot travel through:",
          options: ["Air", "Water", "Vacuum", "Steel"],
          answer: 2,
          explain: "Sound needs a **medium** to travel. It cannot pass through a vacuum."
        },
        {
          q: "The loudness of a sound depends mainly on its:",
          options: ["Frequency", "Amplitude", "Colour of the source", "Temperature of the room"],
          answer: 1,
          explain: "Loudness depends on the **amplitude** of vibration. Frequency controls pitch."
        },
        {
          q: "The range of frequencies audible to most humans is about:",
          options: ["2 to 200 Hz", "200 to 2,000 Hz", "20 to 20,000 Hz", "20,000 to 200,000 Hz"],
          answer: 2,
          explain: "Humans can hear sounds from about **20 Hz to 20,000 Hz**."
        },
        {
          q: "The minimum distance from the source to a reflecting surface needed to hear a distinct echo is about:",
          options: ["17 m", "5 m", "100 m", "340 m"],
          answer: 0,
          explain: "A separate echo needs the reflecting surface to be at least about **17 m** away."
        }
      ]
    },

    // ------------------------------------------------------------------
    {
      id: "chemical-effects-of-electric-current",
      title: "Chemical Effects of Electric Current",
      section: "Chemistry",
      summary: "Electric current can cause chemical changes in some liquids. This chapter explains how solutions conduct electricity, how electrolysis splits water into gases, and how electroplating coats one metal with another.",
      notes: [
        {
          heading: "Conductors and Electrolytes",
          points: [
            "Solutions of acids, bases and salts conduct electricity because they contain charged particles called **ions**.",
            "Pure water and solutions of sugar or alcohol conduct electricity very poorly.",
            "A substance that conducts electricity in solution and is chemically broken down by it is called an **electrolyte**."
          ]
        },
        {
          heading: "Electrolysis of Water",
          points: [
            "When electric current passes through **acidified water**, it splits into hydrogen and oxygen gases. This process is called **electrolysis**.",
            "Hydrogen is collected at the **cathode** (negative electrode) and oxygen at the **anode** (positive electrode).",
            "The volume of hydrogen is **twice** the volume of oxygen, because each water molecule has two hydrogen atoms for each oxygen atom."
          ]
        },
        {
          heading: "Electroplating",
          points: [
            "**Electroplating** is coating one metal with a thin layer of another metal using electricity.",
            "The object to be plated is made the **cathode**. The coating metal is the **anode**, and the electrolyte contains ions of the coating metal.",
            "Electroplating protects iron from rusting, for example with zinc or chromium, and gives a shiny finish to cutlery, jewellery and vehicle parts."
          ]
        },
        {
          heading: "Safety",
          points: [
            "Electricity and water together are dangerous. Never touch electrical switches or appliances with wet hands.",
            "In school experiments on electrolysis, use a low-voltage battery as instructed by the teacher, never the household mains supply."
          ]
        }
      ],
      formulas: [
        "Electrolysis of water: 2H₂O → 2H₂ + O₂",
        "Volume of hydrogen : volume of oxygen = 2 : 1",
        "Cathode is the negative electrode; anode is the positive electrode",
        "Electroplating: object = cathode, coating metal = anode"
      ],
      terms: [
        { term: "Electrolyte", meaning: "A substance that **conducts electricity** in solution and is broken down chemically by it." },
        { term: "Ion", meaning: "A **charged particle** formed when an atom or group of atoms gains or loses electrons." },
        { term: "Electrolysis", meaning: "The **chemical breakdown** of a substance by passing electric current through it." },
        { term: "Electroplating", meaning: "Coating a metal object with a thin layer of **another metal** using electricity." },
        { term: "Cathode", meaning: "The **negative electrode**, where reduction occurs during electrolysis." },
        { term: "Anode", meaning: "The **positive electrode**, where oxidation occurs during electrolysis." }
      ],
      qa: [
        {
          q: "Why is pure water a poor conductor, but salt water a good one?",
          a: "Pure water has very few **ions**, so it hardly carries current. Dissolving salt adds ions, which carry the electric current through the solution."
        },
        {
          q: "Why are iron objects often electroplated with zinc?",
          a: "The zinc coating protects the iron from **rusting**, and it also gives the object an attractive finish."
        },
        {
          q: "Why is the volume of hydrogen twice that of oxygen in the electrolysis of water?",
          a: "Water is H₂O, with two hydrogen atoms for each oxygen atom. The equation 2H₂O → 2H₂ + O₂ shows that the gases form in a **2 : 1** ratio."
        }
      ],
      quiz: [
        {
          q: "Which gas is collected at the cathode during electrolysis of acidified water?",
          options: ["Oxygen", "Hydrogen", "Carbon dioxide", "Nitrogen"],
          answer: 1,
          explain: "**Hydrogen** is collected at the cathode, the negative electrode."
        },
        {
          q: "The gas collected at the anode during electrolysis of water is:",
          options: ["Hydrogen", "Helium", "Oxygen", "Chlorine"],
          answer: 2,
          explain: "**Oxygen** is collected at the anode, the positive electrode."
        },
        {
          q: "Electroplating is a process in which:",
          options: ["A metal is coated with another metal using electricity", "Water is split into gases", "Heat is produced in a wire", "Salt is dissolved in water"],
          answer: 0,
          explain: "In **electroplating**, one metal is coated with a thin layer of another metal by passing electric current."
        },
        {
          q: "Which of these is an electrolyte?",
          options: ["Sugar solution", "Dilute salt solution", "Alcohol", "Glucose syrup"],
          answer: 1,
          explain: "A salt solution contains ions, so it conducts electricity. Sugar, alcohol and glucose do not form ions in solution."
        },
        {
          q: "In electroplating, the object to be plated is connected to the:",
          options: ["Cathode, the negative electrode", "Anode, the positive electrode", "Glass container", "Plastic wire"],
          answer: 0,
          explain: "The object to be plated acts as the **cathode**, the negative electrode."
        },
        {
          q: "The volume of hydrogen produced during electrolysis of water, compared with the volume of oxygen, is:",
          options: ["Half", "Equal", "Twice", "Four times"],
          answer: 2,
          explain: "Hydrogen is produced in **twice** the volume of oxygen."
        }
      ]
    },

    // ------------------------------------------------------------------
    {
      id: "some-natural-phenomena",
      title: "Some Natural Phenomena",
      section: "Physics",
      summary: "Lightning, thunder and earthquakes are powerful natural events. This chapter explains how lightning and thunder are produced, how earthquakes happen and how to stay safe, and how the speed of sound helps us estimate the distance of a lightning flash.",
      notes: [
        {
          heading: "Lightning and Thunder",
          points: [
            "**Lightning** is a huge spark of static electricity. It is a discharge between two clouds, or between a cloud and the ground.",
            "The air along a lightning path is heated suddenly and expands rapidly. This produces a loud sound called **thunder**.",
            "We see lightning before we hear thunder, because light travels much faster than sound."
          ]
        },
        {
          heading: "Lightning Safety",
          points: [
            "During a thunderstorm, stay indoors, away from windows and doors. Do not stand under a tall tree or in an open field.",
            "Avoid using electrical appliances and water taps during a storm.",
            "A **lightning conductor**, a metal rod joined to the earth by a thick wire, protects tall buildings by giving the lightning current a safe path into the ground."
          ]
        },
        {
          heading: "Earthquakes",
          points: [
            "An **earthquake** is the sudden shaking of the ground, caused by the sudden movement of rock masses in the Earth's crust.",
            "The point inside the Earth where the earthquake starts is the **focus**. The point on the surface directly above it is the **epicentre**.",
            "Earthquakes produce **seismic waves**. These are recorded by an instrument called a **seismograph**.",
            "The **Richter scale** is used to measure the magnitude of an earthquake."
          ]
        },
        {
          heading: "Earthquake Safety",
          points: [
            "If you are indoors during an earthquake, take cover under a strong table, away from windows and heavy objects.",
            "If you are outdoors, move to an open area away from buildings, trees and electric wires.",
            "Strong undersea earthquakes can cause tsunamis, which are huge sea waves."
          ]
        }
      ],
      formulas: [
        "Distance of lightning = speed of sound × time between seeing the flash and hearing the thunder",
        "Speed of sound in air ≈ 340 m/s; light travels almost instantly",
        "Richter scale measures the magnitude of an earthquake",
        "Seismograph records seismic waves"
      ],
      examples: [
        {
          q: "Thunder is heard 3 seconds after the lightning flash is seen. Find the distance of the lightning. Take the speed of sound as 340 m/s.",
          steps: [
            "Light reaches us almost instantly, so the time taken is the time for sound to travel",
            "Distance = speed × time = 340 m/s × 3 s = 1020 m",
            "1020 m is about 1 km"
          ],
          answer: "About 1 km away"
        }
      ],
      terms: [
        { term: "Lightning", meaning: "A **large electric spark** between clouds or between a cloud and the ground." },
        { term: "Thunder", meaning: "The **loud sound** produced by the sudden expansion of air heated by lightning." },
        { term: "Focus", meaning: "The point **inside the Earth** where an earthquake begins." },
        { term: "Epicentre", meaning: "The point on the **Earth's surface** directly above the focus of an earthquake." },
        { term: "Seismograph", meaning: "An instrument that **records seismic waves** produced by earthquakes." },
        { term: "Lightning conductor", meaning: "A **metal rod** that protects buildings by carrying lightning safely into the ground." }
      ],
      qa: [
        {
          q: "Why do we see lightning before we hear thunder?",
          a: "Light travels at about **3 × 10⁸ m/s**, almost instantly, while sound travels only about 340 m/s. So the flash reaches us first, and the thunder arrives after a delay."
        },
        {
          q: "Why is a lightning conductor placed on tall buildings?",
          a: "It provides a **safe path** for the lightning current to pass into the earth, which protects the building from damage and fire."
        },
        {
          q: "Why do some buildings survive an earthquake better than others?",
          a: "Buildings with **flexible designs**, strong foundations and proper construction can withstand shaking better, while weak or old structures are more likely to collapse."
        }
      ],
      quiz: [
        {
          q: "Lightning is a discharge of:",
          options: ["Heat", "Static electricity", "Sound", "Water vapour"],
          answer: 1,
          explain: "Lightning is a huge discharge of **static electricity**."
        },
        {
          q: "Thunder is caused by:",
          options: ["Rain falling on rocks", "Movement of clouds", "Burning of fuel", "Sudden expansion of heated air"],
          answer: 3,
          explain: "Air heated by lightning expands suddenly, producing a loud **thunder** sound."
        },
        {
          q: "A lightning conductor protects a building by:",
          options: ["Stopping the rain", "Cooling the building", "Giving lightning a safe path to the ground", "Absorbing thunder"],
          answer: 2,
          explain: "The conductor carries the lightning current safely into the ground."
        },
        {
          q: "The point on the Earth's surface directly above the focus of an earthquake is called:",
          options: ["Epicentre", "Crust", "Seismograph", "Magma"],
          answer: 0,
          explain: "The **epicentre** is on the surface, directly above the focus where the earthquake starts."
        },
        {
          q: "The instrument that records seismic waves is:",
          options: ["Thermometer", "Seismograph", "Barometer", "Anemometer"],
          answer: 1,
          explain: "A **seismograph** records the seismic waves produced by an earthquake."
        },
        {
          q: "Which scale measures the magnitude of an earthquake?",
          options: ["Celsius scale", "Decibel scale", "Richter scale", "Hardness scale"],
          answer: 2,
          explain: "The **Richter scale** is used to measure the magnitude of an earthquake."
        }
      ]
    },

    // ------------------------------------------------------------------
    {
      id: "light",
      title: "Light",
      section: "Physics",
      summary: "Light is a form of energy that travels in straight lines. This chapter covers reflection and its laws, images formed by plane and curved mirrors, the bending of light, and the splitting of white light into colours.",
      notes: [
        {
          heading: "Light and Reflection",
          points: [
            "Light travels in **straight lines**. In vacuum it travels at about 3 × 10⁸ m/s.",
            "**Reflection** is the bouncing back of light from a surface. The incident ray, the reflected ray and the normal all lie in the same plane.",
            "**First law of reflection**: the angle of incidence equals the angle of reflection."
          ]
        },
        {
          heading: "Plane Mirrors",
          points: [
            "A plane mirror forms a **virtual** image that is upright and the same size as the object.",
            "The image is as far behind the mirror as the object is in front of it.",
            "The image is **laterally inverted**, which means left and right appear swapped. Dressing mirrors and periscopes use plane mirrors."
          ]
        },
        {
          heading: "Spherical Mirrors",
          points: [
            "A **concave mirror** curves inwards. It can form magnified images and is used in torches, headlights and shaving mirrors.",
            "A **convex mirror** curves outwards. It always forms a virtual, smaller image, but it gives a **wider field of view**, so it is used as a rear-view mirror in vehicles.",
            "The **pole**, the **centre of curvature** and the **principal focus** are important points. The focus lies halfway between the pole and the centre of curvature."
          ]
        },
        {
          heading: "Refraction and Dispersion",
          points: [
            "**Refraction** is the bending of light when it passes from one medium into another. A pencil in a glass of water looks bent for this reason.",
            "A glass **prism** splits white light into seven colours: violet, indigo, blue, green, yellow, orange and red. This splitting is called **dispersion**.",
            "A rainbow forms when sunlight is refracted, reflected and dispersed by water droplets in the air."
          ]
        }
      ],
      formulas: [
        "Angle of incidence = Angle of reflection",
        "Speed of light in vacuum ≈ 3 × 10⁸ m/s",
        "Plane mirror: image distance behind the mirror = object distance in front",
        "Spectrum colours: VIBGYOR (violet, indigo, blue, green, yellow, orange, red)"
      ],
      examples: [
        {
          q: "A ray of light strikes a plane mirror at an angle of incidence of 35°. Find the angle between the reflected ray and the surface of the mirror.",
          steps: [
            "Angle of reflection = angle of incidence = 35°, both measured from the normal",
            "Angle between the reflected ray and the normal = 35°",
            "Angle with the mirror surface = 90° − 35° = 55°"
          ],
          answer: "55°"
        }
      ],
      terms: [
        { term: "Reflection", meaning: "The **bouncing back** of light from a surface." },
        { term: "Normal", meaning: "An **imaginary line perpendicular** to the surface at the point where light strikes it." },
        { term: "Virtual image", meaning: "An image that **cannot be obtained on a screen**, such as the image in a plane mirror." },
        { term: "Lateral inversion", meaning: "A **left-right reversal** of an image in a mirror." },
        { term: "Refraction", meaning: "The **bending of light** as it passes from one medium into another." },
        { term: "Dispersion", meaning: "The **splitting of white light** into its component colours." }
      ],
      qa: [
        {
          q: "Why does a plane mirror show an image that is laterally inverted?",
          a: "Light from the right side of the object reflects to our eyes as if it came from the left side of the image, so left and right appear swapped."
        },
        {
          q: "Why are convex mirrors used in vehicles?",
          a: "They give a **wider field of view**, and the image is always upright and smaller, so the driver can see more of the traffic behind."
        },
        {
          q: "What causes a rainbow?",
          a: "Sunlight is **refracted, reflected and dispersed** inside water droplets in the air. Each colour bends by a slightly different amount, so white light separates into colours."
        }
      ],
      quiz: [
        {
          q: "Light travels in:",
          options: ["Curved paths", "Straight lines", "Zigzag paths", "Circles"],
          answer: 1,
          explain: "Light travels in **straight lines**."
        },
        {
          q: "The image formed by a plane mirror is:",
          options: ["Real and inverted", "Real and magnified", "Virtual and diminished", "Virtual and upright"],
          answer: 3,
          explain: "A plane mirror forms a **virtual, upright** image of the same size as the object."
        },
        {
          q: "Which mirror is used in torches and headlights to focus light?",
          options: ["Convex mirror", "Concave mirror", "Plane mirror", "Prism"],
          answer: 1,
          explain: "A **concave mirror** focuses the light it reflects, so it is used in torches and headlights."
        },
        {
          q: "The bending of light when it passes from air into water is called:",
          options: ["Refraction", "Reflection", "Dispersion", "Diffraction"],
          answer: 0,
          explain: "Light bends, or is **refracted**, when it passes from one medium into another."
        },
        {
          q: "The angle of incidence is 40°. The angle of reflection is:",
          options: ["20°", "50°", "40°", "80°"],
          answer: 2,
          explain: "According to the laws of reflection, the angle of reflection equals the angle of incidence."
        },
        {
          q: "Which colour of light bends the most when passing through a prism?",
          options: ["Red", "Green", "Yellow", "Violet"],
          answer: 3,
          explain: "**Violet** light bends the most, and red light bends the least."
        }
      ]
    }
  ]
});
