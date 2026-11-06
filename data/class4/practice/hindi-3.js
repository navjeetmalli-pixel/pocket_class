// Class 4 Hindi practice bank, part 3: extra questions for chapters with gaps. Extra practice (unreviewed draft).
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
  StudyData.addPractice(4, "hindi", {
    "anek-shabdon-ke-liye-ek-shabd": {
      mcq: [
        M(1, "'अनेक शब्दों के लिए एक शब्द' याद करने का एक अच्छा तरीका कौन-सा है?", "हर शब्द के साथ एक छोटा वाक्य बनाना", ["शब्द को देखकर छोड़ देना", "केवल पहला अक्षर याद करना", "शब्द को कभी न बोलना"], "हर शब्द के साथ छोटा वाक्य बनाकर अभ्यास करना चाहिए।", "tsgnecm"),
        M(1, "शब्द को याद करने के लिए पहले क्या करना चाहिए?", "उसे बोलना", ["उसे मिटाना", "उसका अर्थ बदलना", "उसे छिपाना"], "पहले बोलकर और फिर लिखकर शब्द को याद करना चाहिए।", "tsgnecm")
      ],
      written: [
        W(2, "एक वाक्यांश के लिए एक शब्द याद करने के दो तरीके लिखो। उदाहरण भी दो।", "हर शब्द के साथ एक छोटा वाक्य बनाकर अभ्यास करें, जैसे – 'जो जल में रहे, वह जलचर है।' शब्द को पहले बोलकर और फिर लिखकर याद करें।", "short", "tsgnecm")
      ]
    },
    "veena-hamara-aahar": {
      mcq: [
        M(1, "भोजन में क्या शामिल करना चाहिए?", "सलाद", ["केवल मिठाई", "केवल तले पकवान", "ठंडे पेय"], "पानी का खूब उपयोग करना चाहिए और भोजन में सलाद शामिल करना चाहिए।", "t4k2k4j"),
        M(1, "ज़्यादा खाने का क्या नतीजा बताया गया है?", "पछताना पड़ता है", ["ताकत बढ़ती है", "नींद अच्छी आती है", "भूख बंद हो जाती है"], "पेट से ज़्यादा खाने पर पछताना पड़ता है।", "t4k2k4j"),
        M(1, "खाने के साथ और क्या करने की सलाह दी गई है?", "व्यायाम", ["सोना", "टीवी देखना", "दौड़ से बचना"], "खाना ढंग से खाएँ और व्यायाम भी करें।", "t4k2k4j")
      ],
      written: [
        W(3, "अच्छे ढंग से खाने के लिए इस पाठ में क्या सलाह दी गई है? चार बातें लिखो।", "पानी का खूब उपयोग करें और भोजन में सलाद शामिल करें। पेट से ज़्यादा न खाएँ, वरना पछताना पड़ता है। ताज़ा खाना खाएँ और बहाने न बनाएँ। खाना ढंग से खाएँ और व्यायाम भी करें।", "short", "t4k2k4j")
      ]
    }
  });
})();
