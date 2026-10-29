// PSEB Class 7 Mathematics: the earlier NCERT book, which PSEB still uses (2026–27).
// Format: see CONTENT_GUIDE.md
StudyData.add(7, "mathspb", {
  // What this content follows. match: "textbook" | "older-book" | "topic". Set reviewed to a date once a teacher has checked it.
  syllabus: {board: "PSEB", match: "textbook", books: ["Mathematics (earlier NCERT book)"], note: "PSEB 2026–27 uses the earlier NCERT book for this class; chapters follow its list.", reviewed: false},
  chapters: [
    // ───────────────────────────── 1. Integers ─────────────────────────────
    {
      id: "integers",
      title: "Integers",
      section: "Number",
      summary: "Integers are the whole numbers and their negatives. This chapter shows how to add, subtract, multiply and divide them, using the number line and simple sign rules.",
      notes: [
        {
          heading: "Integers on the number line",
          points: [
            "Integers are …, −3, −2, −1, 0, 1, 2, 3, … They include positive integers, negative integers and zero.",
            "On the number line, numbers grow towards the right. So 3 > −2 and −2 > −5.",
            "Every integer has an **opposite**: 5 and −5 are opposites, and a number plus its opposite is always 0.",
            "Negative numbers show things like a temperature of −4°C in Shimla, a depth below sea level or money owed."
          ]
        },
        {
          heading: "Adding and subtracting integers",
          points: [
            "Same signs: add the numbers and keep the sign. (−4) + (−6) = −10.",
            "Different signs: subtract the smaller number from the larger and keep the sign of the larger. (−9) + 5 = −4.",
            "Subtracting an integer is the same as adding its opposite. 7 − (−3) = 7 + 3 = 10.",
            "Integers are closed under addition and subtraction, and addition is commutative and associative. Subtraction is not commutative: 5 − 3 ≠ 3 − 5."
          ]
        },
        {
          heading: "Multiplying integers",
          points: [
            "Same signs give a positive product, different signs give a negative product. (−3) × (−5) = 15 but (−3) × 5 = −15.",
            "For many factors, count the negative signs: an **even** number of negatives gives a positive product and an **odd** number gives a negative product.",
            "Any number × 0 = 0, any number × 1 = itself, and any number × (−1) = its opposite.",
            "The distributive property helps mental sums: 8 × 99 = 8 × (100 − 1) = 800 − 8 = 792."
          ]
        },
        {
          heading: "Dividing integers",
          points: [
            "Division undoes multiplication: (−12) ÷ 4 = −3 because 4 × (−3) = −12.",
            "Same signs give a positive quotient and different signs give a negative quotient. (−48) ÷ (−6) = 8, while (−48) ÷ 6 = −8.",
            "0 ÷ (any non-zero integer) = 0, but division by 0 is **not defined**.",
            "Integers are not closed under division, e.g. 7 ÷ 2 is not an integer. Division is neither commutative nor associative."
          ]
        }
      ],
      formulas: [
        "a + (−a) = 0",
        "a − b = a + (−b)",
        "(+) × (+) = +,  (−) × (−) = +,  (+) × (−) = −",
        "a × (b + c) = a × b + a × c",
        "a ÷ 0 is not defined;  0 ÷ a = 0  (a ≠ 0)"
      ],
      terms: [
        { term: "Integer", meaning: "Any number from the list …, −3, −2, −1, 0, 1, 2, 3, … (positive numbers, negative numbers and zero)." },
        { term: "Opposite (additive inverse)", meaning: "The integer that gives 0 when added to a number. The opposite of 7 is −7." },
        { term: "Number line", meaning: "A straight line on which numbers are marked in order; numbers increase towards the right." },
        { term: "Closure", meaning: "A set is closed under an operation if the result always stays in the set. Integers are closed under +, − and ×, but not ÷." },
        { term: "Distributive property", meaning: "a × (b + c) = a × b + a × c. Multiplication spreads over addition." }
      ],
      examples: [
        {
          q: "Evaluate (−15) + 8 − (−4).",
          steps: [
            "(−15) + 8 = −7",
            "Subtracting −4 is the same as adding 4: −7 − (−4) = −7 + 4",
            "−7 + 4 = −3"
          ],
          answer: "−3"
        },
        {
          q: "At 8 pm the temperature in Shimla is 4°C and it falls by 2°C every hour. What is the temperature at 1 am?",
          steps: [
            "From 8 pm to 1 am is 5 hours.",
            "Total change = 5 × (−2) = −10°C",
            "New temperature = 4 + (−10) = −6°C"
          ],
          answer: "−6°C"
        }
      ],
      qa: [
        { q: "Why is the product of two negative integers positive? Show with a pattern.", a: "Look at 3 × (−4) = −12, 2 × (−4) = −8, 1 × (−4) = −4, 0 × (−4) = 0. Each time the first number drops by 1, the product goes **up by 4**. Continuing: (−1) × (−4) = 4, (−2) × (−4) = 8, so (−3) × (−4) = **12**, a positive number." },
        { q: "Is subtraction commutative for integers? Give an example.", a: "No. 5 − 3 = 2 but 3 − 5 = −2. Since the answers differ, a − b ≠ b − a in general." },
        { q: "Find (−7) × (−5) × (−2).", a: "There are three negative factors (an odd number), so the product is negative. 7 × 5 × 2 = 70, so the answer is **−70**." }
      ],
      quiz: [
        {
          q: "(−7) + 12 = ?",
          options: ["−19", "−5", "5", "19"],
          answer: 2,
          explain: "Signs are different, so subtract 7 from 12 and keep the sign of the larger number (12 is positive): 12 − 7 = 5."
        },
        {
          q: "The value of (−8) − (−3) is:",
          options: ["−5", "−11", "5", "11"],
          answer: 0,
          explain: "Subtracting −3 is the same as adding 3. So −8 + 3 = −5."
        },
        {
          q: "(−6) × (−7) = ?",
          options: ["−42", "−13", "13", "42"],
          answer: 3,
          explain: "Two negative integers multiplied give a positive product: 6 × 7 = 42."
        },
        {
          q: "(−56) ÷ 7 = ?",
          options: ["8", "−8", "−49", "−63"],
          answer: 1,
          explain: "Different signs give a negative quotient. 56 ÷ 7 = 8, so the answer is −8."
        },
        {
          q: "The product (−2) × (−3) × (−4) × (−1) is:",
          options: ["24", "−24", "10", "−10"],
          answer: 0,
          explain: "There are four negative factors (an even number), so the product is positive: 2 × 3 × 4 × 1 = 24."
        },
        {
          q: "Which of the following statements is true?",
          options: ["−3 > −1", "0 < −4", "−5 < −2", "−7 > −6"],
          answer: 2,
          explain: "On the number line −5 lies to the left of −2, so −5 < −2. The other three statements are false."
        }
      ]
    },

    // ───────────────────────────── 2. Fractions and Decimals ─────────────────────────────
    {
      id: "fractions-and-decimals",
      title: "Fractions and Decimals",
      section: "Number",
      summary: "Learn to multiply and divide fractions and decimals. Reciprocals and the position of the decimal point are the two big ideas.",
      notes: [
        {
          heading: "Multiplying fractions",
          points: [
            "Multiply numerator by numerator and denominator by denominator: 2/3 × 4/5 = 8/15.",
            "'Of' means multiplication: 3/5 of 40 = 3/5 × 40 = 24.",
            "Change mixed numbers to improper fractions first: 1½ × 2/3 = 3/2 × 2/3 = 1.",
            "The product of two proper fractions is **smaller** than both of them, e.g. 1/2 × 1/3 = 1/6."
          ]
        },
        {
          heading: "Dividing fractions",
          points: [
            "The **reciprocal** of a/b is b/a. A number multiplied by its reciprocal gives 1. Zero has no reciprocal.",
            "To divide by a fraction, multiply by its reciprocal: 3/4 ÷ 3/8 = 3/4 × 8/3 = 2.",
            "How many halves are there in 6? 6 ÷ 1/2 = 6 × 2 = 12.",
            "Dividing a number by a fraction smaller than 1 gives a **bigger** number."
          ]
        },
        {
          heading: "Multiplying decimals",
          points: [
            "Multiply as if there were no decimal points. Then put the point so that the answer has as many decimal places as both numbers together: 0.3 × 0.4 = 0.12.",
            "2.5 × 1.2: 25 × 12 = 300, and there are 2 decimal places, so the answer is 3.00 = 3.",
            "Multiplying by 10, 100 or 1000 shifts the decimal point 1, 2 or 3 places to the **right**: 4.75 × 100 = 475."
          ]
        },
        {
          heading: "Dividing decimals",
          points: [
            "Dividing by 10, 100 or 1000 shifts the point to the **left**: 56.3 ÷ 100 = 0.563.",
            "To divide a decimal by a whole number, divide as usual and put the point in the quotient when you reach it in the dividend: 7.5 ÷ 5 = 1.5.",
            "To divide by a decimal, multiply both numbers by 10, 100, … until the divisor is a whole number: 4.5 ÷ 0.9 = 45 ÷ 9 = 5."
          ]
        }
      ],
      formulas: [
        "a/b × c/d = (a × c)/(b × d)",
        "a/b ÷ c/d = a/b × d/c   (c ≠ 0)",
        "Reciprocal of a/b is b/a   (a ≠ 0)",
        "Decimal places in a product = sum of decimal places in the factors",
        "× by 10, 100, 1000: point moves right;  ÷ by 10, 100, 1000: point moves left"
      ],
      terms: [
        { term: "Reciprocal", meaning: "The fraction turned upside down. The reciprocal of 3/5 is 5/3, and a number times its reciprocal is 1." },
        { term: "Proper fraction", meaning: "A fraction whose numerator is smaller than its denominator, e.g. 3/7. Its value is less than 1." },
        { term: "Improper fraction", meaning: "A fraction whose numerator is equal to or greater than its denominator, e.g. 9/4." },
        { term: "Mixed number", meaning: "A whole number and a proper fraction together, e.g. 2¼ (which is 9/4)." },
        { term: "Decimal place", meaning: "The position of a digit after the decimal point. 4.75 has two decimal places." }
      ],
      examples: [
        {
          q: "A tailor needs 1¼ m of cloth for one kurta. How many kurtas can he stitch from 10 m of cloth?",
          steps: [
            "1¼ = 5/4 m for one kurta",
            "Number of kurtas = 10 ÷ 5/4",
            "= 10 × 4/5 = 40/5 = 8"
          ],
          answer: "8 kurtas"
        },
        {
          q: "Sugar costs ₹ 45.50 per kg. Find the cost of 2.5 kg.",
          steps: [
            "Cost = 45.5 × 2.5",
            "Multiply without points: 455 × 25 = 11375",
            "Each number has 1 decimal place, so the answer has 2 decimal places: 113.75"
          ],
          answer: "₹ 113.75"
        }
      ],
      qa: [
        { q: "Why does dividing by 1/2 give the same result as multiplying by 2?", a: "There are 2 halves in every whole, so dividing by 1/2 counts how many halves fit in the number. The reciprocal of 1/2 is 2, so 3 ÷ 1/2 = 3 × 2 = **6**." },
        { q: "Is the product of two proper fractions greater or smaller than each of them? Give an example.", a: "It is **smaller**, because we take a part of a part. For example 1/2 × 1/3 = 1/6, which is less than both 1/2 and 1/3." },
        { q: "Evaluate 0.8 ÷ 0.04.", a: "Multiply both numbers by 100 so that the divisor becomes a whole number: 0.8 ÷ 0.04 = 80 ÷ 4 = **20**." }
      ],
      quiz: [
        {
          q: "2/3 × 9/10 = ?",
          options: ["11/13", "3/5", "20/27", "5/3"],
          answer: 1,
          explain: "Multiply across: (2 × 9)/(3 × 10) = 18/30 = 3/5 in lowest terms."
        },
        {
          q: "The reciprocal of 5/7 is:",
          options: ["5/7", "−5/7", "1/35", "7/5"],
          answer: 3,
          explain: "The reciprocal is found by turning the fraction upside down: 7/5. Check: 5/7 × 7/5 = 1."
        },
        {
          q: "4 ÷ 2/3 = ?",
          options: ["6", "8/3", "1/6", "12"],
          answer: 0,
          explain: "Multiply by the reciprocal: 4 × 3/2 = 12/2 = 6."
        },
        {
          q: "0.6 × 0.5 = ?",
          options: ["3", "0.03", "0.3", "0.11"],
          answer: 2,
          explain: "6 × 5 = 30. The factors have 2 decimal places in all, so the product is 0.30 = 0.3."
        },
        {
          q: "7.2 ÷ 0.9 = ?",
          options: ["0.8", "80", "72", "8"],
          answer: 3,
          explain: "Multiply both numbers by 10: 72 ÷ 9 = 8."
        },
        {
          q: "3.456 × 100 = ?",
          options: ["0.03456", "345.6", "34.56", "3456"],
          answer: 1,
          explain: "Multiplying by 100 shifts the decimal point 2 places to the right: 345.6."
        }
      ]
    },

    // ───────────────────────────── 3. Data Handling ─────────────────────────────
    {
      id: "data-handling",
      title: "Data Handling",
      section: "Data",
      summary: "Collect, organise and summarise data using mean, median, mode and range. Bar graphs display data, and probability measures how likely an event is.",
      notes: [
        {
          heading: "Mean (average)",
          points: [
            "Mean = sum of all observations ÷ number of observations. For 4, 7, 9, 12 the mean is 32 ÷ 4 = 8.",
            "The mean always lies between the smallest and the largest observation.",
            "A very large or very small value can pull the mean away from the rest. The mean of 10, 12, 14, 100 is 34, which is not typical of the group.",
            "If you know the mean and the number of observations, the sum = mean × number of observations."
          ]
        },
        {
          heading: "Median",
          points: [
            "Arrange the data in order (ascending or descending). The **median** is the middle value, with half the observations on each side.",
            "Odd number of observations: take the middle one. The median of 3, 5, 8, 9, 11 is 8.",
            "Even number of observations: take the average of the two middle ones. For 4, 7, 9, 10, 12, 15 the middle two are 9 and 10, so the median is 9.5.",
            "The median is not changed much by extreme values, so it describes things like incomes or house prices better than the mean."
          ]
        },
        {
          heading: "Mode and range",
          points: [
            "The **mode** is the observation that occurs most often. In 2, 3, 3, 4, 5, 3 the mode is 3.",
            "Data can have more than one mode (2, 2, 5, 5, 7 has modes 2 and 5) or no mode at all if every value is different.",
            "Mode also works for non-numerical data, such as the most popular shirt size or favourite sport.",
            "**Range** = highest value − lowest value. It tells us how spread out the data is."
          ]
        },
        {
          heading: "Bar graphs and probability",
          points: [
            "A **bar graph** uses bars of equal width whose heights are proportional to the values. A double bar graph compares two sets of data side by side.",
            "To read a bar graph, check the title, the scale on the axis and what each bar stands for.",
            "**Probability** tells how likely an event is: P(event) = favourable outcomes ÷ total equally likely outcomes. For a fair coin, P(head) = 1/2.",
            "An impossible event has probability 0 and a certain event has probability 1. Every probability lies between 0 and 1."
          ]
        }
      ],
      formulas: [
        "Mean = Sum of observations ÷ Number of observations",
        "Range = Highest value − Lowest value",
        "Median: middle value of ordered data (odd number); average of the two middle values (even number)",
        "Probability = Favourable outcomes ÷ Total equally likely outcomes",
        "0 ≤ P(event) ≤ 1"
      ],
      terms: [
        { term: "Mean", meaning: "The average: the sum of all observations divided by how many there are." },
        { term: "Median", meaning: "The middle value of the data when it is arranged in order." },
        { term: "Mode", meaning: "The observation that occurs most often in the data." },
        { term: "Range", meaning: "The difference between the highest and the lowest observation." },
        { term: "Bar graph", meaning: "A picture of data using bars of equal width; the height of each bar shows the value." },
        { term: "Probability", meaning: "A number from 0 to 1 that measures how likely an event is to happen." }
      ],
      examples: [
        {
          q: "Kabir scored 30, 45, 15, 45 and 65 runs in five matches. Find the mean, median, mode and range.",
          steps: [
            "Mean = (30 + 45 + 15 + 45 + 65) ÷ 5 = 200 ÷ 5 = 40",
            "In order: 15, 30, 45, 45, 65. The middle (3rd) value is 45, so the median is 45",
            "45 appears twice and every other score once, so the mode is 45",
            "Range = 65 − 15 = 50"
          ],
          answer: "Mean = 40, median = 45, mode = 45, range = 50"
        },
        {
          q: "A bag has 3 red, 5 blue and 2 green marbles. One marble is picked without looking. Find P(blue) and P(not red).",
          steps: [
            "Total marbles = 3 + 5 + 2 = 10, all equally likely",
            "P(blue) = 5/10 = 1/2",
            "Not red means blue or green: 5 + 2 = 7 marbles, so P(not red) = 7/10"
          ],
          answer: "P(blue) = 1/2 and P(not red) = 7/10"
        }
      ],
      qa: [
        { q: "Find the median of 12, 7, 9, 15, 10, 4.", a: "Arrange in order: 4, 7, 9, 10, 12, 15. There are 6 values, so the median is the average of the 3rd and 4th: (9 + 10) ÷ 2 = **9.5**." },
        { q: "The mean of 5 numbers is 12. A sixth number, 18, is added. What is the new mean?", a: "Sum of the 5 numbers = 12 × 5 = 60. New sum = 60 + 18 = 78. New mean = 78 ÷ 6 = **13**." },
        { q: "Can the probability of an event be 1.5 or −0.2? Explain.", a: "No. Favourable outcomes can never be more than the total outcomes or less than zero, so a probability always lies between **0 and 1**. 0 means the event is impossible and 1 means it is certain." }
      ],
      quiz: [
        {
          q: "The mean of 3, 5, 7, 9 and 11 is:",
          options: ["5", "9", "35", "7"],
          answer: 3,
          explain: "Sum = 3 + 5 + 7 + 9 + 11 = 35. Mean = 35 ÷ 5 = 7."
        },
        {
          q: "The mode of 2, 3, 3, 4, 5, 3, 6, 2 is:",
          options: ["2", "3", "4", "5"],
          answer: 1,
          explain: "3 occurs three times, 2 occurs twice and every other number once, so the mode is 3."
        },
        {
          q: "The median of 8, 3, 11, 5, 9 is:",
          options: ["11", "7.2", "8", "9"],
          answer: 2,
          explain: "In order the data is 3, 5, 8, 9, 11. The middle value is 8. (11 is the middle of the unsorted list and 7.2 is the mean.)"
        },
        {
          q: "The range of 45, 12, 78, 33 and 5 is:",
          options: ["73", "83", "78", "33"],
          answer: 0,
          explain: "Range = highest − lowest = 78 − 5 = 73."
        },
        {
          q: "A fair die is rolled once. The probability of getting an even number is:",
          options: ["1/6", "1/2", "1/3", "2/3"],
          answer: 1,
          explain: "Even numbers are 2, 4, 6, which is 3 outcomes out of 6. So the probability is 3/6 = 1/2."
        },
        {
          q: "The mean of 6 numbers is 15. Their sum is:",
          options: ["21", "2.5", "9", "90"],
          answer: 3,
          explain: "Sum = mean × number of observations = 15 × 6 = 90."
        }
      ]
    },

    // ───────────────────────────── 4. Simple Equations ─────────────────────────────
    {
      id: "simple-equations",
      title: "Simple Equations",
      section: "Algebra",
      summary: "An equation is a balance between two expressions. We solve it by doing the same thing to both sides, and we use equations to solve everyday word problems.",
      notes: [
        {
          heading: "What is an equation?",
          points: [
            "An **equation** says that two expressions are equal. It has an equals sign and a variable, such as x + 5 = 12.",
            "The value of the variable that makes both sides equal is the **solution** (or root). Here x = 7, because 7 + 5 = 12.",
            "Think of a balance: the left-hand side (LHS) and right-hand side (RHS) must always weigh the same.",
            "To check a solution, put it back in the equation. Both sides must give the same value."
          ]
        },
        {
          heading: "Solving by balancing",
          points: [
            "Whatever you do to one side, do to the other: add, subtract, multiply or divide both sides by the same number (not dividing by 0).",
            "Solve 3x − 7 = 11: add 7 to both sides to get 3x = 18, then divide by 3 to get x = 6.",
            "**Transposing** means moving a term to the other side with its sign changed: + becomes −, − becomes +, × becomes ÷.",
            "Always check: put x = 6 back and 3 × 6 − 7 = 11 ✓."
          ]
        },
        {
          heading: "Brackets, fractions and variables on both sides",
          points: [
            "Open brackets first: 2(x + 3) = 14 → 2x + 6 = 14 → 2x = 8 → x = 4.",
            "When the variable is on both sides, collect the variable terms on one side and the numbers on the other: 6x + 1 = 2x + 9 → 4x = 8 → x = 2.",
            "With fractions, multiply both sides by the LCM of the denominators: x/2 + x/3 = 10; multiply by 6 to get 3x + 2x = 60, so x = 12."
          ]
        },
        {
          heading: "Forming equations from words",
          points: [
            "Steps: choose a letter for the unknown, write the story as an equation, solve it, then check against the story.",
            "'A number increased by 8 is 21' gives x + 8 = 21, so x = 13.",
            "'Twice a number decreased by 3 is 15' gives 2x − 3 = 15, so x = 9.",
            "Three consecutive numbers: n, n + 1, n + 2. Three consecutive even (or odd) numbers: n, n + 2, n + 4."
          ]
        }
      ],
      formulas: [
        "If a = b, then a + c = b + c and a − c = b − c",
        "If a = b, then a × c = b × c and a ÷ c = b ÷ c   (c ≠ 0)",
        "Transposing: a term changes its sign when it moves to the other side",
        "ax + b = c  →  x = (c − b) ÷ a   (a ≠ 0)",
        "Three consecutive numbers: n, n + 1, n + 2"
      ],
      terms: [
        { term: "Variable", meaning: "A letter such as x or y that stands for an unknown number." },
        { term: "Equation", meaning: "A statement that two expressions are equal, like 2x + 1 = 9." },
        { term: "Solution (root)", meaning: "The value of the variable that makes the two sides of the equation equal." },
        { term: "LHS and RHS", meaning: "The expressions on the left-hand side and the right-hand side of the equals sign." },
        { term: "Transposition", meaning: "Moving a term to the other side of the equation and changing its sign." },
        { term: "Consecutive numbers", meaning: "Numbers that follow one another, each 1 more than the one before, such as 20, 21, 22." }
      ],
      examples: [
        {
          q: "Solve 5x − 8 = 2x + 7 and check the answer.",
          steps: [
            "Bring the x terms to the left and numbers to the right: 5x − 2x = 7 + 8",
            "3x = 15",
            "x = 15 ÷ 3 = 5",
            "Check: LHS = 5 × 5 − 8 = 17 and RHS = 2 × 5 + 7 = 17 ✓"
          ],
          answer: "x = 5"
        },
        {
          q: "The sum of three consecutive numbers is 63. Find the numbers.",
          steps: [
            "Let the numbers be n, n + 1 and n + 2.",
            "n + (n + 1) + (n + 2) = 63, so 3n + 3 = 63",
            "3n = 60, so n = 20",
            "The numbers are 20, 21, 22 and 20 + 21 + 22 = 63 ✓"
          ],
          answer: "20, 21 and 22"
        }
      ],
      qa: [
        { q: "Solve 3(x − 2) = 15 and check your answer.", a: "Divide both sides by 3: x − 2 = 5, so x = **7**. Check: 3 × (7 − 2) = 3 × 5 = 15 ✓." },
        { q: "Sneha had some money. After spending ₹ 40 she is left with ₹ 85. Form an equation and find how much she had.", a: "Let she had ₹ x. Then x − 40 = 85, so x = 85 + 40 = **₹ 125**." },
        { q: "A father's age is 3 times his son's age. Together their ages add up to 52 years. Find both ages.", a: "Let the son's age be x years, so the father's age is 3x. Then x + 3x = 52, so 4x = 52 and x = 13. The son is **13 years** and the father is **39 years** old (13 + 39 = 52 ✓)." }
      ],
      quiz: [
        {
          q: "The solution of x + 9 = 15 is:",
          options: ["6", "24", "−6", "9"],
          answer: 0,
          explain: "Subtract 9 from both sides: x = 15 − 9 = 6."
        },
        {
          q: "If 4x = 28, then x =",
          options: ["32", "24", "7", "112"],
          answer: 2,
          explain: "Divide both sides by 4: x = 28 ÷ 4 = 7."
        },
        {
          q: "Solve 2x − 5 = 11.",
          options: ["3", "8", "6", "16"],
          answer: 1,
          explain: "Add 5 to both sides: 2x = 16. Divide by 2: x = 8. Check: 2 × 8 − 5 = 11 ✓."
        },
        {
          q: "If y/5 = 3, then y =",
          options: ["8", "2", "3/5", "15"],
          answer: 3,
          explain: "Multiply both sides by 5: y = 3 × 5 = 15."
        },
        {
          q: "Which value of x satisfies 3x + 1 = 10?",
          options: ["x = 2", "x = 4", "x = 3", "x = 9"],
          answer: 2,
          explain: "For x = 3: 3 × 3 + 1 = 10 ✓. The other values give 7, 13 and 28."
        },
        {
          q: "Twice a number added to 7 gives 19. The number is:",
          options: ["6", "12", "13", "26"],
          answer: 0,
          explain: "2n + 7 = 19, so 2n = 12 and n = 6."
        }
      ]
    },

    // ───────────────────────────── 5. Lines and Angles ─────────────────────────────
    {
      id: "lines-and-angles",
      title: "Lines and Angles",
      section: "Geometry",
      summary: "Study pairs of angles (complementary, supplementary, linear pair, vertically opposite) and the angles made when a transversal cuts parallel lines.",
      notes: [
        {
          heading: "Pairs of angles",
          points: [
            "**Complementary** angles add up to 90°. Each is the complement of the other, e.g. the complement of 30° is 60°.",
            "**Supplementary** angles add up to 180°. The supplement of 110° is 70°.",
            "Adjacent angles share a common vertex and a common arm and do not overlap.",
            "A **linear pair** is two adjacent angles whose outer arms form a straight line, so they always add up to 180°."
          ]
        },
        {
          heading: "Intersecting lines",
          points: [
            "When two lines cross, four angles are formed at the point of intersection.",
            "**Vertically opposite angles** are equal. If lines AB and CD meet at O, then ∠AOC = ∠BOD and ∠AOD = ∠BOC.",
            "Any two neighbouring angles among the four form a linear pair, so they add up to 180°.",
            "Two lines are **perpendicular** (⊥) if they meet at an angle of 90°."
          ]
        },
        {
          heading: "Transversal",
          points: [
            "A **transversal** is a line that cuts two or more lines at different points. The rail on a railway track cuts the sleepers like a transversal.",
            "A transversal makes 8 angles with two lines.",
            "Corresponding angles are in the same position at the two crossings. Alternate interior angles lie inside the two lines on opposite sides of the transversal.",
            "Interior angles on the same side of the transversal lie between the lines, on one side of it."
          ]
        },
        {
          heading: "Parallel lines and a transversal",
          points: [
            "If the lines are parallel (∥), **corresponding angles are equal**.",
            "**Alternate interior angles are equal**.",
            "**Interior angles on the same side** of the transversal add up to 180° (they are supplementary).",
            "The converse is also true: if corresponding angles or alternate interior angles are equal, the two lines are parallel. This is how we test for parallel lines."
          ]
        }
      ],
      formulas: [
        "Complementary angles: ∠A + ∠B = 90°",
        "Supplementary angles / linear pair: ∠A + ∠B = 180°",
        "Vertically opposite angles are equal",
        "Parallel lines: corresponding angles are equal; alternate interior angles are equal",
        "Parallel lines: interior angles on the same side of the transversal add up to 180°"
      ],
      terms: [
        { term: "Complementary angles", meaning: "Two angles whose measures add up to 90°." },
        { term: "Supplementary angles", meaning: "Two angles whose measures add up to 180°." },
        { term: "Linear pair", meaning: "Two adjacent angles whose non-common arms form a straight line. Their sum is 180°." },
        { term: "Vertically opposite angles", meaning: "The pairs of angles facing each other when two lines intersect. They are always equal." },
        { term: "Transversal", meaning: "A line that crosses two or more other lines at different points." },
        { term: "Alternate interior angles", meaning: "Angles between two lines that lie on opposite sides of the transversal. They are equal when the lines are parallel." }
      ],
      examples: [
        {
          q: "Find an angle that is 24° less than its supplement.",
          steps: [
            "Let the angle be x. Its supplement is 180° − x.",
            "x = (180° − x) − 24° = 156° − x",
            "2x = 156°, so x = 78°",
            "Check: supplement = 102° and 102° − 78° = 24° ✓"
          ],
          answer: "78°"
        },
        {
          q: "Two straight lines cross. One angle is (2x + 10)° and the angle vertically opposite to it is (3x − 20)°. Find x and the angle next to them.",
          steps: [
            "Vertically opposite angles are equal: 2x + 10 = 3x − 20",
            "10 + 20 = 3x − 2x, so x = 30",
            "Each of the two equal angles = 2 × 30 + 10 = 70°",
            "The next angle forms a linear pair with 70°: 180° − 70° = 110°"
          ],
          answer: "x = 30; the angles are 70° and 110°"
        }
      ],
      qa: [
        { q: "Can two obtuse angles be supplementary? Give a reason.", a: "No. An obtuse angle is more than 90°, so two obtuse angles add up to **more than 180°**, but supplementary angles must add up to exactly 180°." },
        { q: "Two parallel lines are cut by a transversal and one of the angles formed is 70°. Find the sizes of all the angles formed.", a: "At each crossing there are two angles of 70° (vertically opposite) and two angles of 110° (linear pair with 70°). The other crossing gives the same by corresponding angles. So **four angles are 70° and four angles are 110°**." },
        { q: "Find the complement and the supplement of 65°.", a: "Complement = 90° − 65° = **25°**. Supplement = 180° − 65° = **115°**." }
      ],
      quiz: [
        {
          q: "The complement of 35° is:",
          options: ["145°", "55°", "65°", "35°"],
          answer: 1,
          explain: "Complementary angles add up to 90°, so the complement is 90° − 35° = 55°."
        },
        {
          q: "The supplement of 112° is:",
          options: ["22°", "78°", "248°", "68°"],
          answer: 3,
          explain: "Supplementary angles add up to 180°, so the supplement is 180° − 112° = 68°."
        },
        {
          q: "Two angles form a linear pair. One of them is 74°. The other is:",
          options: ["106°", "16°", "74°", "286°"],
          answer: 0,
          explain: "A linear pair adds up to 180°, so the other angle is 180° − 74° = 106°."
        },
        {
          q: "Two straight lines cross and one of the four angles is 50°. The angle vertically opposite to it is:",
          options: ["130°", "40°", "50°", "100°"],
          answer: 2,
          explain: "Vertically opposite angles are equal, so it is also 50°. (130° is the angle next to it.)"
        },
        {
          q: "Two parallel lines are cut by a transversal. The interior angles on the same side of the transversal add up to:",
          options: ["90°", "270°", "360°", "180°"],
          answer: 3,
          explain: "Interior angles on the same side of a transversal between parallel lines are supplementary: their sum is 180°."
        },
        {
          q: "Two angles are supplementary and one is double the other. The smaller angle is:",
          options: ["30°", "60°", "90°", "120°"],
          answer: 1,
          explain: "Let the smaller angle be x. Then x + 2x = 180°, so 3x = 180° and x = 60°."
        }
      ]
    },

    // ───────────────────────────── 6. The Triangle and its Properties ─────────────────────────────
    {
      id: "triangle-and-its-properties",
      title: "The Triangle and its Properties",
      section: "Geometry",
      summary: "Medians, altitudes, the angle sum and exterior angle properties, the triangle inequality and the Pythagoras property of right-angled triangles.",
      notes: [
        {
          heading: "Medians and altitudes",
          points: [
            "A **median** joins a vertex to the midpoint of the opposite side. A triangle has 3 medians and they meet at one point, the centroid.",
            "An **altitude** is the perpendicular from a vertex to the opposite side (extended if needed). The three altitudes also meet at one point.",
            "In a right-angled triangle, two of the altitudes are the legs themselves. In an obtuse-angled triangle, two altitudes lie outside the triangle."
          ]
        },
        {
          heading: "Angles of a triangle",
          points: [
            "**Angle sum property:** the three angles of any triangle add up to 180°.",
            "If a side is extended, the angle formed outside at that vertex is an **exterior angle**. It equals the **sum of the two interior opposite angles**.",
            "An exterior angle is always bigger than each of its interior opposite angles.",
            "By sides: equilateral (3 equal sides, each angle 60°), isosceles (2 equal sides and equal angles opposite them), scalene (no equal sides)."
          ]
        },
        {
          heading: "Sides of a triangle",
          points: [
            "The sum of any two sides of a triangle is **greater** than the third side.",
            "The difference of any two sides is **less** than the third side.",
            "Test: 3 cm, 4 cm, 8 cm cannot form a triangle because 3 + 4 = 7 is less than 8. But 5, 6, 10 can, because 5 + 6 = 11 > 10."
          ]
        },
        {
          heading: "Right-angled triangles and Pythagoras",
          points: [
            "In a right-angled triangle the side opposite the right angle is the **hypotenuse**, and it is the longest side.",
            "**Pythagoras property:** (hypotenuse)² = (one leg)² + (other leg)². For legs 3 and 4: 9 + 16 = 25, so the hypotenuse is 5.",
            "Triplets of whole numbers that satisfy it are called Pythagorean triplets: (3, 4, 5), (6, 8, 10), (5, 12, 13), (8, 15, 17).",
            "The converse holds too: if a² + b² = c² for the sides, the triangle is right-angled. Masons use the 3-4-5 rule to check corners."
          ]
        }
      ],
      formulas: [
        "Angle sum: ∠A + ∠B + ∠C = 180°",
        "Exterior angle = sum of the two interior opposite angles",
        "Triangle inequality: the sum of any two sides > the third side",
        "Pythagoras: (hypotenuse)² = (base)² + (height)²",
        "Pythagorean triplets: (3, 4, 5), (5, 12, 13), (8, 15, 17) and their multiples such as (6, 8, 10)"
      ],
      terms: [
        { term: "Median", meaning: "A line segment from a vertex of a triangle to the midpoint of the opposite side." },
        { term: "Altitude", meaning: "The perpendicular line segment from a vertex to the opposite side (or its extension)." },
        { term: "Exterior angle", meaning: "The angle formed outside a triangle when one of its sides is extended." },
        { term: "Hypotenuse", meaning: "The longest side of a right-angled triangle, opposite the right angle." },
        { term: "Pythagorean triplet", meaning: "Three whole numbers a, b, c with a² + b² = c², such as 3, 4, 5." },
        { term: "Centroid", meaning: "The point where the three medians of a triangle meet." }
      ],
      examples: [
        {
          q: "In △ABC, side BC is extended to D. If ∠A = 55° and ∠B = 45°, find ∠ACD and ∠ACB.",
          steps: [
            "∠ACD is the exterior angle at C, so ∠ACD = ∠A + ∠B = 55° + 45° = 100°",
            "∠ACB and ∠ACD form a linear pair: ∠ACB = 180° − 100° = 80°",
            "Check: 55° + 45° + 80° = 180° ✓"
          ],
          answer: "∠ACD = 100° and ∠ACB = 80°"
        },
        {
          q: "A 13 m ladder rests against a wall with its foot 5 m from the wall. How high up the wall does it reach?",
          steps: [
            "The ladder is the hypotenuse (13 m); the ground distance is one leg (5 m).",
            "height² = 13² − 5² = 169 − 25 = 144",
            "height = √144 = 12 m"
          ],
          answer: "12 m"
        }
      ],
      qa: [
        { q: "Can a triangle have sides 5 cm, 7 cm and 13 cm? Why?", a: "No. 5 + 7 = 12, which is **less than** 13. The sum of any two sides of a triangle must be greater than the third side." },
        { q: "Two angles of a triangle are 40° and 65°. Find the third angle and name the type of triangle.", a: "Third angle = 180° − (40° + 65°) = 180° − 105° = **75°**. All three angles are below 90° and all are different, so it is an acute-angled scalene triangle." },
        { q: "Is a triangle with sides 6 cm, 8 cm and 10 cm right-angled?", a: "6² + 8² = 36 + 64 = 100 = 10². By the converse of the Pythagoras property, **yes**, it is right-angled, with the right angle opposite the 10 cm side." }
      ],
      quiz: [
        {
          q: "Two angles of a triangle are 60° and 70°. The third angle is:",
          options: ["130°", "120°", "60°", "50°"],
          answer: 3,
          explain: "Third angle = 180° − (60° + 70°) = 180° − 130° = 50°."
        },
        {
          q: "An exterior angle of a triangle is 110° and one interior opposite angle is 45°. The other interior opposite angle is:",
          options: ["155°", "65°", "70°", "35°"],
          answer: 1,
          explain: "Exterior angle = sum of the interior opposite angles, so the other angle is 110° − 45° = 65°."
        },
        {
          q: "Which set of lengths can be the sides of a triangle?",
          options: ["2 cm, 3 cm, 6 cm", "4 cm, 4 cm, 9 cm", "5 cm, 6 cm, 10 cm", "3 cm, 5 cm, 9 cm"],
          answer: 2,
          explain: "5 + 6 = 11 > 10, so 5, 6, 10 works. In the others the two shorter sides add up to less than the longest side (2 + 3 = 5 < 6, 4 + 4 = 8 < 9, 3 + 5 = 8 < 9)."
        },
        {
          q: "The legs of a right-angled triangle are 9 cm and 12 cm. The hypotenuse is:",
          options: ["15 cm", "21 cm", "10.5 cm", "225 cm"],
          answer: 0,
          explain: "Hypotenuse² = 81 + 144 = 225, so the hypotenuse = 15 cm."
        },
        {
          q: "A line segment joining a vertex to the midpoint of the opposite side is called a:",
          options: ["Altitude", "Median", "Angle bisector", "Transversal"],
          answer: 1,
          explain: "A segment from a vertex to the midpoint of the opposite side is a median."
        },
        {
          q: "Which of these is a Pythagorean triplet?",
          options: ["5, 11, 13", "6, 7, 10", "7, 8, 11", "5, 12, 13"],
          answer: 3,
          explain: "5² + 12² = 25 + 144 = 169 = 13². None of the other sets satisfies a² + b² = c²."
        }
      ]
    },

    // ───────────────────────────── 7. Comparing Quantities ─────────────────────────────
    {
      id: "comparing-quantities",
      title: "Comparing Quantities",
      section: "Number",
      summary: "Compare quantities using ratio and percentage, find profit, loss and discount in shopping, and calculate simple interest on money lent or deposited.",
      notes: [
        {
          heading: "Ratio and proportion",
          points: [
            "A **ratio** compares two quantities of the same kind in the same unit and is written a : b. 40 cm to 1 m is 40 : 100 = 2 : 5.",
            "Simplify a ratio by dividing both terms by their HCF: 24 : 36 = 2 : 3.",
            "Four numbers are in **proportion** if a : b = c : d, i.e. a × d = b × c. Example: 3 : 4 = 9 : 12 because 3 × 12 = 4 × 9 = 36.",
            "The unitary method finds the value of one unit first, then the value of many units."
          ]
        },
        {
          heading: "Percentage",
          points: [
            "**Per cent** means 'per hundred'. x% = x/100, so 35% = 35/100 = 0.35.",
            "To change a fraction to a percent, multiply by 100: 3/8 = 3/8 × 100 = 37.5%.",
            "x% of a quantity = x/100 × quantity. 20% of ₹ 450 = ₹ 90.",
            "Handy values: 50% = 1/2, 25% = 1/4, 75% = 3/4, 20% = 1/5, 10% = 1/10.",
            "Percentage increase or decrease = (change ÷ original value) × 100."
          ]
        },
        {
          heading: "Profit, loss and discount",
          points: [
            "The **cost price (CP)** is what the shopkeeper pays; the **selling price (SP)** is what the customer pays.",
            "If SP > CP there is a profit = SP − CP. If CP > SP there is a loss = CP − SP.",
            "Profit % and loss % are always calculated on the **cost price**: Profit % = (Profit ÷ CP) × 100.",
            "Discount = Marked price − Selling price. Discount % is calculated on the marked price."
          ]
        },
        {
          heading: "Simple interest",
          points: [
            "Money borrowed or deposited is the **principal (P)**. Interest is the extra money paid for using it. The **rate (R)** is the interest per ₹ 100 per year (p.a.) and **time (T)** is in years.",
            "SI = (P × R × T) ÷ 100. For ₹ 5000 at 8% p.a. for 2 years: SI = 5000 × 8 × 2 ÷ 100 = ₹ 800.",
            "Amount = Principal + Interest. In the example above the amount is ₹ 5800.",
            "In simple interest the interest is the same every year, because it is always worked out on the original principal."
          ]
        }
      ],
      formulas: [
        "x% = x/100",
        "Percentage change = (Change ÷ Original value) × 100",
        "Profit = SP − CP;  Loss = CP − SP",
        "Profit % = (Profit ÷ CP) × 100;  Loss % = (Loss ÷ CP) × 100",
        "SP = CP + Profit = CP − Loss",
        "Discount = Marked price − Selling price",
        "Simple interest: SI = (P × R × T) ÷ 100",
        "Amount = Principal + Simple interest"
      ],
      terms: [
        { term: "Ratio", meaning: "A comparison of two quantities of the same kind by division, written a : b." },
        { term: "Percentage", meaning: "A fraction with denominator 100. 'Per cent' means 'out of every hundred'." },
        { term: "Cost price (CP)", meaning: "The price at which an article is bought." },
        { term: "Selling price (SP)", meaning: "The price at which an article is sold." },
        { term: "Principal", meaning: "The original sum of money that is borrowed or deposited." },
        { term: "Simple interest", meaning: "Interest calculated only on the original principal, so it is the same each year." }
      ],
      examples: [
        {
          q: "Ramesh buys a second-hand cycle for ₹ 3200 and sells it for ₹ 3600. Find his profit and profit percent.",
          steps: [
            "SP is more than CP, so there is a profit.",
            "Profit = 3600 − 3200 = ₹ 400",
            "Profit % = (400 ÷ 3200) × 100 = 1/8 × 100 = 12.5%"
          ],
          answer: "Profit = ₹ 400; profit percent = 12.5%"
        },
        {
          q: "Find the simple interest and the amount on ₹ 8000 at 6% per annum for 3 years.",
          steps: [
            "SI = (8000 × 6 × 3) ÷ 100",
            "= 80 × 18 = 1440",
            "Amount = 8000 + 1440 = 9440"
          ],
          answer: "Simple interest = ₹ 1440; amount = ₹ 9440"
        }
      ],
      qa: [
        { q: "Divide ₹ 1200 between Asha and Bina in the ratio 3 : 5.", a: "Total parts = 3 + 5 = 8. One part = 1200 ÷ 8 = ₹ 150. Asha gets 3 × 150 = **₹ 450** and Bina gets 5 × 150 = **₹ 750**. (450 + 750 = 1200 ✓)" },
        { q: "A shirt marked ₹ 800 is sold at a 15% discount. Find its selling price.", a: "Discount = 15% of 800 = 15/100 × 800 = ₹ 120. Selling price = 800 − 120 = **₹ 680**." },
        { q: "The price of a notebook rises from ₹ 40 to ₹ 50. Find the percentage increase.", a: "Increase = 50 − 40 = ₹ 10. Percentage increase = (10 ÷ 40) × 100 = **25%**." }
      ],
      quiz: [
        {
          q: "The ratio 24 : 36 in its simplest form is:",
          options: ["2 : 3", "3 : 2", "4 : 6", "12 : 18"],
          answer: 0,
          explain: "HCF of 24 and 36 is 12. Dividing both by 12 gives 2 : 3. The ratios 4 : 6 and 12 : 18 are equal to it but can be simplified further."
        },
        {
          q: "35% of 200 is:",
          options: ["35", "7", "70", "170"],
          answer: 2,
          explain: "35% of 200 = 35/100 × 200 = 70."
        },
        {
          q: "An article bought for ₹ 250 is sold for ₹ 200. The loss percent is:",
          options: ["50%", "20%", "25%", "80%"],
          answer: 1,
          explain: "Loss = 250 − 200 = ₹ 50. Loss % = (50 ÷ 250) × 100 = 20%, because it is calculated on the cost price."
        },
        {
          q: "The simple interest on ₹ 2000 at 5% per annum for 3 years is:",
          options: ["₹ 30", "₹ 100", "₹ 2300", "₹ 300"],
          answer: 3,
          explain: "SI = (2000 × 5 × 3) ÷ 100 = ₹ 300. (₹ 2300 would be the amount.)"
        },
        {
          q: "In a class of 40 students, 15 are girls. The percentage of girls is:",
          options: ["15%", "25%", "37.5%", "40%"],
          answer: 2,
          explain: "Percentage = (15 ÷ 40) × 100 = 37.5%."
        },
        {
          q: "A bicycle bought for ₹ 1500 is sold at a profit of 10%. Its selling price is:",
          options: ["₹ 1650", "₹ 1510", "₹ 1350", "₹ 1600"],
          answer: 0,
          explain: "Profit = 10% of 1500 = ₹ 150. SP = CP + profit = 1500 + 150 = ₹ 1650."
        }
      ]
    },

    // ───────────────────────────── 8. Rational Numbers ─────────────────────────────
    {
      id: "rational-numbers",
      title: "Rational Numbers",
      section: "Number",
      summary: "Rational numbers are numbers of the form p/q. We learn their standard form, how to compare them on the number line, how to operate on them and which properties they follow.",
      notes: [
        {
          heading: "What is a rational number?",
          points: [
            "A **rational number** can be written as p/q, where p and q are integers and q ≠ 0. Examples: 3/4, −5/7, 6 (= 6/1), 0.25 (= 1/4).",
            "All integers, fractions and terminating or recurring decimals are rational. Even 0 = 0/5 is rational.",
            "Equivalent forms come from multiplying or dividing the numerator and denominator by the same non-zero integer: 2/3 = 4/6 = 6/9.",
            "**Standard form:** the denominator is positive and the numerator and denominator have no common factor except 1. So −12/18 = −2/3 and 3/−5 = −3/5."
          ]
        },
        {
          heading: "Number line and comparison",
          points: [
            "Positive rational numbers lie to the right of 0 and negative ones to the left. To mark −3/4, split the gap between 0 and −1 into 4 equal parts and take 3 parts.",
            "Every negative rational number is less than 0, and 0 is less than every positive one.",
            "To compare, write both with the same positive denominator and compare numerators: −3/4 = −9/12 and −2/3 = −8/12, so −2/3 > −3/4.",
            "Between any two rational numbers there are **infinitely many** rational numbers. One of them is their average, (x + y)/2."
          ]
        },
        {
          heading: "Operations",
          points: [
            "Addition: make the denominators equal, then add the numerators. −3/4 + 5/6 = −9/12 + 10/12 = 1/12.",
            "Subtraction means adding the additive inverse: 2/3 − 5/6 = 2/3 + (−5/6) = 4/6 − 5/6 = −1/6.",
            "Multiplication: multiply the numerators and the denominators. (−2/3) × (9/10) = −18/30 = −3/5.",
            "Division: multiply by the reciprocal. The reciprocal of −3/5 is −5/3. Zero has no reciprocal."
          ]
        },
        {
          heading: "Properties of rational numbers",
          points: [
            "Rational numbers are closed under addition, subtraction and multiplication. They are not closed under division, because division by 0 is not defined.",
            "Addition and multiplication are commutative and associative. Subtraction and division are not.",
            "The additive identity is 0 (a + 0 = a) and the multiplicative identity is 1 (a × 1 = a).",
            "The additive inverse of a/b is −a/b and the multiplicative inverse (reciprocal) of a/b is b/a. Multiplication is distributive over addition."
          ]
        }
      ],
      formulas: [
        "Rational number = p/q, where p and q are integers and q ≠ 0",
        "Standard form: q > 0 and HCF(p, q) = 1",
        "a/b + c/d = (ad + bc)/(bd)",
        "a/b × c/d = (ac)/(bd);   a/b ÷ c/d = (ad)/(bc)",
        "Additive inverse of a/b = −a/b;  reciprocal of a/b = b/a",
        "A rational number between x and y: (x + y)/2"
      ],
      terms: [
        { term: "Rational number", meaning: "A number that can be written as p/q with integers p and q and q ≠ 0, e.g. −3/8." },
        { term: "Standard form", meaning: "A rational number written with a positive denominator and with numerator and denominator having no common factor other than 1." },
        { term: "Equivalent rational numbers", meaning: "Rational numbers with the same value, like 1/2, 2/4 and 5/10." },
        { term: "Additive inverse", meaning: "The number which, added to a given number, gives 0. For 3/5 it is −3/5." },
        { term: "Reciprocal", meaning: "The multiplicative inverse. The number that gives 1 when multiplied with a given non-zero number. For −3/5 it is −5/3." }
      ],
      examples: [
        {
          q: "Simplify −3/4 + 5/6.",
          steps: [
            "LCM of 4 and 6 is 12.",
            "−3/4 = −9/12 and 5/6 = 10/12",
            "Sum = (−9 + 10)/12 = 1/12"
          ],
          answer: "1/12"
        },
        {
          q: "Simplify (−5/8) ÷ (15/16).",
          steps: [
            "Dividing means multiplying by the reciprocal of 15/16, which is 16/15.",
            "(−5/8) × (16/15) = (−5 × 16)/(8 × 15) = −80/120",
            "Divide numerator and denominator by 40: −2/3"
          ],
          answer: "−2/3"
        }
      ],
      qa: [
        { q: "Write 36/−48 in standard form.", a: "Make the denominator positive: 36/−48 = −36/48. The HCF of 36 and 48 is 12, so divide both by 12 to get **−3/4**." },
        { q: "Which is greater, −3/4 or −2/3?", a: "LCM of 4 and 3 is 12. −3/4 = −9/12 and −2/3 = −8/12. Since −8 > −9, **−2/3 is greater**." },
        { q: "Find a rational number between −1/2 and 1/3.", a: "Take their average: (−1/2 + 1/3) ÷ 2 = (−3/6 + 2/6) ÷ 2 = (−1/6) ÷ 2 = **−1/12**. Check: −6/12 < −1/12 < 4/12." }
      ],
      quiz: [
        {
          q: "Which of these is NOT a rational number?",
          options: ["0", "−7/3", "3/0", "0.75"],
          answer: 2,
          explain: "In p/q the denominator q cannot be 0, so 3/0 is not defined. The others are rational: 0 = 0/1 and 0.75 = 3/4."
        },
        {
          q: "The standard form of −15/35 is:",
          options: ["−3/7", "3/7", "3/−7", "−7/3"],
          answer: 0,
          explain: "HCF of 15 and 35 is 5, so −15/35 = −3/7. The denominator is positive and the numerator and denominator have no common factor."
        },
        {
          q: "−2/5 + 3/10 = ?",
          options: ["1/10", "−1/5", "−5/15", "−1/10"],
          answer: 3,
          explain: "−2/5 = −4/10, so −4/10 + 3/10 = −1/10."
        },
        {
          q: "The additive inverse of −7/9 is:",
          options: ["−7/9", "7/9", "9/7", "−9/7"],
          answer: 1,
          explain: "The additive inverse changes the sign: −7/9 + 7/9 = 0."
        },
        {
          q: "The reciprocal of −3/8 is:",
          options: ["−8/3", "8/3", "3/8", "−3/8"],
          answer: 0,
          explain: "Turn the fraction upside down and keep the sign: −8/3. Check: (−3/8) × (−8/3) = 1."
        },
        {
          q: "(−3/4) × (8/9) = ?",
          options: ["2/3", "−3/2", "−2/3", "−11/13"],
          answer: 2,
          explain: "(−3 × 8)/(4 × 9) = −24/36 = −2/3."
        }
      ]
    },

    // ───────────────────────────── 9. Perimeter and Area ─────────────────────────────
    {
      id: "perimeter-and-area",
      title: "Perimeter and Area",
      section: "Measurement",
      summary: "Find the boundary length and the surface area of rectangles, squares, parallelograms, triangles and circles, and learn the units used to measure them.",
      notes: [
        {
          heading: "Rectangles and squares",
          points: [
            "**Perimeter** is the length of the boundary, like the fencing needed around a field. **Area** is the surface inside it, measured in square units.",
            "Rectangle: perimeter = 2(l + b) and area = l × b. Square of side a: perimeter = 4a and area = a².",
            "Perimeter is in cm, m or km, but area is in cm², m² or km².",
            "A field 50 m × 30 m has perimeter 2(50 + 30) = 160 m and area 50 × 30 = 1500 m²."
          ]
        },
        {
          heading: "Parallelograms and triangles",
          points: [
            "Area of a parallelogram = base × height. The height is the **perpendicular** distance between the parallel sides, not the slanting side.",
            "A parallelogram can be cut and rearranged into a rectangle with the same base and height, so their areas are equal.",
            "A diagonal divides a parallelogram into two equal triangles. So the area of a triangle = ½ × base × height.",
            "Any side of a triangle can be the base, as long as the height is the matching altitude."
          ]
        },
        {
          heading: "Circles",
          points: [
            "The **circumference** is the perimeter of a circle: C = 2πr = πd, where r is the radius and d = 2r is the diameter.",
            "Area of a circle = πr².",
            "π is the ratio circumference ÷ diameter. It is the same for every circle and is about 22/7 or 3.14.",
            "If the diameter is given, halve it to get the radius before using the formulas."
          ]
        },
        {
          heading: "Units and combined shapes",
          points: [
            "1 m² = 10,000 cm². 1 hectare = 10,000 m². 1 km² = 10,00,000 m².",
            "For an L-shaped or other combined figure, split it into rectangles and triangles, find each area and add them.",
            "Area of a path around a field = area of the outer rectangle − area of the inner rectangle.",
            "Always check that all lengths are in the same unit before you calculate."
          ]
        }
      ],
      formulas: [
        "Rectangle: perimeter = 2(l + b);  area = l × b",
        "Square: perimeter = 4a;  area = a²",
        "Parallelogram: area = base × height",
        "Triangle: area = ½ × base × height",
        "Circle: circumference = 2πr;  area = πr²   (π ≈ 22/7 or 3.14)",
        "1 m² = 10,000 cm²;  1 hectare = 10,000 m²"
      ],
      terms: [
        { term: "Perimeter", meaning: "The total length of the boundary of a closed figure." },
        { term: "Area", meaning: "The amount of surface enclosed by a figure, measured in square units." },
        { term: "Circumference", meaning: "The perimeter of a circle, equal to 2πr." },
        { term: "Radius", meaning: "The distance from the centre of a circle to its boundary; half the diameter." },
        { term: "Height (altitude)", meaning: "The perpendicular distance from the base to the opposite side or vertex." },
        { term: "Parallelogram", meaning: "A four-sided figure whose opposite sides are parallel and equal." }
      ],
      examples: [
        {
          q: "A rectangular field is 50 m long and 30 m wide. Find its perimeter and area, and the cost of fencing it once at ₹ 25 per metre.",
          steps: [
            "Perimeter = 2(50 + 30) = 2 × 80 = 160 m",
            "Area = 50 × 30 = 1500 m²",
            "Cost of fencing = 160 × 25 = ₹ 4000"
          ],
          answer: "Perimeter = 160 m, area = 1500 m², cost = ₹ 4000"
        },
        {
          q: "A circular park has a radius of 14 m. Find its circumference and area (use π = 22/7).",
          steps: [
            "Circumference = 2 × 22/7 × 14 = 2 × 22 × 2 = 88 m",
            "Area = 22/7 × 14 × 14 = 22 × 2 × 14 = 616 m²"
          ],
          answer: "Circumference = 88 m, area = 616 m²"
        }
      ],
      qa: [
        { q: "Why do we use the perpendicular height, not the slanting side, to find the area of a parallelogram?", a: "Cutting a triangle from one end and moving it to the other end turns the parallelogram into a rectangle whose width is the **perpendicular height**. So a parallelogram with base 10 cm and height 5 cm has area 50 cm², even if its slanting side is 6 cm." },
        { q: "Find the area of a triangle with base 12 cm and height 7 cm.", a: "Area = ½ × base × height = ½ × 12 × 7 = 6 × 7 = **42 cm²**." },
        { q: "A square has a perimeter of 36 cm. Find its area.", a: "Side = 36 ÷ 4 = 9 cm. Area = 9 × 9 = **81 cm²**." }
      ],
      quiz: [
        {
          q: "The perimeter of a rectangle 12 cm long and 7 cm wide is:",
          options: ["19 cm", "38 cm", "84 cm", "24 cm"],
          answer: 1,
          explain: "Perimeter = 2(12 + 7) = 2 × 19 = 38 cm. (84 would be the area, in cm².)"
        },
        {
          q: "The area of a square of side 9 m is:",
          options: ["36 m²", "18 m²", "27 m²", "81 m²"],
          answer: 3,
          explain: "Area = side × side = 9 × 9 = 81 m². (36 m is the perimeter.)"
        },
        {
          q: "A triangle has base 10 cm and height 6 cm. Its area is:",
          options: ["30 cm²", "60 cm²", "16 cm²", "32 cm²"],
          answer: 0,
          explain: "Area = ½ × 10 × 6 = 30 cm². Forgetting the ½ gives 60 cm²."
        },
        {
          q: "A parallelogram has base 8 cm, height 5 cm and a slanting side of 6 cm. Its area is:",
          options: ["48 cm²", "26 cm²", "40 cm²", "20 cm²"],
          answer: 2,
          explain: "Area = base × perpendicular height = 8 × 5 = 40 cm². The slanting side is not used."
        },
        {
          q: "The circumference of a circle of radius 7 cm (π = 22/7) is:",
          options: ["22 cm", "154 cm", "14 cm", "44 cm"],
          answer: 3,
          explain: "C = 2πr = 2 × 22/7 × 7 = 44 cm. (154 is the area in cm².)"
        },
        {
          q: "The area of a circle of diameter 14 cm (π = 22/7) is:",
          options: ["44 cm²", "154 cm²", "616 cm²", "308 cm²"],
          answer: 1,
          explain: "Radius = 14 ÷ 2 = 7 cm. Area = πr² = 22/7 × 7 × 7 = 154 cm². (616 comes from wrongly using 14 as the radius.)"
        }
      ]
    },

    // ───────────────────────────── 10. Algebraic Expressions ─────────────────────────────
    {
      id: "algebraic-expressions",
      title: "Algebraic Expressions",
      section: "Algebra",
      summary: "Learn the parts of an algebraic expression, how to add and subtract like terms, how to find the value of an expression and how letters describe number patterns.",
      notes: [
        {
          heading: "Terms and coefficients",
          points: [
            "An **expression** is made from variables and constants joined by +, −, × and ÷. Example: 4x² − 3x + 7.",
            "The parts that are added or subtracted are **terms**: 4x², −3x and 7. The number multiplying the variable is its **coefficient**: 4 for x² and −3 for x.",
            "Monomial: 1 term (5y). Binomial: 2 terms (a + b). Trinomial: 3 terms (x² + 2x + 1).",
            "**Like terms** have the same variables with the same powers: 3x and −5x are like terms, but 3x and 3x² are not."
          ]
        },
        {
          heading: "Adding and subtracting expressions",
          points: [
            "Only like terms can be added or subtracted: 7ab + 2ab = 9ab, but 7ab + 2a cannot be combined.",
            "To add expressions, group the like terms: (3x + 2) + (5x − 7) = 8x − 5.",
            "To subtract an expression, change the sign of every term in it and then add: (7a − b) − (2a + 5b) = 7a − b − 2a − 5b = 5a − 6b.",
            "Common mistake: a − (b − c) = a − b + c, not a − b − c."
          ]
        },
        {
          heading: "Value of an expression",
          points: [
            "Put the given number in place of the variable and calculate. For 3x² − 2x + 5 at x = −2: 3(4) + 4 + 5 = 21.",
            "Use brackets when you substitute a negative number: (−2)² = 4, but −2² = −4.",
            "The value changes with the variable: 2n + 1 is 3 when n = 1 and 11 when n = 5."
          ]
        },
        {
          heading: "Expressions for patterns and formulas",
          points: [
            "An even number is 2n and an odd number is 2n + 1, where n is a whole number.",
            "The perimeter of a square of side a is 4a, and the perimeter of a rectangle is 2(l + b).",
            "Squares made with matchsticks in a row need 3n + 1 sticks for n squares: 4, 7, 10, 13, …",
            "A rule written in letters works for every case at once, so it is shorter than listing the cases."
          ]
        }
      ],
      formulas: [
        "ax + bx = (a + b)x   (like terms only)",
        "a − (b − c) = a − b + c",
        "Even number: 2n;  odd number: 2n + 1",
        "Perimeter of a square = 4a;  of a rectangle = 2(l + b)",
        "Matchstick squares in a row: 3n + 1 sticks for n squares"
      ],
      terms: [
        { term: "Variable", meaning: "A letter, like x or n, that can take different values." },
        { term: "Coefficient", meaning: "The number that multiplies a variable in a term. In 5x² it is 5." },
        { term: "Like terms", meaning: "Terms having the same variables with the same powers, e.g. 4xy and −9xy." },
        { term: "Monomial", meaning: "An expression with exactly one term, e.g. 6y²." },
        { term: "Binomial", meaning: "An expression with exactly two terms, e.g. 2a + 3b." },
        { term: "Trinomial", meaning: "An expression with exactly three terms, e.g. x² − 5x + 6." }
      ],
      examples: [
        {
          q: "Add 3x² − 5x + 2 and x² + 4x − 7.",
          steps: [
            "Group the like terms: (3x² + x²) + (−5x + 4x) + (2 − 7)",
            "= 4x² + (−x) + (−5)"
          ],
          answer: "4x² − x − 5"
        },
        {
          q: "Subtract (2a + 5b − 3) from (7a − b + 4).",
          steps: [
            "(7a − b + 4) − (2a + 5b − 3) = 7a − b + 4 − 2a − 5b + 3",
            "Group like terms: (7a − 2a) + (−b − 5b) + (4 + 3)",
            "= 5a − 6b + 7"
          ],
          answer: "5a − 6b + 7"
        }
      ],
      qa: [
        { q: "Pick out the like terms: 4xy, −3x, 7xy, 2y, 9x.", a: "4xy and 7xy are like terms (both have xy). −3x and 9x are like terms (both have x). 2y has no like term in the list." },
        { q: "Find the value of 3x² − 2x + 5 when x = −2.", a: "3(−2)² − 2(−2) + 5 = 3 × 4 + 4 + 5 = 12 + 4 + 5 = **21**." },
        { q: "Squares are made side by side in a row with matchsticks. Write a rule for the number of sticks needed for n squares.", a: "The first square needs 4 sticks. Each extra square shares a side, so it needs only 3 more. For n squares: 4 + 3(n − 1) = **3n + 1** sticks. Check: 3 squares need 3 × 3 + 1 = 10 sticks." }
      ],
      quiz: [
        {
          q: "The coefficient of x² in 5x² − 3x + 2 is:",
          options: ["−3", "2", "x²", "5"],
          answer: 3,
          explain: "The coefficient is the number multiplying x², which is 5."
        },
        {
          q: "Which pair is a pair of like terms?",
          options: ["5x and 5y", "−4p² and 9p²", "3a and 3a²", "2xy and 2x"],
          answer: 1,
          explain: "Like terms have the same variable part. −4p² and 9p² both have p²."
        },
        {
          q: "The sum of (4x + 3) and (2x − 5) is:",
          options: ["6x + 8", "8x − 2", "6x − 2", "6x² − 2"],
          answer: 2,
          explain: "(4x + 2x) + (3 − 5) = 6x − 2."
        },
        {
          q: "(5a + 4) − (3a − 2) = ?",
          options: ["2a + 6", "2a + 2", "8a + 2", "2a − 6"],
          answer: 0,
          explain: "5a + 4 − 3a + 2 = 2a + 6. Both signs in the second bracket must change."
        },
        {
          q: "The value of 2x² − 3 when x = 3 is:",
          options: ["9", "15", "33", "21"],
          answer: 1,
          explain: "2x² = 2 × 3² = 2 × 9 = 18, and 18 − 3 = 15."
        },
        {
          q: "For every natural number n, which expression always gives an odd number?",
          options: ["2n", "n + 2", "3n", "2n + 1"],
          answer: 3,
          explain: "2n is always even, so 2n + 1 is always odd. The expressions n + 2 and 3n can be even or odd depending on n."
        }
      ]
    },

    // ───────────────────────────── 11. Exponents and Powers ─────────────────────────────
    {
      id: "exponents-and-powers",
      title: "Exponents and Powers",
      section: "Number",
      summary: "Exponents are a short way of writing repeated multiplication. We learn the laws of exponents and use powers of 10 to write very large numbers in standard form.",
      notes: [
        {
          heading: "Powers",
          points: [
            "aⁿ means a multiplied by itself n times: 2⁵ = 2 × 2 × 2 × 2 × 2 = 32. Here a is the **base** and n is the **exponent** (power).",
            "Negative base: (−2)³ = −8 (odd exponent gives a negative value) but (−2)⁴ = 16 (even exponent gives a positive value).",
            "a¹ = a, and a⁰ = 1 for every a ≠ 0.",
            "Base and exponent cannot be swapped: 2⁶ = 64 but 6² = 36."
          ]
        },
        {
          heading: "Laws of exponents (same base)",
          points: [
            "Multiplying: aᵐ × aⁿ = aᵐ⁺ⁿ. For example 2³ × 2⁵ = 2⁸.",
            "Dividing: aᵐ ÷ aⁿ = aᵐ⁻ⁿ. For example 5⁷ ÷ 5⁴ = 5³ = 125.",
            "Power of a power: (aᵐ)ⁿ = aᵐⁿ. For example (3²)³ = 3⁶ = 729.",
            "These laws need the **same base**. You cannot add exponents in 2³ × 3²."
          ]
        },
        {
          heading: "Laws with the same exponent",
          points: [
            "aᵐ × bᵐ = (ab)ᵐ. For example 2³ × 5³ = 10³ = 1000.",
            "aᵐ ÷ bᵐ = (a/b)ᵐ. For example 6⁴ ÷ 3⁴ = 2⁴ = 16.",
            "These laws make mental sums easy: 4² × 25² = (4 × 25)² = 100² = 10,000."
          ]
        },
        {
          heading: "Large numbers in standard form",
          points: [
            "Powers of 10: 10² = 100, 10³ = 1000, 10⁵ = 1,00,000 (one lakh) and 10⁷ = 1,00,00,000 (one crore).",
            "Expanded form: 47,561 = 4 × 10⁴ + 7 × 10³ + 5 × 10² + 6 × 10 + 1.",
            "**Standard form** means a decimal number between 1 and 10 multiplied by a power of 10. So 59,00,000 = 5.9 × 10⁶.",
            "The speed of light is about 3 × 10⁸ m/s and the Earth is about 1.5 × 10⁸ km from the Sun."
          ]
        }
      ],
      formulas: [
        "aᵐ × aⁿ = aᵐ⁺ⁿ",
        "aᵐ ÷ aⁿ = aᵐ⁻ⁿ   (a ≠ 0)",
        "(aᵐ)ⁿ = aᵐⁿ",
        "aᵐ × bᵐ = (ab)ᵐ;   aᵐ ÷ bᵐ = (a/b)ᵐ",
        "a⁰ = 1   (a ≠ 0);   a¹ = a",
        "Standard form: k × 10ⁿ with 1 ≤ k < 10"
      ],
      terms: [
        { term: "Base", meaning: "The number that is multiplied repeatedly. In 2⁵ the base is 2." },
        { term: "Exponent (power)", meaning: "The number that tells how many times the base is multiplied. In 2⁵ the exponent is 5." },
        { term: "Standard form", meaning: "A number written as a decimal between 1 and 10 times a power of 10, e.g. 3.84 × 10⁵." },
        { term: "Expanded form", meaning: "A number written as a sum of its digits times powers of 10, e.g. 352 = 3 × 10² + 5 × 10 + 2." },
        { term: "Power of 10", meaning: "10 multiplied by itself a number of times: 10, 100, 1000 and so on." }
      ],
      examples: [
        {
          q: "Simplify (2³ × 2⁵) ÷ 2⁴.",
          steps: [
            "Multiply with the same base: 2³ × 2⁵ = 2³⁺⁵ = 2⁸",
            "Divide: 2⁸ ÷ 2⁴ = 2⁸⁻⁴ = 2⁴",
            "2⁴ = 2 × 2 × 2 × 2 = 16"
          ],
          answer: "16"
        },
        {
          q: "The Moon is about 3,84,000 km from the Earth. Write this distance in standard form.",
          steps: [
            "Place the point so that one non-zero digit is before it: 3,84,000 = 3.84 × 1,00,000",
            "1,00,000 = 10⁵",
            "So 3,84,000 = 3.84 × 10⁵"
          ],
          answer: "3.84 × 10⁵ km"
        }
      ],
      qa: [
        { q: "Why is a⁰ = 1?", a: "By the division law, aᵐ ÷ aᵐ = aᵐ⁻ᵐ = a⁰. But any non-zero number divided by itself is 1, so **a⁰ = 1**. A pattern also shows it: 2³ = 8, 2² = 4, 2¹ = 2, and the next one in the pattern is 2⁰ = 1." },
        { q: "Is (−2)⁵ positive or negative? Find (−2)⁵ and (−2)⁶.", a: "A negative base with an odd exponent gives a negative value, and with an even exponent a positive value. (−2)⁵ = **−32** and (−2)⁶ = **64**." },
        { q: "Which is greater, 2⁶ or 6²?", a: "2⁶ = 2 × 2 × 2 × 2 × 2 × 2 = 64 and 6² = 36. So **2⁶ is greater**. Base and exponent cannot be swapped." }
      ],
      quiz: [
        {
          q: "The value of 3⁴ is:",
          options: ["81", "12", "64", "27"],
          answer: 0,
          explain: "3⁴ = 3 × 3 × 3 × 3 = 81. (12 is 3 × 4 and 64 is 4³.)"
        },
        {
          q: "7⁰ = ?",
          options: ["0", "7", "1", "70"],
          answer: 2,
          explain: "Any non-zero number raised to the power 0 equals 1."
        },
        {
          q: "2⁵ × 2² = ?",
          options: ["2¹⁰", "2⁷", "4⁷", "2³"],
          answer: 1,
          explain: "With the same base, add the exponents: 2⁵⁺² = 2⁷."
        },
        {
          q: "(5²)³ = ?",
          options: ["5⁵", "5⁸", "25⁵", "5⁶"],
          answer: 3,
          explain: "Power of a power: multiply the exponents (2 × 3 = 6), so (5²)³ = 5⁶."
        },
        {
          q: "4.5 × 10⁴ written as an ordinary number is:",
          options: ["4,500", "4,50,000", "45,000", "45,00,000"],
          answer: 2,
          explain: "10⁴ = 10,000, so 4.5 × 10,000 = 45,000."
        },
        {
          q: "(−3)³ = ?",
          options: ["−27", "27", "−9", "9"],
          answer: 0,
          explain: "(−3)³ = (−3) × (−3) × (−3) = 9 × (−3) = −27. An odd exponent keeps the negative sign."
        }
      ]
    },

    // ───────────────────────────── 12. Symmetry ─────────────────────────────
    {
      id: "symmetry",
      title: "Symmetry",
      section: "Geometry",
      summary: "A figure has line symmetry when it can be folded onto itself along a line, and rotational symmetry when it looks the same after a turn about a point.",
      notes: [
        {
          heading: "Line symmetry",
          points: [
            "A figure has **line symmetry** if a line can be drawn so that the two halves are mirror images and fit exactly on folding. That line is the line (axis) of symmetry.",
            "A regular polygon has as many lines of symmetry as sides: equilateral triangle 3, square 4, regular pentagon 5, regular hexagon 6.",
            "Others: rectangle 2, rhombus 2, isosceles triangle 1, kite 1, scalene triangle 0, general parallelogram 0. A circle has infinitely many (every diameter).",
            "Rangoli patterns, butterflies and the front view of the Taj Mahal show line symmetry."
          ]
        },
        {
          heading: "Rotational symmetry",
          points: [
            "A figure has **rotational symmetry** if it looks exactly the same after a turn of less than 360° about a fixed point, the **centre of rotation**.",
            "The smallest turn is the **angle of rotation**. The number of times the figure fits on itself during one full turn is its **order** of rotational symmetry.",
            "Angle of rotation = 360° ÷ order. A square has order 4 and angle 90°; an equilateral triangle has order 3 and angle 120°; a rectangle has order 2 and angle 180°.",
            "The Ashoka Chakra has 24 equal spokes, so it has rotational symmetry of order 24 (angle 15°)."
          ]
        },
        {
          heading: "Using both ideas",
          points: [
            "Both kinds: square, rectangle, circle and letters H, I, O, X.",
            "Line symmetry only: isosceles triangle (not equilateral), kite, letters A, M, T.",
            "Rotational symmetry only: parallelogram (not a rectangle or rhombus), letters S, N, Z.",
            "Neither: scalene triangle, letters F, G, R. Every figure fits on itself after a full turn of 360° (order 1), but we do not count that as real rotational symmetry."
          ]
        }
      ],
      formulas: [
        "A regular polygon with n sides has n lines of symmetry",
        "Order of rotational symmetry of a regular n-sided polygon = n",
        "Angle of rotation = 360° ÷ order of rotational symmetry",
        "Rectangle: 2 lines of symmetry and order 2;  circle: infinitely many lines",
        "Equilateral triangle: 3 lines and order 3;  square: 4 lines and order 4"
      ],
      terms: [
        { term: "Line of symmetry", meaning: "A line that divides a figure into two halves that are mirror images of each other." },
        { term: "Mirror image (reflection)", meaning: "The flipped copy of a figure, as seen in a mirror placed along the line of symmetry." },
        { term: "Rotational symmetry", meaning: "A figure looks the same after being turned by less than 360° about a fixed point." },
        { term: "Centre of rotation", meaning: "The fixed point about which a figure is turned." },
        { term: "Angle of rotation", meaning: "The smallest angle through which a figure must be turned to look the same." },
        { term: "Order of rotational symmetry", meaning: "The number of times a figure fits on itself in one complete turn." }
      ],
      examples: [
        {
          q: "For a regular hexagon, find the number of lines of symmetry, the order of rotational symmetry and the angle of rotation.",
          steps: [
            "A regular hexagon has 6 equal sides, so it has 6 lines of symmetry.",
            "Its order of rotational symmetry is also 6.",
            "Angle of rotation = 360° ÷ 6 = 60°"
          ],
          answer: "6 lines of symmetry, order 6, angle of rotation 60°"
        },
        {
          q: "A regular polygon has an angle of rotation of 40°. How many sides does it have?",
          steps: [
            "Order of rotational symmetry = 360° ÷ 40° = 9",
            "For a regular polygon, the number of sides equals the order, so it has 9 sides.",
            "It is a regular nonagon with 9 lines of symmetry."
          ],
          answer: "9 sides"
        }
      ],
      qa: [
        { q: "How many lines of symmetry does a rectangle have? Are its diagonals lines of symmetry?", a: "A rectangle has **2** lines of symmetry: the lines joining the midpoints of opposite sides. Its diagonals are not lines of symmetry, because folding along a diagonal does not make the two triangles fit exactly (unless the rectangle is a square)." },
        { q: "Does a parallelogram (not a rectangle or rhombus) have line symmetry? Does it have rotational symmetry?", a: "It has **no** line of symmetry. It does have rotational symmetry of order 2 about the point where its diagonals meet, with an angle of rotation of 180°." },
        { q: "Give one difference between line symmetry and rotational symmetry.", a: "Line symmetry is about **flipping** a figure over a line so that the halves match. Rotational symmetry is about **turning** a figure about a point so that it looks the same. The letter A has line symmetry only, and the letter S has rotational symmetry only." }
      ],
      quiz: [
        {
          q: "How many lines of symmetry does a square have?",
          options: ["1", "2", "4", "8"],
          answer: 2,
          explain: "A square has 4 lines: 2 through the midpoints of opposite sides and 2 along the diagonals."
        },
        {
          q: "A scalene triangle has how many lines of symmetry?",
          options: ["0", "1", "2", "3"],
          answer: 0,
          explain: "All three sides are different, so no fold makes the two halves match. It has no line of symmetry."
        },
        {
          q: "The order of rotational symmetry of an equilateral triangle is:",
          options: ["1", "2", "6", "3"],
          answer: 3,
          explain: "It fits on itself 3 times in a full turn (at 120°, 240° and 360°), so its order is 3."
        },
        {
          q: "The smallest angle of rotation of a square is:",
          options: ["45°", "90°", "180°", "360°"],
          answer: 1,
          explain: "A square has order 4, so the angle of rotation is 360° ÷ 4 = 90°."
        },
        {
          q: "Which letter has both line symmetry and rotational symmetry?",
          options: ["H", "S", "A", "F"],
          answer: 0,
          explain: "H has line symmetry (two lines) and rotational symmetry of order 2. S has rotational symmetry only, A has line symmetry only and F has neither."
        },
        {
          q: "Which figure has rotational symmetry but no line of symmetry?",
          options: ["Rectangle", "Rhombus", "Parallelogram (not a rectangle or rhombus)", "Square"],
          answer: 2,
          explain: "A general parallelogram looks the same after a half turn (order 2), but no fold makes its halves match. The rectangle, rhombus and square all have lines of symmetry."
        }
      ]
    },

    // ───────────────────────────── 13. Visualising Solid Shapes ─────────────────────────────
    {
      id: "visualising-solid-shapes",
      title: "Visualising Solid Shapes",
      section: "Geometry",
      summary: "Look at 3D shapes (solids): their faces, edges and vertices, the nets that fold into them, and how they look from different directions or when sliced.",
      notes: [
        {
          heading: "Plane figures and solids",
          points: [
            "Plane (2D) figures like squares and circles are flat. **Solids** (3D shapes) also have height or depth.",
            "Everyday solids: dice (cube), brick or matchbox (cuboid), tin can (cylinder), ice-cream cone (cone), cricket ball (sphere).",
            "A solid with flat faces and straight edges is a **polyhedron**: cube, cuboid, prisms and pyramids. Cylinder, cone and sphere are not polyhedra.",
            "A **prism** has two identical parallel bases joined by rectangles. A **pyramid** has one base and triangular faces meeting at a point called the apex."
          ]
        },
        {
          heading: "Faces, edges and vertices",
          points: [
            "A **face** is a flat surface, an **edge** is where two faces meet and a **vertex** is a corner where edges meet.",
            "Cube and cuboid: 6 faces, 12 edges, 8 vertices. Triangular prism: 5, 9, 6. Square pyramid: 5, 8, 5. Triangular pyramid: 4, 6, 4.",
            "**Euler's formula:** for any polyhedron, F + V − E = 2. Check for a cube: 6 + 8 − 12 = 2.",
            "A cylinder has 2 flat circular faces, 1 curved surface and no vertex. A cone has 1 flat face, 1 curved surface and 1 vertex. A sphere has only a curved surface."
          ]
        },
        {
          heading: "Nets",
          points: [
            "A **net** is a flat pattern that can be folded to make a solid. Cutting open a cardboard box along its edges shows its net.",
            "Cube: 6 squares. Cuboid: 6 rectangles. Triangular prism: 2 triangles and 3 rectangles. Square pyramid: 1 square and 4 triangles.",
            "Cylinder: 2 circles and 1 rectangle. Cone: 1 circle and 1 curved sector.",
            "One solid can have more than one net. A cube has 11 different nets."
          ]
        },
        {
          heading: "Different views and slices",
          points: [
            "A solid looks different from the front, the side and the top. A cube looks like a square from all three.",
            "An upright cylinder looks like a rectangle from the front and a circle from the top. A cone looks like a triangle from the front and a circle from the top. A sphere looks like a circle from every side.",
            "Slicing a solid gives a cross-section. A horizontal slice of a cylinder or a cone gives a circle.",
            "A vertical slice through the middle of a cylinder gives a rectangle, and a vertical slice of a cone through its apex gives a triangle."
          ]
        }
      ],
      formulas: [
        "Euler's formula: F + V − E = 2   (for polyhedra)",
        "Cube / cuboid: F = 6, V = 8, E = 12",
        "Triangular prism: F = 5, V = 6, E = 9",
        "Square pyramid: F = 5, V = 5, E = 8",
        "Triangular pyramid: F = 4, V = 4, E = 6"
      ],
      terms: [
        { term: "Face", meaning: "A flat surface of a solid." },
        { term: "Edge", meaning: "A line segment where two faces of a solid meet." },
        { term: "Vertex", meaning: "A corner of a solid where edges meet (plural: vertices)." },
        { term: "Net", meaning: "A flat, unfolded pattern that can be folded to make a solid." },
        { term: "Prism", meaning: "A solid with two identical parallel bases joined by rectangular faces." },
        { term: "Pyramid", meaning: "A solid with one base and triangular faces that meet at a point (the apex)." }
      ],
      examples: [
        {
          q: "A solid has 8 faces and 12 vertices. Use Euler's formula to find the number of edges.",
          steps: [
            "Euler's formula: F + V − E = 2",
            "8 + 12 − E = 2, so 20 − E = 2",
            "E = 18"
          ],
          answer: "18 edges (for example, a hexagonal prism)"
        },
        {
          q: "Find the number of faces, edges and vertices of a pentagonal pyramid.",
          steps: [
            "Faces: 1 pentagon base + 5 triangles = 6",
            "Vertices: 5 on the base + 1 apex = 6",
            "Edges: 5 on the base + 5 slanting edges = 10",
            "Check with Euler: 6 + 6 − 10 = 2 ✓"
          ],
          answer: "6 faces, 10 edges, 6 vertices"
        }
      ],
      qa: [
        { q: "What is the net of a cylinder?", a: "The net is **two circles** (top and base) and **one rectangle**. The length of the rectangle equals the circumference of the circle and its width equals the height of the cylinder. Rolled up, the rectangle forms the curved surface." },
        { q: "Which common solids have no vertex?", a: "A **sphere** and a **cylinder** have no vertex (corner). A cone has exactly one vertex, its apex." },
        { q: "What shape do you get by cutting a cone horizontally? And by a vertical cut through its apex?", a: "A horizontal cut (parallel to the base) gives a **circle**. A vertical cut through the apex and the centre of the base gives a **triangle**." }
      ],
      quiz: [
        {
          q: "A solid has 7 vertices and 12 edges. By Euler's formula, its number of faces is:",
          options: ["5", "7", "9", "19"],
          answer: 1,
          explain: "F + V − E = 2, so F = 2 − V + E = 2 − 7 + 12 = 7. (A hexagonal pyramid is such a solid.)"
        },
        {
          q: "How many edges does a cuboid have?",
          options: ["6", "8", "10", "12"],
          answer: 3,
          explain: "A cuboid has 12 edges: 4 on the top, 4 on the bottom and 4 vertical ones. It has 6 faces and 8 vertices."
        },
        {
          q: "How many vertices does a triangular prism have?",
          options: ["6", "5", "9", "3"],
          answer: 0,
          explain: "A triangular prism has 3 vertices on each triangular end, so 6 in all. (It has 5 faces and 9 edges.)"
        },
        {
          q: "A square pyramid has how many faces?",
          options: ["4", "6", "5", "8"],
          answer: 2,
          explain: "It has 1 square base and 4 triangular faces, so 5 faces."
        },
        {
          q: "An upright cylinder (like a tin can) is viewed from the side. It looks like a:",
          options: ["Circle", "Triangle", "Semicircle", "Rectangle"],
          answer: 3,
          explain: "From the side the curved surface looks like a rectangle. From the top it would look like a circle."
        },
        {
          q: "A net made of 2 triangles and 3 rectangles folds into a:",
          options: ["Square pyramid", "Triangular prism", "Cuboid", "Triangular pyramid"],
          answer: 1,
          explain: "A triangular prism has two triangular ends and three rectangular faces. A square pyramid has 1 square and 4 triangles, and a cuboid has 6 rectangles."
        }
      ]
    }
  ]
});
