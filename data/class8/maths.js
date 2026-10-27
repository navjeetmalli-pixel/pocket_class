// Class 8 Mathematics: standard NCERT Class 8 syllabus topics, titled by topic.
// Format: see CONTENT_GUIDE.md
StudyData.add(8, "maths", {
  chapters: [
    // ───────────────────────────── 1. Rational Numbers ─────────────────────────────
    {
      id: "rational-numbers",
      title: "Rational Numbers",
      section: "Number",
      summary: "Rational numbers are numbers that can be written as p/q with q ≠ 0. This chapter revises their properties, shows how to find rational numbers between two given numbers, and covers the four operations on them.",
      notes: [
        {
          heading: "What is a rational number?",
          points: [
            "A number is **rational** if it can be written as p/q, where p and q are integers and q ≠ 0. Integers (3 = 3/1), fractions and terminating or recurring decimals are all rational.",
            "p/q is **positive** if p and q have the same sign, and **negative** if they have opposite signs. So −3/−5 = 3/5 is positive and 3/−5 = −3/5 is negative.",
            "Multiplying or dividing the numerator and denominator by the same non-zero number gives an **equivalent** rational number: 2/3 = 4/6 = 10/15.",
            "A rational number is in **standard form** when its denominator is positive and the numerator and denominator have no common factor other than 1. For example, the standard form of −18/−24 is 3/4."
          ]
        },
        {
          heading: "Properties of the operations",
          points: [
            "**Closure:** rational numbers are closed under addition, subtraction and multiplication (the answer is again rational). They are not closed under division, because division by 0 is not defined.",
            "**Commutative:** a + b = b + a and a × b = b × a. Subtraction and division are not commutative: 1/2 − 1/3 = 1/6 but 1/3 − 1/2 = −1/6.",
            "**Associative:** (a + b) + c = a + (b + c) and (a × b) × c = a × (b × c). This is also not true for subtraction and division.",
            "**Distributive:** a × (b + c) = a × b + a × c. It often makes a calculation easier."
          ]
        },
        {
          heading: "Identity and inverse",
          points: [
            "0 is the **additive identity** (a + 0 = a) and 1 is the **multiplicative identity** (a × 1 = a).",
            "The **additive inverse** of a/b is −a/b, because a/b + (−a/b) = 0.",
            "The **multiplicative inverse** (reciprocal) of a/b is b/a, because a/b × b/a = 1. The number 0 has no reciprocal.",
            "Only 1 and −1 are their own reciprocals."
          ]
        },
        {
          heading: "Rational numbers between two numbers",
          points: [
            "There are **infinitely many** rational numbers between any two rational numbers.",
            "Quick method: the **mean** (a + b)/2 lies exactly halfway between a and b. Repeat the idea to get more numbers.",
            "Another method: write both numbers with a bigger common denominator. 1/3 and 1/2 become 8/24 and 12/24, so 9/24, 10/24 and 11/24 lie between them.",
            "On the number line, positive rational numbers lie to the right of 0 and negative ones to the left. Of two numbers, the one on the right is greater."
          ]
        },
        {
          heading: "Operations on rational numbers",
          points: [
            "**Addition:** if the denominators are equal, add the numerators: 3/7 + 2/7 = 5/7. Otherwise first rewrite the fractions with the LCM of the denominators.",
            "**Subtraction:** add the additive inverse. a/b − c/d = a/b + (−c/d).",
            "**Multiplication:** multiply the numerators and multiply the denominators: (−2/3) × (5/7) = −10/21.",
            "**Division:** multiply by the reciprocal of the divisor: (−2/3) ÷ (5/7) = (−2/3) × (7/5) = −14/15."
          ]
        }
      ],
      formulas: [
        "a/b + c/d = (ad + bc)/(bd)",
        "a/b − c/d = (ad − bc)/(bd)",
        "a/b × c/d = (a × c)/(b × d)",
        "a/b ÷ c/d = a/b × d/c  (c ≠ 0)",
        "Additive inverse of a/b is −a/b;  multiplicative inverse of a/b is b/a  (a ≠ 0)",
        "a × (b + c) = a × b + a × c",
        "A rational number between a and b: (a + b)/2"
      ],
      terms: [
        { term: "Rational number", meaning: "A number that can be written as p/q, where p and q are integers and q ≠ 0, e.g. 5, −3/4, 0.6." },
        { term: "Standard form", meaning: "A rational number whose denominator is positive and whose numerator and denominator have no common factor except 1, e.g. −3/4." },
        { term: "Equivalent rational numbers", meaning: "Fractions that have the same value, such as 1/2, 2/4 and 5/10." },
        { term: "Additive inverse", meaning: "The number that gives 0 when added to the given number. The additive inverse of 5/6 is −5/6." },
        { term: "Multiplicative inverse (reciprocal)", meaning: "The number that gives 1 when multiplied by the given number. The reciprocal of −2/7 is −7/2. Zero has none." },
        { term: "Closure property", meaning: "A set is closed under an operation if the result of the operation on any two of its members is again in the set." }
      ],
      examples: [
        {
          q: "Simplify: −3/4 + 5/6 − 1/3",
          steps: [
            "The LCM of 4, 6 and 3 is 12.",
            "−3/4 = −9/12, 5/6 = 10/12 and 1/3 = 4/12",
            "−9/12 + 10/12 − 4/12 = (−9 + 10 − 4)/12",
            "= −3/12 = −1/4"
          ],
          answer: "−1/4"
        },
        {
          q: "Find three rational numbers between 1/3 and 1/2.",
          steps: [
            "With denominator 6: 1/3 = 2/6 and 1/2 = 3/6. There is no whole number between 2 and 3, so use a bigger common denominator.",
            "Multiply the top and bottom by 4: 1/3 = 8/24 and 1/2 = 12/24.",
            "The numbers 9/24, 10/24 and 11/24 lie between them.",
            "In lowest terms: 3/8, 5/12 and 11/24."
          ],
          answer: "3/8, 5/12 and 11/24 (many other answers are possible)"
        }
      ],
      qa: [
        { q: "Is 0 a rational number? Does it have a reciprocal?", a: "Yes, 0 = 0/1, so it is rational. It has **no reciprocal**, because 1/0 is not defined." },
        { q: "Show with an example that subtraction of rational numbers is not commutative.", a: "Take 1/2 and 1/3. 1/2 − 1/3 = 3/6 − 2/6 = **1/6**, but 1/3 − 1/2 = 2/6 − 3/6 = **−1/6**. The answers differ, so a − b ≠ b − a." },
        { q: "Use the distributive property to find (−2/5) × (3/7) + (−2/5) × (4/7).", a: "= (−2/5) × (3/7 + 4/7) = (−2/5) × 1 = **−2/5**." }
      ],
      quiz: [
        {
          q: "The additive inverse of −7/9 is:",
          options: ["−7/9", "9/7", "−9/7", "7/9"],
          answer: 3,
          explain: "The additive inverse gives 0 when added: −7/9 + 7/9 = 0."
        },
        {
          q: "The multiplicative inverse of −5/8 is:",
          options: ["8/5", "5/8", "−8/5", "−5/8"],
          answer: 2,
          explain: "(−5/8) × (−8/5) = 1. Swap the numerator and denominator and keep the sign."
        },
        {
          q: "Which rational number lies between 1/4 and 1/2?",
          options: ["1/8", "5/8", "3/4", "3/8"],
          answer: 3,
          explain: "1/4 = 2/8 and 1/2 = 4/8, so 3/8 lies between them. The other options are outside this range."
        },
        {
          q: "(−3/5) ÷ (9/10) =",
          options: ["−27/50", "−2/3", "−3/2", "2/3"],
          answer: 1,
          explain: "Multiply by the reciprocal: (−3/5) × (10/9) = −30/45 = −2/3."
        },
        {
          q: "Rational numbers are NOT closed under:",
          options: ["Addition", "Division", "Subtraction", "Multiplication"],
          answer: 1,
          explain: "Division by 0 is not defined, so dividing two rational numbers does not always give a rational number."
        },
        {
          q: "The standard form of −36/48 is:",
          options: ["3/4", "−4/3", "−3/4", "−2/3"],
          answer: 2,
          explain: "The HCF of 36 and 48 is 12. Dividing top and bottom by 12 gives −3/4, which has a positive denominator."
        }
      ]
    },
    // ───────────────────────────── 2. Linear Equations in One Variable ─────────────────────────────
    {
      id: "linear-equations-in-one-variable",
      title: "Linear Equations in One Variable",
      section: "Algebra",
      summary: "An equation says that two expressions are equal. Here we learn to solve linear equations with one variable, including those with the variable on both sides, and to turn word problems into equations.",
      notes: [
        {
          heading: "Linear equation in one variable",
          points: [
            "An **equation** says that two expressions are equal. The part on the left of the = sign is the LHS and the part on the right is the RHS.",
            "A **linear equation in one variable** has only one variable, and its highest power is 1. For example, 2x + 3 = 11 and 5y − 4 = 3y + 8 are linear, but x² = 9 is not.",
            "The value of the variable that makes LHS = RHS is the **solution** (or root). For 2x + 3 = 11 the solution is x = 4, because 2(4) + 3 = 11.",
            "We can always **check** a solution by putting it back into the equation."
          ]
        },
        {
          heading: "Solving an equation",
          points: [
            "An equation stays balanced if we add, subtract, multiply or divide **both sides by the same non-zero number**.",
            "**Transposition:** moving a term to the other side of the = sign changes its sign. + becomes −, and a multiplier becomes a divisor.",
            "Example: 3x − 7 = 11, so 3x = 11 + 7 = 18, so x = 18 ÷ 3 = 6.",
            "Open brackets first, collect the variable terms on one side and the numbers on the other, and then divide by the coefficient of the variable."
          ]
        },
        {
          heading: "Variable on both sides, fractions",
          points: [
            "For 5x − 2 = 3x + 8: bring the x terms together, 5x − 3x = 8 + 2, so 2x = 10 and x = 5.",
            "If there are fractions, multiply both sides by the LCM of the denominators. For x/2 + x/3 = 10, multiply by 6: 3x + 2x = 60, so x = 12.",
            "An equation like (x + 1)/(2x + 3) = 3/8 becomes linear after **cross multiplication**: if a/b = c/d, then a × d = b × c."
          ]
        },
        {
          heading: "Word problems",
          points: [
            "Steps: read carefully, let a variable stand for the unknown, form the equation, solve it, and check the answer against the story.",
            "Consecutive numbers: n, n + 1, n + 2. Consecutive even (or odd) numbers: n, n + 2, n + 4.",
            "A two-digit number with tens digit a and ones digit b is 10a + b. Reversing the digits gives 10b + a.",
            "Age problems: if the present age is x, the age after 5 years is x + 5 and the age 5 years ago was x − 5."
          ]
        }
      ],
      formulas: [
        "a + x = b  ⇒  x = b − a",
        "ax = b  ⇒  x = b/a  (a ≠ 0)",
        "If a/b = c/d, then ad = bc  (cross multiplication)",
        "Consecutive integers: n, n + 1, n + 2;  consecutive even or odd numbers: n, n + 2, n + 4",
        "Two-digit number = 10 × (tens digit) + (ones digit)",
        "Perimeter of a rectangle = 2(l + b)"
      ],
      terms: [
        { term: "Equation", meaning: "A statement that two expressions are equal, e.g. 2x + 3 = 11." },
        { term: "Linear equation in one variable", meaning: "An equation with one variable whose highest power is 1, e.g. 5y − 4 = 3y + 8." },
        { term: "Solution (root)", meaning: "The value of the variable that makes the LHS equal to the RHS." },
        { term: "Transposition", meaning: "Moving a term from one side of an equation to the other, which changes its sign." },
        { term: "Cross multiplication", meaning: "Turning a/b = c/d into a × d = b × c." },
        { term: "LHS and RHS", meaning: "The expressions on the left and right of the equals sign." }
      ],
      examples: [
        {
          q: "Solve 3(x − 2) + 5 = 2(x + 4) − 1 and check the answer.",
          steps: [
            "Open the brackets: 3x − 6 + 5 = 2x + 8 − 1",
            "Simplify both sides: 3x − 1 = 2x + 7",
            "Transpose 2x to the LHS and −1 to the RHS: 3x − 2x = 7 + 1",
            "x = 8",
            "Check: LHS = 3(8 − 2) + 5 = 23 and RHS = 2(8 + 4) − 1 = 23. Both sides are equal."
          ],
          answer: "x = 8"
        },
        {
          q: "The length of a rectangle is 5 m more than twice its breadth. Its perimeter is 52 m. Find its length and breadth.",
          steps: [
            "Let the breadth be b m. Then the length is (2b + 5) m.",
            "Perimeter = 2(length + breadth) = 2(2b + 5 + b) = 2(3b + 5)",
            "2(3b + 5) = 52, so 3b + 5 = 26, so 3b = 21 and b = 7",
            "Length = 2(7) + 5 = 19 m",
            "Check: 2(19 + 7) = 52 m"
          ],
          answer: "Breadth = 7 m and length = 19 m"
        }
      ],
      qa: [
        { q: "Solve (x + 1)/(2x + 3) = 3/8.", a: "Cross multiply: 8(x + 1) = 3(2x + 3), so 8x + 8 = 6x + 9. Then 2x = 1, so **x = 1/2**." },
        { q: "A father is 4 times as old as his son. After 5 years the sum of their ages will be 70 years. Find their present ages.", a: "Let the son's age be x, so the father's age is 4x. After 5 years: (x + 5) + (4x + 5) = 70, so 5x + 10 = 70 and x = 12. The son is **12 years** old and the father is **48 years** old." },
        { q: "Is x = −2 a solution of 3x + 7 = 1?", a: "Put x = −2: LHS = 3(−2) + 7 = −6 + 7 = 1, which equals the RHS. Yes, **x = −2 is a solution**." }
      ],
      quiz: [
        {
          q: "The solution of 7x + 4 = 25 is:",
          options: ["x = 4", "x = 29/7", "x = 3", "x = 21"],
          answer: 2,
          explain: "7x = 25 − 4 = 21, so x = 21 ÷ 7 = 3."
        },
        {
          q: "Solve 3x + 5 = 2x − 4.",
          options: ["x = 9", "x = −1", "x = 1", "x = −9"],
          answer: 3,
          explain: "Transpose: 3x − 2x = −4 − 5, so x = −9."
        },
        {
          q: "The sum of two consecutive even numbers is 54. The smaller number is:",
          options: ["24", "26", "25", "27"],
          answer: 1,
          explain: "n + (n + 2) = 54, so 2n = 52 and n = 26. The numbers are 26 and 28."
        },
        {
          q: "If x/3 + 1/2 = 5/6, then x =",
          options: ["1", "2", "1/3", "3"],
          answer: 0,
          explain: "x/3 = 5/6 − 1/2 = 5/6 − 3/6 = 1/3, so x = 1."
        },
        {
          q: "To solve 5x − 2 = 3x + 8, transposing the terms correctly gives:",
          options: ["5x + 3x = 8 − 2", "5x − 3x = 8 − 2", "5x − 3x = 8 + 2", "5x + 3x = 8 + 2"],
          answer: 2,
          explain: "Moving 3x to the LHS gives −3x, and moving −2 to the RHS gives +2. So 5x − 3x = 8 + 2, which gives x = 5."
        },
        {
          q: "Three times a number decreased by 5 is 22. The number is:",
          options: ["27", "9", "17/3", "8"],
          answer: 1,
          explain: "3x − 5 = 22, so 3x = 27 and x = 9."
        }
      ]
    },
    // ───────────────────────────── 3. Understanding Quadrilaterals ─────────────────────────────
    {
      id: "understanding-quadrilaterals",
      title: "Understanding Quadrilaterals",
      section: "Geometry",
      summary: "This chapter looks at polygons and their angle sums, and then at the special quadrilaterals (parallelogram, rhombus, rectangle, square, kite and trapezium) and their properties.",
      notes: [
        {
          heading: "Polygons",
          points: [
            "A **polygon** is a simple closed figure made of line segments. A polygon with n sides has n vertices and n angles.",
            "Names by number of sides: triangle (3), quadrilateral (4), pentagon (5), hexagon (6), heptagon (7), octagon (8), nonagon (9), decagon (10).",
            "A polygon is **convex** if all its diagonals lie inside it (every interior angle is less than 180°). Otherwise it is **concave**.",
            "A **regular polygon** has all sides equal and all angles equal, e.g. a square.",
            "A **diagonal** joins two vertices that are not next to each other."
          ]
        },
        {
          heading: "Angle sum of a polygon",
          points: [
            "The sum of the interior angles of an n-sided polygon is (n − 2) × 180°. For a quadrilateral it is 2 × 180° = 360°, and for a hexagon 4 × 180° = 720°.",
            "Each interior angle of a **regular** n-gon is (n − 2) × 180° ÷ n. A regular hexagon has 720° ÷ 6 = 120° at each vertex.",
            "The sum of the exterior angles of any polygon (one at each vertex) is always **360°**.",
            "Interior angle + exterior angle = 180° at each vertex. Each exterior angle of a regular n-gon is 360° ÷ n."
          ]
        },
        {
          heading: "Kinds of quadrilaterals",
          points: [
            "A **trapezium** has a pair of parallel sides.",
            "A **kite** has two pairs of equal adjacent sides.",
            "A **parallelogram** has both pairs of opposite sides parallel.",
            "A **rhombus** is a parallelogram with all four sides equal. A **rectangle** is a parallelogram with all angles 90°. A **square** is a rectangle with all sides equal."
          ]
        },
        {
          heading: "Properties of special quadrilaterals",
          points: [
            "**Parallelogram:** opposite sides are equal, opposite angles are equal, adjacent angles add up to 180°, and the diagonals bisect each other.",
            "**Rhombus:** all the properties of a parallelogram, and the diagonals are perpendicular bisectors of each other.",
            "**Rectangle:** all the properties of a parallelogram, and the diagonals are equal.",
            "**Square:** the properties of both a rectangle and a rhombus. Its diagonals are equal and bisect each other at 90°.",
            "**Kite:** the diagonals meet at right angles, and one of them bisects the other."
          ]
        }
      ],
      formulas: [
        "Sum of interior angles of an n-sided polygon = (n − 2) × 180°",
        "Sum of the angles of a quadrilateral = 360°",
        "Each interior angle of a regular n-gon = (n − 2) × 180° ÷ n",
        "Sum of the exterior angles of any polygon = 360°",
        "Each exterior angle of a regular n-gon = 360° ÷ n",
        "Interior angle + exterior angle = 180°",
        "Number of diagonals of an n-gon = n(n − 3) ÷ 2"
      ],
      terms: [
        { term: "Polygon", meaning: "A simple closed figure made up of line segments, e.g. a triangle, quadrilateral or pentagon." },
        { term: "Diagonal", meaning: "A line segment joining two vertices of a polygon that are not next to each other." },
        { term: "Regular polygon", meaning: "A polygon with all sides equal and all angles equal." },
        { term: "Convex polygon", meaning: "A polygon in which every diagonal lies inside it; all its interior angles are less than 180°." },
        { term: "Parallelogram", meaning: "A quadrilateral in which both pairs of opposite sides are parallel." },
        { term: "Rhombus", meaning: "A parallelogram with all four sides equal. Its diagonals bisect each other at right angles." }
      ],
      examples: [
        {
          q: "Each exterior angle of a regular polygon is 36°. Find the number of sides and the sum of its interior angles.",
          steps: [
            "Number of sides = 360° ÷ 36° = 10",
            "Sum of interior angles = (10 − 2) × 180° = 8 × 180° = 1440°",
            "Check: each interior angle = 180° − 36° = 144°, and 10 × 144° = 1440°"
          ],
          answer: "10 sides; sum of interior angles = 1440°"
        },
        {
          q: "The angles of a quadrilateral are in the ratio 2 : 3 : 4 : 6. Find each angle.",
          steps: [
            "The angles of a quadrilateral add up to 360°.",
            "Let the angles be 2x, 3x, 4x and 6x. Then 2x + 3x + 4x + 6x = 15x = 360°.",
            "x = 360° ÷ 15 = 24°",
            "The angles are 48°, 72°, 96° and 144°."
          ],
          answer: "48°, 72°, 96° and 144°"
        }
      ],
      qa: [
        { q: "How is a square different from a rhombus?", a: "Both have four equal sides and perpendicular diagonals. A rhombus need not have right angles, but a square has all four angles equal to **90°** and equal diagonals. So every square is a rhombus, but not every rhombus is a square." },
        { q: "In parallelogram ABCD, ∠A = 65°. Find ∠B, ∠C and ∠D.", a: "Opposite angles are equal, so ∠C = ∠A = **65°**. Adjacent angles add up to 180°, so ∠B = 180° − 65° = **115°** and ∠D = ∠B = **115°**." },
        { q: "Can a regular polygon have each exterior angle equal to 50°?", a: "No. The number of sides would be 360° ÷ 50° = 7.2, which is not a whole number." }
      ],
      quiz: [
        {
          q: "The sum of the interior angles of a hexagon is:",
          options: ["540°", "900°", "1080°", "720°"],
          answer: 3,
          explain: "(6 − 2) × 180° = 4 × 180° = 720°."
        },
        {
          q: "Each exterior angle of a regular octagon measures:",
          options: ["30°", "45°", "60°", "135°"],
          answer: 1,
          explain: "360° ÷ 8 = 45°. The value 135° is the interior angle (180° − 45°)."
        },
        {
          q: "The diagonals of a rhombus:",
          options: ["bisect each other at right angles", "are always equal in length", "are parallel to each other", "meet at right angles but do not bisect each other"],
          answer: 0,
          explain: "In a rhombus the diagonals are perpendicular bisectors of each other. They are equal only if the rhombus is a square."
        },
        {
          q: "Which quadrilateral has equal diagonals that bisect each other, but they are not necessarily perpendicular?",
          options: ["Rhombus", "Kite", "Rectangle", "Trapezium"],
          answer: 2,
          explain: "A rectangle's diagonals are equal and bisect each other. They meet at 90° only in the special case of a square."
        },
        {
          q: "The number of diagonals of a pentagon is:",
          options: ["5", "10", "6", "9"],
          answer: 0,
          explain: "n(n − 3)/2 = 5 × 2/2 = 5."
        },
        {
          q: "Two adjacent angles of a parallelogram are in the ratio 2 : 3. The smaller angle is:",
          options: ["36°", "60°", "72°", "108°"],
          answer: 2,
          explain: "Adjacent angles add up to 180°. 2x + 3x = 180° gives x = 36°, so the angles are 72° and 108°."
        }
      ]
    },
    // ───────────────────────────── 4. Data Handling ─────────────────────────────
    {
      id: "data-handling",
      title: "Data Handling",
      section: "Data",
      summary: "We organise data into frequency tables with class intervals, show it with histograms and pie charts, and then meet probability, which measures how likely an event is.",
      notes: [
        {
          heading: "Organising data",
          points: [
            "Raw data is organised into a **frequency distribution table** using tally marks. The **frequency** of an observation is the number of times it occurs.",
            "For large data we group observations into **class intervals** such as 0–10, 10–20, 20–30. The **class width** of each is 10.",
            "In the class 10–20, the lower limit is 10 and the upper limit is 20. An observation equal to 20 is counted in the next class, 20–30.",
            "**Range** = highest observation − lowest observation."
          ]
        },
        {
          heading: "Histograms",
          points: [
            "A **histogram** is a graph for grouped data. Class intervals go on the horizontal axis and frequencies on the vertical axis.",
            "The bars of a histogram **touch each other**, because the classes are continuous. Bars have equal widths when the class widths are equal.",
            "A bar graph compares separate categories and has gaps between bars. A histogram shows how continuous data is spread out."
          ]
        },
        {
          heading: "Pie charts",
          points: [
            "A **pie chart** (circle graph) shows how a whole is divided into parts. Each part is a sector of the circle.",
            "Central angle of a sector = (value ÷ total) × 360°. All the angles together make 360°.",
            "A sector for 25% of the data has the angle 25/100 × 360° = 90°.",
            "Steps: find the total, find each fraction of the total, convert to degrees, then draw the sectors with a protractor."
          ]
        },
        {
          heading: "Chance and probability",
          points: [
            "In a **random experiment** the result cannot be predicted exactly, e.g. tossing a coin (H or T) or rolling a die (1 to 6). Outcomes are **equally likely** if each has the same chance.",
            "An **event** is one or more outcomes. P(E) = number of outcomes favourable to E ÷ total number of equally likely outcomes.",
            "Probability always lies between 0 and 1. A **certain** event has probability 1 and an **impossible** event has probability 0.",
            "P(not E) = 1 − P(E). For a fair die, P(even number) = 3/6 = 1/2."
          ]
        }
      ],
      formulas: [
        "Range = highest value − lowest value",
        "Class width = upper limit − lower limit",
        "Central angle of a sector = (value ÷ total) × 360°",
        "P(E) = (number of favourable outcomes) ÷ (total number of equally likely outcomes)",
        "0 ≤ P(E) ≤ 1;  P(not E) = 1 − P(E)",
        "Sum of the probabilities of all outcomes of an experiment = 1"
      ],
      terms: [
        { term: "Frequency", meaning: "The number of times an observation occurs in the data." },
        { term: "Class interval", meaning: "A group of values, such as 20–30, used to organise large data." },
        { term: "Histogram", meaning: "A graph of grouped data in which touching bars show the frequency of each class interval." },
        { term: "Pie chart", meaning: "A circular graph divided into sectors whose angles are proportional to the parts of the whole." },
        { term: "Probability", meaning: "A number from 0 to 1 that tells how likely an event is." },
        { term: "Equally likely outcomes", meaning: "Outcomes that have the same chance of happening, e.g. the six faces of a fair die." }
      ],
      examples: [
        {
          q: "A family spends ₹ 20,000 a month: food ₹ 8,000, rent ₹ 6,000, education ₹ 4,000 and savings ₹ 2,000. Find the central angle of each sector of a pie chart.",
          steps: [
            "Total = ₹ 20,000",
            "Food: 8000/20000 × 360° = 144°",
            "Rent: 6000/20000 × 360° = 108°",
            "Education: 4000/20000 × 360° = 72°",
            "Savings: 2000/20000 × 360° = 36°",
            "Check: 144° + 108° + 72° + 36° = 360°"
          ],
          answer: "Food 144°, rent 108°, education 72°, savings 36°"
        },
        {
          q: "A bag has 4 red, 5 blue and 3 green balls. One ball is drawn at random. Find P(blue) and P(not green).",
          steps: [
            "Total number of balls = 4 + 5 + 3 = 12",
            "P(blue) = 5/12",
            "P(green) = 3/12 = 1/4",
            "P(not green) = 1 − 1/4 = 3/4"
          ],
          answer: "P(blue) = 5/12 and P(not green) = 3/4"
        }
      ],
      qa: [
        { q: "How is a histogram different from a bar graph?", a: "A bar graph compares separate categories, and its bars have gaps between them. A histogram shows **grouped continuous data** by class intervals, so its bars touch each other." },
        { q: "A die is thrown once. Find the probability of getting a number greater than 4.", a: "The numbers greater than 4 are 5 and 6, so there are 2 favourable outcomes out of 6. P = 2/6 = **1/3**." },
        { q: "Can the probability of an event be 1.5 or −0.2? Give a reason.", a: "No. Favourable outcomes can never be more than the total outcomes or fewer than 0, so P(E) always lies between **0 and 1**." }
      ],
      quiz: [
        {
          q: "In the class interval 30–45, the class width is:",
          options: ["15", "10", "30", "75"],
          answer: 0,
          explain: "Class width = upper limit − lower limit = 45 − 30 = 15."
        },
        {
          q: "A sector of a pie chart represents 25% of the data. Its central angle is:",
          options: ["25°", "90°", "45°", "180°"],
          answer: 1,
          explain: "25% of 360° = 25/100 × 360° = 90°."
        },
        {
          q: "Which of these cannot be the probability of an event?",
          options: ["0", "3/7", "7/3", "1"],
          answer: 2,
          explain: "7/3 is greater than 1. Probability always lies from 0 to 1."
        },
        {
          q: "Marks of students are grouped as 0–10, 10–20, 20–30 and so on. The best graph to show this data is a:",
          options: ["histogram", "pictograph", "pie chart", "line graph"],
          answer: 0,
          explain: "Grouped continuous data is shown by a histogram, with touching bars."
        },
        {
          q: "A bag has 3 red and 7 blue balls. The probability of drawing a red ball is:",
          options: ["3/7", "3/10", "7/10", "1/3"],
          answer: 1,
          explain: "There are 10 balls in all and 3 are red, so P = 3/10."
        },
        {
          q: "The marks 45, 78, 19, 87 and 52 are given. Their range is:",
          options: ["106", "59", "87", "68"],
          answer: 3,
          explain: "Range = highest − lowest = 87 − 19 = 68."
        }
      ]
    },
    // ───────────────────────────── 5. Squares and Square Roots ─────────────────────────────
    {
      id: "squares-and-square-roots",
      title: "Squares and Square Roots",
      section: "Number",
      summary: "We study perfect squares and their patterns, Pythagorean triplets, and how to find square roots by prime factorisation, repeated subtraction and estimation.",
      notes: [
        {
          heading: "Squares and their patterns",
          points: [
            "The **square** of n is n × n = n². A **perfect square** is the square of a natural number: 1, 4, 9, 16, 25, 36, …",
            "A perfect square can end only in 0, 1, 4, 5, 6 or 9. A number ending in 2, 3, 7 or 8 is **never** a perfect square.",
            "If a number ends in 1 or 9, its square ends in 1. Ending in 2 or 8 gives 4, ending in 3 or 7 gives 9, ending in 4 or 6 gives 6, and ending in 5 gives 5.",
            "The square of an even number is even and the square of an odd number is odd. A perfect square always ends in an **even** number of zeros (0, 2, 4, …)."
          ]
        },
        {
          heading: "Interesting patterns",
          points: [
            "(n + 1)² − n² = 2n + 1. So the sum of the first n odd numbers is n²: 1 + 3 + 5 + 7 = 16 = 4².",
            "Between n² and (n + 1)² there are **2n** numbers that are not perfect squares. Between 9² = 81 and 10² = 100 there are 18.",
            "Square of a number ending in 5: for (a5)², multiply a by (a + 1) and write 25 after it. For 35², 3 × 4 = 12, so 35² = 1225.",
            "**Pythagorean triplet:** for any natural number m > 1, (2m, m² − 1, m² + 1) is a triplet, because (2m)² + (m² − 1)² = (m² + 1)². For m = 3 it gives 6, 8, 10."
          ]
        },
        {
          heading: "Finding square roots",
          points: [
            "Finding a square root is the inverse of squaring. The symbol √ gives the **positive** square root, so √25 = 5 (although (−5)² = 25 as well).",
            "**Prime factorisation:** write the number as a product of primes, pair up equal primes, and take one prime from each pair. If a prime is left without a partner, the number is not a perfect square.",
            "**Repeated subtraction:** subtract 1, 3, 5, 7, … in turn. If you reach 0 after n steps, the square root is n. For 16: 16 − 1 − 3 − 5 − 7 = 0 in 4 steps, so √16 = 4.",
            "For large numbers, or numbers that are not perfect squares, use the **long division method**."
          ]
        },
        {
          heading: "Roots of fractions and decimals, estimation",
          points: [
            "√(a/b) = √a ÷ √b. For example, √(49/81) = 7/9.",
            "For decimals, write them as fractions: √6.25 = √(625/100) = 25/10 = 2.5.",
            "To estimate √n, find the two perfect squares around n. Since 25 < 30 < 36, √30 lies between 5 and 6.",
            "The square root of a perfect square with n digits has n/2 digits if n is even and (n + 1)/2 digits if n is odd."
          ]
        }
      ],
      formulas: [
        "n² = n × n;  √(n²) = n",
        "(n + 1)² = n² + (2n + 1)",
        "1 + 3 + 5 + … (n odd numbers) = n²",
        "Non-square numbers between n² and (n + 1)² = 2n",
        "(10a + 5)² = 100 × a(a + 1) + 25",
        "Pythagorean triplet: 2m, m² − 1, m² + 1  (m > 1)",
        "√(ab) = √a × √b;  √(a/b) = √a ÷ √b"
      ],
      terms: [
        { term: "Perfect square", meaning: "A number that is the square of a natural number, e.g. 49 = 7²." },
        { term: "Square root", meaning: "A number which, multiplied by itself, gives the given number. The square root of 49 is 7." },
        { term: "Prime factorisation", meaning: "Writing a number as a product of prime numbers." },
        { term: "Pythagorean triplet", meaning: "Three natural numbers a, b, c with a² + b² = c², e.g. 3, 4, 5." },
        { term: "Long division method", meaning: "A step-by-step method for finding the square root of a large number or a decimal." }
      ],
      examples: [
        {
          q: "Find √1764 by prime factorisation.",
          steps: [
            "1764 ÷ 2 = 882 and 882 ÷ 2 = 441",
            "441 ÷ 3 = 147, 147 ÷ 3 = 49 and 49 = 7 × 7",
            "So 1764 = 2 × 2 × 3 × 3 × 7 × 7",
            "Take one prime from each pair: √1764 = 2 × 3 × 7 = 42",
            "Check: 42 × 42 = 1764"
          ],
          answer: "√1764 = 42"
        },
        {
          q: "Find the smallest number by which 180 must be divided to make it a perfect square. Also find the square root of the new number.",
          steps: [
            "180 = 2 × 2 × 3 × 3 × 5",
            "The primes 2 and 3 occur in pairs, but 5 has no partner.",
            "Divide 180 by 5: 180 ÷ 5 = 36",
            "√36 = 6"
          ],
          answer: "Divide by 5; the new number is 36 and its square root is 6"
        }
      ],
      qa: [
        { q: "Give reasons why 2032 and 1000 are not perfect squares.", a: "2032 ends in **2**, and no perfect square ends in 2, 3, 7 or 8. 1000 ends in **three zeros**, but a perfect square always ends in an even number of zeros." },
        { q: "Write a Pythagorean triplet whose smallest member is 8.", a: "Take 2m = 8, so m = 4. The triplet is (8, 4² − 1, 4² + 1) = **(8, 15, 17)**. Check: 8² + 15² = 64 + 225 = 289 = 17²." },
        { q: "How many natural numbers lie between 12² and 13²?", a: "Between n² and (n + 1)² there are 2n numbers. For n = 12 this is **24**. Check: 12² = 144 and 13² = 169, and the numbers 145 to 168 are 24 in all." }
      ],
      quiz: [
        {
          q: "Which of these numbers is NOT a perfect square?",
          options: ["4087", "1296", "2025", "6561"],
          answer: 0,
          explain: "4087 ends in 7, and no perfect square ends in 7. The others are 36², 45² and 81²."
        },
        {
          q: "√784 =",
          options: ["26", "28", "27", "38"],
          answer: 1,
          explain: "28 × 28 = 784. (27² = 729 and 26² = 676.)"
        },
        {
          q: "The sum of the first 12 odd natural numbers is:",
          options: ["144", "24", "78", "121"],
          answer: 0,
          explain: "The sum of the first n odd numbers is n², so for n = 12 it is 144."
        },
        {
          q: "How many non-square numbers lie between 15² and 16²?",
          options: ["15", "30", "16", "31"],
          answer: 1,
          explain: "There are 2n non-squares between n² and (n + 1)². For n = 15 this is 30 (the numbers 226 to 255)."
        },
        {
          q: "√6.25 =",
          options: ["0.25", "25", "2.5", "0.5"],
          answer: 2,
          explain: "2.5 × 2.5 = 6.25. Equivalently, √6.25 = √(625/100) = 25/10 = 2.5."
        },
        {
          q: "If a number ends in 7, its square ends in:",
          options: ["7", "1", "4", "9"],
          answer: 3,
          explain: "7 × 7 = 49, so the units digit of the square is 9."
        }
      ]
    },
    // ───────────────────────────── 6. Cubes and Cube Roots ─────────────────────────────
    {
      id: "cubes-and-cube-roots",
      title: "Cubes and Cube Roots",
      section: "Number",
      summary: "This chapter covers perfect cubes and their patterns, the Hardy–Ramanujan number 1729, and ways of finding cube roots using prime factorisation and the units digit.",
      notes: [
        {
          heading: "Cubes",
          points: [
            "The **cube** of n is n × n × n = n³. A **perfect cube** is the cube of a natural number: 1, 8, 27, 64, 125, 216, 343, 512, 729, 1000, …",
            "A solid cube with edge n units has volume n³ cubic units. A cube of edge 4 is made of 4 × 4 × 4 = 64 unit cubes.",
            "The cube of an even number is even and the cube of an odd number is odd. The cube of a negative number is negative: (−3)³ = −27.",
            "Units digit of n³: if n ends in 0, 1, 4, 5, 6 or 9, so does n³. If n ends in 2 the cube ends in 8 (and the other way round), and if n ends in 3 the cube ends in 7 (and the other way round)."
          ]
        },
        {
          heading: "Patterns and the number 1729",
          points: [
            "Cubes are sums of consecutive odd numbers: 2³ = 3 + 5, 3³ = 7 + 9 + 11, 4³ = 13 + 15 + 17 + 19.",
            "1729 is the smallest number that can be written as a sum of two cubes in two different ways: 1729 = 1³ + 12³ = 9³ + 10³.",
            "It is called the **Hardy–Ramanujan number**, after the Indian mathematician Srinivasa Ramanujan, who pointed out this property."
          ]
        },
        {
          heading: "Cube roots",
          points: [
            "Finding a cube root is the inverse of cubing. ³√(n³) = n. For example, ³√27 = 3 and ³√(−64) = −4.",
            "**Prime factorisation method:** write the number as a product of primes, group equal primes in **triplets**, and take one prime from each triplet. A prime left out of a triplet means the number is not a perfect cube.",
            "To make a number a perfect cube, multiply (or divide) it by the smallest number that completes every prime into a triplet.",
            "³√(ab) = ³√a × ³√b and ³√(a/b) = ³√a ÷ ³√b."
          ]
        },
        {
          heading: "Cube root from the units digit",
          points: [
            "The units digit of a perfect cube tells the units digit of its cube root: a cube ending in 8 has a root ending in 2, and one ending in 7 has a root ending in 3.",
            "Strike off the last three digits of the cube. The number left lies between two perfect cubes, and the cube root of the smaller one is the tens digit.",
            "Example: ³√17576 ends in 6. Strike off 576 to leave 17, which lies between 2³ = 8 and 3³ = 27, so the tens digit is 2. The cube root is 26.",
            "If a cube has volume V, its edge is ³√V."
          ]
        }
      ],
      formulas: [
        "n³ = n × n × n;  ³√(n³) = n",
        "(−n)³ = −n³;  ³√(−a) = −³√a",
        "³√(ab) = ³√a × ³√b;  ³√(a/b) = ³√a ÷ ³√b",
        "Volume of a cube = a³;  edge = ³√(volume)",
        "1729 = 1³ + 12³ = 9³ + 10³",
        "A number is a perfect cube if every prime in its factorisation occurs a multiple of 3 times"
      ],
      terms: [
        { term: "Perfect cube", meaning: "A number that is the cube of a natural number, e.g. 343 = 7³." },
        { term: "Cube root", meaning: "A number which, multiplied by itself three times, gives the given number. ³√343 = 7." },
        { term: "Prime factorisation", meaning: "Writing a number as a product of prime numbers." },
        { term: "Triplet", meaning: "A group of three equal prime factors, such as 2 × 2 × 2, used to find a cube root." },
        { term: "Hardy–Ramanujan number", meaning: "1729, the smallest number that is the sum of two cubes in two different ways." }
      ],
      examples: [
        {
          q: "Find the cube root of 1728 by prime factorisation.",
          steps: [
            "1728 = 2 × 2 × 2 × 2 × 2 × 2 × 3 × 3 × 3",
            "Group in triplets: (2 × 2 × 2) × (2 × 2 × 2) × (3 × 3 × 3)",
            "Take one prime from each triplet: ³√1728 = 2 × 2 × 3 = 12",
            "Check: 12 × 12 × 12 = 1728"
          ],
          answer: "³√1728 = 12"
        },
        {
          q: "Find the smallest number by which 392 must be multiplied to make it a perfect cube. What is the cube root of the product?",
          steps: [
            "392 = 2 × 2 × 2 × 7 × 7 = 2³ × 7²",
            "The prime 2 forms a triplet, but 7 occurs only twice. One more 7 is needed.",
            "Multiply by 7: 392 × 7 = 2744 = 2³ × 7³",
            "³√2744 = 2 × 7 = 14"
          ],
          answer: "Multiply by 7; the cube root of 2744 is 14"
        }
      ],
      qa: [
        { q: "Is 500 a perfect cube? Give a reason.", a: "500 = 2 × 2 × 5 × 5 × 5 = 2² × 5³. The prime 5 forms a triplet, but 2 occurs only twice, so 500 is **not** a perfect cube." },
        { q: "Find ³√17576 using the units digit.", a: "17576 ends in 6, so the cube root ends in **6**. Striking off the last three digits leaves 17, which lies between 2³ = 8 and 3³ = 27, so the tens digit is **2**. Hence ³√17576 = **26**." },
        { q: "Why is 1729 called the Hardy–Ramanujan number?", a: "It is the smallest number that can be written as the sum of two cubes in two different ways: 1³ + 12³ = 1 + 1728 and 9³ + 10³ = 729 + 1000. Both equal 1729." }
      ],
      quiz: [
        {
          q: "The value of 9³ is:",
          options: ["243", "729", "81", "27"],
          answer: 1,
          explain: "9 × 9 × 9 = 81 × 9 = 729."
        },
        {
          q: "³√(−216) =",
          options: ["6", "−36", "−6", "−72"],
          answer: 2,
          explain: "(−6) × (−6) × (−6) = −216, so the cube root of −216 is −6."
        },
        {
          q: "Which of these is a perfect cube?",
          options: ["243", "333", "441", "343"],
          answer: 3,
          explain: "343 = 7 × 7 × 7. The other numbers are not cubes of any natural number."
        },
        {
          q: "The cube of a number ending in 3 ends in:",
          options: ["3", "7", "9", "1"],
          answer: 1,
          explain: "3³ = 27, so the cube of any number ending in 3 ends in 7."
        },
        {
          q: "A cube has volume 3375 cm³. Its edge is:",
          options: ["13 cm", "25 cm", "15 cm", "45 cm"],
          answer: 2,
          explain: "Edge = ³√3375 = 15 cm, because 15 × 15 × 15 = 3375."
        },
        {
          q: "The smallest number by which 54 must be multiplied to get a perfect cube is:",
          options: ["2", "3", "6", "4"],
          answer: 3,
          explain: "54 = 2 × 3³. We need two more 2s to make a triplet, so multiply by 2 × 2 = 4. Then 54 × 4 = 216 = 6³."
        }
      ]
    },
    // ───────────────────────────── 7. Comparing Quantities ─────────────────────────────
    {
      id: "comparing-quantities",
      title: "Comparing Quantities",
      section: "Number",
      summary: "We use percentages to compare quantities, and apply them to profit and loss, discount, sales tax and GST, and compound interest.",
      notes: [
        {
          heading: "Percentages and change",
          points: [
            "**Percent** means 'per hundred', so x% = x/100. To find x% of a quantity, multiply: 25% of 480 = 25/100 × 480 = 120.",
            "Percentage change = (change ÷ original value) × 100. If a price falls from ₹ 250 to ₹ 200, the decrease is 50/250 × 100 = 20%.",
            "To increase a number by r%, multiply it by (100 + r)/100. To decrease it by r%, multiply by (100 − r)/100."
          ]
        },
        {
          heading: "Profit, loss and discount",
          points: [
            "Profit = SP − CP when SP > CP, and Loss = CP − SP when CP > SP. Profit % and loss % are always found on the **cost price**: Profit % = (Profit ÷ CP) × 100.",
            "The **marked price (MP)** is the price printed on an article. **Discount** = MP − SP, and Discount % = (Discount ÷ MP) × 100, found on the marked price.",
            "SP after a discount of d% = MP × (100 − d)/100. For MP ₹ 600 and 20% discount, SP = ₹ 480."
          ]
        },
        {
          heading: "Sales tax and GST",
          points: [
            "Tax is charged as a percentage of the price. Tax = rate% of price, and Bill amount = price + tax.",
            "In India, **GST (Goods and Services Tax)** is added to the price of most goods and services and is shown on the bill.",
            "If there is a discount and tax both, first reduce the price by the discount and then add tax on the discounted price."
          ]
        },
        {
          heading: "Compound interest",
          points: [
            "**Simple interest** is always calculated on the original principal: SI = P × R × T ÷ 100.",
            "In **compound interest**, the interest of each period is added to the principal, and the next interest is calculated on this bigger amount. So the interest grows every year.",
            "For n years at R% per annum compounded annually, Amount A = P(1 + R/100)ⁿ and CI = A − P.",
            "If interest is compounded half-yearly, use the rate R/2 for 2n half-years: A = P(1 + R/200)²ⁿ.",
            "The same idea works for growth and fall in value. Population growth uses P(1 + R/100)ⁿ and **depreciation** uses P(1 − R/100)ⁿ."
          ]
        }
      ],
      formulas: [
        "Percentage = (part ÷ whole) × 100",
        "Percentage change = (change ÷ original value) × 100",
        "Profit = SP − CP;  Loss = CP − SP",
        "Profit % = (Profit ÷ CP) × 100;  Loss % = (Loss ÷ CP) × 100",
        "SP = MP − Discount;  Discount % = (Discount ÷ MP) × 100",
        "Bill amount = price + tax",
        "Simple interest SI = P × R × T ÷ 100",
        "Compound interest: A = P(1 + R/100)ⁿ;  CI = A − P",
        "Half-yearly compounding: A = P(1 + R/200)²ⁿ",
        "Depreciation: value = P(1 − R/100)ⁿ"
      ],
      terms: [
        { term: "Cost price and selling price", meaning: "Cost price (CP) is what the seller pays for an article. Selling price (SP) is what the buyer pays." },
        { term: "Marked price", meaning: "The price printed on an article, before any discount." },
        { term: "Discount", meaning: "The reduction given on the marked price." },
        { term: "Principal and amount", meaning: "Principal is the money borrowed or invested. Amount is principal plus interest." },
        { term: "Compound interest", meaning: "Interest calculated on the principal plus the interest already earned." },
        { term: "Depreciation", meaning: "The fall in the value of an article with time, e.g. a machine losing value each year." }
      ],
      examples: [
        {
          q: "A shirt is marked at ₹ 800. The shopkeeper gives a discount of 15%, and then GST of 5% is added on the discounted price. Find the amount on the bill.",
          steps: [
            "Discount = 15% of 800 = 15/100 × 800 = ₹ 120",
            "Price after discount = 800 − 120 = ₹ 680",
            "GST = 5% of 680 = 5/100 × 680 = ₹ 34",
            "Bill amount = 680 + 34 = ₹ 714"
          ],
          answer: "₹ 714"
        },
        {
          q: "Find the compound interest on ₹ 8,000 for 2 years at 5% per annum, compounded annually.",
          steps: [
            "Use A = P(1 + R/100)ⁿ with P = 8000, R = 5 and n = 2.",
            "A = 8000 × (1 + 5/100)² = 8000 × (21/20)² = 8000 × 441/400",
            "= 20 × 441 = ₹ 8,820",
            "CI = A − P = 8820 − 8000 = ₹ 820",
            "Check year by year: interest of year 1 = ₹ 400, amount = ₹ 8,400; interest of year 2 = 5% of 8400 = ₹ 420; total interest = 400 + 420 = ₹ 820."
          ],
          answer: "Compound interest = ₹ 820 (amount = ₹ 8,820)"
        }
      ],
      qa: [
        { q: "A cycle bought for ₹ 1,500 is sold for ₹ 1,350. Find the loss per cent.", a: "Loss = 1500 − 1350 = ₹ 150. Loss % = 150/1500 × 100 = **10%**." },
        { q: "Why is compound interest more than simple interest when the time is more than one year?", a: "In simple interest the interest is always on the original principal. In compound interest the interest earned is added to the principal, so each later year's interest is on a larger amount. For the first year both are equal." },
        { q: "The population of a town is 50,000 and it grows by 10% every year. Find the population after 2 years.", a: "P = 50,000 × (1 + 10/100)² = 50,000 × 1.21 = **60,500**." }
      ],
      quiz: [
        {
          q: "The price of a book falls from ₹ 250 to ₹ 200. The percentage decrease is:",
          options: ["25%", "50%", "10%", "20%"],
          answer: 3,
          explain: "Decrease = ₹ 50, and 50/250 × 100 = 20%. The change is always compared with the original price."
        },
        {
          q: "An article bought for ₹ 400 is sold for ₹ 500. The profit per cent is:",
          options: ["20%", "80%", "25%", "100%"],
          answer: 2,
          explain: "Profit = ₹ 100 and Profit % = 100/400 × 100 = 25%, found on the cost price."
        },
        {
          q: "The marked price of a bag is ₹ 600 and the discount is 20%. The selling price is:",
          options: ["₹ 480", "₹ 120", "₹ 520", "₹ 580"],
          answer: 0,
          explain: "Discount = 20% of 600 = ₹ 120, so SP = 600 − 120 = ₹ 480."
        },
        {
          q: "The compound interest on ₹ 1,000 for 2 years at 10% per annum is:",
          options: ["₹ 200", "₹ 220", "₹ 1,210", "₹ 210"],
          answer: 3,
          explain: "A = 1000 × (1.1)² = ₹ 1,210, so CI = 1210 − 1000 = ₹ 210. (₹ 200 is the simple interest.)"
        },
        {
          q: "The amount on principal P at R% per annum, compounded annually for n years, is:",
          options: ["P(1 + nR/100)", "P(1 + R/100)ⁿ", "P(1 + R)ⁿ ÷ 100", "P × R × n ÷ 100"],
          answer: 1,
          explain: "Compound interest uses the growth factor (1 + R/100) multiplied n times. P(1 + nR/100) is the amount for simple interest."
        },
        {
          q: "An item priced at ₹ 2,000 carries a sales tax of 8%. The bill amount is:",
          options: ["₹ 160", "₹ 2,008", "₹ 2,160", "₹ 2,016"],
          answer: 2,
          explain: "Tax = 8% of 2000 = ₹ 160, so the bill = 2000 + 160 = ₹ 2,160."
        }
      ]
    },
    // ───────────────────────────── 8. Algebraic Expressions and Identities ─────────────────────────────
    {
      id: "algebraic-expressions-and-identities",
      title: "Algebraic Expressions and Identities",
      section: "Algebra",
      summary: "We multiply algebraic expressions and learn the standard identities (a + b)², (a − b)², (a + b)(a − b) and (x + a)(x + b), which make many calculations quick.",
      notes: [
        {
          heading: "Expressions and their terms",
          points: [
            "An **expression** is made from variables and constants using +, −, × and ÷. Terms are added to form an expression, and factors are multiplied to form a term. In 3x²y + 5 the terms are 3x²y and 5.",
            "The number multiplying the variables is the **coefficient**. In 3x²y the coefficient is 3.",
            "A **monomial** has one term, a **binomial** has two terms and a **trinomial** has three terms. In general, an expression with one or more terms is a **polynomial**.",
            "**Like terms** have the same variables with the same powers, such as 3x²y and −7x²y. Only like terms can be added or subtracted."
          ]
        },
        {
          heading: "Multiplying expressions",
          points: [
            "Monomial × monomial: multiply the coefficients and add the powers of the same variable. (3x²) × (−4x³) = −12x⁵.",
            "Monomial × polynomial: multiply every term by the monomial. 2x(3x − 5) = 6x² − 10x.",
            "Polynomial × polynomial: multiply each term of one by every term of the other, then combine like terms. (x + 2)(x + 3) = x² + 3x + 2x + 6 = x² + 5x + 6.",
            "To check an answer, put a number for the variable on both sides. For x = 1: (1 + 2)(1 + 3) = 12 and 1 + 5 + 6 = 12."
          ]
        },
        {
          heading: "Standard identities",
          points: [
            "An **identity** is an equality that is true for every value of the variables. An equation is true only for particular values.",
            "(a + b)² = a² + 2ab + b² and (a − b)² = a² − 2ab + b². Remember: (a + b)² is **not** a² + b².",
            "(a + b)(a − b) = a² − b², the difference of two squares.",
            "(x + a)(x + b) = x² + (a + b)x + ab."
          ]
        },
        {
          heading: "Using identities",
          points: [
            "Squares: 102² = (100 + 2)² = 10000 + 400 + 4 = 10404, and 98² = (100 − 2)² = 10000 − 400 + 4 = 9604.",
            "Products: 53 × 47 = (50 + 3)(50 − 3) = 2500 − 9 = 2491.",
            "(a + b)² − (a − b)² = 4ab and (a + b)² + (a − b)² = 2(a² + b²).",
            "If a + b and ab are known, then a² + b² = (a + b)² − 2ab."
          ]
        }
      ],
      formulas: [
        "(a + b)² = a² + 2ab + b²",
        "(a − b)² = a² − 2ab + b²",
        "(a + b)(a − b) = a² − b²",
        "(x + a)(x + b) = x² + (a + b)x + ab",
        "(a + b)² − (a − b)² = 4ab",
        "(a + b)² + (a − b)² = 2(a² + b²)",
        "a² + b² = (a + b)² − 2ab",
        "xᵐ × xⁿ = xᵐ⁺ⁿ"
      ],
      terms: [
        { term: "Term", meaning: "A part of an expression separated by + or − signs, e.g. 3x² and −5y in 3x² − 5y." },
        { term: "Coefficient", meaning: "The numerical factor of a term. In −7xy the coefficient is −7." },
        { term: "Like terms", meaning: "Terms with the same variables raised to the same powers, e.g. 4ab and −9ab." },
        { term: "Monomial, binomial, trinomial", meaning: "Expressions with one, two and three terms respectively." },
        { term: "Identity", meaning: "An equality that holds for every value of the variables, e.g. (a + b)² = a² + 2ab + b²." }
      ],
      examples: [
        {
          q: "Multiply (3x + 2) by (x − 5).",
          steps: [
            "(3x + 2)(x − 5) = 3x(x) + 3x(−5) + 2(x) + 2(−5)",
            "= 3x² − 15x + 2x − 10",
            "Combine the like terms: −15x + 2x = −13x"
          ],
          answer: "3x² − 13x − 10"
        },
        {
          q: "Use identities to find (i) 103 × 97 and (ii) 52².",
          steps: [
            "(i) 103 × 97 = (100 + 3)(100 − 3) = 100² − 3² = 10000 − 9 = 9991",
            "(ii) 52² = (50 + 2)² = 50² + 2 × 50 × 2 + 2² = 2500 + 200 + 4 = 2704"
          ],
          answer: "(i) 9991  (ii) 2704"
        }
      ],
      qa: [
        { q: "Expand (x + 4)(x − 7).", a: "Use (x + a)(x + b) = x² + (a + b)x + ab with a = 4 and b = −7: x² + (4 − 7)x + (4)(−7) = **x² − 3x − 28**." },
        { q: "Is (a + b)² = a² + b²? Check with a = 2 and b = 3.", a: "No. (2 + 3)² = 25, but 2² + 3² = 13. The missing part is 2ab = 12, and 13 + 12 = 25. The correct identity is (a + b)² = a² + **2ab** + b²." },
        { q: "What is the difference between an identity and an equation?", a: "An **identity** is true for every value of the variable, e.g. (x + 1)² = x² + 2x + 1. An **equation** is true only for certain values, e.g. x + 1 = 3 is true only for x = 2." }
      ],
      quiz: [
        {
          q: "Which of the following is a binomial?",
          options: ["7x²y", "x + y + z", "4", "3a − 5b"],
          answer: 3,
          explain: "A binomial has exactly two terms. 3a − 5b has two terms, 7x²y and 4 have one, and x + y + z has three."
        },
        {
          q: "The product of 3x² and −4x³ is:",
          options: ["−12x⁶", "−12x⁵", "−7x⁵", "12x⁵"],
          answer: 1,
          explain: "Multiply the coefficients, 3 × (−4) = −12, and add the powers, x² × x³ = x⁵."
        },
        {
          q: "(x + 5)² =",
          options: ["x² + 25", "x² + 5x + 25", "x² + 10x + 25", "x² + 10x + 10"],
          answer: 2,
          explain: "(a + b)² = a² + 2ab + b², so (x + 5)² = x² + 2(x)(5) + 25 = x² + 10x + 25."
        },
        {
          q: "(2a − 3b)(2a + 3b) =",
          options: ["4a² − 9b²", "4a² + 9b²", "2a² − 3b²", "4a² − 12ab + 9b²"],
          answer: 0,
          explain: "(a + b)(a − b) = a² − b² with a = 2a and b = 3b gives (2a)² − (3b)² = 4a² − 9b²."
        },
        {
          q: "Using an identity, 99 × 101 =",
          options: ["9899", "10001", "9901", "9999"],
          answer: 3,
          explain: "99 × 101 = (100 − 1)(100 + 1) = 100² − 1² = 10000 − 1 = 9999."
        },
        {
          q: "If a + b = 7 and ab = 10, then a² + b² =",
          options: ["29", "39", "49", "69"],
          answer: 0,
          explain: "a² + b² = (a + b)² − 2ab = 49 − 20 = 29."
        }
      ]
    },
    // ───────────────────────────── 9. Mensuration ─────────────────────────────
    {
      id: "mensuration",
      title: "Mensuration",
      section: "Mensuration",
      summary: "We find the areas of a trapezium, a rhombus and a general quadrilateral, and the surface area and volume of a cube, a cuboid and a cylinder.",
      notes: [
        {
          heading: "Area of plane figures",
          points: [
            "Triangle = ½ × base × height. Parallelogram = base × height. Rhombus = ½ × d₁ × d₂, where d₁ and d₂ are its diagonals.",
            "**Trapezium** = ½ × (sum of the parallel sides) × (distance between them). It can be cut into two triangles of the same height.",
            "**General quadrilateral:** a diagonal d splits it into two triangles. Area = ½ × d × (h₁ + h₂), where h₁ and h₂ are the perpendicular distances of the other two vertices from d.",
            "Area is measured in square units. 1 m² = 10,000 cm²."
          ]
        },
        {
          heading: "Surface area of solids",
          points: [
            "**Total surface area (TSA)** is the area of all the faces. **Lateral (curved) surface area** leaves out the top and bottom.",
            "Cuboid with length l, breadth b and height h: TSA = 2(lb + bh + hl) and LSA = 2h(l + b).",
            "Cube of edge a: TSA = 6a² and LSA = 4a².",
            "Cylinder of radius r and height h: CSA = 2πrh and TSA = 2πr(r + h). The curved surface opens out into a rectangle of size 2πr × h."
          ]
        },
        {
          heading: "Volume and capacity",
          points: [
            "**Volume** is the space occupied by a solid, in cubic units. Cuboid = l × b × h, cube = a³, cylinder = πr²h (base area × height).",
            "Capacity: 1 cm³ = 1 mL, 1000 cm³ = 1 litre, and 1 m³ = 1000 litres.",
            "Take π = 22/7 unless told otherwise. It is convenient when the radius is a multiple of 7.",
            "Make sure all measurements are in the same unit before calculating."
          ]
        }
      ],
      formulas: [
        "Area of a trapezium = ½ × (a + b) × h",
        "Area of a rhombus = ½ × d₁ × d₂",
        "Area of a quadrilateral = ½ × d × (h₁ + h₂)",
        "Cuboid: TSA = 2(lb + bh + hl);  LSA = 2h(l + b);  V = l × b × h",
        "Cube: TSA = 6a²;  LSA = 4a²;  V = a³",
        "Cylinder: CSA = 2πrh;  TSA = 2πr(r + h);  V = πr²h",
        "1 m³ = 1000 litres;  1 litre = 1000 cm³"
      ],
      terms: [
        { term: "Trapezium", meaning: "A quadrilateral with one pair of parallel sides." },
        { term: "Total surface area (TSA)", meaning: "The sum of the areas of all the faces of a solid." },
        { term: "Lateral surface area (LSA)", meaning: "The area of the side faces only, leaving out the top and bottom." },
        { term: "Volume", meaning: "The amount of space a solid occupies, measured in cubic units." },
        { term: "Capacity", meaning: "The amount a container can hold, usually in litres or millilitres." }
      ],
      examples: [
        {
          q: "A field is shaped like a trapezium with parallel sides 25 m and 15 m. The distance between them is 12 m. Find its area.",
          steps: [
            "Area = ½ × (sum of parallel sides) × height",
            "= ½ × (25 + 15) × 12",
            "= ½ × 40 × 12 = 20 × 12 = 240"
          ],
          answer: "240 m²"
        },
        {
          q: "A cylinder has radius 7 cm and height 20 cm. Find its curved surface area and volume. (Use π = 22/7)",
          steps: [
            "CSA = 2πrh = 2 × 22/7 × 7 × 20",
            "= 2 × 22 × 20 = 880 cm²",
            "V = πr²h = 22/7 × 7 × 7 × 20",
            "= 22 × 7 × 20 = 3080 cm³"
          ],
          answer: "CSA = 880 cm² and volume = 3080 cm³"
        }
      ],
      qa: [
        { q: "Find the area of a rhombus whose diagonals are 16 cm and 12 cm.", a: "Area = ½ × d₁ × d₂ = ½ × 16 × 12 = **96 cm²**." },
        { q: "A cuboid measures 10 cm × 8 cm × 5 cm. Find its total surface area and volume.", a: "TSA = 2(lb + bh + hl) = 2(80 + 40 + 50) = 2 × 170 = **340 cm²**. Volume = 10 × 8 × 5 = **400 cm³**." },
        { q: "A water tank is 2 m long, 1.5 m wide and 1 m deep. How many litres can it hold?", a: "Volume = 2 × 1.5 × 1 = 3 m³. Since 1 m³ = 1000 litres, the capacity is **3000 litres**." }
      ],
      quiz: [
        {
          q: "A trapezium has parallel sides 10 cm and 6 cm, and height 5 cm. Its area is:",
          options: ["40 cm²", "80 cm²", "60 cm²", "30 cm²"],
          answer: 0,
          explain: "Area = ½ × (10 + 6) × 5 = ½ × 16 × 5 = 40 cm². Do not forget the ½."
        },
        {
          q: "The total surface area of a cube of edge 5 cm is:",
          options: ["100 cm²", "150 cm²", "125 cm²", "25 cm²"],
          answer: 1,
          explain: "TSA = 6a² = 6 × 25 = 150 cm². (125 is the volume.)"
        },
        {
          q: "The volume of a cylinder of radius 3.5 cm and height 10 cm is (π = 22/7):",
          options: ["220 cm³", "110 cm³", "385 cm³", "1540 cm³"],
          answer: 2,
          explain: "V = πr²h = 22/7 × 3.5 × 3.5 × 10 = 385 cm³. (220 cm² is the curved surface area.)"
        },
        {
          q: "1 cubic metre is equal to:",
          options: ["1000 litres", "10 litres", "100 litres", "10,000 litres"],
          answer: 0,
          explain: "A cube of edge 1 m can be filled by 1000 litres, so 1 m³ = 1000 litres."
        },
        {
          q: "The diagonals of a rhombus are 10 cm and 24 cm. Its area is:",
          options: ["240 cm²", "60 cm²", "34 cm²", "120 cm²"],
          answer: 3,
          explain: "Area = ½ × d₁ × d₂ = ½ × 10 × 24 = 120 cm²."
        },
        {
          q: "A room is 6 m long, 4 m wide and 3 m high. The area of its four walls is:",
          options: ["72 m²", "24 m²", "60 m²", "108 m²"],
          answer: 2,
          explain: "Area of four walls = LSA = 2h(l + b) = 2 × 3 × (6 + 4) = 60 m². (72 m³ is the volume.)"
        }
      ]
    },
    // ───────────────────────────── 10. Exponents and Powers ─────────────────────────────
    {
      id: "exponents-and-powers",
      title: "Exponents and Powers",
      section: "Number",
      summary: "We extend powers to negative integers, learn the laws of exponents for all integer powers, and write very large and very small numbers in standard form.",
      notes: [
        {
          heading: "Negative exponents",
          points: [
            "For a non-zero number a, a⁻ⁿ = 1/aⁿ. So 2⁻³ = 1/2³ = 1/8.",
            "a⁻ⁿ is the **multiplicative inverse (reciprocal)** of aⁿ. In particular, a⁻¹ = 1/a.",
            "For fractions, (a/b)⁻ⁿ = (b/a)ⁿ. For example, (2/3)⁻² = (3/2)² = 9/4.",
            "A negative exponent does not make the number negative. 2⁻³ = 1/8 is positive.",
            "a⁰ = 1 for every non-zero number a."
          ]
        },
        {
          heading: "Laws of exponents",
          points: [
            "For the same base: aᵐ × aⁿ = aᵐ⁺ⁿ and aᵐ ÷ aⁿ = aᵐ⁻ⁿ.",
            "Power of a power: (aᵐ)ⁿ = aᵐⁿ.",
            "For the same exponent: aᵐ × bᵐ = (ab)ᵐ and aᵐ ÷ bᵐ = (a/b)ᵐ.",
            "These laws hold for all integer exponents, positive, zero or negative. For example, 5⁷ ÷ 5⁹ = 5⁻² = 1/25."
          ]
        },
        {
          heading: "Standard form",
          points: [
            "Very large or very small numbers are written in **standard form** (scientific notation) as k × 10ⁿ, where 1 ≤ k < 10 and n is an integer.",
            "Large numbers have a positive n: 45 lakh = 45,00,000 = 4.5 × 10⁶. The distance of the Earth from the Sun is about 15 crore km = 1.5 × 10⁸ km.",
            "Small numbers have a negative n: 0.000007 = 7 × 10⁻⁶.",
            "To compare numbers in standard form, compare the powers of 10 first, then the values of k. To add them, write both with the same power of 10: 3 × 10⁴ + 5 × 10³ = 30,000 + 5,000 = 35,000 = 3.5 × 10⁴."
          ]
        }
      ],
      formulas: [
        "aᵐ × aⁿ = aᵐ⁺ⁿ;  aᵐ ÷ aⁿ = aᵐ⁻ⁿ",
        "(aᵐ)ⁿ = aᵐⁿ",
        "aᵐ × bᵐ = (ab)ᵐ;  aᵐ ÷ bᵐ = (a/b)ᵐ",
        "a⁰ = 1  (a ≠ 0)",
        "a⁻ⁿ = 1/aⁿ;  (a/b)⁻ⁿ = (b/a)ⁿ",
        "Standard form: k × 10ⁿ, with 1 ≤ k < 10 and n an integer"
      ],
      terms: [
        { term: "Base and exponent", meaning: "In aⁿ, a is the base and n is the exponent (power). It tells how many times the base is multiplied." },
        { term: "Negative exponent", meaning: "a⁻ⁿ means 1/aⁿ, the reciprocal of aⁿ." },
        { term: "Reciprocal", meaning: "The number that gives 1 when multiplied by the given number. The reciprocal of 4 is 1/4." },
        { term: "Standard form", meaning: "Writing a number as k × 10ⁿ with 1 ≤ k < 10, e.g. 3.5 × 10⁻⁴." },
        { term: "Zero exponent", meaning: "Any non-zero number raised to the power 0 equals 1." }
      ],
      examples: [
        {
          q: "Evaluate (1/2)⁻³ + (1/3)⁻² + (1/4)⁻¹.",
          steps: [
            "(1/2)⁻³ = 2³ = 8",
            "(1/3)⁻² = 3² = 9",
            "(1/4)⁻¹ = 4",
            "Sum = 8 + 9 + 4 = 21"
          ],
          answer: "21"
        },
        {
          q: "Express (i) 0.00000052 and (ii) 45,00,000 in standard form.",
          steps: [
            "(i) Move the decimal point 7 places to the right to get 5.2. So 0.00000052 = 5.2 × 10⁻⁷.",
            "(ii) 45,00,000 = 4500000. Move the decimal point 6 places to the left to get 4.5. So 45,00,000 = 4.5 × 10⁶."
          ],
          answer: "(i) 5.2 × 10⁻⁷  (ii) 4.5 × 10⁶"
        }
      ],
      qa: [
        { q: "Find x if 5ˣ ÷ 5⁻³ = 5⁵.", a: "By aᵐ ÷ aⁿ = aᵐ⁻ⁿ, the left side is 5 raised to the power x − (−3) = x + 3. So x + 3 = 5 and **x = 2**." },
        { q: "Evaluate (−2)⁻³.", a: "(−2)⁻³ = 1/(−2)³ = 1/(−8) = **−1/8**." },
        { q: "Why is a⁰ = 1 for a ≠ 0?", a: "By the law of division, aᵐ ÷ aᵐ = aᵐ⁻ᵐ = a⁰. But any non-zero number divided by itself is 1. Hence **a⁰ = 1**." }
      ],
      quiz: [
        {
          q: "3⁻² =",
          options: ["−9", "−6", "1/6", "1/9"],
          answer: 3,
          explain: "3⁻² = 1/3² = 1/9. A negative exponent means the reciprocal, not a negative number."
        },
        {
          q: "(2/5)⁻³ =",
          options: ["125/8", "8/125", "−8/125", "−125/8"],
          answer: 0,
          explain: "(2/5)⁻³ = (5/2)³ = 125/8. Flip the fraction and make the exponent positive."
        },
        {
          q: "7⁵ ÷ 7⁸ =",
          options: ["7³", "7¹³", "7⁻³", "7⁴⁰"],
          answer: 2,
          explain: "aᵐ ÷ aⁿ = aᵐ⁻ⁿ, so 7⁵ ÷ 7⁸ = 7⁵⁻⁸ = 7⁻³."
        },
        {
          q: "The standard form of 0.00035 is:",
          options: ["3.5 × 10⁻³", "3.5 × 10⁴", "3.5 × 10⁻⁴", "3.5 × 10⁻⁵"],
          answer: 2,
          explain: "Move the decimal point 4 places to the right to get 3.5, so 0.00035 = 3.5 × 10⁻⁴."
        },
        {
          q: "The value of (5⁰ + 4⁻¹) × 2² is:",
          options: ["4", "5", "9", "1"],
          answer: 1,
          explain: "5⁰ = 1 and 4⁻¹ = 1/4, so the bracket is 5/4. Then 5/4 × 4 = 5."
        },
        {
          q: "Which of these is equal to 10⁻³?",
          options: ["0.001", "0.0001", "−1000", "0.01"],
          answer: 0,
          explain: "10⁻³ = 1/10³ = 1/1000 = 0.001."
        }
      ]
    },
    // ───────────────────────────── 11. Direct and Inverse Proportions ─────────────────────────────
    {
      id: "direct-and-inverse-proportions",
      title: "Direct and Inverse Proportions",
      section: "Number",
      summary: "Some quantities change together in a fixed way. We learn to tell direct proportion from inverse proportion and to solve problems on cost, speed, time and work.",
      notes: [
        {
          heading: "Direct proportion",
          points: [
            "Two quantities are in **direct proportion** if they increase together or decrease together, in such a way that their **ratio stays the same**.",
            "If x and y are in direct proportion, then x₁/y₁ = x₂/y₂ (= k). For example, if 1 kg of rice costs ₹ 60, then 3 kg cost ₹ 180. The ratio cost ÷ weight is always 60.",
            "More examples: the cost and the number of articles, the distance and the time at constant speed, and the distance on a map and the real distance."
          ]
        },
        {
          heading: "Inverse proportion",
          points: [
            "Two quantities are in **inverse proportion** if one increases when the other decreases, in such a way that their **product stays the same**.",
            "If x and y are in inverse proportion, then x₁ × y₁ = x₂ × y₂. For example, 6 workers take 12 days for a job and 12 workers take 6 days: 6 × 12 = 12 × 6 = 72.",
            "More examples: speed and time for a fixed distance, the number of workers and days for the same work, and the number of taps and time to fill a tank."
          ]
        },
        {
          heading: "Solving problems",
          points: [
            "First decide the type. Ask: when one quantity increases, does the other increase (direct) or decrease (inverse)?",
            "The **unitary method** helps: find the value for one unit, then for the required number of units.",
            "Direct: x₁/y₁ = x₂/y₂. Inverse: x₁ × y₁ = x₂ × y₂.",
            "Not every pair that increases together is in proportion. A child's age and height both increase, but not in a fixed ratio."
          ]
        }
      ],
      formulas: [
        "Direct proportion: x/y = k (constant);  x₁/y₁ = x₂/y₂",
        "Inverse proportion: x × y = k (constant);  x₁ × y₁ = x₂ × y₂",
        "Distance = Speed × Time",
        "For the same work: number of workers × number of days = constant",
        "Cost of n articles = n × cost of one article"
      ],
      terms: [
        { term: "Direct proportion", meaning: "Two quantities that increase or decrease together with a constant ratio." },
        { term: "Inverse proportion", meaning: "Two quantities where one increases as the other decreases, with a constant product." },
        { term: "Constant of proportionality", meaning: "The fixed ratio (direct) or fixed product (inverse), usually written k." },
        { term: "Unitary method", meaning: "Finding the value of one unit first and then the value of the required number of units." },
        { term: "Ratio", meaning: "A comparison of two quantities by division, e.g. 12 : 420." }
      ],
      examples: [
        {
          q: "12 notebooks cost ₹ 420. Find the cost of 20 notebooks.",
          steps: [
            "More notebooks cost more money, so this is direct proportion.",
            "Cost of 1 notebook = 420 ÷ 12 = ₹ 35",
            "Cost of 20 notebooks = 20 × 35 = ₹ 700",
            "Check with ratios: 12/420 = 20/x gives x = 420 × 20 ÷ 12 = 700"
          ],
          answer: "₹ 700"
        },
        {
          q: "15 workers can build a wall in 24 days. How many days will 20 workers (working at the same rate) take?",
          steps: [
            "More workers take fewer days, so this is inverse proportion.",
            "15 × 24 = 20 × d",
            "360 = 20 × d, so d = 360 ÷ 20 = 18"
          ],
          answer: "18 days"
        }
      ],
      qa: [
        { q: "A car travels 180 km in 3 hours. How far will it go in 5 hours at the same speed?", a: "Speed = 180 ÷ 3 = 60 km/h. Distance and time are in direct proportion, so distance in 5 hours = 60 × 5 = **300 km**." },
        { q: "A bus takes 4 hours at 60 km/h for a journey. How long will it take at 80 km/h?", a: "For a fixed distance, speed and time are in inverse proportion. 60 × 4 = 80 × t, so 240 = 80t and t = **3 hours**." },
        { q: "How can you tell whether two quantities are in direct or inverse proportion from a table of values?", a: "Check the **ratio** y/x for each pair: if it is constant, the quantities are in direct proportion (e.g. (2, 5), (4, 10), (6, 15)). Check the **product** xy: if it is constant, they are in inverse proportion (e.g. (2, 12), (3, 8), (4, 6), where xy = 24)." }
      ],
      quiz: [
        {
          q: "8 pens cost ₹ 96. The cost of 5 pens is:",
          options: ["₹ 60", "₹ 48", "₹ 72", "₹ 120"],
          answer: 0,
          explain: "One pen costs 96 ÷ 8 = ₹ 12, so 5 pens cost 5 × 12 = ₹ 60."
        },
        {
          q: "6 men can finish a job in 10 days. 15 men will finish the same job in:",
          options: ["25 days", "4 days", "16 days", "6 days"],
          answer: 1,
          explain: "Men × days is constant: 6 × 10 = 60 = 15 × d, so d = 4."
        },
        {
          q: "Which pair of quantities is in inverse proportion?",
          options: ["Number of articles bought and total cost", "Distance travelled and time taken at constant speed", "Speed and time taken to cover a fixed distance", "Side of a square and its perimeter"],
          answer: 2,
          explain: "At a fixed distance, a higher speed means less time, and speed × time stays constant. The other pairs are in direct proportion."
        },
        {
          q: "x and y are in direct proportion. When x = 4, y = 20. When x = 7, y =",
          options: ["23", "28", "140", "35"],
          answer: 3,
          explain: "y/x = 20/4 = 5 is constant, so y = 5 × 7 = 35."
        },
        {
          q: "On a map, 1 cm represents 25 km. A distance of 4.5 cm on the map is really:",
          options: ["112.5 km", "5.6 km", "29.5 km", "100 km"],
          answer: 0,
          explain: "Map distance and real distance are in direct proportion: 4.5 × 25 = 112.5 km."
        },
        {
          q: "12 men can complete a work in 15 days. 9 men will complete it in:",
          options: ["11.25 days", "20 days", "12 days", "18 days"],
          answer: 1,
          explain: "12 × 15 = 180 = 9 × d, so d = 20. Fewer men take more days."
        }
      ]
    },
    // ───────────────────────────── 12. Factorisation ─────────────────────────────
    {
      id: "factorisation",
      title: "Factorisation",
      section: "Algebra",
      summary: "Factorisation writes an algebraic expression as a product of its factors. We use common factors, regrouping and identities, and then divide algebraic expressions.",
      notes: [
        {
          heading: "Common factors",
          points: [
            "A **factor** divides an expression exactly. **Factorisation** means writing an expression as a product of factors, e.g. 3x² + 6x = 3x(x + 2).",
            "To factorise by common factors, find the HCF of all the terms, take it out, and write what remains inside a bracket: 12a²b + 18ab² = 6ab(2a + 3b).",
            "A factor that cannot be broken down further is **irreducible**.",
            "You can always check by multiplying the factors back."
          ]
        },
        {
          heading: "Regrouping terms",
          points: [
            "If the terms have no common factor, group them in pairs: 2xy + 3x + 2y + 3 = x(2y + 3) + 1(2y + 3) = (x + 1)(2y + 3).",
            "After taking the common factor out of each group, a common **bracket** should appear. If it does not, try a different grouping.",
            "Watch the signs: ax − ay − bx + by = a(x − y) − b(x − y) = (a − b)(x − y)."
          ]
        },
        {
          heading: "Factorising using identities",
          points: [
            "a² + 2ab + b² = (a + b)² and a² − 2ab + b² = (a − b)².",
            "a² − b² = (a + b)(a − b). For example, 49x² − 25 = (7x + 5)(7x − 5).",
            "x² + (a + b)x + ab = (x + a)(x + b). Find two numbers whose sum is the coefficient of x and whose product is the constant term. For x² + 8x + 15, the numbers 3 and 5 give (x + 3)(x + 5).",
            "Always take out a common factor first: 18x² − 8 = 2(9x² − 4) = 2(3x + 2)(3x − 2)."
          ]
        },
        {
          heading: "Division of algebraic expressions",
          points: [
            "Monomial ÷ monomial: divide the coefficients and subtract the powers of the same variable. 28x³y² ÷ 7xy = 4x²y.",
            "Polynomial ÷ monomial: divide each term. (6x² + 9x) ÷ 3x = 2x + 3.",
            "Polynomial ÷ polynomial: factorise and cancel common factors. (x² − 9) ÷ (x − 3) = (x + 3)(x − 3) ÷ (x − 3) = x + 3.",
            "Cancel only **factors**, never terms. (x + 5)/5 is not x + 1.",
            "Check: dividend = divisor × quotient + remainder."
          ]
        }
      ],
      formulas: [
        "ab + ac = a(b + c)",
        "a² + 2ab + b² = (a + b)²",
        "a² − 2ab + b² = (a − b)²",
        "a² − b² = (a + b)(a − b)",
        "x² + (a + b)x + ab = (x + a)(x + b)",
        "Dividend = Divisor × Quotient + Remainder"
      ],
      terms: [
        { term: "Factor", meaning: "A number or expression that divides another exactly, e.g. x + 2 is a factor of x² + 5x + 6." },
        { term: "Factorisation", meaning: "Writing an expression as a product of its factors." },
        { term: "Common factor", meaning: "A factor that appears in every term of an expression." },
        { term: "Regrouping", meaning: "Arranging the terms in groups so that a common bracket can be taken out." },
        { term: "Difference of two squares", meaning: "An expression of the form a² − b², which factorises as (a + b)(a − b)." },
        { term: "Irreducible factor", meaning: "A factor that cannot be factorised any further." }
      ],
      examples: [
        {
          q: "Factorise 2xy + 3x + 2y + 3.",
          steps: [
            "Group the terms: (2xy + 3x) + (2y + 3)",
            "Take the common factor out of each group: x(2y + 3) + 1(2y + 3)",
            "Now (2y + 3) is common: (x + 1)(2y + 3)",
            "Check: (x + 1)(2y + 3) = 2xy + 3x + 2y + 3"
          ],
          answer: "(x + 1)(2y + 3)"
        },
        {
          q: "Factorise 18x² − 8.",
          steps: [
            "Take out the common factor 2: 18x² − 8 = 2(9x² − 4)",
            "9x² − 4 = (3x)² − 2² = (3x + 2)(3x − 2)",
            "So 18x² − 8 = 2(3x + 2)(3x − 2)",
            "Check: (3x + 2)(3x − 2) = 9x² − 4, and 2 × (9x² − 4) = 18x² − 8"
          ],
          answer: "2(3x + 2)(3x − 2)"
        }
      ],
      qa: [
        { q: "Factorise x² + 8x + 15.", a: "We need two numbers with sum 8 and product 15. These are 3 and 5, so x² + 8x + 15 = **(x + 3)(x + 5)**." },
        { q: "Divide 28x³y² by 7xy.", a: "28 ÷ 7 = 4, x³ ÷ x = x² and y² ÷ y = y. So 28x³y² ÷ 7xy = **4x²y**." },
        { q: "A student writes (x + 5)/5 = x + 1. Find the mistake.", a: "Only a **factor** common to the whole numerator can be cancelled. Here 5 divides only one term. The correct step is (x + 5)/5 = x/5 + 5/5 = **x/5 + 1**." }
      ],
      quiz: [
        {
          q: "The HCF of 12a²b and 18ab² is:",
          options: ["6ab", "12ab", "3ab", "6a²b²"],
          answer: 0,
          explain: "HCF of 12 and 18 is 6; the smallest power of a is a and of b is b. So the HCF is 6ab."
        },
        {
          q: "x² − 49 =",
          options: ["(x − 7)²", "(x + 7)²", "x(x − 49)", "(x + 7)(x − 7)"],
          answer: 3,
          explain: "x² − 49 = x² − 7² = (x + 7)(x − 7), the difference of two squares."
        },
        {
          q: "x² + 10x + 25 =",
          options: ["(x + 10)²", "(x + 25)(x + 1)", "(x − 5)²", "(x + 5)²"],
          answer: 3,
          explain: "x² + 2(x)(5) + 5² = (x + 5)²."
        },
        {
          q: "x² + 5x + 6 =",
          options: ["(x + 1)(x + 6)", "(x + 2)(x + 3)", "(x − 2)(x − 3)", "(x + 5)(x + 1)"],
          answer: 1,
          explain: "2 + 3 = 5 and 2 × 3 = 6, so x² + 5x + 6 = (x + 2)(x + 3)."
        },
        {
          q: "(x² − 9) ÷ (x − 3) =",
          options: ["x + 3", "x − 3", "x + 9", "x² + 3"],
          answer: 0,
          explain: "x² − 9 = (x + 3)(x − 3). Cancelling the factor (x − 3) leaves x + 3."
        },
        {
          q: "4x² − 12x + 9 =",
          options: ["(2x + 3)²", "(4x − 3)²", "(2x − 3)²", "(2x − 9)(2x − 1)"],
          answer: 2,
          explain: "4x² − 12x + 9 = (2x)² − 2(2x)(3) + 3² = (2x − 3)²."
        }
      ]
    },
    // ───────────────────────────── 13. Introduction to Graphs ─────────────────────────────
    {
      id: "introduction-to-graphs",
      title: "Introduction to Graphs",
      section: "Data",
      summary: "We read line graphs, learn to name and plot points on the coordinate plane using axes, and draw linear graphs.",
      notes: [
        {
          heading: "Reading graphs",
          points: [
            "A **line graph** shows how a quantity changes, usually with time, by joining points with line segments. Examples are the temperature during a day or the height of a plant each week.",
            "The quantity that we choose (such as time) goes on the horizontal axis. The quantity that depends on it (such as temperature) goes on the vertical axis.",
            "A rising line means the quantity is increasing, a falling line means it is decreasing, and a horizontal line means it is not changing.",
            "Choose a suitable **scale** for each axis, e.g. 1 cm = 10 units, so that the graph fits on the page."
          ]
        },
        {
          heading: "The coordinate plane",
          points: [
            "Two perpendicular number lines, the horizontal **x-axis** and the vertical **y-axis**, meet at the **origin** O(0, 0).",
            "The position of a point is written as (x, y). The x-coordinate (**abscissa**) is the distance from the y-axis and the y-coordinate (**ordinate**) is the distance from the x-axis. (3, 5) and (5, 3) are different points.",
            "The axes divide the plane into four **quadrants**: I (+, +), II (−, +), III (−, −) and IV (+, −), numbered anticlockwise.",
            "A point on the x-axis has y = 0, like (4, 0). A point on the y-axis has x = 0, like (0, −3)."
          ]
        },
        {
          heading: "Plotting points and linear graphs",
          points: [
            "To plot (x, y), start at the origin, move |x| units along the x-axis (right if x is positive, left if negative), then |y| units up or down.",
            "Make a table of values, plot the points and join them. If the points lie on a straight line, the graph is a **linear graph**.",
            "A car at a steady 40 km/h covers 40 km in 1 hour, 80 km in 2 hours and 120 km in 3 hours. The points (1, 40), (2, 80) and (3, 120) lie on a straight line through the origin.",
            "Quantities in direct proportion (y = kx) always give a straight line through the origin."
          ]
        }
      ],
      formulas: [
        "Point P(x, y): x is the abscissa and y is the ordinate",
        "Origin = (0, 0);  point on the x-axis = (a, 0);  point on the y-axis = (0, b)",
        "Quadrant I (+, +);  II (−, +);  III (−, −);  IV (+, −)",
        "Graph of y = kx (direct proportion) is a straight line through the origin"
      ],
      terms: [
        { term: "x-axis and y-axis", meaning: "The horizontal and vertical number lines of the coordinate plane." },
        { term: "Origin", meaning: "The point (0, 0) where the two axes meet." },
        { term: "Abscissa and ordinate", meaning: "The x-coordinate and y-coordinate of a point. In (7, −2) the abscissa is 7 and the ordinate is −2." },
        { term: "Quadrant", meaning: "One of the four regions into which the axes divide the plane." },
        { term: "Line graph", meaning: "A graph that joins points by line segments to show how a quantity changes." },
        { term: "Linear graph", meaning: "A graph whose points lie on a straight line." }
      ],
      examples: [
        {
          q: "Name the quadrant or axis in which each point lies: (4, 3), (−5, 2), (−3, −7), (6, −1) and (0, −4).",
          steps: [
            "(4, 3): x positive, y positive, so Quadrant I",
            "(−5, 2): x negative, y positive, so Quadrant II",
            "(−3, −7): both negative, so Quadrant III",
            "(6, −1): x positive, y negative, so Quadrant IV",
            "(0, −4): x = 0, so the point is on the y-axis (below the origin)"
          ],
          answer: "I, II, III, IV and the negative y-axis"
        },
        {
          q: "A car moves at a steady speed of 40 km per hour. Draw the distance–time graph for the first 4 hours and use it to find the time taken to cover 100 km.",
          steps: [
            "Distance = 40 × time. For t = 1, 2, 3, 4 hours the distance is 40, 80, 120, 160 km.",
            "Plot (1, 40), (2, 80), (3, 120), (4, 160) with time on the horizontal axis and distance on the vertical axis.",
            "The points lie on a straight line through the origin (0, 0).",
            "100 km lies halfway between 80 km (2 hours) and 120 km (3 hours), so the time is 2.5 hours. Check: 40 × 2.5 = 100."
          ],
          answer: "A straight line through the origin; 100 km takes 2.5 hours"
        }
      ],
      qa: [
        { q: "Write the abscissa and ordinate of the point (5, −3). In which quadrant does it lie?", a: "The abscissa is **5** and the ordinate is **−3**. Since x is positive and y is negative, the point lies in **Quadrant IV**." },
        { q: "In a line graph of temperature against time, which quantity goes on the horizontal axis and why?", a: "**Time** goes on the horizontal axis because it is the quantity we choose, and the temperature depends on it, so temperature goes on the vertical axis." },
        { q: "How does a line graph differ from a bar graph?", a: "A bar graph compares separate categories with bars of different heights. A **line graph** joins points with line segments to show how a quantity changes continuously, usually with time." }
      ],
      quiz: [
        {
          q: "The point (−4, 6) lies in:",
          options: ["Quadrant I", "Quadrant III", "Quadrant IV", "Quadrant II"],
          answer: 3,
          explain: "x is negative and y is positive, which is the second quadrant (−, +)."
        },
        {
          q: "A point on the x-axis has coordinates of the form:",
          options: ["(a, 0)", "(0, b)", "(a, a)", "(a, −a)"],
          answer: 0,
          explain: "Every point on the x-axis is at distance 0 from the x-axis, so its y-coordinate is 0."
        },
        {
          q: "The abscissa of the point (7, −2) is:",
          options: ["7", "−2", "5", "−7"],
          answer: 0,
          explain: "The abscissa is the first (x) coordinate, which is 7. The ordinate is −2."
        },
        {
          q: "To show how the temperature of a city changes through the day, the most suitable graph is a:",
          options: ["pie chart", "pictograph", "histogram", "line graph"],
          answer: 3,
          explain: "A line graph shows change over time by joining the measured points."
        },
        {
          q: "The graph of two quantities in direct proportion is:",
          options: ["a straight line parallel to the x-axis", "a straight line through the origin", "a closed curve like a circle", "a straight line that does not pass through the origin"],
          answer: 1,
          explain: "If y = kx, then y = 0 when x = 0, so the line passes through the origin."
        },
        {
          q: "The point (0, −5) lies on the:",
          options: ["positive y-axis", "negative y-axis", "negative x-axis", "positive x-axis"],
          answer: 1,
          explain: "x = 0 means the point is on the y-axis, and y = −5 is below the origin."
        }
      ]
    }
  ]
});
