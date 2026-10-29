// PSEB Class 7 Mathematics practice bank, part 1: Integers to Comparing Quantities (earlier NCERT book).
StudyData.addPractice(7, "mathspb", {
  integers: {
    mcq: [
      { q: "The opposite (additive inverse) of −9 is", options: ["9", "−9", "0", "1/9"], answer: 0, explain: "A number plus its opposite is 0, and −9 + 9 = 0. The reciprocal 1/9 is a different idea.", level: 1 },
      { q: "(−12) + (−5) = ?", options: ["−7", "7", "17", "−17"], answer: 3, explain: "Same signs: add 12 and 5 to get 17 and keep the negative sign, so −17.", level: 1 },
      { q: "(−9) × 0 = ?", options: ["−9", "9", "0", "not defined"], answer: 2, explain: "Any integer multiplied by 0 is 0.", level: 1 },
      { q: "Which of these integers is the greatest?", options: ["−10", "−100", "−1", "−5"], answer: 2, explain: "On the number line −1 is farthest to the right, so it is the greatest. A bigger-looking number like −100 is actually smaller.", level: 1 },
      { q: "0 ÷ (−8) = ?", options: ["not defined", "−8", "8", "0"], answer: 3, explain: "Zero divided by any non-zero integer is 0. It is division BY zero that is not defined.", level: 1 },
      { q: "(−18) − 7 = ?", options: ["−11", "11", "25", "−25"], answer: 3, explain: "(−18) − 7 = (−18) + (−7). Same signs, so add 18 and 7 and keep the minus sign: −25.", level: 2 },
      { q: "15 − (−9) = ?", options: ["6", "24", "−24", "−6"], answer: 1, explain: "Subtracting −9 is the same as adding 9, so 15 + 9 = 24.", level: 2 },
      { q: "The product (−4) × (−5) × (−3) is", options: ["60", "−60", "−12", "12"], answer: 1, explain: "Three negative factors (an odd number) give a negative product. 4 × 5 × 3 = 60, so the answer is −60.", level: 2 },
      { q: "Using the distributive property, 25 × 104 equals", options: ["2504", "2640", "2600", "2700"], answer: 2, explain: "25 × 104 = 25 × (100 + 4) = 2500 + 100 = 2600.", level: 2 },
      { q: "Assertion (A): Subtraction of integers is not commutative.\nReason (R): 4 − 9 is not equal to 9 − 4.", options: ["Both A and R are true, and R is the correct explanation of A.", "Both A and R are true, but R is not the correct explanation of A.", "A is true, but R is false.", "A is false, but R is true."], answer: 0, explain: "4 − 9 = −5 but 9 − 4 = 5. This example shows that changing the order changes the answer, which is exactly why subtraction is not commutative.", level: 2, keepOrder: true },
      { q: "A lift is at floor 3 of a mall. It goes down 8 floors and then up 3 floors. Floors below the ground are counted as negative.\nWhich floor is the lift on now?", options: ["−2", "2", "−8", "−5"], answer: 0, explain: "3 − 8 + 3 = −2. Forgetting the last move up gives −5, which is wrong.", level: 3 },
      { q: "At 6 am the temperature in Leh is −12°C. It rises by 3°C every hour.\nWhat is the temperature at 10 am?", options: ["−8°C", "−24°C", "0°C", "12°C"], answer: 2, explain: "From 6 am to 10 am is 4 hours, a rise of 4 × 3 = 12°C. So −12 + 12 = 0°C.", level: 3 },
      { q: "The value of (−36) ÷ (−4) × (−3) is", options: ["27", "−27", "−3", "3"], answer: 1, explain: "Work left to right: (−36) ÷ (−4) = 9, then 9 × (−3) = −27.", level: 3 },
      { q: "The sum of all integers from −4 to 5 (both included) is", options: ["0", "9", "−5", "5"], answer: 3, explain: "The pairs −4 and 4, −3 and 3, −2 and 2, −1 and 1 and the 0 all cancel to 0, leaving only 5.", level: 3 }
    ],
    written: [
      { q: "Write the additive inverse of −15.", a: "The additive inverse of −15 is **15**, because (−15) + 15 = 0.", marks: 1 },
      { q: "What is the sign of the product of five negative integers?", a: "Negative, because an odd number of negative factors gives a negative product.", marks: 1 },
      { q: "Evaluate: (−25) + 14 − (−6).", a: "(−25) + 14 = −11.\n−11 − (−6) = −11 + 6 = **−5**.", marks: 2 },
      { q: "Using the distributive property, find 12 × (−8) + 12 × 3.", a: "12 × (−8) + 12 × 3 = 12 × [(−8) + 3] = 12 × (−5) = **−60**.", marks: 2 },
      { q: "Is division of integers commutative? Show with an example.", a: "No. (−8) ÷ 4 = −2, but 4 ÷ (−8) = −1/2.\nThe two answers are different, so a ÷ b ≠ b ÷ a in general.", marks: 2 },
      { q: "A submarine is 250 m below sea level. It rises 90 m and then dives 140 m. Find its final position.", a: "Below sea level is negative, so the start is −250 m.\nRise of 90 m: −250 + 90 = −160 m. Dive of 140 m: −160 − 140 = −300 m.\nThe submarine is **300 m below sea level**.", marks: 3 },
      { q: "Evaluate: [(−24) ÷ 6] × (−5) + (−2) × (−7).", a: "(−24) ÷ 6 = −4.\n(−4) × (−5) = 20, and (−2) × (−7) = 14.\n20 + 14 = **34**.", marks: 3 },
      { q: "Case study: Meena runs a small shop in Shimla. Her daily profit (+) or loss (−) from Monday to Friday was: Mon +₹150, Tue −₹80, Wed −₹40, Thu +₹200, Fri −₹300.\n(i) Find her net result from Monday to Thursday.\n(ii) Find her net result after Friday.\n(iii) How much profit must she make on Saturday to end the week with a profit of ₹100?", a: "(i) 150 − 80 − 40 + 200 = **₹230 profit**.\n(ii) 230 − 300 = **−₹70**, a loss of ₹70.\n(iii) Let the Saturday profit be x. −70 + x = 100, so x = **₹170**.", marks: 4, type: "case" }
    ]
  },
  "fractions-and-decimals": {
    mcq: [
      { q: "2/3 × 3/4 = ?", options: ["5/7", "6/7", "1/2", "1/4"], answer: 2, explain: "Multiply the numerators and the denominators: 6/12 = 1/2.", level: 1 },
      { q: "The reciprocal of 5/8 is", options: ["8/5", "−5/8", "5/8", "1/8"], answer: 0, explain: "Turn the fraction upside down: 8/5. Then 5/8 × 8/5 = 1.", level: 1 },
      { q: "0.4 × 0.3 = ?", options: ["1.2", "0.12", "0.012", "12"], answer: 1, explain: "4 × 3 = 12 and the two numbers together have 2 decimal places, so the answer is 0.12.", level: 1 },
      { q: "3.6 ÷ 10 = ?", options: ["36", "0.036", "0.36", "360"], answer: 2, explain: "Dividing by 10 shifts the decimal point one place to the left: 0.36.", level: 1 },
      { q: "2/5 of 30 is", options: ["12", "15", "10", "75"], answer: 0, explain: "2/5 × 30 = 60/5 = 12. Here 'of' means multiplication.", level: 1 },
      { q: "5/6 ÷ 5/12 = ?", options: ["1/2", "25/72", "2", "1"], answer: 2, explain: "5/6 × 12/5 = 60/30 = 2. Dividing is multiplying by the reciprocal.", level: 2 },
      { q: "1¾ × 2/7 = ?", options: ["2/7", "1/2", "7/8", "3/14"], answer: 1, explain: "1¾ = 7/4, so 7/4 × 2/7 = 14/28 = 1/2.", level: 2 },
      { q: "6.3 ÷ 0.7 = ?", options: ["9", "0.9", "90", "0.09"], answer: 0, explain: "Multiply both by 10: 63 ÷ 7 = 9.", level: 2 },
      { q: "Assertion (A): The product of two proper fractions is smaller than each of them.\nReason (R): 1/2 × 1/3 = 1/6.", options: ["Both A and R are true, and R is the correct explanation of A.", "Both A and R are true, but R is not the correct explanation of A.", "A is true, but R is false.", "A is false, but R is true."], answer: 1, explain: "Both statements are true, but R is only one example. It does not explain why the product is smaller (we multiply by a number less than 1).", level: 2, keepOrder: true },
      { q: "2.5 × 0.04 = ?", options: ["1", "0.01", "10", "0.1"], answer: 3, explain: "25 × 4 = 100, with 3 decimal places in all: 0.100 = 0.1.", level: 2 },
      { q: "A ribbon 3¾ m long is cut into pieces of 3/8 m each.\nHow many pieces are made?", options: ["5", "10", "12", "14"], answer: 1, explain: "3¾ = 15/4. Then 15/4 ÷ 3/8 = 15/4 × 8/3 = 10 pieces.", level: 3 },
      { q: "Petrol costs ₹ 104.50 per litre.\nWhat is the cost of 2.4 litres?", options: ["₹ 25.08", "₹ 2508", "₹ 250.80", "₹ 205.80"], answer: 2, explain: "1045 × 24 = 25080. The two numbers have 2 decimal places in all, so the cost is ₹ 250.80.", level: 3 },
      { q: "A number multiplied by 3/5 gives 21. The number is", options: ["35", "12.6", "15", "18"], answer: 0, explain: "The number = 21 ÷ 3/5 = 21 × 5/3 = 35. Check: 3/5 × 35 = 21.", level: 3 },
      { q: "The value of 0.6 ÷ 0.02 × 0.5 is", options: ["1.5", "0.15", "15", "150"], answer: 2, explain: "0.6 ÷ 0.02 = 60 ÷ 2 = 30, and 30 × 0.5 = 15.", level: 3 }
    ],
    written: [
      { q: "Find the reciprocal of 2¼.", a: "2¼ = 9/4, so its reciprocal is **4/9**.", marks: 1 },
      { q: "Find 3/5 of 25.", a: "3/5 × 25 = 75/5 = **15**.", marks: 1 },
      { q: "Simplify: 2/5 ÷ 4/15.", a: "2/5 ÷ 4/15 = 2/5 × 15/4 (multiply by the reciprocal).\n= 30/20 = **3/2** (or 1½).", marks: 2 },
      { q: "Find the product 12.5 × 0.8.", a: "125 × 8 = 1000. The numbers have 2 decimal places in all, so the product is 10.00 = **10**.", marks: 2 },
      { q: "Without multiplying, say whether 7/8 × 3/4 is more or less than 3/4. Give a reason.", a: "It is **less** than 3/4.\nReason: 7/8 is a proper fraction (less than 1), so multiplying 3/4 by it makes the number smaller. (Actual value 21/32.)", marks: 2 },
      { q: "A tank has 45.6 litres of water. How many buckets of 2.4 litres each can be filled from it?", a: "Number of buckets = 45.6 ÷ 2.4.\nMultiply both by 10: 456 ÷ 24.\n456 ÷ 24 = **19 buckets**.", marks: 3 },
      { q: "Ravi ate 1/4 of a cake. Sita then ate 1/3 of what remained. What fraction of the whole cake did Sita eat, and how much is left?", a: "Remaining after Ravi = 1 − 1/4 = 3/4.\nSita ate 1/3 of 3/4 = 1/3 × 3/4 = **1/4** of the cake.\nLeft = 1 − 1/4 − 1/4 = **1/2** of the cake.", marks: 3 },
      { q: "Case study: Radha buys cloth at ₹ 85.50 per metre and takes 3.5 m. A kurta needs 1¼ m of cloth.\n(i) Find the cost of the cloth.\n(ii) How many whole kurtas can she stitch?\n(iii) How much cloth is left after that?", a: "(i) Cost = 85.5 × 3.5. 855 × 35 = 29925, with 2 decimal places: **₹ 299.25**.\n(ii) 3.5 ÷ 1¼ = 7/2 ÷ 5/4 = 7/2 × 4/5 = 14/5 = 2.8, so **2 whole kurtas**.\n(iii) Cloth used = 2 × 1¼ = 2.5 m. Left = 3.5 − 2.5 = **1 m**.", marks: 4, type: "case" }
    ]
  },
  "data-handling": {
    mcq: [
      { q: "The mean of 4, 6, 8, 10 and 12 is", options: ["7", "8", "9", "10"], answer: 1, explain: "Sum = 40 and there are 5 observations, so the mean is 40 ÷ 5 = 8.", level: 1 },
      { q: "The median of 3, 7, 9, 12, 15 is", options: ["12", "7", "15", "9"], answer: 3, explain: "The data is already in order and the middle (3rd) value is 9.", level: 1 },
      { q: "The mode of 2, 5, 3, 5, 7, 5, 2 is", options: ["2", "3", "5", "7"], answer: 2, explain: "5 appears three times, more than any other value.", level: 1 },
      { q: "The range of 12, 5, 20, 9 is", options: ["15", "25", "8", "20"], answer: 0, explain: "Range = highest − lowest = 20 − 5 = 15.", level: 1 },
      { q: "When a fair coin is tossed once, the probability of getting a head is", options: ["0", "1/2", "1", "2"], answer: 1, explain: "There is 1 favourable outcome out of 2 equally likely outcomes, so P(head) = 1/2.", level: 1 },
      { q: "The median of 4, 9, 12, 6, 10, 15 is", options: ["10", "9", "9.5", "9.33"], answer: 2, explain: "In order: 4, 6, 9, 10, 12, 15. There are 6 values, so the median is the average of 9 and 10, which is 9.5. (9.33 is the mean.)", level: 2 },
      { q: "The mean of five numbers is 12. Four of them are 10, 14, 8 and 15. The fifth number is", options: ["12", "11", "47", "13"], answer: 3, explain: "Total = 5 × 12 = 60. The four given numbers add up to 47, so the fifth is 60 − 47 = 13.", level: 2 },
      { q: "A fair die is rolled once. The probability of getting a prime number is", options: ["1/3", "2/3", "1/2", "1/6"], answer: 2, explain: "Primes on a die are 2, 3 and 5, so P = 3/6 = 1/2. (1 is not prime.)", level: 2 },
      { q: "Assertion (A): A set of data can have two modes.\nReason (R): In 1, 1, 3, 3, 4 both 1 and 3 occur twice, which is the highest frequency.", options: ["Both A and R are true, and R is the correct explanation of A.", "Both A and R are true, but R is not the correct explanation of A.", "A is true, but R is false.", "A is false, but R is true."], answer: 0, explain: "Mode is the value that occurs most often. If two values tie for the highest frequency, both are modes, as R shows.", level: 2, keepOrder: true },
      { q: "Which of these can NOT be the probability of an event?", options: ["1.2", "0", "3/4", "1"], answer: 0, explain: "A probability always lies between 0 and 1, so 1.2 is not possible.", level: 2 },
      { q: "A batsman scored 40, 55, 0, 62 and 48 runs in five innings.\nHow many runs must he score in the sixth innings to make his mean 45?", options: ["45", "65", "50", "70"], answer: 1, explain: "Total so far = 205. For a mean of 45 over 6 innings he needs 270 in all, so 270 − 205 = 65 runs.", level: 3 },
      { q: "A bag has 5 red, 3 green and 2 yellow balls. One ball is drawn at random.\nThe probability that it is NOT green is", options: ["3/10", "1/2", "7/10", "3/7"], answer: 2, explain: "Total = 10. Not green = 5 + 2 = 7 balls, so P = 7/10.", level: 3 },
      { q: "Seven students scored 12, 15, 9, 20, 18, 11 and 16. The highest score 20 is changed to 100.\nWhat is the new median?", options: ["15", "16", "20", "100"], answer: 0, explain: "In order the scores are 9, 11, 12, 15, 16, 18, 20. The middle value is 15. Changing the highest value does not change the median (but it would raise the mean).", level: 3 },
      { q: "The mean of 8 numbers is 20. When the number 41 is removed, the mean of the remaining numbers is", options: ["19", "17", "18", "20"], answer: 1, explain: "Total = 160. After removing 41, total = 119 for 7 numbers, and 119 ÷ 7 = 17.", level: 3 }
    ],
    written: [
      { q: "Find the mode of 3, 4, 4, 5, 6, 4, 3.", a: "4 occurs three times, which is more than any other value, so the mode is **4**.", marks: 1 },
      { q: "What is the probability of an impossible event?", a: "The probability of an impossible event is **0**.", marks: 1 },
      { q: "Find the mean and the median of 8, 12, 5, 10, 15.", a: "Mean = (8 + 12 + 5 + 10 + 15) ÷ 5 = 50 ÷ 5 = **10**.\nIn order: 5, 8, 10, 12, 15. The middle value is **10**.", marks: 2 },
      { q: "Find the median of 14, 22, 9, 17, 25, 11.", a: "In order: 9, 11, 14, 17, 22, 25. There are 6 values, so the median is the average of the 3rd and 4th.\n(14 + 17) ÷ 2 = **15.5**.", marks: 2 },
      { q: "A die is thrown once. Find the probability of getting a number greater than 4.", a: "Favourable outcomes: 5 and 6, which is 2 outcomes out of 6.\nP = 2/6 = **1/3**.", marks: 2 },
      { q: "The mean of 6 numbers is 14. If the numbers 10 and 22 are removed, what is the mean of the remaining numbers?", a: "Total of 6 numbers = 6 × 14 = 84.\nAfter removing 10 and 22 the total is 84 − 32 = 52 for 4 numbers.\nNew mean = 52 ÷ 4 = **13**.", marks: 3 },
      { q: "The monthly incomes (in ₹) of five families are 12000, 14000, 13000, 15000 and 96000. Find the mean and the median and say which describes the group better.", a: "Mean = (12000 + 14000 + 13000 + 15000 + 96000) ÷ 5 = 150000 ÷ 5 = ₹ 30000.\nIn order: 12000, 13000, 14000, 15000, 96000, so the median is ₹ 14000.\nThe median describes the group better, because the one very large income pulls the mean up and makes it unlike four of the five families.", marks: 3 },
      { q: "Case study: A teacher noted the marks (out of 20) of 8 students: 12, 15, 15, 9, 18, 15, 20, 12.\n(i) Find the mean mark.\n(ii) Find the mode and the median.\n(iii) A student is chosen at random. What is the probability that the student scored 15?", a: "(i) Sum = 116, so mean = 116 ÷ 8 = **14.5**.\n(ii) Mode = **15** (it occurs 3 times). In order: 9, 12, 12, 15, 15, 15, 18, 20. The median is the average of the 4th and 5th values: (15 + 15) ÷ 2 = **15**.\n(iii) 3 students scored 15 out of 8, so P = **3/8**.", marks: 4, type: "case" }
    ]
  },
  "simple-equations": {
    mcq: [
      { q: "The solution of x + 7 = 15 is", options: ["22", "7", "8", "−8"], answer: 2, explain: "Subtract 7 from both sides: x = 15 − 7 = 8.", level: 1 },
      { q: "If 3x = 21, then x =", options: ["18", "7", "63", "24"], answer: 1, explain: "Divide both sides by 3: x = 21 ÷ 3 = 7.", level: 1 },
      { q: "'A number increased by 9 is 20' is written as", options: ["x + 9 = 20", "x − 9 = 20", "9x = 20", "x ÷ 9 = 20"], answer: 0, explain: "Increased by 9 means add 9, so x + 9 = 20.", level: 1 },
      { q: "When the term +5 is transposed to the other side of an equation it becomes", options: ["×5", "÷5", "+5", "−5"], answer: 3, explain: "Transposing changes the sign of a term: +5 becomes −5.", level: 1 },
      { q: "The solution of y − 4 = 10 is", options: ["6", "14", "−6", "40"], answer: 1, explain: "Add 4 to both sides: y = 10 + 4 = 14.", level: 1 },
      { q: "The solution of 2x − 5 = 9 is", options: ["7", "2", "14", "−2"], answer: 0, explain: "2x = 9 + 5 = 14, so x = 7. Check: 2 × 7 − 5 = 9.", level: 2 },
      { q: "If x/3 + 2 = 6, then x =", options: ["24", "8", "4", "12"], answer: 3, explain: "x/3 = 6 − 2 = 4, so x = 4 × 3 = 12.", level: 2 },
      { q: "The solution of 4(x − 1) = 20 is", options: ["4", "5", "6", "9"], answer: 2, explain: "Divide by 4: x − 1 = 5, so x = 6. (5 is the value of x − 1, not x.)", level: 2 },
      { q: "Assertion (A): x = 7 is the solution of 3x + 1 = 2x + 8.\nReason (R): Collecting the x terms on one side gives 3x − 2x = 8 − 1.", options: ["Both A and R are true, and R is the correct explanation of A.", "Both A and R are true, but R is not the correct explanation of A.", "A is true, but R is false.", "A is false, but R is true."], answer: 0, explain: "From 3x − 2x = 8 − 1 we get x = 7, and R is the step that produces it. Check: 22 = 22.", level: 2, keepOrder: true },
      { q: "The sum of three consecutive numbers is 48. The smallest of them is", options: ["16", "15", "17", "14"], answer: 1, explain: "n + (n + 1) + (n + 2) = 48 gives 3n = 45, so n = 15. The numbers are 15, 16, 17.", level: 2 },
      { q: "A father is 4 times as old as his son. The sum of their ages is 55 years.\nThe father's age is", options: ["44 years", "11 years", "40 years", "51 years"], answer: 0, explain: "Son = x, father = 4x. 5x = 55, so x = 11 and the father is 44. (11 is the son's age.)", level: 3 },
      { q: "A taxi charges ₹ 50 plus ₹ 12 for each kilometre.\nA fare of ₹ 266 is for a distance of", options: ["22 km", "20 km", "16 km", "18 km"], answer: 3, explain: "50 + 12x = 266 gives 12x = 216, so x = 18 km.", level: 3 },
      { q: "The solution of 5x − 3(x − 2) = 16 is", options: ["11", "−5", "5", "8"], answer: 2, explain: "5x − 3x + 6 = 16, so 2x = 10 and x = 5.", level: 3 },
      { q: "The perimeter of a rectangle is 52 cm and its length is 6 cm more than its breadth.\nThe length is", options: ["16 cm", "10 cm", "26 cm", "20 cm"], answer: 0, explain: "Breadth b, length b + 6. 2(2b + 6) = 52 gives 2b + 6 = 26, so b = 10 and length = 16 cm.", level: 3 }
    ],
    written: [
      { q: "Solve: x + 12 = 30.", a: "x = 30 − 12 = **18**. Check: 18 + 12 = 30.", marks: 1 },
      { q: "Write as an equation: 5 times a number, decreased by 3, is 22.", a: "Let the number be x. The equation is **5x − 3 = 22**.", marks: 1 },
      { q: "Solve 7x − 9 = 5x + 5 and check your answer.", a: "7x − 5x = 5 + 9, so 2x = 14 and x = **7**.\nCheck: LHS = 49 − 9 = 40, RHS = 35 + 5 = 40.", marks: 2 },
      { q: "Solve: 3(2x − 1) = 21.", a: "Divide by 3: 2x − 1 = 7.\n2x = 8, so x = **4**.", marks: 2 },
      { q: "Solve: x/4 − 3 = 2.", a: "x/4 = 2 + 3 = 5.\nx = 5 × 4 = **20**.", marks: 2 },
      { q: "The sum of three consecutive even numbers is 78. Find the numbers.", a: "Let the numbers be n, n + 2 and n + 4.\nn + n + 2 + n + 4 = 78, so 3n + 6 = 78 and 3n = 72, n = 24.\nThe numbers are **24, 26 and 28**.", marks: 3 },
      { q: "Sita is 3 times as old as Gita. After 4 years the sum of their ages will be 48. Find their present ages.", a: "Let Gita be x years, so Sita is 3x.\nAfter 4 years: (x + 4) + (3x + 4) = 48, so 4x + 8 = 48 and x = 10.\nGita is **10 years** and Sita is **30 years** old.", marks: 3 },
      { q: "Case study: A hall charges a fixed booking fee of ₹ 2000 plus ₹ 150 for each guest.\n(i) Find the cost for 40 guests.\n(ii) The total bill was ₹ 9500. Form an equation and find the number of guests.\n(iii) What is the largest number of guests for a budget of ₹ 6500?", a: "(i) 2000 + 150 × 40 = 2000 + 6000 = **₹ 8000**.\n(ii) 2000 + 150g = 9500, so 150g = 7500 and g = **50 guests**.\n(iii) 2000 + 150g ≤ 6500 gives 150g ≤ 4500, so g ≤ 30. At most **30 guests**.", marks: 4, type: "case" }
    ]
  },
  "lines-and-angles": {
    mcq: [
      { q: "The complement of 65° is", options: ["25°", "115°", "35°", "90°"], answer: 0, explain: "Complementary angles add up to 90°, so 90° − 65° = 25°. (115° is the supplement.)", level: 1 },
      { q: "The supplement of 40° is", options: ["50°", "40°", "140°", "320°"], answer: 2, explain: "Supplementary angles add up to 180°, so 180° − 40° = 140°. (50° is the complement.)", level: 1 },
      { q: "Vertically opposite angles are always", options: ["supplementary", "complementary", "unequal", "equal"], answer: 3, explain: "When two lines intersect, the angles facing each other are equal.", level: 1 },
      { q: "The angles of a linear pair add up to", options: ["90°", "180°", "360°", "270°"], answer: 1, explain: "The outer arms of a linear pair form a straight line, so the angles add up to 180°.", level: 1 },
      { q: "If two lines are parallel, each pair of alternate interior angles made by a transversal is", options: ["supplementary", "complementary", "equal", "unequal"], answer: 2, explain: "For parallel lines, alternate interior angles are equal.", level: 1 },
      { q: "Two complementary angles are x and 2x. The larger angle is", options: ["60°", "30°", "45°", "120°"], answer: 0, explain: "x + 2x = 90° gives x = 30°, so the larger angle is 2x = 60°.", level: 2 },
      { q: "Two straight lines cross and one of the four angles is 70°. The angle next to it is", options: ["70°", "110°", "20°", "290°"], answer: 1, explain: "Neighbouring angles form a linear pair, so 180° − 70° = 110°.", level: 2 },
      { q: "A transversal cuts two parallel lines. One angle of a pair of interior angles on the same side is 105°. The other is", options: ["105°", "15°", "180°", "75°"], answer: 3, explain: "Interior angles on the same side add up to 180°, so the other is 180° − 105° = 75°.", level: 2 },
      { q: "Assertion (A): An angle of 120° has no complement.\nReason (R): Complementary angles add up to 90°.", options: ["Both A and R are true, and R is the correct explanation of A.", "Both A and R are true, but R is not the correct explanation of A.", "A is true, but R is false.", "A is false, but R is true."], answer: 0, explain: "A complement would need to be 90° − 120° = −30°, which is impossible. This follows directly from the sum being 90°.", level: 2, keepOrder: true },
      { q: "Two parallel lines are cut by a transversal. Two interior angles on the same side are 115° and x.\nThe value of x is", options: ["115°", "75°", "65°", "25°"], answer: 2, explain: "Interior angles on the same side are supplementary: x = 180° − 115° = 65°.", level: 2 },
      { q: "Two roads cross at a junction. One angle is (3x + 15)° and the angle vertically opposite to it is (5x − 25)°.\nThe angle next to (3x + 15)° is", options: ["20°", "75°", "85°", "105°"], answer: 3, explain: "3x + 15 = 5x − 25 gives x = 20, so the angle is 75°. The next angle is a linear pair: 180° − 75° = 105°.", level: 3 },
      { q: "A cable crosses two parallel rails. A pair of alternate interior angles is (2x + 10)° and (3x − 20)°.\nEach of these angles measures", options: ["30°", "70°", "80°", "110°"], answer: 1, explain: "Alternate angles are equal: 2x + 10 = 3x − 20 gives x = 30, so each angle is 70°.", level: 3 },
      { q: "An angle is 30° less than twice its complement. The angle is", options: ["40°", "60°", "50°", "75°"], answer: 2, explain: "x = 2(90° − x) − 30° = 150° − 2x, so 3x = 150° and x = 50°. Its complement is 40°, and 2 × 40° − 30° = 50°.", level: 3 },
      { q: "Two supplementary angles are in the ratio 2 : 3. The larger angle is", options: ["108°", "36°", "60°", "72°"], answer: 0, explain: "2k + 3k = 180° gives k = 36°, so the angles are 72° and 108°.", level: 3 }
    ],
    written: [
      { q: "Find the supplement of 125°.", a: "Supplement = 180° − 125° = **55°**.", marks: 1 },
      { q: "What do we call two angles whose sum is 90°?", a: "They are called **complementary angles**.", marks: 1 },
      { q: "Find an angle which is equal to its own complement.", a: "Let the angle be x. Then x = 90° − x, so 2x = 90°.\nx = **45°**.", marks: 2 },
      { q: "Lines AB and CD meet at O and ∠AOC = 50°. Find ∠BOD and ∠AOD.", a: "∠BOD is vertically opposite to ∠AOC, so ∠BOD = **50°**.\n∠AOD and ∠AOC form a linear pair, so ∠AOD = 180° − 50° = **130°**.", marks: 2 },
      { q: "Two parallel lines are cut by a transversal. The interior angles on the same side are (x + 20)° and (2x − 5)°. Find x.", a: "Interior angles on the same side add up to 180°.\n(x + 20) + (2x − 5) = 180, so 3x + 15 = 180.\n3x = 165, so x = **55**.", marks: 2 },
      { q: "Two supplementary angles differ by 40°. Find the angles.", a: "Let the larger angle be x, so the other is 180° − x.\nx − (180° − x) = 40°, so 2x = 220° and x = 110°.\nThe angles are **110° and 70°**.", marks: 3 },
      { q: "Two angles forming a linear pair are in the ratio 4 : 5. Find the angles.", a: "A linear pair adds up to 180°.\n4k + 5k = 180°, so 9k = 180° and k = 20°.\nThe angles are 4 × 20° = **80°** and 5 × 20° = **100°**.", marks: 3 },
      { q: "Case study: In a park two straight paths AB and CD cross at O. ∠AOC = (4x + 10)° and ∠BOD = (6x − 30)°.\n(i) Why are ∠AOC and ∠BOD equal?\n(ii) Find x.\n(iii) Find ∠AOD and say how the two paths are placed.", a: "(i) They are vertically opposite angles, and vertically opposite angles are equal.\n(ii) 4x + 10 = 6x − 30, so 40 = 2x and x = **20**.\n(iii) ∠AOC = 4 × 20 + 10 = 90°. ∠AOD forms a linear pair with it, so ∠AOD = 180° − 90° = **90°**. The two paths are **perpendicular** to each other.", marks: 4, type: "case" }
    ]
  },
  "triangle-and-its-properties": {
    mcq: [
      { q: "The sum of the three angles of a triangle is", options: ["90°", "180°", "270°", "360°"], answer: 1, explain: "This is the angle sum property of a triangle.", level: 1 },
      { q: "In a right-angled triangle, the hypotenuse is", options: ["a leg of the triangle", "the shortest side", "the side opposite the right angle", "a median"], answer: 2, explain: "The hypotenuse is the side opposite the right angle, and it is the longest side.", level: 1 },
      { q: "The number of medians in a triangle is", options: ["3", "1", "2", "6"], answer: 0, explain: "A median can be drawn from each of the 3 vertices.", level: 1 },
      { q: "A triangle with sides 3 cm, 4 cm and 5 cm is", options: ["equilateral", "acute-angled and isosceles", "right-angled", "obtuse-angled"], answer: 2, explain: "3² + 4² = 9 + 16 = 25 = 5², so by the converse of Pythagoras it is right-angled.", level: 1 },
      { q: "Each angle of an equilateral triangle measures", options: ["60°", "90°", "45°", "30°"], answer: 0, explain: "The three angles are equal and add up to 180°, so each is 60°.", level: 1 },
      { q: "The two interior opposite angles of an exterior angle of a triangle are 40° and 65°. The exterior angle is", options: ["25°", "75°", "105°", "140°"], answer: 2, explain: "The exterior angle equals the sum of the two interior opposite angles: 40° + 65° = 105°.", level: 2 },
      { q: "The legs of a right-angled triangle are 6 cm and 8 cm. The hypotenuse is", options: ["14 cm", "10 cm", "12 cm", "100 cm"], answer: 1, explain: "6² + 8² = 36 + 64 = 100, so the hypotenuse is √100 = 10 cm.", level: 2 },
      { q: "Which set of lengths can NOT form a triangle?", options: ["5 cm, 6 cm, 10 cm", "4 cm, 5 cm, 10 cm", "7 cm, 8 cm, 9 cm", "3 cm, 3 cm, 5 cm"], answer: 1, explain: "4 + 5 = 9, which is less than 10, so the sum of two sides is not greater than the third.", level: 2 },
      { q: "Assertion (A): A triangle can have two right angles.\nReason (R): The angles of a triangle add up to 180°.", options: ["Both A and R are true, and R is the correct explanation of A.", "Both A and R are true, but R is not the correct explanation of A.", "A is true, but R is false.", "A is false, but R is true."], answer: 3, explain: "Two right angles already make 180°, leaving nothing for the third angle, so A is false. R is a true property.", level: 2, keepOrder: true },
      { q: "In an isosceles triangle the angle between the two equal sides is 40°. Each base angle is", options: ["40°", "100°", "70°", "140°"], answer: 2, explain: "The base angles are equal and share 180° − 40° = 140°, so each is 70°.", level: 2 },
      { q: "A 17 m ladder rests against a wall with its foot 8 m from the wall.\nHow high on the wall does it reach?", options: ["9 m", "15 m", "25 m", "12 m"], answer: 1, explain: "height² = 17² − 8² = 289 − 64 = 225, so the height is 15 m.", level: 3 },
      { q: "Ravi walks 12 m east and then 5 m north.\nHow far is he from the starting point in a straight line?", options: ["17 m", "7 m", "13 m", "60 m"], answer: 2, explain: "The path makes a right angle, so distance² = 12² + 5² = 169 and the distance is 13 m.", level: 3 },
      { q: "The angles of a triangle are in the ratio 2 : 3 : 4. The largest angle is", options: ["80°", "60°", "40°", "90°"], answer: 0, explain: "2k + 3k + 4k = 180° gives k = 20°, so the largest angle is 80°.", level: 3 },
      { q: "Two sides of a triangle are 6 cm and 10 cm. The third side can be", options: ["3 cm", "4 cm", "16 cm", "9 cm"], answer: 3, explain: "The third side must be more than 10 − 6 = 4 cm and less than 6 + 10 = 16 cm. Only 9 cm fits.", level: 3 }
    ],
    written: [
      { q: "State the Pythagoras property.", a: "In a right-angled triangle, the square of the hypotenuse is equal to the sum of the squares of the other two sides.", marks: 1 },
      { q: "Can a triangle have sides 2 cm, 3 cm and 6 cm?", a: "No. 2 + 3 = 5, which is less than 6, so the triangle inequality fails.", marks: 1 },
      { q: "The angles of a triangle are x, 2x and 3x. Find them.", a: "x + 2x + 3x = 180°, so 6x = 180° and x = 30°.\nThe angles are **30°, 60° and 90°**.", marks: 2 },
      { q: "In △ABC, side BC is extended to D. The exterior angle ∠ACD = 110° and ∠A = 50°. Find ∠B and ∠ACB.", a: "Exterior angle = sum of the interior opposite angles: 110° = 50° + ∠B, so ∠B = **60°**.\n∠ACB = 180° − 110° = **70°** (linear pair).", marks: 2 },
      { q: "Find the hypotenuse of a right-angled triangle whose legs are 9 cm and 12 cm.", a: "hypotenuse² = 9² + 12² = 81 + 144 = 225.\nhypotenuse = √225 = **15 cm**.", marks: 2 },
      { q: "Show that a triangle with sides 20 cm, 21 cm and 29 cm is right-angled. At which side is the right angle opposite?", a: "20² + 21² = 400 + 441 = 841, and 29² = 841.\nSo a² + b² = c², and by the converse of Pythagoras the triangle is right-angled.\nThe right angle is opposite the longest side, **29 cm**.", marks: 3 },
      { q: "An isosceles triangle has equal sides of 13 cm and a base of 10 cm. Find the height from the apex to the base.", a: "The altitude from the apex meets the base at its midpoint, so it forms a right-angled triangle with a base of 5 cm and hypotenuse 13 cm.\nheight² = 13² − 5² = 169 − 25 = 144.\nheight = **12 cm**.", marks: 3 },
      { q: "Case study: A flagpole is 12 m tall. A wire is tied from its top to a point on the ground 5 m from its foot.\n(i) Find the length of the wire.\n(ii) Name the hypotenuse of the triangle formed.\n(iii) A longer wire of 20 m is tied from the top of the pole. How far from the foot does it touch the ground?", a: "(i) wire² = 12² + 5² = 144 + 25 = 169, so the wire is **13 m**.\n(ii) The hypotenuse is the wire, since it is opposite the right angle at the foot of the pole.\n(iii) distance² = 20² − 12² = 400 − 144 = 256, so the distance is **16 m**.", marks: 4, type: "case" }
    ]
  },
  "comparing-quantities": {
    mcq: [
      { q: "25% written as a fraction in simplest form is", options: ["1/2", "1/4", "1/5", "2/5"], answer: 1, explain: "25% = 25/100 = 1/4.", level: 1 },
      { q: "The ratio 40 : 60 in simplest form is", options: ["4 : 6", "3 : 2", "2 : 3", "20 : 30"], answer: 2, explain: "Divide both terms by their HCF, 20, to get 2 : 3.", level: 1 },
      { q: "20% of 150 is", options: ["30", "20", "15", "300"], answer: 0, explain: "20/100 × 150 = 30.", level: 1 },
      { q: "An article bought for ₹ 80 is sold for ₹ 100. The profit is", options: ["₹ 180", "₹ 20", "₹ 80", "₹ 100"], answer: 1, explain: "Profit = SP − CP = 100 − 80 = ₹ 20.", level: 1 },
      { q: "The formula for simple interest is", options: ["P + R + T", "P × R × T ÷ 100", "P × R ÷ T", "P × T ÷ R"], answer: 1, explain: "SI = (P × R × T) ÷ 100.", level: 1 },
      { q: "3/8 expressed as a percentage is", options: ["38%", "83.3%", "37.5%", "3.8%"], answer: 2, explain: "3/8 × 100 = 37.5%.", level: 2 },
      { q: "A bag is marked at ₹ 500 and a 10% discount is given. Its selling price is", options: ["₹ 450", "₹ 550", "₹ 490", "₹ 50"], answer: 0, explain: "Discount = 10% of 500 = ₹ 50, so SP = 500 − 50 = ₹ 450.", level: 2 },
      { q: "The simple interest on ₹ 2000 at 5% per annum for 3 years is", options: ["₹ 100", "₹ 300", "₹ 2300", "₹ 30"], answer: 1, explain: "SI = 2000 × 5 × 3 ÷ 100 = ₹ 300. (₹ 2300 is the amount.)", level: 2 },
      { q: "Assertion (A): A shopkeeper buys a toy for ₹ 200 and sells it for ₹ 250. His profit percent is 25%.\nReason (R): Profit percent is calculated on the cost price.", options: ["Both A and R are true, and R is the correct explanation of A.", "Both A and R are true, but R is not the correct explanation of A.", "A is true, but R is false.", "A is false, but R is true."], answer: 0, explain: "Profit = ₹ 50 and 50/200 × 100 = 25%. The percent is worked out on the cost price, as R says.", level: 2, keepOrder: true },
      { q: "The ratio of 50 cm to 2 m is", options: ["25 : 1", "1 : 4", "1 : 2", "2 : 5"], answer: 1, explain: "Convert to the same unit: 50 cm : 200 cm = 1 : 4.", level: 2 },
      { q: "A TV is marked at ₹ 20000 and a discount of 15% is offered.\nWhat does a customer pay?", options: ["₹ 3000", "₹ 23000", "₹ 17000", "₹ 19850"], answer: 2, explain: "Discount = 15/100 × 20000 = ₹ 3000, so the price is 20000 − 3000 = ₹ 17000.", level: 3 },
      { q: "A shopkeeper bought a cycle for ₹ 450 and sold it at a loss of 20%.\nThe selling price is", options: ["₹ 90", "₹ 360", "₹ 540", "₹ 430"], answer: 1, explain: "Loss = 20% of 450 = ₹ 90, so SP = 450 − 90 = ₹ 360.", level: 3 },
      { q: "The price of a book rises from ₹ 40 to ₹ 50 and later falls back from ₹ 50 to ₹ 40.\nThe percent fall is", options: ["25%", "10%", "20%", "40%"], answer: 2, explain: "The fall is ₹ 10 on the new price ₹ 50: 10/50 × 100 = 20%. (The rise was 25% because it was on ₹ 40.)", level: 3 },
      { q: "₹ 6000 is lent for 2 years and grows to an amount of ₹ 7200 at simple interest.\nThe rate of interest per annum is", options: ["10%", "20%", "12%", "5%"], answer: 0, explain: "SI = 7200 − 6000 = ₹ 1200. R = (1200 × 100) ÷ (6000 × 2) = 10%.", level: 3 }
    ],
    written: [
      { q: "Convert 0.35 into a percentage.", a: "0.35 = 35/100 = **35%**.", marks: 1 },
      { q: "Find 10% of ₹ 250.", a: "10/100 × 250 = **₹ 25**.", marks: 1 },
      { q: "Express 18 out of 24 as a percentage.", a: "18/24 = 3/4.\n3/4 × 100 = **75%**.", marks: 2 },
      { q: "Check whether 4 : 7 and 12 : 21 are in proportion.", a: "Product of extremes = 4 × 21 = 84. Product of means = 7 × 12 = 84.\nThe products are equal, so the numbers **are in proportion**.", marks: 2 },
      { q: "A shirt bought for ₹ 600 is sold for ₹ 540. Find the loss and the loss percent.", a: "Loss = 600 − 540 = **₹ 60**.\nLoss % = (60 ÷ 600) × 100 = **10%**.", marks: 2 },
      { q: "Find the simple interest and the amount on ₹ 12000 at 5% per annum for 4 years.", a: "SI = (12000 × 5 × 4) ÷ 100 = **₹ 2400**.\nAmount = 12000 + 2400 = **₹ 14400**.", marks: 3 },
      { q: "A sofa is marked at ₹ 24000. A 12.5% discount is given. Find the discount and the selling price. If the shopkeeper had bought it for ₹ 17500, find his profit percent.", a: "Discount = 12.5/100 × 24000 = **₹ 3000**.\nSP = 24000 − 3000 = **₹ 21000**.\nProfit = 21000 − 17500 = ₹ 3500, so profit % = (3500 ÷ 17500) × 100 = **20%**.", marks: 3 },
      { q: "Case study: Navdeep deposits ₹ 8000 in a bank at 7.5% per annum simple interest for 2 years.\n(i) Find the interest earned.\n(ii) Find the amount he receives.\n(iii) How much less interest would he get if the rate were 6% instead?", a: "(i) SI = (8000 × 7.5 × 2) ÷ 100 = **₹ 1200**.\n(ii) Amount = 8000 + 1200 = **₹ 9200**.\n(iii) At 6%: SI = (8000 × 6 × 2) ÷ 100 = ₹ 960. Difference = 1200 − 960 = **₹ 240** less.", marks: 4, type: "case" }
    ]
  }
});
