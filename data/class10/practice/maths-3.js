// Class 10 Mathematics practice bank, part 3: questions for learning objectives that had none. Extra practice (unreviewed draft).
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
  StudyData.addPractice(10, "maths", {
  "real-numbers": {
    mcq: [
      M(1, "To prove that √3 is irrational by contradiction, we begin by assuming that √3 is", "rational, equal to a/b with a and b co-prime", ["an integer", "negative", "a perfect square"], "We assume √3 = a/b with a and b co-prime integers and b ≠ 0, then show this leads to a contradiction.", "proof-by-contradiction-3-is-irrational"),
      M(2, "In the proof, why do we end up with a contradiction?", "a and b share the factor 3, but were taken co-prime", ["a and b both turn out to be irrational", "3b² is not equal to a² after all", "b turns out to be zero, which is not allowed"], "From 3b² = a² we get 3 | a and then 3 | b, so 3 is a common factor of a and b, which contradicts their being co-prime.", "proof-by-contradiction-3-is-irrational"),
      M(3, "Suppose 3 + 2√5 = r, where r is rational. Then √5 equals", "(r − 3)/2", ["(r + 3)/2", "2(r − 3)", "r − 3"], "Subtract 3 and divide by 2: √5 = (r − 3)/2. This is rational, which is false, so 3 + 2√5 is irrational.", "proof-by-contradiction-3-is-irrational")
    ],
    written: [
      W(3, "short", "Given that √3 is irrational, prove that 2 + √3 is irrational.", "Assume 2 + √3 is rational, say equal to r. Then √3 = r − 2. A difference of two rational numbers is rational, so √3 would be rational. This contradicts the fact that √3 is irrational. Hence 2 + √3 is irrational.", "proof-by-contradiction-3-is-irrational")
    ]
  },
  "pair-of-linear-equations-in-two-variables": {
    mcq: [
      M(1, "The first step of the substitution method is to", "express one variable in terms of the other", ["write both variables as numbers", "make the constant term zero", "draw the graph of both lines"], "We write one variable from the simpler equation in terms of the other, then substitute it in the second equation.", "substitution-method"),
      M(2, "Using y = 2x in x + y = 12, the value of x is", "4", ["6", "3", "12"], "x + 2x = 12 gives 3x = 12, so x = 4 (and y = 8).", "substitution-method"),
      M(3, "While solving a pair of equations by substitution you reach 0 = 5. This means the pair has", "no solution", ["exactly one solution", "infinitely many solutions", "two solutions"], "A false statement such as 0 = 5 means the pair is inconsistent and has no solution.", "substitution-method")
    ],
    written: [
      W(3, "short", "Solve by the substitution method: x + 2y = 7 and 2x − y = 4.", "From the first equation x = 7 − 2y. Put in the second: 2(7 − 2y) − y = 4, so 14 − 5y = 4 and y = 2. Then x = 7 − 4 = 3. Check: 3 + 4 = 7 and 6 − 2 = 4. So x = 3, y = 2.", "substitution-method")
    ]
  },
  "quadratic-equations": {
    mcq: [
      M(1, "In the standard form ax² + bx + c = 0 of a quadratic equation, which condition must hold?", "a ≠ 0", ["b ≠ 0", "c ≠ 0", "a = b"], "If a = 0 the x² term disappears and the equation is linear.", "standard-form"),
      M(2, "After simplifying, which of these is a quadratic equation?", "(x + 1)² = 2(x − 3)", ["x(x + 2) = x² + 5", "(x + 3)² = x² + 9", "(x − 1)(x + 1) = x² − 1"], "(x + 1)² = 2(x − 3) gives x² + 2x + 1 = 2x − 6, which reduces to x² + 7 = 0. The others lose their x² term.", "standard-form"),
      M(3, "x = 3 is a root of x² − 5x + k = 0. The value of k is", "6", ["−6", "15", "9"], "Put x = 3: 9 − 15 + k = 0, so k = 6.", "standard-form")
    ],
    written: [
      W(3, "short", "Is (x + 2)² = x² + 8 a quadratic equation? Simplify and give a reason.", "Expand: x² + 4x + 4 = x² + 8, which reduces to 4x − 4 = 0, or x = 1. The x² terms cancel, so it is a linear equation and not quadratic.", "standard-form")
    ]
  },
  "probability": {
    mcq: [
      M(1, "Which numbers on an ordinary die are prime?", "2, 3 and 5", ["1, 2, 3 and 5", "2, 3, 5 and 6", "1, 3 and 5"], "1 is not prime, so the primes on a die are 2, 3 and 5.", "common-mistakes"),
      M(2, "A bag has 5 red and 3 blue balls. One red ball is taken out and not put back. The probability that the next ball is red is", "4/7", ["5/7", "4/8", "5/8"], "After one red ball is removed, 4 red balls remain out of 7 balls.", "common-mistakes"),
      M(3, "Two dice are thrown together. The probability of getting at least one 6 is", "11/36", ["1/6", "12/36", "10/36"], "P(no 6) = 25/36, so P(at least one 6) = 1 − 25/36 = 11/36.", "common-mistakes")
    ],
    written: [
      W(2, "short", "One card is drawn from a pack of 52 cards and not replaced. It is an ace. A second card is then drawn. Find the probability that it is also an ace.", "After the first ace is removed, 3 aces are left among 51 cards. So the probability is 3/51 = 1/17.", "common-mistakes")
    ]
  },
  });
})();
