// Central registry for all study content.
// Each file in data/class*/ calls StudyData.add(classNumber, subjectId, { chapters: [...] }).
// Only the student's own class is loaded (see load), so the app stays light on phones.
// See CONTENT_GUIDE.md for the chapter format.
globalThis.StudyData = (function () {
  // `stream` groups Class 11–12 subjects on the home screen.
  const subjects = [
    { id: "maths",       name: "Mathematics",       short: "Maths",       native: "गणित",             icon: "➗", color: "#5b5bd6", stream: "Science" },
    { id: "physics",     name: "Physics",           short: "Physics",     native: "भौतिकी",           icon: "⚛️", color: "#1098ad", stream: "Science" },
    { id: "chemistry",   name: "Chemistry",         short: "Chemistry",   native: "रसायन विज्ञान",     icon: "⚗️", color: "#e8590c", stream: "Science" },
    { id: "biology",     name: "Biology",           short: "Biology",     native: "जीव विज्ञान",       icon: "🧬", color: "#2f9e44", stream: "Science" },
    { id: "science",     name: "Science",           short: "Science",     native: "विज्ञान",           icon: "🔬", color: "#12a594" },
    { id: "evs",         name: "EVS",               short: "EVS",         native: "पर्यावरण अध्ययन",   icon: "🌱", color: "#2f9e44" },
    { id: "sst",         name: "Social Science",    short: "SST",         native: "सामाजिक विज्ञान",   icon: "🌏", color: "#e5821c" },
    { id: "accountancy", name: "Accountancy",       short: "Accounts",    native: "लेखाशास्त्र",        icon: "📒", color: "#f59f00", stream: "Commerce" },
    { id: "business",    name: "Business Studies",  short: "Business",    native: "व्यवसाय अध्ययन",    icon: "💼", color: "#ae3ec9", stream: "Commerce" },
    { id: "economics",   name: "Economics",         short: "Economics",   native: "अर्थशास्त्र",        icon: "📈", color: "#a61e4d", stream: "Commerce" },
    { id: "history",     name: "History",           short: "History",     native: "इतिहास",            icon: "🏛️", color: "#a0612a", stream: "Arts" },
    { id: "geography",   name: "Geography",         short: "Geography",   native: "भूगोल",             icon: "🗺️", color: "#087f5b", stream: "Arts" },
    { id: "polsci",      name: "Political Science", short: "Pol. Sci.",   native: "राजनीति विज्ञान",   icon: "⚖️", color: "#c92a2a", stream: "Arts" },
    { id: "english",     name: "English",           short: "English",     native: "अंग्रेज़ी",           icon: "📖", color: "#3a7bd5", stream: "Languages" },
    { id: "hindi",       name: "Hindi",             short: "Hindi",       native: "हिंदी",              icon: "✍️", color: "#d6409f", stream: "Languages" },
    { id: "punjabi",     name: "Punjabi",           short: "Punjabi",     native: "ਪੰਜਾਬੀ",             icon: "ਪ",  color: "#8e4ec6", stream: "Languages" },
    // PSEB versions of subjects whose books differ from NCERT.
    { id: "sstpb",       name: "Social Science",    short: "SST",         native: "ਸਮਾਜਿਕ ਸਿੱਖਿਆ",       icon: "🌏", color: "#e5821c" },
    { id: "englishpb",   name: "English",           short: "English",     native: "ਅੰਗਰੇਜ਼ੀ",            icon: "📖", color: "#3a7bd5", stream: "Languages" },
    { id: "hindipb",     name: "Hindi",             short: "Hindi",       native: "हिंदी",              icon: "✍️", color: "#d6409f", stream: "Languages" },
    { id: "mathspb",     name: "Mathematics",       short: "Maths",       native: "ਗਣਿਤ",              icon: "➗", color: "#5b5bd6" },
    { id: "sciencepb",   name: "Science",           short: "Science",     native: "ਵਿਗਿਆਨ",            icon: "🔬", color: "#12a594" },
    { id: "historypb",   name: "History",           short: "History",     native: "ਇਤਿਹਾਸ",            icon: "🏛️", color: "#a0612a", stream: "Arts" },
    { id: "polscipb",    name: "Political Science", short: "Pol. Sci.",   native: "ਰਾਜਨੀਤੀ ਸ਼ਾਸਤਰ",      icon: "⚖️", color: "#c92a2a", stream: "Arts" },
    { id: "phc",         name: "Punjab History and Culture", short: "Punjab Hist.", native: "ਪੰਜਾਬ ਦਾ ਇਤਿਹਾਸ ਅਤੇ ਸੱਭਿਆਚਾਰ", icon: "🏰", color: "#a0612a" },
  ];

  const LANGS = ["english", "hindi", "punjabi"];
  const SENIOR = ["physics", "chemistry", "maths", "biology", "accountancy", "business", "economics", "history", "geography", "polsci", ...LANGS];

  // Which subjects each class studies (one data file per entry: data/class{N}/{id}.js).
  const catalog = {
    1: ["maths", ...LANGS],
    2: ["maths", ...LANGS],
    3: ["maths", "evs", ...LANGS],
    4: ["maths", "evs", ...LANGS],
    5: ["maths", "evs", ...LANGS],
    6: ["maths", "science", "sst", ...LANGS],
    7: ["maths", "science", "sst", ...LANGS],
    8: ["maths", "science", "sst", ...LANGS],
    9: ["maths", "science", "sst", ...LANGS],
    10: ["maths", "science", "sst", ...LANGS],
    11: SENIOR,
    12: SENIOR,
  };

  // Boards. CBSE uses `catalog`. PSEB uses NCERT Maths and Science but its own books for other subjects;
  // a class appears here once its PSEB subjects are written. Until then PSEB students see the CBSE set.
  const boards = { cbse: "CBSE", pseb: "PSEB" };
  const boardCatalog = {
    pseb: {
      // Classes 1–5: the topic-based Maths and EVS cover PSEB's learning outcomes; English and Hindi are PSEB's own.
      1: ["maths", "englishpb", "hindipb", "punjabi"],
      2: ["maths", "englishpb", "hindipb", "punjabi"],
      3: ["maths", "evs", "englishpb", "hindipb", "punjabi"],
      4: ["maths", "evs", "englishpb", "hindipb", "punjabi"],
      5: ["maths", "evs", "englishpb", "hindipb", "punjabi"],
      // Classes 6–8: PSEB uses the earlier NCERT Maths and Science books and its own SST and English.
      6: ["mathspb", "sciencepb", "sstpb", "englishpb", "hindipb", "punjabi"],
      7: ["mathspb", "sciencepb", "sstpb", "englishpb", "hindipb", "punjabi"],
      8: ["mathspb", "sciencepb", "sstpb", "englishpb", "hindipb", "punjabi"],
      // Class 9: PSEB still uses the earlier NCERT Maths and Science books (CBSE moved to new ones in 2026–27).
      9: ["mathspb", "sciencepb", "sstpb", "englishpb", "hindipb", "punjabi"],
      10: ["maths", "science", "sstpb", "englishpb", "hindipb", "punjabi", "phc"],
      // Classes 11–12: sciences, maths and commerce follow NCERT units; English, Hindi, History and Political Science are PSEB's own.
      11: ["physics", "chemistry", "maths", "biology", "accountancy", "business", "economics", "historypb", "polscipb", "englishpb", "hindipb", "punjabi"],
      12: ["physics", "chemistry", "maths", "biology", "accountancy", "business", "economics", "historypb", "polscipb", "englishpb", "hindipb", "punjabi"],
    },
  };
  let board = "cbse";
  const catalogFor = (classNumber) => (boardCatalog[board] && boardCatalog[board][classNumber]) || catalog[classNumber] || [];
  const hasBoardContent = (classNumber) => board === "cbse" || !!(boardCatalog[board] && boardCatalog[board][classNumber]);

  // Extra practice (more MCQs, 1–5 mark written questions) lives in data/class{N}/practice/{subject}-{part}.js
  // and is loaded only when a student practises. This lists how many parts each subject has.
  const practiceCatalog = {
    1: { english: 2, maths: 1, hindi: 2, punjabi: 1, englishpb: 2, hindipb: 1 },
    2: { maths: 1, english: 2, hindi: 2, punjabi: 2, englishpb: 2, hindipb: 1 },
    3: { maths: 2, evs: 1, english: 2, hindi: 2, punjabi: 2, englishpb: 2, hindipb: 1 },
    4: { maths: 2, evs: 1, english: 2, hindi: 2, punjabi: 2, englishpb: 2, hindipb: 2 },
    5: { maths: 2, evs: 1, english: 2, hindi: 2, punjabi: 2, englishpb: 2, hindipb: 2 },
    6: { maths: 2, science: 2, sst: 2, english: 3, hindi: 2, punjabi: 1, mathspb: 2, sciencepb: 2, sstpb: 3, englishpb: 4, hindipb: 2 },
    7: { maths: 2, science: 2, sst: 3, english: 3, hindi: 2, punjabi: 2, mathspb: 2, sciencepb: 2, sstpb: 3, englishpb: 4, hindipb: 2 },
    8: { maths: 2, science: 2, sst: 2, english: 3, hindi: 3, punjabi: 2, mathspb: 2, sciencepb: 2, sstpb: 4, englishpb: 4, hindipb: 3 },
    9: { english: 4, hindi: 3, punjabi: 3, sstpb: 3, englishpb: 5, mathspb: 2, sciencepb: 2, hindipb: 2, maths: 2, science: 2, sst: 3 },
    10: { maths: 2, science: 2, sst: 2, english: 2, hindi: 2, punjabi: 2, sstpb: 4, phc: 2, englishpb: 4, hindipb: 3 },
    11: { physics: 2, chemistry: 2, maths: 2, biology: 3, accountancy: 2, business: 2, economics: 2, history: 1, geography: 3, polsci: 3, english: 4, hindi: 3, punjabi: 2, historypb: 4, polscipb: 3, englishpb: 5, hindipb: 2 },
    12: { chemistry: 2, physics: 2, maths: 2, biology: 2, accountancy: 2, business: 2, economics: 2, history: 2, geography: 3, polsci: 2, english: 4, hindi: 3, punjabi: 2, historypb: 4, polscipb: 4, englishpb: 5, hindipb: 3 },
  };

  // Labelled diagrams live in data/class{N}/diagrams/{subject}.js, one file per subject, and load with the
  // practice files. This lists the subjects that have one.
  const diagramCatalog = {
    3: ["evs"],
    4: ["evs"],
    5: ["evs"],
    6: ["science", "maths", "sciencepb", "mathspb"],
    7: ["science", "maths", "sciencepb", "mathspb"],
    8: ["science", "maths", "sciencepb", "mathspb"],
    9: ["sciencepb", "mathspb", "science", "maths", "sst"],
    10: ["science", "maths", "sst"],
    11: ["physics", "chemistry", "biology", "maths", "economics", "geography"],
    12: ["physics", "chemistry", "biology", "maths", "economics", "geography"],
  };

  const classes = Object.keys(catalog).map(Number);
  const content = {};
  const practice = {};
  const diagrams = {};
  const ready = {};
  const loading = {};

  function add(classNumber, subjectId, data) {
    content[classNumber] = content[classNumber] || {};
    content[classNumber][subjectId] = data;
  }

  // data: { chapterId: { mcq: [...], written: [...] } }. Several parts can add to the same chapter.
  function addPractice(classNumber, subjectId, data) {
    const bySubject = ((practice[classNumber] = practice[classNumber] || {})[subjectId] = practice[classNumber][subjectId] || {});
    for (const [chapterId, p] of Object.entries(data)) {
      const into = (bySubject[chapterId] = bySubject[chapterId] || { mcq: [], written: [] });
      into.mcq.push(...(p.mcq || []));
      into.written.push(...(p.written || []));
    }
  }

  // data: { chapterId: [{ title, svg, caption }] }.
  function addDiagrams(classNumber, subjectId, data) {
    ((diagrams[classNumber] = diagrams[classNumber] || {})[subjectId] = diagrams[classNumber][subjectId] || {});
    Object.assign(diagrams[classNumber][subjectId], data);
  }
  const diagramsFor = (classNumber, subjectId, chapterId) =>
    (diagrams[classNumber] && diagrams[classNumber][subjectId] && diagrams[classNumber][subjectId][chapterId]) || [];

  const NO_PRACTICE = { mcq: [], written: [] };
  function practiceFor(classNumber, subjectId, chapterId) {
    return (practice[classNumber] && practice[classNumber][subjectId] && practice[classNumber][subjectId][chapterId]) || NO_PRACTICE;
  }

  function chapters(classNumber, subjectId) {
    const c = content[classNumber] && content[classNumber][subjectId];
    return c ? c.chapters : [];
  }

  // What a subject's content follows: { board, match: "textbook" | "older-book" | "topic", books, note?, reviewed }.
  function syllabus(classNumber, subjectId) {
    const c = content[classNumber] && content[classNumber][subjectId];
    return c ? c.syllabus : null;
  }

  function subject(id) {
    return subjects.find((s) => s.id === id);
  }

  function subjectsFor(classNumber) {
    return catalogFor(classNumber).map(subject);
  }

  const files = (classNumber) => catalogFor(classNumber).map((id) => `data/class${classNumber}/${id}.js`);
  const practiceFiles = (classNumber, subjectId) =>
    Object.entries(practiceCatalog[classNumber] || {})
      .filter(([id]) => (subjectId ? id === subjectId : catalogFor(classNumber).includes(id)))
      .flatMap(([id, parts]) => Array.from({ length: parts }, (_, i) => `data/class${classNumber}/practice/${id}-${i + 1}.js`))
      .concat(
        (diagramCatalog[classNumber] || [])
          .filter((id) => (subjectId ? id === subjectId : catalogFor(classNumber).includes(id)))
          .map((id) => `data/class${classNumber}/diagrams/${id}.js`)
      );

  // Loads script files once. Resolves to true if all loaded, false if any failed (e.g. no connection);
  // calling again retries only the failed ones.
  const fileDone = {};
  const fileLoading = {};
  function loadFiles(srcs) {
    return Promise.all(
      srcs.map((src) => {
        if (fileDone[src]) return true;
        if (!fileLoading[src])
          fileLoading[src] = new Promise((resolve) => {
            const s = document.createElement("script");
            s.src = src;
            s.onload = () => resolve((fileDone[src] = true));
            s.onerror = () => {
              s.remove();
              delete fileLoading[src];
              resolve(false);
            };
            document.head.appendChild(s);
          });
        return fileLoading[src];
      })
    ).then((results) => results.every(Boolean));
  }

  function load(classNumber) {
    const k = `${board}:${classNumber}`;
    if (!loading[k])
      loading[k] = loadFiles(files(classNumber)).then((ok) => {
        if (ok) ready[k] = true;
        else delete loading[k];
        return ok;
      });
    return loading[k];
  }

  const loadPractice = (classNumber, subjectId) => loadFiles(practiceFiles(classNumber, subjectId));
  const practiceLoaded = (classNumber, subjectId) => practiceFiles(classNumber, subjectId).every((f) => fileDone[f]);

  return {
    subjects, classes, catalog, boards, boardCatalog, practiceCatalog, diagramCatalog, content, add, addPractice, practiceFor, addDiagrams, diagramsFor, chapters, syllabus,
    subject, subjectsFor, files, practiceFiles, load, loadPractice, practiceLoaded, hasBoardContent,
    isLoaded: (c) => !!ready[`${board}:${c}`],
    get board() {
      return board;
    },
    setBoard: (b) => (board = boards[b] ? b : "cbse"),
  };
})();
