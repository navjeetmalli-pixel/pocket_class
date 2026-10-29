// Class 6 Mathematics (PSEB) practice bank, part 1: Knowing Our Numbers to Fractions.
StudyData.addPractice(6, "mathspb", {
  "knowing-our-numbers": {
    mcq: [
      { q: "How many digits does the number 1 crore have?", options: ["7", "8", "9", "6"], answer: 1, explain: "1 crore = 1,00,00,000, which has 8 digits (a 1 followed by seven zeros).", level: 1 },
      { q: "Which is the Roman numeral for 49?", options: ["XLIX", "IL", "XXXXIX", "VIL"], answer: 0, explain: "49 = 40 + 9 = XL + IX = XLIX. I can only be placed before V or X, so IL is not allowed, and a symbol cannot be repeated four times.", level: 1 },
      { q: "What is the value of the Roman numeral XC?", options: ["110", "60", "90", "40"], answer: 2, explain: "X (10) written before C (100) is subtracted: 100 − 10 = 90.", level: 1 },
      { q: "Which is the largest 5-digit number?", options: ["1,00,000", "99,998", "10,000", "99,999"], answer: 3, explain: "The largest 5-digit number uses the largest digit, 9, in every place: 99,999.", level: 1 },
      { q: "10 lakh is equal to which of these?", options: ["1 crore", "10 thousand", "1 million", "10 million"], answer: 2, explain: "10 lakh = 10,00,000 = 1 million. (1 crore equals 10 million.)", level: 1 },
      { q: "Round 7,846 to the nearest hundred.", options: ["7,900", "7,800", "7,850", "8,000"], answer: 1, explain: "The tens digit is 4, which is less than 5, so we round down to 7,800.", level: 2 },
      { q: "In the number 53,46,718, what is the value of the digit 4?", options: ["40,000", "4,000", "4,00,000", "400"], answer: 0, explain: "Reading the places from the right: 8 ones, 1 ten, 7 hundreds, 6 thousands, 4 ten-thousands. So 4 stands for 40,000.", level: 2 },
      { q: "What is the smallest 4-digit number that can be made using the digits 5, 0, 9, 2 once each?", options: ["0259", "2095", "2509", "2059"], answer: 3, explain: "The smallest digit 0 cannot be placed first, so start with 2, then use 0, 5, 9 in order: 2059.", level: 2 },
      { q: "A shopkeeper sold 6,812 pens in April and 3,190 pens in May. Estimating by rounding each to the nearest thousand, about how many pens were sold in all?", options: ["9,000", "11,000", "10,000", "10,500"], answer: 2, explain: "6,812 rounds to 7,000 and 3,190 rounds to 3,000. Their sum is 10,000.", level: 2 },
      { q: "Assertion (A): 40 is written as XL in Roman numerals.\nReason (R): A smaller symbol written to the left of a larger symbol is subtracted from it.", options: ["Both A and R are true, and R is the correct explanation of A.", "Both A and R are true, but R is not the correct explanation of A.", "A is true, but R is false.", "A is false, but R is true."], answer: 0, explain: "XL has X (10) before L (50), so we subtract: 50 − 10 = 40. The rule in R is exactly what gives this value.", level: 2, keepOrder: true },
      { q: "One city has a population of 9,85,000 and another has 1 million people. How many more people live in the larger city?", options: ["1,50,000", "15,000", "5,000", "1,500"], answer: 1, explain: "1 million = 10,00,000. The difference is 10,00,000 − 9,85,000 = 15,000.", level: 3 },
      { q: "How many 4-digit numbers are there in all?", options: ["9,999", "10,000", "9,000", "8,999"], answer: 2, explain: "They run from 1000 to 9999, so there are 9999 − 1000 + 1 = 9,000 of them.", level: 3 },
      { q: "What is the largest 6-digit number that can be made using the digits 4, 0, 8, 5, 0, 2 once each?", options: ["8,54,020", "8,45,200", "2,04,058", "8,54,200"], answer: 3, explain: "Arrange the digits in descending order: 8, 5, 4, 2, 0, 0, giving 8,54,200.", level: 3 },
      { q: "Which number does the Roman numeral CDXLIV stand for?", options: ["644", "446", "444", "464"], answer: 2, explain: "CD = 400, XL = 40 and IV = 4. Adding gives 400 + 40 + 4 = 444.", level: 3 }
    ],
    written: [
      { q: "Write 72,05,309 in words.", a: "Seventy-two lakh five thousand three hundred nine.", marks: 1 },
      { q: "Write the Roman numeral XXVII as a Hindu-Arabic number.", a: "XX = 20 and VII = 7, so XXVII = 27.", marks: 1 },
      { q: "Compare 7,86,540 and 7,86,450. Which is greater and why?", a: "Both numbers have 6 digits, so compare from the left.\nThe first three digits 7, 8, 6 are the same. The next digits are 5 and 4, and 5 > 4.\nSo 7,86,540 is greater than 7,86,450.", marks: 2 },
      { q: "Insert commas in 4572319 according to the Indian system and the international system.", a: "Indian system: 45,72,319.\nInternational system: 4,572,319.", marks: 2 },
      { q: "Estimate 38,642 − 19,870 by rounding each number to the nearest thousand.", a: "38,642 rounds to 39,000 and 19,870 rounds to 20,000.\nEstimated difference = 39,000 − 20,000 = 19,000.", marks: 2 },
      { q: "Form the largest and the smallest 5-digit numbers using the digits 7, 0, 3, 9, 5 once each, and find their difference.", a: "Largest: arrange in descending order = 97,530.\nSmallest: 0 cannot be first, so = 30,579.\nDifference = 97,530 − 30,579 = 66,951.", marks: 3 },
      { q: "Write 1,50,00,000 in the international system and say how many millions it is.", a: "Group the digits in threes from the right: 15,000,000.\n10 lakh = 1 million, so 150 lakh = 15 million.\nSo it is 15 million.", marks: 3 },
      { q: "Case study: A state fair sold tickets over three days: Day 1: 48,750; Day 2: 52,380; Day 3: 61,295.\n(i) Round each day's number to the nearest thousand.\n(ii) Estimate the total number of tickets sold.\n(iii) On which day were the most tickets sold?", a: "(i) 48,750 → 49,000; 52,380 → 52,000; 61,295 → 61,000.\n(ii) Estimated total = 49,000 + 52,000 + 61,000 = 1,62,000.\n(iii) Day 3, because 61,295 is the greatest.", marks: 4, type: "case" }
    ]
  },
  "whole-numbers": {
    mcq: [
      { q: "Which is the smallest whole number?", options: ["1", "0", "−1", "10"], answer: 1, explain: "Whole numbers are 0, 1, 2, 3, … so 0 is the smallest. (−1 is an integer but not a whole number.)", level: 1 },
      { q: "What is the successor of 99,999?", options: ["1,00,000", "99,998", "1,00,001", "10,000"], answer: 0, explain: "The successor is the number 1 more: 99,999 + 1 = 1,00,000.", level: 1 },
      { q: "7 × (8 + 2) = 7 × 8 + 7 × 2 is an example of which property?", options: ["Commutative", "Associative", "Distributive", "Closure"], answer: 2, explain: "Multiplication is spread over addition, which is the distributive property of multiplication over addition.", level: 1 },
      { q: "What is any whole number multiplied by 0?", options: ["The number itself", "1", "Not defined", "0"], answer: 3, explain: "Any whole number × 0 = 0. For example, 56 × 0 = 0.", level: 1 },
      { q: "Which whole number is the identity for addition?", options: ["1", "0", "10", "The number itself"], answer: 1, explain: "Adding 0 to any whole number leaves it unchanged, so 0 is the additive identity.", level: 1 },
      { q: "Find 25 × 37 × 4 using a suitable rearrangement.", options: ["3,700", "3,600", "925", "1,000"], answer: 0, explain: "Rearrange as (25 × 4) × 37 = 100 × 37 = 3,700.", level: 2 },
      { q: "Which whole number has no predecessor in the whole numbers?", options: ["1", "10", "0", "100"], answer: 2, explain: "The predecessor of 0 would be −1, which is not a whole number. All the others have whole-number predecessors.", level: 2 },
      { q: "Using the distributive property, 98 × 102 equals:", options: ["9,896", "10,096", "9,986", "9,996"], answer: 3, explain: "98 × 102 = 98 × (100 + 2) = 9,800 + 196 = 9,996.", level: 2 },
      { q: "A shop sells 18 packets of biscuits a day. Each packet costs ₹25. How much does the shop earn in 4 days?", options: ["₹450", "₹1,800", "₹1,000", "₹1,900"], answer: 1, explain: "Earning in 4 days = 18 × 25 × 4 = 18 × 100 = ₹1,800. (₹450 is the earning of only one day.)", level: 2 },
      { q: "Assertion (A): Subtraction of whole numbers is not commutative.\nReason (R): 7 − 3 = 4, but 3 − 7 is not a whole number.", options: ["Both A and R are true, and R is the correct explanation of A.", "Both A and R are true, but R is not the correct explanation of A.", "A is true, but R is false.", "A is false, but R is true."], answer: 0, explain: "Changing the order of subtraction changes the result (or leaves no whole-number result), and R shows exactly this with 7 and 3.", level: 2, keepOrder: true },
      { q: "Arjun stands at 4 on a number line and takes 3 jumps of 5 units each to the right. Where does he land?", options: ["15", "20", "19", "12"], answer: 2, explain: "He moves 3 × 5 = 15 units, so he lands at 4 + 15 = 19.", level: 3 },
      { q: "How many whole numbers lie between 17 and 25?", options: ["6", "7", "8", "9"], answer: 1, explain: "The numbers between 17 and 25 are 18, 19, 20, 21, 22, 23, 24, which is 7 numbers.", level: 3 },
      { q: "What is the sum of the successor and the predecessor of 50?", options: ["50", "99", "101", "100"], answer: 3, explain: "Successor = 51 and predecessor = 49, so the sum is 51 + 49 = 100.", level: 3 },
      { q: "Which statement is NOT true for all whole numbers a and b?", options: ["a − b = b − a", "a + b = b + a", "a × b = b × a", "a × 1 = a"], answer: 0, explain: "Subtraction is not commutative: 9 − 4 = 5 but 4 − 9 is not a whole number. The other three always hold.", level: 3 }
    ],
    written: [
      { q: "State the commutative property of multiplication with an example.", a: "Changing the order of two numbers does not change their product: a × b = b × a. Example: 6 × 9 = 9 × 6 = 54.", marks: 1 },
      { q: "Write the successor of 3,99,999.", a: "3,99,999 + 1 = 4,00,000.", marks: 1 },
      { q: "Find 125 × 40 × 8 by rearranging the numbers.", a: "125 × 40 × 8 = (125 × 8) × 40 = 1,000 × 40 = 40,000.", marks: 2 },
      { q: "Use the distributive property to find 56 × 102.", a: "56 × 102 = 56 × (100 + 2)\n= 5,600 + 112 = 5,712.", marks: 2 },
      { q: "Show that subtraction of whole numbers is not associative using 10, 5 and 2.", a: "(10 − 5) − 2 = 5 − 2 = 3.\n10 − (5 − 2) = 10 − 3 = 7.\nSince 3 ≠ 7, subtraction is not associative.", marks: 2 },
      { q: "Find 4 × 1,768 × 25 in the easiest way.", a: "Rearrange: 4 × 25 × 1,768 (commutative property).\n4 × 25 = 100.\n100 × 1,768 = 1,76,800.", marks: 3 },
      { q: "Observe the pattern: 11 × 11 = 121 and 111 × 111 = 12,321. Write 1111 × 1111 and 11111 × 11111.", a: "The digits go up by 1 from the left to the middle and then come back down.\n1111 × 1111 = 1,234,321.\n11111 × 11111 = 123,454,321.", marks: 3 },
      { q: "Case study: A stationery shop sells 40 pens every day at ₹25 per pen.\n(i) How much money does the shop collect from pens in one day?\n(ii) Find the collection in 5 days in a convenient way.\n(iii) Name the properties used in (ii).", a: "(i) 40 × 25 = ₹1,000.\n(ii) 40 × 25 × 5 = 1,000 × 5 = ₹5,000.\n(iii) Commutative and associative properties of multiplication (we can group the numbers in any order, as in 40 × (25 × 5) = 40 × 125 = 5,000).", marks: 4, type: "case" }
    ]
  },
  "playing-with-numbers": {
    mcq: [
      { q: "What is the smallest prime number?", options: ["1", "2", "3", "0"], answer: 1, explain: "2 has exactly two factors, 1 and 2, and no smaller number does. 1 has only one factor so it is not prime.", level: 1 },
      { q: "Which of these is a prime number?", options: ["21", "27", "29", "33"], answer: 2, explain: "29 has only the factors 1 and 29. 21 = 3 × 7, 27 = 3 × 9 and 33 = 3 × 11.", level: 1 },
      { q: "How many factors does 12 have?", options: ["4", "5", "8", "6"], answer: 3, explain: "The factors of 12 are 1, 2, 3, 4, 6 and 12, which is 6 factors.", level: 1 },
      { q: "The number 1 is:", options: ["Neither prime nor composite", "Prime", "Composite", "Both prime and composite"], answer: 0, explain: "1 has only one factor (itself), so it is neither prime (two factors) nor composite (more than two factors).", level: 1 },
      { q: "Which of these numbers is divisible by 5?", options: ["1,234", "2,345", "3,456", "4,567"], answer: 1, explain: "A number is divisible by 5 if its ones digit is 0 or 5. Only 2,345 ends in 5.", level: 1 },
      { q: "What is the LCM of 12 and 18?", options: ["6", "72", "36", "216"], answer: 2, explain: "12 = 2² × 3 and 18 = 2 × 3². LCM = 2² × 3² = 36. (72 is a common multiple but not the least.)", level: 2 },
      { q: "What is the HCF of 24 and 36?", options: ["12", "6", "72", "4"], answer: 0, explain: "24 = 2³ × 3 and 36 = 2² × 3². HCF = 2² × 3 = 12.", level: 2 },
      { q: "Which of these numbers is divisible by 9?", options: ["4,177", "4,178", "4,175", "4,176"], answer: 3, explain: "A number is divisible by 9 if its digit sum is. 4 + 1 + 7 + 6 = 18, which is a multiple of 9. The other digit sums are 19, 20 and 17.", level: 2 },
      { q: "Two bells ring every 12 minutes and every 15 minutes. They ring together at 8:00 am. When will they next ring together?", options: ["8:30 am", "8:45 am", "9:00 am", "9:30 am"], answer: 2, explain: "The LCM of 12 and 15 is 60, so they ring together again after 60 minutes, at 9:00 am.", level: 2 },
      { q: "Assertion (A): 2 is the only even prime number.\nReason (R): Every even number greater than 2 has at least three factors: 1, 2 and the number itself.", options: ["Both A and R are true, and R is the correct explanation of A.", "Both A and R are true, but R is not the correct explanation of A.", "A is true, but R is false.", "A is false, but R is true."], answer: 0, explain: "Even numbers greater than 2 are divisible by 2, so they have more than two factors and are composite. That leaves only 2 as an even prime.", level: 2, keepOrder: true },
      { q: "Two ropes of lengths 36 m and 48 m are cut into pieces of equal length, as long as possible, with nothing left over. What is the length of each piece?", options: ["6 m", "24 m", "12 m", "144 m"], answer: 2, explain: "The longest equal piece is the HCF of 36 and 48, which is 12 m. (144 is their LCM.)", level: 3 },
      { q: "What is the prime factorisation of 180?", options: ["2² × 3² × 5", "2³ × 3 × 5", "2 × 3² × 10", "2² × 3 × 15"], answer: 0, explain: "180 = 2 × 90 = 2 × 2 × 45 = 2 × 2 × 3 × 3 × 5 = 2² × 3² × 5. The other expressions either give a different product or use non-prime factors.", level: 3 },
      { q: "What is the smallest number that is exactly divisible by 6, 8 and 12?", options: ["12", "24", "48", "72"], answer: 1, explain: "LCM of 6, 8 and 12: 6 = 2 × 3, 8 = 2³, 12 = 2² × 3, so LCM = 2³ × 3 = 24.", level: 3 },
      { q: "Which pair is a pair of twin primes (primes that differ by 2)?", options: ["(9, 11)", "(13, 15)", "(11, 13)", "(17, 21)"], answer: 2, explain: "11 and 13 are both prime and differ by 2. In the other pairs one number (9, 15 or 21) is composite.", level: 3 }
    ],
    written: [
      { q: "List all the factors of 20.", a: "1, 2, 4, 5, 10 and 20.", marks: 1 },
      { q: "Write the first four multiples of 7.", a: "7, 14, 21, 28.", marks: 1 },
      { q: "Test whether 7,248 is divisible by 4 and by 8.", a: "By 4: the last two digits are 48, and 48 ÷ 4 = 12, so it is divisible by 4.\nBy 8: the last three digits are 248, and 248 ÷ 8 = 31, so it is divisible by 8.", marks: 2 },
      { q: "Find the HCF of 18 and 30 using prime factorisation.", a: "18 = 2 × 3 × 3 and 30 = 2 × 3 × 5.\nCommon prime factors are 2 and 3.\nHCF = 2 × 3 = 6.", marks: 2 },
      { q: "Write two co-prime numbers and explain why they are co-prime.", a: "For example 8 and 15.\nThe factors of 8 are 1, 2, 4, 8 and of 15 are 1, 3, 5, 15.\nTheir only common factor is 1, so they are co-prime.", marks: 2 },
      { q: "Find the LCM of 15, 20 and 25.", a: "15 = 3 × 5; 20 = 2² × 5; 25 = 5².\nTake the highest power of each prime: 2², 3 and 5².\nLCM = 4 × 3 × 25 = 300.", marks: 3 },
      { q: "Find the HCF and LCM of 24 and 40 and verify that HCF × LCM = product of the numbers.", a: "24 = 2³ × 3; 40 = 2³ × 5.\nHCF = 2³ = 8; LCM = 2³ × 3 × 5 = 120.\nHCF × LCM = 8 × 120 = 960 and 24 × 40 = 960, so they are equal.", marks: 3 },
      { q: "Case study: A school has 60 boys and 48 girls. For a drill they stand in rows. Each row has the same number of students, and a row has only boys or only girls. The number in a row should be as large as possible.\n(i) How many students stand in each row?\n(ii) How many rows of boys and how many rows of girls are there?\n(iii) How many rows are there in all?", a: "(i) HCF of 60 and 48: 60 = 2² × 3 × 5, 48 = 2⁴ × 3, HCF = 2² × 3 = 12 students in each row.\n(ii) Boys: 60 ÷ 12 = 5 rows. Girls: 48 ÷ 12 = 4 rows.\n(iii) 5 + 4 = 9 rows.", marks: 4, type: "case" }
    ]
  },
  "basic-geometrical-ideas": {
    mcq: [
      { q: "A line segment has:", options: ["No end point", "One end point", "Two end points", "Endless length"], answer: 2, explain: "A line segment is a part of a line between two end points, so it has a fixed length.", level: 1 },
      { q: "How many starting (end) points does a ray have?", options: ["Two", "One", "None", "Three"], answer: 1, explain: "A ray starts at one point and goes on endlessly in one direction.", level: 1 },
      { q: "How many vertices does a quadrilateral have?", options: ["3", "5", "6", "4"], answer: 3, explain: "A quadrilateral has 4 sides and so 4 vertices (corners).", level: 1 },
      { q: "Which is the longest chord of a circle?", options: ["Diameter", "Radius", "Arc", "Sector"], answer: 0, explain: "The diameter passes through the centre and is the longest chord. A radius is only half as long, and an arc and a sector are not chords.", level: 1 },
      { q: "The diameter of a circle is 14 cm. What is its radius?", options: ["28 cm", "14 cm", "7 cm", "21 cm"], answer: 2, explain: "Radius = diameter ÷ 2 = 14 ÷ 2 = 7 cm. (28 cm would be double the diameter.)", level: 1 },
      { q: "How many diagonals does a quadrilateral have?", options: ["1", "2", "3", "4"], answer: 1, explain: "Joining the two pairs of opposite vertices gives 2 diagonals.", level: 2 },
      { q: "Two lines in a plane that never meet, however far they are extended, are called:", options: ["Intersecting lines", "Perpendicular lines", "Parallel lines", "Curved lines"], answer: 2, explain: "Lines in the same plane that never meet are parallel. Intersecting and perpendicular lines meet at a point.", level: 2 },
      { q: "Points that lie on the same line are called:", options: ["Concurrent points", "Adjacent points", "Parallel points", "Collinear points"], answer: 3, explain: "Points lying on one line are collinear.", level: 2 },
      { q: "A circular park has radius 35 m. A straight path runs across it through the centre. How long is the path?", options: ["35 m", "70 m", "105 m", "140 m"], answer: 1, explain: "A path through the centre is a diameter: 2 × 35 = 70 m.", level: 2 },
      { q: "Assertion (A): A ray has no definite length.\nReason (R): A ray starts at one point and extends endlessly in one direction.", options: ["Both A and R are true, and R is the correct explanation of A.", "Both A and R are true, but R is not the correct explanation of A.", "A is true, but R is false.", "A is false, but R is true."], answer: 0, explain: "Because a ray goes on forever in one direction, its length cannot be measured, which is what R says.", level: 2, keepOrder: true },
      { q: "Four points are marked so that no three of them lie on one line. How many different line segments can be drawn by joining pairs of these points?", options: ["4", "8", "6", "12"], answer: 2, explain: "Each of 4 points joins to 3 others, giving 4 × 3 = 12 joins, but each segment is counted twice, so 12 ÷ 2 = 6.", level: 3 },
      { q: "How many lines can be drawn through one given point, and how many through two given distinct points?", options: ["One; one", "Infinitely many; exactly one", "Infinitely many; infinitely many", "Two; one"], answer: 1, explain: "Any number of lines can pass through a single point, but two distinct points fix exactly one line.", level: 3 },
      { q: "In a circle with centre O, a chord AB passes through O and OA = 6 cm. What is the length of AB?", options: ["6 cm", "18 cm", "3 cm", "12 cm"], answer: 3, explain: "A chord through the centre is a diameter, so AB = 2 × 6 = 12 cm.", level: 3 },
      { q: "How many diagonals does a pentagon have?", options: ["10", "5", "7", "3"], answer: 1, explain: "Each vertex joins to 2 non-adjacent vertices: 5 × 2 = 10, counted twice, so 10 ÷ 2 = 5 diagonals.", level: 3 }
    ],
    written: [
      { q: "What is a ray?", a: "A ray is a part of a line that starts at one point and goes on endlessly in one direction.", marks: 1 },
      { q: "What is the line segment joining the centre of a circle to a point on the circle called?", a: "It is called the radius.", marks: 1 },
      { q: "Write two differences between a line and a line segment.", a: "A line has no end points and extends endlessly in both directions, so its length cannot be measured.\nA line segment has two end points and a fixed length that can be measured.", marks: 2 },
      { q: "What is a polygon? Name the polygon that has 5 sides.", a: "A polygon is a closed figure made of line segments only.\nA polygon with 5 sides is a pentagon.", marks: 2 },
      { q: "Distinguish between radius and diameter. If the radius of a circle is 9 cm, find its diameter.", a: "Radius is the segment from the centre to a point on the circle; diameter is a chord through the centre, equal to twice the radius.\nDiameter = 2 × 9 = 18 cm.", marks: 2 },
      { q: "Explain the interior, boundary and exterior of a closed curve with an example.", a: "For a circle drawn on paper: the boundary is the curve itself.\nThe interior is the region inside it, enclosed by the boundary.\nThe exterior is the region outside it.", marks: 3 },
      { q: "How many diagonals does a hexagon have? Explain.", a: "A hexagon has 6 vertices. From each vertex we can draw diagonals to the 3 non-adjacent vertices.\nThat gives 6 × 3 = 18, but each diagonal is counted twice.\nNumber of diagonals = 18 ÷ 2 = 9.", marks: 3 },
      { q: "Case study: A circular garden has centre O and radius 21 m. A straight path AB passes through O with A and B on the boundary. Another straight path CD joins two boundary points but does not pass through O.\n(i) What is AB called and what is its length?\n(ii) What is CD called?\n(iii) Which path is longer, AB or CD?", a: "(i) AB is a diameter; its length = 2 × 21 = 42 m.\n(ii) CD is a chord.\n(iii) AB is longer, because the diameter is the longest chord of a circle.", marks: 4, type: "case" }
    ]
  },
  "understanding-elementary-shapes": {
    mcq: [
      { q: "How many degrees does a right angle measure?", options: ["45°", "90°", "180°", "60°"], answer: 1, explain: "A right angle is a quarter turn, which is 90°.", level: 1 },
      { q: "What is the measure of a straight angle?", options: ["90°", "360°", "180°", "0°"], answer: 2, explain: "A straight angle forms a straight line and measures 180° (a half turn).", level: 1 },
      { q: "An angle smaller than 90° is called:", options: ["Acute", "Obtuse", "Right", "Reflex"], answer: 0, explain: "An acute angle measures between 0° and 90°.", level: 1 },
      { q: "A triangle with all three sides equal is called:", options: ["Scalene", "Isosceles", "Right-angled", "Equilateral"], answer: 3, explain: "Equal sides on all three sides make an equilateral triangle. An isosceles triangle has only two equal sides.", level: 1 },
      { q: "How many faces does a cube have?", options: ["4", "6", "8", "12"], answer: 1, explain: "A cube has 6 square faces. (It has 8 vertices and 12 edges.)", level: 1 },
      { q: "An angle of 125° is:", options: ["Acute", "Right", "Obtuse", "Reflex"], answer: 2, explain: "An obtuse angle lies between 90° and 180°, and 125° falls in that range.", level: 2 },
      { q: "The hour hand of a clock moves from 12 to 6. What fraction of a full turn is this?", options: ["A quarter turn", "A half turn", "Three-quarters of a turn", "A full turn"], answer: 1, explain: "From 12 to 6 is half way around the dial, so it is a half turn (180°).", level: 2 },
      { q: "How many edges does a cuboid have?", options: ["8", "10", "12", "6"], answer: 2, explain: "A cuboid has 12 edges, 8 vertices and 6 faces.", level: 2 },
      { q: "Ravi faces north and turns clockwise through 3 right angles. Which direction does he face now?", options: ["East", "South", "West", "North"], answer: 2, explain: "One right angle clockwise from north gives east, two gives south and three gives west.", level: 2 },
      { q: "Assertion (A): Every square is a rectangle.\nReason (R): A square has four right angles and its opposite sides are equal.", options: ["Both A and R are true, and R is the correct explanation of A.", "Both A and R are true, but R is not the correct explanation of A.", "A is true, but R is false.", "A is false, but R is true."], answer: 0, explain: "A rectangle is a quadrilateral with four right angles and equal opposite sides. A square has these properties, so it is a rectangle.", level: 2, keepOrder: true },
      { q: "The minute hand of a clock starts at 12 and turns clockwise through 270°. At which number does it stop?", options: ["3", "6", "9", "12"], answer: 2, explain: "Each number is 30° apart, so 270° is 9 numbers away: it stops at 9.", level: 3 },
      { q: "Which quadrilateral always has all four sides equal, but need not have right angles?", options: ["Rectangle", "Trapezium", "Rhombus", "Parallelogram"], answer: 2, explain: "A rhombus has four equal sides. A square is a special rhombus with right angles, but a rhombus in general does not have them.", level: 3 },
      { q: "A pyramid has a square base. How many faces and vertices does it have?", options: ["4 and 4", "6 and 5", "5 and 8", "5 and 5"], answer: 3, explain: "It has 1 square base and 4 triangular faces, so 5 faces. It has 4 base corners and 1 apex, so 5 vertices.", level: 3 },
      { q: "A prism has triangular bases. What are its numbers of faces, vertices and edges?", options: ["5 faces, 9 vertices, 6 edges", "4 faces, 4 vertices, 6 edges", "5 faces, 6 vertices, 9 edges", "6 faces, 5 vertices, 9 edges"], answer: 2, explain: "2 triangular bases plus 3 rectangular sides give 5 faces. Each base has 3 corners, so 6 vertices, and 3 + 3 + 3 = 9 edges.", level: 3 }
    ],
    written: [
      { q: "What is a reflex angle?", a: "A reflex angle is an angle greater than 180° and less than 360°.", marks: 1 },
      { q: "How many degrees are there in one full turn?", a: "360°.", marks: 1 },
      { q: "Classify triangles according to their sides, with one example of each.", a: "Equilateral: all three sides equal, e.g. 3 cm, 3 cm, 3 cm.\nIsosceles: two sides equal, e.g. 5 cm, 5 cm, 6 cm.\nScalene: no two sides equal, e.g. 3 cm, 4 cm, 5 cm.", marks: 2 },
      { q: "Differentiate between an acute angle and an obtuse angle with one example each.", a: "An acute angle is less than 90°, e.g. 40°.\nAn obtuse angle is more than 90° but less than 180°, e.g. 120°.", marks: 2 },
      { q: "Write two differences between a square and a rectangle.", a: "A square has all four sides equal, while a rectangle has only opposite sides equal.\nThe diagonals of a square cross each other at a right angle, but those of a general rectangle do not.", marks: 2 },
      { q: "Describe how to measure an angle using a protractor.", a: "Place the centre of the protractor on the vertex of the angle.\nAlign the zero line of the protractor with one arm of the angle.\nRead the scale where the other arm cuts it, using the scale that starts from 0° on the first arm.", marks: 3 },
      { q: "Write the number of faces, edges and vertices of a cuboid.", a: "A cuboid has 6 faces (rectangular).\nIt has 12 edges.\nIt has 8 vertices.", marks: 3 },
      { q: "Case study: Meera looks at a clock showing 3 o'clock. The minute hand points at 12 and the hour hand at 3.\n(i) What is the angle between the hands?\n(ii) The minute hand now turns from 12 to 6. Through how many degrees does it turn?\n(iii) What kind of angle do the hands form at 6 o'clock?", a: "(i) The angle between hands at 3 o'clock is 90°, a right angle.\n(ii) From 12 to 6 is a half turn = 180°.\n(iii) At 6 o'clock the hands are in opposite directions and form a straight angle of 180°.", marks: 4, type: "case" }
    ]
  },
  "integers": {
    mcq: [
      { q: "Which is the greatest of these integers?", options: ["−9", "−5", "−12", "−1"], answer: 3, explain: "On the number line, the integer farthest to the right is greatest. −1 is to the right of −5, −9 and −12.", level: 1 },
      { q: "What is the opposite of +8?", options: ["8", "−8", "1/8", "0"], answer: 1, explain: "The opposite of +8 is −8, because 8 + (−8) = 0.", level: 1 },
      { q: "Which of these is NOT an integer?", options: ["−4", "0", "3/2", "7"], answer: 2, explain: "3/2 is a fraction lying between 1 and 2. Integers are whole numbers and their negatives.", level: 1 },
      { q: "What is the predecessor of −5?", options: ["−6", "−4", "−5", "6"], answer: 0, explain: "The predecessor is 1 less: −5 − 1 = −6. (−4 is the successor.)", level: 1 },
      { q: "What is 5 + (−5)?", options: ["10", "−10", "0", "25"], answer: 2, explain: "A number and its opposite add up to zero.", level: 1 },
      { q: "Find (−7) + 4.", options: ["−11", "−3", "3", "11"], answer: 1, explain: "The signs differ, so subtract 7 − 4 = 3 and take the sign of the bigger absolute value (negative): −3.", level: 2 },
      { q: "Find 8 − (−3).", options: ["11", "5", "−5", "−11"], answer: 0, explain: "Subtracting −3 is the same as adding its opposite: 8 + 3 = 11.", level: 2 },
      { q: "At 6 am the temperature in Shimla was −4°C. By noon it rose by 9°C. What was the temperature at noon?", options: ["−13°C", "13°C", "−5°C", "5°C"], answer: 3, explain: "−4 + 9 = 5, so the temperature was 5°C.", level: 2 },
      { q: "In a building, the ground floor is 0 and the basement levels are −1, −2, and so on. A lift is at basement −2 and goes up 5 floors. At which level does it stop?", options: ["−7", "7", "3", "−3"], answer: 2, explain: "−2 + 5 = 3, so the lift stops at floor 3. (−7 comes from going down 5.)", level: 2 },
      { q: "Assertion (A): The sum of two negative integers is always negative.\nReason (R): To add two negative integers, add their numerical values and put a minus sign.", options: ["Both A and R are true, and R is the correct explanation of A.", "Both A and R are true, but R is not the correct explanation of A.", "A is true, but R is false.", "A is false, but R is true."], answer: 0, explain: "For example (−6) + (−3) = −(6 + 3) = −9. The rule in R is why the sum stays negative.", level: 2, keepOrder: true },
      { q: "Find the value of (−12) + 7 + (−3) + 8.", options: ["−10", "10", "−20", "0"], answer: 3, explain: "Add the positives: 7 + 8 = 15. Add the negatives: −12 − 3 = −15. Then 15 + (−15) = 0.", level: 3 },
      { q: "Which integer must be added to −15 to get 9?", options: ["−6", "6", "24", "−24"], answer: 2, explain: "Required number = 9 − (−15) = 9 + 15 = 24. Check: −15 + 24 = 9.", level: 3 },
      { q: "Find −20 − (−35) + (−10).", options: ["5", "−65", "25", "−5"], answer: 0, explain: "−20 + 35 − 10 = 15 − 10 = 5.", level: 3 },
      { q: "A submarine is 120 m below sea level (−120 m). It rises 45 m and then dives 70 m. Where is it now?", options: ["−95 m", "−5 m", "−145 m", "−235 m"], answer: 2, explain: "−120 + 45 = −75, and −75 − 70 = −145. So it is 145 m below sea level.", level: 3 }
    ],
    written: [
      { q: "Write all the integers between −3 and 3.", a: "−2, −1, 0, 1, 2.", marks: 1 },
      { q: "Write the additive inverse of −15.", a: "The additive inverse of −15 is 15, since −15 + 15 = 0.", marks: 1 },
      { q: "Arrange −8, 3, −2, 0, −11 in ascending order.", a: "On the number line, numbers increase to the right.\nAscending order: −11, −8, −2, 0, 3.", marks: 2 },
      { q: "Find (−25) + 30 + (−15).", a: "Add the positive: 30. Add the negatives: −25 − 15 = −40.\n30 + (−40) = −10.", marks: 2 },
      { q: "Subtract −9 from 4.", a: "4 − (−9) = 4 + 9 (adding the opposite)\n= 13.", marks: 2 },
      { q: "Using a number line, find (−3) + (−4).", a: "Start at 0 and move 3 units to the left to reach −3.\nFrom −3 move 4 more units to the left.\nWe reach −7, so (−3) + (−4) = −7.", marks: 3 },
      { q: "Simplify 18 − (−7) + (−25) − (−10).", a: "18 − (−7) = 18 + 7 = 25.\n25 + (−25) = 0.\n0 − (−10) = 0 + 10 = 10.", marks: 3 },
      { q: "Case study: In a quiz, each correct answer scores +5 and each wrong answer scores −2. Priya gave 8 correct and 5 wrong answers. Sam gave 6 correct and 3 wrong answers.\n(i) Find Priya's score.\n(ii) Find Sam's score.\n(iii) Who won, and by how many marks?", a: "(i) Priya: 8 × 5 = 40 and 5 × (−2) = −10, total 40 − 10 = 30.\n(ii) Sam: 6 × 5 = 30 and 3 × (−2) = −6, total 30 − 6 = 24.\n(iii) Priya won by 30 − 24 = 6 marks.", marks: 4, type: "case" }
    ]
  },
  "fractions": {
    mcq: [
      { q: "What type of fraction is 3/7?", options: ["Proper", "Improper", "Mixed", "Whole"], answer: 0, explain: "The numerator 3 is less than the denominator 7, so it is a proper fraction.", level: 1 },
      { q: "Which of these is an improper fraction?", options: ["3/8", "1 1/2", "9/5", "2/3"], answer: 2, explain: "In 9/5 the numerator is larger than the denominator. 1 1/2 is a mixed fraction, and 3/8 and 2/3 are proper.", level: 1 },
      { q: "Which fraction is equivalent to 1/2?", options: ["2/3", "3/6", "1/3", "2/6"], answer: 1, explain: "Multiplying top and bottom of 1/2 by 3 gives 3/6. (2/6 simplifies to 1/3.)", level: 1 },
      { q: "Write 7/3 as a mixed fraction.", options: ["3 1/2", "1 2/3", "2 2/3", "2 1/3"], answer: 3, explain: "7 ÷ 3 gives quotient 2 and remainder 1, so 7/3 = 2 1/3.", level: 1 },
      { q: "What is the denominator of the fraction 5/8?", options: ["5", "8", "13", "3"], answer: 1, explain: "The denominator is the number below the line: it shows into how many equal parts the whole is divided.", level: 1 },
      { q: "What is 3/4 + 1/6?", options: ["4/10", "5/12", "11/12", "1/3"], answer: 2, explain: "Use the common denominator 12: 9/12 + 2/12 = 11/12. (Adding tops and bottoms to get 4/10 is wrong.)", level: 2 },
      { q: "Which comparison is correct for 5/6 and 7/9?", options: ["5/6 < 7/9", "5/6 = 7/9", "They cannot be compared", "5/6 > 7/9"], answer: 3, explain: "With denominator 18: 5/6 = 15/18 and 7/9 = 14/18, so 5/6 is greater.", level: 2 },
      { q: "What is 5/6 − 1/3?", options: ["4/3", "1/2", "4/6", "1/3"], answer: 1, explain: "1/3 = 2/6, so 5/6 − 2/6 = 3/6 = 1/2.", level: 2 },
      { q: "Mohan ate 2/8 of a pizza and Sita ate 3/8 of it. What fraction of the pizza is left?", options: ["3/8", "5/8", "1/8", "5/16"], answer: 0, explain: "Eaten = 2/8 + 3/8 = 5/8, so left = 1 − 5/8 = 3/8.", level: 2 },
      { q: "Assertion (A): 4/6 and 2/3 are equivalent fractions.\nReason (R): Multiplying the numerator and denominator of 2/3 by the same number 2 gives 4/6.", options: ["Both A and R are true, and R is the correct explanation of A.", "Both A and R are true, but R is not the correct explanation of A.", "A is true, but R is false.", "A is false, but R is true."], answer: 0, explain: "Multiplying the top and bottom by the same non-zero number does not change the value, so 4/6 = 2/3.", level: 2, keepOrder: true },
      { q: "Which of these fractions is in its simplest form?", options: ["6/8", "9/12", "3/4", "12/16"], answer: 2, explain: "6/8, 9/12 and 12/16 can all be reduced to 3/4. The numerator and denominator of 3/4 have no common factor other than 1.", level: 3 },
      { q: "Asha has a ribbon 3 1/2 m long. She cuts off 1 3/4 m. How much is left?", options: ["2 1/4 m", "1 3/4 m", "1 1/4 m", "2 3/4 m"], answer: 1, explain: "3 1/2 − 1 3/4 = 14/4 − 7/4 = 7/4 = 1 3/4 m.", level: 3 },
      { q: "Which is the greatest of 3/5, 2/3, 1/2 and 7/10?", options: ["3/5", "2/3", "1/2", "7/10"], answer: 3, explain: "Use denominator 30: 3/5 = 18/30, 2/3 = 20/30, 1/2 = 15/30 and 7/10 = 21/30. The greatest is 7/10.", level: 3 },
      { q: "What fraction must be added to 3/8 to get 7/8?", options: ["5/8", "10/8", "1/2", "1/4"], answer: 2, explain: "7/8 − 3/8 = 4/8 = 1/2.", level: 3 }
    ],
    written: [
      { q: "Write the fraction for 'three out of eight equal parts'.", a: "3/8.", marks: 1 },
      { q: "Convert 11/4 into a mixed fraction.", a: "11 ÷ 4 gives quotient 2, remainder 3.\nSo 11/4 = 2 3/4.", marks: 1 },
      { q: "Add 2/5 + 3/10.", a: "Common denominator 10: 2/5 = 4/10.\n4/10 + 3/10 = 7/10.", marks: 2 },
      { q: "Convert 3 2/5 into an improper fraction.", a: "Multiply the whole number by the denominator and add the numerator: 3 × 5 + 2 = 17.\nSo 3 2/5 = 17/5.", marks: 2 },
      { q: "Write the equivalent fraction of 3/7 with denominator 35.", a: "35 ÷ 7 = 5.\nMultiply top and bottom by 5: 3/7 = 15/35.", marks: 2 },
      { q: "Subtract: 5 1/2 − 2 3/4.", a: "Convert to improper fractions: 11/2 − 11/4.\n11/2 = 22/4, so 22/4 − 11/4 = 11/4.\n11/4 = 2 3/4.", marks: 3 },
      { q: "Arrange 2/3, 3/4 and 5/6 in descending order.", a: "The LCM of 3, 4, 6 is 12.\n2/3 = 8/12, 3/4 = 9/12, 5/6 = 10/12.\nDescending order: 5/6, 3/4, 2/3.", marks: 3 },
      { q: "Case study: A farmer divides his field. 2/5 of the field has wheat, 1/4 has rice, and the rest has vegetables.\n(i) What fraction of the field has wheat and rice together?\n(ii) What fraction has vegetables?\n(iii) Which crop covers more area, wheat or rice?", a: "(i) 2/5 + 1/4 = 8/20 + 5/20 = 13/20.\n(ii) Vegetables = 1 − 13/20 = 7/20.\n(iii) Wheat = 8/20 and rice = 5/20, so wheat covers more area.", marks: 4, type: "case" }
    ]
  }
});
