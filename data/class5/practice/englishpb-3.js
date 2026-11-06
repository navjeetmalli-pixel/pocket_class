// Class 5 English (PSEB) practice bank, part 3: extra questions for chapters with gaps. Extra practice (unreviewed draft).
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
  StudyData.addPractice(5, "englishpb", {
    "notice-writing": {
      mcq: [
        M(1, "A notice about a cleanliness drive is an example of", "a common notice topic", ["a letter to a close friend", "a story ending", "a diary entry"], "A cleanliness drive is a common topic for notices.", "common-topics"),
        M(2, "Why is the most important information put first in a notice?", "So that readers understand it at a glance", ["So that the notice looks much longer", "So that the date can be hidden", "So that nobody ever has to read it again at all"], "Readers should be able to understand the notice quickly.", "common-topics")
      ],
      written: [
        W(2, "Write any three topics of notices and the rule about where the key information goes.", "Notices can be about a sports match, library rules or a lost item (or a function, an exhibition or a cleanliness drive). Whatever the topic, put the most important information first.", "short", "common-topics")
      ]
    }
  });
})();
