// Class 11 Mathematics practice bank, part 4: Principle of Mathematical Induction (formative). Extra board-style questions for year-long practice (unreviewed draft).
(function () {
  const AR_OPTS = ["Both A and R are true, and R is the correct explanation of A.", "Both A and R are true, but R is not the correct explanation of A.", "A is true, but R is false.", "A is false, but R is true."];
  let n = 1;
  // M(level, question, right answer, three wrong answers, explanation): the right answer is stored at a varying position.
  function M(level, q, right, wrong, explain) {
    const at = (n++) % 4;
    const options = wrong.slice();
    options.splice(at, 0, right);
    return { q, options, answer: at, explain, level };
  }
  // AR(level, assertion, reason, answer index, explanation): assertion-reason with fixed options.
  function AR(level, a, r, answer, explain) {
    return { q: "Assertion (A): " + a + "\nReason (R): " + r, options: AR_OPTS, answer, explain, level, keepOrder: true };
  }
  // W(marks, question, model answer, type?)
  function W(marks, q, a, type) {
    const o = { q, a, marks };
    if (type) o.type = type;
    return o;
  }
  StudyData.addPractice(11, "maths", {
  "principle-of-mathematical-induction": {
    mcq: [
      M(1, "In a proof by induction, P(n) stands for", "the statement to be proved for the natural number n", ["the nth term of a series", "the product of the first n numbers", "the base case only"], "P(n) is a claim that depends on n and is true or false for each n."),
      M(1, "The base case of 1 + 2 + … + n = n(n + 1)/2 is checked at n =", "1", ["0", "2", "k"], "The first natural number is 1, so the base case is P(1)."),
      M(1, "The assumption that P(k) is true is called the", "inductive hypothesis", ["conclusion", "contradiction", "base case"], "It is assumed for one value k, then used to prove P(k + 1)."),
      M(1, "The sum of the first 20 natural numbers is", "210", ["200", "220", "420"], "n(n + 1)/2 = 20 × 21/2 = 210."),
      M(1, "The sum of the first 6 odd natural numbers is", "36", ["30", "42", "21"], "1 + 3 + 5 + 7 + 9 + 11 = 36 = 6²."),
      M(2, "The value of 1² + 2² + … + 10² is", "385", ["100", "3025", "330"], "n(n + 1)(2n + 1)/6 = 10 × 11 × 21/6 = 385. (3025 is the sum of the cubes.)"),
      M(2, "The value of 1³ + 2³ + … + 10³ is", "3025", ["385", "550", "1000"], "The sum of cubes is [n(n + 1)/2]² = 55² = 3025."),
      M(2, "The value of 2 + 4 + 6 + … + 30 is", "240", ["225", "256", "120"], "With n = 15, n(n + 1) = 15 × 16 = 240."),
      M(2, "In the proof for the sum of squares, k(k + 1)(2k + 1)/6 + (k + 1)² simplifies to", "(k + 1)(k + 2)(2k + 3)/6", ["(k + 1)(k + 2)(2k + 1)/6", "k(k + 2)(2k + 3)/6", "(k + 1)²(2k + 3)/6"], "Taking out (k + 1)/6 leaves 2k² + 7k + 6 = (k + 2)(2k + 3)."),
      M(2, "2³ⁿ − 1 is divisible by", "7", ["3", "5", "9"], "For n = 1 the value is 7, so it cannot be divisible by 3, 5 or 9; induction shows divisibility by 7 for every n."),
      M(2, "n(n + 1) is always divisible by", "2", ["3", "4", "6"], "For n = 1 the value is 2, so only 2 works for all n."),
      M(2, "The smallest natural number n for which n! > 2ⁿ is", "4", ["1", "2", "3"], "4! = 24 > 16 while 3! = 6 < 8; the inequality then holds for all n ≥ 4."),
      M(2, "P(n): \"n² + n + 1 is even\" has a valid inductive step, yet it is false because", "the base case fails, as the value is always odd", ["the step fails at k = 1", "n² + n + 1 is always a prime", "it holds only when n is even"], "P(1) says 3 is even, which is false; the step cannot rescue a statement with no true start."),
      M(2, "The sum 1/(1·2) + 1/(2·3) + … + 1/(19·20) is", "19/20", ["18/19", "20/21", "1"], "n/(n + 1) with n = 19 gives 19/20."),
      M(3, "If P(k): 1 + 4 + 7 + … + (3k − 2) = k(3k − 1)/2, then adding the next term (3k + 1) gives", "(k + 1)(3k + 2)/2", ["k(3k + 1)/2", "(k + 1)(3k + 1)/2", "(k + 1)(3k − 1)/2"], "k(3k − 1)/2 + (3k + 1) = (3k² + 5k + 2)/2 = (k + 1)(3k + 2)/2, which is P(k + 1)."),
      M(3, "To prove that 7ⁿ − 3ⁿ is divisible by 4, the term k + 1 is written as 7ᵏ⁺¹ − 3ᵏ⁺¹ = 7(7ᵏ − 3ᵏ) + ___", "4·3ᵏ", ["3·3ᵏ", "7·3ᵏ", "4·7ᵏ"], "7(7ᵏ − 3ᵏ) = 7ᵏ⁺¹ − 7·3ᵏ, so we add 7·3ᵏ − 3·3ᵏ = 4·3ᵏ."),
      M(3, "Which result is proved by writing (k + 1)³ + 2(k + 1) = (k³ + 2k) + 3(k² + k + 1)?", "n³ + 2n is divisible by 3", ["n³ + 2n is divisible by 6", "n³ − n is divisible by 4", "n² + n is divisible by 3"], "Both parts on the right are multiples of 3 (the first by the hypothesis). For n = 1 the value is 3, so 6 is not a divisor of all values."),
      M(3, "In proving 2ⁿ > n² for n ≥ 5, after 2ᵏ⁺¹ = 2·2ᵏ > 2k², which inequality is needed next?", "2k² ≥ (k + 1)² for k ≥ 3", ["2k² ≤ (k + 1)² for all k", "k² < k + 1 for all k", "2k² = (k + 1)² for k ≥ 3"], "2k² − (k + 1)² = k² − 2k − 1, which is positive for k ≥ 3, so 2ᵏ⁺¹ > (k + 1)²."),
      M(3, "The sum 1·2 + 2·3 + … + 10·11 equals", "440", ["385", "330", "220"], "n(n + 1)(n + 2)/3 with n = 10 gives 10 × 11 × 12/3 = 440."),
      M(3, "A student proves only that P(k) ⇒ P(k + 1) for every k, with no base case. What can be concluded?", "Nothing, the statement may be false for every n", ["It is true for every n", "It is true for n ≥ k only", "It is true for all even n"], "Without a true starting case the chain of implications never begins."),
      M(2, "xⁿ − yⁿ is divisible by x − y for", "every natural number n", ["even n only", "odd n only", "n ≥ 2 only"], "x^(k+1) − y^(k+1) = x(xᵏ − yᵏ) + yᵏ(x − y) gives the inductive step."),
      AR(3, "Checking a statement for n = 1 to 50 does not prove it for all n.", "A statement can hold for many values and still fail later, as n² − n + 41 (prime for n = 1 to 40) fails at n = 41.", 0, "At n = 41 the expression is 41², so a counter-example appears after many true cases."),
      AR(2, "The inductive step alone does not prove a statement.", "The base case gives a first true value from which the step can carry the truth on.", 0, "Both parts are needed: a true start and a step that passes truth forward."),
      AR(3, "Induction can start from a number other than 1.", "The statement 2ⁿ > n² is false for n = 2, 3, 4 and true for n ≥ 5, so its base case is n = 5.", 0, "When the first true value is n₀, we prove P(n₀) and then P(k) ⇒ P(k + 1) for k ≥ n₀."),
      AR(3, "3ⁿ − 1 is divisible by 2 for all natural numbers n.", "3ᵏ⁺¹ − 1 = 3(3ᵏ − 1) + 2.", 0, "The first term is a multiple of 2 by the hypothesis and the second is 2, so the step works, and P(1): 3 − 1 = 2 is true."),
    ],
    written: [
      W(2, "State the principle of mathematical induction.", "Let P(n) be a statement about natural numbers.\nIf P(1) is true, and whenever P(k) is true for a natural number k, P(k + 1) is also true,\nthen P(n) is true for all natural numbers n."),
      W(2, "Prove by induction that 2 + 4 + 6 + … + 2n = n(n + 1).", "P(1): left side 2, right side 1 × 2 = 2, true.\nAssume 2 + 4 + … + 2k = k(k + 1). Add 2(k + 1): k(k + 1) + 2(k + 1) = (k + 1)(k + 2).\nThis is P(k + 1), so the result is true for all n."),
      W(3, "Prove by induction that 1 + 3 + 5 + … + (2n − 1) = n².", "P(1): 1 = 1², true.\nAssume 1 + 3 + … + (2k − 1) = k². Add the next term 2k + 1.\nk² + 2k + 1 = (k + 1)², so P(k + 1) is true and the result holds for all n."),
      W(3, "Prove that 1/(1·2) + 1/(2·3) + … + 1/[n(n + 1)] = n/(n + 1) for all natural numbers n.", "P(1): 1/2 = 1/(1 + 1), true.\nAssume the formula for k and add 1/[(k + 1)(k + 2)]: k/(k + 1) + 1/[(k + 1)(k + 2)] = [k(k + 2) + 1]/[(k + 1)(k + 2)].\nThe numerator is (k + 1)², so the sum is (k + 1)/(k + 2), which is P(k + 1). Hence true for all n."),
      W(3, "Prove by induction that n³ + 2n is divisible by 3 for every natural number n.", "P(1): 1 + 2 = 3, divisible by 3.\nAssume k³ + 2k = 3m for some integer m.\n(k + 1)³ + 2(k + 1) = (k³ + 2k) + 3(k² + k + 1) = 3m + 3(k² + k + 1) = 3(m + k² + k + 1).\nSo P(k + 1) is true and the result holds for all n."),
      W(4, "Prove by induction that 1² + 2² + … + n² = n(n + 1)(2n + 1)/6.", "P(1): 1 = 1 × 2 × 3/6, true.\nAssume the formula for k and add (k + 1)²: k(k + 1)(2k + 1)/6 + (k + 1)².\nTake out (k + 1)/6: (k + 1)[k(2k + 1) + 6(k + 1)]/6 = (k + 1)(2k² + 7k + 6)/6.\nSince 2k² + 7k + 6 = (k + 2)(2k + 3), the sum is (k + 1)(k + 2)(2k + 3)/6, which is P(k + 1).\nHence true for all n."),
      W(4, "Prove by induction that 1·2 + 2·3 + 3·4 + … + n(n + 1) = n(n + 1)(n + 2)/3.", "P(1): 1·2 = 2 and 1 × 2 × 3/3 = 2, true.\nAssume the formula for k and add (k + 1)(k + 2): k(k + 1)(k + 2)/3 + (k + 1)(k + 2).\nTake out (k + 1)(k + 2): (k + 1)(k + 2)(k/3 + 1) = (k + 1)(k + 2)(k + 3)/3.\nThis is P(k + 1), so the result is true for all n."),
      W(5, "Prove by induction that 2ⁿ > n² for every natural number n ≥ 5.", "P(5): 2⁵ = 32 > 25 = 5², true.\nAssume 2ᵏ > k² for some k ≥ 5. Then 2ᵏ⁺¹ = 2 · 2ᵏ > 2k².\nNow 2k² − (k + 1)² = k² − 2k − 1 = (k − 1)² − 2, which is positive for k ≥ 5 (it is 14 at k = 5 and grows).\nSo 2k² > (k + 1)² and therefore 2ᵏ⁺¹ > (k + 1)².\nHence P(k + 1) is true and the inequality holds for all n ≥ 5."),
      W(5, "Prove that 1³ + 2³ + … + n³ = [n(n + 1)/2]² for all natural numbers n.", "P(1): 1 = (1 × 2/2)² = 1, true.\nAssume the formula for k and add (k + 1)³: [k(k + 1)/2]² + (k + 1)³.\n= (k + 1)²[k²/4 + (k + 1)] = (k + 1)²(k² + 4k + 4)/4.\nSince k² + 4k + 4 = (k + 2)², this equals (k + 1)²(k + 2)²/4 = [(k + 1)(k + 2)/2]².\nThis is P(k + 1), so the formula is true for all n."),
      W(4, "Case study: A student claims that n² + n + 1 is even for all natural numbers n. She shows that if k² + k + 1 is even then (k + 1)² + (k + 1) + 1 is even, and says the proof is complete.\n(i) Show that her inductive step is correct. (1)\n(ii) What step has she forgotten, and what does it give? (1)\n(iii) Explain why the statement is false. (2)", "(i) (k + 1)² + (k + 1) + 1 = (k² + k + 1) + 2k + 2. If the first part is even, adding the even number 2k + 2 keeps it even. (1)\n(ii) The base case P(1): 1 + 1 + 1 = 3, which is odd, so P(1) is false. (1)\n(iii) The inductive step only passes truth forward, and there is no true starting case. In fact n² + n + 1 is always odd, because n² + n = n(n + 1) is always even. (2)", "case"),
    ]
  },
  });
})();
