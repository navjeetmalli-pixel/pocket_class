// Class 10 English: Grammar, Writing Skills and Literature (First Flight and Footprints without Feet).
// Format: see CONTENT_GUIDE.md. Summaries are original; no text is reproduced from the textbook.
StudyData.add(10, "english", {
  // What this content follows. match: "textbook" | "older-book" | "topic". Set reviewed to a date once a teacher has checked it.
  syllabus: {board: "CBSE", match: "textbook", books: ["First Flight", "Footprints without Feet"], note: "Grammar and writing, plus every lesson of First Flight and Footprints without Feet (summarised in our own words).", reviewed: false},
  chapters: [
    // ───────────────────────────── GRAMMAR ─────────────────────────────
    {
      id: "tenses",
      title: "Tenses",
      section: "Grammar",
      summary: "Using tenses accurately in longer sentences: perfect and perfect continuous forms, sequence of tenses, conditionals, and correcting tense errors in passages.",
      notes: [
        {
          heading: "Perfect or simple?",
          points: [
            "**Present perfect** links the past to now and has no stated past time: “The government has launched a new scheme.”",
            "**Simple past** is used with a finished time: “The scheme was launched in March.”",
            "**Past perfect** marks the earlier of two past actions: “By the time the fire brigade arrived, the shop had burnt down.”",
            "**Future perfect** shows completion before a future time: “By next March, I will have completed the course.”"
          ]
        },
        {
          heading: "Perfect continuous forms",
          points: [
            "**Present perfect continuous:** an action continuing up to now: “It has been raining since dawn.”",
            "**Past perfect continuous:** duration before a past moment: “The players had been practising for hours when the storm began.”",
            "**Future perfect continuous:** duration up to a future point: “By 2030, she will have been teaching for twenty years.”",
            "Use **since** with a point of time (since 2019, since Monday) and **for** with a period (for two years)."
          ]
        },
        {
          heading: "Sequence of tenses",
          points: [
            "If the main clause is in the past, the dependent clause is usually in a past form too: “She said that she **was** busy.” “I knew that he **would** help.”",
            "Exception: universal truths and habitual facts stay in the present: “Our teacher said that light **travels** faster than sound.”",
            "Purpose clauses follow the main verb: “He works hard so that he **may** succeed.” / “He worked hard so that he **might** succeed.”",
            "With **no sooner…than** and **hardly/scarcely…when**, use the past perfect first and the simple past second: “No sooner had the bell rung than the students rushed out.”"
          ]
        },
        {
          heading: "Tenses in conditional sentences",
          points: [
            "**Type 1 (likely):** if + simple present, will + V1: “If it rains, the match will be cancelled.”",
            "**Type 2 (unlikely or imaginary present):** if + simple past, would + V1: “If I had wings, I would fly.” Use **were** for all persons: “If I were you, I would apologise.”",
            "**Type 3 (unreal past):** if + had + V3, would have + V3: “If you had left earlier, you would have caught the train.”",
            "Never use ‘will’ in the if-clause: ✗ “If it will rain…” ✓ “If it rains…”"
          ]
        },
        {
          heading: "Editing tense errors in a passage",
          points: [
            "Read the whole passage first and decide its **main time frame**; most errors are verbs that slip out of it.",
            "Check each verb against its time marker and its subject (has/have, was/were).",
            "Check the form after helping verbs: did + V1, has/had + V3, is/was + V-ing or V3.",
            "Write the incorrect word and its correction exactly as the question format asks."
          ]
        }
      ],
      formulas: [
        "Present perfect: has/have + V3",
        "Present perfect continuous: has/have + been + V-ing",
        "Past perfect: had + V3",
        "Past perfect continuous: had + been + V-ing",
        "Future perfect: will/shall + have + V3",
        "Future perfect continuous: will/shall + have + been + V-ing",
        "Conditional type 1: If + simple present, will + V1",
        "Conditional type 2: If + simple past (were), would + V1",
        "Conditional type 3: If + had + V3, would have + V3",
        "No sooner + had + subject + V3 + than + V2"
      ],
      terms: [
        { term: "Sequence of tenses", meaning: "The rule that a past-tense main clause is normally followed by a past form in the dependent clause." },
        { term: "Future perfect", meaning: "will have + V3: an action that will be complete before a stated future time." },
        { term: "Conditional sentence", meaning: "A sentence with an if-clause (the condition) and a main clause (the result)." },
        { term: "Type 3 conditional", meaning: "If + had + V3, would have + V3: an imagined past that did not happen." },
        { term: "Time frame", meaning: "The overall time (past, present or future) in which a passage is set." }
      ],
      examples: [
        {
          q: "Fill in the correct forms: “By the time the ambulance ___ (arrive), the neighbours ___ (already take) the injured man to hospital.”",
          steps: [
            "Both actions are in the past.",
            "Taking the man to hospital happened first → past perfect: had already taken.",
            "The ambulance arriving happened later → simple past: arrived."
          ],
          answer: "By the time the ambulance arrived, the neighbours had already taken the injured man to hospital."
        },
        {
          q: "Edit the passage (one error in each line): “Last month our school organise a science exhibition. / Students have displayed many working models. / The chief guest praise their efforts.”",
          steps: [
            "Time frame: “Last month” sets the whole passage in the past.",
            "Line 1: organise → organised (simple past).",
            "Line 2: have displayed → displayed (no present perfect with a finished past time).",
            "Line 3: praise → praised."
          ],
          answer: "organise → organised; have displayed → displayed; praise → praised"
        }
      ],
      qa: [
        {
          q: "Explain the use of the future perfect tense with an example.",
          a: "The future perfect (**will have + V3**) shows an action that will be **completed before a particular time in the future**. “By the time you reach home, I will have cooked dinner.” The cooking will be over before you arrive."
        },
        {
          q: "What tenses are used in a Type 3 conditional, and what does it express?",
          a: "A Type 3 conditional uses **if + had + V3** in the condition and **would have + V3** in the result. It imagines a different past that did not happen, often expressing regret: “If I had studied regularly, I would have scored better.”"
        },
        {
          q: "Correct the sentence and give the rule: “If I will get the chance, I will visit Ladakh.”",
          a: "“If I **get** the chance, I will visit Ladakh.” In a Type 1 conditional, the if-clause takes the **simple present**, not ‘will’; only the main clause uses will + V1."
        }
      ],
      quiz: [
        {
          q: "Fill in: “By the time you arrive tomorrow, we ___ dinner.”",
          options: ["had finished", "will have finished", "have finished", "finished"],
          answer: 1,
          explain: "An action completed before a future time takes the **future perfect**: will have finished."
        },
        {
          q: "Fill in: “If I had known about the traffic jam, I ___ earlier.”",
          options: ["would leave", "will leave", "had left", "would have left"],
          answer: 3,
          explain: "Type 3 conditional: if + had + V3, **would have + V3**."
        },
        {
          q: "Fill in: “By next June, she ___ in this company for twelve years.”",
          options: ["will have been working", "has been working", "is working", "had been working"],
          answer: 0,
          explain: "Duration up to a future point (by next June) takes the **future perfect continuous**."
        },
        {
          q: "Fill in: “No sooner had we reached the stadium than it ___ to rain.”",
          options: ["begins", "had begun", "began", "has begun"],
          answer: 2,
          explain: "No sooner + past perfect is followed by **than + simple past**: began."
        },
        {
          q: "Identify the correction: “He told me that he is going to Pune the following week.”",
          options: ["told → said", "is → was", "going → gone", "following → previous"],
          answer: 1,
          explain: "Sequence of tenses: a past reporting verb (told) needs a past form, so **is → was**."
        },
        {
          q: "Fill in: “I ___ her since we left school.”",
          options: ["did not see", "am not seeing", "do not see", "have not seen"],
          answer: 3,
          explain: "“Since” with a situation continuing up to now takes the **present perfect**: have not seen."
        },
        {
          q: "Fill in: “If it rains tomorrow, the match ___ .”",
          options: ["will be cancelled", "would have been cancelled", "is cancel", "had been cancelled"],
          answer: 0,
          explain: "Type 1 conditional: if + simple present, **will + V1** (here in the passive: will be cancelled)."
        }
      ]
    },

    {
      id: "modals",
      title: "Modals",
      section: "Grammar",
      summary: "Advanced uses of modals: degrees of certainty, perfect modals for the past, past habits, and polite or formal expressions.",
      notes: [
        {
          heading: "Quick recap of functions",
          points: [
            "Ability: can, could, be able to. Permission: may, can, could. Possibility: may, might, could.",
            "Obligation: must, have to. Advice: should, ought to, had better. Prohibition: must not. No necessity: need not.",
            "Modals are followed by V1 and do not change with the subject: “She can”, never “She cans”.",
            "**ought** always takes **to**: “You ought to apologise.” **need** and **dare** act as modals mainly in negatives and questions: “You needn't wait.”"
          ]
        },
        {
          heading: "Degrees of certainty about the present",
          points: [
            "**must** = the speaker is almost sure it is true: “She has worked all night; she must be exhausted.”",
            "**can't / cannot** = the speaker is sure it is not true: “That can't be Arjun; he is in Delhi.”",
            "**may / might / could** = it is possible: “The keys might be in the car.”",
            "Do not use “mustn't” for a negative guess: ✗ “He mustn't be at home.” ✓ “He can't be at home.”"
          ]
        },
        {
          heading: "Perfect modals: modal + have + V3",
          points: [
            "**should have + V3** = the right thing was not done (regret or criticism): “You should have told me earlier.”",
            "**must have + V3** = a confident guess about the past: “The road is wet; it must have rained.”",
            "**could have + V3** = it was possible but did not happen: “You could have won if you had practised.”",
            "**might/may have + V3** = perhaps it happened: “She may have missed the bus.”",
            "**needn't have + V3** = it was done, but it was unnecessary: “You needn't have bought flowers; we already had some.”",
            "**can't have + V3** = sure it did not happen: “He can't have written this; he was in hospital.”"
          ]
        },
        {
          heading: "Past habits and polite forms",
          points: [
            "**used to + V1** for past habits and states: “We used to live in Shillong.”",
            "**would + V1** for repeated past actions only, not states: “Every evening, Grandpa would tell us stories.”",
            "Polite requests: “Would you mind closing the door?” “Could you help me?”",
            "Offers and suggestions: “Shall I carry that for you?” “Shall we begin?”"
          ]
        },
        {
          heading: "Common errors",
          points: [
            "✗ “You need not to worry.” ✓ “You need not worry.” (or “You don't need to worry.”)",
            "✗ “He must has gone.” ✓ “He must have gone.”",
            "✗ “I can able to swim.” ✓ “I can swim.” / “I am able to swim.”",
            "✗ “You should went.” ✓ “You should have gone.”"
          ]
        }
      ],
      formulas: [
        "Modal + V1: present or future meaning (“It may rain.”)",
        "Modal + be + V-ing: action in progress (“He must be sleeping.”)",
        "Modal + have + V3: past meaning (“She must have left.”)",
        "must = sure it is true; can't = sure it is not; may / might / could = possible",
        "needn't have + V3 = done but unnecessary; didn't need to + V1 = not necessary (usually not done)"
      ],
      terms: [
        { term: "Deduction", meaning: "A logical conclusion drawn from evidence: must (sure), can't (sure not), might (possible)." },
        { term: "Perfect modal", meaning: "Modal + have + V3, used to talk about the past: should have done, must have gone." },
        { term: "should have + V3", meaning: "Expresses regret or criticism about something that was not done in the past." },
        { term: "needn't have + V3", meaning: "Shows that something was done although it was not necessary." },
        { term: "used to", meaning: "Expresses past habits and states that no longer exist." }
      ],
      examples: [
        {
          q: "Rewrite using a suitable modal: “I am sure he forgot the meeting.”",
          steps: [
            "The sentence is a confident guess about a past event.",
            "Certainty about the past = must have + V3.",
            "forgot → must have forgotten."
          ],
          answer: "He must have forgotten the meeting."
        },
        {
          q: "Correct the error: “You should told me about the test; I would have prepared.”",
          steps: [
            "The speaker regrets something that did not happen in the past.",
            "Past regret or criticism = should have + V3.",
            "should told → should have told."
          ],
          answer: "You should have told me about the test; I would have prepared."
        }
      ],
      qa: [
        {
          q: "Differentiate between “must have” and “should have” with examples.",
          a: "**Must have + V3** expresses a confident guess about the past: “The lights are off; they must have gone out.” **Should have + V3** expresses regret or criticism about something that was not done: “You should have locked the door.”"
        },
        {
          q: "What is the difference between “You needn't have come” and “You didn't need to come”?",
          a: "“You **needn't have come**” means you came, but it was unnecessary. “You **didn't need to come**” simply says it was not necessary, and usually suggests that you did not come."
        },
        {
          q: "Why is “That mustn't be true” incorrect for showing negative certainty?",
          a: "**Must not** expresses prohibition (something is not allowed). For a confident negative guess, English uses **can't**: “That can't be true.”"
        }
      ],
      quiz: [
        {
          q: "Fill in: “The streets are wet. It ___ have rained last night.”",
          options: ["should", "must", "need", "ought"],
          answer: 1,
          explain: "A confident guess about the past from evidence = **must have + V3**."
        },
        {
          q: "Fill in: “You ___ have told me about the test; I would have prepared for it.”",
          options: ["must", "need", "shall", "should"],
          answer: 3,
          explain: "Regret or criticism about something not done = **should have + V3**."
        },
        {
          q: "Fill in: “That ___ be Ananya at the door; she has gone to Chennai.”",
          options: ["can't", "must", "should", "will"],
          answer: 0,
          explain: "The speaker is sure it is not Ananya, so the negative deduction **can't** is used."
        },
        {
          q: "Fill in the modal of past habit: “When we were children, we ___ play cricket every evening.”",
          options: ["must", "would", "ought", "shall"],
          answer: 1,
          explain: "**would + V1** describes repeated actions in the past."
        },
        {
          q: "Choose the correct sentence.",
          options: ["You needn't to worry about the fee.", "You needn't worrying about the fee.", "You needn't worry about the fee.", "You needn't worried about the fee."],
          answer: 2,
          explain: "As a modal, need not is followed by **V1 without ‘to’**: needn't worry."
        },
        {
          q: "Fill in: “I ___ have carried an umbrella; it didn't rain at all.”",
          options: ["mustn't", "can't", "shan't", "needn't"],
          answer: 3,
          explain: "The umbrella was carried but turned out to be unnecessary: **needn't have + V3**."
        }
      ]
    },

    {
      id: "subject-verb-agreement",
      title: "Subject–Verb Agreement",
      section: "Grammar",
      summary: "Applying agreement rules in tricky cases: collective nouns, inverted sentences, ‘there is/are’, titles and amounts, ‘one of’, and spotting concord errors in passages.",
      notes: [
        {
          heading: "Core rules recap",
          points: [
            "Find the true subject and ignore phrases in between: “The list of items **is** on the desk.”",
            "each, every, either, neither, everyone, no one → singular verb.",
            "either…or, neither…nor, not only…but also, or, nor → the verb agrees with the **nearer** subject.",
            "as well as, along with, together with, accompanied by, in addition to → the verb agrees with the **first** subject."
          ]
        },
        {
          heading: "Collective nouns and quantities",
          points: [
            "Collective noun as one unit → singular: “The committee **has** approved the plan.”",
            "Members acting individually → plural: “The committee **are** divided in their opinions.”",
            "Sums of money, distances and periods taken as a whole → singular: “Ten thousand rupees **is** a lot for a phone.”",
            "**A lot of / plenty of / some of / all of** → the verb follows the noun after ‘of’: “A lot of water **was** wasted.” “A lot of students **were** absent.”"
          ]
        },
        {
          heading: "Inverted sentences and ‘there’",
          points: [
            "In sentences starting with **there** or **here**, the verb agrees with the noun that follows: “There **are** many mistakes in your essay.” “Here **comes** the bus.”",
            "In inverted sentences, find the subject after the verb: “On the table **lie** two old books.”",
            "In questions, too, find the real subject: “Where **are** my glasses?”"
          ]
        },
        {
          heading: "Special nouns",
          points: [
            "Titles of books and films and names of countries are singular even if plural in form: “Gulliver's Travels **is** a satire.” “The United States **is** a large country.”",
            "Nouns used only in the plural, such as scissors, trousers, cattle and police, take a plural verb: “The police **have** arrested the thief.”",
            "But **a pair of** takes a singular verb: “A pair of shoes **is** missing.”",
            "**The + adjective** for a class of people is plural: “The rich **are** not always happy.”"
          ]
        },
        {
          heading: "Relative clauses and ‘one of’",
          points: [
            "In a relative clause, the verb agrees with the noun that who/which/that refers to: “These are the books that **were** lost.”",
            "**One of + plural noun** as the subject → singular verb: “One of my friends **lives** in Ooty.”",
            "**More than one + singular noun** → singular verb: “More than one student **was** late.”"
          ]
        }
      ],
      formulas: [
        "Nearer-subject rule: either…or / neither…nor / not only…but also / or / nor",
        "First-subject rule: as well as / along with / together with / accompanied by",
        "There is + singular noun; There are + plural noun",
        "One of + plural noun + singular verb",
        "The + adjective (the poor, the rich) + plural verb",
        "A pair of + plural noun + singular verb"
      ],
      terms: [
        { term: "Concord", meaning: "Agreement between subject and verb in number and person." },
        { term: "Inverted sentence", meaning: "A sentence in which the verb comes before the subject: “Here comes the train.”" },
        { term: "Noun of quantity", meaning: "An amount of money, time or distance treated as one whole: “Five years is a long time.”" },
        { term: "Collective noun", meaning: "A noun for a group (team, jury, committee); singular when acting as one, plural when members act separately." },
        { term: "Antecedent", meaning: "The noun that a relative pronoun (who, which, that) refers to; the verb agrees with it." }
      ],
      examples: [
        {
          q: "Correct the error: “One of the windows in our classroom are broken.”",
          steps: [
            "The subject is “One”, not “windows” or “classroom”.",
            "“One” is singular, so the verb must be singular.",
            "are → is."
          ],
          answer: "One of the windows in our classroom is broken."
        },
        {
          q: "Fill in the blanks: “There ___ (is/are) a box of old letters in the cupboard, and on top of it ___ (lie/lies) two photo albums.”",
          steps: [
            "First clause: after ‘there’, find the real subject: “a box” (singular); ‘of old letters’ only describes it → is.",
            "Second clause is inverted: the subject is “two photo albums” (plural) → lie."
          ],
          answer: "There is a box of old letters in the cupboard, and on top of it lie two photo albums."
        }
      ],
      qa: [
        {
          q: "Explain the rule for ‘not only…but also’ with an example.",
          a: "With **not only…but also**, the verb agrees with the subject **nearer** to it. “Not only the students but also the principal **was** present.” Here ‘the principal’ is nearer, so the verb is singular."
        },
        {
          q: "Why do we say “The police have arrived” but “A pair of scissors is on the table”?",
          a: "**Police** is always used as a plural noun, so it takes a plural verb. In “a pair of scissors”, the subject is **a pair** (one unit), so the verb is singular."
        },
        {
          q: "Correct and explain: “Gulliver's Travels are an interesting book.”",
          a: "“Gulliver's Travels **is** an interesting book.” The title of a book names **one** work, so it takes a singular verb even though ‘Travels’ is plural in form."
        }
      ],
      quiz: [
        {
          q: "Fill in: “Not only the students but also the principal ___ worried about the results.”",
          options: ["were", "are", "was", "have"],
          answer: 2,
          explain: "With not only…but also, the verb agrees with the nearer subject, “the principal” (singular): **was**."
        },
        {
          q: "Fill in: “There ___ a lot of mistakes in your essay.”",
          options: ["are", "is", "was", "has"],
          answer: 0,
          explain: "The real subject is “a lot of mistakes” (plural), so the verb is **are**."
        },
        {
          q: "Fill in: “Gulliver's Travels ___ written by Jonathan Swift.”",
          options: ["were", "was", "are", "have"],
          answer: 1,
          explain: "A book title is singular: **was** written."
        },
        {
          q: "Fill in: “Ten thousand rupees ___ too much for this old phone.”",
          options: ["are", "were", "have", "is"],
          answer: 3,
          explain: "A sum of money taken as one amount takes a singular verb: **is**."
        },
        {
          q: "Fill in: “The rich ___ not always happy.”",
          options: ["is", "was", "are", "has"],
          answer: 2,
          explain: "‘The + adjective’ means a class of people (rich people), so it is plural: **are**."
        },
        {
          q: "Identify the correction: “Neither of the two answers are correct.”",
          options: ["answers → answer", "are → is", "correct → corrected", "two → three"],
          answer: 1,
          explain: "The subject is the singular word that begins the sentence, not “answers”, so the verb must be singular: **are → is**."
        },
        {
          q: "Fill in: “More than one student ___ late today.”",
          options: ["were", "are", "have been", "was"],
          answer: 3,
          explain: "‘More than one’ + singular noun takes a singular verb: **was**."
        }
      ]
    },

    {
      id: "reported-speech",
      title: "Reported Speech",
      section: "Grammar",
      summary: "Reporting statements, questions, commands, requests, exclamations and suggestions accurately, including dialogues of the kind set in board exams.",
      notes: [
        {
          heading: "Choosing the right reporting verb",
          points: [
            "Statements: said, told, replied, added, informed, explained.",
            "Questions: asked, enquired, wanted to know.",
            "Commands and requests: ordered, commanded, requested, begged, advised, urged, warned.",
            "Exclamations: exclaimed with joy, sorrow or surprise. Suggestions: suggested, proposed.",
            "Greetings and thanks: wished (good morning), thanked, bade (goodbye)."
          ]
        },
        {
          heading: "Commands, requests and advice",
          points: [
            "Pattern: reporting verb + object + (not) to + V1: “Don't be late,” the coach told us → The coach warned us not to be late.",
            "Drop ‘please’ and use requested: “Please lend me your notes,” he said → He requested me to lend him my notes.",
            "Advice with should: “You should exercise daily,” the doctor said to me → The doctor advised me to exercise daily.",
            "Use ‘ordered’ for a strong command from someone in authority."
          ]
        },
        {
          heading: "Questions and dialogues",
          points: [
            "Yes/No questions: asked + if/whether + statement order. Wh-questions: asked + wh-word + statement order.",
            "Short answers: Yes → replied that he had / replied in the affirmative; No → replied that she had not / replied in the negative.",
            "In a dialogue, report each speaker in turn and join ideas with ‘and added that’, ‘but’ or ‘so’.",
            "Board questions often give a half-finished report: read the given words carefully and continue in the same tense."
          ]
        },
        {
          heading: "Exclamations, suggestions and modals",
          points: [
            "Exclamations become statements: “How beautiful the sunset is!” she said → She exclaimed that the sunset was very beautiful.",
            "‘Let's’ for a suggestion → suggested that + they/we + should + V1: “Let's go for a walk,” said Riya → Riya suggested that they should go for a walk.",
            "Modal changes: will → would, can → could, may → might, shall → should; must → had to (for obligation).",
            "could, would, should, might and ought to do not change.",
            "Interjections (Alas, Hurrah, Oh) are dropped; show the feeling in the reporting verb: exclaimed sadly, exclaimed with joy."
          ]
        }
      ],
      formulas: [
        "Command/request: told / ordered / requested / advised + object + (not) to + V1",
        "Question: asked / enquired + if/whether or wh-word + subject + verb (no question mark)",
        "Exclamation: exclaimed with joy / sorrow + that + statement",
        "Suggestion with Let's: suggested + that + they/we should + V1",
        "will → would, can → could, may → might, must → had to; could, would, should, might unchanged"
      ],
      terms: [
        { term: "Reporting verb", meaning: "The verb that introduces the reported words: said, asked, requested, exclaimed, suggested." },
        { term: "Statement word order", meaning: "Subject before verb (he was), used in reported questions instead of question order (was he)." },
        { term: "Exclamatory sentence", meaning: "A sentence expressing strong feeling, reported with ‘exclaimed’." },
        { term: "Imperative sentence", meaning: "A command or request, reported with to + V1 or not to + V1." }
      ],
      examples: [
        {
          q: "Report the dialogue: Teacher: “Have you completed your project?” Ravi: “No, ma'am. I need two more days.”",
          steps: [
            "Line 1 is a yes/no question → asked + if; have completed → had completed; you → he; your → his.",
            "Line 2 is a respectful negative reply → replied respectfully that he had not completed it; I need → he needed.",
            "Join the two reports in order."
          ],
          answer: "The teacher asked Ravi if he had completed his project. Ravi replied respectfully that he had not completed it and that he needed two more days."
        },
        {
          q: "Report: “Let's clean the park on Sunday,” said Aisha to her friends.",
          steps: [
            "‘Let's’ shows a suggestion → suggested to her friends.",
            "Use that + they should + V1.",
            "‘On Sunday’ names a day rather than a time word like today or tomorrow, so it can stay."
          ],
          answer: "Aisha suggested to her friends that they should clean the park on Sunday."
        }
      ],
      qa: [
        {
          q: "How are exclamatory sentences reported? Give an example.",
          a: "The reporting verb becomes **exclaimed** (with joy, sorrow, surprise and so on), the exclamation is turned into a **statement** with ‘that’, and ‘what’ or ‘how’ is replaced by words like ‘very’ or ‘great’. “What a clever idea!” said Om → Om exclaimed that it was a very clever idea."
        },
        {
          q: "Report: The doctor said to the patient, “You should avoid oily food.” Why is ‘advised’ a better reporting verb here?",
          a: "**The doctor advised the patient to avoid oily food.** The doctor is giving advice for the patient's good, so ‘advised’ conveys the purpose better than ‘said’, and the advice becomes **to + V1**."
        }
      ],
      quiz: [
        {
          q: "Choose the correct reported form: He said to me, “Please lend me your notes.”",
          options: ["He requested me to lend him my notes.", "He requested me to lend me his notes.", "He requested to me that lend him my notes.", "He ordered me please lend him my notes."],
          answer: 0,
          explain: "A request → requested + object + **to + V1**; me → him, your → my."
        },
        {
          q: "Choose the correct reported form: The captain said, “Let us take a break.”",
          options: ["The captain said let us take a break.", "The captain suggested that they should take a break.", "The captain ordered us that let us take a break.", "The captain told that they take a break."],
          answer: 1,
          explain: "‘Let us’ expresses a suggestion: **suggested that they should + V1**."
        },
        {
          q: "Choose the correct reported form: She said, “What a lovely garden this is!”",
          options: ["She asked that it was a very lovely garden.", "She told that it is a very lovely garden.", "She exclaimed that it was a very lovely garden.", "She exclaimed that what a lovely garden this is."],
          answer: 2,
          explain: "An exclamation → **exclaimed that** + statement, with backshift (is → was) and ‘what a’ → ‘a very’."
        },
        {
          q: "Choose the correct reported form: The doctor said to the patient, “Avoid oily food.”",
          options: ["The doctor advised the patient to avoided oily food.", "The doctor advised to the patient that avoid oily food.", "The doctor asked the patient whether he must avoid oily food.", "The doctor advised the patient to avoid oily food."],
          answer: 3,
          explain: "Advice → advised + object + **to + V1**."
        },
        {
          q: "Complete the report: Ravi said to Asha, “Have you finished the project?” → Ravi asked Asha ___",
          options: ["if had she finished the project.", "if she had finished the project.", "that she has finished the project?", "did she finish the project."],
          answer: 1,
          explain: "Yes/No question → **if** + statement order (she had finished), no question mark."
        },
        {
          q: "Choose the correct reported form: He said, “I may visit Jaipur next month.”",
          options: ["He said that I might visit Jaipur the following month.", "He said that he might visited Jaipur the following month.", "He said that he might visit Jaipur the following month.", "He said that he might visit Jaipur the previous month."],
          answer: 2,
          explain: "I → he, may → might, next month → **the following month**."
        }
      ]
    },

    {
      id: "determiners",
      title: "Determiners",
      section: "Grammar",
      summary: "Using articles and quantifiers precisely, including when to omit articles, few / a few / the few, little / a little / the little, each / every, fewer / less and enough.",
      notes: [
        {
          heading: "Articles: special uses",
          points: [
            "**the** with oceans, seas, rivers, mountain ranges, deserts, groups of islands and holy books: the Indian Ocean, the Thar, the Andamans, the Ramayana.",
            "**the** with superlatives, ordinals and unique things: the best, the first, the moon.",
            "**the + adjective** for a class of people: the poor, the old, the brave.",
            "**the + comparative … the + comparative**: “The harder you work, the better you score.”"
          ]
        },
        {
          heading: "When no article is used",
          points: [
            "Before languages, school subjects, meals, games and most names of people and cities: “She speaks English.” “We play cricket after lunch.”",
            "Before school, hospital, prison and bed when used for their main purpose: “He goes to school by bus.” But: “The parents went to the school to meet the principal.”",
            "Before uncountable and plural nouns used in a general sense: “Honesty is the best policy.” “Dogs are loyal.”",
            "Before the names of single mountains: Mount Everest, Kanchenjunga."
          ]
        },
        {
          heading: "Few, little and their forms",
          points: [
            "**few** (countable) / **little** (uncountable) = hardly any (negative): “There is little hope of his recovery.”",
            "**a few / a little** = some, a small amount (positive): “A few volunteers stayed back to help.”",
            "**the few / the little** = all of the small amount that exists: “He spent the little money he had on books.”",
            "**fewer** goes with countable nouns and **less** with uncountable nouns: fewer cars, less traffic."
          ]
        },
        {
          heading: "Each, every, either, enough",
          points: [
            "**each** and **either** can refer to two; **every** refers to three or more seen as a group: “Each side of the road was lined with trees.”",
            "Each, every and either take a singular noun and a singular verb: “Every child deserves love.”",
            "**enough** comes before a noun but after an adjective: “enough chairs”, “old enough”.",
            "**several** (more than two, but not many) and **all** go with plural countable nouns: several reasons, all students."
          ]
        }
      ],
      formulas: [
        "the + superlative / ordinal / unique noun",
        "No article + language, subject, meal, game",
        "few / a few / the few + countable plural noun",
        "little / a little / the little + uncountable noun",
        "fewer + countable noun; less + uncountable noun",
        "enough + noun; adjective + enough"
      ],
      terms: [
        { term: "Definite article", meaning: "‘the’, used for a particular or already known person or thing." },
        { term: "Indefinite article", meaning: "‘a’ or ‘an’, used for any one of a kind or something mentioned for the first time." },
        { term: "Zero article", meaning: "Using no article, e.g. before languages, meals, games and general plural nouns." },
        { term: "The little", meaning: "All of the small amount that exists: “She gave the little food she had to the stray dog.”" },
        { term: "Fewer vs less", meaning: "Fewer is used with countable nouns (fewer mistakes); less with uncountable nouns (less sugar)." }
      ],
      examples: [
        {
          q: "Fill in the blanks with suitable articles: “___ Sahara is ___ largest hot desert in ___ world.”",
          steps: [
            "Names of deserts take ‘the’ → The Sahara.",
            "A superlative (largest) takes ‘the’ → the largest.",
            "‘World’ is unique → the world."
          ],
          answer: "The Sahara is the largest hot desert in the world."
        },
        {
          q: "Correct the error: “There were less visitors at the fair this year.”",
          steps: [
            "“Visitors” is a countable plural noun.",
            "“Less” is used with uncountable nouns.",
            "With countable nouns, use “fewer”."
          ],
          answer: "There were fewer visitors at the fair this year."
        }
      ],
      qa: [
        {
          q: "Explain the difference between ‘little’, ‘a little’ and ‘the little’.",
          a: "All three go with uncountable nouns. **Little** means hardly any (negative): “There is little milk left.” **A little** means some (positive): “Add a little salt.” **The little** means all of the small amount there is: “She gave the little water she had to the thirsty child.”"
        },
        {
          q: "When is no article used before a noun? Give two examples.",
          a: "No article is used before **languages, school subjects, meals and games**, and before nouns used in a general sense: “He speaks Tamil.” “We had dinner and then played chess.”"
        }
      ],
      quiz: [
        {
          q: "Choose the correct sentence.",
          options: ["She speaks the English fluently.", "She speaks English fluently.", "She speaks an English fluently.", "She speaks a English fluently."],
          answer: 1,
          explain: "Names of languages take **no article**."
        },
        {
          q: "Fill in: “He spent ___ little money he had on books.”",
          options: ["the", "a", "much", "few"],
          answer: 0,
          explain: "**The little** means all of the small amount he had."
        },
        {
          q: "Fill in: “There is ___ hope of his recovery; the doctors have almost given up.”",
          options: ["a few", "few", "a little", "little"],
          answer: 3,
          explain: "Hope is uncountable, and the meaning is negative (hardly any), so **little** fits."
        },
        {
          q: "Fill in: “___ Indian Ocean lies to the south of India.”",
          options: ["An", "A", "The", "Some"],
          answer: 2,
          explain: "Names of oceans take **the**."
        },
        {
          q: "Fill in: “There were ___ cars on the road today than yesterday.”",
          options: ["less", "fewer", "little", "much"],
          answer: 1,
          explain: "Cars are countable, so the comparative is **fewer**, not less."
        },
        {
          q: "Fill in: “Is this bag light ___ for a child to carry?”",
          options: ["enough", "much", "many", "few"],
          answer: 0,
          explain: "**Enough** comes after an adjective: light enough."
        },
        {
          q: "Fill in: “He is ___ European, but he speaks Hindi fluently.”",
          options: ["an", "many", "a", "much"],
          answer: 2,
          explain: "“European” begins with a “yoo” (consonant) sound, so it takes **a**."
        }
      ]
    },

    {
      id: "active-passive-voice",
      title: "Active and Passive Voice",
      section: "Grammar",
      summary: "Changing harder sentences between active and passive voice: questions, commands, modals, sentences with two objects, impersonal passives and prepositions other than ‘by’.",
      notes: [
        {
          heading: "Recap: the passive formula",
          points: [
            "Object → subject; ‘be’ in the correct tense; main verb → V3; subject → by + object (optional).",
            "The tense must not change during conversion: a present continuous sentence stays present continuous.",
            "Perfect continuous tenses and intransitive verbs are not changed into the passive."
          ]
        },
        {
          heading: "Questions",
          points: [
            "Yes/No questions: helping verb + new subject + (been/being) + V3? “Did she invite you?” → “Were you invited by her?”",
            "Wh-questions: the wh-word stays first: “Why did he break the rule?” → “Why was the rule broken by him?”",
            "‘Who’ becomes **by whom**: “Who wrote this poem?” → “By whom was this poem written?”",
            "‘What’ asking about the object: “What did you buy?” → “What was bought by you?”"
          ]
        },
        {
          heading: "Commands and requests",
          points: [
            "Use **Let + object + be + V3**: “Close the door.” → “Let the door be closed.”",
            "Polite requests use ‘You are requested to…’: “Please help me.” → “You are requested to help me.”",
            "Negative commands: “Don't touch the wire.” → “Let the wire not be touched.” or “You are warned not to touch the wire.”"
          ]
        },
        {
          heading: "Two objects, modals and impersonal passives",
          points: [
            "Two objects: either can become the subject: “The teacher gave Rohan a prize.” → “Rohan was given a prize by the teacher.” / “A prize was given to Rohan by the teacher.”",
            "Modals: modal + be + V3: “We should protect wildlife.” → “Wildlife should be protected.”",
            "Impersonal passive: “People say that he is honest.” → “It is said that he is honest.” / “He is said to be honest.”",
            "Future perfect: will have been + V3: “They will have finished the bridge by May.” → “The bridge will have been finished by May.”"
          ]
        },
        {
          heading: "Prepositions other than ‘by’",
          points: [
            "known **to**: “He is known to everyone in the town.”",
            "filled **with**, covered **with**: “The jar is filled with honey.”",
            "interested **in**: “She is interested in music.”",
            "pleased **with**; made **of** (material): “The ring is made of gold.”"
          ]
        }
      ],
      formulas: [
        "Passive = object + be (same tense) + V3 + by + agent",
        "Command: Let + object + be + V3",
        "Request: You are requested to + V1",
        "Question with who: By whom + be + subject + V3?",
        "Modal passive: modal + be + V3; perfect modal passive: modal + have been + V3",
        "Impersonal: It is said / believed that… or Subject + is said to + V1"
      ],
      terms: [
        { term: "Agent", meaning: "The doer of the action in a passive sentence, usually after ‘by’." },
        { term: "Impersonal passive", meaning: "A passive beginning with ‘It is said / believed / reported that…’, used when the doer is people in general." },
        { term: "Indirect object", meaning: "The person who receives something: in “gave Rohan a prize”, Rohan is the indirect object." },
        { term: "Direct object", meaning: "The thing acted upon: in “gave Rohan a prize”, the prize is the direct object." }
      ],
      examples: [
        {
          q: "Change into the passive: “Who invented the telephone?”",
          steps: [
            "The object “the telephone” becomes the subject.",
            "‘Who’ becomes ‘By whom’ and comes first.",
            "The tense is simple past → was + V3: was invented.",
            "Keep the question mark."
          ],
          answer: "By whom was the telephone invented?"
        },
        {
          q: "Change into the passive: “Please submit the forms by Friday.”",
          steps: [
            "It is a polite request, so begin with ‘You are requested to’.",
            "Keep the rest of the sentence with to + V1.",
            "Alternative for a plain command: Let + object + be + V3."
          ],
          answer: "You are requested to submit the forms by Friday. (Or: Let the forms be submitted by Friday.)"
        }
      ],
      qa: [
        {
          q: "How is an imperative sentence changed into the passive voice? Give examples.",
          a: "For commands, use **Let + object + be + V3**: “Open the window.” → “Let the window be opened.” For polite requests, use **You are requested to**: “Please keep quiet.” → “You are requested to keep quiet.”"
        },
        {
          q: "Why is the passive voice common in news reports and notices?",
          a: "In news and notices, **what happened** matters more than who did it, or the doer is unknown or obvious: “A new metro line was inaugurated yesterday.” The passive also sounds more **formal and objective**."
        }
      ],
      quiz: [
        {
          q: "Choose the passive form of: “Who wrote this poem?”",
          options: ["Who was this poem written?", "By whom this poem was written?", "By whom was this poem written?", "By whom was this poem wrote?"],
          answer: 2,
          explain: "‘Who’ → **By whom**, followed by question order (was this poem) and V3 (written)."
        },
        {
          q: "Choose the passive form of: “Close the door.”",
          options: ["Let the door be closed.", "Let the door is closed.", "Let the door closed.", "Let the door be close."],
          answer: 0,
          explain: "Commands become **Let + object + be + V3**."
        },
        {
          q: "Choose the passive form of: “Did the chef cook the rice?”",
          options: ["Was the rice cook by the chef?", "Did the rice cooked by the chef?", "Has the rice been cooked by the chef?", "Was the rice cooked by the chef?"],
          answer: 3,
          explain: "Simple past question → **Was** + subject + V3. The tense must not change to present perfect."
        },
        {
          q: "Which is a correct passive form of: “The teacher gave Rohan a prize.”?",
          options: ["Rohan is given a prize by the teacher.", "Rohan was given a prize by the teacher.", "A prize was gave to Rohan by the teacher.", "Rohan was gave a prize by the teacher."],
          answer: 1,
          explain: "Simple past → was + V3 (**given**). The indirect object Rohan can become the subject."
        },
        {
          q: "Fill in: “The jar is filled ___ honey.”",
          options: ["by", "from", "with", "of"],
          answer: 2,
          explain: "‘Filled’ is followed by **with**."
        },
        {
          q: "Choose the passive form of: “People say that he is honest.”",
          options: ["It was said that he is honest.", "It is said that he is honest.", "It is say that he is honest.", "He is say to be honest."],
          answer: 1,
          explain: "Impersonal passive in the same tense: **It is said that…**"
        },
        {
          q: "Choose the passive form of: “The workers will have completed the bridge by May.”",
          options: ["The bridge will have completed by the workers by May.", "The bridge will has been completed by the workers by May.", "The bridge will be completing by the workers by May.", "The bridge will have been completed by the workers by May."],
          answer: 3,
          explain: "Future perfect passive = **will have been + V3**."
        }
      ]
    },

    // ─────────────────────────── WRITING SKILLS ───────────────────────────
    {
      id: "formal-letter",
      title: "Formal Letter",
      section: "Writing Skills",
      summary: "Writing formal letters of complaint, order and enquiry, and letters to the editor, in the correct format in about 100–120 words.",
      notes: [
        {
          heading: "Format (in order)",
          points: [
            "**Sender's address** (use the one given; if none, write ‘Examination Hall’) and **date** (e.g. 15 March 20XX).",
            "**Receiver's designation and address:** The Manager / The Principal / The Editor, with the organisation's name and city.",
            "**Subject:** one short line stating the purpose.",
            "**Salutation:** Sir / Madam.",
            "**Body** in three parts: introduction (purpose), details, conclusion (action expected).",
            "**Complimentary close** (Yours faithfully / Yours sincerely), **signature** and **name**, with designation if given."
          ]
        },
        {
          heading: "Word limit and marking",
          points: [
            "Word limit: about **100–120 words**.",
            "Marks are given for **format**, **content** (every point in the question covered with relevant details) and **expression** (grammar, spelling, organisation and formal tone).",
            "Use only the names and addresses given in the question; do not reveal your own identity."
          ]
        },
        {
          heading: "Letter of complaint",
          points: [
            "Written to a manager, company or official about a faulty product, poor service or a civic problem.",
            "Give specific facts: product, model, bill or order number, date of purchase, nature of the fault.",
            "Explain the inconvenience caused and clearly state the action wanted: repair, replacement, refund or prompt action.",
            "Tone: firm and polite, never rude or threatening."
          ]
        },
        {
          heading: "Letters of order and enquiry",
          points: [
            "**Order:** written to a supplier; list the items with quantity and specifications, and mention the delivery date, place and mode of payment.",
            "**Enquiry:** asks for information about a course, product, tour or service; ask specific questions (fees, duration, eligibility, timings) and request a brochure or reply.",
            "Mention how you learnt about the firm, e.g. through an advertisement in a newspaper.",
            "Close by looking forward to an early reply or timely delivery."
          ]
        },
        {
          heading: "Letter to the editor",
          points: [
            "Written to **The Editor** of a newspaper to raise a public issue: pollution, stray animals, traffic, plastic waste, water shortage.",
            "A common opening: ‘Through the columns of your esteemed newspaper, I wish to draw the attention of the authorities concerned to…’",
            "Describe the problem, its causes and effects, then give **suggestions**.",
            "Keep it objective: it speaks for the community, not about a personal grievance."
          ]
        },
        {
          heading: "Do's and don'ts",
          points: [
            "Do keep paragraphs short and to the point, and write the subject before the salutation.",
            "Don't use contractions (don't, can't), slang or emotional outbursts.",
            "Don't mix formats: no ‘Dear Diary’, no ‘Your loving friend’.",
            "Don't leave out any point given in the question."
          ]
        }
      ],
      formulas: [
        "Format: Sender's address → Date → Receiver's address → Subject → Salutation → Body (3 parts) → Complimentary close → Signature → Name",
        "Word limit: about 100–120 words"
      ],
      terms: [
        { term: "Subject line", meaning: "A short line after the receiver's address that states the purpose of the letter." },
        { term: "Salutation", meaning: "The greeting in a letter; ‘Sir’ or ‘Madam’ in formal letters." },
        { term: "Complimentary close", meaning: "The polite ending before the signature, such as ‘Yours faithfully’." },
        { term: "Letter of enquiry", meaning: "A formal letter asking an organisation for information about a product, course or service." },
        { term: "Letter to the editor", meaning: "A letter to a newspaper editor raising a public issue and suggesting solutions." },
        { term: "Letter of complaint", meaning: "A formal letter reporting a problem with a product, service or civic amenity and asking for action." }
      ],
      examples: [
        {
          q: "You are Karan of 24, Lake View Colony, Bhopal. The water purifier you bought from ABC Electronics, Bhopal, stopped working within a week. Write a letter of complaint to the manager asking for a replacement. (100–120 words)",
          steps: [
            "Sender's address and date: 24, Lake View Colony, Bhopal | 10 March 20XX",
            "Receiver: The Manager, ABC Electronics, Bhopal",
            "Subject: Complaint regarding a defective water purifier",
            "Salutation: Sir",
            "Introduction: I wish to bring to your notice that the water purifier (Model RO-200, Bill No. 4567) that I bought from your store on 1 March stopped working within a week of installation.",
            "Details: The machine leaks water and the purifying unit does not switch on. Your technician visited once but could not repair it. My family now has to boil water every day, which is very inconvenient.",
            "Action requested: As the product is under warranty, I request you to replace it at the earliest.",
            "Close: Yours faithfully | (Signature) | Karan"
          ],
          answer: "About 110 words in the correct format, with specific details (model, bill number, date), the inconvenience caused and a clear request for replacement in a firm but polite tone."
        }
      ],
      qa: [
        {
          q: "What should the body of a letter of complaint contain?",
          a: "It should (1) state the **purpose**: what the complaint is about; (2) give **specific details** such as the date of purchase, bill number and exact problem, along with the inconvenience caused; and (3) clearly state the **action expected**, such as repair, replacement or refund."
        },
        {
          q: "How is a letter to the editor different from a letter of complaint?",
          a: "A **letter to the editor** is addressed to a newspaper and raises a **public issue** to draw the attention of the authorities and readers, usually with suggestions. A **letter of complaint** goes directly to the person or company responsible and seeks a **remedy** for a specific problem."
        }
      ],
      quiz: [
        {
          q: "In a formal letter, the subject line is written:",
          options: ["after the receiver's address and before the salutation", "after the complimentary close", "at the very top, above the sender's address", "at the end of the body"],
          answer: 0,
          explain: "The subject comes **after the receiver's address and before the salutation**."
        },
        {
          q: "Which salutation suits a letter to the editor?",
          options: ["Dear friend", "Sir/Madam", "My dear Editor", "Hello"],
          answer: 1,
          explain: "Formal letters use **Sir or Madam**."
        },
        {
          q: "Which of these should be avoided in a formal letter?",
          options: ["A clear subject line", "A polite, firm tone", "Contractions and slang", "Specific details"],
          answer: 2,
          explain: "**Contractions and slang** are informal and do not suit a formal letter."
        },
        {
          q: "A letter asking a coaching institute about its fees, duration and timings is a letter of:",
          options: ["complaint", "order", "apology", "enquiry"],
          answer: 3,
          explain: "Asking for information is the purpose of a letter of **enquiry**."
        },
        {
          q: "Which detail is essential in a letter placing an order?",
          options: ["The history of the supplier's company", "The list of items with quantity and specifications", "A request to publish the letter", "The names of other customers"],
          answer: 1,
          explain: "An order letter must state clearly **what is wanted and how much**."
        },
        {
          q: "Which opening line is typical of a letter to the editor?",
          options: ["I am writing to order the following books.", "I am sorry for the inconvenience caused.", "Through the columns of your esteemed newspaper, I wish to draw attention to…", "Please send me your latest catalogue."],
          answer: 2,
          explain: "A letter to the editor uses the newspaper to raise a public issue, so it often opens with **‘Through the columns of your esteemed newspaper…’**."
        }
      ]
    },

    {
      id: "analytical-paragraph",
      title: "Analytical Paragraph",
      section: "Writing Skills",
      summary: "Writing a well-organised paragraph of about 100–120 words that describes and interprets data from a chart, graph, table or set of cues.",
      notes: [
        {
          heading: "What the task asks",
          points: [
            "You are given **data**, such as a bar graph, line graph, pie chart, table, flow chart or cues, and must describe and analyse it.",
            "Word limit: about **100–120 words**.",
            "Present the **main trends and comparisons** in your own words; don't copy every number.",
            "There is no letter-style format, but a **title** is a good idea."
          ]
        },
        {
          heading: "Structure",
          points: [
            "**Title:** what the data is about.",
            "**Introduction:** one sentence on what the visual shows, the place and the time period: “The bar graph compares…”",
            "**Body:** key trends (rise, fall, highest, lowest, comparisons), supported by selected figures.",
            "**Conclusion:** an overall observation or inference that follows from the data."
          ]
        },
        {
          heading: "Useful language",
          points: [
            "Rise: increased, rose, grew, climbed, surged, peaked at.",
            "Fall: decreased, declined, dropped, fell sharply, hit a low of.",
            "Little or uneven change: remained steady, levelled off, fluctuated.",
            "Comparison: twice as many as, the largest share, compared with, whereas, in contrast.",
            "Use the **past tense** for data about past years and the **present tense** for what the chart shows."
          ]
        },
        {
          heading: "Marking points",
          points: [
            "**Content:** an accurate description of the data, the main trends and a sensible conclusion.",
            "**Expression:** correct grammar and spelling, suitable vocabulary of trends, and a logical order with linkers.",
            "Accuracy matters: figures must match the chart exactly."
          ]
        },
        {
          heading: "Do's and don'ts",
          points: [
            "Do group related information and compare, instead of describing each item separately.",
            "Do mention units (%, crore, tonnes) correctly.",
            "Don't give personal opinions or reasons that the data does not support.",
            "Don't change figures carelessly, and don't go far beyond the word limit."
          ]
        }
      ],
      formulas: [
        "Structure: Title → Introduction (what, where, when) → Body (trends, highs and lows, comparisons) → Conclusion (overall inference)",
        "Word limit: about 100–120 words"
      ],
      terms: [
        { term: "Trend", meaning: "The general direction in which data moves over time: rising, falling or steady." },
        { term: "Fluctuate", meaning: "To rise and fall irregularly." },
        { term: "Peak", meaning: "The highest point reached in the data." },
        { term: "Inference", meaning: "A sensible conclusion drawn from the data." },
        { term: "Visual input", meaning: "The chart, graph, table or diagram given as the basis for the paragraph." }
      ],
      examples: [
        {
          q: "A school survey shows how its students travelled to school in 2015 and in 2025 (number of students): bus 300 → 450; bicycle 250 → 150; on foot 200 → 120; car 150 → 280. Write an analytical paragraph in about 100–120 words.",
          steps: [
            "Title: Changing Modes of Travel to School",
            "Introduction: The data compares the ways in which students of a school travelled to school in 2015 and 2025.",
            "Body (rise): The school bus remained the most popular choice, rising from 300 to 450 students. Car use grew even more sharply, from 150 to 280, almost doubling.",
            "Body (fall): In contrast, fewer students cycled or walked. Cyclists dropped from 250 to 150, while those who came on foot fell from 200 to 120.",
            "Conclusion: Overall, the decade saw a clear shift from cycling and walking towards motor transport, which may add to traffic and pollution near the school."
          ],
          answer: "About 110 words with a title, an introduction naming the data and the period, grouped trends with selected figures, and an inference drawn from the data."
        }
      ],
      qa: [
        {
          q: "What should the introduction of an analytical paragraph include?",
          a: "It should state **what the visual shows**: the topic, the type of chart, the place and the **time period** covered, in one or two sentences, for example: “The line graph shows the sale of electric scooters in a city from 2020 to 2024.”"
        },
        {
          q: "Why should personal opinions be avoided in an analytical paragraph?",
          a: "The paragraph is meant to **analyse the given data objectively**. Personal opinions or reasons that the data does not support make it inaccurate. Any conclusion must be a logical **inference from the figures** themselves."
        }
      ],
      quiz: [
        {
          q: "What is the usual word limit for an analytical paragraph in Class 10?",
          options: ["About 100–120 words", "About 50 words", "About 200–250 words", "About 300–350 words"],
          answer: 0,
          explain: "The analytical paragraph is a short task of about **100–120 words**."
        },
        {
          q: "Which word best describes data that keeps rising and falling irregularly?",
          options: ["Peaked", "Plummeted", "Fluctuated", "Stabilised"],
          answer: 2,
          explain: "To **fluctuate** is to rise and fall irregularly."
        },
        {
          q: "Which of these should NOT be in an analytical paragraph?",
          options: ["Key trends from the data", "Comparisons between categories", "An overall conclusion", "Personal opinions not supported by the data"],
          answer: 3,
          explain: "The paragraph must stay **objective**; unsupported opinions do not belong in it."
        },
        {
          q: "Which is the best opening sentence for an analytical paragraph?",
          options: ["I think people travel too much these days.", "The bar graph shows the number of tourists visiting Goa from 2019 to 2023.", "Tourism is very good for everyone.", "Goa is my favourite holiday destination."],
          answer: 1,
          explain: "A good introduction states **what the graph shows, where and over what period**."
        },
        {
          q: "What should the conclusion of an analytical paragraph contain?",
          options: ["An overall trend or inference drawn from the data", "A new set of figures", "A request for action from the reader", "The writer's address"],
          answer: 0,
          explain: "The conclusion sums up the **overall trend** or a logical inference."
        },
        {
          q: "Which phrase describes a sudden, large fall?",
          options: ["Rose steadily", "Remained constant", "Dropped sharply", "Increased slightly"],
          answer: 2,
          explain: "**Dropped sharply** describes a sudden, steep fall."
        }
      ]
    },

    // ─────────────────────────── LITERATURE ───────────────────────────
    {
      id: "a-letter-to-god",
      title: "A Letter to God",
      section: "First Flight",
      summary: "G.L. Fuentes's story of Lencho, a poor farmer whose faith leads him to write to God for help after a hailstorm destroys his crop; the kindness of the postmaster ends in irony.",
      notes: [
        {
          heading: "Summary",
          points: [
            "**Lencho**, a farmer, lives in the only house in the valley, on the crest of a low hill. His field of ripe corn needs just one good downpour.",
            "The rain comes, and Lencho joyfully calls the big drops **new coins**. Then a strong wind brings huge **hailstones** that fall for an hour and destroy the crop; the field looks as if it were covered with salt.",
            "Lencho's only hope is help from **God**. He writes a letter to God asking for **100 pesos** to sow his field again and to live until the next crop, and posts it.",
            "The **postmaster** laughs at first but is moved by Lencho's faith. He collects money from his employees and friends and gives part of his own salary, but can gather only **70 pesos**. He sends it, signed ‘God’.",
            "Lencho is not surprised to get money, but is angry that it is short. He writes again, asking God for the rest and asking Him not to send it by mail, because he believes the **post office employees are crooks**."
          ]
        },
        {
          heading: "Characters",
          points: [
            "**Lencho:** a hard-working farmer with **unshakeable faith** in God; simple and innocent, but unknowingly ungrateful to the people who helped him.",
            "**The postmaster:** a fat, amiable man who is kind and generous; he helps so that Lencho's faith in God is not shaken.",
            "**Lencho's family:** his wife and sons, who share his joy at the rain and his despair after the hail."
          ]
        },
        {
          heading: "Themes and message",
          points: [
            "**Faith:** Lencho's faith is so strong that he expects a reply from God.",
            "**Kindness and humanity:** the postmaster and the employees act as God's agents.",
            "**Irony:** those who actually helped Lencho are called crooks, while God gets the credit.",
            "Message: faith can sustain us in hard times, and help often comes through the goodness of ordinary people."
          ]
        },
        {
          heading: "Literary devices",
          points: [
            "**Metaphor:** raindrops as **new coins** (big drops are ten-cent pieces, small ones five-cent pieces); hailstones as **frozen pearls**; Lencho as ‘an ox of a man’.",
            "**Simile:** the field looked white, as if covered with salt.",
            "**Exaggeration (hyperbole):** Lencho says even a plague of locusts would have left more than the hail did.",
            "**Irony:** Lencho's faith in God makes him distrust the very people who helped him."
          ]
        }
      ],
      formulas: [
        "Author: G.L. Fuentes",
        "Lencho asked for 100 pesos; he received 70 pesos",
        "Key devices: metaphor (new coins, frozen pearls), simile (as if covered with salt), irony (the ending)"
      ],
      terms: [
        { term: "Lencho", meaning: "The farmer in the story, whose crop is ruined and who writes to God for help." },
        { term: "Hailstones", meaning: "Balls of ice falling like rain; they destroyed Lencho's crop." },
        { term: "Pesos", meaning: "The currency used in the story; Lencho asked God for 100 pesos." },
        { term: "Postmaster", meaning: "The kind official who collected money for Lencho and signed the letter ‘God’." },
        { term: "Irony", meaning: "A contrast between what is expected and what actually happens; Lencho calls his helpers crooks." }
      ],
      qa: [
        {
          q: "Why did Lencho write a letter to God?",
          a: "A hailstorm destroyed his entire crop, and he had no money to sow again or to feed his family. Having **complete faith** that God sees everything and helps those in need, he wrote to God asking for 100 pesos."
        },
        {
          q: "Why did the postmaster send money to Lencho, and why did he sign the letter ‘God’?",
          a: "The postmaster was moved by Lencho's **deep faith** and did not want it to be shaken. He collected money from his employees and friends and gave part of his salary. He signed it ‘God’ so that Lencho would believe God had answered him."
        },
        {
          q: "Explain the irony at the end of the story.",
          a: "The postmaster and his employees generously helped Lencho, yet Lencho, finding only 70 pesos, **called them a bunch of crooks** and asked God not to send the rest by mail. The people who helped him were suspected of stealing from him: that is the irony."
        }
      ],
      quiz: [
        {
          q: "What did Lencho compare the big raindrops to?",
          options: ["Frozen pearls", "Ten-cent coins", "Grains of salt", "Silver stars"],
          answer: 1,
          explain: "He called the big drops **ten-cent pieces** and the small ones five-cent pieces. ‘Frozen pearls’ describes the hailstones."
        },
        {
          q: "How much money did Lencho ask God for?",
          options: ["70 pesos", "50 pesos", "100 pesos", "200 pesos"],
          answer: 2,
          explain: "He asked for **100 pesos**; he received only 70."
        },
        {
          q: "How did the postmaster react after reading the letter?",
          options: ["He threw it away", "He reported Lencho to the police", "He laughed and forgot about it", "He was moved by Lencho's faith and decided to reply"],
          answer: 3,
          explain: "After laughing at first, he was **moved by Lencho's faith** and decided to answer the letter."
        },
        {
          q: "Why was Lencho angry when he received the money?",
          options: ["It was less than he had asked for", "It came too late", "It was in a foreign currency", "It was signed by the postmaster"],
          answer: 0,
          explain: "He received **only 70 pesos** instead of 100."
        },
        {
          q: "Whom did Lencho suspect of taking the rest of the money?",
          options: ["His sons", "The post office employees", "The postman's family", "His neighbours"],
          answer: 1,
          explain: "He called the **post office employees** a bunch of crooks."
        },
        {
          q: "Which literary device is most important at the end of the story?",
          options: ["Alliteration", "Onomatopoeia", "Irony", "Personification"],
          answer: 2,
          explain: "The helpers are called thieves: a clear example of **irony**."
        }
      ]
    },

    {
      id: "dust-of-snow",
      title: "Dust of Snow",
      section: "First Flight",
      summary: "A short poem by Robert Frost in which a small, unexpected moment, a crow shaking snow onto the poet from a hemlock tree, lifts his gloomy mood.",
      notes: [
        {
          heading: "Summary",
          points: [
            "The poet is in a sad, regretful mood.",
            "A **crow** sitting on a **hemlock tree** shakes down fine **dust of snow** onto him.",
            "This small, unexpected touch of nature changes his mood and **saves part of a day** that he had **rued** (regretted).",
            "The whole poem is a single sentence spread over two short stanzas."
          ]
        },
        {
          heading: "Symbols",
          points: [
            "**Crow:** usually linked with bad omens and gloom.",
            "**Hemlock:** a poisonous tree, linked with death and sorrow.",
            "**Dust of snow:** joy, freshness and healing.",
            "Frost uses these unusual, gloomy images to show that **happiness can come from unlikely sources**."
          ]
        },
        {
          heading: "Themes and message",
          points: [
            "**Nature's healing power:** a small moment in nature can lift a heavy heart.",
            "**Small things matter:** a trivial event can change our outlook.",
            "**Hope:** a bad day need not stay wholly bad.",
            "Message: stay open to the small joys around us; they can change our mood."
          ]
        },
        {
          heading: "Poetic devices",
          points: [
            "**Rhyme scheme:** ABAB in the first stanza and CDCD in the second (crow/snow, me/tree; heart/part, mood/rued).",
            "**Symbolism:** the crow, the hemlock and the snow.",
            "**Alliteration:** the repeated ‘h’ sound in ‘has given my heart’.",
            "**Enjambment:** the lines run on without pause until the end of the poem."
          ]
        }
      ],
      formulas: [
        "Poet: Robert Frost",
        "Form: two stanzas of four lines, one sentence",
        "Rhyme scheme: ABAB CDCD",
        "Symbols: crow and hemlock (gloom), dust of snow (joy)"
      ],
      terms: [
        { term: "Hemlock", meaning: "A poisonous tree; here a symbol of sorrow and gloom." },
        { term: "Rued", meaning: "Regretted; held in sorrow." },
        { term: "Dust of snow", meaning: "Fine particles of snow; a symbol of joy and freshness." },
        { term: "Crow", meaning: "A bird often seen as a bad omen; here it unexpectedly brings cheer." }
      ],
      qa: [
        {
          q: "How did the dust of snow change the poet's mood?",
          a: "The poet was sad and regretting his day. When a crow shook fine snow onto him from a hemlock tree, the unexpected, refreshing touch of nature **lifted his spirits** and saved the rest of his day from being wasted in sorrow."
        },
        {
          q: "Why has Frost chosen a crow and a hemlock tree instead of more attractive images?",
          a: "Crows and hemlock are usually linked with **gloom, bad luck and death**. By using them, Frost shows that even things we think of as negative can bring joy, and that **happiness can come from unexpected sources**."
        }
      ],
      quiz: [
        {
          q: "On which tree was the crow sitting?",
          options: ["Oak", "Pine", "Hemlock", "Maple"],
          answer: 2,
          explain: "The crow was on a **hemlock** tree."
        },
        {
          q: "What does ‘rued’ mean?",
          options: ["Enjoyed", "Regretted", "Forgotten", "Wasted"],
          answer: 1,
          explain: "To rue something is to **regret** it."
        },
        {
          q: "What effect did the dust of snow have on the poet?",
          options: ["It changed his mood for the better", "It made him angry", "It made him catch a cold", "It made him leave the forest"],
          answer: 0,
          explain: "It gave his heart **a change of mood** and saved part of his day."
        },
        {
          q: "What does the hemlock tree usually symbolise?",
          options: ["Joy and freshness", "Wealth", "Friendship", "Sorrow and death"],
          answer: 3,
          explain: "Hemlock is poisonous, so it is linked with **sorrow and death**."
        },
        {
          q: "What is the rhyme scheme of the first stanza?",
          options: ["AABB", "ABAB", "ABBA", "ABCB"],
          answer: 1,
          explain: "crow/snow and me/tree give **ABAB**."
        },
        {
          q: "What is the central idea of the poem?",
          options: ["Small moments in nature can lift a sad mood", "Crows are dangerous birds", "Winter is the saddest season", "Trees should be protected"],
          answer: 0,
          explain: "A tiny event, a shower of snow, **changes the poet's mood**."
        }
      ]
    },

    {
      id: "fire-and-ice",
      title: "Fire and Ice",
      section: "First Flight",
      summary: "Robert Frost's nine-line poem on whether the world will end in fire or in ice, where fire stands for desire and ice for hatred.",
      notes: [
        {
          heading: "Summary",
          points: [
            "Some people say the world will end in **fire**; others say it will end in **ice**.",
            "From his experience of **desire**, the poet sides with those who favour fire.",
            "But if the world had to be destroyed **twice**, he knows enough of **hatred** to say that ice would also be great for destruction and would be enough (‘suffice’)."
          ]
        },
        {
          heading: "Symbolism",
          points: [
            "**Fire** stands for **desire**: greed, lust, ambition and anger, which are passionate, quick and consuming.",
            "**Ice** stands for **hatred**: coldness, indifference and rigidity, which work slowly but are just as destructive.",
            "The poem suggests that the world could be destroyed by human emotions rather than by nature."
          ]
        },
        {
          heading: "Themes and message",
          points: [
            "**Destructive emotions:** uncontrolled desire and hatred can ruin individuals and the world.",
            "**Human nature:** the poet draws on his own experience of desire and hate.",
            "Message: control greed and hatred in order to save humanity."
          ]
        },
        {
          heading: "Poetic devices",
          points: [
            "**Symbolism and metaphor:** fire (desire) and ice (hatred).",
            "**Contrast (antithesis):** fire against ice.",
            "**Understatement:** saying ice ‘would suffice’ is a deliberately casual way of describing total destruction.",
            "**Rhyme scheme:** ABAABCBCB in its nine lines.",
            "**Alliteration:** ‘Some say’."
          ]
        }
      ],
      formulas: [
        "Poet: Robert Frost",
        "Form: nine lines; rhyme scheme ABAABCBCB",
        "Fire = desire; ice = hatred"
      ],
      terms: [
        { term: "Fire", meaning: "A symbol of desire: greed, lust and uncontrolled ambition." },
        { term: "Ice", meaning: "A symbol of hatred: coldness, rigidity and indifference." },
        { term: "Suffice", meaning: "To be enough." },
        { term: "Perish", meaning: "To be destroyed; to die." },
        { term: "Understatement", meaning: "Deliberately presenting something as less serious than it is, like saying ice ‘would suffice’." }
      ],
      qa: [
        {
          q: "What do ‘fire’ and ‘ice’ stand for in the poem?",
          a: "**Fire** stands for **desire**: greed, lust and ambition, which spread quickly and consume everything. **Ice** stands for **hatred**: coldness and indifference, which harden hearts slowly but are equally destructive."
        },
        {
          q: "Why does the poet first agree with those who favour fire?",
          a: "From his own experience of **desire**, he knows how fast and fiercely it can destroy, so he thinks the world is more likely to end in fire. Yet he adds that hatred (ice) would also be powerful enough to destroy it."
        }
      ],
      quiz: [
        {
          q: "What does ‘fire’ symbolise in the poem?",
          options: ["Hatred", "Desire", "Knowledge", "Courage"],
          answer: 1,
          explain: "Fire stands for **desire**: greed, lust and passion."
        },
        {
          q: "What does ‘ice’ symbolise in the poem?",
          options: ["Hatred", "Peace", "Desire", "Wisdom"],
          answer: 0,
          explain: "Ice stands for **hatred**: coldness and indifference."
        },
        {
          q: "What does the word ‘suffice’ mean?",
          options: ["To suffer", "To melt", "To be enough", "To fail"],
          answer: 2,
          explain: "To suffice is **to be enough**."
        },
        {
          q: "How many lines does ‘Fire and Ice’ have?",
          options: ["Eight", "Twelve", "Fourteen", "Nine"],
          answer: 3,
          explain: "The poem has **nine** lines."
        },
        {
          q: "What is the main message of the poem?",
          options: ["Winter is more dangerous than summer", "Uncontrolled desire and hatred can destroy the world", "The world will end very soon", "Fire is useful to humans"],
          answer: 1,
          explain: "The poem warns that **desire and hatred** are powerful enough to destroy the world."
        },
        {
          q: "Saying that ice ‘would suffice’ to destroy the world is an example of:",
          options: ["understatement", "simile", "onomatopoeia", "personification"],
          answer: 0,
          explain: "Describing total destruction in such a calm, casual way is **understatement**."
        }
      ]
    },

    {
      id: "nelson-mandela-long-walk-to-freedom",
      title: "Nelson Mandela: Long Walk to Freedom",
      section: "First Flight",
      summary: "An extract from Nelson Mandela's autobiography describing his inauguration as South Africa's first Black President on 10 May 1994, and his thoughts on apartheid, courage, duty and freedom.",
      notes: [
        {
          heading: "The inauguration",
          points: [
            "On **10 May 1994**, Mandela was sworn in as President at the **Union Buildings amphitheatre in Pretoria**, before dignitaries from many nations.",
            "It marked the installation of South Africa's **first democratic, non-racial government**.",
            "**F.W. de Klerk** was sworn in as second deputy president and **Thabo Mbeki** as first deputy president.",
            "Jets, helicopters and troop carriers flew past to show the military's **loyalty to democracy**. Generals who would once have arrested Mandela now saluted him.",
            "Two national anthems were played: whites sang ‘Nkosi Sikelel’ iAfrika’ and Blacks sang ‘Die Stem’, the old anthem of the Republic. Neither group yet knew the words of the anthem it once despised, a sign of reconciliation."
          ]
        },
        {
          heading: "Apartheid and the struggle",
          points: [
            "**Apartheid** was a system of racial discrimination by which the white minority dominated the dark-skinned majority.",
            "Mandela says that the long oppression produced men of extraordinary courage, such as **Oliver Tambo, Walter Sisulu, Chief Luthuli, Yusuf Dadoo, Bram Fischer and Robert Sobukwe**.",
            "He believes that a country's greatest wealth is its **people**, finer and truer than its diamonds.",
            "Mandela himself spent many years in prison for his fight against apartheid."
          ]
        },
        {
          heading: "Courage and the twin obligations",
          points: [
            "Courage is not the absence of fear but the **triumph over it**: the brave man is the one who conquers his fear.",
            "No one is born hating others because of their skin colour. People learn to hate, so they can also be taught to **love**, which comes more naturally to the human heart.",
            "Every person has **twin obligations**: to family (parents, wife, children) and to people, community and country.",
            "Under apartheid, a man of colour who tried to serve his people was punished and isolated, so he could not also fulfil his duty to his family."
          ]
        },
        {
          heading: "Mandela's idea of freedom",
          points: [
            "As a child he felt free to run in the fields; as a young man he wanted freedom to stay out at night, earn and marry. He later called these **transitory freedoms**.",
            "When he saw that not only he but all his people were unfree, his hunger for his own freedom became a hunger for the **freedom of his people**.",
            "He believes the **oppressor is as much a prisoner** as the oppressed: a man who takes away another's freedom is a prisoner of hatred and prejudice.",
            "So both the oppressed and the oppressor must be liberated."
          ]
        },
        {
          heading: "Themes and message",
          points: [
            "**Freedom and equality**, **reconciliation**, **courage** and **duty to society**.",
            "Message: hatred can be unlearnt; true freedom means respecting and enhancing the freedom of others."
          ]
        }
      ],
      formulas: [
        "Inauguration: 10 May 1994, Union Buildings amphitheatre, Pretoria",
        "First deputy president: Thabo Mbeki; second deputy president: F.W. de Klerk",
        "Two anthems: ‘Nkosi Sikelel’ iAfrika’ and ‘Die Stem’",
        "Twin obligations: to family, and to people, community and country"
      ],
      terms: [
        { term: "Apartheid", meaning: "A system of racial segregation and discrimination against non-white people in South Africa." },
        { term: "Inauguration", meaning: "A formal ceremony marking the start of a new government or leader's term." },
        { term: "Twin obligations", meaning: "Mandela's idea that every person has duties to family and to people, community and country." },
        { term: "Transitory freedoms", meaning: "Temporary, personal freedoms Mandela wanted as a young man before he understood that his people were not free." },
        { term: "Union Buildings", meaning: "The government buildings in Pretoria where the inauguration took place." }
      ],
      qa: [
        {
          q: "What did the military generals' salute signify?",
          a: "Generals who, not many years earlier, would have arrested Mandela now **saluted him and pledged their loyalty**. This showed that the military had accepted democracy and that South Africa had changed dramatically."
        },
        {
          q: "What are the ‘twin obligations’ Mandela mentions, and why could he not fulfil both?",
          a: "Every man has an obligation to his **family** (parents, wife, children) and to his **people, community and country**. Under apartheid, anyone who served his people was punished and isolated, so Mandela had to neglect his family to fight for his people."
        },
        {
          q: "Why does Mandela say the oppressor is not free?",
          a: "He believes that a person who takes away another's freedom is a **prisoner of hatred**, locked behind prejudice and narrow-mindedness. So both the oppressed and the oppressor are robbed of their humanity, and both must be liberated."
        }
      ],
      quiz: [
        {
          q: "On which date was Nelson Mandela sworn in as President?",
          options: ["10 May 1994", "15 August 1947", "26 January 1994", "10 May 1990"],
          answer: 0,
          explain: "The inauguration took place on **10 May 1994**."
        },
        {
          q: "Where did the inauguration ceremony take place?",
          options: ["Robben Island", "The Union Buildings amphitheatre, Pretoria", "The Parliament in Cape Town", "A stadium in Johannesburg"],
          answer: 1,
          explain: "It was held at the **Union Buildings amphitheatre in Pretoria**."
        },
        {
          q: "Who was sworn in as the first deputy president?",
          options: ["F.W. de Klerk", "Oliver Tambo", "Thabo Mbeki", "Walter Sisulu"],
          answer: 2,
          explain: "**Thabo Mbeki** became first deputy president; de Klerk became second deputy president."
        },
        {
          q: "According to Mandela, who is a brave man?",
          options: ["One who never feels afraid", "One who fights the most battles", "One who has the strongest army", "One who conquers his fear"],
          answer: 3,
          explain: "Courage is the **triumph over fear**, not its absence."
        },
        {
          q: "What did Mandela consider the greatest wealth of his country?",
          options: ["Its diamonds", "Its people", "Its gold mines", "Its land"],
          answer: 1,
          explain: "He called his **people** the country's greatest wealth, finer than its diamonds."
        },
        {
          q: "Why does Mandela say the oppressor is also not free?",
          options: ["He is in prison", "He has no money", "He is a prisoner of hatred and prejudice", "He has no family"],
          answer: 2,
          explain: "One who takes away another's freedom is himself **a prisoner of hatred**."
        }
      ]
    },

    {
      id: "a-tiger-in-the-zoo",
      title: "A Tiger in the Zoo",
      section: "First Flight",
      summary: "Leslie Norris contrasts a tiger pacing helplessly in a zoo cage with the free, powerful life it would lead in the jungle.",
      notes: [
        {
          heading: "Summary",
          points: [
            "The striped tiger **paces** the few steps of his cage on soft, silent paws, full of **quiet rage**.",
            "In the wild he would be **lurking in the shadows**, sliding through long grass near a water hole where plump deer pass.",
            "He would also snarl around the houses at the edge of the jungle, showing his white fangs and claws and **terrorising the village**.",
            "Instead, he is locked in a **concrete cell**, his strength behind bars, pacing his cage and **ignoring the visitors**.",
            "At night he hears the patrolling cars and **stares at the brilliant stars** with his brilliant eyes, longing for freedom."
          ]
        },
        {
          heading: "Contrast: cage vs jungle",
          points: [
            "**In the zoo:** confined, helpless and angry; he ignores the visitors and gazes at the stars.",
            "**In the jungle:** free and powerful; he hunts, lurks and frightens villagers.",
            "The poem moves between the two settings to show what captivity takes away from a wild animal."
          ]
        },
        {
          heading: "Themes and message",
          points: [
            "**Freedom vs captivity:** wild animals belong in their natural habitat.",
            "**Animal rights:** caging wild animals for display is cruel.",
            "**Lost dignity:** the tiger's strength and majesty are wasted behind bars.",
            "Message: wild animals should be protected in the wild, not imprisoned for human entertainment."
          ]
        },
        {
          heading: "Poetic devices",
          points: [
            "**Oxymoron:** ‘quiet rage’.",
            "**Repetition:** ‘brilliant’ is used for both the tiger's eyes and the stars.",
            "**Alliteration:** e.g. ‘plump deer pass’, ‘behind bars’.",
            "**Enjambment:** lines run on into the next, like the tiger's restless pacing.",
            "**Imagery and contrast** between the cage and the jungle; a loose rhyme scheme (ABCB in several stanzas, e.g. cage/rage)."
          ]
        }
      ],
      formulas: [
        "Poet: Leslie Norris",
        "Form: five stanzas, loose ABCB rhyme",
        "Key contrast: concrete cell vs jungle",
        "Key devices: oxymoron (quiet rage), repetition (brilliant)"
      ],
      terms: [
        { term: "Stalks", meaning: "Walks stiffly or angrily; the tiger stalks the length of his cage." },
        { term: "Lurking", meaning: "Hiding and waiting, ready to attack." },
        { term: "Snarling", meaning: "Growling angrily with bared teeth." },
        { term: "Concrete cell", meaning: "The tiger's cage in the zoo, a symbol of captivity." },
        { term: "Oxymoron", meaning: "Two contradictory words placed together, e.g. ‘quiet rage’." }
      ],
      qa: [
        {
          q: "Where should the tiger be, according to the poet, and what would he be doing there?",
          a: "He should be in the **jungle**, lurking in the shadows and sliding through long grass near a water hole to hunt plump deer. He might also snarl around the houses at the jungle's edge, showing his fangs and claws and terrorising the village."
        },
        {
          q: "Why does the tiger ignore the visitors?",
          a: "He is **angry and frustrated** at being locked in a concrete cell. The visitors are part of the reason for his captivity, so he shows his silent protest by ignoring them."
        },
        {
          q: "What is the significance of the tiger staring at the stars?",
          a: "At night, hearing only the patrolling cars, the tiger gazes at the **brilliant stars** with his brilliant eyes. The stars stand for the open, free world he has lost; the image shows his **helplessness and longing for freedom**."
        }
      ],
      quiz: [
        {
          q: "Who wrote ‘A Tiger in the Zoo’?",
          options: ["Leslie Norris", "Robert Frost", "John Berryman", "Ogden Nash"],
          answer: 0,
          explain: "The poem is by **Leslie Norris**."
        },
        {
          q: "‘Quiet rage’ is an example of:",
          options: ["simile", "oxymoron", "onomatopoeia", "personification"],
          answer: 1,
          explain: "Two opposite ideas (quiet and rage) placed together form an **oxymoron**."
        },
        {
          q: "In the jungle, where would the tiger lurk to hunt deer?",
          options: ["Near the village school", "On top of a hill", "Near the water hole", "Inside a cave"],
          answer: 2,
          explain: "He would slide through long grass **near the water hole** where plump deer pass."
        },
        {
          q: "What does the tiger do at night in the zoo?",
          options: ["Sleeps peacefully", "Roars at the visitors", "Eats his food", "Stares at the stars with brilliant eyes"],
          answer: 3,
          explain: "He **stares at the brilliant stars**, longing for freedom."
        },
        {
          q: "What is the main theme of the poem?",
          options: ["The beauty of zoos", "The contrast between captivity and freedom", "The dangers of villages", "The life of zookeepers"],
          answer: 1,
          explain: "The poem contrasts the caged tiger with the **free tiger in the wild**."
        },
        {
          q: "Why does the poet say the tiger's strength is ‘behind bars’?",
          options: ["He cannot use his power because he is caged", "He has grown weak with age", "He is protected by the bars", "He is afraid of the visitors"],
          answer: 0,
          explain: "Locked in a cage, the tiger **cannot use his strength**."
        }
      ]
    },

    {
      id: "two-stories-about-flying",
      title: "Two Stories about Flying",
      section: "First Flight",
      summary: "In ‘His First Flight’ (Liam O'Flaherty), a young seagull overcomes his fear and learns to fly; in ‘The Black Aeroplane’ (Frederick Forsyth), a pilot lost in a storm is guided to safety by a mysterious plane.",
      notes: [
        {
          heading: "Part I: His First Flight",
          points: [
            "A **young seagull** is alone on his ledge; his two brothers and his sister have already flown. He is too afraid to try, though flying would be easy for them.",
            "His parents scold him and threaten to let him **starve** on the ledge unless he flies. He has not eaten since the previous night and is desperately hungry.",
            "His **mother** flies towards him with a piece of **fish** and stops just out of reach. Maddened by hunger, he **dives** at the fish, falls from the ledge, and his wings spread out: he is **flying**.",
            "His family flies around him, cheering. He lands on the **green sea**, floats, and his family offers him scraps of fish."
          ]
        },
        {
          heading: "Part II: The Black Aeroplane",
          points: [
            "The narrator, a pilot, is flying his old **Dakota** aeroplane at night over France, back to England, dreaming of his holiday and of breakfast with his family. He has just called **Paris Control** on the radio.",
            "He sees huge **black storm clouds**. He decides to take a risk and fly into them instead of turning back to Paris.",
            "In the storm his **compass** and **radio** stop working, and he is running out of fuel. A **black aeroplane with no lights** appears, and its pilot guides him through the clouds.",
            "He lands safely, but the black plane has vanished. The woman in the **control centre** tells him that no other aeroplane was flying that night; only his showed on the radar.",
            "The question of who guided him is left as a **mystery**."
          ]
        },
        {
          heading: "Characters",
          points: [
            "**Young seagull:** timid and lacking confidence at first, then brave when hunger forces him to act.",
            "**Mother seagull:** wise; she uses the fish to make him overcome his fear.",
            "**The narrator-pilot:** takes a risky decision in the storm and is honest about his fear and confusion.",
            "**The mysterious pilot:** never identified; the story leaves open whether he was real, imagined or supernatural."
          ]
        },
        {
          heading: "Themes and message",
          points: [
            "**Overcoming fear** and building **self-confidence** (Part I).",
            "**Risk-taking** and the **mystery of the unexplained** (Part II).",
            "In both stories, a moment of crisis is overcome with help from someone else.",
            "Message: believe in yourself; in difficult times, help can come from unexpected places."
          ]
        }
      ],
      formulas: [
        "Part I: His First Flight, by Liam O'Flaherty",
        "Part II: The Black Aeroplane, by Frederick Forsyth",
        "Seagull's motivation: hunger and the fish held by his mother",
        "Pilot's problem: dead compass and radio, low fuel, storm clouds"
      ],
      terms: [
        { term: "Ledge", meaning: "A narrow shelf of rock on a cliff where the young seagull lived." },
        { term: "Dakota", meaning: "The old aeroplane flown by the narrator in ‘The Black Aeroplane’." },
        { term: "Control centre", meaning: "The airport office that tracks aircraft by radar and guides pilots." },
        { term: "Compass", meaning: "An instrument that shows direction; it stopped working in the storm." },
        { term: "Radar", meaning: "A system that detects aircraft; it showed only the narrator's plane that night." }
      ],
      qa: [
        {
          q: "Why was the young seagull afraid to fly?",
          a: "Whenever he ran to the edge of the ledge and saw the great expanse of sea below, he felt sure his wings would never support him, and he lost courage. It was a lack of **self-confidence**, not of ability, that held him back."
        },
        {
          q: "How did the mother seagull make her son fly?",
          a: "She picked up a piece of **fish** and flew towards him, stopping just short of the ledge. Maddened by hunger, he **dived at the fish**, fell outwards and, in his terror, spread his wings, and found that he could fly."
        },
        {
          q: "Why does the narrator of ‘The Black Aeroplane’ remain puzzled at the end?",
          a: "The woman in the control centre told him that **no other aeroplane** had been flying that night; only his showed on the radar. So he could not understand who had guided him safely through the storm."
        }
      ],
      quiz: [
        {
          q: "Who wrote ‘His First Flight’?",
          options: ["Frederick Forsyth", "Liam O'Flaherty", "G.L. Fuentes", "Leslie Norris"],
          answer: 1,
          explain: "‘His First Flight’ is by **Liam O'Flaherty**; ‘The Black Aeroplane’ is by Frederick Forsyth."
        },
        {
          q: "What finally made the young seagull fly?",
          options: ["His father pushed him off the ledge", "A strong wind blew him off", "His brother taught him", "He dived at the fish his mother held out"],
          answer: 3,
          explain: "Maddened by hunger, he **dived at the fish** and his wings opened."
        },
        {
          q: "Which aeroplane was the narrator flying in ‘The Black Aeroplane’?",
          options: ["Boeing", "Spitfire", "Dakota", "Concorde"],
          answer: 2,
          explain: "He was flying an old **Dakota**."
        },
        {
          q: "Which instruments stopped working in the storm?",
          options: ["The compass and the radio", "The engine and the wheels", "The lights and the doors", "The wings and the tail"],
          answer: 0,
          explain: "His **compass and radio** went dead inside the storm clouds."
        },
        {
          q: "What did the woman in the control centre tell the narrator?",
          options: ["The black aeroplane had landed before him", "No other aeroplane was flying that night", "The black aeroplane belonged to the air force", "The other pilot wanted to meet him"],
          answer: 1,
          explain: "Only his plane had shown on the radar: **no other aeroplane** was up that night."
        },
        {
          q: "What theme do the two stories share?",
          options: ["Flying is always dangerous", "Birds are smarter than humans", "Overcoming fear and difficulty, often with help", "Storms should always be avoided"],
          answer: 2,
          explain: "Both the seagull and the pilot **overcome a crisis with help** from someone else."
        }
      ]
    },

    {
      id: "how-to-tell-wild-animals",
      title: "How to Tell Wild Animals",
      section: "First Flight",
      summary: "Carolyn Wells's comic poem pretends to teach you how to recognise dangerous animals, but the 'clues' are all things you would learn too late.",
      notes: [
        {
          heading: "Summary",
          points: [
            "The poet gives a series of **jokey tips** for telling wild animals apart, as if she were writing a field guide.",
            "A roar heard as you are **dying** marks the **Asian lion**; a beast with black stripes on a yellow ground is the **Bengal tiger** if it eats you.",
            "A spotted animal that leaps on you is a **leopard**, and it will keep leaping again and again however loudly you cry out.",
            "A creature that hugs you very hard is a **bear**. Smiling hyenas and weeping crocodiles can be told apart by their expressions.",
            "The **chameleon** is small, lizard-like, and has no ears and no wings; if the tree seems empty, it is the chameleon, because it blends into its background."
          ]
        },
        {
          heading: "Humour in the poem",
          points: [
            "Each 'identification' needs the animal to **attack you first**, so the advice is useless in real life. This is **dark humour**.",
            "The poet bends spelling and grammar for fun and for rhyme, e.g. **'dyin''** to rhyme with 'lion', **'lept'** and **'lep'**, and **'nonplus'** used as a verb.",
            "She plays on popular ideas: **hyenas 'laugh'**, **crocodiles 'weep'** (crocodile tears), and a **bear hug** is a hard squeeze.",
            "The strong, regular rhythm and rhyming couplets make it sound like a serious guide, which adds to the joke."
          ]
        },
        {
          heading: "Poetic devices and form",
          points: [
            "**Rhyme:** the first stanza rhymes ABAB then a couplet (chance/advance, east/beast, dying/lion).",
            "**Irony and understatement:** calmly asking you to 'notice if he eats you'.",
            "**Humorous exaggeration** and **word play** carry the whole poem.",
            "**Alliteration** in places, such as 'roaming round' and 'beast ... black'."
          ]
        },
        {
          heading: "Message",
          points: [
            "It is a light poem meant to **amuse**, not to teach.",
            "It shows how a poet can play with language, spelling and rhyme to create humour."
          ]
        }
      ],
      formulas: [
        "Poet: Carolyn Wells",
        "Animals: Asian lion, Bengal tiger, leopard, bear, crocodile, hyena, chameleon",
        "Tone: humorous; method: tips that only work after it is too late",
        "Poet's spelling tricks: 'dyin'', 'lept', 'lep', 'nonplus' as a verb"
      ],
      terms: [
        { term: "Tawny", meaning: "Yellowish-brown, like the colour of a lion." },
        { term: "Discern", meaning: "To make out or identify something." },
        { term: "Novice", meaning: "A person who is new to a job or skill." },
        { term: "Nonplus", meaning: "To puzzle or confuse; the poet uses it as a verb for fun." },
        { term: "Caress", meaning: "A gentle, loving touch; ironically used for a bear's crushing hug." }
      ],
      qa: [
        {
          q: "How does the poet suggest you can tell a Bengal tiger from other beasts?",
          a: "By its **black stripes on a yellow ground**. The joke is that the poet then asks you to 'notice if he eats you', so the identification comes too late to be useful."
        },
        {
          q: "Why does the poet spell words like 'lept' and 'lep' in an unusual way?",
          a: "She does it to **rhyme** and to create **humour**. The odd spellings suit the playful tone and show that a poet may take liberties with language."
        },
        {
          q: "What makes the poem humorous?",
          a: "The tips are **absurd** because each one works only after the animal has attacked. Combined with funny word play and ideas such as 'laughing' hyenas and 'weeping' crocodiles, this makes the poem comic."
        }
      ],
      quiz: [
        {
          q: "Who wrote ‘How to Tell Wild Animals’?",
          options: ["Ogden Nash", "Carolyn Wells", "Robin Klein", "Carl Sandburg"],
          answer: 1,
          explain: "The poem is by **Carolyn Wells**."
        },
        {
          q: "According to the poem, how do you know an animal is a leopard?",
          options: ["It hugs you hard", "It has no ears", "It leaps on you and has a spotted hide", "It has a mane"],
          answer: 2,
          explain: "A spotted beast that **leaps on you** is the leopard."
        },
        {
          q: "Which animal is said to have no ears and no wings?",
          options: ["Chameleon", "Hyena", "Bear", "Crocodile"],
          answer: 0,
          explain: "The **chameleon** is small, lizard-like and has no ears and no wings."
        },
        {
          q: "What is the dominant tone of the poem?",
          options: ["Tragic", "Humorous", "Angry", "Solemn"],
          answer: 1,
          explain: "The poem is **humorous**, full of absurd advice and word play."
        },
        {
          q: "According to the poem, a smiling animal that starts to weep is really a:",
          options: ["Crocodile", "Chameleon", "Bear", "Leopard"],
          answer: 0,
          explain: "Hyenas come with merry smiles; if they **weep**, they are **crocodiles**."
        }
      ]
    },

    {
      id: "the-ball-poem",
      title: "The Ball Poem",
      section: "First Flight",
      summary: "John Berryman watches a boy who has lost his ball in the harbour and sees that the boy is learning his first lesson about loss and responsibility.",
      notes: [
        {
          heading: "Summary",
          points: [
            "A boy's **ball bounces merrily down the street** and into the **harbour water**. The poet sees it go.",
            "The boy stands **rigid and trembling**, staring at the water, overcome by **shaking grief**.",
            "The poet does not offer comfort such as 'there are other balls', and decides **not to intrude** on the boy's sorrow.",
            "He feels that **money cannot replace** what has been lost, so offering a dime or another ball would be worthless.",
            "The boy is learning the **'epistemology of loss'**: how to bear loss and **stand up** again, as every grown person must."
          ]
        },
        {
          heading: "What the boy learns",
          points: [
            "He senses his **first responsibility in a world of possessions**: things are lost, and no one can buy them back.",
            "**Money is external**; it cannot heal inner grief or bring back the memories attached to a thing.",
            "The ball stands for his **childhood and young days**, so losing it feels like losing a part of himself.",
            "The repeated line about learning **how to stand up** shows that growing up means facing loss with courage."
          ]
        },
        {
          heading: "Themes",
          points: [
            "**Loss and grief:** even a small loss can be deeply felt.",
            "**Growing up:** facing disappointment is part of maturity.",
            "**Responsibility:** one must take care of what one owns and accept it when it is gone.",
            "**Sympathy:** the poet understands without trying to fix the boy's pain."
          ]
        },
        {
          heading: "Poetic devices",
          points: [
            "**Repetition:** 'merrily' (twice) at the start, and 'how to stand up' near the end.",
            "**Imagery:** the boy 'rigid, trembling', staring into the harbour.",
            "**Rhetorical question** in the opening line.",
            "**Free verse** with run-on lines (enjambment), written in a single stanza, which suits a quiet, thoughtful mood."
          ]
        }
      ],
      formulas: [
        "Poet: John Berryman",
        "Setting: a street beside a harbour; a boy has lost his ball in the water",
        "Key phrases: 'epistemology of loss', 'world of possessions', 'money is external'",
        "Theme: loss, responsibility and growing up"
      ],
      terms: [
        { term: "Shaking grief", meaning: "Sorrow so strong that it makes the person tremble." },
        { term: "Intrude", meaning: "To enter a situation where one is not wanted." },
        { term: "Dime", meaning: "A ten-cent coin used in the United States." },
        { term: "Epistemology of loss", meaning: "Understanding what loss is and what it means to lose something." },
        { term: "Rigid", meaning: "Stiff and unable to move, like the boy staring at the water." }
      ],
      qa: [
        {
          q: "Why does the poet say he would not intrude on the boy?",
          a: "He understands that the boy's grief is **real and personal**. Offering money or another ball would be worthless, because it cannot replace the lost ball or the memories of his young days. He lets the boy feel and learn from the loss."
        },
        {
          q: "What does the poet mean by 'a world of possessions'?",
          a: "It is a world where people **own things and lose them**. The boy is realising that nothing we own is permanent and that no one can buy back what is truly lost; this is his first sense of responsibility."
        },
        {
          q: "What is the boy learning from the loss of the ball?",
          a: "He is learning **how to cope with loss and stand up again**, a lesson every grown person must learn. He learns that money is external and cannot take away inner grief."
        }
      ],
      quiz: [
        {
          q: "Who wrote ‘The Ball Poem’?",
          options: ["Robert Frost", "John Berryman", "Leslie Norris", "W.B. Yeats"],
          answer: 1,
          explain: "‘The Ball Poem’ is by **John Berryman**."
        },
        {
          q: "Where did the boy's ball go?",
          options: ["Into the harbour water", "Under a car", "Onto a roof", "Into a drain"],
          answer: 0,
          explain: "It bounced down the street and into the **harbour**."
        },
        {
          q: "Why does the poet not offer the boy money for another ball?",
          options: ["He has no money", "He thinks the boy is rude", "He thinks money cannot replace the loss", "He is in a hurry"],
          answer: 2,
          explain: "The poet knows **money is external** and cannot cure the boy's grief."
        },
        {
          q: "What is the central idea of the poem?",
          options: ["Balls are expensive", "Boys should stay away from harbours", "Neighbours should help each other", "Learning to face loss is part of growing up"],
          answer: 3,
          explain: "The poem is about the boy's first **lesson in loss** and how to stand up after it."
        },
        {
          q: "What does the line about learning 'how to stand up' suggest?",
          options: ["Standing straight while walking", "Facing loss with strength and going on", "Reaching up to catch a ball", "Standing up for one's rights"],
          answer: 1,
          explain: "It means finding the **strength to go on** after a loss."
        }
      ]
    },

    {
      id: "from-the-diary-of-anne-frank",
      title: "From the Diary of Anne Frank",
      section: "First Flight",
      summary: "Extracts from the diary of Anne Frank, a Jewish girl in Amsterdam during the Second World War, in which she explains why she keeps a diary and describes her family, her school and a funny episode with her maths teacher.",
      notes: [
        {
          heading: "Background",
          points: [
            "**Anne Frank** was a Jewish girl who received a diary on her **thirteenth birthday** (12 June 1942) and named it **Kitty**.",
            "Her family moved from Germany to **Amsterdam, Holland**, in 1933, when her father emigrated; Anne followed in February.",
            "The family later went into hiding from the Nazis. Anne died in a concentration camp in 1945, and her diary was later published as **The Diary of a Young Girl**."
          ]
        },
        {
          heading: "Why Anne keeps a diary",
          points: [
            "She feels that **paper has more patience than people**, so she can write down her deepest thoughts.",
            "She has a loving family and many friends but **no true friend** in whom she can confide.",
            "So she makes the diary her friend and calls it **Kitty**.",
            "She thinks no one will be interested in the musings of a thirteen-year-old, but writes anyway."
          ]
        },
        {
          heading: "Family and school",
          points: [
            "Her father, whom she adores, married her mother when he was 36 and she was 25. Her sister **Margot** was born in 1926 and Anne in 1929, both in Frankfurt.",
            "Anne went to a **Montessori nursery school** and later to a primary school where, in the sixth form, her teacher was the headmistress **Mrs Kuperus**; their parting was tearful.",
            "Her **grandmother died in January 1942**, and Anne still thinks of her often.",
            "She and her classmates are anxious about the teachers' meeting that will decide who moves up to the next class."
          ]
        },
        {
          heading: "The episode with Mr Keesing",
          points: [
            "**Mr Keesing**, her maths teacher, is annoyed because she **talks too much** in class.",
            "He gives her extra homework: an essay called ‘**A Chatterbox**’. She argues that talking is a student's trait and that she inherited it from her mother.",
            "When she keeps talking, he sets a second essay, ‘**An Incorrigible Chatterbox**’, and then a third, ‘**Quack, Quack, Quack, Said Mistress Chatterbox**’.",
            "With help from her friend **Sanne**, she writes the third as a **poem** about a mother duck and a father swan whose three ducklings are bitten to death for chattering too much.",
            "Mr Keesing takes the joke well, reads the poem to the class and stops punishing her; he even starts making jokes himself."
          ]
        },
        {
          heading: "Character, themes and message",
          points: [
            "**Anne:** intelligent, witty, honest and sensitive, but lonely; she reflects deeply for her age.",
            "**Mr Keesing:** strict at first, but with a sense of humour that responds to creativity.",
            "**Themes:** loneliness, the need for a confidant, the value of writing, humour and wit.",
            "Message: writing can be a true companion, and wit and creativity can win people over."
          ]
        }
      ],
      formulas: [
        "Writer: Anne Frank (born 12 June 1929)",
        "Diary received: 13th birthday, 12 June 1942; named ‘Kitty’",
        "Essays: A Chatterbox → An Incorrigible Chatterbox → ‘Quack, Quack, Quack, Said Mistress Chatterbox’ (a poem)",
        "Teacher: Mr Keesing (maths); friend who helped: Sanne"
      ],
      terms: [
        { term: "Kitty", meaning: "The name Anne gave to her diary, which she treated as her only true friend." },
        { term: "Chatterbox", meaning: "A person who talks too much; the title of Anne's first punishment essay." },
        { term: "Incorrigible", meaning: "Impossible to correct or reform." },
        { term: "Mr Keesing", meaning: "Anne's maths teacher, who punished her talking with extra essays." },
        { term: "Sanne", meaning: "Anne's friend, good at poetry, who helped her write the third essay as a poem." }
      ],
      qa: [
        {
          q: "Why did Anne Frank call her diary ‘Kitty’?",
          a: "Anne felt she had **no true friend** with whom to share her innermost feelings, even though she had many friends and a loving family. So she decided to make her diary her friend and named it **Kitty**, so that she could confide everything to it."
        },
        {
          q: "How did Anne justify being a chatterbox in her first essay?",
          a: "She argued that **talking is a student's trait** and that she would do her best to keep it under control. She added that she could never fully cure herself because she had **inherited** it from her mother, who was just as talkative."
        },
        {
          q: "Why did Mr Keesing stop punishing Anne?",
          a: "Anne's third essay was a **witty poem** about a mother duck and a father swan with chattering ducklings. Mr Keesing took the joke in good spirit, read it aloud to the class, and from then on let her talk without giving extra homework."
        }
      ],
      quiz: [
        {
          q: "What name did Anne give to her diary?",
          options: ["Margot", "Kitty", "Sanne", "Lyceum"],
          answer: 1,
          explain: "Anne called her diary **Kitty**."
        },
        {
          q: "Why did Anne feel she needed a diary?",
          options: ["She had no true friend to confide in", "Her teacher told her to keep one", "She wanted to become a journalist", "She had no family"],
          answer: 0,
          explain: "Despite many friends, she had **no real friend** to share her deepest thoughts with."
        },
        {
          q: "Why did Mr Keesing give Anne extra homework?",
          options: ["She was late to class", "She failed her maths test", "She talked too much in class", "She was rude to him"],
          answer: 2,
          explain: "He punished her for **talking too much** in class."
        },
        {
          q: "What was the title of Anne's third essay?",
          options: ["A Chatterbox", "An Incorrigible Chatterbox", "The Duck and the Swan", "Quack, Quack, Quack, Said Mistress Chatterbox"],
          answer: 3,
          explain: "The third topic was **‘Quack, Quack, Quack, Said Mistress Chatterbox’**."
        },
        {
          q: "Who helped Anne write the poem?",
          options: ["Margot", "Sanne", "Her mother", "Mr Keesing"],
          answer: 1,
          explain: "Her friend **Sanne**, who was good at poetry, helped her."
        },
        {
          q: "In what form did Anne write her third essay?",
          options: ["A letter", "A short story", "A poem", "A play"],
          answer: 2,
          explain: "She wrote it as a **poem** about a mother duck, a father swan and their ducklings."
        }
      ]
    },

    {
      id: "amanda",
      title: "Amanda!",
      section: "First Flight",
      summary: "Robin Klein's playful poem sets a parent's constant orders to a girl against her private daydreams of freedom as a mermaid, an orphan and Rapunzel.",
      notes: [
        {
          heading: "Summary",
          points: [
            "Alternate stanzas give two voices: a **parent's nagging commands** (in the odd stanzas) and **Amanda's inner daydreams** (the bracketed stanzas).",
            "The parent keeps telling her: don't bite your nails, don't hunch, sit up straight, finish homework, tidy the room, clean your shoes, don't eat chocolate, look at me when I speak.",
            "In her mind Amanda imagines being a **mermaid** floating alone in a calm sea, an **orphan** roaming the streets barefoot in golden silence, and **Rapunzel** in a peaceful tower.",
            "In the last stanza the parent says she is sulking and moody, and adds that anyone would think the parent nagged her, which is **ironic** because that is exactly what has been happening."
          ]
        },
        {
          heading: "Understanding the dreams",
          points: [
            "**Mermaid:** a free, relaxed life with no one to give orders; she is the only inhabitant of the sea.",
            "**Orphan:** she imagines having no parents to command her, enjoying a sweet freedom, though not a real wish to be alone.",
            "**Rapunzel:** she is happy to stay in a tower and never let down her hair, a place where no one can reach and nag her.",
            "Each dream is about **escape from control** into peace and independence."
          ]
        },
        {
          heading: "Themes",
          points: [
            "**Freedom vs control:** children long for independence, while adults keep instructing them.",
            "**Imagination as escape:** Amanda finds freedom in her mind.",
            "**Communication gap:** the parent does not listen, and Amanda does not answer aloud.",
            "Message: adults should avoid constant nagging and give children some room."
          ]
        },
        {
          heading: "Poetic devices",
          points: [
            "**Refrain/repetition:** the name 'Amanda' ends each command.",
            "**Contrast:** loud commands against quiet, bracketed dreams.",
            "**Imagery:** the languid sea, soft dust, bright hair.",
            "**Irony** in the last stanza, and **allusion** to Rapunzel from the fairy tale."
          ]
        }
      ],
      formulas: [
        "Poet: Robin Klein",
        "Two voices: parent's orders (odd stanzas) and Amanda's daydreams (bracketed even stanzas)",
        "Her imagined selves: mermaid, orphan, Rapunzel",
        "Theme: freedom and control, imagination as escape"
      ],
      terms: [
        { term: "Languid", meaning: "Slow, relaxed and without energy or hurry." },
        { term: "Tranquil", meaning: "Calm and peaceful." },
        { term: "Rapunzel", meaning: "A fairy-tale girl shut in a tower, with long golden hair." },
        { term: "Sulking", meaning: "Being silent and bad-tempered out of displeasure." },
        { term: "Refrain", meaning: "A line or word repeated, like 'Amanda!' at the end of commands." }
      ],
      qa: [
        {
          q: "Why are stanzas 2, 4 and 6 of the poem given in brackets?",
          a: "They are Amanda's **private thoughts**, not spoken aloud. The brackets separate her daydreams from the parent's spoken commands and show that the parent is not hearing them."
        },
        {
          q: "Why does Amanda imagine herself as an orphan?",
          a: "As an orphan she would have **no one to order her about**. She imagines roaming freely with bare feet in peaceful silence, which shows how strongly she longs for freedom."
        },
        {
          q: "What is ironic about the last stanza?",
          a: "The parent calls Amanda moody and sulking, and says that anyone would think she is nagged, **without realising that the constant nagging is the very reason** for her mood."
        }
      ],
      quiz: [
        {
          q: "Who is the poet of ‘Amanda!’?",
          options: ["Robin Klein", "Ogden Nash", "Adrienne Rich", "Carolyn Wells"],
          answer: 0,
          explain: "The poem is by **Robin Klein**."
        },
        {
          q: "Which of these does Amanda NOT imagine herself to be?",
          options: ["A mermaid", "An orphan", "A queen", "Rapunzel"],
          answer: 2,
          explain: "She imagines a mermaid, an orphan and Rapunzel; **not a queen**."
        },
        {
          q: "Why are Amanda's daydreams in brackets?",
          options: ["They are quotations from a book", "They are her unspoken private thoughts", "They are spoken by her teacher", "They are less important"],
          answer: 1,
          explain: "Brackets mark her **inner thoughts**, separate from the spoken commands."
        },
        {
          q: "What does the parent in the poem mainly do?",
          options: ["Praise Amanda", "Teach her fairy tales", "Give constant instructions and scoldings", "Play with Amanda"],
          answer: 2,
          explain: "The parent keeps **giving orders and criticising**."
        },
        {
          q: "What does the poem suggest Amanda longs for?",
          options: ["More homework", "Freedom and peace", "A bigger house", "More sweets"],
          answer: 1,
          explain: "Each dream is about **freedom and peace** away from nagging."
        }
      ]
    },

    {
      id: "glimpses-of-india",
      title: "Glimpses of India",
      section: "First Flight",
      summary: "Three short pieces on India's variety: a traditional Goan baker, the coffee country of Coorg, and a train journey to a tea estate in Assam.",
      notes: [
        {
          heading: "I. A Baker from Goa",
          points: [
            "The writer recalls how Goans still remember the **Portuguese days and their loaves**. The old furnaces still burn and the **baker's bamboo staff** can still be heard in some places.",
            "The baker is called a **pader**. He came twice a day, and children ran to him for **bread-bangles** while the maid bought the loaves.",
            "Bread was needed for every occasion: the sweet bread called **bol** for weddings and gifts, sandwiches for engagements, and **cakes and bolinhas** for Christmas.",
            "The old baker wore a long one-piece frock called a **kabai**. He collected his dues at **month-end**, with accounts pencilled on a wall. A **plump** baker was a sign of a prosperous trade.",
            "The paders survive today because they perfected **door-to-door delivery**, and the leavened, oven-baked bread is the Portuguese gift to India."
          ]
        },
        {
          heading: "II. Coorg",
          points: [
            "**Coorg (Kodagu)** lies between **Mysore and Mangalore**; it is the **smallest district of Karnataka**, with rainforests, spices and coffee. The best season is **September to March**.",
            "The proud **Kodavus** may be of **Greek or Arab descent**; one story says part of **Alexander's army** settled there. Their long coat with a waist-belt (**kuppia**) resembles the Arab kuffia.",
            "The **Coorg Regiment** is among the most decorated in the Indian Army, and **General Cariappa**, the first Indian to head the Army, was a Coorgi. Kodavus are allowed to carry **firearms without a licence**.",
            "Visitors can enjoy river **rafting, canoeing, rappelling, rock climbing and mountain biking**, walk the trails, climb to **Brahmagiri hills** and cross a rope bridge to the island of **Nisargadhama**.",
            "Nearby **Bylakuppe** has India's largest Tibetan settlement, where Buddhist monks add to Coorg's charm. **Madikeri** is the district headquarters and gateway."
          ]
        },
        {
          heading: "III. Tea from Assam",
          points: [
            "**Pranjol** (from Assam) and his Delhi friend **Rajvir** travel by train to Pranjol's father's tea estate. A vendor sells tea at the station, and Rajvir says over **eighty crore cups** are drunk daily worldwide.",
            "Rajvir, who has read about tea, tells two legends: a **Chinese emperor** whose boiling water got leaves blown into it, and **Bodhidharma**, from whose cut eyelids ten tea plants grew.",
            "Tea was first drunk in **China**, as far back as **2700 BC**, and reached Europe in the **sixteenth century**, first as medicine.",
            "**Assam has the largest concentration of tea plantations in the world.** They reach **Dhekiabari Tea Estate**, managed by **Mr Barua**, where pluckers collect new leaves; the **second flush (May to July)** yields the best tea."
          ]
        },
        {
          heading: "Themes",
          points: [
            "**Diversity of India:** regions, foods, people and occupations differ widely.",
            "**Tradition and change:** the pader's craft survives by adapting.",
            "**Travel writing and curiosity:** the pieces mix description, history, legend and information."
          ]
        }
      ],
      formulas: [
        "A Baker from Goa: baker = pader; sweet bread = bol; dress = kabai",
        "Coorg (Kodagu): smallest district of Karnataka; Kodavus; Madikeri is the district headquarters",
        "Tea from Assam: Pranjol, Rajvir, Mr Barua, Dhekiabari Tea Estate; second flush May to July",
        "Tea first drunk in China about 2700 BC; Europe in the sixteenth century"
      ],
      terms: [
        { term: "Pader", meaning: "The traditional baker of Goa." },
        { term: "Kabai", meaning: "The old one-piece long frock worn by Goan bakers." },
        { term: "Kodavu", meaning: "A person of Coorg (Kodagu), known for martial traditions." },
        { term: "Second flush", meaning: "The tea-picking season from May to July that gives the best tea." },
        { term: "Nostalgia", meaning: "A fond memory of the past, with a feeling of longing." }
      ],
      qa: [
        {
          q: "What is the importance of the baker in a Goan village?",
          a: "Bread was needed on **every occasion**: the sweet bread **bol** at weddings, sandwiches at engagements, and cakes at Christmas. The baker's furnace was therefore **essential to village life**, and his plump look showed his prosperity."
        },
        {
          q: "What are the different stories about the origin of the Kodavus?",
          a: "One story says they descend from part of **Alexander's army** that moved south along the coast and settled in Coorg. Another suggests an **Arab origin**, supported by the long black coat and embroidered waist-belt they wear."
        },
        {
          q: "What do the legends of tea mentioned by Rajvir tell us?",
          a: "They show that **no one knows** who discovered tea. A Chinese emperor's boiled water received tea leaves by chance, and in an Indian legend **Bodhidharma's eyelids** grew into tea plants whose leaves banished sleep."
        }
      ],
      quiz: [
        {
          q: "What is a traditional Goan baker called?",
          options: ["Kabai", "Bol", "Pader", "Bolinha"],
          answer: 2,
          explain: "The Goan baker is called a **pader**; the kabai is his frock."
        },
        {
          q: "Coorg lies between which two places?",
          options: ["Mysore and Mangalore", "Bangalore and Chennai", "Hassan and Goa", "Madikeri and Kochi"],
          answer: 0,
          explain: "Coorg is midway between **Mysore and Mangalore**."
        },
        {
          q: "Which person from Coorg became the first Indian to head the Army?",
          options: ["General Sundarji", "General Cariappa", "Field Marshal Manekshaw", "General Rawat"],
          answer: 1,
          explain: "**General Cariappa** was a Coorgi."
        },
        {
          q: "When does the second flush of tea take place?",
          options: ["January to March", "September to November", "December to February", "May to July"],
          answer: 3,
          explain: "The second flush lasts **from May to July** and gives the best tea."
        },
        {
          q: "Which tea estate do Pranjol and Rajvir visit?",
          options: ["Dhekiabari", "Darjeeling Hills", "Nilgiri Garden", "Munnar Estate"],
          answer: 0,
          explain: "They visit **Dhekiabari Tea Estate**, managed by Pranjol's father."
        },
        {
          q: "What makes the paders survive even today?",
          options: ["Government support", "Door-to-door delivery", "A ban on factory bread", "Foreign tourists"],
          answer: 1,
          explain: "They have perfected **door-to-door delivery** of bread."
        }
      ]
    },

    {
      id: "the-trees",
      title: "The Trees",
      section: "First Flight",
      summary: "Adrienne Rich imagines the potted and indoor trees of a house moving out into the empty forest at night, while the poet stays inside, writing letters.",
      notes: [
        {
          heading: "Summary",
          points: [
            "The **forest outside is empty**: no bird can sit, no insect hide, and the sun cannot 'bury its feet in shadow'.",
            "All night the **roots of the trees inside the house work to free themselves** from cracks in the veranda floor, and the **leaves and twigs strain toward the glass**.",
            "The boughs shuffle under the roof like **newly discharged patients**, half-dazed, moving towards the clinic doors.",
            "The poet sits inside writing long letters, but **hardly mentions** that the forest is leaving the house. The night is fresh and the moon is whole.",
            "At the end the **glass breaks**, the trees stumble into the night, the winds rush to meet them, and the moon is **broken like a mirror**, its pieces flashing in the tallest oak. By morning the forest will be full again."
          ]
        },
        {
          heading: "Interpretations",
          points: [
            "**Nature vs man:** trees kept indoors as decoration are 'imprisoned' and need to break out, like the caged tiger in 'A Tiger in the Zoo'.",
            "**Trees as human beings:** Rich often uses trees as symbols of people, so the poem can be about **people, especially women, who long to be free** of confinement.",
            "**Silence about big events:** the poet does not tell anyone about the departure, perhaps because it is unexpected or embarrassing."
          ]
        },
        {
          heading: "Themes",
          points: [
            "**Freedom and confinement.**",
            "**Return to nature** and the need to protect forests.",
            "**Struggle for liberation**, shown by effort ('exertion', 'strain').",
            "Message: living things must be free to grow where they belong."
          ]
        },
        {
          heading: "Poetic devices",
          points: [
            "**Personification:** trees with roots that work, leaves that strain and boughs that shuffle.",
            "**Simile:** boughs like newly discharged patients; the moon broken like a mirror.",
            "**Imagery:** sound and sight, such as whispers and breaking glass.",
            "**Free verse** with no regular rhyme; **symbolism** of trees and glass."
          ]
        }
      ],
      formulas: [
        "Poet: Adrienne Rich (born Baltimore, 1929); the poem is free verse",
        "Key image: trees moving from the house to the forest at night",
        "Similes: boughs like newly discharged patients; moon like a broken mirror",
        "Glass = the barrier between confinement and freedom"
      ],
      terms: [
        { term: "Disengage", meaning: "To separate or free oneself from something." },
        { term: "Bough", meaning: "A large branch of a tree." },
        { term: "Lichen", meaning: "A crusty or bushy growth on tree trunks or bare ground." },
        { term: "Personification", meaning: "Giving human actions or feelings to non-human things." },
        { term: "Veranda", meaning: "A roofed open space along the outside of a house." }
      ],
      qa: [
        {
          q: "What are the trees doing in the poem?",
          a: "The trees **inside the house** are freeing their roots from the veranda floor and moving out into the empty forest at night. Their leaves strain toward the glass, and in the end the glass breaks and they walk into the night."
        },
        {
          q: "Why does the poet not mention the departure of the forest in her letters?",
          a: "It is a **strange and unexpected** event, and people often stay silent about such things. It may also show that she hides her inner feelings or that she is, like the trees, longing to be free but unwilling to speak of it."
        },
        {
          q: "How can the trees be read as a symbol?",
          a: "They can stand for **nature kept imprisoned** in cities and houses, or for **human beings, particularly women, who long for freedom**. Both readings show a struggle to break out of confinement."
        }
      ],
      quiz: [
        {
          q: "Who wrote ‘The Trees’?",
          options: ["Adrienne Rich", "Carl Sandburg", "Robin Klein", "Robert Frost"],
          answer: 0,
          explain: "‘The Trees’ is by **Adrienne Rich**."
        },
        {
          q: "Where are the trees in the poem at the beginning?",
          options: ["In the empty forest", "In a garden", "On a mountain", "Inside the house"],
          answer: 3,
          explain: "The trees are **inside the house**, with roots in the veranda floor."
        },
        {
          q: "What are the boughs compared to?",
          options: ["Dancers", "Newly discharged patients", "Soldiers", "Sleeping children"],
          answer: 1,
          explain: "They shuffle like **newly discharged patients**, half-dazed."
        },
        {
          q: "What happens to the moon at the end of the poem?",
          options: ["It disappears behind clouds", "It becomes bright red", "It is broken like a mirror", "It sets in the east"],
          answer: 2,
          explain: "The moon is **broken like a mirror**, its pieces flashing in the oak."
        },
        {
          q: "What does the glass in the poem stand for?",
          options: ["A boundary between confinement and freedom", "The poet's fear of storms", "A new window", "The beauty of the house"],
          answer: 0,
          explain: "The glass is the **barrier** the trees must break to be free."
        }
      ]
    },

    {
      id: "mijbil-the-otter",
      title: "Mijbil the Otter",
      section: "First Flight",
      summary: "Gavin Maxwell describes the otter he brought from the marshes of Iraq to London and how Mijbil played, escaped and surprised everyone on the journey.",
      notes: [
        {
          heading: "Getting the otter",
          points: [
            "In **1956** Maxwell went to **southern Iraq** hoping to keep an otter instead of a dog at his Scottish cottage, **Camusfearna**. A friend said otters were common in the **Tigris marshes** and tamed by the Arabs.",
            "At the **Consulate-General in Basra** his mail was delayed; telephone calls failed for three days, and after a long wait **two Arabs brought an otter in a sack** with a note from his friend.",
            "The creature looked like a small **medieval dragon**, covered in mud, with soft chocolate-brown fur beneath. Zoologists named it **Lutrogale perspicillata maxwelli**, or **Maxwell's otter**."
          ]
        },
        {
          heading: "Mij's nature",
          points: [
            "At first **Mijbil (Mij)** was aloof and indifferent, but on the second night he slept on Maxwell's bed.",
            "In the bathroom he went **wild with joy in the water**, rolling and splashing. Otters love to spread water everywhere and keep it on the move.",
            "Two days later he **opened a tap** himself. He played with a rubber ball like a footballer and juggled **marbles** lying on his back.",
            "He soon followed Maxwell without a lead and answered to his name."
          ]
        },
        {
          heading: "The journey to England",
          points: [
            "The British airline would not carry animals, so Maxwell **flew via Paris** with Mij in a box no more than **eighteen inches square**.",
            "When he returned after an hour, Mij had **torn the lining** and was bleeding. They rushed to the airport just before the flight.",
            "A kind **air hostess** offered to let him hold Mij on his lap. Mij **escaped**, caused chaos, and panicked a woman who shouted 'a rat', before returning on his own to Maxwell's knee."
          ]
        },
        {
          heading: "In London",
          points: [
            "In his flat, Mij played with ping-pong balls, marbles and a **terrapin shell** and invented a game with a **sloping suitcase** lid.",
            "On walks he developed **compulsive habits** such as jumping on a school wall on the way home.",
            "Londoners guessed he was a **baby seal, squirrel, walrus, beaver, bear cub, leopard, hippo**, or even a brontosaur; otters belong to the **Mustelline** group with badgers, weasels and mongooses.",
            "The episode shows Mij as intelligent, playful and affectionate; Maxwell as caring and amused."
          ]
        }
      ],
      formulas: [
        "Author: Gavin Maxwell; home: Camusfearna, Scotland",
        "Place: Basra, Iraq; marshes of the Tigris; year 1956",
        "Species named: Lutrogale perspicillata maxwelli (Maxwell's otter)",
        "Journey: Basra to Paris to London, in a box eighteen inches square"
      ],
      terms: [
        { term: "Thraldom", meaning: "The state of being completely under someone's or something's control." },
        { term: "Aloof", meaning: "Distant and not friendly or involved." },
        { term: "Compulsive habit", meaning: "A habit one cannot easily stop, like Mij's wall-running." },
        { term: "Mustelline", meaning: "A group of animals including otters, weasels, badgers and mongooses." },
        { term: "Camusfearna", meaning: "Maxwell's cottage in the West Highlands of Scotland." }
      ],
      qa: [
        {
          q: "How did Maxwell get the otter, and what was it like at first?",
          a: "Two Arabs brought him an otter in a **sack**, sent by his friend. Covered in mud, it looked like a tiny medieval dragon. For the first day it was **aloof and indifferent**, but soon it grew affectionate."
        },
        {
          q: "What happened on the flight and how was the problem solved?",
          a: "Mij tore the box lining and was blood-spattered. On the plane he **escaped** from the box, ran down the aisle and caused panic. The calm **air hostess** said she would find him, but Mij came back on his own to Maxwell's lap."
        },
        {
          q: "What does Mij's behaviour tell us about otters?",
          a: "Otters are **playful, intelligent and fond of water**. They spread water about, juggle small objects, learn quickly (Mij opened a tap) and form close bonds with humans."
        }
      ],
      quiz: [
        {
          q: "Where did Maxwell go to get an otter?",
          options: ["Southern Iraq", "Egypt", "Scotland", "Turkey"],
          answer: 0,
          explain: "He travelled to **southern Iraq**, to Basra and the Tigris marshes."
        },
        {
          q: "Why is the otter called Maxwell's otter?",
          options: ["It was born in his house", "He trained it as a pet", "Zoologists named the new race after him", "He wrote a book about otters"],
          answer: 2,
          explain: "The race was **new to science** and was named after Maxwell."
        },
        {
          q: "What did Mij do in the bathroom two days after arrival?",
          options: ["Slept in the bath", "Broke a window", "Ate fish", "Turned on the tap"],
          answer: 3,
          explain: "He **turned the tap** and got the water flowing."
        },
        {
          q: "How was Mij carried on the flight?",
          options: ["In Maxwell's pocket", "In a box eighteen inches square", "In a cage in the cargo hold", "On the air hostess's lap"],
          answer: 1,
          explain: "The airline required a box **not more than eighteen inches square**."
        },
        {
          q: "Which group of animals do otters belong to?",
          options: ["Rodents", "Felines", "Mustellines", "Primates"],
          answer: 2,
          explain: "Otters belong to the **Mustellines**, with weasels, badgers and mongooses."
        }
      ]
    },

    {
      id: "fog",
      title: "Fog",
      section: "First Flight",
      summary: "In a few lines Carl Sandburg compares the fog creeping over a harbour and a city to a cat that sits quietly and then moves on.",
      notes: [
        {
          heading: "Summary",
          points: [
            "The poem is a short **extended metaphor**: the fog comes on **little cat feet**, making no sound.",
            "Like a cat, it **sits looking over the harbour and the city** on silent haunches.",
            "Then, like a cat, it **moves on**, quietly leaving."
          ]
        },
        {
          heading: "The cat comparison",
          points: [
            "**Silence:** both fog and a cat arrive without noise.",
            "**Softness:** fog is soft and light like a cat's paws.",
            "**Stillness:** the fog settles over the city as a cat sits watching.",
            "**Temporary visit:** fog stays a while and then drifts away, like a cat that goes when it likes."
          ]
        },
        {
          heading: "Themes and devices",
          points: [
            "**Beauty of nature** seen in everyday life.",
            "**Metaphor:** fog is a cat; **personification:** it sits, looks and moves.",
            "**Imagery** of touch, sight and silence; the poem is **free verse** with no rhyme.",
            "Poet: **Carl Sandburg**; very short, with the comparison carrying the whole poem."
          ]
        }
      ],
      formulas: [
        "Poet: Carl Sandburg",
        "Central metaphor: fog = a cat",
        "Form: short free verse, no rhyme",
        "Setting: harbour and city"
      ],
      terms: [
        { term: "Haunches", meaning: "The hind part of an animal's body, where a cat or dog sits." },
        { term: "Harbour", meaning: "A sheltered part of the sea where ships stay." },
        { term: "Metaphor", meaning: "Describing one thing as if it were another, without 'like' or 'as'." },
        { term: "Personification", meaning: "Giving human or animal qualities to a non-living thing." },
        { term: "Free verse", meaning: "Poetry that has no regular rhyme or metre." }
      ],
      qa: [
        {
          q: "Why does the poet compare the fog to a cat?",
          a: "Fog arrives **silently and softly** and settles over the city, just as a cat creeps on soft paws, sits watching, and then moves on. The comparison makes the fog seem alive and gentle."
        },
        {
          q: "What does the fog do in the second part of the poem?",
          a: "It **sits looking over the harbour and the city** on silent haunches and then **moves on**, which shows that its stay is short."
        }
      ],
      quiz: [
        {
          q: "Who wrote ‘Fog’?",
          options: ["Carl Sandburg", "Robert Frost", "Ogden Nash", "John Berryman"],
          answer: 0,
          explain: "The poem is by **Carl Sandburg**."
        },
        {
          q: "What is the fog compared to?",
          options: ["A ghost", "A dog", "A cat", "A cloud"],
          answer: 2,
          explain: "It comes on **little cat feet**."
        },
        {
          q: "Which poetic device is used in the whole poem?",
          options: ["Hyperbole", "Metaphor", "Onomatopoeia", "Oxymoron"],
          answer: 1,
          explain: "The fog is described as a cat: a **metaphor**."
        },
        {
          q: "Over which places does the fog look?",
          options: ["Forest and hills", "River and bridge", "Harbour and city", "Village and field"],
          answer: 2,
          explain: "It looks over the **harbour and city**."
        },
        {
          q: "What does the phrase 'moves on' suggest about the fog?",
          options: ["It will return at once", "It stays for a short time and passes", "It becomes thicker", "It freezes"],
          answer: 1,
          explain: "Like a cat, the fog **stays briefly** and then leaves."
        }
      ]
    },

    {
      id: "madam-rides-the-bus",
      title: "Madam Rides the Bus",
      section: "First Flight",
      summary: "Vallikkannan's story of Valli, an eight-year-old who secretly makes her first bus ride to town and back, and learns about death when she sees a dead cow by the road.",
      notes: [
        {
          heading: "Valli's wish and plan",
          points: [
            "**Valli** is an **eight-year-old** girl who loves watching the street from her doorway. The thing she finds most fascinating is the **bus** that goes between her village and the nearest town, **six miles** away.",
            "She secretly collects the facts: the **fare is thirty paise one way**, the trip takes **forty-five minutes**, and she can return on the same bus by paying again.",
            "She saves **sixty paise** by resisting sweets, toys and even the merry-go-round at the fair, and chooses the time when her **mother naps (about one to four)**."
          ]
        },
        {
          heading: "The journey",
          points: [
            "Valli stops the bus herself. The jolly **conductor** teases her by calling her **'madam'**, but she insists she is not a child and does not need help.",
            "She stands on the seat to see the **canal, fields, palm trees and mountains**. She is annoyed when an elderly man and then an old woman with a betel-stained mouth ask questions about her.",
            "She **laughs until she cries** at a young cow running ahead of the bus, and sees trains, shops and crowds. At the terminus she refuses a drink and a walk, and pays another thirty paise to **return on the same bus**.",
            "On the return she sees the **same cow dead** by the roadside. The sight saddens her and she **stops looking out** of the window."
          ]
        },
        {
          heading: "The ending",
          points: [
            "She reaches home at **3:40**, before her mother has noticed. Her mother and aunt talk about how we cannot know about everything in the world.",
            "Valli, who has just learned about **death**, agrees quietly. The aunt calls her a 'chit of a girl' who 'pokes her nose in'; Valli **smiles to herself** because they cannot guess her secret."
          ]
        },
        {
          heading: "Character and themes",
          points: [
            "**Valli:** curious, determined, independent, proud, clever at planning, and a little afraid of strangers and the town.",
            "**The conductor:** kind, jolly and gently humorous.",
            "**Themes:** a child's longing for **independence and adventure**, the **loss of innocence**, and the gap between *knowing* that death exists and *understanding* it.",
            "The author views the world through an **eight-year-old's eyes**, e.g. trees 'running' towards the bus."
          ]
        }
      ],
      formulas: [
        "Author: Vallikkannan (translated from Tamil by K.S. Sundaram)",
        "Fare: 30 paise one way; distance six miles; trip 45 minutes",
        "Valli saved 60 paise; her mother naps from about one to four",
        "Key idea: a child's first brush with the reality of death"
      ],
      terms: [
        { term: "Wistfully", meaning: "In a way that shows longing for something." },
        { term: "Haughtily", meaning: "In a proud and arrogant manner." },
        { term: "Thriftily", meaning: "In a way that spends little and saves money carefully." },
        { term: "Spreadeagled", meaning: "With arms and legs spread wide, as the dead cow lay." },
        { term: "Conductor", meaning: "The person on a bus who sells tickets and collects fares." }
      ],
      qa: [
        {
          q: "Why did the conductor call Valli 'madam'?",
          a: "He found her **independent, serious manner** amusing. She had stopped the bus herself, paid her own fare and said she did not need help, so he joked by treating her as a grand lady."
        },
        {
          q: "Why did Valli refuse to look out of the window on the way back?",
          a: "She saw the **young cow she had laughed at earlier lying dead** by the road, killed by a fast vehicle. The sight was horrifying, and the memory of the dead cow dampened her enthusiasm."
        },
        {
          q: "What does Valli mean when she agrees with her mother's remark about things happening without our knowledge?",
          a: "Valli has just learned that **death can come suddenly**, as it did to the cow, even though she knew death existed. She also hints at her own secret journey that her mother did not know about."
        }
      ],
      quiz: [
        {
          q: "How far was the town from Valli's village?",
          options: ["Six miles", "Sixteen miles", "Three miles", "Sixty miles"],
          answer: 0,
          explain: "The town was **six miles** away."
        },
        {
          q: "How much was the one-way bus fare?",
          options: ["Ten paise", "Thirty paise", "Sixty paise", "One rupee"],
          answer: 1,
          explain: "The fare was **thirty paise** each way."
        },
        {
          q: "What did Valli do at the end of the bus's journey to town?",
          options: ["Visited her aunt", "Had a cold drink", "Stayed on the bus and paid for the return trip", "Walked around the town"],
          answer: 2,
          explain: "She stayed on and **paid another thirty paise**."
        },
        {
          q: "What made Valli sad on the return journey?",
          options: ["The bus broke down", "She missed her friends", "The conductor scolded her", "She saw the dead cow"],
          answer: 3,
          explain: "She saw the **dead young cow** she had laughed at earlier."
        },
        {
          q: "Which quality best describes Valli at the start of the story?",
          options: ["Lazy", "Curious and determined", "Fearful and silent", "Careless"],
          answer: 1,
          explain: "She is **curious** and plans her ride carefully with great **determination**."
        },
        {
          q: "Why did Valli choose the afternoon to ride the bus?",
          options: ["The bus was cheaper then", "Her mother was asleep then", "School was closed then", "The conductor was her friend"],
          answer: 1,
          explain: "Her mother **napped from about one to four**, so Valli could slip out."
        }
      ]
    },

    {
      id: "the-tale-of-custard-the-dragon",
      title: "The Tale of Custard the Dragon",
      section: "First Flight",
      summary: "Ogden Nash's comic ballad about Belinda and her brave pets, and a dragon who cries for a safe cage yet is the only one brave enough to defeat a pirate.",
      notes: [
        {
          heading: "The story",
          points: [
            "**Belinda** lives in a little white house with a black kitten **Ink**, a grey mouse **Blink**, a yellow dog **Mustard**, and a **dragon called Custard**.",
            "Belinda is as brave as a barrel full of bears, Ink and Blink chase lions, Mustard is as brave as a tiger in a rage, but **Custard is a coward** who wants a nice safe cage.",
            "They tease him until a **pirate** climbs in through the window, armed with pistols and a cutlass. Belinda cries for help, **Mustard runs away**, Ink hides at the bottom of the house and Blink hides in a mousehole.",
            "**Custard** snorts like an engine, clashes his tail, attacks the pirate and **gobbles him up**.",
            "Afterwards the others say they would have been braver if they had not been flustered, and Custard admits that everybody is braver than he is. The poem ends as it began, with Custard still asking for a **safe cage**."
          ]
        },
        {
          heading: "Humour and irony",
          points: [
            "The **only one who acts bravely** in the crisis is the 'coward'. The boasters run away.",
            "Custard's looks (sharp teeth, spikes, scales, mouth like a fireplace, nose like a chimney) contrast with his timid nature.",
            "He **modestly agrees** that everyone is braver, which makes the ending funny and gently ironic.",
            "The pets use funny names: Ink, Blink and Mustard, and the 'realio, trulio' dragon."
          ]
        },
        {
          heading: "Poetic devices",
          points: [
            "**Ballad:** a humorous story-poem, almost a **parody** of tales of heroism.",
            "**Rhyme:** rhyming couplets (AABB), with comic rhymes like *Belinda / winda*.",
            "**Simile:** 'brave as a barrel full of bears', 'brave as a tiger in a rage', 'like a robin at a worm'.",
            "**Metaphor, onomatopoeia and alliteration:** 'clatter and clank', 'Weeck!', 'snorting like an engine', 'little ... little ... little'.",
            "**Repetition** of the opening stanza at the close gives the poem a circular shape."
          ]
        },
        {
          heading: "Themes",
          points: [
            "**True courage** shows in action, not in boasting.",
            "**Appearances can deceive.**",
            "**Humility:** the dragon does not take credit.",
            "Message: do not judge others by how they look or how loudly they speak."
          ]
        }
      ],
      formulas: [
        "Poet: Ogden Nash; form: humorous ballad in rhyming couplets",
        "Characters: Belinda, Ink (kitten), Blink (mouse), Mustard (dog), Custard (dragon), the pirate",
        "Irony: the cowardly dragon is the only brave one",
        "Refrain: Custard cries for a nice safe cage"
      ],
      terms: [
        { term: "Ballad", meaning: "A poem or song that tells a story, often in short rhyming verses." },
        { term: "Parody", meaning: "A comic imitation of a serious style or work." },
        { term: "Cutlass", meaning: "A short curved sword once used by sailors and pirates." },
        { term: "Grog", meaning: "A strong alcoholic drink, popular with sailors." },
        { term: "Gyrate", meaning: "To move around in circles." }
      ],
      qa: [
        {
          q: "Why does Custard cry for a nice safe cage, and why is he called cowardly?",
          a: "Custard is afraid of danger and wants the **security of a cage**, unlike the other pets who boast of their courage. The others therefore tease him and call him a **cowardly dragon**."
        },
        {
          q: "How does the poem show that Custard is actually brave?",
          a: "When the pirate arrives, the others flee, but **Custard attacks and swallows him**. He acts when it matters while the boastful pets run, so his action proves true bravery."
        },
        {
          q: "Is the poem serious or light-hearted? Give reasons.",
          a: "It is **light-hearted**. It uses funny names, exaggerated similes, comic rhymes and a ridiculous story, and the characters' reactions are humorous."
        }
      ],
      quiz: [
        {
          q: "Who wrote ‘The Tale of Custard the Dragon’?",
          options: ["Ogden Nash", "Carolyn Wells", "Robert Frost", "Leslie Norris"],
          answer: 0,
          explain: "The poem is by **Ogden Nash**."
        },
        {
          q: "Who is Mustard?",
          options: ["The kitten", "The dog", "The mouse", "The pirate"],
          answer: 1,
          explain: "**Mustard** is Belinda's little yellow dog."
        },
        {
          q: "How did Custard defeat the pirate?",
          options: ["He ran away", "He called the police", "He gobbled him up", "He locked him in a cage"],
          answer: 2,
          explain: "Custard **gobbled up** the pirate."
        },
        {
          q: "What is ironic in the poem?",
          options: ["The pirate was a coward", "The house was too small", "Belinda was afraid of cats", "The cowardly dragon proves the bravest"],
          answer: 3,
          explain: "The dragon everyone mocks is the only one who is **brave**."
        },
        {
          q: "What kind of poem is this?",
          options: ["Elegy", "Humorous ballad", "Sonnet", "Free verse"],
          answer: 1,
          explain: "It is a **humorous ballad** that tells a story in rhyme."
        }
      ]
    },

    {
      id: "the-sermon-at-benares",
      title: "The Sermon at Benares",
      section: "First Flight",
      summary: "Betty Renshaw's account of how Prince Siddhartha became the Buddha, and of his sermon at Benares in which he helps the grieving Kisa Gotami understand that death comes to all.",
      notes: [
        {
          heading: "Siddhartha becomes the Buddha",
          points: [
            "Gautama Buddha was born a prince, **Siddhartha Gautama**, in northern India. At twelve he was sent away to study the Hindu scriptures; later he married a princess and had a son.",
            "At about twenty-five he saw a **sick man**, an **old man**, a **funeral procession** and a **monk begging for alms**. Deeply moved by human suffering, he left his royal life to seek enlightenment.",
            "After wandering for seven years, he sat under a **peepal tree** and attained **enlightenment** after seven days. He became the **Buddha** (the Awakened or Enlightened One), and the tree came to be called the **Bodhi tree** (Tree of Wisdom).",
            "The book says he preached his first sermon in **Benares**, the holy city on the Ganges. (Historically his first sermon was at Sarnath, near Benares; the Kisa Gotami teaching is the one given in this lesson.)"
          ]
        },
        {
          heading: "The story of Kisa Gotami",
          points: [
            "**Kisa Gotami's only son died.** In her grief she carried the dead child from house to house, asking for **medicine** to bring him back to life.",
            "People thought she had lost her senses. One man sent her to the **Buddha**.",
            "The Buddha asked her to bring a **handful of mustard seed** from a house where **no one had lost a child, husband, parent or friend**.",
            "Mustard seed was everywhere, but she found **no house untouched by death**. Weary and hopeless, she sat by the wayside, watching the city's lights flicker on and go out.",
            "She realised that death comes to all and that she had been **selfish in her grief**."
          ]
        },
        {
          heading: "The Buddha's teaching",
          points: [
            "The life of mortals is **troubled, brief and combined with pain**; there is no way for those who are born to avoid dying.",
            "As ripe fruits are in danger of falling, and as clay pots made by the potter end in being broken, so is the life of mortals.",
            "Weeping and grieving bring no peace; they only increase pain and harm the body.",
            "The wise do not grieve. One who **overcomes sorrow** will be free from sorrow and blessed."
          ]
        },
        {
          heading: "Themes and message",
          points: [
            "**Death is universal and inevitable.**",
            "**Grief and acceptance:** selfish grief must give way to understanding.",
            "**Teaching through experience:** the Buddha lets Kisa Gotami discover the truth for herself.",
            "Message: accept death as part of life and seek peace of mind instead of endless sorrow."
          ]
        }
      ],
      formulas: [
        "Author: Betty Renshaw",
        "Siddhartha → the Buddha (the Enlightened One); enlightenment under the peepal (Bodhi) tree",
        "First sermon: Benares, on the Ganges",
        "Kisa Gotami's task: mustard seed from a house where no one had died"
      ],
      terms: [
        { term: "Enlightenment", meaning: "A state of complete spiritual understanding; Siddhartha attained it under the peepal tree." },
        { term: "Bodhi tree", meaning: "The peepal tree under which the Buddha attained enlightenment; the Tree of Wisdom." },
        { term: "Sermon", meaning: "A religious talk; the Buddha's first was given at Benares." },
        { term: "Kisa Gotami", meaning: "A woman whose only son died; the Buddha helped her understand that death comes to all." },
        { term: "Mustard seed", meaning: "What the Buddha asked Kisa Gotami to bring from a house untouched by death." },
        { term: "Alms", meaning: "Money or food given to the poor or to monks." }
      ],
      qa: [
        {
          q: "Why did the Buddha ask Kisa Gotami for mustard seed from a house where no one had died?",
          a: "He knew she would find **no such house**. By searching for it herself, she would discover that **death comes to everyone** and so accept her son's death. It was a way of teaching through her own experience."
        },
        {
          q: "What did Kisa Gotami realise as she sat by the wayside?",
          a: "Watching the lights of the city flicker on and go out again, she realised that **human lives are like those lights**: they shine for a while and then fade. She saw that she had been **selfish in her grief**, because death is common to all."
        },
        {
          q: "What made Siddhartha give up his royal life?",
          a: "As a young prince he had been shielded from suffering. When he saw a **sick man, an old man, a funeral procession and a monk begging for alms**, he was deeply moved by human suffering and went out into the world to seek enlightenment."
        }
      ],
      quiz: [
        {
          q: "Where did the Buddha preach his first sermon, according to the chapter?",
          options: ["Bodh Gaya", "Benares", "Kapilavastu", "Rajgir"],
          answer: 1,
          explain: "The chapter says he preached his first sermon in **Benares**, on the Ganges."
        },
        {
          q: "What did Kisa Gotami ask her neighbours for when her son died?",
          options: ["Money for the funeral", "A place to live", "Mustard seed", "Medicine to cure her son"],
          answer: 3,
          explain: "She went from house to house asking for **medicine** to bring her son back to life."
        },
        {
          q: "From what kind of house was Kisa Gotami asked to bring mustard seed?",
          options: ["A house where no one had lost a child, husband, parent or friend", "The richest house in the city", "The house of a priest", "A house near the river"],
          answer: 0,
          explain: "The seed had to come from a house **untouched by death**, which she could not find."
        },
        {
          q: "Under which tree did Siddhartha attain enlightenment?",
          options: ["Banyan", "Neem", "Peepal", "Mango"],
          answer: 2,
          explain: "He sat under a **peepal** tree, later called the Bodhi tree."
        },
        {
          q: "What did Kisa Gotami realise in the end?",
          options: ["Medicine can cure death", "She had been selfish in her grief, as death comes to all", "The Buddha could not help her", "Mustard seed is rare"],
          answer: 1,
          explain: "She understood that death is universal and that her grief had been **selfish**."
        },
        {
          q: "According to the Buddha, the life of mortals is like:",
          options: ["stars that never fade", "rivers that never end", "mountains that never move", "ripe fruits in danger of falling"],
          answer: 3,
          explain: "Mortals are compared to **ripe fruits**, which are always in danger of falling."
        }
      ]
    },

    {
      id: "for-anne-gregory",
      title: "For Anne Gregory",
      section: "First Flight",
      summary: "In W.B. Yeats's poem a young man says no one can love Anne Gregory for herself because of her beautiful hair, and she replies that she can change it.",
      notes: [
        {
          heading: "Summary",
          points: [
            "The poem is a **conversation** between a young man and Anne Gregory.",
            "The man says that a young man, driven to despair by her **honey-coloured, yellow hair**, will never love her **for herself alone**.",
            "Anne replies that she can **dye her hair** brown, black or carrot-coloured, so that men may love her for herself and not her yellow hair.",
            "The man then recalls an old **religious man** who said he had found a text proving that **only God** could love her for herself alone."
          ]
        },
        {
          heading: "Meaning",
          points: [
            "**Outer beauty vs inner worth:** people are often attracted to looks (hair, colour) rather than to character.",
            "Anne's suggestion to dye her hair shows she wants to be **loved for what she is**, not for something that can be changed.",
            "The final claim is that only **divine love** is unconditional, while human love is influenced by appearances.",
            "The tone is gently **ironic** and playful, yet it raises a serious question."
          ]
        },
        {
          heading: "Poet and devices",
          points: [
            "**William Butler Yeats (1865–1939)**: Irish nationalist poet, interested in folklore and mythology, **Nobel Prize for Literature in 1923**.",
            "**Metaphor:** 'honey-coloured ramparts at your ear' for thick yellow hair, like the high walls of a fort.",
            "**Repetition:** 'love you for yourself alone and not your yellow hair' ends each stanza.",
            "**Dialogue form** with three stanzas; the end-sounds despair, ear and hair rhyme loosely in each stanza."
          ]
        },
        {
          heading: "Themes",
          points: [
            "**True love is for the person, not appearance.**",
            "**Superficial attraction** vs real affection.",
            "Message: look beyond looks, and value people for their qualities."
          ]
        }
      ],
      formulas: [
        "Poet: W.B. Yeats (1865–1939), Nobel Prize 1923",
        "Speakers: a young man and Anne Gregory, then the man quoting an old religious man",
        "Refrain: love 'for yourself alone and not your yellow hair'",
        "Theme: inner worth vs outer beauty; only God loves unconditionally"
      ],
      terms: [
        { term: "Ramparts", meaning: "The high, wide walls around a castle or fort." },
        { term: "Despair", meaning: "Complete loss of hope." },
        { term: "Hair-dye", meaning: "A substance used to change the colour of hair." },
        { term: "Honey-coloured", meaning: "Golden-yellow, like honey." },
        { term: "Unconditional love", meaning: "Love that does not depend on looks, wealth or other qualities." }
      ],
      qa: [
        {
          q: "What does the young man mean by 'honey-coloured ramparts at your ear'?",
          a: "He means Anne's thick, **golden-yellow hair** falling at her ears like the high walls of a fort. Young men are 'thrown into despair' by its beauty, so they love the hair rather than the girl."
        },
        {
          q: "Why does Anne say she can use hair-dye?",
          a: "She wants to be loved **for herself, not for her hair**. By changing its colour she could test whether a young man's love is real or only based on her appearance."
        },
        {
          q: "What does the old religious man claim?",
          a: "He claims to have found a text proving that **only God** can love a person for herself alone. This suggests that human love is influenced by looks, but divine love is pure and unconditional."
        }
      ],
      quiz: [
        {
          q: "Who wrote ‘For Anne Gregory’?",
          options: ["W.B. Yeats", "John Berryman", "Adrienne Rich", "Robin Klein"],
          answer: 0,
          explain: "It is by **William Butler Yeats**."
        },
        {
          q: "What colour is Anne Gregory's hair?",
          options: ["Black", "Brown", "Yellow", "Red"],
          answer: 2,
          explain: "Her hair is **yellow**, honey-coloured."
        },
        {
          q: "What does Anne say she could do to her hair?",
          options: ["Cut it off", "Cover it", "Grow it longer", "Dye it brown, black or carrot"],
          answer: 3,
          explain: "She says she can get a **hair-dye** in a different colour."
        },
        {
          q: "Who, according to the old religious man, can love her for herself alone?",
          options: ["Her mother", "God", "A king", "Her friends"],
          answer: 1,
          explain: "He says **only God** can love her for herself alone."
        },
        {
          q: "What is the central idea of the poem?",
          options: ["Hair-dye is harmful", "Young men are cruel", "Appearance is a poor basis for love", "Religion forbids marriage"],
          answer: 2,
          explain: "True love should be for the **person**, not for looks."
        }
      ]
    },

    {
      id: "the-proposal",
      title: "The Proposal",
      section: "First Flight",
      summary: "Anton Chekhov's one-act farce in which a nervous landowner comes to propose marriage but ends up quarrelling over land and dogs with the girl and her father.",
      notes: [
        {
          heading: "Plot",
          points: [
            "**Lomov**, a large, hearty but very suspicious and nervous landowner, arrives dressed formally to ask **Chubukov** for the hand of his twenty-five-year-old daughter **Natalya**. Chubukov is delighted.",
            "Alone with Natalya, Lomov begins with their families' friendship, but the talk turns to the **Oxen Meadows**. Each insists the land is theirs, and the argument becomes an insulting shouting match joined by Chubukov.",
            "Lomov leaves with heart palpitations and a numb foot. When Chubukov tells Natalya he had come to propose, she is horrified and **demands that he be brought back**.",
            "Back again, they quarrel over whose dog is better, Lomov's **Guess** or Chubukov's **Squeezer**. Lomov faints; they think he is dead.",
            "When he revives, Chubukov **joins their hands** and orders them to kiss. They agree to marry, but at once start arguing again about the dogs."
          ]
        },
        {
          heading: "Characters",
          points: [
            "**Lomov:** 35, hypochondriac, easily excited, fussy and proud; wishes to marry for convenience, but cannot control his temper.",
            "**Natalya Stepanovna:** shrewd, stubborn and quarrelsome; she is eager to marry but won't give in on any point.",
            "**Stepan Chubukov:** hospitable and loving at first; hot-tempered, greedy for a good match; a landowner who likes to quarrel.",
            "All three are **quarrelsome over petty issues**, which makes the proposal almost forgotten."
          ]
        },
        {
          heading: "Humour and themes",
          points: [
            "It is a **farce**: exaggerated situations, comic dialogue, and fainting scenes.",
            "Marriage is shown as a **business arrangement** between wealthy families rather than love.",
            "**Pride and ego** make people argue over silly things like meadows worth little, or whose dog is better.",
            "Chekhov wrote the play in **1888–89**; its original title was 'A Marriage Proposal'."
          ]
        }
      ],
      formulas: [
        "Playwright: Anton Chekhov (Russian); one-act farce, 1888–89",
        "Characters: Ivan Vassilevitch Lomov, Stepan Stepanovitch Chubukov, Natalya Stepanovna",
        "First quarrel: Oxen Meadows; second quarrel: dogs Guess and Squeezer",
        "Lomov's age 35; Natalya's age 25"
      ],
      terms: [
        { term: "Farce", meaning: "A comic play with absurd situations and exaggerated characters." },
        { term: "Palpitation", meaning: "A rapid or irregular heartbeat, which Lomov complains of often." },
        { term: "Oxen Meadows", meaning: "The piece of land the families quarrel over." },
        { term: "Squeezer", meaning: "Chubukov's hunting dog." },
        { term: "Guess", meaning: "Lomov's hunting dog." }
      ],
      qa: [
        {
          q: "Why does Lomov come to Chubukov's house, and does he succeed?",
          a: "He comes to **propose to Natalya**. After a series of quarrels, he faints, and Chubukov brings the two together; they agree to marry, so he does succeed, though only after much argument."
        },
        {
          q: "Why is the play called a farce?",
          a: "A farce uses **absurd situations and exaggerated behaviour** for laughter. Here a proposal is nearly lost to quarrels over meadows and dogs, and characters faint or scream at trifles."
        },
        {
          q: "What does the play show about marriage in that society?",
          a: "It shows marriage as a **practical, economic arrangement** between wealthy families. Chubukov wants the match for property and security, and Lomov wants a convenient wife, not romance."
        }
      ],
      quiz: [
        {
          q: "Who wrote ‘The Proposal’?",
          options: ["Anton Chekhov", "Leo Tolstoy", "Ruskin Bond", "Guy de Maupassant"],
          answer: 0,
          explain: "The play is by the Russian writer **Anton Chekhov**."
        },
        {
          q: "What is the first thing Lomov and Natalya quarrel about?",
          options: ["Their dogs", "A hunting trip", "The Oxen Meadows", "Money"],
          answer: 2,
          explain: "They first argue about who owns the **Oxen Meadows**."
        },
        {
          q: "What are the names of the two dogs?",
          options: ["Guess and Squeezer", "Ink and Blink", "Sherry and Tricki", "Bruno and Sultan"],
          answer: 0,
          explain: "Lomov's dog is **Guess**; Chubukov's is **Squeezer**."
        },
        {
          q: "What problem does Lomov repeatedly complain of?",
          options: ["Toothache", "Palpitations of the heart", "Bad eyesight", "Back pain"],
          answer: 1,
          explain: "He says his **heart palpitates** and a foot has gone numb."
        },
        {
          q: "How does the play end?",
          options: ["Lomov leaves for good", "Natalya refuses him", "Chubukov leaves home", "They agree to marry but start quarrelling again"],
          answer: 3,
          explain: "They are engaged but **begin quarrelling again** about the dogs."
        }
      ]
    },

    {
      id: "a-triumph-of-surgery",
      title: "A Triumph of Surgery",
      section: "Footprints without Feet",
      summary: "James Herriot, a country vet, cures the pampered, overfed dog Tricki by keeping him at the surgery for two weeks, to the delight of his owner Mrs Pumphrey.",
      notes: [
        {
          heading: "The story",
          points: [
            "**Tricki** is a small dog, hugely fat, because his rich owner **Mrs Pumphrey** feeds him sweets, cream cakes, chocolates, malt, cod-liver oil and Horlicks. His only fault is **greed**, and he gets little exercise.",
            "The narrator, the vet **Mr Herriot**, tells her to cut his diet and exercise him more. Soon she calls: Tricki is **vomiting, refuses food and lies panting**.",
            "Herriot decides to take him to his **surgery for a fortnight**. Mrs Pumphrey weeps and sends a huge amount of luggage: beds, cushions, toys, bowls and coats.",
            "At the surgery Tricki **joins the other dogs**, eats normally, runs about and gets fit with no medicine at all. Meanwhile Mrs Pumphrey sends **eggs and wine and brandy** for his 'recovery', which the vets enjoy.",
            "After two weeks Tricki is lean and hard-muscled. He leaps into his mistress's lap and Mrs Pumphrey, in tears, thanks Herriot for the 'triumph of surgery'."
          ]
        },
        {
          heading: "Characters",
          points: [
            "**Mr Herriot:** tactful, sensible and kind; a skilled vet who sees the real problem (overfeeding) and cures it by common sense.",
            "**Mrs Pumphrey:** wealthy, loving but foolishly indulgent, who spoils her dog.",
            "**Tricki:** greedy and pampered, but happy when he joins the pack.",
            "**Tristan** (Herriot's colleague) and **Joe the greyhound** appear at the surgery."
          ]
        },
        {
          heading: "Themes and irony",
          points: [
            "**Over-indulgence harms**; true love needs sense and discipline.",
            "**Irony:** the 'surgery' involved no operation, just diet and exercise.",
            "**Humour** arises from Mrs Pumphrey's exaggerated care and the vets' cheerful gain.",
            "Message: natural food, exercise and company are the best medicine."
          ]
        }
      ],
      formulas: [
        "Author: James Herriot (a veterinary surgeon)",
        "Dog: Tricki; owner: Mrs Pumphrey; Herriot's colleague: Tristan",
        "Cure: two weeks at the surgery with other dogs; no medicine",
        "Irony in the title: no surgery was performed"
      ],
      terms: [
        { term: "Surgery", meaning: "Here, a place where a vet treats animals (not an operation)." },
        { term: "Convalescing", meaning: "Recovering slowly after illness." },
        { term: "Lithe", meaning: "Slim, flexible and graceful." },
        { term: "Distraught", meaning: "Extremely worried and upset." },
        { term: "Listless", meaning: "Without energy or interest." }
      ],
      qa: [
        {
          q: "Why was Tricki unwell, and how was he cured?",
          a: "He was **overfed with sweets and rich food** and got no exercise, so he became fat and sick. At the surgery he ate simple food and ran with the other dogs, and in two weeks he became fit **without any medicine**."
        },
        {
          q: "What kind of person is Mr Herriot?",
          a: "He is **tactful, firm and sensible**. He understands the cause of the problem, deals kindly with Mrs Pumphrey, and uses a humane, natural cure."
        },
        {
          q: "Why does Mrs Pumphrey call the dog's recovery 'a triumph of surgery'?",
          a: "She does not know the real cure, and she thinks the vet's skill at his **surgery** saved her dog. The title is ironic because Tricki got better through **exercise and a healthy diet**."
        }
      ],
      quiz: [
        {
          q: "Who is the narrator of the story?",
          options: ["Tristan", "Mr Herriot", "Mrs Pumphrey", "Hodgkin"],
          answer: 1,
          explain: "The narrator is the vet, **Mr Herriot**."
        },
        {
          q: "What was Tricki's main fault?",
          options: ["Biting people", "Barking at night", "Greed", "Laziness only"],
          answer: 2,
          explain: "His only fault was **greed**, encouraged by his owner."
        },
        {
          q: "How long did Tricki stay at the surgery?",
          options: ["A day", "A week", "A month", "About a fortnight"],
          answer: 3,
          explain: "He stayed for about **two weeks**."
        },
        {
          q: "What did Tricki get as treatment at the surgery?",
          options: ["Company, exercise and plain food", "An operation", "A strict medicine course", "Cod-liver oil"],
          answer: 0,
          explain: "He recovered by **running with other dogs and eating plain food**."
        },
        {
          q: "Why is the title ironic?",
          options: ["Tricki died", "No actual surgery took place", "Herriot was not a doctor", "The surgery was free"],
          answer: 1,
          explain: "There was **no operation**; the cure was natural."
        }
      ]
    },

    {
      id: "the-thiefs-story",
      title: "The Thief’s Story",
      section: "Footprints without Feet",
      summary: "Ruskin Bond's story of Hari Singh, a fifteen-year-old thief who steals from Anil, then returns the money and is won over by Anil's trust.",
      notes: [
        {
          heading: "The story",
          points: [
            "The narrator, a **fifteen-year-old thief** who calls himself **Hari Singh**, meets **Anil**, a kind, simple man of about twenty-five who watches a wrestling match. He asks to work for Anil without wages.",
            "Anil, a **struggling writer**, takes him in, lets him sleep on the balcony and **teaches him to cook, write his name** and, later, whole sentences.",
            "Anil trusts him completely, gives him a key, and does not mind if he makes a rupee a day on the shopping. This makes the boy find it **harder to rob him**.",
            "One night, after Anil sells a book and tucks **600 rupees** under his mattress, Hari steals it and runs to the station but **misses the train**. He sits in the rain at a clock tower.",
            "He decides he should go back to learn to read and write. He **returns and puts the notes back**. Next morning Anil gives him a (damp) fifty-rupee note, 'You'll be paid regularly', and says they will start writing sentences. Hari realises Anil knows."
          ]
        },
        {
          heading: "Characters",
          points: [
            "**Hari Singh:** a clever, experienced young thief who lies easily, but longs to become educated and respected.",
            "**Anil:** trusting, generous, kind, and a good judge of character, who shows no anger and gives the boy a second chance.",
            "Anil's silent forgiveness shows his understanding of the boy."
          ]
        },
        {
          heading: "Themes",
          points: [
            "**Trust can transform a person.**",
            "**Education** as a path to a better life.",
            "**Conscience and second chances.**",
            "The boy's belief that robbing a **careless man** takes the pleasure out of theft, and his idea of the faces of the robbed (greedy man: fear; rich man: anger; poor man: acceptance; Anil: sadness for lost trust)."
          ]
        }
      ],
      formulas: [
        "Author: Ruskin Bond",
        "Thief's assumed name: Hari Singh (a new name each month); age 15",
        "Money stolen: 600 rupees in fifty-rupee notes; Anil lived over the Jumna Sweet Shop",
        "Turning point: the thief returns the money; Anil begins to teach him sentences"
      ],
      terms: [
        { term: "Flattery", meaning: "Insincere praise used to win favour." },
        { term: "Appealing smile", meaning: "An attractive smile that wins sympathy, which Hari often used." },
        { term: "Trust", meaning: "Firm belief that someone is honest and reliable." },
        { term: "Maidan", meaning: "A large open ground in or near a town." },
        { term: "Conscience", meaning: "An inner sense of right and wrong." }
      ],
      qa: [
        {
          q: "Why did Hari Singh find it difficult to rob Anil, and why did he return the money?",
          a: "Anil was **trusting and careless**, which made the theft unpleasant. After the theft Hari felt lost and thought of the chance to learn to read and write from Anil, so he decided to **put the money back**."
        },
        {
          q: "Why did Anil not hand the thief to the police?",
          a: "Anil understood that the boy needed **trust and a chance**. He quietly gave him money and began to teach him, using kindness rather than punishment, to help him change."
        },
        {
          q: "What does the title suggest?",
          a: "The story is told by the **thief himself**, so it is his account of how kindness changed him; it focuses on his feelings and change, not on the crime."
        }
      ],
      quiz: [
        {
          q: "Who wrote ‘The Thief’s Story’?",
          options: ["Ruskin Bond", "Victor Canning", "H.G. Wells", "K.A. Abbas"],
          answer: 0,
          explain: "The story is by **Ruskin Bond**."
        },
        {
          q: "What was Anil's profession?",
          options: ["Wrestler", "Cook", "Writer", "Shopkeeper"],
          answer: 2,
          explain: "Anil **wrote for magazines** and sold books."
        },
        {
          q: "How much money did Hari Singh steal?",
          options: ["50 rupees", "6,000 rupees", "100 rupees", "600 rupees"],
          answer: 3,
          explain: "He stole **600 rupees** in fifty-rupee notes."
        },
        {
          q: "Why did the thief miss the train to Lucknow?",
          options: ["He hesitated for an unexplained reason", "The train was cancelled", "He lost the ticket", "A policeman stopped him"],
          answer: 0,
          explain: "He **hesitated** 'for some reason I can't explain' and lost the chance."
        },
        {
          q: "What did Anil give Hari the next morning?",
          options: ["A new shirt", "A fifty-rupee note", "A train ticket", "A book"],
          answer: 1,
          explain: "He gave him a **fifty-rupee note**, still wet from the rain."
        }
      ]
    },

    {
      id: "the-midnight-visitor",
      title: "The Midnight Visitor",
      section: "Footprints without Feet",
      summary: "Robert Arthur's story of Ausable, an unlikely secret agent who outwits an armed rival by inventing a balcony that does not exist.",
      notes: [
        {
          heading: "The story",
          points: [
            "**Fowler**, a young writer, expects a spy to be glamorous, but meets **Ausable**, a **fat man with an American accent** living in a gloomy hotel room in Paris.",
            "Ausable says he is expecting an important paper about **new missiles**. When the light comes on, **Max**, a rival agent, is already in the room with a **pistol**, and wants the report.",
            "Ausable pretends there is a **balcony** through which people entered his room before, so Max says he came by passkey.",
            "When a knock comes, Ausable says it is the **police**. Max, afraid, says he will wait on the balcony and **climbs out of the window**.",
            "Max drops from the sill and **screams**: there is **no balcony**, only a long fall from the sixth floor. The knock was actually the waiter **Henry** with a drink."
          ]
        },
        {
          heading: "Characters",
          points: [
            "**Ausable:** fat, wheezing and unassuming, but clever, calm, quick-thinking and witty. He uses **presence of mind**.",
            "**Max:** slender, fox-faced, cunning but gullible under pressure.",
            "**Fowler:** a young, romantic, inexperienced writer who is shocked."
          ]
        },
        {
          heading: "Themes",
          points: [
            "**Appearances deceive:** an unlikely hero.",
            "**Presence of mind** and mental preparedness.",
            "**Suspense and a twist ending.**",
            "Message: intelligence can defeat weapons."
          ]
        }
      ],
      formulas: [
        "Author: Robert Arthur",
        "Characters: Ausable (agent), Fowler (writer), Max (rival), Henry (the waiter)",
        "Setting: the sixth-floor room of a Paris hotel; appointment at 12:30",
        "Trick: a non-existent balcony and an imaginary police knock"
      ],
      terms: [
        { term: "Espionage", meaning: "The act of spying to obtain secret information." },
        { term: "Prosaic", meaning: "Ordinary and dull, lacking romance." },
        { term: "Passkey", meaning: "A key that opens many locks, such as a hotel master key." },
        { term: "Presence of mind", meaning: "The ability to think and act quickly and calmly in an emergency." },
        { term: "Authentic", meaning: "Genuine, real." }
      ],
      qa: [
        {
          q: "How is Ausable different from other secret agents in stories?",
          a: "He is **fat, wheezy and has an American accent**, so he looks nothing like a glamorous spy. His real strength is his sharp mind and calm nerves."
        },
        {
          q: "How does Ausable get rid of Max?",
          a: "He **invents a balcony** outside his window and a knock from the 'police'. Frightened of being caught, Max climbs out onto the imaginary balcony and **falls**, since there is no balcony."
        },
        {
          q: "When did Ausable plan his trick?",
          a: "He seems to have made the plan **on the spot**, using Max's own remark about entering by a balcony, though the arrival of Henry shows he had also arranged help in advance."
        }
      ],
      quiz: [
        {
          q: "What is Fowler's profession?",
          options: ["Policeman", "Writer", "Waiter", "Doctor"],
          answer: 1,
          explain: "Fowler is a **young writer**."
        },
        {
          q: "What does Max want from Ausable?",
          options: ["A passport", "Money", "A report about new missiles", "A hotel room"],
          answer: 2,
          explain: "Max wants the **report on new missiles**."
        },
        {
          q: "Who was at the door in the end?",
          options: ["The police", "Fowler's friend", "Max's partner", "The waiter, Henry"],
          answer: 3,
          explain: "It was **Henry**, with a tray and a drink."
        },
        {
          q: "According to Ausable's story, whose balcony could be reached from the empty room two doors down?",
          options: ["The next apartment's", "The hotel owner's", "Max's own room's", "Fowler's room's"],
          answer: 0,
          explain: "He said the balcony **belonged to the next apartment**; in fact there was no balcony at all."
        },
        {
          q: "What quality does Ausable show?",
          options: ["Presence of mind", "Greed", "Cruelty", "Shyness"],
          answer: 0,
          explain: "He thinks quickly and acts calmly: **presence of mind**."
        }
      ]
    },

    {
      id: "a-question-of-trust",
      title: "A Question of Trust",
      section: "Footprints without Feet",
      summary: "Victor Canning's story of Horace Danby, a lock-maker who robs a safe every year to buy rare books and is tricked by a clever young woman.",
      notes: [
        {
          heading: "The story",
          points: [
            "**Horace Danby** is about fifty, unmarried, and a respected **lock-maker**, but once a year he **robs a safe** to pay for the **rare, expensive books** he loves. He once served a sentence in a **prison library**.",
            "This July he targets the Grange at **Shotover**, after studying the house for two weeks while the family is in London. The two servants go to the cinema.",
            "A **small dog named Sherry** lies in the kitchen, and Horace calms it by calling it by its right name. In the drawing room the strong scent of **flowers** brings on his **hay fever**.",
            "A **young woman** in red surprises him and speaks kindly of his sneezing. She asks him to open the safe, saying she **forgot the numbers** and needs her jewels for a party.",
            "He opens it **without gloves** and leaves happily. Two days later he is **arrested**; the real owner's wife, a grey-haired lady of sixty, denies any such story. He ends up as the **assistant librarian in prison** and is angry when people mention 'honour among thieves'."
          ]
        },
        {
          heading: "Characters",
          points: [
            "**Horace Danby:** skilled, careful and polite, but naive and too trusting; a thief who loves books.",
            "**The young woman:** clever, calm and a skilled actress; she is the **real criminal**.",
            "**Sherry:** the friendly dog that lets both of them pass."
          ]
        },
        {
          heading: "Themes",
          points: [
            "**Trust and deceit:** the honest-looking can be criminal, the criminal can be fooled.",
            "**Irony:** the thief is cheated by another thief.",
            "**'Set a thief to catch a thief'** or **'honour among thieves'**: the story shows there is **no honour** among thieves.",
            "**Crime does not pay.**"
          ]
        }
      ],
      formulas: [
        "Author: Victor Canning",
        "Protagonist: Horace Danby, lock-maker and book collector; the safe held jewels worth about fifteen thousand pounds",
        "Place: Shotover Grange; the dog is Sherry",
        "Clue that betrays him: his fingerprints, since he removed his gloves"
      ],
      terms: [
        { term: "Hay fever", meaning: "An allergy to pollen or dust that makes one sneeze." },
        { term: "Respectable", meaning: "Having a good reputation in society." },
        { term: "Burglar alarm", meaning: "A device that warns of a break-in." },
        { term: "Culprit", meaning: "The person who has committed a crime." },
        { term: "Honour among thieves", meaning: "The idea that even criminals keep faith with one another." }
      ],
      qa: [
        {
          q: "Why did Horace Danby steal every year?",
          a: "He loved **rare, expensive books** and needed money to buy them. He robbed a safe once a year, took enough to last a year, and bought his books secretly through an agent."
        },
        {
          q: "Who is the real culprit in the story?",
          a: "The **young woman** is the real culprit. She made Horace open the safe, took the jewels, and let him take the blame, since his fingerprints were all over the room."
        },
        {
          q: "How does the story illustrate 'honour among thieves'?",
          a: "It shows that there is **no honour**: one thief tricks another. Horace trusts her and is betrayed, so he gets angry whenever anyone speaks of honour among thieves."
        }
      ],
      quiz: [
        {
          q: "What was Horace Danby's profession?",
          options: ["Librarian", "Policeman", "Doctor", "Lock-maker"],
          answer: 3,
          explain: "Horace **made locks** and ran a business."
        },
        {
          q: "What does Horace love to collect?",
          options: ["Paintings", "Coins", "Rare books", "Stamps"],
          answer: 2,
          explain: "He loved **rare, expensive books**."
        },
        {
          q: "What problem troubled Horace in the drawing room?",
          options: ["A broken tool", "Hay fever caused by the flowers", "A noisy dog", "A locked door"],
          answer: 1,
          explain: "The **flowers** set off his hay fever."
        },
        {
          q: "Why was Horace caught by the police?",
          options: ["His fingerprints were all over the room", "The servants saw him", "The dog barked", "He left his tools"],
          answer: 0,
          explain: "He had opened the safe **without gloves**."
        },
        {
          q: "What does Horace do in prison at the end?",
          options: ["Makes locks", "Works as assistant librarian", "Teaches", "Cooks"],
          answer: 1,
          explain: "He becomes the **assistant librarian** in prison."
        }
      ]
    },

    {
      id: "footprints-without-feet",
      title: "Footprints without Feet",
      section: "Footprints without Feet",
      summary: "An adaptation of H.G. Wells's The Invisible Man, telling how the scientist Griffin becomes invisible, misuses his power and causes chaos in London and the village of Iping.",
      notes: [
        {
          heading: "The story",
          points: [
            "Two boys see **fresh muddy footprints** appear on London steps with nobody making them. The maker is **Griffin**, a scientist who has made his body **transparent** by swallowing rare drugs.",
            "Griffin is **lawless**; after his landlord tries to evict him, he sets fire to the house, and has to escape naked, **invisible, homeless and penniless**.",
            "In the cold January he hides in a **big London store**, takes clothes and food, and sleeps. He is almost caught, so he takes off the clothes again.",
            "At a **theatrical shop in Drury Lane** he finds bandages, dark glasses, a false nose, whiskers and a hat. He **attacks the shopkeeper** and robs him.",
            "He goes by train to **Iping** and takes rooms at an inn. **Mrs Hall** thinks him an eccentric scientist. After he steals a **clergyman's** money and the furniture seems to 'attack' Mrs Hall, the villagers call for the constable, **Mr Jaffers**.",
            "Griffin angrily **throws off his bandages and clothes**, becoming a headless, then invisible man. He knocks Jaffers unconscious and escapes."
          ]
        },
        {
          heading: "Characters and themes",
          points: [
            "**Griffin:** brilliant but selfish, short-tempered and cruel; he **misuses his discovery**.",
            "**Mrs Hall:** curious and well-meaning, but frightened by the strange events.",
            "**Mr Jaffers:** a brave and dutiful constable.",
            "**Themes:** the **misuse of science**, the lawlessness of power without conscience, and the comic and frightening effects of invisibility."
          ]
        }
      ],
      formulas: [
        "Author: H.G. Wells (adapted from The Invisible Man)",
        "Scientist: Griffin; village: Iping; landlady: Mrs Hall; constable: Mr Jaffers",
        "London places: a big store and Drury Lane (theatrical shop)",
        "Key idea: science and discovery misused"
      ],
      terms: [
        { term: "Transparent", meaning: "Clear enough to see through, like glass." },
        { term: "Eccentric", meaning: "Behaving in a strange or unusual way." },
        { term: "Lawless", meaning: "Not obeying the law." },
        { term: "Constable", meaning: "A police officer of the lowest rank." },
        { term: "Bewildered", meaning: "Confused and puzzled." }
      ],
      qa: [
        {
          q: "How did Griffin first become visible to others?",
          a: "He was invisible, but as he walked barefoot he stepped in **mud** and left **footprints**, which two boys noticed and followed until they faded."
        },
        {
          q: "Why does Mrs Hall think the scientist is eccentric?",
          a: "He covered his face with bandages and spectacles, kept to his rooms, wanted solitude and was **irritable**. She accepted it because he had **paid in advance**."
        },
        {
          q: "What does the story show about the use of scientific discoveries?",
          a: "It shows that a discovery can become **dangerous when used without responsibility**. Griffin uses invisibility to steal, attack and cause fear instead of doing good."
        }
      ],
      quiz: [
        {
          q: "Who wrote the original story?",
          options: ["Ruskin Bond", "H.G. Wells", "Anton Chekhov", "Robert Arthur"],
          answer: 1,
          explain: "It is adapted from **H.G. Wells's** The Invisible Man."
        },
        {
          q: "What did Griffin take to become invisible?",
          options: ["A magic ring", "A potion from a witch", "A strange machine", "Certain rare drugs"],
          answer: 3,
          explain: "He **swallowed rare drugs** that made his body transparent."
        },
        {
          q: "Where did Griffin go after London?",
          options: ["Oxford", "Bath", "Iping", "Brighton"],
          answer: 2,
          explain: "He took the train to the village of **Iping**."
        },
        {
          q: "Who tried to arrest Griffin in the inn?",
          options: ["Mr Jaffers", "Mrs Hall", "The clergyman", "Mr Hall"],
          answer: 0,
          explain: "The village constable, **Mr Jaffers**, tried to arrest him."
        },
        {
          q: "Why did Griffin wear bandages and dark glasses?",
          options: ["To protect from cold", "To hide the fact that he had no visible face", "To look like a doctor", "For a film"],
          answer: 1,
          explain: "He wanted to **hide his invisibility** and appear like a normal person."
        }
      ]
    },

    {
      id: "the-making-of-a-scientist",
      title: "The Making of a Scientist",
      section: "Footprints without Feet",
      summary: "Robert W. Peterson's account of Richard Ebright, whose boyhood passion for butterflies grew into a career in science marked by curiosity, hard work and a will to win for the right reasons.",
      notes: [
        {
          heading: "Childhood and early interests",
          points: [
            "At 22 **Richard Ebright** and his room-mate **James Wong** published a new theory on how cells work in the *Proceedings of the National Academy of Science*; it was the first time **college students** had been published there.",
            "An **only child** in Pennsylvania, he started **collecting butterflies** in kindergarten, and also rocks, fossils, coins and stars. His mother encouraged him with trips, **telescopes, microscopes and cameras**; his father died when he was in third grade.",
            "By second grade he had collected **all twenty-five species** of butterflies near his home.",
            "The children's book **The Travels of Monarch X** opened the world of science to him; he wrote to **Dr Frederick Urquhart** and began tagging monarch butterflies, even raising thousands in his basement."
          ]
        },
        {
          heading: "Science fairs and research",
          points: [
            "In seventh grade he **lost** at a county science fair with a display of slides and learned that winners had done a **real experiment**.",
            "Next year he tried to find the cause of a **viral disease** of monarch caterpillars, and this time he **won**. Later he tested whether **viceroys copy monarchs** by using a starling.",
            "In high school he found that the **gold spots on a monarch pupa** make a **hormone** needed for its development, which won him fairs and summer lab work at the Walter Reed Army Institute.",
            "At Harvard he used X-ray photographs of a hormone to form a **theory of how the cell reads the DNA blueprint**; he graduated **second in his class of 1,510**."
          ]
        },
        {
          heading: "Qualities and message",
          points: [
            "**Curiosity, hard work and a love for learning**, plus support from his mother and teacher **Mr Weiherer**.",
            "He also excelled in debate, public speaking, canoeing and photography.",
            "His teacher said he competed 'for the right reasons': to do his best, not simply to win.",
            "Message: the making of a scientist needs **a first-rate mind, curiosity, and the will to win for the right reasons**."
          ]
        }
      ],
      formulas: [
        "Author: Robert W. Peterson; subject: Richard H. Ebright",
        "Spark: butterfly collecting, and the book The Travels of Monarch X",
        "Research: gold spots on the monarch pupa produce a hormone; later the DNA 'blueprint' theory",
        "Ingredients of a scientist: first-rate mind + curiosity + will to win for the right reasons"
      ],
      terms: [
        { term: "Monarch", meaning: "A large orange and black butterfly that migrates long distances." },
        { term: "Pupa", meaning: "The stage between caterpillar and adult butterfly." },
        { term: "Hormone", meaning: "A chemical made in the body that controls growth or function." },
        { term: "Tagging", meaning: "Attaching a small label to an animal to track its movements." },
        { term: "DNA", meaning: "The substance in a cell's nucleus that carries the instructions for life." }
      ],
      qa: [
        {
          q: "How did a book become a turning point in Ebright's life?",
          a: "His mother gave him **The Travels of Monarch X**, which told how monarchs migrate and invited readers to tag them for research. This turned collecting into **real scientific work**."
        },
        {
          q: "What lesson did Ebright learn when he lost at the science fair?",
          a: "He learned that the winners had done **real experiments**, not just neat displays. He then decided to do genuine research, which led to his later success."
        },
        {
          q: "What are the qualities that go into the making of a scientist?",
          a: "A **first-rate mind**, **curiosity**, hard work, and the **will to win for the right reasons**, that is, to do one's best rather than to win prizes."
        }
      ],
      quiz: [
        {
          q: "What did Richard Ebright first collect?",
          options: ["Coins", "Butterflies", "Fossils", "Stamps"],
          answer: 1,
          explain: "He began with **butterflies** in kindergarten."
        },
        {
          q: "Which book opened the world of science to him?",
          options: ["The Insect World", "A Child's Guide to Science", "The Travels of Monarch X", "The Starry Sky"],
          answer: 2,
          explain: "**The Travels of Monarch X** gave him his turning point."
        },
        {
          q: "What did he discover about the gold spots on the monarch pupa?",
          options: ["They are ornamental", "They scare birds", "They hold water", "They produce a hormone"],
          answer: 3,
          explain: "The spots produce a **hormone** necessary for development."
        },
        {
          q: "Who helped Ebright with ideas for experiments?",
          options: ["Dr Frederick Urquhart", "Mr Weiherer", "James Wong", "His father"],
          answer: 0,
          explain: "**Dr Urquhart** of the University of Toronto sent him ideas."
        },
        {
          q: "Who encouraged Ebright most in his childhood?",
          options: ["His father", "His teacher", "His mother", "His room-mate"],
          answer: 2,
          explain: "His **mother** bought him equipment and supported his interests."
        }
      ]
    },

    {
      id: "the-necklace",
      title: "The Necklace",
      section: "Footprints without Feet",
      summary: "Guy de Maupassant's story of Mathilde Loisel, who borrows a diamond necklace for a ball, loses it, spends ten years in poverty to replace it, and learns that the original was false.",
      notes: [
        {
          heading: "The story",
          points: [
            "**Mathilde Loisel** is pretty but unhappy, married to a **petty clerk**; she dreams of luxury, jewels and fine dinners and is ashamed of her poor home.",
            "Her husband brings an **invitation to the Minister's ball**, but she weeps because she has nothing to wear. He gives her the **four hundred francs** he had saved for a gun, to buy a dress.",
            "She still wants jewels, so she borrows a **diamond necklace** from her rich friend **Mme Forestier**. At the ball she is the **belle of the evening**.",
            "On returning home she finds the **necklace lost**. After a fruitless search, they buy an identical one for **thirty-six thousand francs**, using his father's **eighteen thousand** and heavy loans.",
            "For **ten years** they live in poverty, doing hard labour to repay the debt. She grows old and rough.",
            "When she meets Mme Forestier, she tells the truth. Mme Forestier reveals that her necklace was **false**, worth at most five hundred francs."
          ]
        },
        {
          heading: "Characters",
          points: [
            "**Mathilde:** beautiful but vain, discontented and proud; later brave and hardworking.",
            "**M. Loisel:** kind, loving, simple and self-sacrificing.",
            "**Mme Forestier:** rich, generous but a little careless; she never checks the returned necklace."
          ]
        },
        {
          heading: "Themes",
          points: [
            "**Vanity and false pride** lead to ruin.",
            "**Appearances vs reality**: the necklace was a fake.",
            "**Irony of fate:** ten years of suffering for a worthless piece of jewellery.",
            "Message: be content with what we have and be honest; a small lie or silence can cost heavily."
          ]
        }
      ],
      formulas: [
        "Author: Guy de Maupassant",
        "Dress money: 400 francs; replacement necklace: 36,000 francs; the real one: at most 500 francs",
        "Time spent repaying the debt: ten years",
        "Irony: the borrowed necklace was false"
      ],
      terms: [
        { term: "Franc", meaning: "The old French unit of money." },
        { term: "Usurer", meaning: "A person who lends money at very high interest." },
        { term: "Vanity", meaning: "Excessive pride in one's looks or possessions." },
        { term: "Ecstatic", meaning: "Extremely happy." },
        { term: "Irony", meaning: "A result that is the opposite of what is expected." }
      ],
      qa: [
        {
          q: "Why was Mathilde always unhappy?",
          a: "She felt she was born for **luxury** but had a poor life. Her small home, plain clothes and lack of jewels made her feel she was in the wrong class."
        },
        {
          q: "What mistake did Mathilde make, and what was its consequence?",
          a: "She did not tell Mme Forestier that the necklace was lost. She replaced it with an expensive one, and the Loisels paid for it with **ten years of poverty** and hard work."
        },
        {
          q: "What is the irony at the end of the story?",
          a: "Mathilde suffered ten years to replace a necklace that was **only imitation**, worth at most five hundred francs. All her sacrifice was for nothing."
        }
      ],
      quiz: [
        {
          q: "Who wrote ‘The Necklace’?",
          options: ["Guy de Maupassant", "K.A. Abbas", "Victor Canning", "James Herriot"],
          answer: 0,
          explain: "The story is by the French writer **Guy de Maupassant**."
        },
        {
          q: "How much money did M. Loisel give her for the dress?",
          options: ["Forty thousand francs", "Eighteen thousand francs", "Four hundred francs", "Five hundred francs"],
          answer: 2,
          explain: "He gave her **four hundred francs**, saved for a gun."
        },
        {
          q: "From whom did Mathilde borrow the necklace?",
          options: ["Her mother", "A shopkeeper", "The Minister's wife", "Mme Forestier"],
          answer: 3,
          explain: "She borrowed it from her rich friend **Mme Forestier**."
        },
        {
          q: "How long did the Loisels take to repay the debt?",
          options: ["One year", "Ten years", "Five years", "Twenty years"],
          answer: 1,
          explain: "It took **ten years**."
        },
        {
          q: "What was the truth about the original necklace?",
          options: ["It was real diamond", "It was stolen", "It was made of false stones", "It was an heirloom"],
          answer: 2,
          explain: "It was **false** and worth about five hundred francs."
        }
      ]
    },

    {
      id: "bholi",
      title: "Bholi",
      section: "Footprints without Feet",
      summary: "K.A. Abbas's story of Sulekha, nicknamed Bholi, a neglected girl who finds courage and confidence through education and refuses a greedy bridegroom.",
      notes: [
        {
          heading: "The story",
          points: [
            "**Sulekha**, called **Bholi** (simpleton), is the youngest of Numberdar Ramlal's seven children. A fall in infancy and **smallpox** left her slow, pock-marked and **stammering**, and she is neglected by her family.",
            "When she is **seven**, a girls' school opens in the village. Ramlal does not dare to disobey the Tehsildar, and his wife suggests sending Bholi, as she is unlikely to marry.",
            "The **kind teacher** speaks softly, helps her say her name, and promises that if she learns, no one will laugh at her. Bholi feels a **new hope**.",
            "Years later, her parents accept the marriage proposal of **Bishamber Nath**, a rich, older, lame grocer who asks for no dowry, because Bholi is pock-marked.",
            "At the wedding Bishamber sees her face and demands **five thousand rupees**. Ramlal pays. Bholi then throws the garland into the fire, **speaks without stammering**, and refuses to marry such a greedy man.",
            "She promises to look after her parents and **teach at the same school**. The teacher watches with deep satisfaction."
          ]
        },
        {
          heading: "Characters",
          points: [
            "**Bholi:** timid and neglected at first, then brave, confident, self-respecting and sensible.",
            "**The teacher:** kind, patient and encouraging; the person who changes Bholi's life.",
            "**Ramlal and his wife:** weak, conventional parents who care for izzat and dowry.",
            "**Bishamber Nath:** greedy and heartless."
          ]
        },
        {
          heading: "Themes",
          points: [
            "**Power of education** to build confidence.",
            "**Women's empowerment** and the fight against **dowry**.",
            "**Kindness and encouragement** can transform lives.",
            "Message: a girl's worth does not depend on her looks."
          ]
        }
      ],
      formulas: [
        "Author: K.A. Abbas",
        "Real name: Sulekha; nickname: Bholi; father: Numberdar Ramlal",
        "Groom: Bishamber Nath, who demanded five thousand rupees",
        "Turning point: Bholi refuses to marry and speaks without stammer"
      ],
      terms: [
        { term: "Simpleton", meaning: "A person thought to be foolish or easily fooled." },
        { term: "Dowry", meaning: "Money or gifts demanded from the bride's family at marriage." },
        { term: "Numberdar", meaning: "A village official who collects revenue." },
        { term: "Izzat", meaning: "Honour or family reputation." },
        { term: "Stammer", meaning: "To speak with difficulty, repeating sounds." }
      ],
      qa: [
        {
          q: "Why did Bholi's parents send her to school?",
          a: "Ramlal was told by the **Tehsildar** to set an example. His wife suggested sending Bholi, since she was unlikely to marry and **the teachers could worry about her**."
        },
        {
          q: "How did the teacher change Bholi?",
          a: "She spoke **gently**, encouraged Bholi to say her name and promised she would speak without fear if she studied. This gave her **confidence and hope**, and she learned to speak clearly."
        },
        {
          q: "Why did Bholi refuse to marry Bishamber Nath?",
          a: "He had demanded **five thousand rupees** after seeing her pock-marks. Bholi saw him as **greedy and mean**, so she threw the garland into the fire and refused."
        }
      ],
      quiz: [
        {
          q: "What was Bholi's real name?",
          options: ["Radha", "Champa", "Mangla", "Sulekha"],
          answer: 3,
          explain: "Her real name was **Sulekha**."
        },
        {
          q: "Why was Bholi's speech affected?",
          options: ["She had a stammer", "She was shy only", "She was deaf", "She spoke another language"],
          answer: 0,
          explain: "She **stammered**, from childhood."
        },
        {
          q: "Who changed Bholi's life by being kind?",
          options: ["Her mother", "The Tehsildar", "The teacher", "Her sister"],
          answer: 2,
          explain: "The **kind teacher** gave her hope and confidence."
        },
        {
          q: "What did Bishamber Nath demand at the wedding?",
          options: ["A house", "Five thousand rupees", "A horse", "Two thousand rupees"],
          answer: 1,
          explain: "He demanded **five thousand rupees**."
        },
        {
          q: "What does Bholi decide to do at the end?",
          options: ["Leave the village", "Marry later", "Work in a shop", "Teach in the same school and care for her parents"],
          answer: 3,
          explain: "She will serve her parents and **teach at the school**."
        }
      ]
    }
  ]
});
