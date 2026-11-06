// Class 6 Science (PSEB) practice bank, part 3: questions for learning objectives that had none. Extra practice (unreviewed draft).
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
  StudyData.addPractice(6, "sciencepb", {
  "sorting-materials-into-groups": {
    mcq: [
      M(1, "Which of these is a material?", "Wood", ["Chair", "Pencil box", "Window"], "Wood is a material. A chair, a pencil box and a window are objects made from materials.", "objects-and-materials"),
      M(2, "A chair may be made of wood, iron and cloth. This shows that", "an object can be made of several materials", ["all chairs are made of wood and nothing else", "iron is a kind of cloth", "materials cannot be mixed in one object"], "An object can use one material or many materials together.", "objects-and-materials"),
      M(3, "Which statement is correct?", "One material can make many objects", ["Each material makes only one object", "An object is always made of one material", "Wood is the only material for furniture"], "For example, glass is used for windows, bottles and spectacles, and one kind of object can be made of different materials.", "objects-and-materials")
    ],
    written: [
      W(3, "short", "Name an object that is made of more than one material and list the materials. Also give one example of a material used to make different objects.", "A chair can be made of wood, iron and cloth. Glass is a material used to make windows, bottles and tumblers. We choose the material according to the properties we need.", "objects-and-materials")
    ]
  },
  });
})();
