// Class 1 Hindi practice bank, part 3: extra questions for chapters with gaps. Extra practice (unreviewed draft).
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
  StudyData.addPractice(1, "hindi", {
    "swar": {
      mcq: [
        M(1, "इनमें से कौन-सा अक्षर स्वर है?", "आ", ["क", "म", "प"], "अ, आ, इ, ई जैसे अक्षर स्वर कहलाते हैं।", "t1tedv4r"),
        M(1, "स्वर की सही परिभाषा कौन-सी है?", "जो अक्षर अपने आप बोले जाते हैं", ["जो अक्षर दूसरों के सहारे बोले जाते हैं", "जो अक्षर केवल लिखे जाते हैं", "जो अक्षर केवल गिने जाते हैं"], "स्वर को बोलने के लिए किसी दूसरे अक्षर की ज़रूरत नहीं होती।", "t1tedv4r")
      ],
      written: [
        W(2, "कोई चार स्वर लिखो।", "अ, आ, इ, ई (या उ, ऊ, ए, ऐ में से कोई चार)।", "short", "t1tedv4r")
      ]
    },
    "i-ee-ki-matra": {
      mcq: [
        M(1, "'किताब' शब्द में किसकी मात्रा है?", "इ की मात्रा (ि)", ["ई की मात्रा (ी)", "उ की मात्रा (ु)", "ऊ की मात्रा (ू)"], "'कि' में इ की मात्रा (ि) है।", "tzsaa8c"),
        M(1, "बोलने में लंबी मात्रा कौन-सी है?", "ई की मात्रा (ी)", ["इ की मात्रा (ि)", "उ की मात्रा (ु)", "ए की मात्रा (े)"], "इ की मात्रा छोटी और ई की मात्रा लंबी होती है।", "tzsaa8c")
      ],
      written: [
        W(2, "इ और ई की मात्रा में क्या अंतर है? एक शब्द के उदाहरण से बताओ।", "इ की मात्रा (ि) छोटी होती है और व्यंजन के बाईं ओर लगती है, जैसे 'दिन'। ई की मात्रा (ी) लंबी होती है और व्यंजन के दाईं ओर लगती है, जैसे 'नीम'।", "short", "tzsaa8c")
      ]
    },
    "u-oo-ki-matra": {
      mcq: [
        M(1, "'फूल' शब्द में कौन-सी मात्रा है?", "ऊ की मात्रा (ू)", ["उ की मात्रा (ु)", "इ की मात्रा (ि)", "ई की मात्रा (ी)"], "'फू' में ऊ की मात्रा (ू) है, जो बोलने में लंबी होती है।", "t1ygoayc"),
        M(1, "'चुप' शब्द में कौन-सी मात्रा है?", "उ की मात्रा (ु)", ["ऊ की मात्रा (ू)", "आ की मात्रा (ा)", "ए की मात्रा (े)"], "'चु' में उ की मात्रा (ु) है, जो छोटी होती है।", "t1ygoayc")
      ],
      written: [
        W(2, "उ और ऊ की मात्रा में क्या अंतर है? एक शब्द के उदाहरण से बताओ।", "उ की मात्रा (ु) बोलने में छोटी होती है, जैसे 'चुप'। ऊ की मात्रा (ू) बोलने में लंबी होती है, जैसे 'चूहा'। दोनों व्यंजन के नीचे लगती हैं।", "short", "t1ygoayc")
      ]
    }
  });
})();
