// PSEB Class 4 English: grammar and writing (PSEB book lessons added separately). Format: see CONTENT_GUIDE.md
// Format: see CONTENT_GUIDE.md. All examples and model answers are original.
StudyData.add(4, "englishpb", {
  // What this content follows. match: "textbook" | "older-book" | "topic". Set reviewed to a date once a teacher has checked it.
  syllabus: {board: "PSEB", match: "textbook", books: ["Rainbow-4"], note: "Grammar and writing, plus every lesson of Rainbow-4 (summarised in our own words).", reviewed: false},
  chapters: [
    // ───────────────────────────── GRAMMAR ─────────────────────────────
    {
      id: "gender",
      title: "Gender",
      section: "Grammar",
      summary: "Gender tells us whether a noun refers to a male or a female. This chapter covers masculine and feminine nouns, pairs of different words, and endings such as -ess.",
      notes: [
        {
          heading: "Masculine and feminine",
          points: [
            "Nouns for males are **masculine**: boy, uncle, king, bull.",
            "Nouns for females are **feminine**: girl, aunt, queen, cow.",
            "Nouns for things, places and ideas, such as book or school, are not male or female."
          ]
        },
        {
          heading: "Different words for male and female",
          points: [
            "Some pairs use completely different words: father – mother, brother – sister, uncle – aunt, king – queen, bull – cow.",
            "Learn these pairs by heart, because the spelling does not follow a rule."
          ]
        },
        {
          heading: "Feminine nouns ending in -ess",
          points: [
            "Some feminine nouns are made by adding **-ess** to the masculine noun: lion → lioness, prince → princess, actor → actress.",
            "Waiter becomes waitress and host becomes hostess."
          ]
        },
        {
          heading: "Common gender",
          points: [
            "Some nouns can refer to either a male or a female: teacher, doctor, cousin, parent, student.",
            "These are called **common gender** nouns."
          ]
        }
      ],
      formulas: [
        "Masculine ↔ Feminine: brother ↔ sister",
        "Add -ess to some words: prince → princess",
        "Common gender: teacher, cousin, student (male or female)"
      ],
      terms: [
        { term: "Gender", meaning: "The way a noun shows whether it refers to a male or a female." },
        { term: "Masculine", meaning: "A noun for a male person or animal, such as man or bull." },
        { term: "Feminine", meaning: "A noun for a female person or animal, such as woman or cow." },
        { term: "Common gender", meaning: "A noun that can refer to either a male or a female, such as teacher." }
      ],
      examples: [
        {
          q: "Write the feminine form of: lion, uncle, prince, bull.",
          steps: [
            "lion → lioness: add -ess.",
            "uncle → aunt: a different word.",
            "prince → princess: add -ess.",
            "bull → cow: a different word."
          ],
          answer: "lioness, aunt, princess, cow"
        }
      ],
      qa: [
        {
          q: "What is the difference between a masculine noun and a feminine noun? Give one example of each.",
          a: "A **masculine** noun names a male person or animal, such as boy or bull. A **feminine** noun names a female person or animal, such as girl or cow."
        },
        {
          q: "What is the feminine of “king” and of “actor”?",
          a: "The feminine of **king** is **queen**, which is a different word. The feminine of **actor** is **actress**, made by adding -ess."
        }
      ],
      quiz: [
        {
          q: "Which word is feminine?",
          options: ["queen", "boy", "uncle", "bull"],
          answer: 0,
          explain: "**Queen** is a female ruler, so it is feminine. The others are masculine."
        },
        {
          q: "What is the feminine of “bull”?",
          options: ["hen", "cow", "bulless", "bulla"],
          answer: 1,
          explain: "The feminine of **bull** is **cow**. It is a different word, not a new form of bull."
        },
        {
          q: "What is the feminine of “prince”?",
          options: ["princes", "princely", "princess", "queen"],
          answer: 2,
          explain: "Prince becomes **princess** by adding -ess. Queen is the feminine of king."
        },
        {
          q: "Which noun is a common gender noun?",
          options: ["uncle", "actress", "hen", "teacher"],
          answer: 3,
          explain: "A **teacher** can be a man or a woman, so it is a common gender noun."
        },
        {
          q: "What is the masculine of “aunt”?",
          options: ["uncle", "aunty", "nephew", "sister"],
          answer: 0,
          explain: "The masculine of **aunt** is **uncle**. Nephew means a son of a brother or sister."
        }
      ]
    },

    {
      id: "collective-nouns",
      title: "Collective Nouns",
      section: "Grammar",
      summary: "A collective noun names a group of people, animals or things as one whole. This chapter gives common collective nouns and shows how they are used in sentences.",
      notes: [
        {
          heading: "What is a collective noun?",
          points: [
            "A **collective noun** is the name of a group of people, animals or things, thought of as one whole.",
            "Example: a **class** of students, a **team** of players."
          ]
        },
        {
          heading: "Common collective nouns",
          points: [
            "A **herd** of cows or elephants, a **flock** of sheep or birds, a **shoal** of fish.",
            "A **bunch** of bananas or keys, a **bundle** of sticks, a **swarm** of bees, a **pack** of wolves.",
            "A **team** of players, a **fleet** of ships, a **crowd** of people."
          ]
        },
        {
          heading: "Using collective nouns in sentences",
          points: [
            "Use the pattern **a + collective noun + of + plural noun**: a herd of goats, a bunch of grapes.",
            "A collective noun names one group, so it usually takes a singular verb: The team **is** practising hard."
          ]
        }
      ],
      formulas: [
        "a + collective noun + of + plural noun: a flock of birds",
        "Group as one whole = singular verb: The class is singing."
      ],
      terms: [
        { term: "Collective noun", meaning: "The name of a group of people, animals or things, thought of as one whole." },
        { term: "Herd", meaning: "A group of animals such as cows, goats or elephants that live together." },
        { term: "Flock", meaning: "A group of birds or sheep." },
        { term: "Swarm", meaning: "A large group of insects such as bees or locusts, flying together." }
      ],
      examples: [
        {
          q: "Name the collective noun for each: (a) cows (b) fish (c) grapes.",
          steps: [
            "A group of cows is a **herd**.",
            "A group of fish is a **shoal**.",
            "A group of grapes is a **bunch**."
          ],
          answer: "herd, shoal, bunch"
        }
      ],
      qa: [
        {
          q: "What is a collective noun? Give two examples.",
          a: "A **collective noun** names a group as one whole. Examples: a **team** of players and a **bunch** of flowers."
        },
        {
          q: "Why do we write “The team is winning” and not “The team are winning”?",
          a: "A collective noun such as **team** names one group, so it takes a singular verb. We write **is** with the team."
        }
      ],
      quiz: [
        {
          q: "Choose the correct collective noun: a ___ of cows was grazing in the field.",
          options: ["flock", "herd", "swarm", "pack"],
          answer: 1,
          explain: "A group of cows is a **herd**. A flock is for birds or sheep."
        },
        {
          q: "What is a group of sheep called?",
          options: ["bunch", "shoal", "flock", "herd"],
          answer: 2,
          explain: "A group of sheep or birds is called a **flock**."
        },
        {
          q: "What is a group of fish called?",
          options: ["pack", "flock", "bundle", "shoal"],
          answer: 3,
          explain: "A group of fish is called a **shoal**."
        },
        {
          q: "What is a group of bananas called?",
          options: ["bunch", "swarm", "pack", "team"],
          answer: 0,
          explain: "A **bunch** of bananas, grapes or keys is a common collective noun."
        },
        {
          q: "Choose the correct sentence.",
          options: ["The team are winning the match.", "The team is winning the match.", "The teams is winning the match.", "The team were winning the match."],
          answer: 1,
          explain: "A collective noun such as **team** takes a singular verb, so we say “The team **is** winning”."
        }
      ]
    },

    {
      id: "simple-past-tense",
      title: "Simple Past Tense",
      section: "Grammar",
      summary: "The simple past tense tells us about actions that were finished in the past. This chapter covers regular verbs with -ed, irregular verbs, was and were, and negative sentences.",
      notes: [
        {
          heading: "What is the past tense?",
          points: [
            "The **simple past tense** tells us about actions that were completed in the past.",
            "Example: Ravi **played** cricket yesterday."
          ]
        },
        {
          heading: "Regular verbs",
          points: [
            "Most verbs add **-ed**: play → played, walk → walked, cook → cooked.",
            "Verbs that end in e add only **-d**: dance → danced, bake → baked.",
            "Verbs that end in a consonant + y change the y to **ied**: study → studied, carry → carried."
          ]
        },
        {
          heading: "Irregular verbs",
          points: [
            "Irregular verbs change completely in the past and do not add -ed: go → went, eat → ate, see → saw, run → ran, come → came.",
            "These forms must be learned by practice."
          ]
        },
        {
          heading: "Was, were and negatives",
          points: [
            "Use **was** with I, he, she and it: I was happy. Use **were** with we, you and they: They were late.",
            "For a negative sentence, use **did not** with the base verb: She did not come to school."
          ]
        }
      ],
      formulas: [
        "Regular: verb + ed (walk → walked)",
        "Irregular: go → went, eat → ate, see → saw",
        "Negative: did not + base verb (did not go)"
      ],
      terms: [
        { term: "Past tense", meaning: "The form of a verb that shows an action that was completed in the past." },
        { term: "Regular verb", meaning: "A verb that adds -ed to make its past tense, such as walk → walked." },
        { term: "Irregular verb", meaning: "A verb that changes its form completely in the past, such as go → went." },
        { term: "Time expression", meaning: "Words such as yesterday, last week or in 2023 that show when something happened." }
      ],
      examples: [
        {
          q: "Write the past tense of: play, eat, study, come.",
          steps: [
            "play → played: add -ed.",
            "eat → ate: irregular.",
            "study → studied: change y to ied.",
            "come → came: irregular."
          ],
          answer: "played, ate, studied, came"
        }
      ],
      qa: [
        {
          q: "When do we use the simple past tense?",
          a: "We use the simple past tense for actions that were finished at a time in the past. We often use time words such as **yesterday**, **last year** or **in 2020**."
        },
        {
          q: "What is the difference between a regular and an irregular verb?",
          a: "A **regular** verb adds -ed to make its past tense (walk → walked). An **irregular** verb changes its form completely (go → went)."
        }
      ],
      quiz: [
        {
          q: "What is the past tense of “walk”?",
          options: ["walks", "walking", "walked", "walkt"],
          answer: 2,
          explain: "Walk is a regular verb, so we add -ed: **walked**."
        },
        {
          q: "Yesterday we ___ to the temple.",
          options: ["go", "goes", "going", "went"],
          answer: 3,
          explain: "Go is irregular. Its past tense is **went**."
        },
        {
          q: "What is the past tense of “study”?",
          options: ["studied", "studyed", "studies", "studing"],
          answer: 0,
          explain: "Study ends in a consonant + y, so we change y to i and add -ed: **studied**."
        },
        {
          q: "Choose the correct sentence.",
          options: ["She did not came to school.", "She did not come to school.", "She not came to school.", "She did not came yesterday."],
          answer: 1,
          explain: "After “did not”, we use the base verb **come**, not the past form."
        },
        {
          q: "They ___ very happy at the wedding.",
          options: ["be", "are", "were", "was"],
          answer: 2,
          explain: "We use **were** with they in the past tense."
        }
      ]
    },

    {
      id: "adverbs",
      title: "Adverbs",
      section: "Grammar",
      summary: "An adverb tells more about a verb. This chapter explains adverbs of manner, time, place and frequency, and how many adverbs are made by adding -ly.",
      notes: [
        {
          heading: "What is an adverb?",
          points: [
            "An **adverb** is a word that tells more about a verb. It tells how, when, where or how often something happens.",
            "Example: Meena sings **sweetly**."
          ]
        },
        {
          heading: "Adverbs of manner",
          points: [
            "An adverb of **manner** tells how something is done: quickly, carefully, loudly, softly.",
            "Example: The children walked **quietly** into the hall."
          ]
        },
        {
          heading: "Adverbs of time and place",
          points: [
            "Adverbs of **time** tell when: today, yesterday, now, soon.",
            "Adverbs of **place** tell where: here, there, outside, upstairs."
          ]
        },
        {
          heading: "Adverbs of frequency and -ly words",
          points: [
            "Adverbs of **frequency** tell how often: always, often, sometimes, never. Example: We **often** visit our grandparents.",
            "Many adverbs are made by adding **-ly** to an adjective: quick → quickly, careful → carefully, slow → slowly."
          ]
        }
      ],
      formulas: [
        "Adjective + ly = adverb: quick → quickly",
        "Verb + how / when / where / how often? → adverb",
        "Adverb of frequency: always, often, sometimes, never"
      ],
      terms: [
        { term: "Adverb", meaning: "A word that tells more about a verb, telling how, when, where or how often." },
        { term: "Adverb of manner", meaning: "An adverb that tells how something is done, such as slowly or happily." },
        { term: "Adverb of time", meaning: "An adverb that tells when, such as today or soon." },
        { term: "Adverb of place", meaning: "An adverb that tells where, such as here or outside." }
      ],
      examples: [
        {
          q: "Find the adverbs in “The bus stopped suddenly outside the school.” and say what each one tells.",
          steps: [
            "“suddenly” tells how the bus stopped, so it is an adverb of manner.",
            "“outside” tells where the bus stopped, so it is an adverb of place."
          ],
          answer: "suddenly (manner), outside (place)"
        }
      ],
      qa: [
        {
          q: "What is an adverb? Give two examples.",
          a: "An **adverb** tells more about a verb: how, when, where or how often something happens. Examples: **quickly** and **yesterday**."
        },
        {
          q: "What kind of adverb is “always” in “She always wakes up early”?",
          a: "“Always” is an adverb of **frequency**. It tells us how often she wakes up early."
        }
      ],
      quiz: [
        {
          q: "Which word is an adverb in “The dog barked loudly”?",
          options: ["dog", "barked", "big", "loudly"],
          answer: 3,
          explain: "**Loudly** tells how the dog barked, so it is an adverb."
        },
        {
          q: "Which adverb tells when?",
          options: ["yesterday", "there", "carefully", "under"],
          answer: 0,
          explain: "**Yesterday** tells when something happened."
        },
        {
          q: "Which adverb tells where?",
          options: ["quickly", "upstairs", "always", "happily"],
          answer: 1,
          explain: "**Upstairs** tells where something is or happens."
        },
        {
          q: "We ___ visit our cousins in Jaipur.",
          options: ["blue", "house", "sometimes", "run"],
          answer: 2,
          explain: "**Sometimes** is an adverb of frequency. It tells how often we visit."
        },
        {
          q: "Which adverb is formed from the word “careful”?",
          options: ["carefuls", "carefulness", "carefuled", "carefully"],
          answer: 3,
          explain: "Add -ly to careful to make the adverb **carefully**."
        }
      ]
    },

    {
      id: "prepositions",
      title: "Prepositions",
      section: "Grammar",
      summary: "A preposition shows the position, direction or time of one thing in relation to another. This chapter covers in, on, at, under, across and other common prepositions.",
      notes: [
        {
          heading: "What is a preposition?",
          points: [
            "A **preposition** is a word that shows where one thing is in relation to another: in, on, under, between, near.",
            "Example: The cat is **under** the bed."
          ]
        },
        {
          heading: "Prepositions of place",
          points: [
            "Use **in** for something inside: in the box. Use **on** for something on a surface: on the table.",
            "Other place words are under, behind, near, between and beside: The shoes are **beside** the door."
          ]
        },
        {
          heading: "Prepositions of time",
          points: [
            "Use **at** for a clock time: at 6 o’clock. Use **on** for a day: on Sunday.",
            "Use **in** for months, years and parts of the day: in July, in 2025, in the morning."
          ]
        },
        {
          heading: "Prepositions of direction",
          points: [
            "Words such as **to, from, into, towards** and **across** show direction or movement.",
            "Example: We walked **across** the road carefully."
          ]
        }
      ],
      formulas: [
        "in = inside (in the box)",
        "on = on top of or a day (on the table, on Monday)",
        "at = a point of time (at 5 o’clock)"
      ],
      terms: [
        { term: "Preposition", meaning: "A word that shows the position, direction or time of one thing in relation to another." },
        { term: "Position", meaning: "Where something is, such as under, beside or near." },
        { term: "Direction", meaning: "Where something is going, such as to, from or across." },
        { term: "Object of a preposition", meaning: "The noun that comes after a preposition, such as “table” in “on the table”." }
      ],
      examples: [
        {
          q: "Fill in at, in or on: “Our school bus reaches the stop ___ 7 o’clock ___ the morning, and I sit ___ the seat near the window.”",
          steps: [
            "7 o’clock is a clock time, so use **at**.",
            "“the morning” is a part of the day, so use **in**.",
            "“the seat” is a surface I sit on, so use **on**."
          ],
          answer: "at, in, on"
        }
      ],
      qa: [
        {
          q: "What is a preposition? Give two examples.",
          a: "A preposition shows the position or direction of one thing in relation to another. Examples: **on**, **under**, **between** and **across**."
        },
        {
          q: "Which preposition do we use with days of the week?",
          a: "We use **on** with days of the week: on Sunday. We use **at** for clock times (at noon) and **in** for months, years and parts of the day (in July, in the evening)."
        }
      ],
      quiz: [
        {
          q: "The book is ___ the table.",
          options: ["on", "at", "into", "from"],
          answer: 0,
          explain: "We use **on** for something resting on a surface."
        },
        {
          q: "We reached the station ___ 6 o’clock.",
          options: ["on", "at", "in", "under"],
          answer: 1,
          explain: "We use **at** with a clock time."
        },
        {
          q: "The cat hid ___ the bed.",
          options: ["quickly", "happy", "under", "book"],
          answer: 2,
          explain: "**Under** is a preposition of place. It shows where the cat hid."
        },
        {
          q: "The children ran ___ the playground.",
          options: ["happy", "ball", "quickly", "across"],
          answer: 3,
          explain: "**Across** is a preposition that shows direction. The others are not prepositions."
        },
        {
          q: "My birthday is ___ July.",
          options: ["in", "on", "at", "by"],
          answer: 0,
          explain: "We use **in** with months such as July."
        }
      ]
    },

    {
      id: "conjunctions",
      title: "Conjunctions (And, But, Or)",
      section: "Grammar",
      summary: "A conjunction joins words, phrases or sentences. This chapter focuses on and, but and or, and when to use a comma with them.",
      notes: [
        {
          heading: "What is a conjunction?",
          points: [
            "A **conjunction** is a joining word. It joins two words, phrases or sentences.",
            "Example: Ravi **and** Meena went to the market."
          ]
        },
        {
          heading: "And",
          points: [
            "Use **and** to add one thing to another: Radha sang **and** danced.",
            "It joins ideas that go together."
          ]
        },
        {
          heading: "But",
          points: [
            "Use **but** to show a difference or a contrast: She was tired, **but** she finished her homework.",
            "The idea after “but” is different from the idea before it."
          ]
        },
        {
          heading: "Or",
          points: [
            "Use **or** to show a choice: Would you like tea **or** coffee?",
            "Only one of the choices can be taken."
          ]
        },
        {
          heading: "Using a comma",
          points: [
            "When two complete sentences are joined by and, but or or, we often put a comma before the conjunction: We went to the park, **but** it was closed.",
            "We do not need a comma when and joins two single words: Ravi and Meena."
          ]
        }
      ],
      formulas: [
        "A and B = adding one thing to another",
        "A but B = a difference or contrast",
        "A or B = a choice"
      ],
      terms: [
        { term: "Conjunction", meaning: "A joining word that connects words, phrases or sentences." },
        { term: "Joining", meaning: "Putting two things together to make one sentence." },
        { term: "Contrast", meaning: "A difference between two ideas, shown by “but”." },
        { term: "Choice", meaning: "A selection between two or more options, shown by “or”." }
      ],
      examples: [
        {
          q: "Join the two sentences with the correct conjunction: “I wanted to play outside. It was raining.”",
          steps: [
            "The second sentence stops the first idea from happening, so it shows a contrast.",
            "The correct conjunction is **but**."
          ],
          answer: "I wanted to play outside, but it was raining."
        }
      ],
      qa: [
        {
          q: "What is a conjunction? Give three examples.",
          a: "A conjunction is a word that joins words, phrases or sentences. Examples: **and**, **but** and **or**."
        },
        {
          q: "When do we use “or” in a sentence?",
          a: "We use **or** to show a choice between two things. Example: Would you like milk **or** juice?"
        }
      ],
      quiz: [
        {
          q: "Choose the correct joining word: Priya ___ Kavita are best friends.",
          options: ["but", "and", "or", "because"],
          answer: 1,
          explain: "**And** adds Kavita to Priya, so it fits best."
        },
        {
          q: "I was tired, ___ I finished my homework.",
          options: ["or", "and", "but", "at"],
          answer: 2,
          explain: "**But** shows a contrast: being tired did not stop me."
        },
        {
          q: "Would you like tea ___ coffee?",
          options: ["and", "but", "with", "or"],
          answer: 3,
          explain: "**Or** shows a choice between tea and coffee."
        },
        {
          q: "Which conjunction adds one more idea?",
          options: ["and", "but", "or", "under"],
          answer: 0,
          explain: "**And** adds one more idea to the sentence."
        },
        {
          q: "Which sentence uses “but” correctly?",
          options: ["I like tea but coffee.", "I like tea, but I do not like coffee.", "I like tea but and coffee.", "I like tea and but coffee."],
          answer: 1,
          explain: "“But” joins two ideas that contrast, so we write **I like tea, but I do not like coffee.**"
        }
      ]
    },

    // ───────────────────────────── VOCABULARY ─────────────────────────────
    {
      id: "synonyms-and-antonyms",
      title: "Synonyms and Antonyms",
      section: "Vocabulary",
      summary: "Synonyms are words with the same or nearly the same meaning, and antonyms are words with opposite meanings. This chapter shows how to use both to make your writing richer.",
      notes: [
        {
          heading: "What are synonyms?",
          points: [
            "**Synonyms** are words with the same or nearly the same meaning: begin – start, quick – fast, clever – smart.",
            "Learning synonyms helps you find the right word for your sentence."
          ]
        },
        {
          heading: "What are antonyms?",
          points: [
            "**Antonyms** are words with opposite meanings: happy – sad, early – late, win – lose.",
            "Many antonyms are used together in sentences: The shop was open early, but it closed late."
          ]
        },
        {
          heading: "Using synonyms in writing",
          points: [
            "Use synonyms to avoid repeating the same word: “The child was happy and delighted.”",
            "Good writers choose words that suit the sentence, not just any word with a similar meaning."
          ]
        },
        {
          heading: "Synonyms are not always exact",
          points: [
            "Words such as big and huge are close in meaning, but “huge” is much stronger than “big”.",
            "Check the meaning in a dictionary before you use a new synonym."
          ]
        }
      ],
      formulas: [
        "Synonym: same meaning (begin = start)",
        "Antonym: opposite meaning (begin ↔ end)"
      ],
      terms: [
        { term: "Synonym", meaning: "A word that has the same or nearly the same meaning as another word." },
        { term: "Antonym", meaning: "A word that has the opposite meaning of another word." },
        { term: "Thesaurus", meaning: "A book or list that gives synonyms and antonyms of words." },
        { term: "Context", meaning: "The words around a word, which help us understand its meaning." }
      ],
      examples: [
        {
          q: "Give a synonym and an antonym for “brave”.",
          steps: [
            "A synonym means nearly the same: **courageous** or **fearless**.",
            "An antonym means the opposite: **cowardly**."
          ],
          answer: "Synonym: courageous; antonym: cowardly"
        }
      ],
      qa: [
        {
          q: "What is a synonym? Give two examples.",
          a: "A synonym is a word with the same or nearly the same meaning. Examples: begin – start, small – tiny."
        },
        {
          q: "Why do writers use synonyms?",
          a: "Writers use synonyms to avoid repeating the same word again and again, which makes their writing more interesting to read."
        }
      ],
      quiz: [
        {
          q: "Which word is a synonym of “begin”?",
          options: ["end", "stop", "start", "finish"],
          answer: 2,
          explain: "**Start** has the same meaning as begin. End is its antonym."
        },
        {
          q: "Which word is an antonym of “early”?",
          options: ["soon", "morning", "quick", "late"],
          answer: 3,
          explain: "The opposite of **early** is **late**."
        },
        {
          q: "Which word means the same as “clever”?",
          options: ["smart", "slow", "lazy", "foolish"],
          answer: 0,
          explain: "**Smart** means the same as clever. Foolish is its opposite."
        },
        {
          q: "Which word is an antonym of “win”?",
          options: ["game", "lose", "score", "cheer"],
          answer: 1,
          explain: "**Lose** is the opposite of win."
        },
        {
          q: "Which word is a synonym of “big”?",
          options: ["small", "tiny", "large", "short"],
          answer: 2,
          explain: "**Large** has the same meaning as big. Small and tiny are its opposite and near-opposite."
        }
      ]
    },

    // ───────────────────────────── WRITING SKILLS ─────────────────────────────
    {
      id: "punctuation",
      title: "Punctuation",
      section: "Writing Skills",
      summary: "Punctuation marks help readers understand where sentences end, when to pause and what kind of sentence it is. This chapter covers full stops, question marks, commas, apostrophes and quotation marks.",
      notes: [
        {
          heading: "End marks",
          points: [
            "A **full stop** (.) ends a statement: Ravi plays cricket.",
            "A **question mark** (?) ends a question: Where is your bag?",
            "An **exclamation mark** (!) shows strong feeling or a sudden shout: What a beautiful day!"
          ]
        },
        {
          heading: "Comma",
          points: [
            "A **comma** (,) shows a short pause. It also separates items in a list: We bought apples, oranges and mangoes.",
            "Use a comma after words such as Yes or No: Yes, I will come."
          ]
        },
        {
          heading: "Apostrophe",
          points: [
            "An **apostrophe** (’) shows ownership: Meera’s pen, Sohan’s bag.",
            "It also shows a short form: don’t (do not), it’s (it is), can’t (cannot)."
          ]
        },
        {
          heading: "Capital letters and quotation marks",
          points: [
            "Use a capital letter for the first word of a sentence, for names of people and places, and for the word I.",
            "**Quotation marks** (“ ”) show the exact words that someone says: Mother said, “Come home early.”"
          ]
        }
      ],
      formulas: [
        "Statement → full stop (.)",
        "Question → question mark (?)",
        "Strong feeling → exclamation mark (!)"
      ],
      terms: [
        { term: "Punctuation", meaning: "Marks such as full stops, commas and question marks that help us read a sentence correctly." },
        { term: "Comma", meaning: "A mark (,) that shows a short pause or separates items in a list." },
        { term: "Apostrophe", meaning: "A mark (’) that shows ownership or a short form of words." },
        { term: "Quotation marks", meaning: "Marks (“ ”) that show the exact words someone says." }
      ],
      examples: [
        {
          q: "Add capital letters and punctuation: “ravi asked where is my bag”",
          steps: [
            "Ravi is a name, so it begins with a capital R.",
            "The exact words Ravi said go inside quotation marks, and “Where” begins with a capital letter.",
            "The words are a question, so the sentence ends with a question mark."
          ],
          answer: "Ravi asked, “Where is my bag?”"
        }
      ],
      qa: [
        {
          q: "Which punctuation mark do you use at the end of a question?",
          a: "A **question mark** (?) ends a question, such as “What is your name?”"
        },
        {
          q: "Where do we use an apostrophe?",
          a: "We use an apostrophe to show ownership (Anil’s bicycle) and in short forms such as don’t and it’s."
        }
      ],
      quiz: [
        {
          q: "Which mark ends a question?",
          options: ["full stop", "comma", "colon", "question mark"],
          answer: 3,
          explain: "A **question mark** ends a question."
        },
        {
          q: "Which sentence is punctuated and capitalised correctly?",
          options: ["We went to Jaipur.", "we went to jaipur", "We went to Delhi", "We went to Jaipur?"],
          answer: 0,
          explain: "The sentence starts with a capital letter, Jaipur is a place name with a capital J, and it ends with a full stop."
        },
        {
          q: "Which word correctly shows that the bag belongs to Sohan?",
          options: ["Sohans bag", "Sohan’s bag", "Sohan’s’ bag", "Sohan bag’s"],
          answer: 1,
          explain: "Add an apostrophe and s to show ownership: **Sohan’s** bag."
        },
        {
          q: "Choose the sentence with the correct commas.",
          options: ["We bought, apples oranges and mangoes.", "We bought apples oranges and, mangoes.", "We bought apples, oranges and mangoes.", "We bought apples oranges and mangoes,."],
          answer: 2,
          explain: "Commas separate the items in a list, so the correct sentence is **We bought apples, oranges and mangoes.**"
        },
        {
          q: "Which mark shows strong feeling?",
          options: ["question mark", "comma", "full stop", "exclamation mark"],
          answer: 3,
          explain: "An **exclamation mark** shows strong feeling, such as surprise or joy."
        }
      ]
    },

    {
      id: "informal-letter",
      title: "Informal Letter",
      section: "Writing Skills",
      summary: "An informal letter is a friendly letter written to a friend or family member. This chapter explains its parts and how to write one in a warm, simple style.",
      notes: [
        {
          heading: "What is an informal letter?",
          points: [
            "An **informal letter** is written to a friend or a family member. It is friendly and uses simple, natural language.",
            "We share news, ask questions and say thank you in an informal letter."
          ]
        },
        {
          heading: "Parts of an informal letter",
          points: [
            "The **sender’s address** and the **date** are written at the top right.",
            "The **greeting** comes next, such as “Dear Nani,”. Then the **body** gives the main message in one or more paragraphs.",
            "The **closing** comes before the name, such as “With love,”, followed by your name."
          ]
        },
        {
          heading: "Tone and language",
          points: [
            "Write as you would speak to the person, but keep your spelling and punctuation correct.",
            "Use a comma after the greeting and after the closing."
          ]
        }
      ],
      formulas: [
        "Address → Date → Greeting → Body → Closing → Name",
        "Greeting: Dear Nani, | Closing: With love,"
      ],
      terms: [
        { term: "Informal letter", meaning: "A friendly letter written to a friend or a family member." },
        { term: "Greeting", meaning: "The opening words of a letter, such as “Dear Rhea,”." },
        { term: "Closing", meaning: "The words before your name at the end of a letter, such as “With love,”." },
        { term: "Sender’s address", meaning: "Your own address, written at the top right of the letter." }
      ],
      examples: [
        {
          q: "Write a short informal letter to your cousin Rhea about your school sports day.",
          steps: [
            "Write your address and the date at the top right.",
            "Greet her with “Dear Rhea,”.",
            "In the body, tell her about the race you won and the games you played.",
            "End with “With love,” and your name."
          ],
          answer: "Dear Rhea,\nWe had our sports day on Friday, and I ran in the 100-metre race. I came second, and I was very happy with my medal!\nHope you are well. Please write back soon.\nWith love,\nAnanya"
        }
      ],
      qa: [
        {
          q: "Who do we usually write an informal letter to?",
          a: "We write an informal letter to a friend, a relative or a family member."
        },
        {
          q: "What are the parts of an informal letter?",
          a: "The parts are the sender’s address, the date, the greeting, the body, the closing and the sender’s name."
        }
      ],
      quiz: [
        {
          q: "To whom is an informal letter usually written?",
          options: ["a close friend", "a bank manager", "a newspaper editor", "a government office"],
          answer: 0,
          explain: "An informal letter is written to a friend or family member."
        },
        {
          q: "Which of these is a greeting?",
          options: ["With love,", "Dear Nani,", "Yours sincerely,", "Thank you"],
          answer: 1,
          explain: "“Dear Nani,” is the greeting. The others are closings or phrases."
        },
        {
          q: "Which closing is suitable for an informal letter to a grandmother?",
          options: ["Yours faithfully,", "Yours sincerely,", "With love,", "Respectfully,"],
          answer: 2,
          explain: "“With love,” is a warm closing for family. The others are formal."
        },
        {
          q: "Where do we write the date in a letter?",
          options: ["at the bottom", "in the middle of the body", "after the signature", "at the top right"],
          answer: 3,
          explain: "The date is written at the **top right** of the letter."
        },
        {
          q: "Which tone is best for an informal letter?",
          options: ["Friendly and simple", "Stiff and very formal", "Rude and short", "Full of legal words"],
          answer: 0,
          explain: "An informal letter should sound **friendly and simple**, like talking to the person."
        }
      ]
    },

    // ───────────────────────────── READING SKILLS ─────────────────────────────
    {
      id: "reading-comprehension",
      title: "Reading Comprehension",
      section: "Reading Skills",
      summary: "Reading comprehension means reading a passage and understanding it well enough to answer questions. This chapter teaches you how to find answers in the text and how to think about what it means.",
      notes: [
        {
          heading: "What is comprehension?",
          points: [
            "Reading comprehension means reading a passage carefully and understanding it well enough to answer questions about it.",
            "Read the passage once quickly to get the main idea, and then read it again slowly."
          ]
        },
        {
          heading: "How to find answers",
          points: [
            "Read the question carefully and underline the important words in it.",
            "Look for the same or similar words in the passage. The answer is usually in the paragraph that contains them."
          ]
        },
        {
          heading: "Literal and inference questions",
          points: [
            "A **literal question** has its answer written directly in the passage: What is the name of the village?",
            "An **inference question** needs you to think. The answer is hidden in clues, such as “Why do you think Priya smiled?”"
          ]
        },
        {
          heading: "Writing good answers",
          points: [
            "Write your answer in a complete sentence, using words from the passage where you can.",
            "Guess the meaning of a new word from the sentence around it. This is called understanding the **context**."
          ]
        }
      ],
      formulas: [
        "Read → Underline key words → Find the answer → Write in a full sentence",
        "Literal question = answer is in the text; inference = clues + thinking"
      ],
      terms: [
        { term: "Comprehension", meaning: "Understanding what you read well enough to answer questions about it." },
        { term: "Passage", meaning: "A short piece of reading, usually with a few paragraphs." },
        { term: "Literal question", meaning: "A question whose answer is stated directly in the passage." },
        { term: "Inference", meaning: "A sensible guess based on clues in the passage." }
      ],
      examples: [
        {
          q: "Passage: “Meera woke up early on Sunday. She helped Ma water the plants and then cycled to her friend Rani’s house.” Question: What did Meera do before she cycled?",
          steps: [
            "Find the words “before she cycled” in the question.",
            "The passage says that before cycling, she helped Ma water the plants."
          ],
          answer: "She helped Ma water the plants."
        }
      ],
      qa: [
        {
          q: "How should you answer a reading comprehension question?",
          a: "Read the question carefully, find the part of the passage that has the answer, and write it in a complete sentence, using your own words where you can."
        },
        {
          q: "What is the difference between a literal question and an inference question?",
          a: "A **literal** question is answered directly from the passage. An **inference** question needs you to think and use the clues in the passage to find the answer."
        }
      ],
      quiz: [
        {
          q: "Read: “Aman carried a red umbrella because dark clouds were gathering.” Why did Aman carry the umbrella?",
          options: ["It was sunny.", "Dark clouds were gathering.", "It was his birthday.", "His friend asked him to."],
          answer: 1,
          explain: "The passage states the reason directly: dark clouds were gathering."
        },
        {
          q: "Read: “Our village school has a big garden where we grow tomatoes and beans.” What is grown in the school garden?",
          options: ["mangoes and rice", "roses and lilies", "tomatoes and beans", "potatoes and onions"],
          answer: 2,
          explain: "This is a literal question. The passage says the garden has tomatoes and beans."
        },
        {
          q: "Read: “Priya ran to the window when she heard the bell of the ice-cream cart. Her eyes shone.” How do you think Priya felt?",
          options: ["Angry", "Bored", "Sleepy", "Excited"],
          answer: 3,
          explain: "This is an inference question. Running to the window and shining eyes are clues that she was excited."
        },
        {
          q: "Which kind of question has its answer written directly in the passage?",
          options: ["literal question", "inference question", "riddle", "opinion question"],
          answer: 0,
          explain: "A **literal question** has its answer stated directly in the passage."
        },
        {
          q: "What is the best way to answer a comprehension question?",
          options: ["Write one word without reading", "Read carefully and answer in full sentences", "Copy the whole passage", "Skip the question"],
          answer: 1,
          explain: "Read carefully, find the answer and write it in a complete sentence."
        }
      ]
    },
    // ───────────────────────────── RAINBOW ─────────────────────────────
    {
      "id": "rb4-the-king-and-his-sons",
      "title": "The King and His Sons",
      "section": "Rainbow",
      "summary": "An old king tests his three clever sons to choose his successor. The wise third son fills a whole room with candle light and wins.",
      "notes": [
        {
          "heading": "The king's problem",
          "points": [
            "An old king has three sons who are all brave and wise.",
            "He must choose one as his successor but cannot decide."
          ]
        },
        {
          "heading": "The test",
          "points": [
            "The king gives each son a gold coin and one week.",
            "They must bring things that can fill a big room completely."
          ]
        },
        {
          "heading": "The three sons",
          "points": [
            "The first son buys cotton, thinking it is light and will fill the room. The second buys grapes in the city of grapes.",
            "The third son, who is very wise, does not go far. He buys candles."
          ]
        },
        {
          "heading": "The result",
          "points": [
            "The cotton and the grapes do not fill the whole space.",
            "The third son shuts the doors and windows and lights the candles. Light fills the room.",
            "The pleased king names him the future king. Clear thinking beats a long journey."
          ]
        }
      ],
      "terms": [
        {
          "term": "Successor",
          "meaning": "The person who takes the place of a king or leader after him."
        },
        {
          "term": "Wise",
          "meaning": "Having good sense and clear thinking."
        },
        {
          "term": "Court",
          "meaning": "The place where a king meets his ministers."
        },
        {
          "term": "Minister",
          "meaning": "A person who helps the king rule."
        },
        {
          "term": "Sufficient",
          "meaning": "Enough."
        }
      ],
      "qa": [
        {
          "q": "Why was the king not able to decide on a successor?",
          "a": "All three sons were brave and wise, so he could not decide who was best."
        },
        {
          "q": "How did the third son win?",
          "a": "He lit candles in the closed room and light filled the whole room, so the king was pleased."
        }
      ],
      "quiz": [
        {
          "q": "How many sons did the king have?",
          "options": [
            "Two",
            "Four",
            "Five",
            "Three"
          ],
          "answer": 3,
          "explain": "The king had three sons."
        },
        {
          "q": "How much time did the king give?",
          "options": [
            "One day",
            "One month",
            "One week",
            "Two weeks"
          ],
          "answer": 2,
          "explain": "He gave one week for the task."
        },
        {
          "q": "What did the first son buy?",
          "options": [
            "Grapes",
            "Candles",
            "Cotton",
            "Flowers"
          ],
          "answer": 2,
          "explain": "The first son bought cotton."
        },
        {
          "q": "What filled the whole room at last?",
          "options": [
            "Cotton",
            "Light",
            "Grapes",
            "Water"
          ],
          "answer": 1,
          "explain": "The candles filled the room with light."
        },
        {
          "q": "Who became the future king?",
          "options": [
            "The third son",
            "The first son",
            "The second son",
            "A minister"
          ],
          "answer": 0,
          "explain": "The king was pleased with the third son."
        }
      ]
    },
    {
      "id": "rb4-the-farmer-and-the-bullock-cart",
      "title": "The Farmer and the Bullock Cart",
      "section": "Rainbow",
      "summary": "An old farmer's bullock cart gets stuck in the mud on his way to the grain market. Other farmers ignore him, but two youngsters help him.",
      "notes": [
        {
          "heading": "The farmer",
          "points": [
            "Surjit is a sixty-year-old farmer who has worked hard. His wheat crop is ready.",
            "He loads the bags of wheat on his bullock cart on Sunday evening."
          ]
        },
        {
          "heading": "The journey",
          "points": [
            "On Monday morning he leaves for the grain market (daana mandi).",
            "The path is kaccha and it rained heavily last night, so he goes slowly."
          ]
        },
        {
          "heading": "Stuck in the mud",
          "points": [
            "The wheels get stuck in the mud near a field. He cannot pull the cart out.",
            "The farmers working in the fields hear his call but ignore it."
          ]
        },
        {
          "heading": "Help comes",
          "points": [
            "It is getting dark, and the old, weak farmer is still trying.",
            "Two youngsters come and help, and the three pull the cart out. The farmer is happy and blesses them.",
            "The lesson: we should help people in need."
          ]
        }
      ],
      "terms": [
        {
          "term": "Bullock cart",
          "meaning": "A cart pulled by bullocks, used on farms."
        },
        {
          "term": "Kaccha path",
          "meaning": "A road made of mud, not tar."
        },
        {
          "term": "Ignore",
          "meaning": "To take no notice."
        },
        {
          "term": "Youngster",
          "meaning": "A young person."
        },
        {
          "term": "Blessing",
          "meaning": "Good wishes given to someone."
        }
      ],
      "qa": [
        {
          "q": "Why did the farmer go slowly?",
          "a": "The path was kaccha and heavy rain had made it muddy. He feared the wheels would get stuck."
        },
        {
          "q": "Who helped the farmer in the end?",
          "a": "Two youngsters helped him pull the cart out of the mud."
        }
      ],
      "quiz": [
        {
          "q": "How old was Surjit?",
          "options": [
            "Fifty",
            "Seventy",
            "Forty",
            "Sixty"
          ],
          "answer": 3,
          "explain": "Surjit was sixty years old."
        },
        {
          "q": "What was loaded on the bullock cart?",
          "options": [
            "Bags of rice",
            "Fruits",
            "Bricks",
            "Bags of wheat"
          ],
          "answer": 3,
          "explain": "He loaded the bags of wheat."
        },
        {
          "q": "Why did the cart get stuck?",
          "options": [
            "It was broken",
            "It was loaded with stones",
            "The path was muddy",
            "The bullocks slept"
          ],
          "answer": 2,
          "explain": "It had rained heavily so the wheels stuck in mud."
        },
        {
          "q": "What did the other farmers do?",
          "options": [
            "They helped him",
            "They ignored his request",
            "They laughed and went away",
            "They called the police"
          ],
          "answer": 1,
          "explain": "The farmers in the fields ignored him."
        },
        {
          "q": "Who finally helped the farmer?",
          "options": [
            "Two youngsters",
            "His sons",
            "The police",
            "The village head"
          ],
          "answer": 0,
          "explain": "Two youngsters came and lent a helping hand."
        }
      ]
    },
    {
      "id": "rb4-safety-rules",
      "title": "Safety Rules",
      "section": "Rainbow",
      "summary": "Raman and his father talk about road safety on a car trip: the seat belt, the zebra crossing and the traffic lights.",
      "notes": [
        {
          "heading": "Seat belt",
          "points": [
            "Raman's father asks him to wear the seat belt in the car.",
            "Raman thinks it is only for the traffic policeman, but his father says it is for our own safety.",
            "It protects the driver and passengers from injury in an accident."
          ]
        },
        {
          "heading": "Zebra crossing",
          "points": [
            "The father stops the car on the zebra crossing by mistake.",
            "Raman says vehicles must stop before the zebra crossing so that pedestrians can cross safely."
          ]
        },
        {
          "heading": "Traffic lights",
          "points": [
            "Red means stop. Yellow means wait. Green means go.",
            "Raman sings a rhyme about the lights and the father drives on when the signal turns green."
          ]
        }
      ],
      "terms": [
        {
          "term": "Seat belt",
          "meaning": "A strap that holds you safely in a car seat."
        },
        {
          "term": "Pedestrian",
          "meaning": "A person who walks on the road."
        },
        {
          "term": "Zebra crossing",
          "meaning": "Black and white stripes on the road where people cross."
        },
        {
          "term": "Traffic signal",
          "meaning": "Red, yellow and green lights that control the traffic."
        },
        {
          "term": "Passenger",
          "meaning": "A person who travels in a vehicle."
        }
      ],
      "qa": [
        {
          "q": "Why do we wear a seat belt?",
          "a": "We wear it for our own safety. It protects us from injury in an accident."
        },
        {
          "q": "What do the three traffic lights mean?",
          "a": "Red means stop, yellow means wait and green means go."
        }
      ],
      "quiz": [
        {
          "q": "What did Dad promise to take Raman to?",
          "options": [
            "A shopping mall",
            "A park",
            "A temple",
            "A zoo"
          ],
          "answer": 0,
          "explain": "He promised to take Raman to the shopping mall on Saturday."
        },
        {
          "q": "Why do we wear a seat belt?",
          "options": [
            "For the policeman",
            "For fun",
            "To look smart",
            "For our safety"
          ],
          "answer": 3,
          "explain": "A seat belt protects us from injury."
        },
        {
          "q": "What does the red light mean?",
          "options": [
            "Go",
            "Wait",
            "Stop",
            "Turn"
          ],
          "answer": 2,
          "explain": "Red light means stop."
        },
        {
          "q": "Who can use the zebra crossing safely?",
          "options": [
            "Cars",
            "Pedestrians",
            "Buses",
            "Trucks"
          ],
          "answer": 1,
          "explain": "Zebra crossings are for the safety of pedestrians."
        },
        {
          "q": "Where should vehicles stop at the signal?",
          "options": [
            "On the zebra crossing",
            "Before the zebra crossing",
            "After the crossing",
            "In the middle of the road"
          ],
          "answer": 1,
          "explain": "They must stop before the crossing so people can cross."
        }
      ]
    },
    {
      "id": "rb4-teamwork",
      "title": "Teamwork (Poem)",
      "section": "Rainbow",
      "summary": "A rhyming poem about how working together lets us share success. Examples are passing the basketball and the baton in a relay race.",
      "notes": [
        {
          "heading": "The idea",
          "points": [
            "Teamwork means working together.",
            "Together we can make our dream work and share the joy of what we have done."
          ]
        },
        {
          "heading": "Examples",
          "points": [
            "In basketball, if nobody passes, nobody can shoot through the hoop.",
            "In a relay race, the race cannot go on if nobody passes the baton."
          ]
        },
        {
          "heading": "The message",
          "points": [
            "Each one of us is a part of the whole.",
            "We keep our eyes on a common goal.",
            "Sometimes a 'you' and 'I' becomes an 'us', and that is a big plus."
          ]
        }
      ],
      "terms": [
        {
          "term": "Teamwork",
          "meaning": "Working together as a group."
        },
        {
          "term": "Hoop",
          "meaning": "The metal ring in basketball."
        },
        {
          "term": "Baton",
          "meaning": "A thin stick passed in a relay race."
        },
        {
          "term": "Goal",
          "meaning": "The aim we want to reach."
        },
        {
          "term": "Common",
          "meaning": "Shared by all."
        }
      ],
      "qa": [
        {
          "q": "What does the poem say about passing in basketball?",
          "a": "If nobody passes the ball, nobody can shoot."
        },
        {
          "q": "What does teamwork help us do?",
          "a": "It helps us make our dream work and share the joy."
        }
      ],
      "quiz": [
        {
          "q": "What is teamwork?",
          "options": [
            "Working together",
            "Working alone",
            "Sleeping",
            "Playing alone"
          ],
          "answer": 0,
          "explain": "Teamwork means working together."
        },
        {
          "q": "What is passed in a relay race?",
          "options": [
            "A ball",
            "A stone",
            "A bat",
            "A baton"
          ],
          "answer": 3,
          "explain": "The baton is passed from runner to runner."
        },
        {
          "q": "What do players shoot through in basketball?",
          "options": [
            "The net of a cricket",
            "The baton",
            "The hoop",
            "The goal post"
          ],
          "answer": 2,
          "explain": "The ball is shot through the hoop."
        },
        {
          "q": "What do team members keep their eyes on?",
          "options": [
            "Different goals",
            "A television",
            "A common goal",
            "Their shoes"
          ],
          "answer": 2,
          "explain": "The team keeps eyes on a common goal."
        },
        {
          "q": "What does 'you or I becomes an us' mean?",
          "options": [
            "We fight",
            "We join as one team",
            "We separate",
            "We forget"
          ],
          "answer": 1,
          "explain": "Teamwork turns individuals into a group."
        }
      ]
    },
    {
      "id": "rb4-walnut-and-watermelon",
      "title": "Walnut and Watermelon",
      "section": "Rainbow",
      "summary": "In Kashmir a boy named Rahim wonders why the big watermelon grows on a vine and the small walnut on a tall tree, until a walnut falls on his head.",
      "notes": [
        {
          "heading": "Rahim and his father",
          "points": [
            "Long ago in Kashmir, a small boy Rahim lives with his parents, who are expert carpet weavers.",
            "One morning at six, he and his father go for a walk and see mountains, green fields, cows and white ducks in a pond."
          ]
        },
        {
          "heading": "Under the walnut tree",
          "points": [
            "They rest under a shady walnut tree. Rahim sees a big watermelon growing on a vine in a nearby field.",
            "Rahim thinks God has made a mistake: the small walnut should grow on a vine and the big watermelon on a tree."
          ]
        },
        {
          "heading": "The lesson",
          "points": [
            "His father tells him never to doubt God, since what God does is always wise.",
            "Just then a walnut falls on Rahim's head. 'Ouch!' he says.",
            "Rahim is glad that walnuts, not watermelons, grow on trees. Everything in nature has a reason."
          ]
        }
      ],
      "terms": [
        {
          "term": "Craftsperson",
          "meaning": "A person who makes things by hand."
        },
        {
          "term": "Vine",
          "meaning": "A creeping plant."
        },
        {
          "term": "Paradise",
          "meaning": "A place of great beauty."
        },
        {
          "term": "Lush",
          "meaning": "Thick, green and healthy."
        },
        {
          "term": "Wonder",
          "meaning": "To think about something with curiosity."
        }
      ],
      "qa": [
        {
          "q": "What did Rahim think was a mistake?",
          "a": "He thought the big watermelon should grow on a tree and the small walnut on a vine."
        },
        {
          "q": "How did Rahim understand his mistake?",
          "a": "A walnut fell on his head. He realised a watermelon would hurt much more, so nature is wise."
        }
      ],
      "quiz": [
        {
          "q": "Where does the story take place?",
          "options": [
            "Kashmir",
            "Punjab",
            "Kerala",
            "Goa"
          ],
          "answer": 0,
          "explain": "The story is set in Kashmir."
        },
        {
          "q": "What did Rahim's parents make?",
          "options": [
            "Shoes",
            "Toys",
            "Pots",
            "Carpets"
          ],
          "answer": 3,
          "explain": "They were expert carpet weavers."
        },
        {
          "q": "Under which tree did they rest?",
          "options": [
            "A mango tree",
            "A banyan tree",
            "A neem tree",
            "A walnut tree"
          ],
          "answer": 3,
          "explain": "They sat under a shady walnut tree."
        },
        {
          "q": "On what does a watermelon grow?",
          "options": [
            "On a tall tree",
            "On a bush",
            "On a vine",
            "On a rock"
          ],
          "answer": 2,
          "explain": "A watermelon grows on a vine."
        },
        {
          "q": "What fell on Rahim's head?",
          "options": [
            "A watermelon",
            "A walnut",
            "A mango",
            "A stone"
          ],
          "answer": 1,
          "explain": "A walnut fell on his head."
        }
      ]
    },
    {
      "id": "rb4-health-in-our-hands",
      "title": "Health in Our Hands",
      "section": "Rainbow",
      "summary": "Simran gets a stomach ache because she ate with unwashed hands. She learns that clean hands keep us healthy.",
      "notes": [
        {
          "heading": "Simran's stomach ache",
          "points": [
            "It is Children's Day, 14 November. Simran is ready for school and the celebration, but she gets a severe stomach ache.",
            "Her mother takes her to the doctor."
          ]
        },
        {
          "heading": "The doctor's finding",
          "points": [
            "Simran had not eaten outside. She had played football and gone to bed after dinner.",
            "She had not washed her hands with soap before eating, so germs went into her body and made her ill."
          ]
        },
        {
          "heading": "The advice",
          "points": [
            "Eat healthy food, avoid junk food and drink lots of water.",
            "Wash hands with soap, front and back and between the fingers, before eating and after coughing, playing, touching pets, using the toilet or visiting a hospital."
          ]
        },
        {
          "heading": "The teacher's lesson",
          "points": [
            "Germs cannot be seen with the naked eye, but they are dangerous.",
            "When we wash our hands with soap, the germs go down the drain.",
            "All the students say: 'Our health is in our hands'."
          ]
        }
      ],
      "terms": [
        {
          "term": "Germs",
          "meaning": "Tiny living things that can make us ill."
        },
        {
          "term": "Hygiene",
          "meaning": "Habits that keep us clean and healthy."
        },
        {
          "term": "Junk food",
          "meaning": "Food with little goodness, like chips and fried snacks."
        },
        {
          "term": "Stomach ache",
          "meaning": "Pain in the stomach."
        },
        {
          "term": "Health is wealth",
          "meaning": "Good health is the most valuable thing we have."
        }
      ],
      "qa": [
        {
          "q": "Why did Simran have a stomach ache?",
          "a": "She ate dinner without washing her hands, so germs from her dirty hands went into her stomach."
        },
        {
          "q": "When should we wash our hands?",
          "a": "We should wash them before eating, and after coughing, playing, touching pets, using the toilet or visiting a hospital."
        }
      ],
      "quiz": [
        {
          "q": "Which day was it in the story?",
          "options": [
            "Children's Day",
            "Diwali",
            "Independence Day",
            "Teachers' Day"
          ],
          "answer": 0,
          "explain": "The date was 14 November, Children's Day."
        },
        {
          "q": "What did Simran feel?",
          "options": [
            "A stomach ache",
            "A headache",
            "A toothache",
            "A cold"
          ],
          "answer": 0,
          "explain": "She suddenly felt a severe stomach ache."
        },
        {
          "q": "What was the reason for her illness?",
          "options": [
            "She ate outside",
            "She played too long",
            "She slept late",
            "She ate with unwashed hands"
          ],
          "answer": 3,
          "explain": "She had not washed her hands with soap."
        },
        {
          "q": "What should we use to wash our hands?",
          "options": [
            "Only a cloth",
            "Only oil",
            "Soap and water",
            "Sand"
          ],
          "answer": 2,
          "explain": "Washing hands with soap sends germs down the drain."
        },
        {
          "q": "Can we see germs with the naked eye?",
          "options": [
            "Yes, always",
            "No",
            "Only at night",
            "Only in the sun"
          ],
          "answer": 1,
          "explain": "The teacher said germs cannot be seen with a naked eye."
        }
      ]
    },
    {
      "id": "rb4-green-diwali-safe-diwali",
      "title": "Green Diwali, Safe Diwali",
      "section": "Rainbow",
      "summary": "The 'Golu Gang' of five friends helps a boy hurt by a cracker and then celebrates Diwali by planting trees instead of bursting crackers.",
      "notes": [
        {
          "heading": "The Golu Gang",
          "points": [
            "Five friends of a village: Golu, Molu, Sonu, Garima and Reena. They never fight and always help the poor.",
            "People call them the 'Golu Gang'."
          ]
        },
        {
          "heading": "The accident",
          "points": [
            "On the way from school they hear a small boy crying. He has burnt his hand with a cracker.",
            "Golu washes the burnt hand under running water for ten minutes. They then take the boy to a doctor."
          ]
        },
        {
          "heading": "The plan",
          "points": [
            "Only three days are left for Diwali. Some friends want to burst crackers.",
            "Golu says crackers are dangerous and pollute the environment, so they will celebrate a Green Diwali."
          ]
        },
        {
          "heading": "Green Diwali",
          "points": [
            "On Diwali, the gang plants fifty trees with the help of the Panchayat and lights a diya under each tree.",
            "They share sweets with poor children, wear new clothes and light their houses. It is a safe Diwali."
          ]
        }
      ],
      "terms": [
        {
          "term": "Pollute",
          "meaning": "To make the air, water or land dirty."
        },
        {
          "term": "Environment",
          "meaning": "The surroundings in which we live."
        },
        {
          "term": "Cracker",
          "meaning": "A firework that bursts with a bang."
        },
        {
          "term": "Panchayat",
          "meaning": "The village council."
        },
        {
          "term": "Diya",
          "meaning": "A small oil lamp."
        }
      ],
      "qa": [
        {
          "q": "Why did Golu not want to burst crackers?",
          "a": "Crackers are dangerous and pollute the environment, as the burnt boy had shown."
        },
        {
          "q": "How did the Golu Gang celebrate Green Diwali?",
          "a": "They planted fifty trees, lit a diya under each, shared sweets with poor children and lit their houses."
        }
      ],
      "quiz": [
        {
          "q": "How many friends were in the Golu Gang?",
          "options": [
            "Three",
            "Five",
            "Four",
            "Six"
          ],
          "answer": 1,
          "explain": "The five friends were Golu, Molu, Sonu, Garima and Reena."
        },
        {
          "q": "What had the small boy burnt?",
          "options": [
            "His hand",
            "His foot",
            "His shirt",
            "His face"
          ],
          "answer": 0,
          "explain": "He burnt his hand with a cracker."
        },
        {
          "q": "For how long did Golu wash the burnt hand?",
          "options": [
            "One minute",
            "Five minutes",
            "One hour",
            "Ten minutes"
          ],
          "answer": 3,
          "explain": "Golu washed the hand under running water for ten minutes."
        },
        {
          "q": "How many trees did the gang plant?",
          "options": [
            "Ten",
            "Twenty",
            "Fifty",
            "One hundred"
          ],
          "answer": 2,
          "explain": "They planted fifty trees."
        },
        {
          "q": "What did they light under each tree?",
          "options": [
            "A cracker",
            "A torch",
            "A diya",
            "A candle stand"
          ],
          "answer": 2,
          "explain": "They lit one diya under each tree."
        }
      ]
    },
    {
      "id": "rb4-shri-guru-nanak-dev-ji",
      "title": "Shri Guru Nanak Dev Ji",
      "section": "Rainbow",
      "summary": "A short life sketch of Guru Nanak Dev Ji, the first Guru of the Sikhs, who helped the needy and taught people to work honestly, remember God and share.",
      "notes": [
        {
          "heading": "His family",
          "points": [
            "Guru Nanak Dev Ji was the first Guru of the Sikhs.",
            "His father was Mehta Kalu, his mother was Tripta Devi and his elder sister was Bebe Nanki."
          ]
        },
        {
          "heading": "Helping the needy",
          "points": [
            "He was always ready to help the needy.",
            "Once his father gave him twenty rupees to start a business. He used all of it to feed some hungry sadhus.",
            "He said that this was his true duty."
          ]
        },
        {
          "heading": "Work and teachings",
          "points": [
            "He was later sent to work, but he spent all his earnings on the poor and deprived.",
            "He taught that God is present everywhere.",
            "His main teachings: Naam Japo, Kirat Karo, Vand Chhako."
          ]
        },
        {
          "heading": "Journeys and prayer",
          "points": [
            "He spread the message of brotherhood through four long journeys (Udasis) in all four directions.",
            "He composed Japji Sahib, which is recited as a morning prayer."
          ]
        }
      ],
      "terms": [
        {
          "term": "Guru",
          "meaning": "A teacher and guide."
        },
        {
          "term": "Needy",
          "meaning": "Poor people who need help."
        },
        {
          "term": "Udasi",
          "meaning": "A long journey taken by Guru Nanak Dev Ji to spread his message."
        },
        {
          "term": "Charity",
          "meaning": "Giving help to the needy."
        },
        {
          "term": "Brotherhood",
          "meaning": "Feeling of love and unity among all people."
        }
      ],
      "qa": [
        {
          "q": "How did Guru Nanak Dev Ji use the twenty rupees given by his father?",
          "a": "He fed hungry sadhus with it and called it his true duty."
        },
        {
          "q": "What were his main teachings?",
          "a": "Naam Japo (remember God), Kirat Karo (earn honestly) and Vand Chhako (share with others)."
        }
      ],
      "quiz": [
        {
          "q": "Who was the first Guru of the Sikhs?",
          "options": [
            "Guru Angad Dev Ji",
            "Guru Nanak Dev Ji",
            "Guru Gobind Singh Ji",
            "Guru Arjan Dev Ji"
          ],
          "answer": 1,
          "explain": "Guru Nanak Dev Ji is the first Guru."
        },
        {
          "q": "What was his father's name?",
          "options": [
            "Mehta Kalu",
            "Mehta Gopal",
            "Tripta Singh",
            "Kalu Ram"
          ],
          "answer": 0,
          "explain": "His father was Mehta Kalu."
        },
        {
          "q": "What was his sister's name?",
          "options": [
            "Bebe Tripta",
            "Bebe Kaur",
            "Bebe Rani",
            "Bebe Nanki"
          ],
          "answer": 3,
          "explain": "His elder sister was Bebe Nanki."
        },
        {
          "q": "How many journeys (Udasis) did he take?",
          "options": [
            "Two",
            "Three",
            "Six",
            "Four"
          ],
          "answer": 3,
          "explain": "He took four long journeys."
        },
        {
          "q": "Which prayer did he compose?",
          "options": [
            "Sukhmani Sahib",
            "Rehras Sahib",
            "Japji Sahib",
            "Kirtan Sohila"
          ],
          "answer": 2,
          "explain": "He composed Japji Sahib."
        }
      ]
    },
    {
      "id": "rb4-adventures-with-books",
      "title": "Adventures with Books (Poem)",
      "section": "Rainbow",
      "summary": "A poem that compares books to ships, trains, zoos and gardens and shows that reading takes us on exciting adventures.",
      "notes": [
        {
          "heading": "Books are ships",
          "points": [
            "Books are ships that sail to lands of snow or jungle trees.",
            "The reader is the bold and free captain who decides where to go."
          ]
        },
        {
          "heading": "Books are trains",
          "points": [
            "Books are trains that cross hills and desert sands.",
            "The reader is the engineer who guides the train."
          ]
        },
        {
          "heading": "Books are zoos and gardens",
          "points": [
            "Books are zoos where birds and beasts have a home.",
            "The reader is the keeper who chooses what to show. Books are gardens full of fairies, elves, cowboys and people like us."
          ]
        },
        {
          "heading": "Message",
          "points": [
            "Reading is fun and takes us anywhere without leaving home.",
            "We can find just what we want inside a book."
          ]
        }
      ],
      "terms": [
        {
          "term": "Captain",
          "meaning": "The leader of a ship."
        },
        {
          "term": "Engineer",
          "meaning": "Here, the driver who guides a train."
        },
        {
          "term": "Desert",
          "meaning": "A dry land covered with sand."
        },
        {
          "term": "Elf",
          "meaning": "A tiny magical person in stories."
        },
        {
          "term": "Adventure",
          "meaning": "An exciting journey."
        }
      ],
      "qa": [
        {
          "q": "How are books like ships?",
          "a": "Books take us to far lands of snow or jungle, as ships sail across seas."
        },
        {
          "q": "What does the poem want us to do?",
          "a": "It wants us to read, because reading is fun."
        }
      ],
      "quiz": [
        {
          "q": "Books are ships that sail to",
          "options": [
            "only the market",
            "lands of snow or jungle trees",
            "only the school",
            "only the village"
          ],
          "answer": 1,
          "explain": "The poem says ships sail to lands of snow or jungle trees."
        },
        {
          "q": "Who is the captain?",
          "options": [
            "The reader",
            "The writer",
            "The teacher",
            "The librarian"
          ],
          "answer": 0,
          "explain": "The reader decides where to sail."
        },
        {
          "q": "What do books cross like trains?",
          "options": [
            "Hills and desert sands",
            "Rivers and seas",
            "Roads and bridges",
            "Fields and ponds"
          ],
          "answer": 0,
          "explain": "The poem says hills and desert sands."
        },
        {
          "q": "Who is the keeper of the zoo?",
          "options": [
            "The animal",
            "The doctor",
            "The farmer",
            "The reader"
          ],
          "answer": 3,
          "explain": "The reader chooses what to show."
        },
        {
          "q": "What fills the garden of books?",
          "options": [
            "Only flowers",
            "Only trees",
            "Fairies, elves and cowboys",
            "Only cars"
          ],
          "answer": 2,
          "explain": "The book garden has fairies, elves, cowboys and people like us."
        }
      ]
    },
  ]
});
