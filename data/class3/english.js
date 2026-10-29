// Class 3 English: Grammar, Vocabulary, Writing Skills, Reading Skills and the lessons of Santoor.
// Format: see CONTENT_GUIDE.md. All examples and model answers are original.
StudyData.add(3, "english", {
  // What this content follows. match: "textbook" | "older-book" | "topic". Set reviewed to a date once a teacher has checked it.
  syllabus: {board: "CBSE", match: "textbook", books: ["Santoor"], note: "Grammar and writing, plus every lesson of Santoor (summarised in our own words).", reviewed: false},
  chapters: [
    // ───────────────────────────── GRAMMAR ─────────────────────────────
    {
      id: "nouns",
      title: "Nouns",
      section: "Grammar",
      summary: "A noun is a naming word. This chapter teaches common nouns, which are general names, and proper nouns, which are special names that begin with a capital letter.",
      notes: [
        {
          heading: "What is a noun?",
          points: [
            "A **noun** is a naming word. It names a person, a place, an animal or a thing.",
            "Examples: Ravi (person), school (place), cow (animal), pencil (thing).",
            "Every noun in a sentence is a name for someone or something: “The **girl** read a **book** in the **library**.”"
          ]
        },
        {
          heading: "Common nouns",
          points: [
            "A **common noun** is a general name. It can be used for many people, places or things: boy, city, river, temple.",
            "A common noun starts with a small letter unless it is the first word of a sentence."
          ]
        },
        {
          heading: "Proper nouns",
          points: [
            "A **proper noun** is the special name of one particular person, place or thing.",
            "It always begins with a **capital letter**: Priya, Delhi, Ganga, Diwali.",
            "Days of the week, months and festivals are also proper nouns: Monday, March, Holi."
          ]
        }
      ],
      formulas: [
        "Common noun = general name (boy, city, river)",
        "Proper noun = special name + capital letter (Aman, Jaipur, Ganga)"
      ],
      terms: [
        { term: "Noun", meaning: "A naming word for a person, place, animal or thing." },
        { term: "Common noun", meaning: "A general name, such as girl, village or flower." },
        { term: "Proper noun", meaning: "A special name that begins with a capital letter, such as Sunita or Chennai." },
        { term: "Capital letter", meaning: "A big letter such as A, B or C, used at the start of a proper noun." }
      ],
      examples: [
        {
          q: "Find the nouns in this sentence and say which are common and which are proper: “Riya and her mother went to Lucknow by train.”",
          steps: [
            "Riya: the name of one girl, so a **proper noun**.",
            "mother: a general name for a person, so a **common noun**.",
            "Lucknow: the name of one city, so a **proper noun**.",
            "train: a general name for a thing, so a **common noun**."
          ],
          answer: "Riya (proper), mother (common), Lucknow (proper), train (common)."
        }
      ],
      qa: [
        {
          q: "What is a noun? Give one example of a common noun and one of a proper noun.",
          a: "A noun is a naming word for a person, place, animal or thing. **Village** is a common noun because it is a general name, and **Shimla** is a proper noun because it is the special name of one town."
        },
        {
          q: "Why do we write “Delhi” with a capital D?",
          a: "Delhi is the special name of one particular city, so it is a proper noun. Proper nouns always begin with a **capital letter**."
        }
      ],
      quiz: [
        {
          q: "Which word is a proper noun?",
          options: ["Kolkata", "city", "river", "boy"],
          answer: 0,
          explain: "**Kolkata** is the special name of one city, so it is a proper noun and begins with a capital letter."
        },
        {
          q: "Which word is a common noun?",
          options: ["Sunday", "bird", "Taj Mahal", "Rohit"],
          answer: 1,
          explain: "**Bird** is a general name for any bird. Sunday, Taj Mahal and Rohit are special names."
        },
        {
          q: "Which word is a proper noun for a river?",
          options: ["stream", "lake", "Yamuna", "pond"],
          answer: 2,
          explain: "**Yamuna** is the special name of one river. Stream, lake and pond are common nouns."
        },
        {
          q: "Which word is a proper noun for a festival?",
          options: ["festival", "sweets", "holiday", "Holi"],
          answer: 3,
          explain: "**Holi** is the special name of one festival, so it begins with a capital letter. Festival and holiday are common nouns."
        },
        {
          q: "Which word is a common noun for an animal?",
          options: ["elephant", "Bruno", "Mumbai", "Ganesh"],
          answer: 0,
          explain: "**Elephant** is a general name for an animal. Bruno is a name, Mumbai is a city and Ganesh is a special name."
        }
      ]
    },

    {
      id: "singular-and-plural",
      title: "Singular and Plural",
      section: "Grammar",
      summary: "A singular noun names one thing and a plural noun names more than one. This chapter shows how to make plurals with -s, -es, -ies and some special irregular forms.",
      notes: [
        {
          heading: "Singular and plural",
          points: [
            "A **singular** noun names one person, animal or thing: one boy, a cat, a pen.",
            "A **plural** noun names more than one: two boys, many cats, five pens."
          ]
        },
        {
          heading: "Adding -s and -es",
          points: [
            "Most nouns just add **-s**: book → books, cow → cows.",
            "Nouns ending in **s, x, ch, sh** add **-es**: bus → buses, box → boxes, bench → benches, dish → dishes."
          ]
        },
        {
          heading: "Changing y and f",
          points: [
            "If a noun ends in a consonant followed by **y**, change the y to **i** and add **-es**: baby → babies, city → cities.",
            "If a vowel comes before the y, just add **-s**: toy → toys, monkey → monkeys.",
            "Some nouns ending in **f** change to **-ves**: leaf → leaves, knife → knives."
          ]
        },
        {
          heading: "Irregular plurals",
          points: [
            "Some nouns change completely: man → men, woman → women, child → children, tooth → teeth, mouse → mice.",
            "Some nouns stay the same in both forms, such as sheep and deer."
          ]
        }
      ],
      formulas: [
        "Most nouns: add -s (book → books)",
        "Ends in s, x, ch, sh: add -es (box → boxes)",
        "Consonant + y: change y to ies (baby → babies)",
        "Ends in f: change to ves (leaf → leaves)"
      ],
      terms: [
        { term: "Singular", meaning: "Showing one person, animal or thing." },
        { term: "Plural", meaning: "Showing more than one person, animal or thing." },
        { term: "Irregular plural", meaning: "A plural that does not follow the usual rules, such as children or mice." },
        { term: "Vowel", meaning: "The letters a, e, i, o and u." }
      ],
      examples: [
        {
          q: "Write the plural of: bus, baby, leaf, child.",
          steps: [
            "bus ends in s, so add -es: buses.",
            "baby ends in consonant + y, so change y to i and add -es: babies.",
            "leaf ends in f, so change it to ves: leaves.",
            "child is irregular: children."
          ],
          answer: "buses, babies, leaves, children"
        }
      ],
      qa: [
        {
          q: "What is the difference between a singular noun and a plural noun?",
          a: "A **singular** noun names one thing, such as a pen. A **plural** noun names more than one, such as two pens."
        },
        {
          q: "What is the plural of “city”, and why?",
          a: "The plural is **cities**. City ends in a consonant followed by y, so we change the y to i and add -es."
        }
      ],
      quiz: [
        {
          q: "What is the plural of “box”?",
          options: ["boxs", "boxes", "boxies", "box"],
          answer: 1,
          explain: "Box ends in x, so we add **-es**: boxes."
        },
        {
          q: "What is the plural of “toy”?",
          options: ["toyes", "toies", "toys", "tois"],
          answer: 2,
          explain: "Toy ends in a vowel followed by y, so we just add **-s**: toys."
        },
        {
          q: "What is the plural of “mouse”?",
          options: ["mouses", "mousies", "mices", "mice"],
          answer: 3,
          explain: "**Mice** is an irregular plural. We do not add -s to mouse."
        },
        {
          q: "What is the plural of “knife”?",
          options: ["knives", "knifes", "knivs", "knifies"],
          answer: 0,
          explain: "Knife ends in f, so we change it to **ves**: knives."
        },
        {
          q: "Which noun stays the same in the singular and the plural?",
          options: ["cow", "sheep", "chair", "bench"],
          answer: 1,
          explain: "We say one sheep and two sheep. The word does not change."
        }
      ]
    },

    {
      id: "pronouns",
      title: "Pronouns",
      section: "Grammar",
      summary: "A pronoun takes the place of a noun so that we do not repeat it. This chapter covers subject, object and possessive pronouns.",
      notes: [
        {
          heading: "What is a pronoun?",
          points: [
            "A **pronoun** is a word used in place of a noun. Instead of saying “Meena likes Meena’s dog”, we say “**She** likes **her** dog”.",
            "Pronouns make our sentences shorter and smoother."
          ]
        },
        {
          heading: "Subject pronouns",
          points: [
            "Subject pronouns do the action: **I, we, you, he, she, it, they**.",
            "Example: **He** plays football. **They** sing a song."
          ]
        },
        {
          heading: "Object pronouns",
          points: [
            "Object pronouns receive the action. They come after a verb or after a word such as to, for or with: **me, us, you, him, her, it, them**.",
            "Example: Mother called **me** for dinner. Give the pencil to **him**."
          ]
        },
        {
          heading: "Possessive pronouns",
          points: [
            "Possessive pronouns show who owns something: **my, our, your, his, her, its, their**.",
            "Example: This is **my** bag. The dog wagged **its** tail."
          ]
        }
      ],
      formulas: [
        "Subject pronouns: I, we, you, he, she, it, they",
        "Object pronouns: me, us, you, him, her, it, them",
        "Possessive pronouns: my, our, your, his, her, its, their"
      ],
      terms: [
        { term: "Pronoun", meaning: "A word that takes the place of a noun, such as he, she or it." },
        { term: "Subject pronoun", meaning: "A pronoun that does the action, such as I, we or they." },
        { term: "Object pronoun", meaning: "A pronoun that receives the action, such as me, him or them." },
        { term: "Possessive pronoun", meaning: "A pronoun that shows ownership, such as my, our or their." }
      ],
      examples: [
        {
          q: "Rewrite using pronouns: “Rahul likes cricket. Rahul plays cricket with Sita.”",
          steps: [
            "Rahul is a boy, so use **he** in place of Rahul: “He likes cricket.”",
            "Rahul is the doer again, so **He** starts the second sentence too.",
            "Sita is a girl and comes after “with”, so use the object pronoun **her**."
          ],
          answer: "He likes cricket. He plays cricket with her."
        }
      ],
      qa: [
        {
          q: "What is a pronoun? Give two examples.",
          a: "A **pronoun** is a word used in place of a noun. Examples: **she** and **it**."
        },
        {
          q: "Why do we say “I gave the sweets to them” instead of repeating the names?",
          a: "**Them** is an object pronoun. It comes after the word “to” and stands for the people already mentioned, so we do not have to repeat their names."
        }
      ],
      quiz: [
        {
          q: "Which pronoun can replace “Ravi” in “Ravi is my best friend”?",
          options: ["They", "It", "He", "Us"],
          answer: 2,
          explain: "Ravi is a boy, so **he** replaces Ravi: “He is my best friend.”"
        },
        {
          q: "Mother called ___ for dinner.",
          options: ["I", "my", "mine", "me"],
          answer: 3,
          explain: "After a verb such as “called”, we use the object pronoun **me**."
        },
        {
          q: "Which word is a possessive pronoun?",
          options: ["their", "she", "running", "book"],
          answer: 0,
          explain: "**Their** shows that something belongs to other people."
        },
        {
          q: "The dog wagged ___ tail happily.",
          options: ["it’s", "its", "it", "they"],
          answer: 1,
          explain: "**Its** shows ownership and has no apostrophe. “It’s” means “it is”."
        },
        {
          q: "Which word is a subject pronoun?",
          options: ["them", "him", "we", "her"],
          answer: 2,
          explain: "**We** is a subject pronoun. It comes before the verb and does the action."
        }
      ]
    },

    {
      id: "verbs",
      title: "Verbs",
      section: "Grammar",
      summary: "A verb tells what someone or something does. This chapter explains action verbs, helping verbs and main verbs.",
      notes: [
        {
          heading: "What is a verb?",
          points: [
            "A **verb** is an action word. It tells what someone or something does: run, eat, sing, write.",
            "Every sentence needs a verb: The cat **sleeps** on the mat."
          ]
        },
        {
          heading: "Action verbs",
          points: [
            "An **action verb** shows an action that we can see or do: jump, draw, cook, swim.",
            "Example: Our teacher **explains** the lesson clearly."
          ]
        },
        {
          heading: "Helping verbs and main verbs",
          points: [
            "A **helping verb** works with the main verb. Common helping verbs are is, am, are, was, were, has, have, will and can.",
            "Example: Anil **is** reading a book. Here “is” is the helping verb and “reading” is the main verb."
          ]
        },
        {
          heading: "Verbs change with the subject",
          points: [
            "In the present, a verb changes with the person doing it: I **play**, but she **plays**.",
            "Add **-s** to the verb when the subject is he, she or it: she runs, he eats, it rains."
          ]
        }
      ],
      formulas: [
        "Subject + verb: Priya dances.",
        "Helping verb + main verb: is + singing = is singing",
        "he / she / it + verb + s: she runs"
      ],
      terms: [
        { term: "Verb", meaning: "A word that tells what someone or something does." },
        { term: "Action verb", meaning: "A verb that shows an action, such as run, jump or write." },
        { term: "Helping verb", meaning: "A verb such as is, has or will that helps the main verb." },
        { term: "Main verb", meaning: "The most important verb in a sentence, which shows the main action." }
      ],
      examples: [
        {
          q: "Find the verbs in these sentences: “The farmer ploughs the field. Children are singing a song.”",
          steps: [
            "“ploughs” shows the action of the farmer, so it is an action verb.",
            "In “are singing”, “are” is the helping verb and “singing” is the main verb."
          ],
          answer: "ploughs (action verb); are singing (helping verb “are” + main verb “singing”)."
        }
      ],
      qa: [
        {
          q: "What is a verb? Give three examples.",
          a: "A **verb** is an action word that tells what someone or something does. Examples: run, jump, write."
        },
        {
          q: "What is a helping verb? Give an example.",
          a: "A **helping verb** works with the main verb. In “She is writing a letter”, “is” is the helping verb and “writing” is the main verb."
        }
      ],
      quiz: [
        {
          q: "Which word is a verb?",
          options: ["table", "happy", "garden", "jump"],
          answer: 3,
          explain: "**Jump** is an action word, so it is a verb."
        },
        {
          q: "The birds ___ in the sky.",
          options: ["fly", "flies", "flying", "flyed"],
          answer: 0,
          explain: "“Birds” is plural, so we use **fly** without -s."
        },
        {
          q: "Find the helping verb: “Meena has finished her homework.”",
          options: ["Meena", "has", "finished", "homework"],
          answer: 1,
          explain: "**Has** is the helping verb. “Finished” is the main verb."
        },
        {
          q: "She ___ to school every day.",
          options: ["go", "going", "goes", "gone"],
          answer: 2,
          explain: "With she, we add -s in the present: she **goes**."
        },
        {
          q: "Which word is the action verb in “Ajay can swim fast”?",
          options: ["fast", "Ajay", "can", "swim"],
          answer: 3,
          explain: "**Swim** shows the action. “Can” is a helping verb."
        }
      ]
    },

    {
      id: "adjectives",
      title: "Adjectives",
      section: "Grammar",
      summary: "An adjective describes a noun. This chapter shows how adjectives tell us what kind, how many, and which one.",
      notes: [
        {
          heading: "What is an adjective?",
          points: [
            "An **adjective** is a describing word. It tells us more about a noun: a **red** kite, a **tall** tree.",
            "Adjectives answer questions such as What kind? How many? Which one?"
          ]
        },
        {
          heading: "Kinds of adjectives",
          points: [
            "**Quality adjectives** tell what kind of thing it is: **sweet** mangoes, a **clever** fox, a **cold** drink.",
            "**Quantity adjectives** tell how many or how much: **five** apples, **some** water, **many** birds.",
            "Size and colour words are adjectives too: **big**, **small**, **long**, **blue**, **green**."
          ]
        },
        {
          heading: "Where adjectives go",
          points: [
            "An adjective often comes before the noun: a **shiny** coin.",
            "It can also come after verbs such as is, looks or feels: The coin is **shiny**."
          ]
        }
      ],
      formulas: [
        "Adjective + noun: a tall boy",
        "Noun + is + adjective: The sky is blue.",
        "Adjectives answer: What kind? How many? Which one?"
      ],
      terms: [
        { term: "Adjective", meaning: "A word that describes a noun, such as happy, red or three." },
        { term: "Quality adjective", meaning: "An adjective that tells what kind of thing it is, such as kind or sweet." },
        { term: "Quantity adjective", meaning: "An adjective that tells how many or how much, such as five or some." },
        { term: "Size", meaning: "How big or small something is, such as tall, short, big or tiny." }
      ],
      examples: [
        {
          q: "Find the adjectives in: “The little girl wore a green frock and ate three sweet laddoos.”",
          steps: [
            "“little” tells the size of the girl.",
            "“green” tells the colour of the frock.",
            "“three” tells how many laddoos.",
            "“sweet” tells what kind of laddoos."
          ],
          answer: "little, green, three, sweet"
        }
      ],
      qa: [
        {
          q: "What is an adjective? Give one example from a sentence.",
          a: "An **adjective** describes a noun. In “a clever dog”, the word “clever” describes the dog."
        },
        {
          q: "Where can an adjective be placed in a sentence?",
          a: "An adjective can come before the noun it describes (a tall tree) or after a verb such as is, looks or feels (The tree is tall)."
        }
      ],
      quiz: [
        {
          q: "Which word is an adjective in “The puppy is playful”?",
          options: ["playful", "puppy", "is", "dog"],
          answer: 0,
          explain: "**Playful** describes the puppy, so it is an adjective."
        },
        {
          q: "Which word tells how many?",
          options: ["beautiful", "seven", "red", "tall"],
          answer: 1,
          explain: "**Seven** is a quantity adjective. It tells how many."
        },
        {
          q: "The ___ elephant walked slowly into the forest.",
          options: ["run", "eat", "huge", "sleep"],
          answer: 2,
          explain: "**Huge** describes the elephant. Run, eat and sleep are verbs."
        },
        {
          q: "Please give me a ___ glass of water on this hot day.",
          options: ["drink", "give", "water", "cold"],
          answer: 3,
          explain: "**Cold** describes the glass, so it is the adjective that fits."
        },
        {
          q: "Which word tells the colour?",
          options: ["blue", "sky", "fly", "tree"],
          answer: 0,
          explain: "**Blue** is an adjective of colour. Sky and tree are nouns and fly is a verb."
        }
      ]
    },

    {
      id: "articles",
      title: "Articles",
      section: "Grammar",
      summary: "The words a, an and the are called articles. This chapter explains when to use each one before a noun.",
      notes: [
        {
          heading: "What are articles?",
          points: [
            "**Articles** are the small words **a**, **an** and **the**. They come before a noun.",
            "“A” and “an” are used for any one thing: a cat, an apple. “The” is used for a particular thing that we know: the moon."
          ]
        },
        {
          heading: "Using a and an",
          points: [
            "Use **a** before a word that begins with a consonant sound: a cat, a pen, a bus.",
            "Use **an** before a word that begins with a vowel sound: an apple, an egg, an orange, an umbrella."
          ]
        },
        {
          heading: "Using the",
          points: [
            "Use **the** when there is only one of something, or when both speaker and listener know which one we mean: the sun, the moon, the Ganga.",
            "Example: The book on the table is mine."
          ]
        },
        {
          heading: "Articles and plurals",
          points: [
            "We do not use **a** or **an** before a plural noun: a book, but books.",
            "Use “a” or “an” with the singular noun only: a bird, two birds."
          ]
        }
      ],
      formulas: [
        "a + consonant sound: a dog",
        "an + vowel sound: an owl",
        "the + one particular thing: the sun"
      ],
      terms: [
        { term: "Article", meaning: "The words a, an and the, used before a noun." },
        { term: "Vowel", meaning: "The letters a, e, i, o and u." },
        { term: "Consonant", meaning: "Any letter that is not a vowel." },
        { term: "Definite article", meaning: "The word “the”, used for a particular or known thing." }
      ],
      examples: [
        {
          q: "Fill in a, an or the: “___ elephant ate ___ apple under ___ tree near our house.”",
          steps: [
            "“elephant” begins with a vowel sound, so use **an**.",
            "“apple” begins with a vowel sound, so use **an**.",
            "“tree” is a particular tree that we know near our house, so use **the**."
          ],
          answer: "An elephant ate an apple under the tree near our house."
        }
      ],
      qa: [
        {
          q: "When do we use “a” and when do we use “an”?",
          a: "Use **a** before a word that begins with a consonant sound (a cat, a bird). Use **an** before a word that begins with a vowel sound (an apple, an owl)."
        },
        {
          q: "Why do we say “the sun” but “a star”?",
          a: "We say **the sun** because there is only one sun that we all know. We say **a star** because there are many stars and we are not talking about one particular star."
        }
      ],
      quiz: [
        {
          q: "Choose the correct article: ___ umbrella",
          options: ["a", "an", "the", "my"],
          answer: 1,
          explain: "Umbrella begins with a vowel sound, so we use **an**."
        },
        {
          q: "I want ___ orange.",
          options: ["a", "the", "an", "my"],
          answer: 2,
          explain: "Orange begins with a vowel sound, so we use **an**."
        },
        {
          q: "Choose the correct article: ___ sun rises in the east.",
          options: ["A", "An", "My", "The"],
          answer: 3,
          explain: "We say **the** sun because there is only one sun."
        },
        {
          q: "She is ___ good singer.",
          options: ["a", "the", "an", "my"],
          answer: 0,
          explain: "Good begins with a consonant sound, so we use **a**."
        },
        {
          q: "Which phrase is correct?",
          options: ["a owl", "an owl", "owl an", "owl the"],
          answer: 1,
          explain: "Owl begins with a vowel sound, so the correct phrase is **an owl**."
        }
      ]
    },

    {
      id: "simple-present-tense",
      title: "Simple Present Tense",
      section: "Grammar",
      summary: "The simple present tense tells us about daily habits and things that are always true. This chapter shows how the verb changes with he, she and it.",
      notes: [
        {
          heading: "What is the simple present tense?",
          points: [
            "The **simple present tense** tells us about things we do regularly or things that are always true.",
            "Example: Riya **reads** a story every night. The sun **rises** in the east."
          ]
        },
        {
          heading: "With I, we, you and they",
          points: [
            "Use the base verb, which is the verb without any ending, with I, we, you and they: I play, we eat, you sing, they go.",
            "Example: They play in the park after school."
          ]
        },
        {
          heading: "With he, she and it",
          points: [
            "Add **-s** to the verb with he, she and it: he plays, she sings, it rains.",
            "If the verb ends in s, sh, ch, x or o, add **-es**: she goes, he watches, she washes."
          ]
        },
        {
          heading: "Negative sentences",
          points: [
            "Use **do not** with I, we, you and they: We do not like rain.",
            "Use **does not** with he, she and it, and then use the base verb: She does not like rain."
          ]
        }
      ],
      formulas: [
        "I / we / you / they + base verb: They play.",
        "he / she / it + verb + s: She plays.",
        "he / she / it + does not + base verb: He does not play."
      ],
      terms: [
        { term: "Present tense", meaning: "The form of a verb that shows what happens now or regularly." },
        { term: "Habit", meaning: "Something we do again and again, such as brushing our teeth every morning." },
        { term: "Base verb", meaning: "The plain form of a verb, such as play, eat or go." },
        { term: "Simple present", meaning: "The present tense used for habits and facts." }
      ],
      examples: [
        {
          q: "Fill in the correct verb: “Anil ___ (play) cricket every evening. We ___ (play) too.”",
          steps: [
            "Anil is a boy, which is like he, so add -s: plays.",
            "We is one of the words that uses the base verb: play."
          ],
          answer: "plays; play"
        }
      ],
      qa: [
        {
          q: "When do we use the simple present tense?",
          a: "We use it for actions that happen regularly, such as daily habits (Meera drinks milk every morning), and for facts that are always true (Birds have feathers)."
        },
        {
          q: "Why do we say “she runs” but “they run”?",
          a: "With he, she and it we add -s to the verb in the simple present (she runs). With I, we, you and they we use the base verb (they run)."
        }
      ],
      quiz: [
        {
          q: "Choose the correct sentence.",
          options: ["She play the piano.", "She playing the piano.", "She plays the piano.", "She is play the piano."],
          answer: 2,
          explain: "With she, we add -s: **plays**."
        },
        {
          q: "They ___ to school by bus.",
          options: ["going", "gos", "goes", "go"],
          answer: 3,
          explain: "With they, we use the base verb: **go**."
        },
        {
          q: "My dog ___ at strangers.",
          options: ["barks", "bark", "barking", "barked"],
          answer: 0,
          explain: "With my dog (it), we add -s: **barks**."
        },
        {
          q: "We ___ our teeth twice a day.",
          options: ["brushes", "brush", "brushing", "brushed"],
          answer: 1,
          explain: "With we, we use the base verb: **brush**."
        },
        {
          q: "Mother ___ tea every morning.",
          options: ["make", "making", "makes", "made"],
          answer: 2,
          explain: "Mother is one person, like she, so we add -s to the verb: **makes**."
        }
      ]
    },

    // ───────────────────────────── WRITING SKILLS ─────────────────────────────
    {
      id: "writing-short-paragraph",
      title: "Writing a Short Paragraph",
      section: "Writing Skills",
      summary: "A paragraph is a group of sentences about one main idea. This chapter shows how to plan and write a short paragraph with a topic sentence, details and a closing sentence.",
      notes: [
        {
          heading: "What is a paragraph?",
          points: [
            "A **paragraph** is a group of sentences about one main idea.",
            "Start a new paragraph on a new line, and leave a small space before the first word."
          ]
        },
        {
          heading: "Parts of a paragraph",
          points: [
            "The **topic sentence** comes first and tells the main idea.",
            "The **supporting sentences** give details, such as what, where and how.",
            "The **closing sentence** ends the paragraph and sums up how we feel."
          ]
        },
        {
          heading: "Tips for writing",
          points: [
            "Begin every sentence with a capital letter and end it with a full stop.",
            "Use linking words such as **first, next, then** and **finally** to join your ideas.",
            "Read your paragraph again at the end and check the spelling and full stops."
          ]
        },
        {
          heading: "Good topics for young writers",
          points: [
            "Some useful topics are My Family, My School, My Pet, My Favourite Festival and My Village or City.",
            "Choose a topic you know well, so that you have plenty of details to write about."
          ]
        }
      ],
      formulas: [
        "Paragraph = topic sentence + supporting sentences + closing sentence",
        "Linking words: first, next, then, finally"
      ],
      terms: [
        { term: "Paragraph", meaning: "A group of sentences about one main idea." },
        { term: "Topic sentence", meaning: "The first sentence of a paragraph, which tells the main idea." },
        { term: "Supporting sentence", meaning: "A sentence that gives details about the main idea." },
        { term: "Closing sentence", meaning: "The last sentence of a paragraph, which ends it neatly." }
      ],
      examples: [
        {
          q: "Write a short paragraph on “My Pet”.",
          steps: [
            "Topic sentence: “I have a pet dog named Bruno.”",
            "Supporting sentences: “He is brown and has a long tail. Every evening he plays with a red ball in our courtyard.”",
            "Closing sentence: “I love my little friend very much.”"
          ],
          answer: "I have a pet dog named Bruno. He is brown and has a long tail. Every evening he plays with a red ball in our courtyard. I love my little friend very much."
        }
      ],
      qa: [
        {
          q: "What are the three parts of a good paragraph?",
          a: "A good paragraph has a **topic sentence** that gives the main idea, **supporting sentences** that give details, and a **closing sentence** that ends the paragraph."
        },
        {
          q: "Why should we start a new paragraph on a new line?",
          a: "A new paragraph begins when we move on to a new idea. Starting on a new line helps the reader see that the idea has changed."
        }
      ],
      quiz: [
        {
          q: "Which sentence works best as the topic sentence for a paragraph on “My Favourite Festival”?",
          options: ["We light diyas and eat sweets.", "Mum bought new clothes.", "Then we went to sleep.", "Diwali is my favourite festival."],
          answer: 3,
          explain: "The topic sentence tells the main idea. **Diwali is my favourite festival** introduces the topic; the others are details."
        },
        {
          q: "Which word is a linking word that shows the order of events?",
          options: ["then", "pretty", "blue", "dog"],
          answer: 0,
          explain: "**Then** is a linking word that shows what happened next."
        },
        {
          q: "Which sentence is best as the closing sentence of a paragraph about school?",
          options: ["My school has a green garden.", "I love my school very much.", "Our class is on the first floor.", "Our teacher is kind."],
          answer: 1,
          explain: "A closing sentence ends the paragraph and often shows our feelings. The others give details."
        },
        {
          q: "What should one paragraph contain?",
          options: ["Only questions", "A list of names", "One main idea", "Two different stories"],
          answer: 2,
          explain: "A paragraph is built around **one main idea**."
        },
        {
          q: "Which sentence is written correctly?",
          options: ["Family is my big.", "My family is big?", "Big family is my.", "My family is big."],
          answer: 3,
          explain: "Every sentence begins with a capital letter, ends with a full stop and has its words in the right order."
        }
      ]
    },

    // ───────────────────────────── VOCABULARY ─────────────────────────────
    {
      id: "opposites-and-rhyming-words",
      title: "Opposites and Rhyming Words",
      section: "Vocabulary",
      summary: "Opposites are words with opposite meanings, and rhyming words end with the same sound. This chapter helps you build your vocabulary with both.",
      notes: [
        {
          heading: "Opposite words",
          points: [
            "**Opposites**, also called **antonyms**, are words with opposite meanings: hot and cold, day and night, big and small.",
            "Other common pairs: tall – short, thick – thin, full – empty, wet – dry."
          ]
        },
        {
          heading: "Opposites of action words",
          points: [
            "Action words also have opposites: open – close, come – go, fast – slow.",
            "Learning opposites in pairs helps you remember both words together."
          ]
        },
        {
          heading: "Rhyming words",
          points: [
            "**Rhyming words** end with the same sound: cat, hat, bat, mat.",
            "Rhyme depends on sound, not spelling. Tree and bee rhyme, and so do pen and ten."
          ]
        },
        {
          heading: "Finding rhymes",
          points: [
            "Say the word aloud and listen to its ending sound. For “pen”, the ending sound is “en”, so try hen, ten and men.",
            "Rhymes are fun in poems and nursery rhymes for young children."
          ]
        }
      ],
      formulas: [
        "Opposite pair: hot ↔ cold",
        "Rhyme: same ending sound (cat, bat, mat)"
      ],
      terms: [
        { term: "Antonym", meaning: "A word that has the opposite meaning of another word, such as up and down." },
        { term: "Rhyming words", meaning: "Words that end with the same sound, such as sun and fun." },
        { term: "Ending sound", meaning: "The last sound of a word, which helps us find rhymes." },
        { term: "Nursery rhyme", meaning: "A short, rhyming poem for young children." }
      ],
      examples: [
        {
          q: "Write the opposite of “wet”, and then write a word that rhymes with “wet”.",
          steps: [
            "The opposite of wet is dry.",
            "A rhyming word ends with the same sound, -et: net, set or pet."
          ],
          answer: "dry; net (or set, pet)"
        }
      ],
      qa: [
        {
          q: "What are antonyms? Give three pairs.",
          a: "Antonyms are words with opposite meanings. Examples: hot and cold, day and night, big and small."
        },
        {
          q: "What are rhyming words? Give three examples.",
          a: "Rhyming words end with the same sound. Examples: cat, hat and mat."
        }
      ],
      quiz: [
        {
          q: "What is the opposite of “thick”?",
          options: ["thin", "heavy", "wide", "soft"],
          answer: 0,
          explain: "The opposite of **thick** is **thin**."
        },
        {
          q: "Which word rhymes with “bee”?",
          options: ["bag", "tree", "bat", "boy"],
          answer: 1,
          explain: "**Tree** ends with the same sound as bee."
        },
        {
          q: "What is the opposite of “empty”?",
          options: ["open", "clean", "full", "large"],
          answer: 2,
          explain: "The opposite of **empty** is **full**."
        },
        {
          q: "Which word does NOT rhyme with “night”?",
          options: ["light", "kite", "bright", "nose"],
          answer: 3,
          explain: "Light, kite and bright end with the same sound as night. **Nose** does not."
        },
        {
          q: "What is the opposite of “fast”?",
          options: ["slow", "quick", "running", "early"],
          answer: 0,
          explain: "The opposite of **fast** is **slow**."
        }
      ]
    },

    // ───────────────────────────── READING SKILLS ─────────────────────────────
    {
      id: "picture-reading",
      title: "Picture Reading",
      section: "Reading Skills",
      summary: "Picture reading means looking closely at a picture and understanding who is in it, where it is and what is happening. This chapter teaches you how to look, notice details and describe what you see.",
      notes: [
        {
          heading: "What is picture reading?",
          points: [
            "Picture reading means looking carefully at a picture and understanding what it shows.",
            "A picture tells a story even without words."
          ]
        },
        {
          heading: "How to read a picture",
          points: [
            "Look at the whole picture first to see where it is set and who or what is in it.",
            "Then notice small details such as colours, objects and actions.",
            "Ask yourself: Who is here? Where are they? What are they doing?"
          ]
        },
        {
          heading: "Reading feelings",
          points: [
            "Look at faces and body language to know how people feel. A big smile and raised hands can show happiness.",
            "A frown or folded arms can show that a person is upset or angry."
          ]
        },
        {
          heading: "Describing a picture",
          points: [
            "Write three or four sentences. Start with where the picture is set, then describe the people and what they are doing.",
            "Use words such as “In the picture” or “I can see” to begin your sentences."
          ]
        }
      ],
      formulas: [
        "Look → Ask (who, where, what) → Describe",
        "Picture description = setting + people + action"
      ],
      terms: [
        { term: "Setting", meaning: "The place and time where a picture or story happens." },
        { term: "Detail", meaning: "A small piece of information, such as the colour of a bag." },
        { term: "Caption", meaning: "A short line of words written under a picture." },
        { term: "Clue", meaning: "A small sign in a picture that helps us understand it." }
      ],
      examples: [
        {
          q: "Look at a picture of children flying a kite in a park. Describe it in three sentences.",
          steps: [
            "Setting: the children are in a park.",
            "People and action: two children are running and holding a kite string.",
            "Details: the kite is red and the sky is blue."
          ],
          answer: "In the picture, children are playing in a park. Two children are running and holding the string of a red kite. The sky is blue and the kite is high above them."
        }
      ],
      qa: [
        {
          q: "What should you look at first in a picture?",
          a: "First look at the whole picture to find where it is set and who or what is in it. Then notice the small details."
        },
        {
          q: "How can you tell how a person in a picture feels?",
          a: "Look at the face and body. A big smile or raised hands can show happiness, while a frown or folded arms can show sadness or anger."
        }
      ],
      quiz: [
        {
          q: "What should you do first when reading a picture?",
          options: ["Colour it", "Look at the whole picture", "Tear it", "Turn it upside down"],
          answer: 1,
          explain: "Look at the whole picture first, so you understand where it is and who is in it."
        },
        {
          q: "A child with a big smile and raised hands most likely feels:",
          options: ["sad", "angry", "happy", "tired"],
          answer: 2,
          explain: "A big smile and raised hands show that the child is **happy**."
        },
        {
          q: "Which word tells where a picture is set?",
          options: ["colour", "number", "tail", "setting"],
          answer: 3,
          explain: "The **setting** is the place where the picture happens."
        },
        {
          q: "A short line written under a picture is called a:",
          options: ["caption", "chapter", "poem", "question"],
          answer: 0,
          explain: "A **caption** is a short line of words written under a picture."
        },
        {
          q: "Which question helps you describe a picture?",
          options: ["What is your mobile number?", "Who is in the picture?", "Which is your favourite toy?", "When will the school close?"],
          answer: 1,
          explain: "Asking who is in the picture helps you describe the people in it."
        }
      ]
    },

    // ───────────────────────────── SANTOOR ─────────────────────────────
    {
      id: "colours",
      title: "Colours",
      section: "Santoor",
      summary: "A short, happy poem about two children who share their crayons so that they have a full pack. The lesson also practises action words, blend sounds like gr and cr, and putting words in ABC order.",
      notes: [
        { heading: "Idea of the poem", points: [
          "One child has red, yellow and blue crayons. The other child has some more, such as green, purple and black.",
          "One needs the red crayon and the other needs the black one.",
          "When they share, they get a full pack of crayons. The poem teaches us that sharing makes everyone happy."
        ] },
        { heading: "Language work in the lesson", points: [
          "**Action words** tell us what someone does: laugh, dance, eat, cry, swim, jump, run, write.",
          "The blends **gr** and **cr** are practised: green, grass, grapes and crayon, crab, crow.",
          "**Alphabetical order** means ABC order. Look at the first letter of each word: apple, banana, cherry, grapes, orange."
        ] },
        { heading: "Speaking and doing", points: [
          "Children rearrange jumbled letters to find colour names, such as LEBU for blue.",
          "In a fun game, you read the colour of the ink and not the word that is written.",
          "Children match a word with its friend-word to make a new one, such as rain + bow = rainbow."
        ] }
      ],
      formulas: ["Theme: sharing", "Action words: run, jump, eat, write", "ABC order: apple, banana, cherry", "rain + bow = rainbow"],
      terms: [
        { term: "Crayon", meaning: "A coloured stick that we use to draw and colour." },
        { term: "Action word", meaning: "A word that tells what someone does, such as dance or swim." },
        { term: "Alphabetical order", meaning: "Putting words in ABC order using their first letters." },
        { term: "Blend", meaning: "Two letters whose sounds join together, such as gr in green." }
      ],
      qa: [
        { q: "Why did the children share their crayons?", a: "Each child had some colours that the other child needed. By sharing, they got a full pack." },
        { q: "How many children are there in the poem?", a: "There are two children in the poem. One says “I”, and the other says “you”." },
        { q: "Put these in ABC order: red, blue, green.", a: "blue, green, red." }
      ],
      quiz: [
        { q: "What is the poem about?", options: ["Sharing crayons", "Eating fruit", "Flying kites", "Going to school"], answer: 0, explain: "Two children share their crayons to make a full pack." },
        { q: "Which word is an action word?", options: ["carrot", "dance", "book", "leg"], answer: 1, explain: "**Dance** tells us what someone does." },
        { q: "Which colour does one child need in the poem?", options: ["white", "pink", "black", "orange"], answer: 2, explain: "One child needs the black crayon, and the other needs the red one." },
        { q: "Which word starts with the blend ‘cr’?", options: ["green", "draw", "prize", "crayon"], answer: 3, explain: "**Crayon** begins with the sounds c and r together." },
        { q: "Which list is in ABC order?", options: ["apple, banana, cherry", "cherry, banana, apple", "banana, apple, cherry", "apple, cherry, banana"], answer: 0, explain: "A comes before B, and B comes before C." }
      ]
    },
    {
      id: "badal-and-moti",
      title: "Badal and Moti",
      section: "Santoor",
      summary: "Badal finds a shivering puppy, brings it home and names it Moti. When Badal falls into a deep pit on a rainy day, Moti finds him by his smell and barks until the neighbours come. The lesson also practises ‘ed’ action words, question marks and full stops.",
      notes: [
        { heading: "What happens", points: [
          "Badal lives with his mother in a village. One evening he sees a puppy shivering in the cold on his way back from school.",
          "He brings the puppy home. His mother says it can stay if Badal promises to take care of it. They name the puppy Moti.",
          "Moti grows up and loves Badal. They eat and play together, and Moti follows him everywhere.",
          "One rainy day Badal slips on a muddy lane and falls into a deep pit. He cannot climb out.",
          "His mother is worried and calls the neighbours. Moti goes with them, catches Badal’s scent and barks near the pit. The neighbours pull Badal out with a rope. Badal hugs Moti and thanks him."
        ] },
        { heading: "Characters and message", points: [
          "**Badal** is a kind boy who takes care of a puppy.",
          "**Moti** is a loving and clever dog.",
          "A pet that is looked after with love can become a true friend and even help us in trouble."
        ] },
        { heading: "Language work in the lesson", points: [
          "Words like lived, loved, played, gathered and thanked end in **ed**. They tell us about actions that have already happened.",
          "A sentence that asks something ends with a **question mark (?)**. A sentence that tells something ends with a **full stop (.)**.",
          "Children also match word pairs that go together, such as bat and ball, and sequence the story of a dove and an ant."
        ] }
      ],
      formulas: ["Theme: friendship with a pet", "walk + ed = walked", "Question ends with ?", "Statement ends with ."],
      terms: [
        { term: "Puppy", meaning: "A baby dog." },
        { term: "Scent", meaning: "The smell of something or someone." },
        { term: "Question mark", meaning: "The sign (?) at the end of a question." },
        { term: "Full stop", meaning: "The dot (.) at the end of a sentence that tells something." }
      ],
      qa: [
        { q: "How did Moti find Badal?", a: "Moti caught Badal’s scent and followed it to the pit. Then he barked, so the neighbours came." },
        { q: "What promise did Badal give his mother?", a: "He promised to take care of the puppy." },
        { q: "Add ‘ed’ to the word “play”.", a: "play + ed = played." }
      ],
      quiz: [
        { q: "What did Badal see on his way back from school?", options: ["A shivering puppy", "A kitten", "A bird", "A cow"], answer: 0, explain: "He saw a puppy shivering in the cold." },
        { q: "What did Badal and his mother name the puppy?", options: ["Kalu", "Moti", "Bholu", "Sheru"], answer: 1, explain: "They named the puppy Moti." },
        { q: "Where did Badal fall?", options: ["A river", "A well", "A deep pit", "A pond"], answer: 2, explain: "He slipped on a muddy lane and fell into a deep pit." },
        { q: "Which sentence should end with a question mark?", options: ["The sun rises in the east", "I like mangoes", "Brinda is my friend", "What is your name"], answer: 3, explain: "“What is your name” asks something, so it ends with a **?**." },
        { q: "Which word tells about something that has already happened?", options: ["thanked", "thank", "thanks", "thanking"], answer: 0, explain: "Words that end in **ed** tell about the past." }
      ]
    },
    {
      id: "best-friends",
      title: "Best Friends",
      section: "Santoor",
      summary: "Four shape friends, Circle, Square, Triangle and Rectangle, fight over who is the best. A wise star tells them that together they can make beautiful pictures and patterns, so they stop fighting. The lesson also explains when to use ‘a’ and ‘an’.",
      notes: [
        { heading: "What happens", points: [
          "Circle, Square, Triangle and Rectangle are four friends. One day each of them says, “I am the best!”",
          "Circle is round and has no sharp edges. Square has four equal sides. Triangle has three sides. Rectangle has four sides, two long and two short.",
          "They cannot decide, so they ask the first person they meet, a wise star.",
          "The star says that they are friends and should not fight. Together they can create beautiful pictures and patterns.",
          "The shapes understand their mistake, promise never to fight again and stay best friends."
        ] },
        { heading: "Characters and message", points: [
          "The four shapes are proud at first, and then they learn to value each other.",
          "The **star** is wise and calm and gives good advice.",
          "Friends do not need to fight about who is the best. Together we can do wonderful things."
        ] },
        { heading: "Language work in the lesson", points: [
          "Use **a** before a singular noun that starts with a consonant sound: a dog, a cow, a sparrow.",
          "Use **an** before a singular noun that starts with a vowel sound (a, e, i, o, u): an eagle, an umbrella, an ice-cream man.",
          "Children also write a few lines about their own friend, and enjoy the rhyme “What Do You Do?” about animals and what they do."
        ] }
      ],
      formulas: ["Theme: friendship and teamwork", "a + consonant sound: a dog", "an + vowel sound: an egg", "Circle 0 sides, Triangle 3 sides, Square and Rectangle 4 sides"],
      terms: [
        { term: "Shape", meaning: "The outline of something, such as a circle or a square." },
        { term: "Pattern", meaning: "A design made by repeating shapes or colours." },
        { term: "Article", meaning: "The small word a, an or the that comes before a noun." },
        { term: "Wise", meaning: "Having good sense and giving good advice." }
      ],
      qa: [
        { q: "Why were the four friends fighting?", a: "Each one said that it was the best shape." },
        { q: "Who helped them to end the fight, and what did that person say?", a: "A wise star helped them. She said that together they could create the most beautiful pictures and patterns." },
        { q: "Fill in a or an: ___ eagle, ___ dog.", a: "an eagle, a dog." }
      ],
      quiz: [
        { q: "How many sides does a triangle have?", options: ["Four", "Two", "Three", "Five"], answer: 2, explain: "A triangle has three sides." },
        { q: "Who ended the fight?", options: ["The moon", "A wise star", "A teacher", "A bird"], answer: 1, explain: "The shapes asked a wise star, and she told them to stop fighting." },
        { q: "Which shape has no sharp edges?", options: ["Square", "Triangle", "Rectangle", "Circle"], answer: 3, explain: "A circle is round and has no sharp edges." },
        { q: "Fill in the blank: I saw ___ eagle.", options: ["an", "a", "the", "no word"], answer: 0, explain: "Eagle starts with a vowel sound, so we use **an**." },
        { q: "What did the shapes learn in the end?", options: ["To fight more", "To live alone", "That together they can create wonders", "That one shape is best"], answer: 2, explain: "Together they can make beautiful pictures and patterns." }
      ]
    },
    {
      id: "out-in-the-garden",
      title: "Out in the Garden",
      section: "Santoor",
      summary: "A cheerful poem about playing outdoors with a ball, a kite and friends. The children bounce, throw, catch, pull, fly, run, skip, jump, slide and swing. The lesson also shows how to join two words with ‘and’.",
      notes: [
        { heading: "Idea of the poem", points: [
          "A child plays in the garden on each fine day.",
          "With the ball, the child bounces, throws and catches. With the kite, the child tugs, pulls and flies it.",
          "With friends, the child runs, skips, jumps, sways, slides and swings.",
          "The poem shows how much fun outdoor play is."
        ] },
        { heading: "Language work in the lesson", points: [
          "New words: bounce, throw, slide, sway.",
          "We can join two words with **and**: run and skip, give and take, sing and dance, eat and drink.",
          "Children talk about the games they play outside, and about being careful while playing."
        ] },
        { heading: "Speaking and doing", points: [
          "Children name other games and say what they call them in their mother tongue.",
          "In the activity, children make a paper bag puppet with a paper bag, colours and thread."
        ] }
      ],
      formulas: ["Theme: outdoor play", "Ball: bounce, throw, catch", "Kite: tug, pull, fly", "Join with and: run and jump"],
      terms: [
        { term: "Bounce", meaning: "To hit a ball on the ground so that it jumps back up." },
        { term: "Sway", meaning: "To move gently from side to side." },
        { term: "Tug", meaning: "To pull something with a quick pull." },
        { term: "Puppet", meaning: "A toy figure that you move with your hand." }
      ],
      qa: [
        { q: "What do the children do with the ball?", a: "They bounce it, throw it and catch it." },
        { q: "How do the children play with the kite?", a: "They tug the kite, pull it and fly it." },
        { q: "Join with ‘and’: sing, dance.", a: "sing and dance." }
      ],
      quiz: [
        { q: "Where is the child playing in the poem?", options: ["In the garden", "In the kitchen", "In the school hall", "In a bus"], answer: 0, explain: "The poem begins with “Out in the garden”." },
        { q: "Which thing does the child fly?", options: ["A ball", "A kite", "A top", "A boat"], answer: 1, explain: "The child tugs, pulls and flies the kite." },
        { q: "Which word means to move gently from side to side?", options: ["throw", "slide", "sway", "catch"], answer: 2, explain: "To **sway** is to move gently from side to side." },
        { q: "Join the words with ‘and’: give, take.", options: ["give or take", "give but take", "give take and", "give and take"], answer: 3, explain: "We join the two words with **and**: give and take." },
        { q: "What do the children do with their friends?", options: ["Run and skip", "Sleep", "Read", "Cook"], answer: 0, explain: "With friends, they run and skip, jump and sway, slide and swing." }
      ]
    },
    {
      id: "talking-toys",
      title: "Talking Toys",
      section: "Santoor",
      summary: "In a toy shop on a holiday, the toys hope that customers will choose them. Some children and a mother buy a few toys, and the toys feel happy or sad each time. The lesson also practises describing words and plurals with -s and -es.",
      notes: [
        { heading: "What happens", points: [
          "It is a holiday and the market is full of people. The toy shop opens at 9 a.m. The toys wait to see who will buy them.",
          "Two girls just look through the window and pass by, so the toys are sad.",
          "A girl chooses the board game ‘Snakes and Ladders’. Then a mother buys a Vande Bharat toy train for her little son, who calls her Aayi.",
          "Two girls buy marbles and a toy aeroplane. A group of children buys a toy elephant, a spinning top and dancing dolls.",
          "The children leave the shop cheerfully."
        ] },
        { heading: "Toys in the story", points: [
          "The shop has wooden toys, soft toys, board games, bats and balls, a talking doll, a toy kitten, a toy elephant, an aeroplane and a toy phone.",
          "The picture glossary shows Chennapatna toys, Kondapalli dancing dolls and a Vande Bharat toy train."
        ] },
        { heading: "Language work in the lesson", points: [
          "**Describing words** tell us more about a naming word: happy boy, pretty doll, blue frock, red cap.",
          "To make a **plural**, add **s** to most words: cat → cats, doll → dolls.",
          "For words ending in x, s, sh, ch, add **es**: box → boxes, bus → buses, brush → brushes."
        ] }
      ],
      formulas: ["Theme: joy of toys", "Describing word + naming word: pretty doll", "Plural: add s (cats)", "Plural: add es (boxes, buses)"],
      terms: [
        { term: "Describing word", meaning: "A word that tells more about a person, animal or thing, such as red or pretty." },
        { term: "Plural", meaning: "A word that names more than one, such as toys." },
        { term: "Eagerly", meaning: "With great interest and wanting something very much." },
        { term: "Displayed", meaning: "Put out so that people can see." }
      ],
      qa: [
        { q: "Name some toys in the toy shop.", a: "There were wooden toys, soft toys, board games, bats and balls, a doll, a toy kitten, a toy elephant, an aeroplane and a toy phone." },
        { q: "Which toy did the little boy ask his mother to buy?", a: "He asked for the Vande Bharat toy train." },
        { q: "Write the plural of “box” and “cup”.", a: "boxes and cups." }
      ],
      quiz: [
        { q: "When did the toy shop open?", options: ["At 9 a.m.", "At noon", "At night", "At 5 p.m."], answer: 0, explain: "The toy shop opened at 9 a.m." },
        { q: "Which game did the girl choose?", options: ["Ludo", "Snakes and Ladders", "Chess", "Carrom"], answer: 1, explain: "She chose the board game Snakes and Ladders." },
        { q: "Which word in “pretty doll” is the describing word?", options: ["doll", "a", "pretty", "the"], answer: 2, explain: "**Pretty** tells us more about the doll." },
        { q: "What is the plural of “bus”?", options: ["bus", "buss", "buses", "bus’s"], answer: 2, explain: "Words ending in s take **es**: buses." },
        { q: "How did the children leave the shop?", options: ["Cheerfully", "Angrily", "Sadly", "Sleepily"], answer: 0, explain: "They bought their toys and left cheerfully." }
      ]
    },
    {
      id: "paper-boats",
      title: "Paper Boats",
      section: "Santoor",
      summary: "Meena floats paper boats in a stream. A naughty boy keeps overturning them, but he says he wants to play too. Meena kindly teaches him to make boats, and they both enjoy the game. The lesson also practises he and she, and the place words in, on and under.",
      notes: [
        { heading: "What happens", points: [
          "Meena goes to the stream near the bamboo bridge and puts a paper boat in the water. It sails away and she is delighted.",
          "A naughty boy starts overturning her boats. Meena is angry and tells him to stop.",
          "The boy says that it is fun, but then says he will not do it again. He also wants to play, but does not know how to fold the paper.",
          "Meena shows him how to fold and re-fold coloured paper into boats.",
          "Both of them put their boats in the stream and enjoy watching them sail."
        ] },
        { heading: "Characters and message", points: [
          "**Meena** is good at making boats, gets angry when her work is spoiled, but is kind and ready to help.",
          "The **boy** is naughty at first, but he says sorry in his own way and learns something new.",
          "Sharing what we know turns a quarrel into friendship."
        ] },
        { heading: "Language work in the lesson", points: [
          "**He** is used for a boy or a man and **she** for a girl or a woman, so that we do not repeat the name: “Rani likes kites. She likes flying them.”",
          "**Place words** (prepositions) tell where something is: the bat is **on** the bed, the ball is **in** the box, the car is **under** the table.",
          "Children also draw a rangoli and write about a park using clue words."
        ] }
      ],
      formulas: ["Theme: sharing and kindness", "He = boy/man, She = girl/woman", "Place words: in, on, under", "Paper boat: fold and re-fold"],
      terms: [
        { term: "Delighted", meaning: "Very happy and pleased." },
        { term: "Overturn", meaning: "To turn something upside down." },
        { term: "Stream", meaning: "A small river." },
        { term: "Place word", meaning: "A word such as in, on or under that tells where something is." }
      ],
      qa: [
        { q: "Why was Meena angry?", a: "A naughty boy was overturning her paper boats in the stream." },
        { q: "How did Meena help the boy?", a: "She showed him how to fold and re-fold paper to make a boat." },
        { q: "Fill in he or she: Sahil has a top. ___ plays with it.", a: "He plays with it." }
      ],
      quiz: [
        { q: "What was Meena playing with?", options: ["Paper boats", "Kites", "Marbles", "Dolls"], answer: 0, explain: "She was putting paper boats in the stream." },
        { q: "Why did the boy overturn the boats?", options: ["He was angry", "He thought it was fun", "He wanted to sell them", "He was hungry"], answer: 1, explain: "He said, “Because it is fun.”" },
        { q: "What did the boy not know?", options: ["How to swim", "How to run", "How to fold paper into a boat", "How to read"], answer: 2, explain: "He did not know how to fold paper to make boats." },
        { q: "Choose the right word: The ball is ___ the box.", options: ["on", "under", "he", "in"], answer: 3, explain: "The ball is **in** the box, which means inside it." },
        { q: "Which word can replace “Durga” in the next sentence?", options: ["She", "He", "It", "They"], answer: 0, explain: "Durga is a girl, so we use **she**." }
      ]
    },
    {
      id: "the-big-laddoo",
      title: "The Big Laddoo",
      section: "Santoor",
      summary: "A funny poem that imagines all laddoos joined into one big laddoo, all children into one big child and all seas into one big sea. When the big child throws the big laddoo into the big sea, there is a big splish-splash. The lesson also looks at describing words, blends and the festival of Sankranti.",
      notes: [
        { heading: "Idea of the poem", points: [
          "The poem asks, “What if all the laddoos were one laddoo?” That laddoo would be very big.",
          "It also imagines one big child and one big sea.",
          "At the end the big child throws the big laddoo into the big sea, and there is a big SPLISH-SPLASH.",
          "The poem is full of fun, and the word BIG is repeated many times."
        ] },
        { heading: "Language work in the lesson", points: [
          "Children write words that describe a laddoo, such as round, sweet, yellow or tasty.",
          "The blends **pl**, **cl** and **bl** are practised: play, plum, cloud, clock, blue, blanket.",
          "Male and female pairs are matched: cock – hen, lion – lioness, peacock – peahen, horse – mare (the female horse is a mare), bull – cow, drake – duck."
        ] },
        { heading: "Festival and food", points: [
          "**Khichdi** is cooked with rice and lentils and is eaten as a meal and at festivals.",
          "It is a special dish for the harvest festival, which is known as Makar Sankranti, Pongal, Lohri, Bihu and by many other names in India.",
          "On this day people thank the Sun God for a good harvest, and flying kites is popular."
        ] }
      ],
      formulas: ["Theme: imagination and fun", "Describing words for laddoo: round, sweet, tasty", "Blends: pl, cl, bl", "Harvest festival: Sankranti, Pongal, Lohri, Bihu"],
      terms: [
        { term: "Laddoo", meaning: "A round Indian sweet." },
        { term: "Splish-splash", meaning: "The sound of something falling into water." },
        { term: "Harvest", meaning: "The time when farmers cut and collect the crops." },
        { term: "Khichdi", meaning: "A dish made with rice and lentils." }
      ],
      qa: [
        { q: "What would happen if the big child threw the big laddoo into the big sea?", a: "There would be a big splish-splash." },
        { q: "Name some round things that we can eat and some that we cannot.", a: "We can eat laddoos, oranges and tomatoes. We cannot eat a ball, a stone or the Moon." },
        { q: "What is khichdi made of?", a: "Khichdi is cooked with rice and lentils." }
      ],
      quiz: [
        { q: "What does the big child do with the big laddoo?", options: ["Throws it into the sea", "Eats it all", "Shares it", "Hides it"], answer: 0, explain: "The big child throws it into the big sea." },
        { q: "What sound is heard at the end of the poem?", options: ["Ring-ring", "Splish-splash", "Tick-tock", "Bow-wow"], answer: 1, explain: "The poem ends with a BIG SPLISH-SPLASH." },
        { q: "Which word begins with the blend ‘cl’?", options: ["plum", "blue", "cloud", "play"], answer: 2, explain: "**Cloud** begins with the sounds c and l together." },
        { q: "What is the female of ‘peacock’?", options: ["hen", "cow", "duck", "peahen"], answer: 3, explain: "The female of a peacock is a **peahen**." },
        { q: "Which dish is made of rice and lentils?", options: ["Khichdi", "Kheer", "Laddoo", "Halwa"], answer: 0, explain: "**Khichdi** is cooked with rice and lentils." }
      ]
    },
    {
      id: "thank-god",
      title: "Thank God!",
      section: "Santoor",
      summary: "A farmer who grows fruit takes a basket of grapes as a gift for the king. The playful king throws grapes at him, and the farmer says “Thank God!” each time because he could have brought heavy watermelons instead. This is a Jataka tale. The lesson also practises opposites, and is and are.",
      notes: [
        { heading: "What happens", points: [
          "A farmer who likes fruit grows many kinds on his land, with special care for grapes and watermelons.",
          "When the fruit is ripe, he decides to take the best fruit as a gift for the king. His wife says the watermelons and grapes are the best.",
          "The palace is far, and watermelons are heavy, so he takes a basket of grapes.",
          "In the royal garden, the king is in a playful mood. He eats a grape and then throws grapes at the farmer.",
          "Each time a grape hits his forehead, the farmer says, “Thank God!” He explains to the surprised king that watermelons would have hurt much more."
        ] },
        { heading: "Characters and message", points: [
          "The **farmer** is hard-working, wise and always thankful.",
          "The **king** is playful and surprised by the farmer’s answer.",
          "We should be thankful and look at the good side of things, even when something small goes wrong."
        ] },
        { heading: "Language work in the lesson", points: [
          "**Opposites** have the opposite meaning: heavy – light, thick – thin, long – short, soft – hard, slow – fast.",
          "Use **is** for one thing and **are** for more than one: The table **is** wooden. The toys **are** on the shelf.",
          "Children also listen to the funny poem “Aachoo!” about an elephant with a cold, and put the steps of a fruit salad in order."
        ] }
      ],
      formulas: ["Theme: being thankful", "heavy ↔ light", "is = one, are = more than one", "A Jataka tale"],
      terms: [
        { term: "Jataka tale", meaning: "An old Indian story with a lesson." },
        { term: "Royal", meaning: "Belonging to a king or queen." },
        { term: "Opposite", meaning: "A word with the contrary meaning, such as heavy and light." },
        { term: "Wise", meaning: "Clever and sensible." }
      ],
      qa: [
        { q: "Why did the farmer decide to take grapes?", a: "The palace was far away, and watermelons were too heavy to carry." },
        { q: "Why did the farmer say “Thank God!”?", a: "He was thankful that he had brought light grapes and not heavy watermelons, which would have hurt more." },
        { q: "Write the opposite of “slow” and “thick”.", a: "fast and thin." }
      ],
      quiz: [
        { q: "What gift did the farmer take for the king?", options: ["Grapes", "Watermelons", "Mangoes", "Sweets"], answer: 0, explain: "He put bunches of grapes in a basket." },
        { q: "Why did he not take watermelons?", options: ["They were small", "They were too heavy", "The king did not like them", "They were not ripe"], answer: 1, explain: "The way to the palace was long, and watermelons are heavy." },
        { q: "What did the king do playfully?", options: ["Sang a song", "Gave a coin", "Threw grapes at the farmer", "Ran away"], answer: 2, explain: "He threw grapes, and one hit the farmer’s forehead." },
        { q: "What is the opposite of ‘light’ in this story?", options: ["soft", "small", "slow", "heavy"], answer: 3, explain: "The farmer knew that the watermelon was **heavy** and the grapes were light." },
        { q: "Choose the right word: These mangoes ___ sweet.", options: ["are", "is", "am", "be"], answer: 0, explain: "Mangoes means more than one, so we use **are**." }
      ]
    },
    {
      id: "madhus-wish",
      title: "Madhu’s Wish",
      section: "Santoor",
      summary: "By Sudha Murty. Madhu loves food. He shares his lunch with an old man, who lets him wish for anything from a tree. Madhu asks only for food, and he gets many tasty things. But he gets hiccups and there is no water, and then he learns how important water is.",
      notes: [
        { heading: "What happens", points: [
          "Madhu always wants to eat different foods. Every day at noon he eats lunch under a banyan tree.",
          "One day he shares his food with a hungry old man. The old man is pleased and tells him that the tree will grant him any wish.",
          "Madhu asks for different foods and nothing else. The tree gives him laddoos, fruit, and savouries like samosas, kachori and vada.",
          "He gets hiccups and wants water, but he had asked only for food. Sharbat, kheer and badam milk do not stop the hiccups.",
          "At last he asks for only water. A jug of water appears, he drinks it, and the hiccups stop. He learns that no other drink can replace water."
        ] },
        { heading: "Characters and message", points: [
          "**Madhu** is kind to share his food, but he is greedy for food and does not think before he speaks.",
          "The **old man** has special powers and rewards kindness.",
          "We should think carefully before we wish for something. Water is very important to our lives."
        ] },
        { heading: "Language work in the lesson", points: [
          "Words that tell about a person’s nature: **kind** (shares), **greedy** (wants everything), **generous** (gives freely), **brave**, **polite**, **selfish**, **lazy**.",
          "Join sentences with **and** to add things: Aman has a pen, a pencil and an eraser.",
          "Join sentences with **but** to show a difference: I like cartoons but my sister likes movies."
        ] }
      ],
      formulas: ["Theme: kindness and the value of water", "kind = shares, greedy = wants too much", "and = adds, but = shows a difference", "Author: Sudha Murty"],
      terms: [
        { term: "Savouries", meaning: "Salty snacks such as samosas and potato chips." },
        { term: "Hiccups", meaning: "Sudden small sounds from the throat that we cannot control." },
        { term: "Greedy", meaning: "Wanting much more than one needs." },
        { term: "Generous", meaning: "Happy to give or share." }
      ],
      qa: [
        { q: "Why did the tree ask Madhu to think over his wish?", a: "The tree wanted Madhu to think carefully and not to ask only for food." },
        { q: "Name some foods that Madhu ate.", a: "Madhu ate laddoos, fruits like grapes and mangoes, and savouries like samosas, kachori and vada." },
        { q: "Join with ‘but’: I like tea. My sister likes milk.", a: "I like tea but my sister likes milk." }
      ],
      quiz: [
        { q: "Where did Madhu eat his lunch?", options: ["In school", "Under a banyan tree", "By a river", "In a field"], answer: 1, explain: "He sat under a banyan tree every day at noon." },
        { q: "What did Madhu do for the old man?", options: ["Gave him money", "Sent him away", "Shared his food", "Gave him a coat"], answer: 2, explain: "Madhu felt sorry for him and shared his food." },
        { q: "What problem did Madhu get after eating a lot?", options: ["A cold", "A headache", "A fever", "Hiccups"], answer: 3, explain: "He got hiccups and could not find water." },
        { q: "Which word means ‘happy to give or share’?", options: ["generous", "greedy", "lazy", "selfish"], answer: 0, explain: "A **generous** person gives freely." },
        { q: "What did Madhu finally ask the tree for?", options: ["Sweets", "Water", "Fruits", "Money"], answer: 1, explain: "He asked for water, because no drink can replace it." }
      ]
    },
    {
      id: "night",
      title: "Night",
      section: "Santoor",
      summary: "A short poem in which a child wonders where the sun goes at night. It sinks behind a distant hill, the world grows dark and still, and the child sleeps until the sun peeps out again in the morning. The lesson also practises the blends sp, st and sk, and words made with ‘sun’.",
      notes: [
        { heading: "Idea of the poem", points: [
          "The child wonders where the bright sun goes at night.",
          "The sun sinks behind a distant hill, and the world becomes dark and still.",
          "The child goes to bed and sleeps until the next day begins to peep.",
          "When the child opens his eyes, the sun is shining again."
        ] },
        { heading: "Language work in the lesson", points: [
          "New words: **wonder** (to ask yourself about something), **distant** (far away), **peep** (to appear a little).",
          "The blends **sp**, **st** and **sk** are practised: spy, star, sky, spoon, store, skate.",
          "We can add **sun** to make new words: sunlight, sunflower, sunrays, sunset, sunrise, sunglasses, Sunday."
        ] },
        { heading: "Speaking and doing", points: [
          "Children talk about the colours of the sky at sunrise and sunset, and what they can see in the night sky.",
          "The game “I Spy” is played by giving a clue, such as “I spy something that is blue”."
        ] }
      ],
      formulas: ["Theme: day and night", "The sun sets and the sun rises", "Blends: sp, st, sk", "sun + set = sunset"],
      terms: [
        { term: "Wonder", meaning: "To think and ask yourself about something." },
        { term: "Distant", meaning: "Far away." },
        { term: "Peep", meaning: "To show or appear a little bit." },
        { term: "Sunset", meaning: "The time in the evening when the sun goes down." }
      ],
      qa: [
        { q: "Where does the sun go at the end of the day, according to the poem?", a: "It sinks behind a distant hill." },
        { q: "What does the child see when he opens his eyes in the morning?", a: "The sun is shining down on him." },
        { q: "Make a new word with ‘sun’ and ‘set’.", a: "sunset." }
      ],
      quiz: [
        { q: "What does the poem wonder about?", options: ["Where the moon lives", "Where the sun goes at night", "Where the wind blows", "Where rain comes from"], answer: 1, explain: "The child wonders where the sun goes at night." },
        { q: "What happens when the sun goes behind the hill?", options: ["The world grows dark and still", "It starts to rain", "The birds sing", "The sky turns blue"], answer: 0, explain: "The world grows dark and still." },
        { q: "Which word means ‘far away’?", options: ["bright", "still", "distant", "peep"], answer: 2, explain: "**Distant** means far away." },
        { q: "Which word begins with the blend ‘sk’?", options: ["star", "spoon", "storm", "sky"], answer: 3, explain: "**Sky** begins with the sounds s and k together." },
        { q: "Which of these is found in the sky?", options: ["Moon", "Shoes", "Computer", "Monkeys"], answer: 0, explain: "We see the Sun, the Moon, stars and clouds in the sky." }
      ]
    },
    {
      id: "chanda-mama-counts-the-stars",
      title: "Chanda Mama Counts the Stars",
      section: "Santoor",
      summary: "Chanda Mama, the Moon, tries to count all the stars but always falls asleep or forgets the number, and he cries. The Sun tells him that the number of stars is the same as the number of lovely children, and he becomes happy. The lesson also practises ‘here’ and ‘there’.",
      notes: [
        { heading: "What happens", points: [
          "Chanda Mama, the Moon, begins to count the stars: 1, 2, 3 and so on up to 999. Then he yawns and falls asleep.",
          "The Sun peeps out from behind the clouds, and it is morning. Chanda Mama wakes in the evening and has forgotten where he stopped.",
          "He tries night after night but keeps forgetting. One night he is upset and begins to cry.",
          "The Sun smiles and says that the number of stars in the sky is the same as the number of lovely children.",
          "Chanda Mama is happy. Now the Moon comes out every night, looks at the stars and the children, and smiles."
        ] },
        { heading: "Characters and message", points: [
          "**Chanda Mama** (the Moon) is patient, but he gets tired and sad.",
          "The **Sun** is kind and cheerful and helps him.",
          "Some things are too many to count. Children are as precious as stars."
        ] },
        { heading: "Language work in the lesson", points: [
          "Use **here** for something that is near you: Here is my bicycle.",
          "Use **there** for something that is far from you: The Moon is there in the sky.",
          "Children sort things that can be counted easily, such as fingers on one hand, and things that are too many to count, such as hairs on the head."
        ] }
      ],
      formulas: ["Theme: counting and wonder", "here = near, there = far", "Stars = number of children", "Chanda Mama = the Moon"],
      terms: [
        { term: "Chanda Mama", meaning: "A loving Indian name for the Moon." },
        { term: "Count", meaning: "To say numbers one by one to find how many." },
        { term: "Tears", meaning: "Drops of water from the eyes when we cry." },
        { term: "Here / There", meaning: "Here means near us. There means far from us." }
      ],
      qa: [
        { q: "Why was Chanda Mama upset?", a: "He could never finish counting the stars because he fell asleep and forgot the number." },
        { q: "Who helped Chanda Mama, and how?", a: "The Sun helped him. He said that the number of stars is the same as the number of lovely children." },
        { q: "Fill in here or there: My brother lives in Delhi. I live ___ with my mother.", a: "I live here with my mother." }
      ],
      quiz: [
        { q: "Who is Chanda Mama?", options: ["The Sun", "The Moon", "A star", "A cloud"], answer: 1, explain: "Chanda Mama is the Moon." },
        { q: "What did Chanda Mama try to count?", options: ["Clouds", "Children", "Stars", "Birds"], answer: 2, explain: "He tried to count the stars in the sky." },
        { q: "Why could he not finish counting?", options: ["He was hungry", "He lost his glasses", "It rained", "He fell asleep and forgot the count"], answer: 3, explain: "He fell asleep and forgot where he had stopped." },
        { q: "Complete: The Moon is ___ in the sky.", options: ["there", "here", "this", "my"], answer: 0, explain: "The Moon is far away, so we say **there**." },
        { q: "Which of these is too many to count easily?", options: ["Fingers on one hand", "Hairs on your head", "Eyes on your face", "Pencils in your box"], answer: 1, explain: "The hairs on your head are too many to count easily." }
      ]
    },
    {
      id: "chandrayaan",
      title: "Chandrayaan",
      section: "Santoor",
      summary: "Curious Rani sees on TV that India has landed on the Moon. With her brother Pratik, she visits Nandini Aunty, a scientist, who explains that a rocket takes a vehicle to the Moon. Chandrayaan means ‘Moon vehicle’; it was launched on 14 July 2023 and landed on 23 August 2023. The lesson also revises ‘a’ and ‘an’.",
      notes: [
        { heading: "What happens", points: [
          "Rani is a curious girl who asks many questions, such as why the sky is blue.",
          "One evening she hears her mother sing about Chanda Mama and asks how far the Moon is. Her mother says it is very far.",
          "Next morning her brother Pratik shouts in excitement that India is on the Moon. Rani sees pictures of machines on the Moon on TV and wants to know how it happened.",
          "They visit their friend Vivaan’s house. His mother, Nandini Aunty, is a scientist, and the house has models and photographs of rockets.",
          "Aunty explains that a rocket is used to go to the Moon. **Chandra** means Moon and **Yaan** means vehicle. Chandrayaan was launched on 14 July 2023 and landed on the Moon on 23 August 2023.",
          "Rani asks if she can go to the Moon too, and Aunty says, “Maybe, one day.”"
        ] },
        { heading: "Characters and message", points: [
          "**Rani** is curious and loves to learn.",
          "**Pratik** is her excited elder brother, and **Nandini Aunty** is a friendly scientist.",
          "Asking questions helps us to learn. India’s Chandrayaan is a proud moment for our country."
        ] },
        { heading: "Language work in the lesson", points: [
          "Use **a** before a singular noun that begins with a consonant sound: a girl, a village.",
          "Use **an** before a singular noun that begins with a vowel sound: an elephant, an umbrella.",
          "The blends **sk**, **sw**, **sp** and **st** are practised in words like skirt, swings, spoon and story. The children also read the days of the week in order."
        ] }
      ],
      formulas: ["Theme: curiosity and science", "Chandra = Moon, Yaan = vehicle", "Launched 14 July 2023, landed 23 August 2023", "a + consonant sound, an + vowel sound"],
      terms: [
        { term: "Curious", meaning: "Eager to know and learn about things." },
        { term: "Scientist", meaning: "A person who studies and finds out how things work." },
        { term: "Rocket", meaning: "A vehicle that goes very high into space." },
        { term: "Chandrayaan", meaning: "India’s Moon mission; Chandra means Moon and Yaan means vehicle." }
      ],
      qa: [
        { q: "How do you know that Rani was curious?", a: "She asked many questions, such as why the sky is blue and where the Sun goes at night." },
        { q: "What do the words Chandra and Yaan mean?", a: "Chandra means Moon and Yaan means vehicle." },
        { q: "When did Chandrayaan land on the Moon?", a: "It landed on the Moon on 23 August 2023." }
      ],
      quiz: [
        { q: "Who is Nandini Aunty?", options: ["A scientist", "A teacher", "A doctor", "A farmer"], answer: 0, explain: "Nandini Aunty is a scientist and Vivaan’s mother." },
        { q: "What is used to reach the Moon?", options: ["A bus", "A rocket", "A train", "A boat"], answer: 1, explain: "A rocket is used to travel to the Moon." },
        { q: "What does ‘Yaan’ mean?", options: ["Moon", "Star", "Vehicle", "Sky"], answer: 2, explain: "Chandra means Moon and **Yaan** means vehicle." },
        { q: "Fill in the blank: Maya bought ___ umbrella.", options: ["a", "the", "no word", "an"], answer: 3, explain: "Umbrella begins with a vowel sound, so we use **an**." },
        { q: "What was Rani’s brother’s name?", options: ["Pratik", "Vivaan", "Badal", "Chinna"], answer: 0, explain: "Her elder brother was Pratik." }
      ]
    }
  ]
});
