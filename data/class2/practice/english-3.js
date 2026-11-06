// Class 2 English practice bank, part 3: extra questions for chapters with gaps. Extra practice (unreviewed draft).
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
  StudyData.addPractice(2, "english", {
    "describing-words": {
      mcq: [
        M(1, "In \"a red ball\", which word describes the ball?", "red", ["a", "ball", "in"], "The word red tells us what the ball looks like.", "describing-things"),
        M(1, "In \"a tall tree\", which word is the describing word?", "tall", ["tree", "a", "the"], "Tall describes the tree.", "describing-things")
      ],
      written: [
        W(2, "Write one describing word in each: \"a ___ ball\" and \"a ___ tree\".", "For example: a red ball and a tall tree. The words red and tall describe the ball and the tree.", "short", "describing-things")
      ]
    },
    "picture-reading-out-out": {
      mcq: [
        M(1, "What can we make a toy from?", "Things around us", ["Only new things from a shop", "Only things from far away", "Nothing at all"], "The lesson says we can make a toy from things around us.", "lesson-to-learn"),
        M(1, "What can we do with old things?", "Use them again", ["Break them", "Hide them in a box", "Forget them"], "Old things can be used again.", "lesson-to-learn")
      ],
      written: [
        W(2, "What lesson do we learn from the picture reading? Write two lines.", "We can make a toy from things around us. Old things can be used again, and playing together is fun.", "short", "lesson-to-learn")
      ]
    },
    "between-home-and-school": {
      mcq: [
        M(1, "What should you draw on this page?", "The route from home to school", ["A route from school to the market", "Your school bag", "A big mountain"], "The activity asks you to draw the route from your home to your school.", "doing"),
        M(1, "What do you paste on a chart?", "Pictures of vehicles", ["Leaves", "Stamps", "Coins and notes"], "You collect pictures of vehicles and paste them on a chart.", "doing")
      ],
      written: [
        W(2, "Write two things you can do for this lesson.", "Draw the route from my home to my school. Collect pictures of vehicles and paste them on a chart.", "short", "doing")
      ]
    }
  });
})();
