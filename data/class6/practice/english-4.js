// Class 6 English practice bank, part 4: extra questions for chapters with gaps. Extra practice (unreviewed draft).
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
  StudyData.addPractice(6, "english", {
    "the-winner": {
      mcq: [
        M(1, "Which game is linked to the sound 'Hu-tu-tu' in the riddles of the unit?", "Kabaddi", ["Football", "Swimming", "Kho-kho"], "Kabaddi is the answer to the riddle about 'Hu-tu-tu'.", "other-activities-in-the-unit"),
        M(2, "What does the unit say about indigenous games such as kho-kho?", "They are native to a region of India", ["They came to India only recently", "They are played only in cities abroad", "They have no rules at all"], "Indigenous games such as kho-kho are native to a region of India.", "other-activities-in-the-unit")
      ],
      written: [
        W(2, "Name the four answers to the sports riddles in the unit and give one example of an indigenous game.", "The four riddle answers are football, kabaddi, swimming and yoga or exercise. Kho-kho is an indigenous game, native to a region of India.", "short", "other-activities-in-the-unit")
      ]
    },
    "nouns": {
      mcq: [
        M(1, "Which word is a noun naming a place?", "river", ["parrot", "honesty", "teacher"], "River names a place; parrot is an animal, honesty an idea and teacher a person.", "what-is-a-noun"),
        M(2, "Which of these is a noun that names a feeling or idea?", "freedom", ["quickly", "danced", "bright"], "Happiness, honesty and freedom are nouns for ideas and feelings.", "what-is-a-noun")
      ],
      written: [
        W(3, "What is a noun? Give one example each for person, place, animal, thing and idea. Use a noun as the subject in a sentence.", "A noun is a word that names a person, place, animal, thing or idea. Person: Meera. Place: Jaipur. Animal: tiger. Thing: mango. Idea: honesty. A noun can be the subject of a sentence: \"The peacock danced in the rain.\"", "short", "what-is-a-noun")
      ]
    },
    "paragraph-writing": {
      mcq: [
        M(1, "How is the first line of a paragraph usually set?", "A little inwards (indented)", ["Right at the edge with no gap", "In capital letters", "Underlined twice"], "A paragraph begins on a new line, and the first line is usually indented."),
        M(2, "Which sentence is the best topic sentence for a paragraph on the cow?", "The cow is a very useful animal.", ["Milk is white and cold.", "I went to the market yesterday.", "Cows eat a lot of grass in the fields near the river."], "A topic sentence introduces the main idea, as in 'The cow is a very useful animal.'"),
        M(1, "How many supporting sentences does a paragraph usually have?", "Three to five", ["Exactly one", "Twenty or more", "None"], "Supporting sentences give details, facts or examples, usually three to five."),
        M(2, "What is the job of the concluding sentence?", "To sum up the idea or give a final thought", ["To introduce the main idea", "To list unrelated facts", "To ask a question about the title"], "The last sentence sums up the paragraph or gives a final thought."),
        M(2, "Which of these is a linking word?", "finally", ["paragraph", "mango", "indent"], "First, then, also, because, so, but and finally are linking words."),
        M(3, "A paragraph on 'My School' has a sentence about your cousin's wedding. What is wrong?", "It is unrelated to the topic", ["It is too short", "It has a capital letter", "It uses the simple present"], "Every sentence must be about the topic; do not add unrelated facts to make the paragraph longer."),
        M(2, "Which is the correct order of steps to write a paragraph?", "Think, plan, write, check", ["Check, write, think, plan", "Write, plan, check, think", "Plan, check, think, write"], "First decide the main idea, then note points, then write, and finally check spelling, punctuation and tense.")
      ],
      written: []
    },
    "informal-letter": {
      mcq: [
        M(1, "Whom do we usually write an informal letter to?", "friends and relatives", ["a bank manager", "the principal of a school", "a newspaper editor"], "Informal letters go to people we know well: friends, cousins, grandparents, uncles and aunts."),
        M(2, "Which salutation is correct for an informal letter?", "Dear Kabir,", ["Respected Sir,", "To whom it may concern", "Dear Kabir"], "The salutation is Dear + name followed by a comma."),
        M(2, "Where does the receiver's address go in an informal letter?", "On the envelope", ["At the top of the letter", "After the closing", "Under the date"], "The receiver's address is not written at the top of an informal letter; it goes on the envelope."),
        M(3, "Which closing is best for an informal letter to your grandmother?", "Your loving grandson,", ["Yours faithfully,", "Yours sincerely,", "Yours truly,"], "Choose a closing that suits the relation; formal closings do not belong in informal letters."),
        M(2, "What should the first paragraph of the body do?", "Greet, ask how they are and say why you are writing", ["Give all the main news in detail", "Say goodbye and ask for a reply", "Describe the weather only"], "Paragraph 1 greets the person, thanks them for their last letter and says why you are writing."),
        M(2, "Which word in a letter is an example of the wrong tone?", "gr8", ["wonderful", "happy", "thanks"], "Do not use slang or SMS-style spellings such as 'u' or 'gr8'."),
        M(2, "Do's and don'ts: which is something you should do?", "Check spelling and punctuation", ["Use 'Yours faithfully' as the closing", "Begin with 'Respected Sir'", "Leave out the comma after the salutation"], "Do check spelling and punctuation; formal openings and closings are not used.", "do-s-and-don-ts"),
        M(2, "Which opening is NOT suitable for an informal letter?", "Respected Sir", ["Dear Nani", "Dear Riya", "Dear Kabir"], "'Respected Sir' is a formal opening and is a don't in an informal letter.", "do-s-and-don-ts")
      ],
      written: [
        W(3, "List two do's and two don'ts for writing an informal letter.", "Do write the date and your name, and check spelling and punctuation. Do choose a closing that suits the relation, such as 'Your loving grandson' for a grandmother. Don't use formal closings like 'Yours faithfully' or openings like 'Respected Sir'. Don't forget the comma after the salutation and after the closing.", "short", "do-s-and-don-ts")
      ]
    },
    "notice-writing": {
      mcq: [
        M(1, "Where is a school notice usually put up for everyone to see?", "On a notice board", ["Inside an envelope", "In a diary", "On the receiver's door only"], "A notice is put up on a notice board or read out."),
        M(2, "About how many words are enough for a notice at this level?", "40 to 50", ["200 to 250", "10 to 15", "500 or more"], "A notice must be short, clear and complete, and about 40 to 50 words are enough."),
        M(2, "Which word is written in the centre of a notice?", "NOTICE", ["Dear Sir", "Sincerely", "Address"], "The word NOTICE is written in the centre, followed by the date."),
        M(2, "Which greeting is used in a notice?", "No greeting such as 'Dear' is used", ["Dear Friends", "Dear Sir", "Respected Madam"], "A notice is for everyone, not one person, so it has no 'Dear…'."),
        M(2, "Which style is right for a notice?", "Formal and impersonal", ["Chatty and personal", "Full of jokes", "Written with exclamation marks"], "The language is formal and impersonal, with short sentences."),
        M(3, "Which of these should be left out of a notice?", "Stories and opinions", ["The date of the event", "The venue", "Whom to contact"], "Leave out unnecessary details, stories and opinions.", "what-to-include"),
        M(2, "Which detail tells readers where to go?", "The venue", ["The designation", "The title", "The date of issue"], "The venue is the place where an event will be held.", "what-to-include"),
        M(2, "Which question should a notice about an event answer?", "Who can take part?", ["Who is the writer's best friend?", "Why is the sky blue?", "What was the weather last year?"], "A notice answers: what, when, where and who can take part.", "what-to-include")
      ],
      written: [
        W(3, "List the information that a notice about an event must include. What should be left out?", "A notice should say what is happening, when (day, date and time), where (venue) and who can take part. It may add whom to contact, the last date to give names, or anything students must bring. Unnecessary details, stories and opinions should be left out.", "short", "what-to-include")
      ]
    }
  });
})();
