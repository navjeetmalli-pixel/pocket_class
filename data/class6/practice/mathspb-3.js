// Class 6 Mathematics (PSEB) practice bank, part 3: questions for learning objectives that had none. Extra practice (unreviewed draft).
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
  StudyData.addPractice(6, "mathspb", {
  "understanding-elementary-shapes": {
    mcq: [
      M(1, "1 cm is equal to how many millimetres?", "10 mm", ["100 mm", "1 mm", "5 mm"], "1 cm = 10 mm.", "measuring-and-comparing-segments"),
      M(2, "While measuring a line segment with a ruler, where should the zero mark be placed?", "At one end of the segment", ["In the middle of the segment", "At the 1 cm line", "Anywhere along the line"], "The zero mark must be exactly at one end of the segment, and we read the mark at the other end.", "measuring-and-comparing-segments"),
      M(3, "A segment measures 4 cm 7 mm. Its length in millimetres is", "47 mm", ["407 mm", "11 mm", "470 mm"], "4 cm = 40 mm, and 40 mm + 7 mm = 47 mm.", "measuring-and-comparing-segments")
    ],
    written: [
      W(3, "short", "Segment AB measures 5 cm 3 mm and segment CD measures 52 mm. Which segment is longer and by how much?", "Change AB to millimetres: 5 cm 3 mm = 50 + 3 = 53 mm. CD is 52 mm. So AB is longer, by 53 − 52 = 1 mm.", "measuring-and-comparing-segments")
    ]
  },
  });
})();
