// Class 10 English (PSEB) practice bank, part 5: extra questions for chapters with gaps. Extra practice (unreviewed draft).
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
  StudyData.addPractice(10, "englishpb", {
    "razia-the-tigress": {
      mcq: [
        M(2, "How is the poem “Razia, the Tigress” written?", "In simple, conversational language", ["In ornate language full of old words", "In a formal tone of a legal report", "In a rhyming tongue-twister style"], "The style is simple and conversational, with vivid pictures of hunting.", "style"),
        M(2, "Giving the tigress feelings such as grief, fear and a mother's worry is an example of:", "Personification", ["Onomatopoeia", "Exaggeration", "Contrast"], "The poem gives the animal human feelings, which is personification.", "style")
      ],
      written: [
        W(3, "Comment on the style of the poem “Razia, the Tigress”.", "The poem is written in simple conversational language, so that its meaning is easy to follow. It paints vivid pictures of hunting, such as Sheru's belly-crawl and the claw like a club. It gives the tigress human feelings such as grief, fear and a mother's worry, a form of personification, which makes the reader feel for her. The ending is quiet and worrying, with the poacher shown as the real threat.", "short", "style")
      ]
    },
    "grammar-determiners-prepositions-modals-connectors": {
      mcq: [],
      written: [
        W(5, "Explain the use of articles a, an and the, and of some and any, with two examples for each.", "A is used before a consonant sound and an before a vowel sound, and what matters is the sound, not the spelling: a university, a one-rupee note, an hour, an umbrella. The is used for something specific or unique: the sun, the Ganga. Some is used in positive sentences and any in negatives and questions: \"I have some tea.\" \"I don't have any tea.\" Few, a few, and the few go with countable nouns and little, a little, and the little with uncountable nouns; few and little are negative (almost none) while a few and a little are positive (some).", "long"),
        W(4, "Fill in the correct preposition and give the reason: (i) The train leaves ___ 5 o'clock. (ii) The meeting is ___ Monday. (iii) Divide the sweets ___ the two sisters. (iv) She is fond ___ music.", "(i) at, because at is used for a point of time. (ii) on, because on is used for a day or date. (iii) between, because between is used for two persons and among for more than two. (iv) of, because fond of is a fixed combination.", "long")
      ]
    },
    "grammar-non-finites": {
      mcq: [],
      written: [
        W(5, "What is the difference between a finite and a non-finite verb? Describe the infinitive, the gerund and the participle with one example each.", "A finite verb has a subject and shows tense and number: \"She sings well.\" A non-finite verb does not change with the subject or show tense and can act as a noun, adjective or adverb. The infinitive is to + base verb (to read); it can be a subject (To err is human), an object (I want to learn) or show purpose (He went to buy bread); after modals and after let, make, see, hear and help the bare infinitive is used. The gerund is verb + -ing used as a noun: \"Swimming is good exercise\"; it is used after prepositions (fond of singing). The participle may be present (V-ing), past (V3) or perfect (having + V3): \"Having finished his work, he went home.\"", "long"),
        W(4, "Correct the sentences and give reasons: (i) He can to swim. (ii) She enjoys to dance. (iii) Walking down the road, a dog bit him. (iv) She is fond of to sing.", "(i) He can swim. After a modal the bare infinitive, without to, is used. (ii) She enjoys dancing. Enjoy is followed by a gerund. (iii) Walking down the road, he was bitten by a dog. A participle phrase must refer to the correct subject, otherwise it is a dangling participle. (iv) She is fond of singing. After a preposition a gerund is used, not an infinitive.", "long")
      ]
    },
    "grammar-simple-complex-compound-sentences": {
      mcq: [],
      written: [
        W(5, "Define simple, compound and complex sentences with one example each. Name the three kinds of subordinate clause.", "A simple sentence has one subject-predicate unit and one finite verb: \"The boy ran to school.\" A compound sentence has two or more independent clauses joined by and, but, or, so, yet or for: \"He was tired, but he kept working.\" A complex sentence has one main clause and at least one subordinate clause, which cannot stand alone and begins with words such as because, although, if, when, who, which or that: \"Although he was tired, he kept working.\" The three kinds of subordinate clause are the noun clause (I know that he is honest), the adjective clause (The man who helped me is a doctor), and the adverb clause (We stayed home because it rained).", "long"),
        W(4, "Transform as directed: (i) Seeing the police, the thief ran away. (complex) (ii) Although he is poor, he is honest. (compound) (iii) He was ill and could not come. (simple)", "(i) When the thief saw the police, he ran away. A phrase is replaced by a clause. (ii) He is poor but he is honest. The subordinator although is replaced by the coordinator but. (iii) Being ill, he could not come. One clause is reduced to a phrase. In every case the meaning must remain unchanged.", "long")
      ]
    },
    "grammar-voice-and-reported-speech": {
      mcq: [
        M(2, "Which is the correct passive of “You must obey the rules”?", "The rules must be obeyed.", ["The rules must obey.", "The rules must been obeyed.", "The rules are must obeyed."], "A modal sentence becomes modal + be + V3.", "special-cases-of-voice"),
        M(2, "Which is the correct passive of “Open the door”?", "Let the door be opened.", ["The door opened by you.", "Let the door opened.", "The door is open by us."], "Imperatives use Let + object + be + V3.", "special-cases-of-voice")
      ],
      written: [
        W(5, "How are the following changed into direct to indirect speech: a statement, a yes/no question, a wh-question and a command? Mention the changes in tense and in words of time and place.", "Remove the quotation marks and use a conjunction, that for statements. The tense shifts back when the reporting verb is in the past: am/is → was, will → would, simple past → past perfect, present perfect → past perfect. Words change: now → then, here → there, today → that day, tomorrow → the next day, yesterday → the previous day, this → that. A yes/no question uses asked + if/whether with normal word order and no question mark: \"Are you ready?\" → He asked if I was ready. A wh-question keeps the wh-word: She asked where I lived. A command uses ordered/told/requested + to + verb: The teacher told me to sit down. Universal truths keep their tense.", "long"),
        W(4, "Explain the special cases of voice: the passive of modals, questions and imperatives, and when the agent is dropped.", "A modal sentence becomes modal + be + V3: \"You must obey the rules\" → \"The rules must be obeyed.\" A question such as \"Who wrote this poem?\" becomes \"By whom was this poem written?\" An imperative uses Let + object + be + V3: \"Open the door\" → \"Let the door be opened.\" The agent (by + doer) is dropped when it is unknown or unimportant.", "long", "special-cases-of-voice")
      ]
    },
    "grammar-tenses-and-punctuation": {
      mcq: [],
      written: [
        W(5, "Explain the present perfect and the past perfect with examples, and explain the use of since and for. Why is “He has gone to Delhi last week” wrong?", "The present perfect shows a past action with present relevance: \"I have finished my work.\" The past perfect shows the earlier of two past actions: \"When I reached, the train had left.\" Since is used with a point of time (since Monday) and for with a period (for two hours). \"He has gone to Delhi last week\" is wrong because last week is a finished time; with a finished time the simple past is used: \"He went to Delhi last week.\"", "long"),
        W(4, "Punctuate the sentence and name the marks used: i bought apples oranges and bananas ravis book is on the table dont touch it", "I bought apples, oranges and bananas. Ravi's book is on the table. Don't touch it. Capital letters begin sentences, names and the pronoun I. Commas separate the items in a list. The full stop ends each statement. The apostrophe shows possession in Ravi's and a contraction in Don't.", "long")
      ]
    },
    "vocabulary-confused-words-idioms-proverbs": {
      mcq: [],
      written: [
        W(5, "Explain the difference between these pairs with a sentence for each word: (i) affect / effect (ii) principal / principle (iii) stationary / stationery (iv) lose / loose.", "(i) Affect means to influence: \"Pollution affects our health.\" Effect is the result: \"Smoking has a bad effect.\" (ii) Principal means head or main: \"The principal praised the team.\" Principle means a rule: \"Honesty is a principle I follow.\" (iii) Stationary means not moving: \"The car was stationary.\" Stationery means writing material: \"She bought stationery for school.\" (iv) Lose means to misplace: \"Do not lose your key.\" Loose means not tight: \"This shirt is too loose.\"", "long"),
        W(4, "Explain the meaning of these idioms and proverbs and use two of them in sentences: a piece of cake, once in a blue moon, a blessing in disguise, a stitch in time saves nine.", "A piece of cake means something very easy: \"The test was a piece of cake.\" Once in a blue moon means very rarely. A blessing in disguise is a seeming misfortune that brings good: \"Missing the bus was a blessing in disguise, as I met an old friend.\" A stitch in time saves nine means a small repair at once prevents bigger trouble later.", "long")
      ]
    },
    "writing-notices-messages-advertisements-paragraphs-letters": {
      mcq: [
        M(1, "What is the usual word limit for a notice or a message?", "About 50 words", ["About 5 words", "About 250 words", "About 500 words"], "A notice and a message are brief, usually about 50 words.", ""),
        M(1, "In which person is a notice written?", "The third person", ["The first person", "The second person", "Any person at all"], "A notice is brief, impersonal and in the third person.", ""),
        M(2, "Which closing is used in a business letter?", "Yours faithfully", ["Yours lovingly", "Yours affectionately", "Your loving friend"], "A business letter ends with Yours faithfully; lovingly belongs to personal letters.", ""),
        M(2, "A classified advertisement should be:", "Short, boxed and economical in words", ["Long, and full of story-like detail", "Written as a friendly personal letter", "Written without any contact details"], "Classifieds are short and in a box, ending with contact details.", ""),
        M(2, "Which belongs in note-making?", "Headings, numbering and abbreviations", ["Long, flowing sentences only", "No title or headings at all", "Every word copied from the text"], "Notes use a title, headings, numbering or bullets, and abbreviations like govt.", ""),
        M(3, "Which closing suits an official letter that begins “Dear Mr Sharma”?", "Yours sincerely", ["Yours lovingly", "Yours affectionately", "Yours lovingly always"], "Yours sincerely is used when the person is named; faithfully when not.", "")
      ],
      written: []
    }
  });
})();
