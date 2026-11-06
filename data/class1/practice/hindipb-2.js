// Class 1 Hindi (PSEB) practice bank, part 2: extra questions for chapters with gaps. Extra practice (unreviewed draft).
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
  StudyData.addPractice(1, "hindipb", {
    "swar": {
      mcq: [
        M(1, "निम्नलिखित वर्णों में से स्वर कौन-सा है?", "ई", ["ट", "ब", "ल"], "अ, आ, इ, ई जैसे अक्षर स्वर हैं।", "t1tedv4r"),
        M(1, "स्वर के साथ और कौन-से दो चिह्न लिखे जाते हैं?", "अं और अः", ["क और ख की मात्राएँ", "ा और ि", "ग और घ"], "स्वरों के साथ अं और अः भी लिखे जाते हैं।", "t1tedv4r")
      ],
      written: [
        W(2, "स्वर क्या हैं? दो स्वर लिखो।", "जिन अक्षरों को बोलने के लिए किसी दूसरे अक्षर की ज़रूरत नहीं होती, वे स्वर हैं। जैसे – अ, आ।", "short", "t1tedv4r")
      ]
    },
    "i-ee-ki-matra": {
      mcq: [
        M(1, "'दिन' के पहले अक्षर पर कौन-सी मात्रा लगी है?", "इ की मात्रा (ि)", ["ई की मात्रा (ी)", "उ की मात्रा (ु)", "आ की मात्रा (ा)"], "'दि' में छोटी इ की मात्रा (ि) है।", "tzsaa8c"),
        M(1, "'नीम' शब्द में कौन-सी मात्रा है?", "ई की मात्रा (ी)", ["इ की मात्रा (ि)", "ऊ की मात्रा (ू)", "ओ की मात्रा (ो)"], "'नी' में लंबी ई की मात्रा (ी) है।", "tzsaa8c")
      ],
      written: [
        W(2, "'किताब' और 'पीला' में कौन-सी मात्राएँ हैं? बताओ।", "'किताब' में इ की मात्रा (ि) है, जो बोलने में छोटी होती है। 'पीला' में ई की मात्रा (ी) है, जो बोलने में लंबी होती है।", "short", "tzsaa8c")
      ]
    },
    "u-oo-ki-matra": {
      mcq: [
        M(1, "'सूरज' शब्द में कौन-सी मात्रा है?", "ऊ की मात्रा (ू)", ["उ की मात्रा (ु)", "इ की मात्रा (ि)", "ई की मात्रा (ी)"], "'सू' में लंबी ऊ की मात्रा (ू) है।", "t1ygoayc"),
        M(1, "छोटी मात्रा वाला शब्द कौन-सा है?", "गुलाब", ["चूहा", "फूल", "सूरज उगा"], "'गुलाब' में छोटी उ की मात्रा (ु) है, बाकी शब्दों में ऊ की मात्रा (ू) है।", "t1ygoayc")
      ],
      written: [
        W(2, "'चुप' और 'चूहा' में मात्रा का क्या अंतर है?", "'चुप' में उ की मात्रा (ु) है, जो बोलने में छोटी होती है। 'चूहा' में ऊ की मात्रा (ू) है, जो बोलने में लंबी होती है।", "short", "t1ygoayc")
      ]
    }
  });
})();
