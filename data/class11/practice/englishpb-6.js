// Class 11 English (PSEB) practice bank, part 6: extra questions for chapters with gaps. Extra practice (unreviewed draft).
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
  StudyData.addPractice(11, "englishpb", {
    "prepositions": {
      mcq: [],
      written: [
        W(5, "Explain the use of at, on and in for time and for place, with one example of each. How do for, since, by and until differ?", "For time, 'at' is used for clock time and points (at 5 o'clock, at noon, at night), 'on' for days and dates (on Monday, on 15 August) and 'in' for months, years, seasons and long periods (in July, in 2024, in winter). For place, 'at' is used for a point or address (at the gate), 'in' for an enclosed area or a city (in Ludhiana) and 'on' for a surface (on the table). 'For' gives the length of time (for two hours), while 'since' gives the starting point (since 2019). 'By' means not later than a time (finish the work by Friday), while 'until' or 'till' means up to a time (wait until five).", "long"),
        W(4, "Correct the sentences and give the rule: (i) We discussed about the plan. (ii) Please divide the sweets between all the children. (iii) He is fond of to swim. (iv) The offer is between you and I.", "(i) We discussed the plan. Verbs such as discuss, reach, enter and attend take no preposition after them. (ii) Please divide the sweets among all the children. 'Between' is for two and 'among' is for more than two. (iii) He is fond of swimming. A preposition is followed by a noun, pronoun or -ing form, not by 'to' plus a verb. (iv) The offer is between you and me. The object form of the pronoun is used after a preposition.", "long")
      ]
    },
    "determiners": {
      mcq: [],
      written: [
        W(5, "Explain the difference between 'few' and 'a few', and between 'little' and 'a little', with examples. With which nouns is each used?", "'Few' and 'little' have a negative sense and mean almost none: 'Few people came to the meeting' means hardly anyone came, and 'There is little water in the tank' means it is nearly empty. 'A few' and 'a little' have a positive sense and mean some, enough to be useful: 'A few people came' and 'A little sugar is left.' 'The few' and 'the little' mean all that there is, however small. 'Few' and 'many' go with countable plural nouns (few books), while 'little' and 'much' go with uncountable nouns (little milk).", "long"),
        W(4, "Write the difference between each and every, and between either and neither. What do all four take after them?", "'Each' refers to one of two or more things taken separately: 'Each student received a prize.' 'Every' refers to all of three or more taken as a group: 'Every student was present.' 'Either' means one of two: 'Either road leads to the market.' 'Neither' means not one of two: 'Neither answer is correct.' All four words, each, every, either and neither, take a singular noun and a singular verb.", "long")
      ]
    },
    "same-word-noun-verb-adjective": {
      mcq: [],
      written: [
        W(5, "A word can serve as a noun, a verb or an adjective. Show this with the words 'light', 'round' and 'water', using one sentence for each use.", "'Light' is a noun in 'Switch on the light', an adjective in 'This is a light bag' and a verb in 'Please light the lamp.' 'Round' is a noun in 'He got a round of applause', an adjective in 'We sat at a round table', a verb in 'The bus will round the corner' and an adverb or preposition in 'The shop is open round the clock.' 'Water' is a noun in 'Give me a glass of water' and a verb in 'I water the plants every morning.' The part of speech is decided by the word's job in the sentence, not by its spelling.", "long"),
        W(4, "How do stress and spelling help us tell a noun from a verb? Give two examples for each method.", "Stress on the first syllable usually marks a noun or adjective, and stress on the second syllable marks a verb: 'record' (noun) and 're'cord (verb), 'present' (noun, adjective) and pre'sent (verb), and similarly object and permit. In some pairs the spelling or sound itself changes: advice (noun) and advise (verb), breath (noun) and breathe (verb), belief (noun) and believe (verb). To decide, check the word's job: a noun can follow a, an, the or a possessive, a verb shows action and takes tense, and an adjective describes a noun.", "long")
      ]
    },
    "modals": {
      mcq: [],
      written: [
        W(5, "State the rules for using modals. Explain the uses of can, may, must and should with one example each.", "A modal is followed by the base form of the verb without 'to' (She can swim), except 'ought to'. Modals have no -s in the third person and no -ing or -ed forms. Negatives and questions are made without 'do': 'Can he come?' Can shows ability or informal permission: 'I can drive.' May shows formal permission, possibility or a wish: 'May I come in?' Must shows strong obligation or logical certainty: 'You must obey the rules.' Should shows advice or moral duty: 'You should respect elders.'", "long"),
        W(4, "Explain the difference between 'must not' and 'need not'. Then use 'shall', 'had better' and 'used to' in sentences of your own and state what each shows.", "'Must not' forbids something: 'You must not cheat.' 'Need not' means something is not necessary: 'You need not come early.' 'Shall' is used with I and we for offers and suggestions: 'Shall I open the window?' 'Had better' gives strong advice: 'You had better see a doctor.' 'Used to' shows a past habit that no longer exists: 'We used to play in the street.'", "long")
      ]
    },
    "tenses": {
      mcq: [],
      written: [
        W(5, "Name the four forms of the present tense and give a sentence and the use for each.", "Simple present (V1 or V1+s) is used for habits and facts: 'The sun rises in the east.' Present continuous (is/am/are + V-ing) is used for an action going on now or a fixed plan: 'She is reading.' Present perfect (has/have + V3) is used for a past action linked to the present, often with just, already, yet, ever or never: 'I have finished my homework.' Present perfect continuous (has/have been + V-ing) is used for an action begun in the past and still continuing, with for or since: 'It has been raining since morning.'", "long"),
        W(4, "Explain the past perfect and the future perfect with one example each. How is the tense of a time clause with when or if used for a future meaning?", "The past perfect (had + V3) shows the earlier of two past actions: 'The train had left when we reached.' The future perfect (will have + V3) shows an action complete by a future time: 'By June I will have finished.' In clauses of time or condition with if, when, before and after, the present tense is used for future meaning: 'I will call you when he arrives', not 'when he will arrive'.", "long")
      ]
    },
    "removal-use-of-too": {
      mcq: [
        M(1, "Which sentence is the correct conversion back to 'too ... to'? 'The box is so heavy that I cannot lift it.'", "The box is too heavy for me to lift.", ["The box is too heavy for me to lift it.", "The box is too heavy that I cannot lift.", "The box is very heavy for me to lift it."], "When converting back, the pronoun object that repeats the subject is removed: 'for me to lift'.", "converting-back"),
        M(2, "Convert to 'too ... to': 'He is so tired that he cannot work.'", "He is too tired to work.", ["He is too tired not to work.", "He is so tired too work.", "He is too tired he cannot work."], "'so ... that ... cannot' becomes 'too ... to' with the verb in the infinitive and no 'cannot'.", "converting-back")
      ],
      written: [
        W(4, "Explain the meaning of 'too' with examples. How is 'too ... to' removed using 'so ... that'? Give two rewritten sentences.", "'Too' means more than is needed or wanted and suggests a problem, unlike 'very', which only strengthens: 'The tea is too hot.' At the end of a sentence it means 'as well': 'I will come too.' The pattern 'too + adjective + to + verb' has a negative meaning even without 'not'. To remove it, change it to 'so ... that ... cannot': 'He is too tired to work' becomes 'He is so tired that he cannot work.' In the past: 'She was too shy to speak' becomes 'She was so shy that she could not speak.' It can also become 'not ... enough': 'The tea is not cool enough to drink.'", "long"),
        W(4, "Rewrite with 'so ... that': (i) The bag is too heavy for me to carry. (ii) She was too weak to stand. And rewrite in 'too ... to': (iii) The tea is so hot that I cannot drink it. Explain the steps.", "(i) The bag is so heavy that I cannot carry it. (ii) She was so weak that she could not stand. (iii) The tea is too hot for me to drink. To remove 'too', use 'so ... that' with 'cannot' or 'could not' matching the tense, and add the pronoun object. To convert back, use 'too ... to' and remove the pronoun object that repeats the subject.", "long"),
        W(3, "Explain how to convert a 'so ... that ... cannot' sentence back to 'too ... to', with two examples.", "Replace 'so' with 'too', drop 'that' and 'cannot', and use 'to' plus the verb. If the object pronoun repeats the subject of the first clause, remove it, and use 'for me/him/us' to show the doer. Example 1: 'He is so weak that he cannot walk' becomes 'He is too weak to walk.' Example 2: 'The problem is so hard that I cannot solve it' becomes 'The problem is too hard for me to solve.' 'Very' is a safe positive replacement when no negative result is meant.", "short", "converting-back")
      ]
    },
    "voice": {
      mcq: [
        M(1, "Which sentence correctly uses 'by + agent' in the passive?", "The letter was written by Ravi.", ["The letter written by Ravi, with no helping verb before it.", "The letter is wrote by Ravi, using the past form after is.", "The letter was write by Ravi."], "Passive = be (same tense) + V3 + by + agent: 'was written by Ravi'.", "usage-points"),
        M(2, "When is the passive voice most suitable?", "When the doer is unknown, unimportant or obvious", ["When the doer must be named and praised in every single sentence", "When the verb has no object and is intransitive in form", "When a command is given to a friend"], "The passive is used when the doer is unknown, unimportant or obvious, as in 'The window was broken.'", "usage-points")
      ],
      written: [
        W(5, "Write the passive form of the following sentences and state the pattern used: (i) She sings a song. (ii) They are building a bridge. (iii) We have finished the work. (iv) Who wrote this book? (v) Close the door.", "(i) A song is sung by her. Simple present: is/am/are + V3. (ii) A bridge is being built by them. Present continuous: is/am/are being + V3. (iii) The work has been finished by us. Present perfect: has/have been + V3. (iv) By whom was this book written? A wh-question puts 'by whom' first. (v) Let the door be closed, or You are requested to close the door. The imperative uses 'Let ... be + V3'.", "long"),
        W(4, "Which verbs can be changed into the passive voice? Explain the passive of a sentence with two objects and the passive with modals. Give examples.", "Only transitive verbs, that is verbs which take an object, can be made passive. The object of the active becomes the subject, followed by be in the same tense, V3 and by + agent. With two objects, either can become the subject: 'He gave me a book' becomes 'I was given a book' or 'A book was given to me.' With modals the pattern is modal + be + V3: 'We must finish the work' becomes 'The work must be finished.'", "long"),
        W(3, "When is the passive voice used, and how may the 'by + agent' be handled? Give examples of verbs that take other prepositions in the passive.", "The passive is used when the doer is unknown, unimportant or obvious: 'The window was broken.' The 'by + agent' can be dropped if it adds nothing. Some verbs take prepositions other than 'by' in the passive: 'The hall was filled with people' and 'I was surprised at the news.'", "short", "usage-points")
      ]
    },
    "narration": {
      mcq: [
        M(1, "Which verb is used in indirect speech for a command or request?", "told, ordered or requested, followed by a to-infinitive", ["asked, followed by a that-clause and a question mark", "exclaimed, followed by a question word and then a comma", "said, followed by a direct quotation"], "'Shut the door' becomes 'He ordered me to shut the door.'", "usage-points"),
        M(2, "Choose the correct indirect speech: He said, 'I am tired.'", "He said that he was tired.", ["He said that he is tired.", "He said me that he was tired.", "He said that I was tired."], "With a past reporting verb, the present tense moves one step back to the past, and the pronoun follows the speaker.", "usage-points")
      ],
      written: [
        W(5, "Change into indirect speech: (i) 'I am tired,' he said. (ii) 'Where do you live?' she asked me. (iii) 'Shut the door,' he said to me. (iv) 'Hurrah! We won,' said the boys. Explain the changes.", "(i) He said that he was tired. The present tense moves one step back to the simple past. (ii) She asked me where I lived. A question uses the wh-word with statement word order and no question mark. (iii) He ordered me to shut the door. A command uses ordered/told + to-infinitive. (iv) The boys exclaimed with joy that they had won. An exclamation uses 'exclaimed with joy that', and the simple past becomes the past perfect.", "long"),
        W(4, "State the changes in tense and in time and place words when the reporting verb is in the past. What happens to a universal truth, and when does the tense not change?", "When the reporting verb is in the past, tenses go one step back: simple present becomes simple past, present continuous becomes past continuous, present perfect becomes past perfect and simple past becomes past perfect. Will becomes would, can becomes could, may becomes might and shall becomes should. Time and place words change: now becomes then, today becomes that day, tomorrow becomes the next day, yesterday becomes the day before, here becomes there and this becomes that. A universal truth stays in the present tense. If the reporting verb is in the present or future, the tense of the reported speech does not change.", "long"),
        W(3, "Explain the usage points of narration: the difference between 'told' and 'said', the use of 'let us', and the reporting of wishes.", "If the reporting verb is in the present or future, the tense of the reported speech does not change. 'Told' is used with an object (He told me) and 'said' without one (He said that ...). 'Let us' suggests a proposal, so it is reported with 'suggested': 'He suggested that we should go.' Wishes and prayers are reported with 'wished' or 'prayed that'.", "short", "usage-points")
      ]
    },
    "note-making": {
      mcq: [
        M(1, "What should notes be written in?", "Short phrases", ["Long descriptive paragraphs", "Complete sentences with examples", "Rhyming lines and poems"], "Notes use short phrases, with examples, repetitions and descriptions left out."),
        M(1, "What should be given to the notes at the start?", "A suitable title that sums up the passage", ["The writer's full postal address, phone number and date", "A long paragraph introducing the notes in full sentences", "The name of the person who made them"], "A good title sums up the whole passage."),
        M(2, "About how long should notes be compared with the original passage?", "About one third", ["Double the length", "Exactly the same length", "Nearly three fourths"], "Notes are about one third of the original length."),
        M(2, "What is a 'key' at the end of notes?", "A list of the abbreviations used", ["A list of difficult words with meanings", "The answer key for the passage questions", "A short summary in full sentences"], "A key lists the abbreviations and symbols used in the notes so that they stay clear."),
        M(2, "Which system of numbering is consistent for notes?", "I, II for main points, A, B for sub-points, 1, 2 for details", ["Only bullet marks, mixed with random letters and symbols", "1, A, I, 2 in any order the writer happens to like", "Full stops in place of any numbers"], "A consistent system keeps the structure visible; sub-points are indented."),
        M(3, "Which is the best way to deal with examples in the passage when making notes?", "Leave them out, since notes carry only the key facts", ["Copy every example from the passage in full sentences", "Add your own examples to improve the notes further", "Change examples into the opening paragraph"], "Examples, repetitions and descriptions are omitted, and only the facts in the passage are used.")
      ],
      written: []
    },
    "message-and-notice-writing": {
      mcq: [
        M(1, "What comes at the top of a message?", "The date and time", ["The sender's full signature", "A long heading in capitals", "The word NOTICE in a box"], "A message begins with the date and time, then the receiver's name."),
        M(1, "How many words does a message usually have?", "Under 50 words", ["Over 150 words", "About 250 words", "More than 300 words"], "A message is short, giving who, what, when and where."),
        M(2, "Which belongs in a notice but not in a message?", "The issuing institution's name and the word NOTICE", ["The receiver's name followed by a comma and a greeting", "A casual tone, nicknames and small jokes", "The words 'Dear friend' at the start"], "A notice has the institution's name, NOTICE and date, a heading, body and the writer's designation."),
        M(2, "In which person and tone is a notice written?", "Third person, in formal language", ["First person, in friendly language", "Second person, in a rude tone", "First person, in poetic language"], "A notice is written in the third person and formal language, avoiding 'I' and 'we'."),
        M(2, "What should the writer do if the question asks to use an assumed name or a post?", "Sign with the given post or name, not their real name", ["Write their real name, address and class in full", "Leave the signature part blank and write nothing there", "Write both the real and assumed names"], "Use the post or name given in the question."),
        M(3, "Which detail is NOT necessary in the body of a notice for a sports day?", "The writer's personal opinions about the winners", ["The date, time and venue of the event itself", "Who may take part", "Whom to contact for more information"], "A notice gives what, when, where, who may take part and whom to contact, not personal opinions.")
      ],
      written: []
    },
    "advertisement-writing": {
      mcq: [
        M(1, "Which of these is a classified advertisement?", "A 'To let' notice in a newspaper column", ["A full-page colour poster for a new film release", "A radio jingle with music and a famous singer", "A television commercial"], "Classified advertisements appear in newspaper columns, such as for sale, to let and wanted."),
        M(1, "Why are articles and auxiliary verbs left out of a classified advertisement?", "Advertisements are charged by the word", ["They are not used in English writing at all", "They make the ad too short to be read easily", "They make the ad look too colourful"], "Concise language saves money because ads are charged by the word."),
        M(2, "What should a 'For sale' advertisement contain?", "Item, condition, price and contact details", ["Only a long story about the owner's early life", "Only the owner's family background and hobbies", "Only a slogan with no details"], "A for-sale ad gives the item, its condition, price (negotiable or fixed) and contact.", "typical-formats"),
        M(2, "Which details does a 'To let' advertisement give?", "Type of house, rooms, location, rent and contact", ["Post, qualifications, experience and last date", "Item, condition and a lost-and-found place", "Only a slogan and a picture of a product"], "A to-let ad gives the type of house, rooms, location, rent and contact details.", "typical-formats"),
        M(2, "Which feature is typical of a display advertisement?", "Eye-catching layout, pictures and a catchy slogan", ["Only plain text in small print columns of a page", "A very long paragraph without a heading", "A list of rules and a signature"], "Display advertisements use layout, pictures, slogans and bold headings to attract attention."),
        M(2, "What is the first rule of a good advertisement?", "A clear heading in capitals, such as WANTED or LOST", ["A long introduction to the history of the product", "False claims about the quality of the product", "A letter-like salutation and a closing"], "A clear heading in capitals is followed by essential facts only.", ),
        M(3, "Which detail is essential in a 'Situations vacant' advertisement?", "Post, qualifications, experience, salary and last date to apply", ["The owner's favourite colour, food and holiday place", "A story about the previous employee and his family", "The names of all the shop's customers"], "A vacancy ad gives the post, qualifications, experience, salary, last date and how to apply.")
      ],
      written: [
        W(4, "Draft a 'To let' advertisement for a two-bedroom flat in a good locality. Which typical formats do 'for sale', 'to let', 'vacancy' and 'lost and found' ads follow?", "TO LET. Two-bedroom flat, first floor, with attached bath and balcony, near the market and bus stand, Model Town, Ludhiana. Rent Rs 12,000 per month. Contact: 98765-00000 after 5 p.m. The typical formats are: For sale gives the item, condition, price (negotiable or fixed) and contact. To let gives the type of house, rooms, location, rent and contact. Wanted or vacancy gives the post, qualifications, experience, salary, last date and how to apply. Lost and found gives the item, place and date, a reward if any, and contact.", "short", "typical-formats")
      ]
    },
    "letter-writing-social-personal": {
      mcq: [
        M(1, "Where are the sender's address and date written in a personal letter?", "At the top right", ["At the bottom left", "In the centre of the page", "On the back of the envelope"], "The sender's address and date are written at the top right."),
        M(1, "Which closing suits a letter to a family member?", "Yours affectionately", ["Yours faithfully", "Yours truly, Manager", "Respectfully submitted"], "Yours affectionately is used for family, and yours sincerely for acquaintances."),
        M(2, "What should a condolence letter be like?", "Sincere and brief, avoiding cheerful topics", ["Long and full of jokes and cheerful stories", "Formal, with business details and prices", "Cheerful with party plans"], "A condolence letter expresses sympathy sincerely and briefly, and may offer help."),
        M(2, "What does an invitation letter state?", "The occasion, date, time and venue, and a request to come", ["Only the writer's own news about school", "A long list of complaints about other people", "Only a thanks for an old gift"], "An invitation states the occasion, date, time and venue."),
        M(2, "Where is the receiver's address written for a personal letter?", "On the envelope, not at the top of the letter", ["At the top right, just below the date and address", "At the very end, just below the writer's name", "In the middle of the body"], "The receiver's address is written on the envelope in a personal letter."),
        M(3, "Which sentence is best suited to a letter of thanks for a gift?", "Thank you for the lovely watch; it will help me reach school on time.", ["I got your watch, but it was not at all what I had expected.", "Dear Sir, with reference to your letter, I acknowledge receipt of it.", "Please send another gift next month as well."], "A thanks letter thanks for the gift and mentions how it pleased or helped.")
      ],
      written: []
    },
    "translation-tips": {
      mcq: [
        M(1, "How should a passage be translated?", "By meaning, not word for word", ["Word for word, ignoring sense", "Only the first line, then guess the rest", "By changing the story as you like"], "A literal translation often sounds wrong, so translate the meaning."),
        M(1, "Where does the verb usually come in Punjabi and Hindi sentences?", "At the end", ["At the beginning", "Always in the middle", "After the first adjective"], "Punjabi and Hindi put the verb at the end; English follows Subject + Verb + Object."),
        M(2, "What do postpositions in Punjabi or Hindi become in English?", "Prepositions", ["Conjunctions", "Articles", "Interjections"], "Postpositions become prepositions such as on, in, at and with."),
        M(2, "How should a native idiom be translated?", "By an English idiom of the same meaning", ["By translating each word of it literally", "By leaving it as it is in Punjabi", "By deleting it from the passage"], "Replace a native idiom with an English equivalent of the same meaning."),
        M(2, "Which tense suits 'He has lived here ___ ten years'?", "for", ["since", "ago", "until"], "'For' goes with a period of time; 'since' with a point of time."),
        M(3, "After translating, what should you proofread for?", "Spelling, punctuation, capital letters, agreement and noun number", ["Only the length of the translated passage", "The number of verbs placed at the end", "Only the heading of the translation"], "Check subject-verb agreement, the number of nouns, spelling, punctuation and capital letters.")
      ],
      written: []
    },
    "gender-bias": {
      mcq: [
        M(1, "How is Sudha Murthy described in the story?", "Brilliant, bold, idealistic and outspoken", ["Shy, weak and unwilling to speak up for herself", "Careless, lazy and unambitious in all her work", "Cunning, selfish and greedy"], "She is brilliant, bold, idealistic and outspoken, and admits she was a bit rude in the interview.", "characters"),
        M(2, "Why is the elderly panellist's belief shown as old-fashioned?", "He believed factories were no place for women", ["He believed all engineers should be old", "He felt only men should read letters", "He thought interviews should be held in the evening"], "He was affectionate in tone but bound by the old belief that factories were no place for women.", "characters")
      ],
      written: [
        W(3, "Describe the characters of Sudha Murthy, J. R. D. Tata and the elderly panellist as shown in the lesson.", "Sudha Murthy is brilliant, bold, idealistic and outspoken; she herself admits she was a bit rude in the interview. J. R. D. Tata is the head of the Tata Group, called the uncrowned king of Indian industry, who is admired and remembered with warmth. The elderly panellist is affectionate in tone but bound by the old belief that factories were no place for women.", "short", "characters")
      ]
    },
    "water-a-true-elixir": {
      mcq: [
        M(1, "According to the conclusion, who suffers most from the lack of clean water?", "Women and girls who walk long distances to fetch it", ["Only the rich people who live in big cities", "Only the farmers who own tractors and land", "Only the engineers who build dams"], "Millions in rural and poor urban India lack clean water; women and girls walk long distances to fetch it.", "conclusion"),
        M(2, "What message does the lesson end with?", "Every drop of water is precious and each person must help save it", ["Water is plentiful everywhere and needs no care", "Only the government should save water for people", "Only the poor should save water at home"], "The conclusion asks every person to help save water.", "conclusion")
      ],
      written: [
        W(3, "What does the conclusion of 'Water - A True Elixir' say? What can each of us do?", "Millions of people in rural and poor urban India lack clean water, and women and girls often walk long distances to fetch it. Every drop of water is precious, so each person must help save it, for example by not wasting water at home, closing taps, and respecting water as a shared resource.", "short", "conclusion")
      ]
    },
    "the-peasants-bread": {
      mcq: [
        M(1, "What does the story say about need and excess?", "Need keeps people decent, while excess leads to vice", ["Excess always makes people kinder, wiser and happier", "Need makes people lazy and greedy for more", "Need and excess have the same effect"], "The theme is contentment and moderation: need keeps people decent, excess leads to vice.", "themes"),
        M(2, "What does the story say about wealth?", "It is not bad in itself; how we use it decides its effect", ["It is always bad and must be thrown away at once", "It always makes a person generous and kind", "It has no effect on a person's habits"], "Wealth is not bad in itself, but how we use it decides whether it destroys or helps us.", "themes")
      ],
      written: [
        W(3, "State two themes of 'The Peasant's Bread' and explain them in your own words.", "One theme is contentment and moderation: need keeps people decent, while excess leads to vice, and drink degrades a person. Selfishness and greed grow with wealth, but wealth is not bad in itself; how we use it decides whether it destroys or helps us. Another theme is forgiveness: accepting loss gracefully shows a good heart.", "short", "themes")
      ]
    }
  });
})();
