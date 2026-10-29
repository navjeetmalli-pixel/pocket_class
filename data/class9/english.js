// Class 9 English: Grammar, Writing Skills and Literature (Kaveri).
// Format: see CONTENT_GUIDE.md. Summaries are original; no text is reproduced from the textbook.
StudyData.add(9, "english", {
  // What this content follows. match: "textbook" | "older-book" | "topic". Set reviewed to a date once a teacher has checked it.
  syllabus: {board: "CBSE", match: "textbook", books: ["Kaveri"], note: "Grammar and writing, plus every lesson of Kaveri (summarised in our own words).", reviewed: false},
  chapters: [
    // ───────────────────────────── GRAMMAR ─────────────────────────────
    {
      id: "tenses",
      title: "Tenses",
      section: "Grammar",
      summary: "How verb forms show the time of an action (present, past or future) and whether it is simple, continuous, perfect or perfect continuous.",
      notes: [
        {
          heading: "Present tenses",
          points: [
            "**Simple present** for habits, routines and universal truths: “She walks to school.” “Water boils at 100 °C.”",
            "**Present continuous** for an action happening now or around now: “Look, it is raining.”",
            "**Present perfect** for a past action whose result matters now, often with just, already, yet, ever, never: “I have lost my key.”",
            "**Present perfect continuous** for an action that began in the past and is still going on, with since or for: “They have been practising since morning.”"
          ]
        },
        {
          heading: "Past tenses",
          points: [
            "**Simple past** for an action finished at a stated past time (yesterday, last week, in 2019, ago): “We visited Agra last year.”",
            "**Past continuous** for an action in progress at a past moment, often interrupted: “I was reading when the lights went out.”",
            "**Past perfect** for the earlier of two past actions: “The film had started before we reached the hall.”",
            "**Past perfect continuous** for an action that went on for some time before another past action: “She had been waiting for an hour when the bus came.”"
          ]
        },
        {
          heading: "Future forms",
          points: [
            "**will/shall + V1** for predictions, promises and quick decisions: “I will help you with the project.”",
            "**be going to + V1** for plans, and for things that are clearly about to happen: “Look at those clouds; it is going to rain.”",
            "**will be + V-ing** (future continuous) for an action in progress at a future time: “At 8 pm tomorrow I will be travelling to Pune.”",
            "**will have + V3** (future perfect) for an action completed before a future time: “I will have finished the book by Sunday.”",
            "After when, before, after, until, as soon as and if, use the **simple present** for a future idea: “I will call you when I reach home.” (not “will reach”)"
          ]
        },
        {
          heading: "Time words that decide the tense",
          points: [
            "yesterday, ago, last…, in 2015 → **simple past**, never the present perfect.",
            "**since** + a point of time (since Monday) and **for** + a length of time (for three days) → perfect or perfect continuous.",
            "just, already, yet, ever, never, so far → usually the **present perfect**.",
            "always, often, usually, every day → usually the **simple present** (or simple past for past habits)."
          ]
        },
        {
          heading: "Common errors to avoid",
          points: [
            "✗ “I have seen him yesterday.” ✓ “I saw him yesterday.”",
            "✗ “I am knowing the answer.” ✓ “I know the answer.” **Stative verbs** such as know, believe, like, want and own are rarely used in the continuous.",
            "✗ “He did not went.” ✓ “He did not go.” After do/does/did, always use V1.",
            "✗ “She has came.” ✓ “She has come.” After has/have/had, always use V3."
          ]
        }
      ],
      formulas: [
        "Simple present: V1 / V1 + s or es (He plays.)",
        "Present continuous: is/am/are + V-ing",
        "Present perfect: has/have + V3",
        "Present perfect continuous: has/have + been + V-ing",
        "Simple past: V2 (did + V1 in negatives and questions)",
        "Past continuous: was/were + V-ing",
        "Past perfect: had + V3",
        "Past perfect continuous: had + been + V-ing",
        "Simple future: will/shall + V1",
        "Future continuous: will/shall + be + V-ing",
        "Future perfect: will/shall + have + V3"
      ],
      terms: [
        { term: "V1, V2, V3", meaning: "The three main forms of a verb: base form (go), past simple (went) and past participle (gone)." },
        { term: "Stative verb", meaning: "A verb that shows a state, not an action (know, like, believe, own). It is rarely used in continuous tenses." },
        { term: "Present perfect", meaning: "has/have + V3. Links a past action to the present: “I have finished my work.”" },
        { term: "Past perfect", meaning: "had + V3. Shows the earlier of two past actions: “The bell had rung before I arrived.”" },
        { term: "Time marker", meaning: "A word or phrase such as yesterday, since, for, already or next week that signals which tense to use." }
      ],
      examples: [
        {
          q: "Correct the error: “I have visited Shimla last summer.”",
          steps: [
            "Spot the time marker: “last summer” is a finished, stated time in the past.",
            "The present perfect (have visited) cannot be used with a stated past time.",
            "Use the simple past form V2: visit → visited."
          ],
          answer: "I visited Shimla last summer."
        },
        {
          q: "Fill in the correct forms: “By the time we ___ (reach) the cinema, the film ___ (start).”",
          steps: [
            "There are two past actions: our reaching the cinema and the film starting.",
            "The film started first, so the earlier action takes the past perfect: had + V3 → had started.",
            "The later action takes the simple past: reached."
          ],
          answer: "By the time we reached the cinema, the film had started."
        }
      ],
      qa: [
        {
          q: "How is the present perfect different from the simple past? Give one example of each.",
          a: "The **present perfect** (has/have + V3) connects a past action with the present and is used without a stated past time: “I have lost my pen” (I still don't have it). The **simple past** (V2) is used for an action finished at a known past time: “I lost my pen yesterday.”"
        },
        {
          q: "When is the past perfect tense used?",
          a: "When two actions happened in the past, the one that happened **earlier** is put in the past perfect (had + V3) and the later one in the simple past: “The guests had left before we arrived.”"
        },
        {
          q: "Why is “She is knowing the answer” incorrect?",
          a: "“Know” is a **stative verb**: it describes a state of mind, not an action in progress. Stative verbs are normally used in simple tenses, so the correct sentence is “She knows the answer.”"
        }
      ],
      quiz: [
        {
          q: "Fill in the blank: “Look! The baby ___ .”",
          options: ["sleeps", "is sleeping", "has slept", "slept"],
          answer: 1,
          explain: "“Look!” shows the action is happening right now, so the present continuous **is sleeping** is needed."
        },
        {
          q: "Fill in the blank: “We ___ in this town since 2015.”",
          options: ["have been living", "live", "are living", "were living"],
          answer: 0,
          explain: "“Since 2015” shows an action that started in the past and continues now, so the **present perfect continuous** is used."
        },
        {
          q: "Fill in the blank: “Water ___ at 100 °C at sea level.”",
          options: ["is boiling", "boiled", "has boiled", "boils"],
          answer: 3,
          explain: "A scientific fact or universal truth takes the **simple present**: boils."
        },
        {
          q: "Choose the correct version of: “I have seen this film yesterday.”",
          options: ["I am seeing this film yesterday.", "I have saw this film yesterday.", "I saw this film yesterday.", "I was seen this film yesterday."],
          answer: 2,
          explain: "“Yesterday” is a stated past time, so the **simple past** (saw) is required, not the present perfect."
        },
        {
          q: "Fill in the blanks: “When we reached the station, the train ___ already ___ .”",
          options: ["had … left", "has … left", "will … leave", "is … leaving"],
          answer: 0,
          explain: "The train left before we reached, so the earlier past action takes the **past perfect**: had already left."
        },
        {
          q: "Fill in the blank: “I will phone you as soon as I ___ home.”",
          options: ["will reach", "reach", "reached", "had reached"],
          answer: 1,
          explain: "After time words like as soon as, when and until, the **simple present** is used for a future idea: reach."
        }
      ]
    },

    {
      id: "modals",
      title: "Modals",
      section: "Grammar",
      summary: "Helping verbs such as can, may, must, should and will that add meanings like ability, permission, possibility, advice and obligation to the main verb.",
      notes: [
        {
          heading: "What modals are",
          points: [
            "Modals are helping verbs: can, could, may, might, will, would, shall, should, must and ought to (need and dare can also act as modals).",
            "A modal is always followed by the **base form (V1)** of the verb: “She can swim”, not “She can swims”.",
            "Modals never take -s, -ing or -ed: ✗ “He musts go.” ✓ “He must go.”",
            "Negatives and questions are made without do/does: “You should not worry.” “Can you hear me?”"
          ]
        },
        {
          heading: "Ability and permission",
          points: [
            "**can** for present ability: “Riya can speak three languages.”",
            "**could** for past ability: “I could swim when I was five.”",
            "**may** for formal permission: “May I come in, ma'am?” **can** is used for informal permission.",
            "**could** and **would** make requests more polite: “Could you please open the window?”"
          ]
        },
        {
          heading: "Possibility and wishes",
          points: [
            "**may** and **might** show that something is possible: “It may rain this evening.”",
            "**might** usually shows a weaker possibility: “He might join us later, but I'm not sure.”",
            "**may** is also used for wishes and blessings: “May you live long!”"
          ]
        },
        {
          heading: "Advice, duty and obligation",
          points: [
            "**should / ought to** for advice or moral duty: “You should eat more fruit.” “We ought to help the needy.”",
            "**must** for strong necessity or rules: “Students must carry their identity cards.”",
            "**have to** for an obligation that comes from outside: “I have to wear a uniform to school.”",
            "**must not (mustn't)** = prohibition: “You must not use phones in the exam hall.”",
            "**need not (needn't)** = no necessity: “You need not bring lunch; it will be provided.”"
          ]
        },
        {
          heading: "Will, shall and would",
          points: [
            "**will** for the future, promises and willingness: “I will lend you my notes.”",
            "**shall** with I/we for offers and suggestions: “Shall I carry your bag?” “Shall we start?”",
            "**would** for polite requests and offers: “Would you like some tea?”"
          ]
        }
      ],
      formulas: [
        "Subject + modal + V1: “He can drive.”",
        "Negative: Subject + modal + not + V1: “You must not litter.”",
        "Question: Modal + subject + V1? “May I go out?”",
        "ought to + V1: “You ought to apologise.”",
        "must not = not allowed; need not = not necessary"
      ],
      terms: [
        { term: "Modal verb", meaning: "A helping verb (can, may, must, should, etc.) that adds a meaning such as ability, permission or obligation to the main verb." },
        { term: "Ability", meaning: "Being able to do something: can (present), could (past)." },
        { term: "Permission", meaning: "Being allowed to do something: may (formal), can (informal), could (polite)." },
        { term: "Obligation", meaning: "Something one has to do: must, have to, should, ought to." },
        { term: "Prohibition", meaning: "Something that is not allowed: must not / mustn't." },
        { term: "Possibility", meaning: "Something that may happen: may, might, could." }
      ],
      examples: [
        {
          q: "Correct the error: “She can sings very well.”",
          steps: [
            "“can” is a modal.",
            "A modal is always followed by the base form (V1) of the verb.",
            "Change “sings” to “sing”."
          ],
          answer: "She can sing very well."
        },
        {
          q: "Choose must not or need not: “Tomorrow is a holiday, so you ___ come to school.”",
          steps: [
            "must not means that something is not allowed (prohibition).",
            "need not means that something is not necessary.",
            "On a holiday, coming to school is not necessary; it is not forbidden."
          ],
          answer: "Tomorrow is a holiday, so you need not come to school."
        }
      ],
      qa: [
        {
          q: "What is the difference between “must not” and “need not”? Illustrate with examples.",
          a: "“Must not” shows **prohibition**, something that is not allowed: “You must not cross the road when the signal is red.” “Need not” shows **absence of necessity**: “You need not buy a new uniform; your old one is fine.”"
        },
        {
          q: "Why do we say “May I come in?” rather than “Can I come in?” in a formal situation?",
          a: "Both ask for permission, but **may** is more formal and polite, so it suits speaking to a teacher or a senior. **Can** is used for informal permission and also for ability."
        },
        {
          q: "Fill in suitable modals: (a) ___ you help me lift this box? (b) You ___ respect your elders.",
          a: "(a) **Could** (or Can / Will) you help me lift this box? This is a request. (b) You **should** (or ought to) respect your elders. This is a moral duty."
        }
      ],
      quiz: [
        {
          q: "Choose the modal that asks for permission politely: “___ I borrow your pen, please?”",
          options: ["Must", "Ought", "May", "Would"],
          answer: 2,
          explain: "**May** is used to ask for permission formally and politely."
        },
        {
          q: "Fill in the modal of ability: “My grandfather is eighty, but he ___ still walk five kilometres a day.”",
          options: ["can", "must", "should", "ought"],
          answer: 0,
          explain: "**can** expresses present ability. “Ought” would also need “to” after it."
        },
        {
          q: "Choose the correct sentence.",
          options: ["He must finishes the work today.", "He must to finish the work today.", "He musts finish the work today.", "He must finish the work today."],
          answer: 3,
          explain: "A modal takes no -s and is followed directly by V1 without “to”: **must finish**."
        },
        {
          q: "Fill in the blank: “You ___ not buy milk; there are two packets in the fridge.”",
          options: ["must", "need", "ought", "could"],
          answer: 1,
          explain: "Buying milk is simply not necessary, so **need not** fits. “Must not” would wrongly mean buying milk is forbidden."
        },
        {
          q: "Fill in the blank: “Dark clouds are gathering. It ___ rain soon.”",
          options: ["need", "ought", "might", "has"],
          answer: 2,
          explain: "**might** expresses possibility. “Ought” would need “to”, and “need” and “has” do not fit."
        },
        {
          q: "Which modal shows a moral duty? “We ___ respect our elders.”",
          options: ["might", "may", "can", "should"],
          answer: 3,
          explain: "**should** (or ought to) is used for duty and advice."
        }
      ]
    },

    {
      id: "subject-verb-agreement",
      title: "Subject–Verb Agreement",
      section: "Grammar",
      summary: "The verb must agree with its subject in number and person: a singular subject takes a singular verb and a plural subject takes a plural verb.",
      notes: [
        {
          heading: "The basic rule",
          points: [
            "Singular subject → singular verb (is, was, has, V1 + s): “The girl sings.”",
            "Plural subject → plural verb (are, were, have, V1): “The girls sing.”",
            "I and you take the base form: “I play”, “You play”, never “I plays”.",
            "Find the real subject and ignore the words in between: “The box of chocolates **is** on the table.”"
          ]
        },
        {
          heading: "Words that take a singular verb",
          points: [
            "each, every, either, neither, everyone, everybody, someone, nobody: “Each of the boys **has** a bat.”",
            "Nouns that look plural but are singular: news, mathematics, physics, economics: “The news **is** good.”",
            "Amounts of money, time and distance taken as one unit: “Fifty rupees **is** too much for this pen.”",
            "Two nouns joined by and that name one person or idea: “Bread and butter **is** my breakfast.”"
          ]
        },
        {
          heading: "Joined subjects",
          points: [
            "Subjects joined by **and** usually take a plural verb: “Ravi and Sita **are** classmates.”",
            "With **either…or / neither…nor / not only…but also**, the verb agrees with the **nearer** subject: “Either the teacher or the students **are** to blame.”",
            "With **as well as, along with, together with, with**, the verb agrees with the **first** subject: “The captain, along with his players, **has** arrived.”"
          ]
        },
        {
          heading: "Collective nouns and number words",
          points: [
            "A collective noun acting as one unit takes a singular verb: “The team **has** won the match.”",
            "When the members act separately, a plural verb may be used: “The jury **are** divided in their opinions.”",
            "**A number of** + plural noun → plural verb: “A number of students **are** absent.”",
            "**The number of** + plural noun → singular verb: “The number of students **is** fifty.”"
          ]
        }
      ],
      formulas: [
        "Singular subject + singular verb (is / was / has / V1 + s)",
        "Plural subject + plural verb (are / were / have / V1)",
        "either … or / neither … nor → verb agrees with the nearer subject",
        "A + as well as / along with / with + B → verb agrees with A",
        "A number of + plural noun → plural verb; The number of + plural noun → singular verb"
      ],
      terms: [
        { term: "Subject–verb agreement (concord)", meaning: "The rule that a verb must match its subject in number (singular or plural) and person." },
        { term: "Collective noun", meaning: "A noun that names a group as one unit, e.g. team, family, jury, committee, class." },
        { term: "Proximity rule", meaning: "With either…or, neither…nor and not only…but also, the verb agrees with the subject closest to it." },
        { term: "Indefinite pronoun", meaning: "Words like each, everyone, somebody and nobody, which take a singular verb." }
      ],
      examples: [
        {
          q: "Correct the error: “Each of the girls have a new bag.”",
          steps: [
            "The real subject is “Each”, not “girls”.",
            "“Each” is singular, so it takes a singular verb.",
            "Change “have” to “has”."
          ],
          answer: "Each of the girls has a new bag."
        },
        {
          q: "Fill in was or were: “Neither the manager nor his assistants ___ at the meeting.”",
          steps: [
            "With neither…nor, the verb agrees with the nearer subject.",
            "The subject nearer to the verb is “his assistants”, which is plural.",
            "A plural subject takes “were”."
          ],
          answer: "Neither the manager nor his assistants were at the meeting."
        }
      ],
      qa: [
        {
          q: "State the rule for subjects joined by “as well as”, with an example.",
          a: "When two subjects are joined by **as well as** (or along with, together with), the verb agrees with the **first** subject. “The principal as well as the teachers **is** attending the function.”"
        },
        {
          q: "Why do we say “Mathematics is my favourite subject” and not “Mathematics are…”?",
          a: "Although **mathematics** ends in -s, it is the name of a single subject, so it is singular and takes a singular verb. The same applies to physics, economics and news."
        },
        {
          q: "Explain the difference between “a number of” and “the number of”.",
          a: "**A number of** means “many” and takes a plural verb: “A number of birds are on the tree.” **The number of** refers to a single figure (the count) and takes a singular verb: “The number of birds is small.”"
        }
      ],
      quiz: [
        {
          q: "Fill in: “The quality of these mangoes ___ excellent.”",
          options: ["are", "is", "were", "have"],
          answer: 1,
          explain: "The subject is “quality” (singular); “of these mangoes” only describes it. So the verb is **is**."
        },
        {
          q: "Fill in: “Mathematics ___ my favourite subject.”",
          options: ["are", "were", "have been", "is"],
          answer: 3,
          explain: "Mathematics is the name of one subject, so it takes the singular verb **is**."
        },
        {
          q: "Fill in: “Either Rohan or his friends ___ broken the window.”",
          options: ["has", "is", "have", "was"],
          answer: 2,
          explain: "With either…or, the verb agrees with the nearer subject, “his friends” (plural): **have** broken."
        },
        {
          q: "Fill in: “A number of students ___ absent today.”",
          options: ["are", "is", "was", "has"],
          answer: 0,
          explain: "“A number of” means “many”, so it takes a plural verb: **are**."
        },
        {
          q: "Choose the correct version of: “The teacher, along with her students, are going on a trip.”",
          options: [
            "The teacher, along with her students, were going on a trip.",
            "The teacher, along with her students, is going on a trip.",
            "The teacher, along with her students, have going on a trip.",
            "The teacher, along with her students, are go on a trip."
          ],
          answer: 1,
          explain: "With “along with”, the verb agrees with the first subject, “The teacher” (singular): **is going**."
        },
        {
          q: "Fill in: “Every boy and girl ___ given a prize.”",
          options: ["were", "are", "was", "have been"],
          answer: 2,
          explain: "When “every” comes before nouns joined by “and”, the verb is singular: **was**."
        }
      ]
    },

    {
      id: "reported-speech",
      title: "Reported Speech",
      section: "Grammar",
      summary: "How to report what someone said without using their exact words, changing tenses, pronouns and time words where needed.",
      notes: [
        {
          heading: "Direct and indirect speech",
          points: [
            "**Direct speech** gives the exact words inside quotation marks: Meena said, “I am hungry.”",
            "**Indirect (reported) speech** gives the meaning without quotation marks: Meena said that she was hungry.",
            "The verb that introduces the words (said, told, asked) is the **reporting verb**.",
            "“said to + person” becomes **told + person**: He said to me, “…” → He told me that…"
          ]
        },
        {
          heading: "Tense changes (reporting verb in the past)",
          points: [
            "is/am/are → was/were; V1 → V2: “I like tea.” → He said that he liked tea.",
            "is/are + V-ing → was/were + V-ing; has/have + V3 → had + V3.",
            "V2 (simple past) → had + V3: “I lost my bag.” → She said that she had lost her bag.",
            "will → would, can → could, may → might, shall → should.",
            "**No change** if the reporting verb is in the present or future (He says that he is busy), or if the words state a **universal truth**."
          ]
        },
        {
          heading: "Pronouns, time and place words",
          points: [
            "First person (I, we) changes according to the speaker; second person (you) changes according to the listener; third person does not change.",
            "now → then; today → that day; tonight → that night.",
            "tomorrow → the next day / the following day; yesterday → the previous day / the day before.",
            "here → there; this → that; these → those; ago → before; next week → the following week."
          ]
        },
        {
          heading: "Reporting questions",
          points: [
            "Yes/No questions: use **asked + if/whether** and statement word order: “Are you ready?” → She asked me if I was ready.",
            "Wh-questions: use **asked + the wh-word** and statement order: “Where do you live?” → He asked me where I lived.",
            "Drop the question mark, and do not put “that” before the question.",
            "Do not use do/does/did in the reported question: ✗ He asked where did I live."
          ]
        },
        {
          heading: "Reporting commands and requests",
          points: [
            "Use told/ordered for commands, requested for requests and advised for advice.",
            "Change the verb to **to + V1**: “Sit down.” → The teacher told us to sit down.",
            "Negative commands take **not to + V1**: “Don't run.” → She told the children not to run.",
            "Drop “please” and use “requested”: “Please help me.” → He requested me to help him."
          ]
        }
      ],
      formulas: [
        "Statement: Subject + said / told + object + that + reported clause",
        "Yes/No question: asked + if/whether + subject + verb",
        "Wh-question: asked + wh-word + subject + verb",
        "Command/request: told / ordered / requested + object + (not) to + V1",
        "Tense shift: is → was, has → had, V2 → had + V3, will → would, can → could, may → might"
      ],
      terms: [
        { term: "Reporting verb", meaning: "The verb that introduces the spoken words, such as said, told, asked or requested." },
        { term: "Reported speech", meaning: "Indirect speech: giving the meaning of what someone said without quoting their exact words." },
        { term: "Backshift", meaning: "Moving the verb one step into the past (is → was, has → had) when the reporting verb is in the past tense." },
        { term: "Universal truth", meaning: "A fact that is always true; its tense does not change in reported speech." }
      ],
      examples: [
        {
          q: "Change into reported speech: Meena said to me, “I am going to the market today.”",
          steps: [
            "said to me → told me; add “that”.",
            "I → she (the speaker is Meena).",
            "am going → was going (backshift).",
            "today → that day."
          ],
          answer: "Meena told me that she was going to the market that day."
        },
        {
          q: "Change into reported speech: The teacher said to Arjun, “Why are you late?”",
          steps: [
            "It is a question, so “said to” → asked.",
            "It is a wh-question, so “why” joins the two parts; no “that”.",
            "you → he (the listener is Arjun); are → was; use statement order: he was late.",
            "Remove the question mark."
          ],
          answer: "The teacher asked Arjun why he was late."
        }
      ],
      qa: [
        {
          q: "When does the tense of the reported speech not change?",
          a: "The tense does not change when (1) the reporting verb is in the **present or future** tense, e.g. He says that he is tired, and (2) the reported words express a **universal truth** or habitual fact, e.g. The teacher said that the earth is round."
        },
        {
          q: "How are commands reported? Give an example.",
          a: "Commands are reported with verbs like **told, ordered or commanded**, followed by the object and **to + V1**. For a negative command, use **not to**. “Close the door,” said the teacher to Ravi → The teacher told Ravi to close the door."
        }
      ],
      quiz: [
        {
          q: "Choose the correct reported form: Rahul said, “I am tired.”",
          options: ["Rahul said that I was tired.", "Rahul told that he was tired.", "Rahul said that he was tired.", "Rahul said that he is being tired."],
          answer: 2,
          explain: "I → he, am → was. “Told” needs an object (told me), so “Rahul told that…” is wrong."
        },
        {
          q: "Choose the correct reported form: She said to me, “Can you help me?”",
          options: ["She asked me if I could help her.", "She asked me if I can help me.", "She asked me could I help her?", "She told me that can you help her."],
          answer: 0,
          explain: "A yes/no question → asked + if; can → could; you → I; me → her; statement word order and no question mark."
        },
        {
          q: "Choose the correct reported form: The mother said to the child, “Don't touch the stove.”",
          options: ["The mother told the child don't touch the stove.", "The mother said the child not touch the stove.", "The mother told the child to not touched the stove.", "The mother told the child not to touch the stove."],
          answer: 3,
          explain: "A negative command is reported with told + object + **not to + V1**."
        },
        {
          q: "In reported speech with a past reporting verb, “yesterday” usually changes to:",
          options: ["the next day", "the previous day", "that day", "tomorrow"],
          answer: 1,
          explain: "yesterday → **the previous day** (or the day before)."
        },
        {
          q: "Following the rule for universal truths, report: The teacher said, “The earth revolves around the sun.”",
          options: [
            "The teacher said that the earth revolved around the sun.",
            "The teacher said that the earth had revolved around the sun.",
            "The teacher said that the earth revolves around the sun.",
            "The teacher said that the earth was revolving around the sun."
          ],
          answer: 2,
          explain: "A universal truth keeps its **present tense** even when the reporting verb is in the past."
        },
        {
          q: "Choose the correct reported form: He said, “I will come tomorrow.”",
          options: ["He said that he would come the next day.", "He said that I would come the next day.", "He said that he will came the next day.", "He said that he would come the previous day."],
          answer: 0,
          explain: "I → he, will → would, tomorrow → **the next day**."
        }
      ]
    },

    {
      id: "determiners",
      title: "Determiners",
      section: "Grammar",
      summary: "Words placed before a noun to show which one, how many or how much: articles, demonstratives, possessives and quantifiers.",
      notes: [
        {
          heading: "What determiners are",
          points: [
            "A determiner comes **before a noun** (and before any adjective) to make its meaning clear: “**this** red pen”, “**many** students”.",
            "Main types: articles (a, an, the), demonstratives (this, that, these, those), possessives (my, your, his, her, its, our, their), quantifiers (some, any, much, many, few, little, each, every) and numbers.",
            "“its” is a possessive determiner; “it's” means “it is”: “The dog wagged its tail.”"
          ]
        },
        {
          heading: "Articles: a, an, the",
          points: [
            "**a** before a consonant **sound**: a book, a university, a one-rupee coin, a European.",
            "**an** before a vowel **sound**: an apple, an hour, an honest man, an MLA, an X-ray.",
            "**the** for something specific or already mentioned, and for unique things: the sun, the sky.",
            "**the** before rivers, seas, oceans, mountain ranges and superlatives: the Ganga, the Arabian Sea, the Himalayas, the tallest boy."
          ]
        },
        {
          heading: "Demonstratives",
          points: [
            "**this** (near) and **that** (far) go with singular nouns: this bag, that house.",
            "**these** (near) and **those** (far) go with plural nouns: these shoes, those trees.",
            "✗ “these kind of books” ✓ “this kind of book” or “these kinds of books”."
          ]
        },
        {
          heading: "Quantifiers: much, many, few, little",
          points: [
            "**many** and **few** go with countable plural nouns: many books, a few friends.",
            "**much** and **little** go with uncountable nouns: much water, a little sugar.",
            "**a few / a little** = some, a small but useful amount (positive): “I have a few friends here, so I'm happy.”",
            "**few / little** = hardly any (negative): “There is little hope of rain.”"
          ]
        },
        {
          heading: "Some, any, each, every",
          points: [
            "**some** in positive sentences and in offers or requests: “Would you like some tea?”",
            "**any** in negative sentences and most questions: “I don't have any money.” “Is there any milk?”",
            "**each** for two or more things taken one by one; **every** for three or more seen as a group: “Each of the two sisters got a gift.”",
            "each and every are followed by a **singular** noun and verb: “Every student has a locker.”"
          ]
        }
      ],
      formulas: [
        "a + consonant sound: a uniform, a one-way street",
        "an + vowel sound: an hour, an honest man, an MBA",
        "many / few / a few + countable plural noun",
        "much / little / a little + uncountable noun",
        "this / that + singular noun; these / those + plural noun"
      ],
      terms: [
        { term: "Determiner", meaning: "A word placed before a noun to show which, whose, how many or how much, e.g. the, this, my, some, many." },
        { term: "Article", meaning: "The determiners a and an (indefinite) and the (definite)." },
        { term: "Countable noun", meaning: "A noun that can be counted and has a plural form: book–books, chair–chairs." },
        { term: "Uncountable noun", meaning: "A noun that cannot be counted and has no plural form: water, advice, information." },
        { term: "Quantifier", meaning: "A determiner that tells quantity: some, any, much, many, few, little, enough." }
      ],
      examples: [
        {
          q: "Fill in a or an: “He is ___ honest man and ___ university teacher.”",
          steps: [
            "Choose a or an by the first SOUND of the next word, not its first letter.",
            "In “honest” the h is silent, so the word begins with a vowel sound → an.",
            "“university” begins with a “yoo” sound, which is a consonant sound → a."
          ],
          answer: "He is an honest man and a university teacher."
        },
        {
          q: "Correct the error: “She doesn't have much friends in the new city.”",
          steps: [
            "“friends” is a countable plural noun.",
            "“much” is used only with uncountable nouns.",
            "With countable nouns, use “many”."
          ],
          answer: "She doesn't have many friends in the new city."
        }
      ],
      qa: [
        {
          q: "Explain the difference between “few” and “a few” with examples.",
          a: "**A few** has a positive sense and means “some, a small number”: “I have a few good friends.” **Few** has a negative sense and means “hardly any”: “Few people attended the meeting” (very few came)."
        },
        {
          q: "Why do we write “an hour” but “a university”?",
          a: "The choice between a and an depends on the **sound**, not the spelling. In “hour” the h is silent, so it begins with a vowel sound and takes **an**. “University” begins with a “yoo” consonant sound, so it takes **a**."
        }
      ],
      quiz: [
        {
          q: "Fill in: “It took me ___ hour to finish the work.”",
          options: ["a", "much", "an", "many"],
          answer: 2,
          explain: "The h in “hour” is silent, so it begins with a vowel sound: **an** hour."
        },
        {
          q: "Fill in: “There isn't ___ milk left in the bottle.”",
          options: ["much", "many", "few", "a few"],
          answer: 0,
          explain: "Milk is uncountable, so **much** is used, especially in negative sentences."
        },
        {
          q: "Fill in: “___ Ganga is a holy river for many Indians.”",
          options: ["A", "An", "Some", "The"],
          answer: 3,
          explain: "Names of rivers take **the**: the Ganga, the Yamuna."
        },
        {
          q: "Fill in: “I have ___ good friends in Mumbai, so I never feel lonely there.”",
          options: ["few", "a few", "little", "much"],
          answer: 1,
          explain: "**A few** means “some” (positive), which fits “never feel lonely”. “Few” would mean hardly any."
        },
        {
          q: "Fill in: “___ shoes are too tight for me.”",
          options: ["This", "That", "These", "Much"],
          answer: 2,
          explain: "“Shoes” is plural, so the plural demonstrative **these** is needed."
        },
        {
          q: "Fill in: “Every student must wear ___ uniform.”",
          options: ["an", "a", "many", "much"],
          answer: 1,
          explain: "“Uniform” begins with a “yoo” (consonant) sound, so it takes **a**."
        }
      ]
    },

    {
      id: "active-passive-voice",
      title: "Active and Passive Voice",
      section: "Grammar",
      summary: "In the active voice the subject does the action; in the passive voice the subject receives the action. Learn to change sentences from one to the other in each tense.",
      notes: [
        {
          heading: "Active and passive",
          points: [
            "**Active:** the subject does the action: “Riya wrote a letter.”",
            "**Passive:** the object of the active sentence becomes the subject: “A letter was written by Riya.”",
            "Only sentences with an **object** (transitive verbs) can be changed into the passive. “The baby is sleeping” has no object, so it has no passive form."
          ]
        },
        {
          heading: "Steps to change active to passive",
          points: [
            "1. Make the object of the active sentence the new subject.",
            "2. Use the correct form of **be** for the tense and the new subject.",
            "3. Change the main verb to **V3** (past participle).",
            "4. Put the old subject after **by**, or drop it if it is unknown or unimportant.",
            "Change pronouns after by: I → me, we → us, he → him, she → her, they → them."
          ]
        },
        {
          heading: "Forms of ‘be’ in each tense",
          points: [
            "Simple present: is/am/are + V3: “Milk is sold here.”",
            "Present continuous: is/am/are + being + V3: “The road is being repaired.”",
            "Present perfect: has/have + been + V3: “The work has been done.”",
            "Simple past: was/were + V3; past continuous: was/were + being + V3; past perfect: had + been + V3.",
            "Future: will + be + V3: “The results will be declared tomorrow.” Modals: modal + be + V3: “Rules must be followed.”"
          ]
        },
        {
          heading: "When to use the passive",
          points: [
            "When the doer is unknown: “My bicycle has been stolen.”",
            "When the action matters more than the doer: “The new bridge was opened on Monday.”",
            "In notices, reports and science: “Visitors are requested to keep the campus clean.”",
            "Perfect continuous tenses (has been playing, had been playing) are normally not changed into the passive."
          ]
        }
      ],
      formulas: [
        "Passive = new subject (old object) + be (correct tense) + V3 + by + old subject",
        "Simple present: is/am/are + V3",
        "Present continuous: is/am/are + being + V3",
        "Present perfect: has/have + been + V3",
        "Simple past: was/were + V3",
        "Past continuous: was/were + being + V3",
        "Past perfect: had + been + V3",
        "Future and modals: will / can / must / should + be + V3"
      ],
      terms: [
        { term: "Active voice", meaning: "Sentence form in which the subject does the action: “The cat chased the rat.”" },
        { term: "Passive voice", meaning: "Sentence form in which the subject receives the action: “The rat was chased by the cat.”" },
        { term: "Transitive verb", meaning: "A verb that takes an object (write a letter). Only these can be made passive." },
        { term: "Intransitive verb", meaning: "A verb with no object (sleep, arrive, go). It cannot be made passive." },
        { term: "Agent", meaning: "The doer of the action in a passive sentence, introduced by ‘by’. It may be dropped." }
      ],
      examples: [
        {
          q: "Change into the passive: “The children are planting trees.”",
          steps: [
            "The object “trees” becomes the subject.",
            "The tense is present continuous and “trees” is plural → are being.",
            "plant → planted (V3).",
            "the children → by the children."
          ],
          answer: "Trees are being planted by the children."
        },
        {
          q: "Change into the passive: “Someone has stolen my bicycle.”",
          steps: [
            "The object “my bicycle” becomes the subject.",
            "The tense is present perfect and the subject is singular → has been.",
            "steal → stolen (V3).",
            "“Someone” is an unknown doer, so the by-phrase is dropped."
          ],
          answer: "My bicycle has been stolen."
        }
      ],
      qa: [
        {
          q: "Why can't the sentence “The guests arrived late” be changed into the passive voice?",
          a: "The verb **arrived** is intransitive: it has no object. Only a sentence with an object can be changed into the passive, because that object becomes the subject of the passive sentence."
        },
        {
          q: "Give two situations in which the passive voice is preferred.",
          a: "(1) When the doer is **unknown or unimportant**: “The window was broken last night.” (2) In **formal writing, notices and scientific reports**, where the action matters more than who did it: “The solution is heated for five minutes.”"
        }
      ],
      quiz: [
        {
          q: "Choose the passive form of: “She writes a letter.”",
          options: ["A letter was written by her.", "A letter is written by her.", "A letter is being written by her.", "A letter has written by her."],
          answer: 1,
          explain: "Simple present → is + V3: **is written**. The tense must not change."
        },
        {
          q: "Choose the passive form of: “They were painting the house.”",
          options: ["The house was painted by them.", "The house is being painted by them.", "The house had been painting by them.", "The house was being painted by them."],
          answer: 3,
          explain: "Past continuous → was/were + being + V3: **was being painted**."
        },
        {
          q: "Fill in: “The thief ___ by the police yesterday.”",
          options: ["was caught", "is caught", "has caught", "caught"],
          answer: 0,
          explain: "“Yesterday” needs the past tense, and the thief receives the action, so the passive **was caught** is used."
        },
        {
          q: "Choose the passive form of: “You must complete the task.”",
          options: ["The task must completed by you.", "The task must be completed by you.", "The task must be complete by you.", "The task must have completed by you."],
          answer: 1,
          explain: "Modal passive = modal + be + V3: **must be completed**."
        },
        {
          q: "Which of these sentences cannot be changed into the passive voice?",
          options: ["Ravi broke the glass.", "She sings a song.", "The baby is sleeping.", "They built a house."],
          answer: 2,
          explain: "“Sleep” is intransitive; the sentence has no object, so it has no passive form."
        },
        {
          q: "Fill in: “The results ___ next week.”",
          options: ["will announce", "will be announcing", "are announce", "will be announced"],
          answer: 3,
          explain: "Results do not announce anything; they are announced. Future passive = will be + V3."
        }
      ]
    },

    // ─────────────────────────── WRITING SKILLS ───────────────────────────
    {
      id: "descriptive-paragraph",
      title: "Descriptive Paragraph",
      section: "Writing Skills",
      summary: "Describing a person, place, object or event in vivid detail, based on a verbal or visual cue, in about 100–120 words.",
      notes: [
        {
          heading: "What the task asks",
          points: [
            "You describe a **person, place, object, event or situation** so clearly that the reader can picture it.",
            "The cue may be **verbal** (a few hints or keywords) or **visual** (a picture).",
            "Word limit: about **100–120 words**. Stay close to it.",
            "Write one well-organised paragraph, not a list of points."
          ]
        },
        {
          heading: "Format and structure",
          points: [
            "**Title:** a short, suitable heading, e.g. “A Visit to the Science Fair”.",
            "**Introduction:** one or two lines saying what or whom you are describing.",
            "**Body:** the main details, in a clear order (near to far, top to bottom, or the order in which things happened).",
            "**Conclusion:** one or two lines giving your overall impression or feeling."
          ]
        },
        {
          heading: "Describing a person, place or event",
          points: [
            "**Person:** appearance, dress, nature and qualities, habits, how they speak or behave, and why they matter to you.",
            "**Place:** location, what you notice first, colours, sounds, smells, the people there and the atmosphere.",
            "**Event:** occasion, date and place, what happened in sequence, the highlights, and how people felt.",
            "Tense: use the **present** tense for a person or place as they are now; use the **past** tense for an event that has already happened."
          ]
        },
        {
          heading: "Marking points",
          points: [
            "**Content:** relevant details, all the given cues used, a clear picture created.",
            "**Expression:** correct grammar and spelling, suitable vocabulary and varied sentences.",
            "**Organisation:** a logical order with linking words, so the paragraph flows.",
            "A suitable title and neat structure make a good impression on the examiner."
          ]
        },
        {
          heading: "Do's and don'ts",
          points: [
            "Do use **sensory details** (sight, sound, smell, touch, taste) and precise adjectives: “the sharp smell of frying pakoras”.",
            "Do use a simile or two: “The crowd moved like a slow river.”",
            "Don't stack many adjectives together or repeat the same word.",
            "Don't drift into a story or opinions unrelated to the cue.",
            "Don't copy the cue word for word; expand it in your own words."
          ]
        }
      ],
      formulas: [
        "Structure: Title → Introduction → Body (details in a clear order) → Conclusion",
        "Word limit: about 100–120 words",
        "Five-senses checklist: sight, sound, smell, touch, taste"
      ],
      terms: [
        { term: "Cue", meaning: "The hint given in the question, in words or as a picture, on which you must build the paragraph." },
        { term: "Sensory details", meaning: "Details that appeal to the five senses: sight, sound, smell, touch and taste." },
        { term: "Spatial order", meaning: "Arranging details by position, e.g. from near to far or left to right. Useful for places." },
        { term: "Chronological order", meaning: "Arranging details in the order in which they happened. Useful for events." },
        { term: "Simile", meaning: "A comparison using ‘like’ or ‘as’: “as busy as a beehive”." }
      ],
      examples: [
        {
          q: "Write a descriptive paragraph in about 100–120 words on “A Busy Railway Station”.",
          steps: [
            "Title: A Busy Railway Station",
            "Introduction: Last Sunday I went to the city railway station to receive my uncle, and it was bustling with life.",
            "Body (sights): Long queues stood at the ticket counters while porters in red shirts balanced heavy suitcases on their heads. Passengers hurried along the platforms, checking the display boards.",
            "Body (sounds and smells): Announcements crackled over the loudspeakers, tea-sellers called out “Chai, chai!” and the smell of hot samosas drifted from the food stalls.",
            "Body (movement): When the train pulled in with a long whistle, people rushed towards the doors like a tide.",
            "Conclusion: The station was noisy and tiring, yet full of energy: a small picture of India on the move."
          ],
          answer: "About 110 words with a title, a clear introduction, details of sight, sound and smell in a logical order, and a closing impression. The past tense is used because it describes one particular visit."
        }
      ],
      qa: [
        {
          q: "How does describing an event differ from describing a person?",
          a: "An **event** is described in **chronological order** and mostly in the **past tense**: what happened first, the highlights and how it ended. A **person** is usually described in the **present tense**, covering appearance, qualities, habits and why the person is special."
        },
        {
          q: "What are sensory details, and why are they important in a descriptive paragraph?",
          a: "Sensory details describe what we **see, hear, smell, touch or taste**, e.g. “the crunch of dry leaves underfoot”. They make the description vivid so the reader can picture the scene, which is the main aim of the task."
        }
      ],
      quiz: [
        {
          q: "What is the usual word limit for a descriptive paragraph in Class 9?",
          options: ["About 100–120 words", "About 30–50 words", "About 250–300 words", "About 400–500 words"],
          answer: 0,
          explain: "A descriptive paragraph is a short task of about **100–120 words**."
        },
        {
          q: "Which tense is most suitable for describing your school's Annual Day that took place last week?",
          options: ["Simple present", "Simple past", "Future continuous", "Present perfect continuous"],
          answer: 1,
          explain: "The event is over, so it is described in the **past tense**."
        },
        {
          q: "Which sentence contains a sensory detail?",
          options: ["The market was very nice.", "I went to the market with my sister.", "The market is near my house.", "The aroma of roasted peanuts filled the air."],
          answer: 3,
          explain: "The **aroma** (smell) of roasted peanuts appeals to a sense; the other sentences give no sensory detail."
        },
        {
          q: "Which order is best for describing a place such as a garden?",
          options: ["Alphabetical order of the plant names", "Chronological order of the garden's history", "Spatial order, such as from the gate to the far end", "Random order, as thoughts come"],
          answer: 2,
          explain: "**Spatial order** walks the reader through the place, which makes it easy to picture."
        },
        {
          q: "What should the conclusion of a descriptive paragraph do?",
          options: ["Introduce a new character", "Sum up the overall impression or feeling", "Repeat the title word for word", "List the cues given in the question"],
          answer: 1,
          explain: "The conclusion rounds off the description with the writer's **overall impression**."
        },
        {
          q: "Which of these is a mistake to avoid in a descriptive paragraph?",
          options: ["Using a simile", "Giving a suitable title", "Writing the description as a list of bullet points", "Arranging details in a logical order"],
          answer: 2,
          explain: "The answer must be a **flowing paragraph**, not a list of points."
        }
      ]
    },

    {
      id: "diary-entry",
      title: "Diary Entry",
      section: "Writing Skills",
      summary: "A personal, informal record of an experience with the writer's thoughts and feelings, written in the first person in about 100–120 words.",
      notes: [
        {
          heading: "What a diary entry is",
          points: [
            "A private record of what happened to you and **how you felt** about it.",
            "Written in the **first person** (I, me, my) in an informal, personal tone.",
            "Word limit: about **100–120 words**, unless the question says otherwise.",
            "Typical topics: a trip, a result, a loss, a festival, an achievement or a lesson learnt."
          ]
        },
        {
          heading: "Format",
          points: [
            "**Day and date** at the top, e.g. Monday, 14 July 20XX. The time (e.g. 9:30 pm) is optional.",
            "**Salutation** “Dear Diary” is optional.",
            "**Body:** the experience, your feelings and your reflection, in one to three short paragraphs.",
            "**Name** at the end: use the name given in the question."
          ]
        },
        {
          heading: "Content plan",
          points: [
            "Begin with the main feeling or event of the day: “What a day it has been!”",
            "Describe briefly what happened, in order.",
            "Express your emotions honestly: joy, fear, regret, pride.",
            "End with a reflection, lesson or resolution: “I have decided to…”"
          ]
        },
        {
          heading: "Language and marking points",
          points: [
            "Use the past tense for events and the present tense for present feelings: “We visited… I still feel…”",
            "Exclamations and questions to yourself are allowed: “How could I forget!”",
            "Marks are given for **format** (day, date, name), **content** (event, feelings and reflection) and **expression** (grammar, spelling, flow)."
          ]
        },
        {
          heading: "Do's and don'ts",
          points: [
            "Do keep it personal and sincere.",
            "Don't write an address, subject line or ‘Yours sincerely’: a diary is not a letter.",
            "Don't simply narrate like a story; your feelings and reflection must be there.",
            "Don't make it too formal, and don't use slang or SMS language."
          ]
        }
      ],
      formulas: [
        "Format: Day, Date (Time) → Dear Diary (optional) → Body (event + feelings + reflection) → Name",
        "Word limit: about 100–120 words"
      ],
      terms: [
        { term: "Diary entry", meaning: "A personal, dated record of the writer's experiences, thoughts and feelings." },
        { term: "First person", meaning: "Writing from the writer's own point of view, using I, me, my, we." },
        { term: "Reflection", meaning: "Thinking about what an experience taught you or what you will do next." },
        { term: "Informal tone", meaning: "A friendly, personal style, as when talking to yourself or a close friend." }
      ],
      examples: [
        {
          q: "You are Neha. Your class visited an old-age home today. Write a diary entry in about 100–120 words describing the visit and your feelings.",
          steps: [
            "Heading: Saturday, 12 August 20XX, 9:00 pm",
            "Salutation: Dear Diary,",
            "Opening (main feeling): Today was one of the most touching days of my life.",
            "Event: Our class visited an old-age home near our school. We sang songs, served lunch and listened to the residents' stories. One grandmother proudly showed me the sweaters she knits for the children of her street.",
            "Feelings: I felt happy to see them smile, but sad that many of them rarely meet their families.",
            "Reflection and resolution: I realised that a little time and love mean more to the elderly than any gift. I have decided to visit them once a month and to spend more time with my own grandparents.",
            "Name: Neha"
          ],
          answer: "About 105 words with the complete format (day, date, time, ‘Dear Diary’, name), the event in order, honest feelings and a closing resolution."
        }
      ],
      qa: [
        {
          q: "How is a diary entry different from a letter?",
          a: "A **diary entry** is written for oneself: it has only the day and date (and time), an optional ‘Dear Diary’ and the writer's name. A **letter** is written to someone else and needs addresses, a salutation, a closing and a signature. A diary also focuses more on feelings and reflection."
        },
        {
          q: "What makes the content of a diary entry effective?",
          a: "An effective entry tells the **event briefly**, expresses the writer's **feelings honestly** and ends with a **reflection or resolution**. It is written in the first person in a natural, informal tone."
        }
      ],
      quiz: [
        {
          q: "In which person is a diary entry written?",
          options: ["Third person (he, she)", "Second person (you)", "First person (I, we)", "Passive voice only"],
          answer: 2,
          explain: "A diary records the writer's own experience, so it is written in the **first person**."
        },
        {
          q: "Which of these is NOT part of the format of a diary entry?",
          options: ["Day and date", "Receiver's address", "The writer's name", "Optional ‘Dear Diary’"],
          answer: 1,
          explain: "A diary is not sent to anyone, so there is **no receiver's address**."
        },
        {
          q: "What is the tone of a diary entry?",
          options: ["Strictly formal", "Technical and scientific", "Like a news report", "Personal and informal"],
          answer: 3,
          explain: "A diary is private writing, so the tone is **personal and informal**."
        },
        {
          q: "Which line would make the best ending for a diary entry about being unprepared for a test?",
          options: ["From tomorrow, I will revise a little every day.", "The test was held in Room 12.", "Yours faithfully, Arjun", "Dear Sir, I request you to postpone the test."],
          answer: 0,
          explain: "A diary entry should end with a **reflection or resolution**; the other lines are facts or belong to letters."
        },
        {
          q: "What is the usual word limit for a diary entry in Class 9?",
          options: ["About 20–30 words", "About 100–120 words", "About 300 words", "About 500 words"],
          answer: 1,
          explain: "Diary entries are short writing tasks of about **100–120 words**, unless the question says otherwise."
        }
      ]
    },

    {
      id: "story-writing",
      title: "Story Writing",
      section: "Writing Skills",
      summary: "Creating an interesting short story from a given opening line, outline, title or picture, with a clear beginning, middle and end.",
      notes: [
        {
          heading: "The task",
          points: [
            "You are given a **cue**: an opening line, an outline, a title or a picture, and must develop it into a story.",
            "Follow the **word limit printed in the question**, and plan so that the story ends properly within it.",
            "If an opening line is given, use it **exactly** as your first line.",
            "Keep to two or three main characters and one main event."
          ]
        },
        {
          heading: "Structure",
          points: [
            "**Title:** short and catchy, hinting at the story without giving away the ending.",
            "**Beginning:** set the scene: who, where, when.",
            "**Middle:** a problem or conflict builds up to a **climax**, the most exciting moment.",
            "**End:** the problem is solved; a lesson or moral may be added if it fits naturally."
          ]
        },
        {
          heading: "Language",
          points: [
            "Write in the **past tense** and keep it consistent.",
            "Use a few lines of **dialogue** to bring characters alive, with correct quotation marks.",
            "Use linking words for flow: suddenly, meanwhile, after a while, at last.",
            "**Show, don't tell:** “Her hands trembled as she opened the envelope” is better than “She was nervous.”"
          ]
        },
        {
          heading: "Marking points",
          points: [
            "**Content:** an original, logical plot that develops the given cue, with a satisfying ending.",
            "**Expression:** grammar, spelling, vocabulary and sentence variety.",
            "**Organisation:** a clear beginning, middle and end, and smooth paragraphs."
          ]
        },
        {
          heading: "Do's and don'ts",
          points: [
            "Do plan for a minute before writing: note the beginning, the problem, the climax and the ending.",
            "Don't change the given opening line or ignore points in the outline.",
            "Don't crowd the story with too many characters or events.",
            "Don't end abruptly with “and then I woke up”; it disappoints the reader."
          ]
        }
      ],
      formulas: [
        "Structure: Title → Beginning (setting, characters) → Middle (problem, climax) → End (resolution, moral)"
      ],
      terms: [
        { term: "Plot", meaning: "The sequence of events in a story." },
        { term: "Conflict", meaning: "The problem or struggle that drives the story forward." },
        { term: "Climax", meaning: "The turning point: the most exciting or tense moment of the story." },
        { term: "Resolution", meaning: "How the problem is solved and the story ends." },
        { term: "Dialogue", meaning: "The words spoken by characters, written within quotation marks." }
      ],
      examples: [
        {
          q: "Write a short story beginning with: “It was the night of the big storm, and suddenly all the lights went out.”",
          steps: [
            "Title: The Lamp in the Window",
            "Beginning (given line + setting): It was the night of the big storm, and suddenly all the lights went out. Ten-year-old Kabir was alone at home with his grandmother in their village near the river.",
            "Problem: Through the window he saw a torch flickering on the flooded road. A delivery van was stuck, and its driver was shouting for help.",
            "Climax: Kabir wanted to run out, but Grandmother said, “The water is rising. Light the big lamp and put it in the window instead.” The lamp's glow showed the driver the raised path to their house.",
            "Resolution: The driver waded to safety and spent the night with them, drying his clothes by the stove.",
            "Ending and lesson: Next morning he thanked Kabir warmly. Kabir learnt that quick thinking can be braver than rushing into danger."
          ],
          answer: "A complete story that uses the given opening line, builds to a clear climax, includes a short piece of dialogue, stays in the past tense and ends with a natural lesson."
        }
      ],
      qa: [
        {
          q: "What are the essential parts of a well-written story?",
          a: "A suitable **title**; a **beginning** that introduces the characters and setting; a **middle** with a problem that rises to a **climax**; and an **end** where the problem is resolved, sometimes with a moral."
        },
        {
          q: "What does ‘show, don't tell’ mean in story writing? Give an example.",
          a: "It means letting the reader **see** a feeling through actions and details instead of naming it. Instead of “Ravi was scared”, write “Ravi's knees shook and he gripped the railing tightly.”"
        }
      ],
      quiz: [
        {
          q: "If the question gives an opening line, you should:",
          options: ["change it to suit your plot", "use it exactly as the first line", "use it as the title", "put it at the end"],
          answer: 1,
          explain: "The given opening line must be used **exactly** as the first line of the story."
        },
        {
          q: "The most exciting or tense moment of a story is called the:",
          options: ["introduction", "resolution", "climax", "title"],
          answer: 2,
          explain: "The **climax** is the turning point of the story."
        },
        {
          q: "Which tense is generally used for narrating a story?",
          options: ["Past tense", "Simple future", "Present perfect", "Future perfect"],
          answer: 0,
          explain: "Stories narrate events that have happened, so they are usually told in the **past tense**."
        },
        {
          q: "Which sentence best follows the ‘show, don't tell’ rule?",
          options: ["Meera was very happy.", "Meera felt happiness inside.", "Meera was in a happy mood that day.", "Meera danced around the room, waving her result card."],
          answer: 3,
          explain: "The last sentence **shows** happiness through action instead of simply naming the feeling."
        },
        {
          q: "Which is a common mistake in story writing?",
          options: ["Using a few lines of dialogue", "Adding too many characters and events", "Giving the story a title", "Keeping the tense consistent"],
          answer: 1,
          explain: "Too many characters and events make a short story confusing; the other options are good practice."
        }
      ]
    },

    // ───────────────────────────── KAVERI ─────────────────────────────
    {
      "id": "how-i-taught-my-grandmother-to-read",
      "title": "How I Taught My Grandmother to Read",
      "section": "Kaveri",
      "summary": "Sudha Murty recalls a childhood summer in north Karnataka when her unlettered grandmother, who loved a serialised novel, decided at sixty-two to learn to read, with her granddaughter as her very first teacher.",
      "notes": [
        {
          "heading": "Story in outline",
          "points": [
            "The narrator, about twelve, lives with her grandparents in a north Karnataka village where newspapers and magazines reach a day late by bus.",
            "Her grandmother Krishtakka, whom she calls **Avva**, never went to school. Each week the narrator reads aloud the latest episode of **Kashi Yatre**, a serialised Kannada novel by Triveni.",
            "The novel is about an old woman who longs to visit Kashi but gives her savings to an orphan girl's wedding; Avva identifies with her.",
            "After a week away at a wedding, the narrator finds Avva in tears: the new episode arrived and she could not read it, and she was too embarrassed to ask anyone else.",
            "Avva resolves to learn the Kannada alphabet and sets Saraswati Puja day of Dassara as her deadline. She works hard, and on that day she reads the title and publisher of the novel the narrator has secretly bought her. She even touches the girl's feet as to a teacher."
          ]
        },
        {
          "heading": "People and qualities",
          "points": [
            "**Avva (Krishtakka):** loving, proud, determined and independent; she feels helpless depending on others to read for her.",
            "**The narrator (Sudha Murty):** affectionate but still childish at first, as she laughs at the idea; later she becomes a teacher of Computer Science.",
            "Reading the story aloud also shows Avva's sharp memory, as she can repeat the text by heart."
          ]
        },
        {
          "heading": "Themes and style",
          "points": [
            "**It is never too late to learn:** age is no barrier when the purpose is good.",
            "**Independence through literacy:** money cannot replace the ability to read for oneself.",
            "**Respect crosses age:** Avva honours the girl as a teacher, reversing the usual custom of touching elders' feet.",
            "Told in the first person as a warm memoir, with simple language and gentle humour."
          ]
        }
      ],
      "formulas": [
        "Author: Sudha Murty (Padma Shri and Padma Bhushan awardee)",
        "Novel Avva loves: Kashi Yatre by Triveni, serialised in the weekly Karmaveera",
        "Avva's age when she learns: sixty-two",
        "Her deadline: Saraswati Puja day during Dassara"
      ],
      "terms": [
        {
          "term": "Avva",
          "meaning": "The Kannada word for mother, used by the narrator for her grandmother."
        },
        {
          "term": "Serial",
          "meaning": "A story published in instalments, one episode in each issue of a magazine."
        },
        {
          "term": "Kashi Yatre",
          "meaning": "The novel whose heroine longs to visit Kashi; the story that makes Avva want to read."
        },
        {
          "term": "Protagonist",
          "meaning": "The main character of a story or novel."
        },
        {
          "term": "Determination",
          "meaning": "Firm resolve to achieve something despite difficulty."
        }
      ],
      "qa": [
        {
          "q": "Why did Avva decide to learn to read?",
          "a": "She was unable to read the new episode of **Kashi Yatre** when it arrived and felt dependent and helpless. She did not want to keep asking others, so she decided to become independent by learning the Kannada alphabet."
        },
        {
          "q": "How did the narrator react when Avva told her plan, and how did Avva respond?",
          "a": "The narrator laughed and teased her about her grey hair, spectacles and age. Avva only smiled and said that for a good cause, determination can overcome any obstacle and that there is no age limit for learning."
        },
        {
          "q": "Why did Avva touch the narrator's feet at the end?",
          "a": "She was honouring her as a **teacher**, not as a granddaughter. Avva felt that a teacher deserves respect regardless of age or gender, and she was grateful for being able to read independently."
        }
      ],
      "quiz": [
        {
          "q": "Which novel did the narrator read aloud to her grandmother?",
          "options": [
            "Kashi Yatre",
            "Gitanjali",
            "Karmaveera",
            "Triveni"
          ],
          "answer": 0,
          "explain": "Kashi Yatre by Triveni was being serialised in the magazine Karmaveera; Karmaveera was the magazine, and Triveni the novelist."
        },
        {
          "q": "How old was Avva when she began to learn the alphabet?",
          "options": [
            "Fifty-two",
            "Sixty-two",
            "Seventy-five",
            "Sixty-six"
          ],
          "answer": 1,
          "explain": "The narrator points out that her grandmother was sixty-two."
        },
        {
          "q": "Why was Avva crying when the narrator returned from the wedding?",
          "options": [
            "The narrator had stayed away for a week without informing her",
            "She had lost her copy of the magazine",
            "She could not read the new episode of the serial",
            "Her friends had refused to discuss the story"
          ],
          "answer": 2,
          "explain": "She had opened the new issue and could not understand the words, and she felt helpless."
        },
        {
          "q": "What deadline did Avva set for herself?",
          "options": [
            "The narrator's birthday",
            "The end of the summer holidays",
            "The next issue of the magazine",
            "Saraswati Puja day during Dassara"
          ],
          "answer": 3,
          "explain": "She wanted to read a novel on her own by Saraswati Puja day."
        },
        {
          "q": "What did the narrator give her grandmother as a gift?",
          "options": [
            "The novel Kashi Yatre",
            "A frock",
            "A new pair of spectacles",
            "A slate and chalk"
          ],
          "answer": 0,
          "explain": "The narrator secretly bought Kashi Yatre, which had by then been published as a novel; the frock material was Avva's gift to her."
        },
        {
          "q": "Which value does the lesson stress most?",
          "options": [
            "Obeying elders without question",
            "Learning has no age limit",
            "Saving money for the future",
            "Respect for rich relatives"
          ],
          "answer": 1,
          "explain": "Avva shows that determination can overcome age."
        }
      ]
    },

    {
      "id": "bharat-our-land",
      "title": "Bharat Our Land",
      "section": "Kaveri",
      "summary": "A tribute to India by the Tamil poet Subramania Bharati, praising the Himalayas, the Ganga, the Upanishads, the warriors and sages of the land, and its ancient spiritual wisdom.",
      "notes": [
        {
          "heading": "What the poem says",
          "points": [
            "The speaker proudly names India's treasures: the mighty **Himavant**, the generous **Ganga**, the sacred **Upanishads** and the sunny golden land itself.",
            "After each claim the poet asks who else can match it, showing there is nothing equal elsewhere.",
            "The land has produced brave warriors and many sages who have made it sacred, and the finest music.",
            "It is the home of Brahma-knowledge and the place where the Buddha preached his dhamma.",
            "The refrain says Bharat is peerless and very ancient, so let us praise her."
          ]
        },
        {
          "heading": "Poetic features",
          "points": [
            "**Repetition and refrain:** praising the land again and again gives the poem a chant-like pride.",
            "**Rhetorical questions** such as asking which river can match the Ganga stress India's uniqueness.",
            "**Personification:** the land is addressed as a woman, 'she'.",
            "Originally written in Tamil and read here in translation; the tone is patriotic, proud and celebratory."
          ]
        },
        {
          "heading": "Message",
          "points": [
            "India's greatness rests on both nature and knowledge: mountains, rivers and scriptures.",
            "We should feel pride in our heritage and let that pride guide us to value knowledge and self-belief."
          ]
        }
      ],
      "formulas": [
        "Poet: Subramania Bharati (Tamil poet and freedom fighter)",
        "Natural features praised: the Himavant and the Ganga",
        "Scriptures mentioned: the Upanishads",
        "Tone: proud, patriotic, celebratory"
      ],
      "terms": [
        {
          "term": "Himavant",
          "meaning": "The Himalayas, called the mighty mountain of the land."
        },
        {
          "term": "Upanishads",
          "meaning": "Ancient Indian philosophical texts, called sacred and unmatched in the poem."
        },
        {
          "term": "Peerless",
          "meaning": "Having no equal; unmatched."
        },
        {
          "term": "Hoary",
          "meaning": "Very old; ancient."
        },
        {
          "term": "Sanctified",
          "meaning": "Made holy or blessed."
        }
      ],
      "qa": [
        {
          "q": "What does the poet praise about India's nature?",
          "a": "He praises the mighty **Himavant** (the Himalayas) and the generous **Ganga**, asking who else on earth can match their greatness and grace."
        },
        {
          "q": "What spiritual and cultural heritage does the poem celebrate?",
          "a": "It celebrates the sacred **Upanishads**, the sages who sanctified the land, the divinest music, Brahma-knowledge and the dhamma preached by the Buddha."
        },
        {
          "q": "What is the poet's attitude to his country?",
          "a": "He feels deep pride and love. The refrain calling India peerless and urging us to praise her shows admiration for her natural beauty, wisdom and ancient history."
        }
      ],
      "quiz": [
        {
          "q": "Who wrote 'Bharat Our Land'?",
          "options": [
            "Rabindranath Tagore",
            "Subramania Bharati",
            "Robert Frost",
            "Temsula Ao"
          ],
          "answer": 1,
          "explain": "The poem is a translation of a work by the Tamil poet Subramania Bharati."
        },
        {
          "q": "Which mountain is called mighty in the poem?",
          "options": [
            "Vindhya",
            "Aravalli",
            "Himavant",
            "Sahyadri"
          ],
          "answer": 2,
          "explain": "Himavant refers to the Himalayas."
        },
        {
          "q": "Which river does the poet call generous?",
          "options": [
            "The Kaveri",
            "The Brahmaputra",
            "The Godavari",
            "The Ganga"
          ],
          "answer": 3,
          "explain": "The poem asks which river can match the grace of the Ganga."
        },
        {
          "q": "Who preached his dhamma in this land, according to the poem?",
          "options": [
            "The Buddha",
            "Mahavira",
            "Guru Nanak",
            "Adi Shankara"
          ],
          "answer": 0,
          "explain": "The poem says the Buddha preached his dhamma here."
        },
        {
          "q": "What is the main tone of the poem?",
          "options": [
            "Sad and regretful",
            "Proud and celebratory",
            "Humorous and light",
            "Angry and critical"
          ],
          "answer": 1,
          "explain": "The poet admires and praises his land."
        },
        {
          "q": "What does the word 'peerless' mean?",
          "options": [
            "Very old",
            "Hidden from view",
            "Without an equal",
            "Broken"
          ],
          "answer": 2,
          "explain": "Peerless means incomparable or unmatched."
        }
      ]
    },

    {
      "id": "the-pot-maker",
      "title": "The Pot Maker",
      "section": "Kaveri",
      "summary": "In this abridged story from Nagaland, a girl named Sentila dreams of becoming a potter while her mother Arenla is determined that she should weave, until a kind older woman and an unspoken moment of grace pass the craft on.",
      "notes": [
        {
          "heading": "Story in outline",
          "points": [
            "From childhood Sentila wants to be a **pot maker** like her mother and grandmother, but Arenla wants her to be a weaver because pottery brings little money and heavy labour.",
            "Sentila secretly watches expert potters. The village council summons her father Mesoba, reminding him that such skills belong to the community and must be passed on.",
            "Arenla takes her to the riverbank for clay and teaches her the preparation, but a year of lessons gives Sentila no skill at shaping pots.",
            "In the girls' dormitory the widow **Onula** sees how tense Sentila is, shows her how to make a pot and advises her to watch her mother's way of shaping the mouth.",
            "One day Arenla leaves Sentila to continue, feeling unwell. Sentila makes pot after pot, just one short of her mother's number, and finds her mother dead.",
            "Onula later sees two neat rows of pots, can tell no difference between them, and understands that a new pot maker was born."
          ]
        },
        {
          "heading": "Characters",
          "points": [
            "**Sentila:** passionate, patient and a quick learner; she hides her ambition out of respect for her mother.",
            "**Arenla:** hard-working but weary; she wants a better life for her daughter, yet her skill is what finally passes on.",
            "**Mesoba:** gentle father who defends his wife before the council.",
            "**Onula:** understanding, wise elder who gives the girl confidence."
          ]
        },
        {
          "heading": "Themes",
          "points": [
            "**Passing on tradition:** a craft belongs to the community, and experts must pass it on.",
            "**Calling versus convenience:** Sentila follows her passion rather than easy money.",
            "**Mentors beyond family:** guidance can come from unexpected people.",
            "The ending is quiet and symbolic; the two rows of pots show the mother's skill continuing in her daughter."
          ]
        }
      ],
      "formulas": [
        "Author: Temsula Ao (Padma Shri and Sahitya Akademi Award recipient); the lesson is an abridged version",
        "Setting: a Naga village",
        "Main characters: Sentila, Arenla, Mesoba, Onula",
        "Craft: pottery with grey and red clay from a riverbank"
      ],
      "terms": [
        {
          "term": "Dao",
          "meaning": "A tool used for digging clay."
        },
        {
          "term": "Kiln",
          "meaning": "An oven in which pots are fired so they harden."
        },
        {
          "term": "Onula",
          "meaning": "The girls' dormitory supervisor, whom the girls call Aunty."
        },
        {
          "term": "Pittance",
          "meaning": "A very small amount of money earned."
        },
        {
          "term": "Malleable",
          "meaning": "Soft enough to be shaped without cracking."
        }
      ],
      "qa": [
        {
          "q": "Why did Arenla not want Sentila to become a pot maker?",
          "a": "Pottery had brought her little money for great effort. The clay was far away, carrying it was painful and pounding it was tiring, and a batch of pots took months. She felt weaving would pay better and could be done indoors."
        },
        {
          "q": "How did Onula help Sentila?",
          "a": "Onula noticed Sentila was tense and showed her how to shape a pot. She encouraged her and told her to watch how her mother formed the mouth of the pot, which gave Sentila confidence."
        },
        {
          "q": "What does the ending of the story suggest?",
          "a": "The two equal rows of pots show that Sentila had finally learned her mother's skill. Onula sees that a new pot maker was born, so the craft would survive through the next generation."
        }
      ],
      "quiz": [
        {
          "q": "What did Sentila want to become?",
          "options": [
            "A weaver",
            "A teacher",
            "A pot maker",
            "A farmer"
          ],
          "answer": 2,
          "explain": "She dreamt of being a potter like her mother and grandmother."
        },
        {
          "q": "Who warned Mesoba about his wife's refusal to teach pottery?",
          "options": [
            "The neighbours",
            "The schoolteacher",
            "Onula",
            "The village council"
          ],
          "answer": 3,
          "explain": "Mesoba was summoned by the village council."
        },
        {
          "q": "Where was the clay found?",
          "options": [
            "On a riverbank",
            "In the fields",
            "Beside the kiln",
            "In the work shed"
          ],
          "answer": 0,
          "explain": "The clay was found on a riverbank, many kilometres from the village."
        },
        {
          "q": "Who was Onula?",
          "options": [
            "Sentila's aunt",
            "The supervisor of the girls' dormitory",
            "The village potter",
            "Sentila's grandmother"
          ],
          "answer": 1,
          "explain": "She was a kind middle-aged widow supervising the dormitory."
        },
        {
          "q": "What did Sentila do when her mother left her in the work shed?",
          "options": [
            "Went to the riverbank",
            "Asked Onula for help",
            "Made pot after pot",
            "Began weaving"
          ],
          "answer": 2,
          "explain": "She produced many pots, just one fewer than her mother."
        },
        {
          "q": "What does the story mainly teach?",
          "options": [
            "Weaving is better than pottery",
            "Girls should avoid hard work",
            "Old skills are no longer useful",
            "Craft traditions must be passed on"
          ],
          "answer": 3,
          "explain": "The council and the ending both stress the continuation of tradition."
        }
      ]
    },

    {
      "id": "gifts-of-grace-honouring-our-vocations",
      "title": "Gifts of Grace: Honouring Our Vocations",
      "section": "Kaveri",
      "summary": "An anonymous poem in which the speaker hears all of Bharat celebrating its vocations: craftspeople, musicians, carpenters, electricians, boatmen, shoemakers and cooks, each proud of their own work.",
      "notes": [
        {
          "heading": "What the poem says",
          "points": [
            "The speaker hears Bharat celebrating the varied **vocations** of its people.",
            "Craftspeople weave colours and artisans with lutes celebrate emotions and dreams.",
            "Carpenters make anything from wood with precision; electricians work with cables and wires to brighten our lives.",
            "Boatmen gather their nets, sail and sing, and come back with tales of the sea; shoemakers vouch for work that serves our feet.",
            "Cooks and others celebrate what belongs to them alone. The voice of their vocation is the voice of their identity."
          ]
        },
        {
          "heading": "Poetic features",
          "points": [
            "**Free verse:** lines vary in length and do not follow a strict rhyme scheme.",
            "**Repetition** of 'I hear Bharat celebrating' frames the poem like a refrain.",
            "Sound images such as humming, singing and echoing make the vocations feel alive; the tone is joyful, reverent and celebratory."
          ]
        },
        {
          "heading": "Message",
          "points": [
            "Every honest vocation deserves respect, whether or not it is glamorous.",
            "Work gives people identity; traditional crafts and skills should be preserved."
          ]
        }
      ],
      "formulas": [
        "Poet: Anonymous",
        "Form: free verse without a fixed rhyme scheme",
        "Vocations named: craftspersons, artisans, carpenters, electricians, boatmen, shoemakers, cooks, designers, masons",
        "Central idea: the voice of a vocation is the voice of one's identity"
      ],
      "terms": [
        {
          "term": "Vocation",
          "meaning": "A trade or occupation for which a person has a skill or calling."
        },
        {
          "term": "Artisan",
          "meaning": "A skilled worker who makes things by hand."
        },
        {
          "term": "Free verse",
          "meaning": "Poetry with no fixed rhyme scheme or regular metre."
        },
        {
          "term": "Refrain",
          "meaning": "A line repeated in a poem."
        },
        {
          "term": "Identity",
          "meaning": "What makes a person who they are."
        }
      ],
      "qa": [
        {
          "q": "What does the poem celebrate?",
          "a": "It celebrates the many skilled vocations of India, from craftspeople and carpenters to boatmen and cooks, and honours the pride and individuality each worker brings."
        },
        {
          "q": "What does the line about the voice of a vocation mean?",
          "a": "It means that the work people do expresses who they are. A person's vocation shapes their identity and deserves respect."
        },
        {
          "q": "How does the poet make the poem lively?",
          "a": "The poem repeats the idea of 'hearing' Bharat, uses sounds such as singing and humming, and gives specific examples of workers, so we picture and hear each vocation."
        }
      ],
      "quiz": [
        {
          "q": "What does the speaker repeatedly say he or she hears?",
          "options": [
            "Birds singing in the forest",
            "Machines in a factory",
            "Children playing in the street",
            "Bharat celebrating its vocations"
          ],
          "answer": 3,
          "explain": "The poem opens and closes with the idea of Bharat celebrating."
        },
        {
          "q": "Which workers handle cables and wires?",
          "options": [
            "Electricians",
            "Carpenters",
            "Masons",
            "Boatmen"
          ],
          "answer": 0,
          "explain": "The poem says electricians work with cables and wires to brighten lives."
        },
        {
          "q": "Which workers gather nets and sail?",
          "options": [
            "Cooks",
            "Boatmen",
            "Shoemakers",
            "Designers"
          ],
          "answer": 1,
          "explain": "Boatmen return with tales of life at sea."
        },
        {
          "q": "The poem is written in",
          "options": [
            "A strict couplet pattern",
            "Sonnet form",
            "Free verse",
            "Ballad form"
          ],
          "answer": 2,
          "explain": "Lines vary in length and have no fixed rhyme scheme."
        },
        {
          "q": "What is the overall mood of the poem?",
          "options": [
            "Fearful",
            "Gloomy",
            "Angry",
            "Joyful and respectful"
          ],
          "answer": 3,
          "explain": "The speaker admires and celebrates each worker."
        },
        {
          "q": "What is the central message?",
          "options": [
            "Every honest vocation deserves honour",
            "Only traditional crafts are valuable",
            "Machines should replace craftspeople",
            "Work is only a means to earn"
          ],
          "answer": 0,
          "explain": "The poem honours all skilled work as part of identity."
        }
      ]
    },

    {
      "id": "winds-of-change",
      "title": "Winds of Change",
      "section": "Kaveri",
      "summary": "An expository article on the traditional Indian hand fan, the pankha: its origin, its regional varieties made from many materials, its decline in everyday use, and the need to keep the craft alive.",
      "notes": [
        {
          "heading": "Content of the article",
          "points": [
            "The word **pankha** comes from 'pankh', a feather; the small plumed fan was called a pankhi. Buddhist wall paintings at Ajanta (2nd century CE) show it.",
            "In ancient times pankhas were used in temples and royal courts and ranged from tiny fans to large ones needing full arm strength. They also travelled along trade routes.",
            "Materials differ by region: bamboo, cane, palm leaf, silk, brass, leather and silver, often with beads or stones.",
            "Today they are mostly decorative or craft items; with technology the tradition risks fading, though it now gives artisans a livelihood."
          ]
        },
        {
          "heading": "Regional varieties",
          "points": [
            "**Rajasthan:** appliqué fans with fabric pieces and needlework, zardozi fans with gold thread, brass temple fans and painted cardboard fans offered to gods.",
            "**Gujarat:** cotton fans with mirror work, bead fans with silver handles, and hand-stitched leather fans from Kutch.",
            "**West Bengal:** delicate fans of sola pith, and palm-leaf Tal Patar Pankha.",
            "**Uttar Pradesh, Odisha and Bihar:** Phadh fans with zari and silk, large palm-leaf fans, and sturdy coloured bamboo fans; tribal fans use grass, cane and geometric patterns."
          ]
        },
        {
          "heading": "Preserving the craft",
          "points": [
            "Celebrate pankhas and appreciate their culture, stories and artistry.",
            "Pankha-making workshops and handicraft exhibitions spread awareness and give artisans a market and sustainable livelihood.",
            "The article is informative in tone and uses examples by region to show cultural diversity."
          ]
        }
      ],
      "formulas": [
        "Genre: expository (informative) article",
        "Earliest evidence mentioned: Ajanta paintings of the 2nd century CE",
        "Sola pith is used in West Bengal; Kutch is known for leather fans",
        "Way to preserve the craft: workshops, exhibitions and appreciation"
      ],
      "terms": [
        {
          "term": "Pankha",
          "meaning": "The Indian hand fan; the word comes from 'pankh', meaning feather."
        },
        {
          "term": "Appliqué",
          "meaning": "Decoration made by sewing pieces of fabric onto a larger piece."
        },
        {
          "term": "Zardozi",
          "meaning": "Rich embroidery using gold or silver thread."
        },
        {
          "term": "Sola",
          "meaning": "A spongy water plant used to make delicate fans in Bengal."
        },
        {
          "term": "Indigenous",
          "meaning": "Belonging naturally to a place."
        }
      ],
      "qa": [
        {
          "q": "How do pankhas from different regions of India differ?",
          "a": "Each region uses its own materials and designs: appliqué and zardozi in Rajasthan, mirror work and leather in Gujarat, sola in Bengal, palm leaf in Odisha and bamboo in Bihar. They reflect the culture of the place that makes them."
        },
        {
          "q": "Why is the pankha craft in danger?",
          "a": "Technology and new products have reduced everyday use, so pankhas are now mostly decorative. The tradition risks slowly losing its place among Indians."
        },
        {
          "q": "How can the craft be preserved?",
          "a": "By celebrating pankhas and appreciating their artistry, and by holding pankha-making workshops and exhibitions that spread awareness and give artisans a sustainable livelihood."
        }
      ],
      "quiz": [
        {
          "q": "What does the word 'pankha' come from?",
          "options": [
            "Pankh, meaning feather",
            "Pankhi, a type of bird",
            "Panka, a type of palm",
            "Pakhwaj, a drum"
          ],
          "answer": 0,
          "explain": "The article says it originates from 'pankh'."
        },
        {
          "q": "Where do wall paintings showing the pankhi exist?",
          "options": [
            "Konark",
            "Ajanta",
            "Khajuraho",
            "Hampi"
          ],
          "answer": 1,
          "explain": "Buddhist wall paintings at Ajanta show it."
        },
        {
          "q": "Which state is known for sola pith fans?",
          "options": [
            "Gujarat",
            "Rajasthan",
            "West Bengal",
            "Odisha"
          ],
          "answer": 2,
          "explain": "Bengal's artisans make delicate fans from sola."
        },
        {
          "q": "Hand-stitched leather fans are associated with",
          "options": [
            "Jaipur",
            "Cuttack",
            "Patna",
            "Kutch"
          ],
          "answer": 3,
          "explain": "Kutch is recognised for its leather hand fans."
        },
        {
          "q": "Which fans are made with gold thread in Rajasthan?",
          "options": [
            "Zardozi fans",
            "Bead fans",
            "Tal Patar fans",
            "Sola fans"
          ],
          "answer": 0,
          "explain": "Zardozi uses glittering gold threadwork."
        },
        {
          "q": "What kind of writing is 'Winds of Change'?",
          "options": [
            "A short story",
            "An expository article",
            "A play",
            "A biography"
          ],
          "answer": 1,
          "explain": "It gives information about the heritage of pankhas."
        }
      ]
    },

    {
      "id": "canvas-of-soil",
      "title": "Canvas of Soil",
      "section": "Kaveri",
      "summary": "A short rhymed poem that pictures gardening as painting: soil is the palette, seeds are brushstrokes, blossoms are colours, and the whole garden is a canvas where art and life meet.",
      "notes": [
        {
          "heading": "What the poem says",
          "points": [
            "The earth is a **palette** rich and deep where the dreams of gardeners seep in.",
            "Seeds planted truly are brushstrokes that wait for the colours of spring.",
            "Blossoms bloom like a painted sight, dancing in morning light, in shades of green, red and blue: nature's ever-new artwork.",
            "Each plot is a wide canvas where art and life coincide, and in the hands of those who till, gardens become paintings."
          ]
        },
        {
          "heading": "Poetic devices",
          "points": [
            "**Metaphor:** soil as palette, seeds as brushstrokes, garden as canvas and painting.",
            "**Imagery:** colours and light create pictures in the mind.",
            "**Alliteration:** for example 'Blossoms bloom'.",
            "**Rhyme scheme AABB** with a cheerful, appreciative tone and joyful mood."
          ]
        },
        {
          "heading": "Message",
          "points": [
            "Gardening is an art and nature is the greatest artist.",
            "Art is part of our daily lives, customs, crafts and gardens; the gardener is a painter."
          ]
        }
      ],
      "formulas": [
        "Poet: Maya Anthony",
        "Rhyme scheme: AABB (rhyming couplets)",
        "Main metaphor: the garden as a canvas",
        "Tone: appreciative; mood: joyful"
      ],
      "terms": [
        {
          "term": "Palette",
          "meaning": "A board on which a painter mixes colours; here the earth."
        },
        {
          "term": "Metaphor",
          "meaning": "A comparison made without using 'like' or 'as'."
        },
        {
          "term": "Imagery",
          "meaning": "Words that create pictures or sensations in the reader's mind."
        },
        {
          "term": "Alliteration",
          "meaning": "Repetition of the same consonant sound at the start of nearby words."
        },
        {
          "term": "Allegory",
          "meaning": "A work whose deeper meaning stands for larger ideas, such as life's journey and growth."
        }
      ],
      "qa": [
        {
          "q": "How does the poet compare gardening to painting?",
          "a": "Soil is the painter's palette, seeds are brushstrokes, blossoms give the colours and each plot is a canvas. The gardener becomes an artist creating a living painting."
        },
        {
          "q": "Which poetic devices are used in the poem?",
          "a": "The poem uses metaphors for the garden, imagery of colour and light, alliteration such as 'Blossoms bloom', and a regular AABB rhyme."
        },
        {
          "q": "What is the central idea?",
          "a": "Gardening is a creative art, and art and life meet in everyday things. It invites us to see beauty in nature and in the work of gardeners."
        }
      ],
      "quiz": [
        {
          "q": "In the poem, what are seeds compared to?",
          "options": [
            "Paintings",
            "Brushstrokes",
            "Canvases",
            "Gardens"
          ],
          "answer": 1,
          "explain": "Seeds are planted as brushstrokes waiting for spring."
        },
        {
          "q": "What is the rhyme scheme of the poem?",
          "options": [
            "ABAB",
            "ABCB",
            "AABB",
            "There is none"
          ],
          "answer": 2,
          "explain": "The poem is written in rhyming couplets."
        },
        {
          "q": "What is each garden plot compared to?",
          "options": [
            "A palette",
            "A frame",
            "A museum",
            "A canvas"
          ],
          "answer": 3,
          "explain": "The poem calls each plot a canvas wide."
        },
        {
          "q": "Which device is 'Blossoms bloom'?",
          "options": [
            "Alliteration",
            "Onomatopoeia",
            "Simile",
            "Irony"
          ],
          "answer": 0,
          "explain": "The repeated 'b' sound is alliteration."
        },
        {
          "q": "What is the tone of the poem?",
          "options": [
            "Mournful",
            "Appreciative",
            "Angry",
            "Doubtful"
          ],
          "answer": 1,
          "explain": "The poet admires the beauty of gardens."
        },
        {
          "q": "Who is the 'artist' in the poem?",
          "options": [
            "The king",
            "The farmer's son",
            "The gardener",
            "The weather"
          ],
          "answer": 2,
          "explain": "Gardens become paintings in the hands of those who till."
        }
      ]
    },

    {
      "id": "vitamin-m",
      "title": "Vitamin-M",
      "section": "Kaveri",
      "summary": "Ravi is asked to keep his forgetful grandfather at home, but when Grandpa slips out for a newspaper Ravi trails him around town, only to learn at the end that Grandpa may have known exactly what was going on.",
      "notes": [
        {
          "heading": "Story in outline",
          "points": [
            "Ravi's mother wishes for a 'Vitamin-M' for old people's memory. Grandpa, a retired lawyer of seventy-five, has recently moved in; he forgets things, dislikes the crowded city and resents being treated like a child.",
            "On the first day of Ravi's holidays Grandpa goes out for the Tamil newspaper; Ravi follows secretly, though he promised his mother.",
            "Ravi hides behind a bush in the park, a banyan tree and a car, gets scolded by a mother and some vendors, and sees Grandpa enjoy sweet tea, bananas and ice cream normally banned at home.",
            "Ravi is thrown out of a ladies' salon, boards a bus after a man wearing Grandpa's yellow cap, and discovers the man is a stranger who was given the cap in the barber shop.",
            "Back home Ravi finds Grandpa snoring. Later Grandpa gives gifts on his own birthday, which Ravi's mother has forgotten, and hints that she needs Vitamin-M. His gift to Ravi is a book of detective stories."
          ]
        },
        {
          "heading": "Characters and tone",
          "points": [
            "**Ravi:** loving, loyal and anxious; he keeps his promise in his own awkward way.",
            "**Grandpa:** independent, witty, generous and sharp-minded, especially at chess; he plays a gentle trick on the family.",
            "**Ravi's mother (Vidya):** caring but over-protective, speaking too loudly to her father.",
            "The story is humorous and affectionate, with lively detail and a surprise ending."
          ]
        },
        {
          "heading": "Themes",
          "points": [
            "**Dignity of the elderly:** they should not be treated like children.",
            "**Care versus control:** protecting someone should not take away their freedom.",
            "**Bond between generations:** the grandson learns respect and affection for Grandpa."
          ]
        }
      ],
      "formulas": [
        "Author: Asha Nehemiah",
        "Main characters: Ravi, Grandpa, Ravi's mother Vidya",
        "Grandpa's age: seventy-five; he was a lawyer",
        "Ending: Grandpa gives gifts on his own birthday and a detective book to Ravi"
      ],
      "terms": [
        {
          "term": "Vitamin-M",
          "meaning": "A joking name for a medicine that could improve memory."
        },
        {
          "term": "Frail",
          "meaning": "Weak and delicate."
        },
        {
          "term": "Poky",
          "meaning": "Small and cramped, as Grandpa calls the flat."
        },
        {
          "term": "Trailing",
          "meaning": "Following someone secretly."
        },
        {
          "term": "Frantic",
          "meaning": "Very worried and agitated."
        }
      ],
      "qa": [
        {
          "q": "Why did Grandpa dislike living in the city?",
          "a": "He found the city noisy and crowded, and the flat poky. He missed his quiet brick house with a mango tree in town, where he could hear a leaf fall."
        },
        {
          "q": "Why did Ravi follow Grandpa and what happened?",
          "a": "He had promised his mother not to let Grandpa go out alone. He followed secretly, ended up in awkward situations in the park, the market and a salon, and lost Grandpa after being tricked by a stranger wearing the same cap."
        },
        {
          "q": "What does the ending suggest about Grandpa?",
          "a": "He gave Ravi a book on detectives and hinted that Ravi's mother needs Vitamin-M, so he probably knew Ravi was trailing him. He is sharp, playful and still sensible, not as forgetful as his daughter thinks."
        }
      ],
      "quiz": [
        {
          "q": "What job did Grandpa once do?",
          "options": [
            "Doctor",
            "Teacher",
            "Lawyer",
            "Postman"
          ],
          "answer": 2,
          "explain": "His firmness came naturally from his work as a lawyer."
        },
        {
          "q": "Why did Grandpa say he was going out?",
          "options": [
            "To visit the barber",
            "To meet an old friend",
            "To see a doctor",
            "To buy the Tamil newspaper"
          ],
          "answer": 3,
          "explain": "He wanted to see if the Tamil newspaper had arrived at the corner shop."
        },
        {
          "q": "What did Ravi hide behind in the children's park?",
          "options": [
            "A bush trimmed like an elephant",
            "A banyan tree",
            "A bench",
            "A silver car"
          ],
          "answer": 0,
          "explain": "He crouched behind a bush shaped like an elephant."
        },
        {
          "q": "Who actually wore the yellow cap on the bus?",
          "options": [
            "Grandpa",
            "A stranger",
            "Ravi's father",
            "A vendor"
          ],
          "answer": 1,
          "explain": "A stranger had been given Grandpa's cap in the barber shop."
        },
        {
          "q": "Why did Ravi's mother turn red at the end?",
          "options": [
            "She had lost her purse",
            "Ravi had disobeyed her",
            "She had forgotten Grandpa's birthday",
            "Grandpa scolded her about medicine"
          ],
          "answer": 2,
          "explain": "Grandpa gave gifts on his birthday, and his hint made her blush."
        },
        {
          "q": "What is the main theme of the story?",
          "options": [
            "Detectives are always successful",
            "City life is better than village life",
            "Children should not make promises",
            "The elderly should be treated with dignity"
          ],
          "answer": 3,
          "explain": "Ravi's mother over-protects, but Grandpa wants respect and independence."
        }
      ]
    },

    {
      "id": "i-cannot-remember-my-mother",
      "title": "I Cannot Remember My Mother",
      "section": "Kaveri",
      "summary": "A child speaker cannot remember his mother, yet a half-heard tune, the smell of shiuli flowers and the blue sky bring her presence back through his senses.",
      "notes": [
        {
          "heading": "What the poem says",
          "points": [
            "**Stanza 1:** during play a tune seems to hover over his toys, the song his mother hummed while rocking his cradle.",
            "**Stanza 2:** in early autumn, the scent of shiuli flowers reminds him of the morning service in the temple and becomes the scent of his mother.",
            "**Stanza 3:** from his bedroom window he looks into the distant blue sky and feels the stillness of her gaze spread across it.",
            "Each stanza begins with 'I cannot remember my mother', yet something recalls her."
          ]
        },
        {
          "heading": "Features",
          "points": [
            "**Senses:** hearing (the tune), smell (shiuli flowers) and sight (the sky) carry the memories.",
            "**Free verse** with repetition of the opening line; calm, tender and nostalgic tone.",
            "**Imagery** and metaphor: the sky holds her gaze. The title sets a mood of loss, but the poem shows presence in absence."
          ]
        },
        {
          "heading": "Message",
          "points": [
            "Memory is carried by senses and feelings, not only by pictures of the past.",
            "A parent's love remains in small everyday experiences even when they are no longer there."
          ]
        }
      ],
      "formulas": [
        "Poet: Rabindranath Tagore (Nobel Prize for Gitanjali)",
        "Memories evoked by: a tune, the smell of shiuli flowers and the sky",
        "Form: free verse with a repeated opening line",
        "Tone: tender, nostalgic"
      ],
      "terms": [
        {
          "term": "Shiuli",
          "meaning": "A fragrant autumn flower, also called night jasmine or harsingar."
        },
        {
          "term": "Hover",
          "meaning": "To hang in the air near something."
        },
        {
          "term": "Olfactory",
          "meaning": "Relating to the sense of smell."
        },
        {
          "term": "Nostalgic",
          "meaning": "Feeling affectionate longing for the past."
        },
        {
          "term": "Imagery",
          "meaning": "Language that appeals to the senses."
        }
      ],
      "qa": [
        {
          "q": "How does the child remember his mother in each stanza?",
          "a": "In the first he recalls a tune she hummed; in the second the scent of shiuli flowers mixed with the temple; in the third the stillness of her gaze in the blue sky. Each memory comes through a sense."
        },
        {
          "q": "Why does the poet keep repeating 'I cannot remember my mother'?",
          "a": "The repetition shows his sadness and also contrasts with what he does feel. Even without a clear memory, sound, smell and sight bring her close."
        },
        {
          "q": "What is the mood of the poem?",
          "a": "The mood is gentle, wistful and tender. The child feels love and longing, but also a quiet comfort in her presence."
        }
      ],
      "quiz": [
        {
          "q": "Who wrote 'I Cannot Remember My Mother'?",
          "options": [
            "Subramania Bharati",
            "Robert Langley",
            "David Roth",
            "Rabindranath Tagore"
          ],
          "answer": 3,
          "explain": "Tagore's poem is read in translation."
        },
        {
          "q": "Which flower is mentioned?",
          "options": [
            "Shiuli",
            "Rose",
            "Lotus",
            "Marigold"
          ],
          "answer": 0,
          "explain": "The smell of shiuli flowers reminds the poet of his mother."
        },
        {
          "q": "What does the child hear while he plays?",
          "options": [
            "A temple bell",
            "A tune his mother used to hum",
            "Birds in the garden",
            "His father's voice"
          ],
          "answer": 1,
          "explain": "A song she hummed while rocking his cradle seems to hover over his toys."
        },
        {
          "q": "Which sense is linked to the shiuli flowers?",
          "options": [
            "Hearing",
            "Touch",
            "Smell",
            "Taste"
          ],
          "answer": 2,
          "explain": "The scent brings back the temple service and his mother."
        },
        {
          "q": "Where does the poet feel his mother's gaze?",
          "options": [
            "In the garden",
            "In a mirror",
            "In the temple",
            "In the blue sky"
          ],
          "answer": 3,
          "explain": "The stillness of her gaze seems spread across the sky."
        },
        {
          "q": "The poem is mainly about",
          "options": [
            "Memory and the presence of absent love",
            "A festival",
            "A journey",
            "Childhood games"
          ],
          "answer": 0,
          "explain": "The child recalls his mother through sensory experiences."
        }
      ]
    },

    {
      "id": "the-world-of-limitless-possibilities",
      "title": "The World of Limitless Possibilities",
      "section": "Kaveri",
      "summary": "In this interview, Paralympian Dr. Deepa Malik describes how she turned a spinal tumour and paralysis into a sporting career, and urges society to see ability beyond disability.",
      "notes": [
        {
          "heading": "What the interview tells us",
          "points": [
            "At 29 Dr. Malik was diagnosed with a **spine tumour**; after surgery she was told she would be paralysed from the waist down and confined to a wheelchair.",
            "She had two choices: waste life in regret or turn it into a world of limitless possibilities. She chose the latter and moved to **para-athletics**.",
            "Her breakthrough was a **silver medal in shot-put** at the 2016 Rio Paralympics. She is the first Indian woman to win a Paralympic medal and an Asian Games athletics medal.",
            "She believes physical limits do not define potential: 'ability beyond disability'."
          ]
        },
        {
          "heading": "Ideas in her answers",
          "points": [
            "**Challenge:** the main obstacle was society's low expectations, overcome with mental resilience and family support.",
            "**Sports and stereotypes:** seeing para-athletes' strength and spirit breaks preconceived notions.",
            "**Advocacy:** she works for emotional health, women's participation in outdoor sports, equipment for para-sportspersons and awareness sessions in schools and colleges.",
            "**Advice:** every setback is a chance to show strength; build a support system, believe in yourself and let your journey inspire others."
          ]
        },
        {
          "heading": "Form and themes",
          "points": [
            "The text is an **interview**, with questions from an interviewer and direct answers in the first person.",
            "Themes: resilience, dignity, inclusion, and turning adversity into opportunity."
          ]
        }
      ],
      "formulas": [
        "Genre: interview",
        "Interviewee: Dr. Deepa Malik, Paralympic shot-put medallist",
        "Medal: silver at the 2016 Rio Paralympics",
        "Diagnosed with a spine tumour at 29"
      ],
      "terms": [
        {
          "term": "Paralympics",
          "meaning": "An international sports event for athletes with physical disabilities."
        },
        {
          "term": "Trailblazer",
          "meaning": "A person who is first to do something and leads the way."
        },
        {
          "term": "Resilience",
          "meaning": "The ability to recover from difficulties."
        },
        {
          "term": "Advocacy",
          "meaning": "Public support for a cause."
        },
        {
          "term": "Inclusivity",
          "meaning": "Including everyone and treating them equally."
        }
      ],
      "qa": [
        {
          "q": "How did Dr. Malik respond to her illness?",
          "a": "After the tumour left her paralysed from the waist down, she refused to waste her life in regret. She took up para-athletics and went on to win a silver medal in shot-put at the 2016 Rio Paralympics."
        },
        {
          "q": "What was the biggest challenge she mentions?",
          "a": "Society's perceptions: people underestimated her abilities. She overcame this with mental resilience, family support and by treating challenges as chances to prove herself."
        },
        {
          "q": "What is her advice to those facing setbacks?",
          "a": "Treat every setback as an opportunity to show strength, surround yourself with support, believe in yourself and let your journey inspire others. Disability is not a limitation but a strength waiting to be released."
        }
      ],
      "quiz": [
        {
          "q": "At what age was Dr. Malik diagnosed with a spine tumour?",
          "options": [
            "29",
            "19",
            "39",
            "49"
          ],
          "answer": 0,
          "explain": "She says she was 29."
        },
        {
          "q": "In which event did she win silver at the Rio Paralympics?",
          "options": [
            "Javelin",
            "Shot-put",
            "Discus",
            "Swimming"
          ],
          "answer": 1,
          "explain": "Her breakthrough was a silver medal in shot-put in 2016."
        },
        {
          "q": "Which phrase sums up her belief?",
          "options": [
            "Disability is destiny",
            "Winning is everything",
            "Ability beyond disability",
            "Luck decides success"
          ],
          "answer": 2,
          "explain": "She calls herself a supporter of this idea."
        },
        {
          "q": "What was the greatest challenge she faced?",
          "options": [
            "Lack of money",
            "Poor health",
            "Weak coaches",
            "Societal perceptions"
          ],
          "answer": 3,
          "explain": "People underestimated her abilities."
        },
        {
          "q": "What kind of text is this lesson?",
          "options": [
            "An interview",
            "A diary entry",
            "A letter",
            "A short story"
          ],
          "answer": 0,
          "explain": "It is a question-and-answer interview."
        },
        {
          "q": "What does she do for young people?",
          "options": [
            "Teaches in a school",
            "Organises awareness sessions on disability sports",
            "Designs wheelchairs",
            "Runs a hospital"
          ],
          "answer": 1,
          "explain": "She holds sessions at schools and colleges."
        }
      ]
    },

    {
      "id": "nine-gold-medals",
      "title": "Nine Gold Medals",
      "section": "Kaveri",
      "summary": "A narrative poem about a Special Olympics sprint in which a runner falls and the other eight stop, return and finish together hand in hand, so that all nine win gold.",
      "notes": [
        {
          "heading": "What happens in the poem",
          "points": [
            "Athletes have come from all over the country to run for gold, silver and bronze after months of training; spectators fill the old field.",
            "Nine determined athletes line up for the hundred-yard dash. At the gun the smallest runner stumbles and falls, crying out in frustration and anguish.",
            "The eight others pull up, turn back and help him to his feet.",
            "All nine join hands and walk the rest of the race, under a Special Olympics banner. They cross the finish line holding hands and the crowd gives a standing ovation. Nine medals are won."
          ]
        },
        {
          "heading": "Poetic features",
          "points": [
            "**Narrative poem** in eight four-line stanzas told in the first person as if the speaker witnessed it.",
            "**Rhyme** and steady rhythm give a storytelling feel; images of dashed dreams change to images of beaming faces.",
            "Tone moves from excitement to tension to warmth and admiration."
          ]
        },
        {
          "heading": "Message",
          "points": [
            "**Empathy over competition:** true victory lies in lifting others as we rise.",
            "**Inclusivity and solidarity:** kindness gives a race a greater meaning than winning.",
            "Shared joy is worth more than an individual medal."
          ]
        }
      ],
      "formulas": [
        "Poet: David Roth",
        "Event: hundred-yard dash at a Special Olympics",
        "Number of runners: nine; all received gold",
        "Structure: eight stanzas of four lines"
      ],
      "terms": [
        {
          "term": "Special Olympics",
          "meaning": "A sports movement for athletes with intellectual disabilities."
        },
        {
          "term": "Anguish",
          "meaning": "Severe pain or distress."
        },
        {
          "term": "Asphalt",
          "meaning": "A hard black material used to make roads and tracks."
        },
        {
          "term": "Standing ovation",
          "meaning": "Applause given by an audience that rises to its feet."
        },
        {
          "term": "Solidarity",
          "meaning": "Unity and support among a group."
        }
      ],
      "qa": [
        {
          "q": "What happened at the start of the race?",
          "a": "The signal was given and all the runners dashed ahead, but the smallest runner stumbled and fell on the asphalt, crying out in frustration."
        },
        {
          "q": "How did the other runners respond?",
          "a": "The eight other runners turned back one by one, helped him up, and then all nine joined hands and finished the race together."
        },
        {
          "q": "What does the poem teach us?",
          "a": "It teaches that real victory lies in empathy and helping others rather than competing at all costs. Nine gold medals stand for shared success and humanity."
        }
      ],
      "quiz": [
        {
          "q": "Who wrote 'Nine Gold Medals'?",
          "options": [
            "Charles Swain",
            "David Roth",
            "Robert Langley",
            "Maya Anthony"
          ],
          "answer": 1,
          "explain": "The poem is by David Roth."
        },
        {
          "q": "How many runners were in the race?",
          "options": [
            "Eight",
            "Ten",
            "Nine",
            "Seven"
          ],
          "answer": 2,
          "explain": "Nine runners stood at the starting line."
        },
        {
          "q": "What was the distance of the race?",
          "options": [
            "A mile",
            "Four hundred metres",
            "A marathon",
            "A hundred yards"
          ],
          "answer": 3,
          "explain": "It was the hundred-yard dash."
        },
        {
          "q": "Which runner fell?",
          "options": [
            "The smallest one",
            "The fastest one",
            "The oldest one",
            "The last one"
          ],
          "answer": 0,
          "explain": "The smallest among them stumbled."
        },
        {
          "q": "How did the crowd react at the end?",
          "options": [
            "With silence",
            "With a standing ovation",
            "With laughter",
            "By leaving"
          ],
          "answer": 1,
          "explain": "The audience rose to applaud the nine."
        },
        {
          "q": "What is the poem's central message?",
          "options": [
            "Speed wins races",
            "Training is useless",
            "Empathy matters more than competition",
            "Only gold counts"
          ],
          "answer": 2,
          "explain": "The runners chose kindness over winning."
        }
      ]
    },

    {
      "id": "twin-melodies",
      "title": "Twin Melodies",
      "section": "Kaveri",
      "summary": "A play in three acts about Shruti, a young violinist who secretly joins a fusion band and fears her classical-musician father's disapproval, until he discovers that tradition and innovation can blend.",
      "notes": [
        {
          "heading": "Plot in three acts",
          "points": [
            "**Act I:** In Iqbal's room, the fusion group (Iqbal on flute, Avinash on tabla, Peter on keyboard, Shruti on violin) finishes a rehearsal. Shruti is anxious because she has not told her father about the concert; her friends urge her to speak to him.",
            "**Act II:** At dinner Shruti tells her father Nabin about an Indo-Western fusion concert. He refuses firmly, mocks fusion music and walks away; her mother Leela scolds her for hiding it.",
            "**Act III:** At Iqbal's house Nabin and Leela quietly enter and enjoy the group's performance. Nabin praises the group and offers them the music room. He admits Leela reminded him that he too had defied his family of vocalists to play the violin."
          ]
        },
        {
          "heading": "Characters",
          "points": [
            "**Shruti:** talented, respectful and torn between her art and her father's views.",
            "**Nabin (Guru Nabin Sharma):** a strict classical violinist and principal of a music school, who finally changes his mind.",
            "**Leela:** wise, humorous mother who helps both sides.",
            "**Iqbal, Avinash and Peter:** supportive friends who encourage Shruti."
          ]
        },
        {
          "heading": "Themes",
          "points": [
            "**Tradition and innovation** can exist together; classical roots blend with contemporary forms.",
            "**Generation gap and communication:** talking honestly solves conflicts.",
            "**Open-mindedness:** the father is reminded of his own past rebellion.",
            "A play has acts, dialogue, stage directions and a final curtain."
          ]
        }
      ],
      "formulas": [
        "Author: Mitra Phukan (Katha Award for Translation)",
        "Three acts",
        "Main characters: Shruti, Nabin, Leela, Iqbal, Avinash, Peter",
        "Conflict: classical music versus Indo-Western fusion"
      ],
      "terms": [
        {
          "term": "Fusion music",
          "meaning": "Music that blends two or more styles, such as Indian classical and Western."
        },
        {
          "term": "Raga",
          "meaning": "A set of notes that forms the basis of a piece in Indian classical music."
        },
        {
          "term": "Act",
          "meaning": "A main division of a play."
        },
        {
          "term": "Stage direction",
          "meaning": "A note in a script telling actors how to speak or move."
        },
        {
          "term": "Generation gap",
          "meaning": "Difference in views between older and younger people."
        }
      ],
      "qa": [
        {
          "q": "Why was Shruti afraid to tell her father about the concert?",
          "a": "He was a strict classical violinist who believed fusion music disrespected the violin and tradition. She did not want him to feel she disregarded his opinions."
        },
        {
          "q": "How did Nabin react in Act II?",
          "a": "He firmly refused, saying the group performance would drown her individual style, mocked fusion as noise, and left the table."
        },
        {
          "q": "Why did Nabin change his mind?",
          "a": "He heard the group perform in a way that respected the raga, and Leela reminded him that his own father had opposed his choice of the violin. He realised his fears about losing Shruti to Western music were baseless."
        }
      ],
      "quiz": [
        {
          "q": "What instrument does Shruti play?",
          "options": [
            "Flute",
            "Tabla",
            "Violin",
            "Keyboard"
          ],
          "answer": 2,
          "explain": "Shruti plays the violin; Iqbal plays the flute."
        },
        {
          "q": "Who plays the tabla in the fusion group?",
          "options": [
            "Peter",
            "Iqbal",
            "Nabin",
            "Avinash"
          ],
          "answer": 3,
          "explain": "Avinash plays the tabla."
        },
        {
          "q": "How many acts does the play have?",
          "options": [
            "Three",
            "Two",
            "Four",
            "One"
          ],
          "answer": 0,
          "explain": "The play is divided into Acts I, II and III."
        },
        {
          "q": "What is Shruti's father's profession?",
          "options": [
            "Doctor",
            "Violinist and principal of a music school",
            "Tabla maker",
            "Newspaper editor"
          ],
          "answer": 1,
          "explain": "Nabin is a violinist and principal of Sangeetika Music School."
        },
        {
          "q": "What does Nabin offer the children at the end?",
          "options": [
            "A new violin",
            "A concert ticket",
            "The music room",
            "A trophy"
          ],
          "answer": 2,
          "explain": "He says they will have more equipment there."
        },
        {
          "q": "What is the play's main theme?",
          "options": [
            "Parents are always wrong",
            "Western music is better",
            "Practice is unnecessary",
            "Tradition and innovation can blend"
          ],
          "answer": 3,
          "explain": "Nabin learns to accept fusion and trusts his daughter."
        }
      ]
    },

    {
      "id": "a-friend-found-in-music",
      "title": "A Friend Found in Music",
      "section": "Kaveri",
      "summary": "A short rhymed poem in which music is shown as an ocean, a rhythm, a therapy and above all a dependable friend who lifts the speaker's spirits.",
      "notes": [
        {
          "heading": "What the poem says",
          "points": [
            "Music is compared to an **ocean** that pulls the speaker to the shore and a **rhythm** that moves her to the core.",
            "It is the **therapy** she needs when she feels blue and lifts her spirits so she can pull through.",
            "When she is happiest, music was there too.",
            "When no one seems to care, music is the needed friend."
          ]
        },
        {
          "heading": "Poetic features",
          "points": [
            "**Metaphors:** music is an ocean, rhythm, therapy and friend; each can be turned into a simile (music is as soothing as an ocean).",
            "**Repetition** of the word 'music' stresses its importance.",
            "**Rhyme:** shore/core, blue/through, there/care (the second and fourth lines of each four-line unit rhyme); the mood is thoughtful and warm.",
            "The speaker is the poet herself, shown by the use of 'I' and 'me'."
          ]
        },
        {
          "heading": "Message",
          "points": [
            "Music offers comfort, joy and emotional support, like a loyal friend.",
            "It works as personal and cultural language that nurtures identity and emotion."
          ]
        }
      ],
      "formulas": [
        "Poet: Bryanna T. Perkins",
        "Main device: metaphor (music as an ocean, rhythm, therapy, friend)",
        "Idiom: 'feel blue' means to feel sad",
        "Message: music is a dependable friend"
      ],
      "terms": [
        {
          "term": "Therapy",
          "meaning": "Treatment that helps someone feel better."
        },
        {
          "term": "Feel blue",
          "meaning": "An idiom meaning to feel sad."
        },
        {
          "term": "Metaphor",
          "meaning": "A comparison without 'like' or 'as'."
        },
        {
          "term": "Rhythm",
          "meaning": "A regular pattern of beats or sounds."
        },
        {
          "term": "Dependable",
          "meaning": "Reliable; someone you can count on."
        }
      ],
      "qa": [
        {
          "q": "What does the poet compare music to?",
          "a": "She compares it to an ocean, a rhythm, therapy and a needed friend, each showing a different way music supports her."
        },
        {
          "q": "What does music do for the poet when she is sad?",
          "a": "It acts as therapy, lifts her spirits and helps her pull through hard times."
        },
        {
          "q": "What message does the poem convey?",
          "a": "Music is a faithful friend that comforts us when we are alone and shares our happiness, so its value goes beyond entertainment."
        }
      ],
      "quiz": [
        {
          "q": "Who wrote 'A Friend Found in Music'?",
          "options": [
            "Maya Anthony",
            "David Roth",
            "Charles Swain",
            "Bryanna T. Perkins"
          ],
          "answer": 3,
          "explain": "Perkins is the poet."
        },
        {
          "q": "What does the phrase 'feel blue' mean?",
          "options": [
            "To feel sad",
            "To feel cold",
            "To feel calm",
            "To feel sleepy"
          ],
          "answer": 0,
          "explain": "It is an idiom for sadness."
        },
        {
          "q": "Which of these is a metaphor from the poem?",
          "options": [
            "Music is as sweet as honey",
            "Music is the ocean",
            "Music sings like a bird",
            "Music flows like a river"
          ],
          "answer": 1,
          "explain": "The poem states music is the ocean without using 'like' or 'as'."
        },
        {
          "q": "What does music pull the speaker towards?",
          "options": [
            "The sky",
            "A garden",
            "The shore",
            "Her home"
          ],
          "answer": 2,
          "explain": "The ocean pulls her to the shore."
        },
        {
          "q": "Which word best describes music in the last lines?",
          "options": [
            "Strict teacher",
            "Silent stranger",
            "Heavy burden",
            "Needed friend"
          ],
          "answer": 3,
          "explain": "Music is the friend when no one seems to care."
        },
        {
          "q": "The poem's mood is best described as",
          "options": [
            "Warm and thoughtful",
            "Playful",
            "Fearful",
            "Amused"
          ],
          "answer": 0,
          "explain": "It expresses gratitude for music's comfort."
        }
      ]
    },

    {
      "id": "carrier-of-words",
      "title": "Carrier of Words",
      "section": "Kaveri",
      "summary": "A feature on Khetaram, a Gramin Dak Sewak who walks across the Thar desert near the Rajasthan border to deliver letters, showing the trust, hardship and dignity of India's rural postmen.",
      "notes": [
        {
          "heading": "What the article describes",
          "points": [
            "Before the internet, mail travelled through the postal system; in remote India **Gramin Dak Sewaks (GDS)** are the only link between far-off villages and their families.",
            "Khetaram, sole postman of Somarad Branch Post Office, has carried mail for about fifteen years over sand dunes, beyond the last railhead and phone line, to hamlets near the Indo-Pakistan border.",
            "His bag may weigh up to 28 kilos. In summer he may walk 20 km for one delivery and sometimes waits until after sundown; water is too precious to wash with.",
            "Since 2001 delivery agents were accepted as GDS; they form more than half of the postal workforce."
          ]
        },
        {
          "heading": "The GDS and the community",
          "points": [
            "GDS must have another source of livelihood, work five hours a day and may serve until 65.",
            "Khetaram's job saves his family from famine, as one bajra crop in a good year cannot feed five.",
            "Families depend on **money orders**; a proposal to give the work to patwaris was rejected, showing trust in the post office.",
            "Villagers welcome him, ask him to read and write letters, and offer jaggery on happy news. He dreads letters with a torn right corner, which signal death; he reads them outside and tears them up."
          ]
        },
        {
          "heading": "Themes and tone",
          "points": [
            "**Dedication to duty** despite harsh conditions; the postman serves as a human link.",
            "**Trust and community:** he is a part of the social fabric.",
            "The tone is admiring, ending with a salute to people like Khetaram. He is ready even if he later carries a cell phone as a Gramin Sanchar Sewak."
          ]
        }
      ],
      "formulas": [
        "Genre: feature article about a rural postman",
        "Place: Somarad Branch Post Office, near Barmer, Thar desert, Rajasthan",
        "Maximum bag weight: 28 kilos",
        "GDS: Gramin Dak Sewak"
      ],
      "terms": [
        {
          "term": "Gramin Dak Sewak",
          "meaning": "A rural postal worker who delivers mail in remote areas."
        },
        {
          "term": "Dhaani",
          "meaning": "A small hamlet in the Rajasthan desert."
        },
        {
          "term": "Money order",
          "meaning": "A way of sending small sums of money through the post office."
        },
        {
          "term": "Dak",
          "meaning": "Post or mail."
        },
        {
          "term": "Missive",
          "meaning": "A letter."
        }
      ],
      "qa": [
        {
          "q": "What difficulties does Khetaram face in his work?",
          "a": "He walks long distances over soft sand and dunes with a heavy bag in extreme heat and sandstorms. Water is scarce, and he covers about 20 km for a single delivery in summer."
        },
        {
          "q": "Why is Khetaram trusted by the villagers?",
          "a": "He is reliable, helps people by reading letters and writing replies, and carries their money orders and news. Villagers rely on the post office and rejected a proposal to replace the GDS."
        },
        {
          "q": "Why does he tear letters that bring news of death?",
          "a": "He believes bad news must not be carried into the house. He reads the letter aloud twice outside and then destroys it, as the village custom says."
        }
      ],
      "quiz": [
        {
          "q": "What is Khetaram's job?",
          "options": [
            "Gramin Dak Sewak",
            "Policeman",
            "Teacher",
            "Soldier"
          ],
          "answer": 0,
          "explain": "He is a rural postal worker."
        },
        {
          "q": "What is the maximum weight of his bag?",
          "options": [
            "18 kilos",
            "28 kilos",
            "38 kilos",
            "58 kilos"
          ],
          "answer": 1,
          "explain": "Regulations say it cannot exceed 28 kilos."
        },
        {
          "q": "Which desert does Khetaram work in?",
          "options": [
            "The Cold Desert of Ladakh",
            "The Rann of Kutch",
            "The Thar",
            "The Gobi"
          ],
          "answer": 2,
          "explain": "He works in the Thar desert of Rajasthan."
        },
        {
          "q": "What does a torn right corner on an envelope mean?",
          "options": [
            "A happy wedding",
            "A money order",
            "A lost parcel",
            "News of a death"
          ],
          "answer": 3,
          "explain": "Such an envelope bears bad news."
        },
        {
          "q": "What can Khetaram offer in return on happy news?",
          "options": [
            "A piece of jaggery",
            "A cup of tea",
            "A new shirt",
            "A gold coin"
          ],
          "answer": 0,
          "explain": "In the village, jaggery is all that can be offered."
        },
        {
          "q": "What is the tone of the article?",
          "options": [
            "Mocking",
            "Admiring",
            "Fearful",
            "Angry"
          ],
          "answer": 1,
          "explain": "It ends with a salute to people like Khetaram."
        }
      ]
    },

    {
      "id": "words",
      "title": "Words",
      "section": "Kaveri",
      "summary": "A reflective poem arguing that fine words alone cannot satisfy the heart; only a few sincere words can bring real joy, while empty talk is like a flowering plant that bears no fruit.",
      "notes": [
        {
          "heading": "What the poem says",
          "points": [
            "If words could satisfy the heart, there would be less care; but words are like **summer birds** that depart and leave empty air.",
            "The heart, like a pilgrim on earth, finds that words are often as worthless as weeds.",
            "A little said truly can bring deeper joy than many words that reach the head but never the heart.",
            "A voice that cheers a lonely home often says few words, but how dear they are.",
            "If words could satisfy the chest, the world might hold a feast, but words often satisfy least. They are like plants that all blossom to the root and give no fruit."
          ]
        },
        {
          "heading": "Poetic devices",
          "points": [
            "**Simile:** words are like summer birds; like plants that make a gaudy show.",
            "**Metaphor:** the heart is a pilgrim; **personification** of words being summoned to the test.",
            "Regular rhyme and rhythm; tone is thoughtful and gently critical."
          ]
        },
        {
          "heading": "Message",
          "points": [
            "Sincerity matters more than quantity or show in speech.",
            "Words gain value only when they come from the heart."
          ]
        }
      ],
      "formulas": [
        "Poet: Charles Swain",
        "Simile examples: words like summer birds; plants that make a gaudy show",
        "Central idea: sincere words are worth more than many empty ones",
        "Tone: reflective"
      ],
      "terms": [
        {
          "term": "Pilgrim",
          "meaning": "A person who travels to a holy place; here, the heart as a traveller on earth."
        },
        {
          "term": "Gaudy",
          "meaning": "Bright in a showy, cheap way."
        },
        {
          "term": "Simile",
          "meaning": "A comparison using 'like' or 'as'."
        },
        {
          "term": "Sincere",
          "meaning": "Honest and genuine."
        },
        {
          "term": "Hosts of",
          "meaning": "A large number of."
        }
      ],
      "qa": [
        {
          "q": "Why does the poet compare words to summer birds?",
          "a": "Summer birds come and go and leave only empty air. In the same way, mere words depart without leaving anything lasting in the heart."
        },
        {
          "q": "What does the poet mean by plants that blossom to the root but bear no fruit?",
          "a": "It means showy words look impressive, but if they are insincere they produce nothing valuable, just as showy plants may give no fruit."
        },
        {
          "q": "What is the poem's message?",
          "a": "Few, truthful words from the heart are more valuable than many empty words. Speech should be sincere and meaningful."
        }
      ],
      "quiz": [
        {
          "q": "Who wrote 'Words'?",
          "options": [
            "Robert Langley",
            "Charles Swain",
            "Bryanna T. Perkins",
            "Mitra Phukan"
          ],
          "answer": 1,
          "explain": "The poem is by Charles Swain."
        },
        {
          "q": "Words are compared to",
          "options": [
            "Winter winds",
            "Spring rain",
            "Summer birds",
            "Autumn leaves"
          ],
          "answer": 2,
          "explain": "Words depart like summer birds."
        },
        {
          "q": "What is the heart compared to?",
          "options": [
            "A king",
            "A river",
            "A mountain",
            "A pilgrim"
          ],
          "answer": 3,
          "explain": "The heart is called a pilgrim upon earth."
        },
        {
          "q": "Which device is 'words, like summer birds'?",
          "options": [
            "Simile",
            "Metaphor",
            "Hyperbole",
            "Irony"
          ],
          "answer": 0,
          "explain": "It uses 'like' to compare."
        },
        {
          "q": "What gives deeper joy according to the poet?",
          "options": [
            "Long speeches",
            "A little said truly",
            "Loud voices",
            "Clever phrases"
          ],
          "answer": 1,
          "explain": "A few true words can impart deeper joy."
        },
        {
          "q": "The poem's tone can best be described as",
          "options": [
            "Cheerful",
            "Fearful",
            "Reflective",
            "Humorous"
          ],
          "answer": 2,
          "explain": "The poet thoughtfully compares words and sincerity."
        }
      ]
    },

    {
      "id": "follow-that-dream",
      "title": "Follow That Dream",
      "section": "Kaveri",
      "summary": "A mother's letter to her teenage daughter Ming, taken from the collection 'My Daughter, My Friend', encouraging her to chase her dream while being realistic about the effort, sacrifice and time it needs.",
      "notes": [
        {
          "heading": "What the letter says",
          "points": [
            "The letter is dated 19 June 1995 and begins by telling Ming, 'By all means follow that dream.' Great people achieve because they pursue a dream until it comes true.",
            "Reaching world-class standard in any field takes about **ten years** of focused effort. Count the cost in years of effort, money and sacrifice, and then plunge in if the dream still burns.",
            "The road is often uphill, but loving what you do keeps you going. Behind every award winner is a **support network**.",
            "Many dreams stay dreams because people trade them for security, or because circumstances (such as war or family responsibilities) change their lives.",
            "Dreams may change with time; the mother's own dream of publishing the book took ten years. She wishes that at least one of Ming's dreams comes true."
          ]
        },
        {
          "heading": "Features",
          "points": [
            "**Epistolary form:** a personal letter with an affectionate tone, closing with 'Love, Mum'.",
            "The mother is encouraging yet honest and does not 'put a wet blanket' on dreams.",
            "Words and phrases like plunge, buoyed up, wistfully and wishful thinking show feelings and effort."
          ]
        },
        {
          "heading": "Message",
          "points": [
            "Dreams need passion, conviction, hard work and sacrifice.",
            "Support from family and others matters; and it is acceptable for dreams to evolve."
          ]
        }
      ],
      "formulas": [
        "Writer: Irene Chua, from 'My Daughter, My Friend'",
        "Form: a letter from mother to daughter Ming, dated 19 June 1995",
        "Time needed to reach world-class standard: at least ten years",
        "Closing: 'Love, Mum'"
      ],
      "terms": [
        {
          "term": "Dream",
          "meaning": "A strong ambition or aim that one wants to achieve."
        },
        {
          "term": "Conviction",
          "meaning": "A firm belief."
        },
        {
          "term": "Plunge",
          "meaning": "To throw oneself into an activity."
        },
        {
          "term": "Wistfully",
          "meaning": "With a sad longing."
        },
        {
          "term": "Support network",
          "meaning": "The group of people who help someone succeed."
        }
      ],
      "qa": [
        {
          "q": "What advice does the mother give about following a dream?",
          "a": "She tells Ming to follow her dream but to count the cost in effort, money and sacrifice. If the passion still burns, she should plunge in and expect many years of hard work."
        },
        {
          "q": "Why do many dreams remain only dreams?",
          "a": "Many people prefer security or are stopped by changing circumstances, like war or the need to earn for family, so their wishes never go beyond wishful thinking."
        },
        {
          "q": "How does the mother show that dreams can change?",
          "a": "She says life may change a person's dreams, and that publishing her book, a dream she chased for ten years, was not her original youthful dream, yet it excites her."
        }
      ],
      "quiz": [
        {
          "q": "Who is the letter written to?",
          "options": [
            "Irene",
            "Sudha",
            "Ming",
            "Shruti"
          ],
          "answer": 2,
          "explain": "A mother writes to her daughter Ming."
        },
        {
          "q": "How many years of focused effort are needed for world-class skill?",
          "options": [
            "About two",
            "Exactly five",
            "Twenty",
            "At least ten"
          ],
          "answer": 3,
          "explain": "The mother says it takes at least ten years."
        },
        {
          "q": "What does 'plunge' suggest?",
          "options": [
            "Complete involvement",
            "Slow withdrawal",
            "Casual interest",
            "Fear"
          ],
          "answer": 0,
          "explain": "It means to throw oneself fully into the task."
        },
        {
          "q": "Why do many dreams remain dreams?",
          "options": [
            "Dreams are impossible",
            "People prefer security or circumstances change",
            "Nobody supports dreams",
            "Dreams are not important"
          ],
          "answer": 1,
          "explain": "The mother gives these reasons."
        },
        {
          "q": "What do award winners always thank?",
          "options": [
            "Their rivals",
            "Their critics",
            "Their support network",
            "Their teachers only"
          ],
          "answer": 2,
          "explain": "The winner thanks the group who stood by him or her."
        },
        {
          "q": "How does the letter end?",
          "options": [
            "'Yours faithfully'",
            "'Best wishes'",
            "'Goodbye'",
            "'Love, Mum'"
          ],
          "answer": 3,
          "explain": "It ends affectionately with Love, Mum."
        }
      ]
    },

    {
      "id": "believe-in-yourself",
      "title": "Believe in Yourself",
      "section": "Kaveri",
      "summary": "A short, encouraging poem that tells the reader to face challenges with courage: leave comfort behind, take the difficult first step and trust yourself.",
      "notes": [
        {
          "heading": "What the poem says",
          "points": [
            "**Stanza 1:** you must step up to the challenge; no crowd watches, it is just you and the future.",
            "**Stanza 2:** the future may pull you forward or push you back in fear; choices become difficult as it nears.",
            "**Stanza 3:** there is ease in comfort and the status quo, but we are not made for it and do not grow in it.",
            "**Stanza 4:** the first step is the hardest and there is no turning back; believing in yourself keeps the future on track."
          ]
        },
        {
          "heading": "Features",
          "points": [
            "Four stanzas of four lines with a simple rhyme on the second and fourth lines.",
            "The speaker uses direct address 'you', like a guide who encourages the reader.",
            "Tone is motivational and the poem moves from thoughtful to determined."
          ]
        },
        {
          "heading": "Message",
          "points": [
            "Growth demands leaving comfort and trusting yourself.",
            "Courage and self-belief help you take the first step towards your future."
          ]
        }
      ],
      "formulas": [
        "Poet: Robert Langley",
        "Four stanzas",
        "Speaker addresses the reader as 'you'",
        "Tone: motivational"
      ],
      "terms": [
        {
          "term": "Status quo",
          "meaning": "The existing state of affairs."
        },
        {
          "term": "Comfort zone",
          "meaning": "A situation in which one feels safe and at ease."
        },
        {
          "term": "Direct address",
          "meaning": "Speaking straight to the reader as 'you'."
        },
        {
          "term": "Motivational",
          "meaning": "Meant to encourage and inspire."
        },
        {
          "term": "Stanza",
          "meaning": "A group of lines forming a unit in a poem."
        }
      ],
      "qa": [
        {
          "q": "What does the poet say about comfort?",
          "a": "He says there is ease in comfort and in keeping things as they are, but we are not made for it because growth does not come from staying comfortable."
        },
        {
          "q": "Why is the first step called the hardest?",
          "a": "It means leaving certainty behind without turning back, which needs courage. Self-belief makes that step possible."
        },
        {
          "q": "What is the central message of the poem?",
          "a": "Face challenges bravely and believe in yourself. Progress begins when you take the first step and trust your ability."
        }
      ],
      "quiz": [
        {
          "q": "Who wrote 'Believe in Yourself'?",
          "options": [
            "Robert Frost",
            "Charles Swain",
            "David Roth",
            "Robert Langley"
          ],
          "answer": 3,
          "explain": "The poem is by Robert Langley."
        },
        {
          "q": "What does the poet say is the hardest?",
          "options": [
            "The first step",
            "The last step",
            "Choosing a friend",
            "Waiting"
          ],
          "answer": 0,
          "explain": "The first step is the hardest."
        },
        {
          "q": "What does 'status quo' mean?",
          "options": [
            "A new beginning",
            "The existing situation",
            "A prize",
            "A challenge"
          ],
          "answer": 1,
          "explain": "The poem says there is ease in keeping the status quo."
        },
        {
          "q": "How does the speaker address the reader?",
          "options": [
            "As 'we'",
            "As 'they'",
            "As 'you'",
            "As 'he'"
          ],
          "answer": 2,
          "explain": "Direct address creates closeness."
        },
        {
          "q": "What is the tone of the poem?",
          "options": [
            "Sorrowful",
            "Sarcastic",
            "Playful",
            "Motivational"
          ],
          "answer": 3,
          "explain": "It encourages the reader to act."
        },
        {
          "q": "What helps the future stay on track?",
          "options": [
            "Belief in yourself",
            "Luck",
            "Crowds",
            "Comfort"
          ],
          "answer": 0,
          "explain": "The final lines say you just need to believe in yourself."
        }
      ]
    }
  ]
});
