// Class 4 Mathematics practice bank, part 1: numbers up to 9999, addition and subtraction, multiplication, division, factors and multiples, fractions, decimals.
StudyData.addPractice(4, "maths", {
  "numbers-up-to-9999": {
    mcq: [
      { q: "Which digit is in the thousands place of 7,215?", options: ["2", "7", "1", "5"], answer: 1, explain: "In 7,215 the thousands digit is 7, the hundreds digit is 2, the tens digit is 1 and the ones digit is 5.", level: 1 },
      { q: "Which number comes just before 3,000?", options: ["2,999", "2,990", "3,001", "2,900"], answer: 0, explain: "3,000 − 1 = 2,999. The number 3,001 comes after 3,000.", level: 1 },
      { q: "What is the number name for 6,040?", options: ["Six thousand and four", "Six thousand four hundred", "Six thousand and forty", "Six hundred and forty"], answer: 2, explain: "6,040 has 6 thousands, 0 hundreds and 4 tens, so it is six thousand and forty.", level: 1 },
      { q: "How many ones make 1 thousand?", options: ["10", "100", "10,000", "1,000"], answer: 3, explain: "1 thousand = 10 hundreds = 100 tens = 1,000 ones.", level: 1 },
      { q: "Which is smaller, 5,340 or 5,430?", options: ["5,340", "5,430", "They are equal", "We cannot say"], answer: 0, explain: "Both have 5 thousands. 5,340 has 3 hundreds and 5,430 has 4 hundreds, so 5,340 is smaller.", level: 1 },
      { q: "What is the value of the digit 9 in 2,934?", options: ["9", "90", "900", "9,000"], answer: 2, explain: "The 9 is in the hundreds place, so its value is 9 × 100 = 900.", level: 2 },
      { q: "Which is the expanded form of 8,009?", options: ["8000 + 9", "8000 + 90", "8000 + 900", "800 + 9"], answer: 0, explain: "8,009 has 8 thousands, 0 hundreds, 0 tens and 9 ones, so it is 8000 + 9.", level: 2 },
      { q: "Riya has 6 bundles of 1000 sticks, 3 bundles of 100 sticks and 7 loose sticks. How many sticks does she have in all?", options: ["6,037", "637", "6,370", "6,307"], answer: 3, explain: "6 thousands + 3 hundreds + 7 ones = 6000 + 300 + 7 = 6,307. There are no tens, so the tens digit is 0.", level: 2 },
      { q: "Which list is arranged from the greatest to the smallest number?", options: ["4,075, 4,570, 4,705", "4,705, 4,570, 4,075", "4,570, 4,705, 4,075", "4,075, 4,705, 4,570"], answer: 1, explain: "All have 4 thousands. 4,705 has 7 hundreds, 4,570 has 5 hundreds and 4,075 has 0 hundreds, so the order from the greatest is 4,705, 4,570, 4,075.", level: 2 },
      { q: "What is 1000 more than 5,248?", options: ["5,258", "15,248", "5,348", "6,248"], answer: 3, explain: "Adding 1000 raises the thousands digit by 1: 5,248 becomes 6,248. Only the thousands digit changes.", level: 2 },
      { q: "What is the greatest 4-digit number that can be made using the digits 3, 0, 8 and 5 once each?", options: ["8,350", "8,530", "8,503", "8,053"], answer: 1, explain: "Put the biggest digit in the thousands place, then the next biggest, and so on: 8, 5, 3, 0 gives 8,530.", level: 3 },
      { q: "What is the smallest 4-digit number that can be made using the digits 6, 0, 2 and 9 once each?", options: ["2,690", "2,096", "2,069", "2,609"], answer: 2, explain: "A 4-digit number cannot start with 0, so the smallest non-zero digit 2 goes first. Then 0, 6, 9 in order: 2,069.", level: 3 }
    ],
    written: [
      { q: "Write 'four thousand five hundred and six' in numbers.", a: "4,506", marks: 1 },
      { q: "Fill in the blank: 3 thousands + 2 hundreds + 7 ones = ____.", a: "3,207", marks: 1 },
      { q: "Write the number that comes just after 8,999.", a: "9,000", marks: 1 },
      { q: "Write 7,052 in expanded form. What is the value of the digit 5?", a: "7,052 = 7000 + 50 + 2.\nThe 5 is in the tens place, so its value is 50.", marks: 2 },
      { q: "Put > or < in the blank: 6,284 ____ 6,248. Give a reason.", a: "6,284 > 6,248.\nBoth numbers have 6 thousands and 2 hundreds, but 6,284 has 8 tens and 6,248 has 4 tens, so 6,284 is greater.", marks: 2 },
      { q: "Use the digits 4, 1, 7 and 0 once each to make the greatest and the smallest 4-digit numbers. Then find the difference between them.", a: "Greatest number: 7,410.\nSmallest number: 1,047 (a 4-digit number cannot start with 0).\nDifference: 7,410 − 1,047 = 6,363.", marks: 3 }
    ]
  },

  "addition-and-subtraction": {
    mcq: [
      { q: "What is 2,300 + 400?", options: ["2,300", "2,340", "2,700", "6,300"], answer: 2, explain: "3 hundreds + 4 hundreds = 7 hundreds, and the thousands stay the same. The sum is 2,700.", level: 1 },
      { q: "What is 5,000 − 2,000?", options: ["3,000", "7,000", "2,000", "3,500"], answer: 0, explain: "5 thousands − 2 thousands = 3 thousands = 3,000.", level: 1 },
      { q: "What is 4,500 − 500?", options: ["5,000", "4,500", "400", "4,000"], answer: 3, explain: "4,500 is 45 hundreds. Taking away 5 hundreds leaves 40 hundreds, which is 4,000.", level: 1 },
      { q: "What is 1,234 + 2,345?", options: ["3,479", "3,579", "3,589", "4,579"], answer: 1, explain: "Ones: 4 + 5 = 9. Tens: 3 + 4 = 7. Hundreds: 2 + 3 = 5. Thousands: 1 + 2 = 3. The sum is 3,579.", level: 1 },
      { q: "7,500 − 2,300 = 5,200. How can you check this answer?", options: ["Add 5,200 and 2,300", "Subtract 2,300 from 5,200", "Add 7,500 and 2,300", "Subtract 5,200 from 2,300"], answer: 0, explain: "Add the difference to the smaller number: 5,200 + 2,300 = 7,500, which is the bigger number. So the answer is correct.", level: 1 },
      { q: "What is 4,687 + 2,375?", options: ["6,962", "7,162", "7,052", "7,062"], answer: 3, explain: "Ones: 7 + 5 = 12, write 2 carry 1. Tens: 8 + 7 + 1 = 16, write 6 carry 1. Hundreds: 6 + 3 + 1 = 10, write 0 carry 1. Thousands: 4 + 2 + 1 = 7. The sum is 7,062.", level: 2 },
      { q: "What is 6,205 − 2,478?", options: ["3,827", "3,727", "4,733", "3,737"], answer: 1, explain: "6,205 − 2,000 = 4,205. Then 4,205 − 478 = 3,727. Check: 3,727 + 2,478 = 6,205.", level: 2 },
      { q: "A school library had 2,450 books. It bought 875 more books. How many books does it have now?", options: ["3,325", "3,225", "1,575", "2,325"], answer: 0, explain: "'More books bought' means add: 2,450 + 875 = 3,325. (1,575 is what we get by subtracting, which is wrong here.)", level: 2 },
      { q: "Which number, added to 2,750, gives 6,000?", options: ["3,750", "8,750", "3,250", "4,250"], answer: 2, explain: "6,000 − 2,750 = 3,250. Check: 2,750 + 3,250 = 6,000.", level: 2 },
      { q: "Which sum is equal to 5,000?", options: ["3,200 + 1,700", "2,750 + 2,250", "2,600 + 2,500", "1,950 + 3,150"], answer: 1, explain: "2,750 + 2,250 = 5,000. The others give 4,900, 5,100 and 5,100.", level: 2 },
      { q: "The sum of two numbers is 9,000. One of the numbers is 4,675. What is the other number?", options: ["4,325", "4,425", "5,325", "13,675"], answer: 0, explain: "The other number = 9,000 − 4,675 = 4,325. Check: 4,675 + 4,325 = 9,000. (13,675 is what we get by adding, which is wrong here.)", level: 3 },
      { q: "Amit wants to read 4,000 pages in two months. He read 1,250 pages in January and 1,380 pages in February. How many more pages must he read?", options: ["2,630", "1,470", "6,630", "1,370"], answer: 3, explain: "Pages read so far: 1,250 + 1,380 = 2,630. Pages still to read: 4,000 − 2,630 = 1,370. (2,630 is the pages already read.)", level: 3 }
    ],
    written: [
      { q: "Add: 3,400 + 600.", a: "4,000", marks: 1 },
      { q: "Subtract: 5,600 − 300.", a: "5,300", marks: 1 },
      { q: "What is the sum of 1,500 and 2,500?", a: "4,000", marks: 1 },
      { q: "Add 3,846 and 2,579. Show your carrying.", a: "Ones: 6 + 9 = 15, write 5, carry 1.\nTens: 4 + 7 + 1 = 12, write 2, carry 1.\nHundreds: 8 + 5 + 1 = 14, write 4, carry 1. Thousands: 3 + 2 + 1 = 6.\n3,846 + 2,579 = 6,425.", marks: 2 },
      { q: "Subtract 1,758 from 4,000. Check your answer.", a: "4,000 − 1,000 = 3,000; 3,000 − 700 = 2,300; 2,300 − 50 = 2,250; 2,250 − 8 = 2,242.\n4,000 − 1,758 = 2,242.\nCheck: 2,242 + 1,758 = 4,000.", marks: 2 },
      { q: "A farmer sold 2,365 kg of wheat in the first month and 1,985 kg in the second month. He had 5,000 kg of wheat at the start. How much wheat is left?", a: "Wheat sold: 2,365 + 1,985 = 4,350 kg.\nWheat left: 5,000 − 4,350 = 650 kg.\nCheck: 650 + 4,350 = 5,000.", marks: 3 }
    ]
  },

  "multiplication": {
    mcq: [
      { q: "What is 14 × 10?", options: ["14", "140", "1,400", "24"], answer: 1, explain: "To multiply by 10, add one zero at the end: 14 × 10 = 140.", level: 1 },
      { q: "What is 35 × 100?", options: ["350", "305", "3,050", "3,500"], answer: 3, explain: "To multiply by 100, add two zeros at the end: 35 × 100 = 3,500.", level: 1 },
      { q: "What is 3 × 21?", options: ["63", "24", "60", "93"], answer: 0, explain: "3 × 1 = 3 and 3 × 2 tens = 6 tens, so 3 × 21 = 63.", level: 1 },
      { q: "23 × 4 is the same as adding 23 how many times?", options: ["2 times", "3 times", "4 times", "23 times"], answer: 2, explain: "Multiplication is repeated addition. 23 × 4 = 23 + 23 + 23 + 23, which is 4 times.", level: 1 },
      { q: "The answer to a multiplication is called the ____.", options: ["product", "sum", "difference", "quotient"], answer: 0, explain: "The answer to a multiplication is the product.", level: 1 },
      { q: "What is 38 × 4?", options: ["142", "152", "1,232", "162"], answer: 1, explain: "8 × 4 = 32, write 2 carry 3. 3 × 4 = 12, plus 3 is 15. The product is 152. (1,232 comes from forgetting to carry.)", level: 2 },
      { q: "What is 45 × 12?", options: ["450", "495", "900", "540"], answer: 3, explain: "45 × 10 = 450 and 45 × 2 = 90. Adding the partial products: 450 + 90 = 540.", level: 2 },
      { q: "Riya buys 14 packets of stickers. Each packet has 6 stickers. How many stickers does she have in all?", options: ["20", "74", "84", "94"], answer: 2, explain: "Equal packets means multiply: 14 × 6 = 10 × 6 + 4 × 6 = 60 + 24 = 84 stickers. (20 comes from adding 14 and 6.)", level: 2 },
      { q: "What is 26 × 15?", options: ["390", "360", "380", "410"], answer: 0, explain: "26 × 10 = 260 and 26 × 5 = 130. Then 260 + 130 = 390.", level: 2 },
      { q: "27 × ____ = 216. Which number fits in the blank?", options: ["6", "7", "9", "8"], answer: 3, explain: "27 × 8 = 20 × 8 + 7 × 8 = 160 + 56 = 216. The other numbers give 162, 189 and 243.", level: 2 },
      { q: "Which product is the greatest?", options: ["24 × 17", "19 × 21", "35 × 11", "28 × 14"], answer: 0, explain: "24 × 17 = 408, 19 × 21 = 399, 35 × 11 = 385 and 28 × 14 = 392. The greatest is 408.", level: 3 },
      { q: "A box has 24 pencils. A shop has 15 such boxes. The shopkeeper gives away 40 pencils. How many pencils are left?", options: ["360", "400", "320", "345"], answer: 2, explain: "Pencils in all: 24 × 15 = 240 + 120 = 360. After giving away 40: 360 − 40 = 320. (360 is the number before giving any away.)", level: 3 }
    ],
    written: [
      { q: "Find 25 × 10.", a: "250", marks: 1 },
      { q: "Fill in the blank: 47 × 100 = ____.", a: "4,700", marks: 1 },
      { q: "What is 3 × 21?", a: "63", marks: 1 },
      { q: "Find 53 × 6. Show your carrying.", a: "Ones: 3 × 6 = 18, write 8, carry 1.\nTens: 5 × 6 = 30, plus 1 is 31.\n53 × 6 = 318.", marks: 2 },
      { q: "Find 32 × 14 by writing the partial products.", a: "32 × 10 = 320.\n32 × 4 = 128.\n320 + 128 = 448, so 32 × 14 = 448.", marks: 2 },
      { q: "A hall has 18 rows with 22 chairs in each row. 30 of the chairs are broken. How many chairs can be used?", a: "Total chairs: 18 × 22 = 18 × 20 + 18 × 2 = 360 + 36 = 396.\nChairs that can be used: 396 − 30 = 366.\nAnswer: 366 chairs.", marks: 3 }
    ]
  },

  "division": {
    mcq: [
      { q: "What is 48 ÷ 6?", options: ["6", "7", "8", "9"], answer: 2, explain: "6 × 8 = 48, so 48 ÷ 6 = 8.", level: 1 },
      { q: "What is 63 ÷ 7?", options: ["9", "8", "7", "10"], answer: 0, explain: "7 × 9 = 63, so 63 ÷ 7 = 9.", level: 1 },
      { q: "What is the remainder when 13 is divided by 4?", options: ["0", "1", "2", "3"], answer: 1, explain: "4 × 3 = 12 and 13 − 12 = 1. The remainder is 1.", level: 1 },
      { q: "In 25 ÷ 4, which number is the divisor?", options: ["25", "6", "4", "1"], answer: 2, explain: "The divisor is the number we divide by, which is 4. The dividend is 25, the quotient is 6 and the remainder is 1.", level: 1 },
      { q: "The remainder in a division is always ____ than the divisor.", options: ["bigger", "equal", "double", "smaller"], answer: 3, explain: "If the remainder were as big as the divisor, we could make one more group. So the remainder is always smaller than the divisor.", level: 1 },
      { q: "What is 75 ÷ 4?", options: ["18 remainder 3", "19 remainder 1", "17 remainder 7", "18 remainder 4"], answer: 0, explain: "4 × 18 = 72 and 75 − 72 = 3. So the quotient is 18 and the remainder is 3. (A remainder of 4 would be wrong, as it is not smaller than 4.)", level: 2 },
      { q: "A division has divisor 7, quotient 12 and remainder 3. What is the dividend?", options: ["84", "22", "87", "91"], answer: 2, explain: "Dividend = divisor × quotient + remainder = 7 × 12 + 3 = 84 + 3 = 87. (84 forgets to add the remainder.)", level: 2 },
      { q: "Riya has 50 laddoos. She puts 6 laddoos in each box. How many boxes does she need to pack all the laddoos?", options: ["8", "9", "10", "6"], answer: 1, explain: "50 ÷ 6 = 8 remainder 2. Eight boxes hold 48 laddoos, and the 2 left over need one more box. So she needs 9 boxes.", level: 2 },
      { q: "Which number leaves remainder 0 when divided by 6?", options: ["56", "62", "65", "54"], answer: 3, explain: "6 × 9 = 54, so 54 is divided by 6 exactly. 56 and 62 leave remainder 2, and 65 leaves remainder 5.", level: 2 },
      { q: "What is 96 ÷ 8?", options: ["11", "12", "13", "14"], answer: 1, explain: "8 × 12 = 96, so 96 ÷ 8 = 12.", level: 2 },
      { q: "A number is divided by 9. The quotient is 14 and the remainder is 5. What is the number?", options: ["126", "137", "131", "140"], answer: 2, explain: "The number = 9 × 14 + 5 = 126 + 5 = 131. (126 forgets the remainder.)", level: 3 },
      { q: "Which of these can NOT be the remainder when a number is divided by 7?", options: ["0", "6", "3", "7"], answer: 3, explain: "The remainder must be smaller than the divisor 7. So 7 is not possible, while 0, 3 and 6 are all possible.", level: 3 }
    ],
    written: [
      { q: "Divide: 72 ÷ 8.", a: "9", marks: 1 },
      { q: "Fill in the blank: 56 ÷ 7 = ____.", a: "8", marks: 1 },
      { q: "What is the remainder when 29 is divided by 6?", a: "6 × 4 = 24 and 29 − 24 = 5, so the remainder is 5.", marks: 1 },
      { q: "Divide 87 by 5 and check your answer.", a: "5 × 17 = 85 and 87 − 85 = 2.\nQuotient 17, remainder 2.\nCheck: 5 × 17 + 2 = 85 + 2 = 87.", marks: 2 },
      { q: "A rope 94 m long is cut into pieces of 6 m each. How many full pieces are made, and how many metres of rope are left?", a: "94 ÷ 6: 6 × 15 = 90 and 94 − 90 = 4.\n15 full pieces are made and 4 m of rope is left.", marks: 2 },
      { q: "83 children go on a trip. Each bus seats 9 children. How many buses are needed, and how many seats stay empty?", a: "83 ÷ 9: 9 × 9 = 81, so 9 buses carry 81 children and 2 children are left.\nThe 2 children need one more bus, so 10 buses are needed.\nSeats in 10 buses = 90, so empty seats = 90 − 83 = 7.", marks: 3 }
    ]
  },

  "factors-and-multiples": {
    mcq: [
      { q: "Which of these is a factor of 12?", options: ["5", "7", "4", "8"], answer: 2, explain: "12 ÷ 4 = 3 exactly, so 4 is a factor of 12. 5, 7 and 8 do not divide 12 exactly.", level: 1 },
      { q: "Which of these is a multiple of 6?", options: ["18", "16", "20", "26"], answer: 0, explain: "6 × 3 = 18. The others are not in the 6 times table.", level: 1 },
      { q: "Which number is a factor of every number?", options: ["0", "2", "10", "1"], answer: 3, explain: "Every number can be written as 1 × itself, so 1 divides every number exactly.", level: 1 },
      { q: "Which of these is an even number?", options: ["17", "30", "23", "45"], answer: 1, explain: "30 is a multiple of 2, so it is even. 17, 23 and 45 are odd.", level: 1 },
      { q: "What is the third multiple of 5?", options: ["10", "20", "15", "8"], answer: 2, explain: "The multiples of 5 are 5, 10, 15, 20, … The third one is 15.", level: 1 },
      { q: "How many factors does 16 have?", options: ["4", "5", "6", "8"], answer: 1, explain: "The factors of 16 are 1, 2, 4, 8 and 16. That is 5 factors.", level: 2 },
      { q: "Which number is a factor of both 12 and 18?", options: ["4", "5", "6", "9"], answer: 2, explain: "12 ÷ 6 = 2 and 18 ÷ 6 = 3, so 6 divides both. 4 does not divide 18, 5 divides neither, and 9 does not divide 12.", level: 2 },
      { q: "Riya wants to arrange 24 chairs in equal rows with none left over. Which number of rows is NOT possible?", options: ["5", "4", "6", "8"], answer: 0, explain: "The number of rows must be a factor of 24. 4, 6 and 8 all divide 24 exactly, but 5 does not (24 ÷ 5 leaves a remainder).", level: 2 },
      { q: "Which list shows only multiples of 7?", options: ["7, 14, 20, 28", "7, 17, 27, 37", "14, 21, 27, 35", "7, 14, 21, 28"], answer: 3, explain: "7, 14, 21 and 28 are 7 × 1, 7 × 2, 7 × 3 and 7 × 4. Each of the other lists has at least one number that is not in the 7 times table.", level: 2 },
      { q: "Which number is a multiple of both 3 and 4?", options: ["18", "24", "10", "14"], answer: 1, explain: "24 = 3 × 8 and 24 = 4 × 6. 18 is a multiple of 3 but not of 4, and 10 and 14 are multiples of neither.", level: 2 },
      { q: "I am a multiple of 9 and a factor of 54. I am more than 9 and less than 27. Which number am I?", options: ["12", "27", "36", "18"], answer: 3, explain: "The multiples of 9 between 9 and 27 are 18 only. 18 × 3 = 54, so 18 is also a factor of 54. 27 is not less than 27.", level: 3 },
      { q: "What is the sum of all the factors of 10?", options: ["8", "17", "18", "20"], answer: 2, explain: "The factors of 10 are 1, 2, 5 and 10. Their sum is 1 + 2 + 5 + 10 = 18. (8 leaves out the factor 10 itself.)", level: 3 }
    ],
    written: [
      { q: "Write all the factors of 8.", a: "1, 2, 4 and 8", marks: 1 },
      { q: "Write the first four multiples of 9.", a: "9, 18, 27, 36", marks: 1 },
      { q: "Write yes or no: Is 35 a multiple of 7?", a: "Yes, because 7 × 5 = 35.", marks: 1 },
      { q: "Find all the factors of 28.", a: "Pairs that multiply to 28: 1 × 28, 2 × 14, 4 × 7.\nThe factors of 28 are 1, 2, 4, 7, 14 and 28.", marks: 2 },
      { q: "Is 45 a multiple of 9? Is 9 a factor of 50? Give a reason for each.", a: "45 is a multiple of 9, because 9 × 5 = 45.\n9 is not a factor of 50, because 50 ÷ 9 leaves remainder 5.", marks: 2 },
      { q: "Write the factors of 18 and the factors of 24. Which factors are common to both, and which is the greatest of these?", a: "Factors of 18: 1, 2, 3, 6, 9, 18.\nFactors of 24: 1, 2, 3, 4, 6, 8, 12, 24.\nCommon factors: 1, 2, 3 and 6. The greatest common factor is 6.", marks: 3 }
    ]
  },

  "fractions": {
    mcq: [
      { q: "In the fraction 5/9, which number is the denominator?", options: ["9", "5", "14", "4"], answer: 0, explain: "The denominator is the bottom number. It tells how many equal parts make the whole. Here it is 9.", level: 1 },
      { q: "What is 2/7 + 3/7?", options: ["5/14", "1/7", "6/7", "5/7"], answer: 3, explain: "The denominators are the same, so add the numerators: 2 + 3 = 5. Keep the denominator 7. The answer is 5/7.", level: 1 },
      { q: "Which fraction is equal to 1/3?", options: ["1/6", "2/3", "2/6", "3/6"], answer: 2, explain: "Multiply the top and bottom of 1/3 by 2: 2/6. (3/6 is equal to 1/2, not 1/3.)", level: 1 },
      { q: "What is 5/8 − 2/8?", options: ["3/8", "7/8", "3/16", "8/3"], answer: 0, explain: "The denominators are the same, so subtract the numerators: 5 − 2 = 3. Keep the denominator 8. The answer is 3/8.", level: 1 },
      { q: "How many quarters (1/4) make one whole?", options: ["2", "4", "3", "8"], answer: 1, explain: "A whole cut into 4 equal parts has 4 quarters, so 4 quarters make one whole.", level: 1 },
      { q: "Riya has 20 mangoes. She gives 1/5 of them to a neighbour. How many mangoes does she give?", options: ["5", "4", "15", "16"], answer: 1, explain: "1/5 of 20 = 20 ÷ 5 = 4 mangoes. (16 is the number of mangoes she keeps.)", level: 2 },
      { q: "What is 3/5 of 25?", options: ["5", "10", "15", "20"], answer: 2, explain: "1/5 of 25 = 25 ÷ 5 = 5. So 3/5 of 25 = 3 × 5 = 15.", level: 2 },
      { q: "Which fraction is equal to 4/6?", options: ["2/3", "1/3", "3/4", "4/8"], answer: 0, explain: "Divide the top and bottom of 4/6 by 2: 4 ÷ 2 = 2 and 6 ÷ 2 = 3. So 4/6 = 2/3.", level: 2 },
      { q: "What is 8/12 in simplest form?", options: ["4/6", "8/6", "4/3", "2/3"], answer: 3, explain: "Divide the top and bottom by 4: 8 ÷ 4 = 2 and 12 ÷ 4 = 3. So 8/12 = 2/3. (4/6 is equal to it but can be simplified further.)", level: 2 },
      { q: "Which pair shows like fractions?", options: ["2/5 and 2/7", "3/8 and 5/8", "1/4 and 1/2", "4/9 and 4/5"], answer: 1, explain: "Like fractions have the same denominator. 3/8 and 5/8 both have denominator 8.", level: 2 },
      { q: "Rohan ate 2/9 of a cake and Meena ate 4/9 of the same cake. What fraction of the cake is left?", options: ["6/9", "2/9", "3/9", "3/18"], answer: 2, explain: "Eaten: 2/9 + 4/9 = 6/9. The whole cake is 9/9, so what is left is 9/9 − 6/9 = 3/9. (6/9 is the part that was eaten.)", level: 3 },
      { q: "Which is greater, 3/4 of 20 or 2/5 of 40?", options: ["3/4 of 20", "2/5 of 40", "They are equal", "We cannot say"], answer: 1, explain: "3/4 of 20 = 3 × 5 = 15. 2/5 of 40 = 2 × 8 = 16. Since 16 is more than 15, 2/5 of 40 is greater.", level: 3 }
    ],
    written: [
      { q: "A roti is cut into 7 equal parts and 3 parts are eaten. Write the fraction that was eaten.", a: "3/7", marks: 1 },
      { q: "Add: 4/11 + 5/11.", a: "4/11 + 5/11 = 9/11", marks: 1 },
      { q: "Fill in the blank: 1/2 = ____/6.", a: "3, because 1 × 3 = 3 and 2 × 3 = 6.", marks: 1 },
      { q: "Find 3/4 of 28.", a: "1/4 of 28 = 28 ÷ 4 = 7.\n3/4 of 28 = 3 × 7 = 21.", marks: 2 },
      { q: "Write two fractions that are equal to 2/5.", a: "Multiply the top and bottom by the same number.\n2/5 = (2 × 2)/(5 × 2) = 4/10.\n2/5 = (2 × 3)/(5 × 3) = 6/15.", marks: 2 },
      { q: "Mother made 12 rotis. The family ate 7/12 of them in the morning and 3/12 at night. What fraction of the rotis was eaten in all? What fraction is left? How many rotis are left?", a: "Eaten in all: 7/12 + 3/12 = 10/12.\nLeft: 12/12 − 10/12 = 2/12.\n2/12 of 12 rotis = 2 rotis are left.", marks: 3 }
    ]
  },

  "introduction-to-decimals": {
    mcq: [
      { q: "How is 7 tenths written as a decimal?", options: ["0.07", "7.0", "0.7", "70"], answer: 2, explain: "7 tenths is 7/10, written 0.7, with the 7 in the tenths place.", level: 1 },
      { q: "How many paise make ₹1?", options: ["10", "50", "1000", "100"], answer: 3, explain: "₹1 = 100 paise.", level: 1 },
      { q: "How is 75 paise written in rupees?", options: ["₹7.5", "₹0.75", "₹75", "₹0.075"], answer: 1, explain: "75 paise is 75/100 of a rupee, so it is ₹0.75.", level: 1 },
      { q: "In the decimal 6.4, the digit 4 is in the ____ place.", options: ["tenths", "ones", "hundredths", "tens"], answer: 0, explain: "The digit just after the decimal point is in the tenths place. So 6.4 is 6 wholes and 4 tenths.", level: 1 },
      { q: "Which is the smallest decimal?", options: ["0.9", "0.2", "0.5", "0.7"], answer: 1, explain: "All have 0 wholes. Compare the tenths: 2 is the smallest, so 0.2 is the smallest.", level: 1 },
      { q: "Write 2 m 35 cm in metres.", options: ["2.5 m", "2.35 m", "23.5 m", "2.035 m"], answer: 1, explain: "35 cm = 0.35 m. So 2 m 35 cm = 2 + 0.35 = 2.35 m.", level: 2 },
      { q: "What does ₹5.05 mean?", options: ["5 rupees 50 paise", "50 rupees 5 paise", "505 rupees", "5 rupees 5 paise"], answer: 3, explain: "The digits after the point are 05, which is 5 paise. So ₹5.05 is 5 rupees and 5 paise. (5 rupees 50 paise is written ₹5.50.)", level: 2 },
      { q: "A ribbon is 45 cm long. What is its length in metres?", options: ["4.5 m", "0.045 m", "0.45 m", "45 m"], answer: 2, explain: "1 cm = 0.01 m, so 45 cm = 45 × 0.01 = 0.45 m.", level: 2 },
      { q: "Which list shows the numbers from the smallest to the greatest?", options: ["0.05, 0.5, 1.05, 1.5", "0.5, 0.05, 1.05, 1.5", "0.05, 0.5, 1.5, 1.05", "1.5, 1.05, 0.5, 0.05"], answer: 0, explain: "Compare the whole parts first. For the same whole part, compare tenths: 0.05 < 0.5 and 1.05 < 1.5. So the order is 0.05, 0.5, 1.05, 1.5.", level: 2 },
      { q: "How many paise are there in ₹6.25?", options: ["65", "6,250", "625", "6,025"], answer: 2, explain: "₹6 = 600 paise and 25 paise more makes 625 paise.", level: 2 },
      { q: "Amit has three coins of 50 paise and two coins of ₹1. How much money does he have in rupees?", options: ["₹5.00", "₹3.05", "₹0.35", "₹3.50"], answer: 3, explain: "Three 50 paise coins = 150 paise = ₹1.50. Two ₹1 coins = ₹2. Total = ₹1.50 + ₹2 = ₹3.50.", level: 3 },
      { q: "Which decimal is greater than 0.3 but less than 0.4?", options: ["0.25", "0.45", "0.35", "0.5"], answer: 2, explain: "0.35 has 3 tenths and 5 hundredths, so it lies between 0.3 and 0.4. 0.25 is less than 0.3, and 0.45 and 0.5 are more than 0.4.", level: 3 }
    ],
    written: [
      { q: "Write 9 tenths as a decimal.", a: "0.9", marks: 1 },
      { q: "Write 6 rupees 40 paise as a decimal.", a: "₹6.40", marks: 1 },
      { q: "Write 8 cm in metres.", a: "0.08 m", marks: 1 },
      { q: "Write 3 m 8 cm in metres. Then write 138 cm in metres.", a: "3 m 8 cm = 3 + 0.08 = 3.08 m.\n138 cm = 1 m 38 cm = 1.38 m.", marks: 2 },
      { q: "Which is more, ₹4.05 or ₹4.50? Give a reason.", a: "₹4.50 is more.\nBoth have 4 rupees, but ₹4.50 has 5 tenths and ₹4.05 has 0 tenths.", marks: 2 },
      { q: "Meena has two ₹5 coins, one ₹2 coin and three coins of 50 paise. How much money does she have in rupees? Write it as a decimal and also in paise.", a: "Two ₹5 coins = ₹10. One ₹2 coin = ₹2. Three 50 paise coins = 150 paise = ₹1.50.\nTotal = 10 + 2 + 1.50 = ₹13.50.\nIn paise: ₹13.50 = 1,350 paise.", marks: 3 }
    ]
  }
});
