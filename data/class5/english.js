// Class 5 English: Grammar, Vocabulary, Writing Skills, Reading Skills and the lessons of Santoor.
// Format: see CONTENT_GUIDE.md. All examples and model answers are original.
StudyData.add(5, "english", {
  // What this content follows. match: "textbook" | "older-book" | "topic". Set reviewed to a date once a teacher has checked it.
  syllabus: {board: "CBSE", match: "textbook", books: ["Santoor"], note: "Grammar and writing, plus every lesson of Santoor (summarised in our own words).", reviewed: false},
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
    },
    // ───────────────────────────── SANTOOR ─────────────────────────────
    {
      id: "papas-spectacles",
      title: "Papa’s Spectacles",
      section: "Santoor",
      summary: "A funny poem about a father who hunts all over the house for his only pair of spectacles. His child finds them in the most obvious place.",
      notes: [
        { heading: "Outline of the poem", points: [
          "Papa has lost his only pair of spectacles and searches everywhere in the house.",
          "Without them he cannot read the newspaper, watch TV or cut the vegetables.",
          "He checks his pockets, looks under his chair and searches near the window.",
          "The child comes close and tells him the spectacles are on his own head."
        ] },
        { heading: "Humour in the poem", points: [
          "The joke is that the thing Papa wants is closest to him all the time.",
          "The poem is short and rhymes, so it is fun to recite aloud.",
          "It shows that we can miss what is right in front of us when we are in a hurry."
        ] },
        { heading: "Characters and feelings", points: [
          "**Papa** is worried and puzzled, then probably embarrassed and amused.",
          "The **child** is calm, observant and helpful.",
          "The poem is about everyday family life, so every reader can relate to it."
        ] }
      ],
      formulas: ["Papa lost: his only pair of spectacles","Searched: pockets, under the chair, near the window","Found: on his head","Theme: humour in everyday life"],
      terms: [
        { term: "Spectacles", meaning: "A pair of glasses worn to help a person see clearly." },
        { term: "Pair", meaning: "Two things that go together and are used as one, such as shoes or spectacles." },
        { term: "Glanced", meaning: "Looked quickly at something." },
        { term: "Searching", meaning: "Looking carefully for something that is lost." }
      ],
      qa: [
        { q: "What is Papa searching for, and where does he finally find it?", a: "Papa is searching for his lost spectacles. At last the child tells him they are on his own head." },
        { q: "Name two jobs Papa cannot do without his spectacles.", a: "He cannot read the newspaper and he cannot cut the vegetables. He also cannot watch TV." }
      ],
      quiz: [
        { q: "What is Papa looking for in the poem?", options: ["His spectacles","His umbrella","His watch","His keys"], answer: 0, explain: "Papa has lost his only pair of spectacles." },
        { q: "Where were the spectacles in the end?", options: ["In his pocket","Under the chair","Near the window","On Papa’s head"], answer: 3, explain: "The child tells Papa the spectacles are right on his head." },
        { q: "Which job can Papa NOT do without spectacles?", options: ["Eating lunch","Walking","Reading the newspaper","Sleeping"], answer: 2, explain: "The poem says he cannot read the newspaper without them." },
        { q: "What does the word “pair” mean in “a pair of spectacles”?", options: ["One big thing","Two things used together","Many things","A broken thing"], answer: 1, explain: "A pair means two things that go together." },
        { q: "Which feeling does the poem mainly give the reader?", options: ["Fun and laughter","Fear","Deep sadness","Anger"], answer: 0, explain: "The poem is a humorous one about a funny mix-up." }
      ]
    },
    {
      id: "gone-with-the-scooter",
      title: "Gone with the Scooter",
      section: "Santoor",
      summary: "Gopi finds a hockey ball in his garden and tries to find its owner. During a game with his friends, the ball flies into a passing scooter’s basket and is gone.",
      notes: [
        { heading: "What happens", points: [
          "On a hot afternoon Gopi hears something fall with a thud in the garden and finds a hockey ball in a heap of dry leaves.",
          "He decides to ask his friends at the playground whether anyone lost it.",
          "Manoj says he lost a ball months ago, Ramani claims it and Deepak boasts about a new football.",
          "Manoj grabs the ball and the friends start a game of hockey."
        ] },
        { heading: "The funny ending", points: [
          "Jay hits the ball so hard that it goes past the gate.",
          "It lands in the basket of a passing scooter and the driver does not notice.",
          "The children run to the gate, but the scooter and the ball are gone, and they burst out laughing."
        ] },
        { heading: "Characters", points: [
          "**Gopi** is honest and thoughtful because he does not want to keep a ball that is not his.",
          "**Manoj, Ramani, Deepak and Jay** are his friends who love playing hockey.",
          "Gopi’s mother is caring and calls him in from the heat."
        ] },
        { heading: "Words and grammar in the lesson", points: [
          "**Adverbs of frequency** such as always, often and never tell how many times an action happens.",
          "**Adverbs of time** such as yesterday, now and today tell when an action happens.",
          "The lesson also reminds us that wearing a helmet on a scooter is important for safety."
        ] }
      ],
      formulas: ["Found by: Gopi, in a heap of dry leaves","Kind of ball: a hockey ball","Ending: it falls into a passing scooter’s basket","Adverb of frequency: often, always, never","Adverb of time: yesterday, now, today"],
      terms: [
        { term: "Dribble", meaning: "To move a ball along with small taps while playing." },
        { term: "Rustle", meaning: "A soft crackling sound, like dry leaves moving." },
        { term: "Grab", meaning: "To take something suddenly." },
        { term: "Boast", meaning: "To talk too proudly about what you have." },
        { term: "Thud", meaning: "A dull sound of something heavy falling." }
      ],
      qa: [
        { q: "What did Gopi do after finding the ball?", a: "He did not keep it. He went to the playground in the evening and asked his friends whether any of them had lost a ball." },
        { q: "How did the ball get lost at the end of the story?", a: "Jay hit it very hard and it flew past the gate into the basket of a passing scooter. The scooter drove away with the ball." },
        { q: "Why is it important to wear a helmet on a scooter?", a: "A helmet protects the head from injury if there is an accident. Both the rider and the person sitting behind should wear one." }
      ],
      quiz: [
        { q: "What was Gopi doing in the veranda?", options: ["Playing hockey","Reading a book","Eating lunch","Sleeping"], answer: 1, explain: "He was sitting in the veranda reading a book." },
        { q: "What did Gopi find in the garden?", options: ["A hockey ball","A football","A cricket bat","A kite"], answer: 0, explain: "He found a white hockey ball on a heap of dry leaves." },
        { q: "Who boasted about a brand-new football?", options: ["Manoj","Ramani","Jay","Deepak"], answer: 3, explain: "Deepak said his father had bought him a new football." },
        { q: "Where did the ball finally go?", options: ["Into the well","Onto the roof","Into a scooter’s basket","Into the river"], answer: 2, explain: "Jay’s hit sent it into the basket of a passing scooter." },
        { q: "Which word in the lesson means “to speak too proudly”?", options: ["dribble","boast","rustle","grab"], answer: 1, explain: "To boast is to speak too proudly about something you have." }
      ]
    },
    {
      id: "the-rainbow",
      title: "The Rainbow",
      section: "Santoor",
      summary: "Christina Rossetti’s short poem compares boats, ships and bridges with clouds and the rainbow, and says that nature’s bow in the sky is prettier than them all.",
      notes: [
        { heading: "What the poem says", points: [
          "The first stanza says boats sail on rivers and ships sail on seas, but clouds sailing across the sky are prettier than these.",
          "The second stanza says bridges on rivers are pretty, but the rainbow is prettier than these.",
          "The rainbow rises above the trees and seems to make a road from earth to sky."
        ] },
        { heading: "Human-made and natural things", points: [
          "Boats, ships and bridges are made by people.",
          "Clouds and the rainbow are made by nature.",
          "The poet feels that nature’s creations are more beautiful than human-made ones."
        ] },
        { heading: "Poet’s ideas", points: [
          "The poet uses a **comparison**: clouds sail like ships and the rainbow is like a bridge.",
          "The word **bow** here means the curved shape of the rainbow.",
          "The word **these** points back to boats and ships in the first stanza and to bridges in the second.",
          "The poem is by **Christina Rossetti**."
        ] },
        { heading: "Sound of the poem", points: [
          "The poem has rhyming words such as seas and these.",
          "The lines are short and regular, so the poem is easy to remember and sing."
        ] }
      ],
      formulas: ["Poet: Christina Rossetti","Stanza 1: boats, ships, clouds","Stanza 2: bridges and the rainbow","Bow = the curved arch of the rainbow","Theme: the beauty of nature"],
      terms: [
        { term: "Bow", meaning: "A curved shape. In the poem it is the arch of the rainbow." },
        { term: "Overtops", meaning: "Rises higher than something else." },
        { term: "Bridge", meaning: "A structure built over a river so people can cross." },
        { term: "Rhyme", meaning: "Words that end with the same sound, such as seas and these." }
      ],
      qa: [
        { q: "Which bridge does the poet like more and why?", a: "The poet likes the rainbow more. It is higher than the trees and makes a road from earth to sky, so it is prettier than the bridges on rivers." },
        { q: "What does the word “these” stand for in each stanza?", a: "In the first stanza it stands for boats and ships. In the second stanza it stands for the bridges on rivers." }
      ],
      quiz: [
        { q: "Who wrote the poem “The Rainbow”?", options: ["Rabindranath Tagore","Sudha Murty","Christina Rossetti","Ruskin Bond"], answer: 2, explain: "The poem is by Christina Rossetti." },
        { q: "What sails on the rivers in the poem?", options: ["Ships","Boats","Clouds","Kites"], answer: 1, explain: "Boats sail on the rivers and ships sail on the seas." },
        { q: "What does the poet find prettier than bridges on rivers?", options: ["The rainbow","A train","A road","A house"], answer: 0, explain: "The rainbow is called prettier than the bridges." },
        { q: "In the poem, what does “bow” mean?", options: ["A bow and arrow","A gift ribbon","To bend down","The curved rainbow"], answer: 3, explain: "Here bow means the arch of the rainbow." },
        { q: "Which of these is made by nature?", options: ["Bridges","Boats","Clouds","Ships"], answer: 2, explain: "Clouds are natural. Boats, ships and bridges are made by people." }
      ]
    },
    {
      id: "the-wise-parrot",
      title: "The Wise Parrot",
      section: "Santoor",
      summary: "A rich merchant keeps a clever parrot in a golden cage. The parrot longs to be free and uses a smart trick to escape.",
      notes: [
        { heading: "The story", points: [
          "A rich merchant keeps a bright and talkative parrot in a cage of gold.",
          "Before a trip, he asks what he can bring for the bird. The parrot asks to be freed, but the merchant refuses.",
          "The parrot then asks him to give its friends in the jungle a message of greetings from the cage."
        ] },
        { heading: "The trick", points: [
          "The merchant gives the message to a flight of parrots, and one parrot drops from the tree.",
          "He feels sad and tells his pet at home what happened.",
          "His pet falls from the perch as if dead. The merchant puts the bird on the windowsill.",
          "The bird at once flies away. It had copied what the other parrot did."
        ] },
        { heading: "Characters", points: [
          "The **merchant** is rich and loves his pet, but he is selfish about its freedom.",
          "The **parrot** is clever and brave. It longs for the open sky.",
          "The **wild parrot** in the forest gives the pet the idea of how to escape."
        ] },
        { heading: "Lesson", points: [
          "Freedom is more precious than comfort or gold.",
          "Intelligence can solve a problem that strength cannot.",
          "We should not keep birds and animals caged against their wish."
        ] }
      ],
      formulas: ["Setting: a quiet village","Cage: made of gold","Parrot’s request: to fly in the sky","Trick: pretending to be dead","Moral: freedom matters; wisdom helps"],
      terms: [
        { term: "Merchant", meaning: "A person who buys and sells goods." },
        { term: "Perch", meaning: "A rod or branch on which a bird sits." },
        { term: "Distressed", meaning: "Very upset or worried." },
        { term: "Windowsill", meaning: "The ledge at the bottom of a window." },
        { term: "Tender", meaning: "Soft and easy to eat or chew." }
      ],
      qa: [
        { q: "What did the parrot want most?", a: "The parrot wanted to fly freely in the open sky. Food and a golden cage did not make it happy." },
        { q: "How did the parrot escape from the cage?", a: "It pretended to be dead and fell from its perch. When the merchant put it on the windowsill, it flew away." },
        { q: "Why can the parrot be called wise?", a: "It did not argue or fight. It used a clever plan to make the merchant free it himself." }
      ],
      quiz: [
        { q: "What was the parrot’s cage made of?", options: ["Iron","Wood","Plastic","Gold"], answer: 3, explain: "The merchant kept it in a cage of gold." },
        { q: "What did the parrot ask to be allowed to do?", options: ["Eat more fruit","Sing louder","Fly in the sky","Go to the market"], answer: 2, explain: "It longed for the joy of flying in the open sky." },
        { q: "What message did the parrot send to its friends?", options: ["A request for food","Greetings from the cage","A story","A song"], answer: 1, explain: "It sent greetings from its cage." },
        { q: "What happened to the wild parrot when it heard the message?", options: ["It dropped from the tree","It flew higher","It laughed","It sang"], answer: 0, explain: "One parrot fell to the ground like a stone." },
        { q: "Where did the merchant put the parrot after it ‘died’?", options: ["In the garden","In the river","In the market","On the windowsill"], answer: 3, explain: "He placed it on the windowsill, and it flew away." }
      ]
    },
    {
      id: "the-frog",
      title: "The Frog",
      section: "Santoor",
      summary: "A cheerful poem told by a frog about where it lives, how it catches food, how it hides and how it swims and hops.",
      notes: [
        { heading: "The frog’s home", points: [
          "The frog sits in ponds and in the rain.",
          "It also hops about in muddy places.",
          "It lives on land and in water, in damp places."
        ] },
        { heading: "Body and food", points: [
          "As a tadpole, the frog swims like a tiny fish.",
          "A frog flicks its tongue quickly to catch food.",
          "It has webbed feet for swimming and strong legs for hopping high."
        ] },
        { heading: "Safety", points: [
          "The frog’s colours match plants and trees, so it hides well in grass and leaves.",
          "It has to be careful because snakes are near."
        ] },
        { heading: "Mood of the poem", points: [
          "The frog feels proud and joyful.",
          "It croaks loudly and enjoys hopping and swimming.",
          "The poem is full of rhyme and rhythm, so it is fun to recite."
        ] }
      ],
      formulas: ["Frog lives: ponds, drains, damp land","Baby frog: tadpole","Catches food: flicks tongue","Swims with: webbed feet","Danger: snakes"],
      terms: [
        { term: "Tadpole", meaning: "The young one of a frog, which lives in water and looks like a tiny fish." },
        { term: "Webbed", meaning: "Having skin joining the toes, used for swimming." },
        { term: "Croak", meaning: "The deep sound a frog makes." },
        { term: "Damp", meaning: "Slightly wet." },
        { term: "Beware", meaning: "To be careful about danger." }
      ],
      qa: [
        { q: "How does the frog catch its food?", a: "The frog flicks out its tongue very fast and catches the food." },
        { q: "How does the frog hide from its enemies?", a: "Its colours match the plants and trees, so it hides well in grass and leaves." }
      ],
      quiz: [
        { q: "What is a baby frog called?", options: ["Tadpole","Calf","Cub","Chick"], answer: 0, explain: "The young one of a frog is a tadpole." },
        { q: "What helps the frog swim easily?", options: ["Long ears","A tail","Wings","Webbed feet"], answer: 3, explain: "Webbed feet help it swim and leap." },
        { q: "How does the frog catch food?", options: ["By biting with big teeth","By digging","By flicking its tongue","By flying"], answer: 2, explain: "It flicks its tongue to catch food." },
        { q: "Which animal does the frog need to beware of?", options: ["Cow","Snake","Hen","Goat"], answer: 1, explain: "The poem says snakes are near." },
        { q: "What sound does a frog make?", options: ["Croak","Roar","Moo","Buzz"], answer: 0, explain: "Frogs croak." }
      ]
    },
    {
      id: "what-a-tank",
      title: "What a Tank!",
      section: "Santoor",
      summary: "This lesson tells about old and new ways of storing water in India and about the colourful overhead water tanks of rural Punjab, built in shapes that tell about the family living in the house.",
      notes: [
        { heading: "Storing water in India", points: [
          "Water conservation has been practised for centuries. Old water structures stored water, gave drinking water and protected cities from floods.",
          "In Tamil Nadu, Ooranis store rainwater for drinking and farming.",
          "In Kerala, Panam Keni wells do not dry up even in the hottest months.",
          "In Rajasthan’s Thar region, Tankas are underground tanks that can store water for six to seven months."
        ] },
        { heading: "Overhead tanks", points: [
          "Many homes have water tanks, usually kept on the roof. These are called overhead water tanks.",
          "They store hundreds and even thousands of litres of water."
        ] },
        { heading: "Water tanks of Punjab", points: [
          "Punjab is in the north-west of India. Its rural areas are known for unique tank designs.",
          "Tanks may look like a giant flower, a football, a rooster, a statue or even an aeroplane.",
          "The shape tells us about the family: a farmer may have a tractor, bullock cart or rooster, and a football lover may have a football."
        ] },
        { heading: "How the tanks are made", points: [
          "The frame is made with steel rods and the final shape is given with concrete or cement.",
          "The finished tank is placed on the roof and can hold hundreds of litres.",
          "The lesson also teaches contractions such as aren’t for are not, where an apostrophe takes the place of missing letters."
        ] }
      ],
      formulas: ["Ooranis: Tamil Nadu","Panam Keni: Kerala","Tankas: Rajasthan, Thar region","Punjab tanks: made of steel rods and cement","Contraction: do not = don’t"],
      terms: [
        { term: "Conservation", meaning: "Saving and protecting something, such as water." },
        { term: "Overhead tank", meaning: "A water tank kept high up, usually on the roof." },
        { term: "Heritage", meaning: "Traditions and things passed down from the past." },
        { term: "Concrete", meaning: "A hard building material made from cement, sand and water." },
        { term: "Contraction", meaning: "A short form of two words, with an apostrophe in place of missing letters." }
      ],
      qa: [
        { q: "What do we use a water tank for?", a: "We use a water tank to store water for the house. It is usually kept on the roof." },
        { q: "How do the shapes of Punjab’s water tanks show the owners’ identity?", a: "The shape matches the family’s work or interest. A farmer may have a tractor or rooster shaped tank, and someone who likes football may have a football shaped tank." },
        { q: "How are the water tanks in Punjab built?", a: "The frame is made with steel rods. Concrete is then used to give the final shape and the tank is fixed on the roof." }
      ],
      quiz: [
        { q: "Where are Tankas found?", options: ["Kerala","Rajasthan’s Thar region","Punjab","Assam"], answer: 1, explain: "Tankas are underground tanks in Rajasthan’s Thar region." },
        { q: "Which Indian state is known for unusual tank shapes in the lesson?", options: ["Punjab","Goa","Bihar","Sikkim"], answer: 0, explain: "Rural Punjab is known for its unique tanks." },
        { q: "What material is used to give the tank its final shape?", options: ["Wood","Plastic","Clay","Concrete"], answer: 3, explain: "Steel rods make the frame and concrete finishes the shape." },
        { q: "What is the contraction of “do not”?", options: ["do’nt","dont’","don’t","d’ont"], answer: 2, explain: "The apostrophe replaces the missing letter o." },
        { q: "Where are overhead tanks usually kept?", options: ["In the garden","On the roof","Under the bed","In the kitchen"], answer: 1, explain: "Overhead tanks are built or kept on the roof." }
      ]
    },
    {
      id: "gilli-danda",
      title: "Gilli Danda",
      section: "Santoor",
      summary: "A joyful poem about children playing the traditional game of gilli danda outdoors with friends, under the open sky.",
      notes: [
        { heading: "The game", points: [
          "Gilli danda is played with a long stick (danda) and a small piece of wood (gilli).",
          "Players hit the gilli with the stick and send it flying high.",
          "It is played outdoors with friends."
        ] },
        { heading: "The feeling of the poem", points: [
          "The players feel happy, free and full of fun.",
          "The words laughing, playing and fun show their joy.",
          "The poem is set under blue skies and golden rays of the sun."
        ] },
        { heading: "Values", points: [
          "The poem shows the joy of **outdoor play** and **friendship**.",
          "It encourages **teamwork** because the friends never quit.",
          "Traditional games are a part of our culture and need no costly equipment."
        ] },
        { heading: "Language skills in the lesson", points: [
          "**Prefixes** are added to the start of a word to change its meaning, for example un- means not, as in unhappy, and re- means again, as in redraw.",
          "**Abstract nouns** name feelings or ideas that cannot be touched, such as joy or fear.",
          "**Possessive pronouns** such as mine, yours, his, hers, ours and theirs show who owns something."
        ] }
      ],
      formulas: ["Game: gilli danda","Tools: a stick and a small gilli","Prefix un- = not; re- = again","Abstract nouns: joy, anger, fear, truth","Possessive pronouns: mine, yours, his, hers, ours, theirs"],
      terms: [
        { term: "Gilli", meaning: "The small piece of wood that is hit in the game." },
        { term: "Danda", meaning: "The stick used to hit the gilli." },
        { term: "Prefix", meaning: "Letters added to the beginning of a word to change its meaning." },
        { term: "Abstract noun", meaning: "A noun for a feeling or idea we cannot touch, such as joy." },
        { term: "Underneath", meaning: "Below or under something." }
      ],
      qa: [
        { q: "Which game is mentioned in the poem and what is needed to play it?", a: "The game is gilli danda. A stick and a small gilli are needed." },
        { q: "How do the players feel while playing?", a: "They feel happy and free. They laugh and have a lot of fun." }
      ],
      quiz: [
        { q: "Which game does the poem describe?", options: ["Chess","Carrom","Gilli Danda","Kabaddi"], answer: 2, explain: "The poem is about gilli danda." },
        { q: "What is the small piece of wood called?", options: ["Danda","Gilli","Bat","Wicket"], answer: 1, explain: "The small piece is the gilli and the stick is the danda." },
        { q: "What does the prefix “un-” mean?", options: ["not","again","before","after"], answer: 0, explain: "Un- means not, so unhappy means not happy." },
        { q: "Which of these is an abstract noun?", options: ["leaf","football","spoon","joy"], answer: 3, explain: "Joy is a feeling, so it cannot be touched." },
        { q: "Where do the children play the game?", options: ["In a train","In a shop","Outdoors","Underwater"], answer: 2, explain: "The poem shows them playing in the playground, under the sky." }
      ]
    },
    {
      id: "the-decision-of-the-panchayat",
      title: "The Decision of the Panchayat",
      section: "Santoor",
      summary: "A farmer buys a well from a cunning neighbour, who then says he sold only the well and not the water. The village Panchayat gives a clever and fair judgment.",
      notes: [
        { heading: "The problem", points: [
          "A hard-working farmer buys a field and a well next to it from his neighbour.",
          "The next day the neighbour refuses to let him draw water, saying he sold only the well and not the water.",
          "The worried farmer goes to the village chief."
        ] },
        { heading: "The Panchayat meeting", points: [
          "The chief fixes a day and the Panchayat meets under the banyan tree.",
          "The neighbour repeats his claim even when the villagers try to reason with him."
        ] },
        { heading: "The judgment", points: [
          "The chief agrees that only the well was sold.",
          "She then says that if the water is his, he has no right to keep it in the farmer’s well.",
          "He must remove the water at once or lose it to the owner of the well.",
          "The neighbour must pay a fine and apologise."
        ] },
        { heading: "Lessons", points: [
          "Cheating does not pay in the end.",
          "Clear thinking and fairness can solve tricky problems.",
          "The Panchayat shows the importance of listening to both sides before deciding.",
          "The lesson also teaches the suffix -less, meaning without, as in careless and fearless."
        ] }
      ],
      formulas: ["Farmer bought: a well","Neighbour claimed: water was not sold","Judgment given by: the Panchayat under the banyan tree","Suffix -less = without","Moral: honesty and wisdom"],
      terms: [
        { term: "Panchayat", meaning: "A village council that settles local matters." },
        { term: "Cunning", meaning: "Clever in a tricky or dishonest way." },
        { term: "Adamant", meaning: "Firm and refusing to change one’s mind." },
        { term: "Summon", meaning: "To order a person to come to a place." },
        { term: "Judgment", meaning: "A decision made after thinking about a case." }
      ],
      qa: [
        { q: "Why did the farmer go to the village chief?", a: "The neighbour would not let him take water from the well he had bought. He wanted justice." },
        { q: "What was the final judgment of the Panchayat?", a: "The neighbour had sold only the well, so his water had no right to remain in it. He had to remove the water or use it up immediately, otherwise it would belong to the well’s owner." },
        { q: "What did the cunning neighbour learn?", a: "He learnt that cheating does not help. He had to pay a fine and apologise." }
      ],
      quiz: [
        { q: "What did the farmer buy from his neighbour?", options: ["A cow","A tractor","A house","A well"], answer: 3, explain: "The farmer bought a well next to his new field." },
        { q: "Where did the Panchayat meet?", options: ["In a school","In a temple","Under a banyan tree","In a field"], answer: 2, explain: "They met under the banyan tree in the centre of the village." },
        { q: "What did the neighbour claim?", options: ["He sold nothing","He sold only the well, not the water","He sold the land only","He sold water only"], answer: 1, explain: "He claimed the water still belonged to him." },
        { q: "What does “cunning” mean?", options: ["Clever in a tricky way","Kind","Slow","Tired"], answer: 0, explain: "A cunning person uses tricks to get what he wants." },
        { q: "What does the suffix “-less” mean?", options: ["again","not","before","without"], answer: 3, explain: "Careless means without care." }
      ]
    },
    {
      id: "vocation",
      title: "Vocation",
      section: "Santoor",
      summary: "Rabindranath Tagore’s poem about a child who wishes to be a hawker, a gardener or a watchman, because each person seems free to do what he likes.",
      notes: [
        { heading: "The three wishes", points: [
          "At ten in the morning the child hears a hawker selling crystal bangles in the lane and wishes to be one.",
          "At four in the afternoon the child sees a gardener digging in the sun and wishes to dig freely like him.",
          "In the evening the child sees a watchman walking with a lantern and wishes to walk the streets all night."
        ] },
        { heading: "The child’s feelings", points: [
          "The child goes to school and is sent to bed on time, so these jobs look free and exciting.",
          "The child thinks the workers have no one to stop them.",
          "This shows the child’s curiosity about the world of work."
        ] },
        { heading: "Ideas in the poem", points: [
          "Every kind of work is important and honest work deserves respect.",
          "The street lamp is compared to a giant with one red eye.",
          "The poet is **Rabindranath Tagore**."
        ] },
        { heading: "Words in the poem", points: [
          "A **gong** is a metal disc that makes a loud sound.",
          "A **spade** is a tool for digging.",
          "A **lane** is a narrow path, and a **lantern** is a portable light."
        ] }
      ],
      formulas: ["Poet: Rabindranath Tagore","Three workers: hawker, gardener, watchman","Time: morning, afternoon, night","Street lamp: like a giant with one red eye","Theme: respect for all work"],
      terms: [
        { term: "Vocation", meaning: "A job or kind of work that a person does." },
        { term: "Hawker", meaning: "A person who sells things by walking along the road." },
        { term: "Spade", meaning: "A tool used for digging." },
        { term: "Lantern", meaning: "A portable light that can be carried." },
        { term: "Gong", meaning: "A metal disc that makes a loud sound when struck." }
      ],
      qa: [
        { q: "Why does the speaker wish to be a hawker?", a: "The hawker is free to spend his day on the road with no hurry and no place he must be. The child likes that freedom." },
        { q: "What does the child compare the street lamp to?", a: "The street lamp is compared to a giant with one red eye." },
        { q: "What does the child like about the gardener?", a: "The gardener can dig in the garden as he likes. No one stops him, even if his clothes get dusty." }
      ],
      quiz: [
        { q: "Who wrote the poem “Vocation”?", options: ["Rabindranath Tagore","Christina Rossetti","Sudha Murty","R.K. Narayan"], answer: 0, explain: "The poem is by Rabindranath Tagore." },
        { q: "What does the hawker sell?", options: ["Fruits","Toys","Books","Crystal bangles"], answer: 3, explain: "He calls out “Bangles, crystal bangles!”" },
        { q: "What does the gardener use to dig?", options: ["A lantern","A gong","A spade","A stick"], answer: 2, explain: "The gardener digs with a spade." },
        { q: "What does the watchman carry?", options: ["A spade","A lantern","A bag","A bell"], answer: 1, explain: "He swings a lantern as he walks." },
        { q: "What does the word “vocation” mean?", options: ["A kind of job","A holiday","A sport","A festival"], answer: 0, explain: "Vocation means the work a person does." }
      ]
    },
    {
      id: "glass-bangles",
      title: "Glass Bangles",
      section: "Santoor",
      summary: "Ravi, a glass artisan of Firozabad, and his daughter Ananya mix old and new designs to create a Diwali collection that delights customers and helps the whole community.",
      notes: [
        { heading: "Firozabad and its bangles", points: [
          "Firozabad in Uttar Pradesh is famous for glassware and glass bangles.",
          "Ravi’s family has made bangles for a very long time.",
          "Glass is heated in a furnace, shaped into bangles, coloured and decorated, and then cooled."
        ] },
        { heading: "Ravi and Ananya", points: [
          "During Diwali the demand for bangles grows and the workshop is very busy.",
          "Ananya has finished school and wants to help. She has an eye for design and mixes modern elements with traditional ones.",
          "Ravi is first unsure, but he soon sees the beauty of her floral and geometric designs."
        ] },
        { heading: "The success", points: [
          "Their special Diwali collection is a big hit with customers.",
          "More work comes to local artisans and jobs grow in packing and transport.",
          "Ravi and Ananya feel proud, and the workshop keeps growing."
        ] },
        { heading: "Values", points: [
          "Crafts and skills are worth respecting.",
          "Fathers and daughters, and old and new ideas, can work well together.",
          "Local craft helps the whole community."
        ] }
      ],
      formulas: ["Place: Firozabad, Uttar Pradesh","Craftsman: Ravi, glass artisan","Daughter: Ananya","Festival: Diwali","Process: heat, shape, colour, cool"],
      terms: [
        { term: "Artisan", meaning: "A skilled worker who makes things by hand." },
        { term: "Furnace", meaning: "A very hot oven used for heating glass or metal." },
        { term: "Clinking", meaning: "A light ringing sound made when glass things touch." },
        { term: "Floral", meaning: "Having flowers or flower patterns." },
        { term: "Pattern", meaning: "A repeated design." }
      ],
      qa: [
        { q: "How were glass bangles made in Ravi’s workshop?", a: "Ravi and his team heated glass in a furnace and shaped it into bangles. They added colours and designs and then cooled them." },
        { q: "Who was Ananya and how did she help?", a: "Ananya was Ravi’s daughter. She added modern floral and geometric designs to the traditional bangles." },
        { q: "How did the new bangles help the community?", a: "Demand rose, so more artisans got work. There were also more jobs in packing and transport." }
      ],
      quiz: [
        { q: "Where is Ravi’s town of Firozabad?", options: ["Punjab","Uttar Pradesh","Kerala","Gujarat"], answer: 1, explain: "Firozabad is in Uttar Pradesh." },
        { q: "What was Ravi’s craft?", options: ["Making glass bangles","Making toys","Making clothes","Making pots"], answer: 0, explain: "Ravi was a skilled glass artisan." },
        { q: "Which festival is mentioned in the lesson?", options: ["Holi","Eid","Baisakhi","Diwali"], answer: 3, explain: "The special collection was made for Diwali." },
        { q: "What kind of designs did Ananya add?", options: ["Cartoon drawings","Animal faces","Floral and geometric patterns","Only plain colours"], answer: 2, explain: "She added delicate floral patterns and geometric shapes." },
        { q: "What does “artisan” mean?", options: ["A teacher","A skilled craftsperson","A farmer","A doctor"], answer: 1, explain: "An artisan makes things by hand with skill." }
      ]
    }
  ]
});
