// Class 3 Mathematics practice bank, part 2: length, weight and capacity, time, money, fractions, pictographs.
StudyData.addPractice(3, "maths", {
  "length": {
    mcq: [
      { q: "Which of these is the longest?", options: ["1 m", "50 cm", "90 cm", "10 cm"], answer: 0, explain: "1 m = 100 cm, which is more than 50 cm, 90 cm and 10 cm.", level: 1 },
      { q: "How many centimetres are there in 2 m?", options: ["20 cm", "200 cm", "2000 cm", "22 cm"], answer: 1, explain: "1 m = 100 cm, so 2 m = 2 × 100 = 200 cm.", level: 1 },
      { q: "You measure a pencil with a ruler. Where should you place the 0 mark of the ruler?", options: ["At the middle of the pencil", "At the 1 mark of the pencil", "At one end of the pencil", "Anywhere on the pencil"], answer: 2, explain: "Line up the 0 mark with one end of the object, then read the number at the other end.", level: 1 },
      { q: "Which is a sensible length for a small eraser?", options: ["3 m", "30 m", "300 cm", "3 cm"], answer: 3, explain: "An eraser is very small, so about 3 cm makes sense. 3 m, 30 m and 300 cm are far too long.", level: 1 },
      { q: "300 cm is the same as how many metres?", options: ["30 m", "103 m", "3 m", "300 m"], answer: 2, explain: "100 cm make 1 m, so 300 cm make 3 m.", level: 1 },
      { q: "What is 1 m 5 cm in centimetres?", options: ["15 cm", "150 cm", "1005 cm", "105 cm"], answer: 3, explain: "1 m = 100 cm. Then 100 + 5 = 105 cm. (Watch the tens digit: it is 0, not 5.)", level: 2 },
      { q: "What is 2 m 30 cm + 1 m 45 cm?", options: ["3 m 15 cm", "3 m 75 cm", "4 m 75 cm", "3 m 7 cm"], answer: 1, explain: "Metres: 2 + 1 = 3. Centimetres: 30 + 45 = 75. Total: 3 m 75 cm.", level: 2 },
      { q: "Which is longer, 3 m or 350 cm?", options: ["3 m", "They are equal", "350 cm", "We cannot say"], answer: 2, explain: "3 m = 300 cm. Since 350 is more than 300, 350 cm is longer.", level: 2 },
      { q: "Riya uses 1 m 30 cm of lace for a bag and 45 cm of lace for a belt. How much lace does she use in all?", options: ["1 m 15 cm", "1 m 7 cm", "2 m 75 cm", "1 m 75 cm"], answer: 3, explain: "The 45 cm is less than 1 m, so add it to the centimetres: 30 + 45 = 75 cm. Total = 1 m 75 cm.", level: 2 },
      { q: "What is 4 m 7 cm in centimetres?", options: ["470 cm", "407 cm", "47 cm", "4007 cm"], answer: 1, explain: "4 m = 400 cm. Then 400 + 7 = 407 cm.", level: 2 },
      { q: "Which list shows the lengths from the shortest to the longest?", options: ["2 m, 190 cm, 1 m 80 cm, 150 cm", "150 cm, 190 cm, 1 m 80 cm, 2 m", "190 cm, 150 cm, 1 m 80 cm, 2 m", "150 cm, 1 m 80 cm, 190 cm, 2 m"], answer: 3, explain: "Change all to cm: 2 m = 200 cm and 1 m 80 cm = 180 cm. The order is 150, 180, 190, 200.", level: 3 },
      { q: "A ribbon 3 m long is cut into pieces of 50 cm each. How many pieces are made?", options: ["3", "5", "60", "6"], answer: 3, explain: "3 m = 300 cm. 50 cm × 6 = 300 cm, so there are 6 pieces.", level: 3 }
    ],
    written: [
      { q: "Fill in the blank: 1 m = ____ cm.", a: "100", marks: 1 },
      { q: "Change 6 m into centimetres.", a: "6 × 100 = 600 cm", marks: 1 },
      { q: "Write 250 cm in metres and centimetres.", a: "250 cm = 2 m 50 cm", marks: 1 },
      { q: "Change 4 m 25 cm into centimetres. Show your steps.", a: "4 m = 4 × 100 = 400 cm.\n400 cm + 25 cm = 425 cm.", marks: 2 },
      { q: "A tailor uses 1 m 20 cm of cloth for a shirt and 1 m 35 cm of cloth for a pair of trousers. How much cloth does he use in all?", a: "Metres: 1 + 1 = 2.\nCentimetres: 20 + 35 = 55.\nHe uses 2 m 55 cm of cloth.", marks: 2 },
      { q: "Meera needs 5 pieces of ribbon, each 40 cm long. (a) How many centimetres of ribbon does she need in all? (b) Write this length in metres.", a: "(a) 5 × 40 = 200 cm.\n(b) 100 cm = 1 m, so 200 cm = 2 m.\nShe needs 200 cm, which is 2 m, of ribbon.", marks: 3 }
    ]
  },

  "weight-and-capacity": {
    mcq: [
      { q: "How many grams make half a kilogram?", options: ["50 g", "500 g", "5 g", "5000 g"], answer: 1, explain: "1 kg = 1000 g, and half of 1000 is 500. So half a kilogram is 500 g.", level: 1 },
      { q: "Which is heavier, 1 kg of cotton or 1 kg of iron?", options: ["Cotton", "Iron", "We cannot say", "Both weigh the same"], answer: 3, explain: "Both are 1 kg, so they weigh the same. The cotton just takes up more space.", level: 1 },
      { q: "Which unit is best for weighing one pencil?", options: ["Gram", "Kilogram", "Litre", "Metre"], answer: 0, explain: "A pencil is very light, so we use grams. Litre measures liquid and metre measures length.", level: 1 },
      { q: "How many millilitres are there in 3 litres?", options: ["300 mL", "30 mL", "3000 mL", "3003 mL"], answer: 2, explain: "1 L = 1000 mL, so 3 L = 3 × 1000 = 3000 mL.", level: 1 },
      { q: "Which holds more, 1 L or 500 mL?", options: ["1 L", "500 mL", "They hold the same", "We cannot say"], answer: 0, explain: "1 L = 1000 mL, which is more than 500 mL.", level: 1 },
      { q: "What is 3 kg 500 g in grams?", options: ["350 g", "3500 g", "3005 g", "35000 g"], answer: 1, explain: "3 kg = 3000 g. Then 3000 + 500 = 3500 g.", level: 2 },
      { q: "What is 1 kg 300 g + 2 kg 400 g?", options: ["3 kg 70 g", "3 kg 100 g", "4 kg 700 g", "3 kg 700 g"], answer: 3, explain: "Kilograms: 1 + 2 = 3. Grams: 300 + 400 = 700. Total: 3 kg 700 g.", level: 2 },
      { q: "Riya buys 2 kg of rice and 500 g of sugar. What is the total weight of her shopping?", options: ["7 kg", "2 kg 50 g", "2 kg 500 g", "250 g"], answer: 2, explain: "The 500 g stays as grams, so the total is 2 kg 500 g. (Do not add 2 and 5.)", level: 2 },
      { q: "How many cups of 200 mL can be filled from 1 litre of milk?", options: ["10", "20", "4", "5"], answer: 3, explain: "1 L = 1000 mL. 200 mL × 5 = 1000 mL, so 5 cups can be filled.", level: 2 },
      { q: "What is 2 L 500 mL in millilitres?", options: ["250 mL", "2050 mL", "2500 mL", "25000 mL"], answer: 2, explain: "2 L = 2000 mL. Then 2000 + 500 = 2500 mL.", level: 2 },
      { q: "A shopkeeper has 3 bags of flour. Each bag weighs 2 kg 500 g. What is the total weight?", options: ["6 kg 500 g", "7 kg 500 g", "8 kg 500 g", "7 kg 50 g"], answer: 1, explain: "Add three times: kilograms 2 + 2 + 2 = 6, grams 500 + 500 + 500 = 1500 g = 1 kg 500 g. Total = 6 kg + 1 kg 500 g = 7 kg 500 g.", level: 3 },
      { q: "A jug holds 1 litre of water. Meera fills 3 glasses of 250 mL each from it. How much water is left in the jug?", options: ["750 mL", "500 mL", "250 mL", "3 glasses"], answer: 2, explain: "3 glasses use 3 × 250 = 750 mL. Left: 1000 − 750 = 250 mL. (750 mL is the water poured out.)", level: 3 }
    ],
    written: [
      { q: "Fill in the blank: 1 kg = ____ g.", a: "1000", marks: 1 },
      { q: "Write 4 L in millilitres.", a: "4 × 1000 = 4000 mL", marks: 1 },
      { q: "Which unit should we use to weigh a bag of potatoes, gram or kilogram?", a: "Kilogram, because a bag of potatoes is heavy.", marks: 1 },
      { q: "Change 3 kg 250 g into grams.", a: "3 kg = 3 × 1000 = 3000 g.\n3000 g + 250 g = 3250 g.", marks: 2 },
      { q: "One bottle holds 1 L 500 mL of juice. Another bottle holds 2 L 200 mL. How much juice is there in the two bottles together?", a: "Litres: 1 + 2 = 3.\nMillilitres: 500 + 200 = 700.\nTotal = 3 L 700 mL.", marks: 2 },
      { q: "Amit buys 1 kg 200 g of tomatoes, 2 kg 300 g of onions and 500 g of beans. What is the total weight? Give the answer in kilograms.", a: "Kilograms: 1 + 2 = 3 kg.\nGrams: 200 + 300 + 500 = 1000 g = 1 kg.\nTotal = 3 kg + 1 kg = 4 kg.", marks: 3 }
    ]
  },

  "time": {
    mcq: [
      { q: "How many seconds are there in 1 minute?", options: ["30", "100", "60", "24"], answer: 2, explain: "1 minute = 60 seconds.", level: 1 },
      { q: "Which day comes just after Friday?", options: ["Thursday", "Saturday", "Sunday", "Monday"], answer: 1, explain: "The days go Thursday, Friday, Saturday. So Saturday comes after Friday.", level: 1 },
      { q: "The long hand is at 3 and the short hand is just past 5. What time is it?", options: ["5:15", "3:05", "5:03", "3:25"], answer: 0, explain: "The long hand at 3 means 15 minutes, and the short hand is just past 5, so the hour is 5. The time is 5:15.", level: 1 },
      { q: "Which time is quarter to 8?", options: ["8:15", "8:45", "7:15", "7:45"], answer: 3, explain: "Quarter to 8 means 15 minutes before 8, so it is 7:45.", level: 1 },
      { q: "Which month comes just after June?", options: ["May", "July", "August", "April"], answer: 1, explain: "The months go May, June, July, so July comes after June.", level: 1 },
      { q: "The long hand is at 9 and the short hand is between 2 and 3. What time is it?", options: ["9:02", "2:45", "3:45", "2:09"], answer: 1, explain: "The long hand at 9 means 45 minutes past the hour. The short hand has not reached 3, so the hour is 2. The time is 2:45, which is quarter to 3.", level: 2 },
      { q: "Riya's class starts at 9:00 and lasts for 40 minutes. At what time does it end?", options: ["9:04", "10:40", "9:30", "9:40"], answer: 3, explain: "40 minutes is less than an hour, so the hour stays 9. The class ends at 9:40.", level: 2 },
      { q: "Today is Wednesday. What day will it be after 5 days?", options: ["Sunday", "Tuesday", "Monday", "Saturday"], answer: 2, explain: "Count on from Wednesday: Thursday, Friday, Saturday, Sunday, Monday. The 5th day is Monday.", level: 2 },
      { q: "How many days are there in 3 weeks?", options: ["10", "21", "14", "28"], answer: 1, explain: "1 week = 7 days, so 3 weeks = 3 × 7 = 21 days.", level: 2 },
      { q: "How many minutes are there in 2 hours?", options: ["120", "60", "100", "200"], answer: 0, explain: "1 hour = 60 minutes, so 2 hours = 2 × 60 = 120 minutes.", level: 2 },
      { q: "Today is Saturday. What day will it be after 15 days?", options: ["Monday", "Saturday", "Friday", "Sunday"], answer: 3, explain: "15 days = 14 days + 1 day. After 14 days (2 weeks) it is Saturday again, and 1 more day gives Sunday.", level: 3 },
      { q: "Maya's clock shows the long hand at 6 and the short hand between 4 and 5. What time will it show 30 minutes later?", options: ["4:30", "5:30", "6:00", "5:00"], answer: 3, explain: "The clock shows 4:30 now. 30 minutes later the long hand goes all the way round to 12 and the short hand is at 5. The time is 5:00.", level: 3 }
    ],
    written: [
      { q: "Fill in the blank: 1 hour = ____ minutes.", a: "60", marks: 1 },
      { q: "How many months are there in 1 year?", a: "12 months", marks: 1 },
      { q: "Write 'quarter past 7' as a time using numbers.", a: "7:15", marks: 1 },
      { q: "Write the time for (a) half past 9 and (b) quarter to 6.", a: "(a) Half past 9 is 9:30.\n(b) Quarter to 6 is 15 minutes before 6, so it is 5:45.", marks: 2 },
      { q: "Today is Tuesday. What day will it be after 9 days? Show how you found it.", a: "9 days = 7 days + 2 days.\n7 days after Tuesday is Tuesday again.\n2 more days: Wednesday, Thursday. The day will be Thursday.", marks: 2 },
      { q: "The long hand of a clock points to 3 and the short hand is just past 10. Name the two hands and say what time it is.", a: "The short hand is the hour hand and the long hand is the minute hand.\nThe long hand at 3 means 15 minutes past the hour.\nThe short hand is just past 10, so the time is 10:15.", marks: 3 }
    ]
  },

  "money": {
    mcq: [
      { q: "How many paise make half a rupee?", options: ["25", "50", "10", "5"], answer: 1, explain: "1 rupee = 100 paise, and half of 100 is 50 paise.", level: 1 },
      { q: "How many ₹2 coins make ₹10?", options: ["2", "10", "5", "8"], answer: 2, explain: "5 × ₹2 = ₹10, so 5 coins are needed.", level: 1 },
      { q: "What is ₹20 + ₹30?", options: ["₹50", "₹10", "₹500", "₹60"], answer: 0, explain: "20 + 30 = 50, so the sum is ₹50.", level: 1 },
      { q: "Ravi pays ₹50 for a toy that costs ₹30. How much change should he get?", options: ["₹80", "₹30", "₹10", "₹20"], answer: 3, explain: "Change = money paid − price = 50 − 30 = ₹20.", level: 1 },
      { q: "Which is worth more, ₹1 or 50 paise?", options: ["50 paise", "They are worth the same", "₹1", "We cannot say"], answer: 2, explain: "₹1 = 100 paise, which is more than 50 paise.", level: 1 },
      { q: "A pen costs ₹12, a notebook costs ₹35 and a ruler costs ₹8. What is the total bill?", options: ["₹55", "₹65", "₹45", "₹50"], answer: 0, explain: "12 + 35 = 47, and 47 + 8 = 55. The total is ₹55.", level: 2 },
      { q: "Riya pays ₹100 for a toy that costs ₹64. How much change does she get?", options: ["₹46", "₹26", "₹36", "₹34"], answer: 2, explain: "100 − 64 = 36. Check: 64 + 36 = 100.", level: 2 },
      { q: "Anu has three ₹5 coins and two ₹2 coins. How much money does she have?", options: ["₹10", "₹19", "₹29", "₹17"], answer: 1, explain: "Three ₹5 coins = ₹15. Two ₹2 coins = ₹4. Total = 15 + 4 = ₹19.", level: 2 },
      { q: "What is 75 paise + 50 paise?", options: ["₹2 and 25 paise", "125 rupees", "₹1 and 125 paise", "₹1 and 25 paise"], answer: 3, explain: "75 + 50 = 125 paise. 100 paise make ₹1, so 125 paise = ₹1 and 25 paise.", level: 2 },
      { q: "Amit has one ₹50 note and three ₹10 coins. How much money does he have?", options: ["₹80", "₹53", "₹150", "₹60"], answer: 0, explain: "Three ₹10 coins = ₹30. Then 50 + 30 = ₹80.", level: 2 },
      { q: "Meera buys 2 notebooks at ₹25 each and a pen for ₹10. She pays with a ₹100 note. How much change does she get?", options: ["₹60", "₹40", "₹35", "₹50"], answer: 1, explain: "2 notebooks cost 2 × 25 = ₹50. With the pen, the bill is 50 + 10 = ₹60. Change = 100 − 60 = ₹40. (₹60 is the bill.)", level: 3 },
      { q: "Aman has ₹60. His friend Bunty has ₹25 more than Aman. How much money do they have together?", options: ["₹85", "₹95", "₹145", "₹120"], answer: 2, explain: "Bunty has 60 + 25 = ₹85. Together: 60 + 85 = ₹145. (₹85 is only Bunty's money.)", level: 3 }
    ],
    written: [
      { q: "Fill in the blank: 100 paise = ₹____.", a: "1", marks: 1 },
      { q: "How many ₹5 coins make ₹25?", a: "5 coins, because 5 × ₹5 = ₹25.", marks: 1 },
      { q: "Add ₹40 and ₹35.", a: "40 + 35 = ₹75", marks: 1 },
      { q: "Make a bill and find the total: a pen for ₹18, a book for ₹42 and a pencil box for ₹9.", a: "Pen ₹18\nBook ₹42\nPencil box ₹9\nTotal = 18 + 42 + 9 = ₹69.", marks: 2 },
      { q: "Sita pays ₹100 for a bag that costs ₹73. How much change should she get back?", a: "Change = money paid − price.\n100 − 73 = 27.\nShe should get ₹27 back.", marks: 2 },
      { q: "Mother gave Riya ₹100. She bought fruits for ₹38 and vegetables for ₹45. How much money does she have left?", a: "Money spent: 38 + 45 = ₹83.\nMoney left: 100 − 83 = ₹17.\nCheck: 83 + 17 = 100.", marks: 3 }
    ]
  },

  "fractions": {
    mcq: [
      { q: "What is ½ of 8?", options: ["16", "4", "2", "6"], answer: 1, explain: "Half of 8 is 8 ÷ 2 = 4.", level: 1 },
      { q: "A roti is cut into 2 equal parts. What is each part called?", options: ["A quarter", "A whole", "A half", "Three quarters"], answer: 2, explain: "One of 2 equal parts is a half.", level: 1 },
      { q: "How many quarters make one whole?", options: ["4", "2", "3", "8"], answer: 0, explain: "A whole is cut into 4 equal parts to make quarters, so 4 quarters make 1 whole.", level: 1 },
      { q: "Which of these is the smallest?", options: ["¾", "½", "1", "¼"], answer: 3, explain: "¼ is one of 4 equal parts, which is smaller than ½, ¾ or a whole.", level: 1 },
      { q: "What is ¼ of 12?", options: ["4", "6", "3", "8"], answer: 2, explain: "12 ÷ 4 = 3.", level: 1 },
      { q: "Two quarters of a pizza are the same as how much of the pizza?", options: ["¼", "½", "¾", "1"], answer: 1, explain: "2 out of 4 equal parts is the same as 1 out of 2 equal parts, which is a half.", level: 2 },
      { q: "Riya has 20 sweets. She gives half of them to her brother and a quarter of them to her friend. How many sweets does she give away?", options: ["10", "5", "25", "15"], answer: 3, explain: "Half of 20 = 10. A quarter of 20 = 5. Together: 10 + 5 = 15 sweets.", level: 2 },
      { q: "A chocolate bar is broken into 2 pieces, but one piece is much bigger than the other. Is each piece a half?", options: ["Yes, because there are 2 pieces", "No, because the pieces are not equal", "Yes, because one piece is bigger", "No, because a half needs 4 pieces"], answer: 1, explain: "A half is one of 2 EQUAL parts. These pieces are not equal, so neither is a half.", level: 2 },
      { q: "Half of a number is 9. What is the number?", options: ["4", "9", "11", "18"], answer: 3, explain: "If half is 9, the whole is 9 + 9 = 18. Check: 18 ÷ 2 = 9.", level: 2 },
      { q: "What is ¾ of 24?", options: ["6", "18", "21", "12"], answer: 1, explain: "One quarter of 24 is 24 ÷ 4 = 6. Three quarters: 6 × 3 = 18. (6 is only ¼.)", level: 2 },
      { q: "Aman has 16 laddoos. He eats a quarter of them and Beena eats half of them. How many laddoos are left?", options: ["8", "12", "4", "6"], answer: 2, explain: "Aman eats 16 ÷ 4 = 4. Beena eats 16 ÷ 2 = 8. Together they eat 12, so 16 − 12 = 4 are left.", level: 3 },
      { q: "A quarter of a number is 7. What is half of the same number?", options: ["7", "14", "28", "3"], answer: 1, explain: "If ¼ is 7, the number is 4 × 7 = 28. Half of 28 is 14. (Half is also 2 quarters: 7 + 7 = 14.)", level: 3 }
    ],
    written: [
      { q: "Write the fraction for 1 part out of 4 equal parts.", a: "¼ (one quarter)", marks: 1 },
      { q: "Find half of 24.", a: "24 ÷ 2 = 12", marks: 1 },
      { q: "Fill in the blank: 4 quarters make ____ whole.", a: "1 (one whole)", marks: 1 },
      { q: "Find ¾ of 28. Show your steps.", a: "One quarter of 28 = 28 ÷ 4 = 7.\nThree quarters = 3 × 7 = 21.", marks: 2 },
      { q: "A circle is cut into 2 parts. One part is big and the other is small. Is the big part a half? Explain.", a: "No. A half is one of 2 equal parts.\nThe two parts are not the same size, so the big part is not a half.", marks: 2 },
      { q: "Riya has ₹40. She spends half of it on a book and a quarter of it on a pen. How much does she spend on each, and how much is left?", a: "Book: half of 40 = 40 ÷ 2 = ₹20.\nPen: a quarter of 40 = 40 ÷ 4 = ₹10.\nLeft: 40 − 20 − 10 = ₹10.", marks: 3 }
    ]
  },

  "pictographs": {
    mcq: [
      { q: "A pictograph shows data using ____.", options: ["pictures or symbols", "only letters", "only clocks", "only rulers"], answer: 0, explain: "A pictograph uses pictures or symbols to show data.", level: 1 },
      { q: "In a pictograph, 1 picture stands for 2 children. A row has 6 pictures. How many children does it show?", options: ["4", "8", "12", "26"], answer: 2, explain: "6 pictures × 2 children = 12 children.", level: 1 },
      { q: "Where do we look to find out what one picture stands for?", options: ["In the title", "In the key", "In the last row", "In the first row"], answer: 1, explain: "The key tells us how many things one picture stands for.", level: 1 },
      { q: "One full picture stands for 10 cars. How many cars does half a picture stand for?", options: ["10", "5", "2", "20"], answer: 1, explain: "Half of 10 is 5, so half a picture stands for 5 cars.", level: 1 },
      { q: "Asking many people the same question to collect data is called a ____.", options: ["survey", "key", "picture", "row"], answer: 0, explain: "Collecting data by asking questions is called a survey.", level: 1 },
      { q: "The key says 1 picture = 3 books. A row has 5 pictures. How many books does it show?", options: ["8", "35", "12", "15"], answer: 3, explain: "5 pictures × 3 books = 15 books.", level: 2 },
      { q: "Riya made a pictograph of mangoes. The key says 1 picture = 4 mangoes. Her row has 6 pictures. How many mangoes does it show?", options: ["10", "24", "6", "46"], answer: 1, explain: "6 pictures × 4 mangoes = 24 mangoes.", level: 2 },
      { q: "The key is 1 picture = 5 children. Row A has 4 pictures and row B has 7 pictures. How many more children does row B show than row A?", options: ["3", "35", "15", "20"], answer: 2, explain: "Row B shows 7 × 5 = 35 children and row A shows 4 × 5 = 20 children. The difference is 35 − 20 = 15. (3 is the difference in pictures, not children.)", level: 2 },
      { q: "A row has 2 full pictures and half a picture. Each full picture stands for 10 cars. How many cars does the row show?", options: ["25", "20", "30", "12"], answer: 0, explain: "2 full pictures = 2 × 10 = 20 cars. Half a picture = 5 cars. Total = 25 cars.", level: 2 },
      { q: "The key is 1 picture = 2 children. How many pictures are needed to show 12 children?", options: ["24", "10", "14", "6"], answer: 3, explain: "12 ÷ 2 = 6, so 6 pictures are needed.", level: 2 },
      { q: "The key is 1 balloon picture = 4 balloons. The red row has 5 pictures. The blue row has 3 pictures and half a picture. How many balloons are there in all?", options: ["38", "32", "9", "34"], answer: 3, explain: "Red: 5 × 4 = 20. Blue: 3 × 4 = 12, and half a picture = 2, so blue = 14. Total = 20 + 14 = 34.", level: 3 },
      { q: "The key is 1 picture = 10 children. A row shows 35 children. How should the row be drawn?", options: ["3 full pictures", "4 full pictures", "3 full pictures and half a picture", "35 pictures"], answer: 2, explain: "30 children need 3 full pictures. The other 5 children need half a picture. So draw 3 full pictures and half a picture.", level: 3 }
    ],
    written: [
      { q: "What is a survey?", a: "A survey is asking many people the same question to collect data.", marks: 1 },
      { q: "In a pictograph, 1 picture stands for 5 students. A row has 3 pictures. How many students does it show?", a: "3 × 5 = 15 students", marks: 1 },
      { q: "Fill in the blank: If 1 picture stands for 6 things, half a picture stands for ____ things.", a: "3", marks: 1 },
      { q: "The key says 1 cup picture = 2 cups of tea. Monday has 4 pictures and Tuesday has 6 pictures. How many cups were sold on each day, and how many in all?", a: "Monday: 4 × 2 = 8 cups.\nTuesday: 6 × 2 = 12 cups.\nTotal: 8 + 12 = 20 cups.", marks: 2 },
      { q: "The key says 1 picture = 5 balls. How many pictures will you draw to show 15 balls? Explain.", a: "Divide the number of balls by the key value: 15 ÷ 5 = 3.\nSo draw 3 pictures.", marks: 2 },
      { q: "A pictograph of fruits has the key 1 picture = 4 fruits. Apples have 5 pictures, bananas have 3 pictures and half a picture, and oranges have 2 pictures. Find the number of each fruit and the total. Which fruit is the most?", a: "Apples: 5 × 4 = 20.\nBananas: 3 × 4 = 12, plus half a picture = 2, so 14.\nOranges: 2 × 4 = 8.\nTotal: 20 + 14 + 8 = 42 fruits.\nApples are the most.", marks: 3 }
    ]
  }
});
