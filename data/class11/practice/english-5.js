// Class 11 English practice bank, part 5: extra questions for chapters with gaps. Extra practice (unreviewed draft).
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
  StudyData.addPractice(11, "english", {
    "determiners": {
      mcq: [],
      written: [
        W(5, "Name the five main kinds of determiners with an example of each. Then explain how a/an is chosen and when 'the' is used.", "The main kinds are: articles (a, an, the); demonstratives (this, that, these, those); possessives (my, your, his, her, its, our, their); quantifiers (some, any, much, many, few, little, enough, several); and distributives (each, every, either, neither). Numbers and ordinals such as 'two' and 'the first' also act as determiners. A/an are used with singular countable nouns mentioned for the first time, and the choice depends on sound, not spelling: 'an hour' and 'an honest man' (silent h, vowel sound) but 'a university' and 'a European' (they begin with a y sound). 'The' is used when the listener knows which one is meant ('Close the door'), for unique things ('the sun'), with superlatives and ordinals ('the tallest', 'the first'), and before rivers, seas, oceans and mountain ranges.", "long"),
        W(4, "Choose the correct determiner and give a reason for each: (i) I need (a / an) one-rupee coin. (ii) (Many / Much) water was wasted. (iii) (Each / All) of the students has a book. (iv) She is (a / the) tallest girl in the class.", "(i) a one-rupee coin, because 'one' begins with a w sound (a consonant sound), so we use 'a' even though the letter o is a vowel. (ii) Much water, because water is uncountable and 'much' goes with uncountable nouns; 'many' goes with plural countable nouns. (iii) Each of the students has a book, because 'each' is a distributive and takes a singular verb, which matches 'has'. (iv) the tallest girl, because a superlative always takes 'the'.", "long")
      ]
    },
    "tenses": {
      mcq: [
        M(1, "Which time word normally goes with the simple past?", "ago", ["since", "yet", "already"], "'Ago' names a finished past time, so the verb is in the simple past: 'He left two hours ago.'", "time-expressions"),
        M(2, "Choose the correct sentence.", "I have known her since 2019.", ["I know her since 2019.", "I am knowing her since 2019.", "I knew her since 2019."], "'Since' with a point of time takes a perfect tense. 'Know' is also a stative verb, so it is not used in the continuous.", "time-expressions")
      ],
      written: [
        W(4, "Explain the difference between 'since' and 'for', and between 'already' and 'yet'. Give one correct sentence for each word.", "'Since' is followed by a point of time (since Monday, since 2020), while 'for' is followed by a period of time (for two years). Both usually go with perfect tenses: 'We have lived here since 2018' and 'We have lived here for five years.' 'Already' is used in positive sentences: 'She has already left.' 'Yet' is used in negatives and questions: 'Has the bus come yet?' or 'He has not finished yet.' A finished past time such as 'yesterday' or 'ago' cannot be used with the present perfect: we say 'He left two hours ago', not 'He has left two hours ago'.", "long", "time-expressions"),
        W(4, "Rewrite the paragraph correcting the tense errors and explain two corrections: 'Yesterday I have gone to the market. I am seeing a friend there. She told me that she is leaving for Pune the next day.'", "Corrected: 'Yesterday I went to the market. I saw a friend there. She told me that she was leaving for Pune the next day.' Reasons: 'Yesterday' is a finished past time, so the simple past 'went' is needed, not the present perfect 'have gone'. 'See' here is an action in a past story, so it takes the simple past 'saw'. After the past verb 'told', the subordinate clause takes a past form, so 'is leaving' becomes 'was leaving'. The tense of a story should stay consistent.", "long")
      ]
    },
    "clauses": {
      mcq: [
        M(1, "Which group of words is a clause?", "when the bell rang", ["after the lunch break", "in the school garden", "to finish the homework"], "A clause has its own subject (bell) and finite verb (rang). The others are phrases with no finite verb.", "clause-or-phrase"),
        M(2, "What kind of clause is underlined? 'I know (that you are honest).'", "Noun clause, object of 'know'", ["Adjective clause, describing 'you'", "Adverb clause of reason, joined by 'that'", "Main clause that can stand alone"], "The clause can be replaced by 'it' or 'something', so it does the work of a noun.", "clause-or-phrase")
      ],
      written: [
        W(4, "Distinguish between a clause and a phrase, and between a main clause and a subordinate clause. Give one example of each.", "A clause is a group of words that has its own subject and a finite verb; a phrase has no finite verb. 'After the match' is a phrase, but 'after the match ended' is a clause because it has the subject 'match' and the verb 'ended'. A main (independent) clause makes complete sense by itself: 'I know.' A subordinate (dependent) clause cannot stand alone and does the work of a noun, an adjective or an adverb: 'that you are honest'. A sentence with one main clause and one or more subordinate clauses is a complex sentence: 'I know that you are honest.'", "long", "clause-or-phrase"),
        W(5, "Explain the three kinds of subordinate clauses with an example of each, and show the difference between a defining and a non-defining adjective clause.", "A noun clause does the work of a noun and usually begins with that, whether, if, what, who or how: 'What he said surprised everyone.' An adjective clause describes a noun or pronoun and begins with who, whom, whose, which, that, where or when: 'The town where I was born is small.' An adverb clause modifies the verb and tells time, place, reason, purpose, result, condition or concession: 'Unless you hurry, you will miss the bus.' A defining adjective clause identifies the noun, has no commas and may use 'that': 'The book that you lent me is useful.' A non-defining clause adds extra information, is set off by commas and never uses 'that': 'My father, who is a doctor, works in Pune.'", "long")
      ]
    },
    "modals": {
      mcq: [],
      written: [
        W(5, "Explain the meanings of must, should, need not and must not, and the use of 'would' and 'was able to', with one example for each.", "'Must' shows strong obligation or a rule: 'Students must wear their identity cards.' 'Should' shows advice or duty: 'You should drink more water.' 'Need not' shows there is no necessity: 'You needn't come early.' 'Must not' shows prohibition: 'You must not run on the stairs.' 'Would' shows a repeated past action or a polite request: 'Every evening grandfather would tell us stories.' 'Was able to' is used for a single past achievement in a particular situation, where 'could' is not used: 'The fire spread fast, but everyone was able to escape.' Modals take the base form of the verb and do not change with the subject.", "long"),
        W(4, "Correct the errors and state the rule: (i) She can sings well. (ii) He musts go now. (iii) You should to see a doctor. (iv) Does she can drive?", "(i) She can sing well. A modal is followed by the base form of the verb. (ii) He must go now. Modals never take -s, whatever the subject. (iii) You should see a doctor. Modals are followed by the verb without 'to', except 'ought to'. (iv) Can she drive? Questions with a modal are made by placing the modal before the subject, without do/does.", "long")
      ]
    },
    "editing-error-correction": {
      mcq: [],
      written: [
        W(5, "Explain the method for solving an editing (error correction) passage. What order should you follow when checking each line, and how should the answer be written?", "First read the whole passage once for meaning, because its overall tense often decides the correct verb form. Then check each line in this order: verb (tense and agreement), determiners, prepositions, pronouns and word forms. Change only the faulty word and do not rewrite the sentence. Write the answer in the given format, showing the incorrect word and its correction, for example '(a) is -> was'. Useful rules: the verb agrees with the real subject, not the nearest noun; each, every, either and neither take singular verbs; news, information and furniture are singular; use V1 after did, does and modals, and V3 after has, have and had.", "long"),
        W(4, "Find the error in each sentence and correct it: (i) One of my friends live in Goa. (ii) The captain, along with his players, were honoured. (iii) Neither the teacher nor the students was present. (iv) She has went to school.", "(i) 'live' should be 'lives', because the subject is 'one', which is singular. (ii) 'were' should be 'was', because with 'along with' the verb agrees with the first subject, 'captain'. (iii) 'was' should be 'were', because with neither...nor the verb agrees with the nearer subject, 'students', which is plural. (iv) 'went' should be 'gone', because the verb after 'has' takes V3.", "long")
      ]
    },
    "reordering-transformation": {
      mcq: [],
      written: [
        W(5, "Rewrite in the passive voice, stating the rule used each time: (i) The police arrested the thief. (ii) We must finish the work. (iii) The school has postponed the meeting. (iv) Why did she break the glass?", "(i) The thief was arrested by the police. Rule: object of the active becomes the subject, then be in the same tense (was) + V3 + by + doer. (ii) The work must be finished. Rule: with a modal, use modal + be + V3. (iii) The meeting has been postponed by the school. Rule: present perfect becomes has/have been + V3. (iv) Why was the glass broken by her? Rule: in a question the helping verb (was) stays before the subject and the verb takes V3. Remember that verbs without an object, such as sleep, arrive or go, cannot be changed into the passive.", "long"),
        W(4, "Rearrange the jumbled words into correct sentences and explain how you decided the order: (i) always / is / late / he. (ii) finished / your / have / work / you / ? (iii) the / old / temple / visited / we / in / morning / the.", "(i) He is always late. An adverb of frequency goes after 'be'. (ii) Have you finished your work? In a question the helping verb comes before the subject, and the question mark shows the sentence is a question. (iii) We visited the old temple in the morning. The order is Subject + Verb + Object + Time, and word groups such as 'the old temple' and 'in the morning' are kept together. First find the subject and the main verb, then use the capital letter and the final punctuation as clues.", "long")
      ]
    },
    "notice-writing": {
      mcq: [
        M(1, "Where is the whole of a notice written?", "Inside a box", ["Inside a circle", "In two columns", "In a table"], "The notice is enclosed in a box, along with its institution name, heading, date and signature.", ),
        M(1, "How many words does a notice usually have?", "About 50 words", ["About 150 words", "About 250 words", "About 400 words"], "A notice is short: the limit is about 50 words."),
        M(2, "Which opening line of the heading is correctly written?", "INTER-HOUSE QUIZ COMPETITION", ["Dear students, quiz competition", "Quiz competition is being held", "A notice for the students"], "The heading is a short title in capital letters, not a sentence or a greeting."),
        M(2, "Which is the correct order of a notice's format?", "Institution, NOTICE, date, heading, body, signature with designation", ["NOTICE, heading, body, date, institution name, then the signature with designation", "Date, institution, body, heading, NOTICE, signature", "Heading, institution, NOTICE, signature, date, body"], "The institution comes first, then NOTICE, the date, a heading, the body and finally the signature and designation."),
        M(2, "A student writes 'Dear students' and 'Thank you' in a notice. Why is this wrong?", "A notice is not a letter, so it has no greeting or closing", ["A notice must always be written in the first person singular for warmth", "A notice should always begin with a question", "A notice must end with an appeal to the reader"], "A notice is formal, brief and impersonal. It has no salutation or complimentary close."),
        M(3, "Which sentence suits the body of a notice?", "Students are informed that the library will remain closed on Monday.", ["Hey everyone, the library is going to be shut on Monday, so please plan well!", "I am sad to tell you that I will close the library.", "Will you please come to the library on Monday morning for a meeting?"], "A notice is formal and often uses the passive voice: 'Students are informed that...'.")
      ],
      written: []
    },
    "poster-making": {
      mcq: [
        M(1, "Where does the slogan or heading go on a poster?", "At the top, in bold capitals", ["At the bottom, in small letters", "In the middle, as a paragraph", "Just before the signature line"], "The slogan comes first at the top so that it catches the eye from a distance."),
        M(1, "Is a poster marked for drawing skill?", "No, a simple sketch or note about the picture is enough", ["Yes, the picture carries most of the marks, so it must be neat", "Yes, but only for colour work", "No, a poster must have no picture at all"], "Marks go to format, content and expression, not to artistic skill."),
        M(2, "What must always appear at the bottom of a poster?", "The issuing authority, such as 'Issued by: Eco Club'", ["A salutation such as 'Dear friends' followed by a short greeting", "A closing such as 'Yours faithfully'", "The name of the person who drew it"], "Every poster ends with the authority issuing it, for example a club or a school."),
        M(2, "Which of these is best for the text of an awareness poster?", "Donate blood, save lives", ["We request every respected citizen to kindly donate blood", "Blood donation is a very good habit for all of us", "It is said that people may donate blood one day"], "Short, punchy commands catch attention; long polite sentences do not suit a poster."),
        M(2, "What is the main difference between a notice and a poster?", "A notice is plain and formal; a poster is persuasive and eye-catching", ["A notice is full of slogans and pictures; a poster has only dates", "A notice is longer; a poster is a full essay", "A notice has pictures; a poster has none"], "A poster uses slogans, short lines and visuals to persuade, while a notice simply informs."),
        M(3, "Which poster slogan uses a memorable device (rhyme or alliteration)?", "Save water, save tomorrow", ["Water should be saved by everyone", "Please use water in the correct way", "Water is needed by all living things"], "'Save water, save tomorrow' repeats a structure and sounds memorable; the others are plain sentences.")
      ],
      written: []
    },
    "speech-writing": {
      mcq: [
        M(1, "What is the word limit for a speech at this level?", "120 to 150 words", ["20 to 50 words", "250 to 300 words", "400 to 500 words"], "A speech here is usually 120-150 words."),
        M(1, "How should a speech end?", "With a summary, a message or appeal, and thanks to the audience", ["With the writer's full postal address and the date of writing", "With a list of the books used", "With a request to reply soon"], "Conclude on a positive note and thank the audience."),
        M(2, "Which opening is most suitable for a school assembly speech?", "Good morning to our respected Principal, teachers and my dear friends.", ["Dear Sir, I am writing to you regarding the school assembly programme.", "By a Staff Reporter, Sunrise Public School", "Subject: Speech for the school assembly"], "A speech opens with a greeting to the audience, not a letter or an article format."),
        M(2, "Which feature makes writing sound like a speech?", "Addressing the audience with 'we' and 'you' and using rhetorical questions", ["Using headings and bullet points throughout the body of the speech", "Using many abbreviations to save space", "Using a byline and an address"], "A speech is meant to be heard, so it talks directly to the listeners."),
        M(2, "Which plan best organises a speech on a social problem?", "Problem, causes, effects, solutions", ["Solutions, address, date, subject", "Greeting, signature, heading, address", "Effects only, repeated three times"], "A clear sequence such as problem, causes, effects and solutions keeps the speech organised."),
        M(3, "How does a speech differ from a debate?", "A speech informs or inspires on a topic; a debate argues for or against a motion", ["A speech always needs a motion; a debate has no stand at all", "A speech must be written in a box; a debate in a table", "A speech is always longer than a debate by two pages"], "A debate must take a side on a motion, whereas a speech need not.")
      ],
      written: []
    },
    "debate-writing": {
      mcq: [
        M(1, "What should a debater do with the motion?", "Quote it exactly as it is given", ["Change it to suit their own side", "Leave it out of the introduction", "Rewrite it as a question"], "The motion is quoted exactly, followed by the speaker's stand."),
        M(1, "How many sides should a debater support?", "Only one, throughout the speech", ["Both sides, giving equal time to each", "One side first, then the other", "None, to stay neutral"], "A debate without a clear stand is weak; choose one side and keep to it."),
        M(2, "What is a rebuttal?", "An answer to the likely arguments of the other side", ["A list of the marks the speaker hopes to get", "A thanks given to the judges", "A summary of the whole motion"], "In the rebuttal the speaker counters what the opponents may argue."),
        M(2, "Which sentence is a good example of rebuttal language?", "My worthy opponents may argue that it is costly, but the benefits are greater.", ["My opponents are foolish and know nothing about this motion at all.", "I think both sides are right in their own way.", "Many people say different things about this motion."], "A debater attacks the argument politely, never the opponent personally."),
        M(2, "How should arguments be arranged in a debate?", "From strong to strongest, each with a reason and an example", ["From the weakest to none, without any examples or reasons", "In random order with no reasons", "Only one long paragraph of opinions"], "Build to the strongest point and support each argument with a reason and an everyday example."),
        M(3, "Which is a mistake in a debate written for a motion?", "Using invented statistics to sound convincing", ["Using linkers such as Firstly and Moreover", "Using a rhetorical question to sharpen a point", "Restating the stand in the conclusion"], "Use only facts you are sure of; never invent figures.")
      ],
      written: []
    },
    "were-not-afraid-to-die": {
      mcq: [
        M(1, "How is the narrator shown in the story?", "Calm, skilled and resourceful, working on despite injuries", ["Nervous, helpless and ready to give up after the first day", "Careless, lazy and unwilling to lead", "Angry, selfish and always blaming others"], "The narrator is a calm and resourceful leader who keeps going despite his injuries.", "characters"),
        M(2, "What is Jon's special role among the family members?", "He keeps up everyone's spirits", ["He hides his pain from everyone in the boat", "He pumps water for hours", "He steers the boat alone"], "Jon is brave beyond his years and keeps everyone cheerful, while Sue hides her pain.", "characters")
      ],
      written: [
        W(3, "Describe any two characters of the story and say what qualities they show.", "The narrator is the calm, skilled and resourceful leader of the family. He keeps working and guiding the others even though he is injured, which shows leadership and determination. Mary is brave and steady. She shares the work and keeps the family together, which shows courage and a sense of unity. Larry and Herb pump for hours without giving up, which shows hard work, and Sue and Jon show maturity beyond their age: Sue hides her pain and Jon lifts everyone's spirits.", "short", "characters")
      ]
    }
  });
})();
