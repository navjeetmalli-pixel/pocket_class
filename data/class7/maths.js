// Class 7 Mathematics: current NCERT textbook "Ganita Prakash" (Grade 7, Parts I and II).
// Format: see CONTENT_GUIDE.md
StudyData.add(7, "maths", {
  syllabus: {board: "CBSE", match: "textbook", books: ["Ganita Prakash Part I", "Ganita Prakash Part II"], reviewed: false},
  chapters: [
    // ───────────────────────────── Part I ─────────────────────────────
    {
      id: "large-numbers-around-us",
      title: "Large Numbers Around Us",
      section: "Part I",
      summary: "We read, write, compare and estimate very large numbers using lakhs and crores, and meet the international system of millions and billions.",
      notes: [
        {
          heading: "Indian and international systems",
          points: [
            "In the Indian system the place values are ones, tens, hundreds, thousands, **lakhs** and **crores**. 1 lakh = 1,00,000 and 1 crore = 1,00,00,000.",
            "In the international system the groups are thousands, **millions** and **billions**. 1 million = 10,00,000 (ten lakh) and 1 billion = 100 crore.",
            "Commas in the Indian system go after the first 3 digits from the right and then after every 2 digits: 12,34,56,789.",
            "1 crore = 100 lakh = 10 million."
          ]
        },
        {
          heading: "Comparing and estimating",
          points: [
            "To compare large numbers, first compare the number of digits. The number with more digits is larger.",
            "If the digit counts are equal, compare digits from the left, place by place.",
            "**Estimation** means finding a number close to the real one, for example by rounding to the nearest thousand or lakh.",
            "Estimates are useful to check whether an exact answer is sensible."
          ]
        },
        {
          heading: "Powers of 10 and big calculations",
          points: [
            "Multiplying by 10, 100, 1000 adds 1, 2, 3 zeroes: 45 × 1000 = 45,000.",
            "10 × 10 × 10 × 10 × 10 = 10⁵ = 1 lakh, and 10⁷ = 1 crore.",
            "To work out how long a large count of seconds is, convert step by step: 60 seconds = 1 minute, 60 minutes = 1 hour, 24 hours = 1 day.",
            "Large numbers appear in populations, distances in space and the money in a national budget."
          ]
        }
      ],
      formulas: [
        "1 lakh = 1,00,000 = 10⁵;  1 crore = 1,00,00,000 = 10⁷",
        "1 million = 10 lakh = 10⁶;  1 billion = 100 crore = 10⁹",
        "1 crore = 100 lakh = 10 million"
      ],
      terms: [
        { term: "Lakh", meaning: "A hundred thousand, written 1,00,000." },
        { term: "Crore", meaning: "A hundred lakh, or ten million, written 1,00,00,000." },
        { term: "Million", meaning: "One thousand thousand, 10,00,000 (ten lakh)." },
        { term: "Estimation", meaning: "Finding an approximate value, usually by rounding, instead of the exact one." }
      ],
      examples: [
        {
          q: "Write 5 crore 36 lakh 4 thousand 7 hundred in figures and in the international system.",
          steps: ["5 crore = 5,00,00,000 and 36 lakh = 36,00,000", "Add 4 thousand and 700: 5,00,00,000 + 36,00,000 + 4,000 + 700 = 5,36,04,700", "In the international system the same number is 53,604,700"],
          answer: "5,36,04,700 (53,604,700 in the international system)"
        }
      ],
      qa: [
        { q: "How many lakhs make one crore? How many millions make one billion?", a: "100 lakh make 1 crore. 1000 million make 1 billion." },
        { q: "Round 4,67,382 to the nearest thousand.", a: "The hundreds digit is 3, which is less than 5, so we round down. The answer is **4,67,000**." }
      ],
      quiz: [
        { q: "How many lakhs make one crore?", options: ["10", "1000", "100", "10,000"], answer: 2, explain: "1 crore = 1,00,00,000 and 1 lakh = 1,00,000, so 1 crore = 100 lakh." },
        { q: "One million is equal to:", options: ["1 lakh", "10 lakh", "1 crore", "100 lakh"], answer: 1, explain: "1 million = 10,00,000 which is 10 lakh." },
        { q: "How is 3,40,50,000 read in the Indian system?", options: ["Three crore forty lakh fifty thousand", "Thirty-four lakh fifty thousand", "Three lakh forty thousand fifty", "Three crore four lakh fifty thousand"], answer: 0, explain: "3,40,50,000 has 3 crore, 40 lakh and 50 thousand." },
        { q: "Which is the greatest number?", options: ["98,99,999", "1,02,345", "9,89,999", "10,00,000"], answer: 0, explain: "98,99,999 has 8 digits while the others have 7 or fewer." },
        { q: "10⁷ equals:", options: ["1 lakh", "1 million", "1 crore", "1 billion"], answer: 2, explain: "10⁷ = 1,00,00,000 = 1 crore. 1 million is 10⁶." },
        { q: "1 billion in the Indian system is:", options: ["10 crore", "1000 crore", "100 lakh", "100 crore"], answer: 3, explain: "1 billion = 1000 million = 100 crore." }
      ]
    },
    {
      id: "arithmetic-expressions",
      title: "Arithmetic Expressions",
      section: "Part I",
      summary: "We read and compare arithmetic expressions, use brackets and the order of operations, and use properties of numbers to calculate smartly.",
      notes: [
        {
          heading: "Order of operations",
          points: [
            "Work out brackets first, then multiplication and division (left to right), then addition and subtraction (left to right).",
            "So 3 + 4 × 5 = 3 + 20 = 23, but (3 + 4) × 5 = 35.",
            "In 24 ÷ 4 × 2 do the operations from left to right: 6 × 2 = 12.",
            "Brackets can change the value, so they must be written carefully."
          ]
        },
        {
          heading: "Properties that help",
          points: [
            "**Distributive property**: a × (b + c) = a × b + a × c. For example 7 × 102 = 7 × 100 + 7 × 2 = 714.",
            "Also a × (b − c) = a × b − a × c. So 99 × 15 = 100 × 15 − 15 = 1485.",
            "Addition and multiplication can be done in any order and grouping.",
            "Subtraction and division are not commutative: 8 − 3 ≠ 3 − 8."
          ]
        },
        {
          heading: "Comparing expressions",
          points: [
            "We can often compare two expressions without calculating them fully.",
            "For example 15 × 12 is bigger than 15 × 11 because one more 15 is added.",
            "Expressions with the same value can look very different: 6 × 4 and 20 + 4 are both 24.",
            "Writing a word problem as an expression first makes it easier to solve."
          ]
        }
      ],
      formulas: [
        "a × (b + c) = a × b + a × c",
        "a × (b − c) = a × b − a × c",
        "Order: Brackets, then × and ÷, then + and − (left to right)"
      ],
      terms: [
        { term: "Expression", meaning: "A combination of numbers and operations, such as 5 × (3 + 2)." },
        { term: "Distributive property", meaning: "Multiplication spreads over addition or subtraction: a × (b + c) = a × b + a × c." },
        { term: "Bracket", meaning: "Symbols ( ) that show which operation must be done first." },
        { term: "Commutative", meaning: "The order does not change the result, as in 4 + 9 = 9 + 4." }
      ],
      examples: [
        {
          q: "Evaluate 18 + 6 × (10 − 4) ÷ 3.",
          steps: ["Bracket first: 10 − 4 = 6", "Multiply and divide left to right: 6 × 6 = 36, then 36 ÷ 3 = 12", "Add: 18 + 12 = 30"],
          answer: "30"
        }
      ],
      qa: [
        { q: "Use the distributive property to find 48 × 101.", a: "48 × 101 = 48 × (100 + 1) = 4800 + 48 = **4848**." },
        { q: "Is 12 − 5 − 2 the same as 12 − (5 − 2)?", a: "No. 12 − 5 − 2 = 5, but 12 − (5 − 2) = 12 − 3 = 9. Brackets change the order and the value." }
      ],
      quiz: [
        { q: "The value of 5 + 3 × 4 is:", options: ["32", "17", "20", "12"], answer: 1, explain: "Multiply first: 3 × 4 = 12, then 5 + 12 = 17." },
        { q: "The value of (5 + 3) × 4 is:", options: ["17", "20", "32", "24"], answer: 2, explain: "Bracket first: 8 × 4 = 32." },
        { q: "24 ÷ 4 × 2 equals:", options: ["3", "12", "48", "6"], answer: 1, explain: "Left to right: 24 ÷ 4 = 6, then 6 × 2 = 12." },
        { q: "99 × 25 is easiest worked as:", options: ["100 × 25 + 25", "99 × 20 + 5", "100 × 25 − 25", "100 × 24"], answer: 2, explain: "99 × 25 = (100 − 1) × 25 = 2500 − 25 = 2475." },
        { q: "Which pair of expressions has equal value?", options: ["8 − 3 and 3 − 8", "6 × (2 + 3) and 6 × 2 + 3", "20 ÷ 4 and 4 ÷ 20", "6 × (2 + 3) and 6 × 2 + 6 × 3"], answer: 3, explain: "By the distributive property both equal 30." }
      ]
    },
    {
      id: "a-peek-beyond-the-point",
      title: "A Peek Beyond the Point",
      section: "Part I",
      summary: "We extend place value beyond the decimal point to tenths, hundredths and thousandths, and compare, add and subtract decimal numbers.",
      notes: [
        {
          heading: "Place value in decimals",
          points: [
            "Digits after the decimal point are tenths, hundredths, thousandths. In 4.375 the 3 is 3 tenths, 7 is 7 hundredths and 5 is 5 thousandths.",
            "Each place is 10 times the place to its right and one-tenth of the place to its left.",
            "4.375 = 4 + 3/10 + 7/100 + 5/1000.",
            "Writing zeroes at the end of a decimal does not change its value: 2.5 = 2.50 = 2.500."
          ]
        },
        {
          heading: "Comparing decimals",
          points: [
            "First compare the whole-number parts. The larger whole part gives the larger number.",
            "If the whole parts are equal, compare tenths, then hundredths, and so on.",
            "So 3.52 > 3.5 because 3.52 = 3.52 and 3.5 = 3.50, and 52 hundredths > 50 hundredths.",
            "Decimals can be placed on a number line by dividing each unit into 10 equal parts."
          ]
        },
        {
          heading: "Adding and subtracting decimals",
          points: [
            "Write the numbers with decimal points one below the other, so that equal places line up.",
            "Add zeroes to make the number of decimal places equal if needed, then add or subtract as with whole numbers.",
            "Units help: 1 m = 100 cm, so 2.35 m = 235 cm; 1 kg = 1000 g, so 0.250 kg = 250 g.",
            "Money is a decimal: ₹45.50 means 45 rupees and 50 paise."
          ]
        }
      ],
      formulas: [
        "1 tenth = 1/10 = 0.1;  1 hundredth = 1/100 = 0.01;  1 thousandth = 1/1000 = 0.001",
        "1 m = 100 cm;  1 cm = 0.01 m;  1 kg = 1000 g;  1 g = 0.001 kg"
      ],
      terms: [
        { term: "Decimal point", meaning: "The dot that separates the whole-number part from the part smaller than 1." },
        { term: "Tenths", meaning: "The first place after the decimal point; each tenth is 1/10." },
        { term: "Hundredths", meaning: "The second place after the decimal point; each is 1/100." },
        { term: "Thousandths", meaning: "The third place after the decimal point; each is 1/1000." }
      ],
      examples: [
        {
          q: "Add 12.75, 3.6 and 0.485.",
          steps: ["Make the places equal: 12.750, 3.600, 0.485", "Add: 12.750 + 3.600 = 16.350", "16.350 + 0.485 = 16.835"],
          answer: "16.835"
        }
      ],
      qa: [
        { q: "Which is larger, 0.8 or 0.75? Give a reason.", a: "0.8 = 0.80, which is 80 hundredths, while 0.75 is 75 hundredths. So **0.8** is larger." },
        { q: "Express 2 m 5 cm in metres.", a: "5 cm = 0.05 m, so the length is **2.05 m**." }
      ],
      quiz: [
        { q: "In 6.472, the digit 7 stands for:", options: ["7 tenths", "7 hundredths", "7 thousandths", "7 ones"], answer: 1, explain: "The places after the point are tenths (4), hundredths (7), thousandths (2)." },
        { q: "Which is the smallest?", options: ["0.5", "0.45", "0.405", "0.54"], answer: 2, explain: "Written with 3 places: 0.500, 0.450, 0.405, 0.540. The smallest is 0.405." },
        { q: "3.4 + 0.65 equals:", options: ["3.69", "4.05", "9.9", "3.99"], answer: 1, explain: "3.40 + 0.65 = 4.05." },
        { q: "250 g in kilograms is:", options: ["2.5 kg", "0.025 kg", "25 kg", "0.25 kg"], answer: 3, explain: "250 ÷ 1000 = 0.25 kg." },
        { q: "Which decimal is equal to 7.5?", options: ["7.05", "7.50", "0.75", "75.0"], answer: 1, explain: "Zeroes at the end of a decimal do not change its value, so 7.5 = 7.50." }
      ]
    },
    {
      id: "expressions-using-letter-numbers",
      title: "Expressions using Letter-Numbers",
      section: "Part I",
      summary: "Letters can stand for numbers that vary or are unknown. We write rules from patterns as algebraic expressions, simplify them and find their values.",
      notes: [
        {
          heading: "Letter-numbers and expressions",
          points: [
            "A letter such as n can stand for any number. It is called a **variable**.",
            "5n means 5 × n, and n + 3 means 3 more than n. We write 2 × n as 2n, without the × sign.",
            "A rule from a pattern is an expression: n squares in a row need 3n + 1 matchsticks.",
            "An expression like 4n + 7 has two **terms**: 4n and 7."
          ]
        },
        {
          heading: "Simplifying",
          points: [
            "**Like terms** have the same letter part, such as 3n and 5n. They can be added: 3n + 5n = 8n.",
            "Unlike terms such as 3n and 5 cannot be combined: 3n + 5 stays as it is.",
            "Distributive property works with letters: 2(n + 4) = 2n + 8.",
            "x × x is written x², and x + x is 2x. These are different."
          ]
        },
        {
          heading: "Finding values",
          points: [
            "To find the value of an expression, replace the letter by a number.",
            "If n = 5, then 3n + 2 = 3 × 5 + 2 = 17.",
            "The same expression gives different values for different numbers.",
            "Expressions help us write general rules, such as the perimeter of a square of side s is 4s."
          ]
        }
      ],
      formulas: [
        "Perimeter of a square = 4s;  of a rectangle = 2(l + b)",
        "nth even number = 2n;  nth odd number = 2n − 1",
        "ax + bx = (a + b)x"
      ],
      terms: [
        { term: "Variable", meaning: "A letter that stands for a number that can change." },
        { term: "Term", meaning: "A part of an expression joined by + or −, such as 4n in 4n + 7." },
        { term: "Like terms", meaning: "Terms with the same letter part, e.g. 3x and 9x." },
        { term: "Coefficient", meaning: "The number multiplying the letter; in 7y it is 7." }
      ],
      examples: [
        {
          q: "Simplify 5a + 3b − 2a + 4b and find its value for a = 2, b = 1.",
          steps: ["Group like terms: (5a − 2a) + (3b + 4b)", "= 3a + 7b", "Put a = 2, b = 1: 3 × 2 + 7 × 1 = 13"],
          answer: "3a + 7b; value 13"
        }
      ],
      qa: [
        { q: "Write an expression for the cost of n pens at ₹12 each and a notebook at ₹30.", a: "Cost = 12n + 30 rupees." },
        { q: "Is 3x + 4y equal to 7xy?", a: "No. 3x and 4y are unlike terms and cannot be added into one term. 3x + 4y stays as it is." }
      ],
      quiz: [
        { q: "In 4n + 7, the coefficient of n is:", options: ["7", "n", "4", "11"], answer: 2, explain: "The number multiplying n is 4." },
        { q: "Simplify 6x + 2x.", options: ["8x", "12x", "8x²", "62x"], answer: 0, explain: "Like terms: (6 + 2)x = 8x." },
        { q: "The value of 3n + 2 for n = 4 is:", options: ["9", "24", "14", "34"], answer: 2, explain: "3 × 4 + 2 = 14." },
        { q: "2(x + 5) equals:", options: ["2x + 5", "x + 10", "2x + 7", "2x + 10"], answer: 3, explain: "Multiply both terms by 2: 2x + 10." },
        { q: "Which pair are like terms?", options: ["5a and 5b", "3x and 3x²", "4y and 9y", "2n and 2"], answer: 2, explain: "4y and 9y have the same letter part y." },
        { q: "The perimeter of a square of side s is:", options: ["4s", "s²", "2s", "s + 4"], answer: 0, explain: "A square has four equal sides, so perimeter = s + s + s + s = 4s." }
      ]
    },
    {
      id: "parallel-and-intersecting-lines",
      title: "Parallel and Intersecting Lines",
      section: "Part I",
      summary: "We study the angles made when lines cross, and when a transversal cuts parallel lines, and use these relations to find unknown angles.",
      notes: [
        {
          heading: "Angles at a point and on a line",
          points: [
            "Angles that make a straight line add up to **180°**. Two such angles form a **linear pair**.",
            "Angles around a point add up to **360°**.",
            "When two lines intersect, **vertically opposite angles** are equal.",
            "Two angles adding to 90° are complementary; adding to 180° are supplementary."
          ]
        },
        {
          heading: "Transversal and parallel lines",
          points: [
            "A **transversal** is a line that cuts two or more lines at different points.",
            "If the two lines are parallel, **corresponding angles** are equal.",
            "If the lines are parallel, **alternate interior angles** are equal.",
            "If the lines are parallel, **interior angles on the same side** of the transversal add up to 180°."
          ]
        },
        {
          heading: "Checking for parallel lines",
          points: [
            "The converse is also true: if corresponding angles are equal, the two lines are parallel.",
            "If alternate interior angles are equal, the lines are parallel.",
            "If interior angles on the same side add up to 180°, the lines are parallel.",
            "Parallel lines never meet however far they are extended."
          ]
        }
      ],
      formulas: [
        "Linear pair: ∠1 + ∠2 = 180°",
        "Angles around a point = 360°",
        "Parallel lines + transversal: corresponding angles equal, alternate interior angles equal, co-interior angles sum to 180°"
      ],
      terms: [
        { term: "Transversal", meaning: "A line that crosses two or more other lines at different points." },
        { term: "Vertically opposite angles", meaning: "The pairs of equal angles formed opposite each other when two lines cross." },
        { term: "Corresponding angles", meaning: "Angles in matching positions at the two crossing points of a transversal." },
        { term: "Alternate interior angles", meaning: "Angles between the two lines on opposite sides of the transversal." }
      ],
      examples: [
        {
          q: "Two parallel lines are cut by a transversal. One interior angle is 65°. Find the interior angle on the same side.",
          steps: ["Interior angles on the same side of the transversal are supplementary", "Angle = 180° − 65° = 115°"],
          answer: "115°"
        }
      ],
      qa: [
        { q: "Two lines intersect and one of the four angles is 40°. Find the other three.", a: "The vertically opposite angle is also 40°. The other two are each 180° − 40° = **140°**." },
        { q: "How can you tell that two lines cut by a transversal are parallel?", a: "If a pair of corresponding angles or alternate interior angles is equal, or co-interior angles add up to 180°, the lines are parallel." }
      ],
      quiz: [
        { q: "The angles of a linear pair add up to:", options: ["90°", "360°", "180°", "100°"], answer: 2, explain: "Angles on a straight line sum to 180°." },
        { q: "Vertically opposite angles are:", options: ["Supplementary", "Equal", "Complementary", "Always 90°"], answer: 1, explain: "When two lines cross, the angles opposite each other are equal." },
        { q: "If two parallel lines are cut by a transversal, alternate interior angles are:", options: ["Equal", "Supplementary", "Complementary", "Unrelated"], answer: 0, explain: "Alternate interior angles are equal for parallel lines." },
        { q: "Co-interior angles on parallel lines add up to:", options: ["90°", "360°", "180°", "270°"], answer: 2, explain: "Interior angles on the same side of the transversal are supplementary." },
        { q: "One angle of a linear pair is 110°. The other is:", options: ["110°", "70°", "250°", "80°"], answer: 1, explain: "180° − 110° = 70°." },
        { q: "Four angles around a point are 90°, 100°, 120° and x. Then x is:", options: ["60°", "50°", "70°", "40°"], answer: 1, explain: "Angles around a point sum to 360°: 360° − 310° = 50°. So x = 50°." }
      ]
    },
    {
      id: "number-play",
      title: "Number Play",
      section: "Part I",
      summary: "We explore even and odd numbers, digit puzzles and divisibility tests, and use them to explain why number tricks work.",
      notes: [
        {
          heading: "Even and odd numbers",
          points: [
            "Even + even = even, odd + odd = even, and even + odd = odd.",
            "Even × anything is even; odd × odd is odd.",
            "The sum of any two consecutive numbers is odd, for example 6 + 7 = 13.",
            "Such facts help us explain why a number trick always works, not just once."
          ]
        },
        {
          heading: "Divisibility tests",
          points: [
            "By **2**: last digit is 0, 2, 4, 6 or 8. By **5**: last digit is 0 or 5. By **10**: last digit is 0.",
            "By **3**: the sum of the digits is divisible by 3. By **9**: the sum of the digits is divisible by 9.",
            "By **4**: the number formed by the last two digits is divisible by 4. By **8**: the last three digits form a number divisible by 8.",
            "By **11**: the difference between the sum of digits in odd places and in even places is 0 or a multiple of 11. For example 2728: (2 + 2) − (7 + 8) = −11, so it is divisible by 11."
          ]
        },
        {
          heading: "Digit patterns and puzzles",
          points: [
            "A **palindrome** reads the same forwards and backwards, like 4554 or 1221.",
            "Reversing the digits and adding or subtracting repeatedly can produce interesting patterns and fixed results.",
            "A number is divisible by 6 if it is divisible by both 2 and 3.",
            "Writing a number with its digits as a·100 + b·10 + c shows why digit-sum tests work."
          ]
        }
      ],
      formulas: [
        "Divisible by 3 (or 9) if the digit sum is divisible by 3 (or 9)",
        "Divisible by 4 if the last two digits are; by 8 if the last three digits are",
        "Divisible by 11 if (sum of odd-place digits) − (sum of even-place digits) is 0 or a multiple of 11"
      ],
      terms: [
        { term: "Parity", meaning: "Whether a number is even or odd." },
        { term: "Divisibility test", meaning: "A quick rule to check whether a number divides another exactly." },
        { term: "Palindrome", meaning: "A number or word that reads the same from either end." },
        { term: "Multiple", meaning: "A number obtained by multiplying a given number by a whole number." }
      ],
      examples: [
        {
          q: "Is 7,38,216 divisible by 3? By 4? By 9?",
          steps: ["Digit sum = 7 + 3 + 8 + 2 + 1 + 6 = 27, which is divisible by 3 and by 9", "Last two digits 16 are divisible by 4"],
          answer: "Yes, it is divisible by 3, 4 and 9"
        }
      ],
      qa: [
        { q: "Is 1,23,456 divisible by 6? Explain.", a: "It is even, so divisible by 2. Its digit sum 1 + 2 + 3 + 4 + 5 + 6 = 21 is divisible by 3. So it is divisible by **6**." },
        { q: "Show that the sum of three consecutive numbers is divisible by 3.", a: "Let the numbers be n, n + 1, n + 2. Their sum is 3n + 3 = 3(n + 1), which is a multiple of 3." }
      ],
      quiz: [
        { q: "The sum of two odd numbers is always:", options: ["Odd", "Even", "A multiple of 3", "Prime"], answer: 1, explain: "Odd + odd is even, e.g. 3 + 5 = 8." },
        { q: "Which number is divisible by 9?", options: ["4,321", "5,274", "1,235", "3,457"], answer: 1, explain: "5 + 2 + 7 + 4 = 18, which is divisible by 9." },
        { q: "A number is divisible by 4 if:", options: ["Its last digit is even", "Its digit sum is a multiple of 4", "Its last two digits form a number divisible by 4", "Its last digit is 4"], answer: 2, explain: "Since 100 is a multiple of 4, only the last two digits matter." },
        { q: "Which of these is a palindrome?", options: ["1234", "4224", "1231", "2020"], answer: 1, explain: "4224 reads the same in both directions." },
        { q: "Is 2,728 divisible by 11?", options: ["Yes, difference of alternate digit sums is 11", "No, the digit sum is 19", "No, it is odd", "Yes, it ends in 8"], answer: 0, explain: "(2 + 2) − (7 + 8) = −11, a multiple of 11." }
      ]
    },
    {
      id: "a-tale-of-three-intersecting-lines",
      title: "A Tale of Three Intersecting Lines",
      section: "Part I",
      summary: "Three lines that intersect pairwise form a triangle. We study its angle sum, exterior angles and the condition on side lengths for a triangle to exist.",
      notes: [
        {
          heading: "Angle sum and exterior angle",
          points: [
            "The three interior angles of any triangle add up to **180°**.",
            "An **exterior angle** is formed when a side is extended. It equals the sum of the two **interior opposite angles**.",
            "An exterior angle and its adjacent interior angle form a linear pair (180°).",
            "In a right-angled triangle the two acute angles add up to 90°."
          ]
        },
        {
          heading: "Types of triangles",
          points: [
            "By sides: equilateral (3 equal sides), isosceles (2 equal sides), scalene (no equal sides).",
            "By angles: acute (all angles below 90°), right (one 90° angle), obtuse (one angle above 90°).",
            "In an equilateral triangle each angle is 60°.",
            "In an isosceles triangle the angles opposite the equal sides are equal."
          ]
        },
        {
          heading: "Triangle inequality",
          points: [
            "The sum of any two sides of a triangle is **greater than** the third side.",
            "So sides 3 cm, 4 cm, 5 cm form a triangle, but 2 cm, 3 cm, 6 cm do not (2 + 3 < 6).",
            "To check, it is enough to test that the two shorter sides add to more than the longest.",
            "The longest side is opposite the largest angle."
          ]
        }
      ],
      formulas: [
        "Sum of angles of a triangle = 180°",
        "Exterior angle = sum of the two interior opposite angles",
        "a + b > c for the sides a, b, c of a triangle (and for every pair)"
      ],
      terms: [
        { term: "Exterior angle", meaning: "The angle formed outside a triangle by extending one of its sides." },
        { term: "Interior opposite angles", meaning: "The two angles of a triangle not adjacent to a given exterior angle." },
        { term: "Isosceles triangle", meaning: "A triangle with two equal sides (and two equal angles)." },
        { term: "Triangle inequality", meaning: "The sum of two sides is always more than the third side." }
      ],
      examples: [
        {
          q: "In a triangle two angles are 50° and 65°. Find the third angle and an exterior angle at the 65° vertex.",
          steps: ["Third angle = 180° − 50° − 65° = 65°", "Exterior angle at the 65° vertex = 180° − 65° = 115°"],
          answer: "Third angle 65°; exterior angle 115°"
        }
      ],
      qa: [
        { q: "Can a triangle have sides 5 cm, 7 cm and 13 cm?", a: "No. 5 + 7 = 12, which is less than 13, so the triangle inequality fails." },
        { q: "An exterior angle of a triangle is 120° and one interior opposite angle is 50°. Find the other.", a: "The exterior angle equals the sum of the interior opposite angles, so the other angle is 120° − 50° = **70°**." }
      ],
      quiz: [
        { q: "The angles of a triangle add up to:", options: ["90°", "360°", "270°", "180°"], answer: 3, explain: "Angle sum of any triangle is 180°." },
        { q: "Which sides can form a triangle?", options: ["2, 3, 6", "4, 4, 9", "5, 6, 10", "1, 2, 3"], answer: 2, explain: "5 + 6 = 11 > 10, and the other pairs fail (e.g. 1 + 2 = 3 is not more than 3)." },
        { q: "An exterior angle of a triangle equals:", options: ["Sum of interior opposite angles", "180° minus the sum of all angles", "The adjacent interior angle", "Twice an interior angle"], answer: 0, explain: "Exterior angle = sum of the two interior opposite angles." },
        { q: "Each angle of an equilateral triangle is:", options: ["90°", "45°", "120°", "60°"], answer: 3, explain: "180° ÷ 3 = 60°." },
        { q: "In a right-angled triangle one acute angle is 35°. The other is:", options: ["45°", "55°", "65°", "145°"], answer: 1, explain: "The acute angles add up to 90°, so 90° − 35° = 55°." }
      ]
    },
    {
      id: "working-with-fractions",
      title: "Working with Fractions",
      section: "Part I",
      summary: "We multiply and divide fractions, find a fraction of a quantity, use reciprocals, and solve word problems with fractions and mixed numbers.",
      notes: [
        {
          heading: "Multiplying fractions",
          points: [
            "To multiply fractions, multiply the numerators and multiply the denominators: 2/3 × 4/5 = 8/15.",
            "A fraction of a quantity means multiplication: 3/4 of 20 = 3/4 × 20 = 15.",
            "Convert mixed numbers to improper fractions first: 1½ × 2/3 = 3/2 × 2/3 = 1.",
            "Multiplying by a fraction smaller than 1 makes the number smaller."
          ]
        },
        {
          heading: "Dividing fractions",
          points: [
            "The **reciprocal** of a/b is b/a. The product of a fraction and its reciprocal is 1.",
            "Dividing by a fraction is the same as multiplying by its reciprocal: 3/4 ÷ 2/5 = 3/4 × 5/2 = 15/8.",
            "Dividing a whole number by a fraction counts how many such parts fit: 3 ÷ 1/2 = 6.",
            "The reciprocal of 0 does not exist."
          ]
        },
        {
          heading: "Word problems",
          points: [
            "Decide first whether a problem needs 'of' (multiply) or 'how many fit in' (divide).",
            "Write the answer in simplest form by dividing the numerator and denominator by their common factor.",
            "Check your answer: is it sensible compared with the numbers in the problem?",
            "Fractions also occur as parts of a whole in recipes, lengths of cloth and shares of land."
          ]
        }
      ],
      formulas: [
        "a/b × c/d = (a × c)/(b × d)",
        "a/b ÷ c/d = a/b × d/c",
        "Reciprocal of a/b is b/a (a ≠ 0)"
      ],
      terms: [
        { term: "Reciprocal", meaning: "The fraction turned upside down; the reciprocal of 2/5 is 5/2." },
        { term: "Improper fraction", meaning: "A fraction whose numerator is greater than or equal to its denominator." },
        { term: "Mixed number", meaning: "A whole number and a proper fraction together, like 2¾." },
        { term: "Simplest form", meaning: "A fraction whose numerator and denominator have no common factor except 1." }
      ],
      examples: [
        {
          q: "A ribbon 3¾ m long is cut into pieces of 3/8 m each. How many pieces are made?",
          steps: ["3¾ = 15/4", "Number of pieces = 15/4 ÷ 3/8 = 15/4 × 8/3", "= (15 × 8)/(4 × 3) = 120/12 = 10"],
          answer: "10 pieces"
        }
      ],
      qa: [
        { q: "Find 2/3 of 4/5.", a: "2/3 × 4/5 = 8/15." },
        { q: "Why is 6 ÷ 1/3 equal to 18?", a: "In each whole there are 3 thirds, so 6 wholes contain 6 × 3 = 18 thirds. Dividing by 1/3 is multiplying by its reciprocal 3." }
      ],
      quiz: [
        { q: "2/3 × 3/4 equals:", options: ["5/7", "6/7", "1/2", "2/4"], answer: 2, explain: "(2 × 3)/(3 × 4) = 6/12 = 1/2." },
        { q: "The reciprocal of 5/7 is:", options: ["7/5", "−5/7", "5/7", "2/12"], answer: 0, explain: "Turn the fraction upside down." },
        { q: "3/4 ÷ 3 equals:", options: ["9/4", "1/4", "4", "9/12"], answer: 1, explain: "3/4 × 1/3 = 1/4." },
        { q: "3/5 of 40 is:", options: ["8", "120", "24", "16"], answer: 2, explain: "3/5 × 40 = 24." },
        { q: "How many 1/4 kg packets can be made from 5 kg of sugar?", options: ["20", "5/4", "10", "15"], answer: 0, explain: "5 ÷ 1/4 = 5 × 4 = 20." }
      ]
    },
    // ───────────────────────────── Part II ─────────────────────────────
    {
      id: "geometric-twins",
      title: "Geometric Twins",
      section: "Part II",
      summary: "Figures that have exactly the same shape and size are congruent. We study congruent plane figures and the conditions under which two triangles are congruent.",
      notes: [
        {
          heading: "Congruent figures",
          points: [
            "Two figures are **congruent** if one can be placed exactly over the other, by sliding, turning or flipping.",
            "Congruent figures have equal corresponding sides and equal corresponding angles.",
            "Two squares with equal sides are congruent; two circles with equal radii are congruent.",
            "We write △ABC ≅ △PQR, keeping corresponding vertices in the same order."
          ]
        },
        {
          heading: "Conditions for congruent triangles",
          points: [
            "**SSS**: three sides of one triangle equal three sides of the other.",
            "**SAS**: two sides and the angle between them are equal.",
            "**ASA**: two angles and the side between them are equal.",
            "**RHS**: in right-angled triangles, the hypotenuse and one other side are equal."
          ]
        },
        {
          heading: "What does not work",
          points: [
            "Equal angles alone (AAA) do not give congruence: a small and a large equilateral triangle have the same angles.",
            "Two sides and an angle that is **not** between them (SSA) may not fix a unique triangle.",
            "Once triangles are shown congruent, all remaining corresponding parts are equal (CPCT).",
            "Congruence is used to prove that segments or angles are equal."
          ]
        }
      ],
      formulas: [
        "Congruence rules for triangles: SSS, SAS, ASA, RHS",
        "Congruent figures: corresponding sides equal and corresponding angles equal"
      ],
      terms: [
        { term: "Congruent", meaning: "Figures with exactly the same shape and size." },
        { term: "Corresponding parts", meaning: "Sides or angles that match in position in two congruent figures." },
        { term: "Included angle", meaning: "The angle between two given sides." },
        { term: "Hypotenuse", meaning: "The longest side of a right-angled triangle, opposite the right angle." }
      ],
      examples: [
        {
          q: "In △ABC and △PQR, AB = PQ = 5 cm, BC = QR = 7 cm and ∠B = ∠Q = 50°. Are the triangles congruent? Which rule applies?",
          steps: ["Two sides (AB, BC) equal two sides (PQ, QR)", "The angle between them, ∠B and ∠Q, is equal"],
          answer: "Yes, △ABC ≅ △PQR by SAS"
        }
      ],
      qa: [
        { q: "Are two triangles with all angles 60° always congruent?", a: "No. Equal angles only mean the triangles have the same shape. Their sides can differ in length, so they need not be congruent." },
        { q: "Name the rule: two angles and the side between them are equal.", a: "ASA (angle-side-angle)." }
      ],
      quiz: [
        { q: "Congruent figures have:", options: ["Same shape only", "Same area only", "Same shape and same size", "Same perimeter only"], answer: 2, explain: "Congruent means identical in shape and size." },
        { q: "Which is NOT a rule for congruence of triangles?", options: ["SSS", "SAS", "ASA", "AAA"], answer: 3, explain: "Equal angles do not make triangles the same size." },
        { q: "For SAS, the equal angle must be:", options: ["Between the two equal sides", "Opposite the longest side", "Any angle", "A right angle"], answer: 0, explain: "The included angle must be the one between the two given sides." },
        { q: "If △ABC ≅ △DEF and AB = 6 cm, then:", options: ["EF = 6 cm", "DE = 6 cm", "DF = 6 cm", "AC = 6 cm"], answer: 1, explain: "A↔D and B↔E, so AB corresponds to DE." },
        { q: "RHS congruence applies to:", options: ["Isosceles triangles", "Equilateral triangles", "Any triangles", "Right-angled triangles"], answer: 3, explain: "RHS stands for right angle, hypotenuse, side." }
      ]
    },
    {
      id: "operations-with-integers",
      title: "Operations with Integers",
      section: "Part II",
      summary: "We multiply and divide integers, learn the sign rules and see how the properties of operations extend to negative numbers.",
      notes: [
        {
          heading: "Multiplying integers",
          points: [
            "Multiplication is repeated addition: 3 × (−4) = (−4) + (−4) + (−4) = −12.",
            "positive × positive = positive; negative × negative = **positive**.",
            "positive × negative = negative, and negative × positive = negative.",
            "Any integer × 0 = 0."
          ]
        },
        {
          heading: "Dividing integers",
          points: [
            "Division is the opposite of multiplication, so the same sign rules apply.",
            "(−12) ÷ 3 = −4, 12 ÷ (−3) = −4 and (−12) ÷ (−3) = 4.",
            "Division by zero is **not defined**, but 0 divided by a non-zero integer is 0.",
            "Dividing any integer by 1 gives the same integer."
          ]
        },
        {
          heading: "Properties",
          points: [
            "Multiplication of integers is commutative and associative: (−2) × 5 = 5 × (−2).",
            "The distributive property still works: (−3) × (4 + 2) = (−3) × 4 + (−3) × 2 = −18.",
            "1 is the multiplicative identity and −1 × a gives the opposite of a.",
            "A product of an even number of negative integers is positive; of an odd number it is negative."
          ]
        }
      ],
      formulas: [
        "(+)×(+) = +;  (−)×(−) = +;  (+)×(−) = −;  (−)×(+) = −",
        "a × (b + c) = a × b + a × c",
        "(−1) × a = −a;  a ÷ 0 is not defined"
      ],
      terms: [
        { term: "Integer", meaning: "A positive or negative whole number, or zero." },
        { term: "Product", meaning: "The result of multiplication." },
        { term: "Quotient", meaning: "The result of division." },
        { term: "Multiplicative identity", meaning: "The number 1, since a × 1 = a." }
      ],
      examples: [
        {
          q: "Evaluate (−6) × (−4) + (−18) ÷ 3.",
          steps: ["(−6) × (−4) = 24", "(−18) ÷ 3 = −6", "24 + (−6) = 18"],
          answer: "18"
        }
      ],
      qa: [
        { q: "What is the sign of (−2) × (−3) × (−5)?", a: "Three negatives (an odd number) give a negative product: (−2)(−3)(−5) = −30." },
        { q: "Why is division by zero not defined?", a: "No number multiplied by 0 gives a non-zero number, so a ÷ 0 has no answer for a ≠ 0." }
      ],
      quiz: [
        { q: "(−7) × (−3) equals:", options: ["−21", "10", "21", "−10"], answer: 2, explain: "Negative × negative is positive." },
        { q: "(−36) ÷ 9 equals:", options: ["4", "−4", "−27", "27"], answer: 1, explain: "Different signs give a negative quotient." },
        { q: "(−5) × 0 equals:", options: ["−5", "5", "Not defined", "0"], answer: 3, explain: "Any integer times zero is zero." },
        { q: "The product (−1) × (−1) × (−1) × (−1) is:", options: ["−1", "1", "−4", "4"], answer: 1, explain: "An even number of negative factors gives a positive product." },
        { q: "(−8) ÷ (−2) equals:", options: ["4", "−4", "16", "−16"], answer: 0, explain: "Negative ÷ negative is positive: 8 ÷ 2 = 4." },
        { q: "Which expression is not defined?", options: ["0 ÷ (−5)", "(−5) ÷ 1", "(−5) ÷ 0", "(−5) × 0"], answer: 2, explain: "Division by zero is not defined." }
      ]
    },
    {
      id: "finding-common-ground",
      title: "Finding Common Ground",
      section: "Part II",
      summary: "We study factors, multiples and prime factorisation, and use them to find the HCF and LCM of numbers and to solve everyday problems.",
      notes: [
        {
          heading: "Factors, multiples and primes",
          points: [
            "A **factor** divides a number exactly; a **multiple** is got by multiplying by a whole number.",
            "A **prime** number has exactly two factors, 1 and itself (2, 3, 5, 7, 11, …). 1 is neither prime nor composite.",
            "Every number greater than 1 can be written as a product of primes in one way (apart from order): 60 = 2² × 3 × 5.",
            "Two numbers with no common factor except 1 are **co-prime**, like 8 and 15."
          ]
        },
        {
          heading: "HCF",
          points: [
            "The **highest common factor** (HCF) is the greatest number that divides all the given numbers.",
            "Using prime factorisation: take each common prime with its smallest power. For 36 = 2² × 3² and 48 = 2⁴ × 3, HCF = 2² × 3 = 12.",
            "HCF is used for the largest equal groups or the biggest tile or piece that fits exactly.",
            "The HCF of co-prime numbers is 1."
          ]
        },
        {
          heading: "LCM",
          points: [
            "The **lowest common multiple** (LCM) is the smallest number that is a multiple of all the given numbers.",
            "Using prime factorisation: take every prime with its greatest power. LCM of 36 and 48 = 2⁴ × 3² = 144.",
            "LCM is used for events that repeat together, like bells ringing at different intervals.",
            "For two numbers, HCF × LCM = product of the numbers: 12 × 144 = 36 × 48."
          ]
        }
      ],
      formulas: [
        "HCF × LCM = product of the two numbers",
        "HCF: common primes with the smallest powers;  LCM: all primes with the greatest powers",
        "HCF ≤ each number ≤ LCM"
      ],
      terms: [
        { term: "Prime number", meaning: "A number with exactly two factors, 1 and itself." },
        { term: "Prime factorisation", meaning: "Writing a number as a product of primes." },
        { term: "HCF", meaning: "Highest Common Factor: the greatest number dividing all the given numbers." },
        { term: "LCM", meaning: "Lowest Common Multiple: the smallest number that all the given numbers divide." },
        { term: "Co-prime", meaning: "Two numbers whose only common factor is 1." }
      ],
      examples: [
        {
          q: "Find the HCF and LCM of 24 and 60.",
          steps: ["24 = 2³ × 3 and 60 = 2² × 3 × 5", "HCF = 2² × 3 = 12", "LCM = 2³ × 3 × 5 = 120"],
          answer: "HCF = 12, LCM = 120"
        },
        {
          q: "Two bells ring every 12 minutes and every 18 minutes. If they ring together at 9:00, when do they next ring together?",
          steps: ["Find the LCM of 12 and 18: 12 = 2² × 3, 18 = 2 × 3²", "LCM = 2² × 3² = 36", "36 minutes after 9:00"],
          answer: "At 9:36"
        }
      ],
      qa: [
        { q: "Is 1 a prime number? Why?", a: "No. A prime has exactly two different factors, but 1 has only one factor." },
        { q: "The HCF of two numbers is 4 and their LCM is 120. If one number is 24, find the other.", a: "Product of the numbers = 4 × 120 = 480, so the other = 480 ÷ 24 = **20**." }
      ],
      quiz: [
        { q: "Which number is prime?", options: ["21", "27", "29", "33"], answer: 2, explain: "29 has only factors 1 and 29. The others are divisible by 3." },
        { q: "The HCF of 18 and 24 is:", options: ["3", "12", "72", "6"], answer: 3, explain: "18 = 2 × 3², 24 = 2³ × 3, so HCF = 2 × 3 = 6." },
        { q: "The LCM of 6 and 8 is:", options: ["24", "48", "2", "14"], answer: 0, explain: "6 = 2 × 3 and 8 = 2³, so LCM = 2³ × 3 = 24." },
        { q: "Which pair is co-prime?", options: ["12 and 18", "9 and 15", "14 and 21", "8 and 15"], answer: 3, explain: "8 and 15 share no factor other than 1." },
        { q: "If HCF = 5 and LCM = 60 for two numbers, their product is:", options: ["300", "65", "12", "55"], answer: 0, explain: "Product = HCF × LCM = 5 × 60 = 300." },
        { q: "The prime factorisation of 72 is:", options: ["2² × 3³", "2³ × 3²", "2⁴ × 3", "6² × 2"], answer: 1, explain: "72 = 8 × 9 = 2³ × 3²." }
      ]
    },
    {
      id: "another-peek-beyond-the-point",
      title: "Another Peek Beyond the Point",
      section: "Part II",
      summary: "We multiply and divide decimal numbers, including by powers of 10, and use these operations in measurements and money problems.",
      notes: [
        {
          heading: "Multiplying decimals",
          points: [
            "Multiply as if there were no decimal points, then put the point so that the answer has as many decimal places as the two numbers together.",
            "Example: 0.4 × 0.3: 4 × 3 = 12, and there are 2 decimal places in all, so 0.12.",
            "Multiplying by 10, 100, 1000 moves the decimal point 1, 2, 3 places to the right: 3.27 × 100 = 327.",
            "Multiplying by a decimal smaller than 1 makes the number smaller."
          ]
        },
        {
          heading: "Dividing decimals",
          points: [
            "Dividing by 10, 100, 1000 moves the decimal point 1, 2, 3 places to the left: 45.6 ÷ 10 = 4.56.",
            "To divide by a decimal, multiply both numbers by 10, 100, … to make the divisor a whole number: 4.5 ÷ 0.9 = 45 ÷ 9 = 5.",
            "Dividing by a number less than 1 makes the answer larger.",
            "Division may end after a few places or keep going with repeating digits, as in 1 ÷ 3 = 0.333…"
          ]
        },
        {
          heading: "Using decimals",
          points: [
            "Cost problems: price per unit × quantity. At ₹12.50 per kg, 3.5 kg costs 12.50 × 3.5 = ₹43.75.",
            "Measurement problems: 1 m = 100 cm, 1 km = 1000 m, 1 kg = 1000 g.",
            "Estimate first to check that the decimal point is in the right place.",
            "Rounding to a required number of decimal places is often needed for money and measurements."
          ]
        }
      ],
      formulas: [
        "Decimal places in a product = places in first number + places in second number",
        "× 10ⁿ moves the point n places right;  ÷ 10ⁿ moves it n places left",
        "Total cost = price per unit × quantity"
      ],
      terms: [
        { term: "Decimal places", meaning: "The number of digits after the decimal point." },
        { term: "Divisor", meaning: "The number by which we divide." },
        { term: "Quotient", meaning: "The result of division." },
        { term: "Recurring decimal", meaning: "A decimal in which digits repeat endlessly, like 0.666…" }
      ],
      examples: [
        {
          q: "Find 2.5 × 1.2 and 7.2 ÷ 0.6.",
          steps: ["25 × 12 = 300 and there are 2 decimal places, so 2.5 × 1.2 = 3.00 = 3", "7.2 ÷ 0.6 = 72 ÷ 6 = 12"],
          answer: "3 and 12"
        }
      ],
      qa: [
        { q: "Why is 0.5 × 0.5 equal to 0.25 and not 2.5?", a: "5 × 5 = 25, and with one place in each number there are two decimal places, so the answer is 0.25. Half of a half is a quarter." },
        { q: "A rope of 18.6 m is cut into pieces of 0.6 m. How many pieces?", a: "18.6 ÷ 0.6 = 186 ÷ 6 = **31 pieces**." }
      ],
      quiz: [
        { q: "0.6 × 0.3 equals:", options: ["1.8", "0.018", "18", "0.18"], answer: 3, explain: "6 × 3 = 18 with 2 decimal places gives 0.18." },
        { q: "4.37 × 100 equals:", options: ["437", "43.7", "0.0437", "4370"], answer: 0, explain: "Move the decimal point two places right." },
        { q: "25.8 ÷ 10 equals:", options: ["258", "2.58", "0.258", "25.08"], answer: 1, explain: "Move the decimal point one place left." },
        { q: "3.6 ÷ 0.4 equals:", options: ["0.9", "90", "14.4", "9"], answer: 3, explain: "36 ÷ 4 = 9." },
        { q: "If 1 kg of rice costs ₹48.50, 2 kg cost:", options: ["₹97", "₹96.50", "₹24.25", "₹970"], answer: 0, explain: "48.50 × 2 = 97.00." }
      ]
    },
    {
      id: "connecting-the-dots",
      title: "Connecting the Dots…",
      section: "Part II",
      summary: "We summarise data with the arithmetic mean, median and mode, find the range and read what each measure tells us about the data.",
      notes: [
        {
          heading: "Mean",
          points: [
            "The **arithmetic mean** (average) is the sum of all values divided by the number of values.",
            "The mean of 4, 7, 9, 12 is (4 + 7 + 9 + 12) ÷ 4 = 32 ÷ 4 = 8.",
            "The mean lies between the smallest and the largest value.",
            "If the mean of n values is known, their total is mean × n."
          ]
        },
        {
          heading: "Median and mode",
          points: [
            "The **median** is the middle value when the data is arranged in order. With an even number of values it is the mean of the two middle ones.",
            "For 3, 5, 8, 9, 12 the median is 8. For 2, 4, 6, 10 the median is (4 + 6) ÷ 2 = 5.",
            "The **mode** is the value that occurs most often. Data can have more than one mode, or none.",
            "The median is not affected much by one very large or very small value, but the mean is."
          ]
        },
        {
          heading: "Range and reading data",
          points: [
            "**Range** = highest value − lowest value. It shows how spread out the data is.",
            "Bar graphs and tables help us arrange data before finding mean, median or mode.",
            "Choose the measure that suits the question: mode for the most common size, median for a typical middle value, mean for an overall average.",
            "Always arrange the data in order before finding the median."
          ]
        }
      ],
      formulas: [
        "Mean = (sum of all values) ÷ (number of values)",
        "Range = highest value − lowest value",
        "Sum of values = mean × number of values"
      ],
      terms: [
        { term: "Mean", meaning: "The sum of the values divided by how many there are; the average." },
        { term: "Median", meaning: "The middle value of data arranged in order." },
        { term: "Mode", meaning: "The value that appears most often." },
        { term: "Range", meaning: "The difference between the highest and the lowest value." }
      ],
      examples: [
        {
          q: "Find the mean, median, mode and range of 6, 9, 4, 9, 7.",
          steps: ["Mean = (6 + 9 + 4 + 9 + 7) ÷ 5 = 35 ÷ 5 = 7", "In order: 4, 6, 7, 9, 9; the median is 7", "Mode is 9 (occurs twice); range = 9 − 4 = 5"],
          answer: "Mean 7, median 7, mode 9, range 5"
        }
      ],
      qa: [
        { q: "The mean of 5 numbers is 12. What is their sum?", a: "Sum = mean × number of values = 12 × 5 = **60**." },
        { q: "Find the median of 15, 10, 25, 20.", a: "In order: 10, 15, 20, 25. The two middle values are 15 and 20, so the median is (15 + 20) ÷ 2 = **17.5**." }
      ],
      quiz: [
        { q: "The mean of 2, 4, 6, 8, 10 is:", options: ["5", "6", "30", "8"], answer: 1, explain: "Sum is 30 and 30 ÷ 5 = 6." },
        { q: "The mode of 3, 5, 5, 7, 5, 9 is:", options: ["5", "3", "7", "6"], answer: 0, explain: "5 occurs three times, more than any other value." },
        { q: "The median of 9, 3, 7, 1, 5 is:", options: ["7", "9", "5", "1"], answer: 2, explain: "In order: 1, 3, 5, 7, 9. The middle value is 5." },
        { q: "The range of 12, 7, 20, 15 is:", options: ["13", "20", "7", "8"], answer: 0, explain: "20 − 7 = 13." },
        { q: "The mean of 4 numbers is 15. Three of them are 10, 12 and 20. The fourth is:", options: ["18", "15", "22", "60"], answer: 0, explain: "Total = 60; 60 − (10 + 12 + 20) = 18. So the fourth number is 18." }
      ]
    },
    {
      id: "constructions-and-tilings",
      title: "Constructions and Tilings",
      section: "Part II",
      summary: "We construct parallel lines and triangles with a ruler, compass and protractor, and study which shapes can cover a flat surface without gaps or overlaps.",
      notes: [
        {
          heading: "Basic constructions",
          points: [
            "Tools: a ruler for straight lines, a compass for arcs and circles, and a protractor for angles.",
            "A line parallel to a given line through a point can be drawn by copying an angle (equal corresponding angles).",
            "The **perpendicular bisector** of a segment cuts it into two equal parts at 90°.",
            "Keep construction arcs visible; they show the method."
          ]
        },
        {
          heading: "Constructing triangles",
          points: [
            "SSS: draw one side, then draw arcs from its ends with the other two side lengths; they meet at the third vertex.",
            "SAS: draw one side, make the given angle at one end, and mark the second side along it.",
            "ASA: draw the given side and make the two given angles at its ends; the arms meet at the third vertex.",
            "A triangle can be constructed only if the sides satisfy the triangle inequality."
          ]
        },
        {
          heading: "Tilings",
          points: [
            "A **tiling** covers a plane with shapes without gaps or overlaps.",
            "Angles meeting at a point must add up to **360°**.",
            "Equilateral triangles (60° each, six at a point), squares (90°, four at a point) and regular hexagons (120°, three at a point) tile the plane.",
            "A regular pentagon has angles of 108°, which do not divide 360° exactly, so it cannot tile alone."
          ]
        }
      ],
      formulas: [
        "Angles around a point in a tiling = 360°",
        "Angle of a regular polygon: triangle 60°, square 90°, pentagon 108°, hexagon 120°"
      ],
      terms: [
        { term: "Compass", meaning: "A tool used to draw arcs and circles of a given radius." },
        { term: "Perpendicular bisector", meaning: "A line that cuts a segment into two equal halves at right angles." },
        { term: "Tiling", meaning: "Covering a flat surface with shapes with no gaps and no overlaps." },
        { term: "Vertex", meaning: "A corner point where sides or tiles meet." }
      ],
      examples: [
        {
          q: "How many regular hexagons meet at a point in a tiling, if each angle is 120°?",
          steps: ["Angles at a point must add up to 360°", "Number of hexagons = 360° ÷ 120° = 3"],
          answer: "3 hexagons"
        }
      ],
      qa: [
        { q: "Can a triangle with sides 3 cm, 4 cm and 8 cm be constructed?", a: "No. 3 + 4 = 7 is less than 8, so the two arcs will not meet." },
        { q: "Why can regular octagons not tile a plane on their own?", a: "Each angle of a regular octagon is 135°, which does not divide 360° exactly, so gaps are left." }
      ],
      quiz: [
        { q: "Angles around a point in a tiling add up to:", options: ["180°", "90°", "270°", "360°"], answer: 3, explain: "A full turn around a point is 360°." },
        { q: "Which regular shape can tile the plane by itself?", options: ["Pentagon", "Square", "Heptagon", "Octagon"], answer: 1, explain: "Four 90° angles make 360°." },
        { q: "How many equilateral triangles meet at a point in a tiling?", options: ["6", "3", "4", "5"], answer: 0, explain: "360° ÷ 60° = 6." },
        { q: "To construct a triangle by ASA you need:", options: ["Three sides", "Two sides and an angle", "Two angles and the side between them", "Three angles"], answer: 2, explain: "ASA gives two angles and the included side." },
        { q: "The perpendicular bisector of a segment:", options: ["Is parallel to it", "Meets it at 90° at its midpoint", "Meets it at 60°", "Is twice as long"], answer: 1, explain: "It halves the segment and meets it at a right angle." }
      ]
    },
    {
      id: "finding-the-unknown",
      title: "Finding the Unknown",
      section: "Part II",
      summary: "We write simple equations from word problems and solve them by doing the same operation on both sides, then check the answer.",
      notes: [
        {
          heading: "Equations",
          points: [
            "An **equation** says that two expressions are equal. It has an unknown such as x and an = sign.",
            "A **solution** is the value of the unknown that makes both sides equal.",
            "Example: x + 5 = 12 is true only for x = 7.",
            "Think of an equation as a balanced pair of scales."
          ]
        },
        {
          heading: "Solving an equation",
          points: [
            "Do the same thing to both sides: add, subtract, multiply or divide by the same number (not zero).",
            "To solve 3x + 4 = 19: subtract 4 to get 3x = 15, then divide by 3 to get x = 5.",
            "**Transposing** means moving a term to the other side with the opposite sign.",
            "Check by putting the solution back: 3 × 5 + 4 = 19."
          ]
        },
        {
          heading: "Word problems",
          points: [
            "Choose a letter for the unknown and write what it stands for.",
            "Translate the statement into an equation, then solve it.",
            "Example: a number added to its double gives 36. x + 2x = 36, so 3x = 36 and x = 12.",
            "Always check that the answer fits the original story."
          ]
        }
      ],
      formulas: [
        "If a = b then a + c = b + c, a − c = b − c, a × c = b × c, and a ÷ c = b ÷ c (c ≠ 0)",
        "ax + b = c  gives  x = (c − b) ÷ a"
      ],
      terms: [
        { term: "Equation", meaning: "A statement that two expressions are equal." },
        { term: "Unknown", meaning: "The letter whose value we want to find." },
        { term: "Solution", meaning: "The value of the unknown that makes the equation true." },
        { term: "Transposing", meaning: "Moving a term to the other side of the equation and changing its sign." }
      ],
      examples: [
        {
          q: "Solve 5x − 7 = 18.",
          steps: ["Add 7 to both sides: 5x = 25", "Divide both sides by 5: x = 5", "Check: 5 × 5 − 7 = 18"],
          answer: "x = 5"
        },
        {
          q: "Ravi's age is 4 years more than twice Meera's age. Ravi is 18. Find Meera's age.",
          steps: ["Let Meera's age be m: 2m + 4 = 18", "2m = 14, so m = 7"],
          answer: "Meera is 7 years old"
        }
      ],
      qa: [
        { q: "Solve x/3 + 2 = 6.", a: "x/3 = 4, so x = 12." },
        { q: "The sum of three consecutive numbers is 48. Find them.", a: "Let the numbers be n, n + 1, n + 2. Then 3n + 3 = 48, so n = 15. The numbers are **15, 16, 17**." }
      ],
      quiz: [
        { q: "The solution of x + 9 = 15 is:", options: ["24", "6", "9", "−6"], answer: 1, explain: "Subtract 9 from both sides: x = 6." },
        { q: "Solve 4x = 28.", options: ["24", "112", "32", "7"], answer: 3, explain: "Divide both sides by 4." },
        { q: "Solve 2x + 3 = 11.", options: ["4", "7", "5", "14"], answer: 0, explain: "2x = 8, so x = 4." },
        { q: "Solve x − 5 = −2.", options: ["−7", "7", "3", "−3"], answer: 2, explain: "Add 5 to both sides: x = 3." },
        { q: "Twice a number decreased by 3 is 17. The number is:", options: ["7", "10", "20", "14"], answer: 1, explain: "2x − 3 = 17, so 2x = 20 and x = 10." }
      ]
    }
  ]
});
