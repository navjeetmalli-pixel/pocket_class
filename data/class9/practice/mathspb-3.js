// Class 9 Mathematics (PSEB) practice bank, part 3: questions for learning objectives that had none. Extra practice (unreviewed draft).
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
  StudyData.addPractice(9, "mathspb", {
  "number-systems": {
    mcq: [
      M(1, "The sum of a rational number and an irrational number is", "irrational", ["always rational", "an integer", "a natural number"], "A rational plus an irrational is irrational, for example 2 + √3.", "operations-on-real-numbers"),
      M(2, "Which of these is a rational number?", "√2 × √2", ["√2 × √3", "2 + √3", "5√2"], "√2 × √2 = 2, which is rational. √6, 2 + √3 and 5√2 are irrational.", "operations-on-real-numbers"),
      M(3, "To show √x, we mark AB = x and BC = 1 unit on a line and draw a semicircle on AC as diameter. A perpendicular at B meets the semicircle at D. Then BD equals", "√x", ["x", "x + 1", "√(x + 1)"], "By this construction BD = √x.", "operations-on-real-numbers")
    ],
    written: [
      W(4, "short", "Say whether each number is rational or irrational and give a reason: (i) 3 + √5 (ii) 4√7 (iii) √5 × √5 (iv) √3 × √2.", "(i) irrational, a rational plus an irrational. (ii) irrational, a non-zero rational times an irrational. (iii) rational, since √5 × √5 = 5. (iv) irrational, since √3 × √2 = √6.", "operations-on-real-numbers")
    ]
  },
  "lines-and-angles": {
    mcq: [
      M(1, "Corresponding or alternate angles are equal only when", "the lines are parallel", ["the transversal is perpendicular", "the angles are acute", "the lines meet at a point"], "Equal corresponding or alternate angles go with parallel lines only.", "problem-solving-tips"),
      M(2, "The angles of a linear pair are in the ratio 3 : 7. The larger angle is", "126°", ["54°", "108°", "140°"], "3x + 7x = 180°, so x = 18° and the angles are 54° and 126°.", "problem-solving-tips"),
      M(3, "To find a 'bent' angle between two parallel lines, a helpful step is to", "draw a line through the bend parallel to both", ["join the two outer ends of the bent lines with a segment", "bisect the bent angle into equal halves", "extend both lines until they meet"], "A line through the bend parallel to both lines lets us use alternate angles twice.", "problem-solving-tips")
    ],
    written: [
      W(3, "short", "The angles of a linear pair are in the ratio 7 : 11. Find the angles and write the reason.", "Let the angles be 7x and 11x. They form a linear pair, so 7x + 11x = 180°, i.e. 18x = 180° and x = 10°. The angles are 70° and 110°.", "problem-solving-tips")
    ]
  },
  "circles": {
    mcq: [
      M(1, "Equal chords of a circle subtend ... angles at the centre.", "equal", ["right", "supplementary", "unequal"], "Equal chords subtend equal angles at the centre.", "equal-chords"),
      M(2, "Two chords of a circle are equal. Their distances from the centre are", "equal", ["unequal", "in the ratio 1 : 2", "both zero"], "Equal chords are equidistant from the centre, and chords equidistant from the centre are equal.", "equal-chords"),
      M(3, "A chord of length 30 cm is 8 cm from the centre of a circle. The radius is", "17 cm", ["23 cm", "19 cm", "15 cm"], "The perpendicular from the centre bisects the chord, so r² = 15² + 8² = 225 + 64 = 289 and r = 17 cm.", "equal-chords")
    ],
    written: [
      W(3, "short", "Chords AB and CD of a circle with centre O are equal. If ∠AOB = 70°, find ∠COD. What can you say about the distances of AB and CD from O?", "Equal chords subtend equal angles at the centre, so ∠COD = ∠AOB = 70°. Equal chords are also equidistant from the centre, so AB and CD are at equal distances from O.", "equal-chords")
    ]
  },
  "statistics": {
    mcq: [
      M(1, "In a bar graph, the bars have", "equal width and equal gaps", ["unequal widths and unequal gaps", "no gaps at all", "equal heights"], "A bar graph has bars of equal width with equal gaps between them, and the height shows the value.", "bar-graphs"),
      M(2, "Which statement about a bar graph is correct?", "Bars may be vertical or horizontal", ["The gaps between bars show the frequency", "The bars must touch each other", "The bars must have different widths"], "Bars can be drawn either way, and the gaps have no meaning.", "bar-graphs"),
      M(3, "In a bar graph, 1 unit of height stands for 10 students. A bar is 4.5 units high. How many students does it show?", "45", ["4.5", "450", "14.5"], "4.5 × 10 = 45 students.", "bar-graphs")
    ],
    written: [
      W(3, "short", "State three rules to follow when drawing a bar graph.", "Draw bars of equal width with equal gaps between them; choose a suitable scale, for example 1 unit = 10 students; label both axes.", "bar-graphs")
    ]
  },
  });
})();
