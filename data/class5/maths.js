// Class 5 Mathematics: organised by topic, following the standard CBSE Class 5 syllabus.
// Format: see CONTENT_GUIDE.md
StudyData.add(5, "maths", {
  chapters: [
    // ───────────────────────────── 1. Large Numbers ─────────────────────────────
    {
      id: "large-numbers",
      title: "Large Numbers",
      section: "Numbers",
      summary: "Numbers can be very big. We learn the Indian place value system with lakhs and crores, and the international system with millions, and see how the two are linked.",
      notes: [
        {
          heading: "Place value in the Indian system",
          points: [
            "Starting from the right, the places are ones, tens, hundreds, then **thousands**, **ten thousands**, **lakhs**, **ten lakhs** and **crores**.",
            "The first comma comes after 3 digits from the right. After that, commas come after every **2** digits: 2,35,000 is two lakh thirty-five thousand.",
            "**1 lakh = 1,00,000** (one hundred thousand). **1 crore = 1,00,00,000** (one hundred lakh)."
          ]
        },
        {
          heading: "Place value in the international system",
          points: [
            "The international system groups digits in threes: ones, thousands, **millions**, billions.",
            "**1 million = 1,000,000**, which is the same as **10 lakh**.",
            "So 1 million is ten times as big as 1 lakh."
          ]
        },
        {
          heading: "Reading and comparing large numbers",
          points: [
            "Read a big number from the left, one group at a time. For example, 4,58,79,300 is 4 crore 58 lakh 79 thousand 300.",
            "A number with more digits is bigger. So 10,00,000 is greater than 9,99,999.",
            "Write a number in **expanded form** by adding the value of each digit: 3,45,600 = 3,00,000 + 40,000 + 5,000 + 600."
          ]
        }
      ],
      formulas: [
        "1 lakh = 100 thousand = 1,00,000",
        "1 crore = 100 lakh = 1,00,00,000",
        "1 million = 10 lakh = 10,00,000",
        "Indian commas: first after 3 digits from the right, then after every 2 digits"
      ],
      terms: [
        { term: "Lakh", meaning: "One hundred thousand, written as 1,00,000." },
        { term: "Crore", meaning: "One hundred lakh, written as 1,00,00,000." },
        { term: "Place value", meaning: "The value a digit has because of its position in the number. In 4,70,000 the 7 stands for 70,000." },
        { term: "Expanded form", meaning: "Writing a number as the sum of the values of its digits, such as 3,45,600 = 3,00,000 + 40,000 + 5,000 + 600." }
      ],
      examples: [
        {
          q: "Write 3,45,600 in expanded form.",
          steps: [
            "3 is in the lakh place: 3 lakh = 3,00,000.",
            "4 is in the ten thousand place: 4 ten thousand = 40,000.",
            "5 is in the thousand place: 5,000. 6 is in the hundred place: 600.",
            "Add them: 3,00,000 + 40,000 + 5,000 + 600."
          ],
          answer: "3,00,000 + 40,000 + 5,000 + 600 = 3,45,600"
        },
        {
          q: "How many lakh make 2 crore?",
          steps: [
            "1 crore = 100 lakh.",
            "2 crore = 2 × 100 lakh = 200 lakh."
          ],
          answer: "200 lakh"
        }
      ],
      qa: [
        { q: "Why does the Indian system put the first comma after three digits and then after every two?", a: "The first three digits from the right are ones, tens and hundreds. After that, each place pair (thousands, lakhs, crores) takes **two** digits, so the commas come after every two digits." },
        { q: "Which is bigger: 1 lakh or 1 million? Write both in numerals.", a: "1 lakh = 1,00,000 and 1 million = 10,00,000. So 1 million is bigger, and it is 10 times 1 lakh." }
      ],
      quiz: [
        {
          q: "What is 1 lakh written in numerals?",
          options: ["10,000", "1,00,000", "1,000", "10,00,000"],
          answer: 1,
          explain: "1 lakh is one hundred thousand, which is written as 1,00,000."
        },
        {
          q: "Which number is 5 lakh 25 thousand?",
          options: ["5,25,000", "52,500", "5,02,500", "5,52,000"],
          answer: 0,
          explain: "5 lakh = 5,00,000 and 25 thousand = 25,000. Together they make 5,25,000."
        },
        {
          q: "How many lakh make 1 crore?",
          options: ["10", "100", "1000", "50"],
          answer: 1,
          explain: "1 crore = 100 lakh, which is 1,00,00,000."
        },
        {
          q: "In the number 4,70,000, what is the place value of the digit 7?",
          options: ["7", "70", "7,000", "70,000"],
          answer: 3,
          explain: "The 7 is in the ten thousand place, so its value is 7 × 10,000 = 70,000."
        },
        {
          q: "Which is the correct way to write two crore in numerals?",
          options: ["2,00,000", "20,00,000", "2,00,00,000", "20,00,00,000"],
          answer: 2,
          explain: "2 crore = 2 × 1,00,00,000 = 2,00,00,000. (20,00,000 is 20 lakh.)"
        }
      ]
    },

    // ───────────────────────────── 2. Operations on Large Numbers ─────────────────────────────
    {
      id: "operations-on-large-numbers",
      title: "Operations on Large Numbers",
      section: "Operations",
      summary: "We add, subtract, multiply and divide big numbers using the same steps as small numbers, keeping the digits of the same place value in the same column.",
      notes: [
        {
          heading: "Addition and subtraction",
          points: [
            "Write the numbers one below the other so that **ones are under ones, tens under tens**, and so on.",
            "Add column by column from the right. If a column gives 10 or more, write the last digit and **carry** 1 to the next column.",
            "Example: 1,25,000 + 48,750 = 1,73,750. For subtraction, 5,00,000 − 2,34,678 = 2,65,322."
          ]
        },
        {
          heading: "Multiplication",
          points: [
            "Multiply by each digit of the second number, then add the results. For example, 245 × 36 = 7,350 + 1,470 = 8,820.",
            "Multiplying by 10 or 100 adds zeros: 7,250 × 100 = 7,25,000."
          ]
        },
        {
          heading: "Division and word problems",
          points: [
            "Division is sharing equally or making equal groups. For example, 3,600 ÷ 12 = 300, because 12 × 300 = 3,600.",
            "To estimate, round each number to the nearest thousand first. 47,826 is about 48,000."
          ]
        }
      ],
      formulas: [
        "Total = number of groups × number in each group",
        "Check a division: divisor × quotient = dividend",
        "Round to the nearest thousand: 47,826 ≈ 48,000"
      ],
      terms: [
        { term: "Estimation", meaning: "Finding a quick, approximate answer by rounding numbers first." },
        { term: "Carry", meaning: "Moving 1 to the next place to the left when a column adds up to 10 or more." },
        { term: "Borrow", meaning: "Taking 1 from the next place to the left when a digit is too small to subtract." },
        { term: "Quotient", meaning: "The answer to a division. In 3,600 ÷ 12 = 300, the quotient is 300." }
      ],
      examples: [
        {
          q: "A factory makes 36,750 bulbs in one week. How many bulbs will it make in 12 weeks at the same rate?",
          steps: [
            "Multiply the bulbs per week by 12: 36,750 × 12.",
            "36,750 × 10 = 3,67,500.",
            "36,750 × 2 = 73,500.",
            "3,67,500 + 73,500 = 4,41,000."
          ],
          answer: "4,41,000 bulbs"
        },
        {
          q: "Share ₹8,40,000 equally among 15 schools.",
          steps: [
            "Divide by 3 first: 8,40,000 ÷ 3 = 2,80,000.",
            "Then divide by 5: 2,80,000 ÷ 5 = 56,000.",
            "Check: 15 × 56,000 = 8,40,000."
          ],
          answer: "₹56,000 for each school"
        }
      ],
      qa: [
        { q: "Add 2,85,000 and 1,96,500 and show the carry.", a: "Adding column by column gives 4,81,500. The carries come from the hundreds and thousands columns, where the digits add up to 10 or more." },
        { q: "What is 7,250 × 100? Why does it get so many zeros?", a: "7,250 × 100 = 7,25,000. Multiplying by 100 moves every digit **two places** to the left, so each digit gets a bigger place value. Two zeros are added to the end." }
      ],
      quiz: [
        {
          q: "What is 2,50,000 + 1,75,000?",
          options: ["4,25,000", "4,15,000", "3,25,000", "4,35,000"],
          answer: 0,
          explain: "2,50,000 + 1,75,000 = 4,25,000."
        },
        {
          q: "What is 6,00,000 − 2,45,000?",
          options: ["3,45,000", "3,65,000", "3,55,000", "4,45,000"],
          answer: 2,
          explain: "6,00,000 − 2,45,000 = 3,55,000. Check: 3,55,000 + 2,45,000 = 6,00,000."
        },
        {
          q: "What is 1,200 × 25?",
          options: ["24,000", "30,000", "3,000", "2,400"],
          answer: 1,
          explain: "1,200 × 25 = 1,200 × 20 + 1,200 × 5 = 24,000 + 6,000 = 30,000."
        },
        {
          q: "What is 9,60,000 ÷ 8?",
          options: ["12,000", "1,02,000", "1,20,000", "1,20,500"],
          answer: 2,
          explain: "9,60,000 ÷ 8 = 1,20,000, because 8 × 1,20,000 = 9,60,000."
        },
        {
          q: "A school has 36 classes with 42 students in each class. How many students are there in all?",
          options: ["1,412", "1,572", "2,052", "1,512"],
          answer: 3,
          explain: "36 × 42 = 36 × 40 + 36 × 2 = 1,440 + 72 = 1,512."
        }
      ]
    },

    // ───────────────────────────── 3. Factors and Multiples ─────────────────────────────
    {
      id: "factors-and-multiples",
      title: "Factors and Multiples",
      section: "Numbers",
      summary: "A factor divides a number exactly, and a multiple is a number's table. We learn to find the HCF and LCM of two numbers and use simple tests to check divisibility.",
      notes: [
        {
          heading: "Factors and multiples",
          points: [
            "A **factor** divides a number exactly, with no remainder. The factors of 12 are 1, 2, 3, 4, 6 and 12.",
            "A **multiple** is what you get by multiplying a number by 1, 2, 3, and so on. The first five multiples of 5 are 5, 10, 15, 20 and 25."
          ]
        },
        {
          heading: "HCF and LCM",
          points: [
            "The **HCF** (Highest Common Factor) is the biggest factor that two numbers share. Factors of 8 are 1, 2, 4, 8 and factors of 12 are 1, 2, 3, 4, 6, 12, so the HCF is 4.",
            "The **LCM** (Lowest Common Multiple) is the smallest multiple that two numbers share. Multiples of 4 are 4, 8, 12, 16 and multiples of 6 are 6, 12, 18, so the LCM is 12."
          ]
        },
        {
          heading: "Prime numbers and divisibility tests",
          points: [
            "A **prime number** has exactly two factors: 1 and itself. Examples are 2, 3, 5, 7 and 11.",
            "A number is divisible by 2 if its last digit is even, and by 5 if its last digit is 0 or 5.",
            "A number is divisible by 3 if the sum of its digits is divisible by 3. For example, 2,316: 2 + 3 + 1 + 6 = 12, so it is divisible by 3."
          ]
        }
      ],
      formulas: [
        "A factor divides the number exactly, leaving no remainder",
        "Divisible by 2: the last digit is 0, 2, 4, 6 or 8",
        "Divisible by 3: the sum of the digits is divisible by 3",
        "Divisible by 4: the last two digits form a number divisible by 4"
      ],
      terms: [
        { term: "Factor", meaning: "A number that divides another number exactly. 4 is a factor of 20." },
        { term: "Multiple", meaning: "A number obtained by multiplying a given number by 1, 2, 3, and so on. 3, 6, 9 and 12 are multiples of 3." },
        { term: "HCF", meaning: "Highest Common Factor: the biggest number that divides two numbers exactly." },
        { term: "LCM", meaning: "Lowest Common Multiple: the smallest number that is a multiple of two numbers." },
        { term: "Prime number", meaning: "A number with exactly two factors, 1 and itself, such as 2, 3, 5 and 7." }
      ],
      examples: [
        {
          q: "Find the HCF and LCM of 8 and 12.",
          steps: [
            "Factors of 8: 1, 2, 4, 8. Factors of 12: 1, 2, 3, 4, 6, 12.",
            "Common factors: 1, 2, 4. The highest is 4, so HCF = 4.",
            "Multiples of 8: 8, 16, 24. Multiples of 12: 12, 24.",
            "The smallest common multiple is 24, so LCM = 24."
          ],
          answer: "HCF = 4 and LCM = 24"
        },
        {
          q: "Is 2,316 divisible by 3? Is it divisible by 4?",
          steps: [
            "Divisible by 3: 2 + 3 + 1 + 6 = 12, and 12 is divisible by 3. So yes.",
            "Divisible by 4: the last two digits are 16, and 16 ÷ 4 = 4. So yes."
          ],
          answer: "Yes, it is divisible by both 3 and 4"
        }
      ],
      qa: [
        { q: "Why is 1 a factor of every number?", a: "Every number can be written as 1 × (the number), so 1 divides every number exactly with no remainder. For example, 1 × 7 = 7." },
        { q: "Find the LCM of 6 and 9 and explain how you found it.", a: "Multiples of 6 are 6, 12, 18, 24. Multiples of 9 are 9, 18, 27. The smallest common multiple is 18, so LCM = 18." }
      ],
      quiz: [
        {
          q: "Which of these is a factor of 20?",
          options: ["6", "8", "3", "5"],
          answer: 3,
          explain: "20 ÷ 5 = 4 exactly, so 5 is a factor. 6, 8 and 3 do not divide 20 exactly."
        },
        {
          q: "Which list shows the first five multiples of 7?",
          options: ["7, 14, 21, 28, 35", "1, 7, 14, 21, 28", "7, 8, 9, 10, 11", "14, 21, 28, 35, 42"],
          answer: 0,
          explain: "Multiples of 7 are 7 × 1, 7 × 2, 7 × 3, 7 × 4 and 7 × 5, which are 7, 14, 21, 28 and 35."
        },
        {
          q: "What is the HCF of 12 and 16?",
          options: ["2", "8", "4", "6"],
          answer: 2,
          explain: "Common factors of 12 and 16 are 1, 2 and 4. The highest is 4."
        },
        {
          q: "What is the LCM of 4 and 5?",
          options: ["9", "10", "40", "20"],
          answer: 3,
          explain: "Multiples of 4 are 4, 8, 12, 16, 20. Multiples of 5 are 5, 10, 15, 20. The smallest common one is 20."
        },
        {
          q: "Which number is exactly divisible by 3?",
          options: ["1,004", "3,012", "2,011", "3,013"],
          answer: 1,
          explain: "3 + 0 + 1 + 2 = 6, which is divisible by 3. The other numbers have digit sums 5, 4 and 7."
        }
      ]
    },

    // ───────────────────────────── 4. Fractions ─────────────────────────────
    {
      id: "fractions",
      title: "Fractions",
      section: "Fractions",
      summary: "We add and subtract fractions. Fractions with the same denominator are easy, and fractions with different denominators are made alike first.",
      notes: [
        {
          heading: "Like and unlike fractions",
          points: [
            "A fraction has a **numerator** (top number) and a **denominator** (bottom number). In 3/8, the numerator is 3 and the denominator is 8.",
            "**Like fractions** have the same denominator, such as 3/8 and 5/8. **Unlike fractions** have different denominators, such as 1/2 and 1/3."
          ]
        },
        {
          heading: "Adding and subtracting like fractions",
          points: [
            "For like fractions, add or subtract the numerators and keep the denominator the same.",
            "Example: 2/7 + 3/7 = 5/7, and 3/4 − 1/4 = 2/4 = 1/2.",
            "Mixed numbers work the same way: 2 1/4 + 1 1/4 = 3 1/2."
          ]
        },
        {
          heading: "Adding and subtracting unlike fractions",
          points: [
            "First make the denominators the same by finding a common denominator, such as the LCM of the denominators.",
            "Example: 1/2 + 1/3. The common denominator is 6, so 3/6 + 2/6 = 5/6.",
            "Subtract the same way: 5/6 − 1/2 = 5/6 − 3/6 = 2/6 = 1/3."
          ]
        }
      ],
      formulas: [
        "Like fractions: a/c + b/c = (a + b)/c",
        "Like fractions: a/c − b/c = (a − b)/c",
        "Unlike fractions: first make the denominators equal, then add or subtract"
      ],
      terms: [
        { term: "Numerator", meaning: "The top number of a fraction. It tells how many parts we have." },
        { term: "Denominator", meaning: "The bottom number of a fraction. It tells how many equal parts the whole is divided into." },
        { term: "Like fractions", meaning: "Fractions with the same denominator, such as 2/9 and 5/9." },
        { term: "Unlike fractions", meaning: "Fractions with different denominators, such as 1/2 and 1/4." },
        { term: "Equivalent fractions", meaning: "Fractions that have the same value, such as 1/2 = 2/4 = 3/6." }
      ],
      examples: [
        {
          q: "Add 1/3 + 1/4.",
          steps: [
            "The denominators are 3 and 4. Their LCM is 12, so use 12 as the common denominator.",
            "1/3 = 4/12 and 1/4 = 3/12.",
            "4/12 + 3/12 = 7/12."
          ],
          answer: "7/12"
        },
        {
          q: "Ria ate 3/8 of a pizza and Sam ate 1/4 of the same pizza. How much did they eat together?",
          steps: [
            "Make the denominators the same: 1/4 = 2/8.",
            "Add: 3/8 + 2/8 = 5/8."
          ],
          answer: "5/8 of the pizza"
        }
      ],
      qa: [
        { q: "Why can we add 2/5 + 1/5 directly but not 2/5 + 1/3?", a: "In 2/5 + 1/5 both fractions count pieces of the same size (fifths), so we can add the numerators. Fifths and thirds are different sizes, so first make the denominators equal." },
        { q: "Subtract 1/3 from 5/6.", a: "Make the denominators equal: 1/3 = 2/6. Then 5/6 − 2/6 = 3/6 = 1/2." }
      ],
      quiz: [
        {
          q: "What is 3/9 + 4/9?",
          options: ["7/18", "7/9", "1/9", "12/9"],
          answer: 1,
          explain: "These are like fractions, so add the numerators: 3 + 4 = 7. The answer is 7/9."
        },
        {
          q: "What is 1/2 + 1/4?",
          options: ["2/6", "2/4", "3/4", "1/6"],
          answer: 2,
          explain: "1/2 = 2/4, so 2/4 + 1/4 = 3/4."
        },
        {
          q: "What is 5/6 − 1/2?",
          options: ["1/2", "1/3", "1/4", "2/3"],
          answer: 1,
          explain: "1/2 = 3/6, so 5/6 − 3/6 = 2/6 = 1/3."
        },
        {
          q: "Which fraction is equal to 2/3?",
          options: ["2/6", "3/4", "4/6", "4/3"],
          answer: 2,
          explain: "Multiply the top and bottom of 2/3 by 2 to get 4/6. The two fractions have the same value."
        },
        {
          q: "Meena drank 2/5 of a jug of juice in the morning and 1/5 of it in the evening. What fraction did she drink in all?",
          options: ["3/10", "1/5", "3/5", "4/5"],
          answer: 2,
          explain: "2/5 + 1/5 = 3/5 of the jug."
        }
      ]
    },

    // ───────────────────────────── 5. Decimals ─────────────────────────────
    {
      id: "decimals",
      title: "Decimals",
      section: "Decimals",
      summary: "Decimals help us write parts of a whole, like 4.5 or ₹25.75. We learn their place value and how to add, subtract and compare them.",
      notes: [
        {
          heading: "Place value of decimals",
          points: [
            "The **decimal point** separates the whole number from the part smaller than 1.",
            "In 3.46, the digit 4 is in the **tenths** place (4/10) and the digit 6 is in the **hundredths** place (6/100).",
            "Money uses decimals too: ₹25.75 means 25 rupees and 75 paise, because ₹1 = 100 paise."
          ]
        },
        {
          heading: "Adding and subtracting decimals",
          points: [
            "Line up the decimal points one below the other, then add or subtract as with whole numbers.",
            "Example: 12.5 + 3.75 = 16.25. Write 12.5 as 12.50 to line up the digits.",
            "Example: 8.4 − 2.65 = 5.75, since 8.40 − 2.65 = 5.75."
          ]
        },
        {
          heading: "Comparing decimals",
          points: [
            "To compare decimals, first make the number of decimal places the same. 0.7 is 0.70, and 0.70 is bigger than 0.65.",
            "So 0.7 is greater than 0.65."
          ]
        }
      ],
      formulas: [
        "1 tenth = 0.1 = 1/10;  1 hundredth = 0.01 = 1/100",
        "₹1 = 100 paise, so 50 paise = ₹0.50",
        "Before adding or subtracting, line up the decimal points"
      ],
      terms: [
        { term: "Decimal point", meaning: "The dot that separates the whole-number part from the part less than 1, as in 4.6." },
        { term: "Tenths", meaning: "Parts of a whole when it is divided into 10 equal parts. 0.3 is three tenths." },
        { term: "Hundredths", meaning: "Parts of a whole when it is divided into 100 equal parts. 0.05 is five hundredths." },
        { term: "Paise", meaning: "The smaller unit of money. 100 paise make ₹1." }
      ],
      examples: [
        {
          q: "Add 4.6 and 2.85.",
          steps: [
            "Write 4.6 as 4.60 so both numbers have two decimal places.",
            "Line up the decimal points: 4.60 + 2.85.",
            "Add: 4.60 + 2.85 = 7.45."
          ],
          answer: "7.45"
        },
        {
          q: "Ramesh had ₹50.00 and spent ₹32.75 on a notebook. How much money is left?",
          steps: [
            "Subtract: 50.00 − 32.75.",
            "Borrow across the columns to get 17.25.",
            "Check: 32.75 + 17.25 = 50.00."
          ],
          answer: "₹17.25"
        }
      ],
      qa: [
        { q: "Why do we write a 0 after 4.6 when we add 4.6 + 2.85?", a: "Writing 4.6 as 4.60 gives both numbers two digits after the decimal point, so the tenths and hundredths line up in the same columns." },
        { q: "Which is larger, 0.305 or 0.35?", a: "Write both with three decimal places: 0.350 and 0.305. Since 350 is more than 305, 0.35 is larger." }
      ],
      quiz: [
        {
          q: "In 5.47, what is the digit in the hundredths place?",
          options: ["4", "5", "7", "47"],
          answer: 2,
          explain: "In 5.47, the 4 is in the tenths place and the 7 is in the hundredths place."
        },
        {
          q: "What is 3.5 + 1.25?",
          options: ["4.50", "4.25", "5.75", "4.75"],
          answer: 3,
          explain: "3.50 + 1.25 = 4.75."
        },
        {
          q: "What is 9.2 − 4.75?",
          options: ["4.55", "5.45", "4.45", "5.55"],
          answer: 2,
          explain: "9.20 − 4.75 = 4.45. Check: 4.45 + 4.75 = 9.20."
        },
        {
          q: "Which decimal is the same as 25 paise?",
          options: ["2.5", "0.25", "0.025", "25.0"],
          answer: 1,
          explain: "25 paise is one-fourth of ₹1, which is ₹0.25."
        },
        {
          q: "Which of these is the largest decimal?",
          options: ["0.45", "0.4", "0.04", "0.405"],
          answer: 0,
          explain: "Write them with three decimal places: 0.450, 0.400, 0.040, 0.405. The largest is 0.450, which is 0.45."
        }
      ]
    },

    // ───────────────────────────── 6. Percentage ─────────────────────────────
    {
      id: "percentage",
      title: "Percentage",
      section: "Percentage",
      summary: "Percent means out of 100. We see how percentages link to fractions and decimals, and use them to find discounts and marks in everyday life.",
      notes: [
        {
          heading: "What is a percent?",
          points: [
            "**Percent** means **per hundred**, or out of 100. It is written with the sign %.",
            "25% means 25 out of 100, which is the fraction 25/100 = 1/4.",
            "Some common ones: 50% is half, 25% is a quarter, and 75% is three quarters."
          ]
        },
        {
          heading: "Writing a fraction as a percent",
          points: [
            "To change a fraction to a percent, make its denominator 100.",
            "Example: 3 out of 10 is 3/10 = 30/100, which is 30%.",
            "Example: 1/2 = 50/100, which is 50%."
          ]
        },
        {
          heading: "Finding a percent of a quantity",
          points: [
            "Percent of a quantity = (percent ÷ 100) × quantity.",
            "Example: 10% of ₹500 is ₹50. Discounts in shops use the same idea."
          ]
        }
      ],
      formulas: [
        "Percent means out of 100: 25% = 25/100",
        "Percentage of a quantity = (percent ÷ 100) × quantity",
        "Percentage = (part ÷ whole) × 100"
      ],
      terms: [
        { term: "Percent", meaning: "Out of every 100. The symbol is %." },
        { term: "Percentage", meaning: "A number written as a part of 100, such as 40%." },
        { term: "Discount", meaning: "An amount taken off the price of an item, often shown as a percent." },
        { term: "Fraction", meaning: "A way of showing a part of a whole, such as 1/4 or 3/10." }
      ],
      examples: [
        {
          q: "Find 20% of ₹250.",
          steps: [
            "20% = 20/100 = 1/5.",
            "1/5 of 250 = 250 ÷ 5 = 50."
          ],
          answer: "₹50"
        },
        {
          q: "Meena got 42 out of 60 marks in a test. What is her percentage?",
          steps: [
            "Write the fraction: 42/60.",
            "Make the denominator 100: 42/60 = 70/100.",
            "So she got 70 out of every 100 marks."
          ],
          answer: "70%"
        }
      ],
      qa: [
        { q: "What does 40% mean?", a: "It means 40 out of every 100, or 40/100. This is the same as 2/5." },
        { q: "A shop gives 10% off on a bag priced at ₹800. How much discount is given?", a: "10% of 800 = 800 ÷ 10 = ₹80. The discount is ₹80." }
      ],
      quiz: [
        {
          q: "What is 50% of 80?",
          options: ["8", "50", "40", "160"],
          answer: 2,
          explain: "50% is half, and half of 80 is 40."
        },
        {
          q: "25% is the same as:",
          options: ["1/2", "1/4", "1/5", "2/5"],
          answer: 1,
          explain: "25% = 25/100 = 1/4."
        },
        {
          q: "What is 10% of ₹300?",
          options: ["₹3", "₹30", "₹33", "₹300"],
          answer: 1,
          explain: "10% is one-tenth, and 300 ÷ 10 = 30."
        },
        {
          q: "Out of 200 students, 150 passed. What percent of students passed?",
          options: ["75%", "50%", "15%", "70%"],
          answer: 0,
          explain: "150/200 = 75/100, so 75% of the students passed."
        },
        {
          q: "What is 20% of 50?",
          options: ["5", "10", "15", "25"],
          answer: 1,
          explain: "20% of 50 = 50 ÷ 5 = 10."
        }
      ]
    },

    // ───────────────────────────── 7. Angles and Their Measurement ─────────────────────────────
    {
      id: "angles",
      title: "Angles and Their Measurement",
      section: "Shapes",
      summary: "An angle is the opening between two arms that meet at a point. We measure angles in degrees with a protractor, and learn the main types of angles.",
      notes: [
        {
          heading: "What is an angle?",
          points: [
            "An **angle** is formed when two arms (rays) meet at a point. The meeting point is called the **vertex**.",
            "Angles are measured in **degrees**, written with the symbol °, using a tool called a **protractor**."
          ]
        },
        {
          heading: "Types of angles",
          points: [
            "An **acute angle** is less than 90°. An example is 30°.",
            "A **right angle** is exactly 90°. The corner of a notebook or a door frame makes a right angle.",
            "An **obtuse angle** is more than 90° but less than 180°, such as 135°.",
            "A **straight angle** is 180°, and a **reflex angle** is more than 180°. A full turn is 360°."
          ]
        },
        {
          heading: "Using a protractor",
          points: [
            "Place the centre of the protractor on the vertex, and line up one arm with the 0 mark on the base.",
            "Read the number where the other arm crosses the scale."
          ]
        }
      ],
      formulas: [
        "Right angle = 90°;  straight angle = 180°;  full turn = 360°",
        "Angles on a straight line add up to 180°",
        "Angles around a point add up to 360°"
      ],
      terms: [
        { term: "Angle", meaning: "The amount of turn between two arms that meet at a point." },
        { term: "Vertex", meaning: "The point where the two arms of an angle meet." },
        { term: "Arm", meaning: "One of the two straight lines that form an angle." },
        { term: "Degree (°)", meaning: "The unit used to measure angles. A full turn is 360°." },
        { term: "Protractor", meaning: "A half-circle tool with a scale from 0° to 180°, used to measure angles." }
      ],
      examples: [
        {
          q: "Two angles lie on a straight line. One is 65° and the other is x. Find x.",
          steps: [
            "Angles on a straight line add up to 180°.",
            "65° + x = 180°.",
            "x = 180° − 65° = 115°."
          ],
          answer: "x = 115°"
        },
        {
          q: "Three angles around a point are 90°, 120° and x. Find x.",
          steps: [
            "Angles around a point add up to 360°.",
            "90° + 120° = 210°.",
            "x = 360° − 210° = 150°."
          ],
          answer: "x = 150°"
        }
      ],
      qa: [
        { q: "Name the type of each angle: 30°, 90°, 145° and 200°.", a: "30° is acute, 90° is right, 145° is obtuse, and 200° is a reflex angle (more than 180°)." },
        { q: "Why must the centre of the protractor be placed on the vertex?", a: "The centre of the protractor must be at the vertex so that the arms of the angle start from the centre. Then the scale reads the angle correctly from the 0 mark." }
      ],
      quiz: [
        {
          q: "An angle of 90° is called a:",
          options: ["Acute angle", "Obtuse angle", "Right angle", "Reflex angle"],
          answer: 2,
          explain: "An angle of exactly 90° is a right angle."
        },
        {
          q: "An angle of 135° is a:",
          options: ["Acute angle", "Obtuse angle", "Right angle", "Straight angle"],
          answer: 1,
          explain: "135° is more than 90° but less than 180°, so it is an obtuse angle."
        },
        {
          q: "Two angles on a straight line are 70° and x. What is x?",
          options: ["100°", "110°", "290°", "20°"],
          answer: 1,
          explain: "70° + x = 180°, so x = 110°."
        },
        {
          q: "Three angles around a point are 100°, 120° and 90°. What is the fourth angle?",
          options: ["40°", "50°", "60°", "70°"],
          answer: 1,
          explain: "100° + 120° + 90° = 310°, and 360° − 310° = 50°."
        },
        {
          q: "Which of these is a reflex angle?",
          options: ["45°", "90°", "180°", "250°"],
          answer: 3,
          explain: "A reflex angle is more than 180° and less than 360°. Only 250° fits."
        }
      ]
    },

    // ───────────────────────────── 8. Shapes and Nets ─────────────────────────────
    {
      id: "shapes-and-nets",
      title: "Shapes and Nets",
      section: "Shapes",
      summary: "Solid shapes like cubes, cuboids, cylinders and cones have faces, edges and vertices. A net is a flat pattern that folds up to make a solid shape.",
      notes: [
        {
          heading: "Common 3-D shapes",
          points: [
            "A **cube** has 6 square faces, all the same size. A dice is shaped like a cube.",
            "A **cuboid** has 6 rectangular faces. A matchbox is shaped like a cuboid.",
            "A **cylinder** has 2 flat circular faces and 1 curved surface. A tin of oil is shaped like a cylinder.",
            "A **cone** has a circular base and a pointed top. An ice-cream cone is shaped like a cone.",
            "A **sphere** is perfectly round, like a ball, and has no edges or corners."
          ]
        },
        {
          heading: "Faces, edges and vertices",
          points: [
            "A **face** is a flat surface of a solid. An **edge** is where two faces meet. A **vertex** is a corner.",
            "A cube has 6 faces, 12 edges and 8 vertices.",
            "A cuboid also has 6 faces, 12 edges and 8 vertices. Its faces are rectangles, and opposite faces are equal."
          ]
        },
        {
          heading: "Nets",
          points: [
            "A **net** is a flat pattern that can be folded to make a 3-D shape.",
            "A cube's net is made of 6 squares joined together, such as in a cross shape.",
            "Opening a cardboard box flat gives its net."
          ]
        }
      ],
      formulas: [
        "Cube: 6 faces, 12 edges, 8 vertices",
        "Cuboid: 6 faces (opposite faces equal), 12 edges, 8 vertices",
        "Faces are flat surfaces; edges join two faces; vertices are corners"
      ],
      terms: [
        { term: "Face", meaning: "A flat surface of a solid shape." },
        { term: "Edge", meaning: "The line where two faces of a solid meet." },
        { term: "Vertex", meaning: "A corner of a solid shape. The plural is vertices." },
        { term: "Net", meaning: "A flat pattern that folds up to make a solid shape." },
        { term: "3-D shape", meaning: "A solid shape with length, breadth and height, such as a cube or a cylinder." }
      ],
      examples: [
        {
          q: "How many faces, edges and vertices does a cube have?",
          steps: [
            "Count the flat faces: there are 6 square faces, one on each side.",
            "Count the edges: each face has 4 edges, and each edge is shared by 2 faces. So there are 6 × 4 ÷ 2 = 12 edges.",
            "Count the corners: there are 8 vertices."
          ],
          answer: "6 faces, 12 edges and 8 vertices"
        }
      ],
      qa: [
        { q: "How is a cube different from a cuboid?", a: "All 6 faces of a cube are squares, while a cuboid has 6 rectangular faces. A cube has all its edges equal in length." },
        { q: "Name a real object shaped like a cylinder and say how many curved faces it has.", a: "A tin of oil or a glass is shaped like a cylinder. It has 1 curved surface and 2 flat circular faces." }
      ],
      quiz: [
        {
          q: "How many edges does a cube have?",
          options: ["6", "8", "12", "9"],
          answer: 2,
          explain: "A cube has 12 edges: 4 on top, 4 on the bottom and 4 going up."
        },
        {
          q: "Which 3-D shape has 6 square faces and 8 corners?",
          options: ["Cuboid", "Cube", "Cylinder", "Sphere"],
          answer: 1,
          explain: "A cube has 6 square faces and 8 corners. A cuboid's faces are rectangles."
        },
        {
          q: "A cricket ball is shaped like a:",
          options: ["Cube", "Cylinder", "Cone", "Sphere"],
          answer: 3,
          explain: "A cricket ball is round on all sides, like a sphere."
        },
        {
          q: "A matchbox is shaped like a:",
          options: ["Cuboid", "Cone", "Sphere", "Cylinder"],
          answer: 0,
          explain: "A matchbox has rectangular faces, so it is a cuboid."
        },
        {
          q: "Which word means a flat pattern that folds up to make a box?",
          options: ["Vertex", "Net", "Edge", "Face"],
          answer: 1,
          explain: "A net is a flat pattern that can be folded into a 3-D shape."
        }
      ]
    },

    // ───────────────────────────── 9. Perimeter and Area ─────────────────────────────
    {
      id: "perimeter-and-area",
      title: "Perimeter and Area",
      section: "Measurement",
      summary: "Perimeter is the distance all the way around a shape. Area is the space inside it. We learn formulas for rectangles and squares.",
      notes: [
        {
          heading: "Perimeter",
          points: [
            "The **perimeter** is the total length of the boundary of a shape. For example, the fence around a garden.",
            "Perimeter of a rectangle = 2 × (length + breadth).",
            "Perimeter of a square = 4 × side."
          ]
        },
        {
          heading: "Area",
          points: [
            "The **area** is the amount of surface a shape covers. For example, the floor of a room or a rangoli.",
            "Area of a rectangle = length × breadth. Area of a square = side × side.",
            "Area is measured in **square units**, such as cm² (square centimetres) or m² (square metres)."
          ]
        },
        {
          heading: "Understanding square units",
          points: [
            "A square with sides of 1 cm has an area of 1 cm². We count how many such squares fit inside a shape.",
            "A square with sides of 1 m has an area of 1 m². A room floor is measured in m²."
          ]
        }
      ],
      formulas: [
        "Perimeter of rectangle = 2 × (length + breadth)",
        "Area of rectangle = length × breadth",
        "Perimeter of square = 4 × side",
        "Area of square = side × side"
      ],
      terms: [
        { term: "Perimeter", meaning: "The total distance around the outside of a shape." },
        { term: "Area", meaning: "The amount of surface inside a shape, measured in square units." },
        { term: "Breadth", meaning: "The shorter side of a rectangle, also called its width." },
        { term: "Square centimetre (cm²)", meaning: "The area of a square whose sides are each 1 cm long." }
      ],
      examples: [
        {
          q: "A rectangular garden is 12 m long and 8 m wide. Find its perimeter and its area.",
          steps: [
            "Perimeter = 2 × (12 + 8) = 2 × 20 = 40 m.",
            "Area = 12 × 8 = 96 m²."
          ],
          answer: "Perimeter = 40 m and area = 96 m²"
        },
        {
          q: "A square handkerchief has a side of 30 cm. How much lace is needed to go around its edge?",
          steps: [
            "Lace needed = perimeter of the square.",
            "Perimeter = 4 × 30 = 120 cm."
          ],
          answer: "120 cm of lace"
        }
      ],
      qa: [
        { q: "Why is the unit of area square metre (m²) and not just metre?", a: "Area counts how many 1 m by 1 m squares fit inside a shape. Since it is a count of squares, the unit is square metre." },
        { q: "What is the perimeter of a rectangle 10 cm long and 4 cm wide?", a: "Perimeter = 2 × (10 + 4) = 2 × 14 = 28 cm." }
      ],
      quiz: [
        {
          q: "What is the perimeter of a rectangle 10 cm long and 4 cm wide?",
          options: ["40 cm", "14 cm", "28 cm", "24 cm"],
          answer: 2,
          explain: "Perimeter = 2 × (10 + 4) = 28 cm."
        },
        {
          q: "What is the area of a square with side 7 cm?",
          options: ["28 cm²", "49 cm²", "14 cm²", "7 cm²"],
          answer: 1,
          explain: "Area = side × side = 7 × 7 = 49 cm²."
        },
        {
          q: "What is the area of a rectangle 9 m long and 5 m wide?",
          options: ["28 m²", "14 m²", "45 m²", "90 m²"],
          answer: 2,
          explain: "Area = 9 × 5 = 45 m²."
        },
        {
          q: "What is the perimeter of a square with side 6 cm?",
          options: ["12 cm", "24 cm", "18 cm", "36 cm"],
          answer: 1,
          explain: "Perimeter = 4 × 6 = 24 cm."
        },
        {
          q: "Which unit is used to measure area?",
          options: ["cm", "metre", "kilogram", "square cm (cm²)"],
          answer: 3,
          explain: "Area is measured in square units, such as cm². Centimetre measures length, not area."
        }
      ]
    },

    // ───────────────────────────── 10. Volume ─────────────────────────────
    {
      id: "volume",
      title: "Volume",
      section: "Measurement",
      summary: "Volume is the space a solid object takes up. We find it by counting unit cubes, and learn the formulas for cubes and cuboids.",
      notes: [
        {
          heading: "What is volume?",
          points: [
            "The **volume** of a solid is the space it takes up. It is measured in **cubic units**, such as cm³.",
            "A cube of side 1 cm is a **cubic centimetre** (1 cm³). Volume is the number of such unit cubes that fill the solid."
          ]
        },
        {
          heading: "Counting cubes",
          points: [
            "Think of a box made of small 1 cm cubes. If each layer has 3 rows of 4 cubes, one layer has 3 × 4 = 12 cubes.",
            "If the box has 2 layers, the total is 2 × 12 = 24 cubes, so its volume is 24 cm³."
          ]
        },
        {
          heading: "Volume formulas",
          points: [
            "Volume of a cuboid = length × breadth × height.",
            "Volume of a cube = side × side × side. A cube of side 3 cm has 3 × 3 × 3 = 27 small cubes."
          ]
        }
      ],
      formulas: [
        "Volume of cuboid = length × breadth × height",
        "Volume of cube = side × side × side",
        "Unit of volume = cubic unit, such as cm³"
      ],
      terms: [
        { term: "Volume", meaning: "The amount of space a solid object takes up, measured in cubic units." },
        { term: "Cubic unit", meaning: "A cube with sides of 1 unit, used to measure volume. A cubic centimetre is written cm³." },
        { term: "Layer", meaning: "A flat row of cubes stacked on top of another row in a solid." },
        { term: "Cube", meaning: "A solid with 6 equal square faces. All its edges are the same length." }
      ],
      examples: [
        {
          q: "A box is made of 1 cm cubes. It is 4 cubes long, 3 cubes wide and 2 cubes high. What is its volume?",
          steps: [
            "Volume of a cuboid = length × breadth × height.",
            "Volume = 4 × 3 × 2 = 24.",
            "There are 24 cubes, so the volume is 24 cm³."
          ],
          answer: "24 cm³"
        },
        {
          q: "Find the volume of a cube with side 5 cm.",
          steps: [
            "Volume = side × side × side.",
            "Volume = 5 × 5 × 5 = 125."
          ],
          answer: "125 cm³"
        }
      ],
      qa: [
        { q: "How is volume different from area?", a: "Area is the flat surface a shape covers, measured in cm². Volume is the space a solid takes up, measured in cm³." },
        { q: "Why is the unit of volume cm³ and not cm²?", a: "Volume multiplies three lengths: cm × cm × cm = cm³. Area multiplies only two lengths, so its unit is cm²." }
      ],
      quiz: [
        {
          q: "What is the volume of a cube with side 2 cm?",
          options: ["4 cm³", "6 cm³", "8 cm³", "2 cm³"],
          answer: 2,
          explain: "Volume = 2 × 2 × 2 = 8 cm³."
        },
        {
          q: "What is the volume of a cuboid measuring 5 cm × 2 cm × 3 cm?",
          options: ["10 cm³", "30 cm³", "15 cm³", "25 cm³"],
          answer: 1,
          explain: "Volume = 5 × 2 × 3 = 30 cm³."
        },
        {
          q: "Which is the unit of volume?",
          options: ["cm²", "cm", "cm³", "kg"],
          answer: 2,
          explain: "Volume is measured in cubic units, such as cm³."
        },
        {
          q: "A box has 3 layers, and each layer has 4 × 2 small cubes. How many cubes are in the box?",
          options: ["12", "24", "9", "14"],
          answer: 1,
          explain: "Each layer has 4 × 2 = 8 cubes. Three layers have 3 × 8 = 24 cubes."
        },
        {
          q: "Which of these has volume?",
          options: ["A square tile", "A rectangular sheet", "A brick", "A drawing on paper"],
          answer: 2,
          explain: "A brick is a solid that takes up space. The other three are flat, so they have only area."
        }
      ]
    },

    // ───────────────────────────── 11. Time ─────────────────────────────
    {
      id: "time",
      title: "Time",
      section: "Measurement",
      summary: "We learn how time is measured, how to find the time taken between two times, and how to read the 24-hour clock used in railway timetables.",
      notes: [
        {
          heading: "Units of time",
          points: [
            "1 minute = 60 seconds. 1 hour = 60 minutes. 1 day = 24 hours. 1 week = 7 days.",
            "The hour hand is short and the minute hand is long. When the minute hand points to 6, it is half past the hour."
          ]
        },
        {
          heading: "Finding the time taken",
          points: [
            "The time taken (duration) is the end time minus the start time.",
            "Example: from 2:15 pm to 5:40 pm. From 2:15 to 5:15 is 3 hours, and 5:15 to 5:40 is 25 minutes. So the time taken is 3 hours 25 minutes."
          ]
        },
        {
          heading: "The 24-hour clock",
          points: [
            "In the 24-hour clock, the hours run from 00 to 23, and the day never restarts at 12.",
            "For pm times (except 12 pm), add 12 to the hour: 8:15 pm becomes 20:15, and 3:45 pm becomes 15:45.",
            "Indian railway timetables use the 24-hour clock, so a train at 18:30 leaves at 6:30 pm."
          ]
        }
      ],
      formulas: [
        "1 day = 24 hours;  1 hour = 60 minutes;  1 minute = 60 seconds",
        "Time taken = end time − start time",
        "For pm times (except 12 pm): 24-hour hour = hour + 12"
      ],
      terms: [
        { term: "Duration", meaning: "The length of time between a start time and an end time." },
        { term: "24-hour clock", meaning: "A clock that counts hours from 00 to 23, so 1 pm is 13:00." },
        { term: "a.m.", meaning: "The time from midnight to noon, such as 7:30 a.m." },
        { term: "p.m.", meaning: "The time from noon to midnight, such as 7:30 p.m." }
      ],
      examples: [
        {
          q: "A train leaves at 6:20 am and reaches at 11:05 am. How long is the journey?",
          steps: [
            "From 6:20 am to 11:00 am is 4 hours 40 minutes.",
            "From 11:00 am to 11:05 am is 5 minutes.",
            "Total = 4 hours 45 minutes."
          ],
          answer: "4 hours 45 minutes"
        },
        {
          q: "Write 8:15 pm in the 24-hour clock.",
          steps: [
            "Pm time: add 12 to the hour. 8 + 12 = 20.",
            "The minutes stay the same: 15."
          ],
          answer: "20:15"
        }
      ],
      qa: [
        { q: "How do you change 7:30 pm to the 24-hour clock?", a: "Add 12 to the hour: 7 + 12 = 19. So 7:30 pm is 19:30." },
        { q: "Why do railways use the 24-hour clock?", a: "It avoids confusion between morning and evening. A time like 18:30 is clearly 6:30 in the evening." }
      ],
      quiz: [
        {
          q: "How many minutes are there in 2 hours?",
          options: ["100", "60", "120", "200"],
          answer: 2,
          explain: "1 hour = 60 minutes, so 2 hours = 120 minutes."
        },
        {
          q: "What is 8:15 pm in the 24-hour clock?",
          options: ["08:15", "20:15", "18:15", "21:15"],
          answer: 1,
          explain: "8 pm is 8 + 12 = 20 hours, so 8:15 pm is 20:15."
        },
        {
          q: "A film starts at 3:30 pm and ends at 5:10 pm. How long is the film?",
          options: ["1 hour 20 minutes", "2 hours", "1 hour 50 minutes", "1 hour 40 minutes"],
          answer: 3,
          explain: "From 3:30 to 5:30 is 2 hours. Going back 20 minutes to 5:10 gives 1 hour 40 minutes."
        },
        {
          q: "How many days are there in 3 weeks?",
          options: ["21", "14", "24", "3"],
          answer: 0,
          explain: "1 week = 7 days, so 3 weeks = 3 × 7 = 21 days."
        },
        {
          q: "What does 14:45 mean on the 24-hour clock?",
          options: ["2:45 am", "12:45 pm", "2:45 pm", "4:45 pm"],
          answer: 2,
          explain: "14 − 12 = 2, so 14:45 is 2:45 pm."
        }
      ]
    },

    // ───────────────────────────── 12. Money and Unitary Method ─────────────────────────────
    {
      id: "money-and-unitary-method",
      title: "Money and Unitary Method",
      section: "Money",
      summary: "We work with rupees and paise, find the change we get after shopping, and use the unitary method: first find the cost of one item, then the cost of any number of items.",
      notes: [
        {
          heading: "Rupees, paise and change",
          points: [
            "**₹1 = 100 paise**. So 75 paise is written as ₹0.75.",
            "Change is the money we get back when we pay more than the price. Change = money paid − price.",
            "Example: a bill of ₹372 paid with ₹500 gives change of ₹500 − ₹372 = ₹128."
          ]
        },
        {
          heading: "The unitary method",
          points: [
            "The **unitary method** means first finding the value of **one** unit, and then using it to find the value of many units.",
            "Example: 4 chocolates cost ₹48, so one chocolate costs ₹48 ÷ 4 = ₹12. Then 10 chocolates cost 10 × ₹12 = ₹120."
          ]
        },
        {
          heading: "Using the unitary method",
          points: [
            "Step 1: find the value of one unit by dividing the total by the number of units.",
            "Step 2: multiply the value of one unit by the number of units you need."
          ]
        }
      ],
      formulas: [
        "₹1 = 100 paise",
        "Change = money paid − price of the items",
        "Value of one unit = total value ÷ number of units",
        "Value of many units = value of one unit × number of units"
      ],
      terms: [
        { term: "Unitary method", meaning: "A method of finding the value of one unit first, and then the value of any number of units." },
        { term: "Change", meaning: "The money returned to us when we pay more than the price." },
        { term: "Paise", meaning: "The smaller unit of money. 100 paise make ₹1." },
        { term: "Bill", meaning: "A written list of items bought and their total price." }
      ],
      examples: [
        {
          q: "6 notebooks cost ₹126. What does one notebook cost, and what do 11 notebooks cost?",
          steps: [
            "Cost of 1 notebook = 126 ÷ 6 = ₹21.",
            "Cost of 11 notebooks = 11 × 21 = ₹231."
          ],
          answer: "₹21 for one notebook and ₹231 for 11 notebooks"
        },
        {
          q: "Ravi buys 3 kg of apples for ₹240 and pays with a ₹500 note. How much change does he get?",
          steps: [
            "Money paid = ₹500.",
            "Price of apples = ₹240.",
            "Change = 500 − 240 = ₹260."
          ],
          answer: "₹260"
        }
      ],
      qa: [
        { q: "Why do we find the cost of one item first in the unitary method?", a: "Once we know the cost of one item, we can find the cost of any number of items by multiplying. This works for any quantity." },
        { q: "If 5 pencils cost ₹40, how much do 8 pencils cost?", a: "One pencil costs 40 ÷ 5 = ₹8. So 8 pencils cost 8 × 8 = ₹64." }
      ],
      quiz: [
        {
          q: "How many paise make ₹1?",
          options: ["10", "50", "100", "1000"],
          answer: 2,
          explain: "₹1 = 100 paise."
        },
        {
          q: "A shopkeeper receives ₹500 for a bill of ₹372. How much change should he return?",
          options: ["₹218", "₹138", "₹122", "₹128"],
          answer: 3,
          explain: "Change = 500 − 372 = ₹128."
        },
        {
          q: "5 pencils cost ₹40. What is the cost of one pencil?",
          options: ["₹35", "₹5", "₹200", "₹8"],
          answer: 3,
          explain: "40 ÷ 5 = ₹8 for one pencil."
        },
        {
          q: "If 1 kg of sugar costs ₹45, what is the cost of 6 kg?",
          options: ["₹250", "₹270", "₹290", "₹315"],
          answer: 1,
          explain: "6 × ₹45 = ₹270."
        },
        {
          q: "What is the first step of the unitary method?",
          options: ["The total of all units", "The number of units", "The value of two units", "The value of one unit"],
          answer: 3,
          explain: "The first step is to find the value of one unit."
        }
      ]
    },

    // ───────────────────────────── 13. Patterns ─────────────────────────────
    {
      id: "patterns",
      title: "Patterns",
      section: "Patterns",
      summary: "Numbers and shapes often follow a pattern. Once we find the rule, we can predict the next terms in the pattern.",
      notes: [
        {
          heading: "Number patterns",
          points: [
            "A **pattern** is a list that follows a rule. Each number in the list is called a **term**.",
            "In 2, 4, 6, 8, … we add 2 each time. In 5, 10, 15, 20, … we add 5 each time.",
            "The next term of 2, 4, 6, 8 is 10."
          ]
        },
        {
          heading: "Multiplying patterns",
          points: [
            "In 3, 6, 12, 24, … each term is 2 times the one before. The rule is to multiply by 2.",
            "In 100, 90, 80, 70, … we subtract 10 each time."
          ]
        },
        {
          heading: "Patterns in shapes",
          points: [
            "Matchsticks make triangles in a row. One triangle needs 3 sticks, 2 triangles need 5, and 3 triangles need 7.",
            "Each new triangle adds 2 sticks. So the number of sticks is 2 × (number of triangles) + 1.",
            "Patterns are also found in rangoli designs, floor tiles and saree prints."
          ]
        }
      ],
      formulas: [
        "Same number added each time: the rule is to add that number",
        "Same number multiplied each time: the rule is to multiply by that number",
        "Matchstick triangles in a row: number of sticks = 2 × n + 1"
      ],
      terms: [
        { term: "Pattern", meaning: "An arrangement of numbers or shapes that repeats or grows by a rule." },
        { term: "Rule", meaning: "The way a pattern changes from one term to the next, such as add 3." },
        { term: "Term", meaning: "Each number or shape in a pattern. In 5, 10, 15 the second term is 10." },
        { term: "Repeating pattern", meaning: "A pattern in which the same group of items repeats again and again, such as red, blue, green, red, blue, green." }
      ],
      examples: [
        {
          q: "Find the rule and the next two terms of the pattern 5, 10, 20, 40, …",
          steps: [
            "Each term is 2 times the one before: 10 = 5 × 2, 20 = 10 × 2, 40 = 20 × 2.",
            "Rule: multiply by 2.",
            "Next terms: 40 × 2 = 80, and 80 × 2 = 160."
          ],
          answer: "Rule: multiply by 2. The next two terms are 80 and 160."
        },
        {
          q: "Matchsticks make triangles in a row. How many sticks are needed for 5 triangles?",
          steps: [
            "The rule is 2 × n + 1 sticks for n triangles.",
            "2 × 5 + 1 = 11.",
            "Check: 3, 5, 7, 9, 11."
          ],
          answer: "11 sticks"
        }
      ],
      qa: [
        { q: "How can you tell whether a pattern adds a number or multiplies by a number?", a: "Check the gap between terms. If the gap is always the same, the pattern adds that number. If each term is a fixed number of times the one before, it multiplies." },
        { q: "The colours red, blue, green repeat in order. What is the 10th colour?", a: "The pattern has 3 colours. Terms 1, 4, 7, 10 are red, so the 10th colour is red." }
      ],
      quiz: [
        {
          q: "What is the next number in 3, 6, 9, 12, …?",
          options: ["13", "14", "15", "18"],
          answer: 2,
          explain: "The pattern adds 3 each time, so the next number is 12 + 3 = 15."
        },
        {
          q: "What is the next number in 1, 2, 4, 8, 16, …?",
          options: ["24", "32", "30", "20"],
          answer: 1,
          explain: "Each term is 2 times the one before, so 16 × 2 = 32."
        },
        {
          q: "In the pattern 100, 90, 80, 70, … what is the rule?",
          options: ["Multiply by 10", "Add 10", "Subtract 5", "Subtract 10"],
          answer: 3,
          explain: "Each term is 10 less than the one before, so the rule is subtract 10."
        },
        {
          q: "How many matchsticks are needed for 4 triangles in a row?",
          options: ["9", "7", "10", "8"],
          answer: 0,
          explain: "The rule is 2 × 4 + 1 = 9 sticks. Check: 3, 5, 7, 9."
        },
        {
          q: "What is the 6th term of the pattern 5, 10, 15, 20, …?",
          options: ["6", "25", "35", "30"],
          answer: 3,
          explain: "The pattern is the multiples of 5, so the 6th term is 5 × 6 = 30."
        }
      ]
    },

    // ───────────────────────────── 14. Data Handling ─────────────────────────────
    {
      id: "data-handling",
      title: "Data Handling",
      section: "Data",
      summary: "Data is information we collect, such as marks or favourite fruits. We learn to record it with tally marks and show it in bar graphs and pie charts.",
      notes: [
        {
          heading: "Collecting and recording data",
          points: [
            "**Data** is information collected to study something, such as the favourite sports of students in a class.",
            "**Tally marks** help us count quickly. Four upright lines are drawn, and the fifth line crosses them, so each group stands for 5."
          ]
        },
        {
          heading: "Bar graphs",
          points: [
            "A **bar graph** shows quantities using bars of different heights or lengths.",
            "The taller the bar, the bigger the value. We can quickly see which item is the most or the least."
          ]
        },
        {
          heading: "Pie charts (introduction)",
          points: [
            "A **pie chart** is a circle divided into slices. Each slice shows the share of one part of the whole.",
            "Pie charts are useful to show how a whole is divided, such as the way a family spends its money."
          ]
        }
      ],
      formulas: [
        "Total = sum of all the values in the data",
        "Bar height (or length) shows the number it stands for",
        "Each 5th tally mark crosses the first four: one group = 5"
      ],
      terms: [
        { term: "Data", meaning: "Information collected to study something, such as marks or heights." },
        { term: "Tally marks", meaning: "Short lines used to count, with every fifth line crossing the four before it." },
        { term: "Bar graph", meaning: "A graph that shows quantities using bars of different heights or lengths." },
        { term: "Pie chart", meaning: "A circle divided into slices that show how a whole is shared out." }
      ],
      examples: [
        {
          q: "Marks of 5 students are: Asha 18, Ravi 12, Meena 15, Sam 20 and Lila 10. Who scored the most, and what is the total of all the marks?",
          steps: [
            "The highest mark is 20, scored by Sam.",
            "Total = 18 + 12 + 15 + 20 + 10 = 75."
          ],
          answer: "Sam scored the most. The total marks are 75."
        }
      ],
      qa: [
        { q: "What is the use of a bar graph?", a: "A bar graph helps us compare quantities at a glance. A longer or taller bar means a bigger value." },
        { q: "Why do we use tally marks?", a: "Tally marks make counting quick. Every fifth mark crosses the first four, so groups of 5 are easy to count." }
      ],
      quiz: [
        {
          q: "In tally marks, the fifth mark in a group is drawn as:",
          options: ["A dot", "A circle", "A line crossing four marks", "A fifth upright mark"],
          answer: 2,
          explain: "The fifth mark is a slanting line that crosses the four upright lines, which makes groups of 5 easy to count."
        },
        {
          q: "A graph in which quantities are shown by bars of different heights is called a:",
          options: ["Bar graph", "Pie chart", "Tally", "Table"],
          answer: 0,
          explain: "A bar graph uses bars of different heights to show quantities."
        },
        {
          q: "A pie chart is used to show:",
          options: ["How a whole is divided into parts", "Only the highest value", "The time of the day", "The name of each student only"],
          answer: 0,
          explain: "A pie chart is a circle divided into slices, each showing a share of the whole."
        },
        {
          q: "Five students scored 4, 6, 8, 5 and 7 marks. What is the total of their marks?",
          options: ["25", "28", "30", "32"],
          answer: 2,
          explain: "4 + 6 + 8 + 5 + 7 = 30."
        },
        {
          q: "Which word means information collected to study something?",
          options: ["Degree", "Date", "Data", "Dice"],
          answer: 2,
          explain: "Data is information that is collected and then studied, such as marks or heights."
        }
      ]
    }
  ]
});
