// Class 3 English practice bank, part 3: extra questions for chapters with gaps. Extra practice (unreviewed draft).
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
  StudyData.addPractice(3, "english", {
    "writing-short-paragraph": {
      mcq: [
        M(1, "Which of these is a good topic for a young writer's paragraph?", "My Pet", ["The Solar System Machines", "Rules of Algebra", "World Politics Today"], "My Family, My School, My Pet, My Favourite Festival and My Village or City are easy topics.", "good-topics-for-young-writers"),
        M(2, "Why should you choose a topic you know well?", "You will have plenty of details to write", ["The paragraph will be longer than a page", "You will not need to use full stops", "Your teacher will not read it"], "A topic you know well gives you many details to write about.", "good-topics-for-young-writers")
      ],
      written: [
        W(2, "Name three good topics for a short paragraph and explain how to choose one.", "Three good topics are My Family, My School and My Pet (also My Favourite Festival and My Village or City). Choose a topic you know well, so that you have plenty of details to write about.", "short", "good-topics-for-young-writers")
      ]
    },
    "out-in-the-garden": {
      mcq: [
        M(1, "What do children name and talk about in the speaking activity?", "Other games, and what they call them at home", ["Their favourite cartoon films and the songs from them", "Their school exams", "The names of rivers"], "Children name other games and say what they call them in their mother tongue.", "speaking-and-doing"),
        M(1, "Which of these is needed to make the paper bag puppet?", "A paper bag, colours and thread", ["A clay pot, sand and water", "Wood and nails", "Cloth, a needle and some coloured buttons"], "The puppet is made with a paper bag, colours and thread.", "speaking-and-doing")
      ],
      written: [
        W(2, "Write how you can make a paper bag puppet, in two or three lines.", "Take a paper bag. Colour it to make a face for the puppet. Use thread to finish it, and then play with your puppet.", "short", "speaking-and-doing")
      ]
    }
  });
})();
