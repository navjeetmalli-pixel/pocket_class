// Class 12 History practice bank, part 3: questions for learning objectives that had none. Extra practice (unreviewed draft).
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
  StudyData.addPractice(12, "history", {
  "kinship-caste-and-class": {
    mcq: [
      M(1, "In the Mahabharata, Ekalavya, who was refused by Drona, was", "a nishada boy", ["a Kshatriya prince", "a Vaishya merchant's son", "a Pandava prince"], "His story shows the social divisions of the time.", "using-the-epic-as-history"),
      M(2, "Historians judge how far the Mahabharata reflects real society by comparing it with", "inscriptions, archaeology and other texts", ["only later epics and the same story told again", "modern novels", "the dreams of priests"], "They cross-check the epic with other kinds of evidence.", "using-the-epic-as-history"),
      M(3, "The story of Ekalavya is useful to historians because it shows", "social divisions", ["equality among all varnas", "the end of caste", "the power of kings alone"], "A nishada boy being turned away reflects divisions in society.", "using-the-epic-as-history")
    ],
    written: [
      W(3, "short", "Why can the Mahabharata not simply be read as history? What does the story of Ekalavya show?", "The epic is a story, so historians compare it with inscriptions, archaeology and other texts to judge how far it reflects real society. The story of Ekalavya, a nishada boy refused by Drona, shows social divisions.", "using-the-epic-as-history")
    ]
  },
  "through-the-eyes-of-travellers": {
    mcq: [
      M(1, "Abd al-Razzaq Samarqandi wrote about", "Vijayanagara", ["Mughal Delhi", "Bengal", "Kashmir"], "He visited and described the Vijayanagara kingdom.", "other-travellers-and-reading-their-accounts"),
      M(2, "Why must historians read travellers' accounts with care?", "They wrote for their own readers", ["All were written by Indian kings and court poets", "Travellers never visited the places described", "All were written long after the traveller's death"], "The viewpoint, language and purpose of the writer must be considered.", "other-travellers-and-reading-their-accounts"),
      M(3, "While reading a traveller's account, a historian should consider the traveller's", "viewpoint, language and purpose", ["height, weight and age of the traveller", "favourite colour", "age at death only"], "These shape what was written and how.", "other-travellers-and-reading-their-accounts")
    ],
    written: [
      W(3, "short", "Name two travellers, other than Al-Biruni, Ibn Battuta and Bernier, who wrote about India. Why should their accounts be used with care?", "Abd al-Razzaq Samarqandi (who wrote of Vijayanagara) and Jean-Baptiste Tavernier. Travellers often wrote for their own readers and compared things with their homelands, so historians must consider their viewpoint, language and purpose.", "other-travellers-and-reading-their-accounts")
    ]
  },
  });
})();
