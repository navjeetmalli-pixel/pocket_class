// Class 8 Mathematics: current NCERT textbook "Ganita Prakash" (Part I and Part II).
// Format: see CONTENT_GUIDE.md
StudyData.add(8, "maths", {
  syllabus: {board: "CBSE", match: "textbook", books: ["Ganita Prakash Part I", "Ganita Prakash Part II"], reviewed: false},
  chapters: [
    {
      id: "a-square-and-a-cube",
      title: "A Square and A Cube",
      section: "Part I",
      summary: "Square numbers and cube numbers, their patterns, and how to find square roots and cube roots using prime factorisation.",
      notes: [
        {
          heading: "Square numbers",
          points: [
            "A **perfect square** is a number of the form n × n. For example, 36 = 6 × 6.",
            "A square number always ends in 0, 1, 4, 5, 6 or 9. A number ending in 2, 3, 7 or 8 is never a perfect square.",
            "The sum of the first n odd numbers is n². For example, 1 + 3 + 5 + 7 + 9 = 25 = 5².",
            "The square of an even number is even, and the square of an odd number is odd."
          ]
        },
        {
          heading: "Square roots",
          points: [
            "The **square root** undoes squaring: since 12² = 144, √144 = 12.",
            "To find the root by prime factorisation, write the number as a product of primes and pair up equal primes. Take one prime from each pair.",
            "Example: 2025 = 3 × 3 × 3 × 3 × 5 × 5, so √2025 = 3 × 3 × 5 = 45.",
            "If some prime does not make a pair, the number is not a perfect square."
          ]
        },
        {
          heading: "Cubes and cube roots",
          points: [
            "A **perfect cube** is a number of the form n × n × n. For example, 27 = 3³ and 1000 = 10³.",
            "To find a cube root by prime factorisation, group equal primes in **triples** and take one from each triple.",
            "Example: 1728 = 2³ × 2³ × 3³, so ∛1728 = 2 × 2 × 3 = 12.",
            "The cube of a negative number is negative: (−4)³ = −64."
          ]
        },
        {
          heading: "Interesting number facts",
          points: [
            "1729 is called the **Hardy–Ramanujan number**: 1729 = 1³ + 12³ = 9³ + 10³. It is the smallest number that is the sum of two cubes in two different ways.",
            "Three numbers a, b, c with a² + b² = c² form a Pythagorean triplet, such as 3, 4, 5.",
            "For any number m > 1, the numbers 2m, m² − 1 and m² + 1 form a Pythagorean triplet."
          ]
        }
      ],
      formulas: [
        "n² = n × n;  n³ = n × n × n",
        "1 + 3 + 5 + … (n odd numbers) = n²",
        "(n + 1)² − n² = 2n + 1",
        "Triplet: (2m, m² − 1, m² + 1)"
      ],
      terms: [
        { term: "Perfect square", meaning: "A number that is the square of a whole number, such as 49." },
        { term: "Perfect cube", meaning: "A number that is the cube of a whole number, such as 125." },
        { term: "Square root", meaning: "A number which, multiplied by itself, gives the given number." },
        { term: "Cube root", meaning: "A number which, multiplied by itself three times, gives the given number." },
        { term: "Pythagorean triplet", meaning: "Three natural numbers a, b, c with a² + b² = c²." }
      ],
      examples: [
        {
          q: "Find the smallest number by which 72 should be multiplied to get a perfect cube.",
          steps: ["72 = 2 × 2 × 2 × 3 × 3 = 2³ × 3²", "2 occurs in a full triple, but 3 occurs only twice", "One more 3 is needed to make 3³"],
          answer: "Multiply by 3 (72 × 3 = 216 = 6³)"
        },
        {
          q: "Find √3136 by prime factorisation.",
          steps: ["3136 = 2 × 2 × 2 × 2 × 2 × 2 × 7 × 7", "Pairs: (2 × 2), (2 × 2), (2 × 2), (7 × 7)", "Root = 2 × 2 × 2 × 7"],
          answer: "√3136 = 56"
        }
      ],
      qa: [
        { q: "Can 2027 be a perfect square? Why?", a: "No. A perfect square can end only in 0, 1, 4, 5, 6 or 9, and 2027 ends in 7." },
        { q: "Write 1729 as a sum of two cubes in two ways.", a: "1729 = 1³ + 12³ (1 + 1728) and 1729 = 9³ + 10³ (729 + 1000)." },
        { q: "Find the Pythagorean triplet with m = 4.", a: "2m = 8, m² − 1 = 15, m² + 1 = 17. Check: 8² + 15² = 64 + 225 = 289 = 17²." }
      ],
      quiz: [
        { q: "Which of these numbers is NOT a perfect square?", options: ["1296", "2025", "1728", "3136"], answer: 2, explain: "1296 = 36², 2025 = 45² and 3136 = 56². But 1728 = 12³ is a cube, and 41² = 1681 and 42² = 1764 surround it, so it is not a square." },
        { q: "What is √2025?", options: ["45", "35", "55", "405"], answer: 0, explain: "2025 = 3⁴ × 5², so the root is 3² × 5 = 45." },
        { q: "What is the cube root of 1728?", options: ["14", "24", "144", "12"], answer: 3, explain: "1728 = 2⁶ × 3³ = (2² × 3)³ = 12³." },
        { q: "The smallest number by which 72 must be multiplied to get a perfect cube is:", options: ["2", "3", "6", "9"], answer: 1, explain: "72 = 2³ × 3². The prime 3 appears only twice, so one more 3 completes the triple." },
        { q: "What is the sum of the first 7 odd numbers?", options: ["42", "36", "49", "64"], answer: 2, explain: "The sum of the first n odd numbers is n², so for n = 7 it is 49." },
        { q: "1729 can be written as the sum of two cubes as:", options: ["9³ + 10³", "8³ + 11³", "7³ + 12³", "6³ + 13³"], answer: 0, explain: "9³ + 10³ = 729 + 1000 = 1729. The other sums do not equal 1729 (for example 8³ + 11³ = 512 + 1331 = 1843)." }
      ]
    },
    {
      id: "power-play",
      title: "Power Play",
      section: "Part I",
      summary: "Exponents and their laws, zero and negative powers, and writing very large or very small numbers in standard form.",
      notes: [
        {
          heading: "Laws of exponents",
          points: [
            "In aⁿ, a is the **base** and n is the **exponent** (power). aⁿ means a multiplied by itself n times.",
            "Multiplying with the same base: aᵐ × aⁿ = aᵐ⁺ⁿ. Dividing: aᵐ ÷ aⁿ = aᵐ⁻ⁿ.",
            "Power of a power: (aᵐ)ⁿ = aᵐⁿ. For example, (2³)² = 2⁶ = 64.",
            "Same exponent: aⁿ × bⁿ = (ab)ⁿ and aⁿ ÷ bⁿ = (a/b)ⁿ."
          ]
        },
        {
          heading: "Zero and negative exponents",
          points: [
            "Any non-zero number to the power 0 is 1: a⁰ = 1.",
            "A negative exponent means the reciprocal: a⁻ⁿ = 1/aⁿ. For example, 2⁻³ = 1/8.",
            "(a/b)⁻ⁿ = (b/a)ⁿ. For example, (2/3)⁻² = 9/4.",
            "The laws of exponents work for negative and zero exponents too."
          ]
        },
        {
          heading: "Powers of 10 and standard form",
          points: [
            "10ⁿ is 1 followed by n zeros, and 10⁻ⁿ = 1/10ⁿ (n decimal places). So 10⁻³ = 0.001.",
            "**Standard (scientific) form** writes a number as k × 10ⁿ where 1 ≤ k < 10 and n is an integer.",
            "Example: 45,00,000 = 4.5 × 10⁶ and 0.00032 = 3.2 × 10⁻⁴.",
            "Standard form makes very large numbers (distances in space) and very small ones (sizes of cells) easy to read and compare."
          ]
        }
      ],
      formulas: [
        "aᵐ × aⁿ = aᵐ⁺ⁿ;  aᵐ ÷ aⁿ = aᵐ⁻ⁿ",
        "(aᵐ)ⁿ = aᵐⁿ;  (ab)ⁿ = aⁿbⁿ",
        "a⁰ = 1;  a⁻ⁿ = 1/aⁿ",
        "Standard form: k × 10ⁿ with 1 ≤ k < 10"
      ],
      terms: [
        { term: "Base", meaning: "The number that is repeatedly multiplied in a power, such as 3 in 3⁴." },
        { term: "Exponent", meaning: "The number of times the base is multiplied; also called the power or index." },
        { term: "Reciprocal", meaning: "The number that gives 1 when multiplied with the given number; the reciprocal of aⁿ is a⁻ⁿ." },
        { term: "Standard form", meaning: "A number written as k × 10ⁿ with 1 ≤ k < 10." }
      ],
      examples: [
        {
          q: "Simplify (2³ × 2⁻⁵) ÷ 2⁻¹.",
          steps: ["2³ × 2⁻⁵ = 2³⁻⁵ = 2⁻²", "2⁻² ÷ 2⁻¹ = 2⁻²⁻⁽⁻¹⁾ = 2⁻¹"],
          answer: "2⁻¹ = 1/2"
        },
        {
          q: "Write 0.000056 in standard form.",
          steps: ["Move the decimal point 5 places to the right to get 5.6", "So the power of 10 is −5"],
          answer: "5.6 × 10⁻⁵"
        }
      ],
      qa: [
        { q: "Why is a⁰ = 1?", a: "aᵐ ÷ aᵐ = 1, and by the law of division it also equals aᵐ⁻ᵐ = a⁰. So a⁰ = 1 for any non-zero a." },
        { q: "Evaluate (−3)⁻².", a: "(−3)⁻² = 1/(−3)² = 1/9." },
        { q: "Is 12 × 10⁵ in standard form?", a: "No, because 12 is not between 1 and 10. In standard form it is 1.2 × 10⁶." }
      ],
      quiz: [
        { q: "2⁵ × 2³ equals:", options: ["2¹⁵", "2⁸", "4⁸", "2²"], answer: 1, explain: "Same base, so add the exponents: 5 + 3 = 8." },
        { q: "The value of (−3)⁻² is:", options: ["−9", "−1/9", "1/9", "9"], answer: 2, explain: "(−3)⁻² = 1/(−3)² = 1/9, which is positive because the square is positive." },
        { q: "45,00,000 in standard form is:", options: ["4.5 × 10⁵", "45 × 10⁵", "4.5 × 10⁷", "4.5 × 10⁶"], answer: 3, explain: "45,00,000 = 4,500,000 = 4.5 × 1,000,000 = 4.5 × 10⁶." },
        { q: "(2³)² equals:", options: ["2⁶", "2⁵", "2⁹", "4⁵"], answer: 0, explain: "Power of a power: multiply the exponents, 3 × 2 = 6, so 2⁶ = 64." },
        { q: "10⁻³ is equal to:", options: ["0.01", "0.001", "−1000", "0.0001"], answer: 1, explain: "10⁻³ = 1/10³ = 1/1000 = 0.001." },
        { q: "6⁷ ÷ 6⁴ equals:", options: ["6¹¹", "1³", "6³", "6²⁸"], answer: 2, explain: "Same base, so subtract the exponents: 7 − 4 = 3." }
      ]
    },
    {
      id: "a-story-of-numbers",
      title: "A Story of Numbers",
      section: "Part I",
      summary: "How people across history wrote numbers, from tally marks and early symbols to the place-value system with zero that began in India.",
      notes: [
        {
          heading: "Early ways of writing numbers",
          points: [
            "People first counted with **tally marks**, one stroke for each object. This is fine for small counts but hopeless for big ones.",
            "Egyptian numerals used separate symbols for 1, 10, 100 and so on, repeated as needed. The value was found by adding the symbols.",
            "Roman numerals use letters: I = 1, V = 5, X = 10, L = 50, C = 100, D = 500, M = 1000. Smaller before larger is subtracted (IV = 4); smaller after larger is added (VI = 6).",
            "These systems are **not place-value systems**, so writing big numbers is long and arithmetic is hard."
          ]
        },
        {
          heading: "Place value and the base",
          points: [
            "In a **place-value system** the position of a digit decides its value. In 7,305 the 7 stands for 7000 and the 3 for 300.",
            "The number of symbols needed is the **base**. Our system uses base 10 with the digits 0 to 9.",
            "The Babylonians used a place-value system with base 60, which is why we still have 60 minutes in an hour.",
            "A number can be expanded: 4,052 = 4 × 1000 + 0 × 100 + 5 × 10 + 2."
          ]
        },
        {
          heading: "The Indian numeral system",
          points: [
            "Early Indian numerals such as Brahmi numerals had separate signs for the digits.",
            "Indian scholars developed a place-value system with ten symbols including a **zero**, which lets us write any number with just ten digits.",
            "This system travelled through Arab scholars to Europe, and is why it is called the **Hindu–Arabic** system.",
            "Zero is both a placeholder (in 305) and a number in its own right, which Indian mathematicians such as Brahmagupta gave rules for."
          ]
        }
      ],
      formulas: [
        "Roman: I 1, V 5, X 10, L 50, C 100, D 500, M 1000",
        "Expanded form: 3 hundreds + 0 tens + 5 ones = 3 × 100 + 0 × 10 + 5"
      ],
      terms: [
        { term: "Tally marks", meaning: "Strokes drawn one for each object counted." },
        { term: "Place value", meaning: "The value a digit has because of its position in a number." },
        { term: "Base", meaning: "The number of different digits (and the grouping size) of a number system; 10 in our system." },
        { term: "Placeholder", meaning: "The role of zero in showing that a place is empty, as in 305." },
        { term: "Hindu–Arabic numerals", meaning: "The digits 0 to 9 and place-value system that began in India and spread to the world through Arab scholars." }
      ],
      examples: [
        {
          q: "Write 1999 in Roman numerals.",
          steps: ["1000 = M", "900 = CM", "90 = XC", "9 = IX"],
          answer: "MCMXCIX"
        }
      ],
      qa: [
        { q: "Why is the Hindu–Arabic system better than Roman numerals?", a: "It is a place-value system with zero, so any number can be written with only ten digits and arithmetic such as addition and multiplication is easy. Roman numerals have no place value and no zero." },
        { q: "What are the two uses of zero?", a: "Zero is a placeholder that shows an empty place (as in 305), and it is also a number that can be added, subtracted and multiplied." }
      ],
      quiz: [
        { q: "What is XLIV in our number system?", options: ["46", "54", "44", "64"], answer: 2, explain: "XL = 40 (50 − 10) and IV = 4, so XLIV = 44." },
        { q: "The Hindu–Arabic system can write any number with only ten symbols because it uses:", options: ["Tally marks", "Place value and zero", "Repeated addition of symbols", "Base 60"], answer: 1, explain: "The position of a digit gives its value, and zero marks empty places." },
        { q: "The ancient Babylonians used a place-value system with base:", options: ["10", "12", "60", "20"], answer: 2, explain: "The Babylonian system was base 60, still reflected in our 60 minutes and 60 seconds." },
        { q: "MCMXCIX stands for:", options: ["1999", "1099", "2099", "1909"], answer: 0, explain: "M = 1000, CM = 900, XC = 90, IX = 9; total 1999." },
        { q: "In the number 7,305, the digit 7 stands for:", options: ["7", "70", "700", "7000"], answer: 3, explain: "The 7 is in the thousands place, so its value is 7000." },
        { q: "Why is our number system called Hindu–Arabic?", options: ["It began in India and was carried to the West by Arab scholars", "It began in Arabia and was carried to India", "It was used only in India and Arabia", "It joins Roman and Greek numerals"], answer: 0, explain: "The place-value digits with zero were developed in India and spread to Europe through Arab scholars." }
      ]
    },
    {
      id: "quadrilaterals",
      title: "Quadrilaterals",
      section: "Part I",
      summary: "Types of quadrilaterals, the angle sum property, and the special properties of parallelograms, rectangles, rhombuses and squares.",
      notes: [
        {
          heading: "Quadrilaterals and angle sum",
          points: [
            "A **quadrilateral** has 4 sides, 4 angles and 2 diagonals.",
            "The sum of the four interior angles is **360°**. A diagonal splits it into two triangles, each with angle sum 180°.",
            "Types: trapezium (one pair of parallel sides), parallelogram, rectangle, rhombus, square and kite."
          ]
        },
        {
          heading: "Parallelogram",
          points: [
            "Opposite sides are parallel and equal, and opposite angles are equal.",
            "Adjacent (consecutive) angles add up to 180°.",
            "The diagonals **bisect** each other, but they are not necessarily equal.",
            "A diagonal divides a parallelogram into two congruent triangles."
          ]
        },
        {
          heading: "Rectangle, rhombus and square",
          points: [
            "A **rectangle** is a parallelogram with all angles 90°. Its diagonals are equal and bisect each other.",
            "A **rhombus** is a parallelogram with all four sides equal. Its diagonals bisect each other at right angles.",
            "A **square** is both a rectangle and a rhombus: all sides equal, all angles 90°, diagonals equal and perpendicular.",
            "In a **kite** two pairs of adjacent sides are equal, and one diagonal bisects the other at right angles."
          ]
        }
      ],
      formulas: [
        "Angle sum of a quadrilateral = 360°",
        "Parallelogram: adjacent angles add up to 180°",
        "Rhombus: side² = (d₁/2)² + (d₂/2)²"
      ],
      terms: [
        { term: "Diagonal", meaning: "A line segment joining two opposite vertices of a polygon." },
        { term: "Parallelogram", meaning: "A quadrilateral with both pairs of opposite sides parallel." },
        { term: "Rhombus", meaning: "A parallelogram whose four sides are all equal." },
        { term: "Trapezium", meaning: "A quadrilateral with exactly one pair of parallel sides." },
        { term: "Kite", meaning: "A quadrilateral with two pairs of equal adjacent sides." }
      ],
      examples: [
        {
          q: "Three angles of a quadrilateral are 70°, 110° and 80°. Find the fourth.",
          steps: ["Sum of angles = 360°", "70° + 110° + 80° = 260°", "Fourth angle = 360° − 260°"],
          answer: "100°"
        },
        {
          q: "The diagonals of a rhombus are 12 cm and 16 cm. Find its side.",
          steps: ["The diagonals bisect at right angles, giving half-diagonals 6 cm and 8 cm", "Side² = 6² + 8² = 36 + 64 = 100"],
          answer: "Side = 10 cm"
        }
      ],
      qa: [
        { q: "Is every rectangle a parallelogram? Is every parallelogram a rectangle?", a: "Every rectangle is a parallelogram since its opposite sides are parallel. But a parallelogram need not be a rectangle, because its angles need not be 90°." },
        { q: "State two properties that a rhombus has but a general parallelogram does not.", a: "All four sides of a rhombus are equal, and its diagonals are perpendicular to each other." }
      ],
      quiz: [
        { q: "Three angles of a quadrilateral are 70°, 110° and 80°. The fourth angle is:", options: ["90°", "100°", "110°", "80°"], answer: 1, explain: "360° − (70° + 110° + 80°) = 360° − 260° = 100°." },
        { q: "Which quadrilateral always has equal diagonals but not always perpendicular ones?", options: ["Rhombus", "Parallelogram", "Kite", "Rectangle"], answer: 3, explain: "Rectangle diagonals are equal and bisect each other, but meet at right angles only if it is a square." },
        { q: "One angle of a parallelogram is 65°. An adjacent angle is:", options: ["65°", "25°", "115°", "125°"], answer: 2, explain: "Adjacent angles are supplementary: 180° − 65° = 115°." },
        { q: "A rhombus has diagonals of 12 cm and 16 cm. Its side is:", options: ["10 cm", "14 cm", "28 cm", "20 cm"], answer: 0, explain: "Half-diagonals are 6 and 8, and √(6² + 8²) = 10." },
        { q: "A quadrilateral with exactly one pair of parallel sides is a:", options: ["Parallelogram", "Trapezium", "Rhombus", "Rectangle"], answer: 1, explain: "That is the definition of a trapezium." },
        { q: "Opposite angles of a parallelogram are:", options: ["Equal", "Supplementary", "Complementary", "Each 90°"], answer: 0, explain: "In a parallelogram opposite angles are equal; adjacent angles are supplementary." }
      ]
    },
    {
      id: "number-play",
      title: "Number Play",
      section: "Part I",
      summary: "Divisibility tests, puzzles with digits, and curious number patterns such as Collatz sequences and Kaprekar's constant.",
      notes: [
        {
          heading: "Divisibility tests",
          points: [
            "By 2: last digit is 0, 2, 4, 6 or 8. By 5: last digit is 0 or 5. By 10: last digit is 0.",
            "By 3 (or 9): the **sum of the digits** is divisible by 3 (or 9). For example, 4527 has digit sum 18, so it is divisible by 9.",
            "By 4: the number formed by the last two digits is divisible by 4. By 8: the last three digits are divisible by 8.",
            "By 11: the difference between the sum of digits in odd places and in even places is 0 or a multiple of 11. For example, 2728: (2 + 2) − (7 + 8) = −11."
          ]
        },
        {
          heading: "Digit puzzles and reasoning",
          points: [
            "A number like 3-digit abc equals 100a + 10b + c. Writing numbers this way helps prove tricks.",
            "Reversing a number and subtracting gives a multiple of 9 (and for 3 digits, a multiple of 99).",
            "**1089 trick:** take a 3-digit number whose first and last digits differ by 2 or more, reverse it and subtract the smaller from the larger, then reverse the answer and add. The result is always 1089. Example: 954 − 459 = 495; 495 + 594 = 1089."
          ]
        },
        {
          heading: "Sequences and curious numbers",
          points: [
            "**Collatz (hailstone) sequence:** if the number is even, halve it; if odd, multiply by 3 and add 1. Starting at 6: 6, 3, 10, 5, 16, 8, 4, 2, 1. Every number tried so far reaches 1.",
            "**Kaprekar's constant:** for 4-digit numbers (not all digits equal), arrange digits to make the largest and smallest numbers and subtract. Repeating always reaches **6174**.",
            "For 3-digit numbers the same process reaches 495.",
            "A **palindrome** reads the same both ways, such as 12321."
          ]
        }
      ],
      formulas: [
        "abc = 100a + 10b + c",
        "Kaprekar: 4 digits → 6174; 3 digits → 495",
        "Collatz: even n → n/2; odd n → 3n + 1"
      ],
      terms: [
        { term: "Divisibility test", meaning: "A quick rule to decide if one number divides another without dividing." },
        { term: "Palindrome", meaning: "A number or word that reads the same forwards and backwards." },
        { term: "Collatz sequence", meaning: "A sequence made by halving even numbers and replacing odd n with 3n + 1." },
        { term: "Kaprekar's constant", meaning: "6174, the number every 4-digit number (with unequal digits) reaches by repeated rearranging and subtracting." }
      ],
      examples: [
        {
          q: "Is 5148 divisible by 11?",
          steps: ["Digits in odd places: 5 + 4 = 9", "Digits in even places: 1 + 8 = 9", "Difference = 0"],
          answer: "Yes, 5148 is divisible by 11 (5148 = 11 × 468)"
        },
        {
          q: "Apply the Kaprekar process to 3524 once.",
          steps: ["Largest: 5432; smallest: 2345", "5432 − 2345 = 3087"],
          answer: "3087 (repeating further reaches 6174)"
        }
      ],
      qa: [
        { q: "Why does the digit-sum test for 9 work?", a: "A number such as 100a + 10b + c = 99a + 9b + (a + b + c). The first part is a multiple of 9, so the number is divisible by 9 exactly when the digit sum a + b + c is." },
        { q: "Write the Collatz sequence starting at 7.", a: "7, 22, 11, 34, 17, 52, 26, 13, 40, 20, 10, 5, 16, 8, 4, 2, 1." }
      ],
      quiz: [
        { q: "Which number is divisible by 9?", options: ["3842", "7251", "4527", "6103"], answer: 2, explain: "4 + 5 + 2 + 7 = 18, which is divisible by 9. The other digit sums are 17, 15 and 10." },
        { q: "Which number is divisible by 11?", options: ["2728", "2738", "2748", "2758"], answer: 0, explain: "For 2728, (2 + 2) − (7 + 8) = −11, a multiple of 11. The others give −10, −9 and −8, none of which is a multiple of 11." },
        { q: "Kaprekar's constant for 4-digit numbers is:", options: ["1089", "495", "6174", "1729"], answer: 2, explain: "Repeated 'largest minus smallest' on 4-digit numbers ends at 6174." },
        { q: "In the Collatz process starting at 7, the next number is:", options: ["21", "22", "14", "8"], answer: 1, explain: "7 is odd, so 3 × 7 + 1 = 22." },
        { q: "Which number is divisible by 4?", options: ["3516", "1342", "2018", "4602"], answer: 0, explain: "The last two digits 16 are divisible by 4. The others end in 42, 18 and 02." },
        { q: "In the 1089 trick starting with 852, the first subtraction 852 − 258 gives:", options: ["694", "594", "584", "604"], answer: 1, explain: "852 − 258 = 594. Then 594 + 495 = 1089." }
      ]
    },
    {
      id: "we-distribute-yet-things-multiply",
      title: "We Distribute, Yet Things Multiply",
      section: "Part I",
      summary: "Multiplying algebraic expressions using the distributive law, and the standard identities that make multiplication and squaring quicker.",
      notes: [
        {
          heading: "Multiplying expressions",
          points: [
            "Multiply monomials by multiplying the numbers and adding the powers of the same variable: (2x)(3x²) = 6x³.",
            "To multiply a polynomial by a monomial, **distribute**: a(b + c) = ab + ac.",
            "To multiply two binomials, multiply each term of one by each term of the other, then add like terms: (x + 3)(x + 5) = x² + 5x + 3x + 15 = x² + 8x + 15.",
            "Check an answer by putting in a value for the variable on both sides."
          ]
        },
        {
          heading: "Standard identities",
          points: [
            "An **identity** is true for every value of the variables.",
            "(a + b)² = a² + 2ab + b² and (a − b)² = a² − 2ab + b².",
            "(a + b)(a − b) = a² − b² (difference of two squares).",
            "(x + a)(x + b) = x² + (a + b)x + ab."
          ]
        },
        {
          heading: "Using identities for numbers",
          points: [
            "Squares: 51² = (50 + 1)² = 2500 + 100 + 1 = 2601.",
            "Products: 103 × 97 = (100 + 3)(100 − 3) = 10000 − 9 = 9991.",
            "(a + b)² − (a − b)² = 4ab and (a + b)² + (a − b)² = 2(a² + b²).",
            "A common mistake: (a + b)² is **not** a² + b²; the middle term 2ab is missing."
          ]
        }
      ],
      formulas: [
        "(a + b)² = a² + 2ab + b²",
        "(a − b)² = a² − 2ab + b²",
        "(a + b)(a − b) = a² − b²",
        "(x + a)(x + b) = x² + (a + b)x + ab"
      ],
      terms: [
        { term: "Monomial", meaning: "An algebraic expression with one term, such as 5x²." },
        { term: "Binomial", meaning: "An algebraic expression with two terms, such as x + 3." },
        { term: "Distributive law", meaning: "a(b + c) = ab + ac." },
        { term: "Identity", meaning: "An equation that is true for all values of the variables." },
        { term: "Like terms", meaning: "Terms with the same variable raised to the same power, which can be added or subtracted." }
      ],
      examples: [
        {
          q: "Expand (2x + 3y)².",
          steps: ["Use (a + b)² with a = 2x, b = 3y", "a² = 4x², 2ab = 12xy, b² = 9y²"],
          answer: "4x² + 12xy + 9y²"
        },
        {
          q: "Find 98 × 102 using an identity.",
          steps: ["98 × 102 = (100 − 2)(100 + 2)", "= 100² − 2² = 10000 − 4"],
          answer: "9996"
        }
      ],
      qa: [
        { q: "Is (a + b)² = a² + b²? Show with a = 2, b = 3.", a: "No. (2 + 3)² = 25, but 2² + 3² = 13. The correct identity has the extra term 2ab = 12, and 13 + 12 = 25." },
        { q: "Simplify (x + 4)(x − 4).", a: "It is of the form (a + b)(a − b) = a² − b², so the answer is x² − 16." }
      ],
      quiz: [
        { q: "(x + 3)(x + 5) equals:", options: ["x² + 8x + 15", "x² + 15x + 8", "x² + 8x + 8", "x² + 2x + 15"], answer: 0, explain: "Sum of 3 and 5 is 8, product is 15, so x² + 8x + 15." },
        { q: "(a − b)² equals:", options: ["a² − b²", "a² + 2ab + b²", "a² − 2ab + b²", "a² − 2ab − b²"], answer: 2, explain: "(a − b)² = a² − 2ab + b²; the last term is always positive." },
        { q: "103 × 97 equals:", options: ["10009", "9991", "9999", "9909"], answer: 1, explain: "(100 + 3)(100 − 3) = 100² − 3² = 10000 − 9 = 9991." },
        { q: "(2x)(3x²) equals:", options: ["5x³", "6x²", "6x³", "5x²"], answer: 2, explain: "Multiply the numbers 2 × 3 = 6, and add powers x¹ × x² = x³." },
        { q: "(m + n)² − (m − n)² equals:", options: ["0", "2mn", "2m² + 2n²", "4mn"], answer: 3, explain: "The squares cancel, leaving 2mn − (−2mn) = 4mn." },
        { q: "51² equals:", options: ["2601", "2501", "2611", "2551"], answer: 0, explain: "(50 + 1)² = 2500 + 2 × 50 + 1 = 2601." }
      ]
    },
    {
      id: "proportional-reasoning-1",
      title: "Proportional Reasoning-1",
      section: "Part I",
      summary: "Comparing quantities using ratios, equal ratios as proportion, and direct proportion where two quantities rise or fall together at a constant rate.",
      notes: [
        {
          heading: "Ratio and proportion",
          points: [
            "A **ratio** compares two quantities of the same kind by division. 15 : 25 in simplest form is 3 : 5.",
            "Two ratios are equivalent if they simplify to the same ratio, and four numbers a, b, c, d are in **proportion** if a : b = c : d.",
            "To share an amount in a ratio, add the parts and find the value of one part. ₹600 in the ratio 2 : 3 gives 5 parts, each ₹120, so ₹240 and ₹360."
          ]
        },
        {
          heading: "Direct proportion",
          points: [
            "Two quantities are in **direct proportion** if one increases (or decreases) in the same ratio as the other.",
            "Their ratio y/x stays the same. This constant is the **constant of proportionality**.",
            "Example: if 6 pens cost ₹72, one pen costs ₹12, so 10 pens cost ₹120. This is the unitary method.",
            "Graph of direct proportion is a straight line through the origin."
          ]
        },
        {
          heading: "Applications",
          points: [
            "Scale on a map: if 1 cm stands for 5 km, then 4.5 cm stands for 22.5 km.",
            "Speed and distance at constant speed: distance is in direct proportion to time.",
            "Scaling recipes or mixtures: if quantities of ingredients increase in the same ratio, the taste stays the same."
          ]
        }
      ],
      formulas: [
        "a : b = c : d  ⟺  a × d = b × c",
        "Direct proportion: y/x = k (constant)",
        "Share = (part / total parts) × amount"
      ],
      terms: [
        { term: "Ratio", meaning: "A comparison of two quantities of the same kind by division." },
        { term: "Proportion", meaning: "An equality of two ratios." },
        { term: "Direct proportion", meaning: "Two quantities that increase or decrease together in the same ratio." },
        { term: "Constant of proportionality", meaning: "The fixed value of y/x when y and x are in direct proportion." },
        { term: "Unitary method", meaning: "Finding the value of one unit first, then of many units." }
      ],
      examples: [
        {
          q: "A car travels 240 km in 4 hours. How long will it take to cover 360 km at the same speed?",
          steps: ["Speed = 240 ÷ 4 = 60 km/h", "Time = 360 ÷ 60"],
          answer: "6 hours"
        },
        {
          q: "Divide ₹1,000 between A and B in the ratio 3 : 2.",
          steps: ["Total parts = 5; one part = ₹200", "A = 3 × 200, B = 2 × 200"],
          answer: "A gets ₹600, B gets ₹400"
        }
      ],
      qa: [
        { q: "How can you tell whether two quantities are in direct proportion?", a: "Divide the corresponding values. If y/x is the same constant for every pair, they are in direct proportion." },
        { q: "Are the ratios 4 : 6 and 10 : 15 in proportion?", a: "Yes. 4/6 = 2/3 and 10/15 = 2/3. Also 4 × 15 = 60 = 6 × 10." }
      ],
      quiz: [
        { q: "15 : 25 in the simplest form is:", options: ["5 : 3", "3 : 5", "3 : 4", "15 : 5"], answer: 1, explain: "Divide both by their HCF 5 to get 3 : 5." },
        { q: "₹600 is divided in the ratio 2 : 3. The smaller share is:", options: ["₹200", "₹300", "₹240", "₹360"], answer: 2, explain: "One part = 600 ÷ 5 = ₹120, so the smaller share is 2 × 120 = ₹240." },
        { q: "If 6 pens cost ₹72, then 10 pens cost:", options: ["₹120", "₹100", "₹140", "₹130"], answer: 0, explain: "One pen costs ₹12, so 10 pens cost ₹120." },
        { q: "On a map 1 cm represents 5 km. A distance of 4.5 cm on the map is:", options: ["9 km", "20 km", "25 km", "22.5 km"], answer: 3, explain: "4.5 × 5 = 22.5 km." },
        { q: "If x and y are in direct proportion, then y/x is:", options: ["Equal to x + y", "Always 1", "Constant", "Always zero"], answer: 2, explain: "In direct proportion the ratio of corresponding values is constant." },
        { q: "A vehicle covers 240 km in 4 hours. At the same speed, 360 km takes:", options: ["5 h", "6 h", "8 h", "9 h"], answer: 1, explain: "Speed is 60 km/h, so 360 ÷ 60 = 6 hours." }
      ]
    },
    {
      id: "fractions-in-disguise",
      title: "Fractions in Disguise",
      section: "Part II",
      summary: "Percentages as fractions, percentage increase and decrease, profit and loss, discount, tax, compound growth and depreciation.",
      notes: [
        {
          heading: "Percentages",
          points: [
            "**Per cent** means 'out of 100'. 25% = 25/100 = 1/4 = 0.25.",
            "To find x% of a quantity, multiply the quantity by x/100. 25% of 480 = 120.",
            "Increase by x%: new value = old value × (1 + x/100). Decrease by x%: old value × (1 − x/100).",
            "A 10% rise on ₹800 gives ₹880. A 10% fall on ₹800 gives ₹720."
          ]
        },
        {
          heading: "Profit, loss, discount and tax",
          points: [
            "Profit = SP − CP and Loss = CP − SP. Profit % = (Profit / CP) × 100, and loss % is found the same way.",
            "**Discount** is a reduction on the marked price: Selling price = marked price − discount.",
            "**Tax** such as GST is added on the price. Price with tax = price + tax.",
            "Percentages of profit, loss and discount are always worked out on the proper base: CP for profit and loss, marked price for discount."
          ]
        },
        {
          heading: "Compound growth and depreciation",
          points: [
            "In **compound interest** the interest of each year is added to the principal, so the next year's interest is on a bigger amount.",
            "Amount after n years: A = P(1 + r/100)ⁿ, and compound interest = A − P.",
            "**Depreciation** is the fall in value of an item. After n years: value = P(1 − r/100)ⁿ.",
            "Example: ₹10,000 at 10% for 2 years becomes 10,000 × 1.1 × 1.1 = ₹12,100."
          ]
        }
      ],
      formulas: [
        "x% of N = (x/100) × N",
        "Profit % = (SP − CP)/CP × 100",
        "A = P(1 + r/100)ⁿ;  CI = A − P",
        "Depreciated value = P(1 − r/100)ⁿ"
      ],
      terms: [
        { term: "Percentage", meaning: "A number expressed as a fraction of 100." },
        { term: "Cost price (CP)", meaning: "The price at which an article is bought." },
        { term: "Selling price (SP)", meaning: "The price at which an article is sold." },
        { term: "Discount", meaning: "The reduction given on the marked price." },
        { term: "Compound interest", meaning: "Interest calculated on the principal plus the interest already earned." },
        { term: "Depreciation", meaning: "The decrease in the value of an item with time." }
      ],
      examples: [
        {
          q: "Find the compound interest on ₹10,000 at 10% per year for 2 years.",
          steps: ["A = 10,000 × (1.1)² = 10,000 × 1.21 = ₹12,100", "CI = A − P = 12,100 − 10,000"],
          answer: "CI = ₹2,100"
        },
        {
          q: "An article marked ₹1,500 is sold at 20% discount. Find the selling price.",
          steps: ["Discount = 20% of 1500 = ₹300", "SP = 1500 − 300"],
          answer: "₹1,200"
        }
      ],
      qa: [
        { q: "A shirt bought for ₹500 is sold for ₹600. Find the profit percent.", a: "Profit = ₹100. Profit % = 100/500 × 100 = 20%." },
        { q: "Why is compound interest more than simple interest?", a: "In compound interest each year's interest is added to the principal, so later interest is earned on a larger sum. In simple interest it is always on the original principal." }
      ],
      quiz: [
        { q: "25% of 480 is:", options: ["120", "96", "140", "240"], answer: 0, explain: "480 ÷ 4 = 120." },
        { q: "A price of ₹800 increases by 10%. The new price is:", options: ["₹810", "₹900", "₹880", "₹720"], answer: 2, explain: "10% of 800 = 80, so new price = 880." },
        { q: "An article bought for ₹500 is sold for ₹600. The profit percent is:", options: ["10%", "20%", "25%", "100%"], answer: 1, explain: "Profit ₹100 on a cost price of ₹500 is 100/500 × 100 = 20%." },
        { q: "The amount on ₹10,000 at 10% compound interest for 2 years is:", options: ["₹12,000", "₹11,000", "₹12,200", "₹12,100"], answer: 3, explain: "10,000 × 1.1 × 1.1 = ₹12,100." },
        { q: "An article marked ₹1,500 is sold at a 20% discount. The selling price is:", options: ["₹300", "₹1,300", "₹1,200", "₹1,800"], answer: 2, explain: "Discount = ₹300, so SP = 1500 − 300 = ₹1,200." },
        { q: "A machine worth ₹50,000 depreciates 10% in a year. Its value after one year is:", options: ["₹40,000", "₹45,000", "₹55,000", "₹49,000"], answer: 1, explain: "10% of 50,000 is 5,000, so the value is 45,000." }
      ]
    },
    {
      id: "the-baudhayana-pythagoras-theorem",
      title: "The Baudhayana-Pythagoras Theorem",
      section: "Part II",
      summary: "The relation between the sides of a right-angled triangle, its converse, Pythagorean triples and its uses.",
      notes: [
        {
          heading: "The theorem",
          points: [
            "In a right-angled triangle, the square on the **hypotenuse** equals the sum of the squares on the other two sides: a² + b² = c².",
            "The hypotenuse is the side opposite the right angle and is the longest side.",
            "The result was known in India, stated in the Sulbasutras of Baudhayana, long before Pythagoras, so it is named after both.",
            "Example: legs 6 and 8 give c² = 36 + 64 = 100, so c = 10."
          ]
        },
        {
          heading: "The converse and triples",
          points: [
            "**Converse:** if a² + b² = c² for the sides of a triangle, the triangle is right-angled, with the right angle opposite c.",
            "Triples (a, b, c) with a² + b² = c²: (3, 4, 5), (5, 12, 13), (8, 15, 17), (7, 24, 25). Multiples such as (6, 8, 10) also work.",
            "Builders used a 3-4-5 rope to make a right angle."
          ]
        },
        {
          heading: "Applications",
          points: [
            "Diagonal of a square with side s is s√2. The diagonal of a unit square is √2.",
            "Diagonal of a rectangle l × b is √(l² + b²).",
            "Height of a ladder on a wall: a 10 m ladder with foot 6 m from the wall reaches √(100 − 36) = 8 m.",
            "Distance between two points on a grid can be found by forming a right triangle."
          ]
        }
      ],
      formulas: [
        "a² + b² = c² (c is the hypotenuse)",
        "Diagonal of a square = side × √2",
        "Diagonal of a rectangle = √(l² + b²)"
      ],
      terms: [
        { term: "Hypotenuse", meaning: "The side opposite the right angle in a right-angled triangle." },
        { term: "Pythagorean triple", meaning: "Three natural numbers a, b, c with a² + b² = c²." },
        { term: "Converse", meaning: "The reverse statement: if a² + b² = c², the triangle is right-angled." },
        { term: "Sulbasutras", meaning: "Ancient Indian texts on geometry and altar-building, which include this theorem." }
      ],
      examples: [
        {
          q: "A 10 m ladder leans on a wall with its foot 6 m from the wall. How high does it reach?",
          steps: ["Ladder is the hypotenuse: h² + 6² = 10²", "h² = 100 − 36 = 64"],
          answer: "h = 8 m"
        },
        {
          q: "Is a triangle with sides 9, 12, 15 right-angled?",
          steps: ["Longest side is 15, 15² = 225", "9² + 12² = 81 + 144 = 225"],
          answer: "Yes, right-angled (the right angle is opposite the side 15)"
        }
      ],
      qa: [
        { q: "State the Baudhayana-Pythagoras theorem.", a: "In a right-angled triangle, the square of the hypotenuse is equal to the sum of the squares of the other two sides." },
        { q: "Find the diagonal of a rectangle 12 cm by 5 cm.", a: "Diagonal = √(12² + 5²) = √169 = 13 cm." }
      ],
      quiz: [
        { q: "The legs of a right triangle are 6 and 8. The hypotenuse is:", options: ["14", "10", "12", "100"], answer: 1, explain: "6² + 8² = 100, so c = 10." },
        { q: "Which is a Pythagorean triple?", options: ["4, 5, 6", "6, 7, 8", "5, 12, 13", "7, 8, 9"], answer: 2, explain: "5² + 12² = 25 + 144 = 169 = 13²." },
        { q: "The hypotenuse is 13 and one leg is 5. The other leg is:", options: ["12", "8", "18", "9"], answer: 0, explain: "13² − 5² = 169 − 25 = 144, so the leg is 12." },
        { q: "The diagonal of a square of side 1 unit is:", options: ["2", "√3", "1", "√2"], answer: 3, explain: "1² + 1² = 2, so the diagonal is √2." },
        { q: "A triangle with sides 9, 12, 15 is right-angled because:", options: ["9 + 12 > 15", "9² + 12² = 15²", "9 × 12 = 15", "15 is odd"], answer: 1, explain: "81 + 144 = 225 = 15², and by the converse the triangle has a right angle." },
        { q: "A 10 m ladder has its foot 6 m from a wall. How high up the wall does it reach?", options: ["8 m", "4 m", "16 m", "12 m"], answer: 0, explain: "Height = √(10² − 6²) = √64 = 8 m." }
      ]
    },
    {
      id: "proportional-reasoning-2",
      title: "Proportional Reasoning-2",
      section: "Part II",
      summary: "Representing parts of a whole with pie charts, and inverse proportion where one quantity rises as the other falls.",
      notes: [
        {
          heading: "Pie charts",
          points: [
            "A **pie chart** is a circle divided into sectors to show how a whole is shared among categories.",
            "The central angle of a sector = (value / total) × 360°.",
            "Example: 12 out of 36 students gives (12/36) × 360° = 120°.",
            "Sector angles add up to 360°, and a sector for 25% has angle 90°."
          ]
        },
        {
          heading: "Inverse proportion",
          points: [
            "Two quantities are in **inverse proportion** if one increases when the other decreases so that their **product** stays constant: x × y = k.",
            "If 8 workers finish a job in 12 days, the total work is 96 worker-days, so 6 workers take 96 ÷ 6 = 16 days.",
            "If x₁y₁ = x₂y₂ then x₁/x₂ = y₂/y₁.",
            "Speed and time for a fixed distance are in inverse proportion."
          ]
        },
        {
          heading: "Telling the types apart",
          points: [
            "Direct: ratio y/x is constant. Inverse: product xy is constant.",
            "More pens, more money: direct. More workers, less time: inverse.",
            "Not all pairs of changing quantities are proportional, so always test with the numbers."
          ]
        }
      ],
      formulas: [
        "Central angle = (value / total) × 360°",
        "Inverse proportion: x × y = k",
        "x₁ × y₁ = x₂ × y₂"
      ],
      terms: [
        { term: "Pie chart", meaning: "A circular chart whose sectors show parts of a whole." },
        { term: "Central angle", meaning: "The angle at the centre of the circle for one sector." },
        { term: "Inverse proportion", meaning: "Two quantities whose product is constant." },
        { term: "Worker-days", meaning: "A measure of work: number of workers times number of days." }
      ],
      examples: [
        {
          q: "8 workers can build a wall in 12 days. How many days will 6 workers take?",
          steps: ["Work = 8 × 12 = 96 worker-days", "Days = 96 ÷ 6"],
          answer: "16 days"
        },
        {
          q: "In a survey of 60 students, 15 prefer cricket. Find the central angle of cricket in a pie chart.",
          steps: ["Fraction = 15/60 = 1/4", "Angle = 1/4 × 360°"],
          answer: "90°"
        }
      ],
      qa: [
        { q: "How do you decide whether two quantities are in inverse proportion?", a: "Multiply the corresponding values. If the product xy is the same every time, they are in inverse proportion." },
        { q: "A car at 60 km/h takes 5 hours. How long at 75 km/h?", a: "Distance = 300 km. Time = 300 ÷ 75 = 4 hours." }
      ],
      quiz: [
        { q: "The central angle for 25% in a pie chart is:", options: ["25°", "45°", "90°", "180°"], answer: 2, explain: "25% of 360° = 90°." },
        { q: "In a class of 36, 12 students like football. The central angle for football is:", options: ["12°", "120°", "100°", "60°"], answer: 1, explain: "12/36 × 360° = 120°." },
        { q: "x and y are inversely proportional. If x = 4 when y = 15, then y when x = 6 is:", options: ["10", "22.5", "9", "60"], answer: 0, explain: "xy = 60, so y = 60 ÷ 6 = 10." },
        { q: "8 workers take 12 days. 6 workers will take:", options: ["9 days", "14 days", "16 days", "18 days"], answer: 2, explain: "8 × 12 = 96 = 6 × d, so d = 16." },
        { q: "The product x × y stays constant in:", options: ["Inverse proportion", "Direct proportion", "Any two quantities", "Equal sums"], answer: 0, explain: "This is exactly the meaning of inverse proportion." },
        { q: "A bus journey takes 5 h at 60 km/h. At 75 km/h the same journey takes:", options: ["3.5 h", "6.25 h", "4 h", "4.5 h"], answer: 2, explain: "300 km ÷ 75 km/h = 4 hours." }
      ]
    },
    {
      id: "exploring-some-geometric-themes",
      title: "Exploring Some Geometric Themes",
      section: "Part II",
      summary: "Three-dimensional shapes, their nets, Euler's relation between faces, vertices and edges, and fractals with self-similar patterns.",
      notes: [
        {
          heading: "Solids and their parts",
          points: [
            "A solid has **faces** (flat surfaces), **edges** (where faces meet) and **vertices** (corners).",
            "A **prism** has two identical parallel bases joined by rectangles. A triangular prism has 5 faces, 9 edges and 6 vertices.",
            "A **pyramid** has a polygon base and triangular faces meeting at a point. A square pyramid has 5 faces, 8 edges and 5 vertices.",
            "A cube and cuboid each have 6 faces, 12 edges and 8 vertices."
          ]
        },
        {
          heading: "Euler's relation",
          points: [
            "For solids with flat faces and no holes: **F + V − E = 2**.",
            "Cube: 6 + 8 − 12 = 2. Triangular prism: 5 + 6 − 9 = 2.",
            "If you know two of F, V, E, you can find the third."
          ]
        },
        {
          heading: "Nets and fractals",
          points: [
            "A **net** is a flat pattern that folds into a solid. There are **11** different nets of a cube.",
            "To check a net, see that the faces fold without overlapping.",
            "A **fractal** is a pattern in which the same shape repeats at smaller scales (self-similarity). Examples are the Sierpinski triangle and the Koch snowflake.",
            "Fractals are made by repeating a simple rule again and again."
          ]
        }
      ],
      formulas: [
        "Euler: F + V − E = 2",
        "Cube/cuboid: F = 6, V = 8, E = 12",
        "Prism with n-sided base: F = n + 2, V = 2n, E = 3n"
      ],
      terms: [
        { term: "Face", meaning: "A flat surface of a solid." },
        { term: "Edge", meaning: "A line segment where two faces meet." },
        { term: "Vertex", meaning: "A corner where edges meet." },
        { term: "Net", meaning: "A flat pattern that can be folded to make a solid." },
        { term: "Fractal", meaning: "A pattern that repeats itself at smaller and smaller scales." }
      ],
      examples: [
        {
          q: "A solid has 7 faces and 10 vertices. How many edges does it have?",
          steps: ["Euler: F + V − E = 2", "7 + 10 − E = 2, so E = 15"],
          answer: "15 edges"
        }
      ],
      qa: [
        { q: "State Euler's relation and verify it for a cuboid.", a: "F + V − E = 2. For a cuboid, 6 + 8 − 12 = 2." },
        { q: "What is a fractal? Give one example.", a: "A fractal is a pattern that looks similar at every scale because a simple rule is repeated. The Sierpinski triangle is an example." }
      ],
      quiz: [
        { q: "A cuboid has 6 faces and 8 vertices. Its number of edges is:", options: ["10", "12", "14", "16"], answer: 1, explain: "E = F + V − 2 = 6 + 8 − 2 = 12." },
        { q: "How many edges does a triangular prism have?", options: ["6", "8", "9", "12"], answer: 2, explain: "Two triangles contribute 6 edges and three rectangles' side edges add 3 more: 9." },
        { q: "How many faces does a square pyramid have?", options: ["5", "4", "6", "8"], answer: 0, explain: "One square base plus four triangular faces make 5." },
        { q: "How many different nets does a cube have?", options: ["6", "8", "12", "11"], answer: 3, explain: "There are 11 distinct ways to unfold a cube into a net." },
        { q: "A fractal is best described as a pattern which:", options: ["Uses only straight lines", "Has smaller parts that resemble the whole", "Always forms a circle", "Has zero area"], answer: 1, explain: "Self-similarity at smaller scales is the key idea of a fractal." },
        { q: "A solid has 7 faces and 10 vertices. Its edges number:", options: ["17", "15", "19", "12"], answer: 1, explain: "E = 7 + 10 − 2 = 15." }
      ]
    },
    {
      id: "tales-by-dots-and-lines",
      title: "Tales by Dots and Lines",
      section: "Part II",
      summary: "Summarising data with the arithmetic mean and reading how things change over time using dot plots and line graphs.",
      notes: [
        {
          heading: "Arithmetic mean",
          points: [
            "The **mean** (average) = sum of all values ÷ number of values.",
            "Mean of 4, 6, 8, 10, 12 = 40 ÷ 5 = 8.",
            "The mean always lies between the smallest and the largest value.",
            "If the mean of n values is m, their sum is n × m."
          ]
        },
        {
          heading: "Line graphs",
          points: [
            "A **line graph** joins points plotted for values measured over time, so it shows how a quantity changes.",
            "Time is usually on the horizontal axis and the quantity on the vertical axis.",
            "A rising line means increase, a falling line means decrease, and a flat line means no change.",
            "A steeper line means a faster change."
          ]
        },
        {
          heading: "Reading and choosing graphs",
          points: [
            "Always read the scale and units on both axes before reading values.",
            "A **dot plot** shows each data value as a dot above a number line, so the spread is easy to see.",
            "Use a line graph for change over time, a bar graph for comparing groups, and a pie chart for parts of a whole.",
            "Mean is affected by very large or very small values (outliers)."
          ]
        }
      ],
      formulas: [
        "Mean = (sum of values) ÷ (number of values)",
        "Sum = mean × number of values"
      ],
      terms: [
        { term: "Mean", meaning: "The sum of the values divided by how many there are; also called average." },
        { term: "Line graph", meaning: "A graph joining plotted points to show change over time." },
        { term: "Dot plot", meaning: "A display where each value is shown as a dot above a number line." },
        { term: "Outlier", meaning: "A value much larger or smaller than the others." },
        { term: "Scale", meaning: "The value represented by each unit on a graph's axis." }
      ],
      examples: [
        {
          q: "The mean of 10, 20, 30 and x is 25. Find x.",
          steps: ["Sum = 4 × 25 = 100", "10 + 20 + 30 + x = 100, so 60 + x = 100"],
          answer: "x = 40"
        }
      ],
      qa: [
        { q: "A student scores 70, 80 and 90 in three tests. Find the mean.", a: "Mean = (70 + 80 + 90) ÷ 3 = 240 ÷ 3 = 80." },
        { q: "When is a line graph a better choice than a bar graph?", a: "When we want to show how one quantity changes over time, such as daily temperature, since the line shows the trend." }
      ],
      quiz: [
        { q: "The mean of 4, 6, 8, 10, 12 is:", options: ["6", "8", "10", "9"], answer: 1, explain: "Sum is 40 and there are 5 values, so 40 ÷ 5 = 8." },
        { q: "The mean of 5 numbers is 12. Their sum is:", options: ["17", "7", "12", "60"], answer: 3, explain: "Sum = mean × number of values = 12 × 5 = 60." },
        { q: "A line graph is mainly used to show:", options: ["Parts of a whole", "Change of a quantity over time", "Colours of objects", "Names of cities"], answer: 1, explain: "Joining points over time shows the trend." },
        { q: "The mean of 70, 80 and 90 is:", options: ["70", "85", "80", "90"], answer: 2, explain: "(70 + 80 + 90) ÷ 3 = 80." },
        { q: "The mean of 10, 20, 30 and x is 25. Then x is:", options: ["40", "25", "30", "35"], answer: 0, explain: "The total must be 100, so x = 100 − 60 = 40." },
        { q: "The mean of a data set always lies:", options: ["Between zero and the smallest value", "Between the two smallest values", "Between the smallest and largest values", "Above the largest value"], answer: 2, explain: "An average cannot be less than the minimum or more than the maximum." }
      ]
    },
    {
      id: "algebra-play",
      title: "Algebra Play",
      section: "Part II",
      summary: "Using letters to describe patterns, generalise number tricks and form and solve simple equations.",
      notes: [
        {
          heading: "Writing expressions",
          points: [
            "A letter stands for a number that can change (a **variable**), so an expression describes a whole pattern at once.",
            "5 more than 3 times n is 3n + 5. The nth even number is 2n and the nth odd number is 2n − 1.",
            "Three consecutive numbers starting at n are n, n + 1, n + 2, with sum 3n + 3.",
            "Matchstick squares in a row need 3n + 1 sticks for n squares."
          ]
        },
        {
          heading: "Number tricks",
          points: [
            "Algebra explains why number tricks work. Think of a number n, double it (2n), add 6 (2n + 6), halve (n + 3), subtract n: the answer is always 3.",
            "The original number cancels, so the result does not depend on the choice.",
            "To test a claim, try different numbers, then prove it with a variable."
          ]
        },
        {
          heading: "Forming and solving equations",
          points: [
            "An **equation** says two expressions are equal. Solve it by doing the same operation on both sides.",
            "3x + 5 = 20 gives 3x = 15 and x = 5. Always check by putting x back.",
            "Steps: form the equation from the story, solve it, then check it against the story."
          ]
        }
      ],
      formulas: [
        "nth even number = 2n;  nth odd number = 2n − 1",
        "Three consecutive numbers: n, n + 1, n + 2",
        "Solve ax + b = c: x = (c − b) ÷ a"
      ],
      terms: [
        { term: "Variable", meaning: "A letter that stands for a number that can change." },
        { term: "Expression", meaning: "A combination of numbers, variables and operations, such as 3n + 5." },
        { term: "Equation", meaning: "A statement that two expressions are equal." },
        { term: "Generalisation", meaning: "A rule in algebra that works for every case of a pattern." }
      ],
      examples: [
        {
          q: "Solve 2x − 7 = 9.",
          steps: ["Add 7 to both sides: 2x = 16", "Divide both sides by 2"],
          answer: "x = 8 (check: 2 × 8 − 7 = 9)"
        },
        {
          q: "The sum of three consecutive numbers is 51. Find them.",
          steps: ["Let the numbers be n, n + 1, n + 2", "3n + 3 = 51, so 3n = 48 and n = 16"],
          answer: "16, 17, 18"
        }
      ],
      qa: [
        { q: "Show that the sum of any three consecutive numbers is divisible by 3.", a: "The numbers n, n + 1, n + 2 add up to 3n + 3 = 3(n + 1), a multiple of 3." },
        { q: "Why is a variable useful in a number trick?", a: "It stands for any starting number, so showing the result works for the variable proves it works for every number." }
      ],
      quiz: [
        { q: "Matchsticks needed for n squares in a row is 3n + 1. For 10 squares this is:", options: ["30", "31", "33", "40"], answer: 1, explain: "3 × 10 + 1 = 31." },
        { q: "The solution of 3x + 5 = 20 is:", options: ["5", "15", "8", "25/3"], answer: 0, explain: "3x = 15, so x = 5." },
        { q: "Think of a number, double it, add 6, halve, then subtract the original number. The result is always:", options: ["0", "6", "3", "the original number"], answer: 2, explain: "(2n + 6) ÷ 2 − n = n + 3 − n = 3." },
        { q: "Five more than three times n is written as:", options: ["5n + 3", "3(n + 5)", "8n", "3n + 5"], answer: 3, explain: "Three times n is 3n; five more gives 3n + 5." },
        { q: "The sum of three consecutive numbers starting at n is:", options: ["3n", "3n + 3", "3n + 1", "n + 3"], answer: 1, explain: "n + (n + 1) + (n + 2) = 3n + 3." },
        { q: "The solution of 2x − 7 = 9 is:", options: ["8", "1", "16", "11"], answer: 0, explain: "2x = 16, so x = 8." }
      ]
    },
    {
      id: "area",
      title: "Area",
      section: "Part II",
      summary: "Areas of triangles, parallelograms, trapeziums and rhombuses, and finding the area of composite figures by splitting them.",
      notes: [
        {
          heading: "Triangle and parallelogram",
          points: [
            "Area of a parallelogram = base × height, where the height is the perpendicular distance between the parallel sides.",
            "A diagonal splits a parallelogram into two identical triangles, so the area of a triangle = ½ × base × height.",
            "Any side can be taken as the base, with the matching perpendicular height.",
            "Example: base 10 and height 6 gives a triangle of area ½ × 10 × 6 = 30."
          ]
        },
        {
          heading: "Trapezium and rhombus",
          points: [
            "Area of a **trapezium** = ½ × (sum of the parallel sides) × height.",
            "Example: parallel sides 8 and 12 and height 5 give ½ × 20 × 5 = 50.",
            "Area of a **rhombus** (or any quadrilateral with perpendicular diagonals) = ½ × d₁ × d₂.",
            "Area of a general quadrilateral = ½ × diagonal × (sum of the perpendiculars from the other two vertices)."
          ]
        },
        {
          heading: "Composite figures",
          points: [
            "Split a complex figure into triangles, rectangles and trapeziums, find each area and add them.",
            "Or subtract: find the area of a large shape and subtract the part that is cut out.",
            "Always use the same units. Area is in square units such as cm² or m²."
          ]
        }
      ],
      formulas: [
        "Triangle = ½ × b × h",
        "Parallelogram = b × h",
        "Trapezium = ½ × (a + b) × h",
        "Rhombus = ½ × d₁ × d₂"
      ],
      terms: [
        { term: "Height", meaning: "The perpendicular distance from the base to the opposite side or vertex." },
        { term: "Base", meaning: "The side taken as reference for measuring the height." },
        { term: "Trapezium", meaning: "A quadrilateral with one pair of parallel sides." },
        { term: "Composite figure", meaning: "A figure made by joining simple shapes." }
      ],
      examples: [
        {
          q: "Find the area of a trapezium with parallel sides 8 cm and 12 cm and height 5 cm.",
          steps: ["Area = ½ × (8 + 12) × 5", "= ½ × 20 × 5"],
          answer: "50 cm²"
        },
        {
          q: "The area of a triangle is 48 cm² and its base is 12 cm. Find the height.",
          steps: ["½ × 12 × h = 48", "6h = 48"],
          answer: "h = 8 cm"
        }
      ],
      qa: [
        { q: "Why is the area of a triangle half of the area of a parallelogram on the same base and height?", a: "Two identical triangles fit together to make a parallelogram, so each triangle is half of it." },
        { q: "Find the area of a rhombus with diagonals 10 cm and 8 cm.", a: "Area = ½ × 10 × 8 = 40 cm²." }
      ],
      quiz: [
        { q: "A triangle has base 10 cm and height 6 cm. Its area is:", options: ["60 cm²", "30 cm²", "16 cm²", "15 cm²"], answer: 1, explain: "½ × 10 × 6 = 30." },
        { q: "A parallelogram has base 12 cm and height 5 cm. Its area is:", options: ["30 cm²", "17 cm²", "60 cm²", "120 cm²"], answer: 2, explain: "Base × height = 12 × 5 = 60." },
        { q: "A trapezium has parallel sides 8 cm and 12 cm and height 5 cm. Its area is:", options: ["50 cm²", "100 cm²", "40 cm²", "60 cm²"], answer: 0, explain: "½ × (8 + 12) × 5 = 50." },
        { q: "A rhombus has diagonals 10 cm and 8 cm. Its area is:", options: ["80 cm²", "18 cm²", "20 cm²", "40 cm²"], answer: 3, explain: "½ × 10 × 8 = 40." },
        { q: "Two identical triangles can be joined to make a:", options: ["Rhombus always", "Circle", "Cube", "Parallelogram"], answer: 3, explain: "Joining two congruent triangles along a side gives a parallelogram." },
        { q: "A triangle has area 48 cm² and base 12 cm. Its height is:", options: ["4 cm", "8 cm", "24 cm", "16 cm"], answer: 1, explain: "½ × 12 × h = 48, so h = 8." }
      ]
    }
  ]
});
