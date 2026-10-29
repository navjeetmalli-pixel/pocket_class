// Class 9 Mathematics: NCERT Ganita Manjari (Grade 9), Part I and Part II, first editions 2026.
// Format: see CONTENT_GUIDE.md
StudyData.add(9, "maths", {
  syllabus: {board: "CBSE", match: "textbook", books: ["Ganita Manjari, Grade 9, Part I", "Ganita Manjari, Grade 9, Part II"], reviewed: false},
  chapters: [
    // ───────────── 1. Orienting Yourself: The Use of Coordinates ─────────────
    {
      id: "orienting-yourself-the-use-of-coordinates",
      title: "Orienting Yourself: The Use of Coordinates",
      section: "Part I",
      summary: "How two perpendicular number lines locate any point in a plane, the four quadrants, and how the Baudhāyana–Pythagoras theorem gives the distance between two points.",
      notes: [
        {
          heading: "The Cartesian plane",
          points: [
            "Two perpendicular number lines make the coordinate system: the horizontal **x-axis** and the vertical **y-axis**. They meet at the **origin** O (0, 0).",
            "Distances to the right of O or upwards are positive; to the left or downwards they are negative.",
            "The plane is called the **Cartesian plane**, coordinate plane or xy-plane. Descartes formalised the idea in 1637 after earlier work by Fermat and Indian and Arab astronomers.",
            "For a point P (x, y): x is its distance from the **y-axis** (measured along the x-axis) and y is its distance from the **x-axis**."
          ]
        },
        {
          heading: "Axes and quadrants",
          points: [
            "A point on the x-axis has the form (x, 0); a point on the y-axis has the form (0, y).",
            "The axes divide the plane into four **quadrants**: I (+, +), II (−, +), III (−, −), IV (+, −).",
            "Example: S (3, −5) is in Quadrant IV and Q (−5, 3) is in Quadrant II.",
            "(x, y) and (y, x) are the same point **only if x = y**. The order of the coordinates matters."
          ]
        },
        {
          heading: "Distance between two points",
          points: [
            "If two points have the same y-coordinate, the distance is |x₂ − x₁|. If they have the same x-coordinate, it is |y₂ − y₁|.",
            "For a slanted segment, draw a right triangle whose legs are parallel to the axes and use the Baudhāyana–Pythagoras theorem.",
            "Distance between (x₁, y₁) and (x₂, y₂) = √[(x₂ − x₁)² + (y₂ − y₁)²].",
            "The signs of the differences do not matter because they are squared. Example: A (3, 4) and D (7, 1) give √(4² + 3²) = 5."
          ]
        },
        {
          heading: "Reflections and checking shapes",
          points: [
            "Reflecting a point in the **y-axis** changes (x, y) to (−x, y); reflecting in the **x-axis** changes it to (x, −y).",
            "Reflection preserves lengths: a triangle and its mirror image have equal sides.",
            "A point (x, y) is at distance √(x² + y²) from the origin.",
            "Distances help classify shapes: four equal sides and equal diagonals show a square."
          ]
        }
      ],
      formulas: [
        "Distance between (x₁, y₁) and (x₂, y₂) = √[(x₂ − x₁)² + (y₂ − y₁)²]",
        "Distance of (x, y) from the origin = √(x² + y²)",
        "Quadrants: I (+, +), II (−, +), III (−, −), IV (+, −)",
        "Reflection in y-axis: (x, y) → (−x, y); in x-axis: (x, y) → (x, −y)"
      ],
      terms: [
        { term: "Origin", meaning: "The point (0, 0) where the x-axis and y-axis cross." },
        { term: "Abscissa / x-coordinate", meaning: "The perpendicular distance of a point from the **y-axis**, with sign." },
        { term: "Ordinate / y-coordinate", meaning: "The perpendicular distance of a point from the **x-axis**, with sign." },
        { term: "Quadrant", meaning: "One of the four regions into which the axes divide the plane." },
        { term: "Cartesian plane", meaning: "The plane with two perpendicular coordinate axes used to locate points by ordered pairs." }
      ],
      examples: [
        {
          q: "Show that A (2, 1), B (−1, 2), C (−2, −1) and D (1, −2) form a square and find its area.",
          steps: [
            "AB = √(3² + 1²) = √10; BC = √(1² + 3²) = √10; CD = √(3² + 1²) = √10; DA = √(1² + 3²) = √10.",
            "Diagonals: AC = √(4² + 2²) = √20 and BD = √(2² + 4²) = √20, so they are equal.",
            "Four equal sides and equal diagonals, so ABCD is a square.",
            "Area = side² = (√10)² = 10."
          ],
          answer: "ABCD is a square of area 10 square units."
        },
        {
          q: "Points A (1, −8), B (−4, 7), C (−7, −4) lie on a circle with centre O. Find the radius and say whether D (−5, 6) lies inside it.",
          steps: [
            "OA = √(1 + 64) = √65; OB = √(16 + 49) = √65; OC = √(49 + 16) = √65. So the radius is √65.",
            "OD = √(25 + 36) = √61.",
            "√61 < √65."
          ],
          answer: "Radius = √65 units; D lies inside the circle."
        }
      ],
      qa: [
        { q: "In which quadrants can a point lie if its x-coordinate is −5?", a: "Its x-coordinate is negative, so it lies in Quadrant II (y positive) or Quadrant III (y negative). If y = 0 it lies on the x-axis instead." },
        { q: "Find the distance between P (−2, 3) and Q (4, −5).", a: "x-difference = 4 − (−2) = 6; y-difference = −5 − 3 = −8. PQ = √(36 + 64) = √100 = **10 units**." },
        { q: "Why is (3, 5) different from (5, 3)?", a: "The first number is the distance from the y-axis and the second from the x-axis. (3, 5) is 3 right and 5 up; (5, 3) is 5 right and 3 up. They coincide only when x = y." }
      ],
      quiz: [
        { q: "The point (−3, 5) lies in which quadrant?", options: ["Quadrant I", "Quadrant II", "Quadrant III", "Quadrant IV"], answer: 1, explain: "A negative x with a positive y places the point in Quadrant II." },
        { q: "The distance between (−2, 3) and (4, −5) is:", options: ["10 units", "14 units", "2 units", "√28 units"], answer: 0, explain: "The differences are 6 and −8, so the distance is √(36 + 64) = 10." },
        { q: "Which point lies on the y-axis?", options: ["(6, 0)", "(0, −6)", "(6, 6)", "(−6, −6)"], answer: 1, explain: "Points on the y-axis have x-coordinate 0." },
        { q: "The mirror image of (3, 4) in the y-axis is:", options: ["(3, −4)", "(−3, 4)", "(−3, −4)", "(4, 3)"], answer: 1, explain: "Reflection in the y-axis changes the sign of x only." },
        { q: "The distance of the point (−5, 3) from the x-axis is:", options: ["5", "−5", "3", "√34"], answer: 2, explain: "Distance from the x-axis is the absolute value of the y-coordinate, 3." },
        { q: "The distance of (6, −8) from the origin is:", options: ["14", "2", "10", "√14"], answer: 2, explain: "√(6² + 8²) = √100 = 10." }
      ]
    },

    // ───────────── 2. Introduction to Linear Polynomials ─────────────
    {
      id: "introduction-to-linear-polynomials",
      title: "Introduction to Linear Polynomials",
      section: "Part I",
      summary: "Algebraic expressions and polynomials in one variable, linear polynomials, linear growth and decay, linear patterns, and the graph of the line y = ax + b.",
      notes: [
        {
          heading: "Expressions and polynomials",
          points: [
            "An algebraic expression is built from variables, numbers and operations. In 2x² + 5x − 3, the parts 2x², 5x and −3 are **terms**; 2, 5 and −3 are **coefficients**.",
            "A **univariate polynomial** is an expression in one variable, such as x² + 5x + 3.",
            "The **degree** is the highest power of the variable: x² + 5x + 3 has degree 2 and 3y³ − 4y² + 5 has degree 3.",
            "A polynomial of degree one is a **linear polynomial**, for example 2x + 3 or 5 − 4y."
          ]
        },
        {
          heading: "Linear growth, decay and patterns",
          points: [
            "**Linear growth**: a quantity increases by a fixed amount over equal intervals. **Linear decay**: it decreases by a fixed amount.",
            "A **linear pattern** is a sequence in which the difference between consecutive terms is constant.",
            "Such a pattern is described by a linear polynomial in the position number n, for example 3, 7, 11, 15, … is 4n − 1.",
            "Real situations such as a taxi fare (fixed charge + rate per km) or a prepaid balance being used up are linear."
          ]
        },
        {
          heading: "Linear relationships and their graphs",
          points: [
            "A linear relationship between x and y is the straight line **y = ax + b**.",
            "**a is the slope**: how much y changes for a unit increase in x. **b is the y-intercept**: where the line cuts the y-axis, at (0, b).",
            "If b = 0, the line y = ax passes through the origin.",
            "Positive slope shows growth; negative slope shows decay."
          ]
        },
        {
          heading: "Families of lines",
          points: [
            "Lines of the form y = ax + b with the **same slope a** but different b are **parallel**.",
            "Changing a changes the steepness; changing b slides the line up or down.",
            "To draw a line, find two (preferably three) points and join them with a ruler."
          ]
        }
      ],
      formulas: [
        "Linear polynomial in x: ax + b (a ≠ 0)",
        "Line: y = ax + b; slope = a, y-intercept = b",
        "Linear pattern: nth term = (first term) + (n − 1) × (common difference)",
        "Parallel lines: same slope, different intercepts"
      ],
      terms: [
        { term: "Degree of a polynomial", meaning: "The highest power of the variable in it." },
        { term: "Linear polynomial", meaning: "A polynomial of degree one, such as 2x + 3." },
        { term: "Slope", meaning: "The coefficient a in y = ax + b; the change in y for a unit change in x." },
        { term: "y-intercept", meaning: "The y-value b where the line y = ax + b meets the y-axis." },
        { term: "Linear decay", meaning: "A quantity that decreases by a fixed amount over equal intervals; the graph has negative slope." }
      ],
      examples: [
        {
          q: "A taxi charges ₹30 plus ₹12 per km. Write the fare as a linear polynomial and find the fare for 7 km.",
          steps: ["Fixed charge = ₹30; variable part = 12 × (distance x).", "Fare C = 12x + 30.", "For x = 7: C = 12 × 7 + 30 = 84 + 30 = 114."],
          answer: "C = 12x + 30; fare for 7 km = ₹114."
        },
        {
          q: "A line y = ax + b passes through (0, 5) and (2, 11). Find its equation.",
          steps: ["At x = 0, y = b, so b = 5.", "At x = 2: 2a + 5 = 11, so 2a = 6 and a = 3.", "Check: 3(2) + 5 = 11."],
          answer: "y = 3x + 5 (slope 3, y-intercept 5)."
        }
      ],
      qa: [
        { q: "What is the difference between the slope and the y-intercept of y = ax + b?", a: "The slope **a** tells how steeply y changes when x increases by 1. The y-intercept **b** is the value of y where the line meets the y-axis, i.e. the point (0, b)." },
        { q: "Show that y = 3x + 1 and y = 3x − 4 are parallel.", a: "Both have slope 3 but different y-intercepts (1 and −4). Lines with equal slope never meet, so they are parallel." }
      ],
      quiz: [
        { q: "The degree of the polynomial 3y³ − 4y² + 5 is:", options: ["2", "3", "5", "4"], answer: 1, explain: "The highest power of y is 3." },
        { q: "Which of these is a linear polynomial?", options: ["x² + 3", "5 − 4y", "y³ − y", "3/x"], answer: 1, explain: "5 − 4y has degree 1." },
        { q: "The line y = 2x + 3 cuts the y-axis at:", options: ["(3, 0)", "(0, 2)", "(0, 3)", "(2, 3)"], answer: 2, explain: "Put x = 0 to get y = 3, so it cuts at (0, 3)." },
        { q: "The 20th term of the linear pattern 7, 11, 15, … is:", options: ["83", "87", "80", "79"], answer: 0, explain: "a = 7, d = 4, so t₂₀ = 7 + 19 × 4 = 83." },
        { q: "For y = −2x + 5, the value of y at x = 3 is:", options: ["11", "−1", "1", "−11"], answer: 1, explain: "−2(3) + 5 = −1." },
        { q: "A line with a negative slope represents:", options: ["Linear growth", "Linear decay", "A line through the origin", "A vertical line"], answer: 1, explain: "A negative slope means y decreases by a fixed amount for each unit rise in x." }
      ]
    },

    // ───────────── 3. The World of Numbers ─────────────
    {
      id: "the-world-of-numbers",
      title: "The World of Numbers",
      section: "Part I",
      summary: "From counting numbers and Brahmagupta’s zero and negatives to rational numbers, their density, irrational numbers, real numbers and decimal expansions.",
      notes: [
        {
          heading: "Natural numbers, zero and integers",
          points: [
            "Natural numbers {1, 2, 3, …} arose from the human need to count; the Ishango bone is an early record.",
            "**Brahmagupta (629 CE)** treated zero (śhūnya) as a number with its own arithmetic and introduced negative numbers, called debts (ṛiṇa), against positive fortunes (dhana).",
            "Integers extend the number line to the left of zero. Brahmagupta’s rules include: the product of two debts is a fortune (− × − = +).",
            "Zero is neither positive nor negative."
          ]
        },
        {
          heading: "Rational numbers and density",
          points: [
            "A **rational number** is p/q with integers p, q and **q ≠ 0**.",
            "A rational number can be placed on the number line by dividing the unit length into q equal parts.",
            "Rational numbers are **dense**: between any two rationals there is another, hence infinitely many. One is their average (a + b)/2.",
            "Example: between 1/3 and 1/2 lies (1/3 + 1/2)/2 = 5/12."
          ]
        },
        {
          heading: "Irrational numbers and real numbers",
          points: [
            "Irrational numbers such as √2 and π cannot be written as p/q. They show that the rational number line still has gaps.",
            "**Hippasus (c. 400 BCE)** gave the first proof that √2 is irrational, by contradiction.",
            "The length √2 can be constructed as the diagonal of a unit square; √5 as the hypotenuse of a right triangle with legs 2 and 1. Repeating this builds the **square root spiral**.",
            "Rational and irrational numbers together form the **real numbers**, which fill the whole number line.",
            "π is irrational (Lambert, 1761); 22/7 and 355/113 are only approximations."
          ]
        },
        {
          heading: "Decimal expansions",
          points: [
            "Rational numbers have decimal expansions that either **terminate** (7/8 = 0.875) or **repeat** (1/3 = 0.333…).",
            "Irrational numbers have decimals that **neither terminate nor repeat**.",
            "1/7 = 0.142857 142857… repeats the block 142857 of length 6; such blocks give **cyclic numbers**.",
            "A repeating decimal is converted to a fraction by multiplying by a power of 10 and subtracting; for 0.363636…, x = 4/11.",
            "The square root of −1 is not real; it leads to imaginary numbers, a topic for later."
          ]
        }
      ],
      formulas: [
        "Rational number: p/q, p and q integers, q ≠ 0",
        "A rational between a and b: (a + b)/2",
        "Terminating or repeating decimal → rational; non-terminating non-repeating → irrational",
        "Real numbers = rational numbers + irrational numbers"
      ],
      terms: [
        { term: "Rational number", meaning: "A number that can be written as p/q with integers p and q, q ≠ 0." },
        { term: "Irrational number", meaning: "A number that cannot be written as a fraction, e.g. √2 and π." },
        { term: "Density of rationals", meaning: "Between any two rational numbers there are infinitely many more." },
        { term: "Real numbers", meaning: "All rational and irrational numbers together; every point on the number line." },
        { term: "Cyclic number", meaning: "A repeating digit block, like 142857 in 1/7, with symmetrical patterns." }
      ],
      examples: [
        {
          q: "Express 0.363636… as a fraction.",
          steps: ["Let x = 0.3636…", "100x = 36.3636…", "Subtract: 100x − x = 36, so 99x = 36.", "x = 36/99 = 4/11."],
          answer: "4/11"
        },
        {
          q: "Find three rational numbers between 1/4 and 1/2.",
          steps: ["Write as decimals: 0.25 and 0.50.", "Choose 0.3, 0.35 and 0.4.", "In fractions: 3/10, 7/20, 2/5."],
          answer: "3/10, 7/20 and 2/5 (many other answers are possible)."
        }
      ],
      qa: [
        { q: "How many rational numbers lie between two given rational numbers? Explain.", a: "Infinitely many. The average of two rationals is rational and lies between them. Repeating this with the new numbers never ends." },
        { q: "How can you tell from its decimal expansion whether a number is rational?", a: "If the decimal terminates or has a repeating block, the number is rational. If it goes on forever without repeating, it is irrational." },
        { q: "Why is √5 shown on the number line using a right triangle?", a: "A right triangle with legs 2 and 1 has hypotenuse √(4 + 1) = √5. Using a compass to mark this length on the number line locates √5." }
      ],
      quiz: [
        { q: "Brahmagupta’s rule ‘the product of two debts is a fortune’ means:", options: ["(−) × (−) = (+)", "(−) × (+) = (+)", "(+) × (+) = (−)", "(−) + (−) = (+)"], answer: 0, explain: "Debts are negative and a fortune is positive." },
        { q: "Which of the following is irrational?", options: ["√2", "0.25", "22/7", "0.333…"], answer: 0, explain: "√2 cannot be written as p/q; the others are terminating, fractional or repeating." },
        { q: "The decimal block that repeats in 1/7 is:", options: ["142857", "285714285", "1428", "14"], answer: 0, explain: "1/7 = 0.142857142857… with a block of six digits." },
        { q: "A rational number between 1/3 and 1/2 is:", options: ["5/12", "1/4", "3/5", "2/3"], answer: 0, explain: "(1/3 + 1/2)/2 = 5/12, which lies between them." },
        { q: "How many rational numbers lie between 0 and 1?", options: ["Exactly 10", "Exactly 100", "None", "Infinitely many"], answer: 3, explain: "Rationals are dense, so there are always more between any two." },
        { q: "The first proof of irrationality, for √2, is credited to:", options: ["Hippasus", "Euclid", "Lambert", "Āryabhaṭa"], answer: 0, explain: "Hippasus (c. 400 BCE) proved by contradiction that √2 is irrational. Lambert proved π is irrational." }
      ]
    },

    // ───────────── 4. Exploring Algebraic Identities ─────────────
    {
      id: "exploring-algebraic-identities",
      title: "Exploring Algebraic Identities",
      section: "Part I",
      summary: "Visualising identities with squares and algebra tiles, using them to factorise and to calculate quickly, finding new identities, and simplifying rational expressions.",
      notes: [
        {
          heading: "Identities and visualising them",
          points: [
            "An **identity** is an equation true for **all** values of the variables.",
            "(x + y)² = x² + 2xy + y² and (x − y)² = x² − 2xy + y². Area of a square of side x + y splits into x², y² and two rectangles xy.",
            "(x + y)(x − y) = x² − y².",
            "(x + a)(x + b) = x² + (a + b)x + ab and (x + y + z)² = x² + y² + z² + 2xy + 2yz + 2zx."
          ]
        },
        {
          heading: "Cubic identities",
          points: [
            "(x + y)³ = x³ + 3x²y + 3xy² + y³ and (x − y)³ = x³ − 3x²y + 3xy² − y³.",
            "x³ + y³ = (x + y)(x² − xy + y²) and x³ − y³ = (x − y)(x² + xy + y²).",
            "x³ + y³ + z³ − 3xyz = (x + y + z)(x² + y² + z² − xy − yz − zx).",
            "So if x + y + z = 0, then x³ + y³ + z³ = 3xyz."
          ]
        },
        {
          heading: "Factorisation using identities",
          points: [
            "Always take out a **common factor** first.",
            "For a difference of squares use x² − y² = (x + y)(x − y), e.g. 9x² − 16 = (3x + 4)(3x − 4).",
            "To factorise x² + bx + c, find two numbers with sum b and product c: x² + 5x + 6 = (x + 2)(x + 3).",
            "Algebra tiles help visualise factorisation: tiles of x², x and 1 arranged as a rectangle give the two factors."
          ]
        },
        {
          heading: "Calculation and rational expressions",
          points: [
            "Identities give fast mental arithmetic: 103² = (100 + 3)² = 10609 and 98 × 102 = 100² − 2² = 9996.",
            "To simplify a rational expression, factorise numerator and denominator and cancel common non-zero factors.",
            "Example: (x² − 9)/(x + 3) = (x − 3)(x + 3)/(x + 3) = x − 3, valid for x ≠ −3.",
            "Useful: x² + y² = (x + y)² − 2xy."
          ]
        }
      ],
      formulas: [
        "(x + y)² = x² + 2xy + y²;  (x − y)² = x² − 2xy + y²",
        "(x + y)(x − y) = x² − y²",
        "(x + a)(x + b) = x² + (a + b)x + ab",
        "(x + y + z)² = x² + y² + z² + 2xy + 2yz + 2zx",
        "x³ + y³ = (x + y)(x² − xy + y²);  x³ − y³ = (x − y)(x² + xy + y²)",
        "x³ + y³ + z³ − 3xyz = (x + y + z)(x² + y² + z² − xy − yz − zx)"
      ],
      terms: [
        { term: "Identity", meaning: "An equation that is true for every value of its variables." },
        { term: "Factorisation", meaning: "Writing an expression as a product of simpler expressions." },
        { term: "Algebra tiles", meaning: "Squares and rectangles of area x², x and 1 used to picture identities and factors." },
        { term: "Rational expression", meaning: "A fraction whose numerator and denominator are polynomials." },
        { term: "Common factor", meaning: "A factor shared by every term of an expression." }
      ],
      examples: [
        {
          q: "Factorise 27x³ − 8.",
          steps: ["27x³ − 8 = (3x)³ − 2³.", "Use a³ − b³ = (a − b)(a² + ab + b²) with a = 3x, b = 2.", "= (3x − 2)(9x² + 6x + 4)."],
          answer: "(3x − 2)(9x² + 6x + 4)"
        },
        {
          q: "If x + y = 5 and xy = 6, find x² + y² and x³ + y³.",
          steps: ["x² + y² = (x + y)² − 2xy = 25 − 12 = 13.", "x³ + y³ = (x + y)(x² − xy + y²) = 5 × (13 − 6) = 35."],
          answer: "x² + y² = 13 and x³ + y³ = 35."
        }
      ],
      qa: [
        { q: "Evaluate 99² using an identity.", a: "99² = (100 − 1)² = 10000 − 200 + 1 = **9801**." },
        { q: "Simplify (x² − 4)/(x² + 5x + 6).", a: "Numerator = (x − 2)(x + 2); denominator = (x + 2)(x + 3). Cancelling (x + 2) gives (x − 2)/(x + 3), provided x ≠ −2." },
        { q: "Show that if a + b + c = 0 then a³ + b³ + c³ = 3abc.", a: "From the identity a³ + b³ + c³ − 3abc = (a + b + c)(…), the right side is 0 when a + b + c = 0, so a³ + b³ + c³ = 3abc." }
      ],
      quiz: [
        { q: "99² equals:", options: ["9801", "9901", "9999", "9701"], answer: 0, explain: "(100 − 1)² = 10000 − 200 + 1 = 9801." },
        { q: "If x + y = 5 and xy = 6, then x² + y² =", options: ["13", "25", "11", "31"], answer: 0, explain: "x² + y² = 25 − 2 × 6 = 13." },
        { q: "9x² − 16 factorises as:", options: ["(3x + 4)(3x − 4)", "(9x + 16)(9x − 16)", "(3x − 4)²", "(3x + 8)(3x − 2)"], answer: 0, explain: "It is (3x)² − 4², a difference of squares." },
        { q: "x³ + y³ equals:", options: ["(x + y)(x² − xy + y²)", "(x + y)(x² + xy + y²)", "(x − y)(x² + xy + y²)", "(x + y)³"], answer: 0, explain: "The sum of cubes has a minus sign on the middle term xy." },
        { q: "x² + 5x + 6 factorises as:", options: ["(x + 2)(x + 3)", "(x + 1)(x + 6)", "(x − 2)(x − 3)", "(x + 5)(x + 1)"], answer: 0, explain: "2 + 3 = 5 and 2 × 3 = 6." },
        { q: "The value of 2³ + (−5)³ + 3³ is:", options: ["−90", "90", "−100", "−120"], answer: 0, explain: "The numbers sum to 0, so the value is 3 × 2 × (−5) × 3 = −90. Direct: 8 − 125 + 27 = −90." }
      ]
    },

    // ───────────── 5. I’m Up and Down, and Round and Round ─────────────
    {
      id: "im-up-and-down-and-round-and-round",
      title: "I’m Up and Down, and Round and Round",
      section: "Part I",
      summary: "Circles: symmetry, chords, arcs, angles at the centre and on the circle, and cyclic quadrilaterals.",
      notes: [
        {
          heading: "Circle basics and symmetry",
          points: [
            "A **circle** is the set of all points in a plane at a fixed distance (radius) from a fixed point (centre).",
            "It has reflection symmetry about any diameter and rotational symmetry about the centre through any angle.",
            "Infinitely many circles pass through two given points; their centres lie on the **perpendicular bisector** of the segment joining the points.",
            "Through three non-collinear points there is **exactly one circle**, the circumcircle. Its centre, the circumcentre, is where the perpendicular bisectors meet."
          ]
        },
        {
          heading: "Chords",
          points: [
            "Equal chords subtend equal angles at the centre, and conversely.",
            "The line from the centre to the midpoint of a chord is **perpendicular** to the chord; a perpendicular from the centre bisects the chord.",
            "Equal chords are equally distant from the centre, and conversely.",
            "Of two unequal chords, the **longer is closer** to the centre."
          ]
        },
        {
          heading: "Angles in a circle",
          points: [
            "The angle subtended by an arc at the centre is **twice** the angle it subtends at any point on the remaining part of the circle.",
            "Angles in the same segment are equal.",
            "The angle subtended by a diameter at any point on the circle is **90°** (angle in a semicircle).",
            "If a segment subtends equal angles at two points on the same side, the four points are **concyclic**."
          ]
        },
        {
          heading: "Cyclic quadrilaterals",
          points: [
            "A quadrilateral whose four vertices lie on a circle is **cyclic**.",
            "Its opposite angles add up to **180°**.",
            "Converse: if opposite angles of a quadrilateral add up to 180°, it is cyclic.",
            "Exterior angle of a cyclic quadrilateral equals the interior opposite angle."
          ]
        }
      ],
      formulas: [
        "Angle at centre = 2 × angle at the circumference on the same arc",
        "Angle in a semicircle = 90°",
        "Cyclic quadrilateral: ∠A + ∠C = 180° and ∠B + ∠D = 180°",
        "Perpendicular from centre to a chord of length 2c in a circle of radius r: distance d = √(r² − c²)"
      ],
      terms: [
        { term: "Chord", meaning: "A line segment joining two points on a circle." },
        { term: "Circumcircle", meaning: "The unique circle passing through the three vertices of a triangle." },
        { term: "Concyclic points", meaning: "Points that all lie on one circle." },
        { term: "Cyclic quadrilateral", meaning: "A quadrilateral with all four vertices on a circle." },
        { term: "Subtend", meaning: "An arc or chord subtends an angle at a point when lines from the point to its ends form that angle." }
      ],
      examples: [
        {
          q: "A chord of length 24 cm is in a circle of radius 13 cm. Find its distance from the centre.",
          steps: ["The perpendicular from the centre bisects the chord: half-length = 12 cm.", "Distance d satisfies d² + 12² = 13².", "d² = 169 − 144 = 25, so d = 5."],
          answer: "5 cm"
        },
        {
          q: "In a cyclic quadrilateral ABCD, ∠A = 70° and ∠B = 95°. Find ∠C and ∠D.",
          steps: ["Opposite angles sum to 180°.", "∠C = 180° − 70° = 110°.", "∠D = 180° − 95° = 85°."],
          answer: "∠C = 110°, ∠D = 85°"
        }
      ],
      qa: [
        { q: "An arc subtends 100° at the centre. What angle does it subtend at a point on the remaining part of the circle?", a: "The angle at the circumference is half the angle at the centre, so 100° ÷ 2 = **50°**." },
        { q: "Why is the angle in a semicircle 90°?", a: "A diameter subtends 180° at the centre. The angle at any point on the circle is half of that, i.e. 90°." }
      ],
      quiz: [
        { q: "The angle subtended by a diameter at a point on the circle is:", options: ["90°", "180°", "45°", "60°"], answer: 0, explain: "Half of the 180° at the centre." },
        { q: "The line from the centre to the midpoint of a chord is:", options: ["Perpendicular to the chord", "Parallel to the chord", "Equal to the chord", "Tangent to the circle"], answer: 0, explain: "The centre lies on the perpendicular bisector of every chord." },
        { q: "In a cyclic quadrilateral ABCD, if ∠A = 105°, then ∠C =", options: ["75°", "105°", "85°", "255°"], answer: 0, explain: "Opposite angles add to 180°." },
        { q: "An arc subtends 80° at the centre. At a point on the remaining circle it subtends:", options: ["40°", "160°", "80°", "100°"], answer: 0, explain: "It is half the central angle." },
        { q: "How many circles pass through three non-collinear points?", options: ["Exactly one", "Exactly two", "Infinitely many", "None"], answer: 0, explain: "The perpendicular bisectors meet at one circumcentre." },
        { q: "Of two unequal chords of a circle, the longer chord is:", options: ["Closer to the centre", "Farther from the centre", "At the same distance", "Always a diameter"], answer: 0, explain: "Distance from the centre decreases as the chord gets longer." }
      ]
    },

    // ───────────── 6. Measuring Space: Perimeter and Area ─────────────
    {
      id: "measuring-space-perimeter-and-area",
      title: "Measuring Space: Perimeter and Area",
      section: "Part I",
      summary: "Circumference, arc length and area of circles and sectors, the story of π, Heron’s formula for triangles and Brahmagupta’s formula for cyclic quadrilaterals.",
      notes: [
        {
          heading: "Circle and π",
          points: [
            "π is the constant ratio of circumference to diameter, about 22/7 or 3.14. It is irrational.",
            "Circumference C = 2πr; area A = πr².",
            "Historical estimates: Archimedes 3 10/71 < π < 3 1/7; Chongzhi 355/113; Āryabhaṭa 3.1416.",
            "Mādhava’s series: π = 4(1 − 1/3 + 1/5 − 1/7 + …)."
          ]
        },
        {
          heading: "Arc and sector",
          points: [
            "For a central angle θ°, arc length l = 2πr × θ/360.",
            "Area of the sector = πr² × θ/360.",
            "A sector is a fraction θ/360 of the whole circle, so both formulas are the full values multiplied by that fraction.",
            "A semicircle is the case θ = 180°."
          ]
        },
        {
          heading: "Heron’s formula",
          points: [
            "Area of a triangle = ½ × base × height.",
            "If sides are a, b, c and s = (a + b + c)/2 (semi-perimeter), then area = √[s(s − a)(s − b)(s − c)].",
            "It is used when the height is not given.",
            "Example: sides 13, 14, 15 give s = 21 and area √(21 × 8 × 7 × 6) = 84."
          ]
        },
        {
          heading: "Cyclic quadrilaterals: Brahmagupta’s formula",
          points: [
            "For a cyclic quadrilateral with sides a, b, c, d and s = (a + b + c + d)/2, area = √[(s − a)(s − b)(s − c)(s − d)].",
            "It reduces to Heron’s formula when one side is 0.",
            "Check: a 3 × 4 rectangle is cyclic; s = 7, area = √(4 × 3 × 4 × 3) = 12."
          ]
        }
      ],
      formulas: [
        "Circumference = 2πr;  Area = πr²",
        "Arc length = 2πr × θ/360",
        "Sector area = πr² × θ/360",
        "Heron: area = √[s(s − a)(s − b)(s − c)], s = (a + b + c)/2",
        "Brahmagupta (cyclic quadrilateral): area = √[(s − a)(s − b)(s − c)(s − d)], s = (a + b + c + d)/2"
      ],
      terms: [
        { term: "π (pi)", meaning: "The ratio of a circle’s circumference to its diameter; an irrational number." },
        { term: "Sector", meaning: "The region of a circle between two radii and the arc they cut." },
        { term: "Semi-perimeter", meaning: "Half the perimeter of a polygon, denoted s." },
        { term: "Arc length", meaning: "The length along the circle between two points." },
        { term: "Heron’s formula", meaning: "A formula giving a triangle’s area from its three sides." }
      ],
      examples: [
        {
          q: "Find the arc length and area of a sector of radius 21 cm with central angle 60°. (Use π = 22/7)",
          steps: ["Arc length = 2 × (22/7) × 21 × (60/360) = 132 × 1/6 = 22 cm.", "Area = (22/7) × 21² × (1/6) = (22/7) × 441 / 6 = 1386/6 = 231 cm²."],
          answer: "Arc length = 22 cm; area = 231 cm²."
        },
        {
          q: "Find the area of a triangle with sides 5 cm, 12 cm and 13 cm using Heron’s formula.",
          steps: ["s = (5 + 12 + 13)/2 = 15.", "Area = √[15 × 10 × 3 × 2] = √900 = 30."],
          answer: "30 cm²"
        }
      ],
      qa: [
        { q: "Find the area of a circle of radius 14 cm (π = 22/7).", a: "A = πr² = (22/7) × 14 × 14 = 22 × 28 = **616 cm²**." },
        { q: "Why is Heron’s formula useful?", a: "It gives the area from only the three side lengths, with no need to find the height. Compute s, then take √[s(s − a)(s − b)(s − c)]." }
      ],
      quiz: [
        { q: "The circumference of a circle of radius 7 cm (π = 22/7) is:", options: ["44 cm", "22 cm", "154 cm", "49 cm"], answer: 0, explain: "2 × (22/7) × 7 = 44." },
        { q: "The area of a triangle with sides 6, 8 and 10 cm is:", options: ["24 cm²", "48 cm²", "30 cm²", "40 cm²"], answer: 0, explain: "s = 12; area = √(12 × 6 × 4 × 2) = √576 = 24." },
        { q: "The semi-perimeter of a triangle with sides 9, 10 and 11 is:", options: ["15", "30", "10", "20"], answer: 0, explain: "(9 + 10 + 11)/2 = 15." },
        { q: "The approximation π ≈ 355/113 is due to:", options: ["Chongzhi", "Archimedes", "Brahmagupta", "Euclid"], answer: 0, explain: "Chongzhi gave 355/113. Archimedes gave bounds 3 10/71 < π < 3 1/7." },
        { q: "The area of a sector of angle 90° in a circle of radius r is:", options: ["πr²/4", "πr²/2", "πr²/360", "2πr/4"], answer: 0, explain: "90/360 = 1/4 of the full circle area." },
        { q: "A rectangle 3 cm × 4 cm is cyclic. Brahmagupta’s formula gives its area as:", options: ["12 cm²", "7 cm²", "24 cm²", "6 cm²"], answer: 0, explain: "s = 7, area = √(4 × 3 × 4 × 3) = 12." }
      ]
    },

    // ───────────── 7. The Mathematics of Maybe ─────────────
    {
      id: "the-mathematics-of-maybe-introduction-to-probability",
      title: "The Mathematics of Maybe: Introduction to Probability",
      section: "Part I",
      summary: "Measuring likelihood: experimental and theoretical probability, sample spaces, events and tree diagrams.",
      notes: [
        {
          heading: "Probability scale",
          points: [
            "Probability measures how likely an event E is, written P(E), with **0 ≤ P(E) ≤ 1**.",
            "An impossible event has probability 0; a certain event has probability 1.",
            "Probabilities can be written as fractions, decimals or percentages.",
            "Randomness: individual outcomes are unpredictable, but patterns appear over many trials."
          ]
        },
        {
          heading: "Experimental probability",
          points: [
            "Perform an experiment many times and record the results.",
            "Experimental probability = number of times the event occurred ÷ total number of trials.",
            "Example: 18 heads in 40 tosses gives 18/40 = 9/20.",
            "The more trials, the closer it tends to get to the theoretical value."
          ]
        },
        {
          heading: "Theoretical probability",
          points: [
            "If all outcomes are **equally likely**, P(A) = number of favourable outcomes ÷ number of possible outcomes.",
            "Example: for a fair die, P(a prime) = 3/6 = 1/2 (primes 2, 3, 5).",
            "P(E) + P(not E) = 1.",
            "A bag with 3 red, 5 blue and 2 green balls: P(not blue) = 5/10 = 1/2."
          ]
        },
        {
          heading: "Sample space, events and tree diagrams",
          points: [
            "The **sample space** S is the list of all possible outcomes; an **event** is one or more of those outcomes.",
            "Two coins: S = {HH, HT, TH, TT}; three coins have 8 outcomes.",
            "A **tree diagram** lists outcomes of successive stages by branches.",
            "Example: P(at least one head) with two coins = 3/4."
          ]
        }
      ],
      formulas: [
        "0 ≤ P(E) ≤ 1",
        "Experimental P(E) = (times E occurred) ÷ (total trials)",
        "Theoretical P(A) = (favourable outcomes) ÷ (all equally likely outcomes)",
        "P(E) + P(not E) = 1"
      ],
      terms: [
        { term: "Sample space", meaning: "The set of all possible outcomes of a random experiment." },
        { term: "Event", meaning: "One outcome or a group of outcomes from the sample space." },
        { term: "Experimental probability", meaning: "Probability found from the results of actually performing trials." },
        { term: "Theoretical probability", meaning: "Probability found by reasoning about equally likely outcomes." },
        { term: "Tree diagram", meaning: "A branching diagram that lists all outcomes of a multi-stage experiment." }
      ],
      examples: [
        {
          q: "Two fair coins are tossed. Find the probability of getting exactly one head.",
          steps: ["Sample space = {HH, HT, TH, TT}: 4 equally likely outcomes.", "Exactly one head: HT, TH → 2 outcomes.", "P = 2/4 = 1/2."],
          answer: "1/2"
        },
        {
          q: "A die is thrown once. Find P(number greater than 4).",
          steps: ["Possible outcomes: 6.", "Favourable: 5 and 6 → 2.", "P = 2/6 = 1/3."],
          answer: "1/3"
        }
      ],
      qa: [
        { q: "What is the difference between experimental and theoretical probability?", a: "Experimental probability comes from the outcomes actually observed in trials. Theoretical probability is calculated by counting favourable outcomes among equally likely ones, without performing the experiment." },
        { q: "Can the probability of an event be 1.5 or −0.2? Why?", a: "No. Probability lies between 0 and 1 because favourable outcomes can never be fewer than 0 or more than all possible outcomes." }
      ],
      quiz: [
        { q: "The probability of any event lies between:", options: ["0 and 1", "−1 and 1", "0 and 100", "1 and 10"], answer: 0, explain: "0 ≤ P(E) ≤ 1." },
        { q: "The probability of a sure event is:", options: ["1", "0", "1/2", "100"], answer: 0, explain: "A certain event always occurs." },
        { q: "When two coins are tossed, P(at least one head) =", options: ["3/4", "1/2", "1/4", "2/3"], answer: 0, explain: "HH, HT, TH favour out of 4 outcomes." },
        { q: "When a die is thrown, P(number greater than 4) =", options: ["1/3", "1/2", "1/6", "2/3"], answer: 0, explain: "5 and 6 are favourable: 2/6 = 1/3." },
        { q: "How many outcomes are in the sample space of tossing three coins?", options: ["8", "6", "4", "3"], answer: 0, explain: "2 × 2 × 2 = 8." },
        { q: "It rained on 12 of 30 days observed. The experimental probability of rain is:", options: ["2/5", "12/18", "1/2", "3/5"], answer: 0, explain: "12/30 = 2/5." }
      ]
    },

    // ───────────── 8. Predicting What Comes Next ─────────────
    {
      id: "predicting-what-comes-next-exploring-sequences-and-progressions",
      title: "Predicting What Comes Next: Exploring Sequences and Progressions",
      section: "Part I",
      summary: "Sequences with explicit and recursive rules, triangular numbers, the Virahānka–Fibonacci sequence, arithmetic and geometric progressions, and fractals.",
      notes: [
        {
          heading: "Sequences and rules",
          points: [
            "A **sequence** is an ordered list of numbers; each number is a **term**.",
            "An **explicit formula** gives the nth term from its position n directly.",
            "A **recursive formula** gives a term using earlier terms.",
            "The Virahānka–Fibonacci sequence 1, 1, 2, 3, 5, 8, 13, 21, … adds the previous two terms. Virahānka described it in the 7th century CE."
          ]
        },
        {
          heading: "Triangular numbers",
          points: [
            "1, 3, 6, 10, 15, … are triangular numbers; each term is the sum of natural numbers up to its position.",
            "Sum of first n natural numbers: S = 1 + 2 + … + n. Writing it reversed and adding gives 2S = n(n + 1).",
            "So **S = n(n + 1)/2**, which is also the nth triangular number.",
            "Example: 1 + 2 + … + 100 = 100 × 101/2 = 5050."
          ]
        },
        {
          heading: "Arithmetic progression (AP)",
          points: [
            "Each term is obtained by **adding a fixed number d** (common difference) to the previous term.",
            "General form: a, a + d, a + 2d, …; **nth term tₙ = a + (n − 1)d**.",
            "Example: 5, 9, 13, … has a = 5, d = 4 and t₂₅ = 5 + 24 × 4 = 101.",
            "A linear pattern is an AP."
          ]
        },
        {
          heading: "Geometric progression (GP) and fractals",
          points: [
            "Each term is obtained by **multiplying by a fixed number r** (common ratio).",
            "General form: a, ar, ar², …; **nth term tₙ = arⁿ⁻¹**.",
            "Example: 3, 6, 12, … has r = 2 and t₈ = 3 × 2⁷ = 384.",
            "Fractals like the Sierpiński triangle and carpet produce GPs: at each stage the number of shapes or area changes by a fixed ratio."
          ]
        }
      ],
      formulas: [
        "AP: tₙ = a + (n − 1)d",
        "GP: tₙ = a rⁿ⁻¹",
        "Triangular number / sum of first n natural numbers: n(n + 1)/2",
        "Virahānka–Fibonacci: tₙ = tₙ₋₁ + tₙ₋₂"
      ],
      terms: [
        { term: "Sequence", meaning: "An ordered list of numbers called terms." },
        { term: "Recursive formula", meaning: "A rule that gives a term from one or more previous terms." },
        { term: "Common difference", meaning: "The fixed amount d added to get the next term in an AP." },
        { term: "Common ratio", meaning: "The fixed multiplier r used to get the next term in a GP." },
        { term: "Fractal", meaning: "A pattern that repeats at smaller scales, such as the Sierpiński triangle." }
      ],
      examples: [
        {
          q: "Find the 17th and 80th triangular numbers.",
          steps: ["tₙ = n(n + 1)/2.", "t₁₇ = 17 × 18/2 = 153.", "t₈₀ = 80 × 81/2 = 3240."],
          answer: "t₁₇ = 153 and t₈₀ = 3240."
        },
        {
          q: "Find the 10th term of the AP 2, 5, 8, … and the 6th term of the GP 2, 6, 18, …",
          steps: ["AP: a = 2, d = 3, t₁₀ = 2 + 9 × 3 = 29.", "GP: a = 2, r = 3, t₆ = 2 × 3⁵ = 2 × 243 = 486."],
          answer: "AP: 29; GP: 486."
        }
      ],
      qa: [
        { q: "How do you tell whether a sequence is an AP or a GP?", a: "If consecutive differences are equal it is an AP (2, 5, 8, …). If consecutive ratios are equal it is a GP (3, 6, 12, …)." },
        { q: "Derive the sum of the first n natural numbers.", a: "Let S = 1 + 2 + … + n and also S = n + (n − 1) + … + 1. Adding term by term gives 2S = n(n + 1), because each of the n pairs adds to n + 1. So S = n(n + 1)/2." }
      ],
      quiz: [
        { q: "The 10th term of the AP 2, 5, 8, … is:", options: ["29", "32", "26", "27"], answer: 0, explain: "2 + 9 × 3 = 29." },
        { q: "The common ratio of the GP 2, 6, 18, … is:", options: ["3", "4", "2", "9"], answer: 0, explain: "6/2 = 3." },
        { q: "The sum 1 + 2 + 3 + … + 20 is:", options: ["210", "200", "420", "190"], answer: 0, explain: "20 × 21/2 = 210." },
        { q: "In the Virahānka–Fibonacci sequence 1, 1, 2, 3, 5, 8, 13, the next term is:", options: ["21", "20", "18", "26"], answer: 0, explain: "8 + 13 = 21." },
        { q: "Which list is a GP?", options: ["3, 6, 12, 24", "3, 6, 9, 12", "3, 5, 8, 12", "1, 4, 9, 16"], answer: 0, explain: "Each term is double the previous one." },
        { q: "The 12th triangular number is:", options: ["78", "66", "144", "72"], answer: 0, explain: "12 × 13/2 = 78." }
      ]
    },

    // ───────────── 9. Propositions and their Converses ─────────────
    {
      id: "propositions-and-their-converses",
      title: "Propositions and their Converses",
      section: "Part II",
      summary: "Statements of the form ‘if P then Q’, their converses, and how counterexamples show that a statement is false.",
      notes: [
        {
          heading: "Propositions and converses",
          points: [
            "A **proposition** is a statement that is either true or false.",
            "A statement ‘if X then Y’ (also ‘X implies Y’ or ‘Y when X’) has the **converse** ‘if Y then X’.",
            "Example: ‘If two sides of a triangle are equal, the opposite angles are equal.’ Its converse: ‘If two angles are equal, the opposite sides are equal.’ Both are true.",
            "A statement and its converse are **different** statements and must be checked separately."
          ]
        },
        {
          heading: "Three possibilities",
          points: [
            "A proposition may be true while its converse is false: ‘If it rains, the road is wet’; the road may be wet for other reasons.",
            "Both may be true: ‘n is a perfect square’ ⇔ ‘n has an odd number of factors’.",
            "Both may be false.",
            "‘If a number is a multiple of 6, it is a multiple of 3’ is true; its converse is false (9 is a multiple of 3 but not of 6)."
          ]
        },
        {
          heading: "Counterexamples",
          points: [
            "A **counterexample** is a single case that satisfies the condition but not the conclusion; it proves a statement false.",
            "Fermat claimed 2^(2ⁿ) + 1 is always prime; Euler disproved it by showing 2^(2⁵) + 1 is composite.",
            "‘If two triangles have the same area, they are congruent’ is false (right triangles with legs 6, 2 and legs 4, 3 both have area 6 but are not congruent). Its converse is true.",
            "To show a statement true you need a proof for all cases; examples alone do not prove it."
          ]
        },
        {
          heading: "Converse of the Pythagoras theorem",
          points: [
            "Theorem: if a triangle is right-angled, then a² + b² = c².",
            "Converse: if a² + b² = c², then the triangle is right-angled. It is **true**.",
            "Proof idea: build a right triangle with legs a and b; its hypotenuse is c, so the triangles are congruent by SSS.",
            "Use: sides 5, 12, 13 form a right triangle because 25 + 144 = 169."
          ]
        }
      ],
      formulas: [
        "Converse of ‘if P then Q’ is ‘if Q then P’",
        "A single counterexample disproves a statement",
        "Converse of Pythagoras: a² + b² = c² ⇒ right triangle",
        "A perfect square has an odd number of factors, and conversely"
      ],
      terms: [
        { term: "Proposition", meaning: "A statement that is definitely true or false." },
        { term: "Converse", meaning: "The statement obtained by swapping ‘if’ and ‘then’ parts." },
        { term: "Counterexample", meaning: "An example that meets the condition of a statement but not its conclusion." },
        { term: "Implies", meaning: "‘X implies Y’ means that whenever X is true, Y is true." }
      ],
      examples: [
        {
          q: "Write the converse of ‘If a number is divisible by 4, it is even’ and decide whether each is true.",
          steps: ["Original: a multiple of 4 is 4k = 2(2k), which is even, so it is true.", "Converse: ‘If a number is even, it is divisible by 4’.", "Counterexample: 6 is even but 6 ÷ 4 is not a whole number."],
          answer: "The original is true; the converse is false (counterexample 6)."
        },
        {
          q: "Is a triangle with sides 7, 24 and 25 right-angled?",
          steps: ["Check 7² + 24² = 49 + 576 = 625.", "25² = 625.", "a² + b² = c², so by the converse of Pythagoras the triangle is right-angled."],
          answer: "Yes, the right angle is opposite the side 25."
        }
      ],
      qa: [
        { q: "What is a counterexample? Give one for ‘every multiple of 3 is a multiple of 6’.", a: "A counterexample is a case that shows a statement is false. 9 is a multiple of 3 but not of 6, so the statement is false." },
        { q: "Does a true proposition always have a true converse?", a: "No. ‘If a number is a multiple of 6, it is a multiple of 3’ is true but its converse is false. Some propositions and their converses are both true, such as the Pythagoras theorem and its converse." }
      ],
      quiz: [
        { q: "The converse of ‘if P then Q’ is:", options: ["If Q then P", "If not P then not Q", "If P then not Q", "P and Q"], answer: 0, explain: "The converse swaps the hypothesis and the conclusion." },
        { q: "A single example showing a statement is false is called a:", options: ["Counterexample", "Converse", "Axiom", "Corollary"], answer: 0, explain: "One counterexample is enough to disprove a proposition." },
        { q: "Which number is a counterexample to ‘every multiple of 3 is a multiple of 6’?", options: ["9", "12", "18", "24"], answer: 0, explain: "9 is a multiple of 3 but not of 6; 12, 18 and 24 are multiples of both." },
        { q: "Euler disproved Fermat’s claim by showing that which number is composite?", options: ["2^(2⁵) + 1", "2^(2³) + 1", "2^(2²) + 1", "2^(2¹) + 1"], answer: 0, explain: "The claim was that all 2^(2ⁿ) + 1 are prime; for n = 5 it is not." },
        { q: "Which statement is true but has a false converse?", options: ["If two triangles are congruent, they have equal areas", "A number has an odd number of factors if it is a perfect square", "If a² + b² = c², the triangle is right-angled", "If two angles of a triangle are equal, the opposite sides are equal"], answer: 0, explain: "Triangles with equal area need not be congruent. The other three have true converses." },
        { q: "36 is a perfect square. Its number of factors is:", options: ["9", "8", "10", "6"], answer: 0, explain: "36 has factors 1, 2, 3, 4, 6, 9, 12, 18, 36: nine, an odd number." }
      ]
    },

    // ───────────── 10. How Quantities Combine: Understanding Data ─────────────
    {
      id: "how-quantities-combine-understanding-data",
      title: "How Quantities Combine: Understanding Data",
      section: "Part II",
      summary: "Weighted averages in daily life, averages of averages, mixtures and rating schemes, and stacked and 100% stacked bar charts.",
      notes: [
        {
          heading: "Weighted mean",
          points: [
            "When data values have different importance or counts, use the **weighted mean**: x̄ = (w₁x₁ + w₂x₂ + … + wₙxₙ)/(w₁ + w₂ + … + wₙ).",
            "A weight can be a count, a percentage or a level of importance.",
            "The ordinary mean is the case where all weights are equal.",
            "Example: marks 80 (weight 2) and 90 (weight 3): (160 + 270)/5 = 86."
          ]
        },
        {
          heading: "Average of averages",
          points: [
            "You cannot simply average two group means unless the groups are of equal size.",
            "Use the group sizes as weights. If 20 students average 60 and 30 average 70, the overall mean is (1200 + 2100)/50 = 66, not 65.",
            "The same idea gives the new mean when a value is added to or removed from data."
          ]
        },
        {
          heading: "Mixtures and ratings",
          points: [
            "Concentration of a mixture is a weighted average of the parts, weighted by volume.",
            "Example: 4 L of 10% solution + 6 L of 20% solution = (0.4 + 1.2)/10 = 16%.",
            "Rating and marking schemes weight components differently, e.g. a final exam may count more than a quiz."
          ]
        },
        {
          heading: "Stacked bar charts",
          points: [
            "A **stacked bar chart** divides each bar into parts, so you can see both totals and the contribution of each part.",
            "A **100% stacked bar chart** makes every bar the same height and compares **proportions**, like a pie chart, not absolute values.",
            "A 100% stacked chart can be made from a stacked chart, but **not the other way round**, since totals are lost."
          ]
        }
      ],
      formulas: [
        "Weighted mean = (w₁x₁ + w₂x₂ + … + wₙxₙ) ÷ (w₁ + w₂ + … + wₙ)",
        "Combined mean of two groups = (n₁x̄₁ + n₂x̄₂) ÷ (n₁ + n₂)",
        "Mixture concentration = total pure substance ÷ total volume"
      ],
      terms: [
        { term: "Weighted mean", meaning: "An average in which each value counts according to its weight." },
        { term: "Weight", meaning: "The count or importance assigned to a value in a weighted mean." },
        { term: "Stacked bar chart", meaning: "A bar chart whose bars are divided into stacked parts." },
        { term: "100% stacked bar chart", meaning: "A stacked chart in which every bar is scaled to 100%, showing proportions." },
        { term: "Concentration", meaning: "The fraction of a mixture that is the pure substance." }
      ],
      examples: [
        {
          q: "10 boys average 40 marks and 20 girls average 70 marks. Find the average of all 30 students.",
          steps: ["Total marks of boys = 10 × 40 = 400.", "Total marks of girls = 20 × 70 = 1400.", "Mean = (400 + 1400)/30 = 1800/30 = 60."],
          answer: "60 marks (not 55, the simple average)."
        },
        {
          q: "The mean of five numbers is 20. A sixth number 38 is added. Find the new mean.",
          steps: ["Sum of five numbers = 5 × 20 = 100.", "New sum = 100 + 38 = 138.", "New mean = 138/6 = 23."],
          answer: "23"
        }
      ],
      qa: [
        { q: "Why is the average of two class averages not always the combined average?", a: "Classes can differ in size. A larger class should count more, so use the number of students as weights. Only when sizes are equal does the simple average work." },
        { q: "What does a 100% stacked bar chart show that a stacked bar chart may hide?", a: "It shows proportions clearly, since all bars have equal height. It hides the totals, which a stacked bar chart shows by bar height." }
      ],
      quiz: [
        { q: "10 boys average 40 and 20 girls average 70. The overall average is:", options: ["60", "55", "50", "65"], answer: 0, explain: "(400 + 1400)/30 = 60." },
        { q: "The mean of 5 numbers is 20. After adding 38, the mean of the 6 numbers is:", options: ["23", "24", "29", "19"], answer: 0, explain: "(100 + 38)/6 = 23." },
        { q: "2 L of a 50% solution is mixed with 3 L of plain water. The concentration is:", options: ["20%", "25%", "50%", "10%"], answer: 0, explain: "1 L of pure substance in 5 L is 20%." },
        { q: "A 100% stacked bar chart is best for comparing:", options: ["Proportions", "Exact totals", "Median values", "Rates of change"], answer: 0, explain: "Every bar has the same height, so only shares can be compared." },
        { q: "Scores 80 and 90 have weights 2 and 3. The weighted mean is:", options: ["86", "85", "87", "84"], answer: 0, explain: "(160 + 270)/5 = 86." },
        { q: "From which chart can the other always be obtained?", options: ["Stacked → 100% stacked", "100% stacked → stacked", "Both ways", "Neither way"], answer: 0, explain: "Converting a stacked chart to percentages is possible; recovering totals from percentages is not." }
      ]
    },

    // ───────────── 11. The World of Algorithms ─────────────
    {
      id: "the-world-of-algorithms",
      title: "The World of Algorithms",
      section: "Part II",
      summary: "What an algorithm is, how to design and justify one using addition and the greatest common divisor, and Euclid’s efficient remainder-based algorithm.",
      notes: [
        {
          heading: "What is an algorithm?",
          points: [
            "An **algorithm** is a systematic procedure to solve a problem, built from basic steps we know how to do.",
            "A step may be repeated (for each j from 1 to n) or **conditional** (add j to the list only if j divides n).",
            "We must **justify** that an algorithm is correct and can analyse how many steps it takes for an input of a given size.",
            "Adding digits column by column from the right is an algorithm that assumes we can add single digits directly."
          ]
        },
        {
          heading: "Efficiency",
          points: [
            "Counting dots to add two numbers is slow: each extra digit makes ten times as many dots.",
            "The column method needs only one more column for each extra digit, so it is much faster.",
            "An efficient algorithm takes far fewer steps as the input grows."
          ]
        },
        {
          heading: "Greatest common divisor (gcd)",
          points: [
            "gcd(m, n) is the largest number that divides both m and n.",
            "Simple algorithm: list divisors of each number and pick the largest common one; this is slow for big numbers.",
            "Key fact (for m ≥ n): a number d divides both m and n **if and only if** d divides both n and m − n. So gcd(m, n) = gcd(n, m − n).",
            "Also gcd(m, 0) = m."
          ]
        },
        {
          heading: "Euclid’s algorithm",
          points: [
            "Subtraction version: if m < n swap; if n = 0 answer m; else replace the problem by gcd(n, m − n).",
            "Improved version uses the remainder: gcd(m, n) = gcd(n, m mod n), where m mod n is the remainder on dividing m by n (17 mod 5 = 2).",
            "Repeat until the remainder is 0; the last non-zero number is the gcd.",
            "Example: gcd(48, 18): 48 mod 18 = 12; 18 mod 12 = 6; 12 mod 6 = 0, so the gcd is 6."
          ]
        }
      ],
      formulas: [
        "gcd(m, n) = gcd(n, m − n)  for m ≥ n",
        "gcd(m, n) = gcd(n, m mod n)",
        "gcd(m, 0) = m"
      ],
      terms: [
        { term: "Algorithm", meaning: "A step-by-step systematic procedure for solving a problem." },
        { term: "gcd", meaning: "The greatest common divisor, the largest number dividing two given numbers." },
        { term: "mod", meaning: "m mod n is the remainder when m is divided by n." },
        { term: "Conditional step", meaning: "A step done only if a stated condition is true." },
        { term: "Efficiency", meaning: "How few steps an algorithm needs as the input becomes larger." }
      ],
      examples: [
        {
          q: "Use Euclid’s remainder algorithm to find gcd(375, 825).",
          steps: ["825 mod 375 = 825 − 750 = 75, so gcd(825, 375) = gcd(375, 75).", "375 mod 75 = 0, so gcd(375, 75) = gcd(75, 0).", "gcd(75, 0) = 75."],
          answer: "75"
        },
        {
          q: "Find gcd(51000, 81000) by Euclid’s algorithm.",
          steps: ["81000 mod 51000 = 30000.", "51000 mod 30000 = 21000.", "30000 mod 21000 = 9000.", "21000 mod 9000 = 3000.", "9000 mod 3000 = 0, so the answer is 3000."],
          answer: "3000"
        }
      ],
      qa: [
        { q: "Why does gcd(m, n) equal gcd(n, m − n)?", a: "Any number dividing both m and n also divides their difference m − n. Conversely, a number dividing n and m − n divides their sum m. So both pairs have exactly the same common divisors, hence the same greatest one." },
        { q: "Why is the column method of addition more efficient than counting dots?", a: "Adding one more digit multiplies the dots by 10 but adds only one column to the column method. The number of steps grows slowly with the size of the numbers." }
      ],
      quiz: [
        { q: "gcd(84, 36) is:", options: ["12", "6", "4", "18"], answer: 0, explain: "84 mod 36 = 12; 36 mod 12 = 0, so gcd = 12." },
        { q: "17 mod 5 equals:", options: ["2", "3", "12", "5"], answer: 0, explain: "17 = 3 × 5 + 2." },
        { q: "In Euclid’s improved algorithm, gcd(m, n) is replaced by:", options: ["gcd(n, m mod n)", "gcd(m + n, n)", "gcd(m, m − n) always", "gcd(m × n, n)"], answer: 0, explain: "It replaces repeated subtraction by a remainder." },
        { q: "gcd(m, 0) equals:", options: ["m", "0", "1", "m²"], answer: 0, explain: "Every number divides 0, so the largest common divisor is m itself." },
        { q: "The gcd of 375 and 825 is:", options: ["75", "125", "25", "375"], answer: 0, explain: "825 mod 375 = 75 and 375 mod 75 = 0." },
        { q: "Adding two 5-digit numbers by the column method instead of 3-digit ones needs about how many extra columns?", options: ["2", "100", "10", "5"], answer: 0, explain: "Only two more columns, while dot counting needs 100 times as many dots." }
      ]
    },

    // ───────────── 12. Quadrilaterals ─────────────
    {
      id: "quadrilaterals",
      title: "Quadrilaterals",
      section: "Part II",
      summary: "Parallelograms and their converses, the midpoint theorem and its converse, medians and the centroid, and the parallelogram formed by joining midpoints of a quadrilateral.",
      notes: [
        {
          heading: "Quadrilaterals and parallelograms",
          points: [
            "A quadrilateral (4-gon) ABCD has four points, no three collinear, joined by sides AB, BC, CD, DA that meet only at the vertices.",
            "It is **convex** if all interior angles are less than 180°, equivalently if its diagonals intersect.",
            "In a parallelogram: opposite sides are equal and parallel, opposite angles are equal, diagonals bisect each other and adjacent angles add to 180°.",
            "Angle sum of a quadrilateral is 360°."
          ]
        },
        {
          heading: "Converses: when is a 4-gon a parallelogram?",
          points: [
            "If opposite sides are equal, it is a parallelogram.",
            "If opposite angles are equal, it is a parallelogram.",
            "If the diagonals bisect each other, it is a parallelogram.",
            "If one pair of opposite sides is **equal and parallel**, it is a parallelogram."
          ]
        },
        {
          heading: "Midpoint theorem",
          points: [
            "The line segment joining the midpoints of two sides of a triangle is **parallel to the third side** and **half its length**.",
            "Converse: a line through the midpoint of one side and parallel to a second side bisects the third side.",
            "Example: if BC = 14 cm, the segment joining the midpoints of AB and AC is 7 cm."
          ]
        },
        {
          heading: "Medians, centroid and midpoint 4-gon",
          points: [
            "The three medians of a triangle are **concurrent** at the **centroid**, which divides each median in the ratio **2 : 1** from the vertex.",
            "Joining the midpoints of the sides of **any** 4-gon in order gives a **parallelogram** (Varignon’s theorem).",
            "The plane can be tiled using copies of any 4-gon."
          ]
        }
      ],
      formulas: [
        "Midpoint theorem: DE ∥ BC and DE = ½ BC",
        "Centroid divides each median 2 : 1 (vertex to centroid : centroid to midpoint)",
        "Angle sum of a quadrilateral = 360°",
        "Parallelogram: adjacent angles sum to 180°"
      ],
      terms: [
        { term: "Convex quadrilateral", meaning: "One whose interior angles are all less than 180°; its diagonals intersect." },
        { term: "Median", meaning: "A segment from a vertex of a triangle to the midpoint of the opposite side." },
        { term: "Centroid", meaning: "The point where the three medians of a triangle meet." },
        { term: "Midpoint theorem", meaning: "The segment joining midpoints of two sides is parallel to and half the third side." },
        { term: "Varignon parallelogram", meaning: "The parallelogram formed by joining midpoints of the sides of a 4-gon." }
      ],
      examples: [
        {
          q: "In parallelogram ABCD, ∠A = 3x and ∠B = 2x. Find all four angles.",
          steps: ["Adjacent angles add to 180°: 3x + 2x = 180°, so x = 36°.", "∠A = 108°, ∠B = 72°.", "Opposite angles are equal: ∠C = 108°, ∠D = 72°."],
          answer: "108°, 72°, 108°, 72°"
        },
        {
          q: "The median AD of triangle ABC is 15 cm long and G is the centroid. Find AG and GD.",
          steps: ["G divides AD in the ratio 2 : 1.", "AG = (2/3) × 15 = 10 cm.", "GD = (1/3) × 15 = 5 cm."],
          answer: "AG = 10 cm, GD = 5 cm"
        }
      ],
      qa: [
        { q: "State the midpoint theorem.", a: "In a triangle, the segment joining the midpoints of two sides is parallel to the third side and equal to half of it." },
        { q: "Show that a quadrilateral whose diagonals bisect each other is a parallelogram.", a: "The diagonals AC and BD meet at O with AO = OC and BO = OD. Triangles AOB and COD are congruent (SAS, vertically opposite angles), so AB = CD and ∠OAB = ∠OCD, which makes AB ∥ CD. One pair of opposite sides is equal and parallel, so ABCD is a parallelogram." }
      ],
      quiz: [
        { q: "A 4-gon whose diagonals bisect each other is a:", options: ["Parallelogram", "Trapezium", "Kite", "Rhombus only"], answer: 0, explain: "Diagonals bisecting each other is a criterion for a parallelogram." },
        { q: "The centroid divides each median in the ratio:", options: ["2 : 1", "1 : 1", "3 : 1", "1 : 2 from the vertex"], answer: 0, explain: "The part from the vertex is twice the part to the midpoint." },
        { q: "In triangle ABC, D and E are midpoints of AB and AC and BC = 14 cm. Then DE =", options: ["7 cm", "14 cm", "28 cm", "10 cm"], answer: 0, explain: "By the midpoint theorem DE = ½ BC." },
        { q: "If one angle of a parallelogram is 70°, its adjacent angle is:", options: ["110°", "70°", "20°", "290°"], answer: 0, explain: "Adjacent angles add to 180°." },
        { q: "Joining the midpoints of the sides of any quadrilateral in order gives a:", options: ["Parallelogram", "Rectangle", "Square", "Rhombus"], answer: 0, explain: "Each side is parallel to a diagonal, giving a parallelogram (Varignon)." },
        { q: "A quadrilateral is convex if:", options: ["Its diagonals intersect", "It has a reflex angle", "It has equal sides", "Its diagonals are equal"], answer: 0, explain: "All interior angles less than 180° is equivalent to intersecting diagonals." }
      ]
    },

    // ───────────── 13. Two Variables, One Line ─────────────
    {
      id: "two-variables-one-line",
      title: "Two Variables, One Line",
      section: "Part II",
      summary: "Linear equations in two variables and their graphs, slope-intercept form, and solving pairs of equations by substitution, elimination and graphs, with the conditions for unique, no or infinitely many solutions.",
      notes: [
        {
          heading: "Linear equation in two variables",
          points: [
            "An equation ax + by + c = 0 with real a, b, c, where a and b are **not both zero**, is a linear equation in two variables.",
            "It has **infinitely many solutions**, each an ordered pair (x, y).",
            "Its graph is a straight line: every point on it is a solution and every solution is a point on it.",
            "Slope-intercept form: y = mx + d, with slope m and y-intercept d; the line cuts the y-axis at (0, d)."
          ]
        },
        {
          heading: "Solving a pair algebraically",
          points: [
            "**Substitution**: express one variable from one equation and substitute into the other.",
            "**Elimination**: multiply to make the coefficients of one variable equal, then add or subtract.",
            "Always check by putting the answer in both equations.",
            "Example: x + y = 10 and x − y = 2 give x = 6, y = 4."
          ]
        },
        {
          heading: "Solving graphically",
          points: [
            "Draw both lines; the **intersection point** is the solution.",
            "Intersecting lines: exactly one solution. Parallel lines: no solution. Coincident lines: infinitely many solutions.",
            "Accuracy of a graph is limited, so algebra is used to confirm."
          ]
        },
        {
          heading: "Conditions on coefficients",
          points: [
            "For a₁x + b₁y + c₁ = 0 and a₂x + b₂y + c₂ = 0:",
            "a₁/a₂ ≠ b₁/b₂ gives a **unique solution** (lines intersect).",
            "a₁/a₂ = b₁/b₂ ≠ c₁/c₂ gives **no solution** (parallel lines).",
            "a₁/a₂ = b₁/b₂ = c₁/c₂ gives **infinitely many solutions** (coincident lines)."
          ]
        }
      ],
      formulas: [
        "ax + by + c = 0 (a, b not both zero)",
        "y = mx + d: slope m, y-intercept d",
        "Unique solution: a₁/a₂ ≠ b₁/b₂",
        "No solution: a₁/a₂ = b₁/b₂ ≠ c₁/c₂",
        "Infinitely many solutions: a₁/a₂ = b₁/b₂ = c₁/c₂"
      ],
      terms: [
        { term: "Linear equation in two variables", meaning: "An equation ax + by + c = 0 whose graph is a straight line." },
        { term: "Solution", meaning: "An ordered pair (x, y) that satisfies the equation." },
        { term: "Substitution method", meaning: "Solving by replacing one variable using the other equation." },
        { term: "Elimination method", meaning: "Solving by adding or subtracting equations to remove one variable." },
        { term: "Consistent pair", meaning: "A pair of equations with at least one solution." }
      ],
      examples: [
        {
          q: "Solve 2x + 3y = 12 and x − y = 1.",
          steps: ["From the second equation, x = y + 1.", "Substitute: 2(y + 1) + 3y = 12, so 5y + 2 = 12 and y = 2.", "Then x = 3.", "Check: 2(3) + 3(2) = 12 and 3 − 2 = 1."],
          answer: "x = 3, y = 2"
        },
        {
          q: "Find k so that kx + 3y = 3 and 12x + ky = 6 have infinitely many solutions.",
          steps: ["Need k/12 = 3/k = 3/6.", "3/6 = 1/2, so k = 6 from k/12 = 1/2.", "Check 3/k = 3/6 = 1/2."],
          answer: "k = 6"
        }
      ],
      qa: [
        { q: "How many solutions does 2x + 3y = 6 have?", a: "Infinitely many. For every value of x there is a corresponding y, e.g. (0, 2), (3, 0), (−3, 4); all lie on one line." },
        { q: "What does it mean graphically if a pair has no solution?", a: "The two lines are parallel (equal slopes, different intercepts) and never meet, so no point satisfies both equations." }
      ],
      quiz: [
        { q: "A linear equation in two variables has how many solutions?", options: ["Infinitely many", "Exactly one", "Exactly two", "None"], answer: 0, explain: "Each x gives a y, and all such pairs are solutions." },
        { q: "x + 2y = 4 and 2x + 4y = 8 have:", options: ["Infinitely many solutions", "A unique solution", "No solution", "Exactly two solutions"], answer: 0, explain: "1/2 = 2/4 = 4/8: the lines coincide." },
        { q: "3x + 2y = 5 and 6x + 4y = 7 have:", options: ["No solution", "A unique solution", "Infinitely many solutions", "Two solutions"], answer: 0, explain: "3/6 = 2/4 = 1/2 ≠ 5/7: the lines are parallel." },
        { q: "The solution of x − y = 1 and x + y = 5 is:", options: ["(3, 2)", "(2, 3)", "(4, 1)", "(1, 4)"], answer: 0, explain: "Adding gives 2x = 6, x = 3, y = 2." },
        { q: "Which pair is a solution of 3x + y = 9?", options: ["(2, 3)", "(3, 2)", "(1, 5)", "(4, −2)"], answer: 0, explain: "3(2) + 3 = 9; the others give 11, 8 and 10." },
        { q: "The graph of 2x + 3y = 6 in slope-intercept form has slope:", options: ["−2/3", "2/3", "−3/2", "2"], answer: 0, explain: "y = −(2/3)x + 2." }
      ]
    },

    // ───────────── 14. Math of Space: Surface Area and Volume ─────────────
    {
      id: "math-of-space-surface-area-and-volume",
      title: "Math of Space: Surface Area and Volume",
      section: "Part II",
      summary: "Surface area and volume of cuboids, cylinders, cones, pyramids, spheres and hemispheres, and their use on everyday objects.",
      notes: [
        {
          heading: "Cuboid and cube",
          points: [
            "Cuboid (l × w × h): total surface area = 2(lw + wh + hl); volume = lwh.",
            "Cube of side a: TSA = 6a²; volume = a³.",
            "Surface area is measured in square units; volume in cubic units (1 L = 1000 cm³).",
            "A net is the flat pattern that folds into the solid; the area of the net is the surface area."
          ]
        },
        {
          heading: "Right circular cylinder",
          points: [
            "Curved surface area = 2πrh.",
            "Closed at both ends: TSA = 2πrh + 2πr² = 2πr(h + r).",
            "Open at one end: 2πrh + πr² = πr(2h + r).",
            "Volume = πr²h."
          ]
        },
        {
          heading: "Cone and pyramid",
          points: [
            "Cone with radius r, height h and slant height l, where **l² = r² + h²**.",
            "Curved surface area = πrl; total surface area = πr(l + r).",
            "Volume of a cone = ⅓πr²h, one-third of the cylinder of the same base and height.",
            "Volume of a pyramid = ⅓ × base area × height."
          ]
        },
        {
          heading: "Sphere and hemisphere",
          points: [
            "Sphere: surface area = 4πr²; volume = (4/3)πr³.",
            "Hemisphere: curved surface area = 2πr²; total surface area = 3πr² (adds the flat circle πr²); volume = (2/3)πr³.",
            "Combined solids (a cone on a hemisphere): add volumes; for surface area add only exposed surfaces.",
            "Use π = 22/7 unless told otherwise."
          ]
        }
      ],
      formulas: [
        "Cuboid: TSA = 2(lw + wh + hl); V = lwh",
        "Cylinder: CSA = 2πrh; TSA = 2πr(h + r); V = πr²h",
        "Cone: CSA = πrl; TSA = πr(l + r); V = ⅓πr²h; l² = r² + h²",
        "Sphere: SA = 4πr²; V = (4/3)πr³",
        "Hemisphere: CSA = 2πr²; TSA = 3πr²; V = (2/3)πr³"
      ],
      terms: [
        { term: "Curved surface area", meaning: "The area of the curved part of a solid, excluding flat ends." },
        { term: "Total surface area", meaning: "The area of the whole outer surface including flat faces." },
        { term: "Slant height", meaning: "The length l from the cone’s apex to a point on the base circle, with l² = r² + h²." },
        { term: "Volume", meaning: "The space occupied by a solid, in cubic units." },
        { term: "Net", meaning: "A flat pattern which can be folded to make a solid." }
      ],
      examples: [
        {
          q: "A cone has base radius 7 cm and slant height 25 cm. Find its curved surface area and volume. (π = 22/7)",
          steps: ["CSA = πrl = (22/7) × 7 × 25 = 550 cm².", "h = √(25² − 7²) = √(625 − 49) = √576 = 24 cm.", "V = ⅓ × (22/7) × 49 × 24 = ⅓ × 22 × 7 × 24 = 1232 cm³."],
          answer: "CSA = 550 cm²; V = 1232 cm³."
        },
        {
          q: "Find the surface area and volume of a sphere of radius 21 cm. (π = 22/7)",
          steps: ["SA = 4 × (22/7) × 21² = 4 × 22 × 63 = 5544 cm².", "V = (4/3) × (22/7) × 21³ = (4/3) × 22 × 1323 = 4 × 22 × 441 = 38808 cm³."],
          answer: "SA = 5544 cm²; V = 38808 cm³."
        }
      ],
      qa: [
        { q: "Find the volume and curved surface area of a cylinder of radius 7 cm and height 10 cm. (π = 22/7)", a: "V = πr²h = (22/7) × 49 × 10 = **1540 cm³**. CSA = 2πrh = 2 × (22/7) × 7 × 10 = **440 cm²**." },
        { q: "Why is the total surface area of a hemisphere 3πr²?", a: "The curved part is half the sphere, 2πr². The flat circular face adds πr². Total = 2πr² + πr² = 3πr²." }
      ],
      quiz: [
        { q: "The total surface area of a cuboid 5 cm × 4 cm × 3 cm is:", options: ["94 cm²", "60 cm²", "47 cm²", "120 cm²"], answer: 0, explain: "2(20 + 12 + 15) = 94." },
        { q: "The volume of a cylinder with r = 7 cm and h = 10 cm (π = 22/7) is:", options: ["1540 cm³", "440 cm³", "770 cm³", "4620 cm³"], answer: 0, explain: "(22/7) × 49 × 10 = 1540." },
        { q: "The volume of a cone with r = 3 cm and h = 4 cm is:", options: ["12π cm³", "36π cm³", "15π cm³", "48π cm³"], answer: 0, explain: "⅓ × π × 9 × 4 = 12π." },
        { q: "The surface area of a sphere of radius 7 cm (π = 22/7) is:", options: ["616 cm²", "154 cm²", "308 cm²", "1437 cm²"], answer: 0, explain: "4 × (22/7) × 49 = 616." },
        { q: "The total surface area of a solid hemisphere is:", options: ["3πr²", "2πr²", "4πr²", "πr²"], answer: 0, explain: "Curved 2πr² plus flat base πr²." },
        { q: "A cylindrical tin of r = 7 cm and h = 10 cm is open at one end. The area of metal sheet used (π = 22/7) is:", options: ["594 cm²", "440 cm²", "748 cm²", "154 cm²"], answer: 0, explain: "2πrh + πr² = 440 + 154 = 594." }
      ]
    }
  ]
});
