// Class 1 English practice bank, part 1: The Alphabet to Simple Sentences.
StudyData.addPractice(1, "english", {
  "the-alphabet": {
    mcq: [
      { q: "Which letter is the first letter of the alphabet?", options: ["A", "Z", "M", "B"], answer: 0, explain: "The alphabet starts with A.", level: 1 },
      { q: "Which letter is the last letter of the alphabet?", options: ["X", "Y", "Z", "W"], answer: 2, explain: "The alphabet ends with Z.", level: 1 },
      { q: "Which is the capital letter of g?", options: ["Q", "G", "C", "J"], answer: 1, explain: "The capital letter of g is G.", level: 1 },
      { q: "Which is the small letter of R?", options: ["n", "h", "p", "r"], answer: 3, explain: "The small letter of R is r.", level: 1 },
      { q: "Which one is a capital letter?", options: ["M", "d", "t", "s"], answer: 0, explain: "M is a big letter, so it is a capital letter.", level: 1 },
      { q: "Which letter comes between B and D?", options: ["A", "E", "C", "F"], answer: 2, explain: "The order is A, B, C, D. So C comes between B and D.", level: 1 },
      { q: "Which of these words is a name that must begin with a capital letter?", options: ["pen", "Raju", "mango", "cow"], answer: 1, explain: "Raju is the name of a boy, and names begin with a capital letter. Pen, mango and cow are not names.", level: 2 },
      { q: "Which letter comes just before P?", options: ["Q", "R", "N", "O"], answer: 3, explain: "The order is N, O, P. So O comes just before P.", level: 2 },
      { q: "Papa asks Tara to sing the alphabet song. Which three letters does she sing first?", options: ["B, C, D", "A, B, C", "C, B, A", "A, C, B"], answer: 1, explain: "The alphabet always begins A, B, C.", level: 2 },
      { q: "Which pair shows a capital letter and its small letter?", options: ["T and f", "T and l", "T and t", "T and i"], answer: 2, explain: "T is the capital letter and t is the small letter.", level: 2 }
    ],
    written: [
      { q: "Fill in the blank: The English alphabet has ___ letters.", a: "26. The alphabet goes from A to Z and has 26 letters.", marks: 1 },
      { q: "Write the capital letter for s.", a: "S", marks: 1 },
      { q: "Write the letter that comes after M.", a: "N. The order is L, M, N.", marks: 1 },
      { q: "Write the letter that comes before H.", a: "G. The order is F, G, H.", marks: 1 }
    ]
  },
  "vowels-and-consonants": {
    mcq: [
      { q: "Which letter is a vowel?", options: ["s", "i", "l", "p"], answer: 1, explain: "The vowels are a, e, i, o and u. So i is a vowel.", level: 1 },
      { q: "Which letter is a consonant?", options: ["o", "u", "k", "a"], answer: 2, explain: "k is not a vowel, so it is a consonant.", level: 1 },
      { q: "Which word begins with a vowel?", options: ["bat", "cow", "dog", "ant"], answer: 3, explain: "Ant begins with the vowel a.", level: 1 },
      { q: "Which vowel is in the middle of the word pen?", options: ["a", "e", "i", "o"], answer: 1, explain: "p-e-n has the vowel e in the middle.", level: 1 },
      { q: "Which letter is a vowel?", options: ["h", "n", "u", "v"], answer: 2, explain: "u is one of the five vowels.", level: 1 },
      { q: "Which word begins with the vowel o?", options: ["apple", "orange", "umbrella", "egg"], answer: 1, explain: "Orange begins with o.", level: 1 },
      { q: "How many vowels are in the word cat?", options: ["0", "2", "3", "1"], answer: 3, explain: "c and t are consonants. Only a is a vowel, so there is one vowel.", level: 2 },
      { q: "Which word has two vowels?", options: ["sun", "mango", "cat", "pen"], answer: 1, explain: "Mango has a and o. The other words have only one vowel each.", level: 2 },
      { q: "Ria has letter cards m, i, l and k. Which card is a vowel?", options: ["m", "l", "k", "i"], answer: 3, explain: "i is the only vowel. m, l and k are consonants.", level: 2 },
      { q: "Which group has only consonants?", options: ["a, d, t", "b, e, t", "b, d, t", "b, d, o"], answer: 2, explain: "b, d and t are all consonants. The other groups have a vowel in them.", level: 2 }
    ],
    written: [
      { q: "Write the five vowels.", a: "a, e, i, o, u.", marks: 1 },
      { q: "Fill in the blank: The word sun has the vowel ___.", a: "u. s-u-n has the vowel u.", marks: 1 },
      { q: "Write one consonant from the word dog.", a: "d (or g). Only o is a vowel in dog.", marks: 1 },
      { q: "Count and write: How many vowels are in the word banana?", a: "3. The vowels are a, a and a.", marks: 1 }
    ]
  },
  "phonics-letter-sounds": {
    mcq: [
      { q: "What sound does the letter m make in mango?", options: ["mmm", "sss", "kuh", "puh"], answer: 0, explain: "The letter m makes the mmm sound.", level: 1 },
      { q: "Which word do the sounds b-a-t make?", options: ["bit", "bat", "but", "bad"], answer: 1, explain: "Blending b-a-t gives bat.", level: 1 },
      { q: "Which word begins with the “buh” sound?", options: ["sun", "cat", "ball", "mat"], answer: 2, explain: "Ball begins with the letter b, which says buh.", level: 1 },
      { q: "Which word begins with the ch sound?", options: ["ship", "thumb", "chair", "fish"], answer: 2, explain: "Chair begins with ch.", level: 1 },
      { q: "Which word begins with the th sound?", options: ["thumb", "ship", "chair", "dog"], answer: 0, explain: "Thumb begins with th.", level: 1 },
      { q: "What is the first sound in the word dog?", options: ["buh", "puh", "guh", "duh"], answer: 3, explain: "Dog begins with the letter d, which says duh.", level: 1 },
      { q: "Which word do the sounds p-i-g make?", options: ["peg", "pig", "pin", "big"], answer: 1, explain: "Blending p-i-g gives pig.", level: 2 },
      { q: "Which word ends with the sh sound?", options: ["chip", "thin", "sun", "fish"], answer: 3, explain: "Fish ends with sh. Chip ends with p, thin with n and sun with n.", level: 2 },
      { q: "Aman reads h-e-n slowly and then joins the sounds quickly. What is he doing?", options: ["Blending", "Counting", "Drawing", "Singing"], answer: 0, explain: "Joining sounds to read a word is called blending.", level: 2 },
      { q: "Which two words begin with the same sound?", options: ["cat, bat", "hen, pen", "sun, mat", "sun, sit"], answer: 3, explain: "Sun and sit both begin with the sss sound.", level: 2 }
    ],
    written: [
      { q: "Blend the sounds and write the word: d – o – g.", a: "dog", marks: 1 },
      { q: "Fill in the blank: The word ship begins with the ___ sound.", a: "sh", marks: 1 },
      { q: "Blend the sounds and write the word: t – o – p.", a: "top", marks: 1 },
      { q: "Write one word that begins with the ch sound.", a: "chair (or chips, cheese).", marks: 1 }
    ]
  },
  "three-letter-words": {
    mcq: [
      { q: "Which word has three letters?", options: ["pig", "tiger", "apple", "school"], answer: 0, explain: "p-i-g has three letters. The other words are longer.", level: 1 },
      { q: "Which word belongs to the -an family?", options: ["cut", "can", "cow", "cup"], answer: 1, explain: "Can ends with -an, like pan and man.", level: 1 },
      { q: "Which word rhymes with cat?", options: ["dog", "pen", "sun", "mat"], answer: 3, explain: "Cat and mat end with the same sound.", level: 1 },
      { q: "Change the first letter of hat to b. Which word do you get?", options: ["bat", "bag", "bit", "but"], answer: 0, explain: "h-a-t becomes b-a-t when h changes to b.", level: 1 },
      { q: "How many letters are in the word sun?", options: ["two", "three", "four", "five"], answer: 1, explain: "s-u-n has three letters.", level: 1 },
      { q: "Which word belongs to the -un family?", options: ["bin", "ban", "bun", "bat"], answer: 2, explain: "Bun ends with -un, like sun and fun.", level: 1 },
      { q: "Change the first letter of net to p. Which word do you get?", options: ["pat", "pit", "pet", "pot"], answer: 2, explain: "n-e-t becomes p-e-t. The ending -et stays the same.", level: 2 },
      { q: "Which word is not in the -ig family?", options: ["big", "pig", "dig", "bag"], answer: 3, explain: "Bag ends with -ag. Big, pig and dig end with -ig.", level: 2 },
      { q: "Rohan wants a word that rhymes with bed. Which word will he pick?", options: ["rod", "rat", "red", "rub"], answer: 2, explain: "Bed and red end with the same sound.", level: 2 },
      { q: "Meena has letter cards c, o and t. Which word can she make?", options: ["cat", "cut", "cop", "cot"], answer: 3, explain: "c-o-t makes cot. Cat needs an a, cut needs a u and cop needs a p.", level: 2 }
    ],
    written: [
      { q: "Change the first letter of mat to s. Write the new word.", a: "sat", marks: 1 },
      { q: "Write one word that rhymes with sun.", a: "bun (or fun, run).", marks: 1 },
      { q: "Write two words from the -ig family.", a: "pig and big (or dig, wig).", marks: 1 },
      { q: "Write the three-letter word for a small animal that says “meow”.", a: "cat", marks: 1 }
    ]
  },
  "naming-words": {
    mcq: [
      { q: "Which word is a naming word for a person?", options: ["jump", "teacher", "blue", "slow"], answer: 1, explain: "A teacher is a person, so teacher is a naming word.", level: 1 },
      { q: "Which word names an animal?", options: ["sing", "pink", "tall", "goat"], answer: 3, explain: "A goat is an animal.", level: 1 },
      { q: "Which word names a place?", options: ["eat", "soft", "market", "two"], answer: 2, explain: "A market is a place.", level: 1 },
      { q: "Which word names a thing?", options: ["spoon", "run", "happy", "loudly"], answer: 0, explain: "A spoon is a thing.", level: 1 },
      { q: "Which word is the name of a person?", options: ["table", "sit", "Rohan", "cold"], answer: 2, explain: "Rohan is a name of a person.", level: 1 },
      { q: "Which word names something we eat?", options: ["walk", "roti", "tiny", "up"], answer: 1, explain: "Roti is a thing we eat. It is a naming word.", level: 1 },
      { q: "Which are the naming words in “Amit sees a dog.”?", options: ["Amit and dog", "sees and a", "Amit and sees", "a and dog"], answer: 0, explain: "Amit is a person and dog is an animal.", level: 2 },
      { q: "Which group has only naming words?", options: ["cat, run, pen", "big, park, pen", "cat, park, red", "cat, park, pen"], answer: 3, explain: "A cat is an animal, a park is a place and a pen is a thing.", level: 2 },
      { q: "Gita goes to the temple with her grandmother. Which word names a place?", options: ["Gita", "goes", "grandmother", "temple"], answer: 3, explain: "A temple is a place where we go.", level: 2 },
      { q: "Read: The boy kicks the ball in the park. Which word is not a naming word?", options: ["boy", "ball", "park", "kicks"], answer: 3, explain: "Kicks tells what the boy does. Boy, ball and park are names.", level: 2 }
    ],
    written: [
      { q: "Write one naming word for a person.", a: "mother (or father, teacher, doctor).", marks: 1 },
      { q: "Fill in the blank: A park is the name of a ___. (person / animal / place / thing)", a: "place", marks: 1 },
      { q: "Write the two naming words in: The cat drinks milk.", a: "cat and milk.", marks: 1 },
      { q: "Write two naming words for things in your school bag.", a: "book and pencil (or pen, box).", marks: 1 }
    ]
  },
  "this-that-these-those": {
    mcq: [
      { q: "Choose the correct word: ___ is my bag. (one bag in your hand)", options: ["That", "This", "Those", "These"], answer: 1, explain: "One thing that is near you needs this.", level: 1 },
      { q: "Choose the correct word: ___ are my shoes. (near you)", options: ["Those", "That", "This", "These"], answer: 3, explain: "More than one thing that is near needs these.", level: 1 },
      { q: "Which word is used for one thing far away?", options: ["This", "These", "That", "Those"], answer: 2, explain: "That is used for one thing far away.", level: 1 },
      { q: "Choose the correct word: ___ are stars in the sky. (many, far away)", options: ["Those", "This", "These", "That"], answer: 0, explain: "More than one thing far away needs those.", level: 1 },
      { q: "This and these are used for things that are ___.", options: ["far", "near", "big", "red"], answer: 1, explain: "This and these show things that are near.", level: 1 },
      { q: "That and those are used for things that are ___.", options: ["near you", "small", "old", "far away"], answer: 3, explain: "That and those show things that are far away.", level: 1 },
      { q: "Which sentence is correct?", options: ["These is my cap.", "This are my caps.", "These are my caps.", "That are my caps."], answer: 2, explain: "Caps means more than one, and they are near. So we say These are my caps.", level: 2 },
      { q: "Ravi points to a cow in a field across the road. What does he say? “___ is a cow.”", options: ["This", "These", "Those", "That"], answer: 3, explain: "It is one cow and it is far away, so he says That.", level: 2 },
      { q: "Sana is holding three mangoes. What does she say? “___ are sweet mangoes.”", options: ["Those", "These", "This", "That"], answer: 1, explain: "There are three mangoes and they are in her hand, near her. So she says These.", level: 2 },
      { q: "Which sentence is correct?", options: ["Those is my school.", "These is my school.", "Those are my school.", "That is my school."], answer: 3, explain: "One school far away needs That. Is goes with one thing.", level: 2 }
    ],
    written: [
      { q: "Fill in the blank: ___ is my pencil. (one pencil, near you)", a: "This", marks: 1 },
      { q: "Fill in the blank: ___ are kites in the sky. (many, far away)", a: "Those", marks: 1 },
      { q: "Fill in the blank: ___ is a house far away. (one house)", a: "That", marks: 1 },
      { q: "Fill in the blank: ___ are my books. (many, near you)", a: "These", marks: 1 }
    ]
  },
  "a-and-an": {
    mcq: [
      { q: "Choose the correct word: ___ ball.", options: ["an", "a", "at", "as"], answer: 1, explain: "Ball begins with a consonant sound, so we use a.", level: 1 },
      { q: "Choose the correct word: ___ ink pot.", options: ["a", "an", "the", "and"], answer: 1, explain: "Ink begins with a vowel sound, so we use an.", level: 1 },
      { q: "Choose the correct word: ___ ice cream.", options: ["a", "the", "an", "and"], answer: 2, explain: "Ice begins with a vowel sound, so we use an.", level: 1 },
      { q: "Choose the correct word: ___ cow.", options: ["an", "on", "a", "at"], answer: 2, explain: "Cow begins with a consonant sound, so we use a.", level: 1 },
      { q: "Choose the correct word: ___ orange.", options: ["an", "a", "in", "on"], answer: 0, explain: "Orange begins with a vowel sound, so we use an.", level: 1 },
      { q: "Which is correct?", options: ["an mango", "mango a", "a an mango", "a mango"], answer: 3, explain: "Mango begins with a consonant sound, so we say a mango.", level: 1 },
      { q: "Which word needs an before it?", options: ["ball", "apple", "kite", "pen"], answer: 1, explain: "Apple begins with a vowel sound. The others begin with consonants.", level: 2 },
      { q: "Which word needs a before it?", options: ["egg", "ink", "ox", "bag"], answer: 3, explain: "Bag begins with b, a consonant. Egg, ink and ox begin with vowels.", level: 2 },
      { q: "Tina draws an elephant and a hen. Which is written correctly?", options: ["a elephant and an hen", "an elephant and a hen", "an elephant and an hen", "a elephant and a hen"], answer: 1, explain: "Elephant begins with a vowel, so an elephant. Hen begins with a consonant, so a hen.", level: 2 },
      { q: "Which group has only words that take an?", options: ["egg, owl, ant", "egg, owl, bat", "cat, owl, ant", "egg, dog, ant"], answer: 0, explain: "Egg, owl and ant all begin with vowel sounds.", level: 2 }
    ],
    written: [
      { q: "Write a or an: ___ ant.", a: "an ant", marks: 1 },
      { q: "Write a or an: ___ monkey.", a: "a monkey", marks: 1 },
      { q: "Write a or an: ___ onion.", a: "an onion", marks: 1 },
      { q: "Why do we say “an apple” and not “a apple”?", a: "Apple begins with a vowel sound, so we use an.", marks: 1 }
    ]
  },
  "colours-numbers-days": {
    mcq: [
      { q: "What colour is a ripe banana?", options: ["yellow", "blue", "white", "black"], answer: 0, explain: "A ripe banana is yellow.", level: 1 },
      { q: "Which day comes after Saturday?", options: ["Friday", "Monday", "Sunday", "Thursday"], answer: 2, explain: "The order is Friday, Saturday, Sunday.", level: 1 },
      { q: "Which word is the number 9?", options: ["six", "ten", "five", "nine"], answer: 3, explain: "Nine is written as 9.", level: 1 },
      { q: "Which of these is a day of the week?", options: ["Blue", "Wednesday", "Seven", "Mango"], answer: 1, explain: "Wednesday is one of the seven days of the week.", level: 1 },
      { q: "What colour is fresh green grass?", options: ["pink", "red", "green", "white"], answer: 2, explain: "Fresh grass is green.", level: 1 },
      { q: "Which number word comes after three?", options: ["two", "five", "one", "four"], answer: 3, explain: "Counting goes one, two, three, four.", level: 1 },
      { q: "Which day comes before Thursday?", options: ["Friday", "Wednesday", "Tuesday", "Saturday"], answer: 1, explain: "The order is Tuesday, Wednesday, Thursday.", level: 2 },
      { q: "Which of these should begin with a capital letter?", options: ["blue", "seven", "Monday", "pen"], answer: 2, explain: "The name of a day always begins with a capital letter.", level: 2 },
      { q: "Asha’s birthday is on the day before Sunday. Which day is her birthday?", options: ["Monday", "Saturday", "Friday", "Tuesday"], answer: 1, explain: "Saturday comes just before Sunday.", level: 2 },
      { q: "Raju has a red kite, a blue kite and a green kite. How many colours of kites does he have?", options: ["two", "four", "five", "three"], answer: 3, explain: "Red, blue and green are three colours.", level: 2 }
    ],
    written: [
      { q: "Write the number 8 in words.", a: "eight", marks: 1 },
      { q: "Fill in the blank: The day after Tuesday is ___.", a: "Wednesday", marks: 1 },
      { q: "Write the colour of a ripe tomato.", a: "red", marks: 1 },
      { q: "Write the number ten in figures.", a: "10", marks: 1 }
    ]
  },
  "simple-sentences": {
    mcq: [
      { q: "Which sentence is written correctly?", options: ["riya has a doll", "Riya has a doll.", "Riya a doll has.", "has Riya a doll"], answer: 1, explain: "The words are in order, it starts with a capital letter and it ends with a full stop.", level: 1 },
      { q: "A sentence starts with a ___.", options: ["small letter", "capital letter", "number", "comma"], answer: 1, explain: "Every sentence begins with a capital letter.", level: 1 },
      { q: "A sentence that tells something ends with a ___.", options: ["capital letter", "picture", "full stop", "space"], answer: 2, explain: "A full stop (.) ends a sentence that tells something.", level: 1 },
      { q: "Which one is a sentence?", options: ["The red ball", "On the table", "A big dog", "My name is Tara."], answer: 3, explain: "My name is Tara. makes complete sense.", level: 1 },
      { q: "Which word needs a capital letter in: “we play cricket.”?", options: ["play", "cricket", "we", "is"], answer: 2, explain: "We is the first word of the sentence, so it begins with a capital letter.", level: 1 },
      { q: "Which sentence has the words in the right order?", options: ["I a mango eat.", "Mango eat I a.", "Eat a mango I.", "I eat a mango."], answer: 3, explain: "I eat a mango. is the only one that makes sense.", level: 1 },
      { q: "Which is written correctly?", options: ["our cow milk gives", "Cow our gives milk.", "Our cow gives milk.", "Gives milk our cow."], answer: 2, explain: "The words are in the right order, with a capital letter at the start and a full stop at the end.", level: 2 },
      { q: "Which group of words is not a sentence?", options: ["Birds fly.", "The sun is hot.", "In the box", "I see a bus."], answer: 2, explain: "In the box does not tell us a complete idea.", level: 2 },
      { q: "Mohit writes “the cat sat on the mat” in his copy. What must he fix?", options: ["Change cat to dog", "Add a capital T and a full stop", "Add a comma after sat", "Remove the word mat"], answer: 1, explain: "A sentence needs a capital letter at the start and a full stop at the end.", level: 2 },
      { q: "Mother asks Dev to put the words in order: milk, drinks, Dev. Which sentence is right?", options: ["Milk Dev drinks.", "Dev milk drinks.", "Drinks milk Dev.", "Dev drinks milk."], answer: 3, explain: "Dev drinks milk. is in the right order and makes sense.", level: 2 }
    ],
    written: [
      { q: "Fill in the blank: Every sentence that tells something ends with a ___.", a: "full stop", marks: 1 },
      { q: "Write this sentence correctly: i like roti", a: "I like roti.", marks: 1 },
      { q: "Put the words in order and write the sentence: dog / a / I / have", a: "I have a dog.", marks: 1 },
      { q: "Write one sentence about a cow.", a: "The cow gives milk. (Any correct sentence with a capital letter and a full stop.)", marks: 1 }
    ]
  }
});
