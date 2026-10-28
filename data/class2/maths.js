// Class 2 Mathematics: topic-wise chapters for the NCERT syllabus.
// Format: see CONTENT_GUIDE.md
StudyData.add(2, "maths", {
  // What this content follows. match: "textbook" | "older-book" | "topic". Set reviewed to a date once a teacher has checked it.
  syllabus: {board: "CBSE", match: "topic", books: [], note: "Chapter names and order may not match your textbook.", reviewed: false},
  chapters: [
    // ───────────────────────────── 1. Numbers up to 100 ─────────────────────────────
    {
      id: "numbers-up-to-100",
      title: "Numbers up to 100",
      section: "Numbers",
      summary: "We count, read and write numbers up to 100. We also count in tens and find the number before and after.",
      notes: [
        {
          heading: "Counting up to 100",
          points: [
            "We count in ones: 90, 91, 92, … 99, 100.",
            "100 is called one hundred. It comes after 99."
          ]
        },
        {
          heading: "Counting in tens",
          points: [
            "Counting in tens goes 10, 20, 30, 40, … 100.",
            "Ten more than 40 is 50, because 40 + 10 = 50."
          ]
        },
        {
          heading: "Before and after",
          points: [
            "The number after 59 is 60. The number before 60 is 59.",
            "The number between 40 and 42 is 41."
          ]
        }
      ],
      terms: [
        { term: "Hundred", meaning: "The number 100. It is ten tens." },
        { term: "Count by tens", meaning: "Counting 10, 20, 30, … in jumps of ten." },
        { term: "Before and after", meaning: "The number just earlier and just later in counting." },
        { term: "Number name", meaning: "The words we use for a number, like 'ninety-two' for 92." }
      ],
      examples: [
        {
          q: "Count from 95 to 100.",
          steps: ["Start at 95.", "Count on: 96, 97, 98, 99, 100."],
          answer: "95, 96, 97, 98, 99, 100"
        }
      ],
      qa: [
        { q: "What comes after 99?", a: "100 comes after 99. It is one hundred." },
        { q: "Which number is ten more than 40?", a: "50, because 40 + 10 = 50." }
      ],
      quiz: [
        {
          q: "What comes after 99?",
          options: ["98", "100", "90", "109"],
          answer: 1,
          explain: "Counting after 99 gives 100."
        },
        {
          q: "Which number is ten more than 60?",
          options: ["61", "70", "50", "6"],
          answer: 1,
          explain: "60 + 10 = 70."
        },
        {
          q: "Which number comes between 47 and 49?",
          options: ["46", "50", "48", "94"],
          answer: 2,
          explain: "Counting: 47, 48, 49. So 48 is between them."
        },
        {
          q: "How do we write ninety-two?",
          options: ["902", "29", "9", "92"],
          answer: 3,
          explain: "Ninety-two is written as 92."
        },
        {
          q: "Count by tens: 30, 40, __, 60. Which number is missing?",
          options: ["45", "41", "50", "55"],
          answer: 2,
          explain: "Counting by tens: 30, 40, 50, 60."
        }
      ]
    },

    // ───────────────────────────── 2. Place Value: Tens and Ones ─────────────────────────────
    {
      id: "place-value-tens-and-ones",
      title: "Place Value: Tens and Ones",
      section: "Numbers",
      summary: "A two-digit number has tens and ones. We learn what each digit means by its place.",
      notes: [
        {
          heading: "Tens and ones",
          points: [
            "The number 34 has 3 tens and 4 ones.",
            "3 tens is 30, and 30 + 4 = 34."
          ]
        },
        {
          heading: "Grouping into tens",
          points: [
            "10 ones make 1 ten. We can tie 10 sticks together into one bundle.",
            "A bundle of 10 and 4 loose sticks shows the number 14."
          ]
        },
        {
          heading: "Reading the places",
          points: [
            "In 52, the 5 is in the tens place, so it means 50.",
            "In 52, the 2 is in the ones place, so it means 2."
          ]
        }
      ],
      terms: [
        { term: "Tens", meaning: "Groups of 10. In 47 there are 4 tens." },
        { term: "Ones", meaning: "Single units. In 47 there are 7 ones." },
        { term: "Place value", meaning: "The value of a digit, which depends on where it is in the number." },
        { term: "Digit", meaning: "One of the symbols 0 to 9 used to write a number." }
      ],
      examples: [
        {
          q: "Write 47 as tens and ones.",
          steps: ["47 has 4 tens and 7 ones.", "4 tens is 40.", "40 + 7 = 47."],
          answer: "40 + 7 = 47"
        }
      ],
      qa: [
        { q: "How many tens and ones are in 81?", a: "81 has 8 tens and 1 one." },
        { q: "In the number 26, what does the 2 stand for?", a: "The 2 is in the tens place, so it stands for 20." }
      ],
      quiz: [
        {
          q: "How many tens are in 63?",
          options: ["3", "6", "63", "60"],
          answer: 1,
          explain: "63 has 6 tens and 3 ones."
        },
        {
          q: "How many ones are in 38?",
          options: ["30", "38", "3", "8"],
          answer: 3,
          explain: "38 has 3 tens and 8 ones."
        },
        {
          q: "The number 25 means 2 tens and how many ones?",
          options: ["5", "2", "25", "20"],
          answer: 0,
          explain: "25 has 2 tens and 5 ones."
        },
        {
          q: "What is 4 tens and 6 ones?",
          options: ["64", "406", "46", "40"],
          answer: 2,
          explain: "4 tens and 6 ones is 46."
        },
        {
          q: "How many ones make one ten?",
          options: ["10", "100", "1", "2"],
          answer: 0,
          explain: "10 ones make 1 ten."
        }
      ]
    },

    // ───────────────────────────── 3. Addition with Carrying ─────────────────────────────
    {
      id: "addition-with-carrying",
      title: "Addition with Carrying",
      section: "Addition and Subtraction",
      summary: "When the ones add up to 10 or more, we carry a ten to the tens place. This helps us add bigger numbers.",
      notes: [
        {
          heading: "Adding the ones",
          points: [
            "Add the ones first. For example, 7 + 5 = 12 ones.",
            "12 ones is 1 ten and 2 ones. Write 2 in the ones place and carry the 1 ten to the tens place."
          ]
        },
        {
          heading: "Adding the tens",
          points: [
            "Next, add the tens. Remember to add the ten you carried.",
            "Add the tens digits together with the carried ten."
          ]
        }
      ],
      terms: [
        { term: "Carry", meaning: "Moving a ten to the tens column when the ones add up to 10 or more." },
        { term: "Ones column", meaning: "The place for the ones digit, on the right." },
        { term: "Tens column", meaning: "The place for the tens digit, on the left of the ones." },
        { term: "Regroup", meaning: "Changing 10 ones into 1 ten, or 1 ten into 10 ones." }
      ],
      examples: [
        {
          q: "Ravi has 27 mangoes. He gets 15 more. How many mangoes does he have now?",
          steps: [
            "Ones: 7 + 5 = 12. Write 2 and carry 1 ten.",
            "Tens: 2 + 1 (carried) + 1 = 4 tens.",
            "Answer: 42."
          ],
          answer: "Ravi has 42 mangoes."
        }
      ],
      qa: [
        { q: "Why do we carry 1 when 8 + 5 = 13?", a: "13 is 1 ten and 3 ones. We carry the 1 ten to the tens place." },
        { q: "What is 36 + 9?", a: "45. 6 + 9 = 15, so write 5 and carry 1. Then 3 + 1 = 4 tens, so the answer is 45." }
      ],
      quiz: [
        {
          q: "What is 9 + 4?",
          options: ["13", "12", "14", "5"],
          answer: 0,
          explain: "9 + 4 = 13. The ones make 13, which is 1 ten and 3 ones."
        },
        {
          q: "What is 25 + 8?",
          options: ["28", "23", "43", "33"],
          answer: 3,
          explain: "5 + 8 = 13, so write 3 and carry 1. Then 2 + 1 = 3 tens. The answer is 33."
        },
        {
          q: "What is 18 + 7?",
          options: ["24", "15", "26", "25"],
          answer: 3,
          explain: "8 + 7 = 15, so write 5 and carry 1. Then 1 + 1 = 2 tens. The answer is 25."
        },
        {
          q: "What is 36 + 17?",
          options: ["43", "53", "45", "63"],
          answer: 1,
          explain: "6 + 7 = 13, write 3 and carry 1. Then 3 + 1 + 1 = 5 tens. The answer is 53."
        },
        {
          q: "When the ones add up to more than 9, how many tens do we carry?",
          options: ["10", "2", "1", "0"],
          answer: 2,
          explain: "We carry 1 ten to the tens place."
        }
      ]
    },

    // ───────────────────────────── 4. Subtraction with Borrowing ─────────────────────────────
    {
      id: "subtraction-with-borrowing",
      title: "Subtraction with Borrowing",
      section: "Addition and Subtraction",
      summary: "When there are not enough ones to take away, we borrow a ten from the tens place. This helps us subtract bigger numbers.",
      notes: [
        {
          heading: "Borrowing a ten",
          points: [
            "We cannot take 5 ones away from 2 ones. So we borrow 1 ten from the tens place.",
            "1 ten becomes 10 ones. Now we have 2 + 10 = 12 ones."
          ]
        },
        {
          heading: "Subtracting ones and tens",
          points: [
            "Subtract the ones first: 12 − 5 = 7.",
            "Then subtract the tens. Remember that 1 ten was borrowed, so 4 tens becomes 3 tens."
          ]
        },
        {
          heading: "Checking the answer",
          points: [
            "Add the answer back to the number you subtracted. If 42 − 15 = 27, then 27 + 15 = 42.",
            "The check should give the number you started with."
          ]
        }
      ],
      terms: [
        { term: "Borrow", meaning: "Taking 1 ten from the tens place and turning it into 10 ones." },
        { term: "Subtract", meaning: "Taking one number away from another." },
        { term: "Difference", meaning: "The answer when we subtract one number from another." },
        { term: "Ones column", meaning: "The place for the ones digit, on the right." }
      ],
      examples: [
        {
          q: "Find 42 − 15.",
          steps: [
            "Ones: 2 is less than 5, so borrow 1 ten. 2 + 10 = 12 ones.",
            "12 − 5 = 7 ones.",
            "Tens: 4 − 1 (borrowed) = 3 tens. Then 3 − 1 = 2 tens."
          ],
          answer: "42 − 15 = 27"
        }
      ],
      qa: [
        { q: "Why do we borrow a ten?", a: "We borrow because there are not enough ones to take away. 1 ten is changed into 10 ones." },
        { q: "What is 53 − 9?", a: "44. The ones 3 is less than 9, so borrow: 13 − 9 = 4. Then 5 − 1 = 4 tens. The answer is 44." }
      ],
      quiz: [
        {
          q: "What is 31 − 7?",
          options: ["24", "38", "26", "34"],
          answer: 0,
          explain: "Borrow 1 ten: 11 − 7 = 4. Then 3 − 1 = 2 tens. The answer is 24."
        },
        {
          q: "What is 40 − 18?",
          options: ["32", "22", "28", "18"],
          answer: 1,
          explain: "Borrow 1 ten: 10 − 8 = 2. Then 3 − 1 = 2 tens. The answer is 22."
        },
        {
          q: "What is 52 − 9?",
          options: ["47", "61", "43", "41"],
          answer: 2,
          explain: "Borrow 1 ten: 12 − 9 = 3. Then 4 − 1 = 4 tens. The answer is 43."
        },
        {
          q: "When we borrow 1 ten, how many ones do we get?",
          options: ["1", "5", "10", "100"],
          answer: 2,
          explain: "1 ten is the same as 10 ones."
        },
        {
          q: "What is 65 − 27?",
          options: ["48", "32", "42", "38"],
          answer: 3,
          explain: "Borrow 1 ten: 15 − 7 = 8 ones. Then 6 tens − 1 (borrowed) = 5 tens, and 5 − 2 = 3 tens. The answer is 38."
        }
      ]
    },

    // ───────────────────────────── 5. Shapes and Lines ─────────────────────────────
    {
      id: "shapes-and-lines",
      title: "Shapes and Lines",
      section: "Shapes",
      summary: "Lines can be straight or curved. Shapes can be open or closed, and they have sides and corners.",
      notes: [
        {
          heading: "Straight and curved lines",
          points: [
            "A straight line does not bend. The edge of a ruler is a straight line.",
            "A curved line bends, like the shape of a rainbow."
          ]
        },
        {
          heading: "Open and closed shapes",
          points: [
            "A closed shape has no gap. A circle is a closed shape.",
            "An open shape has a gap. The letter C is an open shape."
          ]
        },
        {
          heading: "Sides and corners",
          points: [
            "A triangle has 3 sides and 3 corners.",
            "A square has 4 equal sides and 4 corners."
          ]
        }
      ],
      terms: [
        { term: "Straight line", meaning: "A line that does not bend." },
        { term: "Curved line", meaning: "A line that bends." },
        { term: "Open shape", meaning: "A shape with a gap, so it does not close." },
        { term: "Closed shape", meaning: "A shape with no gap, where the lines join up." },
        { term: "Corner", meaning: "The point where two sides meet." }
      ],
      examples: [
        {
          q: "How many sides and corners does a square have?",
          steps: ["A square has 4 sides.", "A square has 4 corners."],
          answer: "4 sides and 4 corners."
        }
      ],
      qa: [
        { q: "What is the difference between a straight line and a curved line?", a: "A straight line does not bend, but a curved line bends." },
        { q: "Is the letter C an open shape or a closed shape?", a: "C is an open shape, because it has a gap." }
      ],
      quiz: [
        {
          q: "Which line is straight?",
          options: ["A rainbow", "A ruler's edge", "A curved line", "A circle"],
          answer: 1,
          explain: "The edge of a ruler does not bend, so it is straight."
        },
        {
          q: "How many corners does a triangle have?",
          options: ["2", "4", "3", "5"],
          answer: 2,
          explain: "A triangle has 3 corners."
        },
        {
          q: "Which shape is closed?",
          options: ["The letter C", "The letter L", "A circle", "A U shape"],
          answer: 2,
          explain: "A circle has no gap, so it is a closed shape."
        },
        {
          q: "How many sides does a square have?",
          options: ["4", "3", "2", "5"],
          answer: 0,
          explain: "A square has 4 sides."
        },
        {
          q: "Which shape has no corners?",
          options: ["Square", "Circle", "Rectangle", "Triangle"],
          answer: 1,
          explain: "A circle is round and has no corners."
        }
      ]
    },

    // ───────────────────────────── 6. Measurement ─────────────────────────────
    {
      id: "measurement",
      title: "Measurement: Length, Weight and Capacity",
      section: "Measurement",
      summary: "We measure how long things are, how heavy they are, and how much a container can hold.",
      notes: [
        {
          heading: "Length",
          points: [
            "We measure length in centimetres (cm) and metres (m).",
            "100 cm = 1 m. A ruler is usually 30 cm long."
          ]
        },
        {
          heading: "Weight",
          points: [
            "We measure weight in kilograms (kg) and grams (g).",
            "1 kg = 1000 g. A packet of sugar is often 1 kg."
          ]
        },
        {
          heading: "Capacity",
          points: [
            "Capacity tells how much a container can hold. We use litres (L) and millilitres (mL).",
            "1 L = 1000 mL. A water bottle may hold 1 L."
          ]
        }
      ],
      terms: [
        { term: "Length", meaning: "How long something is, measured in cm or m." },
        { term: "Weight", meaning: "How heavy something is, measured in kg or g." },
        { term: "Capacity", meaning: "How much liquid or grain a container can hold." },
        { term: "Kilogram (kg)", meaning: "A unit for weight. 1 kg is 1000 grams." }
      ],
      examples: [
        {
          q: "How many centimetres are there in 2 metres?",
          steps: ["1 m = 100 cm.", "2 m = 2 × 100 cm = 200 cm."],
          answer: "200 cm"
        }
      ],
      qa: [
        { q: "Which is heavier: 1 kg or 500 g?", a: "1 kg is heavier, because 1 kg = 1000 g." },
        { q: "What is capacity?", a: "Capacity is how much liquid or grain a container can hold." }
      ],
      quiz: [
        {
          q: "How many centimetres make 1 metre?",
          options: ["10", "1000", "100", "50"],
          answer: 2,
          explain: "1 m = 100 cm."
        },
        {
          q: "1 kg is equal to:",
          options: ["100 g", "1000 g", "10 g", "500 g"],
          answer: 1,
          explain: "1 kg = 1000 g."
        },
        {
          q: "Which unit do we use to measure how much water a bottle can hold?",
          options: ["litre", "kg", "cm", "metre"],
          answer: 0,
          explain: "Capacity is measured in litres (L) or millilitres (mL)."
        },
        {
          q: "Which is a unit of length?",
          options: ["metre", "gram", "litre", "kilogram"],
          answer: 0,
          explain: "Metre is a unit of length. Gram and kilogram measure weight, and litre measures capacity."
        },
        {
          q: "Which unit is best for the weight of a bag of rice?",
          options: ["metre", "kilogram", "litre", "centimetre"],
          answer: 1,
          explain: "Weight is measured in kilograms."
        }
      ]
    },

    // ───────────────────────────── 7. Money ─────────────────────────────
    {
      id: "money",
      title: "Money",
      section: "Money",
      summary: "We learn to add money with coins and notes, and to find the change we get back after buying something.",
      notes: [
        {
          heading: "Coins and notes",
          points: [
            "We use coins of ₹1, ₹2, ₹5 and ₹10, and notes of ₹10, ₹20, ₹50 and ₹100.",
            "A ₹20 note and a ₹5 coin together make ₹25."
          ]
        },
        {
          heading: "Change",
          points: [
            "If a toffee costs ₹4 and you pay ₹5, you get back ₹1 as change.",
            "To find the change, subtract the price from the money you paid: ₹5 − ₹4 = ₹1."
          ]
        }
      ],
      terms: [
        { term: "Rupee (₹)", meaning: "The money used in India." },
        { term: "Coin", meaning: "Metal money, like a ₹5 coin." },
        { term: "Note", meaning: "Paper money, like a ₹20 note." },
        { term: "Change", meaning: "The money you get back when you pay more than the price." }
      ],
      examples: [
        {
          q: "Riya has a ₹20 note, a ₹5 coin and a ₹2 coin. How much money does she have?",
          steps: ["₹20 + ₹5 = ₹25.", "₹25 + ₹2 = ₹27."],
          answer: "Riya has ₹27."
        }
      ],
      qa: [
        { q: "What is ₹50 + ₹20?", a: "₹70." },
        { q: "You buy a pencil for ₹3 and pay ₹5. How much change do you get?", a: "₹5 − ₹3 = ₹2. You get ₹2 back." }
      ],
      quiz: [
        {
          q: "What is ₹10 + ₹10?",
          options: ["₹20", "₹10", "₹100", "₹1"],
          answer: 0,
          explain: "₹10 + ₹10 = ₹20."
        },
        {
          q: "What is ₹5 + ₹2?",
          options: ["₹3", "₹8", "₹7", "₹52"],
          answer: 2,
          explain: "₹5 + ₹2 = ₹7."
        },
        {
          q: "A toffee costs ₹4. You pay with a ₹10 note. How much change do you get?",
          options: ["₹14", "₹5", "₹4", "₹6"],
          answer: 3,
          explain: "₹10 − ₹4 = ₹6."
        },
        {
          q: "Which is the biggest note?",
          options: ["₹10", "₹50", "₹100", "₹20"],
          answer: 2,
          explain: "₹100 is the biggest note in this list."
        },
        {
          q: "Which amount is ₹30?",
          options: ["₹3", "₹13", "₹300", "₹30"],
          answer: 3,
          explain: "₹30 is three tens of rupees."
        }
      ]
    },

    // ───────────────────────────── 8. Time: Clock and Months ─────────────────────────────
    {
      id: "time-clock-and-months",
      title: "Time: Clock and Months",
      section: "Time",
      summary: "We learn to read the clock for o'clock and half past, and we learn the months of the year.",
      notes: [
        {
          heading: "Reading the clock",
          points: [
            "The short hand shows the hour. The long hand shows the minutes.",
            "When the long hand points to 12, it is o'clock. If the short hand is at 5, the time is 5 o'clock."
          ]
        },
        {
          heading: "Half past",
          points: [
            "When the long hand points to 6, it is half past. Half past 4 is written as 4:30.",
            "Half past means 30 minutes after the hour."
          ]
        },
        {
          heading: "Months of the year",
          points: [
            "There are 12 months: January, February, March, April, May, June, July, August, September, October, November and December.",
            "A year has 12 months."
          ]
        }
      ],
      terms: [
        { term: "Hour hand", meaning: "The short hand on a clock. It shows the hour." },
        { term: "Minute hand", meaning: "The long hand on a clock. It shows the minutes." },
        { term: "Half past", meaning: "30 minutes past the hour, like 4:30." },
        { term: "Month", meaning: "One of the 12 parts of a year." }
      ],
      examples: [
        {
          q: "The short hand is at 5 and the long hand is at 12. What time is it?",
          steps: ["The long hand at 12 means it is o'clock.", "The short hand at 5 means 5 hours."],
          answer: "5 o'clock (5:00)"
        }
      ],
      qa: [
        { q: "How many months are there in a year?", a: "12 months." },
        { q: "What time is half past 2?", a: "2:30." }
      ],
      quiz: [
        {
          q: "How many months are there in a year?",
          options: ["10", "11", "12", "13"],
          answer: 2,
          explain: "A year has 12 months."
        },
        {
          q: "When the long hand points to 12, what do we say?",
          options: ["Half past", "Quarter past", "Ten past", "O'clock"],
          answer: 3,
          explain: "When the long hand is at 12, the time is o'clock."
        },
        {
          q: "What time is half past 6?",
          options: ["6:30", "6:15", "6:45", "7:00"],
          answer: 0,
          explain: "Half past 6 is 6:30."
        },
        {
          q: "Which month comes after March?",
          options: ["February", "May", "April", "June"],
          answer: 2,
          explain: "The months go March, April, May."
        },
        {
          q: "Which hand shows the hour on a clock?",
          options: ["Minute hand", "Hour hand", "Second hand", "Clock face"],
          answer: 1,
          explain: "The short hand, called the hour hand, shows the hour."
        }
      ]
    },

    // ───────────────────────────── 9. Multiplication as Repeated Addition ─────────────────────────────
    {
      id: "multiplication-as-repeated-addition",
      title: "Multiplication as Repeated Addition",
      section: "Multiplication",
      summary: "When we add the same number again and again, we can write it in a shorter way using the times sign (×).",
      notes: [
        {
          heading: "Equal groups",
          points: [
            "3 plates with 4 laddoos each: 4 + 4 + 4 = 12 laddoos.",
            "We can say this as 3 fours, and write it as 3 × 4 = 12."
          ]
        },
        {
          heading: "The times sign",
          points: [
            "The sign × means multiply, or add equal groups.",
            "2 + 2 + 2 + 2 + 2 can be written as 5 × 2 = 10, because there are 5 groups of 2."
          ]
        }
      ],
      terms: [
        { term: "Multiply", meaning: "To add a number to itself a certain number of times." },
        { term: "Times sign (×)", meaning: "The sign used for multiplication." },
        { term: "Equal groups", meaning: "Groups that each have the same number of things." },
        { term: "Product", meaning: "The answer when we multiply two numbers." }
      ],
      examples: [
        {
          q: "There are 5 boxes with 3 pencils in each box. How many pencils are there?",
          steps: ["Add the groups: 3 + 3 + 3 + 3 + 3.", "This is 5 groups of 3, so 5 × 3 = 15."],
          answer: "15 pencils"
        }
      ],
      qa: [
        { q: "Write 2 + 2 + 2 + 2 as a multiplication.", a: "4 × 2 = 8, because there are 4 groups of 2." },
        { q: "What does 5 × 2 mean?", a: "5 groups of 2, or 2 + 2 + 2 + 2 + 2 = 10." }
      ],
      quiz: [
        {
          q: "What is 3 + 3 + 3?",
          options: ["6", "9", "33", "12"],
          answer: 1,
          explain: "3 + 3 + 3 = 9."
        },
        {
          q: "What is 4 × 2?",
          options: ["6", "8", "42", "4"],
          answer: 1,
          explain: "4 × 2 means 4 groups of 2, which is 2 + 2 + 2 + 2 = 8."
        },
        {
          q: "What is 5 × 3?",
          options: ["15", "35", "8", "53"],
          answer: 0,
          explain: "5 × 3 = 3 + 3 + 3 + 3 + 3 = 15."
        },
        {
          q: "5 + 5 + 5 can be written as:",
          options: ["5 × 3", "3 × 3", "5 + 3", "5 × 5"],
          answer: 0,
          explain: "There are 3 groups of 5, so it is 5 × 3."
        },
        {
          q: "A box has 4 pencils. There are 3 boxes. How many pencils are there in all?",
          options: ["7", "43", "34", "12"],
          answer: 3,
          explain: "3 × 4 = 12 pencils."
        }
      ]
    },

    // ───────────────────────────── 10. Patterns ─────────────────────────────
    {
      id: "patterns",
      title: "Patterns",
      section: "Patterns",
      summary: "Numbers and shapes can follow a rule. We find the rule, then use it to find the next number or the missing number.",
      notes: [
        {
          heading: "Number patterns",
          points: [
            "In 2, 4, 6, 8, … we add 2 each time.",
            "In 10, 20, 30, 40, … we add 10 each time."
          ]
        },
        {
          heading: "Colour and shape patterns",
          points: [
            "In red, yellow, red, yellow, … the colours repeat.",
            "A pattern repeats the same things in the same order."
          ]
        },
        {
          heading: "Finding the missing number",
          points: [
            "In 5, 10, __, 20, the rule is add 5. So the missing number is 15.",
            "Check the rule with the next number to make sure it fits."
          ]
        }
      ],
      terms: [
        { term: "Pattern", meaning: "Numbers or things that follow a rule or repeat in order." },
        { term: "Rule", meaning: "What we do each time to get the next number, like add 5." },
        { term: "Missing number", meaning: "A number that is left out of a pattern and must be found." },
        { term: "Sequence", meaning: "A list of numbers that follows a rule." }
      ],
      examples: [
        {
          q: "Find the missing number: 3, 6, 9, __, 15.",
          steps: ["The rule is add 3.", "9 + 3 = 12.", "12 + 3 = 15, which matches."],
          answer: "12"
        }
      ],
      qa: [
        { q: "What is the rule in 20, 30, 40, 50?", a: "Add 10 each time." },
        { q: "Find the next number: 1, 3, 5, 7, __", a: "9. The rule is add 2 each time." }
      ],
      quiz: [
        {
          q: "What comes next: 2, 4, 6, 8, __?",
          options: ["9", "10", "12", "7"],
          answer: 1,
          explain: "The rule is add 2, so 8 + 2 = 10."
        },
        {
          q: "What is the rule in 5, 10, 15, 20?",
          options: ["Subtract 5", "Add 5", "Add 10", "Add 2"],
          answer: 1,
          explain: "Each number is 5 more than the one before it."
        },
        {
          q: "Find the missing number: 10, 20, __, 40.",
          options: ["25", "50", "30", "35"],
          answer: 2,
          explain: "The rule is add 10, so 20 + 10 = 30."
        },
        {
          q: "What comes next: 100, 90, 80, __?",
          options: ["70", "60", "81", "50"],
          answer: 0,
          explain: "The rule is subtract 10, so 80 − 10 = 70."
        },
        {
          q: "What comes next in the colour pattern: red, blue, red, blue, __?",
          options: ["green", "blue", "yellow", "red"],
          answer: 3,
          explain: "The colours repeat red, blue, so red comes next."
        }
      ]
    },

    // ───────────────────────────── 11. Data: Tally Marks ─────────────────────────────
    {
      id: "data-tally-marks",
      title: "Data: Tally Marks",
      section: "Data",
      summary: "We use tally marks to count things quickly. We group them in fives and read the total.",
      notes: [
        {
          heading: "Making tally marks",
          points: [
            "We draw 4 straight lines, and then one slanting line across them. This makes a bundle of 5.",
            "Each line stands for one thing, so one bundle stands for 5 things."
          ]
        },
        {
          heading: "Reading tally marks",
          points: [
            "Count the bundles of 5 first, then add the extra lines.",
            "2 bundles and 3 extra lines means 2 × 5 + 3 = 13."
          ]
        }
      ],
      terms: [
        { term: "Tally mark", meaning: "A line used to count one thing." },
        { term: "Bundle", meaning: "Five tally marks, made of 4 lines and 1 slanting line." },
        { term: "Data", meaning: "Information we collect, like counts of fruits." },
        { term: "Tally chart", meaning: "A table that shows counts using tally marks." }
      ],
      examples: [
        {
          q: "Ravi made tally marks for mangoes: 2 bundles and 3 extra lines. How many mangoes did he count?",
          steps: ["2 bundles = 2 × 5 = 10.", "3 extra lines = 3.", "10 + 3 = 13."],
          answer: "13 mangoes"
        }
      ],
      qa: [
        { q: "How many lines make one tally bundle?", a: "5 lines: 4 upright lines and 1 slanting line across them." },
        { q: "Why do we use tally marks?", a: "To count and record things quickly, like the number of fruits or votes." }
      ],
      quiz: [
        {
          q: "How many tally marks make one bundle?",
          options: ["4", "6", "5", "10"],
          answer: 2,
          explain: "A bundle has 5 tally marks."
        },
        {
          q: "A tally of 2 bundles and 4 extra lines shows:",
          options: ["6", "14", "24", "8"],
          answer: 1,
          explain: "2 bundles is 10, and 10 + 4 = 14."
        },
        {
          q: "What is the count for 3 bundles?",
          options: ["3", "30", "15", "8"],
          answer: 2,
          explain: "3 bundles of 5 make 15."
        },
        {
          q: "Which tally marks show 4?",
          options: ["|||", "||||", "||", "|||||"],
          answer: 1,
          explain: "4 lines show the number 4. Five lines would show 5."
        },
        {
          q: "Priya made 9 tally marks in a row. How many complete bundles of 5 does she have?",
          options: ["1 bundle", "2 bundles", "9 bundles", "4 bundles"],
          answer: 0,
          explain: "9 tally marks have 1 full bundle of 5 and 4 extra lines."
        }
      ]
    }
  ]
});
