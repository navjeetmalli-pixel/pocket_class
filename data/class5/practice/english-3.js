// Class 5 English practice bank, part 3: extra questions for chapters with gaps. Extra practice (unreviewed draft).
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
  StudyData.addPractice(5, "english", {
    "notice-writing": {
      mcq: [
        M(1, "Which of these is a common topic for a notice?", "A lost item", ["A bedtime story", "A love poem", "A recipe for cake"], "Notices are often about a function, an exhibition, a lost item, library rules, a cleanliness drive or a sports match.", "common-topics"),
        M(2, "In a notice, what should come first?", "The most important information", ["A long story about the whole event", "The writer's favourite colour", "A joke for the readers"], "The most important information goes first so readers understand at a glance.", "common-topics")
      ],
      written: [
        W(2, "Name four common topics for a school notice and say what should come first in it.", "A school notice may be about a function or exhibition, a lost item, library rules, a cleanliness drive or a sports match. The most important information should come first so that readers understand it at a glance.", "short", "common-topics")
      ]
    }
  });
})();
