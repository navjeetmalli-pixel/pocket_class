// Class 12 Geography practice bank, part 4: questions for learning objectives that had none. Extra practice (unreviewed draft).
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
  StudyData.addPractice(12, "geography", {
  "human-development": {
    mcq: [
      M(1, "Countries are grouped by human development into very high, high, medium and", "low", ["average", "none", "zero"], "The four groups are very high, high, medium and low human development.", "international-comparisons"),
      M(2, "High-HDI countries generally invest more in", "the social sector (education, health)", ["an arms race with neighbouring countries", "civil war", "plantations alone"], "They are also generally free from political turmoil.", "international-comparisons"),
      M(3, "Which statement about human development is correct?", "Some small or poorer countries do better than richer ones", ["A country with a larger population always has a higher HDI", "Income alone decides a country's HDI", "Civil war improves a country's HDI"], "Size or income alone does not decide human development.", "international-comparisons")
    ],
    written: [
      W(3, "short", "Give three features of countries with low human development and one feature of high-HDI countries.", "Low-HDI countries often face political turmoil, social instability, civil war, famine and a high incidence of disease. High-HDI countries invest more in the social sector (education and health) and are generally free from political turmoil.", "international-comparisons")
    ]
  },
  "world-international-trade": {
    mcq: [
      M(1, "Chinese porcelain and Iranian carpets are examples of trade based on", "distinctive cultures", ["differences in minerals", "better refrigeration", "foreign investment"], "Distinctive cultures produce prized crafts such as Chinese porcelain and brocades, Iranian carpets and Indonesian batik.", "basis-of-international-trade"),
      M(2, "Agricultural countries usually export", "farm goods and import factory goods", ["factory goods and import farm goods", "only minerals", "only services"], "Industrialised countries do the opposite.", "basis-of-international-trade"),
      M(3, "Better railways, ocean and air transport and refrigeration have", "widened international trade", ["reduced international trade", "stopped trade in food", "made all trade local"], "Transport is one of the bases that has expanded trade.", "basis-of-international-trade")
    ],
    written: [
      W(3, "short", "How do (a) differences in national resources and (b) foreign investment affect international trade?", "(a) Differences in geological structure, minerals and climate mean that each country produces different goods, which creates the need for trade. (b) Foreign investment boosts trade in developing countries that lack the capital for mining, oil drilling, heavy engineering and plantations.", "basis-of-international-trade")
    ]
  },
  "human-settlements": {
    mcq: [
      M(1, "Rural settlements derive their livelihood mainly from", "primary activities", ["secondary activities", "tertiary activities", "banking"], "Urban settlements depend on secondary and tertiary activities.", "rural-and-urban-settlements"),
      M(2, "The types of rural settlements depend on physical features, cultural and ethnic factors and", "security factors", ["stock exchange prices", "tourism", "air travel"], "Security means defence against thefts and robberies.", "rural-and-urban-settlements"),
      M(3, "Cities act as nodes of economic growth because they", "provide goods and services to towns and villages", ["supply goods and services only to the richest few citizens", "stop all trade with villages", "produce only farm goods"], "They serve their own people and the surrounding countryside.", "rural-and-urban-settlements"),
      M(1, "The Smart Cities Mission aims to promote cities that provide", "core infrastructure and decent quality of life", ["only luxury housing and shopping malls for the rich", "only industries", "only farm land"], "It focuses on infrastructure and quality of life for citizens.", "smart-cities-mission"),
      M(2, "The Smart Cities Mission focuses on a clean and sustainable environment and", "the application of 'smart solutions'", ["closing the cities to all migrants from villages", "removing all technology", "building only villages"], "Smart solutions mean better use of technology and data for services.", "smart-cities-mission"),
      M(3, "The Smart Cities Mission promotes development that is sustainable, inclusive and", "can be replicated in other areas", ["limited to one city for all time to come", "meant only for the rich", "free of all infrastructure"], "The idea is for successful models to be copied elsewhere.", "smart-cities-mission")
    ],
    written: [
      W(3, "short", "Define a human settlement. Distinguish between rural and urban settlements on the basis of livelihood.", "A human settlement is a cluster of dwellings of any type or size where people live. Rural settlements derive their livelihood mainly from primary activities like agriculture, while urban settlements depend on secondary and tertiary activities.", "rural-and-urban-settlements"),
      W(3, "short", "State three aims of the Smart Cities Mission.", "To promote cities that provide core infrastructure and a decent quality of life to citizens; to give a clean and sustainable environment; to apply smart solutions through better use of technology and data; to promote sustainable and inclusive development that can be replicated elsewhere (any three).", "smart-cities-mission")
    ]
  },
  "water-resources": {
    mcq: [
      M(1, "Which of these damages water quality?", "Untreated sewage", ["Rainwater harvesting", "Watershed management", "Tree planting"], "Industrial effluents, untreated sewage, fertilisers and pesticides all damage water quality.", "water-quality-and-scarcity"),
      M(2, "Water quality in India is monitored by the Central Pollution Control Board and", "State pollution control boards", ["the Railway Board of India", "the Census office of India", "the Election Commission of India"], "The Ganga and Yamuna are heavily polluted along their stretches through cities.", "water-quality-and-scarcity"),
      M(3, "Dams and multipurpose projects store water but raise issues of", "displacement and inter-state water sharing", ["rising soil fertility in the whole river basin", "more rainfall in deserts", "lower electricity use"], "People are displaced and states can quarrel over sharing.", "water-quality-and-scarcity")
    ],
    written: [
      W(3, "short", "Mention four causes of water scarcity in India.", "Over-use of water, unequal distribution, pollution (industrial effluents, untreated sewage, fertilisers and pesticides) and a growing population; irrigated agriculture also causes waterlogging and salinisation, which degrade land.", "water-quality-and-scarcity")
    ]
  },
  "india-international-trade": {
    mcq: [
      M(1, "Which of these lists regions with which India trades?", "Asia, ASEAN, the EU, the Gulf and Africa", ["Antarctica and the Arctic regions only, with no others", "Greenland and the Moon", "No region outside South Asia"], "India also trades with North America.", "direction-of-trade"),
      M(2, "Dependence on oil imports makes India's economy sensitive to", "global oil prices", ["monsoon rainfall", "census results", "school examinations"], "A rise in world oil prices raises India's import bill.", "direction-of-trade"),
      M(3, "Regional agreements and bilateral treaties", "help widen markets", ["close markets", "end all border trade", "raise every tariff"], "Neighbours matter for border trade, and agreements open more markets.", "direction-of-trade")
    ],
    written: [
      W(3, "short", "Name four of India's important trading partners and say how dependence on oil imports affects the economy.", "Important partners include the USA, China, the UAE and Saudi Arabia (also several European countries). Dependence on oil imports makes the economy sensitive to global oil prices.", "direction-of-trade")
    ]
  },
  });
})();
