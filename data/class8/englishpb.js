// Class 8 English (PSEB): Grammar, Vocabulary, Writing and well-known literature lessons.
// Written from the PSEB syllabus, not from the book's own text. All examples are original.
// Lessons not included (not confidently known): Value of Money; The Old Sage and the Brothers;
// Smashing the Glass Ceiling; poems The Earth Needs You, We Who Love Books, My Dear Soldiers.
StudyData.add(8, "englishpb", {
  syllabus: {board: "PSEB", match: "textbook", books: ["English (PSEB, Class 8)"], note: "Grammar, vocabulary and writing from the PSEB 2026–27 syllabus, plus the lessons whose stories are well known. Written from the syllabus, not the PSEB book's own text.", reviewed: false},
  chapters: [
    {
      id: "pb-sentence-kinds",
      title: "The Sentence and its Kinds",
      section: "Grammar",
      summary: "A sentence is a group of words that makes complete sense. Sentences can be sorted by purpose (statement, question, command, wish, exclamation) and by structure (simple, compound, complex).",
      notes: [
        {
          heading: "Kinds by purpose",
          points: [
            "**Assertive** (statement): gives information; ends with a full stop. “Amritsar is a holy city.”",
            "**Interrogative**: asks a question; ends with a question mark. “Where do you live?”",
            "**Imperative**: command, request or advice. “Please close the door.”",
            "**Optative**: a wish or prayer. “May you succeed!” **Exclamatory**: strong feeling. “What a lovely day!”"
          ]
        },
        {
          heading: "Subject and predicate",
          points: [
            "The **subject** is the person or thing the sentence is about; the **predicate** says something about the subject.",
            "In “The little girl sings sweetly”, the subject is “the little girl” and the predicate is “sings sweetly”.",
            "In an imperative sentence the subject (you) is usually understood, not written."
          ]
        },
        {
          heading: "Kinds by structure",
          points: [
            "**Simple**: one finite verb, one clause. “Rain fell all night.”",
            "**Compound**: two or more main clauses joined by and, but, or, so. “It rained, so we stayed in.”",
            "**Complex**: one main clause plus one or more subordinate clauses. “We stayed in because it rained.”"
          ]
        }
      ],
      terms: [
        {term: "Clause", meaning: "A group of words with its own subject and verb."},
        {term: "Imperative", meaning: "A sentence that gives a command, request or advice."},
        {term: "Optative", meaning: "A sentence that expresses a wish or prayer."},
        {term: "Predicate", meaning: "The part of a sentence that tells something about the subject."}
      ],
      qa: [
        {q: "Name the kind of sentence: “How kind of you to help!”", a: "Exclamatory — it expresses strong feeling and ends with an exclamation mark."},
        {q: "How is a compound sentence different from a complex one?", a: "A compound sentence joins clauses of equal rank with a conjunction like and or but; a complex sentence has a main clause and a subordinate clause that depends on it."}
      ],
      quiz: [
        {q: "“May God bless you!” is a(n) ___ sentence.", options: ["imperative", "optative", "interrogative", "assertive"], answer: 1, explain: "It expresses a wish or blessing."},
        {q: "Which sentence is imperative?", options: ["Open the window.", "Is the window open?", "The window is open.", "What a big window!"], answer: 0, explain: "It gives a command."},
        {q: "“She sang and he played the tabla.” is a:", options: ["simple sentence", "complex sentence", "compound sentence", "exclamatory sentence"], answer: 2, explain: "Two main clauses are joined by “and”."},
        {q: "In “The tall boy won the race”, the predicate is:", options: ["The tall boy", "won the race", "tall boy", "the race"], answer: 1, explain: "The predicate says what the subject did."},
        {q: "“I stayed home because I was ill.” is a:", options: ["simple sentence", "compound sentence", "complex sentence", "optative sentence"], answer: 2, explain: "“because I was ill” is a subordinate clause attached to the main clause."}
      ]
    },
    {
      id: "pb-parts-of-speech",
      title: "Parts of Speech",
      section: "Grammar",
      summary: "Words are sorted into eight parts of speech by the work they do in a sentence: noun, pronoun, adjective, verb, adverb, preposition, conjunction and interjection.",
      notes: [
        {
          heading: "The eight parts",
          points: [
            "**Noun**: names a person, place, thing or idea. **Pronoun**: stands in for a noun.",
            "**Adjective**: describes a noun or pronoun. **Verb**: shows action or state.",
            "**Adverb**: tells how, when or where about a verb, adjective or another adverb.",
            "**Preposition**: shows relation (in, on, under). **Conjunction**: joins words or clauses (and, but, because). **Interjection**: sudden feeling (Oh! Alas!)."
          ]
        },
        {
          heading: "Same word, different part of speech",
          points: [
            "A word's part of speech depends on its use in the sentence.",
            "“Walk” is a verb in “I walk to school” and a noun in “We took a walk.”",
            "“Fast” is an adjective in “a fast train” and an adverb in “He runs fast.”"
          ]
        },
        {
          heading: "Quick test",
          points: [
            "Ask what the word does: names? describes? shows action? joins?",
            "Adjectives answer “what kind / how many / which”; adverbs answer “how / when / where”.",
            "Prepositions come before a noun or pronoun and link it to another word."
          ]
        }
      ],
      terms: [
        {term: "Adverb", meaning: "A word that tells how, when or where something happens."},
        {term: "Preposition", meaning: "A word that shows how a noun or pronoun is related to another word."},
        {term: "Conjunction", meaning: "A word that joins words, phrases or clauses."},
        {term: "Interjection", meaning: "A word that expresses a sudden feeling."}
      ],
      qa: [
        {q: "Name the parts of speech of the underlined words: “The old man walked slowly.”", a: "old = adjective (describes man); slowly = adverb (tells how he walked)."},
        {q: "Why is “light” a noun in one sentence and an adjective in another?", a: "Because the part of speech depends on use: “Switch on the light” (noun) and “a light bag” (adjective)."}
      ],
      quiz: [
        {q: "In “Wow! That was a great match”, “Wow” is a(n):", options: ["adverb", "noun", "interjection", "conjunction"], answer: 2, explain: "It expresses sudden feeling."},
        {q: "In “She spoke softly”, “softly” is a(n):", options: ["adjective", "adverb", "noun", "preposition"], answer: 1, explain: "It tells how she spoke."},
        {q: "In “The book is on the table”, “on” is a:", options: ["conjunction", "adverb", "preposition", "verb"], answer: 2, explain: "It shows the relation between book and table."},
        {q: "Which word is a conjunction?", options: ["quickly", "although", "beautiful", "under"], answer: 1, explain: "Although joins clauses."},
        {q: "In “We had a swim”, “swim” is a:", options: ["verb", "noun", "adjective", "adverb"], answer: 1, explain: "It follows “a” and names an activity."}
      ]
    },
    {
      id: "pb-determiners",
      title: "Determiners",
      section: "Grammar",
      summary: "Determiners are words placed before a noun to show which one, how many or whose. They include articles, demonstratives, possessives, quantifiers and numbers.",
      notes: [
        {
          heading: "Kinds of determiners",
          points: [
            "**Articles**: a, an, the.",
            "**Demonstratives**: this, that, these, those.",
            "**Possessives**: my, your, his, her, its, our, their.",
            "**Quantifiers**: some, any, much, many, few, little, enough, all, no. **Numbers**: one, two, first, second."
          ]
        },
        {
          heading: "Choosing the right one",
          points: [
            "**Many / few** go with countable nouns (many books, few friends); **much / little** with uncountable nouns (much water, little time).",
            "**A few** means some; **few** means hardly any. “A little” means some; “little” means hardly any.",
            "**Each** and **every** take a singular noun and verb: “Every student has a pen.”",
            "Use **a** before a consonant sound and **an** before a vowel sound (a university, an hour)."
          ]
        },
        {
          heading: "Determiner or pronoun?",
          points: [
            "A determiner comes before a noun: “This book is mine.”",
            "The same word used alone is a pronoun: “This is mine.”",
            "Possessive determiners (my, her) need a noun; possessive pronouns (mine, hers) stand alone."
          ]
        }
      ],
      terms: [
        {term: "Determiner", meaning: "A word placed before a noun to show which, how many or whose."},
        {term: "Quantifier", meaning: "A determiner that tells the amount, such as some or many."},
        {term: "Demonstrative", meaning: "A word that points out a noun, such as this or those."},
        {term: "Countable noun", meaning: "A noun that can be counted, like apple or chair."}
      ],
      qa: [
        {q: "Fill in with much or many: “How ___ sugar do you need?”", a: "much — sugar is an uncountable noun."},
        {q: "What is the difference between “a few” and “few”?", a: "“A few” means some (a positive idea); “few” means hardly any (a negative idea)."}
      ],
      quiz: [
        {q: "Choose the correct word: “There are ___ students in the hall.”", options: ["much", "many", "little", "a little"], answer: 1, explain: "Students are countable, so “many”."},
        {q: "Which sentence uses a determiner?", options: ["This is mine.", "This bag is mine.", "Mine is this.", "Is this yours?"], answer: 1, explain: "In “This bag”, this comes before the noun bag."},
        {q: "Choose the correct article: “She waited for ___ hour.”", options: ["a", "an", "the a", "no article"], answer: 1, explain: "Hour begins with a vowel sound."},
        {q: "“Every child ___ a book.”", options: ["have", "has", "are having", "were"], answer: 1, explain: "Every takes a singular verb."},
        {q: "“I have little money” means:", options: ["I have plenty of money", "I have some money", "I have hardly any money", "I have no pen"], answer: 2, explain: "“Little” without “a” has a negative sense."}
      ]
    },
    {
      id: "pb-main-helping-verbs",
      title: "Main and Helping Verbs",
      section: "Grammar",
      summary: "A main verb carries the chief meaning of a sentence. Helping verbs work with it to form tenses, questions, negatives and the passive voice. Modals are a special group of helping verbs.",
      notes: [
        {
          heading: "Main and helping verbs",
          points: [
            "The **main (principal) verb** gives the meaning: “She *writes* poems.”",
            "**Helping (auxiliary) verbs** are be (is, am, are, was, were, been), have (has, had) and do (does, did).",
            "In “They are playing”, are is the helper and playing is the main verb.",
            "Be, have and do can also be main verbs: “He has a bicycle.” (has = main verb)."
          ]
        },
        {
          heading: "Modal verbs",
          points: [
            "Modals: can, could, may, might, shall, should, will, would, must, ought to.",
            "They are followed by the base form of the verb: “You must wait.”",
            "Uses: ability (can), permission (may), advice (should), duty or necessity (must), possibility (might)."
          ]
        },
        {
          heading: "Work of helping verbs",
          points: [
            "Questions: “Do you like tea?” Negatives: “She does not like tea.”",
            "Continuous tenses use be + -ing; perfect tenses use have + past participle.",
            "Passive voice uses be + past participle: “The window was broken.”"
          ]
        }
      ],
      terms: [
        {term: "Auxiliary verb", meaning: "Another name for a helping verb."},
        {term: "Modal verb", meaning: "A helping verb such as can, may or must that shows ability, permission, duty and so on."},
        {term: "Principal verb", meaning: "The main verb that carries the meaning of the sentence."},
        {term: "Base form", meaning: "The simple form of a verb, such as go or write."}
      ],
      qa: [
        {q: "Pick the helping verb and the main verb: “The farmers have harvested the wheat.”", a: "Helping verb: have. Main verb: harvested."},
        {q: "Which modal fits: “You ___ wear a helmet while riding” (a rule)?", a: "must — it shows duty or necessity."}
      ],
      quiz: [
        {q: "In “She is reading a novel”, the helping verb is:", options: ["She", "is", "reading", "novel"], answer: 1, explain: "Is helps reading to form the continuous tense."},
        {q: "In “He has a red cap”, “has” is a:", options: ["helping verb", "main verb", "modal", "preposition"], answer: 1, explain: "It means “possesses”, so it is the main verb."},
        {q: "Which is a modal verb?", options: ["does", "were", "might", "been"], answer: 2, explain: "Might shows possibility."},
        {q: "A modal is followed by the:", options: ["past participle", "-ing form", "base form of the verb", "noun only"], answer: 2, explain: "For example: can swim, must go."},
        {q: "Choose the correct sentence.", options: ["She can sings well.", "She can sing well.", "She can sang well.", "She cans sing well."], answer: 1, explain: "Can is followed by the base form “sing”."}
      ]
    },
    {
      id: "pb-transitive-intransitive",
      title: "Transitive and Intransitive Verbs",
      section: "Grammar",
      summary: "A transitive verb needs an object to complete its meaning; an intransitive verb does not. Many verbs can be either, depending on the sentence.",
      notes: [
        {
          heading: "Transitive verbs",
          points: [
            "The action passes from the subject to an **object**: “The boy kicked the ball.”",
            "Test: ask “what?” or “whom?” after the verb. Kicked what? — the ball.",
            "Some transitive verbs take two objects: “She gave me a gift.” (indirect object: me; direct object: a gift)."
          ]
        },
        {
          heading: "Intransitive verbs",
          points: [
            "The action stops with the subject and needs no object: “The baby smiled.”",
            "Examples: sleep, arrive, laugh, fall, die, come.",
            "An adverb or a phrase may follow without being an object: “He arrived late.”"
          ]
        },
        {
          heading: "Same verb, both uses",
          points: [
            "“The bell rang.” (intransitive) — “She rang the bell.” (transitive)",
            "“Birds sing.” (intransitive) — “Birds sing songs.” (transitive)",
            "Only transitive verbs can be changed into the passive voice."
          ]
        }
      ],
      terms: [
        {term: "Object", meaning: "The word that receives the action of a transitive verb."},
        {term: "Transitive verb", meaning: "A verb that needs an object to complete its meaning."},
        {term: "Intransitive verb", meaning: "A verb that makes complete sense without an object."},
        {term: "Indirect object", meaning: "The person to or for whom something is done."}
      ],
      qa: [
        {q: "Is the verb transitive or intransitive? “Monkeys climb trees.”", a: "Transitive — climb takes the object “trees” (climb what?)."},
        {q: "Why can “The sun rises” not be turned into the passive?", a: "Rises is intransitive; it has no object to become the subject of a passive sentence."}
      ],
      quiz: [
        {q: "Which sentence has a transitive verb?", options: ["The child slept.", "He ate an apple.", "They arrived early.", "She laughed loudly."], answer: 1, explain: "Ate takes the object “an apple”."},
        {q: "In “The train stopped”, the verb “stopped” is:", options: ["transitive", "intransitive", "a modal", "an auxiliary"], answer: 1, explain: "No object follows it."},
        {q: "To test for a transitive verb you ask:", options: ["Where?", "When?", "What or whom?", "Why?"], answer: 2, explain: "A transitive verb has an answer to “what” or “whom”."},
        {q: "In “She gave Ravi a pen”, the indirect object is:", options: ["She", "gave", "Ravi", "pen"], answer: 2, explain: "Ravi is the person to whom the pen was given."},
        {q: "Which verb is used transitively in “He opened the door”?", options: ["He", "opened", "the", "door"], answer: 1, explain: "Opened has the object “the door”."}
      ]
    },
    {
      id: "pb-degrees-adjectives",
      title: "Degrees of Adjectives",
      section: "Grammar",
      summary: "Adjectives have three degrees: positive (simple quality), comparative (two things compared) and superlative (three or more, the highest degree).",
      notes: [
        {
          heading: "The three degrees",
          points: [
            "**Positive**: tall — “Ravi is tall.”",
            "**Comparative**: taller — “Ravi is taller than Sunil.” (two persons or things)",
            "**Superlative**: tallest — “Ravi is the tallest boy in the class.” (more than two)"
          ]
        },
        {
          heading: "Forming the degrees",
          points: [
            "Short adjectives add -er / -est (small, smaller, smallest); drop the final -e when present (wise, wiser, wisest).",
            "Consonant + y becomes -ier / -iest (happy, happier, happiest); double the final consonant in short words like big, bigger, biggest.",
            "Long adjectives use more / most (beautiful, more beautiful, most beautiful)."
          ]
        },
        {
          heading: "Irregular forms and changing degrees",
          points: [
            "good – better – best; bad – worse – worst; little – less – least; much/many – more – most; far – farther/further – farthest/furthest.",
            "To change degree without changing meaning: “Delhi is bigger than Jalandhar” = “Jalandhar is not as big as Delhi” = “Jalandhar is smaller than Delhi.”",
            "Use *than* with the comparative and *the* with the superlative."
          ]
        }
      ],
      terms: [
        {term: "Positive degree", meaning: "The simple form of an adjective that names a quality."},
        {term: "Comparative degree", meaning: "The form used to compare two things."},
        {term: "Superlative degree", meaning: "The form used to show the highest degree among three or more."},
        {term: "Irregular comparison", meaning: "Comparison that does not follow the -er/-est pattern, like good, better, best."}
      ],
      qa: [
        {q: "Write the comparative and superlative of “busy”.", a: "busier, busiest (y after a consonant becomes -ier / -iest)."},
        {q: "Change into the superlative: “Mount Everest is higher than any other mountain.”", a: "Mount Everest is the highest mountain."}
      ],
      quiz: [
        {q: "The superlative of “good” is:", options: ["gooder", "better", "best", "most good"], answer: 2, explain: "Good – better – best is irregular."},
        {q: "Choose the correct sentence.", options: ["She is more taller than me.", "She is taller than I.", "She is tallest than I.", "She is the taller than I."], answer: 1, explain: "Comparative “taller” is followed by than."},
        {q: "The comparative of “beautiful” is:", options: ["beautifuler", "more beautiful", "most beautiful", "beautifulest"], answer: 1, explain: "Long adjectives take more."},
        {q: "“Gold is the most precious metal.” The adjective is in the ___ degree.", options: ["positive", "comparative", "superlative", "irregular"], answer: 2, explain: "Most precious compares gold with all other metals."},
        {q: "The comparative of “bad” is:", options: ["badder", "worse", "worst", "more bad"], answer: 1, explain: "Bad – worse – worst."}
      ]
    },
    {
      id: "pb-finite-nonfinite",
      title: "Finite and Non-finite Verbs",
      section: "Grammar",
      summary: "A finite verb has a subject and changes with tense and person. Non-finite verbs (infinitives, gerunds and participles) do not act as the main verb of a clause.",
      notes: [
        {
          heading: "Finite verbs",
          points: [
            "A **finite verb** agrees with its subject in number and person and shows tense.",
            "“She plays hockey.” — plays is finite (third person singular, present tense).",
            "Every full sentence must have at least one finite verb."
          ]
        },
        {
          heading: "Non-finite verbs",
          points: [
            "**Infinitive**: to + base verb. “I want to learn.”",
            "**Gerund**: -ing form used as a noun. “Swimming is good exercise.”",
            "**Participle**: used as an adjective. Present: “a crying baby”; past: “a broken glass”."
          ]
        },
        {
          heading: "Spotting them",
          points: [
            "Non-finite verbs do not change with the subject: “He likes to sing / They like to sing.”",
            "A participle phrase can join sentences: “Seeing the dog, the child ran away.”",
            "Gerund vs present participle: a gerund acts as a noun; a participle acts as an adjective."
          ]
        }
      ],
      terms: [
        {term: "Finite verb", meaning: "A verb limited by its subject and tense."},
        {term: "Infinitive", meaning: "The “to + verb” form, such as to run."},
        {term: "Gerund", meaning: "An -ing form that works as a noun."},
        {term: "Participle", meaning: "A verb form used as an adjective, such as running or fallen."}
      ],
      qa: [
        {q: "Pick the finite and the non-finite verb: “She wants to become a doctor.”", a: "Finite: wants. Non-finite (infinitive): to become."},
        {q: "Is “reading” a gerund or a participle in “Reading is my hobby”?", a: "A gerund — it works as a noun, the subject of the sentence."}
      ],
      quiz: [
        {q: "Which is a non-finite verb form?", options: ["went", "sings", "to sing", "is"], answer: 2, explain: "To sing is an infinitive."},
        {q: "In “Walking is healthy”, “walking” is a:", options: ["finite verb", "gerund", "modal verb", "adverb"], answer: 1, explain: "It is an -ing form acting as a noun."},
        {q: "In “a fallen leaf”, “fallen” is a:", options: ["gerund", "infinitive", "past participle", "finite verb"], answer: 2, explain: "It describes the noun leaf."},
        {q: "A finite verb changes according to the:", options: ["object", "subject and tense", "adjective", "article"], answer: 1, explain: "It agrees with the subject and shows tense."},
        {q: "The finite verb in “I hope to win” is:", options: ["hope", "to win", "win", "I"], answer: 0, explain: "“To win” is an infinitive; hope is finite."}
      ]
    },
    {
      id: "pb-tenses",
      title: "Tenses",
      section: "Grammar",
      summary: "Tense shows the time of an action. Each of the present, past and future has four forms: simple, continuous, perfect and perfect continuous.",
      notes: [
        {
          heading: "Present and past",
          points: [
            "**Simple present**: habits and facts. “She walks to school.” **Present continuous**: now. “She is walking.”",
            "**Present perfect**: finished action with a link to now. “She has walked home.” **Present perfect continuous**: “She has been walking for an hour.”",
            "**Simple past**: “She walked.” **Past continuous**: “She was walking.” **Past perfect**: “She had walked.” **Past perfect continuous**: “She had been walking.”"
          ]
        },
        {
          heading: "Future",
          points: [
            "**Simple future**: will/shall + base verb. “She will walk.”",
            "**Future continuous**: will be + -ing. “She will be walking.”",
            "**Future perfect**: will have + past participle. “She will have walked.” **Future perfect continuous**: “She will have been walking.”"
          ]
        },
        {
          heading: "Using tenses well",
          points: [
            "Use **since** with a point in time (since 2020) and **for** with a period (for two hours) in perfect tenses.",
            "Past perfect is used for the earlier of two past actions: “The train had left when we reached.”",
            "After *if/when* in time clauses, use the present for the future: “I will call when I reach.”"
          ]
        }
      ],
      terms: [
        {term: "Tense", meaning: "The form of a verb that shows when an action happens."},
        {term: "Past participle", meaning: "The verb form used with have/has/had, such as eaten or written."},
        {term: "Continuous tense", meaning: "A tense for an action in progress, formed with be + -ing."},
        {term: "Perfect tense", meaning: "A tense for a completed action, formed with have + past participle."}
      ],
      qa: [
        {q: "Fill in the correct tense: “By the time we arrived, the match ___ (begin).”", a: "had begun — past perfect for the earlier of two past actions."},
        {q: "Choose since or for: “She has lived here ___ 2018.”", a: "since — it is followed by a point in time."}
      ],
      quiz: [
        {q: "“They have been waiting for an hour.” The tense is:", options: ["present perfect", "present perfect continuous", "past continuous", "future perfect"], answer: 1, explain: "have been + -ing."},
        {q: "Choose the correct form: “I ___ my homework before dinner yesterday.”", options: ["finish", "had finished", "will finish", "am finishing"], answer: 1, explain: "Past perfect shows an action completed before another past time."},
        {q: "“He will have reached by noon.” is:", options: ["simple future", "future continuous", "future perfect", "present perfect"], answer: 2, explain: "will have + past participle."},
        {q: "Fill in: “It has been raining ___ morning.”", options: ["for", "since", "from", "during"], answer: 1, explain: "Since is used with a point in time."},
        {q: "“She is singing a song.” is in the:", options: ["simple present", "present continuous", "present perfect", "past continuous"], answer: 1, explain: "is + -ing shows an action in progress now."}
      ]
    },
    {
      id: "pb-active-passive",
      title: "Active and Passive Voice",
      section: "Grammar",
      summary: "In the active voice the subject does the action; in the passive voice the subject receives it. Only transitive verbs can be changed to the passive.",
      notes: [
        {
          heading: "Changing active to passive",
          points: [
            "Make the object the new subject, use the right form of *be* + past participle, and add *by* + the doer (if needed).",
            "“Rohan wrote the letter.” → “The letter was written by Rohan.”",
            "Keep the same tense: the form of be shows it (is/are, was/were, will be, has/have been)."
          ]
        },
        {
          heading: "Passive forms by tense",
          points: [
            "Simple present: “Cars are made here.” Simple past: “The car was made.”",
            "Present continuous: “The road is being repaired.” Present perfect: “The work has been finished.”",
            "Future: “The result will be announced.” With a modal: “The door can be opened.”"
          ]
        },
        {
          heading: "When to use the passive",
          points: [
            "When the doer is unknown or unimportant: “My bicycle was stolen.”",
            "When the action matters more than the doer: “The school was founded in 1950.”",
            "Imperatives: “Open the door” → “Let the door be opened.”"
          ]
        }
      ],
      terms: [
        {term: "Active voice", meaning: "The form in which the subject performs the action."},
        {term: "Passive voice", meaning: "The form in which the subject receives the action."},
        {term: "Agent", meaning: "The doer of the action, shown by “by” in a passive sentence."},
        {term: "Object", meaning: "The word that becomes the subject when a sentence turns passive."}
      ],
      qa: [
        {q: "Change to passive: “The students are cleaning the hall.”", a: "The hall is being cleaned by the students."},
        {q: "Change to active: “The poem was recited by Simran.”", a: "Simran recited the poem."}
      ],
      quiz: [
        {q: "The passive of “She sings a song” is:", options: ["A song is sung by her.", "A song was sung by her.", "A song sung by her.", "A song is being sung by her."], answer: 0, explain: "Simple present keeps is + past participle."},
        {q: "“The thief was caught by the police.” is in the:", options: ["active voice", "passive voice", "future tense", "imperative"], answer: 1, explain: "The subject receives the action."},
        {q: "The passive of “They have finished the work” is:", options: ["The work has finished.", "The work was finished.", "The work has been finished by them.", "The work is finished by them."], answer: 2, explain: "Present perfect passive: has/have been + past participle."},
        {q: "Which verb cannot be used in the passive?", options: ["write", "arrive", "carry", "break"], answer: 1, explain: "Arrive is intransitive, with no object."},
        {q: "The passive of “Will she open the box?” is:", options: ["Will the box open by her?", "Will the box be opened by her?", "Is the box opened by her?", "Will be the box opened?"], answer: 1, explain: "Will + be + past participle."}
      ]
    },
    {
      id: "pb-direct-indirect",
      title: "Direct and Indirect Speech",
      section: "Grammar",
      summary: "Direct speech gives a speaker's exact words in quotation marks; indirect (reported) speech tells what was said without quoting, with changes in tense, pronouns and time words.",
      notes: [
        {
          heading: "Rules of change",
          points: [
            "Remove the quotation marks; use *that* for statements: “I am tired,” she said → She said that she was tired.",
            "If the reporting verb is in the past, shift the tense back: am → was, will → would, can → could, has → had, simple past → past perfect.",
            "Change pronouns to match the reporter: “I” becomes he/she, “my” becomes his/her."
          ]
        },
        {
          heading: "Other sentence types",
          points: [
            "Questions: use *asked* and drop the question mark; use *if/whether* for yes/no questions. He asked, “Do you sing?” → He asked me if I sang.",
            "Commands and requests: use told/ordered/requested + to. “Sit down,” said the teacher → The teacher told us to sit down.",
            "Exclamations: use exclaimed with joy/sorrow/surprise."
          ]
        },
        {
          heading: "Time and place words",
          points: [
            "now → then; today → that day; tomorrow → the next day; yesterday → the previous day.",
            "this → that; here → there; ago → before.",
            "No tense change is needed for universal truths: She said that the earth moves round the sun."
          ]
        }
      ],
      terms: [
        {term: "Direct speech", meaning: "The exact words of a speaker, placed in quotation marks."},
        {term: "Indirect speech", meaning: "A report of what was said, without the exact words."},
        {term: "Reporting verb", meaning: "The verb that introduces the speech, such as said or asked."},
        {term: "Reported speech", meaning: "Another name for indirect speech."}
      ],
      qa: [
        {q: "Change to indirect speech: Mohan said, “I will visit Amritsar tomorrow.”", a: "Mohan said that he would visit Amritsar the next day."},
        {q: "Change to direct speech: The teacher asked us whether we had finished.", a: "The teacher said, “Have you finished?”"}
      ],
      quiz: [
        {q: "In indirect speech, “will” usually becomes:", options: ["shall", "would", "can", "did"], answer: 1, explain: "With a past reporting verb, will shifts to would."},
        {q: "“Please help me,” she said to him. Indirect: She ___ him to help her.", options: ["asked", "asked that", "said", "wondered"], answer: 0, explain: "A request is reported with asked/requested + to."},
        {q: "In indirect speech, “tomorrow” changes to:", options: ["the previous day", "that day", "the next day", "today"], answer: 2, explain: "Tomorrow becomes the next day."},
        {q: "He said, “I am busy.” Indirect: He said that he ___ busy.", options: ["is", "was", "will be", "has been"], answer: 1, explain: "Present am shifts to past was."},
        {q: "He asked, “Do you like cricket?” Indirect: He asked me ___ I liked cricket.", options: ["that", "if", "what", "so"], answer: 1, explain: "Yes/no questions use if or whether."}
      ]
    },
    {
      id: "pb-word-power",
      title: "Word Power",
      section: "Vocabulary",
      summary: "This chapter builds vocabulary: dictionary order, one-word substitution, synonyms and antonyms, prefixes and suffixes, forming nouns and adverbs, phrasal verbs and idioms.",
      notes: [
        {
          heading: "Dictionary order and one word for many",
          points: [
            "Words in a dictionary are arranged alphabetically; if the first letters match, look at the second, third and so on (cat, catch, cattle).",
            "**One-word substitution**: a doctor who treats children = pediatrician; one who loves books = bibliophile.",
            "More: orphan (a child without parents), vegetarian (one who eats no meat), atheist (one who does not believe in God), autobiography (the story of one's own life)."
          ]
        },
        {
          heading: "Synonyms, antonyms, prefixes, suffixes",
          points: [
            "Synonyms: big – large, begin – start, brave – courageous. Antonyms: strong – weak, ancient – modern, generous – selfish.",
            "Prefixes change meaning: un-, in-, im-, dis-, mis- (unhappy, impossible, disagree, misuse). Suffixes change class: -ness, -ment, -ful, -less, -able.",
            "Noun formation: happy → happiness, move → movement, wise → wisdom, free → freedom, serve → service."
          ]
        },
        {
          heading: "Adverbs, phrasal verbs and idioms",
          points: [
            "Adverb formation: add -ly to adjectives (quick → quickly); y → ily (happy → happily); -le → -ly (gentle → gently).",
            "Phrasal verbs: give up (stop), look after (take care of), put off (postpone), turn down (refuse), carry on (continue).",
            "Idioms: a piece of cake (very easy), once in a blue moon (rarely), break the ice (start a conversation), burn the midnight oil (study or work late)."
          ]
        }
      ],
      terms: [
        {term: "Synonym", meaning: "A word with nearly the same meaning as another."},
        {term: "Antonym", meaning: "A word with the opposite meaning."},
        {term: "Phrasal verb", meaning: "A verb combined with a preposition or adverb to give a new meaning."},
        {term: "Idiom", meaning: "A fixed expression whose meaning is not clear from its separate words."}
      ],
      qa: [
        {q: "Give one word for “a person who writes the story of his own life”.", a: "Autobiographer (the book is an autobiography)."},
        {q: "What do the phrasal verbs “give up” and “put off” mean?", a: "Give up means to stop trying; put off means to postpone."}
      ],
      quiz: [
        {q: "The antonym of “generous” is:", options: ["kind", "selfish", "brave", "rich"], answer: 1, explain: "A selfish person does not like to share."},
        {q: "“Once in a blue moon” means:", options: ["every night", "very rarely", "very quickly", "at midnight"], answer: 1, explain: "It means something happens very seldom."},
        {q: "The noun form of “wise” is:", options: ["wisely", "wiseness", "wisdom", "wised"], answer: 2, explain: "Wise → wisdom."},
        {q: "“Look after” means:", options: ["search for", "take care of", "look behind", "ignore"], answer: 1, explain: "Phrasal verb meaning to care for."},
        {q: "Which list is in dictionary order?", options: ["bat, ball, bag", "ball, bag, bat", "bag, ball, bat", "bat, bag, ball"], answer: 2, explain: "bag < ball < bat by the third letter."}
      ]
    },
    {
      id: "pb-letters-applications",
      title: "Letters and Applications",
      section: "Writing",
      summary: "Letters follow a fixed layout. Informal letters go to friends and relatives; formal letters and applications go to officers, principals and editors in respectful, brief language.",
      notes: [
        {
          heading: "Informal letter",
          points: [
            "Parts: sender's address, date, salutation (Dear Rohan), body, closing (Yours lovingly), name.",
            "Write in a friendly tone; begin by asking after the person, then give your news in short paragraphs.",
            "End with good wishes and a request to reply."
          ]
        },
        {
          heading: "Application / formal letter",
          points: [
            "Layout: To (the officer's designation and place), date, subject line, salutation (Sir/Madam), body, “Yours obediently / faithfully”, name and class or address.",
            "The subject line states the purpose briefly: “Subject: Application for leave for two days.”",
            "Typical applications: leave, fee concession, transfer certificate, complaint to an officer, letter to the editor."
          ]
        },
        {
          heading: "Tips",
          points: [
            "State the reason clearly in the first paragraph and the request in the last.",
            "Use polite words (kindly, request, grateful) and avoid slang.",
            "Check spelling, punctuation and layout; keep to the point."
          ]
        }
      ],
      terms: [
        {term: "Salutation", meaning: "The greeting at the start of a letter, such as Dear Sir."},
        {term: "Subject line", meaning: "A one-line summary of the purpose of a formal letter."},
        {term: "Complimentary close", meaning: "The polite ending before the signature, such as Yours sincerely."},
        {term: "Letter to the editor", meaning: "A formal letter sent to a newspaper to share a public concern."}
      ],
      qa: [
        {q: "How does a formal application differ from an informal letter?", a: "A formal application has the receiver's designation, a subject line, a respectful tone and a formal close; an informal letter is friendly and chatty."},
        {q: "Write the subject line for a leave application because of fever.", a: "Subject: Application for sick leave for two days."}
      ],
      quiz: [
        {q: "The closing of a letter to your Principal is:", options: ["Yours lovingly", "Yours obediently", "Your pal", "With love"], answer: 1, explain: "Formal letters use Yours obediently/faithfully."},
        {q: "The subject line of a formal letter:", options: ["gives the full story", "states the purpose briefly", "is optional in all letters", "is the closing"], answer: 1, explain: "It gives the purpose in a few words."},
        {q: "The salutation in a letter to a friend is:", options: ["Respected Sir", "Dear Sir", "Dear Simran", "To Whom It May Concern"], answer: 2, explain: "Informal letters use Dear + name."},
        {q: "A letter sent to a newspaper is called a:", options: ["personal letter", "letter to the editor", "telegram", "diary entry"], answer: 1, explain: "It is addressed to the editor."},
        {q: "Which tone suits a leave application?", options: ["Humorous", "Angry", "Polite and respectful", "Casual slang"], answer: 2, explain: "Formal writing is polite."}
      ]
    },
    {
      id: "pb-paragraph-story",
      title: "Paragraph and Story Writing",
      section: "Writing",
      summary: "A paragraph develops one idea in connected sentences. A story has a beginning, middle and end, with characters, a problem and a moral or outcome.",
      notes: [
        {
          heading: "Paragraph writing",
          points: [
            "Start with a **topic sentence** that states the main idea.",
            "Add supporting sentences with facts, examples or reasons, in a logical order.",
            "Close with a concluding sentence; keep to about 80–100 words unless told otherwise."
          ]
        },
        {
          heading: "Story writing from an outline",
          points: [
            "Use the given hints in order; expand each into sentences and join them with linking words (then, soon, however, at last).",
            "Write in the past tense and keep the same tense throughout.",
            "Give the story a title and, where fitting, end with a moral."
          ]
        },
        {
          heading: "Good habits",
          points: [
            "Plan before writing: jot down ideas, then arrange them.",
            "Use simple, correct sentences; avoid repeating the same word.",
            "Revise: check spelling, punctuation and sentence sense."
          ]
        }
      ],
      terms: [
        {term: "Topic sentence", meaning: "The sentence that states the main idea of a paragraph."},
        {term: "Moral", meaning: "The lesson a story teaches."},
        {term: "Linking word", meaning: "A word such as then or therefore that joins ideas."},
        {term: "Outline", meaning: "A set of hints or points from which a story is written."}
      ],
      qa: [
        {q: "What should the first sentence of a paragraph do?", a: "State the main idea of the paragraph (the topic sentence)."},
        {q: "Which tense is normally used to narrate a story?", a: "The past tense, kept consistent from start to finish."}
      ],
      quiz: [
        {q: "A paragraph should deal with:", options: ["many unrelated ideas", "one main idea", "only questions", "only a quotation"], answer: 1, explain: "Unity of idea is its key quality."},
        {q: "The lesson at the end of a story is its:", options: ["title", "moral", "outline", "hint"], answer: 1, explain: "Moral = the lesson."},
        {q: "Which is a linking word?", options: ["table", "however", "green", "book"], answer: 1, explain: "However connects ideas."},
        {q: "Before writing a story from hints you should:", options: ["ignore the hints", "arrange the points in order", "copy a story", "write only the end"], answer: 1, explain: "Follow the hints in sequence."},
        {q: "A story told in the past tense should:", options: ["mix tenses freely", "stay in one tense", "use no verbs", "use only questions"], answer: 1, explain: "Consistent tense avoids confusion."}
      ]
    },
    {
      id: "pb-notice-message-email",
      title: "Notice, Message and E-mail",
      section: "Writing",
      summary: "Notices, messages and e-mails are short, practical forms of writing. They must be clear, to the point and carry all the necessary details.",
      notes: [
        {
          heading: "Notice",
          points: [
            "Parts: name of the organisation, the word **NOTICE** (boxed), date, heading, body, then the writer's name and designation.",
            "Include what, when, where and who to contact; keep it to about 50 words.",
            "Written in the third person; use no “I” or “we” unless needed."
          ]
        },
        {
          heading: "Message",
          points: [
            "Format: date and time, “Message” heading, To (the person), the body and the writer's name.",
            "Used when you cannot speak to the person directly; keep it very short (about 50 words).",
            "Include the essential details: who called, what is needed, and a number or time if relevant."
          ]
        },
        {
          heading: "E-mail",
          points: [
            "Fields: To, Cc (copy), Subject, greeting, body, closing and name.",
            "The subject line should state the topic briefly: “Request for a project extension”.",
            "Keep the tone formal for officials and teachers; keep paragraphs short."
          ]
        }
      ],
      terms: [
        {term: "Notice", meaning: "A short public announcement of an event or information."},
        {term: "Cc", meaning: "Carbon copy: sends a copy of an e-mail to another person."},
        {term: "Designation", meaning: "The post a person holds, such as Principal or Secretary."},
        {term: "Subject line", meaning: "The brief title of an e-mail."}
      ],
      qa: [
        {q: "What details should a school notice for a debate contain?", a: "Name of school, the word NOTICE, date, heading, what the event is, date/time/venue, who may participate, whom to contact, and the writer's name and designation."},
        {q: "When do you write a message instead of an e-mail?", a: "When you need to leave a short note for someone in person, for example if a visitor or caller has come while they are away."}
      ],
      quiz: [
        {q: "A notice is usually written in about:", options: ["500 words", "50 words", "5 words", "1000 words"], answer: 1, explain: "Notices are short."},
        {q: "“Cc” in an e-mail stands for:", options: ["close copy", "carbon copy", "central copy", "clear copy"], answer: 1, explain: "Carbon copy."},
        {q: "A notice is signed by the:", options: ["reader", "writer with designation", "printer", "postman"], answer: 1, explain: "The issuer's name and post are given."},
        {q: "The subject line of an e-mail should be:", options: ["empty", "very long", "brief and specific", "a poem"], answer: 2, explain: "It tells the topic quickly."},
        {q: "A message should contain:", options: ["only greetings", "only essential details", "a long story", "a poem"], answer: 1, explain: "It is short and to the point."}
      ]
    },
    {
      id: "pb-aged-mother",
      title: "The Aged Mother",
      section: "Lessons",
      summary: "A Japanese folk tale about a son ordered to abandon his old mother on a mountain, who cannot bring himself to do it, and how her wisdom later saves the people. Versions of the tale differ, and the PSEB version may differ in detail.",
      notes: [
        {
          heading: "The tale",
          points: [
            "In a village of old Japan, a ruler issues a harsh order that people who have grown too old must be taken to a mountain and left there.",
            "A son carries his aged mother on his back up the mountain, as the order requires.",
            "On the way she quietly breaks off twigs and drops them along the path, so that her son will be able to find his way back down."
          ]
        },
        {
          heading: "The turning point",
          points: [
            "Moved by her thought for him even at that moment, the son cannot leave her. He carries her home and hides her.",
            "Later a problem faces the ruler or the village, and the old mother's experience and wisdom supply the solution.",
            "The ruler realises the worth of the old, and the cruel order is withdrawn."
          ]
        },
        {
          heading: "Theme",
          points: [
            "Respect and care for elders; the worth of age and experience.",
            "A mother's selfless love, shown even when she is being abandoned.",
            "Wisdom is not a matter of youth or strength."
          ]
        }
      ],
      terms: [
        {term: "Folk tale", meaning: "A traditional story passed on by word of mouth."},
        {term: "Aged", meaning: "Very old."},
        {term: "Selfless", meaning: "Caring more about others than oneself."},
        {term: "Decree", meaning: "An official order given by a ruler."}
      ],
      qa: [
        {q: "Why did the mother drop twigs on the way up the mountain?", a: "So that her son could find his way back home safely."},
        {q: "What does the story teach about old people?", a: "That they deserve love and respect, and that their experience and wisdom can help everyone."}
      ],
      quiz: [
        {q: "The Aged Mother is a folk tale from:", options: ["Japan", "Brazil", "Egypt", "Norway"], answer: 0, explain: "It is a Japanese folk tale."},
        {q: "The son carried his mother to the:", options: ["sea", "mountain", "market", "palace"], answer: 1, explain: "The ruler's order was to leave the old on a mountain."},
        {q: "The mother's dropping of twigs showed her:", options: ["anger", "fear", "love and concern for her son", "wish to escape"], answer: 2, explain: "She wanted him to return safely."},
        {q: "The son finally:", options: ["left her", "took her back home", "sold her", "sent her away by boat"], answer: 1, explain: "He could not abandon her."},
        {q: "The main theme of the story is:", options: ["respect for elders", "greed", "hunting", "travel"], answer: 0, explain: "It values age, experience and a mother's love."}
      ]
    },
    {
      id: "pb-saint-ravidas",
      title: "Saint Ravidas",
      section: "Lessons",
      summary: "A short life of Saint Ravidas, the Bhakti saint of the fifteenth to sixteenth century whose hymns are included in the Guru Granth Sahib. The PSEB version may differ in detail.",
      notes: [
        {
          heading: "Life",
          points: [
            "Ravidas (also called Raidas) was born in Varanasi (Kashi) and, as tradition says, belonged to a family of leather workers (cobblers).",
            "He earned his living by his craft and lived a simple life of devotion and honest work.",
            "He lived in the Bhakti movement period, around the fifteenth to sixteenth century; exact dates are debated."
          ]
        },
        {
          heading: "Teachings",
          points: [
            "He taught devotion to one God and the equality of all human beings, and spoke against caste distinctions.",
            "Worship through honest work, humility and love, rather than empty rituals.",
            "He imagined a city without sorrow and inequality, which he called Begumpura."
          ]
        },
        {
          heading: "Legacy",
          points: [
            "About forty of his hymns are included in the **Guru Granth Sahib**.",
            "His followers are called Ravidassias, and he is honoured especially in Punjab and across north India.",
            "Tradition links him with other Bhakti voices such as Kabir; stories also link Mirabai with him, though historians differ on details."
          ]
        }
      ],
      terms: [
        {term: "Bhakti movement", meaning: "A medieval devotional movement stressing love of God above ritual and caste."},
        {term: "Hymn", meaning: "A religious song or poem of praise."},
        {term: "Caste", meaning: "A social division based on birth, which Ravidas opposed."},
        {term: "Begumpura", meaning: "Ravidas's vision of an ideal, sorrowless city."}
      ],
      qa: [
        {q: "What was Saint Ravidas's message about people?", a: "That all human beings are equal, and that devotion and honest work matter more than birth or ritual."},
        {q: "Why is Ravidas important to Sikhs?", a: "A number of his hymns (about forty) are included in the Guru Granth Sahib."}
      ],
      quiz: [
        {q: "Saint Ravidas belonged to the:", options: ["Bhakti movement", "Quit India Movement", "Green Revolution", "Swadeshi Movement"], answer: 0, explain: "He was a Bhakti saint."},
        {q: "He was born in:", options: ["Varanasi", "Amritsar", "Lahore", "Mumbai"], answer: 0, explain: "Varanasi (Kashi)."},
        {q: "His hymns appear in the:", options: ["Rigveda", "Guru Granth Sahib", "Quran only", "Panchatantra"], answer: 1, explain: "About forty are included."},
        {q: "Ravidas spoke against:", options: ["honest work", "caste distinctions", "devotion", "kindness"], answer: 1, explain: "He taught equality."},
        {q: "His imagined ideal city was called:", options: ["Anandpur", "Begumpura", "Kashipur", "Lahore"], answer: 1, explain: "Begumpura, a city without sorrow."}
      ]
    },
    {
      id: "pb-punjab-glimpse",
      title: "The Punjab: A Glimpse",
      section: "Lessons",
      summary: "A factual overview of Punjab: its name, rivers, farming, culture, festivals and food. The PSEB lesson may stress different details.",
      notes: [
        {
          heading: "Land and rivers",
          points: [
            "“Punjab” means the land of five rivers (panj = five, ab = water): the Jhelum, Chenab, Ravi, Beas and Sutlej.",
            "Indian Punjab lies in the north-west of India; Chandigarh is its capital (shared with Haryana). The present state took shape on 1 November 1966.",
            "Its fertile plains are watered by rivers and canals, and it has long been called the granary of India for wheat and rice."
          ]
        },
        {
          heading: "People and culture",
          points: [
            "The language is Punjabi, written in the Gurmukhi script in India.",
            "Folk dances: bhangra for men and giddha for women. Music, folk songs and the dhol are part of every celebration.",
            "Famous places: the Golden Temple (Harmandir Sahib) in Amritsar, Anandpur Sahib and Jallianwala Bagh."
          ]
        },
        {
          heading: "Festivals and food",
          points: [
            "Festivals: Baisakhi, Lohri, Teeyan, Diwali and the Gurpurabs.",
            "Food: makki di roti with sarson da saag, parathas, lassi, dal and kheer.",
            "Punjabis are known for hard work, hospitality and the tradition of langar, the free community meal."
          ]
        }
      ],
      terms: [
        {term: "Punjab", meaning: "“Land of five rivers”."},
        {term: "Gurmukhi", meaning: "The script in which Punjabi is written in India."},
        {term: "Bhangra", meaning: "A lively folk dance of Punjab."},
        {term: "Langar", meaning: "The free community kitchen in a gurdwara."}
      ],
      qa: [
        {q: "What does the word Punjab mean?", a: "Land of five rivers — from panj (five) and ab (water)."},
        {q: "Why is Punjab called the granary of India?", a: "Because its fertile plains produce large amounts of wheat and rice for the country."}
      ],
      quiz: [
        {q: "Punjab means:", options: ["land of five rivers", "land of seven hills", "land of lakes", "land of deserts"], answer: 0, explain: "Panj = five, ab = water."},
        {q: "The capital of Punjab (India) is:", options: ["Ludhiana", "Chandigarh", "Jalandhar", "Patiala"], answer: 1, explain: "Chandigarh serves Punjab and Haryana."},
        {q: "Giddha is performed by:", options: ["men", "women", "only soldiers", "only children"], answer: 1, explain: "Giddha is the women's folk dance."},
        {q: "A festival of Punjab is:", options: ["Baisakhi", "Pongal", "Onam", "Bihu"], answer: 0, explain: "Baisakhi is a harvest festival."},
        {q: "A typical Punjabi dish is:", options: ["sarson da saag", "sushi", "pizza", "pasta"], answer: 0, explain: "It is usually eaten with makki di roti."}
      ]
    },
    {
      id: "pb-charge-for-love",
      title: "Charge for Love",
      section: "Lessons",
      summary: "A well-known short story in which a boy presents his mother with a bill for the little jobs he has done, and her reply shows that a mother's love can never be paid for. The PSEB version may differ in detail.",
      notes: [
        {
          heading: "The story",
          points: [
            "A young boy writes out a list of the small tasks he has done at home and sets a price for each one, then leaves the bill by his mother's plate.",
            "His mother says nothing at first. Later he finds a bill from her beside his own.",
            "Her bill lists the things she has done for him over the years, and beside each one she has written that there is no charge."
          ]
        },
        {
          heading: "The outcome",
          points: [
            "The boy reads her list and understands how much she does for him, freely and with love.",
            "He is ashamed of his bill and, in the usual ending, tears it up or says sorry and offers to help without payment.",
            "The tale is often told with a gentle, emotional ending."
          ]
        },
        {
          heading: "Theme",
          points: [
            "A parent's love is selfless and cannot be measured in money.",
            "Family duties are shared out of love, not for reward.",
            "Gratitude towards parents."
          ]
        }
      ],
      terms: [
        {term: "Bill", meaning: "A written list of charges to be paid."},
        {term: "Selfless", meaning: "Not thinking of oneself or of reward."},
        {term: "Gratitude", meaning: "A feeling of thankfulness."},
        {term: "Priceless", meaning: "Too valuable to be measured by money."}
      ],
      qa: [
        {q: "What did the boy do to hurt his mother?", a: "He asked to be paid for the small jobs he did at home, treating family duty as a business."},
        {q: "What does the mother's reply teach us?", a: "That her love and care are given freely and cannot be bought or repaid with money."}
      ],
      quiz: [
        {q: "The boy gave his mother a:", options: ["gift", "bill for his chores", "letter of thanks", "ticket"], answer: 1, explain: "He charged for his small tasks."},
        {q: "Her reply beside each item was:", options: ["pay now", "no charge", "double", "later"], answer: 1, explain: "Her love was free."},
        {q: "The boy felt:", options: ["proud and angry", "ashamed", "bored", "hungry"], answer: 1, explain: "He understood her love."},
        {q: "The story shows that parents' love is:", options: ["costly", "selfless", "limited", "temporary"], answer: 1, explain: "Love given without a price."},
        {q: "The story is mainly about:", options: ["a sports match", "a mother's love", "a journey", "a festival"], answer: 1, explain: "Its theme is a mother's selfless love."}
      ]
    },
    {
      id: "pb-safety-driving",
      title: "Safety while Driving",
      section: "Lessons",
      summary: "Basic road-safety rules for drivers and riders, and why following them saves lives. The PSEB lesson may contain different specific points.",
      notes: [
        {
          heading: "Personal safety",
          points: [
            "Wear a seat belt in a car and a helmet on a two-wheeler; helmets are required by law in India.",
            "Never drive after drinking alcohol or while very tired.",
            "Do not use a mobile phone while driving; it takes your attention from the road."
          ]
        },
        {
          heading: "Rules of the road",
          points: [
            "Drive on the left in India, obey speed limits, and keep a safe distance from the vehicle ahead.",
            "Obey traffic signals: red means stop, amber means get ready, green means go.",
            "Use indicators before turning, give way to pedestrians at crossings, and do not overtake on bends."
          ]
        },
        {
          heading: "Being responsible",
          points: [
            "Drive only with a valid licence, and keep your vehicle in good condition (brakes, tyres and lights).",
            "Avoid overloading, especially on two-wheelers; children should travel safely seated.",
            "Pedestrians, too, should use footpaths and zebra crossings."
          ]
        }
      ],
      terms: [
        {term: "Seat belt", meaning: "A strap that holds a passenger firmly in the seat during a crash."},
        {term: "Zebra crossing", meaning: "Black-and-white stripes on a road where pedestrians cross."},
        {term: "Overtake", meaning: "To pass a vehicle moving in the same direction."},
        {term: "Licence", meaning: "Official permission to drive."}
      ],
      qa: [
        {q: "Give three safe-driving rules.", a: "Wear a seat belt or helmet, obey speed limits and signals, and never use a phone or drive after drinking."},
        {q: "Why should one not use a mobile phone while driving?", a: "It distracts the driver and increases the chance of an accident."}
      ],
      quiz: [
        {q: "A two-wheeler rider should wear a:", options: ["cap", "helmet", "scarf only", "crown"], answer: 1, explain: "A helmet protects the head."},
        {q: "A red traffic light means:", options: ["go", "stop", "speed up", "turn only"], answer: 1, explain: "Red is for stop."},
        {q: "Vehicles in India drive on the:", options: ["left", "right", "both sides", "centre"], answer: 0, explain: "India drives on the left side."},
        {q: "Which habit is unsafe?", options: ["Using indicators", "Keeping a safe distance", "Talking on a phone while driving", "Wearing a seat belt"], answer: 2, explain: "It distracts the driver."},
        {q: "Zebra crossings are meant for:", options: ["parking", "pedestrians", "racing", "buses only"], answer: 1, explain: "They are for people on foot."}
      ]
    },
    {
      id: "pb-marco-polo",
      title: "Marco Polo",
      section: "Lessons",
      summary: "The life of Marco Polo, the Venetian merchant-traveller who journeyed along the Silk Road to the court of Kublai Khan in China and wrote about his experiences. The PSEB version may differ in detail.",
      notes: [
        {
          heading: "The journey",
          points: [
            "Marco Polo was born in Venice, Italy, around 1254. His father Niccolò and uncle Maffeo were merchants who had already travelled to the east.",
            "In 1271, as a teenager, he set out with them, travelling overland through Asia on the Silk Road trade routes.",
            "They reached the court of Kublai Khan, the Mongol emperor who ruled China, after a journey of several years."
          ]
        },
        {
          heading: "In China and the return",
          points: [
            "Marco stayed for many years in the service of Kublai Khan and travelled widely on his behalf.",
            "The Polos returned to Venice around 1295, mostly by sea.",
            "While in prison after a war between Venice and Genoa, Marco told his stories to a writer, Rustichello of Pisa, who wrote them down; the book is known as the Travels of Marco Polo."
          ]
        },
        {
          heading: "Importance",
          points: [
            "His book introduced many Europeans to the wealth and customs of Asia.",
            "It inspired later explorers and mapmakers.",
            "Some details are debated by historians, but his book remains a famous travel account."
          ]
        }
      ],
      terms: [
        {term: "Silk Road", meaning: "The ancient trade routes linking Asia and Europe."},
        {term: "Merchant", meaning: "A person who buys and sells goods."},
        {term: "Kublai Khan", meaning: "The Mongol ruler of China in the thirteenth century."},
        {term: "Travelogue", meaning: "A written account of a journey."}
      ],
      qa: [
        {q: "Who was Marco Polo and where did he travel?", a: "He was a merchant-traveller from Venice who travelled along the Silk Road to China and served at Kublai Khan's court."},
        {q: "How do we know about his travels?", a: "He told his stories to Rustichello of Pisa, who wrote them down in the book called the Travels of Marco Polo."}
      ],
      quiz: [
        {q: "Marco Polo came from:", options: ["Venice", "Beijing", "Cairo", "Madrid"], answer: 0, explain: "He was a Venetian."},
        {q: "He served at the court of:", options: ["Akbar", "Kublai Khan", "Napoleon", "Alexander"], answer: 1, explain: "Kublai Khan was ruler of China."},
        {q: "The route he travelled is known as the:", options: ["Grand Trunk Road", "Silk Road", "Spice Road", "Panama Canal"], answer: 1, explain: "The Silk Road linked Asia and Europe."},
        {q: "His stories were written down by:", options: ["Rustichello", "Columbus", "Dante", "Marco himself in China"], answer: 0, explain: "Rustichello of Pisa wrote them while they were in prison."},
        {q: "He began his journey in:", options: ["1271", "1971", "1171", "1871"], answer: 0, explain: "He left Venice in 1271."}
      ]
    },
    {
      id: "pb-dont-quit",
      title: "Don't Quit",
      section: "Lessons",
      summary: "A popular motivational poem, often printed anonymously, that urges readers to keep going when things are hard because success may be near. The PSEB text may differ.",
      notes: [
        {
          heading: "What the poem says",
          points: [
            "Life is full of ups and downs, and sometimes everything seems to go wrong.",
            "When you are tired or discouraged you may be tempted to give up, but you should rest rather than quit.",
            "Many people have given up when success was only a little way ahead."
          ]
        },
        {
          heading: "Message",
          points: [
            "**Perseverance**: keep trying despite setbacks.",
            "Failure is part of the road to success, not the end of it.",
            "Patience, courage and hope help us in difficult times."
          ]
        },
        {
          heading: "About the poem",
          points: [
            "It is a short poem in simple language with regular rhyme.",
            "Authorship is uncertain: it is often printed as anonymous, though several poets have been credited.",
            "It is widely used in schools and speeches for motivation."
          ]
        }
      ],
      terms: [
        {term: "Perseverance", meaning: "Continuing to try in spite of difficulty."},
        {term: "Setback", meaning: "A problem that delays progress."},
        {term: "Discouraged", meaning: "Having lost confidence or hope."},
        {term: "Anonymous", meaning: "Written by an unknown author."}
      ],
      qa: [
        {q: "What advice does the poem give when things go wrong?", a: "To rest if necessary, but not to quit, because success may be close."},
        {q: "Why is the poem said to be anonymous?", a: "Because its author is not certainly known; different poets have been named."}
      ],
      quiz: [
        {q: "The central message of “Don't Quit” is:", options: ["give up quickly", "keep trying", "avoid work", "wait for luck"], answer: 1, explain: "It encourages perseverance."},
        {q: "The poem is best described as:", options: ["motivational", "humorous", "a war song", "a riddle"], answer: 0, explain: "It inspires people to go on."},
        {q: "According to the poem, failure is:", options: ["the end", "a part of the road to success", "a shame", "a prize"], answer: 1, explain: "Setbacks come on the way."},
        {q: "A synonym of “quit” is:", options: ["continue", "give up", "begin", "win"], answer: 1, explain: "Quit = stop or give up."},
        {q: "The word “perseverance” means:", options: ["laziness", "steady effort", "anger", "silence"], answer: 1, explain: "It is persistence."}
      ]
    }
  ]
});
