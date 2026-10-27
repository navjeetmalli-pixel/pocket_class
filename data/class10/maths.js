// Class 10 Mathematics: current rationalised NCERT textbook.
// Format: see CONTENT_GUIDE.md
StudyData.add(10, "maths", {
  chapters: [
    // ───────────────────────────── 1. Real Numbers ─────────────────────────────
    {
      id: "real-numbers",
      title: "Real Numbers",
      section: "Number Systems",
      summary: "The Fundamental Theorem of Arithmetic, its use in finding HCF and LCM, and proofs that numbers such as √2, √3 and 3 + 2√5 are irrational.",
      notes: [
        {
          heading: "Fundamental Theorem of Arithmetic",
          points: [
            "Every composite number can be expressed (factorised) as a product of primes, and this factorisation is **unique**, apart from the order in which the prime factors occur.",
            "Write prime factorisations in index form, primes in ascending order: 32760 = 2³ × 3² × 5 × 7 × 13.",
            "Find the factorisation by repeated division by primes or with a factor tree.",
            "Uniqueness answers questions like 'can 4ⁿ end with 0?': 4ⁿ = 2²ⁿ has no prime factor 5, so **no**."
          ]
        },
        {
          heading: "HCF and LCM by prime factorisation",
          points: [
            "**HCF** = product of the **smallest power** of each **common** prime factor.",
            "**LCM** = product of the **greatest power** of **each** prime factor involved.",
            "For any two positive integers a and b: **HCF(a, b) × LCM(a, b) = a × b**.",
            "This product rule does **not** work for three numbers: for 6, 72, 120, HCF × LCM = 6 × 360 = 2160, but 6 × 72 × 120 = 51840.",
            "Co-prime numbers have HCF 1, so their LCM equals their product."
          ]
        },
        {
          heading: "Irrational numbers",
          points: [
            "**Theorem**: let p be a prime. If p divides a², then p divides a (a a positive integer).",
            "**√2, √3, √5** (and √p for any prime p) are irrational; this is proved by contradiction.",
            "Sum or difference of a rational and an irrational number is irrational.",
            "Product or quotient of a **non-zero** rational and an irrational number is irrational, so 5 − √3, 3√2 and 2/√5 are irrational."
          ]
        },
        {
          heading: "Proof by contradiction: √3 is irrational",
          points: [
            "Assume √3 is rational: √3 = a/b, where a and b are co-prime integers and b ≠ 0.",
            "Squaring, 3b² = a², so 3 divides a², and hence 3 divides a. Write a = 3c.",
            "Then 3b² = 9c², i.e. b² = 3c², so 3 divides b² and hence 3 divides b.",
            "So 3 is a common factor of a and b, contradicting that they are co-prime. Hence √3 is irrational.",
            "To show 3 + 2√5 is irrational: if it equalled a rational r, then √5 = (r − 3)/2 would be rational, which is false."
          ]
        }
      ],
      formulas: [
        "HCF(a, b) × LCM(a, b) = a × b  (two numbers only)",
        "HCF = product of the smallest powers of the common prime factors",
        "LCM = product of the greatest powers of all prime factors involved",
        "If a prime p divides a², then p divides a",
        "Rational ± irrational = irrational;  non-zero rational × irrational = irrational"
      ],
      terms: [
        { term: "Prime number", meaning: "A natural number greater than 1 with exactly two factors, 1 and itself, e.g. 2, 3, 5, 7, 11." },
        { term: "Composite number", meaning: "A natural number greater than 1 that has more than two factors, e.g. 4, 6, 1014." },
        { term: "Fundamental Theorem of Arithmetic", meaning: "Every composite number can be written as a product of primes in **exactly one way**, apart from the order of the factors." },
        { term: "HCF", meaning: "Highest Common Factor: the largest number that divides each of the given numbers." },
        { term: "LCM", meaning: "Lowest Common Multiple: the smallest positive number that is a multiple of each of the given numbers." },
        { term: "Co-prime numbers", meaning: "Numbers whose only common factor is 1, e.g. 8 and 15." }
      ],
      examples: [
        {
          q: "Find the HCF and LCM of 510 and 92 by prime factorisation, and verify that HCF × LCM = product of the numbers.",
          steps: [
            "510 = 2 × 3 × 5 × 17",
            "92 = 2² × 23",
            "HCF = smallest power of the common prime 2 = 2.",
            "LCM = 2² × 3 × 5 × 17 × 23 = 23460.",
            "Check: HCF × LCM = 2 × 23460 = 46920, and 510 × 92 = 46920. ✓"
          ],
          answer: "HCF = 2, LCM = 23460"
        },
        {
          q: "Prove that 3 + 2√5 is irrational.",
          steps: [
            "Assume, to the contrary, that 3 + 2√5 is rational. Then 3 + 2√5 = a/b for co-prime integers a and b, b ≠ 0.",
            "Rearranging: 2√5 = a/b − 3, so √5 = (a − 3b)/(2b).",
            "Since a and b are integers, (a − 3b)/(2b) is rational, so √5 would be rational.",
            "But √5 is irrational. This contradiction shows our assumption was wrong."
          ],
          answer: "3 + 2√5 is irrational."
        }
      ],
      qa: [
        { q: "Explain why 7 × 11 × 13 + 13 is a composite number.", a: "7 × 11 × 13 + 13 = 13 × (7 × 11 + 1) = 13 × 78 = 1014. It has factors other than 1 and itself (such as 13), so it is **composite**." },
        { q: "Given that HCF(306, 657) = 9, find LCM(306, 657).", a: "LCM = (306 × 657) ÷ HCF = (306 × 657) ÷ 9 = 34 × 657 = **22338**." },
        { q: "Sita takes 18 minutes to drive one round of a field and Ravi takes 12 minutes. They start together from the same point in the same direction. After how many minutes will they meet again at the starting point?", a: "They meet when both have completed whole rounds, i.e. after LCM(18, 12) minutes. 18 = 2 × 3², 12 = 2² × 3, so LCM = 2² × 3² = **36 minutes**." }
      ],
      quiz: [
        {
          q: "The HCF of 26 and 91 is:",
          options: ["7", "13", "182", "26"],
          answer: 1,
          explain: "26 = 2 × 13 and 91 = 7 × 13, so HCF = **13**. 182 is their LCM."
        },
        {
          q: "If HCF(a, b) = 12 and a × b = 1800, then LCM(a, b) is:",
          options: ["1788", "21600", "150", "180"],
          answer: 2,
          explain: "HCF × LCM = a × b, so LCM = 1800 ÷ 12 = **150**."
        },
        {
          q: "The prime factorisation of 156 is:",
          options: ["2 × 3 × 13", "2² × 39", "2 × 78", "2² × 3 × 13"],
          answer: 3,
          explain: "156 = 4 × 39 = **2² × 3 × 13**. 39 and 78 are not prime, so the other forms are not prime factorisations."
        },
        {
          q: "Which of the following is irrational?",
          options: ["(3 + √7) − √7", "2√3 × √3", "5 + √2", "√(16/25)"],
          answer: 2,
          explain: "(3 + √7) − √7 = 3, 2√3 × √3 = 6 and √(16/25) = 4/5 are rational. **5 + √2** is rational + irrational, so it is irrational."
        },
        {
          q: "For any natural number n, 4ⁿ can never end with the digit 0 because:",
          options: ["its prime factorisation has no factor 5", "4 is an even number", "4 is not a prime number", "4ⁿ is a perfect square"],
          answer: 0,
          explain: "A number ending in 0 must be divisible by 2 and 5. 4ⁿ = 2²ⁿ, and by uniqueness of prime factorisation it has **no factor 5**."
        },
        {
          q: "The LCM of 2³ × 3² and 2² × 3³ is:",
          options: ["2² × 3²", "2³ × 3³", "2⁵ × 3⁵", "2³ × 3²"],
          answer: 1,
          explain: "LCM takes the greatest power of each prime: **2³ × 3³**. 2² × 3² is the HCF."
        }
      ]
    },

    // ───────────────────────────── 2. Polynomials ─────────────────────────────
    {
      id: "polynomials",
      title: "Polynomials",
      section: "Algebra",
      summary: "The geometrical meaning of the zeroes of a polynomial, and the relationship between the zeroes and coefficients of a quadratic polynomial.",
      notes: [
        {
          heading: "Degree and zeroes",
          points: [
            "Linear: ax + b; quadratic: ax² + bx + c; cubic: ax³ + bx² + cx + d (a ≠ 0 in each).",
            "A real number k is a **zero** of p(x) if p(k) = 0.",
            "A polynomial of degree n has **at most n zeroes**: a quadratic at most 2, a cubic at most 3."
          ]
        },
        {
          heading: "Geometrical meaning of zeroes",
          points: [
            "The zeroes of p(x) are the **x-coordinates of the points where the graph of y = p(x) meets the x-axis**.",
            "The graph of a linear polynomial ax + b is a straight line meeting the x-axis at exactly one point, (−b/a, 0).",
            "The graph of ax² + bx + c is a **parabola**, opening **upwards if a > 0** and **downwards if a < 0**.",
            "A parabola may cut the x-axis at two points (two zeroes), touch it at one point (two equal zeroes), or not meet it at all (no real zero).",
            "Count zeroes by counting where the graph meets the **x-axis**, not the y-axis."
          ]
        },
        {
          heading: "Zeroes and coefficients of a quadratic",
          points: [
            "If α and β are the zeroes of ax² + bx + c: **α + β = −b/a** and **αβ = c/a**.",
            "A quadratic whose zeroes have sum S and product P is **k(x² − Sx + P)**, where k is any non-zero real number.",
            "Useful results: α² + β² = (α + β)² − 2αβ and 1/α + 1/β = (α + β)/(αβ).",
            "Common mistake: the sign of the sum. For x² − 5x + 6, α + β = +5 (not −5) and αβ = 6."
          ]
        },
        {
          heading: "Cubic polynomials",
          points: [
            "If α, β, γ are the zeroes of ax³ + bx² + cx + d: α + β + γ = −b/a, αβ + βγ + γα = c/a and αβγ = −d/a.",
            "The graph of a cubic polynomial meets the x-axis at most 3 times."
          ]
        }
      ],
      formulas: [
        "Zero of ax + b: x = −b/a",
        "Quadratic ax² + bx + c: α + β = −b/a;  αβ = c/a",
        "Quadratic with given zeroes: k[x² − (α + β)x + αβ]",
        "α² + β² = (α + β)² − 2αβ",
        "1/α + 1/β = (α + β)/(αβ)",
        "Cubic ax³ + bx² + cx + d: α + β + γ = −b/a;  αβ + βγ + γα = c/a;  αβγ = −d/a"
      ],
      terms: [
        { term: "Zero of a polynomial", meaning: "A value k for which p(k) = 0; geometrically, the x-coordinate where y = p(x) meets the x-axis." },
        { term: "Parabola", meaning: "The U-shaped graph of a quadratic polynomial; it opens upwards if a > 0 and downwards if a < 0." },
        { term: "Quadratic polynomial", meaning: "A polynomial of degree 2, ax² + bx + c with a ≠ 0. It has at most two zeroes." },
        { term: "Cubic polynomial", meaning: "A polynomial of degree 3, ax³ + bx² + cx + d with a ≠ 0. It has at most three zeroes." },
        { term: "Degree", meaning: "The highest power of the variable in a polynomial." }
      ],
      examples: [
        {
          q: "Find the zeroes of 6x² − 3 − 7x and verify the relationship between the zeroes and the coefficients.",
          steps: [
            "Write in standard form: 6x² − 7x − 3 (a = 6, b = −7, c = −3).",
            "Split the middle term: 6x² − 9x + 2x − 3 = 3x(2x − 3) + 1(2x − 3) = (3x + 1)(2x − 3).",
            "Zeroes: x = −1/3 and x = 3/2.",
            "Sum = 3/2 − 1/3 = 7/6, and −b/a = 7/6. ✓",
            "Product = (−1/3)(3/2) = −1/2, and c/a = −3/6 = −1/2. ✓"
          ],
          answer: "Zeroes are −1/3 and 3/2; the relationships are verified."
        },
        {
          q: "Find a quadratic polynomial whose zeroes have sum 1/4 and product −1.",
          steps: [
            "Required polynomial = k[x² − (sum)x + product].",
            "= k[x² − (1/4)x − 1]",
            "Take k = 4 to clear fractions: 4x² − x − 4."
          ],
          answer: "4x² − x − 4"
        }
      ],
      qa: [
        { q: "The graph of y = p(x) cuts the x-axis at exactly three points. How many zeroes does p(x) have? Can p(x) be a quadratic polynomial?", a: "p(x) has **3 zeroes**. It cannot be quadratic, because a quadratic polynomial has **at most 2** zeroes." },
        { q: "If α and β are the zeroes of x² − 5x + 6, find α² + β² without finding the zeroes.", a: "α + β = 5 and αβ = 6. α² + β² = (α + β)² − 2αβ = 25 − 12 = **13**." },
        { q: "Find the zeroes of x² − 3 and verify the relationship between zeroes and coefficients.", a: "x² − 3 = (x − √3)(x + √3), so the zeroes are **√3 and −√3**. Sum = 0 = −0/1 ✓; product = −3 = −3/1 ✓." }
      ],
      quiz: [
        {
          q: "The sum and product of the zeroes of 2x² − 8x + 6 are respectively:",
          options: ["−4 and 3", "4 and 3", "8 and 6", "−4 and −3"],
          answer: 1,
          explain: "Sum = −b/a = 8/2 = 4; product = c/a = 6/2 = 3. So **4 and 3** (the zeroes are 1 and 3)."
        },
        {
          q: "A quadratic polynomial whose zeroes are 3 and −2 is:",
          options: ["x² + x − 6", "x² − x + 6", "x² − x − 6", "x² + 5x + 6"],
          answer: 2,
          explain: "Sum = 1, product = −6, so x² − (1)x + (−6) = **x² − x − 6**. x² + x − 6 has zeroes −3 and 2."
        },
        {
          q: "The graph of y = ax² + bx + c is a parabola opening downwards. Then:",
          options: ["a < 0", "a > 0", "c < 0", "b < 0"],
          answer: 0,
          explain: "The sign of a decides the direction: the parabola opens downwards when **a < 0**."
        },
        {
          q: "The graph of y = p(x) meets the x-axis at exactly 2 points and the y-axis at 1 point. The number of zeroes of p(x) is:",
          options: ["1", "3", "0", "2"],
          answer: 3,
          explain: "Zeroes are counted where the graph meets the **x-axis**: **2**. The y-axis intersection does not count."
        },
        {
          q: "If 2 is a zero of x² − 6x + k, then k is:",
          options: ["−8", "8", "16", "4"],
          answer: 1,
          explain: "p(2) = 4 − 12 + k = 0 ⇒ **k = 8**. (The other zero is 4, and the product is 2 × 4 = 8.)"
        },
        {
          q: "If α and β are the zeroes of x² + 7x + 10, then α + β + αβ equals:",
          options: ["17", "−17", "3", "−3"],
          answer: 2,
          explain: "α + β = −7 and αβ = 10, so the value is −7 + 10 = **3**."
        }
      ]
    },

    // ───────────────────────────── 3. Pair of Linear Equations in Two Variables ─────────────────────────────
    {
      id: "pair-of-linear-equations-in-two-variables",
      title: "Pair of Linear Equations in Two Variables",
      section: "Algebra",
      summary: "Solving two linear equations together by the graphical, substitution and elimination methods, and deciding whether a pair has one, no or infinitely many solutions.",
      notes: [
        {
          heading: "Pair of linear equations",
          points: [
            "General form: a₁x + b₁y + c₁ = 0 and a₂x + b₂y + c₂ = 0.",
            "A **solution** is a pair (x, y) that satisfies **both** equations at the same time.",
            "Graphically, each equation is a straight line, and a solution is a point common to both lines.",
            "To draw each line, find at least two (preferably three) solutions in a table and plot them."
          ]
        },
        {
          heading: "Types of solutions",
          points: [
            "**Intersecting lines** ⇒ exactly one (unique) solution ⇒ **consistent**.",
            "**Coincident lines** ⇒ infinitely many solutions ⇒ **dependent** (consistent).",
            "**Parallel lines** ⇒ no solution ⇒ **inconsistent**."
          ]
        },
        {
          heading: "Checking with ratios of coefficients",
          points: [
            "**a₁/a₂ ≠ b₁/b₂** ⇒ intersecting lines, unique solution.",
            "**a₁/a₂ = b₁/b₂ = c₁/c₂** ⇒ coincident lines, infinitely many solutions.",
            "**a₁/a₂ = b₁/b₂ ≠ c₁/c₂** ⇒ parallel lines, no solution.",
            "Example: 2x + 3y − 9 = 0 and 4x + 6y − 18 = 0 give 2/4 = 3/6 = 9/18 = 1/2, so there are infinitely many solutions."
          ]
        },
        {
          heading: "Substitution method",
          points: [
            "From the simpler equation, express one variable in terms of the other (e.g. y = 7 − 2x).",
            "Substitute into the other equation to get an equation in one variable, and solve it.",
            "Put this value back to get the other variable; check the answer in both equations.",
            "If you end with a true statement like 6 = 6, there are infinitely many solutions; a false one like 0 = 5 means no solution."
          ]
        },
        {
          heading: "Elimination method and word problems",
          points: [
            "Multiply the equations by suitable non-zero numbers to make the coefficients of one variable equal (or opposite).",
            "Subtract (or add) to eliminate that variable, solve, then substitute back.",
            "In word problems, define each variable with its unit, form one equation from each condition, solve, and answer in words.",
            "For age problems, '5 years ago' means subtract 5 from **each** person's present age."
          ]
        }
      ],
      formulas: [
        "a₁/a₂ ≠ b₁/b₂ → intersecting lines → unique solution (consistent)",
        "a₁/a₂ = b₁/b₂ = c₁/c₂ → coincident lines → infinitely many solutions (dependent, consistent)",
        "a₁/a₂ = b₁/b₂ ≠ c₁/c₂ → parallel lines → no solution (inconsistent)"
      ],
      terms: [
        { term: "Consistent pair", meaning: "A pair of linear equations that has at least one solution (intersecting or coincident lines)." },
        { term: "Inconsistent pair", meaning: "A pair of linear equations with no solution; its lines are parallel." },
        { term: "Dependent pair", meaning: "A pair whose lines coincide, giving infinitely many solutions." },
        { term: "Substitution method", meaning: "Solving by expressing one variable in terms of the other and substituting into the second equation." },
        { term: "Elimination method", meaning: "Solving by making the coefficients of one variable equal and then adding or subtracting the equations to remove it." }
      ],
      examples: [
        {
          q: "Solve by elimination: 3x + 4y = 10 and 2x − 2y = 2.",
          steps: [
            "Multiply the second equation by 2: 4x − 4y = 4.",
            "Add it to the first: (3x + 4y) + (4x − 4y) = 10 + 4 ⇒ 7x = 14 ⇒ x = 2.",
            "Substitute in 2x − 2y = 2: 4 − 2y = 2 ⇒ y = 1.",
            "Check in the first equation: 3(2) + 4(1) = 10. ✓"
          ],
          answer: "x = 2, y = 1"
        },
        {
          q: "Five years hence, Jacob's age will be three times his son's age. Five years ago, Jacob's age was seven times his son's age. Find their present ages.",
          steps: [
            "Let Jacob's present age be x years and his son's be y years.",
            "Five years hence: x + 5 = 3(y + 5) ⇒ x − 3y = 10.",
            "Five years ago: x − 5 = 7(y − 5) ⇒ x − 7y = −30.",
            "Subtract the second from the first: 4y = 40 ⇒ y = 10.",
            "Then x = 10 + 3(10) = 40. Check: 45 = 3 × 15 and 35 = 7 × 5. ✓"
          ],
          answer: "Jacob is 40 years old and his son is 10 years old."
        }
      ],
      qa: [
        { q: "For what value of k will x + 2y = 3 and 3x + ky = 9 have infinitely many solutions?", a: "We need a₁/a₂ = b₁/b₂ = c₁/c₂: 1/3 = 2/k = 3/9. From 1/3 = 2/k, **k = 6**." },
        { q: "Show that 2x + 3y = 9 and 4x + 6y = 15 have no solution.", a: "a₁/a₂ = 2/4 = 1/2, b₁/b₂ = 3/6 = 1/2, c₁/c₂ = 9/15 = 3/5. Since a₁/a₂ = b₁/b₂ ≠ c₁/c₂, the lines are **parallel**, so there is **no solution**." },
        { q: "Half the perimeter of a rectangular garden, whose length is 4 m more than its width, is 36 m. Find its dimensions.", a: "Let length = l and width = w. Then l + w = 36 and l − w = 4. Adding: 2l = 40, so **l = 20 m** and **w = 16 m**." }
      ],
      quiz: [
        {
          q: "The pair of equations x + 2y = 4 and 2x + 4y = 12 has:",
          options: ["a unique solution", "infinitely many solutions", "exactly two solutions", "no solution"],
          answer: 3,
          explain: "a₁/a₂ = b₁/b₂ = 1/2 but c₁/c₂ = 4/12 = 1/3. The lines are parallel, so there is **no solution**."
        },
        {
          q: "For what value of k do 2x + 3y = 5 and 4x + ky = 10 have infinitely many solutions?",
          options: ["3", "6", "−6", "12"],
          answer: 1,
          explain: "Need 2/4 = 3/k = 5/10. So 3/k = 1/2 and **k = 6**."
        },
        {
          q: "The solution of x + y = 14 and x − y = 4 is:",
          options: ["x = 5, y = 9", "x = 10, y = 4", "x = 9, y = 5", "x = 7, y = 7"],
          answer: 2,
          explain: "Adding: 2x = 18 ⇒ x = 9; then y = 14 − 9 = 5. So **x = 9, y = 5**."
        },
        {
          q: "Which equation, paired with 3x + 2y = 6, gives an inconsistent pair?",
          options: ["6x + 4y = 18", "6x + 4y = 12", "2x + 3y = 6", "3x − 2y = 6"],
          answer: 0,
          explain: "For **6x + 4y = 18**: 3/6 = 2/4 = 1/2 but 6/18 = 1/3, so the lines are parallel. 6x + 4y = 12 is the same line (coincident)."
        },
        {
          q: "If a pair of linear equations is consistent, then the lines are:",
          options: ["always intersecting", "parallel", "always coincident", "intersecting or coincident"],
          answer: 3,
          explain: "Consistent means at least one solution: the lines are **intersecting (one solution) or coincident (infinitely many)**."
        },
        {
          q: "The sum of two numbers is 50 and their difference is 14. The larger number is:",
          options: ["18", "32", "36", "25"],
          answer: 1,
          explain: "x + y = 50 and x − y = 14 ⇒ 2x = 64 ⇒ x = **32** (the smaller is 18)."
        }
      ]
    },

    // ───────────────────────────── 4. Quadratic Equations ─────────────────────────────
    {
      id: "quadratic-equations",
      title: "Quadratic Equations",
      section: "Algebra",
      summary: "Equations of the form ax² + bx + c = 0: solving them by factorisation and by the quadratic formula, and using the discriminant to find the nature of the roots.",
      notes: [
        {
          heading: "Standard form",
          points: [
            "A quadratic equation in x is **ax² + bx + c = 0**, where a, b, c are real numbers and **a ≠ 0**.",
            "Simplify before deciding: x(x + 1) + 8 = (x + 2)(x − 2) reduces to x + 12 = 0, which is **not** quadratic, but (x − 2)² + 1 = 2x − 3 reduces to x² − 6x + 8 = 0, which is.",
            "α is a **root** if aα² + bα + c = 0. The roots of ax² + bx + c = 0 are the zeroes of the polynomial ax² + bx + c.",
            "A quadratic equation has at most two roots."
          ]
        },
        {
          heading: "Solving by factorisation",
          points: [
            "Split the middle term: find two numbers whose sum is b and product is ac.",
            "Write the quadratic as a product of two linear factors and set each factor equal to zero.",
            "Example: 2x² − 5x + 3 = 0 ⇒ 2x² − 2x − 3x + 3 = 0 ⇒ (2x − 3)(x − 1) = 0 ⇒ x = 3/2 or x = 1.",
            "Never divide both sides by x (or by a factor containing x): you lose a root. For x² = 3x, write x(x − 3) = 0, so x = 0 or 3."
          ]
        },
        {
          heading: "Quadratic formula",
          points: [
            "The roots of ax² + bx + c = 0 are **x = [−b ± √(b² − 4ac)] / 2a**, provided b² − 4ac ≥ 0.",
            "This is often called Sridharacharya's formula, after the Indian mathematician who gave it.",
            "Write the equation in standard form first and note a, b, c with their signs before substituting."
          ]
        },
        {
          heading: "Nature of roots",
          points: [
            "**Discriminant D = b² − 4ac.**",
            "**D > 0**: two distinct real roots. **D = 0**: two equal real roots, each −b/2a. **D < 0**: no real roots.",
            "For equal roots, set D = 0 and solve for the unknown constant.",
            "Example: kx(x − 2) + 6 = 0 is kx² − 2kx + 6 = 0; D = 4k² − 24k = 0 gives k = 0 or 6, and k ≠ 0, so k = 6."
          ]
        },
        {
          heading: "Word problems",
          points: [
            "Form the equation from the situation, solve it, and **reject roots that don't make sense** (negative lengths, ages, speeds or counts).",
            "Example: product of two consecutive positive integers is 306: x(x + 1) = 306 ⇒ x² + x − 306 = 0 ⇒ (x + 18)(x − 17) = 0 ⇒ x = 17. The integers are 17 and 18.",
            "Speed–time problems: time = distance ÷ speed. Form the equation from the difference in times."
          ]
        }
      ],
      formulas: [
        "Standard form: ax² + bx + c = 0, a ≠ 0",
        "Quadratic formula: x = [−b ± √(b² − 4ac)] / 2a",
        "Discriminant: D = b² − 4ac",
        "D > 0: two distinct real roots;  D = 0: two equal real roots (each −b/2a);  D < 0: no real roots",
        "Sum of roots = −b/a;  product of roots = c/a"
      ],
      terms: [
        { term: "Quadratic equation", meaning: "An equation of the form ax² + bx + c = 0 with a ≠ 0." },
        { term: "Root", meaning: "A value of x that satisfies the equation; a quadratic equation has at most two roots." },
        { term: "Discriminant", meaning: "D = b² − 4ac. Its sign tells whether the roots are real and distinct, real and equal, or not real." },
        { term: "Equal roots", meaning: "The case D = 0, when both roots are the same, x = −b/2a." },
        { term: "Splitting the middle term", meaning: "Writing bx as px + qx where p + q = b and pq = ac, so the quadratic can be factorised by grouping." }
      ],
      examples: [
        {
          q: "Solve 2x² − 7x + 3 = 0 using the quadratic formula.",
          steps: [
            "a = 2, b = −7, c = 3.",
            "D = b² − 4ac = 49 − 24 = 25, so √D = 5.",
            "x = [−(−7) ± 5] / (2 × 2) = (7 ± 5)/4.",
            "x = 12/4 = 3 or x = 2/4 = 1/2."
          ],
          answer: "x = 3 or x = 1/2"
        },
        {
          q: "A train travels 360 km at a uniform speed. If the speed had been 5 km/h more, it would have taken 1 hour less for the same journey. Find the speed of the train.",
          steps: [
            "Let the speed be x km/h. Time taken = 360/x hours; at the higher speed, 360/(x + 5) hours.",
            "360/x − 360/(x + 5) = 1",
            "360(x + 5) − 360x = x(x + 5) ⇒ 1800 = x² + 5x ⇒ x² + 5x − 1800 = 0.",
            "(x + 45)(x − 40) = 0, so x = 40 or x = −45.",
            "Speed cannot be negative, so x = 40."
          ],
          answer: "Speed of the train = 40 km/h"
        }
      ],
      qa: [
        { q: "Find the nature of the roots of 2x² − 6x + 3 = 0.", a: "D = (−6)² − 4(2)(3) = 36 − 24 = 12 > 0, so the equation has **two distinct real roots**." },
        { q: "Find k so that kx(x − 2) + 6 = 0 has two equal roots.", a: "kx² − 2kx + 6 = 0. For equal roots D = 0: 4k² − 24k = 0 ⇒ 4k(k − 6) = 0 ⇒ k = 0 or 6. k = 0 makes it non-quadratic, so **k = 6**." },
        { q: "Is it possible to design a rectangular park of perimeter 80 m and area 400 m²? If so, find its length and breadth.", a: "Length + breadth = 40. If length = x, x(40 − x) = 400 ⇒ x² − 40x + 400 = 0 ⇒ (x − 20)² = 0 ⇒ x = 20. **Yes**: length = breadth = **20 m** (a square park)." }
      ],
      quiz: [
        {
          q: "Which of the following is a quadratic equation?",
          options: ["x(x + 1) + 8 = (x + 2)(x − 2)", "x² + 3x = x² − 5", "(x − 2)² + 1 = 2x − 3", "x(2x + 3) = 2x² + 7"],
          answer: 2,
          explain: "(x − 2)² + 1 = 2x − 3 simplifies to **x² − 6x + 8 = 0**. In the others the x² terms cancel, leaving linear equations."
        },
        {
          q: "The roots of 3x² − 2x + 1/3 = 0 are:",
          options: ["real and distinct", "real and equal", "not real", "both zero"],
          answer: 1,
          explain: "D = (−2)² − 4(3)(1/3) = 4 − 4 = 0, so the roots are **real and equal** (each 1/3)."
        },
        {
          q: "The product of two consecutive positive integers is 306. The smaller integer is:",
          options: ["18", "16", "153", "17"],
          answer: 3,
          explain: "x(x + 1) = 306 ⇒ x² + x − 306 = 0 ⇒ (x + 18)(x − 17) = 0 ⇒ x = **17** (17 × 18 = 306)."
        },
        {
          q: "For what positive value of k does x² + kx + 9 = 0 have equal roots?",
          options: ["6", "3", "9", "36"],
          answer: 0,
          explain: "D = k² − 4 × 1 × 9 = 0 ⇒ k² = 36 ⇒ k = ±6. The positive value is **6**."
        },
        {
          q: "If x = 2 is a root of 2x² + kx − 6 = 0, then k is:",
          options: ["1", "−7", "−1", "7"],
          answer: 2,
          explain: "2(4) + 2k − 6 = 0 ⇒ 2 + 2k = 0 ⇒ **k = −1**."
        },
        {
          q: "The equation x² + 4 = 0 has:",
          options: ["two equal real roots", "no real roots", "two distinct real roots", "exactly one real root"],
          answer: 1,
          explain: "D = 0² − 4(1)(4) = −16 < 0, so there are **no real roots** (x² cannot be −4)."
        }
      ]
    },

    // ───────────────────────────── 5. Arithmetic Progressions ─────────────────────────────
    {
      id: "arithmetic-progressions",
      title: "Arithmetic Progressions",
      section: "Algebra",
      summary: "Lists of numbers with a constant common difference: finding the nth term and the sum of the first n terms, and applying them to real-life problems.",
      notes: [
        {
          heading: "What is an AP?",
          points: [
            "An **arithmetic progression (AP)** is a list of numbers in which each term after the first is obtained by adding a fixed number d, the **common difference**, to the previous term.",
            "General form: a, a + d, a + 2d, a + 3d, … ; d can be positive, negative or zero.",
            "To test for an AP, check that (2nd − 1st) = (3rd − 2nd) = (4th − 3rd) = … for all pairs, not just one.",
            "Examples: 1, 4, 7, 10 (d = 3); 10, 6, 2, −2 (d = −4); 3, 3, 3 (d = 0). The list 1, 4, 9, 16 is not an AP.",
            "A **finite AP** has a last term; an **infinite AP** goes on forever."
          ]
        },
        {
          heading: "nth term",
          points: [
            "**aₙ = a + (n − 1)d**, where a is the first term and d the common difference.",
            "The nth term from the end of an AP with last term l is **l − (n − 1)d**.",
            "To check whether a number is a term of an AP, solve aₙ = that number: n must be a **positive integer**.",
            "Three numbers in AP can be taken as a − d, a, a + d (their sum is 3a).",
            "a, b, c are in AP if and only if **2b = a + c**."
          ]
        },
        {
          heading: "Sum of first n terms",
          points: [
            "**Sₙ = n/2 [2a + (n − 1)d]**, or **Sₙ = n/2 (a + l)** when the last term l is known.",
            "Sum of the first n natural numbers: 1 + 2 + … + n = n(n + 1)/2. Gauss found 1 + 2 + … + 100 = 5050 by pairing terms to get 50 pairs of 101.",
            "The nth term from the sums: **aₙ = Sₙ − Sₙ₋₁**.",
            "When solving Sₙ = a given value, n must be a positive integer; reject negative or fractional values."
          ]
        },
        {
          heading: "Common mistakes",
          points: [
            "Using n instead of (n − 1) in aₙ = a + (n − 1)d.",
            "Getting the sign of d wrong in a decreasing AP: in 20, 17, 14, …, d = −3.",
            "Sometimes both roots for n are valid: for 24, 21, 18, …, S₄ = S₁₃ = 78, because the 5th to 13th terms add up to 0.",
            "Counting terms: the number of terms from a to l is (l − a)/d + 1, not (l − a)/d."
          ]
        }
      ],
      formulas: [
        "Common difference: d = a₂ − a₁ = a₃ − a₂ = …",
        "nth term: aₙ = a + (n − 1)d",
        "nth term from the end: l − (n − 1)d",
        "Sum: Sₙ = n/2 [2a + (n − 1)d] = n/2 (a + l)",
        "aₙ = Sₙ − Sₙ₋₁",
        "a, b, c in AP ⇔ 2b = a + c",
        "1 + 2 + 3 + … + n = n(n + 1)/2"
      ],
      terms: [
        { term: "Arithmetic progression", meaning: "A list of numbers where each term is obtained by adding a fixed number to the previous term." },
        { term: "Common difference", meaning: "The fixed number d added to each term to get the next; d = any term − the previous term." },
        { term: "nth term (general term)", meaning: "aₙ = a + (n − 1)d, the formula giving any term of the AP." },
        { term: "Finite AP", meaning: "An AP with a last term, e.g. the heights of the steps of a staircase." },
        { term: "Arithmetic mean", meaning: "If a, b, c are in AP, b = (a + c)/2 is the arithmetic mean of a and c." }
      ],
      examples: [
        {
          q: "Which term of the AP 3, 8, 13, 18, … is 78?",
          steps: [
            "a = 3, d = 8 − 3 = 5.",
            "aₙ = a + (n − 1)d ⇒ 78 = 3 + (n − 1)5.",
            "(n − 1)5 = 75 ⇒ n − 1 = 15 ⇒ n = 16."
          ],
          answer: "78 is the 16th term."
        },
        {
          q: "How many terms of the AP 9, 17, 25, … must be taken to give a sum of 636?",
          steps: [
            "a = 9, d = 8. Sₙ = n/2 [2(9) + (n − 1)8] = n/2 (8n + 10) = n(4n + 5).",
            "n(4n + 5) = 636 ⇒ 4n² + 5n − 636 = 0.",
            "D = 5² + 4 × 4 × 636 = 25 + 10176 = 10201 = 101².",
            "n = (−5 ± 101)/8 ⇒ n = 96/8 = 12 or n = −106/8 (rejected, not a natural number).",
            "Check: S₁₂ = 6 × (18 + 88) = 6 × 106 = 636. ✓"
          ],
          answer: "12 terms"
        }
      ],
      qa: [
        { q: "Find the 31st term of an AP whose 11th term is 38 and 16th term is 73.", a: "a + 10d = 38 and a + 15d = 73. Subtracting: 5d = 35, so d = 7 and a = 38 − 70 = −32. a₃₁ = −32 + 30 × 7 = **178**." },
        { q: "How many three-digit numbers are divisible by 7?", a: "They form the AP 105, 112, …, 994 with d = 7. n = (994 − 105)/7 + 1 = 889/7 + 1 = 127 + 1 = **128**." },
        { q: "Find the sum of the first 40 positive integers divisible by 6.", a: "6, 12, …, 240 with n = 40. S₄₀ = 40/2 × (6 + 240) = 20 × 246 = **4920**." }
      ],
      quiz: [
        {
          q: "The common difference of the AP 3/2, 1/2, −1/2, −3/2, … is:",
          options: ["1", "1/2", "−1/2", "−1"],
          answer: 3,
          explain: "d = 1/2 − 3/2 = **−1**. The terms are decreasing, so d is negative."
        },
        {
          q: "The 10th term of the AP 2, 7, 12, … is:",
          options: ["52", "47", "50", "45"],
          answer: 1,
          explain: "a₁₀ = 2 + (10 − 1) × 5 = 2 + 45 = **47**. Using 10 × 5 instead of 9 × 5 gives 52."
        },
        {
          q: "The sum of the first 100 natural numbers is:",
          options: ["5000", "10100", "5050", "4950"],
          answer: 2,
          explain: "n(n + 1)/2 = 100 × 101/2 = **5050**."
        },
        {
          q: "If k + 2, 4k − 6 and 3k − 2 are three consecutive terms of an AP, then k is:",
          options: ["3", "2", "4", "−3"],
          answer: 0,
          explain: "2(4k − 6) = (k + 2) + (3k − 2) ⇒ 8k − 12 = 4k ⇒ **k = 3**. The terms are 5, 6, 7."
        },
        {
          q: "The number of terms in the AP 7, 13, 19, …, 205 is:",
          options: ["33", "35", "32", "34"],
          answer: 3,
          explain: "205 = 7 + (n − 1)6 ⇒ n − 1 = 33 ⇒ n = **34**. Forgetting the +1 gives 33."
        },
        {
          q: "The sum of the first n terms of an AP is Sₙ = 3n² + 2n. Its common difference is:",
          options: ["3", "6", "5", "11"],
          answer: 1,
          explain: "a₁ = S₁ = 5, S₂ = 16, so a₂ = 16 − 5 = 11. d = 11 − 5 = **6**."
        }
      ]
    },

    // ───────────────────────────── 6. Triangles ─────────────────────────────
    {
      id: "triangles",
      title: "Triangles",
      section: "Geometry",
      summary: "Similar figures and similar triangles: the Basic Proportionality Theorem and its converse, and the AAA, SSS and SAS similarity criteria.",
      notes: [
        {
          heading: "Similar figures",
          points: [
            "Figures with the **same shape** but not necessarily the same size are **similar**. All circles, all squares and all equilateral triangles are similar.",
            "Two polygons with the same number of sides are similar if (i) their corresponding angles are equal **and** (ii) their corresponding sides are in the same ratio.",
            "Both conditions are needed: a square and a rectangle have equal angles but sides not in proportion; a square and a rhombus have proportional sides but unequal angles.",
            "All congruent figures are similar, but similar figures need not be congruent."
          ]
        },
        {
          heading: "Basic Proportionality Theorem (BPT)",
          points: [
            "**If a line is drawn parallel to one side of a triangle to intersect the other two sides in distinct points, the other two sides are divided in the same ratio.** (Also called Thales' theorem.)",
            "In △ABC, if DE ∥ BC with D on AB and E on AC, then **AD/DB = AE/EC**.",
            "It follows that AD/AB = AE/AC and DB/AB = EC/AC.",
            "**Converse**: if a line divides two sides of a triangle in the same ratio, it is parallel to the third side.",
            "The proof compares areas: ar(ADE)/ar(BDE) = AD/DB and ar(ADE)/ar(DEC) = AE/EC, and ar(BDE) = ar(DEC) as they lie on the same base DE between the same parallels."
          ]
        },
        {
          heading: "Criteria for similarity of triangles",
          points: [
            "**AAA**: if corresponding angles are equal, the triangles are similar. **AA** is enough, since the third angles are then also equal.",
            "**SSS**: if corresponding sides are in the same ratio, the triangles are similar.",
            "**SAS**: if one angle is equal and the sides including it are in the same ratio, the triangles are similar.",
            "△ABC ∼ △PQR means ∠A = ∠P, ∠B = ∠Q, ∠C = ∠R and AB/PQ = BC/QR = CA/RP. Keep the vertex order correct."
          ]
        },
        {
          heading: "Problem-solving tips",
          points: [
            "Look for parallel lines (alternate or corresponding angles) and vertically opposite angles to prove AA similarity.",
            "Shadow problems: at the same time of day the Sun's rays make the same angle, so height/shadow is the same for all objects.",
            "If DE ∥ BC in △ABC, then △ADE ∼ △ABC, so **DE/BC = AD/AB**, not AD/DB.",
            "Common mistake: matching the wrong sides. Match sides that are opposite equal angles."
          ]
        }
      ],
      formulas: [
        "BPT: DE ∥ BC ⇒ AD/DB = AE/EC",
        "Converse of BPT: AD/DB = AE/EC ⇒ DE ∥ BC",
        "DE ∥ BC ⇒ △ADE ∼ △ABC ⇒ AD/AB = AE/AC = DE/BC",
        "△ABC ∼ △PQR ⇒ ∠A = ∠P, ∠B = ∠Q, ∠C = ∠R and AB/PQ = BC/QR = CA/RP",
        "Similarity criteria: AAA (or AA), SSS, SAS"
      ],
      terms: [
        { term: "Similar figures", meaning: "Figures with the same shape but not necessarily the same size: equal angles and proportional sides." },
        { term: "Basic Proportionality Theorem", meaning: "A line parallel to one side of a triangle divides the other two sides in the same ratio." },
        { term: "Converse of BPT", meaning: "A line dividing two sides of a triangle in the same ratio is parallel to the third side." },
        { term: "AA similarity", meaning: "If two angles of one triangle equal two angles of another, the triangles are similar." },
        { term: "Congruent figures", meaning: "Figures with the same shape and the same size; a special case of similar figures (ratio 1)." }
      ],
      examples: [
        {
          q: "In △ABC, DE ∥ BC with D on AB and E on AC. If AD = x, DB = x − 2, AE = x + 2 and EC = x − 1, find x.",
          steps: [
            "By BPT, AD/DB = AE/EC.",
            "x/(x − 2) = (x + 2)/(x − 1)",
            "x(x − 1) = (x + 2)(x − 2) ⇒ x² − x = x² − 4",
            "−x = −4 ⇒ x = 4."
          ],
          answer: "x = 4"
        },
        {
          q: "A vertical pole 6 m long casts a shadow 4 m long on the ground. At the same time a tower casts a shadow 28 m long. Find the height of the tower.",
          steps: [
            "The Sun's rays make the same angle with the ground at the same time, and both the pole and the tower are vertical.",
            "So the two right triangles (object, shadow, ray) are similar by AA.",
            "Height of tower/28 = 6/4.",
            "Height of tower = (6 × 28)/4 = 42 m."
          ],
          answer: "Height of the tower = 42 m"
        }
      ],
      qa: [
        { q: "State the Basic Proportionality Theorem and its converse.", a: "**BPT**: if a line is drawn parallel to one side of a triangle to intersect the other two sides in distinct points, the other two sides are divided in the same ratio. **Converse**: if a line divides any two sides of a triangle in the same ratio, it is parallel to the third side." },
        { q: "ABCD is a trapezium with AB ∥ DC, and its diagonals meet at O. Show that AO/BO = CO/DO.", a: "In △AOB and △COD: ∠OAB = ∠OCD and ∠OBA = ∠ODC (alternate angles, AB ∥ DC). So △AOB ∼ △COD (**AA**). Hence AO/CO = BO/DO, which rearranges to **AO/BO = CO/DO**." },
        { q: "Are all isosceles triangles similar? Justify.", a: "**No.** An isosceles triangle with angles 40°, 70°, 70° and one with angles 100°, 40°, 40° do not have equal corresponding angles, so they are not similar." }
      ],
      quiz: [
        {
          q: "In △ABC, DE ∥ BC with D on AB and E on AC. If AD = 2 cm, DB = 3 cm and AE = 4 cm, then EC is:",
          options: ["8/3 cm", "6 cm", "5 cm", "1.5 cm"],
          answer: 1,
          explain: "AD/DB = AE/EC ⇒ 2/3 = 4/EC ⇒ EC = **6 cm**."
        },
        {
          q: "Which of the following pairs of figures is always similar?",
          options: ["Two rectangles", "Two isosceles triangles", "Two rhombuses", "Two squares"],
          answer: 3,
          explain: "**Two squares** always have equal angles (90°) and proportional sides. Rectangles and rhombuses can fail one of the two conditions."
        },
        {
          q: "△ABC ∼ △DEF with AB = 4 cm, DE = 6 cm and BC = 5 cm. Then EF is:",
          options: ["7.5 cm", "3.33 cm", "7 cm", "4.8 cm"],
          answer: 0,
          explain: "AB/DE = BC/EF ⇒ 4/6 = 5/EF ⇒ EF = 30/4 = **7.5 cm**."
        },
        {
          q: "In △ABC, DE ∥ BC with D on AB and E on AC, and AD/DB = 2/3. Then DE/BC is:",
          options: ["2/3", "3/5", "2/5", "4/9"],
          answer: 2,
          explain: "AD/AB = 2/(2 + 3) = 2/5, and △ADE ∼ △ABC, so DE/BC = **2/5**. Using AD/DB = 2/3 is the common mistake."
        },
        {
          q: "Two triangles are similar if:",
          options: ["one pair of sides is equal", "they have equal areas", "they have equal perimeters", "their corresponding angles are equal"],
          answer: 3,
          explain: "By the AAA criterion, **equal corresponding angles** make triangles similar. Equal area or perimeter says nothing about shape."
        },
        {
          q: "A girl 1.5 m tall casts a shadow 2 m long. At the same time a tree casts a shadow 12 m long. The height of the tree is:",
          options: ["16 m", "9 m", "8 m", "10.5 m"],
          answer: 1,
          explain: "h/12 = 1.5/2 ⇒ h = 12 × 0.75 = **9 m**. Inverting the ratio gives 16 m."
        }
      ]
    },

    // ───────────────────────────── 7. Coordinate Geometry ─────────────────────────────
    {
      id: "coordinate-geometry",
      title: "Coordinate Geometry",
      section: "Coordinate Geometry",
      summary: "Finding the distance between two points and the coordinates of the point dividing a segment in a given ratio, using the distance and section formulae.",
      notes: [
        {
          heading: "Distance formula",
          points: [
            "Distance between P(x₁, y₁) and Q(x₂, y₂): **PQ = √[(x₂ − x₁)² + (y₂ − y₁)²]**.",
            "Distance of P(x, y) from the origin = **√(x² + y²)**.",
            "The order of points does not matter, because (x₁ − x₂)² = (x₂ − x₁)².",
            "On a horizontal line the distance is |x₂ − x₁|; on a vertical line it is |y₂ − y₁|."
          ]
        },
        {
          heading: "Using the distance formula",
          points: [
            "**Collinearity**: A, B, C are collinear if the sum of two of the distances equals the third (e.g. AB + BC = AC).",
            "**Type of triangle**: all sides equal ⇒ equilateral; two equal ⇒ isosceles; AB² + BC² = AC² ⇒ right-angled at B.",
            "**Type of quadrilateral**: all sides equal and diagonals equal ⇒ square; all sides equal only ⇒ rhombus; opposite sides equal and diagonals equal ⇒ rectangle.",
            "For a point P equidistant from A and B, write PA² = PB² (squaring removes the square roots)."
          ]
        },
        {
          heading: "Section formula",
          points: [
            "The point P dividing the join of A(x₁, y₁) and B(x₂, y₂) internally in the ratio m₁ : m₂ is **P((m₁x₂ + m₂x₁)/(m₁ + m₂), (m₁y₂ + m₂y₁)/(m₁ + m₂))**.",
            "**Mid-point** (ratio 1 : 1): ((x₁ + x₂)/2, (y₁ + y₂)/2).",
            "To find an unknown ratio, take it as k : 1, apply the formula, and solve for k using the coordinate you know.",
            "A point on the x-axis has y = 0; a point on the y-axis has x = 0. Use this to find where an axis divides a segment.",
            "The points of trisection of AB divide it in the ratios 1 : 2 and 2 : 1."
          ]
        },
        {
          heading: "Common mistakes",
          points: [
            "In the section formula, m₁ multiplies the coordinates of the **far** endpoint B, not A.",
            "Forgetting to take the square root at the end of the distance formula.",
            "Sign errors with negative coordinates: 3 − (−2) = 5, and (−5)² = 25."
          ]
        }
      ],
      formulas: [
        "Distance: PQ = √[(x₂ − x₁)² + (y₂ − y₁)²]",
        "Distance from the origin: √(x² + y²)",
        "Section formula (ratio m₁ : m₂): ((m₁x₂ + m₂x₁)/(m₁ + m₂), (m₁y₂ + m₂y₁)/(m₁ + m₂))",
        "Ratio k : 1: ((kx₂ + x₁)/(k + 1), (ky₂ + y₁)/(k + 1))",
        "Mid-point: ((x₁ + x₂)/2, (y₁ + y₂)/2)"
      ],
      terms: [
        { term: "Distance formula", meaning: "The length of the segment joining (x₁, y₁) and (x₂, y₂): √[(x₂ − x₁)² + (y₂ − y₁)²]." },
        { term: "Section formula", meaning: "Gives the coordinates of the point dividing a segment in the ratio m₁ : m₂." },
        { term: "Mid-point", meaning: "The point dividing a segment in the ratio 1 : 1: ((x₁ + x₂)/2, (y₁ + y₂)/2)." },
        { term: "Collinear points", meaning: "Points that lie on one straight line." },
        { term: "Points of trisection", meaning: "The two points that divide a segment into three equal parts." }
      ],
      examples: [
        {
          q: "Find the coordinates of the point which divides the join of A(−1, 7) and B(4, −3) in the ratio 2 : 3.",
          steps: [
            "m₁ = 2, m₂ = 3; (x₁, y₁) = (−1, 7), (x₂, y₂) = (4, −3).",
            "x = (2 × 4 + 3 × (−1))/(2 + 3) = (8 − 3)/5 = 1.",
            "y = (2 × (−3) + 3 × 7)/(2 + 3) = (−6 + 21)/5 = 3."
          ],
          answer: "The point is (1, 3)."
        },
        {
          q: "Find the ratio in which the y-axis divides the segment joining A(5, −6) and B(−1, −4). Also find the point of intersection.",
          steps: [
            "Let the ratio be k : 1. The x-coordinate of the dividing point is (k × (−1) + 1 × 5)/(k + 1) = (5 − k)/(k + 1).",
            "On the y-axis x = 0, so 5 − k = 0 ⇒ k = 5. The ratio is 5 : 1.",
            "y = (5 × (−4) + 1 × (−6))/(5 + 1) = (−20 − 6)/6 = −26/6 = −13/3."
          ],
          answer: "Ratio 5 : 1; point of intersection (0, −13/3)"
        }
      ],
      qa: [
        { q: "Show that A(1, 7), B(4, 2), C(−1, −1) and D(−4, 4) are the vertices of a square.", a: "AB = √(9 + 25) = √34, BC = √(25 + 9) = √34, CD = √(9 + 25) = √34, DA = √(25 + 9) = √34. Diagonals AC = √(4 + 64) = √68 and BD = √(64 + 4) = √68. **All sides equal and diagonals equal**, so ABCD is a square." },
        { q: "Find a relation between x and y such that the point (x, y) is equidistant from (3, 6) and (−3, 4).", a: "(x − 3)² + (y − 6)² = (x + 3)² + (y − 4)². Expanding: −6x + 9 − 12y + 36 = 6x + 9 − 8y + 16 ⇒ −12x − 4y + 20 = 0 ⇒ **3x + y − 5 = 0**." },
        { q: "Find y if the distance between P(2, −3) and Q(10, y) is 10 units.", a: "(10 − 2)² + (y + 3)² = 100 ⇒ 64 + (y + 3)² = 100 ⇒ (y + 3)² = 36 ⇒ y + 3 = ±6 ⇒ **y = 3 or y = −9**." }
      ],
      quiz: [
        {
          q: "The distance between the points (2, 3) and (4, 1) is:",
          options: ["4", "2√2", "√2", "8"],
          answer: 1,
          explain: "√[(4 − 2)² + (1 − 3)²] = √(4 + 4) = √8 = **2√2**. 8 forgets the square root."
        },
        {
          q: "The distance of the point (−6, 8) from the origin is:",
          options: ["14", "2", "10", "100"],
          answer: 2,
          explain: "√((−6)² + 8²) = √(36 + 64) = √100 = **10**."
        },
        {
          q: "The mid-point of the segment joining (2, −4) and (−6, 10) is:",
          options: ["(−2, 3)", "(4, −7)", "(−4, 6)", "(2, −3)"],
          answer: 0,
          explain: "((2 − 6)/2, (−4 + 10)/2) = **(−2, 3)**. (−4, 6) forgets to divide by 2."
        },
        {
          q: "P divides the join of A(1, 2) and B(6, 7) in the ratio 2 : 3. The coordinates of P are:",
          options: ["(4, 5)", "(3.5, 4.5)", "(2, 3)", "(3, 4)"],
          answer: 3,
          explain: "x = (2 × 6 + 3 × 1)/5 = 3, y = (2 × 7 + 3 × 2)/5 = 4: **(3, 4)**. Swapping m₁ and m₂ gives (4, 5)."
        },
        {
          q: "If the distance between A(1, 2) and B(4, y) is 5 units, one possible value of y is:",
          options: ["7", "6", "3", "−6"],
          answer: 1,
          explain: "3² + (y − 2)² = 25 ⇒ (y − 2)² = 16 ⇒ y = 6 or −2. Of the options, only **6** works."
        },
        {
          q: "The x-axis divides the segment joining (2, −3) and (5, 6) in the ratio:",
          options: ["2 : 1", "2 : 5", "1 : 2", "3 : 5"],
          answer: 2,
          explain: "Take k : 1. y = (6k − 3)/(k + 1) = 0 ⇒ k = 1/2, so the ratio is **1 : 2** (the point is (3, 0))."
        }
      ]
    },

    // ───────────────────────────── 8. Introduction to Trigonometry ─────────────────────────────
    {
      id: "introduction-to-trigonometry",
      title: "Introduction to Trigonometry",
      section: "Trigonometry",
      summary: "Trigonometric ratios of an acute angle in a right triangle, their values for 0°, 30°, 45°, 60° and 90°, and the three fundamental identities.",
      notes: [
        {
          heading: "Trigonometric ratios",
          points: [
            "In right △ABC with ∠B = 90°, for the acute angle A: **sin A = BC/AC** (opposite/hypotenuse), **cos A = AB/AC** (adjacent/hypotenuse), **tan A = BC/AB** (opposite/adjacent).",
            "Reciprocals: **cosec A = 1/sin A**, **sec A = 1/cos A**, **cot A = 1/tan A**.",
            "**tan A = sin A/cos A** and **cot A = cos A/sin A**.",
            "The ratios depend only on the angle, not on the size of the triangle (similar triangles give the same ratios).",
            "'Opposite' and 'adjacent' depend on which angle you use; the hypotenuse is always the side opposite the right angle."
          ]
        },
        {
          heading: "Finding all ratios from one",
          points: [
            "If sin A = 3/5, take opposite = 3k and hypotenuse = 5k. By Pythagoras, adjacent = 4k, so cos A = 4/5 and tan A = 3/4.",
            "The hypotenuse is the longest side, so for an acute angle A, sin A and cos A are less than 1 (sin A = 4/3 is impossible), while tan A can be any positive value.",
            "sin A is a single symbol meaning 'sine of angle A'; it is not sin × A."
          ]
        },
        {
          heading: "Ratios of specific angles",
          points: [
            "sin 0°, 30°, 45°, 60°, 90° = 0, 1/2, 1/√2, √3/2, 1. cos takes the same values in reverse order.",
            "tan 0°, 30°, 45°, 60° = 0, 1/√3, 1, √3; tan 90° is not defined.",
            "Memory trick: sin 0°, 30°, 45°, 60°, 90° = √(0/4), √(1/4), √(2/4), √(3/4), √(4/4).",
            "As A increases from 0° to 90°, sin A increases from 0 to 1 and cos A decreases from 1 to 0.",
            "tan 90°, sec 90°, cot 0° and cosec 0° are **not defined** (division by zero)."
          ]
        },
        {
          heading: "Trigonometric identities",
          points: [
            "**sin²A + cos²A = 1** (0° ≤ A ≤ 90°).",
            "**sec²A − tan²A = 1**, i.e. 1 + tan²A = sec²A (0° ≤ A < 90°).",
            "**cosec²A − cot²A = 1**, i.e. 1 + cot²A = cosec²A (0° < A ≤ 90°).",
            "To prove an identity, simplify one side (usually the more complicated one) until it equals the other; converting everything to sin and cos often helps.",
            "Common mistakes: sin²A means (sin A)², not sin(A²); and sin(A + B) ≠ sin A + sin B, e.g. sin(30° + 60°) = 1 but sin 30° + sin 60° = (1 + √3)/2."
          ]
        }
      ],
      formulas: [
        "sin A = opposite/hypotenuse;  cos A = adjacent/hypotenuse;  tan A = opposite/adjacent",
        "cosec A = 1/sin A;  sec A = 1/cos A;  cot A = 1/tan A",
        "tan A = sin A/cos A;  cot A = cos A/sin A",
        "sin 0° = 0, sin 30° = 1/2, sin 45° = 1/√2, sin 60° = √3/2, sin 90° = 1",
        "cos 0° = 1, cos 30° = √3/2, cos 45° = 1/√2, cos 60° = 1/2, cos 90° = 0",
        "tan 0° = 0, tan 30° = 1/√3, tan 45° = 1, tan 60° = √3, tan 90° not defined",
        "sin²A + cos²A = 1",
        "1 + tan²A = sec²A",
        "1 + cot²A = cosec²A"
      ],
      terms: [
        { term: "Sine (sin A)", meaning: "In a right triangle, the ratio of the side opposite angle A to the hypotenuse." },
        { term: "Cosine (cos A)", meaning: "In a right triangle, the ratio of the side adjacent to angle A to the hypotenuse." },
        { term: "Tangent (tan A)", meaning: "In a right triangle, the ratio of the side opposite angle A to the side adjacent to it; tan A = sin A/cos A." },
        { term: "Reciprocal ratios", meaning: "cosec A, sec A and cot A, the reciprocals of sin A, cos A and tan A." },
        { term: "Trigonometric identity", meaning: "An equation involving trigonometric ratios that is true for all angles for which it is defined, e.g. sin²A + cos²A = 1." }
      ],
      examples: [
        {
          q: "If tan A = 4/3, find the other trigonometric ratios of angle A.",
          steps: [
            "tan A = opposite/adjacent = 4/3, so take opposite = 4k and adjacent = 3k.",
            "Hypotenuse = √((4k)² + (3k)²) = √(25k²) = 5k.",
            "sin A = 4/5, cos A = 3/5.",
            "cosec A = 5/4, sec A = 5/3, cot A = 3/4."
          ],
          answer: "sin A = 4/5, cos A = 3/5, cot A = 3/4, sec A = 5/3, cosec A = 5/4"
        },
        {
          q: "Evaluate (5cos²60° + 4sec²30° − tan²45°)/(sin²30° + cos²30°).",
          steps: [
            "cos²60° = (1/2)² = 1/4, so 5cos²60° = 5/4.",
            "sec 30° = 2/√3, so sec²30° = 4/3 and 4sec²30° = 16/3.",
            "tan²45° = 1.",
            "Numerator = 5/4 + 16/3 − 1 = 15/12 + 64/12 − 12/12 = 67/12.",
            "Denominator = sin²30° + cos²30° = 1/4 + 3/4 = 1."
          ],
          answer: "67/12"
        }
      ],
      qa: [
        { q: "Prove that (1 + tan²A)/(1 + cot²A) = tan²A.", a: "LHS = sec²A/cosec²A = (1/cos²A) ÷ (1/sin²A) = sin²A/cos²A = **tan²A** = RHS." },
        { q: "If sin(A − B) = 1/2 and cos(A + B) = 1/2, where 0° < A + B ≤ 90° and A > B, find A and B.", a: "sin(A − B) = 1/2 ⇒ A − B = 30°. cos(A + B) = 1/2 ⇒ A + B = 60°. Adding: 2A = 90°, so **A = 45°** and **B = 15°**." },
        { q: "Why is tan 90° not defined?", a: "tan 90° = sin 90°/cos 90° = 1/0. **Division by zero is not defined**, so tan 90° is not defined." }
      ],
      quiz: [
        {
          q: "If sin A = 3/5 (A acute), then cos A is:",
          options: ["5/3", "3/4", "4/5", "5/4"],
          answer: 2,
          explain: "Opposite = 3, hypotenuse = 5, so adjacent = 4 and cos A = **4/5**. (3/4 is tan A.)"
        },
        {
          q: "The value of sin 60° cos 30° + sin 30° cos 60° is:",
          options: ["1", "√3/2", "1/2", "0"],
          answer: 0,
          explain: "(√3/2)(√3/2) + (1/2)(1/2) = 3/4 + 1/4 = **1**."
        },
        {
          q: "2tan 30°/(1 + tan²30°) equals:",
          options: ["cos 60°", "sin 60°", "tan 60°", "sin 30°"],
          answer: 1,
          explain: "(2/√3)/(1 + 1/3) = (2/√3) × (3/4) = √3/2 = **sin 60°**."
        },
        {
          q: "9sec²A − 9tan²A equals:",
          options: ["1", "8", "0", "9"],
          answer: 3,
          explain: "9(sec²A − tan²A) = 9 × 1 = **9**."
        },
        {
          q: "(1 + tan θ + sec θ)(1 + cot θ − cosec θ) equals:",
          options: ["0", "1", "2", "−1"],
          answer: 2,
          explain: "In terms of sin and cos: [(cos θ + sin θ + 1)/cos θ] × [(sin θ + cos θ − 1)/sin θ] = [(sin θ + cos θ)² − 1]/(sin θ cos θ) = 2sin θ cos θ/(sin θ cos θ) = **2**."
        },
        {
          q: "Which of the following is NOT defined?",
          options: ["sin 90°", "tan 90°", "cos 90°", "cot 90°"],
          answer: 1,
          explain: "**tan 90°** = 1/0 is not defined. sin 90° = 1, cos 90° = 0 and cot 90° = 0/1 = 0."
        }
      ]
    },

    // ───────────────────────────── 9. Some Applications of Trigonometry ─────────────────────────────
    {
      id: "some-applications-of-trigonometry",
      title: "Some Applications of Trigonometry",
      section: "Trigonometry",
      summary: "Using trigonometric ratios to find the heights of objects and the distances to them from angles of elevation and depression.",
      notes: [
        {
          heading: "Key terms",
          points: [
            "**Line of sight**: the line drawn from the eye of an observer to the point on the object being viewed.",
            "**Angle of elevation**: the angle between the line of sight and the horizontal when the object is **above** the horizontal level (you raise your head).",
            "**Angle of depression**: the angle between the line of sight and the horizontal when the object is **below** the horizontal level (you lower your head).",
            "The angle of elevation of P from Q equals the angle of depression of Q from P (alternate angles, as the horizontals are parallel)."
          ]
        },
        {
          heading: "Method",
          points: [
            "Draw a neat figure: the ground is horizontal and towers, poles and buildings are vertical, giving right triangles.",
            "Choose the ratio that links the known and unknown sides: **tan** for height and horizontal distance; **sin** or **cos** when a slant length (ladder, string, rope) is involved.",
            "With two angles (e.g. from two points, or to the top and bottom of a flagstaff), write one equation for each right triangle and solve them together.",
            "Use tan 30° = 1/√3, tan 45° = 1, tan 60° = √3, and √3 ≈ 1.732, √2 ≈ 1.414 for decimal answers."
          ]
        },
        {
          heading: "Useful facts and common mistakes",
          points: [
            "If the angle of elevation is 45°, the height equals the horizontal distance.",
            "As you walk towards a tower, the angle of elevation of its top **increases**. As the Sun's elevation decreases, shadows get **longer**.",
            "If the angle is measured from an observer's eye, add the observer's height to the calculated part.",
            "Common mistake: measuring the angle of depression from the vertical instead of the horizontal."
          ]
        }
      ],
      formulas: [
        "tan θ = height / horizontal distance",
        "sin θ = height / slant length;  cos θ = horizontal distance / slant length",
        "Angle of elevation of B from A = angle of depression of A from B",
        "tan 30° = 1/√3;  tan 45° = 1;  tan 60° = √3",
        "sin 30° = cos 60° = 1/2;  sin 60° = cos 30° = √3/2",
        "√3 ≈ 1.732;  √2 ≈ 1.414"
      ],
      terms: [
        { term: "Line of sight", meaning: "The line from the observer's eye to the point on the object being viewed." },
        { term: "Angle of elevation", meaning: "The angle between the horizontal and the line of sight to an object **above** eye level." },
        { term: "Angle of depression", meaning: "The angle between the horizontal and the line of sight to an object **below** eye level." },
        { term: "Horizontal level", meaning: "The horizontal line through the observer's eye, from which both angles are measured." }
      ],
      examples: [
        {
          q: "A tower stands vertically on the ground. From a point on the ground 15 m from the foot of the tower, the angle of elevation of its top is 60°. Find the height of the tower.",
          steps: [
            "Let the height be h. The horizontal distance is 15 m.",
            "tan 60° = h/15.",
            "√3 = h/15 ⇒ h = 15√3.",
            "h = 15 × 1.732 = 25.98 m (approx.)."
          ],
          answer: "Height = 15√3 m ≈ 25.98 m"
        },
        {
          q: "From a point on the ground, the angle of elevation of the top of a tower is 30°. On walking 20 m towards the tower, the angle of elevation becomes 60°. Find the height of the tower.",
          steps: [
            "Let the height be h and the distance from the second point to the foot of the tower be x m.",
            "From the second point: tan 60° = h/x ⇒ h = √3x.",
            "From the first point: tan 30° = h/(x + 20) ⇒ h = (x + 20)/√3.",
            "So √3x = (x + 20)/√3 ⇒ 3x = x + 20 ⇒ x = 10 m.",
            "h = √3 × 10 = 10√3 ≈ 17.32 m."
          ],
          answer: "Height = 10√3 m ≈ 17.32 m"
        }
      ],
      qa: [
        { q: "A kite is flying at a height of 60 m above the ground. Its string, tied to a point on the ground, makes an angle of 60° with the ground. Find the length of the string, assuming no slack.", a: "sin 60° = 60/L ⇒ √3/2 = 60/L ⇒ L = 120/√3 = **40√3 m ≈ 69.28 m**." },
        { q: "From the top of a 7 m high building, the angle of elevation of the top of a cable tower is 60° and the angle of depression of its foot is 45°. Find the height of the tower.", a: "Angle of depression 45° ⇒ horizontal distance = 7 m. Height of tower above the building's top = 7 tan 60° = 7√3 m. Total height = **7 + 7√3 = 7(1 + √3) m ≈ 19.12 m**." }
      ],
      quiz: [
        {
          q: "The angle of elevation of the top of a tower from a point 30 m from its foot is 45°. The height of the tower is:",
          options: ["30√3 m", "30 m", "10√3 m", "15 m"],
          answer: 1,
          explain: "tan 45° = h/30 = 1, so h = **30 m**."
        },
        {
          q: "A ladder 10 m long reaches a window and makes an angle of 60° with the ground. The height of the window above the ground is:",
          options: ["5 m", "10√3 m", "5√3 m", "20/√3 m"],
          answer: 2,
          explain: "The ladder is the hypotenuse: h = 10 sin 60° = 10 × √3/2 = **5√3 m**. Using cos 60° gives 5 m, which is the distance of the foot from the wall."
        },
        {
          q: "From the top of a 75 m high tower, the angle of depression of a car is 30°. The distance of the car from the foot of the tower is:",
          options: ["75√3 m", "25√3 m", "75 m", "150 m"],
          answer: 0,
          explain: "The angle of elevation of the top from the car is also 30°: tan 30° = 75/d ⇒ d = 75√3 m. **75√3 m** (≈ 129.9 m)."
        },
        {
          q: "As an observer walks towards a vertical tower, the angle of elevation of its top:",
          options: ["decreases", "stays the same", "first increases, then decreases", "increases"],
          answer: 3,
          explain: "tan θ = height/distance. As the distance decreases, tan θ increases, so the angle **increases**."
        },
        {
          q: "A tower 6 m high casts a shadow 2√3 m long on the ground. The Sun's angle of elevation is:",
          options: ["30°", "60°", "45°", "90°"],
          answer: 1,
          explain: "tan θ = 6/(2√3) = 3/√3 = √3, so θ = **60°**."
        },
        {
          q: "The angle of elevation of the top of a building from a point P on the ground is equal to:",
          options: ["the angle of depression of P from the top of the building", "90° minus the angle of depression of P from the top", "the angle at the top of the building in the right triangle formed", "twice the angle of depression of P from the top"],
          answer: 0,
          explain: "The horizontal through the top is parallel to the ground, so the two angles are alternate angles and are **equal**."
        }
      ]
    },

    // ───────────────────────────── 10. Circles ─────────────────────────────
    {
      id: "circles",
      title: "Circles",
      section: "Geometry",
      summary: "Tangents to a circle: the tangent is perpendicular to the radius at the point of contact, and the two tangents from an external point are equal in length.",
      notes: [
        {
          heading: "Tangents and secants",
          points: [
            "A **secant** is a line that meets a circle at two points. A **tangent** meets the circle at exactly **one** point, the **point of contact**.",
            "A line and a circle can have 0, 1 or 2 common points: non-intersecting line, tangent, or secant.",
            "There is **one and only one** tangent at any point of a circle.",
            "A tangent is the special case of a secant whose two points of intersection coincide.",
            "A circle can have infinitely many tangents, but at most two of them are parallel to a given line."
          ]
        },
        {
          heading: "Tangent–radius theorem",
          points: [
            "**The tangent at any point of a circle is perpendicular to the radius through the point of contact.**",
            "So if O is the centre, P the point of contact and T any other point on the tangent, ∠OPT = 90°.",
            "The line through the point of contact perpendicular to the tangent passes through the centre.",
            "Use Pythagoras in △OPT: OT² = OP² + PT², i.e. (distance from centre)² = r² + (tangent length)²."
          ]
        },
        {
          heading: "Number of tangents from a point",
          points: [
            "From a point **inside** the circle: **no** tangent.",
            "From a point **on** the circle: exactly **one** tangent.",
            "From a point **outside** the circle: exactly **two** tangents.",
            "The **length of a tangent** is the length of the segment from the external point to the point of contact."
          ]
        },
        {
          heading: "Tangents from an external point",
          points: [
            "**The lengths of the two tangents drawn from an external point to a circle are equal.** Proof: if PA and PB touch the circle at A and B, △OAP ≅ △OBP (RHS: OA = OB, OP common, ∠OAP = ∠OBP = 90°), so PA = PB.",
            "The two tangents are equally inclined to OP, so the centre lies on the bisector of the angle between them.",
            "**∠APB + ∠AOB = 180°**: the angle between the tangents and the angle at the centre are supplementary.",
            "For a quadrilateral ABCD whose sides all touch a circle: **AB + CD = AD + BC**."
          ]
        }
      ],
      formulas: [
        "Tangent ⊥ radius at the point of contact: ∠OPT = 90°",
        "Length of tangent from a point at distance d from the centre: √(d² − r²)",
        "Tangents from an external point are equal: PA = PB",
        "∠APB + ∠AOB = 180°  (A, B points of contact; O centre)",
        "Quadrilateral circumscribing a circle: AB + CD = AD + BC",
        "Number of tangents from a point: inside 0, on the circle 1, outside 2"
      ],
      terms: [
        { term: "Tangent", meaning: "A line that meets a circle at exactly one point." },
        { term: "Secant", meaning: "A line that meets a circle at two distinct points." },
        { term: "Point of contact", meaning: "The single common point of a tangent and the circle." },
        { term: "Length of a tangent", meaning: "The distance from an external point to the point of contact of a tangent drawn from it." },
        { term: "Concentric circles", meaning: "Circles with the same centre but different radii." }
      ],
      examples: [
        {
          q: "From a point Q, the length of the tangent to a circle is 24 cm and the distance of Q from the centre is 25 cm. Find the radius of the circle.",
          steps: [
            "Let O be the centre and P the point of contact. OP ⊥ PQ (tangent ⊥ radius).",
            "In right △OPQ: OQ² = OP² + PQ².",
            "25² = r² + 24² ⇒ r² = 625 − 576 = 49.",
            "r = 7 cm."
          ],
          answer: "Radius = 7 cm"
        },
        {
          q: "Two concentric circles have radii 5 cm and 3 cm. Find the length of the chord of the larger circle that touches the smaller circle.",
          steps: [
            "Let the chord AB of the larger circle touch the smaller circle at P. Then OP = 3 cm and OP ⊥ AB (tangent ⊥ radius).",
            "The perpendicular from the centre to a chord bisects it, so AP = PB.",
            "In right △OPA: AP² = OA² − OP² = 25 − 9 = 16, so AP = 4 cm.",
            "AB = 2 × 4 = 8 cm."
          ],
          answer: "Length of the chord = 8 cm"
        }
      ],
      qa: [
        { q: "Prove that the lengths of tangents drawn from an external point to a circle are equal.", a: "Let PA and PB be tangents from P to a circle with centre O. In △OAP and △OBP: OA = OB (radii), OP is common, and ∠OAP = ∠OBP = 90° (tangent ⊥ radius). So △OAP ≅ △OBP (**RHS**), and **PA = PB** (CPCT)." },
        { q: "Tangents PA and PB from a point P to a circle with centre O are inclined to each other at 80°. Find ∠POA.", a: "∠AOB = 180° − 80° = 100°. OP bisects ∠AOB, so **∠POA = 50°**." },
        { q: "Prove that a parallelogram circumscribing a circle is a rhombus.", a: "For a quadrilateral ABCD circumscribing a circle, AB + CD = AD + BC. In a parallelogram AB = CD and AD = BC, so 2AB = 2AD, i.e. AB = AD. All four sides are then equal, so it is a **rhombus**." }
      ],
      quiz: [
        {
          q: "The number of tangents that can be drawn to a circle from a point outside it is:",
          options: ["1", "0", "2", "infinitely many"],
          answer: 2,
          explain: "Exactly **2** tangents can be drawn from an external point (1 from a point on the circle, 0 from inside)."
        },
        {
          q: "A tangent PQ at a point P of a circle of radius 5 cm meets a line through the centre O at Q so that OQ = 12 cm. The length PQ is:",
          options: ["13 cm", "√119 cm", "8.5 cm", "12 cm"],
          answer: 1,
          explain: "OP ⊥ PQ, so PQ = √(12² − 5²) = √(144 − 25) = **√119 cm**. Adding the squares gives 13 cm, which is wrong here."
        },
        {
          q: "Tangents PA and PB from a point P to a circle with centre O are inclined to each other at 80°. Then ∠POA is:",
          options: ["50°", "60°", "70°", "80°"],
          answer: 0,
          explain: "∠AOB = 180° − 80° = 100°, and OP bisects it: ∠POA = **50°**."
        },
        {
          q: "The angle between a tangent to a circle and the radius at the point of contact is:",
          options: ["60°", "180°", "45°", "90°"],
          answer: 3,
          explain: "The tangent at any point is **perpendicular (90°)** to the radius through the point of contact."
        },
        {
          q: "A quadrilateral ABCD is drawn to circumscribe a circle. If AB = 6 cm, BC = 7 cm and CD = 4 cm, then AD is:",
          options: ["5 cm", "9 cm", "3 cm", "17 cm"],
          answer: 2,
          explain: "AB + CD = AD + BC ⇒ 6 + 4 = AD + 7 ⇒ AD = **3 cm**. Opposite sides are paired, not adjacent ones."
        },
        {
          q: "Two tangents inclined to each other at 60° are drawn to a circle of radius 3 cm from an external point. The length of each tangent is:",
          options: ["6 cm", "3√3 cm", "3 cm", "√3 cm"],
          answer: 1,
          explain: "OP bisects the 60° angle, so ∠APO = 30°. tan 30° = OA/PA = 3/PA ⇒ PA = **3√3 cm**. (6 cm is OP.)"
        }
      ]
    },

    // ───────────────────────────── 11. Areas Related to Circles ─────────────────────────────
    {
      id: "areas-related-to-circles",
      title: "Areas Related to Circles",
      section: "Mensuration",
      summary: "Finding the lengths of arcs and the areas of sectors and segments of a circle.",
      notes: [
        {
          heading: "Circle recap",
          points: [
            "Circumference = 2πr; area = πr².",
            "Take π = 22/7 or 3.14 as the question says; 22/7 works neatly when r is a multiple of 7.",
            "Read carefully whether the radius or the diameter is given."
          ]
        },
        {
          heading: "Sectors and arcs",
          points: [
            "A **sector** is the region between two radii and the arc between them. The smaller one is the **minor sector**; the rest of the circle is the **major sector**.",
            "For a sector of angle θ (in degrees): **arc length = (θ/360) × 2πr** and **area = (θ/360) × πr²**.",
            "Area of the major sector = πr² − area of the minor sector; its angle is 360° − θ.",
            "Perimeter of a sector = 2r + arc length (don't forget the two radii).",
            "Area of a sector can also be written as ½ × arc length × r."
          ]
        },
        {
          heading: "Segments",
          points: [
            "A **segment** is the region between a chord and its arc: the minor segment for the minor arc, the major segment for the major arc.",
            "**Area of minor segment = area of the sector − area of △OAB.**",
            "Area of △OAB: for θ = 90°, ½r²; for θ = 60° (equilateral triangle), (√3/4)r²; for θ = 120°, also (√3/4)r².",
            "Area of major segment = πr² − area of minor segment."
          ]
        },
        {
          heading: "Clocks and real-life problems",
          points: [
            "The minute hand turns 360° in 60 minutes, i.e. **6° per minute**; the hour hand turns 30° per hour.",
            "The area swept by the minute hand in 5 minutes is a sector of angle 30° with r = length of the hand.",
            "Car wipers, lighthouse beams, umbrella panels and pizza slices are all sector problems: identify r and θ first."
          ]
        }
      ],
      formulas: [
        "Circumference = 2πr;  area of circle = πr²",
        "Length of arc = (θ/360°) × 2πr",
        "Area of sector = (θ/360°) × πr² = ½ × arc length × r",
        "Area of major sector = πr² − area of minor sector",
        "Perimeter of sector = 2r + arc length",
        "Area of minor segment = area of sector − area of △OAB",
        "Area of △OAB: ½r² (θ = 90°);  (√3/4)r² (θ = 60° or 120°)",
        "Minute hand: 6° per minute;  hour hand: 30° per hour"
      ],
      terms: [
        { term: "Sector", meaning: "The region of a circle enclosed by two radii and the arc between them." },
        { term: "Segment", meaning: "The region of a circle enclosed by a chord and an arc." },
        { term: "Arc", meaning: "A part of the circumference of a circle." },
        { term: "Central angle", meaning: "The angle θ at the centre between the two radii of a sector." },
        { term: "Major and minor sector", meaning: "The minor sector has angle θ (less than 180°); the major sector is the rest of the circle, with angle 360° − θ." }
      ],
      examples: [
        {
          q: "Find the area of the sector of a circle of radius 4 cm with angle 30°. Also find the area of the corresponding major sector. (π = 3.14)",
          steps: [
            "Area of minor sector = (30/360) × 3.14 × 4² = (1/12) × 50.24 = 4.19 cm² (approx.).",
            "Area of circle = 3.14 × 16 = 50.24 cm².",
            "Area of major sector = 50.24 − 4.19 = 46.05 cm² (or (330/360) × 50.24 ≈ 46.05 cm²)."
          ],
          answer: "Minor sector ≈ 4.19 cm²; major sector ≈ 46.05 cm²"
        },
        {
          q: "Find the area of the minor segment of a circle of radius 21 cm if the chord subtends 120° at the centre. (π = 22/7, √3 = 1.73)",
          steps: [
            "Area of sector OAB = (120/360) × (22/7) × 21² = (1/3) × 22 × 63 = 462 cm².",
            "Draw OM ⊥ AB. OM bisects ∠AOB, so ∠AOM = 60°. OM = 21 cos 60° = 10.5 cm and AM = 21 sin 60° = 21√3/2 cm, so AB = 21√3 cm.",
            "Area of △OAB = ½ × AB × OM = ½ × 21√3 × 10.5 = 441√3/4 cm² ≈ 190.73 cm².",
            "Area of segment = 462 − 190.73 = 271.27 cm²."
          ],
          answer: "Area of minor segment = (462 − 441√3/4) cm² ≈ 271.27 cm²"
        }
      ],
      qa: [
        { q: "Find the area swept by the minute hand of a clock in 5 minutes if the hand is 14 cm long. (π = 22/7)", a: "In 5 minutes the minute hand turns 5 × 6° = 30°. Area = (30/360) × (22/7) × 14² = (1/12) × 616 = **154/3 cm² ≈ 51.33 cm²**." },
        { q: "A chord of a circle of radius 10 cm subtends a right angle at the centre. Find the areas of the minor and major segments. (π = 3.14)", a: "Sector = (90/360) × 3.14 × 100 = 78.5 cm². △OAB = ½ × 10 × 10 = 50 cm². Minor segment = 78.5 − 50 = **28.5 cm²**. Major segment = 314 − 28.5 = **285.5 cm²**." },
        { q: "Find the length of an arc of a circle of radius 21 cm that subtends 60° at the centre. (π = 22/7)", a: "Arc length = (60/360) × 2 × (22/7) × 21 = (1/6) × 132 = **22 cm**." }
      ],
      quiz: [
        {
          q: "The area of a sector of angle 90° in a circle of radius 14 cm is (π = 22/7):",
          options: ["616 cm²", "154 cm²", "22 cm²", "308 cm²"],
          answer: 1,
          explain: "(90/360) × (22/7) × 196 = (1/4) × 616 = **154 cm²**. 616 cm² is the whole circle."
        },
        {
          q: "The length of the arc of a sector of angle 60° in a circle of radius 21 cm is (π = 22/7):",
          options: ["231 cm", "44 cm", "22 cm", "11 cm"],
          answer: 2,
          explain: "(60/360) × 2 × (22/7) × 21 = (1/6) × 132 = **22 cm**. (231 is the sector's area in cm².)"
        },
        {
          q: "The angle turned by the minute hand of a clock in 20 minutes is:",
          options: ["20°", "60°", "100°", "120°"],
          answer: 3,
          explain: "The minute hand turns 6° per minute: 20 × 6° = **120°**."
        },
        {
          q: "The area of a sector of angle θ (in degrees) of a circle of radius r is:",
          options: ["(θ/360) × πr²", "(θ/360) × 2πr", "(θ/180) × πr²", "(θ/720) × πr²"],
          answer: 0,
          explain: "Area of sector = **(θ/360) × πr²**. (θ/360) × 2πr is the arc length."
        },
        {
          q: "A chord of a circle of radius 7 cm subtends 90° at the centre. The area of the minor segment is (π = 22/7):",
          options: ["38.5 cm²", "24.5 cm²", "14 cm²", "63 cm²"],
          answer: 2,
          explain: "Sector = (1/4) × 154 = 38.5 cm²; △OAB = ½ × 7 × 7 = 24.5 cm². Segment = 38.5 − 24.5 = **14 cm²**."
        },
        {
          q: "The perimeter of a sector of radius 7 cm and angle 90° is (π = 22/7):",
          options: ["11 cm", "25 cm", "18 cm", "38.5 cm"],
          answer: 1,
          explain: "Arc = (1/4) × 2 × (22/7) × 7 = 11 cm. Perimeter = 7 + 7 + 11 = **25 cm**. Don't forget both radii."
        }
      ]
    },

    // ───────────────────────────── 12. Surface Areas and Volumes ─────────────────────────────
    {
      id: "surface-areas-and-volumes",
      title: "Surface Areas and Volumes",
      section: "Mensuration",
      summary: "Surface areas and volumes of solids formed by combining cuboids, cylinders, cones, spheres and hemispheres.",
      notes: [
        {
          heading: "Basic solids (recap)",
          points: [
            "Cuboid l × b × h: TSA = 2(lb + bh + hl), volume = lbh. Cube of edge a: TSA = 6a², volume = a³.",
            "Cylinder: CSA = 2πrh, TSA = 2πr(r + h), volume = πr²h.",
            "Cone: l = √(r² + h²), CSA = πrl, TSA = πr(l + r), volume = (1/3)πr²h.",
            "Sphere: surface area = 4πr², volume = (4/3)πr³. Hemisphere: CSA = 2πr², TSA = 3πr², volume = (2/3)πr³."
          ]
        },
        {
          heading: "Surface area of a combination",
          points: [
            "Add only the surfaces that are **exposed (visible)**; the faces where two solids are joined are hidden.",
            "Cone on a hemisphere (a toy): surface area = CSA of cone + CSA of hemisphere.",
            "Capsule (cylinder with a hemisphere at each end): surface area = 2πrh + 2 × 2πr² = 2πrh + 4πr².",
            "Hemisphere on a cube: surface area = 6a² − πr² + 2πr² (remove the covered circle, add the dome).",
            "**The surface area of a combined solid is NOT the sum of the TSAs of its parts.**"
          ]
        },
        {
          heading: "Volume of a combination",
          points: [
            "Volume of a combined solid = **sum** of the volumes of its parts.",
            "If a part is scooped out, subtract its volume: remaining volume = original − removed.",
            "Cone on a hemisphere: V = (1/3)πr²h + (2/3)πr³.",
            "Units: 1 m³ = 1000 litres and 1 litre = 1000 cm³."
          ]
        },
        {
          heading: "Tips",
          points: [
            "Sketch and label each part; note shared radii and how heights add up (e.g. total height of a toy = height of cone + radius of hemisphere).",
            "Keep π as a common factor and multiply at the end to reduce calculation.",
            "Mass = volume × density; convert grams to kilograms at the end if needed."
          ]
        }
      ],
      formulas: [
        "Cuboid: TSA = 2(lb + bh + hl);  V = lbh",
        "Cube: TSA = 6a²;  V = a³",
        "Cylinder: CSA = 2πrh;  TSA = 2πr(r + h);  V = πr²h",
        "Cone: l = √(r² + h²);  CSA = πrl;  TSA = πr(l + r);  V = (1/3)πr²h",
        "Sphere: SA = 4πr²;  V = (4/3)πr³",
        "Hemisphere: CSA = 2πr²;  TSA = 3πr²;  V = (2/3)πr³",
        "1 m³ = 1000 L;  1 L = 1000 cm³"
      ],
      terms: [
        { term: "Combination of solids", meaning: "A solid made by joining two or more basic solids, e.g. a cone on a hemisphere." },
        { term: "Curved surface area (CSA)", meaning: "The area of only the curved surface of a solid." },
        { term: "Total surface area (TSA)", meaning: "The area of all the outer surfaces of a solid, curved and flat." },
        { term: "Volume", meaning: "The amount of space a solid occupies, measured in cubic units." },
        { term: "Capacity", meaning: "The volume a hollow container can hold, usually in litres (1 L = 1000 cm³)." }
      ],
      examples: [
        {
          q: "A toy is a cone of radius 3.5 cm mounted on a hemisphere of the same radius. The total height of the toy is 15.5 cm. Find its total surface area. (π = 22/7)",
          steps: [
            "Height of cone = 15.5 − 3.5 = 12 cm.",
            "Slant height l = √(12² + 3.5²) = √(144 + 12.25) = √156.25 = 12.5 cm.",
            "CSA of cone = πrl = (22/7) × 3.5 × 12.5 = 137.5 cm².",
            "CSA of hemisphere = 2πr² = 2 × (22/7) × 3.5 × 3.5 = 77 cm².",
            "TSA of toy = 137.5 + 77 = 214.5 cm²."
          ],
          answer: "Total surface area = 214.5 cm²"
        },
        {
          q: "A solid iron pole is a cylinder of height 220 cm and base diameter 24 cm, surmounted by another cylinder of height 60 cm and radius 8 cm. Find the mass of the pole if 1 cm³ of iron has a mass of about 8 g. (π = 3.14)",
          steps: [
            "Volume of lower cylinder = π × 12² × 220 = π × 31680 cm³.",
            "Volume of upper cylinder = π × 8² × 60 = π × 3840 cm³.",
            "Total volume = π × 35520 = 3.14 × 35520 = 111532.8 cm³.",
            "Mass = 111532.8 × 8 = 892262.4 g ≈ 892.26 kg."
          ],
          answer: "Mass ≈ 892.26 kg"
        }
      ],
      qa: [
        { q: "Two cubes, each of volume 64 cm³, are joined end to end. Find the surface area of the resulting cuboid.", a: "Edge = ∛64 = 4 cm, so the cuboid is 8 × 4 × 4 cm. Surface area = 2(8 × 4 + 4 × 4 + 4 × 8) = 2(32 + 16 + 32) = **160 cm²**." },
        { q: "A medicine capsule is a cylinder with a hemisphere at each end. The capsule is 14 mm long and 5 mm in diameter. Find its surface area. (π = 22/7)", a: "r = 2.5 mm; length of cylindrical part = 14 − 5 = 9 mm. Surface area = 2πrh + 4πr² = 2π(2.5)(9) + 4π(6.25) = 45π + 25π = 70π = **220 mm²**." },
        { q: "Why is the total surface area of a combined solid not the sum of the total surface areas of its parts?", a: "When solids are joined, the faces in contact are **hidden inside** the combined solid, so they are no longer part of its outer surface and must not be counted." }
      ],
      quiz: [
        {
          q: "A cone is placed on a hemisphere of the same radius. The total surface area of the solid is:",
          options: ["TSA of cone + TSA of hemisphere", "CSA of cone + CSA of hemisphere", "CSA of cone + TSA of hemisphere", "TSA of cone + CSA of hemisphere"],
          answer: 1,
          explain: "The circular faces are joined and hidden, so only the curved surfaces show: **CSA of cone + CSA of hemisphere**."
        },
        {
          q: "Two cubes each of edge 5 cm are joined end to end. The surface area of the resulting cuboid is:",
          options: ["300 cm²", "200 cm²", "250 cm²", "150 cm²"],
          answer: 2,
          explain: "Cuboid 10 × 5 × 5: 2(50 + 25 + 50) = **250 cm²**. Adding two cube TSAs (300 cm²) counts the two hidden faces."
        },
        {
          q: "A capsule has a cylindrical part of length 6 mm and a hemisphere of radius 2 mm at each end. Its surface area is:",
          options: ["48π mm²", "32π mm²", "24π mm²", "40π mm²"],
          answer: 3,
          explain: "2πrh + 2 × 2πr² = 2π(2)(6) + 4π(4) = 24π + 16π = **40π mm²**."
        },
        {
          q: "A solid is made of a cone of radius 3 cm and height 4 cm mounted on a hemisphere of radius 3 cm. Its volume is:",
          options: ["30π cm³", "48π cm³", "54π cm³", "12π cm³"],
          answer: 0,
          explain: "(1/3)π(9)(4) + (2/3)π(27) = 12π + 18π = **30π cm³**."
        },
        {
          q: "A cylinder and a cone have the same base radius and height. If the volume of the cylinder is 360 cm³, the volume of the cone is:",
          options: ["1080 cm³", "120 cm³", "180 cm³", "240 cm³"],
          answer: 1,
          explain: "Cone = (1/3) × cylinder = 360 ÷ 3 = **120 cm³**."
        },
        {
          q: "How much water can a cuboidal tank measuring 2 m × 1.5 m × 1 m hold?",
          options: ["3 L", "300 L", "30000 L", "3000 L"],
          answer: 3,
          explain: "Volume = 2 × 1.5 × 1 = 3 m³ = 3 × 1000 = **3000 L**."
        }
      ]
    },

    // ───────────────────────────── 13. Statistics ─────────────────────────────
    {
      id: "statistics",
      title: "Statistics",
      section: "Statistics & Probability",
      summary: "Mean, median and mode of grouped data, the methods for calculating them, and the empirical relationship between them.",
      notes: [
        {
          heading: "Mean of grouped data",
          points: [
            "Each class is represented by its **class mark** xᵢ = (lower limit + upper limit)/2, assuming the frequency is centred at the mid-point.",
            "**Direct method**: x̄ = Σfᵢxᵢ / Σfᵢ.",
            "**Assumed mean method**: choose a central xᵢ as a; dᵢ = xᵢ − a; x̄ = a + Σfᵢdᵢ / Σfᵢ.",
            "**Step-deviation method**: uᵢ = (xᵢ − a)/h; x̄ = a + h × (Σfᵢuᵢ / Σfᵢ). Useful when all dᵢ share a common factor h.",
            "All three methods give the same mean; the shortcuts only reduce calculation."
          ]
        },
        {
          heading: "Mode of grouped data",
          points: [
            "The **modal class** is the class with the **highest frequency**.",
            "**Mode = l + [(f₁ − f₀)/(2f₁ − f₀ − f₂)] × h**, where l = lower limit of the modal class, h = class size, f₁ = frequency of the modal class, f₀ = frequency of the class before it, f₂ = frequency of the class after it.",
            "If the modal class is the first class, take f₀ = 0.",
            "Mode is the best average for 'most common' questions, such as the most popular shoe size."
          ]
        },
        {
          heading: "Median of grouped data",
          points: [
            "Find the cumulative frequencies (cf) and n = Σfᵢ. The **median class** is the class whose cf is greater than (and nearest to) n/2.",
            "**Median = l + [(n/2 − cf)/f] × h**, where l = lower limit of the median class, cf = cumulative frequency of the class **before** it, f = frequency of the median class, h = class size.",
            "Classes must be continuous; convert inclusive classes (10–19, 20–29) to 9.5–19.5, 19.5–29.5 first.",
            "Median is a better average than mean when the data have extreme values (e.g. incomes)."
          ]
        },
        {
          heading: "Empirical relationship and common mistakes",
          points: [
            "**Empirical relationship**: 3 Median = Mode + 2 Mean.",
            "In the mode formula, f₀ and f₂ are the frequencies of the classes **next to the modal class**, not the first and last classes.",
            "In the median formula, cf is the cumulative frequency of the class **preceding** the median class, not of the median class itself.",
            "The modal class and the median class are often different; find each separately."
          ]
        }
      ],
      formulas: [
        "Class mark xᵢ = (lower limit + upper limit)/2",
        "Mean (direct): x̄ = Σfᵢxᵢ / Σfᵢ",
        "Mean (assumed mean): x̄ = a + Σfᵢdᵢ / Σfᵢ, where dᵢ = xᵢ − a",
        "Mean (step deviation): x̄ = a + h × (Σfᵢuᵢ / Σfᵢ), where uᵢ = (xᵢ − a)/h",
        "Mode = l + [(f₁ − f₀)/(2f₁ − f₀ − f₂)] × h",
        "Median = l + [(n/2 − cf)/f] × h",
        "3 Median = Mode + 2 Mean (empirical)"
      ],
      terms: [
        { term: "Class mark", meaning: "The mid-point of a class interval, used as the representative value of that class." },
        { term: "Modal class", meaning: "The class interval with the highest frequency." },
        { term: "Median class", meaning: "The class whose cumulative frequency is greater than and nearest to n/2." },
        { term: "Cumulative frequency", meaning: "The running total of frequencies up to and including a class." },
        { term: "Assumed mean", meaning: "A convenient value a (usually a central class mark) used to simplify the calculation of the mean." }
      ],
      examples: [
        {
          q: "Find the mean of the data using the step-deviation method: 0–10: 5, 10–20: 8, 20–30: 15, 30–40: 16, 40–50: 6.",
          steps: [
            "Class marks xᵢ: 5, 15, 25, 35, 45. Take a = 25 and h = 10.",
            "uᵢ = (xᵢ − 25)/10: −2, −1, 0, 1, 2.",
            "fᵢuᵢ: −10, −8, 0, 16, 12. Σfᵢuᵢ = 10 and Σfᵢ = 50.",
            "x̄ = a + h × (Σfᵢuᵢ / Σfᵢ) = 25 + 10 × (10/50) = 25 + 2 = 27."
          ],
          answer: "Mean = 27"
        },
        {
          q: "For the same data (0–10: 5, 10–20: 8, 20–30: 15, 30–40: 16, 40–50: 6), find the median and the mode.",
          steps: [
            "Cumulative frequencies: 5, 13, 28, 44, 50. n = 50, so n/2 = 25.",
            "Median class = 20–30 (first cf greater than 25 is 28). l = 20, cf = 13, f = 15, h = 10.",
            "Median = 20 + [(25 − 13)/15] × 10 = 20 + 8 = 28.",
            "Modal class = 30–40 (highest frequency 16). l = 30, f₁ = 16, f₀ = 15, f₂ = 6, h = 10.",
            "Mode = 30 + [(16 − 15)/(32 − 15 − 6)] × 10 = 30 + 10/11 ≈ 30.91."
          ],
          answer: "Median = 28; Mode ≈ 30.91"
        }
      ],
      qa: [
        { q: "Which measure of central tendency would you use to find the most popular shoe size? Why?", a: "The **mode**, because it gives the value that occurs **most often**, which is exactly what 'most popular' means." },
        { q: "If the mode of a distribution is 45 and its mean is 27, find its median using the empirical relationship.", a: "3 Median = Mode + 2 Mean = 45 + 54 = 99, so **Median = 33**." },
        { q: "Why do we use class marks to find the mean of grouped data?", a: "The individual values in each class are not known, so we **assume each class's frequency is centred at its mid-point** (class mark) and use that as the representative value." }
      ],
      quiz: [
        {
          q: "In the step-deviation method, a = 50, h = 10, Σfᵢuᵢ = −15 and Σfᵢ = 75. The mean is:",
          options: ["52", "48", "49.8", "35"],
          answer: 1,
          explain: "x̄ = 50 + 10 × (−15/75) = 50 − 2 = **48**. Forgetting to multiply by h gives 49.8."
        },
        {
          q: "The modal class of a grouped frequency distribution is the class with:",
          options: ["the highest cumulative frequency", "the middle position in the table", "the highest frequency", "the largest class mark"],
          answer: 2,
          explain: "The modal class is the class with the **highest frequency**."
        },
        {
          q: "Using the empirical relationship, if the mode is 24 and the median is 26, the mean is:",
          options: ["25", "28", "30", "27"],
          answer: 3,
          explain: "3 × 26 = 24 + 2 Mean ⇒ 78 − 24 = 54 = 2 Mean ⇒ Mean = **27**."
        },
        {
          q: "In Median = l + [(n/2 − cf)/f] × h, cf stands for the:",
          options: ["cumulative frequency of the class preceding the median class", "cumulative frequency of the median class", "frequency of the median class", "total frequency"],
          answer: 0,
          explain: "cf is the **cumulative frequency of the class before the median class**. f is the median class's own frequency."
        },
        {
          q: "For a grouped distribution, the modal class has l = 40, h = 10, f₁ = 20, f₀ = 12 and f₂ = 8. The mode is:",
          options: ["42", "46.67", "44", "48"],
          answer: 2,
          explain: "Mode = 40 + [(20 − 12)/(40 − 12 − 8)] × 10 = 40 + (8/20) × 10 = **44**."
        },
        {
          q: "The classes 0–10, 10–20, 20–30, 30–40, 40–50 have cumulative frequencies 5, 13, 28, 44, 50. The median class is:",
          options: ["30–40", "20–30", "10–20", "40–50"],
          answer: 1,
          explain: "n/2 = 25. The first cumulative frequency greater than 25 is 28, so the median class is **20–30**."
        }
      ]
    },

    // ───────────────────────────── 14. Probability ─────────────────────────────
    {
      id: "probability",
      title: "Probability",
      section: "Statistics & Probability",
      summary: "Theoretical (classical) probability of an event, complementary events, and problems on coins, dice, playing cards and balls.",
      notes: [
        {
          heading: "Theoretical probability",
          points: [
            "For equally likely outcomes: **P(E) = number of outcomes favourable to E ÷ total number of possible outcomes**.",
            "Outcomes are **equally likely** when each has the same chance, e.g. the faces of a fair die or the sides of an unbiased coin.",
            "**0 ≤ P(E) ≤ 1** for every event. A probability can never be negative or greater than 1.",
            "An event with only one outcome is an **elementary event**. The probabilities of all the elementary events of an experiment add up to 1."
          ]
        },
        {
          heading: "Sure, impossible and complementary events",
          points: [
            "**Sure (certain) event**: P = 1, e.g. getting a number less than 7 on a die.",
            "**Impossible event**: P = 0, e.g. getting 8 on a die.",
            "The complement of E is the event 'not E'. **P(E) + P(not E) = 1**.",
            "Use P(not E) = 1 − P(E) when 'not E' is easier to count."
          ]
        },
        {
          heading: "Standard experiments",
          points: [
            "**Coins**: one coin, 2 outcomes; two coins, 4 outcomes (HH, HT, TH, TT); three coins, 8 outcomes.",
            "**Dice**: one die, 6 outcomes; two dice, **36** outcomes. Sums range from 2 to 12, and a sum of 7 is the most likely (6 ways).",
            "**Playing cards**: 52 cards in 4 suits of 13 (spades and clubs black; hearts and diamonds red), so 26 red and 26 black.",
            "**Face cards** are kings, queens and jacks: **12** in all. There are 4 aces, and aces are **not** face cards."
          ]
        },
        {
          heading: "Common mistakes",
          points: [
            "HT and TH are **different** outcomes: with two coins, P(one head and one tail) = 2/4 = 1/2, not 1/3.",
            "1 is not a prime number: on a die the primes are 2, 3, 5, so P(prime) = 3/6 = 1/2.",
            "When cards or balls are removed, reduce the total (and the favourable count) before finding the next probability.",
            "'At least one' is often easiest as 1 − P(none)."
          ]
        }
      ],
      formulas: [
        "P(E) = favourable outcomes ÷ total outcomes",
        "0 ≤ P(E) ≤ 1",
        "P(E) + P(not E) = 1",
        "P(sure event) = 1;  P(impossible event) = 0",
        "Sum of probabilities of all elementary events = 1",
        "Total outcomes: 1 coin 2, 2 coins 4, 3 coins 8;  1 die 6, 2 dice 36;  pack of cards 52"
      ],
      terms: [
        { term: "Experiment", meaning: "An action with well-defined possible results (outcomes), such as tossing a coin or throwing a die." },
        { term: "Event", meaning: "A collection of one or more outcomes of an experiment, e.g. 'getting an even number'." },
        { term: "Equally likely outcomes", meaning: "Outcomes that each have the same chance of occurring." },
        { term: "Complementary event", meaning: "The event 'not E', which happens exactly when E does not; P(E) + P(not E) = 1." },
        { term: "Sure event", meaning: "An event certain to happen; its probability is 1." },
        { term: "Impossible event", meaning: "An event that cannot happen; its probability is 0." }
      ],
      examples: [
        {
          q: "Two dice are thrown at the same time. Find the probability that the sum of the numbers on them is (i) 8 (ii) 13 (iii) less than or equal to 12.",
          steps: [
            "Total outcomes = 6 × 6 = 36.",
            "(i) Sum 8: (2, 6), (3, 5), (4, 4), (5, 3), (6, 2), i.e. 5 outcomes. P = 5/36.",
            "(ii) The largest possible sum is 12, so a sum of 13 is impossible. P = 0.",
            "(iii) Every sum is at most 12, so this is a sure event. P = 1."
          ],
          answer: "(i) 5/36 (ii) 0 (iii) 1"
        },
        {
          q: "A box contains 3 blue, 2 white and 4 red marbles. One marble is drawn at random. Find the probability that it is (i) white (ii) blue (iii) red (iv) not red.",
          steps: [
            "Total marbles = 3 + 2 + 4 = 9.",
            "(i) P(white) = 2/9.",
            "(ii) P(blue) = 3/9 = 1/3.",
            "(iii) P(red) = 4/9.",
            "(iv) P(not red) = 1 − 4/9 = 5/9."
          ],
          answer: "(i) 2/9 (ii) 1/3 (iii) 4/9 (iv) 5/9"
        }
      ],
      qa: [
        { q: "One card is drawn from a well-shuffled deck of 52 cards. Find the probability of getting (i) a red king (ii) a face card (iii) the queen of diamonds.", a: "(i) There are 2 red kings: P = 2/52 = **1/26**. (ii) 12 face cards: P = 12/52 = **3/13**. (iii) Only one queen of diamonds: P = **1/52**." },
        { q: "If P(E) = 0.05, what is the probability of 'not E'?", a: "P(not E) = 1 − P(E) = 1 − 0.05 = **0.95**." },
        { q: "Two coins are tossed. Why is the probability of getting one head and one tail 1/2 and not 1/3?", a: "The equally likely outcomes are HH, HT, TH, TT, i.e. **4**, not 3. 'One head and one tail' includes both **HT and TH**, so P = 2/4 = 1/2." }
      ],
      quiz: [
        {
          q: "Which of the following cannot be the probability of an event?",
          options: ["2/3", "15%", "−1.5", "0.7"],
          answer: 2,
          explain: "Probability always lies between 0 and 1, so **−1.5** is impossible. 15% = 0.15 is fine."
        },
        {
          q: "If P(E) = 0.35, then P(not E) is:",
          options: ["0.35", "0.65", "1.35", "0.53"],
          answer: 1,
          explain: "P(not E) = 1 − 0.35 = **0.65**."
        },
        {
          q: "A die is thrown once. The probability of getting a prime number is:",
          options: ["2/3", "1/3", "1/6", "1/2"],
          answer: 3,
          explain: "Primes on a die: 2, 3, 5, so P = 3/6 = **1/2**. Counting 1 as prime gives the wrong answer 2/3."
        },
        {
          q: "Two coins are tossed together. The probability of getting at least one head is:",
          options: ["3/4", "1/2", "1/4", "2/3"],
          answer: 0,
          explain: "Outcomes HH, HT, TH, TT; at least one head in HH, HT, TH: P = **3/4** (= 1 − P(TT))."
        },
        {
          q: "A card is drawn at random from a well-shuffled deck of 52 cards. The probability that it is a face card is:",
          options: ["4/13", "1/13", "3/13", "3/52"],
          answer: 2,
          explain: "There are 12 face cards (K, Q, J of each suit): 12/52 = **3/13**. Including aces would wrongly give 16/52 = 4/13."
        },
        {
          q: "Two dice are thrown together. The probability of getting the same number on both dice is:",
          options: ["1/6", "1/36", "1/3", "1/12"],
          answer: 0,
          explain: "Doublets (1,1), (2,2), …, (6,6): 6 outcomes out of 36, so P = 6/36 = **1/6**."
        }
      ]
    }
  ]
});
