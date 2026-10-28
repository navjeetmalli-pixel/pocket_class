// Class 3 Mathematics: organised by topic (NCERT standard syllabus).
// Format: see CONTENT_GUIDE.md
StudyData.add(3, "maths", {
  // What this content follows. match: "textbook" | "older-book" | "topic". Set reviewed to a date once a teacher has checked it.
  syllabus: {board: "CBSE", match: "topic", books: [], note: "Chapter names and order may not match your textbook.", reviewed: false},
  chapters: [
    // ───────────────────────────── 1. Numbers up to 999 ─────────────────────────────
    {
      id: "numbers-up-to-999",
      title: "Numbers up to 999",
      section: "Numbers",
      summary: "A 3-digit number has hundreds, tens and ones. Learn what each digit is worth and how to read, write and compare big numbers.",
      notes: [
        {
          heading: "Hundreds, tens and ones",
          points: [
            "A 3-digit number has three places: **hundreds**, **tens** and **ones**.",
            "In 458, the 4 is in the hundreds place, the 5 is in the tens place and the 8 is in the ones place.",
            "**Place value** tells us what a digit is worth. In 458, the 4 means 400, the 5 means 50 and the 8 means 8.",
            "Expanded form writes the number as its parts: 458 = 400 + 50 + 8."
          ]
        },
        {
          heading: "Making groups of 10 and 100",
          points: [
            "10 ones make **1 ten**.",
            "10 tens make **1 hundred**, so 100 = 10 tens.",
            "Example: 6 hundreds, 3 tens and 2 ones make 632."
          ]
        },
        {
          heading: "Reading and writing",
          points: [
            "Write 'three hundred and seven' as **307**. The 0 in the tens place means there are no tens.",
            "Read a number from left to right: 412 is 'four hundred and twelve'.",
            "The number just after 999 is **1000**, which is one thousand."
          ]
        },
        {
          heading: "Comparing numbers",
          points: [
            "Compare the hundreds first. 712 is greater than 689 because 7 hundreds is more than 6 hundreds.",
            "If the hundreds are the same, compare the tens. 385 is less than 392.",
            "Use the signs **>** (greater than) and **<** (less than). For example, 500 > 450."
          ]
        }
      ],
      formulas: [
        "100 = 10 tens",
        "1 hundred = 10 tens = 100 ones",
        "Expanded form: 458 = 400 + 50 + 8"
      ],
      terms: [
        { term: "Hundreds place", meaning: "The third place from the right in a number. In 458, the hundreds digit is 4." },
        { term: "Tens place", meaning: "The second place from the right. In 458, the tens digit is 5." },
        { term: "Ones place", meaning: "The place on the far right. In 458, the ones digit is 8." },
        { term: "Place value", meaning: "The value a digit has because of its place. In 458, the 4 is worth 400." },
        { term: "Expanded form", meaning: "Writing a number as the sum of its hundreds, tens and ones: 458 = 400 + 50 + 8." }
      ],
      examples: [
        {
          q: "What is the value of the digit 6 in 364?",
          steps: [
            "364 has 3 hundreds, 6 tens and 4 ones.",
            "The 6 is in the tens place.",
            "6 tens = 60"
          ],
          answer: "60"
        },
        {
          q: "Write 582 in expanded form.",
          steps: [
            "582 has 5 hundreds, 8 tens and 2 ones.",
            "5 hundreds = 500, 8 tens = 80 and 2 ones = 2.",
            "500 + 80 + 2 = 582"
          ],
          answer: "500 + 80 + 2"
        }
      ],
      qa: [
        { q: "What is the place value of the 7 in 738?", a: "The 7 is in the hundreds place, so its value is 700." },
        { q: "Which is greater, 605 or 650? Why?", a: "650 is greater. Both have 6 hundreds, but 650 has 5 tens while 605 has no tens." }
      ],
      quiz: [
        {
          q: "What is the value of the 4 in 472?",
          options: ["4", "40", "400", "4000"],
          answer: 2,
          explain: "The 4 is in the hundreds place, so it means 4 hundreds = 400."
        },
        {
          q: "Which number is 'five hundred and six'?",
          options: ["560", "506", "50", "5006"],
          answer: 1,
          explain: "Five hundreds is 500 and 6 ones make 506. There are no tens, so the tens digit is 0."
        },
        {
          q: "Which number is the greatest?",
          options: ["847", "487", "478", "784"],
          answer: 0,
          explain: "847 has the most hundreds (8), so it is the greatest."
        },
        {
          q: "Which number is 300 + 40 + 9?",
          options: ["3409", "309", "394", "349"],
          answer: 3,
          explain: "300 + 40 + 9 = 349. Careful: 394 has the tens and ones switched."
        },
        {
          q: "How many tens are there in 500?",
          options: ["5", "10", "50", "500"],
          answer: 2,
          explain: "Each ten is 10, so 500 has 50 tens."
        }
      ]
    },

    // ───────────────────────────── 2. Addition ─────────────────────────────
    {
      id: "addition",
      title: "Addition (3-digit numbers)",
      section: "Operations",
      summary: "Add 3-digit numbers column by column. When a column adds up to 10 or more, carry 1 to the next column.",
      notes: [
        {
          heading: "Adding in columns",
          points: [
            "Write the numbers one under the other so that ones are under ones, tens under tens and hundreds under hundreds.",
            "Add the ones first, then the tens, then the hundreds.",
            "Example: 243 + 124. Ones: 3 + 4 = 7. Tens: 4 + 2 = 6. Hundreds: 2 + 1 = 3. The sum is 367."
          ]
        },
        {
          heading: "Carrying from the ones",
          points: [
            "If the ones add up to 10 or more, write only the ones digit and **carry** 1 ten to the tens column.",
            "Example: 178 + 145. Ones: 8 + 5 = 13, so write 3 and carry 1.",
            "Tens: 7 + 4 + 1 (the carried 1) = 12, so write 2 and carry 1. Hundreds: 1 + 1 + 1 = 3. Answer: 323."
          ]
        },
        {
          heading: "Carrying from the tens",
          points: [
            "If the tens add up to 10 or more, carry 1 hundred to the hundreds column.",
            "Always add the carried 1 along with the digits in that column.",
            "Example: 586 + 237 = 823. Ones: 6 + 7 = 13, write 3, carry 1. Tens: 8 + 3 + 1 = 12, write 2, carry 1. Hundreds: 5 + 2 + 1 = 8."
          ]
        },
        {
          heading: "Checking your answer",
          points: [
            "Estimate first. 178 + 145 is about 180 + 150 = 330, so 323 is a reasonable answer.",
            "Add in a different order to check. 145 + 178 should give the same answer."
          ]
        }
      ],
      formulas: [
        "Add the ones, then the tens, then the hundreds",
        "If a column adds to 10 or more, write the ones digit and carry 1 to the left",
        "Order does not matter in addition: 145 + 178 = 178 + 145"
      ],
      terms: [
        { term: "Carry", meaning: "Moving 1 ten (or 1 hundred) to the next column on the left when a column adds to 10 or more." },
        { term: "Sum", meaning: "The answer when numbers are added. The sum of 243 and 124 is 367." },
        { term: "Column", meaning: "A line of digits going up and down: ones, tens and hundreds each have their own column." },
        { term: "Estimate", meaning: "A quick guess close to the real answer, made by rounding the numbers to the nearest hundred or ten." }
      ],
      examples: [
        {
          q: "Add 458 and 296.",
          steps: [
            "Ones: 8 + 6 = 14. Write 4, carry 1.",
            "Tens: 5 + 9 + 1 = 15. Write 5, carry 1.",
            "Hundreds: 4 + 2 + 1 = 7."
          ],
          answer: "754"
        },
        {
          q: "Ravi collected 137 stickers on Monday and 268 on Tuesday. How many stickers did he collect in all?",
          steps: [
            "Add 137 + 268.",
            "Ones: 7 + 8 = 15. Write 5, carry 1.",
            "Tens: 3 + 6 + 1 = 10. Write 0, carry 1.",
            "Hundreds: 1 + 2 + 1 = 4."
          ],
          answer: "405 stickers"
        }
      ],
      qa: [
        { q: "Why do we carry 1 when the ones add up to 13?", a: "13 ones is the same as 1 ten and 3 ones. We write the 3 ones and carry the 1 ten to the tens column." },
        { q: "What is 362 + 209?", a: "571. Ones: 2 + 9 = 11, write 1, carry 1. Tens: 6 + 0 + 1 = 7. Hundreds: 3 + 2 = 5." }
      ],
      quiz: [
        {
          q: "What is 245 + 132?",
          options: ["367", "377", "387", "357"],
          answer: 1,
          explain: "Ones: 5 + 2 = 7. Tens: 4 + 3 = 7. Hundreds: 2 + 1 = 3. Sum = 377."
        },
        {
          q: "What is 186 + 247?",
          options: ["433", "423", "533", "443"],
          answer: 0,
          explain: "Ones: 6 + 7 = 13, write 3, carry 1. Tens: 8 + 4 + 1 = 13, write 3, carry 1. Hundreds: 1 + 2 + 1 = 4. Sum = 433."
        },
        {
          q: "What is 399 + 1?",
          options: ["390", "299", "410", "400"],
          answer: 3,
          explain: "Adding 1 to 399 carries across all three columns and gives 400."
        },
        {
          q: "What is 509 + 275?",
          options: ["774", "684", "784", "874"],
          answer: 2,
          explain: "Ones: 9 + 5 = 14, write 4, carry 1. Tens: 0 + 7 + 1 = 8. Hundreds: 5 + 2 = 7. Sum = 784."
        },
        {
          q: "A shop sold 350 kg of rice in the morning and 275 kg in the evening. How much rice was sold in all?",
          options: ["615 kg", "625 kg", "525 kg", "635 kg"],
          answer: 1,
          explain: "Tens: 5 + 7 = 12, write 2, carry 1. Hundreds: 3 + 2 + 1 = 6. Total = 625 kg."
        }
      ]
    },

    // ───────────────────────────── 3. Subtraction ─────────────────────────────
    {
      id: "subtraction",
      title: "Subtraction (3-digit numbers)",
      section: "Operations",
      summary: "Subtract 3-digit numbers column by column. When the top digit is too small, borrow 1 ten or 1 hundred from the next column.",
      notes: [
        {
          heading: "Subtracting without borrowing",
          points: [
            "Subtraction means taking away, or finding how much more or less one number is than another.",
            "Line up the digits and subtract the ones, then the tens, then the hundreds.",
            "Example: 587 − 254 = 333. Ones: 7 − 4 = 3. Tens: 8 − 5 = 3. Hundreds: 5 − 2 = 3."
          ]
        },
        {
          heading: "Borrowing from the tens",
          points: [
            "If the top digit is smaller than the bottom digit, **borrow** 1 ten from the next column.",
            "1 ten is the same as 10 ones, so add 10 to the top ones digit.",
            "Example: 532 − 268 = 264. Ones: 2 is smaller than 8, so borrow 1 ten: 12 − 8 = 4. Tens: 2 left after borrowing, and 2 is smaller than 6, so borrow 1 hundred: 12 − 6 = 6. Hundreds: 4 − 2 = 2."
          ]
        },
        {
          heading: "Borrowing across zeros",
          points: [
            "When the tens digit is 0, you cannot borrow from it. Borrow from the hundreds first.",
            "Example: 400 − 165 = 235. Borrow 1 hundred to make 3 hundreds and 10 tens, then borrow 1 ten to make 9 tens and 10 ones.",
            "Now subtract: 10 − 5 = 5, 9 − 6 = 3, 3 − 1 = 2. The answer is 235."
          ]
        },
        {
          heading: "Checking your answer",
          points: [
            "Add the answer back to the smaller number. It should give the bigger number.",
            "Check: 264 + 268 = 532, so 532 − 268 = 264 is correct."
          ]
        }
      ],
      formulas: [
        "Difference = bigger number − smaller number",
        "Check: smaller number + difference = bigger number",
        "1 ten = 10 ones;  1 hundred = 10 tens"
      ],
      terms: [
        { term: "Difference", meaning: "The answer when one number is subtracted from another. The difference of 532 and 268 is 264." },
        { term: "Borrow", meaning: "Taking 1 from the next column on the left and adding 10 to the column you are working in." },
        { term: "Minus sign (−)", meaning: "The sign that tells us to subtract. In 9 − 4 = 5, we take 4 away from 9." },
        { term: "Check", meaning: "Adding the answer back to the smaller number to see if you get the bigger number." }
      ],
      examples: [
        {
          q: "Find 571 − 346.",
          steps: [
            "Ones: 1 is smaller than 6, so borrow 1 ten. 11 − 6 = 5.",
            "Tens: 7 became 6 after lending, so 6 − 4 = 2.",
            "Hundreds: 5 − 3 = 2."
          ],
          answer: "225"
        },
        {
          q: "Meera had ₹500. She spent ₹287. How much money is left?",
          steps: [
            "Find 500 − 287.",
            "The tens and ones are 0 and 0, so borrow from the hundreds: 500 becomes 4 hundreds, 9 tens and 10 ones.",
            "Ones: 10 − 7 = 3. Tens: 9 − 8 = 1. Hundreds: 4 − 2 = 2."
          ],
          answer: "₹213"
        }
      ],
      qa: [
        { q: "Why do we borrow 10 when the top ones digit is smaller?", a: "Because 1 ten is the same as 10 ones. Adding those 10 ones to the top digit makes it big enough to subtract." },
        { q: "What is 800 − 356?", a: "444. 800 becomes 7 hundreds, 9 tens and 10 ones. Then 10 − 6 = 4, 9 − 5 = 4 and 7 − 3 = 4." }
      ],
      quiz: [
        {
          q: "What is 689 − 245?",
          options: ["444", "434", "544", "446"],
          answer: 0,
          explain: "Ones: 9 − 5 = 4. Tens: 8 − 4 = 4. Hundreds: 6 − 2 = 4. Check: 245 + 444 = 689."
        },
        {
          q: "What is 705 − 368?",
          options: ["343", "437", "337", "347"],
          answer: 2,
          explain: "Borrow from the hundreds, then the tens: 15 − 8 = 7, 9 − 6 = 3, 6 − 3 = 3. Answer 337."
        },
        {
          q: "Ravi has 450 marbles. He gives 186 to his friend. How many marbles does he have now?",
          options: ["364", "274", "254", "264"],
          answer: 3,
          explain: "450 − 186 = 264. Check: 264 + 186 = 450."
        },
        {
          q: "What is 400 − 165?",
          options: ["225", "235", "265", "335"],
          answer: 1,
          explain: "Borrow across the zeros: 400 becomes 3 hundreds, 9 tens and 10 ones. The answer is 235."
        },
        {
          q: "Find the missing number: 584 − ? = 319.",
          options: ["265", "255", "275", "365"],
          answer: 0,
          explain: "584 − 319 = 265. Check: 265 + 319 = 584."
        }
      ]
    },

    // ───────────────────────────── 4. Multiplication tables ─────────────────────────────
    {
      id: "multiplication-tables",
      title: "Multiplication Tables (2 to 10)",
      section: "Operations",
      summary: "Multiplication is quick counting in equal groups. Learn the tables from 2 to 10 and use the ones you know to find the rest.",
      notes: [
        {
          heading: "Multiplication means equal groups",
          points: [
            "3 × 4 means 3 groups of 4: 4 + 4 + 4 = 12.",
            "The **×** sign means 'times' or 'groups of'.",
            "Changing the order does not change the answer: 4 × 3 = 3 × 4 = 12."
          ]
        },
        {
          heading: "Tables of 2, 5 and 10",
          points: [
            "The 2 times table counts in twos: 2, 4, 6, 8, 10, … up to 2 × 10 = 20.",
            "Multiples of 5 end in 0 or 5: 5, 10, 15, 20, …",
            "Multiples of 10 end in 0: 10 × 7 = 70."
          ]
        },
        {
          heading: "Using tables you already know",
          points: [
            "Use doubles to help. 4 × 6 is double 2 × 6, so 4 × 6 = 12 + 12 = 24.",
            "3 × 7 = 7 + 7 + 7 = 21.",
            "Learn the tables in order and count in steps. Counting in 8s: 8, 16, 24, 32, 40, 48, 56, 64, 72, 80."
          ]
        },
        {
          heading: "9 times table trick",
          points: [
            "To find 9 × 4, first take 10 × 4 = 40.",
            "Then take away one group of 4: 40 − 4 = 36. So 9 × 4 = 36.",
            "The same trick works for any 9 times table: 9 × 7 = 70 − 7 = 63."
          ]
        }
      ],
      formulas: [
        "a × b = b × a",
        "2 × n = n + n",
        "9 × n = 10 × n − n",
        "Total = number of groups × number in each group"
      ],
      terms: [
        { term: "Product", meaning: "The answer to a multiplication. The product of 6 and 8 is 48." },
        { term: "Multiple", meaning: "A number in the times table of another number. 24 is a multiple of 8, because 8 × 3 = 24." },
        { term: "Times table", meaning: "A list of multiples of one number, such as 3, 6, 9, 12, … for the 3 times table." },
        { term: "Repeated addition", meaning: "Adding the same number again and again. 5 × 3 is the same as 5 + 5 + 5." }
      ],
      examples: [
        {
          q: "Ananya buys 6 packets of biscuits. Each packet has 8 biscuits. How many biscuits are there in all?",
          steps: [
            "6 groups of 8 biscuits.",
            "6 × 8 = 8 + 8 + 8 + 8 + 8 + 8",
            "6 × 8 = 48"
          ],
          answer: "48 biscuits"
        },
        {
          q: "Find 7 × 9.",
          steps: [
            "Start from 7 × 10 = 70.",
            "Take away one group of 7: 70 − 7 = 63.",
            "So 7 × 9 = 63."
          ],
          answer: "63"
        }
      ],
      qa: [
        { q: "What does 5 × 4 mean in words?", a: "5 groups of 4, which is 4 + 4 + 4 + 4 + 4 = 20." },
        { q: "Why does 4 × 6 equal 6 × 4?", a: "Both show the same number of objects. 4 rows of 6 can be turned into 6 rows of 4, and the total stays 24." }
      ],
      quiz: [
        {
          q: "What is 6 × 7?",
          options: ["36", "42", "49", "48"],
          answer: 1,
          explain: "6 × 7 = 42. (7 × 7 = 49 and 6 × 8 = 48 are close, but not the same.)"
        },
        {
          q: "What is 9 × 5?",
          options: ["40", "50", "35", "45"],
          answer: 3,
          explain: "9 × 5 = 45. Five groups of 9 would also be 9 + 9 + 9 + 9 + 9 = 45."
        },
        {
          q: "Which number is a multiple of 8?",
          options: ["28", "36", "48", "54"],
          answer: 2,
          explain: "8 × 6 = 48, so 48 is a multiple of 8. 28, 36 and 54 are not in the 8 times table."
        },
        {
          q: "What is 4 × 8?",
          options: ["32", "24", "28", "36"],
          answer: 0,
          explain: "4 × 8 = 32. (24 is 4 × 6, and 28 is 4 × 7.)"
        },
        {
          q: "Ravi has 3 bags with 7 apples in each bag. How many apples does he have?",
          options: ["10", "21", "24", "27"],
          answer: 1,
          explain: "3 × 7 = 21. Check: 7 + 7 + 7 = 21."
        }
      ]
    },

    // ───────────────────────────── 5. Division ─────────────────────────────
    {
      id: "division",
      title: "Division (Sharing Equally)",
      section: "Operations",
      summary: "Division means sharing things equally into groups. It is the opposite of multiplication, so the times table helps us divide.",
      notes: [
        {
          heading: "Sharing equally",
          points: [
            "12 mangoes shared equally among 3 children: each child gets 4 mangoes.",
            "We write this as **12 ÷ 3 = 4**. The **÷** sign means 'divided by' or 'shared into'.",
            "Every child must get the same number, so nothing is unfair."
          ]
        },
        {
          heading: "Division is the opposite of multiplication",
          points: [
            "Since 3 × 4 = 12, we also know that 12 ÷ 3 = 4 and 12 ÷ 4 = 3.",
            "To divide, ask: 'What number times 3 gives 12?' This is the multiplication fact you need.",
            "Learning the times tables makes division easy."
          ]
        },
        {
          heading: "Making equal groups",
          points: [
            "How many groups of 5 are there in 20? 20 ÷ 5 = 4, because 4 groups of 5 make 20.",
            "You can count in skips of 5 to find the answer: 5, 10, 15, 20.",
            "Halving is sharing into 2 equal parts. Half of 18 is 9, so 18 ÷ 2 = 9."
          ]
        },
        {
          heading: "Things left over",
          points: [
            "Sometimes things cannot be shared exactly. If 13 sweets are shared among 4 children, each child gets 3 and 1 sweet is left over.",
            "A leftover is less than the number of children. Here 1 is less than 4."
          ]
        }
      ],
      formulas: [
        "Share in each group = total ÷ number of groups",
        "If 3 × 4 = 12, then 12 ÷ 3 = 4 and 12 ÷ 4 = 3",
        "Half of a number = number ÷ 2"
      ],
      terms: [
        { term: "Division (÷)", meaning: "Sharing a number into equal groups. In 12 ÷ 3 = 4, the 12 is shared into 3 equal groups." },
        { term: "Equal sharing", meaning: "Giving each person or group the same number of things." },
        { term: "Group", meaning: "A set of things that are kept together. 5 groups of 4 make 20." },
        { term: "Left over", meaning: "The things that remain when the sharing cannot be done exactly." }
      ],
      examples: [
        {
          q: "24 chocolates are shared equally among 6 children. How many chocolates does each child get?",
          steps: [
            "Total = 24, children = 6.",
            "Think: 6 × ? = 24",
            "6 × 4 = 24, so ? = 4."
          ],
          answer: "4 chocolates each"
        },
        {
          q: "Find 35 ÷ 5.",
          steps: [
            "Ask: 5 × what = 35?",
            "5 × 7 = 35.",
            "So 35 ÷ 5 = 7."
          ],
          answer: "7"
        }
      ],
      qa: [
        { q: "What is 20 ÷ 4, and what does it mean?", a: "20 ÷ 4 = 5. If 20 biscuits are shared equally among 4 friends, each friend gets 5 biscuits." },
        { q: "How can 3 × 5 = 15 help you find 15 ÷ 3?", a: "If 3 groups of 5 make 15, then 15 shared into 3 equal groups gives 5 in each group. So 15 ÷ 3 = 5." }
      ],
      quiz: [
        {
          q: "What is 16 ÷ 4?",
          options: ["3", "6", "4", "12"],
          answer: 2,
          explain: "4 × 4 = 16, so 16 ÷ 4 = 4."
        },
        {
          q: "What is 40 ÷ 8?",
          options: ["32", "4", "6", "5"],
          answer: 3,
          explain: "8 × 5 = 40, so 40 ÷ 8 = 5."
        },
        {
          q: "18 pencils are shared equally among 3 children. How many pencils does each child get?",
          options: ["6", "9", "15", "3"],
          answer: 0,
          explain: "18 ÷ 3 = 6, because 3 × 6 = 18."
        },
        {
          q: "Which multiplication fact helps you find 21 ÷ 7?",
          options: ["7 × 2 = 14", "7 × 3 = 21", "3 × 3 = 9", "7 × 7 = 49"],
          answer: 1,
          explain: "Division is the opposite of multiplication. Since 7 × 3 = 21, we know 21 ÷ 7 = 3."
        },
        {
          q: "Mohan has 28 stickers and wants to share them equally among 4 friends. How many stickers will each friend get?",
          options: ["8", "24", "6", "7"],
          answer: 3,
          explain: "28 ÷ 4 = 7, because 4 × 7 = 28. (24 would come from taking away 4 instead of dividing.)"
        }
      ]
    },

    // ───────────────────────────── 6. Shapes ─────────────────────────────
    {
      id: "shapes-2d-and-3d",
      title: "Shapes Around Us (2D and 3D)",
      section: "Shapes",
      summary: "Flat shapes (2D) and solid shapes (3D) are all around us. Learn their sides, corners and faces.",
      notes: [
        {
          heading: "2D shapes",
          points: [
            "2D shapes are flat. They have length and width but no thickness.",
            "A **circle** is round and has no corners and no straight sides.",
            "A **triangle** has 3 straight sides and 3 corners.",
            "A **square** has 4 equal sides and 4 corners. A **rectangle** has 4 sides, and its opposite sides are equal."
          ]
        },
        {
          heading: "Sides and corners",
          points: [
            "A **side** is a straight edge of a shape. A **corner** is where two sides meet.",
            "A pentagon has 5 sides and 5 corners.",
            "A hexagon has 6 sides and 6 corners."
          ]
        },
        {
          heading: "3D shapes",
          points: [
            "3D shapes are solid. They have length, width and height.",
            "A **cube** has 6 square faces, 12 edges and 8 corners.",
            "A **cuboid** has 6 rectangular faces. A **sphere** (like a ball) has no flat faces, edges or corners.",
            "A **face** is a flat surface of a solid. An **edge** is where two faces meet."
          ]
        },
        {
          heading: "Shapes around us",
          points: [
            "A ball is shaped like a sphere, so it rolls easily.",
            "A matchbox or a brick is shaped like a cuboid.",
            "A dice is shaped like a cube. A tin can is shaped like a cylinder."
          ]
        }
      ],
      formulas: [
        "Triangle: 3 sides and 3 corners",
        "Square: 4 equal sides and 4 corners",
        "Cube: 6 faces, 12 edges and 8 corners"
      ],
      terms: [
        { term: "2D shape", meaning: "A flat shape with length and width, such as a circle, square or triangle." },
        { term: "3D shape", meaning: "A solid shape with length, width and height, such as a cube, cuboid or sphere." },
        { term: "Face", meaning: "A flat surface of a 3D shape. A cube has 6 faces." },
        { term: "Edge", meaning: "The line where two faces of a 3D shape meet." },
        { term: "Corner", meaning: "The point where two or more sides (or edges) meet." }
      ],
      examples: [
        {
          q: "How many sides and corners does a pentagon have?",
          steps: [
            "A pentagon is a 2D shape with 5 sides.",
            "Each side meets the next side at a corner.",
            "So it also has 5 corners."
          ],
          answer: "5 sides and 5 corners"
        },
        {
          q: "A dice has 6 faces, and all of them are squares of the same size. Which 3D shape is a dice?",
          steps: [
            "A dice has 6 faces.",
            "All 6 faces are squares of the same size.",
            "A solid with 6 equal square faces is a cube."
          ],
          answer: "Cube"
        }
      ],
      qa: [
        { q: "What is the difference between a square and a rectangle?", a: "Both have 4 sides and 4 corners. In a square all 4 sides are equal. In a rectangle, only the opposite sides are equal." },
        { q: "Why is a ball not a cube?", a: "A ball is round and has no flat faces, edges or corners. A cube has flat square faces, straight edges and corners." }
      ],
      quiz: [
        {
          q: "How many corners does a triangle have?",
          options: ["2", "4", "3", "5"],
          answer: 2,
          explain: "A triangle has 3 sides and 3 corners."
        },
        {
          q: "Which shape has no corners?",
          options: ["Triangle", "Square", "Rectangle", "Circle"],
          answer: 3,
          explain: "A circle is round, so it has no corners and no straight sides."
        },
        {
          q: "How many faces does a cube have?",
          options: ["8", "12", "4", "6"],
          answer: 3,
          explain: "A cube has 6 square faces. (8 is its number of corners, and 12 is its number of edges.)"
        },
        {
          q: "Which 3D shape is shaped like a ball?",
          options: ["Cube", "Sphere", "Cuboid", "Cylinder"],
          answer: 1,
          explain: "A ball is a sphere. It has no flat faces, edges or corners."
        },
        {
          q: "How many sides does a hexagon have?",
          options: ["6", "5", "8", "4"],
          answer: 0,
          explain: "A hexagon has 6 sides, as its name shows (hex means six)."
        }
      ]
    },

    // ───────────────────────────── 7. Patterns ─────────────────────────────
    {
      id: "patterns",
      title: "Patterns",
      section: "Patterns",
      summary: "Patterns repeat or follow a rule. Find the core of a pattern, or the rule for a number pattern, to know what comes next.",
      notes: [
        {
          heading: "Repeating patterns",
          points: [
            "A repeating pattern shows the same things again and again, like red, blue, red, blue.",
            "The part that repeats is called the **core** of the pattern.",
            "In a pattern like ○ △ □ ○ △ □, the core is ○ △ □."
          ]
        },
        {
          heading: "Continuing a pattern",
          points: [
            "To continue a pattern, first find the core.",
            "Then repeat the core as many times as needed.",
            "Example: red, green, red, green, … the next colour is red."
          ]
        },
        {
          heading: "Number patterns",
          points: [
            "In 2, 4, 6, 8, … we add 2 each time.",
            "In 10, 20, 30, 40, … each number is 10 more than the one before.",
            "In 50, 45, 40, 35, … we take away 5 each time."
          ]
        },
        {
          heading: "Growing patterns",
          points: [
            "In a growing pattern, the shape gets bigger each time.",
            "Example: 1 dot, 3 dots, 5 dots, 7 dots. Each time, 2 more dots are added.",
            "The rule tells us the next number: add 2 each time."
          ]
        }
      ],
      formulas: [
        "Number pattern: add or take away the same number each time",
        "Repeating pattern: find the core, then repeat it"
      ],
      terms: [
        { term: "Pattern", meaning: "Things arranged in an order that can be guessed, such as shapes, colours or numbers." },
        { term: "Core", meaning: "The part of a repeating pattern that is repeated again and again." },
        { term: "Rule", meaning: "What we do to get from one number to the next, such as 'add 5'." },
        { term: "Growing pattern", meaning: "A pattern where the shape or number of items gets bigger at each step." }
      ],
      examples: [
        {
          q: "Continue the pattern 5, 10, 15, 20, …",
          steps: [
            "The gap is 10 − 5 = 5, and 15 − 10 = 5.",
            "The rule is: add 5.",
            "20 + 5 = 25, 25 + 5 = 30, 30 + 5 = 35."
          ],
          answer: "The next three numbers are 25, 30 and 35."
        },
        {
          q: "Continue the pattern: red, green, red, green, …",
          steps: [
            "The core is red, green.",
            "Repeat the core.",
            "The next colours are red, green, red."
          ],
          answer: "red, green, red"
        }
      ],
      qa: [
        { q: "In the pattern red, blue, blue, red, blue, blue, what is the core?", a: "Red, blue, blue. This part repeats again and again." },
        { q: "What is the rule for the pattern 100, 90, 80, 70, …?", a: "Take away 10 each time. The next numbers are 60 and 50." }
      ],
      quiz: [
        {
          q: "What comes next in 3, 6, 9, 12, …?",
          options: ["13", "14", "15", "16"],
          answer: 2,
          explain: "The rule is add 3. 12 + 3 = 15."
        },
        {
          q: "What is the next number in 100, 90, 80, 70, …?",
          options: ["50", "60", "65", "75"],
          answer: 1,
          explain: "The numbers go down by 10 each time, so 70 − 10 = 60."
        },
        {
          q: "In the pattern circle, square, circle, square, … what comes next?",
          options: ["Circle", "Triangle", "Star", "Square"],
          answer: 0,
          explain: "The core is circle, square. After the second square, the core starts again with a circle."
        },
        {
          q: "Which rule describes the pattern 2, 4, 6, 8, …?",
          options: ["Add 4 each time", "Take away 2 each time", "Add 2 each time", "Add 6 each time"],
          answer: 2,
          explain: "Each number is 2 more than the one before it. 4 + 2 = 6 and 6 + 2 = 8."
        },
        {
          q: "Find the missing number: 25, 30, ?, 40",
          options: ["36", "35", "34", "33"],
          answer: 1,
          explain: "The rule is add 5. 30 + 5 = 35, and 35 + 5 = 40."
        }
      ]
    },

    // ───────────────────────────── 8. Length ─────────────────────────────
    {
      id: "length",
      title: "Length (cm and m)",
      section: "Measurement",
      summary: "Length tells how long or how far something is. Measure in centimetres and metres, and remember that 1 metre = 100 centimetres.",
      notes: [
        {
          heading: "Measuring length",
          points: [
            "Length tells us how long or how far something is.",
            "We measure length with a ruler, a metre scale or a measuring tape.",
            "When you measure with a ruler, line up the 0 mark with one end of the object."
          ]
        },
        {
          heading: "Centimetre and metre",
          points: [
            "The **centimetre** (cm) is a small unit. A pencil is about 15 cm long.",
            "The **metre** (m) is a bigger unit. A door is about 2 m tall.",
            "**1 m = 100 cm.**"
          ]
        },
        {
          heading: "Changing between cm and m",
          points: [
            "250 cm is the same as 2 m 50 cm, because 2 m = 200 cm and 50 cm is left.",
            "3 m 20 cm is 300 cm + 20 cm = 320 cm.",
            "To change metres to centimetres, multiply by 100: 4 m = 400 cm."
          ]
        },
        {
          heading: "Adding lengths",
          points: [
            "Add the metres and the centimetres separately.",
            "Example: 2 m 30 cm + 1 m 40 cm. Metres: 2 + 1 = 3. Centimetres: 30 + 40 = 70. Total: 3 m 70 cm."
          ]
        }
      ],
      formulas: [
        "1 m = 100 cm",
        "1 m 25 cm = 125 cm",
        "Length in cm = metres × 100 + extra centimetres"
      ],
      terms: [
        { term: "Length", meaning: "How long or how far something is, measured in units such as cm or m." },
        { term: "Centimetre (cm)", meaning: "A small unit of length. The width of your finger is about 1 cm." },
        { term: "Metre (m)", meaning: "A unit of length equal to 100 cm. A metre scale is about 1 m long." },
        { term: "Measuring tape", meaning: "A long, flexible strip marked in cm and m, used to measure length." }
      ],
      examples: [
        {
          q: "Change 3 m 45 cm into centimetres.",
          steps: [
            "1 m = 100 cm, so 3 m = 300 cm.",
            "Add the 45 cm: 300 + 45 = 345.",
          ],
          answer: "345 cm"
        },
        {
          q: "Ria's rope is 180 cm long. Her friend's rope is 2 m long. Which rope is longer, and by how much?",
          steps: [
            "2 m = 200 cm.",
            "Compare 180 cm with 200 cm. 200 is more than 180.",
            "200 − 180 = 20."
          ],
          answer: "The friend's rope is longer by 20 cm."
        }
      ],
      qa: [
        { q: "Why do we measure a pencil in cm and not in m?", a: "A pencil is short, so centimetres give a useful number, like 15 cm. Metres would be too big for something so small." },
        { q: "How many centimetres are there in 4 m?", a: "400 cm, because 1 m = 100 cm and 4 × 100 = 400." }
      ],
      quiz: [
        {
          q: "1 metre is equal to how many centimetres?",
          options: ["10 cm", "1000 cm", "100 cm", "50 cm"],
          answer: 2,
          explain: "1 m = 100 cm."
        },
        {
          q: "How many centimetres are there in 5 m?",
          options: ["50 cm", "500 cm", "55 cm", "5 cm"],
          answer: 1,
          explain: "5 × 100 = 500, so 5 m = 500 cm."
        },
        {
          q: "Which unit is best for measuring the height of a door?",
          options: ["Metre", "Centimetre", "Litre", "Kilogram"],
          answer: 0,
          explain: "A door is tall, so metres give a sensible measure, about 2 m. Litre and kilogram measure capacity and weight, not length."
        },
        {
          q: "What is 2 m 40 cm in centimetres?",
          options: ["204 cm", "420 cm", "2400 cm", "240 cm"],
          answer: 3,
          explain: "2 m = 200 cm, and 200 + 40 = 240 cm."
        },
        {
          q: "Which length is the same as 1 m 20 cm?",
          options: ["120 cm", "102 cm", "1200 cm", "12 cm"],
          answer: 0,
          explain: "1 m = 100 cm, and 100 + 20 = 120 cm."
        }
      ]
    },

    // ───────────────────────────── 9. Weight and capacity ─────────────────────────────
    {
      id: "weight-and-capacity",
      title: "Weight and Capacity",
      section: "Measurement",
      summary: "Weight tells how heavy something is, measured in kilograms and grams. Capacity tells how much a container holds, measured in litres and millilitres.",
      notes: [
        {
          heading: "Weight",
          points: [
            "Weight tells how heavy something is.",
            "We use the **kilogram** (kg) for heavy things, like rice, sugar or a bag of vegetables.",
            "We use the **gram** (g) for light things, like a small packet of biscuits, which weighs about 100 g."
          ]
        },
        {
          heading: "Kilogram and gram",
          points: [
            "**1 kg = 1000 g.**",
            "To change kg to g, multiply by 1000: 3 kg = 3000 g.",
            "500 g is half a kilogram."
          ]
        },
        {
          heading: "Capacity",
          points: [
            "Capacity tells how much a container can hold.",
            "We use the **litre** (L) for large amounts of liquid, like a bottle of water.",
            "We use the **millilitre** (mL) for small amounts, like a spoonful of medicine.",
            "**1 L = 1000 mL.** 500 mL is half a litre."
          ]
        },
        {
          heading: "Adding and comparing",
          points: [
            "Add kilograms with kilograms and grams with grams.",
            "Example: 2 kg 200 g + 1 kg 500 g. Kilograms: 2 + 1 = 3. Grams: 200 + 500 = 700. Total: 3 kg 700 g.",
            "A glass that holds 250 mL means 4 such glasses hold 1 litre."
          ]
        }
      ],
      formulas: [
        "1 kg = 1000 g",
        "1 L = 1000 mL",
        "500 g = half a kilogram;  500 mL = half a litre"
      ],
      terms: [
        { term: "Weight", meaning: "How heavy something is. It is measured in kg or g." },
        { term: "Kilogram (kg)", meaning: "A unit of weight. A bag of rice is often 5 kg." },
        { term: "Capacity", meaning: "How much a container can hold when it is filled." },
        { term: "Litre (L)", meaning: "A unit of capacity for liquids. A water bottle may hold 1 L." },
        { term: "Millilitre (mL)", meaning: "A small unit of capacity. 1000 mL = 1 L." }
      ],
      examples: [
        {
          q: "Change 2 kg 350 g into grams.",
          steps: [
            "2 kg = 2 × 1000 g = 2000 g.",
            "Add 350 g: 2000 + 350 = 2350 g."
          ],
          answer: "2350 g"
        },
        {
          q: "Meera has 3 litres of milk. She uses 1 litre 250 mL. How much milk is left?",
          steps: [
            "3 L = 2 L 1000 mL, so the milk is 2 L 1000 mL.",
            "Subtract: 2 L 1000 mL − 1 L 250 mL.",
            "Litres: 2 − 1 = 1. Millilitres: 1000 − 250 = 750.",
          ],
          answer: "1 L 750 mL"
        }
      ],
      qa: [
        { q: "Should we use grams or kilograms to weigh a bag of rice? Why?", a: "Kilograms, because a bag of rice is heavy. Kilograms give smaller, easier numbers, like 5 kg instead of 5000 g." },
        { q: "How many 250 mL glasses can be filled from a 1 litre jug?", a: "4 glasses, because 4 × 250 mL = 1000 mL = 1 L." }
      ],
      quiz: [
        {
          q: "1 kilogram is equal to how many grams?",
          options: ["100 g", "10 g", "1000 g", "500 g"],
          answer: 2,
          explain: "1 kg = 1000 g."
        },
        {
          q: "Which unit is best for measuring the water in a bucket?",
          options: ["Kilogram", "Litre", "Metre", "Gram"],
          answer: 1,
          explain: "Liquids are measured in litres. Kilogram and gram measure weight, and metre measures length."
        },
        {
          q: "How many millilitres are there in 2 litres?",
          options: ["200 mL", "20 mL", "22 mL", "2000 mL"],
          answer: 3,
          explain: "1 L = 1000 mL, so 2 L = 2000 mL."
        },
        {
          q: "500 mL is the same as how much?",
          options: ["Half a litre", "5 litres", "50 litres", "2 litres"],
          answer: 0,
          explain: "1000 mL = 1 L, so 500 mL is half of 1 L."
        },
        {
          q: "A packet of biscuits weighs 250 g. How many such packets make 1 kg?",
          options: ["3 packets", "5 packets", "4 packets", "2 packets"],
          answer: 2,
          explain: "4 × 250 g = 1000 g = 1 kg."
        }
      ]
    },

    // ───────────────────────────── 10. Time ─────────────────────────────
    {
      id: "time",
      title: "Time: Clock and Calendar",
      section: "Measurement",
      summary: "Read the time on a clock in hours and minutes, and use a calendar to count days, weeks and months.",
      notes: [
        {
          heading: "Reading a clock",
          points: [
            "The **short hand** (hour hand) shows the hour. The **long hand** (minute hand) shows the minutes.",
            "When the long hand points to 12, it is an exact hour, such as 4 o'clock.",
            "Each big number on the clock is 5 minutes. When the long hand is at 6, it is 30 minutes past the hour."
          ]
        },
        {
          heading: "Half past and quarter past",
          points: [
            "**Half past 3** is 3:30. The long hand is at 6.",
            "**Quarter past 5** is 5:15. The long hand is at 3.",
            "**Quarter to 4** is 3:45. The long hand is at 9."
          ]
        },
        {
          heading: "Hours, minutes and seconds",
          points: [
            "**1 hour = 60 minutes.**",
            "**1 minute = 60 seconds.** The thin second hand moves quickly around the clock."
          ]
        },
        {
          heading: "Days, weeks and months",
          points: [
            "**1 day = 24 hours.**",
            "**1 week = 7 days**: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday and Sunday.",
            "A year has 12 months and about 365 days."
          ]
        },
        {
          heading: "Using a calendar",
          points: [
            "A calendar shows the days, weeks and months of the year.",
            "To count days ahead, count along the calendar. 7 days after a Monday is another Monday.",
            "Use a calendar to find out how many days are left until a festival or a birthday."
          ]
        }
      ],
      formulas: [
        "1 hour = 60 minutes",
        "1 minute = 60 seconds",
        "1 day = 24 hours;  1 week = 7 days",
        "1 year = 12 months"
      ],
      terms: [
        { term: "Hour hand", meaning: "The short hand on a clock. It shows the hour." },
        { term: "Minute hand", meaning: "The long hand on a clock. It shows the minutes." },
        { term: "Quarter past", meaning: "15 minutes after the hour. Quarter past 5 is 5:15." },
        { term: "Calendar", meaning: "A chart that shows the days, weeks and months of a year." }
      ],
      examples: [
        {
          q: "The long hand points to 6 and the short hand is just past 7. What time is it?",
          steps: [
            "The long hand at 6 means 30 minutes.",
            "The short hand is just past 7, so the hour is 7.",
            "The time is 7:30, or half past seven."
          ],
          answer: "7:30"
        },
        {
          q: "Today is Monday. What day will it be after 10 days?",
          steps: [
            "1 week = 7 days. 7 days after a Monday is a Monday again.",
            "10 days = 7 days + 3 days.",
            "3 days after Monday: Tuesday, Wednesday, Thursday."
          ],
          answer: "Thursday"
        }
      ],
      qa: [
        { q: "How many minutes are there between 2:00 and 2:30?", a: "30 minutes. The long hand moves from 12 to 6, which is half of the clock, and half of 60 is 30." },
        { q: "How many hours are there in 2 days?", a: "48 hours, since 1 day = 24 hours and 2 × 24 = 48." }
      ],
      quiz: [
        {
          q: "How many minutes are there in 1 hour?",
          options: ["50", "100", "60", "30"],
          answer: 2,
          explain: "1 hour = 60 minutes."
        },
        {
          q: "Which time is shown when the long hand is at 12 and the short hand is at 9?",
          options: ["9:00", "12:09", "9:12", "2:00"],
          answer: 0,
          explain: "The long hand at 12 means o'clock, and the short hand at 9 means 9 o'clock. The time is 9:00."
        },
        {
          q: "How many days are there in a week?",
          options: ["6", "7", "5", "10"],
          answer: 1,
          explain: "A week has 7 days: Monday to Sunday."
        },
        {
          q: "What time is half past 4?",
          options: ["4:45", "4:15", "5:30", "4:30"],
          answer: 3,
          explain: "Half past 4 means 30 minutes after 4, so it is 4:30."
        },
        {
          q: "How many months are there in a year?",
          options: ["12", "10", "365", "52"],
          answer: 0,
          explain: "A year has 12 months. (365 is the number of days, and 52 is the number of weeks.)"
        }
      ]
    },

    // ───────────────────────────── 11. Money ─────────────────────────────
    {
      id: "money",
      title: "Money (₹ and Paise)",
      section: "Money",
      summary: "Our money is in rupees (₹) and paise. Add prices to make a bill, and find the change when you pay with a larger note.",
      notes: [
        {
          heading: "Rupees and paise",
          points: [
            "The Indian currency is the **rupee** (₹). **1 rupee = 100 paise.**",
            "50 paise is half a rupee.",
            "Common notes are ₹10, ₹20, ₹50, ₹100, ₹200 and ₹500. Common coins are ₹1, ₹2, ₹5, ₹10 and ₹20."
          ]
        },
        {
          heading: "Adding and subtracting money",
          points: [
            "Add rupees with rupees, and paise with paise.",
            "Example: ₹25 + ₹40 = ₹65.",
            "If the paise add up to 100 or more, change them into rupees: 75 paise + 40 paise = ₹1 and 15 paise."
          ]
        },
        {
          heading: "Making a bill",
          points: [
            "A **bill** lists the things bought and their prices.",
            "To find the total, add all the prices.",
            "Example: pen ₹12, notebook ₹35, eraser ₹3. Total = ₹50."
          ]
        },
        {
          heading: "Giving and getting change",
          points: [
            "**Change** is the money you get back when you pay more than the price.",
            "Change = money paid − price.",
            "Example: you pay ₹100 for a book that costs ₹76. Change = ₹100 − ₹76 = ₹24."
          ]
        }
      ],
      formulas: [
        "1 rupee = 100 paise",
        "Total bill = sum of all the prices",
        "Change = money paid − price"
      ],
      terms: [
        { term: "Rupee (₹)", meaning: "The money of India. 100 paise make 1 rupee." },
        { term: "Paise", meaning: "Smaller units of money. 100 paise make ₹1." },
        { term: "Bill", meaning: "A list of things bought, with their prices and the total amount to pay." },
        { term: "Change", meaning: "The money given back when you pay more than the price." },
        { term: "Price", meaning: "The amount of money needed to buy something." }
      ],
      examples: [
        {
          q: "Find the total of ₹45, ₹30 and ₹5.",
          steps: [
            "Add the rupees: 45 + 30 + 5.",
            "45 + 30 = 75.",
            "75 + 5 = 80."
          ],
          answer: "₹80"
        },
        {
          q: "Priya has ₹100. She buys a toy for ₹68. How much change will she get?",
          steps: [
            "Subtract the price from the money paid: 100 − 68.",
            "Think: 68 + 2 = 70, and 70 + 30 = 100.",
            "So 2 + 30 = 32."
          ],
          answer: "₹32"
        }
      ],
      qa: [
        { q: "How many ₹10 notes make ₹100?", a: "10 notes, because 10 × ₹10 = ₹100." },
        { q: "Ravi paid ₹50 for a book that costs ₹38. What change should he get?", a: "₹12, because ₹50 − ₹38 = ₹12." }
      ],
      quiz: [
        {
          q: "How many paise make ₹1?",
          options: ["10", "50", "1000", "100"],
          answer: 3,
          explain: "1 rupee = 100 paise."
        },
        {
          q: "How many ₹5 coins make ₹20?",
          options: ["4", "5", "2", "3"],
          answer: 0,
          explain: "4 × ₹5 = ₹20."
        },
        {
          q: "Anita buys a pencil for ₹15 and a sharpener for ₹8. How much does she pay in all?",
          options: ["₹21", "₹23", "₹13", "₹33"],
          answer: 1,
          explain: "₹15 + ₹8 = ₹23. You can also think: ₹15 + ₹5 = ₹20, and ₹20 + ₹3 = ₹23."
        },
        {
          q: "A bill shows ₹40 for a notebook and ₹25 for a box of pencils. What is the total?",
          options: ["₹55", "₹75", "₹65", "₹15"],
          answer: 2,
          explain: "₹40 + ₹25 = ₹65."
        },
        {
          q: "Which is the largest note in this list?",
          options: ["₹10", "₹500", "₹50", "₹100"],
          answer: 1,
          explain: "₹500 is the largest of these notes."
        }
      ]
    },

    // ───────────────────────────── 12. Fractions ─────────────────────────────
    {
      id: "fractions",
      title: "Fractions: Half and Quarter",
      section: "Fractions",
      summary: "A fraction is a part of a whole that has been shared into equal parts. Learn halves (½) and quarters (¼) and find them of a number.",
      notes: [
        {
          heading: "What is a fraction?",
          points: [
            "A **fraction** is a part of a whole.",
            "The whole must be shared into **equal parts**, so each part is the same size.",
            "Fractions are written with a short line, like ½ or ¼."
          ]
        },
        {
          heading: "Halves",
          points: [
            "When a whole is cut into 2 equal parts, each part is a **half**, written ½.",
            "A half of 10 apples is 5 apples.",
            "Two halves make one whole: ½ + ½ = 1."
          ]
        },
        {
          heading: "Quarters",
          points: [
            "When a whole is cut into 4 equal parts, each part is a **quarter**, written ¼.",
            "3 quarters are written ¾.",
            "Four quarters make one whole: ¼ + ¼ + ¼ + ¼ = 1."
          ]
        },
        {
          heading: "Finding a half or quarter of a number",
          points: [
            "To find half of a number, divide it by 2. Half of 12 is 6.",
            "To find a quarter of a number, divide it by 4. A quarter of 20 is 5.",
            "To find ¾ of a number, find one quarter first, then take 3 of them. ¾ of 20 is 15."
          ]
        }
      ],
      formulas: [
        "½ = 1 part out of 2 equal parts",
        "¼ = 1 part out of 4 equal parts",
        "Half of a number = number ÷ 2;  quarter of a number = number ÷ 4"
      ],
      terms: [
        { term: "Fraction", meaning: "A part of a whole that has been shared into equal parts." },
        { term: "Whole", meaning: "The full thing before it is divided. A whole pizza can be cut into halves or quarters." },
        { term: "Half (½)", meaning: "One of 2 equal parts of a whole." },
        { term: "Quarter (¼)", meaning: "One of 4 equal parts of a whole." }
      ],
      examples: [
        {
          q: "Find half of 18.",
          steps: [
            "Half means dividing into 2 equal parts.",
            "Divide 18 by 2: 18 ÷ 2 = 9.",
            "So half of 18 is 9."
          ],
          answer: "9"
        },
        {
          q: "Find ¾ of 16.",
          steps: [
            "First find one quarter: 16 ÷ 4 = 4.",
            "Three quarters: 4 + 4 + 4 = 12."
          ],
          answer: "12"
        }
      ],
      qa: [
        { q: "A square is cut into 4 equal parts and 2 parts are shaded. Is the shaded part ½? Why?", a: "Yes. 2 out of 4 equal parts is 2 quarters, which is the same as one half." },
        { q: "Which is bigger, ½ of a pizza or ¼ of the same pizza? Why?", a: "½ is bigger. A half is cut into fewer pieces, so each piece is bigger than a quarter piece." }
      ],
      quiz: [
        {
          q: "What is ½ of 14?",
          options: ["7", "12", "9", "28"],
          answer: 0,
          explain: "14 ÷ 2 = 7."
        },
        {
          q: "A cake is cut into 4 equal pieces. What is one piece called?",
          options: ["A whole", "A half", "A quarter", "A three-quarter"],
          answer: 2,
          explain: "One of 4 equal parts is a quarter, written ¼."
        },
        {
          q: "What is ¼ of 20?",
          options: ["10", "4", "16", "5"],
          answer: 3,
          explain: "20 ÷ 4 = 5. (4 is 20 ÷ 5, and 10 is half of 20.)"
        },
        {
          q: "How do you write three quarters?",
          options: ["¼", "½", "¾", "4"],
          answer: 2,
          explain: "Three quarters means 3 of the 4 equal parts, written ¾."
        },
        {
          q: "Half of 26 is?",
          options: ["11", "13", "52", "12"],
          answer: 1,
          explain: "26 ÷ 2 = 13."
        }
      ]
    },

    // ───────────────────────────── 13. Data handling ─────────────────────────────
    {
      id: "pictographs",
      title: "Data Handling: Pictographs",
      section: "Data",
      summary: "Data is information we collect. A pictograph shows data with pictures, and its key tells how many each picture stands for.",
      notes: [
        {
          heading: "What is data?",
          points: [
            "**Data** is information we collect, like the favourite fruits of the children in our class.",
            "We collect data by asking questions. This is called a **survey**.",
            "We can show data in a table, a list or a picture."
          ]
        },
        {
          heading: "What is a pictograph?",
          points: [
            "A **pictograph** shows data using pictures or symbols.",
            "Each picture stands for a number. The **key** tells us this number.",
            "Example: key 1 picture = 5 students."
          ]
        },
        {
          heading: "Reading a pictograph",
          points: [
            "Count the pictures in each row.",
            "Multiply the number of pictures by the key value. If 4 pictures each stand for 5 students, there are 4 × 5 = 20 students.",
            "A half picture stands for half of the key value. If 1 picture is 10 cars, half a picture is 5 cars."
          ]
        },
        {
          heading: "Making a pictograph",
          points: [
            "Count the things you want to show.",
            "Choose a key that makes the pictures easy to count, such as 1 picture = 2 items.",
            "Draw the pictures in rows, give the pictograph a title and write the key."
          ]
        }
      ],
      formulas: [
        "Number shown = number of pictures × key value",
        "Half a picture = half of the key value"
      ],
      terms: [
        { term: "Data", meaning: "Information collected to study, such as the number of books each child reads." },
        { term: "Pictograph", meaning: "A chart that uses pictures or symbols to show data." },
        { term: "Key", meaning: "The note on a pictograph that tells how many things one picture stands for." },
        { term: "Survey", meaning: "Asking many people or things questions to collect data." }
      ],
      examples: [
        {
          q: "In a pictograph, each apple picture stands for 2 apples. Riya has 5 apple pictures. How many apples does she have?",
          steps: [
            "Each picture stands for 2 apples.",
            "5 pictures = 5 × 2.",
            "5 × 2 = 10 apples."
          ],
          answer: "10 apples"
        },
        {
          q: "A pictograph shows 3 full pictures and half a picture of cars. Each full picture stands for 10 cars. How many cars are shown?",
          steps: [
            "3 full pictures = 3 × 10 = 30 cars.",
            "Half a picture = 5 cars.",
            "30 + 5 = 35 cars."
          ],
          answer: "35 cars"
        }
      ],
      qa: [
        { q: "What is the key of a pictograph?", a: "The key tells us how many things one picture stands for, for example 1 picture = 5 students." },
        { q: "Why is a pictograph useful?", a: "It shows information in picture form, so we can compare groups at a glance and see which has more or less." }
      ],
      quiz: [
        {
          q: "What is data?",
          options: ["A kind of sign for addition", "Information we collect and study", "A type of ruler", "A picture with no numbers"],
          answer: 1,
          explain: "Data is information that we collect and study, such as answers from a survey."
        },
        {
          q: "In a pictograph, one picture stands for 5 children. There are 4 pictures. How many children are shown?",
          options: ["9", "45", "20", "4"],
          answer: 2,
          explain: "4 pictures × 5 children = 20 children."
        },
        {
          q: "What does the key of a pictograph tell us?",
          options: ["How many children are in the class", "What each picture stands for", "The name of the survey", "The colour of the pictures"],
          answer: 1,
          explain: "The key tells us how many things one picture stands for."
        },
        {
          q: "A pictograph shows 3 full pictures and half a picture. Each full picture stands for 8 books. How many books are shown?",
          options: ["24", "32", "12", "28"],
          answer: 3,
          explain: "3 × 8 = 24 for the full pictures, and half of 8 is 4. 24 + 4 = 28 books."
        },
        {
          q: "Which of these shows data using pictures?",
          options: ["Pictograph", "Clock", "Ruler", "Calendar"],
          answer: 0,
          explain: "A pictograph shows data using pictures."
        }
      ]
    }
  ]
});
