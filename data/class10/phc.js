// PSEB Class 10 Punjab History and Culture (Paper A and Paper B), the alternative to Punjabi
// for students from outside Punjab. Format: see CONTENT_GUIDE.md. `formulas` holds key dates and facts.
StudyData.add(10, "phc", {
  syllabus: {
    board: "PSEB",
    match: "textbook",
    books: ["Punjab History and Culture (PSEB), Class 10"],
    note: "Follows the PSEB 2026–27 syllabus; written from the syllabus topics, not the PSEB book's own text.",
    reviewed: false
  },
  chapters: [
    // ───────────── Paper A ─────────────
    {
      id: "bridge-course",
      title: "Bridge Course: Punjab and the Period of the Sikh Gurus",
      section: "Paper A",
      summary: "A quick revision of the land of Punjab and the ten Sikh Gurus, which gives the background for the later history of Banda Singh Bahadur, the Misls, Maharaja Ranjit Singh and the British annexation.",
      notes: [
        {
          heading: "Land of Punjab",
          points: [
            "**Punjab** comes from the Persian words **panj** (five) and **aab** (water): the **land of five rivers**, the Jhelum, Chenab, Ravi, Beas and Sutlej.",
            "The land between two rivers is a **doab**. The three cultural regions of Indian Punjab are **Majha**, **Doaba** and **Malwa**.",
            "The rivers deposit fertile alluvial soil, so Punjab is a leading farming region, famous for wheat and rice.",
            "Punjab lay on the route of invaders from the north-west, so its history is full of wars, but also of a rich mixing of cultures.",
            "In 1947 the province was divided between India and Pakistan; the present Indian state was formed in 1966."
          ]
        },
        {
          heading: "Guru Nanak Dev Ji",
          points: [
            "Born in **1469** at **Talwandi** (now **Nankana Sahib**), the first Guru and founder of Sikhism.",
            "He taught belief in **one God**, honest work (**kirat karo**), sharing with others (**vand chhako**) and remembering God (**naam japo**).",
            "He rejected caste distinctions and rituals, supported equality of men and women, and started the community kitchen, **langar**.",
            "He travelled widely in his **Udasis** (journeys) and spent his last years at **Kartarpur**."
          ]
        },
        {
          heading: "From Guru Angad Dev Ji to Guru Arjan Dev Ji",
          points: [
            "**Guru Angad Dev Ji** (second Guru) developed the **Gurmukhi** script.",
            "**Guru Amar Das Ji** (third) strengthened langar, opposed sati and the purdah system, and organised the Sikhs into districts called **manjis**.",
            "**Guru Ram Das Ji** (fourth) founded the city of **Amritsar**.",
            "**Guru Arjan Dev Ji** (fifth) built **Harmandir Sahib** (the Golden Temple), compiled the **Adi Granth** in **1604**, and was martyred in **1606** under Mughal orders."
          ]
        },
        {
          heading: "From Guru Hargobind Ji to Guru Gobind Singh Ji",
          points: [
            "**Guru Hargobind Ji** (sixth) wore two swords of **miri and piri** (worldly and spiritual authority) and built the **Akal Takht** at Amritsar.",
            "**Guru Har Rai Ji** (seventh) and **Guru Har Krishan Ji** (eighth) continued the teachings of the Gurus, with Guru Har Krishan serving the sick.",
            "**Guru Tegh Bahadur Ji** (ninth) was martyred at Delhi in **1675** defending religious freedom.",
            "**Guru Gobind Singh Ji** (tenth) created the **Khalsa in 1699 at Anandpur Sahib**. Before he passed away in 1708, he declared the **Guru Granth Sahib** as the eternal Guru of the Sikhs."
          ]
        }
      ],
      formulas: [
        "Punjab = panj + aab (five waters); rivers: Jhelum, Chenab, Ravi, Beas, Sutlej",
        "1469 – birth of Guru Nanak Dev Ji; 1604 – Adi Granth compiled; 1606 – martyrdom of Guru Arjan Dev Ji",
        "1675 – martyrdom of Guru Tegh Bahadur Ji; 1699 – creation of the Khalsa at Anandpur Sahib",
        "1708 – Guru Gobind Singh Ji declares the Guru Granth Sahib as the Guru"
      ],
      terms: [
        { term: "Doab", meaning: "The tract of land lying **between two rivers**." },
        { term: "Langar", meaning: "The **community kitchen** of a gurdwara where all sit together and eat the same food." },
        { term: "Miri and Piri", meaning: "The **two swords of Guru Hargobind Ji**, standing for temporal (worldly) and spiritual authority." },
        { term: "Khalsa", meaning: "The **community of initiated Sikhs**, created by Guru Gobind Singh Ji in 1699." },
        { term: "Adi Granth", meaning: "The **first compilation of the Sikh scripture**, prepared by Guru Arjan Dev Ji in 1604." }
      ],
      qa: [
        {
          q: "Why is the region called Punjab?",
          a: "The name comes from the Persian words panj (five) and aab (water). It means the land of five rivers: the Jhelum, Chenab, Ravi, Beas and Sutlej."
        },
        {
          q: "Write about the teachings of Guru Nanak Dev Ji.",
          a: "Guru Nanak Dev Ji taught that there is one God, and that people should earn an honest living (kirat karo), share with others (vand chhako) and remember God (naam japo). He opposed caste differences and meaningless rituals, spoke for the equality of women and men, and started the langar."
        },
        {
          q: "What was the importance of the year 1699?",
          a: "In 1699, on Baisakhi at Anandpur Sahib, Guru Gobind Singh Ji created the Khalsa. The Sikhs became a brave, disciplined community pledged to defend justice and the weak."
        }
      ],
      quiz: [
        {
          q: "Which Guru founded the city of Amritsar?",
          options: ["Guru Angad Dev Ji", "Guru Amar Das Ji", "Guru Ram Das Ji", "Guru Hargobind Ji"],
          answer: 2,
          explain: "**Guru Ram Das Ji**, the fourth Guru, founded Amritsar."
        },
        {
          q: "The Adi Granth was compiled by Guru Arjan Dev Ji in:",
          options: ["1469", "1604", "1675", "1699"],
          answer: 1,
          explain: "The Adi Granth was completed in **1604**."
        },
        {
          q: "The Khalsa was created at:",
          options: ["Kartarpur", "Goindwal", "Anandpur Sahib", "Nanded"],
          answer: 2,
          explain: "Guru Gobind Singh Ji created the Khalsa at **Anandpur Sahib** in 1699."
        },
        {
          q: "Who built the Akal Takht?",
          options: ["Guru Hargobind Ji", "Guru Har Rai Ji", "Guru Tegh Bahadur Ji", "Guru Angad Dev Ji"],
          answer: 0,
          explain: "**Guru Hargobind Ji** built the Akal Takht opposite Harmandir Sahib."
        },
        {
          q: "The meaning of the word 'doab' is:",
          options: ["Land of five rivers", "Land between two rivers", "A hilly region", "A desert region"],
          answer: 1,
          explain: "A doab is the land lying **between two rivers**."
        },
        {
          q: "Which Guru was martyred at Delhi in 1675?",
          options: ["Guru Arjan Dev Ji", "Guru Har Krishan Ji", "Guru Tegh Bahadur Ji", "Guru Gobind Singh Ji"],
          answer: 2,
          explain: "**Guru Tegh Bahadur Ji**, the ninth Guru, was martyred in 1675."
        }
      ]
    },
    {
      id: "banda-singh-bahadur",
      title: "Baba Banda Singh Bahadur and his Martyrdom",
      section: "Paper A",
      summary: "The life of Banda Singh Bahadur, his campaign against Mughal oppression, the capture of Sirhind and the first Sikh state, and his capture and martyrdom at Delhi in 1716.",
      notes: [
        {
          heading: "Early life and mission",
          points: [
            "Banda Singh Bahadur was born as **Lachhman Dev** in about **1670** at **Rajouri** (Jammu region). He became an ascetic named **Madho Das**.",
            "He met **Guru Gobind Singh Ji** at **Nanded** in **1708** and became his disciple, taking the name **Banda Singh**.",
            "The Guru sent him to Punjab to punish the oppressors of the Sikhs and gave him a letter (hukamnama) asking the Sikhs to join him.",
            "The cruel treatment of Guru Tegh Bahadur Ji and the younger Sahibzade by Mughal officials made the Sikhs eager to take action."
          ]
        },
        {
          heading: "Conquests",
          points: [
            "He raised a force of Sikhs and peasants, and captured **Samana** (1709), then **Sadhaura**.",
            "At **Chappar Chiri** (1710), near Sirhind, he defeated and killed **Wazir Khan**, governor of Sirhind, and then captured **Sirhind**.",
            "He took **Rahon** and other places in the Jalandhar Doab and the area between the Sutlej and Yamuna.",
            "He made **Lohgarh**, in the Shivalik foothills, his capital and strengthened it."
          ]
        },
        {
          heading: "Rule and reforms",
          points: [
            "He ended the **zamindari system** in his territory, so that the tillers of the land became owners of it.",
            "He issued **coins and a seal** in the names of Guru Nanak Dev Ji and Guru Gobind Singh Ji, showing that power belonged to the Gurus.",
            "He treated people of all religions with fairness, and the poor gained from his rule.",
            "The Mughal emperor **Bahadur Shah** marched against him, and Banda Singh had to leave Lohgarh and take shelter in the hills."
          ]
        },
        {
          heading: "Capture and martyrdom",
          points: [
            "After a long Mughal siege at **Gurdas Nangal** (near Gurdaspur), he and his companions were captured in **1715**.",
            "They were taken to Delhi in chains, and put to death in **1716**, when **Farrukhsiyar** was emperor. Traditional accounts say that they met death with courage, refusing to give up their faith.",
            "His death did not end the Sikh struggle. Within a generation the Sikhs revived under the Dal Khalsa and the Misls.",
            "He is remembered as the first Sikh leader to set up Sikh rule in Punjab."
          ]
        }
      ],
      formulas: [
        "c. 1670 – born at Rajouri; 1708 – meets Guru Gobind Singh Ji at Nanded",
        "1709 – Samana; 1710 – Chappar Chiri (Wazir Khan killed), Sirhind captured; capital: Lohgarh",
        "1715 – captured at Gurdas Nangal; 1716 – martyred at Delhi",
        "Map work: Rajouri, Samana, Sadhaura, Sirhind, Rahon, Lohgarh, Gurdas Nangal"
      ],
      terms: [
        { term: "Lohgarh", meaning: "The **fort and capital** of Banda Singh Bahadur in the Shivalik foothills." },
        { term: "Hukamnama", meaning: "An **order or letter of command** from the Guru to the Sikhs." },
        { term: "Zamindari", meaning: "A system in which **landlords** collected revenue from the farmers; Banda Singh abolished it in his territory." },
        { term: "Chappar Chiri", meaning: "The place near Sirhind where Banda Singh **defeated Wazir Khan in 1710**." },
        { term: "Siege", meaning: "Surrounding a fort or place with an army to **force it to surrender**." }
      ],
      qa: [
        {
          q: "Describe the conquests of Banda Singh Bahadur.",
          a: "He captured Samana and Sadhaura (1709–10). At Chappar Chiri (1710) he defeated and killed Wazir Khan and then captured Sirhind. He also took Rahon and made Lohgarh his capital, setting up the first Sikh state."
        },
        {
          q: "What reforms did Banda Singh Bahadur introduce?",
          a: "He abolished the zamindari system so that the tillers became owners of the land, he issued coins and a seal in the Gurus' names, and he treated all communities fairly."
        },
        {
          q: "How did Banda Singh Bahadur meet his end?",
          a: "He was captured with his companions at Gurdas Nangal in 1715 after a long siege, taken to Delhi, and executed in 1716. He is remembered as a martyr for courage and faith."
        }
      ],
      quiz: [
        {
          q: "Banda Singh Bahadur met Guru Gobind Singh Ji at:",
          options: ["Anandpur Sahib", "Nanded", "Chamkaur", "Talwandi Sabo"],
          answer: 1,
          explain: "He met the Guru at **Nanded** in 1708."
        },
        {
          q: "Wazir Khan, governor of Sirhind, was killed at:",
          options: ["Samana", "Gurdas Nangal", "Chappar Chiri", "Rahon"],
          answer: 2,
          explain: "He was defeated and killed at **Chappar Chiri** in 1710."
        },
        {
          q: "The capital of Banda Singh Bahadur was:",
          options: ["Sirhind", "Lohgarh", "Lahore", "Amritsar"],
          answer: 1,
          explain: "**Lohgarh** was his capital."
        },
        {
          q: "Banda Singh Bahadur was captured at:",
          options: ["Gurdas Nangal", "Sadhaura", "Rajouri", "Samana"],
          answer: 0,
          explain: "He was captured at **Gurdas Nangal** in 1715."
        },
        {
          q: "What was the original name of Banda Singh Bahadur?",
          options: ["Madho Singh", "Lachhman Dev", "Jassa Singh", "Kapur Singh"],
          answer: 1,
          explain: "He was born **Lachhman Dev**, later known as Madho Das before he became Banda Singh."
        },
        {
          q: "Which reform did Banda Singh Bahadur introduce in his territory?",
          options: ["Abolition of the zamindari system", "A new tax on farmers", "Ban on all trade", "Rule of the landlords"],
          answer: 0,
          explain: "He abolished **zamindari** and gave land to the tillers."
        }
      ]
    },
    {
      id: "dal-khalsa-and-misls",
      title: "Sikh Rule in Punjab: Dal Khalsa and the Misls",
      section: "Paper A",
      summary: "How the Sikhs survived persecution after Banda Singh Bahadur, organised themselves as the Dal Khalsa, and divided Punjab among twelve Misls that ruled until the rise of Maharaja Ranjit Singh.",
      notes: [
        {
          heading: "Years of persecution",
          points: [
            "After 1716 the Mughal governors of Lahore, such as **Zakariya Khan**, tried to crush the Sikhs. Many Sikhs lived in forests, deserts and hills.",
            "Large rewards were announced for the capture of Sikhs, but the Sikhs continued to gather at Amritsar on Baisakhi and Diwali.",
            "The invasions of **Nadir Shah** (1739) and **Ahmad Shah Abdali** (from 1748) weakened the Mughal hold on Punjab."
          ]
        },
        {
          heading: "Dal Khalsa",
          points: [
            "Nawab Kapur Singh organised the Sikhs into two main groups, the **Buddha Dal** (elders) and **Taruna Dal** (young), around 1734.",
            "In **1748** at Amritsar, the Sikh groups (jathas) were united into one army, the **Dal Khalsa**, under **Jassa Singh Ahluwalia**, with Nawab Kapur Singh respected as its leader.",
            "The Dal Khalsa was divided into **Misls**; all the Sikhs met at **Amritsar** as the **Sarbat Khalsa**.",
            "Decisions of the Sarbat Khalsa were passed as **gurmata** in front of the Guru Granth Sahib and the Akal Takht."
          ]
        },
        {
          heading: "Struggle with Ahmad Shah Abdali",
          points: [
            "Abdali invaded Punjab again and again between 1748 and 1767.",
            "In **1762** he attacked the Sikhs and their families near Kup (Malerkotla), killing many in the **Vadda Ghallughara** (Great Holocaust).",
            "The Sikhs recovered quickly, and after Abdali's departure took control of Lahore (about **1765**), issuing their own coins.",
            "Jassa Singh Ahluwalia is remembered for leading the Sikhs in these years."
          ]
        },
        {
          heading: "The Misls",
          points: [
            "A **Misl** was a band of Sikh warriors under a sardar, holding a territory. Twelve are commonly counted, including the **Ahluwalia, Bhangi, Kanhaiya, Ramgarhia, Sukerchakia, Phulkian, Nishanwalia, Shaheedan, Dallewalia, Nakai, Karorsinghia and Faizullapuria (Singhpuria)**. Historians sometimes count them differently.",
            "The Misls fought together against outside invaders, but quarrelled among themselves when the danger had passed.",
            "The **Sukerchakia Misl** (Ranjit Singh's family) and the **Phulkian Misl** (Patiala, Nabha, Jind) became important.",
            "The Misl system ended when **Ranjit Singh** united them under one government."
          ]
        },
        {
          heading: "Features and weaknesses",
          points: [
            "Misls had a democratic spirit: the sardar was chosen and the Sarbat Khalsa met together.",
            "Some Misls gave protection to villages in return for a share of produce, a system called **rakhi**.",
            "The Misls lacked unity and a central government, so they could not form a strong state until Ranjit Singh."
          ]
        }
      ],
      formulas: [
        "1739 – Nadir Shah invades; from 1748 – Abdali invasions",
        "1748 – Dal Khalsa formed at Amritsar (Jassa Singh Ahluwalia, Nawab Kapur Singh)",
        "1762 – Vadda Ghallughara; c. 1765 – Sikhs take Lahore",
        "Twelve Misls: Ahluwalia, Bhangi, Kanhaiya, Ramgarhia, Sukerchakia, Phulkian and others"
      ],
      terms: [
        { term: "Misl", meaning: "A **band of Sikh warriors** under a sardar, holding its own territory." },
        { term: "Dal Khalsa", meaning: "The **combined Sikh army** formed in 1748." },
        { term: "Sarbat Khalsa", meaning: "A **general assembly of the Sikhs** held at Amritsar." },
        { term: "Gurmata", meaning: "A **resolution of the Sarbat Khalsa** passed in the name of the Guru Granth Sahib." },
        { term: "Rakhi", meaning: "A system of **protection** given by Sikh sardars to villages for a share of the produce." },
        { term: "Vadda Ghallughara", meaning: "The **Great Massacre of the Sikhs** by Abdali in 1762." }
      ],
      qa: [
        {
          q: "What was the Dal Khalsa? How was it formed?",
          a: "The Dal Khalsa was the combined army of the Sikhs. In 1748, at Amritsar, the many small Sikh bands were united into one force under Jassa Singh Ahluwalia, with Nawab Kapur Singh as its senior leader."
        },
        {
          q: "What was a Misl? Name any four Misls.",
          a: "A Misl was a band of Sikh warriors headed by a sardar, who controlled a territory. Four Misls: Ahluwalia, Bhangi, Kanhaiya and Sukerchakia (also Ramgarhia and Phulkian)."
        },
        {
          q: "What was the Vadda Ghallughara?",
          a: "In 1762 Ahmad Shah Abdali attacked a large group of Sikhs with their families and killed thousands of them. The Sikhs recovered and soon became rulers of Punjab's plains."
        }
      ],
      quiz: [
        {
          q: "The Dal Khalsa was formed in:",
          options: ["1699", "1716", "1748", "1799"],
          answer: 2,
          explain: "The Dal Khalsa was formed at Amritsar in **1748**."
        },
        {
          q: "Who was the leader of the Dal Khalsa at its formation?",
          options: ["Hari Singh Nalwa", "Jassa Singh Ahluwalia", "Mahan Singh", "Charat Singh"],
          answer: 1,
          explain: "**Jassa Singh Ahluwalia** led the Dal Khalsa."
        },
        {
          q: "The Vadda Ghallughara took place in:",
          options: ["1739", "1748", "1762", "1799"],
          answer: 2,
          explain: "Abdali killed thousands of Sikhs in the Vadda Ghallughara of **1762**."
        },
        {
          q: "Decisions of the Sarbat Khalsa were called:",
          options: ["Misl", "Gurmata", "Rakhi", "Jatha"],
          answer: 1,
          explain: "Decisions were passed as **gurmata** before the Guru Granth Sahib."
        },
        {
          q: "Ranjit Singh belonged to which Misl?",
          options: ["Ahluwalia", "Kanhaiya", "Bhangi", "Sukerchakia"],
          answer: 3,
          explain: "He belonged to the **Sukerchakia Misl**."
        },
        {
          q: "Which invader weakened the Mughal hold on Punjab by attacking Delhi in 1739?",
          options: ["Babur", "Nadir Shah", "Ahmad Shah Abdali", "Mahmud of Ghazni"],
          answer: 1,
          explain: "**Nadir Shah** invaded in 1739; Abdali came from 1748."
        }
      ]
    },
    {
      id: "maharaja-ranjit-singh",
      title: "Punjab under Maharaja Ranjit Singh: Administration and Secular Policy",
      section: "Paper A",
      summary: "How Ranjit Singh united the Misls into the Sikh kingdom, how he governed through a fair, secular administration and a modern army, and how he dealt with the British.",
      notes: [
        {
          heading: "Rise of Ranjit Singh",
          points: [
            "Born in **1780** at **Gujranwala**, son of **Mahan Singh**, chief of the **Sukerchakia Misl**. He became the chief in **1792**.",
            "He captured **Lahore** in **1799** and was proclaimed **Maharaja** on Baisakhi in **1801**. He took **Amritsar** in 1802.",
            "He brought the Misls under one rule, called **Sarkar-i-Khalsa**, with Lahore as the capital.",
            "He conquered Kasur (1807), Multan (1818), Kashmir (1819) and Peshawar (1834). His kingdom reached from the Sutlej to the Khyber and Kashmir."
          ]
        },
        {
          heading: "Central and provincial administration",
          points: [
            "The Maharaja was the head of the state and the final authority in civil, military and judicial matters. He was helped by ministers and officers, among them the prime minister, the foreign minister and the finance minister.",
            "The kingdom was divided into provinces called **subas** (Lahore, Multan, Kashmir, Peshawar), under governors known as **nazims**.",
            "Each suba had smaller divisions called parganas, and villages were the lowest unit; revenue officers were called **kardars**.",
            "Village panchayats looked after local affairs and settled many disputes."
          ]
        },
        {
          heading: "Land revenue and justice",
          points: [
            "**Land revenue** was the main source of income. The state took a share of the crop, and some of it was collected in cash.",
            "Revenue officers were often appointed by auction or contract, but the king kept watch on them.",
            "Justice was simple and quick. Local panchayats, qazis and other courts decided cases, and the punishments were usually fines rather than death.",
            "Capital punishment was rarely used during his reign."
          ]
        },
        {
          heading: "The army",
          points: [
            "Ranjit Singh built the strongest army in northern India, called the **Khalsa army**.",
            "The **Fauj-i-Khas** was the model brigade trained by French officers **Ventura and Allard**; the regular army was the **Fauj-i-Ain**, and the old Sikh horsemen were the **Fauj-i-Be-Qawaid**.",
            "He set up factories at Lahore to make guns and cannons.",
            "Soldiers were paid regularly and Muslims, Hindus and Sikhs all served in the army."
          ]
        },
        {
          heading: "Secular policy",
          points: [
            "Ranjit Singh treated all religions with respect. High posts went to Hindus, Muslims and Sikhs: the **Fakir brothers** (Azizuddin, Nuruddin, Imamuddin), **Dhian Singh** and **Dewan Mokham Chand**.",
            "He gave grants to gurdwaras, temples and mosques. He gave gold to cover the Harmandir Sahib at Amritsar, and the building is known as the Golden Temple.",
            "No tax like jizya was imposed on non-Muslims and nobody was forced to change religion.",
            "He was fondly called **Sher-e-Punjab** (Lion of Punjab). He signed the **Treaty of Amritsar** with the British in **1809** and died on **27 June 1839**."
          ]
        }
      ],
      formulas: [
        "1780 – born at Gujranwala; 1792 – chief of the Sukerchakia Misl",
        "1799 – captures Lahore; 1801 – proclaimed Maharaja; 1802 – takes Amritsar",
        "Kasur 1807; Multan 1818; Kashmir 1819; Peshawar 1834",
        "1809 – Treaty of Amritsar with the British (Sutlej the boundary); 1839 – death",
        "Provinces (subas): Lahore, Multan, Kashmir, Peshawar"
      ],
      terms: [
        { term: "Sarkar-i-Khalsa", meaning: "The **name of the Sikh state** under Maharaja Ranjit Singh." },
        { term: "Suba", meaning: "A **province** of Ranjit Singh's kingdom, under a nazim." },
        { term: "Fauj-i-Ain", meaning: "The **regular, trained army** of Ranjit Singh, drilled on European lines." },
        { term: "Secular", meaning: "Treating **all religions equally**, without favouring any one." },
        { term: "Sher-e-Punjab", meaning: "'Lion of Punjab'; the **title of Maharaja Ranjit Singh**." }
      ],
      qa: [
        {
          q: "Explain the secular policy of Maharaja Ranjit Singh.",
          a: "Ranjit Singh respected all religions. He gave important posts to Hindus, Muslims and Sikhs, gave grants to gurdwaras, temples and mosques, imposed no discriminatory tax and did not force anyone to change faith. Hence his rule is called secular."
        },
        {
          q: "Describe the army of Maharaja Ranjit Singh.",
          a: "He modernised the army with the help of European officers such as Ventura and Allard. It had well-trained infantry, cavalry and artillery, regular pay, and factories at Lahore for guns. The regular army was called the Fauj-i-Ain."
        },
        {
          q: "Explain the land revenue system under Ranjit Singh.",
          a: "Land revenue was the main income. The state took a fixed share of the produce, collected by kardars. The government tried to protect the farmers and rewarded officials who increased cultivation."
        }
      ],
      quiz: [
        {
          q: "Ranjit Singh was proclaimed Maharaja in:",
          options: ["1792", "1799", "1801", "1809"],
          answer: 2,
          explain: "He was crowned on Baisakhi in **1801**; he had taken Lahore in 1799."
        },
        {
          q: "The capital of Ranjit Singh's kingdom was:",
          options: ["Amritsar", "Lahore", "Multan", "Peshawar"],
          answer: 1,
          explain: "**Lahore** was the capital of the Sikh kingdom."
        },
        {
          q: "The provinces of his kingdom were called:",
          options: ["Misls", "Parganas", "Subas", "Jagirs"],
          answer: 2,
          explain: "A province was a **suba**."
        },
        {
          q: "The Fakir brothers in his court were:",
          options: ["Muslims who held high posts", "Sikh generals", "French officers", "British agents"],
          answer: 0,
          explain: "Azizuddin and his brothers were **Muslims** trusted by the Maharaja."
        },
        {
          q: "Which French officers helped train his army?",
          options: ["Ventura and Allard", "Metcalfe and Lawrence", "Hardinge and Gough", "Dalhousie and Napier"],
          answer: 0,
          explain: "**Ventura and Allard** trained the Fauj-i-Khas."
        },
        {
          q: "Ranjit Singh died in:",
          options: ["1809", "1834", "1839", "1845"],
          answer: 2,
          explain: "He died on 27 June **1839**."
        }
      ]
    },
    {
      id: "anglo-sikh-wars",
      title: "British Annexation of Punjab: The Anglo-Sikh Wars",
      section: "Paper A",
      summary: "The weak successors of Ranjit Singh, the First (1845–46) and Second (1848–49) Anglo-Sikh Wars, and the annexation of Punjab by the British in 1849.",
      notes: [
        {
          heading: "Background",
          points: [
            "After Ranjit Singh died (1839), his successors were **Kharak Singh, Nau Nihal Singh** and **Sher Singh**. The court was full of plots and murders.",
            "In **1843** the child **Duleep Singh** became Maharaja, with his mother **Rani Jindan** as regent.",
            "The Khalsa army became powerful through its panchayats, and court leaders such as **Lal Singh** and **Tej Singh** were accused of acting for themselves.",
            "The British took **Sindh** in 1843 and gathered troops on the Sutlej."
          ]
        },
        {
          heading: "First Anglo-Sikh War (1845–46)",
          points: [
            "The Sikh army crossed the Sutlej in December 1845 and war broke out.",
            "Battles: **Mudki** and **Ferozeshah** (December 1845), **Aliwal** (January 1846) and **Sobraon** (10 February 1846).",
            "At Sobraon the Sikhs were defeated; **Sham Singh Attariwala** died fighting.",
            "By the **Treaty of Lahore (March 1846)**, the Jalandhar Doab was handed over, a heavy indemnity was demanded, the Sikh army was limited and a British Resident was placed at Lahore."
          ]
        },
        {
          heading: "Between the wars",
          points: [
            "Since the Sikhs could not pay the whole indemnity, **Kashmir** was given to **Gulab Singh** of Jammu under the Treaty of Amritsar (1846).",
            "By the **Treaty of Bhairowal** (December 1846), Rani Jindan lost her power and a council of regency under the British Resident governed.",
            "Many Sikh sardars and soldiers resented the British control."
          ]
        },
        {
          heading: "Second Anglo-Sikh War (1848–49)",
          points: [
            "It began with a revolt at **Multan** in 1848 led by **Dewan Mulraj**.",
            "Battles: **Ramnagar** (1848), **Chillianwala** (13 January 1849) and **Gujrat** (21 February 1849).",
            "At Chillianwala the British suffered heavy losses, but at Gujrat the Sikh army was defeated and surrendered.",
            "The Sikh chiefs **Chattar Singh** and **Sher Singh Attariwala** fought in this war."
          ]
        },
        {
          heading: "Annexation and its causes",
          points: [
            "On **29 March 1849**, **Lord Dalhousie** annexed Punjab to British India. Duleep Singh was pensioned off, and the Koh-i-Noor diamond went to England.",
            "Punjab was ruled by a Board of Administration headed by **Henry Lawrence**.",
            "Main causes of the fall of the Sikh kingdom: weak successors, rivalry among court leaders, the disloyalty of some commanders, the uncontrolled army, and British ambition and resources."
          ]
        }
      ],
      formulas: [
        "1839 – death of Ranjit Singh; 1843 – Duleep Singh becomes Maharaja",
        "First War 1845–46: Mudki, Ferozeshah, Aliwal, Sobraon; Treaty of Lahore, March 1846",
        "Second War 1848–49: Multan revolt (Mulraj), Chillianwala, Gujrat",
        "29 March 1849 – annexation of Punjab by Lord Dalhousie",
        "Map work: Mudki, Ferozeshah, Aliwal, Sobraon, Multan, Chillianwala, Gujrat"
      ],
      terms: [
        { term: "Regent", meaning: "A person who **rules on behalf of a child king**, like Rani Jindan for Duleep Singh." },
        { term: "Indemnity", meaning: "Money demanded from the **defeated side** to cover the cost of the war." },
        { term: "Resident", meaning: "A **British officer** posted at a native court to supervise its government." },
        { term: "Annexation", meaning: "Taking over a territory and **joining it to one's own empire**." },
        { term: "Khalsa army", meaning: "The **Sikh army**, which grew powerful in politics after Ranjit Singh's death." }
      ],
      qa: [
        {
          q: "Describe the causes of the First Anglo-Sikh War.",
          a: "After Ranjit Singh's death there was chaos at court under weak rulers and the Khalsa army grew uncontrolled. The British, who had taken Sindh, gathered troops on the Sutlej. When the Sikh army crossed the Sutlej in December 1845, war began."
        },
        {
          q: "What were the terms of the Treaty of Lahore (1846)?",
          a: "The Jalandhar Doab passed to the British, a large indemnity was demanded, the Sikh army was reduced in size and a British Resident was stationed at Lahore. Duleep Singh remained Maharaja."
        },
        {
          q: "Why did the Sikh kingdom fall?",
          a: "Ranjit Singh's successors were weak and the court was divided. Some leaders were disloyal, the army was out of control, and the British, with their stronger resources, wanted the north-west frontier. After the defeat at Gujrat, Punjab was annexed in 1849."
        }
      ],
      quiz: [
        {
          q: "The First Anglo-Sikh War ended with the battle of:",
          options: ["Mudki", "Ferozeshah", "Aliwal", "Sobraon"],
          answer: 3,
          explain: "The British won at **Sobraon** on 10 February 1846."
        },
        {
          q: "The revolt that began the Second Anglo-Sikh War took place at:",
          options: ["Lahore", "Multan", "Gujrat", "Peshawar"],
          answer: 1,
          explain: "**Dewan Mulraj** rebelled at Multan in 1848."
        },
        {
          q: "Who annexed Punjab in 1849?",
          options: ["Lord Hardinge", "Lord Dalhousie", "Lord Gough", "Charles Metcalfe"],
          answer: 1,
          explain: "**Lord Dalhousie** annexed Punjab on 29 March 1849."
        },
        {
          q: "The last Maharaja of the Sikh kingdom was:",
          options: ["Kharak Singh", "Sher Singh", "Nau Nihal Singh", "Duleep Singh"],
          answer: 3,
          explain: "**Duleep Singh** was the last Maharaja."
        },
        {
          q: "The Treaty of Lahore was signed in:",
          options: ["1809", "1839", "1846", "1849"],
          answer: 2,
          explain: "The Treaty of Lahore was signed in March **1846**."
        },
        {
          q: "Who headed the Board of Administration after annexation?",
          options: ["Henry Lawrence", "Lal Singh", "Dewan Mulraj", "Gulab Singh"],
          answer: 0,
          explain: "**Henry Lawrence** headed the Board."
        }
      ]
    },
    // ───────────── Paper B ─────────────
    {
      id: "artists-and-writers",
      title: "Artists and Writers of Punjab: Sobha Singh, Amrita Sher-Gil, Bhai Vir Singh, Amrita Pritam",
      section: "Paper B",
      summary: "The lives and contributions of two painters and two writers who enriched the art and literature of Punjab: Sobha Singh, Amrita Sher-Gil, Bhai Vir Singh and Amrita Pritam.",
      notes: [
        {
          heading: "Sobha Singh (1901–1986)",
          points: [
            "A famous painter, born in **1901** at **Sri Hargobindpur** (Gurdaspur district); he later settled at **Andretta** in Himachal Pradesh, where he died in 1986.",
            "He is best known for his portraits of the **Sikh Gurus**, especially **Guru Nanak Dev Ji** and Guru Gobind Singh Ji, which hang in many Sikh homes and gurdwaras.",
            "He also painted scenes from Punjabi folk romances such as **Sohni Mahiwal** and **Heer Ranjha**, and portraits of national leaders.",
            "He was awarded the Padma Shri (1983)."
          ]
        },
        {
          heading: "Amrita Sher-Gil (1913–1941)",
          points: [
            "Born in **1913** in Budapest, Hungary, to a Sikh father, **Umrao Singh Sher-Gil**, and a Hungarian mother. She grew up partly in Shimla.",
            "She studied painting in **Paris** and returned to India in 1934. She felt that Indian life should be the subject of her art.",
            "Her paintings show ordinary Indian people, especially women, in a quiet, sad mood, with strong colours. Well-known works include **Three Girls**, **Bride's Toilet** and **South Indian Villagers**.",
            "She died young, at 28, in **Lahore** in **1941**. Her works are treasured as part of India's national art heritage."
          ]
        },
        {
          heading: "Bhai Vir Singh (1872–1957)",
          points: [
            "Born in **1872** at **Amritsar**; he is called the **father of modern Punjabi literature**.",
            "He wrote the novels **Sundari**, **Bijay Singh** and **Satwant Kaur**, which taught love for the Sikh faith and courage.",
            "His epic poem **Rana Surat Singh** and his lyrics (for example, in **Matak Hulare**) are well known.",
            "He began the newspaper **Khalsa Samachar** (1899) and supported the **Singh Sabha** reform movement and the Khalsa Tract Society. He was honoured with the Padma Bhushan; he died in 1957."
          ]
        },
        {
          heading: "Amrita Pritam (1919–2005)",
          points: [
            "Born in **1919** at **Gujranwala**, in what is now Pakistan. After the 1947 Partition she moved to India and lived in Delhi.",
            "She wrote poems, novels, short stories and an autobiography (**Rasidi Ticket**), and is regarded as one of the leading Punjabi poets of the 20th century.",
            "Her poem **Ajj Aakhaan Waris Shah Nu** is a heartfelt cry on the tragedy of Partition. Her novel **Pinjar** also deals with Partition and was made into a film.",
            "She received the Sahitya Akademi Award, the **Jnanpith Award** (1981, for *Kagaz te Canvas*) and the **Padma Vibhushan** (2004). She died in 2005."
          ]
        }
      ],
      formulas: [
        "Sobha Singh (1901–1986): painter of the Sikh Gurus; Andretta",
        "Amrita Sher-Gil (1913–1941): painter; Three Girls, Bride's Toilet",
        "Bhai Vir Singh (1872–1957): Sundari, Rana Surat Singh; Khalsa Samachar",
        "Amrita Pritam (1919–2005): Ajj Aakhaan Waris Shah Nu, Pinjar; Jnanpith 1981"
      ],
      terms: [
        { term: "Portrait", meaning: "A **painting of a person**, showing the face and character of the subject." },
        { term: "Epic", meaning: "A **long narrative poem** about heroes and great events; Rana Surat Singh is a Punjabi example." },
        { term: "Partition", meaning: "The **division of India in 1947** into India and Pakistan, which also divided Punjab." },
        { term: "Singh Sabha", meaning: "A **Sikh reform movement** of the late 19th century that promoted education and religious revival." },
        { term: "Jnanpith Award", meaning: "India's **highest literary award**, received by Amrita Pritam in 1981." }
      ],
      qa: [
        {
          q: "Write a note on Sobha Singh and his contribution to art.",
          a: "Sobha Singh (1901–1986) was a Punjabi painter who settled at Andretta. He is famous for his portraits of the Sikh Gurus, especially Guru Nanak Dev Ji, and for paintings of folk lovers like Sohni and Mahiwal. His pictures made the Gurus' images familiar in every home."
        },
        {
          q: "How did Amrita Sher-Gil contribute to Indian art?",
          a: "Amrita Sher-Gil trained in Paris but chose Indian life as her subject. She painted villagers and women in simple, strong colours, in works like Three Girls and Bride's Toilet. She introduced a modern style to Indian art and is a national art treasure."
        },
        {
          q: "Why is Bhai Vir Singh called the father of modern Punjabi literature?",
          a: "Bhai Vir Singh wrote novels, epics and lyrics in Punjabi at a time when it was little used for modern writing. His works Sundari and Rana Surat Singh and his paper Khalsa Samachar gave Punjabi literature a new direction."
        }
      ],
      quiz: [
        {
          q: "Sobha Singh is best known for his portraits of:",
          options: ["British officials", "The Sikh Gurus", "Mughal emperors", "Film stars"],
          answer: 1,
          explain: "He is remembered for his paintings of the **Sikh Gurus**."
        },
        {
          q: "Amrita Sher-Gil studied painting in:",
          options: ["London", "Lahore", "Paris", "Calcutta"],
          answer: 2,
          explain: "She studied art in **Paris**."
        },
        {
          q: "Who is known as the father of modern Punjabi literature?",
          options: ["Bhai Vir Singh", "Amrita Pritam", "Sobha Singh", "Waris Shah"],
          answer: 0,
          explain: "**Bhai Vir Singh** earned this title."
        },
        {
          q: "Amrita Pritam's poem 'Ajj Aakhaan Waris Shah Nu' is about:",
          options: ["The Green Revolution", "The grief of Partition", "A harvest festival", "A hill journey"],
          answer: 1,
          explain: "It is a cry of sorrow about the **Partition of Punjab**."
        },
        {
          q: "Which of these is a novel by Bhai Vir Singh?",
          options: ["Pinjar", "Sundari", "Rasidi Ticket", "Three Girls"],
          answer: 1,
          explain: "**Sundari** is by Bhai Vir Singh; Pinjar is by Amrita Pritam."
        },
        {
          q: "Amrita Sher-Gil died in the year:",
          options: ["1913", "1934", "1941", "1957"],
          answer: 2,
          explain: "She died in Lahore in **1941**, at the age of 28."
        }
      ]
    },
    {
      id: "music-dance-and-games",
      title: "Music, Dance and Games of Punjab",
      section: "Paper B",
      summary: "The folk music, instruments, dances and traditional games of Punjab, which express the joy, energy and community spirit of its people.",
      notes: [
        {
          heading: "Folk dances",
          points: [
            "**Bhangra** is a lively men's dance linked to the harvest and the festival of **Baisakhi**; it is performed to the beat of the dhol, with energetic jumps and arm movements.",
            "**Giddha** is the women's dance, performed in a circle with clapping and folk verses called **boliyan**, often on weddings and festivals such as **Teej**.",
            "Other dances include **Jhumar**, **Luddi**, **Sammi** and **Kikli**. Kikli is a playful girls' dance in pairs.",
            "Dances are performed on weddings, harvests and fairs, and reflect farm life."
          ]
        },
        {
          heading: "Folk instruments",
          points: [
            "The **dhol** is a large two-sided drum that gives the lead beat for bhangra.",
            "The **tumbi** is a single-stringed instrument with a high, bright sound, plucked with a finger. It is used in folk songs.",
            "The **algoza** is a pair of flutes played together by a folk musician.",
            "Other instruments: **chimta** (iron tongs with jingles), **dhad** and **sarangi**, which accompany ballads and devotional music."
          ]
        },
        {
          heading: "Folk songs and ballads",
          points: [
            "Folk songs mark every stage of life, from birth and marriage to harvests. Wedding songs include **suhag** and **ghorian**.",
            "Romantic tales such as **Heer Ranjha** and **Sohni Mahiwal** are sung and retold by singers.",
            "**Dhadi** singers sing heroic ballads (vaars) about warriors, accompanied by the dhad and sarangi.",
            "Gurbani **kirtan** is a special form of devotional music."
          ]
        },
        {
          heading: "Traditional games",
          points: [
            "**Kabaddi** is the best-known game of Punjab. Two teams take turns to send a raider into the other half, who tries to touch opponents and return holding his breath while chanting. It has become a national and international sport.",
            "**Gatka** is a traditional Sikh martial art in which wooden sticks (soti) are used in place of swords, practised in displays and on festivals such as Hola Mohalla.",
            "Village games include **gulli danda**, **pitthu garam**, kite flying and wrestling (**kushti**).",
            "The **Kila Raipur** sports festival near Ludhiana, held every year, is known as the 'Rural Olympics' and features tug-of-war, ox races and strength events."
          ]
        }
      ],
      formulas: [
        "Dances: Bhangra (men, Baisakhi), Giddha (women), Jhumar, Luddi, Sammi, Kikli",
        "Instruments: dhol, tumbi, algoza, chimta, dhad, sarangi",
        "Games: kabaddi, gatka (martial art), gulli danda, kushti",
        "Kila Raipur (Ludhiana) – Rural Olympics"
      ],
      terms: [
        { term: "Bhangra", meaning: "An **energetic folk dance of Punjab** performed by men to the beat of the dhol, especially at harvest time." },
        { term: "Giddha", meaning: "The **folk dance of Punjabi women**, with clapping and sung verses." },
        { term: "Boliyan", meaning: "Short **folk verses** sung in giddha." },
        { term: "Tumbi", meaning: "A **single-string plucked instrument** of Punjab." },
        { term: "Gatka", meaning: "A **Sikh martial art** practised with wooden sticks." },
        { term: "Kabaddi", meaning: "A **team contact game** played with raids and tackles, the traditional sport of Punjab." }
      ],
      qa: [
        {
          q: "Write a note on bhangra and giddha.",
          a: "Bhangra is a vigorous harvest dance of men performed with the dhol, especially at Baisakhi. Giddha is the women's dance, performed in a circle with clapping and boliyan, often at weddings and Teej. Both express the joy of Punjabi village life."
        },
        {
          q: "Name any three folk instruments of Punjab and describe one.",
          a: "Dhol, tumbi and algoza. The tumbi is a single-stringed instrument played by plucking, with a high, sharp sound used in folk songs."
        },
        {
          q: "What is gatka? Why is it important?",
          a: "Gatka is a Sikh martial art in which wooden sticks are used in place of swords. It preserves the warrior tradition begun by Guru Hargobind Ji and Guru Gobind Singh Ji and is shown at festivals such as Hola Mohalla."
        }
      ],
      quiz: [
        {
          q: "Which folk dance is performed by women of Punjab?",
          options: ["Bhangra", "Giddha", "Gatka", "Kabaddi"],
          answer: 1,
          explain: "**Giddha** is the women's dance."
        },
        {
          q: "The tumbi is a:",
          options: ["Double flute", "Single-string instrument", "Large drum", "Pair of iron tongs"],
          answer: 1,
          explain: "The **tumbi** has a single string."
        },
        {
          q: "Bhangra is mainly associated with the festival of:",
          options: ["Diwali", "Lohri only", "Baisakhi", "Eid"],
          answer: 2,
          explain: "Bhangra is linked to the harvest and **Baisakhi**."
        },
        {
          q: "Gatka is a:",
          options: ["Folk song", "Martial art with wooden sticks", "Style of embroidery", "Type of drum"],
          answer: 1,
          explain: "Gatka is a **martial art**."
        },
        {
          q: "The 'Rural Olympics' are held at:",
          options: ["Kila Raipur", "Amritsar", "Patiala", "Hoshiarpur"],
          answer: 0,
          explain: "The **Kila Raipur** sports festival is called the Rural Olympics."
        },
        {
          q: "The algoza is:",
          options: ["A drum", "A pair of flutes", "A stringed instrument", "A metal clapper"],
          answer: 1,
          explain: "The algoza is a **double flute**."
        }
      ]
    },
    {
      id: "freedom-fighters",
      title: "Freedom Fighters of Punjab",
      section: "Paper B",
      summary: "The lives and sacrifices of Lala Lajpat Rai, Bhagat Singh, Udham Singh and Kartar Singh Sarabha, four Punjabi heroes of India's freedom struggle.",
      notes: [
        {
          heading: "Lala Lajpat Rai (1865–1928)",
          points: [
            "Born in **1865** at **Dhudike** (Moga district); known as **Punjab Kesari** (Lion of Punjab).",
            "A leader of the Indian National Congress and part of the 'Lal-Bal-Pal' trio with Bal Gangadhar Tilak and Bipin Chandra Pal. He supported the **Arya Samaj** and the DAV schools.",
            "He opposed the **Simon Commission** (which had no Indian member) and led a peaceful march in Lahore in **October 1928**. He was beaten by police lathis and died on **17 November 1928**.",
            "His death inspired revolutionaries to avenge it."
          ]
        },
        {
          heading: "Shaheed Bhagat Singh (1907–1931)",
          points: [
            "Born in **1907** at **Banga** village (Lyallpur district; now in Pakistan). Khatkar Kalan, near Banga, is his ancestral village.",
            "He was shaken by the **Jallianwala Bagh massacre** (1919) and joined the revolutionary movement, founding the **Naujawan Bharat Sabha** and working in the **Hindustan Socialist Republican Association**.",
            "In **December 1928** he and his comrades shot the police officer **Saunders** at Lahore, to avenge Lala Lajpat Rai's death. In **April 1929** he threw harmless bombs in the Central Legislative Assembly in Delhi, to draw attention to the cause, and courted arrest.",
            "He was hanged at Lahore on **23 March 1931** with **Sukhdev and Rajguru**. His slogan **Inquilab Zindabad** (Long Live the Revolution) became a national cry."
          ]
        },
        {
          heading: "Shaheed Udham Singh (1899–1940)",
          points: [
            "Born in **1899** at **Sunam** (Sangrur district). As a boy, he was deeply affected by the **Jallianwala Bagh massacre** of **13 April 1919**.",
            "He took the name **Ram Mohammad Singh Azad**, to show the unity of all communities.",
            "On **13 March 1940** at Caxton Hall, London, he shot **Michael O'Dwyer**, who was Lieutenant-Governor of Punjab at the time of the massacre.",
            "He was hanged in London on **31 July 1940**."
          ]
        },
        {
          heading: "Shaheed Kartar Singh Sarabha (1896–1915)",
          points: [
            "Born in **1896** at **Sarabha** village (Ludhiana district). He went to the USA for studies, where he joined the **Ghadar Party** (founded 1913).",
            "He returned to India to prepare an armed uprising against the British in 1914–15, and brought out the party's paper, **Ghadar**.",
            "The plan was discovered, and he was arrested and tried in the **Lahore Conspiracy Case**.",
            "He was hanged on **16 November 1915**, aged only 19. Bhagat Singh regarded him as an inspiration."
          ]
        }
      ],
      formulas: [
        "Lala Lajpat Rai: 1865–1928; Simon Commission protest, Lahore, Oct 1928; died 17 Nov 1928",
        "Bhagat Singh: 1907–1931; Saunders shot Dec 1928; Assembly bomb April 1929; hanged 23 March 1931",
        "Udham Singh: shot O'Dwyer 13 March 1940 (London); hanged 31 July 1940",
        "Kartar Singh Sarabha: Ghadar Party; hanged 16 Nov 1915",
        "Jallianwala Bagh: 13 April 1919, Amritsar"
      ],
      terms: [
        { term: "Punjab Kesari", meaning: "'Lion of Punjab'; the **title of Lala Lajpat Rai**." },
        { term: "Inquilab Zindabad", meaning: "'Long live the revolution'; the **slogan** made famous by Bhagat Singh." },
        { term: "Ghadar Party", meaning: "A **revolutionary organisation** of Indians abroad, founded in 1913, which aimed to overthrow British rule." },
        { term: "Simon Commission", meaning: "A **British commission (1928)** with no Indian members, boycotted across India." },
        { term: "Shaheed", meaning: "A **martyr**, one who gives life for a cause." }
      ],
      qa: [
        {
          q: "Describe the role of Lala Lajpat Rai in the freedom struggle.",
          a: "Lala Lajpat Rai was a Congress leader known as Punjab Kesari. He supported education through the DAV schools and the Arya Samaj. He led the protest against the Simon Commission in Lahore in 1928, was injured in a police lathi charge and died on 17 November 1928."
        },
        {
          q: "Why is Bhagat Singh called Shaheed-e-Azam?",
          a: "He gave his life for India's freedom at the age of 23. He shot Saunders at Lahore in 1928, threw harmless bombs in the Assembly in 1929 and was hanged on 23 March 1931. He inspired the youth with his courage and ideas."
        },
        {
          q: "Why did Udham Singh kill Michael O'Dwyer?",
          a: "O'Dwyer was the Lieutenant-Governor of Punjab at the time of the Jallianwala Bagh massacre of 1919. Udham Singh, who had witnessed its effects, shot him in London on 13 March 1940 to avenge the massacre, and was hanged on 31 July 1940."
        }
      ],
      quiz: [
        {
          q: "Lala Lajpat Rai was known as:",
          options: ["Punjab Kesari", "Sher-e-Punjab", "Lokmanya", "Shaheed-e-Azam"],
          answer: 0,
          explain: "He was called **Punjab Kesari**; Sher-e-Punjab is Ranjit Singh."
        },
        {
          q: "Lala Lajpat Rai died in:",
          options: ["1919", "1925", "1928", "1931"],
          answer: 2,
          explain: "He died on 17 November **1928**."
        },
        {
          q: "Bhagat Singh was hanged in:",
          options: ["1915", "1928", "1931", "1940"],
          answer: 2,
          explain: "He was hanged on 23 March **1931**."
        },
        {
          q: "Udham Singh shot Michael O'Dwyer in:",
          options: ["Amritsar", "Delhi", "Lahore", "London"],
          answer: 3,
          explain: "The shooting was at Caxton Hall, **London**, in 1940."
        },
        {
          q: "Kartar Singh Sarabha was a member of the:",
          options: ["Ghadar Party", "Muslim League", "Swaraj Party", "Singh Sabha"],
          answer: 0,
          explain: "He was a leader of the **Ghadar Party**."
        },
        {
          q: "Lala Lajpat Rai was injured while protesting against the:",
          options: ["Rowlatt Act", "Simon Commission", "Partition of Bengal", "Salt tax"],
          answer: 1,
          explain: "He led a demonstration against the **Simon Commission**."
        }
      ]
    },
    {
      id: "rural-handicrafts",
      title: "Rural Handicrafts of Punjab",
      section: "Paper B",
      summary: "The traditional crafts of Punjab's villages: phulkari embroidery, durrie weaving, juttis, woodwork and pottery, which combine skill, beauty and everyday use.",
      notes: [
        {
          heading: "Phulkari",
          points: [
            "**Phulkari** means 'flower work'. It is embroidery done with coloured silk thread on coarse cotton cloth, usually on shawls and dupattas.",
            "The pattern is stitched from the back of the cloth, in a darning stitch, without counting threads.",
            "When the whole cloth is covered with embroidery it is called **bagh** (garden). Women made phulkari for weddings and for gifts.",
            "The designs are inspired by flowers, fields and daily life. Phulkari is made by village women at home."
          ]
        },
        {
          heading: "Durrie (dari) weaving and cane work",
          points: [
            "A **durrie** (dari) is a flat-woven cotton rug used for sitting and sleeping, made on a simple loom with geometric patterns.",
            "Village women weave and decorate **charpais** (rope cots) with colourful thread and make **peerhis** (low woven stools).",
            "Baskets and mats are woven from **moonj** (grass) and cane.",
            "These crafts use local material and need little equipment."
          ]
        },
        {
          heading: "Juttis and leatherwork",
          points: [
            "The **Punjabi jutti** is a hand-made leather shoe, often embroidered with coloured thread or gold-coloured work.",
            "Places such as **Patiala** and **Muktsar** are known for juttis.",
            "Juttis are worn by both men and women, and are popular at weddings and festivals, and in fashion today.",
            "The craft is practised by skilled cobblers and handed down in families."
          ]
        },
        {
          heading: "Woodwork and metalwork",
          points: [
            "Village carpenters make charpais, furniture, spinning wheels (**charkha**), and carved doors and windows.",
            "**Hoshiarpur** is known for wood inlay work on furniture and boxes.",
            "**Jandiala Guru** (near Amritsar) is famous for its craft of making copper and brass utensils by hand; the craft of the Thatheras was added to UNESCO's list of intangible cultural heritage.",
            "These crafts give work to village families."
          ]
        },
        {
          heading: "Pottery",
          points: [
            "Village potters (**kumhars**) shape clay on a wheel and bake it in a kiln.",
            "They make water pots (**matka**), **surahi**, lamps (**diya**), toys and cooking pots, which keep water cool and are cheap.",
            "Potters are usually part of the village economy and make items for festivals.",
            "Rural crafts face competition from machine-made goods, so they need support from the government and buyers to survive."
          ]
        }
      ],
      formulas: [
        "Phulkari – silk embroidery on cotton; bagh = fully covered cloth",
        "Durrie/dari – woven cotton rug; peerhi, charpai – village woven furniture",
        "Jutti – hand-made leather shoe (Patiala, Muktsar)",
        "Hoshiarpur – wood inlay work; Jandiala Guru – brass and copper utensils (Thatheras)",
        "Pottery – kumhar, matka, surahi, diya"
      ],
      terms: [
        { term: "Phulkari", meaning: "A **flower-pattern embroidery** of Punjab, done with silk thread on cotton." },
        { term: "Bagh", meaning: "A phulkari cloth **fully covered with embroidery** (literally 'garden')." },
        { term: "Durrie", meaning: "A **flat-woven cotton rug**, also spelt dari." },
        { term: "Jutti", meaning: "A traditional **hand-made leather shoe** of Punjab." },
        { term: "Kumhar", meaning: "A **potter** who shapes clay pots on a wheel." },
        { term: "Handicraft", meaning: "An item made **by hand** using traditional skill." }
      ],
      qa: [
        {
          q: "What is phulkari? How is it made?",
          a: "Phulkari is the folk embroidery of Punjab, meaning 'flower work'. Women stitch flower and geometric patterns with coloured silk thread on coarse cotton cloth, working from the back of the fabric. A cloth fully covered with the stitches is called a bagh."
        },
        {
          q: "Write a note on the Punjabi jutti.",
          a: "The jutti is a hand-made leather shoe worn by men and women in Punjab. It is often embroidered with bright thread. Patiala and Muktsar are known for it. It is popular for weddings and festivals."
        },
        {
          q: "Why are rural handicrafts important?",
          a: "They preserve the culture of Punjab, give income to village families, use local materials and create beautiful, useful objects. They must be supported because machine-made goods compete with them."
        }
      ],
      quiz: [
        {
          q: "Phulkari is a type of:",
          options: ["Pottery", "Embroidery", "Metalwork", "Woodwork"],
          answer: 1,
          explain: "Phulkari is **embroidery**."
        },
        {
          q: "A phulkari cloth fully covered with embroidery is called:",
          options: ["Chope", "Bagh", "Durrie", "Peerhi"],
          answer: 1,
          explain: "A fully covered cloth is a **bagh**."
        },
        {
          q: "A potter in Punjab is known as a:",
          options: ["Julaha", "Kumhar", "Lohar", "Mochi"],
          answer: 1,
          explain: "A **kumhar** makes clay pots."
        },
        {
          q: "Hoshiarpur is known for:",
          options: ["Wood inlay work", "Phulkari only", "Pottery only", "Carpets"],
          answer: 0,
          explain: "Hoshiarpur is famous for **wood inlay work**."
        },
        {
          q: "A jutti is a:",
          options: ["Rug", "Shawl", "Leather shoe", "Clay lamp"],
          answer: 2,
          explain: "A jutti is a **leather shoe**."
        },
        {
          q: "Jandiala Guru is famous for:",
          options: ["Brass and copper utensils", "Carpets", "Silk sarees", "Leather bags"],
          answer: 0,
          explain: "The Thatheras of **Jandiala Guru** make utensils by hand."
        }
      ]
    }
  ]
});
