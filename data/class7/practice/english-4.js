// Class 7 English practice bank, part 4: extra questions for chapters with gaps. Extra practice (unreviewed draft).
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
  StudyData.addPractice(7, "english", {
    "animals-birds-and-dr-dolittle": {
      mcq: [
        M(1, "What kind of story is this chapter described as?", "A fable-like fantasy", ["A true account of a vet's career", "A science report on animal habits", "A history of a famous hospital"], "The notes call it a fable-like fantasy that entertains while teaching kindness and care for animals.", "themes-and-style"),
        M(2, "According to the notes, what is the key to helping animals?", "Listening carefully to animals", ["Giving them expensive food all day", "Keeping them locked inside a house", "Teaching them to speak like humans only"], "Listening carefully to those who cannot speak our language is the key to helping them.", "themes-and-style"),
        M(2, "Which detail adds humour to the story?", "Green spectacles for a horse", ["A long train journey by night", "A fierce storm at sea", "A silent library at noon"], "The humour comes from talking animals, the parrot's proud remarks and details like green spectacles for a horse.", "themes-and-style")
      ],
      written: [
        W(3, "What themes and style make the story of Dr. Dolittle enjoyable? Answer in your own words.", "It is a fable-like fantasy that entertains while teaching kindness and care for animals. It shows that listening carefully to those who cannot speak our language is the key to helping them. The humour comes from talking animals, the parrot's proud remarks and funny details such as green spectacles for a horse.", "short", "themes-and-style")
      ]
    },
    "formal-letter": {
      mcq: [
        M(1, "A formal letter is written to", "a principal or an editor", ["a close cousin at a distant school", "a grandmother on her birthday", "a best friend in the next lane"], "Formal letters go to people we do not know well or to people in authority."),
        M(2, "Which of these should be avoided in a formal letter?", "Contractions and slang", ["Full sentences and complete words", "A subject line giving the topic", "A polite and respectful tone"], "Use full sentences and complete words and avoid contractions and slang."),
        M(1, "Where is the sender's address written in a formal letter?", "At the top right of the page", ["At the bottom left of the page", "Inside the first paragraph only", "On the envelope and not the letter"], "Sender's address goes at the top right, with the date below it."),
        M(2, "Which closing goes with the salutation \"Dear Sir\"?", "Yours faithfully", ["Yours sincerely", "Your loving friend", "With lots of love"], "Yours faithfully goes with Dear Sir/Madam; Yours sincerely goes with a name."),
        M(2, "Which closing goes with the salutation \"Dear Mr. Verma\"?", "Yours sincerely", ["Yours faithfully", "Your loving son", "Best wishes always"], "Yours sincerely is used when the letter begins with a name."),
        M(2, "What is a letter to the editor?", "A letter on a local issue", ["A letter asking a friend to a party", "A diary note about a school day", "A note passed to a classmate"], "A letter to the editor shares an opinion on a local issue, such as keeping the park clean."),
        M(3, "A letter about a broken water tap in the school is a letter of", "complaint", ["application", "request for leave", "invitation"], "A letter of complaint points out a problem, such as a broken water tap in the school or a delayed bus."),
        M(2, "What should the third paragraph of a formal letter do?", "End with polite thanks", ["Give all the dates and facts", "State the reason for writing", "Describe the writer's holiday"], "Paragraph 3 ends with a polite request or thanks and says you hope for a reply.")
      ],
      written: []
    },
    "diary-entry": {
      mcq: [
        M(1, "A diary entry is written in the", "first person (I, we)", ["third person (he, she)", "second person (you only)", "voice of a newspaper"], "A diary entry is written in the first person and is usually informal and honest."),
        M(1, "What should be written on the top line of a diary entry?", "The date", ["A salutation to the principal", "The receiver's full address", "A long closing phrase"], "Start with the date on the top line."),
        M(2, "Which of these is NOT needed in a diary entry?", "A closing phrase", ["The date at the top", "Short paragraphs for the day", "A line about the next day"], "No address, no salutation and no closing are needed."),
        M(2, "Which tense is used for the events of the day?", "Past tense", ["Future tense only", "Imperative mood", "Passive voice only"], "Use the past tense for the events of the day, such as 'We visited the zoo'."),
        M(2, "Which of these is a time word used to order events?", "Finally", ["Because of the heat", "In spite of this", "As a result of it"], "Time words such as In the morning, At noon, Later in the evening and Finally order the events."),
        M(2, "How may a diary entry begin if you wish?", "Dear Diary,", ["Respected Sir,", "To Whom It May Concern", "Dear Editor,"], "You may begin with 'Dear Diary,' if you wish."),
        M(2, "How should a diary entry end?", "With a line about tomorrow", ["With the receiver's address", "With a formal request for a reply", "With a signature and designation"], "End with a line about your plans or feelings for the next day.")
      ],
      written: []
    },
    "story-writing": {
      mcq: [
        M(1, "Which part of a story introduces the main character and setting?", "Beginning", ["Climax", "Ending", "Moral line"], "The beginning introduces the main character, the setting and the situation."),
        M(2, "In a story, what does the climax mean?", "The most tense moment", ["The title of the story", "The names of all characters", "The date of writing"], "The climax is when the problem comes to a head."),
        M(2, "In which tense are most stories written?", "Past tense", ["Present perfect only", "Future tense only", "Imperative mood only"], "Most stories are written in the past tense."),
        M(2, "How should the exact words of a speaker be shown?", "Inside inverted commas", ["In brackets with a colon", "Underlined in the middle line", "Without any punctuation"], "Put the speaker's exact words inside inverted commas and start a new line for each new speaker."),
        M(2, "Which of these is a sequence word for a story?", "Suddenly", ["Therefore", "Moreover", "However"], "One day, Suddenly, Meanwhile and Finally are sequence words."),
        M(2, "Which title best fits a short story?", "The Lost Purse", ["A purse", "Some information about money", "Why the purse was lost in an old market of our town"], "A story needs a short, interesting title."),
        M(1, "What should you give your main character, according to the notes?", "A name and a personality", ["Only a long list of friends", "A hidden second name", "A mathematical formula"], "Give your main character a name, an age and a clear personality such as brave, curious or shy.", "creating-characters-and-setting"),
        M(2, "What do sensory details in the setting include?", "Sounds and smells", ["The page number of the book", "The price of the story book", "The marks the writer got"], "Describe the setting with sensory details such as sounds and smells.", "creating-characters-and-setting")
      ],
      written: [
        W(3, "How do you create characters and a setting for a short story? Give examples.", "Give the main character a name, an age and a clear personality, such as brave, curious or shy. Describe the setting with sensory details, like the sound of the temple bells or the smell of wet soil after rain. Keep the number of characters small so that the reader can follow the story.", "short", "creating-characters-and-setting")
      ]
    },
    "message-writing": {
      mcq: [
        M(1, "A message is written to pass on information to someone who is", "not present", ["sitting beside you", "asleep at home", "very famous"], "A message passes on information to someone who is not present."),
        M(1, "Which detail names the person the message is for?", "To", ["From", "Date", "Signature"], "To: the name of the person the message is for."),
        M(2, "How long should the message part usually be?", "One to three sentences", ["Five long paragraphs", "A full page of details", "One single word only"], "The message is written in one to three short sentences."),
        M(2, "Which spelling should be avoided in a message?", "plz", ["please", "thanks", "tomorrow"], "Avoid text-message spellings such as 'plz' or 'gr8'."),
        M(2, "Which sentence is polite when writing to an elder?", "Please call him back.", ["Just call him now.", "Phone him quickly!", "Tell him to ring me."], "Use polite words when writing to elders."),
        M(2, "A telephone message should note", "who called and when", ["only the weather that day", "the caller's school marks", "a poem for the receiver"], "A telephone message is a note of who called, when, and what they said."),
        M(3, "Which of these is a suitable message for a parent or teacher?", "A reason for being late", ["A long essay on a festival", "A full story with a moral", "A detailed travel diary"], "Messages for a parent or teacher include a reason for being late or a request to collect a child.")
      ],
      written: []
    }
  });
})();
