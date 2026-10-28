// Class 7 English: Grammar and Writing Skills.
// Format: see CONTENT_GUIDE.md. All examples and model answers are original.
StudyData.add(7, "english", {
  // What this content follows. match: "textbook" | "older-book" | "topic". Set reviewed to a date once a teacher has checked it.
  syllabus: {board: "CBSE", match: "topic", books: [], note: "Grammar and writing skills, arranged by topic. Textbook lessons are not included.", reviewed: false},
  chapters: [
    // ───────────────────────────── GRAMMAR ─────────────────────────────
    {
      id: "adverbs",
      title: "Adverbs",
      section: "Grammar",
      summary: "An adverb tells us more about a verb, an adjective or another adverb. This chapter covers the kinds of adverbs, how to form them from adjectives, and where to place them in a sentence.",
      notes: [
        {
          heading: "What is an adverb?",
          points: [
            "An **adverb** is a word that describes a **verb**, an **adjective** or another **adverb**.",
            "Meera sang **sweetly**. (tells how she sang, so it describes the verb “sang”)",
            "The tea is **very** hot. (describes the adjective “hot”)",
            "Riya ran **extremely** fast. (describes the adverb “fast”)"
          ]
        },
        {
          heading: "Kinds of adverbs",
          points: [
            "**Adverb of manner** tells how something is done: slowly, carefully, happily, well.",
            "**Adverb of place** tells where: here, there, outside, upstairs, nearby.",
            "**Adverb of time** tells when: today, yesterday, soon, now, early.",
            "**Adverb of frequency** tells how often: always, often, sometimes, never, twice.",
            "**Adverb of degree** tells how much: very, quite, too, enough, almost."
          ]
        },
        {
          heading: "Making adverbs from adjectives",
          points: [
            "Most adjectives become adverbs by adding **-ly**: quick → quickly, bright → brightly, sad → sadly.",
            "If the adjective ends in **y**, change it to **i** and add -ly: happy → happily, easy → easily.",
            "If it ends in **-le**, drop the **e** and add -ly: gentle → gently, simple → simply.",
            "Some words do not change: fast, hard, late, early. Note that “hardly” means “almost not” and is different from “hard”."
          ]
        },
        {
          heading: "Where to place adverbs",
          points: [
            "Adverbs of **frequency** usually come **before** the main verb: She **always** wakes up early. But after the verb “be”: He is **often** late.",
            "Adverbs of **manner** usually come after the verb or its object: She writes **neatly**. He opened the box **carefully**.",
            "Adverbs of **place** and **time** usually come at the end of a sentence: We will meet **tomorrow** at the bus stop.",
            "“Enough” comes **after** an adjective (good enough) but **before** a noun (enough time)."
          ]
        }
      ],
      formulas: [
        "Adjective + ly → adverb (slow → slowly)",
        "Consonant + y → i + ly (happy → happily)",
        "Adjective + le → drop e + ly (gentle → gently)",
        "Subject + adverb of frequency + main verb (He always reads.)",
        "Too + adjective + to + verb (too cold to swim)"
      ],
      terms: [
        { term: "Adverb", meaning: "A word that describes a verb, an adjective or another adverb, e.g. “She walked **slowly**.”" },
        { term: "Adverb of manner", meaning: "An adverb that tells how something happens, e.g. carefully, loudly." },
        { term: "Adverb of frequency", meaning: "An adverb that tells how often, e.g. always, sometimes, never." },
        { term: "Adverb of degree", meaning: "An adverb that tells how much, e.g. very, quite, too." },
        { term: "Adjective", meaning: "A word that describes a noun, e.g. “a **kind** teacher”." }
      ],
      examples: [
        {
          q: "Change these adjectives into adverbs: happy, gentle, quick, true.",
          steps: [
            "happy ends in y, so change y to i and add -ly: happily.",
            "gentle ends in -le, so drop the e and add -ly: gently.",
            "quick takes -ly directly: quickly.",
            "true ends in -e, so drop the e and add -ly: truly."
          ],
          answer: "happily, gently, quickly, truly"
        },
        {
          q: "Identify the adverb and its kind in this sentence: “Lakshmi always reaches school early.”",
          steps: [
            "The word “always” tells how often Lakshmi reaches school, so it is an adverb of frequency.",
            "The word “early” tells when she reaches school, so it is an adverb of time.",
            "“Always” comes before the main verb “reaches”, which is the correct place for frequency adverbs."
          ],
          answer: "always (frequency) and early (time)"
        }
      ],
      qa: [
        {
          q: "What is an adverb? Give one example of each: manner, place and time.",
          a: "An **adverb** describes a verb, an adjective or another adverb. Examples: **carefully** (manner) as in “She wrote carefully”, **outside** (place) as in “The dog is outside”, and **yesterday** (time) as in “We visited Agra yesterday”."
        },
        {
          q: "Where do we usually place an adverb of frequency such as “always”?",
          a: "We usually place it **before the main verb**, as in “Ankit always brushes his teeth.” After the verb “be”, we place it after the verb: “He is always punctual.”"
        }
      ],
      quiz: [
        {
          q: "Which word is an adverb of place?",
          options: ["Happily", "Tall", "There", "Quickly"],
          answer: 2,
          explain: "**There** tells us where something is. Happily and quickly are adverbs of manner, and tall is an adjective."
        },
        {
          q: "Ravi writes ___ in his notebook.",
          options: ["neat", "neatly", "neatness", "neater"],
          answer: 1,
          explain: "We need an adverb to describe the verb “writes”. The adverb form of “neat” is **neatly**."
        },
        {
          q: "Which sentence uses an adverb of frequency?",
          options: ["Sameer always finishes his homework on time.", "Sameer is a homework lover.", "Sameer’s homework is long.", "Sameer’s homework is in his bag."],
          answer: 0,
          explain: "**Always** tells how often Sameer finishes his homework. The other sentences have nouns or adjectives, not frequency adverbs."
        },
        {
          q: "Ritu runs ___ than her brother.",
          options: ["fastly", "more fast", "fastest", "faster"],
          answer: 3,
          explain: "“Fast” does not change into “fastly”. For a comparison with “than”, we use the comparative form **faster**."
        },
        {
          q: "The tea is ___ hot to drink, so please wait a minute.",
          options: ["two", "to", "too", "tow"],
          answer: 2,
          explain: "**Too** means “more than needed”, as in “too hot to drink”. “Two” is a number and “to” is a preposition."
        },
        {
          q: "Which sentence is correct?",
          options: ["He is always late to school.", "He comes always late.", "He comes late always.", "He late always comes."],
          answer: 0,
          explain: "A frequency adverb such as “always” comes before the main verb, or after “be”. Here, “is” is the verb “be”, so “always” comes after it."
        }
      ]
    },

    {
      id: "perfect-tenses",
      title: "Perfect Tenses",
      section: "Grammar",
      summary: "Perfect tenses link one time to another: a past action with the present, or an action that happened before another past or future time. This chapter covers the present, past and future perfect tenses.",
      notes: [
        {
          heading: "What is a perfect tense?",
          points: [
            "A **perfect tense** is formed with **have**, **has**, **had** or **will have** and the **past participle** (third form) of the verb.",
            "The past participle of regular verbs ends in **-ed**: work → worked, finish → finished.",
            "Many verbs are irregular: write → written, eat → eaten, go → gone, see → seen, take → taken."
          ]
        },
        {
          heading: "Present perfect",
          points: [
            "Form: **has/have + past participle**. Use “has” for he, she, it and singular nouns, and “have” for I, we, you and they.",
            "Use it for an action that happened at an unknown or unimportant time: “I have finished my homework.”",
            "Use it with **already**, **yet**, **just**, **ever** and **never**: “Have you ever visited Shimla?” “We have not eaten yet.”",
            "Use it with **since** (a point in time) and **for** (a period): “Priya has lived in Pune since 2019.” “Dev has played the veena for five years.”"
          ]
        },
        {
          heading: "Past perfect",
          points: [
            "Form: **had + past participle** (the same for all persons).",
            "Use it for an action that finished **before another action in the past**: “When we reached the station, the train **had left**.”",
            "The earlier action takes the past perfect, and the later action takes the simple past: “She **had cooked** dinner before her father **came** home.”"
          ]
        },
        {
          heading: "Future perfect",
          points: [
            "Form: **will have + past participle**.",
            "Use it for an action that will be finished **by a certain time in the future**: “By next June, I **will have finished** my exams.”",
            "The words **by** and **by the time** often signal the future perfect."
          ]
        }
      ],
      formulas: [
        "Present perfect: has/have + past participle (She has written a letter.)",
        "Past perfect: had + past participle (They had left before we arrived.)",
        "Future perfect: will have + past participle (By Monday, I will have read the book.)",
        "Use already, yet, just, ever, never with the present perfect",
        "Use since (point in time) and for (period of time) with the present perfect"
      ],
      terms: [
        { term: "Past participle", meaning: "The third form of a verb, used after have, has or had, e.g. written, played, gone." },
        { term: "Present perfect", meaning: "A tense that links a past action with the present, e.g. “I have seen the Taj Mahal.”" },
        { term: "Past perfect", meaning: "A tense for an action completed before another past action, e.g. “I had eaten before the guests came.”" },
        { term: "Future perfect", meaning: "A tense for an action that will be completed by a future time, e.g. “She will have reached by noon.”" },
        { term: "Irregular verb", meaning: "A verb whose past tense and past participle do not end in -ed, e.g. go → went → gone." }
      ],
      examples: [
        {
          q: "Complete the sentence with the correct perfect tense: “Our teacher ___ (already / give) us the test papers when the bell rang.”",
          steps: [
            "The bell rang in the past, and the giving happened before it, so use the past perfect.",
            "Past perfect = had + past participle.",
            "The past participle of “give” is “given”."
          ],
          answer: "Our teacher had already given us the test papers when the bell rang."
        },
        {
          q: "Correct this sentence: “Kiran has went to Jaipur for the book fair.”",
          steps: [
            "Present perfect = has/have + past participle.",
            "The past participle of “go” is “gone”, not “went”.",
            "Corrected sentence: “Kiran has gone to Jaipur for the book fair.”"
          ],
          answer: "Kiran has gone to Jaipur for the book fair."
        }
      ],
      qa: [
        {
          q: "When do we use the present perfect tense? Give an example.",
          a: "We use the present perfect for a past action that is connected to the present, or that happened at an unknown time. Example: “I have finished my homework.” It shows that the work is done now."
        },
        {
          q: "What is the difference between “since” and “for” with the present perfect?",
          a: "**Since** is used with a point in time, such as since Monday or since 2020. **For** is used with a period of time, such as for three days or for two hours. Example: “We have lived here since 2018” and “We have lived here for six years.”"
        }
      ],
      quiz: [
        {
          q: "Choose the correct form: I ___ my homework already.",
          options: ["finished", "have finished", "has finished", "am finishing"],
          answer: 1,
          explain: "With “I”, use **have** + past participle: “I have finished”. The simple past “finished” is not used with “already” in this way."
        },
        {
          q: "By the time the train reached Delhi, the passengers ___ their lunch.",
          options: ["had eaten", "have eaten", "ate", "eat"],
          answer: 0,
          explain: "The eating was finished before the train reached Delhi, which is a past event. So we use the **past perfect**: had eaten."
        },
        {
          q: "Priya ___ to Kashmir, and she loved the snow there.",
          options: ["has be", "have been", "had went", "has been"],
          answer: 3,
          explain: "Priya is one person, so we use “has”. The past participle of “be” is **been**: has been."
        },
        {
          q: "Which is the past participle of “write”?",
          options: ["wrote", "writen", "writing", "written"],
          answer: 3,
          explain: "“Write” is irregular. Its past participle is **written**, as in “She has written a letter.”"
        },
        {
          q: "By next June, I ___ my school exams.",
          options: ["will finish", "will have finished", "have finished", "would finish"],
          answer: 1,
          explain: "An action that will be complete by a future time uses the **future perfect**: will have finished."
        },
        {
          q: "Which sentence is correct?",
          options: ["They have gone to the fair.", "They has gone to the fair.", "They have went to the fair.", "They gone to the fair."],
          answer: 0,
          explain: "With “they”, use “have”. The past participle of “go” is **gone**, not “went”."
        }
      ]
    },

    {
      id: "modals",
      title: "Modals",
      section: "Grammar",
      summary: "Modal verbs such as can, may, must and should show ability, permission, possibility, obligation and advice. This chapter explains what each modal means and how to use it correctly.",
      notes: [
        {
          heading: "What is a modal verb?",
          points: [
            "A **modal verb** is a helping verb that adds meaning to the main verb, such as ability, permission or advice.",
            "Common modals: can, could, may, might, must, should, will, would, shall, ought to.",
            "A modal is followed by the **base form** of the verb (without “to”): She **can swim**. Never say “She can to swim” or “She cans swim”."
          ]
        },
        {
          heading: "Ability and permission",
          points: [
            "**Can** shows present ability or permission: “I can read Hindi.” “You can borrow my pencil.”",
            "**Could** shows past ability: “When I was six, I could ride a bicycle.”",
            "**May** asks for or gives permission in a polite way: “May I come in, Ma’am?”",
            "Use “can” in everyday talk and “may” in polite or formal requests."
          ]
        },
        {
          heading: "Possibility",
          points: [
            "**May** and **might** show that something is possible: “It may rain this evening.” “The bus might be late.”",
            "**Might** shows a smaller chance than “may”.",
            "**Must** shows that we feel sure: “The shop is closed; it must be a holiday.”",
            "**Can’t** shows that something is very unlikely: “He can’t be at home; his shoes are gone.”"
          ]
        },
        {
          heading: "Obligation and advice",
          points: [
            "**Must** shows a strong rule or duty: “We must wear our school uniform.”",
            "**Must not** (mustn’t) shows that something is forbidden: “You must not run in the corridor.”",
            "**Should** gives advice or a suggestion: “You should drink more water in summer.”",
            "**Would** is used for polite requests and offers: “Would you like some tea?”"
          ]
        }
      ],
      formulas: [
        "Modal + base verb: can/may/must/should + read (She should read.)",
        "Can / could: ability (could = past ability)",
        "May / might: possibility or polite permission",
        "Must: strong duty or certainty; must not: prohibition",
        "Should: advice (You should rest.)"
      ],
      terms: [
        { term: "Modal verb", meaning: "A helping verb such as can, may or should that shows ability, permission, possibility or advice." },
        { term: "Base form", meaning: "The plain form of a verb without “to”, e.g. go, read, play." },
        { term: "Permission", meaning: "Being allowed to do something, e.g. “You may leave the class now.”" },
        { term: "Obligation", meaning: "A duty or rule that must be followed, e.g. “Students must wear shoes.”" },
        { term: "Prohibition", meaning: "A rule that forbids an action, e.g. “You must not litter.”" }
      ],
      examples: [
        {
          q: "Choose the correct modal for each sentence: (a) Dadi said, “You ___ take a nap after lunch.” (advice) (b) I ___ swim when I was four. (past ability)",
          steps: [
            "(a) A suggestion for good health is advice, so use “should”.",
            "(b) A skill from the past is past ability, so use “could”.",
            "Check that each modal is followed by the base verb: “should take”, “could swim”."
          ],
          answer: "(a) should take (b) could swim"
        },
        {
          q: "Rewrite the sentence to show possibility: “Perhaps Anita is at the library.”",
          steps: [
            "“Perhaps” shows a guess, so we use a modal of possibility.",
            "“May” or “might” fits best, and the main verb stays in the base form.",
            "Sentence: “Anita may be at the library.”"
          ],
          answer: "Anita may be at the library. (or: Anita might be at the library.)"
        }
      ],
      qa: [
        {
          q: "What is the difference between “can” and “could”?",
          a: "**Can** shows present ability or permission, as in “I can cook dal.” **Could** shows past ability, as in “I could cook dal when I was ten.” “Could” is also used for very polite requests: “Could you help me?”"
        },
        {
          q: "Why do we say “must not” and not “must no”?",
          a: "“Not” is the word that makes a modal negative. “Must not” forbids an action, as in “You must not talk during the exam.” “No” is not used after a modal like this."
        }
      ],
      quiz: [
        {
          q: "You ___ wear a helmet while riding a bicycle. It is the rule.",
          options: ["must", "might", "can", "would"],
          answer: 0,
          explain: "A rule that must be followed is shown by **must**. “Might” shows possibility, not a rule."
        },
        {
          q: "When I was five, I ___ swim across the small pool.",
          options: ["can", "could", "must", "might"],
          answer: 1,
          explain: "We talk about ability in the past, so use **could**. “Can” is for present ability."
        },
        {
          q: "It looks cloudy. It ___ rain this evening.",
          options: ["must", "can", "might", "should"],
          answer: 2,
          explain: "The speaker is not sure, so “might” (a possibility) fits. “Must” would mean the speaker is certain."
        },
        {
          q: "You look tired. You ___ go to bed early tonight.",
          options: ["might", "could not", "would", "should"],
          answer: 3,
          explain: "This is advice, so use **should**. “Might” and “would” do not give advice here."
        },
        {
          q: "Mother said, “You ___ go out and play after you finish your homework.”",
          options: ["may", "might", "must", "would"],
          answer: 0,
          explain: "Mother is giving permission, and **may** is the polite word for permission."
        },
        {
          q: "Which sentence is correct?",
          options: ["She can swims very fast.", "She can swim very fast.", "She can to swim very fast.", "She cans swim very fast."],
          answer: 1,
          explain: "A modal is followed by the **base form** of the verb, with no “-s” and no “to”: can swim."
        }
      ]
    },

    {
      id: "conjunctions",
      title: "Conjunctions",
      section: "Grammar",
      summary: "Conjunctions join words, phrases and sentences. This chapter explains coordinating and subordinating conjunctions and how to use them to make longer, smoother sentences.",
      notes: [
        {
          heading: "What is a conjunction?",
          points: [
            "A **conjunction** is a joining word. It connects two words, two phrases or two clauses.",
            "Example: Rohan and Anil are cousins. (joins two nouns)",
            "Example: I wanted to go, **but** it was raining. (joins two sentence parts)"
          ]
        },
        {
          heading: "Coordinating conjunctions",
          points: [
            "Coordinating conjunctions join two parts of equal importance: **and**, **but**, **or**, **so**, **for**, **yet**, **nor**.",
            "**And** adds information: Priya sings, **and** her sister dances.",
            "**But** shows a contrast: The road was wet, **but** we walked to school.",
            "**Or** gives a choice: Would you like tea **or** milk? **So** shows a result: It was hot, **so** we drank lassi."
          ]
        },
        {
          heading: "Subordinating conjunctions",
          points: [
            "A subordinating conjunction joins a **main clause** to a **dependent clause** that cannot stand alone.",
            "Common ones: because, although, when, while, if, since, before, after, unless.",
            "**Because** gives a reason: We stayed home **because** it was raining.",
            "**Although** shows a contrast: **Although** he was tired, Sameer finished the race.",
            "**If** and **unless** show a condition: You will get wet **if** you go out now."
          ]
        },
        {
          heading: "Using conjunctions correctly",
          points: [
            "Do not use **but** and **although** together in one sentence: write “Although it was late, we went for a walk.” not “Although it was late, but we went.”",
            "Do not use **because** and **so** together for the same reason: write “He was late because the bus was delayed.”",
            "When a dependent clause comes first, put a **comma** after it: **When** the bell rang, the students ran out.",
            "When the main clause comes first, usually no comma is needed: The students ran out **when** the bell rang."
          ]
        }
      ],
      formulas: [
        "Coordinating: and, but, or, so, yet, for, nor (join equal parts)",
        "Subordinating: because, although, when, if, unless (join a main and a dependent clause)",
        "Although + clause, main clause (Although it rained, we played.)",
        "Main clause + because + reason (We stayed in because it rained.)"
      ],
      terms: [
        { term: "Conjunction", meaning: "A word that joins words, phrases or clauses, e.g. and, but, because." },
        { term: "Coordinating conjunction", meaning: "A conjunction that joins two equal parts of a sentence, e.g. “Tea or coffee?”" },
        { term: "Subordinating conjunction", meaning: "A conjunction that begins a dependent clause, e.g. because, although, when." },
        { term: "Clause", meaning: "A group of words with a subject and a verb, e.g. “the sun rose”." },
        { term: "Dependent clause", meaning: "A clause that cannot make complete sense alone, e.g. “because it was late”." }
      ],
      examples: [
        {
          q: "Join these two sentences with a suitable conjunction: “Meena studied hard. She passed the test.”",
          steps: [
            "The second sentence is a result of the first, so use a result word: “so”.",
            "Check the sense: “Meena studied hard, so she passed the test.”",
            "“Because” would reverse the order and would not fit well here."
          ],
          answer: "Meena studied hard, so she passed the test."
        },
        {
          q: "Combine: “It was hot. We went to the lake.” using “although”.",
          steps: [
            "“Although” shows a contrast or unexpected result, so it is a subordinating conjunction.",
            "Put “Although it was hot” as the dependent part, and the main clause after it.",
            "Use a comma after the dependent clause, and do not add “but”."
          ],
          answer: "Although it was hot, we went to the lake. (The sense here is that the heat did not stop us.)"
        }
      ],
      qa: [
        {
          q: "What is the difference between coordinating and subordinating conjunctions?",
          a: "**Coordinating** conjunctions (and, but, or, so) join two parts of equal importance. **Subordinating** conjunctions (because, although, when, if) join a main clause to a dependent clause that depends on the main clause for its meaning."
        },
        {
          q: "Name two conjunctions that show a condition.",
          a: "**If** and **unless** show a condition. Example: “We will go to the park if it stops raining.” “You will fail unless you study.”"
        }
      ],
      quiz: [
        {
          q: "I wanted to play in the park, ___ it started raining.",
          options: ["because", "but", "so", "and"],
          answer: 1,
          explain: "**But** shows a contrast between wanting to play and the rain stopping us."
        },
        {
          q: "We stayed indoors ___ it was very hot outside.",
          options: ["because", "and", "or", "but"],
          answer: 0,
          explain: "**Because** gives the reason for staying indoors."
        },
        {
          q: "You can take the bus ___ the train to reach the market.",
          options: ["so", "and", "or", "although"],
          answer: 2,
          explain: "**Or** gives a choice between two options."
        },
        {
          q: "___ Sunita was tired, she finished her project.",
          options: ["Because", "And", "Or", "Although"],
          answer: 3,
          explain: "**Although** shows a contrast: even though she was tired, she finished. “Because” would give a wrong sense here."
        },
        {
          q: "Eat your lunch ___ you will feel hungry in the evening.",
          options: ["or", "and", "but", "so"],
          answer: 0,
          explain: "**Or** here means “otherwise”: Eat your lunch, or you will feel hungry. The other words do not fit the meaning."
        },
        {
          q: "Which sentence is correct?",
          options: ["Although it was late, but we went for a walk.", "It was late although but we went for a walk.", "Although it was late, we went for a walk.", "Although it was late and we went for a walk."],
          answer: 2,
          explain: "“Although” should not be used with “but” in the same sentence. The correct form is “Although it was late, we went for a walk.”"
        }
      ]
    },

    {
      id: "subject-verb-agreement",
      title: "Subject–Verb Agreement",
      section: "Grammar",
      summary: "The verb must agree with its subject in number: a singular subject takes a singular verb, and a plural subject takes a plural verb. This chapter covers the common rules and tricky cases.",
      notes: [
        {
          heading: "The basic rule",
          points: [
            "A **singular subject** (one person or thing) takes a **singular verb**: The boy **runs** fast.",
            "A **plural subject** (more than one) takes a **plural verb**: The boys **run** fast.",
            "The subject and verb may be separated by other words, but they still must agree: The box of toys **is** on the table."
          ]
        },
        {
          heading: "Using “is”, “am” and “are”",
          points: [
            "**I** takes **am**. **He, she, it** and singular nouns take **is**. **We, you, they** and plural nouns take **are**.",
            "In the past: **was** for I, he, she, it and singular nouns; **were** for we, you, they and plural nouns.",
            "Use “has” with he, she, it and singular nouns, and “have” with I, we, you and they."
          ]
        },
        {
          heading: "Subjects joined by “and”, “or” and “nor”",
          points: [
            "Two subjects joined by **and** take a plural verb: Ravi **and** Meena **are** going to Agra.",
            "With **or** or **nor**, the verb agrees with the nearer subject: Either the teacher or the **students** **have** the answer.",
            "Phrases such as “along with”, “as well as” and “together with” do not change the number: Ravi, along with his friends, **is** coming."
          ]
        },
        {
          heading: "Tricky subjects",
          points: [
            "Words such as **everyone, everybody, somebody, nobody, each** and **every** are singular: Everyone **likes** the new song.",
            "“The number of…” takes a singular verb, but “A number of…” takes a plural verb: The number of students **is** forty. A number of students **are** absent.",
            "“There is” and “there are” agree with the noun that follows: There **is** a cup of tea. There **are** two mangoes.",
            "Subjects such as **news, mathematics** and **physics** are singular: Mathematics **is** my favourite subject."
          ]
        }
      ],
      formulas: [
        "Singular subject + singular verb (She plays.)",
        "Plural subject + plural verb (They play.)",
        "Subject 1 and Subject 2 → plural verb (Ram and Sita are here.)",
        "Either/or, or/nor → verb agrees with the nearer subject",
        "Everyone / each / every / nobody → singular verb"
      ],
      terms: [
        { term: "Subject", meaning: "The person or thing that does the action in a sentence, e.g. “The **dog** barked.”" },
        { term: "Verb", meaning: "The word that shows an action or state, e.g. run, is, have." },
        { term: "Agreement", meaning: "Matching the verb to its subject in number, singular or plural." },
        { term: "Singular", meaning: "Referring to one person or thing, e.g. a pen, she, the girl." },
        { term: "Plural", meaning: "Referring to more than one, e.g. pens, they, the girls." }
      ],
      examples: [
        {
          q: "Choose the correct verb: “Each of the boys ___ a water bottle.”",
          steps: [
            "The subject is “Each”, which is singular even though it is followed by “of the boys”.",
            "A singular subject takes a singular verb: “has”.",
            "Sentence: “Each of the boys has a water bottle.”"
          ],
          answer: "has"
        },
        {
          q: "Correct the sentence: “The players and their coach was happy after the match.”",
          steps: [
            "The subjects “players” and “coach” are joined by “and”, so they form a plural subject.",
            "A plural subject takes a plural verb: “were”.",
            "Corrected sentence: “The players and their coach were happy after the match.”"
          ],
          answer: "The players and their coach were happy after the match."
        }
      ],
      qa: [
        {
          q: "Why is “Everyone in the class likes music” correct, even though there are many students?",
          a: "“Everyone” is a singular pronoun, so it takes the singular verb “likes”. The phrase “in the class” only describes the subject and does not change its number."
        },
        {
          q: "How does the verb agree in “Either the pen or the pencils are on the desk”?",
          a: "With “either … or”, the verb agrees with the nearer subject, here “pencils”, which is plural. So the sentence should read “Either the pen or the pencils **are** on the desk.”"
        }
      ],
      quiz: [
        {
          q: "The boys ___ playing cricket in the park.",
          options: ["is", "are", "was", "be"],
          answer: 1,
          explain: "“The boys” is plural, so it takes the plural verb **are**."
        },
        {
          q: "Ravi and his sister ___ going to Agra on Sunday.",
          options: ["is", "am", "are", "was"],
          answer: 2,
          explain: "Two subjects joined by “and” take a plural verb, so **are** is correct."
        },
        {
          q: "Either the teacher or the students ___ the answer to the question.",
          options: ["has", "is", "does", "have"],
          answer: 3,
          explain: "The verb agrees with the nearer subject, “the students”, which is plural. So we use **have**."
        },
        {
          q: "Everyone in our class ___ the new song.",
          options: ["like", "likes", "liking", "are liking"],
          answer: 1,
          explain: "“Everyone” is singular, so it takes the singular verb **likes**."
        },
        {
          q: "The number of students in Class 7 ___ forty.",
          options: ["is", "are", "have been", "were"],
          answer: 0,
          explain: "“The number of” takes a singular verb, so we use **is**."
        },
        {
          q: "There ___ two mangoes and a bowl of curd on the table.",
          options: ["is", "has", "are", "be"],
          answer: 2,
          explain: "In “there is/are”, the verb agrees with the first noun after it. “Two mangoes” is plural, so we use **are**."
        }
      ]
    },

    {
      id: "direct-and-indirect-speech",
      title: "Direct and Indirect Speech",
      section: "Grammar",
      summary: "Direct speech gives the exact words a person said, inside quotation marks. Indirect (reported) speech tells what they said without quotes. This chapter covers statements and questions and the changes needed.",
      notes: [
        {
          heading: "Direct and indirect speech",
          points: [
            "**Direct speech** gives the exact words in inverted commas: Ravi said, “I am going to the library.”",
            "**Indirect speech** reports the meaning in our own words, without quotation marks: Ravi said that he was going to the library.",
            "Usually the reporting verb (said, told, asked) is in the past tense, and the words in the quotation become one step further back in time."
          ]
        },
        {
          heading: "Changes in tense",
          points: [
            "Present simple → past simple: “I play” → he **played**.",
            "Present continuous → past continuous: “I am reading” → she **was reading**.",
            "Past simple → past perfect: “We went” → they **had gone**.",
            "Will → would, can → could, may → might, shall → should: “I will come” → he **would come**."
          ]
        },
        {
          heading: "Changes in pronouns, time and place",
          points: [
            "Change the pronouns to suit the speaker: “I” → he/she, “my” → his/her, “we” → they.",
            "Time words change: now → then, today → that day, yesterday → the day before (the previous day), tomorrow → the next day, ago → before.",
            "Place and demonstratives change too: here → there, this → that, these → those.",
            "Remove the quotation marks and the comma. “That” may be used after the reporting verb: She said **that** she was tired."
          ]
        },
        {
          heading: "Reporting questions",
          points: [
            "For a yes/no question, use **asked** (or **wanted to know**) + **if** or **whether** + the statement word order (subject + verb), with no question mark: “Are you hungry?” → He asked me **if** I was hungry.",
            "For a question with a question word (what, where, when, why, how), use the question word + subject + verb: “Where do you live?” → She asked me **where** I lived.",
            "Do not use a question mark at the end of an indirect question.",
            "The tense still changes, as in statements: “Where is my bag?” → He asked where his bag was."
          ]
        }
      ],
      formulas: [
        "Said … “I am playing.” → said that he was playing",
        "Will → would; can → could; may → might; am/is/are → was/were",
        "Yesterday → the previous day; today → that day; tomorrow → the next day",
        "Yes/no question: asked + if/whether + subject + verb",
        "Wh-question: asked + question word + subject + verb"
      ],
      terms: [
        { term: "Direct speech", meaning: "The exact words spoken, written inside inverted commas." },
        { term: "Indirect speech", meaning: "A report of what was said, without the exact words or quotation marks." },
        { term: "Reporting verb", meaning: "A verb such as said, told or asked that introduces the speech." },
        { term: "Inverted commas", meaning: "The quotation marks (“ ”) that enclose direct speech." },
        { term: "Reported question", meaning: "An indirect question that uses “asked if” or a question word, without a question mark." }
      ],
      examples: [
        {
          q: "Change to indirect speech: Priya said, “I am reading a storybook now.”",
          steps: [
            "The reporting verb “said” is in the past, so the tense moves back: “am reading” → “was reading”.",
            "“I” changes to “she”, to match Priya.",
            "“Now” changes to “then”.",
            "Remove the quotation marks."
          ],
          answer: "Priya said that she was reading a storybook then."
        },
        {
          q: "Change to indirect speech: Mother asked, “Where are you going?”",
          steps: [
            "This is a wh-question, so use “asked + where + subject + verb”.",
            "“are going” becomes “was going” in reported speech.",
            "“you” changes to “I” (the person being asked) and the question mark is removed."
          ],
          answer: "Mother asked me where I was going."
        }
      ],
      qa: [
        {
          q: "What happens to the tense of the verb when we change direct speech into indirect speech?",
          a: "The tense usually moves one step back in time. For example, the present simple becomes the past simple, the present continuous becomes the past continuous, and the past simple becomes the past perfect. Modals also change: will becomes would, and can becomes could."
        },
        {
          q: "How do we report a yes/no question?",
          a: "We use **asked** (or **wanted to know**) followed by **if** or **whether**, then the subject and verb in statement order. Example: “Have you finished?” becomes “She asked me **if** I had finished.”"
        }
      ],
      quiz: [
        {
          q: "Direct: Meena said, “I am reading a story.” Indirect: Meena said that she ___ reading a story.",
          options: ["was", "is", "will be", "has been"],
          answer: 0,
          explain: "The present continuous “am reading” moves back to the past continuous: **was** reading."
        },
        {
          q: "Which is the correct indirect form of: Rohan said, “I will visit Shimla next week.”",
          options: ["He will visit Shimla next week.", "He would visit Shimla the following week.", "He visits Shimla the next week.", "He visited Shimla last week."],
          answer: 1,
          explain: "“Will” becomes “would”, “I” becomes “he”, and “next week” becomes “the following week”."
        },
        {
          q: "Sana said, “I came here yesterday.” The word “yesterday” changes to ___ in indirect speech.",
          options: ["now", "tomorrow", "today", "the previous day"],
          answer: 3,
          explain: "“Yesterday” changes to **the previous day** (or the day before) when we report the speech."
        },
        {
          q: "Mother asked, “Where are you going?” Mother asked me ___.",
          options: ["where am I going", "where I was going", "where are you going", "that where I go"],
          answer: 1,
          explain: "A wh-question is reported as question word + subject + verb, with the tense moved back: **where I was going**."
        },
        {
          q: "The teacher asked, “Did you finish your project?” The teacher asked us ___.",
          options: ["did we finish our project", "that we finished our project", "whether we had finished our project", "if we finish our project"],
          answer: 2,
          explain: "A yes/no question uses **whether** (or if), statement word order, and the past perfect “had finished”."
        },
        {
          q: "Anil said, “We are going to the fair tomorrow.” Anil said that they ___ to the fair the next day.",
          options: ["are going", "went", "come", "were going"],
          answer: 3,
          explain: "The present continuous “are going” moves back to **were going**, and “tomorrow” becomes “the next day”."
        }
      ]
    },

    // ─────────────────────────── WRITING SKILLS ───────────────────────────
    {
      id: "formal-letter",
      title: "Formal Letter",
      section: "Writing Skills",
      summary: "A formal letter is written to a person in authority or to an organisation, such as a principal, an editor or a shop manager. This chapter explains its layout, the polite language to use, and the correct closing.",
      notes: [
        {
          heading: "What is a formal letter?",
          points: [
            "A **formal letter** is written to someone we do not know well, or to someone in authority: the principal, a headmaster, a newspaper editor or a shop owner.",
            "The tone is polite, respectful and to the point.",
            "Use full sentences and complete words. Avoid contractions such as “don’t” and “I’m”, and avoid slang."
          ]
        },
        {
          heading: "Layout of a formal letter",
          points: [
            "**Sender’s address**: write your address at the top right, with the **date** below it.",
            "**Receiver’s address**: write the name and address of the person on the left side, below the date.",
            "**Subject line**: a short title that says what the letter is about, such as “Subject: Request for a day’s leave”.",
            "**Salutation**: “Dear Sir,” “Dear Madam,” or “Dear Mr. Verma,” followed by a comma."
          ]
        },
        {
          heading: "Body and closing",
          points: [
            "**Paragraph 1**: state the reason for writing clearly and politely.",
            "**Paragraph 2**: give the details, such as dates, reasons or facts.",
            "**Paragraph 3**: end with a polite request or thanks, and say you hope for a reply.",
            "**Closing**: use “Yours faithfully” with “Dear Sir/Madam”, and “Yours sincerely” with a name such as “Dear Mr. Verma”. Then sign your full name."
          ]
        },
        {
          heading: "Common types of formal letters",
          points: [
            "**Letter of request**: asking for leave, a bus pass, a book or permission for a school trip.",
            "**Letter of complaint**: pointing out a problem, such as a broken water tap in the school or a delayed bus.",
            "**Letter to the editor**: sharing an opinion on a local issue, such as keeping the park clean.",
            "**Letter of application**: asking for a job, a place or a position in an organisation."
          ]
        }
      ],
      formulas: [
        "Dear Sir/Madam … Yours faithfully, [name]",
        "Dear Mr./Ms. [name] … Yours sincerely, [name]",
        "Subject: [short title of the letter]",
        "Sender’s address (top right) → date → receiver’s address (left) → salutation → body → closing"
      ],
      terms: [
        { term: "Salutation", meaning: "The greeting at the start of a letter, such as “Dear Sir,”." },
        { term: "Subject line", meaning: "A short line, placed after the receiver’s address and before the salutation, that tells the reader what the letter is about." },
        { term: "Closing", meaning: "The polite ending before the signature, such as “Yours faithfully”." },
        { term: "Complaint", meaning: "A letter that points out a problem and asks for it to be fixed." },
        { term: "Contraction", meaning: "A short form of two words joined by an apostrophe, such as “can’t” or “won’t”. Avoid these in formal letters." }
      ],
      examples: [
        {
          q: "Write the closing and salutation for a letter to the principal of your school, Mr. Joseph Thomas.",
          steps: [
            "We know the name of the receiver, so use “Dear Mr. Thomas,”.",
            "When we use a name in the salutation, we close with “Yours sincerely,”.",
            "Then write the sender’s full name below it."
          ],
          answer: "Dear Mr. Thomas, … Yours sincerely, Aarav Sharma"
        },
        {
          q: "Rewrite this line in a formal tone: “Plz give me leave tmrw coz I am not well.”",
          steps: [
            "Replace the short words with full words: “Please give me leave tomorrow because I am not well.”",
            "Make it more respectful: “I am not feeling well, so I request a day’s leave for tomorrow.”",
            "Use full sentences and no abbreviations."
          ],
          answer: "I am not feeling well, so I request a day’s leave for tomorrow."
        }
      ],
      qa: [
        {
          q: "When do we write “Yours faithfully” and when do we write “Yours sincerely”?",
          a: "We write **Yours faithfully** when the salutation is “Dear Sir” or “Dear Madam”, because we do not know the person’s name. We write **Yours sincerely** when the salutation uses the person’s name, such as “Dear Mr. Kapoor”."
        },
        {
          q: "What should a letter of request include?",
          a: "It should include the sender’s address and date, the receiver’s address, a subject line, a polite statement of the request with reasons and details (such as dates), a polite closing and the sender’s name."
        }
      ],
      quiz: [
        {
          q: "Which closing goes with “Dear Sir or Madam”?",
          options: ["Yours sincerely", "Yours faithfully", "Your loving son", "Love"],
          answer: 1,
          explain: "When the name of the receiver is not known, we use **Yours faithfully**."
        },
        {
          q: "Which closing goes with “Dear Mr. Kapoor,”?",
          options: ["Yours sincerely", "Yours faithfully", "Your loving friend", "Bye"],
          answer: 0,
          explain: "When the salutation has the receiver’s name, we use **Yours sincerely**."
        },
        {
          q: "Where is the receiver’s address written in a formal letter?",
          options: ["At the top, right side", "At the bottom of the page", "Below the sender’s address, on the left", "Only on the envelope"],
          answer: 2,
          explain: "In a formal letter the receiver’s address goes on the **left side**, below the sender’s address and date."
        },
        {
          q: "Which tone is correct for a letter to the principal?",
          options: ["Hey, can I skip school?", "Ma’am plz give me leave, ok?", "I want leave bcoz I am bored.", "Respected Madam, I request a day’s leave for a family wedding."],
          answer: 3,
          explain: "A formal letter uses polite, full sentences. “Respected Madam, I request …” is the correct tone."
        },
        {
          q: "Which line is a suitable subject line for a letter asking for leave?",
          options: ["Hi there", "Subject: Request for a day’s leave", "Give me leave", "Dear everyone"],
          answer: 1,
          explain: "A subject line is a short title that says what the letter is about. “Request for a day’s leave” is clear and polite."
        },
        {
          q: "Why do we avoid contractions such as “can’t” in formal letters?",
          options: ["They are too short to be polite", "They are not allowed in English", "They make the tone informal", "They are used only in poems"],
          answer: 2,
          explain: "Contractions make the tone casual. Formal letters use the full forms, such as “cannot”."
        }
      ]
    },

    {
      id: "diary-entry",
      title: "Diary Entry",
      section: "Writing Skills",
      summary: "A diary entry is a personal record of the day’s events and feelings. This chapter explains the format of a diary entry, the tense to use, and how to write honestly and vividly.",
      notes: [
        {
          heading: "What is a diary entry?",
          points: [
            "A **diary** is a personal record of the events and feelings of a day, written only for the writer.",
            "A diary entry is written in the **first person** (I, we) and is usually informal and honest.",
            "Write only about things that happened, what you thought and how you felt about them."
          ]
        },
        {
          heading: "Format of a diary entry",
          points: [
            "Start with the **date** on the top line. You can also write the day and the place, such as “Sunday, Shimla”.",
            "No address, no salutation and no closing are needed. You may begin with “Dear Diary,” if you wish.",
            "Write the entry in short paragraphs, one for each part of the day.",
            "End with a line about your plans or feelings for the next day."
          ]
        },
        {
          heading: "Tense and language",
          points: [
            "Use the **past tense** for the events of the day: We visited the zoo and saw the lions.",
            "Use the **present tense** for your feelings now or for general truths: I feel happy, and I still think it was the best day.",
            "Use time words to order the events: In the morning, At noon, Later in the evening, Finally."
          ]
        },
        {
          heading: "Showing feelings",
          points: [
            "Describe how you felt, and why: I was so nervous before the drama show, but my friends cheered me on.",
            "Use exclamation marks for strong feelings: What a wonderful day it was!",
            "Write honestly. A diary is private, so you can share your real thoughts, even if they are small ones.",
            "Describe one or two details that make the day memorable, such as the smell of the rain or the taste of the sweets."
          ]
        }
      ],
      formulas: [
        "Date → personal events in the past tense → feelings → plans for tomorrow",
        "In the morning / At noon / In the evening / Finally (time order)",
        "I felt … because … (showing feelings)",
        "Dear Diary, (optional greeting)"
      ],
      terms: [
        { term: "Diary", meaning: "A personal book in which a writer records the day’s events and feelings." },
        { term: "First person", meaning: "The point of view that uses I and we, as in “I went to the market.”" },
        { term: "Reflection", meaning: "A thought about what happened and what it meant to you." },
        { term: "Entry", meaning: "One day’s record in a diary." },
        { term: "Vivid", meaning: "Full of clear, lively details that help the reader see and feel the event." }
      ],
      examples: [
        {
          q: "Write the first two lines of a diary entry about a visit to a village fair in Punjab.",
          steps: [
            "Start with the date: “14 March 2025”.",
            "Use the past tense for the event, in the first person.",
            "Add a feeling and a vivid detail."
          ],
          answer: "14 March 2025. Today we went to the village fair near Ludhiana. The air was full of the smell of jalebis, and the dhol players made me want to dance!"
        },
        {
          q: "Turn these notes into a diary entry: “rain, late for bus, friend Simran shared umbrella, happy.”",
          steps: [
            "Choose the past tense for the events: “It rained”, “I was late”, “Simran shared her umbrella”.",
            "Add a feeling: “I was so happy.”",
            "Put the events in order, with a time word: “Finally, …”"
          ],
          answer: "It rained heavily this morning and I missed my bus. Luckily, my friend Simran shared her umbrella with me. I was so happy to have such a kind friend!"
        }
      ],
      qa: [
        {
          q: "Why is a diary entry written in the first person?",
          a: "A diary is a personal record of the writer’s own experiences and feelings. The first person (I, we) shows that the events happened to the writer."
        },
        {
          q: "Which tense is mainly used in a diary entry, and why?",
          a: "The **past tense** is mainly used because the entry describes the events that have already happened during the day. The present tense can be used for feelings or plans."
        }
      ],
      quiz: [
        {
          q: "A diary entry usually begins with which of these?",
          options: ["The date", "The receiver’s address", "A subject line", "The name of the principal"],
          answer: 0,
          explain: "A diary entry starts with the **date**. It does not need an address or a subject line."
        },
        {
          q: "Which tense do most diary entries use for the events of the day?",
          options: ["Future tense", "Imperative mood", "Past tense", "Present perfect only"],
          answer: 2,
          explain: "The events already happened, so the **past tense** is used."
        },
        {
          q: "Which of these is NOT usually part of a diary entry?",
          options: ["The date", "The receiver’s address", "The events of the day", "Personal feelings"],
          answer: 1,
          explain: "A diary is a private record, so it has no receiver’s address. The date, events and feelings are all common parts."
        },
        {
          q: "Why is a diary called a personal record?",
          options: ["It is read by the whole school", "It is printed in a newspaper", "It must be sent to a friend", "It is written for the writer’s own use"],
          answer: 3,
          explain: "A diary is private. It is written for the writer, so it is a **personal** record."
        },
        {
          q: "Which sentence is the best opening for a diary entry about a school picnic?",
          options: ["Dear Sir,", "Respected Principal,", "Today was the best day of my school life!", "To whom it may concern,"],
          answer: 2,
          explain: "A diary begins with a personal, lively sentence. “Dear Sir” and “To whom it may concern” belong to formal letters."
        },
        {
          q: "Which sentence shows the writer’s feelings best?",
          options: ["The picnic was held at 10 a.m.", "I felt so proud when my painting won the first prize!", "The school bus has four wheels.", "Picnic is a fun thing."],
          answer: 1,
          explain: "A diary shows feelings. “I felt so proud” tells the reader how the writer felt."
        }
      ]
    },

    {
      id: "story-writing",
      title: "Story Writing",
      section: "Writing Skills",
      summary: "A good story has a clear beginning, middle and end, interesting characters and a problem to solve. This chapter explains the parts of a story, how to write dialogue and how to finish with a satisfying ending.",
      notes: [
        {
          heading: "Parts of a story",
          points: [
            "**Beginning**: introduce the main character, the setting (where and when) and the situation.",
            "**Middle**: a problem or conflict arises, and the character tries to solve it. The events build up.",
            "**Climax**: the most exciting or tense moment, when the problem comes to a head.",
            "**Ending**: the problem is solved and the story finishes with a clear conclusion."
          ]
        },
        {
          heading: "Creating characters and setting",
          points: [
            "Give your main character a name, an age and a clear personality, such as brave, curious or shy.",
            "Describe the setting with sensory details: the sound of the temple bells, the smell of wet soil after rain.",
            "Keep the number of characters small enough for the reader to follow."
          ]
        },
        {
          heading: "Writing dialogue",
          points: [
            "Put the speaker’s exact words inside inverted commas: “Where are you going?” asked Ravi.",
            "Start a new line each time a different person speaks.",
            "Use dialogue to show feelings and move the story forward, not just to fill space."
          ]
        },
        {
          heading: "Language and a good title",
          points: [
            "Most stories are written in the **past tense**: One day, Ravi found an old map in his grandfather’s trunk.",
            "Use sequence words such as **One day**, **Suddenly**, **Meanwhile**, **Finally**.",
            "Give the story a short, interesting title, such as “The Lost Purse”.",
            "A moral (a lesson) can be shown through the ending, not only stated in words."
          ]
        }
      ],
      formulas: [
        "Beginning (who, where, when) → Middle (problem) → Climax (turning point) → Ending (solution)",
        "“Speech,” said/asked Name. (dialogue)",
        "One day … Suddenly … Finally … (sequence words)"
      ],
      terms: [
        { term: "Setting", meaning: "The place and time in which a story happens." },
        { term: "Plot", meaning: "The sequence of events in a story." },
        { term: "Climax", meaning: "The most exciting or tense point in a story." },
        { term: "Conflict", meaning: "The problem or struggle faced by the main character." },
        { term: "Moral", meaning: "The lesson that a story teaches, such as “honesty is the best policy”." }
      ],
      examples: [
        {
          q: "Write the opening line of a story set in a village near Varanasi, with a girl named Asha who loses her kite.",
          steps: [
            "Introduce the setting: a village near Varanasi.",
            "Introduce the character and the situation: Asha and her kite.",
            "Use the past tense, and a sequence phrase."
          ],
          answer: "One windy morning in a small village near Varanasi, Asha’s bright red kite slipped from her hands and flew away over the fields."
        },
        {
          q: "Which ending is better for a story about a boy who finds a lost purse and returns it?",
          steps: [
            "A good ending solves the problem and connects to the story’s lesson.",
            "“The story just stopped” does not give a conclusion.",
            "“Finally, Ravi returned the purse, and he learnt that honesty is the best policy.” ends the story clearly."
          ],
          answer: "Finally, Ravi returned the purse to its owner, and he learnt that honesty is always the best policy."
        }
      ],
      qa: [
        {
          q: "What are the four parts of a story?",
          a: "The four parts are the **beginning** (introduction of characters, setting and situation), the **middle** (the problem and the events that build up), the **climax** (the most exciting moment) and the **ending** (the problem is solved)."
        },
        {
          q: "Why should a story have a clear conflict?",
          a: "A conflict gives the story a problem to solve. It makes the reader curious and gives the characters something to struggle with, which makes the story interesting."
        }
      ],
      quiz: [
        {
          q: "Which part of a story introduces the main characters and the setting?",
          options: ["Climax", "Beginning", "Ending", "Moral"],
          answer: 1,
          explain: "The **beginning** introduces the characters, the place and the situation."
        },
        {
          q: "What is the climax of a story?",
          options: ["The first line", "The list of characters", "The turning point with the most excitement", "The last line only"],
          answer: 2,
          explain: "The **climax** is the most exciting or tense point, when the problem is at its height."
        },
        {
          q: "Which tense is used in most stories?",
          options: ["Future tense", "Imperative mood", "Present perfect", "Past tense"],
          answer: 3,
          explain: "Most stories describe events that have already happened, so the **past tense** is used."
        },
        {
          q: "Which opening best starts a story set in a small village near Jaipur?",
          options: ["Respected Sir,", "Dear Diary,", "Once upon a time, in a small village near Jaipur", "Subject: My story"],
          answer: 2,
          explain: "A story opening introduces the setting. “Once upon a time, in a small village near Jaipur” does this well."
        },
        {
          q: "Which sentence shows correct dialogue punctuation?",
          options: ["“Where are you going,” asked Ravi.", "“Where are you going?” asked Ravi.", "“Where are you going?”, asked Ravi.", "Where are you going asked Ravi?"],
          answer: 1,
          explain: "A question mark ends the speech inside the quotation marks, and “asked Ravi” follows with no comma after the closing quotes."
        },
        {
          q: "Which ending gives a good conclusion to a story about honesty?",
          options: ["The story just stopped.", "Finally, Ravi returned the purse and learnt that honesty is the best policy.", "And then the end.", "Nobody knows what happened."],
          answer: 1,
          explain: "A good ending solves the problem and shows the lesson of the story."
        }
      ]
    },

    {
      id: "message-writing",
      title: "Message Writing",
      section: "Writing Skills",
      summary: "A message is a short note that passes on important information to someone who is not there. This chapter explains the details a good message must include and how to write one clearly and politely.",
      notes: [
        {
          heading: "What is a message?",
          points: [
            "A **message** is a short written note that passes on information to someone who is not present.",
            "Messages are written for family members, classmates, teachers or a receptionist.",
            "A message should be short, clear and complete, so the reader does not need to ask questions."
          ]
        },
        {
          heading: "Details a message must include",
          points: [
            "**To**: the name of the person the message is for.",
            "**From**: the name of the person who is sending it.",
            "**Date and time**: when the message was written, or when the event is.",
            "**Message**: the information itself, written in one to three short sentences, and a signature."
          ]
        },
        {
          heading: "Format and language",
          points: [
            "Write the message in a neat, simple format, with the details in a list or in short lines.",
            "Use short, complete sentences. Avoid slang or text-message spellings such as “plz” or “gr8”.",
            "Use polite words when writing to elders: “Please call him back” instead of “Call him”.",
            "Sign your message with your name, or a suitable closing such as “Your loving sister, Kavya”."
          ]
        },
        {
          heading: "Common uses of messages",
          points: [
            "**Telephone message**: a note of who called, when, and what they said.",
            "**Note to a classmate**: a reminder about homework, a meeting or a change of plan.",
            "**Message for a parent or teacher**: a reason for being late, or a request to collect a child from school."
          ]
        }
      ],
      formulas: [
        "To: [name] / From: [name] / Date and time / Message / Signature",
        "Say who, what and when in short sentences",
        "Use polite words for elders (Please call back.)"
      ],
      terms: [
        { term: "Message", meaning: "A short written note that passes on information to someone who is not there." },
        { term: "Telephone message", meaning: "A note taken for a person who was not at home or in the office when a call came." },
        { term: "Reminder", meaning: "A message that helps the reader remember something important." },
        { term: "Signature", meaning: "The name written at the end of a message to show who wrote it." },
        { term: "Urgent", meaning: "Needing quick action or attention." }
      ],
      examples: [
        {
          q: "Write a message for your mother. Dr. Rao phoned at 4:30 p.m. and asked for an appointment tomorrow.",
          steps: [
            "Include the details: To, From, Date and time, Message, and a signature.",
            "Write the key information in a short sentence: Dr. Rao phoned at 4:30 p.m. and wants an appointment tomorrow.",
            "Use polite words, such as “Please call him back”."
          ],
          answer: "To: Mother / From: Ananya / Time: 4:30 p.m. / Message: Dr. Rao phoned and asked for an appointment tomorrow. Please call him back today. / Ananya"
        },
        {
          q: "Write a message to your classmate Aditi reminding her to bring the science project to school on Monday.",
          steps: [
            "Use a friendly tone, because the reader is a classmate.",
            "Mention the item, the day and the reason for the reminder.",
            "Sign with your name."
          ],
          answer: "Hi Aditi, Please don’t forget to bring your science project to school on Monday. Mrs. Gupta will collect it in the first period. - Rohan"
        }
      ],
      qa: [
        {
          q: "What details should every telephone message include?",
          a: "It should include the name of the person the message is for, the name of the caller, the date and time, the message itself and the name of the person who took the message."
        },
        {
          q: "How is a message to a classmate different from a message to a teacher?",
          a: "A message to a classmate can be friendly and short, with an informal greeting such as “Hi Aditi”. A message to a teacher should be polite and respectful, with words such as “Respected Ma’am” and full sentences."
        }
      ],
      quiz: [
        {
          q: "Which details should a phone message include?",
          options: ["Who it is for, who it is from, the time and the message", "Only the message", "Only the name of the school", "A poem about friendship"],
          answer: 0,
          explain: "A good message names the receiver and sender, gives the time and states the message clearly."
        },
        {
          q: "Which message for a mother who is out is the best?",
          options: ["Mom, come back quick!", "Dr. Rao called. Bye.", "Dr. Rao called, so ring.", "Mom, Dr. Rao called at 4:30 p.m. Please call him back today."],
          answer: 3,
          explain: "The best message gives the caller, the time and what the mother should do. The other messages leave out key details."
        },
        {
          q: "In the message “Meet me at the library at 3 p.m.”, which words tell us WHEN?",
          options: ["library", "3 p.m.", "Meet", "me"],
          answer: 1,
          explain: "“3 p.m.” is the time, so it tells us when to meet."
        },
        {
          q: "What is the purpose of a written message?",
          options: ["To write a long essay", "To describe a painting", "To pass on important information briefly", "To tell a joke"],
          answer: 2,
          explain: "A message is short and passes on information to someone who is not there."
        },
        {
          q: "Which opening is suitable for a note to a classmate?",
          options: ["Respected Sir,", "Hi Aditi,", "To whom it may concern,", "Dear Principal,"],
          answer: 1,
          explain: "A note to a friend or classmate can have a friendly greeting such as “Hi Aditi,”."
        },
        {
          q: "Which closing is suitable for a message from a sister?",
          options: ["Yours faithfully", "Respectfully yours", "Sincerely, The Management", "Your loving sister, Kavya"],
          answer: 3,
          explain: "A message from a family member uses a friendly closing with the sender’s name, such as “Your loving sister, Kavya”."
        }
      ]
    }
  ]
});
