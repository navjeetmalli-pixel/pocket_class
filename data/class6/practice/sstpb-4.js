// Class 6 Social Science (PSEB) practice bank, part 4: questions for learning objectives that had none. Extra practice (unreviewed draft).
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
  StudyData.addPractice(6, "sstpb", {
  "rural-development-and-local-government": {
    mcq: [
      M(1, "Rural development means improving the lives of", "rural people", ["city people", "factory owners", "only the richest farmers"], "It aims to improve life in villages through better farming, roads, water, schools, health care and jobs.", "rural-development"),
      M(2, "Which of these is a part of rural development?", "Building village roads", ["Closing village schools", "Cutting village water supply", "Removing village health care"], "Roads, water, schools, health care and jobs all help villagers.", "rural-development"),
      M(3, "Local self-government lets villagers", "manage their own local affairs", ["make laws for the whole country", "choose the Prime Minister alone", "run the national railways"], "Through bodies such as the Panchayat, villagers look after matters of their own village.", "rural-development")
    ],
    written: [
      W(3, "short", "What is rural development? Mention four ways in which it improves village life.", "Rural development means improving the lives of rural people. It does so through better farming, roads, water supply, schools, health care and jobs. (Any four.)", "rural-development")
    ]
  },
  });
})();
