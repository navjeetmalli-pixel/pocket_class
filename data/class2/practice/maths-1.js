// Class 2 Mathematics practice bank, part 1: numbers, place value, addition, subtraction, shapes, measurement, money, time, multiplication, patterns, tally marks.
StudyData.addPractice(2, "maths", {
  "numbers-up-to-100": {
    mcq: [
      { q: "What comes just before 70?", options: ["69", "71", "60", "7"], answer: 0, explain: "69 is one less than 70, so it comes just before.", level: 1 },
      { q: "What comes just after 79?", options: ["78", "70", "80", "89"], answer: 2, explain: "After 79 we count 80.", level: 1 },
      { q: "Which is the number name for 45?", options: ["Fifty-four", "Forty-five", "Fourteen", "Fifteen"], answer: 1, explain: "45 is read as forty-five.", level: 1 },
      { q: "Count by tens: 70, 80, __. Which number comes next?", options: ["81", "100", "90", "85"], answer: 2, explain: "Counting by tens, 80 + 10 = 90.", level: 1 },
      { q: "Which is the smallest number?", options: ["29", "38", "83", "92"], answer: 0, explain: "29 has only 2 tens. The others have more tens, so 29 is the smallest.", level: 1 },
      { q: "How many tens make 100?", options: ["5", "10", "20", "100"], answer: 1, explain: "10 tens make 100.", level: 1 },
      { q: "Raju is number 59 in the line at the mela. Seema stands right behind him. What is her number?", options: ["58", "50", "69", "60"], answer: 3, explain: "The number after 59 is 60.", level: 2 },
      { q: "Count back: 50, 49, 48, __. Which number comes next?", options: ["47", "49", "51", "40"], answer: 0, explain: "Counting back, we take 1 away each time. 48 − 1 = 47.", level: 2 },
      { q: "Mala counts in tens from 25: 25, 35, 45, __. Which number is next?", options: ["46", "65", "55", "50"], answer: 2, explain: "Each step is 10 more. 45 + 10 = 55.", level: 2 },
      { q: "Which list goes from the smallest to the biggest number?", options: ["34, 43, 24", "24, 34, 43", "43, 34, 24", "34, 24, 43"], answer: 1, explain: "24 is smaller than 34, and 34 is smaller than 43.", level: 2 }
    ],
    written: [
      { q: "Fill in the blank: The number after 89 is ____.", a: "90", marks: 1 },
      { q: "Write the answer: Count by tens from 10 to 100.", a: "10, 20, 30, 40, 50, 60, 70, 80, 90, 100", marks: 1 },
      { q: "Fill in the blank: Ten more than 70 is ____.", a: "80, because 70 + 10 = 80.", marks: 1 },
      { q: "Write the answer: What is the number before 100?", a: "99", marks: 1 }
    ]
  },

  "place-value-tens-and-ones": {
    mcq: [
      { q: "In 58, which digit is in the tens place?", options: ["8", "5", "58", "50"], answer: 1, explain: "58 has 5 tens and 8 ones. The 5 is in the tens place.", level: 1 },
      { q: "In 72, which digit is in the ones place?", options: ["7", "70", "2", "72"], answer: 2, explain: "72 has 7 tens and 2 ones. The 2 is in the ones place.", level: 1 },
      { q: "3 tens and 5 ones make:", options: ["53", "8", "305", "35"], answer: 3, explain: "3 tens is 30, and 30 + 5 = 35.", level: 1 },
      { q: "How many tens are in 90?", options: ["0", "90", "9", "10"], answer: 2, explain: "90 is 9 tens and 0 ones.", level: 1 },
      { q: "What is 70 + 6?", options: ["706", "76", "67", "13"], answer: 1, explain: "70 + 6 = 76.", level: 1 },
      { q: "Which number has 0 ones?", options: ["25", "31", "40", "67"], answer: 2, explain: "40 is 4 tens and 0 ones.", level: 1 },
      { q: "What is the value of 7 in the number 37?", options: ["3", "30", "7", "37"], answer: 2, explain: "The 7 is in the ones place, so it stands for 7.", level: 2 },
      { q: "Which number has 2 in the tens place and 6 in the ones place?", options: ["62", "26", "8", "206"], answer: 1, explain: "2 tens and 6 ones make 26.", level: 2 },
      { q: "Raju has 2 bundles of 10 sticks and 7 loose sticks. How many sticks does he have?", options: ["27", "9", "207", "72"], answer: 0, explain: "2 bundles is 20. Then 20 + 7 = 27.", level: 2 },
      { q: "Meena has 35 beads. She ties them in bundles of 10. How many bundles and loose beads does she get?", options: ["5 bundles, 3 loose", "8 bundles, 0 loose", "35 bundles, 0 loose", "3 bundles, 5 loose"], answer: 3, explain: "35 is 3 tens and 5 ones. So she gets 3 bundles and 5 loose beads.", level: 2 }
    ],
    written: [
      { q: "Fill in the blank: 6 tens and 2 ones is the number ____.", a: "62", marks: 1 },
      { q: "Fill in the blanks: In 85, the tens digit is ____ and the ones digit is ____.", a: "The tens digit is 8 and the ones digit is 5.", marks: 1 },
      { q: "Write the answer: 40 + 9 = ?", a: "49", marks: 1 },
      { q: "Write the answer: How many ones are there in 3 tens?", a: "30 ones, because 1 ten is 10 ones.", marks: 1 }
    ]
  },

  "addition-with-carrying": {
    mcq: [
      { q: "What is 6 + 7?", options: ["12", "14", "13", "67"], answer: 2, explain: "6 + 7 = 13.", level: 1 },
      { q: "What is 14 + 5?", options: ["19", "9", "20", "18"], answer: 0, explain: "4 + 5 = 9 ones and 1 ten, so the answer is 19. No carrying is needed.", level: 1 },
      { q: "What is 20 + 30?", options: ["23", "50", "60", "500"], answer: 1, explain: "2 tens + 3 tens = 5 tens, which is 50.", level: 1 },
      { q: "What is 28 + 6?", options: ["24", "44", "34", "22"], answer: 2, explain: "8 + 6 = 14. Write 4 and carry 1. Then 2 + 1 = 3 tens. The answer is 34.", level: 1 },
      { q: "What is 45 + 10?", options: ["55", "46", "35", "50"], answer: 0, explain: "Adding 10 makes the tens digit one more. 45 + 10 = 55.", level: 1 },
      { q: "What is 17 + 8?", options: ["15", "25", "24", "35"], answer: 1, explain: "7 + 8 = 15. Write 5 and carry 1. Then 1 + 1 = 2 tens. The answer is 25.", level: 1 },
      { q: "Ravi has 38 marbles. Sita gives him 24 more. How many marbles does he have now?", options: ["52", "62", "512", "14"], answer: 1, explain: "8 + 4 = 12. Write 2 and carry 1. Then 3 + 2 + 1 = 6 tens. The answer is 62.", level: 2 },
      { q: "At a mela, 46 children came in the morning and 29 came in the evening. How many children came in all?", options: ["65", "615", "17", "75"], answer: 3, explain: "6 + 9 = 15. Write 5 and carry 1. Then 4 + 2 + 1 = 7 tens. The answer is 75.", level: 2 },
      { q: "Which sum needs carrying?", options: ["21 + 14", "32 + 15", "26 + 17", "40 + 29"], answer: 2, explain: "In 26 + 17, the ones are 6 + 7 = 13, which is more than 9. So we carry.", level: 2 },
      { q: "In an addition, the ones add up to 15. What do we do?", options: ["Write 5 and carry 1 ten", "Write 1 and carry 5", "Write 15 and carry nothing", "Write 5 and carry 5"], answer: 0, explain: "15 ones is 1 ten and 5 ones. Write 5 in the ones place and carry 1 ten.", level: 2 }
    ],
    written: [
      { q: "Fill in the blank: 9 + 8 = ____", a: "17", marks: 1 },
      { q: "Fill in the blank: 24 + 19 = ____", a: "43. Ones: 4 + 9 = 13, write 3 and carry 1. Tens: 2 + 1 + 1 = 4.", marks: 1 },
      { q: "Write the answer: Sunil has 35 stickers. He gets 17 more. How many stickers does he have now?", a: "35 + 17 = 52. Sunil has 52 stickers.", marks: 1 },
      { q: "Write the answer: There are 28 girls and 25 boys in a class. How many children are there in all?", a: "28 + 25 = 53. There are 53 children.", marks: 1 }
    ]
  },

  "subtraction-with-borrowing": {
    mcq: [
      { q: "What is 15 − 6?", options: ["8", "10", "9", "21"], answer: 2, explain: "15 − 6 = 9.", level: 1 },
      { q: "What is 30 − 10?", options: ["20", "40", "10", "3"], answer: 0, explain: "3 tens − 1 ten = 2 tens, which is 20.", level: 1 },
      { q: "What is 48 − 5?", options: ["53", "43", "44", "42"], answer: 1, explain: "8 − 5 = 3 ones, and the 4 tens stay the same. The answer is 43.", level: 1 },
      { q: "What is 60 − 20?", options: ["80", "30", "50", "40"], answer: 3, explain: "6 tens − 2 tens = 4 tens, which is 40.", level: 1 },
      { q: "What is 23 − 8?", options: ["15", "25", "14", "16"], answer: 0, explain: "Borrow 1 ten: 13 − 8 = 5. Then 2 − 1 = 1 ten. The answer is 15.", level: 1 },
      { q: "To check 45 − 20 = 25, we add 25 and what?", options: ["5", "45", "20", "65"], answer: 2, explain: "25 + 20 = 45. This is the number we started with, so the answer is right.", level: 1 },
      { q: "Seema had 50 laddoos. She gave away 18. How many laddoos are left?", options: ["32", "42", "38", "68"], answer: 0, explain: "Borrow 1 ten: 10 − 8 = 2. Then 5 − 1 = 4 tens, and 4 − 1 = 3 tens. The answer is 32.", level: 2 },
      { q: "A bus has 62 people. At a stop, 27 get off. How many people are left in the bus?", options: ["45", "89", "35", "41"], answer: 2, explain: "Borrow 1 ten: 12 − 7 = 5. Then 6 − 1 = 5 tens, and 5 − 2 = 3 tens. The answer is 35.", level: 2 },
      { q: "Which subtraction needs borrowing?", options: ["57 − 23", "64 − 31", "45 − 18", "98 − 76"], answer: 2, explain: "In 45 − 18, 5 ones is less than 8 ones, so we must borrow a ten.", level: 2 },
      { q: "52 − 17 = 35. Which sum checks this answer?", options: ["35 − 17", "52 + 17", "52 − 35", "35 + 17"], answer: 3, explain: "35 + 17 = 52. We get back the number we started with.", level: 2 }
    ],
    written: [
      { q: "Fill in the blank: 20 − 7 = ____", a: "13", marks: 1 },
      { q: "Fill in the blank: 41 − 6 = ____", a: "35. Borrow 1 ten: 11 − 6 = 5. Then 4 − 1 = 3 tens.", marks: 1 },
      { q: "Write the answer: Anu has 72 beads. She loses 8 beads. How many beads are left?", a: "72 − 8 = 64. Anu has 64 beads left.", marks: 1 },
      { q: "Write the answer: 36 − 19 = ?", a: "17. Borrow 1 ten: 16 − 9 = 7. Then 3 − 1 = 2 tens, and 2 − 1 = 1 ten.", marks: 1 }
    ]
  },

  "shapes-and-lines": {
    mcq: [
      { q: "Which shape has 3 corners?", options: ["Square", "Circle", "Triangle", "Rectangle"], answer: 2, explain: "A triangle has 3 sides and 3 corners.", level: 1 },
      { q: "Which shape is made with a curved line?", options: ["Circle", "Square", "Triangle", "Rectangle"], answer: 0, explain: "A circle is round, so its edge is a curved line.", level: 1 },
      { q: "How many sides does a rectangle have?", options: ["3", "4", "5", "2"], answer: 1, explain: "A rectangle has 4 sides.", level: 1 },
      { q: "Which of these is a closed shape?", options: ["The letter L", "The letter C", "The letter U", "A square"], answer: 3, explain: "A square has no gap, so it is closed. The letters L, C and U have gaps.", level: 1 },
      { q: "Which of these has a curved edge?", options: ["A pencil", "A ruler", "The rim of a bangle", "The edge of a door"], answer: 2, explain: "A bangle is round, so its rim is curved. The others are straight.", level: 1 },
      { q: "Which shape has 4 corners?", options: ["Square", "Circle", "Triangle", "Curved line"], answer: 0, explain: "A square has 4 corners.", level: 1 },
      { q: "Rani draws a shape with 4 sides and 4 corners. All 4 sides are equal. Which shape is it?", options: ["Triangle", "Circle", "Rectangle", "Square"], answer: 3, explain: "A square has 4 equal sides and 4 corners.", level: 2 },
      { q: "Raju bends a wire into a shape with a gap at the end. What kind of shape is it?", options: ["Closed", "Open", "Square", "Triangle"], answer: 1, explain: "A shape with a gap is an open shape.", level: 2 },
      { q: "A triangle and a square are drawn together. How many sides are there in all?", options: ["6", "8", "7", "12"], answer: 2, explain: "A triangle has 3 sides and a square has 4 sides. 3 + 4 = 7.", level: 2 },
      { q: "Which of these has a curved edge?", options: ["A chapati", "A brick", "A ruler", "A book"], answer: 0, explain: "A chapati is round, so its edge is curved.", level: 2 }
    ],
    written: [
      { q: "Fill in the blank: A triangle has ____ sides.", a: "3", marks: 1 },
      { q: "Fill in the blank: A ____ shape has no gap.", a: "closed", marks: 1 },
      { q: "Write the answer: Name one thing at home that is shaped like a circle.", a: "A roti (or a plate, or a clock). It is round like a circle.", marks: 1 },
      { q: "Count and write: How many corners do 2 squares have in all?", a: "8 corners. Each square has 4 corners, and 4 + 4 = 8.", marks: 1 }
    ]
  },

  "measurement": {
    mcq: [
      { q: "Which is longer?", options: ["1 metre", "1 centimetre", "Both are the same", "We cannot tell"], answer: 0, explain: "1 metre is 100 centimetres, so it is longer.", level: 1 },
      { q: "How many millilitres make 1 litre?", options: ["100", "10", "1000", "1"], answer: 2, explain: "1 L = 1000 mL.", level: 1 },
      { q: "Which unit do we use to measure the length of a pencil?", options: ["kg", "cm", "L", "g"], answer: 1, explain: "Length is measured in centimetres or metres.", level: 1 },
      { q: "Which can hold the most water?", options: ["A bucket", "A spoon", "A cup", "A glass"], answer: 0, explain: "A bucket is the biggest, so it can hold the most.", level: 1 },
      { q: "Which unit is best to measure the length of a classroom?", options: ["grams", "litres", "kilograms", "metres"], answer: 3, explain: "A classroom is long, so we use metres.", level: 1 },
      { q: "Which is the heaviest?", options: ["A feather", "A pencil", "A full school bag", "A leaf"], answer: 2, explain: "A full school bag weighs the most. The others are very light.", level: 1 },
      { q: "A rope is 3 metres long. How many centimetres is that?", options: ["30", "300", "3", "3000"], answer: 1, explain: "1 m = 100 cm, so 3 m = 3 × 100 = 300 cm.", level: 2 },
      { q: "Mother buys 2 kg of rice and 1 kg of sugar. What is the total weight?", options: ["2 kg", "1 kg", "3 kg", "21 kg"], answer: 2, explain: "2 kg + 1 kg = 3 kg.", level: 2 },
      { q: "A jug holds 2 litres. A bottle holds 1 litre. How many full bottles of water fill the jug?", options: ["1", "2", "3", "4"], answer: 1, explain: "2 L is two times 1 L, so 2 bottles fill the jug.", level: 2 },
      { q: "Which is longer?", options: ["Same length", "50 cm", "We cannot tell", "1 m"], answer: 3, explain: "1 m is 100 cm. That is more than 50 cm.", level: 2 }
    ],
    written: [
      { q: "Fill in the blank: 1 m = ____ cm.", a: "100", marks: 1 },
      { q: "Fill in the blank: 1 L = ____ mL.", a: "1000", marks: 1 },
      { q: "Write the answer: Which unit do we use to weigh a bag of flour?", a: "Kilogram (kg).", marks: 1 },
      { q: "Write the answer: 2 kg = how many grams?", a: "2000 g, because 1 kg = 1000 g.", marks: 1 }
    ]
  },

  "money": {
    mcq: [
      { q: "What is ₹5 + ₹5?", options: ["₹10", "₹55", "₹25", "₹5"], answer: 0, explain: "₹5 + ₹5 = ₹10.", level: 1 },
      { q: "What is ₹20 + ₹30?", options: ["₹60", "₹50", "₹23", "₹500"], answer: 1, explain: "2 tens + 3 tens = 5 tens, so ₹50.", level: 1 },
      { q: "What is ₹50 − ₹20?", options: ["₹70", "₹40", "₹30", "₹20"], answer: 2, explain: "5 tens − 2 tens = 3 tens, so ₹30.", level: 1 },
      { q: "Which two coins make ₹7?", options: ["₹2 and ₹2", "₹5 and ₹5", "₹10 and ₹2", "₹5 and ₹2"], answer: 3, explain: "₹5 + ₹2 = ₹7.", level: 1 },
      { q: "How many ₹10 notes make ₹50?", options: ["10", "5", "50", "2"], answer: 1, explain: "5 tens make 50, so 5 notes of ₹10 make ₹50.", level: 1 },
      { q: "Which sign do we write for the rupee?", options: ["₹", "$", "%", "+"], answer: 0, explain: "The rupee sign is ₹.", level: 1 },
      { q: "A pen costs ₹8. Ravi pays ₹10. How much change does he get?", options: ["₹18", "₹2", "₹8", "₹12"], answer: 1, explain: "₹10 − ₹8 = ₹2.", level: 2 },
      { q: "Meena buys a ball for ₹15 and a toffee for ₹5. How much does she pay in all?", options: ["₹20", "₹10", "₹25", "₹155"], answer: 0, explain: "₹15 + ₹5 = ₹20.", level: 2 },
      { q: "Riya has ₹40. She buys a notebook for ₹25. How much money is left?", options: ["₹65", "₹25", "₹15", "₹10"], answer: 2, explain: "₹40 − ₹25 = ₹15.", level: 2 },
      { q: "Which of these makes ₹25?", options: ["₹10 + ₹5", "₹20 + ₹2", "₹5 + ₹5 + ₹5", "₹10 + ₹10 + ₹5"], answer: 3, explain: "₹10 + ₹10 = ₹20, and ₹20 + ₹5 = ₹25.", level: 2 }
    ],
    written: [
      { q: "Fill in the blank: ₹10 + ₹6 = ₹____", a: "₹16", marks: 1 },
      { q: "Fill in the blank: ₹30 − ₹5 = ₹____", a: "₹25", marks: 1 },
      { q: "Write the answer: A kulfi costs ₹20. Ali pays ₹50. How much change does he get?", a: "₹50 − ₹20 = ₹30. He gets ₹30 back.", marks: 1 },
      { q: "Count and write: How many ₹5 coins make ₹20?", a: "4 coins, because 5 + 5 + 5 + 5 = 20.", marks: 1 }
    ]
  },

  "time-clock-and-months": {
    mcq: [
      { q: "Which month comes just before July?", options: ["August", "June", "May", "April"], answer: 1, explain: "The months go June, July, August.", level: 1 },
      { q: "Which is the first month of the year?", options: ["January", "December", "March", "February"], answer: 0, explain: "The year begins with January.", level: 1 },
      { q: "The short hand is at 3 and the long hand is at 12. What time is it?", options: ["12 o'clock", "Half past 3", "3 o'clock", "6 o'clock"], answer: 2, explain: "The long hand at 12 means o'clock. The short hand at 3 means 3 o'clock.", level: 1 },
      { q: "Half past 8 is written as:", options: ["8:06", "8:30", "8:15", "6:08"], answer: 1, explain: "Half past means 30 minutes after the hour, so 8:30.", level: 1 },
      { q: "When the long hand points to 6, the clock shows:", options: ["o'clock", "a month", "a day", "half past"], answer: 3, explain: "The long hand at 6 means half past the hour.", level: 1 },
      { q: "Which is the last month of the year?", options: ["December", "November", "October", "January"], answer: 0, explain: "The year ends with December.", level: 1 },
      { q: "School starts at 8 o'clock. Where is the long hand on the clock?", options: ["At 6", "At 12", "At 8", "At 3"], answer: 1, explain: "At o'clock, the long hand points to 12.", level: 2 },
      { q: "Meena's birthday is in the month after August. Which month is it?", options: ["July", "October", "June", "September"], answer: 3, explain: "The months go August, September, October.", level: 2 },
      { q: "Ravi goes out to play at half past 4. What time is that?", options: ["5:30", "4:00", "4:30", "6:30"], answer: 2, explain: "Half past 4 is 4:30.", level: 2 },
      { q: "Which month comes between June and August?", options: ["July", "May", "September", "June"], answer: 0, explain: "The months go June, July, August. So July is in between.", level: 2 }
    ],
    written: [
      { q: "Fill in the blank: The month after November is ____.", a: "December", marks: 1 },
      { q: "Fill in the blank: Half past 9 is written as ____.", a: "9:30", marks: 1 },
      { q: "Write the answer: Which hand of the clock is the short hand?", a: "The hour hand is the short hand.", marks: 1 },
      { q: "Write the answer: Name the month before March.", a: "February", marks: 1 }
    ]
  },

  "multiplication-as-repeated-addition": {
    mcq: [
      { q: "2 + 2 + 2 can be written as:", options: ["3 × 2", "2 × 2", "3 × 3", "2 + 3"], answer: 0, explain: "There are 3 groups of 2, so it is 3 × 2.", level: 1 },
      { q: "What is 3 × 2?", options: ["5", "6", "32", "9"], answer: 1, explain: "3 × 2 means 2 + 2 + 2 = 6.", level: 1 },
      { q: "What is 10 + 10 + 10?", options: ["20", "13", "30", "100"], answer: 2, explain: "10 + 10 + 10 = 30.", level: 1 },
      { q: "The answer we get when we multiply is called the:", options: ["sum", "digit", "difference", "product"], answer: 3, explain: "The answer of a multiplication is called the product.", level: 1 },
      { q: "In 4 × 3, how many groups are there?", options: ["3", "7", "12", "4"], answer: 3, explain: "4 × 3 means 4 groups of 3.", level: 1 },
      { q: "3 × 4 means the same as:", options: ["3 + 4", "4 + 4 + 4", "3 + 3 + 3 + 3", "3 + 3 + 4"], answer: 1, explain: "3 × 4 is 3 groups of 4, so 4 + 4 + 4 = 12.", level: 1 },
      { q: "Each cycle has 2 wheels. How many wheels do 4 cycles have?", options: ["6", "8", "24", "2"], answer: 1, explain: "4 groups of 2: 2 + 2 + 2 + 2 = 8 wheels.", level: 2 },
      { q: "Each plate has 5 laddoos. There are 3 plates. How many laddoos are there?", options: ["8", "35", "15", "53"], answer: 2, explain: "3 groups of 5: 5 + 5 + 5 = 15 laddoos.", level: 2 },
      { q: "Which is the same as 4 × 5?", options: ["4 + 5", "5 + 5 + 5", "4 + 4 + 4", "5 + 5 + 5 + 5"], answer: 3, explain: "4 × 5 means 4 groups of 5, so 5 + 5 + 5 + 5 = 20.", level: 2 },
      { q: "Sita has 3 boxes with 2 pencils in each box. Then she gets 4 more pencils. How many pencils does she have now?", options: ["10", "9", "24", "12"], answer: 0, explain: "3 × 2 = 6 pencils. Then 6 + 4 = 10 pencils.", level: 2 }
    ],
    written: [
      { q: "Fill in the blank: 4 + 4 + 4 = 3 × ____", a: "4", marks: 1 },
      { q: "Fill in the blank: 5 × 2 = ____", a: "10", marks: 1 },
      { q: "Write the answer: Write 3 + 3 + 3 + 3 as a multiplication.", a: "4 × 3 = 12, because there are 4 groups of 3.", marks: 1 },
      { q: "Count and write: There are 3 plates with 2 puris on each plate. How many puris are there in all?", a: "3 × 2 = 6. There are 6 puris.", marks: 1 }
    ]
  },

  "patterns": {
    mcq: [
      { q: "What comes next: 5, 10, 15, 20, 25, __?", options: ["26", "35", "30", "28"], answer: 2, explain: "The rule is add 5. 25 + 5 = 30.", level: 1 },
      { q: "What comes next: 1, 2, 3, 4, __?", options: ["6", "5", "3", "10"], answer: 1, explain: "The rule is add 1. 4 + 1 = 5.", level: 1 },
      { q: "What comes next: 90, 80, 70, __?", options: ["60", "75", "71", "50"], answer: 0, explain: "The rule is subtract 10. 70 − 10 = 60.", level: 1 },
      { q: "What comes next in the shape pattern: circle, square, circle, square, __?", options: ["triangle", "square", "star", "circle"], answer: 3, explain: "The shapes repeat circle, square. So circle comes next.", level: 1 },
      { q: "What is the rule in 3, 6, 9, 12?", options: ["Add 2", "Add 3", "Add 4", "Subtract 3"], answer: 1, explain: "Each number is 3 more than the one before it.", level: 1 },
      { q: "Find the missing number: 4, 6, __, 10.", options: ["7", "9", "8", "12"], answer: 2, explain: "The rule is add 2. 6 + 2 = 8.", level: 1 },
      { q: "Mala builds a tower. She puts 1 block on day 1, 2 blocks on day 2 and 3 blocks on day 3. She adds one more each day. How many blocks does she put on day 5?", options: ["4", "5", "6", "15"], answer: 1, explain: "The pattern is 1, 2, 3, 4, 5. So she puts 5 blocks on day 5.", level: 2 },
      { q: "A rangoli has beads in this order: red, red, blue, red, red, blue, red, red, __. Which colour comes next?", options: ["red", "green", "blue", "yellow"], answer: 2, explain: "The pattern is red, red, blue. After two reds, blue comes next.", level: 2 },
      { q: "Find the missing number: 50, 45, 40, __, 30.", options: ["25", "36", "20", "35"], answer: 3, explain: "The rule is subtract 5. 40 − 5 = 35.", level: 2 },
      { q: "Which number does NOT fit the pattern 10, 20, 30, 45, 50?", options: ["45", "20", "30", "50"], answer: 0, explain: "The rule is add 10, so the pattern should be 10, 20, 30, 40, 50. The number 45 does not fit.", level: 2 }
    ],
    written: [
      { q: "Fill in the blank: 6, 8, 10, ____", a: "12. The rule is add 2.", marks: 1 },
      { q: "Write the answer: What is the rule in 12, 10, 8, 6?", a: "Subtract 2 each time.", marks: 1 },
      { q: "Write the answer: Write the next two numbers: 10, 15, 20, __, __", a: "25 and 30. The rule is add 5.", marks: 1 },
      { q: "Write the answer: What comes next? red, blue, blue, red, blue, blue, red, __", a: "blue. The pattern is red, blue, blue and it repeats.", marks: 1 }
    ]
  },

  "data-tally-marks": {
    mcq: [
      { q: "A tally chart shows 1 bundle and 2 extra lines. How many is that?", options: ["12", "7", "3", "52"], answer: 1, explain: "1 bundle is 5. Then 5 + 2 = 7.", level: 1 },
      { q: "2 bundles of tally marks show:", options: ["10", "7", "2", "20"], answer: 0, explain: "2 bundles of 5 make 2 × 5 = 10.", level: 1 },
      { q: "What do tally marks help us do?", options: ["Draw pictures", "Read stories", "Count things quickly", "Paint walls"], answer: 2, explain: "Tally marks help us count and record things quickly.", level: 1 },
      { q: "3 extra lines and no bundle show:", options: ["35", "5", "8", "3"], answer: 3, explain: "Each line is 1, so 3 lines show 3.", level: 1 },
      { q: "1 bundle and 1 extra line show:", options: ["11", "15", "6", "1"], answer: 2, explain: "1 bundle is 5. Then 5 + 1 = 6.", level: 1 },
      { q: "Anu wants to show 10 things in tally marks. How many bundles does she make?", options: ["1", "2", "5", "10"], answer: 1, explain: "Each bundle is 5, and 5 + 5 = 10. So she makes 2 bundles.", level: 1 },
      { q: "The class counts 3 bundles and 2 extra lines of crows. How many crows is that?", options: ["32", "17", "5", "12"], answer: 1, explain: "3 bundles is 3 × 5 = 15. Then 15 + 2 = 17.", level: 2 },
      { q: "Ali counted 12 cars. Which tally shows 12?", options: ["1 bundle and 2 extra lines", "12 bundles", "2 bundles and 2 extra lines", "2 bundles and 12 extra lines"], answer: 2, explain: "2 bundles is 10. Then 10 + 2 = 12.", level: 2 },
      { q: "A tally chart shows: Mango 1 bundle, Banana 2 bundles, Apple 1 bundle and 4 extra lines. Which fruit is the most?", options: ["Banana", "Mango", "Apple", "All are the same"], answer: 0, explain: "Mango is 5, Banana is 10 and Apple is 9. Banana is the most.", level: 2 },
      { q: "A tally chart shows: Mango 1 bundle, Banana 2 bundles, Apple 1 bundle and 4 extra lines. How many fruits are there in all?", options: ["15", "19", "23", "24"], answer: 3, explain: "Mango 5, Banana 10 and Apple 9. 5 + 10 + 9 = 24.", level: 2 }
    ],
    written: [
      { q: "Fill in the blank: 1 bundle and 3 extra lines show ____.", a: "8, because 5 + 3 = 8.", marks: 1 },
      { q: "Count and write: 2 bundles and 1 extra line show how many?", a: "11, because 10 + 1 = 11.", marks: 1 },
      { q: "Write the answer: How do we show 7 in tally marks?", a: "1 bundle of 5 and 2 extra lines.", marks: 1 },
      { q: "Fill in the blank: To show 10 things, we need ____ bundles.", a: "2", marks: 1 }
    ]
  }
});
