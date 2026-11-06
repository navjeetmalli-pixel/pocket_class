// Class 4 Mathematics practice bank, part 3: questions for learning objectives that had none. Extra practice (unreviewed draft).
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
  StudyData.addPractice(4, "maths", {
  "money": {
    mcq: [
      M(1, "If the selling price is more than the cost price, there is a", "profit", ["loss", "change", "discount"], "SP more than CP gives a profit.", "profit-and-loss"),
      M(2, "A shopkeeper buys a bag for ₹340 and sells it for ₹395. What is the profit?", "₹55", ["₹45", "₹65", "₹735"], "Profit = SP − CP = 395 − 340 = 55.", "profit-and-loss"),
      M(3, "A fan is bought for ₹850 and sold for ₹790. What is the loss?", "₹60", ["₹50", "₹70", "₹1,640"], "SP is less than CP, so Loss = CP − SP = 850 − 790 = 60.", "profit-and-loss")
    ],
    written: [
      W(3, "short", "Raju buys 5 notebooks at ₹14 each and sells all of them for ₹90. Does he make a profit or a loss? How much?", "Cost price = 5 × 14 = ₹70. Selling price = ₹90. SP is more than CP, so there is a profit. Profit = 90 − 70 = ₹20.", "profit-and-loss")
    ]
  },
  });
})();
