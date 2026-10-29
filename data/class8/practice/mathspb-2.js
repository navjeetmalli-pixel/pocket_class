// PSEB Class 8 Mathematics practice bank, part 2: Algebraic Expressions to Introduction to Graphs (earlier NCERT book).
StudyData.addPractice(8, "mathspb", {
  "algebraic-expressions-and-identities": {
    mcq: [
      { q: "The number of terms in 3x² − 5x + 7 is", options: ["2", "3", "4", "1"], answer: 1, explain: "The terms are 3x², −5x and 7, so there are three.", level: 1 },
      { q: "The coefficient of x in the term 7xy is", options: ["7", "y", "7y", "xy"], answer: 2, explain: "The coefficient of x is everything else multiplied with it, which is 7y.", level: 1 },
      { q: "(a + b)² equals", options: ["a² + b²", "a² − 2ab + b²", "a² + ab + b²", "a² + 2ab + b²"], answer: 3, explain: "The standard identity is (a + b)² = a² + 2ab + b². Leaving out the middle term is a common mistake.", level: 1 },
      { q: "(a + b)(a − b) equals", options: ["a² − b²", "a² + b²", "a² − 2ab + b²", "2a"], answer: 0, explain: "The cross terms +ab and −ab cancel, leaving a² − b².", level: 1 },
      { q: "An expression with exactly two terms is called a", options: ["monomial", "binomial", "trinomial", "constant"], answer: 1, explain: "Bi means two, so it is a binomial.", level: 1 },
      { q: "(3x + 2)(3x − 2) = ?", options: ["9x² + 4", "9x² − 12x + 4", "9x² − 4", "3x² − 4"], answer: 2, explain: "Use (a + b)(a − b) = a² − b² with a = 3x and b = 2: 9x² − 4.", level: 2 },
      { q: "(2a + 3)² = ?", options: ["4a² + 9", "4a² + 6a + 9", "4a² + 12a + 9", "2a² + 12a + 9"], answer: 2, explain: "(2a)² + 2(2a)(3) + 3² = 4a² + 12a + 9.", level: 2 },
      { q: "(x + 5)(x + 3) = ?", options: ["x² + 15", "x² + 8x + 15", "x² + 2x + 15", "x² + 8x + 8"], answer: 1, explain: "(x + a)(x + b) = x² + (a + b)x + ab, so x² + 8x + 15.", level: 2 },
      { q: "A square garden has side (x + 4) m. Its area in square metres is", options: ["x² + 8x + 16", "x² + 16", "x² + 4x + 16", "4x + 16"], answer: 0, explain: "Area = (x + 4)² = x² + 8x + 16.", level: 2 },
      { q: "(a + b)² − (a − b)² simplifies to", options: ["2ab", "4ab", "2a² + 2b²", "0"], answer: 1, explain: "(a² + 2ab + b²) − (a² − 2ab + b²) = 4ab.", level: 2 },
      { q: "If x + 1/x = 5, then x² + 1/x² equals", options: ["25", "27", "23", "10"], answer: 2, explain: "Square both sides: x² + 2 + 1/x² = 25, so x² + 1/x² = 23.", level: 3 },
      { q: "Using an identity, 103 × 97 equals", options: ["10009", "9909", "10091", "9991"], answer: 3, explain: "(100 + 3)(100 − 3) = 100² − 3² = 10000 − 9 = 9991.", level: 3 },
      { q: "Assertion (A): (a + b)² = a² + b².\nReason (R): (a + b)² = a² + 2ab + b².", options: ["Both A and R are true, and R is the correct explanation of A.", "Both A and R are true, but R is not the correct explanation of A.", "A is true, but R is false.", "A is false, but R is true."], answer: 3, explain: "A is false, because the middle term 2ab is missing. R is the correct identity and shows why A fails (for a = b = 1, (1 + 1)² = 4, not 2).", level: 3, keepOrder: true },
      { q: "A rectangular plot has length (2x + 3) m and width (x − 1) m. Its area in square metres is", options: ["2x² − x − 3", "2x² + x − 3", "2x² + 5x − 3", "2x² − 3"], answer: 1, explain: "(2x + 3)(x − 1) = 2x² − 2x + 3x − 3 = 2x² + x − 3.", level: 3 }
    ],
    written: [
      { q: "Write the coefficient of y in −5xy.", a: "The coefficient of y is **−5x**.", marks: 1 },
      { q: "Pick out the like terms from 3ab, 5a, −2ab, 7b.", a: "**3ab and −2ab**, since they have the same variable part ab.", marks: 1 },
      { q: "Multiply 3x by (2x² − 5).", a: "3x × 2x² − 3x × 5 = **6x³ − 15x**.", marks: 2 },
      { q: "Expand (x + 7)².", a: "x² + 2(x)(7) + 7² = **x² + 14x + 49**.", marks: 2 },
      { q: "Using an identity, find 98².", a: "98² = (100 − 2)² = 100² − 2(100)(2) + 2² = 10000 − 400 + 4 = **9604**.", marks: 2 },
      { q: "Simplify: (2x + 3)(x − 4) + 5x.", a: "(2x + 3)(x − 4) = 2x² − 8x + 3x − 12 = 2x² − 5x − 12.\nAdd 5x: 2x² − 5x − 12 + 5x = **2x² − 12**.", marks: 3 },
      { q: "Expand (3a − 2b)².", a: "Use (p − q)² = p² − 2pq + q² with p = 3a and q = 2b.\n(3a)² = 9a², 2pq = 12ab, q² = 4b².\nSo the result is **9a² − 12ab + 4b²**.", marks: 3 },
      { q: "Case study: A square lawn has side (x + 3) m. A square flower bed of side 3 m is made in one corner of it, and the rest is grass.\n(i) Find the area of the lawn.\n(ii) Find the area of the grass.\n(iii) Find the area of the lawn when x = 7.", a: "(i) Area = (x + 3)² = **x² + 6x + 9** m².\n(ii) Grass = x² + 6x + 9 − 9 = **x² + 6x** m².\n(iii) For x = 7 the side is 10 m, so the area is **100 m²**.", marks: 4, type: "case" }
    ]
  },
  mensuration: {
    mcq: [
      { q: "The area of a trapezium with parallel sides a and b and height h is", options: ["(a + b) × h", "½ × (a + b) × h", "½ × a × b", "a × b × h"], answer: 1, explain: "It is half of (sum of the parallel sides) × the distance between them.", level: 1 },
      { q: "The total surface area of a cube of edge a is", options: ["a³", "4a²", "6a²", "2a²"], answer: 2, explain: "A cube has 6 square faces of area a² each. 4a² is the lateral surface area.", level: 1 },
      { q: "The volume of a cuboid of length l, breadth b and height h is", options: ["l × b × h", "2(lb + bh + hl)", "l + b + h", "lb"], answer: 0, explain: "Volume = length × breadth × height. The second expression is the surface area.", level: 1 },
      { q: "1 cubic metre is equal to", options: ["10 litres", "100 litres", "10,000 litres", "1000 litres"], answer: 3, explain: "1 m³ = 1000 litres.", level: 1 },
      { q: "The curved surface area of a cylinder of radius r and height h is", options: ["πr²h", "2πrh", "2πr(r + h)", "πrh"], answer: 1, explain: "Unrolled, the curved surface is a rectangle of length 2πr and width h.", level: 1 },
      { q: "The area of a rhombus with diagonals 10 cm and 24 cm is", options: ["240 cm²", "34 cm²", "120 cm²", "60 cm²"], answer: 2, explain: "Area = ½ × 10 × 24 = 120 cm².", level: 2 },
      { q: "The total surface area of a cube of edge 5 cm is", options: ["125 cm²", "100 cm²", "150 cm²", "30 cm²"], answer: 2, explain: "6 × 5² = 150 cm². 125 cm³ is the volume.", level: 2 },
      { q: "A cuboid measures 6 cm × 4 cm × 3 cm. Its total surface area is", options: ["72 cm²", "54 cm²", "216 cm²", "108 cm²"], answer: 3, explain: "2(6×4 + 4×3 + 3×6) = 2(24 + 12 + 18) = 108 cm². 72 is its volume in cm³.", level: 2 },
      { q: "A cylindrical glass has radius 7 cm and height 10 cm. The volume of water it holds when full is (π = 22/7)", options: ["440 cm³", "3080 cm³", "1540 cm³", "154 cm³"], answer: 2, explain: "V = πr²h = (22/7) × 49 × 10 = 1540 cm³.", level: 2 },
      { q: "A field is a trapezium with parallel sides 30 m and 20 m, and the distance between them is 12 m. Its area is", options: ["300 m²", "600 m²", "250 m²", "360 m²"], answer: 0, explain: "½ × (30 + 20) × 12 = 300 m².", level: 2 },
      { q: "The volume of a cube is 343 cm³. Its total surface area is", options: ["49 cm²", "196 cm²", "294 cm²", "343 cm²"], answer: 2, explain: "Edge = ∛343 = 7 cm, so TSA = 6 × 49 = 294 cm². 196 cm² is the lateral surface area.", level: 3 },
      { q: "Assertion (A): If the radius of a cylinder is doubled and the height is kept the same, its volume becomes 4 times.\nReason (R): The volume of a cylinder is πr²h, which depends on the square of the radius.", options: ["Both A and R are true, and R is the correct explanation of A.", "Both A and R are true, but R is not the correct explanation of A.", "A is true, but R is false.", "A is false, but R is true."], answer: 0, explain: "With radius 2r the volume is π(2r)²h = 4πr²h. R states the dependence on r² that makes A true.", level: 3, keepOrder: true },
      { q: "A cuboid water tank measures 2 m × 1.5 m × 1 m. A pipe fills it at 50 litres per minute. The time to fill it from empty is", options: ["30 min", "90 min", "60 min", "120 min"], answer: 2, explain: "Volume = 3 m³ = 3000 litres, and 3000 ÷ 50 = 60 minutes.", level: 3 },
      { q: "A cylinder of radius 7 cm has a curved surface area of 440 cm². Its height is (π = 22/7)", options: ["20 cm", "5 cm", "14 cm", "10 cm"], answer: 3, explain: "2πrh = 440 gives 44h = 440, so h = 10 cm.", level: 3 }
    ],
    written: [
      { q: "Write the formula for the area of a rhombus with diagonals d₁ and d₂.", a: "Area = **½ × d₁ × d₂**.", marks: 1 },
      { q: "Convert 5 m³ into litres.", a: "1 m³ = 1000 litres, so 5 m³ = **5000 litres**.", marks: 1 },
      { q: "Find the area of a trapezium whose parallel sides are 14 cm and 10 cm and whose height is 8 cm.", a: "Area = ½ × (14 + 10) × 8 = ½ × 24 × 8 = **96 cm²**.", marks: 2 },
      { q: "Find the curved surface area of a cylinder of radius 7 cm and height 15 cm. (π = 22/7)", a: "CSA = 2πrh = 2 × (22/7) × 7 × 15 = 44 × 15 = **660 cm²**.", marks: 2 },
      { q: "Find the lateral surface area of a cuboid of length 8 cm, breadth 5 cm and height 3 cm.", a: "LSA = 2h(l + b) = 2 × 3 × (8 + 5) = 6 × 13 = **78 cm²**.", marks: 2 },
      { q: "The four walls of a room 5 m long, 4 m wide and 3 m high are to be painted at ₹40 per m². Find the cost.", a: "Area of four walls = 2h(l + b) = 2 × 3 × (5 + 4) = 54 m².\nCost = 54 × 40 = **₹2,160**.", marks: 3 },
      { q: "Find the total surface area of a cylinder of radius 7 cm and height 10 cm. (π = 22/7)", a: "TSA = 2πr(r + h) = 2 × (22/7) × 7 × (7 + 10).\n= 44 × 17 = **748 cm²**.", marks: 3 },
      { q: "Case study: A cuboid water tank is 3 m long, 2 m wide and 1.5 m high.\n(i) Find its volume.\n(ii) How many litres of water can it hold?\n(iii) Find its total outer surface area and the cost of painting it at ₹30 per m².", a: "(i) Volume = 3 × 2 × 1.5 = **9 m³**.\n(ii) 9 × 1000 = **9000 litres**.\n(iii) TSA = 2(3×2 + 2×1.5 + 3×1.5) = 2(6 + 3 + 4.5) = **27 m²**.\nCost = 27 × 30 = **₹810**.", marks: 4, type: "case" }
    ]
  },
  "exponents-and-powers": {
    mcq: [
      { q: "2⁻³ = ?", options: ["−8", "1/8", "−6", "8"], answer: 1, explain: "A negative exponent means the reciprocal: 2⁻³ = 1/2³ = 1/8.", level: 1 },
      { q: "Any non-zero number raised to the power 0 equals", options: ["0", "the number itself", "undefined", "1"], answer: 3, explain: "a⁰ = 1 for every a ≠ 0.", level: 1 },
      { q: "3⁴ × 3² = ?", options: ["3⁶", "3⁸", "9⁶", "3²"], answer: 0, explain: "When bases are the same we add the exponents: 4 + 2 = 6.", level: 1 },
      { q: "(5²)³ = ?", options: ["5⁵", "5⁸", "5⁶", "25³ᐟ²"], answer: 2, explain: "A power of a power multiplies the exponents: 2 × 3 = 6.", level: 1 },
      { q: "5,000 in standard form is", options: ["5 × 10³", "50 × 10²", "0.5 × 10⁴", "5 × 10⁴"], answer: 0, explain: "Standard form has one non-zero digit before the decimal point: 5 × 1000 = 5 × 10³.", level: 1 },
      { q: "(2/3)⁻² = ?", options: ["4/9", "9/4", "−4/9", "−9/4"], answer: 1, explain: "Take the reciprocal of the base: (3/2)² = 9/4.", level: 2 },
      { q: "7⁵ ÷ 7⁸ = ?", options: ["7³", "7¹³", "7⁻³", "7⁻¹³"], answer: 2, explain: "Subtract the exponents: 5 − 8 = −3, so the answer is 7⁻³ = 1/343.", level: 2 },
      { q: "0.00045 in standard form is", options: ["4.5 × 10⁻³", "4.5 × 10⁻⁴", "45 × 10⁻⁵", "4.5 × 10⁴"], answer: 1, explain: "Moving the decimal point 4 places to the right gives 4.5, so the exponent is −4.", level: 2 },
      { q: "A red blood cell is about 0.000007 m across. In standard form this is", options: ["7 × 10⁻⁵", "7 × 10⁻⁷", "7 × 10⁻⁶", "7 × 10⁶"], answer: 2, explain: "The decimal point moves 6 places to give 7, so 7 × 10⁻⁶ m.", level: 2 },
      { q: "The Sun is about 1.5 × 10⁸ km from the Earth. Written in the usual form this is", options: ["15,000,000 km", "1,500,000,000 km", "1,500,000 km", "150,000,000 km"], answer: 3, explain: "1.5 × 10⁸ = 1.5 × 100,000,000 = 150,000,000.", level: 2 },
      { q: "(2⁻¹ + 3⁻¹)⁻¹ = ?", options: ["5/6", "1/5", "6/5", "5"], answer: 2, explain: "2⁻¹ + 3⁻¹ = 1/2 + 1/3 = 5/6, and its inverse is 6/5.", level: 3 },
      { q: "Assertion (A): (−3)⁴ = 81.\nReason (R): A negative number raised to an even power is positive.", options: ["Both A and R are true, and R is the correct explanation of A.", "Both A and R are true, but R is not the correct explanation of A.", "A is true, but R is false.", "A is false, but R is true."], answer: 0, explain: "(−3)⁴ = (−3)(−3)(−3)(−3) = 81. Pairs of negative factors multiply to positive, which is exactly what R says.", level: 3, keepOrder: true },
      { q: "Simplify (2⁵ × 5⁵) ÷ 10³.", options: ["10", "1000", "100", "25"], answer: 2, explain: "2⁵ × 5⁵ = 10⁵, and 10⁵ ÷ 10³ = 10² = 100.", level: 3 },
      { q: "The numbers of people in two villages are 4 × 10⁵ and 3 × 10⁴. The total in standard form is", options: ["7 × 10⁵", "4.3 × 10⁵", "7 × 10⁹", "4.3 × 10⁹"], answer: 1, explain: "Write 3 × 10⁴ as 0.3 × 10⁵. Then 4 × 10⁵ + 0.3 × 10⁵ = 4.3 × 10⁵. Powers of ten can be added only after making them equal.", level: 3 }
    ],
    written: [
      { q: "Find the value of 5⁻².", a: "5⁻² = 1/5² = **1/25**.", marks: 1 },
      { q: "Write 6.5 × 10³ in the usual form.", a: "6.5 × 1000 = **6500**.", marks: 1 },
      { q: "Simplify (3²)³ ÷ 3⁴.", a: "(3²)³ = 3⁶.\n3⁶ ÷ 3⁴ = 3² = **9**.", marks: 2 },
      { q: "Express 0.0000345 in standard form.", a: "Move the decimal point 5 places to the right to get 3.45.\nSo the number is **3.45 × 10⁻⁵**.", marks: 2 },
      { q: "Evaluate (1/2)⁻³ + (1/3)⁻².", a: "(1/2)⁻³ = 2³ = 8 and (1/3)⁻² = 3² = 9.\nThe sum is **17**.", marks: 2 },
      { q: "Simplify (4⁵ × 8²) ÷ (2⁷ × 16).", a: "4⁵ = 2¹⁰ and 8² = 2⁶, so the numerator is 2¹⁶.\nThe denominator is 2⁷ × 2⁴ = 2¹¹.\n2¹⁶ ÷ 2¹¹ = 2⁵ = **32**.", marks: 3 },
      { q: "Find x if 5^(2x + 1) ÷ 5³ = 5⁶.", a: "Subtract exponents on the left: 5^(2x + 1 − 3) = 5⁶.\nSo 2x − 2 = 6, giving 2x = 8.\nTherefore **x = 4**.", marks: 3 },
      { q: "Case study: The distance of the Sun from the Earth is 1.5 × 10⁸ km. Light travels at 3 × 10⁵ km per second.\n(i) Write the speed of light in the usual form.\n(ii) How many seconds does sunlight take to reach the Earth?\n(iii) Express this time in minutes (approximately).", a: "(i) 3 × 10⁵ = **300,000 km/s**.\n(ii) Time = 1.5 × 10⁸ ÷ 3 × 10⁵ = 0.5 × 10³ = **500 seconds**.\n(iii) 500 ÷ 60 ≈ **8.3 minutes**.", marks: 4, type: "case" }
    ]
  },
  "direct-and-inverse-proportions": {
    mcq: [
      { q: "For a fixed distance, speed and time taken are in", options: ["direct proportion", "inverse proportion", "no proportion", "equal proportion"], answer: 1, explain: "If speed increases, the time taken decreases, and speed × time stays equal to the distance.", level: 1 },
      { q: "If x and y are in direct proportion, which of these is constant?", options: ["x + y", "x − y", "x ÷ y", "x × y"], answer: 2, explain: "In direct proportion the ratio x/y is constant. x × y is constant in inverse proportion.", level: 1 },
      { q: "If x and y are in inverse proportion, which of these is constant?", options: ["x × y", "x ÷ y", "x + y", "x − y"], answer: 0, explain: "In inverse proportion the product xy stays the same.", level: 1 },
      { q: "The number of articles bought and the total cost (same price each) are in", options: ["inverse proportion", "no proportion", "direct proportion", "a constant relation"], answer: 2, explain: "Buying twice as many articles costs twice as much, so they are directly proportional.", level: 1 },
      { q: "5 kg of sugar costs ₹225. The cost of 1 kg is", options: ["₹50", "₹40", "₹1,125", "₹45"], answer: 3, explain: "225 ÷ 5 = ₹45.", level: 1 },
      { q: "12 notebooks cost ₹180. The cost of 20 notebooks is", options: ["₹240", "₹360", "₹300", "₹320"], answer: 2, explain: "One notebook costs 180 ÷ 12 = ₹15, so 20 cost ₹300.", level: 2 },
      { q: "6 men can finish a job in 10 days. 4 men working at the same rate will take", options: ["15 days", "20 days", "40 days", "6 days"], answer: 0, explain: "Fewer men take more days. 6 × 10 = 4 × d, so d = 15 days.", level: 2 },
      { q: "A car at 60 km/h takes 5 hours for a journey. At 75 km/h it will take", options: ["6.25 hours", "3.5 hours", "5 hours", "4 hours"], answer: 3, explain: "Distance = 300 km, and 300 ÷ 75 = 4 hours. Greater speed means less time.", level: 2 },
      { q: "A recipe for 4 people needs 300 g of rice. For 10 people it needs", options: ["1,200 g", "600 g", "750 g", "120 g"], answer: 2, explain: "Per person it is 75 g, so 10 people need 750 g.", level: 2 },
      { q: "A tank is filled by 3 identical pipes in 12 hours. With 4 such pipes it will fill in", options: ["16 hours", "8 hours", "10 hours", "9 hours"], answer: 3, explain: "More pipes means less time: 3 × 12 = 4 × t, so t = 9 hours.", level: 2 },
      { q: "A mess has food for 40 students for 30 days. If 10 more students join, the food will last", options: ["20 days", "24 days", "27 days", "37.5 days"], answer: 1, explain: "The food supply is 40 × 30 = 1200 student-days, and 1200 ÷ 50 = 24 days. 37.5 days wrongly treats it as direct.", level: 3 },
      { q: "Assertion (A): If x × y = 24 always, then x and y are in direct proportion.\nReason (R): In direct proportion the ratio x/y stays constant.", options: ["Both A and R are true, and R is the correct explanation of A.", "Both A and R are true, but R is not the correct explanation of A.", "A is true, but R is false.", "A is false, but R is true."], answer: 3, explain: "A is false: a constant product means inverse proportion. R is a correct statement about direct proportion, which shows that xy = 24 does not fit it.", level: 3, keepOrder: true },
      { q: "A photograph 4 cm wide and 6 cm tall is enlarged so that the 4 cm side becomes 10 cm. The 6 cm side becomes", options: ["12 cm", "16 cm", "15 cm", "9 cm"], answer: 2, explain: "Enlargement keeps the ratio: 4/10 = 6/x, so x = 15 cm.", level: 3 },
      { q: "15 workers can build a wall in 12 days. After 4 days, 5 workers leave. The remaining work will take the rest of the workers", options: ["12 days", "8 days", "16 days", "9 days"], answer: 0, explain: "Total work = 15 × 12 = 180 worker-days. After 4 days 60 are done, 120 remain, and 10 workers need 120 ÷ 10 = 12 days.", level: 3 }
    ],
    written: [
      { q: "8 pencils cost ₹40. Find the cost of one pencil.", a: "40 ÷ 8 = **₹5**.", marks: 1 },
      { q: "5 men finish a job in 8 days. What kind of proportion is there between the number of men and the number of days?", a: "**Inverse proportion**, because more men take fewer days (men × days is constant).", marks: 1 },
      { q: "A machine fills 150 bottles in 5 hours. How many bottles will it fill in 8 hours?", a: "In 1 hour it fills 150 ÷ 5 = 30 bottles.\nIn 8 hours it fills 30 × 8 = **240 bottles**.", marks: 2 },
      { q: "6 workers build a wall in 8 days. How long will 4 workers take?", a: "Fewer workers take more days. 6 × 8 = 4 × d.\nd = 48 ÷ 4 = **12 days**.", marks: 2 },
      { q: "Check whether x and y are in direct proportion: x = 2, 4, 6 and y = 5, 10, 15.", a: "y/x = 5/2, 10/4, 15/6, and each equals 2.5.\nThe ratio is constant, so they are **directly proportional**.", marks: 2 },
      { q: "A train running at 80 km/h covers a distance in 6 hours. At what speed must it run to cover the same distance in 4 hours?", a: "Distance = 80 × 6 = 480 km.\nRequired speed = 480 ÷ 4 = **120 km/h** (less time needs more speed).", marks: 3 },
      { q: "On a map, 2 cm represents 15 km. What distance does 7 cm represent?", a: "Distance and map length are in direct proportion.\n1 cm represents 15 ÷ 2 = 7.5 km.\n7 cm represents 7 × 7.5 = **52.5 km**.", marks: 3 },
      { q: "Case study: The school canteen has enough rice to feed 60 students for 15 days.\n(i) What kind of proportion exists between the number of students and the number of days?\n(ii) For how many days will the rice last if there are 90 students?\n(iii) How many students can be fed if the rice must last 12 days?", a: "(i) **Inverse proportion**; the product (students × days) is constant at 900.\n(ii) 900 ÷ 90 = **10 days**.\n(iii) 900 ÷ 12 = **75 students**.", marks: 4, type: "case" }
    ]
  },
  factorisation: {
    mcq: [
      { q: "Factorising 5x + 15 gives", options: ["5(x + 3)", "5x(15)", "x(5 + 15)", "5(x + 15)"], answer: 0, explain: "5 is common to both terms: 5x + 15 = 5(x + 3).", level: 1 },
      { q: "a² − b² factorises as", options: ["(a − b)²", "(a + b)²", "(a + b)(a − b)", "a(a − b)"], answer: 2, explain: "This is the difference of squares identity.", level: 1 },
      { q: "The greatest common factor of 6x and 9x² is", options: ["3x", "6x", "9x", "3"], answer: 0, explain: "The HCF of 6 and 9 is 3, and the lowest power of x is x, so it is 3x.", level: 1 },
      { q: "x² − 9 = ?", options: ["(x − 3)²", "(x + 9)(x − 1)", "(x + 3)(x − 3)", "x(x − 9)"], answer: 2, explain: "9 = 3², so x² − 9 = (x + 3)(x − 3).", level: 1 },
      { q: "To factorise an expression means to", options: ["expand it", "write it as a product of factors", "add its terms", "divide it by x"], answer: 1, explain: "Factorising writes the expression as a product, the reverse of multiplying out.", level: 1 },
      { q: "12a²b + 18ab² factorises as", options: ["6ab(2a + 3b)", "6a²b²(2 + 3)", "3ab(4a + 6b²)", "6(2a²b + 3ab²) only"], answer: 0, explain: "The HCF of the two terms is 6ab, and dividing gives 2a + 3b.", level: 2 },
      { q: "x² + 7x + 12 = ?", options: ["(x + 2)(x + 6)", "(x + 3)(x + 4)", "(x + 1)(x + 12)", "(x − 3)(x − 4)"], answer: 1, explain: "We need two numbers with sum 7 and product 12, which are 3 and 4.", level: 2 },
      { q: "4x² − 25 = ?", options: ["(4x + 5)(x − 5)", "(2x − 5)²", "(2x + 5)(2x − 5)", "(2x + 25)(2x − 1)"], answer: 2, explain: "4x² = (2x)² and 25 = 5², so it is (2x + 5)(2x − 5).", level: 2 },
      { q: "The area of a rectangular plot is x² + 9x + 14 and its width is (x + 2). Its length is", options: ["x + 5", "x + 9", "x + 12", "x + 7"], answer: 3, explain: "x² + 9x + 14 = (x + 2)(x + 7), because 2 × 7 = 14 and 2 + 7 = 9.", level: 2 },
      { q: "A square of side 8 m is cut from the corner of a square field of side 12 m. The area left is", options: ["20 m²", "80 m²", "4 m²", "208 m²"], answer: 1, explain: "12² − 8² = (12 + 8)(12 − 8) = 20 × 4 = 80 m².", level: 2 },
      { q: "x² − x − 6 factorises as", options: ["(x + 3)(x − 2)", "(x − 6)(x + 1)", "(x − 3)(x + 2)", "(x + 6)(x − 1)"], answer: 2, explain: "We need two numbers with product −6 and sum −1, which are −3 and 2.", level: 3 },
      { q: "Assertion (A): 4x² + 12x + 9 is a perfect square.\nReason (R): 4x² + 12x + 9 = (2x + 3)².", options: ["Both A and R are true, and R is the correct explanation of A.", "Both A and R are true, but R is not the correct explanation of A.", "A is true, but R is false.", "A is false, but R is true."], answer: 0, explain: "(2x + 3)² = 4x² + 12x + 9, so R shows that the expression is the square of a binomial, which is what A claims.", level: 3, keepOrder: true },
      { q: "A rectangular hall has area x² − 5x + 6 and breadth (x − 3). Its length is", options: ["x + 2", "x − 3", "x + 3", "x − 2"], answer: 3, explain: "x² − 5x + 6 = (x − 3)(x − 2), so the length is x − 2.", level: 3 },
      { q: "The value of 101² − 99² is", options: ["200", "400", "4", "2"], answer: 1, explain: "(101 + 99)(101 − 99) = 200 × 2 = 400.", level: 3 }
    ],
    written: [
      { q: "Factorise 7x − 21.", a: "7x − 21 = **7(x − 3)**.", marks: 1 },
      { q: "Factorise x² − 1.", a: "x² − 1² = **(x + 1)(x − 1)**.", marks: 1 },
      { q: "Factorise 6xy + 9x.", a: "The common factor is 3x.\n6xy + 9x = **3x(2y + 3)**.", marks: 2 },
      { q: "Factorise a² + 6a + 9.", a: "a² + 2(a)(3) + 3² = **(a + 3)²**.", marks: 2 },
      { q: "Factorise 9x² − 16.", a: "9x² − 16 = (3x)² − 4² = **(3x + 4)(3x − 4)**.", marks: 2 },
      { q: "Factorise x² + 9x + 20.", a: "Find two numbers with sum 9 and product 20: they are 4 and 5.\nx² + 4x + 5x + 20 = x(x + 4) + 5(x + 4).\n= **(x + 4)(x + 5)**.", marks: 3 },
      { q: "Factorise by regrouping: xy + 2y + 3x + 6.", a: "Group the terms: y(x + 2) + 3(x + 2).\nTake out the common binomial (x + 2).\nResult: **(x + 2)(y + 3)**.", marks: 3 },
      { q: "Case study: A farmer's rectangular field has an area of (x² + 11x + 28) m².\n(i) Factorise the area.\n(ii) If the breadth is (x + 4) m, find the length.\n(iii) For x = 3, find the length, breadth and area.", a: "(i) x² + 11x + 28 = **(x + 4)(x + 7)**.\n(ii) Length = **(x + 7) m**.\n(iii) Breadth = 7 m, length = 10 m, area = **70 m²** (check: 9 + 33 + 28 = 70).", marks: 4, type: "case" }
    ]
  },
  "introduction-to-graphs": {
    mcq: [
      { q: "The horizontal number line in the coordinate plane is called the", options: ["x-axis", "y-axis", "origin", "quadrant"], answer: 0, explain: "The horizontal axis is the x-axis and the vertical axis is the y-axis.", level: 1 },
      { q: "The coordinates of the origin are", options: ["(1, 1)", "(0, 1)", "(0, 0)", "(1, 0)"], answer: 2, explain: "The origin is where the two axes meet, at (0, 0).", level: 1 },
      { q: "The point (3, −2) lies in the", options: ["first quadrant", "second quadrant", "third quadrant", "fourth quadrant"], answer: 3, explain: "A positive x and negative y place the point in the fourth quadrant.", level: 1 },
      { q: "In the point (4, 7), the number 4 is called the", options: ["x-coordinate", "y-coordinate", "origin", "ordinate"], answer: 0, explain: "The first number of an ordered pair is the x-coordinate (abscissa).", level: 1 },
      { q: "Which of these points lies on the y-axis?", options: ["(5, 0)", "(0, 5)", "(5, 5)", "(−5, 5)"], answer: 1, explain: "Every point on the y-axis has x-coordinate 0.", level: 1 },
      { q: "The point (−4, 3) lies in the", options: ["first quadrant", "third quadrant", "fourth quadrant", "second quadrant"], answer: 3, explain: "A negative x and positive y give the second quadrant.", level: 2 },
      { q: "On a distance–time graph, a horizontal line segment means the object is", options: ["moving faster", "moving slower", "at rest", "returning home"], answer: 2, explain: "Time passes but the distance does not change, so the object is at rest.", level: 2 },
      { q: "For the line y = 3x, the point with x = 4 is", options: ["(4, 7)", "(4, 12)", "(4, 1)", "(12, 4)"], answer: 1, explain: "y = 3 × 4 = 12, so the point is (4, 12).", level: 2 },
      { q: "A line graph of temperature rises from 6 a.m. to 2 p.m. and then falls. The highest temperature was reached at", options: ["2 p.m.", "6 a.m.", "noon", "evening"], answer: 0, explain: "The graph is at its peak where it stops rising and begins to fall, which is 2 p.m.", level: 2 },
      { q: "A distance–time graph is a straight line through (0, 0) and (2, 30), with distance in km and time in hours. The speed is", options: ["30 km/h", "60 km/h", "2 km/h", "15 km/h"], answer: 3, explain: "Speed = 30 km ÷ 2 h = 15 km/h.", level: 2 },
      { q: "The point (−5, 0) lies on the", options: ["positive x-axis", "negative x-axis", "positive y-axis", "negative y-axis"], answer: 1, explain: "Its y-coordinate is 0, so it is on the x-axis, and x is negative so it is on the negative side.", level: 3 },
      { q: "Assertion (A): The graph of y = x + 2 is a straight line.\nReason (R): The point (0, 2) lies on the line y = x + 2.", options: ["Both A and R are true, and R is the correct explanation of A.", "Both A and R are true, but R is not the correct explanation of A.", "A is true, but R is false.", "A is false, but R is true."], answer: 1, explain: "Both are true, but one point on the line does not explain why the graph is a straight line, so R is not the reason.", level: 3, keepOrder: true },
      { q: "Mohan plots (−3, 2), (−3, −2), (3, −2) and (3, 2) and joins them in order. The area of the figure formed is", options: ["10 square units", "12 square units", "24 square units", "20 square units"], answer: 2, explain: "The figure is a rectangle 6 units wide (from −3 to 3) and 4 units tall (from −2 to 2), so the area is 24 square units. 20 is its perimeter.", level: 3 },
      { q: "Which point lies on the line y = 2x + 1?", options: ["(1, 2)", "(3, 6)", "(0, 2)", "(2, 5)"], answer: 3, explain: "For x = 2, y = 2(2) + 1 = 5. The other points give 3, 7 and 1 for y, so they do not fit.", level: 3 }
    ],
    written: [
      { q: "Write the coordinates of the origin.", a: "The origin is **(0, 0)**.", marks: 1 },
      { q: "In which quadrant does the point (−2, −7) lie?", a: "Both coordinates are negative, so it lies in the **third quadrant**.", marks: 1 },
      { q: "Write the coordinates of three points on the line y = 2x.", a: "Choose x = 0, 1, 2. Then y = 0, 2, 4.\nThe points are **(0, 0), (1, 2) and (2, 4)**.", marks: 2 },
      { q: "The points A(3, 4) and B(3, −4) are plotted. What is common to them, and how are they related?", a: "They have the same x-coordinate 3, so they lie on the same vertical line.\nB is the mirror image (reflection) of A in the x-axis.", marks: 2 },
      { q: "A distance–time graph is a straight line through the origin. What does this tell you about the speed?", a: "Equal distances are covered in equal times, so the speed is **constant**.\nThe steeper the line, the greater the speed.", marks: 2 },
      { q: "Make a table of values for y = 3x for x = 0, 1, 2, 3 and write the points to be plotted. What will the graph look like?", a: "x: 0, 1, 2, 3 and y: 0, 3, 6, 9.\nPoints: (0, 0), (1, 3), (2, 6), (3, 9).\nThe points lie on a **straight line through the origin**.", marks: 3 },
      { q: "Three vertices of a rectangle are (1, 1), (4, 1) and (4, 5). Find the fourth vertex and the area.", a: "The fourth vertex has x = 1 and y = 5, so it is **(1, 5)**.\nLength = 4 − 1 = 3 units and breadth = 5 − 1 = 4 units.\nArea = 3 × 4 = **12 square units**.", marks: 3 },
      { q: "Case study: A cyclist's journey is plotted as a graph of time (hours) against distance (km). The points are (0, 0), (1, 12), (2, 24) and (3, 36), and they lie on a straight line.\n(i) Find the speed of the cyclist.\n(ii) What distance will be covered in 2.5 hours?\n(iii) How long will it take to cover 60 km?", a: "(i) 12 km in 1 hour, so the speed is a constant **12 km/h**.\n(ii) 12 × 2.5 = **30 km**.\n(iii) 60 ÷ 12 = **5 hours**.", marks: 4, type: "case" }
    ]
  }
});
