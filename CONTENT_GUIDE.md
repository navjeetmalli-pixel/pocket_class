# Content Guide

All study material lives in plain JavaScript files under `data/class1/` … `data/class12/`,
one file per subject, named after the subject id (`maths.js`, `physics.js`, `evs.js` …).
`data/registry.js` lists which subjects each class has (`catalog`). The app loads only the
student's own class, with `<script>` tags, so it works offline and even from `file://`.

Check any file you write with:

```
node scripts/validate.js data/class10/maths.js
```

(Run it with no arguments to check every data file.)

## File shape

```js
StudyData.add(10, "maths", {
  syllabus: {                             // REQUIRED. What this file follows; shown on the subject page
    board: "CBSE",
    match: "textbook",                    // "textbook" (current NCERT book), "older-book", or "topic" (arranged by topic)
    books: ["Mathematics"],               // NCERT book title(s); [] for "topic"
    note: "Optional extra line, e.g. 'A selection of lessons, not every chapter.'",
    reviewed: false                       // after a teacher checks it: "2026-11-15, Mrs Kaur (TGT Maths)"
  },
  chapters: [
    {
      id: "real-numbers",                 // kebab-case, unique within this file
      title: "Real Numbers",              // NCERT chapter name
      section: "Algebra",                 // group label shown in the chapter list
      summary: "One or two sentences on what this chapter is about.",
      source: "Mathematics (2023 reprint) Ch 1, pp. 1–14",  // OPTIONAL. Book, edition/year, chapter and pages it was checked against

      notes: [                            // 3–6 topics, the core revision notes
        {
          heading: "Fundamental Theorem of Arithmetic",
          points: [                       // 3–6 short, exam-focused points each
            "Every composite number can be written as a product of primes in **exactly one way**, apart from the order of the factors.",
            "Example: 140 = 2² × 5 × 7."
          ]
        }
      ],

      formulas: [                         // OPTIONAL. Key formulas / laws / dates / facts to memorise
        "HCF(a, b) × LCM(a, b) = a × b"
      ],

      terms: [                            // 4–6 items. These become flashcards.
        { term: "Prime factorisation", meaning: "Writing a number as a product of prime numbers." }
      ],

      examples: [                         // OPTIONAL (use for Maths and numericals in Science). 1–2 solved examples
        {
          q: "Find the HCF of 96 and 404 by prime factorisation.",
          steps: ["96 = 2⁵ × 3", "404 = 2² × 101", "Common factor with smallest power: 2²"],
          answer: "HCF = 4"
        }
      ],

      qa: [                               // 2–3 board-exam style short-answer questions with model answers
        { q: "Why is 6ⁿ never ending with the digit 0?", a: "For a number to end in 0 it must be divisible by 2 and 5. 6ⁿ = 2ⁿ × 3ⁿ has no factor 5, so it can never end in 0." }
      ],

      quiz: [                             // 5–6 multiple-choice questions
        {
          q: "The HCF of two consecutive natural numbers is always:",
          options: ["0", "1", "2", "The smaller number"],   // exactly 4 distinct options
          answer: 1,                                        // index (0–3) of the correct option
          explain: "Consecutive numbers share no common factor other than 1."
        }
      ]
    }
  ]
});
```

## Writing for each class

Same format for every class, but match the depth and language to the age.

| Classes | Notes | Terms | Quiz | Style |
|---|---|---|---|---|
| 1–2 | 2–3 topics × 2–4 points | 3–5 | 5 very easy | Very short, simple sentences a parent can read aloud. Small numbers, everyday Indian examples (roti, mango, rupee coins, cricket). `qa`: 2 simple questions. |
| 3–5 | 3–4 topics × 3–5 points | 4–5 | 5 | Simple and friendly. One idea per point. |
| 6–8 | 3–5 topics × 3–5 points | 4–6 | 5–6 | Like Class 9–10 but gentler. |
| 9–10 | 3–6 topics × 3–6 points | 4–6 | 5–6 | Board-exam focused. |
| 11–12 | 4–6 topics × 3–6 points | 5–6 | 6 | Board-exam depth, with entrance-exam (JEE/NEET/CUET) flavoured questions where natural. Thorough `formulas`, 2 solved `examples` for numerical subjects, 3 `qa`. |

Textbooks: follow the current NCERT book for that class. NCERT replaced the Class 1–8 books between 2023 and 2025;
if you are not sure of a new book's exact chapter list, organise chapters by the standard syllabus topics for that class
and title them by topic (e.g. "Fractions"), rather than guessing a textbook chapter name.

Literature (English, Hindi, Punjabi stories and poems): only write about chapters you know well. Summarise in your own
words; never reproduce the text.

## Saved progress and editing

The app remembers a student's mistakes by each question's text **and** options, and "known" flashcards by the term.
So you can reorder, add or remove questions freely. Rewording a question, changing its options, or renaming a term
makes it a new item, and any saved mistake or "known" mark for the old version is dropped. That's fine for real fixes,
just don't reword things for no reason. Two questions in one chapter can't have identical text and options.

## Review and sources

All content is a revision aid and must be checked against the textbook before it's relied on. When a teacher
reviews a file, set `syllabus.reviewed` to the date and their name, and add `source` to each chapter they checked.
The validator checks structure, duplicates and formatting. It **cannot** tell whether a fact or answer is correct.

## Rules

- **Accuracy first.** Follow the current (rationalised) NCERT textbooks. If you are not sure about a fact, leave it out. Never invent quotes, dates or statistics.
- **Plain text only**, no HTML. You may use `**bold**` inside notes points, `meaning`, `a`, and `explain` to highlight key words.
- **Maths and science notation uses Unicode**, not LaTeX: x², x³, √2, π, θ, ≤, ≥, ≠, ×, ÷, ±, °, ∠ABC, △ABC, ∥, ⊥, H₂O, CO₂, →, ⇌, Δ, Ω, μ, λ.
- **Quiz options are shuffled by the app**, so never write options like "All of the above", "None of these", "Both A and B", or "(a) and (c)". Every option must make sense on its own.
- Wrong options should be plausible (common student mistakes), not silly.
- Keep each `points` entry to one or two sentences. Students read this on a phone.
- Language: English for every subject except Hindi (written fully in Devanagari) and Punjabi (written fully in Gurmukhi). Chapter `id`s are always ASCII kebab-case.
- Use Indian spellings and context where natural (₹, metres, lakh/crore, Indian examples).

## Practice banks (extra questions)

Each chapter's own `quiz` and `qa` are the core set. For a full year of practice, a class can also have practice
banks: `data/class{N}/practice/{subject}-{part}.js` (part = 1, 2, … so two writers can split a subject).
List the number of parts in `practiceCatalog` in `data/registry.js`, e.g. `10: { maths: 2, science: 2 }`.
They load only when a student opens a quiz, practice tab, mock test or practice sheet.

```js
StudyData.addPractice(10, "maths", {
  "real-numbers": {                      // chapter id from data/class10/maths.js
    mcq: [
      { q: "…", options: ["…", "…", "…", "…"], answer: 2, explain: "…", level: 1 },   // level: 1 easy, 2 medium, 3 hard
      {                                   // assertion–reason: fixed options, so set keepOrder
        q: "Assertion (A): …\nReason (R): …",
        options: [
          "Both A and R are true, and R is the correct explanation of A.",
          "Both A and R are true, but R is not the correct explanation of A.",
          "A is true, but R is false.",
          "A is false, but R is true."
        ],
        answer: 0, explain: "…", level: 2, keepOrder: true
      }
    ],
    written: [
      { q: "…", a: "Model answer, step by step for numericals.", marks: 2 },   // marks: 1, 2, 3, 4 or 5
      { q: "Case study: <short passage>\n(i) …\n(ii) …\n(iii) …", a: "(i) …\n(ii) …\n(iii) …", marks: 4, type: "case" }
    ]
  }
});
```

- `type` is optional: "short", "long", "case", "hots".
- `keepOrder: true` is only for questions whose options must stay in order (assertion–reason). Only these may use
  "Both A and R…" style options.
- Maths and physics chapters also get unlimited generated questions from `js/gen.js` (same formula, new numbers).
  Write the bank for what generators can't do: concepts, proofs, word problems, case studies, "show that" questions.
- Model answers should be what earns full marks in a board exam: key steps, units, and the final answer.

## Diagrams

Labelled diagrams live in `data/class{N}/diagrams/{subject}.js`, one file per subject, and appear in a chapter's
Notes after the topic cards. Add the subject to `diagramCatalog` in `data/registry.js` so the file loads.

```js
// Class 10 Science diagrams. Format: see "Diagrams" in CONTENT_GUIDE.md.
StudyData.addDiagrams(10, "science", {
  "light-reflection-and-refraction": [
    {
      title: "Convex lens: object beyond 2F₁",
      caption: "One or two sentences on what the diagram shows. **bold** allowed.",
      svg: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor"> … </svg>`,
    },
  ],
});
```

Rules (the validator checks most of them):
- Draw the diagrams students are expected to **draw or label in the exam**: ray diagrams, circuits, apparatus, cell
  and organ outlines, cycles and flowcharts, geometry figures, graphs, supply–demand curves. Skip chapters that don't need one.
- Clear schematic line drawings, like a neat textbook or board-answer diagram. No decoration, no realistic shading.
- Colours only from the theme: `currentColor` for lines and text, `var(--dg-accent)` for rays/arrows/highlights,
  `var(--dg-fill)` for light fills, `var(--dg-muted)` for secondary labels and dashed axes. Never hex or named colours.
- Every part the exam asks for is labelled with `<text>` (font-size 12–14). Labels must not overlap lines or each other.
- `viewBox` about 560 wide; no `width`/`height` on `<svg>`. Give marker and gradient ids a unique suffix
  (e.g. `ar-l10-2`) because many diagrams share one page.
- Accuracy first: compute coordinates (ray diagrams to scale, angles correct, graphs through the right points).
  If you can't draw something correctly as a simple schematic, leave it out.
- No `<script>`, event handlers, `<image>`, `<foreignObject>` or links. Keep each SVG under about 10 KB.
