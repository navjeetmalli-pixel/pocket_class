// Class 11 History practice bank, part 2: questions for learning objectives that had none. Extra practice (unreviewed draft).
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
  StudyData.addPractice(11, "history", {
  "nomadic-empires": {
    mcq: [
      M(1, "The Mongols lived on the steppe east of the Altai mountains, in present-day", "Mongolia", ["Afghanistan", "Turkey", "Korea"], "Their homeland was the steppe in the area of present-day Mongolia, divided into clans and tribes.", "nomads-and-the-mongols"),
      M(2, "Which animals did the Mongol herders keep?", "Sheep, horses and goats", ["Elephants, mules and buffaloes", "Pigs, hens and ducks", "Reindeer and bears"], "They herded sheep, horses and goats, hunted, and traded with settled neighbours such as the Chinese.", "nomads-and-the-mongols"),
      M(3, "Which statement about nomadic pastoralists is correct?", "They had their own organisation and trade links", ["They were backward people with no organisation at all", "They never traded with settled neighbours", "They lived only inside walled cities"], "Their way of life suited the steppe; they were not 'backward'.", "nomads-and-the-mongols")
    ],
    written: [
      W(3, "short", "How did the Mongols live on the steppe? Why is it wrong to call nomads 'backward'?", "The Mongols lived in clans and tribes, herded sheep, horses and goats, hunted, and traded with settled neighbours such as the Chinese. Rivalries between tribes were common. Nomads were not backward: their way of life suited the steppe, and they had their own organisation and trade links.", "nomads-and-the-mongols")
    ]
  },
  "the-three-orders": {
    mcq: [
      M(1, "Monasteries in medieval Europe were centres of", "prayer, learning and farming", ["war, hunting and tax collection", "ship building and trade", "law courts and prisons"], "Monks prayed, studied and farmed. St Benedict is linked to the rules of monastic life.", "church-monasteries-and-cathedrals"),
      M(2, "The monastery of Cluny was founded in", "910", ["1098", "1066", "1347"], "Cluny was founded in 910. The Cistercians began in 1098.", "church-monasteries-and-cathedrals"),
      M(3, "St Francis and St Dominic were", "friars who travelled and preached", ["monks who never left the monastery of Cluny", "kings of medieval Europe", "builders of Gothic cathedrals"], "In the thirteenth century friars travelled from place to place preaching to ordinary people.", "church-monasteries-and-cathedrals")
    ],
    written: [
      W(3, "short", "Describe the role of monasteries and cathedrals in medieval Europe.", "Monasteries were centres of prayer, learning and farming, with rules linked to St Benedict; Cluny (910) and the Cistercians (1098) were influential. Grand cathedrals, many in the Gothic style, were raised by the donations and labour of the community.", "church-monasteries-and-cathedrals")
    ]
  },
  "paths-to-modernisation": {
    mcq: [
      M(1, "Under which leader did China adopt economic reforms and open to the world market from 1978?", "Deng Xiaoping", ["Sun Yat-sen", "Mao Zedong", "Chiang Kai-shek"], "From 1978, under Deng Xiaoping, China opened to the world market.", "china-after-1949"),
      M(2, "The Great Leap Forward campaign in China was launched in", "1958", ["1949", "1966", "1978"], "It came after land reform and economic planning. The Cultural Revolution began in 1966.", "china-after-1949"),
      M(3, "Which pairing of campaign and date is correct?", "Cultural Revolution: from 1966", ["Cultural Revolution: in 1949 itself", "Great Leap Forward: 1966", "Great Leap Forward: 1978"], "The Great Leap Forward was in 1958 and the Cultural Revolution began in 1966.", "china-after-1949")
    ],
    written: [
      W(4, "short", "Describe the main developments in China after 1949.", "The new government carried out land reform and economic planning. Campaigns such as the Great Leap Forward (1958) and the Cultural Revolution (from 1966) followed. From 1978, under Deng Xiaoping, China adopted economic reforms and opened to the world market.", "china-after-1949")
    ]
  },
  });
})();
