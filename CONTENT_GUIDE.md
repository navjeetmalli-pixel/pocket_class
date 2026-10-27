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
  chapters: [
    {
      id: "real-numbers",                 // kebab-case, unique within this file
      title: "Real Numbers",              // NCERT chapter name
      section: "Algebra",                 // group label shown in the chapter list
      summary: "One or two sentences on what this chapter is about.",

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

## Rules

- **Accuracy first.** Follow the current (rationalised) NCERT textbooks. If you are not sure about a fact, leave it out. Never invent quotes, dates or statistics.
- **Plain text only**, no HTML. You may use `**bold**` inside notes points, `meaning`, `a`, and `explain` to highlight key words.
- **Maths and science notation uses Unicode**, not LaTeX: x², x³, √2, π, θ, ≤, ≥, ≠, ×, ÷, ±, °, ∠ABC, △ABC, ∥, ⊥, H₂O, CO₂, →, ⇌, Δ, Ω, μ, λ.
- **Quiz options are shuffled by the app**, so never write options like "All of the above", "None of these", "Both A and B", or "(a) and (c)". Every option must make sense on its own.
- Wrong options should be plausible (common student mistakes), not silly.
- Keep each `points` entry to one or two sentences. Students read this on a phone.
- Language: English for every subject except Hindi (written fully in Devanagari) and Punjabi (written fully in Gurmukhi). Chapter `id`s are always ASCII kebab-case.
- Use Indian spellings and context where natural (₹, metres, lakh/crore, Indian examples).
