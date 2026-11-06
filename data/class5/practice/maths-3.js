// Class 5 Mathematics practice bank, part 3: questions for learning objectives that had none. Extra practice (unreviewed draft).
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
  StudyData.addPractice(5, "maths", {
  "fractions": {
    mcq: [
      M(1, "A rope is 7/8 m long and 3/8 m is cut off. How much rope is left?", "1/2 m", ["10/8 m", "3/8 m", "4/16 m"], "7/8 − 3/8 = 4/8 = 1/2. We subtract the numerators and keep the denominator.", "solve-and-check"),
      M(2, "Asha uses 1/2 kg of flour on Monday and 1/3 kg on Tuesday. How much flour does she use in all?", "5/6 kg", ["2/5 kg", "1/6 kg", "2/6 kg"], "The common denominator is 6: 3/6 + 2/6 = 5/6.", "solve-and-check"),
      M(3, "Dev says 2/3 + 3/4 = 5/7. How can you tell the answer is not sensible?", "The sum is smaller than 3/4", ["The sum should be 5/12", "The denominators must be added", "Fractions cannot be added"], "A sum must be larger than each part. 5/7 is less than 3/4. The correct answer is 8/12 + 9/12 = 17/12.", "solve-and-check")
    ],
    written: [
      W(3, "short", "A tank is 5/6 full. Then 1/4 of the tank's capacity is used. What fraction of the tank is left? Check that your answer is sensible.", "5/6 − 1/4 = 10/12 − 3/12 = 7/12. Check: 7/12 is less than 5/6, as we took water out, and 7/12 + 3/12 = 10/12 = 5/6, so the answer is sensible.", "solve-and-check")
    ]
  },
  "angles": {
    mcq: [
      M(1, "Where is the centre of the protractor placed when measuring an angle?", "On the vertex", ["On the end of one arm", "On the middle of an arm", "Anywhere on the angle"], "The centre of the protractor goes on the vertex, with one arm along the 0 mark.", "using-a-protractor"),
      M(2, "One arm lies along the 0 mark and the other arm crosses the scale at 125°. The angle measures", "125°", ["55°", "65°", "180°"], "We read the number where the second arm crosses the scale.", "using-a-protractor"),
      M(3, "After lining up the 0 mark, the other arm of an angle crosses the scale at 105°. What kind of angle is it?", "Obtuse", ["Acute", "Right", "Reflex"], "105° is between 90° and 180°, so the angle is obtuse.", "using-a-protractor")
    ],
    written: [
      W(3, "short", "Write the steps to measure an angle with a protractor.", "Place the centre of the protractor on the vertex. Line up one arm with the 0 mark on the base. Read the number where the other arm crosses the scale. That number is the angle in degrees.", "using-a-protractor")
    ]
  },
  });
})();
