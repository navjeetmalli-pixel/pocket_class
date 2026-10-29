// Class 4 English: Grammar, Vocabulary, Writing Skills, Reading Skills and the lessons of Santoor.
// Format: see CONTENT_GUIDE.md. All examples and model answers are original.
StudyData.add(4, "english", {
  // What this content follows. match: "textbook" | "older-book" | "topic". Set reviewed to a date once a teacher has checked it.
  syllabus: {board: "CBSE", match: "textbook", books: ["Santoor"], note: "Grammar and writing, plus every lesson of Santoor (summarised in our own words).", reviewed: false},
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
    // ───────────────────────────── SANTOOR ─────────────────────────────
    {
      id: "together-we-can",
      title: "Together We Can",
      section: "Santoor",
      summary: "A cheerful poem about teamwork. When we stand together, help each other and share both wins and losses, our bond becomes strong and the goal comes closer. The lesson also practises collective nouns, place words and talking about the future with “will”.",
      notes: [
        { heading: "Idea of the poem", points: [
          "The poem says that a team that stands together stays strong and does not fall.",
          "Team members cheer for each other, and they share the result whether they win or lose.",
          "When every hand is joined, the goal comes near and the whole team feels happy.",
          "The poem is short and rhymes, so it is fun to recite aloud."
        ] },
        { heading: "Language work in the lesson", points: [
          "**Collective nouns** name a group: a bunch of keys, a swarm of bees, a herd of sheep, a pack of wolves, a grove of trees, a bouquet of flowers, a choir of boys.",
          "**Place words (prepositions)** such as behind, between, near and in front of tell where something is, like a bank near a school.",
          "**Future with ‘will’:** we say what is going to happen next, for example “The teacher will check the work.”"
        ] },
        { heading: "Speaking and doing", points: [
          "Two friends, Bokali and Darsana, talk about the different foods, festivals and languages of our country and how we still stand in unity.",
          "Children are asked to talk about their favourite food and festival with a partner, taking turns politely.",
          "In the activity, children fold paper, draw one side of a person and cut it out to make a row of people holding hands, a symbol of togetherness."
        ] }
      ],
      formulas: ["Theme: teamwork and togetherness","Collective nouns: a swarm of bees, a herd of sheep, a pack of wolves, a bunch of keys","Place words: behind, between, near, in front of","Future: will + action word"],
      terms: [
        { term: "Teamwork", meaning: "Working together with others to reach a common goal." },
        { term: "Bond", meaning: "A close link of love or friendship between people." },
        { term: "Unity", meaning: "Standing together as one even when we are different." },
        { term: "Collective noun", meaning: "A word that names a group of people, animals or things." }
      ],
      qa: [
        { q: "What happens when you join hands with your team?", a: "The goal comes near and the team spirit makes everyone happy and strong." },
        { q: "Why is helping each other important?", a: "When we help each other, the team stays strong and can solve any problem together." },
        { q: "Write the collective noun for bees, sheep and keys.", a: "A swarm of bees, a herd of sheep and a bunch of keys." }
      ],
      quiz: [
        { q: "What is the main message of the poem?", options: ["Teamwork makes us strong","Winning is everything","Play alone","Never help others"], answer: 0, explain: "The poem celebrates standing together and helping one another." },
        { q: "Which is the correct collective noun for bees?", options: ["a herd","a swarm","a pack","a grove"], answer: 1, explain: "Bees live and fly in a swarm." },
        { q: "“The bank is near the school.” Which word tells the place?", options: ["bank","is","the","near"], answer: 3, explain: "“Near” shows where the bank is." },
        { q: "Which sentence talks about the future?", options: ["The teacher checked the work.","The teacher is checking the work.","The teacher will check the work.","The teacher checks the work."], answer: 2, explain: "“Will” shows something that is going to happen." },
        { q: "What do the team members do whether they win or lose?", options: ["Fight","Share the result","Go home","Stop playing"], answer: 1, explain: "The poem says the team shares the result and stays close." }
      ]
    },
    {
      id: "the-tinkling-bells",
      title: "The Tinkling Bells",
      section: "Santoor",
      summary: "Chinna wants to buy a pair of tinkling bells for his pet kid, Tara, but loses his money. When he gets extra change by mistake, his mother helps him choose honesty, and he finally buys the bells.",
      notes: [
        { heading: "What happens", points: [
          "Chinna, a Grade 4 boy in a village, loves his five-month-old white kid, Tara.",
          "On the way home from school he sees shiny tinkling bells at Chacha’s shop. They cost ten rupees, but his money is missing.",
          "He goes home sad. His mother, Kamala, hugs him, comforts him and says she will give him the money, but he must be careful with money in future.",
          "At the market the fruit seller gives Chinna ten rupees extra by mistake. Chinna wants to keep it, but his mother reminds him how sad he felt when his money was lost.",
          "Chinna returns the money. The seller praises him, and his mother takes him to Chacha’s shop, where he buys the bells and ties them round Tara’s neck."
        ] },
        { heading: "Characters", points: [
          "**Chinna** is a bright, loving boy who learns to be honest.",
          "**Kamala (his mother)** is gentle and wise. She teaches without scolding harshly.",
          "**The fruit seller and Chacha** are shopkeepers who trust the children."
        ] },
        { heading: "Values and language", points: [
          "Honesty means not keeping what is not ours. We should treat other people’s things the way we want ours to be treated.",
          "A baby goat under six months is called a **kid**.",
          "**Comparing with adjectives:** add -er to compare two (Charu is taller than Chinna) and -est to compare many (Jasmine is the tallest).",
          "Opposites (antonyms): beautiful and ugly, reward and punishment, sell and buy."
        ] }
      ],
      formulas: ["Price of the bells: ten rupees","Extra money by mistake: ten rupees","Compare two: adjective + er + than","Compare many: the + adjective + est","Value: honesty"],
      terms: [
        { term: "Kid", meaning: "A young goat, under six months old." },
        { term: "Honest", meaning: "Truthful, and not taking what belongs to someone else." },
        { term: "Console", meaning: "To comfort someone who is sad." },
        { term: "Whisper", meaning: "To speak very softly." },
        { term: "Antonym", meaning: "A word with the opposite meaning." }
      ],
      qa: [
        { q: "Why was Chinna upset?", a: "He wanted to buy tinkling bells for his pet kid, but he found that his money was missing." },
        { q: "How did Kamala help Chinna feel better?", a: "She hugged and comforted him and promised to give him money for the bells." },
        { q: "What did the fruit seller do by mistake?", a: "He gave Chinna ten rupees extra as change." },
        { q: "How did Chinna manage to buy the bells in the end?", a: "He returned the extra money, and his mother took him to Chacha’s shop and paid for the bells." }
      ],
      quiz: [
        { q: "Who is Tara?", options: ["Chinna’s sister","Chinna’s pet kid","Chinna’s friend","Chacha’s dog"], answer: 1, explain: "Tara is a five-month-old kid, a baby goat." },
        { q: "How much did the tinkling bells cost?", options: ["Five rupees","Ten rupees","Twenty rupees","Forty-five rupees"], answer: 1, explain: "Chacha said ten rupees." },
        { q: "Why did Chinna go back to the fruit seller?", options: ["To buy pineapples","To return extra money","To ask for sweets","To sell the bells"], answer: 1, explain: "He returned the ten rupees given by mistake." },
        { q: "Which word means the opposite of “beautiful”?", options: ["Attractive","Lovely","Ugly","Bright"], answer: 2, explain: "Ugly is the opposite of beautiful." },
        { q: "Fill in: “Jay was the fast___ person in the race.”", options: ["er","est","ing","ed"], answer: 1, explain: "We use -est when comparing more than two." }
      ]
    },
    {
      id: "be-smart-be-safe",
      title: "Be Smart, Be Safe",
      section: "Santoor",
      summary: "A friendly letter from the Traffic Police of Bharat to children, giving six simple road safety rules. The lesson also teaches countable and uncountable nouns and how to write a thank-you letter.",
      notes: [
        { heading: "The six safety rules", points: [
          "**Rule 1:** Always use the zebra crossing. Look right, then left, then right again, and cross only when it is safe.",
          "**Rule 2:** Follow the traffic lights. Wait for the pedestrian signal to turn green before crossing.",
          "**Rule 3:** Walk on the footpath, which is meant for pedestrians. Never run across the road.",
          "**Rule 4:** Hold an adult’s hand while walking near the road, especially when crossing.",
          "**Rule 5:** Stick reflective stickers on your clothes when walking in the evening or dark, so drivers can see you.",
          "**Rule 6:** Be alert. Do not play or use headphones or mobile phones near traffic, because they distract you from traffic sounds."
        ] },
        { heading: "Grammar: countable and uncountable nouns", points: [
          "**Countable nouns** can be counted: buses, chairs, bananas.",
          "**Uncountable nouns** cannot be counted one by one and usually have no plural: water, rice, air, flour.",
          "We can count them with a container or measure: a bottle of milk, a bowl of rice, two drops of oil."
        ] },
        { heading: "Writing", points: [
          "Children write a thank-you letter to the Traffic Police, promising to follow the rules.",
          "A letter has a greeting, the message, and a closing with the writer’s name and grade."
        ] }
      ],
      formulas: ["Cross at: the zebra crossing","Look: right, left, right again","Walk on: the footpath","Wait for: the green pedestrian signal","Evening: wear or stick reflective stickers","Countable: buses, cars; uncountable: water, rice"],
      terms: [
        { term: "Pedestrian", meaning: "A person who travels on foot." },
        { term: "Footpath", meaning: "The path beside a road for people who walk." },
        { term: "Reflective", meaning: "Shining back light so that it can be seen clearly." },
        { term: "Distract", meaning: "To take someone’s attention away from what they should be doing." }
      ],
      qa: [
        { q: "What should you do before crossing a road?", a: "Go to the zebra crossing, look right, then left, then right again, and cross only when no vehicle is coming." },
        { q: "Why should you hold an adult’s hand while crossing?", a: "An adult can see the traffic better and keep you safe, because roads can be busy and dangerous." },
        { q: "Why should you avoid headphones near the road?", a: "They stop you from hearing traffic sounds such as horns, so you may not notice danger." }
      ],
      quiz: [
        { q: "Who wrote the letter in this lesson?", options: ["The teacher","The Traffic Police","The doctor","A shopkeeper"], answer: 1, explain: "The letter is from the Traffic Police of Bharat." },
        { q: "What is the black and white strip on the road called?", options: ["Footpath","Zebra crossing","Signal","Divider"], answer: 1, explain: "It is the zebra crossing, where pedestrians cross." },
        { q: "Why do we stick reflective stickers on clothes in the evening?", options: ["For fashion","So drivers can see us","To keep warm","To run faster"], answer: 1, explain: "They shine in light, helping drivers notice us." },
        { q: "Which noun is uncountable?", options: ["bus","chair","flour","banana"], answer: 2, explain: "Flour cannot be counted one by one." },
        { q: "Which is a safe habit?", options: ["Running across the road","Playing on the road","Using headphones near traffic","Walking on the footpath"], answer: 3, explain: "Footpaths are made for people who walk." }
      ]
    },
    {
      id: "one-thing-at-a-time",
      title: "One Thing at a Time",
      section: "Santoor",
      summary: "A poem with simple advice: work when it is time to work and play when it is time to play. Giving full attention to one thing makes us do it well and not waste our moments.",
      notes: [
        { heading: "Idea of the poem", points: [
          "The poet says we should work properly while we work and play fully while we play.",
          "Whatever we do, we should do it with all our strength, because things done by halves are never done right.",
          "Doing one thing at a time, and doing it well, is a very good rule.",
          "We should not waste our short moments."
        ] },
        { heading: "Language work", points: [
          "**Rhyming words** from the poem include play and way, might and right, well and tell, and away.",
          "In **mixed-up sentences**, the pattern is “who is/are doing what”: Two girls are going to school. A woman is typing on a computer.",
          "**Silent ‘l’:** in words such as calm, palm, chalk, talk and calf, the letter l is written but not heard.",
          "**a.m. and p.m.:** a.m. is used for time before noon and p.m. for time after noon."
        ] },
        { heading: "Writing and doing", points: [
          "Children write their daily routine and tick whether each activity is work or play, then turn it into a paragraph.",
          "They solve riddles. The answers are teeth for the thirty white horses and a candle for the tall lady in a white frock.",
          "Focus can be improved with simple exercises such as deep breathing and the tree pose."
        ] }
      ],
      formulas: ["Message: work while you work, play while you play","Rhymes: play-way, might-right, well-tell","Silent l: calm, palm, chalk, talk","Time: a.m. before noon, p.m. after noon","Riddle answers: teeth, candle"],
      terms: [
        { term: "Might", meaning: "Strength or power." },
        { term: "Useful", meaning: "Helpful or beneficial." },
        { term: "Moments", meaning: "Very short periods of time." },
        { term: "Routine", meaning: "The things we do regularly, in the same order." },
        { term: "Focus", meaning: "Giving all your attention to one thing." }
      ],
      qa: [
        { q: "Why is it important to focus on one thing at a time?", a: "When we focus, we finish faster, make fewer mistakes and learn better." },
        { q: "Write two pairs of rhyming words from the poem.", a: "Play and way; might and right." },
        { q: "How do you feel after finishing a task well?", a: "I feel proud and happy, and I want to do more." }
      ],
      quiz: [
        { q: "What does the poem say we should do while we work?", options: ["Play","Work","Sleep","Sing"], answer: 1, explain: "It says to work while you work." },
        { q: "Which word means “strength or power”?", options: ["might","moments","useful","halves"], answer: 0, explain: "Might means strength." },
        { q: "In which word is the letter l silent?", options: ["leaf","lamp","chalk","lion"], answer: 2, explain: "In chalk, we do not say the l." },
        { q: "Which time is in the afternoon?", options: ["7 a.m.","10 a.m.","11 a.m.","3 p.m."], answer: 3, explain: "p.m. is used for times after noon." },
        { q: "Which pair rhymes?", options: ["play – way","work – play","well – done","might – day"], answer: 0, explain: "Play and way end with the same sound." }
      ]
    },
    {
      id: "the-old-stag",
      title: "The Old Stag",
      section: "Santoor",
      summary: "A story adapted from the Panchatantra. A kind old stag lives on a hillock of tender grass. When he falls ill, his visiting friends eat all the grass, and he becomes weaker until they realise their greed and set it right.",
      notes: [
        { heading: "What happens", points: [
          "An old stag is known for his kindness. He greets all the animals and birds every day, and everyone loves him.",
          "He prefers to stay on a small hillock covered with soft, tender green grass.",
          "One day the stag falls ill and is too weak to go down to meet his friends, so they come to see him.",
          "The visitors taste the juicy grass and eat it. Soon very little grass is left, and the stag grows weaker.",
          "The animals feel ashamed of their greed. They find food elsewhere and even bring fresh leaves for the stag.",
          "It rains well that week, the grass grows back, and the old stag recovers."
        ] },
        { heading: "Lesson", points: [
          "Nature has enough for everybody, but we must use its resources wisely.",
          "We should not think only of ourselves. Sharing and caring keep friendships and nature healthy."
        ] },
        { heading: "Language work", points: [
          "**Describing words** such as lush forest, tender grass and healthy food make writing more interesting.",
          "**Adverbs of manner** tell how an action is done: warmly greeted, slowly recovered, quickly ate."
        ] }
      ],
      formulas: ["Source: adapted from the Panchatantra","Stag lives on: a hillock with tender grass","Problem: friends ate the grass","Lesson: use nature’s resources wisely","Adverbs of manner: warmly, slowly, quickly, carefully"],
      terms: [
        { term: "Stag", meaning: "A male deer." },
        { term: "Hillock", meaning: "A small hill." },
        { term: "Tender", meaning: "Soft, young and delicate." },
        { term: "Lush", meaning: "Green, thick and full of growth." },
        { term: "Recovery", meaning: "Getting well again after an illness." }
      ],
      qa: [
        { q: "Why was the old stag popular?", a: "He was kind and warmly greeted all the animals and birds every day." },
        { q: "Why did the old stag not go down the hillock to meet his friends?", a: "He had fallen ill and was too weak to walk down." },
        { q: "Why did the green cover of the hillock vanish?", a: "Every animal that visited the stag ate the tender grass, so very little was left." },
        { q: "What did the animals do when they realised their mistake?", a: "They found food elsewhere in the forest, left the hillock alone and brought fresh leaves for the stag." }
      ],
      quiz: [
        { q: "Where did the old stag like to stay?", options: ["In a cave","On a hillock","By the river","In a tree"], answer: 1, explain: "He stayed on a hillock with tender grass." },
        { q: "What made the stag grow weaker?", options: ["Too much rain","Less and less grass to eat","Cold weather","A long walk"], answer: 1, explain: "The visitors ate the grass and little was left for him." },
        { q: "What is a “stag”?", options: ["A male deer","A rabbit","A bird","A tiger"], answer: 0, explain: "A stag is a male deer." },
        { q: "Which word is an adverb of manner?", options: ["forest","warmly","grass","hillock"], answer: 1, explain: "“Warmly” tells how the stag greeted his friends." },
        { q: "What is the lesson of the story?", options: ["Eat quickly","Use nature’s resources wisely","Never visit friends","Stay on hills"], answer: 1, explain: "Nature has enough for everyone if we use it wisely." }
      ]
    },
    {
      id: "braille",
      title: "Braille",
      section: "Santoor",
      summary: "The true story of Louis Braille, a French boy who lost his sight as a child and later simplified a system of raised dots so that blind people could read with their fingers.",
      notes: [
        { heading: "Life of Louis Braille", points: [
          "Louis was a little boy in France whose father was a blacksmith. At the age of three he was playing with his father’s tools when a sharp tool hurt his eye.",
          "He became blind in that eye, then the other eye was affected too, and he became totally blind.",
          "In 1819, when he was ten, he joined the Royal Institute for Young Blind Persons in Paris.",
          "An army man, Charles Barbier, had invented ‘Night Writing’, raised dots and dashes soldiers could feel in the dark. It was too difficult and did not succeed.",
          "Louis, now a teenager, simplified it and gave the world the Braille alphabet."
        ] },
        { heading: "About Braille", points: [
          "Braille is a way of reading by touch. There is a Braille symbol for each of the 26 letters of the English alphabet.",
          "Braille needs more space because the dots cannot be written too close together, so a Braille book is thicker than an ordinary book.",
          "People who can see can learn Braille too."
        ] },
        { heading: "Grammar: past continuous", points: [
          "For one person or thing we say **was + action word + ing**: The student was writing.",
          "For many we say **were + action word + ing**: The students were writing.",
          "Words like ‘yesterday’ and ‘long ago’ show the past."
        ] }
      ],
      formulas: ["Country: France","Accident at age: three","Joined the institute: 1819, at ten years","Braille: raised dots read by touch","Past continuous: was/were + verb + ing"],
      terms: [
        { term: "Blacksmith", meaning: "A person who makes things from hot iron." },
        { term: "Blind", meaning: "Not able to see." },
        { term: "Invented", meaning: "Made or thought of something for the first time." },
        { term: "Braille", meaning: "A system of raised dots that blind people read by touch." }
      ],
      qa: [
        { q: "Describe the Braille alphabet.", a: "It is made of raised dots that stand for the letters. Blind people read it by touching the dots." },
        { q: "Why was ‘Night Writing’ not a success?", a: "It used raised dots and dashes and was too difficult to read." },
        { q: "What did Louis Braille do to make reading easier for the blind?", a: "He simplified Night Writing and made the Braille alphabet." }
      ],
      quiz: [
        { q: "In which country did Louis Braille live?", options: ["India","France","England","China"], answer: 1, explain: "Louis was born in France." },
        { q: "What was Louis’s father?", options: ["A teacher","A soldier","A blacksmith","A farmer"], answer: 2, explain: "His father was a blacksmith." },
        { q: "How is Braille read?", options: ["By hearing","By touch","By smelling","By drawing"], answer: 1, explain: "Fingers feel the raised dots." },
        { q: "Why is a Braille book thicker than a printed book?", options: ["It has more pictures","Letters need more space","The paper is wet","It has colour"], answer: 1, explain: "Braille dots cannot be written too close together." },
        { q: "Choose the correct sentence.", options: ["The dogs was barking.","The dogs were barking.","The dogs is barking.","The dogs am barking."], answer: 1, explain: "For more than one we use “were”." }
      ]
    },
    {
      id: "fit-body-fit-mind-fit-nation",
      title: "Fit Body, Fit Mind, Fit Nation",
      section: "Santoor",
      summary: "A rhyming poem that introduces children who love sports and music. Each child has a describing word that begins with the same letter as their name. The poem says that playing is a joy for every child.",
      notes: [
        { heading: "Children in the poem", points: [
          "**Anant** is active and plays hockey even on a rocky ground.",
          "**Geeta** is graceful and learns from her mistakes every day while skating.",
          "**Lhamo** proudly plays the guitar while his friend plays the sitar.",
          "**Shabana** is swift and celebrates after winning a cycle race.",
          "**Meena** is musical and sings in rhythm.",
          "The poem ends by saying that cheerful children everywhere enjoy playing."
        ] },
        { heading: "Why this matters", points: [
          "Games, music and dance keep both our body and mind healthy.",
          "A happy, active child grows with confidence.",
          "Balancing studies and play helps us relax."
        ] },
        { heading: "Language work", points: [
          "An **adjective** is a word that tells more about a noun: blue sky, healthy vegetables.",
          "**Double letters** appear in words like puppy, carrot, rabbit and village.",
          "**Rhyming words** in the poem: hockey–rocky, skates–mistakes, guitar–sitar, race–pace."
        ] }
      ],
      formulas: ["Anant: hockey","Geeta: skating","Lhamo: guitar","Shabana: cycle race","Meena: singing","Adjective: tells more about a noun"],
      terms: [
        { term: "Pace", meaning: "The speed at which someone moves." },
        { term: "Swift", meaning: "Very fast." },
        { term: "Rhythm", meaning: "A regular beat in music or movement." },
        { term: "Cheerful", meaning: "Happy and full of joy." },
        { term: "Adjective", meaning: "A word that describes a noun." }
      ],
      qa: [
        { q: "Which game does Anant play?", a: "Anant plays hockey." },
        { q: "Which musical instruments are mentioned in the poem?", a: "The guitar and the sitar." },
        { q: "Who learns every day from the mistakes made while skating?", a: "Geeta." }
      ],
      quiz: [
        { q: "Which game does Anant play?", options: ["Cricket","Hockey","Football","Kabaddi"], answer: 1, explain: "Anant plays hockey on a rocky ground." },
        { q: "Who sings in rhythm?", options: ["Meena","Geeta","Shabana","Anant"], answer: 0, explain: "Musical Meena sings in rhythm." },
        { q: "Which word rhymes with “skates”?", options: ["hockey","mistakes","guitar","pace"], answer: 1, explain: "Skates and mistakes end with the same sound." },
        { q: "Which word is an adjective in “blue sky”?", options: ["blue","sky","is","the"], answer: 0, explain: "Blue describes the sky." },
        { q: "Swift means…", options: ["slow","loud","very fast","sleepy"], answer: 2, explain: "A swift girl runs or rides very fast." }
      ]
    },
    {
      id: "the-lagori-champions",
      title: "The Lagori Champions",
      section: "Santoor",
      summary: "A two-part play about a village Lagori match between the Sundarpur Tigers and the Green Warriors. A visiting cousin, Prakash, learns the game and helps his new team win.",
      notes: [
        { heading: "Part I: Learning the game", points: [
          "Ravi and his cousin Prakash go to a park, where Ravi’s friends are talking about tomorrow’s Lagori match.",
          "Prakash has not heard of Lagori, but he knows a similar game called Satoliya in Rajasthan. It is the same game with a different name.",
          "Seven flat stones are stacked in the centre of a marked field. One team knocks them down with a ball, and the other team tries to rebuild the stack while avoiding being hit by the ball.",
          "Deepa is the captain of the Sundarpur Tigers, who play against the Green Warriors from a nearby village. Prakash is chosen for the team because he is a good runner."
        ] },
        { heading: "Part II: The match", points: [
          "The referee blows the whistle, and Deepa takes the first shot. The stones scatter.",
          "The Tigers rebuild the stack, dodging the ball. Nidhi, Ravi and Deepa place stones.",
          "Prakash puts the seventh stone on top just before the final whistle, and the Sundarpur Tigers win.",
          "Players from both teams shake hands, and the referee lifts the hands of both captains while the villagers cheer."
        ] },
        { heading: "Message", points: [
          "Traditional games bring people together and teach teamwork and fair play.",
          "Deepa says the game was even more fun than video games."
        ] }
      ],
      formulas: ["Lagori stones: seven flat stones","Other name of Lagori: Satoliya in Rajasthan","Team of Deepa: Sundarpur Tigers","Opponents: Green Warriors","Winner: Sundarpur Tigers","Seventh stone placed by: Prakash"],
      terms: [
        { term: "Opponent", meaning: "The person or team you play against." },
        { term: "Referee", meaning: "The person who makes sure the rules of a game are followed." },
        { term: "Stacked", meaning: "Placed one on top of another." },
        { term: "Dodge", meaning: "To move quickly to avoid something." },
        { term: "Cousin", meaning: "A child of your aunt or uncle." }
      ],
      qa: [
        { q: "What is Lagori and how is it played?", a: "Lagori is a game of seven flat stones stacked on top of each other. One team knocks them down with a ball and the other team tries to rebuild the stack without being hit." },
        { q: "What is the name of Deepa’s team and who do they play against?", a: "Her team is the Sundarpur Tigers. They play against the Green Warriors." },
        { q: "Why was Prakash chosen for the team?", a: "He is a good runner and runs quickly." },
        { q: "What did the villagers do after the match?", a: "They clapped and cheered both teams and celebrated together." }
      ],
      quiz: [
        { q: "How many stones are used in Lagori?", options: ["Five","Six","Seven","Nine"], answer: 2, explain: "Lagori is a game of seven stones." },
        { q: "What is Lagori called in Rajasthan?", options: ["Hekko","Satoliya","Gilli danda","Kho-kho"], answer: 1, explain: "Prakash calls the game Satoliya." },
        { q: "Who placed the seventh stone?", options: ["Deepa","Imran","Prakash","Ravi"], answer: 2, explain: "Prakash set the seventh stone on top." },
        { q: "Who won the match?", options: ["Green Warriors","Sundarpur Tigers","It was a draw","No one"], answer: 1, explain: "The referee announced the Tigers had won." },
        { q: "Which of these is a question?", options: ["My name is Sonam.","Where do you stay?","The flower is pretty.","Nidhi came running."], answer: 1, explain: "It asks something, so it ends with a question mark." }
      ]
    },
    {
      id: "hekko",
      title: "Hekko",
      section: "Santoor",
      summary: "A reading passage about Hekko, a traditional team game from Nagaland. Its name means ‘challenging the tiger’, and it is played between the Aami (men) and Aakho (tigers) teams.",
      notes: [
        { heading: "Origin and meaning", points: [
          "‘Hek’ means to challenge and ‘ko’ means tiger, so Hekko means challenging the tiger.",
          "A folk story from Nagaland says humans and animals once lived together and argued over who was superior. The humans challenged Aakho, the tiger, and the contest became known as Hekko.",
          "The game is played in the Mokokchung district of Nagaland and is used to find the strongest people in the village."
        ] },
        { heading: "How it is played", points: [
          "Each team has 11 players. A toss decides which team is Aami and which is Aakho.",
          "The Aami team stays inside a circle as a human chain. The Aakho team stays outside.",
          "Two Aakho players enter and try to push Aami players out. An Aami player who is pushed out cannot come back.",
          "The Aami players try to catch Aakho players by surrounding them. A caught player is set free only when he says “Joko”, meaning surrender.",
          "A team gets points whenever it gets an opponent out."
        ] },
        { heading: "End of the game", points: [
          "The game ends when all Aakho players are caught, when all Aami players are pushed out, or when time runs out.",
          "The team with the most points wins.",
          "The fastest Aami player is called Khozuba and the strongest Aakho player is called Khotiba."
        ] },
        { heading: "Language work", points: [
          "**Words that sound alike:** their/there, two/too, threw/through, caught/cot, right/write.",
          "**Simple past:** add -ed to many verbs (visited, jumped), but some are irregular (came, drank, saw)."
        ] }
      ],
      formulas: ["Hekko means: challenging the tiger","State: Nagaland (Mokokchung district)","Teams: Aami and Aakho","Players: 11 in each team","Surrender word: Joko","Titles: Khozuba (fastest Aami), Khotiba (strongest Aakho)"],
      terms: [
        { term: "Declared", meaning: "Said something firmly and publicly." },
        { term: "Superiority", meaning: "Being better or greater than others." },
        { term: "Disagreement", meaning: "When people do not agree." },
        { term: "Surrender", meaning: "To give up." },
        { term: "Irregular verb", meaning: "A verb whose past form does not end in -ed." }
      ],
      qa: [
        { q: "What does the word ‘Hekko’ mean?", a: "It means challenging the tiger." },
        { q: "What are the two teams called?", a: "The two teams are Aami (the man) and Aakho (the tiger)." },
        { q: "How many players are there in each team?", a: "There are 11 players in each team." },
        { q: "Why must a caught Aakho player say ‘Joko’?", a: "‘Joko’ means surrender, so the caught player says it to show he gives up and is then released." }
      ],
      quiz: [
        { q: "Hekko comes from which state?", options: ["Punjab","Nagaland","Kerala","Goa"], answer: 1, explain: "Hekko is a game of Nagaland." },
        { q: "How many players are in each team?", options: ["7","9","11","15"], answer: 2, explain: "Each team has 11 players." },
        { q: "What does ‘Joko’ mean?", options: ["Win","Surrender","Run","Start"], answer: 1, explain: "A caught player says Joko to surrender." },
        { q: "Which pair of words is correctly used? “___ is a park nearby.”", options: ["Their","There","Thair","Ther"], answer: 1, explain: "“There” shows a place." },
        { q: "Which is an irregular verb in the past?", options: ["jumped","visited","came","pointed"], answer: 2, explain: "“Came” does not end in -ed." }
      ]
    },
    {
      id: "the-swing",
      title: "The Swing",
      section: "Santoor",
      summary: "A poem by Robert Louis Stevenson in which a child describes the joy of flying up on a swing and seeing the countryside below. The lesson also looks at words that can be both nouns and verbs.",
      notes: [
        { heading: "Idea of the poem", points: [
          "The child says that going up on a swing, high in the blue air, is the most pleasant thing a child can do.",
          "From up high the child can see over the wall: rivers, trees, cattle and the countryside.",
          "Going down, the child looks at the green garden and the brown roof, and then flies up again.",
          "The poem is full of movement. The words go up and down just like the swing."
        ] },
        { heading: "Language work", points: [
          "Some words are both **verbs and nouns**: swing, dance, play, answer, fly, waves.",
          "A **preposition** shows place, such as on, beside, between, above, in front of, behind and under.",
          "Sentences can be made longer by adding more details: Jeevan waited. Jeevan waited for the bus. Jeevan waited for the bus all morning."
        ] },
        { heading: "Speaking and writing", points: [
          "For the sound W, round your lips as if making an ‘O’ shape. For V, put your upper teeth on your lower lip.",
          "Rhymes in the poem: swing and thing, blue and do.",
          "Children write about what they like to do in free time and draw a magical swing."
        ] }
      ],
      formulas: ["Poet: Robert Louis Stevenson","Feeling: joy","Seen from the swing: rivers, trees, cattle, countryside","Words that are both noun and verb: swing, play, fly","Rhymes: swing–thing"],
      terms: [
        { term: "Pleasantest", meaning: "Most enjoyable." },
        { term: "Cattle", meaning: "Cows, bulls and buffaloes kept on a farm." },
        { term: "Countryside", meaning: "Land outside towns with fields, farms and villages." },
        { term: "Preposition", meaning: "A word that shows place, time or direction." }
      ],
      qa: [
        { q: "What does the poet see when the swing goes over the wall?", a: "The poet sees rivers, trees and cattle over the countryside." },
        { q: "Does the poet enjoy swings? Which line shows it?", a: "Yes. The poet calls it the pleasantest thing a child can do." },
        { q: "Why do you think the poet says the air is blue?", a: "When we look up in the open air we see the blue sky." }
      ],
      quiz: [
        { q: "Who wrote “The Swing”?", options: ["R. L. Stevenson","Ruskin Bond","Tagore","Sudha Murty"], answer: 0, explain: "The poem is by Robert Louis Stevenson." },
        { q: "What does the child see from the swing?", options: ["Only walls","Rivers, trees and cattle","Aeroplanes","The sea"], answer: 1, explain: "The child sees rivers, trees and cattle." },
        { q: "Which word rhymes with “swing”?", options: ["thing","wall","blue","roof"], answer: 0, explain: "Swing and thing sound alike." },
        { q: "In “I swing on a swing”, the first ‘swing’ is a…", options: ["noun","adjective","verb","preposition"], answer: 2, explain: "The first one is an action." },
        { q: "“A butterfly is flying ___ the flower.” Which word fits?", options: ["above","between","under","behind"], answer: 0, explain: "A flying butterfly can be above the flower." }
      ]
    },
    {
      id: "a-journey-to-the-magical-mountains",
      title: "A Journey to the Magical Mountains",
      section: "Santoor",
      summary: "Minam, a girl from a small Himalayan village, goes on a walk with her grandfather, who was once a Sherpa. They see rivers, yaks, snow and the tallest mountain, and Minam promises to protect the mountains.",
      notes: [
        { heading: "What happens", points: [
          "Minam loves hearing mountain stories from her grandfather, a former Sherpa, and the two often walk together.",
          "One morning he takes her on a special journey. She packs rotis with achaar, two water bottles and apples.",
          "They have lunch beside a clear river, where Minam dips her feet in the water.",
          "They see yaks, which give milk and wool and carry loads, then reach snow and make a snowman.",
          "At the top of a hill, grandfather shows her Mount Everest, the tallest mountain in the world.",
          "On the way back they hear a santoor being played and see mountain goats leaping from rock to rock."
        ] },
        { heading: "Message", points: [
          "Mountains teach us strength, beauty and the wonders of nature.",
          "We should respect and protect nature. Minam promises to look after the mountains."
        ] },
        { heading: "Language work", points: [
          "Body-part words are used for objects: legs of a table, hands of a clock, foot of a mountain, neck of a bottle.",
          "**Conjunctions** join words or sentences: and (adds), or (choice), but (contrast), because (reason).",
          "Mountain words: summit, valley, slope, plateau, plain, mountain range."
        ] }
      ],
      formulas: ["Girl: Minam","Grandfather was once a: Sherpa","Packed: rotis with achaar, water, apples","Animals seen: yaks, mountain goats","Tallest mountain: Mount Everest","Conjunctions: and, or, but, because"],
      terms: [
        { term: "Sherpa", meaning: "A mountain guide and helper from the Himalayan region." },
        { term: "Himalayas", meaning: "The tallest mountain range in the world." },
        { term: "Yak", meaning: "A large strong animal of the mountains used for milk, wool and carrying loads." },
        { term: "Summit", meaning: "The top of a mountain." },
        { term: "Conjunction", meaning: "A word that joins words or sentences." }
      ],
      qa: [
        { q: "Who was Minam and what did she enjoy doing with her grandfather?", a: "Minam was a young girl in a Himalayan village. She enjoyed listening to mountain stories and going on long walks with her grandfather." },
        { q: "What did Minam pack for the journey?", a: "She packed rotis with achaar, two water bottles and apples." },
        { q: "Where did they have lunch and what did they do there?", a: "They ate beside a clear river. They watched fish, and Minam dipped her feet in the water." },
        { q: "What did Minam promise at the end?", a: "She promised to take care of the mountains and share their magic with others." }
      ],
      quiz: [
        { q: "What was Minam’s grandfather once?", options: ["A farmer","A Sherpa","A teacher","A doctor"], answer: 1, explain: "He had worked as a Sherpa." },
        { q: "Which fruit did Minam pack?", options: ["Bananas","Mangoes","Apples","Grapes"], answer: 2, explain: "Apples were her favourite fruit." },
        { q: "What is the tallest mountain in the world?", options: ["Mount Everest","K2","Nanda Devi","Mount Abu"], answer: 0, explain: "Grandfather pointed to Mount Everest." },
        { q: "Which conjunction fits? “I stayed inside ___ it was raining.”", options: ["or","and","because","but"], answer: 2, explain: "“Because” gives the reason." },
        { q: "Which animals help mountain people with milk, wool and loads?", options: ["Horses","Yaks","Camels","Elephants"], answer: 1, explain: "Yaks give milk and wool and carry loads." }
      ]
    },
    {
      id: "maheshwar",
      title: "Maheshwar",
      section: "Santoor",
      summary: "Two children, Aarav and Ananya, learn from their aunt about the grand Maheshwar Fort in Madhya Pradesh, built by the great Queen Ahilya Bai Holkar on the banks of the Narmada, and about the famous Maheshwari sarees.",
      notes: [
        { heading: "The fort and the queen", points: [
          "Maheshwar is in Madhya Pradesh, about 95 kilometres from Indore, on the banks of the Narmada River.",
          "Queen Ahilya Bai of the Holkar family built the fort on a hill. It is also called Ahilya Fort.",
          "She ruled with kindness and wisdom, and built temples, schools and wells for her people.",
          "The fort is famous for its overhanging balconies, grand staircases and special red stones brought from Gujarat and Rajasthan.",
          "A 13-feet tall statue of the queen stands in front of the palace like a guardian."
        ] },
        { heading: "Maheshwari sarees", points: [
          "The people of Maheshwar weave famous Maheshwari sarees.",
          "They were first made of pure silk, and later cotton yarn was added. Today they are a blend of cotton and silk.",
          "They are known for their reversible borders and for colours such as peacock blue, yellow and green."
        ] },
        { heading: "Language work", points: [
          "**Synonyms** are words with similar meaning, such as happy, joyful and cheerful.",
          "**Silent g:** in words such as sign, high, light and night the letter g is not pronounced the usual way.",
          "**Articles:** a and an are used for any one thing; the is used for something specific."
        ] }
      ],
      formulas: ["Place: Maheshwar, Madhya Pradesh","River: Narmada","Distance from Indore: 95 km","Queen: Ahilya Bai of the Holkar family","Statue height: 13 feet","Stone brought from: Gujarat and Rajasthan","Famous craft: Maheshwari sarees"],
      terms: [
        { term: "Fort", meaning: "A strong building built to protect a place." },
        { term: "Majestic", meaning: "Grand and royal." },
        { term: "Balcony", meaning: "A platform sticking out from a wall of a building." },
        { term: "Unique", meaning: "The only one of its kind." },
        { term: "Synonym", meaning: "A word with a similar meaning to another word." }
      ],
      qa: [
        { q: "Who was Ahilya Bai?", a: "She was a queen of the Holkar family who ruled Maheshwar with kindness and wisdom and built the fort." },
        { q: "Where is Maheshwar Fort and what makes it special?", a: "It is in Madhya Pradesh on the banks of the Narmada, on a hill from where the town and river can be seen." },
        { q: "What was the fort made of?", a: "It was made of special red stones brought from Gujarat and Rajasthan." },
        { q: "What does the statue of Queen Ahilya Bai stand for?", a: "It stands like a guardian watching over her land and reminds people of her care for them." }
      ],
      quiz: [
        { q: "On which river is Maheshwar Fort?", options: ["Ganga","Yamuna","Narmada","Godavari"], answer: 2, explain: "The fort is on the banks of the Narmada." },
        { q: "Who built the fort?", options: ["Queen Ahilya Bai","Akbar","Shivaji","Queen Victoria"], answer: 0, explain: "Ahilya Bai of the Holkar family built it." },
        { q: "Which famous cloth is made in Maheshwar?", options: ["Bandhani","Maheshwari sarees","Kanjeevaram","Pashmina"], answer: 1, explain: "Maheshwari sarees are woven there." },
        { q: "Which is the odd one out: sad, unhappy, tearful, thrilled?", options: ["sad","unhappy","tearful","thrilled"], answer: 3, explain: "Thrilled means very happy; the rest mean unhappy." },
        { q: "Which article fits? “I saw ___ elephant.”", options: ["a","an","the","no article"], answer: 1, explain: "Elephant starts with a vowel sound, so we use “an”." }
      ]
    }
  ]
});
