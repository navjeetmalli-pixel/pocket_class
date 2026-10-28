// Class 3 Mathematics practice bank, part 1: numbers up to 999, addition, subtraction, multiplication tables, division, shapes, patterns.
StudyData.addPractice(3, "maths", {
  "numbers-up-to-999": {
    mcq: [
      { q: "Which digit is in the hundreds place of 726?", options: ["2", "6", "7", "76"], answer: 2, explain: "In 726 the hundreds digit is 7, the tens digit is 2 and the ones digit is 6.", level: 1 },
      { q: "How many tens make 1 hundred?", options: ["5", "10", "100", "20"], answer: 1, explain: "10 tens make 1 hundred.", level: 1 },
      { q: "What is the number name for 840?", options: ["Eight hundred and forty", "Eight hundred and four", "Eighty-four", "Eight thousand and forty"], answer: 0, explain: "8 hundreds and 4 tens is 840, read as eight hundred and forty.", level: 1 },
      { q: "Which number comes just after 699?", options: ["690", "700", "701", "799"], answer: 1, explain: "699 + 1 = 700.", level: 1 },
      { q: "Which is smaller, 356 or 365?", options: ["365", "They are equal", "356", "We cannot say"], answer: 2, explain: "Both have 3 hundreds. 356 has 5 tens and 365 has 6 tens, so 356 is smaller.", level: 1 },
      { q: "What is the value of the digit 8 in 283?", options: ["8", "800", "80", "83"], answer: 2, explain: "The 8 is in the tens place, so it means 8 tens = 80.", level: 2 },
      { q: "Which is the expanded form of 706?", options: ["700 + 60", "70 + 6", "700 + 6", "7 + 0 + 6"], answer: 2, explain: "706 has 7 hundreds, 0 tens and 6 ones, so 706 = 700 + 6.", level: 2 },
      { q: "Which list goes from the smallest to the greatest number?", options: ["94, 409, 490", "409, 490, 94", "490, 409, 94", "94, 490, 409"], answer: 0, explain: "94 has only 2 digits, so it is the smallest. 409 and 490 both have 4 hundreds, but 409 has fewer tens.", level: 2 },
      { q: "Riya has 3 bundles of 100 sticks and 5 loose sticks. How many sticks does she have?", options: ["35", "305", "350", "3005"], answer: 1, explain: "3 bundles of 100 make 300. With 5 more sticks, she has 305. There are no tens, so the tens digit is 0.", level: 2 },
      { q: "What number is 10 more than 495?", options: ["500", "595", "496", "505"], answer: 3, explain: "495 + 10 = 505. Adding 1 ten changes the tens digit and carries into the hundreds.", level: 2 },
      { q: "What is the greatest 3-digit number that can be made using the digits 4, 0 and 9 once each?", options: ["904", "490", "940", "409"], answer: 2, explain: "Put the biggest digit in the hundreds place, then the next biggest. That gives 9, then 4, then 0: 940.", level: 3 },
      { q: "Which number is the same as 5 hundreds + 14 tens + 3 ones?", options: ["5143", "643", "563", "1043"], answer: 1, explain: "14 tens = 140. So 500 + 140 + 3 = 643.", level: 3 }
    ],
    written: [
      { q: "Write 'six hundred and nine' in numbers.", a: "609", marks: 1 },
      { q: "Fill in the blank: 7 hundreds + 2 tens + 5 ones = ____.", a: "725", marks: 1 },
      { q: "Write the number that comes just before 800.", a: "799", marks: 1 },
      { q: "Write 436 in expanded form. What is the value of the 3?", a: "436 = 400 + 30 + 6.\nThe 3 is in the tens place, so its value is 30.", marks: 2 },
      { q: "Put > or < in the blank: 678 ____ 687. Give a reason.", a: "678 < 687.\nBoth numbers have 6 hundreds, but 678 has 7 tens and 687 has 8 tens, so 678 is smaller.", marks: 2 },
      { q: "Use the digits 2, 5 and 8 once each to make the greatest and the smallest 3-digit numbers. Then find the difference between them.", a: "Greatest number: 852.\nSmallest number: 258.\nDifference: 852 − 258 = 594.", marks: 3 }
    ]
  },

  "addition": {
    mcq: [
      { q: "What is 123 + 234?", options: ["347", "457", "357", "367"], answer: 2, explain: "Ones: 3 + 4 = 7. Tens: 2 + 3 = 5. Hundreds: 1 + 2 = 3. The sum is 357.", level: 1 },
      { q: "What is 450 + 300?", options: ["650", "750", "150", "850"], answer: 1, explain: "4 hundreds + 3 hundreds = 7 hundreds, and the 50 stays the same. 750.", level: 1 },
      { q: "What is 300 + 200?", options: ["50", "5000", "320", "500"], answer: 3, explain: "3 hundreds + 2 hundreds = 5 hundreds = 500.", level: 1 },
      { q: "In 359 + 126, the ones column is 9 + 6 = 15. What do we write in the ones place and what do we carry?", options: ["Write 15, carry 0", "Write 1, carry 5", "Write 5, carry 5", "Write 5, carry 1"], answer: 3, explain: "15 ones = 1 ten and 5 ones. We write 5 in the ones place and carry the 1 ten.", level: 1 },
      { q: "The answer to an addition is called the ____.", options: ["difference", "sum", "product", "borrow"], answer: 1, explain: "The answer to an addition is the sum.", level: 1 },
      { q: "What is 268 + 175?", options: ["433", "343", "443", "453"], answer: 2, explain: "Ones: 8 + 5 = 13, write 3, carry 1. Tens: 6 + 7 + 1 = 14, write 4, carry 1. Hundreds: 2 + 1 + 1 = 4. Sum = 443.", level: 2 },
      { q: "What is 489 + 358?", options: ["847", "837", "747", "857"], answer: 0, explain: "Ones: 9 + 8 = 17, write 7, carry 1. Tens: 8 + 5 + 1 = 14, write 4, carry 1. Hundreds: 4 + 3 + 1 = 8. Sum = 847.", level: 2 },
      { q: "Riya read 185 pages last month and 207 pages this month. How many pages did she read in all?", options: ["382", "492", "402", "392"], answer: 3, explain: "185 + 207: ones 5 + 7 = 12, write 2, carry 1. Tens: 8 + 0 + 1 = 9. Hundreds: 1 + 2 = 3. Total = 392 pages.", level: 2 },
      { q: "Which pair of numbers has a sum of 500?", options: ["300 and 250", "275 and 225", "240 and 270", "150 and 250"], answer: 1, explain: "275 + 225 = 500. The others give 550, 510 and 400.", level: 2 },
      { q: "To estimate 398 + 203, round each number to the nearest hundred. What is the estimate?", options: ["500", "700", "600", "800"], answer: 2, explain: "398 is close to 400 and 203 is close to 200. 400 + 200 = 600.", level: 2 },
      { q: "Find the missing digit: 3_4 + 158 = 502.", options: ["3", "4", "5", "6"], answer: 1, explain: "502 − 158 = 344, so the number is 344 and the missing digit is 4. Check: 344 + 158 = 502.", level: 3 },
      { q: "Ravi has 275 marbles. Amit has 148 more marbles than Ravi. How many marbles do they have together?", options: ["423", "571", "550", "698"], answer: 3, explain: "Amit has 275 + 148 = 423 marbles. Together: 275 + 423 = 698. (423 is only Amit's marbles.)", level: 3 }
    ],
    written: [
      { q: "Add: 340 + 250.", a: "590", marks: 1 },
      { q: "Fill in the blank: 199 + 1 = ____.", a: "200", marks: 1 },
      { q: "What is the sum of 120 and 130?", a: "250", marks: 1 },
      { q: "Add 476 and 358. Show your carrying.", a: "Ones: 6 + 8 = 14, write 4, carry 1.\nTens: 7 + 5 + 1 = 13, write 3, carry 1.\nHundreds: 4 + 3 + 1 = 8.\n476 + 358 = 834.", marks: 2 },
      { q: "A bus carries 164 people in the morning and 189 people in the evening. How many people does it carry in all?", a: "Add 164 + 189.\nOnes: 4 + 9 = 13, write 3, carry 1. Tens: 6 + 8 + 1 = 15, write 5, carry 1. Hundreds: 1 + 1 + 1 = 3.\nThe bus carries 353 people.", marks: 2 },
      { q: "A school library has 238 story books, 154 science books and 119 picture books. How many books are there in all? Check your answer by estimating.", a: "First add 238 + 154 = 392.\nThen 392 + 119 = 511 books.\nEstimate: 240 + 150 + 120 = 510, which is close to 511, so the answer is reasonable.", marks: 3 }
    ]
  },

  "subtraction": {
    mcq: [
      { q: "What is 750 − 300?", options: ["450", "1050", "350", "550"], answer: 0, explain: "7 hundreds − 3 hundreds = 4 hundreds, and the 50 stays. 450.", level: 1 },
      { q: "What is 500 − 200?", options: ["700", "200", "3000", "300"], answer: 3, explain: "5 hundreds − 2 hundreds = 3 hundreds = 300.", level: 1 },
      { q: "632 − 215 = 417. How can you check this answer?", options: ["Subtract 215 from 417", "Add 417 and 215", "Add 632 and 215", "Subtract 417 from 215"], answer: 1, explain: "Add the answer back to the smaller number: 417 + 215 = 632, so the answer is right.", level: 1 },
      { q: "The answer to a subtraction is called the ____.", options: ["sum", "product", "difference", "carry"], answer: 2, explain: "The answer to a subtraction is the difference.", level: 1 },
      { q: "What is 475 − 5?", options: ["425", "480", "465", "470"], answer: 3, explain: "Only the ones digit changes. 5 − 5 = 0, so the answer is 470.", level: 1 },
      { q: "What is 523 − 187?", options: ["346", "436", "336", "344"], answer: 2, explain: "Ones: 13 − 7 = 6. Tens: 1 − 8 needs borrowing, so 11 − 8 = 3. Hundreds: 4 − 1 = 3. Answer 336. Check: 187 + 336 = 523.", level: 2 },
      { q: "What is 602 − 275?", options: ["327", "427", "337", "333"], answer: 0, explain: "Borrow from the hundreds: 602 becomes 5 hundreds, 9 tens and 12 ones. 12 − 5 = 7, 9 − 7 = 2, 5 − 2 = 3. Answer 327.", level: 2 },
      { q: "Riya had ₹700. She bought a bag for ₹345. How much money is left?", options: ["₹455", "₹355", "₹345", "₹365"], answer: 1, explain: "700 − 345 = 355. Check: 355 + 345 = 700.", level: 2 },
      { q: "Which subtraction has the answer 150?", options: ["500 − 250", "350 − 250", "400 − 250", "600 − 550"], answer: 2, explain: "400 − 250 = 150. The others give 250, 100 and 50.", level: 2 },
      { q: "What is 305 − 148?", options: ["167", "163", "257", "157"], answer: 3, explain: "Borrow across the zero: 305 becomes 2 hundreds, 9 tens and 15 ones. 15 − 8 = 7, 9 − 4 = 5, 2 − 1 = 1. Answer 157.", level: 2 },
      { q: "A number minus 156 gives 244. What is the number?", options: ["88", "390", "410", "400"], answer: 3, explain: "To find the bigger number, add: 244 + 156 = 400. Check: 400 − 156 = 244.", level: 3 },
      { q: "Aman has ₹600. He buys a toy for ₹275 and a book for ₹190. How much money is left?", options: ["₹325", "₹135", "₹410", "₹465"], answer: 1, explain: "Money spent: 275 + 190 = 465. Money left: 600 − 465 = 135. (₹465 is the money spent, not the money left.)", level: 3 }
    ],
    written: [
      { q: "Subtract: 780 − 340.", a: "440", marks: 1 },
      { q: "Write the difference of 900 and 400.", a: "900 − 400 = 500", marks: 1 },
      { q: "Fill in the blank: 462 − 100 = ____.", a: "362", marks: 1 },
      { q: "Subtract 359 from 628. Check your answer.", a: "Ones: 8 is smaller than 9, borrow 1 ten: 18 − 9 = 9.\nTens: 1 is smaller than 5, borrow 1 hundred: 11 − 5 = 6. Hundreds: 5 − 3 = 2.\n628 − 359 = 269. Check: 269 + 359 = 628.", marks: 2 },
      { q: "A farmer had 800 mangoes. He sold 465 of them. How many mangoes are left?", a: "Subtract 800 − 465.\nBorrow across the zeros: 10 − 5 = 5, 9 − 6 = 3, 7 − 4 = 3.\n335 mangoes are left. Check: 335 + 465 = 800.", marks: 2 },
      { q: "Meena has ₹500. She buys a pen for ₹56 and a notebook for ₹129. How much money does she have left?", a: "Money spent: 56 + 129 = ₹185.\nMoney left: 500 − 185 = ₹315.\nCheck: 315 + 185 = 500.", marks: 3 }
    ]
  },

  "multiplication-tables": {
    mcq: [
      { q: "What is 5 × 6?", options: ["11", "35", "30", "25"], answer: 2, explain: "5 × 6 = 30. Counting in fives: 5, 10, 15, 20, 25, 30.", level: 1 },
      { q: "What is 10 × 9?", options: ["90", "19", "99", "80"], answer: 0, explain: "A number times 10 ends in 0. 10 × 9 = 90.", level: 1 },
      { q: "2 × 7 means 2 groups of 7. Which is the same as 2 × 7?", options: ["2 + 7", "7 + 7", "2 + 2 + 2", "7 × 7"], answer: 1, explain: "2 groups of 7 is 7 + 7 = 14.", level: 1 },
      { q: "Which number is a multiple of 5?", options: ["32", "52", "58", "45"], answer: 3, explain: "Multiples of 5 end in 0 or 5. 45 = 5 × 9.", level: 1 },
      { q: "What is 7 × 3?", options: ["21", "24", "28", "27"], answer: 0, explain: "7 × 3 = 7 + 7 + 7 = 21.", level: 1 },
      { q: "What is 8 × 7?", options: ["54", "56", "63", "48"], answer: 1, explain: "8 × 7 = 56. (54 is 9 × 6, 63 is 9 × 7 and 48 is 8 × 6.)", level: 2 },
      { q: "Which number is NOT in the 6 times table?", options: ["36", "42", "46", "54"], answer: 2, explain: "The 6 times table goes 6, 12, 18, 24, 30, 36, 42, 48, 54, 60. 46 is not in it.", level: 2 },
      { q: "Riya arranges chairs in 6 rows with 9 chairs in each row. How many chairs are there?", options: ["45", "63", "15", "54"], answer: 3, explain: "6 rows of 9 chairs: 6 × 9 = 54.", level: 2 },
      { q: "Using the 10 times trick, what is 9 × 8?", options: ["72", "64", "81", "82"], answer: 0, explain: "10 × 8 = 80. Take away one group of 8: 80 − 8 = 72.", level: 2 },
      { q: "5 × 8 = 40. Use this to find 6 × 8.", options: ["45", "46", "48", "52"], answer: 2, explain: "6 groups of 8 is one more group of 8 than 5 groups. 40 + 8 = 48.", level: 2 },
      { q: "A box has 8 pencils. Mina buys 7 boxes and then gives away 9 pencils. How many pencils does she have left?", options: ["65", "56", "49", "47"], answer: 3, explain: "7 boxes: 7 × 8 = 56 pencils. After giving away 9: 56 − 9 = 47.", level: 3 },
      { q: "Which number is a multiple of both 4 and 6?", options: ["16", "18", "24", "28"], answer: 2, explain: "24 = 4 × 6 and 24 = 6 × 4. 16 and 28 are not multiples of 6, and 18 is not a multiple of 4.", level: 3 }
    ],
    written: [
      { q: "Write 4 + 4 + 4 + 4 + 4 as a multiplication and find the answer.", a: "5 groups of 4: 5 × 4 = 20.", marks: 1 },
      { q: "Fill in the blank: 9 × 6 = ____.", a: "54", marks: 1 },
      { q: "Write the first five multiples of 3.", a: "3, 6, 9, 12, 15", marks: 1 },
      { q: "Find 9 × 7 using the 10 times trick.", a: "10 × 7 = 70.\nTake away one group of 7: 70 − 7 = 63.\nSo 9 × 7 = 63.", marks: 2 },
      { q: "Explain why 3 × 8 and 8 × 3 give the same answer.", a: "3 rows of 8 dots make 24 dots.\nIf we turn the rows into columns, we get 8 rows of 3 dots, which is also 24. So 3 × 8 = 8 × 3 = 24.", marks: 2 },
      { q: "There are 8 benches in a classroom with 4 children sitting on each bench. Then 5 more children come in. How many children are there in all?", a: "Children on the benches: 8 × 4 = 32.\nAdd the 5 new children: 32 + 5 = 37.\nThere are 37 children in all.", marks: 3 }
    ]
  },

  "division": {
    mcq: [
      { q: "What is 20 ÷ 5?", options: ["4", "15", "25", "5"], answer: 0, explain: "5 × 4 = 20, so 20 ÷ 5 = 4.", level: 1 },
      { q: "What is 18 ÷ 2?", options: ["16", "20", "9", "36"], answer: 2, explain: "Half of 18 is 9, and 2 × 9 = 18.", level: 1 },
      { q: "Which fact helps you find 30 ÷ 6?", options: ["3 × 6 = 18", "6 × 5 = 30", "6 × 6 = 36", "30 − 6 = 24"], answer: 1, explain: "6 × 5 = 30, so 30 ÷ 6 = 5.", level: 1 },
      { q: "What is half of 30?", options: ["10", "20", "60", "15"], answer: 3, explain: "30 ÷ 2 = 15.", level: 1 },
      { q: "Which sign means 'divided by'?", options: ["×", "+", "÷", "−"], answer: 2, explain: "The ÷ sign means divided by or shared equally.", level: 1 },
      { q: "What is 45 ÷ 9?", options: ["4", "6", "54", "5"], answer: 3, explain: "9 × 5 = 45, so 45 ÷ 9 = 5.", level: 2 },
      { q: "What is 36 ÷ 4?", options: ["8", "9", "32", "40"], answer: 1, explain: "4 × 9 = 36, so 36 ÷ 4 = 9.", level: 2 },
      { q: "Riya has 24 laddus. She packs them equally into 4 boxes. How many laddus are in each box?", options: ["20", "28", "6", "8"], answer: 2, explain: "24 ÷ 4 = 6, because 4 × 6 = 24.", level: 2 },
      { q: "13 sweets are shared equally among 4 children. How many does each child get, and how many are left over?", options: ["3 each, 1 left", "4 each, 1 left", "3 each, 2 left", "3 each, 0 left"], answer: 0, explain: "4 × 3 = 12, and 13 − 12 = 1. Each child gets 3 and 1 sweet is left over.", level: 2 },
      { q: "Which division has the answer 7?", options: ["42 ÷ 7", "63 ÷ 7", "35 ÷ 7", "56 ÷ 8"], answer: 3, explain: "56 ÷ 8 = 7. The others give 6, 9 and 5.", level: 2 },
      { q: "30 mangoes are shared equally among some children and each child gets 6. How many children are there?", options: ["24", "36", "5", "6"], answer: 2, explain: "30 ÷ 6 = 5, because 6 × 5 = 30. There are 5 children.", level: 3 },
      { q: "Mohan has 40 stickers. He gives half to his sister and shares the rest equally among 4 friends. How many stickers does each friend get?", options: ["5", "10", "20", "4"], answer: 0, explain: "Half of 40 is 20. Then 20 ÷ 4 = 5 stickers for each friend.", level: 3 }
    ],
    written: [
      { q: "Find 27 ÷ 3.", a: "9, because 3 × 9 = 27.", marks: 1 },
      { q: "Fill in the blank: If 6 × 7 = 42, then 42 ÷ 6 = ____.", a: "7", marks: 1 },
      { q: "Write half of 24.", a: "24 ÷ 2 = 12", marks: 1 },
      { q: "Write two division facts using 4 × 8 = 32.", a: "32 ÷ 4 = 8\n32 ÷ 8 = 4", marks: 2 },
      { q: "35 pencils are shared equally among 5 children. How many pencils does each child get? Check with multiplication.", a: "35 ÷ 5 = 7, so each child gets 7 pencils.\nCheck: 5 × 7 = 35.", marks: 2 },
      { q: "17 flowers are tied into bunches of 5. How many full bunches are made and how many flowers are left over? Why can the leftover not be 5 or more?", a: "3 bunches use 3 × 5 = 15 flowers, and 17 − 15 = 2 flowers are left over.\nThe leftover must be less than 5. If 5 or more were left, we could make another bunch.", marks: 3 }
    ]
  },

  "shapes-2d-and-3d": {
    mcq: [
      { q: "How many sides does a square have?", options: ["3", "4", "5", "6"], answer: 1, explain: "A square has 4 equal sides.", level: 1 },
      { q: "How many sides does a pentagon have?", options: ["4", "6", "5", "3"], answer: 2, explain: "A pentagon has 5 sides and 5 corners.", level: 1 },
      { q: "Which solid shape has 6 equal square faces?", options: ["Sphere", "Cone", "Cylinder", "Cube"], answer: 3, explain: "A cube has 6 square faces that are all the same size.", level: 1 },
      { q: "A tin of ghee is shaped like a ____.", options: ["Cylinder", "Cube", "Cuboid", "Sphere"], answer: 0, explain: "A tin can has the shape of a cylinder.", level: 1 },
      { q: "Which of these is a flat (2D) shape?", options: ["Cube", "Sphere", "Rectangle", "Cuboid"], answer: 2, explain: "A rectangle is flat. Cube, sphere and cuboid are solid (3D) shapes.", level: 1 },
      { q: "How many edges does a cube have?", options: ["6", "8", "12", "4"], answer: 2, explain: "A cube has 12 edges. (6 is its number of faces and 8 is its number of corners.)", level: 2 },
      { q: "How many corners does a cube have?", options: ["8", "12", "6", "4"], answer: 0, explain: "A cube has 8 corners.", level: 2 },
      { q: "Riya sees a shape with 4 sides and 4 corners. Its opposite sides are equal, but all 4 sides are not equal. Which shape is it?", options: ["Rectangle", "Square", "Triangle", "Pentagon"], answer: 0, explain: "A rectangle has opposite sides equal. A square would have all 4 sides equal.", level: 2 },
      { q: "Which has more sides, a hexagon or a pentagon?", options: ["Pentagon, by 1 side", "Hexagon, by 1 side", "Hexagon, by 2 sides", "Both have the same number"], answer: 1, explain: "A hexagon has 6 sides and a pentagon has 5, so the hexagon has 1 more.", level: 2 },
      { q: "Which solid shape has no flat face and no edge?", options: ["Cuboid", "Cube", "Cylinder", "Sphere"], answer: 3, explain: "A sphere is completely round. It has no flat faces, edges or corners.", level: 2 },
      { q: "A shape has 3 more sides than a triangle. Which shape is it?", options: ["Pentagon", "Square", "Hexagon", "Circle"], answer: 2, explain: "A triangle has 3 sides. 3 + 3 = 6 sides, so the shape is a hexagon.", level: 3 },
      { q: "How many faces do 3 dice have altogether?", options: ["18", "9", "12", "24"], answer: 0, explain: "A dice is a cube with 6 faces. 3 × 6 = 18 faces.", level: 3 }
    ],
    written: [
      { q: "Name the shape that has 3 sides and 3 corners.", a: "Triangle", marks: 1 },
      { q: "Fill in the blank: A cube has ____ faces.", a: "6", marks: 1 },
      { q: "Name a solid shape that looks like a ball.", a: "Sphere", marks: 1 },
      { q: "Write two differences between a circle and a square.", a: "A circle is round with no corners and no straight sides.\nA square has 4 straight, equal sides and 4 corners.", marks: 2 },
      { q: "Name the shape of each object: a dice, a matchbox, a tin can, a ball.", a: "Dice: cube.\nMatchbox: cuboid.\nTin can: cylinder.\nBall: sphere.", marks: 2 },
      { q: "Write the number of sides and corners for a triangle, a square, a pentagon and a hexagon.", a: "Triangle: 3 sides, 3 corners.\nSquare: 4 sides, 4 corners.\nPentagon: 5 sides, 5 corners.\nHexagon: 6 sides, 6 corners.", marks: 3 }
    ]
  },

  "patterns": {
    mcq: [
      { q: "What comes next in 4, 8, 12, 16, ...?", options: ["18", "20", "24", "14"], answer: 1, explain: "The rule is add 4 each time. 16 + 4 = 20.", level: 1 },
      { q: "What comes next in 90, 80, 70, ...?", options: ["60", "50", "75", "100"], answer: 0, explain: "The rule is take away 10 each time. 70 − 10 = 60.", level: 1 },
      { q: "What is the core of ▲ ▲ ● ▲ ▲ ● ▲ ▲ ●?", options: ["▲ ●", "▲", "▲ ▲ ●", "● ▲ ●"], answer: 2, explain: "The part that repeats again and again is ▲ ▲ ●.", level: 1 },
      { q: "What is the rule for the pattern 12, 14, 16, 18, ...?", options: ["Add 1", "Add 4", "Take away 2", "Add 2"], answer: 3, explain: "Each number is 2 more than the one before it.", level: 1 },
      { q: "What comes next? red, red, blue, red, red, blue, red, red, ...", options: ["blue", "red", "green", "yellow"], answer: 0, explain: "The core is red, red, blue. After red, red, the next colour is blue.", level: 1 },
      { q: "Find the missing number: 35, 40, __, 50, 55.", options: ["46", "44", "48", "45"], answer: 3, explain: "The rule is add 5. 40 + 5 = 45, and 45 + 5 = 50.", level: 2 },
      { q: "Find the missing number: 64, 58, 52, __, 40.", options: ["44", "47", "46", "45"], answer: 2, explain: "The rule is take away 6. 52 − 6 = 46, and 46 − 6 = 40.", level: 2 },
      { q: "Riya puts ₹10 in her piggy bank on day 1, ₹20 on day 2 and ₹30 on day 3. If the pattern goes on, how much will she put on day 5?", options: ["₹50", "₹40", "₹60", "₹45"], answer: 0, explain: "She adds ₹10 more each day: 40 on day 4 and 50 on day 5.", level: 2 },
      { q: "Which number does not fit the pattern 2, 4, 6, 9, 10?", options: ["4", "6", "9", "10"], answer: 2, explain: "The pattern adds 2 each time: 2, 4, 6, 8, 10. The number 9 should be 8.", level: 2 },
      { q: "Blocks are used to build steps: 2, 5, 8, 11, ... How many blocks will the next step need?", options: ["13", "14", "15", "16"], answer: 1, explain: "Each step has 3 more blocks. 11 + 3 = 14.", level: 2 },
      { q: "A pattern starts at 100 and takes away 15 each time: 100, 85, 70, ... What is the 5th number?", options: ["55", "45", "30", "40"], answer: 3, explain: "100, 85, 70, 55, 40. The 5th number is 40.", level: 3 },
      { q: "Red, blue and green beads are strung again and again in this order: red, blue, green, red, blue, green, ... What colour is the 10th bead?", options: ["Green", "Red", "Blue", "We cannot find out"], answer: 1, explain: "Every 3 beads the core repeats. The 9th bead is green, so the 10th bead starts the core again and is red.", level: 3 }
    ],
    written: [
      { q: "Write the next two numbers: 6, 12, 18, 24, ...", a: "The rule is add 6.\nThe next two numbers are 30 and 36.", marks: 1 },
      { q: "Fill in the blank: In the pattern 80, 70, 60, 50, the rule is ____.", a: "Take away 10 each time.", marks: 1 },
      { q: "Write the core of this pattern: ○ ○ □ ○ ○ □.", a: "○ ○ □", marks: 1 },
      { q: "Find the rule and the missing number: 15, 20, __, 30, 35.", a: "The rule is add 5 each time.\nThe missing number is 20 + 5 = 25.", marks: 2 },
      { q: "Continue this pattern with the next three letters: A B B A B B A B B ...", a: "The core is A B B.\nThe next three letters are A, B, B.", marks: 2 },
      { q: "Riya reads 4 pages on day 1, 7 pages on day 2 and 10 pages on day 3. She keeps reading in the same pattern. Write the rule, the pages she reads on days 4 and 5, and the total pages in 5 days.", a: "Rule: add 3 pages each day.\nDay 4: 13 pages. Day 5: 16 pages.\nTotal: 4 + 7 + 10 + 13 + 16 = 50 pages.", marks: 3 }
    ]
  }
});
