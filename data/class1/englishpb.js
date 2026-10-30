// PSEB Class 1 English: grammar and writing (PSEB book lessons added separately). Format: see CONTENT_GUIDE.md
// Format: see CONTENT_GUIDE.md. All examples are original.
StudyData.add(1, "englishpb", {
  // What this content follows. match: "textbook" | "older-book" | "topic". Set reviewed to a date once a teacher has checked it.
  syllabus: {board: "PSEB", match: "textbook", books: ["Rainbow-1"], note: "Grammar and writing, plus every lesson group of Rainbow-1 (summarised in our own words).", reviewed: false},
  chapters: [
    // ───────────────────────── LETTERS AND SOUNDS ─────────────────────────
    {
      id: "the-alphabet",
      title: "The Alphabet",
      section: "Letters and Sounds",
      summary: "The English alphabet has 26 letters. Each letter has a big capital form and a small form.",
      notes: [
        {
          heading: "Capital and small letters",
          points: [
            "The English alphabet has **26 letters**, from A to Z.",
            "Every letter has a **capital** (big) form and a **small** (little) form: A and a, B and b.",
            "Capital letters are used for names, such as Aman, and at the start of a sentence."
          ]
        },
        {
          heading: "The order of the alphabet",
          points: [
            "The letters always come in the same order: A, B, C, D and so on.",
            "Singing the alphabet song helps us remember the order."
          ]
        }
      ],
      terms: [
        { term: "Alphabet", meaning: "All the letters used to write English, from A to Z." },
        { term: "Capital letter", meaning: "A big letter, such as A, B or C." },
        { term: "Small letter", meaning: "A little letter, such as a, b or c." }
      ],
      examples: [
        {
          q: "Write the small letter for the capital letter M.",
          steps: ["M is a capital letter.", "The small form of M is the little letter.", "Small letter: m."],
          answer: "m"
        }
      ],
      qa: [
        {
          q: "What is the alphabet?",
          a: "The alphabet is the set of letters we use to write English words, from A to Z."
        },
        {
          q: "When do we use a capital letter?",
          a: "We use a capital letter for a name, such as Aman, and at the beginning of a sentence."
        }
      ],
      quiz: [
        {
          q: "Which is the small letter of K?",
          options: ["q", "k", "h", "x"],
          answer: 1,
          explain: "The small letter of K is k."
        },
        {
          q: "Which letter comes just after D?",
          options: ["C", "F", "E", "B"],
          answer: 2,
          explain: "The alphabet goes A, B, C, D, E. So E comes after D."
        },
        {
          q: "Which word is a name and begins with a capital letter?",
          options: ["book", "table", "pen", "Asha"],
          answer: 3,
          explain: "Names always begin with a capital letter, so Asha is correct."
        },
        {
          q: "Which is the capital letter of b?",
          options: ["D", "P", "B", "R"],
          answer: 2,
          explain: "The capital letter of b is B."
        },
        {
          q: "How many letters are there in the English alphabet?",
          options: ["20", "24", "26", "30"],
          answer: 2,
          explain: "The English alphabet has 26 letters."
        }
      ]
    },
    {
      id: "vowels-and-consonants",
      title: "Vowels and Consonants",
      section: "Letters and Sounds",
      summary: "Letters are either vowels or consonants. Every word has at least one vowel.",
      notes: [
        {
          heading: "Vowels",
          points: [
            "The vowels are **a, e, i, o, u**.",
            "Every word has at least one vowel: the word cat has a vowel, a.",
            "Vowels make sounds like the start of apple, egg, igloo, orange and umbrella."
          ]
        },
        {
          heading: "Consonants",
          points: [
            "All the other letters are **consonants**, such as b, d, m, s and t.",
            "Consonants and vowels join together to make words: b + a + t = bat."
          ]
        }
      ],
      terms: [
        { term: "Vowel", meaning: "One of the letters a, e, i, o or u." },
        { term: "Consonant", meaning: "Any letter of the alphabet that is not a vowel." },
        { term: "Word", meaning: "A group of letters that has a meaning, such as sun or cat." }
      ],
      examples: [
        {
          q: "Find the vowels in the word mango.",
          steps: ["m is a consonant.", "a is a vowel.", "n and g are consonants.", "o is a vowel."],
          answer: "a and o"
        }
      ],
      qa: [
        {
          q: "Name the five vowels.",
          a: "The five vowels are a, e, i, o and u."
        },
        {
          q: "What is a consonant? Give two examples.",
          a: "A consonant is any letter that is not a vowel. Examples: b and t, as in bat."
        }
      ],
      quiz: [
        {
          q: "Which of these is a vowel?",
          options: ["b", "m", "e", "t"],
          answer: 2,
          explain: "The vowels are a, e, i, o and u. So e is a vowel."
        },
        {
          q: "How many vowels are there in English?",
          options: ["3", "5", "7", "21"],
          answer: 1,
          explain: "There are five vowels: a, e, i, o and u."
        },
        {
          q: "Which letter is a consonant?",
          options: ["a", "u", "o", "d"],
          answer: 3,
          explain: "d is not a vowel, so it is a consonant."
        },
        {
          q: "Which letter is not a vowel?",
          options: ["r", "a", "e", "i"],
          answer: 0,
          explain: "r is a consonant. a, e and i are vowels."
        },
        {
          q: "Which vowel does the word egg begin with?",
          options: ["a", "o", "u", "e"],
          answer: 3,
          explain: "Egg begins with the vowel e."
        }
      ]
    },
    {
      id: "phonics-letter-sounds",
      title: "Phonics: Letter Sounds",
      section: "Letters and Sounds",
      summary: "Phonics teaches the sound each letter makes. Blending the sounds together helps us read words.",
      notes: [
        {
          heading: "Sounds of letters",
          points: [
            "Each letter has a **sound**. Say the sound, not the name: b says “buh”, not “bee”.",
            "s says “sss” as in sun. m says “mmm” as in mango.",
            "Some letters make one sound together: **sh** as in ship, **ch** as in chair, **th** as in thumb."
          ]
        },
        {
          heading: "Blending sounds",
          points: [
            "To read a word, say each sound and then join them together quickly: c-a-t makes **cat**.",
            "Practise with s-u-n (sun) and m-a-p (map)."
          ]
        }
      ],
      terms: [
        { term: "Phonics", meaning: "Learning the sounds of letters so that we can read words." },
        { term: "Sound", meaning: "The noise a letter makes when we say it." },
        { term: "Blend", meaning: "To join the sounds of letters together to read a word." }
      ],
      examples: [
        {
          q: "Read the word made by these sounds: m – a – p.",
          steps: ["m says “mmm”.", "a says “a”, as in apple.", "p says “puh”.", "Blend them together: m-a-p."],
          answer: "map"
        }
      ],
      qa: [
        {
          q: "What is blending?",
          a: "Blending means joining the sounds of letters one after another to read a whole word. For example, c-a-t makes cat."
        },
        {
          q: "Which two letters make the sh sound?",
          a: "The letters s and h together make the sh sound, as in ship and fish."
        }
      ],
      quiz: [
        {
          q: "What sound does the letter s make in sun?",
          options: ["mmm", "sss", "buh", "ah"],
          answer: 1,
          explain: "The letter s makes the sss sound, as in sun."
        },
        {
          q: "Which word do the sounds c-u-p make?",
          options: ["pup", "cap", "cub", "cup"],
          answer: 3,
          explain: "Blending c-u-p gives cup."
        },
        {
          q: "Which two letters together make the sh sound?",
          options: ["c and h", "s and h", "t and h", "p and h"],
          answer: 1,
          explain: "The letters s and h together make the sh sound."
        },
        {
          q: "Which word begins with the sh sound?",
          options: ["ship", "chair", "thumb", "sun"],
          answer: 0,
          explain: "Ship begins with the sh sound."
        },
        {
          q: "What does blending mean?",
          options: ["Joining sounds to read a word", "Drawing a picture", "Counting the letters", "Writing a capital letter"],
          answer: 0,
          explain: "Blending means joining the sounds of letters to make a word."
        }
      ]
    },

    // ───────────────────────────── WORDS ─────────────────────────────
    {
      id: "three-letter-words",
      title: "Three-Letter Words",
      section: "Words",
      summary: "Many short words have three letters. Changing the first letter can make a new word from the same family.",
      notes: [
        {
          heading: "Words with three letters",
          points: [
            "Many short words follow the pattern consonant + vowel + consonant: c-a-t, b-a-t, s-u-n.",
            "Write the letters in order from left to right."
          ]
        },
        {
          heading: "Word families",
          points: [
            "Words that end the same way belong to one **word family**. The -at family has cat, bat, hat and mat.",
            "The -un family has sun, bun, fun and run.",
            "Change the first letter to make a new word: c-at → b-at → h-at → m-at."
          ]
        }
      ],
      terms: [
        { term: "Three-letter word", meaning: "A word with exactly three letters, such as cat, sun or dog." },
        { term: "Word family", meaning: "A group of words that end the same way, such as cat, bat and hat." },
        { term: "Rhyme", meaning: "Words that end with the same sound, such as cat and mat." }
      ],
      examples: [
        {
          q: "Change the first letter of pen to make a word for a bird that lays eggs.",
          steps: ["pen: p-e-n.", "Change p to h: h-e-n.", "A hen is a bird that lays eggs."],
          answer: "hen"
        }
      ],
      qa: [
        {
          q: "What is a word family? Give one example.",
          a: "A word family is a group of words that end the same way, such as cat, bat, hat and mat, all from the -at family."
        },
        {
          q: "Make new words from sun by changing the first letter.",
          a: "Changing s to b gives bun. Changing s to r gives run. Changing s to f gives fun."
        }
      ],
      quiz: [
        {
          q: "Which word belongs to the -at family?",
          options: ["cup", "hat", "sun", "dog"],
          answer: 1,
          explain: "Hat ends with -at, like cat and mat."
        },
        {
          q: "How many letters are in the word bus?",
          options: ["two", "four", "three", "five"],
          answer: 2,
          explain: "B-u-s has three letters."
        },
        {
          q: "Which word do you get when you change the first letter of pan to c?",
          options: ["ran", "can", "fan", "tan"],
          answer: 1,
          explain: "Changing p to c in pan gives can."
        },
        {
          q: "Which word has three letters?",
          options: ["mango", "dog", "elephant", "kite"],
          answer: 1,
          explain: "D-o-g has three letters."
        },
        {
          q: "Which word rhymes with run?",
          options: ["pot", "rat", "sit", "fun"],
          answer: 3,
          explain: "Run and fun end with the same sound."
        }
      ]
    },
    {
      id: "naming-words",
      title: "Naming Words",
      section: "Words",
      summary: "Naming words are the names of people, animals, places and things.",
      notes: [
        {
          heading: "People",
          points: [
            "Words that name people are naming words: mother, teacher, doctor, friend.",
            "A name such as Priya is also a naming word."
          ]
        },
        {
          heading: "Animals, places and things",
          points: [
            "Animals: cow, dog, parrot, fish.",
            "Places: school, park, temple, market.",
            "Things: pen, chair, ball, roti."
          ]
        }
      ],
      terms: [
        { term: "Naming word", meaning: "A word that names a person, animal, place or thing." },
        { term: "Animal", meaning: "A living creature, such as a cow, cat or fish." },
        { term: "Place", meaning: "A spot where we go or live, such as a park or school." }
      ],
      examples: [
        {
          q: "Find the naming words in: The cow is in the field.",
          steps: ["cow is an animal, so it is a naming word.", "field is a place, so it is a naming word.", "The, is and in are not naming words."],
          answer: "cow and field"
        }
      ],
      qa: [
        {
          q: "What is a naming word?",
          a: "A naming word is a word that names a person, animal, place or thing, such as Meena, dog, school or ball."
        },
        {
          q: "Give two naming words for people and two for animals.",
          a: "People: mother, teacher. Animals: cat, goat."
        }
      ],
      quiz: [
        {
          q: "Which word is a naming word?",
          options: ["run", "happy", "tiger", "quickly"],
          answer: 2,
          explain: "Tiger is the name of an animal."
        },
        {
          q: "Which is a naming word for a place?",
          options: ["jump", "park", "red", "eat"],
          answer: 1,
          explain: "A park is a place."
        },
        {
          q: "Which word names an animal?",
          options: ["big", "sing", "cow", "under"],
          answer: 2,
          explain: "A cow is an animal."
        },
        {
          q: "Which word names a person?",
          options: ["table", "doctor", "pen", "sun"],
          answer: 1,
          explain: "A doctor is a person."
        },
        {
          q: "Which is a naming word for a thing?",
          options: ["sad", "go", "fast", "ball"],
          answer: 3,
          explain: "A ball is a thing that we can name."
        }
      ]
    },
    {
      id: "this-that-these-those",
      title: "This and That, These and Those",
      section: "Words",
      summary: "Use this and these for things near us. Use that and those for things far away.",
      notes: [
        {
          heading: "One thing",
          points: [
            "Use **this** for one thing near you: This is my pencil.",
            "Use **that** for one thing far away: That is a kite in the sky."
          ]
        },
        {
          heading: "More than one thing",
          points: [
            "Use **these** for more than one thing near you: These are my books.",
            "Use **those** for more than one thing far away: Those are birds on the tree."
          ]
        },
        {
          heading: "Remember",
          points: [
            "This and these show things that are near. That and those show things that are far.",
            "Near means close to you; far means away from you."
          ]
        }
      ],
      terms: [
        { term: "This", meaning: "Points to one thing that is near us." },
        { term: "That", meaning: "Points to one thing that is far from us." },
        { term: "These", meaning: "Points to more than one thing that is near us." },
        { term: "Those", meaning: "Points to more than one thing that is far from us." }
      ],
      examples: [
        {
          q: "Choose the right word: ___ is a mango. (one mango, near you)",
          steps: ["There is one mango.", "It is near you, so use this.", "This is a mango."],
          answer: "This"
        }
      ],
      qa: [
        {
          q: "When do we use these?",
          a: "We use these for more than one thing that is near us, such as these shoes."
        },
        {
          q: "Which word do you use for one kite far away?",
          a: "Use that for one thing far away: That is a kite."
        }
      ],
      quiz: [
        {
          q: "Which word is used for one thing near you?",
          options: ["that", "this", "those", "these"],
          answer: 1,
          explain: "This is used for one thing near you."
        },
        {
          q: "Choose the correct word: ___ are my friends. (near us)",
          options: ["That", "This", "These", "Those"],
          answer: 2,
          explain: "These is used for more than one thing near us."
        },
        {
          q: "Which word is used for many things far away?",
          options: ["This", "These", "Those", "That"],
          answer: 2,
          explain: "Those is used for more than one thing that is far away."
        },
        {
          q: "Complete: ___ is a big tree over there. (one tree, far away)",
          options: ["This", "These", "Those", "That"],
          answer: 3,
          explain: "That is used for one thing far away."
        },
        {
          q: "Which is correct? ___ is a red ball. (near you)",
          options: ["These", "Those", "This", "Them"],
          answer: 2,
          explain: "This is used for one thing near you."
        }
      ]
    },
    {
      id: "a-and-an",
      title: "A and An",
      section: "Words",
      summary: "Use a before a consonant sound and an before a vowel sound. Both mean one.",
      notes: [
        {
          heading: "Using a",
          points: [
            "Use **a** before a word that begins with a consonant sound: a cat, a ball, a boy, a hen.",
            "Say the word out loud first. If it starts with a consonant sound, use a."
          ]
        },
        {
          heading: "Using an",
          points: [
            "Use **an** before a word that begins with a vowel sound: an apple, an egg, an orange, an umbrella.",
            "Both a and an mean one. Use them with one thing only: a dog, not dogs."
          ]
        }
      ],
      terms: [
        { term: "Article", meaning: "The small words a, an and the, which come before a naming word." },
        { term: "A", meaning: "Used before a word that begins with a consonant sound." },
        { term: "An", meaning: "Used before a word that begins with a vowel sound." }
      ],
      examples: [
        {
          q: "Choose a or an: ___ umbrella.",
          steps: ["Umbrella begins with the vowel u.", "Use an before a vowel sound.", "So the answer is an umbrella."],
          answer: "an umbrella"
        }
      ],
      qa: [
        {
          q: "When do we use an?",
          a: "We use an before a word that begins with a vowel sound, such as an apple, an egg or an igloo."
        },
        {
          q: "Write a or an before hen, and say why.",
          a: "Write a hen, because hen begins with the consonant sound h."
        }
      ],
      quiz: [
        {
          q: "Which is correct?",
          options: ["a apple", "an apple", "a an apple", "apple an"],
          answer: 1,
          explain: "Apple begins with a vowel sound, so we use an."
        },
        {
          q: "Choose the correct word: ___ dog is barking.",
          options: ["An", "A", "Any", "And"],
          answer: 1,
          explain: "Dog begins with a consonant sound, so we use a."
        },
        {
          q: "Choose the correct word: ___ owl sat on the tree.",
          options: ["a", "at", "an", "as"],
          answer: 2,
          explain: "Owl begins with a vowel sound, so we use an."
        },
        {
          q: "Choose the correct word: ___ egg is in the bowl.",
          options: ["Some", "Egg", "A", "An"],
          answer: 3,
          explain: "Egg begins with a vowel sound, so we use an."
        },
        {
          q: "Choose the correct word: ___ elephant is big.",
          options: ["an", "a", "the", "at"],
          answer: 0,
          explain: "Elephant begins with a vowel sound, so we use an."
        }
      ]
    },
    {
      id: "colours-numbers-days",
      title: "Colours, Numbers and Days in English",
      section: "Words",
      summary: "Learn the names of colours, the numbers from one to ten, and the days of the week in English.",
      notes: [
        {
          heading: "Colours",
          points: [
            "Red, blue, green, yellow, orange, pink, white, black, brown and purple are colours.",
            "The mango is yellow and the sky is blue."
          ]
        },
        {
          heading: "Numbers from one to ten",
          points: [
            "One, two, three, four, five, six, seven, eight, nine and ten are numbers in English words.",
            "We write one as 1, two as 2, and so on up to ten as 10."
          ]
        },
        {
          heading: "Days of the week",
          points: [
            "There are seven days: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday and Sunday.",
            "The names of days always begin with a capital letter."
          ]
        }
      ],
      terms: [
        { term: "Colour", meaning: "A shade we see, such as red, blue or green." },
        { term: "Number", meaning: "A word or figure that tells how many, such as two or 2." },
        { term: "Day of the week", meaning: "One of the seven days: Monday to Sunday." }
      ],
      examples: [
        {
          q: "Write the number that comes after six in words.",
          steps: ["Six is 6.", "The number after 6 is 7.", "7 is written as seven."],
          answer: "seven"
        }
      ],
      qa: [
        {
          q: "Name the two days that come after Friday.",
          a: "Saturday and Sunday come after Friday."
        },
        {
          q: "Write the number five in figures.",
          a: "Five is written as 5."
        }
      ],
      quiz: [
        {
          q: "Which day comes after Monday?",
          options: ["Sunday", "Friday", "Tuesday", "Thursday"],
          answer: 2,
          explain: "The days go Monday, Tuesday, Wednesday, so Tuesday comes after Monday."
        },
        {
          q: "What colour is the sky on a sunny day?",
          options: ["red", "brown", "black", "blue"],
          answer: 3,
          explain: "On a sunny day the sky is blue."
        },
        {
          q: "Which number is seven?",
          options: ["7", "6", "8", "9"],
          answer: 0,
          explain: "Seven is written as 7."
        },
        {
          q: "How many days are there in a week?",
          options: ["5", "7", "6", "8"],
          answer: 1,
          explain: "A week has seven days."
        },
        {
          q: "Which of these is a colour?",
          options: ["Table", "Green", "Book", "Chair"],
          answer: 1,
          explain: "Green is a colour. The others are things."
        }
      ]
    },

    // ───────────────────────────── SENTENCES ─────────────────────────────
    {
      id: "simple-sentences",
      title: "Simple Sentences",
      section: "Sentences",
      summary: "A sentence is a group of words that makes sense. It begins with a capital letter and ends with a full stop.",
      notes: [
        {
          heading: "What is a sentence?",
          points: [
            "A **sentence** is a group of words that makes complete sense: I like mangoes.",
            "The words must be in the right order: The cat drinks milk."
          ]
        },
        {
          heading: "Capital letter and full stop",
          points: [
            "Every sentence begins with a **capital letter**: The sun is hot.",
            "A sentence that tells something ends with a **full stop** (.): Riya has a red bag."
          ]
        }
      ],
      terms: [
        { term: "Sentence", meaning: "A group of words that makes complete sense." },
        { term: "Capital letter", meaning: "The big letter used at the start of a sentence and for names." },
        { term: "Full stop", meaning: "The dot (.) that ends a sentence." }
      ],
      examples: [
        {
          q: "Correct this sentence: ravi likes apples",
          steps: ["Ravi is a name, so R must be a capital letter.", "The sentence starts with a capital letter too.", "The sentence ends, so add a full stop."],
          answer: "Ravi likes apples."
        }
      ],
      qa: [
        {
          q: "How does every sentence start and end?",
          a: "A sentence starts with a capital letter and ends with a full stop."
        },
        {
          q: "Write a sentence about a mango.",
          a: "I like mangoes."
        }
      ],
      quiz: [
        {
          q: "Which sentence is written correctly?",
          options: ["the sun is hot", "The sun hot is", "The sun is hot.", "sun is the hot"],
          answer: 2,
          explain: "A sentence starts with a capital letter and ends with a full stop."
        },
        {
          q: "Which mark is put at the end of a sentence that tells something?",
          options: ["Comma (,)", "Hyphen (-)", "Full stop (.)", "Colon (:)"],
          answer: 2,
          explain: "A full stop (.) ends a sentence that tells something."
        },
        {
          q: "Which is the correct order of words?",
          options: ["Cat the drinks milk.", "The cat drinks milk.", "Drinks cat the milk.", "Milk the drinks cat."],
          answer: 1,
          explain: "The words must be in the right order: The cat drinks milk."
        },
        {
          q: "Which of these is a sentence?",
          options: ["Big red ball", "In the park", "I like my cat.", "A red bus"],
          answer: 2,
          explain: "I like my cat. makes complete sense. The others do not."
        },
        {
          q: "Which word in “Asha has a cat.” is a name?",
          options: ["has", "a", "cat", "Asha"],
          answer: 3,
          explain: "Asha is a name, so it begins with a capital letter."
        }
      ]
    },
    // ───────────────────────────── RAINBOW ─────────────────────────────
    {
      "id": "rb1-friends-and-good-manners",
      "title": "Friends, Greetings and Good Manners",
      "section": "Rainbow",
      "summary": "We meet friends, say hello and use kind words every day.",
      "notes": [
        {
          "heading": "Friends",
          "points": [
            "A friend studies and plays with us.",
            "We care for each other.",
            "We say Hello to our friends."
          ]
        },
        {
          "heading": "Greetings",
          "points": [
            "We say **Good morning** in the morning.",
            "We say **Good afternoon** after noon.",
            "We say **Good night** before we sleep."
          ]
        },
        {
          "heading": "Kind words",
          "points": [
            "Say **Thank you** when someone helps you.",
            "Say **Sorry** when you make a mistake.",
            "Say **Please** when you ask for something."
          ]
        }
      ],
      "terms": [
        {
          "term": "Friend",
          "meaning": "A child we play and study with."
        },
        {
          "term": "Greeting",
          "meaning": "Kind words we say when we meet someone."
        },
        {
          "term": "Please",
          "meaning": "A polite word we use to ask for something."
        },
        {
          "term": "Sorry",
          "meaning": "A word we say when we make a mistake."
        }
      ],
      "qa": [
        {
          "q": "What do we say when someone helps us?",
          "a": "We say Thank you."
        },
        {
          "q": "What do we say before we sleep?",
          "a": "We say Good night."
        }
      ],
      "quiz": [
        {
          "q": "What do we say in the morning?",
          "options": [
            "Good morning",
            "Good night",
            "Sorry",
            "Thank you"
          ],
          "answer": 0,
          "explain": "We greet people with Good morning in the morning."
        },
        {
          "q": "What do we say when someone gives us a gift?",
          "options": [
            "Sorry",
            "Thank you",
            "Good night",
            "Hello"
          ],
          "answer": 1,
          "explain": "We say Thank you to show we are glad."
        },
        {
          "q": "What do we say when we make a mistake?",
          "options": [
            "Please",
            "Hello",
            "Sorry",
            "Good morning"
          ],
          "answer": 2,
          "explain": "Sorry shows that we feel bad about a mistake."
        },
        {
          "q": "Which word do we use to ask for something?",
          "options": [
            "Sorry",
            "Bye",
            "Goodbye",
            "Please"
          ],
          "answer": 3,
          "explain": "Please is a polite word for asking."
        },
        {
          "q": "Who plays and studies with us?",
          "options": [
            "A friend",
            "A tree",
            "A chair",
            "A bus"
          ],
          "answer": 0,
          "explain": "A friend plays and studies with us."
        }
      ]
    },
    {
      "id": "rb1-rhyme-time",
      "title": "Rhyme Time: Baa Baa, Humpty and Jack and Jill",
      "section": "Rainbow",
      "summary": "Short, happy rhymes about a sheep, an egg-shaped man and two children.",
      "notes": [
        {
          "heading": "Baa Baa Black Sheep",
          "points": [
            "The rhyme asks a black sheep if it has any wool.",
            "The sheep says it has **three bags** full.",
            "One bag is for the master, one for the dame and one for the little boy."
          ]
        },
        {
          "heading": "Humpty Dumpty",
          "points": [
            "Humpty Dumpty sat on a wall and had a great fall.",
            "The king's horses and men could not put him together again."
          ]
        },
        {
          "heading": "Jack and Jill",
          "points": [
            "Jack and Jill went up a hill to fetch water.",
            "Jack fell down and Jill came tumbling after."
          ]
        },
        {
          "heading": "ABC Song",
          "points": [
            "The ABC song teaches us the letters in order.",
            "We sing it from A to Z."
          ]
        }
      ],
      "terms": [
        {
          "term": "Rhyme",
          "meaning": "A short song with words that sound alike."
        },
        {
          "term": "Wool",
          "meaning": "Soft hair from a sheep."
        },
        {
          "term": "Wall",
          "meaning": "A tall side of a building or garden."
        },
        {
          "term": "Hill",
          "meaning": "A high place on the ground."
        }
      ],
      "qa": [
        {
          "q": "Who went up the hill?",
          "a": "Jack and Jill went up the hill."
        },
        {
          "q": "How many bags of wool did the sheep have?",
          "a": "The sheep had three bags of wool."
        }
      ],
      "quiz": [
        {
          "q": "What colour is the sheep in the rhyme?",
          "options": [
            "White",
            "Black",
            "Red",
            "Blue"
          ],
          "answer": 1,
          "explain": "The rhyme is Baa Baa Black Sheep."
        },
        {
          "q": "How many bags full of wool?",
          "options": [
            "Two",
            "Five",
            "Three",
            "Ten"
          ],
          "answer": 2,
          "explain": "The sheep says three bags full."
        },
        {
          "q": "Where did Humpty Dumpty sit?",
          "options": [
            "On a bus",
            "In a tree",
            "On a bed",
            "On a wall"
          ],
          "answer": 3,
          "explain": "Humpty Dumpty sat on a wall."
        },
        {
          "q": "Why did Jack and Jill go up the hill?",
          "options": [
            "To fetch water",
            "To buy a toy",
            "To eat roti",
            "To fly a kite"
          ],
          "answer": 0,
          "explain": "They went to fetch a pail of water."
        },
        {
          "q": "Who came tumbling after Jack?",
          "options": [
            "Humpty",
            "Jill",
            "The sheep",
            "The king"
          ],
          "answer": 1,
          "explain": "Jill came tumbling after Jack."
        }
      ]
    },
    {
      "id": "rb1-action-rhymes",
      "title": "Action Rhymes and Games",
      "section": "Rainbow",
      "summary": "We sing, move and play with rhymes about Rolly Polly, a teddy bear and our hands and feet.",
      "notes": [
        {
          "heading": "Rolly Polly",
          "points": [
            "The rhyme says jump, run, kick and throw.",
            "These are **action words**.",
            "We do the actions as we sing."
          ]
        },
        {
          "heading": "Teddy Bear",
          "points": [
            "Teddy Bear turns around and touches the ground.",
            "He polishes his shoes and goes off to school."
          ]
        },
        {
          "heading": "Clap Clap Clap",
          "points": [
            "Two little hands clap.",
            "Two little feet tap.",
            "One little head goes side to side and two eyes open wide."
          ]
        },
        {
          "heading": "Action words",
          "points": [
            "Walk, run, kick, sleep, read, write, jump, ride and drink show what we do.",
            "We can do these actions with our body."
          ]
        }
      ],
      "terms": [
        {
          "term": "Action word",
          "meaning": "A word that tells what we do, like jump."
        },
        {
          "term": "Clap",
          "meaning": "To bring both hands together with a sound."
        },
        {
          "term": "Kick",
          "meaning": "To hit something with the foot."
        },
        {
          "term": "Throw",
          "meaning": "To send a ball through the air with the hand."
        }
      ],
      "qa": [
        {
          "q": "Name two action words.",
          "a": "Jump and run are action words."
        },
        {
          "q": "What does Teddy Bear do at the end of the rhyme?",
          "a": "He goes off to school."
        }
      ],
      "quiz": [
        {
          "q": "Which one is an action word?",
          "options": [
            "Table",
            "Red",
            "Jump",
            "Cow"
          ],
          "answer": 2,
          "explain": "Jump tells what we do."
        },
        {
          "q": "What do we do with our hands in the clap rhyme?",
          "options": [
            "Tap",
            "Kick",
            "Sleep",
            "Clap"
          ],
          "answer": 3,
          "explain": "Two little hands clap."
        },
        {
          "q": "What do we do with our feet in the clap rhyme?",
          "options": [
            "Tap",
            "Clap",
            "Write",
            "Read"
          ],
          "answer": 0,
          "explain": "Two little feet tap."
        },
        {
          "q": "What does Teddy Bear polish?",
          "options": [
            "His book",
            "His shoes",
            "His ball",
            "His cap"
          ],
          "answer": 1,
          "explain": "Teddy Bear polishes his shoes."
        },
        {
          "q": "Which action do we do with a ball?",
          "options": [
            "Sleep",
            "Drink",
            "Kick",
            "Write"
          ],
          "answer": 2,
          "explain": "We can kick a ball."
        }
      ]
    },
    {
      "id": "rb1-letters-and-sounds",
      "title": "Letters, Sounds and Picture Words",
      "section": "Rainbow",
      "summary": "Each letter of the alphabet has a sound and a picture word to help us remember it.",
      "notes": [
        {
          "heading": "Letters and pictures",
          "points": [
            "A is for apple, B is for ball, C is for cat and D is for dog.",
            "E is for elephant, F is for fish, G is for grapes and H is for hen.",
            "I is for ice cream, J is for joker, K is for kite and L is for lion."
          ]
        },
        {
          "heading": "More letters",
          "points": [
            "M is for mango, O is for orange, P is for parrot and Q is for queen.",
            "R is for rose, S is for sun, T is for tree and U is for umbrella.",
            "V is for violin, X is for xylophone, Y is for yarn and Z is for zero."
          ]
        },
        {
          "heading": "Vowels",
          "points": [
            "The letters a, e, i, o and u are called **vowels**.",
            "Rhymes like ants on the apple help us hear the 'a' sound."
          ]
        }
      ],
      "terms": [
        {
          "term": "Alphabet",
          "meaning": "All the letters from A to Z."
        },
        {
          "term": "Vowel",
          "meaning": "One of the letters a, e, i, o, u."
        },
        {
          "term": "Sound",
          "meaning": "What we hear when we say a letter."
        },
        {
          "term": "Trace",
          "meaning": "To follow the lines of a letter with a pencil."
        }
      ],
      "qa": [
        {
          "q": "Name the five vowels.",
          "a": "The vowels are a, e, i, o and u."
        },
        {
          "q": "What does the letter B stand for in this book?",
          "a": "B is for ball."
        }
      ],
      "quiz": [
        {
          "q": "A is for ____.",
          "options": [
            "ball",
            "cat",
            "dog",
            "apple"
          ],
          "answer": 3,
          "explain": "A is for apple."
        },
        {
          "q": "Which letter is for mango?",
          "options": [
            "M",
            "N",
            "W",
            "P"
          ],
          "answer": 0,
          "explain": "Mango begins with M."
        },
        {
          "q": "Which one is a vowel?",
          "options": [
            "b",
            "e",
            "t",
            "m"
          ],
          "answer": 1,
          "explain": "E is a vowel."
        },
        {
          "q": "Q is for ____.",
          "options": [
            "rose",
            "sun",
            "queen",
            "tree"
          ],
          "answer": 2,
          "explain": "Q is for queen."
        },
        {
          "q": "Z is for ____.",
          "options": [
            "yarn",
            "violin",
            "kite",
            "zero"
          ],
          "answer": 3,
          "explain": "Z is for zero."
        }
      ]
    },
    {
      "id": "rb1-me-and-my-family",
      "title": "My Body and My Family",
      "section": "Rainbow",
      "summary": "We learn the parts of our body, the people in our family and how to say who we are.",
      "notes": [
        {
          "heading": "My body",
          "points": [
            "We have a head, hair, two eyes, a nose and lips.",
            "We have two hands with ten fingers.",
            "We have two legs, two feet and ten toes."
          ]
        },
        {
          "heading": "My family",
          "points": [
            "Our family has a mother, a father, a brother and a sister.",
            "Some families also have a grandfather and a grandmother."
          ]
        },
        {
          "heading": "Talking about me",
          "points": [
            "We can ask, How are you?",
            "We can answer, I am fine, thank you.",
            "We can ask, What is your name? and say, My name is ___."
          ]
        }
      ],
      "terms": [
        {
          "term": "Body",
          "meaning": "All the parts of a person."
        },
        {
          "term": "Family",
          "meaning": "The people who live together and love each other."
        },
        {
          "term": "Introduce",
          "meaning": "To tell others your name."
        },
        {
          "term": "Grandmother",
          "meaning": "Your mother's or father's mother."
        }
      ],
      "qa": [
        {
          "q": "What do we say when someone asks, How are you?",
          "a": "We say, I am fine, thank you."
        },
        {
          "q": "Name two people in a family.",
          "a": "Mother and father."
        }
      ],
      "quiz": [
        {
          "q": "How many eyes do we have?",
          "options": [
            "Two",
            "One",
            "Three",
            "Four"
          ],
          "answer": 0,
          "explain": "We have two eyes."
        },
        {
          "q": "What do we see with?",
          "options": [
            "Nose",
            "Eyes",
            "Feet",
            "Hair"
          ],
          "answer": 1,
          "explain": "We see with our eyes."
        },
        {
          "q": "Who is your mother's mother?",
          "options": [
            "Sister",
            "Brother",
            "Grandmother",
            "Father"
          ],
          "answer": 2,
          "explain": "A mother's mother is a grandmother."
        },
        {
          "q": "How do we answer How are you?",
          "options": [
            "I am a boy.",
            "It is red.",
            "Go away.",
            "I am fine, thank you."
          ],
          "answer": 3,
          "explain": "This is the polite answer."
        },
        {
          "q": "What do we say to tell our name?",
          "options": [
            "My name is Aman.",
            "I like roti.",
            "It is big.",
            "I am five."
          ],
          "answer": 0,
          "explain": "This tells our name."
        }
      ]
    },
    {
      "id": "rb1-words-around-us",
      "title": "Words Around Us: Food, Animals, Colours and Shapes",
      "section": "Rainbow",
      "summary": "We name the things we eat, the animals, fruits and vegetables we see, and the colours and shapes around us.",
      "notes": [
        {
          "heading": "Food and toys",
          "points": [
            "We drink water, milk and juice.",
            "We eat mango, rice and bread.",
            "We play with a toy car, a teddy bear and a doll."
          ]
        },
        {
          "heading": "Animals, fruits and vegetables",
          "points": [
            "Animals: cat, dog, goat, monkey, cow, horse, camel, sheep, lion.",
            "Fruits: apple, banana, orange, mango, grapes, watermelon.",
            "Vegetables: potato, tomato, peas, brinjal, carrot, radish."
          ]
        },
        {
          "heading": "Shapes",
          "points": [
            "A **circle** is round like a ball.",
            "A **triangle** has three sides.",
            "A **rectangle** and a **square** have four sides. A square has all four sides the same."
          ]
        },
        {
          "heading": "Opposites",
          "points": [
            "Day and night are opposites.",
            "Open and close are opposites."
          ]
        }
      ],
      "terms": [
        {
          "term": "Fruit",
          "meaning": "A sweet food from a tree or plant, like mango."
        },
        {
          "term": "Vegetable",
          "meaning": "A plant food we cook, like potato."
        },
        {
          "term": "Circle",
          "meaning": "A round shape."
        },
        {
          "term": "Opposite",
          "meaning": "A word with the meaning that is against another word."
        }
      ],
      "qa": [
        {
          "q": "Name two fruits.",
          "a": "Mango and apple are fruits."
        },
        {
          "q": "How many sides does a triangle have?",
          "a": "A triangle has three sides."
        }
      ],
      "quiz": [
        {
          "q": "Which one is a fruit?",
          "options": [
            "Potato",
            "Banana",
            "Carrot",
            "Peas"
          ],
          "answer": 1,
          "explain": "A banana is a fruit."
        },
        {
          "q": "Which one is a vegetable?",
          "options": [
            "Grapes",
            "Apple",
            "Tomato",
            "Mango"
          ],
          "answer": 2,
          "explain": "A tomato is a vegetable."
        },
        {
          "q": "Which shape is round like a ball?",
          "options": [
            "Square",
            "Triangle",
            "Rectangle",
            "Circle"
          ],
          "answer": 3,
          "explain": "A circle is round."
        },
        {
          "q": "How many sides does a square have?",
          "options": [
            "Four",
            "Three",
            "Two",
            "Five"
          ],
          "answer": 0,
          "explain": "A square has four equal sides."
        },
        {
          "q": "The opposite of day is ____.",
          "options": [
            "noon",
            "night",
            "sun",
            "light"
          ],
          "answer": 1,
          "explain": "Day and night are opposites."
        }
      ]
    },
    {
      "id": "rb1-in-on-under",
      "title": "In, On and Under",
      "section": "Rainbow",
      "summary": "The words in, on and under tell us where a thing is.",
      "notes": [
        {
          "heading": "In",
          "points": [
            "In means inside something.",
            "A cat is in a hat. A fish is in a pot."
          ]
        },
        {
          "heading": "On",
          "points": [
            "On means on top of something.",
            "A dog is on a box. A cat is on a mat."
          ]
        },
        {
          "heading": "Under",
          "points": [
            "Under means below something.",
            "A cat is under the bed. A ball is under the table."
          ]
        }
      ],
      "terms": [
        {
          "term": "In",
          "meaning": "Inside something."
        },
        {
          "term": "On",
          "meaning": "On the top of something."
        },
        {
          "term": "Under",
          "meaning": "Below something."
        }
      ],
      "qa": [
        {
          "q": "Where is the fish in the book?",
          "a": "The fish is in a pot."
        },
        {
          "q": "Where is the ball?",
          "a": "The ball is under the table."
        }
      ],
      "quiz": [
        {
          "q": "A cat is ____ the mat.",
          "options": [
            "in",
            "under",
            "on",
            "at"
          ],
          "answer": 2,
          "explain": "The cat sits on top of the mat."
        },
        {
          "q": "A fish is ____ a pot.",
          "options": [
            "on",
            "under",
            "by",
            "in"
          ],
          "answer": 3,
          "explain": "The fish is inside the pot."
        },
        {
          "q": "A ball is ____ the table.",
          "options": [
            "under",
            "in",
            "on",
            "up"
          ],
          "answer": 0,
          "explain": "The ball is below the table."
        },
        {
          "q": "Which word means inside?",
          "options": [
            "on",
            "in",
            "under",
            "up"
          ],
          "answer": 1,
          "explain": "In means inside."
        },
        {
          "q": "Which word means below?",
          "options": [
            "in",
            "on",
            "under",
            "at"
          ],
          "answer": 2,
          "explain": "Under means below."
        }
      ]
    },
    {
      "id": "rb1-the-cat-and-the-rat",
      "title": "The Cat and the Rat",
      "section": "Rainbow",
      "summary": "A cat tries to catch a fat rat but the rat escapes into a hole.",
      "notes": [
        {
          "heading": "The story",
          "points": [
            "Mini the cat sat on a mat.",
            "She saw a fat rat sitting in a hat.",
            "The cat ran for the rat."
          ]
        },
        {
          "heading": "The end",
          "points": [
            "The rat slipped into a hole.",
            "The cat could not catch it.",
            "She went back and sat on the mat to wait."
          ]
        },
        {
          "heading": "Words that rhyme",
          "points": [
            "Cat, rat, mat, hat and fat sound alike.",
            "They all end with 'at'."
          ]
        }
      ],
      "terms": [
        {
          "term": "Story",
          "meaning": "Something that happened, told in words."
        },
        {
          "term": "Rhyming words",
          "meaning": "Words that end with the same sound."
        },
        {
          "term": "Hole",
          "meaning": "An opening in the ground or wall."
        }
      ],
      "qa": [
        {
          "q": "Who is Mini?",
          "a": "Mini is the cat."
        },
        {
          "q": "Why did the cat not catch the rat?",
          "a": "The rat slipped into a hole."
        }
      ],
      "quiz": [
        {
          "q": "Who is Mini?",
          "options": [
            "A rat",
            "A dog",
            "A hen",
            "A cat"
          ],
          "answer": 3,
          "explain": "Mini is the cat."
        },
        {
          "q": "Where did Mini sit?",
          "options": [
            "On a mat",
            "In a car",
            "On a tree",
            "Under a bed"
          ],
          "answer": 0,
          "explain": "She sat on a mat."
        },
        {
          "q": "How was the rat?",
          "options": [
            "Thin",
            "Fat",
            "Tall",
            "Blue"
          ],
          "answer": 1,
          "explain": "The rat was very fat."
        },
        {
          "q": "Where did the rat go?",
          "options": [
            "Into a bus",
            "Up a tree",
            "Into a hole",
            "Into a river"
          ],
          "answer": 2,
          "explain": "The rat slipped into a hole."
        },
        {
          "q": "Which word rhymes with cat?",
          "options": [
            "dog",
            "pen",
            "cup",
            "hat"
          ],
          "answer": 3,
          "explain": "Cat and hat end with at."
        }
      ]
    },
    {
      "id": "rb1-classroom-and-habits",
      "title": "My Classroom, Good Habits and Our National Symbols",
      "section": "Rainbow",
      "summary": "We see what is in a classroom, learn good daily habits, count to ten and learn India's national symbols.",
      "notes": [
        {
          "heading": "In my classroom",
          "points": [
            "We see a blackboard and chalk.",
            "We see books and notebooks.",
            "We see benches to sit on."
          ]
        },
        {
          "heading": "Good habits",
          "points": [
            "Brush your teeth every day.",
            "Take a bath and comb your hair every day.",
            "Keep your room clean."
          ]
        },
        {
          "heading": "Counting",
          "points": [
            "One, two, buckle my shoe is a rhyme that counts from 1 to 10.",
            "It ends with a big fat hen."
          ]
        },
        {
          "heading": "Our national symbols",
          "points": [
            "Our national animal is the tiger and the bird is the peacock.",
            "Our national flower is the lotus and the fruit is the mango.",
            "Our national game is hockey and our flag is the Tiranga."
          ]
        }
      ],
      "terms": [
        {
          "term": "Habit",
          "meaning": "Something we do again and again."
        },
        {
          "term": "Classroom",
          "meaning": "A room where children learn."
        },
        {
          "term": "National symbol",
          "meaning": "A special thing that stands for our country."
        },
        {
          "term": "Tiranga",
          "meaning": "The three-coloured flag of India."
        }
      ],
      "qa": [
        {
          "q": "Name two good habits.",
          "a": "Brush your teeth and take a bath every day."
        },
        {
          "q": "What is our national bird?",
          "a": "The peacock is our national bird."
        }
      ],
      "quiz": [
        {
          "q": "What do we write on in class?",
          "options": [
            "Blackboard",
            "Pillow",
            "Table cloth",
            "Shoe"
          ],
          "answer": 0,
          "explain": "We write on a blackboard with chalk."
        },
        {
          "q": "How often should we brush our teeth?",
          "options": [
            "Once a year",
            "Every day",
            "Never",
            "Once a month"
          ],
          "answer": 1,
          "explain": "A clean mouth needs daily brushing."
        },
        {
          "q": "Which is our national animal?",
          "options": [
            "Cow",
            "Dog",
            "Tiger",
            "Cat"
          ],
          "answer": 2,
          "explain": "The tiger is India's national animal."
        },
        {
          "q": "Which is our national flower?",
          "options": [
            "Rose",
            "Marigold",
            "Jasmine",
            "Lotus"
          ],
          "answer": 3,
          "explain": "The lotus is India's national flower."
        },
        {
          "q": "What is our national flag called?",
          "options": [
            "Tiranga",
            "Rainbow",
            "Red flag",
            "Star"
          ],
          "answer": 0,
          "explain": "The Indian flag is called Tiranga."
        }
      ]
    },
  ]
});
