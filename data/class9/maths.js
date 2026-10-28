// Class 9 Mathematics: current rationalised NCERT textbook.
// Format: see CONTENT_GUIDE.md
StudyData.add(9, "maths", {
  // What this content follows. match: "textbook" | "older-book" | "topic". Set reviewed to a date once a teacher has checked it.
  syllabus: {board: "CBSE", match: "textbook", books: ["Mathematics"], reviewed: false},
  chapters: [
    // ───────────────────────────── 1. Number Systems ─────────────────────────────
    {
      id: "number-systems",
      title: "Number Systems",
      section: "Number Systems",
      summary: "Rational and irrational numbers together make up the real numbers. This chapter covers their decimal expansions, operations on real numbers, rationalising denominators and the laws of exponents.",
      notes: [
        {
          heading: "Rational and irrational numbers",
          points: [
            "A number is **rational** if it can be written as p/q, where p and q are integers and q ≠ 0. Natural numbers, whole numbers and integers are all rational.",
            "A number that cannot be written as p/q is **irrational**, e.g. √2, √3, √5, π and 0.10110111011110…",
            "A rational number has many equivalent forms (1/2 = 2/4 = 10/20), so we usually write p/q in lowest terms, with p and q co-prime.",
            "Rational and irrational numbers together form the **real numbers**. Every real number is a unique point on the number line, and every point on the number line is a unique real number.",
            "Between any two rational numbers there are infinitely many rational numbers, e.g. their average (a + b)/2 lies between a and b."
          ]
        },
        {
          heading: "Decimal expansions",
          points: [
            "Rational numbers have decimal expansions that are either **terminating** (7/8 = 0.875) or **non-terminating recurring** (1/3 = 0.333…, 1/7 = 0.142857142857…).",
            "Irrational numbers have **non-terminating non-recurring** expansions, e.g. √2 = 1.4142135…",
            "When dividing p by q, the only possible remainders are 0, 1, …, q − 1. So either the remainder becomes 0 (terminates) or a remainder repeats and the digits recur.",
            "To convert a recurring decimal to p/q: if x = 0.777…, then 10x = 7.777…; subtracting gives 9x = 7, so x = 7/9.",
            "π is irrational; 22/7 is only a rational approximation of π."
          ]
        },
        {
          heading: "Operations on real numbers",
          points: [
            "Sum, difference, product and quotient (non-zero divisor) of two rational numbers are rational.",
            "Rational + irrational is **irrational**; non-zero rational × irrational is **irrational** (e.g. 2 + √3 and 5√2).",
            "Irrational + irrational or irrational × irrational can be either: √2 × √2 = 2 is rational, but √2 × √3 = √6 is irrational.",
            "√2 can be located on the number line by drawing a unit square on the segment from 0 to 1 and swinging its diagonal (length √2) onto the line with a compass.",
            "To show √x for any x > 0: mark AB = x and BC = 1 unit on a line, draw a semicircle on AC as diameter, and erect a perpendicular at B meeting the semicircle at D. Then **BD = √x**."
          ]
        },
        {
          heading: "Square-root identities and rationalising",
          points: [
            "For positive real numbers a and b: √(ab) = √a × √b and √(a/b) = √a/√b.",
            "(√a + √b)(√a − √b) = a − b and (a + √b)(a − √b) = a² − b.",
            "**Rationalising the denominator** means making it rational by multiplying the numerator and denominator by the conjugate, e.g. 1/(√7 − 2) = (√7 + 2)/(7 − 4) = (√7 + 2)/3.",
            "Common mistake: √(a + b) ≠ √a + √b. For example, √(9 + 16) = 5, not 3 + 4 = 7."
          ]
        },
        {
          heading: "Laws of exponents",
          points: [
            "For a > 0 and rational m, n: aᵐ × aⁿ = aᵐ⁺ⁿ, aᵐ ÷ aⁿ = aᵐ⁻ⁿ, (aᵐ)ⁿ = aᵐⁿ, and aᵐ × bᵐ = (ab)ᵐ.",
            "a⁰ = 1 and a⁻ⁿ = 1/aⁿ.",
            "a^(1/n) is the nth root of a, and a^(m/n) = (a^(1/n))ᵐ.",
            "Examples: 8^(2/3) = (∛8)² = 2² = 4, and 32^(−1/5) = 1/32^(1/5) = 1/2."
          ]
        }
      ],
      formulas: [
        "Rational number: p/q, where p and q are integers and q ≠ 0",
        "√(ab) = √a × √b  (a, b > 0)",
        "√(a/b) = √a / √b  (a, b > 0)",
        "(√a + √b)(√a − √b) = a − b",
        "(a + √b)(a − √b) = a² − b",
        "(√a + √b)² = a + 2√(ab) + b",
        "aᵐ × aⁿ = aᵐ⁺ⁿ;  aᵐ ÷ aⁿ = aᵐ⁻ⁿ;  (aᵐ)ⁿ = aᵐⁿ;  aᵐ × bᵐ = (ab)ᵐ",
        "a⁰ = 1;  a⁻ⁿ = 1/aⁿ;  a^(1/n) = nth root of a;  a^(m/n) = (a^(1/n))ᵐ"
      ],
      terms: [
        { term: "Rational number", meaning: "A number that can be written as p/q, where p and q are integers and q ≠ 0, e.g. 3, −2/5, 0.75." },
        { term: "Irrational number", meaning: "A number that cannot be written as p/q. Its decimal expansion is **non-terminating and non-recurring**, e.g. √2, π." },
        { term: "Real numbers", meaning: "All rational and irrational numbers taken together. Each real number corresponds to exactly one point on the number line." },
        { term: "Terminating decimal", meaning: "A decimal expansion that ends after a finite number of digits, e.g. 7/8 = 0.875." },
        { term: "Non-terminating recurring decimal", meaning: "A decimal expansion in which a digit or block of digits repeats forever, e.g. 1/7 = 0.142857142857…" },
        { term: "Rationalising the denominator", meaning: "Multiplying the numerator and denominator by a suitable expression (usually the conjugate) so that the denominator becomes rational." }
      ],
      examples: [
        {
          q: "Express 0.2353535… (where only 35 repeats) in the form p/q.",
          steps: [
            "Let x = 0.2353535…",
            "One digit (2) does not repeat, so first multiply by 10: 10x = 2.353535…",
            "The block '35' has two digits, so multiply by 1000: 1000x = 235.353535…",
            "Subtract: 1000x − 10x = 235.3535… − 2.3535… = 233",
            "So 990x = 233, giving x = 233/990"
          ],
          answer: "0.2353535… = 233/990"
        },
        {
          q: "Rationalise the denominator of (√5 + √2)/(√5 − √2).",
          steps: [
            "Multiply numerator and denominator by the conjugate of the denominator, (√5 + √2).",
            "Numerator: (√5 + √2)² = 5 + 2√10 + 2 = 7 + 2√10",
            "Denominator: (√5 − √2)(√5 + √2) = 5 − 2 = 3",
            "So the expression equals (7 + 2√10)/3"
          ],
          answer: "(7 + 2√10)/3"
        }
      ],
      qa: [
        { q: "Is the square root of every positive integer irrational? Justify.", a: "No. √4 = 2 and √9 = 3 are rational. For a positive integer n, √n is irrational exactly when n is **not a perfect square**, e.g. √2, √3, √5." },
        { q: "Find three different irrational numbers between 5/7 and 9/11.", a: "5/7 = 0.714285714285… and 9/11 = 0.818181… Any non-terminating non-recurring decimal between them works, e.g. **0.72072007200072…, 0.75075007500075… and 0.808008000800008…**" },
        { q: "Simplify (i) 16^(3/4) (ii) 125^(−1/3).", a: "(i) 16^(3/4) = (16^(1/4))³ = 2³ = **8**. (ii) 125^(−1/3) = 1/125^(1/3) = 1/∛125 = **1/5**." }
      ],
      quiz: [
        {
          q: "Which of the following is irrational?",
          options: ["√16", "0.636363…", "22/7", "√12"],
          answer: 3,
          explain: "√12 = 2√3, which is irrational. √16 = 4, 0.636363… = 7/11 and 22/7 are all rational."
        },
        {
          q: "The decimal expansion of an irrational number is:",
          options: ["Non-terminating and non-recurring", "Terminating", "Non-terminating and recurring", "Terminating or recurring"],
          answer: 0,
          explain: "Terminating or recurring expansions belong to rational numbers. Irrational numbers are **non-terminating and non-recurring**."
        },
        {
          q: "0.999… (9 repeating) written in the form p/q is:",
          options: ["9/10", "99/100", "1", "It cannot be written in the form p/q"],
          answer: 2,
          explain: "Let x = 0.999… Then 10x = 9.999…, so 9x = 9 and x = **1**."
        },
        {
          q: "The value of 8^(2/3) is:",
          options: ["16/3", "4", "16", "2"],
          answer: 1,
          explain: "8^(2/3) = (∛8)² = 2² = **4**. Multiplying 8 by 2/3 or by 2 is a common mistake."
        },
        {
          q: "Rationalising the denominator of 1/(√7 − 2) gives:",
          options: ["(√7 − 2)/3", "(√7 + 2)/5", "√7 + 2", "(√7 + 2)/3"],
          answer: 3,
          explain: "Multiply by (√7 + 2)/(√7 + 2): the denominator becomes 7 − 2² = 3, so the answer is **(√7 + 2)/3**."
        },
        {
          q: "√2 × √8 equals:",
          options: ["√10", "16", "4", "2√10"],
          answer: 2,
          explain: "√2 × √8 = √16 = **4**. The product of two irrational numbers can be rational."
        }
      ]
    },

    // ───────────────────────────── 2. Polynomials ─────────────────────────────
    {
      id: "polynomials",
      title: "Polynomials",
      section: "Algebra",
      summary: "Polynomials in one variable, their degree and zeroes, the Factor Theorem, factorising quadratic and cubic polynomials, and the algebraic identities used throughout algebra.",
      notes: [
        {
          heading: "Polynomials and their degree",
          points: [
            "A **polynomial** in x is an expression like aₙxⁿ + … + a₁x + a₀ in which every power of x is a whole number. 2x³ − x + 5 is a polynomial; x + 1/x and √x + 2 are not.",
            "The **degree** is the highest power of the variable: linear (degree 1), quadratic (degree 2), cubic (degree 3).",
            "By number of terms: **monomial** (1 term), **binomial** (2 terms), **trinomial** (3 terms).",
            "A non-zero constant such as 7 is a polynomial of degree 0. The **zero polynomial** 0 has no defined degree."
          ]
        },
        {
          heading: "Zeroes of a polynomial",
          points: [
            "A real number a is a **zero** of p(x) if p(a) = 0. Find p(a) by substituting x = a.",
            "A linear polynomial ax + b (a ≠ 0) has exactly one zero, x = −b/a.",
            "A polynomial can have more than one zero: x² − 1 has zeroes 1 and −1. A non-zero constant has no zero, and every real number is a zero of the zero polynomial.",
            "0 can itself be a zero: x² − 2x = x(x − 2) has zeroes 0 and 2."
          ]
        },
        {
          heading: "Factor Theorem",
          points: [
            "If p(x) has degree n ≥ 1 and a is a real number, then **(x − a) is a factor of p(x) if p(a) = 0**, and p(a) = 0 if (x − a) is a factor.",
            "To test whether (x + 2) is a factor, check whether p(−2) = 0. To test (2x − 1), check p(1/2) = 0.",
            "For a cubic, try small integers that divide the constant term (±1, ±2, ±3, …) to find one factor, then divide to get the quadratic factor and split it.",
            "Related result: when p(x) is divided by (x − a), the remainder is p(a). The Factor Theorem is the case where this remainder is 0."
          ]
        },
        {
          heading: "Factorising by splitting the middle term",
          points: [
            "For ax² + bx + c, find two numbers p and q with **p + q = b** and **pq = ac**, then split bx as px + qx and group.",
            "Example: 6x² + 17x + 5: pq = 30, p + q = 17, so 15 and 2. Then 6x² + 15x + 2x + 5 = 3x(2x + 5) + 1(2x + 5) = (3x + 1)(2x + 5).",
            "Always check by multiplying the factors back."
          ]
        },
        {
          heading: "Algebraic identities",
          points: [
            "An **identity** is true for all values of the variables. Use identities to expand, factorise and calculate quickly, e.g. 104 × 96 = (100 + 4)(100 − 4) = 10000 − 16 = 9984.",
            "**If x + y + z = 0, then x³ + y³ + z³ = 3xyz.**",
            "The cube identities are easiest to remember as (x + y)³ = x³ + y³ + 3xy(x + y) and (x − y)³ = x³ − y³ − 3xy(x − y).",
            "Common mistake: (x + y)² ≠ x² + y². Do not forget the middle term 2xy."
          ]
        }
      ],
      formulas: [
        "(x + y)² = x² + 2xy + y²",
        "(x − y)² = x² − 2xy + y²",
        "x² − y² = (x + y)(x − y)",
        "(x + a)(x + b) = x² + (a + b)x + ab",
        "(x + y + z)² = x² + y² + z² + 2xy + 2yz + 2zx",
        "(x + y)³ = x³ + y³ + 3xy(x + y)",
        "(x − y)³ = x³ − y³ − 3xy(x − y)",
        "x³ + y³ = (x + y)(x² − xy + y²)",
        "x³ − y³ = (x − y)(x² + xy + y²)",
        "x³ + y³ + z³ − 3xyz = (x + y + z)(x² + y² + z² − xy − yz − zx)",
        "If x + y + z = 0, then x³ + y³ + z³ = 3xyz",
        "Factor Theorem: (x − a) is a factor of p(x) ⇔ p(a) = 0"
      ],
      terms: [
        { term: "Polynomial", meaning: "An algebraic expression in which every power of the variable is a whole number, e.g. 4x³ − 2x + 7." },
        { term: "Degree of a polynomial", meaning: "The highest power of the variable in the polynomial. The degree of 5x³ + 4x⁴ + 7 is 4." },
        { term: "Zero of a polynomial", meaning: "A number a for which p(a) = 0. For example, 3 is a zero of x − 3." },
        { term: "Factor Theorem", meaning: "(x − a) is a factor of p(x) if and only if p(a) = 0." },
        { term: "Algebraic identity", meaning: "An equation that is true for **all** values of its variables, e.g. (x + y)² = x² + 2xy + y²." },
        { term: "Monomial, binomial, trinomial", meaning: "Polynomials with one, two and three terms respectively, e.g. 5x, x + 1, x² + x + 1." }
      ],
      examples: [
        {
          q: "Factorise x³ − 23x² + 142x − 120.",
          steps: [
            "Let p(x) = x³ − 23x² + 142x − 120. Try factors of the constant term 120.",
            "p(1) = 1 − 23 + 142 − 120 = 0, so (x − 1) is a factor (Factor Theorem).",
            "Divide: x³ − 23x² + 142x − 120 = (x − 1)(x² − 22x + 120).",
            "Split the middle term of x² − 22x + 120: we need two numbers with product 120 and sum −22, i.e. −10 and −12.",
            "x² − 22x + 120 = (x − 10)(x − 12)"
          ],
          answer: "x³ − 23x² + 142x − 120 = (x − 1)(x − 10)(x − 12)"
        },
        {
          q: "Without actually calculating the cubes, find the value of (−12)³ + 7³ + 5³.",
          steps: [
            "Let x = −12, y = 7, z = 5.",
            "x + y + z = −12 + 7 + 5 = 0.",
            "When x + y + z = 0, x³ + y³ + z³ = 3xyz.",
            "So the value = 3 × (−12) × 7 × 5 = −1260."
          ],
          answer: "(−12)³ + 7³ + 5³ = −1260"
        }
      ],
      qa: [
        { q: "Check whether (x + 1) is a factor of x³ + x² + x + 1.", a: "p(−1) = (−1)³ + (−1)² + (−1) + 1 = −1 + 1 − 1 + 1 = 0. Since p(−1) = 0, **(x + 1) is a factor** by the Factor Theorem." },
        { q: "Find k if (x − 1) is a factor of p(x) = 2x² + kx + √2.", a: "By the Factor Theorem, p(1) = 0: 2 + k + √2 = 0, so **k = −(2 + √2)**." },
        { q: "Evaluate 105 × 106 using a suitable identity.", a: "Use (x + a)(x + b) = x² + (a + b)x + ab with x = 100, a = 5, b = 6: 10000 + 1100 + 30 = **11130**." }
      ],
      quiz: [
        {
          q: "The degree of the polynomial 5x³ + 4x⁴ + 7 is:",
          options: ["3", "7", "4", "5"],
          answer: 2,
          explain: "The degree is the **highest power** of x, which is 4 (from 4x⁴), not the first power written."
        },
        {
          q: "Which of the following is NOT a polynomial?",
          options: ["x + 3/x", "(1/2)x³ − x", "x² − 2x + 3", "7"],
          answer: 0,
          explain: "3/x = 3x⁻¹ has a negative power of x, so **x + 3/x** is not a polynomial. A constant like 7 is a polynomial of degree 0."
        },
        {
          q: "The zero of the polynomial 2x + 5 is:",
          options: ["5/2", "−2/5", "2/5", "−5/2"],
          answer: 3,
          explain: "2x + 5 = 0 gives x = **−5/2**."
        },
        {
          q: "If (x + 2) is a factor of x³ + kx² − x − 2, the value of k is:",
          options: ["−1", "4", "2", "−2"],
          answer: 2,
          explain: "p(−2) = −8 + 4k + 2 − 2 = 4k − 8 = 0, so **k = 2**. Using p(2) instead of p(−2) is a common mistake."
        },
        {
          q: "If x + y + z = 0, then x³ + y³ + z³ equals:",
          options: ["0", "3xyz", "xyz", "x² + y² + z²"],
          answer: 1,
          explain: "From x³ + y³ + z³ − 3xyz = (x + y + z)(…), when x + y + z = 0 we get x³ + y³ + z³ = **3xyz**."
        },
        {
          q: "If x + y = 12 and xy = 27, then x³ + y³ equals:",
          options: ["1728", "972", "1404", "756"],
          answer: 3,
          explain: "x³ + y³ = (x + y)³ − 3xy(x + y) = 1728 − 3 × 27 × 12 = 1728 − 972 = **756**."
        }
      ]
    },

    // ───────────────────────────── 3. Coordinate Geometry ─────────────────────────────
    {
      id: "coordinate-geometry",
      title: "Coordinate Geometry",
      section: "Coordinate Geometry",
      summary: "Locating points in a plane using two perpendicular number lines: the axes, origin, quadrants, abscissa and ordinate.",
      notes: [
        {
          heading: "The Cartesian system",
          points: [
            "Two perpendicular number lines, the horizontal **x-axis** (X′X) and the vertical **y-axis** (Y′Y), meet at the **origin O**. The system is named after the French mathematician René Descartes.",
            "The plane containing the axes is the **Cartesian plane** (coordinate plane), and the axes are the coordinate axes.",
            "Positive directions are to the right on the x-axis (OX) and upwards on the y-axis (OY). OX′ and OY′ are the negative directions.",
            "The axes divide the plane into four **quadrants**, numbered I, II, III, IV anticlockwise starting from the top right."
          ]
        },
        {
          heading: "Coordinates of a point",
          points: [
            "A point is written as (x, y). x is the **abscissa** (x-coordinate) and y is the **ordinate** (y-coordinate).",
            "The perpendicular distance of (x, y) from the y-axis is |x|, and from the x-axis is |y|.",
            "Order matters: (3, 5) and (5, 3) are different points. (x, y) = (y, x) only when x = y.",
            "The origin is (0, 0). Every point on the x-axis has the form (x, 0); every point on the y-axis has the form (0, y)."
          ]
        },
        {
          heading: "Signs in the quadrants",
          points: [
            "Quadrant I: (+, +); Quadrant II: (−, +); Quadrant III: (−, −); Quadrant IV: (+, −).",
            "A point on an axis does not lie in any quadrant.",
            "Example: (−4, 3) is in Quadrant II, (2, −7) is in Quadrant IV, and (0, −5) is on the negative y-axis.",
            "Common mistake: the distance from the **x-axis** is the **y**-coordinate (in magnitude), not the x-coordinate."
          ]
        }
      ],
      formulas: [
        "Origin: (0, 0)",
        "Point on the x-axis: (x, 0);  point on the y-axis: (0, y)",
        "Quadrant I (+, +);  II (−, +);  III (−, −);  IV (+, −)",
        "Distance of (x, y) from the x-axis = |y|;  from the y-axis = |x|"
      ],
      terms: [
        { term: "Origin", meaning: "The point where the x-axis and y-axis meet; its coordinates are (0, 0)." },
        { term: "Abscissa", meaning: "The x-coordinate of a point. For (4, −7) the abscissa is 4." },
        { term: "Ordinate", meaning: "The y-coordinate of a point. For (4, −7) the ordinate is −7." },
        { term: "Quadrant", meaning: "One of the four regions into which the axes divide the plane, numbered I to IV anticlockwise from the top right." },
        { term: "Cartesian plane", meaning: "A plane with two perpendicular number lines (axes) used to locate any point by an ordered pair (x, y)." }
      ],
      examples: [
        {
          q: "State the quadrant or axis in which each point lies: (−2, 4), (3, −1), (−1, 0), (1, 2), (−3, −5).",
          steps: [
            "(−2, 4): x negative, y positive → Quadrant II.",
            "(3, −1): x positive, y negative → Quadrant IV.",
            "(−1, 0): y = 0, so the point is on the x-axis (negative side).",
            "(1, 2): both positive → Quadrant I.",
            "(−3, −5): both negative → Quadrant III."
          ],
          answer: "II, IV, on the x-axis, I, III respectively"
        },
        {
          q: "ABCD is a rectangle with A(0, 0), B(5, 0) and D(0, 3). Find the coordinates of C and the area of the rectangle.",
          steps: [
            "A is the origin; B lies on the x-axis, so AB = 5 units.",
            "D lies on the y-axis, so AD = 3 units.",
            "C is opposite A: 5 units to the right and 3 units up, so C = (5, 3).",
            "Area = length × breadth = 5 × 3 = 15 square units."
          ],
          answer: "C = (5, 3); area = 15 square units"
        }
      ],
      qa: [
        { q: "What is the name of the point where the coordinate axes meet, and what are its coordinates?", a: "It is the **origin**, and its coordinates are **(0, 0)**." },
        { q: "Are the points (2, 5) and (5, 2) the same? Explain.", a: "No. (2, 5) is 2 units right and 5 units up from the origin, while (5, 2) is 5 units right and 2 units up. The **order of coordinates matters**." },
        { q: "Find the perpendicular distance of the point (−6, 8) from the x-axis and from the y-axis.", a: "Distance from the x-axis = |y| = **8 units**; distance from the y-axis = |x| = **6 units**." }
      ],
      quiz: [
        {
          q: "The point (−3, 5) lies in:",
          options: ["Quadrant I", "Quadrant III", "Quadrant II", "Quadrant IV"],
          answer: 2,
          explain: "x is negative and y is positive: (−, +) is **Quadrant II**."
        },
        {
          q: "The abscissa of the point (4, −7) is:",
          options: ["−7", "4", "7", "−4"],
          answer: 1,
          explain: "The abscissa is the x-coordinate, which is **4**. −7 is the ordinate."
        },
        {
          q: "Every point on the y-axis has coordinates of the form:",
          options: ["(x, 0)", "(x, x)", "(0, 0) only", "(0, y)"],
          answer: 3,
          explain: "On the y-axis the x-coordinate is 0, so points are **(0, y)**. (x, 0) is the form for the x-axis."
        },
        {
          q: "The perpendicular distance of the point (5, −12) from the x-axis is:",
          options: ["12 units", "5 units", "13 units", "−12 units"],
          answer: 0,
          explain: "Distance from the x-axis = |y| = **12 units**. A distance is never negative."
        },
        {
          q: "In which quadrant are both coordinates of a point negative?",
          options: ["Quadrant II", "Quadrant III", "Quadrant IV", "Quadrant I"],
          answer: 1,
          explain: "Signs (−, −) occur in **Quadrant III**."
        },
        {
          q: "The point (0, −4) lies:",
          options: ["on the negative x-axis", "in Quadrant IV", "on the negative y-axis", "in Quadrant III"],
          answer: 2,
          explain: "x = 0 means the point is on the y-axis, and y = −4 is below the origin: **negative y-axis**. Points on axes are in no quadrant."
        }
      ]
    },

    // ───────────────────────────── 4. Linear Equations in Two Variables ─────────────────────────────
    {
      id: "linear-equations-in-two-variables",
      title: "Linear Equations in Two Variables",
      section: "Algebra",
      summary: "Equations of the form ax + by + c = 0, writing them in standard form, and finding their solutions, of which there are infinitely many.",
      notes: [
        {
          heading: "Linear equation in two variables",
          points: [
            "An equation of the form **ax + by + c = 0**, where a, b, c are real numbers and **a and b are not both zero**, is a linear equation in two variables x and y.",
            "Write it in standard form by bringing all terms to one side: 2x + 3y = 7 becomes 2x + 3y − 7 = 0, so a = 2, b = 3, c = −7.",
            "An equation in one variable can also be written this way: x = −5 is 1·x + 0·y + 5 = 0 (a = 1, b = 0, c = 5).",
            "Forming equations from words: 'the cost of a notebook (₹x) is twice the cost of a pen (₹y)' gives x = 2y, i.e. x − 2y = 0."
          ]
        },
        {
          heading: "Solutions",
          points: [
            "A **solution** is a pair of values (x, y) that makes the two sides equal. For x + 2y = 5, x = 3 and y = 1 is a solution since 3 + 2 = 5.",
            "A linear equation in two variables has **infinitely many solutions**: choose any value of x and solve for y.",
            "Quick solutions: put x = 0 to find y, then put y = 0 to find x.",
            "To check whether a pair is a solution, substitute both values and see whether LHS = RHS.",
            "When the solutions are plotted, they all lie on a **straight line**, which is why the equation is called linear."
          ]
        },
        {
          heading: "Tips and common mistakes",
          points: [
            "Keep the order (x, y): (2, 4) and (4, 2) are different pairs.",
            "a or b may be 0, but not both: 0·x + 0·y + 5 = 0 is not a linear equation.",
            "Multiplying an equation by a non-zero number does not change its solutions: x + 2y = 5 and 2x + 4y = 10 have the same solutions.",
            "In word problems, define each variable clearly with its unit, e.g. 'let the cost of one pen be ₹y'."
          ]
        }
      ],
      formulas: [
        "General form: ax + by + c = 0 (a, b, c real; a and b not both zero)",
        "x = k  ⇔  1·x + 0·y − k = 0;   y = k  ⇔  0·x + 1·y − k = 0",
        "To get a solution: choose x, then y = −(ax + c)/b  (b ≠ 0)"
      ],
      terms: [
        { term: "Linear equation in two variables", meaning: "An equation ax + by + c = 0 where a, b, c are real numbers and a and b are not both zero." },
        { term: "Solution", meaning: "An ordered pair (x, y) that satisfies the equation, i.e. makes LHS = RHS." },
        { term: "Standard form", meaning: "Writing the equation with all terms on one side as ax + by + c = 0 so that a, b and c can be read off." },
        { term: "Coefficient", meaning: "The number multiplying a variable. In 3x − 4y + 7 = 0 the coefficients of x and y are 3 and −4; 7 is the constant term." },
        { term: "Infinitely many solutions", meaning: "A linear equation in two variables has no limit to its number of solutions: every value of x gives a matching value of y." }
      ],
      examples: [
        {
          q: "Find four different solutions of 2x + y = 7.",
          steps: [
            "Rewrite as y = 7 − 2x and choose values of x.",
            "x = 0 ⇒ y = 7 → (0, 7)",
            "x = 1 ⇒ y = 5 → (1, 5)",
            "x = 2 ⇒ y = 3 → (2, 3)",
            "x = 3 ⇒ y = 1 → (3, 1)"
          ],
          answer: "(0, 7), (1, 5), (2, 3), (3, 1) (there are infinitely many others)"
        },
        {
          q: "If x = 2, y = 1 is a solution of 2x + 3y = k, find k. Then write the equation in standard form and find y when x = −1.",
          steps: [
            "Substitute x = 2, y = 1: 2(2) + 3(1) = k, so k = 7.",
            "Equation: 2x + 3y = 7, i.e. 2x + 3y − 7 = 0 (a = 2, b = 3, c = −7).",
            "Put x = −1: 2(−1) + 3y = 7 ⇒ 3y = 9 ⇒ y = 3."
          ],
          answer: "k = 7; standard form 2x + 3y − 7 = 0; y = 3 when x = −1"
        }
      ],
      qa: [
        { q: "Write 'the cost of a notebook is twice the cost of a pen' as a linear equation in two variables.", a: "Let the cost of a notebook be ₹x and of a pen be ₹y. Then x = 2y, i.e. **x − 2y = 0**." },
        { q: "Which of these are solutions of x − 2y = 4: (0, 2), (2, 0), (4, 0)?", a: "(0, 2): 0 − 4 = −4 ≠ 4, no. (2, 0): 2 − 0 = 2 ≠ 4, no. (4, 0): 4 − 0 = 4, **yes**. Only (4, 0) is a solution." },
        { q: "How many solutions does y = 3x + 5 have: a unique one, only two, or infinitely many? Why?", a: "**Infinitely many.** For every value of x we get a value y = 3x + 5, so there is a solution for every real x." }
      ],
      quiz: [
        {
          q: "The equation x = 6 written in the form ax + by + c = 0 is:",
          options: ["x + y − 6 = 0", "x + 0·y − 6 = 0", "0·x + y − 6 = 0", "x − 6y = 0"],
          answer: 1,
          explain: "There is no y-term, so its coefficient is 0: **x + 0·y − 6 = 0** (a = 1, b = 0, c = −6)."
        },
        {
          q: "How many solutions does the equation 2x + 5y = 10 have?",
          options: ["Exactly one", "Exactly two", "No solution", "Infinitely many"],
          answer: 3,
          explain: "Every linear equation in two variables has **infinitely many** solutions: each x gives a y."
        },
        {
          q: "Which of the following is a solution of x + 2y = 8?",
          options: ["(2, 4)", "(8, 4)", "(4, 2)", "(0, 8)"],
          answer: 2,
          explain: "(4, 2): 4 + 2(2) = 8 ✓. (2, 4) gives 2 + 8 = 10, so swapping the order gives the wrong answer."
        },
        {
          q: "If (3, k) is a solution of 4x − y = 5, the value of k is:",
          options: ["7", "−7", "17", "2"],
          answer: 0,
          explain: "4(3) − k = 5 ⇒ 12 − k = 5 ⇒ **k = 7**."
        },
        {
          q: "For 3x − 2y = 6 written as ax + by + c = 0, the values of a, b, c are:",
          options: ["3, 2, 6", "−3, 2, 6", "3, −2, 6", "3, −2, −6"],
          answer: 3,
          explain: "3x − 2y = 6 becomes 3x − 2y − 6 = 0, so **a = 3, b = −2, c = −6**. Watch the sign of c."
        },
        {
          q: "For ax + by + c = 0 to be a linear equation in two variables, which condition must hold?",
          options: ["c is not zero", "a and b are not both zero", "a = b", "a, b and c are all positive"],
          answer: 1,
          explain: "If a = b = 0 there is no variable left. The only requirement is that **a and b are not both zero**; c may be 0."
        }
      ]
    },

    // ───────────────────────────── 5. Introduction to Euclid's Geometry ─────────────────────────────
    {
      id: "introduction-to-euclids-geometry",
      title: "Introduction to Euclid's Geometry",
      section: "Geometry",
      summary: "How Euclid organised geometry into definitions, axioms and postulates, and how theorems are proved from them by logical reasoning.",
      notes: [
        {
          heading: "Euclid and the Elements",
          points: [
            "Euclid, a teacher of mathematics at Alexandria in Egypt (around 300 BCE), collected the known work in geometry into a treatise called the **Elements**, divided into **13 books** (chapters).",
            "He started from a few assumptions and **proved** every other result (theorem or proposition) by deductive reasoning.",
            "Geometry means 'earth measurement' and grew from practical needs. In India, the Sulbasutras were manuals of geometrical constructions used for building altars."
          ]
        },
        {
          heading: "Euclid's definitions",
          points: [
            "A **point** is that which has no part.",
            "A **line** is breadthless length. The ends of a line are points.",
            "A **straight line** is a line which lies evenly with the points on itself.",
            "A **surface** is that which has length and breadth only; the edges of a surface are lines. A **plane surface** lies evenly with the straight lines on itself.",
            "Today point, line and plane are taken as **undefined terms**, because Euclid's definitions use words like 'part', 'breadth' and 'length' that are not themselves defined."
          ]
        },
        {
          heading: "Euclid's axioms (common notions)",
          points: [
            "Things which are equal to the same thing are equal to one another.",
            "If equals are added to equals, the wholes are equal. If equals are subtracted from equals, the remainders are equal.",
            "Things which coincide with one another are equal to one another.",
            "The whole is greater than the part.",
            "Things which are double of the same things are equal to one another; things which are halves of the same things are equal to one another."
          ]
        },
        {
          heading: "Euclid's five postulates",
          points: [
            "**1.** A straight line may be drawn from any one point to any other point.",
            "**2.** A terminated line (line segment) can be produced indefinitely.",
            "**3.** A circle can be drawn with any centre and any radius.",
            "**4.** All right angles are equal to one another.",
            "**5.** If a straight line falling on two straight lines makes the interior angles on the same side of it together less than two right angles, then the two lines, if produced indefinitely, meet on that side."
          ]
        },
        {
          heading: "Axioms, postulates and theorems",
          points: [
            "Euclid used **postulates** for assumptions specific to geometry and **axioms** for common notions used throughout mathematics. Today both words are used to mean the same thing.",
            "A **theorem** (proposition) is a statement that is proved using definitions, axioms, postulates and earlier results.",
            "A system of axioms is **consistent** if it is impossible to deduce from them a statement that contradicts any axiom or previously proved statement.",
            "Axiom: given two distinct points, there is a **unique line** through them. Theorem: two distinct lines cannot have more than **one point** in common.",
            "Postulates 1 to 4 are simple and obvious; the fifth postulate is far more complex and leads to results about **parallel lines**."
          ]
        }
      ],
      formulas: [
        "Axiom 1: If a = b and b = c, then a = c (things equal to the same thing are equal)",
        "Axioms 2 and 3: If a = b, then a + c = b + c and a − c = b − c",
        "Axiom 5: The whole is greater than the part",
        "Through two distinct points there is exactly one line",
        "Two distinct lines have at most one point in common",
        "Postulate 3: A circle can be drawn with any centre and any radius",
        "Postulate 5: Interior angles on one side of a transversal adding to less than 180° ⇒ the lines meet on that side"
      ],
      terms: [
        { term: "Axiom", meaning: "A basic fact taken as true without proof and used throughout mathematics, e.g. 'the whole is greater than the part'." },
        { term: "Postulate", meaning: "In Euclid's work, an assumption specific to geometry, e.g. 'all right angles are equal to one another'." },
        { term: "Theorem", meaning: "A statement that has been **proved** using definitions, axioms, postulates and earlier results." },
        { term: "Point (Euclid)", meaning: "That which has no part. Today it is treated as an undefined term." },
        { term: "Line (Euclid)", meaning: "Breadthless length; its ends are points." },
        { term: "Consistent system of axioms", meaning: "A set of axioms from which no statement contradicting an axiom or a proved result can be deduced." }
      ],
      examples: [
        {
          q: "If a point C lies between A and B such that AC = BC, prove that AC = ½AB.",
          steps: [
            "Given: AC = BC.",
            "Add AC to both sides: AC + AC = BC + AC (equals added to equals are equal, Axiom 2).",
            "BC + AC coincides with AB, so BC + AC = AB (things which coincide are equal, Axiom 4).",
            "So 2AC = AB, i.e. AC = ½AB."
          ],
          answer: "AC = ½AB, using Axioms 2 and 4"
        },
        {
          q: "Prove that an equilateral triangle can be constructed on any given line segment AB.",
          steps: [
            "With centre A and radius AB draw a circle; with centre B and radius BA draw another circle (Postulate 3).",
            "Let the circles meet at C. Join AC and BC (Postulate 1).",
            "AB = AC (radii of the first circle) and AB = BC (radii of the second circle).",
            "Things equal to the same thing are equal (Axiom 1), so AC = BC.",
            "Hence AB = BC = AC."
          ],
          answer: "△ABC is equilateral (Postulates 1 and 3, Axiom 1). Euclid assumed without proof that the two circles meet."
        }
      ],
      qa: [
        { q: "Points A, B, C, D lie on a line in that order and AC = BD. Prove that AB = CD.", a: "AC = AB + BC and BD = BC + CD. Since AC = BD, AB + BC = BC + CD. Subtracting BC from both sides (equals subtracted from equals, **Axiom 3**) gives **AB = CD**." },
        { q: "Why is Euclid's axiom 'the whole is greater than the part' considered a universal truth?", a: "It holds in every field, not just geometry: a whole cake is more than any slice, and if a segment AB contains a point C, then AB > AC. It is a **common notion** true in all of mathematics and daily life." },
        { q: "How many lines can pass through (i) one given point (ii) two distinct points?", a: "(i) **Infinitely many** lines pass through one point. (ii) Exactly **one** line passes through two distinct points." }
      ],
      quiz: [
        {
          q: "Euclid divided his treatise 'Elements' into how many books (chapters)?",
          options: ["10", "12", "13", "7"],
          answer: 2,
          explain: "The Elements was divided into **13 books**."
        },
        {
          q: "'Things which are equal to the same thing are equal to one another' is one of Euclid's:",
          options: ["postulates", "axioms (common notions)", "definitions", "theorems"],
          answer: 1,
          explain: "It is Euclid's first **axiom** (common notion), used throughout mathematics, not just in geometry."
        },
        {
          q: "How many lines can pass through two distinct points?",
          options: ["Infinitely many", "Exactly two", "No line", "Exactly one"],
          answer: 3,
          explain: "Given two distinct points, there is a **unique** (exactly one) line through them."
        },
        {
          q: "'A circle can be drawn with any centre and any radius' is Euclid's:",
          options: ["Postulate 3", "Postulate 1", "Postulate 2", "Postulate 5"],
          answer: 0,
          explain: "This is **Postulate 3**. Postulate 1 is about drawing a line between two points; Postulate 2 about extending a segment."
        },
        {
          q: "Two distinct lines can have at most how many points in common?",
          options: ["Two", "Infinitely many", "One", "Three"],
          answer: 2,
          explain: "If two distinct lines shared two points, there would be two lines through those points, which is impossible. So at most **one** point."
        },
        {
          q: "Euclid's fifth postulate leads to results about:",
          options: ["circles", "parallel lines", "the equality of right angles", "extending a line segment"],
          answer: 1,
          explain: "The fifth postulate deals with when two lines cut by a transversal meet, which is the basis of **parallel lines**."
        }
      ]
    },

    // ───────────────────────────── 6. Lines and Angles ─────────────────────────────
    {
      id: "lines-and-angles",
      title: "Lines and Angles",
      section: "Geometry",
      summary: "Angle pairs formed by intersecting lines and by a transversal cutting parallel lines, and how to use them to find unknown angles and prove lines parallel.",
      notes: [
        {
          heading: "Basic terms",
          points: [
            "**Acute** angle: between 0° and 90°; **right**: 90°; **obtuse**: between 90° and 180°; **straight**: 180°; **reflex**: between 180° and 360°.",
            "**Complementary** angles add up to 90°; **supplementary** angles add up to 180°.",
            "**Adjacent angles** have a common vertex and a common arm, with their non-common arms on opposite sides of the common arm.",
            "Points on the same line are **collinear**; otherwise they are non-collinear."
          ]
        },
        {
          heading: "Linear pair and vertically opposite angles",
          points: [
            "**Linear pair axiom**: if a ray stands on a line, the two adjacent angles formed add up to 180°. Conversely, if two adjacent angles add up to 180°, their non-common arms form a line.",
            "**If two lines intersect, the vertically opposite angles are equal.**",
            "Two intersecting lines form four angles: two pairs of equal vertically opposite angles, and every two neighbouring angles form a linear pair.",
            "Angles around a point add up to 360°."
          ]
        },
        {
          heading: "Parallel lines and a transversal",
          points: [
            "A **transversal** is a line that intersects two or more lines at distinct points. It forms corresponding, alternate interior, alternate exterior and co-interior angle pairs.",
            "If a transversal cuts two **parallel** lines: **corresponding angles are equal**, **alternate interior angles are equal**, and **interior angles on the same side add up to 180°**.",
            "The converses prove lines parallel: if corresponding angles are equal, or alternate interior angles are equal, or co-interior angles add up to 180°, the lines are parallel.",
            "**Lines which are parallel to the same line are parallel to each other.**"
          ]
        },
        {
          heading: "Problem-solving tips",
          points: [
            "For a 'bent' angle between two parallel lines, draw a line through the bend parallel to both, then use alternate angles twice.",
            "Write a reason with every step, e.g. '∠1 = ∠2 (alternate interior angles, AB ∥ CD)'.",
            "If angles in a linear pair are in the ratio 2 : 3, write them as 2x and 3x: 5x = 180°, so x = 36° and the angles are 72° and 108°.",
            "Common mistake: corresponding or alternate angles are equal **only** when the lines are parallel."
          ]
        }
      ],
      formulas: [
        "Complementary: x + y = 90°;  Supplementary: x + y = 180°",
        "Linear pair: the two angles add up to 180°",
        "Vertically opposite angles are equal",
        "Angles around a point add up to 360°",
        "Parallel lines cut by a transversal: corresponding angles equal; alternate interior angles equal; co-interior angles add up to 180°",
        "If l ∥ m and m ∥ n, then l ∥ n"
      ],
      terms: [
        { term: "Linear pair", meaning: "Two adjacent angles whose non-common arms form a straight line; they add up to 180°." },
        { term: "Vertically opposite angles", meaning: "The pairs of opposite angles formed when two lines intersect; they are always equal." },
        { term: "Transversal", meaning: "A line that intersects two or more lines at distinct points." },
        { term: "Corresponding angles", meaning: "Angles in matching positions at the two intersections made by a transversal; equal when the lines are parallel." },
        { term: "Alternate interior angles", meaning: "Angles between the two lines on opposite sides of the transversal; equal when the lines are parallel." },
        { term: "Reflex angle", meaning: "An angle greater than 180° but less than 360°." }
      ],
      examples: [
        {
          q: "Lines AB and CD intersect at O. If ∠AOC : ∠BOC = 2 : 3, find all four angles at O.",
          steps: [
            "∠AOC and ∠BOC form a linear pair, so ∠AOC + ∠BOC = 180°.",
            "Let ∠AOC = 2x and ∠BOC = 3x. Then 5x = 180°, so x = 36°.",
            "∠AOC = 72° and ∠BOC = 108°.",
            "∠BOD = ∠AOC = 72° (vertically opposite angles).",
            "∠AOD = ∠BOC = 108° (vertically opposite angles)."
          ],
          answer: "∠AOC = 72°, ∠BOC = 108°, ∠BOD = 72°, ∠AOD = 108°"
        },
        {
          q: "AB ∥ CD. A point E lies between the two lines, on the same side of BD as A and C, and is joined to B (on AB) and D (on CD). If ∠ABE = 50° and ∠CDE = 35°, find ∠BED.",
          steps: [
            "Through E draw EF parallel to AB, pointing away from A (towards the side of B and D). Then EF ∥ CD too (lines parallel to the same line).",
            "AB ∥ EF with transversal BE: ∠BEF = ∠ABE = 50° (alternate interior angles).",
            "CD ∥ EF with transversal DE: ∠DEF = ∠CDE = 35° (alternate interior angles).",
            "∠BED = ∠BEF + ∠DEF = 50° + 35° = 85°."
          ],
          answer: "∠BED = 85°"
        }
      ],
      qa: [
        { q: "In a linear pair, one angle is 30° more than twice the other. Find both angles.", a: "Let the smaller angle be x. Then x + (2x + 30°) = 180°, so 3x = 150° and x = 50°. The angles are **50° and 130°**." },
        { q: "Can both angles of a linear pair be acute? Explain.", a: "**No.** A linear pair adds up to 180°, but two acute angles add up to less than 180°. Either one angle is obtuse or both are right angles." },
        { q: "Two parallel lines are cut by a transversal. Show that the bisectors of a pair of alternate interior angles are parallel.", a: "The alternate interior angles are equal, say 2x each, so their halves are x each. These halves are **alternate angles** formed by the transversal with the two bisectors. Since they are equal, the bisectors are **parallel** (converse of the alternate angles theorem)." }
      ],
      quiz: [
        {
          q: "Two angles form a linear pair. If one of them is 65°, the other is:",
          options: ["25°", "65°", "295°", "115°"],
          answer: 3,
          explain: "A linear pair adds up to 180°: 180° − 65° = **115°**. (25° would be the complement.)"
        },
        {
          q: "Two lines intersect and one of the angles formed is 50°. The other three angles are:",
          options: ["50°, 50°, 130°", "130°, 50°, 130°", "130°, 130°, 130°", "40°, 140°, 40°"],
          answer: 1,
          explain: "The vertically opposite angle is 50° and the two neighbouring angles are 180° − 50° = 130° each: **130°, 50°, 130°**."
        },
        {
          q: "A transversal cuts two parallel lines. One of the interior angles on the same side of the transversal is 72°. The other is:",
          options: ["72°", "18°", "108°", "288°"],
          answer: 2,
          explain: "Co-interior angles are supplementary: 180° − 72° = **108°**."
        },
        {
          q: "The supplement of an angle is three times the angle. The angle is:",
          options: ["45°", "60°", "22.5°", "135°"],
          answer: 0,
          explain: "x + 3x = 180° ⇒ x = **45°**. Using 90° instead of 180° gives 22.5°, which is wrong."
        },
        {
          q: "The angles of a linear pair are in the ratio 4 : 5. The larger angle is:",
          options: ["80°", "40°", "50°", "100°"],
          answer: 3,
          explain: "4x + 5x = 180° ⇒ x = 20°. The angles are 80° and **100°**."
        },
        {
          q: "When a transversal cuts two parallel lines, which pair of angles is always equal?",
          options: ["Alternate interior angles", "Interior angles on the same side of the transversal", "Adjacent angles at one intersection", "The two angles of a linear pair"],
          answer: 0,
          explain: "**Alternate interior angles** are equal. Interior angles on the same side are supplementary, not equal."
        }
      ]
    },

    // ───────────────────────────── 7. Triangles ─────────────────────────────
    {
      id: "triangles",
      title: "Triangles",
      section: "Geometry",
      summary: "Congruence of triangles, the SAS, ASA, AAS, SSS and RHS criteria, CPCT, and the properties of isosceles triangles.",
      notes: [
        {
          heading: "Congruence",
          points: [
            "Two figures are **congruent** if they have the same shape and size, so one fits exactly on the other.",
            "△ABC ≅ △PQR means A ↔ P, B ↔ Q, C ↔ R. The **order of letters** shows which parts correspond.",
            "**CPCT**: Corresponding Parts of Congruent Triangles are equal. Use it after proving congruence to get equal sides or angles.",
            "Writing the vertices in the wrong order (e.g. △ABC ≅ △QRP when A ↔ P) is a common mistake that costs marks."
          ]
        },
        {
          heading: "Congruence criteria",
          points: [
            "**SAS** (axiom): two sides and the **included** angle of one triangle equal to those of the other.",
            "**ASA**: two angles and the included side equal. **AAS**: two angles and any non-included side equal (the third angles are then equal too).",
            "**SSS**: all three sides equal.",
            "**RHS**: in right triangles, the hypotenuse and one side equal.",
            "**SSA and AAA are not congruence rules.** Equal angles do not fix the size, and a non-included angle does not fix the shape."
          ]
        },
        {
          heading: "Isosceles triangles",
          points: [
            "**Angles opposite equal sides are equal**: in △ABC, if AB = AC then ∠C = ∠B.",
            "**Sides opposite equal angles are equal** (converse): if ∠B = ∠C then AC = AB.",
            "Each angle of an equilateral triangle is 60°.",
            "In an isosceles triangle, the bisector of the angle between the equal sides is also the perpendicular bisector of the base."
          ]
        },
        {
          heading: "Writing a congruence proof",
          points: [
            "List three pairs of equal parts with reasons: given, common side, vertically opposite angles, alternate angles, radii, etc.",
            "Name the criterion and write the congruence in the correct order, e.g. △AOB ≅ △COD (SAS).",
            "Then use CPCT for the result you need.",
            "Don't miss 'hidden' equal parts: a **common side** and **vertically opposite angles** are the most frequently forgotten."
          ]
        }
      ],
      formulas: [
        "SAS: two sides + included angle",
        "ASA: two angles + included side;  AAS: two angles + a non-included side",
        "SSS: three sides",
        "RHS: right angle + hypotenuse + one side",
        "AB = AC ⇔ ∠C = ∠B (angles opposite equal sides are equal, and conversely)",
        "Equilateral triangle: each angle = 60°"
      ],
      terms: [
        { term: "Congruent triangles", meaning: "Triangles that are exact copies of each other: all corresponding sides and angles are equal." },
        { term: "CPCT", meaning: "Corresponding Parts of Congruent Triangles are equal; used after proving two triangles congruent." },
        { term: "Included angle", meaning: "The angle formed between two given sides, e.g. ∠A is included between AB and AC." },
        { term: "Hypotenuse", meaning: "The side opposite the right angle in a right triangle; the longest side." },
        { term: "Isosceles triangle", meaning: "A triangle with two equal sides; the angles opposite them are equal." }
      ],
      examples: [
        {
          q: "Line l is the perpendicular bisector of segment AB. If P is any point on l, show that PA = PB.",
          steps: [
            "Let l meet AB at C. Join PA and PB.",
            "In △PCA and △PCB: AC = BC (C is the mid-point of AB).",
            "∠PCA = ∠PCB = 90° (l ⊥ AB).",
            "PC = PC (common side).",
            "So △PCA ≅ △PCB (SAS), and PA = PB (CPCT)."
          ],
          answer: "PA = PB: every point on the perpendicular bisector of AB is equidistant from A and B."
        },
        {
          q: "In △ABC, AB = AC, and the bisectors of ∠B and ∠C meet at O. Show that OB = OC.",
          steps: [
            "AB = AC, so ∠ABC = ∠ACB (angles opposite equal sides).",
            "Halving both: ½∠ABC = ½∠ACB, so ∠OBC = ∠OCB (OB and OC are the bisectors).",
            "In △OBC, sides opposite equal angles are equal.",
            "So OB = OC."
          ],
          answer: "OB = OC, so △OBC is isosceles."
        }
      ],
      qa: [
        { q: "Is AAA a congruence rule? Justify.", a: "**No.** Two equilateral triangles with sides 2 cm and 5 cm both have all angles 60°, but they are not the same size, so they are not congruent." },
        { q: "Show that each angle of an equilateral triangle is 60°.", a: "In △ABC with AB = BC = CA: AB = AC gives ∠C = ∠B, and AB = BC gives ∠C = ∠A. So ∠A = ∠B = ∠C. Since they add up to 180°, **each angle is 60°**." }
      ],
      quiz: [
        {
          q: "Which of the following is NOT a congruence criterion for triangles?",
          options: ["SAS", "SSA", "ASA", "RHS"],
          answer: 1,
          explain: "**SSA** (two sides and a non-included angle) does not guarantee congruence. SAS, ASA, AAS, SSS and RHS do."
        },
        {
          q: "If △ABC ≅ △PQR, which of the following must be true?",
          options: ["AB = QR", "∠A = ∠Q", "BC = QR", "AC = PQ"],
          answer: 2,
          explain: "The correspondence is A ↔ P, B ↔ Q, C ↔ R, so side BC corresponds to **QR**."
        },
        {
          q: "In △ABC, AB = AC and ∠B = 70°. Then ∠A is:",
          options: ["70°", "55°", "110°", "40°"],
          answer: 3,
          explain: "∠C = ∠B = 70° (angles opposite equal sides), so ∠A = 180° − 140° = **40°**. 55° comes from wrongly treating 70° as the vertex angle."
        },
        {
          q: "Two right triangles have equal hypotenuses and one other pair of equal sides. They are congruent by:",
          options: ["RHS", "SAS", "ASA", "SSS"],
          answer: 0,
          explain: "Right angle–Hypotenuse–Side: **RHS**."
        },
        {
          q: "Two triangles have all three corresponding angles equal. Then the triangles are:",
          options: ["always congruent", "congruent only if they are equilateral", "congruent by AAS", "not necessarily congruent"],
          answer: 3,
          explain: "AAA fixes the shape but not the size, so the triangles are **not necessarily congruent**."
        },
        {
          q: "In △ABC and △DEF, AB = DE, ∠A = ∠D and AC = DF. The triangles are congruent by:",
          options: ["ASA", "SAS", "SSS", "RHS"],
          answer: 1,
          explain: "∠A is included between AB and AC, so this is **SAS**."
        }
      ]
    },

    // ───────────────────────────── 8. Quadrilaterals ─────────────────────────────
    {
      id: "quadrilaterals",
      title: "Quadrilaterals",
      section: "Geometry",
      summary: "Properties of a parallelogram and its special types, the conditions for a quadrilateral to be a parallelogram, and the Mid-point Theorem.",
      notes: [
        {
          heading: "Quadrilaterals and their types",
          points: [
            "The angles of a quadrilateral add up to **360°** (a diagonal splits it into two triangles).",
            "**Parallelogram**: both pairs of opposite sides parallel. **Rectangle**: a parallelogram with each angle 90°. **Rhombus**: a parallelogram with all sides equal. **Square**: all sides equal and each angle 90°.",
            "**Trapezium**: a quadrilateral with one pair of opposite sides parallel.",
            "Every rectangle, rhombus and square is a parallelogram; a square is both a rectangle and a rhombus."
          ]
        },
        {
          heading: "Properties of a parallelogram",
          points: [
            "A diagonal divides a parallelogram into **two congruent triangles**.",
            "**Opposite sides are equal** and **opposite angles are equal**.",
            "**The diagonals bisect each other.**",
            "Adjacent angles are supplementary (co-interior angles): if ∠A = 70° then ∠B = 110°."
          ]
        },
        {
          heading: "When is a quadrilateral a parallelogram?",
          points: [
            "If each pair of opposite sides is equal.",
            "If each pair of opposite angles is equal.",
            "If the diagonals bisect each other.",
            "If **one pair of opposite sides is both equal and parallel**."
          ]
        },
        {
          heading: "Diagonals of special parallelograms",
          points: [
            "Rectangle: diagonals are **equal** and bisect each other.",
            "Rhombus: diagonals bisect each other **at right angles**.",
            "Square: diagonals are equal and bisect each other at right angles.",
            "Common mistake: the diagonals of a general parallelogram are neither equal nor perpendicular; they only bisect each other."
          ]
        },
        {
          heading: "Mid-point Theorem",
          points: [
            "The segment joining the mid-points of two sides of a triangle is **parallel to the third side** and **half of it**.",
            "**Converse**: a line through the mid-point of one side of a triangle, parallel to another side, bisects the third side.",
            "Joining the mid-points of the sides of any quadrilateral in order always gives a **parallelogram**.",
            "Joining the mid-points of the three sides of a triangle gives a triangle with half the perimeter of the original."
          ]
        }
      ],
      formulas: [
        "Angle sum of a quadrilateral = 360°",
        "Parallelogram: opposite sides equal; opposite angles equal; diagonals bisect each other; adjacent angles add up to 180°",
        "Rectangle: diagonals equal;  Rhombus: diagonals perpendicular;  Square: diagonals equal and perpendicular",
        "Mid-point Theorem: D, E mid-points of AB, AC in △ABC ⇒ DE ∥ BC and DE = ½BC",
        "Converse: line through the mid-point of one side, parallel to another side, bisects the third side"
      ],
      terms: [
        { term: "Parallelogram", meaning: "A quadrilateral in which both pairs of opposite sides are parallel." },
        { term: "Rhombus", meaning: "A parallelogram with all four sides equal; its diagonals bisect each other at right angles." },
        { term: "Rectangle", meaning: "A parallelogram with each angle 90°; its diagonals are equal." },
        { term: "Trapezium", meaning: "A quadrilateral with one pair of opposite sides parallel." },
        { term: "Mid-point Theorem", meaning: "The segment joining the mid-points of two sides of a triangle is parallel to the third side and half of it." }
      ],
      examples: [
        {
          q: "In parallelogram ABCD, ∠A = (3x + 10)° and ∠B = (2x + 20)°. Find all the angles.",
          steps: [
            "Adjacent angles of a parallelogram are supplementary: ∠A + ∠B = 180°.",
            "(3x + 10) + (2x + 20) = 180 ⇒ 5x + 30 = 180 ⇒ x = 30.",
            "∠A = 3(30) + 10 = 100°; ∠B = 2(30) + 20 = 80°.",
            "Opposite angles are equal: ∠C = ∠A = 100°, ∠D = ∠B = 80°."
          ],
          answer: "∠A = 100°, ∠B = 80°, ∠C = 100°, ∠D = 80°"
        },
        {
          q: "In △ABC, D, E, F are the mid-points of AB, BC and CA. If AB = 8 cm, BC = 10 cm and CA = 7 cm, find the perimeter of △DEF.",
          steps: [
            "DE joins the mid-points of AB and BC, so DE = ½CA = 3.5 cm (Mid-point Theorem).",
            "EF joins the mid-points of BC and CA, so EF = ½AB = 4 cm.",
            "FD joins the mid-points of CA and AB, so FD = ½BC = 5 cm.",
            "Perimeter = 3.5 + 4 + 5 = 12.5 cm (half of 25 cm)."
          ],
          answer: "Perimeter of △DEF = 12.5 cm"
        }
      ],
      qa: [
        { q: "Show that the diagonals of a rectangle are equal.", a: "In rectangle ABCD, compare △ABC and △BAD: AB = BA (common), BC = AD (opposite sides), ∠ABC = ∠BAD = 90°. So △ABC ≅ △BAD (**SAS**), and AC = BD (**CPCT**)." },
        { q: "If the diagonals of a parallelogram are equal, show that it is a rectangle.", a: "In parallelogram ABCD with AC = BD: △ABC ≅ △DCB (SSS: AB = DC, BC common, AC = DB), so ∠ABC = ∠DCB. These are co-interior angles (AB ∥ DC), so they add up to 180°, making **each 90°**. Hence ABCD is a rectangle." },
        { q: "Can a quadrilateral have angles 110°, 80°, 70° and 95°? Why?", a: "**No.** Their sum is 355°, but the angles of a quadrilateral must add up to 360°." }
      ],
      quiz: [
        {
          q: "The angles of a quadrilateral are in the ratio 3 : 5 : 9 : 13. The largest angle is:",
          options: ["78°", "108°", "156°", "130°"],
          answer: 2,
          explain: "30 parts = 360°, so 1 part = 12°. Largest = 13 × 12° = **156°**. Using 180° as the total gives 78°."
        },
        {
          q: "In parallelogram ABCD, ∠A = 65°. Then ∠B and ∠C are respectively:",
          options: ["65° and 115°", "115° and 65°", "115° and 115°", "25° and 65°"],
          answer: 1,
          explain: "∠B is adjacent to ∠A, so ∠B = 180° − 65° = 115°. ∠C is opposite ∠A, so ∠C = 65°: **115° and 65°**."
        },
        {
          q: "The diagonals of a rhombus:",
          options: ["bisect each other at right angles", "are always equal", "do not bisect each other", "are each equal to a side"],
          answer: 0,
          explain: "A rhombus's diagonals **bisect each other at right angles**. They are equal only if the rhombus is a square."
        },
        {
          q: "D and E are the mid-points of sides AB and AC of △ABC. If BC = 9 cm, then DE is:",
          options: ["9 cm", "18 cm", "3 cm", "4.5 cm"],
          answer: 3,
          explain: "By the Mid-point Theorem, DE = ½BC = **4.5 cm**."
        },
        {
          q: "A quadrilateral is certainly a parallelogram if:",
          options: ["one pair of opposite sides is parallel", "its diagonals are equal", "one pair of opposite sides is both equal and parallel", "two adjacent sides are equal"],
          answer: 2,
          explain: "**One pair of opposite sides equal and parallel** is enough. One parallel pair alone gives a trapezium, and an isosceles trapezium also has equal diagonals."
        },
        {
          q: "The figure formed by joining the mid-points of the sides of any quadrilateral, in order, is always a:",
          options: ["parallelogram", "rectangle", "rhombus", "square"],
          answer: 0,
          explain: "By the Mid-point Theorem, opposite sides of the new figure are both parallel to (and half of) the same diagonal, so it is always a **parallelogram**."
        }
      ]
    },

    // ───────────────────────────── 9. Circles ─────────────────────────────
    {
      id: "circles",
      title: "Circles",
      section: "Geometry",
      summary: "Chords and the angles they subtend, the perpendicular from the centre to a chord, equal chords, angles in the same segment and cyclic quadrilaterals.",
      notes: [
        {
          heading: "Basic terms",
          points: [
            "A **circle** is the set of all points in a plane at a fixed distance (**radius**) from a fixed point (**centre**).",
            "A **chord** joins two points on the circle. A **diameter** is a chord through the centre; it is the longest chord and equals 2r.",
            "An **arc** is a piece of the circle: the minor arc is the shorter piece and the major arc the longer one. A diameter divides the circle into two **semicircles**.",
            "A **segment** is the region between a chord and an arc; a **sector** is the region between an arc and the two radii to its ends."
          ]
        },
        {
          heading: "Equal chords",
          points: [
            "**Equal chords subtend equal angles at the centre**, and chords subtending equal angles at the centre are equal.",
            "Equal chords cut off congruent arcs, and congruent arcs have equal chords.",
            "**Equal chords are equidistant from the centre**, and chords equidistant from the centre are equal.",
            "Distance of a chord from the centre means the length of the perpendicular from the centre to the chord."
          ]
        },
        {
          heading: "Perpendicular from the centre",
          points: [
            "**The perpendicular from the centre to a chord bisects the chord.**",
            "**The line from the centre to the mid-point of a chord is perpendicular to the chord.**",
            "Use Pythagoras: r² = d² + (half-chord)², where d is the distance of the chord from the centre.",
            "Example: r = 5 cm and d = 3 cm give half-chord = 4 cm, so the chord is 8 cm."
          ]
        },
        {
          heading: "Angles subtended by an arc",
          points: [
            "**The angle subtended by an arc at the centre is double the angle it subtends at any point on the remaining part of the circle.**",
            "**Angles in the same segment of a circle are equal.**",
            "**The angle in a semicircle is a right angle.**",
            "If a segment joining two points subtends equal angles at two other points on the same side of it, all four points are **concyclic** (lie on one circle)."
          ]
        },
        {
          heading: "Cyclic quadrilaterals",
          points: [
            "A quadrilateral whose four vertices lie on a circle is **cyclic**.",
            "**The sum of either pair of opposite angles of a cyclic quadrilateral is 180°.**",
            "Converse: if one pair of opposite angles of a quadrilateral adds up to 180°, the quadrilateral is cyclic.",
            "Common mistake: only **opposite** angles of a cyclic quadrilateral are supplementary, not adjacent ones."
          ]
        }
      ],
      formulas: [
        "Diameter = 2 × radius",
        "r² = d² + (half-chord)²  (perpendicular from the centre bisects the chord)",
        "Angle at centre = 2 × angle at the circle (same arc)",
        "Angles in the same segment are equal",
        "Angle in a semicircle = 90°",
        "Cyclic quadrilateral ABCD: ∠A + ∠C = 180° and ∠B + ∠D = 180°",
        "Equal chords ⇔ equal angles at the centre ⇔ equal distances from the centre"
      ],
      terms: [
        { term: "Chord", meaning: "A line segment joining any two points on a circle. The diameter is the longest chord." },
        { term: "Arc", meaning: "A continuous piece of a circle between two points on it." },
        { term: "Segment", meaning: "The region of a circle between a chord and either of its arcs." },
        { term: "Sector", meaning: "The region between an arc and the two radii joining the centre to the ends of the arc." },
        { term: "Cyclic quadrilateral", meaning: "A quadrilateral whose four vertices all lie on one circle; its opposite angles add up to 180°." },
        { term: "Concyclic points", meaning: "Points that all lie on the same circle." }
      ],
      examples: [
        {
          q: "A chord of length 24 cm is 5 cm from the centre of a circle. Find the radius. Also find the length of a chord that is 12 cm from the centre.",
          steps: [
            "The perpendicular from the centre bisects the chord, so the half-chord is 12 cm.",
            "r² = 5² + 12² = 25 + 144 = 169, so r = 13 cm.",
            "For the second chord: (half-chord)² = 13² − 12² = 169 − 144 = 25, so the half-chord is 5 cm.",
            "Chord length = 2 × 5 = 10 cm."
          ],
          answer: "Radius = 13 cm; the chord 12 cm from the centre is 10 cm long."
        },
        {
          q: "ABCD is a cyclic quadrilateral whose diagonals meet at E. If ∠DBC = 70° and ∠BAC = 30°, find ∠BCD. If also AB = BC, find ∠ECD.",
          steps: [
            "∠CAD = ∠DBC = 70° (angles in the same segment, on chord CD).",
            "∠BAD = ∠BAC + ∠CAD = 30° + 70° = 100°.",
            "Opposite angles of a cyclic quadrilateral: ∠BCD = 180° − 100° = 80°.",
            "If AB = BC, then ∠BCA = ∠BAC = 30° (angles opposite equal sides).",
            "∠ECD = ∠BCD − ∠BCE = 80° − 30° = 50°."
          ],
          answer: "∠BCD = 80°; ∠ECD = 50°"
        }
      ],
      qa: [
        { q: "Prove that the angle in a semicircle is a right angle.", a: "Let AB be a diameter and C a point on the circle. Arc AB (the semicircle) subtends a straight angle, 180°, at the centre. The angle at the circle is half of this, so **∠ACB = 90°**." },
        { q: "Why is every rectangle a cyclic quadrilateral, but a rhombus that is not a square is not?", a: "In a rectangle, opposite angles are 90° + 90° = **180°**, so it is cyclic. In a non-square rhombus, opposite angles are equal but not 90°, so their sum is **not 180°**; it cannot be cyclic." },
        { q: "AB and CD are equal chords of a circle with centre O. If ∠AOB = 70°, find ∠COD.", a: "Equal chords subtend equal angles at the centre, so **∠COD = 70°**." }
      ],
      quiz: [
        {
          q: "An arc subtends 100° at the centre of a circle. The angle it subtends at any point on the remaining part of the circle is:",
          options: ["100°", "200°", "50°", "80°"],
          answer: 2,
          explain: "The angle at the centre is double the angle at the circle, so the angle at the circle is 100° ÷ 2 = **50°**."
        },
        {
          q: "ABCD is a cyclic quadrilateral with ∠A = 75°. Then ∠C is:",
          options: ["105°", "75°", "15°", "285°"],
          answer: 0,
          explain: "Opposite angles of a cyclic quadrilateral add up to 180°: ∠C = 180° − 75° = **105°**."
        },
        {
          q: "A chord of a circle of radius 10 cm is 6 cm from the centre. The length of the chord is:",
          options: ["8 cm", "4 cm", "12 cm", "16 cm"],
          answer: 3,
          explain: "Half-chord = √(10² − 6²) = √64 = 8 cm, so the chord is **16 cm**. 8 cm is only half of it."
        },
        {
          q: "The angle in a semicircle is:",
          options: ["45°", "90°", "180°", "60°"],
          answer: 1,
          explain: "The semicircle's arc subtends 180° at the centre, so the angle at the circle is **90°**."
        },
        {
          q: "A, B, C, D lie on a circle, with C and D on the same side of chord AB. If ∠ACB = 40°, then ∠ADB is:",
          options: ["80°", "20°", "40°", "140°"],
          answer: 2,
          explain: "∠ACB and ∠ADB are angles in the same segment, so they are equal: **40°**."
        },
        {
          q: "If a pair of opposite angles of a quadrilateral are supplementary, the quadrilateral is:",
          options: ["always a parallelogram", "always a rhombus", "always a kite", "cyclic"],
          answer: 3,
          explain: "This is the converse of the cyclic quadrilateral theorem: the quadrilateral is **cyclic**."
        }
      ]
    },

    // ───────────────────────────── 10. Heron's Formula ─────────────────────────────
    {
      id: "herons-formula",
      title: "Heron's Formula",
      section: "Mensuration",
      summary: "Finding the area of any triangle from the lengths of its three sides, without needing its height.",
      notes: [
        {
          heading: "Area of a triangle: recap",
          points: [
            "Area = ½ × base × height, when the height is known.",
            "Right triangle: area = ½ × product of the two sides containing the right angle.",
            "Equilateral triangle of side a: area = (√3/4)a².",
            "When the height is not known, as for most scalene triangles, use **Heron's formula**."
          ]
        },
        {
          heading: "Heron's formula",
          points: [
            "For a triangle with sides a, b, c: **Area = √[s(s − a)(s − b)(s − c)]**, where **s = (a + b + c)/2** is the **semi-perimeter**.",
            "The formula is named after Heron of Alexandria.",
            "Steps: find s → find s − a, s − b, s − c → multiply the four numbers → take the square root.",
            "Check: s − a, s − b and s − c must all be positive, and they add up to s."
          ]
        },
        {
          heading: "Tips and common mistakes",
          points: [
            "Use the **semi**-perimeter s, not the full perimeter.",
            "Factorise inside the root before multiplying: √(12 × 6 × 4 × 2) = √(2⁶ × 3²) = 2³ × 3 = 24.",
            "If the sides are given as a ratio with the perimeter, find the actual sides first.",
            "Area is in square units (cm², m²); keep all sides in the same unit.",
            "Isosceles triangle with equal sides a and base b: area = (b/4)√(4a² − b²)."
          ]
        }
      ],
      formulas: [
        "Semi-perimeter: s = (a + b + c)/2",
        "Heron's formula: Area = √[s(s − a)(s − b)(s − c)]",
        "Area = ½ × base × height",
        "Equilateral triangle: Area = (√3/4)a²",
        "Isosceles triangle (equal sides a, base b): Area = (b/4)√(4a² − b²)"
      ],
      terms: [
        { term: "Semi-perimeter", meaning: "Half the perimeter of a triangle: s = (a + b + c)/2." },
        { term: "Heron's formula", meaning: "Area of a triangle with sides a, b, c = √[s(s − a)(s − b)(s − c)]." },
        { term: "Scalene triangle", meaning: "A triangle with all three sides of different lengths." },
        { term: "Isosceles triangle", meaning: "A triangle with two equal sides." },
        { term: "Perimeter", meaning: "The total length of the boundary: a + b + c for a triangle." }
      ],
      examples: [
        {
          q: "Find the area of a triangle with sides 13 cm, 14 cm and 15 cm.",
          steps: [
            "s = (13 + 14 + 15)/2 = 42/2 = 21 cm.",
            "s − a = 21 − 13 = 8, s − b = 21 − 14 = 7, s − c = 21 − 15 = 6.",
            "Area = √(21 × 8 × 7 × 6) = √(3 × 7 × 2³ × 7 × 2 × 3) = √(2⁴ × 3² × 7²).",
            "Area = 2² × 3 × 7 = 84 cm²."
          ],
          answer: "Area = 84 cm²"
        },
        {
          q: "The sides of a triangle are in the ratio 12 : 17 : 25 and its perimeter is 540 cm. Find its area.",
          steps: [
            "Total ratio parts = 12 + 17 + 25 = 54, so one part = 540 ÷ 54 = 10 cm.",
            "Sides: 120 cm, 170 cm and 250 cm.",
            "s = 540/2 = 270 cm; s − a = 150, s − b = 100, s − c = 20.",
            "Area = √(270 × 150 × 100 × 20) = √81000000 = 9000 cm²."
          ],
          answer: "Area = 9000 cm²"
        }
      ],
      qa: [
        { q: "Find the area of an equilateral triangle of side 10 cm using Heron's formula.", a: "s = 15 cm; s − a = s − b = s − c = 5. Area = √(15 × 5 × 5 × 5) = √1875 = **25√3 cm² ≈ 43.3 cm²**, which matches (√3/4) × 10²." },
        { q: "An isosceles triangle has perimeter 30 cm and each of its equal sides is 12 cm. Find its area.", a: "Base = 30 − 24 = 6 cm. s = 15; s − a = 3, s − b = 3, s − c = 9. Area = √(15 × 3 × 3 × 9) = √1215 = √(81 × 15) = **9√15 cm²**." }
      ],
      quiz: [
        {
          q: "The semi-perimeter of a triangle with sides 5 cm, 12 cm and 13 cm is:",
          options: ["30 cm", "17.5 cm", "15 cm", "60 cm"],
          answer: 2,
          explain: "s = (5 + 12 + 13)/2 = 30/2 = **15 cm**. 30 cm is the full perimeter."
        },
        {
          q: "The area of a triangle with sides 5 cm, 12 cm and 13 cm is:",
          options: ["30 cm²", "60 cm²", "65 cm²", "32.5 cm²"],
          answer: 0,
          explain: "s = 15; Area = √(15 × 10 × 3 × 2) = √900 = **30 cm²**. (It is a right triangle: ½ × 5 × 12 = 30.)"
        },
        {
          q: "The area of an equilateral triangle of side 6 cm is:",
          options: ["36√3 cm²", "18√3 cm²", "6√3 cm²", "9√3 cm²"],
          answer: 3,
          explain: "(√3/4) × 6² = (√3/4) × 36 = **9√3 cm²**."
        },
        {
          q: "In Heron's formula, s stands for:",
          options: ["the perimeter", "half the perimeter", "the longest side", "the area"],
          answer: 1,
          explain: "s is the **semi-perimeter**, (a + b + c)/2."
        },
        {
          q: "The area of a triangle with sides 8 cm, 15 cm and 17 cm is:",
          options: ["120 cm²", "68 cm²", "60 cm²", "40 cm²"],
          answer: 2,
          explain: "s = 20; Area = √(20 × 12 × 5 × 3) = √3600 = **60 cm²**. 120 cm² forgets the ½."
        },
        {
          q: "An isosceles triangle has two sides of 5 cm each and a base of 6 cm. Its area is:",
          options: ["15 cm²", "12 cm²", "24 cm²", "30 cm²"],
          answer: 1,
          explain: "s = 8; Area = √(8 × 3 × 3 × 2) = √144 = **12 cm²**. (Height = 4 cm, so ½ × 6 × 4 = 12.)"
        }
      ]
    },

    // ───────────────────────────── 11. Surface Areas and Volumes ─────────────────────────────
    {
      id: "surface-areas-and-volumes",
      title: "Surface Areas and Volumes",
      section: "Mensuration",
      summary: "Surface areas and volumes of right circular cones, spheres and hemispheres.",
      notes: [
        {
          heading: "Right circular cone",
          points: [
            "A cone has base radius r, height h (vertex to centre of base, perpendicular to the base) and **slant height l**, where **l² = r² + h²**.",
            "Curved surface area = **πrl**. Total surface area = πrl + πr² = **πr(l + r)**.",
            "Volume = **(1/3)πr²h**, one-third of the volume πr²h of a cylinder with the same base and height.",
            "Common mistake: using h instead of l for the surface area, or l instead of h for the volume."
          ]
        },
        {
          heading: "Sphere and hemisphere",
          points: [
            "A **sphere** is the set of all points in space at a fixed distance r from a fixed point. Surface area = **4πr²**; volume = **(4/3)πr³**.",
            "A **hemisphere** is half a sphere: curved surface area = **2πr²**, total surface area = **3πr²** (curved part + flat circular face), volume = **(2/3)πr³**.",
            "A **spherical shell** with outer radius R and inner radius r has volume (4/3)π(R³ − r³).",
            "The surface area of a sphere is 4 times the area of a circle of the same radius."
          ]
        },
        {
          heading: "Working tips",
          points: [
            "Take π = 22/7 unless told otherwise; it works neatly when r is a multiple of 7 (or 3.5).",
            "Convert units first: 1 m = 100 cm, 1 m³ = 1000 litres, 1 litre = 1000 cm³.",
            "If the radius doubles, surface area becomes 4 times and volume becomes 8 times.",
            "Canvas for a tent or paint for a dome uses surface area; capacity of a vessel uses volume."
          ]
        }
      ],
      formulas: [
        "Cone: l = √(r² + h²)",
        "Cone: CSA = πrl;  TSA = πr(l + r);  Volume = (1/3)πr²h",
        "Sphere: Surface area = 4πr²;  Volume = (4/3)πr³",
        "Hemisphere: CSA = 2πr²;  TSA = 3πr²;  Volume = (2/3)πr³",
        "Spherical shell: Volume = (4/3)π(R³ − r³)",
        "1 m³ = 1000 L;  1 L = 1000 cm³"
      ],
      terms: [
        { term: "Slant height", meaning: "The distance from the vertex of a cone to any point on the edge of its base: l = √(r² + h²)." },
        { term: "Curved surface area (CSA)", meaning: "The area of only the curved part of a solid, e.g. πrl for a cone." },
        { term: "Total surface area (TSA)", meaning: "The curved surface area plus the area of the flat face(s), e.g. πr(l + r) for a cone." },
        { term: "Hemisphere", meaning: "Half of a sphere, cut through its centre. Volume (2/3)πr³, TSA 3πr²." },
        { term: "Spherical shell", meaning: "The solid between two concentric spheres, like a hollow ball; volume (4/3)π(R³ − r³)." },
        { term: "Capacity", meaning: "The volume a hollow container can hold, often given in litres." }
      ],
      examples: [
        {
          q: "A conical tent is 10 m high and the radius of its base is 24 m. Find its slant height and the cost of the canvas needed at ₹70 per m². (Use π = 22/7.)",
          steps: [
            "l = √(r² + h²) = √(24² + 10²) = √(576 + 100) = √676 = 26 m.",
            "Canvas needed = CSA = πrl = (22/7) × 24 × 26 = 13728/7 m².",
            "Cost = (13728/7) × 70 = 13728 × 10 = ₹1,37,280."
          ],
          answer: "Slant height = 26 m; cost of canvas = ₹1,37,280"
        },
        {
          q: "The diameter of a metallic ball is 4.2 cm. Find its mass if the density of the metal is 8.9 g per cm³. (Use π = 22/7.)",
          steps: [
            "Radius r = 4.2 ÷ 2 = 2.1 cm.",
            "Volume = (4/3)πr³ = (4/3) × (22/7) × 2.1 × 2.1 × 2.1 = (4/3) × (22/7) × 9.261.",
            "Volume = 38.808 cm³.",
            "Mass = volume × density = 38.808 × 8.9 = 345.39 g (approx.)."
          ],
          answer: "Mass ≈ 345.39 g"
        }
      ],
      qa: [
        { q: "The radius of a sphere is doubled. What happens to its surface area and volume?", a: "Surface area 4π(2r)² = 16πr² = **4 times** the original. Volume (4/3)π(2r)³ = **8 times** the original." },
        { q: "Find the volume of a right circular cone with radius 6 cm and height 7 cm. (π = 22/7)", a: "V = (1/3) × (22/7) × 6² × 7 = (1/3) × 22 × 36 = **264 cm³**." },
        { q: "Find the total surface area of a hemisphere of radius 10 cm. (π = 3.14)", a: "TSA = 3πr² = 3 × 3.14 × 100 = **942 cm²**." }
      ],
      quiz: [
        {
          q: "The slant height of a cone with radius 5 cm and height 12 cm is:",
          options: ["√119 cm", "17 cm", "13 cm", "7 cm"],
          answer: 2,
          explain: "l = √(5² + 12²) = √169 = **13 cm**. √119 comes from subtracting instead of adding the squares."
        },
        {
          q: "The curved surface area of a cone with radius 7 cm and slant height 10 cm is (π = 22/7):",
          options: ["154 cm²", "374 cm²", "440 cm²", "220 cm²"],
          answer: 3,
          explain: "CSA = πrl = (22/7) × 7 × 10 = **220 cm²**. 374 cm² is the total surface area (220 + 154)."
        },
        {
          q: "The volume of a sphere of radius 3 cm is:",
          options: ["36π cm³", "108π cm³", "12π cm³", "27π cm³"],
          answer: 0,
          explain: "(4/3)π × 3³ = (4/3)π × 27 = **36π cm³**. Forgetting to divide by 3 gives 108π."
        },
        {
          q: "The total surface area of a solid hemisphere of radius r is:",
          options: ["2πr²", "4πr²", "3πr²", "(2/3)πr³"],
          answer: 2,
          explain: "Curved part 2πr² + flat circular face πr² = **3πr²**."
        },
        {
          q: "If the radius of a sphere is halved, its volume becomes:",
          options: ["1/2 of the original", "1/8 of the original", "1/4 of the original", "2 times the original"],
          answer: 1,
          explain: "Volume ∝ r³, so (1/2)³ = **1/8 of the original**."
        },
        {
          q: "A cone and a cylinder have the same base radius and the same height. The ratio of the volume of the cone to that of the cylinder is:",
          options: ["3 : 1", "1 : 2", "2 : 3", "1 : 3"],
          answer: 3,
          explain: "(1/3)πr²h : πr²h = **1 : 3**."
        }
      ]
    },

    // ───────────────────────────── 12. Statistics ─────────────────────────────
    {
      id: "statistics",
      title: "Statistics",
      section: "Statistics & Probability",
      summary: "Organising data into frequency tables and showing it with bar graphs, histograms (with equal and unequal class widths) and frequency polygons.",
      notes: [
        {
          heading: "Frequency distributions",
          points: [
            "**Frequency** is the number of times an observation occurs. A table of observations with their frequencies is a **frequency distribution**.",
            "Large data are grouped into **class intervals** such as 10–20, 20–30. In 10–20, 10 is the lower limit, 20 the upper limit, and the **class size** (width) is 20 − 10 = 10.",
            "In classes like 10–20, 20–30, a value equal to 20 is counted in 20–30 (the upper limit is not included).",
            "**Class mark** = (lower limit + upper limit)/2, the mid-point of the class.",
            "Inclusive classes such as 1–10, 11–20 are made continuous by subtracting 0.5 from each lower limit and adding 0.5 to each upper limit: 0.5–10.5, 10.5–20.5."
          ]
        },
        {
          heading: "Bar graphs",
          points: [
            "A **bar graph** shows data with bars of **equal width** and **equal gaps** between them; the height of each bar shows the value.",
            "Bars can be vertical or horizontal; the gaps have no meaning.",
            "Choose a suitable scale (e.g. 1 unit = 10 students) and label both axes."
          ]
        },
        {
          heading: "Histograms",
          points: [
            "A **histogram** shows a grouped frequency distribution with continuous classes as rectangles **with no gaps** between them.",
            "Class intervals go on the x-axis and frequencies on the y-axis; each rectangle's width is the class size.",
            "If the first class does not start at 0, show a **kink (zig-zag)** on the x-axis near the origin.",
            "**Unequal class widths**: the **areas** of the rectangles must be proportional to the frequencies. Use adjusted height = (minimum class size ÷ class size) × frequency.",
            "Example: if the minimum class size is 5 and the class 50–60 has frequency 12, its adjusted height is (5/10) × 12 = 6."
          ]
        },
        {
          heading: "Frequency polygons",
          points: [
            "Join the **mid-points of the tops** of adjacent rectangles of the histogram with line segments.",
            "To close the polygon, imagine a class with **zero frequency** before the first class and after the last class, and join to their class marks on the x-axis.",
            "A frequency polygon can also be drawn **without a histogram** by plotting (class mark, frequency) and joining the points.",
            "Frequency polygons are useful for comparing two sets of data on the same graph, such as the marks of two sections."
          ]
        }
      ],
      formulas: [
        "Class size = upper limit − lower limit",
        "Class mark = (upper limit + lower limit)/2",
        "Adjusted height (unequal widths) = (minimum class size ÷ class size of that interval) × its frequency",
        "Inclusive → continuous classes (gap of 1): lower limit − 0.5, upper limit + 0.5"
      ],
      terms: [
        { term: "Frequency", meaning: "The number of times a particular observation (or class) occurs in the data." },
        { term: "Class interval", meaning: "A group such as 20–30 into which observations are sorted; it has a lower and an upper limit." },
        { term: "Class size", meaning: "The width of a class interval: upper limit − lower limit." },
        { term: "Class mark", meaning: "The mid-point of a class: (lower limit + upper limit)/2." },
        { term: "Histogram", meaning: "A graph of a grouped frequency distribution using adjacent rectangles whose areas are proportional to the frequencies." },
        { term: "Frequency polygon", meaning: "A closed figure made by joining the points (class mark, frequency), including zero-frequency classes at both ends." }
      ],
      examples: [
        {
          q: "The class marks of a frequency distribution are 47, 52, 57, 62, …, 97, 102. Find the class size and the first and last class intervals.",
          steps: [
            "Class size = difference between consecutive class marks = 52 − 47 = 5.",
            "Each class extends 5/2 = 2.5 on either side of its class mark.",
            "First class: 47 − 2.5 to 47 + 2.5, i.e. 44.5–49.5.",
            "Last class: 102 − 2.5 to 102 + 2.5, i.e. 99.5–104.5."
          ],
          answer: "Class size 5; first class 44.5–49.5; last class 99.5–104.5"
        },
        {
          q: "For the distribution 0–10: 5, 10–20: 8, 20–40: 18, 40–50: 12, 50–80: 9, find the heights of the rectangles to draw a histogram.",
          steps: [
            "The class widths are unequal (10, 10, 20, 10, 30). Minimum class size = 10.",
            "Adjusted height = (10 ÷ class size) × frequency.",
            "0–10: 5; 10–20: 8 (width 10, no change).",
            "20–40: (10/20) × 18 = 9; 40–50: 12.",
            "50–80: (10/30) × 9 = 3."
          ],
          answer: "Heights: 5, 8, 9, 12 and 3 respectively"
        }
      ],
      qa: [
        { q: "Why is a histogram drawn without gaps, while a bar graph has gaps?", a: "A histogram represents **continuous** class intervals, so each class ends where the next begins. A bar graph shows **separate categories**, so the bars are kept apart." },
        { q: "Marks are grouped as 1–10, 11–20, 21–30. How should these classes be prepared before drawing a histogram?", a: "Make them continuous by subtracting 0.5 from each lower limit and adding 0.5 to each upper limit: **0.5–10.5, 10.5–20.5, 20.5–30.5**." }
      ],
      quiz: [
        {
          q: "The class mark of the class 90–120 is:",
          options: ["30", "105", "120", "100"],
          answer: 1,
          explain: "Class mark = (90 + 120)/2 = **105**. 30 is the class size."
        },
        {
          q: "With classes 10–20, 20–30, 30–40, …, an observation equal to 20 is counted in:",
          options: ["10–20", "both 10–20 and 20–30", "20–30", "no class; it is left out"],
          answer: 2,
          explain: "The upper limit is not included in a class, so 20 goes into **20–30**."
        },
        {
          q: "In a histogram with unequal class widths, the rectangles are adjusted so that:",
          options: ["their areas are proportional to the frequencies", "their widths are all equal", "their heights equal the class marks", "there are gaps between them"],
          answer: 0,
          explain: "Frequency is shown by **area**, so heights are adjusted using (minimum class size ÷ class size) × frequency."
        },
        {
          q: "In a histogram, the minimum class size is 10. The class 40–60 has frequency 16. The adjusted height of its rectangle is:",
          options: ["16", "32", "4", "8"],
          answer: 3,
          explain: "(10/20) × 16 = **8**. Multiplying by 20/10 instead gives 32."
        },
        {
          q: "A frequency polygon is drawn by joining:",
          options: ["the upper-left corners of the rectangles", "the mid-points of the tops of the rectangles", "the lower limits of the classes", "the tops of the tallest rectangles only"],
          answer: 1,
          explain: "Join the **mid-points of the tops** of the rectangles (i.e. the points with class marks as x-coordinates)."
        },
        {
          q: "The class marks of a distribution are 15, 20, 25, 30. The class whose class mark is 15 is:",
          options: ["10–20", "15–20", "12.5–17.5", "13–17"],
          answer: 2,
          explain: "Class size = 5, so the class runs 2.5 either side of 15: **12.5–17.5**."
        }
      ]
    }
  ]
});
