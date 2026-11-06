// Class 9 English practice bank, part 5: extra questions for chapters with gaps. Extra practice (unreviewed draft).
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
  StudyData.addPractice(9, "english", {
    "tenses": {
      mcq: [],
      written: [
        W(5, "Explain the four present tenses with one example of each. Why is \"I have seen him yesterday\" wrong?", "Simple present is used for habits, routines and universal truths: \"She walks to school.\" Present continuous is used for an action happening now: \"Look, it is raining.\" Present perfect is used for a past action whose result matters now, often with just, already, yet, ever or never: \"I have lost my key.\" Present perfect continuous is used for an action that began in the past and is still going on, with since or for: \"They have been practising since morning.\" \"I have seen him yesterday\" is wrong because yesterday names a finished past time, and a stated past time takes the simple past: \"I saw him yesterday.\"", "long"),
        W(4, "Correct these sentences and give the rule for each: (i) I am knowing the answer. (ii) He did not went. (iii) She has came. (iv) I will call you when I will reach home.", "(i) I know the answer. Stative verbs such as know, believe, like, want and own are rarely used in the continuous. (ii) He did not go. After do/does/did we always use V1. (iii) She has come. After has/have/had we always use V3. (iv) I will call you when I reach home. After when, before, after, until, as soon as and if we use the simple present for a future idea.", "long")
      ]
    },
    "modals": {
      mcq: [],
      written: [
        W(5, "What are modals? State two rules about their form, with examples, and show how can, could and may differ in meaning.", "Modals are helping verbs such as can, could, may, might, will, would, shall, should, must and ought to. Rule 1: a modal is always followed by the base form (V1) of the verb: \"She can swim\", not \"She can swims\". Rule 2: modals never take -s, -ing or -ed, so \"He must go\", not \"He musts go\"; negatives and questions are made without do/does: \"You should not worry.\" \"Can you hear me?\" Can shows present ability (\"Riya can speak three languages\") and informal permission. Could shows past ability (\"I could swim when I was five\") and makes a request polite. May is used for formal permission (\"May I come in, ma'am?\"), possibility and wishes.", "long"),
        W(4, "Use the right modal to express (i) a strong rule, (ii) prohibition, (iii) no necessity, (iv) advice. Give one sentence for each.", "(i) Strong necessity or rule: must, as in \"Students must carry their identity cards.\" (ii) Prohibition: must not, as in \"You must not use phones in the exam hall.\" (iii) No necessity: need not, as in \"You need not bring lunch; it will be provided.\" (iv) Advice or moral duty: should or ought to, as in \"You should eat more fruit\" or \"We ought to help the needy.\"", "long")
      ]
    },
    "subject-verb-agreement": {
      mcq: [
        M(1, "Which sentence follows the basic rule of agreement?", "The girls sing.", ["The girls sings.", "The girl sing.", "The girls is singing."], "A plural subject takes a plural verb: 'The girls sing.'", "the-basic-rule"),
        M(2, "Choose the correct sentence.", "The box of chocolates is on the table.", ["The box of chocolates are on the table.", "The box of chocolates were on the table.", "The box of chocolates am on the table."], "Find the real subject (box) and ignore the words in between.", "the-basic-rule")
      ],
      written: [
        W(5, "State the rules for subject–verb agreement for (i) subjects joined by and, (ii) either…or / neither…nor, (iii) as well as / along with, (iv) collective nouns. Give an example for each.", "(i) Subjects joined by and usually take a plural verb: \"Ravi and Sita are classmates.\" (ii) With either…or, neither…nor and not only…but also, the verb agrees with the nearer subject: \"Either the teacher or the students are to blame.\" (iii) With as well as, along with, together with and with, the verb agrees with the first subject: \"The captain, along with his players, has arrived.\" (iv) A collective noun acting as one unit takes a singular verb: \"The team has won the match\"; if the members act separately, a plural verb may be used: \"The jury are divided in their opinions.\"", "long"),
        W(3, "Write the basic rule of subject–verb agreement and give two examples, one with \"I\" or \"you\" and one where words come between the subject and the verb.", "A singular subject takes a singular verb (is, was, has, V1 + s): \"The girl sings.\" A plural subject takes a plural verb (are, were, have, V1): \"The girls sing.\" I and you take the base form: \"I play\", \"You play\", never \"I plays\". Find the real subject and ignore the words in between: \"The box of chocolates is on the table.\"", "short", "the-basic-rule"),
        W(4, "Explain the difference between \"a number of\" and \"the number of\" and name three kinds of words that take a singular verb. Give examples.", "\"A number of\" + plural noun takes a plural verb: \"A number of students are absent.\" \"The number of\" + plural noun takes a singular verb: \"The number of students is fifty.\" Words that take a singular verb: each, every, either, neither, everyone, nobody (\"Each of the boys has a bat\"); nouns that look plural but are singular, such as news and mathematics (\"The news is good\"); and amounts of money, time or distance taken as one unit (\"Fifty rupees is too much for this pen\").", "long")
      ]
    },
    "reported-speech": {
      mcq: [],
      written: [
        W(5, "List the tense changes in reported speech when the reporting verb is in the past, with an example. When is there no change of tense?", "is/am/are become was/were; V1 becomes V2 (\"I like tea\" becomes He said that he liked tea); is/are + V-ing becomes was/were + V-ing; has/have + V3 becomes had + V3; V2 becomes had + V3 (\"I lost my bag\" becomes She said that she had lost her bag); will becomes would, can becomes could, may becomes might and shall becomes should. There is no change if the reporting verb is in the present or future (He says that he is busy), or if the words state a universal truth.", "long"),
        W(4, "Change into indirect speech: (i) She said, \"Are you ready?\" to me (ii) He said, \"Where do you live?\" to me (iii) The teacher said to us, \"Sit down.\" (iv) She said to the children, \"Don't run.\"", "(i) She asked me if I was ready. (ii) He asked me where I lived. (iii) The teacher told us to sit down. (iv) She told the children not to run. Yes/No questions use if or whether with statement order; wh-questions keep the wh-word with statement order; commands use told + to + V1 and negative commands use not to + V1.", "long")
      ]
    },
    "determiners": {
      mcq: [],
      written: [
        W(5, "Name the main types of determiners with two examples of each, and state the rules for using a, an and the.", "Articles (a, an, the), demonstratives (this, that, these, those), possessives (my, your, his, her, its, our, their), quantifiers (some, any, much, many, few, little, each, every) and numbers. A is used before a consonant sound (a book, a university, a one-rupee coin) and an before a vowel sound (an apple, an hour, an honest man, an MLA). The is used for something specific or already mentioned and for unique things (the sun, the sky), and before rivers, seas, oceans, mountain ranges and superlatives (the Ganga, the Arabian Sea, the Himalayas, the tallest boy).", "long"),
        W(4, "Explain the difference between (i) few and a few, (ii) much and many, (iii) each and every, with an example for each pair.", "(i) A few / a little means some, a small but useful amount: \"I have a few friends here, so I'm happy.\" Few / little means hardly any: \"There is little hope of rain.\" (ii) Many goes with countable plural nouns (many books); much goes with uncountable nouns (much water). (iii) Each is for two or more things taken one by one: \"Each of the two sisters got a gift.\" Every is for three or more seen as a group; both are followed by a singular noun and verb: \"Every student has a locker.\"", "long")
      ]
    },
    "active-passive-voice": {
      mcq: [],
      written: [
        W(5, "Explain the four steps for changing active voice to passive voice. Change \"Riya wrote a letter\" and \"They are repairing the road\" into the passive.", "Step 1: make the object of the active sentence the new subject. Step 2: use the correct form of be for the tense and the new subject. Step 3: change the main verb to V3 (past participle). Step 4: put the old subject after by, or drop it if it is unknown or unimportant; change pronouns after by (I to me, he to him, they to them). \"Riya wrote a letter\" becomes \"A letter was written by Riya.\" \"They are repairing the road\" becomes \"The road is being repaired.\"", "long"),
        W(4, "Write the passive form of the verb in each tense: simple present, present continuous, present perfect, future and modals, with an example for each. When is the passive used?", "Simple present: is/am/are + V3 (\"Milk is sold here\"). Present continuous: is/am/are + being + V3 (\"The road is being repaired\"). Present perfect: has/have + been + V3 (\"The work has been done\"). Future: will + be + V3 (\"The results will be declared tomorrow\"). Modals: modal + be + V3 (\"Rules must be followed\"). The passive is used when the doer is unknown (\"My bicycle has been stolen\"), when the action matters more than the doer, and in notices, reports and science.", "long")
      ]
    },
    "descriptive-paragraph": {
      mcq: [
        M(1, "About how many words should a descriptive paragraph have?", "100 to 120", ["20 to 30", "300 to 350", "500 to 600"], "The word limit is about 100–120 words."),
        M(1, "A descriptive paragraph should be written as", "one well-organised paragraph", ["a list of points in short notes", "three separate letters", "a set of questions"], "Write one well-organised paragraph, not a list of points."),
        M(2, "Which of these is the correct order of a descriptive paragraph?", "Title, introduction, body, conclusion", ["Conclusion, title, body, introduction", "Body, title, conclusion, introduction", "Introduction, conclusion, title, body"], "Title, then introduction, body with details in clear order, then conclusion with an overall impression."),
        M(2, "Which tense is used for describing a person as they are now?", "Present tense", ["Past perfect tense", "Future perfect tense", "Past continuous tense"], "Use the present tense for a person or place as they are now."),
        M(2, "Which tense is used for an event that has already happened?", "Past tense", ["Present tense", "Future tense", "Imperative"], "Use the past tense for an event that has already happened."),
        M(3, "Which of these is a sensory detail?", "the sharp smell of frying pakoras", ["a very, very big and nice place", "a good, good, good place", "it was nice and good"], "Do use sensory details and precise adjectives."),
        M(2, "What should the body of the paragraph follow?", "A clear order, such as near to far", ["A random order", "Only the writer's opinion", "The order of the alphabet, A to Z"], "The body gives the main details in a clear order: near to far, top to bottom, or the order in which things happened.")
      ],
      written: [
        W(4, "How would you plan and write a descriptive paragraph? Mention structure, tense and two do's and don'ts.", "Give a short title, then an introduction of one or two lines saying what or whom you are describing, then a body with the main details in a clear order (near to far, top to bottom, or in the order things happened), then a conclusion of one or two lines with your overall impression. Use the present tense for a person or place and the past tense for an event. Do use sensory details and a simile; don't stack many adjectives, repeat the same word, drift into a story or copy the cue word for word.", "long")
      ]
    },
    "diary-entry": {
      mcq: [
        M(1, "A diary entry is normally written using which person?", "First person", ["Third person", "Second person", "Passive voice"], "A diary entry is written in the first person (I, me, my) in an informal tone."),
        M(1, "What is written at the top of a diary entry?", "Day and date", ["Sender's address", "Subject line", "Receiver's name"], "Day and date at the top, e.g. Monday, 14 July 20XX.", "format"),
        M(2, "Which of these is optional in a diary entry?", "The salutation \"Dear Diary\"", ["The date", "The body", "The name at the end of the page"], "The time and 'Dear Diary' are optional.", "format"),
        M(2, "Which name is written at the end of the entry?", "The name given in the question", ["Any name you like, even a made-up one", "The teacher's name", "No name at all"], "Name at the end: use the name given in the question.", "format"),
        M(2, "How should a diary entry begin according to the content plan?", "With the main feeling or event of the day", ["With a formal request to the teacher", "With a list of rules", "With the closing line"], "Begin with the main feeling or event, such as 'What a day it has been!'", "content-plan"),
        M(2, "How should a diary entry end?", "With a reflection, lesson or resolution", ["With 'Yours sincerely' and a signature", "With the receiver's address", "With a formal thanks"], "End with a reflection, lesson or resolution: 'I have decided to…'", "content-plan"),
        M(3, "Which tense is used for the present feelings in a diary entry?", "Present tense", ["Past perfect", "Future continuous", "Past tense only"], "Use the past tense for events and the present tense for present feelings.", "language-and-marking-points"),
        M(2, "On which three things are marks given for a diary entry?", "Format, content and expression", ["Length, colour and speed of writing", "Address, subject and closing", "Title, price and author"], "Marks are given for format, content and expression.", "language-and-marking-points"),
        M(2, "Which of these should NOT appear in a diary entry?", "'Yours sincerely'", ["The date", "Your honest feelings", "A reflection"], "A diary is not a letter, so do not write an address, subject line or 'Yours sincerely'.", "do-s-and-don-ts"),
        M(2, "Which style suits a diary entry?", "Personal and sincere", ["Formal and distant", "Slang and SMS language", "Plain narration like a story"], "Do keep it personal and sincere; do not make it too formal or use slang.", "do-s-and-don-ts")
      ],
      written: [
        W(4, "Describe the format of a diary entry.", "Write the day and date at the top, for example Monday, 14 July 20XX. The time is optional and so is the salutation 'Dear Diary'. Then write the body (the experience, your feelings and your reflection) in one to three short paragraphs. At the end, write the name given in the question.", "long", "format"),
        W(4, "How should the content of a diary entry be planned?", "Begin with the main feeling or event of the day, such as 'What a day it has been!' Describe briefly what happened, in order. Express your emotions honestly, such as joy, fear, regret or pride. End with a reflection, a lesson or a resolution, such as 'I have decided to…'.", "long", "content-plan"),
        W(4, "What language is used in a diary entry and on what are marks given?", "Use the past tense for the events and the present tense for present feelings, for example 'We visited… I still feel…'. Exclamations and questions to yourself are allowed, such as 'How could I forget!' Marks are given for format (day, date, name), content (event, feelings and reflection) and expression (grammar, spelling, flow).", "long", "language-and-marking-points"),
        W(4, "List four do's and don'ts for writing a diary entry.", "Do keep it personal and sincere. Do include your feelings and reflection. Don't write an address, subject line or 'Yours sincerely' because a diary is not a letter. Don't narrate like a story, and don't make it too formal or use slang or SMS language.", "long", "do-s-and-don-ts")
      ]
    },
    "story-writing": {
      mcq: [
        M(1, "If an opening line is given in a story task, you should", "use it exactly as the first line", ["change it to suit your own idea", "write it at the end", "leave it out"], "If an opening line is given, use it exactly as your first line."),
        M(2, "How many main characters should the story have?", "Two or three", ["Ten or more, one for each scene", "Exactly one", "None at all"], "Keep to two or three main characters and one main event."),
        M(1, "In a story, what does the climax mean?", "The most exciting moment", ["The title of the story and its author", "The first sentence", "The moral line"], "The middle builds up to a climax, the most exciting moment."),
        M(2, "In which tense is a story written?", "Past tense", ["Future tense", "Present perfect", "Imperative"], "Write in the past tense and keep it consistent."),
        M(2, "Which sentence follows 'show, don't tell'?", "Her hands trembled as she opened the envelope.", ["She was nervous.", "She was very, very scared and nervous.", "The girl felt bad."], "Show feelings through action rather than naming them."),
        M(2, "Which of these is a linking word for a story?", "Suddenly", ["Therefore", "Moreover", "Whereas"], "Use linking words for flow: suddenly, meanwhile, after a while, at last."),
        M(3, "Which ending is NOT recommended?", "'And then I woke up'", ["The problem is solved", "A lesson fits naturally", "A clear conclusion"], "Don't end abruptly with 'and then I woke up'; it disappoints the reader."),
        M(2, "What should the title of the story do?", "Hint at the story without giving away the ending", ["Tell the whole ending in advance", "Repeat the first line", "Be as long as possible"], "The title should be short and catchy, hinting at the story without giving away the ending."),
        M(2, "Marks for content in a story are given for", "an original, logical plot developing the cue", ["a very long story", "the neatness of the margin", "the number of characters"], "Content: an original, logical plot that develops the given cue, with a satisfying ending.", "marking-points"),
        M(2, "Marks for organisation are given for", "a clear beginning, middle and end", ["a title in capital letters and bold", "the use of difficult words", "quotation marks in every line"], "Organisation: a clear beginning, middle and end, and smooth paragraphs.", "marking-points")
      ],
      written: [
        W(4, "On what three marking points is a story judged? Explain each.", "Content: an original, logical plot that develops the given cue, with a satisfying ending. Expression: correct grammar, spelling, vocabulary and a variety of sentences. Organisation: a clear beginning, middle and end, and smooth paragraphs.", "long", "marking-points")
      ]
    },
    "canvas-of-soil": {
      mcq: [
        M(1, "According to the message, nature is", "the greatest artist", ["a poor painter without any skill", "a silent teacher", "a distant stranger"], "Gardening is an art and nature is the greatest artist.", "message"),
        M(2, "Who is compared to a painter in the lesson?", "The gardener", ["The farmer's cow", "The village potter", "The rain cloud"], "The gardener is a painter.", "message")
      ],
      written: [
        W(3, "What message does \"Canvas of Soil\" give?", "Gardening is an art and nature is the greatest artist. Art is part of our daily lives, customs, crafts and gardens, and the gardener is a painter.", "short", "message")
      ]
    },
    "a-friend-found-in-music": {
      mcq: [
        M(1, "Music is compared to", "a loyal friend", ["a strict teacher", "a long journey", "a heavy load"], "Music offers comfort, joy and emotional support, like a loyal friend.", "message"),
        M(2, "What does music work as, according to the message?", "A personal and cultural language", ["A silent subject in the syllabus", "A school rule", "A weather report"], "It works as personal and cultural language that nurtures identity and emotion.", "message")
      ],
      written: [
        W(3, "What is the message of \"A Friend Found in Music\"?", "Music offers comfort, joy and emotional support, like a loyal friend. It works as a personal and cultural language that nurtures identity and emotion.", "short", "message")
      ]
    },
    "follow-that-dream": {
      mcq: [
        M(1, "Dreams need passion, conviction, hard work and", "sacrifice", ["luck", "silence", "hurry"], "Dreams need passion, conviction, hard work and sacrifice.", "message"),
        M(2, "What does the message say about dreams changing?", "It is acceptable for them to evolve", ["It is shameful to ever change them", "They never change at all", "Only teachers may change them"], "Support from family matters, and it is acceptable for dreams to evolve.", "message")
      ],
      written: [
        W(3, "What does \"Follow That Dream\" tell us about achieving dreams?", "Dreams need passion, conviction, hard work and sacrifice. Support from family and others matters, and it is acceptable for dreams to evolve.", "short", "message")
      ]
    }
  });
})();
