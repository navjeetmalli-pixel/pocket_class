// Class 9 English (PSEB): Grammar, Vocabulary, Writing, Main Course Book, Poems, Supplementary Reader.
// Format: see CONTENT_GUIDE.md. Main Course Book lessons and poems are summarised in our own words from the PSEB textbook (2023–24 edition);
// no text is reproduced.
// All 7 Main Course Book lessons and 3 poems are covered. Supplementary Reader: only the PSEB Main Course Book is available online, so these
// lessons were NOT checked against the book and are kept as they were (A Letter to God, The Last Leaf); not covered: The Magic Violin,
// Wishes Come True, In the Flood, The Bewitched Jacket, The King Who Limped.
StudyData.add(9, "englishpb", {
  syllabus: {board: "PSEB", match: "textbook", books: ["English Main Course Book (PSEB, Class 9)", "English Supplementary Reader (PSEB, Class 9)"], note: "Follows the PSEB 2026–27 syllabus; lessons summarised in our own words from the PSEB textbook (2023–24 edition).", reviewed: false},
  chapters: [
    // ───────────────────────────── GRAMMAR ─────────────────────────────
    {
      id: "grammar-determiners",
      title: "Determiners",
      section: "Grammar",
      summary: "Determiners are words placed before a noun to show which one, how many or how much: articles, demonstratives, possessives, quantifiers and numbers.",
      notes: [
        {
          heading: "Articles",
          points: [
            "**A / an** are indefinite articles used with singular countable nouns. Use **a** before a consonant sound (a university, a one-rupee coin) and **an** before a vowel sound (an hour, an umbrella).",
            "**The** is used for a particular or already-mentioned thing, for unique things (the sun, the moon) and for rivers, seas, mountain ranges and newspapers (the Ganga, the Himalayas).",
            "No article is used before names of people, most countries, languages, meals and games: “We play cricket.” “She speaks Punjabi.”"
          ]
        },
        {
          heading: "Quantifiers",
          points: [
            "**Much** goes with uncountable nouns (much water); **many** with countable plurals (many books). In positive sentences we prefer **a lot of**.",
            "**Few** (hardly any) and **a few** (some) go with countable nouns; **little** (hardly any) and **a little** (some) go with uncountable nouns.",
            "**Some** is used in positive sentences and offers; **any** in negatives and questions.",
            "**Each** and **every** take a singular verb. **Either / neither** refer to two persons or things; **all** and **both** are used for more than one."
          ]
        },
        {
          heading: "Other determiners",
          points: [
            "**Demonstratives:** this, that (singular); these, those (plural).",
            "**Possessives:** my, our, your, his, her, its, their. Do not confuse **its** (possessive) with **it's** (it is).",
            "**Numbers and distributives:** one, two, first, second; several, enough, other, another."
          ]
        }
      ],
      formulas: [
        "a/an depends on the SOUND, not the spelling (an honest man, a uniform).",
        "few / a few → countable; little / a little → uncountable.",
        "each, every, either, neither → singular verb."
      ],
      terms: [
        {term: "Determiner", meaning: "A word before a noun that tells which one or how many."},
        {term: "Article", meaning: "The words a, an and the."},
        {term: "Countable noun", meaning: "A noun that can be counted (book, pen)."},
        {term: "Uncountable noun", meaning: "A noun that cannot be counted one by one (milk, advice)."},
        {term: "Quantifier", meaning: "A determiner showing quantity, such as much, many, some, few."}
      ],
      qa: [
        {q: "What is the difference between “few” and “a few”?", a: "“Few” means hardly any and has a negative sense: “Few people came, so the hall looked empty.” “A few” means some and is positive: “A few people came, so we began.”"},
        {q: "Fill in the blanks with a, an or the: ___ sun rises in ___ east, and ___ hour later it is bright.", a: "**The** sun rises in **the** east, and **an** hour later it is bright."}
      ],
      quiz: [
        {q: "Choose the correct article: He is ___ honest boy.", options: ["an", "a", "the", "no article"], answer: 0, explain: "“Honest” begins with a vowel sound (silent h), so “an” is used."},
        {q: "There is ___ milk left, so we cannot make tea.", options: ["little", "a few", "few", "many"], answer: 0, explain: "Milk is uncountable and the sense is negative, so “little”."},
        {q: "___ of the two boys has finished the work.", options: ["Neither", "None", "All", "Several"], answer: 0, explain: "Neither is used for two persons and takes a singular verb."},
        {q: "I have read ___ interesting books this year.", options: ["a few", "a little", "much", "an"], answer: 0, explain: "Books are countable and plural, and the sense is positive, so “a few”."},
        {q: "Every student ___ present today.", options: ["is", "are", "were", "have been"], answer: 0, explain: "“Every” takes a singular verb."},
        {q: "___ Ganga is a sacred river.", options: ["The", "A", "An", "No article"], answer: 0, explain: "The is used before names of rivers."}
      ]
    },
    {
      id: "grammar-modals",
      title: "Modals",
      section: "Grammar",
      summary: "Modal verbs such as can, may, must and should are helping verbs that show ability, permission, possibility, necessity and advice.",
      notes: [
        {
          heading: "Common modals and their uses",
          points: [
            "**Can / could:** ability (She can swim), informal permission (Can I go?); could is the past of ability and a polite request.",
            "**May / might:** permission (May I come in?), possibility (It may rain); might suggests a weaker possibility.",
            "**Must:** strong necessity or duty (You must obey traffic rules). **Must not** expresses prohibition.",
            "**Should / ought to:** advice or moral duty (You should respect elders)."
          ]
        },
        {
          heading: "Will, would, shall",
          points: [
            "**Will:** future and willingness. **Would:** polite request (Would you help me?) and a past habit.",
            "**Shall:** used with I and we for offers and suggestions (Shall I open the window?).",
            "**Used to** shows a past habit that no longer continues: “He used to walk to school.”"
          ]
        },
        {
          heading: "Rules",
          points: [
            "A modal is followed by the **base form** of the verb, without “to”: “She can sing” (not “can sings” or “can to sing”). Ought to is the exception: it keeps “to”.",
            "Modals have the same form for all persons: no -s with he, she or it.",
            "**Need not** means it is not necessary; **must not** means it is forbidden. Compare: “You need not come” and “You must not cheat.”"
          ]
        }
      ],
      formulas: [
        "Subject + modal + base verb (V1).",
        "must not = prohibition; need not = not necessary.",
        "ought to is followed by to + V1."
      ],
      terms: [
        {term: "Modal verb", meaning: "A helping verb that shows ability, permission, possibility or necessity."},
        {term: "Base form", meaning: "The simple form of a verb (go, write) used after modals."},
        {term: "Obligation", meaning: "A duty or something one has to do."},
        {term: "Prohibition", meaning: "A rule that says something must not be done."},
        {term: "Ability", meaning: "Being able to do something."}
      ],
      qa: [
        {q: "Correct the sentence: “She can sings very well.”", a: "A modal is followed by the base form of the verb, so the correct sentence is “She can **sing** very well.”"},
        {q: "What is the difference between “must not” and “need not”?", a: "“Must not” means something is forbidden (You must not park here). “Need not” means something is not necessary (You need not wait for me)."}
      ],
      quiz: [
        {q: "Students ___ not use mobile phones during the examination.", options: ["must", "need", "can", "might"], answer: 0, explain: "“Must not” expresses prohibition."},
        {q: "He ___ run very fast when he was young.", options: ["could", "can", "must", "should"], answer: 0, explain: "Could is the past form for ability."},
        {q: "You ___ respect your elders.", options: ["should", "can", "might", "may"], answer: 0, explain: "Should expresses advice or moral duty."},
        {q: "___ I borrow your pen, please?", options: ["May", "Must", "Ought", "Need"], answer: 0, explain: "May is used to ask permission politely."},
        {q: "He is rich. You ___ not give him anything.", options: ["need", "ought", "must", "can"], answer: 0, explain: "“Need not” means it is not necessary."},
        {q: "Choose the correct sentence.", options: ["She should help him.", "She should to help him.", "She should helps him.", "She should helping him."], answer: 0, explain: "A modal is followed by the base form without “to”."}
      ]
    },
    {
      id: "grammar-prepositions",
      title: "Prepositions",
      section: "Grammar",
      summary: "A preposition shows the relation of a noun or pronoun to another word in the sentence, such as time, place, direction or cause.",
      notes: [
        {
          heading: "Prepositions of time and place",
          points: [
            "**Time:** at a clock time or point (at 5 o'clock), on a day or date (on Monday, on 15 August), in a month, year, season or part of day (in March, in 2020, in the morning).",
            "**Place:** at a point (at the gate), in an enclosed space (in the room, in Punjab), on a surface (on the table).",
            "**Since** is used with a point of time (since Monday); **for** with a period (for two hours)."
          ]
        },
        {
          heading: "Commonly confused prepositions",
          points: [
            "**Between** is used for two; **among** for more than two.",
            "**Beside** means next to; **besides** means in addition to.",
            "**In** shows being inside or within; **into** shows movement from outside to inside (He jumped into the pool).",
            "**By** (a deadline or the doer) and **until** (up to a time): “Finish by Friday.” “Wait until Friday.”"
          ]
        },
        {
          heading: "Words followed by fixed prepositions",
          points: [
            "good at, fond of, afraid of, proud of, interested in, married to, angry with (a person), angry at (a thing).",
            "different from, prefer … to …, congratulate on, depend on, die of (disease), suffer from.",
            "A preposition is followed by a noun, pronoun or gerund (-ing form): “He is fond of reading.”"
          ]
        }
      ],
      formulas: [
        "at + point, on + day/date, in + month/year.",
        "between = two; among = more than two.",
        "since + point of time; for + period of time."
      ],
      terms: [
        {term: "Preposition", meaning: "A word showing how a noun or pronoun is related to another word."},
        {term: "Object of a preposition", meaning: "The noun or pronoun that follows the preposition."},
        {term: "Gerund", meaning: "The -ing form of a verb used as a noun (reading, swimming)."},
        {term: "Phrase", meaning: "A group of words without a subject and verb of its own."},
        {term: "Duration", meaning: "The length of time something lasts."}
      ],
      qa: [
        {q: "Fill in the blanks: He is afraid ___ dogs and good ___ mathematics.", a: "He is afraid **of** dogs and good **at** mathematics."},
        {q: "Distinguish between “beside” and “besides”.", a: "“Beside” means next to (She sat beside me). “Besides” means in addition to (Besides English, he knows Punjabi)."}
      ],
      quiz: [
        {q: "The school opens ___ 8 o'clock.", options: ["at", "on", "in", "by the"], answer: 0, explain: "At is used with clock times."},
        {q: "The sweets were shared ___ the four children.", options: ["among", "between", "beside", "to"], answer: 0, explain: "Among is used for more than two."},
        {q: "She has been ill ___ Monday.", options: ["since", "for", "from", "during"], answer: 0, explain: "Since is used with a point of time."},
        {q: "My birthday is ___ 12 March.", options: ["on", "in", "at", "by"], answer: 0, explain: "On is used with dates."},
        {q: "He is fond ___ playing cricket.", options: ["of", "at", "for", "with"], answer: 0, explain: "The fixed phrase is “fond of”."},
        {q: "The cat jumped ___ the well.", options: ["into", "in", "on", "among"], answer: 0, explain: "Into shows movement from outside to inside."}
      ]
    },
    {
      id: "grammar-conjunctions",
      title: "Conjunctions",
      section: "Grammar",
      summary: "Conjunctions join words, phrases and clauses. They are coordinating, subordinating or correlative.",
      notes: [
        {
          heading: "Coordinating conjunctions",
          points: [
            "They join words or clauses of equal rank: **and, but, or, nor, for, yet, so**.",
            "**And** adds, **but / yet** show contrast, **or** gives a choice, **so** shows result, **for** gives a reason.",
            "Example: “He was tired, but he kept working.”"
          ]
        },
        {
          heading: "Subordinating conjunctions",
          points: [
            "They join a dependent clause to a main clause.",
            "**Time:** when, while, before, after, until, as soon as. **Reason:** because, since, as. **Condition:** if, unless. **Concession:** although, though, even if. **Purpose:** so that, in order that.",
            "**That** introduces a noun clause: “I know that he is honest.”"
          ]
        },
        {
          heading: "Correlative conjunctions and common errors",
          points: [
            "Correlatives work in pairs: **either … or, neither … nor, both … and, not only … but also, whether … or, no sooner … than, hardly … when**.",
            "Do not use **although** and **but** together; do not use **because** and **so** together in one sentence.",
            "**Unless** already has a negative sense: say “Unless you work hard, you will fail” (not “unless you do not work hard”)."
          ]
        }
      ],
      formulas: [
        "Coordinating: FANBOYS = for, and, nor, but, or, yet, so.",
        "neither … nor; either … or; both … and; not only … but also.",
        "no sooner … than; hardly … when."
      ],
      terms: [
        {term: "Conjunction", meaning: "A word that joins words, phrases or clauses."},
        {term: "Clause", meaning: "A group of words with its own subject and verb."},
        {term: "Coordinating conjunction", meaning: "A conjunction joining two equal parts (and, but, or)."},
        {term: "Subordinating conjunction", meaning: "A conjunction introducing a dependent clause (because, if)."},
        {term: "Correlative", meaning: "A pair of conjunctions used together (either … or)."}
      ],
      qa: [
        {q: "Join using a suitable conjunction: He was poor. He was honest.", a: "He was poor **but** honest. (or: Although he was poor, he was honest.)"},
        {q: "Name the three kinds of conjunctions with one example each.", a: "Coordinating (and, but), subordinating (because, although) and correlative (either … or)."}
      ],
      quiz: [
        {q: "He did not go to school ___ he was ill.", options: ["because", "although", "unless", "but"], answer: 0, explain: "The second clause gives the reason."},
        {q: "___ you work hard, you will not pass.", options: ["Unless", "If not", "Until", "Although"], answer: 0, explain: "Unless means if not, giving a negative condition."},
        {q: "Neither the teacher ___ the students were present.", options: ["nor", "or", "and", "but"], answer: 0, explain: "Neither is paired with nor."},
        {q: "___ he was tired, he finished the work.", options: ["Although", "Because", "Unless", "So"], answer: 0, explain: "Although shows contrast between tiredness and finishing."},
        {q: "No sooner had he arrived ___ it began to rain.", options: ["than", "when", "then", "that"], answer: 0, explain: "The correlative pair is no sooner … than."},
        {q: "Work hard ___ you may succeed.", options: ["so that", "because", "although", "unless"], answer: 0, explain: "So that expresses purpose."}
      ]
    },
    {
      id: "grammar-simple-compound-complex",
      title: "Simple, Compound and Complex Sentences",
      section: "Grammar",
      summary: "Sentences are classified by structure: a simple sentence has one clause, a compound sentence joins equal clauses, and a complex sentence has a main clause and a dependent clause.",
      notes: [
        {
          heading: "The three kinds",
          points: [
            "**Simple:** one subject and one finite verb (one clause): “The boy ran home.”",
            "**Compound:** two or more independent clauses joined by and, but, or, so: “The boy was tired, so he ran home.”",
            "**Complex:** one main clause and one or more subordinate clauses: “Because he was tired, the boy ran home.”"
          ]
        },
        {
          heading: "Subordinate clauses",
          points: [
            "**Noun clause:** acts as a noun (I know that he is honest).",
            "**Adjective clause:** describes a noun (The man who called is my uncle).",
            "**Adverb clause:** tells time, reason, condition or place (He left when it rained)."
          ]
        },
        {
          heading: "Transforming sentences",
          points: [
            "**Simple to compound:** replace a phrase by a clause joined with and/but/so. “Being ill, he stayed home” becomes “He was ill, so he stayed home.”",
            "**Simple to complex:** replace the phrase with a subordinate clause. “On seeing the police, the thief ran away” becomes “When he saw the police, the thief ran away.”",
            "Keep the meaning unchanged. Do not add or drop information."
          ]
        }
      ],
      formulas: [
        "Simple = 1 clause; Compound = 2+ independent clauses; Complex = main + subordinate clause(s).",
        "Compound uses and/but/or/so; complex uses because/if/when/who/that."
      ],
      terms: [
        {term: "Independent clause", meaning: "A clause that can stand alone as a sentence."},
        {term: "Subordinate clause", meaning: "A clause that depends on a main clause for its meaning."},
        {term: "Simple sentence", meaning: "A sentence with one finite verb and one clause."},
        {term: "Compound sentence", meaning: "A sentence of two or more independent clauses."},
        {term: "Complex sentence", meaning: "A sentence with a main clause and a subordinate clause."}
      ],
      qa: [
        {q: "Combine as a complex sentence: He was ill. He did not come.", a: "**Because he was ill**, he did not come."},
        {q: "Change into a compound sentence: Though he is poor, he is happy.", a: "He is poor **but** he is happy."}
      ],
      quiz: [
        {q: "“The sun rose and the birds began to sing.” is a:", options: ["compound sentence", "simple sentence", "complex sentence", "phrase"], answer: 0, explain: "Two independent clauses are joined by “and”."},
        {q: "“I know that he is honest.” contains a:", options: ["noun clause", "adjective clause", "adverb clause", "main clause only"], answer: 0, explain: "“That he is honest” is the object of “know”."},
        {q: "“When it rained, we stayed indoors.” is a:", options: ["complex sentence", "compound sentence", "simple sentence", "fragment"], answer: 0, explain: "It has a subordinate clause (When it rained) and a main clause."},
        {q: "Which sentence is simple?", options: ["She sang a song.", "She sang and he danced.", "She sang because she was happy.", "When she sang, he danced."], answer: 0, explain: "It has only one subject and one finite verb."},
        {q: "Which conjunction forms a compound sentence?", options: ["but", "because", "although", "if"], answer: 0, explain: "But joins two independent clauses; the others introduce subordinate clauses."},
        {q: "In “The man who called is my uncle”, the clause “who called” is a(n):", options: ["adjective clause", "noun clause", "adverb clause", "main clause"], answer: 0, explain: "It describes the noun “man”."}
      ]
    },
    {
      id: "grammar-active-passive-voice",
      title: "Active and Passive Voice",
      section: "Grammar",
      summary: "In the active voice the subject does the action; in the passive voice the subject receives the action. Passive is formed with a form of 'be' plus the past participle.",
      notes: [
        {
          heading: "Basic rule",
          points: [
            "Active: **Subject + verb + object.** Passive: **Object + be (is/am/are/was/were/been/being) + V3 + by + subject.**",
            "“Ram wrote a letter” becomes “A letter was written by Ram.”",
            "The tense of the passive sentence stays the same as the active sentence; only the form of “be” changes."
          ]
        },
        {
          heading: "Passive in different tenses",
          points: [
            "**Simple present:** is/am/are + V3 (The door is opened.)",
            "**Simple past:** was/were + V3. **Simple future:** will be + V3.",
            "**Present continuous:** is/am/are being + V3. **Past continuous:** was/were being + V3.",
            "**Present perfect:** has/have been + V3. **Past perfect:** had been + V3.",
            "**Modals:** modal + be + V3 (The work must be finished.)"
          ]
        },
        {
          heading: "Special cases",
          points: [
            "Pronouns change: I → me, he → him, we → us, they → them (and back).",
            "Imperatives: “Close the door” becomes “Let the door be closed.” (or “You are requested to close the door.”)",
            "The agent (by …) is dropped when it is unknown or unimportant: “My bike was stolen.”",
            "Intransitive verbs (sleep, go) have no object, so they cannot normally be made passive."
          ]
        }
      ],
      formulas: [
        "Passive = object + be + past participle (V3) + by + subject.",
        "Modal passive = modal + be + V3.",
        "Imperative passive = Let + object + be + V3."
      ],
      terms: [
        {term: "Active voice", meaning: "The subject performs the action."},
        {term: "Passive voice", meaning: "The subject receives the action."},
        {term: "Past participle", meaning: "The V3 form of a verb (written, eaten, done)."},
        {term: "Agent", meaning: "The doer of an action, shown after “by” in a passive sentence."},
        {term: "Transitive verb", meaning: "A verb that takes an object."}
      ],
      qa: [
        {q: "Change into the passive voice: The students are writing exercises.", a: "Exercises **are being written by the students**."},
        {q: "Change into the active voice: The window was broken by the boy.", a: "The boy **broke the window**."}
      ],
      quiz: [
        {q: "Passive of “She sings a song.”", options: ["A song is sung by her.", "A song was sung by her.", "A song sings by her.", "A song is singing by her."], answer: 0, explain: "Simple present passive: is + V3."},
        {q: "Passive of “They have finished the work.”", options: ["The work has been finished by them.", "The work was finished by them.", "The work had been finished by them.", "The work is finished by them."], answer: 0, explain: "Present perfect passive: has/have been + V3."},
        {q: "Passive of “Open the door.”", options: ["Let the door be opened.", "The door is opened.", "Let the door opened.", "The door open."], answer: 0, explain: "Imperatives use “Let … be + V3”."},
        {q: "Active of “The letter was posted by Ravi.”", options: ["Ravi posted the letter.", "Ravi posts the letter.", "Ravi has posted the letter.", "Ravi was posting the letter."], answer: 0, explain: "Simple past passive corresponds to the simple past active."},
        {q: "Passive of “You must obey the rules.”", options: ["The rules must be obeyed by you.", "The rules must obeyed by you.", "The rules must be obey by you.", "The rules are obeyed by you."], answer: 0, explain: "Modal + be + V3."},
        {q: "Passive of “He is writing a letter.”", options: ["A letter is being written by him.", "A letter is written by him.", "A letter was being written by him.", "A letter has been written by him."], answer: 0, explain: "Present continuous passive: is being + V3."}
      ]
    },
    {
      id: "grammar-narration",
      title: "Narration (Direct and Indirect Speech)",
      section: "Grammar",
      summary: "Direct speech gives the speaker's exact words in quotation marks; indirect (reported) speech tells what was said without quoting, with changes in tense, pronouns and words of time and place.",
      notes: [
        {
          heading: "Basic changes",
          points: [
            "Remove the quotation marks and join the reporting verb and reported speech with **that** (statements).",
            "**Pronouns** change according to the sense: He said, “I am tired” becomes He said that **he** was tired.",
            "**Tense** goes one step back when the reporting verb is in the past: am/is → was, do → did, will → would, can → could, has/have → had."
          ]
        },
        {
          heading: "Time and place words",
          points: [
            "now → then; today → that day; tomorrow → the next day; yesterday → the previous day; ago → before.",
            "this → that; these → those; here → there; come → go.",
            "Universal truths do not change tense: He said that the earth moves round the sun."
          ]
        },
        {
          heading: "Different kinds of sentences",
          points: [
            "**Questions:** use ask/enquire + if/whether (yes/no questions) or the same wh-word, with statement word order and no question mark.",
            "**Commands and requests:** use told/ordered/requested/advised + to-infinitive.",
            "**Exclamations:** exclaimed with joy/sorrow that …; **wishes and greetings:** wished, greeted, wished him good morning."
          ]
        }
      ],
      formulas: [
        "Statement: reporting verb + that + reported speech (tense back one step).",
        "Yes/no question: asked + if/whether; wh-question: asked + same wh-word.",
        "Command: told/ordered + person + (not) to + V1."
      ],
      terms: [
        {term: "Direct speech", meaning: "The exact words of the speaker, in quotation marks."},
        {term: "Indirect speech", meaning: "Reporting what was said without quoting the exact words."},
        {term: "Reporting verb", meaning: "The verb that introduces the speech (said, asked, told)."},
        {term: "Reported speech", meaning: "The words that were spoken."},
        {term: "Universal truth", meaning: "A fact that is always true, so its tense does not change."}
      ],
      qa: [
        {q: "Change into indirect speech: He said to me, “I will help you tomorrow.”", a: "He told me that he would help me the next day."},
        {q: "Change into indirect speech: She said to him, “Where do you live?”", a: "She asked him where he lived."}
      ],
      quiz: [
        {q: "Indirect form of: He said, “I am happy.”", options: ["He said that he was happy.", "He said that he is happy.", "He said that I was happy.", "He said that he will be happy."], answer: 0, explain: "Pronoun changes to he, and am becomes was."},
        {q: "Indirect form of: She said to me, “Do you like tea?”", options: ["She asked me if I liked tea.", "She asked me that I liked tea.", "She told me if I like tea.", "She asked me did I like tea."], answer: 0, explain: "Yes/no questions use if or whether, with statement word order."},
        {q: "Indirect form of: The teacher said, “Sit down.”", options: ["The teacher ordered them to sit down.", "The teacher said that sit down.", "The teacher asked that they sat down.", "The teacher ordered them sit down."], answer: 0, explain: "Commands use ordered/told + to + verb."},
        {q: "In indirect speech “tomorrow” changes to:", options: ["the next day", "the previous day", "that day", "today"], answer: 0, explain: "Tomorrow becomes “the next day” in past reporting."},
        {q: "Indirect form of: He said, “The earth moves round the sun.”", options: ["He said that the earth moves round the sun.", "He said that the earth moved round the sun.", "He said that the earth had moved round the sun.", "He said that the earth will move round the sun."], answer: 0, explain: "A universal truth keeps its tense."},
        {q: "In indirect speech “here” changes to:", options: ["there", "here", "this", "that"], answer: 0, explain: "Here becomes there."}
      ]
    },
    {
      id: "grammar-non-finites",
      title: "Non-finites",
      section: "Grammar",
      summary: "Non-finite verb forms (infinitive, gerund and participle) do not change with the subject or show tense by themselves, and cannot be the only verb of a sentence.",
      notes: [
        {
          heading: "Infinitive",
          points: [
            "The infinitive is **to + base verb** (to read, to sing). It can act as a noun, adjective or adverb: “To err is human.” “I want to learn.”",
            "The **bare infinitive** (without to) follows modals and verbs like make, let, see, hear: “She made him laugh.”",
            "Purpose is shown with an infinitive: “He went to the market to buy fruit.”"
          ]
        },
        {
          heading: "Gerund",
          points: [
            "The gerund is the **-ing form used as a noun**: “Swimming is good exercise.”",
            "It follows prepositions: “She is fond of dancing.” It follows verbs such as enjoy, avoid, mind, finish, practise: “He enjoys reading.”",
            "Do not confuse a gerund (noun) with a present participle (adjective or verb part)."
          ]
        },
        {
          heading: "Participle",
          points: [
            "**Present participle (V-ing)** shows an action in progress: “Seeing the lion, he ran.” **Past participle (V3)** shows a completed action or a passive sense: “Tired of work, he slept.”",
            "**Perfect participle (having + V3)** shows an earlier action: “Having finished the work, he went home.”",
            "A participle used as an adjective describes a noun: a running horse, a broken window.",
            "Avoid a dangling participle: the participle must refer to the subject of the main clause."
          ]
        }
      ],
      formulas: [
        "Infinitive = to + V1; Gerund = V-ing as a noun.",
        "Present participle = V-ing; past participle = V3; perfect participle = having + V3.",
        "Enjoy, avoid, finish, mind + gerund."
      ],
      terms: [
        {term: "Non-finite verb", meaning: "A verb form that does not show tense or agree with a subject."},
        {term: "Infinitive", meaning: "The basic verb form, usually with “to” (to eat)."},
        {term: "Gerund", meaning: "A verb form ending in -ing that works as a noun."},
        {term: "Participle", meaning: "A verb form that works like an adjective or helps form tenses."},
        {term: "Dangling participle", meaning: "A participle that does not clearly refer to the subject."}
      ],
      qa: [
        {q: "Identify the non-finite: “Walking in the garden, she saw a snake.”", a: "“Walking” is a **present participle**; it describes the subject “she”."},
        {q: "Combine using a participle: He finished the work. He went home.", a: "**Having finished the work**, he went home."}
      ],
      quiz: [
        {q: "In “Swimming is a good exercise”, “swimming” is a:", options: ["gerund", "infinitive", "past participle", "finite verb"], answer: 0, explain: "The -ing form is used as a noun (subject)."},
        {q: "Choose the correct form: He enjoys ___ cricket.", options: ["playing", "to play", "play", "played"], answer: 0, explain: "Enjoy is followed by a gerund."},
        {q: "In “To err is human”, the form “to err” is a(n):", options: ["infinitive", "gerund", "participle", "modal"], answer: 0, explain: "To + base verb is an infinitive."},
        {q: "___ the bell, the students ran out.", options: ["Hearing", "Heard", "To hear", "Hears"], answer: 0, explain: "A present participle shows a quick action by the subject."},
        {q: "She made her brother ___.", options: ["laugh", "to laugh", "laughing", "laughed"], answer: 0, explain: "After make + object we use the bare infinitive."},
        {q: "___ his homework, he went out to play.", options: ["Having finished", "Finishing", "To finish", "Finish"], answer: 0, explain: "The perfect participle shows the earlier action."}
      ]
    },
    {
      id: "grammar-tenses-concord-sequence",
      title: "Tenses: Concord and Sequence",
      section: "Grammar",
      summary: "Correct use of tenses, subject-verb agreement (concord) and the sequence of tenses within a sentence.",
      notes: [
        {
          heading: "Using tenses correctly",
          points: [
            "**Simple present** for habits and facts (The sun rises in the east). **Present continuous** for actions now (She is reading).",
            "**Present perfect** for a past action linked to now (I have finished): do not use it with a past time word like yesterday.",
            "**Simple past** for finished actions (He went to Amritsar last year). **Past perfect** for the earlier of two past actions (The train had left when we reached).",
            "Use **since** (point of time) and **for** (period) with perfect tenses."
          ]
        },
        {
          heading: "Subject-verb agreement (concord)",
          points: [
            "A singular subject takes a singular verb; a plural subject a plural verb: “The boy plays.” “The boys play.”",
            "Two subjects joined by **and** take a plural verb; **each, every, either, neither** take a singular verb.",
            "With **either … or / neither … nor**, the verb agrees with the subject nearer to it.",
            "Collective nouns (team, class) take a singular verb when seen as one unit. Words like news, mathematics and physics are singular."
          ]
        },
        {
          heading: "Sequence of tenses",
          points: [
            "If the main verb is in the **past**, the verb in the subordinate clause is usually past too: “He said that he was ill.”",
            "Exception: a universal truth stays in the present: “The teacher said that the earth moves round the sun.”",
            "In conditional sentences: if + present → will: “If it rains, we will stay.” If + past → would: “If I were rich, I would help.”"
          ]
        }
      ],
      formulas: [
        "Past main verb → past subordinate verb (except universal truths).",
        "neither … nor / either … or → verb agrees with the nearer subject.",
        "Present perfect = has/have + V3; past perfect = had + V3."
      ],
      terms: [
        {term: "Concord", meaning: "Agreement between a subject and its verb."},
        {term: "Sequence of tenses", meaning: "The rules for matching tenses in the clauses of a sentence."},
        {term: "Collective noun", meaning: "A noun naming a group (team, family)."},
        {term: "Tense", meaning: "The form of a verb that shows time."},
        {term: "Conditional sentence", meaning: "A sentence with an if clause stating a condition."}
      ],
      qa: [
        {q: "Correct: “He has gone to Ludhiana yesterday.”", a: "Present perfect cannot be used with “yesterday”. Correct: “He **went** to Ludhiana yesterday.”"},
        {q: "Fill in the blank: Neither the captain nor the players ___ ready. (is/are)", a: "**Are**: the verb agrees with the nearer subject, “players”."}
      ],
      quiz: [
        {q: "Choose the correct sentence.", options: ["Mathematics is my favourite subject.", "Mathematics are my favourite subject.", "Mathematics were my favourite subject.", "Mathematics be my favourite subject."], answer: 0, explain: "Mathematics is singular in form and takes a singular verb."},
        {q: "I ___ him since 2018.", options: ["have known", "knew", "know", "am knowing"], answer: 0, explain: "Since with a point of time needs the present perfect."},
        {q: "She said that she ___ ill.", options: ["was", "is", "will be", "has been"], answer: 0, explain: "A past reporting verb needs a past tense in the clause."},
        {q: "When we reached the station, the train ___.", options: ["had left", "has left", "leaves", "is leaving"], answer: 0, explain: "Past perfect shows the earlier action."},
        {q: "Each of the boys ___ a prize.", options: ["got", "get", "are getting", "have got"], answer: 0, explain: "“Each” is singular; got works for the past with a singular subject."},
        {q: "If it rains tomorrow, we ___ at home.", options: ["will stay", "would stay", "stayed", "have stayed"], answer: 0, explain: "If + simple present takes will + base verb."}
      ]
    },
    // ───────────────────────────── VOCABULARY ─────────────────────────────
    {
      id: "vocabulary-word-power",
      title: "Word Power",
      section: "Vocabulary",
      summary: "Building vocabulary: guessing meaning from context, using one word as different parts of speech, synonyms, antonyms, homonyms and word formation.",
      notes: [
        {
          heading: "Meaning from context",
          points: [
            "Read the whole sentence; the surrounding words often hint at the meaning of a strange word.",
            "Look for clues: a contrast word (but, however) or an example, or a nearby synonym.",
            "Check that your guess fits grammatically (noun, verb, adjective) before choosing."
          ]
        },
        {
          heading: "Words as different parts of speech",
          points: [
            "Many words change their part of speech without changing spelling: **water** (noun: a glass of water; verb: to water plants), **play, walk, love, book, light**.",
            "**Round:** noun (a round of golf), adjective (a round table), preposition (round the corner).",
            "The position of the word in the sentence shows its part of speech."
          ]
        },
        {
          heading: "Synonyms, antonyms and homonyms",
          points: [
            "**Synonyms** have similar meanings: big/large, brave/courageous, quick/fast. **Antonyms** have opposite meanings: brave/cowardly, ancient/modern, expand/contract.",
            "**Homonyms** sound alike (or look alike) but differ in meaning: **be/bee, night/knight, flower/flour, write/right, sea/see, tail/tale**. Words spelt alike but with different meanings (bank, bat) are also called homonyms.",
            "Choose the synonym or antonym that fits the given context, since one word may have more than one meaning."
          ]
        },
        {
          heading: "Word formation",
          points: [
            "**Prefixes** come before a root and change its meaning: un-happy, dis-honest, im-possible, re-write, mis-use.",
            "**Suffixes** come after a root and often change the part of speech: kind → kindness (noun), act → active (adjective), beauty → beautiful, quick → quickly.",
            "Compound words join two words: sunflower, notebook, classroom."
          ]
        }
      ],
      formulas: [
        "Prefix + root; root + suffix; word + word (compound).",
        "Negative prefixes: un-, in-, im-, il-, ir-, dis-, non-.",
        "-ness, -ment, -tion form nouns; -ful, -ous, -able form adjectives; -ly forms adverbs."
      ],
      terms: [
        {term: "Synonym", meaning: "A word with a similar meaning to another."},
        {term: "Antonym", meaning: "A word with the opposite meaning."},
        {term: "Homonym", meaning: "A word that sounds or looks the same as another but means something different."},
        {term: "Prefix", meaning: "A group of letters added at the beginning of a word."},
        {term: "Suffix", meaning: "A group of letters added at the end of a word."}
      ],
      qa: [
        {q: "Use “light” as a noun and as an adjective in sentences.", a: "Noun: “Switch on the **light**.” Adjective: “This bag is **light**.”"},
        {q: "Form nouns from: kind, free, move.", a: "kind → **kindness**, free → **freedom**, move → **movement**."}
      ],
      quiz: [
        {q: "The synonym of “ancient” is:", options: ["old", "modern", "fresh", "wide"], answer: 0, explain: "Ancient means very old."},
        {q: "The antonym of “generous” is:", options: ["stingy", "kind", "rich", "gentle"], answer: 0, explain: "Stingy (unwilling to give) is the opposite of generous."},
        {q: "Choose the correct homonym: The ___ of the dog was wagging.", options: ["tail", "tale", "tall", "till"], answer: 0, explain: "Tail is the part of an animal; tale is a story."},
        {q: "Which prefix makes the opposite of “possible”?", options: ["im-", "un-", "dis-", "mis-"], answer: 0, explain: "Impossible is formed with im- (before p)."},
        {q: "In “Please water the plants”, “water” is a:", options: ["verb", "noun", "adjective", "adverb"], answer: 0, explain: "Here it names an action."},
        {q: "Which noun is formed from “happy”?", options: ["happiness", "happily", "happier", "unhappy"], answer: 0, explain: "The suffix -ness forms a noun."}
      ]
    },
    // ───────────────────────────── WRITING ─────────────────────────────
    {
      id: "writing-letter-writing",
      title: "Letter Writing",
      section: "Writing",
      summary: "How to write formal letters (to the Principal, an editor or an officer) and informal letters (to a friend or relative) in the correct format.",
      notes: [
        {
          heading: "Formal letters",
          points: [
            "Layout: sender's address, date, receiver's designation and address, subject line, salutation (Sir/Madam), body, subscription (Yours faithfully), signature and name.",
            "Use polite, formal language; no slang; short paragraphs. State the purpose in the first paragraph.",
            "Examples: leave application to the Principal, complaint to an officer about a problem such as a broken road, request to the Editor of a newspaper about a public issue."
          ]
        },
        {
          heading: "Informal letters",
          points: [
            "Layout: sender's address, date, salutation (Dear Ravi), body, subscription (Yours lovingly/Your friend), name. No receiver's address or subject line is needed.",
            "Use a friendly tone. Begin by asking about the receiver's health and news, then give your own.",
            "Examples: invite a friend to a function, congratulate a friend on a success, describe a trip."
          ]
        },
        {
          heading: "Tips",
          points: [
            "Use the address and name given in the question, or an imaginary one if the question says not to use your own name.",
            "Be clear, brief and correct; check spelling and punctuation.",
            "Close formal letters with “Yours faithfully” when you do not know the name, and “Yours sincerely” when you do."
          ]
        }
      ],
      formulas: [
        "Formal: Sir/Madam … Yours faithfully.",
        "Informal: Dear (name) … Your loving/affectionate friend.",
        "Parts: address, date, salutation, body, subscription, signature."
      ],
      terms: [
        {term: "Salutation", meaning: "The greeting at the start of a letter (Dear Sir)."},
        {term: "Subscription", meaning: "The polite closing of a letter (Yours faithfully)."},
        {term: "Subject line", meaning: "A short line stating what the formal letter is about."},
        {term: "Formal letter", meaning: "A letter to someone in an official or public capacity."},
        {term: "Informal letter", meaning: "A personal letter to a friend or relative."}
      ],
      qa: [
        {q: "How does a formal letter differ from an informal one?", a: "A formal letter has the receiver's designation and address, a subject line, a polite tone and a closing such as “Yours faithfully”. An informal letter has a friendly tone, a salutation like “Dear Ravi”, and no subject line or receiver's address."},
        {q: "Write the opening of a leave application to the Principal.", a: "To, The Principal, (School name), (Place). Subject: Application for two days' leave. Sir, I respectfully state that I am suffering from fever and cannot attend school from … to …. I request you to grant me leave. Yours obediently, (Name), Class IX."}
      ],
      quiz: [
        {q: "A letter to the Principal is a:", options: ["formal letter", "informal letter", "diary entry", "notice"], answer: 0, explain: "It is addressed to an authority."},
        {q: "Which closing suits a formal letter to an unknown person?", options: ["Yours faithfully", "Your loving friend", "Bye for now", "Yours lovingly"], answer: 0, explain: "“Yours faithfully” goes with “Sir/Madam”."},
        {q: "Which part is NOT needed in an informal letter?", options: ["Subject line", "Date", "Salutation", "Body"], answer: 0, explain: "Informal letters do not have a subject line."},
        {q: "The greeting at the start of a letter is the:", options: ["salutation", "subscription", "body", "signature"], answer: 0, explain: "Salutation means the greeting."},
        {q: "A letter inviting a friend to your birthday is:", options: ["informal", "formal", "official", "a notice"], answer: 0, explain: "It is a personal letter."},
        {q: "“Yours sincerely” is used when:", options: ["the receiver's name is known", "the receiver is unknown", "writing to a friend", "writing a notice"], answer: 0, explain: "With a named receiver (Dear Mr Singh) we close with Yours sincerely."}
      ]
    },
    {
      id: "writing-notice-and-message",
      title: "Notice and Message Writing",
      section: "Writing",
      summary: "How to write a short, clear notice for a school or society, and a brief message for a person who is absent.",
      notes: [
        {
          heading: "Notice writing",
          points: [
            "Format: the name of the institution (heading), the word **NOTICE**, date, a short title, the body (what, when, where, who may take part, any condition), then the name and designation of the person issuing it.",
            "Keep it short (about 50 words) and in the passive or neutral voice: “A debate will be held …”.",
            "Always give the date, time and place of an event, and a contact person if needed."
          ]
        },
        {
          heading: "Message writing",
          points: [
            "A message is written for a person who is not available. Format: date and time, receiver's name, the message, sender's name.",
            "Be brief (about 50 words), clear and complete. Mention who called/what is needed, when and where.",
            "Use short sentences or note form; do not write long greetings."
          ]
        },
        {
          heading: "Common topics",
          points: [
            "Notices: a sports day, a lost-and-found item, a cleanliness drive, a blood donation camp.",
            "Messages: telling a sister about a phone call, informing parents about a change of plan, a request to a friend to bring a book."
          ]
        }
      ],
      formulas: [
        "Notice: heading, date, title, body, name and designation.",
        "Message: date and time, to, message, from.",
        "Word limit about 50 words."
      ],
      terms: [
        {term: "Notice", meaning: "A short public announcement displayed or circulated."},
        {term: "Message", meaning: "A brief note left for a person who is not present."},
        {term: "Designation", meaning: "A person's official position (Principal, Secretary)."},
        {term: "Heading", meaning: "The title or name at the top of a notice."},
        {term: "Concise", meaning: "Brief and to the point."}
      ],
      qa: [
        {q: "Write a notice about a debate competition at your school.", a: "GOVERNMENT HIGH SCHOOL, (PLACE). NOTICE. (Date). Debate Competition. A debate on “Importance of Trees” will be held in the school hall on (date) at 10 a.m. Students of Classes IX and X who wish to take part should give their names to the English teacher by (date). (Name), Head Boy."},
        {q: "Write a message for your mother who is out: your friend will visit at 5 p.m.", a: "10 May, 3 p.m. Mother, your friend Mrs Kaur phoned. She will visit us at 5 p.m. today. Please be at home. Harpreet."}
      ],
      quiz: [
        {q: "A notice normally has the word ___ at the top.", options: ["NOTICE", "LETTER", "MESSAGE", "DIARY"], answer: 0, explain: "The format starts with the institution's name and the word NOTICE."},
        {q: "The ideal length of a notice is about:", options: ["50 words", "300 words", "5 words", "500 words"], answer: 0, explain: "It should be short and clear."},
        {q: "Who writes a school notice?", options: ["An authorised person such as the Head Boy or teacher", "Any visitor", "The newspaper", "A student of another school"], answer: 0, explain: "A notice must carry the name and designation of the issuer."},
        {q: "A message is written for someone who is:", options: ["not available", "present", "the Principal only", "a stranger only"], answer: 0, explain: "It is left when the person cannot be met."},
        {q: "Which detail is essential in a notice about an event?", options: ["Date, time and venue", "The writer's marks", "A long story", "A joke"], answer: 0, explain: "People need to know when and where."},
        {q: "A message should be written in:", options: ["short, clear sentences", "long paragraphs", "verse", "formal letter format"], answer: 0, explain: "It must be brief and complete."}
      ]
    },
    {
      id: "writing-paragraph-and-story",
      title: "Paragraph and Story Writing",
      section: "Writing",
      summary: "How to write a well-organised paragraph on a given topic, and a short story from an outline or beginning.",
      notes: [
        {
          heading: "Paragraph writing",
          points: [
            "A paragraph has a **topic sentence** (main idea), **supporting sentences** (details, examples) and a **concluding sentence**.",
            "Stay on the topic; arrange ideas in a logical order (for a person: who, appearance, qualities; for a place: where, features, why it is special).",
            "Use simple, correct sentences, linking words (first, then, also, finally) and the right tense."
          ]
        },
        {
          heading: "Story writing",
          points: [
            "Parts: **beginning** (characters and setting), **middle** (the problem or events), **end** (solution and moral).",
            "Use the **past tense**; include a few lines of dialogue to make it lively.",
            "Give the story a suitable **title** and end with a moral if asked.",
            "Follow the outline or hints given in the question, and keep to the word limit."
          ]
        },
        {
          heading: "Planning and checking",
          points: [
            "Spend a minute planning: note main points before writing.",
            "Check spelling, punctuation, capital letters and tense at the end."
          ]
        }
      ],
      formulas: [
        "Paragraph = topic sentence + support + conclusion.",
        "Story = beginning + middle + end (+ moral).",
        "Story tense: past."
      ],
      terms: [
        {term: "Topic sentence", meaning: "The sentence that states the main idea of a paragraph."},
        {term: "Moral", meaning: "The lesson taught by a story."},
        {term: "Setting", meaning: "The time and place of a story."},
        {term: "Dialogue", meaning: "The words spoken between characters."},
        {term: "Outline", meaning: "A list of hints that shape a story."}
      ],
      qa: [
        {q: "What are the three parts of a good paragraph?", a: "A topic sentence stating the main idea, supporting sentences with details and examples, and a concluding sentence."},
        {q: "How do you make a story interesting?", a: "Begin with a clear setting and characters, build the problem and events in order, add short dialogue, use the past tense consistently and end with a satisfying solution or moral."}
      ],
      quiz: [
        {q: "The sentence stating the main idea of a paragraph is the:", options: ["topic sentence", "concluding sentence", "title", "dialogue"], answer: 0, explain: "It introduces the central idea."},
        {q: "Stories are normally written in the:", options: ["past tense", "future tense", "imperative", "present perfect only"], answer: 0, explain: "A story narrates events that have happened."},
        {q: "The lesson of a story is its:", options: ["moral", "setting", "plot", "title"], answer: 0, explain: "A moral is the lesson."},
        {q: "A story usually has:", options: ["a beginning, middle and end", "only a beginning", "only a moral", "no characters"], answer: 0, explain: "These are the three parts."},
        {q: "When writing a paragraph on 'My School', you should:", options: ["stay on the topic", "discuss unrelated topics", "write only questions", "use no full stops"], answer: 0, explain: "Unity is essential in a paragraph."},
        {q: "Which linking word suits the end of a paragraph?", options: ["Finally", "First", "Meanwhile", "Initially"], answer: 0, explain: "Finally signals the conclusion."}
      ]
    },
    {
      id: "writing-translation",
      title: "Translation (Punjabi/Hindi to English)",
      section: "Writing",
      summary: "Tips for translating simple sentences from Punjabi or Hindi into correct English, with examples of common patterns.",
      notes: [
        {
          heading: "Basic tips",
          points: [
            "First **understand the whole sentence** and find the subject, verb and object, then build the English sentence in the order Subject + Verb + Object. In Punjabi and Hindi the verb comes at the end; in English it follows the subject.",
            "Identify the **tense** from the verb ending (e.g. present, past, future, continuous) and use the matching English form.",
            "Translate the meaning, not word by word; use a natural English phrase."
          ]
        },
        {
          heading: "Common patterns",
          points: [
            "Habitual present: Hindi “Vah roz school jata hai” becomes “He goes to school every day.”",
            "Continuous: “Main kitab padh raha hoon” becomes “I am reading a book.”",
            "Past: “Usne phal khaya” becomes “He ate fruit.” Future: “Hum kal Amritsar jayenge” becomes “We shall go to Amritsar tomorrow.”",
            "Perfect: “Maine apna kaam kar liya hai” becomes “I have finished my work.”"
          ]
        },
        {
          heading: "Common mistakes",
          points: [
            "Using the wrong preposition (“in” vs “at”) or the wrong article; revise a/an/the.",
            "Using the wrong verb form or forgetting -s with a singular third-person subject.",
            "Keep punctuation and capital letters: the first word of the sentence and “I” are always capitalised."
          ]
        }
      ],
      formulas: [
        "English order: Subject + Verb + Object (Punjabi/Hindi: Subject + Object + Verb).",
        "Check: tense, subject-verb agreement, article, preposition.",
        "Translate meaning, not word for word."
      ],
      terms: [
        {term: "Translation", meaning: "Expressing the meaning of a text in another language."},
        {term: "Subject", meaning: "The person or thing that does the action."},
        {term: "Tense", meaning: "The form of the verb showing time."},
        {term: "Idiom", meaning: "A fixed phrase whose meaning is not literal."},
        {term: "Word order", meaning: "The order in which words appear in a sentence."}
      ],
      qa: [
        {q: "Translate into English: “Meri behen roz subah sair karti hai.”", a: "My sister goes for a walk every morning."},
        {q: "Translate into English: “Hum kal school nahin jayenge.”", a: "We shall not go to school tomorrow."}
      ],
      quiz: [
        {q: "In English the normal sentence order is:", options: ["Subject + Verb + Object", "Object + Subject + Verb", "Verb + Object + Subject", "Subject + Object + Verb"], answer: 0, explain: "English places the verb after the subject."},
        {q: "“Main kitab padh raha hoon” in English is:", options: ["I am reading a book.", "I read a book.", "I have read a book.", "I will read a book."], answer: 0, explain: "The continuous form is required."},
        {q: "“Usne khana khaya” means:", options: ["He ate food.", "He eats food.", "He will eat food.", "He is eating food."], answer: 0, explain: "The verb is in the simple past."},
        {q: "Which is the better way to translate?", options: ["By meaning, sentence by sentence", "Word by word only", "By skipping difficult parts", "By guessing"], answer: 0, explain: "Translate the meaning, not isolated words."},
        {q: "“Hum kal Amritsar jayenge” in English is:", options: ["We shall go to Amritsar tomorrow.", "We went to Amritsar yesterday.", "We go to Amritsar.", "We are gone to Amritsar."], answer: 0, explain: "“Kal” with a future verb means tomorrow."},
        {q: "What should you check at the end?", options: ["Tense, agreement, articles and punctuation", "Only the length", "Only the spelling of one word", "Nothing"], answer: 0, explain: "These are the common error points."}
      ]
    },
    // ───────────────────────────── MAIN COURSE BOOK ─────────────────────────────
    {
      id: "grooming-of-a-boy",
      title: "Grooming of a Boy",
      section: "Main Course Book",
      summary: "A letter attributed to Abraham Lincoln, written to his young son's teacher. He asks the teacher to help mould the boy into a good human being: honest, brave, independent in thought, kind and humble, yet firm when he knows he is right.",
      source: "English Main Course Book IX (PSEB, 2023–24) Ch 1, pp. 1–5",
      notes: [
        {
          heading: "The setting and the request",
          points: [
            "Abraham Lincoln (1809–1865), later the 16th President of the United States, writes to his son's teacher as the boy begins school.",
            "He admits that the teacher will have to teach the boy hard truths: **not all people are just or true**.",
            "But he asks that the boy also be shown the other side: for every rascal there is a hero, for every selfish politician a dedicated leader, for every enemy a friend.",
            "He ends modestly: it is a big request, but he asks the teacher to see what can be done for his dear little son."
          ]
        },
        {
          heading: "What the father wants taught",
          points: [
            "Money earned by honest work is worth more than money found by luck; the boy should learn to accept defeat gracefully and to enjoy winning.",
            "He should keep away from envy, learn quiet laughter, and know that bullies are the easiest to defeat.",
            "He should enjoy books but also have quiet time to wonder at birds, bees and flowers.",
            "In school it is more honourable to fail than to cheat.",
            "He should trust his own ideas even when everyone calls them wrong, and not follow the crowd; he should listen to all but filter what he hears through the 'screen of truth'."
          ]
        },
        {
          heading: "Character qualities in the letter",
          points: [
            "**Gentle and tough in the right measure:** gentle with the gentle, tough with the tough; the boy may cry without shame and laugh even when sad.",
            "**Self-respect:** he may sell his skills and intelligence to the highest bidder but must never put a price on his heart and soul.",
            "**Courage and patience:** to stand and fight for what he believes is right; to be brave enough to be impatient and patient enough to be brave.",
            "**Faith in himself**, which leads to faith in mankind.",
            "A child should be treated gently but not over-pampered, because only the test of fire makes fine steel."
          ]
        }
      ],
      formulas: [
        "Writer: Abraham Lincoln (16th US President), to his son's teacher.",
        "Honesty first: better to fail than to cheat.",
        "Never put a price on one's heart and soul.",
        "Faith in oneself leads to faith in mankind."
      ],
      terms: [
        {term: "Scoundrel", meaning: "A dishonest, unprincipled person."},
        {term: "Bully", meaning: "A person who uses strength to frighten or hurt weaker people."},
        {term: "Cynic", meaning: "A person who believes that everyone acts only from selfish motives."},
        {term: "Ponder", meaning: "To think about something carefully for a long time."},
        {term: "Sublime", meaning: "Of the highest kind; noble."},
        {term: "Dedicated", meaning: "Committed to a cause or duty."}
      ],
      qa: [
        {q: "Why does Lincoln remain hopeful even though not all people are just and true?", a: "He believes the world balances bad people with good ones: for every scoundrel there is a hero, for every selfish politician a dedicated leader and for every enemy a friend. So he wants his son to see both sides and keep hope."},
        {q: "Why does Lincoln ask the teacher not to cuddle his son?", a: "He feels that too much pampering weakens a child. Only the test of fire makes fine steel, so the boy should be treated gently but allowed to face difficulties and grow strong."},
        {q: "List any four qualities that make a good human being according to the lesson.", a: "Honesty (preferring failure to cheating), courage to stand for what is right, independent thinking, kindness and gentleness, freedom from envy, and faith in oneself and in mankind."}
      ],
      quiz: [
        {q: "The letter in the lesson is addressed to:", options: ["the boy's teacher", "the boy himself", "a newspaper editor", "the boy's mother"], answer: 0, explain: "A father asks his son's teacher to mould the boy."},
        {q: "According to the letter, it is more honourable in school to:", options: ["fail than to cheat", "cheat than to fail", "copy than to ask", "win than to lose"], answer: 0, explain: "Honesty matters more than success."},
        {q: "The father says the boy should never put a price tag on his:", options: ["heart and soul", "time", "books", "talent"], answer: 0, explain: "He may sell his skills but not his conscience."},
        {q: "'Only the test of fire makes fine steel' is said to explain why the boy should:", options: ["not be over-pampered", "avoid all work", "obey everyone", "dislike books"], answer: 0, explain: "Difficulty builds strength, as fire does for steel."},
        {q: "The writer of the letter was:", options: ["Abraham Lincoln", "George Washington", "Winston Churchill", "Nelson Mandela"], answer: 0, explain: "The letter is attributed to Lincoln."}
      ]
    },
    {
      id: "plants-also-breathe-and-feel",
      title: "Plants also Breathe and Feel",
      section: "Main Course Book",
      summary: "A lesson on the scientist Jagadish Chandra Bose, who built the crescograph, an instrument that records the growth of plants, and showed that plants respond to light, noise, manure and other stimuli much as living creatures do. It also tells of his fight for equal pay and his love for India.",
      source: "English Main Course Book IX (PSEB, 2023–24) Ch 2, pp. 6–11",
      notes: [
        {
          heading: "The discovery and the crescograph",
          points: [
            "Scientists at the **Paris Congress of Science (1900)** were amazed by an instrument that could measure the growth of plants. Its inventor, Jagadish Chandra Bose, called it the **crescograph**.",
            "When asked where it was made, he answered 'In India'. The reply surprised them, since India was known for arts, literature and philosophy but had not advanced much in science.",
            "The crescograph magnifies the movement of plant tissues about **ten thousand times** and records how plants react to manures, noise and other stimuli.",
            "The lesson says it showed that plants have a sense of sight, react to rays of light and wireless waves, and even sense when a stranger approaches."
          ]
        },
        {
          heading: "Bose's life and struggle",
          points: [
            "Bose was born in 1858 in a Bengal village, studied Physics at Calcutta University, graduated from Cambridge, and became Professor of Physics at Presidency College, Calcutta.",
            "In British days an Indian was paid two-thirds of a European professor's salary; as Bose's post was temporary he was offered only half. He believed that **equal work deserves equal pay** and refused to touch any of his salary for three years.",
            "After a three-year struggle he won. The lesson says that discoveries come from doubters and rebels, not from yes-men; Bose was a rebel by nature."
          ]
        },
        {
          heading: "Unity of nature",
          points: [
            "His wireless receiver seemed to get 'tired' after long use and recovered after rest, which set him thinking about living and non-living things.",
            "Until the Middle Ages the world was seen as one unity; after Galileo and Newton sciences were studied separately. Bose again saw a **unity** in all of nature and said animals, plants and minerals have much in common.",
            "People laughed at him, but he proved his ideas with the crescograph."
          ]
        },
        {
          heading: "His love for India",
          points: [
            "He had deep faith in the ability of Indians. At the University of Mysore convocation in **November 1927** he said that India's past glory came from action, not idleness.",
            "He believed no individual can be happy until happiness is won for all, and wanted his countrymen to keep undying hope and faith in the future."
          ]
        }
      ],
      formulas: [
        "Scientist: Sir Jagadish Chandra Bose (1858–1937); instrument: crescograph.",
        "Shown at the Paris Congress of Science, 1900; magnifies growth about 10,000 times.",
        "Fought three years for equal pay; refused his salary meanwhile.",
        "Bose Institute, Calcutta, founded 1917."
      ],
      terms: [
        {term: "Crescograph", meaning: "An instrument by Bose that magnifies and records plant growth."},
        {term: "Stimulus", meaning: "Anything that causes a living thing to react (plural: stimuli)."},
        {term: "Rebel", meaning: "A person who goes against accepted rules or ideas."},
        {term: "Indomitable", meaning: "Unable to be defeated; here, refers to spirit."},
        {term: "Unique", meaning: "Matchless; having no equal."},
        {term: "Undying", meaning: "Everlasting; never fading."}
      ],
      qa: [
        {q: "Why were the scientists at the Paris Congress surprised?", a: "They were amazed by an instrument that could measure plant growth and show that plants respond like living beings. They were even more surprised that it was made in India, a country not then known for science."},
        {q: "Why did Bose refuse his salary for three years?", a: "As an Indian professor he was offered a lower salary than a European doing the same work. He felt that equal work should get equal pay, so he refused to touch any salary for three years until he won."},
        {q: "What did Bose believe about living and non-living things?", a: "He believed that animals, plants and minerals are one and have much in common. His wireless receiver seemed to tire and recover, and he held that plants and metals too could be 'tired' or 'happy'."}
      ],
      quiz: [
        {q: "The instrument invented by Bose to measure plant growth is the:", options: ["crescograph", "telescope", "stethoscope", "barometer"], answer: 0, explain: "The crescograph magnifies tiny plant movements."},
        {q: "The crescograph was shown to scientists at:", options: ["the Paris Congress of Science, 1900", "a Delhi fair", "the Royal Society, 1858", "Calcutta University, 1947"], answer: 0, explain: "The great men at Paris were amazed."},
        {q: "Bose refused his salary for three years because he wanted:", options: ["equal pay for equal work", "a higher post", "a holiday", "a new laboratory"], answer: 0, explain: "He fought against unequal pay for Indians."},
        {q: "Bose spoke at the University of Mysore convocation in:", options: ["November 1927", "March 1900", "May 1858", "January 1947"], answer: 0, explain: "He spoke of India's past glory and future hope."},
        {q: "After Cambridge, Bose became a professor of Physics at:", options: ["Presidency College, Calcutta", "Delhi University", "Mysore University", "Oxford"], answer: 0, explain: "He returned to India as Professor at Presidency College."}
      ]
    },
    {
      id: "budgeting-your-time",
      title: "Budgeting Your Time",
      section: "Main Course Book",
      summary: "An essay by Dr D. V. Jindal arguing that time is even more powerful than money, because lost money can be regained but lost time never returns. It urges punctuality, doing work 'now', and treating every second as precious.",
      source: "English Main Course Book IX (PSEB, 2023–24) Ch 3, pp. 14–19",
      notes: [
        {
          heading: "Time is more valuable than money",
          points: [
            "People say money is the most important thing, but the power of time is greater: money lost can be regained, **time lost is lost for ever**.",
            "'Time and tide wait for none.' One must take time by the forelock (make the best use of it) or be doomed.",
            "The essay recalls Shakespeare's lines (from Julius Caesar) that there is a tide in human affairs which, if taken at the flood, leads to fortune; if missed, life is bound in shallows and miseries.",
            "A rare precious moment can make or mar a person's future, so it must not pass unnoticed."
          ]
        },
        {
          heading: "Every second counts",
          points: [
            "Seconds add up to minutes, hours, days and months; 'many a trickle makes a mickle'. Not saving them means wasting a lot of time.",
            "Life is short and uncertain: 'art is long and time is fleeting'. There is much to do and little time.",
            "Those who waste time have to repent later, when there is no remedy."
          ]
        },
        {
          heading: "Punctuality and 'Now'",
          points: [
            "Punctuality is needed in all activities; those who are behind time lag behind in life. Being late may cost a train, a flight, a job or admission to a good course.",
            "It is no use crying over spilt milk or blaming the stars for failure that is one's own.",
            "In the Mahabharata, Yaksha asked Yudhishthira the best time for doing a thing; the answer was **'Now'**. 'Now or Never' should be our guiding principle.",
            "In an age of globalisation, super-computers and space travel, even a fraction of a second can spell disaster, so budgeting one's time is catching on."
          ]
        },
        {
          heading: "Message",
          points: [
            "We can hope for a good tomorrow only if we know the value of today.",
            "We owe a happy and prosperous future to coming generations, which is possible only if we value the present.",
            "Author: Dr D. V. Jindal, who has written many books on English and taught it for over forty years."
          ]
        }
      ],
      formulas: [
        "Money lost can be regained; time lost is lost for ever.",
        "Yudhishthira's answer to Yaksha: the best time is 'Now'.",
        "Guiding principle: 'Now or Never'.",
        "Author: Dr D. V. Jindal."
      ],
      terms: [
        {term: "Take time by the forelock", meaning: "To make the best use of time; to act without delay."},
        {term: "Make or mar", meaning: "To bring complete success or complete ruin."},
        {term: "Squander", meaning: "To waste carelessly."},
        {term: "Punctual", meaning: "Doing things at the proper time."},
        {term: "Detrimental", meaning: "Harmful."},
        {term: "Prosperous", meaning: "Successful and having good fortune."}
      ],
      qa: [
        {q: "Why does the author say time is greater than money?", a: "Money that is lost can be earned again, but time once lost never returns. Time also waits for nobody, so its power is greater."},
        {q: "What question did Yaksha ask Yudhishthira and what was the reply?", a: "Yaksha asked what is the best time for doing a thing. Yudhishthira, the wise son of Kunti, replied 'Now', meaning the present is the most important time to do the work in hand."},
        {q: "Why is punctuality important?", a: "Those who are late lag behind in life and may miss a train, a flight, a job or an admission. An opportunity missed is lost for ever, and blaming others or the stars afterwards is useless."}
      ],
      quiz: [
        {q: "The author says that, unlike money, time once lost:", options: ["can never be regained", "can be borrowed", "can be saved in a bank", "returns next year"], answer: 0, explain: "Time lost is lost for ever."},
        {q: "Yudhishthira told Yaksha the best time for doing a thing is:", options: ["Now", "Tomorrow", "Morning", "Never"], answer: 0, explain: "The present is the most important time."},
        {q: "The lines 'There is a tide in the affairs of men' are attributed in the essay to:", options: ["Shakespeare", "Wordsworth", "Tagore", "Keats"], answer: 0, explain: "They come from Shakespeare's Julius Caesar."},
        {q: "'Many a trickle makes a mickle' is used to stress the value of:", options: ["saving every second", "heavy rain", "spending money", "big efforts only"], answer: 0, explain: "Small bits of time add up."},
        {q: "The guiding principle suggested for life is:", options: ["Now or Never", "Wait and watch", "Slow and steady", "Better late than never"], answer: 0, explain: "The essay states 'Now or Never'."}
      ]
    },
    {
      id: "journey-by-night",
      title: "Journey by Night",
      section: "Main Course Book",
      summary: "A true-to-life adventure story by Norah Burke. Twelve-year-old Sher Singh carries his seriously ill little brother Kunwar through eighty kilometres of dangerous jungle at night, past elephants and a flooded river, to the hospital at Kalaghat, and earns the title 'Bahadur' (the Brave).",
      source: "English Main Course Book IX (PSEB, 2023–24) Ch 4, pp. 20–26",
      notes: [
        {
          heading: "Outline of the story",
          points: [
            "Kunwar, Sher Singh's younger brother, lies in their hut at Laldwani village with a worsening stomach pain. Hot cloths do not help; their mother says he must be taken to the hospital at Kalaghat.",
            "Sher Singh knows that jungle people go to hospital only as a last resort, so he understands that his brother is dying. His father, the famous hunter Sher Singh Bahadur, is away with an expedition, and every man of the village is away as a beater.",
            "His mother must stay to look after the cattle and the land. She makes a sling from one of her two saris, and Sher Singh sets out at dusk with Kunwar on his back, hoping for a lift on a bullock cart or truck at the end.",
            "At night he sees bear tracks and rests on a cliff above a river-bed. A herd of elephants with a big tusker passes below; the tusker senses the boys but, after a tense moment, moves on angrily.",
            "At the second river, swollen by melted snow, the bamboo bridge has been drowned and then broken by a floating tree. Sher Singh ties himself and Kunwar together with a grass rope and struggles across, keeping the child's head above water.",
            "Exhausted, he stumbles to a road and a village; people help them onto a bullock cart and then a truck to the hospital. The doctor, hearing who he is, calls him Sher Singh Bahadur and says Kunwar will live."
          ]
        },
        {
          heading: "Characters",
          points: [
            "**Sher Singh:** a small, cheerful, twelve-year-old child of the jungle; brave, responsible, determined and prayerful.",
            "**Kunwar:** his much younger brother, burning with fever and half-conscious.",
            "**The mother:** calm and strong; she has lost other children to cholera and influenza yet does not weep.",
            "**The father:** a well-known hunter who earned the title 'Bahadur' and carries a scar from rescuing a comrade from a tiger."
          ]
        },
        {
          heading: "Themes and author",
          points: [
            "**Courage and responsibility:** bravery does not depend on age; love for a brother gives strength.",
            "**Determination against nature:** wild animals, darkness and a flooded river cannot stop a boy with a mission.",
            "**Poverty and hardship** of jungle families, far from medical help.",
            "Author **Norah Burke** was a 20th-century British writer who lived for years near the Himalayan forests."
          ]
        }
      ],
      formulas: [
        "Author: Norah Burke. Place: Laldwani village to Kalaghat hospital, 80 km.",
        "Sher Singh is 12; his father's title 'Bahadur' means the Brave.",
        "Obstacles: bear tracks, elephant herd, a tiger's prints, a flooded second river.",
        "Ending: the doctor says Kunwar will live and names Sher Singh 'Bahadur'."
      ],
      terms: [
        {term: "Sling", meaning: "A strip of cloth used to carry a load on the back or shoulder."},
        {term: "Tusker", meaning: "An elephant with large tusks."},
        {term: "Delirious", meaning: "Confused and talking wildly because of high fever."},
        {term: "Maelstrom", meaning: "A powerful whirlpool."},
        {term: "Beater", meaning: "A man who drives animals from the jungle towards hunters."},
        {term: "Poach", meaning: "To hunt animals illegally."}
      ],
      qa: [
        {q: "Why did Sher Singh have to carry his brother to the hospital himself?", a: "His father was away on an expedition and all the village men were away as beaters. His mother had to stay to look after the cattle and land, otherwise the family would starve, so only Sher Singh could take Kunwar."},
        {q: "How did Sher Singh cross the second river?", a: "The bridge was drowned and broken by a floating tree. He tied Kunwar to himself with a rope plaited from grass, entered the water above the bridge, and edged along the wreck, struggling against the cold and the logs while holding the child's head above water."},
        {q: "Write a short character sketch of Sher Singh.", a: "Sher Singh is only twelve but brave, caring and determined. He faces the dark jungle, a wild elephant herd and a flooded river without turning back, prays when frightened, and does not give up until his brother is safe. He is also modest: he feels shy of the big hospital, and he earns the title 'Bahadur' like his father."}
      ],
      quiz: [
        {q: "Sher Singh set out for the hospital at:", options: ["Kalaghat", "Laldwani", "Dehradun", "Amritsar"], answer: 0, explain: "Kalaghat was 80 kilometres away."},
        {q: "Why were there no men in Laldwani?", options: ["They were away with the hunting expedition as beaters", "They were at a fair", "They were ill", "They had left the village for good"], answer: 0, explain: "The men had gone into the jungle with the expedition."},
        {q: "How did Sher Singh carry Kunwar?", options: ["In a sling made from his mother's sari", "On a cart", "On a horse", "In a basket"], answer: 0, explain: "His mother made a sling from one of her two saris."},
        {q: "What stopped him at the second river?", options: ["A flood had drowned the bridge", "A tiger", "A broken boat", "Heavy fog"], answer: 0, explain: "Melted snow flooded the river and the bridge was broken."},
        {q: "What did the doctor call Sher Singh at the end?", options: ["Sher Singh Bahadur, the Brave", "A hunter", "A beater", "A fool"], answer: 0, explain: "He earned the title his father already held."}
      ]
    },
    {
      id: "the-discovery-of-moon",
      title: "The Discovery of Moon",
      section: "Main Course Book",
      summary: "An informative lesson on the exploration of the Moon: the first landing by American astronauts in 1969, the Soviet use of robot spacecraft, what research has shown about the Moon's surface and conditions, and some basic facts about our natural satellite.",
      source: "English Main Course Book IX (PSEB, 2023–24) Ch 5, pp. 29–34",
      notes: [
        {
          heading: "The landing and the space race",
          points: [
            "On **20 July 1969** two American astronauts, **Neil Armstrong and Edwin (Buzz) Aldrin**, became the first humans to set foot on the Moon during the Apollo-11 mission. They collected lunar soil and left instruments that kept sending data to Earth.",
            "A third astronaut, **Michael Collins**, stayed in orbit around the Moon waiting for them. (The lesson speaks of Apollo-11 and 'Eagle-2'; in the actual mission the landing craft was called Eagle and the orbiting craft Columbia.)",
            "More Apollo flights followed and corrected many wrong ideas about the Moon.",
            "The USA and the USSR planned lunar exploration: the USA sent astronauts, while the Soviet Union sent unmanned spacecraft."
          ]
        },
        {
          heading: "Soviet robots and what research found",
          points: [
            "The Soviet Union felt it unnecessary to risk human life; in **September 1970** it sent **Luna-16**, which carried a robot onto the Moon's surface. A robot can do experiments as well as a man, is cheaper and does not endanger life.",
            "Research over three decades broke old beliefs: the Moon is a **desolate place with no water and no air**, and was declared unfit for human habitation.",
            "Useful metals such as **aluminium, titanium and iron** are found there, though nobody has been tempted to mine them. Some scientists think it could become habitable if oxygen were separated from oxygen-bearing materials."
          ]
        },
        {
          heading: "Facts about the Moon",
          points: [
            "It is the Earth's only natural satellite, about a quarter of the Earth's diameter (**3476 km**), and **384,405 km** away.",
            "It orbits the Earth once a month, always keeping the same face towards us. Its surface is pitted with craters made by meteorites.",
            "It is about **4,600 million years old**, the same age as the Earth, and is not self-luminous; it shines by reflecting sunlight.",
            "Different parts of its sunlit half are seen as it orbits, giving the **phases of the moon**; moonrise and moonset are about 50 minutes later each day.",
            "It has no atmosphere; daytime rock temperature reaches about 110 °C, while in shadow it falls below -100 °C.",
            "Despite these 'dull' facts, poets and lovers still sing of its beauty."
          ]
        }
      ],
      formulas: [
        "First landing: 20 July 1969; Armstrong and Aldrin; Collins in orbit.",
        "Luna-16: Soviet unmanned craft, September 1970.",
        "Diameter 3476 km; distance 384,405 km; age about 4,600 million years.",
        "No air, no water; temperatures about 110 °C to below -100 °C."
      ],
      terms: [
        {term: "Astronaut", meaning: "A person trained to travel in a spacecraft."},
        {term: "Satellite", meaning: "A body that orbits a larger one; the Moon is Earth's natural satellite."},
        {term: "Desolate", meaning: "Empty, barren and lifeless."},
        {term: "Inhabitable", meaning: "Fit for people to live in."},
        {term: "Misconception", meaning: "A wrong idea based on a misunderstanding."},
        {term: "Crater", meaning: "A bowl-shaped hollow, here made by a meteorite hitting the Moon."}
      ],
      qa: [
        {q: "Who were the first men on the Moon and when did they land?", a: "Neil Armstrong and Edwin (Buzz) Aldrin of the American Apollo-11 mission landed on 20 July 1969. Michael Collins waited in orbit."},
        {q: "Why did the Soviet Union send robots instead of men?", a: "It thought it more suitable to explore with machines. A robot can carry out experiments as well as a man, it costs less, and human life is not put in danger."},
        {q: "Why is the Moon unfit for human life?", a: "It has no air and no water, and its temperature swings from about 110 °C in sunlight to below -100 °C in shadow, so research has declared it unfit for living."}
      ],
      quiz: [
        {q: "The first men to set foot on the Moon were:", options: ["Armstrong and Aldrin", "Collins and Gagarin", "Armstrong and Collins", "Aldrin and Shepard"], answer: 0, explain: "Collins stayed in orbit."},
        {q: "The Soviet spacecraft sent in September 1970 was:", options: ["Luna-16", "Apollo-11", "Sputnik", "Voyager"], answer: 0, explain: "Luna-16 carried a robot to the Moon."},
        {q: "Which metal is NOT named in the lesson as found on the Moon?", options: ["Gold", "Aluminium", "Titanium", "Iron"], answer: 0, explain: "The lesson names aluminium, titanium and iron."},
        {q: "The Moon's distance from the Earth is about:", options: ["384,405 km", "3,476 km", "4,600 km", "50 km"], answer: 0, explain: "3476 km is its diameter."},
        {q: "The Moon shines because it:", options: ["reflects sunlight", "makes its own light", "burns gas", "is hot inside"], answer: 0, explain: "It is not self-luminous."}
      ]
    },
    {
      id: "three-great-indians",
      title: "Three Great Indians",
      section: "Main Course Book",
      summary: "Short biographical sketches of three freedom fighters: Satguru Ram Singh, founder of the Kuka (Namdhari) movement; Rani Laxmi Bai of Jhansi, heroine of 1857; and Udham Singh, who avenged the Jallianwala Bagh massacre.",
      source: "English Main Course Book IX (PSEB, 2023–24) Ch 6, pp. 37–44",
      notes: [
        {
          heading: "I. Satguru Ram Singh",
          points: [
            "Born on **3 February 1816** at Raiyan village, Ludhiana. Guru Balak Singh declared him a guru, and he preached from **Bhaini Sahib**; his first sermon was on Baisakhi 1857.",
            "He taught belief in one God, simple honest living, helping the poor and working for the country's freedom; he opposed child marriage, female foeticide, dowry, intoxicants, casteism and fanaticism.",
            "Against the British 'Divide and Rule' he gave the slogan 'Unite and Fight', began non-cooperation and boycott, and promoted 'Be Indian, buy Indian'.",
            "'Kuka' means a roar; his followers became known as Kukas or **Namdharis**. In 1871 nine Namdhari Sikhs were hanged, and in 1872 sixty-five were blown from cannons at Malerkotla, among them a twelve-year-old, Bishan Singh, who refused pardon in return for disowning the cause.",
            "Satguru Ram Singh was arrested and exiled to Burma; his followers still preach brotherhood, unity and simple living."
          ]
        },
        {
          heading: "II. Rani Laxmi Bai",
          points: [
            "The Rani of Jhansi became the most popular leader of the **First War of Independence (1857)**; even her enemies admired her spirit, and folk songs and ballads honour her.",
            "Her childhood name was **Manikarnika (Manu)**. Born in Varanasi, she grew up at Bithur, learning horse-riding and martial arts, and married Raja Gangadhar Rao of Jhansi. Her young son and her husband both died.",
            "She adopted a son, but the British, under the 'Policy of Lapse', refused to recognise him and annexed Jhansi. In June 1857 the sepoys at Jhansi rebelled and the Rani took charge.",
            "Sir Hugh Rose besieged Jhansi; she left the fort and joined **Tantia Tope** at Kalpi, where they were again defeated. She was fatally wounded in battle in **June 1858** and died fighting."
          ]
        },
        {
          heading: "III. Udham Singh",
          points: [
            "Born in **1899** at Sunam, district Sangrur, Punjab; jailed several times for anti-government activity.",
            "The Jallianwala Bagh massacre at Amritsar on Baisakhi 1919, where a peaceful gathering was fired on, haunted him, and he vowed to avenge it.",
            "After reaching England in 1937 he shot **Sir Michael O'Dwyer**, the former Punjab governor, in London on **13 March 1940**, in front of a crowd. (The lesson calls the victim the officer who ordered the firing; historically General Dyer gave that order, while O'Dwyer, the Lieutenant-Governor, supported it.)",
            "He was arrested, tried and hanged in July 1940. His life teaches unity and warns against dividing people in the name of religion."
          ]
        }
      ],
      formulas: [
        "Ram Singh: born 3 Feb 1816; Kuka (Namdhari) movement; exiled to Burma.",
        "Rani Laxmi Bai: Manikarnika; Jhansi; died June 1858; ally: Tantia Tope.",
        "Udham Singh: born 1899 at Sunam; Jallianwala Bagh 1919; London 13 March 1940.",
        "Slogans: 'Unite and Fight'; 'Be Indian, buy Indian'."
      ],
      terms: [
        {term: "Kuka", meaning: "A Punjabi word meaning 'roar'; name of Satguru Ram Singh's followers."},
        {term: "Policy of Lapse", meaning: "A British rule by which a state without a natural heir could be annexed."},
        {term: "Annex", meaning: "To take over a territory and add it to one's own."},
        {term: "Martyr", meaning: "A person who dies for a cause or belief."},
        {term: "Indomitable", meaning: "Impossible to defeat or subdue."},
        {term: "Avenge", meaning: "To punish someone for a wrong done to oneself or others."}
      ],
      qa: [
        {q: "What did Satguru Ram Singh teach his followers?", a: "He taught them to believe in one God, live simply and honestly, help the poor and work for the freedom of the country. He opposed social evils such as child marriage, dowry, female foeticide, casteism and intoxicants."},
        {q: "How did the Rani of Jhansi come to fight the British?", a: "After her husband and son died, the British refused to recognise her adopted son and annexed Jhansi. When the sepoys revolted in 1857, she took command, defended Jhansi against Sir Hugh Rose and then joined Tantia Tope at Kalpi."},
        {q: "Why did Udham Singh go to England and what did he do there?", a: "He wanted to avenge the Jallianwala Bagh massacre of 1919. He went to England in 1937 and in March 1940 shot Sir Michael O'Dwyer in London. He was arrested and later hanged."}
      ],
      quiz: [
        {q: "Satguru Ram Singh's headquarters were at:", options: ["Bhaini Sahib", "Jhansi", "Sunam", "Kalpi"], answer: 0, explain: "He preached from Bhaini Sahib in Ludhiana district."},
        {q: "The word 'Kuka' means:", options: ["a roar", "a soldier", "a saint", "a flag"], answer: 0, explain: "Followers who raised a loud voice came to be called Kukas."},
        {q: "The childhood name of Rani Laxmi Bai was:", options: ["Manikarnika", "Padmini", "Savitri", "Durgavati"], answer: 0, explain: "She was also called Manu."},
        {q: "Rani Laxmi Bai joined her forces at Kalpi with:", options: ["Tantia Tope", "Bahadur Shah", "Nana Sahib alone", "Hugh Rose"], answer: 0, explain: "Tantia Tope was her ally."},
        {q: "Udham Singh was born at:", options: ["Sunam", "Raiyan", "Varanasi", "Amritsar"], answer: 0, explain: "Sunam is in Sangrur district."}
      ]
    },
    {
      id: "the-death-of-abhimanyu",
      title: "The Death of Abhimanyu",
      section: "Main Course Book",
      summary: "An episode from the Mahabharata, retold from S. B. Srivastava: Drona becomes the Kaurava commander, and on the thirteenth day of the war the young Abhimanyu enters his chakravyuha, fights heroically and is killed. Arjuna then vows to avenge him and kills Jayadratha.",
      notes: [
        {
          heading: "Background",
          points: [
            "After Bhishma fell, Karna declined to become Kaurava commander in favour of the older, more experienced **Drona**, whom Duryodhana asked to plan to capture Yudhishthira. On the eleventh day Susharma's sons attacked Arjuna so that Drona could try for Yudhishthira, but Bhima helped save the day.",
            "Abhimanyu was the young son of **Arjuna** and **Subhadra** and a nephew of Krishna.",
            "On the thirteenth day of the war the Kauravas' commander **Drona** arranged his army in the **chakravyuha**, a circular, many-layered battle formation that only a few warriors could break.",
            "Only Arjuna, Krishna, Pradyumna and Abhimanyu knew how to pierce it. Arjuna was drawn away to fight Susharma's sons, Pradyumna was far off and Krishna would not fight."
          ]
        },
        {
          heading: "The battle",
          points: [
            "Yudhishthira asked Abhimanyu to break the formation. He knew how to enter but not how to get out, and agreed, with the promise that the others would follow him in.",
            "Abhimanyu cut through the ranks and fought with great courage, but **Jayadratha** blocked the other Pandavas from following.",
            "Surrounded, he was attacked by several Kaurava warriors together, against the rules of fair war. After he lost his chariot and weapons he fought on with a chariot wheel, and was finally killed."
          ]
        },
        {
          heading: "Aftermath and themes",
          points: [
            "Arjuna, grief-stricken, vowed to kill Jayadratha before sunset the next day or end his own life. Jayadratha, terrified, was guarded by the whole Kaurava army, and Duryodhana fought Arjuna in a duel wearing a magic armour.",
            "Krishna covered the sun with thick mist so that the Kauravas thought it had set; Arjuna then reached Jayadratha at the centre of the army and killed him, avenging Abhimanyu.",
            "The episode shows **courage, duty and sacrifice**, and the tragedy of a young hero.",
            "It also shows the breaking of fair rules of war and the cost of treachery."
          ]
        }
      ],
      formulas: [
        "Abhimanyu: son of Arjuna and Subhadra.",
        "Day 13 of the Kurukshetra war; formation: chakravyuha, arranged by Drona.",
        "Jayadratha, king of the Sindhus, dealt the final blow; Arjuna killed him the next day."
      ],
      terms: [
        {term: "Chakravyuha", meaning: "A circular, wheel-like battle formation in the Mahabharata."},
        {term: "Kurukshetra", meaning: "The battlefield of the Mahabharata war."},
        {term: "Valour", meaning: "Great courage in battle."},
        {term: "Vow", meaning: "A solemn promise."},
        {term: "Martyr", meaning: "One who dies for a cause or duty."}
      ],
      qa: [
        {q: "Why was Abhimanyu sent into the chakravyuha?", a: "Arjuna had been drawn away from the field, and Abhimanyu was the only other Pandava warrior who knew how to break the formation. He agreed because the others promised to follow him."},
        {q: "How did Abhimanyu die?", a: "After Jayadratha stopped the Pandavas from following, Abhimanyu was surrounded and attacked by several warriors together. Even after losing his chariot and weapons he fought on bravely, but he was finally killed."}
      ],
      quiz: [
        {q: "Abhimanyu was the son of:", options: ["Arjuna", "Bhima", "Yudhishthira", "Karna"], answer: 0, explain: "His parents were Arjuna and Subhadra."},
        {q: "The formation Abhimanyu entered was the:", options: ["chakravyuha", "garuda vyuha", "sagar", "matsya"], answer: 0, explain: "The wheel-shaped chakravyuha was arranged by Drona."},
        {q: "Which warrior blocked the Pandavas from following Abhimanyu?", options: ["Jayadratha", "Bhishma", "Shalya", "Ashwatthama"], answer: 0, explain: "Jayadratha held back the other Pandavas."},
        {q: "Abhimanyu did not know how to:", options: ["come out of the chakravyuha", "enter the chakravyuha", "ride a chariot", "use a bow"], answer: 0, explain: "He knew how to enter but not how to leave."},
        {q: "After his death Arjuna vowed to:", options: ["kill Jayadratha", "leave the war", "forgive the Kauravas", "crown Yudhishthira"], answer: 0, explain: "Arjuna swore to kill Jayadratha before the next sunset."}
      ]
    },
    // ───────────────────────────── POEMS ─────────────────────────────
    {
      id: "open-thy-eyes-and-see-thy-god",
      title: "Open Thy Eyes and See Thy God",
      section: "Poems",
      summary: "A poem by Rabindranath Tagore (from Gitanjali) saying that God is not found in empty rituals in a closed temple but with the humble workers who toil on the soil, and that we should serve people rather than only chant and pray.",
      notes: [
        {
          heading: "Central idea",
          points: [
            "The poet tells a worshipper to stop merely chanting prayers and counting beads in a dark corner of a temple with the doors shut.",
            "God is with the farmer who tills the hard ground and the labourer who breaks stones to make the road; He shares their sun and rain and has dust on His clothes.",
            "True worship is honest work and service to others, not showy ritual."
          ]
        },
        {
          heading: "Message",
          points: [
            "The poet asks the worshipper to give up fine robes and to come out onto the dusty earth to work with the toilers.",
            "Freedom (deliverance) is not found by renouncing the world: the Master himself has joyfully taken on the bonds of creation and is bound with us all for ever.",
            "**Dignity of labour:** the working man is closer to God than the idle priest."
          ]
        },
        {
          heading: "About the poet",
          points: [
            "Rabindranath Tagore (1861–1941) was a Bengali poet, writer, painter and educator. He won the **Nobel Prize in Literature in 1913** for Gitanjali, the first non-European to do so.",
            "He founded Santiniketan (Visva-Bharati). He also wrote the national anthems of India and Bangladesh."
          ]
        }
      ],
      formulas: [
        "Poet: Rabindranath Tagore; collection: Gitanjali (Nobel Prize 1913).",
        "Theme: God lives with the toiling poor, not in empty ritual.",
        "Tone: gentle, devotional and reforming."
      ],
      terms: [
        {term: "Gitanjali", meaning: "Tagore's collection of devotional poems, meaning “song offerings”."},
        {term: "Toiler", meaning: "A person who works hard, especially with the hands."},
        {term: "Ritual", meaning: "A fixed religious ceremony or action."},
        {term: "Dignity of labour", meaning: "The idea that all honest work deserves respect."},
        {term: "Salvation", meaning: "Spiritual freedom or liberation."}
      ],
      qa: [
        {q: "Where does the poet say God is to be found?", a: "God is with the farmers who till the hard ground and the labourers who break stones to make roads, working in sun and rain. He is not found only in the closed corner of a temple."},
        {q: "What does the poem teach about worship?", a: "It teaches that service and honest work are the true worship. Chanting and ritual have little value if one ignores the working people around us."}
      ],
      quiz: [
        {q: "The poem was written by:", options: ["Rabindranath Tagore", "Sarojini Naidu", "William Cowper", "Robert Frost"], answer: 0, explain: "It is from Tagore's Gitanjali."},
        {q: "According to the poet, God is with:", options: ["the toiling workers", "the idle priests", "the rich", "the kings"], answer: 0, explain: "He is with the farmer and the road-builder."},
        {q: "The poem criticises:", options: ["empty ritual and idle chanting", "hard work", "farming", "road building"], answer: 0, explain: "The poet says rituals without service are useless."},
        {q: "Tagore received the Nobel Prize for Literature in:", options: ["1913", "1947", "1901", "1950"], answer: 0, explain: "He won it in 1913 for Gitanjali."},
        {q: "The theme of the poem is:", options: ["dignity of labour", "love of wealth", "fear of God", "the beauty of spring"], answer: 0, explain: "It values the work of ordinary labourers."}
      ]
    },
    {
      id: "no-men-are-foreign",
      title: "No Men Are Foreign",
      section: "Poems",
      summary: "A poem by the English poet James Kirkup arguing that all human beings share the same basic nature, and that war against other people is a wrong done to the whole human family and to the earth we share.",
      notes: [
        {
          heading: "Central idea",
          points: [
            "The poet says that no people, whatever their nation, can be called foreigners, because all human beings are alike in what matters.",
            "All breathe the same air, live under the same sun and sky, depend on the same earth for food, and share the same needs, joys and sorrows.",
            "Underneath differences of dress or uniform, everyone is human."
          ]
        },
        {
          heading: "Message about war",
          points: [
            "The poet warns against hating or harming people of other lands: to harm others is, in the end, to harm ourselves and the earth.",
            "Those who attack other lands wrong the same earth that will one day receive all of us.",
            "He asks us to stay human, to remember that we are one family, and to avoid hatred and war."
          ]
        },
        {
          heading: "About the poet",
          points: [
            "James Kirkup (1918–2009) was an English poet and translator who won the Atlantic Award for Literature in 1950 and taught English at universities in Sweden and Japan.",
            "The poem uses simple language, repeated ideas and a direct, conversational tone to persuade the reader."
          ]
        }
      ],
      formulas: [
        "Poet: James Kirkup (English).",
        "Theme: universal brotherhood; war is a wrong against all humanity.",
        "Key idea: we share the same earth, air and sky."
      ],
      terms: [
        {term: "Foreigner", meaning: "A person from another country."},
        {term: "Brotherhood", meaning: "A feeling of friendship and unity among people."},
        {term: "Hatred", meaning: "Intense dislike."},
        {term: "Universal", meaning: "True for or belonging to all."},
        {term: "Invader", meaning: "A person or army that enters another land to attack it."}
      ],
      qa: [
        {q: "What does the poet mean by “No men are foreign”?", a: "He means that no human being is truly a stranger, since all share the same basic nature, needs and feelings, and live on the same earth under the same sky."},
        {q: "What does the poet say about war?", a: "He says that harming people of other countries is really harming our own human family and the earth we all share, so war and hatred are wrong."}
      ],
      quiz: [
        {q: "The poet of “No Men Are Foreign” is:", options: ["James Kirkup", "William Wordsworth", "Robert Frost", "Tagore"], answer: 0, explain: "Kirkup wrote this poem."},
        {q: "The central idea of the poem is:", options: ["universal brotherhood", "love of travel", "the glory of war", "nature in spring"], answer: 0, explain: "It says all humans are alike."},
        {q: "What do all people share, according to the poet?", options: ["The same earth, air and sky", "The same language", "The same nationality", "The same religion"], answer: 0, explain: "The poem stresses what is common to all humans."},
        {q: "The poet's attitude to war is:", options: ["against it", "in favour of it", "neutral", "excited about it"], answer: 0, explain: "He asks us not to hate or attack others."},
        {q: "James Kirkup was an:", options: ["English poet", "Indian poet", "American novelist", "Greek dramatist"], answer: 0, explain: "He was an English poet and translator."}
      ]
    },
    {
      id: "the-nightingale-and-the-glow-worm",
      title: "The Nightingale and the Glow-worm",
      section: "Poems",
      summary: "A short fable in verse by William Cowper: a hungry nightingale spots a glow-worm's light in the dark and prepares to eat it, but the glow-worm reminds the bird that each has its own gift, and the bird spares it.",
      notes: [
        {
          heading: "The story",
          points: [
            "A nightingale sings sweetly through the day and as night comes feels hungry. It sees a tiny glow-worm shining in the grass.",
            "The bird, thinking only of its hunger, stoops down from the hawthorn to eat it.",
            "The glow-worm calmly says that it, too, is doing its work: it shines to light the way as the bird sings to delight the ear. Each is a gift of the same Creator.",
            "The nightingale listens, praises the speech, lets the glow-worm go and looks for supper elsewhere."
          ]
        },
        {
          heading: "Moral",
          points: [
            "Everybody has a gift and a purpose; the strong should not harm the weak.",
            "Cruelty to others is foolish when all are part of the same creation.",
            "The poem ends with the nightingale freeing the glow-worm and finding food elsewhere; the lesson is to live together in mutual respect."
          ]
        },
        {
          heading: "About the poet",
          points: [
            "William Cowper (1731–1800) was an English poet of nature and everyday life.",
            "The poem is a **fable**: animals speak and teach a moral lesson. It uses a simple rhyming pattern."
          ]
        }
      ],
      formulas: [
        "Poet: William Cowper (1731–1800).",
        "Form: fable in rhyming verse; characters: nightingale and glow-worm.",
        "Moral: respect others' gifts; do not harm the weak."
      ],
      terms: [
        {term: "Fable", meaning: "A short story with talking animals that teaches a moral."},
        {term: "Nightingale", meaning: "A small brown bird famous for its beautiful song."},
        {term: "Glow-worm", meaning: "A small insect whose body gives off a soft light."},
        {term: "Moral", meaning: "The lesson taught by a story."},
        {term: "Creator", meaning: "God, who made all things."}
      ],
      qa: [
        {q: "Why did the nightingale want to eat the glow-worm?", a: "The nightingale had sung all day, grew hungry as night fell, and saw the glow-worm shining in the dark, so it thought of eating it."},
        {q: "What was the glow-worm's reply and what is the moral?", a: "The glow-worm said that it shines to give light just as the bird sings to give pleasure, and both are gifts of the same Maker. The nightingale spared it. The moral is that every creature has a purpose, and the strong should not harm the weak."}
      ],
      quiz: [
        {q: "The poem was written by:", options: ["William Cowper", "Rabindranath Tagore", "James Kirkup", "John Keats"], answer: 0, explain: "It is by the English poet Cowper."},
        {q: "The two chief characters are:", options: ["a nightingale and a glow-worm", "a crow and a fox", "a lion and a mouse", "a parrot and a monkey"], answer: 0, explain: "These are the two speakers in the fable."},
        {q: "What does the glow-worm do?", options: ["It gives off light", "It sings", "It flies fast", "It eats seeds"], answer: 0, explain: "A glow-worm shines in the dark."},
        {q: "The nightingale finally:", options: ["spares the glow-worm", "eats it", "flies away angry", "sings no more"], answer: 0, explain: "It accepts the glow-worm's reasoning."},
        {q: "The moral of the poem is:", options: ["every creature has a purpose, so do not harm the weak", "the strong always win", "silence is golden", "hunger is wrong"], answer: 0, explain: "It teaches respect and peace."}
      ]
    },
    // ───────────────────────────── SUPPLEMENTARY READER ─────────────────────────────
    {
      id: "a-letter-to-god",
      title: "A Letter to God",
      section: "Supplementary Reader",
      summary: "A story by the Mexican writer Gregorio López y Fuentes about Lencho, a poor farmer whose ripening field is wrecked by hail. He writes to God for help; the postmaster and his staff, moved by his faith, send him money, but Lencho is angry that the amount is less than he asked. The PSEB text may be the same story.",
      notes: [
        {
          heading: "Plot",
          points: [
            "Lencho's field of ripe corn is the only hope of his family. Rain falls, and he welcomes it, but it turns into a heavy hailstorm that destroys the crop.",
            "He is not hopeless: with simple, firm faith he writes a letter to God asking for **a hundred pesos** to sow his field again and live until the next crop.",
            "The postmaster reads the letter, is touched by the man's faith, and with the help of the staff and other people he collects money; he can send only about seventy pesos, signed “God”.",
            "Lencho, certain that God would not fail him, takes the money without surprise, but is angry at the smaller amount. He writes again, asking God not to send the money by post, because the post-office employees are “a bunch of crooks”."
          ]
        },
        {
          heading: "Characters",
          points: [
            "**Lencho:** a hard-working, simple farmer with unshakable faith in God.",
            "**The postmaster:** kind-hearted, fond of a joke at first, then moved to help a stranger."
          ]
        },
        {
          heading: "Themes",
          points: [
            "**Faith and trust:** Lencho's belief is complete, though he is blind to the kindness of people.",
            "**Human kindness:** ordinary people can act as God's helpers.",
            "**Irony:** Lencho thanks God but accuses the people who helped him of dishonesty."
          ]
        }
      ],
      formulas: [
        "Author: Gregorio López y Fuentes (Mexican writer).",
        "Lencho asked for 100 pesos; about 70 were sent.",
        "Theme: faith, kindness and irony."
      ],
      terms: [
        {term: "Hailstorm", meaning: "A storm with falling lumps of ice."},
        {term: "Postmaster", meaning: "The head of a post office."},
        {term: "Faith", meaning: "Strong belief or trust, especially in God."},
        {term: "Irony", meaning: "When the opposite of what is expected happens or is said."},
        {term: "Peso", meaning: "The unit of money in Mexico."}
      ],
      qa: [
        {q: "Why did Lencho write to God?", a: "A hailstorm had destroyed his crop, leaving his family with nothing to eat. With complete faith that God would help, he asked in a letter for money to sow the field again."},
        {q: "Why was Lencho angry when the money arrived?", a: "The money was less than the hundred pesos he had asked for. Since he believed God never failed, he thought the post-office employees had stolen the rest, and he wrote another letter asking God not to send money by post."}
      ],
      quiz: [
        {q: "The farmer in the story is:", options: ["Lencho", "Behrman", "Narendra", "Johnsy"], answer: 0, explain: "Lencho is the central character."},
        {q: "What destroyed the crop?", options: ["A hailstorm", "A fire", "Locusts", "A flood"], answer: 0, explain: "Hail destroyed the ripening corn."},
        {q: "How much did Lencho ask for?", options: ["100 pesos", "70 pesos", "10 pesos", "1,000 pesos"], answer: 0, explain: "He asked for one hundred pesos."},
        {q: "Who collected money for him?", options: ["The postmaster and his staff", "The mayor", "Lencho's neighbours", "A rich merchant"], answer: 0, explain: "The post-office staff helped after reading his letter."},
        {q: "Why was Lencho angry at the end?", options: ["He thought the postal staff had kept some of the money", "He received no money", "The money was fake", "He did not believe in God"], answer: 0, explain: "He received less than he asked and suspected the employees."}
      ]
    },
    {
      id: "the-last-leaf",
      title: "The Last Leaf",
      section: "Supplementary Reader",
      summary: "A short story by the American writer O. Henry about two young artists, Sue and Johnsy, in Greenwich Village, New York. Johnsy, sick with pneumonia, decides she will die when the last leaf falls from the ivy outside her window. An old neighbour, Behrman, paints a leaf on the wall that saves her. The PSEB text may be abridged.",
      notes: [
        {
          heading: "Plot",
          points: [
            "Sue and Johnsy share a studio. In autumn Johnsy catches **pneumonia**, loses her will to live, and counts the leaves falling from the old ivy on the brick wall outside.",
            "She tells Sue that she will die when the last leaf falls. The doctor tells Sue that Johnsy's chance depends on her will to live.",
            "Sue tells old **Behrman**, a failing painter who lives downstairs and boasts of a masterpiece he has never painted, about Johnsy's fancy.",
            "After a night of cold rain and wind, one leaf still clings to the wall. It clings through the next night, too. Johnsy takes this as a sign, regains hope and recovers.",
            "Sue then tells her that Behrman has died of pneumonia. He had been found helpless, and his boots, lamp and brushes were found with the green and yellow paint. The leaf that did not fall was his masterpiece, painted on the wall through the stormy night."
          ]
        },
        {
          heading: "Characters",
          points: [
            "**Johnsy:** a young artist who loses hope. **Sue:** her loyal friend who cares for her.",
            "**Behrman:** a gruff old painter who is secretly gentle and prepared to sacrifice himself."
          ]
        },
        {
          heading: "Themes",
          points: [
            "**Hope and will to live:** mental attitude can affect recovery.",
            "**Sacrifice and friendship:** Behrman gives his life to save a stranger; Sue shows loving care.",
            "**Art with a purpose:** the leaf is Behrman's real masterpiece, which saves a life.",
            "O. Henry is known for stories with a surprising twist at the end."
          ]
        }
      ],
      formulas: [
        "Author: O. Henry (William Sydney Porter), American short-story writer.",
        "Setting: Greenwich Village, New York.",
        "Twist: Behrman painted the last leaf and died of pneumonia."
      ],
      terms: [
        {term: "Pneumonia", meaning: "A serious lung infection."},
        {term: "Masterpiece", meaning: "An artist's greatest work."},
        {term: "Ivy", meaning: "A climbing plant with leaves that grows on walls."},
        {term: "Sacrifice", meaning: "Giving up something precious for another."},
        {term: "Twist", meaning: "An unexpected turn at the end of a story."}
      ],
      qa: [
        {q: "Why did Johnsy think she would die?", a: "She was ill with pneumonia and had lost hope. Watching the leaves of the ivy fall, she decided that she would die when the last leaf fell."},
        {q: "What is the surprise at the end of the story?", a: "The last leaf was not real. The old painter Behrman painted it on the wall during a stormy night. It gave Johnsy hope and she recovered, but Behrman caught pneumonia and died."}
      ],
      quiz: [
        {q: "The author of “The Last Leaf” is:", options: ["O. Henry", "Oscar Wilde", "G. L. Fuentes", "Ruskin Bond"], answer: 0, explain: "O. Henry wrote the story."},
        {q: "What disease did Johnsy have?", options: ["Pneumonia", "Malaria", "Typhoid", "Cholera"], answer: 0, explain: "She was ill with pneumonia."},
        {q: "Who painted the last leaf?", options: ["Behrman", "Sue", "Johnsy", "The doctor"], answer: 0, explain: "The old painter Behrman painted it."},
        {q: "What happened to Behrman?", options: ["He died of pneumonia", "He went abroad", "He became famous at once", "He lost his sight"], answer: 0, explain: "He caught pneumonia on the stormy night."},
        {q: "What is the main theme of the story?", options: ["Sacrifice and hope", "Greed and war", "Revenge", "Travel"], answer: 0, explain: "Behrman's sacrifice gives Johnsy new hope."}
      ]
    },
]
});
