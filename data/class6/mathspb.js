// PSEB Class 6 Mathematics: the earlier NCERT book, which PSEB still uses (2026–27).
// Format: see CONTENT_GUIDE.md
StudyData.add(6, "mathspb", {
  // What this content follows. match: "textbook" | "older-book" | "topic". Set reviewed to a date once a teacher has checked it.
  syllabus: {board: "PSEB", match: "textbook", books: ["Mathematics (earlier NCERT book)"], note: "PSEB 2026–27 uses the earlier NCERT book for this class; chapters follow its list.", reviewed: false},
  chapters: [
    // ───────────────────────────── 1. Knowing Our Numbers ─────────────────────────────
    {
      id: "knowing-our-numbers",
      title: "Knowing Our Numbers",
      section: "Number",
      summary: "This chapter revises large numbers, the Indian and international place-value systems, comparing, estimating and rounding numbers, and reading Roman numerals.",
      notes: [
        {
          heading: "Comparing numbers",
          points: [
            "The number with **more digits** is greater. 10,000 has 5 digits, so it is greater than 9,999 which has 4.",
            "If the digits are equal in number, compare from the **leftmost digit**. The first place where they differ decides which is greater.",
            "Largest 4-digit number from the digits 3, 0, 7, 5 (each used once) is 7530. The smallest is 3057, because a number cannot start with 0.",
            "Largest 5-digit number is 99,999 and smallest 6-digit number is 1,00,000. Adding 1 to the largest number of n digits gives the smallest number of n + 1 digits."
          ]
        },
        {
          heading: "Indian and international systems",
          points: [
            "Indian system places: ones, tens, hundreds, thousands, ten thousands, **lakhs**, ten lakhs, **crores**. Commas go after the hundreds, then after every two digits: 53,46,718.",
            "International system uses millions: commas after every three digits, as in 5,346,718.",
            "1 lakh = 100 thousand = 1,00,000.  1 crore = 100 lakh = 1,00,00,000.",
            "10 lakh = 1 million and 1 crore = 10 million. A million has 7 digits."
          ]
        },
        {
          heading: "Estimation and rounding",
          points: [
            "Estimating gives a quick answer that is close to the exact answer, not exactly equal to it.",
            "To round to the nearest 10, look at the ones digit: 5 or more rounds up, less than 5 rounds down. 847 becomes 850.",
            "The same idea works for the nearest 100 or 1000: look at the digit just to the right of the place you are rounding to.",
            "To estimate a sum or difference, round each number first. 5,290 + 17,986 is about 5,300 + 18,000 = 23,300."
          ]
        },
        {
          heading: "Roman numerals",
          points: [
            "I = 1, V = 5, X = 10, L = 50, C = 100, D = 500, M = 1000.",
            "I, X, C and M can be repeated, but not more than **three times in a row**. V, L and D are never repeated.",
            "A smaller symbol on the **right** is added: VII = 7. A smaller symbol on the **left** is subtracted: IX = 9.",
            "Only I, X and C are used for subtraction: I before V or X, X before L or C, C before D or M. So XL = 40, XC = 90, CD = 400."
          ]
        }
      ],
      formulas: [
        "1 lakh = 1,00,000;  1 crore = 100 lakh = 1,00,00,000",
        "10 lakh = 1 million;  1 crore = 10 million",
        "I = 1, V = 5, X = 10, L = 50, C = 100, D = 500, M = 1000",
        "Largest 5-digit number = 99,999;  smallest 6-digit number = 1,00,000"
      ],
      terms: [
        { term: "Estimation", meaning: "Finding an answer that is close to the exact value, usually by rounding the numbers first." },
        { term: "Lakh", meaning: "One hundred thousand, written 1,00,000." },
        { term: "Crore", meaning: "One hundred lakh, written 1,00,00,000." },
        { term: "Million", meaning: "One thousand thousand, written 1,000,000. It equals 10 lakh." },
        { term: "Roman numerals", meaning: "A number system using the letters I, V, X, L, C, D and M." }
      ],
      examples: [
        {
          q: "Write 53,46,718 in words and in the international system.",
          steps: [
            "Read the groups from the left: 53 lakh, 46 thousand, 718.",
            "In words: fifty-three lakh forty-six thousand seven hundred eighteen.",
            "International commas go after every three digits: 5,346,718."
          ],
          answer: "Fifty-three lakh forty-six thousand seven hundred eighteen; 5,346,718"
        },
        {
          q: "Write 49 in Roman numerals.",
          steps: [
            "49 = 40 + 9",
            "40 = XL (X before L) and 9 = IX",
            "Join them: XL followed by IX"
          ],
          answer: "XLIX"
        }
      ],
      qa: [
        { q: "How many lakh make one crore? How many millions make one crore?", a: "1 crore = **100 lakh**. Since 10 lakh = 1 million, 1 crore = **10 million**." },
        { q: "Why is 95 not written as VC in Roman numerals?", a: "Only I, X and C can be used for subtraction, and V, L and D are never subtracted. So 95 is written as 90 + 5 = **XCV**." },
        { q: "Round 6,847 to the nearest ten, hundred and thousand.", a: "Nearest ten: ones digit 7 rounds up, so **6,850**. Nearest hundred: tens digit 4 rounds down, so **6,800**. Nearest thousand: hundreds digit 8 rounds up, so **7,000**." }
      ],
      quiz: [
        {
          q: "How many lakh are there in 1 crore?",
          options: ["10", "100", "1,000", "10,000"],
          answer: 1,
          explain: "1 crore = 1,00,00,000 and 1 lakh = 1,00,000, so 1 crore = 100 lakh."
        },
        {
          q: "The greatest 4-digit number that can be made from the digits 3, 0, 7, 5, using each once, is:",
          options: ["7530", "7503", "7350", "7035"],
          answer: 0,
          explain: "Put the digits in descending order: 7, 5, 3, 0 gives 7530."
        },
        {
          q: "1 million is equal to how many lakh?",
          options: ["1", "10", "100", "1,000"],
          answer: 1,
          explain: "1 million = 10,00,000 in the Indian system, which is 10 lakh."
        },
        {
          q: "6,847 rounded to the nearest hundred is:",
          options: ["6,900", "6,800", "7,000", "6,850"],
          answer: 1,
          explain: "The tens digit is 4 (less than 5), so the hundreds stay the same: 6,800."
        },
        {
          q: "XLVI in Hindu-Arabic numerals is:",
          options: ["44", "56", "46", "64"],
          answer: 2,
          explain: "XL = 40 and VI = 6, so XLVI = 46."
        },
        {
          q: "How many digits does 1 crore (1,00,00,000) have?",
          options: ["7", "8", "9", "6"],
          answer: 1,
          explain: "1 crore is 1 followed by seven zeros, which is 8 digits."
        }
      ]
    },
    // ───────────────────────────── 2. Whole Numbers ─────────────────────────────
    {
      id: "whole-numbers",
      title: "Whole Numbers",
      section: "Number",
      summary: "Whole numbers are 0, 1, 2, 3, … This chapter studies the number line, the properties of the four operations on whole numbers and some patterns.",
      notes: [
        {
          heading: "Natural and whole numbers",
          points: [
            "Natural numbers are 1, 2, 3, … They are the counting numbers. There is no last natural number.",
            "Whole numbers are 0, 1, 2, 3, … So adding 0 to the natural numbers gives the whole numbers. The smallest whole number is 0.",
            "The **successor** of a number is 1 more than it and the **predecessor** is 1 less. 0 has no predecessor among whole numbers.",
            "On the number line, a number to the right is greater. Addition moves to the right and subtraction moves to the left."
          ]
        },
        {
          heading: "Properties of whole numbers",
          points: [
            "**Closure:** the sum and the product of two whole numbers are whole numbers. The difference and quotient need not be, so whole numbers are not closed under − and ÷.",
            "**Commutative:** a + b = b + a and a × b = b × a. Subtraction and division are not commutative.",
            "**Associative:** (a + b) + c = a + (b + c) and (a × b) × c = a × (b × c).",
            "**Distributive:** a × (b + c) = a × b + a × c. It also works for subtraction: a × (b − c) = a × b − a × c."
          ]
        },
        {
          heading: "Identities and zero",
          points: [
            "0 is the **additive identity**: a + 0 = a. 1 is the **multiplicative identity**: a × 1 = a.",
            "Any number multiplied by 0 gives 0. For example 0 × 9 = 0.",
            "Division by 0 is **not defined**, while 0 ÷ 5 = 0.",
            "Using the properties, calculations can be made easy: 25 × 8 × 4 = 25 × 4 × 8 = 100 × 8 = 800."
          ]
        },
        {
          heading: "Patterns with whole numbers",
          points: [
            "Numbers can be arranged as dots in patterns. A square number such as 4, 9 or 16 can be shown as a square of dots.",
            "The sum of the first n odd numbers is n × n. For example 1 + 3 + 5 + 7 = 16 = 4 × 4.",
            "A triangular number is a count of dots in a triangle: 1, 3, 6, 10, 15, … Each is the sum 1 + 2 + … + n.",
            "A pattern lets us check answers quickly and see why a rule works."
          ]
        }
      ],
      formulas: [
        "a + b = b + a;  a × b = b × a",
        "(a + b) + c = a + (b + c);  (a × b) × c = a × (b × c)",
        "a × (b + c) = a × b + a × c",
        "a + 0 = a;  a × 1 = a;  a × 0 = 0",
        "1 + 3 + 5 + … (n odd numbers) = n × n"
      ],
      terms: [
        { term: "Whole numbers", meaning: "The numbers 0, 1, 2, 3, … (natural numbers together with 0)." },
        { term: "Successor", meaning: "The number that comes just after a given number; it is 1 more." },
        { term: "Predecessor", meaning: "The number that comes just before a given number; it is 1 less." },
        { term: "Additive identity", meaning: "The number 0, because adding it to any number leaves the number unchanged." },
        { term: "Multiplicative identity", meaning: "The number 1, because multiplying any number by it leaves the number unchanged." }
      ],
      examples: [
        {
          q: "Find 2 × 1768 × 50 using suitable rearrangement.",
          steps: [
            "Use commutativity: 2 × 1768 × 50 = 1768 × 2 × 50",
            "2 × 50 = 100",
            "1768 × 100 = 176800"
          ],
          answer: "176800"
        },
        {
          q: "Find 102 × 17 using the distributive property.",
          steps: [
            "102 = 100 + 2",
            "102 × 17 = 100 × 17 + 2 × 17",
            "= 1700 + 34 = 1734"
          ],
          answer: "1734"
        }
      ],
      qa: [
        { q: "What is the difference between natural numbers and whole numbers?", a: "Natural numbers start from 1 (1, 2, 3, …). Whole numbers start from **0** (0, 1, 2, 3, …). So every natural number is a whole number, but 0 is a whole number that is not natural." },
        { q: "Is the set of whole numbers closed under subtraction? Give an example.", a: "No. 3 − 5 is not a whole number, because whole numbers do not include negative numbers. So subtraction can take us outside the set." },
        { q: "Why is division by zero not allowed?", a: "Dividing by 0 would mean finding a number that multiplied by 0 gives the dividend, but anything × 0 = 0. So no meaningful answer exists, and division by 0 is not defined." }
      ],
      quiz: [
        {
          q: "The smallest whole number is:",
          options: ["1", "0", "−1", "10"],
          answer: 1,
          explain: "Whole numbers start from 0."
        },
        {
          q: "The property shown by 7 × (3 + 4) = 7 × 3 + 7 × 4 is:",
          options: ["Commutative", "Associative", "Distributive", "Closure"],
          answer: 2,
          explain: "Multiplication is spread over the addition inside the brackets, which is the distributive property."
        },
        {
          q: "Which operation is NOT closed on whole numbers?",
          options: ["Addition", "Multiplication", "Subtraction", "Adding 0 to a number"],
          answer: 2,
          explain: "Subtraction can give a negative result, e.g. 2 − 7, which is not a whole number."
        },
        {
          q: "The predecessor of 1,00,000 is:",
          options: ["1,00,001", "99,999", "99,990", "10,000"],
          answer: 1,
          explain: "The predecessor is 1 less: 1,00,000 − 1 = 99,999."
        },
        {
          q: "The sum 1 + 3 + 5 + 7 + 9 equals:",
          options: ["20", "24", "25", "30"],
          answer: 2,
          explain: "The sum of the first 5 odd numbers is 5 × 5 = 25. Check: 1 + 3 + 5 + 7 + 9 = 25."
        },
        {
          q: "The multiplicative identity for whole numbers is:",
          options: ["0", "1", "2", "10"],
          answer: 1,
          explain: "Multiplying any whole number by 1 leaves it unchanged."
        }
      ]
    },
    // ───────────────────────────── 3. Playing with Numbers ─────────────────────────────
    {
      id: "playing-with-numbers",
      title: "Playing with Numbers",
      section: "Number",
      summary: "This chapter studies factors and multiples, prime and composite numbers, tests of divisibility, prime factorisation, and finding the HCF and LCM.",
      notes: [
        {
          heading: "Factors and multiples",
          points: [
            "A **factor** divides a number exactly. The factors of 12 are 1, 2, 3, 4, 6 and 12.",
            "Every number is a factor of itself and 1 is a factor of every number. The smallest factor is 1 and the largest is the number itself.",
            "A **multiple** of a number is obtained by multiplying it by 1, 2, 3, …. The multiples of 4 are 4, 8, 12, 16, …",
            "A number has a limited count of factors but unlimited multiples. A perfect number equals the sum of its factors other than itself, e.g. 6 = 1 + 2 + 3."
          ]
        },
        {
          heading: "Prime and composite numbers",
          points: [
            "A **prime number** has exactly two factors, 1 and itself. Primes up to 20 are 2, 3, 5, 7, 11, 13, 17, 19.",
            "A **composite number** has more than two factors. 1 is neither prime nor composite.",
            "2 is the smallest prime and the **only even prime**. Every other even number is composite.",
            "Two primes with a difference of 2, such as (11, 13) or (17, 19), are called twin primes. Two numbers with no common factor except 1, like 14 and 15, are **co-prime**."
          ]
        },
        {
          heading: "Tests of divisibility",
          points: [
            "By 2: ones digit is 0, 2, 4, 6 or 8.  By 5: ones digit is 0 or 5.  By 10: ones digit is 0.",
            "By 3: the sum of the digits is divisible by 3.  By 9: the sum of the digits is divisible by 9.",
            "By 4: the number formed by the last two digits is divisible by 4.  By 8: the last three digits form a number divisible by 8.",
            "By 6: divisible by both 2 and 3.  By 11: the difference between the sum of digits at odd places and at even places is 0 or a multiple of 11."
          ]
        },
        {
          heading: "Prime factorisation, HCF and LCM",
          points: [
            "Prime factorisation writes a number as a product of primes: 36 = 2 × 2 × 3 × 3 = 2² × 3².",
            "The **HCF** (highest common factor) is the greatest number that divides all the given numbers. It uses the common primes with their smallest powers.",
            "The **LCM** (lowest common multiple) is the smallest number that is a multiple of all the given numbers. It uses all primes with their greatest powers.",
            "For two numbers, HCF × LCM = product of the numbers. HCF of co-prime numbers is 1."
          ]
        }
      ],
      formulas: [
        "A prime has exactly 2 factors; 1 is neither prime nor composite",
        "Divisible by 3 (or 9) if the digit sum is divisible by 3 (or 9)",
        "Divisible by 11 if (sum at odd places) − (sum at even places) is 0 or a multiple of 11",
        "HCF × LCM = product of the two numbers"
      ],
      terms: [
        { term: "Factor", meaning: "A number that divides another number exactly." },
        { term: "Multiple", meaning: "A number obtained by multiplying a given number by a natural number." },
        { term: "Prime number", meaning: "A number greater than 1 with exactly two factors: 1 and itself." },
        { term: "Co-prime numbers", meaning: "Two numbers whose only common factor is 1." },
        { term: "HCF", meaning: "Highest common factor: the greatest number that divides each of the given numbers exactly." },
        { term: "LCM", meaning: "Lowest common multiple: the smallest number that is a multiple of each of the given numbers." }
      ],
      examples: [
        {
          q: "Find the HCF and LCM of 24 and 36.",
          steps: [
            "24 = 2³ × 3 and 36 = 2² × 3²",
            "HCF = smallest powers of common primes = 2² × 3 = 12",
            "LCM = greatest powers of all primes = 2³ × 3² = 72",
            "Check: 12 × 72 = 864 = 24 × 36"
          ],
          answer: "HCF = 12, LCM = 72"
        },
        {
          q: "Find the smallest number that is exactly divisible by 6, 8 and 12.",
          steps: [
            "6 = 2 × 3, 8 = 2³, 12 = 2² × 3",
            "LCM = 2³ × 3 = 24"
          ],
          answer: "24"
        }
      ],
      qa: [
        { q: "Is 1 a prime number? Why or why not?", a: "No. A prime number must have **exactly two** factors. 1 has only one factor (itself), so it is neither prime nor composite." },
        { q: "Using the divisibility test, check whether 3,454 is divisible by 11.", a: "Digits from the right: 4, 5, 4, 3. Sum at odd places = 4 + 4 = 8. Sum at even places = 5 + 3 = 8. The difference is 0, so 3,454 **is divisible by 11** (3,454 = 11 × 314)." },
        { q: "Two bells ring every 12 minutes and every 18 minutes. If they ring together now, after how many minutes will they ring together again?", a: "Find the LCM of 12 and 18. 12 = 2² × 3 and 18 = 2 × 3², so LCM = 2² × 3² = **36**. They ring together again after 36 minutes." }
      ],
      quiz: [
        {
          q: "Which of these is a prime number?",
          options: ["51", "57", "59", "63"],
          answer: 2,
          explain: "51 = 3 × 17, 57 = 3 × 19 and 63 = 7 × 9, but 59 has no factor other than 1 and 59."
        },
        {
          q: "The HCF of 18 and 48 is:",
          options: ["3", "6", "9", "12"],
          answer: 1,
          explain: "18 = 2 × 3² and 48 = 2⁴ × 3. Common part with smallest powers is 2 × 3 = 6."
        },
        {
          q: "The LCM of 12 and 18 is:",
          options: ["6", "24", "36", "216"],
          answer: 2,
          explain: "12 = 2² × 3 and 18 = 2 × 3², so LCM = 2² × 3² = 36."
        },
        {
          q: "Which number is divisible by 9?",
          options: ["3,451", "4,567", "2,358", "7,012"],
          answer: 2,
          explain: "The digit sum of 2,358 is 2 + 3 + 5 + 8 = 18, which is divisible by 9. The others have digit sums 13, 22 and 10."
        },
        {
          q: "Which pair is co-prime?",
          options: ["8 and 12", "14 and 15", "9 and 15", "10 and 25"],
          answer: 1,
          explain: "14 = 2 × 7 and 15 = 3 × 5 share no prime factor, so their HCF is 1."
        },
        {
          q: "The only even prime number is:",
          options: ["0", "2", "4", "6"],
          answer: 1,
          explain: "Every even number bigger than 2 is divisible by 2, so it has at least three factors. 2 has exactly two."
        }
      ]
    },
    // ───────────────────────────── 4. Basic Geometrical Ideas ─────────────────────────────
    {
      id: "basic-geometrical-ideas",
      title: "Basic Geometrical Ideas",
      section: "Geometry",
      summary: "This chapter introduces points, lines, segments and rays, then curves, polygons, angles, triangles, quadrilaterals and circles with their parts.",
      notes: [
        {
          heading: "Point, line segment, line and ray",
          points: [
            "A **point** marks an exact position. It is named with a capital letter such as A.",
            "A **line segment** AB has two end points and a fixed length. A **line** extends endlessly in both directions. A **ray** has one starting point and extends endlessly in one direction.",
            "Two lines in a plane either **intersect** at one point or are **parallel** (they never meet).",
            "Through two given points there is exactly one line. Many lines can pass through a single point."
          ]
        },
        {
          heading: "Curves and polygons",
          points: [
            "A **curve** is any drawing made without lifting the pencil. It may be open or closed, and simple (does not cross itself) or not.",
            "A **polygon** is a simple closed figure made of line segments only. A triangle has 3 sides, a quadrilateral 4, a pentagon 5 and a hexagon 6.",
            "In a polygon, the corners are **vertices**, the segments are **sides**, and a segment joining two non-adjacent vertices is a **diagonal**.",
            "A figure has an **interior**, a **boundary** and an **exterior**. Together, the boundary and the interior make the region of the figure."
          ]
        },
        {
          heading: "Angles, triangles and quadrilaterals",
          points: [
            "An **angle** is formed by two rays with a common starting point called the vertex. The rays are its arms.",
            "A triangle has 3 vertices, 3 sides and 3 angles. A quadrilateral has 4 vertices, 4 sides, 4 angles and **2 diagonals**.",
            "Sides that share a vertex are adjacent sides. Sides that do not meet are opposite sides.",
            "In ABCD, the diagonals are AC and BD. Opposite vertices are A and C, and B and D."
          ]
        },
        {
          heading: "Circles",
          points: [
            "A circle is the set of all points at the same distance from a fixed point, the **centre**. That distance is the **radius**.",
            "A **chord** joins two points of the circle. The **diameter** is the longest chord and passes through the centre. Diameter = 2 × radius.",
            "An **arc** is a part of the circle. A diameter cuts the circle into two **semicircles**.",
            "A **sector** is the region between two radii and an arc. A **segment** is the region between a chord and an arc. The length of the boundary is the **circumference**."
          ]
        }
      ],
      formulas: [
        "Diameter = 2 × radius",
        "Quadrilateral: 4 sides, 4 vertices, 2 diagonals",
        "Through two points: exactly one line"
      ],
      terms: [
        { term: "Line segment", meaning: "A part of a line with two end points; it has a fixed length." },
        { term: "Ray", meaning: "A part of a line with one end point that extends endlessly in one direction." },
        { term: "Polygon", meaning: "A simple closed figure made of line segments only." },
        { term: "Diagonal", meaning: "A line segment joining two non-adjacent vertices of a polygon." },
        { term: "Chord", meaning: "A line segment with both end points on a circle." },
        { term: "Sector", meaning: "The region of a circle between an arc and the two radii at its ends." }
      ],
      qa: [
        { q: "Distinguish between a line, a line segment and a ray.", a: "A **line segment** has two end points and a fixed length. A **ray** has one end point and goes on endlessly in one direction. A **line** has no end points and extends endlessly in both directions." },
        { q: "What is the relation between the diameter and the radius of a circle?", a: "The diameter is a chord through the centre, made of two radii. So **diameter = 2 × radius**, and it is the longest chord of the circle." },
        { q: "How many diagonals does a quadrilateral have? Name them in ABCD.", a: "A quadrilateral has **2 diagonals**. In quadrilateral ABCD they are AC and BD." }
      ],
      quiz: [
        {
          q: "The longest chord of a circle is its:",
          options: ["Radius", "Diameter", "Arc", "Sector"],
          answer: 1,
          explain: "A chord through the centre is the diameter, and no chord can be longer than it."
        },
        {
          q: "How many end points does a ray have?",
          options: ["0", "1", "2", "3"],
          answer: 1,
          explain: "A ray starts at one point and goes on endlessly in one direction."
        },
        {
          q: "How many diagonals does a quadrilateral have?",
          options: ["1", "2", "3", "4"],
          answer: 1,
          explain: "In ABCD the only non-adjacent pairs of vertices are A, C and B, D, giving diagonals AC and BD."
        },
        {
          q: "A circle has radius 7 cm. Its diameter is:",
          options: ["3.5 cm", "7 cm", "14 cm", "49 cm"],
          answer: 2,
          explain: "Diameter = 2 × radius = 2 × 7 = 14 cm."
        },
        {
          q: "How many vertices does a hexagon have?",
          options: ["5", "6", "7", "8"],
          answer: 1,
          explain: "A hexagon is a polygon with 6 sides, so it has 6 vertices."
        },
        {
          q: "Two lines in a plane that never meet are called:",
          options: ["Intersecting lines", "Parallel lines", "Rays", "Chords"],
          answer: 1,
          explain: "Lines in a plane that never meet however far they are extended are parallel."
        }
      ]
    },
    // ───────────────────────────── 5. Understanding Elementary Shapes ─────────────────────────────
    {
      id: "understanding-elementary-shapes",
      title: "Understanding Elementary Shapes",
      section: "Geometry",
      summary: "This chapter covers measuring line segments, the types of angles and how to measure them, perpendicular lines, kinds of triangles and quadrilaterals, and simple 3D shapes.",
      notes: [
        {
          heading: "Measuring and comparing segments",
          points: [
            "A line segment is measured with a ruler in cm and mm. 1 cm = 10 mm.",
            "Two segments are compared by their lengths. A divider can be used to copy a length accurately.",
            "The distance between two points is the length of the line segment joining them.",
            "Always place the zero mark of the ruler exactly at one end of the segment."
          ]
        },
        {
          heading: "Angles and their types",
          points: [
            "A full turn is 360°, a half turn is 180° and a quarter turn is **90°**. The hands of a clock help us see these turns.",
            "**Acute** angle is less than 90°. **Right** angle is exactly 90°. **Obtuse** angle is more than 90° but less than 180°.",
            "**Straight** angle is exactly 180°. **Reflex** angle is more than 180° but less than 360°.",
            "Angles are measured with a protractor: put its centre on the vertex and the zero line along one arm, then read the scale where the other arm crosses."
          ]
        },
        {
          heading: "Perpendicular lines, triangles and quadrilaterals",
          points: [
            "Two lines that meet at a right angle are **perpendicular**.",
            "By sides, a triangle is **equilateral** (3 equal sides), **isosceles** (2 equal sides) or **scalene** (no equal sides).",
            "By angles, a triangle is **acute-angled** (all angles acute), **right-angled** (one angle 90°) or **obtuse-angled** (one angle obtuse).",
            "A rectangle has 4 right angles with opposite sides equal. A square has 4 equal sides and 4 right angles. A rhombus has 4 equal sides. A parallelogram has opposite sides parallel. A trapezium has one pair of parallel sides."
          ]
        },
        {
          heading: "Three-dimensional shapes",
          points: [
            "A solid has **faces** (flat or curved surfaces), **edges** (where two faces meet) and **vertices** (corners).",
            "A cube has 6 faces, 12 edges and 8 vertices. A cuboid has the same counts but its faces are rectangles.",
            "A square pyramid has 5 faces, 8 edges and 5 vertices. A triangular prism has 5 faces, 9 edges and 6 vertices.",
            "A cylinder has 2 flat faces and 1 curved surface. A cone has 1 flat face and 1 curved surface, and a sphere has only a curved surface."
          ]
        }
      ],
      formulas: [
        "Right angle = 90°;  straight angle = 180°;  complete turn = 360°",
        "Acute < 90° < Obtuse < 180° < Reflex < 360°",
        "Cube: 6 faces, 12 edges, 8 vertices"
      ],
      terms: [
        { term: "Right angle", meaning: "An angle of exactly 90°, one quarter of a full turn." },
        { term: "Obtuse angle", meaning: "An angle greater than 90° and less than 180°." },
        { term: "Reflex angle", meaning: "An angle greater than 180° and less than 360°." },
        { term: "Perpendicular lines", meaning: "Two lines that intersect at a right angle." },
        { term: "Protractor", meaning: "A semicircular instrument used to measure and draw angles in degrees." },
        { term: "Vertex (of a solid)", meaning: "A corner where three or more edges meet." }
      ],
      qa: [
        { q: "Through how many degrees does the hour hand of a clock turn from 12 to 3, and from 12 to 6?", a: "From 12 to 3 is a quarter turn, which is **90°** (a right angle). From 12 to 6 is a half turn, which is **180°** (a straight angle)." },
        { q: "Name the types of triangles based on their sides.", a: "**Equilateral** (all three sides equal), **isosceles** (two sides equal) and **scalene** (all sides different)." },
        { q: "Give the number of faces, edges and vertices of a cuboid.", a: "A cuboid has **6 faces**, **12 edges** and **8 vertices**." }
      ],
      quiz: [
        {
          q: "An angle of 135° is a(n):",
          options: ["Acute angle", "Right angle", "Obtuse angle", "Reflex angle"],
          answer: 2,
          explain: "135° is greater than 90° and less than 180°, so it is obtuse."
        },
        {
          q: "An angle of 250° is called:",
          options: ["Obtuse", "Straight", "Reflex", "Acute"],
          answer: 2,
          explain: "An angle between 180° and 360° is a reflex angle."
        },
        {
          q: "A triangle with all three sides equal is:",
          options: ["Scalene", "Isosceles", "Equilateral", "Right-angled"],
          answer: 2,
          explain: "Equilateral means all sides are equal."
        },
        {
          q: "How many faces does a square pyramid have?",
          options: ["4", "5", "6", "8"],
          answer: 1,
          explain: "It has one square base and four triangular faces, so 5 faces."
        },
        {
          q: "The minute hand moves from 12 to 3. It turns through:",
          options: ["30°", "60°", "90°", "180°"],
          answer: 2,
          explain: "From 12 to 3 is a quarter of a full turn: 360° ÷ 4 = 90°."
        },
        {
          q: "A quadrilateral with all four sides equal and all angles right angles is a:",
          options: ["Rectangle", "Rhombus", "Trapezium", "Square"],
          answer: 3,
          explain: "A rectangle has equal opposite sides only and a rhombus need not have right angles. A square has both properties."
        }
      ]
    },
    // ───────────────────────────── 6. Integers ─────────────────────────────
    {
      id: "integers",
      title: "Integers",
      section: "Number",
      summary: "Integers include negative numbers, zero and positive numbers. This chapter shows how to place them on a number line, compare them, and add and subtract them.",
      notes: [
        {
          heading: "Negative numbers and the number line",
          points: [
            "Integers are …, −3, −2, −1, 0, 1, 2, 3, … Negative numbers show things like temperature below zero, a loss, or a depth below sea level.",
            "On a number line, positive integers lie to the right of 0 and negative integers to the left.",
            "Every integer has an **opposite** at the same distance on the other side of 0. The opposite of 5 is −5 and of −7 is 7.",
            "The opposite of 0 is 0."
          ]
        },
        {
          heading: "Ordering integers",
          points: [
            "On a number line, a number to the right is greater. So 2 > −3 and −3 > −8.",
            "Every positive integer is greater than every negative integer, and 0 is greater than every negative integer.",
            "Of two negative integers, the one with the smaller number part is greater: −2 > −9.",
            "To write integers in ascending order, start with the leftmost: −10, −7, −2, 0, 3."
          ]
        },
        {
          heading: "Adding integers",
          points: [
            "To add a positive integer, move to the right on the number line. To add a negative integer, move to the left.",
            "Two positives add to a positive, two negatives add to a negative: (−6) + (−4) = −10.",
            "A positive and a negative: subtract the smaller number part from the larger and keep the sign of the larger. 8 + (−3) = 5 and 3 + (−8) = −5.",
            "An integer plus its opposite is 0: 7 + (−7) = 0."
          ]
        },
        {
          heading: "Subtracting integers",
          points: [
            "Subtracting an integer is the same as adding its opposite. 5 − (−2) = 5 + 2 = 7.",
            "3 − 7 = 3 + (−7) = −4.",
            "On a number line, subtracting a positive moves left, and subtracting a negative moves right.",
            "(−4) − (−4) = 0."
          ]
        }
      ],
      formulas: [
        "a + (−a) = 0",
        "a − b = a + (−b)",
        "Ascending order: leftmost on the number line first"
      ],
      terms: [
        { term: "Integer", meaning: "A number from the list …, −2, −1, 0, 1, 2, … (positive numbers, negative numbers and zero)." },
        { term: "Negative integer", meaning: "An integer less than zero, written with a minus sign, such as −5." },
        { term: "Opposite of an integer", meaning: "The integer on the other side of 0 at the same distance. The opposite of 4 is −4." },
        { term: "Number line", meaning: "A line on which numbers are marked at equal gaps, increasing to the right." }
      ],
      examples: [
        {
          q: "Arrange −7, 3, −2, 0, −10 in ascending order.",
          steps: [
            "The negatives are −10, −7 and −2; among negatives the larger number part is smaller.",
            "Order of negatives: −10 < −7 < −2",
            "Then 0, then 3."
          ],
          answer: "−10, −7, −2, 0, 3"
        },
        {
          q: "The temperature in a hill town was 3°C at night and fell by 8°C by morning. Find the morning temperature.",
          steps: [
            "Fall of 8°C means subtract 8: 3 − 8",
            "3 − 8 = 3 + (−8) = −5"
          ],
          answer: "−5°C"
        }
      ],
      qa: [
        { q: "Which is greater, −3 or −8? Explain with the number line.", a: "−3 is greater. On the number line −3 lies to the **right** of −8, and a number to the right is always greater." },
        { q: "Find 9 − (−4) and explain.", a: "Subtracting −4 is the same as adding its opposite, 4. So 9 − (−4) = 9 + 4 = **13**." },
        { q: "Write the opposite of −12, 0 and 25.", a: "The opposite of −12 is **12**, the opposite of 0 is **0** and the opposite of 25 is **−25**." }
      ],
      quiz: [
        {
          q: "Which of these is the smallest?",
          options: ["−1", "0", "−6", "2"],
          answer: 2,
          explain: "−6 lies farthest to the left on the number line, so it is the smallest."
        },
        {
          q: "The opposite of −9 is:",
          options: ["−9", "9", "0", "1/9"],
          answer: 1,
          explain: "The opposite of an integer has the same size but the other sign."
        },
        {
          q: "(−6) + (−4) = ?",
          options: ["2", "−2", "10", "−10"],
          answer: 3,
          explain: "Both are negative, so add 6 + 4 = 10 and keep the minus sign."
        },
        {
          q: "5 − (−2) = ?",
          options: ["3", "−3", "7", "−7"],
          answer: 2,
          explain: "Subtracting −2 is adding 2: 5 + 2 = 7."
        },
        {
          q: "(−8) + 8 = ?",
          options: ["−16", "0", "16", "8"],
          answer: 1,
          explain: "An integer and its opposite add to 0."
        },
        {
          q: "Which shows −4, 1, −1 and 0 in descending order?",
          options: ["−4, −1, 0, 1", "1, 0, −1, −4", "0, 1, −1, −4", "1, −1, 0, −4"],
          answer: 1,
          explain: "Descending means largest first: 1 > 0 > −1 > −4."
        }
      ]
    },
    // ───────────────────────────── 7. Fractions ─────────────────────────────
    {
      id: "fractions",
      title: "Fractions",
      section: "Number",
      summary: "This chapter covers fractions as parts of a whole, proper, improper and mixed fractions, equivalent fractions, comparing them and adding and subtracting fractions.",
      notes: [
        {
          heading: "Types of fractions",
          points: [
            "A fraction a/b names a parts out of b equal parts of a whole. a is the **numerator** and b is the **denominator**.",
            "A **proper fraction** has numerator less than denominator (3/5). An **improper fraction** has numerator equal to or greater than denominator (7/3).",
            "A **mixed fraction** has a whole part and a proper fraction part: 7/3 = 2 1/3. To convert, divide: 7 ÷ 3 gives quotient 2 and remainder 1.",
            "To change a mixed fraction to improper: 3 2/5 = (3 × 5 + 2)/5 = 17/5."
          ]
        },
        {
          heading: "Equivalent fractions and simplest form",
          points: [
            "Fractions that name the same part of a whole are **equivalent**. Multiply or divide numerator and denominator by the same non-zero number: 3/5 = 6/10 = 9/15.",
            "Two fractions a/b and c/d are equivalent if a × d = b × c.",
            "A fraction is in its **simplest form** when the numerator and denominator have no common factor except 1. Divide both by their HCF: 18/24 = 3/4.",
            "Like fractions have the same denominator. Unlike fractions have different denominators."
          ]
        },
        {
          heading: "Comparing fractions",
          points: [
            "Like fractions: the one with the larger numerator is greater. 5/9 > 4/9.",
            "Fractions with the same numerator: the one with the smaller denominator is greater. 3/4 > 3/7.",
            "Unlike fractions: convert to equivalent fractions with the same denominator (use the LCM), then compare numerators.",
            "To compare 5/6 and 7/9, use denominator 18: 15/18 and 14/18. So 5/6 > 7/9."
          ]
        },
        {
          heading: "Adding and subtracting fractions",
          points: [
            "Like fractions: add or subtract the numerators and keep the denominator. 2/7 + 3/7 = 5/7.",
            "Unlike fractions: first change to like fractions using the LCM of the denominators, then add or subtract.",
            "3/4 + 2/3 = 9/12 + 8/12 = 17/12 = 1 5/12.",
            "For mixed fractions, convert to improper fractions, or add the whole parts and fraction parts separately. Always give the answer in simplest form."
          ]
        }
      ],
      formulas: [
        "a/b = (a × k)/(b × k) = (a ÷ k)/(b ÷ k)",
        "a/b = c/d when a × d = b × c",
        "Mixed to improper: w n/d = (w × d + n)/d",
        "a/c ± b/c = (a ± b)/c"
      ],
      terms: [
        { term: "Numerator", meaning: "The top number of a fraction; it tells how many parts are taken." },
        { term: "Denominator", meaning: "The bottom number of a fraction; it tells how many equal parts make the whole." },
        { term: "Improper fraction", meaning: "A fraction whose numerator is equal to or greater than its denominator." },
        { term: "Mixed fraction", meaning: "A number made up of a whole number and a proper fraction, like 2 1/3." },
        { term: "Equivalent fractions", meaning: "Fractions that represent the same part of a whole." },
        { term: "Like fractions", meaning: "Fractions with the same denominator." }
      ],
      examples: [
        {
          q: "Add 3/4 and 2/3.",
          steps: [
            "LCM of 4 and 3 is 12.",
            "3/4 = 9/12 and 2/3 = 8/12",
            "9/12 + 8/12 = 17/12 = 1 5/12"
          ],
          answer: "17/12 or 1 5/12"
        },
        {
          q: "Subtract 1/4 from 7/8.",
          steps: [
            "1/4 = 2/8",
            "7/8 − 2/8 = 5/8"
          ],
          answer: "5/8"
        }
      ],
      qa: [
        { q: "Write 17/5 as a mixed fraction.", a: "17 ÷ 5 gives quotient 3 and remainder 2. So 17/5 = **3 2/5**." },
        { q: "Which is greater, 5/6 or 7/9?", a: "LCM of 6 and 9 is 18. 5/6 = 15/18 and 7/9 = 14/18. Since 15 > 14, **5/6 is greater**." },
        { q: "Reduce 18/24 to its simplest form.", a: "HCF of 18 and 24 is 6. Dividing both by 6 gives **3/4**." }
      ],
      quiz: [
        {
          q: "Which fraction is equivalent to 3/5?",
          options: ["6/10", "6/15", "5/8", "9/20"],
          answer: 0,
          explain: "Multiplying numerator and denominator of 3/5 by 2 gives 6/10."
        },
        {
          q: "The simplest form of 18/24 is:",
          options: ["9/12", "6/8", "3/4", "2/3"],
          answer: 2,
          explain: "HCF of 18 and 24 is 6, so 18/24 = 3/4. The others can still be reduced or are unequal."
        },
        {
          q: "7/3 as a mixed fraction is:",
          options: ["2 1/3", "1 2/3", "3 1/3", "2 2/3"],
          answer: 0,
          explain: "7 ÷ 3 = 2 remainder 1, so 7/3 = 2 1/3."
        },
        {
          q: "2/5 + 1/5 = ?",
          options: ["3/10", "3/5", "2/5", "1/5"],
          answer: 1,
          explain: "Denominators are the same: add numerators 2 + 1 = 3 and keep 5."
        },
        {
          q: "Which is the greatest of 3/4, 2/3, 5/6 and 7/12?",
          options: ["3/4", "2/3", "5/6", "7/12"],
          answer: 2,
          explain: "With denominator 12 they are 9/12, 8/12, 10/12 and 7/12. The greatest is 10/12 = 5/6."
        },
        {
          q: "1 − 3/8 = ?",
          options: ["3/8", "5/8", "2/8", "7/8"],
          answer: 1,
          explain: "1 = 8/8, so 8/8 − 3/8 = 5/8."
        }
      ]
    },
    // ───────────────────────────── 8. Decimals ─────────────────────────────
    {
      id: "decimals",
      title: "Decimals",
      section: "Number",
      summary: "Decimals extend place value to tenths, hundredths and thousandths. This chapter covers reading, comparing, converting and adding and subtracting decimals, with money, length and mass.",
      notes: [
        {
          heading: "Tenths, hundredths and place value",
          points: [
            "A decimal point separates the whole part from the fractional part. In 4.263, the digits after the point are tenths (2), hundredths (6) and thousandths (3).",
            "One tenth is 1/10 = 0.1, one hundredth is 1/100 = 0.01 and one thousandth is 1/1000 = 0.001.",
            "Fractions with denominator 10, 100 or 1000 are written directly as decimals: 3/10 = 0.3, 7/100 = 0.07, 45/1000 = 0.045.",
            "A decimal can be turned back into a fraction: 0.25 = 25/100 = 1/4."
          ]
        },
        {
          heading: "Comparing decimals",
          points: [
            "First compare the whole parts. If they are equal, compare the tenths, then the hundredths, and so on.",
            "Adding zeros at the end of the decimal part does not change its value: 0.5 = 0.50 = 0.500.",
            "To compare 0.5 and 0.35, write 0.5 as 0.50. Since 50 hundredths > 35 hundredths, 0.5 > 0.35.",
            "Decimals can be shown on a number line by dividing the gap between two whole numbers into 10 equal parts."
          ]
        },
        {
          heading: "Decimals in money, length and mass",
          points: [
            "₹1 = 100 paise, so 75 paise = ₹0.75 and ₹5 and 75 paise = ₹5.75.",
            "1 cm = 10 mm, so 1 mm = 0.1 cm. 1 m = 100 cm, so 35 cm = 0.35 m.",
            "1 kg = 1000 g, so 250 g = 0.250 kg = 0.25 kg.",
            "Write the new unit as a decimal of the larger unit: for example 5 km 20 m = 5.020 km."
          ]
        },
        {
          heading: "Adding and subtracting decimals",
          points: [
            "Write the numbers one under the other so that the **decimal points are in a line**. Fill empty places with zeros.",
            "Add or subtract as for whole numbers, then place the decimal point directly below the others.",
            "12.5 + 3.75 = 16.25.",
            "8.4 − 3.67 = 8.40 − 3.67 = 4.73."
          ]
        }
      ],
      formulas: [
        "1/10 = 0.1;  1/100 = 0.01;  1/1000 = 0.001",
        "₹1 = 100 paise;  1 m = 100 cm;  1 cm = 10 mm;  1 kg = 1000 g",
        "0.5 = 0.50 = 0.500"
      ],
      terms: [
        { term: "Decimal point", meaning: "The dot that separates the whole-number part from the fractional part." },
        { term: "Tenths", meaning: "The first place after the decimal point; one tenth is 0.1." },
        { term: "Hundredths", meaning: "The second place after the decimal point; one hundredth is 0.01." },
        { term: "Decimal number", meaning: "A number that has a whole part and a fractional part separated by a decimal point." },
        { term: "Equivalent decimals", meaning: "Decimals with the same value, such as 0.5 and 0.50." }
      ],
      examples: [
        {
          q: "Add 12.5 and 3.75.",
          steps: [
            "Write 12.50 and 3.75 with the decimal points in a line.",
            "Hundredths: 0 + 5 = 5; tenths: 5 + 7 = 12, write 2 carry 1.",
            "Ones: 2 + 3 + 1 = 6; tens: 1."
          ],
          answer: "16.25"
        },
        {
          q: "Express 35 cm in metres.",
          steps: [
            "1 cm = 1/100 m",
            "35 cm = 35/100 m = 0.35 m"
          ],
          answer: "0.35 m"
        }
      ],
      qa: [
        { q: "Write 0.25 as a fraction in simplest form.", a: "0.25 = 25/100. Dividing both by 25 gives **1/4**." },
        { q: "Which is greater, 0.5 or 0.35? Give a reason.", a: "Write 0.5 as 0.50. Then compare hundredths: 50 > 35, so **0.5 is greater**. A longer decimal is not necessarily bigger." },
        { q: "Subtract 3.67 from 8.4.", a: "Write 8.4 as 8.40 and subtract: 8.40 − 3.67 = **4.73**." }
      ],
      quiz: [
        {
          q: "3/10 written as a decimal is:",
          options: ["0.03", "0.3", "3.0", "0.33"],
          answer: 1,
          explain: "3/10 is three tenths, which is 0.3."
        },
        {
          q: "0.07 as a fraction is:",
          options: ["7/10", "7/100", "7/1000", "70/100"],
          answer: 1,
          explain: "0.07 is 7 hundredths, i.e. 7/100."
        },
        {
          q: "Which is the greatest of 0.5, 0.45, 0.08 and 0.4?",
          options: ["0.5", "0.45", "0.08", "0.4"],
          answer: 0,
          explain: "As hundredths: 50, 45, 8 and 40. The greatest is 50, so 0.5."
        },
        {
          q: "35 cm expressed in metres is:",
          options: ["3.5 m", "0.35 m", "0.035 m", "35 m"],
          answer: 1,
          explain: "1 m = 100 cm, so 35 cm = 35/100 m = 0.35 m."
        },
        {
          q: "2.5 + 4.75 = ?",
          options: ["6.25", "7.25", "7.00", "6.80"],
          answer: 1,
          explain: "2.50 + 4.75 = 7.25."
        },
        {
          q: "In 4.263, the digit 6 is in the:",
          options: ["Tenths place", "Hundredths place", "Thousandths place", "Ones place"],
          answer: 1,
          explain: "After the point: 2 is tenths, 6 is hundredths and 3 is thousandths."
        }
      ]
    },
    // ───────────────────────────── 9. Data Handling ─────────────────────────────
    {
      id: "data-handling",
      title: "Data Handling",
      section: "Data",
      summary: "This chapter shows how to collect and organise data using tally marks and frequency tables, and how to read and draw pictographs and bar graphs.",
      notes: [
        {
          heading: "Collecting and organising data",
          points: [
            "**Data** is a collection of facts or numbers, such as the marks of students or the number of books sold each day.",
            "Raw data is hard to read, so we arrange it in a table. A **tally mark** is a stroke | recorded for each observation, and every fifth stroke crosses the four before it to make a bundle of five.",
            "The **frequency** of an observation is the number of times it occurs. A table of observations with their frequencies is a frequency distribution table.",
            "The total of all frequencies equals the total number of observations, which gives a quick check."
          ]
        },
        {
          heading: "Pictographs",
          points: [
            "A **pictograph** uses pictures or symbols to show data. One symbol stands for a fixed number of items, given in a key.",
            "If one symbol = 10 books, then 7 symbols show 70 books and half a symbol shows 5 books.",
            "Always read the key first. A symbol may stand for 1, 5, 10 or any other number.",
            "A pictograph is easy to read but not suited for data with many different values."
          ]
        },
        {
          heading: "Bar graphs",
          points: [
            "A **bar graph** shows data with bars of equal width. The length (or height) of each bar shows the value.",
            "The bars are spaced equally, and a **scale** is chosen so that the graph fits the page, e.g. 1 unit length = 5 students.",
            "To read a bar graph, find the top of the bar and read the matching value on the scale. If 1 cm = 10 units, a bar 4.5 cm tall shows 45.",
            "A bar graph helps compare data. The tallest bar shows the greatest value and the shortest bar the least."
          ]
        }
      ],
      formulas: [
        "Total of all frequencies = total number of observations",
        "Value shown by a bar = (length of bar) × (scale value of one unit)",
        "Tally: |||| with a cross stroke = 5"
      ],
      terms: [
        { term: "Data", meaning: "A collection of facts, numbers or measurements gathered for study." },
        { term: "Tally marks", meaning: "Strokes used to count observations, grouped in bundles of five." },
        { term: "Frequency", meaning: "The number of times a particular observation occurs." },
        { term: "Pictograph", meaning: "A way of showing data using pictures, where each picture stands for a fixed number of items." },
        { term: "Bar graph", meaning: "A graph that shows data with bars of equal width whose lengths show the values." }
      ],
      examples: [
        {
          q: "The numbers shown by a die in 10 throws are 3, 1, 2, 3, 2, 3, 1, 2, 3, 3. Make a frequency table.",
          steps: [
            "Count 1: two times. Count 2: three times. Count 3: five times.",
            "Check: 2 + 3 + 5 = 10 observations."
          ],
          answer: "1 → 2, 2 → 3, 3 → 5"
        },
        {
          q: "In a pictograph, one symbol = 50 bicycles. A shop shows 6 symbols for Monday. How many bicycles were sold?",
          steps: [
            "Each symbol = 50 bicycles",
            "6 × 50 = 300"
          ],
          answer: "300 bicycles"
        }
      ],
      qa: [
        { q: "What is a frequency table and why is it useful?", a: "A frequency table lists each observation with the number of times (**frequency**) it occurs. It organises raw data so that it is easy to read and compare." },
        { q: "What should you look at first when reading a pictograph or a bar graph?", a: "The **key** of a pictograph, which tells how many items one symbol stands for, and the **scale** of a bar graph, which tells what one unit of length stands for. Without them the values cannot be read correctly." },
        { q: "A bar graph has the scale 1 cm = 10 students. What does a bar of height 3.5 cm show?", a: "3.5 × 10 = **35 students**." }
      ],
      quiz: [
        {
          q: "In tally marks, how many strokes does one bundle have?",
          options: ["4", "5", "10", "6"],
          answer: 1,
          explain: "Four vertical strokes and a fifth crossing them make a bundle of five."
        },
        {
          q: "The number of times an observation occurs is its:",
          options: ["Frequency", "Scale", "Key", "Range"],
          answer: 0,
          explain: "Frequency is the count of occurrences of an observation."
        },
        {
          q: "In a pictograph, 1 symbol = 5 items. How many items do 8 symbols show?",
          options: ["13", "40", "58", "85"],
          answer: 1,
          explain: "8 × 5 = 40."
        },
        {
          q: "A bar graph uses 1 cm = 10 units. A bar of height 4.5 cm shows:",
          options: ["4.5", "14.5", "45", "450"],
          answer: 2,
          explain: "4.5 × 10 = 45."
        },
        {
          q: "In a bar graph, the tallest bar shows the:",
          options: ["Least value", "Greatest value", "Average value", "Total value"],
          answer: 1,
          explain: "The height of a bar shows its value, so the tallest bar is the greatest."
        },
        {
          q: "A frequency table has frequencies 4, 7, 5 and 9. The total number of observations is:",
          options: ["20", "23", "25", "30"],
          answer: 2,
          explain: "4 + 7 + 5 + 9 = 25."
        }
      ]
    },
    // ───────────────────────────── 10. Mensuration ─────────────────────────────
    {
      id: "mensuration",
      title: "Mensuration",
      section: "Mensuration",
      summary: "This chapter introduces perimeter as the distance round a closed figure and area as the space it covers, with formulas for rectangles and squares.",
      notes: [
        {
          heading: "Perimeter",
          points: [
            "The **perimeter** of a closed figure is the total length of its boundary. It is measured in units of length such as cm and m.",
            "Perimeter of a rectangle = 2 × (length + breadth). Perimeter of a square = 4 × side.",
            "Perimeter of a triangle = sum of its three sides. Perimeter of an equilateral triangle = 3 × side.",
            "Perimeter of a regular polygon = number of sides × length of one side. A regular hexagon with side 5 cm has perimeter 30 cm."
          ]
        },
        {
          heading: "Area",
          points: [
            "The **area** of a closed figure is the amount of surface it covers. It is measured in square units such as cm² and m².",
            "Area of a rectangle = length × breadth. Area of a square = side × side.",
            "A square of side 1 cm has area 1 cm². Area can also be found by counting squares on a grid: count full squares, and count a part that is half or more as one.",
            "If the area and one side of a rectangle are known, the other side = area ÷ known side."
          ]
        },
        {
          heading: "Perimeter versus area",
          points: [
            "Perimeter measures length along the boundary, while area measures the surface inside. Their units are different (cm and cm²).",
            "Two rectangles can have the same perimeter and different areas. For example, 6 × 4 and 7 × 3 both have perimeter 20 but areas 24 and 21.",
            "Fencing or a border needs perimeter. Tiling or painting a floor needs area.",
            "Convert all lengths to the same unit before calculating."
          ]
        }
      ],
      formulas: [
        "Rectangle: P = 2 (l + b);  A = l × b",
        "Square: P = 4a;  A = a × a",
        "Triangle: P = a + b + c",
        "Regular polygon: P = (number of sides) × (side)"
      ],
      terms: [
        { term: "Perimeter", meaning: "The total length of the boundary of a closed figure." },
        { term: "Area", meaning: "The measure of the surface enclosed by a closed figure, in square units." },
        { term: "Regular polygon", meaning: "A polygon with all sides equal and all angles equal." },
        { term: "Square unit", meaning: "The area of a square of side one unit, such as 1 cm²." }
      ],
      examples: [
        {
          q: "A rectangle is 12 m long and 8 m wide. Find its perimeter and area.",
          steps: [
            "Perimeter = 2 × (12 + 8) = 2 × 20 = 40 m",
            "Area = 12 × 8 = 96 m²"
          ],
          answer: "Perimeter 40 m, area 96 m²"
        },
        {
          q: "The area of a rectangle is 90 cm² and its length is 15 cm. Find its breadth.",
          steps: [
            "Area = length × breadth",
            "Breadth = 90 ÷ 15 = 6 cm"
          ],
          answer: "6 cm"
        }
      ],
      qa: [
        { q: "A farmer has a rectangular field 50 m by 30 m. How much wire is needed for 2 rounds of fencing?", a: "Perimeter = 2 × (50 + 30) = 160 m. For 2 rounds: 2 × 160 = **320 m**." },
        { q: "Find the perimeter and area of a square of side 7 cm.", a: "Perimeter = 4 × 7 = **28 cm**. Area = 7 × 7 = **49 cm²**." },
        { q: "Why are perimeter and area measured in different units?", a: "Perimeter is a length, so it is measured in cm or m. Area covers a surface, so it is measured in square units like cm² or m²." }
      ],
      quiz: [
        {
          q: "The perimeter of a square of side 9 cm is:",
          options: ["18 cm", "36 cm", "81 cm", "27 cm"],
          answer: 1,
          explain: "4 × 9 = 36 cm. 81 would be the area in cm²."
        },
        {
          q: "The area of a rectangle 15 cm by 8 cm is:",
          options: ["46 cm²", "23 cm²", "120 cm²", "120 cm"],
          answer: 2,
          explain: "Area = 15 × 8 = 120 cm². Its perimeter 46 cm is a different quantity, and area is in square units."
        },
        {
          q: "The perimeter of an equilateral triangle of side 11 cm is:",
          options: ["22 cm", "33 cm", "121 cm", "44 cm"],
          answer: 1,
          explain: "3 × 11 = 33 cm."
        },
        {
          q: "A rectangle has perimeter 40 m and length 12 m. Its breadth is:",
          options: ["28 m", "16 m", "8 m", "4 m"],
          answer: 2,
          explain: "2 × (12 + b) = 40, so 12 + b = 20 and b = 8 m."
        },
        {
          q: "The perimeter of a regular hexagon of side 5 cm is:",
          options: ["25 cm", "30 cm", "35 cm", "15 cm"],
          answer: 1,
          explain: "A hexagon has 6 equal sides: 6 × 5 = 30 cm."
        },
        {
          q: "Area of a square of side 9 m is:",
          options: ["36 m²", "18 m²", "81 m²", "81 m"],
          answer: 2,
          explain: "Area = 9 × 9 = 81 m²."
        }
      ]
    },
    // ───────────────────────────── 11. Algebra ─────────────────────────────
    {
      id: "algebra",
      title: "Algebra",
      section: "Algebra",
      summary: "Algebra uses letters for unknown or changing numbers. This chapter covers variables, patterns written as rules, expressions and solving simple equations.",
      notes: [
        {
          heading: "Variables and patterns",
          points: [
            "A **variable** is a letter such as n or x that can take different values. A constant has a fixed value, like 4.",
            "Patterns can be written as rules. If the letter L needs 2 matchsticks, then n letters need **2n** matchsticks. The letter E needs 5, so n letters need 5n.",
            "Squares joined in a row: 1 square needs 4 sticks, 2 squares need 7, so n squares need **3n + 1**. For n = 10 this gives 31.",
            "A number multiplied by a variable is written without the sign: 3 × n is 3n."
          ]
        },
        {
          heading: "Rules from geometry and number properties",
          points: [
            "Perimeter of a square of side l is 4l. Perimeter of a rectangle is 2 (l + b). Area of a square is l × l.",
            "Commutative property: a + b = b + a and a × b = b × a hold for all numbers.",
            "A letter lets us state a rule once for every number instead of one example at a time.",
            "Expressions: 'five less than x' is x − 5, 'three times y plus 2' is 3y + 2."
          ]
        },
        {
          heading: "Equations",
          points: [
            "An **equation** says that two expressions are equal and has a variable, e.g. x + 5 = 12. The value that makes it true is its **solution**.",
            "Solving by trial: try values for x until both sides are equal. For x + 5 = 12, x = 7 works.",
            "Solving by balance: do the same thing to both sides. For 3y = 21, divide both sides by 3 to get y = 7.",
            "Check a solution by putting it back. For 2x − 3 = 9, x = 6 gives 12 − 3 = 9."
          ]
        }
      ],
      formulas: [
        "n letters L → 2n sticks;  n squares in a row → 3n + 1 sticks",
        "Square: P = 4l, A = l²;  Rectangle: P = 2 (l + b)",
        "a + b = b + a;  a × b = b × a"
      ],
      terms: [
        { term: "Variable", meaning: "A letter that stands for a number that can change or is unknown." },
        { term: "Expression", meaning: "A combination of numbers and variables with operations, such as 3n + 1." },
        { term: "Equation", meaning: "A statement that two expressions are equal, such as x + 5 = 12." },
        { term: "Solution", meaning: "The value of the variable that makes an equation true." }
      ],
      examples: [
        {
          q: "Find the number of matchsticks needed for 10 squares joined in a row, using the rule 3n + 1.",
          steps: [
            "Put n = 10",
            "3 × 10 + 1 = 31"
          ],
          answer: "31 matchsticks"
        },
        {
          q: "The sum of 3 times a number and 4 is 19. Find the number.",
          steps: [
            "Let the number be x. Then 3x + 4 = 19",
            "Subtract 4 from both sides: 3x = 15",
            "Divide by 3: x = 5",
            "Check: 3 × 5 + 4 = 19"
          ],
          answer: "5"
        }
      ],
      qa: [
        { q: "Write a rule for the number of matchsticks needed to make n letters V, if each V needs 2 sticks.", a: "Each letter V needs 2 sticks, so n letters need 2 × n = **2n** sticks." },
        { q: "Solve x + 5 = 12 and check the solution.", a: "Subtract 5 from both sides: x = 12 − 5 = **7**. Check: 7 + 5 = 12, which is correct." },
        { q: "Write 'six more than twice a number y' as an expression.", a: "Twice y is 2y, and six more gives **2y + 6**." }
      ],
      quiz: [
        {
          q: "How many matchsticks are needed to make n letters L, if each L needs 2 sticks?",
          options: ["n + 2", "2n", "n²", "2 − n"],
          answer: 1,
          explain: "Each letter uses 2 sticks, so n letters use 2 × n = 2n."
        },
        {
          q: "The perimeter of a square of side l is:",
          options: ["l²", "2l", "4l", "l + 4"],
          answer: 2,
          explain: "A square has four equal sides, so the perimeter is 4 × l."
        },
        {
          q: "The solution of x + 5 = 12 is:",
          options: ["x = 17", "x = 7", "x = 5", "x = 60"],
          answer: 1,
          explain: "x = 12 − 5 = 7."
        },
        {
          q: "The solution of 3y = 21 is:",
          options: ["y = 63", "y = 18", "y = 7", "y = 24"],
          answer: 2,
          explain: "Divide both sides by 3: y = 7."
        },
        {
          q: "'Five less than x' is written as:",
          options: ["5 − x", "x − 5", "5x", "x + 5"],
          answer: 1,
          explain: "Taking 5 from x gives x − 5."
        },
        {
          q: "The solution of 2x − 3 = 9 is:",
          options: ["x = 3", "x = 6", "x = 12", "x = 9"],
          answer: 1,
          explain: "2x = 12, so x = 6. Check: 12 − 3 = 9."
        }
      ]
    },
    // ───────────────────────────── 12. Ratio and Proportion ─────────────────────────────
    {
      id: "ratio-and-proportion",
      title: "Ratio and Proportion",
      section: "Number",
      summary: "A ratio compares two quantities of the same kind by division. This chapter covers simplifying ratios, equivalent ratios, proportion and the unitary method.",
      notes: [
        {
          heading: "Ratio",
          points: [
            "The **ratio** of two quantities a and b is written a : b and read 'a to b'. It compares how many times one is of the other.",
            "Both quantities must be in the **same unit**. For 50 paise and ₹2, write ₹2 as 200 paise: ratio 50 : 200 = 1 : 4.",
            "A ratio has no unit. 12 boys and 8 girls: boys to girls is 12 : 8 = 3 : 2, and boys to all students is 12 : 20 = 3 : 5.",
            "The order matters: 3 : 2 is different from 2 : 3."
          ]
        },
        {
          heading: "Simplest form and equivalent ratios",
          points: [
            "A ratio is in its **simplest form** when the two terms have no common factor except 1. Divide both by their HCF: 15 : 25 = 3 : 5.",
            "Multiplying or dividing both terms by the same non-zero number gives an **equivalent ratio**: 2 : 5 = 4 : 10 = 6 : 15.",
            "Ratios can be written as fractions: 2 : 5 is 2/5.",
            "To compare ratios, convert them to fractions with a common denominator."
          ]
        },
        {
          heading: "Proportion",
          points: [
            "If two ratios are equal, the four numbers are in **proportion**. a : b :: c : d means a/b = c/d.",
            "In a : b :: c : d, a and d are the **extremes** and b and c are the **means**. Product of extremes = product of means: a × d = b × c.",
            "Check 3 : 4 :: 9 : 12. 3 × 12 = 36 and 4 × 9 = 36, so they are in proportion.",
            "To find a missing term in 2 : 3 :: 6 : x, use 2 × x = 3 × 6 = 18, so x = 9."
          ]
        },
        {
          heading: "Unitary method",
          points: [
            "The **unitary method** first finds the value of one unit, then the value of the required number of units.",
            "If 12 pens cost ₹96, one pen costs 96 ÷ 12 = ₹8, so 5 pens cost 5 × 8 = ₹40.",
            "It works when both quantities increase together at the same rate.",
            "The answer can be checked using proportion: 12 : 96 :: 5 : 40."
          ]
        }
      ],
      formulas: [
        "a : b = a/b;  equivalent ratios: a : b = ka : kb",
        "a : b :: c : d  means  a/b = c/d,  i.e.  a × d = b × c",
        "Unitary method: value of 1 unit, then multiply"
      ],
      terms: [
        { term: "Ratio", meaning: "A comparison of two quantities of the same kind by division, written a : b." },
        { term: "Proportion", meaning: "An equality of two ratios, written a : b :: c : d." },
        { term: "Equivalent ratios", meaning: "Ratios that have the same value in simplest form, such as 2 : 5 and 4 : 10." },
        { term: "Unitary method", meaning: "Finding the value of one unit first and then the value of the required number of units." },
        { term: "Extremes and means", meaning: "In a : b :: c : d, a and d are the extremes and b and c are the means." }
      ],
      examples: [
        {
          q: "Find the ratio of 40 minutes to 2 hours.",
          steps: [
            "Convert to the same unit: 2 hours = 120 minutes",
            "Ratio = 40 : 120",
            "Divide both by 40: 1 : 3"
          ],
          answer: "1 : 3"
        },
        {
          q: "6 notebooks cost ₹90. Find the cost of 10 notebooks.",
          steps: [
            "Cost of 1 notebook = 90 ÷ 6 = ₹15",
            "Cost of 10 notebooks = 10 × 15 = ₹150"
          ],
          answer: "₹150"
        }
      ],
      qa: [
        { q: "Are 3 : 4 and 9 : 12 in proportion? Show how you checked.", a: "Product of extremes = 3 × 12 = 36 and product of means = 4 × 9 = 36. They are equal, so **yes, they are in proportion**." },
        { q: "Why must the units be the same before finding a ratio?", a: "A ratio compares quantities by division. 50 paise and ₹2 cannot be compared directly, so convert both to paise (50 and 200) to get the ratio 1 : 4." },
        { q: "Find x if 2 : 3 :: 6 : x.", a: "2 × x = 3 × 6 = 18, so x = 18 ÷ 2 = **9**." }
      ],
      quiz: [
        {
          q: "The simplest form of the ratio 15 : 25 is:",
          options: ["15 : 5", "5 : 3", "3 : 5", "1 : 10"],
          answer: 2,
          explain: "HCF of 15 and 25 is 5. Dividing both gives 3 : 5."
        },
        {
          q: "The ratio of 50 paise to ₹2 is:",
          options: ["25 : 1", "1 : 4", "1 : 2", "4 : 1"],
          answer: 1,
          explain: "₹2 = 200 paise, so the ratio is 50 : 200 = 1 : 4."
        },
        {
          q: "If 2 : 3 :: 6 : x, then x is:",
          options: ["4", "9", "12", "18"],
          answer: 1,
          explain: "2x = 3 × 6 = 18, so x = 9."
        },
        {
          q: "If 12 pens cost ₹96, 5 pens cost:",
          options: ["₹40", "₹48", "₹36", "₹20"],
          answer: 0,
          explain: "One pen costs 96 ÷ 12 = ₹8, so 5 pens cost ₹40."
        },
        {
          q: "Which ratio is equivalent to 2 : 5?",
          options: ["4 : 5", "2 : 10", "5 : 2", "4 : 10"],
          answer: 3,
          explain: "Multiplying both terms by 2 gives 4 : 10."
        },
        {
          q: "A class has 12 boys and 8 girls. The ratio of boys to all students is:",
          options: ["3 : 2", "3 : 5", "2 : 5", "5 : 3"],
          answer: 1,
          explain: "There are 20 students in all. 12 : 20 = 3 : 5."
        }
      ]
    },
    // ───────────────────────────── 13. Symmetry ─────────────────────────────
    {
      id: "symmetry",
      title: "Symmetry",
      section: "Geometry",
      summary: "A figure has line symmetry when it can be folded along a line so that the two halves match exactly. This chapter finds lines of symmetry and looks at reflection.",
      notes: [
        {
          heading: "Line symmetry",
          points: [
            "A figure has **line symmetry** if a line can be drawn so that, when folded along it, the two parts fit exactly on each other. The line is the **line of symmetry** (axis).",
            "The two halves are mirror images of each other, so a mirror placed on the line gives the full figure.",
            "A figure can have no line, one line or many lines of symmetry.",
            "Symmetry is seen in nature, rangoli, flags, buildings and the letters of the alphabet."
          ]
        },
        {
          heading: "Lines of symmetry of common shapes",
          points: [
            "Equilateral triangle: 3. Isosceles triangle: 1. Scalene triangle: 0.",
            "Square: 4. Rectangle (not a square): 2. Rhombus (not a square): 2. A general parallelogram: 0.",
            "Regular pentagon: 5. Regular hexagon: 6. In general, a regular polygon with n sides has n lines of symmetry.",
            "Circle: **infinitely many**, since every diameter is a line of symmetry."
          ]
        },
        {
          heading: "Reflection and letters",
          points: [
            "A reflection in a mirror line gives a **mirror image**: it is the same distance behind the mirror as the object is in front, and left and right are swapped.",
            "Letters like A, T and M have one vertical line of symmetry. B and D have one horizontal line.",
            "Letters like H, I and X have two lines of symmetry. N, S and Z have none.",
            "Folding or paper cutting is a good way to test for symmetry; ink blots and paper cut-outs show it too."
          ]
        }
      ],
      formulas: [
        "Regular polygon with n sides: n lines of symmetry",
        "Equilateral triangle 3;  square 4;  rectangle 2;  circle: infinitely many"
      ],
      terms: [
        { term: "Line of symmetry", meaning: "A line that divides a figure into two parts that are mirror images of each other." },
        { term: "Symmetrical figure", meaning: "A figure that has at least one line of symmetry." },
        { term: "Reflection", meaning: "The mirror image of a figure in a line." },
        { term: "Regular polygon", meaning: "A polygon with equal sides and equal angles." }
      ],
      qa: [
        { q: "How many lines of symmetry does a rectangle have, and how does this differ from a square?", a: "A rectangle that is not a square has **2** lines of symmetry (through the midpoints of opposite sides). A square has **4**: those two as well as its two diagonals." },
        { q: "What is a line of symmetry?", a: "It is a line that divides a figure into two parts such that, if folded along it, one part fits exactly over the other. Each part is the mirror image of the other." },
        { q: "How many lines of symmetry does a regular hexagon have?", a: "A regular polygon with n sides has n lines of symmetry, so a regular hexagon has **6**." }
      ],
      quiz: [
        {
          q: "How many lines of symmetry does a square have?",
          options: ["1", "2", "4", "8"],
          answer: 2,
          explain: "Two through opposite midpoints and two along the diagonals, making 4."
        },
        {
          q: "An equilateral triangle has how many lines of symmetry?",
          options: ["0", "1", "2", "3"],
          answer: 3,
          explain: "Each line from a vertex to the midpoint of the opposite side is a line of symmetry: 3 in all."
        },
        {
          q: "A scalene triangle has how many lines of symmetry?",
          options: ["0", "1", "2", "3"],
          answer: 0,
          explain: "A scalene triangle has no two equal sides, so no fold makes it match itself."
        },
        {
          q: "Which letter has no line of symmetry?",
          options: ["A", "T", "N", "M"],
          answer: 2,
          explain: "N does not match itself when folded in any direction. A, T and M each have a vertical line."
        },
        {
          q: "A regular hexagon has how many lines of symmetry?",
          options: ["3", "4", "6", "12"],
          answer: 2,
          explain: "A regular polygon with n sides has n lines of symmetry; here n = 6."
        },
        {
          q: "A circle has:",
          options: ["No line of symmetry", "One line of symmetry", "Four lines of symmetry", "Infinitely many lines of symmetry"],
          answer: 3,
          explain: "Every diameter is a line of symmetry, and a circle has infinitely many diameters."
        }
      ]
    },
    // ───────────────────────────── 14. Practical Geometry ─────────────────────────────
    {
      id: "practical-geometry",
      title: "Practical Geometry",
      section: "Geometry",
      summary: "This chapter teaches accurate constructions with a ruler, compass, set squares and protractor: circles, line segments, perpendiculars, bisectors and angles.",
      notes: [
        {
          heading: "Geometrical instruments and basic constructions",
          points: [
            "The geometry box has a **ruler**, a **compass** to draw circles and arcs and to mark equal lengths, a **divider**, two **set squares** and a **protractor**.",
            "To draw a circle: open the compass to the radius, fix the pointed end at the centre and rotate the pencil end.",
            "To draw a line segment of a given length, mark the length on the ruler and join the two marks. To copy a segment, set the compass to its length and mark it off elsewhere.",
            "Keep the pencil sharp and do not change the compass opening while drawing an arc."
          ]
        },
        {
          heading: "Perpendiculars and perpendicular bisector",
          points: [
            "A **perpendicular** to a line makes an angle of 90° with it. It can be drawn with a set square or with a ruler and compass.",
            "The **perpendicular bisector** of a segment AB cuts it into two equal halves and is perpendicular to it.",
            "Construction: with A and B as centres and a radius **more than half of AB**, draw arcs on both sides to meet at two points. The line through these points is the perpendicular bisector.",
            "Its point on AB is the midpoint of AB."
          ]
        },
        {
          heading: "Constructing and copying angles",
          points: [
            "To draw an angle of a given measure with a protractor: draw a ray, place the protractor's centre on its end point, mark the required degree, and join.",
            "To construct 60° with a compass: draw an arc from the end point of a ray, then with the same radius draw an arc from the point where it meets the ray. Join the end point to the point where the arcs cross.",
            "To copy an angle, draw an arc on it with the compass, repeat on a new ray with the same radius, measure the gap between the arc ends and mark it on the new arc.",
            "Angles of 120° are made by marking two 60° steps along the same arc."
          ]
        },
        {
          heading: "Angle bisector and special angles",
          points: [
            "The **bisector** of an angle divides it into two equal angles. Bisecting 70° gives two angles of 35°.",
            "Construction: draw an arc cutting both arms. From the two cut points, draw equal arcs that cross. The line from the vertex through the crossing is the bisector.",
            "Bisecting 60° gives 30°, and bisecting 90° gives 45°.",
            "A 90° angle can be drawn by bisecting a straight angle (180°), or by using a set square."
          ]
        }
      ],
      formulas: [
        "Arcs for a perpendicular bisector: radius > half of AB",
        "Bisector of angle θ gives two angles of θ/2",
        "With a compass: 60° and 120° directly; 30° by bisecting 60°; 45° by bisecting 90°"
      ],
      terms: [
        { term: "Compass", meaning: "An instrument for drawing circles and arcs and for transferring lengths." },
        { term: "Protractor", meaning: "An instrument marked in degrees for measuring and drawing angles." },
        { term: "Perpendicular bisector", meaning: "A line that cuts a segment into two equal parts at a right angle." },
        { term: "Angle bisector", meaning: "A ray that divides an angle into two equal angles." },
        { term: "Arc", meaning: "A part of a circle." }
      ],
      examples: [
        {
          q: "Describe how to bisect an angle ∠AOB.",
          steps: [
            "With centre O, draw an arc cutting OA at P and OB at Q.",
            "With P and Q as centres and the same radius, draw two arcs that cross inside the angle at R.",
            "Join OR. Ray OR bisects ∠AOB, so ∠AOR = ∠ROB = half of ∠AOB."
          ],
          answer: "OR is the angle bisector"
        }
      ],
      qa: [
        { q: "Why must the compass radius be more than half of AB when drawing a perpendicular bisector?", a: "The arcs from A and B must cross each other. If the radius were smaller than or equal to half of AB, they would not meet on both sides, so the construction would fail." },
        { q: "What angle do you get by bisecting a right angle?", a: "Each half is 90° ÷ 2 = **45°**." },
        { q: "How can you construct a 30° angle without a protractor?", a: "Construct 60° with a compass and then **bisect** it. Each half is 30°." }
      ],
      quiz: [
        {
          q: "The perpendicular bisector of a line segment makes with it an angle of:",
          options: ["30°", "45°", "60°", "90°"],
          answer: 3,
          explain: "It is perpendicular to the segment, so the angle is 90°."
        },
        {
          q: "Bisecting an angle of 70° gives angles of:",
          options: ["35° each", "70° each", "20° each", "140° each"],
          answer: 0,
          explain: "70° ÷ 2 = 35° for each half."
        },
        {
          q: "Which angle can be constructed with a compass alone by bisecting a right angle?",
          options: ["15°", "45°", "75°", "135°"],
          answer: 1,
          explain: "A right angle is 90°, and half of it is 45°."
        },
        {
          q: "To draw the perpendicular bisector of AB, the compass radius must be:",
          options: ["Exactly AB", "Less than half of AB", "More than half of AB", "Equal to one-third of AB"],
          answer: 2,
          explain: "The arcs from A and B can cross only if the radius is more than half of AB."
        },
        {
          q: "A circle of radius 3 cm is drawn with a compass. The compass is opened to:",
          options: ["3 cm", "6 cm", "1.5 cm", "9 cm"],
          answer: 0,
          explain: "The opening between the point and pencil equals the radius, 3 cm."
        },
        {
          q: "The midpoint of a line segment is found with the help of its:",
          options: ["Angle bisector", "Perpendicular bisector", "Diameter", "Diagonal"],
          answer: 1,
          explain: "The perpendicular bisector meets the segment at its midpoint."
        }
      ]
    }
  ]
});
