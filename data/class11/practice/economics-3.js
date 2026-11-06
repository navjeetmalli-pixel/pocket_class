// Class 11 Economics practice bank, part 3: questions for learning objectives that had none. Extra practice (unreviewed draft).
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
  StudyData.addPractice(11, "economics", {
  "stats-introduction": {
    mcq: [
      M(1, "How does statistics help in understanding a large mass of economic data?", "It condenses it into a few summary measures", ["It increases the amount of data", "It makes the data vaguer", "It hides the relationships between economic factors"], "Summary measures such as the mean make it easy to compare data.", "what-statistics-does-in-economics"),
      M(2, "Statistics helps governments mainly in", "planning, policy making and forecasting", ["printing currency notes for the country", "building all the roads and bridges themselves", "fixing the price of every single item"], "Data on prices, production, employment and population support planning, policy making and forecasting.", "what-statistics-does-in-economics"),
      M(3, "Which statement presents an economic fact in a precise and definite form?", "Wheat output rose by 15 per cent", ["Wheat output rose very sharply this year", "Wheat output seems higher than before", "Farmers say that wheat did well"], "Statistics expresses facts in numbers, which is easier to understand than vague statements.", "what-statistics-does-in-economics")
    ],
    written: [
      W(3, "short", "How does statistics make a mass of data easier to use? Give two pairs of economic factors whose relationship it helps to study.", "It condenses a mass of data into a few summary measures such as the average (mean), which are easy to compare. It helps find relationships such as between price and quantity demanded, and between income and consumption.", "what-statistics-does-in-economics")
    ]
  },
  "presentation-of-data": {
    mcq: [
      M(1, "Textual presentation of data is suitable only when", "the amount of data is small", ["the amount of data is very large", "the data have many classes", "the data are only quantitative"], "Textual (descriptive) presentation describes data in a paragraph and works only for small amounts of data.", "textual-and-tabular-presentation"),
      M(2, "Arranging data in rows and columns is called", "tabular presentation", ["textual presentation", "diagrammatic presentation", "oral presentation"], "Tabular presentation is the most widely used method and makes comparison easy.", "textual-and-tabular-presentation"),
      M(3, "A table that arranges data by place, such as state-wise population, is called a", "spatial table", ["temporal table", "qualitative table", "quantitative table"], "Tables may classify data by attributes (qualitative), measurable characteristics (quantitative), time (temporal) or place (spatial).", "textual-and-tabular-presentation")
    ],
    written: [
      W(3, "short", "Distinguish between textual and tabular presentation of data. Name the four ways in which a table can classify data.", "Textual presentation describes data in a paragraph and suits only a small amount of data. Tabular presentation arranges data in rows and columns, makes comparison easy and is the most widely used. A table can classify data as qualitative, quantitative, temporal or spatial.", "textual-and-tabular-presentation")
    ]
  },
  "production-and-costs": {
    mcq: [
      M(1, "As more of a variable input is used with fixed inputs, its marginal product first rises and then", "falls", ["stays constant", "becomes infinite", "doubles"], "This is the law of variable proportions.", "law-of-variable-proportions"),
      M(2, "A rational producer operates in", "Phase II", ["Phase I", "Phase III", "any of the three phases"], "In Phase II, TP rises at a diminishing rate and MP falls but stays positive. In Phase III MP is negative.", "law-of-variable-proportions"),
      M(3, "TP is 48 units with 4 workers and 50 units with 5 workers. The marginal product of the 5th worker is", "2 units", ["10 units", "8 units", "50 units"], "MP = change in TP = 50 − 48 = 2 units.", "law-of-variable-proportions"),
      M(1, "In the long run, all costs are", "variable", ["fixed", "constant", "zero"], "No input is fixed in the long run, so there is no fixed cost.", "long-run-costs"),
      M(2, "The long-run average cost curve is U-shaped. It falls under", "increasing returns to scale", ["constant returns to scale", "diminishing returns to scale", "the law of variable proportions"], "LRAC falls under IRS, is flat under CRS and rises under DRS.", "long-run-costs"),
      M(3, "When long-run marginal cost is greater than long-run average cost, LRAC", "rises", ["falls", "stays constant", "becomes zero"], "LRMC cuts LRAC at its minimum point. When LRMC is above LRAC, LRAC rises.", "long-run-costs")
    ],
    written: [
      W(4, "short", "The total product of labour for 1 to 6 workers is 12, 28, 40, 48, 50 and 48 units. Find the marginal product of each worker, from which worker diminishing marginal product begins, and the phase in which MP is negative.", "MP = 12, 16, 12, 8, 2, −2. MP is highest for the 2nd worker and falls from the 3rd worker onwards, so diminishing marginal product sets in from the 3rd worker. MP is negative for the 6th worker, which is Phase III.", "law-of-variable-proportions"),
      W(4, "short", "A firm's long-run total cost at outputs 1, 2, 3 and 4 units is ₹100, ₹180, ₹240 and ₹340. Find LRAC and LRMC at each output and state at which output LRAC is lowest.", "LRAC = TC ÷ q = 100, 90, 80 and 85. LRMC = change in TC = 100, 80, 60 and 100. LRAC falls while LRMC is below it and rises at 4 units where LRMC (100) is above LRAC. LRAC is lowest at 3 units (₹80).", "long-run-costs")
    ]
  },
  "theory-of-firm-under-perfect-competition": {
    mcq: [
      M(1, "For a price-taking firm selling q units at price p, total revenue is", "p × q", ["p + q", "p ÷ q", "q ÷ p"], "TR = p × q, a straight line through the origin with slope p.", "revenue"),
      M(2, "For a price-taking firm, marginal revenue is equal to", "the price", ["zero", "twice the price", "half the price"], "MR = ΔTR ÷ Δq = p, so AR = MR = p at every level of output.", "revenue"),
      M(3, "A price-taking firm sells 40 units at ₹15 each. Its total revenue is", "₹600", ["₹55", "₹60", "₹6,000"], "TR = p × q = 15 × 40 = ₹600.", "revenue")
    ],
    written: [
      W(3, "short", "A price-taking firm sells each unit at ₹8. Find its TR at 5 and 6 units, the MR of the 6th unit and its AR. What does the TR curve look like?", "TR at 5 units = 8 × 5 = ₹40 and at 6 units = 8 × 6 = ₹48. MR of the 6th unit = 48 − 40 = ₹8. AR = TR ÷ q = ₹8. So AR = MR = p. The TR curve is a straight line through the origin with slope equal to the price, 8.", "revenue")
    ]
  },
  });
})();
