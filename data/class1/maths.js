// Class 1 Mathematics: topic-wise chapters for the NCERT syllabus.
// Format: see CONTENT_GUIDE.md
StudyData.add(1, "maths", {
  // What this content follows. match: "textbook" | "older-book" | "topic". Set reviewed to a date once a teacher has checked it.
  syllabus: {board: "CBSE", match: "topic", books: [], note: "Chapter names and order may not match your textbook.", reviewed: false},
  chapters: [
    // ───────────────────────────── 1. Shapes Around Us ─────────────────────────────
    {
      id: "shapes-around-us",
      title: "Shapes Around Us",
      section: "Shapes",
      summary: "Many things around us have shapes. In this chapter we find circles, squares, rectangles and triangles at home and at school.",
      notes: [
        {
          heading: "Shapes all around us",
          points: [
            "A roti is round. A ball is round too.",
            "A window is often a square or a rectangle.",
            "A ball can roll. A box with flat sides does not roll."
          ]
        },
        {
          heading: "Names of basic shapes",
          points: [
            "A **circle** is round and has no corners.",
            "A **triangle** has 3 corners and 3 sides.",
            "A **square** has 4 corners and 4 sides that are all equal.",
            "A **rectangle** has 4 corners. Its opposite sides are equal."
          ]
        }
      ],
      terms: [
        { term: "Shape", meaning: "The outline of a thing, like a circle or a square." },
        { term: "Circle", meaning: "A round shape with no corners." },
        { term: "Corner", meaning: "The point where two sides meet." },
        { term: "Rectangle", meaning: "A shape with 4 corners and opposite sides equal." }
      ],
      examples: [
        {
          q: "How many corners does a square have?",
          steps: ["Look at a square. It has one corner at each end of its sides.", "Count the corners: 1, 2, 3, 4."],
          answer: "A square has 4 corners."
        }
      ],
      qa: [
        { q: "Which shape has no corners?", a: "A circle has no corners." },
        { q: "Name a thing at home that is shaped like a rectangle.", a: "A door, a book or a TV screen." }
      ],
      quiz: [
        {
          q: "Which shape has no corners?",
          options: ["Square", "Triangle", "Circle", "Rectangle"],
          answer: 2,
          explain: "A circle is round, so it has no corners."
        },
        {
          q: "How many corners does a triangle have?",
          options: ["2", "3", "4", "5"],
          answer: 1,
          explain: "A triangle has 3 corners."
        },
        {
          q: "Which shape has 4 equal sides?",
          options: ["Square", "Triangle", "Circle", "Rectangle"],
          answer: 0,
          explain: "A square has 4 sides, and all of them are equal."
        },
        {
          q: "Which of these can roll easily?",
          options: ["Ball", "Box", "Brick", "Matchbox"],
          answer: 0,
          explain: "A ball is round, so it rolls."
        },
        {
          q: "How many sides does a rectangle have?",
          options: ["3", "5", "2", "4"],
          answer: 3,
          explain: "A rectangle has 4 sides."
        }
      ]
    },

    // ───────────────────────────── 2. Numbers 1 to 9 ─────────────────────────────
    {
      id: "numbers-1-to-9",
      title: "Numbers 1 to 9",
      section: "Numbers",
      summary: "We count and write the numbers 1 to 9. We also learn which number comes before and which comes after.",
      notes: [
        {
          heading: "Counting 1 to 9",
          points: [
            "We count like this: 1, 2, 3, 4, 5, 6, 7, 8, 9.",
            "Count 3 mangoes: one, two, three. The last number tells how many there are."
          ]
        },
        {
          heading: "Before and after",
          points: [
            "The number after 5 is 6.",
            "The number before 5 is 4.",
            "Count slowly from 1 to 9 and say the number that comes next each time."
          ]
        }
      ],
      terms: [
        { term: "Number", meaning: "A symbol that tells how many things there are, like 4 or 7." },
        { term: "Counting", meaning: "Saying numbers in order, one after another." },
        { term: "Before", meaning: "The number that comes just earlier in counting." },
        { term: "After", meaning: "The number that comes just later in counting." }
      ],
      examples: [
        {
          q: "Ravi has 3 laddoos. His mother gives him 2 more. How many laddoos does he have now?",
          steps: ["Count the first 3: 1, 2, 3.", "Count 2 more: 4, 5."],
          answer: "He has 5 laddoos."
        }
      ],
      qa: [
        { q: "What number comes after 6?", a: "7 comes after 6." },
        { q: "What is the number name for 9?", a: "Nine." }
      ],
      quiz: [
        {
          q: "Which number comes after 4?",
          options: ["3", "5", "6", "4"],
          answer: 1,
          explain: "Counting: 4, then 5."
        },
        {
          q: "What is the number name of 8?",
          options: ["Seven", "Nine", "Eight", "Six"],
          answer: 2,
          explain: "8 is written as 8 and read as eight."
        },
        {
          q: "Which number comes before 7?",
          options: ["8", "5", "6", "9"],
          answer: 2,
          explain: "Counting: 6, then 7. So 6 comes before 7."
        },
        {
          q: "Which symbol shows the number five?",
          options: ["5", "4", "15", "3"],
          answer: 0,
          explain: "The number five is written as 5."
        },
        {
          q: "Count: 1, 2, 3, __, 5. Which number is missing?",
          options: ["6", "4", "7", "3"],
          answer: 1,
          explain: "After 3 comes 4, and then 5."
        }
      ]
    },

    // ───────────────────────────── 3. Zero ─────────────────────────────
    {
      id: "zero",
      title: "Zero",
      section: "Numbers",
      summary: "Zero means nothing at all. We learn how to write zero and what happens when we add or take away zero.",
      notes: [
        {
          heading: "What zero means",
          points: [
            "Zero is written as **0**. It means there are no things at all.",
            "If there are no biscuits in the box, there are 0 biscuits."
          ]
        },
        {
          heading: "Zero in adding and taking away",
          points: [
            "5 + 0 = 5. Adding zero does not change the number.",
            "If you eat all 3 mangoes, you have 3 − 3 = 0 mangoes left."
          ]
        }
      ],
      terms: [
        { term: "Zero", meaning: "The number 0. It means nothing or none." },
        { term: "Empty", meaning: "Having nothing inside, like an empty box." },
        { term: "Count backward", meaning: "Counting down, like 3, 2, 1, 0." },
        { term: "Before 1", meaning: "Zero is the number that comes just before 1." }
      ],
      examples: [
        {
          q: "There are 4 birds on a tree. All 4 birds fly away. How many birds are left?",
          steps: ["Start with 4 birds.", "Take away 4: 4 − 4 = 0."],
          answer: "0 birds are left."
        }
      ],
      qa: [
        { q: "What number comes before 1?", a: "0 (zero) comes before 1." },
        { q: "What is 2 + 0?", a: "2 + 0 = 2. Adding zero does not change the number." }
      ],
      quiz: [
        {
          q: "What is 6 + 0?",
          options: ["0", "6", "60", "1"],
          answer: 1,
          explain: "Adding zero does not change a number, so 6 + 0 = 6."
        },
        {
          q: "Meena had 3 toffees. She ate all 3. How many are left? (3 − 3 = ?)",
          options: ["3", "1", "0", "6"],
          answer: 2,
          explain: "Taking away all 3 leaves 0."
        },
        {
          q: "Which number comes before 1?",
          options: ["2", "0", "10", "11"],
          answer: 1,
          explain: "Zero comes just before 1."
        },
        {
          q: "Which number means no things at all?",
          options: ["1", "9", "10", "0"],
          answer: 3,
          explain: "The number 0 means there are no things."
        },
        {
          q: "What is 7 − 0?",
          options: ["0", "70", "7", "8"],
          answer: 2,
          explain: "Taking away zero leaves the number as it is: 7 − 0 = 7."
        }
      ]
    },

    // ───────────────────────────── 4. Numbers 10 to 20 ─────────────────────────────
    {
      id: "numbers-10-to-20",
      title: "Numbers 10 to 20",
      section: "Numbers",
      summary: "Ten and the numbers after it up to 20. We learn their names and count them in order.",
      notes: [
        {
          heading: "Ten and the numbers after it",
          points: [
            "10 is called ten. It comes after 9.",
            "11 is eleven, 12 is twelve, 13 is thirteen, and so on up to 19 (nineteen).",
            "11 is 10 and 1 more. 15 is 10 and 5 more."
          ]
        },
        {
          heading: "Counting to 20",
          points: [
            "Count like this: 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20.",
            "After 19 comes 20. Twenty is written as 20."
          ]
        }
      ],
      terms: [
        { term: "Ten", meaning: "The number 10, which comes after 9." },
        { term: "Teen numbers", meaning: "The numbers 13 to 19, which have 'teen' in their names." },
        { term: "Twenty", meaning: "The number 20, which comes after 19." },
        { term: "Before and after", meaning: "The number just earlier and just later in counting." }
      ],
      examples: [
        {
          q: "Ria has 10 chocolates. Her friend gives her 3 more. How many chocolates does she have now?",
          steps: ["Start with 10.", "Add 3: 10 + 3 = 13."],
          answer: "She has 13 chocolates."
        }
      ],
      qa: [
        { q: "What number is 1 more than 14?", a: "15, because 14 + 1 = 15." },
        { q: "How do we write fifteen?", a: "15." }
      ],
      quiz: [
        {
          q: "What is the number name of 12?",
          options: ["Twenty", "Twelve", "Eleven", "Thirteen"],
          answer: 1,
          explain: "12 is read as twelve."
        },
        {
          q: "Which number comes after 17?",
          options: ["16", "19", "18", "15"],
          answer: 2,
          explain: "Counting: 17, then 18."
        },
        {
          q: "What is 10 + 4?",
          options: ["6", "104", "4", "14"],
          answer: 3,
          explain: "10 and 4 more make 14."
        },
        {
          q: "Which number is twenty?",
          options: ["2", "12", "20", "19"],
          answer: 2,
          explain: "Twenty is written as 20."
        },
        {
          q: "Count: 16, 17, __, 19. Which number is missing?",
          options: ["15", "18", "20", "16"],
          answer: 1,
          explain: "After 17 comes 18, and then 19."
        }
      ]
    },

    // ───────────────────────────── 5. Addition up to 9 ─────────────────────────────
    {
      id: "addition-up-to-9",
      title: "Addition up to 9",
      section: "Addition and Subtraction",
      summary: "Addition means putting things together. We add numbers up to 9 and learn the plus and equals signs.",
      notes: [
        {
          heading: "What is addition?",
          points: [
            "Addition means putting things together. We use the **plus sign (+)**.",
            "2 + 3 = 5 means 2 and 3 together make 5.",
            "The **equals sign (=)** shows that both sides have the same value."
          ]
        },
        {
          heading: "Counting on",
          points: [
            "To find 4 + 2, start at the bigger number 4 and count 2 more: 5, 6. So 4 + 2 = 6.",
            "Numbers can be added in any order: 2 + 4 is also 6."
          ]
        }
      ],
      terms: [
        { term: "Addition", meaning: "Putting numbers together to get a total." },
        { term: "Plus sign (+)", meaning: "The sign that shows we are adding." },
        { term: "Equals sign (=)", meaning: "The sign that shows both sides are the same." },
        { term: "Sum", meaning: "The answer when we add numbers." }
      ],
      examples: [
        {
          q: "Meera has 3 pencils. Her friend gives her 4 more. How many pencils does she have now?",
          steps: ["Start at 3.", "Count on 4 more: 4, 5, 6, 7.", "3 + 4 = 7."],
          answer: "She has 7 pencils."
        }
      ],
      qa: [
        { q: "What does the plus sign (+) mean?", a: "It means to put together, or to add." },
        { q: "What is the sum of 2 and 5?", a: "2 + 5 = 7, so the sum is 7." }
      ],
      quiz: [
        {
          q: "What is 2 + 3?",
          options: ["4", "6", "5", "1"],
          answer: 2,
          explain: "2 and 3 together make 5."
        },
        {
          q: "What is 1 + 6?",
          options: ["5", "7", "8", "6"],
          answer: 1,
          explain: "Start at 6 and count 1 more: 7."
        },
        {
          q: "What is 4 + 4?",
          options: ["8", "9", "6", "7"],
          answer: 0,
          explain: "4 and 4 make 8."
        },
        {
          q: "Ravi has 5 mangoes. He gets 3 more. How many mangoes does he have in all?",
          options: ["2", "3", "9", "8"],
          answer: 3,
          explain: "5 + 3 = 8."
        },
        {
          q: "What is the sum of 4 and 5?",
          options: ["8", "45", "1", "9"],
          answer: 3,
          explain: "4 + 5 = 9."
        }
      ]
    },

    // ───────────────────────────── 6. Subtraction up to 9 ─────────────────────────────
    {
      id: "subtraction-up-to-9",
      title: "Subtraction up to 9",
      section: "Addition and Subtraction",
      summary: "Subtraction means taking away. We learn the minus sign and how to find how many are left.",
      notes: [
        {
          heading: "What is subtraction?",
          points: [
            "Subtraction means taking away. We use the **minus sign (−)**.",
            "5 − 2 = 3 means 2 taken away from 5 leaves 3."
          ]
        },
        {
          heading: "Counting back",
          points: [
            "To find 9 − 3, start at 9 and count back 3: 8, 7, 6. So 9 − 3 = 6.",
            "Counting back is the same as taking away."
          ]
        }
      ],
      terms: [
        { term: "Subtraction", meaning: "Taking a number away from another number." },
        { term: "Minus sign (−)", meaning: "The sign that shows we are taking away." },
        { term: "Take away", meaning: "Remove some things from a group." },
        { term: "Left over", meaning: "What is still there after taking some away." }
      ],
      examples: [
        {
          q: "There are 8 kites in the sky. 3 kites come down. How many kites are still in the sky?",
          steps: ["Start at 8.", "Count back 3: 7, 6, 5.", "8 − 3 = 5."],
          answer: "5 kites are still in the sky."
        }
      ],
      qa: [
        { q: "What does the minus sign (−) mean?", a: "It means take away." },
        { q: "What is 6 − 4?", a: "6 − 4 = 2. Take 4 away from 6 and 2 are left." }
      ],
      quiz: [
        {
          q: "What is 9 − 4?",
          options: ["3", "5", "4", "6"],
          answer: 1,
          explain: "Count back 4 from 9: 8, 7, 6, 5."
        },
        {
          q: "What is 7 − 0?",
          options: ["7", "1", "0", "6"],
          answer: 0,
          explain: "Taking away zero leaves 7."
        },
        {
          q: "What is 8 − 5?",
          options: ["13", "4", "2", "3"],
          answer: 3,
          explain: "Take away 5 from 8 and 3 are left."
        },
        {
          q: "There are 6 balloons. 2 of them burst. How many are left?",
          options: ["4", "8", "2", "3"],
          answer: 0,
          explain: "6 − 2 = 4."
        },
        {
          q: "What is 5 − 2?",
          options: ["2", "7", "3", "5"],
          answer: 2,
          explain: "5 − 2 = 3."
        }
      ]
    },

    // ───────────────────────────── 7. Numbers up to 50 ─────────────────────────────
    {
      id: "numbers-up-to-50",
      title: "Numbers up to 50",
      section: "Numbers",
      summary: "We learn tens and ones, and count up to 50. A ten is a group of 10 things.",
      notes: [
        {
          heading: "Tens and ones",
          points: [
            "10 ones make one **ten**. 30 is three tens.",
            "In 25, the 2 means 2 tens (20) and the 5 means 5 ones."
          ]
        },
        {
          heading: "Counting up to 50",
          points: [
            "Count by tens: 10, 20, 30, 40, 50.",
            "The number between 44 and 46 is 45."
          ]
        }
      ],
      terms: [
        { term: "Tens", meaning: "Groups of 10. 40 is four tens." },
        { term: "Ones", meaning: "Single things that are not in a group of ten." },
        { term: "Count by tens", meaning: "Counting 10, 20, 30, … in jumps of ten." },
        { term: "Between", meaning: "A number that comes in the middle of two other numbers." }
      ],
      examples: [
        {
          q: "How many tens and ones are in 36?",
          steps: ["36 = 30 + 6.", "30 is 3 tens.", "6 is 6 ones."],
          answer: "36 has 3 tens and 6 ones."
        }
      ],
      qa: [
        { q: "How many tens and ones are in 42?", a: "42 has 4 tens and 2 ones." },
        { q: "Which number comes between 39 and 41?", a: "40." }
      ],
      quiz: [
        {
          q: "How many tens are in 30?",
          options: ["3", "30", "0", "13"],
          answer: 0,
          explain: "30 is 3 tens."
        },
        {
          q: "Which number is 4 tens and 7 ones?",
          options: ["74", "47", "407", "40"],
          answer: 1,
          explain: "4 tens is 40, and 40 + 7 = 47."
        },
        {
          q: "Count by tens: 10, 20, __, 40. Which number is missing?",
          options: ["25", "30", "35", "31"],
          answer: 1,
          explain: "Counting by tens: 10, 20, 30, 40."
        },
        {
          q: "Which number comes after 29?",
          options: ["20", "28", "31", "30"],
          answer: 3,
          explain: "After 29 comes 30."
        },
        {
          q: "Which number is between 44 and 46?",
          options: ["45", "43", "54", "47"],
          answer: 0,
          explain: "The number between 44 and 46 is 45."
        }
      ]
    },

    // ───────────────────────────── 8. Longer and Shorter, Heavier and Lighter ─────────────────────────────
    {
      id: "longer-shorter-heavier-lighter",
      title: "Longer and Shorter, Heavier and Lighter",
      section: "Measurement",
      summary: "We compare things by their length and by their weight. We use words like longer, shorter, heavier and lighter.",
      notes: [
        {
          heading: "Longer and shorter",
          points: [
            "A train is longer than a toy car.",
            "A pencil is shorter than a cricket bat.",
            "To compare two things, put them side by side with one end at the same place."
          ]
        },
        {
          heading: "Heavier and lighter",
          points: [
            "A brick is heavier than a feather.",
            "A bucket full of water is heavier than an empty bucket.",
            "We can hold two things in our hands to feel which one is heavier."
          ]
        }
      ],
      terms: [
        { term: "Longer", meaning: "Having more length than something else." },
        { term: "Shorter", meaning: "Having less length than something else." },
        { term: "Heavier", meaning: "Weighing more than something else." },
        { term: "Lighter", meaning: "Weighing less than something else." }
      ],
      examples: [
        {
          q: "Which is heavier: a bag of books or a pencil?",
          steps: ["A bag of books is big and full.", "A pencil is small and light.", "So the bag is heavier."],
          answer: "The bag of books is heavier."
        }
      ],
      qa: [
        { q: "What is the opposite of longer?", a: "Shorter." },
        { q: "Which is lighter: a feather or a stone?", a: "A feather is lighter than a stone." }
      ],
      quiz: [
        {
          q: "Which is longer: a train or a toy car?",
          options: ["A toy car", "A train", "A button", "A matchbox"],
          answer: 1,
          explain: "A train is longer than a toy car."
        },
        {
          q: "Which is heavier: a feather or a brick?",
          options: ["A feather", "A pin", "A brick", "A leaf"],
          answer: 2,
          explain: "A brick is much heavier than a feather."
        },
        {
          q: "What is the opposite of taller?",
          options: ["Shorter", "Longer", "Bigger", "Heavier"],
          answer: 0,
          explain: "Taller means higher, so its opposite is shorter."
        },
        {
          q: "Which is lighter: a bucket of water or an empty bucket?",
          options: ["An empty bucket", "A bucket full of water", "A full bag of rice", "A big stone"],
          answer: 0,
          explain: "An empty bucket has nothing in it, so it is lighter."
        },
        {
          q: "Which is shorter: a cricket bat or a pencil?",
          options: ["A cricket bat", "A tree", "A bus", "A pencil"],
          answer: 3,
          explain: "A pencil is shorter than a cricket bat."
        }
      ]
    },

    // ───────────────────────────── 9. Money: Coins and Notes ─────────────────────────────
    {
      id: "money-coins-and-notes",
      title: "Money: Coins and Notes",
      section: "Money",
      summary: "We learn the coins and notes we use in India and how to add their values.",
      notes: [
        {
          heading: "Coins we use",
          points: [
            "Indian coins include ₹1, ₹2, ₹5 and ₹10.",
            "A coin is small and round, and it is made of metal."
          ]
        },
        {
          heading: "Notes and adding money",
          points: [
            "Notes are made of paper. We have ₹10, ₹20, ₹50 and ₹100 notes.",
            "A ₹5 coin and a ₹2 coin together make ₹7. So ₹5 + ₹2 = ₹7."
          ]
        }
      ],
      terms: [
        { term: "Coin", meaning: "Metal money, like a ₹5 coin." },
        { term: "Note", meaning: "Paper money, like a ₹10 note." },
        { term: "Rupee (₹)", meaning: "The money used in India." }
      ],
      examples: [
        {
          q: "Aman has a ₹5 coin and a ₹1 coin. How much money does he have?",
          steps: ["Add the coins: ₹5 + ₹1.", "₹5 + ₹1 = ₹6."],
          answer: "Aman has ₹6."
        }
      ],
      qa: [
        { q: "Which coins are used in India?", a: "₹1, ₹2, ₹5 and ₹10 coins." },
        { q: "Is ₹10 more or less than ₹5?", a: "₹10 is more than ₹5." }
      ],
      quiz: [
        {
          q: "Which is more: ₹10 or ₹5?",
          options: ["₹5", "₹1", "₹10", "₹2"],
          answer: 2,
          explain: "₹10 is more than ₹5."
        },
        {
          q: "Which of these is a coin?",
          options: ["₹10 note", "₹50 note", "₹5 coin", "₹100 note"],
          answer: 2,
          explain: "₹5 is a coin. The others are notes."
        },
        {
          q: "A ₹5 coin and a ₹2 coin together make:",
          options: ["₹3", "₹7", "₹52", "₹2"],
          answer: 1,
          explain: "₹5 + ₹2 = ₹7."
        },
        {
          q: "Which of these is a note?",
          options: ["₹1 coin", "₹2 coin", "₹5 coin", "₹50 note"],
          answer: 3,
          explain: "₹50 is a paper note. The others are coins."
        },
        {
          q: "Aman has ₹10. He buys a toffee for ₹10. How much money is left?",
          options: ["₹20", "₹0", "₹5", "₹1"],
          answer: 1,
          explain: "₹10 − ₹10 = ₹0. Nothing is left."
        }
      ]
    },

    // ───────────────────────────── 10. Patterns ─────────────────────────────
    {
      id: "patterns",
      title: "Patterns",
      section: "Patterns",
      summary: "A pattern is something that repeats in the same order. We find the part that repeats and guess what comes next.",
      notes: [
        {
          heading: "What is a pattern?",
          points: [
            "A pattern repeats the same things again and again.",
            "Red, blue, red, blue, … is a pattern."
          ]
        },
        {
          heading: "Finding the next one",
          points: [
            "Look for the part that repeats. In 1, 2, 1, 2, … the repeating part is 1, 2.",
            "Ask yourself: what comes next? Then say the next part of the pattern."
          ]
        }
      ],
      terms: [
        { term: "Pattern", meaning: "Things that repeat in the same order." },
        { term: "Repeat", meaning: "To come again and again." },
        { term: "Next", meaning: "The thing that comes right after the last one." }
      ],
      examples: [
        {
          q: "What comes next in the pattern: circle, square, circle, square, circle, …?",
          steps: ["The pattern is circle, then square.", "It repeats again and again.", "After a circle comes a square."],
          answer: "A square comes next."
        }
      ],
      qa: [
        { q: "What is a pattern?", a: "A pattern is something that repeats in the same order." },
        { q: "What comes next in: red, green, red, green?", a: "Red." }
      ],
      quiz: [
        {
          q: "What comes next: red, blue, red, blue, __?",
          options: ["green", "red", "blue", "yellow"],
          answer: 1,
          explain: "The pattern repeats red and blue, so red comes next."
        },
        {
          q: "What comes next: 1, 2, 1, 2, __?",
          options: ["1", "2", "3", "4"],
          answer: 0,
          explain: "The pattern is 1, 2, repeated. So 1 comes next."
        },
        {
          q: "Pattern: ○ △ □ ○ △ __. What comes next?",
          options: ["○", "△", "□", "◇"],
          answer: 2,
          explain: "The shapes repeat: ○, △, □. So □ comes next."
        },
        {
          q: "What comes next: A, B, A, B, A, __?",
          options: ["C", "B", "A", "D"],
          answer: 1,
          explain: "The letters alternate A, B, so B comes next."
        },
        {
          q: "What comes next: 5, 10, 5, 10, __?",
          options: ["5", "20", "15", "10"],
          answer: 3,
          explain: "The pattern is 5, 10, repeated. So 10 comes next."
        }
      ]
    },

    // ───────────────────────────── 11. Time: Day and Night, Days of the Week ─────────────────────────────
    {
      id: "time-day-night-and-week",
      title: "Time: Day and Night, Days of the Week",
      section: "Time",
      summary: "We learn that the day is bright and the night is dark, and we learn the seven days of the week.",
      notes: [
        {
          heading: "Day and night",
          points: [
            "The sun shines in the day. We go to school in the day.",
            "At night the sky is dark. We see the moon and stars at night."
          ]
        },
        {
          heading: "Days of the week",
          points: [
            "There are 7 days in a week: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday and Sunday.",
            "If today is Monday, then tomorrow is Tuesday and yesterday was Sunday."
          ]
        }
      ],
      terms: [
        { term: "Day", meaning: "The time when the sun is shining." },
        { term: "Night", meaning: "The time when it is dark and we sleep." },
        { term: "Week", meaning: "A group of 7 days." },
        { term: "Tomorrow", meaning: "The day that comes after today." }
      ],
      examples: [
        {
          q: "Today is Wednesday. What day is tomorrow?",
          steps: ["Wednesday is followed by Thursday.", "So tomorrow is Thursday."],
          answer: "Tomorrow is Thursday."
        }
      ],
      qa: [
        { q: "How many days are there in a week?", a: "7 days." },
        { q: "What day comes after Friday?", a: "Saturday." }
      ],
      quiz: [
        {
          q: "How many days are there in a week?",
          options: ["5", "6", "7", "8"],
          answer: 2,
          explain: "A week has 7 days."
        },
        {
          q: "Which day comes after Monday?",
          options: ["Sunday", "Wednesday", "Friday", "Tuesday"],
          answer: 3,
          explain: "Monday is followed by Tuesday."
        },
        {
          q: "When do we see the moon and stars?",
          options: ["In the morning", "At night", "At school time", "At breakfast"],
          answer: 1,
          explain: "The moon and stars are seen at night, when the sky is dark."
        },
        {
          q: "Which day comes before Saturday?",
          options: ["Sunday", "Friday", "Thursday", "Monday"],
          answer: 1,
          explain: "Friday comes just before Saturday."
        },
        {
          q: "The sun shines mostly in the:",
          options: ["Day", "Night", "Midnight", "Late night"],
          answer: 0,
          explain: "The sun shines in the day."
        }
      ]
    }
  ]
});
