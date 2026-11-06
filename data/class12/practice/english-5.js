// Class 12 English practice bank, part 5: extra questions for chapters with gaps. Extra practice (unreviewed draft).
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
  StudyData.addPractice(12, "english", {
    "invitation-and-reply": {
      mcq: [
        M(1, "Which of these should a formal invitation include?", "Date, time, venue and purpose of the event", ["Only the name of the host and a greeting", "Only the venue, since the rest is understood", "A long personal story about the host family"], "A formal invitation must give every detail asked for: date, time, venue and purpose.", "do-s-and-don-ts"),
        M(2, "Which style suits an invitation or its reply?", "Formal and courteous, without slang or abbreviations", ["Casual and chatty, with short forms, slang and friendly jokes", "Humorous, with jokes about the guests invited", "Hurried, with abbreviations to save writing time"], "Formal, courteous language is expected; slang and abbreviations lose marks.", "do-s-and-don-ts")
      ],
      written: [
        W(4, "List four do's and don'ts to remember while writing a formal invitation or its reply, and say how marks are given.", "Do include every detail given in the question: date, time, venue and the purpose of the event. Do keep the language formal and courteous. Don't use slang or abbreviations. Don't write a long letter or add personal chat; stay within the word limit. Marks are awarded for format, content and expression, so the layout, the correct details and the quality of language all count.", "long", "do-s-and-don-ts")
      ]
    },
    "letter-to-the-editor": {
      mcq: [
        M(1, "Which part of a letter to the editor is awarded marks under format?", "The subject line", ["The weather mentioned in the first line", "A drawing placed beside the address", "The number of full stops used in all"], "The subject line is part of the format and is marked, so it must not be forgotten.", "do-s-and-don-ts"),
        M(2, "While criticising a problem in a letter to the editor, you should", "criticise the problem, not individuals", ["name and blame a particular official strongly", "use an angry tone so the editor takes notice", "use slang so that the letter sounds lively"], "A formal, polite tone is expected, and the problem should be the target, not people.", "do-s-and-don-ts")
      ],
      written: [
        W(4, "What should and should not be done while writing a letter to the editor? Mention the language to be used and how marks are given.", "Do use formal vocabulary, linking words such as moreover and therefore, and polite requests. Do write the subject line, because it carries marks under format. Don't use slang, abbreviations or an angry tone. Criticise the problem, not individuals. Marks are given for format, content and expression.", "long", "do-s-and-don-ts")
      ]
    },
    "lost-spring": {
      mcq: [
        M(2, "Which theme is shown by families feeling they cannot escape the caste they were born into?", "Lost childhood and destiny", ["Hope and ambition", "Joy of festivals, fairs and play", "Success through schooling and a bright career"], "The notes link accepting one's lot and caste with the theme of lost childhood and destiny.", "themes"),
        M(2, "In the theme of exploitation, who keep the poor trapped in a web of debt?", "Middlemen and powerful groups", ["Teachers and school officers", "Doctors and social workers", "Neighbours and close relatives"], "Exploitation by middlemen and powerful groups keeps the poor in debt.", "themes")
      ],
      written: [
        W(4, "Discuss the main themes of 'Lost Spring'.", "Child labour and poverty: the cycle of poverty denies children school and play. Exploitation: middlemen and powerful groups keep the poor in a web of debt. Lost childhood and destiny: families feel they cannot escape the caste they were born into, and accept their lot. Hope and ambition: Mukesh's wish stands out as a ray of hope in an otherwise dark picture.", "long", "themes")
      ]
    },
    "poets-and-pancakes": {
      mcq: [
        M(2, "The humour in 'Poets and Pancakes' is best described as", "gentle humour and mild satire without cruelty", ["bitter and harsh attack on every person in the film world", "sad and serious account without any jokes", "pure fantasy having no link with real life"], "The notes say the humour and satire are mild and not cruel.", "style-and-themes"),
        M(3, "Which weaknesses does the writer gently point at?", "Vanity, flattery, jealousy and bureaucracy", ["Honesty, courage, hard work and kindness to others", "Hunger, thirst, illness and old age in the studios", "Speed, strength, skill and fitness"], "The notes name vanity, flattery, jealousy and bureaucracy as the targets.", "style-and-themes")
      ],
      written: [
        W(4, "Describe the style and themes of 'Poets and Pancakes'.", "The style is chatty and rambling: one thought leads to another and is dwelt on at length. The piece uses gentle humour and mild satire to point at human weaknesses such as vanity, flattery, jealousy and bureaucracy, without cruelty. It also shows how the film world, politics and literature mixed in early Indian cinema, and how little the studio staff knew of the wider world.", "long", "style-and-themes")
      ]
    },
    "the-interview": {
      mcq: [
        M(2, "'The Interview' combines which two forms of writing?", "An essay (Part I) and a question-and-answer interview (Part II)", ["A poem (Part I) and a short story about a detective (Part II)", "A diary (Part I) and a formal letter to an editor (Part II)", "A speech (Part I) and a news report (Part II)"], "The text has an essay first and then a question-and-answer interview.", "features-of-the-piece"),
        M(3, "How are Eco's answers described?", "Witty and modest, with small stories", ["Angry and boastful, with long lectures", "Rude and brief, with single words", "Cold and formal, with only facts and dates"], "His answers are witty and modest and include small stories told like a Chinese wise man.", "features-of-the-piece")
      ],
      written: [
        W(4, "Explain the main features of 'The Interview' as a piece of writing.", "The text combines an essay (Part I) with a question-and-answer interview (Part II), so students see two forms of interview writing. Eco's answers are witty and modest, with small stories told like a Chinese wise man. The questions move from his many roles to his writing style, his identity and the reasons for his novel's success.", "long", "features-of-the-piece")
      ]
    }
  });
})();
