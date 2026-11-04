// Maths "Practice by topic" path: Level 0 (before Class 1) up to Class 12.
// Format: see "Topic paths" notes. Levels reuse existing chapters; `own` is used only where nothing exists (Level 0).
StudyData.addPath("maths", {
  title: "Maths",
  titleLocal: "ਗਣਿਤ / गणित",
  topics: [
    // ───────────────────────────── Numbers and operations ─────────────────────────────
    {
      id: "numbers",
      title: "Numbers and operations",
      icon: "123",
      summary: "From counting 1 to 10 to place value, the four operations, integers, rational and real numbers, and powers.",
      levels: [
        {
          id: "numbers-0", level: 0, title: "Counting, more or less, first adding",
          goal: "Count up to 10, say which group has more, fewer or the same, and add small groups using pictures.",
          from: [],
          own: {
            id: "counting-and-first-adding",
            title: "Counting, More or Less, First Adding",
            section: "Numbers",
            summary: "We count things from 1 to 10, say which group has more or less, and join two small groups together.",
            notes: [
              {
                heading: "Counting 1 to 10",
                points: [
                  "Count one thing at a time and touch each one: 1, 2, 3.",
                  "The last number you say tells how many there are.",
                  "🍎🍎🍎 There are **3** apples.",
                  "🌟🌟🌟🌟🌟 There are **5** stars."
                ]
              },
              {
                heading: "More, less, same",
                points: [
                  "If one group has extra things, it has **more**.",
                  "The group with fewer things has **less**.",
                  "🐟🐟🐟 and 🐟🐟🐟 have the **same** number.",
                  "🥭🥭🥭🥭 has more than 🥭🥭."
                ]
              },
              {
                heading: "Adding with pictures",
                points: [
                  "Adding means putting two groups together.",
                  "🍌🍌 and 🍌 together make 🍌🍌🍌. So 2 and 1 make **3**.",
                  "⭐⭐ and ⭐⭐ together make 4 stars. 2 + 2 = **4**.",
                  "The sign + is read as 'plus' or 'and'."
                ]
              }
            ],
            terms: [
              { term: "Count", meaning: "Say the numbers 1, 2, 3 one by one for each thing." },
              { term: "More", meaning: "A group that has extra things." },
              { term: "Less", meaning: "A group that has fewer things." },
              { term: "Same", meaning: "Two groups with an equal number of things." },
              { term: "Add", meaning: "Put two groups together to find how many in all." }
            ],
            examples: [
              {
                q: "🐶🐶 and 🐶🐶🐶 are together. How many dogs?",
                steps: ["Count the first group: 2.", "Count the second group: 3.", "Count all together: 1, 2, 3, 4, 5."],
                answer: "5 dogs"
              }
            ],
            qa: [
              { q: "What does the last number you count tell you?", a: "It tells how many things there are." },
              { q: "2 balls and 3 balls come together. How many balls?", a: "5 balls, because 2 + 3 = 5." }
            ],
            quiz: [
              { q: "How many stars? ⭐⭐⭐⭐", options: ["3", "4", "5", "6"], answer: 1, explain: "Counting the stars one by one gives 4." },
              { q: "How many apples? 🍎🍎🍎🍎🍎🍎", options: ["5", "6", "7", "8"], answer: 1, explain: "There are 6 apples." },
              { q: "Which group has more? 🐟🐟 or 🐟🐟🐟🐟", options: ["The first group (2 fish)", "The second group (4 fish)", "They are the same", "Nobody can tell"], answer: 1, explain: "4 fish are more than 2 fish." },
              { q: "Which group has less? 🌼🌼🌼🌼🌼 or 🌼🌼", options: ["5 flowers", "2 flowers", "They are the same", "Nobody can tell"], answer: 1, explain: "2 flowers are fewer than 5 flowers." },
              { q: "🚗🚗🚗 and 🚲🚲🚲. What can we say?", options: ["Cars are more", "Bicycles are more", "They are the same number", "Cars are fewer"], answer: 2, explain: "Both groups have 3 things." },
              { q: "What comes after 7 when we count?", options: ["6", "8", "9", "10"], answer: 1, explain: "The counting order is 7, 8, 9." },
              { q: "What comes just before 5?", options: ["3", "4", "6", "7"], answer: 1, explain: "Counting: 3, 4, 5." },
              { q: "2 + 1 = ?", options: ["2", "3", "4", "1"], answer: 1, explain: "2 and 1 more make 3." },
              { q: "🍌🍌🍌 and 🍌🍌 together. How many bananas?", options: ["4", "5", "6", "3"], answer: 1, explain: "3 + 2 = 5." },
              { q: "Which is the biggest number?", options: ["4", "9", "6", "2"], answer: 1, explain: "9 comes last in the counting order, so it is the biggest." },
              { q: "How many fingers on one hand?", options: ["4", "5", "6", "10"], answer: 1, explain: "One hand has 5 fingers." }
            ]
          }
        },
        {
          id: "numbers-1", level: 1, title: "Numbers up to 50 and zero",
          goal: "Read, write and compare numbers up to 50 and add or subtract within 9.",
          from: [
            { cls: 1, subject: "maths", chapter: "numbers-1-to-9" },
            { cls: 1, subject: "maths", chapter: "zero" },
            { cls: 1, subject: "maths", chapter: "numbers-10-to-20" },
            { cls: 1, subject: "maths", chapter: "numbers-up-to-50" },
            { cls: 1, subject: "maths", chapter: "addition-up-to-9" },
            { cls: 1, subject: "maths", chapter: "subtraction-up-to-9" }
          ],
          gens: ["add1", "sub1"]
        },
        {
          id: "numbers-2", level: 2, title: "Place value, carrying and borrowing",
          goal: "Use tens and ones to add and subtract two-digit numbers, and see multiplication as repeated addition.",
          from: [
            { cls: 2, subject: "maths", chapter: "numbers-up-to-100" },
            { cls: 2, subject: "maths", chapter: "place-value-tens-and-ones" },
            { cls: 2, subject: "maths", chapter: "addition-with-carrying" },
            { cls: 2, subject: "maths", chapter: "subtraction-with-borrowing" },
            { cls: 2, subject: "maths", chapter: "multiplication-as-repeated-addition" }
          ],
          gens: ["add2", "sub2", "repAdd"]
        },
        {
          id: "numbers-3", level: 3, title: "Three-digit numbers, tables and division",
          goal: "Work with numbers up to 999, know tables 2 to 10 and share things equally.",
          from: [
            { cls: 3, subject: "maths", chapter: "numbers-up-to-999" },
            { cls: 3, subject: "maths", chapter: "addition" },
            { cls: 3, subject: "maths", chapter: "subtraction" },
            { cls: 3, subject: "maths", chapter: "multiplication-tables" },
            { cls: 3, subject: "maths", chapter: "division" }
          ],
          gens: ["add3", "sub3", "table", "div"]
        },
        {
          id: "numbers-4", level: 4, title: "Four-digit numbers, multiplication, division, factors",
          goal: "Multiply and divide bigger numbers and list factors and multiples.",
          from: [
            { cls: 4, subject: "maths", chapter: "numbers-up-to-9999" },
            { cls: 4, subject: "maths", chapter: "addition-and-subtraction" },
            { cls: 4, subject: "maths", chapter: "multiplication" },
            { cls: 4, subject: "maths", chapter: "division" },
            { cls: 4, subject: "maths", chapter: "factors-and-multiples" }
          ],
          gens: ["mul", "div", "divRem", "hcf"]
        },
        {
          id: "numbers-5", level: 5, title: "Large numbers",
          goal: "Read and calculate with lakhs and crores, and find HCF, LCM and prime factors.",
          from: [
            { cls: 5, subject: "maths", chapter: "large-numbers" },
            { cls: 5, subject: "maths", chapter: "operations-on-large-numbers" },
            { cls: 5, subject: "maths", chapter: "factors-and-multiples" }
          ],
          gens: ["placeVal", "mul", "primeFact"]
        },
        {
          id: "numbers-6", level: 6, title: "Whole numbers, primes and negative numbers",
          goal: "Use divisibility, primes and number puzzles, and meet integers on the number line.",
          from: [
            { cls: 6, subject: "maths", chapter: "number-play" },
            { cls: 6, subject: "maths", chapter: "prime-time" },
            { cls: 6, subject: "maths", chapter: "the-other-side-of-zero" },
            { cls: 6, subject: "mathspb", chapter: "knowing-our-numbers", board: "pseb" },
            { cls: 6, subject: "mathspb", chapter: "whole-numbers", board: "pseb" },
            { cls: 6, subject: "mathspb", chapter: "playing-with-numbers", board: "pseb" },
            { cls: 6, subject: "mathspb", chapter: "integers", board: "pseb" }
          ],
          gens: ["integers", "primeFact"]
        },
        {
          id: "numbers-7", level: 7, title: "Integers, large numbers and common factors",
          goal: "Add, subtract, multiply and divide integers and handle very large numbers.",
          from: [
            { cls: 7, subject: "maths", chapter: "large-numbers-around-us" },
            { cls: 7, subject: "maths", chapter: "arithmetic-expressions" },
            { cls: 7, subject: "maths", chapter: "number-play" },
            { cls: 7, subject: "maths", chapter: "operations-with-integers" },
            { cls: 7, subject: "maths", chapter: "finding-common-ground" },
            { cls: 7, subject: "mathspb", chapter: "integers", board: "pseb" },
            { cls: 7, subject: "mathspb", chapter: "rational-numbers", board: "pseb" },
            { cls: 7, subject: "mathspb", chapter: "exponents-and-powers", board: "pseb" }
          ],
          gens: ["integers", "intDiv", "lcmQ"]
        },
        {
          id: "numbers-8", level: 8, title: "Squares, cubes, powers and rational numbers",
          goal: "Find squares, cubes and roots, use laws of exponents and add and multiply rational numbers.",
          from: [
            { cls: 8, subject: "maths", chapter: "a-square-and-a-cube" },
            { cls: 8, subject: "maths", chapter: "power-play" },
            { cls: 8, subject: "maths", chapter: "a-story-of-numbers" },
            { cls: 8, subject: "maths", chapter: "number-play" },
            { cls: 8, subject: "mathspb", chapter: "rational-numbers", board: "pseb" },
            { cls: 8, subject: "mathspb", chapter: "squares-and-square-roots", board: "pseb" },
            { cls: 8, subject: "mathspb", chapter: "cubes-and-cube-roots", board: "pseb" },
            { cls: 8, subject: "mathspb", chapter: "exponents-and-powers", board: "pseb" }
          ],
          gens: ["squares", "cubes", "expo"]
        },
        {
          id: "numbers-9", level: 9, title: "The number systems and algorithms",
          goal: "Place rational and irrational numbers on the number line and use Euclid's division algorithm.",
          from: [
            { cls: 9, subject: "maths", chapter: "the-world-of-numbers" },
            { cls: 9, subject: "maths", chapter: "the-world-of-algorithms" },
            { cls: 9, subject: "mathspb", chapter: "number-systems", board: "pseb" }
          ]
        },
        {
          id: "numbers-10", level: 10, title: "Real numbers",
          goal: "Use the Fundamental Theorem of Arithmetic, HCF, LCM and irrational numbers.",
          from: [{ cls: 10, subject: "maths", chapter: "real-numbers" }],
          gens: ["hcf", "lcmQ", "hcfLcmProduct", "primeFact"]
        }
      ]
    },

    // ───────────────────────────── Fractions, decimals, percentages ─────────────────────────────
    {
      id: "fractions",
      title: "Fractions, decimals and percentages",
      icon: "½",
      summary: "From halves and quarters to decimals, ratio, proportion, percentages, profit and loss, and interest.",
      levels: [
        {
          id: "fractions-3", level: 3, title: "Half and quarter",
          goal: "Recognise a half and a quarter and find them of small groups.",
          from: [{ cls: 3, subject: "maths", chapter: "fractions" }],
          gens: ["fracOf"]
        },
        {
          id: "fractions-4", level: 4, title: "Fractions and first decimals",
          goal: "Compare fractions and read simple decimals such as 0.5 and 2.75.",
          from: [
            { cls: 4, subject: "maths", chapter: "fractions" },
            { cls: 4, subject: "maths", chapter: "introduction-to-decimals" }
          ],
          gens: ["fracOf", "decAdd"]
        },
        {
          id: "fractions-5", level: 5, title: "Fractions, decimals, percentage",
          goal: "Add fractions and decimals, write a percentage and use the unitary method.",
          from: [
            { cls: 5, subject: "maths", chapter: "fractions" },
            { cls: 5, subject: "maths", chapter: "decimals" },
            { cls: 5, subject: "maths", chapter: "percentage" },
            { cls: 5, subject: "maths", chapter: "money-and-unitary-method" }
          ],
          gens: ["fracAdd", "decAdd", "decMul", "percentOf", "unitary"]
        },
        {
          id: "fractions-6", level: 6, title: "Fractions, decimals and ratio",
          goal: "Add, subtract and compare fractions, and work with ratio and proportion.",
          from: [
            { cls: 6, subject: "maths", chapter: "fractions" },
            { cls: 6, subject: "mathspb", chapter: "fractions", board: "pseb" },
            { cls: 6, subject: "mathspb", chapter: "decimals", board: "pseb" },
            { cls: 6, subject: "mathspb", chapter: "ratio-and-proportion", board: "pseb" }
          ],
          gens: ["fracAdd", "fracSub", "ratioShare"]
        },
        {
          id: "fractions-7", level: 7, title: "Multiplying and dividing fractions and decimals",
          goal: "Multiply and divide fractions and decimals and compare quantities with percentages.",
          from: [
            { cls: 7, subject: "maths", chapter: "working-with-fractions" },
            { cls: 7, subject: "maths", chapter: "a-peek-beyond-the-point" },
            { cls: 7, subject: "maths", chapter: "another-peek-beyond-the-point" },
            { cls: 7, subject: "mathspb", chapter: "fractions-and-decimals", board: "pseb" },
            { cls: 7, subject: "mathspb", chapter: "comparing-quantities", board: "pseb" }
          ],
          gens: ["fracMul", "fracDiv", "decMul", "decDiv"]
        },
        {
          id: "fractions-8", level: 8, title: "Proportion, percentages, profit and interest",
          goal: "Solve direct and inverse proportion, percentage change, profit and loss, discount and interest.",
          from: [
            { cls: 8, subject: "maths", chapter: "proportional-reasoning-1" },
            { cls: 8, subject: "maths", chapter: "fractions-in-disguise" },
            { cls: 8, subject: "maths", chapter: "proportional-reasoning-2" },
            { cls: 8, subject: "mathspb", chapter: "comparing-quantities", board: "pseb" },
            { cls: 8, subject: "mathspb", chapter: "direct-and-inverse-proportions", board: "pseb" }
          ],
          gens: ["percentChange", "profitLoss", "discount", "simpleInt", "compoundInt"]
        }
      ]
    },

    // ───────────────────────────── Algebra ─────────────────────────────
    {
      id: "algebra",
      title: "Algebra",
      icon: "x²",
      summary: "From spotting patterns to letters, equations, polynomials, quadratics, progressions, matrices and linear programming.",
      levels: [
        {
          id: "algebra-0", level: 0, title: "First patterns",
          goal: "Spot what comes next in a simple pattern of colours, shapes or numbers.",
          from: [],
          own: {
            id: "first-patterns",
            title: "First Patterns",
            section: "Patterns",
            summary: "A pattern is something that repeats in the same way again and again. We find the pattern and say what comes next.",
            notes: [
              {
                heading: "What is a pattern?",
                points: [
                  "A pattern repeats in the same way.",
                  "🔴🔵🔴🔵🔴🔵 is a pattern of red and blue.",
                  "The part that repeats is called the **unit** of the pattern.",
                  "Day and night come again and again, so they make a pattern."
                ]
              },
              {
                heading: "Find what comes next",
                points: [
                  "Look at the first few things and see what repeats.",
                  "🔺⭕🔺⭕🔺 comes next: ⭕.",
                  "🍎🍎🍌🍎🍎🍌🍎🍎 comes next: 🍌.",
                  "Say the pattern aloud: apple, apple, banana, apple, apple..."
                ]
              },
              {
                heading: "Number patterns",
                points: [
                  "Counting 1, 2, 3, 4 is a pattern: each number is 1 more.",
                  "2, 4, 6, 8 jumps by 2 each time. Next is 10.",
                  "5, 10, 15, 20 jumps by 5 each time. Next is 25.",
                  "Clap, clap, stamp, clap, clap, stamp is a pattern too."
                ]
              }
            ],
            terms: [
              { term: "Pattern", meaning: "Things that repeat in the same way again and again." },
              { term: "Repeat", meaning: "To come again and again." },
              { term: "Next", meaning: "What comes just after." },
              { term: "Unit of a pattern", meaning: "The small part that repeats over and over." }
            ],
            examples: [
              {
                q: "What comes next? 🟢🟡🟢🟡🟢__",
                steps: ["The pattern is green, yellow, green, yellow.", "The last one is green, so yellow comes next."],
                answer: "🟡 (yellow)"
              }
            ],
            qa: [
              { q: "What is a pattern?", a: "Things that repeat in the same way again and again." },
              { q: "What comes next: 2, 4, 6, 8, __?", a: "10, because each number is 2 more than the one before." }
            ],
            quiz: [
              { q: "What comes next? 🔴🔵🔴🔵🔴__", options: ["🔴", "🔵", "🟢", "🟡"], answer: 1, explain: "Red and blue take turns, so blue is next." },
              { q: "What comes next? 🔺⭕🔺⭕🔺__", options: ["🔺", "⭕", "⬛", "⭐"], answer: 1, explain: "Triangle and circle take turns. After a triangle comes a circle." },
              { q: "What comes next? 🍎🍎🍌🍎🍎🍌🍎🍎__", options: ["🍎", "🍌", "🍇", "🍊"], answer: 1, explain: "After two apples comes a banana." },
              { q: "What comes next? 1, 2, 3, 4, __", options: ["3", "5", "6", "4"], answer: 1, explain: "Each number is 1 more than the one before." },
              { q: "What comes next? 2, 4, 6, 8, __", options: ["9", "10", "12", "7"], answer: 1, explain: "The numbers go up by 2 each time." },
              { q: "What comes next? 5, 10, 15, 20, __", options: ["21", "25", "30", "22"], answer: 1, explain: "The numbers go up by 5 each time." },
              { q: "Which of these is a pattern?", options: ["🔵🔵🔴🔵🔵🔴", "🔵🔴🟢⭐🍎🐟", "🍎🐶🚗🌼⭐🎈", "🐟🔺🍌🚲🌼🔵"], answer: 0, explain: "Only the first one repeats in the same way: blue, blue, red." },
              { q: "What repeats in 🌞🌙🌞🌙🌞🌙?", options: ["Sun and moon", "Only the sun", "Only the moon", "A star"], answer: 0, explain: "The sun and the moon take turns again and again." },
              { q: "What comes next? 10, 9, 8, 7, __", options: ["8", "6", "5", "10"], answer: 1, explain: "The numbers go down by 1 each time." },
              { q: "👏👏🦶👏👏🦶👏👏__ What comes next?", options: ["👏", "🦶", "🎵", "👀"], answer: 1, explain: "After two claps comes a stamp." }
            ]
          }
        },
        {
          id: "algebra-1", level: 1, title: "Patterns with shapes and numbers",
          goal: "Continue and make simple repeating patterns.",
          from: [{ cls: 1, subject: "maths", chapter: "patterns" }]
        },
        {
          id: "algebra-3", level: 3, title: "Growing patterns",
          goal: "Find the rule in number and shape patterns.",
          from: [
            { cls: 2, subject: "maths", chapter: "patterns" },
            { cls: 3, subject: "maths", chapter: "patterns" }
          ]
        },
        {
          id: "algebra-5", level: 5, title: "Number patterns",
          goal: "Describe a rule for a pattern and use it to find later terms.",
          from: [{ cls: 5, subject: "maths", chapter: "patterns" }]
        },
        {
          id: "algebra-6", level: 6, title: "Patterns and first algebra",
          goal: "Describe patterns with rules and use a letter for an unknown number.",
          from: [
            { cls: 6, subject: "maths", chapter: "patterns-in-mathematics" },
            { cls: 6, subject: "mathspb", chapter: "algebra", board: "pseb" }
          ],
          gens: ["evalExpr", "linEq"]
        },
        {
          id: "algebra-7", level: 7, title: "Letter-numbers and simple equations",
          goal: "Write expressions with letters and solve simple equations.",
          from: [
            { cls: 7, subject: "maths", chapter: "expressions-using-letter-numbers" },
            { cls: 7, subject: "maths", chapter: "finding-the-unknown" },
            { cls: 7, subject: "mathspb", chapter: "simple-equations", board: "pseb" },
            { cls: 7, subject: "mathspb", chapter: "algebraic-expressions", board: "pseb" }
          ],
          gens: ["evalExpr", "linEq"]
        },
        {
          id: "algebra-8", level: 8, title: "Identities, factorisation and linear equations",
          goal: "Multiply and factorise expressions and solve equations with the unknown on both sides.",
          from: [
            { cls: 8, subject: "maths", chapter: "we-distribute-yet-things-multiply" },
            { cls: 8, subject: "maths", chapter: "algebra-play" },
            { cls: 8, subject: "mathspb", chapter: "linear-equations-in-one-variable", board: "pseb" },
            { cls: 8, subject: "mathspb", chapter: "algebraic-expressions-and-identities", board: "pseb" },
            { cls: 8, subject: "mathspb", chapter: "factorisation", board: "pseb" }
          ],
          gens: ["linEq", "linEqBoth", "evalExpr"]
        },
        {
          id: "algebra-9", level: 9, title: "Linear polynomials, identities and sequences",
          goal: "Work with polynomials, standard identities, lines in two variables and progressions.",
          from: [
            { cls: 9, subject: "maths", chapter: "introduction-to-linear-polynomials" },
            { cls: 9, subject: "maths", chapter: "exploring-algebraic-identities" },
            { cls: 9, subject: "maths", chapter: "two-variables-one-line" },
            { cls: 9, subject: "maths", chapter: "predicting-what-comes-next-exploring-sequences-and-progressions" },
            { cls: 9, subject: "mathspb", chapter: "polynomials", board: "pseb" },
            { cls: 9, subject: "mathspb", chapter: "linear-equations-in-two-variables", board: "pseb" }
          ],
          gens: ["polyValue", "remainder", "apNth"]
        },
        {
          id: "algebra-10", level: 10, title: "Polynomials and pairs of linear equations",
          goal: "Find zeroes of polynomials and solve two equations in two variables.",
          from: [
            { cls: 10, subject: "maths", chapter: "polynomials" },
            { cls: 10, subject: "maths", chapter: "pair-of-linear-equations-in-two-variables" }
          ]
        },
        {
          id: "algebra-10b", level: 10, title: "Quadratic equations and AP",
          goal: "Solve quadratic equations and use arithmetic progressions.",
          from: [
            { cls: 10, subject: "maths", chapter: "quadratic-equations" },
            { cls: 10, subject: "maths", chapter: "arithmetic-progressions" }
          ]
        },
        {
          id: "algebra-11", level: 11, title: "Inequalities, series, binomial, complex numbers",
          goal: "Solve linear inequalities, sum series, expand (a + b)ⁿ and use complex numbers.",
          from: [
            { cls: 11, subject: "maths", chapter: "linear-inequalities" },
            { cls: 11, subject: "maths", chapter: "sequences-and-series" },
            { cls: 11, subject: "maths", chapter: "binomial-theorem" },
            { cls: 11, subject: "maths", chapter: "complex-numbers-and-quadratic-equations" }
          ],
          gens: ["gpNth", "complexMod"]
        },
        {
          id: "algebra-12", level: 12, title: "Matrices, determinants and linear programming",
          goal: "Work with matrices and determinants and optimise with linear programming.",
          from: [
            { cls: 12, subject: "maths", chapter: "matrices" },
            { cls: 12, subject: "maths", chapter: "determinants" },
            { cls: 12, subject: "maths", chapter: "linear-programming" }
          ],
          gens: ["det2", "det3"]
        }
      ]
    },

    // ───────────────────────────── Geometry ─────────────────────────────
    {
      id: "geometry",
      title: "Geometry",
      icon: "△",
      summary: "From shapes around us to lines, angles, triangles, quadrilaterals, circles, constructions, coordinates, conics and vectors.",
      levels: [
        {
          id: "geometry-0", level: 0, title: "Shapes around us",
          goal: "Name a circle, square, triangle and rectangle and spot them at home.",
          from: [],
          own: {
            id: "shapes-we-see",
            title: "Shapes We See",
            section: "Shapes",
            summary: "Circle, square, triangle and rectangle are shapes. We find them in things around us.",
            notes: [
              {
                heading: "Four shapes",
                points: [
                  "A **circle** is round, like a roti 🫓. It has no corners.",
                  "A **triangle** has 3 sides and 3 corners.",
                  "A **square** has 4 equal sides and 4 corners.",
                  "A **rectangle** has 4 corners. Two sides are long and two are short."
                ]
              },
              {
                heading: "Find shapes at home",
                points: [
                  "A clock face and a coin are circles.",
                  "A slice of watermelon or a samosa can look like a triangle.",
                  "A window or a chessboard can be a square.",
                  "A door, a book and a phone screen are rectangles."
                ]
              },
              {
                heading: "Round and flat",
                points: [
                  "A ball ⚽ is round. It rolls.",
                  "A box 📦 has flat sides. It does not roll.",
                  "A shape drawn on paper is flat. Try tracing a coin to draw a circle."
                ]
              }
            ],
            terms: [
              { term: "Circle", meaning: "A round shape with no corners." },
              { term: "Triangle", meaning: "A shape with 3 sides and 3 corners." },
              { term: "Square", meaning: "A shape with 4 equal sides and 4 corners." },
              { term: "Rectangle", meaning: "A shape with 4 corners and two long and two short sides." },
              { term: "Corner", meaning: "The place where two sides meet." }
            ],
            examples: [
              {
                q: "A slice of pizza 🍕 looks like which shape?",
                steps: ["The slice has a pointed end and a wide end.", "It has 3 sides and 3 corners."],
                answer: "A triangle"
              }
            ],
            qa: [
              { q: "Which shape has no corners?", a: "A circle." },
              { q: "How many corners does a triangle have?", a: "3 corners." }
            ],
            quiz: [
              { q: "Which shape has no corners?", options: ["Circle", "Triangle", "Square", "Rectangle"], answer: 0, explain: "A circle is round, so it has no corners." },
              { q: "How many sides does a triangle have?", options: ["2", "3", "4", "5"], answer: 1, explain: "Tri means three, so a triangle has 3 sides." },
              { q: "How many corners does a square have?", options: ["3", "4", "5", "2"], answer: 1, explain: "A square has 4 corners." },
              { q: "A coin looks like which shape?", options: ["Circle", "Triangle", "Square", "Rectangle"], answer: 0, explain: "A coin is round, like a circle." },
              { q: "A door is usually shaped like a:", options: ["Circle", "Triangle", "Rectangle", "Star"], answer: 2, explain: "A door has 4 corners with two long and two short sides." },
              { q: "Which shape has 3 corners?", options: ["Square", "Circle", "Triangle", "Rectangle"], answer: 2, explain: "A triangle has 3 corners." },
              { q: "Which shape has all 4 sides equal?", options: ["Square", "Triangle", "Circle", "Long rectangle"], answer: 0, explain: "A square has 4 equal sides." },
              { q: "Which one rolls easily?", options: ["A ball", "A book", "A box", "A brick"], answer: 0, explain: "A ball is round, so it rolls." },
              { q: "A clock face is the shape of a:", options: ["Triangle", "Circle", "Rectangle", "Square"], answer: 1, explain: "Most clock faces are round, a circle." },
              { q: "A roti 🫓 is mostly a:", options: ["Circle", "Square", "Triangle", "Rectangle"], answer: 0, explain: "A roti is round." }
            ]
          }
        },
        { id: "geometry-1", level: 1, title: "Shapes around us", goal: "Find circles, squares, rectangles and triangles in things at home.", from: [{ cls: 1, subject: "maths", chapter: "shapes-around-us" }] },
        { id: "geometry-2", level: 2, title: "Shapes and lines", goal: "Tell straight and curved lines apart and describe flat shapes.", from: [{ cls: 2, subject: "maths", chapter: "shapes-and-lines" }] },
        { id: "geometry-3", level: 3, title: "2D and 3D shapes", goal: "Name flat and solid shapes and count their faces and edges.", from: [{ cls: 3, subject: "maths", chapter: "shapes-2d-and-3d" }] },
        {
          id: "geometry-4", level: 4, title: "Lines, angles and symmetry",
          goal: "Draw lines, recognise angles and find lines of symmetry.",
          from: [
            { cls: 4, subject: "maths", chapter: "shapes-lines-and-angles" },
            { cls: 4, subject: "maths", chapter: "patterns-and-symmetry" }
          ]
        },
        {
          id: "geometry-5", level: 5, title: "Angles and nets",
          goal: "Measure angles with a protractor and match solids to their nets.",
          from: [
            { cls: 5, subject: "maths", chapter: "angles" },
            { cls: 5, subject: "maths", chapter: "shapes-and-nets" }
          ]
        },
        {
          id: "geometry-6", level: 6, title: "Lines, angles, symmetry and constructions",
          goal: "Name angle types, find symmetry and construct with a ruler and compass.",
          from: [
            { cls: 6, subject: "maths", chapter: "lines-and-angles" },
            { cls: 6, subject: "maths", chapter: "symmetry" },
            { cls: 6, subject: "maths", chapter: "playing-with-constructions" },
            { cls: 6, subject: "mathspb", chapter: "basic-geometrical-ideas", board: "pseb" },
            { cls: 6, subject: "mathspb", chapter: "understanding-elementary-shapes", board: "pseb" },
            { cls: 6, subject: "mathspb", chapter: "symmetry", board: "pseb" },
            { cls: 6, subject: "mathspb", chapter: "practical-geometry", board: "pseb" }
          ],
          gens: ["complement"]
        },
        {
          id: "geometry-7", level: 7, title: "Parallel lines, triangles and congruence",
          goal: "Use angle rules for parallel lines and triangles, and test whether triangles are congruent.",
          from: [
            { cls: 7, subject: "maths", chapter: "parallel-and-intersecting-lines" },
            { cls: 7, subject: "maths", chapter: "a-tale-of-three-intersecting-lines" },
            { cls: 7, subject: "maths", chapter: "geometric-twins" },
            { cls: 7, subject: "maths", chapter: "constructions-and-tilings" },
            { cls: 7, subject: "mathspb", chapter: "lines-and-angles", board: "pseb" },
            { cls: 7, subject: "mathspb", chapter: "triangle-and-its-properties", board: "pseb" },
            { cls: 7, subject: "mathspb", chapter: "symmetry", board: "pseb" },
            { cls: 7, subject: "mathspb", chapter: "visualising-solid-shapes", board: "pseb" }
          ],
          gens: ["complement", "triAngle", "extAngle"]
        },
        {
          id: "geometry-8", level: 8, title: "Quadrilaterals and the Pythagoras theorem",
          goal: "Use properties of quadrilaterals, solids and the Pythagoras theorem.",
          from: [
            { cls: 8, subject: "maths", chapter: "quadrilaterals" },
            { cls: 8, subject: "maths", chapter: "the-baudhayana-pythagoras-theorem" },
            { cls: 8, subject: "maths", chapter: "exploring-some-geometric-themes" },
            { cls: 8, subject: "mathspb", chapter: "understanding-quadrilaterals", board: "pseb" }
          ],
          gens: ["quadAngle", "polyAngles", "pythag"]
        },
        {
          id: "geometry-9", level: 9, title: "Euclid, triangles, quadrilaterals, circles, coordinates",
          goal: "Prove results on lines, triangles, quadrilaterals and circles and plot points.",
          from: [
            { cls: 9, subject: "maths", chapter: "quadrilaterals" },
            { cls: 9, subject: "maths", chapter: "im-up-and-down-and-round-and-round" },
            { cls: 9, subject: "maths", chapter: "orienting-yourself-the-use-of-coordinates" },
            { cls: 9, subject: "mathspb", chapter: "introduction-to-euclids-geometry", board: "pseb" },
            { cls: 9, subject: "mathspb", chapter: "lines-and-angles", board: "pseb" },
            { cls: 9, subject: "mathspb", chapter: "triangles", board: "pseb" },
            { cls: 9, subject: "mathspb", chapter: "quadrilaterals", board: "pseb" },
            { cls: 9, subject: "mathspb", chapter: "circles", board: "pseb" },
            { cls: 9, subject: "mathspb", chapter: "coordinate-geometry", board: "pseb" }
          ],
          gens: ["quadAngle", "distance"]
        },
        {
          id: "geometry-10", level: 10, title: "Similar triangles, circles and coordinate geometry",
          goal: "Use similarity, tangents to circles, and the distance, midpoint and section formulas.",
          from: [
            { cls: 10, subject: "maths", chapter: "triangles" },
            { cls: 10, subject: "maths", chapter: "circles" },
            { cls: 10, subject: "maths", chapter: "coordinate-geometry" }
          ],
          gens: ["pythag", "distance", "midpoint", "section"]
        },
        {
          id: "geometry-11", level: 11, title: "Straight lines, conics and 3D coordinates",
          goal: "Work with slopes and equations of lines, parabolas, ellipses, hyperbolas and 3D distance.",
          from: [
            { cls: 11, subject: "maths", chapter: "straight-lines" },
            { cls: 11, subject: "maths", chapter: "conic-sections" },
            { cls: 11, subject: "maths", chapter: "introduction-to-three-dimensional-geometry" }
          ],
          gens: ["slope", "dist3d"]
        },
        {
          id: "geometry-12", level: 12, title: "Vectors and 3D geometry",
          goal: "Use vectors, direction cosines, lines and planes in space.",
          from: [
            { cls: 12, subject: "maths", chapter: "vector-algebra" },
            { cls: 12, subject: "maths", chapter: "three-dimensional-geometry" }
          ],
          gens: ["dist3d"]
        }
      ]
    },

    // ───────────────────────────── Measurement and mensuration ─────────────────────────────
    {
      id: "measurement",
      title: "Measurement and mensuration",
      icon: "📏",
      summary: "Length, weight, time and money, then perimeter, area, volume, surface areas and circles.",
      levels: [
        {
          id: "measurement-0", level: 0, title: "Big, small, long, short",
          goal: "Compare things as big or small, long or short, heavy or light.",
          from: [],
          own: {
            id: "big-small-long-short",
            title: "Big, Small, Long, Short",
            section: "Measurement",
            summary: "We compare things by size, length and weight, using words like big, small, long, short, heavy and light.",
            notes: [
              {
                heading: "Big and small",
                points: [
                  "An elephant 🐘 is **big**. An ant 🐜 is **small**.",
                  "A mango is bigger than a grape.",
                  "We say 'bigger' and 'smaller' when we compare two things."
                ]
              },
              {
                heading: "Long and short",
                points: [
                  "A train 🚆 is **long**. A pencil is **short**.",
                  "A giraffe has a long neck.",
                  "Put two things side by side with the ends together to see which is longer."
                ]
              },
              {
                heading: "Heavy and light",
                points: [
                  "A stone is **heavy**. A feather 🪶 is **light**.",
                  "A bag of rice is heavier than a bag of puffed rice.",
                  "A tall thing is not always heavy. A big balloon 🎈 is light."
                ]
              }
            ],
            terms: [
              { term: "Big", meaning: "Large in size." },
              { term: "Small", meaning: "Little in size." },
              { term: "Long", meaning: "Measures much from end to end." },
              { term: "Short", meaning: "Measures little from end to end." },
              { term: "Heavy", meaning: "Hard to lift." },
              { term: "Light", meaning: "Easy to lift." }
            ],
            examples: [
              {
                q: "Which is longer, a pencil or a ruler 📏?",
                steps: ["Put both side by side with one end together.", "The ruler goes further."],
                answer: "The ruler is longer."
              }
            ],
            qa: [
              { q: "Is an elephant big or small?", a: "An elephant is big." },
              { q: "How can we tell which of two things is longer?", a: "Put them side by side with the ends together and see which goes further." }
            ],
            quiz: [
              { q: "Which is bigger?", options: ["Elephant 🐘", "Ant 🐜", "They are the same", "Nobody can tell"], answer: 0, explain: "An elephant is much bigger than an ant." },
              { q: "Which is smaller?", options: ["Bus 🚌", "Cat 🐱", "Elephant 🐘", "House 🏠"], answer: 1, explain: "A cat is the smallest in this group." },
              { q: "A train 🚆 is:", options: ["Long", "Short", "Tiny", "Light"], answer: 0, explain: "A train has many coaches, so it is long." },
              { q: "Which is shorter?", options: ["A pencil", "A road", "A train", "A rope 20 metres"], answer: 0, explain: "A pencil is the shortest." },
              { q: "Which is heavy?", options: ["Feather 🪶", "Stone 🪨", "Leaf 🍃", "Balloon 🎈"], answer: 1, explain: "A stone is hard to lift, so it is heavy." },
              { q: "Which is light?", options: ["Elephant 🐘", "Big rock", "Feather 🪶", "Iron bar"], answer: 2, explain: "A feather is very easy to lift." },
              { q: "Which animal has a long neck?", options: ["Giraffe 🦒", "Cat 🐱", "Frog 🐸", "Fish 🐟"], answer: 0, explain: "A giraffe's neck is very long." },
              { q: "To find which of two pencils is longer, we:", options: ["Put them side by side with ends together", "Count their colours", "Smell them", "Put one in water"], answer: 0, explain: "Lining up the ends shows which goes further." },
              { q: "Which is taller?", options: ["A tree 🌳", "A flower 🌼", "A pebble", "A coin"], answer: 0, explain: "A tree is taller than a flower." },
              { q: "Which is heavier, a mango 🥭 or a watermelon 🍉?", options: ["Mango", "Watermelon", "They are the same", "A pebble"], answer: 1, explain: "A watermelon is much heavier." }
            ]
          }
        },
        {
          id: "measurement-1", level: 1, title: "Longer, heavier, money and days",
          goal: "Compare length and weight, know coins and notes and the days of the week.",
          from: [
            { cls: 1, subject: "maths", chapter: "longer-shorter-heavier-lighter" },
            { cls: 1, subject: "maths", chapter: "money-coins-and-notes" },
            { cls: 1, subject: "maths", chapter: "time-day-night-and-week" }
          ]
        },
        {
          id: "measurement-2", level: 2, title: "Measuring, money and the clock",
          goal: "Measure length, weight and capacity, count money and read the clock.",
          from: [
            { cls: 2, subject: "maths", chapter: "measurement" },
            { cls: 2, subject: "maths", chapter: "money" },
            { cls: 2, subject: "maths", chapter: "time-clock-and-months" }
          ],
          gens: ["add2"]
        },
        {
          id: "measurement-3", level: 3, title: "Metres, litres, time and rupees",
          goal: "Use cm, m, kg, g, litres, the calendar and rupees with paise.",
          from: [
            { cls: 3, subject: "maths", chapter: "length" },
            { cls: 3, subject: "maths", chapter: "weight-and-capacity" },
            { cls: 3, subject: "maths", chapter: "time" },
            { cls: 3, subject: "maths", chapter: "money" }
          ],
          gens: ["unitConv", "money", "change", "timeLater"]
        },
        {
          id: "measurement-4", level: 4, title: "Perimeter and area",
          goal: "Find the perimeter and area of rectangles and squares and convert units.",
          from: [
            { cls: 4, subject: "maths", chapter: "perimeter-and-area" },
            { cls: 4, subject: "maths", chapter: "measurement" },
            { cls: 4, subject: "maths", chapter: "time" },
            { cls: 4, subject: "maths", chapter: "money" }
          ],
          gens: ["rectPA", "squarePA", "unitConv"]
        },
        {
          id: "measurement-5", level: 5, title: "Volume, time and the unitary method",
          goal: "Find the volume of a cuboid and solve unitary-method problems.",
          from: [
            { cls: 5, subject: "maths", chapter: "perimeter-and-area" },
            { cls: 5, subject: "maths", chapter: "volume" },
            { cls: 5, subject: "maths", chapter: "time" }
          ],
          gens: ["cuboidVol", "minutes", "unitary"]
        },
        {
          id: "measurement-6", level: 6, title: "Perimeter and area of plane figures",
          goal: "Find the perimeter and area of rectangles, squares and combined shapes.",
          from: [
            { cls: 6, subject: "maths", chapter: "perimeter-and-area" },
            { cls: 6, subject: "mathspb", chapter: "mensuration", board: "pseb" }
          ],
          gens: ["rectPA", "squarePA"]
        },
        {
          id: "measurement-8", level: 8, title: "Area, perimeter and volume of shapes",
          goal: "Find areas of triangles, parallelograms, trapeziums and circles and volumes of cuboids.",
          from: [
            { cls: 8, subject: "maths", chapter: "area" },
            { cls: 7, subject: "mathspb", chapter: "perimeter-and-area", board: "pseb" },
            { cls: 8, subject: "mathspb", chapter: "mensuration", board: "pseb" }
          ],
          gens: ["areaShapes", "circle", "cuboidVol"]
        },
        {
          id: "measurement-9", level: 9, title: "Area, Heron's formula, surface area and volume",
          goal: "Use Heron's formula and find surface areas and volumes of cuboids, cylinders, cones and spheres.",
          from: [
            { cls: 9, subject: "maths", chapter: "measuring-space-perimeter-and-area" },
            { cls: 9, subject: "maths", chapter: "math-of-space-surface-area-and-volume" },
            { cls: 9, subject: "mathspb", chapter: "herons-formula", board: "pseb" },
            { cls: 9, subject: "mathspb", chapter: "surface-areas-and-volumes", board: "pseb" }
          ],
          gens: ["heron", "solidsCSH", "rectPA", "areaShapes"]
        },
        {
          id: "measurement-10", level: 10, title: "Circles, sectors and combined solids",
          goal: "Find areas of sectors and segments and surface areas and volumes of combined solids.",
          from: [
            { cls: 10, subject: "maths", chapter: "areas-related-to-circles" },
            { cls: 10, subject: "maths", chapter: "surface-areas-and-volumes" }
          ],
          gens: ["circle", "sector", "solids"]
        }
      ]
    },

    // ───────────────────────────── Data, statistics and probability ─────────────────────────────
    {
      id: "data",
      title: "Data, statistics and probability",
      icon: "📊",
      summary: "Sorting and tally marks, pictographs and bar graphs, mean, median and mode, then probability and counting.",
      levels: [
        {
          id: "data-0", level: 0, title: "Sorting and counting things",
          goal: "Sort things into groups and count how many are in each group.",
          from: [],
          own: {
            id: "sorting-and-counting",
            title: "Sorting and Counting Things",
            section: "Data",
            summary: "We put things that are alike into groups, count each group and say which group has the most.",
            notes: [
              {
                heading: "Sorting",
                points: [
                  "Sorting means putting things that are alike together.",
                  "We can sort by colour, shape or size.",
                  "🔴🔵🔴🔵🔴 sorted by colour: 3 red 🔴 and 2 blue 🔵."
                ]
              },
              {
                heading: "Count each group",
                points: [
                  "After sorting, count each group on its own.",
                  "🍎🍎🍎 and 🍌🍌: there are 3 apples and 2 bananas.",
                  "Make a mark for each thing: | | | for 3."
                ]
              },
              {
                heading: "Most and least",
                points: [
                  "The group with the **most** things is the biggest group.",
                  "The group with the **least** things is the smallest group.",
                  "In 🍎🍎🍎 and 🍌🍌, apples are the most and bananas the least."
                ]
              }
            ],
            terms: [
              { term: "Sort", meaning: "To put things that are alike into groups." },
              { term: "Group", meaning: "Things put together because they are alike." },
              { term: "Most", meaning: "The group with the greatest number of things." },
              { term: "Least", meaning: "The group with the smallest number of things." }
            ],
            examples: [
              {
                q: "🐶🐱🐶🐶🐱: how many dogs and how many cats?",
                steps: ["Count the dogs 🐶: 3.", "Count the cats 🐱: 2."],
                answer: "3 dogs and 2 cats"
              }
            ],
            qa: [
              { q: "What does sorting mean?", a: "Putting things that are alike together." },
              { q: "How do we find which group is the biggest?", a: "Count each group. The group with the most things is the biggest." }
            ],
            quiz: [
              { q: "🔴🔵🔴🔴🔵: how many red?", options: ["2", "3", "4", "5"], answer: 1, explain: "Counting the red circles gives 3." },
              { q: "🔴🔵🔴🔴🔵: how many blue?", options: ["1", "2", "3", "4"], answer: 1, explain: "There are 2 blue circles." },
              { q: "🍎🍎🍎🍌🍌: which has the most?", options: ["Apples", "Bananas", "They are the same", "Nobody can tell"], answer: 0, explain: "3 apples are more than 2 bananas." },
              { q: "🍎🍎🍎🍌🍌: which has the least?", options: ["Apples", "Bananas", "They are the same", "Nobody can tell"], answer: 1, explain: "2 bananas are fewer than 3 apples." },
              { q: "Which can we sort by?", options: ["Colour", "Smell of a book", "Nothing", "The weather"], answer: 0, explain: "We can sort things by colour, shape or size." },
              { q: "🐶🐱🐶🐶🐱: how many animals in all?", options: ["4", "5", "6", "3"], answer: 1, explain: "3 dogs and 2 cats make 5 animals." },
              { q: "🌼🌼🚗🚗🚗🌼: how many flowers?", options: ["2", "3", "4", "5"], answer: 1, explain: "Counting 🌼 gives 3." },
              { q: "Sorting means:", options: ["Putting alike things together", "Throwing things away", "Making noise", "Painting"], answer: 0, explain: "We group things that are alike." },
              { q: "🔺🔺⭕⭕⭕⭕: which shape has the most?", options: ["Triangle", "Circle", "Same", "Square"], answer: 1, explain: "4 circles are more than 2 triangles." },
              { q: "🐟🐟🐟 and 🐟🐟🐟: which group has more?", options: ["First", "Second", "Both are the same", "Neither is a group"], answer: 2, explain: "Both groups have 3 fish." }
            ]
          }
        },
        { id: "data-2", level: 2, title: "Tally marks", goal: "Record things with tally marks and read them.", from: [{ cls: 2, subject: "maths", chapter: "data-tally-marks" }] },
        { id: "data-3", level: 3, title: "Pictographs", goal: "Read and draw pictographs.", from: [{ cls: 3, subject: "maths", chapter: "pictographs" }] },
        { id: "data-4", level: 4, title: "Bar graphs and tables", goal: "Read simple tables and bar graphs.", from: [{ cls: 4, subject: "maths", chapter: "data-handling" }] },
        { id: "data-5", level: 5, title: "Collecting and showing data", goal: "Collect data and show it in tables and graphs, and find the average.", from: [{ cls: 5, subject: "maths", chapter: "data-handling" }], gens: ["mean"] },
        {
          id: "data-6", level: 6, title: "Data handling and presentation",
          goal: "Organise data in a table and find the mean and mode.",
          from: [
            { cls: 6, subject: "maths", chapter: "data-handling-and-presentation" },
            { cls: 6, subject: "mathspb", chapter: "data-handling", board: "pseb" }
          ],
          gens: ["mean", "mode"]
        },
        {
          id: "data-7", level: 7, title: "Mean, median and mode",
          goal: "Find the mean, median and mode and say what each tells us.",
          from: [
            { cls: 7, subject: "maths", chapter: "connecting-the-dots" },
            { cls: 7, subject: "mathspb", chapter: "data-handling", board: "pseb" }
          ],
          gens: ["mean", "median", "mode"]
        },
        {
          id: "data-8", level: 8, title: "Dot plots and line graphs",
          goal: "Read how things change over time with line graphs and summarise with the mean.",
          from: [
            { cls: 8, subject: "maths", chapter: "tales-by-dots-and-lines" },
            { cls: 8, subject: "mathspb", chapter: "data-handling", board: "pseb" },
            { cls: 8, subject: "mathspb", chapter: "introduction-to-graphs", board: "pseb" }
          ],
          gens: ["mean", "median"]
        },
        {
          id: "data-9", level: 9, title: "Statistics and the maths of maybe",
          goal: "Summarise data with measures of centre and find simple probabilities.",
          from: [
            { cls: 9, subject: "maths", chapter: "how-quantities-combine-understanding-data" },
            { cls: 9, subject: "maths", chapter: "the-mathematics-of-maybe-introduction-to-probability" },
            { cls: 9, subject: "mathspb", chapter: "statistics", board: "pseb" }
          ],
          gens: ["mean", "median", "mode", "probDice"]
        },
        {
          id: "data-10", level: 10, title: "Statistics and probability",
          goal: "Find the mean, median and mode of grouped data and the probability of an event.",
          from: [
            { cls: 10, subject: "maths", chapter: "statistics" },
            { cls: 10, subject: "maths", chapter: "probability" }
          ],
          gens: ["probDice", "probBalls"]
        },
        {
          id: "data-11", level: 11, title: "Counting, variance and probability",
          goal: "Count arrangements, find the variance and use the axioms of probability.",
          from: [
            { cls: 11, subject: "maths", chapter: "permutations-and-combinations" },
            { cls: 11, subject: "maths", chapter: "statistics" },
            { cls: 11, subject: "maths", chapter: "probability" }
          ],
          gens: ["perm", "comb", "variance"]
        },
        {
          id: "data-12", level: 12, title: "Conditional probability",
          goal: "Use conditional probability, Bayes' theorem and probability distributions.",
          from: [{ cls: 12, subject: "maths", chapter: "probability" }],
          gens: ["probBalls"]
        }
      ]
    },

    // ───────────────────────────── Trigonometry ─────────────────────────────
    {
      id: "trigonometry",
      title: "Trigonometry",
      icon: "θ",
      summary: "Ratios in a right triangle, heights and distances, trigonometric functions and their inverses.",
      levels: [
        {
          id: "trig-10", level: 10, title: "Trigonometric ratios and their uses",
          goal: "Use sin, cos and tan of angles and solve height-and-distance problems.",
          from: [
            { cls: 10, subject: "maths", chapter: "introduction-to-trigonometry" },
            { cls: 10, subject: "maths", chapter: "some-applications-of-trigonometry" }
          ],
          gens: ["trigValue", "trigExpr", "heights"]
        },
        {
          id: "trig-11", level: 11, title: "Trigonometric functions",
          goal: "Work in radians and use identities and the graphs of sin, cos and tan.",
          from: [{ cls: 11, subject: "maths", chapter: "trigonometric-functions" }]
        },
        {
          id: "trig-12", level: 12, title: "Inverse trigonometric functions",
          goal: "Use the principal values and properties of sin⁻¹, cos⁻¹ and tan⁻¹.",
          from: [{ cls: 12, subject: "maths", chapter: "inverse-trigonometric-functions" }]
        }
      ]
    },

    // ───────────────────────────── Calculus and functions ─────────────────────────────
    {
      id: "calculus",
      title: "Calculus and functions",
      icon: "∫",
      summary: "Sets, relations and functions, then limits, derivatives, integrals and differential equations.",
      levels: [
        {
          id: "calculus-11a", level: 11, title: "Sets, relations and functions",
          goal: "Use sets and Venn diagrams and describe relations and functions with their domain and range.",
          from: [
            { cls: 11, subject: "maths", chapter: "sets" },
            { cls: 11, subject: "maths", chapter: "relations-and-functions" }
          ],
          gens: ["setsUnion"]
        },
        {
          id: "calculus-11b", level: 11, title: "Limits and derivatives",
          goal: "Find limits and differentiate simple functions from the definition and by rules.",
          from: [{ cls: 11, subject: "maths", chapter: "limits-and-derivatives" }],
          gens: ["limitPoly", "derivAt"]
        },
        {
          id: "calculus-12a", level: 12, title: "Relations, functions and continuity",
          goal: "Test functions for one-one and onto, and for continuity and differentiability.",
          from: [
            { cls: 12, subject: "maths", chapter: "relations-and-functions" },
            { cls: 12, subject: "maths", chapter: "continuity-and-differentiability" }
          ],
          gens: ["derivAt"]
        },
        {
          id: "calculus-12b", level: 12, title: "Applications of derivatives",
          goal: "Use derivatives for rates of change, tangents, increasing and decreasing functions and maxima and minima.",
          from: [{ cls: 12, subject: "maths", chapter: "application-of-derivatives" }],
          gens: ["derivAt"]
        },
        {
          id: "calculus-12c", level: 12, title: "Integrals and areas",
          goal: "Integrate standard functions and find areas under curves.",
          from: [
            { cls: 12, subject: "maths", chapter: "integrals" },
            { cls: 12, subject: "maths", chapter: "application-of-integrals" }
          ],
          gens: ["integral"]
        },
        {
          id: "calculus-12d", level: 12, title: "Differential equations",
          goal: "Find the order and degree of a differential equation and solve simple ones.",
          from: [{ cls: 12, subject: "maths", chapter: "differential-equations" }]
        }
      ]
    }
  ]
});
