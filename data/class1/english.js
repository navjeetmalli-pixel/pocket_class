// Class 1 English: letters, sounds, simple words and sentences, plus the lessons of Mridang.
// Format: see CONTENT_GUIDE.md. All examples are original.
StudyData.add(1, "english", {
  // What this content follows. match: "textbook" | "older-book" | "topic". Set reviewed to a date once a teacher has checked it.
  syllabus: {board: "CBSE", match: "textbook", books: ["Mridang"], note: "Grammar and writing, plus every lesson of Mridang (summarised in our own words).", reviewed: false},
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
    // ───────────────────────────── MRIDANG ─────────────────────────────
    {
      id: "two-little-hands",
      title: "Two Little Hands",
      section: "Mridang",
      summary: "A clapping and tapping song about our body parts. We learn the names of hands, legs, eyes, ears, nose and mouth, how to wash our hands, and the first letter sounds of the alphabet.",
      notes: [
        {
          heading: "The song",
          points: [
            "Two little hands go clap, clap, clap. Two little legs go tap, tap, tap.",
            "Two little eyes are open wide. One little head goes side to side.",
            "We have two eyes, two ears, one nose and one mouth."
          ]
        },
        {
          heading: "Parts of the body",
          points: [
            "Head, eye, ear, nose, mouth, tongue, arm, hand, leg and foot.",
            "We see with our eyes. We hear with our ears. We smell with our nose. We eat with our mouth. We feel with our skin."
          ]
        },
        { heading: "Washing hands", points: ["Wet your hands with water. Rub soap on your hands.", "Wash between your fingers. Rinse your hands again."] },
        {
          heading: "Letters and sounds",
          points: [
            "a is for ant, b is for bag, c is for cat, d is for dog, e is for egg.",
            "We say the first sound of each word, like b in bag."
          ]
        }
      ],
      formulas: ["2 hands, 2 legs, 2 eyes, 2 ears", "1 nose, 1 mouth, 1 head", "a ant, b bag, c cat, d dog, e egg"],
      terms: [
        { term: "Hand", meaning: "The part at the end of our arm. We clap with it." },
        { term: "Leg", meaning: "The part we walk with." },
        { term: "Soap", meaning: "We use it with water to wash and clean." }
      ],
      qa: [
        { q: "What do two little hands do?", a: "They go clap, clap, clap." },
        { q: "What do we do with our eyes?", a: "We see with our eyes." },
        { q: "What do we use to wash our hands?", a: "We use water and soap." }
      ],
      quiz: [
        { q: "What do two little hands do?", options: ["clap", "tap", "jump", "sleep"], answer: 0, explain: "Two little hands go clap, clap, clap." },
        { q: "What do two little legs do?", options: ["clap", "tap", "sing", "cry"], answer: 1, explain: "Two little legs go tap, tap, tap." },
        { q: "How many eyes do we have?", options: ["one", "three", "two", "four"], answer: 2, explain: "We have two eyes." },
        { q: "What do we smell with?", options: ["ear", "hand", "leg", "nose"], answer: 3, explain: "We smell with our nose." },
        { q: "b is for ___.", options: ["bag", "ant", "cat", "egg"], answer: 0, explain: "b is for bag." }
      ]
    },
    {
      id: "greetings",
      title: "Greetings",
      section: "Mridang",
      summary: "We learn how to greet people at different times of the day: Namaste, Good morning, Good afternoon, Good evening and Good night. A fun rhyme, Hop a Little, teaches action words like hop, jump and skip.",
      notes: [
        {
          heading: "Greetings",
          points: [
            "When I meet someone, I say Namaste.",
            "In the morning I say Good morning. In the afternoon I say Good afternoon.",
            "In the evening I say Good evening. Before bed I say Good night."
          ]
        },
        {
          heading: "Hop a Little",
          points: [
            "We hop, jump, stamp, skip and tap.",
            "We dance, twist, shake, yawn and sleep.",
            "These words are **action words**. They tell what we do."
          ]
        },
        {
          heading: "Hopscotch",
          points: [
            "Hopscotch is a game. We jump with one foot in each box, from 1 to 7, and come back.",
            "If our foot is outside the box, we are out."
          ]
        }
      ],
      formulas: ["Namaste", "Good morning, afternoon, evening, night", "Action words: hop, jump, skip, dance"],
      terms: [
        { term: "Greeting", meaning: "Kind words we say when we meet someone." },
        { term: "Action word", meaning: "A word that tells what we do, like jump." },
        { term: "Hopscotch", meaning: "A game where we hop and jump on boxes." }
      ],
      qa: [
        { q: "What do you say when you meet someone in the morning?", a: "I say Good morning." },
        { q: "What do you say at bedtime?", a: "I say Good night." },
        { q: "Name two action words.", a: "Hop and jump." }
      ],
      quiz: [
        {
          q: "What do you say in the morning?",
          options: ["Good night", "Good evening", "Good afternoon", "Good morning"],
          answer: 3,
          explain: "We say Good morning when we meet someone in the morning."
        },
        {
          q: "What do you say when you go to bed?",
          options: ["Good night", "Good morning", "Namaste", "Good afternoon"],
          answer: 0,
          explain: "We say Good night at bedtime."
        },
        { q: "Which is an action word?", options: ["table", "jump", "red", "apple"], answer: 1, explain: "Jump tells what we do." },
        {
          q: "Which game is played on boxes with numbers?",
          options: ["cricket", "kite", "hopscotch", "chess"],
          answer: 2,
          explain: "Hopscotch is played on boxes."
        },
        {
          q: "Which greeting is an Indian greeting?",
          options: ["Good night", "Good day", "Hello and bye", "Namaste"],
          answer: 3,
          explain: "Namaste is a greeting from India."
        }
      ]
    },
    {
      id: "my-family",
      title: "My Family (The Sparrow Family)",
      section: "Mridang",
      summary: "A family song and a story about a sparrow family. We learn the names of family members: mother, father, brother, sister, grandmother and grandfather. We also learn the sounds f and m.",
      notes: [
        {
          heading: "The family song",
          points: [
            "We sing to our mother, father, brother, sister, grandmother and grandfather.",
            "Each one says, Yes, I shall, yes, I shall. We are a family!"
          ]
        },
        {
          heading: "The sparrow family",
          points: [
            "Mama and Papa sparrow make a soft, warm nest.",
            "Mama sparrow lays three small eggs. Papa sparrow brings food for the babies.",
            "Grandparents, an aunt, an uncle, cousins and friends all come to meet the babies.",
            "The three baby sparrows grow bigger and fly into the big blue sky."
          ]
        },
        {
          heading: "Letter sounds",
          points: [
            "Father begins with f: fox, food, foot, flag, five.",
            "Mother begins with m: man, mask, moon, mouth, monkey."
          ]
        }
      ],
      formulas: [
        "mother, father, brother, sister",
        "grandmother, grandfather, aunt, uncle",
        "3 eggs, 3 baby sparrows",
        "f - father; m - mother"
      ],
      terms: [
        { term: "Family", meaning: "A group of people who love and help each other." },
        { term: "Nest", meaning: "A home that a bird makes." },
        { term: "Cousin", meaning: "The child of our aunt or uncle." }
      ],
      qa: [
        { q: "How many eggs did Mama sparrow lay?", a: "She laid three eggs." },
        { q: "Who brought food for the baby sparrows?", a: "Papa sparrow brought food." },
        { q: "Name three people in a family.", a: "Mother, father and sister." }
      ],
      quiz: [
        {
          q: "Who made the nest?",
          options: ["the cat", "the crow", "Mama and Papa sparrow", "the cow"],
          answer: 2,
          explain: "The sparrow parents made the nest."
        },
        { q: "How many eggs were there?", options: ["one", "five", "ten", "three"], answer: 3, explain: "There were three small eggs." },
        {
          q: "Who brought food for the babies?",
          options: ["Papa sparrow", "the aunt", "the farmer", "the cat"],
          answer: 0,
          explain: "Papa sparrow brought food."
        },
        {
          q: "What did the baby sparrows do at the end?",
          options: ["went to school", "flew into the sky", "slept in the nest for ever", "swam in a river"],
          answer: 1,
          explain: "They flew up into the big blue sky."
        },
        { q: "Which word begins with m?", options: ["father", "fish", "mother", "foot"], answer: 2, explain: "Mother begins with m." }
      ]
    },
    {
      id: "picture-time",
      title: "Picture Time",
      section: "Mridang",
      summary: "We look at a picture of animals and talk about it. We sing two number rhymes: Fun with Numbers and Five Little Monkeys, and learn the word little.",
      notes: [
        {
          heading: "Picture talk",
          points: [
            "We look at a picture and name the animals.",
            "We say where we have seen them and how many snakes or birds there are."
          ]
        },
        {
          heading: "Fun with numbers",
          points: [
            "One, two, three, four, five. Once I caught a fish alive.",
            "Six, seven, eight, nine, ten. Then I let it go again.",
            "The words five and alive rhyme."
          ]
        },
        {
          heading: "Five Little Monkeys",
          points: [
            "Five little monkeys jump on a tree. One falls down and bumps his knee. Ah! Ah! Ah!",
            "The song goes down from five to one. At the end no monkeys are jumping and each one is holding his knee."
          ]
        },
        { heading: "Words", points: ["Rhyming words: five - alive, tree - knee.", "Animals: lion, monkey, fish, elephant, frog, rabbit."] }
      ],
      formulas: ["1 2 3 4 5 / 6 7 8 9 10", "five - alive; tree - knee", "5 monkeys: 5, 4, 3, 2, 1"],
      terms: [
        { term: "Rhyme", meaning: "Words that end with the same sound, like tree and knee." },
        { term: "Little", meaning: "Small." },
        { term: "Knee", meaning: "The joint in the middle of our leg." }
      ],
      qa: [
        { q: "What did the person do with the fish?", a: "They let it go again." },
        { q: "What happened to one monkey?", a: "He fell down and bumped his knee." },
        { q: "Say a word that rhymes with tree.", a: "Knee." }
      ],
      quiz: [
        {
          q: "How many monkeys are there at the start?",
          options: ["two", "five", "three", "ten"],
          answer: 1,
          explain: "The song starts with five little monkeys."
        },
        { q: "What did the monkey bump?", options: ["his nose", "his hand", "his knee", "his tail"], answer: 2, explain: "He bumped his knee." },
        { q: "Which word rhymes with 'five'?", options: ["fish", "tree", "ten", "alive"], answer: 3, explain: "Five and alive rhyme." },
        { q: "What was alive in the song?", options: ["a fish", "a bird", "a cat", "a tree"], answer: 0, explain: "Once I caught a fish alive." },
        { q: "Which word rhymes with 'tree'?", options: ["tray", "knee", "ten", "top"], answer: 1, explain: "Tree and knee rhyme." }
      ]
    },
    {
      id: "the-cap-seller-and-the-monkeys",
      title: "The Cap-seller and the Monkeys",
      section: "Mridang",
      summary: "A cap-seller falls asleep under a tree and the monkeys take all his caps. He thinks of a clever idea. He throws his own cap down, the monkeys copy him and he gets all his caps back.",
      notes: [
        {
          heading: "The story",
          points: [
            "A man sells caps. He carries many caps in a basket on his head.",
            "One day he sleeps under a tree. Monkeys come down and take all the caps.",
            "He wakes up and the basket is empty. The monkeys are wearing the caps on the tree.",
            "He shakes his fists and the monkeys copy him. He scratches his head and they copy him.",
            "He takes off his cap and throws it into the basket. The monkeys do the same. He gets all his caps back and goes away happily."
          ]
        },
        { heading: "What we learn", points: ["Monkeys copy what we do.", "We can think of a clever idea when we have a problem."] },
        {
          heading: "Sounds and words",
          points: [
            "Words that start with the same sound: cap, cat, coat, car; monkey, mango, mouse.",
            "Clap for the parts of a word: mon-key, bas-ket."
          ]
        }
      ],
      formulas: ["Cap-seller - basket of caps", "Monkeys copy the cap-seller", "cap, cat, coat, car"],
      terms: [
        { term: "Cap-seller", meaning: "A man who sells caps." },
        { term: "Basket", meaning: "A container we use to carry things." },
        { term: "Idea", meaning: "A thought of how to do something." }
      ],
      qa: [
        { q: "What did the monkeys do with the caps?", a: "They took the caps and wore them." },
        { q: "How did the cap-seller get the caps back?", a: "He threw his own cap into the basket and the monkeys did the same." },
        { q: "Where did the cap-seller sleep?", a: "He slept under a tree." }
      ],
      quiz: [
        { q: "What did the man sell?", options: ["caps", "mangoes", "toys", "shoes"], answer: 0, explain: "The man sold caps." },
        {
          q: "Where did he carry the caps?",
          options: ["in a bag on his back", "in a basket on his head", "in a cart", "in a box on a bicycle"],
          answer: 1,
          explain: "He carried them in a basket on his head."
        },
        { q: "Who took the caps?", options: ["the crows", "the children", "the monkeys", "the cats"], answer: 2, explain: "The monkeys took the caps." },
        {
          q: "What did the monkeys do when he scratched his head?",
          options: ["They ran away.", "They laughed at him.", "They gave back the caps.", "They did the same."],
          answer: 3,
          explain: "The monkeys copied him."
        },
        { q: "What did he throw into the basket?", options: ["his own cap", "a stone", "a banana", "a shoe"], answer: 0, explain: "He threw his own cap." }
      ]
    },
    {
      id: "catch-me-if-you-can",
      title: "Catch me if you can",
      section: "Mridang",
      summary: "A fat cat sits on a mat and wants to catch a little rat. The rat hides in a box and the lid does not open, so the cat cannot catch him. The story uses simple at-words like cat, rat, mat and hat.",
      notes: [
        {
          heading: "The story",
          points: [
            "A fat cat sat on a mat. The cat says, I can catch you, little rat.",
            "The rat sees her and hides in a hat, then runs and hides in a box.",
            "The cat runs to catch the rat. The rat says, No, no, you cannot.",
            "The lid of the box does not open. The rat says, Ha, ha! You cannot catch me, big cat!"
          ]
        },
        {
          heading: "Words with at",
          points: [
            "cat, bat, fat, sat, mat, hat, rat.",
            "Add a letter to at to make a new word: b + at = bat, h + at = hat, m + at = mat."
          ]
        },
        { heading: "Action words", points: ["Catch, throw, hide, open, close and say.", "Action words tell us what someone does."] }
      ],
      formulas: ["at: cat, bat, fat, hat, mat, rat, sat", "Actions: catch, throw, hide, open, close"],
      terms: [
        { term: "Catch", meaning: "To hold something that is moving." },
        { term: "Hide", meaning: "To go where nobody can see you." },
        { term: "Lid", meaning: "The cover of a box." }
      ],
      qa: [
        { q: "Who sat on the mat?", a: "A fat cat sat on the mat." },
        { q: "Where did the rat hide?", a: "The rat hid in a box." },
        { q: "Make a word with b and at.", a: "bat." }
      ],
      quiz: [
        {
          q: "Who wants to catch the rat?",
          options: ["the dog", "the cow", "the hen", "the cat"],
          answer: 3,
          explain: "The fat cat wants to catch the rat."
        },
        { q: "What did the cat sit on?", options: ["a mat", "a bed", "a chair", "a box"], answer: 0, explain: "The cat sat on a mat." },
        {
          q: "Where did the rat hide in the end?",
          options: ["in a bag", "in a box", "in a house", "in a tree"],
          answer: 1,
          explain: "The rat hid in a box."
        },
        {
          q: "Why could the cat not catch the rat?",
          options: ["The cat was asleep.", "The rat flew.", "The lid did not open.", "The rat was big."],
          answer: 2,
          explain: "The lid of the box did not open."
        },
        { q: "Which word has 'at' in it?", options: ["dog", "pen", "cup", "hat"], answer: 3, explain: "Hat ends with at." }
      ]
    },
    {
      id: "a-farm",
      title: "A Farm",
      section: "Mridang",
      summary: "A song about Grandpa's farm and the animals on it, with their sounds. We also meet Jaggu, who tells us about the animals and birds near his house, such as the dog, cat, cow, crow, parrot and peacock.",
      notes: [
        {
          heading: "The farm song",
          points: [
            "My dear grandpa had a farm, E-I-E-I-O. On that farm he had a cow, with a moo-moo here and a moo-moo there.",
            "He also had a hen with a cluck-cluck. We can put in other animals and their sounds."
          ]
        },
        {
          heading: "Jaggu's animals",
          points: [
            "A dog lives near the gate. Cats jump in the verandah. A cow eats grass.",
            "A rat is very small and the cat chases it. Monkeys swing and jump in the trees. There are snakes in the field."
          ]
        },
        {
          heading: "Jaggu's birds",
          points: [
            "A crow is black. A pigeon is grey. A sparrow is a small bird.",
            "A parrot is green with a red beak. A peacock has many colours."
          ]
        }
      ],
      formulas: ["cow - moo; hen - cluck", "crow - black; pigeon - grey", "parrot - green; peacock - many colours"],
      terms: [
        { term: "Farm", meaning: "A place where people grow crops and keep animals." },
        { term: "Beak", meaning: "The hard mouth of a bird." },
        { term: "Verandah", meaning: "An open space with a roof at the front of a house." }
      ],
      qa: [
        { q: "What sound does a cow make?", a: "A cow says moo." },
        { q: "What colour is a parrot?", a: "A parrot is green with a red beak." },
        { q: "What does a cow eat?", a: "A cow eats grass." }
      ],
      quiz: [
        { q: "Whose farm is in the song?", options: ["Father's", "Teacher's", "Grandpa's", "Uncle's"], answer: 2, explain: "My dear grandpa had a farm." },
        { q: "What sound does a hen make?", options: ["moo", "meow", "woof", "cluck"], answer: 3, explain: "A hen says cluck-cluck." },
        { q: "What colour is a crow?", options: ["black", "grey", "green", "red"], answer: 0, explain: "A crow is black." },
        { q: "What colour is a pigeon?", options: ["black", "grey", "blue", "pink"], answer: 1, explain: "A pigeon is grey." },
        { q: "Which bird has many colours?", options: ["crow", "sparrow", "peacock", "pigeon"], answer: 2, explain: "A peacock has many colours." }
      ]
    },
    {
      id: "fun-with-pictures",
      title: "Fun with Pictures (Fruits and the Market)",
      section: "Mridang",
      summary: "We talk about fruits and vegetables in a picture. We sing a fruit song that is about sharing. In a story, Mini goes to the market with her father and sees flowers, fruits and vegetables.",
      notes: [
        {
          heading: "Fruits for all",
          points: [
            "Five yellow mangoes hang on a tree. One is for the traveller, one for the bird, one for the squirrel, one for the rabbit and one for you to share with me.",
            "The tree shares its fruit with everyone. We too should share."
          ]
        },
        {
          heading: "A Visit to the Market",
          points: [
            "Mini's father is a farmer who grows vegetables. He sells them in the market every Saturday, and Mini goes with him.",
            "Mini sees roses, marigolds and jasmine flowers. She sees apples, pineapples, oranges and a big green watermelon.",
            "She returns home with a small basket of flowers. Her father has a bag of fruits."
          ]
        },
        {
          heading: "Names",
          points: [
            "Vegetables: tomatoes, potatoes, onions, brinjals, carrots, cabbages, cauliflowers, peas.",
            "Fruits: mango, orange, guava, apple, pineapple, watermelon, banana.",
            "Vegetables are good for health. We should eat them every day."
          ]
        }
      ],
      formulas: ["Five yellow mangoes - share", "Flowers: rose, marigold, jasmine", "Vegetables are good for health"],
      terms: [
        { term: "Fruit", meaning: "A sweet food that grows on a plant, such as a mango." },
        { term: "Vegetable", meaning: "A plant food we cook or eat, such as a carrot." },
        { term: "Market", meaning: "A place where people buy and sell things." }
      ],
      qa: [
        { q: "Who goes to the market with Mini?", a: "Her father goes with her." },
        { q: "Name two flowers Mini sees.", a: "Roses and marigolds." },
        { q: "Why should we eat vegetables?", a: "They are good for our health." }
      ],
      quiz: [
        { q: "What is Mini's father?", options: ["a teacher", "a farmer", "a doctor", "a driver"], answer: 1, explain: "Mini's father is a farmer." },
        {
          q: "On which day does Mini go to the market?",
          options: ["Monday", "Sunday", "Saturday", "Friday"],
          answer: 2,
          explain: "Every Saturday she goes."
        },
        {
          q: "Which is the big green fruit?",
          options: ["apple", "orange", "pineapple", "watermelon"],
          answer: 3,
          explain: "The big green fruit is the watermelon."
        },
        {
          q: "What did Mini hold at the end?",
          options: ["a small basket of flowers", "a bag of mangoes", "a toy", "a book"],
          answer: 0,
          explain: "She held a small basket of flowers."
        },
        { q: "What colour are the mangoes in the song?", options: ["red", "yellow", "green", "blue"], answer: 1, explain: "Five yellow mangoes." }
      ]
    },
    {
      id: "the-food-we-eat",
      title: "The Food we Eat",
      section: "Mridang",
      summary: "Children share their lunch at school. A girl whose mother is sick has no lunch, and her friends share their paratha and chilla. We learn to share, to say thank you, and not to waste food.",
      notes: [
        {
          heading: "Lunch at school",
          points: [
            "Children bring different food from home: poori with aloo sabzi, roti with sabzi, idli with chutney, gobhi paratha and chilla.",
            "A girl's mother is sick, so she has no lunch. Her friends say, Have my paratha. Take my chilla.",
            "She says, Thank you!"
          ]
        },
        {
          heading: "What we learn",
          points: [
            "We should share our food with friends.",
            "We should say thank you and respect the farmers who grow our food.",
            "We should not waste food."
          ]
        },
        {
          heading: "Food from farms",
          points: [
            "We get milk from cows and make curds and butter from it.",
            "Farmers grow rice and wheat, and some keep bees for honey."
          ]
        },
        {
          heading: "Fun with words",
          points: [
            "Words with two parts: car-rot, mar-ket, man-go, break-fast, din-ner.",
            "Some words have only one part: man, hut, go, cat."
          ]
        }
      ],
      formulas: ["Share food", "Say thank you", "Do not waste food", "Cow - milk; bee - honey"],
      terms: [
        { term: "Share", meaning: "To give a part of what we have to others." },
        { term: "Lunch", meaning: "The meal we eat in the middle of the day." },
        { term: "Thank you", meaning: "Words we say to show we are grateful." }
      ],
      qa: [
        { q: "Why did the girl have no lunch?", a: "Her mother was sick." },
        { q: "What did her friends do?", a: "They shared their paratha and chilla with her." },
        { q: "What do we get from cows?", a: "We get milk from cows." }
      ],
      quiz: [
        {
          q: "Why did the girl have no lunch?",
          options: ["Her mother was sick.", "She did not like food.", "She lost her bag.", "School was closed."],
          answer: 0,
          explain: "Her mother was sick, so she could not pack lunch."
        },
        {
          q: "What did her friends do?",
          options: ["They laughed.", "They shared their food.", "They ate quickly.", "They went away."],
          answer: 1,
          explain: "They shared their paratha and chilla."
        },
        { q: "What should we say when someone helps us?", options: ["Go away", "Give me more", "Thank you", "No"], answer: 2, explain: "We say thank you." },
        { q: "What do we get from a cow?", options: ["honey", "rice", "wool", "milk"], answer: 3, explain: "A cow gives us milk." },
        { q: "What do we get from bees?", options: ["honey", "milk", "butter", "wheat"], answer: 0, explain: "Bees make honey." }
      ]
    },
    {
      id: "the-four-seasons",
      title: "The Four Seasons",
      section: "Mridang",
      summary: "A poem about the seasons: summer is hot, spring is a time of flowers, the monsoon brings rain and winter is cold. We learn what we wear in each season and sing about the rain.",
      notes: [
        {
          heading: "The poem",
          points: [
            "Summer is hot, so we want a dip in the pool.",
            "Spring is a time when children play and flowers bloom every day.",
            "Monsoon clouds are filled with rain and make us feel cool again.",
            "Winter is cold, but on sunny days we enjoy the sun's rays."
          ]
        },
        {
          heading: "Clothes",
          points: [
            "In summer we wear light cotton clothes like a frock or a shirt.",
            "In winter we wear warm clothes like a sweater and a woollen cap.",
            "In the monsoon we use an umbrella."
          ]
        },
        { heading: "Pitter Patter", points: ["Rain falls on the green grass, the trees, the rooftops and on me.", "We hear pitter patter raindrops."] }
      ],
      formulas: ["Summer - hot", "Winter - cold", "Monsoon - rain, umbrella", "Spring - flowers"],
      terms: [
        { term: "Season", meaning: "A part of the year with its own weather." },
        { term: "Monsoon", meaning: "The rainy season." },
        { term: "Bloom", meaning: "To open into a flower." }
      ],
      qa: [
        { q: "What is summer like?", a: "Summer is hot." },
        { q: "What do we use in the rain?", a: "We use an umbrella." },
        { q: "What comes with spring?", a: "Flowers bloom in spring." }
      ],
      quiz: [
        { q: "Which season is hot?", options: ["winter", "monsoon", "spring", "summer"], answer: 3, explain: "Summer is hot." },
        { q: "Which season is cold?", options: ["winter", "summer", "spring", "monsoon"], answer: 0, explain: "Winter is cold." },
        { q: "Which season brings rain?", options: ["winter", "monsoon", "summer", "spring"], answer: 1, explain: "Monsoon clouds are full of rain." },
        { q: "What do flowers do in spring?", options: ["fall", "sleep", "bloom", "melt"], answer: 2, explain: "Flowers bloom in spring." },
        { q: "How many seasons are in the poem?", options: ["two", "three", "five", "four"], answer: 3, explain: "There are four seasons." }
      ]
    },
    {
      id: "anandis-rainbow",
      title: "Anandi's Rainbow",
      section: "Mridang",
      summary: "Anandi wakes up to see a bright rainbow. She runs out to the garden with her cat Milli, and the rainbow gives its colours to the flowers. She leaves the yellow for the sun. The lesson ends with the colours of the Indian flag.",
      notes: [
        {
          heading: "The story",
          points: [
            "It is raining. Anandi dreams of rainbows. She wakes up and sees a huge, bright rainbow in a clear blue sky.",
            "She runs to the garden with Milli, her favourite cat. She loves to draw and paint.",
            "The rainbow gives its colours to the flowers. Then it is gone.",
            "She colours one flower with violet and another with indigo. She uses blue, green, orange and red. She leaves yellow so that the sun looks bright."
          ]
        },
        {
          heading: "Colours of the rainbow",
          points: [
            "Violet, indigo, blue, green, yellow, orange and red.",
            "The Indian flag has three colours: saffron, white and green."
          ]
        },
        { heading: "Talking about yourself", points: ["My name is ___. I am ___ years old.", "I study in ___ school. My favourite colour is ___."] }
      ],
      formulas: [
        "Rainbow: violet, indigo, blue, green, yellow, orange, red",
        "Yellow - the sun",
        "Flag: saffron, white, green"
      ],
      terms: [
        { term: "Rainbow", meaning: "A curve of colours in the sky after rain." },
        { term: "Garden", meaning: "A place with flowers and plants." },
        { term: "Violet", meaning: "A purple colour." }
      ],
      qa: [
        { q: "What is the name of Anandi's cat?", a: "Milli." },
        { q: "Which colour did Anandi leave for the sun?", a: "She left yellow." },
        { q: "Name three colours of the rainbow.", a: "Red, blue and green." }
      ],
      quiz: [
        { q: "What did Anandi see from her window?", options: ["a bird", "a kite", "a rainbow", "a rocket"], answer: 2, explain: "A huge, bright rainbow." },
        { q: "What is Anandi's cat called?", options: ["Moti", "Tom", "Kitty", "Milli"], answer: 3, explain: "Her cat is Milli." },
        {
          q: "What did Anandi love to do?",
          options: ["draw and paint", "swim", "sleep all day", "cook"],
          answer: 0,
          explain: "She loved to draw and paint."
        },
        {
          q: "Which colour did she leave for the sun?",
          options: ["red", "yellow", "green", "blue"],
          answer: 1,
          explain: "She left yellow so the sun looks bright."
        },
        {
          q: "Where did Anandi go after waking up?",
          options: ["to school", "to the market", "to the garden", "to the river"],
          answer: 2,
          explain: "She ran out to the garden."
        }
      ]
    }
  ]
});
