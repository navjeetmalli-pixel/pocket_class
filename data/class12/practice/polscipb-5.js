// Class 12 Political Science (PSEB) practice bank, part 5: questions for learning objectives that had none. Extra practice (unreviewed draft).
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
  StudyData.addPractice(12, "polscipb", {
  "india-relations": {
    mcq: [
      M(1, "India favours", "dialogue and peaceful settlement", ["war as the first and only resort in all disputes", "avoiding all talks", "military alliances only"], "India also protects its sovereignty and security.", "overall-approach"),
      M(2, "India's approach to relations with other countries combines", "economic ties with caution on security", ["trade bans with caution on culture", "military action with economic isolation", "no cooperation with any country"], "Cooperation and caution go together.", "overall-approach"),
      M(3, "India's relations with other countries are shaped by", "the global balance and national interests", ["the wishes of a single powerful country alone", "the weather alone", "ancient treaties alone"], "Relations change as the world balance and India's interests change.", "overall-approach")
    ],
    written: [
      W(3, "short", "Describe the overall approach of India in its relations with Pakistan, China, Russia and the USA.", "India favours dialogue and peaceful settlement but protects its sovereignty and security. It combines economic cooperation with caution on security, and its relations are shaped by the changing global balance and by national interests.", "overall-approach")
    ]
  },
  });
})();
