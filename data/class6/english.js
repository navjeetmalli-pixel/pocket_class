// Class 6 English: Grammar, Writing Skills and Reading Skills.
// Format: see CONTENT_GUIDE.md. All examples and model answers are original.
// The "Poorvi" literature section is intentionally left out (chapter list not confidently known).
StudyData.add(6, "english", {
  // What this content follows. match: "textbook" | "older-book" | "topic". Set reviewed to a date once a teacher has checked it.
  syllabus: {board: "CBSE", match: "topic", books: [], note: "Grammar and writing skills, arranged by topic. Textbook lessons are not included.", reviewed: false},
  chapters: [
    // ───────────────────────────── GRAMMAR ─────────────────────────────
    {
      id: "nouns",
      title: "Nouns",
      section: "Grammar",
      summary: "Nouns are naming words for people, places, animals, things and ideas. This chapter covers the kinds of nouns, how to make plurals, countable and uncountable nouns, and possessive nouns.",
      notes: [
        {
          heading: "What is a noun?",
          points: [
            "A **noun** is a word that names a person, place, animal, thing or idea.",
            "Person: Meera, teacher, doctor. Place: Jaipur, market, river. Animal: tiger, parrot. Thing: book, mango, kite.",
            "Feelings and ideas are nouns too: happiness, honesty, freedom.",
            "A noun can be the **subject** of a sentence: “The **peacock** danced in the rain.”"
          ]
        },
        {
          heading: "Kinds of nouns",
          points: [
            "**Common noun**: the general name of a person, place or thing, such as girl, city, mountain.",
            "**Proper noun**: the special name of one particular person, place or thing. It always begins with a capital letter: Gautam, Mumbai, the Himalayas, Diwali.",
            "**Collective noun**: the name of a group taken as one whole: a **team** of players, a **flock** of sheep, a **bunch** of keys.",
            "**Material noun**: the name of the material something is made of: gold, wood, cotton, milk, iron.",
            "**Abstract noun**: the name of a quality, feeling or idea that we cannot see or touch: honesty, bravery, joy, childhood, friendship."
          ]
        },
        {
          heading: "Making plurals",
          points: [
            "Most nouns just add **-s**: book → books, pen → pens.",
            "Nouns ending in **s, x, z, ch, sh** add **-es**: bus → buses, box → boxes, watch → watches, dish → dishes. Many nouns ending in -o add -es too: potato → potatoes (but photo → photos, piano → pianos).",
            "Consonant + **y**: change y to **ies**: baby → babies, story → stories. Vowel + y: just add s: monkey → monkeys, toy → toys.",
            "Nouns ending in **f** or **fe** usually change to **ves**: leaf → leaves, knife → knives, wolf → wolves (but roof → roofs).",
            "**Irregular plurals**: man → men, woman → women, child → children, foot → feet, tooth → teeth, mouse → mice. Some nouns stay the same: sheep, deer."
          ]
        },
        {
          heading: "Countable and uncountable nouns",
          points: [
            "**Countable nouns** can be counted one by one: one mango, two mangoes. They have a singular and a plural form.",
            "**Uncountable nouns** cannot be counted: milk, water, rice, sugar, advice, information, furniture. They have no plural, so we do not say “advices” or “furnitures”.",
            "Use **many / few / a few** with countable nouns (many books, a few pens) and **much / little / a little** with uncountable nouns (much water, a little sugar).",
            "We measure uncountable nouns with units: a glass of milk, a kilo of rice, a piece of advice."
          ]
        },
        {
          heading: "Showing ownership",
          points: [
            "To show that something belongs to someone, add **’s** to a singular noun: Rohan’s bat, the girl’s bag.",
            "If a plural noun already ends in **s**, add only an apostrophe: the boys’ hostel, the teachers’ room.",
            "If a plural noun does not end in s, add ’s: children’s park, women’s hockey team.",
            "Never use an apostrophe just to make a plural: ✗ “two mango’s” ✓ “two mangoes”."
          ]
        }
      ],
      formulas: [
        "Most nouns: add -s (book → books)",
        "Ends in s, x, z, ch, sh: add -es (box → boxes)",
        "Consonant + y → ies (city → cities); vowel + y → ys (toy → toys)",
        "f / fe → ves (leaf → leaves, knife → knives)",
        "Possessive: singular noun + ’s (girl’s); plural ending in s + ’ (girls’)"
      ],
      terms: [
        { term: "Noun", meaning: "A word that names a person, place, animal, thing or idea." },
        { term: "Proper noun", meaning: "The special name of one person, place or thing. It begins with a capital letter, e.g. Delhi, Ananya." },
        { term: "Collective noun", meaning: "A noun that names a group as one whole, e.g. a **herd** of cattle, a **crew** of sailors." },
        { term: "Material noun", meaning: "A noun that names the substance something is made of, e.g. silver, glass, wool." },
        { term: "Abstract noun", meaning: "A noun that names a quality, feeling or idea that cannot be seen or touched, e.g. kindness, anger." },
        { term: "Countable noun", meaning: "A noun that can be counted one by one and has a plural form, e.g. one pencil, two pencils." }
      ],
      examples: [
        {
          q: "Find the nouns in this sentence and say what kind each one is: “Meera’s family showed great courage when they crossed the Yamuna in a wooden boat.”",
          steps: [
            "Meera: the name of one particular girl, so a **proper noun**.",
            "family: a group of people taken as one, so a **collective noun**.",
            "courage: a quality we cannot touch, so an **abstract noun**.",
            "Yamuna: the name of one particular river, so a **proper noun**.",
            "boat: the general name of a thing, so a **common noun**. (“wooden” describes the boat; it is not a noun here.)"
          ],
          answer: "Meera (proper), family (collective), courage (abstract), Yamuna (proper), boat (common)."
        },
        {
          q: "Write the plural of: box, baby, leaf, child, monkey.",
          steps: [
            "box ends in x, so add -es: boxes.",
            "baby ends in consonant + y, so change y to ies: babies.",
            "leaf ends in f, so change f to ves: leaves.",
            "child is irregular: children.",
            "monkey ends in vowel + y, so just add s: monkeys."
          ],
          answer: "boxes, babies, leaves, children, monkeys"
        }
      ],
      qa: [
        {
          q: "What is a collective noun? Give two examples.",
          a: "A **collective noun** names a group of persons, animals or things as one whole. Examples: a **team** of players, a **flock** of birds, a **bunch** of grapes."
        },
        {
          q: "What is the difference between a common noun and a proper noun?",
          a: "A **common noun** is the general name of any person, place or thing (boy, river, city). A **proper noun** is the special name of one particular person, place or thing (Arjun, Narmada, Chennai) and always begins with a **capital letter**."
        },
        {
          q: "What is an abstract noun? How can you recognise it?",
          a: "An **abstract noun** names a quality, feeling or idea, such as honesty, joy, bravery or childhood. We cannot see or touch it with our senses; we can only think about it or feel it."
        }
      ],
      quiz: [
        {
          q: "Which of these is an abstract noun?",
          options: ["Chair", "Bravery", "Gold", "Delhi"],
          answer: 1,
          explain: "**Bravery** is a quality that we cannot see or touch. Chair is a common noun, gold a material noun and Delhi a proper noun."
        },
        {
          q: "Choose the correct collective noun: A ___ of bees was buzzing around the flowers.",
          options: ["bunch", "herd", "swarm", "pack"],
          answer: 2,
          explain: "We say a **swarm** of bees. A herd is for cattle, a pack for wolves or cards and a bunch for keys or flowers."
        },
        {
          q: "What is the plural of “city”?",
          options: ["cities", "citys", "cityes", "citis"],
          answer: 0,
          explain: "City ends in consonant + y, so change y to i and add **es**: cities."
        },
        {
          q: "Which of these is a material noun?",
          options: ["Teacher", "Friendship", "Kolkata", "Silver"],
          answer: 3,
          explain: "**Silver** is a substance that things are made from, so it is a material noun."
        },
        {
          q: "Which sentence is correct?",
          options: ["This is my sisters bag.", "This is my sister’s bag.", "This is my sisters’s bag.", "This is my sister bag’s."],
          answer: 1,
          explain: "For one owner, add **’s** to the singular noun: sister’s bag."
        },
        {
          q: "Which of these nouns is uncountable?",
          options: ["Lamp", "Egg", "Advice", "Boy"],
          answer: 2,
          explain: "We cannot count **advice** one by one (we say “a piece of advice”). Lamp, egg and boy have plural forms."
        }
      ]
    },

    {
      id: "pronouns",
      title: "Pronouns",
      section: "Grammar",
      summary: "Pronouns take the place of nouns so that we need not repeat them. This chapter covers personal, possessive, reflexive, demonstrative and interrogative pronouns.",
      notes: [
        {
          heading: "What is a pronoun?",
          points: [
            "A **pronoun** is a word used in place of a noun, so that we do not repeat the same noun again and again.",
            "Without pronouns: “Ananya lost Ananya’s pencil, so Ananya asked Ananya’s friend.” With pronouns: “Ananya lost **her** pencil, so **she** asked **her** friend.”",
            "The most common pronouns are I, you, he, she, it, we, they and their other forms.",
            "A pronoun must match the noun it replaces in number (one or many) and gender (he, she, it)."
          ]
        },
        {
          heading: "Personal pronouns",
          points: [
            "**Subject form** (the doer): I, you, he, she, it, we, they. “**She** plays the flute.”",
            "**Object form** (the receiver, or after a preposition): me, you, him, her, it, us, them. “Aman called **me**.” “Come with **us**.”",
            "**He** is for a boy or man, **she** for a girl or woman, **it** for animals, things and ideas, and **they** for more than one.",
            "When you talk about yourself and another person, name the other person first: “Rohan and **I** went to the fair.” “Dad gave Rohan and **me** a kite.”"
          ]
        },
        {
          heading: "Possessive words",
          points: [
            "Before a noun we use **my, your, his, her, its, our, their**: “This is **my** bag.”",
            "When no noun follows, we use **mine, yours, his, hers, ours, theirs**: “This bag is **mine**.”",
            "**Its** (belonging to it) has no apostrophe: “The cow shook **its** head.” **It’s** is short for **it is**.",
            "Never write an apostrophe in hers, ours, yours or theirs: ✗ “That book is her’s.” ✓ “That book is hers.”"
          ]
        },
        {
          heading: "Reflexive pronouns",
          points: [
            "A **reflexive pronoun** ends in **-self** or **-selves**: myself, yourself, himself, herself, itself, ourselves, yourselves, themselves.",
            "We use it when the doer and the receiver of the action are the same: “I cut **myself** while peeling an apple.”",
            "It can also add emphasis: “I made the cake **myself**.”",
            "The correct forms are himself and themselves, not “hisself”, “theirselves” or “themself”."
          ]
        },
        {
          heading: "Demonstrative and interrogative pronouns",
          points: [
            "**Demonstrative pronouns** point to things: **this** and **these** (near), **that** and **those** (far). “**These** are my books. **Those** are yours.”",
            "**Interrogative pronouns** are used to ask questions: **who** (person), **whom** (person, object form), **whose** (owner), **which** (choice), **what** (thing).",
            "“**Whose** pencil box is this?” asks about the owner; “**Which** road leads to the station?” asks us to choose.",
            "Use this/that with one thing and these/those with more than one: this mango, those mangoes."
          ]
        }
      ],
      formulas: [
        "Subject: I, you, he, she, it, we, they",
        "Object: me, you, him, her, it, us, them",
        "Before a noun: my, your, his, her, its, our, their. Standing alone: mine, yours, his, hers, ours, theirs",
        "Reflexive: myself, yourself, himself, herself, itself; ourselves, yourselves, themselves",
        "its = belonging to it; it’s = it is"
      ],
      terms: [
        { term: "Pronoun", meaning: "A word used in place of a noun, e.g. he, she, they, it." },
        { term: "Personal pronoun", meaning: "A pronoun that stands for a person or thing: I, you, he, she, it, we, they (and me, him, her, us, them)." },
        { term: "Possessive pronoun", meaning: "A pronoun that shows ownership and stands alone: mine, yours, hers, ours, theirs." },
        { term: "Reflexive pronoun", meaning: "A pronoun ending in -self or -selves that refers back to the doer, e.g. “She hurt **herself**.”" },
        { term: "Demonstrative pronoun", meaning: "A pronoun that points out a person or thing: this, that, these, those." },
        { term: "Interrogative pronoun", meaning: "A pronoun used to ask a question: who, whom, whose, which, what." }
      ],
      examples: [
        {
          q: "Rewrite using pronouns so that the nouns are not repeated: “Aman went to Aman’s grandmother’s house. Aman’s grandmother gave Aman a laddoo, and Aman thanked Aman’s grandmother.”",
          steps: [
            "The second “Aman’s” shows ownership, so use **his**: “Aman went to his grandmother’s house.”",
            "“Aman’s grandmother” is the doer of “gave”, so use **She**.",
            "“Aman” after “gave” is the receiver, so use the object form **him**.",
            "“Aman” is the doer of “thanked”, so use **he**; “Aman’s grandmother” is the receiver, so use **her**."
          ],
          answer: "Aman went to his grandmother’s house. She gave him a laddoo, and he thanked her."
        },
        {
          q: "Fill in the blanks: (a) Priya hurt ___ while playing kabaddi. (b) That is not your pencil box. It is ___ (me). (c) The puppy wagged ___ tail. (d) Mother gave sweets to Rohan and ___ (I / me).",
          steps: [
            "(a) Priya is both the doer and the receiver, so use the reflexive pronoun: **herself**.",
            "(b) No noun follows, so use the possessive pronoun: **mine**.",
            "(c) A noun (tail) follows and the owner is the puppy, so use **its** (no apostrophe).",
            "(d) “Rohan and ___” receives the sweets, so use the object form: **me**."
          ],
          answer: "(a) herself (b) mine (c) its (d) me"
        }
      ],
      qa: [
        {
          q: "What is a pronoun? Why do we use pronouns?",
          a: "A **pronoun** is a word that takes the place of a noun, e.g. he, she, it, they. We use pronouns so that we do not have to repeat the same noun again and again, which makes our speech and writing smoother."
        },
        {
          q: "What is the difference between “my” and “mine”?",
          a: "**My** is used before a noun: “This is **my** book.” **Mine** stands alone and has no noun after it: “This book is **mine**.”"
        },
        {
          q: "What is the difference between “its” and “it’s”?",
          a: "**Its** shows that something belongs to it: “The bird flapped **its** wings.” **It’s** is the short form of **it is** or **it has**: “**It’s** raining.”"
        }
      ],
      quiz: [
        {
          q: "Choose the correct pronoun: Sunita and Kavya are sisters. ___ live in Jaipur.",
          options: ["She", "Them", "They", "Us"],
          answer: 2,
          explain: "The pronoun is the doer and stands for two girls, so use the subject form **They**."
        },
        {
          q: "The red bag belongs to me. So the red bag is ___.",
          options: ["my", "me", "I", "mine"],
          answer: 3,
          explain: "No noun follows the blank, so we need the possessive pronoun **mine**."
        },
        {
          q: "Choose the correct reflexive pronoun: The boys made the kite by ___.",
          options: ["themselves", "themself", "theirselves", "them"],
          answer: 0,
          explain: "The plural reflexive pronoun is **themselves**. “Themself” and “theirselves” are wrong."
        },
        {
          q: "Which sentence is correct?",
          options: ["Me and Arjun went to the fair.", "Arjun and I went to the fair.", "Arjun and me went to the fair.", "Me went to the fair with Arjun."],
          answer: 1,
          explain: "“Arjun and I” are the doers, so use the subject form **I**, and name the other person first."
        },
        {
          q: "Complete the question about the owner: “___ is this umbrella?”",
          options: ["Who", "What", "Whom", "Whose"],
          answer: 3,
          explain: "**Whose** is the interrogative pronoun used to ask about ownership."
        },
        {
          q: "Choose the correct word: The cat licked ___ paw.",
          options: ["it’s", "its’", "its", "it"],
          answer: 2,
          explain: "We need the possessive word **its** (no apostrophe). “It’s” means “it is”."
        }
      ]
    },

    {
      id: "adjectives",
      title: "Adjectives",
      section: "Grammar",
      summary: "Adjectives describe nouns and pronouns. This chapter covers the main kinds of adjectives, the three degrees of comparison, irregular forms, and the use of few and little.",
      notes: [
        {
          heading: "What is an adjective?",
          points: [
            "An **adjective** is a word that tells us more about a noun or a pronoun.",
            "It answers questions such as: What kind? How many? How much? Which one? For example: a **sweet** mango, **three** mangoes, **some** water, **this** mango.",
            "An adjective usually comes **before** the noun: “a **tall** building”. It can also come after is, am, are, was or were: “The building is **tall**.”",
            "Adjectives do not change for singular or plural: a tall boy, tall boys."
          ]
        },
        {
          heading: "Kinds of adjectives",
          points: [
            "**Adjective of quality** tells what kind: kind, brave, red, round, sour. “Ria is a **brave** girl.”",
            "**Adjective of quantity** tells how much: some, much, little, enough, all, no. “Add **some** salt.”",
            "**Adjective of number** tells how many, or in what order: one, five, many, few, several, first, second. “**Five** birds sat on the wire.”",
            "**Demonstrative adjective** points out which one: this, that, these, those. “**That** kite is mine.”",
            "If a noun follows, this/that/these/those is an adjective (“this book”). If it stands alone, it is a pronoun (“This is a book”)."
          ]
        },
        {
          heading: "Degrees of comparison",
          points: [
            "Adjectives have three degrees: **positive** (tall), **comparative** (taller) and **superlative** (tallest).",
            "Use the **comparative** to compare two things, with **than**: “Delhi is bigger **than** Shimla.”",
            "Use the **superlative** to compare three or more things, usually with **the**: “Mount Everest is **the highest** peak in the world.”",
            "The positive degree describes one thing, or shows equality with as…as: “Ravi is **as tall as** Sunil.”"
          ]
        },
        {
          heading: "Forming comparatives and superlatives",
          points: [
            "Short adjectives add **-er / -est**: tall → taller → tallest; cold → colder → coldest.",
            "Adjectives ending in **e** add -r / -st: nice → nicer → nicest.",
            "Consonant + **y** changes to i: happy → happier → happiest. A short word with one vowel before a final consonant doubles that consonant: big → bigger → biggest, hot → hotter → hottest.",
            "Long adjectives (two or more syllables, mostly) use **more / most**: beautiful → more beautiful → most beautiful.",
            "Never use both forms together: ✗ “more taller”, ✗ “most easiest”. ✓ “taller”, ✓ “easiest”."
          ]
        },
        {
          heading: "Irregular forms, few and little",
          points: [
            "Some adjectives change completely: **good → better → best**, **bad → worse → worst**, **far → farther → farthest**, **little → less → least**, **many / much → more → most**.",
            "**A few** means some, and **few** means hardly any. Both go with countable nouns: “A few friends came.” “Few friends came.”",
            "**A little** means some, and **little** means hardly any. Both go with uncountable nouns: “I have a little milk.” “I have little milk.”"
          ]
        }
      ],
      formulas: [
        "Positive → Comparative (+ than) → Superlative (the +)",
        "tall → taller → tallest; big → bigger → biggest; happy → happier → happiest",
        "beautiful → more beautiful → most beautiful",
        "good → better → best; bad → worse → worst; many / much → more → most",
        "few, a few → countable nouns; little, a little → uncountable nouns"
      ],
      terms: [
        { term: "Adjective", meaning: "A word that describes a noun or a pronoun, e.g. a **sweet** laddoo." },
        { term: "Adjective of quality", meaning: "An adjective that tells what kind of person or thing, e.g. clever, cold, yellow." },
        { term: "Adjective of quantity", meaning: "An adjective that tells how much, e.g. some, enough, little, all." },
        { term: "Adjective of number", meaning: "An adjective that tells how many or the order, e.g. ten, several, second." },
        { term: "Comparative", meaning: "The form of an adjective used to compare two things, e.g. taller, more careful." },
        { term: "Superlative", meaning: "The form of an adjective that shows the highest degree among three or more, e.g. tallest, most careful." }
      ],
      examples: [
        {
          q: "Fill in the correct form of the adjective in brackets: (a) Mount Everest is the ___ mountain in the world. (high) (b) My brother is ___ than me. (tall) (c) This story is ___ than that one. (interesting) (d) Today’s weather is ___ than yesterday’s. (bad)",
          steps: [
            "(a) “In the world” means the highest of all, so use the superlative: **highest**.",
            "(b) “Than” shows a comparison of two, so use the comparative: **taller**.",
            "(c) Interesting is a long adjective, so use **more interesting**.",
            "(d) Bad is irregular: bad → **worse** → worst."
          ],
          answer: "(a) highest (b) taller (c) more interesting (d) worse"
        },
        {
          q: "Name the adjectives and say what kind each is: “Three clever crows drank some cool water from this pot.”",
          steps: [
            "Three: how many, so an adjective of **number**.",
            "clever: what kind, so an adjective of **quality**.",
            "some: how much, so an adjective of **quantity**.",
            "cool: what kind, so an adjective of **quality**.",
            "this: which pot, so a **demonstrative** adjective."
          ],
          answer: "Three (number), clever (quality), some (quantity), cool (quality), this (demonstrative)."
        }
      ],
      qa: [
        {
          q: "What is an adjective? Name three kinds of adjectives with one example of each.",
          a: "An **adjective** describes a noun or a pronoun. Kinds: **quality** (a brave soldier), **quantity** (much sugar) and **number** (seven days). There are also demonstrative adjectives such as this and those."
        },
        {
          q: "How do we form the comparative and superlative of long adjectives? Give an example.",
          a: "For long adjectives we put **more** before the word for the comparative and **most** for the superlative. Example: careful → **more careful** → **most careful**."
        },
        {
          q: "What is the difference between “few” and “a few”?",
          a: "**Few** means hardly any, which has a negative feeling: “Few people came to the match.” **A few** means some, which is positive: “A few people came to the match.” Both are used with countable nouns."
        }
      ],
      quiz: [
        {
          q: "Which word is an adjective in this sentence? “Rani ate a juicy mango.”",
          options: ["juicy", "Rani", "ate", "mango"],
          answer: 0,
          explain: "**Juicy** describes the noun mango, so it is the adjective."
        },
        {
          q: "What is the superlative form of “good”?",
          options: ["gooder", "goodest", "better", "best"],
          answer: 3,
          explain: "Good is irregular: good → better → **best**."
        },
        {
          q: "Which sentence is correct?",
          options: ["Delhi is more bigger than Shimla.", "Delhi is biggest than Shimla.", "Delhi is bigger than Shimla.", "Delhi is more big than Shimla."],
          answer: 2,
          explain: "Big is a short adjective, so the comparative is **bigger**. We do not add “more” to it."
        },
        {
          q: "Which sentence has an adjective of number?",
          options: ["Ten children joined the race.", "There is some juice in the jug.", "She drank all the water.", "The soup is hot."],
          answer: 0,
          explain: "**Ten** tells how many children, so it is an adjective of number."
        },
        {
          q: "Of all the girls in the class, Aarti is the ___.",
          options: ["taller", "tallest", "most tall", "more tallest"],
          answer: 1,
          explain: "We compare her with all the girls, so the superlative **tallest** is needed."
        },
        {
          q: "Choose the correct word: I have ___ money left, so I cannot buy the toy.",
          options: ["few", "a few", "a little", "little"],
          answer: 3,
          explain: "Money is uncountable, and the meaning is “hardly any”, so the word is **little**."
        }
      ]
    },

    {
      id: "verbs-and-simple-tenses",
      title: "Verbs and Simple Tenses",
      section: "Grammar",
      summary: "Verbs show actions and states, and tenses show the time of the action. This chapter covers verbs, regular and irregular forms, and the simple and continuous forms of the present, past and future tenses.",
      notes: [
        {
          heading: "What are verbs?",
          points: [
            "A **verb** is a word that shows an action (run, write, laugh) or a state (be, seem, belong).",
            "Every sentence needs a verb: “Neha **sings** well.” “The sky **is** clear.”",
            "**Helping verbs** (is, am, are, was, were, do, does, did, have, has, will) join the main verb to show the tense: “She **is** reading.” “They **will** come.”",
            "Verbs change their form to match the subject: I **am**, you **are**, he **is**."
          ]
        },
        {
          heading: "Forms of verbs",
          points: [
            "The **base form** (V1) is the dictionary form: play, go, eat. Adding **-ing** gives the continuous form: playing, going, eating.",
            "**Regular verbs** make the past by adding -ed or -d: walk → walked, like → liked. Watch the spelling: stop → stopped, study → studied.",
            "**Irregular verbs** change in other ways: go → went, eat → ate, see → saw, buy → bought, write → wrote, run → ran, come → came, take → took.",
            "Spelling of -ing: write → writing (drop the e), run → running (double the last letter), play → playing."
          ]
        },
        {
          heading: "Present tenses",
          points: [
            "**Simple present** shows habits, daily routines and general truths: “The sun rises in the east.” “Kavya walks to school.”",
            "With **he, she, it** and singular nouns, add **-s / -es** to the verb: she plays, he watches, it goes. With I, you, we and they, use the base form.",
            "Negatives and questions use **do / does**, and the verb stays in the base form: “I do not like onions.” “Does Ravi play chess?”",
            "**Present continuous** shows an action happening now: am / is / are + verb-ing. “Look! The children **are playing** kabaddi.”",
            "Verbs such as know, like, love, want and need are not normally used in the continuous: ✗ “I am knowing” ✓ “I know.”"
          ]
        },
        {
          heading: "Past tenses",
          points: [
            "**Simple past** shows an action that finished in the past: “We **visited** the Red Fort last Sunday.” Time words: yesterday, last week, ago.",
            "Questions and negatives use **did**, and the main verb goes back to the base form: “**Did** you **finish** your homework?” “She **did not go**.” (✗ “did not went”)",
            "**Past continuous** shows an action that was going on at a time in the past: was / were + verb-ing. “I **was reading** at eight last night.”",
            "It is often used with **when** or **while** when a longer action is interrupted: “Mother **was cooking** when the guests arrived.”"
          ]
        },
        {
          heading: "Future tenses",
          points: [
            "**Simple future** uses **will + base verb** for what will happen later, for promises and for quick decisions: “I **will help** you.” “It **will rain** tomorrow.”",
            "**Shall** is sometimes used with I and we in offers and suggestions: “**Shall** we play?”",
            "**Future continuous** shows an action that will be going on at a future time: will be + verb-ing. “At 5 p.m. tomorrow we **will be playing** cricket.”",
            "Time words for the future: tomorrow, next week, soon, tonight, in two days.",
            "After **if** and **when**, use the simple present, not will: “If it rains, we **will stay** at home.”"
          ]
        }
      ],
      formulas: [
        "Simple present: V1 (V1 + s / es with he, she, it)",
        "Present continuous: am / is / are + V1 + ing",
        "Simple past: V2 (did not + V1; Did + subject + V1?)",
        "Past continuous: was / were + V1 + ing",
        "Simple future: will + V1",
        "Future continuous: will be + V1 + ing",
        "I → am / was; he, she, it → is / was; you, we, they → are / were"
      ],
      terms: [
        { term: "Verb", meaning: "A word that shows an action or a state, e.g. jump, think, is." },
        { term: "Helping verb", meaning: "A verb such as is, was, do, did, will that helps the main verb to form a tense, question or negative." },
        { term: "Tense", meaning: "The form of a verb that shows the time of an action: present, past or future." },
        { term: "Regular verb", meaning: "A verb that forms its past by adding -ed or -d, e.g. play → played." },
        { term: "Irregular verb", meaning: "A verb that forms its past in some other way, e.g. buy → bought, go → went." },
        { term: "Continuous tense", meaning: "A tense that shows an action in progress. It uses a form of be + verb-ing, e.g. is eating, was eating, will be eating." }
      ],
      examples: [
        {
          q: "Fill in the correct form of the verb: (a) Kavya ___ (go) to school by bus every day. (b) Look! The children ___ (play) in the park. (c) We ___ (visit) the Red Fort last Sunday. (d) Tomorrow I ___ (help) my mother in the kitchen.",
          steps: [
            "(a) “Every day” shows a habit, and Kavya is singular, so use the simple present with -es: **goes**.",
            "(b) “Look!” shows an action happening now, and children is plural: **are playing**.",
            "(c) “Last Sunday” is a finished time in the past: **visited**.",
            "(d) “Tomorrow” is in the future: **will help**."
          ],
          answer: "(a) goes (b) are playing (c) visited (d) will help"
        },
        {
          q: "Rewrite “Dhruv plays chess” in (a) the simple past, (b) the simple future and (c) the present continuous.",
          steps: [
            "(a) Simple past uses V2: play → played.",
            "(b) Simple future uses will + base verb: will play.",
            "(c) Present continuous uses is + verb-ing: is playing."
          ],
          answer: "(a) Dhruv played chess. (b) Dhruv will play chess. (c) Dhruv is playing chess."
        }
      ],
      qa: [
        {
          q: "What is a tense? Name the three main tenses with one example each.",
          a: "A **tense** is the form of a verb that shows the time of an action. The three main tenses are the **present** (“Rohan plays cricket.”), the **past** (“Rohan played cricket.”) and the **future** (“Rohan will play cricket.”)."
        },
        {
          q: "When do we use the present continuous tense? Give two examples.",
          a: "We use the **present continuous** for an action that is happening now. It is formed with **am / is / are + verb-ing**. Examples: “The baby **is sleeping**.” “We **are watching** a film.”"
        },
        {
          q: "What is the difference between regular and irregular verbs?",
          a: "**Regular verbs** form the past by adding **-ed / -d** (walk → walked). **Irregular verbs** change in other ways (go → went, eat → ate, buy → bought), so they must be learnt."
        }
      ],
      quiz: [
        {
          q: "Choose the correct form: My grandmother ___ a walk every morning.",
          options: ["take", "taking", "takes", "is take"],
          answer: 2,
          explain: "This is a daily habit and the subject is singular, so use the simple present with -s: **takes**."
        },
        {
          q: "Which sentence is in the present continuous tense?",
          options: ["The baby cried loudly.", "The baby cries loudly.", "The baby will cry loudly.", "The baby is crying loudly."],
          answer: 3,
          explain: "**is crying** (is + verb-ing) is the present continuous."
        },
        {
          q: "What is the past form of “buy”?",
          options: ["buyed", "bought", "boughten", "buying"],
          answer: 1,
          explain: "Buy is an irregular verb: buy → **bought**."
        },
        {
          q: "Choose the correct word: Did you ___ your homework?",
          options: ["finish", "finished", "finishes", "finishing"],
          answer: 0,
          explain: "After **did**, the main verb stays in the base form: “Did you finish…?”"
        },
        {
          q: "Choose the correct form: When the guests arrived, Mother ___ in the kitchen.",
          options: ["cooks", "is cooking", "will cook", "was cooking"],
          answer: 3,
          explain: "A longer action in the past was interrupted by the guests’ arrival, so use the past continuous: **was cooking**."
        },
        {
          q: "Which sentence talks about the future?",
          options: ["I called you last night.", "I call you every day.", "I will call you tonight.", "I am calling you now."],
          answer: 2,
          explain: "**Will + base verb** is the simple future."
        }
      ]
    },

    {
      id: "articles",
      title: "Articles",
      section: "Grammar",
      summary: "The small words a, an and the are called articles. This chapter explains when to use a or an, when to use the, and when no article is needed.",
      notes: [
        {
          heading: "What are articles?",
          points: [
            "**A**, **an** and **the** are called **articles**. They come before a noun.",
            "**A / an** are the **indefinite articles**. They talk about any one person or thing: “I saw **a** peacock.”",
            "**The** is the **definite article**. It talks about a particular person or thing that the speaker and listener both know: “**The** peacock was dancing.”",
            "We use a / an only before **singular countable** nouns: a pen, an apple. We do not say ✗ “a pens” or ✗ “a milk”."
          ]
        },
        {
          heading: "Choosing between a and an",
          points: [
            "Use **an** before a word that begins with a **vowel sound**: an apple, an egg, an umbrella, an orange.",
            "Use **a** before a word that begins with a **consonant sound**: a pen, a dog, a school.",
            "It is the **sound**, not the spelling, that matters. We say **an hour** and **an honest girl** (the h is silent), but **a university**, **a uniform** (they begin with a “yoo” sound) and **a one-rupee coin** (it begins with a “w” sound).",
            "The article depends on the very next word: **an** old man, but **a** very old man."
          ]
        },
        {
          heading: "Using a and an",
          points: [
            "When we mention a person or thing for the **first time**: “Once there was **a** king.”",
            "To mean “one” or “each”: “I need **a** pencil.” “Brush your teeth twice **a** day.”",
            "With jobs: “My uncle is **a** pilot.” “She wants to become **an** engineer.”",
            "In exclamations with singular nouns: “What **a** beautiful rangoli!”"
          ]
        },
        {
          heading: "Using the",
          points: [
            "When the noun has **already been mentioned**: “I bought a kite. **The** kite is red.”",
            "When there is **only one** of its kind: the sun, the moon, the sky, the earth, the Taj Mahal.",
            "Before a **superlative** and before first, second, etc.: the tallest boy, the best player, the first day.",
            "Before names of **rivers, oceans, seas and mountain ranges**: the Ganga, the Indian Ocean, the Himalayas.",
            "When both speaker and listener know which one is meant: “Please close **the** door.”"
          ]
        },
        {
          heading: "When no article is used",
          points: [
            "Names of people, cities, states and most countries: Aman, Mumbai, Punjab, India.",
            "Languages, school subjects, games and meals: speak Hindi, study maths, play cricket, have lunch.",
            "General statements with plural or uncountable nouns: “Dogs are loyal.” “Milk is good for health.”",
            "Some fixed expressions: go to school, go to bed, at home, by bus."
          ]
        }
      ],
      formulas: [
        "a + consonant sound (a pen, a university); an + vowel sound (an egg, an hour)",
        "a / an → any one, singular countable noun; the → a particular noun",
        "the → already mentioned, only one of its kind, superlatives, rivers and oceans",
        "No article → names, languages, games, meals, general plurals"
      ],
      terms: [
        { term: "Article", meaning: "The small words a, an and the used before a noun." },
        { term: "Indefinite article", meaning: "A or an. It refers to any one person or thing, not a particular one." },
        { term: "Definite article", meaning: "The. It refers to a particular person or thing that is already known." },
        { term: "Vowel sound", meaning: "A sound like a, e, i, o, u at the start of a word. Words with a vowel sound take **an**, e.g. an hour." },
        { term: "Consonant sound", meaning: "Any sound that is not a vowel sound. Words with a consonant sound take **a**, e.g. a university." },
        { term: "Zero article", meaning: "Using no article at all, e.g. “Dogs are loyal.” “We play cricket.”" }
      ],
      examples: [
        {
          q: "Fill in a, an, the or X (no article): (a) ___ sun rises in ___ east. (b) Mr Rao is ___ honest man. (c) We play ___ cricket on Sundays. (d) I bought ___ pen and ___ notebook. ___ pen is blue.",
          steps: [
            "(a) The sun is the only one, and east is a known direction: **The … the**.",
            "(b) Honest begins with a silent h, so a vowel sound: **an**.",
            "(c) Names of games take no article: **X**.",
            "(d) First mention of a pen and a notebook: **a … a**. Second mention of the pen: **The**."
          ],
          answer: "(a) The … the (b) an (c) X (d) a … a … The"
        },
        {
          q: "Choose a or an: ___ orange, ___ one-eyed cat, ___ uniform, ___ hour.",
          steps: [
            "orange begins with a vowel sound: **an**.",
            "one-eyed begins with a “w” sound (consonant): **a**.",
            "uniform begins with a “yoo” sound (consonant): **a**.",
            "hour begins with a silent h, so the first sound is a vowel: **an**."
          ],
          answer: "an orange, a one-eyed cat, a uniform, an hour"
        }
      ],
      qa: [
        {
          q: "What are articles? Name the two kinds.",
          a: "**A**, **an** and **the** are articles. They are used before nouns. The two kinds are the **indefinite articles** (a, an), used for any one person or thing, and the **definite article** (the), used for a particular one."
        },
        {
          q: "Why do we say “an hour” but “a university”?",
          a: "The choice depends on the **sound**, not the spelling. In “hour” the h is silent, so it begins with a vowel sound and takes **an**. In “university” the first sound is “yoo”, a consonant sound, so it takes **a**."
        },
        {
          q: "Give three situations in which we use “the”.",
          a: "We use **the** (1) when a noun has already been mentioned (“I saw a dog. **The** dog barked.”), (2) with things that are the only one of their kind (**the** sun, **the** moon) and (3) with superlatives and rivers (**the** tallest boy, **the** Ganga)."
        }
      ],
      quiz: [
        {
          q: "Choose the correct article: She is ___ honest girl.",
          options: ["A", "An", "The", "No article"],
          answer: 1,
          explain: "Honest begins with a silent h, so the first sound is a vowel sound: **an**."
        },
        {
          q: "Choose the correct article: ___ Ganga is a holy river.",
          options: ["A", "An", "No article", "The"],
          answer: 3,
          explain: "Names of rivers take **the**: the Ganga."
        },
        {
          q: "Which phrase is correct?",
          options: ["a unit", "an university", "a hour", "a umbrella"],
          answer: 0,
          explain: "Unit begins with a “yoo” sound (a consonant sound), so we say **a unit**."
        },
        {
          q: "Choose the correct article: We play ___ football after school.",
          options: ["The", "A", "No article", "An"],
          answer: 2,
          explain: "We do not use an article before the name of a game."
        },
        {
          q: "I saw a monkey in the garden. ___ monkey was eating a banana.",
          options: ["A", "The", "An", "No article"],
          answer: 1,
          explain: "The monkey has already been mentioned, so we use **The**."
        },
        {
          q: "Which sentence is correct?",
          options: ["The moon goes around the earth.", "Moon goes around the earth.", "The moon goes around earth.", "A moon goes around the earth."],
          answer: 0,
          explain: "The moon and the earth are each the only one of their kind, so both take **the**."
        }
      ]
    },

    {
      id: "prepositions",
      title: "Prepositions",
      section: "Grammar",
      summary: "Prepositions show how a noun or pronoun is related to another word, such as its place, time or direction. This chapter covers prepositions of place, time and direction, and common fixed pairs.",
      notes: [
        {
          heading: "What is a preposition?",
          points: [
            "A **preposition** shows how a noun or pronoun is related to another word in the sentence, for example in position, time or direction.",
            "It is always followed by a noun or pronoun, called its **object**: “The cat is under **the table**.” “Come with **me**.”",
            "Common prepositions are small words: in, on, at, to, from, with, by, for, of, about, under, over.",
            "A preposition with its object is a prepositional phrase: “in the garden”, “after school”."
          ]
        },
        {
          heading: "Prepositions of place",
          points: [
            "**in**: inside something or in a large area: in the bag, in Kerala.",
            "**on**: touching a surface: on the table, on the wall.",
            "**at**: a point or particular place: at the gate, at the bus stop, at school.",
            "**under / below** (lower), **over / above** (higher), **behind**, **in front of**, **near**, **beside**, **next to**.",
            "**Between** is used for two; **among** is used for three or more: between the two houses, among the trees."
          ]
        },
        {
          heading: "Prepositions of time",
          points: [
            "**at**: clock times and fixed points: at 7 o’clock, at noon, at night.",
            "**on**: days and dates: on Monday, on 2 October, on my birthday.",
            "**in**: months, years, seasons and parts of the day: in August, in 2025, in winter, in the morning.",
            "**for** tells how long (for two hours); **since** tells from when (since morning, since 2020).",
            "Others: **before, after, during, by** (not later than) and **till / until**: after school, during the holidays, by 5 p.m."
          ]
        },
        {
          heading: "Prepositions of direction",
          points: [
            "**to** means towards a place; **from** gives the starting point: from Delhi to Agra.",
            "**into** means moving inside: jumped into the pool. **Out of** means moving outside.",
            "**across** means from one side to the other: walked across the road. **Through** means going in at one end and out at the other: through the tunnel.",
            "Others: **along, towards, up, down, past**: walked along the river, ran towards the gate."
          ]
        },
        {
          heading: "Fixed prepositions",
          points: [
            "Some adjectives take a particular preposition: good **at** drawing, afraid **of** snakes, interested **in** music, fond **of** sweets, proud **of** you, angry **with** him, different **from** this.",
            "Some verbs do too: listen **to** music, wait **for** the bus, depend **on** me, laugh **at** a joke.",
            "These pairs have to be learnt. ✗ “afraid from dogs” ✓ “afraid of dogs”."
          ]
        }
      ],
      formulas: [
        "at + clock time / point: at 5 o’clock, at the gate",
        "on + day / date / surface: on Sunday, on the shelf",
        "in + month / year / season / part of day / large area: in May, in 2025, in the evening",
        "for + length of time; since + starting point",
        "between (two) / among (three or more)",
        "good at, afraid of, interested in, proud of, fond of, angry with"
      ],
      terms: [
        { term: "Preposition", meaning: "A word that shows the relation of a noun or pronoun to another word, e.g. in, on, at, under." },
        { term: "Prepositional phrase", meaning: "A preposition together with its object, e.g. “under the table”." },
        { term: "Object of a preposition", meaning: "The noun or pronoun that comes after a preposition, e.g. **table** in “under the table”." },
        { term: "Preposition of place", meaning: "A preposition that tells where something is, e.g. in, on, behind, between." },
        { term: "Preposition of time", meaning: "A preposition that tells when or for how long, e.g. at, on, in, since, for." },
        { term: "Preposition of direction", meaning: "A preposition that tells the direction of movement, e.g. to, into, across, towards." }
      ],
      examples: [
        {
          q: "Fill in at, on or in: (a) The school bus comes ___ 7:30 a.m. (b) Republic Day is celebrated ___ 26 January. (c) We go to the hills ___ summer. (d) The clock is hanging ___ the wall.",
          steps: [
            "(a) A clock time takes **at**: at 7:30 a.m.",
            "(b) A date takes **on**: on 26 January.",
            "(c) A season takes **in**: in summer.",
            "(d) The clock touches the surface of the wall: **on** the wall."
          ],
          answer: "(a) at (b) on (c) in (d) on"
        },
        {
          q: "Complete with a suitable preposition: (a) Meera is afraid ___ lizards. (b) We have lived in Pune ___ 2018. (c) Divide the sweets ___ the three children. (d) He jumped ___ the pond with a splash.",
          steps: [
            "(a) Afraid takes **of**: afraid of lizards.",
            "(b) 2018 is a starting point in time, so use **since**.",
            "(c) There are three children, so use **among**, not between.",
            "(d) He moved from outside to inside the pond: **into**."
          ],
          answer: "(a) of (b) since (c) among (d) into"
        }
      ],
      qa: [
        {
          q: "What is a preposition? Give four examples of prepositions of place.",
          a: "A **preposition** is a word that shows the relation of a noun or pronoun to another word in the sentence. It is followed by a noun or pronoun. Examples of prepositions of place: **in, on, under, behind, between, near**."
        },
        {
          q: "How do we use “at”, “on” and “in” for time?",
          a: "Use **at** for clock times (at 6 o’clock), **on** for days and dates (on Friday, on 15 August) and **in** for months, years, seasons and parts of the day (in July, in 2025, in winter, in the evening)."
        },
        {
          q: "What is the difference between “for” and “since”?",
          a: "**For** is followed by a length of time (for two hours, for three days). **Since** is followed by the point of time when something began (since Monday, since 2020)."
        }
      ],
      quiz: [
        {
          q: "Ria placed her books ___ the table.",
          options: ["in", "on", "at", "between"],
          answer: 1,
          explain: "The books touch the surface of the table, so use **on**."
        },
        {
          q: "Choose the correct pair: The meeting is ___ Tuesday ___ 4 p.m.",
          options: ["in … at", "at … on", "on … at", "on … in"],
          answer: 2,
          explain: "A day takes **on** and a clock time takes **at**: on Tuesday at 4 p.m."
        },
        {
          q: "She has been learning the sitar ___ three years.",
          options: ["for", "since", "from", "at"],
          answer: 0,
          explain: "**For** is used with a length of time (three years). Since is used with a starting point."
        },
        {
          q: "Choose the correct preposition: Dev is interested ___ astronomy.",
          options: ["at", "on", "with", "in"],
          answer: 3,
          explain: "The fixed pair is “interested **in**”."
        },
        {
          q: "The teacher distributed the books ___ the students of Class 6.",
          options: ["between", "among", "beside", "above"],
          answer: 1,
          explain: "There are many students, so use **among**. Between is for two."
        },
        {
          q: "Which sentence uses a preposition of direction?",
          options: ["The ball is under the chair.", "The shop opens at nine.", "We walked towards the temple.", "She lives near the park."],
          answer: 2,
          explain: "**Towards** shows the direction of movement. Under and near show place, and at nine shows time."
        }
      ]
    },

    // ───────────────────────────── WRITING SKILLS ─────────────────────────────
    {
      id: "paragraph-writing",
      title: "Paragraph Writing",
      section: "Writing Skills",
      summary: "A paragraph is a group of sentences about one main idea. This chapter shows how to plan and write a good paragraph with a topic sentence, supporting sentences and a concluding sentence.",
      notes: [
        {
          heading: "What is a paragraph?",
          points: [
            "A **paragraph** is a group of sentences that talk about **one main idea**.",
            "It begins on a new line, and the first line is usually set a little inwards (indented).",
            "Typical topics at this level: My School, My Best Friend, A Rainy Day, My Favourite Festival, The Cow.",
            "Follow the word limit given in the question (often about 60–80 words)."
          ]
        },
        {
          heading: "Parts of a paragraph",
          points: [
            "**Topic sentence**: the first sentence. It introduces the main idea: “The cow is a very useful animal.”",
            "**Supporting sentences**: three to five sentences that give details, facts or examples about the main idea.",
            "**Concluding sentence**: the last sentence. It sums up the idea or gives a final thought.",
            "Every sentence must be about the topic. Do not add unrelated facts just to make the paragraph longer."
          ]
        },
        {
          heading: "Steps to write a paragraph",
          points: [
            "**Think**: decide what the main idea is. **Plan**: note down four or five points.",
            "**Write** the topic sentence, then the points in a sensible order, then the concluding sentence.",
            "Use **linking words** to join ideas: first, then, also, because, so, but, finally.",
            "**Check** your work: read it again for spelling, punctuation, capital letters and tense."
          ]
        },
        {
          heading: "Language tips",
          points: [
            "Use simple, clear sentences. Vary the beginnings of your sentences instead of starting each with “I” or “It”.",
            "Use the **simple present** to describe how things are (“My school is big.”) and the **simple past** for something that happened (“We went to the zoo.”).",
            "Add one or two describing words (adjectives) to make the picture clearer: “a quiet library”, “a sweet mango”."
          ]
        }
      ],
      formulas: [
        "Paragraph = Topic sentence + Supporting sentences + Concluding sentence",
        "One paragraph = one main idea",
        "Length: follow the question (often about 60–80 words)",
        "Steps: Think → Plan → Write → Check"
      ],
      terms: [
        { term: "Paragraph", meaning: "A group of sentences about one main idea." },
        { term: "Topic sentence", meaning: "The sentence that states the main idea of the paragraph, usually the first one." },
        { term: "Supporting sentence", meaning: "A sentence that gives details, facts or examples about the main idea." },
        { term: "Concluding sentence", meaning: "The last sentence, which sums up the paragraph." },
        { term: "Linking words", meaning: "Words such as first, also, because and finally that join ideas smoothly." },
        { term: "Proofreading", meaning: "Reading your writing again to find and correct mistakes." }
      ],
      examples: [
        {
          q: "Write a paragraph on “My School” in about 60–80 words.",
          steps: [
            "Topic sentence: My school is the place where I enjoy learning every day.",
            "Detail 1: It is a big, white building near the bus stand in our town. There are twenty classrooms, a library and a large playground.",
            "Detail 2: My teachers are kind and always help us when we cannot understand a lesson.",
            "Detail 3: In the games period, we play kho-kho and cricket with our friends.",
            "Concluding sentence: I am proud of my school and I love going there."
          ],
          answer: "About 70 words. It has one main idea (my school), a topic sentence, details in a sensible order, and a concluding sentence, all in the simple present tense."
        },
        {
          q: "Add a topic sentence and a concluding sentence to these supporting sentences: “It gives us milk every day. Curd, butter and ghee are made from milk. In villages, farmers also use cow dung as fuel and manure.”",
          steps: [
            "Find the main idea: all the sentences tell how a cow helps us.",
            "Topic sentence: The cow is a very useful animal.",
            "Concluding sentence: That is why we should take good care of cows."
          ],
          answer: "The cow is a very useful animal. It gives us milk every day. Curd, butter and ghee are made from milk. In villages, farmers also use cow dung as fuel and manure. That is why we should take good care of cows."
        }
      ],
      qa: [
        {
          q: "What is a topic sentence? Where does it usually come in a paragraph?",
          a: "A **topic sentence** states the main idea of the paragraph. It usually comes **first**, so the reader knows what the paragraph is about. The other sentences then explain or support it."
        },
        {
          q: "Why do we use linking words in a paragraph? Give three examples.",
          a: "**Linking words** join sentences and ideas so that the paragraph reads smoothly instead of sounding like a list. Examples: **first, also, because, but, finally**."
        },
        {
          q: "What steps should you follow to write a good paragraph?",
          a: "First **think** about the main idea and **plan** a few points. Then **write** the topic sentence, the supporting sentences in order and a concluding sentence. Finally **check** spelling, punctuation and tense."
        }
      ],
      quiz: [
        {
          q: "Which sentence is the best topic sentence for a paragraph on “Our Library”?",
          options: ["Our school library is a quiet place full of books.", "Thank you for reading.", "Books are on shelves.", "I like ice cream."],
          answer: 0,
          explain: "A good topic sentence states the main idea clearly. The first and last options do not introduce the topic, and ice cream is off topic."
        },
        {
          q: "A paragraph should be about ___.",
          options: ["many different topics", "one main idea", "only questions", "only names"],
          answer: 1,
          explain: "A paragraph is built around **one main idea**."
        },
        {
          q: "Which of these words helps to link ideas in a paragraph?",
          options: ["Green", "Table", "Jump", "Also"],
          answer: 3,
          explain: "**Also** joins one idea to the next. The other words are a colour, a noun and a verb."
        },
        {
          q: "The last sentence of a paragraph is called the ___ sentence.",
          options: ["concluding", "topic", "opening", "supporting"],
          answer: 0,
          explain: "The **concluding sentence** sums up the paragraph."
        },
        {
          q: "Which tense is best to describe your school as it is today?",
          options: ["Simple past", "Future tense", "Simple present", "Past continuous"],
          answer: 2,
          explain: "To describe how something is now, use the **simple present**: “My school is big.”"
        },
        {
          q: "What should you do after writing a paragraph?",
          options: ["Hand it in without reading it", "Add unrelated facts to make it longer", "Copy it again on a rough page", "Read it again and correct mistakes"],
          answer: 3,
          explain: "Checking and **proofreading** helps you catch mistakes in spelling, punctuation and grammar."
        }
      ]
    },

    {
      id: "informal-letter",
      title: "Informal Letter",
      section: "Writing Skills",
      summary: "An informal letter is a friendly personal letter to a friend or relative. This chapter explains its format, how to plan the body, and the right tone and language.",
      notes: [
        {
          heading: "What is an informal letter?",
          points: [
            "An **informal letter** (personal letter) is written to people we know well: friends, cousins, grandparents, uncles and aunts.",
            "The tone is warm, friendly and natural, as if you were talking to the person.",
            "We write about news, feelings, invitations, congratulations, thanks or advice.",
            "Use simple everyday words. Do not use slang or SMS-style spellings such as “u” or “gr8”."
          ]
        },
        {
          heading: "Format of an informal letter",
          points: [
            "**Sender’s address**: write your own address at the top, and the **date** below it: 14 March 2025.",
            "**Salutation**: Dear + the name, followed by a comma: “Dear Kabir,” “Dear Nani,”",
            "**Body**: the message, in two or three short paragraphs.",
            "**Closing** (subscription): “Your loving friend,” “Yours lovingly,” or “Your affectionate granddaughter,” and then your **name**.",
            "The receiver’s address is not written at the top of an informal letter; it goes on the envelope."
          ]
        },
        {
          heading: "Planning the body",
          points: [
            "**Paragraph 1**: greet the person, ask how they are, thank them for their last letter and say why you are writing.",
            "**Paragraph 2**: the main news or message, with a few interesting details.",
            "**Paragraph 3**: close with good wishes, regards to elders and a request to write back soon.",
            "Leave a line between paragraphs so that the letter looks neat."
          ]
        },
        {
          heading: "Language and tone",
          points: [
            "Write in the **first person** (I, we) and speak to the reader as “you”.",
            "Use the past tense for news and events, the present tense for how you feel now, and the future for plans.",
            "Sound friendly: “I was so happy to get your letter!” “Do write soon.”",
            "Keep to the point. Do not write about things that have nothing to do with the topic."
          ]
        },
        {
          heading: "Do’s and don’ts",
          points: [
            "Do write the date and your name, and check spelling and punctuation.",
            "Do choose a closing that suits the relation: “Your loving grandson” for a grandmother.",
            "Don’t use formal closings such as “Yours faithfully” or “Yours sincerely”, or openings such as “Respected Sir”, in an informal letter.",
            "Don’t forget the comma after the salutation and after the closing."
          ]
        }
      ],
      formulas: [
        "Format: Sender’s address → Date → Salutation → Body → Closing → Name",
        "Salutation: Dear + name + comma (Dear Aman,)",
        "Informal closings: Your loving friend, / Yours lovingly, / Your affectionate niece,",
        "Body: greeting and reason → main news → good wishes and regards"
      ],
      terms: [
        { term: "Informal letter", meaning: "A friendly personal letter written to a friend or relative." },
        { term: "Sender’s address", meaning: "The address of the person who writes the letter. It is written at the top, followed by the date." },
        { term: "Salutation", meaning: "The greeting at the start of a letter, e.g. “Dear Riya,”." },
        { term: "Body", meaning: "The main part of the letter, which contains the message." },
        { term: "Closing (subscription)", meaning: "The polite ending before the writer’s name, e.g. “Your loving friend,”." },
        { term: "Tone", meaning: "The feeling of the writing. An informal letter has a warm and friendly tone." }
      ],
      examples: [
        {
          q: "You are Arjun, living at 12, Nehru Road, Jaipur. Write a letter to your friend Kabir in Chandigarh telling him about your school’s Sports Day.",
          steps: [
            "Address and date: 12, Nehru Road, Jaipur / 14 March 2025",
            "Salutation: Dear Kabir,",
            "Paragraph 1: How are you? I hope you and your family are fine. Sorry I could not write earlier; we were busy practising for Sports Day.",
            "Paragraph 2: Our Sports Day was held last Saturday. I ran in the 100-metre race and in the relay, and my team won the relay! My parents and my grandfather came to watch. After the prizes, we all ate laddoos.",
            "Paragraph 3: I wish you had been here. Please write soon and tell me about your school. Give my regards to uncle and aunty.",
            "Closing and name: Your loving friend, Arjun"
          ],
          answer: "A complete informal letter with the address and date, a friendly salutation, three short paragraphs (greeting, main news, good wishes), an informal closing and the writer’s name."
        }
      ],
      qa: [
        {
          q: "How is an informal letter different from a formal letter?",
          a: "An **informal letter** goes to friends and relatives, has a warm, friendly tone and ends with “Your loving friend” or similar. A **formal letter** goes to officials or strangers, has a polite and serious tone, and uses openings and closings such as “Dear Sir” and “Yours faithfully”."
        },
        {
          q: "What should the three paragraphs of an informal letter contain?",
          a: "**Paragraph 1** greets the person, asks about their health and says why you are writing. **Paragraph 2** gives the main news with details. **Paragraph 3** ends with good wishes, regards to elders and a request to reply soon."
        },
        {
          q: "Write a suitable salutation and closing for a letter to your grandmother.",
          a: "Salutation: **Dear Nani,** (or Dear Dadi,). Closing: **Your loving granddaughter,** (or grandson) followed by your name."
        }
      ],
      quiz: [
        {
          q: "An informal letter is written to ___.",
          options: ["a bank manager", "the principal", "a newspaper editor", "a close friend or relative"],
          answer: 3,
          explain: "Informal (personal) letters are written to people we know well, such as friends and relatives."
        },
        {
          q: "Which of these is the best salutation for a letter to your friend Sneha?",
          options: ["Dear Sneha,", "Respected Madam,", "Sir,", "To whom it may concern,"],
          answer: 0,
          explain: "Informal letters begin with **Dear + name**, followed by a comma."
        },
        {
          q: "Which closing is suitable for a letter to your friend?",
          options: ["Yours faithfully,", "Your loving friend,", "Obediently yours,", "Yours truly, Manager"],
          answer: 1,
          explain: "**Your loving friend** is a warm closing for an informal letter. The others are formal."
        },
        {
          q: "Which sentence is a good way to begin an informal letter?",
          options: ["With reference to your advertisement,", "Kindly grant me two days’ leave.", "I am writing to complain about the service.", "I hope you are all well and happy."],
          answer: 3,
          explain: "An informal letter usually starts with a friendly greeting such as asking about the person’s health."
        },
        {
          q: "Which of these is NOT part of the format of an informal letter?",
          options: ["Date", "The name of the writer at the end", "A heading such as NOTICE", "Salutation"],
          answer: 2,
          explain: "**NOTICE** is the heading of a notice. A letter has the address, date, salutation, body, closing and name."
        },
        {
          q: "What should the tone of an informal letter be?",
          options: ["Strict and official", "Friendly and natural", "Full of difficult words", "Rude and short"],
          answer: 1,
          explain: "An informal letter should sound **friendly and natural**, as if you were talking to the person."
        }
      ]
    },

    {
      id: "notice-writing",
      title: "Notice Writing",
      section: "Writing Skills",
      summary: "A notice is a short, clear message put up on a notice board to inform a group of people. This chapter explains the format, the details to include and the style to use.",
      notes: [
        {
          heading: "What is a notice?",
          points: [
            "A **notice** is a short written announcement for a group of people, put up on a notice board or read out.",
            "It is used to tell students or residents about an event, a change, a competition, a meeting or a lost-and-found item.",
            "It must be **short, clear and complete**. Usually about 40–50 words are enough.",
            "It is written for everyone, not for one person, so there is no “Dear…”."
          ]
        },
        {
          heading: "Format of a notice",
          points: [
            "**Name of the issuing body** at the top: for example, SUNRISE PUBLIC SCHOOL, Lucknow.",
            "The word **NOTICE** in the centre, then the **date** (usually on the left).",
            "A short **title** that tells the subject: “Book Fair” or “Inter-House Quiz”.",
            "The **body** with the details, and then the **writer’s name and designation** (for example, Anita Sharma, Librarian).",
            "Draw a box around the whole notice so that it stands out."
          ]
        },
        {
          heading: "What to include",
          points: [
            "Think of the questions: **What** is happening? **When** (day, date, time)? **Where** (venue)? **Who** can take part?",
            "Add whom to contact, the last date to give names, or anything students must bring.",
            "Leave out unnecessary details, stories and opinions. Only the information people need should be in a notice."
          ]
        },
        {
          heading: "Language and style",
          points: [
            "The language is **formal and impersonal**. Use short sentences: “All students of Classes 6 to 8 are invited.”",
            "Use the **future tense** or simple present for coming events: “will be held”, “is organised”.",
            "Do not use “I”, “Dear friends” or exclamation marks. A notice is not a letter.",
            "Check that the date, time and venue are written correctly."
          ]
        },
        {
          heading: "Common mistakes",
          points: [
            "Forgetting the date, the title or the writer’s name and designation.",
            "Leaving out the venue or time, so that readers do not know where or when to go.",
            "Writing too much, or writing in a chatty style.",
            "Copying the question word for word instead of writing in your own words."
          ]
        }
      ],
      formulas: [
        "Format: Name of issuing body → NOTICE → Date → Title → Body → Name and designation",
        "Body answers: What? When? Where? Who? Whom to contact?",
        "Length: short, about 40–50 words",
        "Style: formal, impersonal, future tense for coming events"
      ],
      terms: [
        { term: "Notice", meaning: "A short written announcement put up for a group of people." },
        { term: "Issuing body", meaning: "The school, club or office that gives out the notice." },
        { term: "Title (heading)", meaning: "A few words that tell the subject of the notice, e.g. “Book Fair”." },
        { term: "Venue", meaning: "The place where an event will be held." },
        { term: "Designation", meaning: "The post or position of the writer, e.g. Principal, Librarian, Head Girl." },
        { term: "Notice board", meaning: "A board in a school or building where notices are pinned up for everyone to read." }
      ],
      examples: [
        {
          q: "You are Anita Sharma, the librarian of Sunrise Public School, Lucknow. Write a notice, in about 40–50 words, about a Book Fair on Friday, 14 November 2025.",
          steps: [
            "Issuing body: SUNRISE PUBLIC SCHOOL, Lucknow",
            "Heading and date: NOTICE / 8 November 2025",
            "Title: BOOK FAIR",
            "Body: The school library will hold a Book Fair on Friday, 14 November 2025, from 10 a.m. to 2 p.m. in the school hall. Story books, atlases and puzzle books will be available. All students of Classes 6 to 8 are invited to attend.",
            "Name and designation: Anita Sharma, Librarian"
          ],
          answer: "A boxed notice of about 43 words with the issuing body, date, title, what, when, where and who, and the writer’s name and designation."
        },
        {
          q: "Find the mistakes in this notice body: “Dear students, we are going on a picnic! Come with me. Bye.”",
          steps: [
            "It begins with “Dear students”, which belongs in a letter, not a notice.",
            "It uses “we”, “me” and an exclamation mark, so the style is chatty and personal.",
            "The date, day, time and venue of the picnic are missing.",
            "There is no title, date or writer’s name and designation."
          ],
          answer: "It is written like a letter and leaves out the key details. A correct body would say: “A picnic for Classes 6 to 8 will be held at Nehru Park on Saturday, 15 November 2025. The bus will leave school at 8 a.m.”"
        }
      ],
      qa: [
        {
          q: "What is a notice? What is its purpose?",
          a: "A **notice** is a short written announcement put up for a group of people. Its purpose is to give them important information, such as the details of an event, a change or a competition, in a **brief and clear** way."
        },
        {
          q: "What details should a notice about an event contain?",
          a: "It should state **what** the event is, **when** it will happen (day, date and time), **where** (the venue) and **who** may take part. It may also give whom to contact or the last date for names."
        },
        {
          q: "How is a notice different from a letter?",
          a: "A notice is meant for a **group** and is put on a notice board, with no “Dear…” and no closing. It is very short and impersonal. A letter is written to a particular person and has addresses, a salutation and a closing."
        }
      ],
      quiz: [
        {
          q: "Where is a notice usually displayed?",
          options: ["In a diary", "At the back of a notebook", "Inside a closed envelope", "On a notice board"],
          answer: 3,
          explain: "A notice is meant for many people to read, so it is put on a **notice board**."
        },
        {
          q: "Which word is written in the centre, below the name of the school, at the top of a notice?",
          options: ["Dear Students", "NOTICE", "Yours sincerely", "Respected Sir"],
          answer: 1,
          explain: "The word **NOTICE** is written under the name of the issuing body."
        },
        {
          q: "Which of these is NOT a part of the format of a notice?",
          options: ["Date", "Title", "Salutation such as “Dear Friends”", "Name and designation of the writer"],
          answer: 2,
          explain: "A notice is not a letter, so it has **no salutation**."
        },
        {
          q: "Which sentence is in the right style for a notice?",
          options: ["Hey friends, we are going to have a quiz! Come soon!", "A quiz will be held in the school hall on Monday at 11 a.m.", "I am inviting you to my house for a quiz, dear.", "Tell your mother about the quiz and bring her too."],
          answer: 1,
          explain: "A notice is formal, impersonal and gives clear facts such as the venue, day and time."
        },
        {
          q: "A notice should be ___.",
          options: ["short, clear and to the point", "long and full of stories", "written in verse", "addressed to one person"],
          answer: 0,
          explain: "A notice must give the needed information **briefly and clearly**."
        },
        {
          q: "A notice says: “There will be a Science Exhibition for Classes 6–8 on 12 December at 10 a.m.” Which question does it NOT answer?",
          options: ["Where will it be held?", "What is happening?", "When will it happen?", "Who can attend?"],
          answer: 0,
          explain: "The **venue** is missing. The notice tells what (Science Exhibition), when (12 December, 10 a.m.) and who (Classes 6–8)."
        }
      ]
    },

    // ───────────────────────────── READING SKILLS ─────────────────────────────
    {
      id: "reading-comprehension",
      title: "Reading Comprehension",
      section: "Reading Skills",
      summary: "Comprehension means understanding what you read. This chapter shows how to read a passage, find the main idea, work out the meanings of difficult words and write good answers.",
      notes: [
        {
          heading: "How to read a passage",
          points: [
            "**Skim** the passage once, quickly, to get the general idea of what it is about.",
            "Read the **questions** next, so you know what to look for.",
            "Read the passage again **slowly and carefully**. Underline names, dates, numbers and key words.",
            "**Answer** the questions, then check your answers against the passage."
          ]
        },
        {
          heading: "Types of questions",
          points: [
            "**Factual questions** (who, what, when, where): the answer is stated directly in the passage.",
            "**Inference questions** (why, how, what does this show?): the answer is not stated, but you can work it out from clues.",
            "**Vocabulary questions** ask the meaning of a word as used in the passage, or a word with the same or opposite meaning.",
            "**True / False** and **main idea** or **title** questions test whether you have understood the whole passage."
          ]
        },
        {
          heading: "Main idea and title",
          points: [
            "The **main idea** is what the whole passage is mostly about. A detail is only one small part of it.",
            "It is often found in the first or the last sentence, or repeated in different words throughout.",
            "A good **title** is short and covers the whole passage, not just one part.",
            "Do not choose a title or main idea just because a word from the passage appears in it."
          ]
        },
        {
          heading: "Meanings of difficult words",
          points: [
            "Do not stop reading when you meet a new word. Look at the words and sentences around it for clues (the **context**).",
            "Try replacing the word with your guess and see if the sentence still makes sense.",
            "Example: “After the long trek, the children were **ravenous** and finished all the parathas.” The clues show that it means very hungry.",
            "Check unknown words in a dictionary later and keep a notebook of new words."
          ]
        },
        {
          heading: "Writing the answers",
          points: [
            "Write a **complete sentence**, using words from the question: “Who helped the girls?” → “An old farmer helped the girls.”",
            "Use your **own words** wherever you can. Do not copy long lines from the passage.",
            "Keep the answer short and match its length to the marks. Give a reason when the question says “why”.",
            "Use only the facts from the passage. Do not add your own opinion unless the question asks for it."
          ]
        }
      ],
      formulas: [
        "Steps: Skim → Read the questions → Read carefully → Answer → Check",
        "Who → person; What → thing or event; When → time; Where → place; Why → reason; How → manner",
        "Main idea = what the whole passage is about; a detail = one small part of it",
        "Answer in a complete sentence, using the words of the question"
      ],
      terms: [
        { term: "Comprehension", meaning: "Understanding what you read or hear." },
        { term: "Main idea", meaning: "The central point of a passage, which everything else in it supports." },
        { term: "Inference", meaning: "A conclusion you work out from clues, even though it is not stated directly." },
        { term: "Skimming", meaning: "Reading quickly to get the general idea of a passage." },
        { term: "Context", meaning: "The words and sentences around a word, which help to show its meaning." },
        { term: "Synonym", meaning: "A word that has nearly the same meaning as another word, e.g. big and large." }
      ],
      examples: [
        {
          q: "Read the passage and answer. “Meena lives in a village near Udaipur. Every morning she walks two kilometres to school with her friend Zoya. One rainy day, the small bridge on the way was covered with water. The girls waited, and then an old farmer helped them cross by holding a rope. They reached school late but safe. The next day Meena told the headmaster about the bridge, and the villagers decided to repair it.” (a) Who helped the girls to cross the bridge? (b) Why were the girls late? (c) Why do you think Meena told the headmaster about the bridge? (d) Suggest a title.",
          steps: [
            "(a) This is a factual question. Find “helped them cross”: an old farmer, with a rope.",
            "(b) Look for the reason: the bridge was covered with water, so they had to wait before crossing.",
            "(c) This is an inference question. The passage does not say it directly, but the villagers repaired the bridge after she spoke, so she wanted the bridge fixed for everyone’s safety.",
            "(d) A title should cover the whole passage: the bridge and the girls’ problem."
          ],
          answer: "(a) An old farmer helped them. (b) They were late because the bridge was covered with water and they had to wait. (c) She wanted the bridge repaired so that children could cross safely. (d) The Flooded Bridge."
        },
        {
          q: "What does “ravenous” mean in this sentence? “After the long trek, the children were ravenous and finished all the parathas.”",
          steps: [
            "Look at the clues: a long trek makes people tired and hungry.",
            "The children “finished all the parathas”, so they must have been very hungry.",
            "Replace the word: “the children were very hungry and finished all the parathas.” It makes sense."
          ],
          answer: "Ravenous means extremely hungry."
        }
      ],
      qa: [
        {
          q: "How can you find the main idea of a passage?",
          a: "Read the whole passage and ask, “What is it mostly about?” The **main idea** is often in the first or last sentence. All the other sentences give details that support it. A single detail is not the main idea."
        },
        {
          q: "What should you do when you meet a difficult word in a passage?",
          a: "Do not panic or stop reading. Look at the **words around it (the context)** for clues, and try replacing the word with your guess to see if the sentence still makes sense. Check the dictionary after you have finished."
        },
        {
          q: "Why should answers be written in your own words?",
          a: "Writing in your **own words** shows that you have understood the passage and have not just copied it. Short answers in complete sentences, using the words of the question, are clear and earn better marks."
        }
      ],
      quiz: [
        {
          q: "What should you do first when you get a comprehension passage?",
          options: ["Start writing answers from memory", "Count the number of words", "Skim it once to get the general idea", "Copy the first paragraph"],
          answer: 2,
          explain: "Skim the passage first to understand what it is about. Then read the questions and read again carefully."
        },
        {
          q: "Read: “Ravi planted a mango sapling and watered it daily. After four years, it gave sweet fruits.” What is the main idea?",
          options: ["Mangoes are yellow.", "Regular care brings good results.", "Ravi lives near a river.", "Saplings are very small."],
          answer: 1,
          explain: "The passage shows that Ravi’s regular care led to a good result. The other options are not what the passage is about."
        },
        {
          q: "A question beginning with “Where” asks for ___.",
          options: ["a person", "a reason", "a time", "a place"],
          answer: 3,
          explain: "**Where** asks about a place."
        },
        {
          q: "“Priya was reluctant to jump into the cold pool and stood at the edge, shivering.” The word “reluctant” means ___.",
          options: ["unwilling", "excited", "hungry", "angry"],
          answer: 0,
          explain: "She stood at the edge, shivering, so she did not want to jump: **unwilling**."
        },
        {
          q: "Read: “The sky turned dark, thunder rumbled and people hurried home with umbrellas.” What can we infer?",
          options: ["It was going to rain.", "It was a hot sunny day.", "The festival was about to begin.", "The shops had closed for the night."],
          answer: 0,
          explain: "The dark sky, thunder and umbrellas are clues that rain was coming."
        },
        {
          q: "Which is the best way to write an answer to a comprehension question?",
          options: ["By copying the entire paragraph", "In one word, always", "By giving only your own opinion", "In a complete sentence, using your own words and facts from the passage"],
          answer: 3,
          explain: "A good answer is a complete sentence based on the passage, written in your own words."
        }
      ]
    }
  ]
});
