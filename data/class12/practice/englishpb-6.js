// Class 12 English (PSEB) practice bank, part 6: extra questions for chapters with gaps. Extra practice (unreviewed draft).
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
  StudyData.addPractice(12, "englishpb", {
    "hassans-attendance-problem": {
      mcq: [
        M(2, "According to the message of the chapter, what matters as much as talent?", "Discipline and good habits", ["Luck and the right friends", "Marks and the school's name", "Money and a quick promotion"], "The message says discipline and good habits matter as much as talent, and excellence comes from practice.", "message"),
        M(2, "What is the chapter's lesson about working only for marks or money?", "It leads nowhere without real knowledge", ["It is the surest way to become successful", "It is useful only for students of Class 12", "It matters more than learning the subject well"], "The message states that marks without knowledge, and working only for marks or money, lead nowhere.", "message")
      ],
      written: [
        W(4, "What message does 'Hassan's Attendance Problem' give to students? How does the chapter end?", "The chapter teaches that marks without knowledge, and working only for marks or money, lead nowhere. Discipline and good habits matter as much as talent, and excellence comes from practice. It also tells us that it is never too late to begin again. At the end the teacher encourages Hassan, he promises to try, and she hopes to meet him again happy and successful.", "long", "message")
      ]
    },
    "ghadari-babas-in-kalapani-jail": {
      mcq: [
        M(2, "What was the Ghadarites' resolve in the Kalapani jail?", "To resist the indignity they faced", ["To obey every order without protest", "To escape the jail by night at once", "To ask the jailors to pardon them first"], "The Ghadarites resolved to resist indignity, and showed it through strikes, fasts and protest.", "resistance"),
        M(3, "What form of protest did the Ghadarite prisoners use, as in the notes?", "Work strikes and long hunger strikes", ["Writing petitions to the jailor each morning", "Refusing visits from their own families", "Burning the jail registers during the night"], "The notes say they held work strikes and long hunger strikes, led by several Ghadarite leaders.", "resistance")
      ],
      written: [
        W(5, "Describe how the Ghadarites resisted ill-treatment in Kalapani jail, and what price they paid.", "The Ghadarites resolved to resist indignity. Parma Nand Jhansi hit the jailor and was beaten, and Chattar Singh slapped the Superintendent and was caged in standing bar chains. They held work strikes and long hunger strikes, led by Sohan Singh Bhakna, Prithvi Singh, Udham Singh Kasel and Wasakha Singh, at times with about 100 strikers. Prithvi Singh fasted for four months, and Jyotish Chandra Pal lost his sanity after a month's fast. Eight Ghadarites died in the jail. Their protest forced the authorities to end some practices. The prisoners sang patriotic songs and recited Gurbani, and were released by 1921 or moved to mainland jails. Their suffering was called harder than death on the gallows.", "long", "resistance")
      ]
    }
  });
})();
