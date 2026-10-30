// PSEB Class 3 English: grammar and writing (PSEB book lessons added separately). Format: see CONTENT_GUIDE.md
// Format: see CONTENT_GUIDE.md. All examples and model answers are original.
StudyData.add(3, "englishpb", {
  // What this content follows. match: "textbook" | "older-book" | "topic". Set reviewed to a date once a teacher has checked it.
  syllabus: {board: "PSEB", match: "textbook", books: ["Rainbow-3"], note: "Grammar and writing, plus every lesson of Rainbow-3 (summarised in our own words).", reviewed: false},
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

    // ───────────────────────────── RAINBOW ─────────────────────────────
    {
      "id": "rb3-me-and-my-family",
      "title": "Me and My Family",
      "section": "Rainbow",
      "summary": "Ravi, an eight-year-old boy in class three, tells us about the members of his joint family: their ages, work and likes.",
      "notes": [
        {
          "heading": "Ravi and his grandparents",
          "points": [
            "Ravi is eight years old and studies in class three. He lives in a **joint family**.",
            "His grandfather is sixty-nine and is a shopkeeper. He likes to read the newspaper.",
            "His grandmother is sixty-five and very kind. She likes to read holy books."
          ]
        },
        {
          "heading": "Parents, uncle and aunt",
          "points": [
            "Ravi's father is forty and is a doctor. He likes to help the poor.",
            "His mother is thirty-five and is a homemaker. She likes to cook.",
            "His uncle is a pilot who loves music. His aunt is a nurse who works in a hospital."
          ]
        },
        {
          "heading": "Brother, sister and pet",
          "points": [
            "His brother is ten and studies in class five. He likes to play cricket.",
            "His sister is seven, studies in class two and likes to play with her doll.",
            "His pet dog is called Bob. Bob is faithful and likes to play with a ball."
          ]
        },
        {
          "heading": "Language corner",
          "points": [
            "Naming words (nouns) name people, places, animals and things, like boy, school and cat.",
            "Gender pairs: boy – girl, uncle – aunt, father – mother, brother – sister, grandfather – grandmother."
          ]
        }
      ],
      "terms": [
        {
          "term": "Joint family",
          "meaning": "A big family in which grandparents, parents, uncles, aunts and children live together."
        },
        {
          "term": "Homemaker",
          "meaning": "A person who looks after the home and the family."
        },
        {
          "term": "Faithful",
          "meaning": "Always loyal to its owner, like a pet dog."
        },
        {
          "term": "Shopkeeper",
          "meaning": "A person who owns a shop and sells things."
        },
        {
          "term": "Naming word",
          "meaning": "A word that names a person, place, animal or thing."
        }
      ],
      "qa": [
        {
          "q": "Who is Ravi's uncle and what does he do?",
          "a": "Ravi's uncle is thirty-eight years old. He is a pilot and he is fond of music."
        },
        {
          "q": "Tell two things about Ravi's pet.",
          "a": "The pet is called Bob. It is faithful and likes to play with a ball."
        }
      ],
      "quiz": [
        {
          "q": "What does Ravi's grandfather do?",
          "options": [
            "He is a doctor",
            "He is a pilot",
            "He is a nurse",
            "He is a shopkeeper"
          ],
          "answer": 3,
          "explain": "Ravi's grandfather is a shopkeeper who likes to read the newspaper."
        },
        {
          "q": "Who is a nurse in Ravi's family?",
          "options": [
            "His mother",
            "His sister",
            "His aunt",
            "His grandmother"
          ],
          "answer": 2,
          "explain": "His aunt is a nurse and works in a hospital."
        },
        {
          "q": "What is the name of Ravi's pet?",
          "options": [
            "Tom",
            "Moti",
            "Bob",
            "Sheru"
          ],
          "answer": 2,
          "explain": "The pet is named Bob."
        },
        {
          "q": "Which game does Ravi's brother like?",
          "options": [
            "Football",
            "Cricket",
            "Hockey",
            "Kabaddi"
          ],
          "answer": 1,
          "explain": "His brother is ten years old and likes to play cricket."
        },
        {
          "q": "What is the opposite (gender) word of uncle?",
          "options": [
            "Aunt",
            "Father",
            "Sister",
            "Mother"
          ],
          "answer": 0,
          "explain": "Uncle is a male and aunt is the female word."
        }
      ]
    },
    {
      "id": "rb3-a-visit-to-a-park",
      "title": "A Visit to a Park",
      "section": "Rainbow",
      "summary": "Bittu and his friends go to a park on a bright Sunday and enjoy swings, slides, flowers, birds and a fountain.",
      "notes": [
        {
          "heading": "The trip",
          "points": [
            "It is Sunday, a holiday, and the day is bright.",
            "Bittu and his friends reach the park at nine in the morning and are very happy."
          ]
        },
        {
          "heading": "What the children do",
          "points": [
            "Preet rides his new bicycle. Vicky and Veena fly a kite.",
            "Sumit and Bittu enjoy the slides. Komal enjoys the swings.",
            "Some children play football."
          ]
        },
        {
          "heading": "What else is in the park",
          "points": [
            "There is a big tree in the middle where birds chirp.",
            "A lady and a baby sit on a bench near the tree.",
            "Butterflies and bees sip nectar from many kinds of flowers.",
            "A gardener waters the plants, a fountain runs, and a duck swims with its ducklings in the pool."
          ]
        }
      ],
      "terms": [
        {
          "term": "Nectar",
          "meaning": "The sweet juice inside flowers that bees and butterflies drink."
        },
        {
          "term": "Chirping",
          "meaning": "The sound small birds make."
        },
        {
          "term": "Fountain",
          "meaning": "A water jet that shoots up into the air."
        },
        {
          "term": "Slide",
          "meaning": "A play thing that children slip down."
        },
        {
          "term": "Holiday",
          "meaning": "A day when school is closed."
        }
      ],
      "qa": [
        {
          "q": "On which day do the children go to the park?",
          "a": "They go on Sunday, which is a holiday."
        },
        {
          "q": "What are the bees and butterflies doing?",
          "a": "They are sipping nectar from the flowers."
        }
      ],
      "quiz": [
        {
          "q": "What day is it in the story?",
          "options": [
            "Monday",
            "Friday",
            "Saturday",
            "Sunday"
          ],
          "answer": 3,
          "explain": "The story says today it is Sunday."
        },
        {
          "q": "Who is riding a new bicycle?",
          "options": [
            "Komal",
            "Sumit",
            "Veena",
            "Preet"
          ],
          "answer": 3,
          "explain": "Preet rides his new bicycle."
        },
        {
          "q": "What is the gardener doing?",
          "options": [
            "Flying a kite",
            "Playing football",
            "Watering the plants",
            "Riding a swing"
          ],
          "answer": 2,
          "explain": "The gardener is watering the plants."
        },
        {
          "q": "Where are the birds chirping?",
          "options": [
            "On the slide",
            "On the big tree",
            "In the pool",
            "On the bench"
          ],
          "answer": 1,
          "explain": "The birds chirp on the big tree in the middle of the park."
        },
        {
          "q": "Who are swimming in the pool?",
          "options": [
            "A duck and its ducklings",
            "Fish and frogs",
            "Two cows",
            "Bees"
          ],
          "answer": 0,
          "explain": "A duck and its ducklings swim in the pool."
        }
      ]
    },
    {
      "id": "rb3-trees",
      "title": "Trees (Poem)",
      "section": "Rainbow",
      "summary": "A short poem by Harry Behn that praises trees as the kindest things: they give shade, shelter birds and are the first and last to touch the sunlight.",
      "notes": [
        {
          "heading": "Trees are kind",
          "points": [
            "The poet says trees are the kindest things he knows.",
            "Trees never harm anyone. They simply grow."
          ]
        },
        {
          "heading": "What trees give",
          "points": [
            "Trees spread cool shade for sleepy cows.",
            "They gather birds among their strong branches (boughs)."
          ]
        },
        {
          "heading": "Morning and evening",
          "points": [
            "Trees are the first to touch the beams of the morning sun.",
            "They are the last to hold the light when evening turns into night."
          ]
        },
        {
          "heading": "Message",
          "points": [
            "We should love and protect trees because they help animals, birds and people.",
            "We can plant a tree and water it to show our love for trees."
          ]
        }
      ],
      "terms": [
        {
          "term": "Boughs",
          "meaning": "Strong branches of a tree."
        },
        {
          "term": "Shade",
          "meaning": "A cool, dark place under a tree."
        },
        {
          "term": "Beams",
          "meaning": "Rays of light."
        },
        {
          "term": "Gather",
          "meaning": "To bring together."
        },
        {
          "term": "Harm",
          "meaning": "To hurt."
        }
      ],
      "qa": [
        {
          "q": "Why does the poet call trees kind?",
          "a": "Trees do not harm anyone. They give shade to cows and a home to birds."
        },
        {
          "q": "When do trees touch the morning sunlight first?",
          "a": "Trees touch the morning sun's beams first, before anything else when the day begins."
        }
      ],
      "quiz": [
        {
          "q": "Who wrote the poem 'Trees'?",
          "options": [
            "Harry Behn",
            "Ruskin Bond",
            "Tagore",
            "Anil Kumar"
          ],
          "answer": 0,
          "explain": "The poem is by Harry Behn."
        },
        {
          "q": "Trees spread shade for",
          "options": [
            "hungry tigers",
            "tired cars",
            "small fish",
            "sleepy cows"
          ],
          "answer": 3,
          "explain": "The poem says trees spread shade for sleepy cows."
        },
        {
          "q": "What does a tree gather among its boughs?",
          "options": [
            "Stones",
            "Clouds",
            "Birds",
            "Fish"
          ],
          "answer": 2,
          "explain": "Trees gather birds among their boughs."
        },
        {
          "q": "What are boughs?",
          "options": [
            "Roots",
            "Strong branches",
            "Seeds",
            "Flowers"
          ],
          "answer": 1,
          "explain": "Boughs are the strong branches of a tree."
        },
        {
          "q": "Trees do not",
          "options": [
            "grow",
            "harm anyone",
            "give shade",
            "hold the light"
          ],
          "answer": 1,
          "explain": "The poem says trees do not harm. They simply grow."
        }
      ]
    },
    {
      "id": "rb3-the-clock-my-friend",
      "title": "The Clock – My Friend",
      "section": "Rainbow",
      "summary": "A boy tells how his clock helps him follow a time table and be on time, while his classmate Anmol is always late.",
      "notes": [
        {
          "heading": "Anmol is late",
          "points": [
            "Anmol, the narrator's classmate, is late again. His teacher and parents tell him to value time, but he does not care.",
            "He never bothers, so the teacher has warned him many times."
          ]
        },
        {
          "heading": "What the teacher taught",
          "points": [
            "Mrs Manjit, the English teacher, taught that time never stops and cannot be brought back.",
            "Time is precious, even more than money.",
            "She advised the class to keep a clock in the room and make and follow a time table."
          ]
        },
        {
          "heading": "The narrator's day",
          "points": [
            "His big grandfather clock rings at 6:00 a.m. to wake him up.",
            "He brushes, bathes and puts on his uniform. The school bus comes at 7:30 a.m.",
            "He is back home at 2 o'clock, plays at 5:00 p.m. and goes to bed at 9 o'clock."
          ]
        },
        {
          "heading": "The lesson",
          "points": [
            "Being punctual and following a time table helps us become disciplined.",
            "The narrator plans to gift a clock to his friend so he will not be late."
          ]
        }
      ],
      "terms": [
        {
          "term": "Punctual",
          "meaning": "Reaching a place at the right time."
        },
        {
          "term": "Discipline",
          "meaning": "Following rules and good habits."
        },
        {
          "term": "Time table",
          "meaning": "A list that tells what to do at what time."
        },
        {
          "term": "Precious",
          "meaning": "Very valuable."
        },
        {
          "term": "Uniform",
          "meaning": "The special dress worn by students of a school."
        }
      ],
      "qa": [
        {
          "q": "Why should we respect time?",
          "a": "Time never stops and cannot come back. It is more valuable than money."
        },
        {
          "q": "How does the clock help the narrator?",
          "a": "It wakes him up, helps him to be punctual and helps him follow his time table."
        }
      ],
      "quiz": [
        {
          "q": "Who is late for school again?",
          "options": [
            "Anmol",
            "Manjit",
            "The narrator",
            "The teacher"
          ],
          "answer": 0,
          "explain": "The classmate Anmol is late again."
        },
        {
          "q": "At what time does the clock ring in the morning?",
          "options": [
            "5:00 a.m.",
            "7:30 a.m.",
            "9:00 a.m.",
            "6:00 a.m."
          ],
          "answer": 3,
          "explain": "The clock rings at six in the morning."
        },
        {
          "q": "What helps us know the time?",
          "options": [
            "A book",
            "A cap",
            "A clock",
            "A bag"
          ],
          "answer": 2,
          "explain": "The teacher said a clock helps us to know time."
        },
        {
          "q": "What will the narrator gift his friend?",
          "options": [
            "A watch strap",
            "A bag",
            "A clock",
            "A book"
          ],
          "answer": 2,
          "explain": "He thinks a clock will stop his friend being late."
        },
        {
          "q": "Time is more valuable than",
          "options": [
            "a pencil",
            "money",
            "a shirt",
            "a bus"
          ],
          "answer": 1,
          "explain": "The teacher said time is even more valuable than money."
        }
      ]
    },
    {
      "id": "rb3-a-bear-and-a-rabbit",
      "title": "A Bear and a Rabbit",
      "section": "Rainbow",
      "summary": "A bear and a rabbit become friends. When a hunter digs a pit near the bear's cave, the clever rabbit saves his friend's life.",
      "notes": [
        {
          "heading": "Meeting",
          "points": [
            "A bear lives in a cave in a big jungle. One sunny day he rests near a pear tree.",
            "A rabbit named Bunny comes by. The bear offers him a pear, but Bunny likes carrots. The bear likes honey.",
            "Bunny lives in a burrow. Neither of them has a friend, so they decide to be friends."
          ]
        },
        {
          "heading": "The danger",
          "points": [
            "Bunny sees a hunter digging a pit on the way to the bear's cave and covering it with leaves.",
            "He runs to warn the bear, but the hungry bear thinks he is joking and wants to go and find honey."
          ]
        },
        {
          "heading": "The rescue",
          "points": [
            "Bunny cleverly throws a stone to show the pit to the bear. In this way he saves the bear's life.",
            "The bear says sorry for not listening and thanks him.",
            "The lesson: a friend in need is a friend indeed."
          ]
        }
      ],
      "terms": [
        {
          "term": "Burrow",
          "meaning": "A hole in the ground where a rabbit lives."
        },
        {
          "term": "Hunter",
          "meaning": "A person who catches or kills animals."
        },
        {
          "term": "Pit",
          "meaning": "A big hole in the ground."
        },
        {
          "term": "Cave",
          "meaning": "A big hollow place in a hill or rock."
        },
        {
          "term": "Friend in need",
          "meaning": "A friend who helps us when we are in trouble."
        }
      ],
      "qa": [
        {
          "q": "How did Bunny save the bear?",
          "a": "Bunny saw the pit and told the bear, but the bear did not listen. So he threw a stone to show the pit and saved the bear."
        },
        {
          "q": "What did the bear learn at the end?",
          "a": "The bear learnt that a friend in need is a friend indeed."
        }
      ],
      "quiz": [
        {
          "q": "Where did the bear live?",
          "options": [
            "In a cave",
            "In a burrow",
            "In a nest",
            "In a house"
          ],
          "answer": 0,
          "explain": "The bear lived in a cave in a big jungle."
        },
        {
          "q": "What does Bunny like to eat?",
          "options": [
            "Honey",
            "Pear",
            "Grass",
            "Carrot"
          ],
          "answer": 3,
          "explain": "Bunny says he likes carrot."
        },
        {
          "q": "What was the hunter doing?",
          "options": [
            "Catching fish",
            "Cutting a tree",
            "Making honey",
            "Digging a pit"
          ],
          "answer": 3,
          "explain": "The hunter was digging a pit and covering it with leaves."
        },
        {
          "q": "How did Bunny show the pit?",
          "options": [
            "He sang a song",
            "He shouted loudly",
            "He threw a stone",
            "He drew a map"
          ],
          "answer": 2,
          "explain": "Bunny tactfully threw a stone to show the pit."
        },
        {
          "q": "Where does the rabbit live?",
          "options": [
            "In a cave",
            "In a burrow",
            "In a tree",
            "In a pit"
          ],
          "answer": 1,
          "explain": "A rabbit lives in a burrow."
        }
      ]
    },
    {
      "id": "rb3-lazy-param",
      "title": "Lazy Param",
      "section": "Rainbow",
      "summary": "Param is a lazy boy who does not clean himself properly. A bad dream about worms teaches him to get up early and keep clean.",
      "notes": [
        {
          "heading": "A lazy boy",
          "points": [
            "Param stays at home, never plays outside and watches T.V. and plays games on a mobile till late at night.",
            "So he gets up late, and his mother has to pull him out of bed."
          ]
        },
        {
          "heading": "Bad habits",
          "points": [
            "He does not brush his teeth properly and his ears are dirty.",
            "When his mother asks, he says he will clean them tomorrow, but he never keeps his promise."
          ]
        },
        {
          "heading": "The dream",
          "points": [
            "One morning, in front of the mirror, he sees worms coming out of his ears and teeth.",
            "He gets scared and cries for help. Then he wakes up and finds it was a dream."
          ]
        },
        {
          "heading": "What he learns",
          "points": [
            "Param is glad and promises his mother to get up early and bathe properly every day.",
            "Healthy habits: brush well, bathe daily, clean the ears, sleep early and play outside."
          ]
        }
      ],
      "terms": [
        {
          "term": "Lazy",
          "meaning": "Not wanting to work or move."
        },
        {
          "term": "Promise",
          "meaning": "Words we give that we will surely do something."
        },
        {
          "term": "Hygiene",
          "meaning": "Keeping our body and surroundings clean."
        },
        {
          "term": "Mirror",
          "meaning": "Glass in which we see ourselves."
        },
        {
          "term": "Dream",
          "meaning": "Pictures and stories we see in our mind while asleep."
        }
      ],
      "qa": [
        {
          "q": "Why was Param always late for school?",
          "a": "He slept late after watching T.V. and playing games, so he woke up late."
        },
        {
          "q": "What did Param promise his mother?",
          "a": "He promised to get up early and take a proper bath every day."
        }
      ],
      "quiz": [
        {
          "q": "What did Param do till late at night?",
          "options": [
            "Watched T.V. and played games on a mobile",
            "Did his homework",
            "Played cricket",
            "Read a book"
          ],
          "answer": 0,
          "explain": "He used to watch T.V. and play video games till late night."
        },
        {
          "q": "What did Param see in the mirror?",
          "options": [
            "Worms coming out of his ears and teeth",
            "A new dress",
            "His friends",
            "A cat"
          ],
          "answer": 0,
          "explain": "He saw worms in the mirror."
        },
        {
          "q": "Was the worm scene real?",
          "options": [
            "Yes, it was real",
            "It was a story from T.V.",
            "It happened at school",
            "No, it was a dream"
          ],
          "answer": 3,
          "explain": "Param woke up and found that it was just a dream."
        },
        {
          "q": "Who was worried about Param?",
          "options": [
            "His teacher",
            "His friend",
            "His mother",
            "His uncle"
          ],
          "answer": 2,
          "explain": "His mother was worried about him."
        },
        {
          "q": "What did Param not clean properly?",
          "options": [
            "His shoes",
            "His teeth and ears",
            "His pencil box",
            "His school bag"
          ],
          "answer": 1,
          "explain": "He did not brush his teeth well and his ears were dirty."
        }
      ]
    },
    {
      "id": "rb3-the-swing",
      "title": "The Swing (Poem)",
      "section": "Rainbow",
      "summary": "A child on a swing goes high and low, watches the birds and the grass, and imagines wonderful lands where children play all day.",
      "notes": [
        {
          "heading": "Up and down",
          "points": [
            "The swing goes now high, now low.",
            "The child goes up in the air, up to the sky, and then down to the grass."
          ]
        },
        {
          "heading": "What the child sees",
          "points": [
            "From the swing the child watches the birds fly.",
            "When down near the grass, the child sees worms passing by."
          ]
        },
        {
          "heading": "Flying with the wind",
          "points": [
            "With feet in front and hair behind, the child feels like racing the birds with a happy mind.",
            "Over the world and under the tree, nobody knows the things the child sees."
          ]
        },
        {
          "heading": "Wonderful lands",
          "points": [
            "The child imagines wonderful lands where children play from early morning all through the day.",
            "The poem is about fun, imagination and happiness."
          ]
        }
      ],
      "terms": [
        {
          "term": "Swing",
          "meaning": "A seat hung on ropes that moves forwards and backwards."
        },
        {
          "term": "Wonderful",
          "meaning": "Very good or amazing."
        },
        {
          "term": "Early morn",
          "meaning": "The first part of the morning."
        },
        {
          "term": "Rhyming words",
          "meaning": "Words that end with the same sound, like sky and fly."
        },
        {
          "term": "Imagination",
          "meaning": "Seeing pictures in the mind of things that are not in front of us."
        }
      ],
      "qa": [
        {
          "q": "What does the child see from the swing?",
          "a": "The child watches birds fly and sees worms pass on the grass."
        },
        {
          "q": "What do children do in the wonderful lands?",
          "a": "They play from early morning all through the day."
        }
      ],
      "quiz": [
        {
          "q": "What goes high and low?",
          "options": [
            "The wind",
            "The swing",
            "The tree",
            "The sky"
          ],
          "answer": 1,
          "explain": "The swing goes now high and now low."
        },
        {
          "q": "What does the child watch in the sky?",
          "options": [
            "Birds flying",
            "Planes",
            "Kites",
            "Rain"
          ],
          "answer": 0,
          "explain": "The child watches birds fly."
        },
        {
          "q": "With whom does the child race?",
          "options": [
            "A dog",
            "A boy",
            "A car",
            "The birds"
          ],
          "answer": 3,
          "explain": "The child races the birds."
        },
        {
          "q": "Which word rhymes with 'sky'?",
          "options": [
            "grass",
            "tree",
            "fly",
            "play"
          ],
          "answer": 2,
          "explain": "Sky and fly end with the same sound."
        },
        {
          "q": "Where do children play in the poem?",
          "options": [
            "In a school",
            "In a shop",
            "In wonderful lands",
            "In a hospital"
          ],
          "answer": 2,
          "explain": "The child imagines wonderful lands where children play."
        }
      ]
    },
    {
      "id": "rb3-going-to-market",
      "title": "Going to Market",
      "section": "Rainbow",
      "summary": "Sheena goes to the market with her mother and sister Shanu and visits the toy, stationery, fruit, vegetable, shoe and ice-cream shops.",
      "notes": [
        {
          "heading": "The trip begins",
          "points": [
            "Sheena is very happy today. She goes to the market with her mother and her sister Shanu.",
            "They see many shops."
          ]
        },
        {
          "heading": "Toy and stationery shops",
          "points": [
            "At the toy shop Sheena wants a toy ship, but mother says not to buy more toys.",
            "So they go to the stationery shop. Shanu buys a paint brush and colours. Sheena buys a sharpener and coloured sheets."
          ]
        },
        {
          "heading": "Fruits, vegetables and shoes",
          "points": [
            "Mother buys litchi, cherries, chickoo, grapes and plums at the fruit shop.",
            "At the vegetable shop she buys chillies, radish, spinach and potatoes.",
            "At the shoe store she buys shoes for the girls and sandals for herself."
          ]
        },
        {
          "heading": "Ice-cream shop",
          "points": [
            "At last they go to the ice-cream shop. Sheena buys a chocobar, Shanu gets a vanilla ice-cream and mother buys a brick of tutti-fruity for the family.",
            "They go home after great fun."
          ]
        }
      ],
      "terms": [
        {
          "term": "Market",
          "meaning": "A place where many shops sell things."
        },
        {
          "term": "Stationery",
          "meaning": "Things we use for writing and drawing, like pens and pencils."
        },
        {
          "term": "Sharpener",
          "meaning": "A tool used to sharpen a pencil."
        },
        {
          "term": "Spinach",
          "meaning": "A green leafy vegetable called palak."
        },
        {
          "term": "Store",
          "meaning": "A shop."
        }
      ],
      "qa": [
        {
          "q": "Why did Sheena not buy a toy ship?",
          "a": "Her mother said she should not buy more toys."
        },
        {
          "q": "What did the girls' mother buy at the shoe store?",
          "a": "She bought shoes for Sheena and Shanu and a pair of sandals for herself."
        }
      ],
      "quiz": [
        {
          "q": "With whom does Sheena go to the market?",
          "options": [
            "Her teacher",
            "Her mother and sister",
            "Her father and uncle",
            "Her friends"
          ],
          "answer": 1,
          "explain": "Sheena goes with her mother and her sister Shanu."
        },
        {
          "q": "What does Shanu buy at the stationery shop?",
          "options": [
            "A paint brush and colours",
            "A sharpener",
            "A toy ship",
            "Shoes"
          ],
          "answer": 0,
          "explain": "Shanu buys a paint brush and colours."
        },
        {
          "q": "Which vegetable is spinach?",
          "options": [
            "A red fruit",
            "A sweet",
            "A grain",
            "A green leafy vegetable"
          ],
          "answer": 3,
          "explain": "Spinach (palak) is a green leafy vegetable."
        },
        {
          "q": "What does Sheena buy at the ice-cream shop?",
          "options": [
            "A vanilla ice-cream",
            "A brick of tutti-fruity",
            "A cone of mango",
            "A chocobar"
          ],
          "answer": 3,
          "explain": "Sheena buys a chocobar."
        },
        {
          "q": "What does mother buy for herself at the shoe store?",
          "options": [
            "A bag",
            "A hat",
            "Sandals",
            "Socks"
          ],
          "answer": 2,
          "explain": "Mother buys a pair of sandals for herself."
        }
      ]
    },
  ]
});
