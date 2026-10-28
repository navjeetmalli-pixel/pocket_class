// Class 2 English: naming words, plurals, action and describing words, pronouns, prepositions and simple sentences.
// Format: see CONTENT_GUIDE.md. All examples are original.
StudyData.add(2, "english", {
  // What this content follows. match: "textbook" | "older-book" | "topic". Set reviewed to a date once a teacher has checked it.
  syllabus: {board: "CBSE", match: "topic", books: [], note: "Grammar and writing skills, arranged by topic. Textbook lessons are not included.", reviewed: false},
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
    }
  ]
});
