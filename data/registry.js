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

  const classes = Object.keys(catalog).map(Number);
  const content = {};
  const ready = {};
  const loading = {};

  function add(classNumber, subjectId, data) {
    content[classNumber] = content[classNumber] || {};
    content[classNumber][subjectId] = data;
  }

  function chapters(classNumber, subjectId) {
    const c = content[classNumber] && content[classNumber][subjectId];
    return c ? c.chapters : [];
  }

  function subject(id) {
    return subjects.find((s) => s.id === id);
  }

  function subjectsFor(classNumber) {
    return (catalog[classNumber] || []).map(subject);
  }

  const files = (classNumber) => (catalog[classNumber] || []).map((id) => `data/class${classNumber}/${id}.js`);

  // Loads a class's data files in the browser. A missing file just means "coming soon".
  function load(classNumber) {
    if (!loading[classNumber]) {
      loading[classNumber] = Promise.all(
        files(classNumber).map(
          (src) =>
            new Promise((resolve) => {
              const s = document.createElement("script");
              s.src = src;
              s.onload = s.onerror = resolve;
              document.head.appendChild(s);
            })
        )
      ).then(() => {
        ready[classNumber] = true;
      });
    }
    return loading[classNumber];
  }

  return { subjects, classes, catalog, content, add, chapters, subject, subjectsFor, files, load, isLoaded: (c) => !!ready[c] };
})();
