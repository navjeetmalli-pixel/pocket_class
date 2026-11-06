// Class 4 English (PSEB) practice bank, part 3: extra questions for chapters with gaps. Extra practice (unreviewed draft).
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
  StudyData.addPractice(4, "englishpb", {
    "synonyms-and-antonyms": {
      mcq: [
        M(1, "What is the use of synonyms in writing?", "They stop us repeating the same word", ["They make the story much longer", "They hide the meaning", "They replace all the full stops and commas"], "Synonyms help avoid repeating the same word.", "using-synonyms-in-writing"),
        M(2, "A good writer chooses a synonym that", "suits the sentence", ["is the longest one", "is the rarest one", "begins with a capital letter"], "The word must suit the sentence, not just have a similar meaning.", "using-synonyms-in-writing")
      ],
      written: [
        W(2, "Why should we not use just any word that has a similar meaning?", "Synonyms are used to avoid repeating the same word, as in \"The child was happy and delighted.\" But a good writer chooses the word that suits the sentence, so not every word with a similar meaning will fit.", "short", "using-synonyms-in-writing")
      ]
    }
  });
})();
