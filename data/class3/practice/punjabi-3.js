// Class 3 Punjabi practice bank, part 3: extra questions for chapters with gaps. Extra practice (unreviewed draft).
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
  StudyData.addPractice(3, "punjabi", {
    "ling": {
      mcq: [
        M(1, "'ਸ਼ੇਰ' ਦਾ ਇਸਤਰੀ ਲਿੰਗ ਕੀ ਹੈ?", "ਸ਼ੇਰਨੀ", ["ਸ਼ੇਰੀ", "ਸ਼ੇਰਾ", "ਸ਼ੇਰਾਂ"], "ਸ਼ੇਰ ਦੇ ਅੰਤ ਵਿੱਚ ਨੀ ਲਾ ਕੇ ਸ਼ੇਰਨੀ ਬਣਦਾ ਹੈ।", "tw2fkxf"),
        M(1, "'ਚਾਚਾ' ਸ਼ਬਦ ਦਾ ਇਸਤਰੀ ਲਿੰਗ ਰੂਪ ਕਿਹੜਾ ਹੈ?", "ਚਾਚੀ", ["ਚਾਚਣ", "ਚਾਚਾਂ", "ਚਾਚੇ"], "ਚਾਚਾ – ਚਾਚੀ ਲਿੰਗ ਬਦਲਣ ਦੀ ਉਦਾਹਰਨ ਹੈ।", "tw2fkxf"),
        M(2, "ਕਿਹੜੇ ਜੋੜੇ ਵਿੱਚ ਸ਼ਬਦ ਹੀ ਬਦਲ ਜਾਂਦਾ ਹੈ?", "ਮੁੰਡਾ – ਕੁੜੀ", ["ਘੋੜਾ – ਘੋੜੀ", "ਬੱਕਰਾ – ਬੱਕਰੀ", "ਮਾਮਾ – ਮਾਮੀ"], "ਮੁੰਡਾ ਤੋਂ ਕੁੜੀ ਬਣਨ ਵਿੱਚ ਪੂਰਾ ਸ਼ਬਦ ਬਦਲ ਜਾਂਦਾ ਹੈ।", "tw2fkxf")
      ],
      written: [
        W(2, "ਲਿੰਗ ਬਦਲਣ ਦੇ ਤਰੀਕੇ ਉਦਾਹਰਨਾਂ ਸਮੇਤ ਲਿਖੋ।", "ਕਈ ਨਾਂਵਾਂ ਦੇ ਅੰਤ ਵਿੱਚ ਈ ਜਾਂ ਨੀ ਲਾ ਕੇ ਇਸਤਰੀ ਲਿੰਗ ਬਣਦਾ ਹੈ: ਘੋੜਾ – ਘੋੜੀ, ਸ਼ੇਰ – ਸ਼ੇਰਨੀ, ਮਾਮਾ – ਮਾਮੀ। ਕਈ ਵਾਰ ਸ਼ਬਦ ਹੀ ਬਦਲ ਜਾਂਦਾ ਹੈ, ਜਿਵੇਂ ਮੁੰਡਾ – ਕੁੜੀ।", "short", "tw2fkxf")
      ]
    }
  });
})();
