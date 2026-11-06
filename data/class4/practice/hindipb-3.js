// Class 4 Hindi (PSEB) practice bank, part 3: extra questions for chapters with gaps. Extra practice (unreviewed draft).
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
  StudyData.addPractice(4, "hindipb", {
    "anek-shabdon-ke-liye-ek-shabd": {
      mcq: [
        M(1, "'जो जल में रहे' इन शब्दों के लिए एक शब्द क्या है?", "जलचर", ["थलचर", "नभचर", "शाकाहारी"], "जो जल में रहे, वह जलचर कहलाता है।", "tsgnecm"),
        M(1, "इन शब्दों का अभ्यास करने के लिए क्या करना चाहिए?", "हर शब्द से एक छोटा वाक्य बनाना", ["शब्दों को केवल देखना", "सारे शब्द एक साथ मिटाना", "केवल चित्र बनाना"], "वाक्य बनाने से शब्द पक्के होते हैं।", "tsgnecm")
      ],
      written: [
        W(2, "शब्द को पक्का याद करने का सही क्रम क्या है?", "पहले हर शब्द के साथ एक छोटा वाक्य बनाकर अभ्यास करें, जैसे – 'जो जल में रहे, वह जलचर है।' फिर शब्द को पहले बोलें और उसके बाद लिखकर याद करें।", "short", "tsgnecm")
      ]
    },
    "aa-ki-matra": {
      mcq: [
        M(1, "इनमें से किस शब्द में आ की मात्रा (ा) है?", "माला", ["किला", "चूहा", "पेड़"], "'माला' में म के साथ आ की मात्रा है।", "t1x3g6q3"),
        M(1, "'कर' से 'कार' बनने पर क्या परिवर्तन होता है?", "कार में आ की मात्रा है", ["कर में आ की मात्रा है", "दोनों में ई की मात्रा है", "दोनों एक ही हैं"], "कर में मात्रा नहीं है, कार में आ की मात्रा (ा) लगी है।", "t1x3g6q3")
      ],
      written: [
        W(2, "आ की मात्रा वाले चार शब्द लिखो और 'थल' तथा 'थाल' का अंतर बताओ।", "आ की मात्रा वाले शब्द – माला, कान, ताला, कार। 'थल' में आ की मात्रा नहीं है, 'थाल' में है।", "short", "t1x3g6q3")
      ]
    }
  });
})();
