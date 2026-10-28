// Class 9 English: Grammar, Writing Skills and Literature (Beehive).
// Format: see CONTENT_GUIDE.md. Summaries are original; no text is reproduced from the textbook.
StudyData.add(9, "english", {
  // What this content follows. match: "textbook" | "older-book" | "topic". Set reviewed to a date once a teacher has checked it.
  syllabus: {board: "CBSE", match: "textbook", books: ["Beehive"], note: "Grammar and writing, plus a selection of Beehive lessons (not every chapter).", reviewed: false},
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

    // ─────────────────────────── LITERATURE ───────────────────────────
    {
      id: "the-fun-they-had",
      title: "The Fun They Had",
      section: "Literature – Beehive",
      summary: "Isaac Asimov's science-fiction story set in 2157, in which Margie and Tommy find a real printed book about the old schools and wonder how much fun children had when they learnt together.",
      notes: [
        {
          heading: "Summary",
          points: [
            "The story is set in **2157**. Margie writes in her diary that Tommy has found a **real book** printed on paper.",
            "Children of their time read **telebooks** on a screen and study alone at home with a **mechanical teacher**.",
            "The old book is about **school** as it was centuries ago, with a human teacher and a special building where children studied together.",
            "Margie's mechanical teacher had been giving her test after test in geography, and she was doing worse. The **County Inspector** found the geography sector set too fast and slowed it to an average ten-year-old level.",
            "As she sits down to her arithmetic lesson, Margie thinks of the old schools where children laughed, learnt and went home together, and of **the fun they had**."
          ]
        },
        {
          heading: "Characters",
          points: [
            "**Margie** (11): curious and imaginative; she dislikes her mechanical school and longs for the company of other children.",
            "**Tommy** (13): confident and a little superior; he finds the book and explains the old school to Margie.",
            "**The County Inspector**: a little man with a red face and a box of tools, who repairs and adjusts mechanical teachers.",
            "**Margie's mother**: strict about regular study hours; she calls Margie to her lessons."
          ]
        },
        {
          heading: "Themes and message",
          points: [
            "**Technology vs human touch:** machines can teach facts but cannot give companionship, warmth or understanding.",
            "**Loneliness of learning alone:** Margie studies in a room next to her bedroom, with no classmates.",
            "**School as a social place:** learning together and helping one another is a joy in itself.",
            "Message: education is more than information; human teachers and friends make learning meaningful."
          ]
        },
        {
          heading: "Literary features",
          points: [
            "**Science fiction:** it imagines home-based screen learning long before it became common.",
            "**Irony:** what we take for granted (books, schools, teachers) seems strange and wonderful to the children of the future.",
            "The story opens with a **diary entry** dated 17 May 2157."
          ]
        }
      ],
      formulas: [
        "Author: Isaac Asimov",
        "Genre: science fiction",
        "Setting: the year 2157",
        "Characters: Margie (11), Tommy (13), the County Inspector, Margie's mother"
      ],
      terms: [
        { term: "Telebook", meaning: "A book read on a screen in the story's future world; the children have read many of these." },
        { term: "Mechanical teacher", meaning: "A large machine with a screen and a slot for homework that teaches each child at home." },
        { term: "County Inspector", meaning: "The official who repairs and adjusts the mechanical teachers." },
        { term: "Punch code", meaning: "The code in which Margie writes her homework and tests; she learnt it at the age of six." },
        { term: "2157", meaning: "The year in which the story is set." }
      ],
      qa: [
        {
          q: "Why did Margie hate school?",
          a: "Margie had to study alone with a **mechanical teacher** in a room next to her bedroom. It kept giving her geography tests in which she did badly, and she had to put her homework into a slot in punch code. With no friends to learn and play with, school felt dull and lonely."
        },
        {
          q: "What did Margie find strange about the old kind of school?",
          a: "She found it strange that a **human teacher** taught a whole group of children of the same age together in a special building. She was surprised that a man could be clever enough to teach, and also found it odd that the words in a printed book stood still instead of moving on a screen."
        },
        {
          q: "What is the main message of the story?",
          a: "The story suggests that machines can never fully replace **human teachers and the shared joy of learning together**. Technology may make education efficient, but friendship, discussion and the warmth of a real classroom make it meaningful."
        }
      ],
      quiz: [
        {
          q: "In which year is ‘The Fun They Had’ set?",
          options: ["2057", "2157", "2155", "2517"],
          answer: 1,
          explain: "Margie's diary entry is dated 17 May **2157**."
        },
        {
          q: "What did Tommy find?",
          options: ["A mechanical teacher", "A telebook", "A real printed book", "A diary"],
          answer: 2,
          explain: "Tommy found a **real book** printed on paper, something the children had only heard of."
        },
        {
          q: "Why was the County Inspector called to Margie's house?",
          options: ["Margie had lost her homework", "Her teacher's geography sector was set too fast", "The screen had blanked out completely", "Tommy had broken the teacher"],
          answer: 1,
          explain: "Margie was doing badly because the **geography sector was geared too quick**. (It was Tommy's teacher whose history sector blanked out.)"
        },
        {
          q: "Where was Margie's schoolroom?",
          options: ["Right next to her bedroom", "In a building at the end of the street", "At Tommy's house", "In the County Inspector's office"],
          answer: 0,
          explain: "The mechanical teacher was kept in a room **right next to her bedroom**."
        },
        {
          q: "What was Margie thinking about at the end of the story?",
          options: ["Her grandfather's stories", "The geography test", "The County Inspector's tools", "How children in the old days learnt and played together"],
          answer: 3,
          explain: "She imagined the old schools where children studied and played together, and **the fun they had**."
        },
        {
          q: "Which theme is central to the story?",
          options: ["The value of human company in learning", "The dangers of space travel", "The importance of money", "Life in a village"],
          answer: 0,
          explain: "The story contrasts lonely machine learning with the **joy of learning together**."
        }
      ]
    },

    {
      id: "the-road-not-taken",
      title: "The Road Not Taken",
      section: "Literature – Beehive",
      summary: "Robert Frost's poem about a traveller who must choose between two paths in a wood, a metaphor for the choices that shape our lives.",
      notes: [
        {
          heading: "Summary",
          points: [
            "A traveller stands where **two roads divide** in a yellow (autumn) wood, sorry that he cannot travel both.",
            "He looks down one road as far as he can, to where it bends into the undergrowth.",
            "He takes the other, which seems grassier and less worn, though he admits both had been worn about the same and were covered with fresh, untrodden leaves that morning.",
            "He keeps the first road for another day, but doubts he will ever come back, since one road leads on to another.",
            "He imagines telling this **with a sigh** many years later: that he took the road **less travelled**, and that it has made all the difference."
          ]
        },
        {
          heading: "Themes and message",
          points: [
            "**Choices and decisions:** life keeps forcing us to choose, and we cannot try every path.",
            "**Consequences:** one choice leads to others, so we rarely get to go back.",
            "**Individuality:** the speaker presents his choice as the less common one.",
            "Message: choose thoughtfully, accept that every choice has consequences, and do not live in regret."
          ]
        },
        {
          heading: "Poetic devices",
          points: [
            "**Metaphor/symbolism:** the two roads stand for choices in life; the ‘yellow wood’ suggests autumn.",
            "**Rhyme scheme:** **ABAAB** in each of the four five-line stanzas.",
            "**Imagery:** the yellow wood, the road bending into the undergrowth, the untrodden leaves.",
            "**Enjambment:** sentences run on from one line to the next, like a person thinking aloud.",
            "**Repetition:** ‘ages and ages’, and the word ‘way’ repeated in the third stanza."
          ]
        },
        {
          heading: "About the poet",
          points: [
            "**Robert Frost** (1874–1963) was an American poet known for poems set in the New England countryside.",
            "He often uses simple scenes from nature to express deep ideas about human life.",
            "The ‘sigh’ at the end is ambiguous: it may show regret for the road not taken, or simply a thoughtful look back."
          ]
        }
      ],
      formulas: [
        "Poet: Robert Frost",
        "Form: four stanzas of five lines each",
        "Rhyme scheme: ABAAB",
        "Central symbol: two roads = choices in life"
      ],
      terms: [
        { term: "Diverged", meaning: "Separated and went in different directions." },
        { term: "Undergrowth", meaning: "Small trees and bushes growing beneath taller trees." },
        { term: "Wanted wear", meaning: "Had not been used much; the grassy road seemed to need walkers." },
        { term: "Hence", meaning: "From now (in time). ‘Ages and ages hence’ means many years later." },
        { term: "Yellow wood", meaning: "A forest in autumn, when the leaves turn yellow." }
      ],
      qa: [
        {
          q: "Why did the traveller choose the second road?",
          a: "The second road looked **grassy and less worn**, as if fewer people had used it, so it seemed to have a slightly better claim. However, he admits that both roads had really been worn about equally."
        },
        {
          q: "What do the two roads symbolise?",
          a: "The two roads symbolise the **choices** we face in life. Just as the traveller can take only one road, we can follow only one choice at a time, and each choice leads to further choices, so it is hard to come back."
        },
        {
          q: "Why does the poet say he will tell the story ‘with a sigh’?",
          a: "Years later, he will look back on this decision. The sigh may express **regret** for the road he did not take, or a quiet reflection on how his choice shaped his life; the poet leaves it open."
        }
      ],
      quiz: [
        {
          q: "What does the ‘yellow wood’ suggest?",
          options: ["Spring", "Autumn", "Summer", "A desert"],
          answer: 1,
          explain: "Leaves turn yellow in **autumn**."
        },
        {
          q: "Why did the speaker feel sorry at the start of the poem?",
          options: ["He had lost his way", "The roads were blocked", "He was tired of walking", "He could not travel both roads"],
          answer: 3,
          explain: "He regretted that, being one traveller, he **could not travel both roads**."
        },
        {
          q: "What is the rhyme scheme of each stanza?",
          options: ["ABAB", "AABB", "ABAAB", "ABCB"],
          answer: 2,
          explain: "Each five-line stanza follows **ABAAB**."
        },
        {
          q: "The two roads in the poem are a metaphor for:",
          options: ["choices in life", "rich and poor people", "day and night", "two countries"],
          answer: 0,
          explain: "The roads stand for the **choices** we must make in life."
        },
        {
          q: "Why did the speaker doubt that he would come back to the first road?",
          options: ["He disliked it", "The road was going to be closed", "One way leads on to another, so people rarely return", "He was moving to another country"],
          answer: 2,
          explain: "He knew that one choice **leads on to another**, so he would probably never return."
        },
        {
          q: "Who wrote ‘The Road Not Taken’?",
          options: ["William Wordsworth", "Robert Frost", "James Kirkup", "W.B. Yeats"],
          answer: 1,
          explain: "The poem is by the American poet **Robert Frost**."
        }
      ]
    },

    {
      id: "the-sound-of-music",
      title: "The Sound of Music",
      section: "Literature – Beehive",
      summary: "A two-part chapter: Part I tells how Evelyn Glennie became a world-famous percussionist despite being profoundly deaf; Part II traces the history of the shehnai and the life of Ustad Bismillah Khan.",
      notes: [
        {
          heading: "Part I: Evelyn Glennie",
          points: [
            "Written by Deborah Cowley. Evelyn's hearing began to fail in childhood; by the age of **eleven** she was found to be **profoundly deaf** because of gradual nerve damage.",
            "She was advised to wear hearing aids and go to a special school, but she continued normal schooling and kept up her interest in music.",
            "Percussionist **Ron Forbes** saw her potential. He tuned two drums to different notes and taught her to **sense sound through her body**: the higher drum above the waist, the lower one below.",
            "She joined the **Royal Academy of Music** in London, scored among the highest marks in its history and became a famous solo percussionist.",
            "She often performs **barefoot** to feel the vibrations through the floor, gives free concerts in hospitals and prisons, and inspires people with disabilities."
          ]
        },
        {
          heading: "Part II: How the shehnai was born",
          points: [
            "Emperor **Aurangzeb** banned the **pungi** in the royal residence because of its shrill, unpleasant sound.",
            "A **barber** (nai) from a family of musicians improved it: he chose a longer, broader pipe with a natural hollow stem and made seven holes in it.",
            "Because it was played in the **Shah's** chambers and made by a **nai**, it came to be called the **shehnai**.",
            "It became part of the **naubat**, the traditional ensemble of nine instruments at royal courts, and is played in temples and at weddings."
          ]
        },
        {
          heading: "Part II: Ustad Bismillah Khan",
          points: [
            "Born in **1916** in **Dumraon, Bihar**, into a family of shehnai players, he learnt from his maternal uncle **Ali Bux**, who played the shehnai at the Vishnu temple in Benaras.",
            "He practised on the banks of the **Ganga**, whose flowing waters inspired him to create new ragas.",
            "His big break came when **All India Radio** opened in Lucknow in 1938.",
            "On **15 August 1947** he became the first Indian to greet the nation with his shehnai, from the **Red Fort**.",
            "He was the first Indian invited to perform at the **Lincoln Centre Hall** in the USA, and received the Padma Shri, Padma Bhushan, Padma Vibhushan and, in 2001, the **Bharat Ratna**."
          ]
        },
        {
          heading: "Love for his roots",
          points: [
            "A student offered to set up a shehnai school for him in the USA. He refused, asking whether they could also bring the **Ganga** there.",
            "He was deeply attached to **Benaras and Dumraon** and to India's shared musical culture.",
            "He disliked the artificiality and glamour of the film world, though he played for a few films."
          ]
        },
        {
          heading: "Characters, themes and message",
          points: [
            "**Evelyn Glennie:** determined, hard-working and positive; she refused to let deafness limit her.",
            "**Bismillah Khan:** humble, devoted to his art and deeply rooted in his culture.",
            "**Themes:** determination over disability, dedication to art, love for one's homeland.",
            "Message: passion and hard work can overcome any obstacle; true artists stay rooted in their culture."
          ]
        }
      ],
      formulas: [
        "Part I: Evelyn Glennie Listens to Sound without Hearing It, by Deborah Cowley",
        "Part II: The Shehnai of Bismillah Khan",
        "Bismillah Khan: born 1916, Dumraon (Bihar); Bharat Ratna 2001",
        "15 August 1947: shehnai from the Red Fort"
      ],
      terms: [
        { term: "Percussionist", meaning: "A musician who plays percussion instruments such as drums, xylophone and cymbals." },
        { term: "Profoundly deaf", meaning: "Completely or almost completely unable to hear." },
        { term: "Pungi", meaning: "A reeded wind instrument with a shrill sound, banned by Aurangzeb in the royal residence." },
        { term: "Shehnai", meaning: "The improved pungi made by a barber; the name comes from ‘Shah’ and ‘nai’ (barber)." },
        { term: "Naubat", meaning: "The traditional ensemble of nine instruments found at royal courts." },
        { term: "Ali Bux", meaning: "Bismillah Khan's maternal uncle and teacher, who played the shehnai at the Vishnu temple of Benaras." }
      ],
      qa: [
        {
          q: "How did Evelyn Glennie learn to ‘hear’ music?",
          a: "With the help of percussionist **Ron Forbes**, she learnt to sense sound through different parts of her body. He tuned two drums to different notes, and she felt the higher note above her waist and the lower one below it. She also plays barefoot to feel vibrations through the floor."
        },
        {
          q: "How did the shehnai get its name?",
          a: "Aurangzeb had banned the shrill **pungi**. A **barber** (nai) improved it into a longer, broader pipe with seven holes. Because it was first played in the **Shah's** chambers and made by a **nai**, it was called the shehnai."
        },
        {
          q: "Why did Bismillah Khan refuse to settle in the USA?",
          a: "A student offered to set up a shehnai school for him in the USA. He refused because he was deeply attached to **Benaras, the Ganga and Dumraon**, and asked whether they could transport the Ganga too. This shows his love for India and his roots."
        }
      ],
      quiz: [
        {
          q: "Who helped Evelyn Glennie learn to sense sounds through her body?",
          options: ["Ron Forbes", "Ali Bux", "Her headmistress", "A hearing specialist"],
          answer: 0,
          explain: "Percussionist **Ron Forbes** tuned two drums to different notes and taught her to feel the sounds."
        },
        {
          q: "Why did Aurangzeb ban the pungi in the royal residence?",
          options: ["It was too expensive", "It had a shrill, unpleasant sound", "It was used only by barbers", "It was too difficult to play"],
          answer: 1,
          explain: "The pungi's sound was **shrill and unpleasant**."
        },
        {
          q: "Where did Bismillah Khan play on 15 August 1947?",
          options: ["Lincoln Centre Hall", "The Vishnu temple of Benaras", "The Red Fort", "All India Radio, Lucknow"],
          answer: 2,
          explain: "He greeted the nation with his shehnai from the **Red Fort** on India's first Independence Day."
        },
        {
          q: "Why does Evelyn Glennie often perform barefoot?",
          options: ["It is a Scottish tradition", "Her shoes hurt during long concerts", "Her teacher forbade shoes on stage", "To feel the vibrations through the floor"],
          answer: 3,
          explain: "Being deaf, she senses music as **vibrations**, which she feels through her bare feet."
        },
        {
          q: "Which honour did Bismillah Khan receive in 2001?",
          options: ["Bharat Ratna", "Padma Shri", "Padma Bhushan", "Padma Vibhushan"],
          answer: 0,
          explain: "He was awarded the **Bharat Ratna**, India's highest civilian honour, in 2001."
        },
        {
          q: "What message do both parts of the chapter share?",
          options: ["Music should be played only in royal courts", "Talent cannot be developed", "Passion and hard work can overcome obstacles", "Only famous families produce great musicians"],
          answer: 2,
          explain: "Both Evelyn and Bismillah Khan rose through **dedication and hard work**."
        }
      ]
    },

    {
      id: "wind",
      title: "Wind",
      section: "Literature – Beehive",
      summary: "A poem by Subramania Bharati, translated from Tamil by A.K. Ramanujan, in which the destructive wind becomes a symbol of life's hardships that only the strong can face.",
      notes: [
        {
          heading: "Summary",
          points: [
            "The poet asks the wind to come **softly** and not break the window shutters, scatter papers or throw down books from the shelf.",
            "But the wind has already done all this: it has torn pages and brought rain again. It mocks the weak.",
            "The wind god **winnows** out and crushes everything that is weak: crumbling houses, doors, rafters, wood, bodies, lives and hearts.",
            "So we must build **strong homes**, fix doors firmly, make our bodies fit and our hearts **steadfast**.",
            "Then the wind will be our friend: it blows out **weak fires** but makes **strong fires** roar and flourish. We praise him every day."
          ]
        },
        {
          heading: "Themes and message",
          points: [
            "**Wind as a symbol** of difficulties and challenges in life.",
            "**Strength of body and mind:** hardships destroy the weak, while the strong grow stronger.",
            "**Friendship with challenges:** when we are strong, the same force becomes a friend.",
            "Message: do not complain about hardships; build inner and outer strength to face them."
          ]
        },
        {
          heading: "Poetic devices",
          points: [
            "**Personification:** the wind is treated as a person and as the ‘wind god’ who winnows and crushes.",
            "**Apostrophe:** the poet speaks directly to the wind.",
            "**Repetition:** ‘crumbling’ is repeated to stress weakness.",
            "**Symbolism/metaphor:** weak fires and strong fires stand for weak and strong people.",
            "**Free verse:** the poem has no regular rhyme scheme."
          ]
        },
        {
          heading: "About the poet",
          points: [
            "**Subramania Bharati** (1882–1921) was a Tamil poet and freedom fighter.",
            "The poem was translated from Tamil into English by **A.K. Ramanujan**."
          ]
        }
      ],
      formulas: [
        "Poet: Subramania Bharati (Tamil)",
        "Translator: A.K. Ramanujan",
        "Central symbol: wind = hardships and challenges of life",
        "Form: free verse"
      ],
      terms: [
        { term: "Winnow", meaning: "To separate grain from chaff by blowing air; in the poem, the wind separates out and destroys the weak." },
        { term: "Crumbling", meaning: "Breaking into small pieces; weak and falling apart." },
        { term: "Steadfast", meaning: "Firm, determined and unshaken." },
        { term: "Rafters", meaning: "Sloping wooden beams that support a roof." },
        { term: "Flourish", meaning: "To grow strongly and well." }
      ],
      qa: [
        {
          q: "What does the wind do to weak things?",
          a: "The wind **winnows** out weak things (crumbling houses, doors, rafters, wood, bodies, lives and hearts) and crushes them all. It also blows out **weak fires**."
        },
        {
          q: "How can we make the wind our friend?",
          a: "We should build **strong homes** with firmly joined doors, make our bodies fit through practice and make our hearts **steadfast**. Then the wind cannot harm us; instead it makes strong fires roar, and its friendship is good."
        },
        {
          q: "What does the wind symbolise in the poem?",
          a: "The wind symbolises the **hardships and challenges** of life. Weak people are broken by them, while people who are strong in body and mind face them bravely and grow even stronger."
        }
      ],
      quiz: [
        {
          q: "Who translated ‘Wind’ into English?",
          options: ["Subramania Bharati", "A.K. Ramanujan", "Rabindranath Tagore", "Robert Frost"],
          answer: 1,
          explain: "Bharati wrote it in Tamil; **A.K. Ramanujan** translated it into English."
        },
        {
          q: "What does the wind do to weak fires?",
          options: ["Makes them roar", "Turns them into rain", "Leaves them alone", "Blows them out"],
          answer: 3,
          explain: "The wind **blows out** weak fires but makes strong fires roar and flourish."
        },
        {
          q: "The wind in the poem symbolises:",
          options: ["challenges and hardships in life", "a gentle friend", "the monsoon season only", "wealth and luxury"],
          answer: 0,
          explain: "The wind stands for life's **difficulties**, which destroy only the weak."
        },
        {
          q: "Which device is used when the poet speaks directly to the wind?",
          options: ["Simile", "Alliteration", "Apostrophe", "Onomatopoeia"],
          answer: 2,
          explain: "Addressing something absent or non-human directly is called **apostrophe**."
        },
        {
          q: "What does the poet advise us to do?",
          options: ["Hide from the wind", "Build strong homes, bodies and hearts", "Pray for the wind to stop", "Shut all windows forever"],
          answer: 1,
          explain: "He urges us to **become strong** so that the wind becomes our friend."
        }
      ]
    },

    {
      id: "the-little-girl",
      title: "The Little Girl",
      section: "Literature – Beehive",
      summary: "Katherine Mansfield's story of Kezia, a little girl who fears her strict father until a frightening night shows her his loving heart.",
      notes: [
        {
          heading: "Summary",
          points: [
            "**Kezia** is afraid of her father, who seems big, stern and impatient. She is relieved when he leaves for work each morning.",
            "In front of him she becomes nervous and **stutters**, which irritates him further.",
            "Her grandmother suggests she make a **pin-cushion** for her father's birthday. Kezia stuffs it with papers from her mother's room, which turn out to be her father's **important speech** for the Port Authority.",
            "Her father punishes her by hitting her palms with a **ruler**. Hurt and confused, she notices how the neighbour **Mr Macdonald** plays happily with his children.",
            "One night, when her mother is ill in hospital and her grandmother is with her, Kezia is left with **Alice, the cook**. She has a **nightmare**, and her father comforts her and lets her sleep beside him.",
            "Resting against him, she realises he works hard and is too tired to play. She sees that he has a **big heart**, and her fear turns into love."
          ]
        },
        {
          heading: "Characters",
          points: [
            "**Kezia:** a sensitive, timid little girl who fears her father but longs for his affection.",
            "**Father:** strict and impatient on the surface, but caring and gentle when Kezia truly needs him.",
            "**Grandmother:** loving and protective; she comforts Kezia and encourages her to be closer to her father.",
            "**Mr Macdonald:** the neighbour who plays joyfully with his five children, showing Kezia a different kind of father."
          ]
        },
        {
          heading: "Themes and message",
          points: [
            "**Parent–child relationship:** a gap in understanding between a busy father and a sensitive child.",
            "**Fear vs love:** Kezia's fear comes from misunderstanding; closeness reveals love.",
            "**Changing perceptions:** she learns to see her father as a tired, hard-working man who loves her.",
            "Message: parents should express love and be patient with children; children should try to understand their parents' pressures."
          ]
        },
        {
          heading: "Turning point",
          points: [
            "The night of the nightmare is the turning point: the father who frightened her becomes her comforter.",
            "Kezia notices that he is tired after a day's work and has no one to play with him, and she feels sympathy for him."
          ]
        }
      ],
      formulas: [
        "Author: Katherine Mansfield",
        "Main character: Kezia",
        "Key objects: the pin-cushion and the father's speech for the Port Authority",
        "Turning point: the nightmare and the father's comfort"
      ],
      terms: [
        { term: "Kezia", meaning: "The little girl in the story who is afraid of her strict father." },
        { term: "Pin-cushion", meaning: "A small padded cushion for holding pins; Kezia made one as a birthday gift for her father." },
        { term: "Port Authority", meaning: "The body for which Kezia's father had written the important speech that Kezia tore up." },
        { term: "Nightmare", meaning: "A frightening dream; Kezia dreamt of a butcher with a knife and a rope." },
        { term: "Mr Macdonald", meaning: "Kezia's neighbour, a playful, loving father of five children." }
      ],
      qa: [
        {
          q: "Why was Kezia afraid of her father?",
          a: "Her father seemed **big, strict and impatient**. He often found fault with her and made her nervous, so she stuttered in front of him. She was relieved whenever he left for work."
        },
        {
          q: "Why did Kezia's father punish her?",
          a: "To make a pin-cushion for his birthday, Kezia stuffed it with papers from her mother's table. These were her father's **important speech for the Port Authority**. Angry at losing them, he punished her by hitting her palms with a ruler."
        },
        {
          q: "How did Kezia's view of her father change?",
          a: "On the night of her nightmare, her father **comforted her** and let her sleep beside him. She realised he was tired from working hard for the family and that he had a **big heart**. Her fear turned into love and sympathy."
        }
      ],
      quiz: [
        {
          q: "Who wrote ‘The Little Girl’?",
          options: ["Katherine Mansfield", "Isaac Asimov", "Deborah Cowley", "Ruskin Bond"],
          answer: 0,
          explain: "‘The Little Girl’ is by **Katherine Mansfield**."
        },
        {
          q: "What did Kezia make as a birthday gift for her father?",
          options: ["A greeting card", "A pin-cushion", "A paper boat", "A painting"],
          answer: 1,
          explain: "On her grandmother's suggestion, she made a **pin-cushion**."
        },
        {
          q: "What were the papers Kezia used to stuff the gift?",
          options: ["Old newspapers", "Her school notes", "Her father's important speech", "Her grandmother's letters"],
          answer: 2,
          explain: "She unknowingly used her father's **great speech for the Port Authority**."
        },
        {
          q: "With whom was Kezia left when her mother was taken to hospital?",
          options: ["Mr Macdonald", "Her aunt", "A neighbour's daughter", "Alice, the cook"],
          answer: 3,
          explain: "Her grandmother went to the hospital, so Kezia was left with **Alice, the cook**."
        },
        {
          q: "What made Kezia feel that some fathers are very different from hers?",
          options: ["Seeing Mr Macdonald play happily with his children", "Reading a storybook", "Her grandmother's advice", "A visit to the hospital"],
          answer: 0,
          explain: "Watching **Mr Macdonald** play with his children showed her a warm, playful kind of father."
        },
        {
          q: "What does Kezia realise at the end?",
          options: ["Her father does not love her", "Her father has a big heart and works hard", "Her grandmother is strict", "She should leave home"],
          answer: 1,
          explain: "She sees that her father is tired from work and has a **big heart**."
        }
      ]
    },

    {
      id: "the-snake-and-the-mirror",
      title: "The Snake and the Mirror",
      section: "Literature – Beehive",
      summary: "Vaikom Muhammad Basheer's humorous story in which a vain young homeopath, admiring himself in a mirror, suddenly finds a snake coiled around his arm.",
      notes: [
        {
          heading: "Summary",
          points: [
            "The narrator is a poor young **homeopath** living in a small rented room. One night, after dinner, he sits before his mirror.",
            "Admiring his face, he decides he is handsome, plans to **shave every day and grow a thin moustache**, and day-dreams of marrying a **rich, fat lady doctor**.",
            "Suddenly a **snake** drops onto his shoulder and coils itself around his arm. Terrified, he sits as still as a statue, hardly breathing, and prays to God.",
            "The snake turns its head and looks into the **mirror**. The narrator jokes that it may be admiring its own reflection.",
            "When the snake moves towards the mirror, he seizes the chance and **escapes** from the room."
          ]
        },
        {
          heading: "The narrator's character",
          points: [
            "**Vain:** he admires his looks and plans ways to appear even more handsome.",
            "**Poor but ambitious:** he dreams of marrying a rich woman to improve his life.",
            "**Frightened yet sensible:** he stays perfectly still while the snake is on him and escapes at the right moment.",
            "**Humorous:** he tells his own terrifying experience with self-mocking wit."
          ]
        },
        {
          heading: "Themes and message",
          points: [
            "**Vanity:** the incident deflates the narrator's pride in his looks; even the snake seems more interested in its own reflection.",
            "**Fear and presence of mind:** facing death, he realises how helpless he is, and calmness saves him.",
            "**Humour in danger:** Basheer turns a frightening event into a funny story.",
            "Message: pride and day-dreams mean little in the face of real danger; staying calm can save us."
          ]
        },
        {
          heading: "Narrative style",
          points: [
            "Told in the **first person**, as the homeopath narrates his experience to listeners.",
            "Mixes **suspense** with gentle **humour and irony**.",
            "**Vaikom Muhammad Basheer** (1908–1994) was a celebrated Malayalam writer; the story is translated from Malayalam."
          ]
        }
      ],
      formulas: [
        "Author: Vaikom Muhammad Basheer (Malayalam)",
        "Narrator: a poor young homeopath",
        "Setting: his small rented room, at night",
        "Main themes: vanity, fear, humour"
      ],
      terms: [
        { term: "Homeopath", meaning: "A doctor who practises homeopathy, a system of medicine; the narrator's profession." },
        { term: "Vanity", meaning: "Too much pride in one's own appearance or achievements." },
        { term: "Presence of mind", meaning: "The ability to think and act calmly in an emergency." },
        { term: "Petrified", meaning: "So frightened that one cannot move." },
        { term: "Reflection", meaning: "The image seen in a mirror; the snake seemed to look at its own." }
      ],
      qa: [
        {
          q: "What did the narrator decide while admiring himself in the mirror?",
          a: "He decided that he was quite handsome and that he would **shave every day** and **grow a thin moustache** to look even better. He also day-dreamed of marrying a rich, fat lady doctor."
        },
        {
          q: "How did the narrator react when the snake coiled around his arm?",
          a: "He was terrified but stayed **absolutely still**, hardly breathing, because any movement might make the snake bite. He prayed to God. When the snake turned towards the mirror, he used that chance to escape."
        },
        {
          q: "How is humour created in the story?",
          a: "Basheer laughs at the narrator's **vanity**: a man admiring his face is suddenly frozen with fear by a snake. The idea that the snake, too, was admiring itself in the mirror, and the narrator's dreams of a rich wife, make a frightening event amusing."
        }
      ],
      quiz: [
        {
          q: "What was the narrator's profession?",
          options: ["Engineer", "Teacher", "Homeopath", "Lawyer"],
          answer: 2,
          explain: "The narrator was a poor young **homeopath**."
        },
        {
          q: "What was the narrator doing when the snake appeared?",
          options: ["Sleeping on his bed", "Looking at himself in the mirror", "Reading a medical book", "Eating dinner"],
          answer: 1,
          explain: "He was sitting before the **mirror**, admiring his face."
        },
        {
          q: "What did the narrator decide to do to look more handsome?",
          options: ["Buy new clothes", "Cut his hair short", "Wear spectacles", "Shave daily and grow a thin moustache"],
          answer: 3,
          explain: "He planned to **shave every day and grow a thin moustache**."
        },
        {
          q: "Whom did the narrator dream of marrying?",
          options: ["A rich, fat lady doctor", "A famous actress", "A schoolteacher", "His neighbour's daughter"],
          answer: 0,
          explain: "He day-dreamed of marrying a **rich, fat lady doctor**."
        },
        {
          q: "What did the snake do that gave the narrator a chance to escape?",
          options: ["It went to sleep", "It bit the mirror", "It turned and moved towards the mirror", "It fell to the floor and died"],
          answer: 2,
          explain: "As the snake turned to the **mirror**, the narrator slipped away."
        },
        {
          q: "Which quality of the narrator does the story mainly make fun of?",
          options: ["His generosity", "His vanity", "His honesty", "His laziness"],
          answer: 1,
          explain: "The story gently mocks the narrator's **vanity** about his looks."
        }
      ]
    },

    {
      id: "my-childhood",
      title: "My Childhood",
      section: "Literature – Beehive",
      summary: "An extract from Dr A.P.J. Abdul Kalam's autobiography ‘Wings of Fire’ about his childhood in Rameswaram, his family, friends and teachers, and early lessons in communal harmony.",
      notes: [
        {
          heading: "Family and early life",
          points: [
            "Kalam was born in **Rameswaram** (then in Madras State, now Tamil Nadu) into a middle-class Tamil family.",
            "His father **Jainulabdeen** had little formal education or wealth but great wisdom and generosity; his mother **Ashiamma** was his ideal helpmate.",
            "They lived in an ancestral house of limestone and brick. His childhood was simple but secure, both materially and emotionally.",
            "He inherited **honesty and self-discipline** from his father and **faith in goodness and deep kindness** from his mother."
          ]
        },
        {
          heading: "First earnings",
          points: [
            "When the **Second World War** broke out in 1939, Kalam was eight. A sudden demand for **tamarind seeds** let him earn one anna a day by selling them to a shop on Mosque Street.",
            "His cousin **Samsuddin** distributed newspapers. When trains stopped halting at Rameswaram, the bundles were thrown from the moving train; Kalam caught them and earned his **first wages**."
          ]
        },
        {
          heading: "Friends and teachers",
          points: [
            "His close friends **Ramanadha Sastry, Aravindan and Sivaprakasan** came from orthodox Hindu Brahmin families, yet the boys never felt any difference.",
            "In Class 5, a **new teacher** sent Kalam, who wore a cap that marked him as a Muslim, to the back bench because he sat beside Ramanadha Sastry, the son of the temple's high priest.",
            "**Pakshi Lakshmana Sastry**, the high priest, scolded the teacher for spreading communal intolerance and told him to apologise or leave. The teacher apologised and changed.",
            "Science teacher **Sivasubramania Iyer** invited Kalam home for a meal. When his conservative wife refused to serve him in her kitchen, Iyer served him himself. The next week she served Kalam with her own hands."
          ]
        },
        {
          heading: "Leaving home",
          points: [
            "After the war, Kalam asked his father's permission to study at **Ramanathapuram**, the district headquarters.",
            "His father agreed, saying children must go away to grow, and quoted **Khalil Gibran** to his hesitant mother."
          ]
        },
        {
          heading: "Themes and message",
          points: [
            "**Secularism and communal harmony:** friendships and families across religions.",
            "**Breaking social barriers:** Lakshmana Sastry and Sivasubramania Iyer stood up against discrimination.",
            "**Role of parents and teachers** in shaping values.",
            "Message: a good society is built when people respect one another and refuse to discriminate on the basis of religion or caste."
          ]
        }
      ],
      formulas: [
        "Author: Dr A.P.J. Abdul Kalam",
        "Source: his autobiography ‘Wings of Fire’",
        "Setting: Rameswaram, Tamil Nadu",
        "Friends: Ramanadha Sastry, Aravindan, Sivaprakasan"
      ],
      terms: [
        { term: "Wings of Fire", meaning: "Dr Kalam's autobiography, from which ‘My Childhood’ is taken." },
        { term: "Jainulabdeen", meaning: "Kalam's father, a generous and wise man with little formal education." },
        { term: "Samsuddin", meaning: "Kalam's cousin, who distributed newspapers and gave him his first job." },
        { term: "Pakshi Lakshmana Sastry", meaning: "High priest of the Rameswaram temple and father of Kalam's friend Ramanadha Sastry; he scolded the new teacher." },
        { term: "Sivasubramania Iyer", meaning: "Kalam's science teacher, who worked to break social barriers and invited Kalam home for a meal." },
        { term: "Secularism", meaning: "Equal respect for all religions." }
      ],
      qa: [
        {
          q: "How did Kalam earn his first wages?",
          a: "During the Second World War, the train stopped halting at Rameswaram, so newspaper bundles were thrown out of the moving train. Kalam's cousin **Samsuddin**, who distributed newspapers, employed Kalam to **catch the bundles**, which earned him his first wages."
        },
        {
          q: "How did Lakshmana Sastry react to the new teacher's behaviour?",
          a: "He called the teacher and told him he must not **spread the poison of social inequality and communal intolerance** in the minds of innocent children. He asked him either to apologise or to leave the school and the island. The teacher regretted his behaviour and reformed."
        },
        {
          q: "What does the episode with Sivasubramania Iyer's wife show?",
          a: "It shows that Iyer was determined to **break social barriers**. When his wife refused to serve a Muslim boy in her kitchen, he calmly served Kalam himself. His patience changed her: the next week she served Kalam with her own hands."
        }
      ],
      quiz: [
        {
          q: "Where was A.P.J. Abdul Kalam born?",
          options: ["Madurai", "Rameswaram", "Ramanathapuram", "Chennai"],
          answer: 1,
          explain: "Kalam was born in **Rameswaram**, then in Madras State."
        },
        {
          q: "What did Kalam collect and sell to a shop on Mosque Street?",
          options: ["Newspapers", "Coconuts", "Tamarind seeds", "Fish"],
          answer: 2,
          explain: "During the war there was a sudden demand for **tamarind seeds**, which earned him one anna a day."
        },
        {
          q: "Why did the new teacher send Kalam to the back bench?",
          options: ["He was talking in class", "He had not done his homework", "He was too tall", "He was a Muslim boy sitting next to the priest's son"],
          answer: 3,
          explain: "The teacher could not accept a **Muslim boy** sitting beside the Hindu priest's son."
        },
        {
          q: "Who served Kalam food when Sivasubramania Iyer's wife refused?",
          options: ["Sivasubramania Iyer himself", "Kalam's mother", "Lakshmana Sastry", "Samsuddin"],
          answer: 0,
          explain: "**Iyer himself** served Kalam and sat beside him to eat."
        },
        {
          q: "Which qualities did Kalam inherit from his father?",
          options: ["Faith in goodness and kindness", "Honesty and self-discipline", "Love of music and art", "Interest in trade"],
          answer: 1,
          explain: "From his father he inherited **honesty and self-discipline**; from his mother, faith in goodness and deep kindness."
        },
        {
          q: "Whom did Kalam's father quote to persuade his mother to let Kalam go to Ramanathapuram?",
          options: ["Mahatma Gandhi", "Rabindranath Tagore", "Khalil Gibran", "Swami Vivekananda"],
          answer: 2,
          explain: "He quoted **Khalil Gibran** on how children must be allowed to grow on their own."
        }
      ]
    },

    {
      id: "no-men-are-foreign",
      title: "No Men Are Foreign",
      section: "Literature – Beehive",
      summary: "James Kirkup's poem reminding us that all human beings are alike, so hating and fighting other nations harms humanity and the earth itself.",
      notes: [
        {
          heading: "Summary",
          points: [
            "The poet asks us to remember that **no people are strange and no country is foreign**.",
            "Beneath every **uniform** is a body that breathes just like ours, and others walk on the same earth in which we shall all be buried.",
            "They too know sun, air and water, are fed by **peaceful harvests** and starve in the long winter of **war**. Their hands work like ours, their eyes wake and sleep like ours, and they can be won over by love.",
            "Whenever we are told to **hate** our brothers, we actually rob, betray and condemn **ourselves**.",
            "When we take up **arms** against one another, we pollute the earth and the innocent air that belongs to all of us."
          ]
        },
        {
          heading: "Themes and message",
          points: [
            "**Universal brotherhood:** all humans share the same body, needs, feelings and earth.",
            "**Anti-war:** war brings hunger and destroys nature; hatred hurts the hater too.",
            "**Artificial divisions:** uniforms and borders separate people who are basically the same.",
            "Message: reject hatred between nations; love and understanding can unite humanity."
          ]
        },
        {
          heading: "Poetic devices",
          points: [
            "**Repetition:** the word ‘Remember’ is repeated to stress the message.",
            "**Metaphor:** ‘war's long winter’ compares war to a harsh winter that brings starvation.",
            "**Symbolism:** ‘uniforms’ stand for soldiers and the differences between nations.",
            "**Imagery:** ‘hells of fire and dust’ pictures the destruction caused by war.",
            "**Free verse:** the poem has no regular rhyme scheme."
          ]
        },
        {
          heading: "About the poet",
          points: [
            "**James Kirkup** (1918–2009) was a British poet who lived and taught in several countries, including Japan.",
            "The poem's title itself states its main idea: no human being is truly foreign to another."
          ]
        }
      ],
      formulas: [
        "Poet: James Kirkup",
        "Central idea: universal brotherhood; all humans are alike",
        "Key metaphor: war's long winter",
        "Repeated word: Remember"
      ],
      terms: [
        { term: "Foreign", meaning: "Belonging to another country; the poet says no one is truly foreign." },
        { term: "Dispossess", meaning: "To take away someone's property or rights; by hating others, we rob ourselves." },
        { term: "Defile", meaning: "To make dirty or impure; war defiles the earth." },
        { term: "Outrage", meaning: "To violate or cause great harm; war's fire and dust harm the pure air." },
        { term: "Uniforms", meaning: "A symbol of soldiers and of the differences that divide nations." }
      ],
      qa: [
        {
          q: "What does the poet say lies beneath all uniforms?",
          a: "He says that beneath the uniforms of soldiers of every country there is a **human body that breathes just like ours**. Uniforms create outward differences, but inside, all human beings are the same."
        },
        {
          q: "How does war affect the earth and the air, according to the poet?",
          a: "When we take up arms against each other, we **defile the earth**, which belongs to all of us. The fire and dust of war **pollute the pure air** that is everywhere our own. So war harms nature as well as people."
        },
        {
          q: "Why does the poet say that hating others means betraying ourselves?",
          a: "Since all humans are alike and share one earth, hating another person is like **hating ourselves**. When we are told to hate our brothers, we end up dispossessing, betraying and condemning our own humanity."
        }
      ],
      quiz: [
        {
          q: "Who wrote ‘No Men Are Foreign’?",
          options: ["Robert Frost", "James Kirkup", "Subramania Bharati", "W.B. Yeats"],
          answer: 1,
          explain: "The poem is by the British poet **James Kirkup**."
        },
        {
          q: "What do ‘uniforms’ symbolise in the poem?",
          options: ["School discipline", "Fashion", "Soldiers and the differences between nations", "Workers in factories"],
          answer: 2,
          explain: "Uniforms stand for **soldiers** and the outward differences that divide countries."
        },
        {
          q: "‘War's long winter’ is an example of:",
          options: ["metaphor", "simile", "onomatopoeia", "rhyme"],
          answer: 0,
          explain: "War is compared to a harsh winter **without** ‘like’ or ‘as’, so it is a **metaphor**."
        },
        {
          q: "According to the poet, when we hate our brothers, we:",
          options: ["become stronger", "betray and condemn ourselves", "protect our country", "win the war"],
          answer: 1,
          explain: "Hating others means we **dispossess, betray and condemn ourselves**."
        },
        {
          q: "What is the central message of the poem?",
          options: ["Every country should have a strong army", "Foreign lands are dangerous", "Nature is more important than people", "All humans are alike, so we should not hate or fight one another"],
          answer: 3,
          explain: "The poem promotes **universal brotherhood** and rejects hatred and war."
        },
        {
          q: "Which word does the poet repeat to stress his message?",
          options: ["Hate", "Fire", "Remember", "Winter"],
          answer: 2,
          explain: "The repeated **‘Remember’** urges readers to keep the idea of shared humanity in mind."
        }
      ]
    }
  ]
});
