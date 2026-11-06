// Class 8 Social Science (PSEB) practice bank, part 5: questions for learning objectives that had none. Extra practice (unreviewed draft).
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
  StudyData.addPractice(8, "sstpb", {
  "mineral-energy-resources": {
    mcq: [
      M(1, "Which habit saves electricity?", "Switching off unused lights", ["Leaving fans on in empty rooms", "Keeping the TV on all night", "Running the geyser all day"], "Switching off lights and appliances when they are not needed saves energy.", "saving-energy"),
      M(2, "Which choice saves fuel?", "Carpooling to work", ["Driving alone to work", "Leaving the engine running", "Using two cars for one trip"], "Sharing a vehicle puts fewer vehicles on the road, so less fuel is used.", "saving-energy"),
      M(3, "Which pair are both ways of saving energy?", "Using efficient devices and public transport", ["Leaving lights on and carpooling together", "Using public transport and idling the engine", "Using efficient devices and leaving appliances on"], "Efficient devices and public transport both reduce the energy used. Leaving things on wastes it.", "saving-energy")
    ],
    written: [
      W(4, "short", "Give four ways in which a family can save energy at home and while travelling.", "Switch off lights and appliances when not needed; use energy-efficient devices; use public transport; carpool instead of each person driving alone.", "saving-energy")
    ]
  },
  });
})();
