// Class 6 Mathematics: current NCERT textbook "Ganita Prakash".
// Format: see CONTENT_GUIDE.md
StudyData.add(6, "maths", {
  // What this content follows. match: "textbook" | "older-book" | "topic". Set reviewed to a date once a teacher has checked it.
  syllabus: {board: "CBSE", match: "textbook", books: ["Ganita Prakash"], reviewed: false},
  chapters: [
    // ───────────────────────────── 1. Patterns in Mathematics ─────────────────────────────
    {
      id: "patterns-in-mathematics",
      title: "Patterns in Mathematics",
      section: "Patterns and Algebra",
      summary: "Numbers and shapes follow patterns. In this chapter we look for the rule behind a sequence, meet triangular, square and cube numbers and the Virahanka–Fibonacci numbers, and see how different patterns are linked.",
      notes: [
        {
          heading: "Number sequences",
          points: [
            "A **sequence** is a list of numbers that follows a rule. Each number in the list is called a **term**.",
            "Counting numbers: 1, 2, 3, 4, … Odd numbers: 1, 3, 5, 7, … Even numbers: 2, 4, 6, 8, …",
            "To find the rule, look at the **difference** between neighbouring terms. In 5, 9, 13, 17, … we add 4 every time.",
            "Once you know the rule you can predict any later term. After 17 comes 21, then 25, and so on."
          ]
        },
        {
          heading: "Triangular, square and cube numbers",
          points: [
            "**Triangular numbers** 1, 3, 6, 10, 15, 21, … are the numbers of dots that can be arranged in a triangle with rows of 1, 2, 3, 4, … dots. The 5th one is 1 + 2 + 3 + 4 + 5 = 15.",
            "**Square numbers** 1, 4, 9, 16, 25, … come from dots arranged in a square: the nth square number is n × n.",
            "**Cube numbers** 1, 8, 27, 64, 125, … come from n × n × n. For example, 4 × 4 × 4 = 64.",
            "A number can belong to two sequences: 1 is a triangular, square and cube number, and 36 is both a triangular and a square number."
          ]
        },
        {
          heading: "Links between patterns",
          points: [
            "The sum of the first n odd numbers is n × n. For example, 1 + 3 + 5 + 7 = 16 = 4 × 4.",
            "Two neighbouring triangular numbers add up to a square number: 6 + 10 = 16 and 10 + 15 = 25.",
            "Each square number is the previous square plus the next odd number: 16 + 9 = 25.",
            "Each triangular number is the previous one plus its position: 10 + 5 = 15."
          ]
        },
        {
          heading: "Virahanka–Fibonacci numbers and doubling",
          points: [
            "In 1, 2, 3, 5, 8, 13, 21, 34, … each term is the **sum of the two terms before it**. For example, 8 + 13 = 21.",
            "Ancient Indian scholars met these numbers while counting rhythms made of short (1 beat) and long (2 beats) sounds in poetry and music. A 4-beat rhythm can be made in 5 ways.",
            "They are called the **Virahanka–Fibonacci numbers**.",
            "In 1, 2, 4, 8, 16, 32, … each term is double the one before it (powers of 2)."
          ]
        },
        {
          heading: "Patterns in shapes",
          points: [
            "Matchstick squares in a row: 1 square needs 4 sticks, 2 squares need 7, 3 squares need 10. Each new square adds 3 sticks, so n squares need 3 × n + 1 sticks.",
            "A rangoli with 1 dot in the first row, 3 in the second, 5 in the third and 7 in the fourth has 1 + 3 + 5 + 7 = 16 dots, which is 4 × 4.",
            "Drawing the first few shapes and counting helps us spot the rule before we predict a later shape."
          ]
        }
      ],
      formulas: [
        "nth odd number = 2 × n − 1;  nth even number = 2 × n",
        "nth triangular number = 1 + 2 + 3 + … + n = n × (n + 1) ÷ 2",
        "nth square number = n × n;  nth cube number = n × n × n",
        "Sum of the first n odd numbers = n × n",
        "Virahanka–Fibonacci rule: each term = sum of the previous two terms",
        "Matchstick squares in a row: number of sticks = 3 × n + 1"
      ],
      terms: [
        { term: "Sequence", meaning: "A list of numbers arranged according to a rule, e.g. 2, 4, 6, 8, …" },
        { term: "Term", meaning: "Each number in a sequence. In 3, 6, 9, 12 the second term is 6." },
        { term: "Triangular number", meaning: "A number of dots that can be arranged in a triangle: 1, 3, 6, 10, 15, … (add 2, then 3, then 4, …)." },
        { term: "Square number", meaning: "A number got by multiplying a counting number by itself: 1, 4, 9, 16, 25, …" },
        { term: "Cube number", meaning: "A number got by multiplying a counting number three times: 1, 8, 27, 64, 125, …" },
        { term: "Virahanka–Fibonacci numbers", meaning: "The sequence 1, 2, 3, 5, 8, 13, … in which each term is the **sum of the two terms before it**." }
      ],
      examples: [
        {
          q: "Find the rule and the next three numbers in the sequence 3, 7, 11, 15, …",
          steps: [
            "Differences: 7 − 3 = 4, 11 − 7 = 4, 15 − 11 = 4. The difference is always 4.",
            "Rule: add 4 to get the next term.",
            "15 + 4 = 19, 19 + 4 = 23, 23 + 4 = 27."
          ],
          answer: "Rule: add 4. The next three terms are 19, 23 and 27."
        },
        {
          q: "Find the sum of the first 8 odd numbers without adding them one by one.",
          steps: [
            "The sum of the first n odd numbers is n × n.",
            "Here n = 8, so the sum is 8 × 8 = 64.",
            "Check by pairing: 1 + 15 = 16, 3 + 13 = 16, 5 + 11 = 16, 7 + 9 = 16, and 4 × 16 = 64."
          ],
          answer: "1 + 3 + 5 + 7 + 9 + 11 + 13 + 15 = 64"
        }
      ],
      qa: [
        { q: "Why are the numbers 1, 3, 6, 10, 15 called triangular numbers?", a: "Because that many dots can be arranged in a **triangle**, with rows of 1, 2, 3, 4, 5 dots. Each new triangular number is made by adding a new row, which has one more dot than the last row: 10 + 5 = 15." },
        { q: "Show with an example that two neighbouring triangular numbers add up to a square number.", a: "Take 10 and 15: 10 + 15 = 25 = 5 × 5. Similarly 3 + 6 = 9 = 3 × 3 and 15 + 21 = 36 = 6 × 6. Two triangles of dots fit together to make a square." },
        { q: "How is the Virahanka–Fibonacci sequence built? Write its first 8 terms.", a: "Start with 1 and 2. Every next term is the **sum of the two terms before it**. The first 8 terms are 1, 2, 3, 5, 8, 13, 21, 34." }
      ],
      quiz: [
        {
          q: "What is the next number in the sequence 1, 4, 9, 16, 25, …?",
          options: ["30", "36", "35", "49"],
          answer: 1,
          explain: "These are square numbers: 1×1, 2×2, 3×3, 4×4, 5×5. The next is 6 × 6 = 36."
        },
        {
          q: "What is the 6th triangular number?",
          options: ["15", "18", "21", "28"],
          answer: 2,
          explain: "1 + 2 + 3 + 4 + 5 + 6 = 21. (15 is the 5th and 28 is the 7th triangular number.)"
        },
        {
          q: "What is the sum of the first 5 odd numbers (1 + 3 + 5 + 7 + 9)?",
          options: ["20", "30", "45", "25"],
          answer: 3,
          explain: "The sum of the first n odd numbers is n × n, so it is 5 × 5 = 25."
        },
        {
          q: "In the Virahanka–Fibonacci sequence 1, 2, 3, 5, 8, 13, … the next number is:",
          options: ["21", "18", "20", "26"],
          answer: 0,
          explain: "Each term is the sum of the previous two: 8 + 13 = 21."
        },
        {
          q: "Which of these is a cube number?",
          options: ["9", "27", "16", "30"],
          answer: 1,
          explain: "27 = 3 × 3 × 3. The numbers 9 and 16 are square numbers, and 30 is neither a square nor a cube."
        },
        {
          q: "Matchsticks are used to make squares in a row. One square needs 4 sticks and each new square needs 3 more. How many sticks are needed for 5 squares?",
          options: ["15", "20", "17", "16"],
          answer: 3,
          explain: "Sticks = 3 × 5 + 1 = 16. Check: 4, 7, 10, 13, 16."
        }
      ]
    },

    // ───────────────────────────── 2. Lines and Angles ─────────────────────────────
    {
      id: "lines-and-angles",
      title: "Lines and Angles",
      section: "Geometry",
      summary: "We learn the difference between a point, a line segment, a ray and a line, see how lines can be intersecting, parallel or perpendicular, and learn to name, measure and classify angles.",
      notes: [
        {
          heading: "Point, line segment, ray and line",
          points: [
            "A **point** marks an exact position. It has no size and is named with a capital letter such as A.",
            "A **line segment** AB has two end points and a fixed length, like the edge of a ruler.",
            "A **ray** starts at one point and goes on forever in one direction, like a beam of torch light.",
            "A **line** goes on forever in both directions and has no end points.",
            "Through two given points there is exactly one straight line."
          ]
        },
        {
          heading: "Intersecting, parallel and perpendicular lines",
          points: [
            "Two lines that cross at a point are **intersecting** lines.",
            "Two lines on a flat surface that never meet, however far they are extended, are **parallel** lines. They stay the same distance apart, like railway tracks.",
            "Two lines that meet at 90° are **perpendicular** lines, like the corner of a notebook."
          ]
        },
        {
          heading: "What is an angle?",
          points: [
            "An **angle** is formed when two rays start from the same point. The point is the **vertex** and the rays are the **arms**.",
            "∠ABC is the angle with vertex B, with arms along BA and BC.",
            "We measure angles in **degrees** (°) using a protractor.",
            "A quarter turn is 90°, a half turn is 180° and a full turn is 360°."
          ]
        },
        {
          heading: "Types of angles",
          points: [
            "**Acute** angle: less than 90°. **Right** angle: exactly 90°.",
            "**Obtuse** angle: more than 90° but less than 180°. **Straight** angle: exactly 180°.",
            "**Reflex** angle: more than 180° but less than 360°. A **complete** angle is exactly 360°.",
            "To measure with a protractor, put its centre on the vertex and its zero line along one arm, then read where the other arm cuts the scale that starts from 0."
          ]
        },
        {
          heading: "Angles on a clock",
          points: [
            "A clock face is a full turn of 360°, divided into 12 equal gaps, so each hour gap is 360° ÷ 12 = 30°.",
            "At 3 o'clock the hands make 90°. At 2 o'clock they make 60°, and at 6 o'clock they make 180°.",
            "The minute hand covers 360° in 60 minutes, so it turns 6° every minute. In 15 minutes it turns 90°."
          ]
        }
      ],
      formulas: [
        "Right angle = 90°;  straight angle = 180°;  complete turn = 360°",
        "Acute: 0° < angle < 90°;  Obtuse: 90° < angle < 180°;  Reflex: 180° < angle < 360°",
        "Angle between the clock hands at n o'clock = n × 30°  (for n up to 6)",
        "Minute hand turns 6° every minute;  hour gap on a clock = 30°"
      ],
      terms: [
        { term: "Line segment", meaning: "A part of a line with two end points and a definite length." },
        { term: "Ray", meaning: "A part of a line that has one starting point and goes on forever in one direction." },
        { term: "Parallel lines", meaning: "Lines in the same flat surface that never meet and are always the same distance apart." },
        { term: "Perpendicular lines", meaning: "Two lines that meet at a right angle (90°)." },
        { term: "Vertex", meaning: "The common starting point of the two arms of an angle." },
        { term: "Reflex angle", meaning: "An angle that is more than 180° and less than 360°." }
      ],
      examples: [
        {
          q: "Name the type of each angle: 35°, 90°, 120°, 180°, 250°.",
          steps: [
            "35° is less than 90°, so it is acute.",
            "90° is a right angle.",
            "120° lies between 90° and 180°, so it is obtuse.",
            "180° is a straight angle.",
            "250° lies between 180° and 360°, so it is reflex."
          ],
          answer: "Acute, right, obtuse, straight, reflex."
        },
        {
          q: "What is the angle between the hands of a clock at 4 o'clock? What type of angle is it?",
          steps: [
            "At 4 o'clock the minute hand points at 12 and the hour hand points at 4.",
            "There are 4 hour gaps between them and each gap is 30°.",
            "Angle = 4 × 30° = 120°.",
            "120° is between 90° and 180°, so it is obtuse."
          ],
          answer: "120°, an obtuse angle."
        }
      ],
      qa: [
        { q: "How are a line segment, a ray and a line different?", a: "A **line segment** has two end points and a fixed length. A **ray** has one end point and goes on forever in one direction. A **line** has no end points and goes on forever in both directions." },
        { q: "What are perpendicular lines? Give two examples from daily life.", a: "Perpendicular lines are two lines that meet at a **right angle (90°)**. Examples: two adjacent edges of a notebook, and the corner where a wall meets the floor." },
        { q: "How many degrees does the minute hand of a clock turn in 20 minutes? What type of angle is this?", a: "The minute hand turns 6° every minute, so in 20 minutes it turns 20 × 6° = 120°. This is an obtuse angle." }
      ],
      quiz: [
        {
          q: "An angle of 135° is:",
          options: ["Obtuse", "Acute", "Right", "Reflex"],
          answer: 0,
          explain: "135° is more than 90° and less than 180°, so it is an obtuse angle."
        },
        {
          q: "A straight angle measures:",
          options: ["90°", "180°", "270°", "360°"],
          answer: 1,
          explain: "A straight angle is a half turn, which is 180°."
        },
        {
          q: "Which of these is a reflex angle?",
          options: ["60°", "90°", "270°", "150°"],
          answer: 2,
          explain: "A reflex angle is between 180° and 360°. Only 270° is in that range."
        },
        {
          q: "What is the angle between the hands of a clock at 2 o'clock?",
          options: ["60°", "30°", "90°", "120°"],
          answer: 0,
          explain: "There are 2 hour gaps of 30° each, so the angle is 2 × 30° = 60°."
        },
        {
          q: "How many end points does a ray have?",
          options: ["None", "Two", "Three", "One"],
          answer: 3,
          explain: "A ray starts at one point (its end point) and goes on forever in one direction."
        },
        {
          q: "How many right angles make one complete turn?",
          options: ["3", "4", "2", "6"],
          answer: 1,
          explain: "A complete turn is 360° and each right angle is 90°, so 360 ÷ 90 = 4 right angles."
        }
      ]
    },

    // ───────────────────────────── 3. Number Play ─────────────────────────────
    {
      id: "number-play",
      title: "Number Play",
      section: "Number",
      summary: "We play with numbers to find out how they behave: odd and even sums, clever ways of adding, palindromes, and famous number games such as the Collatz sequence and Kaprekar's 6174.",
      notes: [
        {
          heading: "Odd and even numbers",
          points: [
            "A number is **even** if it can be split into pairs with nothing left over (2, 4, 6, …). It is **odd** if one is left over (1, 3, 5, …).",
            "The last digit tells us: a number ending in 0, 2, 4, 6 or 8 is even; one ending in 1, 3, 5, 7 or 9 is odd.",
            "Even + even = even, odd + odd = even, and even + odd = odd.",
            "Odd + odd is even because each odd number has one left over, and the two left-overs make a pair.",
            "A product is odd only when both the numbers are odd. If either number is even, the product is even."
          ]
        },
        {
          heading: "Pairing and grouping",
          points: [
            "To add 1 + 2 + 3 + … + 10, pair the first with the last: 1 + 10, 2 + 9, 3 + 8, … Each pair makes 11 and there are 5 pairs, so the sum is 5 × 11 = 55.",
            "In general 1 + 2 + 3 + … + n = n × (n + 1) ÷ 2.",
            "The sum of three consecutive numbers is 3 times the middle number: 14 + 15 + 16 = 45 = 3 × 15.",
            "The sum of five consecutive numbers is 5 times the middle number: 8 + 9 + 10 + 11 + 12 = 50 = 5 × 10."
          ]
        },
        {
          heading: "Palindromes and reverse-and-add",
          points: [
            "A **palindrome** reads the same from both ends: 121, 4554, 7. Words such as MADAM are palindromes too.",
            "**Reverse and add**: reverse the digits of a number, add the two numbers, and repeat until a palindrome appears.",
            "Example: 57 + 75 = 132, then 132 + 231 = 363, which is a palindrome.",
            "Some numbers reach a palindrome in one step and some take many steps."
          ]
        },
        {
          heading: "Collatz and Kaprekar number games",
          points: [
            "**Collatz rule**: if the number is even, halve it; if it is odd, multiply by 3 and add 1. Start with 6: 6 → 3 → 10 → 5 → 16 → 8 → 4 → 2 → 1.",
            "Every starting number people have tried ends at 1, but nobody has been able to prove that this always happens.",
            "**Kaprekar's game**: take a 4-digit number whose digits are not all the same. Make the largest and the smallest number from its digits and subtract. Repeat.",
            "You always reach **6174** within 7 steps. Example: 3524 → 5432 − 2345 = 3087 → 8730 − 0378 = 8352 → 8532 − 2358 = 6174."
          ]
        },
        {
          heading: "Quick checks using the last digit",
          points: [
            "A number is divisible by **2** if its last digit is 0, 2, 4, 6 or 8.",
            "A number is divisible by **5** if its last digit is 0 or 5.",
            "A number is divisible by **10** if its last digit is 0.",
            "So a number divisible by both 2 and 5 must end in 0."
          ]
        }
      ],
      formulas: [
        "Even + even = even;  odd + odd = even;  even + odd = odd",
        "1 + 2 + 3 + … + n = n × (n + 1) ÷ 2",
        "Sum of three consecutive numbers = 3 × the middle number",
        "Collatz rule: even → halve it;  odd → 3 × number + 1",
        "Kaprekar's constant = 6174"
      ],
      terms: [
        { term: "Even number", meaning: "A number that can be split into pairs with nothing left over. It ends in 0, 2, 4, 6 or 8." },
        { term: "Odd number", meaning: "A number that leaves one left over when split into pairs. It ends in 1, 3, 5, 7 or 9." },
        { term: "Palindrome", meaning: "A number (or word) that reads the same forwards and backwards, e.g. 1331." },
        { term: "Consecutive numbers", meaning: "Numbers that follow one another without a gap, e.g. 14, 15, 16." },
        { term: "Collatz sequence", meaning: "A list made by halving an even number or doing 3 × number + 1 on an odd number, again and again." },
        { term: "Kaprekar's constant", meaning: "The number 6174, which the largest-minus-smallest game always reaches for 4-digit numbers." }
      ],
      examples: [
        {
          q: "Find 1 + 2 + 3 + … + 20 by pairing.",
          steps: [
            "Pair the first with the last: 1 + 20 = 21, 2 + 19 = 21, 3 + 18 = 21, and so on.",
            "There are 20 numbers, so there are 10 pairs.",
            "Each pair adds up to 21, so the total is 10 × 21 = 210.",
            "Check with the formula: 20 × 21 ÷ 2 = 210."
          ],
          answer: "1 + 2 + 3 + … + 20 = 210"
        },
        {
          q: "Use reverse-and-add on 57 until you get a palindrome.",
          steps: [
            "Reverse 57 to get 75. Add: 57 + 75 = 132. It is not a palindrome.",
            "Reverse 132 to get 231. Add: 132 + 231 = 363.",
            "363 reads the same both ways, so it is a palindrome."
          ],
          answer: "363, reached in 2 steps."
        }
      ],
      qa: [
        { q: "Explain why the sum of two odd numbers is always even.", a: "An odd number is some pairs plus **one left over**. When we add two odd numbers, all the pairs stay as pairs, and the two left-over ones form one more pair. So nothing is left over and the sum is even. Example: 7 + 9 = 16." },
        { q: "Write the Collatz sequence that starts from 10.", a: "10 is even, so halve it: 5. 5 is odd, so 3 × 5 + 1 = 16. Then 8, 4, 2 and 1. The sequence is 10, 5, 16, 8, 4, 2, 1." },
        { q: "Using the middle-number trick, find 29 + 30 + 31 without adding step by step.", a: "The sum of three consecutive numbers is 3 times the middle number. The middle number is 30, so the sum is 3 × 30 = 90." }
      ],
      quiz: [
        {
          q: "The sum of two odd numbers is always:",
          options: ["Odd", "Even", "A multiple of 3", "A multiple of 4"],
          answer: 1,
          explain: "The two left-over ones pair up, so the sum is even. (It is not always a multiple of 4: 3 + 3 = 6.)"
        },
        {
          q: "What is 1 + 2 + 3 + … + 10?",
          options: ["50", "45", "60", "55"],
          answer: 3,
          explain: "5 pairs, each adding up to 11: 5 × 11 = 55."
        },
        {
          q: "Which of these numbers is a palindrome?",
          options: ["1231", "1212", "1221", "1122"],
          answer: 2,
          explain: "1221 reversed is 1221. The others change when reversed (1212 becomes 2121)."
        },
        {
          q: "By the Collatz rule, which number comes after 7?",
          options: ["22", "8", "14", "21"],
          answer: 0,
          explain: "7 is odd, so we do 3 × 7 + 1 = 22."
        },
        {
          q: "The sum of three consecutive numbers whose middle number is 15 is:",
          options: ["30", "60", "45", "50"],
          answer: 2,
          explain: "14 + 15 + 16 = 45, which is 3 × 15."
        },
        {
          q: "Which of these numbers is divisible by both 2 and 5?",
          options: ["140", "135", "145", "125"],
          answer: 0,
          explain: "Divisible by 2 needs an even last digit, and by 5 needs a last digit of 0 or 5. Only a last digit of 0 does both, so 140."
        }
      ]
    },

    // ───────────────────────────── 4. Data Handling and Presentation ─────────────────────────────
    {
      id: "data-handling-and-presentation",
      title: "Data Handling and Presentation",
      section: "Data",
      summary: "We collect information, organise it with tally marks and frequency tables, show it as pictographs and bar graphs, and find simple summaries such as the range and the mean (average).",
      notes: [
        {
          heading: "Collecting and organising data",
          points: [
            "**Data** is information collected as facts or numbers, such as the votes for the favourite sport in a class or the runs scored in each match.",
            "A **tally chart** records each item with a stroke (|). Every fifth stroke crosses the four before it, so the strokes form bundles of five that are easy to count.",
            "The number of times an item occurs is its **frequency**. A **frequency table** lists each item with its frequency.",
            "Always check that the frequencies add up to the total number of responses."
          ]
        },
        {
          heading: "Pictographs",
          points: [
            "A **pictograph** shows data using pictures or symbols.",
            "The **key** (scale) tells us what one symbol stands for, for example 1 symbol = 5 students.",
            "To read a row, count the symbols and multiply by the value of one symbol.",
            "A half symbol stands for half the value. If 1 symbol = 10, then half a symbol = 5."
          ]
        },
        {
          heading: "Bar graphs",
          points: [
            "A **bar graph** uses bars of equal width. The length (height) of each bar shows the quantity.",
            "We choose a **scale** so that the bars fit on the page. For example, 1 cm = 10 students means a 4 cm bar shows 40 students.",
            "Give the graph a title, label both axes and keep equal gaps between bars.",
            "The tallest bar shows the greatest value and the shortest bar shows the least, so comparing is easy."
          ]
        },
        {
          heading: "Range and mean",
          points: [
            "The **range** is the highest value minus the lowest value. It tells us how spread out the data is.",
            "The **mean** (average) = sum of all values ÷ number of values. For 4, 6 and 8 the mean is 18 ÷ 3 = 6.",
            "The mean always lies between the lowest and the highest value.",
            "Example: if a batter scores 12, 8, 20, 5 and 10 in five matches, the range is 15 runs and the mean is 11 runs."
          ]
        }
      ],
      formulas: [
        "Frequency = number of times an item occurs (number of tally marks)",
        "Value shown in a pictograph row = number of symbols × value of one symbol",
        "Bar length = quantity ÷ value of one unit of the scale",
        "Range = highest value − lowest value",
        "Mean = sum of all values ÷ number of values"
      ],
      terms: [
        { term: "Data", meaning: "Facts or numbers collected to find out something." },
        { term: "Tally marks", meaning: "Short strokes used to count items; every fifth stroke crosses the previous four to make a bundle of five." },
        { term: "Frequency table", meaning: "A table showing each item and the number of times it occurs." },
        { term: "Pictograph", meaning: "A way of showing data using pictures or symbols, with a key telling what each symbol stands for." },
        { term: "Bar graph", meaning: "A graph that uses bars of equal width, with lengths showing the quantities." },
        { term: "Mean", meaning: "The average of a set of numbers: **sum of the values ÷ number of values**." }
      ],
      examples: [
        {
          q: "In a pictograph of favourite sports, 1 symbol = 5 students. Cricket has 7 symbols and kabaddi has 4 symbols. How many more students chose cricket than kabaddi?",
          steps: [
            "Cricket: 7 × 5 = 35 students.",
            "Kabaddi: 4 × 5 = 20 students.",
            "Difference: 35 − 20 = 15."
          ],
          answer: "15 more students chose cricket."
        },
        {
          q: "A batter scored 12, 8, 20, 5 and 10 runs in five matches. Find the range and the mean.",
          steps: [
            "Highest score = 20, lowest score = 5. Range = 20 − 5 = 15.",
            "Sum of scores = 12 + 8 + 20 + 5 + 10 = 55.",
            "Mean = 55 ÷ 5 = 11."
          ],
          answer: "Range = 15 runs; mean = 11 runs."
        }
      ],
      qa: [
        { q: "Why do we use tally marks while counting?", a: "We can mark each item as soon as we see it, without losing count. Because every fifth stroke makes a bundle of five, counting the total later is quick and mistakes are fewer." },
        { q: "What is the use of a scale in a bar graph? If the scale is 1 cm = 10 students and a bar is 4 cm long, how many students does it show?", a: "A scale decides how much each centimetre of a bar stands for, so that large numbers fit on the page. A 4 cm bar shows 4 × 10 = **40 students**." },
        { q: "How is the mean different from the range?", a: "The **mean** is the average, a typical value of the data. The **range** is the gap between the highest and the lowest value. For 2, 4 and 9: mean = 15 ÷ 3 = 5 and range = 9 − 2 = 7." }
      ],
      quiz: [
        {
          q: "A tally chart shows 3 full bundles of five and 2 single strokes. The frequency is:",
          options: ["15", "32", "17", "13"],
          answer: 2,
          explain: "3 × 5 + 2 = 17."
        },
        {
          q: "In a pictograph, 1 symbol = 20 books. A row has 6 symbols. How many books does it show?",
          options: ["26", "60", "100", "120"],
          answer: 3,
          explain: "6 × 20 = 120 books."
        },
        {
          q: "On a bar graph the scale is 1 cm = 5 children. A bar is 9 cm long. How many children does it show?",
          options: ["14", "45", "54", "40"],
          answer: 1,
          explain: "9 × 5 = 45 children."
        },
        {
          q: "What is the mean of 4, 6, 8, 10 and 12?",
          options: ["8", "6", "10", "40"],
          answer: 0,
          explain: "Sum = 40 and there are 5 numbers, so the mean is 40 ÷ 5 = 8."
        },
        {
          q: "What is the range of the data 14, 9, 22, 17, 11?",
          options: ["8", "31", "22", "13"],
          answer: 3,
          explain: "Range = highest − lowest = 22 − 9 = 13."
        },
        {
          q: "A table that shows how many times each item occurs in the data is called a:",
          options: ["Bar graph", "Frequency table", "Pictograph", "Number line"],
          answer: 1,
          explain: "A frequency table lists each item along with its frequency (how many times it occurs)."
        }
      ]
    },

    // ───────────────────────────── 5. Prime Time ─────────────────────────────
    {
      id: "prime-time",
      title: "Prime Time",
      section: "Number",
      summary: "We study factors and multiples, find out what makes a number prime or composite, learn the divisibility tests, break numbers into prime factors and find common factors and multiples.",
      notes: [
        {
          heading: "Factors and multiples",
          points: [
            "A **factor** divides a number exactly, leaving no remainder. The factors of 12 are 1, 2, 3, 4, 6 and 12.",
            "A **multiple** is got by multiplying a number by 1, 2, 3, … The multiples of 5 are 5, 10, 15, 20, …",
            "1 is a factor of every number, and every number is a factor of itself.",
            "A number has only a few factors, but it has endless multiples. If a is a factor of b, then b is a multiple of a."
          ]
        },
        {
          heading: "Prime and composite numbers",
          points: [
            "A **prime number** has exactly two factors: 1 and itself. Examples: 2, 3, 5, 7, 11, 13.",
            "A **composite number** has more than two factors. Examples: 4, 6, 9, 12.",
            "**1 is neither prime nor composite**, because it has only one factor.",
            "2 is the smallest prime and the only even prime. There are 25 primes below 100.",
            "The **Sieve of Eratosthenes** finds primes: cross out 1, then cross out the multiples of 2, 3, 5, 7, … The numbers left are primes."
          ]
        },
        {
          heading: "Divisibility tests",
          points: [
            "By **2**: last digit is 0, 2, 4, 6 or 8. By **5**: last digit is 0 or 5. By **10**: last digit is 0.",
            "By **3**: the sum of the digits is divisible by 3. By **9**: the sum of the digits is divisible by 9.",
            "By **4**: the number made by the last two digits is divisible by 4. By **8**: the number made by the last three digits is divisible by 8.",
            "By **6**: the number is divisible by both 2 and 3.",
            "By **11**: the difference between the sum of the digits at odd places and at even places is 0 or a multiple of 11. For 2728: (2 + 2) and (7 + 8) differ by 11, so 11 divides it."
          ]
        },
        {
          heading: "Prime factorisation and co-primes",
          points: [
            "Every number greater than 1 can be written as a product of primes, and in only one way (apart from the order). 60 = 2 × 2 × 3 × 5 = 2² × 3 × 5.",
            "Use a factor tree or repeated division by primes to find the prime factors.",
            "Two numbers are **co-prime** if their only common factor is 1, for example 8 and 15. Two consecutive numbers are always co-prime.",
            "**Twin primes** are primes that differ by 2, such as (3, 5), (11, 13) and (17, 19)."
          ]
        },
        {
          heading: "Common factors and common multiples",
          points: [
            "The **HCF** (highest common factor) of two numbers is the greatest number that divides both. The **LCM** (lowest common multiple) is the smallest number that both divide.",
            "Using prime factors: 12 = 2² × 3 and 18 = 2 × 3². HCF = 2 × 3 = 6, LCM = 2² × 3² = 36.",
            "For two numbers, HCF × LCM = product of the numbers: 6 × 36 = 216 = 12 × 18."
          ]
        }
      ],
      formulas: [
        "Prime number: exactly 2 factors (1 and itself);  1 is neither prime nor composite",
        "Divisibility by 3 and 9: sum of the digits must be divisible by 3 (or 9)",
        "Divisibility by 4 and 8: last two digits (or last three digits) must be divisible by 4 (or 8)",
        "Divisibility by 6: divisible by both 2 and 3",
        "Divisibility by 11: difference of the sums of alternate digits is 0 or a multiple of 11",
        "HCF × LCM = product of the two numbers"
      ],
      terms: [
        { term: "Factor", meaning: "A number that divides another number exactly, e.g. 4 is a factor of 12." },
        { term: "Multiple", meaning: "A number got by multiplying a given number by 1, 2, 3, …, e.g. 12 is a multiple of 4." },
        { term: "Prime number", meaning: "A number with exactly two factors, 1 and itself, e.g. 2, 3, 5, 7." },
        { term: "Composite number", meaning: "A number with more than two factors, e.g. 4, 6, 9." },
        { term: "Prime factorisation", meaning: "Writing a number as a product of prime numbers, e.g. 84 = 2² × 3 × 7." },
        { term: "Co-prime numbers", meaning: "Two numbers whose only common factor is 1, e.g. 8 and 15." }
      ],
      examples: [
        {
          q: "Find the prime factorisation of 84.",
          steps: [
            "84 ÷ 2 = 42.",
            "42 ÷ 2 = 21.",
            "21 ÷ 3 = 7, and 7 is a prime.",
            "So 84 = 2 × 2 × 3 × 7.",
            "Check: 4 × 3 × 7 = 84."
          ],
          answer: "84 = 2² × 3 × 7"
        },
        {
          q: "Without dividing fully, check whether 4,536 is divisible by 2, 3, 4 and 9.",
          steps: [
            "Last digit is 6, which is even, so it is divisible by 2.",
            "Sum of digits = 4 + 5 + 3 + 6 = 18, which is divisible by 3 and by 9.",
            "The last two digits 36 are divisible by 4 (4 × 9 = 36), so 4,536 is divisible by 4."
          ],
          answer: "4,536 is divisible by 2, 3, 4 and 9."
        }
      ],
      qa: [
        { q: "Why is 1 neither a prime nor a composite number?", a: "A prime has exactly two factors and a composite has more than two. The number 1 has only **one** factor (itself), so it fits neither group." },
        { q: "Is 91 a prime number? Give a reason.", a: "No. It is not divisible by 2, 3 or 5, so it looks prime, but 91 = 7 × 13. It has the factors 1, 7, 13 and 91, so it is composite." },
        { q: "Find the HCF and LCM of 12 and 18 using prime factorisation.", a: "12 = 2² × 3 and 18 = 2 × 3². HCF = product of the smallest powers of common primes = 2 × 3 = **6**. LCM = product of the greatest powers of all primes = 2² × 3² = **36**." }
      ],
      quiz: [
        {
          q: "Which of these is a prime number?",
          options: ["21", "27", "29", "39"],
          answer: 2,
          explain: "21 = 3 × 7, 27 = 3 × 9 and 39 = 3 × 13. Only 29 has just the factors 1 and 29."
        },
        {
          q: "How many factors does 12 have?",
          options: ["4", "5", "12", "6"],
          answer: 3,
          explain: "The factors of 12 are 1, 2, 3, 4, 6 and 12, which is 6 factors."
        },
        {
          q: "The smallest composite number is:",
          options: ["2", "4", "6", "9"],
          answer: 1,
          explain: "2 and 3 are prime and 1 is neither. The first number with more than two factors is 4 (1, 2, 4)."
        },
        {
          q: "Which pair of numbers is co-prime?",
          options: ["8 and 15", "6 and 9", "12 and 18", "14 and 21"],
          answer: 0,
          explain: "8 and 15 have only 1 as a common factor. 6 and 9 share 3, 12 and 18 share 6, and 14 and 21 share 7."
        },
        {
          q: "The prime factorisation of 60 is:",
          options: ["2 × 3 × 10", "2 × 3² × 5", "2² × 3 × 5", "2³ × 3 × 5"],
          answer: 2,
          explain: "60 = 2 × 2 × 3 × 5 = 2² × 3 × 5. Also 10 is not a prime, so 2 × 3 × 10 is not a prime factorisation."
        },
        {
          q: "Which of these numbers is divisible by 9?",
          options: ["2,380", "2,385", "2,386", "2,387"],
          answer: 1,
          explain: "For 2,385 the digit sum is 2 + 3 + 8 + 5 = 18, which is divisible by 9. The other digit sums are 13, 19 and 20."
        }
      ]
    },

    // ───────────────────────────── 6. Perimeter and Area ─────────────────────────────
    {
      id: "perimeter-and-area",
      title: "Perimeter and Area",
      section: "Measurement",
      summary: "Perimeter is the distance around a shape and area is the surface it covers. We find both for rectangles and squares, find the area of triangles, and use them in everyday problems like fencing and tiling.",
      notes: [
        {
          heading: "Perimeter",
          points: [
            "**Perimeter** is the total length of the boundary of a shape, like the distance covered when you walk once around a field.",
            "Perimeter of any polygon = the sum of the lengths of all its sides.",
            "Rectangle: perimeter = 2 × (length + breadth). Square: perimeter = 4 × side.",
            "A regular polygon has equal sides, so its perimeter = number of sides × side. An equilateral triangle of side 5 cm has perimeter 15 cm."
          ]
        },
        {
          heading: "Area",
          points: [
            "**Area** is the amount of flat surface a shape covers. We find it by counting unit squares, for example squares of 1 cm by 1 cm.",
            "Area is measured in square units: cm², m², km². Also 1 m² = 100 × 100 = 10,000 cm².",
            "Rectangle: area = length × breadth. Square: area = side × side.",
            "Shapes with the same perimeter can have different areas."
          ]
        },
        {
          heading: "Area of a triangle",
          points: [
            "Cutting a rectangle along a diagonal gives two identical right-angled triangles. So the area of a right-angled triangle is **half** the area of that rectangle.",
            "For any triangle, area = ½ × base × height, where the height is the perpendicular distance from the top corner to the base.",
            "Triangles with the same base and the same height have the same area.",
            "Example: base 8 cm and height 5 cm give area ½ × 8 × 5 = 20 cm²."
          ]
        },
        {
          heading: "Perimeter and area in daily life",
          points: [
            "Fencing a field, putting a border on a rangoli or running a ribbon round a board are **perimeter** problems.",
            "Tiling a floor, painting a wall or covering a table with a cloth are **area** problems.",
            "Number of tiles = area of the floor ÷ area of one tile.",
            "If the area and one side of a rectangle are known, the other side = area ÷ known side.",
            "For the same perimeter, a square encloses more area than a long thin rectangle: with perimeter 20 cm, 5 × 5 gives 25 cm² but 8 × 2 gives only 16 cm²."
          ]
        }
      ],
      formulas: [
        "Perimeter of a rectangle = 2 × (length + breadth)",
        "Perimeter of a square = 4 × side",
        "Perimeter of a regular polygon = number of sides × length of one side",
        "Area of a rectangle = length × breadth",
        "Area of a square = side × side",
        "Area of a triangle = ½ × base × height",
        "1 m² = 10,000 cm²"
      ],
      terms: [
        { term: "Perimeter", meaning: "The total length of the boundary of a closed shape." },
        { term: "Area", meaning: "The amount of flat surface covered by a shape, measured in square units." },
        { term: "Unit square", meaning: "A square of side 1 unit, such as 1 cm by 1 cm, used to measure area." },
        { term: "Square centimetre (cm²)", meaning: "The area of a square whose side is 1 cm." },
        { term: "Height of a triangle", meaning: "The perpendicular distance from the top corner of a triangle to its base." },
        { term: "Regular polygon", meaning: "A closed shape with all sides equal and all angles equal, e.g. a square or an equilateral triangle." }
      ],
      examples: [
        {
          q: "A rectangular field is 25 m long and 15 m wide. Find its perimeter and area. What is the cost of fencing it at ₹20 per metre?",
          steps: [
            "Perimeter = 2 × (25 + 15) = 2 × 40 = 80 m.",
            "Area = 25 × 15 = 375 m².",
            "Cost of fencing = 80 × ₹20 = ₹1,600."
          ],
          answer: "Perimeter = 80 m; area = 375 m²; fencing cost = ₹1,600."
        },
        {
          q: "A triangular flag has a base of 20 cm and a height of 15 cm. Find the area of cloth in the flag.",
          steps: [
            "Area of a triangle = ½ × base × height.",
            "Area = ½ × 20 × 15 = 10 × 15 = 150."
          ],
          answer: "150 cm²"
        }
      ],
      qa: [
        { q: "What is the difference between perimeter and area?", a: "**Perimeter** is the length of the boundary and is measured in units of length (cm, m). **Area** is the surface covered inside the boundary and is measured in square units (cm², m²)." },
        { q: "Two rectangles have the same perimeter of 20 cm. Show that their areas can be different.", a: "A 6 cm × 4 cm rectangle has perimeter 2 × (6 + 4) = 20 cm and area 24 cm². An 8 cm × 2 cm rectangle has perimeter 2 × (8 + 2) = 20 cm but area only 16 cm²." },
        { q: "Why is the area of a right-angled triangle half the area of a rectangle?", a: "Two identical right-angled triangles can be joined along their longest side (hypotenuse) to form a rectangle. So each triangle is half of that rectangle, and its area is ½ × base × height." }
      ],
      quiz: [
        {
          q: "The perimeter of a square of side 9 cm is:",
          options: ["36 cm", "18 cm", "81 cm", "27 cm"],
          answer: 0,
          explain: "Perimeter = 4 × 9 = 36 cm. (81 would be the area in cm².)"
        },
        {
          q: "The area of a rectangle 12 m long and 5 m wide is:",
          options: ["34 m²", "17 m²", "120 m²", "60 m²"],
          answer: 3,
          explain: "Area = 12 × 5 = 60 m². (34 m is the perimeter.)"
        },
        {
          q: "The perimeter of a rectangle of length 14 cm and breadth 6 cm is:",
          options: ["20 cm", "40 cm", "84 cm", "80 cm"],
          answer: 1,
          explain: "Perimeter = 2 × (14 + 6) = 2 × 20 = 40 cm."
        },
        {
          q: "The area of a triangle with base 10 cm and height 6 cm is:",
          options: ["16 cm²", "60 cm²", "30 cm²", "32 cm²"],
          answer: 2,
          explain: "Area = ½ × 10 × 6 = 30 cm². (60 cm² forgets the half.)"
        },
        {
          q: "A square plot has a perimeter of 48 m. Its area is:",
          options: ["48 m²", "192 m²", "576 m²", "144 m²"],
          answer: 3,
          explain: "Side = 48 ÷ 4 = 12 m, so the area is 12 × 12 = 144 m²."
        },
        {
          q: "A rectangle has area 48 cm² and length 8 cm. Its breadth is:",
          options: ["40 cm", "12 cm", "6 cm", "16 cm"],
          answer: 2,
          explain: "Breadth = area ÷ length = 48 ÷ 8 = 6 cm."
        }
      ]
    },

    // ───────────────────────────── 7. Fractions ─────────────────────────────
    {
      id: "fractions",
      title: "Fractions",
      section: "Number",
      summary: "A fraction shows equal parts of a whole or of a collection. We learn the types of fractions, equivalent fractions, how to compare them and how to add and subtract them.",
      notes: [
        {
          heading: "What a fraction means",
          points: [
            "A fraction a/b means a equal parts out of b equal parts of a whole. In 3/4 the **numerator** 3 counts the parts taken and the **denominator** 4 tells into how many equal parts the whole is divided.",
            "A fraction can describe part of a collection: 3/5 of 20 mangoes is 20 ÷ 5 × 3 = 12 mangoes.",
            "Every fraction is a point on the number line. 1/2 lies exactly midway between 0 and 1.",
            "A fraction is also a division: if 3 rotis are shared equally among 4 children, each gets 3 ÷ 4 = 3/4 of a roti."
          ]
        },
        {
          heading: "Types of fractions",
          points: [
            "A **proper fraction** has a numerator smaller than the denominator, so its value is less than 1, e.g. 3/5.",
            "An **improper fraction** has a numerator that is equal to or greater than the denominator, so its value is 1 or more, e.g. 7/4.",
            "A **mixed fraction** has a whole number part and a proper fraction part, e.g. 1 3/4.",
            "Improper to mixed: divide. 7 ÷ 4 gives quotient 1 and remainder 3, so 7/4 = 1 3/4.",
            "Mixed to improper: 2 1/3 = (2 × 3 + 1)/3 = 7/3."
          ]
        },
        {
          heading: "Equivalent fractions and simplest form",
          points: [
            "Fractions that show the same part of a whole are **equivalent**: 1/2 = 2/4 = 3/6.",
            "Multiply or divide the numerator and the denominator by the same non-zero number to get an equivalent fraction.",
            "A fraction is in its **simplest form** when the numerator and the denominator have no common factor other than 1. Dividing top and bottom by 6 gives 12/18 = 2/3."
          ]
        },
        {
          heading: "Comparing fractions",
          points: [
            "For fractions with the same denominator, the one with the bigger numerator is bigger: 5/8 > 3/8.",
            "For fractions with the same numerator, the one with the smaller denominator is bigger: 1/3 > 1/5, because a roti shared among 3 gives bigger pieces than one shared among 5.",
            "For unlike fractions, first change them to equivalent fractions with the same denominator (use the LCM), then compare the numerators.",
            "Example: 3/4 = 9/12 and 5/6 = 10/12, so 5/6 > 3/4."
          ]
        },
        {
          heading: "Adding and subtracting fractions",
          points: [
            "Like fractions (same denominator): add or subtract the numerators and keep the denominator. 3/8 + 2/8 = 5/8.",
            "Unlike fractions: first make the denominators the same using the LCM of the denominators. 1/2 + 1/3 = 3/6 + 2/6 = 5/6.",
            "Write the answer in simplest form, and change an improper fraction to a mixed fraction if you like."
          ]
        }
      ],
      formulas: [
        "Fraction = numerator/denominator = (parts taken)/(equal parts in the whole)",
        "Equivalent fractions: a/b = (a × n)/(b × n) = (a ÷ n)/(b ÷ n)",
        "Mixed to improper: (whole × denominator + numerator)/denominator",
        "Like fractions: a/d + b/d = (a + b)/d;  a/d − b/d = (a − b)/d",
        "Unlike fractions: make the denominators equal (using the LCM), then add or subtract"
      ],
      terms: [
        { term: "Numerator", meaning: "The top number of a fraction. It tells how many equal parts are taken." },
        { term: "Denominator", meaning: "The bottom number of a fraction. It tells into how many equal parts the whole is divided." },
        { term: "Proper fraction", meaning: "A fraction whose numerator is smaller than its denominator, e.g. 2/5." },
        { term: "Improper fraction", meaning: "A fraction whose numerator is equal to or greater than its denominator, e.g. 9/4." },
        { term: "Mixed fraction", meaning: "A fraction made of a whole number and a proper fraction, e.g. 2 1/2." },
        { term: "Equivalent fractions", meaning: "Different fractions that show the same value, e.g. 1/2, 2/4 and 4/8." }
      ],
      examples: [
        {
          q: "Meena drank 2/3 litre of milk in the morning and 1/4 litre at night. How much milk did she drink in all?",
          steps: [
            "The denominators are 3 and 4. Their LCM is 12.",
            "2/3 = (2 × 4)/(3 × 4) = 8/12 and 1/4 = (1 × 3)/(4 × 3) = 3/12.",
            "Add: 8/12 + 3/12 = 11/12."
          ],
          answer: "She drank 11/12 litre of milk."
        },
        {
          q: "Which is greater, 3/4 or 5/6? By how much?",
          steps: [
            "LCM of 4 and 6 is 12.",
            "3/4 = 9/12 and 5/6 = 10/12.",
            "10/12 is greater than 9/12, so 5/6 is greater.",
            "Difference = 10/12 − 9/12 = 1/12."
          ],
          answer: "5/6 is greater, by 1/12."
        }
      ],
      qa: [
        { q: "Write 17/5 as a mixed fraction and 2 3/4 as an improper fraction.", a: "17 ÷ 5 gives quotient 3 and remainder 2, so 17/5 = 3 2/5. For the other, 2 3/4 = (2 × 4 + 3)/4 = 11/4." },
        { q: "Which is greater, 2/5 or 3/7?", a: "The LCM of 5 and 7 is 35. 2/5 = 14/35 and 3/7 = 15/35. Since 15/35 is more than 14/35, **3/7 is greater**." },
        { q: "What are equivalent fractions? Find the missing number in 3/5 = ?/20.", a: "Equivalent fractions have the same value though they look different, e.g. 1/2 and 2/4. Since 5 × 4 = 20, multiply the numerator by 4 as well: 3/5 = 12/20." }
      ],
      quiz: [
        {
          q: "Which fraction is equivalent to 2/3?",
          options: ["3/4", "4/6", "4/9", "3/5"],
          answer: 1,
          explain: "Multiply the top and bottom of 2/3 by 2 to get 4/6."
        },
        {
          q: "7/4 written as a mixed fraction is:",
          options: ["2 1/4", "1 1/4", "3 1/4", "1 3/4"],
          answer: 3,
          explain: "7 ÷ 4 gives quotient 1 and remainder 3, so 7/4 = 1 3/4."
        },
        {
          q: "What is 3/8 + 2/8?",
          options: ["5/8", "5/16", "1/8", "6/8"],
          answer: 0,
          explain: "For like fractions we add the numerators and keep the denominator: 3 + 2 = 5, so 5/8."
        },
        {
          q: "Which is the greatest among 1/2, 3/5, 7/10 and 2/3?",
          options: ["1/2", "3/5", "7/10", "2/3"],
          answer: 2,
          explain: "With denominator 30: 1/2 = 15/30, 3/5 = 18/30, 7/10 = 21/30 and 2/3 = 20/30. The greatest is 21/30 = 7/10."
        },
        {
          q: "What is 5/6 − 1/3?",
          options: ["4/3", "4/6", "1/3", "1/2"],
          answer: 3,
          explain: "1/3 = 2/6, so 5/6 − 2/6 = 3/6 = 1/2."
        },
        {
          q: "Which of these is an improper fraction?",
          options: ["3/7", "1 2/5", "9/5", "4/9"],
          answer: 2,
          explain: "9/5 has a numerator greater than the denominator. 3/7 and 4/9 are proper, and 1 2/5 is a mixed fraction."
        }
      ]
    },

    // ───────────────────────────── 8. Playing with Constructions ─────────────────────────────
    {
      id: "playing-with-constructions",
      title: "Playing with Constructions",
      section: "Geometry",
      summary: "Using only a ruler and a compass we draw circles, copy line segments, draw perpendicular bisectors, construct angles such as 60°, 30° and 90°, and build rectangles, squares and triangles.",
      notes: [
        {
          heading: "The compass and the circle",
          points: [
            "A **circle** is the set of all points at the same distance from a fixed point called the **centre**. That distance is the **radius**.",
            "A **chord** joins two points on a circle. The longest chord passes through the centre and is called the **diameter**. Diameter = 2 × radius.",
            "A part of a circle is an **arc**.",
            "To draw a circle of radius 3 cm: set the compass opening to 3 cm using the ruler, fix the pointed leg at the centre and turn the pencil leg all the way round."
          ]
        },
        {
          heading: "Copying a segment and the perpendicular bisector",
          points: [
            "To copy a line segment AB, set the compass opening equal to AB and mark that length from a new starting point.",
            "The **perpendicular bisector** of AB cuts AB into two equal halves (at its mid-point) and makes 90° with it.",
            "Draw it by using centre A and a radius more than half of AB to make arcs on both sides. Using the same radius from B, draw arcs that cut them. Join the two crossing points.",
            "Paper folding gives the same line: fold the paper so that A falls on B; the crease is the perpendicular bisector."
          ]
        },
        {
          heading: "Constructing angles",
          points: [
            "**60°**: draw ray AB. With centre A and any radius draw an arc cutting AB at P. With centre P and the same radius cut that arc at Q. Join AQ. Then ∠QAB = 60°.",
            "For **120°**, cut one more arc of the same radius from Q to get R. Then ∠RAB = 120°.",
            "An **angle bisector** divides an angle into two equal parts. Bisecting 60° gives 30°, and bisecting 90° gives 45°.",
            "To make **90°**, bisect the angle between the 60° and 120° arms: 60° + 30° = 90°."
          ]
        },
        {
          heading: "Rectangles, squares and triangles",
          points: [
            "A **rectangle** has opposite sides equal and all angles 90°. A **square** has all four sides equal and all angles 90°.",
            "To construct a triangle when three sides are given: draw one side, then from its two ends draw arcs of radii equal to the other two sides. Where the arcs cross is the third corner.",
            "Three lengths form a triangle only if the sum of any two of them is greater than the third. So 3, 4, 5 works (3 + 4 > 5) but 2, 3, 6 does not (2 + 3 < 6)."
          ]
        }
      ],
      formulas: [
        "Diameter = 2 × radius;  radius = diameter ÷ 2",
        "Perpendicular bisector: cuts a segment into two equal parts at 90°",
        "Arcs of the same radius from A and from P give a 60° angle at A",
        "Bisecting: 60° → 30°;  90° → 45°;  120° → 60°",
        "A triangle exists only if the sum of any two sides is greater than the third side"
      ],
      terms: [
        { term: "Compass", meaning: "A tool with a pointed leg and a pencil leg, used to draw circles and arcs and to measure lengths." },
        { term: "Radius", meaning: "The distance from the centre of a circle to any point on it." },
        { term: "Diameter", meaning: "A chord passing through the centre of a circle. It is twice the radius." },
        { term: "Chord", meaning: "A line segment joining two points on a circle." },
        { term: "Perpendicular bisector", meaning: "A line that cuts a line segment into two equal parts and meets it at 90°." },
        { term: "Angle bisector", meaning: "A ray that divides an angle into two equal angles." }
      ],
      examples: [
        {
          q: "Construct the perpendicular bisector of a line segment PQ = 6 cm.",
          steps: [
            "Draw PQ = 6 cm with a ruler.",
            "With centre P and radius more than 3 cm (say 4 cm), draw one arc above and one arc below PQ.",
            "With centre Q and the same radius, draw arcs that cut the first arcs at X and Y.",
            "Join X and Y. Let XY meet PQ at M."
          ],
          answer: "XY is the perpendicular bisector of PQ: PM = MQ = 3 cm and ∠PMX = 90°."
        },
        {
          q: "Construct an angle of 30° using a compass and a ruler.",
          steps: [
            "Draw a ray AB. With centre A and any radius, draw an arc cutting AB at P.",
            "With centre P and the same radius, cut the arc at Q. Join AQ, so that ∠QAB = 60°.",
            "With centres P and Q and the same radius, draw two arcs that cross at R.",
            "Join AR. This ray bisects the 60° angle."
          ],
          answer: "∠RAB = 30°."
        }
      ],
      qa: [
        { q: "Differentiate between the radius, the diameter and a chord of a circle.", a: "The **radius** joins the centre to a point on the circle. A **chord** joins any two points on the circle. The **diameter** is a chord that passes through the centre, and it is the longest chord; diameter = 2 × radius." },
        { q: "Can a triangle with sides 3 cm, 4 cm and 8 cm be constructed? Why?", a: "No. In a triangle the sum of any two sides must be greater than the third side. Here 3 + 4 = 7, which is less than 8, so the arcs would never meet." },
        { q: "Why does the arc method give exactly 60°?", a: "AP and AQ are radii of the same arc, and PQ is drawn with the same compass opening. So AP = AQ = PQ and triangle APQ is an equilateral triangle, whose angles are each 60°." }
      ],
      quiz: [
        {
          q: "The radius of a circle is 8 cm. Its diameter is:",
          options: ["4 cm", "64 cm", "16 cm", "8 cm"],
          answer: 2,
          explain: "Diameter = 2 × radius = 2 × 8 = 16 cm."
        },
        {
          q: "Which instrument is used to draw a circle?",
          options: ["Protractor", "Set square", "Ruler", "Compass"],
          answer: 3,
          explain: "A compass has a pointed leg for the centre and a pencil leg that draws the circle."
        },
        {
          q: "The perpendicular bisector of a line segment:",
          options: ["Is parallel to it", "Cuts it into two equal parts at 90°", "Cuts it into two unequal parts at 90°", "Cuts it into two equal parts at 60°"],
          answer: 1,
          explain: "A perpendicular bisector passes through the mid-point of the segment and makes a right angle with it."
        },
        {
          q: "Which set of lengths can form a triangle?",
          options: ["5 cm, 6 cm, 7 cm", "2 cm, 3 cm, 6 cm", "4 cm, 4 cm, 9 cm", "1 cm, 2 cm, 3 cm"],
          answer: 0,
          explain: "5 + 6 > 7, 5 + 7 > 6 and 6 + 7 > 5. In the other sets the two shorter sides do not add up to more than the longest side."
        },
        {
          q: "Bisecting an angle of 60° gives two angles of:",
          options: ["15°", "45°", "20°", "30°"],
          answer: 3,
          explain: "A bisector divides the angle into two equal parts: 60° ÷ 2 = 30°."
        },
        {
          q: "A chord of a circle that passes through its centre is called the:",
          options: ["Radius", "Arc", "Diameter", "Centre"],
          answer: 2,
          explain: "The chord through the centre is the diameter, and it is the longest chord of the circle."
        }
      ]
    },

    // ───────────────────────────── 9. Symmetry ─────────────────────────────
    {
      id: "symmetry",
      title: "Symmetry",
      section: "Geometry",
      summary: "A shape is symmetric when one half is the mirror image of the other, or when it looks the same after a turn. We find lines of symmetry in shapes and letters, study mirror images and look at rotational symmetry.",
      notes: [
        {
          heading: "Line symmetry",
          points: [
            "A shape has **line symmetry** if a line divides it into two halves that are mirror images. When the paper is folded along this line (the **line of symmetry** or mirror line), the two halves fit exactly on each other.",
            "Butterfly wings, leaves, kolam and rangoli designs often have line symmetry.",
            "A shape may have no line of symmetry, only one, two, or many.",
            "The line of symmetry can be vertical, horizontal or slanting."
          ]
        },
        {
          heading: "Lines of symmetry of common shapes",
          points: [
            "Equilateral triangle: 3 lines. Isosceles triangle: 1 line. Scalene triangle: none.",
            "Square: 4 lines (2 diagonals and 2 lines joining mid-points of opposite sides). Rectangle (not a square): 2 lines, which join the mid-points of opposite sides. Its diagonals are **not** lines of symmetry.",
            "Rhombus (not a square): 2 lines, which are its diagonals. A parallelogram (not a rectangle or rhombus) has none. A kite has 1.",
            "A regular polygon with n sides has n lines of symmetry. A circle has infinitely many, as every diameter is one.",
            "Letters: A, M, T, U, V, W, Y have a vertical line; B, C, D, E have a horizontal line; H, I, O, X have both; F, G, J, L, N, P, Q, R, S, Z have none."
          ]
        },
        {
          heading: "Reflection and mirror images",
          points: [
            "When a mirror is placed on the line of symmetry, the image looks like the other half. A point and its image are the same distance from the mirror line, on opposite sides.",
            "In a mirror image, left and right are swapped. The mirror image of the letter b in a vertical mirror looks like d.",
            "Paper folding and ink-blot patterns make symmetric designs."
          ]
        },
        {
          heading: "Rotational symmetry",
          points: [
            "A shape has **rotational symmetry** if it looks exactly the same after a turn of less than a full turn about a fixed point, its centre.",
            "The **order** of rotational symmetry is the number of times the shape fits onto itself during one full turn of 360°.",
            "The smallest angle of rotation = 360° ÷ order. Square: order 4, angle 90°. Equilateral triangle: order 3, angle 120°. Rectangle: order 2, angle 180°.",
            "A shape can have rotational symmetry but no line of symmetry: a parallelogram (order 2) and the letters N, S and Z.",
            "A ceiling fan with 3 equal blades has rotational symmetry of order 3."
          ]
        }
      ],
      formulas: [
        "Regular polygon with n sides: n lines of symmetry and rotational symmetry of order n",
        "Smallest angle of rotation = 360° ÷ order of rotational symmetry",
        "Square: 4 lines, order 4;  rectangle: 2 lines, order 2;  equilateral triangle: 3 lines, order 3",
        "Circle: infinitely many lines of symmetry"
      ],
      terms: [
        { term: "Line of symmetry", meaning: "A line that divides a shape into two halves which are mirror images of each other." },
        { term: "Mirror image", meaning: "The reflection of a shape in a mirror line; left and right are swapped." },
        { term: "Reflection", meaning: "Flipping a shape over a mirror line so that each point is the same distance on the other side." },
        { term: "Rotational symmetry", meaning: "A shape has this if it looks the same after being turned less than 360° about its centre." },
        { term: "Order of rotational symmetry", meaning: "The number of times a shape looks the same during one full turn of 360°." },
        { term: "Regular polygon", meaning: "A polygon with all sides equal and all angles equal." }
      ],
      examples: [
        {
          q: "Find the number of lines of symmetry of (a) a 5 cm × 3 cm rectangle, (b) a regular hexagon, (c) an isosceles triangle.",
          steps: [
            "(a) A rectangle that is not a square has only the 2 lines joining mid-points of opposite sides.",
            "(b) A regular hexagon has 6 sides, so it has 6 lines of symmetry.",
            "(c) An isosceles triangle has 1 line, through the top corner and the mid-point of the base."
          ],
          answer: "(a) 2  (b) 6  (c) 1"
        },
        {
          q: "A paper pinwheel has 5 identical blades placed at equal gaps. Find its order of rotational symmetry and the smallest angle of rotation.",
          steps: [
            "The pinwheel looks the same 5 times in one full turn, so the order is 5.",
            "Smallest angle = 360° ÷ 5 = 72°."
          ],
          answer: "Order 5; smallest angle of rotation 72°."
        }
      ],
      qa: [
        { q: "What is a line of symmetry? Name two things in daily life which have line symmetry.", a: "A **line of symmetry** divides a shape into two halves that match exactly when folded along the line. A butterfly and a leaf (also a kolam design) have line symmetry." },
        { q: "Why are the diagonals of a rectangle (that is not a square) not lines of symmetry?", a: "If we fold the rectangle along a diagonal, the two triangles are the same size, but the corners do not fit on each other: a long side falls on a short side. So the halves are not mirror images." },
        { q: "Give an example of a shape that has rotational symmetry but no line of symmetry.", a: "A parallelogram (that is not a rectangle or a rhombus) looks the same after a half turn (180°), so its order is 2, but it has no line of symmetry. The letters S and N are other examples." }
      ],
      quiz: [
        {
          q: "How many lines of symmetry does a square have?",
          options: ["1", "2", "4", "8"],
          answer: 2,
          explain: "A square has 4 lines of symmetry: 2 diagonals and 2 lines joining the mid-points of opposite sides."
        },
        {
          q: "Which of these letters has no line of symmetry?",
          options: ["A", "H", "T", "F"],
          answer: 3,
          explain: "A and T have a vertical line of symmetry and H has two lines. F has none."
        },
        {
          q: "How many lines of symmetry does an equilateral triangle have?",
          options: ["1", "3", "2", "6"],
          answer: 1,
          explain: "One line from each corner to the mid-point of the opposite side, so 3 lines."
        },
        {
          q: "The order of rotational symmetry of a rectangle (that is not a square) is:",
          options: ["2", "4", "1", "3"],
          answer: 0,
          explain: "A rectangle looks the same after a half turn (180°) and after a full turn (360°), so its order is 2."
        },
        {
          q: "A circle has:",
          options: ["Only one line of symmetry", "Exactly four lines of symmetry", "Infinitely many lines of symmetry", "No line of symmetry"],
          answer: 2,
          explain: "Every diameter of a circle is a line of symmetry, and there are infinitely many diameters."
        },
        {
          q: "The smallest angle through which a regular pentagon must be turned about its centre to look the same is:",
          options: ["36°", "72°", "60°", "90°"],
          answer: 1,
          explain: "A regular pentagon has order 5, so the smallest angle is 360° ÷ 5 = 72°."
        }
      ]
    },

    // ───────────────────────────── 10. The Other Side of Zero ─────────────────────────────
    {
      id: "the-other-side-of-zero",
      title: "The Other Side of Zero",
      section: "Number",
      summary: "Negative numbers help us describe temperatures below zero, debts and depths. We study integers, place them on the number line, compare them, and add and subtract them.",
      notes: [
        {
          heading: "Negative numbers and integers",
          points: [
            "Negative numbers are used for things below a starting point: a temperature of −4°C in Shimla, a loss of ₹50 written as −50, or a basement floor −2.",
            "**Integers** are the numbers …, −3, −2, −1, 0, 1, 2, 3, … The positive integers are 1, 2, 3, … and the negative integers are −1, −2, −3, …",
            "Zero is neither positive nor negative.",
            "Gains, rises and heights above a level are positive. Losses, falls and depths below a level are negative."
          ]
        },
        {
          heading: "Integers on the number line",
          points: [
            "On a horizontal number line, 0 is in the middle, positive integers are on the right and negative integers are on the left at equal gaps.",
            "A number is greater than every number to its left. So −2 > −5, 0 > −1, and every positive integer is greater than every negative integer.",
            "Of two negative numbers, the one nearer to zero is greater: −3 > −7, as −3°C is warmer than −7°C.",
            "**Opposite** numbers like 5 and −5 are the same distance from 0 on opposite sides. The opposite of 0 is 0.",
            "Ascending order (smallest to greatest): −8, −3, 0, 2, 5."
          ]
        },
        {
          heading: "Adding integers",
          points: [
            "Adding a positive integer means moving right on the number line, and adding a negative integer means moving left. For 2 + (−5): start at 2 and move 5 steps left to reach −3.",
            "Same signs: add the numbers and keep the sign. (−3) + (−4) = −7.",
            "Different signs: subtract the smaller number from the bigger and use the sign of the bigger one. 7 + (−10) = −3, since 10 − 7 = 3 and 10 is the negative one.",
            "Opposites cancel: 6 + (−6) = 0. With tokens, a positive token and a negative token cancel each other."
          ]
        },
        {
          heading: "Subtracting integers",
          points: [
            "Subtracting a positive integer means moving left: 3 − 5 = −2.",
            "**Subtracting a negative integer is the same as adding its opposite**: 5 − (−3) = 5 + 3 = 8.",
            "The difference a − b tells how far a is above b on the number line. A rise from −3°C to 5°C is 5 − (−3) = 8°C.",
            "Common mistake: (−3) − (−3) = (−3) + 3 = 0, not −6."
          ]
        }
      ],
      formulas: [
        "Integers: …, −3, −2, −1, 0, 1, 2, 3, …",
        "On the number line the number on the right is the greater one",
        "a + (−a) = 0  (opposites cancel)",
        "a − b = a + (−b)  (subtracting a number is adding its opposite)",
        "Same signs: add and keep the sign;  different signs: subtract and take the sign of the bigger number"
      ],
      terms: [
        { term: "Integer", meaning: "Any number from …, −3, −2, −1, 0, 1, 2, 3, … (whole numbers and their opposites)." },
        { term: "Negative integer", meaning: "An integer less than zero, written with a minus sign, e.g. −5." },
        { term: "Opposite of an integer", meaning: "The integer at the same distance from 0 on the other side, e.g. the opposite of 7 is −7." },
        { term: "Number line", meaning: "A line on which numbers are placed at equal gaps; numbers increase to the right." },
        { term: "Ascending order", meaning: "Arrangement of numbers from the smallest to the greatest." }
      ],
      examples: [
        {
          q: "At noon the temperature in Shimla was 4°C. At night it fell by 9°C. What was the temperature at night?",
          steps: [
            "A fall means subtraction: 4 − 9.",
            "On the number line start at 4 and move 9 steps left.",
            "4 steps take us to 0 and the remaining 5 steps take us to −5."
          ],
          answer: "−5°C"
        },
        {
          q: "Find (a) (−6) + 9  (b) (−2) − (−7).",
          steps: [
            "(a) The signs are different. 9 − 6 = 3, and 9 is the bigger number and it is positive, so the answer is +3.",
            "(b) Subtracting −7 is the same as adding 7: (−2) + 7.",
            "Start at −2 and move 7 steps right to reach 5."
          ],
          answer: "(a) 3  (b) 5"
        }
      ],
      qa: [
        { q: "Which is greater, −3 or −7? Explain using the number line.", a: "On the number line −3 lies to the **right** of −7, so −3 > −7. It also fits real life: a temperature of −3°C is warmer than −7°C." },
        { q: "How do you add 6 and −9 on a number line?", a: "Start at 6 and move 9 steps to the left because we are adding a negative number. After 6 steps we reach 0, and 3 more steps take us to −3. So 6 + (−9) = −3." },
        { q: "What is 8 − (−5)? Why?", a: "Subtracting a negative number is the same as adding its opposite, so 8 − (−5) = 8 + 5 = **13**. Check: going from −5°C up to 8°C is a rise of 13 degrees." }
      ],
      quiz: [
        {
          q: "Which is the smallest integer among 0, −1, −10 and 3?",
          options: ["0", "−1", "3", "−10"],
          answer: 3,
          explain: "−10 is farthest to the left on the number line, so it is the smallest."
        },
        {
          q: "What is (−8) + 5?",
          options: ["−13", "−3", "3", "13"],
          answer: 1,
          explain: "Signs differ: 8 − 5 = 3, and 8 is the negative one, so the answer is −3."
        },
        {
          q: "The opposite of −12 is:",
          options: ["12", "−12", "−21", "0"],
          answer: 0,
          explain: "The opposite of an integer is at the same distance from 0 on the other side, so the opposite of −12 is 12."
        },
        {
          q: "The temperature is −3°C and it rises by 7°C. The new temperature is:",
          options: ["−10°C", "10°C", "4°C", "−4°C"],
          answer: 2,
          explain: "(−3) + 7 = 4, so the temperature is 4°C."
        },
        {
          q: "What is 6 − 10?",
          options: ["4", "−16", "16", "−4"],
          answer: 3,
          explain: "Start at 6 and move 10 steps left: you reach 0 after 6 steps and −4 after 4 more."
        },
        {
          q: "What is (−4) − (−9)?",
          options: ["5", "−5", "−13", "13"],
          answer: 0,
          explain: "Subtracting −9 is adding 9: (−4) + 9 = 5."
        }
      ]
    }
  ]
});
