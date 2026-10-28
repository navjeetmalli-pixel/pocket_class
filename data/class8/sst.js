StudyData.add(8, "sst", {
  // What this content follows. match: "textbook" | "older-book" | "topic". Set reviewed to a date once a teacher has checked it.
  syllabus: {board: "CBSE", match: "older-book", books: ["Our Pasts III","Resource and Development","Social and Political Life III"], note: "NCERT has since published a new book for this class, so chapter names and order may differ.", reviewed: false},
  chapters: [
    // ==================================================================
    // HISTORY – Our Pasts III
    // ==================================================================
    {
      id: "how-when-where",
      title: "How, When and Where",
      section: "History",
      summary: "How historians divide the past into periods, why some old labels are misleading, and the different sources, from coins and inscriptions to official records and oral memories, that help us reconstruct the past.",
      notes: [
        {
          heading: "Dividing the Past into Periods",
          points: [
            "Historians divide the past into periods such as **ancient**, **medieval** and **modern** to study how things changed over time.",
            "In 1817, James Mill divided Indian history into **Hindu**, **Muslim** and **British** periods on the basis of religion.",
            "This division is misleading, because it judges a whole era by the religion of its rulers and ignores changes in economy, society and culture."
          ]
        },
        {
          heading: "Sources of History",
          points: [
            "**Archaeological sources** such as tools, pottery, coins, buildings and inscriptions tell us how people lived.",
            "**Literary sources** such as chronicles, biographies, poems and religious texts describe events and the ideas of their time.",
            "**Archival sources** are official records, such as the records of the East India Company, kept in archives.",
            "**Oral sources** such as folk songs and memories of elders help us learn about people who left few written records."
          ]
        },
        {
          heading: "Reading Sources with Care",
          points: [
            "Every source reflects the view of the person who made it, so a historian must ask who wrote it, when and why.",
            "Different sources give different parts of the picture, and a good historian uses several of them together."
          ]
        }
      ],
      formulas: [
        "1817 – James Mill's History of British India divides Indian history into Hindu, Muslim and British periods",
        "Ancient, Medieval, Modern – the most common division of Indian history today"
      ],
      terms: [
        { term: "Periodisation", meaning: "Dividing the past into periods, such as ancient, medieval and modern, to study change over time." },
        { term: "Archaeology", meaning: "The study of the past through **material remains** such as tools, pottery, coins and buildings." },
        { term: "Archives", meaning: "Places where **official records** and documents are stored and preserved." },
        { term: "Oral history", meaning: "Information about the past collected by talking to people and recording their memories." },
        { term: "Chronicle", meaning: "A historical record of events written in the order in which they happened." }
      ],
      qa: [
        {
          q: "Why is dividing Indian history into Hindu, Muslim and British periods considered misleading?",
          a: "This division is based on the religion of the rulers and ignores changes in politics, economy and society. Many people of different faiths lived under the same rule, so such labels do not describe their lives."
        },
        {
          q: "Name two kinds of sources historians use and give an example of each.",
          a: "Archaeological sources, such as coins, pottery and inscriptions, and archival sources, such as the official records of the East India Company. Oral sources, such as folk songs and interviews, are another kind."
        }
      ],
      quiz: [
        {
          q: "Who wrote History of British India (1817), which divided Indian history into Hindu, Muslim and British periods?",
          options: ["Jyotiba Phule", "James Mill", "Charles Wood", "Lord Macaulay"],
          answer: 1,
          explain: "**James Mill** based his division on religion, an approach historians now consider misleading."
        },
        {
          q: "Which of these is an archaeological source?",
          options: ["Official records of the East India Company", "Coins and pottery found in excavations", "Interviews with village elders", "Folk songs passed down orally"],
          answer: 1,
          explain: "**Archaeological sources** are material remains, such as coins and pottery, found through excavation."
        },
        {
          q: "Where are official records of a government usually preserved?",
          options: ["Only in museums", "In archives", "In chronicles", "In oral histories"],
          answer: 1,
          explain: "**Archives** are places where official documents and records are stored for future study."
        },
        {
          q: "Which of these is an oral source?",
          options: ["A folk song remembered by villagers", "A coin of the Gupta period", "A stone inscription at a temple", "A letter kept in an archive"],
          answer: 0,
          explain: "**Oral sources** are passed on by word of mouth, such as songs, stories and memories."
        },
        {
          q: "Why do historians examine who wrote a source?",
          options: ["To find out the exact price of the source", "To decide whether the source is old", "To understand the author's point of view and purpose", "To confirm that the source was printed"],
          answer: 2,
          explain: "Every source reflects its author's views, so a historian must **check who wrote it, when and why**."
        }
      ]
    },
    // ------------------------------------------------------------------
    {
      id: "trade-to-territory",
      title: "From Trade to Territory",
      section: "History",
      summary: "How the East India Company, which came to India as a trading company, gradually became a political power through alliances, battles and annexation during the decline of Mughal authority.",
      notes: [
        {
          heading: "From Trade to Political Power",
          points: [
            "The **East India Company** was given a royal charter in **1600** to trade with the East. It mainly bought textiles and spices.",
            "In **1717**, a Mughal farman (order) gave the Company duty-free trade in Bengal in return for a fixed payment.",
            "As Mughal power weakened after Aurangzeb, many provincial rulers became independent, and the Company took advantage of their rivalries."
          ]
        },
        {
          heading: "Battles that Brought Power",
          points: [
            "At the **Battle of Plassey (1757)**, Robert Clive defeated **Siraj-ud-daulah**, Nawab of Bengal, with help from Mir Jafar, the Nawab's own commander.",
            "At the **Battle of Buxar (1764)**, the Company defeated a combined army of the Nawabs of Bengal and Awadh and the Mughal emperor **Shah Alam II**.",
            "In **1765**, the Company received the **diwani** (right to collect revenue) of Bengal, Bihar and Orissa from Shah Alam II."
          ]
        },
        {
          heading: "Alliances and Annexation",
          points: [
            "Under the **Subsidiary Alliance**, introduced by Lord Wellesley, Indian rulers had to keep British troops and accept a British Resident at their court.",
            "Under the **Doctrine of Lapse**, applied by Lord Dalhousie, a ruler who died without a natural heir lost his state. Satara, Jhansi and Nagpur were annexed this way.",
            "**Tipu Sultan** of Mysore, who resisted the Company, died fighting the British at Seringapatam in **1799**."
          ]
        }
      ],
      formulas: [
        "1600 – East India Company receives a royal charter",
        "1717 – Mughal farman gives the Company duty-free trade in Bengal",
        "1757 – Battle of Plassey",
        "1764 – Battle of Buxar",
        "1765 – Company receives the diwani of Bengal",
        "1799 – Tipu Sultan dies at Seringapatam"
      ],
      terms: [
        { term: "Charter", meaning: "A formal document from a ruler granting rights, such as the right to trade, to a company." },
        { term: "Diwani", meaning: "The right to **collect revenue** and manage civil affairs in a province." },
        { term: "Subsidiary Alliance", meaning: "A system under which Indian rulers accepted British troops and a British Resident, and gave up independent foreign relations." },
        { term: "Doctrine of Lapse", meaning: "A policy under which a state was annexed if its ruler died without a natural heir." },
        { term: "Annexation", meaning: "Taking over a territory and adding it to another state, usually by force or policy." }
      ],
      qa: [
        {
          q: "Why was the Battle of Plassey important for the Company?",
          a: "Clive's victory over Siraj-ud-daulah, helped by Mir Jafar, gave the Company control over Bengal's wealth and a firm base for political power in India."
        },
        {
          q: "How did the Subsidiary Alliance weaken Indian rulers?",
          a: "Rulers had to accept British troops in their territory, pay for them and keep a British Resident at court. They also gave up their independent relations with other states, which slowly reduced their power."
        },
        {
          q: "How did the Doctrine of Lapse lead to annexation?",
          a: "If a ruler died without a natural heir, the Company refused to recognise an adopted son and took over the state. Satara, Jhansi and Nagpur were annexed in this way."
        }
      ],
      quiz: [
        {
          q: "The Battle of Plassey (1757) was fought between the East India Company and:",
          options: ["Siraj-ud-daulah, Nawab of Bengal", "Tipu Sultan of Mysore", "Shah Alam II", "Ranjit Singh of Punjab"],
          answer: 0,
          explain: "Clive defeated **Siraj-ud-daulah** at Plassey with the help of Mir Jafar, which gave the Company a strong base in Bengal."
        },
        {
          q: "In which year did the Company receive the diwani of Bengal?",
          options: ["1757", "1799", "1848", "1765"],
          answer: 3,
          explain: "In **1765**, Shah Alam II granted the Company the right to collect revenue in Bengal, Bihar and Orissa."
        },
        {
          q: "Lord Dalhousie used which policy to annex Satara, Jhansi and Nagpur?",
          options: ["Subsidiary Alliance", "Permanent Settlement", "Ryotwari system", "Doctrine of Lapse"],
          answer: 3,
          explain: "Under the **Doctrine of Lapse**, a state was taken over when its ruler died without a natural heir."
        },
        {
          q: "Tipu Sultan died fighting the British at:",
          options: ["Plassey", "Buxar", "Seringapatam", "Jhansi"],
          answer: 2,
          explain: "**Tipu Sultan** of Mysore died at Seringapatam in 1799 while defending his kingdom."
        },
        {
          q: "The Battle of Buxar (1764) was fought against a combined army of the Nawabs of Bengal and Awadh and:",
          options: ["The Peshwa of Pune", "The Sultan of Mysore", "The Maratha Chhatrapati", "The Mughal emperor Shah Alam II"],
          answer: 3,
          explain: "The Company defeated the Nawabs and **Shah Alam II** together at Buxar, which made its power in north India much stronger."
        },
        {
          q: "The Mughal farman of 1717 gave the Company:",
          options: ["Control over the Mughal army", "The right to coin money in Delhi", "Duty-free trade in Bengal", "Permission to build a fort at Calcutta"],
          answer: 2,
          explain: "The **farman of 1717** allowed the Company to trade duty-free in Bengal in return for a fixed payment."
        }
      ]
    },
    // ------------------------------------------------------------------
    {
      id: "ruling-the-countryside",
      title: "Ruling the Countryside",
      section: "History",
      summary: "How the British changed the systems of land revenue in the countryside, through the Permanent Settlement, the Ryotwari and the Mahalwari systems, and how these changes hurt zamindars and peasants and led to revolts such as the Indigo Revolt.",
      notes: [
        {
          heading: "Land Revenue Systems",
          points: [
            "Land revenue was the Company's main source of income, so it set up new systems to collect it from the countryside.",
            "Under the **Permanent Settlement** in Bengal (**1793**, Lord Cornwallis), zamindars collected revenue from peasants and paid a fixed sum to the Company every year.",
            "Under the **Ryotwari system**, used in parts of Madras and Bombay, revenue was collected directly from each cultivator, or ryot, and the amount was often very high.",
            "Under the **Mahalwari system**, used in the North-Western Provinces and Punjab, revenue was fixed for a whole village or group of villages (mahal)."
          ]
        },
        {
          heading: "Effects on Zamindars and Peasants",
          points: [
            "Under the **sunset law** in Bengal, an estate was auctioned if its revenue was not paid by sunset on the due date, so many zamindars lost their land.",
            "Peasants often borrowed money from moneylenders to pay high revenue, and many fell into debt and lost their land.",
            "Many zamindars were **absentee landlords** who lived in cities and left the management of their land to agents."
          ]
        },
        {
          heading: "Revolts in the Countryside",
          points: [
            "Indigo planters in Bengal forced peasants to grow indigo instead of food crops, often under unfair contracts.",
            "In **1859–60**, peasants of Bengal refused to grow indigo, and the Indigo Revolt forced the government to appoint an Indigo Commission.",
            "In **1917**, Mahatma Gandhi supported indigo peasants in Champaran, Bihar."
          ]
        }
      ],
      formulas: [
        "1793 – Permanent Settlement in Bengal",
        "1859–60 – Indigo Revolt in Bengal",
        "1917 – Gandhi supports indigo peasants in Champaran"
      ],
      terms: [
        { term: "Permanent Settlement", meaning: "A system in which zamindars paid a **fixed amount** of revenue to the Company every year." },
        { term: "Zamindar", meaning: "A landholder who collected revenue from peasants and paid it to the government." },
        { term: "Ryot", meaning: "A peasant or cultivator who farmed the land." },
        { term: "Sunset law", meaning: "A rule under which an estate was sold if its revenue was not paid by sunset on the due date." },
        { term: "Absentee landlord", meaning: "A landlord who lives away from his estate and leaves its management to agents." }
      ],
      qa: [
        {
          q: "Why did the Permanent Settlement give the Company a secure income?",
          a: "The zamindar had to pay a fixed sum every year, whatever the harvest, so the Company knew exactly how much revenue it would receive. Zamindars who failed to pay lost their land."
        },
        {
          q: "How did the Ryotwari system differ from the Permanent Settlement?",
          a: "In the Ryotwari system the state collected revenue directly from each cultivator, not from a zamindar. The amount was often high and was reassessed from time to time."
        },
        {
          q: "Why did indigo peasants revolt in Bengal?",
          a: "Planters forced peasants to grow indigo on their best land under unfair contracts and paid very low prices. Peasants lost land for food crops and were left in debt."
        }
      ],
      quiz: [
        {
          q: "Under the Permanent Settlement of 1793, who collected revenue from the peasants?",
          options: ["The Company's officials directly", "Zamindars", "Moneylenders", "The Mughal emperor"],
          answer: 1,
          explain: "Under the Permanent Settlement, **zamindars** collected revenue from peasants and paid a fixed amount to the Company."
        },
        {
          q: "The Ryotwari system collected revenue from:",
          options: ["The zamindar", "The village as a whole", "The cultivator (ryot)", "The Nawab"],
          answer: 2,
          explain: "In the **Ryotwari system**, the state dealt directly with each ryot, or cultivator."
        },
        {
          q: "What was the sunset law in Bengal?",
          options: ["Land was auctioned if revenue was not paid by sunset on the due date", "Peasants had to work on their fields until sunset", "Zamindars could collect rent only until sunset", "Indigo had to be harvested before sunset"],
          answer: 0,
          explain: "Under the **sunset law**, an estate was sold if its revenue was not paid by sunset on the due date, which caused many zamindars to lose land."
        },
        {
          q: "The Indigo Revolt in Bengal took place in:",
          options: ["1757–58", "1793", "1917", "1859–60"],
          answer: 3,
          explain: "Peasants in Bengal refused to grow indigo in **1859–60**, and the revolt led to an Indigo Commission."
        },
        {
          q: "Which leader supported indigo peasants in Champaran in 1917?",
          options: ["Bal Gangadhar Tilak", "Mahatma Gandhi", "Jyotiba Phule", "Sardar Patel"],
          answer: 1,
          explain: "**Gandhi** went to Champaran in 1917 to help indigo peasants who were suffering under planters."
        },
        {
          q: "The Mahalwari system was used mainly in which areas?",
          options: ["Bengal and Bihar", "Madras and Bombay", "Mysore and Kerala", "North-Western Provinces and Punjab"],
          answer: 3,
          explain: "Under the **Mahalwari system**, revenue was fixed for each village or group of villages in the North-Western Provinces and Punjab."
        }
      ]
    },
    // ------------------------------------------------------------------
    {
      id: "tribals-dikus-golden-age",
      title: "Tribals, Dikus and the Vision of a Golden Age",
      section: "History",
      summary: "How colonial forest laws and land policies disrupted the lives of tribal communities, how they resented outsiders called dikus, and how rebellions like the Santhal Rebellion and the Munda Ulgulan led by Birsa Munda expressed their hopes for a golden age.",
      notes: [
        {
          heading: "Tribal Life Before Colonial Rule",
          points: [
            "Many tribal communities lived in forests and hills and depended on the forest for food, fuel, medicines and grazing.",
            "Many practised **shifting cultivation** (called jhum or podu), clearing a patch of forest, farming it for a few years and then moving on.",
            "Tribal communities had their own customs and leaders, and many dreamt of a golden age when they lived freely on their own land."
          ]
        },
        {
          heading: "Colonial Control over Forests",
          points: [
            "The British saw forests as a source of timber and revenue, and considered shifting cultivation harmful to them.",
            "The **Indian Forest Acts of 1865 and 1878** declared many forests to be state property and restricted tribal use of forest produce.",
            "Tribals who collected wood or grazed cattle in these forests were treated as criminals, and many were forced to work as labourers."
          ]
        },
        {
          heading: "Dikus and Rebellions",
          points: [
            "Tribals called outsiders such as moneylenders, traders and landlords **dikus**, and resented them for taking their land and charging high interest.",
            "The **Santhal Rebellion (1855–56)**, led by **Sido** and **Kanhu**, was a major uprising against moneylenders, landlords and the colonial government.",
            "**Birsa Munda** led the **Munda Ulgulan** (Great Tumult) in 1899–1900, demanding an end to forced labour and the restoration of tribal lands. He died in jail in 1900."
          ]
        }
      ],
      formulas: [
        "1855–56 – Santhal Rebellion led by Sido and Kanhu",
        "1865 and 1878 – Indian Forest Acts",
        "1899–1900 – Munda Ulgulan led by Birsa Munda"
      ],
      terms: [
        { term: "Diku", meaning: "The term tribals used for outsiders, such as moneylenders, traders and landlords, who entered their lands." },
        { term: "Shifting cultivation", meaning: "A form of farming in which forest land is cleared, cultivated for a few years and then left to recover." },
        { term: "Ulgulan", meaning: "A Munda word meaning 'great tumult' or 'uprising', used for Birsa Munda's movement." },
        { term: "Forest Act", meaning: "A law that brought forests under state control and restricted how local people could use them." },
        { term: "Begar", meaning: "Forced labour, often without wages, demanded from people by landlords or the government." }
      ],
      qa: [
        {
          q: "Why did the colonial government restrict shifting cultivation?",
          a: "Officials believed shifting cultivation damaged forests and reduced the supply of timber that the state wanted. They wanted forests for commercial timber and revenue, so they restricted the practice."
        },
        {
          q: "Who were the dikus, and why did tribals resent them?",
          a: "Dikus were outsiders such as moneylenders, traders and landlords who entered tribal areas. Tribals resented them for taking their land, charging high interest and cheating them."
        },
        {
          q: "What were Birsa Munda's aims?",
          a: "He wanted to end forced labour, reduce the power of moneylenders and outsiders, and restore tribal lands. He also asked his people to give up drinking and superstition and to live a pure, golden-age life."
        }
      ],
      quiz: [
        {
          q: "The Santhal Rebellion of 1855–56 was led by:",
          options: ["Birsa Munda", "Sido and Kanhu", "Tantia Tope", "Alluri Sitarama Raju"],
          answer: 1,
          explain: "**Sido and Kanhu** led the Santhal Rebellion against moneylenders, landlords and the colonial government."
        },
        {
          q: "Tribal people called outsiders such as moneylenders and traders:",
          options: ["Dikus", "Zamindars", "Sepoys", "Ulgulan"],
          answer: 0,
          explain: "Tribal communities used the word **diku** for outsiders who took their land and money."
        },
        {
          q: "The Munda Ulgulan (Great Tumult) took place in which years?",
          options: ["1857–58", "1855–56", "1899–1900", "1917–18"],
          answer: 2,
          explain: "Birsa Munda led the **Munda Ulgulan** in 1899–1900 against forced labour and the loss of tribal lands."
        },
        {
          q: "Which law restricted tribal use of forests by declaring many forests state property?",
          options: ["Permanent Settlement Act", "Regulating Act of 1773", "Indian Forest Act of 1865", "Charter Act of 1833"],
          answer: 2,
          explain: "The **Indian Forest Act of 1865** (and the Act of 1878) brought many forests under state control."
        },
        {
          q: "Shifting cultivation is also known as:",
          options: ["Ryotwari", "Mahalwari", "Begar", "Jhum"],
          answer: 3,
          explain: "Shifting cultivation is called **jhum** in parts of north-east India and podu in Odisha and Andhra Pradesh."
        },
        {
          q: "Birsa Munda died in which place?",
          options: ["Ranchi jail, in 1900", "Seringapatam, in 1799", "Jhansi, in 1858", "Bombay, in 1917"],
          answer: 0,
          explain: "**Birsa Munda** died in Ranchi jail in 1900, where he had been imprisoned."
        }
      ]
    },
    // ------------------------------------------------------------------
    {
      id: "rebellion-1857",
      title: "When People Rebel: 1857 and After",
      section: "History",
      summary: "The causes of the Revolt of 1857, how it spread across north India with leaders such as Rani Lakshmibai and Bahadur Shah Zafar, how the British crushed it, and how the British Crown took over the rule of India.",
      notes: [
        {
          heading: "Causes of the Revolt",
          points: [
            "Rulers and landlords were angry at the **Doctrine of Lapse** and the annexation of Awadh in 1856, which threatened their power and lands.",
            "Sepoys were upset by the **greased cartridges** for the Enfield rifle, which were rumoured to be coated with cow and pig fat.",
            "Peasants, artisans and sepoys suffered from heavy taxes, debts, low pay and loss of livelihood."
          ]
        },
        {
          heading: "The Revolt Spreads",
          points: [
            "The revolt began at **Meerut** on **10 May 1857**, when sepoys rose and marched to Delhi.",
            "**Bahadur Shah Zafar** was proclaimed the leader; **Begum Hazrat Mahal** led the revolt in Lucknow, **Nana Saheb** in Kanpur, **Rani Lakshmibai** in Jhansi and **Kunwar Singh** in Bihar.",
            "Hindus and Muslims fought together against the British, though the rebels did not have a single leader or a shared plan."
          ]
        },
        {
          heading: "Suppression and Changes After 1857",
          points: [
            "The British crushed the revolt by 1858. Bahadur Shah Zafar was tried and exiled to **Rangoon**, where he died in 1862.",
            "The **Government of India Act, 1858** ended the rule of the East India Company, and power passed to the British Crown.",
            "The **Queen's Proclamation of 1858** promised respect for the religious beliefs of Indians and an end to annexation. The British recruited more soldiers from groups they considered loyal, and followed a policy of **divide and rule**."
          ]
        }
      ],
      formulas: [
        "10 May 1857 – Revolt begins at Meerut",
        "1858 – Government of India Act; power passes from the Company to the British Crown",
        "1862 – Bahadur Shah Zafar dies in exile in Rangoon"
      ],
      terms: [
        { term: "Sepoy", meaning: "An Indian soldier serving in the army of the East India Company." },
        { term: "Annexation", meaning: "Taking over a state and adding it to British territory." },
        { term: "Divide and rule", meaning: "A policy of keeping different groups divided so that they could not unite against the rulers." },
        { term: "Queen's Proclamation", meaning: "The 1858 announcement by Queen Victoria that the Crown had taken over India, with promises to respect Indian beliefs." },
        { term: "Greased cartridge", meaning: "A rifle cartridge that sepoys had to bite open; the rumour that it was greased with animal fat angered both Hindu and Muslim soldiers." }
      ],
      qa: [
        {
          q: "Give two reasons why sepoys revolted in 1857.",
          a: "The greased cartridges were believed to contain cow and pig fat, which offended both Hindu and Muslim sepoys. Sepoys also resented their low pay, poor treatment and the Company's policies."
        },
        {
          q: "Why did many rulers and common people join the revolt?",
          a: "The annexation of states under the Doctrine of Lapse and of Awadh threatened the power of rulers. Peasants, artisans and landlords were hit by heavy taxes and loss of land, so they joined the rebels."
        },
        {
          q: "What changes followed the revolt?",
          a: "The British Crown took over from the East India Company under the Government of India Act, 1858. The army was reorganised to recruit more loyal groups, and the Queen's Proclamation promised respect for religious beliefs."
        }
      ],
      quiz: [
        {
          q: "The revolt of 1857 began at:",
          options: ["Lucknow", "Kanpur", "Jhansi", "Meerut"],
          answer: 3,
          explain: "The revolt began at **Meerut** on 10 May 1857, when sepoys rose and marched to Delhi."
        },
        {
          q: "Who was the leader of the revolt at Jhansi?",
          options: ["Begum Hazrat Mahal", "Kunwar Singh", "Nana Saheb", "Rani Lakshmibai"],
          answer: 3,
          explain: "**Rani Lakshmibai** led the rebels at Jhansi and became one of the best-known leaders of 1857."
        },
        {
          q: "Which rifle's cartridges were rumoured to be greased with cow and pig fat?",
          options: ["Martini-Henry", "Enfield", "Lee-Metford", "Winchester"],
          answer: 1,
          explain: "The **Enfield rifle** cartridges were the immediate cause of the sepoys' anger in 1857."
        },
        {
          q: "The Government of India Act of 1858 transferred power to:",
          options: ["The Mughal emperor", "The British Crown", "The Indian National Congress", "The Governor of Bengal alone"],
          answer: 1,
          explain: "After 1858, India was governed directly by the **British Crown** instead of the East India Company."
        },
        {
          q: "The Queen's Proclamation of 1858 promised:",
          options: ["Independence to Indian states", "Elections for all Indians", "Respect for the religious beliefs of Indians", "Indian control over the army"],
          answer: 2,
          explain: "The **Queen's Proclamation** promised to respect the religious beliefs of Indians and to stop further annexation."
        },
        {
          q: "Bahadur Shah Zafar, the last Mughal emperor, was exiled to:",
          options: ["Rangoon", "Kabul", "Lahore", "Calcutta"],
          answer: 0,
          explain: "After the revolt was crushed, Bahadur Shah Zafar was tried and sent into exile in **Rangoon**, where he died in 1862."
        }
      ]
    },
    // ------------------------------------------------------------------
    {
      id: "civilising-educating",
      title: "Civilising the \"Native\", Educating the Nation",
      section: "History",
      summary: "How the British introduced English education in India to create a class of people who could help them govern, how Indian reformers responded by setting up their own schools, and who was left out of education in the nineteenth century.",
      notes: [
        {
          heading: "English Education Begins",
          points: [
            "In **1835**, Lord Macaulay's Minute on Education argued that English should be the medium of higher education in India.",
            "**Wood's Despatch of 1854** recommended education in local languages at the primary level, English at higher levels, and the setting up of universities.",
            "Universities were set up at **Calcutta, Bombay and Madras** in **1857**."
          ]
        },
        {
          heading: "Indian Efforts in Education",
          points: [
            "**Raja Rammohun Roy** supported modern education and social reform, and founded the **Brahmo Sabha** in **1828**.",
            "**Jyotiba Phule** opened a school for girls in **Pune** in **1848**, and **Savitribai Phule** became its first teacher.",
            "Vernacular newspapers and printing presses spread new ideas, and writers used local languages to reach ordinary people."
          ]
        },
        {
          heading: "Who Was Left Out",
          points: [
            "Education was mainly available to upper-caste men in towns. Girls, Dalits and poor peasants had very little access to schools.",
            "Many schools were run by **missionaries**, who taught English and Christian values, while some local communities also set up their own schools."
          ]
        }
      ],
      formulas: [
        "1835 – Macaulay's Minute on English education",
        "1854 – Wood's Despatch on education",
        "1857 – Universities of Calcutta, Bombay and Madras set up",
        "1848 – Jyotiba and Savitribai Phule open a girls' school in Pune"
      ],
      terms: [
        { term: "Vernacular", meaning: "The language spoken in a particular region, such as Bengali, Marathi or Hindi." },
        { term: "Despatch", meaning: "An official letter or report sent from the Court of Directors in London to the government in India." },
        { term: "Medium of instruction", meaning: "The language in which subjects are taught in schools and colleges." },
        { term: "Missionary", meaning: "A person sent by a religious group to spread its faith, often also running schools and hospitals." },
        { term: "Minute", meaning: "A formal note or opinion written by an official, which can influence government policy." }
      ],
      qa: [
        {
          q: "Why did Macaulay want English to be taught in India?",
          a: "He argued that a class of English-educated Indians would act as interpreters between the British and the people, helping the government run the country. He believed English was the most valuable language of knowledge."
        },
        {
          q: "What did Wood's Despatch of 1854 recommend?",
          a: "It recommended education in local languages at the primary level, English at higher levels, the training of teachers, and the setting up of universities at Calcutta, Bombay and Madras."
        },
        {
          q: "How did Indian reformers contribute to education?",
          a: "Reformers like Raja Rammohun Roy and the Phules founded schools and promoted modern learning. Jyotiba and Savitribai Phule opened a school for girls in Pune in 1848, challenging caste and gender barriers."
        }
      ],
      quiz: [
        {
          q: "Lord Macaulay's Minute of 1835 supported:",
          options: ["Teaching only Sanskrit", "English as the medium of higher education", "Education only for women", "Closing all schools"],
          answer: 1,
          explain: "Macaulay argued that **English** should be the medium of higher education in India."
        },
        {
          q: "The universities of Calcutta, Bombay and Madras were established in:",
          options: ["1835", "1854", "1882", "1857"],
          answer: 3,
          explain: "These universities were set up in **1857**, the same year as the revolt."
        },
        {
          q: "Wood's Despatch of 1854 is known for recommending:",
          options: ["Education in local languages at the primary level", "Closing all English schools", "Only religious education", "Compulsory military training"],
          answer: 0,
          explain: "The Despatch recommended **education in local languages** at the primary level, with English at higher levels."
        },
        {
          q: "Which social reformer founded the Brahmo Sabha in 1828?",
          options: ["Jyotiba Phule", "Raja Rammohun Roy", "Swami Dayanand Saraswati", "Ishwar Chandra Vidyasagar"],
          answer: 1,
          explain: "**Raja Rammohun Roy** founded the Brahmo Sabha in 1828, which later became the Brahmo Samaj."
        },
        {
          q: "Savitribai Phule was:",
          options: ["The first woman prime minister", "The first teacher of the girls' school in Pune", "A missionary from England", "The author of Macaulay's Minute"],
          answer: 1,
          explain: "**Savitribai Phule** became the first teacher of the girls' school that she and Jyotiba Phule opened in Pune in 1848."
        },
        {
          q: "Which group had the least access to education in the nineteenth century?",
          options: ["Upper-caste men in towns", "Missionaries", "Dalits, girls and poor peasants", "Officials of the Company"],
          answer: 2,
          explain: "**Dalits, girls and poor peasants** had very little access to schools, unlike upper-caste men in towns."
        }
      ]
    },
    // ------------------------------------------------------------------
    {
      id: "women-caste-reform",
      title: "Women, Caste and Reform",
      section: "History",
      summary: "The social evils of the nineteenth century, such as sati, child marriage and caste discrimination, the reformers who fought them, and the laws that changed the status of women and the lives of marginalised castes.",
      notes: [
        {
          heading: "Social Evils and Early Reforms",
          points: [
            "Practices such as **sati**, child marriage, the denial of widow remarriage and caste discrimination were widespread in nineteenth-century India.",
            "The **Bengal Sati Regulation (1829)**, passed under Lord William Bentinck, made sati illegal and punishable.",
            "Reformers such as **Raja Rammohun Roy** and **Ishwar Chandra Vidyasagar** campaigned against sati and for widow remarriage."
          ]
        },
        {
          heading: "Laws on Women and Marriage",
          points: [
            "The **Widow Remarriage Act of 1856** legalised the remarriage of Hindu widows. Vidyasagar was a leading supporter of this law.",
            "The **Age of Consent Act, 1891** raised the age of consent for girls from 10 to 12 years, after the Rakhmabai case drew attention to child marriage.",
            "The **Child Marriage Restraint Act, 1929**, also called the Sarda Act, set the minimum age of marriage at 14 for girls and 18 for boys."
          ]
        },
        {
          heading: "Caste and Equality",
          points: [
            "**Jyotiba Phule** founded the **Satyashodhak Samaj** in **1873** to fight caste oppression and promote equal rights.",
            "In **1927**, **Dr B. R. Ambedkar** led the **Mahad Satyagraha**, asserting the right of Dalits to draw water from a public tank.",
            "Reform movements often made demands for education and equal rights, and many reformers came from the marginalised communities themselves."
          ]
        }
      ],
      formulas: [
        "1829 – Bengal Sati Regulation makes sati illegal",
        "1856 – Widow Remarriage Act",
        "1873 – Satyashodhak Samaj founded by Jyotiba Phule",
        "1891 – Age of Consent Act (age raised to 12)",
        "1927 – Mahad Satyagraha led by Ambedkar",
        "1929 – Child Marriage Restraint Act (minimum age 14 for girls, 18 for boys)"
      ],
      terms: [
        { term: "Sati", meaning: "A cruel practice in which a widow was forced, or pressured, to die on her husband's funeral pyre." },
        { term: "Widow remarriage", meaning: "The marriage of a widow to another man, which was discouraged in many communities in the nineteenth century." },
        { term: "Age of Consent", meaning: "The minimum age at which a girl could legally agree to sexual relations, which was raised by law in 1891." },
        { term: "Satyashodhak Samaj", meaning: "A society founded by Jyotiba Phule in 1873 to promote equality and truth against caste oppression." },
        { term: "Untouchability", meaning: "The practice of treating certain castes as impure and excluding them from everyday social life." }
      ],
      qa: [
        {
          q: "Why was sati banned in 1829?",
          a: "Sati was a cruel practice that forced or pressured widows to die on their husbands' funeral pyres. Reformers campaigned against it, and the Bengal Sati Regulation of 1829 made it illegal and punishable."
        },
        {
          q: "What was the significance of the Age of Consent Act of 1891?",
          a: "It raised the age of consent for girls from 10 to 12 years, which protected young girls from sexual exploitation within marriage. It was passed after the Rakhmabai case brought the issue into public debate."
        },
        {
          q: "How did Jyotiba Phule challenge caste?",
          a: "Phule set up the Satyashodhak Samaj in 1873 to promote equal rights and challenge Brahmin dominance. He also opened schools for low-caste children and girls, and questioned the claim that caste was divinely ordained."
        }
      ],
      quiz: [
        {
          q: "The Bengal Sati Regulation of 1829 was passed under:",
          options: ["Lord Dalhousie", "Lord Wellesley", "Lord William Bentinck", "Lord Cornwallis"],
          answer: 2,
          explain: "**Lord William Bentinck** got the Bengal Sati Regulation passed in 1829, making sati illegal."
        },
        {
          q: "The Widow Remarriage Act was passed in:",
          options: ["1829", "1929", "1891", "1856"],
          answer: 3,
          explain: "The **Widow Remarriage Act** of 1856 legalised the remarriage of Hindu widows."
        },
        {
          q: "Which law set 14 years as the minimum age of marriage for girls?",
          options: ["Age of Consent Act, 1891", "Child Marriage Restraint Act, 1929", "Widow Remarriage Act, 1856", "Bengal Sati Regulation, 1829"],
          answer: 1,
          explain: "The **Child Marriage Restraint Act, 1929** set the minimum age of marriage at 14 for girls and 18 for boys."
        },
        {
          q: "The Satyashodhak Samaj was founded by:",
          options: ["Ishwar Chandra Vidyasagar", "Raja Rammohun Roy", "Jyotiba Phule", "Dayanand Saraswati"],
          answer: 2,
          explain: "**Jyotiba Phule** founded the Satyashodhak Samaj in 1873 to fight caste oppression."
        },
        {
          q: "Mahad Satyagraha (1927), led by Ambedkar, asserted the right of Dalits to:",
          options: ["Vote in elections", "Use a public water tank", "Join the Indian National Congress", "Study Sanskrit in colleges"],
          answer: 1,
          explain: "Dalits were denied access to a public water tank at Mahad, and Ambedkar led a satyagraha to claim this right."
        },
        {
          q: "Which reformer was a leading supporter of the Widow Remarriage Act?",
          options: ["Ishwar Chandra Vidyasagar", "Jyotiba Phule", "Bal Gangadhar Tilak", "Sardar Patel"],
          answer: 0,
          explain: "**Ishwar Chandra Vidyasagar** campaigned for widow remarriage, which led to the Act of 1856."
        }
      ]
    },
    // ------------------------------------------------------------------
    {
      id: "national-movement",
      title: "The Making of the National Movement: 1870s–1947",
      section: "History",
      summary: "How the Indian National Congress was founded, how Indians became more critical of British rule, how Gandhi led mass movements such as Non-Cooperation, Civil Disobedience and Quit India, and how India finally became independent in 1947.",
      notes: [
        {
          heading: "The Early Phase (1870s–1905)",
          points: [
            "The **Indian National Congress** was founded in **1885**. Its early leaders sought reforms through petitions, speeches and debate.",
            "Many Indians came to believe that British economic policies drained wealth from India and burdened the poor with heavy taxes.",
            "In **1905**, Lord Curzon partitioned Bengal, which led to large protests and the **Swadeshi movement**."
          ]
        },
        {
          heading: "Swadeshi, Rowlatt Act and Non-Cooperation",
          points: [
            "The Swadeshi movement encouraged people to buy Indian goods and boycott British goods. In **1906** the All-India Muslim League was founded at Dhaka.",
            "The **Rowlatt Act (1919)** allowed detention without trial. On **13 April 1919**, troops fired on a peaceful crowd at **Jallianwala Bagh**, Amritsar.",
            "Gandhi launched the **Non-Cooperation Movement** in **1920**, asking people to boycott schools, courts and foreign cloth. It was called off in 1922 after the **Chauri Chaura** incident."
          ]
        },
        {
          heading: "Civil Disobedience and Independence",
          points: [
            "The **Simon Commission** (1928) had no Indian members and was boycotted. At the Lahore session of 1929, Congress demanded **Purna Swaraj**, or complete independence.",
            "Gandhi's **Dandi March** (12 March to 6 April 1930) against the salt tax began the Civil Disobedience Movement.",
            "The **Quit India Movement** was launched on **8 August 1942**. India became independent on **15 August 1947**."
          ]
        }
      ],
      formulas: [
        "1885 – Indian National Congress founded",
        "1905 – Partition of Bengal by Lord Curzon",
        "1919 – Jallianwala Bagh massacre, 13 April",
        "1930 – Dandi March, 12 March to 6 April",
        "1942 – Quit India Movement launched, 8 August",
        "1947 – India becomes independent, 15 August"
      ],
      terms: [
        { term: "Partition", meaning: "The division of Bengal in 1905, which was seen as a divide-and-rule measure against Bengali nationalists." },
        { term: "Swadeshi", meaning: "The promotion of Indian-made goods and the boycott of British goods." },
        { term: "Satyagraha", meaning: "A non-violent protest based on truth and resistance to unjust laws, developed by Gandhi." },
        { term: "Non-cooperation", meaning: "A movement in which Indians withdrew cooperation from British institutions, such as schools, courts and councils." },
        { term: "Purna Swaraj", meaning: "Complete independence, demanded by Congress at the Lahore session in 1929." }
      ],
      qa: [
        {
          q: "Why did the Swadeshi movement begin?",
          a: "The partition of Bengal in 1905 was seen as a divide-and-rule measure against Bengali nationalism. It led to boycotts of British goods and the promotion of Indian-made products, which became the Swadeshi movement."
        },
        {
          q: "What was the importance of the Non-Cooperation Movement?",
          a: "It was the first mass movement against British rule, and students, lawyers and workers joined it. People boycotted schools, courts, foreign cloth and British titles. It was called off after the Chauri Chaura violence in 1922."
        },
        {
          q: "Why did Gandhi choose the Salt March?",
          a: "The salt tax hit the poor hard, because salt was a basic necessity and the government had a monopoly over it. By marching to Dandi and making salt, Gandhi broke this law and turned Civil Disobedience into a national movement."
        }
      ],
      quiz: [
        {
          q: "The Indian National Congress was founded in:",
          options: ["1857", "1885", "1905", "1920"],
          answer: 1,
          explain: "The **Indian National Congress** was founded in 1885, with Allan Octavian Hume among its founders."
        },
        {
          q: "The Partition of Bengal in 1905 was carried out by:",
          options: ["Lord Curzon", "Lord Wellesley", "Lord Cornwallis", "Lord Mountbatten"],
          answer: 0,
          explain: "**Lord Curzon** partitioned Bengal in 1905, which led to the Swadeshi movement."
        },
        {
          q: "The Jallianwala Bagh massacre took place in:",
          options: ["Lahore", "Champaran", "Chauri Chaura", "Amritsar"],
          answer: 3,
          explain: "On **13 April 1919**, troops fired on a peaceful gathering at Jallianwala Bagh in Amritsar."
        },
        {
          q: "The Non-Cooperation Movement was called off after the incident at:",
          options: ["Dandi", "Chauri Chaura", "Bardoli", "Jallianwala Bagh"],
          answer: 1,
          explain: "Gandhi called off the **Non-Cooperation Movement** in 1922 after violence at Chauri Chaura."
        },
        {
          q: "The Dandi March was held to protest against:",
          options: ["The tax on salt", "The Rowlatt Act", "The Partition of Bengal", "The Simon Commission"],
          answer: 0,
          explain: "Gandhi marched to Dandi in 1930 to make salt in defiance of the **salt tax** and the government's monopoly over salt."
        },
        {
          q: "The Quit India Movement was launched on:",
          options: ["15 August 1947", "26 January 1930", "8 August 1942", "13 April 1919"],
          answer: 2,
          explain: "The **Quit India Movement** was launched on 8 August 1942, demanding an end to British rule."
        }
      ]
    },
    // ==================================================================
    // GEOGRAPHY – Resource and Development
    // ==================================================================
    {
      id: "resources",
      title: "Resources",
      section: "Geography",
      summary: "What makes something a resource, how resources are classified, why they must be planned and conserved, and how sustainable development tries to meet present needs without harming the future.",
      notes: [
        {
          heading: "What Is a Resource?",
          points: [
            "A **resource** is anything that people use to satisfy their needs. To be a resource, an item must be available, accessible, technologically possible, economically feasible and culturally acceptable.",
            "Air, water, soil, minerals, forests and wildlife are **natural resources**. Buildings, roads and machines are **human-made resources**.",
            "Human beings, with their skills, knowledge and health, are also a resource."
          ]
        },
        {
          heading: "Classifying Resources",
          points: [
            "**Renewable resources** such as solar and wind energy, and forests, can be replenished naturally over time.",
            "**Non-renewable resources** such as coal and petroleum take millions of years to form and cannot be replaced once they are used up.",
            "**Biotic resources** come from living things, such as forests and animals. **Abiotic resources** are non-living, such as water and minerals."
          ]
        },
        {
          heading: "Planning and Conservation",
          points: [
            "Resources are unevenly distributed. Some regions have plenty of one resource and very little of another.",
            "Over-use and wastage of resources lead to shortages and pollution, so **resource planning** is needed to use them wisely.",
            "**Sustainable development** means meeting present needs without harming the ability of future generations to meet their own needs."
          ]
        }
      ],
      formulas: [
        "Resource = available, accessible, technologically possible, economically feasible and culturally acceptable",
        "1973 – Chipko movement in Uttarakhand, villagers hug trees to stop felling",
        "1992 – Earth Summit at Rio de Janeiro adopts Agenda 21 for sustainable development"
      ],
      terms: [
        { term: "Resource", meaning: "Anything that is useful to people and can satisfy a need, such as land, water, minerals or skills." },
        { term: "Renewable resource", meaning: "A resource that can be replenished naturally, such as solar energy or forests." },
        { term: "Non-renewable resource", meaning: "A resource that cannot be replaced once it is used up, such as coal or petroleum." },
        { term: "Sustainable development", meaning: "Development that meets present needs without harming the needs of future generations." },
        { term: "Biotic resource", meaning: "A resource obtained from living things, such as forests, animals and fish." }
      ],
      qa: [
        {
          q: "What is meant by sustainable development?",
          a: "It means using resources in a way that meets the needs of the present generation without destroying or using up resources that future generations will need."
        },
        {
          q: "Why should resources be used carefully?",
          a: "Resources are limited and unevenly distributed, and over-use leads to shortages, pollution and environmental damage. Careful use ensures that future generations also have resources."
        },
        {
          q: "How do renewable and non-renewable resources differ?",
          a: "Renewable resources, such as solar energy, wind and forests, can be replenished naturally over time. Non-renewable resources, such as coal and petroleum, take millions of years to form and cannot be replaced once used up."
        }
      ],
      quiz: [
        {
          q: "Which of these is a non-renewable resource?",
          options: ["Solar energy", "Wind", "Coal", "Forests"],
          answer: 2,
          explain: "**Coal** takes millions of years to form, so it cannot be replaced once used up."
        },
        {
          q: "Agenda 21 for sustainable development was adopted at which conference in 1992?",
          options: ["Earth Summit at Rio de Janeiro", "Kyoto Protocol talks", "Bretton Woods Conference", "Paris Climate Summit"],
          answer: 0,
          explain: "The **Earth Summit at Rio de Janeiro** in 1992 adopted Agenda 21 to promote sustainable development."
        },
        {
          q: "The Chipko movement, in which villagers hugged trees to stop them being cut, was started in:",
          options: ["Uttarakhand", "Rajasthan", "Odisha", "Kerala"],
          answer: 0,
          explain: "The **Chipko movement** began in the Himalayan region of Uttarakhand in 1973 to protect forests."
        },
        {
          q: "Sustainable development means:",
          options: ["Using all resources as fast as possible", "Meeting present needs without harming future generations", "Developing only natural resources", "Stopping all industries"],
          answer: 1,
          explain: "Sustainable development **balances present needs** with the needs of future generations."
        },
        {
          q: "Which of these is a biotic resource?",
          options: ["Water", "Soil", "Air", "Forests"],
          answer: 3,
          explain: "**Forests** come from living things, so they are biotic. Water, soil and air are abiotic."
        },
        {
          q: "Which of these is a human-made resource?",
          options: ["A forest", "A bridge", "Sunlight", "Iron ore"],
          answer: 1,
          explain: "A **bridge** is built by people, so it is a human-made resource."
        }
      ]
    },
    // ------------------------------------------------------------------
    {
      id: "land-soil-water-vegetation-wildlife",
      title: "Land, Soil, Water, Natural Vegetation and Wildlife Resources",
      section: "Geography",
      summary: "How land is used in India, the main types of soil and their uses, how soil erosion can be prevented, the natural vegetation of different regions, and how wildlife is protected.",
      notes: [
        {
          heading: "Land Use",
          points: [
            "Land is used for forests, pastures, barren land, cultivation, buildings, roads and industries.",
            "Land use depends on factors such as relief, climate, soil and population. Fertile plains are mostly used for farming."
          ]
        },
        {
          heading: "Types of Soil",
          points: [
            "**Alluvial soil** is the most widespread soil. It is formed from sediments deposited by rivers and is found in the Northern Plains.",
            "**Black soil** (regur), formed from lava rock, is found in the Deccan plateau and is ideal for growing cotton.",
            "**Red soil** is found in the south and east, and **laterite soil** in parts of the south and north-east. Both are less fertile."
          ]
        },
        {
          heading: "Soil Erosion and Conservation",
          points: [
            "**Soil erosion** is the removal of the top, fertile layer of soil by wind or water. It is made worse by deforestation and overgrazing.",
            "Methods to prevent erosion include **contour ploughing**, **terrace farming**, planting **shelter belts** of trees and afforestation.",
            "The **Bhakra Nangal dam** and other dams store water for irrigation and power, and rainwater harvesting helps conserve water."
          ]
        },
        {
          heading: "Natural Vegetation and Wildlife",
          points: [
            "The main natural vegetation types are **tropical evergreen** forests, **deciduous** (monsoon) forests and thorny bushes in the dry regions.",
            "The **Wildlife Protection Act, 1972**, protects animals and plants, and **Project Tiger** was launched in **1973** to save the tiger."
          ]
        }
      ],
      formulas: [
        "Alluvial soil – most widespread; Black soil – cotton; Red soil – south and east",
        "1972 – Wildlife Protection Act",
        "1973 – Project Tiger launched"
      ],
      terms: [
        { term: "Alluvial soil", meaning: "Fertile soil deposited by rivers, found mainly in the Northern Plains and coastal areas." },
        { term: "Regur soil", meaning: "Black soil formed from lava rock, found in the Deccan plateau and suited to cotton." },
        { term: "Soil erosion", meaning: "The removal of the top layer of soil by wind or water." },
        { term: "Contour ploughing", meaning: "Ploughing along the contour lines of a slope to slow down water flow and prevent erosion." },
        { term: "Deciduous forest", meaning: "A forest whose trees shed their leaves in the dry season, found in most parts of India." }
      ],
      qa: [
        {
          q: "Why is alluvial soil important for agriculture?",
          a: "It is formed from sediments deposited by rivers, so it is very fertile. It supports crops such as wheat, rice and sugarcane in the Northern Plains."
        },
        {
          q: "What is soil erosion, and how can it be prevented?",
          a: "Soil erosion is the removal of the fertile top layer of soil by wind or water. It can be prevented by contour ploughing, terrace farming, planting shelter belts and avoiding overgrazing."
        },
        {
          q: "Why was Project Tiger started?",
          a: "The number of tigers had fallen sharply because of hunting and loss of habitat. Project Tiger, launched in 1973, set up tiger reserves to protect the species and its habitat."
        }
      ],
      quiz: [
        {
          q: "Which soil is the most widespread in India?",
          options: ["Black soil", "Red soil", "Alluvial soil", "Laterite soil"],
          answer: 2,
          explain: "**Alluvial soil** covers the largest area of India, especially the Northern Plains."
        },
        {
          q: "Black soil, which is good for cotton, is found mainly in:",
          options: ["The Northern Plains", "The Deccan plateau", "Rajasthan", "The north-east hills"],
          answer: 1,
          explain: "**Black soil** is formed from lava rock and is found mainly in the Deccan plateau."
        },
        {
          q: "Contour ploughing is a method used to:",
          options: ["Increase soil salinity", "Grow rice in dry areas", "Prevent soil erosion", "Dig wells"],
          answer: 2,
          explain: "Ploughing along the contours **slows the flow of water** and reduces soil erosion on slopes."
        },
        {
          q: "Project Tiger was launched in which year?",
          options: ["1972", "1865", "1878", "1973"],
          answer: 3,
          explain: "**Project Tiger** was launched in 1973, a year after the Wildlife Protection Act of 1972."
        },
        {
          q: "Which type of forest sheds its leaves in the dry season and covers most of India?",
          options: ["Tropical evergreen forest", "Thorn forest", "Mangrove forest", "Deciduous forest"],
          answer: 3,
          explain: "**Deciduous forests** cover a large part of India and shed their leaves during the dry season."
        },
        {
          q: "Shelter belts are rows of trees planted to:",
          options: ["Provide firewood only", "Protect fields from strong winds", "Mark property boundaries", "Store rainwater"],
          answer: 1,
          explain: "**Shelter belts** protect crops and soil from strong winds, which reduces erosion."
        }
      ]
    },
    // ------------------------------------------------------------------
    {
      id: "agriculture",
      title: "Agriculture",
      section: "Geography",
      summary: "The different types of farming, the Kharif, Rabi and Zaid crop seasons, and how the Green Revolution transformed Indian agriculture, along with the problems farmers still face.",
      notes: [
        {
          heading: "Types of Farming",
          points: [
            "**Subsistence farming** grows food mainly for the farmer's own family, using simple tools and family labour.",
            "**Commercial farming** grows crops for sale in the market and uses modern inputs such as high-yielding seeds, fertilisers and machines.",
            "**Plantation agriculture** grows a single cash crop, such as tea, coffee, rubber or sugarcane, on large estates."
          ]
        },
        {
          heading: "Kharif, Rabi and Zaid Crops",
          points: [
            "**Kharif** crops are sown with the start of the monsoon (June–July) and harvested in autumn (September–October). Examples are rice, maize, jowar, bajra, cotton and groundnut.",
            "**Rabi** crops are sown in winter (October–December) and harvested in spring (March–April). Examples are wheat, barley, gram, peas and mustard.",
            "**Zaid** crops are grown in the short summer season between the Rabi and Kharif seasons, such as watermelon, cucumber and vegetables."
          ]
        },
        {
          heading: "The Green Revolution",
          points: [
            "The **Green Revolution** of the 1960s introduced high-yielding varieties of seeds, along with irrigation, fertilisers and pesticides.",
            "It greatly increased wheat and rice production, mainly in **Punjab, Haryana and western Uttar Pradesh**, and helped India move towards self-sufficiency in food grains.",
            "Farmers still face problems such as small landholdings, dependence on the monsoon, debt and poor storage facilities."
          ]
        }
      ],
      formulas: [
        "Kharif – sown in monsoon (June–July), harvested in September–October",
        "Rabi – sown in winter (October–December), harvested in spring (March–April)",
        "1960s – Green Revolution introduces high-yielding varieties"
      ],
      terms: [
        { term: "Subsistence farming", meaning: "Farming in which the crops grown are mainly used to feed the farmer's own family." },
        { term: "Plantation agriculture", meaning: "The growing of a single cash crop, such as tea or coffee, on a large estate." },
        { term: "Kharif", meaning: "The crop season that begins with the monsoon, when rice and cotton are sown." },
        { term: "Rabi", meaning: "The crop season in winter, when wheat and gram are sown." },
        { term: "Green Revolution", meaning: "A programme of high-yielding seeds, irrigation and chemical fertilisers that increased food grain production from the 1960s." }
      ],
      qa: [
        {
          q: "How does subsistence farming differ from commercial farming?",
          a: "Subsistence farming produces mainly for the farmer's own family, with few surplus crops to sell. Commercial farming produces crops for sale in the market and uses modern inputs to get high yields."
        },
        {
          q: "What is the difference between Kharif and Rabi crops?",
          a: "Kharif crops are sown at the start of the monsoon and harvested in autumn, such as rice, maize and cotton. Rabi crops are sown in winter and harvested in spring, such as wheat, gram and mustard."
        },
        {
          q: "What were the effects of the Green Revolution?",
          a: "It greatly increased the production of wheat and rice and helped India move towards self-sufficiency in food grains. However, its benefits went mostly to farmers who had irrigation and money to buy inputs, and it was concentrated in a few states."
        }
      ],
      quiz: [
        {
          q: "Plantation agriculture is mainly the growing of:",
          options: ["A single cash crop on large estates", "Many food crops for the family", "Vegetables in kitchen gardens", "Crops only for the government"],
          answer: 0,
          explain: "**Plantation agriculture** grows one cash crop, such as tea, coffee or rubber, on large estates."
        },
        {
          q: "Which of these is a Rabi crop?",
          options: ["Rice", "Cotton", "Wheat", "Maize"],
          answer: 2,
          explain: "**Wheat** is sown in winter and harvested in spring, so it is a Rabi crop."
        },
        {
          q: "Kharif crops are sown:",
          options: ["In winter", "In the monsoon", "In the spring", "Only in the dry summer"],
          answer: 1,
          explain: "**Kharif** crops are sown at the beginning of the monsoon, around June and July."
        },
        {
          q: "The Green Revolution began in India in:",
          options: ["1947", "1960s", "1990s", "1905"],
          answer: 1,
          explain: "The **Green Revolution** started in the 1960s with high-yielding varieties of seeds."
        },
        {
          q: "Zaid crops are grown during:",
          options: ["The monsoon", "The winter", "The autumn", "The short summer season"],
          answer: 3,
          explain: "**Zaid** crops such as watermelon and cucumber are grown in the short summer season."
        },
        {
          q: "The Green Revolution benefited mainly which states?",
          options: ["Punjab and Haryana", "Kerala and Goa", "Assam and Meghalaya", "Gujarat and Odisha"],
          answer: 0,
          explain: "The Green Revolution had its greatest impact in **Punjab and Haryana**, along with western Uttar Pradesh."
        }
      ]
    },
    // ------------------------------------------------------------------
    {
      id: "industries",
      title: "Industries",
      section: "Geography",
      summary: "How industries are classified by raw material and ownership, the location of major iron and steel plants, and the environmental problems that industries can cause.",
      notes: [
        {
          heading: "Classifying Industries",
          points: [
            "**Agro-based** industries use farm produce as raw material, such as sugar, cotton textiles and jute. **Forest-based** industries use forest produce, such as paper and furniture.",
            "**Mineral-based** industries use minerals, such as iron and steel, and cement.",
            "By ownership, industries are in the **public sector** (owned by the government), the **private sector** (owned by individuals or companies) or the **joint sector** (owned by both together)."
          ]
        },
        {
          heading: "Iron and Steel",
          points: [
            "Iron and steel is a basic industry, because steel is needed for railways, machines, buildings and ships.",
            "Major steel plants include **Jamshedpur** (Tata Iron and Steel Company, founded in 1907), **Bhilai**, **Rourkela**, **Durgapur**, **Bokaro** and **Salem**.",
            "Industries are often located near their raw materials, because it is cheaper to transport the finished product than heavy raw materials."
          ]
        },
        {
          heading: "Industries and Pollution",
          points: [
            "Industries provide jobs and goods, but they also cause **air and water pollution**, for example when factory waste flows into rivers.",
            "Pollution can be reduced through effluent treatment plants, cleaner technology and laws such as the **Water (Prevention and Control of Pollution) Act, 1974**."
          ]
        }
      ],
      formulas: [
        "Agro-based, mineral-based and forest-based industries – classified by raw material",
        "Public, private and joint sector – classified by ownership",
        "1907 – Tata Iron and Steel Company founded at Jamshedpur",
        "1974 – Water (Prevention and Control of Pollution) Act"
      ],
      terms: [
        { term: "Raw material", meaning: "Natural material, such as cotton, iron ore or wood, that is processed into a finished product." },
        { term: "Agro-based industry", meaning: "An industry that uses agricultural products as its raw material, such as sugar or cotton textiles." },
        { term: "Public sector", meaning: "Industries owned and managed by the government, such as the Bhilai steel plant." },
        { term: "Private sector", meaning: "Industries owned by individuals or companies, usually with the aim of making profit." },
        { term: "Joint sector", meaning: "Industries owned jointly by the government and private companies." }
      ],
      qa: [
        {
          q: "Why are some industries located near their raw materials?",
          a: "Heavy raw materials cost more to transport than the finished product, so industries are set up near them to save cost. For example, sugar mills are located near sugarcane fields, and iron and steel plants near iron ore and coal."
        },
        {
          q: "How does a public sector industry differ from a private sector industry?",
          a: "A public sector industry is owned and managed by the government, and its main aim is public welfare, as with the Bhilai steel plant. A private sector industry is owned by individuals or companies, which mainly aim to earn profit."
        },
        {
          q: "What causes industrial pollution, and how can it be controlled?",
          a: "Factories release smoke, chemicals and untreated waste into the air and water. It can be controlled by installing effluent treatment plants, using cleaner technology and enforcing laws such as the Water Act of 1974."
        }
      ],
      quiz: [
        {
          q: "Which industry is based on forest products?",
          options: ["Sugar", "Paper", "Iron and steel", "Cement"],
          answer: 1,
          explain: "**Paper** is made from wood and other forest products, so it is a forest-based industry."
        },
        {
          q: "The Tata Iron and Steel Company was set up at:",
          options: ["Bhilai", "Jamshedpur", "Rourkela", "Bokaro"],
          answer: 1,
          explain: "The **Tata Iron and Steel Company** was founded in 1907 at Jamshedpur."
        },
        {
          q: "An industry owned by both the government and private companies together is in the:",
          options: ["Public sector", "Private sector", "Joint sector", "Mineral sector"],
          answer: 2,
          explain: "Industries owned jointly by the **government and private companies** belong to the joint sector."
        },
        {
          q: "Sugar industries are mainly:",
          options: ["Mineral-based", "Forest-based", "Agro-based", "Information technology"],
          answer: 2,
          explain: "**Sugar** is made from sugarcane, an agricultural product, so sugar industries are agro-based."
        },
        {
          q: "Which of these is a major steel plant in the public sector?",
          options: ["Bhilai", "Jamshedpur", "Ahmedabad", "Mumbai"],
          answer: 0,
          explain: "The **Bhilai Steel Plant** was set up by the government in the public sector."
        },
        {
          q: "Which Act was passed to control water pollution in 1974?",
          options: ["Wildlife Protection Act", "Forest Act", "Factories Act of 1948", "Water (Prevention and Control of Pollution) Act"],
          answer: 3,
          explain: "The **Water (Prevention and Control of Pollution) Act, 1974**, was passed to control pollution of rivers and water bodies."
        }
      ]
    },
    // ------------------------------------------------------------------
    {
      id: "human-resources",
      title: "Human Resources",
      section: "Geography",
      summary: "How people become a resource when they are educated, skilled and healthy, and what India's population size, density, sex ratio and literacy tell us about its human resources.",
      notes: [
        {
          heading: "People as a Resource",
          points: [
            "A large population becomes a **human resource** when people are educated, skilled and healthy. Otherwise, it can become a burden.",
            "**Human capital** is the knowledge and skills people gain through education and training.",
            "Investment in health and education improves the quality of human resources."
          ]
        },
        {
          heading: "Population Size and Density",
          points: [
            "According to the **2011 Census**, India's population was about **1.21 billion**.",
            "**Population density** is the number of people per square kilometre. The Gangetic plain and Kerala are densely populated, while the Himalayan region and deserts are sparsely populated."
          ]
        },
        {
          heading: "Sex Ratio and Literacy",
          points: [
            "The **sex ratio** is the number of females per 1,000 males. The 2011 Census recorded **943 females per 1,000 males**.",
            "The **literacy rate** rose to about **74%** in 2011, but it was lower for women and in rural areas than for men and in cities."
          ]
        }
      ],
      formulas: [
        "1.21 billion – India's population in the 2011 Census",
        "943 – females per 1,000 males, 2011 Census",
        "About 74% – literacy rate, 2011 Census",
        "Population density = number of people per square kilometre"
      ],
      terms: [
        { term: "Human resource", meaning: "The skills, knowledge and health of people, which contribute to a country's development." },
        { term: "Population density", meaning: "The average number of people living in one square kilometre of area." },
        { term: "Sex ratio", meaning: "The number of females for every 1,000 males in a population." },
        { term: "Literacy rate", meaning: "The percentage of people aged seven and above who can read and write." },
        { term: "Human capital", meaning: "The knowledge and skills that people gain through education and training." }
      ],
      qa: [
        {
          q: "Why is a large population not always an advantage?",
          a: "A large population becomes a burden if people are uneducated and unskilled, because the country cannot create enough jobs or provide basic services. When people are educated and healthy, they become a valuable human resource."
        },
        {
          q: "What is the sex ratio, and why is it important?",
          a: "The sex ratio is the number of females per 1,000 males. A low sex ratio shows social discrimination against girls and women, and it affects health, marriage and development."
        },
        {
          q: "How does education turn people into a human resource?",
          a: "Education develops knowledge and skills, which help people take up jobs, start businesses and contribute to the economy. Educated people also make better decisions about their health and their families."
        }
      ],
      quiz: [
        {
          q: "The number of people living per square kilometre is called:",
          options: ["Sex ratio", "Literacy rate", "Population density", "Birth rate"],
          answer: 2,
          explain: "**Population density** is measured as the number of people per square kilometre."
        },
        {
          q: "According to the 2011 Census, the sex ratio in India was:",
          options: ["943 females per 1,000 males", "832 females per 1,000 males", "1,210 females per 1,000 males", "600 females per 1,000 males"],
          answer: 0,
          explain: "The **2011 Census** recorded 943 females for every 1,000 males."
        },
        {
          q: "Human resource means:",
          options: ["Machines and buildings", "The skills, knowledge and health of people", "Land and water", "Minerals found in the earth"],
          answer: 1,
          explain: "A **human resource** is the skill, knowledge and health of people, which help a country develop."
        },
        {
          q: "Which of these is a sparsely populated region of India?",
          options: ["The Gangetic plain", "Kerala", "The Himalayan region", "The Ganga-Brahmaputra delta"],
          answer: 2,
          explain: "The **Himalayan region** has steep slopes and harsh climate, so it has a low population density."
        },
        {
          q: "Human capital refers to:",
          options: ["Money invested in banks", "Knowledge and skills gained through education and training", "Factories and machines", "Land owned by the government"],
          answer: 1,
          explain: "**Human capital** is the knowledge and skills that people gain through education and training."
        },
        {
          q: "The literacy rate in India in 2011 was about:",
          options: ["25%", "95%", "50%", "74%"],
          answer: 3,
          explain: "The **2011 Census** recorded a literacy rate of about 74%."
        }
      ]
    },
    // ==================================================================
    // SOCIAL AND POLITICAL LIFE – Social and Political Life III
    // ==================================================================
    {
      id: "indian-constitution",
      title: "The Indian Constitution",
      section: "Social and Political Life",
      summary: "What the Constitution is, how it was made, the values declared in the Preamble, and the main parts of the Constitution, including Fundamental Rights, Directive Principles and Fundamental Duties.",
      notes: [
        {
          heading: "Why a Constitution?",
          points: [
            "A **constitution** is the basic law of a country. It sets out how the government is formed and what rights citizens have.",
            "The Constituent Assembly first met on **9 December 1946**. **Dr B. R. Ambedkar** chaired the Drafting Committee.",
            "The Constitution was adopted on **26 November 1949** and came into force on **26 January 1950**."
          ]
        },
        {
          heading: "The Preamble",
          points: [
            "The Preamble begins with 'We, the people of India' and declares India to be a **Sovereign, Socialist, Secular, Democratic Republic**.",
            "It promises **Justice, Liberty, Equality and Fraternity** to all citizens.",
            "The words 'socialist' and 'secular' were added by the **42nd Amendment in 1976**."
          ]
        },
        {
          heading: "Key Parts of the Constitution",
          points: [
            "**Fundamental Rights** (Part III) protect individual freedoms such as equality, freedom of speech and the right against exploitation.",
            "**Directive Principles of State Policy** (Part IV) guide the government towards social and economic welfare. Courts cannot enforce them.",
            "**Fundamental Duties** (Part IV-A), added in 1976, ask citizens to respect the Constitution, the national flag and the national anthem."
          ]
        }
      ],
      formulas: [
        "9 December 1946 – Constituent Assembly first meets",
        "26 November 1949 – Constitution adopted",
        "26 January 1950 – Constitution comes into force",
        "1976 – 42nd Amendment adds 'socialist' and 'secular' to the Preamble"
      ],
      terms: [
        { term: "Constitution", meaning: "The basic law of a country, which sets out the structure of government and the rights of citizens." },
        { term: "Preamble", meaning: "The introduction to the Constitution, which states its aims and values." },
        { term: "Sovereign", meaning: "Having the full power to make its own decisions, without control from any outside authority." },
        { term: "Fundamental Rights", meaning: "Rights guaranteed to every citizen, such as equality and freedom, which courts can enforce." },
        { term: "Directive Principles", meaning: "Guidelines given to the government to promote social and economic welfare, which courts cannot enforce." }
      ],
      qa: [
        {
          q: "What does the Preamble say about the nature of India?",
          a: "It declares India to be a sovereign, socialist, secular, democratic republic. This means India is independent, aims at social and economic equality, has no official religion, and is governed by elected representatives of the people."
        },
        {
          q: "What is the difference between Fundamental Rights and Directive Principles?",
          a: "Fundamental Rights protect individual freedoms and can be enforced in courts. Directive Principles are guidelines for the government to achieve social and economic justice, and courts cannot enforce them."
        },
        {
          q: "Why is the Constitution called the supreme law of the land?",
          a: "No law can go against the Constitution, and courts can declare any law unconstitutional if it violates the Constitution. This makes it the highest law, binding on the government and on citizens."
        }
      ],
      quiz: [
        {
          q: "The Indian Constitution came into force on:",
          options: ["15 August 1947", "26 November 1949", "26 January 1950", "2 October 1952"],
          answer: 2,
          explain: "The Constitution was adopted on 26 November 1949 and came into force on **26 January 1950**."
        },
        {
          q: "Who chaired the Drafting Committee of the Constituent Assembly?",
          options: ["Jawaharlal Nehru", "Dr B. R. Ambedkar", "Rajendra Prasad", "Sardar Patel"],
          answer: 1,
          explain: "**Dr B. R. Ambedkar** chaired the Drafting Committee, which prepared the draft of the Constitution."
        },
        {
          q: "Which of these words was added to the Preamble by the 42nd Amendment in 1976?",
          options: ["Sovereign", "Republic", "Socialist", "Democratic"],
          answer: 2,
          explain: "The words **'socialist'** and 'secular' were added to the Preamble by the 42nd Amendment in 1976."
        },
        {
          q: "Which part of the Constitution contains the Fundamental Rights?",
          options: ["Part III", "Part IV", "Part IV-A", "Part I"],
          answer: 0,
          explain: "**Fundamental Rights** are in Part III of the Constitution."
        },
        {
          q: "Directive Principles of State Policy are:",
          options: ["Enforceable in every court", "Only applicable to Parliament", "Guidelines for the government that cannot be enforced in courts", "Duties of citizens"],
          answer: 2,
          explain: "**Directive Principles** guide the government, but courts cannot enforce them."
        },
        {
          q: "Fundamental Duties were added to the Constitution in:",
          options: ["1950", "1992", "1947", "1976"],
          answer: 3,
          explain: "**Fundamental Duties** were added by the 42nd Amendment in 1976."
        }
      ]
    },
    // ------------------------------------------------------------------
    {
      id: "understanding-secularism",
      title: "Understanding Secularism",
      section: "Social and Political Life",
      summary: "What secularism means in India, how the Constitution protects freedom of religion and equality, and why communalism remains a challenge to a secular state.",
      notes: [
        {
          heading: "What Is Secularism?",
          points: [
            "A **secular state** has no official religion and treats all religions equally.",
            "In India, the state keeps a distance from all religions and does not favour or discriminate against any of them.",
            "The idea of **sarva dharma sambhava**, or equal respect for all religions, is central to Indian secularism."
          ]
        },
        {
          heading: "Secularism in the Constitution",
          points: [
            "**Articles 25 to 28** guarantee freedom of religion, so every person can profess, practise and propagate a religion.",
            "**Article 14** guarantees equality before the law, and **Article 15** prohibits discrimination on grounds of religion, race, caste, sex or place of birth.",
            "**Article 17** abolished untouchability and made its practice an offence."
          ]
        },
        {
          heading: "Challenges to Secularism",
          points: [
            "**Communalism** is the belief that people of one religion have interests opposed to those of another. It has led to riots and conflicts.",
            "Misusing religion for political gain, and religious conflicts, challenge the secular character of the state."
          ]
        }
      ],
      formulas: [
        "1976 – 'Secular' added to the Preamble by the 42nd Amendment",
        "Articles 25–28 – freedom of religion",
        "Article 17 – untouchability is abolished"
      ],
      terms: [
        { term: "Secularism", meaning: "The principle that the state does not favour any religion and treats all religions equally." },
        { term: "Communalism", meaning: "The belief that people of one religion have interests against those of another, which can lead to conflict." },
        { term: "Sarva dharma sambhava", meaning: "Equal respect for all religions, a principle central to Indian secularism." },
        { term: "Freedom of religion", meaning: "The right of every person to profess, practise and propagate their religion." },
        { term: "Untouchability", meaning: "The practice of treating some people as impure and excluding them from social life, which is banned by the Constitution." }
      ],
      qa: [
        {
          q: "What does secularism mean in India?",
          a: "It means that the state does not have an official religion, treats all religions equally, and does not discriminate against citizens on grounds of religion. It also protects the freedom of individuals to follow any religion."
        },
        {
          q: "Which articles of the Constitution guarantee freedom of religion?",
          a: "Articles 25 to 28 guarantee freedom of religion. They allow every person to follow, practise and propagate a religion, and allow religious groups to manage their own religious affairs."
        },
        {
          q: "What is communalism, and why is it a challenge?",
          a: "Communalism is the belief that people of one religion have interests against those of another. It leads to hatred, riots and division, which threaten the unity and secular character of the country."
        }
      ],
      quiz: [
        {
          q: "A secular state is one that:",
          options: ["Has an official religion", "Gives special power to religious leaders", "Allows only one religion", "Treats all religions equally and has no official religion"],
          answer: 3,
          explain: "A **secular state** has no official religion and treats all religions equally."
        },
        {
          q: "Which Article of the Constitution abolished untouchability?",
          options: ["Article 14", "Article 25", "Article 32", "Article 17"],
          answer: 3,
          explain: "**Article 17** abolished untouchability and made its practice an offence."
        },
        {
          q: "Articles 25 to 28 of the Constitution deal with:",
          options: ["Freedom of religion", "Elections", "Parliament's powers", "Citizenship"],
          answer: 0,
          explain: "**Articles 25 to 28** guarantee freedom of religion to every person."
        },
        {
          q: "The phrase 'sarva dharma sambhava' means:",
          options: ["Only one religion is true", "Religion should be banned", "Equal respect for all religions", "Religion is the duty of the state"],
          answer: 2,
          explain: "**Sarva dharma sambhava** means equal respect for all religions, a principle of Indian secularism."
        },
        {
          q: "The belief that people of one religion have interests opposed to those of another is called:",
          options: ["Secularism", "Communalism", "Nationalism", "Federalism"],
          answer: 1,
          explain: "**Communalism** is the belief that religious communities have opposing interests, which can lead to conflict."
        },
        {
          q: "The word 'secular' was added to the Preamble in:",
          options: ["1950", "1956", "1976", "1992"],
          answer: 2,
          explain: "The word **'secular'** was added to the Preamble by the 42nd Amendment in 1976."
        }
      ]
    },
    // ------------------------------------------------------------------
    {
      id: "parliament-making-laws",
      title: "Parliament and the Making of Laws",
      section: "Social and Political Life",
      summary: "The two Houses of Parliament, how they are elected, the stages a Bill passes through before it becomes an Act, and how Parliament holds the government accountable.",
      notes: [
        {
          heading: "Structure of Parliament",
          points: [
            "**Parliament** is the highest law-making body of India. It has two Houses, the **Lok Sabha** and the **Rajya Sabha**, and the **President** is also a part of it.",
            "Members of the **Lok Sabha** are directly elected by the people. There are **543** elected members.",
            "The **Rajya Sabha** is elected indirectly by the elected members of state legislative assemblies. It is a permanent house, and one-third of its members retire every two years."
          ]
        },
        {
          heading: "How a Law Is Made",
          points: [
            "A proposal for a law is introduced as a **Bill** in either House. It is discussed and voted on in both Houses.",
            "A **Money Bill**, which deals with taxes or government spending, can be introduced only in the Lok Sabha. The Rajya Sabha can only make recommendations on it.",
            "Once both Houses pass a Bill, the **President's assent** makes it an Act, which is a law."
          ]
        },
        {
          heading: "Parliament and the Government",
          points: [
            "Parliament holds the government accountable. MPs ask questions, debate issues and can remove the government through a **no-confidence motion**.",
            "Parliamentary committees examine bills and government spending in detail, so that laws are carefully scrutinised."
          ]
        }
      ],
      formulas: [
        "543 – elected members of the Lok Sabha",
        "Rajya Sabha members serve six-year terms",
        "Money Bill – introduced only in the Lok Sabha"
      ],
      terms: [
        { term: "Bill", meaning: "A draft proposal for a law, which is placed before Parliament for discussion and voting." },
        { term: "Money Bill", meaning: "A bill that deals with taxes or government spending, which can be introduced only in the Lok Sabha." },
        { term: "Presidential assent", meaning: "The President's approval of a bill passed by both Houses, which turns it into an Act." },
        { term: "No-confidence motion", meaning: "A motion in the Lok Sabha to test whether the government still has majority support." },
        { term: "Rajya Sabha", meaning: "The Council of States, the upper House of Parliament, whose members are elected by state legislative assemblies." }
      ],
      qa: [
        {
          q: "How is a Bill different from an Act?",
          a: "A Bill is a draft proposal for a law placed before Parliament. Once both Houses pass it and the President gives assent, it becomes an Act, which is a law."
        },
        {
          q: "Why can a Money Bill be introduced only in the Lok Sabha?",
          a: "The Lok Sabha is directly elected and therefore accountable to the people for taxes and spending. The Rajya Sabha can only make recommendations on a Money Bill, which the Lok Sabha may accept or reject."
        },
        {
          q: "How is the Rajya Sabha different from the Lok Sabha?",
          a: "The Rajya Sabha is indirectly elected by state legislative assemblies and is a permanent house. Its members serve six-year terms, and one-third of them retire every two years. The Lok Sabha is directly elected by the people."
        }
      ],
      quiz: [
        {
          q: "How many elected members are there in the Lok Sabha?",
          options: ["250", "543", "100", "790"],
          answer: 1,
          explain: "The **Lok Sabha** has 543 elected members, directly chosen by the people."
        },
        {
          q: "Who is elected indirectly, by state legislative assemblies?",
          options: ["Members of the Lok Sabha", "The Prime Minister", "The Chief Justice", "Members of the Rajya Sabha"],
          answer: 3,
          explain: "**Members of the Rajya Sabha** are elected by the elected members of state legislative assemblies."
        },
        {
          q: "Which bill deals only with taxes or government spending and is introduced in the Lok Sabha?",
          options: ["Money Bill", "Private Member's Bill", "Constitution Amendment Bill", "Ordinance"],
          answer: 0,
          explain: "A **Money Bill** deals with taxes and government spending, and is introduced only in the Lok Sabha."
        },
        {
          q: "After a bill is passed by both Houses, it becomes law after:",
          options: ["The Chief Justice's approval", "A vote in the state assemblies", "The Prime Minister's speech", "The President's assent"],
          answer: 3,
          explain: "The **President's assent** is the last step, which turns a bill into an Act."
        },
        {
          q: "The motion used to test whether the government still has majority support is called:",
          options: ["Adjournment motion", "No-confidence motion", "Budget motion", "Question Hour"],
          answer: 1,
          explain: "A **no-confidence motion** is moved in the Lok Sabha to test the government's majority."
        },
        {
          q: "The Rajya Sabha is:",
          options: ["A house that is dissolved every five years", "Elected directly by all adults", "Headed by the President", "A permanent house"],
          answer: 3,
          explain: "The **Rajya Sabha** is a permanent house, and only one-third of its members retire every two years."
        }
      ]
    },
    // ------------------------------------------------------------------
    {
      id: "judiciary",
      title: "Judiciary",
      section: "Social and Political Life",
      summary: "The structure of India's courts, why an independent judiciary matters, the power of judicial review, and how Public Interest Litigation has made justice more accessible.",
      notes: [
        {
          heading: "Structure of the Judiciary",
          points: [
            "India has an integrated judiciary. The **Supreme Court** is at the top, **High Courts** are in each state or group of states, and subordinate courts work at district and local levels.",
            "The **Supreme Court** was set up on **28 January 1950**. It is the highest court of appeal and the guardian of the Constitution.",
            "High Courts hear appeals from subordinate courts and can hear petitions to protect fundamental rights."
          ]
        },
        {
          heading: "Independence of the Judiciary",
          points: [
            "An independent judiciary can decide cases fairly, including cases against the government, without fear or pressure.",
            "A judge of the Supreme Court or a High Court can be removed only by **impeachment** by Parliament, which is a difficult process."
          ]
        },
        {
          heading: "Judicial Review and Public Interest Litigation",
          points: [
            "**Judicial review** is the power of courts to check laws and government actions. If they go against the Constitution, the courts can declare them invalid.",
            "**Public Interest Litigation (PIL)** allows any citizen or organisation to approach the court on behalf of people who cannot approach it themselves."
          ]
        }
      ],
      formulas: [
        "28 January 1950 – Supreme Court of India set up",
        "Structure of courts: Supreme Court, High Courts, subordinate courts",
        "Judicial review – courts can strike down laws that violate the Constitution"
      ],
      terms: [
        { term: "Judiciary", meaning: "The system of courts that interprets laws and delivers justice." },
        { term: "Judicial review", meaning: "The power of courts to examine laws and government actions and to declare them invalid if they violate the Constitution." },
        { term: "Public Interest Litigation", meaning: "A case filed in court by a citizen or organisation for the sake of the public or of people who cannot approach the court themselves." },
        { term: "Impeachment", meaning: "The formal process by which Parliament can remove a judge for misbehaviour or incapacity." },
        { term: "Subordinate courts", meaning: "District and lower courts that work below the High Courts." }
      ],
      qa: [
        {
          q: "Why is an independent judiciary important?",
          a: "An independent judiciary can decide cases fairly, including those against the government, and protect citizens' rights. Without independence, judges could be pressured by the executive or by powerful people."
        },
        {
          q: "What is judicial review?",
          a: "Judicial review is the power of courts to check whether laws and government actions are consistent with the Constitution. If they are not, the courts can declare them invalid."
        },
        {
          q: "How has Public Interest Litigation made justice more accessible?",
          a: "PIL allows any citizen or organisation to approach the court for people who cannot approach it themselves, such as poor workers or prisoners. This has made justice more accessible to the poor and the disadvantaged."
        }
      ],
      quiz: [
        {
          q: "The Supreme Court of India was set up in:",
          options: ["1947", "1950", "1976", "1992"],
          answer: 1,
          explain: "The **Supreme Court** of India was set up on 28 January 1950, after the Constitution came into force."
        },
        {
          q: "Which is the highest court in India?",
          options: ["High Court", "District Court", "Family Court", "Supreme Court"],
          answer: 3,
          explain: "The **Supreme Court** is at the top of the judicial system and is the highest court of appeal."
        },
        {
          q: "The power of courts to examine whether laws follow the Constitution is called:",
          options: ["Judicial review", "Public interest litigation", "Impeachment", "Suo motu action"],
          answer: 0,
          explain: "**Judicial review** allows courts to declare laws invalid if they violate the Constitution."
        },
        {
          q: "A judge of the Supreme Court can be removed only by:",
          options: ["The Prime Minister's order", "A vote of the President alone", "Impeachment by Parliament", "A decision of the High Court"],
          answer: 2,
          explain: "A judge can be removed only by **impeachment** by Parliament, which is a difficult process."
        },
        {
          q: "Public Interest Litigation allows:",
          options: ["Only the government to file cases", "Any citizen or organisation to approach the court for others", "Only lawyers to appeal", "Only students to file cases"],
          answer: 1,
          explain: "**PIL** allows any citizen or organisation to go to court on behalf of people who cannot do so themselves."
        },
        {
          q: "Which courts sit at the top of each state's judicial system?",
          options: ["High Courts", "Gram Panchayat courts", "Sessions courts", "Lok Adalats"],
          answer: 0,
          explain: "Each state has a **High Court** at the top of its judicial system, below the Supreme Court."
        }
      ]
    },
    // ------------------------------------------------------------------
    {
      id: "understanding-marginalisation",
      title: "Understanding Marginalisation",
      section: "Social and Political Life",
      summary: "Which groups are marginalised in Indian society and why, how the Constitution tries to protect them through the abolition of untouchability and reservation, and the challenges that still remain.",
      notes: [
        {
          heading: "Who Is Marginalised?",
          points: [
            "Marginalised groups are communities that are excluded or disadvantaged in society. They include **Scheduled Castes** (Dalits), **Scheduled Tribes** (Adivasis), **Other Backward Classes**, religious minorities, women and persons with disabilities.",
            "Marginalisation means social exclusion, lack of access to education, jobs, land and public life, and not just poverty.",
            "It can be caused by caste discrimination, gender discrimination and the loss of land and forests."
          ]
        },
        {
          heading: "Constitutional Measures",
          points: [
            "**Article 17** abolished untouchability and made its practice an offence.",
            "**Articles 15(4) and 16(4)** allow the government to make special provisions, including **reservation** in education and government jobs, for backward classes, Scheduled Castes and Scheduled Tribes."
          ]
        },
        {
          heading: "Challenges That Remain",
          points: [
            "Despite these measures, discrimination, violence and unequal access to resources continue in many places.",
            "**Adivasis** often lose their land and forests to mining, dams and other development projects, which increases their marginalisation.",
            "Marginalised groups need to be included in decision-making, so that their voices are heard in schools, panchayats and other institutions."
          ]
        }
      ],
      formulas: [
        "Article 17 – untouchability is abolished",
        "Articles 15(4) and 16(4) – special provisions and reservation",
        "Scheduled Castes and Scheduled Tribes – groups listed for special protection"
      ],
      terms: [
        { term: "Marginalisation", meaning: "The process by which a group is pushed to the edges of society and denied equal access to resources and opportunities." },
        { term: "Scheduled Castes", meaning: "Communities listed in the Constitution as historically disadvantaged, also known as Dalits." },
        { term: "Scheduled Tribes", meaning: "Communities listed in the Constitution as tribal groups, also known as Adivasis." },
        { term: "Reservation", meaning: "A system that sets aside a share of seats in education and government jobs for disadvantaged groups." },
        { term: "Social exclusion", meaning: "Being kept out of ordinary social, economic and political life because of one's identity." }
      ],
      qa: [
        {
          q: "What is meant by marginalisation?",
          a: "Marginalisation means being pushed to the edges of society so that a group is denied equal access to education, jobs, land, public services and decision-making. It can result from caste, gender, religion or disability."
        },
        {
          q: "What is the purpose of reservation?",
          a: "Reservation gives special provision in education and government jobs to communities that have been historically disadvantaged. It aims to bring them into equal participation and to correct past injustice."
        },
        {
          q: "Why are Adivasis particularly vulnerable to marginalisation?",
          a: "Many Adivasis depend on forests and land, which are often lost to mining, dams and other development projects. Loss of land and forest reduces their livelihoods and makes them more vulnerable."
        }
      ],
      quiz: [
        {
          q: "Which group is also called Dalits?",
          options: ["Scheduled Tribes", "Religious minorities", "Other Backward Classes", "Scheduled Castes"],
          answer: 3,
          explain: "**Scheduled Castes** are also known as Dalits."
        },
        {
          q: "Adivasis are officially known as:",
          options: ["Other Backward Classes", "Scheduled Castes", "Scheduled Tribes", "Religious minorities"],
          answer: 2,
          explain: "**Adivasis** are officially listed as **Scheduled Tribes** in the Constitution."
        },
        {
          q: "Which Articles allow special provisions and reservation for backward classes?",
          options: ["Articles 15(4) and 16(4)", "Articles 25 to 28", "Articles 32 and 226", "Articles 79 and 80"],
          answer: 0,
          explain: "**Articles 15(4) and 16(4)** allow special provisions and reservation for backward classes."
        },
        {
          q: "Reservation means:",
          options: ["Free land for every family", "A ban on all government jobs", "A tax on rich families", "Special provision in education and jobs for disadvantaged groups"],
          answer: 3,
          explain: "**Reservation** sets aside seats in education and jobs for disadvantaged groups."
        },
        {
          q: "Which of these is a main reason for the marginalisation of Adivasis?",
          options: ["Access to schools in cities", "Owning factories", "Loss of land and forests to development projects", "Living in urban areas"],
          answer: 2,
          explain: "Many Adivasis have lost their **land and forests** to development projects, which reduces their livelihoods."
        },
        {
          q: "Marginalisation means:",
          options: ["Living in a rural area", "Being pushed to the edges of society and denied equal access", "Choosing to live separately", "Being the majority in a region"],
          answer: 1,
          explain: "**Marginalisation** means being pushed to the edges of society and denied equal access to resources and opportunities."
        }
      ]
    }
  ]
});
