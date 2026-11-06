// Class 2 English (PSEB) practice bank, part 3: extra questions for chapters with gaps. Extra practice (unreviewed draft).
(function () {
  let n = 1;
  // M(level, question, right answer, three wrong answers, explanation, objective id?): the right answer is stored at a varying position.
  function M(level, q, right, wrong, explain, obj) {
    const at = (n++) % 4;
    const options = wrong.slice();
    options.splice(at, 0, right);
    const o = { q, options, answer: at, explain, level };
    if (obj) o.obj = obj;
    return o;
  }
  // W(marks, question, model answer, type?, objective id?)
  function W(marks, q, a, type, obj) {
    const o = { q, a, marks };
    if (type) o.type = type;
    if (obj) o.obj = obj;
    return o;
  }
  StudyData.addPractice(2, "englishpb", {
    "describing-words": {
      mcq: [
        M(1, "In \"a red ball\", which word tells us about the ball?", "red", ["a", "ball", "is"], "Red describes the ball.", "describing-things"),
        M(1, "Which word describes the tree in \"a tall tree\"?", "tall", ["tree", "a", "on"], "Tall tells us how the tree looks.", "describing-things")
      ],
      written: [
        W(2, "Make one sentence with a describing word for a ball and one for a tree.", "For example: I have a red ball. There is a tall tree. Red and tall are describing words.", "short", "describing-things")
      ]
    },
    "rb2-my-computer": {
      mcq: [
        M(1, "When is the computer ready to use?", "When all the parts are put together", ["When it is in a box", "When it is switched off", "When it is far away"], "Put all the parts together and the computer is ready.", "using-it"),
        M(1, "How should we handle a computer?", "With care", ["With force", "With wet hands", "In a hurry"], "We should handle a computer with care.", "using-it")
      ],
      written: [
        W(2, "How do we get a computer ready, and how should we handle it?", "We put all its parts together and then the computer is ready. We should handle it with care.", "short", "using-it")
      ]
    }
  });
})();
