// Class 5 Mathematics practice bank, part 1: large numbers, operations on large numbers, factors and multiples, fractions, decimals, percentage, angles.
StudyData.addPractice(5, "maths", {
  "large-numbers": {
    mcq: [
      { q: "What is the place value of 6 in 6,40,000?", options: ["60,000", "6,000", "60,00,000", "6,00,000"], answer: 3, explain: "The 6 is in the lakh place, so its value is 6 × 1,00,000 = 6,00,000.", level: 1 },
      { q: "How many zeros are there in 1 crore, written 1,00,00,000?", options: ["7", "6", "8", "5"], answer: 0, explain: "1 crore = 1,00,00,000. After the digit 1 there are 7 zeros.", level: 1 },
      { q: "Which is three lakh five thousand in numerals?", options: ["3,50,000", "3,05,000", "30,05,000", "3,00,500"], answer: 1, explain: "3 lakh = 3,00,000 and 5 thousand = 5,000. Together they make 3,05,000. (3,50,000 is three lakh fifty thousand.)", level: 1 },
      { q: "Which is the smallest 6-digit number?", options: ["99,999", "10,000", "1,00,000", "10,00,000"], answer: 2, explain: "The smallest 6-digit number is 1 lakh, 1,00,000. 99,999 has 5 digits and 10,00,000 has 7 digits.", level: 1 },
      { q: "1 million is equal to how many lakh?", options: ["1", "10", "100", "1,000"], answer: 1, explain: "1 million = 10,00,000, which is 10 lakh.", level: 1 },
      { q: "Which is the expanded form of 7,08,050?", options: ["7,00,000 + 80,000 + 50", "7,00,000 + 800 + 50", "7,00,000 + 8,000 + 50", "7,00,000 + 8,000 + 500"], answer: 2, explain: "In 7,08,050 there are 7 lakh, 0 ten thousand, 8 thousand, 0 hundred, 5 tens and 0 ones. So it is 7,00,000 + 8,000 + 50.", level: 2 },
      { q: "A village has 3,45,000 people. How should Riya read this number?", options: ["Three lakh forty-five thousand", "Thirty-four lakh fifty thousand", "Three crore forty-five thousand", "Three thousand four hundred fifty"], answer: 0, explain: "3,45,000 has 3 lakh and 45 thousand, so it is read three lakh forty-five thousand.", level: 2 },
      { q: "Which is the correct way to write 56 lakh with Indian commas?", options: ["5,600,000", "56,00,000", "5,60,000", "5,60,0000"], answer: 1, explain: "56 lakh = 56 × 1,00,000 = 5600000. The first comma comes after 3 digits from the right and then after every 2 digits: 56,00,000. (5,600,000 uses the international grouping.)", level: 2 },
      { q: "What is the place value of 8 in 3,82,41,500?", options: ["8,00,000", "80,000", "8,00,00,000", "80,00,000"], answer: 3, explain: "In 3,82,41,500 the 3 is in the crore place, so the 8 is in the ten lakh place. Its value is 8 × 10,00,000 = 80,00,000.", level: 2 },
      { q: "3 crore 50 lakh is equal to how many lakh?", options: ["3,500", "35", "350", "3,050"], answer: 2, explain: "3 crore = 3 × 100 = 300 lakh. Adding 50 lakh gives 350 lakh.", level: 2 },
      { q: "Using the digits 4, 0, 9, 2, 7, 5 and 1 once each, what is the greatest 7-digit number?", options: ["97,54,201", "97,54,210", "97,45,210", "79,54,210"], answer: 1, explain: "Arrange the digits from the biggest to the smallest: 9, 7, 5, 4, 2, 1, 0. That gives 97,54,210.", level: 3 },
      { q: "A newspaper sells 12,50,000 copies a day and a magazine sells 1 million copies. Which sells more, and by how many?", options: ["Magazine, by 2,50,000", "Newspaper, by 11,50,000", "Magazine, by 11,50,000", "Newspaper, by 2,50,000"], answer: 3, explain: "1 million = 10,00,000. The newspaper sells 12,50,000, which is more. The difference is 12,50,000 − 10,00,000 = 2,50,000.", level: 3 }
    ],
    written: [
      { q: "Write 7,00,00,000 in words.", a: "Seven crore.", marks: 1 },
      { q: "Fill in the blank: 1 crore = ____ lakh.", a: "100 lakh", marks: 1 },
      { q: "Write forty-two lakh in numerals.", a: "42,00,000", marks: 1 },
      { q: "Write 5,06,300 in words and in expanded form.", a: "In words: five lakh six thousand three hundred.\nExpanded form: 5,00,000 + 6,000 + 300.", marks: 2 },
      { q: "Write 4 million in numerals in the international system and in the Indian system. How many lakh is it?", a: "International system: 4,000,000.\nIndian system: 40,00,000.\n1 million = 10 lakh, so 4 million = 40 lakh.", marks: 2 },
      { q: "Use the digits 3, 0, 6, 8, 1 and 5 once each to make the greatest and the smallest 6-digit numbers. Use Indian commas and find the difference.", a: "Greatest number: 8,65,310.\nSmallest number: 1,03,568 (a number cannot start with 0).\nDifference: 8,65,310 − 1,03,568 = 7,61,742.", marks: 3 }
    ]
  },

  "operations-on-large-numbers": {
    mcq: [
      { q: "What is 4,50,000 − 50,000?", options: ["3,95,000", "4,00,000", "4,50,000", "5,00,000"], answer: 1, explain: "450 thousand − 50 thousand = 400 thousand, which is 4,00,000.", level: 1 },
      { q: "What is 3,400 × 10?", options: ["3,410", "340", "34,000", "3,40,000"], answer: 2, explain: "To multiply by 10, add one zero at the end: 3,400 × 10 = 34,000.", level: 1 },
      { q: "What is 4,800 ÷ 4?", options: ["1,200", "120", "12,000", "400"], answer: 0, explain: "4,800 ÷ 4 = 1,200, because 4 × 1,200 = 4,800.", level: 1 },
      { q: "72 sweets are packed in boxes of 8 each. Which operation tells how many boxes are needed?", options: ["Addition", "Subtraction", "Multiplication", "Division"], answer: 3, explain: "Making equal groups from a total is division: 72 ÷ 8 = 9 boxes.", level: 1 },
      { q: "What is 1,25,000 + 25,000?", options: ["1,35,000", "1,50,000", "2,50,000", "1,25,025"], answer: 1, explain: "125 thousand + 25 thousand = 150 thousand, which is 1,50,000.", level: 1 },
      { q: "A family buys a television for ₹32,500 and a fridge for ₹28,750. How much do they spend in all?", options: ["₹61,250", "₹60,250", "₹51,250", "₹61,350"], answer: 0, explain: "Spending in all means add: 32,500 + 28,750 = 61,250.", level: 2 },
      { q: "A school buys 48 benches at ₹850 each. What is the total cost?", options: ["₹38,400", "₹42,500", "₹40,800", "₹41,800"], answer: 2, explain: "48 × 850 = 50 × 850 − 2 × 850 = 42,500 − 1,700 = 40,800.", level: 2 },
      { q: "To estimate 47,826 + 31,149, round each number to the nearest thousand. What is the estimate?", options: ["78,000", "79,000", "80,000", "78,975"], answer: 1, explain: "47,826 is about 48,000 and 31,149 is about 31,000. The estimate is 48,000 + 31,000 = 79,000.", level: 2 },
      { q: "What is 7,20,000 ÷ 15?", options: ["4,800", "42,000", "4,80,000", "48,000"], answer: 3, explain: "7,20,000 ÷ 15 = 48,000. Check: 15 × 48,000 = 7,20,000.", level: 2 },
      { q: "What is 10,00,000 − 4,56,789?", options: ["5,53,211", "6,43,211", "5,43,211", "5,43,111"], answer: 2, explain: "10,00,000 − 4,56,789 = 5,43,211. Check: 5,43,211 + 4,56,789 = 10,00,000.", level: 2 },
      { q: "A factory makes 2,400 pens a day and works for 25 days in a month. Each pen is sold for ₹6. How much money does it get from pens in a month?", options: ["₹36,000", "₹3,60,000", "₹14,400", "₹3,06,000"], answer: 1, explain: "Pens in a month: 2,400 × 25 = 60,000. Money: 60,000 × 6 = ₹3,60,000. (₹14,400 is the money for only one day.)", level: 3 },
      { q: "Mr Gill has ₹5,00,000. He spends ₹1,85,000 on a tractor part and shares the rest equally among his 5 children. How much does each child get?", options: ["₹37,000", "₹3,15,000", "₹63,000", "₹1,00,000"], answer: 2, explain: "Money left: 5,00,000 − 1,85,000 = 3,15,000. Each child gets 3,15,000 ÷ 5 = ₹63,000.", level: 3 }
    ],
    written: [
      { q: "Add: 2,50,000 + 3,50,000.", a: "6,00,000", marks: 1 },
      { q: "Find 6,000 × 100.", a: "6,00,000", marks: 1 },
      { q: "Fill in the blank: 7,200 ÷ 9 = ____.", a: "800", marks: 1 },
      { q: "Subtract 3,07,500 from 5,00,000. Check your answer.", a: "5,00,000 − 3,07,500 = 1,92,500.\nCheck: 1,92,500 + 3,07,500 = 5,00,000.", marks: 2 },
      { q: "Estimate 59,640 + 20,380 by rounding each number to the nearest thousand. Then find the exact sum.", a: "59,640 is about 60,000 and 20,380 is about 20,000, so the estimate is 80,000.\nExact sum: 59,640 + 20,380 = 80,020.", marks: 2 },
      { q: "A school buys 24 desks at ₹1,250 each and 15 chairs at ₹640 each. How much does it spend in all?", a: "Cost of desks: 24 × 1,250 = ₹30,000.\nCost of chairs: 15 × 640 = ₹9,600.\nTotal cost: 30,000 + 9,600 = ₹39,600.", marks: 3 }
    ]
  },

  "factors-and-multiples": {
    mcq: [
      { q: "Which of these is a factor of 18?", options: ["4", "5", "9", "12"], answer: 2, explain: "18 ÷ 9 = 2 exactly, so 9 is a factor. The factors of 18 are 1, 2, 3, 6, 9 and 18.", level: 1 },
      { q: "What is the 5th multiple of 6?", options: ["11", "30", "36", "24"], answer: 1, explain: "The 5th multiple of 6 is 6 × 5 = 30. (36 is the 6th multiple.)", level: 1 },
      { q: "Which of these is a prime number?", options: ["13", "9", "15", "21"], answer: 0, explain: "13 has only two factors, 1 and 13. The others have more: 9 = 3 × 3, 15 = 3 × 5 and 21 = 3 × 7.", level: 1 },
      { q: "What is the HCF of 6 and 9?", options: ["1", "6", "9", "3"], answer: 3, explain: "Factors of 6: 1, 2, 3, 6. Factors of 9: 1, 3, 9. The common factors are 1 and 3, and the highest is 3.", level: 1 },
      { q: "Which number is divisible by 5?", options: ["4,231", "4,232", "4,235", "4,239"], answer: 2, explain: "A number is divisible by 5 if its last digit is 0 or 5. Only 4,235 ends in 5.", level: 1 },
      { q: "What is the LCM of 6 and 8?", options: ["48", "24", "14", "12"], answer: 1, explain: "Multiples of 6: 6, 12, 18, 24. Multiples of 8: 8, 16, 24. The smallest common multiple is 24. (48 is a common multiple, but not the smallest.)", level: 2 },
      { q: "Riya has 12 red beads and 18 blue beads. She makes as many identical necklaces as she can, using all the beads. How many necklaces can she make?", options: ["2", "3", "36", "6"], answer: 3, explain: "The number of necklaces is the HCF of 12 and 18, which is 6. Each necklace has 2 red and 3 blue beads.", level: 2 },
      { q: "Which number is divisible by both 2 and 3?", options: ["2,418", "2,415", "2,417", "2,419"], answer: 0, explain: "2,418 ends in 8, so it is divisible by 2, and 2 + 4 + 1 + 8 = 15 is divisible by 3. 2,415 is not even, and 2,417 and 2,419 have digit sums 14 and 16.", level: 2 },
      { q: "How many factors does 24 have?", options: ["6", "8", "10", "4"], answer: 1, explain: "The factors of 24 are 1, 2, 3, 4, 6, 8, 12 and 24. That is 8 factors.", level: 2 },
      { q: "Which of these is NOT a prime number?", options: ["47", "43", "51", "53"], answer: 2, explain: "51 = 3 × 17 (its digit sum 5 + 1 = 6 is divisible by 3), so it has more than two factors. 47, 43 and 53 are prime.", level: 2 },
      { q: "Two bells ring together at 8:00 am. One rings every 12 minutes and the other every 15 minutes. When will they next ring together?", options: ["9:00 am", "8:03 am", "8:27 am", "9:30 am"], answer: 0, explain: "They ring together after the LCM of 12 and 15 minutes. Multiples of 12: 12, 24, 36, 48, 60. Multiples of 15: 15, 30, 45, 60. The LCM is 60 minutes, so they ring together at 9:00 am.", level: 3 },
      { q: "What is the greatest 2-digit number that is divisible by both 4 and 6?", options: ["90", "84", "98", "96"], answer: 3, explain: "A number divisible by both 4 and 6 is a multiple of their LCM, 12. The multiples of 12 below 100 are 12, 24, …, 84, 96. The greatest is 96.", level: 3 }
    ],
    written: [
      { q: "Write all the factors of 20.", a: "1, 2, 4, 5, 10 and 20.", marks: 1 },
      { q: "Write the first four multiples of 9.", a: "9, 18, 27 and 36.", marks: 1 },
      { q: "Is 57 a prime number? Give a reason.", a: "No. The digit sum 5 + 7 = 12 is divisible by 3, so 57 is divisible by 3. 57 = 3 × 19, so it has factors other than 1 and 57.", marks: 1 },
      { q: "Find the HCF of 18 and 24.", a: "Factors of 18: 1, 2, 3, 6, 9, 18.\nFactors of 24: 1, 2, 3, 4, 6, 8, 12, 24.\nThe common factors are 1, 2, 3 and 6, so the HCF is 6.", marks: 2 },
      { q: "Find the LCM of 10 and 15.", a: "Multiples of 10: 10, 20, 30, 40.\nMultiples of 15: 15, 30, 45.\nThe smallest common multiple is 30, so the LCM is 30.", marks: 2 },
      { q: "Two ropes, 24 m and 36 m long, are cut into pieces of equal length with none left over. What is the greatest possible length of each piece? How many pieces are there in all?", a: "The greatest length is the HCF of 24 and 36.\nFactors of 24: 1, 2, 3, 4, 6, 8, 12, 24. Factors of 36: 1, 2, 3, 4, 6, 9, 12, 18, 36. The HCF is 12.\nEach piece is 12 m long. Pieces: 24 ÷ 12 = 2 and 36 ÷ 12 = 3, so 5 pieces in all.", marks: 3 }
    ]
  },

  "fractions": {
    mcq: [
      { q: "What is the denominator of 5/8?", options: ["5", "8", "13", "3"], answer: 1, explain: "The denominator is the bottom number, 8. It tells that the whole is divided into 8 equal parts.", level: 1 },
      { q: "What is 2/9 + 5/9?", options: ["7/18", "10/9", "7/9", "3/9"], answer: 2, explain: "The denominators are the same, so add the numerators and keep the denominator: 2 + 5 = 7, giving 7/9.", level: 1 },
      { q: "What is 7/10 − 3/10?", options: ["4/10", "4/20", "10/10", "21/10"], answer: 0, explain: "Subtract the numerators and keep the denominator: 7 − 3 = 4, giving 4/10 (which is 2/5 in simplest form).", level: 1 },
      { q: "Which pair shows like fractions?", options: ["1/2 and 1/3", "2/5 and 2/3", "3/4 and 3/8", "3/7 and 5/7"], answer: 3, explain: "Like fractions have the same denominator. 3/7 and 5/7 both have denominator 7.", level: 1 },
      { q: "Which fraction is equal to 1/2?", options: ["2/3", "3/6", "1/4", "2/6"], answer: 1, explain: "Multiply the top and bottom of 1/2 by 3 to get 3/6. The value does not change.", level: 1 },
      { q: "What is 3/4 + 1/8?", options: ["4/12", "4/8", "7/8", "3/32"], answer: 2, explain: "Make the denominators equal: 3/4 = 6/8. Then 6/8 + 1/8 = 7/8.", level: 2 },
      { q: "What is 2/3 − 1/6?", options: ["1/2", "1/3", "1/6", "1/4"], answer: 0, explain: "2/3 = 4/6, so 4/6 − 1/6 = 3/6 = 1/2.", level: 2 },
      { q: "What is 1 2/5 + 2 1/5?", options: ["3 3/10", "3 2/5", "4 3/5", "3 3/5"], answer: 3, explain: "Add the whole numbers: 1 + 2 = 3. Add the fractions: 2/5 + 1/5 = 3/5. The sum is 3 3/5.", level: 2 },
      { q: "Riya ate 1/4 of a chocolate bar and her brother ate 1/3 of the same bar. What fraction of the bar did they eat together?", options: ["2/7", "7/12", "2/12", "1/12"], answer: 1, explain: "The common denominator is 12. 1/4 = 3/12 and 1/3 = 4/12. So 3/12 + 4/12 = 7/12.", level: 2 },
      { q: "Which fraction is equal to 3/5?", options: ["3/10", "5/3", "6/10", "6/5"], answer: 2, explain: "Multiply the numerator and denominator of 3/5 by 2 to get 6/10.", level: 2 },
      { q: "Asha ate 1/4 of a pizza and Bala ate 1/3 of it. What fraction of the pizza is left?", options: ["7/12", "1/2", "2/5", "5/12"], answer: 3, explain: "They ate 1/4 + 1/3 = 3/12 + 4/12 = 7/12. The whole pizza is 12/12, so 12/12 − 7/12 = 5/12 is left.", level: 3 },
      { q: "What is 5/6 − 1/4 + 1/3?", options: ["7/12", "5/6", "11/12", "1/2"], answer: 2, explain: "Use the denominator 12: 10/12 − 3/12 + 4/12 = 11/12.", level: 3 }
    ],
    written: [
      { q: "Add: 4/11 + 5/11.", a: "4/11 + 5/11 = 9/11", marks: 1 },
      { q: "Write two fractions that are equal to 1/3.", a: "Multiply the numerator and denominator by the same number: 1/3 = 2/6 = 3/9.", marks: 1 },
      { q: "Subtract: 9/10 − 4/10. Write the answer in simplest form.", a: "9/10 − 4/10 = 5/10 = 1/2", marks: 1 },
      { q: "Add 2/5 and 3/10.", a: "Make the denominators equal: 2/5 = 4/10.\n4/10 + 3/10 = 7/10.", marks: 2 },
      { q: "Subtract: 3 3/4 − 1 1/4.", a: "Subtract the whole numbers: 3 − 1 = 2.\nSubtract the fractions: 3/4 − 1/4 = 2/4 = 1/2.\nThe answer is 2 1/2.", marks: 2 },
      { q: "Raju spends 1/4 of his money on books and 1/3 on a cricket bat. What fraction of his money does he spend in all? What fraction is left?", a: "Common denominator is 12: 1/4 = 3/12 and 1/3 = 4/12.\nSpent: 3/12 + 4/12 = 7/12.\nLeft: 12/12 − 7/12 = 5/12.", marks: 3 }
    ]
  },

  "decimals": {
    mcq: [
      { q: "In 6.38, which digit is in the tenths place?", options: ["6", "3", "8", "38"], answer: 1, explain: "In 6.38 the 3 is in the tenths place and the 8 is in the hundredths place.", level: 1 },
      { q: "₹0.50 is the same as how many paise?", options: ["5", "500", "50", "0.5"], answer: 2, explain: "₹1 = 100 paise, so ₹0.50 is half of that, which is 50 paise.", level: 1 },
      { q: "What is 2.5 + 3.4?", options: ["5.9", "6.9", "5.8", "1.9"], answer: 0, explain: "Add the tenths: 5 + 4 = 9. Add the ones: 2 + 3 = 5. The sum is 5.9.", level: 1 },
      { q: "Which is the largest decimal?", options: ["0.19", "0.09", "0.099", "0.9"], answer: 3, explain: "Write them with three decimal places: 0.190, 0.090, 0.099 and 0.900. The largest is 0.900, which is 0.9.", level: 1 },
      { q: "What is 6.8 − 3.3?", options: ["3.1", "3.5", "10.1", "4.5"], answer: 1, explain: "Subtract the tenths: 8 − 3 = 5. Subtract the ones: 6 − 3 = 3. The answer is 3.5.", level: 1 },
      { q: "What is 12.5 + 0.75?", options: ["20.0", "12.80", "14.25", "13.25"], answer: 3, explain: "Write 12.5 as 12.50 and line up the decimal points: 12.50 + 0.75 = 13.25.", level: 2 },
      { q: "Meena buys a notebook for ₹34.50 and a pen for ₹12.75. She pays with a ₹50 note. How much change does she get?", options: ["₹2.75", "₹3.25", "₹3.75", "₹47.25"], answer: 0, explain: "The bill is 34.50 + 12.75 = ₹47.25. Change = 50.00 − 47.25 = ₹2.75. (₹47.25 is the bill, not the change.)", level: 2 },
      { q: "Which fraction is the same as the decimal 0.4?", options: ["4/100", "1/4", "4/10", "40/10"], answer: 2, explain: "The 4 is in the tenths place, so 0.4 = 4/10. (4/100 is 0.04.)", level: 2 },
      { q: "Which list is arranged from the smallest to the largest decimal?", options: ["0.45, 0.4, 0.5, 0.045", "0.045, 0.4, 0.45, 0.5", "0.5, 0.45, 0.4, 0.045", "0.4, 0.045, 0.45, 0.5"], answer: 1, explain: "With three decimal places the numbers are 0.045, 0.400, 0.450 and 0.500. In order from the smallest: 0.045, 0.4, 0.45, 0.5.", level: 2 },
      { q: "What is 15.6 − 8.75?", options: ["7.15", "7.85", "6.95", "6.85"], answer: 3, explain: "Write 15.6 as 15.60. Then 15.60 − 8.75 = 6.85. Check: 6.85 + 8.75 = 15.60.", level: 2 },
      { q: "A tailor cuts pieces of cloth of 2.5 m, 1.75 m and 3.05 m from a 10 m roll. How much cloth is left?", options: ["3.30 m", "2.70 m", "2.30 m", "7.30 m"], answer: 1, explain: "Cloth used: 2.50 + 1.75 + 3.05 = 7.30 m. Cloth left: 10 − 7.30 = 2.70 m. (7.30 m is the cloth used.)", level: 3 },
      { q: "What must be added to 4.65 to make 10?", options: ["5.35", "5.45", "6.35", "5.65"], answer: 0, explain: "10.00 − 4.65 = 5.35. Check: 4.65 + 5.35 = 10.00.", level: 3 }
    ],
    written: [
      { q: "Write 7 tenths and 3 hundredths as a decimal.", a: "0.73", marks: 1 },
      { q: "Write 75 paise in rupees using a decimal point.", a: "₹0.75", marks: 1 },
      { q: "Add: 4.5 + 3.25.", a: "4.50 + 3.25 = 7.75", marks: 1 },
      { q: "Subtract 3.45 from 10. Check your answer.", a: "10.00 − 3.45 = 6.55.\nCheck: 6.55 + 3.45 = 10.00.", marks: 2 },
      { q: "Arrange 0.62, 0.6, 0.062 and 0.26 from the smallest to the largest.", a: "Write them with three decimal places: 0.620, 0.600, 0.062, 0.260.\nFrom the smallest to the largest: 0.062, 0.26, 0.6, 0.62.", marks: 2 },
      { q: "A tailor uses 2.75 m of cloth for a shirt and 1.6 m for a pair of trousers. He started with 5 m of cloth. How much cloth is left?", a: "Cloth used: 2.75 + 1.60 = 4.35 m.\nCloth left: 5.00 − 4.35 = 0.65 m.\nAnswer: 0.65 m.", marks: 3 }
    ]
  },

  "percentage": {
    mcq: [
      { q: "The word percent means:", options: ["out of 10", "out of 100", "out of 1,000", "out of 50"], answer: 1, explain: "Percent means per hundred, or out of 100.", level: 1 },
      { q: "50% is the same as which fraction?", options: ["1/4", "1/5", "1/2", "2/3"], answer: 2, explain: "50% = 50/100 = 1/2.", level: 1 },
      { q: "What is 10% of 200?", options: ["20", "2", "10", "100"], answer: 0, explain: "10% is one-tenth, and 200 ÷ 10 = 20.", level: 1 },
      { q: "What is 3/4 written as a percent?", options: ["34%", "60%", "25%", "75%"], answer: 3, explain: "3/4 = 75/100, so it is 75%.", level: 1 },
      { q: "What is 100% of 45?", options: ["100", "4.5", "45", "145"], answer: 2, explain: "100% means the whole quantity, so 100% of 45 is 45.", level: 1 },
      { q: "What is 25% of 80?", options: ["20", "25", "8", "40"], answer: 0, explain: "25% is one-fourth, and 80 ÷ 4 = 20.", level: 2 },
      { q: "Riya scored 18 out of 20 in a test. What is her percentage?", options: ["18%", "90%", "80%", "9%"], answer: 1, explain: "18/20 = 90/100, so she scored 90%.", level: 2 },
      { q: "What is 3/5 written as a percent?", options: ["35%", "53%", "60%", "30%"], answer: 2, explain: "3/5 = 60/100, so it is 60%.", level: 2 },
      { q: "A jacket priced at ₹600 has a discount of 20%. How much is the discount?", options: ["₹120", "₹12", "₹480", "₹60"], answer: 0, explain: "20% of 600 = 600 ÷ 5 = ₹120. (₹480 is the price after the discount.)", level: 2 },
      { q: "40% written as a fraction in simplest form is:", options: ["1/4", "4/5", "1/40", "2/5"], answer: 3, explain: "40% = 40/100 = 2/5 in simplest form.", level: 2 },
      { q: "In a class of 40 students, 60% are girls. How many boys are there?", options: ["24", "60", "16", "4"], answer: 2, explain: "Girls: 60% of 40 = 24. Boys: 40 − 24 = 16. (24 is the number of girls.)", level: 3 },
      { q: "A cycle costs ₹4,000 and a shop gives a 15% discount. How much does Meena pay for it?", options: ["₹600", "₹3,400", "₹4,600", "₹3,600"], answer: 1, explain: "10% of 4,000 = 400 and 5% = 200, so 15% = ₹600. Meena pays 4,000 − 600 = ₹3,400. (₹600 is the discount.)", level: 3 }
    ],
    written: [
      { q: "Write 7% as a fraction.", a: "7% = 7/100", marks: 1 },
      { q: "Write 1/2 as a percent.", a: "1/2 = 50/100 = 50%", marks: 1 },
      { q: "Find 10% of 450.", a: "10% of 450 = 450 ÷ 10 = 45", marks: 1 },
      { q: "Write 9/20 as a percent.", a: "Make the denominator 100: 9/20 = 45/100.\nSo 9/20 = 45%.", marks: 2 },
      { q: "Find 25% of ₹360.", a: "25% = 1/4.\n360 ÷ 4 = 90.\n25% of ₹360 = ₹90.", marks: 2 },
      { q: "Aman scored 36 out of 40 and Bela scored 42 out of 50 in a test. Find each percentage and say who did better.", a: "Aman: 36/40 = 90/100 = 90%.\nBela: 42/50 = 84/100 = 84%.\nSince 90% is more than 84%, Aman did better.", marks: 3 }
    ]
  },

  "angles": {
    mcq: [
      { q: "An angle smaller than 90° is called:", options: ["a right angle", "an acute angle", "an obtuse angle", "a reflex angle"], answer: 1, explain: "An angle less than 90° is an acute angle.", level: 1 },
      { q: "How many degrees make a straight angle?", options: ["90°", "360°", "180°", "270°"], answer: 2, explain: "A straight angle is 180°, which is half of a full turn.", level: 1 },
      { q: "Which tool is used to measure an angle?", options: ["Protractor", "Ruler", "Thermometer", "Weighing scale"], answer: 0, explain: "A protractor measures angles in degrees. A ruler measures length.", level: 1 },
      { q: "How many degrees are there in a full turn?", options: ["180°", "90°", "270°", "360°"], answer: 3, explain: "A full turn is 360°.", level: 1 },
      { q: "The point where the two arms of an angle meet is called the:", options: ["base", "vertex", "degree", "arm"], answer: 1, explain: "The meeting point of the two arms is the vertex.", level: 1 },
      { q: "What type of angle is 100°?", options: ["Acute", "Right", "Obtuse", "Reflex"], answer: 2, explain: "100° is more than 90° and less than 180°, so it is an obtuse angle.", level: 2 },
      { q: "Two angles on a straight line are 125° and x. What is x?", options: ["55°", "65°", "235°", "45°"], answer: 0, explain: "Angles on a straight line add up to 180°. x = 180° − 125° = 55°.", level: 2 },
      { q: "Three angles around a point are 110°, 95° and 85°. What is the fourth angle?", options: ["80°", "60°", "90°", "70°"], answer: 3, explain: "110° + 95° + 85° = 290°. The angles around a point add up to 360°, so the fourth angle is 360° − 290° = 70°.", level: 2 },
      { q: "Riya looks at a clock at exactly 3 o'clock. What type of angle do the two hands make?", options: ["Acute angle", "Right angle", "Obtuse angle", "Straight angle"], answer: 1, explain: "At 3 o'clock the hour hand points to 3 and the minute hand points to 12. They make a corner like a notebook corner, which is a right angle (90°).", level: 2 },
      { q: "Which angle is bigger than a right angle but smaller than a straight angle?", options: ["80°", "200°", "120°", "90°"], answer: 2, explain: "It must be between 90° and 180°. Only 120° fits. 80° is acute, 90° is a right angle and 200° is a reflex angle.", level: 2 },
      { q: "Three angles on a straight line are 40°, 75° and x. What is x?", options: ["115°", "75°", "105°", "65°"], answer: 3, explain: "40° + 75° = 115°. The three angles add up to 180°, so x = 180° − 115° = 65°. (115° is the sum of the two known angles.)", level: 3 },
      { q: "A wheel makes a quarter turn and then a half turn in the same direction. What is the total angle it turns through?", options: ["180°", "270°", "360°", "90°"], answer: 1, explain: "A quarter turn is 90° and a half turn is 180°. Together: 90° + 180° = 270°.", level: 3 }
    ],
    written: [
      { q: "How many degrees are there in a right angle?", a: "90°", marks: 1 },
      { q: "Name the type of the angle 150°.", a: "150° is more than 90° and less than 180°, so it is an obtuse angle.", marks: 1 },
      { q: "Name the instrument used to measure an angle.", a: "A protractor.", marks: 1 },
      { q: "Two angles on a straight line are 48° and y. Find y and name its type.", a: "Angles on a straight line add up to 180°.\ny = 180° − 48° = 132°.\n132° is more than 90° and less than 180°, so y is an obtuse angle.", marks: 2 },
      { q: "Name the type of each angle: 25°, 90°, 180° and 300°.", a: "25° is acute.\n90° is a right angle.\n180° is a straight angle.\n300° is a reflex angle (more than 180°).", marks: 2 },
      { q: "Four angles around a point are 85°, 105°, 70° and x. Find x and name its type.", a: "Angles around a point add up to 360°.\n85° + 105° + 70° = 260°.\nx = 360° − 260° = 100°.\n100° is more than 90° and less than 180°, so x is an obtuse angle.", marks: 3 }
    ]
  }
});
