// Class 8 English (PSEB): Grammar, Vocabulary, Writing and all 13 lessons of My English Companion 8.
// Grammar and writing written from the PSEB syllabus; lessons summarised in our own words from the PSEB textbook (2023-24 edition).
// All 13 lessons of the book are covered (Value of Money to Smashing the Glass Ceiling). Nothing from the syllabus is left out.
StudyData.add(8, "englishpb", {
  syllabus: {board: "PSEB", match: "textbook", books: ["My English Companion 8"], note: "Follows the PSEB 2026–27 syllabus; lessons summarised in our own words from the PSEB textbook (2023–24 edition).", reviewed: false},
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
      id: "pb-value-of-money",
      title: "Value of Money",
      section: "Lessons",
      summary: "A first-person story in which a fourteen-year-old works hard through the summer holidays to afford the newest computer, and learns from a shop assistant how quickly technology gets replaced. She decides to save the money instead.",
      notes: [
        {
          heading: "The story",
          points: [
            "The narrator, aged 14, already owns a working computer but keeps seeing adverts for a new Bell Computer with a very fast processor and huge storage, and starts to long for it.",
            "Her parents refuse to buy it, but offer a deal: she may earn the money by doing house chores and save up.",
            "She does the dishes, takes out the garbage, mows the lawn, cleans the house and washes the car. She grows so keen that she begs her father for more chores.",
            "After a few months she has enough money and goes to the Bell Center a week before her birthday to order the computer."
          ]
        },
        {
          heading: "The turning point",
          points: [
            "The shop employee tells her not to buy that model, because a faster one with double the storage is about to be released.",
            "The new model would cost so much that she would need two more months of chores.",
            "She realises that technology changes fast and a better machine always follows, so she decides not to spend her hard-earned money on something that will soon lose value.",
            "She puts all of it into a savings account."
          ]
        },
        {
          heading: "Theme and lesson",
          points: [
            "Earning money through effort teaches its true worth.",
            "Do not chase every new gadget; think about needs, not wants (the narrator calls herself a consumerist).",
            "Saving and investing is wiser than spending on things that quickly become outdated.",
            "The story also hints that overworking oneself at fourteen is unwise."
          ]
        },
        {
          heading: "About the lesson",
          points: [
            "The author given in the book is Vandana Lunyal.",
            "It is told in the first person, looking back on an event from the narrator's teenage years."
          ]
        }
      ],
      formulas: [
        "Age of narrator: 14. Item wanted: the Bell Computer. How she earned: house chores for a few months.",
        "Decision: she saved the money in a bank savings account instead of buying the computer."
      ],
      terms: [
        {term: "Consumerist", meaning: "Someone who strongly wants to keep buying new things."},
        {term: "Obsessed", meaning: "Unable to stop thinking about one thing."},
        {term: "Chores", meaning: "Small regular jobs done around the house."},
        {term: "Efficient", meaning: "Doing something quickly without wasting effort."},
        {term: "Savings account", meaning: "A bank account in which money is kept safe and earns interest."}
      ],
      qa: [
        {q: "Why did the narrator finally decide not to buy the computer?", a: "The shop employee told her a faster model with double the storage was coming soon. She saw that technology keeps changing and a costly machine soon loses value, so she saved the money."},
        {q: "How did the narrator earn the money?", a: "Her parents let her earn it through house chores such as washing dishes, taking out the garbage, mowing the lawn, cleaning the house and washing the car."}
      ],
      quiz: [
        {q: "How old was the narrator when she learned the value of money?", options: ["10", "12", "14", "18"], answer: 2, explain: "She says she was 14."},
        {q: "How did the narrator earn the money for the computer?", options: ["By selling old books", "By doing house chores", "By winning a prize", "By working at a shop"], answer: 1, explain: "Her parents offered to pay her for chores."},
        {q: "Why did the shop employee advise her against buying that computer?", options: ["It was out of order", "A faster model with double storage was coming soon", "It was too heavy", "The shop was closing"], answer: 1, explain: "A newer, better model was about to be released."},
        {q: "What did she do with the money in the end?", options: ["Bought the newer model", "Gave it to her father", "Put it in a savings account", "Bought a phone"], answer: 2, explain: "She invested it in a savings account."},
        {q: "The lesson of the story is mainly that:", options: ["Gadgets never lose value", "Money should be spent at once", "Hard-earned money should be used wisely, not on passing wants", "Parents should buy everything"], answer: 2, explain: "She learned to value money and think before spending."}
      ]
    },
    {
      id: "pb-earth-needs-you",
      title: "The Earth Needs You",
      section: "Lessons",
      summary: "A short anonymous poem that urges every reader to cut down on single-use plastic, which lasts almost for ever and ends up polluting oceans, rivers and trees.",
      notes: [
        {
          heading: "What the poem says",
          points: [
            "The Earth appeals to \"you\", meaning every reader, to change daily habits month by month and day by day.",
            "The poet says the changes are easy and that each person can make a difference.",
            "Single-use plastic is cheap but not clever, because it lasts almost for ever."
          ]
        },
        {
          heading: "The harm done",
          points: [
            "Plastic that is dropped does not stay where it falls; it travels on.",
            "It ends up in oceans, rivers and seas, and the wind carries it so that it gets tangled in trees.",
            "If people used less plastic, the world would be a better place."
          ]
        },
        {
          heading: "Message and form",
          points: [
            "The future is in our hands, so we should cut down on plastic use.",
            "Small steps taken by many people can protect the environment.",
            "The poem is short, in simple rhyming language, and the book lists the poet as anonymous."
          ]
        }
      ],
      terms: [
        {term: "Single-use plastic", meaning: "Plastic items such as bags, straws and cups that are used once and thrown away."},
        {term: "Anonymous", meaning: "Written by an unknown author."},
        {term: "Tangle", meaning: "To twist together so that it is hard to separate."},
        {term: "Pollution", meaning: "Harmful waste that spoils air, water or land."}
      ],
      qa: [
        {q: "Why does the poet call single-use plastic \"not very clever\"?", a: "Although it is cheap, it lasts almost for ever and ends up harming oceans, rivers and trees."},
        {q: "What does the poet want readers to do?", a: "To change their habits and cut down on single-use plastic, because each person can make a difference."}
      ],
      quiz: [
        {q: "Who does the word \"you\" in the poem refer to?", options: ["Only the poet", "Every reader", "Only scientists", "Only the government"], answer: 1, explain: "The Earth speaks to every reader."},
        {q: "According to the poem, single-use plastic:", options: ["decays quickly", "lasts almost for ever", "is very costly", "is made from paper"], answer: 1, explain: "The poem says it lasts almost for ever."},
        {q: "Where does the dropped plastic end up?", options: ["Only in dustbins", "In oceans, rivers, seas and trees", "Only in factories", "Underground only"], answer: 1, explain: "It reaches water bodies and gets tangled in trees."},
        {q: "What does the poet want us to do?", options: ["Use more plastic", "Cut down on plastic", "Burn plastic", "Sell plastic"], answer: 1, explain: "The poem ends by asking us to cut down."},
        {q: "The main message of the poem is:", options: ["Plastic is cheap, so use it", "Small changes by each person can protect the Earth", "Only governments can help", "Oceans do not matter"], answer: 1, explain: "It stresses that each person's choices count."}
      ]
    },
    {
      id: "pb-aged-mother",
      title: "The Aged Mother",
      section: "Lessons",
      summary: "A Japanese folk tale about a cruel governor who ordered old people to be put to death. A farmer takes his mother up the mountain, but her loving care for him makes him bring her home, and her wisdom later saves the province and ends the law.",
      notes: [
        {
          heading: "The cruel law",
          points: [
            "Long ago a province in Japan called Shining was ruled by a despotic governor, a good warrior who disliked anything that suggested weakness or failing health.",
            "He ordered that all aged people in the province be put to death, and in those harsh times abandoning the old was not unusual.",
            "A poor farmer who lived with his widowed mother at the foot of a mountain was filled with sorrow, but felt he had to obey."
          ]
        },
        {
          heading: "On the mountain",
          points: [
            "At sunset the farmer cooked unwhitened rice, tied it in a cloth, carried a pot of water, and lifted his mother onto his back to climb the mountain called Obatsuyama.",
            "The mother noticed that her son kept changing paths and might lose his way home. She quietly snapped twigs and dropped them along the route.",
            "At the top he made her a soft seat of pine needles and bade farewell in tears. She told him to follow the twigs to get back safely.",
            "Her selfless thought for him broke his heart; he refused to leave her and carried her home."
          ]
        },
        {
          heading: "The rope of ash",
          points: [
            "The farmer hid his mother in a walled closet beneath the kitchen floor.",
            "Later the governor demanded that his subjects bring him a rope of ash, and the whole province trembled.",
            "The old mother advised twisting a rope of straw, stretching it over flat stones and burning it on a windless night, so that the ash kept the rope's shape.",
            "The governor praised the clever farmer, learned the truth, and realised that old age brings wisdom. He then abolished the cruel law."
          ]
        },
        {
          heading: "Theme and source",
          points: [
            "Respect and care for the old; experience matters as much as youthful strength.",
            "A mother's selfless love, shown even when she is being abandoned.",
            "The book credits the adaptation to Matsuo Basho, the Japanese haiku poet of the seventeenth century, but the tale itself is a traditional Japanese folk tale."
          ]
        }
      ],
      terms: [
        {term: "Despotic", meaning: "Ruling with total power and without kindness."},
        {term: "Abandon", meaning: "To leave someone behind for good."},
        {term: "Barbarous", meaning: "Cruel and uncivilised."},
        {term: "Frailty", meaning: "Physical weakness."},
        {term: "Abolish", meaning: "To put an end to a law or custom."}
      ],
      qa: [
        {q: "Why did the mother drop twigs on the way up the mountain?", a: "She saw that her son was taking many different paths, so she dropped twigs to mark the way and let him find his way back safely."},
        {q: "How did the mother save the people of Shining?", a: "When the governor demanded a rope of ash, she told her son to burn a twisted straw rope on flat stones on a windless night. The ash kept the rope's shape, and the governor repealed the law."}
      ],
      quiz: [
        {q: "What was the name of the province in the story?", options: ["Shining", "Obatsu", "Kyoto", "Sunrise"], answer: 0, explain: "The province is called Shining."},
        {q: "Where did the farmer hide his mother?", options: ["In the forest", "In a closet beneath the kitchen floor", "In the governor's palace", "In a cave on the mountain"], answer: 1, explain: "He hid her in a walled closet under the kitchen floor."},
        {q: "What did the governor demand that nobody could easily make?", options: ["A rope of ash", "A golden cup", "A silk robe", "A bridge of twigs"], answer: 0, explain: "He asked for a rope of ash."},
        {q: "How was the rope of ash made?", options: ["By grinding ash into paste", "By burning a twisted straw rope on flat stones", "By melting metal", "By weaving wet cloth"], answer: 1, explain: "A straw rope burned on stones keeps its shape as ash."},
        {q: "What did the governor realise at the end?", options: ["Youth is stronger than age", "Old age means experience, not weakness", "Farmers are clever", "Mountains are dangerous"], answer: 1, explain: "He cancelled the law because age brings wisdom."}
      ]
    },
    {
      id: "pb-saint-ravidas",
      title: "Saint Ravidas",
      section: "Lessons",
      summary: "A short life of Saint Ravidas, the Bhakti saint of Banaras, who left school unhappy at caste bias, became a disciple of Swami Ramanand, saved a deer from a hunter, and taught that all humans are equal.",
      notes: [
        {
          heading: "Early life",
          points: [
            "The book says Ravidas was born in 1377 in Banaras, the son of a cobbler. Some traditions give a later date, so his exact dates are debated.",
            "His parents sent him to school, but he saw how a child of low caste was treated badly, and he left school unhappy.",
            "He often sat alone in deep thought, as if in meditation, and cared more for spiritual matters than for material things."
          ]
        },
        {
          heading: "Guru and mission",
          points: [
            "He sought a spiritual teacher and became a disciple of Swami Ramanand, whose sermons changed his life.",
            "When the guru felt the spiritual flame was lit for good, he sent Ravidas home to live as he wished.",
            "Ravidas chose Banaras for his work and prepared a quiet spot in a forest for meditation."
          ]
        },
        {
          heading: "The deer and the hunter",
          points: [
            "One day he saw a she-deer caught in a hunter's net while her three fawns watched helplessly.",
            "He told the hunter that all living beings are children of the same God, so every creature should be loved.",
            "The hunter was moved, changed his heart, and promised never to harm anyone."
          ]
        },
        {
          heading: "Teachings and legacy",
          points: [
            "He was humble and spoke simply; he said that caste, colour and creed are man-made, and called untouchability a sin against humanity.",
            "He gave hope and courage to the poor and weak.",
            "About forty of his hymns are included in the **Guru Granth Sahib**, and his followers are called Ravidassias.",
            "He imagined an ideal city without sorrow, Begumpura."
          ]
        }
      ],
      terms: [
        {term: "Bhakti movement", meaning: "A medieval devotional movement stressing love of God above ritual and caste."},
        {term: "Disciple", meaning: "A follower and student of a teacher."},
        {term: "Samadhi", meaning: "A state of deep meditation."},
        {term: "Compassionate", meaning: "Showing pity and care for those who suffer."},
        {term: "Begumpura", meaning: "Ravidas's vision of an ideal, sorrowless city."}
      ],
      qa: [
        {q: "Why could Ravidas not continue with his studies?", a: "At school he saw that children of low caste were treated badly, and in that unfriendly atmosphere he could not put his heart into studies."},
        {q: "How did Ravidas save the deer family?", a: "He spoke kindly to the hunter, saying that all creatures are children of the same God and must be loved. The hunter was moved and gave up harming them."}
      ],
      quiz: [
        {q: "In which city was Ravidas born, according to the lesson?", options: ["Banaras", "Amritsar", "Lahore", "Delhi"], answer: 0, explain: "He was born in Banaras."},
        {q: "Who was Ravidas's spiritual guru?", options: ["Swami Ramanand", "Guru Nanak", "Kabir", "Tulsidas"], answer: 0, explain: "He became a disciple of Swami Ramanand."},
        {q: "Whom did Ravidas save from a hunter?", options: ["A she-deer and her fawns", "A tiger", "A child", "A bird"], answer: 0, explain: "A she-deer was caught in a net."},
        {q: "What did Ravidas call untouchability?", options: ["A custom", "A sin against humanity", "A law", "A duty"], answer: 1, explain: "He opposed it strongly."},
        {q: "His hymns are included in the:", options: ["Rigveda", "Guru Granth Sahib", "Panchatantra", "Ramayana"], answer: 1, explain: "About forty of his hymns appear there."}
      ]
    },
    {
      id: "pb-dont-quit",
      title: "Don't Quit",
      section: "Lessons",
      summary: "A motivational poem by Edgar A. Guest that urges readers to keep trying when life is hard, because success may be much closer than it seems.",
      notes: [
        {
          heading: "What the poem says",
          points: [
            "When things go wrong, money is short and worries press down, you may feel like giving up. The poet says to rest if you must, but never to quit.",
            "Life has odd twists and turns, and many people fail only because they stopped just before winning.",
            "Even if progress is slow, you may succeed with one more effort."
          ]
        },
        {
          heading: "Images and ideas",
          points: [
            "The goal is often nearer than a tired, wavering person thinks.",
            "Many strugglers gave up when the prize was almost in reach and realised it too late.",
            "Success is described as failure turned inside out, a silver lining in the clouds of doubt.",
            "You can never tell how close you are, so keep fighting when things are worst."
          ]
        },
        {
          heading: "Message and poet",
          points: [
            "**Perseverance**: continue despite setbacks.",
            "Hard times test courage and patience.",
            "The poem is credited in the book to Edgar A. Guest, an American poet of the early twentieth century. It uses simple language and regular rhyme."
          ]
        }
      ],
      terms: [
        {term: "Perseverance", meaning: "Continuing to try in spite of difficulty."},
        {term: "Trudge", meaning: "To walk slowly with heavy steps."},
        {term: "Setback", meaning: "A problem that delays progress."},
        {term: "Faltering", meaning: "Losing strength or confidence."}
      ],
      qa: [
        {q: "What advice does the poet give when things go wrong?", a: "The poet says one may rest if necessary but must not quit, because success may be near."},
        {q: "What does the poet mean by saying that success is failure turned inside out?", a: "Failure and success are close; if one keeps trying after a failure, it can turn into success."}
      ],
      quiz: [
        {q: "The poem was written by:", options: ["Edgar A. Guest", "Ruskin Bond", "A P J Abdul Kalam", "Rabindranath Tagore"], answer: 0, explain: "The book credits Edgar A. Guest."},
        {q: "The central message of the poem is:", options: ["Give up early", "Keep trying", "Avoid hard work", "Wait for luck"], answer: 1, explain: "It encourages perseverance."},
        {q: "What may you do if you are tired, according to the poet?", options: ["Quit", "Rest", "Blame others", "Sleep forever"], answer: 1, explain: "Rest if you must, but do not quit."},
        {q: "According to the poet, the goal is often:", options: ["Far away", "Nearer than it seems", "Impossible", "Already won"], answer: 1, explain: "A tired person may not see how close the goal is."},
        {q: "The word \"trudging\" suggests walking:", options: ["quickly", "slowly and with effort", "happily", "in a race"], answer: 1, explain: "To trudge is to walk heavily and wearily."}
      ]
    },
    {
      id: "pb-old-sage-brothers",
      title: "The Old Sage and the Brothers",
      section: "Lessons",
      summary: "A rich farmer sends his three lazy sons to find work. On the road a sage tests them, rewards each with a magic gift and makes them promise to help the poor. Only the youngest keeps his word and keeps his good fortune.",
      notes: [
        {
          heading: "The setting out",
          points: [
            "An old rich farmer calls his three lazy sons, Harry, Raman and Sandeep, and says he will divide his three fields and three houses only among those who prove worthy.",
            "He tells them to find work and return after six months with their earnings.",
            "On the road they rest under a banyan tree, where a hungry old sage asks for food."
          ]
        },
        {
          heading: "The three gifts",
          points: [
            "Harry gives the sage a chapatti and receives a magic cloth; he wishes for a big house and ten cows.",
            "Raman carries the sage across a stream on his back and receives a magic stick; he wishes for a big house and a poultry farm.",
            "Sandeep fetches water for the thirsty sage in a desert and receives a magic rope; he wishes for a big house and a field.",
            "Each brother promises never to refuse a poor person who asks for milk, eggs or food respectively."
          ]
        },
        {
          heading: "The ending",
          points: [
            "Later Sandeep visits his brothers and finds their houses, cows and poultry farm gone.",
            "The sage tells him that they broke their promise and did not help the poor, so what they got was taken away.",
            "Sandeep kept his word, so he may enjoy his fortune as long as he remembers his promise."
          ]
        },
        {
          heading: "Theme",
          points: [
            "Kindness to strangers and helping the needy are rewarded.",
            "Keeping a promise matters more than wealth.",
            "Good fortune can be lost through selfishness."
          ]
        }
      ],
      terms: [
        {term: "Sage", meaning: "A wise old holy man."},
        {term: "Summon", meaning: "To call someone to come."},
        {term: "Promise", meaning: "A solemn word to do or not do something."},
        {term: "Needy", meaning: "Poor and in want of help."}
      ],
      qa: [
        {q: "What did each brother promise the sage?", a: "Each promised never to refuse a poor man: Harry for milk and its products, Raman for eggs, and Sandeep for food such as rice, wheat and fruit."},
        {q: "Why did only Sandeep keep his good fortune?", a: "His brothers broke their promise and did not help the poor, so their gifts were taken back. Sandeep kept his word."}
      ],
      quiz: [
        {q: "What did the farmer want his sons to do?", options: ["Study law", "Find work and earn", "Go on a pilgrimage", "Join the army"], answer: 1, explain: "They had to return with earnings after six months."},
        {q: "What gift did Raman receive from the sage?", options: ["A cloth", "A stick", "A rope", "A bowl"], answer: 1, explain: "Raman got a magic stick."},
        {q: "What did Sandeep do for the sage in the desert?", options: ["Carried him", "Fetched water", "Gave him a chapatti", "Gave him a blanket"], answer: 1, explain: "He brought water for the thirsty sage."},
        {q: "Why did Harry and Raman lose their wealth?", options: ["They were robbed", "They broke their promise to help the poor", "The sage cursed the village", "A flood came"], answer: 1, explain: "They did not help the needy as promised."},
        {q: "The story teaches that:", options: ["Luck is everything", "Keeping promises and helping the needy is rewarded", "Magic solves every problem", "Laziness is good"], answer: 1, explain: "Sandeep was rewarded for keeping his word."}
      ]
    },
    {
      id: "pb-punjab-glimpse",
      title: "The Punjab: A Glimpse",
      section: "Lessons",
      summary: "A teacher, Mr Mathew, takes his students round a Punjab pavilion at Amritsar and tells them about the state's brave people, freedom fighters, history, the Bhakra Dam, Golden Temple, Chandigarh and its industries.",
      notes: [
        {
          heading: "People and freedom fighters",
          points: [
            "The Bhangra dance shows the energy and zest for life of the Punjabis, who are hard-working, self-respecting and brave.",
            "Punjab gave the country freedom fighters such as Lala Lajpat Rai (Sher-e-Punjab), Bhagat Singh (Shaheed-e-Azam), Sukhdev, Udham Singh and Kartar Singh Sarabha.",
            "Lala Lajpat Rai died after a lathi charge on a procession in 1928; Bhagat Singh, Sukhdev and Rajguru were hanged, Bhagat Singh at the age of 23."
          ]
        },
        {
          heading: "History",
          points: [
            "On 13 April 1919, a crowd of about 20,000 people gathered at Jallianwala Bagh, Amritsar. The British troops blocked the exits and fired without warning; about 1000 were killed. The firing was ordered by General Dyer, though the lesson names O'Dwyer.",
            "Partition in 1947 brought bloodshed, and thousands lived in refugee camps. Punjabis rebuilt their state through hard work, and the Green Revolution made Punjab the granary of India.",
            "In 1966 Punjab was reorganised on the basis of language: Haryana was formed and some hill areas went to Himachal Pradesh. Chandigarh became the joint capital and a Union Territory. The new Punjab came into being on 1 November 1966."
          ]
        },
        {
          heading: "Places",
          points: [
            "The Bhakra Dam is about 740 feet high; its reservoir is Govind Sagar, and the dam gives irrigation and electricity to several states. Nehru called it the temple of modern India.",
            "The Golden Temple (Harmandir Sahib) in Amritsar stands in a square tank, with a marble path leading to it. It holds the Guru Granth Sahib, compiled by Guru Arjun Dev, the fifth Guru.",
            "Anandpur Sahib on the Sutlej was founded by Guru Teg Bahadur; Khalsa was founded here by Guru Gobind Singh in 1699.",
            "Chandigarh, designed by the French architect Le Corbusier, lies at the foot of the Shivalik hills and is famous for its Rose Garden."
          ]
        },
        {
          heading: "Industries and food",
          points: [
            "Jalandhar is a major centre for sports goods.",
            "Ludhiana produces most of the country's woollen hosiery.",
            "Amritsari jalebis end the trip."
          ]
        }
      ],
      terms: [
        {term: "Punjab", meaning: "\"Land of five rivers\"."},
        {term: "Green Revolution", meaning: "The big rise in farm output from new seeds and methods in the 1960s."},
        {term: "Reservoir", meaning: "A large lake that stores water, often behind a dam."},
        {term: "Union Territory", meaning: "An area ruled directly by the central government."},
        {term: "Zest", meaning: "Great enthusiasm and energy."}
      ],
      qa: [
        {q: "What happened at Jallianwala Bagh on 13 April 1919?", a: "British troops blocked the exits of the Bagh and fired on a peaceful crowd without warning, killing about 1000 people."},
        {q: "What changes took place in Punjab in 1966?", a: "Punjab was reorganised on the basis of language, Haryana was formed, some hill areas joined Himachal Pradesh, and Chandigarh became the joint capital and a Union Territory."}
      ],
      quiz: [
        {q: "Who is called Sher-e-Punjab?", options: ["Bhagat Singh", "Lala Lajpat Rai", "Udham Singh", "Sukhdev"], answer: 1, explain: "Lala Lajpat Rai bears the title."},
        {q: "Who designed Chandigarh?", options: ["Le Corbusier", "Lutyens", "Nehru", "Akbar"], answer: 0, explain: "The French architect Le Corbusier designed it."},
        {q: "What is the reservoir of the Bhakra Dam called?", options: ["Dal Lake", "Govind Sagar", "Harike", "Wular"], answer: 1, explain: "It is Govind Sagar."},
        {q: "Which city of Punjab is known for sports goods?", options: ["Ludhiana", "Patiala", "Jalandhar", "Bathinda"], answer: 2, explain: "Jalandhar is a sports-goods centre."},
        {q: "The reorganised Punjab came into being on:", options: ["15 August 1947", "1 November 1966", "26 January 1950", "13 April 1919"], answer: 1, explain: "1 November 1966."}
      ]
    },
    {
      id: "pb-we-who-love-books",
      title: "We who Love Books",
      section: "Lessons",
      summary: "A short poem by Ruskin Bond in which the speaker says some old, worn books will always stay on his shelves as lasting friends that give joy and free the mind.",
      notes: [
        {
          heading: "What the poem says",
          points: [
            "The speaker will never give away certain books, even though they are old and the binding is torn.",
            "They stay on his shelves, still read and still fresh each dawn, and their magic moments never fade.",
            "They are familiar friends, timeless tales he has known since he was ten, and turning their pages he feels the old refrain again."
          ]
        },
        {
          heading: "The ending",
          points: [
            "Great verse and great thoughts stand the test of time, even as time passes quickly.",
            "These good companions never fail to give joy and to nourish the mind.",
            "Those who love books are lucky because their minds are set free."
          ]
        },
        {
          heading: "Message and poet",
          points: [
            "Books are lifelong friends and sources of joy and knowledge.",
            "Good literature does not grow old.",
            "The poem is by Ruskin Bond, the Indian author of English stories and poems, who lives in Mussoorie."
          ]
        }
      ],
      terms: [
        {term: "Binding", meaning: "The cover that holds a book's pages together."},
        {term: "Timeless", meaning: "Not losing value or charm with time."},
        {term: "Refrain", meaning: "A line or phrase repeated in a poem or song."},
        {term: "Nourish", meaning: "To feed and help to grow."}
      ],
      qa: [
        {q: "Why will the speaker never give away some books?", a: "He treats them as old friends. They give him joy, stay fresh each time he reads them, and hold magic moments he never wants to lose."},
        {q: "Why does the poet call book lovers lucky?", a: "Books give joy and nourish the mind, so those who love them have minds that are free."}
      ],
      quiz: [
        {q: "Who wrote \"We who Love Books\"?", options: ["Ruskin Bond", "Edgar A. Guest", "A P J Abdul Kalam", "Vandana Lunyal"], answer: 0, explain: "The poem is by Ruskin Bond."},
        {q: "The speaker calls his favourite books:", options: ["burdens", "familiar friends", "enemies", "strangers"], answer: 1, explain: "He calls them familiar friends."},
        {q: "Since what age has he known these books?", options: ["Five", "Ten", "Fifteen", "Twenty"], answer: 1, explain: "They have been with him since he was ten."},
        {q: "Why are book lovers lucky, according to the poem?", options: ["They become rich", "Their minds are set free", "They never get tired", "They travel a lot"], answer: 1, explain: "Books free and nourish the mind."},
        {q: "The condition of the books the speaker keeps is:", options: ["new and shiny", "old and worn", "torn out", "lost"], answer: 1, explain: "They are old with torn bindings."}
      ]
    },
    {
      id: "pb-charge-for-love",
      title: "Charge for Love",
      section: "Lessons",
      summary: "A shop owner has puppies for sale. A small boy with a leg brace asks to buy the lame puppy, insisting on paying full price because it deserves the same worth as the others.",
      notes: [
        {
          heading: "The story",
          points: [
            "A shop owner puts up a board saying \"Puppies For Sale\". A little boy comes and asks the price; the owner says 30 to 50 dollars each.",
            "The boy has only 2.37 dollars in change and asks if that is enough to take a look.",
            "The owner whistles for Dolly, who runs out with four little puppies. A fifth, smaller pup follows, hobbling behind them."
          ]
        },
        {
          heading: "The lame puppy",
          points: [
            "The vet had found that the puppy has no hip socket, so it will always limp.",
            "The boy says he wants that one. The owner offers to give it free, saying it will never run and play like the others.",
            "The boy rolls up his trouser legs to show a steel brace on his badly twisted left leg and says the puppy needs someone who understands."
          ]
        },
        {
          heading: "The ending",
          points: [
            "With tears in his eyes the owner hands over the pup and says there can be no charge for love.",
            "The boy insists on paying: the puppy is worth as much as the others, so he will pay 2.37 dollars now and 50 cents a month until the price is cleared.",
            "He does not want to lower the pup's worth by taking it free."
          ]
        },
        {
          heading: "Theme",
          points: [
            "Empathy: the boy understands the puppy because he too is disabled.",
            "Every living being has equal worth, whatever its weakness.",
            "Love cannot be priced, but things of value deserve respect, not charity."
          ]
        }
      ],
      terms: [
        {term: "Lame", meaning: "Unable to walk properly because of an injured or weak leg."},
        {term: "Brace", meaning: "A metal support worn on a weak limb."},
        {term: "Empathy", meaning: "Understanding what another feels because you have felt something similar."},
        {term: "Veterinarian", meaning: "A doctor who treats animals."}
      ],
      qa: [
        {q: "Why did the boy choose the lame puppy?", a: "He too had a twisted leg and wore a brace, so he knew the puppy would need someone who understood it."},
        {q: "Why did the boy refuse to take the puppy for free?", a: "He felt that taking it free would suggest it was worth less than the other puppies. He wanted to pay the full price because it was just as valuable."}
      ],
      quiz: [
        {q: "How much money did the boy have?", options: ["2.37 dollars", "30 dollars", "50 dollars", "5 dollars"], answer: 0, explain: "He had 2.37 dollars in change."},
        {q: "What was wrong with the puppy?", options: ["It was blind", "It had no hip socket and limped", "It was sick", "It was too small to eat"], answer: 1, explain: "The vet found it lacked a hip socket."},
        {q: "What did the boy show the shop owner?", options: ["A photograph", "A steel brace on his twisted leg", "A bigger sum of money", "A letter"], answer: 1, explain: "He rolled up his trousers to show the brace."},
        {q: "What did the shop owner say about love?", options: ["It is costly", "There can be no charge for love", "It should be paid in cash", "It is a gift for the rich"], answer: 1, explain: "He said there can be no charge for love."},
        {q: "How did the boy plan to pay the full price?", options: ["Pay all at once", "2.37 dollars now and 50 cents a month", "Work at the shop", "Give his toys"], answer: 1, explain: "He promised monthly instalments."}
      ]
    },
    {
      id: "pb-safety-driving",
      title: "Safety while Driving",
      section: "Lessons",
      summary: "Seema tells how, at fourteen, she and her friend Bhavya secretly took her mother's car out and were stopped by police. The experience taught them that knowing about cars does not make a safe driver.",
      notes: [
        {
          heading: "The incident",
          points: [
            "Seema loves cars and reads about them online, so she feels she knows everything about driving.",
            "When her mother went to Delhi, she invited her friend Bhavya, who could ride a mobike and had helped her father move the family car.",
            "They planned a trip to Sector 17, a large shopping complex. They sneaked out with the keys, and Bhavya drove the car out of the garage."
          ]
        },
        {
          heading: "Caught by the police",
          points: [
            "Two traffic policemen stopped them at the end of the road and asked Bhavya for a licence, but both girls were only fourteen with no licence.",
            "The police took names, ages and addresses, called the parents, and impounded the car as two minors were in it.",
            "At the station they were counselled about the risk of accidents and shown pictures of crashes, one with a child who had died."
          ]
        },
        {
          heading: "Lessons",
          points: [
            "The girls decided never to repeat such a blunder and to learn at a driving school when they turn eighteen.",
            "Knowing how a car works does not make a good driver; driving is a skill learned with practice.",
            "Drivers should be patient, considerate and quick to react; pedestrians should be patient, cautious and alert. Safety must come first."
          ]
        }
      ],
      terms: [
        {term: "Impound", meaning: "To take a vehicle into official custody."},
        {term: "Minor", meaning: "A person under 18 years of age."},
        {term: "Pedestrian", meaning: "A person who walks on the road."},
        {term: "Reflexes", meaning: "Quick automatic reactions."},
        {term: "Itinerary", meaning: "A planned route or schedule for a trip."}
      ],
      qa: [
        {q: "Why did the police impound the car?", a: "Two minors without a licence were in the car, and one of them was driving."},
        {q: "What lesson did the girls learn?", a: "Knowing how cars work does not make one a good driver. Driving needs practice, a licence and knowledge of road rules, so they decided to learn at a driving school at eighteen."}
      ],
      quiz: [
        {q: "How old was Seema when she took the car out?", options: ["Ten", "Fourteen", "Eighteen", "Twenty"], answer: 1, explain: "She and Bhavya were fourteen."},
        {q: "Who drove the car first?", options: ["Seema", "Bhavya", "Seema's mother", "A policeman"], answer: 1, explain: "Bhavya sat in the driving seat."},
        {q: "Where did they plan to go?", options: ["Delhi", "Sector 17 shopping complex", "A school", "A temple"], answer: 1, explain: "They planned to visit Sector 17."},
        {q: "What did the police do with the car?", options: ["Returned it", "Impounded it", "Sold it", "Repaired it"], answer: 1, explain: "It was impounded as minors were driving."},
        {q: "What did the girls decide at the end?", options: ["To drive again", "To learn driving at a driving school at eighteen", "To buy a car", "To stop travelling"], answer: 1, explain: "They resolved to wait until they were eighteen."}
      ]
    },
    {
      id: "pb-my-dear-soldiers",
      title: "My Dear Soldiers",
      section: "Lessons",
      summary: "A short poem by Dr A P J Abdul Kalam that honours soldiers who guard the nation's borders on land, sea and in the air through every season, and prays for their well-being.",
      notes: [
        {
          heading: "What the poem says",
          points: [
            "The poet addresses soldiers as defenders of the borders and great sons of the land.",
            "While others sleep, they stay awake and stay true to their duty.",
            "They remain on guard through windy and snowy seasons and the scorching, sweltering heat."
          ]
        },
        {
          heading: "Where they serve",
          points: [
            "They walk the lonely stretches like yogis, climb heights and stride through valleys.",
            "They defend the desert, guard the marshes, keep watch at sea and secure the air.",
            "They give the prime of their youth to the nation."
          ]
        },
        {
          heading: "Message and poet",
          points: [
            "Gratitude and respect for soldiers' sacrifice and devotion to duty.",
            "The poem ends with a prayer asking that the Lord bless them all.",
            "A P J Abdul Kalam (1931-2015) was a scientist and the eleventh President of India."
          ]
        }
      ],
      terms: [
        {term: "Defender", meaning: "A person who protects something from attack."},
        {term: "Scorching", meaning: "Extremely hot."},
        {term: "Surveillance", meaning: "Close watch kept over an area."},
        {term: "Marsh", meaning: "Low, wet, muddy land."}
      ],
      qa: [
        {q: "How does the poet describe the soldiers' dedication?", a: "They stay awake and guard the nation in every season, whether it is windy, snowy or scorching hot, while the rest of us sleep."},
        {q: "Where do the soldiers guard the country, according to the poem?", a: "On heights and in valleys, in deserts and marshes, at sea and in the air."}
      ],
      quiz: [
        {q: "Who wrote \"My Dear Soldiers\"?", options: ["Ruskin Bond", "Dr A P J Abdul Kalam", "Edgar A. Guest", "Sarojini Naidu"], answer: 1, explain: "The poet is Dr A P J Abdul Kalam."},
        {q: "What does the poet call the soldiers?", options: ["Defenders of borders", "Merchants", "Travellers", "Kings"], answer: 0, explain: "They are defenders of the borders."},
        {q: "Soldiers walk the lonely expanses like:", options: ["birds", "yogis", "kings", "children"], answer: 1, explain: "The poem compares them to yogis."},
        {q: "What does the poem end with?", options: ["A complaint", "A prayer for the soldiers", "A warning", "A joke"], answer: 1, explain: "The poet prays that the Lord bless them."},
        {q: "The word \"scorching\" describes:", options: ["cold", "very hot", "wet", "windy"], answer: 1, explain: "Scorching means extremely hot."}
      ]
    },
    {
      id: "pb-marco-polo",
      title: "Marco Polo",
      section: "Lessons",
      summary: "The life of Marco Polo, the Venetian merchant who travelled with his father and uncle from Italy to China, spent 17 years there, and whose stories were written down in The Travels of Marco Polo.",
      notes: [
        {
          heading: "The journey east",
          points: [
            "Marco Polo was born in Venice, Italy, in 1254. At 17 he set out with his father Niccolo and uncle Maffeo for China.",
            "The journey took three years. On the way he saw Jerusalem, the Hindu Kush, Persia and the Gobi Desert.",
            "He was fascinated by the wealth of the Chinese cities and the grand court of Kublai Khan; the capital Kinsay was large, clean and well organised."
          ]
        },
        {
          heading: "Life in China and return",
          points: [
            "He lived in China for many years (17 years in all), learned the local language and travelled widely, serving the emperor as a messenger and spy.",
            "He also visited parts of Western Asia, North Africa and Southern Europe.",
            "After about twenty-four years of travelling, they left Venice in 1271 and returned in 1295."
          ]
        },
        {
          heading: "Later life and the book",
          points: [
            "Venice fought a war with Genoa, and Marco was captured and held in a Genoese prison until 1299.",
            "In prison he told his journeys to a well-known story writer, who wrote them in The Travels of Marco Polo.",
            "The book was translated into many languages; it is said Columbus was inspired by it.",
            "Marco became a wealthy merchant, married Donata Badoer, had three children, and died on 8 January 1324 aged 70."
          ]
        }
      ],
      terms: [
        {term: "Caravan", meaning: "A group of travellers or merchants journeying together, often with camels."},
        {term: "Voyage", meaning: "A long journey, especially by sea."},
        {term: "Kublai Khan", meaning: "The Mongol emperor of China whom Marco Polo served."},
        {term: "Genoa", meaning: "An Italian city that fought wars with Venice."}
      ],
      qa: [
        {q: "How did Marco Polo serve the Chinese emperor?", a: "He learned the local language, travelled widely and served as a messenger and spy for the emperor."},
        {q: "How did the stories of Marco's journeys come to be written?", a: "Marco was held in a Genoese prison after a war between Venice and Genoa. There he told his stories to a famous writer, who wrote them in The Travels of Marco Polo."}
      ],
      quiz: [
        {q: "Marco Polo was born in:", options: ["Venice", "Rome", "Beijing", "Cairo"], answer: 0, explain: "He was born in Venice in 1254."},
        {q: "Who travelled with Marco on his first journey?", options: ["His brother", "His father and uncle", "Kublai Khan", "A friend from Genoa"], answer: 1, explain: "Niccolo and Maffeo went with him."},
        {q: "Where was Marco imprisoned?", options: ["In China", "In a Genoese prison", "In Persia", "In Jerusalem"], answer: 1, explain: "He was captured in the Venice-Genoa war."},
        {q: "Which explorer is said to have been inspired by the book?", options: ["Vasco da Gama", "Christopher Columbus", "Magellan", "Captain Cook"], answer: 1, explain: "Columbus is believed to have carried it."},
        {q: "In which year did the Polos return to Venice?", options: ["1271", "1295", "1299", "1324"], answer: 1, explain: "They left in 1271 and came back in 1295."}
      ]
    },
    {
      id: "pb-glass-ceiling",
      title: "Smashing the Glass Ceiling",
      section: "Lessons",
      summary: "Two childhood friends meet after twenty-five years. Geet, once a topper, was not allowed to work after marriage, while Paramjeet, a house help's daughter, built a successful business and offers Geet a place in it.",
      notes: [
        {
          heading: "The meeting",
          points: [
            "The lesson begins by explaining that a glass ceiling is an unfair barrier that stops women from reaching important jobs and positions.",
            "Paramjeet meets Geet after twenty-five years. Paramjeet's widowed mother had been a house help in Geet's home, and Geet's parents treated Paramjeet as their daughter.",
            "Geet is surprised to see how well Paramjeet has done, though Paramjeet had been very poor as a child."
          ]
        },
        {
          heading: "Two life stories",
          points: [
            "Geet went abroad after marriage and looked after her husband, his parents and her two sons. She had been a topper in studies and sports but was not allowed to work. Her nest is now lonely.",
            "Paramjeet barely finished school because her mother had arthritis. A charitable agency taught her computer and internet skills, desktop publishing and money skills, and helped with a bank account and a loan.",
            "She started a shop with four women partners, later bought them out, and is now the sole owner.",
            "The shop designs posters and cards, does photography, and helps with Aadhaar registration, online tickets and banking. It employs local girls."
          ]
        },
        {
          heading: "The ending",
          points: [
            "Paramjeet's husband, parents-in-law and mother share the work at home as a team.",
            "Geet asks for work. Paramjeet asks her to help the business reach foreign customers by writing about the women's work.",
            "Geet feels she has found her nest again."
          ]
        },
        {
          heading: "Theme",
          points: [
            "Women should get equal chances to work and grow.",
            "Training, skills and support can lift anyone out of poverty.",
            "Real qualification comes from effort and achievement, not only degrees."
          ]
        }
      ],
      terms: [
        {term: "Glass ceiling", meaning: "An unfair barrier that stops women from reaching top positions."},
        {term: "Desktop publishing", meaning: "Using a computer and printer to produce books, magazines and other printed material."},
        {term: "Role model", meaning: "A person whom others look up to and copy."},
        {term: "Sole owner", meaning: "The only owner."},
        {term: "Arthritis", meaning: "A disease that makes the joints stiff and painful."}
      ],
      qa: [
        {q: "How did Paramjeet become a successful businesswoman?", a: "A charitable agency taught her computer, internet, desktop publishing and money skills and helped her with a bank account and loan. She started a shop with other women and later became its sole owner."},
        {q: "Why was Geet unhappy with her life?", a: "Although she was a topper, she was not allowed to work after marriage and spent her life looking after her family. Now her sons have left home and she feels lonely."}
      ],
      quiz: [
        {q: "How many years had passed since the friends met?", options: ["Ten", "Fifteen", "Twenty-five", "Thirty"], answer: 2, explain: "They met after twenty-five years."},
        {q: "Why was Paramjeet's schooling cut short?", options: ["She moved abroad", "Her mother caught arthritis and she had to earn", "She failed", "She married early"], answer: 1, explain: "She had to earn for her mother's treatment."},
        {q: "What skill did the agency NOT teach Paramjeet?", options: ["Desktop publishing", "Money skills", "Computer and internet skills", "Deep-sea diving"], answer: 3, explain: "Diving was never mentioned."},
        {q: "What does the glass ceiling stand for?", options: ["A kind of window", "An unfair barrier for women", "A rooftop garden", "A school award"], answer: 1, explain: "It blocks women from top positions."},
        {q: "What does Geet offer to do for Paramjeet's business?", options: ["Lend money", "Promote it to foreign customers", "Close it", "Buy it"], answer: 1, explain: "She will write stories and promote the business."}
      ]
    }
  ]
});
