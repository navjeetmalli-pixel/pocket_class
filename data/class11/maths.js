// Class 11 Mathematics: current rationalised NCERT textbook.
// Format: see CONTENT_GUIDE.md
StudyData.add(11, "maths", {
  chapters: [
    // ───────────────────────────── 1. Sets ─────────────────────────────
    {
      id: "sets",
      title: "Sets",
      section: "Sets and Functions",
      summary: "What a set is, roster and set-builder forms, types of sets, subsets and intervals, Venn diagrams, and the operations of union, intersection, difference and complement with De Morgan's laws.",
      notes: [
        {
          heading: "Sets and their representation",
          points: [
            "A **set** is a well-defined collection of objects: for any object we can decide definitely whether it belongs to the set. 'The five best cricketers of India' is not a set.",
            "If a belongs to set A we write **a ∈ A**; if b does not belong to A we write **b ∉ A**.",
            "**Roster form**: list the elements in braces, e.g. vowels = {a, e, i, o, u}. Elements are not repeated and their order does not matter.",
            "**Set-builder form**: describe a common property, e.g. {x : x is a natural number and x < 6} = {1, 2, 3, 4, 5}.",
            "Standard sets: **N** (natural numbers), **Z** (integers), **Q** (rational numbers), **R** (real numbers); Z⁺, Q⁺, R⁺ are their positive members."
          ]
        },
        {
          heading: "Types of sets",
          points: [
            "The **empty set** (null or void set) φ or { } has no element, e.g. {x : x is a natural number and 1 < x < 2}.",
            "A set is **finite** if it is empty or has a definite number of elements, written n(A); otherwise it is **infinite** (e.g. N, or the points on a line).",
            "**Equal sets** have exactly the same elements: {1, 2, 2, 3} = {3, 1, 2}, since repetition and order do not matter.",
            "A set with exactly one element is a **singleton**, e.g. {0}. Note that {0} ≠ φ, because {0} has one element."
          ]
        },
        {
          heading: "Subsets and intervals",
          points: [
            "**A ⊂ B** (A is a subset of B) if every element of A is also an element of B; B is then a **superset** of A.",
            "Every set is a subset of itself, and φ is a subset of every set. **A = B if and only if A ⊂ B and B ⊂ A.**",
            "A set with n elements has **2ⁿ subsets**, and 2ⁿ − 1 of them are proper subsets (subsets other than the set itself).",
            "N ⊂ Z ⊂ Q ⊂ R. The set T of irrational numbers is also a subset of R, and Q and T have no common element.",
            "Intervals (a < b): open (a, b) = {x : a < x < b}; closed [a, b] = {x : a ≤ x ≤ b}; [a, b) and (a, b] include only one end-point. Each has length b − a."
          ]
        },
        {
          heading: "Universal set and operations on sets",
          points: [
            "The **universal set U** contains all the sets under discussion. In a **Venn diagram**, U is a rectangle and its subsets are circles inside it.",
            "**Union** A ∪ B = {x : x ∈ A or x ∈ B}; **intersection** A ∩ B = {x : x ∈ A and x ∈ B}.",
            "A and B are **disjoint** if A ∩ B = φ.",
            "**Difference** A − B = {x : x ∈ A and x ∉ B}. In general A − B ≠ B − A.",
            "A − B, A ∩ B and B − A are mutually disjoint, and together they make up A ∪ B."
          ]
        },
        {
          heading: "Laws of sets and the complement",
          points: [
            "Commutative: A ∪ B = B ∪ A and A ∩ B = B ∩ A. The associative laws also hold for ∪ and ∩.",
            "Identity: A ∪ φ = A, A ∩ U = A. Idempotent: A ∪ A = A, A ∩ A = A.",
            "Distributive: A ∪ (B ∩ C) = (A ∪ B) ∩ (A ∪ C) and A ∩ (B ∪ C) = (A ∩ B) ∪ (A ∩ C).",
            "**Complement** A′ = U − A = {x : x ∈ U and x ∉ A}. Then A ∪ A′ = U, A ∩ A′ = φ, (A′)′ = A, φ′ = U and U′ = φ.",
            "**De Morgan's laws**: (A ∪ B)′ = A′ ∩ B′ and (A ∩ B)′ = A′ ∪ B′."
          ]
        }
      ],
      formulas: [
        "Number of subsets of a set with n elements = 2ⁿ;  proper subsets = 2ⁿ − 1",
        "n(A ∪ B) = n(A) + n(B) − n(A ∩ B)",
        "If A ∩ B = φ:  n(A ∪ B) = n(A) + n(B)",
        "n(A − B) = n(A) − n(A ∩ B)",
        "n(A ∪ B ∪ C) = n(A) + n(B) + n(C) − n(A ∩ B) − n(B ∩ C) − n(C ∩ A) + n(A ∩ B ∩ C)",
        "A − B = A ∩ B′",
        "A ∪ A′ = U,  A ∩ A′ = φ,  (A′)′ = A",
        "De Morgan: (A ∪ B)′ = A′ ∩ B′,  (A ∩ B)′ = A′ ∪ B′",
        "A ∪ (B ∩ C) = (A ∪ B) ∩ (A ∪ C);  A ∩ (B ∪ C) = (A ∩ B) ∪ (A ∩ C)"
      ],
      terms: [
        { term: "Set", meaning: "A **well-defined** collection of objects, called its elements or members." },
        { term: "Empty set", meaning: "A set with no elements, written φ or { }." },
        { term: "Subset", meaning: "A ⊂ B when every element of A is also in B. A set with n elements has 2ⁿ subsets." },
        { term: "Universal set", meaning: "The set containing all the sets under consideration in a particular context, usually written U." },
        { term: "Disjoint sets", meaning: "Two sets with no common element, i.e. A ∩ B = φ." },
        { term: "Complement of a set", meaning: "A′ = U − A, the set of all elements of the universal set that are **not** in A." }
      ],
      examples: [
        {
          q: "Let U = {1, 2, 3, 4, 5, 6, 7, 8, 9}, A = {2, 4, 6, 8} and B = {2, 3, 5, 7}. Verify that (A ∪ B)′ = A′ ∩ B′.",
          steps: [
            "A ∪ B = {2, 3, 4, 5, 6, 7, 8}, so (A ∪ B)′ = U − (A ∪ B) = {1, 9}.",
            "A′ = U − A = {1, 3, 5, 7, 9}.",
            "B′ = U − B = {1, 4, 6, 8, 9}.",
            "A′ ∩ B′ = elements common to A′ and B′ = {1, 9}.",
            "Both sides equal {1, 9}."
          ],
          answer: "(A ∪ B)′ = A′ ∩ B′ = {1, 9}, which verifies De Morgan's law."
        },
        {
          q: "In a group of 70 people, 37 like coffee, 52 like tea and each person likes at least one of the two drinks. How many like both? How many like coffee only?",
          steps: [
            "Let C = people who like coffee and T = people who like tea. n(C) = 37, n(T) = 52.",
            "Everyone likes at least one drink, so n(C ∪ T) = 70.",
            "n(C ∪ T) = n(C) + n(T) − n(C ∩ T), so 70 = 37 + 52 − n(C ∩ T).",
            "n(C ∩ T) = 89 − 70 = 19.",
            "Coffee only = n(C − T) = n(C) − n(C ∩ T) = 37 − 19 = 18."
          ],
          answer: "19 people like both drinks; 18 like coffee only."
        }
      ],
      qa: [
        { q: "List all the subsets of A = {1, 2, 3}. How many of them are proper subsets?", a: "Subsets: φ, {1}, {2}, {3}, {1, 2}, {1, 3}, {2, 3} and {1, 2, 3}. That is 2³ = **8 subsets**. All except A itself are proper subsets, so there are **7 proper subsets**." },
        { q: "Is 'the collection of all difficult chapters of the Class 11 Mathematics book' a set? Justify your answer.", a: "**No.** 'Difficult' is not well-defined: a chapter that is difficult for one student may be easy for another, so we cannot decide definitely whether a given chapter belongs to the collection." },
        { q: "Show that if A ∪ B = A ∩ B, then A = B.", a: "Let x ∈ A. Then x ∈ A ∪ B = A ∩ B, so x ∈ B. Hence **A ⊂ B**. Similarly, if y ∈ B then y ∈ A ∪ B = A ∩ B, so y ∈ A, giving **B ⊂ A**. Since A ⊂ B and B ⊂ A, **A = B**." }
      ],
      quiz: [
        {
          q: "The number of subsets of a set containing 4 elements is:",
          options: ["8", "16", "15", "4"],
          answer: 1,
          explain: "A set with n elements has 2ⁿ subsets: 2⁴ = **16**. 15 is the number of proper subsets."
        },
        {
          q: "Which of the following is the empty set?",
          options: ["{x : x is a real number and x² = −1}", "{0}", "{x : x is a natural number and x² = 1}", "{φ}"],
          answer: 0,
          explain: "No real number has square −1, so that set has **no elements**. {0} and {φ} each contain one element, and x² = 1 gives x = 1 in N."
        },
        {
          q: "If A = {1, 2, 3, 4} and B = {3, 4, 5, 6}, then A − B is:",
          options: ["{5, 6}", "{3, 4}", "{1, 2}", "{1, 2, 5, 6}"],
          answer: 2,
          explain: "A − B contains the elements of A that are not in B: **{1, 2}**. {5, 6} is B − A."
        },
        {
          q: "By De Morgan's law, (A ∪ B)′ equals:",
          options: ["A′ ∪ B′", "A′ ∩ B′", "A ∩ B", "A′ ∩ B"],
          answer: 1,
          explain: "(A ∪ B)′ = **A′ ∩ B′**, and similarly (A ∩ B)′ = A′ ∪ B′."
        },
        {
          q: "The set {x : x ∈ R, −3 < x ≤ 5} in interval notation is:",
          options: ["[−3, 5)", "(−3, 5)", "[−3, 5]", "(−3, 5]"],
          answer: 3,
          explain: "−3 is excluded (round bracket) and 5 is included (square bracket): **(−3, 5]**."
        },
        {
          q: "If n(A) = 3 and n(B) = 6, the minimum possible number of elements in A ∪ B is:",
          options: ["3", "9", "6", "18"],
          answer: 2,
          explain: "n(A ∪ B) = 9 − n(A ∩ B) is least when n(A ∩ B) is as large as possible, i.e. 3 (when A ⊂ B). So the minimum is 9 − 3 = **6**."
        }
      ]
    },

    // ───────────────────────────── 2. Relations and Functions ─────────────────────────────
    {
      id: "relations-and-functions",
      title: "Relations and Functions",
      section: "Sets and Functions",
      summary: "Ordered pairs and Cartesian products, relations with their domain and range, functions as special relations, standard real functions with their graphs, and the algebra of real functions.",
      notes: [
        {
          heading: "Cartesian product of sets",
          points: [
            "An **ordered pair** (a, b) has a first and a second element: (a, b) = (x, y) only if a = x and b = y. So (1, 2) ≠ (2, 1).",
            "**A × B** = {(a, b) : a ∈ A, b ∈ B}. If either A or B is empty, then A × B = φ.",
            "**n(A × B) = n(A) × n(B)**. If A or B is infinite (and the other non-empty), A × B is infinite.",
            "In general A × B ≠ B × A. R × R is the set of all points of the xy-plane.",
            "A × A × A = {(a, b, c) : a, b, c ∈ A}; (a, b, c) is called an **ordered triplet**."
          ]
        },
        {
          heading: "Relations",
          points: [
            "A **relation** R from A to B is any subset of A × B. If (a, b) ∈ R, we say a is related to b and write a R b.",
            "**Domain** = set of all first elements; **range** = set of all second elements; **codomain** = B. The range is a subset of the codomain.",
            "A relation can be shown in roster form, in set-builder form or by an **arrow diagram**.",
            "If n(A) = p and n(B) = q, then n(A × B) = pq and the number of relations from A to B is 2^(pq). For p = 2, q = 3 there are 2⁶ = 64 relations."
          ]
        },
        {
          heading: "Functions",
          points: [
            "A relation f from A to B is a **function** if every element of A has **one and only one** image in B. We write f : A → B.",
            "If f(x) = y, then y is the **image** of x and x is a **pre-image** of y. Domain = A, codomain = B, range = set of all images.",
            "In roster form, a relation from A to B is a function when every element of A appears as a first element and no two pairs have the same first element.",
            "A **real function** has its domain and codomain as subsets of R. Unless stated, its domain is the largest set of x for which f(x) is real.",
            "To find a domain, exclude values that make a denominator zero or put a negative number under a square root."
          ]
        },
        {
          heading: "Some standard functions",
          points: [
            "**Identity** f(x) = x: domain and range R; its graph is the line y = x. **Constant** f(x) = c: range {c}; a horizontal line.",
            "**Polynomial** functions such as f(x) = x³ − x² + 2, and **rational** functions f(x)/g(x) with g(x) ≠ 0.",
            "**Modulus** f(x) = |x| = x for x ≥ 0 and −x for x < 0: domain R, range [0, ∞), V-shaped graph.",
            "**Signum** f(x) = |x|/x for x ≠ 0 and 0 for x = 0: it takes only the values 1, 0, −1, so its range is {−1, 0, 1}.",
            "**Greatest integer** f(x) = [x] = greatest integer ≤ x: [2.7] = 2, [−2.7] = −3, [5] = 5. Its range is Z and its graph is a step graph."
          ]
        },
        {
          heading: "Algebra of real functions",
          points: [
            "For f, g : X → R: (f + g)(x) = f(x) + g(x) and (f − g)(x) = f(x) − g(x).",
            "(fg)(x) = f(x)·g(x), and (αf)(x) = α·f(x) for any real number α.",
            "(f/g)(x) = f(x)/g(x), defined only where **g(x) ≠ 0**."
          ]
        }
      ],
      formulas: [
        "(a, b) = (c, d)  ⟺  a = c and b = d",
        "n(A × B) = n(A) × n(B)",
        "Number of relations from A to B = 2^(pq), where n(A) = p and n(B) = q",
        "Number of functions from A to B = qᵖ, where n(A) = p and n(B) = q",
        "A × (B ∪ C) = (A × B) ∪ (A × C);  A × (B ∩ C) = (A × B) ∩ (A × C)",
        "|x| = x if x ≥ 0;  |x| = −x if x < 0",
        "[x] = greatest integer ≤ x, so [x] ≤ x < [x] + 1",
        "(f ± g)(x) = f(x) ± g(x);  (fg)(x) = f(x)·g(x);  (f/g)(x) = f(x)/g(x), g(x) ≠ 0"
      ],
      terms: [
        { term: "Ordered pair", meaning: "A pair (a, b) in which order matters: (a, b) = (c, d) only when a = c and b = d." },
        { term: "Cartesian product", meaning: "A × B, the set of all ordered pairs (a, b) with a ∈ A and b ∈ B; n(A × B) = n(A) × n(B)." },
        { term: "Relation", meaning: "Any subset of A × B; it links some elements of A to some elements of B." },
        { term: "Function", meaning: "A relation in which **every** element of the domain has **exactly one** image." },
        { term: "Range", meaning: "The set of all images (second elements) of a relation or function; it is a subset of the codomain." },
        { term: "Greatest integer function", meaning: "f(x) = [x], the greatest integer less than or equal to x, e.g. [−1.5] = −2." }
      ],
      examples: [
        {
          q: "Let A = {1, 2, 3} and B = {3, 4}. Find A × B, n(A × B) and the number of relations from A to B.",
          steps: [
            "Pair each element of A with each element of B (element of A first).",
            "A × B = {(1, 3), (1, 4), (2, 3), (2, 4), (3, 3), (3, 4)}.",
            "n(A × B) = n(A) × n(B) = 3 × 2 = 6.",
            "Every subset of A × B is a relation, and a set with 6 elements has 2⁶ subsets."
          ],
          answer: "n(A × B) = 6; there are 2⁶ = 64 relations from A to B."
        },
        {
          q: "Find the domain and range of the real function f(x) = √(9 − x²).",
          steps: [
            "f(x) is real only when 9 − x² ≥ 0, i.e. x² ≤ 9.",
            "So −3 ≤ x ≤ 3, and the domain is [−3, 3].",
            "For x in [−3, 3], x² takes every value from 0 to 9, so 9 − x² also takes every value from 0 to 9.",
            "Taking square roots, f(x) takes every value from 0 (at x = ±3) to 3 (at x = 0)."
          ],
          answer: "Domain = [−3, 3], range = [0, 3]."
        }
      ],
      qa: [
        { q: "Let A = {1, 2, 3, 4, 5, 6}. A relation R from A to A is defined by R = {(x, y) : y = x + 1}. Write R in roster form and find its domain, codomain and range.", a: "R = **{(1, 2), (2, 3), (3, 4), (4, 5), (5, 6)}**. Domain = {1, 2, 3, 4, 5}; codomain = A = {1, 2, 3, 4, 5, 6}; range = {2, 3, 4, 5, 6}." },
        { q: "Is the relation {(2, 1), (5, 1), (8, 1), (11, 1), (14, 1), (17, 1)} a function? If so, find its domain and range.", a: "**Yes.** Each first element (2, 5, 8, 11, 14, 17) appears exactly once, so each has a unique image. Domain = {2, 5, 8, 11, 14, 17}; range = {1}. It is a constant function." },
        { q: "Let f(x) = x² and g(x) = 2x + 1 be two real functions. Find (f + g)(x), (f − g)(x), (fg)(x) and (f/g)(x).", a: "(f + g)(x) = **x² + 2x + 1**; (f − g)(x) = **x² − 2x − 1**; (fg)(x) = x²(2x + 1) = **2x³ + x²**; (f/g)(x) = **x²/(2x + 1)**, defined for x ≠ −1/2." }
      ],
      quiz: [
        {
          q: "If n(A) = 3 and n(B) = 4, the number of relations from A to B is:",
          options: ["12", "2¹²", "7", "2⁷"],
          answer: 1,
          explain: "n(A × B) = 3 × 4 = 12, and every subset of A × B is a relation, so there are **2¹²** relations."
        },
        {
          q: "If (x + 1, y − 2) = (3, 1), then (x, y) is:",
          options: ["(4, −1)", "(2, −1)", "(2, 3)", "(3, 2)"],
          answer: 2,
          explain: "Equal ordered pairs have equal corresponding elements: x + 1 = 3 and y − 2 = 1, so (x, y) = **(2, 3)**."
        },
        {
          q: "If [x] denotes the greatest integer function, then [−3.4] + [3.4] equals:",
          options: ["0", "1", "−7", "−1"],
          answer: 3,
          explain: "[−3.4] = −4 (the greatest integer ≤ −3.4) and [3.4] = 3, so the sum is **−1**, not 0."
        },
        {
          q: "The domain of the real function f(x) = 1/(x² − 5x + 6) is:",
          options: ["R − {2, 3}", "R − {−2, −3}", "(2, 3)", "R"],
          answer: 0,
          explain: "x² − 5x + 6 = (x − 2)(x − 3) is zero at x = 2 and x = 3, so the domain is **R − {2, 3}**."
        },
        {
          q: "The range of the signum function is:",
          options: ["{−1, 1}", "R", "{−1, 0, 1}", "[−1, 1]"],
          answer: 2,
          explain: "The signum function is 1 for x > 0, 0 at x = 0 and −1 for x < 0, so its range is **{−1, 0, 1}**."
        },
        {
          q: "If A = {a, b} and B = {1, 2, 3}, the number of functions from A to B is:",
          options: ["6", "9", "8", "64"],
          answer: 1,
          explain: "Each of the 2 elements of A can go to any of the 3 elements of B: 3 × 3 = 3² = **9**. (8 = 2³ reverses the roles, and 64 = 2⁶ counts relations.)"
        }
      ]
    },

    // ───────────────────────────── 3. Trigonometric Functions ─────────────────────────────
    {
      id: "trigonometric-functions",
      title: "Trigonometric Functions",
      section: "Sets and Functions",
      summary: "Measuring angles in degrees and radians, trigonometric functions of real numbers through the unit circle, their signs, domains, ranges and periods, and the sum, difference, multiple-angle and transformation formulas.",
      notes: [
        {
          heading: "Angles: degree and radian measure",
          points: [
            "An angle is the amount of rotation of a ray about its initial point. Anticlockwise rotation gives a **positive** angle; clockwise gives a **negative** angle.",
            "**1 radian** is the angle subtended at the centre of a circle by an arc whose length equals the radius.",
            "**π radian = 180°**, so 1 radian = 180°/π ≈ 57.3° and 1° = π/180 radian ≈ 0.0175 radian.",
            "Radian measure = (π/180) × degree measure; degree measure = (180/π) × radian measure.",
            "Arc length **l = rθ**, where θ is the angle at the centre **in radians**."
          ]
        },
        {
          heading: "Trigonometric functions of a real number",
          points: [
            "Take the unit circle (radius 1) centred at O. If an arc of length x starting at A(1, 0) ends at P(a, b), then **cos x = a** and **sin x = b**.",
            "Since a² + b² = 1, **sin²x + cos²x = 1** for every real x.",
            "sin x = 0 only when x = nπ, and cos x = 0 only when x = (2n + 1)π/2, where n is any integer.",
            "tan x = sin x/cos x, cot x = cos x/sin x, sec x = 1/cos x, cosec x = 1/sin x, wherever the denominator is not zero.",
            "Dividing sin²x + cos²x = 1 by cos²x and by sin²x gives **1 + tan²x = sec²x** and **1 + cot²x = cosec²x**."
          ]
        },
        {
          heading: "Signs, domain, range and period",
          points: [
            "Signs by quadrant: I all positive; II sin and cosec positive; III tan and cot positive; IV cos and sec positive.",
            "sin x and cos x: domain R, range [−1, 1], period **2π**. tan x: domain R − {(2n + 1)π/2 : n ∈ Z}, range R, period **π**.",
            "cot x: domain R − {nπ : n ∈ Z}, range R. sec x and cosec x: range R − (−1, 1), i.e. values ≤ −1 or ≥ 1.",
            "sin(−x) = −sin x and tan(−x) = −tan x (odd functions); cos(−x) = cos x (even function).",
            "As x increases from 0 to π/2, sin x increases from 0 to 1 while cos x decreases from 1 to 0."
          ]
        },
        {
          heading: "Allied angles",
          points: [
            "cos(π/2 − x) = sin x, sin(π/2 − x) = cos x; cos(π/2 + x) = −sin x, sin(π/2 + x) = cos x.",
            "cos(π − x) = −cos x, sin(π − x) = sin x; cos(π + x) = −cos x, sin(π + x) = −sin x.",
            "cos(2π − x) = cos x, sin(2π − x) = −sin x. Adding 2nπ to x does not change sin x or cos x.",
            "Rule of thumb: with π/2 or 3π/2 the function changes (sin ↔ cos, tan ↔ cot); with π or 2π it does not. The sign is that of the original function in the quadrant where the angle lies (taking x acute)."
          ]
        },
        {
          heading: "Compound angle formulas",
          points: [
            "**cos(x + y) = cos x cos y − sin x sin y**; cos(x − y) = cos x cos y + sin x sin y.",
            "**sin(x + y) = sin x cos y + cos x sin y**; sin(x − y) = sin x cos y − cos x sin y.",
            "**tan(x + y) = (tan x + tan y)/(1 − tan x tan y)**; tan(x − y) = (tan x − tan y)/(1 + tan x tan y).",
            "Useful values: sin 15° = (√3 − 1)/(2√2), cos 15° = (√3 + 1)/(2√2), tan 15° = 2 − √3, tan 75° = 2 + √3."
          ]
        },
        {
          heading: "Multiple angles and transformation formulas",
          points: [
            "cos 2x = cos²x − sin²x = 2cos²x − 1 = 1 − 2sin²x = (1 − tan²x)/(1 + tan²x).",
            "sin 2x = 2 sin x cos x = 2tan x/(1 + tan²x); tan 2x = 2tan x/(1 − tan²x).",
            "sin 3x = 3sin x − 4sin³x; cos 3x = 4cos³x − 3cos x; tan 3x = (3tan x − tan³x)/(1 − 3tan²x).",
            "Sum to product: sin x + sin y = 2 sin((x + y)/2) cos((x − y)/2); cos x + cos y = 2 cos((x + y)/2) cos((x − y)/2).",
            "Product to sum: 2 sin x cos y = sin(x + y) + sin(x − y); 2 cos x cos y = cos(x + y) + cos(x − y); −2 sin x sin y = cos(x + y) − cos(x − y)."
          ]
        }
      ],
      formulas: [
        "π radian = 180°;  radian measure = (π/180) × degree measure",
        "Arc length l = rθ  (θ in radians)",
        "sin²x + cos²x = 1;  1 + tan²x = sec²x;  1 + cot²x = cosec²x",
        "At 0, π/6, π/4, π/3, π/2:  sin = 0, 1/2, 1/√2, √3/2, 1;  cos = 1, √3/2, 1/√2, 1/2, 0;  tan = 0, 1/√3, 1, √3, not defined",
        "sin(x ± y) = sin x cos y ± cos x sin y",
        "cos(x ± y) = cos x cos y ∓ sin x sin y",
        "tan(x ± y) = (tan x ± tan y)/(1 ∓ tan x tan y)",
        "cot(x + y) = (cot x cot y − 1)/(cot y + cot x);  cot(x − y) = (cot x cot y + 1)/(cot y − cot x)",
        "sin 2x = 2 sin x cos x = 2tan x/(1 + tan²x)",
        "cos 2x = cos²x − sin²x = 2cos²x − 1 = 1 − 2sin²x = (1 − tan²x)/(1 + tan²x)",
        "tan 2x = 2tan x/(1 − tan²x)",
        "sin 3x = 3sin x − 4sin³x;  cos 3x = 4cos³x − 3cos x;  tan 3x = (3tan x − tan³x)/(1 − 3tan²x)",
        "sin x + sin y = 2 sin((x + y)/2) cos((x − y)/2);  sin x − sin y = 2 cos((x + y)/2) sin((x − y)/2)",
        "cos x + cos y = 2 cos((x + y)/2) cos((x − y)/2);  cos x − cos y = −2 sin((x + y)/2) sin((x − y)/2)",
        "2 sin x cos y = sin(x + y) + sin(x − y);  2 cos x sin y = sin(x + y) − sin(x − y)",
        "2 cos x cos y = cos(x + y) + cos(x − y);  −2 sin x sin y = cos(x + y) − cos(x − y)"
      ],
      terms: [
        { term: "Radian", meaning: "The angle subtended at the centre of a circle by an arc equal in length to the radius; **π radian = 180°**." },
        { term: "Unit circle", meaning: "A circle of radius 1 centred at the origin, used to define sin x and cos x for every real number x." },
        { term: "Periodic function", meaning: "A function that repeats its values after a fixed interval; sin and cos have period 2π, tan has period π." },
        { term: "Quadrant sign rule", meaning: "I: all positive; II: sin and cosec; III: tan and cot; IV: cos and sec." },
        { term: "Allied angles", meaning: "Angles such as π/2 ± x, π ± x and 2π − x, whose trigonometric values can be written in terms of those of x." },
        { term: "Compound angle", meaning: "An angle made by adding or subtracting two angles, such as x + y or x − y." }
      ],
      examples: [
        {
          q: "Find the exact value of sin 75°.",
          steps: [
            "Write 75° = 45° + 30°.",
            "sin(45° + 30°) = sin 45° cos 30° + cos 45° sin 30°.",
            "= (1/√2)(√3/2) + (1/√2)(1/2)",
            "= (√3 + 1)/(2√2)",
            "Multiplying numerator and denominator by √2 gives (√6 + √2)/4."
          ],
          answer: "sin 75° = (√3 + 1)/(2√2) = (√6 + √2)/4"
        },
        {
          q: "If sin x = 3/5 and x lies in the second quadrant, find cos x, tan x, sin 2x and cos 2x.",
          steps: [
            "cos²x = 1 − sin²x = 1 − 9/25 = 16/25, so cos x = ±4/5.",
            "In the second quadrant cos x is negative, so cos x = −4/5.",
            "tan x = sin x/cos x = (3/5)/(−4/5) = −3/4.",
            "sin 2x = 2 sin x cos x = 2 × (3/5) × (−4/5) = −24/25.",
            "cos 2x = 1 − 2sin²x = 1 − 2 × 9/25 = 7/25."
          ],
          answer: "cos x = −4/5, tan x = −3/4, sin 2x = −24/25, cos 2x = 7/25"
        }
      ],
      qa: [
        { q: "A pendulum 75 cm long swings so that its tip describes an arc of length 21 cm. Find the angle, in radians, through which it swings.", a: "Using l = rθ with r = 75 cm and l = 21 cm: θ = l/r = 21/75 = **7/25 radian**." },
        { q: "Prove that sin²(π/6) + cos²(π/3) − tan²(π/4) = −1/2.", a: "sin(π/6) = 1/2, cos(π/3) = 1/2 and tan(π/4) = 1. LHS = 1/4 + 1/4 − 1 = 1/2 − 1 = **−1/2** = RHS." },
        { q: "Prove that (sin 5x + sin 3x)/(cos 5x + cos 3x) = tan 4x.", a: "By the sum-to-product formulas, sin 5x + sin 3x = 2 sin 4x cos x and cos 5x + cos 3x = 2 cos 4x cos x. So LHS = (2 sin 4x cos x)/(2 cos 4x cos x) = sin 4x/cos 4x = **tan 4x** = RHS." }
      ],
      quiz: [
        {
          q: "The radian measure of 240° is:",
          options: ["2π/3", "4π/3", "3π/4", "5π/3"],
          answer: 1,
          explain: "240 × π/180 = **4π/3** radian."
        },
        {
          q: "The value of sin 765° is:",
          options: ["1/2", "√3/2", "−1/√2", "1/√2"],
          answer: 3,
          explain: "765° = 2 × 360° + 45°, and sin repeats every 360°, so sin 765° = sin 45° = **1/√2**."
        },
        {
          q: "The value of tan 15° is:",
          options: ["2 + √3", "√3 − 1", "2 − √3", "1/√3"],
          answer: 2,
          explain: "tan(45° − 30°) = (1 − 1/√3)/(1 + 1/√3) = (√3 − 1)/(√3 + 1) = **2 − √3**. 2 + √3 is tan 75°."
        },
        {
          q: "The maximum value of 3 sin x + 4 cos x is:",
          options: ["5", "7", "4", "1"],
          answer: 0,
          explain: "3 sin x + 4 cos x = 5 sin(x + α), where cos α = 3/5 and sin α = 4/5. Since sin(x + α) ≤ 1, the maximum is **5** = √(3² + 4²), not 3 + 4 = 7."
        },
        {
          q: "If tan A = 1/2 and tan B = 1/3, where A and B are acute angles, then A + B equals:",
          options: ["π/3", "π/2", "π/6", "π/4"],
          answer: 3,
          explain: "tan(A + B) = (1/2 + 1/3)/(1 − 1/6) = (5/6)/(5/6) = 1, so A + B = **π/4**."
        },
        {
          q: "If cos x = −3/5 and x lies in the third quadrant, then tan x equals:",
          options: ["−4/3", "4/3", "3/4", "−3/4"],
          answer: 1,
          explain: "sin x = −4/5 (sin is negative in quadrant III), so tan x = (−4/5)/(−3/5) = **4/3**. tan is positive in the third quadrant."
        }
      ]
    },

    // ───────────────────────────── 4. Complex Numbers and Quadratic Equations ─────────────────────────────
    {
      id: "complex-numbers-and-quadratic-equations",
      title: "Complex Numbers and Quadratic Equations",
      section: "Algebra",
      summary: "Why we need the number i = √−1, the algebra of complex numbers, modulus and conjugate, the Argand plane, and solving quadratic equations whose discriminant is negative.",
      notes: [
        {
          heading: "Complex numbers",
          points: [
            "The equation x² + 1 = 0 has no real solution, so we introduce **i = √−1**, with **i² = −1**.",
            "A **complex number** is z = a + ib, where a and b are real. **Re z = a** is the real part and **Im z = b** the imaginary part.",
            "z is purely real if b = 0, and purely imaginary if a = 0 and b ≠ 0. Every real number is a complex number.",
            "Two complex numbers are **equal** only when both their real parts and imaginary parts are equal: a + ib = c + id ⟺ a = c and b = d.",
            "Powers of i repeat in a cycle of 4: i, −1, −i, 1. For any integer k: i⁴ᵏ = 1, i⁴ᵏ⁺¹ = i, i⁴ᵏ⁺² = −1, i⁴ᵏ⁺³ = −i.",
            "Caution: √a × √b = √(ab) fails when a and b are both negative. √(−1) × √(−1) = i² = −1, not √1 = 1."
          ]
        },
        {
          heading: "Algebra of complex numbers",
          points: [
            "**Addition**: (a + ib) + (c + id) = (a + c) + i(b + d). It is closed, commutative and associative; 0 is the additive identity and −z is the additive inverse.",
            "**Multiplication**: (a + ib)(c + id) = (ac − bd) + i(ad + bc). Multiply like binomials and replace i² by −1.",
            "**Multiplicative inverse** of z = a + ib ≠ 0: 1/z = (a − ib)/(a² + b²).",
            "**Division**: multiply the numerator and denominator by the **conjugate of the denominator**, which makes the denominator real.",
            "Identities such as (z₁ + z₂)² = z₁² + 2z₁z₂ + z₂² and z₁² − z₂² = (z₁ + z₂)(z₁ − z₂) hold for complex numbers too."
          ]
        },
        {
          heading: "Modulus and conjugate",
          points: [
            "The **conjugate** of z = a + ib is z̄ = a − ib: change the sign of the imaginary part.",
            "The **modulus** is |z| = √(a² + b²); it is never negative, and |z| = |z̄| = |−z|.",
            "**z z̄ = |z|²** = a² + b², a non-negative real number. Hence 1/z = z̄/|z|².",
            "|z₁z₂| = |z₁||z₂| and |z₁/z₂| = |z₁|/|z₂| (z₂ ≠ 0).",
            "The conjugate of a sum, difference, product or quotient equals the sum, difference, product or quotient of the conjugates."
          ]
        },
        {
          heading: "Argand plane",
          points: [
            "The complex number x + iy is shown by the point P(x, y) in a plane called the **Argand plane** (complex plane).",
            "The x-axis is the **real axis** and the y-axis is the **imaginary axis**: 3 is the point (3, 0) and 2i is the point (0, 2).",
            "|x + iy| = √(x² + y²) is the **distance of P from the origin**.",
            "The conjugate x − iy is the **mirror image** of x + iy in the real axis."
          ]
        },
        {
          heading: "Quadratic equations",
          points: [
            "For ax² + bx + c = 0 (a, b, c real, a ≠ 0), the discriminant is **D = b² − 4ac**.",
            "If D < 0, the roots are non-real complex numbers: **x = (−b ± i√(4ac − b²))/(2a)**.",
            "Non-real roots of a quadratic with real coefficients always occur in **conjugate pairs** p ± iq.",
            "Sum of roots = −b/a and product of roots = c/a, whether the roots are real or complex.",
            "Example: x² + 4 = 0 gives x² = −4, so x = ±2i."
          ]
        }
      ],
      formulas: [
        "i = √−1,  i² = −1,  i³ = −i,  i⁴ = 1",
        "i⁴ᵏ = 1,  i⁴ᵏ⁺¹ = i,  i⁴ᵏ⁺² = −1,  i⁴ᵏ⁺³ = −i",
        "i + i² + i³ + i⁴ = 0  (any four consecutive powers of i add up to 0)",
        "(a + ib) ± (c + id) = (a ± c) + i(b ± d)",
        "(a + ib)(c + id) = (ac − bd) + i(ad + bc)",
        "(a + ib)(a − ib) = a² + b²",
        "1/(a + ib) = (a − ib)/(a² + b²)",
        "z = a + ib:  z̄ = a − ib,  |z| = √(a² + b²),  z z̄ = |z|²",
        "|z₁z₂| = |z₁| |z₂|,  |z₁/z₂| = |z₁|/|z₂|",
        "|z₁ + z₂| ≤ |z₁| + |z₂|",
        "ax² + bx + c = 0 with D = b² − 4ac < 0:  x = (−b ± i√(4ac − b²))/(2a)",
        "Sum of roots = −b/a,  product of roots = c/a"
      ],
      terms: [
        { term: "Imaginary unit (i)", meaning: "The number whose square is −1, i.e. i = √−1." },
        { term: "Complex number", meaning: "A number of the form a + ib with a, b real; a is the **real part** and b the **imaginary part**." },
        { term: "Conjugate", meaning: "For z = a + ib, the conjugate is z̄ = a − ib; z z̄ = a² + b²." },
        { term: "Modulus", meaning: "|a + ib| = √(a² + b²), the distance of the point (a, b) from the origin in the Argand plane." },
        { term: "Argand plane", meaning: "A plane in which x + iy is shown as the point (x, y); its axes are the real axis and the imaginary axis." },
        { term: "Discriminant", meaning: "D = b² − 4ac for ax² + bx + c = 0. If D < 0, the roots are a pair of complex conjugates." }
      ],
      examples: [
        {
          q: "Express (5 − 3i)³ in the form a + ib.",
          steps: [
            "Use (p − q)³ = p³ − 3p²q + 3pq² − q³ with p = 5 and q = 3i.",
            "p³ = 125;  3p²q = 3 × 25 × 3i = 225i.",
            "3pq² = 3 × 5 × (3i)² = 15 × (−9) = −135.",
            "q³ = (3i)³ = 27i³ = −27i.",
            "(5 − 3i)³ = 125 − 225i + (−135) − (−27i) = −10 − 198i."
          ],
          answer: "(5 − 3i)³ = −10 − 198i"
        },
        {
          q: "Solve 3x² − 4x + 20/3 = 0.",
          steps: [
            "Multiply by 3 to clear the fraction: 9x² − 12x + 20 = 0.",
            "Here a = 9, b = −12, c = 20, so D = b² − 4ac = 144 − 720 = −576.",
            "D < 0, so the roots are complex, and √D = √(−576) = 24i.",
            "x = (−b ± √D)/(2a) = (12 ± 24i)/18 = 2/3 ± (4/3)i."
          ],
          answer: "x = (2 + 4i)/3 or x = (2 − 4i)/3"
        }
      ],
      qa: [
        { q: "Evaluate i⁻³⁹.", a: "i⁻³⁹ = 1/i³⁹. Since 39 = 4 × 9 + 3, i³⁹ = i³ = −i. So i⁻³⁹ = 1/(−i) = −(1/i) = −(−i) = **i**, using 1/i = −i." },
        { q: "Find the modulus of (1 + i)/(1 − i) − (1 − i)/(1 + i).", a: "(1 + i)/(1 − i) = (1 + i)²/[(1 − i)(1 + i)] = 2i/2 = i. Similarly (1 − i)/(1 + i) = (1 − i)²/2 = −2i/2 = −i. The expression = i − (−i) = 2i, so its modulus is **2**." },
        { q: "If (x + iy)³ = u + iv, show that u/x + v/y = 4(x² − y²).", a: "(x + iy)³ = x³ + 3x²(iy) + 3x(iy)² + (iy)³ = (x³ − 3xy²) + i(3x²y − y³). Comparing, u = x³ − 3xy² and v = 3x²y − y³. So u/x = x² − 3y² and v/y = 3x² − y². Adding: u/x + v/y = 4x² − 4y² = **4(x² − y²)**." }
      ],
      quiz: [
        {
          q: "The value of i⁵⁷ + 1/i¹²⁵ is:",
          options: ["2i", "0", "−2i", "1"],
          answer: 1,
          explain: "i⁵⁷ = i⁵⁶ · i = i and i¹²⁵ = i¹²⁴ · i = i. So the sum is i + 1/i = i − i = **0**."
        },
        {
          q: "The multiplicative inverse of 4 − 3i is:",
          options: ["(4 + 3i)/25", "(4 − 3i)/25", "(4 + 3i)/7", "−4 + 3i"],
          answer: 0,
          explain: "1/(4 − 3i) = (4 + 3i)/[(4 − 3i)(4 + 3i)] = **(4 + 3i)/25**, since 4² + 3² = 25."
        },
        {
          q: "If z = (2 − i)(1 + 2i), then |z| equals:",
          options: ["√5", "25", "3", "5"],
          answer: 3,
          explain: "|z| = |2 − i| × |1 + 2i| = √5 × √5 = **5**. (Directly: z = 4 + 3i, so |z| = √(16 + 9) = 5.)"
        },
        {
          q: "The roots of x² + 2 = 0 are:",
          options: ["±2i", "±√2 i", "±√2", "±i/√2"],
          answer: 1,
          explain: "x² = −2, so x = ±√(−2) = **±√2 i**."
        },
        {
          q: "If (1 + i)/(1 − i) = a + ib, then (a, b) is:",
          options: ["(1, 0)", "(0, −1)", "(0, 1)", "(1, 1)"],
          answer: 2,
          explain: "(1 + i)/(1 − i) = (1 + i)²/(1² + 1²) = 2i/2 = i = 0 + 1·i, so **(a, b) = (0, 1)**."
        },
        {
          q: "The value of √(−16) × √(−9) is:",
          options: ["12", "−12", "12i", "−12i"],
          answer: 1,
          explain: "√(−16) = 4i and √(−9) = 3i, so the product is 12i² = **−12**. Writing √((−16)(−9)) = √144 = 12 is wrong, because √a × √b = √(ab) fails when both are negative."
        }
      ]
    },

    // ───────────────────────────── 5. Linear Inequalities ─────────────────────────────
    {
      id: "linear-inequalities",
      title: "Linear Inequalities",
      section: "Algebra",
      summary: "Inequalities in one variable, the rules for solving them, showing the solution on the number line, and word problems that lead to linear inequalities.",
      notes: [
        {
          heading: "Inequalities",
          points: [
            "Two real numbers or algebraic expressions related by <, >, ≤ or ≥ form an **inequality**, e.g. 3 < 5, x ≤ 4, 2x + 3 > 7.",
            "< and > give **strict** inequalities; ≤ and ≥ give **slack** inequalities.",
            "ax + b < 0, ax + b > 0, ax + b ≤ 0 and ax + b ≥ 0 (a ≠ 0) are **linear inequalities in one variable**; ax + by < c is a linear inequality in two variables.",
            "An inequality such as ax² + bx + c > 0 (a ≠ 0) is a **quadratic** inequality."
          ]
        },
        {
          heading: "Rules for solving",
          points: [
            "**Rule 1**: the same number may be added to (or subtracted from) both sides; the sign of inequality does not change.",
            "**Rule 2**: both sides may be multiplied (or divided) by the same **positive** number without changing the sign.",
            "If both sides are multiplied or divided by a **negative** number, the **sign is reversed**: −3x > 12 gives x < −4.",
            "Never multiply or divide both sides by an expression (such as x) whose sign is unknown."
          ]
        },
        {
          heading: "Solution set and the number line",
          points: [
            "A **solution** is a value of the variable that makes the inequality true; all solutions together form the **solution set**.",
            "The solution set depends on the allowed values: 24x < 100 gives {1, 2, 3, 4} when x ∈ N, but the interval (−∞, 25/6) when x ∈ R.",
            "On the number line, a **hollow circle** marks an end-point that is not included (< or >); a **filled circle** marks one that is included (≤ or ≥).",
            "A **double inequality** such as −8 ≤ 5x − 3 < 7 is solved by doing the same operation on all three parts at once."
          ]
        },
        {
          heading: "Word problems",
          points: [
            "Translate carefully: 'at least' means ≥, 'at most' means ≤, 'more than' means >, 'less than' means <.",
            "Consecutive integers: x, x + 1, x + 2, …; consecutive odd (or even) integers: x, x + 2, x + 4, …",
            "Average condition: if marks a, b and x must average at least 60, then (a + b + x)/3 ≥ 60.",
            "Check that the answer makes sense: lengths and counts must be positive, and marks cannot exceed the maximum."
          ]
        }
      ],
      formulas: [
        "a < b  ⇒  a + k < b + k  and  a − k < b − k",
        "a < b and k > 0  ⇒  ka < kb  and  a/k < b/k",
        "a < b and k < 0  ⇒  ka > kb  and  a/k > b/k  (sign reverses)",
        "a < x < b  ⟺  x ∈ (a, b);   a ≤ x ≤ b  ⟺  x ∈ [a, b]",
        "x > a  ⟺  x ∈ (a, ∞);   x ≤ a  ⟺  x ∈ (−∞, a]",
        "For a > 0:  |x| < a  ⟺  −a < x < a;   |x| > a  ⟺  x < −a or x > a"
      ],
      terms: [
        { term: "Inequality", meaning: "A statement that two quantities are related by <, >, ≤ or ≥." },
        { term: "Linear inequality in one variable", meaning: "An inequality such as ax + b ≤ 0 or ax + b > 0, where a ≠ 0 and the variable has power 1." },
        { term: "Strict inequality", meaning: "An inequality using < or >, so the boundary value itself is **not** a solution." },
        { term: "Solution set", meaning: "The set of all values of the variable that satisfy the inequality." },
        { term: "Double inequality", meaning: "A statement like a ≤ px + q < b combining two inequalities; all three parts are operated on together." }
      ],
      examples: [
        {
          q: "Solve (3x − 4)/2 ≥ (x + 1)/4 − 1 and show the solution on the number line.",
          steps: [
            "Multiply both sides by 4 (positive, so the sign stays): 2(3x − 4) ≥ (x + 1) − 4.",
            "Simplify: 6x − 8 ≥ x − 3.",
            "Add 8 to both sides and subtract x from both sides: 5x ≥ 5.",
            "Divide by 5 (positive): x ≥ 1.",
            "On the number line: a filled circle at 1, with the ray to the right shaded."
          ],
          answer: "x ≥ 1, i.e. the solution set is [1, ∞)"
        },
        {
          q: "Solve −8 ≤ 5x − 3 < 7 for real x.",
          steps: [
            "Add 3 to all three parts: −5 ≤ 5x < 10.",
            "Divide all three parts by 5 (positive): −1 ≤ x < 2.",
            "−1 is included (≤) and 2 is excluded (<)."
          ],
          answer: "−1 ≤ x < 2, i.e. x ∈ [−1, 2)"
        }
      ],
      qa: [
        { q: "Ravi obtained 70 and 75 marks in the first two unit tests. Find the minimum marks he should get in the third test to have an average of at least 60 marks.", a: "Let x be his marks in the third test. Then (70 + 75 + x)/3 ≥ 60 ⇒ 145 + x ≥ 180 ⇒ x ≥ 35. He must score **at least 35 marks**." },
        { q: "Solve 24x < 100 when (i) x is a natural number, (ii) x is an integer.", a: "24x < 100 ⇒ x < 100/24 = 25/6 ≈ 4.17. (i) Natural numbers less than 25/6: **{1, 2, 3, 4}**. (ii) Integers less than 25/6: **{…, −3, −2, −1, 0, 1, 2, 3, 4}**." },
        { q: "Find all pairs of consecutive odd positive integers, both of which are smaller than 10, such that their sum is more than 11.", a: "Let the integers be x and x + 2, with x odd. x + 2 < 10 ⇒ x < 8, and x + (x + 2) > 11 ⇒ 2x > 9 ⇒ x > 4.5. The odd values with 4.5 < x < 8 are 5 and 7, so the pairs are **(5, 7) and (7, 9)**." }
      ],
      quiz: [
        {
          q: "If −3x > 12, then:",
          options: ["x > −4", "x < −4", "x < 4", "x > 4"],
          answer: 1,
          explain: "Dividing by −3 (a negative number) reverses the sign: **x < −4**."
        },
        {
          q: "The solution set of 24x < 100, when x is a natural number, is:",
          options: ["{1, 2, 3, 4, 5}", "{0, 1, 2, 3, 4}", "{1, 2, 3, 4}", "{4}"],
          answer: 2,
          explain: "x < 25/6 ≈ 4.17, and natural numbers start from 1, so the solution set is **{1, 2, 3, 4}**."
        },
        {
          q: "The solution of 5x − 3 < 3x + 1, x ∈ R, is:",
          options: ["(2, ∞)", "(−∞, 2]", "(−∞, 4)", "(−∞, 2)"],
          answer: 3,
          explain: "5x − 3x < 1 + 3 ⇒ 2x < 4 ⇒ x < 2, i.e. **(−∞, 2)**. 2 itself is excluded because the inequality is strict."
        },
        {
          q: "The solution of −5 ≤ (5 − 3x)/2 ≤ 8 is:",
          options: ["−11/3 ≤ x ≤ 5", "−5 ≤ x ≤ 11/3", "11/3 ≤ x ≤ 5", "x ≤ −11/3 or x ≥ 5"],
          answer: 0,
          explain: "Multiply by 2: −10 ≤ 5 − 3x ≤ 16. Subtract 5: −15 ≤ −3x ≤ 11. Divide by −3 and reverse the signs: 5 ≥ x ≥ −11/3, i.e. **−11/3 ≤ x ≤ 5**."
        },
        {
          q: "On the number line, the solution x ≥ 1 is shown by:",
          options: ["a hollow circle at 1 and the ray to the right", "a filled circle at 1 and the ray to the right", "a filled circle at 1 and the ray to the left", "a hollow circle at 1 and the ray to the left"],
          answer: 1,
          explain: "≥ includes 1, so the circle at 1 is **filled**, and the numbers greater than 1 lie **to the right**."
        },
        {
          q: "The solution set of |x − 2| < 3 is:",
          options: ["(−5, 1)", "[−1, 5]", "(−1, 5)", "(1, 5)"],
          answer: 2,
          explain: "|x − 2| < 3 ⇒ −3 < x − 2 < 3 ⇒ **−1 < x < 5**, i.e. (−1, 5). The end-points are excluded because the inequality is strict."
        }
      ]
    },

    // ───────────────────────────── 6. Permutations and Combinations ─────────────────────────────
    {
      id: "permutations-and-combinations",
      title: "Permutations and Combinations",
      section: "Algebra",
      summary: "The fundamental principle of counting, factorial notation, permutations (arrangements) with and without repetition, and combinations (selections), with typical problems on words, numbers and committees.",
      notes: [
        {
          heading: "Fundamental principle of counting",
          points: [
            "If one event can occur in **m** ways and, after it, a second event can occur in **n** ways, the two events in succession can occur in **m × n** ways.",
            "The principle extends to any number of events: m × n × p × …",
            "Example: with 3 shirts and 2 pairs of trousers, an outfit can be chosen in 3 × 2 = 6 ways.",
            "If two jobs are alternatives (one **or** the other, not both), the numbers of ways are **added** instead."
          ]
        },
        {
          heading: "Factorial notation",
          points: [
            "**n! = 1 × 2 × 3 × … × n** for a natural number n, and **0! = 1** by definition.",
            "n! = n × (n − 1)! = n(n − 1) × (n − 2)!, which simplifies ratios such as 10!/8! = 10 × 9 = 90.",
            "Values to remember: 4! = 24, 5! = 120, 6! = 720, 7! = 5040."
          ]
        },
        {
          heading: "Permutations",
          points: [
            "A **permutation** is an arrangement, in a definite order, of some or all of a number of objects. **Order matters.**",
            "Permutations of n different objects taken r at a time (no repetition): **ⁿPᵣ = n!/(n − r)!**, 0 ≤ r ≤ n. So ⁿPₙ = n! and ⁿP₀ = 1.",
            "If repetition is allowed, the number of arrangements is **nʳ**.",
            "If p objects are alike of one kind, q alike of another and the rest different, all n objects can be arranged in **n!/(p! q!)** ways.",
            "Example: ALLAHABAD has 9 letters with A four times and L twice, so it has 9!/(4! 2!) = 7560 arrangements."
          ]
        },
        {
          heading: "Combinations",
          points: [
            "A **combination** is a selection; the order of the chosen objects does not matter.",
            "**ⁿCᵣ = n!/(r! (n − r)!)**, and ⁿPᵣ = ⁿCᵣ × r!, because each selection of r objects can be arranged in r! ways.",
            "**ⁿCᵣ = ⁿCₙ₋ᵣ** and ⁿC₀ = ⁿCₙ = 1. If ⁿCᵣ = ⁿCₖ, then r = k or r + k = n.",
            "**Pascal's rule**: ⁿCᵣ + ⁿCᵣ₋₁ = ⁿ⁺¹Cᵣ.",
            "Examples: handshakes among 10 people = ¹⁰C₂ = 45; diagonals of an n-sided polygon = ⁿC₂ − n."
          ]
        },
        {
          heading: "Problem-solving tips",
          points: [
            "First ask: does order matter? Arrangement → permutation; selection (team, committee, group) → combination.",
            "Objects that must be **together**: tie them into one block, arrange the units, then multiply by the arrangements inside the block.",
            "'At least' or 'at most': add the separate cases, or subtract the unwanted cases from the total.",
            "For numbers, **0 cannot be the first digit**, so fill the restricted places first.",
            "A committee of 3 boys and 2 girls from 5 boys and 4 girls: ⁵C₃ × ⁴C₂ = 10 × 6 = 60 ways."
          ]
        }
      ],
      formulas: [
        "Fundamental principle: m ways followed by n ways  ⇒  m × n ways",
        "n! = 1 × 2 × 3 × … × n,  0! = 1,  n! = n × (n − 1)!",
        "ⁿPᵣ = n!/(n − r)! = n(n − 1)(n − 2) … (n − r + 1)",
        "ⁿPₙ = n!,  ⁿP₀ = 1",
        "Arrangements of n objects, r at a time, with repetition allowed = nʳ",
        "n objects with p alike of one kind, q alike of another, …:  n!/(p! q! …)",
        "ⁿCᵣ = n!/(r! (n − r)!) = ⁿPᵣ/r!",
        "ⁿCᵣ = ⁿCₙ₋ᵣ;  ⁿC₀ = ⁿCₙ = 1",
        "ⁿCᵣ = ⁿCₖ  ⇒  r = k or r + k = n",
        "ⁿCᵣ + ⁿCᵣ₋₁ = ⁿ⁺¹Cᵣ",
        "Lines through n points (no three collinear) = ⁿC₂;  triangles = ⁿC₃",
        "Diagonals of an n-sided polygon = ⁿC₂ − n = n(n − 3)/2"
      ],
      terms: [
        { term: "Fundamental principle of counting", meaning: "If one event can happen in m ways and another, after it, in n ways, then both together can happen in **m × n** ways." },
        { term: "Factorial", meaning: "n! is the product of the first n natural numbers; 0! = 1." },
        { term: "Permutation", meaning: "An **arrangement** of objects in a definite order; ⁿPᵣ = n!/(n − r)!." },
        { term: "Combination", meaning: "A **selection** of objects in which order does not matter; ⁿCᵣ = n!/(r!(n − r)!)." },
        { term: "Pascal's rule", meaning: "ⁿCᵣ + ⁿCᵣ₋₁ = ⁿ⁺¹Cᵣ." }
      ],
      examples: [
        {
          q: "In how many ways can the letters of the word PERMUTATIONS be arranged if (i) the words start with P and end with S, (ii) the vowels are all together?",
          steps: [
            "PERMUTATIONS has 12 letters, in which T occurs twice and all the others are different. Its vowels are E, U, A, I, O (5 vowels).",
            "(i) Fix P in the first place and S in the last. The other 10 letters (T twice) fill the middle 10 places in 10!/2! = 3628800/2 = 1814400 ways.",
            "(ii) Tie the 5 vowels into one block. The 7 consonants P, R, M, T, T, N, S and the block make 8 units, with T twice: 8!/2! = 20160 arrangements.",
            "The 5 vowels can be arranged inside the block in 5! = 120 ways.",
            "Total for (ii) = 20160 × 120 = 2419200."
          ],
          answer: "(i) 1814400   (ii) 2419200"
        },
        {
          q: "A group consists of 4 girls and 7 boys. In how many ways can a team of 5 members be selected if the team has at least 3 girls?",
          steps: [
            "'At least 3 girls' means 3 girls + 2 boys, or 4 girls + 1 boy (there are only 4 girls).",
            "3 girls and 2 boys: ⁴C₃ × ⁷C₂ = 4 × 21 = 84 ways.",
            "4 girls and 1 boy: ⁴C₄ × ⁷C₁ = 1 × 7 = 7 ways.",
            "The two cases cannot happen together, so add: 84 + 7 = 91."
          ],
          answer: "91 ways"
        }
      ],
      qa: [
        { q: "Find r if ⁵Pᵣ = 2 × ⁶Pᵣ₋₁.", a: "5!/(5 − r)! = 2 × 6!/(7 − r)!. Since 6! = 6 × 5!, this gives (7 − r)!/(5 − r)! = 12, i.e. (7 − r)(6 − r) = 12. So r² − 13r + 30 = 0 ⇒ (r − 3)(r − 10) = 0. r = 10 is impossible because r ≤ 5, so **r = 3**." },
        { q: "How many numbers lying between 100 and 1000 can be formed with the digits 0, 1, 2, 3, 4, 5, if repetition of digits is not allowed?", a: "Such numbers have 3 digits. The hundreds place cannot be 0, so it can be filled in **5** ways. The tens place can take any of the remaining 5 digits (0 is now allowed), and the units place any of the remaining 4. Total = 5 × 5 × 4 = **100**." },
        { q: "Determine n if ²ⁿC₃ : ⁿC₃ = 12 : 1.", a: "²ⁿC₃ = 2n(2n − 1)(2n − 2)/6 and ⁿC₃ = n(n − 1)(n − 2)/6. Their ratio = [2n(2n − 1) × 2(n − 1)]/[n(n − 1)(n − 2)] = 4(2n − 1)/(n − 2). Setting this equal to 12: 4(2n − 1) = 12(n − 2) ⇒ 8n − 4 = 12n − 24 ⇒ **n = 5**." }
      ],
      quiz: [
        {
          q: "The value of ⁸P₃ is:",
          options: ["56", "336", "512", "24"],
          answer: 1,
          explain: "⁸P₃ = 8 × 7 × 6 = **336**. 56 is ⁸C₃, and 512 = 8³ counts arrangements with repetition."
        },
        {
          q: "The number of ways of selecting 2 students out of 10 is:",
          options: ["90", "20", "45", "100"],
          answer: 2,
          explain: "A selection, so order does not matter: ¹⁰C₂ = (10 × 9)/2 = **45**. 90 = ¹⁰P₂ counts ordered pairs."
        },
        {
          q: "The number of distinct arrangements of the letters of the word ALLAHABAD is:",
          options: ["9!", "15120", "3780", "7560"],
          answer: 3,
          explain: "9 letters with A four times and L twice: 9!/(4! × 2!) = 362880/48 = **7560**."
        },
        {
          q: "If ⁿC₉ = ⁿC₈, then ⁿC₁₇ equals:",
          options: ["17", "0", "1", "17!"],
          answer: 2,
          explain: "ⁿCᵣ = ⁿCₖ with r ≠ k means r + k = n, so n = 9 + 8 = 17 and ¹⁷C₁₇ = **1**."
        },
        {
          q: "How many 3-digit numbers can be formed from the digits 1, 2, 3, 4, 5 if repetition of digits is allowed?",
          options: ["125", "60", "15", "243"],
          answer: 0,
          explain: "Each of the 3 places can be filled in 5 ways: 5 × 5 × 5 = **125**. 60 = ⁵P₃ is the count without repetition."
        },
        {
          q: "The number of diagonals of a decagon (10-sided polygon) is:",
          options: ["45", "35", "90", "40"],
          answer: 1,
          explain: "Joining any 2 of the 10 vertices gives ¹⁰C₂ = 45 segments. 10 of these are sides, so the diagonals number 45 − 10 = **35**."
        }
      ]
    },

    // ───────────────────────────── 7. Binomial Theorem ─────────────────────────────
    {
      id: "binomial-theorem",
      title: "Binomial Theorem",
      section: "Algebra",
      summary: "Expanding (a + b)ⁿ for a positive integer n using binomial coefficients and Pascal's triangle, with applications such as evaluating large powers and proving divisibility, plus general and middle terms for entrance-exam practice.",
      notes: [
        {
          heading: "Pascal's triangle",
          points: [
            "The coefficients in the expansions of (a + b)⁰, (a + b)¹, (a + b)², … form **Pascal's triangle**.",
            "Each row starts and ends with 1, and every other entry is the **sum of the two entries just above it**.",
            "Rows: n = 3 → 1, 3, 3, 1;  n = 4 → 1, 4, 6, 4, 1;  n = 5 → 1, 5, 10, 10, 5, 1.",
            "The entries of row n are ⁿC₀, ⁿC₁, …, ⁿCₙ, and the addition rule is Pascal's rule ⁿCᵣ₋₁ + ⁿCᵣ = ⁿ⁺¹Cᵣ."
          ]
        },
        {
          heading: "Binomial theorem",
          points: [
            "For any positive integer n: **(a + b)ⁿ = ⁿC₀aⁿ + ⁿC₁aⁿ⁻¹b + ⁿC₂aⁿ⁻²b² + … + ⁿCₙ₋₁abⁿ⁻¹ + ⁿCₙbⁿ**.",
            "The expansion has **n + 1 terms**.",
            "The power of a falls from n to 0 while the power of b rises from 0 to n; in every term the two powers add up to n.",
            "The numbers ⁿCᵣ are the **binomial coefficients**. Coefficients equidistant from the two ends are equal, since ⁿCᵣ = ⁿCₙ₋ᵣ."
          ]
        },
        {
          heading: "Special cases",
          points: [
            "**(a − b)ⁿ**: replace b by −b, so the signs alternate: ⁿC₀aⁿ − ⁿC₁aⁿ⁻¹b + ⁿC₂aⁿ⁻²b² − … + (−1)ⁿ ⁿCₙbⁿ.",
            "**(1 + x)ⁿ = ⁿC₀ + ⁿC₁x + ⁿC₂x² + … + ⁿCₙxⁿ**.",
            "Putting x = 1: ⁿC₀ + ⁿC₁ + … + ⁿCₙ = **2ⁿ**. Putting x = −1: ⁿC₀ − ⁿC₁ + ⁿC₂ − … = 0.",
            "Hence ⁿC₀ + ⁿC₂ + ⁿC₄ + … = ⁿC₁ + ⁿC₃ + ⁿC₅ + … = 2ⁿ⁻¹."
          ]
        },
        {
          heading: "General and middle terms (entrance-exam practice)",
          points: [
            "The (r + 1)th term of (a + b)ⁿ is **Tᵣ₊₁ = ⁿCᵣ aⁿ⁻ʳ bʳ**.",
            "If n is even, there is one middle term: the **(n/2 + 1)th** term.",
            "If n is odd, there are two middle terms: the **((n + 1)/2)th** and the **((n + 3)/2)th** terms.",
            "Term independent of x: write the power of x in Tᵣ₊₁, set it equal to 0, and solve for r."
          ]
        },
        {
          heading: "Applications",
          points: [
            "Large powers: (98)⁵ = (100 − 2)⁵ and (102)⁵ = (100 + 2)⁵ are easy to expand and evaluate.",
            "Comparison: (1.01)¹⁰⁰⁰⁰⁰⁰ = (1 + 0.01)¹⁰⁰⁰⁰⁰⁰ = 1 + 1000000 × 0.01 + (positive terms), which is greater than 10000.",
            "Divisibility: writing 6ⁿ = (1 + 5)ⁿ shows that 6ⁿ − 5n always leaves remainder 1 when divided by 25.",
            "(a + b)ⁿ + (a − b)ⁿ keeps only the terms with even powers of b (each doubled); (a + b)ⁿ − (a − b)ⁿ keeps only the odd-power terms (doubled)."
          ]
        }
      ],
      formulas: [
        "(a + b)ⁿ = ∑ ⁿCᵣ aⁿ⁻ʳ bʳ  (r = 0 to n)",
        "(a − b)ⁿ = ∑ (−1)ʳ ⁿCᵣ aⁿ⁻ʳ bʳ  (r = 0 to n)",
        "(1 + x)ⁿ = ⁿC₀ + ⁿC₁x + ⁿC₂x² + … + ⁿCₙxⁿ",
        "Number of terms in (a + b)ⁿ = n + 1",
        "ⁿC₀ + ⁿC₁ + ⁿC₂ + … + ⁿCₙ = 2ⁿ",
        "ⁿC₀ − ⁿC₁ + ⁿC₂ − … + (−1)ⁿ ⁿCₙ = 0",
        "ⁿC₀ + ⁿC₂ + ⁿC₄ + … = ⁿC₁ + ⁿC₃ + ⁿC₅ + … = 2ⁿ⁻¹",
        "General term: Tᵣ₊₁ = ⁿCᵣ aⁿ⁻ʳ bʳ",
        "Middle term: n even → (n/2 + 1)th;  n odd → ((n + 1)/2)th and ((n + 3)/2)th",
        "(a + b)ⁿ + (a − b)ⁿ = 2[ⁿC₀aⁿ + ⁿC₂aⁿ⁻²b² + ⁿC₄aⁿ⁻⁴b⁴ + …]",
        "(a + b)ⁿ − (a − b)ⁿ = 2[ⁿC₁aⁿ⁻¹b + ⁿC₃aⁿ⁻³b³ + ⁿC₅aⁿ⁻⁵b⁵ + …]"
      ],
      terms: [
        { term: "Binomial", meaning: "An algebraic expression with two terms, such as a + b, 2x − 3y or x + 1/x." },
        { term: "Binomial coefficients", meaning: "The numbers ⁿC₀, ⁿC₁, …, ⁿCₙ that appear as coefficients in the expansion of (a + b)ⁿ." },
        { term: "Pascal's triangle", meaning: "A triangular array of binomial coefficients in which each inner entry is the sum of the two entries above it." },
        { term: "General term", meaning: "Tᵣ₊₁ = ⁿCᵣ aⁿ⁻ʳ bʳ, the (r + 1)th term of the expansion of (a + b)ⁿ." },
        { term: "Middle term", meaning: "The term in the centre of the expansion: **one** middle term if n is even, **two** if n is odd." }
      ],
      examples: [
        {
          q: "Expand (x² + 3/x)⁴, x ≠ 0.",
          steps: [
            "Use (a + b)⁴ = a⁴ + 4a³b + 6a²b² + 4ab³ + b⁴ with a = x² and b = 3/x.",
            "a⁴ = x⁸;  4a³b = 4 · x⁶ · 3/x = 12x⁵.",
            "6a²b² = 6 · x⁴ · 9/x² = 54x².",
            "4ab³ = 4 · x² · 27/x³ = 108/x;  b⁴ = 81/x⁴."
          ],
          answer: "(x² + 3/x)⁴ = x⁸ + 12x⁵ + 54x² + 108/x + 81/x⁴"
        },
        {
          q: "Using the binomial theorem, evaluate (98)⁵.",
          steps: [
            "(98)⁵ = (100 − 2)⁵ = ⁵C₀100⁵ − ⁵C₁100⁴(2) + ⁵C₂100³(2²) − ⁵C₃100²(2³) + ⁵C₄100(2⁴) − ⁵C₅(2⁵).",
            "= 10000000000 − 5 × 100000000 × 2 + 10 × 1000000 × 4 − 10 × 10000 × 8 + 5 × 100 × 16 − 32",
            "= 10000000000 − 1000000000 + 40000000 − 800000 + 8000 − 32",
            "= 9039207968"
          ],
          answer: "(98)⁵ = 9039207968"
        }
      ],
      qa: [
        { q: "Using the binomial theorem, show that 6ⁿ − 5n always leaves remainder 1 when divided by 25, for every positive integer n.", a: "6ⁿ = (1 + 5)ⁿ = 1 + ⁿC₁·5 + ⁿC₂·5² + ⁿC₃·5³ + … + 5ⁿ = 1 + 5n + 25(ⁿC₂ + ⁿC₃·5 + … + 5ⁿ⁻²). So 6ⁿ − 5n = 1 + 25k, where k is a whole number. Hence 6ⁿ − 5n leaves **remainder 1** when divided by 25." },
        { q: "Using the binomial theorem, find which is larger: (1.1)¹⁰⁰⁰⁰ or 1000.", a: "(1.1)¹⁰⁰⁰⁰ = (1 + 0.1)¹⁰⁰⁰⁰ = 1 + 10000 × 0.1 + (other positive terms) = 1 + 1000 + (positive terms), which is greater than 1000. So **(1.1)¹⁰⁰⁰⁰ is larger**." },
        { q: "Find (a + b)⁴ − (a − b)⁴. Hence evaluate (√3 + √2)⁴ − (√3 − √2)⁴.", a: "(a + b)⁴ − (a − b)⁴ = 2[⁴C₁a³b + ⁴C₃ab³] = 8a³b + 8ab³ = **8ab(a² + b²)**. Putting a = √3 and b = √2: 8 × √6 × (3 + 2) = **40√6**." }
      ],
      quiz: [
        {
          q: "The number of terms in the expansion of (2x − 3y)⁹ is:",
          options: ["9", "11", "8", "10"],
          answer: 3,
          explain: "(a + b)ⁿ has n + 1 terms, so here there are 9 + 1 = **10** terms."
        },
        {
          q: "The sum of the binomial coefficients in the expansion of (1 + x)⁸ is:",
          options: ["128", "256", "64", "512"],
          answer: 1,
          explain: "Put x = 1: ⁸C₀ + ⁸C₁ + … + ⁸C₈ = 2⁸ = **256**."
        },
        {
          q: "The coefficient of x³ in the expansion of (1 + x)⁶ is:",
          options: ["15", "6", "20", "120"],
          answer: 2,
          explain: "The x³ term is ⁶C₃x³, and ⁶C₃ = (6 × 5 × 4)/(3 × 2 × 1) = **20**."
        },
        {
          q: "The 4th term in the expansion of (x + 2)⁶ is:",
          options: ["160x³", "120x³", "240x²", "60x⁴"],
          answer: 0,
          explain: "T₄ = T₃₊₁ = ⁶C₃ x³ (2)³ = 20 × 8x³ = **160x³**. 60x⁴ is the 3rd term and 240x² the 5th."
        },
        {
          q: "The middle term in the expansion of (x + 1/x)¹⁰ is:",
          options: ["210", "252", "126", "462"],
          answer: 1,
          explain: "n = 10 is even, so the middle term is the (10/2 + 1) = 6th term: T₆ = ¹⁰C₅ x⁵ (1/x)⁵ = **252**."
        },
        {
          q: "The term independent of x in the expansion of (x² − 1/x)⁶ is:",
          options: ["−15", "20", "15", "−20"],
          answer: 2,
          explain: "Tᵣ₊₁ = ⁶Cᵣ (x²)⁶⁻ʳ (−1/x)ʳ = (−1)ʳ ⁶Cᵣ x¹²⁻³ʳ. Setting 12 − 3r = 0 gives r = 4, so the term is (−1)⁴ × ⁶C₄ = **15**."
        }
      ]
    },

    // ───────────────────────────── 8. Sequences and Series ─────────────────────────────
    {
      id: "sequences-and-series",
      title: "Sequences and Series",
      section: "Algebra",
      summary: "Sequences and series, arithmetic and geometric progressions, the nth term and sum of a G.P. (including an infinite G.P.), arithmetic and geometric means with the A.M.–G.M. inequality, and standard sums of special series.",
      notes: [
        {
          heading: "Sequences and series",
          points: [
            "A **sequence** is an ordered list of numbers a₁, a₂, a₃, …; formally, a function whose domain is the natural numbers (or {1, 2, …, k} for a finite sequence).",
            "aₙ is the **nth term** or general term, e.g. aₙ = n² gives 1, 4, 9, 16, …",
            "Some sequences are given by a **recurrence relation**, e.g. Fibonacci: a₁ = a₂ = 1 and aₙ = aₙ₋₁ + aₙ₋₂ for n ≥ 3.",
            "A **series** is the sum of the terms of a sequence, a₁ + a₂ + a₃ + …, written briefly with ∑.",
            "If Sₙ is the sum of the first n terms, then a₁ = S₁ and aₙ = Sₙ − Sₙ₋₁ for n ≥ 2."
          ]
        },
        {
          heading: "Arithmetic progression and arithmetic mean",
          points: [
            "In an **A.P.** each term differs from the previous one by a fixed number d: a, a + d, a + 2d, …",
            "aₙ = a + (n − 1)d;  Sₙ = (n/2)[2a + (n − 1)d] = (n/2)(a + l), where l is the last term.",
            "**Arithmetic mean** of a and b: A = (a + b)/2, so that a, A, b are in A.P.",
            "To insert n A.M.s between a and b, use common difference d = (b − a)/(n + 1)."
          ]
        },
        {
          heading: "Geometric progression",
          points: [
            "In a **G.P.** each term after the first is the previous term multiplied by a fixed non-zero number r, the **common ratio**: a, ar, ar², …",
            "nth term: **aₙ = arⁿ⁻¹**.",
            "Sum of n terms: **Sₙ = a(rⁿ − 1)/(r − 1) = a(1 − rⁿ)/(1 − r)** for r ≠ 1; if r = 1, Sₙ = na.",
            "If |r| < 1, the sum to infinity is **S∞ = a/(1 − r)**, because rⁿ → 0 as n → ∞.",
            "Three numbers in G.P. can be taken as a/r, a, ar. If a, b, c are in G.P., then **b² = ac**."
          ]
        },
        {
          heading: "Geometric mean and the A.M.–G.M. relation",
          points: [
            "**Geometric mean** of two positive numbers a and b: G = √(ab), so that a, G, b are in G.P.",
            "To insert n G.M.s between a and b, use common ratio r = (b/a)^(1/(n + 1)).",
            "For positive a and b, **A ≥ G**, because A − G = (a + b)/2 − √(ab) = (√a − √b)²/2 ≥ 0. Equality holds only when a = b.",
            "If A and G are known, a and b are the roots of x² − 2Ax + G² = 0."
          ]
        },
        {
          heading: "Sums of special series",
          points: [
            "1 + 2 + 3 + … + n = **n(n + 1)/2**.",
            "1² + 2² + 3² + … + n² = **n(n + 1)(2n + 1)/6**.",
            "1³ + 2³ + 3³ + … + n³ = **[n(n + 1)/2]²**, the square of the sum of the first n natural numbers.",
            "If the kth term is a polynomial in k, split it and use these results, e.g. ∑k(k + 1) = ∑k² + ∑k."
          ]
        }
      ],
      formulas: [
        "A.P.: aₙ = a + (n − 1)d;  Sₙ = (n/2)[2a + (n − 1)d] = (n/2)(a + l)",
        "A.M. of a and b: A = (a + b)/2",
        "G.P.: aₙ = arⁿ⁻¹",
        "Sₙ = a(rⁿ − 1)/(r − 1) = a(1 − rⁿ)/(1 − r),  r ≠ 1",
        "S∞ = a/(1 − r),  |r| < 1",
        "G.M. of positive a and b: G = √(ab)",
        "A ≥ G, i.e. (a + b)/2 ≥ √(ab), with equality only when a = b",
        "aₙ = Sₙ − Sₙ₋₁ (n ≥ 2)",
        "1 + 2 + … + n = n(n + 1)/2",
        "1² + 2² + … + n² = n(n + 1)(2n + 1)/6",
        "1³ + 2³ + … + n³ = [n(n + 1)/2]²"
      ],
      terms: [
        { term: "Sequence", meaning: "An ordered list of numbers following a rule; a function whose domain is the natural numbers." },
        { term: "Series", meaning: "The sum of the terms of a sequence, a₁ + a₂ + a₃ + …" },
        { term: "Geometric progression", meaning: "A sequence in which each term is the previous term multiplied by a fixed non-zero number r." },
        { term: "Common ratio", meaning: "The constant r = aₙ₊₁/aₙ of a G.P." },
        { term: "Arithmetic mean", meaning: "A = (a + b)/2, the number that makes a, A, b an A.P." },
        { term: "Geometric mean", meaning: "G = √(ab) for positive a and b; the number that makes a, G, b a G.P." }
      ],
      examples: [
        {
          q: "How many terms of the G.P. 3, 3/2, 3/4, … are needed to give the sum 3069/512?",
          steps: [
            "Here a = 3 and r = 1/2.",
            "Sₙ = a(1 − rⁿ)/(1 − r) = 3(1 − 1/2ⁿ)/(1/2) = 6(1 − 1/2ⁿ).",
            "Set 6(1 − 1/2ⁿ) = 3069/512, so 1 − 1/2ⁿ = 3069/3072.",
            "1/2ⁿ = 1 − 3069/3072 = 3/3072 = 1/1024 = 1/2¹⁰.",
            "So n = 10."
          ],
          answer: "10 terms"
        },
        {
          q: "Insert three numbers between 1 and 256 so that the resulting sequence is a G.P.",
          steps: [
            "Let the G.P. be 1, G₁, G₂, G₃, 256. Then a = 1 and the 5th term is ar⁴ = 256.",
            "r⁴ = 256, so r = 4 or r = −4 (real values).",
            "For r = 4: G₁ = 4, G₂ = 16, G₃ = 64.",
            "For r = −4: G₁ = −4, G₂ = 16, G₃ = −64."
          ],
          answer: "4, 16, 64 (or −4, 16, −64)"
        }
      ],
      qa: [
        { q: "The A.M. and G.M. of two positive numbers are 10 and 8 respectively. Find the numbers.", a: "Let the numbers be a and b. (a + b)/2 = 10 ⇒ a + b = 20, and √(ab) = 8 ⇒ ab = 64. So a and b are the roots of x² − 20x + 64 = 0, i.e. (x − 4)(x − 16) = 0. The numbers are **4 and 16**." },
        { q: "Find the sum to n terms of the series 1 × 2 + 2 × 3 + 3 × 4 + …", a: "The kth term is aₖ = k(k + 1) = k² + k. So Sₙ = ∑k² + ∑k = n(n + 1)(2n + 1)/6 + n(n + 1)/2 = [n(n + 1)/6](2n + 1 + 3) = **n(n + 1)(n + 2)/3**." },
        { q: "Which term of the G.P. 2, 2√2, 4, … is 128?", a: "a = 2 and r = √2. aₙ = 2(√2)ⁿ⁻¹ = 128 ⇒ (√2)ⁿ⁻¹ = 64 = 2⁶ = (√2)¹². So n − 1 = 12, and 128 is the **13th term**." }
      ],
      quiz: [
        {
          q: "The 8th term of the G.P. 5, 10, 20, … is:",
          options: ["320", "640", "1280", "40"],
          answer: 1,
          explain: "a₈ = ar⁷ = 5 × 2⁷ = 5 × 128 = **640**. 320 = 5 × 2⁶ is the 7th term."
        },
        {
          q: "The sum to infinity of 1 + 1/3 + 1/9 + … is:",
          options: ["3", "2/3", "4/3", "3/2"],
          answer: 3,
          explain: "a = 1 and r = 1/3, so S∞ = 1/(1 − 1/3) = **3/2**."
        },
        {
          q: "The geometric mean of 4 and 9 is:",
          options: ["6.5", "36", "6", "5"],
          answer: 2,
          explain: "G = √(4 × 9) = √36 = **6**. 6.5 is the arithmetic mean."
        },
        {
          q: "The sum 1 + 2 + 3 + … + 50 equals:",
          options: ["1275", "2550", "1225", "1250"],
          answer: 0,
          explain: "n(n + 1)/2 = 50 × 51/2 = **1275**."
        },
        {
          q: "If a, b, c are in G.P., then:",
          options: ["2b = a + c", "b² = ac", "b = ac", "a² = bc"],
          answer: 1,
          explain: "b/a = c/b (equal ratios), so **b² = ac**. 2b = a + c is the condition for an A.P."
        },
        {
          q: "If the sum of the first n terms of a sequence is Sₙ = 3n² + 2n, then its 10th term is:",
          options: ["320", "61", "59", "57"],
          answer: 2,
          explain: "a₁₀ = S₁₀ − S₉ = (300 + 20) − (243 + 18) = 320 − 261 = **59**. (In general aₙ = 6n − 1, an A.P.)"
        }
      ]
    },

    // ───────────────────────────── 9. Straight Lines ─────────────────────────────
    {
      id: "straight-lines",
      title: "Straight Lines",
      section: "Coordinate Geometry",
      summary: "Slope of a line, conditions for parallel and perpendicular lines, the angle between two lines, the various forms of the equation of a line, and the distance of a point from a line.",
      notes: [
        {
          heading: "Recap of coordinate geometry",
          points: [
            "Distance between P(x₁, y₁) and Q(x₂, y₂): **PQ = √((x₂ − x₁)² + (y₂ − y₁)²)**.",
            "The point dividing PQ internally in the ratio m : n is ((mx₂ + nx₁)/(m + n), (my₂ + ny₁)/(m + n)); the midpoint is ((x₁ + x₂)/2, (y₁ + y₂)/2).",
            "Area of a triangle = ½|x₁(y₂ − y₃) + x₂(y₃ − y₁) + x₃(y₁ − y₂)|; the three points are collinear if this is 0.",
            "Centroid of a triangle: ((x₁ + x₂ + x₃)/3, (y₁ + y₂ + y₃)/3)."
          ]
        },
        {
          heading: "Slope of a line",
          points: [
            "The **inclination** θ is the angle a line makes with the positive x-axis, measured anticlockwise (0° ≤ θ < 180°). Its **slope is m = tan θ** (θ ≠ 90°).",
            "Slope through (x₁, y₁) and (x₂, y₂): **m = (y₂ − y₁)/(x₂ − x₁)**, x₁ ≠ x₂. The x-axis has slope 0; a vertical line has no defined slope.",
            "Non-vertical lines are **parallel** if and only if m₁ = m₂, and **perpendicular** if and only if m₁m₂ = −1.",
            "Acute angle θ between two lines: **tan θ = |(m₂ − m₁)/(1 + m₁m₂)|**, 1 + m₁m₂ ≠ 0. The other angle is 180° − θ.",
            "Points A, B, C are **collinear** if and only if slope of AB = slope of BC."
          ]
        },
        {
          heading: "Forms of the equation of a line",
          points: [
            "Horizontal line: y = a; vertical line: x = b. The x-axis is y = 0 and the y-axis is x = 0.",
            "**Point-slope form**: y − y₀ = m(x − x₀), the line through (x₀, y₀) with slope m.",
            "**Two-point form**: y − y₁ = [(y₂ − y₁)/(x₂ − x₁)](x − x₁).",
            "**Slope-intercept form**: y = mx + c, where c is the y-intercept; y = m(x − d) if d is the x-intercept.",
            "**Intercept form**: x/a + y/b = 1, with intercept a on the x-axis and b on the y-axis."
          ]
        },
        {
          heading: "General equation of a line",
          points: [
            "Every first-degree equation **Ax + By + C = 0** (A and B not both zero) represents a straight line.",
            "Its slope is −A/B (B ≠ 0), its x-intercept is −C/A (A ≠ 0) and its y-intercept is −C/B (B ≠ 0).",
            "Lines parallel to Ax + By + C = 0 have the form Ax + By + k = 0; lines perpendicular to it have the form Bx − Ay + k = 0."
          ]
        },
        {
          heading: "Distance of a point from a line",
          points: [
            "Perpendicular distance of P(x₁, y₁) from Ax + By + C = 0: **d = |Ax₁ + By₁ + C|/√(A² + B²)**.",
            "The distance of the origin from Ax + By + C = 0 is |C|/√(A² + B²).",
            "Distance between the parallel lines Ax + By + C₁ = 0 and Ax + By + C₂ = 0: **|C₁ − C₂|/√(A² + B²)**. Make the x and y coefficients identical first."
          ]
        }
      ],
      formulas: [
        "Distance: PQ = √((x₂ − x₁)² + (y₂ − y₁)²)",
        "Section formula (m : n internally): ((mx₂ + nx₁)/(m + n), (my₂ + ny₁)/(m + n))",
        "Area of △ = ½|x₁(y₂ − y₃) + x₂(y₃ − y₁) + x₃(y₁ − y₂)|",
        "Slope: m = tan θ = (y₂ − y₁)/(x₂ − x₁)",
        "Parallel: m₁ = m₂;  perpendicular: m₁m₂ = −1",
        "Angle between two lines: tan θ = |(m₂ − m₁)/(1 + m₁m₂)|",
        "Point-slope form: y − y₀ = m(x − x₀)",
        "Two-point form: y − y₁ = [(y₂ − y₁)/(x₂ − x₁)](x − x₁)",
        "Slope-intercept form: y = mx + c",
        "Intercept form: x/a + y/b = 1",
        "Ax + By + C = 0: slope = −A/B, x-intercept = −C/A, y-intercept = −C/B",
        "Distance of (x₁, y₁) from Ax + By + C = 0: |Ax₁ + By₁ + C|/√(A² + B²)",
        "Distance between Ax + By + C₁ = 0 and Ax + By + C₂ = 0: |C₁ − C₂|/√(A² + B²)"
      ],
      terms: [
        { term: "Inclination", meaning: "The angle θ (0° ≤ θ < 180°) that a line makes with the positive direction of the x-axis, measured anticlockwise." },
        { term: "Slope", meaning: "m = tan θ; the change in y per unit change in x along the line." },
        { term: "Intercepts", meaning: "The points where a line cuts the axes; in x/a + y/b = 1, a and b are the x- and y-intercepts." },
        { term: "Collinear points", meaning: "Points lying on one straight line; the slopes between any two pairs of them are equal." },
        { term: "Point-slope form", meaning: "y − y₀ = m(x − x₀), the line through (x₀, y₀) with slope m." },
        { term: "Perpendicular distance", meaning: "The shortest distance from a point to a line: |Ax₁ + By₁ + C|/√(A² + B²)." }
      ],
      examples: [
        {
          q: "Find the equation of the line passing through (−1, 1) and (2, −4), and write it in intercept form.",
          steps: [
            "Slope m = (−4 − 1)/(2 − (−1)) = −5/3.",
            "Point-slope form through (−1, 1): y − 1 = (−5/3)(x + 1).",
            "Multiply by 3: 3y − 3 = −5x − 5, i.e. 5x + 3y + 2 = 0.",
            "Check with (2, −4): 10 − 12 + 2 = 0 ✓.",
            "Intercept form: 5x + 3y = −2 ⇒ x/(−2/5) + y/(−2/3) = 1."
          ],
          answer: "5x + 3y + 2 = 0; its x-intercept is −2/5 and its y-intercept is −2/3"
        },
        {
          q: "Find the angle between the lines √3x + y = 1 and x + √3y = 1.",
          steps: [
            "√3x + y = 1 ⇒ y = −√3x + 1, so m₁ = −√3.",
            "x + √3y = 1 ⇒ y = −x/√3 + 1/√3, so m₂ = −1/√3.",
            "tan θ = |(m₂ − m₁)/(1 + m₁m₂)| = |(−1/√3 + √3)/(1 + 1)|.",
            "−1/√3 + √3 = 2/√3, so tan θ = (2/√3)/2 = 1/√3.",
            "θ = 30°; the other angle between the lines is 180° − 30° = 150°."
          ],
          answer: "30° (or 150°)"
        }
      ],
      qa: [
        { q: "Find the distance of the point (3, −5) from the line 3x − 4y − 26 = 0.", a: "d = |3(3) − 4(−5) − 26|/√(3² + 4²) = |9 + 20 − 26|/5 = **3/5 units**." },
        { q: "Without using the distance formula, show that A(4, 4), B(3, 5) and C(−1, −1) are the vertices of a right-angled triangle.", a: "Slope of AB = (5 − 4)/(3 − 4) = −1. Slope of AC = (−1 − 4)/(−1 − 4) = 1. The product of the slopes is −1, so **AB ⊥ AC**, and the triangle is right-angled at A." },
        { q: "Find the equation of the line perpendicular to x − 7y + 5 = 0 and having x-intercept 3.", a: "The slope of x − 7y + 5 = 0 is 1/7, so the required slope is −7. The line passes through (3, 0): y − 0 = −7(x − 3), i.e. **7x + y − 21 = 0**." }
      ],
      quiz: [
        {
          q: "The slope of the line through (3, −2) and (−1, 4) is:",
          options: ["3/2", "−3/2", "−2/3", "2/3"],
          answer: 1,
          explain: "m = (4 − (−2))/(−1 − 3) = 6/(−4) = **−3/2**."
        },
        {
          q: "The distance between the parallel lines 3x − 4y + 7 = 0 and 3x − 4y + 5 = 0 is:",
          options: ["2", "12/5", "2/5", "2/7"],
          answer: 2,
          explain: "d = |C₁ − C₂|/√(A² + B²) = |7 − 5|/√(9 + 16) = **2/5**."
        },
        {
          q: "Two non-vertical lines with slopes m₁ and m₂ are perpendicular if:",
          options: ["m₁ = m₂", "m₁ + m₂ = 0", "m₁m₂ = 1", "m₁m₂ = −1"],
          answer: 3,
          explain: "Perpendicular lines satisfy **m₁m₂ = −1**; m₁ = m₂ is the condition for parallel lines."
        },
        {
          q: "The intercepts made by the line 3x + 2y − 12 = 0 on the x-axis and y-axis respectively are:",
          options: ["4 and 6", "3 and 2", "6 and 4", "−4 and −6"],
          answer: 0,
          explain: "Write it as 3x + 2y = 12, i.e. x/4 + y/6 = 1. The intercepts are **4 and 6**."
        },
        {
          q: "The inclination of the line x − y + 3 = 0 is:",
          options: ["135°", "45°", "60°", "30°"],
          answer: 1,
          explain: "y = x + 3 has slope 1 = tan 45°, so the inclination is **45°**. 135° would need slope −1."
        },
        {
          q: "If the points (2, 1), (k, 3) and (5, 7) are collinear, then k equals:",
          options: ["4", "−3", "3", "2"],
          answer: 2,
          explain: "Slope from (2, 1) to (5, 7) = 6/3 = 2. Slope from (2, 1) to (k, 3) = 2/(k − 2) must also be 2, so k − 2 = 1 and **k = 3**."
        }
      ]
    },

    // ───────────────────────────── 10. Conic Sections ─────────────────────────────
    {
      id: "conic-sections",
      title: "Conic Sections",
      section: "Coordinate Geometry",
      summary: "Circles, parabolas, ellipses and hyperbolas as sections of a double cone, with their standard equations, foci, vertices, axes, eccentricity and latus rectum.",
      notes: [
        {
          heading: "Sections of a cone",
          points: [
            "Rotating a line (the **generator**) about a fixed line (the **axis**) that it meets at the vertex V, keeping the angle α between them fixed, gives a **double-napped cone**; α is the semi-vertical angle.",
            "Let a plane make angle β with the axis and not pass through the vertex. The section is a **circle** when β = 90°, an **ellipse** when α < β < 90°, a **parabola** when β = α and a **hyperbola** when 0 ≤ β < α.",
            "If the plane passes through the vertex, we get **degenerate conics**: a point, a straight line or a pair of intersecting lines.",
            "Circles, ellipses, parabolas and hyperbolas are together called **conic sections** (conics)."
          ]
        },
        {
          heading: "Circle",
          points: [
            "A **circle** is the set of all points in a plane at a fixed distance r (the radius) from a fixed point (the centre).",
            "Centre (h, k) and radius r: **(x − h)² + (y − k)² = r²**. Centre at the origin: **x² + y² = r²**.",
            "The general form **x² + y² + 2gx + 2fy + c = 0** has centre (−g, −f) and radius √(g² + f² − c), provided g² + f² − c > 0.",
            "To find a circle through given points, substitute the points into the equation and solve for the unknowns."
          ]
        },
        {
          heading: "Parabola",
          points: [
            "A **parabola** is the set of points equidistant from a fixed line (the **directrix**) and a fixed point (the **focus**) not on that line.",
            "**y² = 4ax** (a > 0): opens to the right, focus (a, 0), directrix x = −a, axis is the x-axis.",
            "**y² = −4ax**: opens left, focus (−a, 0). **x² = 4ay**: opens up, focus (0, a), directrix y = −a. **x² = −4ay**: opens down, focus (0, −a).",
            "Shortcut: with y² the parabola is symmetric about the x-axis; with x² it is symmetric about the y-axis. The sign of the other term gives the direction of opening.",
            "**Latus rectum**: the chord through the focus perpendicular to the axis; its length is **4a**."
          ]
        },
        {
          heading: "Ellipse",
          points: [
            "An **ellipse** is the set of points the **sum** of whose distances from two fixed points (the **foci**) is a constant, 2a.",
            "**x²/a² + y²/b² = 1** (a > b): major axis along the x-axis with length 2a, minor axis 2b, vertices (±a, 0), foci (±c, 0) where **c² = a² − b²**.",
            "If the larger denominator is under y², i.e. x²/b² + y²/a² = 1, the major axis is along the y-axis: foci (0, ±c), vertices (0, ±a).",
            "**Eccentricity e = c/a**, with 0 < e < 1. The closer e is to 0, the more nearly circular the ellipse.",
            "Length of the latus rectum = **2b²/a**."
          ]
        },
        {
          heading: "Hyperbola",
          points: [
            "A **hyperbola** is the set of points the **difference** of whose distances from two fixed points (the foci) is a constant, 2a.",
            "**x²/a² − y²/b² = 1**: transverse axis along the x-axis (length 2a), conjugate axis 2b, vertices (±a, 0), foci (±c, 0) where **c² = a² + b²**.",
            "**y²/a² − x²/b² = 1**: transverse axis along the y-axis, vertices (0, ±a), foci (0, ±c).",
            "**Eccentricity e = c/a > 1**; length of the latus rectum = **2b²/a**.",
            "If a = b, the hyperbola is called **equilateral** (rectangular), and e = √2."
          ]
        }
      ],
      formulas: [
        "Circle: (x − h)² + (y − k)² = r²",
        "x² + y² + 2gx + 2fy + c = 0:  centre (−g, −f),  radius √(g² + f² − c)",
        "Parabola y² = 4ax: focus (a, 0), directrix x = −a, axis y = 0, latus rectum 4a",
        "Parabola x² = 4ay: focus (0, a), directrix y = −a, axis x = 0, latus rectum 4a",
        "Ellipse x²/a² + y²/b² = 1 (a > b): c² = a² − b², foci (±c, 0), vertices (±a, 0), e = c/a < 1",
        "Hyperbola x²/a² − y²/b² = 1: c² = a² + b², foci (±c, 0), vertices (±a, 0), e = c/a > 1",
        "Latus rectum of ellipse and hyperbola = 2b²/a",
        "Ellipse: PF₁ + PF₂ = 2a;  hyperbola: |PF₁ − PF₂| = 2a",
        "Equilateral hyperbola (a = b): e = √2"
      ],
      terms: [
        { term: "Focus", meaning: "A fixed point used in defining a conic; a parabola has one focus, an ellipse and a hyperbola have two." },
        { term: "Directrix", meaning: "The fixed line in the definition of a parabola: every point of the parabola is equidistant from the focus and the directrix." },
        { term: "Latus rectum", meaning: "A chord through a focus perpendicular to the axis: length 4a for y² = 4ax and 2b²/a for an ellipse or hyperbola." },
        { term: "Eccentricity", meaning: "e = c/a, which measures how stretched a conic is: 0 < e < 1 for an ellipse, e > 1 for a hyperbola." },
        { term: "Major axis", meaning: "The longest chord of an ellipse, passing through both foci; its length is 2a." },
        { term: "Transverse axis", meaning: "The segment of length 2a joining the two vertices of a hyperbola; the foci lie on this line." }
      ],
      examples: [
        {
          q: "Find the centre and radius of the circle x² + y² + 8x + 10y − 8 = 0.",
          steps: [
            "Group the terms: (x² + 8x) + (y² + 10y) = 8.",
            "Complete the squares: (x² + 8x + 16) + (y² + 10y + 25) = 8 + 16 + 25.",
            "(x + 4)² + (y + 5)² = 49 = 7².",
            "Compare with (x − h)² + (y − k)² = r²."
          ],
          answer: "Centre (−4, −5), radius 7"
        },
        {
          q: "For the ellipse 36x² + 4y² = 144, find the foci, vertices, lengths of the major and minor axes, eccentricity and length of the latus rectum.",
          steps: [
            "Divide by 144: x²/4 + y²/36 = 1. The larger denominator is under y², so the major axis is along the y-axis.",
            "a² = 36 and b² = 4, so a = 6 and b = 2.",
            "c = √(a² − b²) = √32 = 4√2.",
            "Foci (0, ±4√2); vertices (0, ±6); major axis 2a = 12; minor axis 2b = 4.",
            "e = c/a = 4√2/6 = 2√2/3; latus rectum = 2b²/a = 8/6 = 4/3."
          ],
          answer: "Foci (0, ±4√2), vertices (0, ±6), major axis 12, minor axis 4, e = 2√2/3, latus rectum 4/3"
        }
      ],
      qa: [
        { q: "Find the coordinates of the focus, the axis, the equation of the directrix and the length of the latus rectum of the parabola y² = −8x.", a: "Comparing with y² = −4ax: 4a = 8, so a = 2 and the parabola opens to the left. **Focus (−2, 0)**; **axis: the x-axis (y = 0)**; **directrix x = 2**; **latus rectum = 4a = 8**." },
        { q: "Find the equation of the ellipse whose vertices are (±13, 0) and foci are (±5, 0).", a: "The vertices are on the x-axis, so the form is x²/a² + y²/b² = 1 with a = 13 and c = 5. b² = a² − c² = 169 − 25 = 144. The ellipse is **x²/169 + y²/144 = 1**." },
        { q: "Find the equation of the hyperbola with vertices (±2, 0) and foci (±3, 0).", a: "The vertices and foci are on the x-axis, so the form is x²/a² − y²/b² = 1 with a = 2 and c = 3. b² = c² − a² = 9 − 4 = 5. The hyperbola is **x²/4 − y²/5 = 1**." }
      ],
      quiz: [
        {
          q: "The radius of the circle x² + y² − 4x − 8y − 45 = 0 is:",
          options: ["√35", "√20", "65", "√65"],
          answer: 3,
          explain: "g = −2, f = −4, c = −45, so r = √(g² + f² − c) = √(4 + 16 + 45) = **√65**."
        },
        {
          q: "The focus of the parabola x² = −16y is:",
          options: ["(0, −4)", "(0, 4)", "(−4, 0)", "(4, 0)"],
          answer: 0,
          explain: "x² = −4ay with 4a = 16 gives a = 4. The parabola opens downward, so the focus is **(0, −4)**."
        },
        {
          q: "The eccentricity of the ellipse x²/25 + y²/9 = 1 is:",
          options: ["3/5", "4/5", "5/4", "3/4"],
          answer: 1,
          explain: "a = 5, b = 3, c = √(25 − 9) = 4, so e = c/a = **4/5**. An ellipse always has e less than 1, so 5/4 is impossible."
        },
        {
          q: "The length of the latus rectum of the hyperbola x²/16 − y²/9 = 1 is:",
          options: ["9/4", "32/3", "9/2", "8"],
          answer: 2,
          explain: "a² = 16 and b² = 9, so the latus rectum = 2b²/a = 18/4 = **9/2**."
        },
        {
          q: "A plane not passing through the vertex cuts a double cone, making an angle β with the axis equal to the semi-vertical angle α. The section is a:",
          options: ["circle", "ellipse", "parabola", "hyperbola"],
          answer: 2,
          explain: "β = α gives a **parabola**. β = 90° gives a circle, α < β < 90° an ellipse, and β < α a hyperbola."
        },
        {
          q: "The eccentricity of a hyperbola whose conjugate axis is equal to half the distance between its foci is:",
          options: ["2/√3", "√3/2", "√2", "√3"],
          answer: 0,
          explain: "Conjugate axis 2b = half of 2c, so c = 2b. Then c² = a² + b² gives 4b² = a² + b², so a² = 3b². e = c/a = 2b/(√3 b) = **2/√3**."
        }
      ]
    },

    // ───────────────────────────── 11. Introduction to Three Dimensional Geometry ─────────────────────────────
    {
      id: "introduction-to-three-dimensional-geometry",
      title: "Introduction to Three Dimensional Geometry",
      section: "Coordinate Geometry",
      summary: "Locating points in space with three mutually perpendicular axes: coordinate planes, octants, coordinates of a point, and the distance between two points.",
      notes: [
        {
          heading: "Coordinate axes and planes",
          points: [
            "Three mutually perpendicular lines through a point O, the **x-axis, y-axis and z-axis**, form a rectangular coordinate system in space; O is the **origin**.",
            "The axes taken in pairs determine three **coordinate planes**: the XY-plane, the YZ-plane and the ZX-plane.",
            "The three coordinate planes divide space into **eight octants**: XOYZ, X′OYZ, X′OY′Z, XOY′Z, XOYZ′, X′OYZ′, X′OY′Z′ and XOY′Z′ (octants I to VIII)."
          ]
        },
        {
          heading: "Coordinates of a point",
          points: [
            "Every point P in space corresponds to an **ordered triplet (x, y, z)**: x, y and z are the signed perpendicular distances of P from the YZ-, ZX- and XY-planes respectively.",
            "Origin: (0, 0, 0). On the x-axis: (x, 0, 0); on the y-axis: (0, y, 0); on the z-axis: (0, 0, z).",
            "In the XY-plane: (x, y, 0); in the YZ-plane: (0, y, z); in the ZX-plane: (x, 0, z).",
            "Signs in octants I to VIII: (+, +, +), (−, +, +), (−, −, +), (+, −, +), (+, +, −), (−, +, −), (−, −, −), (+, −, −).",
            "The distance of P(x, y, z) from the XY-plane is |z|, and its distance from the x-axis is √(y² + z²)."
          ]
        },
        {
          heading: "Distance formula",
          points: [
            "Distance between P(x₁, y₁, z₁) and Q(x₂, y₂, z₂): **PQ = √((x₂ − x₁)² + (y₂ − y₁)² + (z₂ − z₁)²)**.",
            "Distance of P(x, y, z) from the origin: **√(x² + y² + z²)**.",
            "It is the 2-D distance formula with one more squared term for the z-coordinates."
          ]
        },
        {
          heading: "Using the distance formula",
          points: [
            "**Collinear points**: P, Q, R are collinear if the sum of two of the distances PQ, QR, PR equals the third.",
            "**Shape of a triangle**: compare the side lengths for isosceles or equilateral; check Pythagoras' theorem for a right angle.",
            "**Parallelogram**: both pairs of opposite sides are equal; a rectangle also has equal diagonals.",
            "**Locus**: a distance condition such as PA = PB on a general point P(x, y, z) gives an equation in x, y and z."
          ]
        }
      ],
      formulas: [
        "PQ = √((x₂ − x₁)² + (y₂ − y₁)² + (z₂ − z₁)²)",
        "Distance of (x, y, z) from the origin = √(x² + y² + z²)",
        "Distance of (x, y, z) from the YZ-, ZX- and XY-planes = |x|, |y|, |z|",
        "Distance of (x, y, z) from the x-axis = √(y² + z²);  y-axis = √(z² + x²);  z-axis = √(x² + y²)",
        "On the x-axis (x, 0, 0);  y-axis (0, y, 0);  z-axis (0, 0, z)",
        "In the XY-plane (x, y, 0);  YZ-plane (0, y, z);  ZX-plane (x, 0, z)",
        "Octant signs I to VIII: (+,+,+), (−,+,+), (−,−,+), (+,−,+), (+,+,−), (−,+,−), (−,−,−), (+,−,−)",
        "Midpoint of PQ = ((x₁ + x₂)/2, (y₁ + y₂)/2, (z₁ + z₂)/2)"
      ],
      terms: [
        { term: "Coordinate planes", meaning: "The XY-, YZ- and ZX-planes, each containing two of the coordinate axes." },
        { term: "Octant", meaning: "One of the **eight** regions into which the three coordinate planes divide space." },
        { term: "Ordered triplet", meaning: "The coordinates (x, y, z) of a point in space; the order matters." },
        { term: "Origin", meaning: "The point O(0, 0, 0) where the three coordinate axes meet." },
        { term: "Distance formula (3-D)", meaning: "PQ = √((x₂ − x₁)² + (y₂ − y₁)² + (z₂ − z₁)²)." }
      ],
      examples: [
        {
          q: "Find the distance between the points P(1, −3, 4) and Q(−4, 1, 2).",
          steps: [
            "x₂ − x₁ = −4 − 1 = −5;  y₂ − y₁ = 1 − (−3) = 4;  z₂ − z₁ = 2 − 4 = −2.",
            "PQ = √((−5)² + 4² + (−2)²) = √(25 + 16 + 4) = √45.",
            "√45 = √(9 × 5) = 3√5."
          ],
          answer: "PQ = 3√5 units"
        },
        {
          q: "Show that the points P(−2, 3, 5), Q(1, 2, 3) and R(7, 0, −1) are collinear.",
          steps: [
            "PQ = √(3² + (−1)² + (−2)²) = √(9 + 1 + 4) = √14.",
            "QR = √(6² + (−2)² + (−4)²) = √(36 + 4 + 16) = √56 = 2√14.",
            "PR = √(9² + (−3)² + (−6)²) = √(81 + 9 + 36) = √126 = 3√14.",
            "PQ + QR = √14 + 2√14 = 3√14 = PR."
          ],
          answer: "Since PQ + QR = PR, the points P, Q and R are collinear."
        }
      ],
      qa: [
        { q: "Name the octants in which the points (1, −2, 3), (−4, 2, −5), (−3, −1, 6) and (2, −4, −7) lie.", a: "Look at the signs. (1, −2, 3): (+, −, +) → **octant IV (XOY′Z)**. (−4, 2, −5): (−, +, −) → **octant VI (X′OYZ′)**. (−3, −1, 6): (−, −, +) → **octant III (X′OY′Z)**. (2, −4, −7): (+, −, −) → **octant VIII (XOY′Z′)**." },
        { q: "Verify that (0, 7, −10), (1, 6, −6) and (4, 9, −6) are the vertices of an isosceles triangle.", a: "Let A(0, 7, −10), B(1, 6, −6) and C(4, 9, −6). AB = √(1 + 1 + 16) = √18 = 3√2; BC = √(9 + 9 + 0) = √18 = 3√2; AC = √(16 + 4 + 16) = 6. Since **AB = BC**, the triangle is isosceles. (Also AB² + BC² = 36 = AC², so it is right-angled at B.)" },
        { q: "Find the equation of the set of points P that are equidistant from A(1, 2, 3) and B(3, 2, −1).", a: "Let P = (x, y, z). PA² = PB² gives (x − 1)² + (y − 2)² + (z − 3)² = (x − 3)² + (y − 2)² + (z + 1)². Expanding and cancelling x², y² and z²: −2x − 6z + 10 = −6x + 2z + 10, so 4x − 8z = 0, i.e. **x − 2z = 0**." }
      ],
      quiz: [
        {
          q: "The point (−3, 1, −2) lies in octant:",
          options: ["II", "VII", "III", "VI"],
          answer: 3,
          explain: "The signs (−, +, −) correspond to X′OYZ′, which is **octant VI**."
        },
        {
          q: "The distance of the point (3, −4, 5) from the origin is:",
          options: ["50", "5", "5√2", "4√3"],
          answer: 2,
          explain: "√(3² + 4² + 5²) = √50 = **5√2**."
        },
        {
          q: "A point on the y-axis has coordinates of the form:",
          options: ["(0, y, z)", "(x, 0, 0)", "(x, y, 0)", "(0, y, 0)"],
          answer: 3,
          explain: "On the y-axis both x and z are 0: **(0, y, 0)**. (0, y, z) is a general point of the YZ-plane."
        },
        {
          q: "The distance of the point (4, −3, 5) from the x-axis is:",
          options: ["4", "√34", "5", "√41"],
          answer: 1,
          explain: "Distance from the x-axis = √(y² + z²) = √(9 + 25) = **√34**. 5 = √(x² + y²) is its distance from the z-axis."
        },
        {
          q: "The three coordinate planes divide space into:",
          options: ["8 octants", "4 octants", "6 octants", "3 octants"],
          answer: 0,
          explain: "Each of the 3 coordinates can be positive or negative: 2 × 2 × 2 = **8 octants**."
        },
        {
          q: "If the distance between (5, −1, 7) and (x, 5, 1) is 9 units, then x is:",
          options: ["8 or −2", "14 or −4", "8 or 2", "5 or 3"],
          answer: 2,
          explain: "(x − 5)² + 6² + (−6)² = 81 ⇒ (x − 5)² = 9 ⇒ x − 5 = ±3, so **x = 8 or 2**."
        }
      ]
    },

    // ───────────────────────────── 12. Limits and Derivatives ─────────────────────────────
    {
      id: "limits-and-derivatives",
      title: "Limits and Derivatives",
      section: "Calculus",
      summary: "The intuitive idea of a limit, left- and right-hand limits, the algebra of limits and standard limits (including trigonometric ones), and the derivative from first principles with the rules for sums, products and quotients.",
      notes: [
        {
          heading: "The idea of a limit",
          points: [
            "**lim(x→a) f(x) = l** means f(x) gets as close as we like to l when x is close enough to a (with x ≠ a).",
            "The **left-hand limit** lim(x→a⁻) f(x) uses x just less than a; the **right-hand limit** lim(x→a⁺) f(x) uses x just greater than a.",
            "The limit exists only when the LHL and RHL both exist and are **equal**; that common value is the limit.",
            "A limit may exist even where f is not defined: (x² − 1)/(x − 1) → 2 as x → 1.",
            "The limit depends only on values of f **near** a, not on f(a) itself."
          ]
        },
        {
          heading: "Evaluating limits",
          points: [
            "For a polynomial, or a rational function whose denominator is not 0 at a, simply **substitute x = a**.",
            "If substitution gives **0/0**, factorise and cancel the common factor (x − a), or **rationalise** expressions containing square roots.",
            "**Algebra of limits** (when the limits exist): the limit of a sum, difference or product is the sum, difference or product of the limits.",
            "The limit of a quotient is the quotient of the limits, provided the limit of the denominator is not 0. Also lim k·f(x) = k·lim f(x)."
          ]
        },
        {
          heading: "Standard limits",
          points: [
            "**lim(x→a) (xⁿ − aⁿ)/(x − a) = naⁿ⁻¹**.",
            "**lim(x→0) (sin x)/x = 1** (x in radians); hence lim(x→0) (tan x)/x = 1.",
            "**lim(x→0) (1 − cos x)/x = 0**.",
            "Adjust the angle to match: lim(x→0) sin(ax)/(bx) = a/b, e.g. lim(x→0) (sin 4x)/(sin 2x) = 2.",
            "**Sandwich theorem**: if f(x) ≤ g(x) ≤ h(x) near a and lim f = lim h = l, then lim g = l."
          ]
        },
        {
          heading: "Derivatives",
          points: [
            "The derivative of f at x = a is **f′(a) = lim(h→0) [f(a + h) − f(a)]/h**, if this limit exists.",
            "Geometrically, f′(a) is the **slope of the tangent** to y = f(x) at (a, f(a)); physically, it is the instantaneous **rate of change**.",
            "Finding f′(x) directly from this limit is differentiation from **first principles**. Notations: f′(x), dy/dx, d/dx f(x), y′.",
            "Standard results: d/dx(xⁿ) = nxⁿ⁻¹, d/dx(c) = 0, d/dx(sin x) = cos x, d/dx(cos x) = −sin x, d/dx(tan x) = sec²x."
          ]
        },
        {
          heading: "Algebra of derivatives",
          points: [
            "**Sum/difference rule**: (u ± v)′ = u′ ± v′. **Constant multiple**: (ku)′ = ku′.",
            "**Product rule** (Leibniz rule): **(uv)′ = u′v + uv′**.",
            "**Quotient rule**: **(u/v)′ = (u′v − uv′)/v²**, where v ≠ 0.",
            "A polynomial is differentiated term by term: d/dx(aₙxⁿ + … + a₁x + a₀) = naₙxⁿ⁻¹ + … + a₁."
          ]
        }
      ],
      formulas: [
        "lim(x→a) f(x) exists  ⟺  LHL = RHL",
        "lim(x→a) (xⁿ − aⁿ)/(x − a) = naⁿ⁻¹",
        "lim(x→0) (sin x)/x = 1;   lim(x→0) (tan x)/x = 1",
        "lim(x→0) (1 − cos x)/x = 0",
        "f′(x) = lim(h→0) [f(x + h) − f(x)]/h",
        "d/dx (xⁿ) = nxⁿ⁻¹;   d/dx (c) = 0",
        "d/dx (sin x) = cos x;   d/dx (cos x) = −sin x",
        "d/dx (tan x) = sec²x;   d/dx (cot x) = −cosec²x",
        "d/dx (sec x) = sec x tan x;   d/dx (cosec x) = −cosec x cot x",
        "(u ± v)′ = u′ ± v′;   (ku)′ = ku′",
        "Product rule: (uv)′ = u′v + uv′",
        "Quotient rule: (u/v)′ = (u′v − uv′)/v²"
      ],
      terms: [
        { term: "Limit", meaning: "The value l that f(x) approaches as x approaches a, written lim(x→a) f(x) = l." },
        { term: "Left-hand and right-hand limits", meaning: "Limits as x approaches a from values less than a (LHL) and greater than a (RHL). The limit exists only if they are **equal**." },
        { term: "Derivative", meaning: "f′(x) = lim(h→0) [f(x + h) − f(x)]/h; the instantaneous rate of change of f, or the slope of its tangent." },
        { term: "First principle", meaning: "Finding a derivative directly from the limit definition, without using the rules." },
        { term: "Product rule", meaning: "(uv)′ = u′v + uv′." },
        { term: "Quotient rule", meaning: "(u/v)′ = (u′v − uv′)/v², where v ≠ 0." }
      ],
      examples: [
        {
          q: "Evaluate lim(x→1) (x¹⁵ − 1)/(x¹⁰ − 1).",
          steps: [
            "Direct substitution gives 0/0, so divide the numerator and the denominator by (x − 1).",
            "Limit = [lim(x→1) (x¹⁵ − 1¹⁵)/(x − 1)] ÷ [lim(x→1) (x¹⁰ − 1¹⁰)/(x − 1)].",
            "Using lim(x→a) (xⁿ − aⁿ)/(x − a) = naⁿ⁻¹: the numerator limit is 15 × 1¹⁴ = 15 and the denominator limit is 10 × 1⁹ = 10.",
            "Limit = 15/10 = 3/2."
          ],
          answer: "3/2"
        },
        {
          q: "Find the derivative of sin x from first principles.",
          steps: [
            "f′(x) = lim(h→0) [sin(x + h) − sin x]/h.",
            "Using sin C − sin D = 2 cos((C + D)/2) sin((C − D)/2): sin(x + h) − sin x = 2 cos(x + h/2) sin(h/2).",
            "So f′(x) = lim(h→0) cos(x + h/2) × [sin(h/2)/(h/2)].",
            "As h → 0, cos(x + h/2) → cos x and sin(h/2)/(h/2) → 1.",
            "Therefore f′(x) = cos x × 1 = cos x."
          ],
          answer: "d/dx (sin x) = cos x"
        }
      ],
      qa: [
        { q: "Evaluate lim(x→0) [√(1 + x) − 1]/x.", a: "Substitution gives 0/0, so rationalise: multiply numerator and denominator by √(1 + x) + 1. This gives [(1 + x) − 1]/[x(√(1 + x) + 1)] = 1/(√(1 + x) + 1). As x → 0, this tends to 1/(1 + 1) = **1/2**." },
        { q: "Find the derivative of f(x) = 1/x (x ≠ 0) from first principles.", a: "f′(x) = lim(h→0) [1/(x + h) − 1/x]/h = lim(h→0) [x − (x + h)]/[h·x(x + h)] = lim(h→0) −1/[x(x + h)] = **−1/x²**." },
        { q: "Find the derivative of (x⁵ − cos x)/sin x.", a: "Let u = x⁵ − cos x and v = sin x, so u′ = 5x⁴ + sin x and v′ = cos x. By the quotient rule, (u/v)′ = [(5x⁴ + sin x) sin x − (x⁵ − cos x) cos x]/sin²x = [5x⁴ sin x + sin²x − x⁵ cos x + cos²x]/sin²x = **(5x⁴ sin x − x⁵ cos x + 1)/sin²x**." }
      ],
      quiz: [
        {
          q: "lim(x→3) (x² − 9)/(x − 3) equals:",
          options: ["0", "3", "9", "6"],
          answer: 3,
          explain: "(x² − 9)/(x − 3) = x + 3 for x ≠ 3, so the limit is 3 + 3 = **6**."
        },
        {
          q: "lim(x→0) (sin 4x)/(sin 2x) equals:",
          options: ["1/2", "2", "4", "1"],
          answer: 1,
          explain: "Write it as [sin 4x/(4x)] × [(2x)/sin 2x] × (4x/2x). The first two factors tend to 1, so the limit is 4/2 = **2**."
        },
        {
          q: "If f(x) = x³ − 2x + 7, then f′(1) is:",
          options: ["1", "6", "3", "−1"],
          answer: 0,
          explain: "f′(x) = 3x² − 2, so f′(1) = 3 − 2 = **1**."
        },
        {
          q: "The derivative of x sin x is:",
          options: ["x cos x", "cos x", "sin x + x cos x", "sin x − x cos x"],
          answer: 2,
          explain: "Product rule: (x)′ sin x + x (sin x)′ = **sin x + x cos x**."
        },
        {
          q: "lim(x→0) (1 − cos x)/x equals:",
          options: ["1", "0", "1/2", "−1"],
          answer: 1,
          explain: "(1 − cos x)/x = 2sin²(x/2)/x = sin(x/2) × [sin(x/2)/(x/2)], which tends to 0 × 1 = **0**. (It is (1 − cos x)/x² that tends to 1/2.)"
        },
        {
          q: "For f(x) = |x|/x (x ≠ 0), lim(x→0) f(x):",
          options: ["is 1", "is −1", "is 0", "does not exist"],
          answer: 3,
          explain: "For x > 0, f(x) = 1 and for x < 0, f(x) = −1. So RHL = 1 and LHL = −1; since they are unequal, the limit **does not exist**."
        }
      ]
    },

    // ───────────────────────────── 13. Statistics ─────────────────────────────
    {
      id: "statistics",
      title: "Statistics",
      section: "Statistics and Probability",
      summary: "Measures of dispersion: range, mean deviation about the mean and median, and variance and standard deviation for ungrouped, discrete and continuous frequency data.",
      notes: [
        {
          heading: "Why measure dispersion?",
          points: [
            "Mean, median and mode give a central value, but not how **spread out** the data are.",
            "Two data sets can have the same mean but very different spreads: 48, 50, 52 and 10, 50, 90 both have mean 50.",
            "**Dispersion** is the scatter of observations about a central value. Its measures include range, quartile deviation, mean deviation and standard deviation.",
            "**Range = maximum value − minimum value**. It is easy to find but depends only on the two extreme values."
          ]
        },
        {
          heading: "Mean deviation",
          points: [
            "Mean deviation about a point a: **M.D.(a) = (1/n) ∑|xᵢ − a|**, usually taken about the mean x̄ or the median M.",
            "Discrete frequency data: M.D.(x̄) = (1/N) ∑fᵢ|xᵢ − x̄|, where N = ∑fᵢ. About the median, replace x̄ by M.",
            "Continuous frequency data: take the **mid-point** of each class as xᵢ. Median = l + [(N/2 − C)/f] × h.",
            "Absolute values are used because ∑(xᵢ − x̄) is always 0, so plain deviations cancel out.",
            "The mean deviation is least when taken about the median, but the absolute values make further algebra awkward."
          ]
        },
        {
          heading: "Variance and standard deviation",
          points: [
            "**Variance** σ² = (1/n) ∑(xᵢ − x̄)², the mean of the squared deviations from the mean.",
            "**Standard deviation** σ = √variance. It has the same unit as the data and is never negative; σ = 0 only when all observations are equal.",
            "Frequency data: σ² = (1/N) ∑fᵢ(xᵢ − x̄)², or **σ = (1/N)√(N∑fᵢxᵢ² − (∑fᵢxᵢ)²)**.",
            "Short-cut (step deviation): yᵢ = (xᵢ − A)/h with assumed mean A and class width h. Then x̄ = A + h·ȳ, and σ of x = h × σ of y."
          ]
        },
        {
          heading: "Effect of changes, and comparing data",
          points: [
            "Adding the same constant k to every observation shifts the mean by k but leaves the variance and SD **unchanged**.",
            "Multiplying every observation by k multiplies the mean by k, the SD by |k| and the variance by **k²**.",
            "To compare the variability of two data sets, use the **coefficient of variation** CV = (σ/x̄) × 100; the set with the greater CV is more variable (less consistent).",
            "If an observation was recorded wrongly, correct ∑xᵢ and ∑xᵢ² first, then recompute the mean and variance."
          ]
        }
      ],
      formulas: [
        "Range = maximum value − minimum value",
        "M.D.(a) = ∑|xᵢ − a| / n  (a = mean or median)",
        "M.D.(x̄) = ∑fᵢ|xᵢ − x̄| / N,  where N = ∑fᵢ",
        "Median of grouped data: M = l + [(N/2 − C)/f] × h",
        "Mean: x̄ = ∑xᵢ/n = ∑fᵢxᵢ/N",
        "Variance: σ² = ∑(xᵢ − x̄)²/n = ∑xᵢ²/n − x̄²",
        "Frequency data: σ² = ∑fᵢ(xᵢ − x̄)²/N",
        "σ = (1/N)√(N∑fᵢxᵢ² − (∑fᵢxᵢ)²)",
        "Step deviation yᵢ = (xᵢ − A)/h:  x̄ = A + h·ȳ,  σ of x = h × σ of y",
        "Coefficient of variation: CV = (σ/x̄) × 100",
        "Adding k to every value: mean + k, σ unchanged;  multiplying by k: mean × k, σ × |k|, variance × k²"
      ],
      terms: [
        { term: "Dispersion", meaning: "The spread or scatter of observations about a central value." },
        { term: "Range", meaning: "Maximum value minus minimum value of the data." },
        { term: "Mean deviation", meaning: "The mean of the **absolute** deviations of the observations from the mean or the median." },
        { term: "Variance", meaning: "The mean of the squares of the deviations from the mean, written σ²." },
        { term: "Standard deviation", meaning: "The positive square root of the variance, σ; it is in the same unit as the data." },
        { term: "Coefficient of variation", meaning: "(σ/x̄) × 100, used to compare the variability of two data sets." }
      ],
      examples: [
        {
          q: "Find the mean deviation about the mean for the data 6, 7, 10, 12, 13, 4, 8, 12.",
          steps: [
            "x̄ = (6 + 7 + 10 + 12 + 13 + 4 + 8 + 12)/8 = 72/8 = 9.",
            "Absolute deviations |xᵢ − 9|: 3, 2, 1, 3, 4, 5, 1, 3.",
            "Their sum = 3 + 2 + 1 + 3 + 4 + 5 + 1 + 3 = 22.",
            "M.D.(x̄) = 22/8 = 2.75."
          ],
          answer: "Mean deviation about the mean = 2.75"
        },
        {
          q: "Find the mean, variance and standard deviation of 6, 8, 10, 12, 14, 16, 18, 20, 22, 24.",
          steps: [
            "n = 10 and ∑xᵢ = 150, so x̄ = 15.",
            "Deviations xᵢ − 15: −9, −7, −5, −3, −1, 1, 3, 5, 7, 9.",
            "Their squares: 81, 49, 25, 9, 1, 1, 9, 25, 49, 81, with sum 330.",
            "Variance σ² = 330/10 = 33.",
            "Standard deviation σ = √33 ≈ 5.74."
          ],
          answer: "Mean = 15, variance = 33, standard deviation ≈ 5.74"
        }
      ],
      qa: [
        { q: "Find the mean deviation about the median for the data 13, 17, 16, 14, 11, 13, 10, 16, 11, 18, 12, 17.", a: "In order: 10, 11, 11, 12, 13, 13, 14, 16, 16, 17, 17, 18. n = 12 is even, so the median M = (6th + 7th)/2 = (13 + 14)/2 = 13.5. The deviations |xᵢ − 13.5| are 3.5, 2.5, 2.5, 1.5, 0.5, 0.5, 0.5, 2.5, 2.5, 3.5, 3.5, 4.5, with sum 28. M.D.(M) = 28/12 ≈ **2.33**." },
        { q: "The mean and variance of 7 observations are 8 and 16 respectively. If five of the observations are 2, 4, 10, 12 and 14, find the remaining two.", a: "Let them be x and y. The sum of all 7 is 7 × 8 = 56, and 2 + 4 + 10 + 12 + 14 = 42, so x + y = 14. Variance = ∑xᵢ²/7 − (mean)², so 16 = ∑xᵢ²/7 − 64, giving ∑xᵢ² = 560. The five known squares add to 4 + 16 + 100 + 144 + 196 = 460, so x² + y² = 100. Then 2xy = 14² − 100 = 96, so xy = 48. x and y are the roots of t² − 14t + 48 = 0: **6 and 8**." },
        { q: "The mean and standard deviation of 20 observations are 10 and 2. It was later found that the observation 8 was incorrect and should have been 12. Find the correct mean and standard deviation.", a: "Incorrect ∑x = 20 × 10 = 200. From σ² = ∑x²/n − x̄²: 4 = ∑x²/20 − 100, so the incorrect ∑x² = 2080. Correct ∑x = 200 − 8 + 12 = 204, so the correct mean = 204/20 = **10.2**. Correct ∑x² = 2080 − 64 + 144 = 2160. Correct variance = 2160/20 − (10.2)² = 108 − 104.04 = 3.96, so the correct SD = √3.96 ≈ **1.99**." }
      ],
      quiz: [
        {
          q: "The range of the data 15, 22, 8, 31, 19 is:",
          options: ["23", "16", "31", "19"],
          answer: 0,
          explain: "Range = maximum − minimum = 31 − 8 = **23**."
        },
        {
          q: "The mean deviation about the mean of 2, 4, 6, 8, 10 is:",
          options: ["2", "2.4", "8", "2.8"],
          answer: 1,
          explain: "Mean = 6; the absolute deviations 4, 2, 0, 2, 4 add up to 12, so M.D. = 12/5 = **2.4**. (8 is the variance.)"
        },
        {
          q: "If the variance of a data set is 25, its standard deviation is:",
          options: ["625", "12.5", "5", "25"],
          answer: 2,
          explain: "SD = √variance = √25 = **5**."
        },
        {
          q: "If 5 is added to every observation of a data set, the standard deviation:",
          options: ["increases by 5", "is multiplied by 5", "becomes 0", "remains unchanged"],
          answer: 3,
          explain: "Adding a constant shifts every observation and the mean equally, so the deviations xᵢ − x̄ do not change. The SD **remains unchanged**."
        },
        {
          q: "If every observation is multiplied by −2, the variance becomes:",
          options: ["−2 times the original", "4 times the original", "2 times the original", "the same as the original"],
          answer: 1,
          explain: "The variance is multiplied by k² = (−2)² = 4, so it becomes **4 times** the original. (The SD becomes 2 times; a variance can never be negative.)"
        },
        {
          q: "The mean of 5 observations is 4 and their variance is 5.2. If three of them are 1, 2 and 6, the other two are:",
          options: ["5 and 6", "3 and 8", "4 and 7", "2 and 9"],
          answer: 2,
          explain: "x + y = 20 − 9 = 11. ∑x² = 5 × (5.2 + 16) = 106, so x² + y² = 106 − 41 = 65. Then xy = (121 − 65)/2 = 28, giving **4 and 7**."
        }
      ]
    },

    // ───────────────────────────── 14. Probability ─────────────────────────────
    {
      id: "probability",
      title: "Probability",
      section: "Statistics and Probability",
      summary: "Random experiments, sample spaces and events, the algebra of events, mutually exclusive and exhaustive events, and the axiomatic approach to probability with the addition rule.",
      notes: [
        {
          heading: "Random experiments and sample space",
          points: [
            "An experiment is **random** if it has more than one possible outcome and the outcome cannot be predicted in advance.",
            "The **sample space S** is the set of all possible outcomes; each outcome is a **sample point**.",
            "Tossing two coins: S = {HH, HT, TH, TT}. Tossing n coins gives 2ⁿ outcomes; rolling a die n times gives 6ⁿ outcomes.",
            "Rolling two dice gives 36 outcomes: the ordered pairs (x, y) with x, y ∈ {1, 2, 3, 4, 5, 6}."
          ]
        },
        {
          heading: "Events",
          points: [
            "An **event** is any subset E of the sample space. E **occurs** if the outcome of the experiment belongs to E.",
            "**Impossible event**: φ. **Sure event**: S. **Simple event**: one sample point. **Compound event**: more than one sample point.",
            "The **complementary event** 'not A' is A′ = S − A.",
            "'A or B' = A ∪ B;  'A and B' = A ∩ B;  'A but not B' = A − B = A ∩ B′."
          ]
        },
        {
          heading: "Mutually exclusive and exhaustive events",
          points: [
            "A and B are **mutually exclusive** if A ∩ B = φ, i.e. they cannot occur together. The simple events of a sample space are always mutually exclusive.",
            "Events E₁, E₂, …, Eₙ are **exhaustive** if E₁ ∪ E₂ ∪ … ∪ Eₙ = S: at least one of them must occur.",
            "If they are also pairwise disjoint, they are **mutually exclusive and exhaustive**, e.g. 'even number' and 'odd number' on one roll of a die.",
            "An event and its complement are always mutually exclusive and exhaustive."
          ]
        },
        {
          heading: "Axiomatic approach to probability",
          points: [
            "Probability assigns to each event E a number P(E) such that: (i) **P(E) ≥ 0**, (ii) **P(S) = 1**, (iii) if E and F are mutually exclusive, **P(E ∪ F) = P(E) + P(F)**.",
            "Consequences: P(φ) = 0 and 0 ≤ P(E) ≤ 1 for every event E.",
            "For S = {ω₁, ω₂, …, ωₙ}: each P(ωᵢ) ≥ 0 and P(ω₁) + P(ω₂) + … + P(ωₙ) = 1. P(E) is the sum of P(ωᵢ) over the sample points in E.",
            "If all outcomes are **equally likely**, P(E) = n(E)/n(S)."
          ]
        },
        {
          heading: "Rules of probability",
          points: [
            "**Addition rule**: P(A ∪ B) = P(A) + P(B) − P(A ∩ B). For mutually exclusive events, P(A ∪ B) = P(A) + P(B).",
            "**Complement rule**: P(not A) = 1 − P(A).",
            "P(A but not B) = P(A) − P(A ∩ B);  P(neither A nor B) = 1 − P(A ∪ B).",
            "A pack of 52 cards has 4 suits of 13 cards (spades and clubs are black; hearts and diamonds are red), with 4 aces and 12 face cards (J, Q, K).",
            "For selections, count with combinations: P(E) = (number of favourable selections)/(total number of selections)."
          ]
        }
      ],
      formulas: [
        "P(E) = n(E)/n(S)  (equally likely outcomes)",
        "0 ≤ P(E) ≤ 1;  P(S) = 1;  P(φ) = 0",
        "P(A′) = 1 − P(A)",
        "P(A ∪ B) = P(A) + P(B) − P(A ∩ B)",
        "Mutually exclusive A, B:  P(A ∪ B) = P(A) + P(B)",
        "P(A ∩ B′) = P(A) − P(A ∩ B)",
        "P(A′ ∩ B′) = 1 − P(A ∪ B)",
        "P(A ∪ B ∪ C) = P(A) + P(B) + P(C) − P(A ∩ B) − P(B ∩ C) − P(C ∩ A) + P(A ∩ B ∩ C)",
        "n coins tossed: 2ⁿ outcomes;  a die rolled n times: 6ⁿ outcomes"
      ],
      terms: [
        { term: "Sample space", meaning: "The set of all possible outcomes of a random experiment, denoted S." },
        { term: "Event", meaning: "Any subset of the sample space." },
        { term: "Mutually exclusive events", meaning: "Events that cannot occur together: A ∩ B = φ." },
        { term: "Exhaustive events", meaning: "Events whose union is the whole sample space, so at least one of them must occur." },
        { term: "Complementary event", meaning: "The event 'not A', A′ = S − A, with P(A′) = 1 − P(A)." },
        { term: "Axiomatic probability", meaning: "Probability defined by three axioms: P(E) ≥ 0, P(S) = 1, and P(E ∪ F) = P(E) + P(F) for mutually exclusive E and F." }
      ],
      examples: [
        {
          q: "A card is drawn at random from a well-shuffled pack of 52 cards. Find the probability that it is a king or a heart.",
          steps: [
            "n(S) = 52. Let K = 'the card is a king' and H = 'the card is a heart'.",
            "P(K) = 4/52 and P(H) = 13/52.",
            "K ∩ H is the king of hearts, so P(K ∩ H) = 1/52.",
            "P(K ∪ H) = P(K) + P(H) − P(K ∩ H) = (4 + 13 − 1)/52 = 16/52."
          ],
          answer: "P(king or heart) = 16/52 = 4/13"
        },
        {
          q: "A bag contains 4 red and 3 black balls. Three balls are drawn at random. Find the probability that (i) exactly two are red, (ii) at least one is black.",
          steps: [
            "Total ways of choosing 3 balls from 7: ⁷C₃ = 35.",
            "(i) 2 red and 1 black: ⁴C₂ × ³C₁ = 6 × 3 = 18 ways, so P = 18/35.",
            "(ii) 'At least one black' is the complement of 'all three red'.",
            "All three red: ⁴C₃ = 4 ways, so P(all red) = 4/35.",
            "P(at least one black) = 1 − 4/35 = 31/35."
          ],
          answer: "(i) 18/35   (ii) 31/35"
        }
      ],
      qa: [
        { q: "A coin is tossed three times. Write the sample space and find the probability of getting at least two heads.", a: "S = {HHH, HHT, HTH, THH, HTT, THT, TTH, TTT}, so n(S) = 8. At least two heads: {HHH, HHT, HTH, THH}, which is 4 outcomes. P = 4/8 = **1/2**." },
        { q: "A and B are events such that P(A) = 0.42, P(B) = 0.48 and P(A and B) = 0.16. Find P(not A), P(not B) and P(A or B).", a: "P(not A) = 1 − 0.42 = **0.58**; P(not B) = 1 − 0.48 = **0.52**; P(A or B) = P(A) + P(B) − P(A and B) = 0.42 + 0.48 − 0.16 = **0.74**." },
        { q: "In a class of 60 students, 30 opted for NCC, 32 for NSS and 24 for both. One student is selected at random. Find the probability that the student opted for (i) NCC or NSS, (ii) neither NCC nor NSS, (iii) NSS but not NCC.", a: "P(NCC) = 30/60, P(NSS) = 32/60, P(both) = 24/60. (i) P(NCC or NSS) = (30 + 32 − 24)/60 = 38/60 = **19/30**. (ii) P(neither) = 1 − 19/30 = **11/30**. (iii) P(NSS but not NCC) = (32 − 24)/60 = 8/60 = **2/15**." }
      ],
      quiz: [
        {
          q: "Two dice are thrown together. The probability that the sum of the numbers is 7 is:",
          options: ["1/6", "7/36", "1/12", "5/36"],
          answer: 0,
          explain: "Favourable outcomes: (1, 6), (2, 5), (3, 4), (4, 3), (5, 2), (6, 1), i.e. 6 out of 36. P = 6/36 = **1/6**."
        },
        {
          q: "A letter is chosen at random from the word ASSASSINATION. The probability that it is a vowel is:",
          options: ["7/13", "6/13", "5/13", "4/13"],
          answer: 1,
          explain: "The word has 13 letters, and its vowels are A, A, A, I, I, O, i.e. 6. So P = **6/13**."
        },
        {
          q: "When a die is rolled once, which pair of events is mutually exclusive?",
          options: ["An even number; a number greater than 3", "An odd number; a prime number", "An even number; an odd number", "A number less than 4; the number 2"],
          answer: 2,
          explain: "Even = {2, 4, 6} and odd = {1, 3, 5} have no common outcome, so they are **mutually exclusive** (and exhaustive). The other pairs share 4 and 6, 3 and 5, and 2 respectively."
        },
        {
          q: "Three coins are tossed. The probability of getting at most one head is:",
          options: ["3/8", "1/2", "1/8", "7/8"],
          answer: 1,
          explain: "At most one head: TTT, HTT, THT, TTH, i.e. 4 of the 8 outcomes. P = 4/8 = **1/2**."
        },
        {
          q: "If P(A) = 0.5, P(B) = 0.4 and P(A ∩ B) = 0.2, then P(A ∪ B) is:",
          options: ["0.9", "0.2", "1.1", "0.7"],
          answer: 3,
          explain: "P(A ∪ B) = 0.5 + 0.4 − 0.2 = **0.7**. Simply adding gives 0.9, which counts A ∩ B twice."
        },
        {
          q: "Which of these cannot be a valid assignment of probabilities to the outcomes ω₁, ω₂, ω₃ of a sample space?",
          options: ["0.2, 0.5, 0.3", "1/3, 1/3, 1/3", "0.6, 0.6, −0.2", "0, 0, 1"],
          answer: 2,
          explain: "Each probability must be **non-negative** and they must add up to 1. 0.6 + 0.6 − 0.2 = 1, but −0.2 is negative, so this assignment is not valid."
        }
      ]
    }
  ]
});
