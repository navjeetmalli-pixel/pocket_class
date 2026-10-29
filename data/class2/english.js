// Class 2 English: grammar and writing skills, plus the lessons of Mridang.
// Format: see CONTENT_GUIDE.md. All examples are original.
StudyData.add(2, "english", {
  // What this content follows. match: "textbook" | "older-book" | "topic". Set reviewed to a date once a teacher has checked it.
  syllabus: {board: "CBSE", match: "textbook", books: ["Mridang"], note: "Grammar and writing, plus every lesson of Mridang (summarised in our own words).", reviewed: false},
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
    // ───────────────────────────── MRIDANG ─────────────────────────────
    {
      id: "my-bicycle",
      title: "My Bicycle",
      section: "Mridang",
      summary: "A happy poem about a child's red bicycle. The child rings the bell, wears a helmet and rides everywhere. The lesson also teaches the parts of a bicycle and when to say a and an.",
      notes: [
        {
          heading: "The poem",
          points: [
            "The child has a **red** bicycle. The seat is blue, and the tyres and pedals are black.",
            "The bell goes trin, trin, trin, and friends move aside.",
            "The bicycle is sometimes fast and sometimes slow. It needs air in the tyres to keep going.",
            "The child wears a little **helmet** to stay safe."
          ]
        },
        {
          heading: "Parts of a bicycle",
          points: [
            "Seat, pedal, wheel, bell, handle, carrier and brake.",
            "A tricycle has three wheels. A wheelchair helps people who cannot walk easily."
          ]
        },
        {
          heading: "A and an",
          points: [
            "We say **an** before words that begin with the vowel sounds a, e, i, o, u: an ant, an axe, an apple, an egg.",
            "We say **a** before other words: a cat, a mat, a pan."
          ]
        }
      ],
      formulas: [
        "Red bicycle, blue seat, black tyres",
        "Safety: wear a helmet",
        "an + vowel sound: an apple",
        "a + other sounds: a cat"
      ],
      terms: [
        { term: "Pedal", meaning: "The part we push with our feet to move a bicycle." },
        { term: "Helmet", meaning: "A hard cap that keeps our head safe." },
        { term: "Brake", meaning: "The part that makes a bicycle stop." }
      ],
      qa: [
        { q: "What colour is the child's bicycle?", a: "The bicycle is red." },
        { q: "Why does the child wear a helmet?", a: "A helmet keeps the head safe while riding." },
        { q: "Write a or an: ___ ant.", a: "an ant." }
      ],
      quiz: [
        {
          q: "What colour is the bicycle in the poem?",
          options: ["red", "blue", "green", "yellow"],
          answer: 0,
          explain: "The poem begins with a red bicycle."
        },
        {
          q: "What sound does the bell make?",
          options: ["tick, tock", "trin, trin, trin", "moo, moo", "ding, dong"],
          answer: 1,
          explain: "The bell goes trin, trin, trin."
        },
        { q: "Which part do we ring to tell friends to move aside?", options: ["seat", "brake", "bell", "wheel"], answer: 2, explain: "We ring the bell." },
        {
          q: "What does the child put on before riding?",
          options: ["a hat for the sun", "a scarf", "a raincoat", "a helmet"],
          answer: 3,
          explain: "A helmet keeps the head safe."
        },
        {
          q: "Which is correct?",
          options: ["an apple", "a apple", "an cat", "a egg"],
          answer: 0,
          explain: "Apple begins with a vowel sound, so we say an apple."
        }
      ]
    },
    {
      id: "picture-reading-out-out",
      title: "Picture Reading (Out! Out!)",
      section: "Mridang",
      summary: "Look at a picture and talk about children having fun. Then read the story of Jeet and Babli, who play bat and ball. When their ball is lost, Babli makes a new one from rags, paper, wool and string.",
      notes: [
        {
          heading: "The story",
          points: [
            "Jeet and Babli play on a holiday. They skip a rope, play hide and seek and then bat and ball.",
            "Babli hits the ball into Mohit's garden. His house is locked, so they cannot find the ball, and the game stops.",
            "Babli knows how to make a ball. She rolls rags, paper and wool and ties them with a string.",
            "In the new game the ball opens up in the air. Babli catches a piece of rag and shouts, OUT! OUT!"
          ]
        },
        {
          heading: "Language work",
          points: [
            "Opposites: up and down, in and out, open and close, hot and cold, big and small.",
            "We can join two sentences with **and**: Suresh went to school. Gopal went to school. becomes Suresh and Gopal went to school.",
            "The word **an** comes before e-words such as an egg, an engine and an elephant."
          ]
        },
        { heading: "Lesson to learn", points: ["We can make a toy from things around us.", "Old things can be used again, and playing together is fun."] }
      ],
      formulas: [
        "Children: Jeet and Babli",
        "Ball made of rags, paper, wool and string",
        "up - down, in - out",
        "Join with and"
      ],
      terms: [
        { term: "Opposite", meaning: "A word that means the other way, such as up and down." },
        { term: "Rag", meaning: "A small old piece of cloth." },
        { term: "Skip", meaning: "To jump over a rope as it swings." }
      ],
      qa: [
        { q: "What did Babli use to make a ball?", a: "She used rags, paper and wool, and tied them with a string." },
        { q: "Why did the first game stop?", a: "The ball went into Mohit's garden and his house was locked, so they could not find it." },
        { q: "Write the opposite of up.", a: "down." }
      ],
      quiz: [
        {
          q: "Who are the two children in the story?",
          options: ["Mohit and Babli", "Jeet and Mohit", "Babli and Rani", "Jeet and Babli"],
          answer: 3,
          explain: "Jeet and Babli play together."
        },
        {
          q: "Which game did they play last?",
          options: ["bat and ball", "kabaddi", "gilli-danda", "ludo"],
          answer: 0,
          explain: "They decided to play bat and ball."
        },
        {
          q: "Where did the ball go?",
          options: ["into the river", "into Mohit's garden", "on the roof", "into the school"],
          answer: 1,
          explain: "It went into Mohit's garden."
        },
        { q: "Who shouted OUT! OUT!?", options: ["Jeet", "Mohit", "Babli", "the teacher"], answer: 2, explain: "Babli caught a piece of rag and shouted." },
        { q: "What is the opposite of 'open'?", options: ["up", "hot", "small", "close"], answer: 3, explain: "Open and close are opposites." }
      ]
    },
    {
      id: "it-is-fun",
      title: "It is Fun",
      section: "Mridang",
      summary: "A joyful poem about acting like animals: leaping like a lamb, climbing like a cat, hopping like a frog, swimming like a fish, trotting like a horse and flying like a bird.",
      notes: [
        {
          heading: "The poem",
          points: [
            "It is fun to be this and fun to be that.",
            "The child leaps like a lamb, climbs like a cat, hops like a frog, swims like a fish, trots like a horse and flies like a bird.",
            "The child can act just like them all."
          ]
        },
        {
          heading: "Action words",
          points: [
            "Climb, leap, swim, trot and fly are **action words** (verbs).",
            "Animals move in different ways: the horse trots, the lamb leaps, the snake crawls, the squirrel runs and the monkey swings."
          ]
        },
        {
          heading: "Letter I",
          points: [
            "I is both a letter and a word. We use I for ourselves.",
            "Short i words: inch, inkpot, igloo, pin, list, fish, bin, ring, ship."
          ]
        }
      ],
      formulas: ["leap - lamb, climb - cat, hop - frog", "swim - fish, trot - horse, fly - bird", "I = myself"],
      terms: [
        { term: "Action word", meaning: "A word that tells what someone does." },
        { term: "Leap", meaning: "To jump high or far." },
        { term: "Trot", meaning: "To run at an easy pace, like a horse." }
      ],
      qa: [
        { q: "How does the child hop?", a: "The child hops like a frog." },
        { q: "Which animal trots?", a: "A horse trots." },
        { q: "Write a sentence with the word swim.", a: "Fish swim in water." }
      ],
      quiz: [
        { q: "Who leaps in the poem?", options: ["a cat", "a fish", "a lamb", "a bird"], answer: 2, explain: "The child leaps like a lamb." },
        { q: "Who climbs in the poem?", options: ["a frog", "a horse", "a lamb", "a cat"], answer: 3, explain: "The child climbs like a cat." },
        { q: "Which animal swims?", options: ["a fish", "a horse", "a bird", "a frog on the ground"], answer: 0, explain: "A fish swims." },
        { q: "Which word is an action word?", options: ["lamb", "fly", "blue", "tree"], answer: 1, explain: "Fly tells what a bird does." },
        { q: "What does I stand for?", options: ["my friend", "my teacher", "myself", "my dog"], answer: 2, explain: "I is the word we use for ourselves." }
      ]
    },
    {
      id: "seeing-without-seeing",
      title: "Seeing without Seeing",
      section: "Mridang",
      summary: "Onshangla meets a new boy at school who cannot see. Her mother, Ava, plays a game with her. With her eyes covered, Onshangla finds things by touch, smell, hearing and taste, and learns to be kind to people who cannot see.",
      notes: [
        {
          heading: "The story",
          points: [
            "A new boy who cannot see joins Onshangla's class. She wonders how he will do things.",
            "Ava ties a scarf over Onshangla's eyes and gives her things to find out.",
            "She finds a rose by touch and smell, a bell by hearing, and a glass of orange juice by touch and taste.",
            "When the scarf is removed, Onshangla is happy to see her mother."
          ]
        },
        {
          heading: "What we learn",
          points: [
            "We can find out about things with our other senses: touch, smell, hearing and taste.",
            "A child who cannot see may face difficulties, so we should be friends and help.",
            "We must take care of our eyes."
          ]
        },
        {
          heading: "Looking after eyes",
          points: [
            "Good for eyes: read in good light, sit straight, eat carrots and vegetables, splash water on closed eyes.",
            "Bad for eyes: sitting very close to the TV, staring at the sun, using a mobile for a long time."
          ]
        }
      ],
      formulas: [
        "Senses: see, hear, smell, taste, touch",
        "Rose - touch and smell; bell - hearing; juice - taste",
        "Be kind to everyone"
      ],
      terms: [
        { term: "Sniff", meaning: "To smell something with short breaths." },
        { term: "Quiet", meaning: "Making little or no noise." },
        { term: "Difficulty", meaning: "Something that is hard to do." }
      ],
      qa: [
        { q: "Why was Onshangla quiet when she came home?", a: "A new boy who cannot see had joined her class, and she was thinking about him." },
        { q: "How did Onshangla know it was a rose?", a: "She touched it and found it soft, and then she smelled it." },
        { q: "Name one thing that is bad for our eyes.", a: "Staring at the sun is bad for our eyes." }
      ],
      quiz: [
        {
          q: "What is Onshangla's mother called in the story?",
          options: ["Amma", "Ava", "Didi", "Meena"],
          answer: 1,
          explain: "Onshangla calls her mother Ava."
        },
        {
          q: "What did Ava tie over Onshangla's eyes?",
          options: ["a cap", "a rope", "a scarf", "a ribbon on her hair"],
          answer: 2,
          explain: "Ava tied a scarf over her eyes."
        },
        { q: "What flower did Ava hold?", options: ["a lotus", "a marigold", "a jasmine", "a rose"], answer: 3, explain: "It was a rose." },
        {
          q: "How did Onshangla know the bell?",
          options: ["by its sound", "by its taste", "by its smell", "by its colour"],
          answer: 0,
          explain: "She heard its musical sound."
        },
        { q: "What was in the glass?", options: ["water", "orange juice", "milk", "tea"], answer: 1, explain: "She tasted it and said it was orange juice." }
      ]
    },
    {
      id: "come-back-soon",
      title: "Come Back Soon",
      section: "Mridang",
      summary: "A rhyme about travelling by bus, train, boat, plane, taxi and car, near or far, and even by rocket to the moon. The lesson sorts vehicles by where they go: land, air or water.",
      notes: [
        {
          heading: "The poem",
          points: [
            "We can take a bus, a train, a boat or a plane. We can take a taxi or a car.",
            "We can go near or far. We can even take a rocket to the moon, but we must come back soon."
          ]
        },
        {
          heading: "Land, air and water",
          points: [
            "On land: bus, car, jeep, train, truck, bicycle, cart, tractor, taxi.",
            "In the air: aeroplane, helicopter.",
            "On water: ship, boat, yacht, raft."
          ]
        },
        {
          heading: "Vowel sound u",
          points: [
            "Short u words: umbrella, truck, duck, jug, mug, cup, bus, rug, hut.",
            "We say **an umbrella** and **a bus**."
          ]
        }
      ],
      formulas: ["Land: bus, train", "Air: aeroplane, helicopter", "Water: ship, boat", "Rocket to the moon"],
      terms: [
        { term: "Vehicle", meaning: "Something that carries people or goods from one place to another." },
        { term: "Near", meaning: "Not far away." },
        { term: "Rocket", meaning: "A vehicle that goes into space." }
      ],
      qa: [
        { q: "Name three vehicles from the poem.", a: "Bus, train and boat (also plane, taxi, car and rocket)." },
        { q: "Where does a ship travel?", a: "A ship travels on water." },
        { q: "Where should we come back from the moon?", a: "We should come back soon, back home." }
      ],
      quiz: [
        {
          q: "Which vehicle goes to the moon in the poem?",
          options: ["a rocket", "a bus", "a boat", "a taxi"],
          answer: 0,
          explain: "The poem says take a rocket to the moon."
        },
        { q: "Which vehicle flies in the air?", options: ["train", "plane", "boat", "taxi"], answer: 1, explain: "A plane flies." },
        { q: "Which vehicle moves on water?", options: ["bus", "truck", "boat", "jeep"], answer: 2, explain: "A boat moves on water." },
        { q: "Which vehicle moves on land?", options: ["ship", "helicopter", "yacht", "train"], answer: 3, explain: "A train runs on land." },
        {
          q: "What should we do after going to the moon?",
          options: ["come back soon", "stay for ever", "sleep", "forget home"],
          answer: 0,
          explain: "The poem says be sure to come back soon."
        }
      ]
    },
    {
      id: "between-home-and-school",
      title: "Between Home and School",
      section: "Mridang",
      summary: "Ravi tells how he and his friend walk to school through paddy fields, a mango grove and the main road. They have fun on the way and still reach on time. The lesson also practises the ch sound.",
      notes: [
        {
          heading: "The story",
          points: [
            "Ravi studies in Class 2. He and his friend go to school on foot.",
            "They pass the paddy fields and the mango grove and then reach the main road. It is the shortest route.",
            "On the way they jump over canals, climb trees, swing from branches and watch garden lizards. Still, they reach school on time."
          ]
        },
        {
          heading: "Language work",
          points: [
            "The **ch** sound: lunch, chips, teacher, chart, chair, chalk.",
            "Make sentences with words such as gate, road, tree, lunch and lizard."
          ]
        },
        { heading: "Doing", points: ["Draw the route from your home to your school.", "Collect pictures of vehicles and paste them on a chart."] }
      ],
      formulas: ["Route: paddy fields - mango grove - main road", "ch words: chair, chalk, chart", "Reach school on time"],
      terms: [
        { term: "Route", meaning: "The way we go from one place to another." },
        { term: "Canal", meaning: "A long channel dug to carry water." },
        { term: "Grove", meaning: "A small group of trees." }
      ],
      qa: [
        { q: "How do Ravi and his friend go to school?", a: "They go on foot." },
        { q: "Name two places they pass on the way.", a: "They pass the paddy fields and the mango grove." },
        { q: "Write a sentence with the word lunch.", a: "I eat my lunch at school." }
      ],
      quiz: [
        { q: "In which class does Ravi study?", options: ["Class 1", "Class 3", "Class 5", "Class 2"], answer: 3, explain: "Ravi studies in Class 2." },
        { q: "How do the friends reach school?", options: ["on foot", "by bus", "by train", "by boat"], answer: 0, explain: "They walk to school." },
        {
          q: "Which place do they pass first?",
          options: ["the main road", "paddy fields", "the school gate", "a market"],
          answer: 1,
          explain: "They pass the paddy fields, then the mango grove, then reach the main road."
        },
        {
          q: "What do they watch on the way?",
          options: ["aeroplanes", "elephants", "garden lizards", "whales"],
          answer: 2,
          explain: "They watch garden lizards."
        },
        { q: "Which word has the ch sound?", options: ["table", "book", "door", "chair"], answer: 3, explain: "Chair begins with ch." }
      ]
    },
    {
      id: "this-is-my-town",
      title: "This is My Town",
      section: "Mridang",
      summary: "A cumulative poem moves from a town to a street, a house, a room, a bed, a basket and some flowers, and then back out again. The lesson also teaches the sh sound and how to write an address.",
      notes: [
        {
          heading: "The poem",
          points: [
            "In my town there are streets. In my street there are houses. In my house there are rooms.",
            "In my room there is a bed. On the bed there is a basket. In the basket there are some flowers.",
            "Then the poem goes back: Flowers in a basket, basket on the bed, bed in the room, room in the house, house in the street, street in the town."
          ]
        },
        { heading: "Words that show place", points: ["**in** and **on** tell us where things are: flowers in the basket, the basket on the bed.", "We say **there is** for one thing and **there are** for many things."] },
        {
          heading: "Language work",
          points: [
            "The **sh** sound: shirt, shell, shoe, shorts, shawl.",
            "An address tells where we live: house number, street, area, town, state and country."
          ]
        }
      ],
      formulas: [
        "town - street - house - room - bed - basket - flowers",
        "in, on, there is, there are",
        "sh words: shirt, shoe"
      ],
      terms: [
        { term: "Town", meaning: "A place where many people live, bigger than a village." },
        { term: "Address", meaning: "The details that tell where a person lives." },
        { term: "Street", meaning: "A small road with houses on it." }
      ],
      qa: [
        { q: "What is on the bed in the poem?", a: "A basket is on the bed." },
        { q: "What is in the basket?", a: "Some flowers are in the basket." },
        { q: "Name two things that begin with sh.", a: "Shirt and shoe." }
      ],
      quiz: [
        {
          q: "Where are the flowers?",
          options: ["on the roof", "in the river", "in the basket", "under the tree"],
          answer: 2,
          explain: "Flowers are in the basket."
        },
        {
          q: "Where is the basket?",
          options: ["on the street", "in the garden", "on the wall", "on the bed"],
          answer: 3,
          explain: "The basket is on the bed."
        },
        { q: "Where is the bed?", options: ["in the room", "in the street", "in the basket", "in the town"], answer: 0, explain: "The bed is in the room." },
        { q: "Which word has the sh sound?", options: ["chair", "shoe", "tree", "frog"], answer: 1, explain: "Shoe begins with sh." },
        {
          q: "What does an address tell us?",
          options: ["what we eat", "how old we are", "where we live", "what we like"],
          answer: 2,
          explain: "An address says where we live."
        }
      ]
    },
    {
      id: "a-show-of-clouds",
      title: "A Show of Clouds",
      section: "Mridang",
      summary: "A child lies on their back, looks at the sky and sees clouds that look like a big white bear, a ship sailing on a white sea and an elephant waving its trunk. It is fun to see whatever you want in the clouds.",
      notes: [
        {
          heading: "The poem",
          points: [
            "The child lies on their back and looks up at the sky.",
            "One cloud looks like a big white bear. Another looks like a ship on a white sea. Another looks like an elephant waving its trunk.",
            "It is fun to see whatever we want to see."
          ]
        },
        {
          heading: "Clouds",
          points: [
            "Clouds can be white, grey or black. At sunset they can look red or orange.",
            "We can watch clouds and say what shapes we see. All answers are welcome."
          ]
        },
        {
          heading: "Language work",
          points: [
            "The **ck** sound: back, pack, rack, tick, pick, thick, duck, truck.",
            "Speak in full sentences: When I look up, I see a bird."
          ]
        }
      ],
      formulas: ["Clouds look like: bear, ship, elephant", "Lie on my back and look up", "ck words: back, pack, duck"],
      terms: [
        { term: "Cloud", meaning: "A white or grey shape in the sky made of tiny drops of water." },
        { term: "Sailing", meaning: "Moving over water in a boat or ship." },
        { term: "Trunk", meaning: "The long nose of an elephant." }
      ],
      qa: [
        { q: "What does the child see first in the clouds?", a: "A big white bear." },
        { q: "What is the elephant doing?", a: "It is waving its trunk." },
        { q: "What do you see in the sky at night?", a: "Moon and stars." }
      ],
      quiz: [
        {
          q: "How is the child lying?",
          options: ["on their tummy", "on their back", "on a tree", "in water"],
          answer: 1,
          explain: "The child lies on their back."
        },
        { q: "What does the child look at?", options: ["the floor", "a book", "the sky", "a TV"], answer: 2, explain: "The child looks up at the sky." },
        { q: "Which animal looks down at the child?", options: ["a dog", "a horse", "a lion", "a bear"], answer: 3, explain: "A big white bear looks down." },
        { q: "What sails on a white sea?", options: ["a ship", "a bus", "a car", "a cow"], answer: 0, explain: "A ship sails on a white sea of cloud." },
        { q: "Which word has the ck sound?", options: ["bird", "duck", "tree", "sky"], answer: 1, explain: "Duck ends with ck." }
      ]
    },
    {
      id: "my-name",
      title: "My Name",
      section: "Mridang",
      summary: "A little fly forgets his name and asks an ant, a tree, a cow, the grass and a leaf. When the wind blows the leaf away, the fly remembers: his name is Fly. The lesson also practises the sounds bl and pl.",
      notes: [
        {
          heading: "The story",
          points: [
            "A little fly cannot remember his name. He asks the ant, who sends him to the tree.",
            "The tree sends him to the cow in its shade. The cow sends him to the grass. The grass sends him to the leaves fallen on it.",
            "As the leaf is about to answer, the wind blows and the leaf begins to fly. Seeing that, the fly remembers: My name is Fly!"
          ]
        },
        {
          heading: "What we learn",
          points: [
            "Our name is part of who we are. Every name has a meaning.",
            "We can ask politely: Dear tree, do you know my name?"
          ]
        },
        {
          heading: "Language work",
          points: [
            "The blends **bl** and **pl**: blue, black, blanket, plum, plate, plant.",
            "Sounds of animals: crow caws, sparrow chirps, lion roars, cat meows, bee buzzes, duck quacks."
          ]
        }
      ],
      formulas: ["ant - tree - cow - grass - leaf", "Name of the fly: Fly", "bl: blue, black; pl: plum, plate"],
      terms: [
        { term: "Remember", meaning: "To bring something back to your mind." },
        { term: "Shade", meaning: "A cool place under a tree where the sun does not reach." },
        { term: "Blend", meaning: "Two letter sounds said together, such as bl." }
      ],
      qa: [
        { q: "Who forgot his name?", a: "A little fly forgot his name." },
        { q: "How did the fly find his name?", a: "The wind blew the leaf and it began to fly, and the fly remembered his name." },
        { q: "Say the sound a cat makes.", a: "A cat says meow." }
      ],
      quiz: [
        { q: "Whom did the fly ask first?", options: ["an ant", "a tree", "a cow", "a leaf"], answer: 0, explain: "The fly first asked the ant." },
        {
          q: "Who was sleeping in the shade of the tree?",
          options: ["a dog", "a cow", "a goat", "an ant"],
          answer: 1,
          explain: "A cow was sleeping in the shade."
        },
        {
          q: "What did the cow eat?",
          options: ["leaves of the tree", "bananas", "grass", "biscuits"],
          answer: 2,
          explain: "The cow said to ask the grass she eats."
        },
        { q: "What made the leaf fly?", options: ["a bird", "the cow", "the ant", "the wind"], answer: 3, explain: "The wind blew the leaf." },
        { q: "What is the fly's name?", options: ["Fly", "Ant", "Tree", "Wind"], answer: 0, explain: "The fly says, My name is Fly." }
      ]
    },
    {
      id: "the-crow",
      title: "The Crow",
      section: "Mridang",
      summary: "A black crow wants to be beautiful, so he sticks peacock feathers all over himself. The other crows laugh and tell him he is beautiful in black. They love him for what he is.",
      notes: [
        {
          heading: "The poem",
          points: [
            "A crow is black. He wants colourful feathers.",
            "He finds a peacock feather and sticks it in his tail. He finds more and sticks them in his wings and on his head. He dances and says, I am now beautiful.",
            "The other crows laugh. They say, You are beautiful in black. We love you for what you are."
          ]
        },
        {
          heading: "What we learn",
          points: [
            "Real beauty is in good qualities, not in colour or looks.",
            "We should love ourselves and our friends as we are."
          ]
        },
        {
          heading: "Language work",
          points: [
            "Rhyming words: grow - crow, hen - pen, parrot - carrot, sparrow - arrow.",
            "Clap syllables: pea-cock, beau-ti-ful, co-lour-ful, a-no-ther, fea-ther."
          ]
        }
      ],
      formulas: ["Crow: black", "Peacock feathers: colourful", "Real beauty: good qualities", "Rhymes: crow - grow"],
      terms: [
        { term: "Feather", meaning: "One of the light parts that cover a bird's body." },
        { term: "Beautiful", meaning: "Very nice to look at." },
        { term: "Syllable", meaning: "A part of a word said in one beat, such as pea in peacock." }
      ],
      qa: [
        { q: "Why did the crow stick feathers on himself?", a: "He wanted to be beautiful and colourful." },
        { q: "What did the other crows say?", a: "They said he was beautiful in black and they loved him as he was." },
        { q: "Name one bird that has colourful feathers.", a: "A peacock." }
      ],
      quiz: [
        { q: "What colour is the crow?", options: ["white", "blue", "red", "black"], answer: 3, explain: "The crow is black." },
        {
          q: "Whose feathers did the crow pick up?",
          options: ["a peacock's", "a parrot's", "a hen's", "a sparrow's"],
          answer: 0,
          explain: "He picked up peacock feathers."
        },
        {
          q: "Where did he stick the first feather?",
          options: ["on his beak", "in his tail", "on his foot", "on a tree"],
          answer: 1,
          explain: "He stuck it in his tail."
        },
        {
          q: "What did the other crows do?",
          options: ["They clapped.", "They ran away.", "They laughed.", "They sang."],
          answer: 2,
          explain: "They laughed at him."
        },
        {
          q: "What did they say he was?",
          options: ["ugly in black", "tired", "sick", "beautiful in black"],
          answer: 3,
          explain: "They said he was beautiful in black."
        }
      ]
    },
    {
      id: "the-smart-monkey",
      title: "The Smart Monkey",
      section: "Mridang",
      summary: "Anju and Farida eat under a tree and throw their packet and bottle on the ground. A monkey above them throws his banana peel into a dustbin. The girls feel ashamed and put their rubbish in the dustbin too.",
      notes: [
        {
          heading: "The story",
          points: [
            "Anju and Farida go to the market. Anju buys a bag and Farida buys a water bottle. They also buy a packet of groundnuts and a bottle of juice.",
            "They sit on a bench under a tree. A monkey on a branch eats a banana.",
            "The girls throw the empty packet and bottle on the ground. The monkey climbs down and puts his banana peel in the dustbin.",
            "The girls feel ashamed and put their rubbish in the dustbin."
          ]
        },
        { heading: "What we learn", points: ["We should keep our home, school and roads clean.", "Always put rubbish in a dustbin."] },
        {
          heading: "Language work",
          points: [
            "The blends **cl** and **fl**: cloud, clap, clock, flag, flower, floor.",
            "Syllables: mon-key, dust-bin, ba-na-na, mar-ket, pack-et."
          ]
        }
      ],
      formulas: ["Rubbish goes in the dustbin", "Groundnuts = peanuts", "cl: clock; fl: flag"],
      terms: [
        { term: "Dustbin", meaning: "A bin where we throw rubbish." },
        { term: "Peel", meaning: "The outer skin of a fruit like a banana." },
        { term: "Ashamed", meaning: "Feeling sorry because you did something wrong." }
      ],
      qa: [
        { q: "What did the monkey do with the banana peel?", a: "He threw it into the dustbin." },
        { q: "Why did the girls feel ashamed?", a: "The monkey was cleaner than them, because they had thrown rubbish on the ground." },
        { q: "Where should we throw rubbish?", a: "In a dustbin." }
      ],
      quiz: [
        {
          q: "Who are the two girls?",
          options: ["Anju and Riya", "Farida and Meena", "Anju and Farida", "Ravi and Anju"],
          answer: 2,
          explain: "The girls are Anju and Farida."
        },
        {
          q: "What did Farida buy?",
          options: ["a bag", "a book", "a toy", "a water bottle"],
          answer: 3,
          explain: "Anju bought a bag and Farida bought a water bottle."
        },
        {
          q: "Where did the monkey sit?",
          options: ["on a branch of the tree", "on the bench", "in a shop", "on the roof"],
          answer: 0,
          explain: "He sat on a branch above them."
        },
        { q: "What did the monkey eat?", options: ["groundnuts", "a banana", "juice", "biscuits"], answer: 1, explain: "The monkey had a banana." },
        {
          q: "Where did the monkey throw the peel?",
          options: ["on the road", "on the bench", "in the dustbin", "on the girls"],
          answer: 2,
          explain: "He threw it into the dustbin."
        }
      ]
    },
    {
      id: "little-drops-of-water",
      title: "Little Drops of Water",
      section: "Mridang",
      summary: "A short poem about how little drops of water and little grains of sand make the mighty ocean and the pleasant land. In the same way, little words of love and little acts of kindness spread smiles and happiness.",
      notes: [
        {
          heading: "The poem",
          points: [
            "Little drops of water make the mighty ocean. Little grains of sand make the pleasant land.",
            "Little words of love, little acts of kindness and little deeds of warmth spread smiles and happiness."
          ]
        },
        { heading: "What we learn", points: ["Small things add up to big things.", "Small kind acts can make many people happy."] },
        {
          heading: "Language work",
          points: [
            "We say drops of water, grains of sand, words of love, deeds of kindness.",
            "Other groups: a cup of milk, a slice of bread, a tube of toothpaste, a box of pencils, a bag of clothes.",
            "A sentence begins with a capital letter and ends with a full stop."
          ]
        }
      ],
      formulas: [
        "drops of water, grains of sand",
        "words of love, acts of kindness",
        "Small things make big things",
        "Sentence: capital letter + full stop"
      ],
      terms: [
        { term: "Mighty", meaning: "Very big and strong." },
        { term: "Pleasant", meaning: "Nice and pleasing." },
        { term: "Kindness", meaning: "Being good and helpful to others." }
      ],
      qa: [
        { q: "What do little drops of water make?", a: "They make the mighty ocean." },
        { q: "What do little acts of kindness spread?", a: "They spread smiles and happiness." },
        { q: "Write 'a ___ of milk'.", a: "a cup of milk." }
      ],
      quiz: [
        {
          q: "What makes the mighty ocean?",
          options: ["little stones", "little drops of water", "little leaves", "little clouds"],
          answer: 1,
          explain: "Drops of water make the ocean."
        },
        {
          q: "What makes the pleasant land?",
          options: ["little drops of milk", "little feathers", "little grains of sand", "little coins"],
          answer: 2,
          explain: "Grains of sand make the land."
        },
        {
          q: "What do words of love spread?",
          options: ["anger", "noise", "rain", "smiles and happiness"],
          answer: 3,
          explain: "They spread smiles and happiness."
        },
        {
          q: "Which phrase is right?",
          options: ["grains of sand", "drops of sand", "grains of water", "words of rice"],
          answer: 0,
          explain: "We say grains of sand."
        },
        { q: "Which is a kind act?", options: ["breaking a toy", "sharing your lunch", "shouting", "telling a lie"], answer: 1, explain: "Sharing is kind." }
      ]
    },
    {
      id: "we-are-all-indians",
      title: "We are all Indians",
      section: "Mridang",
      summary: "Children from different states of India tell us their name, their language, and what they like. They speak different languages and enjoy different things, but they are all Indians. A short play about the charkha and some Indian festivals follow.",
      notes: [
        {
          heading: "The children",
          points: [
            "Ramu is from Gujarat, speaks Gujarati and likes the Garba. Meenakshi is from Tamil Nadu, speaks Tamil and likes Pongal.",
            "Gulabo from Rajasthan wears colourful clothes and travels by camel. Badal from Bengal likes painting and music.",
            "Surinder is from Punjab and speaks Punjabi. Vibha from Maharashtra speaks Marathi and visited the Ellora and Ajanta caves.",
            "Kamala from Karnataka plays the mridang. Neerja from Uttar Pradesh has seen the Taj Mahal. Nonglik is from Manipur. Bharti from Andhra Pradesh speaks Telugu. Two sisters from Odisha speak Odia. Unni from Kerala speaks Malayalam."
          ]
        },
        { heading: "Main idea", points: ["India has many languages, foods, dances and festivals.", "Each of us is unique, but we are all Indians."] },
        {
          heading: "The charkha and festivals",
          points: [
            "In a short play, children learn that the charkha, or spinning wheel, was dear to Mahatma Gandhi. He used it to spin thread and as a sign of self-reliance.",
            "Festivals read about: Phool Dei (flowers and spring), Sharad Poornima (a full moon night at the end of the monsoon), Pang Lhabsol (Sikkim, Mt Kanchenjunga) and Aadi Perukku (Tamil monsoon festival, river Cauvery)."
          ]
        },
        {
          heading: "Language work",
          points: [
            "Join two sentences with **but**: I like mangoes but I do not like apples.",
            "Blends: br, fr, bread, frock, frog, bridge, brown."
          ]
        }
      ],
      formulas: [
        "Many states, many languages, one India",
        "Charkha = spinning wheel",
        "Join with but",
        "Names of languages: Hindi, Odia, Urdu, Telugu"
      ],
      terms: [
        { term: "Festival", meaning: "A special day or days that people celebrate." },
        { term: "Charkha", meaning: "A spinning wheel used to make thread." },
        { term: "Unique", meaning: "One of a kind; different from everyone else." }
      ],
      qa: [
        { q: "What do we call people who live in India?", a: "Indians." },
        { q: "What is a charkha used for?", a: "It is used to spin thread." },
        { q: "Join with but: I like milk. I do not like tea.", a: "I like milk but I do not like tea." }
      ],
      quiz: [
        { q: "Which state is Ramu from?", options: ["Gujarat", "Kerala", "Punjab", "Manipur"], answer: 0, explain: "Ramu comes from Gujarat." },
        { q: "Which dance does Ramu like?", options: ["Bhangra", "Garba", "Kathak", "Bihu"], answer: 1, explain: "Ramu likes the Garba." },
        {
          q: "Which language does Unni speak?",
          options: ["Tamil", "Telugu", "Malayalam", "Kannada"],
          answer: 2,
          explain: "Unni is from Kerala and speaks Malayalam."
        },
        {
          q: "Who is the Father of the Nation?",
          options: ["Nehru", "Tagore", "Buddha", "Mahatma Gandhi"],
          answer: 3,
          explain: "The play calls Mahatma Gandhi the Father of the nation."
        },
        {
          q: "What is the charkha also called?",
          options: ["spinning wheel", "sewing machine", "bicycle", "toy car"],
          answer: 0,
          explain: "A charkha is a spinning wheel."
        }
      ]
    }
  ]
});
