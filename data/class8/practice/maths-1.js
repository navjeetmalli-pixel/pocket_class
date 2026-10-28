// Class 8 Mathematics practice bank, part 1: A Square and A Cube to Proportional Reasoning-1 (Ganita Prakash Part I).
StudyData.addPractice(8, "maths", {
  "a-square-and-a-cube": {
    mcq: [
      { q: "Which of these numbers is a perfect square?", options: ["150", "169", "200", "250"], answer: 1, explain: "169 = 13 × 13. The others lie between consecutive squares (121 and 144, 196 and 225, 225 and 256).", level: 1 },
      { q: "What is the value of 5³?", options: ["15", "25", "75", "125"], answer: 3, explain: "5³ = 5 × 5 × 5 = 125. (15 comes from 5 × 3 and 25 from 5².)", level: 1 },
      { q: "What is the sum of the first 6 odd numbers?", options: ["12", "21", "36", "66"], answer: 2, explain: "The sum of the first n odd numbers is n², so for n = 6 it is 36. Check: 1 + 3 + 5 + 7 + 9 + 11 = 36.", level: 1 },
      { q: "What is the cube root of 343?", options: ["7", "9", "11", "49"], answer: 0, explain: "7 × 7 × 7 = 343, so ∛343 = 7. (49 is 7².)", level: 1 },
      { q: "What is the value of (−3)³?", options: ["27", "9", "−9", "−27"], answer: 3, explain: "(−3)³ = (−3) × (−3) × (−3) = 9 × (−3) = −27. The cube of a negative number is negative.", level: 1 },
      { q: "Which of these cannot be a perfect square?", options: ["1444", "5329", "7288", "9801"], answer: 2, explain: "7288 ends in 8, and a perfect square ends only in 0, 1, 4, 5, 6 or 9. The others are 38², 73² and 99².", level: 2 },
      { q: "What is 25² − 24²?", options: ["1", "49", "48", "625"], answer: 1, explain: "(n + 1)² − n² = 2n + 1, so with n = 24 it is 49. Check: 625 − 576 = 49.", level: 2 },
      { q: "What is the smallest number by which 108 should be multiplied to get a perfect square?", options: ["2", "6", "9", "3"], answer: 3, explain: "108 = 2² × 3³. The prime 3 occurs three times, so one more 3 makes a pair: 108 × 3 = 324 = 18².", level: 2 },
      { q: "How many natural numbers lie between 10² and 11²?", options: ["10", "19", "20", "21"], answer: 2, explain: "Between n² and (n + 1)² there are 2n numbers. With n = 10 there are 20 (they are 101 to 120).", level: 2 },
      { q: "Assertion (A): 10, 24 and 26 form a Pythagorean triplet.\nReason (R): For any m > 1, the numbers 2m, m² − 1 and m² + 1 form a Pythagorean triplet.", options: ["Both A and R are true, and R is the correct explanation of A.", "Both A and R are true, but R is not the correct explanation of A.", "A is true, but R is false.", "A is false, but R is true."], answer: 0, explain: "Put m = 5: 2m = 10, m² − 1 = 24, m² + 1 = 26, and 10² + 24² = 100 + 576 = 676 = 26². So A follows from R.", level: 2, keepOrder: true },
      { q: "A teacher has 1,500 marbles and wants to arrange them in a perfect square.\nHow many more marbles does she need?", options: ["56", "21", "39", "77"], answer: 1, explain: "38² = 1444 and 39² = 1521, so 1,500 lies between them. She needs 1521 − 1500 = 21 more.", level: 3 },
      { q: "A cubical box has edge 6 cm. How many small cubes of edge 2 cm fit exactly inside it?", options: ["3", "9", "81", "27"], answer: 3, explain: "Along each edge 6 ÷ 2 = 3 cubes fit, so 3 × 3 × 3 = 27 cubes. (Volume 216 ÷ 8 = 27.)", level: 3 },
      { q: "What is the smallest number by which 1500 should be divided to get a perfect cube?", options: ["12", "4", "6", "15"], answer: 0, explain: "1500 = 2² × 3 × 5³. Removing 2² × 3 = 12 leaves 5³ = 125, a perfect cube. Dividing by 4, 6 or 15 leaves a prime that is not in a triple.", level: 3 },
      { q: "What is the smallest number by which 392 should be multiplied to get a perfect square?", options: ["7", "14", "2", "4"], answer: 2, explain: "392 = 2³ × 7². The 7s already pair up, but 2 occurs three times, so one more 2 is needed: 392 × 2 = 784 = 28².", level: 3 }
    ],
    written: [
      { q: "Without calculating, say whether 4,573 can be a perfect square. Give a reason.", a: "No. 4,573 ends in 3, and a perfect square ends only in 0, 1, 4, 5, 6 or 9.", marks: 1 },
      { q: "Find the value of (−2)³ + 3².", a: "(−2)³ = −8 and 3² = 9.\nSum = −8 + 9 = 1.", marks: 1 },
      { q: "Find √1764 by prime factorisation.", a: "1764 = 2 × 2 × 3 × 3 × 7 × 7.\nTaking one prime from each pair: 2 × 3 × 7 = 42.\n√1764 = 42.", marks: 2 },
      { q: "Find the smallest number by which 675 should be divided to get a perfect cube.", a: "675 = 3 × 3 × 3 × 5 × 5 = 3³ × 5².\nThe 5s occur only twice, so divide by 5 × 5 = 25.\n675 ÷ 25 = 27 = 3³.", marks: 2 },
      { q: "Express 64 as a sum of consecutive odd numbers starting from 1.", a: "64 = 8², and the sum of the first 8 odd numbers is 8².\nSo 64 = 1 + 3 + 5 + 7 + 9 + 11 + 13 + 15.", marks: 2 },
      { q: "Find the Pythagorean triplet whose smallest number comes from m = 6, using (2m, m² − 1, m² + 1). Verify it.", a: "2m = 12, m² − 1 = 35, m² + 1 = 37.\nCheck: 12² + 35² = 144 + 1225 = 1369 = 37².\nThe triplet is 12, 35, 37.", marks: 3 },
      { q: "Find the smallest number by which 1470 must be multiplied so that the product is a perfect square. Also find the square root of the product.", a: "1470 = 2 × 3 × 5 × 7 × 7.\nThe primes 2, 3 and 5 are unpaired, so multiply by 2 × 3 × 5 = 30.\nProduct = 44,100 = 2² × 3² × 5² × 7².\nSquare root = 2 × 3 × 5 × 7 = 210.", marks: 3 },
      { q: "Case study: A school lays square tiles on a square courtyard of area 1156 m². Each tile is a square of side 2 m.\n(i) Find the side of the courtyard.\n(ii) How many tiles fit along one side?\n(iii) How many tiles are needed in all?", a: "(i) 1156 = 2 × 2 × 17 × 17, so the side = 2 × 17 = 34 m.\n(ii) 34 ÷ 2 = 17 tiles.\n(iii) 17 × 17 = 289 tiles. (Check: 289 × 4 = 1156 m².)", marks: 4, type: "case" }
    ]
  },
  "power-play": {
    mcq: [
      { q: "What is the value of 3⁴?", options: ["12", "64", "81", "243"], answer: 2, explain: "3⁴ = 3 × 3 × 3 × 3 = 81. (12 is 3 × 4.)", level: 1 },
      { q: "What is the value of 5⁰?", options: ["0", "1", "5", "50"], answer: 1, explain: "Any non-zero number raised to the power 0 is 1.", level: 1 },
      { q: "2⁻⁴ is equal to", options: ["−16", "−8", "1/8", "1/16"], answer: 3, explain: "2⁻⁴ = 1/2⁴ = 1/16. A negative exponent gives a reciprocal, not a negative number.", level: 1 },
      { q: "7⁶ ÷ 7² equals", options: ["7⁴", "7³", "7⁸", "1⁴"], answer: 0, explain: "Same base, so subtract the exponents: 6 − 2 = 4.", level: 1 },
      { q: "7,20,000 in standard form is", options: ["72 × 10⁴", "7.2 × 10⁶", "0.72 × 10⁶", "7.2 × 10⁵"], answer: 3, explain: "7,20,000 = 7.2 × 1,00,000 = 7.2 × 10⁵. Standard form needs the first factor between 1 and 10.", level: 1 },
      { q: "What is the value of (2/3)⁻³?", options: ["27/8", "8/27", "9/8", "−8/27"], answer: 0, explain: "(2/3)⁻³ = (3/2)³ = 27/8.", level: 2 },
      { q: "What is the value of (2⁵ × 2⁻²) ÷ 2⁻¹?", options: ["4", "8", "16", "32"], answer: 2, explain: "2⁵ × 2⁻² = 2³, and 2³ ÷ 2⁻¹ = 2³⁻⁽⁻¹⁾ = 2⁴ = 16.", level: 2 },
      { q: "0.00045 in standard form is", options: ["4.5 × 10⁻⁴", "4.5 × 10⁻³", "4.5 × 10⁴", "4.5 × 10⁻⁵"], answer: 0, explain: "Moving the decimal point 4 places to the right gives 4.5, so the power is −4.", level: 2 },
      { q: "Assertion (A): (−2)⁻³ = 1/8.\nReason (R): A negative exponent means taking the reciprocal of the power.", options: ["Both A and R are true, and R is the correct explanation of A.", "Both A and R are true, but R is not the correct explanation of A.", "A is true, but R is false.", "A is false, but R is true."], answer: 3, explain: "R is true. But (−2)⁻³ = 1/(−2)³ = 1/(−8) = −1/8, so A is false.", level: 2, keepOrder: true },
      { q: "If 2ˣ = 1/32, what is x?", options: ["5", "−5", "−16", "1/5"], answer: 1, explain: "1/32 = 1/2⁵ = 2⁻⁵, so x = −5.", level: 2 },
      { q: "A bacterium is 2 × 10⁻⁶ m long.\nHow many such bacteria placed end to end make 1 cm (10⁻² m)?", options: ["500", "5,000", "50,000", "20,000"], answer: 1, explain: "10⁻² ÷ (2 × 10⁻⁶) = 0.5 × 10⁴ = 5,000.", level: 3 },
      { q: "A computer chip does 4 × 10⁹ operations every second.\nHow many operations does it do in 5 × 10² seconds?", options: ["9 × 10¹¹", "2 × 10¹¹", "2 × 10²⁰", "2 × 10¹²"], answer: 3, explain: "(4 × 5) × 10⁹⁺² = 20 × 10¹¹ = 2 × 10¹². Coefficients are multiplied, not added.", level: 3 },
      { q: "What is the value of 3⁻¹ + 3⁻¹?", options: ["1/9", "−2/3", "2/3", "6"], answer: 2, explain: "3⁻¹ = 1/3, so 1/3 + 1/3 = 2/3. (1/9 would be 3⁻¹ × 3⁻¹.)", level: 3 },
      { q: "What is the value of (2/5)⁻² × (5/2)⁻³?", options: ["2/5", "5/2", "4/25", "8/125"], answer: 0, explain: "(2/5)⁻² = (5/2)² = 25/4 and (5/2)⁻³ = (2/5)³ = 8/125. The product is 200/500 = 2/5.", level: 3 }
    ],
    written: [
      { q: "Write 4⁻² as a fraction.", a: "4⁻² = 1/4² = 1/16.", marks: 1 },
      { q: "Write 0.0000072 in standard form.", a: "Move the decimal point 6 places to the right to get 7.2.\nSo 0.0000072 = 7.2 × 10⁻⁶.", marks: 1 },
      { q: "Simplify (5³ × 5⁻⁷) ÷ 5⁻².", a: "5³ × 5⁻⁷ = 5³⁻⁷ = 5⁻⁴.\n5⁻⁴ ÷ 5⁻² = 5⁻⁴⁻⁽⁻²⁾ = 5⁻² = 1/25.", marks: 2 },
      { q: "Write 6,02,00,000 in standard form.", a: "6,02,00,000 = 60,200,000 has 8 digits.\nMoving the decimal point 7 places left gives 6.02.\nSo it is 6.02 × 10⁷.", marks: 2 },
      { q: "Which is larger, 3 × 10⁻⁴ or 2 × 10⁻³? Explain.", a: "2 × 10⁻³ = 20 × 10⁻⁴.\nSince 20 × 10⁻⁴ > 3 × 10⁻⁴, the number 2 × 10⁻³ is larger.", marks: 2 },
      { q: "Simplify (2⁻³ × 3²) ÷ (2⁻⁵ × 3⁻¹) and give the value.", a: "Powers of 2: 2⁻³ ÷ 2⁻⁵ = 2⁻³⁺⁵ = 2² = 4.\nPowers of 3: 3² ÷ 3⁻¹ = 3³ = 27.\nValue = 4 × 27 = 108.", marks: 3 },
      { q: "Light travels about 3 × 10⁸ metres in one second. How far does it travel in 2 minutes? Give the answer in standard form.", a: "2 minutes = 120 s = 1.2 × 10² s.\nDistance = 3 × 10⁸ × 1.2 × 10² m.\n= 3.6 × 10¹⁰ m.", marks: 3 },
      { q: "Case study: A virus measures 1.2 × 10⁻⁷ m and a bacterium measures 3.6 × 10⁻⁶ m.\n(i) Write the length of the bacterium as a decimal.\n(ii) How many times as long as the virus is the bacterium?\n(iii) How many viruses placed end to end make 1.2 × 10⁻⁴ m?", a: "(i) 3.6 × 10⁻⁶ = 0.0000036 m.\n(ii) (3.6 × 10⁻⁶) ÷ (1.2 × 10⁻⁷) = 3 × 10¹ = 30 times.\n(iii) (1.2 × 10⁻⁴) ÷ (1.2 × 10⁻⁷) = 10³ = 1,000 viruses.", marks: 4, type: "case" }
    ]
  },
  "a-story-of-numbers": {
    mcq: [
      { q: "What does the Roman numeral XXIX stand for?", options: ["19", "39", "29", "31"], answer: 2, explain: "XX = 20 and IX = 9 (X after I is subtracted from), so XXIX = 29.", level: 1 },
      { q: "Which Roman symbol stands for 50?", options: ["L", "C", "D", "V"], answer: 0, explain: "L = 50. C is 100, D is 500 and V is 5.", level: 1 },
      { q: "The number system we use today has a base of", options: ["12", "10", "60", "2"], answer: 1, explain: "We use ten digits, 0 to 9, so the base is 10.", level: 1 },
      { q: "In which kind of system does the position of a digit decide its value?", options: ["Tally marks", "Roman numerals", "A place-value system", "Egyptian symbols"], answer: 2, explain: "In a place-value system, the same digit has different values in different places, as 7 does in 70 and 700.", level: 1 },
      { q: "The ancient Babylonians used a place-value system with base", options: ["12", "10", "20", "60"], answer: 3, explain: "Their system was base 60, a trace of which survives in 60 minutes in an hour.", level: 1 },
      { q: "What is CDXLIV in our number system?", options: ["444", "644", "434", "554"], answer: 0, explain: "CD = 400, XL = 40 and IV = 4, so the total is 444.", level: 2 },
      { q: "What would happen if the zero were left out of 305?", options: ["The number would become 3,050", "It would read 35, and the 3 would be worth only 30", "The number would stay 305", "The 3 would stand for 3000"], answer: 1, explain: "Without the zero the digits 3 and 5 sit in the tens and ones places, giving 35. The zero keeps the 3 in the hundreds place.", level: 2 },
      { q: "Assertion (A): The Hindu–Arabic system can write any number using only ten digits.\nReason (R): It uses place value and a symbol for zero.", options: ["Both A and R are true, and R is the correct explanation of A.", "Both A and R are true, but R is not the correct explanation of A.", "A is true, but R is false.", "A is false, but R is true."], answer: 0, explain: "Because a digit's place gives its value, and zero marks empty places, ten symbols are enough for every number.", level: 2, keepOrder: true },
      { q: "Which is the expanded form of 6,208?", options: ["6 × 100 + 2 × 10 + 8", "6 × 1000 + 2 × 10 + 8", "6 × 1000 + 2 × 100 + 0 × 10 + 8", "6 × 10 + 2 × 100 + 8"], answer: 2, explain: "6 is in the thousands place, 2 in the hundreds, 0 in the tens and 8 in the ones.", level: 2 },
      { q: "A shopkeeper counts his sales with tally marks in groups of five. He has 7 full groups and 3 extra strokes.\nHow many sales is that?", options: ["73", "38", "35", "10"], answer: 1, explain: "7 groups of 5 is 35, and 3 more strokes make 38.", level: 2 },
      { q: "An old stone gate has MCMLXXXIV carved on it as its year of building.\nHow old is the gate in the year 2024?", options: ["30 years", "40 years", "34 years", "50 years"], answer: 1, explain: "MCMLXXXIV = 1000 + 900 + 50 + 30 + 4 = 1984. Age = 2024 − 1984 = 40 years.", level: 3 },
      { q: "Which is the Roman numeral for 2,468?", options: ["MMDCLXVIII", "MMCDXLVIII", "MMCLXVIII", "MMCDLXVIII"], answer: 3, explain: "2000 = MM, 400 = CD, 60 = LX and 8 = VIII, giving MMCDLXVIII.", level: 3 },
      { q: "A tribe counts in groups of 20 and uses a place-value system.\nHow many different digit symbols (including zero) does it need?", options: ["20", "19", "21", "10"], answer: 0, explain: "The number of symbols needed equals the base, so a base-20 system needs 20 symbols.", level: 3 },
      { q: "C is 100 and XLVII is 47. What is C − XLVII in Roman numerals?", options: ["LIV", "XLIII", "LIII", "LXIII"], answer: 2, explain: "100 − 47 = 53 = 50 + 3 = LIII.", level: 3 }
    ],
    written: [
      { q: "Write 2024 in Roman numerals.", a: "2000 = MM, 20 = XX, 4 = IV.\n2024 = MMXXIV.", marks: 1 },
      { q: "Why is our number system called the Hindu–Arabic system?", a: "It was developed in India and carried to the West by Arab scholars.", marks: 1 },
      { q: "Write 7,040 in expanded form.", a: "7,040 = 7 × 1000 + 0 × 100 + 4 × 10 + 0.", marks: 2 },
      { q: "Write MCMLIX in our numbers, showing the parts.", a: "M = 1000, CM = 900, L = 50, IX = 9.\n1000 + 900 + 50 + 9 = 1,959.", marks: 2 },
      { q: "Give two reasons why Roman numerals are inconvenient for big calculations.", a: "They are not a place-value system, so a digit's position gives no value.\nThey have no zero, and large numbers need long strings of symbols.", marks: 2 },
      { q: "Compare tally marks, Roman numerals and the Hindu–Arabic system. Give three points of difference.", a: "Tally marks use one stroke per object, so large counts are very long.\nRoman numerals use letters with values added or subtracted, with no place value or zero.\nThe Hindu–Arabic system has ten digits with place value and zero, so any number is short and easy to calculate with.", marks: 3 },
      { q: "Explain the two uses of zero with the help of the numbers 305 and 35.", a: "As a placeholder: in 305 the zero shows that the tens place is empty, so the 3 stands for 300. Without it we get 35, where the 3 stands for 30.\nAs a number: zero can itself be added, subtracted and multiplied, and Indian mathematicians such as Brahmagupta gave rules for it.\nSo zero is both a placeholder and a number.", marks: 3 },
      { q: "Case study: Lakshmi visits a museum. One panel shows the year MDCCCXLVII on an old building. Another says that the Babylonians counted in groups of 60.\n(i) Write the year in our numerals.\n(ii) Why is adding two Roman numerals harder than adding the same numbers in our system?\n(iii) Which common measure of time still reflects counting in 60s?", a: "(i) M = 1000, D = 500, CCC = 300, XL = 40, VII = 7, so the year is 1847.\n(ii) Roman numerals have no place value, so digits cannot be lined up and added column by column.\n(iii) 60 minutes make an hour and 60 seconds make a minute.", marks: 4, type: "case" }
    ]
  },
  "quadrilaterals": {
    mcq: [
      { q: "What is the sum of the interior angles of a quadrilateral?", options: ["180°", "270°", "360°", "540°"], answer: 2, explain: "A diagonal splits a quadrilateral into two triangles, each with angle sum 180°, so the total is 360°.", level: 1 },
      { q: "The opposite sides of a parallelogram are", options: ["equal and parallel", "only equal", "perpendicular", "unequal"], answer: 0, explain: "In a parallelogram both pairs of opposite sides are parallel and equal.", level: 1 },
      { q: "Which of these always has diagonals that bisect each other at right angles?", options: ["Rectangle", "Parallelogram", "Trapezium", "Rhombus"], answer: 3, explain: "The diagonals of a rhombus bisect each other at 90°. Rectangle diagonals are equal but meet at right angles only in a square.", level: 1 },
      { q: "How many diagonals does a quadrilateral have?", options: ["1", "2", "3", "4"], answer: 1, explain: "A quadrilateral has 4 vertices, and joining opposite pairs gives 2 diagonals.", level: 1 },
      { q: "Which quadrilateral has all sides equal and all angles 90°?", options: ["Square", "Rectangle", "Rhombus", "Kite"], answer: 0, explain: "Only a square has both equal sides and right angles. A rectangle has right angles only, and a rhombus has equal sides only.", level: 1 },
      { q: "Two adjacent angles of a parallelogram are in the ratio 2 : 3.\nWhat is the smaller angle?", options: ["36°", "72°", "108°", "60°"], answer: 1, explain: "Adjacent angles add up to 180°, so the parts 2 and 3 share 180°: one part = 36°. The smaller angle is 2 × 36° = 72°.", level: 2 },
      { q: "In a rectangle one side is 5 cm and a diagonal is 13 cm.\nWhat is the other side?", options: ["8 cm", "18 cm", "12 cm", "144 cm"], answer: 2, explain: "A diagonal forms a right triangle with the sides: other side² = 13² − 5² = 169 − 25 = 144, so it is 12 cm.", level: 2 },
      { q: "In a rhombus ABCD, ∠A = 50°. What is ∠B?", options: ["130°", "50°", "40°", "80°"], answer: 0, explain: "A rhombus is a parallelogram, so adjacent angles add up to 180°: ∠B = 180° − 50° = 130°.", level: 2 },
      { q: "Assertion (A): Every square is a rhombus.\nReason (R): A square has four equal sides, and a rhombus is a parallelogram with four equal sides.", options: ["Both A and R are true, and R is the correct explanation of A.", "Both A and R are true, but R is not the correct explanation of A.", "A is true, but R is false.", "A is false, but R is true."], answer: 0, explain: "A square is a parallelogram with all sides equal, which is exactly the definition of a rhombus.", level: 2, keepOrder: true },
      { q: "A glass cutter makes a quadrilateral piece whose angles are in the ratio 1 : 2 : 3 : 4.\nWhat is its largest angle?", options: ["120°", "72°", "108°", "144°"], answer: 3, explain: "The parts add up to 10 and the angles total 360°, so one part is 36°. The largest angle is 4 × 36° = 144°.", level: 2 },
      { q: "The diagonals of a rhombus are 24 cm and 10 cm. What is its perimeter?", options: ["26 cm", "34 cm", "52 cm", "169 cm"], answer: 2, explain: "Half-diagonals are 12 and 5, so side = √(144 + 25) = 13 cm. Perimeter = 4 × 13 = 52 cm.", level: 3 },
      { q: "A tile maker cuts a rhombus-shaped tile with side 10 cm and one diagonal 12 cm.\nHow long is the other diagonal?", options: ["8 cm", "16 cm", "14 cm", "20 cm"], answer: 1, explain: "Half of the known diagonal is 6 cm, so half of the other is √(10² − 6²) = √64 = 8 cm. The other diagonal is 16 cm.", level: 3 },
      { q: "In a parallelogram ABCD, ∠A = (2x + 10)° and ∠C = (3x − 20)°.\nWhat is ∠B?", options: ["110°", "70°", "100°", "20°"], answer: 0, explain: "Opposite angles are equal: 2x + 10 = 3x − 20, so x = 30 and ∠A = 70°. Then ∠B = 180° − 70° = 110°.", level: 3 },
      { q: "The diagonals of a rectangle ABCD meet at O. If ∠AOB = 80°, what is ∠OAB?", options: ["40°", "80°", "100°", "50°"], answer: 3, explain: "The diagonals are equal and bisect each other, so OA = OB. In the isosceles triangle OAB, ∠OAB = (180° − 80°) ÷ 2 = 50°.", level: 3 }
    ],
    written: [
      { q: "Name the quadrilateral that has exactly one pair of parallel sides.", a: "A trapezium.", marks: 1 },
      { q: "Three angles of a quadrilateral are 90°, 100° and 80°. Find the fourth angle.", a: "Sum of the angles = 360°.\nFourth angle = 360° − (90° + 100° + 80°) = 90°.", marks: 1 },
      { q: "State two properties of the diagonals of a rectangle.", a: "The diagonals of a rectangle are equal in length.\nThey bisect each other.", marks: 2 },
      { q: "One angle of a parallelogram is 4 times its adjacent angle. Find all four angles.", a: "Let the adjacent angle be x, so the other is 4x.\nx + 4x = 180°, so x = 36° and 4x = 144°.\nThe angles are 36°, 144°, 36° and 144°.", marks: 2 },
      { q: "The diagonals of a rhombus are 30 cm and 16 cm. Find its side.", a: "The diagonals bisect at right angles: half-diagonals are 15 cm and 8 cm.\nSide² = 15² + 8² = 225 + 64 = 289.\nSide = 17 cm.", marks: 2 },
      { q: "The angles of a quadrilateral are x°, (x + 10)°, (x + 20)° and (x + 30)°. Find each angle.", a: "Sum of angles = 360°.\nx + x + 10 + x + 20 + x + 30 = 4x + 60 = 360, so 4x = 300 and x = 75.\nThe angles are 75°, 85°, 95° and 105°.", marks: 3 },
      { q: "Is every square a rhombus? Is every rhombus a square? Explain using properties.", a: "A square has four equal sides and its diagonals bisect each other at right angles, so every square is a rhombus.\nA rhombus has equal sides but its angles need not be 90°, and its diagonals need not be equal.\nSo a rhombus is a square only when its angles are 90°; not every rhombus is a square.", marks: 3 },
      { q: "Case study: Rhea cuts a parallelogram-shaped piece of cloth ABCD for a flag. ∠A = 70°, AB = 12 cm and BC = 8 cm.\n(i) Find ∠B.\n(ii) Find ∠C and ∠D.\n(iii) Find the perimeter of the cloth.", a: "(i) Adjacent angles are supplementary: ∠B = 180° − 70° = 110°.\n(ii) Opposite angles are equal: ∠C = ∠A = 70° and ∠D = ∠B = 110°.\n(iii) Opposite sides are equal, so perimeter = 2 × (12 + 8) = 40 cm.", marks: 4, type: "case" }
    ]
  },
  "number-play": {
    mcq: [
      { q: "Which of these numbers is divisible by 5?", options: ["2,347", "4,152", "6,805", "7,123"], answer: 2, explain: "A number is divisible by 5 if its last digit is 0 or 5. Only 6,805 ends in 5.", level: 1 },
      { q: "Which number is divisible by 3?", options: ["4,512", "4,513", "4,514", "4,516"], answer: 0, explain: "The digit sum of 4,512 is 12, which is divisible by 3. The other digit sums are 13, 14 and 16.", level: 1 },
      { q: "Which of these is a palindrome?", options: ["1,231", "4,554", "4,545", "1,213"], answer: 1, explain: "4,554 reads the same from both ends. 4,545 reverses to 5,454.", level: 1 },
      { q: "Repeating 'largest minus smallest' on a 3-digit number (not all digits equal) leads to", options: ["1089", "6174", "1729", "495"], answer: 3, explain: "For 3-digit numbers the process ends at 495. (6174 is for 4-digit numbers.)", level: 1 },
      { q: "In the Collatz process, what comes after 10?", options: ["5", "30", "11", "20"], answer: 0, explain: "10 is even, so halve it: 5.", level: 1 },
      { q: "Which number is divisible by 8?", options: ["5,126", "5,124", "5,130", "5,128"], answer: 3, explain: "The last three digits must be divisible by 8. 128 = 8 × 16, while 126, 124 and 130 are not multiples of 8.", level: 2 },
      { q: "Which digit should replace * in 52*4 so that the number is divisible by 3 and the digit is as small as possible?", options: ["0", "1", "2", "3"], answer: 1, explain: "The digit sum is 5 + 2 + 4 + * = 11 + *. For a multiple of 3 we need 12, 15, ..., so the smallest digit is 1.", level: 2 },
      { q: "Assertion (A): If we reverse a 3-digit number abc and subtract the smaller from the larger, the result is a multiple of 99.\nReason (R): abc − cba = 99(a − c).", options: ["Both A and R are true, and R is the correct explanation of A.", "Both A and R are true, but R is not the correct explanation of A.", "A is true, but R is false.", "A is false, but R is true."], answer: 0, explain: "100a + 10b + c − (100c + 10b + a) = 99a − 99c = 99(a − c), which is a multiple of 99.", level: 2, keepOrder: true },
      { q: "Tanya picks 5823 and does one round of the Kaprekar process (largest minus smallest).\nWhat does she get?", options: ["3087", "5994", "6174", "8532"], answer: 2, explain: "The largest number is 8532 and the smallest is 2358. 8532 − 2358 = 6174.", level: 2 },
      { q: "Ria has 7,238 stickers and wants to share them equally among 11 friends with none left.\nIs this possible?", options: ["No, the last digit is 8", "Yes, the alternate digit sums are equal (10 and 10)", "No, the digit sum 20 is not a multiple of 11", "Yes, because the number is even"], answer: 1, explain: "Digits in odd places: 7 + 3 = 10; in even places: 2 + 8 = 10. The difference is 0, so 7,238 is divisible by 11 (7,238 = 11 × 658).", level: 2 },
      { q: "Which starting number does NOT satisfy the condition for the 1089 trick (first and last digits differ by 2 or more)?", options: ["741", "865", "524", "930"], answer: 2, explain: "In 524 the first and last digits are 5 and 4, which differ by only 1. Indeed 524 − 425 = 99 and 99 + 99 = 198, not 1089.", level: 3 },
      { q: "Which digit replaces * in 3*85 so that the number is divisible by 11?", options: ["4", "5", "7", "6"], answer: 3, explain: "Odd places hold 3 and 8, sum 11; even places hold * and 5. We need 11 − (* + 5) = 0, so * = 6. Check: 3685 = 11 × 335.", level: 3 },
      { q: "The Collatz sequence starting at 12 is written down until it reaches 1.\nHow many numbers does it contain, counting 12 and 1?", options: ["10", "9", "11", "8"], answer: 0, explain: "12, 6, 3, 10, 5, 16, 8, 4, 2, 1: that is 10 numbers.", level: 3 },
      { q: "What is the smallest 4-digit number divisible by both 4 and 9?", options: ["1044", "1026", "1000", "1008"], answer: 3, explain: "A number divisible by 4 and 9 is divisible by 36. 1008 = 36 × 28; its digit sum is 9 and its last two digits 08 are divisible by 4. 1000 and 1026 fail one test, and 1044 is larger.", level: 3 }
    ],
    written: [
      { q: "Is 8,712 divisible by 4? Give a reason.", a: "Yes. The number formed by the last two digits, 12, is divisible by 4.", marks: 1 },
      { q: "Write the Collatz sequence that starts at 5.", a: "5 is odd: 3 × 5 + 1 = 16, then 8, 4, 2, 1.\nSequence: 5, 16, 8, 4, 2, 1.", marks: 1 },
      { q: "Test whether 9,163 is divisible by 11.", a: "Digits in odd places: 9 + 6 = 15. Digits in even places: 1 + 3 = 4.\nDifference = 15 − 4 = 11, a multiple of 11.\nSo 9,163 is divisible by 11 (9,163 = 11 × 833).", marks: 2 },
      { q: "Apply the 1089 trick to 631.", a: "Reverse: 136. Subtract: 631 − 136 = 495.\nReverse 495 to get 594 and add: 495 + 594 = 1089.", marks: 2 },
      { q: "Find the digit a if the number 4a72 is divisible by 9.", a: "Digit sum = 4 + a + 7 + 2 = 13 + a.\nFor divisibility by 9 this must be 18, so a = 5.\nCheck: 4572 = 9 × 508.", marks: 2 },
      { q: "Apply the Kaprekar process to 9621 until you reach 6174.", a: "Largest 9621, smallest 1269: 9621 − 1269 = 8352.\nLargest 8532, smallest 2358: 8532 − 2358 = 6174.\nSo 6174 is reached in 2 steps.", marks: 3 },
      { q: "Show that the sum of any 2-digit number and the number formed by reversing its digits is divisible by 11.", a: "Let the number be 10a + b; the reversed number is 10b + a.\nSum = 10a + b + 10b + a = 11a + 11b = 11(a + b).\nThis is a multiple of 11, so it is divisible by 11.", marks: 3 },
      { q: "Case study: Kabir plays a number game in class with the number 4,563.\n(i) Is 4,563 divisible by 9? Why?\n(ii) Is it divisible by 11? Why?\n(iii) Write the smallest palindrome greater than 4,563.", a: "(i) Digit sum = 4 + 5 + 6 + 3 = 18, which is divisible by 9, so yes.\n(ii) Odd places: 4 + 6 = 10; even places: 5 + 3 = 8. The difference is 2, not 0 or a multiple of 11, so no.\n(iii) 4,554 is smaller than 4,563, so the next 4-digit palindrome is 4,664.", marks: 4, type: "case" }
    ]
  },
  "we-distribute-yet-things-multiply": {
    mcq: [
      { q: "(a + b)² is equal to", options: ["a² + b²", "a² + 2ab + b²", "a² + ab + b²", "2a + 2b"], answer: 1, explain: "(a + b)² = a² + 2ab + b². Leaving out 2ab is a common mistake.", level: 1 },
      { q: "(x + 7)(x − 7) equals", options: ["x² + 49", "x² − 14x + 49", "x² − 49", "x² − 14"], answer: 2, explain: "(a + b)(a − b) = a² − b², so the answer is x² − 49.", level: 1 },
      { q: "5x × 4x² equals", options: ["20x³", "9x³", "20x²", "9x²"], answer: 0, explain: "Multiply the numbers: 5 × 4 = 20. Add the powers: x¹ × x² = x³.", level: 1 },
      { q: "2(x + 5) equals", options: ["2x + 5", "2x + 10", "x + 10", "7x"], answer: 1, explain: "Distribute the 2 to both terms: 2 × x + 2 × 5 = 2x + 10.", level: 1 },
      { q: "An identity is an equation that is true for", options: ["only one value of the variable", "only positive values", "no value", "every value of the variables"], answer: 3, explain: "An identity holds for all values of its variables. An ordinary equation holds only for some.", level: 1 },
      { q: "(3x + 2)² equals", options: ["9x² + 4", "9x² + 6x + 4", "3x² + 12x + 4", "9x² + 12x + 4"], answer: 3, explain: "a² = 9x², 2ab = 2 × 3x × 2 = 12x and b² = 4.", level: 2 },
      { q: "(x + 4)(x + 9) equals", options: ["x² + 36x + 13", "x² + 5x + 36", "x² + 13x + 36", "x² + 13x + 13"], answer: 2, explain: "The sum of 4 and 9 is 13 and their product is 36, so x² + 13x + 36.", level: 2 },
      { q: "What is 104²?", options: ["10416", "10816", "10016", "10806"], answer: 1, explain: "(100 + 4)² = 10000 + 2 × 100 × 4 + 16 = 10000 + 800 + 16 = 10816.", level: 2 },
      { q: "Assertion (A): (a − b)² = a² − b².\nReason (R): (a − b)² = a² − 2ab + b².", options: ["Both A and R are true, and R is the correct explanation of A.", "Both A and R are true, but R is not the correct explanation of A.", "A is true, but R is false.", "A is false, but R is true."], answer: 3, explain: "R is the correct identity. A is false: for a = 5, b = 2, (a − b)² = 9 but a² − b² = 21.", level: 2, keepOrder: true },
      { q: "A square garden has side (x + 6) metres.\nWhich expression gives its area in square metres?", options: ["x² + 12x + 36", "x² + 36", "x² + 6x + 36", "4x + 24"], answer: 0, explain: "Area = (x + 6)² = x² + 2 × x × 6 + 36 = x² + 12x + 36. (4x + 24 is the perimeter.)", level: 2 },
      { q: "A rectangular room is (x + 5) m long and (x + 3) m wide.\nWhat is its area when x = 7?", options: ["110 m²", "120 m²", "130 m²", "99 m²"], answer: 1, explain: "Area = (x + 5)(x + 3) = x² + 8x + 15 = 49 + 56 + 15 = 120 m². Also 12 × 10 = 120.", level: 3 },
      { q: "If a + b = 9 and ab = 18, what is a² + b²?", options: ["45", "81", "27", "63"], answer: 0, explain: "(a + b)² = a² + 2ab + b², so a² + b² = 81 − 2 × 18 = 45.", level: 3 },
      { q: "What is the value of (a + b)² − (a − b)² when a = 7 and b = 3?", options: ["16", "58", "40", "84"], answer: 3, explain: "The expression equals 4ab = 4 × 7 × 3 = 84. Check: 10² − 4² = 100 − 16 = 84.", level: 3 },
      { q: "What is the value of 203² − 197²?", options: ["1200", "36", "2400", "2406"], answer: 2, explain: "a² − b² = (a + b)(a − b) = 400 × 6 = 2400.", level: 3 }
    ],
    written: [
      { q: "Expand (x + 8)².", a: "(x + 8)² = x² + 2 × x × 8 + 8² = x² + 16x + 64.", marks: 1 },
      { q: "Multiply 3a by 4a²b.", a: "3 × 4 = 12 and a × a² = a³, with b unchanged.\nProduct = 12a³b.", marks: 1 },
      { q: "Expand (2a − 3b)².", a: "Use (p − q)² = p² − 2pq + q² with p = 2a, q = 3b.\n= 4a² − 12ab + 9b².", marks: 2 },
      { q: "Find 53 × 47 using an identity.", a: "53 × 47 = (50 + 3)(50 − 3) = 50² − 3².\n= 2500 − 9 = 2491.", marks: 2 },
      { q: "Simplify (x + 5)(x + 2) − x(x + 7).", a: "(x + 5)(x + 2) = x² + 7x + 10 and x(x + 7) = x² + 7x.\nSubtracting: x² + 7x + 10 − x² − 7x = 10.", marks: 2 },
      { q: "Show that (a + b)² − (a − b)² = 4ab. Use it to evaluate (25 + 13)² − (25 − 13)².", a: "(a + b)² − (a − b)² = (a² + 2ab + b²) − (a² − 2ab + b²) = 4ab.\nWith a = 25 and b = 13: 4 × 25 × 13 = 1300.\nCheck: 38² − 12² = 1444 − 144 = 1300.", marks: 3 },
      { q: "Verify the identity (x + a)(x + b) = x² + (a + b)x + ab for x = 2, a = 3, b = 4. Then use it to find 102 × 105.", a: "LHS = (2 + 3)(2 + 4) = 5 × 6 = 30.\nRHS = 4 + 7 × 2 + 12 = 30, so the identity is verified.\n102 × 105 = (100 + 2)(100 + 5) = 10000 + 7 × 100 + 10 = 10710.", marks: 3 },
      { q: "Case study: A square pond has side 9 m. A path 1 m wide runs all around it, outside the pond.\n(i) Find the side of the outer square (pond and path together).\n(ii) Find the area of the outer square.\n(iii) Find the area of the path.", a: "(i) The path adds 1 m on each side: 9 + 1 + 1 = 11 m.\n(ii) Area = 11² = (10 + 1)² = 100 + 20 + 1 = 121 m².\n(iii) Pond area = 9² = 81 m², so path area = 121 − 81 = 40 m².", marks: 4, type: "case" }
    ]
  },
  "proportional-reasoning-1": {
    mcq: [
      { q: "The ratio 18 : 24 in its simplest form is", options: ["9 : 12", "3 : 4", "6 : 8", "4 : 3"], answer: 1, explain: "Divide both terms by their HCF 6 to get 3 : 4. The ratios 9 : 12 and 6 : 8 are equal but not in simplest form.", level: 1 },
      { q: "₹500 is divided in the ratio 2 : 3. The larger share is", options: ["₹200", "₹250", "₹300", "₹150"], answer: 2, explain: "There are 5 parts, each ₹100, so the larger share is 3 × 100 = ₹300.", level: 1 },
      { q: "Which pair of ratios is in proportion?", options: ["2 : 3 and 3 : 2", "4 : 5 and 8 : 10", "1 : 2 and 2 : 3", "5 : 6 and 6 : 5"], answer: 1, explain: "4 : 5 = 8 : 10 since both simplify the same way (4 × 10 = 5 × 8 = 40). The other pairs are different ratios.", level: 1 },
      { q: "If 1 kg of rice costs ₹40, what do 3 kg cost?", options: ["₹43", "₹80", "₹13", "₹120"], answer: 3, explain: "Cost and weight are in direct proportion, so 3 × 40 = ₹120.", level: 1 },
      { q: "On a map, 1 cm stands for 10 km. A road that measures 6 cm on the map is really", options: ["60 km", "16 km", "6 km", "600 km"], answer: 0, explain: "6 × 10 = 60 km.", level: 1 },
      { q: "8 pencils cost ₹60. What do 12 pencils cost at the same rate?", options: ["₹80", "₹96", "₹90", "₹72"], answer: 2, explain: "One pencil costs 60 ÷ 8 = ₹7.50, so 12 pencils cost 12 × 7.50 = ₹90.", level: 2 },
      { q: "The ratio of boys to girls in a class of 45 is 5 : 4.\nHow many girls are there?", options: ["18", "25", "36", "20"], answer: 3, explain: "There are 9 parts, so one part = 45 ÷ 9 = 5 students. Girls = 4 × 5 = 20.", level: 2 },
      { q: "Which pair of values shows x and y in direct proportion?", options: ["x: 1, 2, 3 and y: 4, 5, 6", "x: 2, 4, 6 and y: 7, 14, 21", "x: 1, 2, 3 and y: 5, 7, 9", "x: 2, 3, 4 and y: 5, 6, 7"], answer: 1, explain: "In the pair x: 2, 4, 6 and y: 7, 14, 21 the ratio y/x is 3.5 every time. In the others y/x changes.", level: 2 },
      { q: "Assertion (A): The ratios 3 : 4 and 9 : 16 are in proportion.\nReason (R): In a proportion a : b = c : d, we have a × d = b × c.", options: ["Both A and R are true, and R is the correct explanation of A.", "Both A and R are true, but R is not the correct explanation of A.", "A is true, but R is false.", "A is false, but R is true."], answer: 3, explain: "R is the correct test. Here 3 × 16 = 48 but 4 × 9 = 36, which are unequal, so A is false.", level: 2, keepOrder: true },
      { q: "A recipe for 4 people needs 300 g of flour.\nHow much flour is needed for 10 people?", options: ["750 g", "1200 g", "600 g", "450 g"], answer: 0, explain: "Flour for one person = 300 ÷ 4 = 75 g, so for 10 people it is 750 g.", level: 2 },
      { q: "A tap fills 120 litres in 8 minutes at a steady rate.\nHow long will it take to deliver 195 litres?", options: ["12 min", "15 min", "13 min", "14 min"], answer: 2, explain: "The rate is 120 ÷ 8 = 15 litres per minute. Time = 195 ÷ 15 = 13 minutes.", level: 3 },
      { q: "₹1,200 is shared among A, B and C in the ratio 2 : 3 : 7.\nHow much does C get?", options: ["₹600", "₹700", "₹800", "₹500"], answer: 1, explain: "There are 2 + 3 + 7 = 12 parts, each worth ₹100. C gets 7 × 100 = ₹700.", level: 3 },
      { q: "Two numbers are in the ratio 3 : 5 and their sum is 96.\nWhat is the difference between them?", options: ["24", "12", "36", "48"], answer: 0, explain: "There are 8 parts, each 96 ÷ 8 = 12. The numbers are 36 and 60, and the difference is 24.", level: 3 },
      { q: "Two towns are 7.2 cm apart on a map where 1 cm stands for 25 km.\nHow long will a bus at 60 km/h take to go from one town to the other?", options: ["2.4 hours", "3.6 hours", "4 hours", "3 hours"], answer: 3, explain: "Real distance = 7.2 × 25 = 180 km. Time = 180 ÷ 60 = 3 hours.", level: 3 }
    ],
    written: [
      { q: "Write 24 : 36 in its simplest form.", a: "The HCF of 24 and 36 is 12.\n24 : 36 = 2 : 3.", marks: 1 },
      { q: "If 3 kg of sugar cost ₹150, find the cost of 1 kg.", a: "Cost of 1 kg = 150 ÷ 3 = ₹50.", marks: 1 },
      { q: "Share ₹2,400 between Riya and Tara in the ratio 5 : 7.", a: "Total parts = 5 + 7 = 12; one part = 2400 ÷ 12 = ₹200.\nRiya gets 5 × 200 = ₹1,000 and Tara gets 7 × 200 = ₹1,400.", marks: 2 },
      { q: "Check whether the numbers 6, 9, 10 and 15 are in proportion.", a: "6 : 9 = 2 : 3 and 10 : 15 = 2 : 3.\nThe ratios are equal (also 6 × 15 = 90 = 9 × 10), so the numbers are in proportion.", marks: 2 },
      { q: "A train covers 150 km in 2.5 hours. At the same speed, how far does it go in 4 hours?", a: "Speed = 150 ÷ 2.5 = 60 km/h.\nDistance in 4 hours = 60 × 4 = 240 km.", marks: 2 },
      { q: "A pole 5 m tall casts a shadow 3 m long. At the same time a tree casts a shadow 12 m long. Find the height of the tree.", a: "Height and shadow length are in direct proportion.\nHeight / shadow = 5/3, so tree height = (5/3) × 12.\n= 20 m.", marks: 3 },
      { q: "A cake mix needs flour and sugar in the ratio 5 : 2. Find the sugar needed for 750 g of flour, and the total weight of the mix.", a: "Sugar / flour = 2/5, so sugar = (2/5) × 750 = 300 g.\nTotal weight = 750 + 300 = 1,050 g.", marks: 3 },
      { q: "Case study: A shop sells notebooks at a fixed rate: 4 notebooks cost ₹100, 6 cost ₹150 and 10 cost ₹250.\n(i) Find the cost of one notebook.\n(ii) Are the number of notebooks and their cost in direct proportion? Why?\n(iii) Find the cost of 15 notebooks.", a: "(i) 100 ÷ 4 = ₹25.\n(ii) Yes. The ratios 100/4, 150/6 and 250/10 are all 25, a constant.\n(iii) 15 × 25 = ₹375.", marks: 4, type: "case" }
    ]
  }
});
