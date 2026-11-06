// Class 4 English practice bank, part 3: extra questions for chapters with gaps. Extra practice (unreviewed draft).
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
  StudyData.addPractice(4, "english", {
    "synonyms-and-antonyms": {
      mcq: [
        M(1, "Why do good writers use synonyms?", "To avoid repeating the same word", ["To make the sentences much shorter", "To change the story", "To avoid using full stops"], "Synonyms help us avoid repeating the same word.", "using-synonyms-in-writing"),
        M(2, "What should a good writer check when choosing a synonym?", "That it suits the sentence", ["That it is a very long word", "That it starts with the same letter", "That it rhymes with the first word"], "Choose words that suit the sentence, not just any word with a similar meaning.", "using-synonyms-in-writing")
      ],
      written: [
        W(2, "How can synonyms improve your writing? Give the example from the notes.", "Synonyms help us avoid repeating the same word. For example: \"The child was happy and delighted.\" A good writer picks a word that suits the sentence, not just any word with a similar meaning.", "short", "using-synonyms-in-writing")
      ]
    },
    "together-we-can": {
      mcq: [
        M(1, "Who are the two friends who talk in this chapter?", "Bokali and Darsana", ["Mithu and Tara the parrot", "Ravi and Neha", "Anu and Bholu"], "Bokali and Darsana talk about the foods, festivals and languages of our country.", "speaking-and-doing"),
        M(1, "What do the two friends say about the people of our country?", "We differ in many ways but still stand in unity", ["Everyone eats exactly the same food", "All people speak one language", "Festivals are the same everywhere"], "They talk about different foods, festivals and languages and how we still stand in unity.", "speaking-and-doing"),
        M(1, "How should children behave when talking to a partner in the activity?", "Take turns politely", ["Talk at the same time", "Speak without listening", "Stay silent"], "Children talk about their favourite food and festival, taking turns politely.", "speaking-and-doing"),
        M(2, "What does the row of paper people holding hands show?", "Togetherness", ["A race", "A lonely person", "A fight"], "The cut-out row of people is a symbol of togetherness.", "speaking-and-doing")
      ],
      written: [
        W(3, "Describe the paper-folding activity and say what it stands for.", "Children fold a sheet of paper, draw one side of a person and cut it out. When the paper is opened, there is a row of people holding hands. It is a symbol of togetherness.", "short", "speaking-and-doing")
      ]
    }
  });
})();
