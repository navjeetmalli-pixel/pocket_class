// Class 7 English (PSEB): Grammar, Vocabulary, Writing and well-known literature lessons.
// Written from the PSEB syllabus, not from the book's own text. All examples are original.
// Lessons not included (not confidently known): Rent for Water; Mountaineers; The Princess Who Never Smiled;
// A Treasure Hunt; A Gift for Sidhak; poems Trains, The Hunter and the Deer, An Earthquake.
StudyData.add(7, "englishpb", {
  syllabus: {board: "PSEB", match: "textbook", books: ["English (PSEB, Class 7)"], note: "Grammar, vocabulary and writing from the PSEB 2026–27 syllabus, plus the lessons whose stories are well known. Written from the syllabus, not the PSEB book's own text.", reviewed: false},
  chapters: [
    {
      id: "pb-nouns-pronouns",
      title: "Nouns and Pronouns",
      section: "Grammar",
      summary: "A noun names a person, place, thing or idea; a pronoun stands in for a noun. This chapter revises nouns and pronouns and adds the main kinds of each.",
      notes: [
        {
          heading: "Kinds of nouns",
          points: [
            "**Common noun**: general name (boy, city). **Proper noun**: particular name, with a capital letter (Harpreet, Chandigarh).",
            "**Collective noun**: a group taken as one (a team, a fleet of ships, a bunch of grapes).",
            "**Material noun**: the stuff things are made of (gold, wood, cotton).",
            "**Abstract noun**: a quality, feeling or idea you cannot touch (honesty, joy, childhood, bravery)."
          ]
        },
        {
          heading: "Number and gender (revision)",
          points: [
            "Plurals: add -s or -es (box → boxes); consonant + y → -ies (story → stories); irregular: child → children, woman → women.",
            "Gender: masculine (king), feminine (queen), common (student), neuter (chair).",
            "Pairs: bridegroom–bride, wizard–witch, emperor–empress, son–daughter."
          ]
        },
        {
          heading: "Kinds of pronouns",
          points: [
            "**Personal**: I, you, he, she, it, we, they (and me, him, her, us, them).",
            "**Possessive**: mine, yours, his, hers, ours, theirs — “The pen is mine.”",
            "**Demonstrative**: this, that, these, those. **Interrogative**: who, whom, whose, which, what.",
            "**Reflexive**: myself, himself, themselves — “She hurt herself.”",
            "**Relative**: who, which, that join clauses — “The girl who sang won a prize.”"
          ]
        }
      ],
      terms: [
        {term: "Abstract noun", meaning: "The name of a quality, feeling or idea, such as kindness."},
        {term: "Material noun", meaning: "The name of the substance from which things are made, such as silver."},
        {term: "Reflexive pronoun", meaning: "A pronoun ending in -self/-selves that refers back to the subject."},
        {term: "Possessive pronoun", meaning: "A pronoun showing ownership, such as hers or theirs."}
      ],
      qa: [
        {q: "Pick the abstract nouns: “Her honesty and courage won everyone's respect.”", a: "honesty, courage and respect — all are qualities or feelings, not things you can touch."},
        {q: "Fill in with a reflexive pronoun: “The children enjoyed ____ at the fair.”", a: "themselves — the pronoun refers back to the subject “the children”."}
      ],
      quiz: [
        {q: "Which is an abstract noun?", options: ["gold", "bravery", "teacher", "Delhi"], answer: 1, explain: "Bravery is a quality; you cannot touch it."},
        {q: "“Cotton” in “This shirt is made of cotton” is a:", options: ["proper noun","material noun","collective noun","abstract noun"], answer: 1, explain: "Cotton is the substance the shirt is made from."},
        {q: "Choose the possessive pronoun: “That bag is ____.”", options: ["she", "her", "hers", "herself"], answer: 2, explain: "Hers stands alone to show ownership; “her” needs a noun after it."},
        {q: "Which is a reflexive pronoun?", options: ["whom", "themselves", "those", "ours"], answer: 1, explain: "Themselves ends in -selves and refers back to the subject."},
        {q: "In “The boy who won the race is my cousin”, “who” is a:", options: ["demonstrative pronoun", "relative pronoun", "reflexive pronoun", "possessive pronoun"], answer: 1, explain: "Who joins the clause “won the race” to the noun “boy”."}
      ]
    },
    {
      id: "pb-verbs-tenses",
      title: "Verbs and Tenses",
      section: "Grammar",
      summary: "A verb shows an action or state. Tense shows the time. This chapter covers simple, continuous and perfect forms in the present and past.",
      notes: [
        {
          heading: "Verbs",
          points: [
            "A **verb** names an action (run), a state (be) or an occurrence (happen).",
            "**Helping (auxiliary) verbs**: is, am, are, was, were, has, have, had, do, does, did.",
            "Regular verbs add -ed for the past (walk → walked); irregular ones change (go → went → gone).",
            "A verb must agree with its subject: “She plays” but “They play”."
          ]
        },
        {
          heading: "Present tenses",
          points: [
            "**Simple present**: habits and facts — “He walks to school.” “The sun rises in the east.”",
            "**Present continuous** (is/am/are + verb-ing): happening now — “She is reading.”",
            "**Present perfect** (has/have + past participle): finished action linked to now — “I have finished my homework.”"
          ]
        },
        {
          heading: "Past tenses",
          points: [
            "**Simple past**: finished action in the past — “We visited Amritsar last year.”",
            "**Past continuous** (was/were + verb-ing): action going on at a past time — “It was raining at six.”",
            "**Past perfect** (had + past participle): the earlier of two past actions — “The train had left when we arrived.”"
          ]
        }
      ],
      terms: [
        {term: "Tense", meaning: "The form of a verb that shows the time of an action."},
        {term: "Auxiliary verb", meaning: "A helping verb used with a main verb to form tenses, such as has or was."},
        {term: "Past participle", meaning: "The third form of a verb (eaten, written) used in perfect tenses."},
        {term: "Continuous tense", meaning: "A tense showing an action in progress."}
      ],
      qa: [
        {q: "Write the sentence in the present continuous: “Ravi plays cricket.”", a: "Ravi is playing cricket."},
        {q: "When do we use the past perfect tense?", a: "To show an action completed before another past action, as in “She had eaten before I reached.”"}
      ],
      quiz: [
        {q: "“The children ____ in the park now.” Choose the correct form.", options: ["play", "are playing", "played", "have play"], answer: 1, explain: "“Now” shows an action in progress, so present continuous is needed."},
        {q: "“I ____ already eaten.” Fill in the blank.", options: ["has", "am", "have", "was"], answer: 2, explain: "Present perfect uses have with I."},
        {q: "Which sentence is in the past perfect?", options: ["She sings well.", "She was singing.", "She had sung before.", "She has sung."], answer: 2, explain: "Had + past participle (sung) is the past perfect."},
        {q: "“Water boils at 100°C” is in the:", options: ["present continuous","simple past","simple present","present perfect"], answer: 2, explain: "A general fact uses the simple present."},
        {q: "The past participle of “write” is:", options: ["wrote", "writed", "written", "writing"], answer: 2, explain: "Write – wrote – written."}
      ]
    },
    {
      id: "pb-adjectives",
      title: "Adjectives and Degrees of Comparison",
      section: "Grammar",
      summary: "An adjective describes a noun or pronoun. Most adjectives have three degrees: positive, comparative and superlative.",
      notes: [
        {
          heading: "Kinds of adjectives",
          points: [
            "**Quality**: tall, honest, red. **Quantity**: some, much, little, enough. **Number**: five, many, few, first.",
            "**Demonstrative**: this, that, these, those. **Interrogative**: which, what, whose.",
            "An adjective usually comes before its noun (a brave girl) or after a linking verb (The girl is brave)."
          ]
        },
        {
          heading: "Degrees of comparison",
          points: [
            "**Positive**: compares nothing — “Gagan is tall.”",
            "**Comparative**: compares two — “Gagan is taller than Mani.”",
            "**Superlative**: compares three or more — “Gagan is the tallest in the class.”",
            "Short words add -er/-est (small, smaller, smallest); longer words use more/most (beautiful, more beautiful, most beautiful)."
          ]
        },
        {
          heading: "Irregular and special cases",
          points: [
            "good/well → better → best; bad → worse → worst; little → less → least; much/many → more → most.",
            "Final consonant doubles in short words: big → bigger → biggest. Consonant + y → -ier/-iest: happy → happier → happiest.",
            "Use **than** with the comparative and **the** with the superlative."
          ]
        }
      ],
      terms: [
        {term: "Adjective", meaning: "A word that describes a noun or pronoun."},
        {term: "Comparative", meaning: "The form of an adjective used to compare two things."},
        {term: "Superlative", meaning: "The form that shows the highest degree among three or more."},
        {term: "Positive degree", meaning: "The simple form of an adjective with no comparison."}
      ],
      qa: [
        {q: "Give the three degrees of “good” and “happy”.", a: "good, better, best; happy, happier, happiest."},
        {q: "Rewrite in the comparative: “Mount Everest is very high.”", a: "Mount Everest is higher than any other mountain. (Or: Everest is higher than K2.)"}
      ],
      quiz: [
        {q: "The superlative of “bad” is:", options: ["badder", "worse", "worst", "baddest"], answer: 2, explain: "Bad – worse – worst is irregular."},
        {q: "“She is ____ than her sister.” (clever)", options: ["clever", "cleverer", "cleverest", "most clever"], answer: 1, explain: "Two persons are compared, so use the comparative with than."},
        {q: "In “I have few friends here”, “few” is an adjective of:", options: ["quality", "number", "quantity", "demonstration"], answer: 1, explain: "Few tells how many (countable), so it shows number."},
        {q: "Choose the correct sentence.", options: ["She is the most tallest girl.", "She is the tallest girl.", "She is tallest girl.", "She is the taller girl in class."], answer: 1, explain: "Use the + superlative; do not double the superlative."},
        {q: "The comparative of “beautiful” is:", options: ["beautifuler", "more beautiful", "most beautiful", "beautifulest"], answer: 1, explain: "Long adjectives take more before them."}
      ]
    },
    {
      id: "pb-adverbs",
      title: "Adverbs",
      section: "Grammar",
      summary: "An adverb tells more about a verb, an adjective or another adverb. It answers how, when, where or how much.",
      notes: [
        {
          heading: "Kinds of adverbs",
          points: [
            "**Manner** (how): slowly, carefully, well — “She sang sweetly.”",
            "**Time** (when): now, yesterday, soon, already. **Place** (where): here, there, outside, nearby.",
            "**Frequency** (how often): always, never, often, sometimes. **Degree** (how much): very, quite, too, almost."
          ]
        },
        {
          heading: "Forming and using adverbs",
          points: [
            "Many adverbs are made by adding **-ly** to an adjective: quick → quickly, soft → softly; happy → happily.",
            "Some have the same form as the adjective: fast, hard, early, late. Note: good (adjective) but **well** (adverb).",
            "An adverb can modify an adjective (very tall) or another adverb (quite slowly)."
          ]
        },
        {
          heading: "Position",
          points: [
            "Frequency adverbs usually go before the main verb: “He **always** wakes early.”",
            "Manner adverbs usually follow the verb or its object: “She spoke **politely**.”",
            "“Too” means more than needed; “very” only intensifies: “too hot to drink” vs “very hot”."
          ]
        }
      ],
      terms: [
        {term: "Adverb", meaning: "A word that modifies a verb, adjective or another adverb."},
        {term: "Adverb of manner", meaning: "An adverb that tells how an action is done."},
        {term: "Adverb of frequency", meaning: "An adverb that tells how often something happens."},
        {term: "Adverb of degree", meaning: "An adverb that tells to what extent, such as very or quite."}
      ],
      qa: [
        {q: "Underline the adverb and name its kind: “The students listened carefully.”", a: "carefully — an adverb of manner (it tells how they listened)."},
        {q: "Write the adverb forms of: happy, gentle, fast.", a: "happily, gently, fast (fast stays the same)."}
      ],
      quiz: [
        {q: "Which word is an adverb in “He runs quickly”?", options: ["He", "runs", "quickly", "none"], answer: 2, explain: "Quickly modifies the verb runs and tells how he runs."},
        {q: "“She is a ____ singer.” / “She sings ____.” Choose the adverb pair form.", options: ["good, good", "well, well", "good, well", "well, good"], answer: 2, explain: "Good is an adjective for the noun; well is the adverb for the verb."},
        {q: "“We never skip breakfast.” “Never” is an adverb of:", options: ["manner", "frequency", "place", "degree"], answer: 1, explain: "Never says how often."},
        {q: "In “The soup is too hot to eat”, “too” is an adverb of:", options: ["time", "place", "degree", "manner"], answer: 2, explain: "Too tells the extent of hotness."},
        {q: "Which is the adverb form of “angry”?", options: ["angryly","angrly","angriness","angrily"], answer: 3, explain: "Consonant + y changes to i before -ly."}
      ]
    },
    {
      id: "pb-prepositions",
      title: "Prepositions",
      section: "Grammar",
      summary: "A preposition shows how a noun or pronoun is related to another word in the sentence, in time, place or direction. This chapter also separates easily confused pairs.",
      notes: [
        {
          heading: "Common prepositions",
          points: [
            "**Place**: in, on, at, under, over, near, behind, in front of.",
            "**Time**: at (at 5 o'clock), on (on Monday), in (in June, in 2020), since, for, during.",
            "**Direction**: to, from, into, across, through, towards.",
            "A preposition is followed by a noun or pronoun: “with **her**”, not “with she”."
          ]
        },
        {
          heading: "Beside and besides",
          points: [
            "**Beside** = next to: “She sat beside me.”",
            "**Besides** = in addition to, apart from: “Besides Hindi, he speaks Punjabi.”"
          ]
        },
        {
          heading: "Between and among",
          points: [
            "**Between** is used for two persons or things: “Divide the sweet between the two of you.”",
            "**Among** is used for more than two: “The teacher distributed books among the students.”",
            "Also note: since (a point of time) vs for (a period): since 2019, for three years."
          ]
        }
      ],
      terms: [
        {term: "Preposition", meaning: "A word that shows the relation of a noun or pronoun to another word."},
        {term: "Beside", meaning: "Next to or by the side of."},
        {term: "Besides", meaning: "In addition to; apart from."},
        {term: "Among", meaning: "In the middle of, or shared by, more than two."}
      ],
      qa: [
        {q: "Fill in beside/besides: “____ cricket, he likes hockey.”", a: "Besides — it means in addition to cricket."},
        {q: "Fill in between/among: “The sisters shared the mangoes ____ themselves (three sisters).”", a: "among — because more than two persons are involved."}
      ],
      quiz: [
        {q: "“The lamp is ____ the bed.” (next to)", options: ["besides", "beside", "between", "among"], answer: 1, explain: "Beside means next to."},
        {q: "“There was a quarrel ____ the two brothers.”", options: ["among", "between", "besides", "since"], answer: 1, explain: "Two persons: between."},
        {q: "“I have lived here ____ 2018.”", options: ["for", "during", "since", "from to"], answer: 2, explain: "Since goes with a point of time."},
        {q: "“The sweets were distributed ____ the pupils of the class.”", options: ["between", "beside", "among", "at"], answer: 2, explain: "Many pupils: among."},
        {q: "Choose the correct sentence.", options: ["Come with I.", "Come with me.", "Come with my.", "Come with mine."], answer: 1, explain: "A preposition takes the object form: me."}
      ]
    },
    {
      id: "pb-conjunctions",
      title: "Conjunctions",
      section: "Grammar",
      summary: "A conjunction joins words, phrases or sentences. This chapter covers the common co-ordinating and subordinating conjunctions.",
      notes: [
        {
          heading: "Co-ordinating conjunctions",
          points: [
            "They join words or clauses of equal weight: **and, but, or, so, yet, nor, for**.",
            "**And** adds: “Tea and biscuits.” **But / yet** contrast: “He is small but strong.”",
            "**Or** gives a choice: “Tea or coffee?” **So** shows result: “It rained, so we stayed in.”"
          ]
        },
        {
          heading: "Subordinating conjunctions",
          points: [
            "They join a dependent clause to a main clause.",
            "**Time**: when, while, before, after, until. **Reason**: because, since, as.",
            "**Condition**: if, unless. **Contrast**: although, though. **Purpose**: so that."
          ]
        },
        {
          heading: "Correlative pairs",
          points: [
            "Pairs used together: either … or, neither … nor, both … and, not only … but also.",
            "“**Neither** the teacher **nor** the students knew the answer.”",
            "Do not use both “although” and “but” in one sentence."
          ]
        }
      ],
      terms: [
        {term: "Conjunction", meaning: "A word that joins words, phrases or clauses."},
        {term: "Clause", meaning: "A group of words with a subject and a verb."},
        {term: "Correlative conjunction", meaning: "Conjunctions used in pairs, such as either … or."},
        {term: "Subordinating conjunction", meaning: "A conjunction that begins a dependent clause."}
      ],
      qa: [
        {q: "Join using “because”: “He was late. The bus broke down.”", a: "He was late because the bus broke down."},
        {q: "Fill in: “____ you work hard, you will not pass.”", a: "Unless — it means “if you do not work hard”."}
      ],
      quiz: [
        {q: "“She was tired, ____ she kept working.”", options: ["so", "yet", "because", "or"], answer: 1, explain: "Yet shows contrast: tired but still working."},
        {q: "Choose the pair: “____ Ravi ____ Sukhi came to the party.”", options: ["Both … or", "Neither … nor", "Either … nor", "Not … but"], answer: 1, explain: "Neither goes with nor."},
        {q: "“I will wait ____ you return.”", options: ["unless","until","although","since"], answer: 1, explain: "Until shows time up to a point."},
        {q: "Which is a co-ordinating conjunction?", options: ["because", "although", "but", "while"], answer: 2, explain: "But joins clauses of equal importance."},
        {q: "“____ it was raining, we played outside.”", options: ["Because", "Although", "Unless", "So"], answer: 1, explain: "Although shows contrast between rain and playing outside."}
      ]
    },
    {
      id: "pb-articles-determiners",
      title: "Articles and Determiners",
      section: "Grammar",
      summary: "Articles (a, an, the) are the commonest determiners. Determiners are words placed before a noun to show which one or how many.",
      notes: [
        {
          heading: "A, an and the",
          points: [
            "**A** goes before a consonant sound: a book, a university (sounds “yoo”), a European.",
            "**An** goes before a vowel sound: an apple, an hour (silent h), an MLA.",
            "**The** is the definite article — used for a particular, known thing: “the book on the table”, or something unique: the sun, the moon."
          ]
        },
        {
          heading: "Uses of “the”",
          points: [
            "Before rivers, seas, mountain ranges: the Sutlej, the Himalayas, the Arabian Sea.",
            "Before superlatives and “only”: the best, the only child.",
            "Usually no article before names of people, most countries, languages, and meals: Simran, India, Punjabi, breakfast."
          ]
        },
        {
          heading: "Other determiners",
          points: [
            "**Demonstratives**: this, that, these, those. **Possessives**: my, your, his, her, our, their.",
            "**Quantifiers**: some, any, much, many, few, little, all, several.",
            "**Numbers**: one, two, first, second. Use **many** with countable and **much** with uncountable nouns."
          ]
        }
      ],
      terms: [
        {term: "Article", meaning: "The words a, an and the."},
        {term: "Determiner", meaning: "A word before a noun that shows which one or how much."},
        {term: "Definite article", meaning: "The word “the”, used for a particular thing."},
        {term: "Quantifier", meaning: "A determiner that shows quantity, such as few or much."}
      ],
      qa: [
        {q: "Fill in a/an/the: “She is ____ honest girl and lives near ____ Beas.”", a: "an honest girl (h is silent) and near the Beas (a river takes “the”)."},
        {q: "What is the difference between “few” and “a few”?", a: "“Few” means almost none (negative); “a few” means some (positive): “Few came” vs “A few came”."}
      ],
      quiz: [
        {q: "“____ hour passed quickly.” Fill in the article.", options: ["A", "An", "The a", "No article"], answer: 1, explain: "Hour begins with a vowel sound (silent h), so an."},
        {q: "Which needs “the”?", options: ["___ Punjabi","___ Rajan","___ Ganga","___ breakfast"], answer: 2, explain: "Names of rivers take the."},
        {q: "“How ____ water is left?” Choose the determiner.", options: ["many", "much", "few", "several"], answer: 1, explain: "Water is uncountable, so much."},
        {q: "“He is ____ university student.”", options: ["an","the","no article","a"], answer: 3, explain: "University starts with a “yoo” sound, so a."},
        {q: "In “Those books are mine”, “those” is a:", options: ["quantifier", "possessive", "demonstrative determiner", "article"], answer: 2, explain: "Those points out particular books."}
      ]
    },
    {
      id: "pb-sentences",
      title: "Sentences: Kinds and Subject–Predicate",
      section: "Grammar",
      summary: "A sentence is a group of words that makes complete sense. This chapter covers the four kinds of sentences and the subject and predicate.",
      notes: [
        {
          heading: "Kinds of sentences",
          points: [
            "**Assertive (statement)**: gives information; ends with a full stop — “The bell rang.”",
            "**Interrogative**: asks a question; ends with ? — “Where is your book?”",
            "**Imperative**: command, request or advice — “Close the door.” (subject “you” is understood)",
            "**Exclamatory**: strong feeling; ends with ! — “What a lovely day!”"
          ]
        },
        {
          heading: "Subject and predicate",
          points: [
            "The **subject** is the person or thing the sentence is about.",
            "The **predicate** says something about the subject; it contains the verb.",
            "“The young farmer | ploughed his field.” — subject: the young farmer; predicate: ploughed his field."
          ]
        },
        {
          heading: "Finding them",
          points: [
            "Ask “Who/What + verb?” to find the subject: “Who ploughed?” → the young farmer.",
            "The part left over is the predicate.",
            "A sentence needs a subject and a verb and must make complete sense; “Running in the park” is not a sentence."
          ]
        }
      ],
      terms: [
        {term: "Sentence", meaning: "A group of words that gives complete sense."},
        {term: "Subject", meaning: "The part of a sentence that names who or what it is about."},
        {term: "Predicate", meaning: "The part that tells something about the subject."},
        {term: "Imperative sentence", meaning: "A sentence that gives a command or request."}
      ],
      qa: [
        {q: "Name the kind of sentence: “How wonderful the music is!”", a: "Exclamatory, because it expresses strong feeling and ends with an exclamation mark."},
        {q: "Separate subject and predicate: “The tall boy in the front row won the prize.”", a: "Subject: the tall boy in the front row. Predicate: won the prize."}
      ],
      quiz: [
        {q: "“Please sit down.” is a/an ____ sentence.", options: ["assertive", "interrogative", "imperative", "exclamatory"], answer: 2, explain: "It is a polite command or request."},
        {q: "The predicate of “The old man sat under the tree” is:", options: ["The old man", "sat under the tree", "under the tree", "The old"], answer: 1, explain: "The predicate contains the verb and tells what the subject did."},
        {q: "Which is an interrogative sentence?", options: ["Open the window.", "What a pity!", "Did you finish?", "She is kind."], answer: 2, explain: "It asks a question."},
        {q: "“What a beautiful rainbow!” ends with:", options: ["a full stop", "a question mark", "an exclamation mark", "a comma"], answer: 2, explain: "Exclamatory sentences end with !"},
        {q: "The subject in “Birds fly south in winter” is:", options: ["fly", "south", "Birds", "winter"], answer: 2, explain: "Birds is who the sentence is about."}
      ]
    },
    {
      id: "pb-word-power",
      title: "Word Power",
      section: "Vocabulary",
      summary: "Building vocabulary: prefixes and suffixes, antonyms, unscrambling jumbled words, comparisons with “as … as”, alphabetical order and the use of “instead of”.",
      notes: [
        {
          heading: "Prefixes and suffixes",
          points: [
            "A **prefix** is added at the beginning and changes meaning: happy → **un**happy, possible → **im**possible, legal → **il**legal, agree → **dis**agree.",
            "A **suffix** is added at the end: care → care**ful**, help → help**less**, kind → kind**ness**, teach → teach**er**.",
            "Suffixes can change the part of speech: beauty (noun) → beautiful (adjective); quick → quickly (adverb)."
          ]
        },
        {
          heading: "Antonyms and jumbled words",
          points: [
            "**Antonyms** are opposites: brave–cowardly, ancient–modern, generous–selfish, victory–defeat.",
            "Prefixes make many antonyms: kind–unkind, honest–dishonest, visible–invisible.",
            "To unscramble a **jumbled word or sentence**, look for the subject first, then the verb, then the rest."
          ]
        },
        {
          heading: "Comparisons, alphabetical order, 'instead of'",
          points: [
            "“**As … as**” compares equals: as busy as a bee, as light as a feather, as cold as ice, as brave as a lion.",
            "**Alphabetical order**: arrange by first letter; if equal, use the second letter, and so on: apple, apricot, banana.",
            "**Instead of** means “in place of”: “I had tea instead of coffee.” It is followed by a noun or -ing form."
          ]
        }
      ],
      terms: [
        {term: "Prefix", meaning: "A group of letters added to the front of a word to change its meaning."},
        {term: "Suffix", meaning: "A group of letters added to the end of a word."},
        {term: "Antonym", meaning: "A word that means the opposite of another."},
        {term: "Simile", meaning: "A comparison using as … as or like, such as “as busy as a bee”."}
      ],
      qa: [
        {q: "Add a suitable prefix or suffix: (a) use (b) agree (c) hope.", a: "(a) useful / useless; (b) disagree; (c) hopeful / hopeless."},
        {q: "Arrange alphabetically: pear, peach, plum, papaya.", a: "papaya, peach, pear, plum."}
      ],
      quiz: [
        {q: "The antonym of “generous” is:", options: ["kind", "selfish", "wealthy", "polite"], answer: 1, explain: "A generous person gives freely; a selfish one does not."},
        {q: "Which prefix makes the opposite of “possible”?", options: ["un-", "dis-", "im-", "mis-"], answer: 2, explain: "Impossible (im- before p)."},
        {q: "“As ____ as a feather” completes with:", options: ["heavy", "light", "hard", "tall"], answer: 1, explain: "The common comparison is as light as a feather."},
        {q: "Which list is in alphabetical order?", options: ["cat, bat, rat", "ball, bat, bell", "dog, doll, dig", "tap, top, tip"], answer: 1, explain: "ball, bat, bell — second letter a, a, e, then l before t."},
        {q: "Choose the correct: “She drank juice ____ milk.”", options: ["beside","instead of","among","except"], answer: 1, explain: "Instead of means in place of."}
      ]
    },
    {
      id: "pb-letters-applications",
      title: "Letters and Applications",
      section: "Writing",
      summary: "How to lay out and write a personal letter, a formal letter and a school application.",
      notes: [
        {
          heading: "Parts of a letter",
          points: [
            "**Sender's address** and **date** at the top right (or left).",
            "**Salutation**: Dear Father / Dear Sir. **Body**: opening, main matter, closing lines.",
            "**Subscription** (closing): Yours lovingly / Yours sincerely / Yours faithfully, then the signature or name."
          ]
        },
        {
          heading: "Personal and formal letters",
          points: [
            "A **personal letter** is to friends or family; the tone is warm and informal.",
            "A **formal letter** (to an editor, principal or officer) is polite, short and to the point, with the receiver's designation and address.",
            "Add a **subject line** in a formal letter: “Subject: Request for a fee concession.”"
          ]
        },
        {
          heading: "Applications",
          points: [
            "Write to the Principal: “The Principal, [school name and place]”. Then “Subject: …”, “Sir/Madam,”.",
            "State the reason clearly and briefly (leave for illness, a fee concession, a transfer certificate).",
            "End with “Yours obediently,” and your name, class and roll number. Write the date."
          ]
        }
      ],
      terms: [
        {term: "Salutation", meaning: "The greeting at the start of a letter, such as “Dear Sir”."},
        {term: "Subscription", meaning: "The polite closing words before the signature."},
        {term: "Formal letter", meaning: "A letter to an official or stranger, written in polite, plain language."},
        {term: "Subject line", meaning: "A short heading stating the purpose of a formal letter or application."}
      ],
      qa: [
        {q: "How do you end an application to the Principal?", a: "With “Yours obediently,” followed by your name, class, roll number and the date."},
        {q: "How does a personal letter differ from a formal one?", a: "A personal letter is friendly and informal and has no subject line; a formal letter is polite, brief, addressed to an official and has a subject line."}
      ],
      quiz: [
        {q: "“Yours faithfully” is used when the letter begins with:", options: ["Dear Mother", "Dear Sir", "Dear Ravi", "Hi friend"], answer: 1, explain: "Dear Sir pairs with a formal closing."},
        {q: "A subject line is required in a:", options: ["letter to a friend", "diary", "formal letter or application", "postcard to a cousin"], answer: 2, explain: "Formal writing states its purpose in a subject line."},
        {q: "An application for leave is addressed to the:", options: ["Neighbour","Cousin","Principal","Cook"], answer: 2, explain: "School leave is requested from the Principal."},
        {q: "The greeting at the beginning of a letter is the:", options: ["subscription","body","signature","salutation"], answer: 3, explain: "The greeting is the salutation."},
        {q: "Which tone suits a letter to a friend?", options: ["stiff and official", "warm and informal", "angry", "legal"], answer: 1, explain: "Personal letters are friendly in tone."}
      ]
    },
    {
      id: "pb-paragraph-notice-message",
      title: "Paragraph, Notice and Message",
      section: "Writing",
      summary: "How to write a clear paragraph, a school notice and a short message.",
      notes: [
        {
          heading: "Paragraph writing",
          points: [
            "A paragraph is a group of sentences on **one main idea**.",
            "Begin with a **topic sentence**, add supporting sentences, and end with a closing line.",
            "Keep to the topic, use simple correct sentences and linking words (first, then, finally)."
          ]
        },
        {
          heading: "Notices",
          points: [
            "Parts: **name of institution**, the word **NOTICE**, **date**, a **heading**, the **matter** (what, when, where), and the writer's **name and designation**.",
            "Keep it short — usually under 50 words — and give all key details such as date, time and venue.",
            "Use the passive or impersonal style: “All students are informed that …”."
          ]
        },
        {
          heading: "Messages",
          points: [
            "A **message** is a brief note for someone who is absent: begin with the date, time, and the receiver's name.",
            "Give only the essential information in a few lines, then sign off with your name.",
            "Example: “Mother, Mani called at 4 p.m. She wants you to ring her back. — Gurleen”."
          ]
        }
      ],
      terms: [
        {term: "Topic sentence", meaning: "The sentence that states the main idea of a paragraph."},
        {term: "Notice", meaning: "A short public announcement giving details of an event or instruction."},
        {term: "Message", meaning: "A brief written note left for someone who is not present."},
        {term: "Designation", meaning: "The post or job title of the person, such as Principal or Secretary."}
      ],
      qa: [
        {q: "What details must a school notice contain?", a: "School name, the word Notice, date, heading, what/when/where, and the name and designation of the issuer."},
        {q: "Why should a message be short?", a: "The reader needs only the essential facts quickly, so unnecessary details are left out."}
      ],
      quiz: [
        {q: "A paragraph should deal with:", options: ["many ideas", "one main idea", "no idea", "only questions"], answer: 1, explain: "A paragraph develops a single main idea."},
        {q: "Which is NOT part of a notice?", options: ["date", "heading", "salutation like Dear Sir", "name of issuer"], answer: 2, explain: "A notice has no salutation."},
        {q: "A notice normally ends with the writer's:", options: ["favourite song","name and designation","address of a friend","marks"], answer: 1, explain: "It shows who issued it."},
        {q: "The first sentence stating the main idea is the:", options: ["closing sentence", "topic sentence", "title", "message"], answer: 1, explain: "That is the topic sentence."},
        {q: "A message is written for someone who is:", options: ["sitting beside you","famous","absent","asleep in class"], answer: 2, explain: "Messages are left for people who are not present."}
      ]
    },
    {
      id: "pb-story-picture",
      title: "Story Writing and Picture Description",
      section: "Writing",
      summary: "How to plan and write a short story and how to describe a picture in good order.",
      notes: [
        {
          heading: "Story writing",
          points: [
            "A story has a **beginning** (characters and setting), a **middle** (the problem or events) and an **end** (the resolution).",
            "Use the **past tense** and connecting words: one day, suddenly, soon, at last.",
            "Give a **title** and a **moral** or ending that follows from the events."
          ]
        },
        {
          heading: "Developing a story from hints",
          points: [
            "Read the given outline or hints carefully and keep to their order.",
            "Add names, places and small details; use some dialogue in inverted commas.",
            "Check spelling, punctuation and tense at the end."
          ]
        },
        {
          heading: "Picture description",
          points: [
            "First give a general idea of the scene (place, time), then describe what is in the foreground and background.",
            "Use the **present tense** and words of place: in the centre, on the left, behind, near.",
            "Mention what people are doing and the mood. Do not add things that are not in the picture."
          ]
        }
      ],
      terms: [
        {term: "Plot", meaning: "The series of events in a story."},
        {term: "Moral", meaning: "The lesson a story teaches."},
        {term: "Dialogue", meaning: "The words spoken by characters, written inside inverted commas."},
        {term: "Foreground", meaning: "The part of a picture nearest to the viewer."}
      ],
      qa: [
        {q: "Write the three parts of a story.", a: "Beginning (introducing characters and setting), middle (the problem and events), end (the solution and moral)."},
        {q: "Which tense is generally used in a story and which in a picture description?", a: "A story uses the past tense; a picture description uses the present tense."}
      ],
      quiz: [
        {q: "A story is normally written in the:", options: ["future tense","imperative","no tense","past tense"], answer: 3, explain: "Events that have happened are told in the past tense."},
        {q: "A picture description should mention:", options: ["invented characters","only what is visible","the artist's salary","a different picture"], answer: 1, explain: "Stay with what the picture shows."},
        {q: "“Suddenly” is useful in a story because it:", options: ["ends the story","names a character","links events","gives the title"], answer: 2, explain: "Linking words move the plot along."},
        {q: "The lesson of a story is its:", options: ["plot","setting","foreground","moral"], answer: 3, explain: "A moral is the lesson."},
        {q: "Dialogue is written within:", options: ["brackets", "inverted commas", "slashes", "capital letters"], answer: 1, explain: "Spoken words are placed in inverted commas."}
      ]
    },
    {
      id: "pb-birbals-khichdi",
      title: "Birbal's Khichdi",
      section: "Lessons",
      summary: "The well-known Akbar–Birbal tale of a poor man, a cold night and a pot of khichdi cooked far from the fire. The PSEB version may differ in detail; this is a summary in our own words.",
      notes: [
        {
          heading: "The story in brief",
          points: [
            "Emperor Akbar once said that a man could not stand all night in a cold lake; a poor man took up the challenge for a reward.",
            "He stood in the water through the night, looking at a lamp burning far away on the palace wall.",
            "Akbar refused the reward, claiming the lamp's heat had warmed the man, so he had not truly won."
          ]
        },
        {
          heading: "Birbal's reply",
          points: [
            "Birbal stayed away from court. When Akbar sent for him, he said his khichdi was still cooking.",
            "Akbar found the pot hung high above, with a fire lit far beneath it. He laughed that it could never cook.",
            "Birbal answered that if a distant lamp could warm a man in a lake, then a distant fire could cook the khichdi. Akbar understood, and the poor man was rewarded."
          ]
        },
        {
          heading: "Characters and message",
          points: [
            "**Akbar**: powerful but, here, unfair. **Birbal**: witty and wise. **The poor man**: patient and honest.",
            "The tale teaches that unfairness is best shown up by wit, not anger.",
            "It shows Birbal's habit of using a comic situation to teach a king a lesson."
          ]
        }
      ],
      terms: [
        {term: "Khichdi", meaning: "A simple dish of rice and lentils cooked together."},
        {term: "Wit", meaning: "Quick, clever humour and intelligence."},
        {term: "Reward", meaning: "A prize given for doing something."},
        {term: "Courtier", meaning: "A person in attendance at a royal court, like Birbal."}
      ],
      qa: [
        {q: "Why did Akbar refuse to reward the poor man?", a: "He claimed the distant lamp had given the man warmth, so he had not really stood in the cold."},
        {q: "How did Birbal make Akbar see his mistake?", a: "He cooked khichdi in a pot hung high above a distant fire, showing that the same logic would make the khichdi cook."}
      ],
      quiz: [
        {q: "Birbal was a courtier of:", options: ["Shah Jahan", "Akbar", "Babur", "Jahangir"], answer: 1, explain: "The Akbar–Birbal tales are among India's best-loved folk stories."},
        {q: "The poor man stood through the night in a:", options: ["desert","lake","garden","tent"], answer: 1, explain: "The challenge was to stand in the cold water."},
        {q: "Akbar's excuse for not paying was that the man was warmed by a:", options: ["blanket", "lamp", "fire in the lake", "companion"], answer: 1, explain: "He said the distant lamp gave the man heat."},
        {q: "Birbal showed his point by cooking:", options: ["kheer","rotis","khichdi","halwa"], answer: 2, explain: "The khichdi pot hung high above a far-off fire."},
        {q: "The main quality Birbal shows is:", options: ["laziness","greed","fear","wit"], answer: 3, explain: "He uses clever humour to make Akbar see sense."}
      ]
    },
    {
      id: "pb-glass-of-milk",
      title: "A Glass of Milk",
      section: "Lessons",
      summary: "A story of kindness repaid, about a poor boy, a glass of milk and the doctor he later became. The PSEB version may differ in detail; this is the commonly told version in our own words.",
      notes: [
        {
          heading: "The story in brief",
          points: [
            "In the commonly told version, a poor boy sells goods door to door to pay for his schooling.",
            "One day, tired and hungry, with almost no money, he asks a woman at a house for a drink of water.",
            "She guesses he is hungry and brings him a large glass of milk instead. He drinks it and asks how much he owes. She says nothing, since she believes kindness should not be charged for."
          ]
        },
        {
          heading: "Years later",
          points: [
            "The boy grows up to be a doctor — in the popular telling, Dr Howard Kelly.",
            "The woman later falls seriously ill and is sent to the hospital where he works. He recognises the town and is determined to help her.",
            "After her treatment, he marks her bill as paid in full with one glass of milk."
          ]
        },
        {
          heading: "Theme",
          points: [
            "**Kindness returns to the giver**, often in unexpected ways.",
            "Small acts of generosity can matter greatly to someone in need.",
            "Gratitude should be shown when the chance comes."
          ]
        }
      ],
      terms: [
        {term: "Gratitude", meaning: "A feeling of thankfulness for a kindness received."},
        {term: "Generosity", meaning: "Willingness to give or help freely."},
        {term: "Bill", meaning: "A written request for payment for a service."},
        {term: "Door to door", meaning: "Going from house to house, usually to sell something."}
      ],
      qa: [
        {q: "What did the woman give the boy when he asked for water?", a: "A glass of milk, because she saw he was hungry."},
        {q: "What is the message of the story?", a: "Kindness is never wasted; a good deed can come back to help the giver."}
      ],
      quiz: [
        {q: "The boy first asked the woman for:", options: ["food","water","money","milk"], answer: 1, explain: "He asked for a drink of water."},
        {q: "The woman refused payment because she believed:", options: ["he was rich","the milk was spoiled","kindness should be free","she was a doctor"], answer: 2, explain: "She felt a kind act should not be charged for."},
        {q: "The boy later became a:", options: ["pilot","soldier","farmer","doctor"], answer: 3, explain: "He became the doctor who treated her."},
        {q: "The hospital bill was marked paid with:", options: ["gold","one glass of milk","a letter","nothing"], answer: 1, explain: "The story is named for this."},
        {q: "The story mainly shows that:", options: ["milk is costly","doctors are rich","kindness comes back","the weather changes"], answer: 2, explain: "A good deed returned in the end."}
      ]
    },
    {
      id: "pb-hole-in-fence",
      title: "A Hole in the Fence",
      section: "Lessons",
      summary: "A short moral tale about anger, a father and nails in a wooden fence. The PSEB version may differ in detail; this is the widely told version in our own words.",
      notes: [
        {
          heading: "The story in brief",
          points: [
            "A boy has a very bad temper and often says hurtful things. His father gives him a bag of nails.",
            "Each time the boy loses his temper, he must hammer a nail into the wooden fence.",
            "On the first day he hammers many nails; as he learns to control his anger, he needs fewer."
          ]
        },
        {
          heading: "The second part",
          points: [
            "When the boy goes a whole day without losing his temper, his father tells him to pull out one nail for each calm day.",
            "Finally, all the nails are gone. The father takes him to the fence and shows the holes left behind.",
            "He explains that angry words leave scars, like the holes, even when we say sorry."
          ]
        },
        {
          heading: "Theme",
          points: [
            "**Self-control**: it is a skill that can be learned slowly, day by day.",
            "Hurtful words stay in a person's mind even after they are forgiven.",
            "Think before speaking."
          ]
        }
      ],
      terms: [
        {term: "Temper", meaning: "A person's tendency to become angry."},
        {term: "Scar", meaning: "A mark left after a wound has healed."},
        {term: "Fence", meaning: "A barrier of wood or wire around a field or garden."},
        {term: "Self-control", meaning: "The ability to control one's own feelings and actions."}
      ],
      qa: [
        {q: "What did the father ask the boy to do every time he lost his temper?", a: "Hammer one nail into the fence."},
        {q: "What do the holes in the fence stand for?", a: "The hurt left by angry words, which remains even after an apology."}
      ],
      quiz: [
        {q: "The boy's problem was his:", options: ["laziness","shyness","illness","bad temper"], answer: 3, explain: "He often lost his temper."},
        {q: "He was asked to hammer nails into a:", options: ["wall", "fence", "tree", "door"], answer: 1, explain: "The nails went into the wooden fence."},
        {q: "After calm days, the boy was told to:", options: ["add more nails","pull out a nail","paint the fence","break the fence"], answer: 1, explain: "One nail was removed for each calm day."},
        {q: "The holes remaining show that:", options: ["wood is weak","nails are cheap","words can leave lasting hurt","fences fall"], answer: 2, explain: "The holes stand for the hurt left by angry words."},
        {q: "The story teaches us to:", options: ["build fences","avoid fathers","buy nails","control our anger"], answer: 3, explain: "Self-control is the message."}
      ]
    },
    {
      id: "pb-hachiko",
      title: "Hachiko – The World's Most Loyal Dog",
      section: "Lessons",
      summary: "The true story of Hachiko, the Akita dog who kept returning to Shibuya railway station in Tokyo to wait for his dead master. The PSEB version may differ in detail.",
      notes: [
        {
          heading: "The true story",
          points: [
            "Hachiko was an Akita dog born in Japan in the 1920s. His owner was Professor Hidesaburo Ueno of the University of Tokyo.",
            "Each day Hachiko walked with the professor to Shibuya station and returned in the evening to meet him.",
            "In 1925 the professor died suddenly at work and never returned."
          ]
        },
        {
          heading: "Years of waiting",
          points: [
            "Hachiko kept coming to the station at the time of the evening train, for about nine years, until his own death in 1935.",
            "Commuters and station staff came to know him, and newspapers wrote about his faithfulness.",
            "A bronze statue of Hachiko stands at Shibuya station, where people meet and remember him."
          ]
        },
        {
          heading: "Theme",
          points: [
            "**Loyalty**: Hachiko's devotion has made him a symbol in Japan and around the world.",
            "The bond between humans and animals can be deep and lasting.",
            "The story has been retold in films and books."
          ]
        }
      ],
      terms: [
        {term: "Akita", meaning: "A large breed of dog that began in Japan."},
        {term: "Loyal", meaning: "Faithful to a person or cause."},
        {term: "Commuter", meaning: "A person who travels regularly to and from work."},
        {term: "Statue", meaning: "A figure of a person or animal made in stone or metal."}
      ],
      qa: [
        {q: "Why did Hachiko go to Shibuya station every evening?", a: "To meet Professor Ueno, and after the professor died, he kept waiting for him there for years."},
        {q: "How is Hachiko remembered today?", a: "By a bronze statue at Shibuya station and by films and books."}
      ],
      quiz: [
        {q: "Hachiko belonged to which breed?", options: ["Beagle","Akita","Pug","Poodle"], answer: 1, explain: "He was an Akita from Japan."},
        {q: "He waited at the station in the city of:", options: ["Osaka","Beijing","Tokyo","Seoul"], answer: 2, explain: "Shibuya station is in Tokyo."},
        {q: "Hachiko waited for roughly:", options: ["one week","one month","fifty years","nine years"], answer: 3, explain: "From 1925 to 1935."},
        {q: "The main quality shown by Hachiko is:", options: ["anger","loyalty","greed","laziness"], answer: 1, explain: "He stayed faithful to his master."},
        {q: "At Shibuya station today there is a:", options: ["zoo","school","bronze statue of Hachiko","dog race"], answer: 2, explain: "The statue is a popular meeting place."}
      ]
    },
    {
      id: "pb-naughty-boy",
      title: "There was a Naughty Boy",
      section: "Lessons",
      summary: "A light, humorous poem by John Keats about a boy who runs away to Scotland and finds that nothing there is very different from home. The PSEB version may differ in detail.",
      notes: [
        {
          heading: "The poet and form",
          points: [
            "It is by the English Romantic poet **John Keats** (1795–1821), written as a comic verse in a letter in 1818.",
            "It is a short **nonsense-style narrative poem**, with simple rhyming lines and a playful tone.",
            "Keats is better known for serious poems such as “Ode to a Nightingale”, so this one shows his funny side."
          ]
        },
        {
          heading: "What happens",
          points: [
            "A naughty boy runs away from home to see the people of Scotland.",
            "He looks around, but finds the houses, people and things much like those he knew, and nothing remarkable.",
            "He returns home as he left it — his adventure has taught him little, and the poem ends in gentle humour."
          ]
        },
        {
          heading: "Ideas and features",
          points: [
            "The poem pokes fun at the idea that far-off places must be wonderfully different.",
            "It uses a **simple rhyme scheme**, short lines and a repeated pattern for a nursery-rhyme feel.",
            "The tone is light and amusing."
          ]
        }
      ],
      terms: [
        {term: "Poet", meaning: "A person who writes poems."},
        {term: "Nonsense verse", meaning: "Light, playful poetry written for fun."},
        {term: "Rhyme", meaning: "Words with the same ending sound."},
        {term: "Romantic poet", meaning: "One of the English poets of the early 1800s who valued feeling and nature."}
      ],
      qa: [
        {q: "Who wrote “There was a Naughty Boy”?", a: "John Keats, the English poet."},
        {q: "What does the boy discover in Scotland?", a: "That things there are not so different from those at home."}
      ],
      quiz: [
        {q: "The poem was written by:", options: ["Rabindranath Tagore","Robert Frost","Henry Longfellow","John Keats"], answer: 3, explain: "It is Keats's comic verse."},
        {q: "The boy runs away to see:", options: ["Australia","Scotland","Japan","Punjab"], answer: 1, explain: "He goes to Scotland."},
        {q: "The mood of the poem is:", options: ["sad","angry","light and funny","frightening"], answer: 2, explain: "It is playful."},
        {q: "The poem is best described as:", options: ["an epic","a play","a letter","a nonsense-style narrative"], answer: 3, explain: "It is a short comic story in verse."},
        {q: "Keats is also famous for:", options: ["Gitanjali","Ode to a Nightingale","The Jungle Book","Hamlet"], answer: 1, explain: "A well-known serious poem."}
      ]
    }
  ]
});
