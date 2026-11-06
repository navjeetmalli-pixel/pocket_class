// Class 8 Mathematics (PSEB) practice bank, part 3: questions for learning objectives that had none. Extra practice (unreviewed draft).
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
  StudyData.addPractice(8, "mathspb", {
  "direct-and-inverse-proportions": {
    mcq: [
      M(1, "When one quantity increases, the other decreases in the same ratio. The two quantities are in", "inverse proportion", ["direct proportion", "no proportion at all", "equal proportion"], "That is inverse proportion, where x₁ × y₁ = x₂ × y₂.", "solving-problems"),
      M(2, "9 pencils cost ₹63. What is the cost of 14 pencils?", "₹98", ["₹88", "₹108", "₹63"], "Unitary method: 1 pencil costs 63 ÷ 9 = ₹7, so 14 pencils cost 14 × 7 = ₹98.", "solving-problems"),
      M(3, "Which pair increases together but is not in direct proportion?", "A child's age and height", ["Number of pens and their total cost", "Distance and time at a fixed speed", "Quantity of rice and its price"], "A child's age and height both increase, but not in a fixed ratio.", "solving-problems")
    ],
    written: [
      W(3, "short", "8 workers can build a wall in 15 days. How many days will 10 workers take, working at the same rate? State the type of proportion.", "More workers means fewer days, so this is inverse proportion. 8 × 15 = 10 × y, so 120 = 10y and y = 12. They will take 12 days.", "solving-problems")
    ]
  },
  "factorisation": {
    mcq: [
      M(1, "When regrouping terms, after taking the common factor out of each group we should see", "a common bracket", ["a square number", "a zero term", "a different power of x"], "If the same bracket appears in both groups it can be taken out as a common factor. If not, try another grouping.", "regrouping-terms"),
      M(2, "Factorise xy + 2x + 3y + 6.", "(x + 3)(y + 2)", ["(x + 2)(y + 3)", "(x + 6)(y + 1)", "(x + 3)(y + 6)"], "x(y + 2) + 3(y + 2) = (x + 3)(y + 2).", "regrouping-terms"),
      M(3, "Factorise ax − ay − bx + by.", "(a − b)(x − y)", ["(a + b)(x − y)", "(a − b)(x + y)", "(a + b)(x + y)"], "a(x − y) − b(x − y) = (a − b)(x − y). Watch the sign when taking out −b.", "regrouping-terms")
    ],
    written: [
      W(3, "short", "Factorise 2pq − 4p − 3q + 6 by regrouping. Show every step.", "Group in pairs: (2pq − 4p) + (−3q + 6) = 2p(q − 2) − 3(q − 2). The bracket (q − 2) is common, so the answer is (2p − 3)(q − 2).", "regrouping-terms")
    ]
  },
  });
})();
