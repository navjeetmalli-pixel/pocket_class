// Punjabi: Practice by topic (Level 0 up to Class 12). See CONTENT_GUIDE.md and the path format notes.
// Reuses the data/classN/punjabi.js chapters; no board split is needed (the same chapters serve every student).
(function () {
  const P = (cls, chapter) => ({ cls, subject: "punjabi", chapter });
  const PS = (cls, ids) => ids.map((i) => P(cls, i));
  const lv = (id, level, title, goal, from, extra) => Object.assign({ id, level, title, goal, from }, extra || {});
  const Q = (q, options, answer, explain) => ({ q, options, answer, explain });

  // ---------- Own chapters (Level 0) ----------

  const firstLetters = {
    section: "ਅੱਖਰ",
    summary: "ਪੰਜਾਬੀ ਦੇ ਪਹਿਲੇ ਅੱਖਰ ੳ ਅ ੲ ਹਨ। ਹਰ ਅੱਖਰ ਨਾਲ ਇੱਕ ਚੀਜ਼ ਯਾਦ ਕਰੋ, ਜਿਵੇਂ ੳ ਤੋਂ ਊਠ।",
    notes: [
      { heading: "ਪਹਿਲੇ ਤਿੰਨ ਅੱਖਰ", points: ["**ੳ** – ਊਠ 🐪", "**ਅ** – ਅੰਬ 🥭", "**ੲ** – ਇੱਟ 🧱"] },
      { heading: "ਹੋਰ ਅੱਖਰ", points: ["**ਸ** – ਸੇਬ 🍎", "**ਹ** – ਹਾਥੀ 🐘", "**ਕ** – ਕਮਲ 🪷", "**ਖ** – ਖਰਗੋਸ਼ 🐰", "**ਗ** – ਗਾਂ 🐄", "**ਚ** – ਚਿੜੀ 🐦"] },
      { heading: "ਹੋਰ ਅੱਖਰ", points: ["**ਪ** – ਪਤੰਗ 🪁", "**ਬ** – ਬੱਤਖ 🦆", "**ਮ** – ਮੱਛੀ 🐟", "**ਰ** – ਰੇਲ 🚆"] }
    ],
    terms: [
      { term: "ਅੱਖਰ", meaning: "ਲਿਖਣ ਵਾਲਾ ਇੱਕ ਚਿੰਨ੍ਹ, ਜਿਵੇਂ ੳ।" },
      { term: "ਊੜਾ", meaning: "ਪਹਿਲਾ ਅੱਖਰ ੳ।" },
      { term: "ਐੜਾ", meaning: "ਦੂਜਾ ਅੱਖਰ ਅ।" },
      { term: "ਈੜੀ", meaning: "ਤੀਜਾ ਅੱਖਰ ੲ।" }
    ],
    qa: [
      { q: "ੳ ਤੋਂ ਕਿਹੜਾ ਜਾਨਵਰ?", a: "ੳ ਤੋਂ **ਊਠ**।" },
      { q: "ਅ ਤੋਂ ਕਿਹੜਾ ਫਲ?", a: "ਅ ਤੋਂ **ਅੰਬ**।" }
    ],
    quiz: [
      Q("ਊਠ 🐪 ਕਿਹੜੇ ਅੱਖਰ ਤੋਂ ਸ਼ੁਰੂ ਹੁੰਦਾ ਹੈ?", ["ੳ", "ਅ", "ੲ", "ਸ"], 0, "ਊਠ ਦਾ ਪਹਿਲਾ ਅੱਖਰ ੳ ਹੈ।"),
      Q("ਅੰਬ 🥭 ਕਿਹੜੇ ਅੱਖਰ ਤੋਂ ਸ਼ੁਰੂ ਹੁੰਦਾ ਹੈ?", ["ੳ", "ਅ", "ਹ", "ਕ"], 1, "ਅੰਬ ਅ ਤੋਂ ਸ਼ੁਰੂ ਹੁੰਦਾ ਹੈ।"),
      Q("ਸੇਬ 🍎 ਕਿਹੜੇ ਅੱਖਰ ਤੋਂ ਸ਼ੁਰੂ ਹੁੰਦਾ ਹੈ?", ["ਹ", "ਕ", "ਸ", "ਗ"], 2, "ਸੇਬ ਸ ਤੋਂ ਸ਼ੁਰੂ ਹੁੰਦਾ ਹੈ।"),
      Q("ਹਾਥੀ 🐘 ਕਿਹੜੇ ਅੱਖਰ ਤੋਂ ਸ਼ੁਰੂ ਹੁੰਦਾ ਹੈ?", ["ਸ", "ਗ", "ਮ", "ਹ"], 3, "ਹਾਥੀ ਹ ਤੋਂ ਸ਼ੁਰੂ ਹੁੰਦਾ ਹੈ।"),
      Q("ਕਮਲ 🪷 ਕਿਹੜੇ ਅੱਖਰ ਤੋਂ ਸ਼ੁਰੂ ਹੁੰਦਾ ਹੈ?", ["ਕ", "ਖ", "ਗ", "ਚ"], 0, "ਕਮਲ ਕ ਤੋਂ ਸ਼ੁਰੂ ਹੁੰਦਾ ਹੈ।"),
      Q("ਗਾਂ 🐄 ਕਿਹੜੇ ਅੱਖਰ ਤੋਂ ਸ਼ੁਰੂ ਹੁੰਦੀ ਹੈ?", ["ਕ", "ਗ", "ਚ", "ਪ"], 1, "ਗਾਂ ਗ ਤੋਂ ਸ਼ੁਰੂ ਹੁੰਦੀ ਹੈ।"),
      Q("ਚਿੜੀ 🐦 ਕਿਹੜੇ ਅੱਖਰ ਤੋਂ ਸ਼ੁਰੂ ਹੁੰਦੀ ਹੈ?", ["ਪ", "ਬ", "ਚ", "ਰ"], 2, "ਚਿੜੀ ਚ ਤੋਂ ਸ਼ੁਰੂ ਹੁੰਦੀ ਹੈ।"),
      Q("ਪਤੰਗ 🪁 ਕਿਹੜੇ ਅੱਖਰ ਤੋਂ ਸ਼ੁਰੂ ਹੁੰਦਾ ਹੈ?", ["ਪ", "ਬ", "ਮ", "ਰ"], 0, "ਪਤੰਗ ਪ ਤੋਂ ਸ਼ੁਰੂ ਹੁੰਦਾ ਹੈ।"),
      Q("ਮੱਛੀ 🐟 ਕਿਹੜੇ ਅੱਖਰ ਤੋਂ ਸ਼ੁਰੂ ਹੁੰਦੀ ਹੈ?", ["ਰ", "ਮ", "ਬ", "ਹ"], 1, "ਮੱਛੀ ਮ ਤੋਂ ਸ਼ੁਰੂ ਹੁੰਦੀ ਹੈ।"),
      Q("ਰੇਲ 🚆 ਕਿਹੜੇ ਅੱਖਰ ਤੋਂ ਸ਼ੁਰੂ ਹੁੰਦੀ ਹੈ?", ["ਮ", "ਪ", "ਰ", "ਸ"], 2, "ਰੇਲ ਰ ਤੋਂ ਸ਼ੁਰੂ ਹੁੰਦੀ ਹੈ।"),
      Q("ਪੈਂਤੀ ਦਾ ਪਹਿਲਾ ਅੱਖਰ ਕਿਹੜਾ ਹੈ?", ["ਅ", "ਸ", "ੲ", "ੳ"], 3, "ਪਹਿਲਾ ਅੱਖਰ ੳ (ਊੜਾ) ਹੈ।"),
      Q("ਬੱਤਖ 🦆 ਕਿਹੜੇ ਅੱਖਰ ਤੋਂ ਸ਼ੁਰੂ ਹੁੰਦੀ ਹੈ?", ["ਬ", "ਪ", "ਮ", "ਚ"], 0, "ਬੱਤਖ ਬ ਤੋਂ ਸ਼ੁਰੂ ਹੁੰਦੀ ਹੈ।"),
      Q("ਖਰਗੋਸ਼ 🐰 ਕਿਹੜੇ ਅੱਖਰ ਤੋਂ ਸ਼ੁਰੂ ਹੁੰਦਾ ਹੈ?", ["ਗ", "ਕ", "ਖ", "ਹ"], 2, "ਖਰਗੋਸ਼ ਖ ਤੋਂ ਸ਼ੁਰੂ ਹੁੰਦਾ ਹੈ।")
    ]
  };

  const muktaWords = {
    section: "ਸ਼ਬਦ",
    summary: "ਜਿਨ੍ਹਾਂ ਸ਼ਬਦਾਂ ਵਿੱਚ ਕੋਈ ਲਗ ਜਾਂ ਮਾਤਰਾ ਨਹੀਂ ਹੁੰਦੀ, ਉਹ ਮੁਕਤਾ ਸ਼ਬਦ ਹਨ, ਜਿਵੇਂ ਘਰ, ਜਲ, ਕਮਲ।",
    notes: [
      { heading: "ਦੋ ਅੱਖਰਾਂ ਵਾਲੇ ਸ਼ਬਦ", points: ["**ਘਰ** 🏠", "**ਜਲ** 💧 (ਪਾਣੀ)", "**ਨਲ** 🚰", "**ਫਲ** 🍎"] },
      { heading: "ਤਿੰਨ ਅੱਖਰਾਂ ਵਾਲੇ ਸ਼ਬਦ", points: ["**ਕਮਲ** 🪷", "**ਕਲਮ** ✏️", "**ਬਟਨ** 🔘"] },
      { heading: "ਮੁਕਤਾ ਕਿਵੇਂ ਪਛਾਣੀਏ", points: ["ਇਨ੍ਹਾਂ ਸ਼ਬਦਾਂ ਵਿੱਚ ਅੱਖਰਾਂ ਨਾਲ ਕੋਈ ਮਾਤਰਾ ਨਹੀਂ ਲੱਗੀ ਹੁੰਦੀ।", "ਸ਼ਬਦ ਪੜ੍ਹਦੇ ਹੋਏ ਹਰ ਅੱਖਰ ਨੂੰ ਇੱਕ-ਇੱਕ ਕਰਕੇ ਬੋਲੋ।"] }
    ],
    terms: [
      { term: "ਮੁਕਤਾ", meaning: "ਬਿਨਾਂ ਲਗ-ਮਾਤਰਾ ਵਾਲੇ ਸ਼ਬਦ, ਜਿਵੇਂ ਘਰ।" },
      { term: "ਸ਼ਬਦ", meaning: "ਅੱਖਰਾਂ ਨੂੰ ਜੋੜ ਕੇ ਬਣਿਆ ਬੋਲ।" },
      { term: "ਜਲ", meaning: "ਪਾਣੀ ਨੂੰ ਜਲ ਵੀ ਕਹਿੰਦੇ ਹਨ।" },
      { term: "ਕਲਮ", meaning: "ਲਿਖਣ ਵਾਲੀ ਚੀਜ਼।" }
    ],
    qa: [
      { q: "ਮੁਕਤਾ ਸ਼ਬਦ ਕੀ ਹੁੰਦਾ ਹੈ?", a: "ਜਿਸ ਵਿੱਚ ਕੋਈ **ਲਗ ਜਾਂ ਮਾਤਰਾ ਨਾ ਹੋਵੇ**।" },
      { q: "ਇੱਕ ਮੁਕਤਾ ਸ਼ਬਦ ਦੱਸੋ।", a: "ਘਰ, ਜਲ ਜਾਂ ਕਮਲ।" }
    ],
    quiz: [
      Q("ਕਿਹੜਾ ਸ਼ਬਦ ਮੁਕਤਾ ਹੈ?", ["ਘਰ", "ਗਾਂ", "ਚਿੜੀ", "ਊਠ"], 0, "ਘਰ ਵਿੱਚ ਕੋਈ ਮਾਤਰਾ ਨਹੀਂ।"),
      Q("ਘਰ ਵਿੱਚ ਕਿੰਨੇ ਅੱਖਰ ਹਨ?", ["1", "2", "3", "4"], 1, "ਘ ਅਤੇ ਰ, ਯਾਨੀ ਦੋ ਅੱਖਰ।"),
      Q("ਪਾਣੀ ਨੂੰ ਹੋਰ ਕੀ ਕਹਿੰਦੇ ਹਨ?", ["ਫਲ", "ਘਰ", "ਜਲ", "ਕਲਮ"], 2, "ਪਾਣੀ ਨੂੰ ਜਲ ਵੀ ਕਹਿੰਦੇ ਹਨ।"),
      Q("ਕਿਹੜਾ ਸ਼ਬਦ ਮੁਕਤਾ ਨਹੀਂ ਹੈ?", ["ਕਮਲ", "ਫਲ", "ਜਲ", "ਗਾਂ"], 3, "ਗਾਂ ਵਿੱਚ ਕੰਨਾ ਅਤੇ ਬਿੰਦੀ ਹਨ।"),
      Q("ਖਾਣ ਵਾਲੀ ਚੀਜ਼ ਕਿਹੜੀ ਹੈ?", ["ਫਲ", "ਨਲ", "ਕਲਮ", "ਬਟਨ"], 0, "ਫਲ ਖਾਧਾ ਜਾਂਦਾ ਹੈ।"),
      Q("ਤਿੰਨ ਅੱਖਰਾਂ ਵਾਲਾ ਮੁਕਤਾ ਸ਼ਬਦ ਕਿਹੜਾ ਹੈ?", ["ਘਰ", "ਕਮਲ", "ਜਲ", "ਨਲ"], 1, "ਕਮਲ ਵਿੱਚ ਕ, ਮ, ਲ ਤਿੰਨ ਅੱਖਰ ਹਨ।"),
      Q("ਲਿਖਣ ਲਈ ਕਿਸ ਦੀ ਲੋੜ ਹੈ?", ["ਨਲ", "ਘਰ", "ਕਲਮ", "ਜਲ"], 2, "ਅਸੀਂ ਕਲਮ ਨਾਲ ਲਿਖਦੇ ਹਾਂ।"),
      Q("ਪਾਣੀ ਦੀ ਟੂਟੀ 🚰 ਨੂੰ ਕੀ ਕਹਿੰਦੇ ਹਨ?", ["ਫਲ", "ਕਮਲ", "ਬਟਨ", "ਨਲ"], 3, "ਪਾਣੀ ਵਾਲੀ ਟੂਟੀ ਨੂੰ ਨਲ ਕਹਿੰਦੇ ਹਨ।"),
      Q("ਅਸੀਂ ਕਿੱਥੇ ਰਹਿੰਦੇ ਹਾਂ?", ["ਘਰ", "ਜਲ", "ਫਲ", "ਕਲਮ"], 0, "ਅਸੀਂ ਘਰ ਵਿੱਚ ਰਹਿੰਦੇ ਹਾਂ।"),
      Q("ਕਿਹੜਾ ਸ਼ਬਦ ਮੁਕਤਾ ਹੈ?", ["ਬੱਤਖ", "ਬਟਨ", "ਬਾਲ", "ਬੋਲ"], 1, "ਬਟਨ ਵਿੱਚ ਕੋਈ ਲਗ-ਮਾਤਰਾ ਨਹੀਂ।"),
      Q("ਪਾਣੀ ਵਿੱਚ ਕਿਹੜਾ ਫੁੱਲ 🪷 ਖਿੜਦਾ ਹੈ?", ["ਘਰ", "ਫਲ", "ਕਮਲ", "ਨਲ"], 2, "ਕਮਲ ਦਾ ਫੁੱਲ ਪਾਣੀ ਵਿੱਚ ਖਿੜਦਾ ਹੈ।"),
      Q("ਜਲ ਸ਼ਬਦ ਵਿੱਚ ਪਹਿਲਾ ਅੱਖਰ ਕਿਹੜਾ ਹੈ?", ["ਲ", "ਘ", "ਨ", "ਜ"], 3, "ਜਲ ਦਾ ਪਹਿਲਾ ਅੱਖਰ ਜ ਹੈ।")
    ]
  };

  const familyColours = {
    section: "ਸ਼ਬਦ",
    summary: "ਆਪਣੇ ਪਰਿਵਾਰ ਦੇ ਮੈਂਬਰਾਂ ਦੇ ਨਾਂ ਅਤੇ ਛੇ ਰੰਗਾਂ ਦੇ ਨਾਂ ਸਿੱਖੋ।",
    notes: [
      { heading: "ਮੇਰਾ ਪਰਿਵਾਰ", points: ["**ਮਾਂ** 👩", "**ਪਿਤਾ ਜੀ** 👨", "**ਦਾਦਾ ਜੀ** 👴", "**ਦਾਦੀ ਜੀ** 👵", "**ਭਰਾ** 👦", "**ਭੈਣ** 👧"] },
      { heading: "ਰੰਗ", points: ["**ਲਾਲ** 🔴", "**ਪੀਲਾ** 🟡", "**ਹਰਾ** 🟢", "**ਨੀਲਾ** 🔵", "**ਕਾਲਾ** ⚫", "**ਚਿੱਟਾ** ⚪"] },
      { heading: "ਚੀਜ਼ਾਂ ਦੇ ਰੰਗ", points: ["ਪੱਤੇ ਹਰੇ ਹੁੰਦੇ ਹਨ।", "ਦੁੱਧ ਚਿੱਟਾ ਹੁੰਦਾ ਹੈ।", "ਕੇਲਾ ਪੀਲਾ ਹੁੰਦਾ ਹੈ।"] }
    ],
    terms: [
      { term: "ਪਰਿਵਾਰ", meaning: "ਇੱਕ ਘਰ ਵਿੱਚ ਰਹਿਣ ਵਾਲੇ ਆਪਣੇ ਲੋਕ।" },
      { term: "ਰੰਗ", meaning: "ਲਾਲ, ਪੀਲਾ, ਹਰਾ ਆਦਿ ਚੀਜ਼ਾਂ ਦੇ ਰੰਗ ਹੁੰਦੇ ਹਨ।" },
      { term: "ਦਾਦਾ ਜੀ", meaning: "ਪਿਤਾ ਜੀ ਦੇ ਪਿਤਾ ਜੀ।" },
      { term: "ਦਾਦੀ ਜੀ", meaning: "ਪਿਤਾ ਜੀ ਦੀ ਮਾਂ।" }
    ],
    qa: [
      { q: "ਦੁੱਧ ਦਾ ਰੰਗ ਕਿਹੜਾ ਹੈ?", a: "ਦੁੱਧ **ਚਿੱਟਾ** ਹੁੰਦਾ ਹੈ।" },
      { q: "ਮੇਰੇ ਮਾਪਿਆਂ ਦੀ ਧੀ ਮੇਰੀ ਕੌਣ ਹੈ?", a: "ਮੇਰੀ **ਭੈਣ**।" }
    ],
    quiz: [
      Q("ਦੁੱਧ ਦਾ ਰੰਗ ਕਿਹੜਾ ਹੈ?", ["ਚਿੱਟਾ", "ਕਾਲਾ", "ਹਰਾ", "ਲਾਲ"], 0, "ਦੁੱਧ ਚਿੱਟਾ ਹੁੰਦਾ ਹੈ।"),
      Q("ਪੱਤਿਆਂ ਦਾ ਰੰਗ ਕਿਹੜਾ ਹੈ?", ["ਲਾਲ", "ਹਰਾ", "ਕਾਲਾ", "ਨੀਲਾ"], 1, "ਪੱਤੇ ਹਰੇ ਹੁੰਦੇ ਹਨ।"),
      Q("ਦਿਨ ਵੇਲੇ ਅਸਮਾਨ ਦਾ ਰੰਗ ਕਿਹੜਾ ਹੁੰਦਾ ਹੈ?", ["ਕਾਲਾ", "ਪੀਲਾ", "ਨੀਲਾ", "ਹਰਾ"], 2, "ਸਾਫ਼ ਅਸਮਾਨ ਨੀਲਾ ਹੁੰਦਾ ਹੈ।"),
      Q("ਕੇਲੇ 🍌 ਦਾ ਰੰਗ ਕਿਹੜਾ ਹੈ?", ["ਨੀਲਾ", "ਕਾਲਾ", "ਲਾਲ", "ਪੀਲਾ"], 3, "ਕੇਲਾ ਪੀਲਾ ਹੁੰਦਾ ਹੈ।"),
      Q("ਕੋਲੇ ਦਾ ਰੰਗ ਕਿਹੜਾ ਹੁੰਦਾ ਹੈ?", ["ਕਾਲਾ", "ਚਿੱਟਾ", "ਪੀਲਾ", "ਹਰਾ"], 0, "ਕੋਲਾ ਕਾਲਾ ਹੁੰਦਾ ਹੈ।"),
      Q("ਪੱਕੇ ਹੋਏ ਟਮਾਟਰ 🍅 ਦਾ ਰੰਗ ਕਿਹੜਾ ਹੁੰਦਾ ਹੈ?", ["ਨੀਲਾ", "ਲਾਲ", "ਕਾਲਾ", "ਚਿੱਟਾ"], 1, "ਪੱਕਿਆ ਟਮਾਟਰ ਲਾਲ ਹੁੰਦਾ ਹੈ।"),
      Q("ਸਾਨੂੰ ਜਨਮ ਦੇਣ ਵਾਲੀ ਕੌਣ ਹੈ?", ["ਭੈਣ", "ਦਾਦੀ ਜੀ", "ਮਾਂ", "ਭਰਾ"], 2, "ਸਾਨੂੰ ਜਨਮ ਦੇਣ ਵਾਲੀ ਸਾਡੀ ਮਾਂ ਹੈ।"),
      Q("ਪਿਤਾ ਜੀ ਦੇ ਪਿਤਾ ਜੀ ਨੂੰ ਕੀ ਕਹਿੰਦੇ ਹਾਂ?", ["ਭਰਾ", "ਮਾਂ", "ਦਾਦੀ ਜੀ", "ਦਾਦਾ ਜੀ"], 3, "ਪਿਤਾ ਜੀ ਦੇ ਪਿਤਾ ਜੀ ਦਾਦਾ ਜੀ ਹੁੰਦੇ ਹਨ।"),
      Q("ਪਿਤਾ ਜੀ ਦੀ ਮਾਂ ਨੂੰ ਕੀ ਕਹਿੰਦੇ ਹਾਂ?", ["ਦਾਦੀ ਜੀ", "ਭੈਣ", "ਮਾਂ", "ਭਰਾ"], 0, "ਪਿਤਾ ਜੀ ਦੀ ਮਾਂ ਦਾਦੀ ਜੀ ਹੁੰਦੀ ਹੈ।"),
      Q("ਮੇਰੇ ਮਾਪਿਆਂ ਦੀ ਧੀ ਮੇਰੀ ਕੌਣ ਹੈ?", ["ਭਰਾ", "ਭੈਣ", "ਦਾਦਾ ਜੀ", "ਪਿਤਾ ਜੀ"], 1, "ਮਾਪਿਆਂ ਦੀ ਧੀ ਮੇਰੀ ਭੈਣ ਹੈ।"),
      Q("ਮੇਰੇ ਮਾਪਿਆਂ ਦਾ ਪੁੱਤਰ ਮੇਰਾ ਕੌਣ ਹੈ?", ["ਭੈਣ", "ਦਾਦੀ ਜੀ", "ਭਰਾ", "ਮਾਂ"], 2, "ਮਾਪਿਆਂ ਦਾ ਪੁੱਤਰ ਮੇਰਾ ਭਰਾ ਹੈ।"),
      Q("ਇਨ੍ਹਾਂ ਵਿੱਚੋਂ ਪਰਿਵਾਰ ਦਾ ਮੈਂਬਰ ਕਿਹੜਾ ਨਹੀਂ ਹੈ?", ["ਮਾਂ", "ਭੈਣ", "ਭਰਾ", "ਕਮਲ"], 3, "ਕਮਲ ਇੱਕ ਫੁੱਲ ਹੈ।")
    ]
  };

  const greetings = {
    section: "ਸ਼ਬਦ",
    summary: "ਮਿੱਠੇ ਬੋਲ ਬੋਲਣੇ ਚੰਗੀ ਗੱਲ ਹੈ। ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ, ਧੰਨਵਾਦ ਅਤੇ ਮਾਫ਼ ਕਰਨਾ ਵਰਗੇ ਬੋਲ ਸਿੱਖੋ।",
    notes: [
      { heading: "ਮਿਲਣ ਵੇਲੇ", points: ["ਵੱਡਿਆਂ ਨੂੰ ਮਿਲ ਕੇ ਕਹੋ **ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ**।", "ਸਵੇਰੇ ਕਹੋ **ਸ਼ੁਭ ਸਵੇਰ**।", "ਸੌਣ ਵੇਲੇ ਕਹੋ **ਸ਼ੁਭ ਰਾਤ**।", "ਘਰ ਆਏ ਪ੍ਰਾਹੁਣਿਆਂ ਨੂੰ ਕਹੋ **ਜੀ ਆਇਆਂ ਨੂੰ**।"] },
      { heading: "ਮਿੱਠੇ ਬੋਲ", points: ["ਕੋਈ ਚੀਜ਼ ਦੇਵੇ ਤਾਂ ਕਹੋ **ਧੰਨਵਾਦ**।", "ਕੁਝ ਮੰਗਣ ਵੇਲੇ ਕਹੋ **ਕਿਰਪਾ ਕਰਕੇ**।", "ਗ਼ਲਤੀ ਹੋ ਜਾਵੇ ਤਾਂ ਕਹੋ **ਮਾਫ਼ ਕਰਨਾ**।", "ਵੱਡਿਆਂ ਦੇ ਨਾਂ ਨਾਲ **ਜੀ** ਲਾਓ।"] }
    ],
    terms: [
      { term: "ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ", meaning: "ਮਿਲਣ ਵੇਲੇ ਬੋਲਿਆ ਜਾਣ ਵਾਲਾ ਪਿਆਰਾ ਬੋਲ।" },
      { term: "ਧੰਨਵਾਦ", meaning: "ਕਿਸੇ ਦੀ ਮਦਦ ਜਾਂ ਚੀਜ਼ ਲਈ ਸ਼ੁਕਰੀਆ ਕਹਿਣ ਦਾ ਬੋਲ।" },
      { term: "ਮਾਫ਼ ਕਰਨਾ", meaning: "ਗ਼ਲਤੀ ਹੋ ਜਾਣ ਤੇ ਬੋਲਿਆ ਜਾਣ ਵਾਲਾ ਬੋਲ।" },
      { term: "ਕਿਰਪਾ ਕਰਕੇ", meaning: "ਨਰਮੀ ਨਾਲ ਕੁਝ ਮੰਗਣ ਦਾ ਬੋਲ।" }
    ],
    qa: [
      { q: "ਵੱਡਿਆਂ ਨੂੰ ਮਿਲ ਕੇ ਕੀ ਕਹਿੰਦੇ ਹਾਂ?", a: "**ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ**।" },
      { q: "ਕੋਈ ਚੀਜ਼ ਦੇਵੇ ਤਾਂ ਕੀ ਕਹਾਂਗੇ?", a: "**ਧੰਨਵਾਦ**।" }
    ],
    quiz: [
      Q("ਵੱਡਿਆਂ ਨੂੰ ਮਿਲ ਕੇ ਕੀ ਕਹਿੰਦੇ ਹਾਂ?", ["ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ", "ਹਟ ਜਾ", "ਚੁੱਪ ਕਰ", "ਮੈਨੂੰ ਦੇ"], 0, "ਵੱਡਿਆਂ ਨੂੰ ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ ਬੁਲਾਈਦਾ ਹੈ।"),
      Q("ਕੋਈ ਚੀਜ਼ ਦੇਵੇ ਤਾਂ ਕੀ ਕਹਾਂਗੇ?", ["ਹਟ ਜਾ", "ਧੰਨਵਾਦ", "ਮੈਂ ਨਹੀਂ", "ਚੁੱਪ ਕਰ"], 1, "ਧੰਨਵਾਦ ਕਹਿਣਾ ਚੰਗੀ ਗੱਲ ਹੈ।"),
      Q("ਗ਼ਲਤੀ ਹੋ ਜਾਵੇ ਤਾਂ ਕੀ ਕਹਾਂਗੇ?", ["ਧੰਨਵਾਦ", "ਸ਼ੁਭ ਰਾਤ", "ਮਾਫ਼ ਕਰਨਾ", "ਸ਼ੁਭ ਸਵੇਰ"], 2, "ਗ਼ਲਤੀ ਹੋਣ ਤੇ ਮਾਫ਼ ਕਰਨਾ ਕਹੀਦਾ ਹੈ।"),
      Q("ਕੁਝ ਮੰਗਣ ਵੇਲੇ ਕਿਹੜੇ ਸ਼ਬਦ ਲਾਈਏ?", ["ਜਲਦੀ ਦੇ", "ਹਟ ਜਾ", "ਚੁੱਪ ਕਰ", "ਕਿਰਪਾ ਕਰਕੇ"], 3, "ਮੰਗਣ ਵੇਲੇ ਕਿਰਪਾ ਕਰਕੇ ਕਹਿਣਾ ਚੰਗਾ ਹੈ।"),
      Q("ਸਵੇਰੇ ਉੱਠ ਕੇ ਕੀ ਕਹਾਂਗੇ?", ["ਸ਼ੁਭ ਸਵੇਰ", "ਸ਼ੁਭ ਰਾਤ", "ਮਾਫ਼ ਕਰਨਾ", "ਧੰਨਵਾਦ"], 0, "ਸਵੇਰ ਨੂੰ ਸ਼ੁਭ ਸਵੇਰ ਕਹਿੰਦੇ ਹਾਂ।"),
      Q("ਰਾਤ ਨੂੰ ਸੌਣ ਤੋਂ ਪਹਿਲਾਂ ਕੀ ਕਹਾਂਗੇ?", ["ਸ਼ੁਭ ਸਵੇਰ", "ਸ਼ੁਭ ਰਾਤ", "ਧੰਨਵਾਦ", "ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ"], 1, "ਰਾਤ ਨੂੰ ਸ਼ੁਭ ਰਾਤ ਕਹਿੰਦੇ ਹਾਂ।"),
      Q("ਘਰ ਆਏ ਪ੍ਰਾਹੁਣੇ ਨੂੰ ਕੀ ਕਹਾਂਗੇ?", ["ਹਟ ਜਾ", "ਮਾਫ਼ ਕਰਨਾ", "ਜੀ ਆਇਆਂ ਨੂੰ", "ਸ਼ੁਭ ਰਾਤ"], 2, "ਮਹਿਮਾਨ ਨੂੰ ਜੀ ਆਇਆਂ ਨੂੰ ਕਿਹਾ ਜਾਂਦਾ ਹੈ।"),
      Q("ਕਿਹੜਾ ਮਿੱਠਾ ਬੋਲ ਨਹੀਂ ਹੈ?", ["ਧੰਨਵਾਦ", "ਮਾਫ਼ ਕਰਨਾ", "ਕਿਰਪਾ ਕਰਕੇ", "ਹਟ ਜਾ"], 3, "ਹਟ ਜਾ ਕਹਿਣਾ ਚੰਗੀ ਗੱਲ ਨਹੀਂ।"),
      Q("ਵੱਡਿਆਂ ਦੇ ਨਾਂ ਨਾਲ ਕੀ ਲਾਉਂਦੇ ਹਾਂ?", ["ਜੀ", "ਓਏ", "ਹੈ", "ਨਾ"], 0, "ਸਤਿਕਾਰ ਲਈ ਨਾਂ ਨਾਲ ਜੀ ਲਾਉਂਦੇ ਹਾਂ।"),
      Q("ਕਿਸੇ ਨੇ ਸਾਡੀ ਮਦਦ ਕੀਤੀ। ਸਾਨੂੰ ਕੀ ਕਹਿਣਾ ਚਾਹੀਦਾ ਹੈ?", ["ਚੁੱਪ ਕਰ", "ਧੰਨਵਾਦ", "ਹਟ ਜਾ", "ਕੁਝ ਨਹੀਂ"], 1, "ਮਦਦ ਲਈ ਧੰਨਵਾਦ ਕਹੀਦਾ ਹੈ।"),
      Q("ਅਧਿਆਪਕ ਨੂੰ ਸਵੇਰੇ ਮਿਲ ਕੇ ਕੀ ਕਹੋਗੇ?", ["ਸ਼ੁਭ ਰਾਤ", "ਹਟ ਜਾ", "ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ ਜੀ", "ਚੁੱਪ ਕਰ"], 2, "ਅਧਿਆਪਕ ਨੂੰ ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ ਜੀ ਕਹਿਣਾ ਚੰਗਾ ਹੈ।")
    ]
  };

  // ---------- Chapter lists for the reading levels ----------

  const rd1 = ["madam-ji-namaste", "do-vir-te-khir", "roz-savere-jaldi-uthan", "asin-kithe-rehnde-han", "kabootar-te-billi", "chaukidar", "varanmala-geet", "jaanwaran-de-bachche", "mera-basta", "rukh", "bujharatan", "mera-school", "diwali"].map((x) => "pp1-" + x);
  const rd2 = ["meri-maan", "jago-jago-hoia-savera", "mann-da-dar", "ikk-si-shekhchilli", "kiri-te-hathi", "chiri-te-pippal", "bhai-lalo", "baddal", "nimm", "mera-pind", "panchhi", "abbu-diyan-kukkadian", "kotla-chhapaki", "rukh-lagaiye-rukh", "dussehra", "harian-sabzian", "ao-bujhiye"].map((x) => "pp2-" + x);
  const rd3 = ["sadda-des", "uth-kithe-gaya", "dosti", "dipu-chhutti", "vadda-kaun", "relgaddi-aai", "dariya-ne-kiha", "dekho-thehro-jao", "cycle-de-jhute", "aale-dwale", "gandhi-bachpan", "dadi-maa-baatan", "maharaja-ranjit-singh", "balak-bibe-rane", "makkri-di-himmat", "dakkhane-di-suno", "bhet-di-gall", "basant", "aao-gitte-khediye", "harmandir-sahib-darshan", "rangan-di-khed-holi"].map((x) => "pp3-" + x);
  const rd4 = ["prarthna", "nikki-jind-vaddi-soch", "bal-sukhdev", "hathi", "viru-te-mangu", "gutar-gun", "nani-di-sikhia", "bujh-tun-meri-baat", "kabaddi", "eid", "mere-nishane", "sade-rukh", "maghu-magarmach-te-panchhi", "mera-punjab", "pani", "ao-te-jao", "mata-gujri-ji", "bal-boliyan", "babe-bhakne-diyan-piyarian-gallan", "mehnat-da-mull", "patang-charhaiye"].map((x) => "pp4-" + x);
  const rd5 = ["mera-hindustan", "gatka", "baramaha", "udham-singh", "siani-gal", "ao-ral-mil-rukh", "satrangi-titli", "chidia-ghar", "sunth-te-haldi", "boli-hai-punjabi", "chidi-rukh-billi-sapp", "sachi-mittarta", "phulkari-kala", "dadi-di-naseehat", "resham-da-kida", "sada-paras-sada-patshah", "hindwasian-nu-sandesh", "kahi-hass-pai", "kalpana-chawla", "saragarhi-di-ladai", "asli-sikhya"].map((x) => "pp5-" + x);
  const rd7 = ["vanjara", "moti", "surinder-kaur", "ghade-da-pani", "maa-da-pyar", "baldan-wala-pyara-singh", "baal-khedan", "bachittar-singh-di-bahaduri", "mere-dadi-ji", "sheraniyan", "baba-beda-singh-bahadur", "shabash-suman", "saun", "kartar-singh-sarabha", "jee-kare", "trilochan-da-kad", "lala-lajpat-rai", "gathmuthian-wala-khuh", "adbhut-sansar", "satt-doctor", "pulaar-pari-sunita-williams", "virasat-e-khalsa", "milkhi-da-viah", "jago", "kirat-da-satkar"];
  const rd8 = ["jai-bharat-mata", "pemi-de-niane", "chhinjh-charahan-di", "guru-arjan-dev-ji", "uddam-kareen-zaroor", "daleri", "rupnagar", "baba-farid", "punjab-kavita", "hariyaval-de-beej", "punjabi-lok-nach-giddha", "punjab-da-supansaz", "dharti", "sanjhi-maa", "rabindranath-tagore", "gulab-di-fasal", "lohri", "hockey-da-jadugar", "ammadi-da-vehra", "challian-de-rakhe", "science-city", "shiv-singh-butt-ghada", "pind-di-ghulari", "bhua", "rabb-di-pauri", "gaggu", "vadde-bhain-ji"].map((x) => "pp8-" + x);
  const rd9 = ["bhai-vir-singh", "dhani-ram-chatrik", "prof-puran-singh", "charan-singh-shaheed", "diwan-singh-kalepani", "feroz-din-sharaf", "gurmukh-singh-musafir", "vidhata-singh-teer", "prof-mohan-singh", "nand-lal-noorpuri", "bawa-balwant", "pritam-singh-safeer", "amrita-pritam", "shiv-kumar-batalvi", "surjit-patar", "purtan-janam-sakhi", "shraddha-ram-phillauri", "behari-lal-puri", "lal-singh-kamla-akali", "suba-singh", "balraj-sahni", "dr-tr-sharma", "harpal-singh-pannu"].map((x) => "sm9-" + x);
  const rd10 = ["kulfi", "marhian-ton-door", "ang-sang", "bam-bahadur", "bagi-di-dhee", "dharti-hetla-balad", "ik-pair-ghatt-turna", "bomb-case", "nayak", "samundron-paar", "zafarnama", "dooja-viah"];
  const rd11 = ["lok-sahit", "suhag", "ghodian", "sithnian", "tappe", "boliyan", "dhole", "mahiye", "bujharatan", "mith-kathavan", "pari-kathavan", "niti-katha", "dant-kathavan", "preet-kathavan"].map((x) => "lp11-" + x);
  const rd12culture = ["punjabi-sabhyachar", "punjab-mele-tiuhar", "punjab-rasam-riwaj", "punjab-lok-khedan", "punjab-lok-kitte-kalavan", "punjab-lok-nach", "punjab-diyan-nakalan", "punjabi-sabhyacharik-parivartan"];
  const rd12poems = ["tukri-jag-ton-niyari", "purane-punjab-nu-awazan", "vagde-pani", "taj-mahal", "chumm-chumm-rakho", "dosta", "waris-shah", "mera-bachpan", "geet-shiv-kumar", "aiven-na-butaan-te"].map((x) => "kavita-" + x);
  const rd12stories = ["saanjh", "neeli", "apna-des", "mada-banda", "ghar-jah-apne", "satiya-sei"].map((x) => "kahani-" + x);

  const half = (a) => [a.slice(0, Math.ceil(a.length / 2)), a.slice(Math.ceil(a.length / 2))];
  const readingLevels = [];
  const addReading = (cls, ids, part) => readingLevels.push(
    lv("reading-" + cls + (part ? "-" + part : ""), cls,
      "ਪੜ੍ਹਨਾ – ਜਮਾਤ " + cls + " ਪੱਧਰ" + (part ? " (ਭਾਗ " + part + ")" : ""),
      "Read the Class " + cls + " Punjabi lessons and poems" + (part ? " (part " + part + ")" : "") + " and answer questions about what they say.",
      PS(cls, ids)));
  [[1, rd1], [2, rd2], [3, rd3], [4, rd4], [5, rd5], [7, rd7], [8, rd8], [9, rd9]].forEach(([cls, ids]) => {
    if (ids.length > 14) { const [a, b] = half(ids); addReading(cls, a, 1); addReading(cls, b, 2); }
    else addReading(cls, ids);
  });
  addReading(10, rd10);
  addReading(11, rd11);
  readingLevels.push(
    lv("reading-12-culture", 12, "ਪੜ੍ਹਨਾ – ਜਮਾਤ 12 ਪੰਜਾਬੀ ਸੱਭਿਆਚਾਰ", "Read about Punjabi culture, fairs, customs, games and dances and answer questions on them.", PS(12, rd12culture)),
    lv("reading-12-poems", 12, "ਪੜ੍ਹਨਾ – ਜਮਾਤ 12 ਕਵਿਤਾਵਾਂ", "Read the Class 12 poems and explain their main ideas.", PS(12, rd12poems)),
    lv("reading-12-stories", 12, "ਪੜ੍ਹਨਾ – ਜਮਾਤ 12 ਕਹਾਣੀਆਂ", "Read the Class 12 stories and explain their characters and message.", PS(12, rd12stories))
  );

  StudyData.addPath("punjabi", {
    title: "Punjabi",
    titleLocal: "ਪੰਜਾਬੀ",
    topics: [
      // ───────────── Letters and the language ─────────────
      {
        id: "letters", title: "Gurmukhi letters and the language", titleLocal: "ਗੁਰਮੁਖੀ ਅੱਖਰ", icon: "ੳ",
        summary: "From the first letters ੳ ਅ ੲ to the Paintee, nukta letters, the Gurmukhi script and where Punjabi comes from.",
        levels: [
          lv("letters-0", 0, "ਪਹਿਲੇ ਅੱਖਰ", "Say the first letters ੳ ਅ ੲ and some more, each with a picture-word.", [],
            { own: Object.assign({ id: "pehle-akhar", title: "ਪਹਿਲੇ ਅੱਖਰ" }, firstLetters) }),
          lv("letters-1", 1, "ਪੈਂਤੀ ਅੱਖਰੀ", "Name all 35 letters of the Paintee in order.", [P(1, "paintee-akhari")]),
          lv("letters-2", 2, "ਪੈਰ ਬਿੰਦੀ ਵਾਲੇ ਅੱਖਰ", "Read and write the letters that take a dot at the foot, like ਸ਼, ਖ਼, ਗ਼, ਜ਼, ਫ਼.", [P(2, "pair-bindi-akhar")]),
          lv("letters-6", 6, "ਗੁਰਮੁਖੀ ਦੁਹਰਾਈ", "Revise the letters, vowel signs and word-building of Gurmukhi.", [P(6, "gurmukhi-duhrai")]),
          lv("letters-9", 9, "ਗੁਰਮੁਖੀ ਲਿਪੀ ਅਤੇ ਪੈਂਤੀ ਅੱਖਰੀ", "Describe the Gurmukhi script and the groups of the Paintee.", [P(9, "gurmukhi-lipi")]),
          lv("letters-11", 11, "ਗੁਰਮੁਖੀ ਲਿਪੀ ਦੀ ਬਣਤਰ", "Explain the structure of Gurmukhi: base letters, vowel signs, nasal signs and the dotted-foot letters.", [P(11, "gurmukhi-lipi")]),
          lv("letters-11-upbhasha", 11, "ਪੰਜਾਬੀ ਦੀਆਂ ਉਪ-ਭਾਸ਼ਾਵਾਂ", "Name the main dialects of Punjabi and where each is spoken.", [P(11, "punjabi-upbhasha")]),
          lv("letters-12", 12, "ਪੰਜਾਬੀ ਭਾਸ਼ਾ ਦਾ ਨਿਕਾਸ ਤੇ ਵਿਕਾਸ", "Trace the origin and growth of the Punjabi language.", [P(12, "punjabi-nikas")])
        ]
      },
      // ───────────── Matras ─────────────
      {
        id: "matras", title: "Vowel signs (matras) and special marks", titleLocal: "ਲਗਾਂ-ਮਾਤਰਾਂ", icon: "ਾ",
        summary: "Words without a matra, then kanna, sihari, bihari, aunkar and the rest, bindi, tippi, addak and subjoined letters.",
        levels: [
          lv("matras-0", 0, "ਮੁਕਤਾ ਸ਼ਬਦ", "Read simple words without any vowel sign, like ਘਰ, ਜਲ and ਕਮਲ.", [],
            { own: Object.assign({ id: "mukta-shabad", title: "ਮੁਕਤਾ ਸ਼ਬਦ" }, muktaWords) }),
          lv("matras-1-mukta", 1, "ਮੁਕਤਾ ਸ਼ਬਦ (ਜਮਾਤ 1)", "Read and write words with no matra.", [P(1, "mukta")]),
          lv("matras-1-kanna", 1, "ਕੰਨਾ (ਾ)", "Read and write words with the kanna.", [P(1, "kanna")]),
          lv("matras-1-sihari", 1, "ਸਿਹਾਰੀ ਅਤੇ ਬਿਹਾਰੀ", "Read and write words with sihari and bihari.", [P(1, "sihari-bihari")]),
          lv("matras-1-aunkar", 1, "ਔਂਕੜ ਅਤੇ ਦੁਲੈਂਕੜ", "Read and write words with aunkar and dulainkar.", [P(1, "aunkar-dulainkar")]),
          lv("matras-2-lava", 2, "ਲਾਂ, ਦੁਲਾਵਾਂ, ਹੋੜਾ ਅਤੇ ਕਨੌੜਾ", "Read and write words with lava, dulavan, horha and kanaura.", [P(2, "lava-dulavan-horha-kanaura")]),
          lv("matras-2-bindi", 2, "ਬਿੰਦੀ ਅਤੇ ਟਿੱਪੀ", "Use bindi and tippi correctly in words.", [P(2, "bindi-tippi")]),
          lv("matras-2-adhak", 2, "ਅੱਧਕ", "Use the addak to double a sound in a word.", [P(2, "adhak")]),
          lv("matras-3", 3, "ਲਗਾਂ-ਮਾਤਰਾਂ ਦੀ ਦੁਹਰਾਈ", "Revise every matra in words and sentences.", [P(3, "matra-duhrai")]),
          lv("matras-9", 9, "ਲਗਾਂ-ਮਾਤਰਾਂ ਅਤੇ ਲਗਾਖਰ", "Name all the matras, nasal signs and lagakhar and use them correctly.", [P(9, "lagan-matran")])
        ]
      },
      // ───────────── Vocabulary ─────────────
      {
        id: "vocabulary", title: "Words and vocabulary", titleLocal: "ਸ਼ਬਦ ਭੰਡਾਰ", icon: "ਸ਼",
        summary: "First words and greetings, then opposites, synonyms and one word for many words.",
        levels: [
          lv("vocab-0-family", 0, "ਮੇਰਾ ਪਰਿਵਾਰ ਅਤੇ ਰੰਗ", "Say the names of family members and six colours.", [],
            { own: Object.assign({ id: "mera-parivar-te-rang", title: "ਮੇਰਾ ਪਰਿਵਾਰ ਅਤੇ ਰੰਗ" }, familyColours) }),
          lv("vocab-0-greetings", 0, "ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ – ਮਿੱਠੇ ਬੋਲ", "Use greetings and polite words like ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ, ਧੰਨਵਾਦ and ਮਾਫ਼ ਕਰਨਾ.", [],
            { own: Object.assign({ id: "sati-sri-akal-mithe-bol", title: "ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ – ਮਿੱਠੇ ਬੋਲ" }, greetings) }),
          lv("vocab-1", 1, "ਰੰਗ, ਫਲ, ਜਾਨਵਰ, ਗਿਣਤੀ ਅਤੇ ਹਫ਼ਤੇ ਦੇ ਦਿਨ", "Name colours, fruits, animals, the numbers 1 to 10 and the days of the week.", [P(1, "rang-phal-janwar"), P(1, "ginti"), P(1, "hafte-de-din")]),
          lv("vocab-2", 2, "ਉਲਟ ਸ਼ਬਦ", "Give the opposite of simple words.", [P(2, "ulat-shabd")]),
          lv("vocab-3", 3, "ਉਲਟ ਅਰਥ ਅਤੇ ਗਿਣਤੀ", "Give opposites and write numbers up to 20 in words.", [P(3, "ulat-arth"), P(3, "ginti")]),
          lv("vocab-4", 4, "ਸਮਾਨਾਰਥਕ ਸ਼ਬਦ", "Give words that mean the same.", [P(4, "samanarthak")]),
          lv("vocab-5", 5, "ਬਹੁਤੇ ਸ਼ਬਦਾਂ ਲਈ ਇੱਕ ਸ਼ਬਦ", "Replace a phrase with a single word.", [P(5, "ik-shabad")]),
          lv("vocab-6", 6, "ਵਿਰੋਧੀ ਸ਼ਬਦ", "Give the opposite words correctly.", [P(6, "virodhi-shabad")]),
          lv("vocab-7", 7, "ਸਮਾਨਾਰਥਕ ਸ਼ਬਦ", "Match words with others of the same meaning.", [P(7, "samanarthak-shabad")]),
          lv("vocab-9", 9, "ਸਮਾਨਾਰਥਕ ਅਤੇ ਵਿਰੋਧੀ ਸ਼ਬਦ", "Give synonyms and opposites of harder words.", [P(9, "samanarthak-virodhi")])
        ]
      },
      // ───────────── Idioms and proverbs ─────────────
      {
        id: "idioms", title: "Idioms and proverbs", titleLocal: "ਮੁਹਾਵਰੇ ਤੇ ਅਖਾਣ", icon: "❝",
        summary: "Meanings and use of common muhavre (idioms) and akhaan (proverbs).",
        levels: [
          lv("idioms-5", 5, "ਮੁਹਾਵਰੇ (ਸਰਲ)", "Give the meaning of simple idioms and use them in sentences.", [P(5, "muhaavre")]),
          lv("idioms-7", 7, "ਮੁਹਾਵਰੇ", "Explain more idioms and use them in sentences.", [P(7, "muhavare")]),
          lv("idioms-8", 8, "ਅਖਾਣ", "Explain common proverbs and when to use them.", [P(8, "akhaan")]),
          lv("idioms-10", 10, "ਮੁਹਾਵਰੇ ਅਤੇ ਅਖਾਣ", "Use idioms and proverbs correctly in sentences.", [P(10, "muhavare-akhaan")]),
          lv("idioms-11", 11, "ਮੁਹਾਵਰੇ ਅਤੇ ਅਖਾਣ (ਜਮਾਤ 11)", "Explain idioms and proverbs asked in Class 11.", [P(11, "muhavre-akhaan"), P(11, "muhavre-pseb11")]),
          lv("idioms-12", 12, "ਅਖਾਉਤਾਂ", "Explain the sayings (akhauta) in the Class 12 book.", [P(12, "akhautan")])
        ]
      },
      // ───────────── Spelling and punctuation ─────────────
      {
        id: "spelling", title: "Spelling and punctuation", titleLocal: "ਸ਼ਬਦ-ਜੋੜ ਅਤੇ ਵਿਰਾਮ ਚਿੰਨ੍ਹ", icon: "।",
        summary: "Correct spelling, pick the right form of a word, and use the full stop, comma and other punctuation marks.",
        levels: [
          lv("spelling-4", 4, "ਸ਼ੁੱਧ ਸ਼ਬਦ-ਜੋੜ ਅਤੇ ਵਿਰਾਮ ਚਿੰਨ੍ਹ", "Spot and correct spelling mistakes and use simple punctuation.", [P(4, "shudh-jod"), P(4, "virami-chinh")]),
          lv("spelling-7", 7, "ਵਿਰਾਮ ਚਿੰਨ੍ਹ", "Use all the main punctuation marks correctly.", [P(7, "viram-chinh")]),
          lv("spelling-8", 8, "ਸ਼ੁੱਧ ਸ਼ਬਦ-ਜੋੜ", "Correct the spelling of harder words.", [P(8, "shuddh-shabad-jod")]),
          lv("spelling-10", 10, "ਸ਼ੁੱਧ-ਅਸ਼ੁੱਧ ਸ਼ਬਦ ਜੋੜ ਅਤੇ ਵਿਰਾਮ ਚਿੰਨ੍ਹ", "Correct wrong spellings and punctuate a passage.", [P(10, "shudh-ashudh-shabad-jor"), P(10, "viraam-chinh")]),
          lv("spelling-12", 12, "ਸ਼ੁੱਧ-ਅਸ਼ੁੱਧ ਸ਼ਬਦ-ਜੋੜ ਅਤੇ ਸ਼ਬਦ-ਕੋਸ਼", "Correct spellings and find words in a dictionary.", [P(12, "shudh-ashudh"), P(12, "shabad-kosh-vachan-vidhi")])
        ]
      },
      // ───────────── Nouns and pronouns ─────────────
      {
        id: "naanv", title: "Nouns and pronouns", titleLocal: "ਨਾਂਵ ਅਤੇ ਪੜਨਾਂਵ", icon: "ਨਾਂ",
        summary: "Naming words and the words that stand in for them.",
        levels: [
          lv("naanv-3", 3, "ਨਾਂਵ (ਸਰਲ)", "Pick out the naming words in a sentence.", [P(3, "naanv")]),
          lv("padnaanv-4", 4, "ਪੜਨਾਂਵ", "Use pronouns in place of nouns.", [P(4, "padnaanv")]),
          lv("naanv-5", 5, "ਨਾਂਵ ਦੀਆਂ ਕਿਸਮਾਂ", "Name the kinds of noun and give examples.", [P(5, "naanv-kismaan")]),
          lv("naanv-6", 6, "ਨਾਂਵ ਅਤੇ ਪੜਨਾਂਵ", "Identify nouns and pronouns and their kinds.", [P(6, "naanv"), P(6, "padnaanv")]),
          lv("naanv-9", 9, "ਨਾਂਵ ਅਤੇ ਪੜਨਾਂਵ (ਜਮਾਤ 9)", "Classify nouns and pronouns in sentences.", [P(9, "naanv"), P(9, "parnaanv")])
        ]
      },
      // ───────────── Gender and number ─────────────
      {
        id: "gender-number", title: "Gender and number", titleLocal: "ਲਿੰਗ ਅਤੇ ਵਚਨ", icon: "ਲਿੰ",
        summary: "Masculine and feminine, singular and plural.",
        levels: [
          lv("gender-2", 2, "ਇੱਕ ਅਤੇ ਬਹੁਤੇ, ਮੁੰਡਾ ਅਤੇ ਕੁੜੀ", "Say one or many, and boy-words or girl-words.", [P(2, "ikk-te-bahute"), P(2, "munda-kudi")]),
          lv("gender-3", 3, "ਇੱਕ-ਵਚਨ, ਬਹੁ-ਵਚਨ ਅਤੇ ਲਿੰਗ", "Change words between singular and plural, and tell their gender.", [P(3, "ikk-vachan-bahu-vachan"), P(3, "ling")]),
          lv("gender-6", 6, "ਲਿੰਗ ਅਤੇ ਵਚਨ", "Change gender and number correctly.", [P(6, "ling"), P(6, "vachan")]),
          lv("gender-9", 9, "ਲਿੰਗ ਅਤੇ ਵਚਨ (ਜਮਾਤ 9)", "Change gender and number in harder words.", [P(9, "ling-vachan")])
        ]
      },
      // ───────────── Adjective, verb, tense ─────────────
      {
        id: "verbs", title: "Adjectives, verbs and tenses", titleLocal: "ਵਿਸ਼ੇਸ਼ਣ, ਕਿਰਿਆ ਅਤੇ ਕਾਲ", icon: "ਕਿ",
        summary: "Words that describe, words that do, and when it is done.",
        levels: [
          lv("verbs-4-adj", 4, "ਵਿਸ਼ੇਸ਼ਣ (ਸਰਲ)", "Find the describing word for a noun.", [P(4, "visheshan")]),
          lv("verbs-4-kiriya", 4, "ਕਿਰਿਆ", "Find the doing word in a sentence.", [P(4, "kiriya")]),
          lv("verbs-5", 5, "ਕਾਲ (ਸਰਲ)", "Tell past, present and future in a sentence.", [P(5, "kaal")]),
          lv("verbs-7", 7, "ਵਿਸ਼ੇਸ਼ਣ, ਕਿਰਿਆ ਅਤੇ ਕਾਲ", "Name the kinds of adjective and verb and the tenses.", [P(7, "visheshan"), P(7, "kiriya"), P(7, "kaal")]),
          lv("verbs-9", 9, "ਵਿਸ਼ੇਸ਼ਣ", "Classify adjectives in sentences.", [P(9, "visheshan")]),
          lv("verbs-10", 10, "ਕਿਰਿਆ ਅਤੇ ਕਾਲ", "Name the kinds of verb and tense and change between them.", [P(10, "kiriya-kaal")]),
          lv("verbs-10-vaach", 10, "ਵਾਚ (ਕਰਤਰੀ ਅਤੇ ਕਰਮਣੀ)", "Change a sentence between active and passive.", [P(10, "vaach")])
        ]
      },
      // ───────────── Other parts of speech ─────────────
      {
        id: "word-classes", title: "Adverbs, postpositions, conjunctions and interjections", titleLocal: "ਸ਼ਬਦ-ਸ਼੍ਰੇਣੀਆਂ", icon: "ਸ਼੍ਰ",
        summary: "The remaining kinds of word and a revision of all word classes.",
        levels: [
          lv("wordclass-8-adv", 8, "ਕਿਰਿਆ ਵਿਸ਼ੇਸ਼ਣ", "Tell how, when and where an action happens.", [P(8, "kiria-visheshan")]),
          lv("wordclass-8", 8, "ਸੰਬੰਧਕ, ਯੋਜਕ ਅਤੇ ਵਿਸਮਿਕ", "Use postpositions, conjunctions and interjections.", [P(8, "sambandhak-yojak-visamik")]),
          lv("wordclass-10", 10, "ਕਿਰਿਆ ਵਿਸ਼ੇਸ਼ਣ, ਸੰਬੰਧਕ, ਯੋਜਕ ਅਤੇ ਵਿਸਮਿਕ", "Identify all four word classes in a passage.", [P(10, "kiriya-visheshan-sambandhak-yojak-vismik")]),
          lv("wordclass-12", 12, "ਸ਼ਬਦ-ਸ਼੍ਰੇਣੀਆਂ ਦੀ ਦੁਹਰਾਈ", "Revise and identify every word class.", [P(12, "shabad-shreniyan")])
        ]
      },
      // ───────────── Word formation and sounds ─────────────
      {
        id: "word-making", title: "Prefixes, suffixes, compounds and sounds", titleLocal: "ਅਗੇਤਰ, ਪਿਛੇਤਰ, ਸਮਾਸ ਅਤੇ ਧੁਨੀ", icon: "ਅਗੇ",
        summary: "How new words are made, and the sounds of Punjabi.",
        levels: [
          lv("wordmake-5", 5, "ਅਗੇਤਰ ਅਤੇ ਪਿਛੇਤਰ (ਸਰਲ)", "Make new words by adding a prefix or suffix.", [P(5, "agetar-pichhetar")]),
          lv("wordmake-8", 8, "ਅਗੇਤਰ ਅਤੇ ਪਿਛੇਤਰ", "Separate and add prefixes and suffixes.", [P(8, "agetar-pichhetar")]),
          lv("wordmake-9", 9, "ਅਗੇਤਰ ਅਤੇ ਪਿਛੇਤਰ (ਜਮਾਤ 9)", "Make words with prefixes and suffixes and tell what changes.", [P(9, "agetar-pichhetar")]),
          lv("wordmake-11-dhuni", 11, "ਧੁਨੀ ਵਿਉਂਤ: ਸਵਰ, ਵਿਅੰਜਨ, ਸੁਰ", "Tell vowels, consonants and tones apart.", [P(11, "dhuni-viunta")]),
          lv("wordmake-11", 11, "ਸ਼ਬਦ ਬਣਤਰ: ਅਗੇਤਰ, ਪਿਛੇਤਰ, ਸਮਾਸ", "Analyse the make-up of a word, including compounds.", [P(11, "shabad-banavat")])
        ]
      },
      // ───────────── Sentences ─────────────
      {
        id: "sentences", title: "Sentences", titleLocal: "ਵਾਕ", icon: "ਵਾ",
        summary: "From a simple sentence to kinds of sentence, active and passive, and changing sentences.",
        levels: [
          lv("sentence-2", 2, "ਸਰਲ ਵਾਕ ਬਣਾਉਣੇ", "Make a simple sentence from given words.", [P(2, "saral-vaak")]),
          lv("sentence-3", 3, "ਤਸਵੀਰ ਵੇਖ ਕੇ ਵਾਕ", "Write sentences about a picture.", [P(3, "tasvir-vaak")]),
          lv("sentence-8", 8, "ਵਾਕ ਦੀਆਂ ਕਿਸਮਾਂ", "Tell the kinds of sentence.", [P(8, "vak-kismaan")]),
          lv("sentence-10", 10, "ਵਾਕ ਅਤੇ ਵਾਕ ਦੀਆਂ ਕਿਸਮਾਂ", "Name simple, compound and complex sentences.", [P(10, "vaak-kisman")]),
          lv("sentence-12", 12, "ਵਾਕ-ਬਣਤਰ ਅਤੇ ਵਾਕ-ਵਟਾਂਦਰਾ", "Analyse the structure of a sentence and change it from one kind to another.", [P(12, "vaak-banavat"), P(12, "vaak-vattandra"), P(12, "vaak-kisman-vatandra")])
        ]
      },
      // ───────────── Reading ─────────────
      {
        id: "reading", title: "Reading the textbook", titleLocal: "ਪੜ੍ਹਨਾ", icon: "📖",
        summary: "Lessons, poems and stories from each class's Punjabi book, with questions on what they say.",
        levels: readingLevels
      },
      // ───────────── Paragraphs and unseen passages ─────────────
      {
        id: "paragraph", title: "Paragraphs and unseen passages", titleLocal: "ਪੈਰਾ ਅਤੇ ਅਣਡਿੱਠਾ ਪੈਰਾ", icon: "¶",
        summary: "Write a short paragraph, then read an unseen passage and answer on it.",
        levels: [
          lv("para-3", 3, "ਛੋਟਾ ਪੈਰਾ", "Write a few connected sentences on a topic.", [P(3, "chhota-para")]),
          lv("para-4", 4, "ਪੈਰਾ ਰਚਨਾ", "Write a paragraph on a given topic.", [P(4, "para-rachna")]),
          lv("para-5", 5, "ਅਣਡਿੱਠਾ ਪੈਰਾ", "Read an unseen passage and answer questions.", [P(5, "andithha-para")]),
          lv("para-6", 6, "ਪੈਰਾ ਰਚਨਾ (ਜਮਾਤ 6)", "Write a well-linked paragraph.", [P(6, "paira-rachna")]),
          lv("para-8", 8, "ਅਣਡਿੱਠਾ ਪੈਰਾ (ਜਮਾਤ 8)", "Read an unseen passage and answer questions.", [P(8, "andiddha-paira")]),
          lv("para-9", 9, "ਪੈਰਾ ਰਚਨਾ ਅਤੇ ਅਣਡਿੱਠਾ ਪੈਰਾ", "Write a paragraph and answer on an unseen passage.", [P(9, "paira-rachna"), P(9, "andittha-paira")]),
          lv("para-10", 10, "ਅਣਡਿੱਠਾ ਪੈਰਾ (ਜਮਾਤ 10)", "Answer questions and give a title for an unseen passage.", [P(10, "andittha-paira")]),
          lv("para-11", 11, "ਪੈਰਾ-ਰਚਨਾ (ਜਮਾਤ 11)", "Write a paragraph in the board's style.", [P(11, "paira-rachna-lp11")]),
          lv("para-12", 12, "ਪੈਰਾ ਰਚਨਾ (ਜਮਾਤ 12)", "Write a paragraph in the board's style.", [P(12, "para-rachna")])
        ]
      },
      // ───────────── Letters and applications ─────────────
      {
        id: "letters-writing", title: "Letters and applications", titleLocal: "ਚਿੱਠੀ ਅਤੇ ਬਿਨੈ-ਪੱਤਰ", icon: "✉️",
        summary: "Personal letters, leave applications, office letters and letters to the editor.",
        levels: [
          lv("letter-4", 4, "ਛੁੱਟੀ ਲਈ ਅਰਜ਼ੀ", "Write a leave application.", [P(4, "chhutti-arzi")]),
          lv("letter-5", 5, "ਨਿੱਜੀ ਚਿੱਠੀ", "Write a letter to a friend or relative.", [P(5, "nij-chitthi")]),
          lv("letter-6", 6, "ਨਿੱਜੀ ਚਿੱਠੀ (ਜਮਾਤ 6)", "Write a personal letter with the right format.", [P(6, "nijji-chitthi")]),
          lv("letter-7", 7, "ਦਫ਼ਤਰੀ ਚਿੱਠੀ (ਬਿਨੈ-ਪੱਤਰ)", "Write an application to the principal or an officer.", [P(7, "daftari-chitthi")]),
          lv("letter-8", 8, "ਬਿਨੈ-ਪੱਤਰ", "Write an application in the correct format.", [P(8, "binai-patar")]),
          lv("letter-9", 9, "ਚਿੱਠੀ ਪੱਤਰ (ਨਿੱਜੀ ਅਤੇ ਦਫ਼ਤਰੀ)", "Write both personal and office letters.", [P(9, "chitthi-pattar")]),
          lv("letter-10", 10, "ਦਫ਼ਤਰੀ ਚਿੱਠੀ ਅਤੇ ਸੰਪਾਦਕ ਨੂੰ ਪੱਤਰ", "Write an application and a letter to the editor.", [P(10, "daftari-chitthi")]),
          lv("letter-11", 11, "ਦਫ਼ਤਰੀ ਚਿੱਠੀ ਅਤੇ ਸੰਪਾਦਕ ਨੂੰ ਪੱਤਰ (ਜਮਾਤ 11)", "Write office letters and a letter to a newspaper editor.", [P(11, "daftari-chitthi"), P(11, "patar-sampadak")]),
          lv("letter-12", 12, "ਬਿਨੈ-ਪੱਤਰ ਅਤੇ ਕਾਰ-ਵਿਹਾਰ ਦੇ ਪੱਤਰ", "Write applications and business letters.", [P(12, "binai-patar"), P(12, "karvihar-de-patar")])
        ]
      },
      // ───────────── Essays and stories ─────────────
      {
        id: "essays", title: "Essays, stories and reports", titleLocal: "ਲੇਖ, ਕਹਾਣੀ ਅਤੇ ਰਿਪੋਰਟ", icon: "✍️",
        summary: "Essays on a topic, stories from clues, dialogues and reports.",
        levels: [
          lv("essay-5", 5, "ਲੇਖ ਰਚਨਾ", "Write a short essay with a beginning, middle and end.", [P(5, "lekh-rachna")]),
          lv("essay-6", 6, "ਕਹਾਣੀ ਰਚਨਾ", "Write a story from a few clues.", [P(6, "kahani-rachna")]),
          lv("essay-7", 7, "ਲੇਖ ਰਚਨਾ ਅਤੇ ਸੰਵਾਦ ਰਚਨਾ", "Write an essay and a dialogue.", [P(7, "lekh-rachna"), P(7, "samvad-rachna")]),
          lv("essay-8", 8, "ਲੇਖ ਰਚਨਾ (ਜਮਾਤ 8)", "Write an essay with points and a conclusion.", [P(8, "lekh-rachna")]),
          lv("essay-9", 9, "ਕਹਾਣੀ ਰਚਨਾ (ਜਮਾਤ 9)", "Write a story with a lesson.", [P(9, "kahani-rachna")]),
          lv("essay-10", 10, "ਲੇਖ ਰਚਨਾ (ਜਮਾਤ 10)", "Write a longer essay with an outline.", [P(10, "lekh-rachna")]),
          lv("essay-11", 11, "ਲੇਖ ਰਚਨਾ (ਜਮਾਤ 11)", "Write an essay in the board's style.", [P(11, "lekh-rachna")]),
          lv("essay-12", 12, "ਰਿਪੋਰਟ ਲਿਖਣਾ", "Write a news report with the main facts.", [P(12, "report-likhna")])
        ]
      },
      // ───────────── Summary, translation, advertisements ─────────────
      {
        id: "summary-translation", title: "Summary, translation and advertisements", titleLocal: "ਸੰਖੇਪ ਰਚਨਾ, ਅਨੁਵਾਦ ਅਤੇ ਇਸ਼ਤਿਹਾਰ", icon: "⇄",
        summary: "Shorten a passage, translate English into Punjabi, and write notices and invitations.",
        levels: [
          lv("summary-10", 10, "ਸੰਖੇਪ ਰਚਨਾ", "Shorten a passage to one third and give it a title.", [P(10, "sankhep-rachna")]),
          lv("summary-11", 11, "ਸੰਖੇਪ ਰਚਨਾ (ਜਮਾਤ 11)", "Summarise a passage in the board's style.", [P(11, "sankhep-rachna")]),
          lv("summary-11-anuvad", 11, "ਅੰਗਰੇਜ਼ੀ ਤੋਂ ਪੰਜਾਬੀ ਵਿੱਚ ਅਨੁਵਾਦ", "Translate simple English passages into Punjabi.", [P(11, "anuvad-ang-pan")]),
          lv("summary-11-ishtihar", 11, "ਇਸ਼ਤਿਹਾਰ ਅਤੇ ਸੱਦਾ-ਪੱਤਰ", "Write an advertisement and an invitation.", [P(11, "ishtihar-sadda-patar")]),
          lv("summary-12", 12, "ਸੰਖੇਪ ਰਚਨਾ (ਜਮਾਤ 12)", "Summarise a passage in the board's style.", [P(12, "sankhep-rachna")]),
          lv("summary-12-anuvad", 12, "ਅਨੁਵਾਦ: ਅੰਗਰੇਜ਼ੀ ਤੋਂ ਪੰਜਾਬੀ", "Translate English passages into correct Punjabi.", [P(12, "anuvaad")])
        ]
      }
    ]
  });
})();
