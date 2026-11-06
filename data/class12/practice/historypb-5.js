// Class 12 History (PSEB) practice bank, part 5: questions for learning objectives that had none. Extra practice (unreviewed draft).
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
  StudyData.addPractice(12, "historypb", {
  "guru-hargobind-sahib-ji": {
    mcq: [
      M(1, "Guru Hargobind Sahib Ji turned a peaceful community into one that was", "able to defend itself", ["unable to defend itself", "forced to leave the Punjab", "ready to give up its faith"], "He did so while keeping the Gurus' spiritual message.", "importance"),
      M(2, "The supreme seat of Sikh religious and temporal authority became the", "Akal Takht", ["Lohgarh Fort", "Kartarpur", "Anandpur"], "The Akal Takht was raised in Amritsar by the Guru.", "importance"),
      M(3, "The policy of Guru Hargobind Sahib Ji prepared the ground for the creation of the Khalsa by", "Guru Gobind Singh Ji", ["Guru Nanak Dev Ji", "Guru Arjan Dev Ji", "Guru Tegh Bahadur Ji"], "Guru Gobind Singh Ji founded the Khalsa.", "importance")
    ],
    written: [
      W(3, "short", "State the importance of the work of Guru Hargobind Sahib Ji for Sikhism.", "He turned a peaceful community into one able to defend itself while keeping the Gurus' spiritual message. The Akal Takht became the supreme seat of Sikh religious and temporal authority. His policy prepared the ground for the creation of the Khalsa by Guru Gobind Singh Ji.", "importance")
    ]
  },
  "anglo-sikh-relations-1800-1839": {
    mcq: [
      M(1, "Maharaja Ranjit Singh preferred to expand his kingdom towards the", "north-west", ["south-east", "south", "east"], "He knew British military power and expanded in the north-west instead.", "assessment"),
      M(2, "Most historians agree that Ranjit Singh's policy kept the Punjab independent", "during his lifetime", ["for the next two hundred years", "only until 1809", "for ever"], "After his death the kingdom weakened.", "assessment"),
      M(3, "Ranjit Singh's policy towards the British is called realistic because he", "knew British military power", ["ignored British strength", "believed the British could be easily defeated", "joined the British army"], "He preferred to avoid a war he could not win.", "assessment")
    ],
    written: [
      W(3, "short", "Assess the policy of Maharaja Ranjit Singh towards the British.", "Ranjit Singh was realistic: he knew British military power and preferred to expand to the north-west instead of fighting them. Historians debate whether he could have resisted the British, but most agree that his policy kept the Punjab independent during his lifetime.", "assessment")
    ]
  },
  });
})();
