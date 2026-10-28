// Class 4 Mathematics: topics as in the NCERT syllabus for Class 4.
// Format: see CONTENT_GUIDE.md
StudyData.add(4, "maths", {
  // What this content follows. match: "textbook" | "older-book" | "topic". Set reviewed to a date once a teacher has checked it.
  syllabus: {board: "CBSE", match: "topic", books: [], note: "Chapter names and order may not match your textbook.", reviewed: false},
  chapters: [
    // ───────────────────────────── 1. Numbers up to 9999 ─────────────────────────────
    {
      id: "numbers-up-to-9999",
      title: "Numbers up to 9999",
      section: "Numbers",
      summary: "Bigger numbers are built from thousands, hundreds, tens and ones. Learn the place value of each digit and write numbers in expanded form.",
      notes: [
        {
          heading: "Thousands and place value",
          points: [
            "The biggest 3-digit number is 999. Add 1 and you get **1000**, which is one thousand.",
            "10 hundreds make 1 thousand. Every place is 10 times the place on its right.",
            "In 4,582 the digit 4 is in the thousands place, 5 in the hundreds place, 8 in the tens place and 2 in the ones place."
          ]
        },
        {
          heading: "Reading and writing",
          points: [
            "Put a comma after the thousands digit to make big numbers easy to read: 4,582 is read as four thousand five hundred eighty-two.",
            "Write 6,000 as six thousand. Write 6,040 as six thousand and forty, with a zero in the hundreds place."
          ]
        },
        {
          heading: "Expanded form",
          points: [
            "Expanded form shows the value of each digit. 4,582 = 4000 + 500 + 80 + 2.",
            "A zero in a place means that place has nothing. 7,046 = 7000 + 40 + 6, with no hundreds.",
            "Use expanded form to see why a digit has its value: the 6 in 3,694 means 6 hundreds, which is 600."
          ]
        },
        {
          heading: "Comparing numbers",
          points: [
            "Compare from the left. The number with more thousands is bigger. If the thousands are the same, compare the hundreds, and so on.",
            "4,812 and 4,780: both have 4 thousands, and 8 hundreds is more than 7 hundreds, so 4,812 is greater."
          ]
        }
      ],
      formulas: [
        "1 thousand = 10 hundreds = 100 tens = 1000 ones",
        "4,582 = 4 × 1000 + 5 × 100 + 8 × 10 + 2 × 1"
      ],
      terms: [
        { term: "Digit", meaning: "A single symbol from 0 to 9 used to write a number." },
        { term: "Place value", meaning: "The value of a digit because of the place it is in, such as hundreds or tens." },
        { term: "Expanded form", meaning: "Writing a number as the sum of the values of its digits, such as 3,052 = 3000 + 50 + 2." },
        { term: "Thousand", meaning: "Ten hundreds. It is written as 1000." }
      ],
      examples: [
        {
          q: "Write 5,308 in expanded form.",
          steps: [
            "Thousands digit 5 means 5000.",
            "Hundreds digit 3 means 300.",
            "Tens digit 0 means nothing, so leave it out.",
            "Ones digit 8 means 8."
          ],
          answer: "5,308 = 5000 + 300 + 8"
        }
      ],
      qa: [
        { q: "What is the value of the digit 6 in 3,694?", a: "600. The 6 is in the hundreds place, so its value is 6 × 100 = 600." },
        { q: "Why do we put a comma in numbers like 25,000?", a: "The comma helps us read big numbers quickly. 25,000 is read as twenty-five thousand." }
      ],
      quiz: [
        {
          q: "What is the place value of the digit 7 in 4,706?",
          options: ["7", "70", "700", "7000"],
          answer: 2,
          explain: "The 7 is in the hundreds place, so its value is 7 × 100 = 700."
        },
        {
          q: "Which is the expanded form of 3,052?",
          options: ["3000 + 5 + 2", "3000 + 50 + 2", "3000 + 500 + 2", "300 + 50 + 2"],
          answer: 1,
          explain: "3,052 has 3 thousands, 0 hundreds, 5 tens and 2 ones. So it is 3000 + 50 + 2."
        },
        {
          q: "Which number comes just after 4,999?",
          options: ["4,990", "5,000", "4,100", "5,009"],
          answer: 1,
          explain: "After 4,999 comes 5,000, because 999 + 1 = 1000."
        },
        {
          q: "Which is the largest number?",
          options: ["6,528", "6,825", "6,258", "6,582"],
          answer: 1,
          explain: "All start with 6 thousands. 6,825 has the most hundreds (8), so it is the largest."
        },
        {
          q: "How many hundreds make 1 thousand?",
          options: ["100", "5", "1000", "10"],
          answer: 3,
          explain: "1 thousand = 10 hundreds. Ten hundreds is 1000."
        }
      ]
    },

    // ───────────────────────────── 2. Addition and Subtraction ─────────────────────────────
    {
      id: "addition-and-subtraction",
      title: "Addition and Subtraction",
      section: "Operations",
      summary: "Add and subtract numbers up to 4 digits by lining up the place values. Carry and borrow carefully, and check your answer.",
      notes: [
        {
          heading: "Adding 4-digit numbers",
          points: [
            "Line up the digits by place value: ones under ones, tens under tens, and so on.",
            "Add the ones first. If the sum is 10 or more, write the ones digit and **carry 1** to the tens.",
            "Repeat for tens, hundreds and thousands. Example: 4,235 + 2,458 = 6,693."
          ]
        },
        {
          heading: "Subtracting 4-digit numbers",
          points: [
            "Line up the digits and subtract the ones first, then the tens, hundreds and thousands.",
            "If the top digit is smaller, **borrow 1** from the next place. Borrowing 1 thousand gives 10 hundreds, for example.",
            "Example: 7,000 − 2,345 = 4,655."
          ]
        },
        {
          heading: "Checking your answer",
          points: [
            "Check a subtraction by adding: difference + smaller number should give the bigger number.",
            "Check an addition by subtracting: sum − one number should give the other number."
          ]
        },
        {
          heading: "Solving word problems",
          points: [
            "Ravi collected 1,250 stamps and his sister collected 1,389. Together they have 1,250 + 1,389 = 2,639 stamps.",
            "Read the problem first. Words like **together**, **in all** and **altogether** mean add. Words like **more than** and **left** often mean subtract."
          ]
        }
      ],
      formulas: [
        "Sum = addend + addend",
        "Difference = bigger number − smaller number",
        "Check: smaller number + difference = bigger number"
      ],
      terms: [
        { term: "Sum", meaning: "The answer when two or more numbers are added." },
        { term: "Difference", meaning: "The answer when one number is subtracted from another." },
        { term: "Carry", meaning: "Moving 1 to the next place to the left when adding gives 10 or more in one place." },
        { term: "Borrow", meaning: "Taking 1 from the next place to the left when the top digit is too small to subtract." }
      ],
      examples: [
        {
          q: "Add 4,235 and 2,458.",
          steps: [
            "Ones: 5 + 8 = 13. Write 3 and carry 1.",
            "Tens: 3 + 5 + 1 = 9.",
            "Hundreds: 2 + 4 = 6.",
            "Thousands: 4 + 2 = 6."
          ],
          answer: "6,693"
        },
        {
          q: "Subtract 2,345 from 7,000.",
          steps: [
            "7,000 − 2,000 = 5,000",
            "5,000 − 300 = 4,700",
            "4,700 − 40 = 4,660",
            "4,660 − 5 = 4,655"
          ],
          answer: "4,655. Check: 4,655 + 2,345 = 7,000"
        }
      ],
      qa: [
        { q: "Why must we line up the digits by place value before adding?", a: "So that ones are added to ones, tens to tens and so on. If the digits are not lined up, the answer will be wrong." },
        { q: "How can you check that 6,000 − 1,746 = 4,254?", a: "Add the answer to the smaller number: 4,254 + 1,746 = 6,000. We get the bigger number, so the answer is correct." }
      ],
      quiz: [
        {
          q: "What is 3,518 + 2,407?",
          options: ["5,825", "5,925", "6,825", "5,915"],
          answer: 1,
          explain: "Ones: 8 + 7 = 15, write 5 carry 1. Tens: 1 + 0 + 1 = 2. Hundreds: 5 + 4 = 9. Thousands: 3 + 2 = 5. Answer 5,925."
        },
        {
          q: "What is 8,000 − 3,456?",
          options: ["4,544", "5,544", "4,456", "5,456"],
          answer: 0,
          explain: "8,000 − 3,000 = 5,000, then 5,000 − 456 = 4,544. Check: 4,544 + 3,456 = 8,000."
        },
        {
          q: "A shop sold 1,275 kg of rice in May and 1,480 kg in June. How much was sold in these two months together?",
          options: ["2,655 kg", "2,745 kg", "2,755 kg", "2,855 kg"],
          answer: 2,
          explain: "1,275 + 1,480 = 2,755 kg."
        },
        {
          q: "How much more is 5,010 than 2,985?",
          options: ["2,125", "2,035", "1,985", "2,025"],
          answer: 3,
          explain: "5,010 − 2,985 = 2,025. Check: 2,985 + 2,025 = 5,010."
        },
        {
          q: "Which number, added to 4,300, gives 9,000?",
          options: ["5,700", "4,700", "4,800", "4,600"],
          answer: 1,
          explain: "9,000 − 4,300 = 4,700. Check: 4,300 + 4,700 = 9,000."
        }
      ]
    },

    // ───────────────────────────── 3. Multiplication ─────────────────────────────
    {
      id: "multiplication",
      title: "Multiplication",
      section: "Operations",
      summary: "Multiply a 2-digit number by a 1-digit number, and then by a 2-digit number, by breaking the work into easy steps.",
      notes: [
        {
          heading: "Multiplying by a 1-digit number",
          points: [
            "Multiply the ones first, then the tens. Carry when the answer is 10 or more.",
            "Example: 23 × 4. 3 × 4 = 12, so write 2 and carry 1. Then 2 × 4 = 8, plus 1 is 9. The answer is 92.",
            "Multiplication is repeated addition: 23 × 4 is the same as 23 + 23 + 23 + 23."
          ]
        },
        {
          heading: "Multiplying by 10 and 100",
          points: [
            "To multiply by 10, add one zero at the end: 23 × 10 = 230.",
            "Multiplying by 100 adds two zeros: 23 × 100 = 2300."
          ]
        },
        {
          heading: "Multiplying by a 2-digit number",
          points: [
            "Split the second number into tens and ones. Multiply by each part, then add.",
            "Example: 23 × 14 = 23 × 10 + 23 × 4 = 230 + 92 = 322.",
            "The two answers, 230 and 92, are called **partial products**."
          ]
        },
        {
          heading: "Multiplication in daily life",
          points: [
            "A packet has 15 mangoes. 6 packets have 6 × 15 = 90 mangoes.",
            "A carton has 12 eggs. 4 cartons have 4 × 12 = 48 eggs."
          ]
        }
      ],
      formulas: [
        "Product = number × number",
        "Multiplying by 10: add one zero",
        "23 × 14 = 23 × 10 + 23 × 4"
      ],
      terms: [
        { term: "Product", meaning: "The answer when two or more numbers are multiplied." },
        { term: "Multiplier", meaning: "The number that tells how many times to multiply. In 23 × 4, the multiplier is 4." },
        { term: "Partial product", meaning: "A part of the multiplication, such as 230 and 92 in 23 × 14." },
        { term: "Carry", meaning: "Moving the tens part of a product to the next place to the left." }
      ],
      examples: [
        {
          q: "Find 36 × 7.",
          steps: [
            "6 × 7 = 42. Write 2 and carry 4.",
            "3 × 7 = 21. Add the carried 4: 21 + 4 = 25.",
            "Write 25 in front of 2."
          ],
          answer: "36 × 7 = 252"
        },
        {
          q: "Find 24 × 16.",
          steps: [
            "24 × 10 = 240",
            "24 × 6 = 144",
            "240 + 144 = 384"
          ],
          answer: "24 × 16 = 384"
        }
      ],
      qa: [
        { q: "Why is 23 × 14 split into 23 × 10 and 23 × 4?", a: "Splitting makes the work easier. 23 × 10 = 230 is quick, and 23 × 4 = 92 is a 1-digit multiplication. Adding 230 and 92 gives 322." },
        { q: "A school has 18 classrooms with 30 students in each. How many students are there in all?", a: "18 × 30 = 540 students. Multiply 18 by 3 to get 54, then add a zero to get 540." }
      ],
      quiz: [
        {
          q: "What is 47 × 3?",
          options: ["131", "141", "144", "151"],
          answer: 1,
          explain: "7 × 3 = 21, write 1 carry 2. 4 × 3 = 12, plus 2 is 14. Answer 141."
        },
        {
          q: "What is 62 × 5?",
          options: ["310", "315", "360", "3100"],
          answer: 0,
          explain: "2 × 5 = 10, write 0 carry 1. 6 × 5 = 30, plus 1 is 31. Answer 310."
        },
        {
          q: "What is 25 × 12?",
          options: ["275", "250", "300", "312"],
          answer: 2,
          explain: "25 × 10 = 250 and 25 × 2 = 50. Total 300."
        },
        {
          q: "What is 36 × 4?",
          options: ["124", "164", "134", "144"],
          answer: 3,
          explain: "30 × 4 = 120 and 6 × 4 = 24. Total 144."
        },
        {
          q: "A packet has 15 mangoes. How many mangoes are in 6 packets?",
          options: ["86", "96", "90", "76"],
          answer: 2,
          explain: "6 × 15 = 90. Check: 15 + 15 + 15 + 15 + 15 + 15 = 90."
        }
      ]
    },

    // ───────────────────────────── 4. Division ─────────────────────────────
    {
      id: "division",
      title: "Division",
      section: "Operations",
      summary: "Division shares things equally or makes equal groups. Sometimes some are left over, and that leftover is called the remainder.",
      notes: [
        {
          heading: "Sharing equally",
          points: [
            "24 mangoes shared among 4 children give each child 6 mangoes. So 24 ÷ 4 = 6.",
            "Division is the opposite of multiplication: because 4 × 6 = 24, we know 24 ÷ 4 = 6."
          ]
        },
        {
          heading: "Division with remainder",
          points: [
            "17 ÷ 5: the biggest multiple of 5 that is not more than 17 is 15 (5 × 3). So 17 ÷ 5 = 3 remainder 2.",
            "The **remainder** is the amount left over. It is always smaller than the divisor."
          ]
        },
        {
          heading: "Steps of long division",
          points: [
            "Step 1: **Divide** the first digit by the divisor.",
            "Step 2: **Multiply** the answer by the divisor and write the result below.",
            "Step 3: **Subtract** to find what is left. Then **bring down** the next digit and repeat.",
            "Example: 96 ÷ 4. 9 ÷ 4 = 2, 2 × 4 = 8, 9 − 8 = 1. Bring down 6 to get 16. 16 ÷ 4 = 4. So 96 ÷ 4 = 24."
          ]
        },
        {
          heading: "Division in daily life",
          points: [
            "45 students go on a trip in buses that seat 6 each. 7 buses take 42 students and 3 are left over, so 8 buses are needed.",
            "When something is left over, think about whether you need one more group."
          ]
        }
      ],
      formulas: [
        "Dividend = Divisor × Quotient + Remainder",
        "Remainder is always less than the divisor"
      ],
      terms: [
        { term: "Dividend", meaning: "The number being divided. In 17 ÷ 5, the dividend is 17." },
        { term: "Divisor", meaning: "The number we divide by. In 17 ÷ 5, the divisor is 5." },
        { term: "Quotient", meaning: "The answer to a division, not counting the remainder. In 17 ÷ 5, the quotient is 3." },
        { term: "Remainder", meaning: "The amount left over after dividing as much as possible." }
      ],
      examples: [
        {
          q: "Divide 83 by 6.",
          steps: [
            "6 × 10 = 60, and 6 × 13 = 78.",
            "The biggest multiple of 6 that is not more than 83 is 78.",
            "83 − 78 = 5, which is less than 6."
          ],
          answer: "Quotient 13, remainder 5. Check: 6 × 13 + 5 = 83"
        }
      ],
      qa: [
        { q: "What is the remainder when 50 is divided by 8? Explain.", a: "8 × 6 = 48, so 50 − 48 = 2. The remainder is 2. It is less than 8, so the division is complete." },
        { q: "Why do 45 students in buses of 6 seats need 8 buses?", a: "7 buses hold 42 students and 3 students are left. One more bus is needed for them, so 8 buses are needed in all." }
      ],
      quiz: [
        {
          q: "What is 36 ÷ 3?",
          options: ["10", "11", "12", "13"],
          answer: 2,
          explain: "3 × 12 = 36, so 36 ÷ 3 = 12."
        },
        {
          q: "What is 29 ÷ 4?",
          options: ["7 remainder 1", "6 remainder 5", "7 remainder 2", "8 remainder 1"],
          answer: 0,
          explain: "4 × 7 = 28 and 29 − 28 = 1. So 29 ÷ 4 = 7 remainder 1. (6 remainder 5 is wrong because 5 is bigger than 4.)"
        },
        {
          q: "What is the remainder when 53 is divided by 6?",
          options: ["3", "5", "6", "8"],
          answer: 1,
          explain: "6 × 8 = 48 and 53 − 48 = 5. The remainder is 5."
        },
        {
          q: "A bus has 7 seats. How many buses are needed to carry 30 children?",
          options: ["4", "5", "6", "30"],
          answer: 1,
          explain: "30 ÷ 7 = 4 remainder 2. The 2 children left need one more bus, so 5 buses are needed."
        },
        {
          q: "The dividend is 75 and the divisor is 5. What is the quotient?",
          options: ["13", "17", "25", "15"],
          answer: 3,
          explain: "75 ÷ 5 = 15, because 5 × 15 = 75."
        }
      ]
    },

    // ───────────────────────────── 5. Factors and Multiples ─────────────────────────────
    {
      id: "factors-and-multiples",
      title: "Factors and Multiples",
      section: "Operations",
      summary: "A factor divides a number exactly. A multiple is what you get when a number is multiplied by 1, 2, 3 and so on.",
      notes: [
        {
          heading: "Factors",
          points: [
            "A **factor** of a number divides it exactly, with no remainder. The factors of 12 are 1, 2, 3, 4, 6 and 12.",
            "1 and the number itself are always factors of that number."
          ]
        },
        {
          heading: "Finding factors",
          points: [
            "Find pairs of numbers that multiply to give the number. For 18: 1 × 18, 2 × 9 and 3 × 6.",
            "So the factors of 18 are 1, 2, 3, 6, 9 and 18."
          ]
        },
        {
          heading: "Multiples",
          points: [
            "A **multiple** of a number is the product of that number and 1, 2, 3, and so on.",
            "Multiples of 4 are 4, 8, 12, 16, 20, … Multiples of 5 end in 0 or 5.",
            "Factors are never bigger than the number, but multiples are never smaller than the number."
          ]
        },
        {
          heading: "Even and odd numbers",
          points: [
            "**Even numbers** are multiples of 2: 2, 4, 6, 8, …",
            "**Odd numbers** are not multiples of 2: 1, 3, 5, 7, …"
          ]
        }
      ],
      formulas: [
        "Factor × factor = number",
        "Multiples of 2 are even numbers",
        "Multiples of 5 end in 0 or 5"
      ],
      terms: [
        { term: "Factor", meaning: "A number that divides another number exactly. 3 is a factor of 12 because 3 × 4 = 12." },
        { term: "Multiple", meaning: "A number that is the product of a number and a counting number. 12 is a multiple of 3." },
        { term: "Even number", meaning: "A number that is a multiple of 2, such as 6 or 10." },
        { term: "Odd number", meaning: "A number that is not a multiple of 2, such as 5 or 9." }
      ],
      examples: [
        {
          q: "List all the factors of 20.",
          steps: [
            "1 × 20 = 20",
            "2 × 10 = 20",
            "4 × 5 = 20"
          ],
          answer: "1, 2, 4, 5, 10, 20"
        },
        {
          q: "Find the first five multiples of 6.",
          steps: [
            "6 × 1 = 6",
            "6 × 2 = 12",
            "6 × 3 = 18",
            "6 × 4 = 24",
            "6 × 5 = 30"
          ],
          answer: "6, 12, 18, 24, 30"
        }
      ],
      qa: [
        { q: "Is 3 a factor of 27? Why?", a: "Yes. 3 × 9 = 27, so 27 can be divided by 3 with no remainder." },
        { q: "Why is 1 a factor of every number?", a: "Every number can be written as 1 × itself, so 1 divides every number exactly." }
      ],
      quiz: [
        {
          q: "Which of these is a factor of 15?",
          options: ["5", "4", "6", "2"],
          answer: 0,
          explain: "5 × 3 = 15, so 5 divides 15 exactly. 4, 6 and 2 do not divide 15 exactly."
        },
        {
          q: "Which of these is a multiple of 7?",
          options: ["23", "26", "28", "24"],
          answer: 2,
          explain: "7 × 4 = 28. The others are not in the 7 times table."
        },
        {
          q: "Which number is a factor of 36?",
          options: ["5", "8", "7", "9"],
          answer: 3,
          explain: "36 ÷ 9 = 4 exactly. 5, 7 and 8 do not divide 36 exactly."
        },
        {
          q: "How many factors does 10 have?",
          options: ["2", "5", "3", "4"],
          answer: 3,
          explain: "The factors of 10 are 1, 2, 5 and 10. That is 4 factors."
        },
        {
          q: "What is the first multiple of 9 that is greater than 20?",
          options: ["18", "27", "36", "20"],
          answer: 1,
          explain: "The multiples of 9 are 9, 18, 27, 36. The first one bigger than 20 is 27."
        }
      ]
    },

    // ───────────────────────────── 6. Fractions ─────────────────────────────
    {
      id: "fractions",
      title: "Fractions",
      section: "Fractions and Decimals",
      summary: "A fraction shows part of a whole. Learn to add like fractions, and to find equivalent fractions that show the same amount.",
      notes: [
        {
          heading: "Parts of a whole",
          points: [
            "When a roti is cut into 4 equal parts, each part is one-fourth, written 1/4.",
            "The number on top (numerator) tells how many parts we have. The number below (denominator) tells how many equal parts the whole has.",
            "Example: Riya ate 3 of the 8 equal slices of a cake, so she ate 3/8 of the cake."
          ]
        },
        {
          heading: "Like fractions",
          points: [
            "Fractions with the same denominator are **like fractions**. For example, 3/8 and 5/8 are like fractions.",
            "To add like fractions, add the numerators and keep the denominator the same: 2/7 + 3/7 = 5/7.",
            "To subtract like fractions: 5/9 − 2/9 = 3/9."
          ]
        },
        {
          heading: "Equivalent fractions",
          points: [
            "**Equivalent fractions** have different numbers but show the same amount: 1/2 = 2/4 = 3/6.",
            "To make an equivalent fraction, multiply the top and bottom by the same number. 2/3 = 4/6, because 2 × 2 = 4 and 3 × 2 = 6.",
            "To simplify, divide the top and bottom by the same number. 6/8 = 3/4."
          ]
        },
        {
          heading: "Fraction of a group",
          points: [
            "To find 3/4 of 20 mangoes, first find 1/4 of 20: 20 ÷ 4 = 5. Then 3/4 of 20 is 3 × 5 = 15 mangoes.",
            "So to find any fraction of a number, divide by the denominator first, then multiply by the numerator."
          ]
        }
      ],
      formulas: [
        "Like fractions: a/c + b/c = (a + b)/c",
        "Equivalent fractions: a/b = (a × n)/(b × n)"
      ],
      terms: [
        { term: "Numerator", meaning: "The top number of a fraction. It tells how many parts we have." },
        { term: "Denominator", meaning: "The bottom number of a fraction. It tells how many equal parts make the whole." },
        { term: "Like fractions", meaning: "Fractions that have the same denominator, such as 1/5 and 3/5." },
        { term: "Equivalent fractions", meaning: "Different fractions that have the same value, such as 1/2 and 2/4." }
      ],
      examples: [
        {
          q: "Add 3/8 + 2/8.",
          steps: [
            "The denominators are both 8, so these are like fractions.",
            "Add the numerators: 3 + 2 = 5.",
            "Keep the denominator 8."
          ],
          answer: "5/8"
        },
        {
          q: "Find a fraction equal to 2/3 with denominator 12.",
          steps: [
            "12 ÷ 3 = 4, so multiply the top and bottom by 4.",
            "2 × 4 = 8 and 3 × 4 = 12."
          ],
          answer: "8/12"
        }
      ],
      qa: [
        { q: "Why does 1/2 equal 2/4?", a: "If a roti is cut into 4 equal pieces, 2 pieces make half the roti. So 2/4 and 1/2 are the same amount." },
        { q: "A class has 20 children and 3/4 of them like cricket. How many children like cricket?", a: "1/4 of 20 is 5, so 3/4 of 20 is 3 × 5 = 15 children." }
      ],
      quiz: [
        {
          q: "What is 4/9 + 3/9?",
          options: ["7/18", "7/9", "1/9", "12/9"],
          answer: 1,
          explain: "The denominators are the same, so add the numerators: 4 + 3 = 7. The answer is 7/9."
        },
        {
          q: "Which fraction is equal to 1/2?",
          options: ["2/3", "3/6", "2/5", "1/4"],
          answer: 1,
          explain: "3 × 2 = 6, so 3/6 is 1/2 with the top and bottom multiplied by 3."
        },
        {
          q: "Which fraction is 6/8 in simplest form?",
          options: ["2/4", "6/4", "3/8", "3/4"],
          answer: 3,
          explain: "Divide the top and bottom by 2: 6 ÷ 2 = 3 and 8 ÷ 2 = 4. So 6/8 = 3/4."
        },
        {
          q: "Rekha ate 2 of the 5 equal pieces of a barfi. What fraction did she eat?",
          options: ["5/2", "2/3", "2/5", "3/5"],
          answer: 2,
          explain: "She ate 2 parts out of 5 equal parts, so the fraction is 2/5."
        },
        {
          q: "What is 3/4 of 20?",
          options: ["15", "12", "5", "16"],
          answer: 0,
          explain: "1/4 of 20 is 5, so 3/4 of 20 is 3 × 5 = 15."
        }
      ]
    },

    // ───────────────────────────── 7. Introduction to Decimals ─────────────────────────────
    {
      id: "introduction-to-decimals",
      title: "Introduction to Decimals",
      section: "Fractions and Decimals",
      summary: "Decimals help us write money and length in parts smaller than a whole. The dot in a decimal is called the decimal point.",
      notes: [
        {
          heading: "Tenths and the decimal point",
          points: [
            "Divide 1 whole into 10 equal parts. One part is 1/10, which is written as 0.1 (zero point one).",
            "The dot is called the **decimal point**. It separates the whole part from the tenths part.",
            "In 4.7, the 4 is the whole part and the 7 is 7 tenths."
          ]
        },
        {
          heading: "Decimals and money",
          points: [
            "₹1 = 100 paise. So 50 paise is half a rupee, written ₹0.50.",
            "₹4.75 means 4 rupees and 75 paise.",
            "₹3 and 25 paise is written as ₹3.25."
          ]
        },
        {
          heading: "Decimals and length",
          points: [
            "1 metre = 100 cm. So 1 cm is 1/100 of a metre, written as 0.01 m.",
            "35 cm = 0.35 m. 2 m 5 cm = 2.05 m.",
            "A pencil that is 15 cm long is 0.15 m long."
          ]
        },
        {
          heading: "Comparing decimals",
          points: [
            "Compare the whole parts first. Then compare the tenths.",
            "₹3.50 is more than ₹3.05, because 5 tenths is more than 0 tenths."
          ]
        }
      ],
      formulas: [
        "₹1 = 100 paise, so 1 paisa = ₹0.01",
        "1 m = 100 cm, so 1 cm = 0.01 m",
        "1 whole = 10 tenths"
      ],
      terms: [
        { term: "Decimal point", meaning: "The dot that separates the whole number part from the part smaller than one." },
        { term: "Tenth", meaning: "One part when a whole is divided into 10 equal parts. Written as 0.1." },
        { term: "Hundredth", meaning: "One part when a whole is divided into 100 equal parts. Written as 0.01." },
        { term: "Paise", meaning: "The small unit of money. 100 paise make ₹1." }
      ],
      examples: [
        {
          q: "Write 3 rupees 25 paise as a decimal.",
          steps: [
            "1 rupee = 100 paise, so 25 paise = ₹0.25.",
            "Add the whole rupees: 3 + 0.25 = 3.25."
          ],
          answer: "₹3.25"
        },
        {
          q: "Write 175 cm in metres.",
          steps: [
            "100 cm = 1 m, so 175 cm = 100 cm + 75 cm.",
            "That is 1 m 75 cm."
          ],
          answer: "1.75 m"
        }
      ],
      qa: [
        { q: "What is 60 paise in rupees?", a: "60 paise is 60/100 of a rupee, so it is ₹0.60." },
        { q: "Why is 0.5 bigger than 0.25, even though 25 is bigger than 5?", a: "0.5 has 5 tenths, while 0.25 has 2 tenths and 5 hundredths. Compare the tenths first: 5 tenths is more than 2 tenths, so 0.5 is bigger." }
      ],
      quiz: [
        {
          q: "Which decimal is 4 tenths?",
          options: ["0.04", "4.1", "0.4", "40"],
          answer: 2,
          explain: "4 tenths is written 0.4, with the 4 in the tenths place."
        },
        {
          q: "How many paise are there in ₹2.50?",
          options: ["2500", "205", "50", "250"],
          answer: 3,
          explain: "₹2 = 200 paise and 50 paise more makes 250 paise."
        },
        {
          q: "How many metres is 84 cm?",
          options: ["8.4 m", "0.84 m", "0.084 m", "84 m"],
          answer: 1,
          explain: "84 cm is 84 hundredths of a metre, so it is 0.84 m."
        },
        {
          q: "Which is the greatest amount?",
          options: ["₹0.45", "₹0.09", "₹0.5", "₹0.90"],
          answer: 3,
          explain: "₹0.90 has 9 tenths, which is more than ₹0.5 (5 tenths), ₹0.45 and ₹0.09."
        },
        {
          q: "Which decimal shows 5 whole and 3 tenths?",
          options: ["5.03", "5.3", "53", "0.53"],
          answer: 1,
          explain: "5 whole and 3 tenths is written 5.3."
        }
      ]
    },

    // ───────────────────────────── 8. Shapes, Lines and Angles ─────────────────────────────
    {
      id: "shapes-lines-and-angles",
      title: "Shapes, Lines and Angles",
      section: "Shapes and Space",
      summary: "Lines can be parallel, perpendicular or intersecting. Where two lines meet, they form an angle, and the right angle is the most common one.",
      notes: [
        {
          heading: "Types of lines",
          points: [
            "A **line segment** has two end points. A straight line goes on forever in both directions.",
            "**Parallel lines** run side by side and never meet, like the two rails of a railway track.",
            "**Intersecting lines** cross each other at a point."
          ]
        },
        {
          heading: "Angles",
          points: [
            "When two lines meet at a point, they form an **angle**. The point where they meet is called the **vertex**.",
            "Angles are measured in degrees, written with the symbol °."
          ]
        },
        {
          heading: "Right angle",
          points: [
            "A **right angle** is a corner that measures 90°. The corner of a book or a notebook is a right angle.",
            "A right angle is shown with a small square at the corner.",
            "Two lines that meet at a right angle are called **perpendicular lines**. The plus sign (+) has perpendicular lines."
          ]
        },
        {
          heading: "Shapes with right angles",
          points: [
            "A rectangle has 4 right angles.",
            "A square has 4 equal sides and 4 right angles."
          ]
        }
      ],
      formulas: [
        "Right angle = 90°",
        "Straight angle = 180° (two right angles)"
      ],
      terms: [
        { term: "Right angle", meaning: "An angle of 90°, like the corner of a square tile." },
        { term: "Parallel lines", meaning: "Lines that are always the same distance apart and never meet." },
        { term: "Perpendicular lines", meaning: "Two lines that meet at a right angle." },
        { term: "Vertex", meaning: "The point where two lines or edges meet to form an angle." }
      ],
      examples: [
        {
          q: "How many right angles does a rectangle have?",
          steps: [
            "A rectangle has 4 corners.",
            "Each corner is a right angle of 90°."
          ],
          answer: "4 right angles, which is 4 × 90° = 360° in all"
        }
      ],
      qa: [
        { q: "Name three things in your home that show a right angle.", a: "For example, the corner of a book, a window frame, a door, or a square table top." },
        { q: "Why do railway tracks look like parallel lines?", a: "The two rails run side by side at the same distance apart and never meet, however far they go." }
      ],
      quiz: [
        {
          q: "How many degrees is a right angle?",
          options: ["45°", "90°", "180°", "60°"],
          answer: 1,
          explain: "A right angle is 90°. A straight angle is 180°."
        },
        {
          q: "Two lines that never meet are called:",
          options: ["intersecting", "perpendicular", "parallel", "curved"],
          answer: 2,
          explain: "Parallel lines always stay the same distance apart and never meet."
        },
        {
          q: "Which shape has 4 right angles and 4 equal sides?",
          options: ["square", "triangle", "circle", "pentagon"],
          answer: 0,
          explain: "A square has 4 equal sides and 4 right angles."
        },
        {
          q: "What is a straight angle in degrees?",
          options: ["180°", "90°", "270°", "360°"],
          answer: 0,
          explain: "A straight angle is 180°, which is two right angles together."
        },
        {
          q: "Lines that cross each other at a point are called:",
          options: ["parallel", "curved", "intersecting", "horizontal"],
          answer: 2,
          explain: "Intersecting lines cross each other at one point."
        }
      ]
    },

    // ───────────────────────────── 9. Perimeter and Area ─────────────────────────────
    {
      id: "perimeter-and-area",
      title: "Perimeter and Area",
      section: "Shapes and Space",
      summary: "Perimeter is the distance around a shape. Area is the space inside it, which we can find by counting squares.",
      notes: [
        {
          heading: "Perimeter",
          points: [
            "**Perimeter** is the distance all the way around a shape. Add the lengths of all its sides.",
            "A triangle with sides 3 cm, 4 cm and 5 cm has perimeter 3 + 4 + 5 = 12 cm."
          ]
        },
        {
          heading: "Perimeter of a rectangle and a square",
          points: [
            "Perimeter of a rectangle = 2 × (length + breadth).",
            "A rectangle 8 cm long and 5 cm wide has perimeter 2 × (8 + 5) = 26 cm.",
            "All sides of a square are equal, so perimeter = 4 × side. A square of side 6 cm has perimeter 24 cm."
          ]
        },
        {
          heading: "Area by counting squares",
          points: [
            "**Area** is the space inside a shape. We measure it in square units.",
            "A rectangle with 4 rows of 3 small squares has an area of 12 squares.",
            "A **square centimetre** (cm²) is a square with sides of 1 cm."
          ]
        },
        {
          heading: "Area of a rectangle",
          points: [
            "Area of a rectangle = length × breadth.",
            "A rectangle 6 cm long and 3 cm wide has area 6 × 3 = 18 cm²."
          ]
        }
      ],
      formulas: [
        "Perimeter of rectangle = 2 × (length + breadth)",
        "Perimeter of square = 4 × side",
        "Area of rectangle = length × breadth",
        "1 square centimetre = 1 cm²"
      ],
      terms: [
        { term: "Perimeter", meaning: "The distance all the way around a shape." },
        { term: "Area", meaning: "The amount of space inside a shape, measured in square units." },
        { term: "Square centimetre (cm²)", meaning: "The area of a square whose sides are each 1 cm long." },
        { term: "Breadth", meaning: "The width of a rectangle, which is the shorter side." }
      ],
      examples: [
        {
          q: "Find the perimeter of a rectangle that is 9 cm long and 4 cm wide.",
          steps: [
            "Add length and breadth: 9 + 4 = 13 cm.",
            "Perimeter = 2 × 13 = 26 cm."
          ],
          answer: "26 cm"
        },
        {
          q: "Find the area of a rectangle that is 7 cm long and 5 cm wide.",
          steps: [
            "Area = length × breadth = 7 × 5.",
            "7 × 5 = 35."
          ],
          answer: "35 cm²"
        }
      ],
      qa: [
        { q: "Why is perimeter measured in cm, but area in cm²?", a: "Perimeter is a length, the distance around a shape, so it is in cm. Area counts the squares inside a shape, so it is in square cm (cm²)." },
        { q: "The boundary wall of a school playground is a rectangle 10 m long and 4 m wide. How long is the wall?", a: "Perimeter = 2 × (10 + 4) = 2 × 14 = 28 m. The wall is 28 m long." }
      ],
      quiz: [
        {
          q: "What is the perimeter of a square with side 5 cm?",
          options: ["10 cm", "25 cm", "20 cm", "15 cm"],
          answer: 2,
          explain: "Perimeter = 4 × 5 = 20 cm."
        },
        {
          q: "What is the perimeter of a rectangle that is 6 cm long and 2 cm wide?",
          options: ["8 cm", "12 cm", "14 cm", "16 cm"],
          answer: 3,
          explain: "6 + 2 + 6 + 2 = 16 cm, which is the same as 2 × (6 + 2)."
        },
        {
          q: "What is the area of a rectangle 8 cm long and 3 cm wide?",
          options: ["11 cm²", "24 cm²", "22 cm²", "16 cm²"],
          answer: 1,
          explain: "Area = 8 × 3 = 24 cm²."
        },
        {
          q: "A rectangle has 3 rows of 5 unit squares. What is its area?",
          options: ["15", "8", "3", "18"],
          answer: 0,
          explain: "3 rows of 5 squares make 3 × 5 = 15 squares."
        },
        {
          q: "Which unit is used to measure area?",
          options: ["cm", "cm²", "kg", "litre"],
          answer: 1,
          explain: "Area is measured in square units, such as cm². cm is a unit of length."
        }
      ]
    },

    // ───────────────────────────── 10. Measurement ─────────────────────────────
    {
      id: "measurement",
      title: "Measurement",
      section: "Measurement",
      summary: "We measure length, weight and capacity in standard units. Learn how to change from one unit to another, such as kilometres to metres.",
      notes: [
        {
          heading: "Length",
          points: [
            "1 cm = 10 mm. 1 m = 100 cm. 1 km = 1000 m.",
            "We use km for the distance between two towns, m for the length of a room, and cm for a pencil."
          ]
        },
        {
          heading: "Weight",
          points: [
            "1 kg = 1000 g.",
            "We weigh rice, wheat and vegetables in kilograms and grams. 2 kg 500 g = 2500 g."
          ]
        },
        {
          heading: "Capacity",
          points: [
            "Capacity is how much a container can hold. 1 litre = 1000 ml.",
            "A small glass holds about 250 ml of water. A bottle of milk may hold 500 ml or 1 litre."
          ]
        },
        {
          heading: "Changing units",
          points: [
            "To change a bigger unit to a smaller one, multiply. 3 km = 3 × 1000 = 3000 m.",
            "To change a smaller unit to a bigger one, divide. 4500 g = 4 kg 500 g.",
            "When adding, convert to the same unit first. 1 kg 600 g + 2 kg 700 g = 4 kg 300 g."
          ]
        }
      ],
      formulas: [
        "1 km = 1000 m",
        "1 m = 100 cm",
        "1 cm = 10 mm",
        "1 kg = 1000 g",
        "1 litre = 1000 ml"
      ],
      terms: [
        { term: "Kilometre (km)", meaning: "A unit of length equal to 1000 metres, used for long distances." },
        { term: "Kilogram (kg)", meaning: "A unit of weight. 1 kg is 1000 grams." },
        { term: "Litre (l)", meaning: "A unit of capacity. 1 litre is 1000 millilitres." },
        { term: "Millilitre (ml)", meaning: "A small unit of capacity. 1000 ml make 1 litre." }
      ],
      examples: [
        {
          q: "Change 2 kg 350 g into grams.",
          steps: [
            "1 kg = 1000 g, so 2 kg = 2000 g.",
            "2000 g + 350 g = 2350 g."
          ],
          answer: "2350 g"
        },
        {
          q: "Ravi walked 1 km 250 m. How many metres did he walk?",
          steps: [
            "1 km = 1000 m.",
            "1000 m + 250 m = 1250 m."
          ],
          answer: "1250 m"
        }
      ],
      qa: [
        { q: "Why do we say 1 litre = 1000 ml?", a: "The prefix milli means one-thousandth. So 1000 millilitres make one whole litre." },
        { q: "A bag of rice weighs 5 kg 250 g. Write this weight in grams.", a: "5 kg = 5000 g, and 5000 g + 250 g = 5250 g." }
      ],
      quiz: [
        {
          q: "How many metres are there in 3 km?",
          options: ["30", "300", "3000", "30000"],
          answer: 2,
          explain: "1 km = 1000 m, so 3 km = 3 × 1000 = 3000 m."
        },
        {
          q: "How many grams are there in 1 kg 800 g?",
          options: ["1080 g", "1800 g", "8000 g", "18 g"],
          answer: 1,
          explain: "1 kg = 1000 g, so 1 kg 800 g = 1000 g + 800 g = 1800 g."
        },
        {
          q: "How many millilitres are there in 2 litres?",
          options: ["20", "200", "2200", "2000"],
          answer: 3,
          explain: "1 litre = 1000 ml, so 2 litres = 2000 ml."
        },
        {
          q: "Which unit is best to measure the length of a pencil?",
          options: ["km", "m", "cm", "kg"],
          answer: 2,
          explain: "A pencil is a few centimetres long. km is for very long distances, and kg measures weight."
        },
        {
          q: "How many kilograms and grams are there in 3500 g?",
          options: ["35 kg", "3 kg 50 g", "3 kg 500 g", "350 kg"],
          answer: 2,
          explain: "1000 g = 1 kg, so 3500 g = 3 kg 500 g."
        }
      ]
    },

    // ───────────────────────────── 11. Time ─────────────────────────────
    {
      id: "time",
      title: "Time",
      section: "Measurement",
      summary: "Learn the 12-hour and 24-hour clocks, how to find the time taken between two times, and how the calendar is arranged into days, weeks, months and years.",
      notes: [
        {
          heading: "Hours, minutes and days",
          points: [
            "1 hour = 60 minutes. 1 minute = 60 seconds.",
            "1 day = 24 hours. A day has 24 hours, not 12."
          ]
        },
        {
          heading: "12-hour and 24-hour clocks",
          points: [
            "On the 12-hour clock we write **a.m.** for times from midnight to noon, and **p.m.** for times from noon to midnight.",
            "On the 24-hour clock the hours run from 00 to 23. For p.m. times, add 12 to the hour. 1:30 p.m. is 13:30.",
            "12 midnight is 00:00 on the 24-hour clock."
          ]
        },
        {
          heading: "Time taken",
          points: [
            "To find how long something takes, subtract the start time from the end time.",
            "A school bell rings at 9:00 a.m. and the class ends at 1:30 p.m. The school day lasts 4 hours 30 minutes."
          ]
        },
        {
          heading: "Days, weeks, months and years",
          points: [
            "1 week = 7 days. 1 year = 12 months.",
            "January, March, May, July, August, October and December have 31 days. April, June, September and November have 30 days.",
            "February has 28 days, or 29 days in a leap year. A year has 365 days, or 366 days in a leap year."
          ]
        }
      ],
      formulas: [
        "1 day = 24 hours",
        "1 hour = 60 minutes",
        "1 year = 12 months = 365 days (366 in a leap year)",
        "Time taken = end time − start time"
      ],
      terms: [
        { term: "a.m. and p.m.", meaning: "a.m. is the time from midnight to noon. p.m. is the time from noon to midnight." },
        { term: "24-hour clock", meaning: "A clock that counts hours from 00 to 23, so 1:30 p.m. is written as 13:30." },
        { term: "Leap year", meaning: "A year with 366 days, in which February has 29 days. For example, 2024." },
        { term: "Duration", meaning: "The length of time between a start time and an end time." }
      ],
      examples: [
        {
          q: "A train leaves at 6:45 a.m. and reaches at 11:20 a.m. How long is the journey?",
          steps: [
            "From 6:45 a.m. to 11:00 a.m. is 4 hours 15 minutes.",
            "From 11:00 a.m. to 11:20 a.m. is 20 minutes.",
            "4 hours 15 minutes + 20 minutes = 4 hours 35 minutes."
          ],
          answer: "4 hours 35 minutes"
        },
        {
          q: "Write 8:15 p.m. in the 24-hour clock.",
          steps: [
            "It is p.m., so add 12 to the hour: 8 + 12 = 20.",
            "The minutes stay the same."
          ],
          answer: "20:15"
        }
      ],
      qa: [
        { q: "What is the difference between 12 noon and 12 midnight?", a: "12 noon is 12:00 p.m., the middle of the day. 12 midnight is 12:00 a.m., the start of the day, which is 00:00 on the 24-hour clock." },
        { q: "How many days are there in a leap year, and why?", a: "A leap year has 366 days, because February has 29 days in that year. Leap years come every 4 years, such as 2024." }
      ],
      quiz: [
        {
          q: "How many minutes are there in 2 hours?",
          options: ["100", "120", "60", "140"],
          answer: 1,
          explain: "1 hour = 60 minutes, so 2 hours = 120 minutes."
        },
        {
          q: "How is 7:30 p.m. written on the 24-hour clock?",
          options: ["07:30", "17:30", "19:30", "17:00"],
          answer: 2,
          explain: "For p.m. times add 12 to the hour: 7 + 12 = 19. So 7:30 p.m. is 19:30."
        },
        {
          q: "Which month has 30 days?",
          options: ["April", "January", "March", "May"],
          answer: 0,
          explain: "April has 30 days. January, March and May have 31 days."
        },
        {
          q: "How many hours are there in 3 days?",
          options: ["36", "72", "63", "24"],
          answer: 1,
          explain: "1 day = 24 hours, so 3 days = 3 × 24 = 72 hours."
        },
        {
          q: "How is 12:00 midnight written on the 24-hour clock?",
          options: ["12:00", "24:00", "00:00", "12:00 p.m."],
          answer: 2,
          explain: "Midnight is 00:00 on the 24-hour clock."
        }
      ]
    },

    // ───────────────────────────── 12. Money ─────────────────────────────
    {
      id: "money",
      title: "Money",
      section: "Measurement",
      summary: "Use rupee notes and coins to make amounts, find the change, and understand the basics of cost price, selling price, profit and loss.",
      notes: [
        {
          heading: "Notes and coins",
          points: [
            "Indian notes come in ₹10, ₹20, ₹50, ₹100, ₹200 and ₹500.",
            "Coins come in ₹1, ₹2, ₹5 and ₹10.",
            "₹347 can be made with 3 notes of ₹100, 2 notes of ₹20, 1 coin of ₹5 and 2 coins of ₹1."
          ]
        },
        {
          heading: "Change",
          points: [
            "Change is the money you get back when you pay more than the price.",
            "Change = money paid − price. If you pay ₹200 for a book costing ₹135, your change is ₹65."
          ]
        },
        {
          heading: "Cost price and selling price",
          points: [
            "**Cost price (CP)** is the amount a shopkeeper pays to buy an item.",
            "**Selling price (SP)** is the amount for which he sells it."
          ]
        },
        {
          heading: "Profit and loss",
          points: [
            "If SP is more than CP, there is a **profit**: Profit = SP − CP.",
            "If SP is less than CP, there is a **loss**: Loss = CP − SP.",
            "A bicycle bought for ₹2,500 and sold for ₹2,800 gives a profit of ₹300."
          ]
        }
      ],
      formulas: [
        "Change = amount paid − price",
        "Profit = selling price − cost price",
        "Loss = cost price − selling price"
      ],
      terms: [
        { term: "Cost price", meaning: "The price at which a shopkeeper buys an item." },
        { term: "Selling price", meaning: "The price at which a shopkeeper sells an item." },
        { term: "Profit", meaning: "The extra money earned when the selling price is more than the cost price." },
        { term: "Loss", meaning: "The money lost when the selling price is less than the cost price." },
        { term: "Change", meaning: "The money returned to you when you pay more than the price." }
      ],
      examples: [
        {
          q: "Priya buys 3 pens at ₹12 each and pays with a ₹50 note. How much change does she get?",
          steps: [
            "Cost of 3 pens = 3 × ₹12 = ₹36.",
            "Change = ₹50 − ₹36 = ₹14."
          ],
          answer: "₹14"
        },
        {
          q: "A shopkeeper buys a toy for ₹180 and sells it for ₹150. Is there a profit or a loss?",
          steps: [
            "The selling price (₹150) is less than the cost price (₹180).",
            "Loss = ₹180 − ₹150 = ₹30."
          ],
          answer: "Loss of ₹30"
        }
      ],
      qa: [
        { q: "How can you pay ₹75 using notes and coins?", a: "One way is a ₹50 note, a ₹20 note and a ₹5 coin: 50 + 20 + 5 = ₹75." },
        { q: "Why does the shopkeeper make a profit when the selling price is more than the cost price?", a: "He receives more money from selling the item than he spent on buying it. The extra money is his profit." }
      ],
      quiz: [
        {
          q: "Ravi pays ₹100 for items costing ₹64. How much change does he get?",
          options: ["₹46", "₹36", "₹164", "₹34"],
          answer: 1,
          explain: "Change = ₹100 − ₹64 = ₹36."
        },
        {
          q: "What is the value of a ₹500 note and a ₹100 note together?",
          options: ["₹500", "₹700", "₹650", "₹600"],
          answer: 3,
          explain: "₹500 + ₹100 = ₹600."
        },
        {
          q: "The cost price of a bag is ₹250 and the selling price is ₹300. What is the profit?",
          options: ["₹25", "₹60", "₹50", "₹550"],
          answer: 2,
          explain: "Profit = ₹300 − ₹250 = ₹50."
        },
        {
          q: "The cost price of a cap is ₹90 and the selling price is ₹75. What is the result?",
          options: ["Profit ₹15", "Loss ₹75", "Profit ₹165", "Loss ₹15"],
          answer: 3,
          explain: "Selling price is less than cost price, so there is a loss of ₹90 − ₹75 = ₹15."
        },
        {
          q: "How many ₹2 coins make ₹10?",
          options: ["3", "4", "5", "10"],
          answer: 2,
          explain: "₹2 × 5 = ₹10, so 5 coins of ₹2 make ₹10."
        }
      ]
    },

    // ───────────────────────────── 13. Patterns and Symmetry ─────────────────────────────
    {
      id: "patterns-and-symmetry",
      title: "Patterns and Symmetry",
      section: "Patterns and Symmetry",
      summary: "Patterns repeat or grow by a rule. A shape has symmetry when one line can divide it into two matching halves.",
      notes: [
        {
          heading: "Repeating patterns",
          points: [
            "A pattern repeats the same unit again and again. In red, blue, red, blue, … the unit is red, blue.",
            "To continue a pattern, find the unit that repeats and carry on with it."
          ]
        },
        {
          heading: "Growing patterns",
          points: [
            "In 2, 4, 6, 8, … each number is 2 more than the one before. The next numbers are 10 and 12.",
            "Rangoli designs and patterns on bangles and tiles often use repeating shapes."
          ]
        },
        {
          heading: "Lines of symmetry",
          points: [
            "A **line of symmetry** divides a shape into two halves that match exactly. If you fold along it, the halves land on each other.",
            "A square has 4 lines of symmetry. A rectangle that is not a square has 2.",
            "A circle has infinitely many lines of symmetry, because every line through its centre divides it into two equal halves."
          ]
        },
        {
          heading: "Symmetry in everyday life",
          points: [
            "Butterfly wings, leaves and rangoli designs are often symmetrical.",
            "Letters like A, H, O, T, U, V, W, X and Y have a vertical line of symmetry."
          ]
        }
      ],
      formulas: [
        "Square: 4 lines of symmetry",
        "Rectangle (not a square): 2 lines of symmetry",
        "Circle: infinitely many lines of symmetry"
      ],
      terms: [
        { term: "Pattern", meaning: "An arrangement that repeats or follows a rule, such as 1, 3, 5, 7, …" },
        { term: "Repeating pattern", meaning: "A pattern made by repeating the same unit again and again." },
        { term: "Symmetry", meaning: "A shape has symmetry when it can be divided into two matching halves." },
        { term: "Line of symmetry", meaning: "The line that divides a shape into two matching halves." }
      ],
      examples: [
        {
          q: "Continue the pattern: triangle, square, triangle, square, …",
          steps: [
            "The unit that repeats is triangle, square.",
            "Next comes triangle, then square, then triangle."
          ],
          answer: "triangle, square, triangle"
        },
        {
          q: "How many lines of symmetry does a rectangle that is not a square have?",
          steps: [
            "Fold along the middle of the length: the two halves match.",
            "Fold along the middle of the breadth: the two halves match.",
            "There are no other such lines."
          ],
          answer: "2 lines of symmetry"
        }
      ],
      qa: [
        { q: "Where is the line of symmetry in the letter A?", a: "A vertical line through the top point of A divides it into two matching halves." },
        { q: "Give one example of symmetry you can see at home or at school.", a: "For example, a pair of matching door panels, or the two halves of a rangoli on the floor." }
      ],
      quiz: [
        {
          q: "What comes next in the pattern red, yellow, red, yellow, …?",
          options: ["red", "yellow", "green", "blue"],
          answer: 0,
          explain: "The unit red, yellow repeats, so the next colour is red."
        },
        {
          q: "How many lines of symmetry does a square have?",
          options: ["1", "2", "4", "8"],
          answer: 2,
          explain: "A square has 4 lines of symmetry: 2 through the middles of opposite sides and 2 through the corners."
        },
        {
          q: "Which letter has a vertical line of symmetry?",
          options: ["F", "G", "A", "R"],
          answer: 2,
          explain: "A vertical line through the middle of A divides it into two matching halves."
        },
        {
          q: "How many lines of symmetry does a circle have?",
          options: ["0", "1", "4", "Infinitely many"],
          answer: 3,
          explain: "Every line through the centre of a circle divides it into two equal halves, so there are infinitely many."
        },
        {
          q: "What is the next number in the pattern 5, 10, 15, 20, …?",
          options: ["21", "25", "30", "24"],
          answer: 1,
          explain: "The pattern adds 5 each time, so the next number is 20 + 5 = 25."
        }
      ]
    },

    // ───────────────────────────── 14. Data Handling ─────────────────────────────
    {
      id: "data-handling",
      title: "Data Handling",
      section: "Data",
      summary: "Data is information we collect. We record it with tally marks and show it in a bar graph, which makes it easy to compare.",
      notes: [
        {
          heading: "Collecting data",
          points: [
            "**Data** is information collected from people or things, such as the favourite fruits of children in a class.",
            "We can record data in a table, or with tally marks."
          ]
        },
        {
          heading: "Tally marks",
          points: [
            "Tally marks are written in groups of five. Four short lines and one line drawn across them make a group of 5.",
            "To count, make one tally mark for each item. Then count the groups of 5 and the leftover marks."
          ]
        },
        {
          heading: "Bar graphs",
          points: [
            "A **bar graph** shows data with bars of equal width. The height of each bar shows the number.",
            "A bar graph has a title, labels for the bars, and a scale on one side that shows the numbers.",
            "Example: In a survey, mango got 8 votes, banana 5, apple 4 and grapes 3. Mango has the tallest bar."
          ]
        },
        {
          heading: "Reading a bar graph",
          points: [
            "The tallest bar shows the most popular item. The shortest bar shows the least popular.",
            "To find how many more, subtract the two numbers. Mango 8 − grapes 3 = 5 more children.",
            "If one square on the scale stands for 2 children, a bar of 4 squares shows 8 children."
          ]
        }
      ],
      formulas: [
        "Total = sum of all the values",
        "Difference = bigger value − smaller value"
      ],
      terms: [
        { term: "Data", meaning: "Information that we collect and record, such as numbers or choices." },
        { term: "Tally marks", meaning: "Marks used to count, with groups of five shown as four lines and one line across them." },
        { term: "Bar graph", meaning: "A graph that shows data using bars whose heights show the numbers." },
        { term: "Scale", meaning: "The numbers marked on a graph that tell how much each part of the graph stands for." }
      ],
      examples: [
        {
          q: "Mango got 8 votes, banana 5, apple 4 and grapes 3. How many children voted in all?",
          steps: [
            "Add all the votes: 8 + 5 + 4 + 3.",
            "8 + 5 = 13, 13 + 4 = 17, 17 + 3 = 20."
          ],
          answer: "20 children"
        },
        {
          q: "How many more children voted for mango than for grapes?",
          steps: [
            "Mango = 8 and grapes = 3.",
            "8 − 3 = 5."
          ],
          answer: "5 more children"
        }
      ],
      qa: [
        { q: "What is the difference between a tally chart and a bar graph?", a: "A tally chart records each item with tally marks. A bar graph shows the same counts as bars, so it is easier to compare at a glance." },
        { q: "In the fruit survey above, which fruit is the least popular? How do you know?", a: "Grapes, because its bar is the shortest, with 3 votes." }
      ],
      quiz: [
        {
          q: "In a bar graph, what does the height of a bar show?",
          options: ["The name of the item", "The number of items", "The colour", "The width"],
          answer: 1,
          explain: "The height of each bar shows how many items there are in that group."
        },
        {
          q: "How are tally marks for 5 written?",
          options: ["Five separate dots", "A single line", "Four lines with one line across them", "A circle"],
          answer: 2,
          explain: "Four short lines with one line drawn across them make a group of 5."
        },
        {
          q: "In a survey, mango got 8 votes and banana got 5. How many more votes did mango get?",
          options: ["13", "8", "3", "5"],
          answer: 2,
          explain: "8 − 5 = 3. Mango got 3 more votes than banana."
        },
        {
          q: "On a bar graph each square stands for 2 children. A bar is 4 squares tall. How many children does it show?",
          options: ["2", "6", "4", "8"],
          answer: 3,
          explain: "4 squares × 2 children = 8 children."
        },
        {
          q: "In a survey of 30 children, 12 like football, 10 like cricket and 8 like kabaddi. How many children are in these three groups together?",
          options: ["30", "28", "20", "32"],
          answer: 0,
          explain: "12 + 10 + 8 = 30."
        }
      ]
    }
  ]
});
