// Class 12 Mathematics: current rationalised NCERT textbook (Parts I and II).
// Format: see CONTENT_GUIDE.md
// Notation: matrices are written row by row with rows separated by semicolons, e.g. [1 2; 3 4];
// determinants likewise, e.g. |1 2; 3 4|.
StudyData.add(12, "maths", {
  // What this content follows. match: "textbook" | "older-book" | "topic". Set reviewed to a date once a teacher has checked it.
  syllabus: {board: "CBSE", match: "textbook", books: ["Mathematics Part I","Mathematics Part II"], reviewed: false},
  chapters: [
    // ───────────────────────────── 1. Relations and Functions ─────────────────────────────
    {
      id: "relations-and-functions",
      title: "Relations and Functions",
      section: "Relations and Functions",
      summary: "Types of relations (reflexive, symmetric, transitive, equivalence), types of functions (one-one, onto, bijective), composition of functions and invertible functions.",
      notes: [
        {
          heading: "Types of relations",
          points: [
            "A **relation** R in a set A is a subset of A × A; (a, b) ∈ R is also written a R b.",
            "**Empty relation**: no element is related to any element, R = φ. **Universal relation**: every element is related to every element, R = A × A.",
            "**Reflexive**: (a, a) ∈ R for every a ∈ A.",
            "**Symmetric**: (a, b) ∈ R ⇒ (b, a) ∈ R.",
            "**Transitive**: (a, b) ∈ R and (b, c) ∈ R ⇒ (a, c) ∈ R.",
            "One counter-example is enough to disprove a property: 'a ≤ b' on R is not symmetric, because 1 ≤ 2 is true but 2 ≤ 1 is false."
          ]
        },
        {
          heading: "Equivalence relations and classes",
          points: [
            "A relation that is reflexive, symmetric **and** transitive is an **equivalence relation**.",
            "Examples: 'is congruent to' and 'is similar to' on the set of triangles; R = {(a, b) : a − b is divisible by 3} on Z.",
            "An equivalence relation splits the set into **disjoint equivalence classes** whose union is the whole set.",
            "For 'a − b is divisible by 2' on Z there are two classes: [0] = all even integers and [1] = all odd integers.",
            "'Is perpendicular to' on lines is symmetric but neither reflexive nor transitive, so it is **not** an equivalence relation."
          ]
        },
        {
          heading: "Types of functions",
          points: [
            "**One-one (injective)**: different elements have different images, i.e. f(x₁) = f(x₂) ⇒ x₁ = x₂.",
            "**Onto (surjective)**: every element of the codomain has a pre-image, i.e. range = codomain.",
            "**Bijective**: both one-one and onto.",
            "f(x) = x² from R to R is neither: f(−1) = f(1), and −1 has no pre-image.",
            "For a **finite** set A, a function f : A → A is one-one if and only if it is onto. This fails for infinite sets: f(n) = 2n on N is one-one but not onto."
          ]
        },
        {
          heading: "Composition and invertible functions",
          points: [
            "For f : A → B and g : B → C, the composition gof : A → C is (gof)(x) = g(f(x)). Apply f first.",
            "In general **gof ≠ fog**: for f(x) = x² and g(x) = 2x + 1, fog(x) = (2x + 1)² but gof(x) = 2x² + 1.",
            "f : X → Y is **invertible** if there is g : Y → X with gof = identity on X and fog = identity on Y; then g = f⁻¹.",
            "**f is invertible if and only if f is bijective.** To find f⁻¹, solve y = f(x) for x.",
            "If f and g are both one-one, gof is one-one; if both are onto, gof is onto."
          ]
        },
        {
          heading: "Counting relations and functions (useful for MCQs)",
          points: [
            "If A has n elements, A × A has n² elements, so there are **2^(n²)** relations in A.",
            "Number of reflexive relations in A = 2^(n² − n); number of symmetric relations = 2^(n(n + 1)/2).",
            "Number of functions from a set with m elements to a set with n elements = nᵐ.",
            "Number of one-one functions from an m-element set to an n-element set (m ≤ n) = ⁿPₘ = n!/(n − m)!.",
            "Number of bijections from an n-element set onto itself = n!."
          ]
        }
      ],
      formulas: [
        "Reflexive: (a, a) ∈ R for all a ∈ A",
        "Symmetric: (a, b) ∈ R ⇒ (b, a) ∈ R",
        "Transitive: (a, b) ∈ R and (b, c) ∈ R ⇒ (a, c) ∈ R",
        "Equivalence relation = reflexive + symmetric + transitive",
        "One-one: f(x₁) = f(x₂) ⇒ x₁ = x₂",
        "Onto: range of f = codomain of f",
        "(gof)(x) = g(f(x))",
        "f⁻¹ exists ⇔ f is one-one and onto;  f⁻¹(f(x)) = x and f(f⁻¹(y)) = y",
        "(gof)⁻¹ = f⁻¹og⁻¹",
        "Relations in a set with n elements: 2^(n²)",
        "Functions from an m-element set to an n-element set: nᵐ",
        "Bijections from an n-element set onto itself: n!"
      ],
      terms: [
        { term: "Equivalence relation", meaning: "A relation that is **reflexive, symmetric and transitive**, e.g. 'a − b is divisible by 5' on the integers." },
        { term: "Equivalence class [a]", meaning: "The set of all elements related to a under an equivalence relation. Different classes are disjoint and together make up the whole set." },
        { term: "One-one (injective) function", meaning: "A function in which distinct elements have distinct images: f(x₁) = f(x₂) ⇒ x₁ = x₂." },
        { term: "Onto (surjective) function", meaning: "A function whose range equals its codomain, so every element of the codomain has a pre-image." },
        { term: "Bijective function", meaning: "A function that is **both one-one and onto**. Only bijective functions have an inverse." },
        { term: "Composition gof", meaning: "The function x ↦ g(f(x)): apply f first, then g. It is defined when the range of f lies in the domain of g." }
      ],
      examples: [
        {
          q: "Show that the relation R in the set Z of integers given by R = {(a, b) : 2 divides a − b} is an equivalence relation, and write its equivalence classes.",
          steps: [
            "Reflexive: a − a = 0 is divisible by 2, so (a, a) ∈ R for every integer a.",
            "Symmetric: if 2 divides a − b, then 2 divides −(a − b) = b − a, so (a, b) ∈ R ⇒ (b, a) ∈ R.",
            "Transitive: if 2 divides a − b and b − c, then 2 divides their sum (a − b) + (b − c) = a − c, so (a, c) ∈ R.",
            "R is reflexive, symmetric and transitive, so it is an equivalence relation.",
            "Two integers are related exactly when both are even or both are odd."
          ],
          answer: "R is an equivalence relation with two equivalence classes: [0] = {…, −4, −2, 0, 2, 4, …} (even integers) and [1] = {…, −3, −1, 1, 3, …} (odd integers)."
        },
        {
          q: "Show that f : R → R, f(x) = 4x + 3 is invertible and find f⁻¹.",
          steps: [
            "One-one: if f(x₁) = f(x₂), then 4x₁ + 3 = 4x₂ + 3, so x₁ = x₂.",
            "Onto: for any y ∈ R, take x = (y − 3)/4 ∈ R. Then f(x) = 4 × (y − 3)/4 + 3 = y.",
            "So f is bijective and hence invertible.",
            "Solve y = 4x + 3 for x: x = (y − 3)/4, so f⁻¹(y) = (y − 3)/4.",
            "Check: f(f⁻¹(y)) = 4 × (y − 3)/4 + 3 = y ✓."
          ],
          answer: "f is invertible and f⁻¹(x) = (x − 3)/4."
        }
      ],
      qa: [
        { q: "Check whether the relation R in the set of real numbers defined by R = {(a, b) : a ≤ b³} is reflexive, symmetric or transitive.", a: "**Not reflexive**: 1/2 ≤ (1/2)³ = 1/8 is false, so (1/2, 1/2) ∉ R. **Not symmetric**: (1, 2) ∈ R since 1 ≤ 8, but (2, 1) ∉ R since 2 ≤ 1 is false. **Not transitive**: (3, 3/2) ∈ R since 3 ≤ 27/8, and (3/2, 4/3) ∈ R since 3/2 ≤ 64/27, but (3, 4/3) ∉ R since 3 ≤ 64/27 is false. So R has **none** of the three properties." },
        { q: "Show that f : R → R defined by f(x) = x² is neither one-one nor onto.", a: "f(1) = 1 = f(−1) but 1 ≠ −1, so f is **not one-one**. The element −2 of the codomain has no pre-image, because x² ≥ 0 for every real x, so f is **not onto**." },
        { q: "Let f : {1, 3, 4} → {1, 2, 5} and g : {1, 2, 5} → {1, 3} be given by f = {(1, 2), (3, 5), (4, 1)} and g = {(1, 3), (2, 3), (5, 1)}. Write down gof.", a: "gof(1) = g(f(1)) = g(2) = 3; gof(3) = g(f(3)) = g(5) = 1; gof(4) = g(f(4)) = g(1) = 3. So **gof = {(1, 3), (3, 1), (4, 3)}**." }
      ],
      quiz: [
        {
          q: "The number of relations in a set with 3 elements is:",
          options: ["9", "512", "8", "64"],
          answer: 1,
          explain: "A × A has 3² = 9 elements and every subset of A × A is a relation, so there are 2⁹ = **512** relations."
        },
        {
          q: "The relation R = {(1, 1), (2, 2), (3, 3), (1, 2)} in A = {1, 2, 3} is:",
          options: ["an equivalence relation", "reflexive and symmetric but not transitive", "reflexive and transitive but not symmetric", "symmetric and transitive but not reflexive"],
          answer: 2,
          explain: "All (a, a) are present, so it is reflexive. (1, 2) ∈ R but (2, 1) ∉ R, so it is not symmetric. The only chains, (1, 1) with (1, 2) and (1, 2) with (2, 2), both give (1, 2) ∈ R, so it is **transitive**."
        },
        {
          q: "The function f : N → N given by f(n) = 2n is:",
          options: ["onto but not one-one", "bijective", "not one-one and not onto", "one-one but not onto"],
          answer: 3,
          explain: "2m = 2n ⇒ m = n, so f is one-one. Odd numbers such as 1 and 3 have no pre-image in N, so f is **not onto**."
        },
        {
          q: "If f(x) = (3x + 2)/(5x − 3), x ≠ 3/5, then (fof)(x) equals:",
          options: ["x", "1/x", "−x", "(3x + 2)/(5x − 3)"],
          answer: 0,
          explain: "f(f(x)) = [3(3x + 2) + 2(5x − 3)] / [5(3x + 2) − 3(5x − 3)] = 19x/19 = **x**. So f is its own inverse."
        },
        {
          q: "The number of bijective functions from A = {1, 2, 3, 4} to itself is:",
          options: ["16", "256", "24", "4"],
          answer: 2,
          explain: "A bijection from an n-element set to itself is an arrangement of its elements, so there are 4! = **24**. 4⁴ = 256 counts all functions."
        },
        {
          q: "If f(x) = x² and g(x) = 2x + 1, then (fog)(x) is:",
          options: ["2x² + 1", "4x² + 4x + 1", "2x³ + x²", "4x² + 1"],
          answer: 1,
          explain: "(fog)(x) = f(g(x)) = (2x + 1)² = **4x² + 4x + 1**. 2x² + 1 is (gof)(x), which shows fog ≠ gof."
        }
      ]
    },

    // ───────────────────────────── 2. Inverse Trigonometric Functions ─────────────────────────────
    {
      id: "inverse-trigonometric-functions",
      title: "Inverse Trigonometric Functions",
      section: "Relations and Functions",
      summary: "Why trigonometric functions need restricted domains to have inverses, the domain and principal value branch of each inverse trigonometric function, their graphs, and how to find principal values.",
      notes: [
        {
          heading: "Why restrict the domain?",
          points: [
            "sin, cos, tan and the others are not one-one on R (sin 0 = sin π = 0), so they have no inverse on their full domain.",
            "Restricting the domain to an interval on which the function is one-one and onto its range makes it invertible.",
            "The range chosen for each inverse is its **principal value branch**; values in it are **principal values**.",
            "sin⁻¹x means the **angle** whose sine is x. It is **not** (sin x)⁻¹ = 1/sin x.",
            "Inverse trigonometric functions are also written arcsin x, arccos x, arctan x."
          ]
        },
        {
          heading: "Domains and principal value branches",
          points: [
            "sin⁻¹ : [−1, 1] → [−π/2, π/2] and cos⁻¹ : [−1, 1] → [0, π].",
            "tan⁻¹ : R → (−π/2, π/2) and cot⁻¹ : R → (0, π).",
            "cosec⁻¹ : R − (−1, 1) → [−π/2, π/2] − {0} and sec⁻¹ : R − (−1, 1) → [0, π] − {π/2}.",
            "Memory aid: sin⁻¹, tan⁻¹ and cosec⁻¹ give angles in the **4th and 1st quadrants**; cos⁻¹, cot⁻¹ and sec⁻¹ give angles in the **1st and 2nd quadrants**.",
            "sin⁻¹(2) is **not defined**, because 2 is outside the domain [−1, 1]."
          ]
        },
        {
          heading: "Principal values of negative arguments",
          points: [
            "sin⁻¹(−x) = −sin⁻¹x, tan⁻¹(−x) = −tan⁻¹x, cosec⁻¹(−x) = −cosec⁻¹x.",
            "cos⁻¹(−x) = π − cos⁻¹x, sec⁻¹(−x) = π − sec⁻¹x, cot⁻¹(−x) = π − cot⁻¹x.",
            "Example: cos⁻¹(−1/2) = π − π/3 = 2π/3, and sin⁻¹(−1/2) = −π/6.",
            "Always check that the answer lies in the principal branch: cos⁻¹(−1/2) is 2π/3, not −π/3 or 4π/3."
          ]
        },
        {
          heading: "Graphs",
          points: [
            "The graph of y = sin⁻¹x is the mirror image of the graph of y = sin x (for −π/2 ≤ x ≤ π/2) in the line y = x.",
            "y = sin⁻¹x rises from (−1, −π/2) to (1, π/2); y = cos⁻¹x falls from (−1, π) to (1, 0).",
            "y = tan⁻¹x is defined for all real x and stays between the lines y = −π/2 and y = π/2.",
            "The domain of a trigonometric function (restricted) becomes the range of its inverse, and vice versa."
          ]
        },
        {
          heading: "Composition and useful identities",
          points: [
            "sin(sin⁻¹x) = x for x ∈ [−1, 1], but sin⁻¹(sin x) = x **only** when x ∈ [−π/2, π/2].",
            "Example: sin⁻¹(sin 2π/3) = sin⁻¹(sin π/3) = π/3, not 2π/3.",
            "sin⁻¹x + cos⁻¹x = π/2 and tan⁻¹x + cot⁻¹x = π/2.",
            "sin⁻¹(1/x) = cosec⁻¹x and cos⁻¹(1/x) = sec⁻¹x for |x| ≥ 1; tan⁻¹(1/x) = cot⁻¹x for x > 0.",
            "For JEE: tan⁻¹x + tan⁻¹y = tan⁻¹[(x + y)/(1 − xy)] when xy < 1."
          ]
        }
      ],
      formulas: [
        "sin⁻¹x: domain [−1, 1], range [−π/2, π/2]",
        "cos⁻¹x: domain [−1, 1], range [0, π]",
        "tan⁻¹x: domain R, range (−π/2, π/2)",
        "cot⁻¹x: domain R, range (0, π)",
        "sec⁻¹x: domain R − (−1, 1), range [0, π] − {π/2}",
        "cosec⁻¹x: domain R − (−1, 1), range [−π/2, π/2] − {0}",
        "Key values: sin⁻¹(1/2) = π/6, cos⁻¹(1/2) = π/3, tan⁻¹1 = π/4, tan⁻¹√3 = π/3, cos⁻¹(−1) = π",
        "sin⁻¹(−x) = −sin⁻¹x;  tan⁻¹(−x) = −tan⁻¹x;  cosec⁻¹(−x) = −cosec⁻¹x",
        "cos⁻¹(−x) = π − cos⁻¹x;  sec⁻¹(−x) = π − sec⁻¹x;  cot⁻¹(−x) = π − cot⁻¹x",
        "sin⁻¹x + cos⁻¹x = π/2;  tan⁻¹x + cot⁻¹x = π/2;  sec⁻¹x + cosec⁻¹x = π/2",
        "sin⁻¹(1/x) = cosec⁻¹x;  cos⁻¹(1/x) = sec⁻¹x  (|x| ≥ 1)",
        "sin⁻¹(sin x) = x only for x ∈ [−π/2, π/2];  cos⁻¹(cos x) = x only for x ∈ [0, π]",
        "tan⁻¹x + tan⁻¹y = tan⁻¹[(x + y)/(1 − xy)], xy < 1  (JEE)",
        "2tan⁻¹x = sin⁻¹[2x/(1 + x²)], |x| ≤ 1  (JEE)"
      ],
      terms: [
        { term: "Principal value branch", meaning: "The restricted range chosen for an inverse trigonometric function so that it is a function, e.g. [−π/2, π/2] for sin⁻¹x." },
        { term: "Principal value", meaning: "The value of an inverse trigonometric function that lies in its principal value branch, e.g. the principal value of cos⁻¹(−1/2) is 2π/3." },
        { term: "sin⁻¹x", meaning: "The angle in [−π/2, π/2] whose sine is x; defined only for −1 ≤ x ≤ 1. It is **not** 1/sin x." },
        { term: "cos⁻¹x", meaning: "The angle in [0, π] whose cosine is x; defined only for −1 ≤ x ≤ 1." },
        { term: "tan⁻¹x", meaning: "The angle in (−π/2, π/2) whose tangent is x; defined for every real x." },
        { term: "sec⁻¹x", meaning: "The angle in [0, π], other than π/2, whose secant is x; defined only for x ≤ −1 or x ≥ 1." }
      ],
      examples: [
        {
          q: "Find the value of tan⁻¹(1) + cos⁻¹(−1/2) + sin⁻¹(−1/2).",
          steps: [
            "tan⁻¹(1) = π/4, since tan π/4 = 1 and π/4 ∈ (−π/2, π/2).",
            "cos⁻¹(−1/2) = π − cos⁻¹(1/2) = π − π/3 = 2π/3.",
            "sin⁻¹(−1/2) = −sin⁻¹(1/2) = −π/6.",
            "Sum = π/4 + 2π/3 − π/6 = (3π + 8π − 2π)/12 = 9π/12."
          ],
          answer: "3π/4"
        },
        {
          q: "Find the value of sin⁻¹(sin 3π/5).",
          steps: [
            "3π/5 = 108° is not in the principal branch [−π/2, π/2], so the answer is not 3π/5.",
            "Use sin(π − θ) = sin θ: sin 3π/5 = sin(π − 3π/5) = sin 2π/5.",
            "2π/5 = 72° lies in [−π/2, π/2].",
            "So sin⁻¹(sin 3π/5) = sin⁻¹(sin 2π/5) = 2π/5."
          ],
          answer: "2π/5"
        }
      ],
      qa: [
        { q: "Find the principal values of cosec⁻¹(2) and sec⁻¹(−2).", a: "cosec π/6 = 2 and π/6 ∈ [−π/2, π/2] − {0}, so **cosec⁻¹(2) = π/6**. sec⁻¹(−2) = π − sec⁻¹(2) = π − π/3 = **2π/3**, which lies in [0, π] − {π/2}." },
        { q: "Find the domain of the function f(x) = cos⁻¹(2x − 1).", a: "cos⁻¹ is defined only for arguments in [−1, 1]. So −1 ≤ 2x − 1 ≤ 1 ⇒ 0 ≤ 2x ≤ 2 ⇒ 0 ≤ x ≤ 1. The domain is **[0, 1]**." },
        { q: "Find the value of tan⁻¹(tan 3π/4).", a: "3π/4 is not in (−π/2, π/2), so the answer is not 3π/4. tan 3π/4 = −1, so tan⁻¹(tan 3π/4) = tan⁻¹(−1) = −tan⁻¹(1) = **−π/4**." }
      ],
      quiz: [
        {
          q: "The principal value branch (range) of cos⁻¹x is:",
          options: ["[−π/2, π/2]", "[0, π]", "(0, π)", "(−π/2, π/2)"],
          answer: 1,
          explain: "cos⁻¹x takes values in the closed interval **[0, π]**. [−π/2, π/2] is the branch of sin⁻¹x, and (0, π) is that of cot⁻¹x."
        },
        {
          q: "tan⁻¹(√3) − sec⁻¹(−2) is equal to:",
          options: ["π/3", "π", "2π/3", "−π/3"],
          answer: 3,
          explain: "tan⁻¹√3 = π/3 and sec⁻¹(−2) = π − π/3 = 2π/3. So the value is π/3 − 2π/3 = **−π/3**. Taking sec⁻¹(−2) = −π/3 is a common mistake."
        },
        {
          q: "The value of sin⁻¹(sin 2π/3) is:",
          options: ["2π/3", "−π/3", "π/3", "4π/3"],
          answer: 2,
          explain: "2π/3 is outside [−π/2, π/2]. sin 2π/3 = sin π/3, and π/3 is in the branch, so the value is **π/3**."
        },
        {
          q: "The principal value of cos⁻¹(−√3/2) is:",
          options: ["5π/6", "−π/6", "π/6", "7π/6"],
          answer: 0,
          explain: "cos⁻¹(−x) = π − cos⁻¹x, so cos⁻¹(−√3/2) = π − π/6 = **5π/6**, which lies in [0, π]."
        },
        {
          q: "If sin⁻¹x = π/5 for some x ∈ (−1, 1), then cos⁻¹x equals:",
          options: ["π/5", "4π/5", "3π/10", "7π/10"],
          answer: 2,
          explain: "sin⁻¹x + cos⁻¹x = π/2, so cos⁻¹x = π/2 − π/5 = **3π/10**."
        },
        {
          q: "tan⁻¹(1/2) + tan⁻¹(1/3) equals:",
          options: ["π/6", "π/4", "π/3", "π/2"],
          answer: 1,
          explain: "Using tan⁻¹x + tan⁻¹y = tan⁻¹[(x + y)/(1 − xy)] with xy = 1/6 < 1: (1/2 + 1/3)/(1 − 1/6) = (5/6)/(5/6) = 1, and tan⁻¹1 = **π/4**."
        }
      ]
    },

    // ───────────────────────────── 3. Matrices ─────────────────────────────
    {
      id: "matrices",
      title: "Matrices",
      section: "Algebra",
      summary: "Order and types of matrices, addition, scalar multiplication and multiplication of matrices, transpose, symmetric and skew-symmetric matrices, and invertible matrices.",
      notes: [
        {
          heading: "Matrix basics and types",
          points: [
            "A matrix is a rectangular array of numbers. An m × n matrix has m rows and n columns, so mn elements; aᵢⱼ is the element in row i, column j.",
            "Notation used here: rows are separated by semicolons, so A = [1 2; 3 4] has first row 1, 2 and second row 3, 4.",
            "Types: **row** (1 × n), **column** (m × 1), **square** (m = n), **diagonal** (square, all non-diagonal elements 0), **scalar** (diagonal with equal diagonal elements), **identity** I (diagonal elements 1) and **zero** matrix O.",
            "Two matrices are **equal** if they have the same order and all corresponding elements are equal.",
            "A matrix given by a rule, such as aᵢⱼ = i + 2j, is built by substituting each pair i, j."
          ]
        },
        {
          heading: "Addition, scalar multiplication and multiplication",
          points: [
            "A + B is defined only for matrices of the **same order**: add corresponding elements. Addition is commutative and associative.",
            "kA multiplies every element by k; k(A + B) = kA + kB and (k + l)A = kA + lA.",
            "AB is defined when (columns of A) = (rows of B). If A is m × n and B is n × p, then AB is m × p.",
            "The (i, k) element of AB is row i of A times column k of B: ∑ aᵢⱼbⱼₖ.",
            "A(BC) = (AB)C, A(B + C) = AB + AC and AI = IA = A."
          ]
        },
        {
          heading: "Surprises in matrix multiplication",
          points: [
            "Matrix multiplication is **not commutative**: in general AB ≠ BA, and one product may exist when the other does not.",
            "AB = O does **not** mean A = O or B = O: for A = [0 1; 0 0], A² = O.",
            "So (A + B)² = A² + AB + BA + B², which equals A² + 2AB + B² only if AB = BA.",
            "Cancellation fails too: AB = AC does not imply B = C unless A is invertible."
          ]
        },
        {
          heading: "Transpose; symmetric and skew-symmetric matrices",
          points: [
            "Aᵀ (also written A′) is obtained by interchanging rows and columns; an m × n matrix becomes n × m.",
            "(Aᵀ)ᵀ = A, (kA)ᵀ = kAᵀ, (A + B)ᵀ = Aᵀ + Bᵀ and **(AB)ᵀ = BᵀAᵀ** (the order reverses).",
            "A square matrix is **symmetric** if Aᵀ = A (aᵢⱼ = aⱼᵢ) and **skew-symmetric** if Aᵀ = −A (aᵢⱼ = −aⱼᵢ).",
            "All diagonal elements of a skew-symmetric matrix are **zero**, since aᵢᵢ = −aᵢᵢ.",
            "Every square matrix A = P + Q, where P = ½(A + Aᵀ) is symmetric and Q = ½(A − Aᵀ) is skew-symmetric."
          ]
        },
        {
          heading: "Invertible matrices",
          points: [
            "A square matrix A is **invertible** if there is a matrix B of the same order with AB = BA = I; then B = A⁻¹.",
            "The inverse, if it exists, is **unique**: if B and C are both inverses of A, then B = BI = B(AC) = (BA)C = IC = C.",
            "(AB)⁻¹ = B⁻¹A⁻¹ for invertible matrices A and B of the same order.",
            "A matrix equation can give A⁻¹: if A² − 5A − 2I = O, then A(A − 5I) = 2I, so A⁻¹ = ½(A − 5I).",
            "In general, inverses are found using determinants and adjoints (next chapter)."
          ]
        }
      ],
      formulas: [
        "Order of AB: (m × n)(n × p) gives m × p",
        "(AB)ᵢₖ = ∑ⱼ aᵢⱼbⱼₖ  (row i of A times column k of B)",
        "A + B = B + A;  (A + B) + C = A + (B + C)",
        "A(BC) = (AB)C;  A(B + C) = AB + AC;  AI = IA = A",
        "AB ≠ BA in general;  (A + B)² = A² + AB + BA + B²",
        "(Aᵀ)ᵀ = A;  (kA)ᵀ = kAᵀ;  (A + B)ᵀ = Aᵀ + Bᵀ;  (AB)ᵀ = BᵀAᵀ",
        "Symmetric: Aᵀ = A;  skew-symmetric: Aᵀ = −A (diagonal elements 0)",
        "A = ½(A + Aᵀ) + ½(A − Aᵀ)  (symmetric + skew-symmetric)",
        "AA⁻¹ = A⁻¹A = I;  (AB)⁻¹ = B⁻¹A⁻¹;  (A⁻¹)⁻¹ = A;  (Aᵀ)⁻¹ = (A⁻¹)ᵀ",
        "Number of m × n matrices with each entry chosen from k values: k^(mn)"
      ],
      terms: [
        { term: "Order of a matrix", meaning: "m × n for a matrix with m rows and n columns; it has mn elements." },
        { term: "Identity matrix I", meaning: "A square matrix with 1s on the main diagonal and 0s elsewhere; AI = IA = A." },
        { term: "Transpose Aᵀ", meaning: "The matrix obtained by interchanging the rows and columns of A." },
        { term: "Symmetric matrix", meaning: "A square matrix with Aᵀ = A, i.e. aᵢⱼ = aⱼᵢ for all i, j." },
        { term: "Skew-symmetric matrix", meaning: "A square matrix with Aᵀ = −A; all its diagonal elements are **zero**." },
        { term: "Invertible matrix", meaning: "A square matrix A for which some B satisfies AB = BA = I; this B is the unique inverse A⁻¹." }
      ],
      examples: [
        {
          q: "If A = [1 2; 3 4], show that A² − 5A − 2I = O and hence find A⁻¹.",
          steps: [
            "A² = [1 2; 3 4][1 2; 3 4] = [1×1 + 2×3, 1×2 + 2×4; 3×1 + 4×3, 3×2 + 4×4] = [7 10; 15 22].",
            "5A = [5 10; 15 20] and 2I = [2 0; 0 2].",
            "A² − 5A − 2I = [7 − 5 − 2, 10 − 10 − 0; 15 − 15 − 0, 22 − 20 − 2] = [0 0; 0 0] = O.",
            "Rewrite as A² − 5A = 2I, i.e. A(A − 5I) = 2I, so A × ½(A − 5I) = I. Hence A⁻¹ = ½(A − 5I).",
            "A − 5I = [−4 2; 3 −1], so A⁻¹ = [−2 1; 3/2 −1/2].",
            "Check: A·A⁻¹ = [1×(−2) + 2×3/2, 1×1 + 2×(−1/2); 3×(−2) + 4×3/2, 3×1 + 4×(−1/2)] = [1 0; 0 1] ✓."
          ],
          answer: "A² − 5A − 2I = O, and A⁻¹ = [−2 1; 3/2 −1/2]."
        },
        {
          q: "Express A = [3 5; 1 −1] as the sum of a symmetric and a skew-symmetric matrix.",
          steps: [
            "Aᵀ = [3 1; 5 −1].",
            "P = ½(A + Aᵀ) = ½[6 6; 6 −2] = [3 3; 3 −1]. Pᵀ = P, so P is symmetric.",
            "Q = ½(A − Aᵀ) = ½[0 4; −4 0] = [0 2; −2 0]. Qᵀ = [0 −2; 2 0] = −Q, so Q is skew-symmetric.",
            "Check: P + Q = [3 + 0, 3 + 2; 3 − 2, −1 + 0] = [3 5; 1 −1] = A ✓."
          ],
          answer: "A = [3 3; 3 −1] + [0 2; −2 0]  (symmetric + skew-symmetric)"
        }
      ],
      qa: [
        { q: "If A = [cos α  −sin α; sin α  cos α] and A + Aᵀ = I, find α (0 < α < π/2).", a: "Aᵀ = [cos α  sin α; −sin α  cos α], so A + Aᵀ = [2cos α  0; 0  2cos α]. Equating with I = [1 0; 0 1]: 2cos α = 1, so cos α = 1/2 and **α = π/3**." },
        { q: "Using A = [0 1; 0 0] and B = [1 0; 0 0], show that AB ≠ BA and that the product of two non-zero matrices can be the zero matrix.", a: "AB = [0×1 + 1×0, 0×0 + 1×0; 0, 0] = [0 0; 0 0] = O, while BA = [1×0 + 0×0, 1×1 + 0×0; 0, 0] = [0 1; 0 0]. So **AB ≠ BA**, and **AB = O** although neither A nor B is the zero matrix." },
        { q: "If A and B are symmetric matrices of the same order, show that AB − BA is skew-symmetric.", a: "Aᵀ = A and Bᵀ = B. Then (AB − BA)ᵀ = (AB)ᵀ − (BA)ᵀ = BᵀAᵀ − AᵀBᵀ = BA − AB = −(AB − BA). Its transpose is its negative, so **AB − BA is skew-symmetric**." }
      ],
      quiz: [
        {
          q: "If A is a 3 × 4 matrix and B is a matrix such that both AᵀB and BAᵀ are defined, then the order of B is:",
          options: ["4 × 3", "3 × 4", "3 × 3", "4 × 4"],
          answer: 1,
          explain: "Aᵀ is 4 × 3. AᵀB needs B to have 3 rows; BAᵀ needs B to have 4 columns. So B is **3 × 4**."
        },
        {
          q: "The number of all possible matrices of order 3 × 3 with each entry 0 or 1 is:",
          options: ["27", "18", "81", "512"],
          answer: 3,
          explain: "There are 9 entries, each with 2 choices, so there are 2⁹ = **512** matrices."
        },
        {
          q: "If A is a square matrix such that A² = A, then (I + A)³ − 7A equals:",
          options: ["A", "I − A", "I", "3A"],
          answer: 2,
          explain: "A² = A gives A³ = A. Since I and A commute, (I + A)³ = I + 3A + 3A² + A³ = I + 7A. So (I + A)³ − 7A = **I**."
        },
        {
          q: "If the matrix [0 a 3; 2 b −1; c 1 0] is skew-symmetric, then:",
          options: ["a = −2, b = 0, c = −3", "a = 2, b = 0, c = 3", "a = −2, b = 1, c = −3", "a = 2, b = 1, c = 3"],
          answer: 0,
          explain: "Skew-symmetric means aᵢⱼ = −aⱼᵢ, so diagonal elements are 0: b = 0. a = −(2) = −2 and c = −(3) = −3. So **a = −2, b = 0, c = −3** (check: a₂₃ = −1 = −a₃₂ ✓)."
        },
        {
          q: "For matrices A and B for which AB is defined, (AB)ᵀ equals:",
          options: ["AᵀBᵀ", "BᵀAᵀ", "BA", "ABᵀ"],
          answer: 1,
          explain: "The transpose of a product reverses the order: **(AB)ᵀ = BᵀAᵀ**."
        },
        {
          q: "If A = [α β; γ −α] is such that A² = I, then:",
          options: ["1 + α² + βγ = 0", "1 − α² + βγ = 0", "1 + α² − βγ = 0", "1 − α² − βγ = 0"],
          answer: 3,
          explain: "A² = [α² + βγ  αβ − βα; γα − αγ  γβ + α²] = [α² + βγ  0; 0  α² + βγ]. A² = I gives α² + βγ = 1, i.e. **1 − α² − βγ = 0**."
        }
      ]
    },

    // ───────────────────────────── 4. Determinants ─────────────────────────────
    {
      id: "determinants",
      title: "Determinants",
      section: "Algebra",
      summary: "Determinants of square matrices up to order 3, area of a triangle, minors and cofactors, adjoint and inverse of a matrix, and solving systems of linear equations by the matrix method.",
      notes: [
        {
          heading: "Evaluating determinants",
          points: [
            "Every square matrix A has a number |A| (or det A). Notation here: |a b; c d| = ad − bc.",
            "A 3 × 3 determinant is expanded along any row or column: multiply each element by its cofactor and add. Expanding along a row or column with **zeros** saves work.",
            "|Aᵀ| = |A|, |AB| = |A||B|, and for A of order n, **|kA| = kⁿ|A|** (not k|A|).",
            "A is **singular** if |A| = 0 and **non-singular** if |A| ≠ 0.",
            "Interchanging two rows changes the sign of |A|; a determinant with two identical rows (or columns) is 0."
          ]
        },
        {
          heading: "Area of a triangle",
          points: [
            "Area of the triangle with vertices (x₁, y₁), (x₂, y₂), (x₃, y₃) = ½ |x₁(y₂ − y₃) + x₂(y₃ − y₁) + x₃(y₁ − y₂)|, i.e. ½ × the absolute value of |x₁ y₁ 1; x₂ y₂ 1; x₃ y₃ 1|.",
            "Area is always **positive**; when the area is given, use both the + and − values of the determinant.",
            "Three points are **collinear** if and only if this determinant is 0.",
            "Equation of the line through (x₁, y₁) and (x₂, y₂): |x y 1; x₁ y₁ 1; x₂ y₂ 1| = 0."
          ]
        },
        {
          heading: "Minors and cofactors",
          points: [
            "The **minor** Mᵢⱼ of aᵢⱼ is the determinant left after deleting row i and column j.",
            "The **cofactor** Aᵢⱼ = (−1)^(i + j) Mᵢⱼ; the signs follow the pattern + − + / − + − / + − +.",
            "|A| = sum of the elements of any one row (or column) times their own cofactors, e.g. |A| = a₁₁A₁₁ + a₁₂A₁₂ + a₁₃A₁₃.",
            "Elements of one row multiplied by the cofactors of a **different** row add up to **0**."
          ]
        },
        {
          heading: "Adjoint and inverse",
          points: [
            "**adj A** = transpose of the matrix of cofactors.",
            "For a 2 × 2 matrix A = [a b; c d], adj A = [d −b; −c a]: swap the diagonal elements and change the signs of the other two.",
            "A(adj A) = (adj A)A = |A| I.",
            "A is invertible **if and only if** |A| ≠ 0, and then **A⁻¹ = (1/|A|) adj A**.",
            "For A of order n: |adj A| = |A|ⁿ⁻¹ and |A⁻¹| = 1/|A|."
          ]
        },
        {
          heading: "Solving linear equations (matrix method)",
          points: [
            "Write the system as AX = B, where A is the coefficient matrix, X the column of unknowns and B the column of constants.",
            "If |A| ≠ 0, the system is **consistent** with a **unique** solution X = A⁻¹B.",
            "If |A| = 0, find (adj A)B. If (adj A)B ≠ O, the system is **inconsistent** (no solution).",
            "If |A| = 0 and (adj A)B = O, the system has either infinitely many solutions or none; it must be examined further.",
            "A consistent system has one or more solutions; an inconsistent system has none."
          ]
        }
      ],
      formulas: [
        "|a b; c d| = ad − bc",
        "3 × 3, along R₁: |A| = a₁₁(a₂₂a₃₃ − a₂₃a₃₂) − a₁₂(a₂₁a₃₃ − a₂₃a₃₁) + a₁₃(a₂₁a₃₂ − a₂₂a₃₁)",
        "|Aᵀ| = |A|;  |AB| = |A||B|;  |kA| = kⁿ|A| for A of order n",
        "Minor Mᵢⱼ: delete row i and column j;  cofactor Aᵢⱼ = (−1)^(i + j) Mᵢⱼ",
        "|A| = a₁₁A₁₁ + a₁₂A₁₂ + a₁₃A₁₃;  a₁₁A₂₁ + a₁₂A₂₂ + a₁₃A₂₃ = 0",
        "adj A = (matrix of cofactors)ᵀ;  for [a b; c d], adj A = [d −b; −c a]",
        "A(adj A) = (adj A)A = |A| I",
        "A⁻¹ = (1/|A|) adj A, provided |A| ≠ 0",
        "|adj A| = |A|ⁿ⁻¹;  |A⁻¹| = 1/|A|;  (AB)⁻¹ = B⁻¹A⁻¹",
        "|adj(adj A)| = |A|^((n − 1)²)  (JEE)",
        "Area of △ = ½ |x₁(y₂ − y₃) + x₂(y₃ − y₁) + x₃(y₁ − y₂)|",
        "Collinear points: x₁(y₂ − y₃) + x₂(y₃ − y₁) + x₃(y₁ − y₂) = 0",
        "AX = B with |A| ≠ 0 ⇒ X = A⁻¹B (unique solution)",
        "|A| = 0 and (adj A)B ≠ O ⇒ no solution (inconsistent)"
      ],
      terms: [
        { term: "Determinant", meaning: "A number |A| associated with a square matrix A; for [a b; c d] it is ad − bc." },
        { term: "Singular matrix", meaning: "A square matrix whose determinant is 0. It has **no inverse**." },
        { term: "Minor Mᵢⱼ", meaning: "The determinant obtained by deleting the i-th row and j-th column of A." },
        { term: "Cofactor Aᵢⱼ", meaning: "(−1)^(i + j) × Mᵢⱼ: the minor with a sign from the + − + pattern." },
        { term: "Adjoint (adj A)", meaning: "The transpose of the matrix of cofactors of A; it satisfies A(adj A) = |A| I." },
        { term: "Consistent system", meaning: "A system of equations that has at least one solution. A system with no solution is **inconsistent**." }
      ],
      examples: [
        {
          q: "Solve by the matrix method: x + y + z = 6, y + 3z = 11, x − 2y + z = 0.",
          steps: [
            "AX = B with A = [1 1 1; 0 1 3; 1 −2 1], X = [x; y; z] and B = [6; 11; 0].",
            "|A| = 1(1 + 6) − 1(0 − 3) + 1(0 − 1) = 7 + 3 − 1 = 9 ≠ 0, so there is a unique solution.",
            "Cofactors: A₁₁ = 7, A₁₂ = 3, A₁₃ = −1; A₂₁ = −3, A₂₂ = 0, A₂₃ = 3; A₃₁ = 2, A₃₂ = −3, A₃₃ = 1.",
            "adj A = [7 −3 2; 3 0 −3; −1 3 1] (the cofactors of row i form column i).",
            "X = A⁻¹B = (1/9)[7×6 − 3×11 + 2×0; 3×6 + 0×11 − 3×0; −1×6 + 3×11 + 1×0] = (1/9)[9; 18; 27] = [1; 2; 3].",
            "Check in the third equation: 1 − 4 + 3 = 0 ✓."
          ],
          answer: "x = 1, y = 2, z = 3"
        },
        {
          q: "Find the area of the triangle with vertices (3, 8), (−4, 2) and (5, 1).",
          steps: [
            "Area = ½ |x₁(y₂ − y₃) + x₂(y₃ − y₁) + x₃(y₁ − y₂)|",
            "= ½ |3(2 − 1) + (−4)(1 − 8) + 5(8 − 2)|",
            "= ½ |3 + 28 + 30| = ½ × 61"
          ],
          answer: "61/2 = 30.5 square units"
        }
      ],
      qa: [
        { q: "A is a square matrix of order 3 with |A| = 4. Find |adj A|, |2A| and |A⁻¹|.", a: "|adj A| = |A|ⁿ⁻¹ = 4² = **16**. |2A| = 2³|A| = 8 × 4 = **32**. |A⁻¹| = 1/|A| = **1/4**." },
        { q: "Find k if the area of the triangle with vertices (k, 0), (4, 0) and (0, 2) is 4 square units.", a: "½ |k(0 − 2) + 4(2 − 0) + 0(0 − 0)| = 4 ⇒ |8 − 2k| = 8. So 8 − 2k = 8, giving k = 0, or 8 − 2k = −8, giving k = 8. Hence **k = 0 or k = 8**." },
        { q: "Examine the consistency of the system x + 3y = 5, 2x + 6y = 8.", a: "A = [1 3; 2 6], B = [5; 8]. |A| = 6 − 6 = 0, so find (adj A)B. adj A = [6 −3; −2 1], so (adj A)B = [30 − 24; −10 + 8] = [6; −2] ≠ O. Hence the system is **inconsistent** (no solution). Geometrically, the lines x + 3y = 5 and x + 3y = 4 are parallel." }
      ],
      quiz: [
        {
          q: "If A is a 3 × 3 matrix with A(adj A) = 10I, then |adj A| is:",
          options: ["10", "100", "1000", "1/10"],
          answer: 1,
          explain: "A(adj A) = |A| I, so |A| = 10. Then |adj A| = |A|ⁿ⁻¹ = 10² = **100**."
        },
        {
          q: "The value of the determinant |2 4; −5 −1| is:",
          options: ["−22", "−18", "22", "18"],
          answer: 3,
          explain: "2 × (−1) − 4 × (−5) = −2 + 20 = **18**."
        },
        {
          q: "If |x 2; 18 x| = |6 2; 18 6|, then x is:",
          options: ["±6", "6 only", "0", "−6 only"],
          answer: 0,
          explain: "x² − 36 = 36 − 36 = 0, so x² = 36 and **x = ±6**. Forgetting the negative root gives '6 only'."
        },
        {
          q: "The matrix [4 k; 2 3] is singular when k equals:",
          options: ["3/2", "−6", "8/3", "6"],
          answer: 3,
          explain: "Singular means determinant 0: 4 × 3 − 2k = 0 ⇒ 2k = 12 ⇒ **k = 6**."
        },
        {
          q: "If A is a 3 × 3 matrix with |A| = 3, then |adj(adj A)| equals:",
          options: ["9", "27", "81", "243"],
          answer: 2,
          explain: "|adj A| = |A|² = 9. adj A is also 3 × 3, so |adj(adj A)| = |adj A|² = **81**. In general |adj(adj A)| = |A|^((n − 1)²) = 3⁴ = 81."
        },
        {
          q: "The area of the triangle with vertices (1, 0), (6, 0) and (4, 3) is:",
          options: ["7.5 sq units", "15 sq units", "12 sq units", "9 sq units"],
          answer: 0,
          explain: "½ |1(0 − 3) + 6(3 − 0) + 4(0 − 0)| = ½ |−3 + 18| = **7.5** (base 5 on the x-axis, height 3). Forgetting the ½ gives 15."
        }
      ]
    },

    // ───────────────────────────── 5. Continuity and Differentiability ─────────────────────────────
    {
      id: "continuity-and-differentiability",
      title: "Continuity and Differentiability",
      section: "Calculus",
      summary: "Continuity and differentiability of functions, the chain rule, derivatives of implicit, inverse trigonometric, exponential and logarithmic functions, logarithmic differentiation, parametric forms and second order derivatives.",
      notes: [
        {
          heading: "Continuity",
          points: [
            "f is **continuous at x = c** if lim (x→c) f(x) = f(c), i.e. left-hand limit = right-hand limit = f(c).",
            "f is a continuous function if it is continuous at every point of its domain. Polynomials, sin x, cos x, eˣ and |x| are continuous everywhere.",
            "Sums, differences, products, quotients (where the denominator ≠ 0) and compositions of continuous functions are continuous.",
            "1/x is continuous on its domain (x ≠ 0); since 0 is not in the domain, continuity at 0 is not discussed.",
            "The greatest integer function [x] is discontinuous at every integer, because the left and right limits differ there."
          ]
        },
        {
          heading: "Differentiability",
          points: [
            "f is differentiable at c if f′(c) = lim (h→0) [f(c + h) − f(c)]/h exists, i.e. left-hand derivative (LHD) = right-hand derivative (RHD).",
            "**Every differentiable function is continuous**, but the converse is false.",
            "|x| is continuous at 0 but **not differentiable** there: LHD = −1 and RHD = +1 (a sharp corner).",
            "For a piecewise function at the joining point, first check continuity, then compare LHD and RHD."
          ]
        },
        {
          heading: "Chain rule and implicit functions",
          points: [
            "Chain rule: if y = f(t) and t = g(x), then dy/dx = (dy/dt)·(dt/dx). E.g. d/dx sin(x²) = cos(x²)·2x.",
            "Implicit functions: differentiate both sides with respect to x, writing dy/dx each time a term in y is differentiated, then solve for dy/dx.",
            "Example: x² + y² = 25 gives 2x + 2y(dy/dx) = 0, so dy/dx = −x/y.",
            "Substitutions such as x = tan θ or x = sin θ often simplify inverse trigonometric expressions before differentiating."
          ]
        },
        {
          heading: "Exponential and logarithmic functions",
          points: [
            "d/dx(eˣ) = eˣ and d/dx(log x) = 1/x (x > 0); in calculus, log means the natural logarithm (base e).",
            "d/dx(aˣ) = aˣ log a, and d/dx(logₐx) = 1/(x log a).",
            "**Logarithmic differentiation**: for y = [u(x)]^v(x), or long products and quotients, take log of both sides first, then differentiate.",
            "y = xˣ ⇒ log y = x log x ⇒ (1/y)(dy/dx) = log x + 1 ⇒ dy/dx = xˣ(1 + log x).",
            "If y = u + v where u and v are each of the form f(x)^g(x), differentiate u and v separately using logs, then add."
          ]
        },
        {
          heading: "Parametric forms and second order derivatives",
          points: [
            "If x = f(t) and y = g(t), then **dy/dx = (dy/dt)/(dx/dt)**, provided dx/dt ≠ 0.",
            "Second order derivative: d²y/dx² = d/dx(dy/dx), also written y″ or y₂.",
            "In parametric form, d²y/dx² = [d/dt(dy/dx)] ÷ (dx/dt). It is **not** (d²y/dt²) ÷ (d²x/dt²).",
            "To prove a relation such as x²y₂ + xy₁ + y = 0, find y₁, simplify, differentiate again and substitute."
          ]
        }
      ],
      formulas: [
        "Continuity at c: lim (x→c⁻) f(x) = lim (x→c⁺) f(x) = f(c)",
        "f′(c) = lim (h→0) [f(c + h) − f(c)]/h;  differentiable at c ⇔ LHD = RHD",
        "d/dx(xⁿ) = nxⁿ⁻¹;  d/dx(constant) = 0",
        "d/dx(sin x) = cos x;  d/dx(cos x) = −sin x",
        "d/dx(tan x) = sec²x;  d/dx(cot x) = −cosec²x",
        "d/dx(sec x) = sec x tan x;  d/dx(cosec x) = −cosec x cot x",
        "d/dx(sin⁻¹x) = 1/√(1 − x²);  d/dx(cos⁻¹x) = −1/√(1 − x²)  (−1 < x < 1)",
        "d/dx(tan⁻¹x) = 1/(1 + x²);  d/dx(cot⁻¹x) = −1/(1 + x²)",
        "d/dx(sec⁻¹x) = 1/(|x|√(x² − 1));  d/dx(cosec⁻¹x) = −1/(|x|√(x² − 1))  (|x| > 1)",
        "d/dx(eˣ) = eˣ;  d/dx(aˣ) = aˣ log a",
        "d/dx(log x) = 1/x;  d/dx(logₐx) = 1/(x log a)",
        "Product rule: (uv)′ = u′v + uv′",
        "Quotient rule: (u/v)′ = (u′v − uv′)/v²",
        "Chain rule: dy/dx = (dy/dt)·(dt/dx)",
        "Parametric: dy/dx = (dy/dt)/(dx/dt)",
        "y = u^v: log y = v log u, so (1/y)(dy/dx) = v′ log u + v·u′/u"
      ],
      terms: [
        { term: "Continuous function", meaning: "A function with lim (x→c) f(x) = f(c) at every point c of its domain; its graph has no breaks there." },
        { term: "Differentiable function", meaning: "A function whose derivative exists at every point of its domain (LHD = RHD). Differentiable ⇒ continuous, but not conversely." },
        { term: "Chain rule", meaning: "Rule for differentiating a composite function: if y = f(t) and t = g(x), then dy/dx = (dy/dt)(dt/dx)." },
        { term: "Implicit function", meaning: "A relation between x and y not solved for y, such as x² + xy + y² = 7; differentiate term by term, treating y as a function of x." },
        { term: "Logarithmic differentiation", meaning: "Taking log of both sides before differentiating; used for functions like xˣ or (sin x)^(cos x) and for long products." },
        { term: "Parametric form", meaning: "x and y both given in terms of a third variable (parameter) t; then dy/dx = (dy/dt)/(dx/dt)." }
      ],
      examples: [
        {
          q: "Find k so that f(x) = kx + 1 for x ≤ π, and f(x) = cos x for x > π, is continuous at x = π.",
          steps: [
            "f(π) = kπ + 1, and the left-hand limit is also kπ + 1.",
            "Right-hand limit = lim (x→π⁺) cos x = cos π = −1.",
            "For continuity: kπ + 1 = −1, so kπ = −2."
          ],
          answer: "k = −2/π"
        },
        {
          q: "Find dy/dx if y = x^(sin x), x > 0.",
          steps: [
            "Take logs: log y = sin x · log x.",
            "Differentiate both sides w.r.t. x: (1/y)(dy/dx) = cos x · log x + sin x · (1/x).",
            "Multiply by y: dy/dx = y[cos x log x + (sin x)/x]."
          ],
          answer: "dy/dx = x^(sin x) [cos x · log x + (sin x)/x]"
        }
      ],
      qa: [
        { q: "Show that f(x) = |x| is continuous but not differentiable at x = 0.", a: "LHL = lim (x→0⁻) (−x) = 0, RHL = lim (x→0⁺) x = 0 and f(0) = 0, so f is **continuous** at 0. LHD = lim (h→0⁻) |h|/h = lim (−h)/h = −1, while RHD = lim (h→0⁺) h/h = 1. Since LHD ≠ RHD, f is **not differentiable** at 0." },
        { q: "If x = a(θ − sin θ) and y = a(1 + cos θ), find dy/dx.", a: "dx/dθ = a(1 − cos θ) and dy/dθ = −a sin θ. So dy/dx = −sin θ/(1 − cos θ) = −[2 sin(θ/2) cos(θ/2)]/[2 sin²(θ/2)] = **−cot(θ/2)**." },
        { q: "If y = 3 cos(log x) + 4 sin(log x), show that x²y₂ + xy₁ + y = 0.", a: "y₁ = [−3 sin(log x) + 4 cos(log x)]/x, so xy₁ = −3 sin(log x) + 4 cos(log x). Differentiating again: xy₂ + y₁ = [−3 cos(log x) − 4 sin(log x)]/x = −y/x. Multiplying by x gives x²y₂ + xy₁ = −y, i.e. **x²y₂ + xy₁ + y = 0**." }
      ],
      quiz: [
        {
          q: "The derivative of tan⁻¹(x²) with respect to x is:",
          options: ["1/(1 + x⁴)", "2x/(1 + x⁴)", "2x/(1 + x²)", "x/(1 + x⁴)"],
          answer: 1,
          explain: "Chain rule: [1/(1 + (x²)²)] × 2x = **2x/(1 + x⁴)**."
        },
        {
          q: "If y = log(log x), then dy/dx is:",
          options: ["1/log x", "log x/x", "x/log x", "1/(x log x)"],
          answer: 3,
          explain: "dy/dx = [1/log x] × d/dx(log x) = [1/log x] × (1/x) = **1/(x log x)**."
        },
        {
          q: "If y = xˣ, then dy/dx equals:",
          options: ["x · xˣ⁻¹", "xˣ log x", "xˣ(1 + log x)", "xˣ(1 − log x)"],
          answer: 2,
          explain: "log y = x log x ⇒ (1/y)(dy/dx) = log x + 1 ⇒ dy/dx = **xˣ(1 + log x)**. The power rule does not apply because the exponent is not a constant."
        },
        {
          q: "The value of k for which f(x) = (sin 5x)/(3x) for x ≠ 0, and f(0) = k, is continuous at x = 0 is:",
          options: ["5/3", "3/5", "1", "0"],
          answer: 0,
          explain: "lim (x→0) (sin 5x)/(3x) = (5/3) × lim (sin 5x)/(5x) = 5/3. For continuity, k = **5/3**."
        },
        {
          q: "If x = at² and y = 2at, then d²y/dx² is:",
          options: ["1/t", "−1/t²", "−1/(2at³)", "1/(2at³)"],
          answer: 2,
          explain: "dy/dx = 2a/(2at) = 1/t. d²y/dx² = [d/dt(1/t)] ÷ (dx/dt) = (−1/t²) ÷ (2at) = **−1/(2at³)**. The option −1/t² forgets to divide by dx/dt."
        },
        {
          q: "Which of these functions is continuous at x = 1 but NOT differentiable there?",
          options: ["x² − 1", "|x − 1|", "sin(x − 1)", "eˣ"],
          answer: 1,
          explain: "**|x − 1|** has a sharp corner at x = 1: LHD = −1 and RHD = +1. The other three are differentiable everywhere."
        }
      ]
    },

    // ───────────────────────────── 6. Application of Derivatives ─────────────────────────────
    {
      id: "application-of-derivatives",
      title: "Application of Derivatives",
      section: "Calculus",
      summary: "Using derivatives to find rates of change, to decide where a function is increasing or decreasing, and to find local and absolute maxima and minima in practical problems.",
      notes: [
        {
          heading: "Rate of change of quantities",
          points: [
            "dy/dx is the rate of change of y with respect to x; its value at x = x₀ gives the rate at that point.",
            "If x and y both depend on time t, then dy/dt = (dy/dx)·(dx/dt) (chain rule).",
            "Example: for a circle A = πr², so dA/dt = 2πr·(dr/dt).",
            "In economics, **marginal cost** MC = dC/dx and **marginal revenue** MR = dR/dx, where x is the number of units.",
            "Give units with the answer, e.g. cm²/s for the rate of change of an area."
          ]
        },
        {
          heading: "Increasing and decreasing functions",
          points: [
            "If f′(x) > 0 for all x in an interval, f is **strictly increasing** there; if f′(x) < 0, f is **strictly decreasing**.",
            "If f′(x) = 0 throughout an interval, f is constant there.",
            "Method: find f′(x), solve f′(x) = 0 to split the real line into intervals, then test the sign of f′(x) in each interval.",
            "f′ can be 0 at isolated points while f is still strictly increasing: x³ is strictly increasing on R although f′(0) = 0.",
            "For a closed interval [a, b], check the sign of f′ on the open interval (a, b)."
          ]
        },
        {
          heading: "Critical points and the first derivative test",
          points: [
            "A **critical point** of f is a point c in its domain where f′(c) = 0 or f is not differentiable.",
            "If f′ changes sign from **+ to −** as x increases through c, then c is a point of **local maximum**.",
            "If f′ changes sign from **− to +**, then c is a point of **local minimum**.",
            "If f′ does not change sign, c is neither; it is a **point of inflection** (e.g. x = 0 for x³)."
          ]
        },
        {
          heading: "Second derivative test",
          points: [
            "If f′(c) = 0 and **f″(c) < 0**, then f has a **local maximum** at c.",
            "If f′(c) = 0 and **f″(c) > 0**, then f has a **local minimum** at c.",
            "If f′(c) = 0 and f″(c) = 0, the test fails; use the first derivative test instead.",
            "A local maximum value is not necessarily the greatest value of f; a local maximum can even be smaller than a local minimum."
          ]
        },
        {
          heading: "Absolute extrema and word problems",
          points: [
            "A continuous function on a closed interval [a, b] has an **absolute** maximum and minimum, attained at critical points or at the end points a and b.",
            "Method: find all critical points in (a, b), evaluate f there and at a and b; the largest value is the absolute maximum and the smallest is the absolute minimum.",
            "Word problems: express the quantity to be optimised in terms of **one** variable using the given condition, differentiate, solve, and confirm with the second derivative.",
            "Standard results: a rectangle of fixed perimeter has maximum area when it is a square; a closed cylinder of fixed surface area has maximum volume when height = diameter."
          ]
        }
      ],
      formulas: [
        "Rate of change of y w.r.t. x at x₀: (dy/dx) at x = x₀",
        "dy/dt = (dy/dx)·(dx/dt)",
        "f′(x) > 0 ⇒ strictly increasing;  f′(x) < 0 ⇒ strictly decreasing;  f′(x) = 0 ⇒ constant",
        "f′(c) = 0 and f″(c) < 0 ⇒ local maximum at c",
        "f′(c) = 0 and f″(c) > 0 ⇒ local minimum at c",
        "Marginal cost MC = dC/dx;  marginal revenue MR = dR/dx;  profit P = R − C",
        "Circle: A = πr², circumference = 2πr;  dA/dt = 2πr(dr/dt)",
        "Sphere: V = (4/3)πr³, S = 4πr²;  dV/dt = 4πr²(dr/dt)",
        "Cylinder: V = πr²h, curved surface = 2πrh, total surface = 2πr(r + h)",
        "Cone: V = (1/3)πr²h, curved surface = πrl, where l = √(r² + h²)",
        "Open box from a square sheet of side a, cutting squares of side x from the corners: V = x(a − 2x)² is maximum at x = a/6",
        "Closed cylinder of given total surface area: maximum volume when h = 2r"
      ],
      terms: [
        { term: "Strictly increasing function", meaning: "x₁ < x₂ ⇒ f(x₁) < f(x₂) on the interval; guaranteed when f′(x) > 0 there." },
        { term: "Critical point", meaning: "A point c in the domain where f′(c) = 0 or f is not differentiable; local maxima and minima can occur only at such points." },
        { term: "Local maximum", meaning: "f(c) is a local maximum value if f(c) ≥ f(x) for all x near c; f′ changes sign from + to − at c." },
        { term: "Point of inflection", meaning: "A critical point where f′ does not change sign, so it is neither a local maximum nor a local minimum (e.g. x = 0 for x³)." },
        { term: "Absolute maximum", meaning: "The greatest value of f on its domain or on a given interval; on [a, b], compare the critical points and the end points." },
        { term: "Marginal revenue", meaning: "The rate of change of total revenue with respect to the number of units sold, MR = dR/dx." }
      ],
      examples: [
        {
          q: "Find the intervals in which f(x) = 2x³ − 3x² − 36x + 7 is strictly increasing and strictly decreasing.",
          steps: [
            "f′(x) = 6x² − 6x − 36 = 6(x² − x − 6) = 6(x − 3)(x + 2).",
            "f′(x) = 0 at x = −2 and x = 3, which split R into (−∞, −2), (−2, 3) and (3, ∞).",
            "In (−∞, −2), e.g. x = −3: f′ = 6(−6)(−1) = 36 > 0, so f is increasing.",
            "In (−2, 3), e.g. x = 0: f′ = 6(−3)(2) = −36 < 0, so f is decreasing.",
            "In (3, ∞), e.g. x = 4: f′ = 6(1)(6) = 36 > 0, so f is increasing."
          ],
          answer: "Strictly increasing in (−∞, −2) and (3, ∞); strictly decreasing in (−2, 3)."
        },
        {
          q: "A square piece of tin of side 18 cm is made into an open box by cutting equal squares from the four corners and folding up the flaps. What should be the side of the square cut off so that the volume of the box is maximum? Find this volume.",
          steps: [
            "Let the side of each square cut off be x cm. The box has base (18 − 2x) × (18 − 2x) and height x, with 0 < x < 9.",
            "V = x(18 − 2x)² = 4x³ − 72x² + 324x.",
            "dV/dx = 12x² − 144x + 324 = 12(x² − 12x + 27) = 12(x − 3)(x − 9).",
            "dV/dx = 0 ⇒ x = 3 or x = 9; x = 9 is rejected because the base would vanish.",
            "d²V/dx² = 24x − 144; at x = 3 it is −72 < 0, so V is maximum at x = 3.",
            "V(3) = 3 × (18 − 6)² = 3 × 144 = 432 cm³."
          ],
          answer: "Cut off squares of side 3 cm; maximum volume = 432 cm³."
        }
      ],
      qa: [
        { q: "The radius of a circle is increasing at the rate of 3 cm/s. How fast is its area increasing when the radius is 10 cm?", a: "A = πr², so dA/dt = 2πr(dr/dt) = 2π × 10 × 3 = **60π cm²/s**." },
        { q: "Find the local maximum and local minimum values of f(x) = x³ − 6x² + 9x + 15.", a: "f′(x) = 3x² − 12x + 9 = 3(x − 1)(x − 3), so the critical points are x = 1 and x = 3. f″(x) = 6x − 12. f″(1) = −6 < 0, so the local maximum value is f(1) = 1 − 6 + 9 + 15 = **19**. f″(3) = 6 > 0, so the local minimum value is f(3) = 27 − 54 + 27 + 15 = **15**." },
        { q: "Find the absolute maximum and absolute minimum values of f(x) = 2x³ − 15x² + 36x + 1 on [1, 5].", a: "f′(x) = 6x² − 30x + 36 = 6(x − 2)(x − 3), so the critical points are x = 2 and x = 3. f(1) = 24, f(2) = 29, f(3) = 28, f(5) = 56. Absolute maximum = **56 at x = 5**; absolute minimum = **24 at x = 1**." }
      ],
      quiz: [
        {
          q: "The function f(x) = x³ − 3x² + 3x − 100 is:",
          options: ["decreasing on R", "increasing only for x > 1", "decreasing on (0, 1)", "increasing on R"],
          answer: 3,
          explain: "f′(x) = 3x² − 6x + 3 = 3(x − 1)² ≥ 0, and it is zero only at x = 1. So f is **increasing on R**."
        },
        {
          q: "The rate of change of the area of a circle with respect to its radius r, at r = 5 cm, is:",
          options: ["25π cm²/cm", "10π cm²/cm", "5π cm²/cm", "20π cm²/cm"],
          answer: 1,
          explain: "dA/dr = 2πr = 2π × 5 = **10π cm²/cm**."
        },
        {
          q: "The maximum value of sin x + cos x is:",
          options: ["2", "1", "√2", "1/√2"],
          answer: 2,
          explain: "f′(x) = cos x − sin x = 0 at x = π/4, where f″ = −√2 < 0. Maximum = sin π/4 + cos π/4 = **√2**. It is not 2, because sin x and cos x cannot both equal 1."
        },
        {
          q: "For f(x) = x³, the point x = 0 is:",
          options: ["a point of inflection", "a point of local maximum", "a point of local minimum", "a point where f is not differentiable"],
          answer: 0,
          explain: "f′(x) = 3x² is 0 at x = 0 but does not change sign (it is positive on both sides), so x = 0 is **neither a maximum nor a minimum**: it is a point of inflection."
        },
        {
          q: "The total revenue (in ₹) from selling x units is R(x) = 3x² + 36x + 5. The marginal revenue when x = 5 is:",
          options: ["₹36", "₹66", "₹260", "₹60"],
          answer: 1,
          explain: "MR = dR/dx = 6x + 36 = 6 × 5 + 36 = **₹66**. ₹260 is R(5), the total revenue, not the marginal revenue."
        },
        {
          q: "A closed right circular cylinder has a fixed total surface area. Its volume is maximum when its height h and radius r satisfy:",
          options: ["h = r", "h = r/2", "h = 2r", "h = 3r"],
          answer: 2,
          explain: "S = 2πr² + 2πrh is fixed, so V = πr²h = (Sr − 2πr³)/2. dV/dr = 0 gives S = 6πr², and then 2πrh = 4πr², so **h = 2r** (height = diameter)."
        }
      ]
    },

    // ───────────────────────────── 7. Integrals ─────────────────────────────
    {
      id: "integrals",
      title: "Integrals",
      section: "Calculus",
      summary: "Integration as the inverse of differentiation, the methods of substitution, partial fractions and integration by parts, integrals of special forms, definite integrals, the fundamental theorem of calculus and properties of definite integrals.",
      notes: [
        {
          heading: "Indefinite integrals",
          points: [
            "If d/dx F(x) = f(x), then ∫f(x) dx = F(x) + C. F is an **antiderivative** (primitive) and C is the **constant of integration**.",
            "∫[f(x) ± g(x)] dx = ∫f(x) dx ± ∫g(x) dx and ∫k f(x) dx = k∫f(x) dx.",
            "Differentiation and integration are inverse processes: d/dx ∫f(x) dx = f(x).",
            "Simplify first: use sin²x = (1 − cos 2x)/2, cos²x = (1 + cos 2x)/2 and tan²x = sec²x − 1, or divide out, e.g. (x³ − 1)/x² = x − x⁻².",
            "Always add + C to an indefinite integral."
          ]
        },
        {
          heading: "Integration by substitution",
          points: [
            "Put t = g(x), so dt = g′(x) dx, rewrite the whole integral in t, integrate, then substitute back.",
            "Look for a function together with its derivative: in ∫2x cos(x²) dx put t = x² to get sin(x²) + C.",
            "∫f′(x)/f(x) dx = log|f(x)| + C, e.g. ∫2x/(1 + x²) dx = log(1 + x²) + C.",
            "∫[f(x)]ⁿ f′(x) dx = [f(x)]ⁿ⁺¹/(n + 1) + C, n ≠ −1.",
            "For ∫dx/(ax² + bx + c) or ∫dx/√(ax² + bx + c), complete the square and use the special integrals."
          ]
        },
        {
          heading: "Partial fractions",
          points: [
            "Use for a **proper** rational function P(x)/Q(x) (degree of P < degree of Q). If it is improper, divide first.",
            "(px + q)/[(x − a)(x − b)] = A/(x − a) + B/(x − b), a ≠ b.",
            "(px + q)/(x − a)² = A/(x − a) + B/(x − a)².",
            "(px² + qx + r)/[(x − a)(x² + bx + c)] = A/(x − a) + (Bx + C)/(x² + bx + c), where x² + bx + c cannot be factorised.",
            "Find A, B, C by putting convenient values of x (the roots) or by comparing coefficients."
          ]
        },
        {
          heading: "Integration by parts",
          points: [
            "∫u v dx = u∫v dx − ∫[u′ ∫v dx] dx, where u is the first function and v the second.",
            "Choose the first function by **ILATE**: Inverse trigonometric, Logarithmic, Algebraic, Trigonometric, Exponential.",
            "Example: ∫x eˣ dx = x eˣ − ∫eˣ dx = (x − 1)eˣ + C.",
            "For ∫log x dx or ∫tan⁻¹x dx, take 1 as the second function: ∫log x dx = x log x − x + C.",
            "Special form: **∫eˣ[f(x) + f′(x)] dx = eˣ f(x) + C**."
          ]
        },
        {
          heading: "Definite integrals and the fundamental theorem",
          points: [
            "Notation here: ∫ₐᵇ or ∫[a, b] means the integral from a to b, and ∫₀^(π/2) means the integral from 0 to π/2.",
            "**Fundamental theorem of calculus**: if F′(x) = f(x) on [a, b], then ∫ₐᵇ f(x) dx = F(b) − F(a). The constant C cancels.",
            "The area function A(x) = ∫ₐˣ f(t) dt satisfies A′(x) = f(x).",
            "When substituting in a definite integral, change the limits to the new variable; there is no need to substitute back.",
            "For |f(x)| or piecewise functions, split the interval at the points where the expression changes form."
          ]
        },
        {
          heading: "Properties of definite integrals",
          points: [
            "Swapping the limits changes the sign: ∫[a, b] f(x) dx = −∫[b, a] f(x) dx. Also ∫[a, b] f = ∫[a, c] f + ∫[c, b] f.",
            "∫ₐᵇ f(x) dx = ∫ₐᵇ f(a + b − x) dx; in particular ∫₀ᵃ f(x) dx = ∫₀ᵃ f(a − x) dx. Use it when f(x) + f(a − x) is simple, and add the two forms.",
            "∫₋ₐᵃ f(x) dx = 2∫₀ᵃ f(x) dx if f is **even**, and **0** if f is **odd**.",
            "∫₀²ᵃ f(x) dx = 2∫₀ᵃ f(x) dx if f(2a − x) = f(x), and 0 if f(2a − x) = −f(x).",
            "The variable of integration is a dummy: ∫ₐᵇ f(x) dx = ∫ₐᵇ f(t) dt."
          ]
        }
      ],
      formulas: [
        "∫xⁿ dx = xⁿ⁺¹/(n + 1) + C, n ≠ −1;  ∫(1/x) dx = log|x| + C",
        "∫eˣ dx = eˣ + C;  ∫aˣ dx = aˣ/log a + C",
        "∫sin x dx = −cos x + C;  ∫cos x dx = sin x + C",
        "∫sec²x dx = tan x + C;  ∫cosec²x dx = −cot x + C",
        "∫sec x tan x dx = sec x + C;  ∫cosec x cot x dx = −cosec x + C",
        "∫tan x dx = log|sec x| + C;  ∫cot x dx = log|sin x| + C",
        "∫sec x dx = log|sec x + tan x| + C;  ∫cosec x dx = log|cosec x − cot x| + C",
        "∫dx/√(1 − x²) = sin⁻¹x + C;  ∫dx/(1 + x²) = tan⁻¹x + C",
        "∫dx/(x² − a²) = [1/(2a)] log|(x − a)/(x + a)| + C",
        "∫dx/(a² − x²) = [1/(2a)] log|(a + x)/(a − x)| + C",
        "∫dx/(x² + a²) = (1/a) tan⁻¹(x/a) + C",
        "∫dx/√(a² − x²) = sin⁻¹(x/a) + C",
        "∫dx/√(x² − a²) = log|x + √(x² − a²)| + C",
        "∫dx/√(x² + a²) = log|x + √(x² + a²)| + C",
        "∫√(a² − x²) dx = (x/2)√(a² − x²) + (a²/2) sin⁻¹(x/a) + C",
        "∫√(x² − a²) dx = (x/2)√(x² − a²) − (a²/2) log|x + √(x² − a²)| + C",
        "∫√(x² + a²) dx = (x/2)√(x² + a²) + (a²/2) log|x + √(x² + a²)| + C",
        "∫f′(x)/f(x) dx = log|f(x)| + C",
        "By parts: ∫u v dx = u∫v dx − ∫[u′ ∫v dx] dx  (first function u by ILATE)",
        "∫eˣ[f(x) + f′(x)] dx = eˣ f(x) + C",
        "∫ₐᵇ f(x) dx = F(b) − F(a), where F′(x) = f(x)",
        "∫[a, b] f = −∫[b, a] f;  ∫[a, b] f = ∫[a, c] f + ∫[c, b] f",
        "∫ₐᵇ f(x) dx = ∫ₐᵇ f(a + b − x) dx;  ∫₀ᵃ f(x) dx = ∫₀ᵃ f(a − x) dx",
        "∫₀²ᵃ f(x) dx = 2∫₀ᵃ f(x) dx if f(2a − x) = f(x);  = 0 if f(2a − x) = −f(x)",
        "∫₋ₐᵃ f(x) dx = 2∫₀ᵃ f(x) dx if f is even;  = 0 if f is odd"
      ],
      terms: [
        { term: "Antiderivative (primitive)", meaning: "A function F with F′(x) = f(x); every antiderivative of f has the form F(x) + C." },
        { term: "Constant of integration", meaning: "The arbitrary constant C added to an indefinite integral, because constants vanish on differentiation." },
        { term: "ILATE rule", meaning: "Order for choosing the first function in integration by parts: Inverse trigonometric, Logarithmic, Algebraic, Trigonometric, Exponential." },
        { term: "Partial fractions", meaning: "Splitting a proper rational function into simpler fractions, e.g. 1/[(x − 1)(x − 2)] = 1/(x − 2) − 1/(x − 1)." },
        { term: "Definite integral", meaning: "∫ₐᵇ f(x) dx = F(b) − F(a): a number, the signed area under y = f(x) from x = a to x = b." },
        { term: "Even and odd functions", meaning: "f is even if f(−x) = f(x) (e.g. x², cos x) and odd if f(−x) = −f(x) (e.g. x³, sin x). An odd function integrates to **0** over [−a, a]." }
      ],
      examples: [
        {
          q: "Find ∫ x/[(x − 1)(x − 2)] dx.",
          steps: [
            "Write x/[(x − 1)(x − 2)] = A/(x − 1) + B/(x − 2), so x = A(x − 2) + B(x − 1).",
            "Put x = 1: 1 = A(−1), so A = −1. Put x = 2: 2 = B(1), so B = 2.",
            "∫ x/[(x − 1)(x − 2)] dx = −∫dx/(x − 1) + 2∫dx/(x − 2)",
            "= −log|x − 1| + 2 log|x − 2| + C"
          ],
          answer: "log|(x − 2)²/(x − 1)| + C"
        },
        {
          q: "Evaluate ∫₀^(π/2) √(sin x)/[√(sin x) + √(cos x)] dx.",
          steps: [
            "Let I = ∫₀^(π/2) √(sin x)/[√(sin x) + √(cos x)] dx.  …(1)",
            "Use ∫₀ᵃ f(x) dx = ∫₀ᵃ f(a − x) dx with a = π/2; sin(π/2 − x) = cos x and cos(π/2 − x) = sin x.",
            "So I = ∫₀^(π/2) √(cos x)/[√(cos x) + √(sin x)] dx.  …(2)",
            "Adding (1) and (2): 2I = ∫₀^(π/2) 1 dx = π/2."
          ],
          answer: "I = π/4"
        }
      ],
      qa: [
        { q: "Find ∫ x sin x dx.", a: "By parts, with u = x (algebraic) as the first function and sin x (trigonometric) as the second, following ILATE: ∫x sin x dx = x(−cos x) − ∫1·(−cos x) dx = −x cos x + ∫cos x dx = **−x cos x + sin x + C**." },
        { q: "Find ∫ eˣ (1/x − 1/x²) dx.", a: "This has the form ∫eˣ[f(x) + f′(x)] dx with f(x) = 1/x, since f′(x) = −1/x². So the integral is eˣ f(x) + C = **eˣ/x + C**." },
        { q: "Evaluate ∫₋₁² |x³ − x| dx.", a: "x³ − x = x(x − 1)(x + 1) is ≥ 0 on [−1, 0], ≤ 0 on [0, 1] and ≥ 0 on [1, 2]. With F(x) = x⁴/4 − x²/2: ∫₋₁⁰ (x³ − x) dx = 0 − (−1/4) = 1/4; ∫₀¹ −(x³ − x) dx = −(−1/4) = 1/4; ∫₁² (x³ − x) dx = 2 − (−1/4) = 9/4. Total = 1/4 + 1/4 + 9/4 = **11/4**." }
      ],
      quiz: [
        {
          q: "∫ x eˣ dx equals:",
          options: ["x eˣ + C", "(x + 1)eˣ + C", "(x − 1)eˣ + C", "x²eˣ/2 + C"],
          answer: 2,
          explain: "By parts: ∫x eˣ dx = x eˣ − ∫eˣ dx = **(x − 1)eˣ + C**. Check: d/dx[(x − 1)eˣ] = eˣ + (x − 1)eˣ = x eˣ ✓."
        },
        {
          q: "The value of ∫ sin⁷x dx from x = −π/2 to x = π/2 is:",
          options: ["0", "1", "2", "π/2"],
          answer: 0,
          explain: "sin⁷(−x) = −sin⁷x, so sin⁷x is an **odd** function, and its integral over [−a, a] is **0**."
        },
        {
          q: "∫ dx/(x² + 4) equals:",
          options: ["tan⁻¹(x/2) + C", "(1/4) tan⁻¹(x/4) + C", "2 tan⁻¹(2x) + C", "(1/2) tan⁻¹(x/2) + C"],
          answer: 3,
          explain: "∫dx/(x² + a²) = (1/a) tan⁻¹(x/a) + C with a = 2, giving **(1/2) tan⁻¹(x/2) + C**."
        },
        {
          q: "For any positive integer n, ∫₀^(π/2) sinⁿx/(sinⁿx + cosⁿx) dx equals:",
          options: ["π/2", "π/4", "0", "1"],
          answer: 1,
          explain: "Replacing x by π/2 − x swaps sin and cos. Adding the two forms gives 2I = ∫₀^(π/2) 1 dx = π/2, so I = **π/4** for every n."
        },
        {
          q: "∫ eˣ (sin x + cos x) dx equals:",
          options: ["eˣ cos x + C", "eˣ sin x + C", "eˣ(sin x − cos x) + C", "−eˣ cos x + C"],
          answer: 1,
          explain: "With f(x) = sin x, f′(x) = cos x, so ∫eˣ[f(x) + f′(x)] dx = **eˣ sin x + C**."
        },
        {
          q: "∫ dx/(eˣ + e⁻ˣ) equals:",
          options: ["log(eˣ + e⁻ˣ) + C", "tan⁻¹(e⁻ˣ) + C", "tan⁻¹(eˣ) + C", "eˣ − e⁻ˣ + C"],
          answer: 2,
          explain: "Multiply numerator and denominator by eˣ: ∫eˣ dx/(e²ˣ + 1). Put t = eˣ, dt = eˣ dx: ∫dt/(1 + t²) = **tan⁻¹(eˣ) + C**."
        }
      ]
    },

    // ───────────────────────────── 8. Application of Integrals ─────────────────────────────
    {
      id: "application-of-integrals",
      title: "Application of Integrals",
      section: "Calculus",
      summary: "Using definite integrals to find the area under simple curves: lines, parabolas, circles and ellipses (in standard form).",
      notes: [
        {
          heading: "Area under a curve",
          points: [
            "The area bounded by y = f(x) (with f(x) ≥ 0), the x-axis and the lines x = a and x = b is **∫ₐᵇ y dx = ∫ₐᵇ f(x) dx**.",
            "Think of the area as made of thin **vertical strips** of height y and width dx, added from x = a to x = b.",
            "The area bounded by x = g(y), the y-axis and the lines y = c and y = d is ∫ x dy from y = c to y = d (horizontal strips).",
            "Choose vertical or horizontal strips, whichever makes the integral simpler; e.g. use x = 2√y for a region beside the y-axis under x² = 4y."
          ]
        },
        {
          heading: "Curves below the x-axis",
          points: [
            "If f(x) ≤ 0 on [a, b], the integral comes out negative; the **area is its absolute value**, |∫ₐᵇ f(x) dx|.",
            "If the curve crosses the x-axis, split the interval at the crossing points and add the absolute values of the parts.",
            "Example: ∫ sin x dx from 0 to 2π is 0, but the area between y = sin x and the x-axis over [0, 2π] is 2 + 2 = 4.",
            "Area is always reported as a positive number, in square units."
          ]
        },
        {
          heading: "Circles and ellipses",
          points: [
            "Use symmetry: for x² + y² = a², area = 4 × (area in the first quadrant) = 4∫₀ᵃ √(a² − x²) dx = **πa²**.",
            "The key integral is ∫₀ᵃ √(a² − x²) dx = [(x/2)√(a² − x²) + (a²/2) sin⁻¹(x/a)] from 0 to a = πa²/4.",
            "Ellipse x²/a² + y²/b² = 1: in the first quadrant y = (b/a)√(a² − x²), and the total area is **πab**.",
            "For part of a circle or ellipse cut off by a line x = k, integrate between the correct limits and double it for the part below the x-axis."
          ]
        },
        {
          heading: "Parabolas",
          points: [
            "y² = 4ax is symmetric about the x-axis; in the first quadrant y = 2√(ax).",
            "Area bounded by y² = 4ax and the line x = k (k > 0) = 2∫₀ᵏ 2√(ax) dx.",
            "Area bounded by y² = 4ax and its latus rectum x = a is **8a²/3**.",
            "x² = 4ay is symmetric about the y-axis; use x = 2√(ay) with horizontal strips, or y = x²/(4a) with vertical strips."
          ]
        },
        {
          heading: "Method for area problems",
          points: [
            "Step 1: sketch the curve(s) and shade the required region.",
            "Step 2: find the points of intersection with the axes or given lines; these give the limits.",
            "Step 3: decide on vertical or horizontal strips and use symmetry where possible.",
            "Step 4: evaluate the definite integral(s), add the parts, and give the answer in square units.",
            "Extension (used in JEE): the area between y = f(x) and y = g(x), with f(x) ≥ g(x) on [a, b], is ∫ₐᵇ [f(x) − g(x)] dx."
          ]
        }
      ],
      formulas: [
        "Area under y = f(x) ≥ 0 from x = a to x = b: ∫ₐᵇ f(x) dx",
        "Area beside the y-axis from y = c to y = d: ∫ x dy over [c, d]",
        "Region below the x-axis: area = |∫ₐᵇ f(x) dx|",
        "∫₀ᵃ √(a² − x²) dx = πa²/4",
        "Circle x² + y² = a²: area = πa²",
        "Ellipse x²/a² + y²/b² = 1: area = πab",
        "Parabola y² = 4ax and its latus rectum x = a: area = 8a²/3",
        "Parabolas y² = 4ax and x² = 4ay: enclosed area = 16a²/3  (JEE)",
        "Between curves (f ≥ g on [a, b]): area = ∫ₐᵇ [f(x) − g(x)] dx  (JEE)"
      ],
      terms: [
        { term: "Vertical strip", meaning: "A thin rectangle of height y and width dx; adding such strips from x = a to x = b gives ∫ₐᵇ y dx." },
        { term: "Horizontal strip", meaning: "A thin rectangle of length x and width dy; used when the region lies beside the y-axis, giving ∫ x dy." },
        { term: "Area under a curve", meaning: "The area of the region bounded by the curve, the x-axis and the lines x = a and x = b." },
        { term: "Symmetry", meaning: "If a region is symmetric about an axis, find the area of one part and multiply, e.g. 4 × first-quadrant area for a circle." },
        { term: "Latus rectum", meaning: "For y² = 4ax, the chord through the focus (a, 0) perpendicular to the axis of the parabola; it lies on x = a and has length 4a." }
      ],
      examples: [
        {
          q: "Find the area enclosed by the ellipse x²/a² + y²/b² = 1.",
          steps: [
            "The ellipse is symmetric about both axes, so area = 4 × (area in the first quadrant).",
            "In the first quadrant y = (b/a)√(a² − x²), with x from 0 to a.",
            "Area = 4∫₀ᵃ (b/a)√(a² − x²) dx = (4b/a)[(x/2)√(a² − x²) + (a²/2) sin⁻¹(x/a)] from 0 to a.",
            "= (4b/a)[(0 + (a²/2) sin⁻¹1) − 0] = (4b/a)(a²/2)(π/2)."
          ],
          answer: "Area = πab square units"
        },
        {
          q: "Find the area of the region bounded by y² = 9x, x = 2, x = 4 and the x-axis in the first quadrant.",
          steps: [
            "In the first quadrant, y = 3√x.",
            "Area = ∫₂⁴ 3√x dx = 3 × (2/3)[x^(3/2)] from 2 to 4 = 2[x^(3/2)] from 2 to 4.",
            "4^(3/2) = 8 and 2^(3/2) = 2√2.",
            "Area = 2(8 − 2√2) = 16 − 4√2."
          ],
          answer: "(16 − 4√2) square units ≈ 10.34 square units"
        }
      ],
      qa: [
        { q: "Find the area of the region bounded by the curve y² = 4x and the line x = 3.", a: "The region is symmetric about the x-axis. Area = 2∫₀³ 2√x dx = 4 × (2/3)[x^(3/2)] from 0 to 3 = (8/3) × 3√3 = **8√3 square units**." },
        { q: "Find the area of the region bounded by x² = 4y, y = 2, y = 4 and the y-axis in the first quadrant.", a: "Use horizontal strips: x = 2√y. Area = ∫₂⁴ 2√y dy = 2 × (2/3)[y^(3/2)] from 2 to 4 = (4/3)(8 − 2√2) = **(32 − 8√2)/3 square units**." },
        { q: "Find the area bounded by y = cos x and the x-axis between x = 0 and x = 2π.", a: "cos x ≥ 0 on [0, π/2], ≤ 0 on [π/2, 3π/2] and ≥ 0 on [3π/2, 2π]. Area = |sin(π/2) − sin 0| + |sin(3π/2) − sin(π/2)| + |sin 2π − sin(3π/2)| = 1 + 2 + 1 = **4 square units**. (The plain integral from 0 to 2π would wrongly give 0.)" }
      ],
      quiz: [
        {
          q: "The area enclosed by the ellipse x²/25 + y²/16 = 1 is:",
          options: ["80π sq units", "20π sq units", "41π sq units", "10π sq units"],
          answer: 1,
          explain: "Area = πab with a = 5 and b = 4, so **20π**. 41π wrongly uses a² + b²."
        },
        {
          q: "The area between y = sin x and the x-axis from x = 0 to x = 2π is:",
          options: ["0", "2", "4", "2π"],
          answer: 2,
          explain: "The area from 0 to π is 2 and from π to 2π is |−2| = 2, so the total is **4**. The plain integral gives 0 because the two parts cancel."
        },
        {
          q: "The area bounded by y = x², the x-axis and the lines x = 0 and x = 3 is:",
          options: ["27 sq units", "3 sq units", "9 sq units", "6 sq units"],
          answer: 2,
          explain: "∫₀³ x² dx = [x³/3] from 0 to 3 = 27/3 = **9**."
        },
        {
          q: "The area of the region enclosed between the parabolas y² = 4x and x² = 4y is:",
          options: ["16/3 sq units", "8/3 sq units", "32/3 sq units", "4/3 sq units"],
          answer: 0,
          explain: "They meet at (0, 0) and (4, 4). Area = ∫₀⁴ (2√x − x²/4) dx = 32/3 − 16/3 = **16/3** (the 16a²/3 result with a = 1)."
        },
        {
          q: "The area bounded by the parabola y² = 4ax and its latus rectum x = a is:",
          options: ["4a²/3", "16a²/3", "2a²", "8a²/3"],
          answer: 3,
          explain: "Area = 2∫₀ᵃ 2√(ax) dx = 4√a × (2/3)a^(3/2) = **8a²/3**."
        },
        {
          q: "The area bounded by y = x³, the x-axis and the lines x = −1 and x = 1 is:",
          options: ["0", "1/4", "1", "1/2"],
          answer: 3,
          explain: "The part from −1 to 0 lies below the x-axis. Area = |∫₋₁⁰ x³ dx| + ∫₀¹ x³ dx = 1/4 + 1/4 = **1/2**. The plain integral is 0."
        }
      ]
    },

    // ───────────────────────────── 9. Differential Equations ─────────────────────────────
    {
      id: "differential-equations",
      title: "Differential Equations",
      section: "Calculus",
      summary: "Order and degree of a differential equation, general and particular solutions, and solving first order equations by separation of variables, the homogeneous method and the linear (integrating factor) method.",
      notes: [
        {
          heading: "Order and degree",
          points: [
            "A **differential equation** involves derivatives of a dependent variable (y) with respect to an independent variable (x).",
            "**Order** = order of the highest order derivative present.",
            "**Degree** = highest power of the highest order derivative, **when the equation is a polynomial in the derivatives**.",
            "If a derivative appears inside sin, cos, log or an exponential, the degree is **not defined**: y‴ + y² + e^(y′) = 0 has order 3 and no degree.",
            "Order and degree (when defined) are always positive integers."
          ]
        },
        {
          heading: "General and particular solutions",
          points: [
            "A **solution** is a function y = φ(x) that satisfies the equation.",
            "The **general solution** contains arbitrary constants; their number equals the order of the equation.",
            "A **particular solution** is obtained by giving the constants definite values, using given conditions such as y(0) = 1.",
            "To verify a solution, differentiate it as many times as needed and substitute into the equation."
          ]
        },
        {
          heading: "Variables separable",
          points: [
            "Form: dy/dx = g(x)·h(y). Rewrite it as dy/h(y) = g(x) dx.",
            "Integrate both sides: ∫dy/h(y) = ∫g(x) dx + C.",
            "Example: dy/dx = (1 + y²)/(1 + x²) gives tan⁻¹y = tan⁻¹x + C.",
            "Add a single constant C after integrating both sides."
          ]
        },
        {
          heading: "Homogeneous differential equations",
          points: [
            "F(x, y) is a **homogeneous function of degree n** if F(λx, λy) = λⁿF(x, y); e.g. x² + xy has degree 2.",
            "dy/dx = F(x, y) is homogeneous if F is homogeneous of degree 0, i.e. F can be written as g(y/x).",
            "Substitute **y = vx**, so dy/dx = v + x(dv/dx); the equation becomes variables separable in v and x.",
            "After integrating, replace v by y/x.",
            "If the equation is of the form dx/dy = h(x/y), substitute x = vy instead."
          ]
        },
        {
          heading: "Linear differential equations",
          points: [
            "Form: **dy/dx + Py = Q**, where P and Q are functions of x only (or constants).",
            "**Integrating factor** IF = e^(∫P dx); use e^(log f(x)) = f(x) to simplify it.",
            "Solution: **y × IF = ∫(Q × IF) dx + C**.",
            "If the equation is linear in x, dx/dy + P₁x = Q₁ (P₁, Q₁ functions of y), then IF = e^(∫P₁ dy) and x × IF = ∫(Q₁ × IF) dy + C.",
            "First divide so that the coefficient of dy/dx is 1, then read off P with its sign."
          ]
        }
      ],
      formulas: [
        "Order = order of the highest derivative;  degree = power of that derivative (when the equation is a polynomial in derivatives)",
        "Number of arbitrary constants in the general solution = order of the equation",
        "Variables separable: dy/dx = g(x)h(y) ⇒ ∫dy/h(y) = ∫g(x) dx + C",
        "Homogeneous function of degree n: F(λx, λy) = λⁿF(x, y)",
        "Homogeneous equation dy/dx = g(y/x): put y = vx, dy/dx = v + x(dv/dx)",
        "Linear dy/dx + Py = Q: IF = e^(∫P dx);  y·IF = ∫Q·IF dx + C",
        "Linear in x, dx/dy + P₁x = Q₁: IF = e^(∫P₁ dy);  x·IF = ∫Q₁·IF dy + C",
        "e^(log f(x)) = f(x);  e^(−log x) = 1/x;  e^(n log x) = xⁿ"
      ],
      terms: [
        { term: "Order of a differential equation", meaning: "The order of the highest order derivative in the equation, e.g. 2 for y″ + y = 0." },
        { term: "Degree of a differential equation", meaning: "The highest power of the highest order derivative when the equation is a polynomial in its derivatives; not defined otherwise." },
        { term: "General solution", meaning: "A solution containing as many arbitrary constants as the order of the equation." },
        { term: "Particular solution", meaning: "A solution with no arbitrary constants, found from the general solution using given conditions." },
        { term: "Homogeneous differential equation", meaning: "An equation dy/dx = F(x, y) where F is homogeneous of degree 0; it is solved by putting y = vx." },
        { term: "Integrating factor (IF)", meaning: "e^(∫P dx) for dy/dx + Py = Q; multiplying by it turns the left side into the derivative of y × IF." }
      ],
      examples: [
        {
          q: "Find the particular solution of dy/dx = −4xy², given that y = 1 when x = 0.",
          steps: [
            "Separate the variables (y ≠ 0): dy/y² = −4x dx.",
            "Integrate: ∫y⁻² dy = −4∫x dx ⇒ −1/y = −2x² + C.",
            "Put x = 0, y = 1: −1 = 0 + C, so C = −1.",
            "−1/y = −2x² − 1 ⇒ 1/y = 2x² + 1."
          ],
          answer: "y = 1/(1 + 2x²)"
        },
        {
          q: "Solve the differential equation x(dy/dx) + 2y = x², x ≠ 0.",
          steps: [
            "Divide by x: dy/dx + (2/x)y = x. This is linear with P = 2/x and Q = x.",
            "IF = e^(∫(2/x) dx) = e^(2 log x) = e^(log x²) = x².",
            "Solution: y·x² = ∫x·x² dx = ∫x³ dx = x⁴/4 + C.",
            "Divide by x²."
          ],
          answer: "y = x²/4 + C/x²  (general solution)"
        }
      ],
      qa: [
        { q: "Write the order and degree (if defined) of: (i) (d²y/dx²)³ + (dy/dx)⁴ + y = 0  (ii) y‴ + y² + e^(y′) = 0.", a: "(i) The highest derivative is d²y/dx², raised to the power 3: **order 2, degree 3**. (ii) The highest derivative is y‴, so the **order is 3**; but e^(y′) means the equation is not a polynomial in the derivatives, so the **degree is not defined**." },
        { q: "Solve the homogeneous differential equation dy/dx = (x + y)/x.", a: "dy/dx = 1 + y/x. Put y = vx, so dy/dx = v + x(dv/dx). Then v + x(dv/dx) = 1 + v ⇒ x(dv/dx) = 1 ⇒ dv = dx/x ⇒ v = log|x| + C. Replacing v by y/x: **y = x log|x| + Cx**." },
        { q: "Solve x(dy/dx) − y = 2x², x > 0.", a: "dy/dx − (1/x)y = 2x is linear with P = −1/x and Q = 2x. IF = e^(−∫dx/x) = e^(−log x) = 1/x. So y·(1/x) = ∫2x·(1/x) dx = 2x + C, giving **y = 2x² + Cx**." }
      ],
      quiz: [
        {
          q: "The order and degree of (d²y/dx²)³ + (dy/dx)² + sin(dy/dx) + 1 = 0 are:",
          options: ["order 2, degree 3", "order 3, degree 2", "order 2, degree not defined", "order 1, degree not defined"],
          answer: 2,
          explain: "The highest derivative is d²y/dx², so the order is 2. The term sin(dy/dx) means the equation is not a polynomial in the derivatives, so the **degree is not defined**."
        },
        {
          q: "The number of arbitrary constants in the particular solution of a differential equation of order 3 is:",
          options: ["3", "0", "2", "1"],
          answer: 1,
          explain: "A particular solution has **no** arbitrary constants (0). The general solution of an order-3 equation has 3."
        },
        {
          q: "The integrating factor of dy/dx + y/x = x² is:",
          options: ["1/x", "log x", "eˣ", "x"],
          answer: 3,
          explain: "P = 1/x, so IF = e^(∫dx/x) = e^(log x) = **x**."
        },
        {
          q: "The integrating factor of (1 − y²)(dx/dy) + yx = ay, where −1 < y < 1, is:",
          options: ["1/√(1 − y²)", "1/(y² − 1)", "1/(1 − y²)", "1/√(y² − 1)"],
          answer: 0,
          explain: "Divide by (1 − y²): dx/dy + [y/(1 − y²)]x = ay/(1 − y²), which is linear in x. IF = e^(∫y/(1 − y²) dy) = e^(−½ log(1 − y²)) = **1/√(1 − y²)**."
        },
        {
          q: "The general solution of dy/dx = e^(x + y) is:",
          options: ["eˣ + eʸ = C", "eˣ + e⁻ʸ = C", "e⁻ˣ + eʸ = C", "e⁻ˣ + e⁻ʸ = C"],
          answer: 1,
          explain: "dy/dx = eˣ·eʸ ⇒ e⁻ʸ dy = eˣ dx ⇒ −e⁻ʸ = eˣ + K ⇒ **eˣ + e⁻ʸ = C**."
        },
        {
          q: "Which of the following is a homogeneous differential equation?",
          options: ["(4x + 6y + 5) dy − (3y + 2x + 4) dx = 0", "xy dx − (x³ + y³) dy = 0", "y² dx + (x² − xy − y²) dy = 0", "(x³ + 2y²) dx + 2xy dy = 0"],
          answer: 2,
          explain: "In **y² dx + (x² − xy − y²) dy = 0** both coefficients are homogeneous of degree 2, so dy/dx = −y²/(x² − xy − y²) is homogeneous of degree 0. The others mix different degrees or contain constant terms."
        }
      ]
    },

    // ───────────────────────────── 10. Vector Algebra ─────────────────────────────
    {
      id: "vector-algebra",
      title: "Vector Algebra",
      section: "Vectors and 3D Geometry",
      summary: "Vectors and their types, components and direction cosines, addition and scalar multiples, the section formula, and the scalar (dot) and vector (cross) products with their use for angles, projections and areas.",
      notes: [
        {
          heading: "Vectors, components and direction cosines",
          points: [
            "A **vector** has magnitude and direction; a **scalar** has magnitude only. AB⃗ denotes the vector from A to B.",
            "Position vector of P(x, y, z): OP⃗ = xî + yĵ + zk̂, with magnitude |OP⃗| = √(x² + y² + z²).",
            "For r⃗ = xî + yĵ + zk̂ with |r⃗| = r, the **direction cosines** are l = x/r, m = y/r, n = z/r, and l² + m² + n² = 1.",
            "Numbers proportional to l, m, n (such as x, y, z themselves) are **direction ratios**.",
            "î, ĵ and k̂ are the unit vectors along the x-, y- and z-axes."
          ]
        },
        {
          heading: "Types of vectors and addition",
          points: [
            "**Zero vector** 0⃗ (zero magnitude); **unit vector** â = a⃗/|a⃗|; **equal vectors** (same magnitude and direction); **collinear vectors** (parallel to the same line).",
            "Triangle law: AB⃗ + BC⃗ = AC⃗; the parallelogram law gives the same sum. Vector addition is commutative and associative.",
            "AB⃗ = (position vector of B) − (position vector of A) = (x₂ − x₁)î + (y₂ − y₁)ĵ + (z₂ − z₁)k̂.",
            "λa⃗ has magnitude |λ||a⃗|; it points the same way as a⃗ if λ > 0 and the opposite way if λ < 0.",
            "a⃗ and b⃗ are **collinear** if b⃗ = λa⃗ for some scalar λ, i.e. their components are proportional."
          ]
        },
        {
          heading: "Section formula",
          points: [
            "If R divides PQ internally in the ratio m : n, and P, Q have position vectors a⃗, b⃗, then R has position vector (mb⃗ + na⃗)/(m + n).",
            "For external division in the ratio m : n, the position vector is (mb⃗ − na⃗)/(m − n).",
            "Mid-point of PQ: (a⃗ + b⃗)/2.",
            "Three points A, B, C are collinear if AB⃗ and BC⃗ are collinear vectors, i.e. AB⃗ = λBC⃗."
          ]
        },
        {
          heading: "Scalar (dot) product",
          points: [
            "**a⃗·b⃗ = |a⃗||b⃗| cos θ**, a scalar, where θ (0 ≤ θ ≤ π) is the angle between the vectors.",
            "In components: a⃗·b⃗ = a₁b₁ + a₂b₂ + a₃b₃. So î·î = ĵ·ĵ = k̂·k̂ = 1 and î·ĵ = ĵ·k̂ = k̂·î = 0.",
            "For non-zero vectors, a⃗ ⊥ b⃗ ⇔ a⃗·b⃗ = 0. Also a⃗·a⃗ = |a⃗|².",
            "Projection of a⃗ on b⃗ = (a⃗·b⃗)/|b⃗|.",
            "|a⃗ + b⃗|² = |a⃗|² + 2a⃗·b⃗ + |b⃗|²; the dot product is commutative and distributive over addition."
          ]
        },
        {
          heading: "Vector (cross) product",
          points: [
            "**a⃗ × b⃗ = |a⃗||b⃗| sin θ n̂**, a vector perpendicular to both a⃗ and b⃗ (right-hand rule).",
            "Determinant form: a⃗ × b⃗ = |î ĵ k̂; a₁ a₂ a₃; b₁ b₂ b₃| = (a₂b₃ − a₃b₂)î − (a₁b₃ − a₃b₁)ĵ + (a₁b₂ − a₂b₁)k̂.",
            "**Not commutative**: b⃗ × a⃗ = −(a⃗ × b⃗). î × ĵ = k̂, ĵ × k̂ = î, k̂ × î = ĵ, and î × î = 0⃗.",
            "For non-zero vectors, a⃗ ∥ b⃗ ⇔ a⃗ × b⃗ = 0⃗.",
            "Area of a parallelogram with adjacent sides a⃗, b⃗ = |a⃗ × b⃗|; area of the triangle with these sides = ½|a⃗ × b⃗|.",
            "A unit vector perpendicular to both a⃗ and b⃗ is ±(a⃗ × b⃗)/|a⃗ × b⃗|."
          ]
        }
      ],
      formulas: [
        "a⃗ = a₁î + a₂ĵ + a₃k̂ ⇒ |a⃗| = √(a₁² + a₂² + a₃²)",
        "Unit vector â = a⃗/|a⃗|",
        "Direction cosines: l = a₁/|a⃗|, m = a₂/|a⃗|, n = a₃/|a⃗|;  l² + m² + n² = 1",
        "AB⃗ = OB⃗ − OA⃗ = (x₂ − x₁)î + (y₂ − y₁)ĵ + (z₂ − z₁)k̂",
        "Section formula: internal (mb⃗ + na⃗)/(m + n);  external (mb⃗ − na⃗)/(m − n);  mid-point (a⃗ + b⃗)/2",
        "a⃗·b⃗ = |a⃗||b⃗| cos θ = a₁b₁ + a₂b₂ + a₃b₃",
        "cos θ = (a⃗·b⃗)/(|a⃗||b⃗|)",
        "Projection of a⃗ on b⃗ = (a⃗·b⃗)/|b⃗|",
        "î·î = ĵ·ĵ = k̂·k̂ = 1;  î·ĵ = ĵ·k̂ = k̂·î = 0",
        "|a⃗ ± b⃗|² = |a⃗|² ± 2a⃗·b⃗ + |b⃗|²",
        "a⃗ × b⃗ = (a₂b₃ − a₃b₂)î − (a₁b₃ − a₃b₁)ĵ + (a₁b₂ − a₂b₁)k̂;  |a⃗ × b⃗| = |a⃗||b⃗| sin θ",
        "î × ĵ = k̂, ĵ × k̂ = î, k̂ × î = ĵ;  î × î = ĵ × ĵ = k̂ × k̂ = 0⃗;  b⃗ × a⃗ = −(a⃗ × b⃗)",
        "|a⃗ × b⃗|² + (a⃗·b⃗)² = |a⃗|²|b⃗|²",
        "a⃗ ⊥ b⃗ ⇔ a⃗·b⃗ = 0;  a⃗ ∥ b⃗ ⇔ a⃗ × b⃗ = 0⃗",
        "Area of parallelogram = |a⃗ × b⃗| (adjacent sides) = ½|d⃗₁ × d⃗₂| (diagonals)",
        "Area of △ABC = ½|AB⃗ × AC⃗|"
      ],
      terms: [
        { term: "Position vector", meaning: "The vector OP⃗ from the origin O to a point P(x, y, z), i.e. xî + yĵ + zk̂." },
        { term: "Unit vector", meaning: "A vector of magnitude 1. The unit vector along a⃗ is â = a⃗/|a⃗|." },
        { term: "Collinear vectors", meaning: "Vectors parallel to the same line; b⃗ = λa⃗ for some scalar λ, so their components are proportional." },
        { term: "Direction cosines", meaning: "The cosines l, m, n of the angles a vector makes with the positive x-, y- and z-axes; l² + m² + n² = 1." },
        { term: "Scalar (dot) product", meaning: "a⃗·b⃗ = |a⃗||b⃗| cos θ = a₁b₁ + a₂b₂ + a₃b₃; it is a number, and it is **zero for perpendicular vectors**." },
        { term: "Vector (cross) product", meaning: "a⃗ × b⃗ = |a⃗||b⃗| sin θ n̂, a vector perpendicular to both; its magnitude is the area of the parallelogram on a⃗ and b⃗." }
      ],
      examples: [
        {
          q: "Find the angle between the vectors a⃗ = î + ĵ − k̂ and b⃗ = î − ĵ + k̂.",
          steps: [
            "a⃗·b⃗ = (1)(1) + (1)(−1) + (−1)(1) = 1 − 1 − 1 = −1.",
            "|a⃗| = √(1 + 1 + 1) = √3 and |b⃗| = √3.",
            "cos θ = a⃗·b⃗/(|a⃗||b⃗|) = −1/(√3 × √3) = −1/3.",
            "cos θ < 0, so the angle is obtuse."
          ],
          answer: "θ = cos⁻¹(−1/3) (about 109.5°)"
        },
        {
          q: "Find the area of the triangle with vertices A(1, 1, 1), B(1, 2, 3) and C(2, 3, 1).",
          steps: [
            "AB⃗ = (1 − 1)î + (2 − 1)ĵ + (3 − 1)k̂ = ĵ + 2k̂ and AC⃗ = î + 2ĵ + 0k̂.",
            "AB⃗ × AC⃗ = |î ĵ k̂; 0 1 2; 1 2 0| = î(1×0 − 2×2) − ĵ(0×0 − 2×1) + k̂(0×2 − 1×1).",
            "= −4î + 2ĵ − k̂.",
            "|AB⃗ × AC⃗| = √(16 + 4 + 1) = √21.",
            "Area = ½|AB⃗ × AC⃗| = √21/2."
          ],
          answer: "√21/2 square units"
        }
      ],
      qa: [
        { q: "Find the projection of the vector a⃗ = 2î + 3ĵ + 2k̂ on the vector b⃗ = î + 2ĵ + k̂.", a: "a⃗·b⃗ = 2 × 1 + 3 × 2 + 2 × 1 = 10 and |b⃗| = √(1 + 4 + 1) = √6. Projection = (a⃗·b⃗)/|b⃗| = 10/√6 = **5√6/3**." },
        { q: "Find a unit vector perpendicular to both a⃗ = î + ĵ + k̂ and b⃗ = î + 2ĵ + 3k̂.", a: "a⃗ × b⃗ = |î ĵ k̂; 1 1 1; 1 2 3| = î(3 − 2) − ĵ(3 − 1) + k̂(2 − 1) = î − 2ĵ + k̂, with magnitude √(1 + 4 + 1) = √6. Required unit vectors: **±(î − 2ĵ + k̂)/√6**." },
        { q: "If a⃗ and b⃗ are non-zero vectors with |a⃗ + b⃗| = |a⃗ − b⃗|, show that a⃗ is perpendicular to b⃗.", a: "Squaring: |a⃗|² + 2a⃗·b⃗ + |b⃗|² = |a⃗|² − 2a⃗·b⃗ + |b⃗|², so 4a⃗·b⃗ = 0, i.e. a⃗·b⃗ = 0. Since both vectors are non-zero, **a⃗ ⊥ b⃗**. (Geometrically, a parallelogram with equal diagonals is a rectangle.)" }
      ],
      quiz: [
        {
          q: "The value of λ for which 2î + λĵ + k̂ and î − 2ĵ + 3k̂ are perpendicular is:",
          options: ["−5/2", "5/2", "2/5", "1/2"],
          answer: 1,
          explain: "Perpendicular ⇒ dot product 0: 2 − 2λ + 3 = 0 ⇒ **λ = 5/2**."
        },
        {
          q: "If |a⃗| = 2, |b⃗| = 3 and a⃗·b⃗ = 3, the angle between a⃗ and b⃗ is:",
          options: ["π/6", "π/4", "π/3", "π/2"],
          answer: 2,
          explain: "cos θ = a⃗·b⃗/(|a⃗||b⃗|) = 3/6 = 1/2, so **θ = π/3**."
        },
        {
          q: "The value of î·(ĵ × k̂) + ĵ·(î × k̂) + k̂·(î × ĵ) is:",
          options: ["0", "−1", "3", "1"],
          answer: 3,
          explain: "ĵ × k̂ = î, î × k̂ = −ĵ and î × ĵ = k̂. So the sum = 1 + (−1) + 1 = **1**."
        },
        {
          q: "If |a⃗| = 10, |b⃗| = 2 and a⃗·b⃗ = 12, then |a⃗ × b⃗| is:",
          options: ["16", "12", "20", "8"],
          answer: 0,
          explain: "|a⃗ × b⃗|² = |a⃗|²|b⃗|² − (a⃗·b⃗)² = 400 − 144 = 256, so |a⃗ × b⃗| = **16**."
        },
        {
          q: "The direction cosines of the vector 2î − ĵ + 2k̂ are:",
          options: ["2, −1, 2", "2/9, −1/9, 2/9", "2/3, −1/3, 2/3", "2/√5, −1/√5, 2/√5"],
          answer: 2,
          explain: "|2î − ĵ + 2k̂| = √(4 + 1 + 4) = 3, so the direction cosines are **2/3, −1/3, 2/3**. 2, −1, 2 are direction ratios, not direction cosines."
        },
        {
          q: "The area of the parallelogram whose adjacent sides are 3î + ĵ + 4k̂ and î − ĵ + k̂ is:",
          options: ["√42/2 sq units", "√42 sq units", "42 sq units", "√26 sq units"],
          answer: 1,
          explain: "a⃗ × b⃗ = (1×1 − 4×(−1))î − (3×1 − 4×1)ĵ + (3×(−1) − 1×1)k̂ = 5î + ĵ − 4k̂, with magnitude √(25 + 1 + 16) = **√42**. √42/2 would be the area of the triangle."
        }
      ]
    },

    // ───────────────────────────── 11. Three Dimensional Geometry ─────────────────────────────
    {
      id: "three-dimensional-geometry",
      title: "Three Dimensional Geometry",
      section: "Vectors and 3D Geometry",
      summary: "Direction cosines and direction ratios of a line, vector and Cartesian equations of a line, the angle between two lines, and the shortest distance between skew and parallel lines.",
      notes: [
        {
          heading: "Direction cosines and direction ratios of a line",
          points: [
            "If a line makes angles α, β, γ with the positive x-, y- and z-axes, its **direction cosines** are l = cos α, m = cos β, n = cos γ.",
            "**l² + m² + n² = 1**, i.e. cos²α + cos²β + cos²γ = 1.",
            "Any three numbers a, b, c proportional to l, m, n are **direction ratios**; then l = ±a/√(a² + b² + c²), and similarly for m and n.",
            "Direction ratios of the line through P(x₁, y₁, z₁) and Q(x₂, y₂, z₂) are x₂ − x₁, y₂ − y₁, z₂ − z₁.",
            "Reversing the direction of a line changes the signs of all its direction cosines."
          ]
        },
        {
          heading: "Equation of a line",
          points: [
            "Through the point with position vector a⃗ and parallel to b⃗: **r⃗ = a⃗ + λb⃗** (λ is a real parameter).",
            "Cartesian form through (x₁, y₁, z₁) with direction ratios a, b, c: **(x − x₁)/a = (y − y₁)/b = (z − z₁)/c**.",
            "Through two points with position vectors a⃗ and b⃗: r⃗ = a⃗ + λ(b⃗ − a⃗); Cartesian: (x − x₁)/(x₂ − x₁) = (y − y₁)/(y₂ − y₁) = (z − z₁)/(z₂ − z₁).",
            "To read off direction ratios, the coefficients of x, y and z must be +1: (1 − x)/3 = … must first be written as (x − 1)/(−3) = ….",
            "A general point on the line is (x₁ + aλ, y₁ + bλ, z₁ + cλ); it is used to find feet of perpendiculars and points of intersection."
          ]
        },
        {
          heading: "Angle between two lines",
          points: [
            "For lines with direction ratios a₁, b₁, c₁ and a₂, b₂, c₂: cos θ = |a₁a₂ + b₁b₂ + c₁c₂| / [√(a₁² + b₁² + c₁²) √(a₂² + b₂² + c₂²)].",
            "In vector form, for r⃗ = a⃗₁ + λb⃗₁ and r⃗ = a⃗₂ + μb⃗₂: cos θ = |b⃗₁·b⃗₂|/(|b⃗₁||b⃗₂|).",
            "The lines are **perpendicular** if a₁a₂ + b₁b₂ + c₁c₂ = 0.",
            "The lines are **parallel** if a₁/a₂ = b₁/b₂ = c₁/c₂.",
            "With direction cosines: cos θ = |l₁l₂ + m₁m₂ + n₁n₂|."
          ]
        },
        {
          heading: "Skew lines and shortest distance",
          points: [
            "Two lines in space either intersect, are parallel, or are **skew** (neither intersecting nor parallel; they lie in different planes).",
            "The **shortest distance** between two lines is the length of the segment perpendicular to both of them.",
            "For r⃗ = a⃗₁ + λb⃗₁ and r⃗ = a⃗₂ + μb⃗₂: **d = |(b⃗₁ × b⃗₂)·(a⃗₂ − a⃗₁)| / |b⃗₁ × b⃗₂|**.",
            "If this distance is 0, the lines **intersect**.",
            "For parallel lines r⃗ = a⃗₁ + λb⃗ and r⃗ = a⃗₂ + μb⃗: **d = |b⃗ × (a⃗₂ − a⃗₁)| / |b⃗|**."
          ]
        }
      ],
      formulas: [
        "l = cos α, m = cos β, n = cos γ;  l² + m² + n² = 1",
        "From direction ratios a, b, c: l = ±a/√(a² + b² + c²), m = ±b/√(a² + b² + c²), n = ±c/√(a² + b² + c²)",
        "Direction ratios of PQ: x₂ − x₁, y₂ − y₁, z₂ − z₁",
        "PQ = √[(x₂ − x₁)² + (y₂ − y₁)² + (z₂ − z₁)²]",
        "Line through a⃗ parallel to b⃗: r⃗ = a⃗ + λb⃗;  (x − x₁)/a = (y − y₁)/b = (z − z₁)/c",
        "Line through two points: r⃗ = a⃗ + λ(b⃗ − a⃗);  (x − x₁)/(x₂ − x₁) = (y − y₁)/(y₂ − y₁) = (z − z₁)/(z₂ − z₁)",
        "Angle between lines: cos θ = |a₁a₂ + b₁b₂ + c₁c₂| / [√(a₁² + b₁² + c₁²) √(a₂² + b₂² + c₂²)]",
        "Vector form: cos θ = |b⃗₁·b⃗₂| / (|b⃗₁||b⃗₂|);  with direction cosines, cos θ = |l₁l₂ + m₁m₂ + n₁n₂|",
        "Perpendicular lines: a₁a₂ + b₁b₂ + c₁c₂ = 0;  parallel lines: a₁/a₂ = b₁/b₂ = c₁/c₂",
        "Shortest distance (skew lines): d = |(b⃗₁ × b⃗₂)·(a⃗₂ − a⃗₁)| / |b⃗₁ × b⃗₂|",
        "Distance between parallel lines r⃗ = a⃗₁ + λb⃗ and r⃗ = a⃗₂ + μb⃗: d = |b⃗ × (a⃗₂ − a⃗₁)| / |b⃗|",
        "Non-parallel lines intersect ⇔ (b⃗₁ × b⃗₂)·(a⃗₂ − a⃗₁) = 0"
      ],
      terms: [
        { term: "Direction cosines of a line", meaning: "cos α, cos β, cos γ, where α, β, γ are the angles the line makes with the positive x-, y- and z-axes; l² + m² + n² = 1." },
        { term: "Direction ratios", meaning: "Any three numbers proportional to the direction cosines of a line, e.g. 2, −1, 2 for the direction cosines 2/3, −1/3, 2/3." },
        { term: "Skew lines", meaning: "Lines in space that are neither parallel nor intersecting; they lie in different planes." },
        { term: "Shortest distance", meaning: "The length of the line segment perpendicular to both of two given lines; it is 0 for intersecting lines." },
        { term: "Vector equation of a line", meaning: "r⃗ = a⃗ + λb⃗: the line through the point with position vector a⃗, parallel to the vector b⃗." },
        { term: "Coplanar lines", meaning: "Lines that lie in the same plane; non-parallel coplanar lines intersect." }
      ],
      examples: [
        {
          q: "Find the angle between the lines (x + 3)/3 = (y − 1)/5 = (z + 3)/4 and (x + 1)/1 = (y − 4)/1 = (z − 5)/2.",
          steps: [
            "Direction ratios: 3, 5, 4 and 1, 1, 2.",
            "a₁a₂ + b₁b₂ + c₁c₂ = 3 + 5 + 8 = 16.",
            "√(9 + 25 + 16) = √50 = 5√2 and √(1 + 1 + 4) = √6.",
            "cos θ = 16/(5√2 × √6) = 16/(5√12) = 16/(10√3) = 8/(5√3) = 8√3/15."
          ],
          answer: "θ = cos⁻¹(8√3/15)"
        },
        {
          q: "Find the shortest distance between the lines r⃗ = (î + 2ĵ + k̂) + λ(î − ĵ + k̂) and r⃗ = (2î − ĵ − k̂) + μ(2î + ĵ + 2k̂).",
          steps: [
            "a⃗₁ = î + 2ĵ + k̂, b⃗₁ = î − ĵ + k̂; a⃗₂ = 2î − ĵ − k̂, b⃗₂ = 2î + ĵ + 2k̂.",
            "a⃗₂ − a⃗₁ = î − 3ĵ − 2k̂.",
            "b⃗₁ × b⃗₂ = |î ĵ k̂; 1 −1 1; 2 1 2| = î(−2 − 1) − ĵ(2 − 2) + k̂(1 + 2) = −3î + 3k̂, so |b⃗₁ × b⃗₂| = √18 = 3√2.",
            "(b⃗₁ × b⃗₂)·(a⃗₂ − a⃗₁) = (−3)(1) + 0(−3) + 3(−2) = −9.",
            "d = |−9|/(3√2) = 3/√2."
          ],
          answer: "Shortest distance = 3/√2 = 3√2/2 units"
        }
      ],
      qa: [
        { q: "Find the direction cosines of the line passing through the points (−2, 4, −5) and (1, 2, 3).", a: "Direction ratios: 1 − (−2), 2 − 4, 3 − (−5) = 3, −2, 8. √(9 + 4 + 64) = √77. Direction cosines: **3/√77, −2/√77, 8/√77**." },
        { q: "Find the value of p so that the lines (1 − x)/3 = (7y − 14)/(2p) = (z − 3)/2 and (7 − 7x)/(3p) = (y − 5)/1 = (6 − z)/5 are at right angles.", a: "Rewrite in standard form: (x − 1)/(−3) = (y − 2)/(2p/7) = (z − 3)/2 and (x − 1)/(−3p/7) = (y − 5)/1 = (z − 6)/(−5). For perpendicular lines: (−3)(−3p/7) + (2p/7)(1) + 2(−5) = 0 ⇒ 11p/7 = 10 ⇒ **p = 70/11**." },
        { q: "Find the distance between the parallel lines r⃗ = î + 2ĵ − 4k̂ + λ(2î + 3ĵ + 6k̂) and r⃗ = 3î + 3ĵ − 5k̂ + μ(2î + 3ĵ + 6k̂).", a: "b⃗ = 2î + 3ĵ + 6k̂, |b⃗| = 7, and a⃗₂ − a⃗₁ = 2î + ĵ − k̂. b⃗ × (a⃗₂ − a⃗₁) = |î ĵ k̂; 2 3 6; 2 1 −1| = −9î + 14ĵ − 4k̂, with magnitude √(81 + 196 + 16) = √293. Distance = **√293/7 units**." }
      ],
      quiz: [
        {
          q: "A line makes angles 90°, 135° and 45° with the positive x-, y- and z-axes. Its direction cosines are:",
          options: ["0, 1/√2, 1/√2", "1, −1/√2, 1/√2", "0, −1/√2, 1/√2", "0, −1/2, 1/2"],
          answer: 2,
          explain: "l = cos 90° = 0, m = cos 135° = −1/√2, n = cos 45° = 1/√2. Check: 0 + 1/2 + 1/2 = 1 ✓."
        },
        {
          q: "If a line makes angles α, β, γ with the coordinate axes, then cos 2α + cos 2β + cos 2γ equals:",
          options: ["1", "−1", "2", "0"],
          answer: 1,
          explain: "cos 2α = 2cos²α − 1, so the sum = 2(cos²α + cos²β + cos²γ) − 3 = 2 × 1 − 3 = **−1**."
        },
        {
          q: "The lines (x − 5)/7 = (y + 2)/(−5) = z/1 and x/1 = y/2 = z/3 are:",
          options: ["parallel", "inclined at 45°", "coincident", "perpendicular"],
          answer: 3,
          explain: "Direction ratios 7, −5, 1 and 1, 2, 3: 7 × 1 + (−5) × 2 + 1 × 3 = 7 − 10 + 3 = 0, so the lines are **perpendicular**."
        },
        {
          q: "The Cartesian equation of the line through (5, −2, 4) parallel to 3î + 2ĵ − 8k̂ is:",
          options: ["(x − 5)/3 = (y + 2)/2 = (z − 4)/(−8)", "(x + 5)/3 = (y − 2)/2 = (z + 4)/(−8)", "(x − 3)/5 = (y − 2)/(−2) = (z + 8)/4", "(x − 5)/3 = (y − 2)/2 = (z − 4)/8"],
          answer: 0,
          explain: "(x − x₁)/a = (y − y₁)/b = (z − z₁)/c with (x₁, y₁, z₁) = (5, −2, 4) and a, b, c = 3, 2, −8 gives **(x − 5)/3 = (y + 2)/2 = (z − 4)/(−8)**."
        },
        {
          q: "The direction ratios of the line (4 − x)/2 = (y + 1)/3 = (2z − 5)/6 are:",
          options: ["2, 3, 6", "−2, 3, 3", "−2, 3, 6", "2, 3, 3"],
          answer: 1,
          explain: "Make the coefficients of x, y, z equal to 1: (x − 4)/(−2) = (y + 1)/3 = (z − 5/2)/3. So the direction ratios are **−2, 3, 3**."
        },
        {
          q: "If the shortest distance between two non-parallel lines in space is 0, then the lines:",
          options: ["are skew lines", "are parallel and distinct", "intersect each other", "lie in different planes"],
          answer: 2,
          explain: "Skew lines always have a positive shortest distance. A distance of 0 between non-parallel lines means they have a common point, so they **intersect**."
        }
      ]
    },

    // ───────────────────────────── 12. Linear Programming ─────────────────────────────
    {
      id: "linear-programming",
      title: "Linear Programming",
      section: "Linear Programming",
      summary: "Formulating linear programming problems, feasible regions (bounded and unbounded), and finding the optimal value of a linear objective function by the graphical corner point method.",
      notes: [
        {
          heading: "Formulating a linear programming problem",
          points: [
            "A linear programming problem (LPP) asks for the **maximum or minimum** of a linear function Z = ax + by, called the **objective function**.",
            "x and y are the **decision variables**; they usually stand for quantities, so x ≥ 0 and y ≥ 0 (**non-negative constraints**).",
            "The other conditions are linear inequalities called **constraints**, e.g. x + 2y ≤ 10 for limited time, money or material.",
            "Read the problem, name the variables, write Z, then translate each restriction into an inequality."
          ]
        },
        {
          heading: "Feasible region",
          points: [
            "The common region of all the constraints, including x ≥ 0 and y ≥ 0, is the **feasible region**; every point in it is a **feasible solution**.",
            "Points outside it are **infeasible**. If no point satisfies all the constraints, the problem has **no feasible solution**.",
            "To shade ax + by ≤ c, draw the line ax + by = c and test a point such as (0, 0).",
            "A feasible region is **bounded** if it can be enclosed in a circle; otherwise it is **unbounded**.",
            "Corner points are found by solving the equations of pairs of boundary lines."
          ]
        },
        {
          heading: "Corner point method",
          points: [
            "**Theorem 1**: if Z has an optimal (maximum or minimum) value, it occurs at a **corner point** of the feasible region.",
            "**Theorem 2**: if the feasible region is **bounded**, Z has **both** a maximum and a minimum value, each at a corner point.",
            "Steps: draw the feasible region, find all its corner points, evaluate Z at each, and pick the largest (maximum) or smallest (minimum).",
            "If two corner points give the same optimal value, **every point on the segment joining them** is also optimal."
          ]
        },
        {
          heading: "Unbounded feasible regions",
          points: [
            "For an unbounded region, a maximum or minimum may not exist. Let M be the largest and m the smallest value of Z at the corner points.",
            "M is the maximum only if the open half-plane ax + by > M has **no point in common** with the feasible region; otherwise Z has no maximum.",
            "m is the minimum only if the open half-plane ax + by < m has no point in common with the feasible region; otherwise Z has no minimum.",
            "Draw the line ax + by = M (or m) on the graph to carry out this check."
          ]
        }
      ],
      formulas: [
        "Objective function: Z = ax + by (to be maximised or minimised)",
        "Non-negative constraints: x ≥ 0, y ≥ 0",
        "Optimal value (if it exists) occurs at a corner point of the feasible region",
        "Bounded feasible region ⇒ Z has both a maximum and a minimum, at corner points",
        "Unbounded region: the largest corner value M is the maximum only if ax + by > M has no point in the feasible region",
        "Unbounded region: the smallest corner value m is the minimum only if ax + by < m has no point in the feasible region",
        "Same optimal value at two corners ⇒ every point on the segment joining them is optimal"
      ],
      terms: [
        { term: "Objective function", meaning: "The linear function Z = ax + by that is to be maximised or minimised." },
        { term: "Constraints", meaning: "The linear inequalities (including x ≥ 0, y ≥ 0) that the decision variables must satisfy." },
        { term: "Feasible region", meaning: "The common region determined by all the constraints; its points are the feasible solutions." },
        { term: "Optimal solution", meaning: "A feasible point that gives the maximum or minimum value of the objective function." },
        { term: "Corner point", meaning: "A vertex of the feasible region, where two boundary lines meet; optimal values occur at corner points." },
        { term: "Unbounded region", meaning: "A feasible region that extends indefinitely in some direction; a maximum or minimum may then fail to exist." }
      ],
      examples: [
        {
          q: "Maximise Z = 4x + y subject to x + y ≤ 50, 3x + y ≤ 90, x ≥ 0, y ≥ 0.",
          steps: [
            "Draw x + y = 50 (through (50, 0) and (0, 50)) and 3x + y = 90 (through (30, 0) and (0, 90)). The feasible region lies on or below both lines in the first quadrant.",
            "Corner points: O(0, 0), A(30, 0), C(0, 50), and B where x + y = 50 meets 3x + y = 90: subtracting, 2x = 40, so x = 20 and y = 30.",
            "Z at O(0, 0) = 0; at A(30, 0) = 120; at B(20, 30) = 80 + 30 = 110; at C(0, 50) = 50.",
            "The region is bounded, so the largest corner value is the maximum."
          ],
          answer: "Maximum Z = 120 at (30, 0)"
        },
        {
          q: "Minimise Z = 3x + 5y subject to x + 3y ≥ 3, x + y ≥ 2, x ≥ 0, y ≥ 0.",
          steps: [
            "x + 3y = 3 passes through (3, 0) and (0, 1); x + y = 2 passes through (2, 0) and (0, 2). The feasible region lies on or above both lines in the first quadrant, so it is unbounded.",
            "Corner points: A(3, 0), C(0, 2), and B where x + 3y = 3 meets x + y = 2: subtracting, 2y = 1, so y = 1/2 and x = 3/2.",
            "Z at A(3, 0) = 9; at B(3/2, 1/2) = 9/2 + 5/2 = 7; at C(0, 2) = 10.",
            "The smallest corner value is 7. As the region is unbounded, check the half-plane 3x + 5y < 7: it has no point in common with the feasible region, so 7 is the minimum."
          ],
          answer: "Minimum Z = 7 at (3/2, 1/2)"
        }
      ],
      qa: [
        { q: "Maximise Z = 3x + 2y subject to x + 2y ≤ 10, 3x + y ≤ 15, x ≥ 0, y ≥ 0.", a: "The lines x + 2y = 10 and 3x + y = 15 meet where y = 15 − 3x and x + 30 − 6x = 10, i.e. x = 4, y = 3. Corner points: (0, 0), (5, 0), (4, 3), (0, 5), giving Z = 0, 15, 18, 10. The region is bounded, so **maximum Z = 18 at (4, 3)**." },
        { q: "Show that the problem 'Maximise Z = x + y subject to x − y ≤ −1, −x + y ≤ 0, x ≥ 0, y ≥ 0' has no solution.", a: "x − y ≤ −1 means y ≥ x + 1, while −x + y ≤ 0 means y ≤ x. No point can satisfy both y ≥ x + 1 and y ≤ x, so there is **no feasible region**, and hence no maximum value of Z." },
        { q: "The corner points of a bounded feasible region are (0, 2), (3, 0), (6, 0), (6, 8) and (0, 5). Find the maximum and minimum values of Z = 4x + 6y.", a: "Z at the corners: (0, 2) → 12, (3, 0) → 12, (6, 0) → 24, (6, 8) → 72, (0, 5) → 30. **Maximum = 72 at (6, 8)**. **Minimum = 12**, attained at both (0, 2) and (3, 0), and therefore at every point of the segment joining them." }
      ],
      quiz: [
        {
          q: "In a linear programming problem, the optimal value of the objective function, if it exists, occurs at:",
          options: ["the origin always", "any interior point of the feasible region", "a corner point of the feasible region", "the centre of the feasible region"],
          answer: 2,
          explain: "By the fundamental theorem of linear programming, an optimal value, when it exists, is attained at a **corner point (vertex)** of the feasible region."
        },
        {
          q: "The corner points of a bounded feasible region are (0, 0), (5, 0), (3, 4) and (0, 5). The maximum value of Z = 2x + 3y is:",
          options: ["15", "18", "10", "20"],
          answer: 1,
          explain: "Z = 0, 10, 2 × 3 + 3 × 4 = 18 and 15 at the four corners. Maximum = **18** at (3, 4)."
        },
        {
          q: "The corner points of a feasible region are (0, 10), (5, 5), (15, 15) and (0, 20). If Z = px + qy (p, q > 0) has its maximum at both (15, 15) and (0, 20), then:",
          options: ["p = q", "p = 2q", "p = 3q", "q = 3p"],
          answer: 3,
          explain: "Equal values at the two points: 15p + 15q = 20q ⇒ 15p = 5q ⇒ **q = 3p**."
        },
        {
          q: "The feasible region of an LPP is the set of all points that:",
          options: ["satisfy all the constraints, including non-negativity", "satisfy at least one of the constraints", "give the maximum value of Z", "lie on the coordinate axes"],
          answer: 0,
          explain: "The feasible region is the **common region** of all the constraints; only points satisfying every constraint are feasible."
        },
        {
          q: "Which point does NOT lie in the half-plane 2x + 3y − 12 ≤ 0?",
          options: ["(1, 2)", "(2, 1)", "(2, 3)", "(−3, 2)"],
          answer: 2,
          explain: "At (2, 3): 4 + 9 − 12 = 1 > 0, so it lies **outside**. The other points give −4, −5 and −12, all ≤ 0."
        },
        {
          q: "The maximum value of Z = 3x + 4y subject to x + y ≤ 4, x ≥ 0, y ≥ 0 is:",
          options: ["12", "28", "4", "16"],
          answer: 3,
          explain: "Corner points (0, 0), (4, 0) and (0, 4) give Z = 0, 12 and 16. Maximum = **16** at (0, 4)."
        }
      ]
    },

    // ───────────────────────────── 13. Probability ─────────────────────────────
    {
      id: "probability",
      title: "Probability",
      section: "Probability",
      summary: "Conditional probability, the multiplication theorem, independent events, the theorem of total probability, Bayes' theorem, and random variables with their probability distributions and mean.",
      notes: [
        {
          heading: "Conditional probability",
          points: [
            "The probability of E given that F has occurred is **P(E|F) = P(E ∩ F)/P(F)**, provided P(F) ≠ 0.",
            "For equally likely outcomes, P(E|F) = n(E ∩ F)/n(F): F becomes the new, reduced sample space.",
            "0 ≤ P(E|F) ≤ 1, P(S|F) = P(F|F) = 1 and P(E′|F) = 1 − P(E|F).",
            "P[(A ∪ B)|F] = P(A|F) + P(B|F) − P[(A ∩ B)|F]."
          ]
        },
        {
          heading: "Multiplication theorem",
          points: [
            "**P(E ∩ F) = P(E)·P(F|E) = P(F)·P(E|F)**.",
            "For three events: P(E ∩ F ∩ G) = P(E)·P(F|E)·P(G|E ∩ F).",
            "It is used for draws **without replacement**, where each draw changes the probabilities for the next.",
            "Example: P(two aces in two draws without replacement) = (4/52) × (3/51) = 1/221."
          ]
        },
        {
          heading: "Independent events",
          points: [
            "E and F are **independent** if P(E ∩ F) = P(E)·P(F); equivalently P(E|F) = P(E) when P(F) ≠ 0.",
            "If E and F are independent, so are E and F′, E′ and F, and E′ and F′.",
            "For independent events, P(at least one of E, F) = 1 − P(E′)·P(F′).",
            "**Independent is not the same as mutually exclusive**: mutually exclusive events with non-zero probabilities can never be independent, since P(E ∩ F) = 0 ≠ P(E)P(F).",
            "Three events are mutually independent only if every pair is independent **and** P(E ∩ F ∩ G) = P(E)P(F)P(G)."
          ]
        },
        {
          heading: "Total probability and Bayes' theorem",
          points: [
            "E₁, E₂, …, Eₙ form a **partition** of S if they are pairwise disjoint, their union is S, and each has non-zero probability.",
            "**Total probability**: P(A) = P(E₁)P(A|E₁) + P(E₂)P(A|E₂) + … + P(Eₙ)P(A|Eₙ).",
            "**Bayes' theorem**: P(Eᵢ|A) = P(Eᵢ)P(A|Eᵢ) / ∑ P(Eⱼ)P(A|Eⱼ). It gives the probability of a **cause** once the **result** is known.",
            "The Eᵢ are **hypotheses**; P(Eᵢ) are **prior** probabilities and P(Eᵢ|A) are **posterior** probabilities.",
            "Define E₁, E₂ (which bag, machine or person) and A (the observed event) clearly before substituting."
          ]
        },
        {
          heading: "Random variables and their mean",
          points: [
            "A **random variable** X is a real-valued function on the sample space, e.g. the number of heads in 3 tosses of a coin.",
            "Its **probability distribution** lists each value xᵢ with its probability pᵢ, where pᵢ ≥ 0 and ∑pᵢ = 1.",
            "**Mean (expectation)**: E(X) = μ = ∑ xᵢpᵢ = x₁p₁ + x₂p₂ + … + xₙpₙ.",
            "If the probabilities involve an unknown k, first use ∑pᵢ = 1 to find k.",
            "The mean need not be a possible value of X: the mean score on a fair die is 3.5."
          ]
        }
      ],
      formulas: [
        "P(E|F) = P(E ∩ F)/P(F), P(F) ≠ 0",
        "P(E′|F) = 1 − P(E|F);  P(S|F) = P(F|F) = 1",
        "P(E ∩ F) = P(E)·P(F|E) = P(F)·P(E|F)",
        "P(E ∩ F ∩ G) = P(E)·P(F|E)·P(G|E ∩ F)",
        "Independent events: P(E ∩ F) = P(E)·P(F)",
        "P(A ∪ B) = P(A) + P(B) − P(A ∩ B)",
        "Independent A, B: P(neither) = P(A′)P(B′);  P(at least one) = 1 − P(A′)P(B′)",
        "Total probability: P(A) = ∑ P(Eᵢ)·P(A|Eᵢ)",
        "Bayes: P(Eᵢ|A) = P(Eᵢ)P(A|Eᵢ) / ∑ⱼ P(Eⱼ)P(A|Eⱼ)",
        "Probability distribution: pᵢ ≥ 0 and ∑pᵢ = 1",
        "Mean: E(X) = ∑ xᵢpᵢ"
      ],
      terms: [
        { term: "Conditional probability", meaning: "P(E|F), the probability of E when F is known to have occurred: P(E ∩ F)/P(F)." },
        { term: "Independent events", meaning: "Events where the occurrence of one does not change the probability of the other: P(E ∩ F) = P(E)P(F)." },
        { term: "Partition of a sample space", meaning: "A set of pairwise disjoint events, each with non-zero probability, whose union is the whole sample space." },
        { term: "Bayes' theorem", meaning: "A formula for the probability of a cause Eᵢ given an observed result A: P(Eᵢ|A) = P(Eᵢ)P(A|Eᵢ) / ∑P(Eⱼ)P(A|Eⱼ)." },
        { term: "Random variable", meaning: "A real-valued function defined on the sample space of a random experiment, e.g. the number of sixes when two dice are thrown." },
        { term: "Mean (expectation)", meaning: "E(X) = ∑xᵢpᵢ, the probability-weighted average of the values of a random variable." }
      ],
      examples: [
        {
          q: "Bag I contains 3 red and 4 black balls; Bag II contains 5 red and 6 black balls. A bag is chosen at random and a ball drawn from it is red. Find the probability that it was drawn from Bag II.",
          steps: [
            "Let E₁: Bag I is chosen, E₂: Bag II is chosen, A: the ball drawn is red. P(E₁) = P(E₂) = 1/2.",
            "P(A|E₁) = 3/7 and P(A|E₂) = 5/11.",
            "Total probability: P(A) = (1/2)(3/7) + (1/2)(5/11) = (1/2) × (33 + 35)/77 = 34/77.",
            "Bayes' theorem: P(E₂|A) = (1/2)(5/11) ÷ (34/77) = (5/22) × (77/34) = 385/748 = 35/68."
          ],
          answer: "35/68"
        },
        {
          q: "Two dice are thrown. Find the probability distribution of X, the number of sixes, and its mean.",
          steps: [
            "X can be 0, 1 or 2. Each die shows a six with probability 1/6.",
            "P(X = 0) = no six on either die = (5/6)(5/6) = 25/36.",
            "P(X = 1) = exactly one six = (1/6)(5/6) + (5/6)(1/6) = 10/36.",
            "P(X = 2) = both sixes = 1/36. Check: 25/36 + 10/36 + 1/36 = 1 ✓.",
            "E(X) = 0 × 25/36 + 1 × 10/36 + 2 × 1/36 = 12/36."
          ],
          answer: "X = 0, 1, 2 with probabilities 25/36, 10/36, 1/36; mean E(X) = 1/3"
        }
      ],
      qa: [
        { q: "If P(A) = 0.8, P(B) = 0.5 and P(B|A) = 0.4, find P(A ∩ B), P(A|B) and P(A ∪ B).", a: "P(A ∩ B) = P(A)·P(B|A) = 0.8 × 0.4 = **0.32**. P(A|B) = P(A ∩ B)/P(B) = 0.32/0.5 = **0.64**. P(A ∪ B) = 0.8 + 0.5 − 0.32 = **0.98**." },
        { q: "A die is thrown. E is the event 'the number is a multiple of 3' and F is 'the number is even'. Are E and F independent?", a: "E = {3, 6}, F = {2, 4, 6}, E ∩ F = {6}. P(E) = 1/3, P(F) = 1/2 and P(E ∩ F) = 1/6. Since P(E)·P(F) = 1/3 × 1/2 = 1/6 = P(E ∩ F), **E and F are independent**." },
        { q: "In a factory, machine A produces 60% and machine B 40% of the items. 2% of A's items and 1% of B's items are defective. An item chosen at random is found to be defective. Find the probability that it was produced by machine B.", a: "Let E₁, E₂ be 'made by A', 'made by B' and D 'defective'. P(D) = 0.6 × 0.02 + 0.4 × 0.01 = 0.012 + 0.004 = 0.016. By Bayes' theorem, P(E₂|D) = 0.004/0.016 = **1/4**." }
      ],
      quiz: [
        {
          q: "A and B are independent events with P(A) = 0.3 and P(B) = 0.6. The probability that neither A nor B occurs is:",
          options: ["0.18", "0.72", "0.28", "0.1"],
          answer: 2,
          explain: "P(A′ ∩ B′) = P(A′)P(B′) = 0.7 × 0.4 = **0.28**. 0.72 is P(A ∪ B) and 0.18 is P(A ∩ B)."
        },
        {
          q: "A family has two children. Given that at least one of them is a boy, the probability that both are boys is:",
          options: ["1/2", "1/3", "1/4", "2/3"],
          answer: 1,
          explain: "The reduced sample space is {BB, BG, GB} (3 equally likely cases), and only BB has two boys, so the probability is **1/3**."
        },
        {
          q: "If A and B are mutually exclusive events with P(A) > 0 and P(B) > 0, then:",
          options: ["they are always independent", "P(A ∩ B) = P(A)·P(B)", "P(A|B) = P(A)", "they are not independent"],
          answer: 3,
          explain: "P(A ∩ B) = 0 but P(A)·P(B) > 0, so P(A ∩ B) ≠ P(A)P(B): mutually exclusive events with non-zero probabilities are **never independent**."
        },
        {
          q: "A random variable X takes the values 0, 1, 2, 3 with probabilities k, 2k, 3k, 4k respectively. The mean E(X) is:",
          options: ["2", "1.5", "2.5", "3"],
          answer: 0,
          explain: "k + 2k + 3k + 4k = 1 ⇒ k = 1/10. E(X) = 0(0.1) + 1(0.2) + 2(0.3) + 3(0.4) = 0.2 + 0.6 + 1.2 = **2**."
        },
        {
          q: "Two cards are drawn one after the other without replacement from a well-shuffled pack of 52 cards. The probability that both are kings is:",
          options: ["1/169", "2/221", "1/13", "1/221"],
          answer: 3,
          explain: "Multiplication theorem: (4/52) × (3/51) = 12/2652 = **1/221**. 1/169 = (4/52)² would be the answer with replacement."
        },
        {
          q: "A man speaks the truth 3 out of 4 times. He throws a die and reports that it is a six. The probability that it is actually a six is:",
          options: ["3/4", "3/8", "1/6", "5/8"],
          answer: 1,
          explain: "E₁: six occurs (1/6), E₂: no six (5/6); A: he reports a six. P(A|E₁) = 3/4, P(A|E₂) = 1/4. Bayes: (1/6)(3/4) ÷ [(1/6)(3/4) + (5/6)(1/4)] = (3/24) ÷ (8/24) = **3/8**."
        }
      ]
    }
  ]
});
