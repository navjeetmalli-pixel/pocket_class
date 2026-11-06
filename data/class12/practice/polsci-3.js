// Class 12 Political Science practice bank, part 3: questions for learning objectives that had none. Extra practice (unreviewed draft).
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
  StudyData.addPractice(12, "polsci", {
  "end-of-bipolarity": {
    mcq: [
      M(1, "After the disintegration of the Soviet Union, the world became", "unipolar", ["bipolar", "tripolar", "free of any power"], "The US became the sole superpower.", "consequences-of-the-disintegration"),
      M(2, "Which institutions became powerful advisers to the new capitalist countries?", "The World Bank and the IMF", ["NATO and the Warsaw Pact", "SAARC and ASEAN", "UNESCO and the World Health Organization"], "Capitalism became the dominant economic system.", "consequences-of-the-disintegration"),
      M(3, "The Baltic and East European states wanted to join", "the EU and NATO", ["the Warsaw Pact and COMECON", "SAARC and NAM", "the CIS only"], "Central Asian countries kept ties with Russia and built ties with the West, the US and China.", "consequences-of-the-disintegration")
    ],
    written: [
      W(4, "short", "Describe four consequences of the disintegration of the Soviet Union.", "The Cold War ended, along with the arms race and the need for alliances. The world became unipolar with the US as sole superpower. Capitalism became dominant, with the World Bank and IMF as advisers, and liberal democracy came to be seen as the best political system. New countries emerged, some wanting to join the EU and NATO.", "consequences-of-the-disintegration")
    ]
  },
  "environment-and-natural-resources": {
    mcq: [
      M(1, "The World Council of Indigenous Peoples was formed in", "1975", ["1945", "1992", "2000"], "Indigenous peoples want recognition of their rights to land and resources and of their way of life.", "indigenous-peoples-and-environmental-movements"),
      M(2, "In India, indigenous peoples are mainly the", "Scheduled Tribes", ["Scheduled Castes", "Other Backward Classes", "religious minorities"], "The UN describes them as descendants of the people who lived in a territory before others arrived and overcame them.", "indigenous-peoples-and-environmental-movements"),
      M(3, "The Narmada Bachao Andolan is an example of", "an anti-dam movement", ["a forest movement in Mexico", "a protest against a mining firm in the Philippines", "a global commons treaty"], "Another anti-dam campaign was to save the Franklin river in Australia.", "indigenous-peoples-and-environmental-movements")
    ],
    written: [
      W(4, "short", "Who are indigenous peoples? Give two examples of environmental movements.", "The UN describes indigenous peoples as descendants of the people who lived in a territory when people of a different culture or ethnic origin arrived and overcame them; in India they are mainly the Scheduled Tribes. Examples of movements: forest movements in the South and anti-dam movements such as the Narmada Bachao Andolan.", "indigenous-peoples-and-environmental-movements")
    ]
  },
  "indias-external-relations": {
    mcq: [
      M(1, "In 1977 the Janata Party government announced that it would follow", "genuine non-alignment", ["a pro-Soviet policy", "a military alliance with the US", "total isolation"], "It wanted to correct what it saw as a pro-Soviet tilt.", "changing-priorities"),
      M(2, "After the Cold War, India's foreign policy has been shaped more by", "economic interests and pragmatic ties", ["ideological quarrels with the Soviet Union alone", "an arms race with the USSR", "a ban on trade"], "India built closer ties with the US while keeping its old friendships.", "changing-priorities"),
      M(3, "Relations with China improved after 1988 through", "trade and confidence-building measures", ["a military alliance against another country", "a final border settlement", "a joint treaty with the USSR"], "The border dispute remains unresolved.", "changing-priorities")
    ],
    written: [
      W(3, "short", "State three changes or developments in India's foreign policy priorities after 1977.", "In 1977 the Janata government announced 'genuine non-alignment'. After the Cold War, policy became shaped more by economic interests and pragmatic ties with many countries, including closer ties with the US. Relations with China improved after 1988 through trade and confidence-building measures, though the border dispute remains.", "changing-priorities")
    ]
  },
  });
})();
