// Learning objectives for Class 7 (hand-written pilot chapters). Format: see CONTENT_GUIDE.md.
StudyData.addObjectives(7, {
  maths: {
    "operations-with-integers": [
      {
        id: "multiply",
        text: "I can multiply integers using the sign rules and explain 3 × (−4) as repeated addition.",
        topics: ["Multiplying integers"],
        level: "apply",
        prereq: ["6/maths/the-other-side-of-zero"],
        mistakes: [
          { id: "neg-neg-neg", text: "Saying (−3) × (−4) = −12.", fix: "A negative times a negative is positive, so (−3) × (−4) = 12. Different signs give a negative; the same signs give a positive." },
          { id: "mix-add-multiply", text: "Using the multiplication sign rule for addition, e.g. (−3) + (−4) = 7.", fix: "In addition, two negatives add up to a bigger negative: (−3) + (−4) = −7. The rule \"negative times negative is positive\" is only for multiplication and division." }
        ]
      },
      {
        id: "divide",
        text: "I can divide integers, and I know that division by zero is not defined while 0 divided by a non-zero integer is 0.",
        topics: ["Dividing integers"],
        level: "apply",
        mistakes: [
          { id: "div-zero", text: "Writing 5 ÷ 0 = 0 or 5 ÷ 0 = 5.", fix: "Division by zero is not defined, because no number multiplied by 0 gives 5." },
          { id: "zero-div", text: "Thinking 0 ÷ 5 is not defined.", fix: "0 ÷ 5 = 0 because 0 × 5 = 0. Only dividing by 0 is a problem." }
        ]
      },
      {
        id: "properties",
        text: "I can use the commutative, associative and distributive properties to make an integer calculation easier.",
        topics: ["Properties"],
        level: "apply",
        prereq: ["7/maths/operations-with-integers#multiply"],
        mistakes: [
          { id: "sub-commutative", text: "Assuming subtraction and division of integers work in any order, like multiplication.", fix: "Only addition and multiplication are commutative: (−2) × 5 = 5 × (−2), but 3 − 5 is not 5 − 3." },
          { id: "distribute-sign", text: "Forgetting to multiply every term inside the bracket, as in (−3) × (4 + 2) = −12 + 2.", fix: "Multiply the outside number with each term: (−3) × 4 + (−3) × 2 = −18." }
        ]
      },
      {
        id: "sign-of-product",
        text: "I can tell the sign of a product of many integers by counting the negative factors.",
        topics: ["Properties", "Multiplying integers"],
        level: "analyse",
        mistakes: [
          { id: "count-all", text: "Counting all the factors, not just the negative ones, to fix the sign.", fix: "Count only the negative factors. An even number of them gives a positive product and an odd number gives a negative product." }
        ]
      }
    ]
  }
});
