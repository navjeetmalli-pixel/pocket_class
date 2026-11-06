// Language grammar generators (English, Hindi, Punjabi): endless, always-correct practice made from WORD LISTS written below.
// Loaded after js/gen.js; registers into Gen with Gen.add(name, fn) and Gen.mapChapters(subject, { class: { chapterId: [names] } }).
// Every answer comes from a list entry written by hand (or from a rule the list is checked against in scripts/check-gen.js),
// so a question can only be wrong if a list entry is wrong. When in doubt a word was left out. Words with two accepted forms
// (mango/mangoes-mangos, bus/buses-busses, fish/fishes, learned/learnt, big/large as "the" opposite of small) are NOT used.
//
(() => {
// ============================================================================================================================
// TEACHER REVIEW: HINDI and PUNJABI word lists. Please check every entry; wrong or doubtful ones can simply be deleted.
// (English lists further down are checked the same way. Gen.lang.check() in scripts/check-gen.js looks for duplicates/conflicts.)
// ============================================================================================================================
// vachan: [ekvachan, bahuvachan, rule]   rule: e = आ -> े ;  iyan = ी -> ियाँ ;  iya = िया -> ियाँ ;  en = व्यंजन + ें ;  aen = आ + एँ
// ling:   [pullinga, striling]           vilom: [word, opposite]          paryay: { easy: [...], hard: [...] } words with the same meaning
const HI = {
  vachan: [
    ["लड़का", "लड़के", "e"], ["कमरा", "कमरे", "e"], ["घोड़ा", "घोड़े", "e"], ["बच्चा", "बच्चे", "e"], ["कुत्ता", "कुत्ते", "e"], ["केला", "केले", "e"],
    ["पत्ता", "पत्ते", "e"], ["तारा", "तारे", "e"], ["बेटा", "बेटे", "e"], ["चूहा", "चूहे", "e"], ["गमला", "गमले", "e"], ["तोता", "तोते", "e"],
    ["पंखा", "पंखे", "e"], ["कपड़ा", "कपड़े", "e"], ["रास्ता", "रास्ते", "e"], ["गधा", "गधे", "e"], ["बकरा", "बकरे", "e"], ["सपना", "सपने", "e"],
    ["लड़की", "लड़कियाँ", "iyan"], ["टोपी", "टोपियाँ", "iyan"], ["रोटी", "रोटियाँ", "iyan"], ["नदी", "नदियाँ", "iyan"], ["घड़ी", "घड़ियाँ", "iyan"],
    ["कुर्सी", "कुर्सियाँ", "iyan"], ["थाली", "थालियाँ", "iyan"], ["तितली", "तितलियाँ", "iyan"], ["मछली", "मछलियाँ", "iyan"], ["अलमारी", "अलमारियाँ", "iyan"],
    ["चिड़िया", "चिड़ियाँ", "iya"], ["गुड़िया", "गुड़ियाँ", "iya"], ["डिबिया", "डिबियाँ", "iya"], ["चुहिया", "चुहियाँ", "iya"],
    ["किताब", "किताबें", "en"], ["बात", "बातें", "en"], ["रात", "रातें", "en"], ["आँख", "आँखें", "en"], ["सड़क", "सड़कें", "en"], ["मेज़", "मेज़ें", "en"],
    ["भेड़", "भेड़ें", "en"], ["दीवार", "दीवारें", "en"], ["पुस्तक", "पुस्तकें", "en"], ["बहन", "बहनें", "en"], ["लकीर", "लकीरें", "en"],
    ["माला", "मालाएँ", "aen"], ["कविता", "कविताएँ", "aen"], ["कथा", "कथाएँ", "aen"], ["लता", "लताएँ", "aen"], ["भाषा", "भाषाएँ", "aen"],
    ["शाखा", "शाखाएँ", "aen"], ["कक्षा", "कक्षाएँ", "aen"], ["दिशा", "दिशाएँ", "aen"], ["सभा", "सभाएँ", "aen"], ["गुफा", "गुफाएँ", "aen"], ["पत्रिका", "पत्रिकाएँ", "aen"],
  ],
  ling: [
    ["लड़का", "लड़की"], ["शेर", "शेरनी"], ["राजा", "रानी"], ["नौकर", "नौकरानी"], ["बेटा", "बेटी"], ["भाई", "बहन"], ["पिता", "माता"], ["दादा", "दादी"],
    ["नाना", "नानी"], ["चाचा", "चाची"], ["मामा", "मामी"], ["बंदर", "बंदरिया"], ["हाथी", "हथिनी"], ["मोर", "मोरनी"], ["घोड़ा", "घोड़ी"], ["बकरा", "बकरी"],
    ["कुत्ता", "कुतिया"], ["बच्चा", "बच्ची"], ["पति", "पत्नी"], ["छात्र", "छात्रा"], ["अध्यापक", "अध्यापिका"], ["सेवक", "सेविका"],
    ["लेखक", "लेखिका"], ["गायक", "गायिका"], ["धोबी", "धोबिन"], ["माली", "मालिन"], ["सेठ", "सेठानी"], ["राजकुमार", "राजकुमारी"], ["श्रीमान", "श्रीमती"],
  ],
  vilom: {
    easy: [
      ["दिन", "रात"], ["ऊपर", "नीचे"], ["अच्छा", "बुरा"], ["बड़ा", "छोटा"], ["गर्म", "ठंडा"], ["सुबह", "शाम"], ["आना", "जाना"], ["हँसना", "रोना"],
      ["सच", "झूठ"], ["सुख", "दुःख"], ["दोस्त", "दुश्मन"], ["मीठा", "कड़वा"], ["मोटा", "पतला"], ["नया", "पुराना"], ["सस्ता", "महँगा"],
      ["अंदर", "बाहर"], ["आगे", "पीछे"], ["दूर", "पास"], ["सीधा", "उल्टा"], ["खुला", "बंद"], ["जीत", "हार"], ["देना", "लेना"], ["उठना", "बैठना"],
      ["जागना", "सोना"], ["खरीदना", "बेचना"], ["साफ़", "गंदा"], ["तेज़", "धीमा"],
    ],
    hard: [
      ["ज्ञान", "अज्ञान"], ["लाभ", "हानि"], ["आरंभ", "अंत"], ["जन्म", "मृत्यु"], ["सफल", "असफल"], ["आशा", "निराशा"], ["सजीव", "निर्जीव"],
      ["स्वतंत्र", "परतंत्र"], ["प्रश्न", "उत्तर"], ["वीर", "कायर"], ["मान", "अपमान"], ["पाप", "पुण्य"], ["सुंदर", "कुरूप"], ["धनी", "निर्धन"],
      ["स्वर्ग", "नरक"], ["प्रकाश", "अंधकार"], ["उदय", "अस्त"], ["स्वीकार", "अस्वीकार"], ["उपकार", "अपकार"],
    ],
  },
  paryay: {
    easy: [
      ["जल", "पानी", "नीर"], ["सूरज", "सूर्य"], ["चाँद", "चंद्रमा"], ["आग", "अग्नि"], ["घर", "मकान"], ["फूल", "पुष्प"], ["पेड़", "वृक्ष"], ["आकाश", "गगन"],
      ["धरती", "पृथ्वी"], ["हवा", "पवन"], ["समुद्र", "सागर"], ["नदी", "सरिता"], ["पहाड़", "पर्वत"], ["माँ", "माता"], ["हाथ", "हस्त"], ["मित्र", "दोस्त"],
      ["आँख", "नेत्र"], ["शेर", "सिंह"], ["हाथी", "गज"], ["साँप", "सर्प"], ["बंदर", "वानर"], ["बादल", "मेघ"], ["सोना", "स्वर्ण"], ["राजा", "नरेश"],
      ["रात", "रात्रि"], ["सुबह", "सवेरा"],
    ],
    hard: [
      ["सूरज", "रवि", "दिनकर", "भास्कर"], ["चाँद", "शशि", "सुधाकर"], ["आग", "ज्वाला", "पावक"], ["घर", "गृह", "आलय", "निवास"], ["फूल", "सुमन", "कुसुम", "प्रसून"],
      ["पेड़", "तरु", "पादप", "विटप"], ["आकाश", "नभ", "अंबर", "व्योम"], ["धरती", "भूमि", "धरा", "वसुधा"], ["हवा", "वायु", "समीर", "अनिल"],
      ["समुद्र", "सिंधु", "जलधि", "उदधि"], ["नदी", "तटिनी"], ["पहाड़", "गिरि", "शैल"], ["माँ", "जननी"], ["पिता", "जनक", "तात"], ["राजा", "नृप", "भूप", "महीप"],
      ["रात", "रजनी", "निशा", "यामिनी"], ["सुबह", "प्रभात", "भोर", "प्रातः"], ["मित्र", "सखा", "साथी"], ["स्त्री", "नारी", "महिला"], ["आँख", "नयन", "लोचन"],
      ["घोड़ा", "अश्व", "तुरंग", "हय"], ["हाथी", "कुंजर", "हस्ती"], ["साँप", "भुजंग"], ["बंदर", "कपि", "मर्कट"], ["बादल", "जलद", "घन"], ["कमल", "पंकज", "जलज", "नीरज"],
    ],
  },
};
// (the "easy" and "hard" paryay lists are separate groups per word; a word never appears in two groups of the same list)

// vachan: [ekvachan, bahuvachan, rule]   rule: e = ਆ -> ੇ ;  iaan = ੀ + ਆਂ ;  aan = ਵਿਅੰਜਨ + ਾਂ
// ling:   [pulling, istri-ling]          virodhi: [word, opposite]
const PA = {
  vachan: [
    ["ਮੁੰਡਾ", "ਮੁੰਡੇ", "e"], ["ਘੋੜਾ", "ਘੋੜੇ", "e"], ["ਕੁੱਤਾ", "ਕੁੱਤੇ", "e"], ["ਬੱਚਾ", "ਬੱਚੇ", "e"], ["ਕਮਰਾ", "ਕਮਰੇ", "e"], ["ਪੱਤਾ", "ਪੱਤੇ", "e"],
    ["ਕੇਲਾ", "ਕੇਲੇ", "e"], ["ਤਾਰਾ", "ਤਾਰੇ", "e"], ["ਚੂਹਾ", "ਚੂਹੇ", "e"], ["ਗਮਲਾ", "ਗਮਲੇ", "e"], ["ਤੋਤਾ", "ਤੋਤੇ", "e"], ["ਪੱਖਾ", "ਪੱਖੇ", "e"],
    ["ਕੱਪੜਾ", "ਕੱਪੜੇ", "e"], ["ਰਸਤਾ", "ਰਸਤੇ", "e"], ["ਗਧਾ", "ਗਧੇ", "e"], ["ਬੱਕਰਾ", "ਬੱਕਰੇ", "e"], ["ਚਮਚਾ", "ਚਮਚੇ", "e"], ["ਡੱਬਾ", "ਡੱਬੇ", "e"],
    ["ਖਿਡੌਣਾ", "ਖਿਡੌਣੇ", "e"], ["ਸੁਪਨਾ", "ਸੁਪਨੇ", "e"], ["ਗੁਬਾਰਾ", "ਗੁਬਾਰੇ", "e"],
    ["ਕੁੜੀ", "ਕੁੜੀਆਂ", "iaan"], ["ਚਿੜੀ", "ਚਿੜੀਆਂ", "iaan"], ["ਗੁੱਡੀ", "ਗੁੱਡੀਆਂ", "iaan"], ["ਰੋਟੀ", "ਰੋਟੀਆਂ", "iaan"], ["ਨਦੀ", "ਨਦੀਆਂ", "iaan"],
    ["ਘੜੀ", "ਘੜੀਆਂ", "iaan"], ["ਕੁਰਸੀ", "ਕੁਰਸੀਆਂ", "iaan"], ["ਮੱਛੀ", "ਮੱਛੀਆਂ", "iaan"], ["ਤਿਤਲੀ", "ਤਿਤਲੀਆਂ", "iaan"], ["ਥਾਲੀ", "ਥਾਲੀਆਂ", "iaan"],
    ["ਬਿੱਲੀ", "ਬਿੱਲੀਆਂ", "iaan"], ["ਟੋਪੀ", "ਟੋਪੀਆਂ", "iaan"], ["ਧੀ", "ਧੀਆਂ", "iaan"], ["ਗੱਡੀ", "ਗੱਡੀਆਂ", "iaan"],
    ["ਕਿਤਾਬ", "ਕਿਤਾਬਾਂ", "aan"], ["ਕਲਮ", "ਕਲਮਾਂ", "aan"], ["ਕੰਧ", "ਕੰਧਾਂ", "aan"], ["ਸੜਕ", "ਸੜਕਾਂ", "aan"], ["ਅੱਖ", "ਅੱਖਾਂ", "aan"], ["ਬਾਂਹ", "ਬਾਂਹਾਂ", "aan"],
    ["ਰਾਤ", "ਰਾਤਾਂ", "aan"], ["ਗੱਲ", "ਗੱਲਾਂ", "aan"], ["ਭੈਣ", "ਭੈਣਾਂ", "aan"], ["ਭੇਡ", "ਭੇਡਾਂ", "aan"], ["ਬੱਤਖ", "ਬੱਤਖਾਂ", "aan"], ["ਪੁਸਤਕ", "ਪੁਸਤਕਾਂ", "aan"],
  ],
  ling: [
    ["ਮੁੰਡਾ", "ਕੁੜੀ"], ["ਰਾਜਾ", "ਰਾਣੀ"], ["ਸ਼ੇਰ", "ਸ਼ੇਰਨੀ"], ["ਪਿਤਾ", "ਮਾਤਾ"], ["ਭਰਾ", "ਭੈਣ"], ["ਦਾਦਾ", "ਦਾਦੀ"], ["ਨਾਨਾ", "ਨਾਨੀ"],
    ["ਚਾਚਾ", "ਚਾਚੀ"], ["ਮਾਮਾ", "ਮਾਮੀ"], ["ਬੱਚਾ", "ਬੱਚੀ"], ["ਘੋੜਾ", "ਘੋੜੀ"], ["ਬੱਕਰਾ", "ਬੱਕਰੀ"], ["ਕੁੱਤਾ", "ਕੁੱਤੀ"], ["ਮੋਰ", "ਮੋਰਨੀ"], ["ਪਤੀ", "ਪਤਨੀ"],
    ["ਨੌਕਰ", "ਨੌਕਰਾਣੀ"], ["ਧੋਬੀ", "ਧੋਬਣ"], ["ਮਾਲੀ", "ਮਾਲਣ"], ["ਬਲਦ", "ਗਾਂ"],
  ],
  virodhi: {
    easy: [
      ["ਦਿਨ", "ਰਾਤ"], ["ਉੱਪਰ", "ਹੇਠਾਂ"], ["ਚੰਗਾ", "ਮਾੜਾ"], ["ਵੱਡਾ", "ਛੋਟਾ"], ["ਗਰਮ", "ਠੰਢਾ"], ["ਸਵੇਰ", "ਸ਼ਾਮ"], ["ਸੱਚ", "ਝੂਠ"], ["ਸੁੱਖ", "ਦੁੱਖ"],
      ["ਮਿੱਤਰ", "ਦੁਸ਼ਮਣ"], ["ਮਿੱਠਾ", "ਕੌੜਾ"], ["ਨਵਾਂ", "ਪੁਰਾਣਾ"], ["ਸਸਤਾ", "ਮਹਿੰਗਾ"], ["ਅੰਦਰ", "ਬਾਹਰ"], ["ਅੱਗੇ", "ਪਿੱਛੇ"], ["ਦੂਰ", "ਨੇੜੇ"],
      ["ਜਿੱਤ", "ਹਾਰ"], ["ਹੱਸਣਾ", "ਰੋਣਾ"], ["ਆਉਣਾ", "ਜਾਣਾ"], ["ਮੋਟਾ", "ਪਤਲਾ"], ["ਲੈਣਾ", "ਦੇਣਾ"], ["ਜਾਗਣਾ", "ਸੌਣਾ"], ["ਅਮੀਰ", "ਗ਼ਰੀਬ"], ["ਸਾਫ਼", "ਗੰਦਾ"],
    ],
    hard: [
      ["ਜਨਮ", "ਮੌਤ"], ["ਰੌਸ਼ਨੀ", "ਹਨੇਰਾ"], ["ਸਿੱਧਾ", "ਪੁੱਠਾ"], ["ਹਾਂ", "ਨਾਂਹ"], ["ਤੇਜ਼", "ਹੌਲੀ"], ["ਭਰਿਆ", "ਖਾਲੀ"],
    ],
  },
};

// ============================================================================================================================
// ENGLISH word lists
// ============================================================================================================================
// plurals: [singular, plural, rule]   rules: s es ies ys ves oes os irr zero. Level 1 (Class 2+) / level 2 (Class 3+).
const E_PLURAL_1 = [
  ...["cat", "dog", "book", "pen", "bag", "tree", "ball", "hand", "door", "table", "chair", "flower", "bird", "apple", "cup", "hat", "car", "egg", "star", "kite", "spoon", "shirt", "boat", "pencil"].map((w) => [w, w + "s", "s"]),
  ["box", "boxes", "es"], ["fox", "foxes", "es"], ["dress", "dresses", "es"], ["watch", "watches", "es"], ["brush", "brushes", "es"], ["bench", "benches", "es"],
  ["dish", "dishes", "es"], ["glass", "glasses", "es"], ["church", "churches", "es"], ["class", "classes", "es"], ["sandwich", "sandwiches", "es"], ["peach", "peaches", "es"],
  ["baby", "babies", "ies"], ["city", "cities", "ies"], ["lady", "ladies", "ies"], ["story", "stories", "ies"], ["puppy", "puppies", "ies"], ["fly", "flies", "ies"],
  ["party", "parties", "ies"], ["berry", "berries", "ies"], ["family", "families", "ies"], ["country", "countries", "ies"], ["cherry", "cherries", "ies"], ["pony", "ponies", "ies"],
  ["boy", "boys", "ys"], ["toy", "toys", "ys"], ["day", "days", "ys"], ["key", "keys", "ys"], ["monkey", "monkeys", "ys"], ["donkey", "donkeys", "ys"], ["tray", "trays", "ys"], ["holiday", "holidays", "ys"],
  ["child", "children", "irr", ["childs", "childes", "childrens"]], ["man", "men", "irr", ["mans", "manes", "mens"]], ["woman", "women", "irr", ["womans", "womanes", "womens"]],
  ["foot", "feet", "irr", ["foots", "feets", "footes"]], ["tooth", "teeth", "irr", ["tooths", "teeths", "toothes"]], ["mouse", "mice", "irr", ["mouses", "mices", "mousen"]],
];
const E_PLURAL_2 = [
  ["leaf", "leaves", "ves"], ["knife", "knives", "ves"], ["wolf", "wolves", "ves"], ["shelf", "shelves", "ves"], ["wife", "wives", "ves"], ["life", "lives", "ves"],
  ["thief", "thieves", "ves"], ["loaf", "loaves", "ves"], ["calf", "calves", "ves"], ["half", "halves", "ves"],
  ["potato", "potatoes", "oes"], ["tomato", "tomatoes", "oes"], ["hero", "heroes", "oes"], ["echo", "echoes", "oes"],
  ["piano", "pianos", "os"], ["photo", "photos", "os"], ["radio", "radios", "os"], ["zoo", "zoos", "os"], ["video", "videos", "os"], ["kangaroo", "kangaroos", "os"],
  ["valley", "valleys", "ys"], ["turkey", "turkeys", "ys"], ["journey", "journeys", "ys"], ["chimney", "chimneys", "ys"],
  ["diary", "diaries", "ies"], ["hobby", "hobbies", "ies"], ["library", "libraries", "ies"], ["bunny", "bunnies", "ies"],
  ["goose", "geese", "irr", ["gooses", "geeses", "goosen"]], ["ox", "oxen", "irr", ["oxes", "oxens", "oxs"]],
  ["sheep", "sheep", "zero", ["sheeps", "sheepes", "sheepen"]], ["deer", "deer", "zero", ["deers", "deeres", "deeren"]],
];
const PLURAL_STEP = {
  s: (a, b) => `Most nouns just add -s: ${a} → ${b}.`,
  es: (a, b) => `Nouns ending in s, x, ch, sh or z add -es: ${a} → ${b}.`,
  ies: (a, b) => `Nouns ending in a consonant + y: change the y to i and add -es: ${a} → ${b}.`,
  ys: (a, b) => `Nouns ending in a vowel + y just add -s: ${a} → ${b}.`,
  ves: (a, b) => `Many nouns ending in f or fe change it to v and add -es: ${a} → ${b}.`,
  oes: (a, b) => `A few nouns ending in o add -es: ${a} → ${b}.`,
  os: (a, b) => `Most nouns ending in o just add -s: ${a} → ${b}.`,
  irr: (a, b) => `This is an irregular plural. Learn it by heart: ${a} → ${b}.`,
  zero: (a, b) => `Some words do not change in the plural: ${a} → ${b}.`,
};

// a / an. Words are chosen so the SOUND decides and there is one answer. The tricky list: silent h, or u/eu/o that sounds like "yoo" or "wun".
const AN_1 = ["apple", "egg", "ink", "orange", "umbrella", "elephant", "ant", "owl", "ear", "eye", "arm", "onion", "uncle", "aunt", "island", "axe", "ostrich", "eagle", "engine", "insect", "artist", "idea", "igloo", "inch", "animal", "ambulance", "actor", "aeroplane"];
const A_1 = ["book", "cat", "dog", "boy", "girl", "tree", "house", "table", "ball", "pen", "bag", "car", "cow", "hen", "kite", "bus", "chair", "door", "flower", "horse", "hat", "monkey", "pencil", "lion", "tiger", "sun", "cup", "frog", "king", "doll"];
const AN_2 = ["hour", "honour", "heir", "honest boy", "honest man", "umbrella", "uncle", "orange", "elephant", "ugly duckling", "idea", "egg", "apple", "ink", "island", "owl"];
const A_2 = ["university", "uniform", "unit", "union", "user", "unicorn", "European", "useful tool", "one-rupee coin", "unique idea", "utensil", "universe", "ewe", "euro", "book", "horse", "house"];
const A_2_OK = A_2;
// "What a ___ !" / "such a ___": the adjective after the blank decides a / an. Two sets so the words go together sensibly.
const W_PAT = [
  { a: ["beautiful", "big", "small", "nice", "good", "lovely", "pretty", "useful", "sweet", "funny"], an: ["old", "interesting", "easy", "amazing", "awful", "excellent", "unusual", "important"], nouns: ["flower", "house", "song", "story", "picture", "game", "idea", "toy", "tree", "day"] },
  { a: ["brave", "clever", "funny", "kind", "tall", "young", "good", "nice"], an: ["honest", "angry", "old", "ugly", "interesting", "important"], nouns: ["boy", "girl", "man", "woman", "doctor", "teacher"] },
];
// "the" with one thing in the world / superlatives / rivers and mountain groups; "no article" with names, languages, games. The three wrong
// choices (a, an and the other of the, no article) never fit.
const THE_SENT = [
  "___ sun rises in the east.", "___ moon shines at night.", "___ earth moves round the sun.", "___ sky is blue today.", "___ Ganga is a holy river.",
  "___ Himalayas are in the north of India.", "She is ___ best student in the class.", "Mount Everest is ___ highest mountain in the world.", "He plays ___ guitar very well.",
  "___ Taj Mahal is in Agra.", "This is ___ longest river in India.", "___ Indian Ocean is south of India.", "___ Sutlej flows through Punjab.", "It is ___ first day of school.",
];
const NONE_SENT = [
  "___ Delhi is the capital of India.", "She speaks ___ Hindi at home.", "We play ___ cricket every evening.", "___ India is a big country.", "He lives in ___ Amritsar.",
  "___ Punjab is a state in India.", "They speak ___ Punjabi in the village.", "My friend plays ___ hockey.", "___ Monday is the first day of school.",
];

// opposites: [word, opposite, kind]  kind a = describing word, v = action word, n = naming word, p = place/time word.
// No word may appear twice (a word with two possible opposites would make the answer unclear): checked in check-gen.
const E_OPP_1 = [
  ["hot", "cold", "a"], ["big", "small", "a"], ["tall", "short", "a"], ["fast", "slow", "a"], ["happy", "sad", "a"], ["clean", "dirty", "a"], ["full", "empty", "a"],
  ["wet", "dry", "a"], ["old", "young", "a"], ["good", "bad", "a"], ["rich", "poor", "a"], ["strong", "weak", "a"], ["thick", "thin", "a"], ["loud", "quiet", "a"],
  ["black", "white", "a"], ["same", "different", "a"], ["alive", "dead", "a"],
  ["come", "go", "v"], ["open", "shut", "v"], ["sit", "stand", "v"], ["laugh", "cry", "v"], ["buy", "sell", "v"], ["push", "pull", "v"], ["give", "take", "v"], ["win", "lose", "v"], ["love", "hate", "v"],
  ["day", "night", "n"], ["summer", "winter", "n"], ["north", "south", "n"], ["east", "west", "n"], ["top", "bottom", "n"], ["front", "back", "n"],
  ["up", "down", "p"], ["in", "out", "p"], ["on", "off", "p"], ["near", "far", "p"], ["early", "late", "p"], ["before", "after", "p"], ["always", "never", "p"], ["here", "there", "p"],
  ["first", "last", "p"], ["many", "few", "p"], ["left", "right", "p"],
];
const E_OPP_2 = [
  ["brave", "cowardly", "a"], ["kind", "cruel", "a"], ["polite", "rude", "a"], ["honest", "dishonest", "a"], ["deep", "shallow", "a"], ["wide", "narrow", "a"], ["sharp", "blunt", "a"],
  ["smooth", "rough", "a"], ["cheap", "expensive", "a"], ["easy", "difficult", "a"], ["true", "false", "a"], ["safe", "dangerous", "a"], ["generous", "selfish", "a"],
  ["permanent", "temporary", "a"], ["visible", "invisible", "a"], ["possible", "impossible", "a"], ["ancient", "modern", "a"], ["guilty", "innocent", "a"],
  ["accept", "refuse", "v"], ["arrive", "depart", "v"], ["increase", "decrease", "v"], ["praise", "blame", "v"], ["remember", "forget", "v"], ["borrow", "lend", "v"], ["attack", "defend", "v"], ["begin", "end", "v"],
  ["victory", "defeat", "n"], ["success", "failure", "n"], ["peace", "war", "n"], ["freedom", "slavery", "n"],
  ["include", "exclude", "v"], ["major", "minor", "a"], ["optimist", "pessimist", "n"],
];

// verbs. REG: [base, past] written out; IRR: [base, past, past participle]. (learn/dream/spell and other words with two accepted
// past forms, and "read" (same spelling) are not used.)
const E_REG = [
  ["walk", "walked"], ["jump", "jumped"], ["play", "played"], ["talk", "talked"], ["cook", "cooked"], ["clean", "cleaned"], ["help", "helped"], ["wash", "washed"], ["open", "opened"],
  ["call", "called"], ["want", "wanted"], ["look", "looked"], ["climb", "climbed"], ["wait", "waited"], ["paint", "painted"], ["start", "started"], ["ask", "asked"],
  ["watch", "watched"], ["laugh", "laughed"], ["enjoy", "enjoyed"], ["stay", "stayed"], ["like", "liked"], ["love", "loved"], ["live", "lived"], ["dance", "danced"],
  ["smile", "smiled"], ["bake", "baked"], ["close", "closed"], ["use", "used"], ["move", "moved"], ["arrive", "arrived"], ["study", "studied"], ["try", "tried"],
  ["cry", "cried"], ["carry", "carried"], ["hurry", "hurried"], ["copy", "copied"], ["worry", "worried"], ["stop", "stopped"], ["plan", "planned"], ["hop", "hopped"],
  ["clap", "clapped"], ["drop", "dropped"], ["skip", "skipped"], ["hug", "hugged"], ["shop", "shopped"],
];
const E_IRR = [
  ["go", "went", "gone"], ["eat", "ate", "eaten"], ["see", "saw", "seen"], ["run", "ran", "run"], ["come", "came", "come"], ["take", "took", "taken"], ["give", "gave", "given"],
  ["write", "wrote", "written"], ["sit", "sat", "sat"], ["drink", "drank", "drunk"], ["sing", "sang", "sung"], ["swim", "swam", "swum"], 
  ["begin", "began", "begun"], ["know", "knew", "known"], ["grow", "grew", "grown"], ["throw", "threw", "thrown"], ["fly", "flew", "flown"], ["draw", "drew", "drawn"],
  ["blow", "blew", "blown"], ["buy", "bought", "bought"], ["bring", "brought", "brought"], ["catch", "caught", "caught"], ["teach", "taught", "taught"], ["think", "thought", "thought"],
  ["make", "made", "made"], ["say", "said", "said"], ["tell", "told", "told"], ["find", "found", "found"], ["get", "got", "got"], ["have", "had", "had"], ["do", "did", "done"],
  ["sleep", "slept", "slept"], ["keep", "kept", "kept"], ["feel", "felt", "felt"], ["leave", "left", "left"], ["meet", "met", "met"], ["sell", "sold", "sold"], ["hear", "heard", "heard"],
  ["stand", "stood", "stood"], ["win", "won", "won"], ["lose", "lost", "lost"], ["send", "sent", "sent"], ["build", "built", "built"], ["break", "broke", "broken"],
  ["speak", "spoke", "spoken"], ["drive", "drove", "driven"], ["ride", "rode", "ridden"], ["fall", "fell", "fallen"], ["forget", "forgot", "forgotten"], ["hide", "hid", "hidden"],
  ["sweep", "swept", "swept"], ["wear", "wore", "worn"], ["put", "put", "put"], ["cut", "cut", "cut"], ["hit", "hit", "hit"], ["let", "let", "let"], ["shut", "shut", "shut"],
  ["bite", "bit", "bitten"], ["dig", "dug", "dug"], ["hold", "held", "held"], ["choose", "chose", "chosen"], ["steal", "stole", "stolen"], ["freeze", "froze", "frozen"],
  ["shake", "shook", "shaken"], ["tear", "tore", "torn"],
];
// Sentence verbs (present with every day, past with yesterday, ... ). `ing: false` = not used with is/are + -ing.
const E_VS = [
  { b: "go", o: "to school" }, { b: "eat", o: "rice" }, { b: "see", o: "a bird" }, { b: "write", o: "a letter" }, { b: "drink", o: "milk" }, { b: "take", o: "a bath" },
  { b: "give", o: "food to the cat" }, { b: "sing", o: "a song" }, { b: "swim", o: "in the river" }, { b: "speak", o: "Punjabi" }, { b: "draw", o: "a picture" },
  { b: "ride", o: "a bicycle" }, { b: "know", o: "the answer", ing: false, p: "" }, { b: "grow", o: "tomatoes" }, { b: "fly", o: "a kite" },
];
const SUBJ_3 = ["He", "She", "My mother", "The boy", "The girl", "Our teacher", "My brother"];
const SUBJ_P = ["I", "We", "They", "You", "The children", "My friends"];

// comparison: [word, comparative, superlative, kind, isPerson]
const E_CMP = [
  ...[["tall", 1], ["short", 1], ["strong", 1], ["weak", 1], ["young", 1], ["old", 1], ["fast", 1], ["small", 0], ["long", 0], ["cold", 0], ["high", 0], ["low", 0],
    ["deep", 0], ["great", 0], ["near", 0], ["cheap", 0], ["thick", 0], ["hard", 0]].map(([w, p]) => [w, w + "er", w + "est", "er", !!p]),
  ...[["large", 0], ["nice", 0], ["brave", 1], ["safe", 0], ["wide", 0]].map(([w, p]) => [w, w + "r", w + "st", "r", !!p]),
  ["big", "bigger", "biggest", "dbl", 0], ["hot", "hotter", "hottest", "dbl", 0], ["thin", "thinner", "thinnest", "dbl", 0], ["fat", "fatter", "fattest", "dbl", 0], ["sad", "sadder", "saddest", "dbl", 1],
  ["wet", "wetter", "wettest", "dbl", 0], ["red", "redder", "reddest", "dbl", 0], ["flat", "flatter", "flattest", "dbl", 0],
  ["happy", "happier", "happiest", "ier", 1], ["easy", "easier", "easiest", "ier", 0], ["funny", "funnier", "funniest", "ier", 1], ["heavy", "heavier", "heaviest", "ier", 0],
  ["busy", "busier", "busiest", "ier", 1], ["lazy", "lazier", "laziest", "ier", 1], ["pretty", "prettier", "prettiest", "ier", 0], ["early", "earlier", "earliest", "ier", 0],
  ["dirty", "dirtier", "dirtiest", "ier", 0], ["noisy", "noisier", "noisiest", "ier", 1], ["healthy", "healthier", "healthiest", "ier", 1], ["lucky", "luckier", "luckiest", "ier", 1],
  ["tasty", "tastier", "tastiest", "ier", 0], ["angry", "angrier", "angriest", "ier", 1], ["friendly", "friendlier", "friendliest", "ier", 1],
  ...[["beautiful", 0], ["difficult", 0], ["important", 0], ["interesting", 0], ["careful", 1], ["expensive", 0], ["intelligent", 1], ["famous", 1], ["dangerous", 0], ["comfortable", 0],
    ["useful", 0], ["delicious", 0], ["wonderful", 0], ["popular", 1]].map(([w, p]) => [w, "more " + w, "most " + w, "more", !!p]),
  ["good", "better", "best", "irr", 1], ["bad", "worse", "worst", "irr", 0], ["many", "more", "most", "irr", 0],
];
const NAMES_P = ["Ravi", "Amit", "Meena", "Sita", "Gurpreet", "Simran", "Arjun", "Kabir"];

// gender pairs [masculine, feminine]; no word twice.
const E_GEN = [
  ["boy", "girl"], ["man", "woman"], ["king", "queen"], ["father", "mother"], ["brother", "sister"], ["son", "daughter"], ["uncle", "aunt"], ["grandfather", "grandmother"],
  ["husband", "wife"], ["lion", "lioness"], ["tiger", "tigress"], ["horse", "mare"], ["bull", "cow"], ["cock", "hen"], ["prince", "princess"], ["actor", "actress"],
  ["host", "hostess"], ["waiter", "waitress"], ["god", "goddess"], ["nephew", "niece"], ["gentleman", "lady"], ["monk", "nun"], ["wizard", "witch"], ["bridegroom", "bride"],
  ["emperor", "empress"], ["hero", "heroine"], ["peacock", "peahen"], ["ram", "ewe"], ["fox", "vixen"], ["sir", "madam"], ["steward", "stewardess"],
];

// synonyms: groups of words with the same meaning. easy: Classes 4-6, hard: Classes 7-10. Each word is in one group only.
const E_SYN = [
  { easy: ["big", "large"], hard: ["huge", "enormous", "gigantic"] }, { easy: ["small", "little"], hard: ["tiny"] }, { easy: ["happy", "glad"], hard: ["joyful", "cheerful", "delighted"] },
  { easy: ["sad", "unhappy"], hard: ["sorrowful", "miserable"] }, { easy: ["begin", "start"], hard: ["commence"] }, { easy: ["end", "finish"], hard: ["conclude"] },
  { easy: ["quick", "fast"], hard: ["rapid", "swift", "speedy"] }, { easy: ["clever", "smart"], hard: ["intelligent", "brilliant"] }, { easy: ["beautiful", "pretty"], hard: ["lovely", "attractive", "gorgeous"] },
  { easy: ["brave", "bold"], hard: ["courageous", "fearless"] }, { easy: ["rich", "wealthy"], hard: ["prosperous", "affluent"] }, { easy: ["buy", "purchase"], hard: [] },
  { easy: ["choose", "pick"], hard: ["select"] }, { easy: ["mistake", "error"], hard: ["fault", "blunder"] }, { easy: ["angry"], hard: ["furious", "irate", "enraged"] },
  { easy: ["student", "pupil"], hard: ["learner"] }, { easy: ["road", "street"], hard: [] }, { easy: ["forest", "jungle", "woods"], hard: [] }, { easy: ["enemy"], hard: ["foe", "adversary"] },
  { easy: ["friend", "pal"], hard: ["companion", "comrade"] }, { easy: ["tired", "weary"], hard: ["exhausted", "fatigued"] }, { easy: ["silent", "quiet"], hard: ["noiseless"] },
  { easy: ["strange", "odd"], hard: ["unusual", "peculiar", "bizarre"] }, { easy: ["help", "aid"], hard: ["assist"] }, { easy: ["strong", "powerful"], hard: ["mighty"] },
  { easy: ["weak"], hard: ["feeble", "frail"] }, { easy: ["difficult", "hard"], hard: [] }, { easy: ["easy", "simple"], hard: ["effortless"] }, { easy: ["talk", "speak"], hard: ["converse"] },
  { easy: ["afraid", "scared"], hard: ["frightened", "terrified"] }, { easy: ["reply", "answer"], hard: ["respond"] },
  { easy: ["throw", "toss"], hard: ["hurl"] }, { easy: ["shout", "yell"], hard: ["scream"] }, { easy: ["clothes"], hard: ["garments", "attire"] }, { easy: ["ill", "sick"], hard: ["unwell"] },
  { easy: ["rubbish", "garbage"], hard: ["trash"] }, { easy: ["fix", "repair", "mend"], hard: [] },
];

// nouns of each kind (Class 5+): proper, common, collective, abstract, material
const E_NK = {
  proper: ["Delhi", "Ravi", "India", "Ganga", "Punjab", "Amritsar", "Diwali", "Monday", "Everest", "Meera", "Sunday", "Asia"],
  common: ["boy", "river", "city", "teacher", "table", "mango", "school", "dog", "pen", "mountain", "country", "doctor"],
  collective: ["herd", "flock", "team", "crowd", "army", "bunch", "fleet", "pack"],
  abstract: ["honesty", "kindness", "love", "anger", "beauty", "freedom", "courage", "friendship", "truth", "happiness", "childhood", "bravery"],
  material: ["gold", "silver", "steel", "copper", "cotton", "wool", "silk", "leather", "plastic", "cement"],
};
const NK_LABEL = { proper: "Proper noun", common: "Common noun", collective: "Collective noun", abstract: "Abstract noun", material: "Material noun" };
const NK_WHY = {
  proper: (w) => `"${w}" is the special name of one particular person, place or thing, so it is a proper noun.`,
  common: (w) => `"${w}" is a name given to every person, place or thing of one kind, so it is a common noun.`,
  collective: (w) => `"${w}" names a group of people, animals or things together, so it is a collective noun.`,
  abstract: (w) => `"${w}" names a quality, feeling or idea that we cannot touch, so it is an abstract noun.`,
  material: (w) => `"${w}" names the stuff something is made of, so it is a material noun.`,
};

// prepositions: [sentence, right word, [3 wrong words], reason]; level 1 = simple everyday ones (Classes 2-4)
const E_PREP_1 = [
  ["The fish lives ___ water.", "in", ["on", "at", "to"], "A fish lives in water."],
  ["The cap is ___ my head.", "on", ["in", "at", "to"], "We wear a cap on the head."],
  ["The sun shines ___ the sky.", "in", ["on", "at", "to"], "We say in the sky."],
  ["My birthday is ___ March.", "in", ["on", "at", "to"], "Use in with months."],
  ["We have a holiday ___ Sunday.", "on", ["in", "at", "to"], "Use on with days."],
  ["School starts ___ 8 o'clock.", "at", ["in", "on", "to"], "Use at with clock times."],
  ["I go to school ___ bus.", "by", ["in", "on", "with"], "We say by bus when we name the way we travel."],
  ["She cut the apple ___ a knife.", "with", ["by", "in", "on"], "Use with for the tool we use."],
  ["We go to bed ___ night.", "at", ["in", "on", "to"], "We say at night."],
  ["The teacher wrote the answer ___ the blackboard.", "on", ["in", "to", "with"], "We write on the blackboard."],
  ["A picture is hanging ___ the wall.", "on", ["in", "with", "of"], "A picture hangs on the wall."],
  ["We eat our lunch ___ noon.", "at", ["in", "on", "to"], "We say at noon."],
  ["I was born ___ Monday.", "on", ["in", "at", "to"], "Use on with days."],
  ["Rani lives ___ Delhi.", "in", ["on", "to", "by"], "Use in with a city."],
  ["The moon comes out ___ night.", "at", ["in", "on", "to"], "We say at night."],
];
const E_PREP_2 = [
  ["The Taj Mahal is ___ Agra.", "in", ["on", "to", "with"], "Use in with a city."],
  ["She was born ___ 2012.", "in", ["on", "at", "to"], "Use in with years."],
  ["Independence Day is ___ 15 August.", "on", ["in", "at", "to"], "Use on with a date."],
  ["It rains a lot ___ July.", "in", ["on", "at", "to"], "Use in with months."],
  ["He is afraid ___ dogs.", "of", ["from", "at", "with"], "We say afraid of."],
  ["She is fond ___ music.", "of", ["with", "in", "to"], "We say fond of."],
  ["The book was written ___ a famous author.", "by", ["with", "in", "to"], "Use by for the doer in a passive sentence."],
  ["He is waiting ___ the bus.", "for", ["to", "of", "with"], "We say wait for."],
  ["We have lived here ___ ten years.", "for", ["since", "from", "at"], "Use for with a length of time."],
  ["I have known her ___ 2015.", "since", ["for", "at", "to"], "Use since with a starting point."],
  ["Meena sat ___ Ravi and Sita.", "between", ["on", "at", "of"], "Use between for two people or things."],
  ["The birds sing ___ the morning.", "in", ["at", "on", "to"], "We say in the morning."],
  ["I play cricket ___ the evening.", "in", ["at", "on", "to"], "We say in the evening."],
  ["Mother is cooking ___ the kitchen.", "in", ["on", "with", "to"], "We cook in the kitchen."],
  ["She is interested ___ painting.", "in", ["at", "of", "on"], "We say interested in."],
  ["He is good ___ drawing.", "at", ["of", "on", "with"], "We say good at (a skill)."],
];

// sentence parts for naming the part of speech
const POS_ADJ = ["tall", "little", "brave", "clever", "hungry", "lazy", "small", "kind", "happy", "old", "strong", "sleepy", "noisy", "tiny", "thirsty", "young", "naughty", "gentle"];
const POS_N1 = ["boy", "girl", "farmer", "teacher", "king", "doctor", "baker", "dog", "cat", "bird", "monkey", "cow", "horse", "child", "man", "woman", "tailor", "driver", "student", "nurse"];
const POS_V = ["see", "like", "find", "want", "take", "bring"];
const POS_N2 = ["apple", "ball", "mango", "kite", "book", "cake", "flower", "banana", "toy", "cap", "bag", "pencil"];
const POS_ADJ_OBJ = ["red", "big", "small", "new", "old", "tiny", "nice", "green", "yellow"];
const PRON = ["He", "She", "They", "We", "I"];

// he / she / it / they: noun phrase -> pronoun
const PRON_NP = [
  ["Ravi", "He"], ["Amit", "He"], ["My father", "He"], ["My brother", "He"], ["Meena", "She"], ["Sita", "She"], ["My mother", "She"], ["My sister", "She"],
  ["The book", "It"], ["The ball", "It"], ["The table", "It"], ["The kite", "It"], ["The tree", "It"], ["The books", "They"], ["The balls", "They"], ["Ravi and Meena", "They"], ["The girls", "They"], ["The boys", "They"],
];

// passive voice: [verb, past, participle, "object"]
const E_PASSIVE = [
  ["write", "wrote", "written", "a letter"], ["eat", "ate", "eaten", "an apple"], ["draw", "drew", "drawn", "a picture"], ["sing", "sang", "sung", "a song"],
  ["make", "made", "made", "a cake"], ["take", "took", "taken", "a photo"], ["break", "broke", "broken", "a glass"], ["see", "saw", "seen", "a bird"],
  ["buy", "bought", "bought", "a book"], ["open", "opened", "opened", "the door"], ["paint", "painted", "painted", "a wall"], ["clean", "cleaned", "cleaned", "the room"],
];
const PASS_SUBJ = ["Ravi", "Meena", "Amit", "Priya", "Mother", "Father", "The teacher"];

// ============================================================================================================================
// helpers
// ============================================================================================================================
const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);
// k distinct choices from a pool, never the answer
function take(R, pool, ans, k = 3) {
  const a = [...new Set(pool)].filter((x) => x !== ans);
  const out = [];
  while (out.length < k && a.length) out.push(a.splice(R.int(0, a.length - 1), 1)[0]);
  return out;
}
const isVowelStart = (w) => /^[aeiou]/i.test(w);
const DOUBLE = new Set(["run", "sit", "swim", "begin", "get", "put", "cut", "hit", "let", "shut", "dig", "win", "stop", "plan", "hop", "clap", "drop", "skip", "hug", "shop"]);
function ingForm(b) {
  if (DOUBLE.has(b)) return b + b.slice(-1) + "ing";
  if (/[^e]e$/.test(b)) return b.slice(0, -1) + "ing";
  return b + "ing";
}
function sForm(b) {
  if (b === "have") return "has";
  if (/[^aeiou]y$/.test(b)) return b.slice(0, -1) + "ies";
  if (/(s|x|z|ch|sh|o)$/.test(b)) return b + "es";
  return b + "s";
}
const naivePast = (b) => (/e$/.test(b) ? b + "d" : b + "ed");
function regRule(b, p) {
  if (p === b + "ed") return "ed";
  if (p === b + "d") return "d";
  if (/[^aeiou]y$/.test(b) && p === b.slice(0, -1) + "ied") return "ied";
  if (p === b + b.slice(-1) + "ed") return "double";
  return null;
}
const REG_STEP = {
  ed: (b, p) => `Add -ed to the verb: ${b} → ${p}.`,
  d: (b, p) => `The verb already ends in e, so just add -d: ${b} → ${p}.`,
  ied: (b, p) => `A verb ending in a consonant + y changes y to i and adds -ed: ${b} → ${p}.`,
  double: (b, p) => `A short verb ending in one vowel + one consonant doubles the last letter before -ed: ${b} → ${p}.`,
};
const kindsOf = (n, k) => Array(n).fill(k);

// ============================================================================================================================
// English generators
// ============================================================================================================================
const E = {};

function pluralQ(R, list) {
  const [s, p, rule, wr] = R.pick(list);
  let slips;
  if (wr) slips = wr;
  else if (rule === "s") slips = [s + "es", s, s + "ses"];
  else if (rule === "es") slips = [s + "s", s, s + "ies"];
  else if (rule === "ies") slips = [s + "s", s + "es", s];
  else if (rule === "ys") slips = [s.slice(0, -1) + "ies", s + "es", s];
  else if (rule === "ves") slips = [s + "s", s + "es", s];
  else if (rule === "oes") slips = [s + "s", s, s + "en"];
  else if (rule === "os") slips = [s + "es", s, s + "en"];
  const wrong = take(R, slips, p);
  const q = R.next() < 0.5 ? `What is the plural of "${s}"?` : `One ${s}, many ___ .`;
  return { q, a: p, wrong, kinds: kindsOf(wrong.length, "method"), steps: [PLURAL_STEP[rule](s, p)] };
}
E.engPlural = (R) => pluralQ(R, E_PLURAL_1);
E.engPluralMore = (R) => pluralQ(R, E_PLURAL_2);

function aanQ(R, an, a, tricky) {
  const kind = R.next() < 0.5 ? "an" : "a";
  const hint = (w, ar) => (tricky ? `Listen to the first SOUND, not the letter: "${ar} ${w}".` : ar === "an" ? `"${w}" starts with a vowel sound (a, e, i, o, u), so we say "an ${w}".` : `"${w}" starts with a consonant sound, so we say "a ${w}".`);
  const roll = R.next();
  if (!tricky && roll < 0.4) {
    // choose the correct group of words
    const w = R.pick(kind === "an" ? an : a);
    const pl = w + (/(s|x|ch|sh)$/.test(w) ? "es" : "s");
    const ar = kind, other = kind === "an" ? "a" : "an";
    const right = `${ar} ${w}`;
    return { q: "Which group of words is correct?", a: right, wrong: [`${other} ${w}`, `${other} ${pl}`, `${ar} ${pl}`], kinds: ["method", "method", "method"], steps: [hint(w, ar), `"a" and "an" are used with ONE thing, so ${pl} cannot follow them.`, `Correct: ${right}.`] };
  }
  // which word takes an / a
  const right = R.pick(kind === "an" ? an : a);
  const wrongs = take(R, kind === "an" ? a : an, right);
  const wsorted = wrongs.slice(0, 3);
  return { q: `Which word needs "${kind}" in front of it?`, a: right, wrong: wsorted, kinds: kindsOf(3, "method"), steps: [hint(right, kind), `Correct: ${kind} ${right}.`] };
}
E.engAAn = (R) => aanQ(R, AN_1, A_1, false);
E.engAAnSound = (R) => aanQ(R, AN_2, A_2_OK, true);

E.engArticleThe = (R) => {
  const roll = R.next();
  if (roll < 0.4) {
    const s = R.pick(THE_SENT);
    return { q: `Fill in the blank: ${s}`, a: "the", wrong: ["a", "an", "no article"], kinds: kindsOf(3, "method"), steps: [/Himalayas|Ganga|Sutlej|Ocean|Taj/.test(s) ? "Use \"the\" before the names of rivers, oceans, mountain ranges and famous buildings." : /best|highest|longest|first/.test(s) ? "Use \"the\" before best, highest, longest, first and other superlatives and ordinal numbers." : "Use \"the\" for something there is only one of (the sun, the moon, the sky) or a musical instrument.", "Correct: the."] };
  }
  if (roll < 0.62) {
    const s = R.pick(NONE_SENT);
    return { q: `Fill in the blank: ${s}`, a: "no article", wrong: ["a", "an", "the"], kinds: kindsOf(3, "method"), steps: ["We do not use a, an or the before names of cities, states, countries, languages, games and days.", "Correct: no article."] };
  }
  // What a ___ ! / such ___
  const useAn = R.next() < 0.5;
  const set = R.pick(W_PAT), adj = R.pick(useAn ? set.an : set.a), noun = R.pick(set.nouns);
  const frame = R.next() < 0.5 ? `What ___ ${adj} ${noun}!` : `She is such ___ ${adj} ${noun}.`;
  const ans = useAn ? "an" : "a";
  return { q: `Fill in the blank: ${frame}`, a: ans, wrong: take(R, ["a", "an", "the", "no article"], ans), kinds: kindsOf(3, "method"), steps: [`The next word is "${adj}". It starts with ${useAn ? "a vowel" : "a consonant"} sound, so we use "${ans}".`, "After \"What\" and \"such\" we do not use \"the\"."] };
};

function oppQ(R, list) {
  const [x, y, pos] = R.pick(list);
  const flip = R.next() < 0.5;
  const w = flip ? y : x, a = flip ? x : y;
  const pool = list.filter((p) => p[2] === pos).flatMap((p) => [p[0], p[1]]);
  const pair = new Set([x, y]);
  let wrong = take(R, pool.filter((v) => !pair.has(v)), a);
  if (wrong.length < 3) wrong = take(R, list.flatMap((p) => [p[0], p[1]]).filter((v) => !pair.has(v)), a);
  return { q: `Choose the opposite of "${w}".`, a, wrong, kinds: kindsOf(3, "method"), steps: [`The opposite of "${w}" means the reverse: ${w} ≠ ${a}.`, `${cap(w)} ↔ ${a}.`] };
}
E.engOpposite = (R) => oppQ(R, E_OPP_1);
E.engOppositeAdv = (R) => oppQ(R, E_OPP_2);

E.engPast = (R) => {
  const reg = R.next() < 0.5;
  if (reg) {
    const [b, p] = R.pick(E_REG);
    const wrong = take(R, [naivePast(b), b, ingForm(b), sForm(b)].filter((x) => x !== p), p);
    return { q: `What is the past tense of "${b}"?`, a: p, wrong, kinds: kindsOf(3, "method"), steps: [REG_STEP[regRule(b, p)](b, p)] };
  }
  const [b, p, pp] = R.pick(E_IRR);
  const cands = [naivePast(b), pp, ingForm(b), b, sForm(b)];
  const wrong = take(R, cands, p);
  return { q: `What is the past tense of "${b}"?`, a: p, wrong, kinds: kindsOf(3, "method"), steps: [`"${b}" is an irregular verb. It does not take -ed.`, `Past tense: ${b} → ${p}.`] };
};

function subjFor(R, plural) { return plural ? R.pick(SUBJ_P) : R.pick(SUBJ_3); }
const IRRMAP = Object.fromEntries(E_IRR.map((r) => [r[0], r]));
E.engVerbPresent = (R) => {
  const v = R.pick(E_VS), third = R.next() < 0.5;
  const subj = subjFor(R, !third);
  const sg = third ? sForm(v.b) : v.b, bad = third ? v.b : sForm(v.b);
  const r = IRRMAP[v.b], tail = v.p === undefined ? " every day" : v.p;
  const rule = third ? `With he, she, it or one person, the verb in the simple present takes -s or -es: ${v.b} → ${sg}.` : `With I, we, you, they or many people, the verb stays in its base form: ${v.b}.`;
  return { q: `Fill in the blank: ${subj} ___ ${v.o}${tail}.`, a: sg, wrong: take(R, [bad, ingForm(v.b), r[2]], sg), kinds: kindsOf(3, "method"), steps: [rule, `${subj} ${sg} ${v.o}${tail}.`] };
};
E.engVerbPast = (R) => {
  const v = R.pick(E_VS), subj = subjFor(R, R.next() < 0.5);
  const r = IRRMAP[v.b], when = R.pick(["yesterday", "last week", "last Sunday"]);
  return { q: `Fill in the blank: ${subj} ___ ${v.o} ${when}.`, a: r[1], wrong: take(R, [v.b, sForm(v.b), ingForm(v.b), r[2]], r[1]), kinds: kindsOf(3, "method"), steps: [`"${when}" tells us it happened in the past, so we need the past tense.`, `${v.b} → ${r[1]}`] };
};
E.engVerbIng = (R) => {
  const v = R.pick(E_VS.filter((x) => x.ing !== false)), subj = subjFor(R, R.next() < 0.5);
  const aux = subj === "I" ? "am" : /^(He|She|My mother|The boy|The girl|Our teacher|My brother)$/.test(subj) ? "is" : "are";
  const r = IRRMAP[v.b], ans = ingForm(v.b);
  const wrong = [v.b, sForm(v.b), r[1]];
  return { q: `Fill in the blank: ${subj} ${aux} ___ ${v.o} now.`, a: ans, wrong: take(R, wrong, ans), kinds: ["method", "method", "method"], steps: [`"${aux}" and "now" tell us the action is happening at this moment, so use the -ing form.`, `${v.b} → ${ans}`] };
};
E.engVerbPerfect = (R) => {
  const v = R.pick(E_VS), plural = R.next() < 0.5, subj = subjFor(R, plural);
  const aux = /^(I|We|They|You|The children|My friends)$/.test(subj) ? "have" : "has";
  const r = IRRMAP[v.b], ans = r[2];
  const wrong = [v.b, r[1], ingForm(v.b)].filter((x) => x !== ans);
  return { q: `Fill in the blank: ${subj} ${aux} already ___ ${v.o}.`, a: ans, wrong: take(R, [...wrong, sForm(v.b)], ans), kinds: ["method", "method", "method"], steps: [`"${aux} + past participle" makes the present perfect tense.`, `${v.b} → ${r[1]} → ${ans} (past participle).`] };
};

E.engIsAmAre = (R) => {
  const rows = [["I", "am"], ["You", "are"], ["We", "are"], ["They", "are"], ["He", "is"], ["She", "is"], ["It", "is"], ["The children", "are"], ["The cat", "is"], ["My mother", "is"], ["Ravi", "is"], ["The boys", "are"]];
  const [s, a] = R.pick(rows), pred = R.pick(["happy", "in the garden", "at home", "ready", "very kind"]);
  const why = a === "am" ? 'Use "am" only with I.' : a === "is" ? 'Use "is" with he, she, it or one person, animal or thing.' : 'Use "are" with you, we, they or more than one.';
  return { q: `Fill in the blank: ${s} ___ ${pred}.`, a, wrong: take(R, ["am", "is", "are", "be"], a), kinds: kindsOf(3, "method"), steps: [why, `${s} ${a} ${pred}.`] };
};
E.engPronoun = (R) => {
  const [np, a] = R.pick(PRON_NP);
  const pred = R.pick(["here", "ready", "nice"]);
  const tail = (a === "They" ? "are " : "is ") + pred;
  return { q: `Which word can take the place of "${np}" in: "${np} ${tail}."?`, a, wrong: take(R, ["He", "She", "It", "They"], a), kinds: kindsOf(3, "method"), steps: [a === "He" ? "He is used for one boy or man." : a === "She" ? "She is used for one girl or woman." : a === "It" ? "It is used for one animal or thing." : "They is used for more than one person, animal or thing.", `${a} ${tail}.`] };
};

E.engPrepEasy = (R) => { const [s, a, w, why] = R.pick(E_PREP_1); return { q: `Choose the right word: ${s}`, a, wrong: w.slice(), kinds: kindsOf(3, "method"), steps: [why, s.replace("___", a)] }; };
E.engPrep = (R) => { const [s, a, w, why] = R.pick([...E_PREP_1, ...E_PREP_2]); return { q: `Choose the right word: ${s}`, a, wrong: w.slice(), kinds: kindsOf(3, "method"), steps: [why, s.replace("___", a)] }; };

E.engCompare = (R) => {
  const [w, c, s, kind, person] = R.pick(E_CMP);
  const wantSup = R.next() < 0.5;
  const naive = kind === "er" ? "more " + w : w + "er"; // the usual slips: "more tall", "biger", "happyer", "beautifuler"
  const naiveS = kind === "er" ? "most " + w : w + "est";
  const why = { er: `A short adjective adds -er and -est: ${w} → ${c} → ${s}.`, r: `An adjective ending in e adds -r and -st: ${w} → ${c} → ${s}.`, dbl: `A short adjective ending in one vowel + one consonant doubles the last letter: ${w} → ${c} → ${s}.`, ier: `An adjective ending in a consonant + y changes y to i and adds -er / -est: ${w} → ${c} → ${s}.`, more: `A long adjective uses more and most: ${w} → ${c} → ${s}.`, irr: `This adjective is irregular. Learn it: ${w} → ${c} → ${s}.` }[kind];
  if (R.next() < 0.4 || !person) {
    // series
    if (wantSup) return { q: `${w} → ${c} → ___`, a: s, wrong: take(R, [c, w, naiveS, "most " + c], s), kinds: kindsOf(3, "method"), steps: [why] };
    return { q: `${w} → ___ → ${s}`, a: c, wrong: take(R, [s, w, naive, "more " + c], c), kinds: kindsOf(3, "method"), steps: [why] };
  }
  const [A, B] = take(R, NAMES_P, "", 2);
  const kid = ["Meena", "Sita", "Simran"].includes(A) ? "girl" : "boy";
  if (wantSup) return { q: `${A} is the ___ ${kid} in the class. (${w})`, a: s, wrong: take(R, [c, w, naiveS, "most " + c, "more " + c], s), kinds: kindsOf(3, "method"), steps: ["We compare one with ALL the others, so we need the superlative (the ... -est / the most ...).", why] };
  return { q: `${A} is ___ than ${B}. (${w})`, a: c, wrong: take(R, [s, w, naive, "more " + c], c), kinds: kindsOf(3, "method"), steps: ["We compare TWO people with the word \"than\", so we need the comparative (-er / more ...).", why] };
};

function genderQ(R) {
  const [m, f] = R.pick(E_GEN), toF = R.next() < 0.5;
  const fems = E_GEN.map((p) => p[1]), mascs = E_GEN.map((p) => p[0]);
  if (toF) return { q: `What is the feminine (girl or woman) word for "${m}"?`, a: f, wrong: take(R, fems, f), kinds: kindsOf(3, "method"), steps: [`${m} is masculine. Its feminine word is ${f}.`] };
  return { q: `What is the masculine (boy or man) word for "${f}"?`, a: m, wrong: take(R, mascs, m), kinds: kindsOf(3, "method"), steps: [`${f} is feminine. Its masculine word is ${m}.`] };
}
E.engGender = genderQ;

function synQ(R, hard) {
  const groups = hard ? E_SYN.filter((g) => g.hard.length + g.easy.length >= 2 && g.hard.length) : E_SYN.filter((g) => g.easy.length >= 2);
  const g = R.pick(groups);
  const all = hard ? [...g.easy, ...g.hard] : g.easy;
  const w = R.pick(all);
  const answers = all.filter((x) => x !== w && (!hard || g.hard.includes(x) || g.hard.includes(w)));
  if (!answers.length) return null;
  const a = R.pick(answers);
  const others = E_SYN.filter((x) => x !== g).flatMap((x) => (hard ? [...x.easy, ...x.hard] : x.easy));
  const wrong = take(R, others, a);
  return { q: `Which word means almost the same as "${w}"?`, a, wrong, kinds: kindsOf(3, "method"), steps: [`"${w}" and "${a}" are synonyms: words with nearly the same meaning.`, `${cap(w)} = ${a}.`] };
}
E.engSynonym = (R) => synQ(R, false);
E.engSynonymAdv = (R) => synQ(R, true);

E.engNounKind = (R) => {
  const keys = Object.keys(E_NK), k = R.pick(keys), w = R.pick(E_NK[k]);
  const others = take(R, keys, k);
  return { q: `What kind of noun is "${w}"?`, a: NK_LABEL[k], wrong: others.map((x) => NK_LABEL[x]), kinds: kindsOf(3, "method"), steps: [NK_WHY[k](w)] };
};

// Parts of speech: fixed, sensible sentences with their words marked by hand (random word mixes made odd sentences such
// as "The small doctor takes a banana"). Each: [sentence, nouns, verb, adjective, pronoun or ""].
const POS_SENT = [
  ["The tall boy kicks the ball.", ["boy", "ball"], "kicks", "tall", ""],
  ["My little sister drinks warm milk.", ["sister", "milk"], "drinks", "warm", ""],
  ["The brown cow eats green grass.", ["cow", "grass"], "eats", "brown", ""],
  ["Our kind teacher reads a story.", ["teacher", "story"], "reads", "kind", ""],
  ["The red kite flies high.", ["kite"], "flies", "red", ""],
  ["A small bird sings in the morning.", ["bird", "morning"], "sings", "small", ""],
  ["The hungry dog barks at the cat.", ["dog", "cat"], "barks", "hungry", ""],
  ["My father drives a blue car.", ["father", "car"], "drives", "blue", ""],
  ["The old farmer ploughs the field.", ["farmer", "field"], "ploughs", "old", ""],
  ["A sweet mango falls from the tree.", ["mango", "tree"], "falls", "sweet", ""],
  ["The busy bee makes honey.", ["bee", "honey"], "makes", "busy", ""],
  ["Grandmother cooks tasty food.", ["Grandmother", "food"], "cooks", "tasty", ""],
  ["The clever fox runs fast.", ["fox"], "runs", "clever", ""],
  ["A gentle breeze blows over the lake.", ["breeze", "lake"], "blows", "gentle", ""],
  ["The baby holds a soft toy.", ["baby", "toy"], "holds", "soft", ""],
  ["The brave soldier guards the border.", ["soldier", "border"], "guards", "brave", ""],
  ["Riya wears a yellow frock.", ["Riya", "frock"], "wears", "yellow", ""],
  ["The thirsty crow finds a pot.", ["crow", "pot"], "finds", "thirsty", ""],
  ["Our school has a big garden.", ["school", "garden"], "has", "big", ""],
  ["The bright sun shines in the sky.", ["sun", "sky"], "shines", "bright", ""],
  ["She paints a beautiful flower.", ["flower"], "paints", "beautiful", "She"],
  ["He climbs the tall tree.", ["tree"], "climbs", "tall", "He"],
  ["They play a long game.", ["game"], "play", "long", "They"],
  ["We visit the old fort.", ["fort"], "visit", "old", "We"],
  ["I eat a juicy orange.", ["orange"], "eat", "juicy", "I"],
  ["She feeds the hungry puppy.", ["puppy"], "feeds", "hungry", "She"],
  ["He carries a heavy bag.", ["bag"], "carries", "heavy", "He"],
  ["They build a strong house.", ["house"], "build", "strong", "They"],
  ["We sing a happy song.", ["song"], "sing", "happy", "We"],
  ["I draw a round moon.", ["moon"], "draw", "round", "I"],
];
E.engPOS = (R) => {
  const [sent, nouns, verb, adj, pron] = R.pick(POS_SENT);
  const kinds = pron ? ["pronoun", "noun", "verb", "adjective"] : ["noun", "verb", "adjective"];
  const kind = R.pick(kinds);
  const word = kind === "noun" ? R.pick(nouns) : kind === "verb" ? verb : kind === "adjective" ? adj : pron;
  // The wrong options are the sentence's other marked words (never a second word of the same kind).
  const pool = [kind !== "noun" ? nouns[0] : null, kind !== "verb" ? verb : null, kind !== "adjective" ? adj : null, kind !== "pronoun" && pron ? pron : null, kind !== "noun" && nouns[1] ? nouns[1] : null].filter(Boolean);
  const wrong = pool.slice(0, 3);
  if (wrong.length < 3) wrong.push(sent.split(" ").map((w) => w.replace(/[^A-Za-z]/g, "")).find((w) => w && ![word, ...wrong, ...nouns].includes(w) && /^(the|a|an|in|at|over|from|of|my|our)$/i.test(w)) || "the");
  const why = { noun: "A noun is the name of a person, animal, place or thing.", verb: "A verb tells us what someone does (an action).", adjective: "An adjective tells us more about a noun (what it is like).", pronoun: "A pronoun takes the place of a noun (he, she, it, they, we, I)." }[kind];
  return { q: `Read: "${sent}" Which word is ${kind === "adjective" ? "an" : "a"} ${kind}?`, a: word, wrong: wrong.slice(0, 3), kinds: kindsOf(3, "method"), steps: [why, `In this sentence the ${kind} is "${word}".`] };
};

E.engPassive = (R) => {
  const [b, past, pp, obj] = R.pick(E_PASSIVE), subj = R.pick(PASS_SUBJ), isPast = R.next() < 0.5;
  const pl = (s) => (s === "The teacher" ? "the teacher" : s);
  const act = isPast ? `${subj} ${past} ${obj}.` : `${subj} ${sForm(b)} ${obj}.`;
  const aux = isPast ? "was" : "is", otherAux = isPast ? "is" : "was";
  const O = cap(obj);
  const right = `${O} ${aux} ${pp} by ${pl(subj)}.`;
  const wrongForm = past !== pp ? past : b;
  const cands = [`${O} ${otherAux} ${pp} by ${pl(subj)}.`, `${O} ${aux} ${wrongForm} by ${pl(subj)}.`, `${O} ${aux} ${ingForm(b)} by ${pl(subj)}.`, `${cap(pl(subj))} ${aux} ${pp} by ${obj}.`];
  return { q: `Change to the passive voice: ${act}`, a: right, wrong: cands.slice(0, 3), kinds: ["method", "method", "method"], steps: ["In the passive voice the object comes first: Object + is/was + past participle + by + doer.", `${isPast ? "Past" : "Present"} tense, so use "${aux}".`, `${b} → ${past} → ${pp} (past participle).`, right] };
};

// Mixed grammar review: one of the easier generators, for any English chapter of Classes 3-8.
const MIX = ["engPlural", "engAAn", "engOpposite", "engPast", "engVerbPresent", "engCompare", "engGender", "engPrepEasy", "engIsAmAre", "engPOS", "engPluralMore", "engVerbIng", "engSynonym", "engArticleThe"];
E.engMix = (R) => E[R.pick(MIX)](R);

// ============================================================================================================================
// Hindi generators (questions in Hindi)
// ============================================================================================================================
const H = {};
const HI_STEP = {
  e: () => "‘आ’ से अंत होने वाले पुल्लिंग शब्दों में बहुवचन बनाते समय ‘आ’ की जगह ‘े’ (ए की मात्रा) लगती है।",
  iyan: () => "‘ई’ से अंत होने वाले स्त्रीलिंग शब्दों में बहुवचन बनाते समय अंत की ‘ी’ की जगह ‘ियाँ’ लगता है।",
  iya: () => "‘इया’ से अंत होने वाले शब्दों में बहुवचन बनाते समय अंत में चंद्रबिंदु (ँ) लगता है।",
  en: () => "व्यंजन से अंत होने वाले अधिकतर स्त्रीलिंग शब्दों में बहुवचन बनाते समय ‘ें’ (एँ) लगता है।",
  aen: () => "‘आ’ से अंत होने वाले स्त्रीलिंग शब्दों में बहुवचन बनाते समय ‘एँ’ जुड़ता है।",
};
function hiWrongPlural(s, p, rule) {
  const stem = s.slice(0, -1);
  if (rule === "e") return [stem + "ें", s + "एँ", s];
  if (rule === "iyan") return [stem + "ें", s + "यें", s];
  if (rule === "iya") return [stem + "ें", s + "एँ", s];
  if (rule === "en") return [s + "ियाँ", s + "ाएँ", s, s + "े"];
  return [stem + "ें", stem + "े", s];
}
H.hiVachan = (R) => {
  const [s, p, rule] = R.pick(HI.vachan);
  return { q: R.next() < 0.5 ? `‘${s}’ का बहुवचन क्या होगा?` : `‘${s}’ का बहुवचन रूप कौन-सा है?`, a: p, wrong: take(R, hiWrongPlural(s, p, rule), p), kinds: kindsOf(3, "method"), steps: [HI_STEP[rule](), `${s} → ${p}`] };
};
H.hiLing = (R) => {
  const [m, f] = R.pick(HI.ling), toF = R.next() < 0.5;
  if (toF) return { q: `‘${m}’ का स्त्रीलिंग शब्द कौन-सा है?`, a: f, wrong: take(R, HI.ling.map((x) => x[1]), f), kinds: kindsOf(3, "method"), steps: [`${m} पुल्लिंग है। उसका स्त्रीलिंग शब्द ${f} है।`] };
  return { q: `‘${f}’ का पुल्लिंग शब्द कौन-सा है?`, a: m, wrong: take(R, HI.ling.map((x) => x[0]), m), kinds: kindsOf(3, "method"), steps: [`${f} स्त्रीलिंग है। उसका पुल्लिंग शब्द ${m} है।`] };
};
function hiVil(R, list, all) {
  const [x, y] = R.pick(list), flip = R.next() < 0.5, w = flip ? y : x, a = flip ? x : y;
  const pool = all.flatMap((p) => [p[0], p[1]]).filter((v) => v !== x && v !== y);
  return { q: `‘${w}’ का विलोम (उल्टा) शब्द कौन-सा है?`, a, wrong: take(R, pool, a), kinds: kindsOf(3, "method"), steps: [`${w} का विलोम शब्द ${a} होता है।`, `${w} ↔ ${a}`] };
}
const HI_VIL_ALL = [...HI.vilom.easy, ...HI.vilom.hard];
H.hiVilom = (R) => hiVil(R, HI.vilom.easy, HI.vilom.easy);
H.hiVilomAdv = (R) => hiVil(R, HI.vilom.hard, HI_VIL_ALL);
function hiPar(R, list, allLists) {
  const g = R.pick(list), w = R.pick(g), a = R.pick(g.filter((x) => x !== w));
  const pool = allLists.flat().filter((x) => !g.includes(x));
  return { q: `‘${w}’ का पर्यायवाची शब्द कौन-सा है?`, a, wrong: take(R, pool, a), kinds: kindsOf(3, "method"), steps: [`${w} और ${a} एक ही अर्थ वाले शब्द हैं, इन्हें पर्यायवाची शब्द कहते हैं।`] };
}
// the hard list contains the same everyday words again (सूरज ...) with their harder partners: the pool for wrong answers excludes every word of the same meaning
function hiParAll(R, list) {
  const g = R.pick(list), w = R.pick(g), a = R.pick(g.filter((x) => x !== w));
  const same = new Set([...HI.paryay.easy, ...HI.paryay.hard].filter((x) => x.some((y) => g.includes(y))).flat());
  const pool = [...HI.paryay.easy, ...HI.paryay.hard].flat().filter((x) => !same.has(x));
  return { q: `‘${w}’ का पर्यायवाची शब्द कौन-सा है?`, a, wrong: take(R, pool, a), kinds: kindsOf(3, "method"), steps: [`${w} और ${a} एक ही अर्थ वाले शब्द हैं, इन्हें पर्यायवाची शब्द कहते हैं।`] };
}
H.hiParyay = (R) => hiParAll(R, HI.paryay.easy);
H.hiParyayAdv = (R) => hiParAll(R, HI.paryay.hard);

// ============================================================================================================================
// Punjabi generators (questions in Punjabi)
// ============================================================================================================================
const P = {};
const PA_STEP = {
  e: () => "‘ਆ’ (ਕੰਨੇ) ਉੱਤੇ ਮੁੱਕਣ ਵਾਲੇ ਪੁਲਿੰਗ ਸ਼ਬਦਾਂ ਦਾ ਬਹੁ-ਵਚਨ ਬਣਾਉਣ ਲਈ ਕੰਨੇ ਦੀ ਥਾਂ ਲਾਂ (ੇ) ਲੱਗਦੀ ਹੈ।",
  iaan: () => "ਬਿਹਾਰੀ (ੀ) ਉੱਤੇ ਮੁੱਕਣ ਵਾਲੇ ਇਸਤਰੀ ਲਿੰਗ ਸ਼ਬਦਾਂ ਦਾ ਬਹੁ-ਵਚਨ ਬਣਾਉਣ ਲਈ ਅੰਤ ਵਿੱਚ ‘ਆਂ’ ਲੱਗਦਾ ਹੈ।",
  aan: () => "ਅੱਖਰ ਉੱਤੇ ਮੁੱਕਣ ਵਾਲੇ ਇਸਤਰੀ ਲਿੰਗ ਸ਼ਬਦਾਂ ਦਾ ਬਹੁ-ਵਚਨ ਬਣਾਉਣ ਲਈ ਅੰਤ ਵਿੱਚ ‘ਾਂ’ ਲੱਗਦਾ ਹੈ।",
};
function paWrongPlural(s, rule) {
  const stem = s.slice(0, -1);
  if (rule === "e") return [stem + "ਾਂ", s + "ਆਂ", s];
  if (rule === "iaan") return [stem + "ੇ", stem + "ਾਂ", s];
  return [s + "ੇ", s + "ੀਆਂ", s];
}
P.paVachan = (R) => {
  const [s, p, rule] = R.pick(PA.vachan);
  return { q: R.next() < 0.5 ? `‘${s}’ ਦਾ ਬਹੁ-ਵਚਨ ਕੀ ਹੋਵੇਗਾ?` : `‘${s}’ ਦਾ ਬਹੁ-ਵਚਨ ਰੂਪ ਕਿਹੜਾ ਹੈ?`, a: p, wrong: take(R, paWrongPlural(s, rule), p), kinds: kindsOf(3, "method"), steps: [PA_STEP[rule](), `${s} → ${p}`] };
};
P.paLing = (R) => {
  const [m, f] = R.pick(PA.ling), toF = R.next() < 0.5;
  if (toF) return { q: `‘${m}’ ਦਾ ਇਸਤਰੀ ਲਿੰਗ ਸ਼ਬਦ ਕਿਹੜਾ ਹੈ?`, a: f, wrong: take(R, PA.ling.map((x) => x[1]), f), kinds: kindsOf(3, "method"), steps: [`${m} ਪੁਲਿੰਗ ਹੈ। ਇਸ ਦਾ ਇਸਤਰੀ ਲਿੰਗ ਸ਼ਬਦ ${f} ਹੈ।`] };
  return { q: `‘${f}’ ਦਾ ਪੁਲਿੰਗ ਸ਼ਬਦ ਕਿਹੜਾ ਹੈ?`, a: m, wrong: take(R, PA.ling.map((x) => x[0]), m), kinds: kindsOf(3, "method"), steps: [`${f} ਇਸਤਰੀ ਲਿੰਗ ਹੈ। ਇਸ ਦਾ ਪੁਲਿੰਗ ਸ਼ਬਦ ${m} ਹੈ।`] };
};
function paVir(R, list, all) {
  const [x, y] = R.pick(list), flip = R.next() < 0.5, w = flip ? y : x, a = flip ? x : y;
  const pool = all.flatMap((p) => [p[0], p[1]]).filter((v) => v !== x && v !== y);
  return { q: `‘${w}’ ਦਾ ਉਲਟ (ਵਿਰੋਧੀ) ਸ਼ਬਦ ਕਿਹੜਾ ਹੈ?`, a, wrong: take(R, pool, a), kinds: kindsOf(3, "method"), steps: [`${w} ਦਾ ਉਲਟ ਸ਼ਬਦ ${a} ਹੁੰਦਾ ਹੈ।`, `${w} ↔ ${a}`] };
}
P.paVirodhi = (R) => paVir(R, PA.virodhi.easy, PA.virodhi.easy);
P.paVirodhiAdv = (R) => paVir(R, PA.virodhi.hard, [...PA.virodhi.easy, ...PA.virodhi.hard]);

// ============================================================================================================================
// register
// ============================================================================================================================
for (const group of [E, H, P]) for (const [name, fn] of Object.entries(group)) Gen.add(name, fn);

// ---- chapter maps ----
const GRAM_ALL = {
  // English / English (Punjab) grammar chapters, by class (ids are the same in both books unless stated)
  common: {
    2: { "one-and-many": ["engPlural"], "action-words": ["engVerbPresent"], opposites: ["engOpposite"], "he-she-it-they": ["engPronoun"], "is-am-are": ["engIsAmAre"], "in-on-under": ["engPrepEasy"], "rb2-a-an-and-and": ["engAAn"] },
    3: { nouns: ["engPOS", "engPlural"], "singular-and-plural": ["engPlural", "engPluralMore"], pronouns: ["engPronoun", "engPOS"], verbs: ["engVerbPresent", "engPast", "engPOS"], adjectives: ["engPOS", "engOpposite"], articles: ["engAAn", "engArticleThe"], "simple-present-tense": ["engVerbPresent", "engIsAmAre"], "opposites-and-rhyming-words": ["engOpposite"] },
    4: { gender: ["engGender"], "collective-nouns": ["engNounKind"], "simple-past-tense": ["engPast", "engVerbPast"], prepositions: ["engPrep"], "synonyms-and-antonyms": ["engOpposite", "engOppositeAdv", "engSynonym"] },
    5: { "kinds-of-nouns": ["engNounKind", "engPluralMore"], tenses: ["engPast", "engVerbPresent", "engVerbPast", "engVerbIng"], "degrees-of-comparison": ["engCompare"] },
    6: { nouns: ["engPlural", "engPluralMore", "engNounKind", "engPOS"], pronouns: ["engPronoun", "engPOS"], adjectives: ["engPOS", "engCompare", "engOpposite"], "verbs-and-simple-tenses": ["engVerbPresent", "engPast", "engVerbPast", "engVerbIng"], articles: ["engAAn", "engAAnSound", "engArticleThe"], prepositions: ["engPrep"] },
    7: { "perfect-tenses": ["engVerbPerfect", "engPast"], "subject-verb-agreement": ["engVerbPresent", "engIsAmAre"] },
    8: { "active-and-passive-voice": ["engPassive"], "tense-revision": ["engPast", "engVerbPast", "engVerbPresent", "engVerbIng", "engVerbPerfect"], determiners: ["engArticleThe", "engAAnSound"] },
    9: { tenses: ["engPast", "engVerbPast", "engVerbPresent", "engVerbIng", "engVerbPerfect"], determiners: ["engArticleThe", "engAAnSound"], "subject-verb-agreement": ["engVerbPresent"], "active-passive-voice": ["engPassive"] },
    10: { tenses: ["engPast", "engVerbPast", "engVerbPresent", "engVerbIng", "engVerbPerfect"], determiners: ["engArticleThe", "engAAnSound"], "subject-verb-agreement": ["engVerbPresent"], "active-passive-voice": ["engPassive"] },
  },
  pb: {
    6: { "pb-nouns": ["engPlural", "engPluralMore", "engNounKind", "engPOS"], "pb-pronouns": ["engPronoun", "engPOS"], "pb-verbs-tenses": ["engVerbPresent", "engPast", "engVerbPast", "engVerbIng"], "pb-articles": ["engAAn", "engAAnSound", "engArticleThe"], "pb-adjectives-adverbs": ["engPOS", "engCompare"], "pb-prepositions-conjunctions": ["engPrep"], "pb-word-power": ["engSynonym", "engOpposite", "engOppositeAdv"] },
    7: { "pb-nouns-pronouns": ["engPlural", "engPluralMore", "engPronoun", "engNounKind"], "pb-verbs-tenses": ["engVerbPresent", "engPast", "engVerbPast", "engVerbIng", "engVerbPerfect"], "pb-adjectives": ["engCompare", "engPOS"], "pb-prepositions": ["engPrep"], "pb-articles-determiners": ["engAAn", "engAAnSound", "engArticleThe"], "pb-word-power": ["engSynonym", "engSynonymAdv", "engOppositeAdv"] },
    8: { "pb-parts-of-speech": ["engPOS", "engNounKind", "engPronoun"], "pb-determiners": ["engArticleThe", "engAAnSound"], "pb-degrees-adjectives": ["engCompare"], "pb-tenses": ["engPast", "engVerbPast", "engVerbPresent", "engVerbIng", "engVerbPerfect"], "pb-active-passive": ["engPassive"], "pb-word-power": ["engSynonym", "engSynonymAdv", "engOppositeAdv"], "pb-main-helping-verbs": ["engVerbPerfect", "engIsAmAre"] },
    9: { "grammar-determiners": ["engArticleThe", "engAAnSound"], "grammar-prepositions": ["engPrep"], "grammar-active-passive-voice": ["engPassive"], "grammar-tenses-concord-sequence": ["engPast", "engVerbPast", "engVerbPresent", "engVerbIng", "engVerbPerfect"], "vocabulary-word-power": ["engSynonymAdv", "engOppositeAdv"] },
    10: { "grammar-determiners-prepositions-modals-connectors": ["engPrep", "engArticleThe", "engAAnSound"], "grammar-voice-and-reported-speech": ["engPassive"], "grammar-tenses-and-punctuation": ["engPast", "engVerbPast", "engVerbPresent", "engVerbIng", "engVerbPerfect"], "vocabulary-confused-words-idioms-proverbs": ["engSynonymAdv", "engOppositeAdv"] },
  },
};
// every chapter id of the two English books, Classes 2-10 (Classes 3-8 each get the mixed review as a light extra; literature chapters get only that)
const ALL_IDS = {
  english: {
    2: ["naming-words-and-proper-nouns", "one-and-many", "action-words", "describing-words", "opposites", "he-she-it-they", "is-am-are", "in-on-under", "making-sentences-and-questions", "reading-a-short-story", "my-bicycle", "picture-reading-out-out", "it-is-fun", "seeing-without-seeing", "come-back-soon", "between-home-and-school", "this-is-my-town", "a-show-of-clouds", "my-name", "the-crow", "the-smart-monkey", "little-drops-of-water", "we-are-all-indians"],
    3: ["nouns", "singular-and-plural", "pronouns", "verbs", "adjectives", "articles", "simple-present-tense", "writing-short-paragraph", "opposites-and-rhyming-words", "picture-reading", "colours", "badal-and-moti", "best-friends", "out-in-the-garden", "talking-toys", "paper-boats", "the-big-laddoo", "thank-god", "madhus-wish", "night", "chanda-mama-counts-the-stars", "chandrayaan"],
    4: ["gender", "collective-nouns", "simple-past-tense", "adverbs", "prepositions", "conjunctions", "synonyms-and-antonyms", "punctuation", "informal-letter", "reading-comprehension", "together-we-can", "the-tinkling-bells", "be-smart-be-safe", "one-thing-at-a-time", "the-old-stag", "braille", "fit-body-fit-mind-fit-nation", "the-lagori-champions", "hekko", "the-swing", "a-journey-to-the-magical-mountains", "maheshwar"],
    5: ["kinds-of-nouns", "tenses", "subject-and-predicate", "kinds-of-sentences", "degrees-of-comparison", "homophones", "prefixes-and-suffixes", "notice-writing", "story-writing", "reading-comprehension", "papas-spectacles", "gone-with-the-scooter", "the-rainbow", "the-wise-parrot", "the-frog", "what-a-tank", "gilli-danda", "the-decision-of-the-panchayat", "vocation", "glass-bangles"],
    6: ["a-bottle-of-dew", "the-raven-and-the-fox", "rama-to-the-rescue", "the-unlikely-best-friends", "a-friends-prayer", "the-chair", "neem-baba", "what-a-bird-thought", "spices-that-heal-us", "change-of-heart", "the-winner", "yoga-a-way-of-life", "hamara-bharat-incredible-india", "the-kites", "ila-sachani-embroidering-dreams-with-her-feet", "national-war-memorial", "nouns", "pronouns", "adjectives", "verbs-and-simple-tenses", "articles", "prepositions", "paragraph-writing", "informal-letter", "notice-writing", "reading-comprehension"],
    7: ["the-day-the-river-spoke", "try-again", "three-days-to-see", "animals-birds-and-dr-dolittle", "a-funny-man", "say-the-right-thing", "my-brothers-great-invention", "paper-boats", "north-south-east-west", "the-tunnel", "travel", "conquering-the-summit", "a-homage-to-our-brave-soldiers", "my-dear-soldiers", "rani-abbakka", "adverbs", "perfect-tenses", "modals", "conjunctions", "subject-verb-agreement", "direct-and-indirect-speech", "formal-letter", "diary-entry", "story-writing", "message-writing"],
    8: ["the-wit-that-won-hearts", "a-concrete-example", "wisdom-paves-the-way", "a-tale-of-valour-major-somnath-sharma", "somebodys-mother", "verghese-kurien-i-too-had-a-dream", "the-case-of-the-fifth-word", "the-magic-brush-of-dreams", "spectacular-wonders", "the-cherry-tree", "harvest-hymn", "waiting-for-the-rain", "feathered-friend", "magnifying-glass", "bibha-chowdhuri-the-beam-of-light", "active-and-passive-voice", "reported-speech", "clauses-and-kinds-of-sentences", "determiners", "tense-revision", "punctuation", "email-writing", "article-writing", "speech-writing", "notice-and-message"],
    9: ["tenses", "modals", "subject-verb-agreement", "reported-speech", "determiners", "active-passive-voice", "descriptive-paragraph", "diary-entry", "story-writing", "how-i-taught-my-grandmother-to-read", "bharat-our-land", "the-pot-maker", "gifts-of-grace-honouring-our-vocations", "winds-of-change", "canvas-of-soil", "vitamin-m", "i-cannot-remember-my-mother", "the-world-of-limitless-possibilities", "nine-gold-medals", "twin-melodies", "a-friend-found-in-music", "carrier-of-words", "words", "follow-that-dream", "believe-in-yourself"],
    10: ["tenses", "modals", "subject-verb-agreement", "reported-speech", "determiners", "active-passive-voice", "formal-letter", "analytical-paragraph", "a-letter-to-god", "dust-of-snow", "fire-and-ice", "nelson-mandela-long-walk-to-freedom", "a-tiger-in-the-zoo", "two-stories-about-flying", "how-to-tell-wild-animals", "the-ball-poem", "from-the-diary-of-anne-frank", "amanda", "glimpses-of-india", "the-trees", "mijbil-the-otter", "fog", "madam-rides-the-bus", "the-tale-of-custard-the-dragon", "the-sermon-at-benares", "for-anne-gregory", "the-proposal", "a-triumph-of-surgery", "the-thiefs-story", "the-midnight-visitor", "a-question-of-trust", "footprints-without-feet", "the-making-of-a-scientist", "the-necklace", "bholi"],
  },
  englishpb: {
    2: ["naming-words-and-proper-nouns", "one-and-many", "action-words", "describing-words", "opposites", "he-she-it-they", "is-am-are", "in-on-under", "making-sentences-and-questions", "reading-a-short-story", "rb2-greetings-and-manners", "rb2-alphabet-and-cursive", "rb2-vowel-a", "rb2-vowel-e", "rb2-vowels-i-o-u", "rb2-my-body-and-action-words", "rb2-a-an-and-and", "rb2-blends-and-pointing-words", "rb2-let-us-read", "rb2-my-computer", "rb2-going-to-a-zoo", "rb2-a-pet-hen", "rb2-holi", "rb2-rhyme-time"],
    3: ["nouns", "singular-and-plural", "pronouns", "verbs", "adjectives", "articles", "simple-present-tense", "writing-short-paragraph", "opposites-and-rhyming-words", "picture-reading", "rb3-me-and-my-family", "rb3-a-visit-to-a-park", "rb3-trees", "rb3-the-clock-my-friend", "rb3-a-bear-and-a-rabbit", "rb3-lazy-param", "rb3-the-swing", "rb3-going-to-market"],
    4: ["gender", "collective-nouns", "simple-past-tense", "adverbs", "prepositions", "conjunctions", "synonyms-and-antonyms", "punctuation", "informal-letter", "reading-comprehension", "rb4-the-king-and-his-sons", "rb4-the-farmer-and-the-bullock-cart", "rb4-safety-rules", "rb4-teamwork", "rb4-walnut-and-watermelon", "rb4-health-in-our-hands", "rb4-green-diwali-safe-diwali", "rb4-shri-guru-nanak-dev-ji", "rb4-adventures-with-books"],
    5: ["kinds-of-nouns", "tenses", "subject-and-predicate", "kinds-of-sentences", "degrees-of-comparison", "homophones", "prefixes-and-suffixes", "notice-writing", "story-writing", "reading-comprehension", "rb5-the-elves-and-the-shoemaker", "rb5-two-frogs", "rb5-child-and-grandma", "rb5-the-flying-sikh-milkha-singh", "rb5-raja-birbal", "rb5-bank-our-need", "rb5-global-warming", "rb5-a-glimpse-from-history", "rb5-safe-circle"],
    6: ["pb-nouns", "pb-pronouns", "pb-verbs-tenses", "pb-articles", "pb-adjectives-adverbs", "pb-prepositions-conjunctions", "pb-punctuation", "pb-word-power", "pb-letters-applications", "pb-paragraph-picture", "pb-messages-slogans", "pb-farmhouse-cows", "pb-my-furry-friend", "pb-lake-of-the-moon", "pb-giving-tree", "pb-how-beautiful-rain", "pb-peacock-and-crow", "pb-playing-kabaddi", "pb-writing-a-letter", "pb-kabuliwala", "pb-cracked-pot", "pb-happy-with-who-i-am", "pb-rosy-meets-nessy", "pb-forgotten-wish"],
    7: ["pb-nouns-pronouns", "pb-verbs-tenses", "pb-adjectives", "pb-adverbs", "pb-prepositions", "pb-conjunctions", "pb-articles-determiners", "pb-sentences", "pb-word-power", "pb-letters-applications", "pb-paragraph-notice-message", "pb-story-picture", "pb-rent-for-water", "pb-trains", "pb-birbals-khichdi", "pb-glass-of-milk", "pb-hunter-and-deer", "pb-mountaineers", "pb-princess-never-smiled", "pb-an-earthquake", "pb-treasure-hunt", "pb-hole-in-fence", "pb-naughty-boy", "pb-hachiko", "pb-gift-for-sidhak"],
    8: ["pb-sentence-kinds", "pb-parts-of-speech", "pb-determiners", "pb-main-helping-verbs", "pb-transitive-intransitive", "pb-degrees-adjectives", "pb-finite-nonfinite", "pb-tenses", "pb-active-passive", "pb-direct-indirect", "pb-word-power", "pb-letters-applications", "pb-paragraph-story", "pb-notice-message-email", "pb-value-of-money", "pb-earth-needs-you", "pb-aged-mother", "pb-saint-ravidas", "pb-dont-quit", "pb-old-sage-brothers", "pb-punjab-glimpse", "pb-we-who-love-books", "pb-charge-for-love", "pb-safety-driving", "pb-my-dear-soldiers", "pb-marco-polo", "pb-glass-ceiling"],
    9: ["grammar-determiners", "grammar-modals", "grammar-prepositions", "grammar-conjunctions", "grammar-simple-compound-complex", "grammar-active-passive-voice", "grammar-narration", "grammar-non-finites", "grammar-tenses-concord-sequence", "vocabulary-word-power", "writing-letter-writing", "writing-notice-and-message", "writing-paragraph-and-story", "writing-translation", "grooming-of-a-boy", "plants-also-breathe-and-feel", "budgeting-your-time", "journey-by-night", "the-discovery-of-moon", "three-great-indians", "the-death-of-abhimanyu", "open-thy-eyes-and-see-thy-god", "no-men-are-foreign", "the-nightingale-and-the-glow-worm", "a-letter-to-god", "the-last-leaf"],
    10: ["the-happy-prince", "where-is-science-taking-us", "secret-of-happiness", "a-gift-for-christmas", "some-glimpses-of-ancient-indian-thought-and-practices", "the-home-coming", "the-making-of-the-earth", "the-rule-of-the-road", "character-of-a-happy-man", "death-the-leveller", "a-ballad-of-sir-pertab-singh", "razia-the-tigress", "where-the-mind-is-without-fear", "bed-number-29", "half-a-rupee-worth", "one-thousand-dollars", "the-dying-detective", "how-much-land-does-a-man-need", "grammar-determiners-prepositions-modals-connectors", "grammar-non-finites", "grammar-simple-complex-compound-sentences", "grammar-voice-and-reported-speech", "grammar-tenses-and-punctuation", "vocabulary-confused-words-idioms-proverbs", "writing-notices-messages-advertisements-paragraphs-letters"],
  },
};
function build(subject) {
  const out = {};
  for (const [cls, ids] of Object.entries(ALL_IDS[subject])) {
    out[cls] = {};
    if (cls >= 3 && cls <= 8) for (const id of ids) out[cls][id] = ["engMix"];
  }
  const merge = (src) => {
    for (const [cls, ch] of Object.entries(src)) {
      for (const [id, list] of Object.entries(ch)) {
        if (!ALL_IDS[subject][cls].includes(id)) continue; // that chapter id is in the other English book only
        out[cls][id] = [...new Set([...(out[cls][id] || []), ...list])];
      }
    }
  };
  merge(GRAM_ALL.common);
  if (subject === "englishpb") merge(GRAM_ALL.pb);
  return out;
}
Gen.mapChapters("english", build("english"));
Gen.mapChapters("englishpb", build("englishpb"));

const HI_MAP = {
  2: { "ek-aur-anek": ["hiVachan"], "vilom-shabd": ["hiVilom"], ling: ["hiLing"] },
  3: { ling: ["hiLing"], vachan: ["hiVachan"], "vilom-shabd": ["hiVilom"], "paryayvachi-shabd": ["hiParyay"] },
  6: { ling: ["hiLing"], vachan: ["hiVachan"], "vilom-shabd": ["hiVilom", "hiVilomAdv"] },
  7: { "paryayvachi-shabd": ["hiParyay", "hiParyayAdv"] },
};
Gen.mapChapters("hindi", HI_MAP);
Gen.mapChapters("hindipb", HI_MAP);
Gen.mapChapters("punjabi", {
  2: { "ikk-te-bahute": ["paVachan"], "munda-kudi": ["paLing"], "ulat-shabd": ["paVirodhi"] },
  3: { "ikk-vachan-bahu-vachan": ["paVachan"], ling: ["paLing"], "ulat-arth": ["paVirodhi"] },
  6: { ling: ["paLing"], vachan: ["paVachan"], "virodhi-shabad": ["paVirodhi", "paVirodhiAdv"] },
});

// ---- tables, for the checks in scripts/check-gen.js and tests ----
Gen.lang = {
  HI, PA, E_PLURAL_1, E_PLURAL_2, AN_1, A_1, AN_2, A_2: A_2_OK, E_OPP_1, E_OPP_2, E_REG, E_IRR, E_CMP, E_GEN, E_SYN, E_NK,
  // Problems found in the word lists (an empty list = fine): duplicates, conflicts, entries that break their own rule.
  check() {
    const bad = [];
    const dups = (label, arr) => { const seen = new Set(); for (const x of arr) { if (seen.has(x)) bad.push(`${label}: "${x}" appears twice`); seen.add(x); } };
    // English plurals
    const pl = [...E_PLURAL_1, ...E_PLURAL_2];
    dups("plural singulars", pl.map((r) => r[0]));
    dups("plural plurals", pl.filter((r) => r[2] !== "zero").map((r) => r[1]));
    for (const [s, p, rule] of pl) {
      if (rule !== "zero" && s === p) bad.push(`plural "${s}" equals its plural`);
      const exp = { s: s + "s", es: s + "es", ies: s.slice(0, -1) + "ies", ys: s + "s", ves: s.endsWith("fe") ? s.slice(0, -2) + "ves" : s.slice(0, -1) + "ves", oes: s + "es", os: s + "s" }[rule];
      if (exp && exp !== p) bad.push(`plural ${s}: rule ${rule} gives ${exp}, list says ${p}`);
      if (rule === "ies" && !/[^aeiou]y$/.test(s)) bad.push(`plural ${s}: not consonant + y`);
      if (rule === "ys" && !/[aeiou]y$/.test(s)) bad.push(`plural ${s}: not vowel + y`);
    }
    for (const s of pl.map((r) => r[0])) if (pl.some((r) => r[1] === s && r[0] !== s)) bad.push(`plural conflict: "${s}" is both a singular and a plural`);
    // a / an: no word in both lists; sound check on the easy lists
    dups("a/an easy lists", [...AN_1, ...A_1]);
    for (const w of [...AN_1, ...AN_2]) if ([...A_1, ...A_2_OK].includes(w)) bad.push(`"${w}" is in both the a-list and the an-list`);
    for (const w of AN_1) if (!/^[aeiou]/.test(w)) bad.push(`an-word "${w}" does not start with a vowel`);
    for (const w of A_1) if (/^[aeiou]/.test(w)) bad.push(`a-word "${w}" starts with a vowel`);
    for (const w of AN_2) if (!/^([aeiou]|hour|honour|heir|honest)/.test(w)) bad.push(`an-word "${w}" is not a vowel or silent-h sound`);
    for (const w of A_2_OK) if (/^[aeiou]/.test(w) && !/^(u|European|one|ewe|euro)/.test(w)) bad.push(`a-word "${w}" starts with a vowel sound`);
    // opposites: a word may be in one pair only; no pair with identical words
    const opp = [...E_OPP_1, ...E_OPP_2];
    dups("English opposites (word in two pairs)", opp.flatMap((r) => [r[0], r[1]]));
    // past tense
    dups("regular verbs", E_REG.map((r) => r[0]));
    dups("irregular verbs", E_IRR.map((r) => r[0]));
    for (const [b, p] of E_REG) if (!regRule(b, p)) bad.push(`regular verb ${b} → ${p} fits no rule`);
    for (const [b] of E_REG) if (E_IRR.some((r) => r[0] === b)) bad.push(`verb "${b}" is in both the regular and irregular lists`);
    for (const [b, p, pp] of E_IRR) if (p === naivePast(b)) bad.push(`irregular verb ${b} has a regular past ${p}`);
    for (const v of E_VS) { const r = IRRMAP[v.b]; if (!r) bad.push(`sentence verb ${v.b} is not in the irregular list`); else if (r[1] === r[2] || r[1] === v.b || r[2] === v.b) bad.push(`sentence verb ${v.b}: base, past and participle must all differ`); }
    // comparison
    dups("comparison words", E_CMP.map((r) => r[0]));
    for (const [w, c, s, kind] of E_CMP) {
      const exp = { er: [w + "er", w + "est"], r: [w + "r", w + "st"], dbl: [w + w.slice(-1) + "er", w + w.slice(-1) + "est"], ier: [w.slice(0, -1) + "ier", w.slice(0, -1) + "iest"], more: ["more " + w, "most " + w] }[kind];
      if (exp && (exp[0] !== c || exp[1] !== s)) bad.push(`comparison ${w}: rule ${kind} gives ${exp.join("/")}, list says ${c}/${s}`);
    }
    // gender
    dups("gender words", E_GEN.flatMap((r) => r));
    // synonyms
    dups("synonym words", E_SYN.flatMap((g) => [...g.easy, ...g.hard]));
    // noun kinds
    dups("noun kinds", Object.values(E_NK).flat());
    // Hindi / Punjabi
    const hiExp = (s, rule) => ({ e: s.slice(0, -1) + "े", iyan: s.slice(0, -1) + "ियाँ", iya: s + "ँ", en: s + "ें", aen: s + "एँ" })[rule];
    dups("Hindi vachan", HI.vachan.map((r) => r[0]));
    dups("Hindi vachan plurals", HI.vachan.map((r) => r[1]));
    for (const [s, p, rule] of HI.vachan) if (hiExp(s, rule) !== p) bad.push(`Hindi vachan ${s}: rule ${rule} gives ${hiExp(s, rule)}, list says ${p}`);
    const paExp = (s, rule) => ({ e: s.slice(0, -1) + "ੇ", iaan: s + "ਆਂ", aan: s + "ਾਂ" })[rule];
    dups("Punjabi vachan", PA.vachan.map((r) => r[0]));
    dups("Punjabi vachan plurals", PA.vachan.map((r) => r[1]));
    for (const [s, p, rule] of PA.vachan) if (paExp(s, rule) !== p) bad.push(`Punjabi vachan ${s}: rule ${rule} gives ${paExp(s, rule)}, list says ${p}`);
    dups("Hindi ling masculine", HI.ling.map((r) => r[0]));
    dups("Hindi ling feminine", HI.ling.map((r) => r[1]));
    dups("Punjabi ling masculine", PA.ling.map((r) => r[0]));
    dups("Punjabi ling feminine", PA.ling.map((r) => r[1]));
    dups("Hindi vilom", [...HI.vilom.easy, ...HI.vilom.hard].flatMap((r) => r));
    dups("Punjabi virodhi", [...PA.virodhi.easy, ...PA.virodhi.hard].flatMap((r) => r));
    // easy groups: every word once. Hard groups: the first word is the everyday word that links to the easy list; the others are new words.
    const easyAll = HI.paryay.easy.flat(), hardAll = HI.paryay.hard.flatMap((g) => g.slice(1));
    dups("Hindi paryay easy words", easyAll);
    dups("Hindi paryay hard heads", HI.paryay.hard.map((g) => g[0]));
    for (const w of hardAll) if (easyAll.includes(w)) bad.push(`Hindi paryay: "${w}" is in both lists`);
    dups("Hindi paryay hard words", hardAll);
    for (const [label, pairs] of [["English opposites", opp], ["Hindi vilom", [...HI.vilom.easy, ...HI.vilom.hard]], ["Punjabi virodhi", [...PA.virodhi.easy, ...PA.virodhi.hard]]]) for (const p of pairs) if (p[0] === p[1]) bad.push(`${label}: ${p[0]} opposite of itself`);
    return bad;
  },
};
})();
