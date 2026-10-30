// PSEB Class 2 English: grammar and writing (PSEB book lessons added separately). Format: see CONTENT_GUIDE.md
// Format: see CONTENT_GUIDE.md. All examples are original.
StudyData.add(2, "englishpb", {
  // What this content follows. match: "textbook" | "older-book" | "topic". Set reviewed to a date once a teacher has checked it.
  syllabus: {board: "PSEB", match: "textbook", books: ["Rainbow-2"], note: "Grammar and writing, plus every lesson of Rainbow-2 (summarised in our own words).", reviewed: false},
  chapters: [
    // ───────────────────────────── WORDS ─────────────────────────────
    {
      id: "naming-words-and-proper-nouns",
      title: "Naming Words and Proper Nouns",
      section: "Words",
      summary: "Naming words, also called nouns, name people, animals, places and things. Special names begin with a capital letter.",
      notes: [
        {
          heading: "Naming words (nouns)",
          points: [
            "A **naming word**, or **noun**, names a person, animal, place or thing: boy, cow, school, pencil.",
            "Naming words can also name a group: a team, a flock of birds."
          ]
        },
        {
          heading: "Proper nouns",
          points: [
            "A **proper noun** is the special name of one particular person, place or thing: Priya, Jaipur, Ganga.",
            "A proper noun always begins with a **capital letter**, even in the middle of a sentence."
          ]
        }
      ],
      terms: [
        { term: "Noun", meaning: "A naming word for a person, animal, place or thing." },
        { term: "Common noun", meaning: "A general name, such as girl, river or city." },
        { term: "Proper noun", meaning: "A special name, such as Meena, Yamuna or Chennai. It begins with a capital letter." }
      ],
      examples: [
        {
          q: "Find the proper noun in: Rohan and his dog went to Delhi.",
          steps: ["Rohan is the name of one boy, so it is a proper noun.", "dog is a general name for an animal, so it is a common noun.", "Delhi is the name of one city, so it is a proper noun."],
          answer: "Rohan and Delhi"
        }
      ],
      qa: [
        {
          q: "What is a proper noun? Give one example.",
          a: "A proper noun is the special name of one particular person, place or thing, and begins with a capital letter. For example, Anita is a proper noun."
        },
        {
          q: "Name one common noun and one proper noun for a river.",
          a: "Common noun: river. Proper noun: Yamuna."
        }
      ],
      quiz: [
        {
          q: "Which is a proper noun?",
          options: ["city", "Mumbai", "river", "boy"],
          answer: 1,
          explain: "Mumbai is the special name of one city, so it is a proper noun."
        },
        {
          q: "Which is a common noun?",
          options: ["Kolkata", "Ganga", "river", "Taj Mahal"],
          answer: 2,
          explain: "River is a general name for any river. The others are special names."
        },
        {
          q: "What does every proper noun begin with?",
          options: ["A full stop", "A capital letter", "A comma", "A question mark"],
          answer: 1,
          explain: "Proper nouns always begin with a capital letter."
        },
        {
          q: "Which is a naming word for a person?",
          options: ["teacher", "run", "happy", "under"],
          answer: 0,
          explain: "Teacher is a naming word for a person."
        },
        {
          q: "Which noun is a common noun?",
          options: ["Himalayas", "Holi", "village", "Sunita"],
          answer: 2,
          explain: "Village is a general name. Himalayas, Holi and Sunita are special names."
        }
      ]
    },
    {
      id: "one-and-many",
      title: "One and Many (Plurals)",
      section: "Words",
      summary: "A singular noun names one thing. A plural noun names more than one. Plurals are made in a few simple ways.",
      notes: [
        {
          heading: "Singular and plural",
          points: [
            "A **singular** noun names one thing: a cat, a book.",
            "A **plural** noun names more than one thing: two cats, many books."
          ]
        },
        {
          heading: "Making plurals",
          points: [
            "Most words add **-s**: cat → cats, book → books.",
            "Words ending in s, sh, ch or x add **-es**: bus → buses, dish → dishes, box → boxes.",
            "A word ending in a consonant + y changes the y to **ies**: baby → babies, lady → ladies."
          ]
        },
        {
          heading: "Special plurals",
          points: [
            "Some words change completely: child → children, man → men, tooth → teeth.",
            "Some words stay the same: fish, sheep."
          ]
        }
      ],
      terms: [
        { term: "Singular", meaning: "A word form that means one thing, such as pen." },
        { term: "Plural", meaning: "A word form that means more than one, such as pens." },
        { term: "Irregular plural", meaning: "A plural that does not follow the usual rule, such as teeth or children." }
      ],
      examples: [
        {
          q: "Write the plural of bus.",
          steps: ["bus ends in s.", "Words ending in s add -es.", "So the plural is buses."],
          answer: "buses"
        }
      ],
      qa: [
        {
          q: "What is the difference between singular and plural?",
          a: "Singular means one thing and plural means more than one thing. For example, one pen is singular and three pens is plural."
        },
        {
          q: "Write the plural of baby.",
          a: "babies, because y after a consonant changes to ies."
        }
      ],
      quiz: [
        {
          q: "What is the plural of book?",
          options: ["bookes", "books", "booke", "book"],
          answer: 1,
          explain: "Most words just add -s, so book becomes books."
        },
        {
          q: "Which is the plural of child?",
          options: ["childs", "childrens", "children", "childes"],
          answer: 2,
          explain: "Child is irregular and its plural is children."
        },
        {
          q: "Which is the plural of dish?",
          options: ["dishs", "dishes", "dish", "dishies"],
          answer: 1,
          explain: "Words ending in sh add -es, so dish becomes dishes."
        },
        {
          q: "Which is the plural of baby?",
          options: ["babies", "babys", "baby", "babyes"],
          answer: 0,
          explain: "A consonant + y changes to ies, so baby becomes babies."
        },
        {
          q: "Which word names more than one thing?",
          options: ["cat", "table", "trees", "ball"],
          answer: 2,
          explain: "Trees is plural because it means more than one tree."
        }
      ]
    },
    {
      id: "action-words",
      title: "Action Words",
      section: "Words",
      summary: "Action words, also called verbs, tell us what someone or something does.",
      notes: [
        {
          heading: "What is an action word?",
          points: [
            "An **action word** tells what someone does: run, eat, sing, jump, write.",
            "Action words are also called **verbs**."
          ]
        },
        {
          heading: "Action words in sentences",
          points: [
            "In “Meera reads a book”, the action word is **reads**. Meera is the doer.",
            "Action words can tell about the past: Ravi played cricket yesterday. Here, played is the action word."
          ]
        }
      ],
      terms: [
        { term: "Action word", meaning: "A word that tells what someone or something does." },
        { term: "Doer", meaning: "The person, animal or thing that does the action." },
        { term: "Past time", meaning: "A time that has already gone, such as yesterday." }
      ],
      examples: [
        {
          q: "Find the action word in: The birds sing in the morning.",
          steps: ["birds is a naming word and the doer.", "sing tells what the birds do.", "in, the and morning are not action words."],
          answer: "sing"
        }
      ],
      qa: [
        {
          q: "What is an action word? Give two examples.",
          a: "An action word tells what someone does, such as run and jump."
        },
        {
          q: "Find the action word in: Amma cooks dal.",
          a: "cooks"
        }
      ],
      quiz: [
        {
          q: "Which is an action word?",
          options: ["table", "jump", "red", "Ravi"],
          answer: 1,
          explain: "Jump tells what someone does."
        },
        {
          q: "In “The dog barks loudly”, which word is the action word?",
          options: ["dog", "barks", "loudly", "The"],
          answer: 1,
          explain: "Barks tells what the dog does."
        },
        {
          q: "Which action word shows the past?",
          options: ["eat", "eats", "ate", "eating"],
          answer: 2,
          explain: "Ate is the past form of eat."
        },
        {
          q: "Which is an action word for playing?",
          options: ["ball", "play", "playground", "colour"],
          answer: 1,
          explain: "Play is an action word."
        },
        {
          q: "What is the action word in “Priya writes a letter”?",
          options: ["Priya", "letter", "a", "writes"],
          answer: 3,
          explain: "Writes tells what Priya does."
        }
      ]
    },
    {
      id: "describing-words",
      title: "Describing Words",
      section: "Words",
      summary: "Describing words, also called adjectives, tell us more about a naming word, such as its size, colour or taste.",
      notes: [
        {
          heading: "What is a describing word?",
          points: [
            "A **describing word** tells us more about a naming word: big, red, sweet, tall, cold.",
            "Describing words are also called **adjectives**."
          ]
        },
        {
          heading: "Describing things",
          points: [
            "In “a red ball”, the word **red** describes the ball.",
            "In “a tall tree”, the word **tall** describes the tree."
          ]
        },
        {
          heading: "Size, colour and taste",
          points: [
            "Describing words can tell about size (small, big), colour (green, blue), taste (sweet, sour) or feel (soft, hot).",
            "A describing word can come before a naming word or after the word is, as in: The pillow is soft."
          ]
        }
      ],
      terms: [
        { term: "Describing word", meaning: "A word that tells us more about a naming word." },
        { term: "Adjective", meaning: "Another name for a describing word." },
        { term: "Naming word", meaning: "A word that names a person, animal, place or thing." }
      ],
      examples: [
        {
          q: "Find the describing word in: Anil has a big dog.",
          steps: ["dog is the naming word.", "big tells us about the dog.", "So big is the describing word."],
          answer: "big"
        }
      ],
      qa: [
        {
          q: "What is a describing word? Give one example.",
          a: "A describing word tells us more about a naming word, for example soft in a soft pillow."
        },
        {
          q: "Write a sentence with the describing word sweet.",
          a: "Mangoes are sweet."
        }
      ],
      quiz: [
        {
          q: "Which word is a describing word?",
          options: ["run", "happy", "boy", "under"],
          answer: 1,
          explain: "Happy tells us how someone feels, so it is a describing word."
        },
        {
          q: "Which word describes the pillow in “a soft pillow”?",
          options: ["a", "pillow", "soft", "is"],
          answer: 2,
          explain: "Soft tells us more about the pillow."
        },
        {
          q: "Which word tells the colour?",
          options: ["book", "jump", "under", "green"],
          answer: 3,
          explain: "Green tells us the colour of something."
        },
        {
          q: "Which describing word tells the size?",
          options: ["big", "blue", "sweet", "soft"],
          answer: 0,
          explain: "Big tells us the size of something."
        },
        {
          q: "Which describing word tells how something tastes?",
          options: ["cold", "sour", "tall", "red"],
          answer: 1,
          explain: "Sour describes taste. Cold describes temperature, tall describes height and red describes colour."
        }
      ]
    },
    {
      id: "opposites",
      title: "Opposites",
      section: "Words",
      summary: "Opposites are words with meanings that are the reverse of each other.",
      notes: [
        {
          heading: "What are opposites?",
          points: [
            "Opposites are words that mean the opposite of each other: hot and cold, big and small.",
            "Opposite words are also called **antonyms**."
          ]
        },
        {
          heading: "Common pairs",
          points: [
            "Some common pairs are up and down, day and night, in and out, fast and slow.",
            "Learning opposites helps us describe things: a rabbit is fast, but a tortoise is slow."
          ]
        }
      ],
      terms: [
        { term: "Opposite", meaning: "A word that means the reverse of another word." },
        { term: "Antonym", meaning: "Another name for an opposite word." },
        { term: "Pair", meaning: "Two words that are opposites of each other, such as hot and cold." }
      ],
      examples: [
        {
          q: "What is the opposite of tall?",
          steps: ["Tall means very high.", "The word for not tall is short.", "So the opposite of tall is short."],
          answer: "short"
        }
      ],
      qa: [
        {
          q: "What are opposites? Give two pairs.",
          a: "Opposites are words with opposite meanings. Two pairs are hot and cold, and day and night."
        },
        {
          q: "Write the opposite of full.",
          a: "empty"
        }
      ],
      quiz: [
        {
          q: "What is the opposite of hot?",
          options: ["warm", "cold", "sunny", "wet"],
          answer: 1,
          explain: "Cold is the opposite of hot."
        },
        {
          q: "What is the opposite of day?",
          options: ["night", "morning", "light", "sun"],
          answer: 0,
          explain: "Night is the opposite of day."
        },
        {
          q: "What is the opposite of fast?",
          options: ["quick", "run", "slow", "soft"],
          answer: 2,
          explain: "Slow is the opposite of fast."
        },
        {
          q: "What is the opposite of happy?",
          options: ["glad", "smile", "sad", "joy"],
          answer: 2,
          explain: "Sad is the opposite of happy."
        },
        {
          q: "What is the opposite of up?",
          options: ["high", "down", "top", "under"],
          answer: 1,
          explain: "Down is the opposite of up."
        }
      ]
    },

    // ───────────────────────────── GRAMMAR ─────────────────────────────
    {
      id: "he-she-it-they",
      title: "He, She, It and They",
      section: "Grammar",
      summary: "He, she, it and they are pronouns. They take the place of a naming word so that we do not repeat it.",
      notes: [
        {
          heading: "Pronouns",
          points: [
            "A **pronoun** is a word that takes the place of a naming word: Rohan → **he**, Meena → **she**.",
            "Using pronouns stops us from repeating the same name again and again."
          ]
        },
        {
          heading: "He, she, it and they",
          points: [
            "Use **he** for a boy or man: Rohan is my friend. He likes football.",
            "Use **she** for a girl or woman: Priya is my sister. She sings well.",
            "Use **it** for one thing or animal: The kite is red. It flies high.",
            "Use **they** for more than one person, animal or thing: Ravi and Sita are at school. They are friends."
          ]
        }
      ],
      terms: [
        { term: "Pronoun", meaning: "A word that takes the place of a naming word." },
        { term: "He", meaning: "A pronoun used for a boy or man." },
        { term: "She", meaning: "A pronoun used for a girl or woman." },
        { term: "They", meaning: "A pronoun used for more than one person, animal or thing." }
      ],
      examples: [
        {
          q: "Replace Rani in this sentence: Rani reads a book.",
          steps: ["Rani is a girl.", "A girl is replaced by she.", "She reads a book."],
          answer: "She reads a book."
        }
      ],
      qa: [
        {
          q: "Which pronoun would you use for a boy, a girl and a kite?",
          a: "Use he for a boy, she for a girl and it for a kite."
        },
        {
          q: "Replace the naming words in: Ravi and Mohan play.",
          a: "They play."
        }
      ],
      quiz: [
        {
          q: "Which word can replace Aman in “Aman is tall”?",
          options: ["They", "She", "He", "It"],
          answer: 2,
          explain: "Aman is a boy, so he replaces him."
        },
        {
          q: "Which word can replace the mango?",
          options: ["He", "She", "It", "They"],
          answer: 2,
          explain: "One mango is a thing, so it replaces the mango."
        },
        {
          q: "Which word replaces Riya and Simran?",
          options: ["It", "He", "She", "They"],
          answer: 3,
          explain: "Two people are replaced by they."
        },
        {
          q: "Which word can replace Meena?",
          options: ["He", "She", "It", "They"],
          answer: 1,
          explain: "Meena is a girl, so she replaces her name."
        },
        {
          q: "Which word should replace the boys in “The boys are playing”?",
          options: ["He", "They", "She", "It"],
          answer: 1,
          explain: "More than one boy is replaced by they."
        }
      ]
    },
    {
      id: "is-am-are",
      title: "Is, Am and Are",
      section: "Grammar",
      summary: "Is, am and are tell us about the present. Each one goes with a different kind of subject.",
      notes: [
        {
          heading: "Use am with I",
          points: [
            "Use **am** only with **I**: I am happy. I am a student.",
            "Never say “I is” or “I are”. Always say “I am”."
          ]
        },
        {
          heading: "Use is with one person or thing",
          points: [
            "Use **is** with he, she, it or one name: He is tall. Mango is sweet.",
            "Ravi is at school. The sky is blue."
          ]
        },
        {
          heading: "Use are with you, we, they or more than one",
          points: [
            "Use **are** with you, we, they or more than one thing: We are friends. They are at home.",
            "You are my friend."
          ]
        }
      ],
      terms: [
        { term: "Am", meaning: "Used only with I." },
        { term: "Is", meaning: "Used with he, she, it or one name or thing." },
        { term: "Are", meaning: "Used with you, we, they or more than one person or thing." }
      ],
      examples: [
        {
          q: "Choose is, am or are: She ___ my friend.",
          steps: ["She is one person.", "Use is with she.", "She is my friend."],
          answer: "is"
        }
      ],
      qa: [
        {
          q: "When do we use am?",
          a: "We use am only with I, as in I am ready."
        },
        {
          q: "Fill the blank: They ___ happy.",
          a: "are, because they means more than one person."
        }
      ],
      quiz: [
        {
          q: "Choose the correct word: I ___ hungry.",
          options: ["is", "am", "are", "be"],
          answer: 1,
          explain: "Use am with I."
        },
        {
          q: "The dog ___ brown.",
          options: ["am", "are", "is", "be"],
          answer: 2,
          explain: "Use is with one dog."
        },
        {
          q: "We ___ in class two.",
          options: ["am", "is", "are", "be"],
          answer: 2,
          explain: "Use are with we."
        },
        {
          q: "Ravi and Sita ___ my friends.",
          options: ["are", "is", "am", "be"],
          answer: 0,
          explain: "Two people need are."
        },
        {
          q: "It ___ a sunny day.",
          options: ["am", "are", "be", "is"],
          answer: 3,
          explain: "Use is with it."
        }
      ]
    },
    {
      id: "in-on-under",
      title: "In, On and Under",
      section: "Grammar",
      summary: "Words like in, on and under tell us where something is. They are called prepositions.",
      notes: [
        {
          heading: "Words that show place",
          points: [
            "Words like **in**, **on** and **under** tell us where something is. They are called **prepositions**.",
            "A preposition usually comes before a naming word: on the table, in the box."
          ]
        },
        {
          heading: "In, on and under",
          points: [
            "**In** means inside: The pencil is in the box.",
            "**On** means on top of: The book is on the table.",
            "**Under** means below: The cat is under the bed."
          ]
        }
      ],
      terms: [
        { term: "Preposition", meaning: "A word that shows where something is, such as in, on or under." },
        { term: "In", meaning: "Inside something." },
        { term: "On", meaning: "On the top of something." },
        { term: "Under", meaning: "Below something." }
      ],
      examples: [
        {
          q: "Choose in, on or under: The ball is ___ the bed.",
          steps: ["The ball is below the bed.", "Below means under.", "So the answer is under."],
          answer: "under"
        }
      ],
      qa: [
        {
          q: "What is a preposition? Give one example.",
          a: "A preposition is a word that shows where something is, such as on in “the cup is on the table”."
        },
        {
          q: "Write a sentence using in with a school bag.",
          a: "My school bag is in the cupboard."
        }
      ],
      quiz: [
        {
          q: "The pen is ___ the box. (inside)",
          options: ["on", "under", "in", "at"],
          answer: 2,
          explain: "In means inside."
        },
        {
          q: "The cat sat ___ the table. (on top)",
          options: ["in", "behind", "on", "under"],
          answer: 2,
          explain: "On means on the top of something."
        },
        {
          q: "The shoes are ___ the bed. (below)",
          options: ["under", "in", "on", "above"],
          answer: 0,
          explain: "Under means below."
        },
        {
          q: "The book is ___ the table.",
          options: ["under", "on", "in", "behind"],
          answer: 1,
          explain: "A book lying on top of a table uses on."
        },
        {
          q: "Which word means below?",
          options: ["on", "in", "near", "under"],
          answer: 3,
          explain: "Under means below."
        }
      ]
    },
    {
      id: "making-sentences-and-questions",
      title: "Making Sentences and Questions",
      section: "Sentences",
      summary: "A sentence makes sense on its own. A question asks something and ends with a question mark.",
      notes: [
        {
          heading: "Sentences",
          points: [
            "A **sentence** is a group of words that makes sense: Mina plays in the park.",
            "Every sentence starts with a capital letter and ends with a full stop."
          ]
        },
        {
          heading: "Questions",
          points: [
            "A **question** asks something and ends with a **question mark (?)**: Where is Mina?",
            "Question words include what, where, who, when, why and how."
          ]
        },
        {
          heading: "Making a question",
          points: [
            "Move the helping word to the front: Mina is at school. → Is Mina at school?",
            "Another example: Riya can swim. → Can Riya swim?"
          ]
        }
      ],
      terms: [
        { term: "Sentence", meaning: "A group of words that makes complete sense." },
        { term: "Question mark", meaning: "The mark (?) that ends a question." },
        { term: "Question word", meaning: "A word such as who, what, where or when that begins a question." }
      ],
      examples: [
        {
          q: "Make a question from: Ravi is in the park.",
          steps: ["Move is to the front.", "Is Ravi in the park", "Add a question mark at the end."],
          answer: "Is Ravi in the park?"
        }
      ],
      qa: [
        {
          q: "What mark ends a question?",
          a: "A question ends with a question mark (?)."
        },
        {
          q: "Make a question about your teacher using who.",
          a: "Who is your teacher?"
        }
      ],
      quiz: [
        {
          q: "Which mark ends a question?",
          options: [".", "?", ",", "!"],
          answer: 1,
          explain: "A question ends with a question mark."
        },
        {
          q: "Which question word asks about a place?",
          options: ["who", "what", "where", "when"],
          answer: 2,
          explain: "Where asks about a place."
        },
        {
          q: "Which is a correct question?",
          options: ["Ravi is at school.", "Is Ravi at school?", "Ravi at school is?", "school Ravi is at?"],
          answer: 1,
          explain: "Is Ravi at school? is a question, with the helping word moved to the front."
        },
        {
          q: "Which is a correct sentence?",
          options: ["dog the runs fast.", "Dog runs fast", "The dog runs fast.", "fast runs dog The."],
          answer: 2,
          explain: "A sentence starts with a capital letter and ends with a full stop."
        },
        {
          q: "Which question word asks about time?",
          options: ["where", "when", "what", "who"],
          answer: 1,
          explain: "When asks about time."
        }
      ]
    },
    {
      id: "reading-a-short-story",
      title: "Reading a Short Story",
      section: "Reading",
      summary: "Some simple tips help us understand and enjoy a short story: look before you read, read carefully, then tell the story back.",
      notes: [
        {
          heading: "Before you read",
          points: [
            "Look at the title and the pictures to guess what the story is about.",
            "Think about who the characters might be."
          ]
        },
        {
          heading: "While you read",
          points: [
            "Read slowly and check the words you do not know.",
            "Notice who the characters are and where the story happens."
          ]
        },
        {
          heading: "After you read",
          points: [
            "Tell the story in your own words, starting from the beginning.",
            "Say which character you liked and why."
          ]
        }
      ],
      terms: [
        { term: "Character", meaning: "A person or animal in a story." },
        { term: "Setting", meaning: "The place and time where a story happens." },
        { term: "Title", meaning: "The name of a story." }
      ],
      examples: [
        {
          q: "A story is about a monkey who helps a farmer. Who are the characters?",
          steps: ["Characters are the people or animals in the story.", "The monkey helps the farmer.", "So the characters are the monkey and the farmer."],
          answer: "The monkey and the farmer"
        }
      ],
      qa: [
        {
          q: "What should you do after reading a story?",
          a: "Tell the story in your own words and say which character you liked."
        },
        {
          q: "Why should you look at the title and pictures first?",
          a: "They help us guess what the story will be about."
        }
      ],
      quiz: [
        {
          q: "What is a character in a story?",
          options: ["A person or animal in the story", "The place where the story happens", "The name of the story", "A picture on the cover"],
          answer: 0,
          explain: "Characters are the people or animals in a story."
        },
        {
          q: "What tells us where a story happens?",
          options: ["Title", "Character", "Ending", "Setting"],
          answer: 3,
          explain: "The setting tells us the place and time of the story."
        },
        {
          q: "What should you do first before reading a story?",
          options: ["Tell the end to a friend", "Skip to the last page", "Look at the title and pictures", "Close the book"],
          answer: 2,
          explain: "The title and pictures help us guess the story."
        },
        {
          q: "What is the title of a story?",
          options: ["Its last line", "Its name", "Its setting", "Its main character"],
          answer: 1,
          explain: "The title is the name of the story."
        },
        {
          q: "After reading, what is a good thing to do?",
          options: ["Forget it at once", "Tell the story in your own words", "Tear the page", "Read only the last line"],
          answer: 1,
          explain: "Telling the story in your own words helps us remember it."
        }
      ]
    },
    // ───────────────────────────── RAINBOW ─────────────────────────────
    {
      "id": "rb2-greetings-and-manners",
      "title": "Greetings and Good Manners",
      "section": "Rainbow",
      "summary": "Neelu greets people at different times of the day and uses polite words.",
      "notes": [
        {
          "heading": "Greetings through the day",
          "points": [
            "Neelu says **Good morning** to her mother when she gets up.",
            "She says **Good afternoon** to her teacher when she leaves school.",
            "She says **Good evening** to friends in the evening and **Good night** at bedtime."
          ]
        },
        {
          "heading": "Polite words",
          "points": [
            "Neelu says **Please** when she asks for something.",
            "She says **Thank you** when someone helps.",
            "She says **Sorry** if she disturbs anyone by mistake."
          ]
        },
        {
          "heading": "Talking about me",
          "points": [
            "We can say, How are you? I am fine, thank you.",
            "We can say, My name is ___. I am ___ years old."
          ]
        }
      ],
      "terms": [
        {
          "term": "Greeting",
          "meaning": "Kind words we say when we meet someone."
        },
        {
          "term": "Polite",
          "meaning": "Kind and good in speaking."
        },
        {
          "term": "Please",
          "meaning": "A polite word used to ask for something."
        },
        {
          "term": "Thank you",
          "meaning": "Words we say to show we are glad."
        }
      ],
      "qa": [
        {
          "q": "What does Neelu say to her friends in the evening?",
          "a": "She says Good evening."
        },
        {
          "q": "When do we say Sorry?",
          "a": "We say Sorry when we make a mistake or disturb someone."
        }
      ],
      "quiz": [
        {
          "q": "What does Neelu say to her teacher when she leaves school?",
          "options": [
            "Good afternoon",
            "Good night",
            "Good morning",
            "Good evening"
          ],
          "answer": 0,
          "explain": "She leaves school after noon."
        },
        {
          "q": "What does Neelu say to her mother at bedtime?",
          "options": [
            "Good morning",
            "Good night",
            "Good afternoon",
            "Hello"
          ],
          "answer": 1,
          "explain": "Good night is said before sleep."
        },
        {
          "q": "Which word is used when we ask for something?",
          "options": [
            "Sorry",
            "Bye",
            "Please",
            "Sleep"
          ],
          "answer": 2,
          "explain": "Please makes a request polite."
        },
        {
          "q": "What do we say when someone helps us?",
          "options": [
            "Sorry",
            "Please",
            "Good night",
            "Thank you"
          ],
          "answer": 3,
          "explain": "We thank people who help us."
        },
        {
          "q": "How do we answer How are you?",
          "options": [
            "I am fine, thank you.",
            "My name is Neelu.",
            "It is a pen.",
            "Good night."
          ],
          "answer": 0,
          "explain": "This tells how we are."
        }
      ]
    },
    {
      "id": "rb2-alphabet-and-cursive",
      "title": "The Alphabet and Cursive Letters",
      "section": "Rainbow",
      "summary": "We learn the capital and small letters, vowels and consonants, and how to write joined cursive letters.",
      "notes": [
        {
          "heading": "Letters",
          "points": [
            "There are 26 letters from A to Z.",
            "Each has a **capital** letter and a **small** letter, like A and a."
          ]
        },
        {
          "heading": "Vowels and consonants",
          "points": [
            "The vowels are a, e, i, o and u.",
            "All the other letters are **consonants**."
          ]
        },
        {
          "heading": "Cursive writing",
          "points": [
            "Cursive letters flow with joined strokes.",
            "We practise strokes first, then trace and write the letters."
          ]
        }
      ],
      "terms": [
        {
          "term": "Vowel",
          "meaning": "One of a, e, i, o, u."
        },
        {
          "term": "Consonant",
          "meaning": "A letter that is not a vowel."
        },
        {
          "term": "Capital letter",
          "meaning": "A big letter, like B."
        },
        {
          "term": "Cursive",
          "meaning": "Joined, flowing handwriting."
        }
      ],
      "qa": [
        {
          "q": "Name the five vowels.",
          "a": "a, e, i, o and u."
        },
        {
          "q": "How many letters are there in the alphabet?",
          "a": "There are 26 letters."
        }
      ],
      "quiz": [
        {
          "q": "How many letters are in the English alphabet?",
          "options": [
            "20",
            "26",
            "24",
            "30"
          ],
          "answer": 1,
          "explain": "The alphabet has 26 letters."
        },
        {
          "q": "Which one is a vowel?",
          "options": [
            "g",
            "k",
            "o",
            "s"
          ],
          "answer": 2,
          "explain": "O is a vowel."
        },
        {
          "q": "Which one is a consonant?",
          "options": [
            "a",
            "e",
            "u",
            "m"
          ],
          "answer": 3,
          "explain": "M is a consonant."
        },
        {
          "q": "The capital letter of d is ____.",
          "options": [
            "D",
            "B",
            "P",
            "Q"
          ],
          "answer": 0,
          "explain": "Capital d is D."
        },
        {
          "q": "Cursive writing has letters that are ____.",
          "options": [
            "only capital",
            "joined and flowing",
            "very small dots",
            "drawn in squares"
          ],
          "answer": 1,
          "explain": "Cursive is joined, flowing writing."
        }
      ]
    },
    {
      "id": "rb2-vowel-a",
      "title": "Vowel Sound a: Sam and the Cat",
      "section": "Rainbow",
      "summary": "Words with the short a sound, like cat, hat and mat, in a story about Sam, his fat cat and Pam.",
      "notes": [
        {
          "heading": "The a sound",
          "points": [
            "The short a sound is in words like cat, bag, jar and map.",
            "Word families: -at (cat, hat, mat, rat) and -an (fan, man, van)."
          ]
        },
        {
          "heading": "The story",
          "points": [
            "Sam is a fat man. He has a fat cat.",
            "The cat has a hat, sits on a mat and sees a rat.",
            "Pam comes back with a bag and a cap. Sam has jam for Pam."
          ]
        }
      ],
      "terms": [
        {
          "term": "Short a",
          "meaning": "The a sound in cat."
        },
        {
          "term": "Rhyming words",
          "meaning": "Words that end with the same sound."
        },
        {
          "term": "Word family",
          "meaning": "Words that end the same, like cat, hat, mat."
        }
      ],
      "qa": [
        {
          "q": "Who had a fat cat?",
          "a": "Sam had a fat cat."
        },
        {
          "q": "What did Sam have for Pam?",
          "a": "Sam had jam for Pam."
        }
      ],
      "quiz": [
        {
          "q": "Which word has the short a sound?",
          "options": [
            "pen",
            "pig",
            "hat",
            "pot"
          ],
          "answer": 2,
          "explain": "Hat has the short a sound."
        },
        {
          "q": "Who had a fat cat?",
          "options": [
            "Pam",
            "Tom",
            "Neelu",
            "Sam"
          ],
          "answer": 3,
          "explain": "Sam is the man with the cat."
        },
        {
          "q": "Where did the cat sit?",
          "options": [
            "On a mat",
            "In a van",
            "On a bus",
            "Under a bed"
          ],
          "answer": 0,
          "explain": "The cat sat on a mat."
        },
        {
          "q": "Which word rhymes with cat?",
          "options": [
            "bun",
            "rat",
            "pen",
            "hot"
          ],
          "answer": 1,
          "explain": "Cat and rat end with at."
        },
        {
          "q": "What did Sam have for Pam?",
          "options": [
            "Tea",
            "Bread",
            "Jam",
            "Rice"
          ],
          "answer": 2,
          "explain": "Sam had jam for Pam."
        }
      ]
    },
    {
      "id": "rb2-vowel-e",
      "title": "Vowel Sound e: The Little Red Hen",
      "section": "Rainbow",
      "summary": "Words with the short e sound, like hen, pen and ten, and the story of a little red hen.",
      "notes": [
        {
          "heading": "The e sound",
          "points": [
            "The short e sound is in words like leg, pen, ten and web.",
            "Rhyming pairs: pen and ten, bed and red."
          ]
        },
        {
          "heading": "The Little Red Hen",
          "points": [
            "A little red hen had ten eggs in a basket.",
            "She wanted to buy a jet, a vest and a pet, so she went to sell her eggs.",
            "She and her pet dog Ted became good friends."
          ]
        }
      ],
      "terms": [
        {
          "term": "Short e",
          "meaning": "The e sound in hen."
        },
        {
          "term": "Rhyme",
          "meaning": "Words that end with the same sound."
        },
        {
          "term": "Basket",
          "meaning": "A container made of strips of cane."
        }
      ],
      "qa": [
        {
          "q": "How many eggs did the hen have?",
          "a": "She had ten eggs."
        },
        {
          "q": "What was the pet dog's name?",
          "a": "The dog was named Ted."
        }
      ],
      "quiz": [
        {
          "q": "Which word has the short e sound?",
          "options": [
            "pig",
            "pot",
            "bun",
            "pen"
          ],
          "answer": 3,
          "explain": "Pen has the short e sound."
        },
        {
          "q": "What colour was the hen?",
          "options": [
            "Red",
            "Black",
            "White",
            "Blue"
          ],
          "answer": 0,
          "explain": "It was a little red hen."
        },
        {
          "q": "How many eggs were in the basket?",
          "options": [
            "Five",
            "Ten",
            "Two",
            "Twelve"
          ],
          "answer": 1,
          "explain": "The hen had ten eggs."
        },
        {
          "q": "What was the dog's name?",
          "options": [
            "Sam",
            "Tom",
            "Ted",
            "Max"
          ],
          "answer": 2,
          "explain": "The pet dog was Ted."
        },
        {
          "q": "Which word rhymes with ten?",
          "options": [
            "pot",
            "cat",
            "bus",
            "pen"
          ],
          "answer": 3,
          "explain": "Ten and pen end with en."
        }
      ]
    },
    {
      "id": "rb2-vowels-i-o-u",
      "title": "Vowel Sounds i, o and u",
      "section": "Rainbow",
      "summary": "We read short words with the i, o and u sounds, like big, hot and bug.",
      "notes": [
        {
          "heading": "Short i",
          "points": [
            "Words: big, bin, dip, fig, lip, wig.",
            "A big pig in a wig. A wet bib."
          ]
        },
        {
          "heading": "Short o",
          "points": [
            "Words: hot, pot, mop, box, log, top.",
            "A hot pot, a wet mop, a red box."
          ]
        },
        {
          "heading": "Short u",
          "points": [
            "Words: bug, jug, mug, bun, sun, cup.",
            "The bug is on the mug."
          ]
        }
      ],
      "terms": [
        {
          "term": "Short i",
          "meaning": "The i sound in pin."
        },
        {
          "term": "Short o",
          "meaning": "The o sound in pot."
        },
        {
          "term": "Short u",
          "meaning": "The u sound in cup."
        }
      ],
      "qa": [
        {
          "q": "Name two words with the short o sound.",
          "a": "Hot and pot."
        },
        {
          "q": "Name two words with the short u sound.",
          "a": "Bug and jug."
        }
      ],
      "quiz": [
        {
          "q": "Which word has the short i sound?",
          "options": [
            "fig",
            "fan",
            "fox",
            "fun"
          ],
          "answer": 0,
          "explain": "Fig has the short i sound."
        },
        {
          "q": "Which word has the short o sound?",
          "options": [
            "bat",
            "box",
            "bed",
            "bus"
          ],
          "answer": 1,
          "explain": "Box has the short o sound."
        },
        {
          "q": "Which word has the short u sound?",
          "options": [
            "bin",
            "ban",
            "bun",
            "bon"
          ],
          "answer": 2,
          "explain": "Bun has the short u sound."
        },
        {
          "q": "Which word rhymes with pot?",
          "options": [
            "pin",
            "pen",
            "pup",
            "hot"
          ],
          "answer": 3,
          "explain": "Pot and hot end with ot."
        },
        {
          "q": "Which word rhymes with jug?",
          "options": [
            "mug",
            "jam",
            "jet",
            "jog"
          ],
          "answer": 0,
          "explain": "Jug and mug end with ug."
        }
      ]
    },
    {
      "id": "rb2-my-body-and-action-words",
      "title": "My Body, Action Words and Rhymes",
      "section": "Rainbow",
      "summary": "We name body parts and sense organs, and use action words like clap, jump and run.",
      "notes": [
        {
          "heading": "My body",
          "points": [
            "We have a head, hair, eyes, a nose and lips.",
            "We have hands, fingers, legs, feet and toes."
          ]
        },
        {
          "heading": "My sense organs",
          "points": [
            "We see with our eyes and hear with our ears.",
            "We smell with our nose, taste with our tongue and feel with our skin."
          ]
        },
        {
          "heading": "Action words",
          "points": [
            "Action words tell what we do: clap, jump, run, kick, sit, stand.",
            "In the rhyme Clap Your Hands, we do the actions as we sing."
          ]
        }
      ],
      "terms": [
        {
          "term": "Sense organ",
          "meaning": "A body part that helps us know things, like the eye."
        },
        {
          "term": "Action word",
          "meaning": "A word that tells what we do."
        },
        {
          "term": "Rhyme",
          "meaning": "A short song."
        }
      ],
      "qa": [
        {
          "q": "What do we smell with?",
          "a": "We smell with our nose."
        },
        {
          "q": "Name two action words.",
          "a": "Clap and jump."
        }
      ],
      "quiz": [
        {
          "q": "We hear with our ____.",
          "options": [
            "eyes",
            "ears",
            "nose",
            "hands"
          ],
          "answer": 1,
          "explain": "Ears help us hear."
        },
        {
          "q": "We see with our ____.",
          "options": [
            "ears",
            "feet",
            "eyes",
            "lips"
          ],
          "answer": 2,
          "explain": "Eyes help us see."
        },
        {
          "q": "We taste with our ____.",
          "options": [
            "nose",
            "ears",
            "toes",
            "tongue"
          ],
          "answer": 3,
          "explain": "The tongue helps us taste."
        },
        {
          "q": "Which is an action word?",
          "options": [
            "run",
            "red",
            "book",
            "cup"
          ],
          "answer": 0,
          "explain": "Run is an action word."
        },
        {
          "q": "How many sense organs do we use for the five senses?",
          "options": [
            "Two",
            "Five",
            "Three",
            "Nine"
          ],
          "answer": 1,
          "explain": "Eyes, ears, nose, tongue and skin."
        }
      ]
    },
    {
      "id": "rb2-a-an-and-and",
      "title": "Use of and, a and an",
      "section": "Rainbow",
      "summary": "We join two words with and, and use a before consonant sounds and an before vowel sounds.",
      "notes": [
        {
          "heading": "Using and",
          "points": [
            "And joins two words: a tap and a top, a pen and a pan.",
            "A bag and a cap."
          ]
        },
        {
          "heading": "Using a",
          "points": [
            "We use **a** before words that begin with a consonant sound.",
            "A pet, a hen, a jet."
          ]
        },
        {
          "heading": "Using an",
          "points": [
            "We use **an** before words that begin with a vowel sound.",
            "An egg, an owl, an axe, an ice cream."
          ]
        }
      ],
      "terms": [
        {
          "term": "And",
          "meaning": "A word that joins two things."
        },
        {
          "term": "A",
          "meaning": "Used before a consonant sound, like a pen."
        },
        {
          "term": "An",
          "meaning": "Used before a vowel sound, like an egg."
        }
      ],
      "qa": [
        {
          "q": "Which comes before egg, a or an?",
          "a": "An comes before egg."
        },
        {
          "q": "Write one example with and.",
          "a": "A pen and a pan."
        }
      ],
      "quiz": [
        {
          "q": "____ egg",
          "options": [
            "A",
            "And",
            "An",
            "The"
          ],
          "answer": 2,
          "explain": "Egg begins with a vowel sound."
        },
        {
          "q": "____ pen",
          "options": [
            "An",
            "And",
            "Is",
            "A"
          ],
          "answer": 3,
          "explain": "Pen begins with a consonant."
        },
        {
          "q": "____ owl",
          "options": [
            "An",
            "A",
            "Is",
            "Am"
          ],
          "answer": 0,
          "explain": "Owl begins with o, a vowel."
        },
        {
          "q": "A bat ____ a ball",
          "options": [
            "an",
            "and",
            "a",
            "is"
          ],
          "answer": 1,
          "explain": "And joins the two things."
        },
        {
          "q": "____ axe",
          "options": [
            "A",
            "Is",
            "An",
            "On"
          ],
          "answer": 2,
          "explain": "Axe begins with a vowel sound."
        }
      ]
    },
    {
      "id": "rb2-blends-and-pointing-words",
      "title": "Blends and This, That, These, Those",
      "section": "Rainbow",
      "summary": "We read letter blends like fr and ch, and use this, that, these and those to point.",
      "notes": [
        {
          "heading": "Blends",
          "points": [
            "Letters can join to make one sound: fr in frog, cr in crown, ch in chair, sh in ship.",
            "Examples: frock, fruits, chin, watch, shoe, sheep."
          ]
        },
        {
          "heading": "This and that",
          "points": [
            "We say **this** for one thing near us: This is a pen.",
            "We say **that** for one thing far from us: That is a bus."
          ]
        },
        {
          "heading": "These and those",
          "points": [
            "We say **these** for many things near us: These are pens.",
            "We say **those** for many things far from us: Those are birds."
          ]
        }
      ],
      "terms": [
        {
          "term": "Blend",
          "meaning": "Two letters that join to make one sound."
        },
        {
          "term": "This",
          "meaning": "Points to one thing that is near."
        },
        {
          "term": "Those",
          "meaning": "Points to many things that are far."
        }
      ],
      "qa": [
        {
          "q": "When do we use these?",
          "a": "We use these for many things that are near."
        },
        {
          "q": "Name a word with sh.",
          "a": "Ship."
        }
      ],
      "quiz": [
        {
          "q": "Which word begins with the sh blend?",
          "options": [
            "chin",
            "frog",
            "crown",
            "ship"
          ],
          "answer": 3,
          "explain": "Ship begins with sh."
        },
        {
          "q": "Which word begins with ch?",
          "options": [
            "chair",
            "ship",
            "frog",
            "crab"
          ],
          "answer": 0,
          "explain": "Chair begins with ch."
        },
        {
          "q": "____ is a pen. (one pen, near you)",
          "options": [
            "These",
            "This",
            "Those",
            "They"
          ],
          "answer": 1,
          "explain": "One thing near is this."
        },
        {
          "q": "____ are birds. (many, far away)",
          "options": [
            "This",
            "That",
            "Those",
            "These"
          ],
          "answer": 2,
          "explain": "Many things far away use those."
        },
        {
          "q": "____ is a bus. (one, far away)",
          "options": [
            "This",
            "These",
            "Those",
            "That"
          ],
          "answer": 3,
          "explain": "One thing far is that."
        }
      ]
    },
    {
      "id": "rb2-let-us-read",
      "title": "Let's Read: I am, He is, She is, In, On, Behind",
      "section": "Rainbow",
      "summary": "We read simple sentences with I am, he is, she is, his and her, and words that tell where things are.",
      "notes": [
        {
          "heading": "I am, he is, she is",
          "points": [
            "I am Gagan. He is a boy. She is a girl.",
            "This is Gurjot. She is running."
          ]
        },
        {
          "heading": "His and her",
          "points": [
            "We say **his** for a boy: This is Tom. His cat is red.",
            "We say **her** for a girl: This is Sheena. Her cake is on the table."
          ]
        },
        {
          "heading": "Where is it?",
          "points": [
            "In, on and under tell where something is: the cat is in the bin.",
            "Behind and between: the boy is behind the tree."
          ]
        },
        {
          "heading": "Healthy habits",
          "points": [
            "Wash your hands before and after meals.",
            "Take a bath every day."
          ]
        }
      ],
      "terms": [
        {
          "term": "Pronoun",
          "meaning": "A small word that is used for a name, like he or she."
        },
        {
          "term": "Behind",
          "meaning": "At the back of something."
        },
        {
          "term": "Between",
          "meaning": "In the middle of two things."
        }
      ],
      "qa": [
        {
          "q": "What do we say for a girl, he or she?",
          "a": "We say she."
        },
        {
          "q": "When should we wash our hands?",
          "a": "Before and after a meal."
        }
      ],
      "quiz": [
        {
          "q": "Tom is a boy. ____ is running.",
          "options": [
            "He",
            "She",
            "It",
            "They"
          ],
          "answer": 0,
          "explain": "Tom is a boy, so we say he."
        },
        {
          "q": "Sheena is a girl. ____ cake is on the table.",
          "options": [
            "His",
            "Her",
            "Its",
            "Their"
          ],
          "answer": 1,
          "explain": "For a girl we say her."
        },
        {
          "q": "The cat is ____ the bin.",
          "options": [
            "on",
            "behind",
            "in",
            "between"
          ],
          "answer": 2,
          "explain": "The cat is inside the bin."
        },
        {
          "q": "The boy is ____ the tree, at the back of it.",
          "options": [
            "on",
            "in",
            "under",
            "behind"
          ],
          "answer": 3,
          "explain": "At the back is behind."
        },
        {
          "q": "When should we wash our hands?",
          "options": [
            "Before and after meals",
            "Never",
            "Only at night",
            "Only when it rains"
          ],
          "answer": 0,
          "explain": "Washing keeps us healthy."
        }
      ]
    },
    {
      "id": "rb2-my-computer",
      "title": "My Computer",
      "section": "Rainbow",
      "summary": "A rhyme where each part of a computer tells us what it does.",
      "notes": [
        {
          "heading": "Parts of a computer",
          "points": [
            "The **monitor** shows our work.",
            "The **mouse** helps us point and click.",
            "The **keyboard** has letters on its keys."
          ]
        },
        {
          "heading": "More parts",
          "points": [
            "The **headphones** help us listen carefully.",
            "The **C.P.U.** is like the brain of the computer."
          ]
        },
        {
          "heading": "Using it",
          "points": [
            "Put all the parts together and the computer is ready.",
            "We should handle a computer with care."
          ]
        }
      ],
      "terms": [
        {
          "term": "Monitor",
          "meaning": "The screen of a computer."
        },
        {
          "term": "Mouse",
          "meaning": "A small tool to point and click."
        },
        {
          "term": "Keyboard",
          "meaning": "Keys with letters and numbers."
        },
        {
          "term": "C.P.U.",
          "meaning": "The part that works like the brain of a computer."
        }
      ],
      "qa": [
        {
          "q": "What does the monitor show?",
          "a": "The monitor shows our work."
        },
        {
          "q": "What is on the keyboard?",
          "a": "Letters are on the keys."
        }
      ],
      "quiz": [
        {
          "q": "Which part shows our work?",
          "options": [
            "Mouse",
            "Monitor",
            "Keyboard",
            "Headphones"
          ],
          "answer": 1,
          "explain": "The monitor is the screen."
        },
        {
          "q": "Which part has letters on its keys?",
          "options": [
            "Monitor",
            "Mouse",
            "Keyboard",
            "C.P.U."
          ],
          "answer": 2,
          "explain": "The keyboard has keys."
        },
        {
          "q": "Which part do we move to click?",
          "options": [
            "Monitor",
            "Headphones",
            "Keyboard",
            "Mouse"
          ],
          "answer": 3,
          "explain": "We move the mouse."
        },
        {
          "q": "Which part is like the brain?",
          "options": [
            "C.P.U.",
            "Mouse",
            "Monitor",
            "Keyboard"
          ],
          "answer": 0,
          "explain": "The C.P.U. works like a brain."
        },
        {
          "q": "Which part do we put on our ears?",
          "options": [
            "Keyboard",
            "Headphones",
            "Mouse",
            "Monitor"
          ],
          "answer": 1,
          "explain": "Headphones go on the ears."
        }
      ]
    },
    {
      "id": "rb2-going-to-a-zoo",
      "title": "Going to a Zoo",
      "section": "Rainbow",
      "summary": "Pam and his dog Tom go to a zoo by bus, see animals, rest and eat nuts and buns.",
      "notes": [
        {
          "heading": "Going to the zoo",
          "points": [
            "Pam and his dog Tom go to a zoo by bus.",
            "Pam has a big bag with some nuts and six buns."
          ]
        },
        {
          "heading": "At the zoo",
          "points": [
            "They see a lion, deer, a fox, hens and pigs.",
            "Then they take some rest in the sun."
          ]
        },
        {
          "heading": "The end",
          "points": [
            "They eat nuts and buns.",
            "They have a lot of fun."
          ]
        }
      ],
      "terms": [
        {
          "term": "Zoo",
          "meaning": "A place where many animals are kept for us to see."
        },
        {
          "term": "Rest",
          "meaning": "To sit quietly after walking."
        },
        {
          "term": "Bun",
          "meaning": "A small soft bread."
        }
      ],
      "qa": [
        {
          "q": "How did Pam and Tom go to the zoo?",
          "a": "They went by bus."
        },
        {
          "q": "What was in Pam's bag?",
          "a": "Some nuts and six buns."
        }
      ],
      "quiz": [
        {
          "q": "Who went to the zoo with Pam?",
          "options": [
            "His cat Sam",
            "His hen",
            "His dog Tom",
            "His friend Neelu"
          ],
          "answer": 2,
          "explain": "Pam went with his dog Tom."
        },
        {
          "q": "How did they go to the zoo?",
          "options": [
            "By train",
            "By cycle",
            "By boat",
            "By bus"
          ],
          "answer": 3,
          "explain": "They went by bus."
        },
        {
          "q": "How many buns were in the bag?",
          "options": [
            "Six",
            "Two",
            "Ten",
            "Four"
          ],
          "answer": 0,
          "explain": "The bag had six buns."
        },
        {
          "q": "Which animal did they see?",
          "options": [
            "A whale",
            "A lion",
            "A camel",
            "A snake"
          ],
          "answer": 1,
          "explain": "They saw a lion."
        },
        {
          "q": "What did they do in the sun?",
          "options": [
            "Swam",
            "Slept in bed",
            "Rested and ate",
            "Played cricket"
          ],
          "answer": 2,
          "explain": "They rested and ate nuts and buns."
        }
      ]
    },
    {
      "id": "rb2-a-pet-hen",
      "title": "A Pet Hen",
      "section": "Rainbow",
      "summary": "Sam's red hen falls ill after eating a bun, then gets well with sun and a pill.",
      "notes": [
        {
          "heading": "Sam and his hen",
          "points": [
            "Sam had a pet hen. It was red and fat.",
            "It laid an egg in a day.",
            "Sam fed it dry peas."
          ]
        },
        {
          "heading": "The trouble",
          "points": [
            "One day Sam fed the hen a bun, just for fun.",
            "The hen got ill. It did not eat and did not lay eggs.",
            "It fell into a pit."
          ]
        },
        {
          "heading": "Getting well",
          "points": [
            "Sam put the hen in the sun and gave it a pill.",
            "The hen got well.",
            "Now it will eat peas and lay eggs. Sam will sell the eggs."
          ]
        }
      ],
      "terms": [
        {
          "term": "Pet",
          "meaning": "An animal we keep and care for."
        },
        {
          "term": "Pill",
          "meaning": "A small medicine to swallow."
        },
        {
          "term": "Ill",
          "meaning": "Not well."
        },
        {
          "term": "Pit",
          "meaning": "A hole in the ground."
        }
      ],
      "qa": [
        {
          "q": "What colour was Sam's hen?",
          "a": "Sam's hen was red."
        },
        {
          "q": "How did the hen get well?",
          "a": "Sam put it in the sun and gave it a pill."
        }
      ],
      "quiz": [
        {
          "q": "What colour was Sam's hen?",
          "options": [
            "White",
            "Black",
            "Blue",
            "Red"
          ],
          "answer": 3,
          "explain": "Sam's hen was red."
        },
        {
          "q": "What did the hen lay?",
          "options": [
            "An egg",
            "A bun",
            "A pill",
            "A pea"
          ],
          "answer": 0,
          "explain": "The hen laid eggs."
        },
        {
          "q": "What did Sam feed the hen in fun?",
          "options": [
            "A fish",
            "A bun",
            "A mango",
            "Rice"
          ],
          "answer": 1,
          "explain": "He fed it a bun in fun."
        },
        {
          "q": "Where did the hen fall?",
          "options": [
            "Into a river",
            "Off a bus",
            "Into a pit",
            "Into a box"
          ],
          "answer": 2,
          "explain": "It fell into a pit."
        },
        {
          "q": "What helped the hen get well?",
          "options": [
            "A game",
            "A bus ride",
            "A new bag",
            "The sun and a pill"
          ],
          "answer": 3,
          "explain": "Sam put it in the sun and gave a pill."
        }
      ]
    },
    {
      "id": "rb2-holi",
      "title": "Holi",
      "section": "Rainbow",
      "summary": "A child tells how friends play Holi with colours, water guns and balloons.",
      "notes": [
        {
          "heading": "The festival",
          "points": [
            "Holi is a festival of colours.",
            "Friends play Holi together."
          ]
        },
        {
          "heading": "The colours and fun",
          "points": [
            "There are five colours: yellow, blue, pink, red and green.",
            "Children have water guns filled with red-coloured water.",
            "Reet has a packet of balloons to fill with water."
          ]
        },
        {
          "heading": "At home",
          "points": [
            "Mother has made snacks for everyone.",
            "The children will enjoy and have fun."
          ]
        }
      ],
      "terms": [
        {
          "term": "Festival",
          "meaning": "A special day that people celebrate."
        },
        {
          "term": "Holi",
          "meaning": "The festival of colours."
        },
        {
          "term": "Water gun",
          "meaning": "A toy that sprays water."
        },
        {
          "term": "Balloon",
          "meaning": "A rubber bag filled with air or water."
        }
      ],
      "qa": [
        {
          "q": "What is Holi?",
          "a": "Holi is a festival of colours."
        },
        {
          "q": "What did mother make for the children?",
          "a": "Mother made snacks."
        }
      ],
      "quiz": [
        {
          "q": "Holi is a festival of ____.",
          "options": [
            "colours",
            "lights",
            "kites",
            "sweets only"
          ],
          "answer": 0,
          "explain": "Holi is the festival of colours."
        },
        {
          "q": "How many colours did the child have?",
          "options": [
            "Two",
            "Five",
            "Three",
            "Ten"
          ],
          "answer": 1,
          "explain": "Yellow, blue, pink, red and green."
        },
        {
          "q": "Who has a packet of balloons?",
          "options": [
            "Paali",
            "Mother",
            "Reet",
            "Tina"
          ],
          "answer": 2,
          "explain": "Reet has the balloons."
        },
        {
          "q": "What did mother make?",
          "options": [
            "A kite",
            "A doll",
            "A toy",
            "Snacks"
          ],
          "answer": 3,
          "explain": "Mother made snacks."
        },
        {
          "q": "What did the children fill in the water guns?",
          "options": [
            "Red-coloured water",
            "Milk",
            "Juice",
            "Tea"
          ],
          "answer": 0,
          "explain": "They filled them with red-coloured water."
        }
      ]
    },
    {
      "id": "rb2-rhyme-time",
      "title": "Rhyme Time: Fruits, Vegetables, Animals and Nature",
      "section": "Rainbow",
      "summary": "Short rhymes about fresh fruits, vegetables, animals, traffic lights and the sky.",
      "notes": [
        {
          "heading": "Fruits and vegetables",
          "points": [
            "Fruits like mango and apple are sweet.",
            "Vegetables like tomatoes make our cheeks red."
          ]
        },
        {
          "heading": "Traffic lights",
          "points": [
            "A red light means stop.",
            "A green light means go.",
            "A yellow light means wait."
          ]
        },
        {
          "heading": "Nature",
          "points": [
            "In the sky we see the sun, the moon and the stars.",
            "Number names: one, two, three, four, five."
          ]
        }
      ],
      "terms": [
        {
          "term": "Traffic light",
          "meaning": "A light that tells cars when to stop and go."
        },
        {
          "term": "Nature",
          "meaning": "Sky, trees, rivers and all that is not made by people."
        },
        {
          "term": "Vegetable",
          "meaning": "A plant food we cook, like a tomato."
        }
      ],
      "qa": [
        {
          "q": "What does a red traffic light mean?",
          "a": "It means stop."
        },
        {
          "q": "Name two things in the sky.",
          "a": "The sun and the moon."
        }
      ],
      "quiz": [
        {
          "q": "What does a green light mean?",
          "options": [
            "Stop",
            "Go",
            "Sleep",
            "Sit"
          ],
          "answer": 1,
          "explain": "Green means go."
        },
        {
          "q": "What does a red light mean?",
          "options": [
            "Go",
            "Run",
            "Stop",
            "Jump"
          ],
          "answer": 2,
          "explain": "Red means stop."
        },
        {
          "q": "Which one is a fruit?",
          "options": [
            "Tomato",
            "Potato",
            "Peas",
            "Mango"
          ],
          "answer": 3,
          "explain": "Mango is a fruit."
        },
        {
          "q": "Which one do we see in the sky at night?",
          "options": [
            "The moon",
            "A bus",
            "A hen",
            "A bag"
          ],
          "answer": 0,
          "explain": "The moon shines at night."
        },
        {
          "q": "Which number name is 3?",
          "options": [
            "two",
            "three",
            "five",
            "nine"
          ],
          "answer": 1,
          "explain": "Three is 3."
        }
      ]
    },
  ]
});
