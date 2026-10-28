// Class 7 Mathematics practice bank, part 2: Geometric Twins to Finding the Unknown (Ganita Prakash Part II).
StudyData.addPractice(7, "maths", {
  "geometric-twins": {
    mcq: [
      { q: "Two circles are congruent when they have the same", options: ["radius", "centre", "position on the page", "tangent"], answer: 0, explain: "A circle is fixed in size by its radius, so equal radii make congruent circles. The position does not matter.", level: 1 },
      { q: "If △ABC ≅ △PQR, which vertex corresponds to B?", options: ["P", "Q", "R", "A"], answer: 1, explain: "The vertices are matched in order: A with P, B with Q, C with R.", level: 1 },
      { q: "Which pair of figures is always congruent?", options: ["Two rectangles of area 24 cm²", "Two rhombuses with side 5 cm", "Two squares of side 5 cm", "Two triangles with perimeter 12 cm"], answer: 2, explain: "A square is fixed by its side. Rectangles with equal area, rhombuses with equal sides and triangles with equal perimeter can still differ in shape.", level: 1 },
      { q: "In the RHS rule for congruent triangles, the letters stand for", options: ["Rectangle, Height, Side", "Ratio, Hypotenuse, Side", "Right angle, Height, Sum", "Right angle, Hypotenuse, Side"], answer: 3, explain: "RHS means a right angle, the hypotenuse and one other side are equal.", level: 1 },
      { q: "If two figures are congruent, their areas are", options: ["different", "equal", "half of each other", "not comparable"], answer: 1, explain: "Congruent figures can be placed exactly on each other, so they cover the same area.", level: 1 },
      { q: "In △ABC and △DEF, ∠A = ∠D = 40°, ∠B = ∠E = 60° and AB = DE = 7 cm. The triangles are congruent by", options: ["SAS", "SSS", "ASA", "RHS"], answer: 2, explain: "Two angles and the side between them are equal. AB lies between ∠A and ∠B, so this is ASA.", level: 2 },
      { q: "Triangles with sides 3 cm, 4 cm, 5 cm and 5 cm, 3 cm, 4 cm are congruent by", options: ["SSS", "SAS", "ASA", "AAA"], answer: 0, explain: "All three sides of one triangle equal the three sides of the other, in any order, so SSS applies.", level: 2 },
      { q: "In two triangles, AB = DE = 6 cm, BC = EF = 5 cm and ∠A = ∠D = 50°. Can we say the triangles are congruent?", options: ["Yes, by SAS", "Not necessarily, since the equal angle is not between the equal sides", "Yes, by ASA", "No, because the triangles are right-angled"], answer: 1, explain: "The angle ∠A lies opposite BC, not between AB and BC, so SAS does not apply.", level: 2 },
      { q: "Assertion (A): All squares are congruent to each other.\nReason (R): Every square has four right angles.", options: ["Both A and R are true, and R is the correct explanation of A.", "Both A and R are true, but R is not the correct explanation of A.", "A is true, but R is false.", "A is false, but R is true."], answer: 3, explain: "A is false because squares of different sides are not congruent. R is true, but equal angles do not decide the size.", level: 2, keepOrder: true },
      { q: "A tailor cuts two triangular flaps. In each, the hypotenuse is 13 cm, one side is 5 cm and one angle is 90°.\nWhich rule shows the flaps are congruent?", options: ["SAS", "ASA", "RHS", "AAA"], answer: 2, explain: "Both are right-angled with equal hypotenuse and one equal side, which is RHS.", level: 2 },
      { q: "△ABC ≅ △DEF with ∠A = 50° and ∠B = 60°. Then ∠F is", options: ["60°", "50°", "80°", "70°"], answer: 3, explain: "∠C = 180° − 50° − 60° = 70°, and C corresponds to F, so ∠F = 70°.", level: 3 },
      { q: "△ABC ≅ △XYZ, AB = 5 cm and BC = 7 cm. The perimeter of △XYZ is 21 cm.\nThe length XZ is", options: ["9 cm", "7 cm", "12 cm", "21 cm"], answer: 0, explain: "AC = 21 − 5 − 7 = 9 cm, and AC corresponds to XZ.", level: 3 },
      { q: "In an isosceles △ABC with AB = AC, D is the midpoint of BC. Which rule shows △ABD ≅ △ACD?", options: ["RHS", "SSS", "ASA", "AAA"], answer: 1, explain: "AB = AC, BD = DC and AD is common, so all three sides match: SSS.", level: 3 },
      { q: "Meena says, \"A triangle with angles 30°, 60°, 90° and shortest side 3 cm is congruent to every triangle with those angles.\"\nWhat is the correct view?", options: ["She is wrong: equal angles do not make the sides equal, so a 5 cm shortest side gives a triangle that is not congruent", "She is right, because AAA is a congruence rule", "She is right, because the angles add up to 180°", "She is wrong, because 30°, 60°, 90° triangles do not exist"], answer: 0, explain: "A bigger or smaller triangle can have the same angles. Congruence needs equal sizes as well, so AAA does not work.", level: 3 }
    ],
    written: [
      { q: "State the SAS rule for congruence of two triangles.", a: "Two triangles are congruent if two sides and the angle between them in one triangle are equal to the corresponding two sides and the included angle of the other.", marks: 1 },
      { q: "If △ABC ≅ △LMN, which side of △LMN is equal to BC?", a: "B corresponds to M and C to N, so BC = MN.", marks: 1 },
      { q: "Why is AAA not a rule for congruence? Give an example.", a: "Equal angles only fix the shape, not the size.\nExample: an equilateral triangle of side 3 cm and one of side 6 cm both have angles 60°, but they are not congruent.", marks: 2 },
      { q: "In △PQR and △XYZ, ∠P = ∠X = 90°, PQ = XY = 8 cm and QR = YZ = 10 cm. Name the rule showing they are congruent and write the side equal to PR.", a: "Both are right-angled, the hypotenuses QR and YZ are equal and a side PQ = XY is equal, so △PQR ≅ △XYZ by RHS.\nCorresponding sides are equal, so PR = XZ.", marks: 2 },
      { q: "Two triangles have two sides of 5 cm and 7 cm and an angle of 40° which is not between these sides. Can we conclude they are congruent? Explain.", a: "No. Two sides and an angle that is not between them (SSA) may not fix a single triangle.\nSo the two triangles may differ, and we cannot conclude congruence.", marks: 2 },
      { q: "Line segments AB and CD cut each other at O, with AO = OB and CO = OD. Show that △AOC ≅ △BOD and write one more equal pair of sides.", a: "In △AOC and △BOD:\nAO = BO (given), CO = DO (given),\n∠AOC = ∠BOD (vertically opposite angles).\nSo △AOC ≅ △BOD by SAS.\nBy corresponding parts, AC = BD.", marks: 3 },
      { q: "In △ABC, AB = AC, and D is the midpoint of BC. Show that ∠B = ∠C.", a: "In △ABD and △ACD: AB = AC (given), BD = DC (D is the midpoint), AD = AD (common).\nSo △ABD ≅ △ACD by SSS.\nCorresponding angles are equal, so ∠B = ∠C.", marks: 3 },
      { q: "Case study: A school makes triangular flags. Flag P has sides 30 cm, 40 cm and 50 cm. Flag Q has sides 50 cm, 30 cm and 40 cm. Flag R has the same three angles as P, but its sides are 60 cm, 80 cm and 100 cm.\n(i) Are P and Q congruent? Name the rule.\n(ii) Is R congruent to P? Why?\n(iii) Find the length of border cloth needed for Q.", a: "(i) Yes. All three sides of P equal the three sides of Q, so P ≅ Q by SSS.\n(ii) No. R has the same angles but its sides are twice as long, so its size is different and it is not congruent to P.\n(iii) Border = 30 + 40 + 50 = 120 cm.", marks: 4, type: "case" }
    ]
  },
  "operations-with-integers": {
    mcq: [
      { q: "(−6) × 7 equals", options: ["42", "−13", "1", "−42"], answer: 3, explain: "Negative × positive gives a negative number: 6 × 7 = 42, so the product is −42.", level: 1 },
      { q: "0 ÷ (−8) equals", options: ["−8", "0", "Not defined", "8"], answer: 1, explain: "Zero divided by a non-zero integer is 0. Only division by zero is not defined.", level: 1 },
      { q: "The product of four negative integers is", options: ["negative", "zero", "positive", "cannot be said"], answer: 2, explain: "An even number of negative factors gives a positive product.", level: 1 },
      { q: "(−1) × 25 equals", options: ["25", "−25", "1", "0"], answer: 1, explain: "Multiplying by −1 gives the opposite of the number, which is −25.", level: 1 },
      { q: "48 ÷ (−6) equals", options: ["−8", "8", "−42", "−288"], answer: 0, explain: "Different signs give a negative quotient: 48 ÷ 6 = 8, so the answer is −8.", level: 1 },
      { q: "(−4) × 5 × (−2) equals", options: ["−40", "−20", "40", "20"], answer: 2, explain: "Two negative factors give a positive product: 4 × 5 × 2 = 40.", level: 2 },
      { q: "Using the distributive property, (−7) × 102 equals", options: ["−686", "714", "−714", "686"], answer: 2, explain: "(−7) × (100 + 2) = −700 + (−14) = −714.", level: 2 },
      { q: "Assertion (A): The product of five negative integers is positive.\nReason (R): The product of two negative integers is positive.", options: ["Both A and R are true, and R is the correct explanation of A.", "Both A and R are true, but R is not the correct explanation of A.", "A is true, but R is false.", "A is false, but R is true."], answer: 3, explain: "Five is an odd number of negative factors, so the product is negative and A is false. R is a true rule.", level: 2, keepOrder: true },
      { q: "At 6 am the temperature is 4°C. It falls by 3°C every hour.\nWhat is the temperature at 11 am?", options: ["−15°C", "−1°C", "11°C", "−11°C"], answer: 3, explain: "Change in 5 hours = 5 × (−3) = −15. New temperature = 4 + (−15) = −11°C.", level: 2 },
      { q: "A shopkeeper loses ₹15 on each of 12 toys.\nWhat is the total result?", options: ["Gain of ₹180", "Loss of ₹27", "Loss of ₹18", "Loss of ₹180"], answer: 3, explain: "12 × (−15) = −180, which is a loss of ₹180.", level: 2 },
      { q: "The value of (−3) × (−4) − 5 × (−2) is", options: ["2", "22", "−22", "−2"], answer: 1, explain: "(−3)(−4) = 12 and 5 × (−2) = −10. So 12 − (−10) = 12 + 10 = 22.", level: 3 },
      { q: "Which integer x makes (−7) × x = 63?", options: ["−56", "9", "56", "−9"], answer: 3, explain: "x = 63 ÷ (−7) = −9. Check: (−7) × (−9) = 63.", level: 3 },
      { q: "The value of (−12) ÷ 4 × (−3), working from left to right, is", options: ["−9", "1", "9", "−1"], answer: 2, explain: "(−12) ÷ 4 = −3 and (−3) × (−3) = 9. Dividing by (4 × (−3)) would give 1, which is a different order of working.", level: 3 },
      { q: "(−8) × 15 + (−8) × (−15) equals", options: ["−240", "−120", "240", "0"], answer: 3, explain: "(−8) × 15 = −120 and (−8) × (−15) = 120. The sum is 0. Equivalently, (−8) × (15 + (−15)) = (−8) × 0 = 0.", level: 3 }
    ],
    written: [
      { q: "Find (−15) ÷ (−3).", a: "Negative ÷ negative is positive: 15 ÷ 3 = 5.", marks: 1 },
      { q: "Evaluate 7 × (−8).", a: "Positive × negative is negative: 7 × 8 = 56, so the answer is −56.", marks: 1 },
      { q: "Find the value of (−6) × (−5) + (−4) × 3.", a: "(−6) × (−5) = 30 and (−4) × 3 = −12.\nSum = 30 + (−12) = 18.", marks: 2 },
      { q: "Use the distributive property to find (−12) × 25.", a: "(−12) × (20 + 5) = (−12) × 20 + (−12) × 5 = −240 + (−60) = −300.", marks: 2 },
      { q: "Complete the pattern and explain why (−3) × (−2) = 6: 3 × (−2) = −6, 2 × (−2) = −4, 1 × (−2) = −2, 0 × (−2) = 0, (−1) × (−2) = ?", a: "Each step the product increases by 2: −6, −4, −2, 0, then 2, 4, 6.\nSo (−1) × (−2) = 2, (−2) × (−2) = 4 and (−3) × (−2) = 6. A negative times a negative is positive.", marks: 2 },
      { q: "Evaluate (−36) ÷ 4 + (−2) × (−5) − 3.", a: "(−36) ÷ 4 = −9.\n(−2) × (−5) = 10.\nSo −9 + 10 − 3 = −2.", marks: 3 },
      { q: "A water tank loses 15 litres every hour. By how much does the level change in 8 hours? If it holds 500 litres at 9 am, how much is left at 5 pm?", a: "Change in 8 hours = 8 × (−15) = −120 litres.\nTime from 9 am to 5 pm = 8 hours.\nWater left = 500 + (−120) = 380 litres.", marks: 3 },
      { q: "Case study: In a quiz, a correct answer scores +4, a wrong answer scores −2 and an unanswered question scores 0. Riya gave 9 correct and 5 wrong answers and left 2 unanswered. Arjun gave 6 correct and 10 wrong answers.\n(i) Find Riya's score.\n(ii) Find Arjun's score.\n(iii) Who scored more, and by how much?", a: "(i) Riya: 9 × 4 + 5 × (−2) + 0 = 36 − 10 = 26.\n(ii) Arjun: 6 × 4 + 10 × (−2) = 24 − 20 = 4.\n(iii) Riya scored more, by 26 − 4 = 22 marks.", marks: 4, type: "case" }
    ]
  },
  "finding-common-ground": {
    mcq: [
      { q: "The smallest prime number is", options: ["1", "3", "5", "2"], answer: 3, explain: "2 has exactly two factors, 1 and 2. The number 1 is not prime.", level: 1 },
      { q: "Which number is composite?", options: ["51", "13", "17", "2"], answer: 0, explain: "51 = 3 × 17, so it has more than two factors. The others are prime.", level: 1 },
      { q: "The HCF of two co-prime numbers is", options: ["0", "their product", "1", "their sum"], answer: 2, explain: "Co-prime numbers share no factor except 1, so their HCF is 1.", level: 1 },
      { q: "The LCM of 4 and 10 is", options: ["40", "20", "2", "14"], answer: 1, explain: "4 = 2² and 10 = 2 × 5, so LCM = 2² × 5 = 20.", level: 1 },
      { q: "Which number has the prime factorisation 2³ × 5?", options: ["40", "30", "80", "15"], answer: 0, explain: "2³ × 5 = 8 × 5 = 40.", level: 1 },
      { q: "The HCF of 36 and 60 is", options: ["6", "180", "12", "4"], answer: 2, explain: "36 = 2² × 3² and 60 = 2² × 3 × 5. Common part: 2² × 3 = 12.", level: 2 },
      { q: "The LCM of 12 and 15 is", options: ["3", "60", "180", "27"], answer: 1, explain: "12 = 2² × 3 and 15 = 3 × 5. LCM = 2² × 3 × 5 = 60.", level: 2 },
      { q: "Assertion (A): 2 is the only even prime number.\nReason (R): Every even number has exactly two factors.", options: ["Both A and R are true, and R is the correct explanation of A.", "Both A and R are true, but R is not the correct explanation of A.", "A is true, but R is false.", "A is false, but R is true."], answer: 2, explain: "A is true: every other even number is divisible by 2 as well as by 1 and itself. R is false, since 8 has four factors.", level: 2, keepOrder: true },
      { q: "Two lights flash every 20 seconds and every 30 seconds. They flash together now.\nAfter how many seconds will they flash together again?", options: ["10", "50", "600", "60"], answer: 3, explain: "LCM of 20 and 30 = 60, so they flash together again after 60 seconds.", level: 2 },
      { q: "Meena has 48 red beads and 72 green beads. She makes the greatest number of identical necklaces using all the beads.\nHow many necklaces can she make?", options: ["12", "6", "24", "144"], answer: 2, explain: "HCF of 48 and 72 = 24, so she can make 24 identical necklaces.", level: 2 },
      { q: "The HCF of two numbers is 6 and their LCM is 72. One number is 18. The other is", options: ["24", "12", "36", "4"], answer: 0, explain: "Product = 6 × 72 = 432. Other number = 432 ÷ 18 = 24.", level: 3 },
      { q: "The smallest number which leaves remainder 3 when divided by 6, 8 and 12 is", options: ["24", "21", "27", "3"], answer: 2, explain: "LCM of 6, 8, 12 = 24. Adding the remainder: 24 + 3 = 27.", level: 3 },
      { q: "The greatest number which divides 62 and 87 leaving remainder 2 each time is", options: ["10", "2", "15", "5"], answer: 3, explain: "62 − 2 = 60 and 87 − 2 = 85 must be divisible by the number. HCF of 60 and 85 is 5 (and 5 > 2). Check: 62 = 5 × 12 + 2 and 87 = 5 × 17 + 2.", level: 3 },
      { q: "The smallest 3-digit number divisible by 4, 6 and 9 is", options: ["72", "100", "144", "108"], answer: 3, explain: "LCM of 4, 6, 9 = 36. Multiples: 72 (2-digit), 108 (3-digit), so 108.", level: 3 }
    ],
    written: [
      { q: "Write the prime factorisation of 84.", a: "84 = 2 × 42 = 2 × 2 × 21 = 2² × 3 × 7.", marks: 1 },
      { q: "Are 14 and 25 co-prime? Give a reason.", a: "14 = 2 × 7 and 25 = 5². They have no common prime factor, so the only common factor is 1. Yes, they are co-prime.", marks: 1 },
      { q: "Find the HCF of 42 and 70.", a: "42 = 2 × 3 × 7 and 70 = 2 × 5 × 7.\nCommon primes: 2 and 7, so HCF = 2 × 7 = 14.", marks: 2 },
      { q: "Find the LCM of 18 and 24.", a: "18 = 2 × 3² and 24 = 2³ × 3.\nTake the greatest powers: LCM = 2³ × 3² = 72.", marks: 2 },
      { q: "List all prime numbers between 20 and 40.", a: "Check each number: 23, 29, 31 and 37 have no factors other than 1 and themselves.\nThe primes are 23, 29, 31, 37.", marks: 2 },
      { q: "Three bells ring every 6, 8 and 12 minutes. They ring together at 8:00 am. When will they next ring together?", a: "Find the LCM of 6, 8, 12: 6 = 2 × 3, 8 = 2³, 12 = 2² × 3.\nLCM = 2³ × 3 = 24 minutes.\nThey ring together again at 8:24 am.", marks: 3 },
      { q: "Two ribbons of length 36 m and 54 m are cut into pieces of equal, greatest possible length with none left over. Find the length of each piece and the total number of pieces.", a: "36 = 2² × 3² and 54 = 2 × 3³, so HCF = 2 × 3² = 18.\nLength of each piece = 18 m.\nPieces = 36 ÷ 18 + 54 ÷ 18 = 2 + 3 = 5.", marks: 3 },
      { q: "Case study: A shop has 60 notebooks and 84 pens. The owner packs them into identical kits so that nothing is left over, and wants as many kits as possible.\n(i) Find the number of kits.\n(ii) How many notebooks and pens are in each kit?\n(iii) How many items are there in one kit?", a: "(i) 60 = 2² × 3 × 5 and 84 = 2² × 3 × 7, so HCF = 2² × 3 = 12 kits.\n(ii) Notebooks per kit = 60 ÷ 12 = 5; pens per kit = 84 ÷ 12 = 7.\n(iii) Items per kit = 5 + 7 = 12.", marks: 4, type: "case" }
    ]
  },
  "another-peek-beyond-the-point": {
    mcq: [
      { q: "0.7 × 0.2 equals", options: ["1.4", "0.014", "14", "0.14"], answer: 3, explain: "7 × 2 = 14 and there are 2 decimal places in all, so the answer is 0.14.", level: 1 },
      { q: "3.5 × 10 equals", options: ["0.35", "35", "350", "3.50"], answer: 1, explain: "Multiplying by 10 moves the decimal point one place right.", level: 1 },
      { q: "8.4 ÷ 100 equals", options: ["84", "0.84", "0.084", "840"], answer: 2, explain: "Dividing by 100 moves the decimal point two places left: 0.084.", level: 1 },
      { q: "6 ÷ 0.3 equals", options: ["20", "2", "0.2", "18"], answer: 0, explain: "6 ÷ 0.3 = 60 ÷ 3 = 20.", level: 1 },
      { q: "Multiplying a number by 0.1 is the same as dividing it by", options: ["0.1", "100", "1", "10"], answer: 3, explain: "0.1 = 1/10, so multiplying by 0.1 is the same as dividing by 10.", level: 1 },
      { q: "2.4 × 0.05 equals", options: ["0.12", "1.2", "0.012", "12"], answer: 0, explain: "24 × 5 = 120 and there are 3 decimal places, so 0.120 = 0.12.", level: 2 },
      { q: "7.5 ÷ 0.25 equals", options: ["3", "0.3", "30", "300"], answer: 2, explain: "Multiply both by 100: 750 ÷ 25 = 30.", level: 2 },
      { q: "Assertion (A): 12.5 × 100 = 1250.\nReason (R): Multiplying by 100 moves the decimal point two places to the left.", options: ["Both A and R are true, and R is the correct explanation of A.", "Both A and R are true, but R is not the correct explanation of A.", "A is true, but R is false.", "A is false, but R is true."], answer: 2, explain: "A is true: 12.5 × 100 = 1250. R is false: multiplying by 100 moves the point to the right.", level: 2, keepOrder: true },
      { q: "Rice costs ₹42.50 per kg.\nWhat is the cost of 2.4 kg?", options: ["₹10.20", "₹102", "₹1,020", "₹44.90"], answer: 1, explain: "42.5 × 2.4 = 85 + 17 = ₹102.", level: 2 },
      { q: "A ribbon 4.5 m long is cut into pieces of 0.75 m each.\nHow many pieces are made?", options: ["0.6", "60", "3.75", "6"], answer: 3, explain: "4.5 ÷ 0.75 = 450 ÷ 75 = 6 pieces.", level: 2 },
      { q: "0.8 ÷ 0.04 equals", options: ["2", "20", "0.2", "200"], answer: 1, explain: "Multiply both by 100: 80 ÷ 4 = 20.", level: 3 },
      { q: "A car runs 12.5 km on 1 litre of petrol. Petrol costs ₹105.50 per litre.\nWhat is the cost of petrol for 87.5 km?", options: ["₹73.85", "₹1,108.50", "₹7,385", "₹738.50"], answer: 3, explain: "Petrol = 87.5 ÷ 12.5 = 7 litres. Cost = 7 × 105.50 = ₹738.50.", level: 3 },
      { q: "Which expression has the smallest value?", options: ["6 × 5", "6 ÷ 0.5", "6 ÷ 5", "6 × 0.5"], answer: 2, explain: "The values are 30, 12, 1.2 and 3. The smallest is 6 ÷ 5 = 1.2.", level: 3 },
      { q: "The value of 3.6 × 2.5 ÷ 0.9 is", options: ["1", "8.1", "100", "10"], answer: 3, explain: "3.6 × 2.5 = 9, and 9 ÷ 0.9 = 10.", level: 3 }
    ],
    written: [
      { q: "Find 4.56 × 1000.", a: "Move the decimal point 3 places to the right: 4.56 × 1000 = 4560.", marks: 1 },
      { q: "Find 0.9 ÷ 0.3.", a: "9 ÷ 3 = 3.", marks: 1 },
      { q: "Find 3.2 × 0.15.", a: "32 × 15 = 480.\nThere are 1 + 2 = 3 decimal places, so 3.2 × 0.15 = 0.480 = 0.48.", marks: 2 },
      { q: "Cloth costs ₹85.50 per metre. Find the cost of 3.2 m.", a: "Cost = 85.50 × 3.2.\n85.5 × 3 = 256.5 and 85.5 × 0.2 = 17.1.\nTotal = ₹273.60.", marks: 2 },
      { q: "Without dividing, explain why 25 ÷ 0.5 is greater than 25. Then find its value.", a: "Dividing by a number less than 1 makes the answer larger.\n25 ÷ 0.5 = 250 ÷ 5 = 50.", marks: 2 },
      { q: "A can holds 2.5 litres of juice. Juice from 6 full cans is poured into glasses of 0.25 litre each. How many glasses are filled?", a: "Total juice = 6 × 2.5 = 15 litres.\nGlasses = 15 ÷ 0.25 = 1500 ÷ 25 = 60.", marks: 3 },
      { q: "Estimate 4.9 × 6.1 and then find the exact product. Show that the answer is reasonable.", a: "Estimate: 4.9 ≈ 5 and 6.1 ≈ 6, so the product is about 5 × 6 = 30.\nExact: 49 × 61 = 2989 and there are 2 decimal places, so 29.89.\n29.89 is close to 30, so the answer is reasonable.", marks: 3 },
      { q: "Case study: Anita buys 2.5 kg of tomatoes at ₹24 per kg, 1.5 kg of onions at ₹18.40 per kg and 0.25 kg of ginger at ₹120 per kg.\n(i) Find the cost of the tomatoes.\n(ii) Find the cost of the onions.\n(iii) Find the total bill.", a: "(i) 2.5 × 24 = ₹60.\n(ii) 1.5 × 18.40 = ₹27.60.\n(iii) Ginger = 0.25 × 120 = ₹30.\nTotal = 60 + 27.60 + 30 = ₹117.60.", marks: 4, type: "case" }
    ]
  },
  "connecting-the-dots": {
    mcq: [
      { q: "The mean of 3, 5 and 7 is", options: ["15", "3", "5", "7"], answer: 2, explain: "Sum is 15 and 15 ÷ 3 = 5.", level: 1 },
      { q: "The median of 4, 9 and 6 is", options: ["6", "9", "4", "6.5"], answer: 0, explain: "In order: 4, 6, 9. The middle value is 6.", level: 1 },
      { q: "The mode of 2, 3, 3, 4, 4, 3 is", options: ["4", "2", "3.2", "3"], answer: 3, explain: "3 occurs three times, more often than any other value.", level: 1 },
      { q: "The range of 15, 22, 9, 30 is", options: ["21", "30", "9", "76"], answer: 0, explain: "Range = highest − lowest = 30 − 9 = 21.", level: 1 },
      { q: "The mean of 6 numbers is 8. Their sum is", options: ["14", "48", "8", "1.33"], answer: 1, explain: "Sum = mean × number of values = 8 × 6 = 48.", level: 1 },
      { q: "The median of 12, 8, 20, 16, 10, 14 is", options: ["13", "14", "12", "16"], answer: 0, explain: "In order: 8, 10, 12, 14, 16, 20. The two middle values are 12 and 14, so the median is 13.", level: 2 },
      { q: "A student scored 62, 70, 78, 85 and 95 in five tests.\nWhat is her mean score?", options: ["85", "70", "78", "62"], answer: 2, explain: "Sum = 390 and 390 ÷ 5 = 78.", level: 2 },
      { q: "Assertion (A): The range of 7, 12, 20 is 13.\nReason (R): The mean of 7, 12, 20 is 13.", options: ["Both A and R are true, and R is the correct explanation of A.", "Both A and R are true, but R is not the correct explanation of A.", "A is true, but R is false.", "A is false, but R is true."], answer: 1, explain: "Range = 20 − 7 = 13 and mean = 39 ÷ 3 = 13, so both are true. The range is found from highest and lowest values, not from the mean.", level: 2, keepOrder: true },
      { q: "A shopkeeper has sold shoes of sizes 6, 7, 7, 8, 7, 9, 6, 7 this week.\nWhich measure tells her which size to stock most?", options: ["Range", "Mean", "Median", "Mode"], answer: 3, explain: "The mode is the most frequent value, here size 7, which shows the most popular size.", level: 2 },
      { q: "A batter scored 24, 0, 56, 38, 12 and 30 in six matches.\nHis median score is", options: ["26.7", "30", "27", "24"], answer: 2, explain: "In order: 0, 12, 24, 30, 38, 56. Median = (24 + 30) ÷ 2 = 27. The value 26.7 is the mean.", level: 2 },
      { q: "The mean of 5 numbers is 20. When one number, 28, is removed, the mean of the remaining numbers is", options: ["18", "20", "22", "16"], answer: 0, explain: "Total = 100. Remaining total = 100 − 28 = 72 for 4 numbers, so the mean is 18.", level: 3 },
      { q: "The mean of 6 numbers is 15. A seventh number is added and the mean becomes 16.\nThe new number is", options: ["16", "21", "15", "22"], answer: 3, explain: "New total = 7 × 16 = 112. Old total = 6 × 15 = 90. New number = 112 − 90 = 22.", level: 3 },
      { q: "The numbers 4, 6, x, 10, 16 are in increasing order and their mean is 9. The value of x is", options: ["8", "9", "10", "7"], answer: 1, explain: "Sum = 5 × 9 = 45. So x = 45 − (4 + 6 + 10 + 16) = 45 − 36 = 9, which fits the order.", level: 3 },
      { q: "The mean mark of 10 students is 62. The highest mark 90 and the lowest mark 40 are removed.\nThe mean of the other 8 students is", options: ["62", "61", "61.25", "65"], answer: 2, explain: "Total = 620. Remaining = 620 − 130 = 490. Mean = 490 ÷ 8 = 61.25.", level: 3 }
    ],
    written: [
      { q: "Find the mean of 10, 14, 18 and 22.", a: "Sum = 64.\nMean = 64 ÷ 4 = 16.", marks: 1 },
      { q: "Find the mode of 5, 6, 5, 7, 6, 5.", a: "5 occurs three times, 6 twice and 7 once, so the mode is 5.", marks: 1 },
      { q: "Find the median of 21, 15, 30, 18, 25, 12.", a: "In order: 12, 15, 18, 21, 25, 30.\nThere are 6 values, so the median is the mean of the two middle ones: (18 + 21) ÷ 2 = 19.5.", marks: 2 },
      { q: "The mean of four numbers is 25. Three of them are 20, 30 and 22. Find the fourth number.", a: "Total = 4 × 25 = 100.\nSum of three = 72.\nFourth number = 100 − 72 = 28.", marks: 2 },
      { q: "Find the modes and the range of the data 3, 3, 5, 7, 7.", a: "3 and 7 each occur twice, so there are two modes: 3 and 7.\nRange = 7 − 3 = 4.", marks: 2 },
      { q: "A stall's sales (in ₹ hundreds) over 7 days were 45, 52, 40, 52, 60, 48 and 53. Find the mean, median and mode.", a: "Sum = 350, so mean = 350 ÷ 7 = 50.\nIn order: 40, 45, 48, 52, 52, 53, 60. The middle value (4th) is 52, so median = 52.\n52 occurs twice, so mode = 52.", marks: 3 },
      { q: "Monthly pay (in ₹ thousands) of five workers is 10, 12, 11, 13 and 104. Find the mean and median. Which is a better description of a typical pay, and why?", a: "Mean = (10 + 12 + 11 + 13 + 104) ÷ 5 = 150 ÷ 5 = 30.\nIn order: 10, 11, 12, 13, 104, so median = 12.\nThe median is better: the single very large value 104 pulls the mean up, but the median stays near the usual pay.", marks: 3 },
      { q: "Case study: Nine students scored these marks in a quiz out of 10: 5, 7, 8, 7, 9, 6, 7, 10, 4.\n(i) Find the mean score.\n(ii) Find the median and the mode.\n(iii) Find the range.", a: "(i) Sum = 63, so mean = 63 ÷ 9 = 7.\n(ii) In order: 4, 5, 6, 7, 7, 7, 8, 9, 10. The 5th value is 7, so median = 7. The value 7 occurs three times, so mode = 7.\n(iii) Range = 10 − 4 = 6.", marks: 4, type: "case" }
    ]
  },
  "constructions-and-tilings": {
    mcq: [
      { q: "Which tool is used to draw an arc of a given radius?", options: ["Protractor", "Set square", "Compass", "Divider only"], answer: 2, explain: "A compass draws arcs and circles. A protractor measures angles.", level: 1 },
      { q: "Each angle of a regular hexagon is", options: ["60°", "108°", "90°", "120°"], answer: 3, explain: "A regular hexagon has angles of 120°; three of them make 360° at a point.", level: 1 },
      { q: "Which of these regular shapes can tile the plane by itself?", options: ["Hexagon", "Pentagon", "Octagon", "Heptagon"], answer: 0, explain: "Three hexagons (3 × 120° = 360°) fit around a point with no gap.", level: 1 },
      { q: "How many squares meet at a point in a tiling?", options: ["3", "4", "5", "6"], answer: 1, explain: "Each angle is 90°, and 360° ÷ 90° = 4.", level: 1 },
      { q: "The perpendicular bisector of a segment meets it at an angle of", options: ["45°", "60°", "90°", "180°"], answer: 2, explain: "It crosses the segment at its midpoint at a right angle.", level: 1 },
      { q: "Which set of lengths can be the sides of a triangle?", options: ["3 cm, 3 cm, 7 cm", "4 cm, 5 cm, 10 cm", "6 cm, 8 cm, 14 cm", "5 cm, 7 cm, 11 cm"], answer: 3, explain: "5 + 7 = 12 > 11, and the other pairs also work. In the others, the two shorter sides do not add up to more than the longest side.", level: 2 },
      { q: "Four regular hexagons cannot meet at a point in a tiling because", options: ["4 × 120° = 480°, which is more than 360°", "hexagons have 5 sides", "4 × 120° = 360°", "hexagons have angles of 90°"], answer: 0, explain: "Angles at a point must add up to exactly 360°. Four hexagons would give 480°, an overlap.", level: 2 },
      { q: "To construct a triangle with two sides of 5 cm and 6 cm and the angle of 70° between them, you use the", options: ["ASA method", "SSS method", "RHS method", "SAS method"], answer: 3, explain: "Two sides and the included angle are given, which is SAS.", level: 2 },
      { q: "Assertion (A): Equilateral triangles can tile the plane.\nReason (R): Six equilateral triangles meet at a point with angles adding up to 360°.", options: ["Both A and R are true, and R is the correct explanation of A.", "Both A and R are true, but R is not the correct explanation of A.", "A is true, but R is false.", "A is false, but R is true."], answer: 0, explain: "Each angle is 60° and 6 × 60° = 360°, so triangles fit around a point with no gap. This is why they tile.", level: 2, keepOrder: true },
      { q: "A tiler wants to cover a floor using only regular pentagon tiles, each with angle 108°.\nWhat happens?", options: ["The tiles fit perfectly with no gaps", "Three tiles leave a gap of 36° at each corner point", "Four tiles fit exactly", "Two tiles fit exactly"], answer: 1, explain: "3 × 108° = 324°, leaving 36°. Four pentagons would need 432°, which overlaps. So pentagons alone cannot tile.", level: 2 },
      { q: "At a point in a tiling, 2 squares meet. How many equilateral triangles are needed to fill the rest of the angle?", options: ["2", "4", "6", "3"], answer: 3, explain: "Two squares use 180°. The remaining 180° ÷ 60° = 3 triangles.", level: 3 },
      { q: "A student wants to construct a triangle with a base of 6 cm and base angles of 100° and 85°. This is", options: ["possible, using ASA", "impossible, since the two angles add up to more than 180°", "possible only with SSS", "impossible, since the base is too short"], answer: 1, explain: "The angle sum of a triangle is 180°, but 100° + 85° = 185°, so the two arms never meet.", level: 3 },
      { q: "Two sides of a triangle are 7 cm and 4 cm. Which could be the third side?", options: ["3 cm", "12 cm", "11 cm", "6 cm"], answer: 3, explain: "The third side must be more than 7 − 4 = 3 cm and less than 7 + 4 = 11 cm. Only 6 cm fits.", level: 3 },
      { q: "A square, a regular hexagon and a third polygon meet at a point with no gap.\nThe angle of the third polygon at this point is", options: ["60°", "120°", "90°", "150°"], answer: 3, explain: "360° − 90° − 120° = 150°.", level: 3 }
    ],
    written: [
      { q: "Name the instrument used to measure and draw angles.", a: "A protractor.", marks: 1 },
      { q: "How many equilateral triangles meet at a point in a tiling?", a: "Each angle is 60°, so 360° ÷ 60° = 6 triangles.", marks: 1 },
      { q: "Can a triangle with sides 4 cm, 6 cm and 9 cm be constructed? Give a reason.", a: "Check the sum of two sides against the third: 4 + 6 = 10 > 9, 4 + 9 = 13 > 6 and 6 + 9 = 15 > 4.\nIn every case the sum is greater, so the triangle can be constructed.", marks: 2 },
      { q: "Why can regular hexagons tile a plane?", a: "Each angle of a regular hexagon is 120°.\n3 × 120° = 360°, so three hexagons fit around a point with no gap or overlap.", marks: 2 },
      { q: "Write two main steps to construct the perpendicular bisector of a segment AB with a compass.", a: "1. With A and then B as centres and the same radius (more than half of AB), draw arcs above and below AB so that they cross at two points.\n2. Join the two crossing points. This line cuts AB at its midpoint at 90°.", marks: 2 },
      { q: "Write the steps to construct △PQR with PQ = 6 cm, ∠P = 50° and PR = 5 cm.", a: "1. Draw PQ = 6 cm with the ruler.\n2. At P, use the protractor to draw a ray making 50° with PQ.\n3. On this ray, mark R with the compass so that PR = 5 cm, and join QR.", marks: 3 },
      { q: "Show that regular pentagons cannot tile the plane by themselves. What happens with three pentagons at a point?", a: "Each angle of a regular pentagon is 108°.\n360° ÷ 108° is not a whole number, so angles cannot add up to exactly 360°.\nThree pentagons give 324°, leaving a gap of 36°, and four give 432°, which overlap. So they cannot tile alone.", marks: 3 },
      { q: "Case study: A tiler has regular tiles shaped as squares, equilateral triangles and hexagons.\n(i) Write the angle of each tile.\n(ii) How many squares can meet at a point?\n(iii) At one point, two hexagons meet. How many triangles fill the rest?", a: "(i) Square 90°, equilateral triangle 60°, regular hexagon 120°.\n(ii) 360° ÷ 90° = 4 squares.\n(iii) Two hexagons use 240°. The rest is 360° − 240° = 120°, and 120° ÷ 60° = 2 triangles.", marks: 4, type: "case" }
    ]
  },
  "finding-the-unknown": {
    mcq: [
      { q: "The solution of x − 4 = 10 is", options: ["6", "40", "14", "−6"], answer: 2, explain: "Add 4 to both sides: x = 14.", level: 1 },
      { q: "The solution of x/5 = 3 is", options: ["15", "8", "0.6", "2"], answer: 0, explain: "Multiply both sides by 5: x = 15.", level: 1 },
      { q: "\"A number increased by 7 is 15\" is written as", options: ["7x = 15", "x − 7 = 15", "x + 7 = 15", "x/7 = 15"], answer: 2, explain: "Increased by 7 means adding 7, so x + 7 = 15.", level: 1 },
      { q: "The solution of 7x = 63 is", options: ["56", "9", "70", "441"], answer: 1, explain: "Divide both sides by 7: x = 9.", level: 1 },
      { q: "When 8 is transposed from the left side to the right side in x + 8 = 20, it becomes", options: ["−8", "+8", "8x", "1/8"], answer: 0, explain: "Transposing changes the sign: x = 20 − 8.", level: 1 },
      { q: "The solution of 3x − 5 = 16 is", options: ["11/3", "3", "21", "7"], answer: 3, explain: "3x = 21, so x = 7. Check: 3 × 7 − 5 = 16.", level: 2 },
      { q: "The solution of 2(x + 3) = 18 is", options: ["9", "6", "3", "12"], answer: 1, explain: "Divide by 2: x + 3 = 9, so x = 6. The value 9 is x + 3, not x.", level: 2 },
      { q: "Assertion (A): The solution of x/2 = 6 is x = 3.\nReason (R): To undo division by 2, we multiply both sides by 2.", options: ["Both A and R are true, and R is the correct explanation of A.", "Both A and R are true, but R is not the correct explanation of A.", "A is true, but R is false.", "A is false, but R is true."], answer: 3, explain: "Multiplying both sides by 2 gives x = 12, so A is false. R is a correct method.", level: 2, keepOrder: true },
      { q: "Aman spent ₹45 and had ₹80 left.\nHow much did he have at first?", options: ["₹35", "₹125", "₹3,600", "₹80"], answer: 1, explain: "Let the amount be ₹x. Then x − 45 = 80, so x = 125.", level: 2 },
      { q: "Four pens and a ₹14 notebook cost ₹62 in all.\nWhat is the price of one pen?", options: ["₹19", "₹15.50", "₹12", "₹76"], answer: 2, explain: "4p + 14 = 62, so 4p = 48 and p = 12.", level: 2 },
      { q: "The perimeter of a rectangle is 46 cm and its length is 3 cm more than its breadth.\nThe breadth is", options: ["10 cm", "13 cm", "20 cm", "8 cm"], answer: 0, explain: "2(b + b + 3) = 46 gives 4b + 6 = 46, so b = 10 cm (length 13 cm).", level: 3 },
      { q: "The sum of three consecutive even numbers is 54. The largest of them is", options: ["16", "18", "22", "20"], answer: 3, explain: "n + (n + 2) + (n + 4) = 54, so 3n = 48 and n = 16. The numbers are 16, 18, 20.", level: 3 },
      { q: "The solution of 3(x − 4) + 5 = 20 is", options: ["9", "5", "13", "3"], answer: 0, explain: "3(x − 4) = 15, so x − 4 = 5 and x = 9.", level: 3 },
      { q: "A father is 3 times as old as his son. After 10 years, the sum of their ages will be 80.\nThe father's present age is", options: ["15 years", "60 years", "30 years", "45 years"], answer: 3, explain: "Let the son be s. (3s + 10) + (s + 10) = 80, so 4s = 60 and s = 15. Father = 45 years.", level: 3 }
    ],
    written: [
      { q: "Solve x + 12 = 20.", a: "Subtract 12 from both sides: x = 20 − 12 = 8.", marks: 1 },
      { q: "Write an equation for \"5 less than a number is 9\".", a: "Let the number be x. Then x − 5 = 9.", marks: 1 },
      { q: "Solve 7x − 4 = 24 and check your answer.", a: "Add 4 to both sides: 7x = 28.\nDivide by 7: x = 4.\nCheck: 7 × 4 − 4 = 24.", marks: 2 },
      { q: "Solve x/4 − 3 = 2.", a: "Add 3 to both sides: x/4 = 5.\nMultiply by 4: x = 20.", marks: 2 },
      { q: "A number is multiplied by 6 and then 5 is added. The result is 47. Find the number.", a: "Let the number be x. Then 6x + 5 = 47.\n6x = 42, so x = 7.", marks: 2 },
      { q: "The sum of three consecutive odd numbers is 75. Find the numbers.", a: "Let the numbers be n, n + 2 and n + 4.\nn + (n + 2) + (n + 4) = 75, so 3n + 6 = 75 and 3n = 69, n = 23.\nThe numbers are 23, 25 and 27.", marks: 3 },
      { q: "Sheela's mother is 4 times as old as Sheela. The difference between their ages is 27 years. Find their ages.", a: "Let Sheela's age be s years. Mother's age = 4s.\n4s − s = 27, so 3s = 27 and s = 9.\nSheela is 9 years old and her mother is 36 years old.", marks: 3 },
      { q: "Case study: At a school fair, an entry token costs ₹5 and each game costs ₹8. Kabir bought one token and played g games, spending ₹61 in all.\n(i) Write an equation for g.\n(ii) Solve it to find the number of games Kabir played.\n(iii) His friend paid ₹77 for one token and some games. How many games did the friend play?", a: "(i) 5 + 8g = 61.\n(ii) 8g = 56, so g = 7 games. Check: 5 + 56 = 61.\n(iii) 5 + 8g = 77, so 8g = 72 and g = 9 games.", marks: 4, type: "case" }
    ]
  }
});
