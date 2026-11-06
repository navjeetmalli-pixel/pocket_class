// Class 9 English (PSEB) practice bank, part 6: extra questions for chapters with gaps. Extra practice (unreviewed draft).
(function () {
  let n = 1;
  // M(level, question, right answer, three wrong answers, explanation, objective id?): the right answer is stored at a varying position.
  function M(level, q, right, wrong, explain, obj) {
    const at = (n++) % 4;
    const options = wrong.slice();
    options.splice(at, 0, right);
    const o = { q, options, answer: at, explain, level };
    if (obj) o.obj = obj;
    return o;
  }
  // W(marks, question, model answer, type?, objective id?)
  function W(marks, q, a, type, obj) {
    const o = { q, a, marks };
    if (type) o.type = type;
    if (obj) o.obj = obj;
    return o;
  }
  StudyData.addPractice(9, "englishpb", {
    "grammar-determiners": {
      mcq: [],
      written: [
        W(5, "Explain the use of the articles a, an and the, with examples, and say where no article is used.", "A and an are indefinite articles used with singular countable nouns: a before a consonant sound (a university, a one-rupee coin) and an before a vowel sound (an hour, an umbrella). The is used for a particular or already-mentioned thing, for unique things (the sun, the moon) and for rivers, seas, mountain ranges and newspapers (the Ganga, the Himalayas). No article is used before names of people, most countries, languages, meals and games: \"We play cricket.\" \"She speaks Punjabi.\"", "long"),
        W(4, "Distinguish between few and a few, little and a little, and between much and many. Give an example for each.", "Few (hardly any) and a few (some) go with countable nouns; little (hardly any) and a little (some) go with uncountable nouns. Example: \"A few friends came\" (some came) but \"Few friends came\" (hardly any). \"I have a little water\" (some) but \"I have little water\" (hardly any). Much goes with uncountable nouns (much water) and many with countable plurals (many books). Its (possessive) must not be confused with it's (it is).", "long")
      ]
    },
    "grammar-modals": {
      mcq: [],
      written: [
        W(5, "Explain the uses of can, could, may, might, must and should with one example of each.", "Can shows ability (She can swim) and informal permission (Can I go?). Could is the past of ability and a polite request. May shows permission (May I come in?) and possibility (It may rain); might suggests a weaker possibility. Must shows strong necessity or duty (You must obey traffic rules); must not expresses prohibition. Should or ought to gives advice or moral duty (You should respect elders).", "long"),
        W(4, "State the rules for using modals. Explain the difference between \"need not\" and \"must not\" with examples.", "A modal is followed by the base form of the verb without \"to\": \"She can sing\", not \"can sings\" or \"can to sing\". Ought to is the exception and keeps \"to\". Modals have the same form for all persons, so there is no -s with he, she or it. Need not means it is not necessary (\"You need not come\"), while must not means it is forbidden (\"You must not cheat\").", "long")
      ]
    },
    "grammar-prepositions": {
      mcq: [],
      written: [
        W(5, "Explain the use of at, on and in for time and place, with examples. How are since and for used?", "For time: at is used with a clock time or point (at 5 o'clock), on with a day or date (on Monday, on 15 August) and in with a month, year, season or part of the day (in March, in 2020, in the morning). For place: at is used for a point (at the gate), in for an enclosed space (in the room, in Punjab) and on for a surface (on the table). Since is used with a point of time (since Monday) and for with a period (for two hours).", "long"),
        W(4, "Distinguish between between/among, beside/besides and in/into, and give any four words with fixed prepositions.", "Between is used for two and among for more than two. Beside means next to; besides means in addition to. In shows being inside or within; into shows movement from outside to inside (He jumped into the pool). Fixed prepositions: good at, fond of, afraid of, proud of, interested in, angry with (a person), angry at (a thing), different from, depend on, suffer from.", "long")
      ]
    },
    "grammar-conjunctions": {
      mcq: [],
      written: [
        W(5, "Explain coordinating and subordinating conjunctions with examples. List the uses of the subordinating conjunctions.", "Coordinating conjunctions join words or clauses of equal rank: and, but, or, nor, for, yet, so. And adds, but and yet show contrast, or gives a choice, so shows result and for gives a reason: \"He was tired, but he kept working.\" Subordinating conjunctions join a dependent clause to a main clause. Time: when, while, before, after, until, as soon as. Reason: because, since, as. Condition: if, unless. Concession: although, though, even if. Purpose: so that, in order that. That introduces a noun clause: \"I know that he is honest.\"", "long"),
        W(4, "What are correlative conjunctions? Give four pairs. Correct (i) Although he was tired, but he worked. (ii) Because it rained, so we stayed home. (iii) Unless you do not work hard, you will fail.", "Correlative conjunctions work in pairs: either…or, neither…nor, both…and, not only…but also, whether…or, no sooner…than, hardly…when. (i) Although he was tired, he worked (although and but are not used together). (ii) Because it rained, we stayed home (because and so are not used together). (iii) Unless you work hard, you will fail (unless already has a negative sense).", "long")
      ]
    },
    "grammar-simple-compound-complex": {
      mcq: [],
      written: [
        W(5, "Define simple, compound and complex sentences with an example of each. Name the three kinds of subordinate clauses.", "A simple sentence has one subject and one finite verb (one clause): \"The boy ran home.\" A compound sentence has two or more independent clauses joined by and, but, or, so: \"The boy was tired, so he ran home.\" A complex sentence has one main clause and one or more subordinate clauses: \"Because he was tired, the boy ran home.\" Subordinate clauses are of three kinds: noun clause (I know that he is honest), adjective clause (The man who called is my uncle) and adverb clause (He left when it rained).", "long"),
        W(4, "Transform as directed: (i) Being ill, he stayed home. (to compound) (ii) On seeing the police, the thief ran away. (to complex). Explain the rules.", "(i) He was ill, so he stayed home. (ii) When he saw the police, the thief ran away. To change a simple sentence to a compound one, replace the phrase by a clause joined with and, but or so. To change it to a complex one, replace the phrase with a subordinate clause. The meaning must stay unchanged, and no information is added or dropped.", "long")
      ]
    },
    "grammar-active-passive-voice": {
      mcq: [],
      written: [
        W(5, "State the rule of changing active into passive and write the passive forms in different tenses with an example each.", "Active: subject + verb + object. Passive: object + be + V3 + by + subject, so \"Ram wrote a letter\" becomes \"A letter was written by Ram.\" The tense stays the same; only the form of be changes. Simple present: is/am/are + V3 (The door is opened). Simple past: was/were + V3. Simple future: will be + V3. Present continuous: is/am/are being + V3. Past continuous: was/were being + V3. Present perfect: has/have been + V3. Past perfect: had been + V3. Modals: modal + be + V3 (The work must be finished).", "long"),
        W(4, "Explain the special cases in passive voice: pronouns, imperatives, dropping the agent and intransitive verbs. Give examples.", "Pronouns change: I to me, he to him, we to us, they to them (and back). An imperative such as \"Close the door\" becomes \"Let the door be closed\" or \"You are requested to close the door.\" The agent (by…) is dropped when it is unknown or unimportant: \"My bike was stolen.\" Intransitive verbs such as sleep and go have no object, so they cannot normally be made passive.", "long")
      ]
    },
    "grammar-narration": {
      mcq: [],
      written: [
        W(5, "Write the rules of changing direct speech into indirect speech: tense, pronouns, and words of time and place, with examples.", "Remove the quotation marks and join the reporting verb and reported speech with that. Pronouns change according to sense: He said, \"I am tired\" becomes He said that he was tired. When the reporting verb is in the past the tense goes one step back: am/is to was, do to did, will to would, can to could, has/have to had. Time and place words change: now to then, today to that day, tomorrow to the next day, yesterday to the previous day, ago to before, this to that, these to those, here to there, come to go. A universal truth does not change tense: He said that the earth moves round the sun.", "long"),
        W(4, "How are questions, commands, requests, exclamations and wishes reported? Give an example for each.", "Questions use ask or enquire + if/whether (for yes/no questions) or the same wh-word, with statement word order and no question mark: He asked me if I was ready. Commands and requests use told, ordered, requested or advised + to-infinitive: The teacher told us to sit down. Exclamations use exclaimed with joy or sorrow that…: He exclaimed with joy that they had won. Wishes and greetings use wished or greeted: He wished her good morning.", "long")
      ]
    },
    "grammar-non-finites": {
      mcq: [],
      written: [
        W(5, "What are non-finites? Explain the infinitive and the gerund with examples.", "Non-finites are verb forms that do not show tense or person: the infinitive, the gerund and the participle. The infinitive is to + base verb (to read, to sing). It can act as a noun, adjective or adverb: \"To err is human.\" The bare infinitive (without to) follows modals and verbs like make, let, see and hear: \"She made him laugh.\" Purpose is shown with an infinitive: \"He went to the market to buy fruit.\" The gerund is the -ing form used as a noun: \"Swimming is good exercise.\" It follows prepositions (\"She is fond of dancing\") and verbs such as enjoy, avoid, mind, finish and practise (\"He enjoys reading\").", "long"),
        W(4, "Explain the present, past and perfect participles with examples. What is a dangling participle?", "The present participle (V-ing) shows an action in progress: \"Seeing the lion, he ran.\" The past participle (V3) shows a completed action or a passive sense: \"Tired of work, he slept.\" The perfect participle (having + V3) shows an earlier action: \"Having finished the work, he went home.\" A participle can be used as an adjective: a running horse, a broken window. A dangling participle is one that does not refer to the subject of the main clause; it must be avoided.", "long")
      ]
    },
    "grammar-tenses-concord-sequence": {
      mcq: [],
      written: [
        W(5, "Explain the correct use of simple present, present continuous, present perfect, simple past and past perfect with examples. Which tense should not be used with yesterday?", "Simple present is used for habits and facts (The sun rises in the east). Present continuous is for actions now (She is reading). Present perfect is for a past action linked to now (I have finished); it must not be used with a past time word like yesterday. Simple past is for finished actions (He went to Amritsar last year). Past perfect is for the earlier of two past actions (The train had left when we reached). Use since (point of time) and for (period) with perfect tenses.", "long"),
        W(4, "State the rules of subject-verb agreement (concord) and the sequence of tenses, with examples.", "A singular subject takes a singular verb and a plural subject a plural verb: \"The boy plays.\" \"The boys play.\" Two subjects joined by and take a plural verb; each, every, either and neither take a singular verb. With either…or and neither…nor, the verb agrees with the nearer subject. Collective nouns take a singular verb when seen as one unit, and news, mathematics and physics are singular. If the main verb is in the past, the subordinate verb is usually past too: \"He said that he was ill.\" A universal truth stays in the present: \"The teacher said that the earth moves round the sun.\" In conditionals: if + present gives will (If it rains, we will stay); if + past gives would (If I were rich, I would help).", "long")
      ]
    },
    "vocabulary-word-power": {
      mcq: [],
      written: [
        W(5, "How can you find the meaning of a strange word from context? Explain with the clues and the check you should make.", "Read the whole sentence, because the surrounding words often hint at the meaning of a strange word. Look for clues: a contrast word (but, however), an example, or a nearby synonym. Then check that your guess fits grammatically (noun, verb or adjective) before choosing. The position of the word in the sentence also shows its part of speech, as many words (water, play, walk, round) can be more than one part of speech.", "long"),
        W(4, "Differentiate between synonyms, antonyms and homonyms with examples. Explain the formation of words with prefixes and suffixes.", "Synonyms have similar meanings (big/large, brave/courageous). Antonyms have opposite meanings (brave/cowardly, ancient/modern). Homonyms sound alike or look alike but differ in meaning (night/knight, write/right, sea/see; bank and bat are spelt alike). Prefixes come before a root and change its meaning (unhappy, dishonest, impossible, rewrite, misuse). Suffixes come after a root and often change the part of speech (kind to kindness, act to active, beauty to beautiful).", "long")
      ]
    },
    "writing-letter-writing": {
      mcq: [
        M(1, "Which part can be left out of an informal letter?", "Receiver's address and subject line", ["Sender's address, the date and the greeting", "Salutation such as Dear Ravi", "Name of the sender at the end"], "No receiver's address or subject line is needed in an informal letter."),
        M(1, "Which subscription is used in a formal letter to a person whose name you do not know?", "Yours faithfully", ["Yours lovingly", "Your friend", "With love"], "Close formal letters with Yours faithfully when you do not know the name."),
        M(2, "A letter to the Principal asking for leave is a", "formal letter", ["informal letter", "diary entry", "telephone message"], "A leave application to the Principal is a formal letter."),
        M(2, "What should the first paragraph of a formal letter do?", "State the purpose of the letter", ["Ask about the receiver's health", "Tell a long story", "Give the closing greeting"], "State the purpose in the first paragraph of a formal letter."),
        M(2, "Which opening suits an informal letter?", "Asking about the receiver's health and news", ["Stating a complaint at once", "Quoting the subject line and the date first", "Giving the receiver's designation"], "Begin an informal letter by asking about the receiver's health and news."),
        M(2, "Which salutation is used in a formal letter?", "Sir/Madam", ["Dear Ravi", "My darling friend", "Hello pal"], "The formal salutation is Sir/Madam."),
        M(3, "Which closing goes with a formal letter addressed to a named person?", "Yours sincerely", ["Yours lovingly", "Your friend", "Yours truly friend"], "Yours sincerely is used when you know the name.")
      ],
      written: []
    },
    "writing-notice-and-message": {
      mcq: [
        M(1, "Which of these is a topic for a notice?", "A blood donation camp", ["A phone call for a sister", "A change of plan for parents", "A book for a friend"], "Notices: a sports day, a lost-and-found item, a cleanliness drive, a blood donation camp.", "common-topics"),
        M(1, "Which of these is a topic for a message?", "Telling a sister about a phone call", ["A cleanliness drive", "A sports day", "A lost-and-found item"], "Messages: telling a sister about a phone call, informing parents about a change of plan, a request to a friend to bring a book.", "common-topics"),
        M(2, "About how many words should a notice have?", "About 50", ["About 5", "About 500", "About 1000"], "Keep a notice short (about 50 words)."),
        M(2, "What does the heading of a notice contain?", "The name of the institution", ["The name and address of the receiver", "A long salutation", "The subscription"], "Format: the name of the institution (heading), the word NOTICE, date, a short title, the body, then the name and designation."),
        M(2, "A message is written for a person who is", "not available", ["standing nearby", "asleep next door", "the writer's teacher only"], "A message is written for a person who is not available."),
        M(2, "Which style suits a message?", "Short sentences or note form", ["Long greetings and polite chatting", "Poetic language", "A story with a moral"], "Use short sentences or note form; do not write long greetings."),
        M(3, "Which detail is always given in a notice of an event?", "Date, time and place", ["The writer's hobbies", "A poem about it", "The writer's marks"], "Always give the date, time and place of an event, and a contact person if needed.")
      ],
      written: [
        W(4, "Give three examples each of the topics for notices and for messages.", "Notices: a sports day, a lost-and-found item, a cleanliness drive, a blood donation camp. Messages: telling a sister about a phone call, informing parents about a change of plan, a request to a friend to bring a book.", "long", "common-topics")
      ]
    },
    "writing-paragraph-and-story": {
      mcq: [
        M(1, "Which of these is part of a paragraph?", "A topic sentence", ["A salutation", "A subject line", "A subscription and a signature"], "A paragraph has a topic sentence, supporting sentences and a concluding sentence."),
        M(2, "Which linking word can be used in a paragraph?", "finally", ["whereas", "hence forth", "notwithstanding"], "Use simple linking words like first, then, also, finally."),
        M(1, "Which is the correct sequence of a story?", "Beginning, middle, end", ["End, beginning, middle", "Middle, end, beginning", "Beginning, end, middle"], "Parts: beginning (characters and setting), middle (the problem) and end (solution and moral)."),
        M(2, "Which tense is used in a story?", "Past tense", ["Future tense", "Present perfect", "Imperative"], "Use the past tense in story writing."),
        M(2, "What should be included to make a story lively?", "A few lines of dialogue", ["A list of rules", "A table of numbers and a graph", "The writer's address"], "Include a few lines of dialogue to make it lively."),
        M(2, "What should you do at the end after writing?", "Check spelling, punctuation, capitals and tense", ["Tear the page", "Add a second title in the margin", "Draw a border only"], "Check spelling, punctuation, capital letters and tense at the end.", "planning-and-checking"),
        M(2, "How long should you spend on planning?", "A minute, noting main points", ["An hour with friends and family", "No time at all", "Half the exam"], "Spend a minute planning: note main points before writing.", "planning-and-checking"),
        M(2, "When describing a place, which order of ideas is suggested?", "Where, features, why it is special", ["Why, when, how much", "Why, when, how much and for whom", "Name, age, marks"], "For a place: where, features, why it is special."),
        M(2, "Which of these should a story follow?", "The outline or hints in the question", ["Only your own idea", "The previous year's paper", "A news report from the daily paper"], "Follow the outline or hints given in the question and keep to the word limit.")
      ],
      written: [
        W(4, "What should you do before writing and after finishing a paragraph or story?", "Spend a minute planning and note the main points before writing. After finishing, check spelling, punctuation, capital letters and tense.", "long", "planning-and-checking")
      ]
    },
    "writing-translation": {
      mcq: [
        M(1, "In what order is an English sentence built?", "Subject + Verb + Object", ["Object + Verb + Subject", "Verb + Object + Subject", "Subject + Object + Verb"], "Build the English sentence in the order Subject + Verb + Object."),
        M(2, "Where does the verb come in a Hindi or Punjabi sentence?", "At the end", ["At the start", "After the first word", "Before the subject"], "In Punjabi and Hindi the verb comes at the end; in English it follows the subject."),
        M(2, "How should a sentence be translated?", "By meaning, not word by word", ["Word by word always", "By skipping the verb and the object", "By guessing the tense"], "Translate the meaning, not word by word; use a natural English phrase."),
        M(2, "What is the English of \"Main kitab padh raha hoon\"?", "I am reading a book.", ["I read a book yesterday.", "I will read a book.", "I have read a book."], "It is a continuous tense: I am reading a book."),
        M(2, "What is the English of \"Usne phal khaya\"?", "He ate fruit.", ["He eats fruit daily.", "He is eating fruit.", "He will eat fruit."], "It is the simple past: He ate fruit."),
        M(2, "What is the English of \"Hum kal Amritsar jayenge\"?", "We shall go to Amritsar tomorrow.", ["We went to Amritsar by train yesterday.", "We are going to Amritsar now.", "We go to Amritsar every day."], "It is the simple future: We shall go to Amritsar tomorrow."),
        M(3, "Which word must always be capitalised in a translated sentence?", "The pronoun I", ["The word the", "The verb", "The last word"], "The first word of the sentence and I are always capitalised.")
      ],
      written: []
    }
  });
})();
