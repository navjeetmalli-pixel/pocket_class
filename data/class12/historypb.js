// PSEB Class 12 History (History of the Punjab), Part A and Part B. Format: see CONTENT_GUIDE.md.
// `formulas` holds key dates and facts. Where historians differ, the notes say so.
StudyData.add(12, "historypb", {
  syllabus: {
    board: "PSEB",
    match: "textbook",
    books: ["History of the Punjab (PSEB, Class 12)"],
    note: "Follows the PSEB 2026–27 syllabus; written from the syllabus topics, not the PSEB book's own text.",
    reviewed: false
  },
  chapters: [
    // ───────────── Part A ─────────────
    {
      id: "physical-features",
      title: "Physical Features of the Punjab and their Influence on its History",
      section: "Part A",
      summary: "The land of the five rivers, its main regions and the way geography shaped Punjab's farming, its role as the gateway to India and the character of its people.",
      notes: [
        {
          heading: "Name and rivers",
          points: [
            "**Punjab** comes from the Persian words **panj** (five) and **aab** (water): the land of five rivers.",
            "The five rivers are the **Jhelum, Chenab, Ravi, Beas and Sutlej**, all tributaries of the **Indus** system.",
            "The land between two rivers is called a **doab**; for example the Bist (Jalandhar) Doab lies between the Beas and the Sutlej.",
            "The rivers brought fertile alluvial soil, so Punjab became one of the richest farming regions of the subcontinent."
          ]
        },
        {
          heading: "Natural divisions",
          points: [
            "The **north-eastern hills**: the lower Himalayas and the **Shivalik** range along the northern edge.",
            "The **central plains**, the heart of the region, watered by the rivers and later by canals.",
            "The **south-western semi-arid tract**, with less rain and sandy soil, which includes much of the Malwa region.",
            "In the Sikh period the regions were commonly spoken of as **Majha, Doaba and Malwa**."
          ]
        },
        {
          heading: "Influence on history",
          points: [
            "Punjab lay on the main land route from the **north-west**. Invaders came through passes such as the **Khyber** and the **Bolan**, so Punjab bore the first shock of almost every invasion.",
            "Fertile land and trade made the region wealthy, which also attracted invaders.",
            "Repeated fighting made its people hardy and brave, and encouraged a martial tradition.",
            "The hills and forests gave the Sikhs places of shelter and a base for guerrilla warfare in the eighteenth century.",
            "The routes also carried trade and ideas, so Punjab became a meeting place of Hindu, Muslim and later Sikh culture."
          ]
        }
      ],
      formulas: [
        "Punjab = panj (five) + aab (water)",
        "Rivers: Jhelum, Chenab, Ravi, Beas, Sutlej",
        "Main north-west passes: Khyber, Bolan (also Gomal, Khojak)"
      ],
      terms: [
        { term: "Doab", meaning: "The tract of land lying **between two rivers**." },
        { term: "Shivaliks", meaning: "The **outer Himalayan foothills** along the northern edge of the Punjab plains." },
        { term: "Khyber Pass", meaning: "The best-known **mountain pass in the north-west** through which invaders entered India." },
        { term: "Malwa", meaning: "The region of Punjab **south of the Sutlej**, largely a drier tract." },
        { term: "Alluvial soil", meaning: "Fertile soil **deposited by rivers**." }
      ],
      qa: [
        {
          q: "Why is Punjab called the land of five rivers?",
          a: "The name comes from the Persian words panj (five) and aab (water). In the old undivided Punjab the five rivers were the Jhelum, Chenab, Ravi, Beas and Sutlej, which flowed through the region before joining the Indus system."
        },
        {
          q: "How did the geography of the Punjab make it the gateway of India?",
          a: "Punjab lay on the north-west frontier, close to the passes like the Khyber and the Bolan. Armies from Central Asia and Afghanistan had to cross the Punjab plains to reach Delhi and the rest of India, so the region met the first attack of nearly every invader."
        },
        {
          q: "How did the physical features of the Punjab affect the character of its people?",
          a: "Fertile soil made the people prosperous and hard-working farmers. Constant invasions forced them to defend their land, which made them brave and martial. In the eighteenth century the Sikhs also used the hills and forests as places of refuge."
        }
      ],
      quiz: [
        {
          q: "Which of the following is NOT one of the five rivers of the Punjab?",
          options: ["Beas", "Ravi", "Ganga", "Chenab"],
          answer: 2,
          explain: "The Ganga does not belong to the Punjab river system. The five rivers are the Jhelum, Chenab, Ravi, Beas and Sutlej."
        },
        {
          q: "The word 'doab' means:",
          options: ["A mountain pass", "Land between two rivers", "A hill range", "A desert region"],
          answer: 1,
          explain: "A doab is the land lying **between two rivers**."
        },
        {
          q: "Which pass was a major entry route for invaders from the north-west?",
          options: ["Khyber Pass", "Nathu La", "Shipki La", "Palghat"],
          answer: 0,
          explain: "The **Khyber Pass** was the best-known route into India for invaders."
        },
        {
          q: "The Shivalik hills lie in which direction of the Punjab plains?",
          options: ["South", "North-east", "West", "South-west"],
          answer: 1,
          explain: "The Shivaliks form the **north-eastern** border of the plains."
        },
        {
          q: "Which feature mainly made Punjab a rich farming region?",
          options: ["Coal deposits", "Fertile alluvial soil from the rivers", "Dense tropical forests", "Volcanic soil"],
          answer: 1,
          explain: "The rivers deposit **fertile alluvial soil**, ideal for crops such as wheat."
        },
        {
          q: "The name Punjab is derived from which language?",
          options: ["Sanskrit only", "Arabic", "Persian", "Greek"],
          answer: 2,
          explain: "Punjab comes from the **Persian** words panj and aab."
        }
      ]
    },
    // ───────────── 2 ─────────────
    {
      id: "sources-of-punjab-history",
      title: "Sources of the History of the Punjab",
      section: "Part A",
      summary: "The literary, archaeological and foreign sources that historians use for the history of the Punjab and the Sikhs, and how far each can be trusted.",
      notes: [
        {
          heading: "Sikh literary sources",
          points: [
            "The **Guru Granth Sahib** (the Adi Granth compiled by Guru Arjan Dev Ji in 1604, with later additions) is the main source for the teachings of the Gurus and the religious and social life of the time.",
            "The **Vars of Bhai Gurdas** explain Sikh teachings and give early glimpses of the Gurus' lives.",
            "**Janamsakhis** are traditional life stories of Guru Nanak Dev Ji; they are valuable but mix history with devotional tradition, so they have to be used carefully.",
            "The **Dasam Granth** and the Persian letter **Zafarnama** of Guru Gobind Singh Ji throw light on his life and the conflicts of his time."
          ]
        },
        {
          heading: "Persian and other chronicles",
          points: [
            "**Khulasat-ut-Tawarikh** by Sujan Rai Bhandari (late seventeenth century) describes Punjab and its people.",
            "**Umdat-ut-Tawarikh** by Sohan Lal Suri, court historian of Maharaja Ranjit Singh, is a detailed record of his reign.",
            "**Ibratnama** by Mufti Ali-ud-Din and other Persian works give the Mughal-side view of the Sikhs.",
            "Sikh writers of the eighteenth and nineteenth centuries, such as **Rattan Singh Bhangu** (Panth Prakash), preserved the Sikh memory of the struggles of that time.",
            "Chronicles written at royal courts may flatter the ruler, and writers hostile to the Sikhs may be biased, so a historian compares several sources."
          ]
        },
        {
          heading: "Archaeological and foreign sources",
          points: [
            "**Monuments** such as gurdwaras, forts, tombs and gardens, as well as **coins** and **inscriptions**, give independent evidence of rulers, art and economy.",
            "**Hukamnamas** (letters) of the Gurus are original documents.",
            "European travellers and officials, such as **George Forster** and **Victor Jacquemont**, left accounts of the Punjab; they are useful but written by outsiders.",
            "Nineteenth-century British writers such as **J. D. Cunningham** (History of the Sikhs, 1849) and the scholar **Max Arthur Macauliffe** (The Sikh Religion) also wrote on Sikh history."
          ]
        }
      ],
      formulas: [
        "1604 – Adi Granth compiled by Guru Arjan Dev Ji",
        "Umdat-ut-Tawarikh – Sohan Lal Suri (reign of Ranjit Singh)",
        "Khulasat-ut-Tawarikh – Sujan Rai Bhandari",
        "J. D. Cunningham, History of the Sikhs – 1849"
      ],
      terms: [
        { term: "Janamsakhi", meaning: "A traditional **life story** of Guru Nanak Dev Ji." },
        { term: "Hukamnama", meaning: "A **written order or message** issued by a Guru." },
        { term: "Zafarnama", meaning: "The **Persian letter of victory** written by Guru Gobind Singh Ji to Emperor Aurangzeb." },
        { term: "Chronicle", meaning: "A **record of events** in the order in which they happened." },
        { term: "Primary source", meaning: "Evidence from the **time of the events**, such as a letter, coin or inscription." }
      ],
      qa: [
        {
          q: "Why is the Guru Granth Sahib an important source of history?",
          a: "It contains the hymns of the Sikh Gurus and of saints such as Kabir, Ravidas and Sheikh Farid. Besides spiritual teaching, it reflects the religious beliefs, caste practices, rulers and social conditions of the time."
        },
        {
          q: "What is the importance of Persian chronicles for Punjab history?",
          a: "Persian was the language of the courts, so chronicles like the Umdat-ut-Tawarikh and Khulasat-ut-Tawarikh record political events, administration and the life of rulers. Their drawback is that they often reflect the view of the court, so they must be checked against other sources."
        },
        {
          q: "Write a note on archaeological sources of Punjab history.",
          a: "Monuments such as gurdwaras, forts and tombs, as well as coins and inscriptions, are independent evidence. They help to fix the dates of rulers, show the art and building of the time, and give an idea of trade and the economy."
        }
      ],
      quiz: [
        {
          q: "Sohan Lal Suri wrote the history of the reign of:",
          options: ["Akbar", "Maharaja Ranjit Singh", "Ahmad Shah Abdali", "Banda Singh Bahadur"],
          answer: 1,
          explain: "He was the court historian of **Maharaja Ranjit Singh** and wrote the Umdat-ut-Tawarikh."
        },
        {
          q: "The Zafarnama was written by:",
          options: ["Guru Nanak Dev Ji", "Guru Arjan Dev Ji", "Guru Tegh Bahadur Ji", "Guru Gobind Singh Ji"],
          answer: 3,
          explain: "It is the Persian letter of **Guru Gobind Singh Ji** to Aurangzeb."
        },
        {
          q: "Janamsakhis are mainly stories about the life of:",
          options: ["Guru Nanak Dev Ji", "Banda Singh Bahadur", "Maharaja Ranjit Singh", "Guru Hargobind Sahib Ji"],
          answer: 0,
          explain: "The Janamsakhis are the traditional life accounts of **Guru Nanak Dev Ji**."
        },
        {
          q: "Who compiled the Adi Granth?",
          options: ["Guru Angad Dev Ji", "Guru Arjan Dev Ji", "Guru Ram Das Ji", "Bhai Gurdas Ji alone"],
          answer: 1,
          explain: "**Guru Arjan Dev Ji** compiled it in 1604; Bhai Gurdas Ji acted as scribe."
        },
        {
          q: "Which of these is an archaeological source?",
          options: ["A coin of a ruler", "A Persian chronicle", "A traveller's diary", "A Janamsakhi"],
          answer: 0,
          explain: "Coins are archaeological evidence; the others are written accounts."
        },
        {
          q: "Why must historians use court chronicles carefully?",
          options: ["They are always in verse", "They may be biased towards the ruler", "They have no dates", "They are in Gurmukhi"],
          answer: 1,
          explain: "Court writers might **flatter the ruler** or be hostile to opponents, so their accounts need cross-checking."
        }
      ]
    },
    // ───────────── 3 ─────────────
    {
      id: "conditions-early-16th-century",
      title: "Political, Social and Economic Conditions of the Punjab in the Early 16th Century",
      section: "Part A",
      summary: "The Punjab at the time of the birth of Sikhism: Lodi rule and its weakness, a divided and unequal society, the condition of women, farming and trade, and the religious setting of Bhakti and Sufism.",
      notes: [
        {
          heading: "Political condition",
          points: [
            "Punjab formed part of the **Delhi Sultanate** under the **Lodi dynasty**; **Ibrahim Lodi** was Sultan and **Daulat Khan Lodi** was governor of Lahore.",
            "Rule was based on the army and tax collection, and officials were often corrupt and oppressive.",
            "Local chiefs and governors quarrelled with the Sultan; the central authority was weak.",
            "Because of this weakness, **Babur** invaded India and won the **First Battle of Panipat in 1526**, which ended Lodi rule and began the Mughal Empire."
          ]
        },
        {
          heading: "Social condition",
          points: [
            "Society was divided by religion into Hindus and Muslims, and Hindu society was divided by **caste**, with untouchability.",
            "Rulers and nobles, mostly Muslim, held power; other groups were often treated unequally.",
            "Women had a low status; evils such as **sati** and female infanticide existed among some groups, and widows were badly treated.",
            "Beliefs in superstition, rituals and magic were widespread."
          ]
        },
        {
          heading: "Economic condition",
          points: [
            "**Agriculture** was the main occupation; the state took a large share of the produce as land revenue.",
            "Peasants suffered when officials collected taxes harshly, and during wars.",
            "Crafts such as weaving and metalwork, and trade along the north-western routes, flourished in towns like Lahore and Multan.",
            "Social differences were deep between the wealthy rulers and the poor common people."
          ]
        },
        {
          heading: "Religious condition",
          points: [
            "The **Bhakti movement** (saints like Kabir and Ramananda) stressed devotion and criticised caste and ritual.",
            "**Sufi** saints, such as Sheikh Farid of Pakpattan, preached love for God and service to humanity.",
            "Despite these movements, many people followed empty ritual, and religious leaders often lost spiritual purity.",
            "This religious and social setting prepared the way for the message of Guru Nanak Dev Ji."
          ]
        }
      ],
      formulas: [
        "Ibrahim Lodi – last Sultan of Delhi; Daulat Khan Lodi – governor of Lahore",
        "1526 – First Battle of Panipat; Babur defeats Ibrahim Lodi",
        "Movements: Bhakti and Sufism"
      ],
      terms: [
        { term: "Lodi dynasty", meaning: "The **last dynasty of the Delhi Sultanate**, ruling till 1526." },
        { term: "Sati", meaning: "The **cruel custom** in which a widow was burnt on her husband's funeral pyre." },
        { term: "Bhakti", meaning: "A movement of **devotion to one God**, open to people of every caste." },
        { term: "Sufi", meaning: "A **Muslim mystic** who stressed love of God and service to people." },
        { term: "Land revenue", meaning: "The **share of the harvest** or its value taken by the state as tax." }
      ],
      qa: [
        {
          q: "Describe the political condition of the Punjab at the beginning of the sixteenth century.",
          a: "Punjab was under the weak Lodi rulers of Delhi. Governors like Daulat Khan Lodi at Lahore acted almost independently, officials were corrupt and the people were oppressed. This disorder let Babur invade India and defeat Ibrahim Lodi at Panipat in 1526."
        },
        {
          q: "What was the position of women in Punjab society at that time?",
          a: "Women had a low status and little freedom. Evil practices such as sati and female infanticide existed among some sections, and widows suffered much. Guru Nanak Dev Ji later spoke strongly for the respect and equality of women."
        },
        {
          q: "How did Bhakti and Sufi movements affect Punjab society?",
          a: "Both movements stressed devotion to one God, love and service, and criticised caste and empty rituals. They brought Hindus and Muslims closer and helped to create a mood in which Guru Nanak Dev Ji's message of equality and unity could spread."
        }
      ],
      quiz: [
        {
          q: "Who was the Sultan of Delhi when Guru Nanak Dev Ji was a young man and Babur invaded?",
          options: ["Sikandar Lodi", "Ibrahim Lodi", "Bahlol Lodi", "Alauddin Khalji"],
          answer: 1,
          explain: "**Ibrahim Lodi** was defeated by Babur at Panipat in 1526."
        },
        {
          q: "Who was the Lodi governor of Lahore?",
          options: ["Daulat Khan Lodi", "Mir Mannu", "Zakariya Khan", "Sher Shah"],
          answer: 0,
          explain: "**Daulat Khan Lodi** governed Lahore; he was later disloyal to Ibrahim Lodi."
        },
        {
          q: "The First Battle of Panipat was fought in:",
          options: ["1469", "1526", "1556", "1699"],
          answer: 1,
          explain: "It was fought in **1526** between Babur and Ibrahim Lodi."
        },
        {
          q: "Which of these was the main occupation of the people of Punjab?",
          options: ["Mining", "Agriculture", "Shipping", "Fishing"],
          answer: 1,
          explain: "**Agriculture** was the chief occupation."
        },
        {
          q: "Sheikh Farid belonged to which tradition?",
          options: ["Bhakti", "Sufi", "Buddhist", "Jain"],
          answer: 1,
          explain: "Sheikh Farid was a **Sufi** saint; his hymns also appear in the Guru Granth Sahib."
        },
        {
          q: "Which social evil is associated with widows in this period?",
          options: ["Sati", "Langar", "Pangat", "Sangat"],
          answer: 0,
          explain: "**Sati** was the practice of burning a widow with her husband's body."
        }
      ]
    },
    // ───────────── 4 ─────────────
    {
      id: "guru-nanak-dev-ji",
      title: "Sri Guru Nanak Dev Ji's Life and Teachings",
      section: "Part A",
      summary: "The life, travels and message of the founder of Sikhism, and the institutions he began at Kartarpur.",
      notes: [
        {
          heading: "Early life",
          points: [
            "Guru Nanak Dev Ji was born in **1469** at **Talwandi** (now **Nankana Sahib**, in Pakistan); his father was Mehta Kalu and his mother Mata Tripta.",
            "His sister was **Bebe Nanaki**, who was among the first to recognise his spiritual greatness.",
            "He worked for a time at Sultanpur Lodhi, where, according to tradition, he received his call and began his mission.",
            "Sikh tradition places the start of his teaching in the opening words 'there is no Hindu, no Musalman'."
          ]
        },
        {
          heading: "Udasis (travels)",
          points: [
            "He undertook long journeys called **Udasis**, usually counted as four, across India and to places beyond.",
            "Traditions say he visited centres such as Haridwar, Banaras, Puri, the south, and also Mecca and Baghdad; historians differ on the exact routes and dates.",
            "He met scholars, yogis and Sufis and spread his message through hymns and discussion.",
            "He settled at **Kartarpur** (on the Ravi) and passed away there in **1539**."
          ]
        },
        {
          heading: "Teachings",
          points: [
            "God is **one** (Ik Onkar), formless, truthful and present everywhere.",
            "He taught **naam japo** (remember God), **kirat karo** (earn honestly) and **vand chhako** (share with others).",
            "He opposed caste, idol-worship and empty ritual, and stressed the equality of all human beings, including women.",
            "Liberation comes through God's grace, truthful living and service, not through renouncing the world."
          ]
        },
        {
          heading: "Institutions and importance",
          points: [
            "**Sangat** (holy gathering), **pangat** (sitting together to eat) and **langar** (community kitchen) broke down caste barriers.",
            "He chose **Bhai Lehna** (Guru Angad Dev Ji) as his successor, starting the line of Gurus.",
            "His hymns, including Japji Sahib, are in the Guru Granth Sahib."
          ]
        }
      ],
      formulas: [
        "1469 – birth at Talwandi (Nankana Sahib)",
        "1539 – passed away at Kartarpur",
        "Three principles: naam japo, kirat karo, vand chhako",
        "Successor: Bhai Lehna (Guru Angad Dev Ji)"
      ],
      terms: [
        { term: "Udasi", meaning: "A **long preaching journey** made by Guru Nanak Dev Ji." },
        { term: "Ik Onkar", meaning: "The opening of the Mool Mantar: **God is One**." },
        { term: "Sangat", meaning: "The **holy congregation** of the Sikhs." },
        { term: "Pangat", meaning: "Sitting **in a row together** to eat, regardless of caste." },
        { term: "Kartarpur", meaning: "The town on the Ravi where Guru Nanak Dev Ji **settled** and passed away." }
      ],
      qa: [
        {
          q: "What were the main teachings of Guru Nanak Dev Ji?",
          a: "He taught that God is one, formless and truthful, and that people should remember God (naam japo), earn honestly (kirat karo) and share with others (vand chhako). He rejected caste, ritual and idol-worship, and preached the equality of all, including women."
        },
        {
          q: "What was the importance of the Udasis of Guru Nanak Dev Ji?",
          a: "On his journeys he met people of different faiths, discussed their beliefs and spread his message of one God and human equality. They made his teaching known far beyond Punjab. Historians differ on the exact number, routes and dates of these journeys."
        },
        {
          q: "How did Guru Nanak Dev Ji break the barriers of caste?",
          a: "By the institutions of sangat, pangat and langar, where people of all castes sat and ate together, and by his own hymns declaring all people equal before God. He also chose a successor on merit, not by birth in his family."
        }
      ],
      quiz: [
        {
          q: "Guru Nanak Dev Ji was born in:",
          options: ["1469", "1539", "1504", "1606"],
          answer: 0,
          explain: "He was born in **1469**."
        },
        {
          q: "Where did Guru Nanak Dev Ji spend his last years?",
          options: ["Amritsar", "Anandpur Sahib", "Kartarpur", "Goindwal"],
          answer: 2,
          explain: "He settled at **Kartarpur** on the Ravi and passed away there in 1539."
        },
        {
          q: "Who succeeded Guru Nanak Dev Ji?",
          options: ["Guru Amar Das Ji", "Guru Angad Dev Ji", "Guru Ram Das Ji", "Guru Arjan Dev Ji"],
          answer: 1,
          explain: "**Bhai Lehna** became Guru Angad Dev Ji."
        },
        {
          q: "'Vand chhako' means:",
          options: ["Earn honestly", "Remember God", "Share with others", "Defend the weak"],
          answer: 2,
          explain: "Vand chhako means **sharing** one's earnings."
        },
        {
          q: "His journeys are called:",
          options: ["Jathas", "Udasis", "Morchas", "Sakas"],
          answer: 1,
          explain: "The preaching journeys are **Udasis**."
        },
        {
          q: "Which institution started by him allowed people of all castes to eat together?",
          options: ["Manji", "Langar", "Masand system", "Miri-piri"],
          answer: 1,
          explain: "**Langar** and pangat removed caste distinctions at the table."
        }
      ]
    },
    // ───────────── 5 ─────────────
    {
      id: "gurus-angad-amar-das-ram-das",
      title: "Development of Sikhism under Sri Guru Angad Dev Ji, Sri Guru Amar Das Ji and Sri Guru Ram Das Ji",
      section: "Part A",
      summary: "How the second, third and fourth Gurus strengthened the Sikh community through Gurmukhi, langar, manjis, social reform and the founding of Amritsar.",
      notes: [
        {
          heading: "Guru Angad Dev Ji (1539–52)",
          points: [
            "Born Bhai Lehna; became the second Guru in 1539 and lived at Khadur Sahib.",
            "Gave a fuller shape to the **Gurmukhi** script, which made the Sikh scriptures easier to write and read for ordinary people.",
            "Collected the hymns of Guru Nanak Dev Ji and wrote his own; strengthened the langar and encouraged physical fitness through wrestling (**mall akhara**).",
            "Passed on the Guruship to Guru Amar Das Ji in 1552."
          ]
        },
        {
          heading: "Guru Amar Das Ji (1552–74)",
          points: [
            "Founded **Goindwal** and built a **baoli** (step-well) there, which became a pilgrimage centre.",
            "Organised the Sikhs into **manjis** (preaching districts), whose heads were responsible for teaching and collecting offerings; the **piri** system also appeared.",
            "Insisted that all, including the Mughal emperor **Akbar**, sit in pangat and eat langar before meeting him.",
            "Spoke against **sati**, the **purdah** system and female infanticide, and encouraged widow remarriage.",
            "Introduced the Sikh ceremonies of birth, marriage (**Anand Karaj**) and death, separating Sikh practice from other customs."
          ]
        },
        {
          heading: "Guru Ram Das Ji (1574–81)",
          points: [
            "Founded the city of **Ramdaspur**, later known as **Amritsar**, and had the **Amritsar sarovar** dug.",
            "Invited traders and craftsmen of many castes to settle, making it a centre of trade and Sikh life.",
            "Composed hymns, including the **Laavan** used in the Anand Karaj marriage ceremony.",
            "Made the Guruship **hereditary in his family** by appointing his youngest son, Arjan Dev Ji, as successor."
          ]
        }
      ],
      formulas: [
        "Guru Angad Dev Ji 1539–52; Guru Amar Das Ji 1552–74; Guru Ram Das Ji 1574–81",
        "Gurmukhi – Guru Angad Dev Ji; Goindwal baoli – Guru Amar Das Ji",
        "Manji system – Guru Amar Das Ji; Amritsar – Guru Ram Das Ji"
      ],
      terms: [
        { term: "Gurmukhi", meaning: "The **script of the Sikh scriptures**, developed by Guru Angad Dev Ji." },
        { term: "Manji", meaning: "A **preaching district** led by an appointed Sikh under Guru Amar Das Ji." },
        { term: "Baoli", meaning: "A **step-well**; the one at Goindwal became a Sikh pilgrimage site." },
        { term: "Anand Karaj", meaning: "The **Sikh marriage ceremony**." },
        { term: "Ramdaspur", meaning: "The **early name of Amritsar**, founded by Guru Ram Das Ji." }
      ],
      qa: [
        {
          q: "What was the contribution of Guru Angad Dev Ji to Sikhism?",
          a: "He gave the Gurmukhi script a standard form, so the Gurus' hymns could be written and read by common people. He also collected the hymns of Guru Nanak Dev Ji, strengthened the langar and promoted physical fitness among the Sikhs."
        },
        {
          q: "Describe the social reforms of Guru Amar Das Ji.",
          a: "He opposed sati, purdah and female infanticide, allowed widow remarriage, and insisted that everyone eat in the same pangat before meeting him. He also set up the manji system of preaching and gave the Sikhs their own ceremonies for birth, marriage and death."
        },
        {
          q: "Why is Guru Ram Das Ji remembered?",
          a: "He founded Ramdaspur, later Amritsar, and had its sarovar dug, giving the Sikhs a central place of worship and trade. He composed hymns, including the Laavan, and nominated his youngest son Guru Arjan Dev Ji as Guru."
        }
      ],
      quiz: [
        {
          q: "Who gave the Gurmukhi script its standard form?",
          options: ["Guru Nanak Dev Ji", "Guru Angad Dev Ji", "Guru Ram Das Ji", "Guru Har Rai Ji"],
          answer: 1,
          explain: "**Guru Angad Dev Ji** is credited with this."
        },
        {
          q: "The baoli at Goindwal was built by:",
          options: ["Guru Amar Das Ji", "Guru Arjan Dev Ji", "Guru Hargobind Sahib Ji", "Guru Angad Dev Ji"],
          answer: 0,
          explain: "**Guru Amar Das Ji** built the baoli at Goindwal."
        },
        {
          q: "Which Guru founded Amritsar (Ramdaspur)?",
          options: ["Guru Ram Das Ji", "Guru Amar Das Ji", "Guru Arjan Dev Ji", "Guru Tegh Bahadur Ji"],
          answer: 0,
          explain: "**Guru Ram Das Ji** founded it."
        },
        {
          q: "The manji system was set up by:",
          options: ["Guru Angad Dev Ji", "Guru Ram Das Ji", "Guru Amar Das Ji", "Guru Har Rai Ji"],
          answer: 2,
          explain: "**Guru Amar Das Ji** organised the Sikhs into manjis."
        },
        {
          q: "Guru Amar Das Ji was the Guru from:",
          options: ["1539 to 1552", "1552 to 1574", "1574 to 1581", "1581 to 1606"],
          answer: 1,
          explain: "He was Guru from **1552 to 1574**."
        },
        {
          q: "Which Mughal emperor is said to have eaten langar at Goindwal?",
          options: ["Babur", "Humayun", "Akbar", "Aurangzeb"],
          answer: 2,
          explain: "Tradition says **Akbar** ate in pangat before meeting Guru Amar Das Ji."
        }
      ]
    },
    // ───────────── 6 ─────────────
    {
      id: "guru-arjan-dev-ji",
      title: "Sri Guru Arjan Dev Ji and his Martyrdom",
      section: "Part A",
      summary: "The work of the fifth Guru in building Harmandir Sahib, compiling the Adi Granth and organising the community, and the events leading to his martyrdom at Lahore in 1606.",
      notes: [
        {
          heading: "Contributions",
          points: [
            "Became Guru in **1581** (the youngest son of Guru Ram Das Ji); founded **Tarn Taran**, **Kartarpur** (near Jalandhar) and other towns.",
            "Completed the sarovar at Amritsar and built **Harmandir Sahib**, with doors on four sides, as a symbol that it is open to all; the foundation is traditionally linked with the Sufi saint Mian Mir.",
            "Organised the **masand system** to collect the voluntary offering (the **daswandh**, one-tenth of income) and to spread teachings.",
            "Encouraged trade, including horse-trading with Central Asia, which strengthened the Sikh economy."
          ]
        },
        {
          heading: "Compilation of the Adi Granth (1604)",
          points: [
            "Guru Arjan Dev Ji compiled the **Adi Granth** in **1604**, with **Bhai Gurdas Ji** as scribe.",
            "It contained hymns of the first five Gurus and of saints such as **Kabir, Ravidas, Namdev and Sheikh Farid**.",
            "It was installed in Harmandir Sahib, with **Baba Buddha Ji** as the first granthi.",
            "It gave the Sikhs a common scripture and a sense of identity."
          ]
        },
        {
          heading: "Martyrdom (1606)",
          points: [
            "The growing strength of the Sikhs and the support of **Prince Khusrau**, who rebelled against **Jahangir**, are given as political causes by many writers.",
            "Jahangir's own memoir reflects his hostility to the Guru; the hostility of rivals such as **Prithi Chand** and the official **Chandu Shah** is also mentioned.",
            "The Guru was arrested and martyred at **Lahore in 1606** (the exact manner of his death is described differently in different accounts).",
            "He is remembered as the **first Sikh martyr among the Gurus**; his martyrdom led the Sikhs, under Guru Hargobind Sahib Ji, to take up arms to defend their faith."
          ]
        }
      ],
      formulas: [
        "Guru Arjan Dev Ji 1581–1606",
        "1604 – Adi Granth compiled; installed at Harmandir Sahib",
        "1606 – martyrdom at Lahore (Jahangir's reign)",
        "Founded Tarn Taran and Kartarpur (Jalandhar)"
      ],
      terms: [
        { term: "Harmandir Sahib", meaning: "The **central Sikh shrine** at Amritsar, built by Guru Arjan Dev Ji; the Golden Temple." },
        { term: "Adi Granth", meaning: "The **first compilation** of Sikh scripture, in 1604." },
        { term: "Masand", meaning: "A **representative of the Guru** who collected offerings and preached." },
        { term: "Daswandh", meaning: "A **voluntary one-tenth** of one's earnings given to the Guru." },
        { term: "Bhai Gurdas Ji", meaning: "The **scribe** of the Adi Granth and an early Sikh writer." }
      ],
      qa: [
        {
          q: "Why did Guru Arjan Dev Ji compile the Adi Granth?",
          a: "To give the Sikhs a single authentic scripture so that no spurious hymns were mixed with the Gurus' bani, and to unify the community around a common text. It included the hymns of earlier Gurus and of saints like Kabir and Sheikh Farid."
        },
        {
          q: "What were the causes of the martyrdom of Guru Arjan Dev Ji?",
          a: "Writers give several: Jahangir's dislike of the growing strength of the Sikh community, the Guru's alleged support to the rebel Prince Khusrau, and the hostility of rivals such as Prithi Chand and Chandu Shah. Accounts differ about the details."
        },
        {
          q: "What was the importance of Harmandir Sahib?",
          a: "It became the main centre of Sikh worship and community life. Its four doors show that it is open to people of every direction and caste, and it gave the Sikhs a focus like the Hindu and Muslim holy places."
        }
      ],
      quiz: [
        {
          q: "The Adi Granth was compiled in:",
          options: ["1581", "1604", "1606", "1699"],
          answer: 1,
          explain: "It was compiled in **1604**."
        },
        {
          q: "Where was Guru Arjan Dev Ji martyred?",
          options: ["Delhi", "Lahore", "Sirhind", "Kartarpur"],
          answer: 1,
          explain: "He was martyred at **Lahore** in 1606."
        },
        {
          q: "Who acted as scribe of the Adi Granth?",
          options: ["Baba Buddha Ji", "Bhai Gurdas Ji", "Bhai Mani Singh Ji", "Mian Mir"],
          answer: 1,
          explain: "**Bhai Gurdas Ji** wrote it down."
        },
        {
          q: "Which Mughal emperor was ruling at the time of Guru Arjan Dev Ji's martyrdom?",
          options: ["Akbar", "Shah Jahan", "Jahangir", "Aurangzeb"],
          answer: 2,
          explain: "It was in the reign of **Jahangir**."
        },
        {
          q: "Which city did Guru Arjan Dev Ji found near Amritsar?",
          options: ["Tarn Taran", "Anandpur", "Goindwal", "Khadur"],
          answer: 0,
          explain: "He founded **Tarn Taran**; Goindwal and Khadur were earlier centres."
        },
        {
          q: "Who was the first granthi of the Adi Granth at Harmandir Sahib?",
          options: ["Bhai Gurdas Ji", "Baba Buddha Ji", "Bhai Lehna", "Bhai Mati Das"],
          answer: 1,
          explain: "**Baba Buddha Ji** was appointed the first granthi."
        }
      ]
    },
    // ───────────── 7 ─────────────
    {
      id: "guru-hargobind-sahib-ji",
      title: "Sri Guru Hargobind Sahib Ji and the Transformation of Sikhism",
      section: "Part A",
      summary: "How the sixth Guru added military and political strength to the Sikh faith through the Akal Takht, miri and piri, and his encounters with the Mughals.",
      notes: [
        {
          heading: "New policy",
          points: [
            "Guru Hargobind Sahib Ji became Guru in **1606**, after the martyrdom of his father, Guru Arjan Dev Ji.",
            "He wore **two swords**, **miri** (worldly authority) and **piri** (spiritual authority), teaching that religion and the defence of justice go together.",
            "He built the **Akal Takht** opposite Harmandir Sahib, where he held court and heard matters of the community.",
            "He raised a small army, encouraged martial training and hunting, and fortified Amritsar with a fort named **Lohgarh**.",
            "He asked for offerings of **horses and weapons** instead of only money."
          ]
        },
        {
          heading: "Relations with the Mughals",
          points: [
            "Jahangir had the Guru confined in the **Gwalior fort**; he was later released. The length of the imprisonment is given differently by different writers.",
            "Tradition says he secured the release of 52 Hindu princes with him; hence the festival title **Bandi Chhor** (Liberator).",
            "Under **Shah Jahan**, conflicts arose; the Sikhs fought battles at **Amritsar (1634)**, **Lahira / Mehraj (1634)** and **Kartarpur (1635)**, and won at least some of them.",
            "After the Kartarpur battle the Guru withdrew to the hills and settled at **Kiratpur**, where he passed away in **1644**."
          ]
        },
        {
          heading: "Importance",
          points: [
            "He turned a peaceful community into one able to defend itself, while keeping the Gurus' spiritual message.",
            "The Akal Takht became the supreme seat of Sikh religious and temporal authority.",
            "His policy prepared the ground for the creation of the Khalsa by Guru Gobind Singh Ji."
          ]
        }
      ],
      formulas: [
        "Guru Hargobind Sahib Ji 1606–44",
        "Akal Takht built opposite Harmandir Sahib",
        "Miri (temporal) and piri (spiritual) swords",
        "Battles: Amritsar and Lahira 1634; Kartarpur 1635",
        "Died at Kiratpur in 1644"
      ],
      terms: [
        { term: "Miri", meaning: "The sword of **worldly (temporal) authority**." },
        { term: "Piri", meaning: "The sword of **spiritual authority**." },
        { term: "Akal Takht", meaning: "The **throne of the Timeless One**, the highest Sikh seat of authority, at Amritsar." },
        { term: "Lohgarh", meaning: "The **fort** built by Guru Hargobind Sahib Ji at Amritsar." },
        { term: "Bandi Chhor", meaning: "Title meaning **liberator of prisoners**, linked to his release from Gwalior." }
      ],
      qa: [
        {
          q: "What is meant by miri and piri?",
          a: "Miri and piri are the two swords worn by Guru Hargobind Sahib Ji. Miri stood for worldly or temporal power, and piri for spiritual power. They taught that the Sikhs must be both devout and ready to defend the weak."
        },
        {
          q: "Why did Guru Hargobind Sahib Ji change the Sikh policy?",
          a: "The martyrdom of his father showed that peaceful means alone could not protect the Sikhs from the growing hostility of the Mughal state. He therefore raised an army, built the Akal Takht and encouraged military training."
        },
        {
          q: "Name the battles fought by Guru Hargobind Sahib Ji against the Mughals.",
          a: "In the reign of Shah Jahan, battles were fought at Amritsar and at Lahira (Mehraj) in 1634, and at Kartarpur in 1635. After this he moved to Kiratpur in the Shivalik hills."
        }
      ],
      quiz: [
        {
          q: "Who built the Akal Takht?",
          options: ["Guru Arjan Dev Ji", "Guru Hargobind Sahib Ji", "Guru Har Rai Ji", "Guru Gobind Singh Ji"],
          answer: 1,
          explain: "It was built by **Guru Hargobind Sahib Ji**."
        },
        {
          q: "The fort built at Amritsar by Guru Hargobind Sahib Ji was called:",
          options: ["Lohgarh", "Anandgarh", "Keshgarh", "Fatehgarh"],
          answer: 0,
          explain: "It was **Lohgarh**."
        },
        {
          q: "Guru Hargobind Sahib Ji was confined by Jahangir in the fort of:",
          options: ["Agra", "Gwalior", "Lahore", "Delhi"],
          answer: 1,
          explain: "He was kept in **Gwalior** fort."
        },
        {
          q: "The Guru passed away in 1644 at:",
          options: ["Kiratpur", "Amritsar", "Nanded", "Goindwal"],
          answer: 0,
          explain: "He spent his last years and passed away at **Kiratpur**."
        },
        {
          q: "The two swords symbolised:",
          options: ["War and peace", "Miri and piri", "Naam and kirat", "Sangat and pangat"],
          answer: 1,
          explain: "The swords stood for **miri and piri**."
        },
        {
          q: "Which Mughal emperor was ruling at the Battle of Kartarpur?",
          options: ["Akbar", "Jahangir", "Shah Jahan", "Aurangzeb"],
          answer: 2,
          explain: "**Shah Jahan** was emperor in 1635."
        }
      ]
    },
    // ───────────── 8 ─────────────
    {
      id: "guru-har-rai-ji-and-har-krishan-ji",
      title: "Sri Guru Har Rai Ji and Sri Guru Har Krishan Ji",
      section: "Part A",
      summary: "The seventh and eighth Gurus: Guru Har Rai Ji's peaceful consolidation and service, and the short life of the child Guru Har Krishan Ji.",
      notes: [
        {
          heading: "Guru Har Rai Ji (1644–61)",
          points: [
            "Grandson of Guru Hargobind Sahib Ji; became Guru in **1644** and lived at **Kiratpur**.",
            "He kept the Sikh force of trained horsemen created by his grandfather but avoided direct conflict with the Mughals.",
            "He was known for his kindness, and for the care of animals and medical service; tradition links him with a herbal dispensary at Kiratpur.",
            "Tradition says he helped Prince **Dara Shikoh** during an illness; the details are known mainly from later sources.",
            "He continued preaching tours, and sent missionaries to the Malwa and other regions."
          ]
        },
        {
          heading: "Guru Har Rai Ji and Aurangzeb",
          points: [
            "Aurangzeb summoned the Guru to Delhi; the Guru sent his elder son **Ram Rai** instead.",
            "Ram Rai altered a line of the Guru Granth Sahib, to please the emperor, and the Guru rejected him as successor.",
            "Before passing away in **1661**, the Guru named his younger son, **Guru Har Krishan Ji**, as the next Guru."
          ]
        },
        {
          heading: "Guru Har Krishan Ji (1661–64)",
          points: [
            "Became Guru as a child of about five; he is the youngest of all the Gurus.",
            "Ram Rai disputed the succession; Aurangzeb called the child Guru to Delhi.",
            "In Delhi he served people stricken by a **smallpox** epidemic, regardless of religion, and fell ill himself.",
            "Before passing away in **1664**, he named the successor with the words 'Baba Bakala', pointing to **Guru Tegh Bahadur Ji** at Bakala.",
            "Gurdwara **Bangla Sahib** in Delhi is associated with his stay."
          ]
        }
      ],
      formulas: [
        "Guru Har Rai Ji 1644–61 (seat at Kiratpur)",
        "Guru Har Krishan Ji 1661–64 (youngest Guru; passed away at Delhi)",
        "Successor named: 'Baba Bakala' – Guru Tegh Bahadur Ji",
        "Ram Rai – elder son of Guru Har Rai Ji, rejected as successor"
      ],
      terms: [
        { term: "Ram Rai", meaning: "The **elder son** of Guru Har Rai Ji, not accepted as Guru." },
        { term: "Kiratpur", meaning: "The **town in the Shivaliks** founded by Guru Hargobind Sahib Ji, seat of the 6th–7th Gurus." },
        { term: "Bangla Sahib", meaning: "The **Delhi gurdwara** associated with Guru Har Krishan Ji." },
        { term: "Bakala", meaning: "The **village** where Guru Tegh Bahadur Ji was found as the next Guru." }
      ],
      qa: [
        {
          q: "Write a note on the services of Guru Har Rai Ji.",
          a: "Guru Har Rai Ji preserved the Sikh strength he inherited without fighting the Mughals, and spent his years on preaching and service. He was known for kindness, for medical help to the sick and for his care of animals. He also sent missionaries to different regions."
        },
        {
          q: "Why did Guru Har Rai Ji not accept Ram Rai as his successor?",
          a: "Ram Rai, sent to the emperor's court, changed a line of the Guru Granth Sahib to please Aurangzeb. The Guru considered this a weakness of faith and chose his younger son Har Krishan Ji instead."
        },
        {
          q: "How is Guru Har Krishan Ji remembered?",
          a: "He became Guru as a small child and in Delhi served the victims of a smallpox epidemic without discrimination. He fell ill himself and passed away in 1664, naming 'Baba Bakala' as his successor, which led the Sikhs to Guru Tegh Bahadur Ji."
        }
      ],
      quiz: [
        {
          q: "Who was the seventh Guru?",
          options: ["Guru Har Rai Ji", "Guru Har Krishan Ji", "Guru Tegh Bahadur Ji", "Guru Hargobind Sahib Ji"],
          answer: 0,
          explain: "**Guru Har Rai Ji** was the seventh Guru."
        },
        {
          q: "Guru Har Rai Ji's seat was at:",
          options: ["Kiratpur", "Goindwal", "Nanded", "Patna"],
          answer: 0,
          explain: "He lived at **Kiratpur**."
        },
        {
          q: "Who is the youngest Guru in Sikh history?",
          options: ["Guru Arjan Dev Ji", "Guru Har Krishan Ji", "Guru Gobind Singh Ji", "Guru Ram Das Ji"],
          answer: 1,
          explain: "**Guru Har Krishan Ji** became Guru as a child."
        },
        {
          q: "Guru Har Krishan Ji passed away in:",
          options: ["1644", "1661", "1664", "1675"],
          answer: 2,
          explain: "He passed away in **1664**."
        },
        {
          q: "The words 'Baba Bakala' referred to:",
          options: ["Guru Gobind Singh Ji", "Guru Tegh Bahadur Ji", "Ram Rai", "Guru Arjan Dev Ji"],
          answer: 1,
          explain: "They pointed to **Guru Tegh Bahadur Ji** at Bakala."
        },
        {
          q: "Where did Guru Har Krishan Ji serve the sick?",
          options: ["Lahore", "Amritsar", "Delhi", "Patna"],
          answer: 2,
          explain: "He served smallpox patients in **Delhi**."
        }
      ]
    },
    // ───────────── 9 ─────────────
    {
      id: "guru-tegh-bahadur-ji",
      title: "Sri Guru Tegh Bahadur Ji and his Martyrdom",
      section: "Part A",
      summary: "The ninth Guru's travels and preaching, the founding of Anandpur Sahib, and his martyrdom at Delhi in 1675 in defence of religious freedom.",
      notes: [
        {
          heading: "Life and work",
          points: [
            "Youngest son of Guru Hargobind Sahib Ji; became Guru in **1664** after being identified at **Bakala**.",
            "Founded **Chak Nanaki**, later called **Anandpur Sahib**, in the Shivalik foothills.",
            "Travelled widely in Malwa, Bangar, and eastwards as far as Bengal and Assam, preaching and digging wells for the people; in Assam he went with Raja Ram Singh, who was sent by Aurangzeb.",
            "His hymns, including **slokas**, are included in the Guru Granth Sahib, and stress detachment, fearlessness and the love of God."
          ]
        },
        {
          heading: "Causes of martyrdom",
          points: [
            "Aurangzeb's religious policy led to the destruction of temples and forced conversions in parts of the empire, including Kashmir.",
            "A group of **Kashmiri Pandits** approached the Guru for protection.",
            "The Guru is said to have replied that if the emperor could convert him, they would follow; this challenge was taken to the emperor.",
            "The Guru's growing influence and the emperor's suspicion of the Sikhs' loyalty also played a part, according to some historians."
          ]
        },
        {
          heading: "Martyrdom (1675)",
          points: [
            "The Guru, with **Bhai Mati Das, Bhai Sati Das and Bhai Dayala Ji**, was arrested and taken to Delhi.",
            "His companions were tortured to death in front of him, and he was executed at **Chandni Chowk** in **November 1675**.",
            "Gurdwaras **Sis Ganj** and **Rakab Ganj** in Delhi mark the places related to his martyrdom and cremation.",
            "He is remembered as the **protector of religious freedom** ('Hind di Chadar').",
            "His martyrdom strengthened the Sikhs' determination to resist oppression."
          ]
        }
      ],
      formulas: [
        "Guru Tegh Bahadur Ji 1664–75",
        "Founded Anandpur Sahib (Chak Nanaki)",
        "1675 – martyred at Chandni Chowk, Delhi, in Aurangzeb's reign",
        "Companions: Bhai Mati Das, Bhai Sati Das, Bhai Dayala Ji",
        "Gurdwaras: Sis Ganj and Rakab Ganj, Delhi"
      ],
      terms: [
        { term: "Chak Nanaki", meaning: "The **original name of Anandpur Sahib**, after the Guru's mother." },
        { term: "Kashmiri Pandits", meaning: "The **Hindu community of Kashmir** who sought the Guru's help." },
        { term: "Gurdwara Sis Ganj", meaning: "The **Delhi gurdwara** marking where the Guru was martyred." },
        { term: "Hind di Chadar", meaning: "A title: **shield of India**, for the Guru's sacrifice." }
      ],
      qa: [
        {
          q: "Why did Guru Tegh Bahadur Ji sacrifice his life?",
          a: "To protect the religious freedom of the Kashmiri Pandits and others who were being forced to give up their faith under Aurangzeb. He accepted martyrdom rather than convert, and his sacrifice defended the right of everyone to follow their own religion."
        },
        {
          q: "Describe the travels of Guru Tegh Bahadur Ji.",
          a: "He travelled through Malwa and Bangar and then east to Uttar Pradesh, Bihar, Bengal and Assam, spreading Guru Nanak Dev Ji's teachings and helping people with wells and tanks. He founded Anandpur Sahib before leaving."
        },
        {
          q: "What was the effect of the martyrdom of Guru Tegh Bahadur Ji?",
          a: "It stirred the Sikhs against the oppression of the Mughal state. His son, Guru Gobind Singh Ji, took the step of organising them as a disciplined, martial community, which culminated in the Khalsa."
        }
      ],
      quiz: [
        {
          q: "Guru Tegh Bahadur Ji was martyred at:",
          options: ["Lahore", "Chandni Chowk, Delhi", "Sirhind", "Amritsar"],
          answer: 1,
          explain: "He was martyred at **Chandni Chowk, Delhi**."
        },
        {
          q: "Year of the martyrdom:",
          options: ["1606", "1664", "1675", "1704"],
          answer: 2,
          explain: "**1675**."
        },
        {
          q: "Who appealed to Guru Tegh Bahadur Ji for protection?",
          options: ["Rajput chiefs", "Kashmiri Pandits", "Marathas", "Jats"],
          answer: 1,
          explain: "A group of **Kashmiri Pandits**."
        },
        {
          q: "Which of these was martyred with the Guru?",
          options: ["Bhai Mati Das", "Baba Buddha Ji", "Bhai Gurdas Ji", "Bhai Mani Singh Ji"],
          answer: 0,
          explain: "**Bhai Mati Das**, with Bhai Sati Das and Bhai Dayala Ji."
        },
        {
          q: "Anandpur Sahib was earlier called:",
          options: ["Kartarpur", "Chak Nanaki", "Ramdaspur", "Paonta"],
          answer: 1,
          explain: "It was called **Chak Nanaki**."
        },
        {
          q: "The Mughal emperor at the time of the martyrdom was:",
          options: ["Jahangir", "Shah Jahan", "Aurangzeb", "Bahadur Shah"],
          answer: 2,
          explain: "**Aurangzeb**."
        }
      ]
    },
    // ───────────── 10 ─────────────
    {
      id: "guru-gobind-singh-ji",
      title: "Sri Guru Gobind Singh Ji: the Khalsa, his Battles and Personality",
      section: "Part A",
      summary: "The tenth Guru: his early life, the creation of the Khalsa in 1699, his battles with the hill chiefs and the Mughals, his writings and his role in ending the line of personal Gurus.",
      notes: [
        {
          heading: "Early life",
          points: [
            "Born at **Patna** in **1666**, the only son of Guru Tegh Bahadur Ji; became Guru in **1675**, at about nine years of age, after his father's martyrdom.",
            "Spent time at **Paonta Sahib**, where he studied languages and wrote poetry, and returned to Anandpur Sahib in the 1690s.",
            "He fought the **Battle of Bhangani** (1688) against hill chiefs, led by Fateh Shah of Garhwal."
          ]
        },
        {
          heading: "Creation of the Khalsa (1699)",
          points: [
            "On **Baisakhi 1699**, at **Anandpur Sahib**, he asked for five heads; five Sikhs, the **Panj Pyare**, stepped forward and were initiated with **amrit**.",
            "He then received amrit from the Panj Pyare, and took the name Gobind Singh.",
            "Men took the name **Singh** and women **Kaur**; all initiated Sikhs were equal, whatever their caste.",
            "Khalsa discipline includes the **five Ks**: kesh, kangha, kara, kirpan and kachhera.",
            "He ended the masand system, which had become corrupt, and linked Sikhs directly to the Guru."
          ]
        },
        {
          heading: "Battles",
          points: [
            "Hill chiefs and the Mughal governors fought him several times around Anandpur Sahib in the early 1700s.",
            "In **December 1704** he left Anandpur after a long siege; his family was separated at the **Sarsa** river.",
            "At **Chamkaur** (December 1704), his two elder sons, **Sahibzada Ajit Singh and Jujhar Singh**, died fighting; the two younger sons, **Zorawar Singh and Fateh Singh**, were executed at **Sirhind** by order of the governor Wazir Khan.",
            "At **Muktsar** (1705) forty Sikhs, the 'Forty Immortals', who had earlier left him, fell fighting the pursuing Mughal force; Mai Bhago was with them.",
            "He wrote the Persian **Zafarnama** to Aurangzeb."
          ]
        },
        {
          heading: "Last years and personality",
          points: [
            "He stayed at **Talwandi Sabo (Damdama Sahib)** and later went south; he met Emperor Bahadur Shah in 1707.",
            "He was stabbed at **Nanded** and passed away (joti jot) in **1708**; before this he declared the **Guru Granth Sahib** the eternal Guru.",
            "His writings include **Jaap Sahib, Akal Ustat, Bachittar Natak** and the Zafarnama; he patronised poets.",
            "He was a saint-soldier, poet and leader who raised the downtrodden to courage."
          ]
        }
      ],
      formulas: [
        "1666 – born at Patna; 1675 – becomes Guru",
        "1688 – Battle of Bhangani",
        "1699 – Khalsa created at Anandpur Sahib on Baisakhi",
        "1704–05 – Chamkaur, Sirhind, Muktsar",
        "1708 – joti jot at Nanded; Guru Granth Sahib the eternal Guru"
      ],
      terms: [
        { term: "Khalsa", meaning: "The **order of initiated Sikhs** founded in 1699." },
        { term: "Panj Pyare", meaning: "The **five beloved ones**, the first five Sikhs initiated." },
        { term: "Amrit", meaning: "The **initiation water** prepared by stirring with a khanda." },
        { term: "Five Ks", meaning: "Kesh, kangha, kara, kirpan, kachhera: the **Khalsa's articles of faith**." },
        { term: "Joti jot", meaning: "The Sikh term for a **Guru's passing away**." }
      ],
      qa: [
        {
          q: "Describe the creation of the Khalsa.",
          a: "On Baisakhi 1699 at Anandpur Sahib, Guru Gobind Singh Ji asked for five volunteers willing to offer their heads. Five Sikhs, who became the Panj Pyare, came forward and received amrit; the Guru then took amrit from them. The Khalsa took the names Singh and Kaur and the five Ks, and caste differences ended among them."
        },
        {
          q: "Why did Guru Gobind Singh Ji create the Khalsa?",
          a: "To create a united, brave and casteless community that could protect itself and the weak from oppression, after the martyrdom of his father and the failure of the masands. It gave the Sikhs a distinct identity and direct link to the Guru."
        },
        {
          q: "Write a short note on the personality of Guru Gobind Singh Ji.",
          a: "He was a saint, soldier, poet and teacher. He fought for justice but without hatred, forgave enemies, and bore the loss of his father and four sons with courage. He gave the Sikhs the Khalsa and the Guru Granth Sahib as their Guru, and wrote several works."
        }
      ],
      quiz: [
        {
          q: "The Khalsa was created in:",
          options: ["1669", "1699", "1704", "1708"],
          answer: 1,
          explain: "On Baisakhi **1699**."
        },
        {
          q: "Where was Guru Gobind Singh Ji born?",
          options: ["Anandpur Sahib", "Patna", "Nanded", "Paonta"],
          answer: 1,
          explain: "He was born at **Patna** in 1666."
        },
        {
          q: "The five beloved ones are called:",
          options: ["Panj Pyare", "Panj Takht", "Panj Granthi", "Panj Singh Sabha"],
          answer: 0,
          explain: "**Panj Pyare**."
        },
        {
          q: "The younger sahibzade were executed at:",
          options: ["Chamkaur", "Sirhind", "Muktsar", "Lahore"],
          answer: 1,
          explain: "At **Sirhind**, by the governor Wazir Khan."
        },
        {
          q: "The Zafarnama was addressed to:",
          options: ["Bahadur Shah", "Aurangzeb", "Jahangir", "Wazir Khan"],
          answer: 1,
          explain: "To **Aurangzeb**."
        },
        {
          q: "Guru Gobind Singh Ji declared who as the Guru after him?",
          options: ["Banda Singh Bahadur", "The Panj Pyare", "The Guru Granth Sahib", "His wife Mata Sundari"],
          answer: 2,
          explain: "He declared the **Guru Granth Sahib** the Guru in 1708."
        }
      ]
    },
    // ───────────── 11 ─────────────
    {
      id: "banda-singh-bahadur",
      title: "Baba Banda Singh Bahadur",
      section: "Part A",
      summary: "The Sikh leader sent by Guru Gobind Singh Ji to Punjab: his conquests including Sirhind in 1710, his rule at Lohgarh, his fall and his execution at Delhi in 1716.",
      notes: [
        {
          heading: "Early life and mission",
          points: [
            "Born Lachhman Dev (traditionally at Rajouri in Jammu region); he became an ascetic known as **Madho Das**, living at **Nanded** on the Godavari.",
            "He met Guru Gobind Singh Ji at Nanded in **1708**, became his devoted Sikh and was given the name **Banda Singh Bahadur**.",
            "The Guru sent him to the Punjab to punish oppression, with a letter to the Sikhs and a small group of Sikhs as companions."
          ]
        },
        {
          heading: "Conquests",
          points: [
            "The Sikhs of the Majha and Malwa joined him; he captured **Samana** and **Sadhaura** in **1709**.",
            "In **May 1710**, at **Chappar Chiri**, he defeated the Mughal governor of Sirhind, **Wazir Khan**, and soon took **Sirhind**; Wazir Khan was killed.",
            "He took control of a large area between the Sutlej and Yamuna and made **Lohgarh** in the Shivalik foothills his capital.",
            "His power also extended to parts of the Jalandhar Doab and the Shivalik hills."
          ]
        },
        {
          heading: "Rule and reforms",
          points: [
            "He struck **coins** and issued a **seal** in the names of Guru Nanak Dev Ji and Guru Gobind Singh Ji, which stated his rule was in the Gurus' name.",
            "He abolished the **zamindari** system in the territory, giving land to the actual cultivators.",
            "He appointed his own officials to administer the conquered areas."
          ]
        },
        {
          heading: "Decline and death",
          points: [
            "Emperor **Bahadur Shah** marched to the Punjab in 1710 and forced Banda to leave Lohgarh.",
            "Banda was besieged at **Gurdas Nangal** in 1715, captured after months of siege by forces of **Abdus Samad Khan**, and taken to Delhi.",
            "He was executed in **1716** in the reign of **Farrukhsiyar**, with many of his followers; he is remembered for refusing to give up his faith.",
            "His rule was short-lived, but it showed that the Sikhs could challenge Mughal power and encouraged the later rise of Sikh rule."
          ]
        }
      ],
      formulas: [
        "1708 – meets Guru Gobind Singh Ji at Nanded",
        "1709 – Samana and Sadhaura; May 1710 – Chappar Chiri, Sirhind taken",
        "Capital: Lohgarh",
        "1715 – siege of Gurdas Nangal; 1716 – executed at Delhi"
      ],
      terms: [
        { term: "Chappar Chiri", meaning: "The **place near Sirhind** where Banda defeated Wazir Khan in 1710." },
        { term: "Lohgarh", meaning: "Banda's **fortified capital** in the Shivalik foothills." },
        { term: "Zamindari", meaning: "The system of **landlords collecting revenue** between the peasants and the state." },
        { term: "Gurdas Nangal", meaning: "The **village near Gurdaspur** where Banda was besieged and captured in 1715." },
        { term: "Wazir Khan", meaning: "The **governor of Sirhind** who was responsible for the death of the younger sahibzade." }
      ],
      qa: [
        {
          q: "How did Banda Singh Bahadur come to the Punjab?",
          a: "He was an ascetic at Nanded who met Guru Gobind Singh Ji in 1708 and became his Sikh. The Guru sent him to Punjab to fight oppression and punish those who had wronged the Sikhs, and gave him a letter calling the Sikhs to join him."
        },
        {
          q: "Describe the battle of Chappar Chiri.",
          a: "In May 1710 Banda Singh Bahadur's army met the forces of Wazir Khan, the governor of Sirhind, at Chappar Chiri. The Sikhs won, Wazir Khan was killed, and soon afterwards Sirhind was taken."
        },
        {
          q: "What were the reforms of Banda Singh Bahadur?",
          a: "He abolished the zamindari system and gave land to the tillers, issued coins and a seal in the names of the Gurus, and set up his own administration with Lohgarh as capital. Historians value him for reducing the power of the intermediaries between the state and the peasants."
        }
      ],
      quiz: [
        {
          q: "Banda Singh Bahadur met Guru Gobind Singh Ji at:",
          options: ["Anandpur Sahib", "Nanded", "Patna", "Talwandi Sabo"],
          answer: 1,
          explain: "At **Nanded**, in 1708."
        },
        {
          q: "The governor of Sirhind killed in 1710 was:",
          options: ["Zakariya Khan", "Wazir Khan", "Mir Mannu", "Abdus Samad Khan"],
          answer: 1,
          explain: "**Wazir Khan**."
        },
        {
          q: "Banda's capital was:",
          options: ["Lohgarh", "Lahore", "Sirhind", "Amritsar"],
          answer: 0,
          explain: "**Lohgarh**."
        },
        {
          q: "Banda Singh Bahadur was executed in:",
          options: ["1710", "1715", "1716", "1739"],
          answer: 2,
          explain: "He was executed at Delhi in **1716**."
        },
        {
          q: "He was captured at:",
          options: ["Gurdas Nangal", "Chamkaur", "Muktsar", "Samana"],
          answer: 0,
          explain: "At the siege of **Gurdas Nangal** in 1715."
        },
        {
          q: "Which system did he abolish?",
          options: ["Mansabdari", "Zamindari", "Masand", "Jagirdari of the emperor"],
          answer: 1,
          explain: "He abolished the **zamindari** system in the area he held."
        }
      ]
    },
    // ───────────── Part B ─────────────
    // ───────────── 12 ─────────────
    {
      id: "abdus-samad-zakariya-mir-mannu",
      title: "Abdus Samad Khan, Zakariya Khan and Mir Mannu: Relations with the Sikhs",
      section: "Part B",
      summary: "The Mughal governors of Lahore from 1713 to 1753 and their policy towards the Sikhs: repression, a brief compromise, and the Sikhs' survival and growth in spite of it.",
      notes: [
        {
          heading: "Abdus Samad Khan (1713–26)",
          points: [
            "Appointed governor of Lahore after the fall of Banda's power; he captured Banda in 1715.",
            "Followed a policy of severe repression: Sikhs were hunted and many were killed.",
            "Despite this, the Sikhs kept their faith, withdrew to hills and forests, and regrouped."
          ]
        },
        {
          heading: "Zakariya Khan (1726–45)",
          points: [
            "Son of Abdus Samad Khan; he too started with strong measures, including the execution of **Bhai Tara Singh Wan** (1726) and later **Bhai Mani Singh** (1734).",
            "In **1733** he tried conciliation by offering a **jagir** and the title of **Nawab**, accepted by **Kapur Singh**; the jagir was withdrawn after a few years when the arrangement broke down.",
            "In the 1730s the Sikhs organised in two groups, **Buddha Dal** and **Taruna Dal**, and met at Amritsar on festivals.",
            "Persecution resumed and the Sikhs again took to the jungles and hills.",
            "Zakariya Khan's rule ended in 1745, after which the province became unstable, with the invasion of **Nadir Shah (1739)** having weakened Mughal power."
          ]
        },
        {
          heading: "Yahiya Khan and Mir Mannu",
          points: [
            "Under **Yahiya Khan** and his minister **Lakhpat Rai** came the **Chhota Ghallughara** (1746), in which many Sikhs were killed in the Kahnuwan area; the Sikhs recovered quickly.",
            "**Mir Mannu** (Muin-ul-Mulk) was governor from **1748** to **1753**; he used force, but was also pressed by Abdali's attacks.",
            "A saying attributed to the Sikhs of the time, 'Mannu is our sickle and we are his grass; the more he cuts us, the more we grow,' expresses their spirit.",
            "Mir Mannu died in 1753, after which the Punjab fell into confusion and the Sikhs grew stronger."
          ]
        }
      ],
      formulas: [
        "Abdus Samad Khan 1713–26; Zakariya Khan 1726–45; Mir Mannu 1748–53",
        "1726 – Bhai Tara Singh Wan; 1734 – Bhai Mani Singh martyred at Lahore",
        "1733 – offer of the title of Nawab to Kapur Singh",
        "1746 – Chhota Ghallughara"
      ],
      terms: [
        { term: "Nawab Kapur Singh", meaning: "The Sikh leader who **accepted the title of Nawab** in 1733." },
        { term: "Buddha Dal / Taruna Dal", meaning: "The two Sikh groups: the **elders** and the **younger** fighters." },
        { term: "Chhota Ghallughara", meaning: "The 'smaller holocaust' of **1746**, with heavy Sikh losses." },
        { term: "Lakhpat Rai", meaning: "The **minister of Yahiya Khan** linked with the Chhota Ghallughara." },
        { term: "Muin-ul-Mulk", meaning: "The **title of Mir Mannu**, governor of Lahore (1748–53)." }
      ],
      qa: [
        {
          q: "What was the policy of Zakariya Khan towards the Sikhs?",
          a: "It changed between repression and conciliation. He first persecuted them (for example Bhai Tara Singh Wan and Bhai Mani Singh), then offered a jagir and Nawabship in 1733 to win them over, and later resumed persecution when the arrangement failed."
        },
        {
          q: "Why did the persecution of the Sikhs fail?",
          a: "The Sikhs had strong faith, took shelter in the hills and forests, and got support from the common people. The Mughal rulers were also weakened by Nadir Shah's and Abdali's invasions and had to turn their attention elsewhere."
        },
        {
          q: "Write a note on Mir Mannu and the Sikhs.",
          a: "Mir Mannu governed Lahore from 1748 to 1753. He attacked the Sikhs and besieged them at Ram Rauni, but he needed peace to face Abdali. The Sikhs kept growing in strength despite severe repression, and after he died in 1753 conditions favoured them."
        }
      ],
      quiz: [
        {
          q: "Who accepted the title of Nawab from Zakariya Khan?",
          options: ["Jassa Singh Ahluwalia", "Kapur Singh", "Banda Singh", "Charat Singh"],
          answer: 1,
          explain: "**Kapur Singh**."
        },
        {
          q: "Who was the governor of Lahore from 1748 to 1753?",
          options: ["Mir Mannu", "Zakariya Khan", "Abdus Samad Khan", "Yahiya Khan"],
          answer: 0,
          explain: "**Mir Mannu** (Muin-ul-Mulk)."
        },
        {
          q: "The Chhota Ghallughara took place in:",
          options: ["1716", "1739", "1746", "1762"],
          answer: 2,
          explain: "In **1746**; the Vadda Ghallughara was in 1762."
        },
        {
          q: "Bhai Mani Singh was martyred at Lahore in:",
          options: ["1704", "1734", "1748", "1799"],
          answer: 1,
          explain: "In **1734**, in Zakariya Khan's time."
        },
        {
          q: "Zakariya Khan was the son of:",
          options: ["Yahiya Khan", "Wazir Khan", "Abdus Samad Khan", "Mir Mannu"],
          answer: 2,
          explain: "He was the son of **Abdus Samad Khan**."
        },
        {
          q: "The Sikhs' two main groups in the 1730s were:",
          options: ["Singh Sabha and Akali", "Buddha Dal and Taruna Dal", "Nirmala and Udasi", "Sahajdhari and Khalsa"],
          answer: 1,
          explain: "**Buddha Dal** and **Taruna Dal**."
        }
      ]
    },
    // ───────────── 13 ─────────────
    {
      id: "dal-khalsa",
      title: "Rise of the Dal Khalsa and its Mode of Fighting",
      section: "Part B",
      summary: "The formation of the Dal Khalsa in 1748 under Jassa Singh Ahluwalia, its organisation, the Gurmata and rakhi systems, and the guerrilla methods used by the Sikhs.",
      notes: [
        {
          heading: "Formation",
          points: [
            "In **1748**, at Amritsar on Baisakhi, the Sikhs met in a **Sarbat Khalsa** and formed the **Dal Khalsa** under **Jassa Singh Ahluwalia**, as a common army.",
            "The many small bands (jathas) were grouped into larger units that later became the **misls**.",
            "The Dal Khalsa included the Buddha Dal and the Taruna Dal, and met at Amritsar at Baisakhi and Diwali.",
            "The Sikhs built a mud fort, **Ram Rauni** (later rebuilt as Ramgarh), at Amritsar in 1748 as a place of refuge."
          ]
        },
        {
          heading: "Institutions",
          points: [
            "Decisions on important matters were taken by the **Sarbat Khalsa** and made known as **Gurmata** resolutions, passed in the name of the Guru.",
            "Under the **rakhi system**, from 1753, villages paid a share of the produce (about one-fifth in many accounts) in return for Sikh protection from invaders and robbers.",
            "Each chief in time came to hold an area of operation, which prepared the ground for the misl system."
          ]
        },
        {
          heading: "Mode of fighting",
          points: [
            "They used **guerrilla (hit-and-run) tactics**: striking quickly and retreating to jungles, deserts or hills.",
            "Fighters were light-travelling horsemen, using matchlocks, spears and swords, and often carried little baggage.",
            "They attacked the rear of invaders, such as Ahmad Shah Abdali's army, and plundered stragglers.",
            "Local people gave them food and shelter, and women, children and the old were sent to safe places.",
            "Their sense of the Khalsa's mission, discipline and unity in time of danger made them hard to defeat."
          ]
        }
      ],
      formulas: [
        "1748 – formation of the Dal Khalsa at Amritsar under Jassa Singh Ahluwalia",
        "Gurmata – decision of the Sarbat Khalsa",
        "Rakhi system – protection in return for a share of the crop",
        "Fighting method: guerrilla (hit-and-run) tactics"
      ],
      terms: [
        { term: "Dal Khalsa", meaning: "The **combined army of the Sikhs**, formed in 1748." },
        { term: "Sarbat Khalsa", meaning: "The **general assembly** of the Khalsa." },
        { term: "Gurmata", meaning: "A **resolution** passed by the Sarbat Khalsa in the Guru's name." },
        { term: "Rakhi", meaning: "The **system of protection** for which villagers paid a share of the produce." },
        { term: "Jatha", meaning: "A **small band** of Sikh fighters." }
      ],
      qa: [
        {
          q: "How was the Dal Khalsa formed?",
          a: "At Amritsar in 1748 the Sikhs held a Sarbat Khalsa and brought their many small bands into one force, the Dal Khalsa, with Jassa Singh Ahluwalia as leader. It was divided into units that later grew into the misls."
        },
        {
          q: "Explain the rakhi system.",
          a: "In the rakhi system the Sikhs offered protection to villages against invaders and robbers, and in return the villagers paid a share of their produce, usually a fraction of the crop. It increased Sikh income and brought the villages under their influence."
        },
        {
          q: "Describe the mode of fighting of the Dal Khalsa.",
          a: "The Sikhs fought as guerrillas: they struck suddenly, plundered the enemy's baggage or rear, and retreated into forests, deserts or the hills before a large army could react. They used swift horses and light baggage, and the peasantry helped them."
        }
      ],
      quiz: [
        {
          q: "The Dal Khalsa was formed in:",
          options: ["1699", "1748", "1762", "1799"],
          answer: 1,
          explain: "In **1748**."
        },
        {
          q: "The first leader of the Dal Khalsa was:",
          options: ["Charat Singh", "Jassa Singh Ahluwalia", "Ranjit Singh", "Hari Singh Nalwa"],
          answer: 1,
          explain: "**Jassa Singh Ahluwalia**."
        },
        {
          q: "A decision of the Sarbat Khalsa was called:",
          options: ["Hukamnama", "Gurmata", "Farman", "Rahitnama"],
          answer: 1,
          explain: "A **Gurmata**."
        },
        {
          q: "Where did the Dal Khalsa meet on Baisakhi and Diwali?",
          options: ["Delhi", "Lahore", "Amritsar", "Sirhind"],
          answer: 2,
          explain: "At **Amritsar**."
        },
        {
          q: "The rakhi system provided:",
          options: ["Free education", "Protection for a share of produce", "Land to the poor", "Mansabs to nobles"],
          answer: 1,
          explain: "Villages paid the Sikhs for **protection**."
        },
        {
          q: "Which tactic did the Sikhs mainly use?",
          options: ["Siege of cities with elephants", "Guerrilla warfare", "Naval war", "Trench warfare"],
          answer: 1,
          explain: "**Guerrilla (hit-and-run)** warfare."
        }
      ]
    },
    // ───────────── 14 ─────────────
    {
      id: "social-economic-mughal-punjab",
      title: "Social and Economic Conditions of the Punjab under the Mughals",
      section: "Part B",
      summary: "Society, women, religion, education, agriculture, industry and trade in the Punjab during Mughal rule (1526–1752).",
      notes: [
        {
          heading: "Society",
          points: [
            "Society was divided into the **ruling class** (nobles, officials), the **middle class** (merchants, traders, shopkeepers, and professionals) and the **lower class** (peasants, artisans, servants).",
            "Hindus were divided by caste; Muslims included groups of foreign and local origin.",
            "Women faced restrictions; **purdah** was observed by many, and evils such as sati and child marriage persisted. Some women became educated or rose to influence.",
            "The Punjabi people loved fairs, festivals, folk songs and wrestling."
          ]
        },
        {
          heading: "Religion and education",
          points: [
            "Islam was the religion of the rulers, but Hindus, Sikhs and Sufis lived beside them; policy varied from the tolerance of **Akbar** to the strict measures of **Aurangzeb**.",
            "Education was religious: **maktabs** and **madrasas** for Muslims, **pathshalas** for Hindus and Gurmukhi teaching at Sikh places.",
            "Persian was the court language, and Punjabi grew as a language of the people."
          ]
        },
        {
          heading: "Agriculture",
          points: [
            "The main occupation; wheat, rice, sugarcane, cotton and pulses were grown, with irrigation from wells and canals.",
            "Land revenue was the main income of the state; its assessment and collection were eased under **Akbar**, but often harsh under later officials.",
            "Peasants suffered during invasions and famines."
          ]
        },
        {
          heading: "Industry and trade",
          points: [
            "Industries included cotton and woollen textiles, leather goods, metalwork, shipbuilding and carpentry.",
            "**Lahore, Multan, Sirhind and Amritsar** were important trade centres; goods moved along roads like the **Grand Trunk Road** and by river.",
            "Punjab traded with Central Asia, Kabul and the rest of India.",
            "Travellers' inns, called **sarais**, were built along the roads."
          ]
        }
      ],
      formulas: [
        "Classes: ruling, middle, lower",
        "Education: maktabs and madrasas; pathshalas; Gurmukhi at Sikh centres",
        "Trade centres: Lahore, Multan, Sirhind, Amritsar",
        "Main crops: wheat, rice, sugarcane, cotton"
      ],
      terms: [
        { term: "Purdah", meaning: "The practice of **veiling or seclusion of women**." },
        { term: "Maktab", meaning: "An **elementary Muslim school**." },
        { term: "Sarai", meaning: "A **roadside inn** for travellers." },
        { term: "Land revenue", meaning: "The **main tax** on farmland paid to the state." },
        { term: "Grand Trunk Road", meaning: "The **great road** crossing north India through Punjab." }
      ],
      qa: [
        {
          q: "Describe the condition of women in the Punjab under the Mughals.",
          a: "Women generally had fewer rights than men; purdah was common among upper-class Muslims and some Hindus, and evils like sati and child marriage continued. The Sikh Gurus spoke strongly against such practices and for women's dignity."
        },
        {
          q: "What were the main industries of the Punjab in the Mughal period?",
          a: "Textiles (cotton and wool), leather work, metalwork, carpentry and shipbuilding were important. Lahore, Multan and Sirhind were centres of crafts and trade."
        },
        {
          q: "What was the importance of agriculture in the Punjab economy?",
          a: "Most people depended on farming, and land revenue was the main income of the state. The fertile plains produced wheat, rice, sugarcane and cotton, in part for trade."
        }
      ],
      quiz: [
        {
          q: "Which ruler is known for his tolerant policy?",
          options: ["Akbar", "Aurangzeb", "Nadir Shah", "Ibrahim Lodi"],
          answer: 0,
          explain: "**Akbar**."
        },
        {
          q: "A maktab was:",
          options: ["A trade guild", "An elementary Muslim school", "A tax", "A type of fort"],
          answer: 1,
          explain: "An **elementary school**."
        },
        {
          q: "Which road was important for trade across Punjab?",
          options: ["Silk Route in Gujarat", "Grand Trunk Road", "Konkan Road", "Nilgiri Road"],
          answer: 1,
          explain: "The **Grand Trunk Road**."
        },
        {
          q: "The main source of state income was:",
          options: ["Customs on sea trade", "Land revenue", "Mining royalty", "Lotteries"],
          answer: 1,
          explain: "**Land revenue**."
        },
        {
          q: "Which was a major trade city of Punjab?",
          options: ["Surat", "Lahore", "Calicut", "Madurai"],
          answer: 1,
          explain: "**Lahore**."
        },
        {
          q: "The lowest class in society mostly consisted of:",
          options: ["Nobles", "Peasants and artisans", "Court poets", "Governors"],
          answer: 1,
          explain: "Peasants, artisans and servants."
        }
      ]
    },
    // ───────────── 15 ─────────────
    {
      id: "ahmad-shah-abdali",
      title: "Invasions of Ahmad Shah Abdali and the End of Mughal Rule in the Punjab",
      section: "Part B",
      summary: "Ahmad Shah Abdali's repeated invasions between 1747 and 1767, the Sikh response including the Vadda Ghallughara of 1762, and the collapse of Mughal authority in Punjab.",
      notes: [
        {
          heading: "Background",
          points: [
            "After **Nadir Shah's invasion of 1739**, the Mughal Empire was weak; the Punjab governors were left to fend for themselves.",
            "**Ahmad Shah Abdali** (also called Durrani) founded the Afghan state at Kandahar in 1747 after Nadir Shah's death.",
            "He invaded Punjab for wealth and to extend his rule; historians usually count about **eight** invasions between **1747/48 and 1767**, though some give different numbers."
          ]
        },
        {
          heading: "Main events",
          points: [
            "In **1748** he was checked at **Manupur** by Mughal forces in which Mir Mannu (Muin-ul-Mulk) took a leading part, and Mannu became governor of Lahore; after Mannu's death in 1753 Abdali's hold on the Punjab grew.",
            "Punjab fell into confusion after **1753**; Abdali's governors faced Sikh attacks.",
            "In 1757 his son **Timur Shah** was governor of Lahore; in the same year his general **Jahan Khan** desecrated Harmandir Sahib, and **Baba Deep Singh Ji** was martyred defending it.",
            "In 1758 the Sikhs and Marathas drove Timur Shah out of Lahore; in **1761**, Abdali crushed the Marathas at the **Third Battle of Panipat**.",
            "On his return, Sikh attacks on his baggage and treasure irritated him."
          ]
        },
        {
          heading: "Vadda Ghallughara (1762)",
          points: [
            "In **February 1762** Abdali surprised a large Sikh gathering, with their families, near **Kup** and **Rahira** (in Malwa), killing many thousands in the **Vadda Ghallughara** (the 'great holocaust').",
            "The Sikhs reassembled quickly and at Diwali 1762 he again damaged Harmandir Sahib, but they rebuilt.",
            "The tragedy did not break the Sikh will; it strengthened their resolve."
          ]
        },
        {
          heading: "End of Mughal rule",
          points: [
            "In **1764** the Sikhs captured **Sirhind** and killed its governor **Zain Khan**.",
            "In **1765** the Sikh chiefs took **Lahore** and issued coins in the name of the Gurus.",
            "Abdali's last invasion was in **1767**; he could not hold the Punjab and died in 1772.",
            "By 1767 Mughal rule in the Punjab had ended in practice, and Sikh chiefs ruled most of the region."
          ]
        }
      ],
      formulas: [
        "1739 – Nadir Shah's invasion of India",
        "1747/48–1767 – invasions of Ahmad Shah Abdali (usually counted as eight)",
        "1757 – Harmandir Sahib desecrated; Baba Deep Singh martyred",
        "1761 – Third Battle of Panipat; Feb 1762 – Vadda Ghallughara",
        "1764 – Sirhind taken; 1765 – Lahore taken by the Sikhs"
      ],
      terms: [
        { term: "Vadda Ghallughara", meaning: "The **great holocaust** of February 1762, with heavy Sikh losses." },
        { term: "Ahmad Shah Abdali", meaning: "The **founder of the Afghan Durrani empire**, who repeatedly invaded India." },
        { term: "Baba Deep Singh Ji", meaning: "The Sikh **martyr who fell defending Harmandir Sahib** in 1757." },
        { term: "Panipat (1761)", meaning: "The battle where **Abdali defeated the Marathas**." },
        { term: "Zain Khan", meaning: "The **Afghan governor of Sirhind** killed by the Sikhs in 1764." }
      ],
      qa: [
        {
          q: "Describe the Vadda Ghallughara.",
          a: "In February 1762, Ahmad Shah Abdali, learning that a great number of Sikhs with their families were moving in Malwa, surprised them near Kup and Rahira. Many thousand Sikhs were killed. The Sikhs recovered quickly and continued their struggle."
        },
        {
          q: "What were the effects of Abdali's invasions on the Punjab?",
          a: "They ended the little remaining Mughal authority, caused destruction and disorder, and weakened the old rulers. At the same time they helped the Sikhs, who fought and gradually took over large areas."
        },
        {
          q: "How did Mughal rule in the Punjab come to an end?",
          a: "After Nadir Shah's invasion (1739) and Abdali's attacks, the Mughal governors were weakened. After Mir Mannu's death in 1753 there was confusion, and the Sikhs conquered Sirhind in 1764 and Lahore in 1765, ending Mughal rule in practice."
        }
      ],
      quiz: [
        {
          q: "The Vadda Ghallughara took place in:",
          options: ["1746", "1757", "1762", "1799"],
          answer: 2,
          explain: "In **1762**."
        },
        {
          q: "The Third Battle of Panipat (1761) was fought between Abdali and the:",
          options: ["Sikhs", "Marathas", "Rajputs", "British"],
          answer: 1,
          explain: "The **Marathas**."
        },
        {
          q: "Who died defending Harmandir Sahib in 1757?",
          options: ["Baba Deep Singh Ji", "Bhai Mani Singh Ji", "Banda Singh", "Nawab Kapur Singh"],
          answer: 0,
          explain: "**Baba Deep Singh Ji**."
        },
        {
          q: "Sirhind was captured by the Sikhs in:",
          options: ["1710", "1764", "1809", "1849"],
          answer: 1,
          explain: "In **1764**, when Zain Khan was killed."
        },
        {
          q: "Nadir Shah invaded India in:",
          options: ["1526", "1699", "1739", "1757"],
          answer: 2,
          explain: "In **1739**."
        },
        {
          q: "Abdali's invasions are usually counted from 1747/48 to:",
          options: ["1757", "1762", "1767", "1790"],
          answer: 2,
          explain: "To **1767**."
        }
      ]
    },
    // ───────────── 16 ─────────────
    {
      id: "sikh-misls",
      title: "Origin and Growth of the Sikh Misls",
      section: "Part B",
      summary: "The twelve Sikh misls of the later eighteenth century, their organisation, main sardars and territories, and the reasons they were unable to stay united.",
      notes: [
        {
          heading: "Origin and number",
          points: [
            "**Misl** means 'equal' or 'file'; each misl was a band of Sikh fighters under a chosen sardar.",
            "The misls grew out of the jathas of the Dal Khalsa in the 1740s and 1750s; by the 1760s they held territory.",
            "The number is usually given as **twelve** (eleven misls of the Dal Khalsa plus the Phulkian), but writers differ about the list and the count."
          ]
        },
        {
          heading: "Main misls and leaders",
          points: [
            "**Ahluwalia** – Jassa Singh Ahluwalia (Kapurthala); **Ramgarhia** – Jassa Singh Ramgarhia.",
            "**Bhangi** – Hari Singh, and later Ganda Singh (Lahore, Amritsar); **Kanhaiya** – Jai Singh Kanhaiya.",
            "**Sukerchakia** – Charat Singh and **Mahan Singh**; this misl produced **Ranjit Singh**.",
            "**Singhpuria (Faizalpuria)** – Nawab Kapur Singh; also the **Dallewalia, Nakai, Karorsinghia, Nishanwalia** and **Shaheed** misls.",
            "The **Phulkian** chiefs (Patiala, Nabha, Jind) held territory in the Malwa region and are sometimes treated separately."
          ]
        },
        {
          heading: "Organisation",
          points: [
            "Each misl was led by a sardar chosen for his bravery; members joined and could leave freely.",
            "All members were equal and shared the booty; the lands conquered were divided among the chiefs.",
            "In danger, the misls met at Amritsar as the Sarbat Khalsa and acted together under the Gurmata.",
            "Sardars ruled with the help of a simple system of revenue, partly through the rakhi, and by granting jagirs to their followers."
          ]
        },
        {
          heading: "Weaknesses and end",
          points: [
            "After Abdali's threat faded, the sardars quarrelled with each other over territory and honour.",
            "They lacked a central government, a common army and a strong ruler.",
            "These weaknesses allowed Ranjit Singh of the Sukerchakia misl to bring most of the misls under his control from the 1790s."
          ]
        }
      ],
      formulas: [
        "Misl = equal / file; twelve misls is the usual count",
        "Sukerchakia misl → Charat Singh, Mahan Singh, Ranjit Singh",
        "Ahluwalia – Jassa Singh Ahluwalia; Ramgarhia – Jassa Singh Ramgarhia",
        "Phulkian – Malwa (Patiala, Nabha, Jind)"
      ],
      terms: [
        { term: "Misl", meaning: "A **Sikh confederacy** under a sardar; the word means 'equal'." },
        { term: "Sardar", meaning: "The **chief** of a misl." },
        { term: "Sukerchakia", meaning: "The misl of **Ranjit Singh's family**." },
        { term: "Phulkian", meaning: "The Sikh chiefs of the **Malwa region** descended from Phul." },
        { term: "Jagir", meaning: "A **grant of land revenue** for service." }
      ],
      qa: [
        {
          q: "What is meant by a misl? How many misls were there?",
          a: "A misl was a confederacy of Sikh fighters under a chosen sardar, formed out of the jathas of the Dal Khalsa. Twelve is the usual figure, though writers differ on how to count them, especially the Phulkian chiefs."
        },
        {
          q: "Describe the organisation of the misls.",
          a: "Each misl had a chosen sardar and members who were equal, shared the booty and could leave at will. The conquered land was divided among chiefs, who gave jagirs to followers. In emergencies they met together as the Sarbat Khalsa and passed Gurmatas."
        },
        {
          q: "Why did the misls decline?",
          a: "Without a central ruler, the sardars quarrelled over lands and honour, and there was no common army. Ranjit Singh, a strong leader from the Sukerchakia misl, took advantage of this to bring them under one kingdom."
        }
      ],
      quiz: [
        {
          q: "The word misl means:",
          options: ["Fort", "Equal", "Army", "Treaty"],
          answer: 1,
          explain: "It means **equal** (or file)."
        },
        {
          q: "Ranjit Singh belonged to the:",
          options: ["Bhangi misl", "Kanhaiya misl", "Sukerchakia misl", "Ahluwalia misl"],
          answer: 2,
          explain: "The **Sukerchakia** misl."
        },
        {
          q: "Who led the Ahluwalia misl?",
          options: ["Jassa Singh Ahluwalia", "Charat Singh", "Jai Singh", "Hari Singh Bhangi"],
          answer: 0,
          explain: "**Jassa Singh Ahluwalia**."
        },
        {
          q: "How many misls are usually counted?",
          options: ["Five", "Twelve", "Twenty", "Thirty"],
          answer: 1,
          explain: "Usually **twelve**."
        },
        {
          q: "Which misl controlled Lahore and Amritsar before Ranjit Singh?",
          options: ["Bhangi misl", "Nakai misl", "Phulkian misl", "Shaheed misl"],
          answer: 0,
          explain: "The **Bhangi** misl."
        },
        {
          q: "Ranjit Singh's father was:",
          options: ["Charat Singh", "Mahan Singh", "Jassa Singh", "Jai Singh"],
          answer: 1,
          explain: "**Mahan Singh**."
        }
      ]
    },
    // ───────────── 17 ─────────────
    {
      id: "ranjit-singh-conquests",
      title: "Maharaja Ranjit Singh's Career and Conquests",
      section: "Part B",
      summary: "The rise of Ranjit Singh from chief of the Sukerchakia misl to Maharaja of the Punjab, his conquests from Lahore (1799) to Peshawar (1834), and the extent of his kingdom.",
      notes: [
        {
          heading: "Early career",
          points: [
            "Born in **1780** at Gujranwala; his father, Mahan Singh, died in 1790, and Ranjit Singh took charge of the Sukerchakia misl in the early 1790s.",
            "In **1799** he captured **Lahore** from the Bhangi chiefs; the people of the city supported him.",
            "He took **Amritsar** in **1802** and was formally recognised as Maharaja in **1801**, according to a tradition of a ceremony at Lahore.",
            "He then brought many misls under his control by conquest and marriage alliances."
          ]
        },
        {
          heading: "Main conquests",
          points: [
            "**Treaty of Amritsar, 1809**, with the British fixed the Sutlej as his southern limit and turned him north-west.",
            "**Kangra** (1809), **Attock** (1813), **Multan** (1818), **Kashmir** (1819), **Dera Ghazi Khan, Dera Ismail Khan** (about 1820–21), and **Peshawar** (annexed 1834).",
            "He also took the Kohinoor diamond from Shah Shuja in 1813.",
            "His generals included **Hari Singh Nalwa, Misr Diwan Chand, Dewan Mohkam Chand** and the Dogra **Zorawar Singh**, who conquered Ladakh in the 1830s."
          ]
        },
        {
          heading: "Extent and death",
          points: [
            "His kingdom extended from the Sutlej in the south-east to the Khyber and the Karakoram in the north-west, and from Kashmir in the north to Multan in the south-west.",
            "He ruled as the Sarkar-i-Khalsa and did not take the title of Guru or king for himself; coins were struck in the Guru's name.",
            "He died on **27 June 1839**, and his empire fell apart within ten years."
          ]
        }
      ],
      formulas: [
        "1780 – birth at Gujranwala; 1799 – Lahore; 1801 – title of Maharaja; 1802 – Amritsar",
        "1809 – Treaty of Amritsar, Kangra; 1813 – Attock",
        "1818 – Multan; 1819 – Kashmir; 1834 – Peshawar annexed",
        "1839 – death of Ranjit Singh"
      ],
      terms: [
        { term: "Sarkar-i-Khalsa", meaning: "The **name of Ranjit Singh's state**." },
        { term: "Hari Singh Nalwa", meaning: "The **great Sikh general** who governed Kashmir and Peshawar." },
        { term: "Kohinoor", meaning: "The **famous diamond** taken from Shah Shuja in 1813." },
        { term: "Multan", meaning: "The **city conquered in 1818** after a long siege." },
        { term: "Zorawar Singh", meaning: "The **Dogra general** who conquered Ladakh." }
      ],
      qa: [
        {
          q: "How did Ranjit Singh capture Lahore in 1799?",
          a: "Lahore was ruled by the weak Bhangi chiefs, who were disliked by the citizens. The leading people of Lahore invited Ranjit Singh, who attacked and took the city in 1799. Lahore became his capital."
        },
        {
          q: "Describe the conquests of Ranjit Singh to the north-west of Punjab.",
          a: "He took Attock (1813), Multan (1818), Kashmir (1819) and Peshawar, which was made tributary and annexed in 1834. He also won Dera Ghazi Khan and Dera Ismail Khan. This ended Afghan control of these areas."
        },
        {
          q: "What was the extent of the kingdom of Ranjit Singh at his death?",
          a: "It stretched from the Sutlej in the east to the Khyber in the west, and from Kashmir and Ladakh in the north to Multan and Sind's border in the south-west. It was the largest state in India at that time not under the British."
        }
      ],
      quiz: [
        {
          q: "Ranjit Singh captured Lahore in:",
          options: ["1780", "1799", "1809", "1818"],
          answer: 1,
          explain: "In **1799**."
        },
        {
          q: "Kashmir was conquered in:",
          options: ["1809", "1813", "1819", "1834"],
          answer: 2,
          explain: "In **1819**."
        },
        {
          q: "The Treaty of Amritsar was signed in:",
          options: ["1799", "1809", "1839", "1846"],
          answer: 1,
          explain: "In **1809**."
        },
        {
          q: "Ranjit Singh died in:",
          options: ["1799", "1819", "1839", "1849"],
          answer: 2,
          explain: "In **1839**."
        },
        {
          q: "Which general is known as the hero of Peshawar and Kashmir?",
          options: ["Hari Singh Nalwa", "Lehna Singh", "Tej Singh", "Lal Singh"],
          answer: 0,
          explain: "**Hari Singh Nalwa**."
        },
        {
          q: "Multan was captured in:",
          options: ["1802", "1813", "1818", "1834"],
          answer: 2,
          explain: "In **1818**."
        }
      ]
    },
    // ───────────── 18 ─────────────
    {
      id: "anglo-sikh-relations-1800-1839",
      title: "Anglo-Sikh Relations (1800–1839)",
      section: "Part B",
      summary: "Relations between Ranjit Singh and the British East India Company: the Treaty of Amritsar (1809), later disputes over Sindh and Ferozepur, and the Tripartite Treaty of 1838.",
      notes: [
        {
          heading: "Early contacts",
          points: [
            "By 1800 the British had pushed north in India and Ranjit Singh was rising in the Punjab; both avoided open conflict.",
            "In 1805–06 the Maratha chief **Jaswant Rao Holkar** came into the Punjab, pursued by the British; Ranjit Singh refused to help him, and in **1806** the British signed a treaty with him and Holkar left.",
            "Ranjit Singh wished to bring the Sikh chiefs south of the Sutlej (the Cis-Sutlej states) under his rule; he made expeditions there in 1806 and 1807."
          ]
        },
        {
          heading: "Treaty of Amritsar (1809)",
          points: [
            "Fear of a French (Napoleonic) threat led the British governor-general, **Lord Minto**, to send **Charles Metcalfe** to Lahore in 1808.",
            "The British also did not want Ranjit Singh to unite the Sikh states near Delhi.",
            "By the **Treaty of Amritsar (25 April 1809)** the two sides promised perpetual friendship; the **Sutlej** became the boundary, the British would not interfere north of it, and Ranjit Singh would not extend his rule south of it.",
            "The treaty took the Cis-Sutlej Sikh chiefs under British protection."
          ]
        },
        {
          heading: "Later relations",
          points: [
            "Ranjit Singh and the British observed the treaty to the end of his life.",
            "He met Governor-General **Lord William Bentinck** at **Ropar in 1831**, and a treaty in 1832 opened the Indus for British trade.",
            "In 1835 the British took **Ferozepur**, which Ranjit Singh had wished to hold; he did not make an issue of it.",
            "In **1838** the British, Ranjit Singh and the exiled Shah Shuja made the **Tripartite Treaty**, aimed at placing Shah Shuja on the throne of Afghanistan; Ranjit Singh refused to let British troops march through the Punjab, though he helped with Sikh forces."
          ]
        },
        {
          heading: "Assessment",
          points: [
            "Ranjit Singh was realistic: he knew British military power and preferred to expand to the north-west.",
            "Historians debate whether he could have resisted the British, but most agree that his policy kept the Punjab independent during his lifetime."
          ]
        }
      ],
      formulas: [
        "1806 – treaty with Holkar and the British at Lahore",
        "1809 – Treaty of Amritsar (Charles Metcalfe; Lord Minto)",
        "1831 – Ropar meeting with Bentinck",
        "1838 – Tripartite Treaty (British, Ranjit Singh, Shah Shuja)"
      ],
      terms: [
        { term: "Cis-Sutlej states", meaning: "The Sikh states **south of the Sutlej**, which came under British protection." },
        { term: "Charles Metcalfe", meaning: "The **British envoy** who negotiated the Treaty of Amritsar." },
        { term: "Tripartite Treaty", meaning: "The **1838 agreement** between the British, Ranjit Singh and Shah Shuja." },
        { term: "Shah Shuja", meaning: "The **exiled ruler of Afghanistan** whom the British sought to restore." },
        { term: "Ropar", meaning: "The **place where Ranjit Singh met Lord Bentinck** in 1831." }
      ],
      qa: [
        {
          q: "Why was the Treaty of Amritsar signed in 1809?",
          a: "The British feared a French invasion through the north-west and wanted a friendly Punjab, and they also wanted to protect the Cis-Sutlej chiefs near Delhi. Ranjit Singh realised he could not fight the British and wanted to be free to expand elsewhere. Both sides therefore agreed to the Sutlej as boundary."
        },
        {
          q: "What were the main terms of the Treaty of Amritsar?",
          a: "There would be perpetual friendship; Ranjit Singh would not expand or interfere south of the Sutlej; the British would not interfere north of it; the Cis-Sutlej chiefs came under British protection."
        },
        {
          q: "What was the Tripartite Treaty of 1838?",
          a: "It was an agreement between the British, Ranjit Singh and Shah Shuja to restore Shah Shuja to the throne of Afghanistan. Ranjit Singh gave his help but did not allow the British to march their army across the Punjab."
        }
      ],
      quiz: [
        {
          q: "Who negotiated the Treaty of Amritsar for the British?",
          options: ["Lord Dalhousie", "Charles Metcalfe", "Lord Hardinge", "Henry Lawrence"],
          answer: 1,
          explain: "**Charles Metcalfe**."
        },
        {
          q: "The treaty made the boundary between the two powers the river:",
          options: ["Beas", "Ravi", "Sutlej", "Jhelum"],
          answer: 2,
          explain: "The **Sutlej**."
        },
        {
          q: "The Governor-General who sent Metcalfe was:",
          options: ["Lord Minto", "Lord Cornwallis", "Lord Auckland", "Lord Ripon"],
          answer: 0,
          explain: "**Lord Minto**."
        },
        {
          q: "The Tripartite Treaty was signed in:",
          options: ["1809", "1831", "1838", "1845"],
          answer: 2,
          explain: "In **1838**."
        },
        {
          q: "At Ropar in 1831 Ranjit Singh met:",
          options: ["Lord William Bentinck", "Lord Dalhousie", "Lord Minto", "Lord Hardinge"],
          answer: 0,
          explain: "**Lord William Bentinck**."
        },
        {
          q: "The Cis-Sutlej states lay:",
          options: ["North of the Sutlej", "South of the Sutlej", "West of the Indus", "In Kashmir"],
          answer: 1,
          explain: "**South** of the Sutlej."
        }
      ]
    },
    // ───────────── 19 ─────────────
    {
      id: "afghanistan-and-frontier-policy",
      title: "Ranjit Singh's Relations with Afghanistan and North-West Frontier Policy",
      section: "Part B",
      summary: "Ranjit Singh's struggle with the Afghans for Attock, Multan, Kashmir and Peshawar, the battles of Naushera and Jamrud, and how he governed the turbulent frontier.",
      notes: [
        {
          heading: "Afghan background",
          points: [
            "The Afghan rulers (Durranis) had claimed Punjab and Kashmir since Abdali. By 1800 they were weak and divided, with Shah Zaman, Shah Shuja and the **Barakzai** brothers disputing the throne.",
            "Ranjit Singh used these quarrels to take over areas on the Indus and beyond."
          ]
        },
        {
          heading: "Main events",
          points: [
            "**Attock** (1813): the Sikhs won the Battle of **Haidru** against the Barakzai minister **Fateh Khan**; Ranjit Singh also obtained the **Kohinoor** diamond from Shah Shuja around this time.",
            "**Multan** (1818) and **Kashmir** (1819) were taken from Afghan governors.",
            "**Peshawar**: after being made a tributary, it was the scene of the Battle of **Naushera (1823)**, where the Sikhs defeated **Azim Khan**; Ranjit Singh kept it as a tributary, and annexed it in **1834**.",
            "In **April 1837**, in the **Battle of Jamrud**, the Afghans under Dost Muhammad's son **Akbar Khan** were held back; Sikh general **Hari Singh Nalwa** was killed, although the Sikhs kept Jamrud."
          ]
        },
        {
          heading: "Frontier policy",
          points: [
            "The north-west had fierce tribes such as the Yusufzais and the Khattaks, who were hard to rule by ordinary methods.",
            "Ranjit Singh built forts, such as at **Jamrud, Attock and Khairabad**, and kept strong garrisons.",
            "Strong governors such as **Hari Singh Nalwa** and, later, the European officer **Avitabile** ruled with firmness and harsh punishment.",
            "He took tribute and used marriage and favours to win over some chiefs.",
            "He did not interfere with the people's customs, but the region remained troubled and costly to hold."
          ]
        }
      ],
      formulas: [
        "1813 – Battle of Haidru; Attock",
        "1818 – Multan; 1819 – Kashmir",
        "1823 – Battle of Naushera; 1834 – Peshawar annexed",
        "1837 – Battle of Jamrud; death of Hari Singh Nalwa"
      ],
      terms: [
        { term: "Barakzai", meaning: "The **Afghan clan** (Fateh Khan, Dost Muhammad) who rose after the Durranis." },
        { term: "Naushera", meaning: "The **1823 battle** against Azim Khan near Peshawar." },
        { term: "Jamrud", meaning: "The **fort and battlefield** near the Khyber where Hari Singh Nalwa fell." },
        { term: "Tributary", meaning: "A ruler who **pays an annual sum** to a stronger power." },
        { term: "Avitabile", meaning: "A **European officer** who governed Peshawar." }
      ],
      qa: [
        {
          q: "Describe the Battle of Jamrud (1837).",
          a: "In 1837 Dost Muhammad's son Akbar Khan attacked the Sikh fort of Jamrud, at the mouth of the Khyber. The Sikhs under Hari Singh Nalwa fought bravely, but Hari Singh was killed. The Afghans withdrew without capturing the fort."
        },
        {
          q: "Why did Ranjit Singh wish to conquer Peshawar?",
          a: "It controlled the approach to the Khyber Pass and the invasion route into the Punjab, and was a rich trading city. Holding it gave him a strong frontier and ended Afghan interference."
        },
        {
          q: "Explain the north-west frontier policy of Ranjit Singh.",
          a: "He built forts at key points and kept garrisons, appointed strong governors, collected tribute from tribal areas and took firm action when they rebelled. The region remained restless and cost much to hold, but it protected the Punjab."
        }
      ],
      quiz: [
        {
          q: "The Battle of Naushera was fought in:",
          options: ["1813", "1823", "1834", "1837"],
          answer: 1,
          explain: "In **1823**."
        },
        {
          q: "Hari Singh Nalwa was killed at:",
          options: ["Jamrud", "Multan", "Attock", "Sobraon"],
          answer: 0,
          explain: "At **Jamrud**, in 1837."
        },
        {
          q: "Peshawar was annexed by Ranjit Singh in:",
          options: ["1819", "1823", "1834", "1839"],
          answer: 2,
          explain: "In **1834**."
        },
        {
          q: "The Afghan leader at Naushera was:",
          options: ["Azim Khan", "Zaman Shah", "Timur Shah", "Shah Shuja"],
          answer: 0,
          explain: "**Azim Khan**."
        },
        {
          q: "Which Afghan clan dominated after the Durranis?",
          options: ["Yusufzai", "Barakzai", "Khattak", "Ghilzai-Mughal"],
          answer: 1,
          explain: "The **Barakzai**."
        },
        {
          q: "The Kohinoor was obtained from:",
          options: ["Dost Muhammad", "Shah Shuja", "Timur Shah", "Fateh Khan"],
          answer: 1,
          explain: "From **Shah Shuja**, in 1813."
        }
      ]
    },
    // ───────────── 20 ─────────────
    {
      id: "ranjit-singh-administration",
      title: "Civil and Military Administration of Maharaja Ranjit Singh",
      section: "Part B",
      summary: "How Ranjit Singh governed: the central and provincial administration, the revenue and justice systems, and the reorganisation of the Sikh army on modern lines.",
      notes: [
        {
          heading: "Central and provincial government",
          points: [
            "The **Maharaja** was the head of the state and ruled in the name of the Khalsa (**Sarkar-i-Khalsa**); he took the advice of ministers but made the final decisions.",
            "Important ministers included the Prime Minister (Wazir), the Foreign Minister (**Fakir Azizuddin**), and the Finance and Revenue officers; the court included Hindus, Muslims and Sikhs.",
            "The kingdom was divided into provinces (**subas**) like Lahore, Multan, Kashmir and Peshawar, each under a **nazim**; below were parganas and villages, led by **kardars**.",
            "Village administration was left largely to the panchayats."
          ]
        },
        {
          heading: "Revenue and justice",
          points: [
            "Land revenue was the main source of income, usually fixed at about **one-third to one-half** of the produce, collected in kind or cash, by methods such as sharing the crop (**batai**), estimate (**kankut**) and contract (**ijara**).",
            "Other income came from customs, tributes and fines.",
            "Justice was simple and swift: village panchayats decided local cases, with **adalats** and **qazis** and the courts of the nazim in towns; the Maharaja heard appeals.",
            "Punishments were usually fines rather than death; no written code existed."
          ]
        },
        {
          heading: "Military reforms",
          points: [
            "Ranjit Singh saw the British army and reorganised his own on European lines, with the help of foreign officers such as **Ventura, Allard, Court and Avitabile**.",
            "The **Fauj-i-Ain** was the regular army (infantry, cavalry, artillery), with drill, uniform and regular pay; **Fauj-i-Khas** was the model brigade.",
            "The **Fauj-i-Be-Qawaid** was the irregular force, including the jagirdar horsemen (**Ghorchara**) and the Akalis.",
            "He set up arsenals and cannon foundries at Lahore and Amritsar.",
            "Strength came from a strong army and good pay, but after his death it went out of control."
          ]
        }
      ],
      formulas: [
        "Provinces (subas): Lahore, Multan, Kashmir, Peshawar – under nazims",
        "Land revenue: about 1/3 to 1/2 of produce; methods batai, kankut, ijara",
        "Army: Fauj-i-Ain (regular), Fauj-i-Be-Qawaid (irregular)",
        "European officers: Ventura, Allard, Court, Avitabile"
      ],
      terms: [
        { term: "Nazim", meaning: "The **governor of a province**." },
        { term: "Kardar", meaning: "The **local revenue and law officer** of a district." },
        { term: "Fauj-i-Ain", meaning: "The **regular, drilled army**." },
        { term: "Batai", meaning: "A system of **dividing the crop** between the state and the cultivator." },
        { term: "Ghorchara", meaning: "The **irregular cavalry** raised by jagirdars." }
      ],
      qa: [
        {
          q: "Describe the system of land revenue under Ranjit Singh.",
          a: "Land revenue was the main income. The state took about one-third to one-half of the produce, assessed by methods like batai (sharing), kankut (estimate) or ijara (contract), and collected by kardars. Peasants were generally treated with care, though contractors sometimes oppressed them."
        },
        {
          q: "What was the judicial system of Ranjit Singh?",
          a: "It was simple, with village panchayats for local cases, adalats and qazis in towns, and the Maharaja as the highest court. Punishments were mostly fines, and justice was prompt, though there was no written code."
        },
        {
          q: "How did Ranjit Singh modernise his army?",
          a: "He hired European officers like Ventura and Allard to train the troops in drill and tactics, set up the regular Fauj-i-Ain, introduced uniforms and regular pay, and established foundries for cannon and weapons at Lahore and Amritsar."
        }
      ],
      quiz: [
        {
          q: "The governor of a province was called:",
          options: ["Kardar", "Nazim", "Qazi", "Sardar"],
          answer: 1,
          explain: "A **nazim**."
        },
        {
          q: "The regular army was called:",
          options: ["Fauj-i-Ain", "Dal Khalsa", "Ghorchara", "Buddha Dal"],
          answer: 0,
          explain: "**Fauj-i-Ain**."
        },
        {
          q: "Who was Ranjit Singh's foreign minister?",
          options: ["Dhian Singh", "Fakir Azizuddin", "Hari Singh Nalwa", "Lal Singh"],
          answer: 1,
          explain: "**Fakir Azizuddin**."
        },
        {
          q: "Which was a European officer in Ranjit Singh's army?",
          options: ["Allard", "Metcalfe", "Lawrence", "Hardinge"],
          answer: 0,
          explain: "**Allard** (a Frenchman); Metcalfe, Lawrence and Hardinge were British officials."
        },
        {
          q: "Batai refers to:",
          options: ["Court fee", "Sharing of the crop", "A military rank", "A kind of coin"],
          answer: 1,
          explain: "Sharing the **crop** between state and cultivator."
        },
        {
          q: "Village affairs were largely managed by:",
          options: ["Nazims", "Panchayats", "European officers", "Jagirdars alone"],
          answer: 1,
          explain: "By **panchayats**."
        }
      ]
    },
    // ───────────── 21 ─────────────
    {
      id: "ranjit-singh-personality",
      title: "Character and Personality of Maharaja Ranjit Singh",
      section: "Part B",
      summary: "An assessment of Ranjit Singh as soldier, statesman and ruler: his courage, tolerance and practical sense, and his limitations.",
      notes: [
        {
          heading: "Personal qualities",
          points: [
            "He lost the sight of one eye in childhood after smallpox, and was not formally educated, but he had a sharp memory and sound judgement.",
            "He was brave and energetic, a good horseman, and kept close to his soldiers.",
            "He was simple in his habits, easy to approach, and generous in rewarding service.",
            "He was a shrewd judge of men and chose his generals and ministers by ability."
          ]
        },
        {
          heading: "Religious tolerance",
          points: [
            "Though a devout Sikh, he respected all religions; gifts were made to gurdwaras (including gilding of Harmandir Sahib), temples and mosques.",
            "He employed Hindus, Muslims and Sikhs in high positions, such as Fakir Azizuddin, the Dogras and Diwan Mohkam Chand.",
            "He did not force any religion on others."
          ]
        },
        {
          heading: "As ruler and general",
          points: [
            "He united the Sikh misls and built a kingdom, and kept peace with the British.",
            "He was a skilled general, but he preferred to win by diplomacy, bargaining and surprise.",
            "He was wise in treating defeated opponents leniently, often giving them jagirs."
          ]
        },
        {
          heading: "Limitations",
          points: [
            "The state depended on his personality; he built few strong institutions.",
            "He did not train a capable successor or settle the succession in advance.",
            "Court factions, especially the Dogras and Sandhawalias, grew powerful.",
            "After his death in 1839 the kingdom rapidly weakened."
          ]
        }
      ],
      formulas: [
        "1780–1839 – life span of Maharaja Ranjit Singh",
        "Called 'Sher-e-Punjab' (Lion of the Punjab)",
        "Ministers: Fakir Azizuddin, Dhian Singh (Dogra), Diwan Mohkam Chand",
        "Limitation: no strong successor, factional court"
      ],
      terms: [
        { term: "Sher-e-Punjab", meaning: "The **Lion of the Punjab**, Ranjit Singh's popular title." },
        { term: "Secular policy", meaning: "**Equal respect** for all religions in governing." },
        { term: "Diplomacy", meaning: "Settling matters by **negotiation** rather than war." },
        { term: "Succession", meaning: "The **choice of the next ruler**." },
        { term: "Faction", meaning: "A **rival group** at court." }
      ],
      qa: [
        {
          q: "Write a note on the religious policy of Ranjit Singh.",
          a: "Ranjit Singh was a devout Sikh but treated all religions with respect. He gave grants to gurdwaras, temples and mosques, employed Hindus, Muslims and Sikhs at high posts, and did not make anyone give up their religion."
        },
        {
          q: "Why is Ranjit Singh called a great statesman?",
          a: "He united the Sikh chiefs, built a strong state in a time of disorder, understood British power and kept the Punjab independent through diplomacy, and chose capable officers regardless of religion."
        },
        {
          q: "What were the weaknesses of Ranjit Singh's rule?",
          a: "It depended on his own personality, with few strong institutions. He did not make arrangements for a capable successor, and court factions and the army grew powerful, which led to the weakness of the state after 1839."
        }
      ],
      quiz: [
        {
          q: "Ranjit Singh is popularly known as:",
          options: ["Sher-e-Punjab", "Sarkar-e-Ala", "Hind di Chadar", "Bandi Chhor"],
          answer: 0,
          explain: "**Sher-e-Punjab**."
        },
        {
          q: "Ranjit Singh lost the sight of one eye due to:",
          options: ["Smallpox", "A battle wound", "A fall from a horse", "Cholera"],
          answer: 0,
          explain: "**Smallpox** in childhood."
        },
        {
          q: "Which is NOT true of Ranjit Singh?",
          options: ["He respected all religions", "He employed non-Sikhs", "He forced conversion", "He was a skilled diplomat"],
          answer: 2,
          explain: "He **did not force** conversion."
        },
        {
          q: "Which Muslim minister served Ranjit Singh?",
          options: ["Fakir Azizuddin", "Mir Mannu", "Zakariya Khan", "Azim Khan"],
          answer: 0,
          explain: "**Fakir Azizuddin**."
        },
        {
          q: "A major weakness of his state was:",
          options: ["Lack of any army", "No strong institutions or successor", "No revenue", "No capital"],
          answer: 1,
          explain: "Rule depended on **his person**, and the succession was uncertain."
        },
        {
          q: "Gilding of the upper part of Harmandir Sahib was supported by:",
          options: ["Ranjit Singh", "Aurangzeb", "Abdali", "Dalhousie"],
          answer: 0,
          explain: "By **Ranjit Singh**; it became known as the Golden Temple."
        }
      ]
    },
    // ───────────── 22 ─────────────
    {
      id: "first-anglo-sikh-war",
      title: "First Anglo-Sikh War: Causes and Results",
      section: "Part B",
      summary: "The war of 1845–46: the instability after Ranjit Singh, British preparations, the battles from Mudki to Sobraon, and the Treaty of Lahore of 1846.",
      notes: [
        {
          heading: "Causes",
          points: [
            "After Ranjit Singh's death in 1839, the Punjab had a series of weak rulers (Kharak Singh, Nau Nihal Singh, Sher Singh, and the child **Dalip Singh**), and murders and factional fights at court.",
            "The army (the **Khalsa army** with its panchayats) grew powerful and ill-disciplined, and court leaders such as Lal Singh and Tej Singh feared it.",
            "The British annexed **Sindh in 1843**, and built up troops and boats on the Sutlej frontier, causing suspicion.",
            "In **December 1845** the Sikh army crossed the Sutlej, and the British declared war; some historians stress British ambition, others the weakness of the Sikh court and army."
          ]
        },
        {
          heading: "Battles",
          points: [
            "**Mudki** (18 December 1845) and **Ferozeshah** (21–22 December 1845): hard-fought British successes.",
            "**Aliwal** (28 January 1846): victory of the British under Sir Harry Smith.",
            "**Sobraon** (10 February 1846): the decisive battle; the Sikh army fought bravely, but was defeated.",
            "Many accounts blame the commanders **Lal Singh and Tej Singh** for treachery or poor leadership; the British commander-in-chief was **Hugh Gough** and the Governor-General **Lord Hardinge**."
          ]
        },
        {
          heading: "Results",
          points: [
            "The **Treaty of Lahore** (9 March 1846): the Jalandhar Doab was ceded, a war indemnity of about **one and a half crore rupees** was imposed, and the Sikh army was limited in size.",
            "As the Sikhs could not pay in full, Kashmir was sold to **Gulab Singh** of Jammu by the **Treaty of Amritsar (16 March 1846)**.",
            "Dalip Singh remained Maharaja, but a British **Resident** (Henry Lawrence) was posted at Lahore.",
            "By the **Treaty of Bhyroval (December 1846)** the British took charge of the administration during Dalip Singh's minority, and Rani Jindan was removed from power."
          ]
        }
      ],
      formulas: [
        "1845 – Sikh army crosses the Sutlej; Mudki and Ferozeshah",
        "28 Jan 1846 – Aliwal; 10 Feb 1846 – Sobraon",
        "9 March 1846 – Treaty of Lahore; 16 March – Treaty of Amritsar (Kashmir to Gulab Singh)",
        "Dec 1846 – Treaty of Bhyroval"
      ],
      terms: [
        { term: "Treaty of Lahore (1846)", meaning: "The **treaty ending the First Anglo-Sikh War**." },
        { term: "Indemnity", meaning: "A **payment** demanded from a defeated side." },
        { term: "Resident", meaning: "The **British officer** posted at the Sikh capital." },
        { term: "Rani Jindan", meaning: "The **mother and regent** of the child Maharaja Dalip Singh." },
        { term: "Sobraon", meaning: "The **last and decisive battle** of the war." }
      ],
      qa: [
        {
          q: "What were the causes of the First Anglo-Sikh War?",
          a: "After Ranjit Singh's death there was political chaos and the army became powerful and uncontrolled. The British had annexed Sindh and massed troops near the Sutlej. Court leaders let the army cross the Sutlej in 1845, which began the war."
        },
        {
          q: "Describe the battle of Sobraon.",
          a: "It was fought on 10 February 1846 on the Sutlej. The Sikh army fought with great courage in their entrenchments, but was defeated, partly due to the poor leadership of Tej Singh and Lal Singh, and many soldiers were lost in the river."
        },
        {
          q: "What were the terms of the Treaty of Lahore (1846)?",
          a: "The Jalandhar Doab was handed to the British, a large war indemnity was demanded, the Sikh army was reduced, a British Resident was placed at Lahore, and Dalip Singh stayed on the throne. Kashmir was sold to Gulab Singh a few days later for the unpaid money."
        }
      ],
      quiz: [
        {
          q: "The First Anglo-Sikh War began in:",
          options: ["1839", "1845", "1848", "1849"],
          answer: 1,
          explain: "In **December 1845**."
        },
        {
          q: "The decisive battle was:",
          options: ["Mudki", "Aliwal", "Sobraon", "Chillianwala"],
          answer: 2,
          explain: "**Sobraon**."
        },
        {
          q: "Who was the Governor-General during the war?",
          options: ["Lord Hardinge", "Lord Dalhousie", "Lord Auckland", "Lord Minto"],
          answer: 0,
          explain: "**Lord Hardinge**."
        },
        {
          q: "Kashmir was sold to:",
          options: ["Gulab Singh", "Dhian Singh", "Tej Singh", "Lal Singh"],
          answer: 0,
          explain: "To **Gulab Singh** of Jammu."
        },
        {
          q: "The child Maharaja in 1846 was:",
          options: ["Sher Singh", "Dalip Singh", "Kharak Singh", "Nau Nihal Singh"],
          answer: 1,
          explain: "**Dalip Singh**."
        },
        {
          q: "The first British Resident at Lahore was:",
          options: ["Henry Lawrence", "Charles Metcalfe", "Hugh Gough", "John Nicholson"],
          answer: 0,
          explain: "**Henry Lawrence**."
        }
      ]
    },
    // ───────────── 23 ─────────────
    {
      id: "second-anglo-sikh-war",
      title: "Second Anglo-Sikh War and the Annexation of the Punjab",
      section: "Part B",
      summary: "The revolt at Multan, the battles of Chillianwala and Gujrat, and the annexation of the Punjab by Lord Dalhousie on 29 March 1849.",
      notes: [
        {
          heading: "Causes",
          points: [
            "Many Sikh soldiers and chiefs resented British control and the removal of Rani Jindan after the Treaty of Bhyroval (1846).",
            "At **Multan**, Diwan **Mulraj** rebelled in April 1848 after British officers **Vans Agnew and Anderson** were killed; British officials blamed him, though he later said the attack was by soldiers.",
            "**Sher Singh Attariwala** was sent to put down the rebellion but joined the rebels, and the revolt spread.",
            "Lord **Dalhousie**, the Governor-General, was ready to use the revolt to end Sikh rule."
          ]
        },
        {
          heading: "Course of the war",
          points: [
            "**Ramnagar** (November 1848) was an indecisive battle.",
            "**Chillianwala** (13 January 1849): a very costly battle for the British under Lord Gough, with heavy losses on both sides; the Sikhs held their ground.",
            "**Multan** fell to the British in January 1849.",
            "**Gujrat** (21 February 1849), the 'battle of the guns': the British, with heavy artillery, won decisively.",
            "The Sikh army surrendered in March 1849, and the Afghan troops sent by Dost Muhammad withdrew."
          ]
        },
        {
          heading: "Annexation and results",
          points: [
            "On **29 March 1849** Lord Dalhousie annexed the Punjab to the British Empire; Dalip Singh was sent away with a pension, and the Kohinoor was handed to Queen Victoria.",
            "A **Board of Administration** (Henry Lawrence, John Lawrence and Charles Mansel) governed the Punjab; the Board was replaced by a Chief Commissioner (John Lawrence) in 1853.",
            "This ended the independent Sikh state, which Ranjit Singh had founded only fifty years before.",
            "The Punjab later became an important recruiting ground for the British Indian army."
          ]
        }
      ],
      formulas: [
        "April 1848 – revolt at Multan (Mulraj)",
        "13 Jan 1849 – Chillianwala; 21 Feb 1849 – Gujrat",
        "29 March 1849 – annexation of the Punjab (Lord Dalhousie)",
        "Board of Administration: Henry Lawrence, John Lawrence, Charles Mansel"
      ],
      terms: [
        { term: "Mulraj", meaning: "The **Diwan of Multan** whose revolt began the war." },
        { term: "Chillianwala", meaning: "The **1849 battle** of heavy losses for both sides." },
        { term: "Gujrat", meaning: "The **final, decisive battle** of the war." },
        { term: "Annexation", meaning: "**Taking over** a territory and joining it to one's own." },
        { term: "Board of Administration", meaning: "The **three-man body** that ruled the Punjab after 1849." }
      ],
      qa: [
        {
          q: "What were the causes of the Second Anglo-Sikh War?",
          a: "Sikh resentment at British interference and the treatment of Rani Jindan, the revolt of Diwan Mulraj at Multan in April 1848, the joining of Sher Singh Attariwala with the rebels, and Lord Dalhousie's wish to annex the Punjab."
        },
        {
          q: "Describe the battles of Chillianwala and Gujrat.",
          a: "At Chillianwala (January 1849) the British lost heavily and the result was indecisive. At Gujrat (February 1849) the British used their heavy artillery to destroy the Sikh positions, which decided the war."
        },
        {
          q: "How was the Punjab annexed in 1849?",
          a: "After the surrender of the Sikh army, Lord Dalhousie proclaimed the annexation on 29 March 1849. Dalip Singh gave up his throne and was pensioned, the Kohinoor went to Queen Victoria, and a Board of Administration governed the province."
        }
      ],
      quiz: [
        {
          q: "The Punjab was annexed in:",
          options: ["1846", "1848", "1849", "1857"],
          answer: 2,
          explain: "In **1849**."
        },
        {
          q: "The Governor-General at the annexation was:",
          options: ["Lord Hardinge", "Lord Dalhousie", "Lord Canning", "Lord Ripon"],
          answer: 1,
          explain: "**Lord Dalhousie**."
        },
        {
          q: "The Second Anglo-Sikh War began with a revolt at:",
          options: ["Multan", "Lahore", "Amritsar", "Sobraon"],
          answer: 0,
          explain: "At **Multan**."
        },
        {
          q: "The final battle of the war was:",
          options: ["Ramnagar", "Chillianwala", "Gujrat", "Aliwal"],
          answer: 2,
          explain: "**Gujrat**, 21 February 1849."
        },
        {
          q: "The Diwan who rebelled at Multan was:",
          options: ["Mulraj", "Lal Singh", "Tej Singh", "Gulab Singh"],
          answer: 0,
          explain: "**Mulraj**."
        },
        {
          q: "Which Sikh general joined the rebels in 1848?",
          options: ["Sher Singh Attariwala", "Hari Singh Nalwa", "Jassa Singh Ahluwalia", "Zorawar Singh"],
          answer: 0,
          explain: "**Sher Singh Attariwala**."
        }
      ]
    }
  ]
});
