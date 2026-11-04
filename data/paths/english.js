// English: Practice by topic (Level 0 up to Class 12). See CONTENT_GUIDE.md and the path format notes.
// Refs without `board` are used for every student; "cbse" / "pseb" refs only for that board's students.
(function () {
  const A = (cls, ch) => ({ cls, subject: "english", chapter: ch }); // shared chapter (same id in both books, Classes 1-5 grammar)
  const C = (cls, ch) => ({ cls, subject: "english", chapter: ch, board: "cbse" });
  const B = (cls, ch) => ({ cls, subject: "englishpb", chapter: ch, board: "pseb" });
  const lv = (id, level, title, goal, from, extra) => Object.assign({ id, level, title, goal, from }, extra || {});
  const Q = (q, options, answer, explain) => ({ q, options, answer, explain });

  // ---------- Own chapters (Level 0 and gaps) ----------

  const alphabetSounds = {
    summary: "The English alphabet has 26 letters. Each letter has a name and a sound, and words begin with these sounds.",
    notes: [
      { heading: "The 26 letters", points: ["The alphabet starts with **A** and ends with **Z**.", "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z", "Each letter has a big (capital) form and a small form: **A a**, **B b**, **C c**."] },
      { heading: "Letter sounds", points: ["🍎 **A** says /a/ as in apple.", "⚽ **B** says /b/ as in ball.", "🐱 **C** says /k/ as in cat.", "🐶 **D** says /d/ as in dog.", "🐟 **F** says /f/ as in fish.", "☀️ **S** says /s/ as in sun."] },
      { heading: "Vowels", points: ["**A, E, I, O, U** are special letters called vowels.", "All the other letters are consonants.", "Almost every word has a vowel: c**a**t, d**o**g, s**u**n."] }
    ],
    terms: [
      { term: "Alphabet", meaning: "All the letters we use to write, from A to Z." },
      { term: "Capital letter", meaning: "The big form of a letter, like A, B, C." },
      { term: "Small letter", meaning: "The little form of a letter, like a, b, c." },
      { term: "Sound", meaning: "What we say when we read a letter, like /b/ for B." },
      { term: "Vowel", meaning: "One of the letters A, E, I, O, U." }
    ],
    qa: [
      { q: "How many letters are there in the English alphabet?", a: "There are 26 letters." },
      { q: "Name the five vowels.", a: "A, E, I, O and U." }
    ],
    quiz: [
      Q("How many letters are in the English alphabet?", ["24", "25", "26", "27"], 2, "The English alphabet has 26 letters."),
      Q("Which letter comes after B?", ["A", "C", "D", "E"], 1, "The order is A, B, C, so C comes after B."),
      Q("Which is the first letter of the alphabet?", ["A", "B", "Z", "M"], 0, "The alphabet starts with A."),
      Q("Which one is a vowel?", ["B", "K", "T", "E"], 3, "E is one of the vowels A, E, I, O, U."),
      Q("Which one is a capital letter?", ["a", "B", "c", "d"], 1, "B is a big (capital) letter. The others are small letters."),
      Q("⚽ 'Ball' begins with which letter?", ["B", "D", "P", "T"], 0, "Ball begins with B."),
      Q("☀️ 'Sun' begins with which letter?", ["F", "M", "S", "N"], 2, "Sun begins with S."),
      Q("🐱 'Cat' ends with which letter?", ["C", "A", "S", "T"], 3, "c-a-t: the last letter is T."),
      Q("Which small letter goes with the capital D?", ["b", "d", "p", "q"], 1, "The capital D and the small d are partners."),
      Q("Which letter comes between M and O?", ["L", "P", "N", "K"], 2, "The order is M, N, O."),
      Q("Which word begins with the same sound as 🌙 'moon'?", ["Mango", "Dog", "Sun", "Fish"], 0, "Moon and mango both begin with the sound /m/."),
      Q("Which is the last letter of the alphabet?", ["X", "Y", "A", "Z"], 3, "The alphabet ends with Z."),
      Q("🐟 Which word begins with the letter F?", ["Dish", "Fish", "Wish", "Ship"], 1, "Fish begins with F.")
    ]
  };

  const rhymingWords = {
    summary: "Rhyming words sound the same at the end, like cat and hat. Rhymes make songs and poems fun to say.",
    notes: [
      { heading: "What is a rhyme?", points: ["Rhyming words end with the same sound.", "🐱 **cat** and 🎩 **hat** rhyme: c-**at**, h-**at**.", "☀️ **sun** and 🏃 **run** rhyme: s-**un**, r-**un**."] },
      { heading: "More rhyming pairs", points: ["🌳 tree – bee", "⭐ star – car", "🏠 house – mouse", "🎂 cake – lake", "🐟 fish – dish", "🔔 bell – well"] },
      { heading: "Listen for the end", points: ["Rhyming words do not need to begin the same.", "Only the end sound must match.", "**dog** and **cat** do not rhyme. **dog** and **log** do."] }
    ],
    terms: [
      { term: "Rhyme", meaning: "Words that sound alike at the end, like cat and hat." },
      { term: "Rhyming pair", meaning: "Two words that rhyme." },
      { term: "Poem", meaning: "Words arranged in lines, often with rhymes." },
      { term: "End sound", meaning: "The last sound of a word." }
    ],
    qa: [
      { q: "What are rhyming words?", a: "Words that sound the same at the end, such as sun and run." },
      { q: "Give a rhyming word for 'cat'.", a: "Hat (or mat, bat, rat)." }
    ],
    quiz: [
      Q("Which word rhymes with 🐱 'cat'?", ["Hat", "Cup", "Dog", "Sun"], 0, "Cat and hat both end in -at."),
      Q("Which pair rhymes?", ["sun – moon", "sun – run", "cat – dog", "hen – cow"], 1, "Sun and run both end in -un."),
      Q("Which word rhymes with 🔔 'bell'?", ["Ball", "Bed", "Well", "Bat"], 2, "Bell and well both end in -ell."),
      Q("Which word rhymes with 🐝 'bee'?", ["Bed", "Bus", "Bat", "Tree"], 3, "Bee and tree both end in the sound -ee."),
      Q("Which word does NOT rhyme with 'pen'?", ["Pig", "Hen", "Ten", "Men"], 0, "Hen, ten and men rhyme with pen. Pig does not."),
      Q("Which word rhymes with ⭐ 'star'?", ["Stone", "Car", "Sit", "Top"], 1, "Star and car both end in -ar."),
      Q("Rhyming words sound alike at the ___.", ["Beginning", "Middle", "End", "Picture"], 2, "Rhyming words match at the end."),
      Q("Which word rhymes with 🐟 'fish'?", ["Fan", "Fox", "Fig", "Dish"], 3, "Fish and dish end in -ish."),
      Q("Which word rhymes with ⚽ 'ball'?", ["Wall", "Bell", "Bat", "Bag"], 0, "Ball and wall both end in -all."),
      Q("Which word rhymes with 💡 'light' (say it: lite)?", ["Lap", "Night", "Lip", "Long"], 1, "Light and night both end in -ight."),
      Q("Which word rhymes with 🎂 'cake'?", ["Cap", "Cow", "Lake", "Cup"], 2, "Cake and lake both end in -ake."),
      Q("Which word rhymes with 🏠 'house'?", ["Horse", "Hand", "Hill", "Mouse"], 3, "House and mouse both end in -ouse.")
    ]
  };

  const myFirstWords = {
    summary: "Our first English words: family members, colours and animals around us.",
    notes: [
      { heading: "My family", points: ["👩 **mother** (mummy) and 👨 **father** (papa) are my **parents**.", "👴 **grandfather** and 👵 **grandmother** are my parents' parents.", "👦 **brother** is a boy and 👧 **sister** is a girl in my family.", "**Uncle** and **aunt** are my parents' brother and sister."] },
      { heading: "Colours", points: ["🍅 A tomato is **red**.", "🍌 A banana is **yellow**.", "🌿 Grass is **green**.", "☁️ A clear sky is **blue**.", "❄️ Snow is **white**.", "🐈‍⬛ A crow is **black**."] },
      { heading: "Animals", points: ["🐄 A **cow** says moo and gives us milk.", "🐶 A **dog** says woof and guards the house.", "🐘 An **elephant** has a long trunk.", "🐟 A **fish** lives in water.", "🐦 A **bird** can fly."] }
    ],
    terms: [
      { term: "Parents", meaning: "Your mother and father." },
      { term: "Grandmother", meaning: "The mother of your mother or father." },
      { term: "Colour", meaning: "How something looks, like red, blue or green." },
      { term: "Animal", meaning: "A living thing that eats, moves and breathes, like a dog or cow." },
      { term: "Pet", meaning: "An animal that lives with us at home." }
    ],
    qa: [
      { q: "What colour is grass?", a: "Grass is green." },
      { q: "Name two animals that live in the water.", a: "Fish and turtle (or crab)." }
    ],
    quiz: [
      Q("Your mother's mother is your ___.", ["Grandmother", "Sister", "Aunt", "Father"], 0, "The mother of your mother is your grandmother."),
      Q("🍌 A ripe banana is mostly ___.", ["Blue", "Yellow", "Black", "Pink"], 1, "A ripe banana is yellow."),
      Q("Which animal says 'moo'? 🐄", ["Dog", "Cat", "Cow", "Crow"], 2, "A cow says moo."),
      Q("Is a brother a boy or a girl?", ["A girl", "A baby only", "A bird", "A boy"], 3, "A brother is a boy."),
      Q("Which one is an animal?", ["Dog", "Table", "Spoon", "Chair"], 0, "A dog is an animal."),
      Q("🌿 Grass is ___.", ["Red", "Green", "White", "Black"], 1, "Grass is green."),
      Q("🍅 A ripe tomato is usually ___.", ["Blue", "White", "Red", "Purple"], 2, "A ripe tomato is red."),
      Q("Your mother and father are your ___.", ["Friends", "Teachers", "Pets", "Parents"], 3, "Your mother and father are your parents."),
      Q("Which animal has a long trunk? 🐘", ["Elephant", "Cat", "Duck", "Frog"], 0, "An elephant has a trunk."),
      Q("Which animal lives in water? 🐟", ["Cow", "Fish", "Goat", "Parrot"], 1, "A fish lives in water."),
      Q("❄️ Snow is ___.", ["Green", "Black", "White", "Orange"], 2, "Snow is white."),
      Q("Which word is a family member?", ["Pencil", "Door", "Chair", "Uncle"], 3, "An uncle is a member of the family.")
    ]
  };

  const greetingsPolite = {
    summary: "Greeting words and polite words help us talk kindly: hello, please, thank you and sorry.",
    notes: [
      { heading: "Greetings", points: ["☀️ In the morning we say **Good morning**.", "🌙 Before sleeping we say **Good night**.", "👋 When we meet someone we say **Hello**.", "👋 When we leave we say **Goodbye** or **Bye**."] },
      { heading: "Polite words", points: ["🙏 **Please** is used when we ask for something.", "😊 **Thank you** is used when someone helps us or gives us something.", "😔 **Sorry** is used when we make a mistake or hurt someone.", "🙋 **Excuse me** is used to get someone's attention or to pass by."] },
      { heading: "Kind replies", points: ["When someone says thank you, we say **You are welcome**.", "When someone says sorry, we can say **It is all right**.", "We say **Good morning, ma'am** to our teacher."] }
    ],
    terms: [
      { term: "Greeting", meaning: "A kind word we say when we meet or part." },
      { term: "Polite", meaning: "Speaking and acting in a kind and respectful way." },
      { term: "Please", meaning: "A word we add when we ask for something." },
      { term: "Thank you", meaning: "Words we say to show we are grateful." },
      { term: "Sorry", meaning: "A word we say when we feel bad about a mistake." }
    ],
    qa: [
      { q: "What do we say when someone gives us a gift?", a: "We say thank you." },
      { q: "What polite word do we use when we ask for water?", a: "Please." }
    ],
    quiz: [
      Q("What do we say in the morning?", ["Good morning", "Good night", "Goodbye", "Sorry"], 0, "We greet people with Good morning in the morning."),
      Q("What do we say before going to sleep?", ["Good morning", "Good night", "Hello", "Please"], 1, "Good night is said at bedtime."),
      Q("Someone helps you. What do you say?", ["Sorry", "Excuse me", "Thank you", "Goodbye"], 2, "We say thank you to show we are grateful."),
      Q("Which word do we add when we ask for something?", ["Bye", "Sorry", "Hello", "Please"], 3, "We say please when we ask for something."),
      Q("You bump into a friend by mistake. What do you say?", ["Sorry", "Thank you", "Good night", "Hello"], 0, "We say sorry when we make a mistake."),
      Q("You meet a friend. What do you say?", ["Good night", "Hello", "Sorry", "You are welcome"], 1, "Hello is a greeting."),
      Q("You leave a friend's house. What do you say?", ["Please", "Hello", "Goodbye", "Sorry"], 2, "Goodbye is said when we leave."),
      Q("Someone says 'Thank you'. What do you say?", ["Good night", "Sorry", "Excuse me", "You are welcome"], 3, "You are welcome is the kind reply to thank you."),
      Q("You want to pass through a small crowd. What do you say?", ["Excuse me", "Good night", "Goodbye", "Thank you"], 0, "Excuse me is a polite way to ask people to let you pass."),
      Q("You meet your teacher in the morning. What do you say?", ["Good night, ma'am", "Good morning, ma'am", "Sorry, ma'am", "Bye, ma'am"], 1, "Good morning, ma'am is the right greeting."),
      Q("Someone gives you a birthday gift. What do you say?", ["Sorry", "Please", "Thank you", "Goodbye"], 2, "We say thank you for a gift."),
      Q("Which one is a polite word?", ["Shout", "Push", "Grab", "Please"], 3, "Please is a polite word.")
    ]
  };

  const idiomsPhrasal = {
    summary: "An idiom has a meaning different from its words. A phrasal verb is a verb plus a small word, like give up. Learn them as whole phrases.",
    notes: [
      { heading: "Idioms", points: ["**A piece of cake** means something very easy.", "**Break the ice** means to start a friendly talk when people feel shy.", "**Once in a blue moon** means very rarely.", "**Under the weather** means slightly ill.", "**Spill the beans** means to tell a secret.", "**Hit the sack** means to go to bed."] },
      { heading: "Phrasal verbs", points: ["**give up** = stop trying.", "**look after** = take care of.", "**turn down** = refuse.", "**put off** = postpone (delay to a later time).", "**call off** = cancel.", "**look up** (a word) = search for it in a book."] },
      { heading: "Using them", points: ["The meaning of the whole phrase is not the sum of its words: 'It was a piece of cake' has nothing to do with cake.", "Phrasal verbs change meaning when the small word changes: look **after** and look **up** are different.", "Use idioms in informal speech and writing, and sparingly."] }
    ],
    terms: [
      { term: "Idiom", meaning: "A group of words whose meaning is different from the meaning of the separate words." },
      { term: "Phrasal verb", meaning: "A verb joined with a small word (like up, off, after) that gives a new meaning." },
      { term: "Literal", meaning: "Exactly what the words say." },
      { term: "Figurative", meaning: "Not literal; having an imagined or special meaning." }
    ],
    examples: [
      { q: "Use 'call off' in a sentence.", steps: ["'Call off' means cancel.", "Think of something that can be cancelled: a match, a trip, a meeting."], answer: "The picnic was called off because of the rain." }
    ],
    qa: [
      { q: "What does the idiom 'a piece of cake' mean?", a: "Something very easy to do." },
      { q: "What does the phrasal verb 'put off' mean?", a: "To delay something until a later time." }
    ],
    quiz: [
      Q("'The test was a piece of cake.' This means the test was ___.", ["Very easy", "Very sweet", "Very long", "Very hard"], 0, "A piece of cake means very easy."),
      Q("'To break the ice' means to ___.", ["Cut some ice", "Start a friendly talk", "Feel cold", "Break a glass"], 1, "It means to ease the shyness at the start of a meeting."),
      Q("'Once in a blue moon' means ___.", ["Every night", "Every week", "Very rarely", "Very often"], 2, "It means something that happens very rarely."),
      Q("'I am feeling under the weather.' The speaker is ___.", ["Standing outside", "Very happy", "Wearing a raincoat", "Slightly ill"], 3, "Under the weather means slightly unwell."),
      Q("'To spill the beans' means to ___.", ["Tell a secret", "Cook beans", "Drop food", "Eat a lot"], 0, "It means to reveal a secret."),
      Q("'He hit the sack early.' He ___.", ["Beat a bag", "Went to bed", "Left the house", "Started to cook"], 1, "Hit the sack means went to bed."),
      Q("'Give up' means ___.", ["Give a gift", "Climb up", "Stop trying", "Look up"], 2, "Give up means stop trying."),
      Q("'Look after' means ___.", ["Look behind", "Search for", "Stare at", "Take care of"], 3, "Look after means take care of."),
      Q("'She turned down the offer.' She ___ it.", ["Refused", "Accepted", "Lost", "Read"], 0, "Turn down means refuse."),
      Q("'They put off the meeting.' The meeting was ___.", ["Cancelled", "Postponed", "Held at once", "Made shorter"], 1, "Put off means postpone to a later time."),
      Q("The match was ___ because of heavy rain.", ["called on", "called up", "called off", "called at"], 2, "Called off means cancelled."),
      Q("'Look up a word in the dictionary' means to ___.", ["Raise your eyes", "Ignore it", "Spell it", "Search for it"], 3, "Look up means search for information in a book.")
    ]
  };

  const wordFormation = {
    summary: "New words are made by adding a prefix or suffix to a root word, by joining two words, or by changing a word into another part of speech.",
    notes: [
      { heading: "Prefixes and suffixes", points: ["A **prefix** goes before a root word: **un**happy, **re**do, **dis**appear, **im**possible.", "A **suffix** goes after a root word: care**ful**, care**less**, quick**ly**, kind**ness**.", "**un-, dis-, im-, in-** make the opposite; **re-** means again.", "**-ful** means full of; **-less** means without."] },
      { heading: "Compound words", points: ["Two words joined make a compound word.", "sun + flower = **sunflower**; foot + ball = **football**; class + room = **classroom**."] },
      { heading: "One word to another", points: ["Noun from verb: decide → **decision**, know → **knowledge**.", "Adjective from noun: danger → **dangerous**.", "Noun from adjective: beautiful → **beauty**.", "Adverb from adjective: quick → **quickly**."] }
    ],
    terms: [
      { term: "Root word", meaning: "The main word before a prefix or suffix is added." },
      { term: "Prefix", meaning: "Letters added at the beginning of a word." },
      { term: "Suffix", meaning: "Letters added at the end of a word." },
      { term: "Compound word", meaning: "A word made of two words joined together." }
    ],
    examples: [
      { q: "Make the opposite of 'possible' with a prefix.", steps: ["The prefix im- is used before words starting with p.", "im + possible = impossible."], answer: "impossible" }
    ],
    qa: [
      { q: "What is the difference between a prefix and a suffix?", a: "A prefix is added at the beginning of a word and a suffix at the end." },
      { q: "Give a compound word made from 'rain' and 'bow'.", a: "Rainbow." }
    ],
    quiz: [
      Q("un + happy = ?", ["Unhappy", "Happyun", "Happily", "Happiness"], 0, "The prefix un- gives the opposite: unhappy."),
      Q("care + ful = ?", ["Carefully", "Careful", "Careless", "Caring"], 1, "The suffix -ful means full of, so careful."),
      Q("sun + flower = ?", ["Flowersun", "Sunny", "Sunflower", "Sunless"], 2, "Joining two words gives a compound word: sunflower."),
      Q("Which noun comes from 'beautiful'?", ["Beautify", "Beautifully", "Beautician", "Beauty"], 3, "The noun is beauty."),
      Q("Which adjective comes from 'danger'?", ["Dangerous", "Endanger", "Dangerously", "Dangered"], 0, "Danger + -ous = dangerous."),
      Q("Which noun comes from 'decide'?", ["Decided", "Decision", "Deciding", "Decisive"], 1, "Decide becomes the noun decision."),
      Q("The prefix 're-' means ___.", ["Not", "Without", "Again", "Before"], 2, "Re- means again, as in redo."),
      Q("Which prefix makes the opposite of 'possible'?", ["un-", "re-", "dis-", "im-"], 3, "Impossible is the correct opposite."),
      Q("Which one is a compound word?", ["Football", "Quickly", "Happiness", "Unkind"], 0, "Football is foot + ball."),
      Q("The suffix '-less' means ___.", ["Full of", "Without", "Again", "Very"], 1, "-less means without, as in careless."),
      Q("Which noun comes from 'know'?", ["Known", "Knower", "Knowledge", "Knowing"], 2, "The noun made from know is knowledge."),
      Q("Which adverb comes from 'quick'?", ["Quicker", "Quickness", "Quicken", "Quickly"], 3, "Quick + -ly = quickly."),
      Q("dis + appear = ?", ["Appearance", "Disappear", "Reappear", "Appearing"], 1, "The prefix dis- makes the opposite: disappear.")
    ]
  };

  const confusedWords = {
    summary: "Some words look or sound alike but differ in meaning. One word can replace a whole phrase, and proverbs carry advice.",
    notes: [
      { heading: "Confused words", points: ["**accept** (take) / **except** (leave out): I accept the gift. Everyone except Raj came.", "**affect** (verb: to influence) / **effect** (noun: a result): Rain affects crops. The effect was good.", "**advice** (noun) / **advise** (verb): She gave me advice. I advise you to rest.", "**principal** (head of a school) / **principle** (a rule or belief).", "**stationary** (not moving) / **stationery** (pens, paper).", "**complement** (completes) / **compliment** (praise)."] },
      { heading: "One-word substitutes", points: ["a person who writes books = **author**", "the story of a person's life written by another = **biography**", "the story of one's own life written by oneself = **autobiography**", "a person who speaks two languages = **bilingual**", "government by the people = **democracy**", "a place where books are kept = **library**"] },
      { heading: "Proverbs", points: ["**A stitch in time saves nine**: fix a small problem early.", "**Look before you leap**: think before you act.", "**Practice makes perfect**: doing something again and again makes you good at it."] }
    ],
    terms: [
      { term: "Confusable words", meaning: "Words that look or sound alike but have different meanings." },
      { term: "One-word substitute", meaning: "One word that takes the place of a long phrase." },
      { term: "Proverb", meaning: "A short, well-known saying that gives advice." },
      { term: "Homophone", meaning: "A word that sounds like another but is spelt and means differently." }
    ],
    examples: [
      { q: "Choose: 'The new rules will (affect / effect) all students.'", steps: ["Here we need a verb meaning to influence.", "Affect is the verb; effect is the noun."], answer: "affect" }
    ],
    qa: [
      { q: "What is the difference between 'stationary' and 'stationery'?", a: "Stationary means not moving; stationery means pens, paper and other writing materials." },
      { q: "What does the proverb 'Look before you leap' advise?", a: "Think carefully before you act." }
    ],
    quiz: [
      Q("Everyone came ___ Ravi.", ["accept", "except", "expect", "excerpt"], 1, "Except means leaving out."),
      Q("The medicine had a good ___ on him.", ["affect", "effect", "affects", "affection"], 1, "Effect is a noun meaning result."),
      Q("The doctor gave me good ___.", ["advice", "advise", "advices", "advised"], 0, "Advice is the noun."),
      Q("The ___ of our school gave the prizes.", ["principle", "principal", "principals' rule", "principally"], 1, "The principal is the head of the school."),
      Q("The train was ___ at the platform.", ["stationery", "stationary", "stationed on", "station"], 1, "Stationary means not moving."),
      Q("A person who writes books is an ___.", ["editor", "author", "actor", "artist"], 1, "An author writes books."),
      Q("The life story of a person written by someone else is a ___.", ["biography", "autobiography", "diary", "novel"], 0, "A biography is written by another person."),
      Q("A person who can speak two languages is ___.", ["bilingual", "bicycle", "bimonthly", "bipolar"], 0, "Bilingual means speaking two languages."),
      Q("Which proverb tells us to mend a small problem early?", ["Look before you leap", "A stitch in time saves nine", "Practice makes perfect", "Slow and steady wins"], 1, "A stitch in time saves nine means act early."),
      Q("'Look before you leap' advises us to ___.", ["Run fast", "Jump high", "Think before acting", "Look back always"], 2, "It means think before you act."),
      Q("Government by the people is called ___.", ["monarchy", "democracy", "dictatorship", "bureaucracy"], 1, "Democracy is rule by the people."),
      Q("She gave me a ___ on my neat work.", ["complement", "compliment", "complaint", "comfort"], 1, "A compliment is praise.")
    ]
  };

  // ---------- Reading level helper ----------
  const reading = (cls, shared, cb, pb) =>
    lv(`reading-${cls}`, cls, `Reading, Class ${cls} level`,
      `Read Class ${cls} stories, poems and passages and answer questions on what happens, who says what and why.`,
      [].concat(shared.map((c) => A(cls, c)), cb.map((c) => C(cls, c)), pb.map((c) => B(cls, c))));

  const R = reading;

  StudyData.addPath("english", {
    title: "English",
    titleLocal: "ਅੰਗਰੇਜ਼ੀ / अंग्रेज़ी",
    topics: [
      // ───────────────────────────── Phonics and words ─────────────────────────────
      {
        id: "phonics",
        title: "Phonics and words",
        icon: "Aa",
        summary: "From letters and sounds, rhymes and first words to vowel sounds, word families and sound-alike words.",
        levels: [
          lv("phonics-0-alphabet", 0, "Alphabet and letter sounds", "Say the letters A to Z in order, match capital and small letters and say the first sound of a word.", [], { own: Object.assign({ id: "alphabet-and-letter-sounds", title: "Alphabet and Letter Sounds", section: "Phonics" }, alphabetSounds) }),
          lv("phonics-0-rhymes", 0, "Rhyming words", "Hear the end sound of a word and pick the word that rhymes with it.", [], { own: Object.assign({ id: "rhyming-words", title: "Rhyming Words", section: "Phonics" }, rhymingWords) }),
          lv("phonics-0-first-words", 0, "My first words", "Name family members, colours and common animals in English.", [], { own: Object.assign({ id: "my-first-words", title: "My First Words: Family, Colours, Animals", section: "Words" }, myFirstWords) }),
          lv("phonics-1-letters", 1, "Letters, vowels and sounds", "Name the letters, tell vowels from consonants and say the sound each letter makes.", [A(1, "the-alphabet"), A(1, "vowels-and-consonants"), A(1, "phonics-letter-sounds"), B(1, "rb1-letters-and-sounds")]),
          lv("phonics-1-words", 1, "Three-letter words and first words", "Read and spell simple three-letter words and name colours, numbers and days.", [A(1, "three-letter-words"), A(1, "colours-numbers-days")]),
          lv("phonics-3-rhymes", 3, "Vowel sounds, blends and rhymes", "Read words with the vowels a, e, i, o, u, join letters in blends and pair words that rhyme or are opposites.", [A(3, "opposites-and-rhyming-words"), B(2, "rb2-alphabet-and-cursive"), B(2, "rb2-vowel-a"), B(2, "rb2-vowel-e"), B(2, "rb2-vowels-i-o-u"), B(2, "rb2-blends-and-pointing-words")]),
          lv("phonics-5-homophones", 5, "Words that sound alike", "Tell homophones such as their/there and write the right one in a sentence.", [A(5, "homophones")])
        ]
      },

      // ───────────────────────────── Nouns, pronouns, articles, determiners ─────────────────────────────
      {
        id: "nouns",
        title: "Nouns, pronouns and determiners",
        icon: "N",
        summary: "Naming words, the words that stand in for them, and a/an/the and other words that go before nouns.",
        levels: [
          lv("nouns-1", 1, "Naming words, a and an", "Name people, animals, places and things, and use a or an correctly.", [A(1, "naming-words"), A(1, "a-and-an"), A(1, "this-that-these-those")]),
          lv("nouns-2", 2, "Proper nouns, plurals and he/she/it", "Use capital letters for names, make plurals and use he, she, it and they.", [A(2, "naming-words-and-proper-nouns"), A(2, "one-and-many"), A(2, "he-she-it-they")]),
          lv("nouns-3a", 3, "Nouns and plurals", "Name common and proper nouns and change singular to plural.", [A(3, "nouns"), A(3, "singular-and-plural")]),
          lv("nouns-3b", 3, "Pronouns and articles", "Use I, you, he, she, it, we, they and the articles a, an, the.", [A(3, "pronouns"), A(3, "articles")]),
          lv("nouns-4", 4, "Gender and collective nouns", "Give masculine and feminine words and the right name for a group.", [A(4, "gender"), A(4, "collective-nouns")]),
          lv("nouns-5", 5, "Kinds of nouns", "Sort nouns into common, proper, collective, material and abstract.", [A(5, "kinds-of-nouns")]),
          lv("nouns-6", 6, "Nouns and pronouns", "Use kinds of nouns and the main kinds of pronouns correctly.", [C(6, "nouns"), C(6, "pronouns"), B(6, "pb-nouns"), B(6, "pb-pronouns")]),
          lv("nouns-6-articles", 6, "Articles", "Choose a, an or the with the right kind of noun.", [C(6, "articles"), B(6, "pb-articles")]),
          lv("nouns-8", 8, "Determiners and parts of speech", "Use some, any, much, many, few, little and the other determiners, and name the parts of speech.", [C(8, "determiners"), B(7, "pb-nouns-pronouns"), B(7, "pb-articles-determiners"), B(8, "pb-determiners"), B(8, "pb-parts-of-speech")]),
          lv("nouns-9", 9, "Determiners (Class 9)", "Use quantifiers, demonstratives and possessives correctly in context.", [C(9, "determiners"), B(9, "grammar-determiners")]),
          lv("nouns-10", 10, "Determiners (Class 10)", "Fill gaps with the right determiner in board-style questions.", [C(10, "determiners"), B(10, "grammar-determiners-prepositions-modals-connectors")]),
          lv("nouns-11", 11, "Determiners (Class 11 and 12)", "Handle all determiners, including 'a few / few' and 'a little / little', in Class 11 and 12 exercises.", [C(11, "determiners"), B(11, "determiners"), B(12, "determiners")])
        ]
      },

      // ───────────────────────────── Verbs and tenses ─────────────────────────────
      {
        id: "verbs",
        title: "Verbs and tenses",
        icon: "V",
        summary: "Action words, is/am/are, the tenses, helping verbs and non-finites.",
        levels: [
          lv("verbs-2", 2, "Action words and is/am/are", "Pick action words and use is, am and are with the right subject.", [A(2, "action-words"), A(2, "is-am-are")]),
          lv("verbs-3", 3, "Verbs and simple present", "Find the verb in a sentence and use the simple present tense.", [A(3, "verbs"), A(3, "simple-present-tense")]),
          lv("verbs-4", 4, "Simple past tense", "Change verbs to the past, including common irregular verbs.", [A(4, "simple-past-tense")]),
          lv("verbs-5", 5, "Tenses", "Tell past, present and future tense in sentences.", [A(5, "tenses")]),
          lv("verbs-6", 6, "Verbs and simple tenses", "Use the simple present and simple past correctly.", [C(6, "verbs-and-simple-tenses"), B(6, "pb-verbs-tenses")]),
          lv("verbs-7", 7, "Perfect tenses and verb forms", "Use the present, past and future perfect tenses.", [C(7, "perfect-tenses"), B(7, "pb-verbs-tenses")]),
          lv("verbs-8", 8, "Tense revision and kinds of verbs", "Choose the right tense in mixed exercises and tell main from helping, transitive from intransitive and finite from non-finite verbs.", [C(8, "tense-revision"), B(8, "pb-tenses"), B(8, "pb-main-helping-verbs"), B(8, "pb-transitive-intransitive"), B(8, "pb-finite-nonfinite")]),
          lv("verbs-9", 9, "Tenses, concord and non-finites", "Use all the tenses correctly and use infinitives, gerunds and participles.", [C(9, "tenses"), B(9, "grammar-tenses-concord-sequence"), B(9, "grammar-non-finites")]),
          lv("verbs-10", 10, "Tenses (Class 10)", "Fill gaps with the right tense and verb form in Class 10 exercises.", [C(10, "tenses"), B(10, "grammar-non-finites"), B(10, "grammar-tenses-and-punctuation")]),
          lv("verbs-11", 11, "Tenses and non-finites (Class 11 and 12)", "Use tenses accurately in longer passages and editing tasks, and use non-finites in board-level exercises.", [C(11, "tenses"), B(11, "tenses"), B(12, "non-finites")])
        ]
      },

      // ───────────────────────────── Adjectives, adverbs, prepositions ─────────────────────────────
      {
        id: "describing",
        title: "Adjectives, adverbs, prepositions and conjunctions",
        icon: "Adj",
        summary: "Words that describe, say how, where or when, and join words and sentences.",
        levels: [
          lv("describing-2", 2, "Describing words and in/on/under", "Use describing words and say where things are with in, on and under.", [A(2, "describing-words"), A(2, "in-on-under")]),
          lv("describing-3", 3, "Adjectives", "Pick adjectives that describe nouns and use them in sentences.", [A(3, "adjectives"), B(1, "rb1-in-on-under")]),
          lv("describing-4", 4, "Adverbs, prepositions and conjunctions", "Use adverbs, prepositions of place and time and the joining words and, but, or.", [A(4, "adverbs"), A(4, "prepositions"), A(4, "conjunctions")]),
          lv("describing-5", 5, "Degrees of comparison", "Use the positive, comparative and superlative forms of adjectives.", [A(5, "degrees-of-comparison")]),
          lv("describing-6", 6, "Adjectives and degrees", "Use adjectives and adverbs, and form the comparative and superlative (including irregular forms).", [C(6, "adjectives"), B(6, "pb-adjectives-adverbs"), B(7, "pb-adjectives"), B(8, "pb-degrees-adjectives")]),
          lv("describing-7a", 7, "Adverbs and conjunctions", "Use adverbs of manner, place, time and degree, and conjunctions of reason and contrast.", [C(7, "adverbs"), C(7, "conjunctions"), B(7, "pb-adverbs"), B(7, "pb-conjunctions")]),
          lv("describing-7b", 7, "Prepositions", "Choose the right preposition of time, place and direction, and the right one after a verb or adjective.", [C(6, "prepositions"), B(6, "pb-prepositions-conjunctions"), B(7, "pb-prepositions"), B(9, "grammar-prepositions"), B(9, "grammar-conjunctions"), B(11, "prepositions")])
        ]
      },

      // ───────────────────────────── Sentences and clauses ─────────────────────────────
      {
        id: "sentences",
        title: "Sentences, clauses and agreement",
        icon: "S",
        summary: "From simple sentences to kinds of sentences, subject-verb agreement, clauses and transformation.",
        levels: [
          lv("sentences-1", 1, "Simple sentences", "Write a simple sentence with a capital letter and a full stop.", [A(1, "simple-sentences")]),
          lv("sentences-2", 2, "Making sentences and questions", "Make statements and questions from words.", [A(2, "making-sentences-and-questions")]),
          lv("sentences-5", 5, "Subject, predicate and kinds of sentences", "Find the subject and predicate and name the four kinds of sentences.", [A(5, "subject-and-predicate"), A(5, "kinds-of-sentences")]),
          lv("sentences-7", 7, "Subject-verb agreement and kinds of sentences", "Match the verb to a singular or plural subject and name kinds of sentences.", [C(7, "subject-verb-agreement"), B(7, "pb-sentences")]),
          lv("sentences-8", 8, "Clauses and kinds of sentences", "Identify main and subordinate clauses and name simple, compound and complex sentences.", [C(8, "clauses-and-kinds-of-sentences"), B(8, "pb-sentence-kinds")]),
          lv("sentences-9", 9, "Agreement and sentence types (Class 9)", "Apply the rules of concord and combine sentences into simple, compound and complex forms.", [C(9, "subject-verb-agreement"), B(9, "grammar-simple-compound-complex")]),
          lv("sentences-10", 10, "Agreement and sentence types (Class 10)", "Apply agreement rules and sentence types in Class 10 exercises.", [C(10, "subject-verb-agreement"), B(10, "grammar-simple-complex-compound-sentences")]),
          lv("sentences-11", 11, "Clauses and transformation", "Use noun, adjective and adverb clauses and rewrite sentences without changing the meaning.", [C(11, "clauses"), C(11, "reordering-transformation"), B(12, "transformation-of-sentences")])
        ]
      },

      // ───────────────────────────── Voice and narration ─────────────────────────────
      {
        id: "voice",
        title: "Voice and reported speech",
        icon: "“”",
        summary: "Active and passive voice, and changing direct speech into indirect (reported) speech.",
        levels: [
          lv("voice-8a", 8, "Active and passive voice", "Change a sentence from active to passive and back.", [C(8, "active-and-passive-voice"), B(8, "pb-active-passive")]),
          lv("voice-8b", 8, "Direct and reported speech", "Report statements, questions, orders and requests.", [C(7, "direct-and-indirect-speech"), C(8, "reported-speech"), B(8, "pb-direct-indirect")]),
          lv("voice-9a", 9, "Voice (Class 9)", "Use the passive in all tenses and with modals.", [C(9, "active-passive-voice"), B(9, "grammar-active-passive-voice")]),
          lv("voice-9b", 9, "Reported speech (Class 9)", "Change tenses, pronouns and time words when reporting.", [C(9, "reported-speech"), B(9, "grammar-narration")]),
          lv("voice-10", 10, "Voice and narration (Class 10 and above)", "Apply voice and narration rules to mixed sentences in board-level exercises.", [C(10, "active-passive-voice"), C(10, "reported-speech"), B(10, "grammar-voice-and-reported-speech"), B(11, "voice"), B(11, "narration"), B(12, "voice"), B(12, "narration")])
        ]
      },

      // ───────────────────────────── Modals ─────────────────────────────
      {
        id: "modals",
        title: "Modals",
        icon: "can",
        summary: "Can, may, must, should, would and the other helping words for ability, permission and advice.",
        levels: [
          lv("modals-9", 9, "Modals", "Use can, could, may, might, must, should for ability, permission, advice and possibility.", [C(7, "modals"), C(9, "modals"), B(9, "grammar-modals")]),
          lv("modals-11", 11, "Modals (Class 10 and 11)", "Use modals in gap-fill and rewriting items and tell close modals apart.", [C(10, "modals"), C(11, "modals"), B(11, "modals")])
        ]
      },

      // ───────────────────────────── Vocabulary ─────────────────────────────
      {
        id: "vocabulary",
        title: "Vocabulary",
        icon: "Abc",
        summary: "Polite words, opposites, synonyms, prefixes and suffixes, word formation, idioms and phrasal verbs.",
        levels: [
          lv("vocab-0-greetings", 0, "Simple greetings and polite words", "Greet people and use please, thank you, sorry and excuse me at the right time.", [], { own: Object.assign({ id: "greetings-and-polite-words", title: "Simple Greetings and Polite Words", section: "Words" }, greetingsPolite) }),
          lv("vocab-2", 2, "Opposites", "Give the opposite of common words.", [A(2, "opposites")]),
          lv("vocab-4", 4, "Synonyms and antonyms", "Give words with the same or opposite meaning.", [A(4, "synonyms-and-antonyms")]),
          lv("vocab-5", 5, "Prefixes and suffixes", "Build new words with prefixes and suffixes.", [A(5, "prefixes-and-suffixes")]),
          lv("vocab-7", 7, "Word power and word formation", "Learn new words and make more with prefixes, suffixes and compounds, and change a word from one part of speech to another.", [B(6, "pb-word-power"), B(7, "pb-word-power")], { own: Object.assign({ id: "word-formation", title: "Word Formation", section: "Vocabulary" }, wordFormation) }),
          lv("vocab-8", 8, "Idioms and phrasal verbs", "Explain common idioms and phrasal verbs and use them in sentences.", [B(8, "pb-word-power")], { own: Object.assign({ id: "idioms-and-phrasal-verbs", title: "Idioms and Phrasal Verbs", section: "Vocabulary" }, idiomsPhrasal) }),
          lv("vocab-10", 10, "Confused words, one-word substitutes and proverbs", "Choose between confused words and use one-word substitutes and common proverbs; use one word as noun, verb or adjective.", [B(9, "vocabulary-word-power"), B(10, "vocabulary-confused-words-idioms-proverbs"), B(11, "same-word-noun-verb-adjective")], { own: Object.assign({ id: "confused-words-and-substitutes", title: "Confused Words, One-word Substitutes and Proverbs", section: "Vocabulary" }, confusedWords) })
        ]
      },

      // ───────────────────────────── Punctuation and editing ─────────────────────────────
      {
        id: "punctuation",
        title: "Punctuation and editing",
        icon: ",.?",
        summary: "Capital letters, full stops, commas and quotation marks, then finding and fixing errors.",
        levels: [
          lv("punct-4", 4, "Punctuation", "Use capital letters, full stops, commas and question marks.", [A(4, "punctuation")]),
          lv("punct-8", 8, "Punctuation in longer writing", "Use commas, apostrophes and quotation marks and punctuate longer passages correctly.", [C(8, "punctuation"), B(6, "pb-punctuation")]),
          lv("punct-11", 11, "Editing and error correction", "Find and fix errors in a passage and use 'too' correctly.", [C(11, "editing-error-correction"), B(11, "removal-use-of-too")])
        ]
      },

      // ───────────────────────────── Reading ─────────────────────────────
      {
        id: "reading",
        title: "Reading",
        icon: "📖",
        summary: "Understand pictures, short stories, poems and longer passages, class by class.",
        levels: [
          R(1, [], ["two-little-hands", "my-family", "the-cap-seller-and-the-monkeys", "a-farm"], ["rb1-rhyme-time", "rb1-the-cat-and-the-rat", "rb1-me-and-my-family", "rb1-words-around-us"]),
          R(2, ["reading-a-short-story"], ["my-bicycle", "the-crow", "the-smart-monkey", "little-drops-of-water"], ["rb2-going-to-a-zoo", "rb2-a-pet-hen", "rb2-rhyme-time", "rb2-holi"]),
          R(3, ["picture-reading"], ["badal-and-moti", "best-friends", "the-big-laddoo", "paper-boats"], ["rb3-a-visit-to-a-park", "rb3-lazy-param", "rb3-a-bear-and-a-rabbit", "rb3-the-swing"]),
          R(4, ["reading-comprehension"], ["one-thing-at-a-time", "the-old-stag", "braille", "the-lagori-champions"], ["rb4-the-king-and-his-sons", "rb4-the-farmer-and-the-bullock-cart", "rb4-walnut-and-watermelon", "rb4-teamwork"]),
          R(5, ["reading-comprehension"], ["papas-spectacles", "the-wise-parrot", "gilli-danda", "the-decision-of-the-panchayat"], ["rb5-the-elves-and-the-shoemaker", "rb5-two-frogs", "rb5-raja-birbal", "rb5-the-flying-sikh-milkha-singh"]),
          R(6, [], ["reading-comprehension", "a-bottle-of-dew", "the-raven-and-the-fox", "rama-to-the-rescue", "change-of-heart"], ["pb-farmhouse-cows", "pb-giving-tree", "pb-playing-kabaddi", "pb-cracked-pot"]),
          R(7, [], ["the-day-the-river-spoke", "try-again", "three-days-to-see", "a-funny-man"], ["pb-rent-for-water", "pb-birbals-khichdi", "pb-hunter-and-deer", "pb-treasure-hunt"]),
          R(8, [], ["the-wit-that-won-hearts", "wisdom-paves-the-way", "a-tale-of-valour-major-somnath-sharma", "verghese-kurien-i-too-had-a-dream"], ["pb-value-of-money", "pb-aged-mother", "pb-saint-ravidas", "pb-marco-polo"]),
          R(9, [], ["how-i-taught-my-grandmother-to-read", "the-pot-maker", "vitamin-m", "nine-gold-medals"], ["grooming-of-a-boy", "journey-by-night", "three-great-indians", "a-letter-to-god"]),
          R(10, [], ["a-letter-to-god", "nelson-mandela-long-walk-to-freedom", "from-the-diary-of-anne-frank", "the-thiefs-story"], ["the-happy-prince", "a-gift-for-christmas", "the-rule-of-the-road", "bed-number-29"]),
          R(11, [], ["the-portrait-of-a-lady", "were-not-afraid-to-die", "the-adventure", "the-summer-of-the-beautiful-white-horse"], ["gender-bias", "a-president-speaks", "an-astrologers-day", "the-model-millionaire"]),
          R(12, [], ["the-last-lesson", "lost-spring", "the-rattrap", "the-third-level"], ["hassans-attendance-problem", "the-march-king", "on-saying-please", "the-story-of-my-life"])
        ]
      },

      // ───────────────────────────── Writing: paragraphs and stories ─────────────────────────────
      {
        id: "writing-paragraphs",
        title: "Writing: paragraphs, stories and diaries",
        icon: "✍",
        summary: "A short paragraph, a story, a diary entry, a descriptive and an analytical paragraph, and a precis.",
        levels: [
          lv("wp-3", 3, "Writing a short paragraph", "Write five or six connected sentences on one topic.", [A(3, "writing-short-paragraph")]),
          lv("wp-5", 5, "Story writing", "Write a story with a beginning, middle and end.", [A(5, "story-writing")]),
          lv("wp-6", 6, "Paragraph writing (Class 6)", "Write and describe in a well-organised paragraph, or describe a picture.", [C(6, "paragraph-writing"), B(6, "pb-paragraph-picture")]),
          lv("wp-7", 7, "Story and diary", "Write a story with a moral and a diary entry with date and feelings.", [C(7, "story-writing"), C(7, "diary-entry"), B(7, "pb-story-picture"), B(8, "pb-paragraph-story")]),
          lv("wp-9", 9, "Descriptive, analytical paragraph and precis", "Describe a person, place or event, write a diary or story, describe data in an analytical paragraph and shorten a passage.", [C(9, "descriptive-paragraph"), C(9, "diary-entry"), C(9, "story-writing"), C(10, "analytical-paragraph"), B(9, "writing-paragraph-and-story"), B(12, "precis-writing")])
        ]
      },

      // ───────────────────────────── Writing: letters and email ─────────────────────────────
      {
        id: "writing-letters",
        title: "Writing: letters, applications and email",
        icon: "✉",
        summary: "Informal and formal letters, applications, invitations, letters to the editor, job applications and email.",
        levels: [
          lv("wl-4", 4, "Informal letter", "Write a letter to a friend or a relative in the right format.", [A(4, "informal-letter")]),
          lv("wl-6", 6, "Letters (Class 6)", "Write informal letters and simple applications.", [C(6, "informal-letter"), B(6, "pb-letters-applications")]),
          lv("wl-7", 7, "Formal letter and applications", "Write a formal letter or an application with the right layout and tone.", [C(7, "formal-letter"), B(7, "pb-letters-applications")]),
          lv("wl-8", 8, "Email and letters", "Write an email and letters or applications.", [C(8, "email-writing"), B(8, "pb-letters-applications"), B(9, "writing-letter-writing")]),
          lv("wl-10", 10, "Formal and social letters", "Write letters of complaint, enquiry and order, and social and personal letters.", [C(10, "formal-letter"), B(11, "letter-writing-social-personal")]),
          lv("wl-12", 12, "Invitations, editor letters and job applications", "Write formal invitations and replies, letters to the editor, job applications and email.", [C(12, "invitation-and-reply"), C(12, "letter-to-the-editor"), C(12, "job-application"), B(12, "letters-and-applications"), B(12, "e-mail-writing")])
        ]
      },

      // ───────────────────────────── Writing: notices, messages, posters, ads ─────────────────────────────
      {
        id: "writing-notices",
        title: "Writing: notices, messages and posters",
        icon: "📌",
        summary: "Short, exact writing for an audience: notices, messages, slogans, posters, advertisements.",
        levels: [
          lv("wn-5", 5, "Notice writing", "Write a notice with heading, date, matter and the writer's name.", [A(5, "notice-writing")]),
          lv("wn-6", 6, "Notices, messages and slogans", "Write a notice, a short message and a slogan.", [C(6, "notice-writing"), B(6, "pb-messages-slogans")]),
          lv("wn-7", 7, "Messages and notices (Class 7)", "Write a message within 50 words and a notice.", [C(7, "message-writing"), B(7, "pb-paragraph-notice-message")]),
          lv("wn-8", 8, "Notice, message and advertisement", "Write notices, messages, emails and advertisements to the word limit.", [C(8, "notice-and-message"), B(8, "pb-notice-message-email"), B(9, "writing-notice-and-message"), B(10, "writing-notices-messages-advertisements-paragraphs-letters")]),
          lv("wn-11", 11, "Notice, poster and advertisement", "Design a notice, a poster and an advertisement and write a message.", [C(11, "notice-writing"), C(11, "poster-making"), B(11, "message-and-notice-writing"), B(11, "advertisement-writing"), B(11, "note-making")]),
          lv("wn-12", 12, "Notice (Class 12) and newspaper headlines", "Write a notice and explain newspaper headlines.", [C(12, "notice-writing"), B(12, "explaining-newspaper-headlines")])
        ]
      },

      // ───────────────────────────── Writing: articles, speeches, reports, translation ─────────────────────────────
      {
        id: "writing-long",
        title: "Writing: articles, speeches, reports and translation",
        icon: "🎤",
        summary: "Longer writing for an audience: articles, speeches, debates, reports, and translation into English.",
        levels: [
          lv("wa-8", 8, "Articles, speeches and translation", "Write an article and a speech with an opening, points and a close; translate short passages into English.", [C(8, "article-writing"), C(8, "speech-writing"), B(9, "writing-translation")]),
          lv("wa-11", 11, "Speech, debate and translation", "Write a speech and a debate for or against a motion; translate with care for tense, word order and idiom.", [C(11, "speech-writing"), C(11, "debate-writing"), B(11, "translation-tips")]),
          lv("wa-12", 12, "Article, report and translation", "Write an article and a report in the right format; translate longer passages into English.", [C(12, "article-writing"), C(12, "report-writing"), B(12, "translation-tips")])
        ]
      }
    ]
  });
})();
