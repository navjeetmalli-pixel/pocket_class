// PSEB Class 7 Mathematics practice bank, part 2: Rational Numbers to Visualising Solid Shapes (earlier NCERT book).
StudyData.addPractice(7, "mathspb", {
  "rational-numbers": {
    mcq: [
      { q: "The standard form of 12/−18 is", options: ["12/−18", "−6/9", "−2/3", "2/3"], answer: 2, explain: "Make the denominator positive and cancel the common factor 6: 12/−18 = −12/18 = −2/3. (−6/9 still has a common factor 3.)", level: 1 },
      { q: "The additive identity for rational numbers is", options: ["1", "−1", "0", "does not exist"], answer: 2, explain: "Adding 0 to any rational number leaves it unchanged. The number 1 is the multiplicative identity.", level: 1 },
      { q: "The reciprocal of −3/5 is", options: ["−5/3", "5/3", "3/5", "−3/5"], answer: 0, explain: "Turn the fraction upside down and keep the sign: −5/3. Check: (−3/5) × (−5/3) = 1.", level: 1 },
      { q: "Rational numbers are NOT closed under", options: ["division", "addition", "subtraction", "multiplication"], answer: 0, explain: "Division by 0 is not defined, so dividing two rational numbers need not give a rational number.", level: 1 },
      { q: "Which is the greatest of −1/4, −1/2, −3/4 and 0?", options: ["−1/4", "−1/2", "−3/4", "0"], answer: 3, explain: "Every negative rational number is less than 0.", level: 1 },
      { q: "−3/4 + 5/6 = ?", options: ["−1/12", "19/12", "1/12", "1/2"], answer: 2, explain: "LCM of 4 and 6 is 12: −9/12 + 10/12 = 1/12.", level: 2 },
      { q: "(−2/3) × (9/10) = ?", options: ["−3/5", "3/5", "−11/13", "−18/13"], answer: 0, explain: "Multiply numerators and denominators: −18/30 = −3/5. Rational numbers are not added when multiplied, so −11/13 is wrong.", level: 2 },
      { q: "2/3 − 5/6 = ?", options: ["1/6", "−1/6", "−3/9", "3/2"], answer: 1, explain: "2/3 = 4/6, so 4/6 − 5/6 = −1/6.", level: 2 },
      { q: "Assertion (A): There are infinitely many rational numbers between −1/2 and 1/2.\nReason (R): The average of two rational numbers is a rational number lying between them, and this can be repeated again and again.", options: ["Both A and R are true, and R is the correct explanation of A.", "Both A and R are true, but R is not the correct explanation of A.", "A is true, but R is false.", "A is false, but R is true."], answer: 0, explain: "Taking the average of two numbers gives a new number between them. Repeating this with the new pair never ends, so there are infinitely many.", level: 2, keepOrder: true },
      { q: "The rational number exactly halfway between 1/4 and 1/2 is", options: ["3/4", "1/3", "3/6", "3/8"], answer: 3, explain: "Their average is (1/4 + 1/2) ÷ 2 = (3/4) ÷ 2 = 3/8.", level: 2 },
      { q: "A water tank is 3/4 full. Then 2/5 of the water in it is used.\nWhat fraction of the tank is full now?", options: ["3/10", "9/20", "7/20", "1/2"], answer: 1, explain: "3/5 of the water is left: 3/5 × 3/4 = 9/20 of the tank. (3/10 is the fraction that was used.)", level: 3 },
      { q: "A diver is 7/2 m below the water surface (−7/2 m) and swims up by 5/4 m.\nHer new position is", options: ["−19/4 m", "9/4 m", "−9/4 m", "−3/2 m"], answer: 2, explain: "−7/2 + 5/4 = −14/4 + 5/4 = −9/4 m, still below the surface.", level: 3 },
      { q: "(−3/4) ÷ (9/16) = ?", options: ["−27/64", "−4/3", "4/3", "−3/4"], answer: 1, explain: "Multiply by the reciprocal: −3/4 × 16/9 = −48/36 = −4/3.", level: 3 },
      { q: "What must be added to −2/3 to get 1/2?", options: ["−7/6", "1/6", "−1/6", "7/6"], answer: 3, explain: "The number is 1/2 − (−2/3) = 1/2 + 2/3 = 3/6 + 4/6 = 7/6.", level: 3 }
    ],
    written: [
      { q: "Write 15/−20 in standard form.", a: "Make the denominator positive: −15/20. Divide by 5: **−3/4**.", marks: 1 },
      { q: "Find the multiplicative inverse of −7/9.", a: "The multiplicative inverse (reciprocal) is **−9/7**, since (−7/9) × (−9/7) = 1.", marks: 1 },
      { q: "Which is greater, −5/6 or −7/9?", a: "LCM of 6 and 9 is 18. −5/6 = −15/18 and −7/9 = −14/18.\n−14 > −15, so **−7/9 is greater**.", marks: 2 },
      { q: "Simplify: −5/8 + 3/4 − 1/2.", a: "Write with denominator 8: −5/8 + 6/8 − 4/8.\n= (−5 + 6 − 4)/8 = **−3/8**.", marks: 2 },
      { q: "Find three rational numbers between 1/3 and 1/2.", a: "1/3 = 8/24 and 1/2 = 12/24.\nThree numbers between them are 9/24, 10/24 and 11/24, i.e. **3/8, 5/12 and 11/24**.", marks: 2 },
      { q: "Simplify: (−5/6) × (3/10) ÷ (−1/4).", a: "(−5/6) × (3/10) = −15/60 = −1/4.\n(−1/4) ÷ (−1/4) = (−1/4) × (−4) = **1**.", marks: 3 },
      { q: "Verify a × (b + c) = a × b + a × c for a = 2/3, b = −3/4, c = 1/6.", a: "b + c = −9/12 + 2/12 = −7/12, so LHS = 2/3 × (−7/12) = −14/36 = −7/18.\na × b = −6/12 = −1/2 and a × c = 2/18 = 1/9. RHS = −1/2 + 1/9 = −9/18 + 2/18 = −7/18.\nLHS = RHS = **−7/18**, so the property is verified.", marks: 3 },
      { q: "Case study: Gurpreet has a ribbon 15/2 m long. She uses 3/5 of it for decoration.\n(i) How much ribbon does she use?\n(ii) How much is left?\n(iii) How many pieces of 3/4 m can be cut from the leftover ribbon?", a: "(i) Used = 3/5 × 15/2 = 45/10 = **9/2 m (4.5 m)**.\n(ii) Left = 15/2 − 9/2 = 6/2 = **3 m**.\n(iii) 3 ÷ 3/4 = 3 × 4/3 = **4 pieces**.", marks: 4, type: "case" }
    ]
  },
  "perimeter-and-area": {
    mcq: [
      { q: "The area of a rectangle 12 cm long and 5 cm broad is", options: ["34 cm²", "60 cm²", "17 cm²", "60 cm"], answer: 1, explain: "Area = l × b = 12 × 5 = 60 cm². Area is in square units, so '60 cm' is wrong.", level: 1 },
      { q: "The perimeter of a square of side 7 cm is", options: ["49 cm", "14 cm", "28 cm", "21 cm"], answer: 2, explain: "Perimeter = 4 × side = 28 cm. (49 is the area in cm².)", level: 1 },
      { q: "The area of a triangle is", options: ["½ × base × height", "base × height", "base + height", "2 × base × height"], answer: 0, explain: "A triangle is half of a parallelogram on the same base and height.", level: 1 },
      { q: "The circumference of a circle of radius r is", options: ["πr²", "2πr", "πr", "2r"], answer: 1, explain: "Circumference = 2πr = πd. πr² is the area.", level: 1 },
      { q: "1 m² is equal to", options: ["100 cm²", "1000 cm²", "10,000 cm²", "1,00,000 cm²"], answer: 2, explain: "1 m = 100 cm, so 1 m² = 100 × 100 = 10,000 cm².", level: 1 },
      { q: "A parallelogram has base 15 cm and height 8 cm. Its area is", options: ["60 cm²", "23 cm²", "240 cm²", "120 cm²"], answer: 3, explain: "Area = base × height = 15 × 8 = 120 cm².", level: 2 },
      { q: "The circumference of a circle of radius 7 cm (π = 22/7) is", options: ["22 cm", "44 cm", "154 cm", "88 cm"], answer: 1, explain: "2πr = 2 × 22/7 × 7 = 44 cm. (154 cm² would be the area.)", level: 2 },
      { q: "The area of a circle of diameter 14 cm (π = 22/7) is", options: ["616 cm²", "44 cm²", "154 cm²", "308 cm²"], answer: 2, explain: "Radius = 7 cm, so area = 22/7 × 7 × 7 = 154 cm². Using 14 as the radius gives 616, which is wrong.", level: 2 },
      { q: "Assertion (A): A triangle with base 10 cm and height 6 cm has area 30 cm².\nReason (R): The area of a triangle is half the area of a parallelogram of the same base and height.", options: ["Both A and R are true, and R is the correct explanation of A.", "Both A and R are true, but R is not the correct explanation of A.", "A is true, but R is false.", "A is false, but R is true."], answer: 0, explain: "The parallelogram has area 10 × 6 = 60 cm², and half of it is 30 cm².", level: 2, keepOrder: true },
      { q: "A triangle has an area of 54 cm² and a base of 9 cm. Its height is", options: ["12 cm", "6 cm", "24 cm", "48 cm"], answer: 0, explain: "½ × 9 × h = 54, so h = 108 ÷ 9 = 12 cm.", level: 2 },
      { q: "A park is 40 m long and 30 m broad. A path 2 m wide runs all around it on the outside.\nThe area of the path is", options: ["136 m²", "1496 m²", "296 m²", "300 m²"], answer: 2, explain: "Outer rectangle = 44 × 34 = 1496 m². Park = 40 × 30 = 1200 m². Path = 1496 − 1200 = 296 m².", level: 3 },
      { q: "A wheel has a radius of 35 cm.\nHow many complete turns does it make to cover 220 m (π = 22/7)?", options: ["10", "100", "1000", "50"], answer: 1, explain: "Circumference = 2 × 22/7 × 35 = 220 cm = 2.2 m. Turns = 220 m ÷ 2.2 m = 100.", level: 3 },
      { q: "A rectangle is 16 cm by 8 cm. A square has the same perimeter as this rectangle.\nThe area of the square is", options: ["144 cm²", "128 cm²", "196 cm²", "48 cm²"], answer: 0, explain: "Perimeter = 2(16 + 8) = 48 cm, so the square's side = 12 cm and its area = 144 cm². (128 cm² is the rectangle's area.)", level: 3 },
      { q: "A circular park has a radius of 14 m. Fencing costs ₹ 15 per metre.\nThe cost of fencing the park is (π = 22/7)", options: ["₹ 1320", "₹ 660", "₹ 9240", "₹ 2640"], answer: 0, explain: "Circumference = 2 × 22/7 × 14 = 88 m. Cost = 88 × 15 = ₹ 1320.", level: 3 }
    ],
    written: [
      { q: "Find the area of a square of side 9 m.", a: "Area = side² = 9 × 9 = **81 m²**.", marks: 1 },
      { q: "Convert 5 m² into cm².", a: "1 m² = 10,000 cm², so 5 m² = 5 × 10,000 = **50,000 cm²**.", marks: 1 },
      { q: "Find the perimeter and the area of a rectangle 25 m long and 16 m broad.", a: "Perimeter = 2(25 + 16) = 2 × 41 = **82 m**.\nArea = 25 × 16 = **400 m²**.", marks: 2 },
      { q: "Find the circumference and the area of a circle of radius 14 cm. (π = 22/7)", a: "Circumference = 2πr = 2 × 22/7 × 14 = **88 cm**.\nArea = πr² = 22/7 × 14 × 14 = **616 cm²**.", marks: 2 },
      { q: "The area of a parallelogram is 360 cm² and its height is 12 cm. Find its base.", a: "Area = base × height, so 360 = base × 12.\nBase = 360 ÷ 12 = **30 cm**.", marks: 2 },
      { q: "A rectangular park is 60 m long and 40 m broad. A path 3 m wide runs all around inside it. Find the area of the path.", a: "Area of the park = 60 × 40 = 2400 m².\nThe inner rectangle is (60 − 6) by (40 − 6) = 54 m by 34 m, with area 1836 m².\nArea of the path = 2400 − 1836 = **564 m²**.", marks: 3 },
      { q: "A circular table top has a diameter of 1.4 m. Find its area and the cost of polishing it at ₹ 20 per m². (π = 22/7)", a: "Radius = 0.7 m.\nArea = 22/7 × 0.7 × 0.7 = **1.54 m²**.\nCost = 1.54 × 20 = **₹ 30.80**.", marks: 3 },
      { q: "Case study: A farmer has a rectangular field 90 m long and 60 m broad.\n(i) Find the area of the field.\n(ii) Express this area in hectares (1 hectare = 10,000 m²).\n(iii) He puts a wire fence around the field with 3 rounds of wire. Find the length of wire needed.", a: "(i) Area = 90 × 60 = **5400 m²**.\n(ii) 5400 ÷ 10,000 = **0.54 hectare**.\n(iii) Perimeter = 2(90 + 60) = 300 m. For 3 rounds: 3 × 300 = **900 m** of wire.", marks: 4, type: "case" }
    ]
  },
  "algebraic-expressions": {
    mcq: [
      { q: "The coefficient of x in 7x² − 4x + 2 is", options: ["7", "−4", "4", "2"], answer: 1, explain: "The number multiplying x is −4, with its sign.", level: 1 },
      { q: "Which of these is a binomial?", options: ["x² + x + 1", "5xy", "a + b", "3"], answer: 2, explain: "A binomial has exactly two terms; a + b has two terms.", level: 1 },
      { q: "Which term is a like term of 3xy?", options: ["3x", "3xy²", "3y", "5yx"], answer: 3, explain: "Like terms have the same variables with the same powers. 5yx is the same as 5xy.", level: 1 },
      { q: "The value of 2x + 3 when x = 4 is", options: ["9", "11", "14", "24"], answer: 1, explain: "2 × 4 + 3 = 8 + 3 = 11.", level: 1 },
      { q: "The number of terms in 4x² − 3x + 7 is", options: ["1", "2", "3", "4"], answer: 2, explain: "The terms are 4x², −3x and 7, so there are 3 terms (a trinomial).", level: 1 },
      { q: "The sum of 3a + 2b and 5a − 4b is", options: ["8a + 6b", "2a − 2b", "8ab", "8a − 2b"], answer: 3, explain: "Add like terms: (3a + 5a) + (2b − 4b) = 8a − 2b.", level: 2 },
      { q: "Subtracting 2x − 3 from 5x + 4 gives", options: ["3x + 1", "3x + 7", "7x + 1", "7x + 7"], answer: 1, explain: "(5x + 4) − (2x − 3) = 5x + 4 − 2x + 3 = 3x + 7.", level: 2 },
      { q: "The value of x² − 2x + 1 at x = −3 is", options: ["4", "−14", "16", "10"], answer: 2, explain: "(−3)² − 2(−3) + 1 = 9 + 6 + 1 = 16.", level: 2 },
      { q: "Assertion (A): 4x and 4x² are not like terms.\nReason (R): Like terms have the same variable raised to the same power.", options: ["Both A and R are true, and R is the correct explanation of A.", "Both A and R are true, but R is not the correct explanation of A.", "A is true, but R is false.", "A is false, but R is true."], answer: 0, explain: "x and x² are different powers of the variable, so by the definition of like terms in R, 4x and 4x² are unlike.", level: 2, keepOrder: true },
      { q: "3x² + 5x − x² + 2x simplifies to", options: ["4x² + 7x", "2x² + 7x", "2x² + 3x", "9x³"], answer: 1, explain: "Collect like terms: (3x² − x²) + (5x + 2x) = 2x² + 7x.", level: 2 },
      { q: "A row of squares is made with matchsticks. The number of sticks for n squares is 3n + 1.\nHow many sticks are needed for 12 squares?", options: ["36", "39", "37", "13"], answer: 2, explain: "3 × 12 + 1 = 37 sticks.", level: 3 },
      { q: "Ravi buys 3 notebooks at ₹ x each and 2 pens at ₹ y each and pays with a ₹ 100 note.\nHis change is", options: ["₹ (100 − 5xy)", "₹ (100 − 3x − 2y)", "₹ (100 + 3x + 2y)", "₹ (3x + 2y − 100)"], answer: 1, explain: "Cost = 3x + 2y, so the change = 100 − (3x + 2y).", level: 3 },
      { q: "A triangle has sides (2a + b), (3a − 2b) and (a + 4b).\nIts perimeter is", options: ["6a + 7b", "6a − b", "6a + 3b", "5a + 3b"], answer: 2, explain: "Add: (2a + 3a + a) + (b − 2b + 4b) = 6a + 3b.", level: 3 },
      { q: "If a = 2 and b = −1, the value of 3a² − 2ab + b² is", options: ["13", "9", "7", "17"], answer: 3, explain: "3(4) − 2(2)(−1) + 1 = 12 + 4 + 1 = 17.", level: 3 }
    ],
    written: [
      { q: "What kind of expression is 5x² − 3x + 2 (monomial, binomial or trinomial)?", a: "It has three terms, so it is a **trinomial**.", marks: 1 },
      { q: "Write as an algebraic expression: 5 less than three times y.", a: "Three times y is 3y; 5 less than that is **3y − 5**.", marks: 1 },
      { q: "Add 4p² − 3p + 2 and p² + 5p − 7.", a: "(4p² + p²) + (−3p + 5p) + (2 − 7) = **5p² + 2p − 5**.", marks: 2 },
      { q: "Subtract 3x − 2y + 5 from 7x + y − 1.", a: "(7x + y − 1) − (3x − 2y + 5) = 7x + y − 1 − 3x + 2y − 5\n= **4x + 3y − 6**.", marks: 2 },
      { q: "Find the value of 2x² − 3x + 1 for x = 2.", a: "2(2)² − 3(2) + 1 = 8 − 6 + 1 = **3**.", marks: 2 },
      { q: "Simplify 5(2a − 3b) − 3(a − 4b) and find its value for a = 2, b = 3.", a: "5(2a − 3b) − 3(a − 4b) = 10a − 15b − 3a + 12b = **7a − 3b**.\nFor a = 2 and b = 3: 7(2) − 3(3) = 14 − 9 = **5**.", marks: 3 },
      { q: "Matchsticks are used to make a row of n triangles. The number of sticks is 2n + 1.\nHow many sticks are needed for 15 triangles? How many triangles can be made with 41 sticks?", a: "For 15 triangles: 2 × 15 + 1 = **31 sticks**.\nFor 41 sticks: 2n + 1 = 41, so 2n = 40 and n = **20 triangles**.", marks: 3 },
      { q: "Case study: At a school fair a stall sells samosas at ₹ x each and cups of tea at ₹ y each. On day 1 it sold 20 samosas and 15 cups of tea. On day 2 it sold 30 samosas and 10 cups of tea.\n(i) Write the day-1 sales as an expression.\n(ii) Write the total sales for both days as one simplified expression.\n(iii) Find the total if x = 10 and y = 5.", a: "(i) Day 1 = **20x + 15y**.\n(ii) Total = (20x + 15y) + (30x + 10y) = **50x + 25y**.\n(iii) 50(10) + 25(5) = 500 + 125 = **₹ 625**.", marks: 4, type: "case" }
    ]
  },
  "exponents-and-powers": {
    mcq: [
      { q: "The value of 2⁵ is", options: ["10", "25", "32", "64"], answer: 2, explain: "2 × 2 × 2 × 2 × 2 = 32. (10 is 2 × 5, which is not the same thing.)", level: 1 },
      { q: "For any non-zero number a, a⁰ equals", options: ["0", "a", "not defined", "1"], answer: 3, explain: "a⁰ = 1 for every a ≠ 0.", level: 1 },
      { q: "(−2)³ = ?", options: ["8", "−8", "−6", "6"], answer: 1, explain: "(−2) × (−2) × (−2) = −8. An odd exponent keeps the negative sign.", level: 1 },
      { q: "3² × 3⁴ is equal to", options: ["3⁶", "3⁸", "9⁶", "9⁸"], answer: 0, explain: "With the same base, add the exponents: 3²⁺⁴ = 3⁶. The base stays 3.", level: 1 },
      { q: "10⁵ is equal to", options: ["1000", "10,000", "1,00,000", "10,00,000"], answer: 2, explain: "10⁵ is 1 followed by five zeroes, which is 1,00,000 (one lakh).", level: 1 },
      { q: "(5²)³ = ?", options: ["5⁵", "5⁶", "5⁸", "5¹"], answer: 1, explain: "Power of a power: multiply the exponents, 2 × 3 = 6, so 5⁶.", level: 2 },
      { q: "7⁸ ÷ 7⁵ = ?", options: ["7¹³", "49", "3", "343"], answer: 3, explain: "Subtract the exponents: 7³ = 343.", level: 2 },
      { q: "2³ × 5³ equals", options: ["100", "1000", "10⁶", "7³"], answer: 1, explain: "Same exponent: 2³ × 5³ = (2 × 5)³ = 10³ = 1000.", level: 2 },
      { q: "Assertion (A): (−3)⁴ = 81.\nReason (R): A negative number raised to an even power gives a positive value.", options: ["Both A and R are true, and R is the correct explanation of A.", "Both A and R are true, but R is not the correct explanation of A.", "A is true, but R is false.", "A is false, but R is true."], answer: 0, explain: "(−3)⁴ = (−3)(−3)(−3)(−3) = 81, positive because there is an even number of negative factors.", level: 2, keepOrder: true },
      { q: "47,000 in standard form is", options: ["47 × 10³", "0.47 × 10⁵", "4.7 × 10⁴", "4.7 × 10³"], answer: 2, explain: "Standard form needs a number between 1 and 10: 47,000 = 4.7 × 10⁴.", level: 2 },
      { q: "The distance from the Earth to the Sun is about 1.5 × 10⁸ km.\nIn ordinary form this is", options: ["1,50,00,000 km", "15,00,00,000 km", "1,50,00,00,000 km", "15,00,000 km"], answer: 1, explain: "1.5 × 10⁸ = 15 × 10⁷ = 15,00,00,000 km (15 crore km).", level: 3 },
      { q: "A bacterium divides into two every hour, so after n hours there are 2ⁿ bacteria, starting from 1.\nHow many are there after 10 hours?", options: ["1024", "20", "512", "100"], answer: 0, explain: "2¹⁰ = 1024. It is not 2 × 10 = 20; the exponent means repeated multiplication.", level: 3 },
      { q: "(2³ × 2⁵) ÷ 2⁴ equals", options: ["64", "16", "4", "256"], answer: 1, explain: "2³ × 2⁵ = 2⁸ and 2⁸ ÷ 2⁴ = 2⁴ = 16.", level: 3 },
      { q: "(2⁴ × 3⁴) ÷ 6³ equals", options: ["36", "12", "6", "1"], answer: 2, explain: "2⁴ × 3⁴ = 6⁴, and 6⁴ ÷ 6³ = 6.", level: 3 }
    ],
    written: [
      { q: "Find the value of 3⁴.", a: "3⁴ = 3 × 3 × 3 × 3 = **81**.", marks: 1 },
      { q: "Write 5.8 × 10⁵ in the usual form.", a: "5.8 × 10⁵ = 5.8 × 1,00,000 = **5,80,000**.", marks: 1 },
      { q: "Simplify: 2⁷ ÷ 2⁴ × 2².", a: "2⁷ ÷ 2⁴ = 2³.\n2³ × 2² = 2⁵ = **32**.", marks: 2 },
      { q: "Write 59,00,000 in standard form.", a: "59,00,000 = 5.9 × 10,00,000 = **5.9 × 10⁶**.", marks: 2 },
      { q: "Using the laws of exponents, find 4³ × 25³.", a: "Same exponent: 4³ × 25³ = (4 × 25)³ = 100³.\n100³ = 10⁶ = **10,00,000**.", marks: 2 },
      { q: "Write 83,507 in expanded form using powers of 10, and then in standard form.", a: "Expanded form: 8 × 10⁴ + 3 × 10³ + 5 × 10² + 0 × 10 + 7.\nStandard form: **8.3507 × 10⁴**.", marks: 3 },
      { q: "Find the value of x in each: (i) (2³)ˣ = 2¹²  (ii) 7ˣ ÷ 7² = 7⁵  (iii) 3ˣ × 3⁴ = 3⁹.", a: "(i) 2³ˣ = 2¹², so 3x = 12 and x = **4**.\n(ii) 7ˣ⁻² = 7⁵, so x − 2 = 5 and x = **7**.\n(iii) 3ˣ⁺⁴ = 3⁹, so x + 4 = 9 and x = **5**.", marks: 3 },
      { q: "Case study: Light travels at about 3 × 10⁸ m/s. The Sun is about 1.5 × 10¹¹ m from the Earth.\n(i) Write the speed of light in ordinary form.\n(ii) Find the time light takes to reach the Earth from the Sun, in seconds.\n(iii) Express this time in minutes and seconds.", a: "(i) 3 × 10⁸ = **30,00,00,000 m/s**.\n(ii) Time = distance ÷ speed = (1.5 × 10¹¹) ÷ (3 × 10⁸) = 0.5 × 10³ = **500 seconds**.\n(iii) 500 s = 8 × 60 + 20, so **8 minutes 20 seconds**.", marks: 4, type: "case" }
    ]
  },
  symmetry: {
    mcq: [
      { q: "An equilateral triangle has how many lines of symmetry?", options: ["1", "2", "3", "6"], answer: 2, explain: "One line through each vertex and the midpoint of the opposite side: 3 lines.", level: 1 },
      { q: "A square has how many lines of symmetry?", options: ["2", "4", "8", "1"], answer: 1, explain: "Two diagonals and two lines joining midpoints of opposite sides: 4 lines.", level: 1 },
      { q: "How many lines of symmetry does a circle have?", options: ["none", "one", "four", "infinitely many"], answer: 3, explain: "Every diameter is a line of symmetry, and there are infinitely many diameters.", level: 1 },
      { q: "The angle of rotation of a square is", options: ["45°", "60°", "90°", "180°"], answer: 2, explain: "A square has order 4, so the angle is 360° ÷ 4 = 90°.", level: 1 },
      { q: "Which letter has a line of symmetry?", options: ["A", "F", "G", "R"], answer: 0, explain: "A vertical line through the middle of A divides it into two mirror halves. F, G and R have none.", level: 1 },
      { q: "The smallest angle of rotation of a regular hexagon is", options: ["30°", "60°", "90°", "120°"], answer: 1, explain: "A regular hexagon has order 6, so 360° ÷ 6 = 60°.", level: 2 },
      { q: "A parallelogram (which is not a rectangle or a rhombus) has", options: ["2 lines of symmetry and order 2", "4 lines of symmetry", "no line of symmetry but rotational symmetry of order 2", "1 line of symmetry and order 2"], answer: 2, explain: "Folding a parallelogram never matches its halves, but a half-turn about the centre makes it fit on itself.", level: 2 },
      { q: "The Ashoka Chakra has 24 equal spokes. Its smallest angle of rotation is", options: ["24°", "30°", "15°", "12°"], answer: 2, explain: "Order of rotation is 24, so the angle is 360° ÷ 24 = 15°.", level: 2 },
      { q: "Assertion (A): The letter S has rotational symmetry of order 2 but no line of symmetry.\nReason (R): S looks the same after a half-turn but its two halves can not be matched by folding.", options: ["Both A and R are true, and R is the correct explanation of A.", "Both A and R are true, but R is not the correct explanation of A.", "A is true, but R is false.", "A is false, but R is true."], answer: 0, explain: "A half-turn (180°) maps S onto itself, giving order 2, while no fold line makes the two parts coincide. R states exactly these two facts.", level: 2, keepOrder: true },
      { q: "An isosceles triangle that is not equilateral has", options: ["3 lines of symmetry", "1 line of symmetry and no rotational symmetry", "2 lines of symmetry", "no line of symmetry"], answer: 1, explain: "Only the line through the apex and the midpoint of the unequal side works. It cannot fit on itself after a turn smaller than 360°.", level: 2 },
      { q: "Which of these figures has BOTH line symmetry and rotational symmetry of order more than 1?", options: ["parallelogram", "kite", "isosceles triangle", "rectangle"], answer: 3, explain: "A rectangle has 2 lines of symmetry and order 2. A parallelogram has only rotation; a kite and an isosceles triangle have only lines.", level: 3 },
      { q: "A wheel logo has 8 identical petals evenly spaced around the centre.\nThe smallest turn that makes it look the same is", options: ["8°", "45°", "90°", "180°"], answer: 1, explain: "Order is 8, so the angle is 360° ÷ 8 = 45°.", level: 3 },
      { q: "A paper windmill looks exactly the same after every turn of 40° about its centre.\nIts order of rotational symmetry is", options: ["4", "6", "9", "40"], answer: 2, explain: "Order = 360° ÷ 40° = 9.", level: 3 },
      { q: "How many of the letters H, N, T, X, Z have rotational symmetry of order 2 or more?", options: ["2", "3", "4", "5"], answer: 2, explain: "H, N, X and Z look the same after a half-turn. T does not.", level: 3 }
    ],
    written: [
      { q: "How many lines of symmetry does a regular pentagon have?", a: "A regular polygon has as many lines of symmetry as sides, so a regular pentagon has **5**.", marks: 1 },
      { q: "What is the order of rotational symmetry of an equilateral triangle?", a: "The order is **3**; it fits on itself 3 times in a full turn (angle of rotation 120°).", marks: 1 },
      { q: "Find the number of lines of symmetry, the order and the angle of rotation of a rectangle (not a square).", a: "Lines of symmetry: **2**.\nOrder of rotational symmetry: **2**.\nAngle of rotation = 360° ÷ 2 = **180°**.", marks: 2 },
      { q: "Give one English capital letter for each: (i) line symmetry only (ii) rotational symmetry only (iii) both kinds.", a: "(i) A (or T, M).\n(ii) S (or N, Z).\n(iii) H (or I, O, X).", marks: 2 },
      { q: "Does a parallelogram have line symmetry? Does it have rotational symmetry? Explain.", a: "No line symmetry: folding along either diagonal or any other line does not make the halves match.\nIt has rotational symmetry of order 2: a half-turn (180°) about the point where the diagonals meet makes it fit on itself.", marks: 2 },
      { q: "Write the number of lines of symmetry, the order of rotational symmetry and the angle of rotation for (i) a square (ii) an equilateral triangle (iii) a rhombus.", a: "(i) Square: 4 lines, order 4, angle 90°.\n(ii) Equilateral triangle: 3 lines, order 3, angle 120°.\n(iii) Rhombus: 2 lines, order 2, angle 180°.", marks: 3 },
      { q: "A figure has rotational symmetry of order 6. Find its angle of rotation. Does a regular hexagon match this?", a: "Angle of rotation = 360° ÷ 6 = **60°**.\nA regular hexagon has 6 equal sides, so its order is 6 and its smallest turn is 60°.\nYes, it matches. It also has 6 lines of symmetry.", marks: 3 },
      { q: "Case study: Two rangoli designs are drawn. Design A is a flower with 4 equal petals placed evenly around the centre. Design B is a pinwheel with 3 identical curved arms around the centre.\n(i) Find the order of rotational symmetry and angle of rotation of A.\n(ii) Find the order and angle of rotation of B.\n(iii) Which design can be folded in two matching halves? Give a reason.", a: "(i) Order **4**, angle 360° ÷ 4 = **90°**.\n(ii) Order **3**, angle 360° ÷ 3 = **120°**.\n(iii) Design **A** has lines of symmetry (through opposite petals), so it can be folded into matching halves. The curved arms of B all twist the same way, so a fold would not match: B has no line symmetry.", marks: 4, type: "case" }
    ]
  },
  "visualising-solid-shapes": {
    mcq: [
      { q: "How many faces does a cube have?", options: ["4", "6", "8", "12"], answer: 1, explain: "A cube has 6 square faces.", level: 1 },
      { q: "How many edges does a cube have?", options: ["6", "8", "12", "16"], answer: 2, explain: "4 on the top, 4 on the bottom and 4 vertical ones: 12 edges.", level: 1 },
      { q: "Which of these solids is NOT a polyhedron?", options: ["cone", "prism", "pyramid", "cuboid"], answer: 0, explain: "A cone has a curved surface. A polyhedron has only flat faces and straight edges.", level: 1 },
      { q: "A square pyramid has how many vertices?", options: ["4", "5", "8", "6"], answer: 1, explain: "4 corners of the square base and 1 apex give 5 vertices.", level: 1 },
      { q: "The net of a cylinder is made of", options: ["3 circles", "2 rectangles and 1 circle", "1 circle and 1 rectangle", "2 circles and 1 rectangle"], answer: 3, explain: "The two circles are the top and bottom, and the rectangle wraps around as the curved surface.", level: 1 },
      { q: "A triangular prism has how many edges?", options: ["6", "9", "5", "12"], answer: 1, explain: "3 edges on each triangular end and 3 joining them: 9 edges.", level: 2 },
      { q: "A polyhedron has 8 faces and 12 vertices. By Euler's formula it has how many edges?", options: ["16", "20", "18", "22"], answer: 2, explain: "F + V − E = 2, so E = 8 + 12 − 2 = 18.", level: 2 },
      { q: "A cone standing on its base is seen from directly above. It looks like a", options: ["square", "triangle", "rectangle", "circle"], answer: 3, explain: "From the top we see the circular base (with the apex at its centre).", level: 2 },
      { q: "Assertion (A): A sphere is not a polyhedron.\nReason (R): A sphere has no flat faces and no straight edges.", options: ["Both A and R are true, and R is the correct explanation of A.", "Both A and R are true, but R is not the correct explanation of A.", "A is true, but R is false.", "A is false, but R is true."], answer: 0, explain: "A polyhedron is made only of flat faces and straight edges. A sphere has neither, so it is not one.", level: 2, keepOrder: true },
      { q: "A horizontal slice (parallel to the base) of a cone gives a", options: ["circle", "triangle", "rectangle", "semicircle"], answer: 0, explain: "Slicing parallel to the circular base gives a smaller circle.", level: 2 },
      { q: "A net has 2 triangles and 3 rectangles. When folded it makes a solid with how many vertices?", options: ["3", "5", "9", "6"], answer: 3, explain: "This is a triangular prism, with 3 vertices on each triangular end: 6 vertices.", level: 3 },
      { q: "A solid has 6 faces and 8 vertices.\nHow many edges does it have, using Euler's formula?", options: ["10", "12", "14", "16"], answer: 1, explain: "6 + 8 − E = 2, so E = 12 (a cube or cuboid).", level: 3 },
      { q: "A polyhedron has 7 vertices and 12 edges.\nHow many faces does it have?", options: ["7", "6", "8", "9"], answer: 0, explain: "F = 2 + E − V = 2 + 12 − 7 = 7.", level: 3 },
      { q: "A solid looks like a rectangle from the front and like a circle from the top.\nThe solid is a", options: ["cone", "sphere", "cube", "cylinder"], answer: 3, explain: "An upright cylinder gives a rectangle from the front and a circle from above. A cone's front view is a triangle, and a sphere is a circle from every side.", level: 3 }
    ],
    written: [
      { q: "Name the solid that has 1 flat face, 1 curved surface and 1 vertex.", a: "It is a **cone**.", marks: 1 },
      { q: "How many faces and how many vertices does a cuboid have?", a: "A cuboid has **6 faces** and **8 vertices** (and 12 edges).", marks: 1 },
      { q: "Verify Euler's formula for a triangular prism.", a: "A triangular prism has F = 5, V = 6 and E = 9.\nF + V − E = 5 + 6 − 9 = **2**, so Euler's formula holds.", marks: 2 },
      { q: "Name the faces that make the net of a square pyramid. Which solid is made by folding a net of 6 squares?", a: "The net of a square pyramid has **1 square and 4 triangles**.\nA net of 6 equal squares folds into a **cube**.", marks: 2 },
      { q: "Describe the front view and the top view of a cylinder standing on its circular base.", a: "Front view: a **rectangle**.\nTop view: a **circle**.", marks: 2 },
      { q: "A polyhedron has 9 faces and 14 edges. Find its number of vertices. Can Euler's formula be used for a cylinder? Give a reason.", a: "F + V − E = 2, so V = 2 + E − F = 2 + 14 − 9 = **7**.\nNo. Euler's formula is only for polyhedra, and a cylinder has curved surfaces, so it is not a polyhedron.", marks: 3 },
      { q: "Write three differences between a prism and a pyramid, with one example of each.", a: "1. A prism has two identical parallel bases; a pyramid has only one base.\n2. The side faces of a prism are rectangles; those of a pyramid are triangles.\n3. In a prism the side faces do not meet at a point; in a pyramid they meet at the apex.\nExample: triangular prism (prism), square pyramid (pyramid).", marks: 3 },
      { q: "Case study: Arjun makes a gift box shaped like a triangular prism by folding a flat cardboard net.\n(i) What shapes make up the net?\n(ii) State the number of faces, edges and vertices of the box.\n(iii) He cuts the box vertically, parallel to the triangular ends. What shape does the cut surface have?", a: "(i) The net has **2 triangles and 3 rectangles**.\n(ii) **5 faces, 9 edges and 6 vertices** (check: 5 + 6 − 9 = 2).\n(iii) A cut parallel to the triangular ends gives a **triangle** of the same size.", marks: 4, type: "case" }
    ]
  }
});
