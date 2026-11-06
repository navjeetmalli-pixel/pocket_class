// Class 12 Mathematics practice bank, part 3: questions for learning objectives that had none. Extra practice (unreviewed draft).
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
  StudyData.addPractice(12, "maths", {
  "inverse-trigonometric-functions": {
    mcq: [
      M(1, "The graph of y = sin⁻¹x is the mirror image of the graph of y = sin x (−π/2 ≤ x ≤ π/2) in the line", "y = x", ["x = 0", "y = 0", "y = −x"], "An inverse function's graph is the reflection of the original function's graph in y = x.", "graphs"),
      M(2, "The graph of y = cos⁻¹x falls from the point", "(−1, π) to (1, 0)", ["(−1, 0) to (1, π)", "(−1, −π/2) to (1, π/2)", "(0, 0) to (1, π)"], "cos⁻¹(−1) = π and cos⁻¹(1) = 0. The points (−1, −π/2) and (1, π/2) belong to sin⁻¹x.", "graphs"),
      M(3, "The domain of a restricted trigonometric function becomes ... of its inverse.", "the range", ["the domain", "the period", "an asymptote"], "Domain and range swap: the range of the restricted sin x is the domain of sin⁻¹x.", "graphs")
    ],
    written: [
      W(3, "short", "Write the domain and range of y = tan⁻¹x and describe its graph.", "Domain: all real numbers. Range: (−π/2, π/2). The graph passes through the origin, rises steadily and stays between the lines y = −π/2 and y = π/2, which it approaches but never reaches.", "graphs")
    ]
  },
  "application-of-integrals": {
    mcq: [
      M(1, "The first step in finding an area using integrals is to", "sketch the curves and shade the region", ["write the answer in square units", "evaluate the definite integral of the function", "find the strips' widths"], "The steps are: sketch, find limits, choose strips, then integrate and give the answer in square units.", "method-for-area-problems"),
      M(2, "If f(x) ≥ g(x) on [a, b], the area between y = f(x) and y = g(x) is", "∫ₐᵇ [f(x) − g(x)] dx", ["∫ₐᵇ [g(x) − f(x)] dx", "∫ₐᵇ f(x) g(x) dx", "∫ₐᵇ [f(x) + g(x)] dx"], "We subtract the lower curve from the upper curve.", "method-for-area-problems"),
      M(3, "The area enclosed between y = x and y = x² is", "1/6 square unit", ["1/2 square unit", "1/3 square unit", "5/6 square unit"], "They meet at x = 0 and x = 1. Area = ∫₀¹ (x − x²) dx = 1/2 − 1/3 = 1/6.", "method-for-area-problems")
    ],
    written: [
      W(4, "short", "Find the area enclosed by the parabola y = 4x − x² and the x-axis.", "Sketch the parabola, which cuts the x-axis where 4x − x² = 0, i.e. x = 0 and x = 4, and lies above the axis in between. Area = ∫₀⁴ (4x − x²) dx = [2x² − x³/3]₀⁴ = 32 − 64/3 = 32/3 square units.", "method-for-area-problems")
    ]
  },
  });
})();
