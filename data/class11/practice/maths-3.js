// Class 11 Mathematics practice bank, part 3: questions for learning objectives that had none. Extra practice (unreviewed draft).
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
  StudyData.addPractice(11, "maths", {
  "linear-inequalities": {
    mcq: [
      M(1, "The inequality x ≤ 4 is called a", "slack inequality", ["strict inequality", "quadratic inequality", "linear equation"], "Inequalities with ≤ or ≥ are slack. Those with < or > are strict.", "inequalities"),
      M(2, "Which of these is a linear inequality in two variables?", "2x + 3y < 6", ["x² − 4x + 3 > 0", "2x + 3 > 7", "x + y = 5"], "ax + by < c is a linear inequality in two variables. The others are quadratic, in one variable, and an equation.", "inequalities"),
      M(3, "Which of these is a strict linear inequality in one variable?", "3x − 5 > 7", ["3x − 5 ≥ 7", "3x − 5 ≤ 7", "3x − 5 = 7"], "Strict inequalities use < or >. ≥ and ≤ give slack inequalities and = gives an equation.", "inequalities")
    ],
    written: [
      W(3, "short", "Classify each as a linear inequality in one variable, a linear inequality in two variables, or a quadratic inequality, and say whether it is strict or slack: (i) 2x + 3 > 7 (ii) x + 2y ≤ 5 (iii) x² − 3x + 2 ≥ 0.", "(i) Linear in one variable, strict. (ii) Linear in two variables, slack. (iii) Quadratic, slack.", "inequalities")
    ]
  },
  "permutations-and-combinations": {
    mcq: [
      M(1, "A shop has 5 shirts and 4 pairs of trousers. In how many ways can one shirt and one pair of trousers be chosen?", "20", ["9", "16", "25"], "By the multiplication principle, 5 × 4 = 20.", "fundamental-principle-of-counting"),
      M(2, "A person can go from A to B by any one of 3 buses or any one of 2 trains. In how many ways can the journey be made?", "5", ["6", "1", "32"], "The jobs are alternatives (bus or train), so the numbers of ways are added: 3 + 2 = 5.", "fundamental-principle-of-counting"),
      M(3, "A password has one letter from {A, B, C} followed by two digits from 0–9, with repetition allowed. How many passwords are possible?", "300", ["23", "30", "216"], "3 × 10 × 10 = 300.", "fundamental-principle-of-counting")
    ],
    written: [
      W(3, "short", "A restaurant offers 4 starters, 5 main dishes and 3 desserts. In how many ways can a meal of one starter, one main dish and one dessert be chosen? In how many ways can a customer choose just one item from the whole menu?", "A full meal: 4 × 5 × 3 = 60 ways (events in succession are multiplied). One item only: 4 + 5 + 3 = 12 ways (alternatives are added).", "fundamental-principle-of-counting")
    ]
  },
  "binomial-theorem": {
    mcq: [
      M(1, "Putting x = 1 in the expansion of (1 + x)ⁿ shows that ⁿC₀ + ⁿC₁ + … + ⁿCₙ equals", "2ⁿ", ["n²", "2n", "0"], "(1 + 1)ⁿ = 2ⁿ.", "special-cases"),
      M(2, "In the expansion of (a − b)ⁿ, the signs of the terms", "alternate between + and −", ["are all positive", "are all negative", "change only at the middle term"], "Replacing b by −b makes the odd-numbered powers of b negative, so the signs alternate.", "special-cases"),
      M(3, "The value of ⁶C₀ + ⁶C₂ + ⁶C₄ + ⁶C₆ is", "32", ["64", "36", "16"], "The sum of even-placed coefficients is 2ⁿ⁻¹ = 2⁵ = 32. Check: 1 + 15 + 15 + 1 = 32.", "special-cases")
    ],
    written: [
      W(3, "short", "Find (i) ¹⁰C₀ + ¹⁰C₁ + … + ¹⁰C₁₀ and (ii) ¹⁰C₁ + ¹⁰C₃ + ¹⁰C₅ + ¹⁰C₇ + ¹⁰C₉. Give the reasons.", "(i) Putting x = 1 in (1 + x)¹⁰ gives the sum 2¹⁰ = 1024. (ii) Putting x = −1 shows the sums of even- and odd-placed coefficients are equal, so each is half of 1024, i.e. 2⁹ = 512.", "special-cases")
    ]
  },
  "straight-lines": {
    mcq: [
      M(1, "The midpoint of the segment joining (2, 3) and (6, 9) is", "(4, 6)", ["(8, 12)", "(4, 3)", "(2, 3)"], "Midpoint = ((2 + 6)/2, (3 + 9)/2) = (4, 6).", "recap-of-coordinate-geometry"),
      M(2, "The distance between P(−2, 1) and Q(4, 9) is", "10", ["14", "8", "6"], "PQ = √((4 + 2)² + (9 − 1)²) = √(36 + 64) = 10.", "recap-of-coordinate-geometry"),
      M(3, "The point dividing the line joining A(1, 2) and B(7, 8) internally in the ratio 2 : 1 is", "(5, 6)", ["(3, 4)", "(4, 5)", "(6, 7)"], "x = (2 × 7 + 1 × 1)/3 = 5 and y = (2 × 8 + 1 × 2)/3 = 6.", "recap-of-coordinate-geometry")
    ],
    written: [
      W(4, "short", "Show that the points A(1, 2), B(3, 6) and C(5, 10) are collinear using the area formula. Also find the centroid of the triangle with vertices (1, 2), (5, 4) and (3, 9).", "Area = ½|1(6 − 10) + 3(10 − 2) + 5(2 − 6)| = ½|−4 + 24 − 20| = 0, so the points are collinear. Centroid = ((1 + 5 + 3)/3, (2 + 4 + 9)/3) = (3, 5).", "recap-of-coordinate-geometry")
    ]
  },
  "limits-and-derivatives": {
    mcq: [
      M(1, "lim(x→2) (x² + 3x) equals", "10", ["4", "6", "12"], "For a polynomial we substitute x = 2: 4 + 6 = 10.", "evaluating-limits"),
      M(2, "If direct substitution of x = a gives 0/0, a good first step is to", "factorise and cancel the common factor (x − a)", ["substitute x = 0 into the numerator and denominator", "divide the numerator by zero and simplify it", "say at once that the limit does not exist"], "0/0 is not a value. Cancel the common factor (or rationalise) and then substitute.", "evaluating-limits"),
      M(3, "lim(x→2) (x² − 4)/(x² − 3x + 2) equals", "4", ["0", "2", "does not exist"], "(x − 2)(x + 2)/((x − 1)(x − 2)) = (x + 2)/(x − 1), which is 4/1 = 4 at x = 2.", "evaluating-limits")
    ],
    written: [
      W(3, "short", "Evaluate lim(x→0) [√(4 + x) − 2]/x.", "Substitution gives 0/0, so rationalise: [√(4 + x) − 2][√(4 + x) + 2] / (x[√(4 + x) + 2]) = x / (x[√(4 + x) + 2]) = 1/[√(4 + x) + 2]. As x → 0 this is 1/(2 + 2) = 1/4.", "evaluating-limits")
    ]
  },
  "probability": {
    mcq: [
      M(1, "If A is an event in the sample space S, the complementary event 'not A' is", "S − A", ["A ∪ S", "A − S", "A ∩ A"], "A′ = S − A.", "events"),
      M(2, "The event 'A or B' is represented by", "A ∪ B", ["A ∩ B", "A − B", "A′"], "'A or B' is the union A ∪ B. 'A and B' is the intersection.", "events"),
      M(3, "A die is thrown. A = {even number} and B = {prime number}. The event 'A but not B' is", "{4, 6}", ["{2}", "{1, 3, 5}", "{2, 3, 4, 5, 6}"], "A = {2, 4, 6} and B = {2, 3, 5}, so A − B = A ∩ B′ = {4, 6}.", "events")
    ],
    written: [
      W(4, "short", "A die is thrown once. E is the event 'a number greater than 4' and F is 'an odd number'. Write E, F, E ∪ F, E ∩ F and E′. Is E a simple or a compound event?", "E = {5, 6}, F = {1, 3, 5}, E ∪ F = {1, 3, 5, 6}, E ∩ F = {5} and E′ = {1, 2, 3, 4}. E has two sample points, so it is a compound event.", "events")
    ]
  },
  });
})();
