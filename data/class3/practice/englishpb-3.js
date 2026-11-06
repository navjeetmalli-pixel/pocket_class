// Class 3 English (PSEB) practice bank, part 3: extra questions for chapters with gaps. Extra practice (unreviewed draft).
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
  StudyData.addPractice(3, "englishpb", {
    "writing-short-paragraph": {
      mcq: [
        M(1, "Which of these is a good topic for a short paragraph?", "My Favourite Festival", ["Space Travel Laws", "Banking Rules", "Machines of the Future"], "My Favourite Festival is one of the easy topics for young writers.", "good-topics-for-young-writers"),
        M(2, "What is the advantage of a topic you know well?", "You can find many details to write", ["It is always very short and dull", "It has no spelling mistakes", "It needs no thinking, planning or checking"], "A familiar topic gives plenty of details.", "good-topics-for-young-writers")
      ],
      written: [
        W(2, "Which topics are useful for a young writer? Why choose a topic you know?", "Useful topics are My Family, My School, My Pet, My Favourite Festival and My Village or City. We should choose a topic we know well so that we have plenty of details to write about.", "short", "good-topics-for-young-writers")
      ]
    }
  });
})();
