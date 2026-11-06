// Class 3 Mathematics practice bank, part 3: questions for learning objectives that had none. Extra practice (unreviewed draft).
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
  StudyData.addPractice(3, "maths", {
  "numbers-up-to-999": {
    mcq: [
      M(1, "Which number comes just after 999?", "1000", ["990", "9999", "1999"], "The number after 999 is 1000, which is one thousand.", "reading-and-writing"),
      M(2, "What does the 0 tell us in the number 509?", "There are no tens", ["There are no ones", "There are no hundreds", "The number is zero"], "The 0 holds the tens place and shows that there are no tens.", "reading-and-writing"),
      M(3, "A number has 8 in the hundreds place, 0 in the tens place and 3 in the ones place. How do we read it?", "Eight hundred and three", ["Eight hundred and thirty", "Eighty-three", "Eight thousand and three"], "The number is 803: eight hundreds, no tens and three ones.", "reading-and-writing")
    ],
    written: [
      W(2, "short", "Write 'two hundred and sixty' in digits. Then say how you read 406 aloud and what the 0 in it means.", "'Two hundred and sixty' is 260. 406 is read 'four hundred and six'. The 0 in the tens place means there are no tens.", "reading-and-writing")
    ]
  },
  "time": {
    mcq: [
      M(1, "What does a calendar show?", "Days, weeks and months", ["Hours and minutes", "Only today's date", "Only the seasons"], "A calendar shows the days, weeks and months of the year.", "using-a-calendar"),
      M(2, "Today is Friday. What day will it be 14 days later?", "Friday", ["Thursday", "Saturday", "Sunday"], "14 days is 2 full weeks, so the day of the week is the same.", "using-a-calendar"),
      M(3, "A festival is 3 weeks after today. How many days is that?", "21", ["3", "18", "30"], "1 week has 7 days, so 3 weeks have 3 × 7 = 21 days.", "using-a-calendar")
    ],
    written: [
      W(2, "short", "Today is Tuesday. What day of the week will it be after 9 days? Show how you counted.", "7 days after Tuesday is Tuesday again. 2 more days gives Wednesday and then Thursday. So it will be Thursday.", "using-a-calendar")
    ]
  },
  });
})();
