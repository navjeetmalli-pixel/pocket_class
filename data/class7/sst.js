StudyData.add(7, "sst", {
  // What this content follows. match: "textbook" | "older-book" | "topic". Set reviewed to a date once a teacher has checked it.
  syllabus: {board: "CBSE", match: "older-book", books: ["Our Pasts II","Our Environment","Social and Political Life II"], note: "NCERT has since published a new book for this class, so chapter names and order may differ.", reviewed: false},
  chapters: [
    // ==================================================================
    // HISTORY – Our Pasts II
    // ==================================================================
    {
      id: "tracing-changes",
      title: "Tracing Changes Through a Thousand Years",
      section: "History",
      summary: "How historians learn about India's past from coins, inscriptions, buildings and travellers' accounts, and why the way we divide history into periods matters.",
      notes: [
        {
          heading: "Where Historians Find Information",
          points: [
            "**Archaeological sources** include tools, pottery, coins, inscriptions and monuments.",
            "**Literary sources** include chronicles, religious texts, biographies and travel accounts.",
            "**Visual sources** include paintings, sculptures, maps and miniature paintings.",
            "**Inscriptions** carved on stone pillars and rocks, like the edicts of **Ashoka** written in the Brahmi script, tell us about rulers and their ideas."
          ]
        },
        {
          heading: "Travellers Who Wrote About India",
          points: [
            "**Al-Biruni**, a scholar from Central Asia, wrote about Indian customs and beliefs in Arabic around **1030 CE**. He had learnt Sanskrit.",
            "**Ibn Battuta**, a traveller from Morocco, visited Delhi in the 14th century during the reign of **Muhammad bin Tughlaq** and described its people and markets.",
            "Such accounts are useful, but a traveller saw only a small part of the country and may have misunderstood some things."
          ]
        },
        {
          heading: "Dividing History into Periods",
          points: [
            "Historians divide the past into **Ancient**, **Medieval** and **Modern** periods. This helps us study how society changed over time.",
            "The British historian **James Mill** divided Indian history into 'Hindu', 'Muslim' and 'British' periods, based on the religion of the rulers.",
            "Historians today reject this division, because the religion of a ruler does not describe the lives of ordinary people in that age."
          ]
        }
      ],
      formulas: [
        "Ancient, Medieval and Modern – the three periods historians use",
        "c. 1030 CE – Al-Biruni writes about India in Arabic",
        "14th century – Ibn Battuta visits Delhi"
      ],
      terms: [
        { term: "Archaeology", meaning: "The study of the past through objects that people made and used, such as tools, pots and buildings." },
        { term: "Inscription", meaning: "Words carved or written on stone, metal or other hard material." },
        { term: "Chronicle", meaning: "A historical record of events, usually written in the order they happened." },
        { term: "Edict", meaning: "An official order or announcement issued by a ruler." },
        { term: "Periodisation", meaning: "Dividing the past into periods such as Ancient, Medieval and Modern." }
      ],
      qa: [
        {
          q: "Name the three kinds of historical sources and give one example of each.",
          a: "**Archaeological** sources (coins, pottery, monuments), **literary** sources (chronicles, travel accounts such as Ibn Battuta's) and **visual** sources (paintings, sculptures, maps)."
        },
        {
          q: "Why do historians today not divide Indian history into Hindu, Muslim and British periods?",
          a: "Because this division is based only on the religion of the rulers. It ignores the changes in society, economy and culture that happened in each period, and the lives of ordinary people."
        }
      ],
      quiz: [
        {
          q: "Which of these is a literary source?",
          options: ["A coin of the Gupta period", "Ibn Battuta's travel account", "A stone pillar with Ashoka's edicts", "A temple built by the Cholas"],
          answer: 1,
          explain: "Ibn Battuta's account is a **written** source. Coins, pillars and temples are **archaeological** sources."
        },
        {
          q: "During whose reign did Ibn Battuta visit Delhi?",
          options: ["Akbar", "Harsha", "Muhammad bin Tughlaq", "Shah Jahan"],
          answer: 2,
          explain: "Ibn Battuta, a 14th-century traveller from Morocco, visited Delhi during the reign of **Muhammad bin Tughlaq**."
        },
        {
          q: "In which script were most of Ashoka's edicts written?",
          options: ["Brahmi", "Devanagari", "Persian", "Gurmukhi"],
          answer: 0,
          explain: "Most of Ashoka's inscriptions were written in the **Brahmi** script, which was read from left to right."
        },
        {
          q: "Which of these is a visual source?",
          options: ["A Persian chronicle", "A Buddhist text", "An inscription on a pillar", "A Mughal miniature painting"],
          answer: 3,
          explain: "Paintings, sculptures and maps are **visual** sources. They show how people and places looked in the past."
        },
        {
          q: "Which scholar from Central Asia wrote about India around 1030 CE?",
          options: ["Xuanzang", "Al-Biruni", "Abul Fazl", "Amir Khusrau"],
          answer: 1,
          explain: "**Al-Biruni** wrote about Indian customs, beliefs and science in Arabic. Xuanzang was a Chinese pilgrim."
        }
      ]
    },
    {
      id: "new-kings-kingdoms",
      title: "New Kings and Kingdoms",
      section: "History",
      summary: "How new dynasties such as the Palas, Rashtrakutas, Cholas and Chalukyas rose in different parts of India, and how the country was invaded from the north-west.",
      notes: [
        {
          heading: "Harshavardhana of Kannauj",
          points: [
            "**Harshavardhana** ruled from **Kannauj** from about **606 to 647 CE** and expanded his kingdom across northern India.",
            "The Chinese traveller **Xuanzang** visited his court and wrote about it.",
            "Harsha was defeated on the river **Narmada** by the Chalukya king **Pulakeshin II**."
          ]
        },
        {
          heading: "The Struggle for Kannauj",
          points: [
            "Kannauj was a rich and well-placed city on the Ganga plain. Whoever controlled it could claim power over northern India.",
            "The **Palas** of Bengal, the **Gurjara-Pratiharas** and the **Rashtrakutas** fought for Kannauj for a long time. This is called the **tripartite struggle**.",
            "The **Pallavas** ruled from Kanchipuram, and the **Chalukyas** from Badami, in the south."
          ]
        },
        {
          heading: "The Cholas",
          points: [
            "**Rajaraja I** (985–1014 CE) built a strong Chola kingdom in Tamil Nadu, with a powerful navy.",
            "He built the **Brihadeeswara temple** at **Thanjavur**, dedicated to Shiva. It is a magnificent example of Chola architecture.",
            "**Rajendra I** sent a naval expedition to Southeast Asia, and Chola trade reached many countries across the sea."
          ]
        },
        {
          heading: "Invasions from the North-West",
          points: [
            "In **712 CE**, the Arab general **Muhammad bin Qasim** conquered Sindh.",
            "In the early 11th century, **Mahmud of Ghazni** raided north India many times and looted temples and cities."
          ]
        }
      ],
      formulas: [
        "606–647 CE – Harshavardhana rules from Kannauj",
        "712 CE – Muhammad bin Qasim conquers Sindh",
        "985–1014 CE – Rajaraja I rules the Cholas",
        "c. 1010 CE – Brihadeeswara temple at Thanjavur is completed"
      ],
      terms: [
        { term: "Dynasty", meaning: "A family of rulers who pass power from one generation to the next." },
        { term: "Tripartite struggle", meaning: "The long contest among three powers – the Palas, Pratiharas and Rashtrakutas – for control of Kannauj." },
        { term: "Naval expedition", meaning: "A military or trading voyage by ships across the sea." },
        { term: "Raid", meaning: "A quick attack to loot wealth, without staying to rule the area." }
      ],
      qa: [
        {
          q: "Why did the Palas, Pratiharas and Rashtrakutas fight over Kannauj?",
          a: "Kannauj was a rich and strategically placed city on the Ganga plain. Whoever controlled it could claim to be the most powerful ruler in northern India, and it brought wealth and prestige."
        },
        {
          q: "What does the Brihadeeswara temple tell us about the Cholas?",
          a: "It shows that the Chola kings were wealthy and skilled in architecture and sculpture. Large temples were also centres of religious life and local administration."
        }
      ],
      quiz: [
        {
          q: "Which city was the capital of Harshavardhana?",
          options: ["Thanjavur", "Kannauj", "Badami", "Kanchipuram"],
          answer: 1,
          explain: "Harshavardhana ruled northern India from **Kannauj**."
        },
        {
          q: "Who conquered Sindh in 712 CE?",
          options: ["Mahmud of Ghazni", "Muhammad bin Qasim", "Rajaraja I", "Pulakeshin II"],
          answer: 1,
          explain: "The Arab general **Muhammad bin Qasim** conquered Sindh in 712 CE."
        },
        {
          q: "The Brihadeeswara temple at Thanjavur was built by:",
          options: ["Harshavardhana", "Pulakeshin II", "Mahmud of Ghazni", "Rajaraja I"],
          answer: 3,
          explain: "**Rajaraja I** built the Brihadeeswara temple, dedicated to Shiva, in the early 11th century."
        },
        {
          q: "Which Chalukya king defeated Harsha on the river Narmada?",
          options: ["Pulakeshin II", "Dharmapala", "Rajendra I", "Mahmud of Ghazni"],
          answer: 0,
          explain: "**Pulakeshin II** of the Chalukyas defeated Harsha on the Narmada."
        },
        {
          q: "The Palas were a dynasty that ruled which region?",
          options: ["Punjab", "Sindh", "Bengal", "Tamil Nadu"],
          answer: 2,
          explain: "The **Palas** ruled Bengal and parts of Bihar, and were one of the three powers in the struggle for Kannauj."
        }
      ]
    },
    {
      id: "delhi-sultans",
      title: "The Delhi Sultans",
      section: "History",
      summary: "The five dynasties that ruled Delhi from 1206 to 1526, the rule of Razia Sultan, Alauddin Khalji's market control, and the defeat of the last sultan at Panipat.",
      notes: [
        {
          heading: "The First Sultans",
          points: [
            "**Qutb-ud-din Aibak**, a former slave of the Ghurid ruler Muhammad Ghori, became the first Sultan of Delhi in **1206**.",
            "The **Qutb Minar** in Delhi was begun by Aibak and completed by his successor **Iltutmish**.",
            "**Razia Sultan**, Iltutmish's daughter, was the only woman to rule Delhi as Sultan. She ruled from **1236 to 1240**."
          ]
        },
        {
          heading: "Alauddin Khalji and Market Control",
          points: [
            "**Alauddin Khalji** (1296–1316) defended the Sultanate from Mongol raids and kept a large army.",
            "To pay and feed his army, he set fixed prices for grain, cloth and other goods in Delhi's markets.",
            "He appointed officers to check that shopkeepers followed the rules, and punished those who cheated."
          ]
        },
        {
          heading: "Muhammad bin Tughlaq",
          points: [
            "**Muhammad bin Tughlaq** tried to shift the capital to **Daulatabad** in **1327**, but the plan failed and people suffered.",
            "He introduced **token currency** made of copper and bronze. People made fake coins at home, and the scheme was given up."
          ]
        },
        {
          heading: "The End of the Sultanate",
          points: [
            "The last dynasty was the **Lodis**. Their ruler **Ibrahim Lodi** was defeated by **Babur** at the **First Battle of Panipat** in **1526**.",
            "This battle opened the way for the Mughal Empire."
          ]
        }
      ],
      formulas: [
        "1206 – Qutb-ud-din Aibak becomes the first Sultan of Delhi",
        "1236–1240 – Razia Sultan rules Delhi",
        "1296–1316 – Alauddin Khalji rules",
        "1327 – Muhammad bin Tughlaq shifts the capital to Daulatabad",
        "1526 – First Battle of Panipat; the Delhi Sultanate ends"
      ],
      terms: [
        { term: "Sultan", meaning: "The title of a Muslim ruler." },
        { term: "Iqta", meaning: "Land given to officers, who collected its revenue in return for their service to the Sultan." },
        { term: "Mongols", meaning: "Central Asian people who raided the northern parts of the Sultanate." },
        { term: "Token currency", meaning: "Coins made of cheap metal whose value is set by the ruler, not by their metal content." },
        { term: "Dynasty", meaning: "A family of rulers who pass power from one generation to the next." }
      ],
      qa: [
        {
          q: "What were the main features of Alauddin Khalji's market control?",
          a: "He fixed the prices of grain, cloth and other goods, checked shopkeepers and punished those who cheated. This kept prices low and helped him pay and feed a large army."
        },
        {
          q: "Why did Muhammad bin Tughlaq's token currency fail?",
          a: "People could easily make fake copper and bronze tokens at home. Since they were not trusted, the government had to withdraw the scheme."
        }
      ],
      quiz: [
        {
          q: "Who was the first Sultan of Delhi?",
          options: ["Iltutmish", "Qutb-ud-din Aibak", "Alauddin Khalji", "Razia Sultan"],
          answer: 1,
          explain: "**Qutb-ud-din Aibak**, a former slave, became the first Sultan of Delhi in 1206."
        },
        {
          q: "Which Sultan ruled Delhi between 1236 and 1240?",
          options: ["Alauddin Khalji", "Balban", "Razia Sultan", "Muhammad bin Tughlaq"],
          answer: 2,
          explain: "**Razia Sultan** was the only woman to rule Delhi as Sultan."
        },
        {
          q: "Which Sultan fixed the prices of grain and cloth in Delhi?",
          options: ["Alauddin Khalji", "Ibrahim Lodi", "Qutb-ud-din Aibak", "Babur"],
          answer: 0,
          explain: "**Alauddin Khalji** set fixed prices for grain, cloth and other goods to keep his army supplied."
        },
        {
          q: "The Delhi Sultanate ended after which battle?",
          options: ["Battle of Plassey", "First Battle of Panipat", "Battle of Buxar", "Battle of Talikota"],
          answer: 1,
          explain: "Babur defeated Ibrahim Lodi at the **First Battle of Panipat** in 1526, ending the Delhi Sultanate."
        },
        {
          q: "Muhammad bin Tughlaq tried to shift his capital to:",
          options: ["Agra", "Fatehpur Sikri", "Lahore", "Daulatabad"],
          answer: 3,
          explain: "In 1327 he tried to move the capital to **Daulatabad**, but the plan failed."
        }
      ]
    },
    {
      id: "mughal-empire",
      title: "The Mughal Empire",
      section: "History",
      summary: "How Babur founded the Mughal Empire, how Akbar built a strong and tolerant administration, and how the empire weakened after Aurangzeb.",
      notes: [
        {
          heading: "Babur and the Foundation",
          points: [
            "**Babur**, a ruler from the Fergana valley in Central Asia, defeated Ibrahim Lodi at **Panipat in 1526** and founded the Mughal Empire.",
            "**Humayun**, Babur's son, lost his kingdom to **Sher Shah Suri** in 1540 and returned to power only after Sher Shah's death.",
            "Sher Shah's roads, including the route later known as the Grand Trunk Road, helped trade and communication."
          ]
        },
        {
          heading: "Akbar's Administration",
          points: [
            "**Akbar** (1556–1605) expanded the empire and ran it through the **mansabdari** system. Every officer was given a rank, or mansab, that decided his salary and the number of soldiers he had to keep.",
            "**Todar Mal**, Akbar's revenue minister, introduced the **zabt** system, in which land was measured and the tax was fixed according to its yield.",
            "Akbar abolished the **jizya**, a tax on non-Muslims, and followed the policy of **sulh-i-kul**, meaning 'peace with all'."
          ]
        },
        {
          heading: "Later Mughals",
          points: [
            "**Shah Jahan** (1628–1658) built the **Taj Mahal** at Agra and the **Red Fort** in Delhi.",
            "**Aurangzeb** (1658–1707) expanded the empire to the south, but his long wars and strict policies created discontent.",
            "After Aurangzeb died in 1707, the empire weakened as provincial governors became independent."
          ]
        }
      ],
      formulas: [
        "1526 – First Battle of Panipat; Babur founds the Mughal Empire",
        "1556–1605 – Reign of Akbar",
        "1540 – Humayun defeated by Sher Shah Suri",
        "1658–1707 – Reign of Aurangzeb",
        "1707 – Death of Aurangzeb; the empire starts to decline"
      ],
      terms: [
        { term: "Mansabdar", meaning: "An officer in the Mughal administration, ranked according to his mansab." },
        { term: "Jizya", meaning: "A tax paid by non-Muslim men under many Muslim rulers. Akbar abolished it." },
        { term: "Zabt", meaning: "Akbar's revenue system, in which land was measured and the tax was fixed." },
        { term: "Sulh-i-kul", meaning: "Akbar's policy of 'peace with all', which respected all religions." },
        { term: "Subedar", meaning: "The governor of a province (subah) in the Mughal Empire." }
      ],
      qa: [
        {
          q: "What was the mansabdari system?",
          a: "A system in which every Mughal officer was given a rank called a mansab. The rank decided his salary and the number of horsemen he had to maintain for the emperor."
        },
        {
          q: "What did Akbar's policy of sulh-i-kul mean?",
          a: "It meant 'peace with all'. Akbar respected all religions, gave non-Muslims important posts in government, and did not force people to follow one faith."
        }
      ],
      quiz: [
        {
          q: "Who defeated Ibrahim Lodi at the First Battle of Panipat?",
          options: ["Humayun", "Babur", "Akbar", "Sher Shah Suri"],
          answer: 1,
          explain: "**Babur** defeated Ibrahim Lodi at Panipat in 1526 and founded the Mughal Empire."
        },
        {
          q: "Which Mughal emperor built the Taj Mahal?",
          options: ["Jahangir", "Akbar", "Shah Jahan", "Aurangzeb"],
          answer: 2,
          explain: "**Shah Jahan** built the Taj Mahal at Agra as a tomb for his wife Mumtaz Mahal."
        },
        {
          q: "Which minister introduced the zabt revenue system?",
          options: ["Todar Mal", "Abul Fazl", "Birbal", "Raja Man Singh"],
          answer: 0,
          explain: "**Todar Mal**, Akbar's revenue minister, introduced the zabt system of measuring land and fixing its tax."
        },
        {
          q: "Who introduced the mansabdari system?",
          options: ["Babur", "Humayun", "Shah Jahan", "Akbar"],
          answer: 3,
          explain: "**Akbar** organised his nobles and officers under the mansabdari system."
        },
        {
          q: "Aurangzeb ruled the Mughal Empire from:",
          options: ["1526 to 1530", "1556 to 1605", "1628 to 1658", "1658 to 1707"],
          answer: 3,
          explain: "**Aurangzeb** ruled from 1658 to 1707. He was the last of the strong Mughal emperors."
        }
      ]
    },
    {
      id: "rulers-buildings",
      title: "Rulers and Buildings",
      section: "History",
      summary: "How the forts, tombs, towers and temples built by rulers show their power, wealth and tastes, with examples from Delhi, Agra, Fatehpur Sikri and Hampi.",
      notes: [
        {
          heading: "Why Buildings Matter",
          points: [
            "Buildings such as forts, palaces, tombs and temples show the **power**, **wealth** and **tastes** of those who built them.",
            "Historians study buildings, along with inscriptions and texts, to understand how people lived and worked."
          ]
        },
        {
          heading: "Qutb Minar and the Sultans",
          points: [
            "The **Qutb Minar** in Delhi is a tall tower of red sandstone and marble, begun by Qutb-ud-din Aibak and completed by Iltutmish.",
            "Its carvings and inscriptions show a mix of Indian and Islamic styles."
          ]
        },
        {
          heading: "Hampi and Vijayanagara",
          points: [
            "**Hampi**, on the banks of the river **Tungabhadra**, was the capital of the **Vijayanagara** empire, founded in **1336**.",
            "Its temples, markets, palaces and water tanks show the wealth and skill of the empire's builders."
          ]
        },
        {
          heading: "Mughal Buildings",
          points: [
            "**Akbar** built **Fatehpur Sikri** near Agra as his capital, but later abandoned it. Its **Buland Darwaza** celebrates his victory in Gujarat.",
            "**Shah Jahan** built the **Red Fort** in Delhi, which was completed in **1648**, and the **Taj Mahal** at Agra, completed around **1653**.",
            "The Taj Mahal is made of white marble and is decorated with **pietra dura**, a technique of inlaying precious stones into marble."
          ]
        }
      ],
      formulas: [
        "1336 – Vijayanagara empire is founded; Hampi becomes its capital",
        "c. 1571 – Akbar makes Fatehpur Sikri his capital",
        "1648 – Red Fort completed in Delhi",
        "c. 1653 – Taj Mahal completed at Agra"
      ],
      terms: [
        { term: "Mausoleum", meaning: "A building that houses a tomb, such as the Taj Mahal." },
        { term: "Minaret", meaning: "A tall, slender tower attached to a mosque or other building." },
        { term: "Jharokha", meaning: "A projecting balcony with a screen, from which rulers could be seen by the public." },
        { term: "Pietra dura", meaning: "The art of inlaying coloured stones into marble to make patterns." }
      ],
      qa: [
        {
          q: "How do buildings help historians understand the past? Give two examples.",
          a: "Buildings show the power, wealth, religion and tastes of rulers. For example, the Taj Mahal shows Shah Jahan's love of marble and symmetry, and the ruins of Hampi show the wealth of the Vijayanagara empire."
        },
        {
          q: "Name two features of Mughal architecture seen in the Taj Mahal.",
          a: "Its large central dome, arches and tall minarets, marble inlay (pietra dura) and the symmetrical garden layout."
        }
      ],
      quiz: [
        {
          q: "On the banks of which river is Hampi located?",
          options: ["Tungabhadra", "Narmada", "Kaveri", "Yamuna"],
          answer: 0,
          explain: "**Hampi**, the capital of Vijayanagara, lies on the banks of the river **Tungabhadra**."
        },
        {
          q: "Which ruler built the city of Fatehpur Sikri?",
          options: ["Shah Jahan", "Akbar", "Babur", "Iltutmish"],
          answer: 1,
          explain: "**Akbar** built Fatehpur Sikri near Agra. Its Buland Darwaza celebrates his victory in Gujarat."
        },
        {
          q: "The Red Fort in Delhi was built by:",
          options: ["Akbar", "Aurangzeb", "Shah Jahan", "Humayun"],
          answer: 2,
          explain: "**Shah Jahan** built the Red Fort, which was completed in 1648."
        },
        {
          q: "The Taj Mahal was built as a tomb for:",
          options: ["Jodha Bai", "Razia Sultan", "Mumtaz Mahal", "Nur Jahan"],
          answer: 2,
          explain: "**Shah Jahan** built the Taj Mahal in memory of his wife **Mumtaz Mahal**."
        },
        {
          q: "What is pietra dura?",
          options: ["A Mughal tax on temples", "A style of Vijayanagara sculpture", "A form of Sufi music", "A type of marble inlay using precious stones"],
          answer: 3,
          explain: "**Pietra dura** is the art of fixing coloured stones into marble to make patterns, seen in the Taj Mahal."
        }
      ]
    },
    {
      id: "towns-traders",
      title: "Towns, Traders and Craftspersons",
      section: "History",
      summary: "How towns grew as centres of trade and crafts, how traders and craftspersons organised themselves into guilds, and how money was sent without carrying coins.",
      notes: [
        {
          heading: "Towns as Centres of Trade",
          points: [
            "Many towns grew as centres of trade, religion and crafts, such as **Kanchipuram**, **Madurai**, **Varanasi** and **Hampi**.",
            "**Surat**, a port on the river **Tapti** in Gujarat, became a major trading centre, with ships sailing to Arabia, Persia and Southeast Asia."
          ]
        },
        {
          heading: "Famous Crafts",
          points: [
            "Indian **cotton textiles** and **muslin** from Dhaka were famous across the world.",
            "**Silk** was woven in Varanasi, and **Bidri ware** – metal objects inlaid with silver – was made in **Bidar**.",
            "Spices such as **pepper** were in great demand in Europe and West Asia."
          ]
        },
        {
          heading: "Guilds and Trade Finance",
          points: [
            "Craftspersons and traders organised themselves into **guilds**, called **shrenis** in ancient texts. Guilds set standards of quality, trained apprentices and regulated prices.",
            "Merchants used **hundis**, written orders to pay money, to send money from one city to another without carrying coins over long and dangerous roads."
          ]
        }
      ],
      formulas: [
        "Shreni – a guild of craftspersons or traders",
        "Hundi – a written order that let traders send money safely between towns",
        "Surat – a major port on the river Tapti in Gujarat"
      ],
      terms: [
        { term: "Guild", meaning: "An association of craftspersons or traders that protected their interests and set standards." },
        { term: "Apprentice", meaning: "A young person who learnt a craft by working under a skilled master." },
        { term: "Hundi", meaning: "A written order used by traders to transfer money from one place to another." },
        { term: "Port", meaning: "A harbour town where ships load and unload goods." },
        { term: "Bidri ware", meaning: "Metal objects, usually of zinc and copper, decorated with silver inlay, made in Bidar." }
      ],
      qa: [
        {
          q: "Why did craftspersons form guilds?",
          a: "Guilds protected the interests of craftspersons, maintained the quality of their goods, trained apprentices and regulated prices and wages."
        },
        {
          q: "What was a hundi and how was it useful?",
          a: "A hundi was a written order to pay money. A merchant could give money to a banker in one city and receive it in another, so he did not have to carry coins on long and risky journeys."
        }
      ],
      quiz: [
        {
          q: "Surat, a famous port, is located on which river?",
          options: ["Ganga", "Tapti", "Kaveri", "Yamuna"],
          answer: 1,
          explain: "**Surat** is on the river **Tapti** in Gujarat."
        },
        {
          q: "Bidri ware, a metal craft with silver inlay, is associated with which town?",
          options: ["Varanasi", "Dhaka", "Kanchipuram", "Bidar"],
          answer: 3,
          explain: "**Bidri ware** is made in **Bidar** in Karnataka. Its designs are inlaid with silver."
        },
        {
          q: "Which of these was a major temple town in Tamil Nadu?",
          options: ["Madurai", "Bidar", "Surat", "Dhaka"],
          answer: 0,
          explain: "**Madurai** is famous for the Meenakshi temple and was a major centre of trade and religion."
        },
        {
          q: "What was a hundi used for?",
          options: ["Building forts", "Measuring land", "Sending money without carrying coins", "Recording ship arrivals"],
          answer: 2,
          explain: "A **hundi** was a written order to pay money, which made trade over long distances safer."
        },
        {
          q: "What was the main purpose of a guild?",
          options: ["To fight wars for the king", "To protect craftspersons and set standards of quality", "To collect land revenue", "To build forts"],
          answer: 1,
          explain: "Guilds protected craftspersons, set standards of quality, trained apprentices and regulated prices."
        }
      ]
    },
    {
      id: "devotional-paths",
      title: "Devotional Paths to the Divine",
      section: "History",
      summary: "How bhakti and Sufi saints taught love and devotion to God, challenged rituals and caste distinctions, and used local languages to reach ordinary people.",
      notes: [
        {
          heading: "The Bhakti Tradition",
          points: [
            "From around the **6th century**, **bhakti** saints taught that personal love and devotion to God mattered more than rituals and sacrifices.",
            "The **Alvars** (devotees of Vishnu) and the **Nayanars** (devotees of Shiva) composed Tamil hymns that were sung in temples.",
            "**Basavanna** in 12th-century Karnataka founded the Virashaiva movement, which rejected caste distinctions."
          ]
        },
        {
          heading: "Saints of the North",
          points: [
            "**Kabir**, a weaver from Varanasi, taught that God is one, and criticised empty rituals and religious divisions.",
            "**Mirabai**, a Rajput princess, composed devotional songs in praise of **Krishna**.",
            "**Guru Nanak** (1469–1539) founded **Sikhism**. He taught belief in one God, equality, honest work and sharing with others in a community kitchen, or langar."
          ]
        },
        {
          heading: "Sufi Saints",
          points: [
            "Sufi saints taught love of God and service to all people. **Moinuddin Chishti** is remembered at his dargah in **Ajmer**, and **Nizamuddin Auliya** at his dargah in Delhi.",
            "Their shrines were visited by people of many faiths. Devotional music called **qawwali** was often sung there."
          ]
        },
        {
          heading: "Common Ideas",
          points: [
            "Both bhakti and Sufi traditions stressed love of God, equality and simple living.",
            "Many saints used local languages, so their teachings reached ordinary people who could not read Sanskrit or Persian."
          ]
        }
      ],
      formulas: [
        "c. 6th–9th century – Alvars and Nayanars compose Tamil hymns",
        "12th century – Basavanna and the Virashaiva movement in Karnataka",
        "1469–1539 – Guru Nanak, founder of Sikhism",
        "Ajmer – dargah of the Sufi saint Moinuddin Chishti"
      ],
      terms: [
        { term: "Bhakti", meaning: "Devotion to God through love and prayer, rather than through rituals." },
        { term: "Sufi", meaning: "A mystic who seeks a direct and loving experience of God." },
        { term: "Dargah", meaning: "The shrine of a Sufi saint." },
        { term: "Alvar", meaning: "A Tamil poet-saint who was devoted to Vishnu." },
        { term: "Qawwali", meaning: "Devotional music sung at Sufi shrines." },
        { term: "Langar", meaning: "A community kitchen where everyone sits together and eats the same food, started in Sikhism." }
      ],
      qa: [
        {
          q: "What did the bhakti saints teach?",
          a: "They taught that personal devotion and love of God mattered more than rituals and sacrifices, and that all people were equal before God, regardless of caste. Many composed songs in local languages."
        },
        {
          q: "Who were Kabir and Guru Nanak, and what did they teach?",
          a: "Kabir, a weaver from Varanasi, taught that God is one and criticised empty rituals. Guru Nanak founded Sikhism and taught belief in one God, equality, honest work and sharing with others."
        }
      ],
      quiz: [
        {
          q: "Which saints composed Tamil hymns devoted to Vishnu?",
          options: ["Nayanars", "Alvars", "Chishtis", "Qalandars"],
          answer: 1,
          explain: "The **Alvars** were devotees of Vishnu, and their Tamil hymns are still sung in temples."
        },
        {
          q: "The dargah of Moinuddin Chishti is in which city?",
          options: ["Delhi", "Ajmer", "Pakpattan", "Varanasi"],
          answer: 1,
          explain: "The shrine of **Moinuddin Chishti** is at **Ajmer** in Rajasthan."
        },
        {
          q: "Which saint from Karnataka founded the Virashaiva movement?",
          options: ["Basavanna", "Tukaram", "Chaitanya", "Namdev"],
          answer: 0,
          explain: "**Basavanna** of 12th-century Karnataka founded the Virashaiva movement, which rejected caste distinctions."
        },
        {
          q: "Guru Nanak founded which religion?",
          options: ["Buddhism", "Sikhism", "Jainism", "Vaishnavism"],
          answer: 1,
          explain: "**Guru Nanak** (1469–1539) founded **Sikhism**."
        },
        {
          q: "Mirabai, a Rajput princess, composed devotional songs in praise of which god?",
          options: ["Shiva", "Rama", "Durga", "Krishna"],
          answer: 3,
          explain: "**Mirabai** wrote songs of devotion to **Krishna**, which are still sung today."
        }
      ]
    },
    {
      id: "eighteenth-century",
      title: "Eighteenth-Century Political Formations",
      section: "History",
      summary: "How the Mughal Empire weakened after 1707 and how new kingdoms such as Bengal, Hyderabad, Awadh, the Marathas, the Sikhs and Mysore rose to power.",
      notes: [
        {
          heading: "Decline of the Mughal Empire",
          points: [
            "After **Aurangzeb** died in **1707**, succession disputes and revolts weakened the empire.",
            "The invasion of **Nadir Shah** in **1739**, who attacked Delhi and carried away its treasures, showed how weak the empire had become.",
            "Provincial governors, called subedars or nawabs, became independent rulers of their regions."
          ]
        },
        {
          heading: "New Kingdoms",
          points: [
            "**Bengal** under **Murshid Quli Khan**, **Hyderabad** under **Asaf Jah** (Nizam-ul-Mulk) and **Awadh** became largely independent.",
            "In 1757, the **Battle of Plassey** was won by the East India Company under **Robert Clive** against the Nawab of Bengal, and became a turning point in the history of India."
          ]
        },
        {
          heading: "The Marathas and the Sikhs",
          points: [
            "**Shivaji** was crowned in **1674** and founded a Maratha kingdom. Later, the **Peshwas** became the real leaders of the Maratha confederacy.",
            "The Marathas were defeated by **Ahmad Shah Abdali** at the **Third Battle of Panipat** in **1761**.",
            "**Ranjit Singh** united the Sikh misls of the Punjab and became Maharaja in **1801**, with Lahore as his capital."
          ]
        },
        {
          heading: "Mysore",
          points: [
            "**Haidar Ali** and his son **Tipu Sultan** built a strong army and fought several wars against the British.",
            "Tipu Sultan was killed in **1799** at the Battle of Seringapatam, and Mysore came under British control."
          ]
        }
      ],
      formulas: [
        "1707 – Death of Aurangzeb",
        "1724 – Asaf Jah founds the state of Hyderabad",
        "1757 – Battle of Plassey",
        "1761 – Third Battle of Panipat",
        "1801 – Ranjit Singh becomes Maharaja of Punjab"
      ],
      terms: [
        { term: "Successor states", meaning: "New kingdoms that rose on the ruins of the Mughal Empire." },
        { term: "Peshwa", meaning: "The prime minister of the Maratha kingdom, who later became the real leader of the Marathas." },
        { term: "Misl", meaning: "A group or confederacy of Sikh warriors in the Punjab." },
        { term: "Nawab", meaning: "A title used for a governor or ruler of a province, such as Bengal or Awadh." },
        { term: "Nizam", meaning: "A title of the ruler of Hyderabad." }
      ],
      qa: [
        {
          q: "Why did the Mughal Empire decline in the 18th century?",
          a: "Successors were weak, and there were disputes over the throne. Provincial governors became independent, and revolts and invasions such as Nadir Shah's in 1739 weakened the empire further."
        },
        {
          q: "Name two new powers that rose in the 18th century and say where they were.",
          a: "The Marathas in Maharashtra and central India, and the Sikhs in Punjab. Other new states included Bengal, Hyderabad, Awadh and Mysore."
        }
      ],
      quiz: [
        {
          q: "In which year did Aurangzeb die?",
          options: ["1707", "1757", "1526", "1674"],
          answer: 0,
          explain: "**Aurangzeb** died in **1707**, after which the Mughal Empire began to decline."
        },
        {
          q: "Which Maratha leader was crowned in 1674?",
          options: ["Baji Rao I", "Tipu Sultan", "Shivaji", "Balaji Vishwanath"],
          answer: 2,
          explain: "**Shivaji** was crowned in 1674 and founded the Maratha kingdom."
        },
        {
          q: "Ranjit Singh became Maharaja of Punjab in:",
          options: ["1757", "1801", "1761", "1724"],
          answer: 1,
          explain: "**Ranjit Singh** became Maharaja of Punjab in **1801**, with Lahore as his capital."
        },
        {
          q: "The Battle of Plassey was fought in:",
          options: ["1739", "1761", "1764", "1757"],
          answer: 3,
          explain: "The **Battle of Plassey** was fought in **1757**, and the East India Company won under Robert Clive."
        },
        {
          q: "Which ruler of Mysore fought the British and was known as the 'Tiger of Mysore'?",
          options: ["Haidar Ali", "Tipu Sultan", "Ranjit Singh", "Asaf Jah"],
          answer: 1,
          explain: "**Tipu Sultan**, the son of Haidar Ali, fought several wars against the British and was called the 'Tiger of Mysore'."
        }
      ]
    },
    // ==================================================================
    // GEOGRAPHY – Exploring Our Environment
    // ==================================================================
    {
      id: "environment",
      title: "Environment",
      section: "Geography",
      summary: "What the environment is, how its natural and human-made parts depend on each other, and what an ecosystem is.",
      notes: [
        {
          heading: "Natural and Human-Made Environment",
          points: [
            "The **environment** is everything around us that affects living things. It has **natural** and **human-made** components.",
            "Natural components include land, water, air, plants and animals. Human-made components include houses, roads, bridges and dams.",
            "Humans depend on the environment for food, water, air and materials, and change it through farming, building and industry."
          ]
        },
        {
          heading: "Biotic and Abiotic Components",
          points: [
            "**Biotic** components are living things, such as plants, animals, fungi and bacteria.",
            "**Abiotic** components are non-living things, such as air, water, soil, sunlight and temperature."
          ]
        },
        {
          heading: "Ecosystems",
          points: [
            "An **ecosystem** is a community of living things interacting with each other and with their non-living surroundings.",
            "A pond, a forest and a desert are all examples of ecosystems. In a pond, fish, plants, water and sunlight depend on one another."
          ]
        },
        {
          heading: "Protecting the Environment",
          points: [
            "We can **reduce, reuse and recycle** materials, save water and electricity, and plant trees to protect the environment.",
            "**World Environment Day** is celebrated on **5 June** every year to create awareness about the environment."
          ]
        }
      ],
      formulas: [
        "Environment = natural components + human-made components",
        "Biotic = living things; Abiotic = non-living things",
        "5 June – World Environment Day"
      ],
      terms: [
        { term: "Environment", meaning: "The surroundings in which living things live, including air, water, land, plants, animals and people." },
        { term: "Biotic", meaning: "Living components of the environment." },
        { term: "Abiotic", meaning: "Non-living components of the environment." },
        { term: "Ecosystem", meaning: "A community of living things and their non-living surroundings, which interact with each other." },
        { term: "Habitat", meaning: "The place where a plant or animal naturally lives." }
      ],
      qa: [
        {
          q: "Give two examples each of natural and human-made components of the environment.",
          a: "Natural components: rivers, mountains, forests and air. Human-made components: roads, bridges, dams and houses."
        },
        {
          q: "What is an ecosystem? Give an example.",
          a: "An ecosystem is a community of living things and their non-living surroundings, which interact with each other. A pond is an example, where fish, plants, algae, water, soil and sunlight are all connected."
        }
      ],
      quiz: [
        {
          q: "Which of these is a biotic component of the environment?",
          options: ["Water", "Soil", "Sunlight", "Mushrooms"],
          answer: 3,
          explain: "**Mushrooms** are living things, so they are biotic. Water, soil and sunlight are non-living, or abiotic."
        },
        {
          q: "Which of these is a human-made component of the environment?",
          options: ["A forest", "A river", "A bridge", "A mountain"],
          answer: 2,
          explain: "A **bridge** is built by people, so it is human-made. Forests, rivers and mountains are natural."
        },
        {
          q: "An ecosystem consists of:",
          options: ["Only the living things", "Only plants and animals", "Living things and their non-living surroundings", "Only the non-living things"],
          answer: 2,
          explain: "An ecosystem is made of **living things and their non-living surroundings**, which interact with each other."
        },
        {
          q: "World Environment Day is celebrated on:",
          options: ["22 April", "5 June", "15 August", "1 May"],
          answer: 1,
          explain: "**World Environment Day** is celebrated on **5 June** every year."
        },
        {
          q: "Which of these is an abiotic component?",
          options: ["Air", "Bacteria", "Fish", "Trees"],
          answer: 0,
          explain: "**Air** is non-living, so it is an abiotic component. Bacteria, fish and trees are living, so they are biotic."
        }
      ]
    },
    {
      id: "inside-our-earth",
      title: "Inside Our Earth",
      section: "Geography",
      summary: "The three main layers of the Earth, the types of rocks found in its crust, and how they are formed.",
      notes: [
        {
          heading: "Layers of the Earth",
          points: [
            "The Earth has three main layers: the **crust**, the **mantle** and the **core**.",
            "Temperature and pressure increase as we go deeper into the Earth."
          ]
        },
        {
          heading: "Crust and Mantle",
          points: [
            "The **crust** is the thin outer layer on which we live. It is about 30 to 50 km thick under the continents and about 5 to 10 km thick under the oceans.",
            "The **mantle** lies below the crust. It is the thickest layer, and is made of hot, partly melted rock."
          ]
        },
        {
          heading: "The Core",
          points: [
            "The **core** is at the centre of the Earth and is made mostly of iron and nickel.",
            "The **outer core** is liquid, while the **inner core** is solid because of the very high pressure at the centre."
          ]
        },
        {
          heading: "Rocks and Their Types",
          points: [
            "**Igneous rocks** are formed when hot molten magma or lava cools and becomes solid.",
            "**Sedimentary rocks** are formed when layers of sand, mud and pebbles are pressed and cemented together over a long time.",
            "**Metamorphic rocks** are formed when existing rocks change because of great heat and pressure inside the Earth."
          ]
        }
      ],
      formulas: [
        "Crust – thinnest layer; Mantle – thickest layer; Core – innermost layer",
        "Igneous – from cooled magma or lava",
        "Sedimentary – from layers of sediment; Metamorphic – changed by heat and pressure"
      ],
      terms: [
        { term: "Magma", meaning: "Hot, molten rock below the Earth's surface." },
        { term: "Lava", meaning: "Magma that reaches the Earth's surface through a volcano and cools." },
        { term: "Mineral", meaning: "A natural substance with a fixed chemical composition, found in rocks." },
        { term: "Sediment", meaning: "Small particles of sand, mud or rock carried and deposited by water, wind or ice." },
        { term: "Igneous rock", meaning: "A rock formed by the cooling and hardening of magma or lava." }
      ],
      qa: [
        {
          q: "Describe the three layers of the Earth.",
          a: "The **crust** is the thin outer layer of rock on which we live. The **mantle** is the thick layer of hot, partly melted rock below it. The **core** is at the centre, made of iron and nickel; its outer part is liquid and its inner part is solid."
        },
        {
          q: "How are sedimentary rocks formed?",
          a: "Sand, mud and small pieces of rock are carried by water, wind or ice and deposited in layers. Over a long time, the layers are pressed and cemented together into rock."
        }
      ],
      quiz: [
        {
          q: "Which is the thinnest layer of the Earth?",
          options: ["Core", "Mantle", "Crust", "Magma"],
          answer: 2,
          explain: "The **crust** is the thinnest layer. The mantle is the thickest layer of the Earth."
        },
        {
          q: "The outer core of the Earth is:",
          options: ["Solid iron", "Liquid iron and nickel", "Solid rock", "Gas"],
          answer: 1,
          explain: "The **outer core** is liquid iron and nickel. The inner core is solid because of the very high pressure."
        },
        {
          q: "Which type of rock is formed when existing rocks change because of heat and pressure?",
          options: ["Igneous", "Sedimentary", "Metamorphic", "Volcanic"],
          answer: 2,
          explain: "**Metamorphic** rocks are formed when existing rocks are changed by great heat and pressure inside the Earth."
        },
        {
          q: "Igneous rocks are formed from:",
          options: ["Layers of sediments", "Changed rocks", "Dead plants", "Cooled magma or lava"],
          answer: 3,
          explain: "**Igneous rocks** form when hot magma or lava cools and hardens."
        },
        {
          q: "Which layer of the Earth is the thickest?",
          options: ["Mantle", "Crust", "Outer core", "Inner core"],
          answer: 0,
          explain: "The **mantle** is the thickest layer, lying between the crust and the core."
        }
      ]
    },
    {
      id: "our-changing-earth",
      title: "Our Changing Earth",
      section: "Geography",
      summary: "How the Earth's crust is broken into moving plates, how mountains, earthquakes and volcanoes are linked to them, and how weathering and erosion reshape the land.",
      notes: [
        {
          heading: "Moving Plates",
          points: [
            "The Earth's crust is broken into large pieces called **plates**. These plates move very slowly over the mantle.",
            "Most earthquakes and volcanoes happen where plates meet."
          ]
        },
        {
          heading: "Continental Drift",
          points: [
            "In **1912**, the German scientist **Alfred Wegener** suggested that all the continents were once joined together in a single landmass called **Pangaea**.",
            "Over millions of years, the continents have drifted apart and are still moving."
          ]
        },
        {
          heading: "How the Himalayas Were Formed",
          points: [
            "The **Indian plate** moved north and collided with the **Eurasian plate**. The land between them was pushed upwards.",
            "This collision formed the **Himalayas**, which are still rising by a few centimetres each year."
          ]
        },
        {
          heading: "Weathering and Erosion",
          points: [
            "**Weathering** is the breaking of rocks into smaller pieces by wind, water, ice and changes in temperature.",
            "**Erosion** is the removal and carrying away of the broken pieces by wind, water, ice or glaciers."
          ]
        }
      ],
      formulas: [
        "1912 – Alfred Wegener proposes continental drift",
        "Pangaea – a single landmass from which the continents drifted apart",
        "Himalayas – formed by the collision of the Indian and Eurasian plates"
      ],
      terms: [
        { term: "Plate", meaning: "A large, slowly moving piece of the Earth's crust." },
        { term: "Continental drift", meaning: "The slow movement of continents across the Earth's surface over millions of years." },
        { term: "Weathering", meaning: "The breaking of rocks into smaller pieces in one place." },
        { term: "Erosion", meaning: "The carrying away of rock and soil by wind, water, ice or glaciers." },
        { term: "Epicentre", meaning: "The point on the Earth's surface directly above the place where an earthquake starts." }
      ],
      qa: [
        {
          q: "Explain how the Himalayas were formed.",
          a: "The Indian plate moved northwards and collided with the Eurasian plate. The land between them was pushed up into folds, and this uplift formed the Himalayas, which are still rising."
        },
        {
          q: "What is the difference between weathering and erosion?",
          a: "Weathering breaks rocks into smaller pieces where they are. Erosion moves these broken pieces away, by wind, water, ice or glaciers."
        }
      ],
      quiz: [
        {
          q: "Who proposed the theory of continental drift?",
          options: ["Charles Darwin", "Isaac Newton", "Alfred Wegener", "Albert Einstein"],
          answer: 2,
          explain: "The German scientist **Alfred Wegener** proposed continental drift in 1912."
        },
        {
          q: "Which mountain range was formed by the collision of the Indian plate with the Eurasian plate?",
          options: ["Western Ghats", "Aravallis", "Vindhyas", "Himalayas"],
          answer: 3,
          explain: "The **Himalayas** were formed when the Indian plate collided with the Eurasian plate."
        },
        {
          q: "The breaking of rocks into smaller pieces by wind, water and temperature changes is called:",
          options: ["Erosion", "Weathering", "Deposition", "Sedimentation"],
          answer: 1,
          explain: "**Weathering** breaks rocks where they are. Erosion moves the broken material away."
        },
        {
          q: "The removal and carrying away of broken rock material by wind, water or ice is called:",
          options: ["Erosion", "Weathering", "Magma", "Pangaea"],
          answer: 0,
          explain: "**Erosion** carries broken rock material away from its original place."
        },
        {
          q: "Most earthquakes and volcanoes occur:",
          options: ["In the middle of deserts", "Where the Earth's plates meet", "Only on the ocean floor", "Only in mountains"],
          answer: 1,
          explain: "Most earthquakes and volcanoes occur where the Earth's **plates meet**."
        }
      ]
    },
    {
      id: "air",
      title: "Air",
      section: "Geography",
      summary: "The gases that make up the air, the layers of the atmosphere, and how weather, air pressure and humidity affect our daily lives.",
      notes: [
        {
          heading: "What Air Is Made Of",
          points: [
            "Air is a mixture of gases. It contains about **78% nitrogen** and **21% oxygen**.",
            "It also contains small amounts of **argon**, **carbon dioxide** (CO₂) and water vapour."
          ]
        },
        {
          heading: "Layers of the Atmosphere",
          points: [
            "The **troposphere** is the layer closest to the Earth, where almost all weather occurs.",
            "The **stratosphere** contains the **ozone layer**, which absorbs harmful ultraviolet rays from the Sun.",
            "Above it lie the mesosphere, thermosphere and exosphere."
          ]
        },
        {
          heading: "Weather and Climate",
          points: [
            "**Weather** is the condition of the air at a place over a short period, such as a day.",
            "**Climate** is the average weather of a place over a long period, usually 30 years or more."
          ]
        },
        {
          heading: "Air Pressure, Winds and Humidity",
          points: [
            "**Air pressure** is the force of the air on a surface. It is higher near sea level and decreases with height.",
            "Winds blow from **high-pressure** areas towards **low-pressure** areas.",
            "**Humidity** is the amount of water vapour in the air. When warm moist air rises and cools, the vapour condenses into clouds and rain."
          ]
        }
      ],
      formulas: [
        "Nitrogen ≈ 78%, Oxygen ≈ 21% of the air",
        "Ozone layer – in the stratosphere",
        "Winds blow from high pressure to low pressure"
      ],
      terms: [
        { term: "Atmosphere", meaning: "The layer of gases surrounding the Earth." },
        { term: "Troposphere", meaning: "The lowest layer of the atmosphere, where weather occurs." },
        { term: "Ozone layer", meaning: "A layer in the stratosphere that absorbs most of the Sun's harmful ultraviolet rays." },
        { term: "Humidity", meaning: "The amount of water vapour present in the air." },
        { term: "Air pressure", meaning: "The force exerted by the weight of air on a surface." }
      ],
      qa: [
        {
          q: "Why is the ozone layer important?",
          a: "It absorbs most of the harmful ultraviolet rays from the Sun and protects living things from their effects. It lies in the stratosphere."
        },
        {
          q: "What is the difference between weather and climate?",
          a: "Weather is the condition of the air at a place for a short time, such as a day. Climate is the average weather of a place over a long period of years."
        }
      ],
      quiz: [
        {
          q: "The largest gas in the air is:",
          options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Argon"],
          answer: 1,
          explain: "**Nitrogen** makes up about 78% of the air, and oxygen makes up about 21%."
        },
        {
          q: "In which layer of the atmosphere does most weather occur?",
          options: ["Stratosphere", "Exosphere", "Troposphere", "Mesosphere"],
          answer: 2,
          explain: "Almost all weather happens in the **troposphere**, the layer closest to the Earth."
        },
        {
          q: "The ozone layer is found in the:",
          options: ["Stratosphere", "Troposphere", "Thermosphere", "Exosphere"],
          answer: 0,
          explain: "The **ozone layer** lies in the **stratosphere**, and it absorbs harmful ultraviolet rays."
        },
        {
          q: "Winds blow from:",
          options: ["Low pressure to high pressure", "Cold areas to hot areas only", "High pressure to low pressure", "Ocean to ocean"],
          answer: 2,
          explain: "Winds blow from **high-pressure** areas towards **low-pressure** areas."
        },
        {
          q: "The amount of water vapour present in the air is called:",
          options: ["Humidity", "Pressure", "Climate", "Erosion"],
          answer: 0,
          explain: "The amount of water vapour in the air is called **humidity**."
        }
      ]
    },
    {
      id: "water",
      title: "Water",
      section: "Geography",
      summary: "How water is distributed on the Earth, how the water cycle moves it between the oceans, air and land, and what causes tides.",
      notes: [
        {
          heading: "Water on the Earth",
          points: [
            "About **71%** of the Earth's surface is covered by water, mostly in oceans and seas.",
            "Most of this water is salty. Only a small part is fresh water, and much of it is frozen in glaciers and ice caps."
          ]
        },
        {
          heading: "The Water Cycle",
          points: [
            "The Sun heats water and it **evaporates** into water vapour.",
            "The vapour rises, cools and **condenses** into clouds.",
            "Water falls back as **precipitation** (rain, snow or hail), and flows into rivers and oceans or seeps into the ground."
          ]
        },
        {
          heading: "Oceans and Seas",
          points: [
            "The **Pacific Ocean** is the largest ocean in the world, followed by the Atlantic, the Indian, the Southern and the Arctic oceans.",
            "Sea water is salty. On average it contains about **3.5%** dissolved salts."
          ]
        },
        {
          heading: "Tides",
          points: [
            "**Tides** are the regular rise and fall of sea level.",
            "They are caused mainly by the pull of the **Moon's gravity** on the water of the oceans."
          ]
        }
      ],
      formulas: [
        "About 71% of the Earth's surface is covered by water",
        "Pacific Ocean – the largest ocean",
        "Salinity of sea water ≈ 3.5%"
      ],
      terms: [
        { term: "Evaporation", meaning: "The change of water from liquid to vapour by heat from the Sun." },
        { term: "Condensation", meaning: "The change of water vapour to liquid, forming clouds or dew." },
        { term: "Precipitation", meaning: "Water that falls from clouds as rain, snow, sleet or hail." },
        { term: "Tide", meaning: "The regular rise and fall of the sea level." },
        { term: "Salinity", meaning: "The amount of dissolved salt in water." }
      ],
      qa: [
        {
          q: "Describe the water cycle in four steps.",
          a: "(1) **Evaporation**: the Sun heats water and it turns into vapour. (2) **Condensation**: the vapour rises, cools and forms clouds. (3) **Precipitation**: water falls as rain, snow or hail. (4) **Collection**: the water flows into rivers and oceans or seeps into the ground."
        },
        {
          q: "What causes tides?",
          a: "Tides are caused mainly by the gravitational pull of the Moon on the water of the oceans. The Sun also pulls on the water, but its effect is smaller."
        }
      ],
      quiz: [
        {
          q: "The process by which water changes from liquid to vapour is called:",
          options: ["Condensation", "Precipitation", "Evaporation", "Infiltration"],
          answer: 2,
          explain: "**Evaporation** turns liquid water into vapour, usually when heated by the Sun."
        },
        {
          q: "The largest ocean in the world is the:",
          options: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
          answer: 0,
          explain: "The **Pacific Ocean** is the largest and deepest ocean on Earth."
        },
        {
          q: "Rain, snow and hail are all forms of:",
          options: ["Condensation", "Precipitation", "Evaporation", "Erosion"],
          answer: 1,
          explain: "Water that falls from clouds is called **precipitation**."
        },
        {
          q: "About what percentage of the Earth's surface is covered by water?",
          options: ["50%", "71%", "29%", "90%"],
          answer: 1,
          explain: "About **71%** of the Earth's surface is covered by water."
        },
        {
          q: "Tides are mainly caused by:",
          options: ["Strong winds", "Volcanic eruptions", "The heat of the Sun", "The pull of the Moon's gravity"],
          answer: 3,
          explain: "Tides are caused mainly by the **gravitational pull of the Moon** on the oceans."
        }
      ]
    },
    {
      id: "natural-vegetation",
      title: "Natural Vegetation and Wildlife",
      section: "Geography",
      summary: "The types of natural vegetation found in India, how climate affects them, and why forests and wildlife need protection.",
      notes: [
        {
          heading: "What Is Natural Vegetation?",
          points: [
            "**Natural vegetation** is the plant cover that grows in an area without human help.",
            "It depends on the climate, soil and water of the area."
          ]
        },
        {
          heading: "Types of Forests",
          points: [
            "**Tropical evergreen** forests grow in very wet regions such as the Western Ghats and the north-east. Their trees keep their leaves all year.",
            "**Tropical deciduous** forests shed their leaves in the dry season. They cover most of the forest area of India.",
            "**Thorn forests** and scrub grow in dry regions such as Rajasthan.",
            "**Montane** forests grow on mountain slopes, with different types of trees at different heights."
          ]
        },
        {
          heading: "Mangroves",
          points: [
            "**Mangroves** grow in coastal areas and river deltas, where salt water and fresh water mix.",
            "The **Sundarbans**, in the Ganga-Brahmaputra delta, is one of the largest mangrove forests in the world."
          ]
        },
        {
          heading: "Protecting Wildlife",
          points: [
            "The **Wildlife (Protection) Act** was passed in **1972** to protect wild animals and plants.",
            "**Project Tiger** was launched in **1973** to save the Bengal tiger and its habitat.",
            "Forests and wildlife are important because they keep the ecosystem balanced and provide us with oxygen, water and resources."
          ]
        }
      ],
      formulas: [
        "1972 – Wildlife (Protection) Act is passed",
        "1973 – Project Tiger is launched",
        "Sundarbans – a mangrove forest in the Ganga-Brahmaputra delta"
      ],
      terms: [
        { term: "Natural vegetation", meaning: "Plants that grow naturally in an area without human help." },
        { term: "Evergreen", meaning: "A tree or forest that keeps its leaves throughout the year." },
        { term: "Deciduous", meaning: "A tree or forest that sheds its leaves in one season, usually the dry season." },
        { term: "Mangrove", meaning: "A tree that grows in salty coastal water and has roots above the water." },
        { term: "Wildlife sanctuary", meaning: "An area set aside where wild animals are protected and not hunted." }
      ],
      qa: [
        {
          q: "What is the difference between evergreen and deciduous forests?",
          a: "Evergreen forests keep their leaves all year and grow in areas of very heavy rainfall. Deciduous forests shed their leaves during the dry season and grow where rainfall is moderate."
        },
        {
          q: "Why is it important to conserve forests and wildlife?",
          a: "Forests provide oxygen, water and habitats for animals and protect the soil. Wild animals keep the food chain balanced. Protecting them maintains the ecosystem for future generations."
        }
      ],
      quiz: [
        {
          q: "Which type of forest sheds its leaves in the dry season?",
          options: ["Tropical evergreen", "Tropical deciduous", "Mangrove", "Montane"],
          answer: 1,
          explain: "**Tropical deciduous** forests shed their leaves in the dry season and cover most of India's forest area."
        },
        {
          q: "The Sundarbans are a forest of which type?",
          options: ["Thorn", "Montane", "Evergreen", "Mangrove"],
          answer: 3,
          explain: "The **Sundarbans** are a **mangrove** forest in the Ganga-Brahmaputra delta."
        },
        {
          q: "In which year was Project Tiger launched?",
          options: ["1947", "1972", "1973", "1985"],
          answer: 2,
          explain: "**Project Tiger** was launched in **1973** to protect the Bengal tiger."
        },
        {
          q: "Which region is known for thorn forests?",
          options: ["Western Ghats", "Rajasthan", "Sundarbans", "Assam hills"],
          answer: 1,
          explain: "**Thorn forests** grow in dry regions such as **Rajasthan**."
        },
        {
          q: "Which Act was passed in 1972 to protect wild animals and plants?",
          options: ["Wildlife (Protection) Act", "Forest Conservation Act", "Environment Protection Act", "Factories Act"],
          answer: 0,
          explain: "The **Wildlife (Protection) Act** of 1972 protects wild animals and plants in India."
        }
      ]
    },

    // ==================================================================
    // SOCIAL AND POLITICAL LIFE
    // ==================================================================
    {
      id: "on-equality",
      title: "On Equality",
      section: "Social and Political Life",
      summary: "How the Constitution of India promises equality, which articles protect it, and why special help is sometimes given to disadvantaged groups.",
      notes: [
        {
          heading: "Equality in the Constitution",
          points: [
            "The **Constitution of India** came into force on **26 January 1950**.",
            "Its **Preamble** promises **justice**, **liberty**, **equality** and **fraternity** to all citizens."
          ]
        },
        {
          heading: "Articles on Equality",
          points: [
            "**Article 14** guarantees equality before the law and equal protection of the laws to everyone.",
            "**Article 15** says the state shall not discriminate against any citizen on grounds of religion, race, caste, sex or place of birth.",
            "**Article 16** gives equal opportunity in matters of public employment."
          ]
        },
        {
          heading: "Abolition of Untouchability",
          points: [
            "**Article 17** abolishes untouchability and forbids its practice in any form.",
            "Untouchability is a crime under the law, and people who practise it can be punished."
          ]
        },
        {
          heading: "Equality in Practice",
          points: [
            "Equality means that everyone should be treated fairly, but the law also makes special provisions for disadvantaged groups so that they can catch up.",
            "The **Equal Remuneration Act, 1976** provides equal pay for men and women doing the same work."
          ]
        }
      ],
      formulas: [
        "26 January 1950 – The Constitution of India comes into force",
        "Article 14 – Equality before the law",
        "Article 17 – Untouchability is abolished"
      ],
      terms: [
        { term: "Discrimination", meaning: "Unfair treatment of a person or group because of who they are, such as their caste, religion or sex." },
        { term: "Equality before law", meaning: "The principle that every person is subject to the same laws and no one is above them." },
        { term: "Untouchability", meaning: "The practice of treating certain people as impure, which the Constitution has abolished." },
        { term: "Fraternity", meaning: "A feeling of brotherhood and unity among all people." },
        { term: "Preamble", meaning: "The introduction to the Constitution, which states its main aims and values." }
      ],
      qa: [
        {
          q: "What does Article 15 of the Constitution say?",
          a: "It says the state shall not discriminate against any citizen on grounds of religion, race, caste, sex or place of birth. It also allows special provisions for women and children."
        },
        {
          q: "Why does the law make special provisions for some disadvantaged groups?",
          a: "Some groups have faced discrimination for a long time. Special provisions help them catch up, so that they get a fair chance and real equality."
        }
      ],
      quiz: [
        {
          q: "On which date did the Constitution of India come into force?",
          options: ["15 August 1947", "26 November 1949", "26 January 1950", "2 October 1950"],
          answer: 2,
          explain: "The Constitution came into force on **26 January 1950**. It was adopted on 26 November 1949."
        },
        {
          q: "Which Article of the Constitution abolishes untouchability?",
          options: ["Article 14", "Article 17", "Article 19", "Article 21"],
          answer: 1,
          explain: "**Article 17** abolishes untouchability in any form."
        },
        {
          q: "Which law provides equal pay for men and women doing the same work?",
          options: ["Equal Remuneration Act, 1976", "Factories Act, 1948", "Right to Information Act, 2005", "Forest Conservation Act, 1980"],
          answer: 0,
          explain: "The **Equal Remuneration Act, 1976** provides equal pay for equal work for men and women."
        },
        {
          q: "Which of these is a ground on which Article 15 prohibits discrimination?",
          options: ["Income", "Height", "Place of birth", "Education"],
          answer: 2,
          explain: "Article 15 prohibits discrimination on grounds of religion, race, caste, sex or **place of birth**."
        },
        {
          q: "The Preamble of the Constitution promises:",
          options: ["Unlimited powers to the Prime Minister", "Rights of the monarch", "Military rule", "Justice, liberty, equality and fraternity"],
          answer: 3,
          explain: "The Preamble promises **justice, liberty, equality and fraternity** to all citizens."
        }
      ]
    },
    {
      id: "state-government",
      title: "How the State Government Works",
      section: "Social and Political Life",
      summary: "The structure of a state government, including the Governor, the Chief Minister, the legislature, and how powers are shared between the Union and the states.",
      notes: [
        {
          heading: "Three Levels of Government",
          points: [
            "India has the **Union (central) government**, **state governments** and **local governments** such as panchayats and municipalities.",
            "Each state has its own government, which looks after many subjects of daily life."
          ]
        },
        {
          heading: "Governor and Chief Minister",
          points: [
            "The **Governor** is the constitutional head of the state and is appointed by the President.",
            "The **Chief Minister** is the real head of the state government. He or she leads the council of ministers."
          ]
        },
        {
          heading: "The State Legislature",
          points: [
            "The state **legislature** makes laws for the state.",
            "Most states have one house, the **Vidhan Sabha** (Legislative Assembly). Some states also have a second house, the **Vidhan Parishad** (Legislative Council)."
          ]
        },
        {
          heading: "Sharing Powers",
          points: [
            "The Constitution divides subjects into the **Union List**, the **State List** and the **Concurrent List**.",
            "Police, public health and agriculture are mainly state subjects. Each state also has a **High Court**."
          ]
        }
      ],
      formulas: [
        "Head of the state: Governor (constitutional head); Head of the government: Chief Minister",
        "Vidhan Sabha – the Legislative Assembly; Vidhan Parishad – the Legislative Council",
        "Three lists of subjects: Union, State and Concurrent"
      ],
      terms: [
        { term: "Governor", meaning: "The constitutional head of a state, appointed by the President." },
        { term: "Chief Minister", meaning: "The head of a state government, who leads the council of ministers." },
        { term: "Vidhan Sabha", meaning: "The Legislative Assembly of a state, where elected members make laws." },
        { term: "Vidhan Parishad", meaning: "The Legislative Council, the second house in some states." },
        { term: "Concurrent List", meaning: "The list of subjects on which both the Union and the state governments can make laws." }
      ],
      qa: [
        {
          q: "What is the difference between the Governor and the Chief Minister?",
          a: "The Governor is the constitutional head of the state, appointed by the President. The Chief Minister is the real head of the government. He or she is appointed by the Governor and must have the support of the majority in the Vidhan Sabha."
        },
        {
          q: "Name two subjects that are mainly under the state government.",
          a: "Police, public health, agriculture and local government are mainly state subjects."
        }
      ],
      quiz: [
        {
          q: "Who is the constitutional head of a state?",
          options: ["Chief Minister", "Governor", "Speaker", "Prime Minister"],
          answer: 1,
          explain: "The **Governor** is the constitutional head of the state."
        },
        {
          q: "Who is the real head of a state's government?",
          options: ["Chief Justice", "Governor", "Vice-President", "Chief Minister"],
          answer: 3,
          explain: "The **Chief Minister** leads the council of ministers and runs the state government."
        },
        {
          q: "The lower house of a state legislature is called:",
          options: ["Vidhan Parishad", "Vidhan Sabha", "Lok Sabha", "Rajya Sabha"],
          answer: 1,
          explain: "The **Vidhan Sabha** is the Legislative Assembly of a state. Lok Sabha and Rajya Sabha are part of the Parliament of India."
        },
        {
          q: "Which of these is a subject in the State List?",
          options: ["Defence", "Railways", "Police", "Currency"],
          answer: 2,
          explain: "**Police** is a subject in the State List. Defence, railways and currency are Union subjects."
        },
        {
          q: "Which is the highest court of a state?",
          options: ["High Court", "Supreme Court", "District Court", "Lok Adalat"],
          answer: 0,
          explain: "Each state has a **High Court**, which is the highest court in the state."
        }
      ]
    },
    {
      id: "understanding-media",
      title: "Understanding Media",
      section: "Social and Political Life",
      summary: "What the media are, the different kinds of media, how public and private media operate, and why a free press matters in a democracy.",
      notes: [
        {
          heading: "What Is Media?",
          points: [
            "**Media** are the means of communication that reach large numbers of people, such as newspapers, radio, television, films and the internet.",
            "Each medium reaches people differently: a newspaper can be read again and again, while a radio programme is heard only when it is broadcast."
          ]
        },
        {
          heading: "Kinds of Media",
          points: [
            "**Print media** include newspapers and magazines.",
            "**Electronic media** include radio and television.",
            "**Digital media** include websites, mobile apps and social media platforms."
          ]
        },
        {
          heading: "Public and Private Media",
          points: [
            "**All India Radio** and **Doordarshan** are public broadcasters run by the government, through Prasar Bharati.",
            "Most newspapers, television channels and websites are run by private companies."
          ]
        },
        {
          heading: "Media and Democracy",
          points: [
            "A free press helps citizens learn about government decisions and discuss public issues.",
            "Freedom of speech and expression is guaranteed under **Article 19(1)(a)** of the Constitution.",
            "Much of the income of the media comes from **advertisements**, so readers should check whether news is fair and accurate."
          ]
        }
      ],
      formulas: [
        "Article 19(1)(a) – freedom of speech and expression",
        "Print media – newspapers and magazines; Electronic media – radio and television",
        "All India Radio and Doordarshan – public broadcasters"
      ],
      terms: [
        { term: "Media", meaning: "The means of communication that reach large numbers of people." },
        { term: "Print media", meaning: "Media that are printed on paper, such as newspapers and magazines." },
        { term: "Digital media", meaning: "Media that are delivered through computers and phones, such as websites and social media." },
        { term: "Advertisement", meaning: "A message or announcement that promotes a product or service." },
        { term: "Freedom of the press", meaning: "The freedom of newspapers and other media to report and publish news and opinions." }
      ],
      qa: [
        {
          q: "What are the three kinds of media? Give one example of each.",
          a: "**Print** media (a newspaper), **electronic** media (television or radio) and **digital** media (a news website or social media platform)."
        },
        {
          q: "Why is a free press important in a democracy?",
          a: "A free press gives citizens information about the government and public issues. It allows people to criticise the government and take part in public discussions."
        }
      ],
      quiz: [
        {
          q: "Which of these is an example of electronic media?",
          options: ["Newspaper", "Television", "Magazine", "Poster"],
          answer: 1,
          explain: "**Television** is electronic media. Newspapers and magazines are print media."
        },
        {
          q: "Which of these is a public broadcaster run by the government of India?",
          options: ["Star Plus", "Times of India", "Doordarshan", "Hindustan Times"],
          answer: 2,
          explain: "**Doordarshan** is a public broadcaster. The other three are private companies."
        },
        {
          q: "Freedom of speech and expression is guaranteed under which Article?",
          options: ["Article 14", "Article 17", "Article 19", "Article 21"],
          answer: 2,
          explain: "**Article 19(1)(a)** guarantees freedom of speech and expression."
        },
        {
          q: "Which of these is a digital medium?",
          options: ["A radio programme", "A social media platform", "A newspaper", "A poster"],
          answer: 1,
          explain: "A **social media platform** is digital media, since it is delivered through computers and phones."
        },
        {
          q: "Where do most newspapers and TV channels get much of their income?",
          options: ["Government grants only", "Donations from readers only", "Taxes on movies", "Advertisements"],
          answer: 3,
          explain: "Much of the income of media comes from **advertisements**."
        }
      ]
    },
    {
      id: "markets-around-us",
      title: "Markets Around Us",
      section: "Social and Political Life",
      summary: "The different kinds of markets, how demand and supply decide prices, and the role of middlemen and cooperatives in buying and selling.",
      notes: [
        {
          heading: "What Is a Market?",
          points: [
            "A **market** is a place or system where buyers and sellers meet to exchange goods and services.",
            "A market can be a physical place, like a local market or a weekly haat, or an online platform."
          ]
        },
        {
          heading: "Kinds of Markets",
          points: [
            "**Local markets** sell everyday items to people living nearby.",
            "**Wholesale** markets sell goods in large quantities, usually to other traders.",
            "**Retail** shops sell goods in small quantities to consumers."
          ]
        },
        {
          heading: "Demand and Supply",
          points: [
            "**Demand** is how much buyers want to buy, and **supply** is how much sellers offer for sale.",
            "When demand is more than supply, prices rise. When supply is more than demand, prices fall."
          ]
        },
        {
          heading: "Middlemen and Cooperatives",
          points: [
            "**Middlemen** buy from producers and sell to traders, often taking a large share of the profit. This can reduce what farmers earn.",
            "A **cooperative** is an organisation where members work together to buy and sell. **Amul**, a dairy cooperative, is a well-known example."
          ]
        }
      ],
      formulas: [
        "Prices rise when demand is more than supply",
        "Wholesale – sells in bulk; Retail – sells to consumers",
        "Cooperative – members work together for fair prices"
      ],
      terms: [
        { term: "Market", meaning: "A place or system where buyers and sellers meet to exchange goods and services." },
        { term: "Wholesale", meaning: "Selling goods in large quantities, usually to retailers or other traders." },
        { term: "Retail", meaning: "Selling goods in small quantities directly to consumers." },
        { term: "Demand", meaning: "The quantity of a good that buyers want to purchase at a given price." },
        { term: "Supply", meaning: "The quantity of a good that sellers are ready to offer for sale at a given price." }
      ],
      qa: [
        {
          q: "What is the difference between wholesale and retail markets?",
          a: "Wholesale traders buy goods in large quantities from producers and sell them in bulk to retailers. Retailers sell in small quantities to consumers."
        },
        {
          q: "How do demand and supply affect prices?",
          a: "If demand is more than supply, prices rise. If supply is more than demand, prices fall."
        }
      ],
      quiz: [
        {
          q: "A weekly haat is an example of:",
          options: ["A wholesale market", "A local weekly market", "An online store", "A cooperative society"],
          answer: 1,
          explain: "A **weekly haat** is a local market that is held on a fixed day each week."
        },
        {
          q: "When demand for a good is higher than its supply, its price:",
          options: ["Falls", "Becomes zero", "Rises", "Stays the same"],
          answer: 2,
          explain: "When demand is more than supply, buyers compete for the goods, so prices **rise**."
        },
        {
          q: "Which type of trader sells goods in large quantities to other traders?",
          options: ["Retailer", "Wholesaler", "Consumer", "Labourer"],
          answer: 1,
          explain: "A **wholesaler** buys in bulk and sells in large quantities to retailers and other traders."
        },
        {
          q: "Amul is an example of:",
          options: ["A government ministry", "A private bank", "A railway station", "A cooperative"],
          answer: 3,
          explain: "**Amul** is a dairy **cooperative**, owned by its members."
        },
        {
          q: "A person who buys from farmers and sells to traders, often earning a share of the profit, is called:",
          options: ["A middleman", "A consumer", "A retailer", "A cooperative member"],
          answer: 0,
          explain: "A **middleman** stands between the producer and the trader, and often takes a share of the profit."
        }
      ]
    }
  ]
});
