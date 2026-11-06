// Class 7 Mathematics practice bank, part 3: questions for learning objectives that had none. Extra practice (unreviewed draft).
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
  StudyData.addPractice(7, "maths", {
  "parallel-and-intersecting-lines": {
    mcq: [
      M(1, "Two lines cut by a transversal are parallel if the corresponding angles are", "equal", ["supplementary", "complementary", "right angles"], "Equal corresponding angles show that the lines are parallel.", "checking-for-parallel-lines"),
      M(2, "A transversal cuts two lines and a pair of alternate interior angles are 72° and 72°. What can we say?", "The lines are parallel", ["The lines meet", "The lines are perpendicular", "Nothing can be said"], "Equal alternate interior angles show that the lines are parallel.", "checking-for-parallel-lines"),
      M(3, "Interior angles on the same side of a transversal are 105° and 80°. Are the lines parallel?", "No, as the sum is 185° and not 180°", ["Yes, as the sum is more than 180°", "Yes, as the two angles are different", "No, as the sum is less than 180°"], "For parallel lines the interior angles on the same side add up to 180°. Here 105° + 80° = 185°.", "checking-for-parallel-lines")
    ],
    written: [
      W(3, "short", "Two lines are cut by a transversal. A pair of alternate interior angles are (3x + 10)° and (5x − 30)°. If the lines are parallel, find x and the angles.", "Alternate interior angles of parallel lines are equal, so 3x + 10 = 5x − 30. Then 40 = 2x and x = 20. The angles are 3(20) + 10 = 70° and 5(20) − 30 = 70°.", "checking-for-parallel-lines")
    ]
  },
  });
})();
