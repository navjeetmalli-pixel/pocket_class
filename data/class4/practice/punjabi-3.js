// Class 4 Punjabi practice bank, part 3: extra questions for chapters with gaps. Extra practice (unreviewed draft).
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
  StudyData.addPractice(4, "punjabi", {
    "visheshan": {
      mcq: [
        M(1, "'ਕਾਲਾ ਕੁੱਤਾ' ਵਿੱਚ 'ਕਾਲਾ' ਕਿਹੜਾ ਵਿਸ਼ੇਸ਼ਣ ਹੈ?", "ਰੰਗ ਦੱਸਣ ਵਾਲਾ", ["ਆਕਾਰ ਦੱਸਣ ਵਾਲਾ", "ਗੁਣ ਦੱਸਣ ਵਾਲਾ", "ਗਿਣਤੀ ਦੱਸਣ ਵਾਲਾ"], "ਕਾਲਾ ਰੰਗ ਦੱਸਦਾ ਹੈ।", "t12ona9j"),
        M(1, "'ਪੰਜ ਬੱਚੇ' ਵਿੱਚ 'ਪੰਜ' ਕਿਹੜਾ ਵਿਸ਼ੇਸ਼ਣ ਹੈ?", "ਗਿਣਤੀ ਦੱਸਣ ਵਾਲਾ", ["ਰੰਗ ਦੱਸਣ ਵਾਲਾ ਵਿਸ਼ੇਸ਼ਣ", "ਆਕਾਰ ਦੱਸਣ ਵਾਲਾ", "ਗੁਣ ਦੱਸਣ ਵਾਲਾ"], "ਪੰਜ ਗਿਣਤੀ ਦੱਸਦਾ ਹੈ।", "t12ona9j")
      ],
      written: [
        W(3, "ਵਿਸ਼ੇਸ਼ਣ ਦੀਆਂ ਚਾਰ ਕਿਸਮਾਂ ਉਦਾਹਰਨਾਂ ਸਮੇਤ ਲਿਖੋ।", "ਰੰਗ ਦੱਸਣ ਵਾਲਾ: ਚਿੱਟਾ ਬੱਦਲ। ਆਕਾਰ ਦੱਸਣ ਵਾਲਾ: ਲੰਮਾ ਰਸਤਾ। ਗੁਣ ਦੱਸਣ ਵਾਲਾ: ਸੋਹਣੀ ਕੁੜੀ। ਗਿਣਤੀ ਦੱਸਣ ਵਾਲਾ: ਤਿੰਨ ਕਿਤਾਬਾਂ।", "short", "t12ona9j")
      ]
    }
  });
})();
