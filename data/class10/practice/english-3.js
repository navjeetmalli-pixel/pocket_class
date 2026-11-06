// Class 10 English practice bank, part 3: extra questions for chapters with gaps. Extra practice (unreviewed draft).
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
  StudyData.addPractice(10, "english", {
    "tenses": {
      mcq: [
        M(2, "You are asked to edit a passage for tense errors. What should you do first?", "Read all of it and fix the time frame it is set in", ["Change every verb in the passage into the simple present", "Correct only the verbs found in the first two lines", "Underline every verb that already ends in the letters -ed"], "Most errors are verbs that slip out of the passage's main time frame, so decide that frame first.", "editing-tense-errors-in-a-passage"),
        M(2, "A line in an editing passage reads “She did not came to school yesterday.” What is the correction?", "came → come", ["did → does", "yesterday → tomorrow", "school → schools"], "After did, the main verb takes V1, so “did not come” is correct.", "editing-tense-errors-in-a-passage")
      ],
      written: [
        W(5, "What is meant by the sequence of tenses? Explain the rule with examples, and state the exceptions.", "The sequence of tenses is the rule that links the tense of the dependent clause to the tense of the main clause. If the main clause is in the past tense, the dependent clause is usually in a past form too: \"She said that she was busy.\" \"I knew that he would help.\" Exception 1: a universal truth or habitual fact stays in the present even after a past main verb: \"Our teacher said that light travels faster than sound.\" Exception 2: in purpose clauses the verb follows the main verb: \"He works hard so that he may succeed\" but \"He worked hard so that he might succeed.\" Special pattern: with no sooner...than and hardly/scarcely...when, the past perfect comes first and the simple past second: \"No sooner had the bell rung than the students rushed out.\"", "long"),
        W(5, "Explain the three types of conditional sentences with the tense pattern and one example of each. Which common mistake must be avoided in the if-clause?", "Type 1 (likely or real): if + simple present, will + V1. Example: \"If it rains, the match will be cancelled.\" Type 2 (unlikely or imaginary present): if + simple past, would + V1. Example: \"If I had wings, I would fly.\" Were is used for all persons in this type: \"If I were you, I would apologise.\" Type 3 (unreal past): if + had + V3, would have + V3. Example: \"If you had left earlier, you would have caught the train.\" The common mistake is using will in the if-clause. \"If it will rain\" is wrong; the correct form is \"If it rains\".", "long"),
        W(3, "Describe the steps you would follow to edit tense errors in a passage.", "First read the whole passage and decide its main time frame, because most errors are verbs that slip out of it. Then check each verb against its time marker (yesterday, last year, since Monday) and its subject (has or have, was or were). Next check the form after helping verbs: did + V1, has/had + V3, is/was + V-ing or V3. Finally write the incorrect word and its correction exactly in the way the question's format asks.", "short", "editing-tense-errors-in-a-passage")
      ]
    },
    "modals": {
      mcq: [],
      written: [
        W(5, "Explain the perfect modals (modal + have + V3) with the meaning and one example of each of should have, must have, could have, needn't have and can't have.", "should have + V3 shows the right thing was not done, as regret or criticism: \"You should have told me earlier.\" must have + V3 is a confident guess about the past: \"The road is wet; it must have rained.\" could have + V3 means it was possible but did not happen: \"You could have won if you had practised.\" needn't have + V3 means it was done but was unnecessary: \"You needn't have bought flowers; we already had some.\" can't have + V3 shows we are sure it did not happen: \"He can't have written this; he was in hospital.\" May/might have + V3 means perhaps it happened: \"She may have missed the bus.\"", "long"),
        W(4, "Correct these sentences and give the reason: (i) You need not to worry. (ii) He must has gone. (iii) I can able to swim. (iv) He mustn't be at home.", "(i) You need not worry. A modal such as need is followed by V1 without to. (ii) He must have gone. After a modal we use have, not has, because modals do not change with the subject. (iii) I can swim, or I am able to swim. Can and able to both show ability, so they are not used together. (iv) He can't be at home. For a negative guess about the present we use can't, not mustn't; mustn't means prohibition.", "long")
      ]
    },
    "subject-verb-agreement": {
      mcq: [],
      written: [
        W(5, "State the rules of subject-verb agreement for (a) either...or and neither...nor, (b) as well as and along with, and (c) collective nouns, with an example of each.", "(a) With either...or, neither...nor, not only...but also, or and nor, the verb agrees with the nearer subject: \"Neither the teacher nor the students were present.\" (b) With as well as, along with, together with, accompanied by and in addition to, the verb agrees with the first subject: \"The captain, along with his players, is ready.\" (c) A collective noun takes a singular verb when it acts as one unit: \"The committee has approved the plan.\" It takes a plural verb when its members act individually: \"The committee are divided in their opinions.\" In every case, find the true subject and ignore the phrases in between.", "long"),
        W(4, "Correct the verbs and give the reason: (i) The list of items are on the desk. (ii) Each of the boys have a book. (iii) Gulliver's Travels are a satire. (iv) The police has arrested the thief.", "(i) The list of items is on the desk. The true subject is list, which is singular; of items is only a phrase. (ii) Each of the boys has a book. Each takes a singular verb. (iii) Gulliver's Travels is a satire. The title of a book is singular even if it looks plural. (iv) The police have arrested the thief. Police takes a plural verb.", "long")
      ]
    },
    "reported-speech": {
      mcq: [],
      written: [
        W(5, "Explain how a statement, a question, a command, and an exclamation are changed into reported speech. Give one example of each.", "Statement: use said, told or explained with that, and change pronouns, tense and time words as needed. Question: use asked, enquired or wanted to know, with if/whether for yes/no questions and the wh-word for wh-questions, and keep statement word order. Command or request: use ordered, requested, advised or warned + object + (not) to + V1, and drop please. Exclamation: use exclaimed with joy, sorrow or surprise, change the exclamation into a statement, and drop words such as Alas or Hurrah. Examples: \"I am busy,\" she said. → She said that she was busy. He said, \"Do you like tea?\" → He asked if I liked tea. \"Don't be late,\" the coach told us. → The coach warned us not to be late. \"How beautiful the sunset is!\" she said. → She exclaimed that the sunset was very beautiful.", "long"),
        W(4, "Report this dialogue: Mother: \"Where are you going?\" Ravi: \"To the market. May I buy some fruit?\"", "Mother asked Ravi where he was going. Ravi replied that he was going to the market and asked if he might buy some fruit. Here the wh-question becomes a statement-order clause starting with where. The yes/no question becomes if + statement order. May changes to might, and the pronouns and tense are shifted back, with each speaker reported in turn.", "long")
      ]
    },
    "determiners": {
      mcq: [],
      written: [
        W(5, "When is the article the used and when is no article used? Give two uses of each with examples.", "The is used with oceans, seas, rivers, mountain ranges, deserts, groups of islands and holy books (the Indian Ocean, the Thar, the Ramayana). It is also used with superlatives, ordinals and unique things (the best, the first, the moon), and with an adjective for a class of people (the poor, the old). No article is used before languages, school subjects, meals, games, and most names of people and cities: \"She speaks English.\" \"We play cricket after lunch.\" It is also omitted before school, hospital, prison and bed used for their main purpose (\"He goes to school by bus\"), before uncountable and plural nouns used in a general sense (\"Honesty is the best policy\"), and before the names of single mountains (Mount Everest).", "long"),
        W(4, "Explain the difference between few, a few and the few, and between fewer and less, with examples.", "Few (countable) and little (uncountable) mean hardly any, a negative idea: \"There is little hope of his recovery.\" A few and a little mean some, a small amount, a positive idea: \"A few volunteers stayed back to help.\" The few and the little mean all of the small amount that exists: \"He spent the little money he had on books.\" Fewer is used with countable nouns (fewer cars) and less with uncountable nouns (less traffic).", "long")
      ]
    },
    "active-passive-voice": {
      mcq: [],
      written: [
        W(5, "Explain how to change (a) questions, (b) commands and requests, and (c) sentences with modals into the passive voice, with an example of each.", "(a) Yes/No questions begin with the helping verb followed by the new subject and V3: \"Did she invite you?\" → \"Were you invited by her?\" In wh-questions the wh-word stays first: \"Why did he break the rule?\" → \"Why was the rule broken by him?\" Who becomes by whom: \"Who wrote this poem?\" → \"By whom was this poem written?\" (b) A command uses Let + object + be + V3: \"Close the door.\" → \"Let the door be closed.\" A polite request uses You are requested to: \"Please help me.\" → \"You are requested to help me.\" (c) A modal sentence uses modal + be + V3: \"We should protect wildlife.\" → \"Wildlife should be protected.\"", "long"),
        W(4, "Change into the passive voice and give the rule: (i) The teacher gave Rohan a prize. (ii) They will have finished the bridge by May. (iii) People say that he is honest. (iv) Don't touch the wire.", "(i) Rohan was given a prize by the teacher, or A prize was given to Rohan by the teacher. With two objects, either can become the subject. (ii) The bridge will have been finished by May. The future perfect passive uses will have been + V3. (iii) It is said that he is honest, or He is said to be honest. This is the impersonal passive. (iv) Let the wire not be touched, or You are warned not to touch the wire.", "long")
      ]
    },
    "formal-letter": {
      mcq: [
        M(1, "Where does the subject line go in a formal letter?", "Just before the salutation", ["After the complimentary close", "Below the signature and name", "Above the date at the top"], "The subject is one short line written before the salutation.", ""),
        M(1, "Which salutation suits a formal letter to a company manager?", "Sir", ["Dear friend", "My dear Raj", "Hello, manager"], "A formal letter opens with Sir or Madam.", ""),
        M(1, "What should you write as the sender's address if the question gives none?", "Examination Hall", ["Your own made-up home address", "The receiver's office address", "Leave this part completely blank"], "If no address is given, write Examination Hall and do not reveal your identity.", ""),
        M(2, "What is the usual word limit for a formal letter in the board exam?", "About 100–120 words", ["About 30–40 words", "About 250–300 words", "About 400–500 words"], "The expected length is about 100–120 words.", ""),
        M(2, "Which details belong in a letter of complaint about a faulty product?", "The model, bill number and date of purchase", ["A funny story about your last holiday", "Insults for the manager's carelessness", "The names of your favourite shops"], "A complaint gives specific facts about the product and the fault.", ""),
        M(2, "What tone should a complaint letter have?", "Firm yet polite", ["Angry and threatening", "Casual and joking", "Pleading and apologetic"], "The tone is firm and polite, never rude or threatening.", ""),
        M(2, "What is the purpose of the opening “Through the columns of your esteemed newspaper”?", "To raise a public issue with the authorities", ["To ask the editor for a new job", "To complain about one's own marks", "To advertise a product for sale"], "A letter to the editor draws attention to a public problem.", ""),
        M(3, "Which sentence belongs in an enquiry letter to a coaching institute?", "Kindly send details of fees, duration and timings.", ["I demand a full refund for the faulty course.", "Please supply fifty notebooks by the fifth of May.", "Our street has been flooded for two long weeks."], "An enquiry asks specific questions about fees, duration, eligibility or timings.", ""),
        M(1, "Which of these should you avoid in a formal letter?", "Slang words and contractions like can't", ["A subject line before the salutation", "Short paragraphs that stay on the point", "Every point that the question gives"], "Do not use contractions, slang or emotional outbursts.", "do-s-and-don-ts"),
        M(2, "Which ending wrongly mixes formats in a formal letter?", "Your loving friend, with a pet name", ["Yours faithfully, followed by the name", "Yours sincerely, then the signature", "Name with designation, if one is given"], "Formats must not be mixed: ‘Your loving friend’ belongs to a personal letter.", "do-s-and-don-ts")
      ],
      written: [
        W(3, "List three do's and three don'ts for writing a formal letter.", "Do's: keep paragraphs short and to the point; write the subject before the salutation; include every point given in the question. Don'ts: do not use contractions such as don't and can't; do not use slang or emotional outbursts; do not mix formats, for example 'Dear Diary' or 'Your loving friend'.", "short", "do-s-and-don-ts")
      ]
    },
    "analytical-paragraph": {
      mcq: [
        M(1, "What does the introduction of an analytical paragraph state?", "What the visual shows, with the place and period", ["The writer's personal opinion about the topic", "A list of every number in the chart", "A request for the examiner's marks"], "One sentence on what the visual shows, the place and the time period.", ""),
        M(1, "Which verb shows an increase in data?", "Surged", ["Declined", "Dropped", "Fluctuated"], "Rise: increased, rose, grew, climbed, surged.", ""),
        M(2, "Which tense describes what the chart itself shows?", "The present tense", ["The past perfect tense", "The future tense", "The past continuous tense"], "Use the present for what the chart shows and the past for past years.", ""),
        M(2, "Which approach is better in an analytical paragraph?", "Grouping and comparing related items", ["Describing each bar separately in turn", "Adding reasons the data does not support", "Writing far beyond the word limit"], "Group related information and compare, rather than describing each item alone.", ""),
        M(3, "What is wrong with: “Sales rose from 20% to 40%, because people liked the product more”?", "It gives a reason the data does not support", ["The percent sign is not allowed", "It uses the present tense", "It compares two figures"], "Do not give reasons the data does not support.", ""),
        M(3, "Which linker best shows a contrast between two bars?", "Whereas", ["Moreover", "Therefore", "Besides"], "Whereas and in contrast show contrast; the others add or show result.", "")
      ],
      written: []
    },
    "nelson-mandela-long-walk-to-freedom": {
      mcq: [
        M(2, "What message does Mandela give about hatred?", "It can be unlearnt, and love taught in its place", ["It is born with every person", "It cannot be removed once learnt", "It is needed to win freedom"], "No one is born hating; people learn to hate, so they can be taught to love.", "themes-and-message"),
        M(2, "According to Mandela, true freedom means:", "Respecting and enhancing the freedom of others", ["Living without any rules in one's own land", "Having enough wealth to do as one pleases", "Staying out at night and earning a salary"], "He calls the childhood and youth freedoms transitory; true freedom includes others' freedom.", "themes-and-message")
      ],
      written: [
        W(3, "State two themes of the extract and the message that Mandela gives.", "The extract deals with freedom and equality, reconciliation (shown when the two groups sing each other's anthems), courage, and the duty a person owes to family and to society. Courage is the triumph over fear, not its absence. The message is that hatred can be unlearnt, as people are taught to hate and can be taught to love, and that true freedom means respecting and enhancing the freedom of others, since the oppressor is as much a prisoner as the oppressed.", "short", "themes-and-message")
      ]
    },
    "from-the-diary-of-anne-frank": {
      mcq: [
        M(1, "In which year was Anne's sister Margot born?", "1926", ["1924", "1929", "1933"], "Margot was born in 1926 and Anne in 1929, both in Frankfurt.", "family-and-school"),
        M(2, "Who was Anne's teacher and headmistress in the sixth form?", "Mrs Kuperus", ["Mr Keesing", "Mrs Frank", "Mrs Montessori"], "Mrs Kuperus was her sixth form teacher; the parting was tearful.", "family-and-school")
      ],
      written: [
        W(3, "What does Anne tell us about her family and her school days?", "Anne adores her father, who married her mother when he was 36 and she was 25. Her sister Margot was born in 1926 and Anne in 1929, both in Frankfurt. Anne went to a Montessori nursery school and later to a primary school, where her sixth form teacher was the headmistress Mrs Kuperus, and their parting was tearful. Her grandmother died in January 1942 and Anne still thinks of her often. She and her classmates were anxious about the teachers' meeting that would decide who moved up to the next class.", "short", "family-and-school")
      ]
    },
    "glimpses-of-india": {
      mcq: [
        M(2, "Which theme runs through the three pieces on the baker, Coorg and tea?", "The diversity of India's regions, foods and people", ["The history of the Indian railways", "A fight between city and village life", "The danger of travelling alone"], "The pieces show how regions, foods, people and occupations differ widely.", "themes"),
        M(2, "What does the pader's story show about tradition and change?", "The craft survives by adapting", ["The craft has vanished completely from Goa", "The craft has stayed unchanged for centuries", "The craft was banned by the Portuguese rulers"], "The paders survive by adapting, such as through door-to-door delivery.", "themes")
      ],
      written: [
        W(3, "What themes can be found in Glimpses of India?", "The chief theme is the diversity of India: its regions, foods, people and occupations differ widely, as seen in the Goan baker, the Coorgs and the tea estate in Assam. A second theme is tradition and change, shown by the pader, whose craft survives by adapting. A third is travel writing and curiosity, since the pieces mix description, history, legend and information.", "short", "themes")
      ]
    },
    "fog": {
      mcq: [
        M(1, "Who wrote the poem “Fog”?", "Carl Sandburg", ["Robert Frost", "Emily Dickinson", "William Wordsworth"], "The poem is by Carl Sandburg.", ""),
        M(1, "Which animal is the fog compared to?", "A cat", ["A dog", "A fox", "An owl"], "The fog comes on little cat feet.", ""),
        M(1, "What quality does the fog share with a cat's arrival?", "Silence", ["Heat", "Speed", "Brightness"], "Both arrive without making any noise.", ""),
        M(2, "Fog is called a cat and not just compared to one. Which device is this?", "Metaphor", ["Alliteration", "Hyperbole", "Onomatopoeia"], "The fog is directly spoken of as a cat, an extended metaphor.", ""),
        M(2, "Giving the fog the actions of sitting and looking is called:", "Personification", ["Oxymoron", "Irony", "Onomatopoeia"], "Human or animal actions are given to a thing, which is personification.", ""),
        M(2, "How is the poem written?", "Free verse with no rhyme", ["Rhyming couplets throughout", "ABAB four-line stanzas", "A fourteen-line sonnet"], "It is a very short poem in free verse with no rhyme.", ""),
        M(3, "What does “moves on” tell us about the fog?", "It stays for a time and then leaves", ["It destroys the city before leaving", "It returns every hour like a clock", "It grows louder until it ends"], "Like a cat that goes when it likes, the fog makes a temporary visit.", "")
      ],
      written: []
    },
    "the-midnight-visitor": {
      mcq: [
        M(2, "What does Ausable's outwitting of Max show?", "Intelligence can defeat weapons", ["Weapons are always stronger than wit", "Spies must avoid foreign cities", "A glamorous look wins every contest"], "Ausable, unarmed, tricks the armed Max with his quick thinking.", "themes"),
        M(2, "Fowler expects a glamorous spy but meets the fat Ausable. Which theme does this show?", "Appearances can be deceptive", ["Hard work always brings rewards", "Honesty is the best policy", "Union is strength"], "An unlikely hero proves clever despite his ordinary looks.", "themes")
      ],
      written: [
        W(3, "Which themes does The Midnight Visitor bring out?", "The story shows that appearances deceive: Ausable, fat and wheezing, turns out to be a clever hero, while Fowler expected a glamorous spy. It stresses presence of mind and mental preparedness, as Ausable invents a balcony and a police knock to send Max out of the window. It builds suspense with a twist ending, and its message is that intelligence can defeat weapons.", "short", "themes")
      ]
    }
  });
})();
