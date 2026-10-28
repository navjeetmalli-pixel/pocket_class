// Class 5 English: Grammar, Vocabulary, Writing Skills and Reading Skills.
// Format: see CONTENT_GUIDE.md. All examples and model answers are original.
StudyData.add(5, "english", {
  // What this content follows. match: "textbook" | "older-book" | "topic". Set reviewed to a date once a teacher has checked it.
  syllabus: {board: "CBSE", match: "topic", books: [], note: "Grammar and writing skills, arranged by topic. Textbook lessons are not included.", reviewed: false},
  chapters: [
    // ───────────────────────────── GRAMMAR ─────────────────────────────
    {
      id: "kinds-of-nouns",
      title: "Kinds of Nouns",
      section: "Grammar",
      summary: "Nouns can be grouped in different ways. This chapter covers common and proper nouns, collective nouns, material nouns and abstract nouns, with examples from everyday life.",
      notes: [
        {
          heading: "Common and proper nouns",
          points: [
            "A **common noun** is a general name: river, market, city, girl.",
            "A **proper noun** is the special name of one person, place or thing and begins with a capital letter: Ganga, Chandni Chowk, Mumbai, Ananya."
          ]
        },
        {
          heading: "Collective and material nouns",
          points: [
            "A **collective noun** names a group as one whole: a **crowd** of people, a **library** of books, a **fleet** of buses.",
            "A **material noun** names the substance that something is made of: gold, cotton, silver, honey, silk."
          ]
        },
        {
          heading: "Abstract nouns",
          points: [
            "An **abstract noun** names a quality, feeling or idea that we cannot see or touch: honesty, courage, joy, friendship.",
            "We can form many abstract nouns from adjectives: kind → kindness, brave → bravery, free → freedom."
          ]
        }
      ],
      formulas: [
        "Common noun: general name (river)",
        "Proper noun: special name + capital letter (Ganga)",
        "Abstract noun: quality or feeling (courage, joy)"
      ],
      terms: [
        { term: "Common noun", meaning: "A general name for a person, place or thing, such as city or boy." },
        { term: "Proper noun", meaning: "A special name that begins with a capital letter, such as Delhi or Riya." },
        { term: "Material noun", meaning: "A noun that names the substance something is made of, such as wood or silver." },
        { term: "Abstract noun", meaning: "A noun that names a quality, feeling or idea, such as honesty or fear." }
      ],
      examples: [
        {
          q: "Identify the kind of each noun in: “Ananya bought a bunch of roses, a bottle of honey and a shirt made of silk in Jaipur.”",
          steps: [
            "Ananya and Jaipur are names of one person and one city, so they are **proper nouns**.",
            "bunch names a group, so it is a **collective noun**.",
            "honey and silk name substances, so they are **material nouns**.",
            "roses and shirt are general names, so they are **common nouns**."
          ],
          answer: "Ananya, Jaipur (proper); bunch (collective); honey, silk (material); roses, shirt (common)."
        }
      ],
      qa: [
        {
          q: "What is a material noun? Give two examples.",
          a: "A **material noun** names the substance that things are made of, such as **gold**, **cotton** and **wood**."
        },
        {
          q: "What kind of noun is “freedom”? Explain why.",
          a: "“Freedom” is an **abstract noun**, because it names an idea that we cannot see or touch."
        }
      ],
      quiz: [
        {
          q: "Which of these is an abstract noun?",
          options: ["courage", "table", "Himalayas", "gold"],
          answer: 0,
          explain: "**Courage** is a quality we cannot see or touch. The other words are common, proper or material nouns."
        },
        {
          q: "Which of these is a material noun?",
          options: ["jeweller", "silver", "Chennai", "teacher"],
          answer: 1,
          explain: "**Silver** is the substance that jewellery and utensils are made of."
        },
        {
          q: "Which of these is a proper noun?",
          options: ["river", "lake", "Ganga", "stream"],
          answer: 2,
          explain: "**Ganga** is the special name of one river, so it is a proper noun."
        },
        {
          q: "A ___ of students went on a trip to the museum.",
          options: ["herd", "flock", "pack", "class"],
          answer: 3,
          explain: "A group of students is called a **class**. A herd, flock or pack is for animals."
        },
        {
          q: "Which of these is a common noun?",
          options: ["market", "Delhi", "Ramesh", "Ganesh"],
          answer: 0,
          explain: "**Market** is a general name for a place where things are bought and sold."
        }
      ]
    },

    {
      id: "tenses",
      title: "Tenses",
      section: "Grammar",
      summary: "Tenses show when an action happens: now, in the past or in the future. This chapter covers the present, past and future tenses with their time words and forms.",
      notes: [
        {
          heading: "Three main tenses",
          points: [
            "The **present tense** shows an action that happens now or regularly: Priya **writes** a letter every week.",
            "The **past tense** shows an action that was finished: Priya **wrote** a letter last week.",
            "The **future tense** shows an action that will happen later: Priya **will write** a letter tomorrow."
          ]
        },
        {
          heading: "Present tense",
          points: [
            "Use the base verb with I, we, you and they: We play. Add -s or -es with he, she and it: He plays, she washes.",
            "Time words include every day, always, now and usually."
          ]
        },
        {
          heading: "Past tense",
          points: [
            "Regular verbs add -ed: walk → walked. Irregular verbs change completely: go → went, eat → ate.",
            "Time words include yesterday, last week, in 2024 and ago."
          ]
        },
        {
          heading: "Future tense",
          points: [
            "Make the future with **will** and the base verb: I **will call** you tonight. They **will visit** Agra next week.",
            "Time words include tomorrow, next year, soon and later."
          ]
        }
      ],
      formulas: [
        "Present: He reads. / She writes.",
        "Past: He read. / She wrote.",
        "Future: will + base verb = He will read."
      ],
      terms: [
        { term: "Tense", meaning: "The form of a verb that shows when an action happens." },
        { term: "Present tense", meaning: "The form that shows an action happening now or regularly." },
        { term: "Past tense", meaning: "The form that shows an action that has already finished." },
        { term: "Future tense", meaning: "The form that shows an action that will happen later." }
      ],
      examples: [
        {
          q: "Change “Riya writes a letter.” into the past tense and then into the future tense.",
          steps: [
            "Past: writes → wrote (irregular), so “Riya wrote a letter.”",
            "Future: use will + base verb write, so “Riya will write a letter.”"
          ],
          answer: "Riya wrote a letter. Riya will write a letter."
        }
      ],
      qa: [
        {
          q: "How do we make the future tense?",
          a: "We use **will** followed by the base verb. Example: They **will visit** Agra next week."
        },
        {
          q: "What is the difference between “Ravi plays” and “Ravi played”?",
          a: "“Plays” is in the present tense and shows an action that happens regularly. “Played” is in the past tense and shows an action that has already finished."
        }
      ],
      quiz: [
        {
          q: "Which sentence is in the past tense?",
          options: ["She writes a poem.", "She wrote a poem.", "She will write a poem.", "She is writing a poem."],
          answer: 1,
          explain: "**Wrote** is the past tense of write. The others are present or future."
        },
        {
          q: "Choose the future tense: We ___ to the zoo tomorrow.",
          options: ["went", "go", "will go", "going"],
          answer: 2,
          explain: "Tomorrow shows a future time, so we use **will go**."
        },
        {
          q: "Which word shows future time?",
          options: ["yesterday", "last year", "ago", "tomorrow"],
          answer: 3,
          explain: "**Tomorrow** shows a time that has not yet come. The others show past time."
        },
        {
          q: "My brother ___ cricket every Sunday.",
          options: ["plays", "will play", "played", "play"],
          answer: 0,
          explain: "“Every Sunday” shows a regular action, so we use the present tense with he: **plays**."
        },
        {
          q: "What is the correct past tense of “eat”?",
          options: ["eated", "ate", "eaten", "eat"],
          answer: 1,
          explain: "**Ate** is the past tense of eat. Eat is irregular and does not add -ed."
        }
      ]
    },

    {
      id: "subject-and-predicate",
      title: "Subject and Predicate",
      section: "Grammar",
      summary: "Every complete sentence has two parts: the subject, which is what the sentence is about, and the predicate, which tells us what the subject does or is. This chapter helps you split any sentence into these parts.",
      notes: [
        {
          heading: "What is the subject?",
          points: [
            "The **subject** is the person, animal or thing that the sentence is about. It usually answers the question “who” or “what”.",
            "Example: **The little boy** ran to school."
          ]
        },
        {
          heading: "What is the predicate?",
          points: [
            "The **predicate** tells what the subject does, or says something about it. It always contains a verb.",
            "Example: The little boy **ran to school**."
          ]
        },
        {
          heading: "Simple subject and simple predicate",
          points: [
            "The **simple subject** is the main noun or pronoun: “boy” in “The little boy ran to school”.",
            "The **simple predicate** is the main verb: “ran”."
          ]
        },
        {
          heading: "Tricky sentences",
          points: [
            "In a question, the subject can come after a helping verb: Where **is Ravi**? Here “Ravi” is the subject.",
            "In a command, the subject “you” is understood but not written: (You) Close the door."
          ]
        }
      ],
      formulas: [
        "Sentence = Subject + Predicate",
        "Who or what? → subject. What is done or said? → predicate.",
        "Simple subject = main noun or pronoun; simple predicate = main verb"
      ],
      terms: [
        { term: "Subject", meaning: "The person, animal or thing that a sentence is about." },
        { term: "Predicate", meaning: "The part of a sentence that tells what the subject does or is." },
        { term: "Simple subject", meaning: "The main noun or pronoun in the subject part." },
        { term: "Simple predicate", meaning: "The main verb in the predicate part." }
      ],
      examples: [
        {
          q: "Divide this sentence into subject and predicate: “The farmers sold fresh vegetables at the market.”",
          steps: [
            "Who sold? “The farmers”, so that is the subject.",
            "What did they do? “sold fresh vegetables at the market”, so that is the predicate.",
            "The simple subject is “farmers” and the simple predicate is “sold”."
          ],
          answer: "Subject: The farmers. Predicate: sold fresh vegetables at the market."
        }
      ],
      qa: [
        {
          q: "What is the subject of a sentence?",
          a: "The subject is the person, animal or thing that the sentence is about. It usually answers the question “who” or “what” before the verb."
        },
        {
          q: "Identify the subject and predicate in: “Under the mango tree sat an old man.”",
          a: "Subject: **an old man**. Predicate: **sat under the mango tree**."
        }
      ],
      quiz: [
        {
          q: "In “My sister sings beautifully”, what is the subject?",
          options: ["sings", "beautifully", "My sister", "sings beautifully"],
          answer: 2,
          explain: "**My sister** is who the sentence is about. The rest is the predicate."
        },
        {
          q: "Which part of “Birds build nests in trees” is the predicate?",
          options: ["Birds", "Birds build", "nests", "build nests in trees"],
          answer: 3,
          explain: "The predicate tells what the birds do: **build nests in trees**."
        },
        {
          q: "What is the simple predicate in “The river flows through our village”?",
          options: ["flows", "river", "village", "through"],
          answer: 0,
          explain: "**Flows** is the main verb, so it is the simple predicate."
        },
        {
          q: "What is the complete subject of “The tall trees in our park are very old”?",
          options: ["are very old", "The tall trees in our park", "very old", "our park"],
          answer: 1,
          explain: "The complete subject is **The tall trees in our park**, because it names what the sentence is about."
        },
        {
          q: "Which part of a sentence tells what the subject does or says?",
          options: ["subject", "noun", "predicate", "adverb"],
          answer: 2,
          explain: "The **predicate** tells what the subject does or says."
        }
      ]
    },

    {
      id: "kinds-of-sentences",
      title: "Kinds of Sentences",
      section: "Grammar",
      summary: "Sentences are grouped by their purpose: statements, questions, commands and exclamations. This chapter shows how each kind is formed and punctuated.",
      notes: [
        {
          heading: "Assertive sentences",
          points: [
            "An **assertive sentence** (statement) tells something and ends with a full stop: The sun rises in the east.",
            "A statement can be positive (She is singing) or negative (She is not singing)."
          ]
        },
        {
          heading: "Interrogative sentences",
          points: [
            "An **interrogative sentence** asks a question and ends with a question mark: Where do you live?",
            "Questions often begin with who, what, where, when, why or how, or with a helping verb such as is, do or can: Do you like mangoes?"
          ]
        },
        {
          heading: "Imperative sentences",
          points: [
            "An **imperative sentence** gives a command, request, advice or instruction: Please close the window.",
            "It ends with a full stop, or with an exclamation mark for a strong command: Stop!"
          ]
        },
        {
          heading: "Exclamatory sentences",
          points: [
            "An **exclamatory sentence** shows strong feeling such as joy, surprise or sorrow, and ends with an exclamation mark.",
            "Use “What a …!” with a noun: What a lovely garden! Use “How …!” with an adjective: How beautiful the sky is!"
          ]
        }
      ],
      formulas: [
        "Statement → full stop (.)",
        "Question → question mark (?)",
        "Command → full stop (.) or exclamation mark (!)",
        "Strong feeling → What a + noun! / How + adjective!"
      ],
      terms: [
        { term: "Assertive sentence", meaning: "A sentence that makes a statement." },
        { term: "Interrogative sentence", meaning: "A sentence that asks a question." },
        { term: "Imperative sentence", meaning: "A sentence that gives a command, request or instruction." },
        { term: "Exclamatory sentence", meaning: "A sentence that shows strong feeling." }
      ],
      examples: [
        {
          q: "Name the kind of each sentence: (a) “Please bring your book.” (b) “How beautiful the sky is!” (c) “Where is the station?”",
          steps: [
            "(a) It gives a polite request, so it is **imperative**.",
            "(b) It shows strong feeling and ends with !, so it is **exclamatory**.",
            "(c) It asks a question and ends with ?, so it is **interrogative**."
          ],
          answer: "(a) imperative; (b) exclamatory; (c) interrogative"
        }
      ],
      qa: [
        {
          q: "Change “It is very cold.” into an exclamatory sentence.",
          a: "“How cold it is!” or “What a cold day!”"
        },
        {
          q: "What is an imperative sentence? Give an example.",
          a: "An imperative sentence gives a command, request or instruction. Example: “Close the door.” The subject “you” is understood."
        }
      ],
      quiz: [
        {
          q: "Which is an interrogative sentence?",
          options: ["Close the gate.", "The library is closed.", "What a big library!", "Where is the library?"],
          answer: 3,
          explain: "It asks a question and ends with a question mark."
        },
        {
          q: "Which sentence is imperative?",
          options: ["Sit down quietly.", "She sat down quietly.", "Did she sit down?", "How quietly she sits!"],
          answer: 0,
          explain: "“Sit down quietly” is a command, so it is imperative."
        },
        {
          q: "Which sentence is exclamatory?",
          options: ["What is your dog’s name?", "What a lovely dog!", "Give the dog some food.", "The dog is sleeping."],
          answer: 1,
          explain: "“What a lovely dog!” shows strong feeling and ends with an exclamation mark."
        },
        {
          q: "Which sentence is assertive (a statement)?",
          options: ["Did you finish?", "Go away!", "The train leaves at six.", "How fast!"],
          answer: 2,
          explain: "“The train leaves at six” is a statement, so it is assertive."
        },
        {
          q: "Change into an exclamatory sentence: “It is very hot today.”",
          options: ["Is it hot today?", "It is hot today.", "Hot it is today.", "How hot it is today!"],
          answer: 3,
          explain: "“How hot it is today!” is the exclamatory form of the sentence."
        }
      ]
    },

    {
      id: "degrees-of-comparison",
      title: "Degrees of Comparison",
      section: "Grammar",
      summary: "Adjectives change their form to compare things. This chapter explains the positive, comparative and superlative degrees, with the rules for short, long and irregular adjectives.",
      notes: [
        {
          heading: "Three degrees",
          points: [
            "The **positive degree** describes one thing: Rohan is **tall**.",
            "The **comparative degree** compares two things: Rohan is **taller** than Amit.",
            "The **superlative degree** compares three or more things: Rohan is the **tallest** in the class."
          ]
        },
        {
          heading: "Short adjectives",
          points: [
            "For one-syllable adjectives, add **-er** and **-est**: tall → taller → tallest.",
            "If the adjective ends in e, add -r and -st: brave → braver → bravest.",
            "If it ends in a consonant + y, change y to i: happy → happier → happiest."
          ]
        },
        {
          heading: "Long adjectives and irregular forms",
          points: [
            "For adjectives with two or more syllables, use **more** and **most**: beautiful → more beautiful → most beautiful.",
            "Some adjectives are irregular: good → better → best; bad → worse → worst; little → less → least."
          ]
        },
        {
          heading: "Using than and the",
          points: [
            "Use **than** after the comparative: Sita is taller **than** Meena.",
            "Use **the** before the superlative: Sita is **the** tallest girl in the class."
          ]
        }
      ],
      formulas: [
        "Positive → Comparative (-er / more) → Superlative (-est / most)",
        "tall → taller → tallest; happy → happier → happiest",
        "good → better → best; bad → worse → worst"
      ],
      terms: [
        { term: "Degree of comparison", meaning: "The form an adjective takes to show how much of a quality something has." },
        { term: "Positive degree", meaning: "The basic form of an adjective, such as tall or clever." },
        { term: "Comparative degree", meaning: "The form used to compare two things, such as taller or more clever." },
        { term: "Superlative degree", meaning: "The form used to compare three or more things, such as tallest or most clever." }
      ],
      examples: [
        {
          q: "Write the comparative and superlative of: (a) happy (b) beautiful (c) good.",
          steps: [
            "happy ends in a consonant + y, so change y to i: happier, happiest.",
            "beautiful has three syllables, so use more and most: more beautiful, most beautiful.",
            "good is irregular: better, best."
          ],
          answer: "happier, happiest; more beautiful, most beautiful; better, best"
        }
      ],
      qa: [
        {
          q: "What are the three degrees of comparison?",
          a: "The three degrees are the **positive** (tall), the **comparative** (taller) and the **superlative** (tallest)."
        },
        {
          q: "Why do we say “Sita is taller than Meena” but “Sita is the tallest in the class”?",
          a: "We use **than** with the comparative to compare two people. We use **the** with the superlative when we compare one person with a whole group of three or more."
        }
      ],
      quiz: [
        {
          q: "What is the comparative of “tall”?",
          options: ["taller", "tallest", "more tall", "tall-er"],
          answer: 0,
          explain: "Tall is a short adjective, so we add -er: **taller**."
        },
        {
          q: "What is the superlative of “beautiful”?",
          options: ["beautifullest", "most beautiful", "more beautiful", "beautifuler"],
          answer: 1,
          explain: "Beautiful has three syllables, so we use **most beautiful**."
        },
        {
          q: "Rani is the ___ student in the class.",
          options: ["good", "better", "best", "gooder"],
          answer: 2,
          explain: "Comparing one student with the whole class uses the superlative. The superlative of good is **best**."
        },
        {
          q: "Which sentence is correct?",
          options: ["Ravi is more taller than Sam.", "Ravi is tallest than Sam.", "Ravi is the taller than Sam.", "Ravi is taller than Sam."],
          answer: 3,
          explain: "Two people are compared, so we use the comparative **taller** with **than**."
        },
        {
          q: "What is the superlative of “happy”?",
          options: ["happiest", "happyest", "happier", "most happy"],
          answer: 0,
          explain: "Happy ends in a consonant + y, so it becomes **happiest**."
        }
      ]
    },

    // ───────────────────────────── VOCABULARY ─────────────────────────────
    {
      id: "homophones",
      title: "Homophones",
      section: "Vocabulary",
      summary: "Homophones are words that sound the same but have different spellings and meanings. This chapter helps you learn common pairs and choose the right word in a sentence.",
      notes: [
        {
          heading: "What are homophones?",
          points: [
            "**Homophones** are words that sound the same but have different spellings and meanings: sea and see, to and two.",
            "Only the meaning tells us which spelling is right."
          ]
        },
        {
          heading: "Common pairs",
          points: [
            "**sea** (the ocean) and **see** (to look); **hear** (to listen) and **here** (in this place).",
            "**one** (the number 1) and **won** (did win in the past); **pair** (two things) and **pear** (a fruit).",
            "**flour** (atta for making roti) and **flower** (a bloom); **right** (correct) and **write** (to put words on paper)."
          ]
        },
        {
          heading: "Their, there and they’re",
          points: [
            "**their** shows belonging: Their house is near the lake.",
            "**there** shows a place: Put the bag over there.",
            "**they’re** is a short form of “they are”: They’re coming soon."
          ]
        },
        {
          heading: "Choosing the right word",
          points: [
            "Read the whole sentence and think about its meaning before you choose the word.",
            "Ask yourself: is it a number, a place, a body of water, or does it show belonging?"
          ]
        }
      ],
      formulas: [
        "sea – see; to – too – two",
        "their (belongs to them) – there (a place) – they’re (they are)",
        "Same sound, different spelling and meaning"
      ],
      terms: [
        { term: "Homophone", meaning: "A word that sounds the same as another word but has a different spelling and meaning." },
        { term: "Spelling", meaning: "The letters that make up a word." },
        { term: "Pronunciation", meaning: "The way a word is said aloud." },
        { term: "Context", meaning: "The other words in a sentence, which help us understand the meaning." }
      ],
      examples: [
        {
          q: "Choose the correct words: “We will ___ the ___ on our school trip.” (see / sea)",
          steps: [
            "“see” means to look at something, so the first blank is **see**.",
            "“sea” is a large body of salt water, which fits the second blank."
          ],
          answer: "see; sea"
        }
      ],
      qa: [
        {
          q: "What are homophones? Give two examples.",
          a: "Homophones are words that sound the same but have different spellings and meanings. Examples: **sea** and **see**, **to** and **two**."
        },
        {
          q: "How can we choose the correct homophone in a sentence?",
          a: "Read the whole sentence and think about its meaning. Ask whether the word means a number, a place, a body of water, or shows belonging."
        }
      ],
      quiz: [
        {
          q: "Choose the correct word: I have ___ brothers.",
          options: ["to", "two", "too", "tow"],
          answer: 1,
          explain: "**Two** is the number 2. “Too” means also or very, and “to” shows direction."
        },
        {
          q: "I can ___ the music from the next room.",
          options: ["here", "heer", "hear", "hair"],
          answer: 2,
          explain: "**Hear** means to listen with our ears. “Here” means in this place."
        },
        {
          q: "My favourite fruit is the ___.",
          options: ["pair", "peer", "pare", "pear"],
          answer: 3,
          explain: "A **pear** is a fruit. A pair means two things together."
        },
        {
          q: "Choose the correct word: ___ going to the market today.",
          options: ["They’re", "There", "Their", "Thier"],
          answer: 0,
          explain: "“**They’re**” is short for “they are”, which fits the sentence."
        },
        {
          q: "Which is the correct word? We ___ the cricket match yesterday.",
          options: ["one", "won", "wan", "on"],
          answer: 1,
          explain: "**Won** is the past tense of win. “One” is the number 1."
        }
      ]
    },

    {
      id: "prefixes-and-suffixes",
      title: "Prefixes and Suffixes",
      section: "Vocabulary",
      summary: "A prefix is added to the start of a word and a suffix is added to the end. This chapter shows how these small word parts change meaning and form new words.",
      notes: [
        {
          heading: "What is a prefix?",
          points: [
            "A **prefix** is a group of letters added to the beginning of a word to change its meaning. Example: un + kind = **unkind**.",
            "Common prefixes: **un-** (not), **re-** (again), **dis-** (opposite of), **mis-** (wrongly)."
          ]
        },
        {
          heading: "Examples of prefixes",
          points: [
            "un- means not: happy → **unhappy**, tie → **untie**.",
            "re- means again: write → **rewrite**, build → **rebuild**.",
            "dis- means the opposite of: agree → **disagree**, like → **dislike**."
          ]
        },
        {
          heading: "What is a suffix?",
          points: [
            "A **suffix** is a group of letters added to the end of a word. It can change the meaning or the part of speech: kind + -ness = **kindness**.",
            "Common suffixes: **-ful** (full of), **-less** (without), **-ment** (the result of), **-er** (a person who does something)."
          ]
        },
        {
          heading: "Spelling changes",
          points: [
            "When a word ends in y, change the y to i before adding a suffix: happy → happiness, lucky → luckily.",
            "If a word ends in a silent e and the suffix starts with a vowel, drop the e: make → making, use → usable."
          ]
        }
      ],
      formulas: [
        "Prefix + root word: un + kind = unkind",
        "Root word + suffix: care + ful = careful",
        "Happy → happiness (y → i, then add -ness)"
      ],
      terms: [
        { term: "Prefix", meaning: "A group of letters added to the beginning of a word to change its meaning." },
        { term: "Suffix", meaning: "A group of letters added to the end of a word to change its meaning or form." },
        { term: "Root word", meaning: "The main word to which a prefix or suffix is added, such as kind in unkind." },
        { term: "Part of speech", meaning: "The group a word belongs to, such as noun, verb or adjective." }
      ],
      examples: [
        {
          q: "Make new words: (a) care + -ful (b) re + write (c) hope + -less.",
          steps: [
            "care + ful = **careful**, meaning full of care.",
            "re + write = **rewrite**, meaning write again.",
            "hope + less = **hopeless**, meaning without hope."
          ],
          answer: "careful, rewrite, hopeless"
        }
      ],
      qa: [
        {
          q: "What is a prefix? Give two examples.",
          a: "A prefix is added to the beginning of a word to change its meaning. Examples: **un**kind and **re**write."
        },
        {
          q: "What does the suffix -less mean? Give one example.",
          a: "The suffix **-less** means without. For example, “hopeless” means without hope."
        }
      ],
      quiz: [
        {
          q: "Which prefix means “again”?",
          options: ["un-", "dis-", "re-", "mis-"],
          answer: 2,
          explain: "The prefix **re-** means again, as in rewrite."
        },
        {
          q: "What does “unkind” mean?",
          options: ["very kind", "kind again", "kindness", "not kind"],
          answer: 3,
          explain: "The prefix **un-** means not, so unkind means **not kind**."
        },
        {
          q: "Which word is correct when we add -ness to “kind”?",
          options: ["kindness", "kindful", "kindless", "kindment"],
          answer: 0,
          explain: "Adding the suffix **-ness** to kind gives **kindness**."
        },
        {
          q: "Which suffix means “full of”?",
          options: ["-less", "-ful", "-ment", "-er"],
          answer: 1,
          explain: "The suffix **-ful** means full of, as in helpful or careful."
        },
        {
          q: "What is the word for a person who teaches?",
          options: ["teachment", "teachful", "teacher", "teachless"],
          answer: 2,
          explain: "The suffix **-er** shows a person who does something, so a person who teaches is a **teacher**."
        }
      ]
    },

    // ───────────────────────────── WRITING SKILLS ─────────────────────────────
    {
      id: "notice-writing",
      title: "Notice Writing",
      section: "Writing Skills",
      summary: "A notice is a short announcement for many people to read on a notice board. This chapter explains the parts of a notice and how to write one clearly.",
      notes: [
        {
          heading: "What is a notice?",
          points: [
            "A **notice** is a short written announcement put on a notice board for many people to read.",
            "It gives important information clearly, such as an event, a rule or a lost item."
          ]
        },
        {
          heading: "Parts of a notice",
          points: [
            "Write the heading **NOTICE** in capital letters at the top.",
            "Give the name of the school or organisation, followed by the main message: what, when and where.",
            "End with the date and the name and designation (job title) of the person who signs it."
          ]
        },
        {
          heading: "Language and style",
          points: [
            "Use short sentences and simple words. Keep the message clear and polite.",
            "Use the future tense for events that are coming up: The school will close early on Friday."
          ]
        },
        {
          heading: "Common topics",
          points: [
            "Notices are often about a function or exhibition, a lost item, library rules, a cleanliness drive or a sports match.",
            "Whatever the topic, put the most important information first so that readers understand it at a glance."
          ]
        }
      ],
      formulas: [
        "NOTICE → Organisation → Message (what, when, where) → Date → Signature",
        "Signature = name + designation (Principal)"
      ],
      terms: [
        { term: "Notice", meaning: "A short written announcement put on a board for many people to read." },
        { term: "Heading", meaning: "The title of a notice, written in capital letters at the top." },
        { term: "Designation", meaning: "The job title of the person who signs a notice, such as Principal or Class Teacher." },
        { term: "Announcement", meaning: "A piece of news or information given to a group of people." }
      ],
      examples: [
        {
          q: "Write a notice for the school notice board about a Science Exhibition on 15 November.",
          steps: [
            "Heading: NOTICE, in capital letters.",
            "Organisation: Sunrise Public School, Jaipur.",
            "Message: a Science Exhibition in the school hall, from 10 am, on 15 November, with students’ projects.",
            "Date and signature: the date of the notice, and the name and designation of the Principal."
          ],
          answer: "NOTICE\nSunrise Public School, Jaipur\nScience Exhibition\nAll students are invited to the Science Exhibition in the school hall on 15 November at 10 am. Students will display their projects.\nDate: 28 October 2026\nPrincipal"
        }
      ],
      qa: [
        {
          q: "What is a notice, and who reads it?",
          a: "A notice is a short written announcement put on a notice board for many people to read, such as students, teachers and parents."
        },
        {
          q: "Why should a notice be short and clear?",
          a: "A notice is read quickly by many people, so it must be short and clear to show the important information at once."
        }
      ],
      quiz: [
        {
          q: "What is the first thing written in a notice?",
          options: ["The date", "The signature", "The address", "The heading"],
          answer: 3,
          explain: "The notice begins with its **heading**, such as NOTICE, in capital letters."
        },
        {
          q: "Who usually signs a school notice?",
          options: ["The Principal", "The milkman", "The postman", "The gardener"],
          answer: 0,
          explain: "A school notice is usually signed by the **Principal**, who is in charge of the school."
        },
        {
          q: "Which information must a notice always give?",
          options: ["The writer’s favourite colour", "What the event is and when it is", "A long story", "A poem about the event"],
          answer: 1,
          explain: "A notice must tell readers what the event is and when it happens."
        },
        {
          q: "What is a designation?",
          options: ["Date of the notice", "Name of the school", "Job title of the signer", "Place of the event"],
          answer: 2,
          explain: "A **designation** is the job title of the person who signs, such as Principal."
        },
        {
          q: "Which is the best reason to write a notice?",
          options: ["To send a birthday wish", "To write a private letter to a friend", "To tell a bedtime story", "To tell many people about a lost item"],
          answer: 3,
          explain: "A notice is written to share information with many people, such as a lost item."
        }
      ]
    },

    {
      id: "story-writing",
      title: "Story Writing",
      section: "Writing Skills",
      summary: "A good story has a clear beginning, middle and end, with interesting characters and a setting. This chapter shows how to plan and write a short story.",
      notes: [
        {
          heading: "Parts of a story",
          points: [
            "The **beginning** introduces the characters and the setting, and tells us where and when the story happens.",
            "The **middle** brings a problem or an exciting event that builds up.",
            "The **end** solves the problem and finishes the story neatly."
          ]
        },
        {
          heading: "Title and characters",
          points: [
            "Choose a short, interesting title that hints at the story, such as “The Lost Kite”.",
            "Introduce the main characters with names and a few details, such as age, family or what they like."
          ]
        },
        {
          heading: "Dialogue and setting",
          points: [
            "Describe the setting with a few details, such as a village by the river or a busy market.",
            "Put a character’s exact words inside quotation marks: “Let’s go to the fair,” said Raju."
          ]
        },
        {
          heading: "Tense and time words",
          points: [
            "Most stories are written in the past tense: The crow found a clay pot.",
            "Use time words such as **one day**, **suddenly**, **after a while** and **at last** to move the story forward."
          ]
        }
      ],
      formulas: [
        "Beginning → Middle → End",
        "Characters + Setting + Problem + Solution",
        "Story tense: past (found, ran, felt)"
      ],
      terms: [
        { term: "Plot", meaning: "The events of a story arranged in order, from the beginning to the end." },
        { term: "Character", meaning: "A person, animal or creature who takes part in a story." },
        { term: "Setting", meaning: "The place and time where a story happens." },
        { term: "Dialogue", meaning: "The words spoken by the characters in a story." }
      ],
      examples: [
        {
          q: "Write a short story titled “The Lost Kite” in about five sentences.",
          steps: [
            "Beginning: Rohan flies a new red kite in the park one windy evening.",
            "Middle: a strong gust snaps the string, and the kite sails away over the rooftops.",
            "End: Rohan finds the kite caught in a neighbour’s mango tree and gets it back."
          ],
          answer: "One windy evening, Rohan flew his new red kite in the park. Suddenly, a strong gust snapped the string and the kite sailed away over the rooftops. Rohan ran after it for a long time. At last, he found the kite caught in a mango tree, and he was very happy."
        }
      ],
      qa: [
        {
          q: "What are the three parts of a story?",
          a: "The three parts are the **beginning**, the **middle** and the **end**."
        },
        {
          q: "Why do we use quotation marks in a story?",
          a: "Quotation marks show the exact words spoken by a character, which makes the story more lively and clear."
        }
      ],
      quiz: [
        {
          q: "Which part of a story introduces the characters and the setting?",
          options: ["beginning", "middle", "end", "signature"],
          answer: 0,
          explain: "The **beginning** introduces the characters and the setting."
        },
        {
          q: "Which tense is most stories written in?",
          options: ["present", "past", "future", "imperative"],
          answer: 1,
          explain: "Most stories are told in the **past tense**, such as “found” and “ran”."
        },
        {
          q: "Which is the most suitable title for a story about a boy who finds a lost kite?",
          options: ["Notice Board", "My Favourite Food", "The Lost Kite", "Rules of the Game"],
          answer: 2,
          explain: "“The Lost Kite” hints at the story’s main event."
        },
        {
          q: "How are a character’s exact words usually shown in a story?",
          options: ["brackets", "bullets", "headings", "quotation marks"],
          answer: 3,
          explain: "The exact words spoken by a character go inside **quotation marks**."
        },
        {
          q: "Which phrase best shows the start of a story?",
          options: ["Once upon a time", "Finally", "The end", "At last"],
          answer: 0,
          explain: "“Once upon a time” is a common opening phrase that starts a story."
        }
      ]
    },

    // ───────────────────────────── READING SKILLS ─────────────────────────────
    {
      id: "reading-comprehension",
      title: "Reading Comprehension",
      section: "Reading Skills",
      summary: "This chapter builds on reading skills. You will learn to find the main idea of a passage, choose a suitable title, work out word meanings from context and support your answers with evidence.",
      notes: [
        {
          heading: "Finding the main idea",
          points: [
            "The **main idea** is what the whole passage is mostly about.",
            "Read the whole passage first, and then ask yourself: what is this passage mainly about?"
          ]
        },
        {
          heading: "Choosing a title",
          points: [
            "A good title sums up the passage in a few words.",
            "Think about the main idea when you choose it, and avoid titles that only mention one small detail."
          ]
        },
        {
          heading: "Meaning from context",
          points: [
            "When you meet an unknown word, look at the words around it to guess its meaning.",
            "Example: “The bridge was **sturdy**, so it did not break under the heavy truck.” Here sturdy means strong."
          ]
        },
        {
          heading: "Answering with evidence",
          points: [
            "Support your answer with a line or idea from the passage.",
            "For an opinion question, give your view and a reason taken from the passage."
          ]
        }
      ],
      formulas: [
        "Main idea = what the whole passage is mostly about",
        "Unknown word → look at the words around it (context)",
        "Answer = your point + evidence from the passage"
      ],
      terms: [
        { term: "Main idea", meaning: "The central point that the whole passage is about." },
        { term: "Title", meaning: "A short name for a passage that sums up its main idea." },
        { term: "Context clue", meaning: "A word or phrase near an unknown word that helps us understand its meaning." },
        { term: "Evidence", meaning: "A word, phrase or line from the passage that supports an answer." }
      ],
      examples: [
        {
          q: "Passage: “The village pond had dried up in summer. Villagers walked far to fetch water, and children carried buckets on their heads. In the monsoon, rain filled the pond again and everyone cheered.” What is the main idea?",
          steps: [
            "The passage talks about the pond drying up in summer.",
            "It describes the problem of finding water.",
            "It ends with the rain filling the pond and the happiness of the villagers."
          ],
          answer: "The village pond dries up in summer, which makes water hard to find, until the monsoon rain fills it again."
        }
      ],
      qa: [
        {
          q: "How do you find the main idea of a passage?",
          a: "Read the whole passage, then ask what it is mostly about. The main idea is usually stated in one or two sentences, and the other sentences give details about it."
        },
        {
          q: "What does it mean to support an answer with evidence?",
          a: "It means to point to a line or idea from the passage that proves your answer. For example, if you say “Meera was brave”, you should show the part of the passage that shows her bravery."
        }
      ],
      quiz: [
        {
          q: "Passage: “Kiran practises the piano for an hour every day. Last month he played at the school concert.” What is the main idea?",
          options: ["Kiran hates music", "Kiran works hard at his piano practice", "Kiran lives in a city", "The concert was cancelled"],
          answer: 1,
          explain: "The passage is mainly about Kiran practising the piano regularly, which led to him playing at a concert."
        },
        {
          q: "Which is the best title for a passage about how bees help flowers grow?",
          options: ["My Holiday in Shimla", "A Trip to the Zoo", "Bees and Flowers", "The Market Day"],
          answer: 2,
          explain: "“Bees and Flowers” sums up the main idea of the passage."
        },
        {
          q: "Passage: “The bridge was sturdy, so it did not break under the heavy truck.” What does “sturdy” mean?",
          options: ["weak", "colourful", "slippery", "strong"],
          answer: 3,
          explain: "The words “did not break under the heavy truck” are a clue that sturdy means strong."
        },
        {
          q: "What is the best way to answer an opinion question?",
          options: ["Give an opinion with a reason from the passage", "Write one word only", "Copy the first line", "Write a random guess"],
          answer: 0,
          explain: "An opinion answer should give your view and support it with a reason from the passage."
        },
        {
          q: "Which question asks for the main idea of a passage?",
          options: ["What is the name of the boy?", "What is the passage mostly about?", "How many dogs were there?", "Which colour was the bag?"],
          answer: 1,
          explain: "Asking what the passage is mostly about asks for its main idea."
        }
      ]
    }
  ]
});
