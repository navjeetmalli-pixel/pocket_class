// Class 11 Political Science practice bank, part 4: questions for learning objectives that had none. Extra practice (unreviewed draft).
(function () {
  const AR_OPTS = ["Both A and R are true, and R is the correct explanation of A.", "Both A and R are true, but R is not the correct explanation of A.", "A is true, but R is false.", "A is false, but R is true."];
  let n = 1;
  // M(level, question, right answer, three wrong answers, explanation, objective id): the right answer is stored at a varying position.
  function M(level, q, right, wrong, explain, obj) {
    const at = (n++) % 4;
    const options = wrong.slice();
    options.splice(at, 0, right);
    return { q, options, answer: at, explain, level, obj };
  }
  // AR(level, assertion, reason, answer index, explanation, objective id): assertion-reason with fixed options.
  function AR(level, a, r, answer, explain, obj) {
    return { q: "Assertion (A): " + a + "\nReason (R): " + r, options: AR_OPTS, answer, explain, level, keepOrder: true, obj };
  }
  // W(marks, type, question, model answer, objective id)
  function W(marks, type, q, a, obj) {
    return { q, a, marks, type, obj };
  }
  StudyData.addPractice(11, "polsci", {
  "election-and-representation": {
    mcq: [
      M(1, "A system in which citizens take part in decisions themselves, as in a Gram Sabha, is a", "direct democracy", ["indirect democracy", "dictatorship", "monarchy"], "In a direct democracy people decide for themselves. It is impractical in large modern societies.", "elections-and-democracy"),
      M(2, "In an indirect (representative) democracy, citizens", "elect representatives", ["vote on every single law", "give up all their power for ever", "appoint all the judges"], "Elected representatives govern on behalf of the people.", "elections-and-democracy"),
      M(3, "The Representation of the People Acts were passed in", "1950 and 1951", ["1935 and 1947", "1947 and 1950", "1962 and 1971"], "The Constitution gives the basic system; these Acts of Parliament give the details of elections.", "elections-and-democracy")
    ],
    written: [
      W(3, "short", "Why is direct democracy impractical in large societies? What do elections allow people to do?", "In large societies it is not possible for all citizens to take part in every decision, so people elect representatives. Elections let people choose and change their rulers peacefully, though electoral rules decide how fairly votes are turned into seats.", "elections-and-democracy")
    ]
  },
  "executive": {
    mcq: [
      M(1, "The executive is the organ of government that", "implements laws and policies", ["makes the laws", "interprets the laws", "settles disputes between citizens"], "It includes the head of state, head of government, ministers and the administration.", "what-is-the-executive"),
      M(2, "Which of these belongs to the permanent executive?", "Civil servants", ["Prime Minister", "Cabinet ministers", "Speaker of the Lok Sabha"], "Civil servants (the bureaucracy) are appointed on a long-term basis and continue when governments change.", "what-is-the-executive"),
      M(3, "Which statement about the two parts of the executive is correct?", "The permanent executive continues when governments change", ["The political executive is appointed for a very long term", "The permanent executive decides overall policy", "The political executive never changes"], "The political executive (PM and ministers) holds office for a limited period and decides policy; the permanent executive carries it out.", "what-is-the-executive")
    ],
    written: [
      W(3, "short", "Distinguish between the political executive and the permanent executive with an example of each.", "The political executive consists of elected leaders such as the Prime Minister and ministers; they decide overall policy and hold office for a limited period. The permanent executive consists of civil servants (the bureaucracy) who are appointed on a long-term basis, carry out policies and continue when governments change.", "what-is-the-executive")
    ]
  },
  "judiciary": {
    mcq: [
      M(1, "An independent judiciary means judges can decide cases", "without fear or favour", ["only on the government's orders", "only after party approval", "by a public vote"], "The legislature and executive must not interfere with the judiciary's work.", "why-an-independent-judiciary"),
      M(2, "Which of these is a role of the judiciary?", "Protecting rights and the rule of law", ["Preparing the Union budget and tax laws", "Collecting taxes", "Appointing ministers"], "The judiciary settles disputes, protects rights and ensures no organ goes beyond the Constitution.", "why-an-independent-judiciary"),
      M(3, "Independence of the judiciary", "does not mean it is above the Constitution", ["means judges may set aside the Constitution", "means other organs may guide the judges", "means judges need not protect rights"], "Independence does not mean arbitrariness or lack of accountability; the judiciary is accountable to the Constitution.", "why-an-independent-judiciary")
    ],
    written: [
      W(3, "short", "Why is an independent judiciary needed in a democracy? Does independence mean that the judiciary is not accountable?", "The judiciary settles disputes, protects rights and upholds the rule of law, so judges must decide without fear or favour and without interference from the legislature or executive. Independence does not mean arbitrariness: the judiciary is part of the democratic system and is accountable to the Constitution.", "why-an-independent-judiciary")
    ]
  },
  "federalism": {
    mcq: [
      M(1, "Federalism is a system with", "two sets of government", ["one set of government", "three sets of government", "no government"], "One government is for the whole country and others are for the regions or states, each with its own powers.", "what-is-federalism"),
      M(2, "Which federal country broke up in 1991?", "The USSR", ["Canada", "India", "The United States"], "Federalism alone does not guarantee unity: the USSR broke up despite its federal structure.", "what-is-federalism"),
      M(3, "Which pair of features divides powers between levels and settles disputes?", "A written constitution and courts", ["Unwritten customs and a strong army", "A single party and a president", "A state religion and press censorship"], "A written constitution divides powers and an independent judiciary settles disputes between the levels.", "what-is-federalism")
    ],
    written: [
      W(3, "short", "What is federalism? Can federalism alone guarantee unity? Give examples.", "Federalism is a system with two sets of government, one for the whole country and others for the regions, each with its own powers. It does not guarantee unity by itself: the USSR broke up in 1991 despite being federal, while Canada has managed its tensions over Quebec. In India it recognises diversity while keeping the country united.", "what-is-federalism")
    ]
  },
  "local-governments": {
    mcq: [
      M(1, "Local government is closest to", "ordinary people", ["the Parliament", "the High Court", "the Union Cabinet"], "It works at the village and district level in rural areas and in towns and cities.", "why-local-government"),
      M(2, "Self-governing villages (gram swaraj) were seen as the foundation of democracy by", "Mahatma Gandhi", ["B. R. Ambedkar", "Jawaharlal Nehru", "Sardar Patel"], "Gandhi saw self-governing villages as the foundation of a decentralised democracy.", "why-local-government"),
      M(3, "Decentralisation of power makes government", "more accountable", ["more distant from people", "less democratic", "less open to participation"], "Decentralisation lets local problems be solved locally and lets citizens take part, which strengthens democracy.", "why-local-government")
    ],
    written: [
      W(3, "short", "Give three reasons why local government is needed in a democracy.", "It is closest to ordinary people. It lets local problems be solved locally by those who know them best. It lets citizens take part directly in decisions, and decentralisation makes government more accountable.", "why-local-government")
    ]
  },
  "constitution-as-a-living-document": {
    mcq: [
      M(1, "India's Constitution has been in force since", "1950", ["1947", "1949", "1952"], "It has worked for more than seven decades, while many countries have replaced theirs.", "a-constitution-that-has-lasted"),
      M(2, "Besides amendments, the Constitution also changes through", "judicial interpretation and political practice", ["foreign treaties and royal orders", "army orders and the census", "newspaper editorials and public opinion polls"], "Courts interpret it, and the practice of politics shapes how it works.", "a-constitution-that-has-lasted"),
      M(3, "The makers balanced rigidity and flexibility, meaning that", "core values stay but the text can be amended", ["no part can ever change", "every clause can be changed by a simple majority", "only courts may write new clauses"], "It has been amended more than 100 times, mostly in technical ways.", "a-constitution-that-has-lasted")
    ],
    written: [
      W(3, "short", "Why has India's Constitution lasted for so long? Mention the role of amendments.", "Its makers balanced rigidity and flexibility: core values are protected but the text can be amended to meet new needs. It has been amended more than 100 times, mostly in technical ways, and it also changes through judicial interpretation and political practice.", "a-constitution-that-has-lasted")
    ]
  },
  "philosophy-of-the-constitution": {
    mcq: [
      M(1, "Settling differences by discussion and reasoned argument shows faith in", "political deliberation", ["military rule", "narrow majority voting", "royal decrees"], "The Constitution reflects faith in political deliberation.", "procedural-achievements"),
      M(2, "Because of their spirit of accommodation and compromise, the makers avoided deciding major issues by", "narrow majority votes", ["long and patient discussion", "reasoned argument", "seeking agreement"], "They tried to reach broad agreement instead of deciding big questions by a narrow vote.", "procedural-achievements"),
      M(3, "The Constitution is 'open to change' through", "amendment, interpretation and practice", ["foreign approval only", "the wish of one party only", "a new Constituent Assembly every decade"], "This lets each generation adapt it.", "procedural-achievements")
    ],
    written: [
      W(3, "short", "Describe any two procedural achievements of the Indian Constitution.", "It reflects faith in political deliberation, settling differences by discussion and reasoned argument. Its makers showed a spirit of accommodation and compromise and avoided deciding major issues by narrow majority votes. It is also open to change through amendment, interpretation and practice.", "procedural-achievements")
    ]
  },
  "social-justice": {
    mcq: [
      M(1, "Social justice requires", "a fair share of goods and opportunities", ["fair laws on paper and no change in practice", "equal wages for every job", "the same property for all"], "It is not enough to have fair laws; goods and opportunities must be distributed fairly.", "just-distribution"),
      M(2, "The Indian Constitution abolished", "untouchability", ["land ownership", "elections", "the courts"], "It also provides reservations for SCs, STs and other disadvantaged groups in jobs and education.", "just-distribution"),
      M(3, "Land reforms aim to", "redistribute land more fairly", ["take land away from every farmer", "stop all farming", "sell land to foreign firms"], "Several states carried out land reforms to redistribute land more fairly.", "just-distribution")
    ],
    written: [
      W(4, "short", "Explain two measures taken in India for a fairer distribution of resources and opportunities, and one debate about them.", "The Constitution abolished untouchability and provides reservations for SCs, STs and other disadvantaged groups in jobs and education; several states carried out land reforms. Debate: some see special treatment as necessary for justice, while others worry it conflicts with equal treatment for all.", "just-distribution")
    ]
  },
  });
})();
