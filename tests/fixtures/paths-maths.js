StudyData.addPath("maths", {
  title: "Maths",
  titleLocal: "ਗਣਿਤ / गणित",
  topics: [
    {
      id: "fractions", title: "Fractions", icon: "½", summary: "From halves to rational numbers.",
      levels: [
        { id: "fractions-0", level: 0, title: "Halves and quarters", goal: "Split things into halves and quarters.", from: [], gens: ["fracOf"],
          own: { quiz: [
            { q: "Half of 8 is", options: ["4","2","6","8"], answer: 0, explain: "8 split into 2 equal parts gives 4." },
            { q: "Half of 10 is", options: ["5","2","4","10"], answer: 0, explain: "10 split into 2 equal parts gives 5." },
            { q: "A quarter of 8 is", options: ["2","4","1","3"], answer: 0, explain: "8 split into 4 equal parts gives 2." },
            { q: "How many quarters make a whole?", options: ["4","2","3","5"], answer: 0, explain: "Four quarters make one whole." },
            { q: "Half of 6 is", options: ["3","2","4","6"], answer: 0, explain: "6 split into 2 equal parts gives 3." },
          ],
          notes: [{ heading: "Equal parts", points: ["A half is one of two equal parts.", "A quarter is one of four equal parts."] }, { heading: "Using them", points: ["Half of a number: divide by 2.", "A quarter: divide by 4."] }],
          terms: [{ term: "Half", meaning: "One of two equal parts." }, { term: "Quarter", meaning: "One of four equal parts." }, { term: "Whole", meaning: "All of something." }],
          qa: [{ q: "What is half of 12?", a: "6" }] } },
        { id: "fractions-3", level: 3, title: "Fractions in Class 3", goal: "Read and compare fractions.", from: [{ cls: 3, subject: "maths", chapter: "fractions" }] },
        { id: "fractions-6", level: 6, title: "Fractions in Class 6", goal: "Add and subtract fractions.", from: [{ cls: 6, subject: "maths", chapter: "fractions", board: "cbse" }, { cls: 6, subject: "mathspb", chapter: "fractions", board: "pseb" }] },
      ],
    },
  ],
});
