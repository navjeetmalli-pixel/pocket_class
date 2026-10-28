// Class 1 English: letters, sounds, simple words and sentences.
// Format: see CONTENT_GUIDE.md. All examples are original.
StudyData.add(1, "english", {
  // What this content follows. match: "textbook" | "older-book" | "topic". Set reviewed to a date once a teacher has checked it.
  syllabus: {board: "CBSE", match: "topic", books: [], note: "Grammar and writing skills, arranged by topic. Textbook lessons are not included.", reviewed: false},
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
    }
  ]
});
