// Class 11 Political Science (PSEB) practice bank, part 4: questions for learning objectives that had none. Extra practice (unreviewed draft).
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
  StudyData.addPractice(11, "polscipb", {
  "rights-and-fundamental-rights": {
    mcq: [
      M(1, "A right is", "a claim recognised by law", ["a favour granted by the ruler", "a duty of the citizen", "a punishment by the state"], "A right is a claim a person needs for development that is recognised by society or law.", "meaning-of-rights"),
      M(2, "Legal rights are classified as", "civil, political and economic", ["moral, social and religious only", "natural, divine and human", "local, state and national"], "Rights are either moral or legal, and legal rights are civil, political and economic.", "meaning-of-rights"),
      M(3, "Every right carries a duty, which means that", "others have a duty to respect it", ["others may take it away", "others may ignore it", "we must give up our other rights"], "My right implies that others must respect it.", "meaning-of-rights")
    ],
    written: [
      W(3, "short", "Distinguish between moral and legal rights. Name the three kinds of legal rights. How is a right linked to a duty?", "Rights are moral (based on ethics) or legal (recognised by law). Legal rights are civil, political and economic. Every right carries a duty: one person's right implies a duty of others to respect it.", "meaning-of-rights")
    ]
  },
  });
})();
