// Central registry for all study content.
// Each file in data/class*/ calls StudyData.add(classNumber, subjectId, { chapters: [...] }).
// See CONTENT_GUIDE.md for the chapter format.
globalThis.StudyData = (function () {
  const subjects = [
    { id: "maths",   name: "Mathematics",    short: "Maths",   native: "गणित",            icon: "➗", color: "#5b5bd6" },
    { id: "science", name: "Science",        short: "Science", native: "विज्ञान",          icon: "🔬", color: "#12a594" },
    { id: "sst",     name: "Social Science", short: "SST",     native: "सामाजिक विज्ञान", icon: "🌏", color: "#e5821c" },
    { id: "english", name: "English",        short: "English", native: "अंग्रेज़ी",         icon: "📖", color: "#3a7bd5" },
    { id: "hindi",   name: "Hindi",          short: "Hindi",   native: "हिंदी",            icon: "✍️", color: "#d6409f" },
    { id: "punjabi", name: "Punjabi",        short: "Punjabi", native: "ਪੰਜਾਬੀ",           icon: "ਪ",  color: "#8e4ec6" },
  ];

  const classes = [9, 10];
  const content = {};

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

  return { subjects, classes, content, add, chapters, subject };
})();
